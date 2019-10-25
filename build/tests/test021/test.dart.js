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
a[c]=function(){a[c]=function(){H.oG(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kD(this,a,b,c,true,false,e).prototype
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
jL:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
ft:function(){return new P.c5("No element")},
mI:function(){return new P.c5("Too many elements")},
de:function(a,b,c,d){if(c-b<=32)H.nc(a,b,c,d)
else H.nb(a,b,c,d)},
nc:function(a,b,c,d){var u,t,s,r,q
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
nb:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.c.a4(a4-a3+1,6),d=a3+e,c=a4-e,b=C.c.a4(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(J.D(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.R()
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
if(typeof g!=="number")return g.R()
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
H.de(a2,a3,o-2,a5)
H.de(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.b(a2,o)
if(!J.D(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.b(a2,n)
if(!J.D(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
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
break}}}H.de(a2,o,n,a5)}else H.de(a2,o,n,a5)},
m:function m(a){this.a=a},
f8:function f8(){},
cZ:function cZ(){},
bU:function bU(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fM:function fM(a,b,c){this.a=a
this.b=b
this.$ti=c},
fN:function fN(a,b){this.a=null
this.b=a
this.c=b},
fO:function fO(a,b,c){this.a=a
this.b=b
this.$ti=c},
cf:function cf(a,b,c){this.a=a
this.b=b
this.$ti=c},
iM:function iM(a,b){this.a=a
this.b=b},
cQ:function cQ(){},
io:function io(){},
du:function du(){},
mA:function(){throw H.d(P.x("Cannot modify unmodifiable Map"))},
ez:function(a){var u,t=H.oH(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oq:function(a){return v.types[a]},
lU:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.R(a).$iB},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a1(a)
if(typeof u!=="string")throw H.d(H.ak(a))
return u},
c2:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
n3:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.b(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.W(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.D(s,q)|32)>t)return}return parseInt(a,b)},
c3:function(a){return H.mV(a)+H.lH(H.cy(a),0,null)},
mV:function(a){var u,t,s,r,q,p,o,n=J.R(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.Q||!!n.$iby){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.ez(t.length>1&&C.a.D(t,0)===36?C.a.a6(t,1):t)},
mW:function(){if(!!self.location)return self.location.href
return},
lc:function(a){var u,t,s,r,q=J.ac(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
n4:function(a){var u,t,s,r=H.c([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.ak(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aK(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.d(H.ak(s))}return H.lc(r)},
ld:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.ak(s))
if(s<0)throw H.d(H.ak(s))
if(s>65535)return H.n4(a)}return H.lc(a)},
n5:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bs:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aK(u,10))>>>0,56320|u&1023)}}throw H.d(P.W(a,0,1114111,null,null))},
br:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
n2:function(a){var u=H.br(a).getFullYear()+0
return u},
n0:function(a){var u=H.br(a).getMonth()+1
return u},
mX:function(a){var u=H.br(a).getDate()+0
return u},
mY:function(a){var u=H.br(a).getHours()+0
return u},
n_:function(a){var u=H.br(a).getMinutes()+0
return u},
n1:function(a){var u=H.br(a).getSeconds()+0
return u},
mZ:function(a){var u=H.br(a).getMilliseconds()+0
return u},
v:function(a){throw H.d(H.ak(a))},
b:function(a,b){if(a==null)J.ac(a)
throw H.d(H.bE(a,b))},
bE:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ah(!0,b,s,null)
u=J.ac(a)
if(!(b<0)){if(typeof u!=="number")return H.v(u)
t=b>=u}else t=!0
if(t)return P.J(b,a,s,null,u)
return P.da(b,s)},
ok:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bt(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bt(a,c,!0,b,"end",u)
return new P.ah(!0,b,"end",null)},
ak:function(a){return new P.ah(!0,a,null,null)},
d:function(a){var u
if(a==null)a=new P.d7()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.m_})
u.name=""}else u.toString=H.m_
return u},
m_:function(){return J.a1(this.dartException)},
t:function(a){throw H.d(a)},
o:function(a){throw H.d(P.az(a))},
av:function(a){var u,t,s,r,q,p
a=H.lY(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.k])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.i9(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ia:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lm:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
l9:function(a,b){return new H.hi(a,b==null?null:b.method)},
kl:function(a,b){var u=b==null,t=u?null:b.method
return new H.fy(a,t,u?null:b.receiver)},
ab:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.k4(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aK(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kl(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.l9(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.m3()
q=$.m4()
p=$.m5()
o=$.m6()
n=$.m9()
m=$.ma()
l=$.m8()
$.m7()
k=$.mc()
j=$.mb()
i=r.ac(u)
if(i!=null)return f.$1(H.kl(u,i))
else{i=q.ac(u)
if(i!=null){i.method="call"
return f.$1(H.kl(u,i))}else{i=p.ac(u)
if(i==null){i=o.ac(u)
if(i==null){i=n.ac(u)
if(i==null){i=m.ac(u)
if(i==null){i=l.ac(u)
if(i==null){i=o.ac(u)
if(i==null){i=k.ac(u)
if(i==null){i=j.ac(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.l9(u,i))}}return f.$1(new H.im(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dg()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ah(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dg()
return a},
kG:function(a){var u
if(a==null)return new H.e9(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.e9(a)},
oo:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
ow:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.u("Unsupported number of arguments for wrapped closure"))},
bD:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ow)
a.$identity=u
return u},
mz:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hQ().constructor.prototype):Object.create(new H.bI(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.al
if(typeof t!=="number")return t.B()
$.al=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.kY(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mv(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.kY(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mv:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oq,a)
if(typeof a=="function")if(b)return a
else{u=c?H.kW:H.k8
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
mw:function(a,b,c,d){var u=H.k8
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kY:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.my(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mw(t,!r,u,b)
if(t===0){r=$.al
if(typeof r!=="number")return r.B()
$.al=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bJ
return new Function(r+H.e(q==null?$.bJ=H.eN("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.al
if(typeof r!=="number")return r.B()
$.al=r+1
o+=r
r="return function("+o+"){return this."
q=$.bJ
return new Function(r+H.e(q==null?$.bJ=H.eN("self"):q)+"."+H.e(u)+"("+o+");}")()},
mx:function(a,b,c,d){var u=H.k8,t=H.kW
switch(b?-1:a){case 0:throw H.d(H.n9("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
my:function(a,b){var u,t,s,r,q,p,o,n=$.bJ
if(n==null)n=$.bJ=H.eN("self")
u=$.kV
if(u==null)u=$.kV=H.eN("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mx(s,!q,t,b)
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
kD:function(a,b,c,d,e,f,g){return H.mz(a,b,c,d,!!e,!!f,g)},
k8:function(a){return a.a},
kW:function(a){return a.c},
eN:function(a){var u,t,s,r=new H.bI("self","target","receiver","name"),q=J.ki(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
oB:function(a,b){throw H.d(H.mu(a,H.ez(b.substring(2))))},
q:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.R(a)[b]
else u=!0
if(u)return a
H.oB(a,b)},
om:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mu:function(a,b){return new H.eO("CastError: "+P.kf(a)+": type '"+H.e(H.oe(a))+"' is not a subtype of type '"+b+"'")},
oe:function(a){var u,t=J.R(a)
if(!!t.$ibK){u=H.om(t)
if(u!=null)return H.oC(u)
return"Closure"}return H.c3(a)},
oG:function(a){throw H.d(new P.f_(a))},
n9:function(a){return new H.hA(a)},
lS:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
cy:function(a){if(a==null)return
return a.$ti},
pf:function(a,b,c){return H.k1(a["$a"+H.e(c)],H.cy(b))},
op:function(a,b,c,d){var u=H.k1(a["$a"+H.e(c)],H.cy(b))
return u==null?null:u[d]},
kF:function(a,b,c){var u=H.k1(a["$a"+H.e(b)],H.cy(a))
return u==null?null:u[c]},
cz:function(a,b){var u=H.cy(a)
return u==null?null:u[b]},
oC:function(a){return H.bd(a,null)},
bd:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ez(a[0].name)+H.lH(a,1,b)
if(typeof a=="function")return H.ez(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.e(b[t])}if('func' in a)return H.nN(a,b)
if('futureOr' in a)return"FutureOr<"+H.bd("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nN:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
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
if(l!=null&&l!==P.a_)p+=" extends "+H.bd(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bd(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bd(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bd(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.on(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bd(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lH:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.Q("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bd(p,c)}return"<"+u.h(0)+">"},
k1:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pd:function(a,b,c){return a.apply(b,H.k1(J.R(b)["$a"+H.e(c)],H.cy(b)))},
pe:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oy:function(a){var u,t,s,r,q=$.lT.$1(a),p=$.jJ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jP[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.lM.$2(a,q)
if(q!=null){p=$.jJ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jP[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jY(u)
$.jJ[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jP[q]=u
return u}if(s==="-"){r=H.jY(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lW(a,u)
if(s==="*")throw H.d(P.il(q))
if(v.leafTags[q]===true){r=H.jY(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lW(a,u)},
lW:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kI(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jY:function(a){return J.kI(a,!1,null,!!a.$iB)},
oz:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jY(u)
else return J.kI(u,c,null,null)},
ou:function(){if(!0===$.kH)return
$.kH=!0
H.ov()},
ov:function(){var u,t,s,r,q,p,o,n
$.jJ=Object.create(null)
$.jP=Object.create(null)
H.ot()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lX.$1(q)
if(p!=null){o=H.oz(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
ot:function(){var u,t,s,r,q,p,o=C.F()
o=H.bC(C.G,H.bC(C.H,H.bC(C.u,H.bC(C.u,H.bC(C.I,H.bC(C.J,H.bC(C.K(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lT=new H.jM(r)
$.lM=new H.jN(q)
$.lX=new H.jO(p)},
bC:function(a,b){return a(b)||b},
mK:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(P.O("Illegal RegExp pattern ("+String(p)+")",a,null))},
oE:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
ol:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lY:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kK:function(a,b,c){var u=H.oF(a,b,c)
return u},
oF:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lY(b),'g'),H.ol(c))},
eT:function eT(){},
eU:function eU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i9:function i9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hi:function hi(a,b){this.a=a
this.b=b},
fy:function fy(a,b,c){this.a=a
this.b=b
this.c=c},
im:function im(a){this.a=a},
k4:function k4(a){this.a=a},
e9:function e9(a){this.a=a
this.b=null},
bK:function bK(){},
hY:function hY(){},
hQ:function hQ(){},
bI:function bI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eO:function eO(a){this.a=a},
hA:function hA(a){this.a=a},
N:function N(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fC:function fC(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fD:function fD(a,b){this.a=a
this.$ti=b},
fE:function fE(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jM:function jM(a){this.a=a},
jN:function jN(a){this.a=a},
jO:function jO(a){this.a=a},
fx:function fx(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ct:function(a){return a},
mT:function(a){return new Int8Array(a)},
aw:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bE(b,a))},
nL:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.ok(a,b,c))
return b},
bY:function bY(){},
b2:function b2(){},
d2:function d2(){},
bZ:function bZ(){},
d3:function d3(){},
ha:function ha(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(){},
he:function he(){},
d4:function d4(){},
c_:function c_(){},
cj:function cj(){},
ck:function ck(){},
cl:function cl(){},
cm:function cm(){},
on:function(a){return J.l1(a?Object.keys(a):[],null)},
oH:function(a){return v.mangledGlobalNames[a]},
oA:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kI:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jK:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kH==null){H.ou()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.il("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kM()]
if(r!=null)return r
r=H.oy(a)
if(r!=null)return r
if(typeof a=="function")return C.R
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.kM(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
mJ:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.kT(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.W(a,0,4294967295,"length",null))
return J.l1(new Array(a),b)},
l1:function(a,b){return J.ki(H.c(a,[b]))},
ki:function(a){a.fixed$length=Array
return a},
R:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cT.prototype
return J.fw.prototype}if(typeof a=="string")return J.aY.prototype
if(a==null)return J.cU.prototype
if(typeof a=="boolean")return J.fv.prototype
if(a.constructor==Array)return J.aX.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aZ.prototype
return a}if(a instanceof P.a_)return a
return J.jK(a)},
cw:function(a){if(typeof a=="string")return J.aY.prototype
if(a==null)return a
if(a.constructor==Array)return J.aX.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aZ.prototype
return a}if(a instanceof P.a_)return a
return J.jK(a)},
ex:function(a){if(a==null)return a
if(a.constructor==Array)return J.aX.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aZ.prototype
return a}if(a instanceof P.a_)return a
return J.jK(a)},
lR:function(a){if(typeof a=="number")return J.bS.prototype
if(typeof a=="string")return J.aY.prototype
if(a==null)return a
if(!(a instanceof P.a_))return J.by.prototype
return a},
cx:function(a){if(typeof a=="string")return J.aY.prototype
if(a==null)return a
if(!(a instanceof P.a_))return J.by.prototype
return a},
bG:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aZ.prototype
return a}if(a instanceof P.a_)return a
return J.jK(a)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.R(a).q(a,b)},
kO:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lR(a).p(a,b)},
cC:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lU(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cw(a).i(a,b)},
k6:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.lU(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.ex(a).m(a,b,c)},
ml:function(a,b){return J.cx(a).D(a,b)},
mm:function(a,b,c){return J.bG(a).fG(a,b,c)},
mn:function(a,b,c,d){return J.bG(a).fZ(a,b,c,d)},
mo:function(a,b){return J.cx(a).V(a,b)},
k7:function(a,b){return J.lR(a).h9(a,b)},
eA:function(a,b){return J.ex(a).J(a,b)},
mp:function(a,b,c,d){return J.bG(a).hk(a,b,c,d)},
kP:function(a,b){return J.ex(a).H(a,b)},
mq:function(a){return J.bG(a).gh4(a)},
kQ:function(a){return J.bG(a).gbV(a)},
cD:function(a){return J.R(a).gI(a)},
aS:function(a){return J.ex(a).gT(a)},
ac:function(a){return J.cw(a).gl(a)},
kR:function(a){return J.ex(a).hR(a)},
mr:function(a,b){return J.bG(a).hV(a,b)},
ms:function(a,b,c){return J.cx(a).t(a,b,c)},
mt:function(a){return J.cx(a).i1(a)},
a1:function(a){return J.R(a).h(a)},
a:function a(){},
fv:function fv(){},
cU:function cU(){},
cV:function cV(){},
hm:function hm(){},
by:function by(){},
aZ:function aZ(){},
aX:function aX(a){this.$ti=a},
kj:function kj(a){this.$ti=a},
a2:function a2(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bS:function bS(){},
cT:function cT(){},
fw:function fw(){},
aY:function aY(){}},P={
nn:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.of()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bD(new P.iO(s),1)).observe(u,{childList:true})
return new P.iN(s,u,t)}else if(self.setImmediate!=null)return P.og()
return P.oh()},
no:function(a){self.scheduleImmediate(H.bD(new P.iP(a),0))},
np:function(a){self.setImmediate(H.bD(new P.iQ(a),0))},
nq:function(a){P.kq(C.n,a)},
kq:function(a,b){var u=C.c.a4(a.a,1000)
return P.nv(u<0?0:u,b)},
ll:function(a,b){var u=C.c.a4(a.a,1000)
return P.nw(u<0?0:u,b)},
nv:function(a,b){var u=new P.ef()
u.eo(a,b)
return u},
nw:function(a,b){var u=new P.ef()
u.ep(a,b)
return u},
o8:function(){var u,t
for(;u=$.bB,u!=null;){$.cv=null
t=u.b
$.bB=t
if(t==null)$.cu=null
u.a.$0()}},
od:function(){$.kA=!0
try{P.o8()}finally{$.cv=null
$.kA=!1
if($.bB!=null)$.kN().$1(P.lN())}},
ob:function(a){var u=new P.dC(a)
if($.bB==null){$.bB=$.cu=u
if(!$.kA)$.kN().$1(P.lN())}else $.cu=$.cu.b=u},
oc:function(a){var u,t,s=$.bB
if(s==null){P.ob(a)
$.cv=$.cu
return}u=new P.dC(a)
t=$.cv
if(t==null){u.b=s
$.bB=$.cv=u}else{u.b=t.b
$.cv=t.b=u
if(u.b==null)$.cu=u}},
lk:function(a,b){var u=$.aj
if(u===C.f)return P.kq(a,b)
return P.kq(a,u.h5(b))},
nf:function(a,b){var u=$.aj
if(u===C.f)return P.ll(a,b)
return P.ll(a,u.d2(b,P.dm))},
lI:function(a,b,c,d,e){var u={}
u.a=d
P.oc(new P.jC(u,e))},
o9:function(a,b,c,d){var u,t=$.aj
if(t===c)return d.$0()
$.aj=c
u=t
try{t=d.$0()
return t}finally{$.aj=u}},
oa:function(a,b,c,d,e){var u,t=$.aj
if(t===c)return d.$1(e)
$.aj=c
u=t
try{t=d.$1(e)
return t}finally{$.aj=u}},
iO:function iO(a){this.a=a},
iN:function iN(a,b,c){this.a=a
this.b=b
this.c=c},
iP:function iP(a){this.a=a},
iQ:function iQ(a){this.a=a},
ef:function ef(){this.c=0},
jk:function jk(a,b){this.a=a
this.b=b},
jj:function jj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dC:function dC(a){this.a=a
this.b=null},
di:function di(){},
hT:function hT(){},
dm:function dm(){},
jt:function jt(){},
jC:function jC(a,b){this.a=a
this.b=b},
j3:function j3(){},
j4:function j4(a,b){this.a=a
this.b=b},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c},
mM:function(a,b){return new H.N([a,b])},
km:function(a,b){return new H.N([a,b])},
mO:function(a){return H.oo(a,new H.N([null,null]))},
cY:function(a){return new P.j0([a])},
kv:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nu:function(a,b){var u=new P.dR(a,b)
u.c=a.e
return u},
mH:function(a,b,c){var u,t
if(P.kB(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.k])
$.a5.push(a)
try{P.nO(a,u)}finally{if(0>=$.a5.length)return H.b($.a5,-1)
$.a5.pop()}t=P.li(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kh:function(a,b,c){var u,t
if(P.kB(a))return b+"..."+c
u=new P.Q(b)
$.a5.push(a)
try{t=u
t.a=P.li(t.a,a,", ")}finally{if(0>=$.a5.length)return H.b($.a5,-1)
$.a5.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kB:function(a){var u,t
for(u=$.a5.length,t=0;t<u;++t)if(a===$.a5[t])return!0
return!1},
nO:function(a,b){var u,t,s,r,q,p,o,n=a.gT(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.A())return
u=H.e(n.gK(n))
b.push(u)
m+=u.length+2;++l}if(!n.A()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gK(n);++l
if(!n.A()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gK(n);++l
for(;n.A();r=q,q=p){p=n.gK(n);++l
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
mN:function(a,b,c){var u=P.mM(b,c)
a.H(0,new P.fF(u))
return u},
l2:function(a,b){var u,t,s=P.cY(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t)s.n(0,a[t])
return s},
kn:function(a){var u,t={}
if(P.kB(a))return"{...}"
u=new P.Q("")
try{$.a5.push(a)
u.a+="{"
t.a=!0
J.kP(a,new P.fK(t,u))
u.a+="}"}finally{if(0>=$.a5.length)return H.b($.a5,-1)
$.a5.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
j0:function j0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
j1:function j1(a){this.a=a
this.c=this.b=null},
dR:function dR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fF:function fF(a){this.a=a},
fG:function fG(){},
r:function r(){},
fJ:function fJ(){},
fK:function fK(a,b){this.a=a
this.b=b},
aD:function aD(){},
jl:function jl(){},
fL:function fL(){},
dv:function dv(a,b){this.a=a
this.$ti=b},
j7:function j7(){},
dS:function dS(){},
ek:function ek(){},
ni:function(a,b,c,d){if(b instanceof Uint8Array)return P.nj(!1,b,c,d)
return},
nj:function(a,b,c,d){var u,t,s=$.md()
if(s==null)return
u=0===c
if(u&&!0)return P.kt(s,b)
t=b.length
d=P.b7(c,d,t)
if(u&&d===t)return P.kt(s,b)
return P.kt(s,b.subarray(c,d))},
kt:function(a,b){if(P.nl(b))return
return P.nm(a,b)},
nm:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ab(t)}return},
nl:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nk:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ab(t)}return},
lK:function(a,b,c){var u,t,s
for(u=J.cw(a),t=b;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.af()
if((s&127)!==s)return t-b}return c-b},
kU:function(a,b,c,d,e,f){if(C.c.b8(f,4)!==0)throw H.d(P.O("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.O("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.O("Invalid base64 padding, more than two '=' characters",a,b))},
eK:function eK(){},
eL:function eL(){},
eQ:function eQ(){},
eV:function eV(){},
fa:function fa(){},
fr:function fr(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fq:function fq(a){this.a=a},
iw:function iw(){},
iy:function iy(){},
jr:function jr(a){this.b=0
this.c=a},
ix:function ix(a){this.a=a},
jq:function jq(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
ey:function(a,b,c){var u=H.n3(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.O(a,null,null))},
mE:function(a){if(a instanceof H.bK)return a.h(0)
return"Instance of '"+H.e(H.c3(a))+"'"},
mP:function(a,b,c){var u,t,s=J.mJ(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
l3:function(a,b,c){var u,t=H.c([],[c])
for(u=J.aS(a);u.A();)t.push(u.gK(u))
if(b)return t
return J.ki(t)},
c6:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.b7(b,c,u)
return H.ld(b>0||c<u?C.b.e2(a,b,c):a)}if(!!J.R(a).$ic_)return H.n5(a,b,P.b7(b,c,a.length))
return P.nd(a,b,c)},
nd:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.d(P.W(b,0,J.ac(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.W(c,b,J.ac(a),q,q))
t=J.aS(a)
for(s=0;s<b;++s)if(!t.A())throw H.d(P.W(b,0,s,q,q))
r=[]
if(u)for(;t.A();)r.push(t.gK(t))
else for(s=b;s<c;++s){if(!t.A())throw H.d(P.W(c,b,s,q,q))
r.push(t.gK(t))}return H.ld(r)},
n7:function(a){return new H.fx(a,H.mK(a,!1,!0,!1,!1,!1))},
li:function(a,b,c){var u=J.aS(b)
if(!u.A())return a
if(c.length===0){do a+=H.e(u.gK(u))
while(u.A())}else{a+=H.e(u.gK(u))
for(;u.A();)a=a+c+H.e(u.gK(u))}return a},
lo:function(){var u=H.mW()
if(u!=null)return P.nh(u)
throw H.d(P.x("'Uri.base' is not supported"))},
el:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mj().b
if(typeof b!=="string")H.t(H.ak(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghj().bW(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bs(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mB:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mC:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cL:function(a){if(a>=10)return""+a
return"0"+a},
kZ:function(a){return new P.aV(1000*a)},
kf:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a1(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mE(a)},
eE:function(a){return new P.ah(!1,null,null,a)},
kT:function(a,b,c){return new P.ah(!0,a,b,c)},
da:function(a,b){return new P.bt(null,null,!0,a,b,"Value not in range")},
W:function(a,b,c,d,e){return new P.bt(b,c,!0,a,d,"Invalid value")},
b7:function(a,b,c){if(0>a||a>c)throw H.d(P.W(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.W(b,a,c,"end",null))
return b}return c},
le:function(a,b){if(typeof a!=="number")return a.R()
if(a<0)throw H.d(P.W(a,0,null,b,null))},
J:function(a,b,c,d,e){var u=e==null?J.ac(b):e
return new P.fs(u,!0,a,c,"Index out of range")},
x:function(a){return new P.ip(a)},
il:function(a){return new P.ik(a)},
lh:function(a){return new P.c5(a)},
az:function(a){return new P.eS(a)},
u:function(a){return new P.dK(a)},
O:function(a,b,c){return new P.fk(a,b,c)},
mQ:function(a,b,c){var u,t,s=H.c([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.b(s,u)
s[u]=t}return s},
kJ:function(a){H.oA(a)},
nh:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.D(a,4)^58)*3|C.a.D(a,0)^100|C.a.D(a,1)^97|C.a.D(a,2)^116|C.a.D(a,3)^97)>>>0
if(u===0)return P.ln(e<e?C.a.t(a,0,e):a,5,f).gdW()
else if(u===32)return P.ln(C.a.t(a,5,e),0,f).gdW()}t=new Array(8)
t.fixed$length=Array
s=H.c(t,[P.w])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.lJ(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.i3()
if(r>=0)if(P.lJ(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.B()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.R()
if(typeof n!=="number")return H.v(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.a.a2(a,"..",o)))j=n>o+2&&C.a.a2(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.a2(a,"file",0)){if(q<=0){if(!C.a.a2(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.a.t(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.a.aQ(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a2(a,"http",0)){if(t&&p+3===o&&C.a.a2(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aQ(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a2(a,"https",0)){if(t&&p+4===o&&C.a.a2(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aQ(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.t(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.ja(a,r,q,p,o,n,m,k)}return P.nx(a,0,e,r,q,p,o,n,m,k)},
lq:function(a){var u=P.k
return C.b.hp(H.c(a.split("&"),[u]),P.km(u,u),new P.iu(C.e))},
ng:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.ir(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.V(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.ey(C.a.t(a,s,t),n,n)
if(typeof p!=="number")return p.a_()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.b(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.ey(C.a.t(a,s,c),n,n)
if(typeof p!=="number")return p.a_()
if(p>255)k.$2(l,s)
if(r>=u)return H.b(j,r)
j[r]=p
return j},
lp:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.is(a),d=new P.it(e,a)
if(a.length<2)e.$1("address is too short")
u=H.c([],[P.w])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.V(a,t)
if(p===58){if(t===b){++t
if(C.a.V(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gas(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.ng(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.b(l,i)
l[i]=0
f=i+1
if(f>=k)return H.b(l,f)
l[f]=0
i+=2}else{f=C.c.aK(h,8)
if(i<0||i>=k)return H.b(l,i)
l[i]=f
f=i+1
if(f>=k)return H.b(l,f)
l[f]=h&255
i+=2}}return l},
nx:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nF(a,b,d)
else{if(d===b)P.bA(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nG(a,u,e-1):""
s=P.nC(a,e,f,!1)
if(typeof f!=="number")return f.B()
r=f+1
if(typeof g!=="number")return H.v(g)
q=r<g?P.nE(P.ey(C.a.t(a,r,g),new P.jm(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nD(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.R()
o=h<i?P.kx(a,h+1,i,n):n
return new P.bz(j,t,s,q,p,o,i<c?P.nB(a,i+1,c):n)},
lB:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bA:function(a,b,c){throw H.d(P.O(c,a,b))},
nE:function(a,b){if(a!=null&&a===P.lB(b))return
return a},
nC:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.V(a,b)===91){if(typeof c!=="number")return c.L()
u=c-1
if(C.a.V(a,u)!==93)P.bA(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nz(a,t,u)
if(typeof s!=="number")return s.R()
if(s<u){r=s+1
q=P.lG(a,C.a.a2(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lp(a,t,s)
return C.a.t(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.v(c)
p=b
for(;p<c;++p)if(C.a.V(a,p)===58){s=C.a.bh(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lG(a,C.a.a2(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lp(a,b,s)
return"["+C.a.t(a,b,s)+q+"]"}return P.nI(a,b,c)},
nz:function(a,b,c){var u,t=C.a.bh(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.v(c)
u=t<c}else u=!1
return u?t:c},
lG:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.Q(d):null
if(typeof c!=="number")return H.v(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.V(a,u)
if(r===37){q=P.ky(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.Q("")
o=l.a+=C.a.t(a,t,u)
if(p)q=C.a.t(a,u,u+3)
else if(q==="%")P.bA(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.Q("")
if(t<u){l.a+=C.a.t(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.V(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.Q("")
l.a+=C.a.t(a,t,u)
l.a+=P.kw(r)
u+=m
t=u}}}if(l==null)return C.a.t(a,b,c)
if(t<c)l.a+=C.a.t(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
nI:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.v(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.V(a,u)
if(q===37){p=P.ky(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.Q("")
n=C.a.t(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.t(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.b(C.y,o)
o=(C.y[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.Q("")
if(t<u){s.a+=C.a.t(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.b(C.j,o)
o=(C.j[o]&1<<(q&15))!==0}else o=!1
if(o)P.bA(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.V(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.Q("")
n=C.a.t(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kw(q)
u+=l
t=u}}}}if(s==null)return C.a.t(a,b,c)
if(t<c){n=C.a.t(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nF:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lD(C.a.D(a,b)))P.bA(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.D(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.b(C.l,r)
r=(C.l[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bA(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.t(a,b,c)
return P.ny(t?a.toLowerCase():a)},
ny:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nG:function(a,b,c){return P.cr(a,b,c,C.U,!1)},
nD:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cr(a,b,c,C.z,!0):C.i.iu(d,new P.jn(),P.k).k(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a0(u,"/"))u="/"+u
return P.nH(u,e,f)},
nH:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a0(a,"/"))return P.nJ(a,!u||c)
return P.nK(a)},
kx:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.d(P.eE("Both query and queryParameters specified"))
return P.cr(a,b,c,C.k,!0)}if(d==null)return
u=new P.Q("")
t.a=""
d.H(0,new P.jo(new P.jp(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nB:function(a,b,c){return P.cr(a,b,c,C.k,!0)},
ky:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.V(a,b+1)
t=C.a.V(a,p)
s=H.jL(u)
r=H.jL(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aK(q,4)
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bs(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.t(a,b,b+3).toUpperCase()
return},
kw:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.c(u,[P.w])
t[0]=37
t[1]=C.a.D(m,a>>>4)
t[2]=C.a.D(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.c(u,[P.w])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.fR(a,6*r)&63|s
if(q>=u)return H.b(t,q)
t[q]=37
o=q+1
n=C.a.D(m,p>>>4)
if(o>=u)return H.b(t,o)
t[o]=n
n=q+2
o=C.a.D(m,p&15)
if(n>=u)return H.b(t,n)
t[n]=o
q+=3}}return P.c6(t,0,null)},
cr:function(a,b,c,d,e){var u=P.lF(a,b,c,d,e)
return u==null?C.a.t(a,b,c):u},
lF:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.R()
if(typeof c!=="number")return H.v(c)
if(!(o<c))break
c$0:{u=C.a.V(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.b(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.ky(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.b(C.j,t)
t=(C.j[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bA(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.V(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kw(u)}}if(m==null)m=new P.Q("")
m.a+=C.a.t(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.v(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.R()
if(n<c)m.a+=C.a.t(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lE:function(a){if(C.a.a0(a,"."))return!0
return C.a.dt(a,"/.")!==-1},
nK:function(a){var u,t,s,r,q,p,o
if(!P.lE(a))return a
u=H.c([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.D(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.b(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.k(u,"/")},
nJ:function(a,b){var u,t,s,r,q,p
if(!P.lE(a))return!b?P.lC(a):a
u=H.c([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gas(u)!==".."){if(0>=u.length)return H.b(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.b(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gas(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.b(u,0)
t=P.lC(u[0])
if(0>=u.length)return H.b(u,0)
u[0]=t}return C.b.k(u,"/")},
lC:function(a){var u,t,s,r=a.length
if(r>=2&&P.lD(J.ml(a,0)))for(u=1;u<r;++u){t=C.a.D(a,u)
if(t===58)return C.a.t(a,0,u)+"%3A"+C.a.a6(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.b(C.l,s)
s=(C.l[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nA:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.D(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.eE("Invalid URL encoding"))}}return u},
kz:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.D(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.t(a,b,c)
else r=new H.m(C.a.t(a,b,c))}else{r=H.c([],[P.w])
for(s=a.length,q=b;q<c;++q){t=C.a.D(a,q)
if(t>127)throw H.d(P.eE("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.eE("Truncated URI"))
r.push(P.nA(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.ix(!1).bW(r)},
lD:function(a){var u=a|32
return 97<=u&&u<=122},
ln:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.w])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.D(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.O(m,a,t))}}if(s<0&&t>b)throw H.d(P.O(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.D(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gas(l)
if(r!==44||t!==p+7||!C.a.a2(a,"base64",p+1))throw H.d(P.O("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.E.hz(0,a,o,u)
else{n=P.lF(a,o,u,C.k,!0)
if(n!=null)a=C.a.aQ(a,o,u,n)}return new P.iq(a,l,c)},
nM:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.mQ(22,new P.jx(),P.bv),n=new P.jw(o),m=new P.jy(),l=new P.jz(),k=n.$2(0,225)
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
lJ:function(a,b,c,d,e){var u,t,s,r,q,p=$.mk()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.b(p,d)
t=p[d]
s=C.a.D(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.b(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.b(e,q)
e[q]=u}return d},
ax:function ax(){},
a6:function a6(a,b){this.a=a
this.b=b},
M:function M(){},
aV:function aV(a){this.a=a},
f6:function f6(){},
f7:function f7(){},
bk:function bk(){},
d7:function d7(){},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bt:function bt(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fs:function fs(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ip:function ip(a){this.a=a},
ik:function ik(a){this.a=a},
c5:function c5(a){this.a=a},
eS:function eS(a){this.a=a},
hl:function hl(){},
dg:function dg(){},
f_:function f_(a){this.a=a},
dK:function dK(a){this.a=a},
fk:function fk(a,b,c){this.a=a
this.b=b
this.c=c},
fm:function fm(){},
w:function w(){},
i:function i(){},
fu:function fu(){},
n:function n(){},
P:function P(){},
b3:function b3(){},
aa:function aa(){},
a_:function a_(){},
k:function k(){},
Q:function Q(a){this.a=a},
iu:function iu(a){this.a=a},
ir:function ir(a){this.a=a},
is:function is(a){this.a=a},
it:function it(a,b){this.a=a
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
jm:function jm(a,b){this.a=a
this.b=b},
jn:function jn(){},
jp:function jp(a,b){this.a=a
this.b=b},
jo:function jo(a){this.a=a},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
jx:function jx(){},
jw:function jw(a){this.a=a},
jy:function jy(){},
jz:function jz(){},
ja:function ja(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
iU:function iU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
aN:function(a){var u,t,s,r,q
if(a==null)return
u=P.km(P.k,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
oi:function(a){var u={}
a.H(0,new P.jD(u))
return u},
jc:function jc(){},
je:function je(a,b){this.a=a
this.b=b},
jD:function jD(a){this.a=a},
jd:function jd(a,b){this.a=a
this.b=b},
fg:function fg(a,b){this.a=a
this.b=b},
fh:function fh(){},
fi:function fi(){},
j_:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nt:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
j2:function j2(){},
a9:function a9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b_:function b_(){},
fA:function fA(){},
b4:function b4(){},
hj:function hj(){},
hq:function hq(){},
c4:function c4(){},
hU:function hU(){},
j:function j(){},
b8:function b8(){},
i8:function i8(){},
dP:function dP(){},
dQ:function dQ(){},
e_:function e_(){},
e0:function e0(){},
eb:function eb(){},
ec:function ec(){},
ei:function ei(){},
ej:function ej(){},
bv:function bv(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(a){this.a=a},
eJ:function eJ(){},
bg:function bg(){},
hk:function hk(){},
dD:function dD(){},
hP:function hP(){},
e7:function e7(){},
e8:function e8(){}},W={
kS:function(){var u=document.createElement("a")
return u},
kX:function(){var u=document.createElement("canvas")
return u},
mD:function(a,b,c){var u=document.body,t=(u&&C.r).ab(u,a,b,c)
t.toString
u=new H.cf(new W.a0(t),new W.f9(),[W.E])
return u.gaE(u)},
kc:function(a){return"wheel"},
bM:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bG(a)
t=u.gdR(a)
if(typeof t==="string")r=u.gdR(a)}catch(s){H.ab(s)}return r},
mG:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.ab(u)}return s},
iZ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lz:function(a,b,c,d){var u=W.iZ(W.iZ(W.iZ(W.iZ(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Y:function(a,b,c,d){var u=W.lL(new W.iX(c),W.h)
if(u!=null&&!0)J.mn(a,b,u,!1)
return new W.iW(a,b,u,!1)},
ly:function(a){var u=W.kS(),t=window.location
u=new W.ch(new W.j6(u,t))
u.ee(a)
return u},
nr:function(a,b,c,d){return!0},
ns:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
lA:function(){var u=P.k,t=P.l2(C.o,u),s=H.c(["TEMPLATE"],[u])
t=new W.jh(t,P.cY(u),P.cY(u),P.cY(u),null)
t.el(null,new H.fO(C.o,new W.ji(),[H.cz(C.o,0),u]),s,null)
return t},
lL:function(a,b){var u=$.aj
if(u===C.f)return a
return u.d2(a,b)},
l:function l(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
bh:function bh(){},
bi:function bi(){},
bj:function bj(){},
aT:function aT(){},
eW:function eW(){},
G:function G(){},
bL:function bL(){},
eX:function eX(){},
ad:function ad(){},
an:function an(){},
eY:function eY(){},
eZ:function eZ(){},
f1:function f1(){},
ai:function ai(){},
f3:function f3(){},
cN:function cN(){},
cO:function cO(){},
f4:function f4(){},
f5:function f5(){},
iS:function iS(a,b){this.a=a
this.b=b},
S:function S(){},
f9:function f9(){},
h:function h(){},
f:function f(){},
ao:function ao(){},
bO:function bO(){},
ff:function ff(){},
fj:function fj(){},
aC:function aC(){},
fp:function fp(){},
bQ:function bQ(){},
bR:function bR(){},
bp:function bp(){},
fH:function fH(){},
h3:function h3(){},
bW:function bW(){},
h4:function h4(){},
h5:function h5(a){this.a=a},
h6:function h6(){},
h7:function h7(a){this.a=a},
aE:function aE(){},
h8:function h8(){},
as:function as(){},
a0:function a0(a){this.a=a},
E:function E(){},
d5:function d5(){},
aH:function aH(){},
ho:function ho(){},
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
at:function at(){},
dj:function dj(){},
hV:function hV(){},
hW:function hW(){},
c7:function c7(){},
aL:function aL(){},
au:function au(){},
hZ:function hZ(){},
i_:function i_(){},
i2:function i2(){},
aM:function aM(){},
bu:function bu(){},
i6:function i6(){},
i7:function i7(){},
b9:function b9(){},
iv:function iv(){},
iK:function iK(){},
bc:function bc(){},
cg:function cg(){},
iT:function iT(){},
dF:function dF(){},
iY:function iY(){},
dX:function dX(){},
jb:function jb(){},
jf:function jf(){},
iR:function iR(){},
iV:function iV(a){this.a=a},
iW:function iW(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iX:function iX(a){this.a=a},
ch:function ch(a){this.a=a},
I:function I(){},
d6:function d6(a){this.a=a},
hg:function hg(a){this.a=a},
hf:function hf(a,b,c){this.a=a
this.b=b
this.c=c},
e4:function e4(){},
j8:function j8(){},
j9:function j9(){},
jh:function jh(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ji:function ji(){},
jg:function jg(){},
cR:function cR(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aG:function aG(){},
j6:function j6(a,b){this.a=a
this.b=b},
em:function em(a){this.a=a},
js:function js(a){this.a=a},
dE:function dE(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
dY:function dY(){},
dZ:function dZ(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
cn:function cn(){},
co:function co(){},
e5:function e5(){},
e6:function e6(){},
ea:function ea(){},
ed:function ed(){},
ee:function ee(){},
cp:function cp(){},
cq:function cq(){},
eg:function eg(){},
eh:function eh(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){}},T={
K:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.d(P.u("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.D(a,0)
t=C.a.D(b,0)
s=new T.ht()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
p:function(a){var u=new T.hC()
u.eb(a)
return u},
ay:function ay(){},
cS:function cS(){},
b0:function b0(){},
a3:function a3(){this.a=null},
ht:function ht(){this.b=this.a=null},
hC:function hC(){this.a=null},
i0:function i0(){}},R={
i4:function(){var u=new R.i3(),t=P.k
u.a=new H.N([t,R.dh])
u.b=new H.N([t,R.dp])
return u},
dh:function dh(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dn:function dn(a,b,c){this.a=a
this.b=b
this.c=c},
dp:function dp(a){this.b=a
this.c=null},
i3:function i3(){this.c=this.b=this.a=null},
dr:function dr(a){this.b=a
this.a=this.c=null}},O={
ka:function(a){var u=new O.aU([a])
u.bt(a)
return u},
aU:function aU(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bV:function bV(){this.b=this.a=null},
l4:function(){var u,t=new O.d0(),s=O.ka(V.aq)
t.e=s
s.b9(t.geQ(),t.geS())
s=new O.ap(t,"emission")
s.c=new A.Z(!1,!1,!1)
s.f=new V.U(0,0,0)
t.f=s
s=new O.ap(t,"ambient")
s.c=new A.Z(!1,!1,!1)
s.f=new V.U(0,0,0)
t.r=s
s=new O.ap(t,"diffuse")
s.c=new A.Z(!1,!1,!1)
s.f=new V.U(0,0,0)
t.x=s
s=new O.ap(t,"invDiffuse")
s.c=new A.Z(!1,!1,!1)
s.f=new V.U(0,0,0)
t.y=s
s=new O.fV(t,"specular")
s.c=new A.Z(!1,!1,!1)
s.f=new V.U(0,0,0)
s.ch=100
t.z=s
s=new O.fR(t,"bump")
s.c=new A.Z(!1,!1,!1)
t.Q=s
t.ch=null
s=new O.ap(t,"reflect")
s.c=new A.Z(!1,!1,!1)
s.f=new V.U(0,0,0)
t.cx=s
s=new O.fU(t,"refract")
s.c=new A.Z(!1,!1,!1)
s.f=new V.U(0,0,0)
s.ch=1
t.cy=s
s=new O.fQ(t,"alpha")
s.c=new A.Z(!1,!1,!1)
s.f=1
t.db=s
s=new D.cX()
s.bt(D.a7)
s.e=H.c([],[D.f2])
s.f=H.c([],[D.bq])
s.r=H.c([],[D.hO])
s.y=s.x=null
s.cn(s.geO(),s.gfo(),s.gft())
t.dx=s
u=new O.fT()
u.b=new V.am(0,0,0,0)
u.c=1
u.d=10
u.e=!1
t.dy=u
u=s.x
s=u==null?s.x=D.H():u
s.n(0,t.gfI())
s=t.dx
u=s.y
s=u==null?s.y=D.H():u
s.n(0,t.gem())
t.fr=null
return t},
d0:function d0(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fW:function fW(a,b){this.a=a
this.b=b},
fX:function fX(){},
fY:function fY(a,b){this.a=a
this.b=b},
fZ:function fZ(){},
h_:function h_(a,b){this.a=a
this.b=b},
h0:function h0(){},
fQ:function fQ(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d1:function d1(){},
fR:function fR(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ap:function ap(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fT:function fT(){var _=this
_.e=_.d=_.c=_.b=null},
fU:function fU(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fV:function fV(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dk:function dk(){}},E={
ke:function(){var u,t=new E.aB()
t.a=""
t.b=!0
u=O.ka(E.aB)
t.y=u
u.b9(t.ghA(),t.ghD())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sa9(0,null)
t.sb6(null)
t.saB(null)
return t},
n8:function(a,b){var u=new E.hu(a)
u.ea(a,b)
return u},
ne:function(a,b,c,d,e){var u,t,s=J.R(a)
if(!!s.$ibj)return E.lj(a,!0,!0,!0,!1)
u=W.kX()
t=u.style
t.width="100%"
t.height="100%"
s.gbV(a).n(0,u)
return E.lj(u,!0,!0,!0,!1)},
lj:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dl(),p=C.m.e_(a,"webgl2",P.mO(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.t(P.u("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.n8(p,a)
p.getParameter(3379)
p.getParameter(34076)
u=new X.dw(a)
t=new X.fz()
t.c=new X.ae(!1,!1,!1)
t.d=P.cY(P.w)
u.b=t
t=new X.h9(u)
t.f=0
t.r=V.b5()
t.x=V.b5()
t.ch=t.Q=1
u.c=t
t=new X.fI(u)
t.r=0
t.x=V.b5()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.i5(u)
t.f=V.b5()
t.r=V.b5()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.c([],[[P.di,P.a_]])
u.z=t
s=document
t.push(W.Y(s,"contextmenu",u.gf_(),!1))
u.z.push(W.Y(a,"focus",u.gf5(),!1))
u.z.push(W.Y(a,"blur",u.geU(),!1))
u.z.push(W.Y(s,"keyup",u.gf9(),!1))
u.z.push(W.Y(s,"keydown",u.gf7(),!1))
u.z.push(W.Y(a,"mousedown",u.gfd(),!1))
u.z.push(W.Y(a,"mouseup",u.gfh(),!1))
u.z.push(W.Y(a,r,u.gff(),!1))
t=u.z
W.kc(a)
W.kc(a)
t.push(W.Y(a,W.kc(a),u.gfj(),!1))
u.z.push(W.Y(s,r,u.gf1(),!1))
u.z.push(W.Y(s,"mouseup",u.gf3(),!1))
u.z.push(W.Y(s,"pointerlockchange",u.gfl(),!1))
u.z.push(W.Y(a,"touchstart",u.gfB(),!1))
u.z.push(W.Y(a,"touchend",u.gfv(),!1))
u.z.push(W.Y(a,"touchmove",u.gfz(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.a6(Date.now(),!1)
q.db=0
q.cP()
return q},
eM:function eM(){},
aB:function aB(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hu:function hu(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hv:function hv(a){this.a=a},
hw:function hw(a){this.a=a},
hx:function hx(a){this.a=a},
dl:function dl(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
i1:function i1(a){this.a=a}},Z={
ku:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.ct(c)),35044)
a.bindBuffer(b,null)
return new Z.dB(b,u)},
ag:function(a){return new Z.bb(a)},
dB:function dB(a,b){this.a=a
this.b=b},
cF:function cF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iL:function iL(a){this.a=a},
cG:function cG(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bm:function bm(a,b,c){this.a=a
this.b=b
this.c=c},
bb:function bb(a){this.a=a}},D={
H:function(){var u=new D.bl()
u.d=0
return u},
eP:function eP(){},
bl:function bl(){var _=this
_.d=_.c=_.b=_.a=null},
fc:function fc(a){this.a=a},
fd:function fd(a){this.a=a},
V:function V(){this.b=null},
bn:function bn(){this.b=null},
bo:function bo(){this.b=null},
y:function y(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
f2:function f2(){},
a7:function a7(){},
cX:function cX(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
bq:function bq(){var _=this
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hO:function hO(){}},X={cH:function cH(a,b){this.a=a
this.b=b},cW:function cW(a,b){this.a=a
this.b=b},fz:function fz(){var _=this
_.d=_.c=_.b=_.a=null},d_:function d_(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fI:function fI(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ae:function ae(a,b,c){this.a=a
this.b=b
this.c=c},aF:function aF(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},h9:function h9(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bX:function bX(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hp:function hp(){},dq:function dq(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},i5:function i5(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dw:function dw(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mF:function(a){var u=new X.fl(),t=new V.am(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lg
if(t==null){t=V.lf(0,0,1,1)
$.lg=t}u.r=t
return u},
k9:function k9(){},
fl:function fl(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d8:function d8(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hX:function hX(){}},V={
k5:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.b8(a-b,u)
return(a<0?a+u:a)+b},
C:function(a,b,c){if(a==null)return C.a.ad("null",c)
return C.a.ad(C.d.dT(Math.abs(a-0)<$.z().a?0:a,b),c+b+1)},
bF:function(a,b,c){var u,t,s,r,q,p,o=H.c([],[P.k])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.o)(a),++s){r=V.C(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.b(o,q)
u=C.a.ad(o[q],t)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=u}return o},
b1:function(){var u=$.h2
return u==null?$.h2=V.ar(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ar:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
l8:function(a,b,c){return V.ar(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
ko:function(a,b,c,d){return V.ar(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
l5:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ar(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
l6:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ar(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
l7:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ar(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
b5:function(){var u=$.lb
return u==null?$.lb=new V.a4(0,0):u},
mU:function(){var u=$.c1
return u==null?$.c1=new V.T(0,0,0):u},
lf:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.db(a,b,c,d)},
cd:function(){var u=$.lw
return u==null?$.lw=new V.A(0,0,0):u},
U:function U(a,b,c){this.a=a
this.b=b
this.c=c},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fb:function fb(a){this.a=a},
h1:function h1(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aq:function aq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
b6:function b6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
db:function db(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
F:function F(a,b){this.a=a
this.b=b},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
ce:function ce(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oD:function(a){P.nf(C.O,new V.jZ(a))},
na:function(a){var u=new V.hH()
u.ed(a,!0)
return u},
cI:function cI(){},
jZ:function jZ(a){this.a=a},
f0:function f0(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fn:function fn(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fo:function fo(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hn:function hn(a){var _=this
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
kb:function(){var u=new U.eR()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
cK:function(a){var u=new U.cJ()
if(a==null)a=V.b1()
if(null!=a)u.a=a
return u},
kg:function(){var u=new U.bP()
u.bt(U.a8)
u.b9(u.gei(),u.gfq())
u.e=null
u.f=V.b1()
u.r=0
return u},
eR:function eR(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cJ:function cJ(){this.b=this.a=null},
bP:function bP(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a8:function a8(){},
dc:function dc(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dx:function dx(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dy:function dy(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dz:function dz(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
kC:function(a,b,c,d,e,f,g,h){var u,t,s,r,q=c>1?1:c,p=d>1?1:d,o=e>1?1:e,n=new V.U(q,p,o),m=U.kg()
m.n(0,U.cK(V.l8(0,0,2)))
o=new U.dc()
o.r=o.f=o.e=o.d=o.c=o.b=o.a=0
o.sdY(0)
o.sdJ(0,0)
o.sdQ(0)
q=o.d
if(!(Math.abs(q-f)<$.z().a)){o.d=f
q=new D.y("deltaYaw",q,f)
q.b=!0
o.G(q)}q=o.e
if(!(Math.abs(q-g)<$.z().a)){o.e=g
q=new D.y("deltaPitch",q,g)
q.b=!0
o.G(q)}q=o.f
if(!(Math.abs(q-h)<$.z().a)){o.f=h
q=new D.y("deltaRoll",q,h)
q.b=!0
o.G(q)}m.n(0,o)
u=E.ke()
q=U.kg()
q.n(0,U.cK(V.ko(0.1,0.1,0.1,1)))
q.n(0,m)
u.saB(q)
u.sa9(0,F.lZ(8,8))
q=O.l4()
q.f.saN(0,n)
u.sb6(q)
t=new D.bq()
t.c=new V.U(1,1,1)
t.r=1
t.y=t.x=0
t.z=!0
t.a=V.b1()
s=t.b
t.b=m
m.gw().n(0,t.geg())
q=new D.y("mover",s,t.b)
q.b=!0
t.a7(q)
if(!t.c.q(0,n)){s=t.c
t.c=n
q=new D.y("color",s,n)
q.b=!0
t.a7(q)}q=$.lx
if(q==null){q=new V.ce(1,0.00390625,0.0000152587890625,0)
$.lx=q
r=q}else r=q
if(!J.D(t.f,r)){s=t.f
t.f=r
q=new D.y("shadowAdjust",s,r)
q.b=!0
t.a7(q)}q=t.r
if(!(Math.abs(q-1)<$.z().a)){t.r=1
q=new D.y("attenuation0",q,1)
q.b=!0
t.a7(q)}q=t.x
if(!(Math.abs(q-0.5)<$.z().a)){t.x=0.5
q=new D.y("attenuation1",q,0.5)
q.b=!0
t.a7(q)}q=t.y
if(!(Math.abs(q-0.15)<$.z().a)){t.y=0.15
q=new D.y("attenuation2",q,0.15)
q.b=!0
t.a7(q)}a.dx.n(0,t)
b.e.n(0,u)},
lV:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="testCanvas",d=null,c="modifiers",b=V.na("Test 021"),a=W.kX()
a.className="pageLargeCanvas"
a.id=e
b.a.appendChild(a)
u=[P.k]
b.d_(H.c(["Test of the Material Lighting shader with multiple moving point lights. ","Emissive spheres are added at the lights sources."],u))
b.fY(H.c(["shapes"],u))
b.d_(H.c(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(e)
if(t==null)H.t(P.u("Failed to find an element with the identifier, testCanvas."))
s=E.ne(t,!0,!0,!0,!1)
r=E.ke()
r.saB(U.cK(V.b1()))
r.sa9(0,F.m0())
q=E.ke()
q.saB(U.cK(V.ko(3,3,3,1)))
p=F.kE(1,d,d,1)
p.c4()
q.sa9(0,p)
o=U.kg()
p=s.x
n=new U.dy()
m=U.kb()
m.scl(0,!0)
m.sc9(6.283185307179586)
m.scb(0)
m.sY(0,0)
m.sca(100)
m.sU(0)
m.sbY(0.5)
n.b=m
l=n.gaI()
m.gw().n(0,l)
m=U.kb()
m.scl(0,!0)
m.sc9(6.283185307179586)
m.scb(0)
m.sY(0,0)
m.sca(100)
m.sU(0)
m.sbY(0.5)
n.c=m
m.gw().n(0,l)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
k=new X.ae(!1,!1,!1)
j=n.d
n.d=k
m=new D.y(c,j,k)
m.b=!0
n.G(m)
m=n.f
if(m!==!1){n.f=!1
m=new D.y("invertX",m,!1)
m.b=!0
n.G(m)}m=n.r
if(m!==!1){n.r=!1
m=new D.y("invertY",m,!1)
m.b=!0
n.G(m)}n.aW(p)
o.n(0,n)
p=s.x
n=new U.dx()
m=U.kb()
m.scl(0,!0)
m.sc9(6.283185307179586)
m.scb(0)
m.sY(0,0)
m.sca(100)
m.sU(0)
m.sbY(0.2)
n.b=m
m.gw().n(0,n.gaI())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
k=new X.ae(!0,!1,!1)
j=n.c
n.c=k
m=new D.y(c,j,k)
m.b=!0
n.G(m)
n.aW(p)
o.n(0,n)
p=s.x
n=new U.dz()
n.c=0.01
n.e=n.d=0
k=new X.ae(!1,!1,!1)
n.b=k
m=new D.y(c,d,k)
m.b=!0
n.G(m)
n.aW(p)
o.n(0,n)
o.n(0,U.cK(V.l8(0,0,5)))
i=O.l4()
p=i.r
p.saN(0,new V.U(0.15,0.15,0.15))
p=i.x
p.saN(0,new V.U(0.4,0.4,0.4))
p=i.z
p.saN(0,new V.U(0.3,0.3,0.3))
p=i.z
p.cR(new A.Z(!0,!1,!1))
p.cS(100)
h=new M.cP()
h.a=!0
p=O.ka(E.aB)
h.e=p
p.b9(h.geW(),h.geY())
h.y=h.x=h.r=h.f=null
g=X.mF(d)
f=new X.d8()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.saB(d)
p=f.c
if(!(Math.abs(p-1.0471975511965976)<$.z().a)){f.c=1.0471975511965976
p=new D.y("fov",p,1.0471975511965976)
p.b=!0
f.aG(p)}p=f.d
if(!(Math.abs(p-0.1)<$.z().a)){f.d=0.1
p=new D.y("near",p,0.1)
p.b=!0
f.aG(p)}p=f.e
if(!(Math.abs(p-2000)<$.z().a)){f.e=2000
p=new D.y("far",p,2000)
p.b=!0
f.aG(p)}p=h.b
if(p!==f){if(p!=null)p.gw().M(0,h.gan())
j=h.b
h.b=f
f.gw().n(0,h.gan())
p=new D.y("camera",j,h.b)
p.b=!0
h.au(p)}p=h.c
if(p!==g){if(p!=null)p.gw().M(0,h.gan())
j=h.c
h.c=g
g.gw().n(0,h.gan())
p=new D.y("target",j,h.c)
p.b=!0
h.au(p)}h.sb6(d)
h.sb6(i)
h.e.n(0,q)
h.e.n(0,r)
h.b.saB(o)
p=s.d
if(p!==h){if(p!=null)p.gw().M(0,s.gct())
s.d=h
h.gw().n(0,s.gct())
s.cu()}U.kC(i,h,1,0,0,0.3,0,0)
U.kC(i,h,0,1,0,0,0.4,0)
U.kC(i,h,0,0,1,0.5,0.5,0)
p=new V.hr("shapes")
u=u.getElementById("shapes")
p.c=u
if(u==null)H.t("Failed to find shapes for RadioGroup")
p.aV(0,"Cube",new U.jR(r))
p.aV(0,"Cylinder",new U.jS(r))
p.aV(0,"Cone",new U.jT(r))
p.aV(0,"Sphere",new U.jU(r))
p.cY(0,"Toroid",new U.jV(r),!0)
p.aV(0,"Knot",new U.jW(r))
u=s.Q
if(u==null)u=s.Q=D.H()
p=u.b
u=p==null?u.b=H.c([],[{func:1,ret:-1,args:[D.V]}]):p
u.push(new U.jX(b,i))
V.oD(s)},
jR:function jR(a){this.a=a},
jS:function jS(a){this.a=a},
jT:function jT(a){this.a=a},
jU:function jU(a){this.a=a},
jV:function jV(a){this.a=a},
jW:function jW(a){this.a=a},
jX:function jX(a,b){this.a=a
this.b=b}},M={cP:function cP(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
mR:function(a,b){var u=a.aZ,t=new A.fP(b,u)
t.ec(b,u)
t.e9(a,b)
return t},
mS:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gal(a0)+a1.gal(a1)+a2.gal(a2)+a3.gal(a3)+a4.gal(a4)+a5.gal(a5)+a6.gal(a6)+a7.gal(a7)+a8.gal(a8)+"_"
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
g=$.aR()
if(k){u=$.aQ()
g=new Z.bb(g.a|u.a)}if(j){u=$.aP()
g=new Z.bb(g.a|u.a)}if(i){u=$.aO()
g=new Z.bb(g.a|u.a)}return new A.fS(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,l,p,r,h,!0,!1,!1,o,r,m,k,j,!1,!1,i,!1,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
jA:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jB:function(a,b,c){var u
A.jA(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.k2(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
nS:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jA(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
nP:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jB(b,t,"ambient")
b.a+="\n"},
nQ:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jB(b,t,"diffuse")
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
nT:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jB(b,t,"invDiffuse")
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
nZ:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jB(b,t,"specular")
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
nV:function(a,b){var u,t,s
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
nX:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jA(b,t,"reflect")
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
nY:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jA(b,t,"refract")
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
nR:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.k2(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.af()
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
nW:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.k2(t)
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
if(typeof u!=="number")return u.af()
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
o_:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.k2(t)
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
if(typeof u!=="number")return u.af()
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
nU:function(a,b){var u,t
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
o0:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.Q("")
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
A.nS(a,j)
A.nP(a,j)
A.nQ(a,j)
A.nT(a,j)
A.nZ(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.nX(a,j)
A.nY(a,j)}A.nV(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.nR(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.nW(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.o_(a,q[o],j)
A.nU(a,j)}q=j.a+="// === Main ===\n"
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
o1:function(a,b){var u,t,s
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
o3:function(a,b){var u
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
o2:function(a,b){var u
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
o5:function(a,b){var u,t
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
o6:function(a,b){var u,t
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
o4:function(a,b){var u
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
o7:function(a,b){var u
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
k2:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.a6(a,1)},
kr:function(a,b,c,d,e){var u=new A.ic(a,c,e)
u.f=d
P.mP(d,0,P.w)
return u},
cE:function cE(a,b,c){this.a=a
this.b=b
this.c=c},
eF:function eF(a){this.a=a},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
fP:function fP(a,b){var _=this
_.ie=_.ic=_.dc=_.da=_.aZ=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.it=_.is=_.ir=_.c3=_.c2=_.c1=_.c0=_.c_=_.bZ=_.iq=_.ip=_.dj=_.io=_.im=_.di=_.dh=_.il=_.ik=_.dg=_.df=_.ij=_.ii=_.de=_.ih=_.ig=_.dd=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cM:function cM(a,b){this.a=a
this.b=b},
d9:function d9(a,b){this.a=a
this.b=b},
df:function df(a,b){this.a=a
this.b=b},
fS:function fS(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aZ=b3
_.da=b4},
c9:function c9(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cb:function cb(a,b,c,d,e,f,g,h,i,j){var _=this
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
cc:function cc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dd:function dd(){},
ds:function ds(){},
ii:function ii(a){this.a=a},
dt:function dt(a,b,c){this.a=a
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
X:function X(a,b,c){this.a=a
this.c=b
this.d=c},
id:function id(a,b,c){this.a=a
this.c=b
this.d=c},
L:function L(a,b,c){this.a=a
this.c=b
this.d=c},
c8:function c8(a,b,c){this.a=a
this.c=b
this.d=c},
ij:function ij(a,b,c){this.a=a
this.c=b
this.d=c},
ca:function ca(a,b,c){this.a=a
this.c=b
this.d=c},
af:function af(a,b,c){this.a=a
this.c=b
this.d=c},
bw:function bw(a,b,c){this.a=a
this.c=b
this.d=c},
bx:function bx(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kE:function(a,b,c,d){var u=F.kp()
F.cs(u,b,c,d,a,1,0,0,1)
F.cs(u,b,c,d,a,0,1,0,3)
F.cs(u,b,c,d,a,0,0,1,2)
F.cs(u,b,c,d,a,-1,0,0,0)
F.cs(u,b,c,d,a,0,-1,0,0)
F.cs(u,b,c,d,a,0,0,-1,3)
u.ar()
return u},
jv:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cs:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.A(h,g+a1,f+a2)
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
j.d=i}m=F.jv(i)
l=F.jv(j.b)
k=F.kL(d,a0,new F.ju(j,F.jv(j.c),F.jv(j.d),l,m,c),b)
if(k!=null)a.b3(k)},
lQ:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.kp()
t=b?-1:1
s=-6.283185307179586/e
r=H.c([],[F.ba])
q=u.a
p=new V.A(0,0,t)
p=p.u(0,Math.sqrt(p.C(p)))
r.push(q.h1(new V.b6(a,-1,-1,-1),new V.am(1,1,1,1),new V.T(0,0,c),new V.A(0,0,t),new V.a4(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.v(k)
j=new V.A(m,l,t).u(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.dA(new V.b6(a,-1,-1,-1),null,new V.am(i,g,h,1),new V.T(m*k,l*k,c),new V.A(0,0,t),new V.a4(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.n(0,f)
r.push(f)}u.d.h_(r)
return u},
lO:function(a,b,c){return F.oj(!0,a,1,new F.jE(1,c),b)},
oj:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.kL(c,e,new F.jG(d),null)
if(u==null)return
u.ar()
u.bR()
if(b)u.b3(F.lQ(3,!1,1,new F.jH(d),e))
u.b3(F.lQ(1,!0,-1,new F.jI(d),e))
return u},
lZ:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.k_()
t=F.kE(a,null,new F.k0(s,1),b)
t.bR()
return t},
m0:function(){return F.lP(15,30,0.5,1,new F.k3())},
ox:function(){return F.lP(12,120,0.3,1,new F.jQ(3,2))},
lP:function(a,b,c,d,e){var u=F.kL(a,b,new F.jF(e,d,b,c),null)
if(u==null)return
u.ar()
u.bR()
return u},
kL:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.kp()
t=H.c([],[F.ba])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dA(g,g,new V.am(p,0,0,1),g,g,new V.a4(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.bX(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.dA(g,g,new V.am(j,i,h,1),g,g,new V.a4(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.bX(d))}}u.d.h0(a+1,b+1,t)
return u},
bN:function(a,b,c){var u=new F.aW(),t=a.a
if(t==null)H.t(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.u("May not create a face with vertices attached to different shapes."))
u.bP(a)
u.bQ(b)
u.fN(c)
u.a.a.d.b.push(u)
u.a.a.Z()
return u},
mL:function(a,b){var u=new F.bT(),t=a.a
if(t==null)H.t(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.u("May not create a line with vertices attached to different shapes."))
u.bP(a)
u.bQ(b)
u.a.a.c.b.push(u)
u.a.a.Z()
return u},
kp:function(){var u=new F.hD(),t=new F.iz(u)
t.b=!1
t.c=H.c([],[F.ba])
u.a=t
t=new F.hG(u)
t.b=H.c([],[F.c0])
u.b=t
t=new F.hF(u)
t.b=H.c([],[F.bT])
u.c=t
t=new F.hE(u)
t.b=H.c([],[F.aW])
u.d=t
u.e=null
return u},
dA:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ba(),r=new F.iH()
r.b=H.c([],[F.c0])
s.b=r
r=new F.iD()
u=[F.bT]
r.b=H.c([],u)
r.c=H.c([],u)
s.c=r
r=new F.iA()
u=[F.aW]
r.b=H.c([],u)
r.c=H.c([],u)
r.d=H.c([],u)
s.d=r
h=$.me()
s.e=0
r=$.aR()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aQ().a)!==0?e:t
s.x=(u&$.aP().a)!==0?b:t
s.y=(u&$.be().a)!==0?f:t
s.z=(u&$.bf().a)!==0?g:t
s.Q=(u&$.mf().a)!==0?c:t
s.ch=(u&$.bH().a)!==0?i:0
s.cx=(u&$.aO().a)!==0?a:t
return s},
ju:function ju(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jE:function jE(a,b){this.a=a
this.b=b},
jG:function jG(a){this.a=a},
jH:function jH(a){this.a=a},
jI:function jI(a){this.a=a},
k_:function k_(){},
k0:function k0(a,b){this.a=a
this.b=b},
k3:function k3(){},
jQ:function jQ(a,b){this.a=a
this.b=b},
jF:function jF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aW:function aW(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fe:function fe(){},
hL:function hL(){},
bT:function bT(){this.b=this.a=null},
fB:function fB(){},
ib:function ib(){},
c0:function c0(){this.a=null},
hD:function hD(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hE:function hE(a){this.a=a
this.b=null},
hF:function hF(a){this.a=a
this.b=null},
hG:function hG(a){this.a=a
this.b=null},
ba:function ba(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iJ:function iJ(a){this.a=a},
iI:function iI(a){this.a=a},
iz:function iz(a){this.a=a
this.c=this.b=null},
iA:function iA(){this.d=this.c=this.b=null},
iB:function iB(a,b){this.a=a
this.b=b},
iC:function iC(a,b){this.a=a
this.b=b},
iD:function iD(){this.c=this.b=null},
iF:function iF(){},
iE:function iE(){},
iG:function iG(){},
hh:function hh(){},
iH:function iH(){this.b=null}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kk.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gI:function(a){return H.c2(a)},
h:function(a){return"Instance of '"+H.e(H.c3(a))+"'"}}
J.fv.prototype={
h:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iax:1}
J.cU.prototype={
q:function(a,b){return null==b},
h:function(a){return"null"},
gI:function(a){return 0}}
J.cV.prototype={
gI:function(a){return 0},
h:function(a){return String(a)}}
J.hm.prototype={}
J.by.prototype={}
J.aZ.prototype={
h:function(a){var u=a[$.m2()]
if(u==null)return this.e6(a)
return"JavaScript function for "+H.e(J.a1(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aX.prototype={
dN:function(a,b){if(!!a.fixed$length)H.t(P.x("removeAt"))
if(b<0||b>=a.length)throw H.d(P.da(b,null))
return a.splice(b,1)[0]},
M:function(a,b){var u
if(!!a.fixed$length)H.t(P.x("remove"))
for(u=0;u<a.length;++u)if(J.D(a[u],b)){a.splice(u,1)
return!0}return!1},
H:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.d(P.az(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
hw:function(a){return this.k(a,"")},
ho:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.d(P.az(a))}return u},
hp:function(a,b,c){return this.ho(a,b,c,null)},
hn:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.d(P.az(a))}throw H.d(H.ft())},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
e2:function(a,b,c){if(b<0||b>a.length)throw H.d(P.W(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.W(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.cz(a,0)])
return H.c(a.slice(b,c),[H.cz(a,0)])},
ghm:function(a){if(a.length>0)return a[0]
throw H.d(H.ft())},
gas:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.ft())},
d0:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.d(P.az(a))}return!1},
br:function(a,b){if(!!a.immutable$list)H.t(P.x("sort"))
H.de(a,0,a.length-1,b)},
W:function(a,b){var u
for(u=0;u<a.length;++u)if(J.D(a[u],b))return!0
return!1},
h:function(a){return P.kh(a,"[","]")},
gT:function(a){return new J.a2(a,a.length)},
gI:function(a){return H.c2(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.x("set length"))
if(b<0)throw H.d(P.W(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.d(H.bE(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.t(P.x("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bE(a,b))
a[b]=c},
$ii:1,
$in:1}
J.kj.prototype={}
J.a2.prototype={
gK:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.o(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bS.prototype={
h9:function(a,b){var u
if(typeof b!=="number")throw H.d(H.ak(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbi(b)
if(this.gbi(a)===u)return 0
if(this.gbi(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbi:function(a){return a===0?1/a<0:a<0},
dl:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.x(""+a+".floor()"))},
ai:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.x(""+a+".round()"))},
dT:function(a,b){var u
if(b>20)throw H.d(P.W(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbi(a))return"-"+u
return u},
b7:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.W(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.V(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.x("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.b(t,1)
u=t[1]
if(3>=s)return H.b(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.p("0",r)},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
p:function(a,b){if(typeof b!=="number")throw H.d(H.ak(b))
return a*b},
b8:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
e8:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cU(a,b)},
a4:function(a,b){return(a|0)===a?a/b|0:this.cU(a,b)},
cU:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.x("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aK:function(a,b){var u
if(a>0)u=this.cT(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fR:function(a,b){if(b<0)throw H.d(H.ak(b))
return this.cT(a,b)},
cT:function(a,b){return b>31?0:a>>>b},
$iM:1,
$iaa:1}
J.cT.prototype={$iw:1}
J.fw.prototype={}
J.aY.prototype={
V:function(a,b){if(b<0)throw H.d(H.bE(a,b))
if(b>=a.length)H.t(H.bE(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.d(H.bE(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.d(P.kT(b,null,null))
return a+b},
aQ:function(a,b,c,d){var u,t
c=P.b7(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a2:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.W(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a0:function(a,b){return this.a2(a,b,0)},
t:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ak(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.R()
if(b<0)throw H.d(P.da(b,null))
if(b>c)throw H.d(P.da(b,null))
if(c>a.length)throw H.d(P.da(c,null))
return a.substring(b,c)},
a6:function(a,b){return this.t(a,b,null)},
i1:function(a){return a.toLowerCase()},
p:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.L)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ad:function(a,b){var u=b-a.length
if(u<=0)return a
return this.p(" ",u)+a},
bh:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.W(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dt:function(a,b){return this.bh(a,b,0)},
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
i:function(a,b){return C.a.V(this.a,b)},
$ar:function(){return[P.w]},
$ai:function(){return[P.w]},
$an:function(){return[P.w]}}
H.f8.prototype={}
H.cZ.prototype={
gT:function(a){return new H.bU(this,this.gl(this))},
bp:function(a,b){return this.e5(0,b)}}
H.bU.prototype={
gK:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.cw(s),q=r.gl(s)
if(t.b!==q)throw H.d(P.az(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.J(s,u);++t.c
return!0}}
H.fM.prototype={
gT:function(a){return new H.fN(J.aS(this.a),this.b)},
gl:function(a){return J.ac(this.a)},
J:function(a,b){return this.b.$1(J.eA(this.a,b))},
$ai:function(a,b){return[b]}}
H.fN.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.a=u.c.$1(t.gK(t))
return!0}u.a=null
return!1},
gK:function(a){return this.a}}
H.fO.prototype={
gl:function(a){return J.ac(this.a)},
J:function(a,b){return this.b.$1(J.eA(this.a,b))},
$acZ:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cf.prototype={
gT:function(a){return new H.iM(J.aS(this.a),this.b)}}
H.iM.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(t.$1(u.gK(u)))return!0
return!1},
gK:function(a){var u=this.a
return u.gK(u)}}
H.cQ.prototype={}
H.io.prototype={
m:function(a,b,c){throw H.d(P.x("Cannot modify an unmodifiable list"))}}
H.du.prototype={}
H.eT.prototype={
h:function(a){return P.kn(this)},
m:function(a,b,c){return H.mA()},
$iP:1}
H.eU.prototype={
gl:function(a){return this.a},
bf:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bf(0,b))return
return this.cI(b)},
cI:function(a){return this.b[a]},
H:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cI(s))}}}
H.i9.prototype={
ac:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hi.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fy.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.im.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.k4.prototype={
$1:function(a){if(!!J.R(a).$ibk)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:9}
H.e9.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bK.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
gi2:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hY.prototype={}
H.hQ.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ez(u)+"'"}}
H.bI.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bI))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.c2(this.a)
else u=typeof t!=="object"?J.cD(t):H.c2(t)
return(u^H.c2(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.c3(u))+"'")}}
H.eO.prototype={
h:function(a){return this.a}}
H.hA.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.N.prototype={
gl:function(a){return this.a},
ghv:function(a){return this.a===0},
ga1:function(a){return new H.fD(this,[H.cz(this,0)])},
bf:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cF(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cF(t,b)}else return s.hr(b)},
hr:function(a){var u=this,t=u.d
if(t==null)return!1
return u.c7(u.bA(t,u.c6(a)),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bb(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bb(r,b)
s=t==null?null:t.b
return s}else return q.hs(b)},
hs:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bA(r,s.c6(a))
t=s.c7(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cz(u==null?s.b=s.bI():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cz(t==null?s.c=s.bI():t,b,c)}else s.ht(b,c)},
ht:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bI()
u=r.c6(a)
t=r.bA(q,u)
if(t==null)r.bN(q,u,[r.bJ(a,b)])
else{s=r.c7(t,a)
if(s>=0)t[s].b=b
else t.push(r.bJ(a,b))}},
H:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.d(P.az(u))
t=t.c}},
cz:function(a,b,c){var u=this.bb(a,b)
if(u==null)this.bN(a,b,this.bJ(b,c))
else u.b=c},
eK:function(){this.r=this.r+1&67108863},
bJ:function(a,b){var u,t=this,s=new H.fC(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eK()
return s},
c6:function(a){return J.cD(a)&0x3ffffff},
c7:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1},
h:function(a){return P.kn(this)},
bb:function(a,b){return a[b]},
bA:function(a,b){return a[b]},
bN:function(a,b,c){a[b]=c},
eD:function(a,b){delete a[b]},
cF:function(a,b){return this.bb(a,b)!=null},
bI:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bN(t,u,t)
this.eD(t,u)
return t}}
H.fC.prototype={}
H.fD.prototype={
gl:function(a){return this.a.a},
gT:function(a){var u=this.a,t=new H.fE(u,u.r)
t.c=u.e
return t}}
H.fE.prototype={
gK:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.az(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.jM.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.jN.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jO.prototype={
$1:function(a){return this.a(a)}}
H.fx.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$in6:1}
H.bY.prototype={$ibY:1}
H.b2.prototype={$ib2:1}
H.d2.prototype={
gl:function(a){return a.length},
$iB:1,
$aB:function(){}}
H.bZ.prototype={
i:function(a,b){H.aw(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aw(b,a,a.length)
a[b]=c},
$ar:function(){return[P.M]},
$ii:1,
$ai:function(){return[P.M]},
$in:1,
$an:function(){return[P.M]}}
H.d3.prototype={
m:function(a,b,c){H.aw(b,a,a.length)
a[b]=c},
$ar:function(){return[P.w]},
$ii:1,
$ai:function(){return[P.w]},
$in:1,
$an:function(){return[P.w]}}
H.ha.prototype={
i:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.hb.prototype={
i:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.hc.prototype={
i:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.hd.prototype={
i:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.he.prototype={
i:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.d4.prototype={
gl:function(a){return a.length},
i:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.c_.prototype={
gl:function(a){return a.length},
i:function(a,b){H.aw(b,a,a.length)
return a[b]},
$ic_:1,
$ibv:1}
H.cj.prototype={}
H.ck.prototype={}
H.cl.prototype={}
H.cm.prototype={}
P.iO.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.iN.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.iP.prototype={
$0:function(){this.a.$0()}}
P.iQ.prototype={
$0:function(){this.a.$0()}}
P.ef.prototype={
eo:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bD(new P.jk(this,b),0),a)
else throw H.d(P.x("`setTimeout()` not found."))},
ep:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bD(new P.jj(this,a,Date.now(),b),0),a)
else throw H.d(P.x("Periodic timer."))},
$idm:1}
P.jk.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jj.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.e8(u,q)}s.c=r
t.d.$1(s)}}
P.dC.prototype={}
P.di.prototype={}
P.hT.prototype={}
P.dm.prototype={}
P.jt.prototype={}
P.jC.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.d7():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.h(0)
throw u}}
P.j3.prototype={
hX:function(a){var u,t,s,r=null
try{if(C.f===$.aj){a.$0()
return}P.o9(r,r,this,a)}catch(s){u=H.ab(s)
t=H.kG(s)
P.lI(r,r,this,u,t)}},
hY:function(a,b){var u,t,s,r=null
try{if(C.f===$.aj){a.$1(b)
return}P.oa(r,r,this,a,b)}catch(s){u=H.ab(s)
t=H.kG(s)
P.lI(r,r,this,u,t)}},
hZ:function(a,b){return this.hY(a,b,null)},
h5:function(a){return new P.j4(this,a)},
d2:function(a,b){return new P.j5(this,a,b)}}
P.j4.prototype={
$0:function(){return this.a.hX(this.b)}}
P.j5.prototype={
$1:function(a){return this.a.hZ(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.j0.prototype={
gT:function(a){var u=new P.dR(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
W:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.ez(b)
return t}},
ez:function(a){var u=this.d
if(u==null)return!1
return this.by(this.cJ(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cB(u==null?s.b=P.kv():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cB(t==null?s.c=P.kv():t,b)}else return s.er(0,b)},
er:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kv()
u=s.cD(b)
t=r[u]
if(t==null)r[u]=[s.bv(b)]
else{if(s.by(t,b)>=0)return!1
t.push(s.bv(b))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fE(this.c,b)
else return this.fD(0,b)},
fD:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cJ(r,b)
t=s.by(u,b)
if(t<0)return!1
s.cV(u.splice(t,1)[0])
return!0},
cB:function(a,b){if(a[b]!=null)return!1
a[b]=this.bv(b)
return!0},
fE:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cV(u)
delete a[b]
return!0},
cC:function(){this.r=1073741823&this.r+1},
bv:function(a){var u,t=this,s=new P.j1(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cC()
return s},
cV:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cC()},
cD:function(a){return J.cD(a)&1073741823},
cJ:function(a,b){return a[this.cD(b)]},
by:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1}}
P.j1.prototype={}
P.dR.prototype={
gK:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.az(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fF.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.fG.prototype={$ii:1,$in:1}
P.r.prototype={
gT:function(a){return new H.bU(a,this.gl(a))},
J:function(a,b){return this.i(a,b)},
i0:function(a,b){var u,t,s=this,r=H.c([],[H.op(s,a,"r",0)])
C.b.sl(r,s.gl(a))
for(u=0;u<s.gl(a);++u){t=s.i(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t}return r},
i_:function(a){return this.i0(a,!0)},
hk:function(a,b,c,d){var u
P.b7(b,c,this.gl(a))
for(u=b;u<c;++u)this.m(a,u,d)},
h:function(a){return P.kh(a,"[","]")}}
P.fJ.prototype={}
P.fK.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.aD.prototype={
H:function(a,b){var u,t
for(u=J.aS(this.ga1(a));u.A();){t=u.gK(u)
b.$2(t,this.i(a,t))}},
gl:function(a){return J.ac(this.ga1(a))},
h:function(a){return P.kn(a)},
$iP:1}
P.jl.prototype={
m:function(a,b,c){throw H.d(P.x("Cannot modify unmodifiable map"))}}
P.fL.prototype={
i:function(a,b){return J.cC(this.a,b)},
m:function(a,b,c){J.k6(this.a,b,c)},
H:function(a,b){J.kP(this.a,b)},
gl:function(a){return J.ac(this.a)},
h:function(a){return J.a1(this.a)},
$iP:1}
P.dv.prototype={}
P.j7.prototype={
ap:function(a,b){var u
for(u=J.aS(b);u.A();)this.n(0,u.gK(u))},
h:function(a){return P.kh(this,"{","}")},
J:function(a,b){var u,t,s
P.le(b,"index")
for(u=P.nu(this,this.r),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.d(P.J(b,this,"index",null,t))},
$ii:1}
P.dS.prototype={}
P.ek.prototype={}
P.eK.prototype={
hz:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.b7(a0,a1,b.length)
u=$.mh()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.a.D(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jL(C.a.D(b,n))
j=H.jL(C.a.D(b,n+1))
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
g=r.a+=C.a.t(b,s,t)
r.a=g+H.bs(m)
s=n
continue}}throw H.d(P.O("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.t(b,s,a1)
f=g.length
if(q>=0)P.kU(b,p,a1,q,o,f)
else{e=C.c.b8(f-1,4)+1
if(e===1)throw H.d(P.O(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aQ(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.kU(b,p,a1,q,o,d)
else{e=C.c.b8(d,4)
if(e===1)throw H.d(P.O(c,b,a1))
if(e>1)b=C.a.aQ(b,a1,a1,e===2?"==":"=")}return b}}
P.eL.prototype={}
P.eQ.prototype={}
P.eV.prototype={}
P.fa.prototype={}
P.fr.prototype={
h:function(a){return this.a}}
P.fq.prototype={
eA:function(a,b,c){var u,t,s,r,q,p,o=null
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
if(r>b)q.a+=C.a.t(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.ms(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iw.prototype={
ghj:function(){return C.M}}
P.iy.prototype={
bW:function(a){var u,t,s=P.b7(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jr(u)
if(t.eF(a,0,s)!==s)t.cX(J.mo(a,s-1),0)
return new Uint8Array(u.subarray(0,H.nL(0,t.b,u.length)))}}
P.jr.prototype={
cX:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eF:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.V(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.D(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cX(r,C.a.D(a,p)))s=p}else if(r<=2047){q=n.b
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
P.ix.prototype={
bW:function(a){var u,t,s,r,q,p,o,n,m=P.ni(!1,a,0,null)
if(m!=null)return m
u=P.b7(0,null,J.ac(a))
t=P.lK(a,0,u)
if(t>0){s=P.c6(a,0,t)
if(t===u)return s
r=new P.Q(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.Q("")
o=new P.jq(!1,r)
o.c=p
o.ha(a,q,u)
if(o.e>0){H.t(P.O("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bs(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jq.prototype={
ha:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.cw(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.af()
if((r&192)!==128){q=P.O(k+C.c.b7(r,16),a,s)
throw H.d(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.b(C.v,q)
if(j<=C.v[q]){q=P.O("Overlong encoding of 0x"+C.c.b7(j,16),a,s-h-1)
throw H.d(q)}if(j>1114111){q=P.O("Character outside valid Unicode range: 0x"+C.c.b7(j,16),a,s-h-1)
throw H.d(q)}if(!l.c||j!==65279)t.a+=H.bs(j)
l.c=!1}for(q=s<c;q;){p=P.lK(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.c6(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.R()
if(r<0){m=P.O("Negative UTF-8 code unit: -0x"+C.c.b7(-r,16),a,n-1)
throw H.d(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.O(k+C.c.b7(r,16),a,n-1)
throw H.d(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.ax.prototype={}
P.a6.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.a6&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.c.aK(u,30))&1073741823},
h:function(a){var u=this,t=P.mB(H.n2(u)),s=P.cL(H.n0(u)),r=P.cL(H.mX(u)),q=P.cL(H.mY(u)),p=P.cL(H.n_(u)),o=P.cL(H.n1(u)),n=P.mC(H.mZ(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.M.prototype={}
P.aV.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.aV&&this.a===b.a},
gI:function(a){return C.c.gI(this.a)},
h:function(a){var u,t,s,r=new P.f7(),q=this.a
if(q<0)return"-"+new P.aV(0-q).h(0)
u=r.$1(C.c.a4(q,6e7)%60)
t=r.$1(C.c.a4(q,1e6)%60)
s=new P.f6().$1(q%1e6)
return""+C.c.a4(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.f6.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.f7.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bk.prototype={}
P.d7.prototype={
h:function(a){return"Throw of null."}}
P.ah.prototype={
gbx:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbw:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbx()+o+u
if(!q.a)return t
s=q.gbw()
r=P.kf(q.b)
return t+s+": "+r}}
P.bt.prototype={
gbx:function(){return"RangeError"},
gbw:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fs.prototype={
gbx:function(){return"RangeError"},
gbw:function(){var u,t=this.b
if(typeof t!=="number")return t.R()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.ip.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.ik.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c5.prototype={
h:function(a){return"Bad state: "+this.a}}
P.eS.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kf(u)+"."}}
P.hl.prototype={
h:function(a){return"Out of Memory"},
$ibk:1}
P.dg.prototype={
h:function(a){return"Stack Overflow"},
$ibk:1}
P.f_.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dK.prototype={
h:function(a){return"Exception: "+this.a}}
P.fk.prototype={
h:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.t(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.D(f,q)
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
k=""}j=C.a.t(f,m,n)
return h+l+j+k+"\n"+C.a.p(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fm.prototype={}
P.w.prototype={}
P.i.prototype={
bp:function(a,b){return new H.cf(this,b,[H.kF(this,"i",0)])},
gl:function(a){var u,t=this.gT(this)
for(u=0;t.A();)++u
return u},
gaE:function(a){var u,t=this.gT(this)
if(!t.A())throw H.d(H.ft())
u=t.gK(t)
if(t.A())throw H.d(H.mI())
return u},
J:function(a,b){var u,t,s
P.le(b,"index")
for(u=this.gT(this),t=0;u.A();){s=u.gK(u)
if(b===t)return s;++t}throw H.d(P.J(b,this,"index",null,t))},
h:function(a){return P.mH(this,"(",")")}}
P.fu.prototype={}
P.n.prototype={$ii:1}
P.P.prototype={}
P.b3.prototype={
gI:function(a){return P.a_.prototype.gI.call(this,this)},
h:function(a){return"null"}}
P.aa.prototype={}
P.a_.prototype={constructor:P.a_,$ia_:1,
q:function(a,b){return this===b},
gI:function(a){return H.c2(this)},
h:function(a){return"Instance of '"+H.e(H.c3(this))+"'"},
toString:function(){return this.h(this)}}
P.k.prototype={}
P.Q.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iu.prototype={
$2:function(a,b){var u,t,s,r=J.cx(b).dt(b,"=")
if(r===-1){if(b!=="")J.k6(a,P.kz(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.t(b,0,r)
t=C.a.a6(b,r+1)
s=this.a
J.k6(a,P.kz(u,0,u.length,s,!0),P.kz(t,0,t.length,s,!0))}return a}}
P.ir.prototype={
$2:function(a,b){throw H.d(P.O("Illegal IPv4 address, "+a,this.a,b))}}
P.is.prototype={
$2:function(a,b){throw H.d(P.O("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.it.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.ey(C.a.t(this.b,a,b),null,16)
if(typeof u!=="number")return u.R()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bz.prototype={
gdX:function(){return this.b},
gc5:function(a){var u=this.c
if(u==null)return""
if(C.a.a0(u,"["))return C.a.t(u,1,u.length-1)
return u},
gbk:function(a){var u=this.d
if(u==null)return P.lB(this.a)
return u},
gce:function(a){var u=this.f
return u==null?"":u},
gdm:function(){var u=this.r
return u==null?"":u},
dO:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a0(u,"/"))u="/"+u
s=P.kx(null,0,0,b)
return new P.bz(q,o,m,n,u,s,r.r)},
gcf:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.k
u=this.Q=new P.dv(P.lq(t==null?"":t),[u,u])
t=u}return t},
gdn:function(){return this.c!=null},
gds:function(){return this.f!=null},
gdq:function(){return this.r!=null},
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
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.R(b).$iks)if(s.a==b.gbq())if(s.c!=null===b.gdn())if(s.b==b.gdX())if(s.gc5(s)==b.gc5(b))if(s.gbk(s)==b.gbk(b))if(s.e===b.gdI(b)){u=s.f
t=u==null
if(!t===b.gds()){if(t)u=""
if(u===b.gce(b)){u=s.r
t=u==null
if(!t===b.gdq()){if(t)u=""
u=u===b.gdm()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
return u==null?this.z=C.a.gI(this.h(0)):u},
$iks:1,
gbq:function(){return this.a},
gdI:function(a){return this.e}}
P.jm.prototype={
$1:function(a){throw H.d(P.O("Invalid port",this.a,this.b+1))}}
P.jn.prototype={
$1:function(a){return P.el(C.V,a,C.e,!1)}}
P.jp.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.el(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.el(C.h,b,C.e,!0))}}}
P.jo.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aS(b),t=this.a;u.A();)t.$2(a,u.gK(u))}}
P.iq.prototype={
gdW:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.b(o,0)
u=q.a
o=o[0]+1
t=C.a.bh(u,"?",o)
s=u.length
if(t>=0){r=P.cr(u,t+1,s,C.k,!1)
s=t}else r=p
return q.c=new P.iU("data",p,p,p,P.cr(u,o,s,C.z,!1),r,p)},
h:function(a){var u,t=this.b
if(0>=t.length)return H.b(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jx.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jw.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.b(u,a)
u=u[a]
J.mp(u,0,96,b)
return u},
$S:17}
P.jy.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.D(b,s)^96
if(r>=t)return H.b(a,r)
a[r]=c}}}
P.jz.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.D(b,0),t=C.a.D(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.b(a,r)
a[r]=c}}}
P.ja.prototype={
gdn:function(){return this.c>0},
gdr:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.B()
t=this.e
if(typeof t!=="number")return H.v(t)
t=u+1<t
u=t}else u=!1
return u},
gds:function(){var u=this.f
if(typeof u!=="number")return u.R()
return u<this.r},
gdq:function(){return this.r<this.a.length},
gcK:function(){return this.b===4&&C.a.a0(this.a,"http")},
gcL:function(){return this.b===5&&C.a.a0(this.a,"https")},
gbq:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcK())q=t.x="http"
else if(t.gcL()){t.x="https"
q="https"}else if(q===4&&C.a.a0(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a0(t.a,r)){t.x=r
q=r}else{q=C.a.t(t.a,0,q)
t.x=q}return q},
gdX:function(){var u=this.c,t=this.b+3
return u>t?C.a.t(this.a,t,u-1):""},
gc5:function(a){var u=this.c
return u>0?C.a.t(this.a,u,this.d):""},
gbk:function(a){var u,t=this
if(t.gdr()){u=t.d
if(typeof u!=="number")return u.B()
return P.ey(C.a.t(t.a,u+1,t.e),null,null)}if(t.gcK())return 80
if(t.gcL())return 443
return 0},
gdI:function(a){return C.a.t(this.a,this.e,this.f)},
gce:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.R()
return u<t?C.a.t(this.a,u+1,t):""},
gdm:function(){var u=this.r,t=this.a
return u<t.length?C.a.a6(t,u+1):""},
gcf:function(){var u=this,t=u.f
if(typeof t!=="number")return t.R()
if(t>=u.r)return C.W
t=P.k
return new P.dv(P.lq(u.gce(u)),[t,t])},
dO:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbq(),m=n==="file",l=p.c,k=l>0?C.a.t(p.a,p.b+3,l):"",j=p.gdr()?p.gbk(p):o
l=p.c
if(l>0)u=C.a.t(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.t(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a0(t,"/"))t="/"+t
r=P.kx(o,0,0,b)
s=p.r
q=s<l.length?C.a.a6(l,s+1):o
return new P.bz(n,k,u,j,t,r,q)},
gI:function(a){var u=this.y
return u==null?this.y=C.a.gI(this.a):u},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.R(b).$iks&&this.a===b.h(0)},
h:function(a){return this.a},
$iks:1}
P.iU.prototype={}
W.l.prototype={}
W.eB.prototype={
gl:function(a){return a.length}}
W.eC.prototype={
h:function(a){return String(a)}}
W.eD.prototype={
h:function(a){return String(a)}}
W.bh.prototype={$ibh:1}
W.bi.prototype={$ibi:1}
W.bj.prototype={
e_:function(a,b,c){var u=a.getContext(b,P.oi(c))
return u},
$ibj:1}
W.aT.prototype={
gl:function(a){return a.length}}
W.eW.prototype={
gl:function(a){return a.length}}
W.G.prototype={$iG:1}
W.bL.prototype={
gl:function(a){return a.length}}
W.eX.prototype={}
W.ad.prototype={}
W.an.prototype={}
W.eY.prototype={
gl:function(a){return a.length}}
W.eZ.prototype={
gl:function(a){return a.length}}
W.f1.prototype={
gl:function(a){return a.length}}
W.ai.prototype={$iai:1}
W.f3.prototype={
h:function(a){return String(a)}}
W.cN.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[[P.a9,P.aa]]},
$ar:function(){return[[P.a9,P.aa]]},
$ii:1,
$ai:function(){return[[P.a9,P.aa]]},
$in:1,
$an:function(){return[[P.a9,P.aa]]}}
W.cO.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaD(a))+" x "+H.e(this.gaz(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.R(b)
if(!u.$ia9)return!1
return a.left===u.gbj(b)&&a.top===u.gbn(b)&&this.gaD(a)===u.gaD(b)&&this.gaz(a)===u.gaz(b)},
gI:function(a){return W.lz(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(this.gaD(a)),C.d.gI(this.gaz(a)))},
gd3:function(a){return a.bottom},
gaz:function(a){return a.height},
gbj:function(a){return a.left},
gbm:function(a){return a.right},
gbn:function(a){return a.top},
gaD:function(a){return a.width},
$ia9:1,
$aa9:function(){return[P.aa]}}
W.f4.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[P.k]},
$ar:function(){return[P.k]},
$ii:1,
$ai:function(){return[P.k]},
$in:1,
$an:function(){return[P.k]}}
W.f5.prototype={
gl:function(a){return a.length}}
W.iS.prototype={
gl:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gT:function(a){var u=this.i_(this)
return new J.a2(u,u.length)},
$ar:function(){return[W.S]},
$ai:function(){return[W.S]},
$an:function(){return[W.S]}}
W.S.prototype={
gh4:function(a){return new W.iV(a)},
gbV:function(a){return new W.iS(a,a.children)},
gd4:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.R()
if(s<0)s=-s*0
if(typeof r!=="number")return r.R()
if(r<0)r=-r*0
return new P.a9(u,t,s,r,[P.aa])},
h:function(a){return a.localName},
ab:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.l0
if(u==null){u=H.c([],[W.aG])
t=new W.d6(u)
u.push(W.ly(null))
u.push(W.lA())
$.l0=t
d=t}else d=u
u=$.l_
if(u==null){u=new W.em(d)
$.l_=u
c=u}else{u.a=d
c=u}}if($.aA==null){u=document
t=u.implementation.createHTMLDocument("")
$.aA=t
$.kd=t.createRange()
s=$.aA.createElement("base")
s.href=u.baseURI
$.aA.head.appendChild(s)}u=$.aA
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aA
if(!!this.$ibi)r=u.body
else{r=u.createElement(a.tagName)
$.aA.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.W(C.T,a.tagName)){$.kd.selectNodeContents(r)
q=$.kd.createContextualFragment(b)}else{r.innerHTML=b
q=$.aA.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aA.body
if(r==null?u!=null:r!==u)J.kR(r)
c.cm(q)
document.adoptNode(q)
return q},
hd:function(a,b,c){return this.ab(a,b,c,null)},
e1:function(a,b){a.textContent=null
a.appendChild(this.ab(a,b,null,null))},
$iS:1,
gdR:function(a){return a.tagName}}
W.f9.prototype={
$1:function(a){return!!J.R(a).$iS}}
W.h.prototype={$ih:1}
W.f.prototype={
fZ:function(a,b,c,d){if(c!=null)this.es(a,b,c,!1)},
es:function(a,b,c,d){return a.addEventListener(b,H.bD(c,1),!1)}}
W.ao.prototype={$iao:1}
W.bO.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.ao]},
$ar:function(){return[W.ao]},
$ii:1,
$ai:function(){return[W.ao]},
$in:1,
$an:function(){return[W.ao]},
$ibO:1}
W.ff.prototype={
gl:function(a){return a.length}}
W.fj.prototype={
gl:function(a){return a.length}}
W.aC.prototype={$iaC:1}
W.fp.prototype={
gl:function(a){return a.length}}
W.bQ.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.E]},
$ar:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$in:1,
$an:function(){return[W.E]}}
W.bR.prototype={$ibR:1}
W.bp.prototype={$ibp:1}
W.fH.prototype={
h:function(a){return String(a)}}
W.h3.prototype={
gl:function(a){return a.length}}
W.bW.prototype={$ibW:1}
W.h4.prototype={
i:function(a,b){return P.aN(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aN(u.value[1]))}},
ga1:function(a){var u=H.c([],[P.k])
this.H(a,new W.h5(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.x("Not supported"))},
$iP:1,
$aP:function(){return[P.k,null]}}
W.h5.prototype={
$2:function(a,b){return this.a.push(a)}}
W.h6.prototype={
i:function(a,b){return P.aN(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aN(u.value[1]))}},
ga1:function(a){var u=H.c([],[P.k])
this.H(a,new W.h7(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.x("Not supported"))},
$iP:1,
$aP:function(){return[P.k,null]}}
W.h7.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aE.prototype={$iaE:1}
W.h8.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aE]},
$ar:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]},
$in:1,
$an:function(){return[W.aE]}}
W.as.prototype={$ias:1}
W.a0.prototype={
gaE:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.d(P.lh("No elements"))
if(t>1)throw H.d(P.lh("More than one element"))
return u.firstChild},
ap:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.b(t,b)
u.replaceChild(c,t[b])},
gT:function(a){var u=this.a.childNodes
return new W.cR(u,u.length)},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$ar:function(){return[W.E]},
$ai:function(){return[W.E]},
$an:function(){return[W.E]}}
W.E.prototype={
hR:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
hV:function(a,b){var u,t
try{u=a.parentNode
J.mm(u,b,a)}catch(t){H.ab(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.e4(a):u},
fG:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.d5.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.E]},
$ar:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$in:1,
$an:function(){return[W.E]}}
W.aH.prototype={$iaH:1,
gl:function(a){return a.length}}
W.ho.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aH]},
$ar:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]},
$in:1,
$an:function(){return[W.aH]}}
W.hy.prototype={
i:function(a,b){return P.aN(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aN(u.value[1]))}},
ga1:function(a){var u=H.c([],[P.k])
this.H(a,new W.hz(u))
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
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aI]},
$ar:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]},
$in:1,
$an:function(){return[W.aI]}}
W.aJ.prototype={$iaJ:1}
W.hN.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aJ]},
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
H:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga1:function(a){var u=H.c([],[P.k])
this.H(a,new W.hS(u))
return u},
gl:function(a){return a.length},
$iP:1,
$aP:function(){return[P.k,P.k]}}
W.hS.prototype={
$2:function(a,b){return this.a.push(a)}}
W.at.prototype={$iat:1}
W.dj.prototype={
ab:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bs(a,b,c,d)
u=W.mD("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a0(t).ap(0,new W.a0(u))
return t}}
W.hV.prototype={
ab:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bs(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.ab(u.createElement("table"),b,c,d)
u.toString
u=new W.a0(u)
s=u.gaE(u)
s.toString
u=new W.a0(s)
r=u.gaE(u)
t.toString
r.toString
new W.a0(t).ap(0,new W.a0(r))
return t}}
W.hW.prototype={
ab:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bs(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.ab(u.createElement("table"),b,c,d)
u.toString
u=new W.a0(u)
s=u.gaE(u)
t.toString
s.toString
new W.a0(t).ap(0,new W.a0(s))
return t}}
W.c7.prototype={$ic7:1}
W.aL.prototype={$iaL:1}
W.au.prototype={$iau:1}
W.hZ.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.au]},
$ar:function(){return[W.au]},
$ii:1,
$ai:function(){return[W.au]},
$in:1,
$an:function(){return[W.au]}}
W.i_.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aL]},
$ar:function(){return[W.aL]},
$ii:1,
$ai:function(){return[W.aL]},
$in:1,
$an:function(){return[W.aL]}}
W.i2.prototype={
gl:function(a){return a.length}}
W.aM.prototype={$iaM:1}
W.bu.prototype={$ibu:1}
W.i6.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aM]},
$ar:function(){return[W.aM]},
$ii:1,
$ai:function(){return[W.aM]},
$in:1,
$an:function(){return[W.aM]}}
W.i7.prototype={
gl:function(a){return a.length}}
W.b9.prototype={}
W.iv.prototype={
h:function(a){return String(a)}}
W.iK.prototype={
gl:function(a){return a.length}}
W.bc.prototype={
ghg:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.x("deltaY is not supported"))},
ghf:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.x("deltaX is not supported"))},
$ibc:1}
W.cg.prototype={
fH:function(a,b){return a.requestAnimationFrame(H.bD(b,1))},
eE:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iT.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.G]},
$ar:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$in:1,
$an:function(){return[W.G]}}
W.dF.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.R(b)
if(!u.$ia9)return!1
return a.left===u.gbj(b)&&a.top===u.gbn(b)&&a.width===u.gaD(b)&&a.height===u.gaz(b)},
gI:function(a){return W.lz(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(a.width),C.d.gI(a.height))},
gaz:function(a){return a.height},
gaD:function(a){return a.width}}
W.iY.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aC]},
$ar:function(){return[W.aC]},
$ii:1,
$ai:function(){return[W.aC]},
$in:1,
$an:function(){return[W.aC]}}
W.dX.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.E]},
$ar:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$in:1,
$an:function(){return[W.E]}}
W.jb.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aK]},
$ar:function(){return[W.aK]},
$ii:1,
$ai:function(){return[W.aK]},
$in:1,
$an:function(){return[W.aK]}}
W.jf.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.at]},
$ar:function(){return[W.at]},
$ii:1,
$ai:function(){return[W.at]},
$in:1,
$an:function(){return[W.at]}}
W.iR.prototype={
H:function(a,b){var u,t,s,r,q
for(u=this.ga1(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.o)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga1:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.k])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.b(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aP:function(){return[P.k,P.k]}}
W.iV.prototype={
i:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga1(this).length}}
W.iW.prototype={}
W.iX.prototype={
$1:function(a){return this.a.$1(a)}}
W.ch.prototype={
ee:function(a){var u
if($.ci.ghv($.ci)){for(u=0;u<262;++u)$.ci.m(0,C.S[u],W.or())
for(u=0;u<12;++u)$.ci.m(0,C.p[u],W.os())}},
aL:function(a){return $.mi().W(0,W.bM(a))},
aq:function(a,b,c){var u=$.ci.i(0,H.e(W.bM(a))+"::"+b)
if(u==null)u=$.ci.i(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaG:1}
W.I.prototype={
gT:function(a){return new W.cR(a,this.gl(a))}}
W.d6.prototype={
aL:function(a){return C.b.d0(this.a,new W.hg(a))},
aq:function(a,b,c){return C.b.d0(this.a,new W.hf(a,b,c))},
$iaG:1}
W.hg.prototype={
$1:function(a){return a.aL(this.a)}}
W.hf.prototype={
$1:function(a){return a.aq(this.a,this.b,this.c)}}
W.e4.prototype={
el:function(a,b,c,d){var u,t,s
this.a.ap(0,c)
u=b.bp(0,new W.j8())
t=b.bp(0,new W.j9())
this.b.ap(0,u)
s=this.c
s.ap(0,C.w)
s.ap(0,t)},
aL:function(a){return this.a.W(0,W.bM(a))},
aq:function(a,b,c){var u=this,t=W.bM(a),s=u.c
if(s.W(0,H.e(t)+"::"+b))return u.d.h2(c)
else if(s.W(0,"*::"+b))return u.d.h2(c)
else{s=u.b
if(s.W(0,H.e(t)+"::"+b))return!0
else if(s.W(0,"*::"+b))return!0
else if(s.W(0,H.e(t)+"::*"))return!0
else if(s.W(0,"*::*"))return!0}return!1},
$iaG:1}
W.j8.prototype={
$1:function(a){return!C.b.W(C.p,a)}}
W.j9.prototype={
$1:function(a){return C.b.W(C.p,a)}}
W.jh.prototype={
aq:function(a,b,c){if(this.e7(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.W(0,b)
return!1}}
W.ji.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jg.prototype={
aL:function(a){var u=J.R(a)
if(!!u.$ic4)return!1
u=!!u.$ij
if(u&&W.bM(a)==="foreignObject")return!1
if(u)return!0
return!1},
aq:function(a,b,c){if(b==="is"||C.a.a0(b,"on"))return!1
return this.aL(a)},
$iaG:1}
W.cR.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cC(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gK:function(a){return this.d}}
W.aG.prototype={}
W.j6.prototype={}
W.em.prototype={
cm:function(a){new W.js(this).$2(a,null)},
aU:function(a,b){if(b==null)J.kR(a)
else b.removeChild(a)},
fL:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
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
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ab(r)}t="element unprintable"
try{t=J.a1(a)}catch(r){H.ab(r)}try{s=W.bM(a)
this.fK(a,b,p,t,s,o,n)}catch(r){if(H.ab(r) instanceof P.ah)throw r
else{this.aU(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fK:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aU(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aL(a)){p.aU(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.aq(a,"is",g)){p.aU(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga1(f)
t=H.c(u.slice(0),[H.cz(u,0)])
for(s=f.ga1(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.b(t,s)
r=t[s]
if(!p.a.aq(a,J.mt(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.R(a).$ic7)p.cm(a.content)}}
W.js.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fL(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aU(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ab(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dE.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.cn.prototype={}
W.co.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.ea.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.cp.prototype={}
W.cq.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
P.jc.prototype={
dk:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
ck:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.R(a)
if(!!u.$ia6)return new Date(a.a)
if(!!u.$in6)throw H.d(P.il("structured clone of RegExp"))
if(!!u.$iao)return a
if(!!u.$ibh)return a
if(!!u.$ibO)return a
if(!!u.$ibR)return a
if(!!u.$ibY||!!u.$ib2||!!u.$ibW)return a
if(!!u.$iP){t=p.dk(a)
s=p.b
r=s.length
if(t>=r)return H.b(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.b(s,t)
s[t]=q
u.H(a,new P.je(o,p))
return o.a}if(!!u.$in){t=p.dk(a)
o=p.b
if(t>=o.length)return H.b(o,t)
q=o[t]
if(q!=null)return q
return p.hc(a,t)}throw H.d(P.il("structured clone of other type"))},
hc:function(a,b){var u,t=J.cw(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.b(q,b)
q[b]=r
for(u=0;u<s;++u){q=this.ck(t.i(a,u))
if(u>=r.length)return H.b(r,u)
r[u]=q}return r}}
P.je.prototype={
$2:function(a,b){this.a.a[a]=this.b.ck(b)},
$S:3}
P.jD.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jd.prototype={}
P.fg.prototype={
gbc:function(){var u=this.b,t=H.kF(u,"r",0)
return new H.fM(new H.cf(u,new P.fh(),[t]),new P.fi(),[t,W.S])},
m:function(a,b,c){var u=this.gbc()
J.mr(u.b.$1(J.eA(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.ac(this.gbc().a)},
i:function(a,b){var u=this.gbc()
return u.b.$1(J.eA(u.a,b))},
gT:function(a){var u=P.l3(this.gbc(),!1,W.S)
return new J.a2(u,u.length)},
$ar:function(){return[W.S]},
$ai:function(){return[W.S]},
$an:function(){return[W.S]}}
P.fh.prototype={
$1:function(a){return!!J.R(a).$iS}}
P.fi.prototype={
$1:function(a){return H.q(a,"$iS")}}
P.j2.prototype={
gbm:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.v(t)
return u+t},
gd3:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.v(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.R(b)
if(!!u.$ia9){t=q.a
if(t==u.gbj(b)){s=q.b
if(s==u.gbn(b)){r=q.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.v(r)
if(t+r===u.gbm(b)){t=q.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.v(t)
u=s+t===u.gd3(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u=this,t=u.a,s=J.cD(t),r=u.b,q=J.cD(r),p=u.c
if(typeof t!=="number")return t.B()
if(typeof p!=="number")return H.v(p)
p=C.c.gI(t+p)
t=u.d
if(typeof r!=="number")return r.B()
if(typeof t!=="number")return H.v(t)
t=C.c.gI(r+t)
return P.nt(P.j_(P.j_(P.j_(P.j_(0,s),q),p),t))}}
P.a9.prototype={
gbj:function(a){return this.a},
gbn:function(a){return this.b},
gaD:function(a){return this.c},
gaz:function(a){return this.d}}
P.b_.prototype={$ib_:1}
P.fA.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ar:function(){return[P.b_]},
$ii:1,
$ai:function(){return[P.b_]},
$in:1,
$an:function(){return[P.b_]}}
P.b4.prototype={$ib4:1}
P.hj.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ar:function(){return[P.b4]},
$ii:1,
$ai:function(){return[P.b4]},
$in:1,
$an:function(){return[P.b4]}}
P.hq.prototype={
gl:function(a){return a.length}}
P.c4.prototype={$ic4:1}
P.hU.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ar:function(){return[P.k]},
$ii:1,
$ai:function(){return[P.k]},
$in:1,
$an:function(){return[P.k]}}
P.j.prototype={
gbV:function(a){return new P.fg(a,new W.a0(a))},
ab:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.aG])
p.push(W.ly(null))
p.push(W.lA())
p.push(new W.jg())
c=new W.em(new W.d6(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).hd(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a0(s)
q=p.gaE(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ij:1}
P.b8.prototype={$ib8:1}
P.i8.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ar:function(){return[P.b8]},
$ii:1,
$ai:function(){return[P.b8]},
$in:1,
$an:function(){return[P.b8]}}
P.dP.prototype={}
P.dQ.prototype={}
P.e_.prototype={}
P.e0.prototype={}
P.eb.prototype={}
P.ec.prototype={}
P.ei.prototype={}
P.ej.prototype={}
P.bv.prototype={$ii:1,
$ai:function(){return[P.w]},
$in:1,
$an:function(){return[P.w]}}
P.eG.prototype={
gl:function(a){return a.length}}
P.eH.prototype={
i:function(a,b){return P.aN(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aN(u.value[1]))}},
ga1:function(a){var u=H.c([],[P.k])
this.H(a,new P.eI(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.x("Not supported"))},
$iP:1,
$aP:function(){return[P.k,null]}}
P.eI.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eJ.prototype={
gl:function(a){return a.length}}
P.bg.prototype={}
P.hk.prototype={
gl:function(a){return a.length}}
P.dD.prototype={}
P.hP.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return P.aN(a.item(b))},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ar:function(){return[[P.P,,,]]},
$ii:1,
$ai:function(){return[[P.P,,,]]},
$in:1,
$an:function(){return[[P.P,,,]]}}
P.e7.prototype={}
P.e8.prototype={}
T.ay.prototype={
aA:function(a,b){return!0},
h:function(a){return"all"}}
T.cS.prototype={
aA:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)if(u[s].aA(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.b0.prototype={}
T.a3.prototype={
aA:function(a,b){return!this.e3(0,b)},
h:function(a){return"!["+this.cq(0)+"]"}}
T.ht.prototype={
aA:function(a,b){return this.a<=b&&this.b>=b},
h:function(a){var u=H.bs(this.a),t=H.bs(this.b)
return u+".."+t}}
T.hC.prototype={
eb:function(a){var u,t
if(a.a.length<=0)throw H.d(P.u("May not create a Set with zero characters."))
u=new H.N([P.w,P.ax])
for(t=new H.bU(a,a.gl(a));t.A();)u.m(0,t.d,!0)
this.a=u},
aA:function(a,b){return this.a.bf(0,b)},
h:function(a){var u=this.a
return P.c6(u.ga1(u),0,null)}}
R.dh.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.dr(this.a.j(0,b))
r.a=H.c([],[T.b0])
r.c=!1
this.c.push(r)
return r},
hl:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.aA(0,a))return r}return},
h:function(a){return this.b}}
R.dn.prototype={
h:function(a){var u=H.kK(this.b,"\n","\\n"),t=H.kK(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.dp.prototype={
aC:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.o)(c),++t){s=c[t]
this.c.m(0,s,b)}},
h:function(a){return this.b}}
R.i3.prototype={
j:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.dh(this,b)
u.c=H.c([],[R.dr])
this.a.m(0,b,u)}return u},
P:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.dp(a)
u=P.k
t.c=new H.N([u,u])
this.b.m(0,a,t)}return t},
dU:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.c([],[R.dn]),k=this.c,j=[P.w],i=H.c([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)l.push(t)
return l}r=C.a.D(a,s)
q=k.hl(r)
if(q==null){if(t==null){i.push(r)
p=P.c6(i,0,m)
throw H.d(P.u("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}l.push(t)
s=t.c+1
i=H.c([],j)
k=this.c
t=m}else{if(!q.c)i.push(r)
k=q.b
if(k.d!=null){p=P.c6(i,0,m)
o=k.d
n=o.c.i(0,p)
t=new R.dn(n==null?o.b:n,p,s)}++s}}}}
R.dr.prototype={
h:function(a){return this.b.b+": "+this.cq(0)}}
O.aU.prototype={
bt:function(a){this.a=H.c([],[a])
this.c=this.b=null},
cn:function(a,b,c){this.b=b
this.c=a},
b9:function(a,b){return this.cn(a,null,b)},
fn:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
eN:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.a2(u,u.length)},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.kF(s,"aU",0)]
if(s.fn(H.c([b],r))){u=s.a
t=u.length
u.push(b)
s.eN(t,H.c([b],r))}},
$ii:1}
O.bV.prototype={
gl:function(a){return this.a.length},
gw:function(){var u=this.b
return u==null?this.b=D.H():u},
aF:function(){var u=this.b
if(u!=null)u.E(null)},
ga5:function(a){var u=this.a
if(u.length>0)return C.b.gas(u)
else return V.b1()},
dL:function(a){var u=this.a
if(a==null)u.push(V.b1())
else u.push(a)
this.aF()},
cd:function(){var u=this.a
if(u.length>0){u.pop()
this.aF()}}}
E.eM.prototype={}
E.aB.prototype={
cA:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.a2(u,u.length);u.A();){t=u.d
if(t.f==null)t.cA()}},
sa9:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gw().M(0,s.gdD())
u=s.c
if(u!=null)u.gw().n(0,s.gdD())
t=new D.y("shape",r,s.c)
t.b=!0
s.ah(t)}},
sb6:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gw().M(0,s.gdF())
u=s.f
s.f=a
if(a!=null)a.gw().n(0,s.gdF())
s.cA()
t=new D.y("technique",u,s.f)
t.b=!0
s.ah(t)}},
saB:function(a){var u,t,s=this
if(!J.D(s.r,a)){u=s.r
if(u!=null)u.gw().M(0,s.gdB())
if(a!=null)a.gw().n(0,s.gdB())
s.r=a
t=new D.y("mover",u,a)
t.b=!0
s.ah(t)}},
aj:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.ak(0,b,s):null
if(!J.D(q,s.x)){u=s.x
s.x=q
t=new D.y("matrix",u,q)
t.b=!0
s.ah(t)}r=s.f
if(r!=null)r.aj(0,b)
for(r=s.y.a,r=new J.a2(r,r.length);r.A();)r.d.aj(0,b)},
aP:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.ga5(s))
else s.a.push(r.p(0,s.ga5(s)))
s.aF()
a.dM(t.f)
s=a.dy
u=(s&&C.b).gas(s)
if(u!=null&&t.d!=null)u.hU(a,t)
for(s=t.y.a,s=new J.a2(s,s.length);s.A();)s.d.aP(a)
a.dK()
a.dx.cd()},
ah:function(a){var u=this.z
if(u!=null)u.E(a)},
Z:function(){return this.ah(null)},
dE:function(a){this.e=null
this.ah(a)},
hG:function(){return this.dE(null)},
dG:function(a){this.ah(a)},
hH:function(){return this.dG(null)},
dC:function(a){this.ah(a)},
hF:function(){return this.dC(null)},
dA:function(a){this.ah(a)},
hC:function(){return this.dA(null)},
hB:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdz(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bl()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.Z()},
hE:function(a,b){var u,t
for(u=b.gT(b),t=this.gdz();u.A();)u.gK(u).gw().M(0,t)
this.Z()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hu.prototype={
ea:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a6(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bV()
t=[V.aq]
u.a=H.c([],t)
u.gw().n(0,new E.hv(s))
s.cy=u
u=new O.bV()
u.a=H.c([],t)
u.gw().n(0,new E.hw(s))
s.db=u
u=new O.bV()
u.a=H.c([],t)
u.gw().n(0,new E.hx(s))
s.dx=u
u=H.c([],[O.dk])
s.dy=u
u.push(null)
s.fr=new H.N([P.k,A.dd])},
ghQ:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga5(s)
u=t.db
u=t.z=s.p(0,u.ga5(u))
s=u}return s},
dM:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gas(u):a)},
dK:function(){var u=this.dy
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
E.dl.prototype={
cv:function(a){this.dP()},
cu:function(){return this.cv(null)},
ghq:function(){var u,t=this,s=Date.now(),r=C.c.a4(P.kZ(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a6(s,!1)
return u/r},
cP:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.p()
if(typeof r!=="number")return H.v(r)
u=C.d.dl(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.p()
t=C.d.dl(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lk(C.n,s.ghW())}},
dP:function(){if(!this.cx){this.cx=!0
var u=window
C.D.eE(u)
C.D.fH(u,W.lL(new E.i1(this),P.aa))}},
hT:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cP()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a6(r,!1)
s.y=P.kZ(r-s.r.a).a*0.000001
r=s.cy
C.b.sl(r.a,0)
r.aF()
r=s.db
C.b.sl(r.a,0)
r.aF()
r=s.dx
C.b.sl(r.a,0)
r.aF()
r=s.dy;(r&&C.b).sl(r,0)
s.dy.push(null)
o.aP(p.e)}s=p.Q
if(s!=null)s.E(null)}catch(q){u=H.ab(q)
t=H.kG(q)
P.kJ("Error: "+H.e(u))
P.kJ("Stack: "+H.e(t))
throw H.d(u)}}}
E.i1.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.hT()}}}
Z.dB.prototype={}
Z.cF.prototype={
be:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ab(s)
t=P.u('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.d(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.iL.prototype={}
Z.cG.prototype={
aO:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
be:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].be(a)},
dV:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aP:function(a){var u,t,s,r,q,p=this.b.length
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
Z.bm.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.c3(this.c))+"'")+"]"}}
Z.bb.prototype={
gcp:function(a){var u=this.a,t=(u&$.aR().a)!==0?3:0
if((u&$.aQ().a)!==0)t+=3
if((u&$.aP().a)!==0)t+=3
if((u&$.be().a)!==0)t+=2
if((u&$.bf().a)!==0)t+=3
if((u&$.cA().a)!==0)t+=3
if((u&$.cB().a)!==0)t+=4
if((u&$.bH().a)!==0)++t
return(u&$.aO().a)!==0?t+4:t},
h3:function(a){var u,t=$.aR(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aQ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aP()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.be()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bf()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cA()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cB()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bH()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aO()
if((s&t.a)!==0)if(u===a)return t
return $.mg()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bb))return!1
return this.a===b.a},
h:function(a){var u=H.c([],[P.k]),t=this.a
if((t&$.aR().a)!==0)u.push("Pos")
if((t&$.aQ().a)!==0)u.push("Norm")
if((t&$.aP().a)!==0)u.push("Binm")
if((t&$.be().a)!==0)u.push("Txt2D")
if((t&$.bf().a)!==0)u.push("TxtCube")
if((t&$.cA().a)!==0)u.push("Clr3")
if((t&$.cB().a)!==0)u.push("Clr4")
if((t&$.bH().a)!==0)u.push("Weight")
if((t&$.aO().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.k(u,"|")}}
D.eP.prototype={}
D.bl.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.c([],[{func:1,ret:-1,args:[D.V]}]):u).push(b)},
M:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.W(s,b)
if(s===!0){s=t.a
u=(s&&C.b).M(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.W(s,b)
if(s===!0){s=t.b
u=(s&&C.b).M(s,b)||u}return u},
E:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.b.H(P.l3(u,!0,{func:1,ret:-1,args:[D.V]}),new D.fc(q))
u=r.b
if(u!=null){r.b=H.c([],[{func:1,ret:-1,args:[D.V]}])
C.b.H(u,new D.fd(q))}return!0},
ae:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}}}
D.fc.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fd.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.V.prototype={}
D.bn.prototype={}
D.bo.prototype={}
D.y.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cH.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cH))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.cW.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cW))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.fz.prototype={
hM:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
hI:function(a){this.c=a.b
this.d.M(0,a.a)
return!1}}
X.d_.prototype={}
X.fI.prototype={
aS:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.p()
u=b.b
t=q.ch
if(typeof u!=="number")return u.p()
s=new V.a4(o.a+n*m,o.b+u*t)
t=q.a.gaM()
r=new X.aF(a,V.b5(),q.x,t,s)
r.b=!0
q.z=new P.a6(p,!1)
q.x=s
return r},
cc:function(a,b){this.r=a.a
return!1},
b5:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.e0()
if(typeof u!=="number")return u.af()
this.r=(u&~t)>>>0
return!1},
b4:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.aS(a,b))
return!0},
hN:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaM()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.p()
q=a.b
p=o.cy
if(typeof q!=="number")return q.p()
t=new X.bX(new V.F(s*r,q*p),u,t)
t.b=!0
n.E(t)
return!0},
fc:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.d_(c,r.a.gaM(),b)
s.b=!0
t.E(s)
r.y=new P.a6(u,!1)
r.x=V.b5()}}
X.ae.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ae))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aF.prototype={}
X.h9.prototype={
bz:function(a,b,c){var u=this,t=new P.a6(Date.now(),!1),s=u.a.gaM(),r=new X.aF(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cc:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.bz(a,b,!0))
return!0},
b5:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.e0()
if(typeof t!=="number")return t.af()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.bz(a,b,!0))
return!0},
b4:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.bz(a,b,!1))
return!0},
hO:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaM()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.p()
r=a.b
q=p.ch
if(typeof r!=="number")return r.p()
u=new X.bX(new V.F(t*s,r*q),u,b)
u.b=!0
o.E(u)
return!0},
gd6:function(){var u=this.b
return u==null?this.b=D.H():u},
gbo:function(){var u=this.c
return u==null?this.c=D.H():u},
gdv:function(){var u=this.d
return u==null?this.d=D.H():u}}
X.bX.prototype={}
X.hp.prototype={}
X.dq.prototype={}
X.i5.prototype={
aS:function(a,b){var u=this,t=new P.a6(Date.now(),!1),s=a.length>0?a[0]:V.b5(),r=u.a.gaM(),q=new X.dq(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hL:function(a){var u=this.b
if(u==null)return!1
u.E(this.aS(a,!0))
return!0},
hJ:function(a){var u=this.c
if(u==null)return!1
u.E(this.aS(a,!0))
return!0},
hK:function(a){var u=this.d
if(u==null)return!1
u.E(this.aS(a,!1))
return!0}}
X.dw.prototype={
gaM:function(){var u=this.a,t=C.m.gd4(u).c
t.toString
u=C.m.gd4(u).d
u.toString
return V.lf(0,0,t,u)},
cG:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cW(u,new X.ae(t,a.altKey,a.shiftKey))},
aJ:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ae(t,a.altKey,a.shiftKey)},
bO:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ae(t,a.altKey,a.shiftKey)},
ax:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.L()
u=t.top
if(typeof r!=="number")return r.L()
return new V.a4(s-q,r-u)},
aT:function(a){return new V.F(a.movementX,a.movementY)},
bK:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a4])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=C.d.ai(r.pageX)
C.d.ai(r.pageY)
p=o.left
C.d.ai(r.pageX)
n.push(new V.a4(q-p,C.d.ai(r.pageY)-o.top))}return n},
av:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cH(u,new X.ae(t,a.altKey,a.shiftKey))},
bB:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.L()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.L()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
f6:function(a){this.f=!0},
eV:function(a){this.f=!1},
f0:function(a){if(this.f&&this.bB(a))a.preventDefault()},
fa:function(a){var u
if(!this.f)return
u=this.cG(a)
this.b.hM(u)},
f8:function(a){var u
if(!this.f)return
u=this.cG(a)
this.b.hI(u)},
fe:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aJ(a)
if(r.x){u=r.av(a)
t=r.aT(a)
if(r.d.cc(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.av(a)
s=r.ax(a)
if(r.c.cc(u,s))a.preventDefault()},
fi:function(a){var u,t,s,r=this
r.aJ(a)
u=r.av(a)
if(r.x){t=r.aT(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(r.r)return
s=r.ax(a)
if(r.c.b5(u,s))a.preventDefault()},
f4:function(a){var u,t,s,r=this
if(!r.bB(a)){r.aJ(a)
u=r.av(a)
if(r.x){t=r.aT(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(r.r)return
s=r.ax(a)
if(r.c.b5(u,s))a.preventDefault()}},
fg:function(a){var u,t,s,r=this
r.aJ(a)
u=r.av(a)
if(r.x){t=r.aT(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(r.r)return
s=r.ax(a)
if(r.c.b4(u,s))a.preventDefault()},
f2:function(a){var u,t,s,r=this
if(!r.bB(a)){r.aJ(a)
u=r.av(a)
if(r.x){t=r.aT(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(r.r)return
s=r.ax(a)
if(r.c.b4(u,s))a.preventDefault()}},
fk:function(a){var u,t,s=this
s.aJ(a)
u=new V.F((a&&C.C).ghf(a),C.C.ghg(a)).u(0,180)
if(s.x){if(s.d.hN(u))a.preventDefault()
return}if(s.r)return
t=s.ax(a)
if(s.c.hO(u,t))a.preventDefault()},
fm:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.av(s.y)
t=s.ax(s.y)
s.d.fc(u,t,r)}},
fC:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bO(a)
u=t.bK(a)
if(t.e.hL(u))a.preventDefault()},
fw:function(a){var u
this.bO(a)
u=this.bK(a)
if(this.e.hJ(u))a.preventDefault()},
fA:function(a){var u
this.bO(a)
u=this.bK(a)
if(this.e.hK(u))a.preventDefault()}}
D.f2.prototype={$ia7:1}
D.a7.prototype={}
D.cX.prototype={
a7:function(a){var u=this.x
if(u!=null)u.E(a)},
cN:function(a){var u=this.y
if(u!=null)u.E(a)},
fb:function(){return this.cN(null)},
fp:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(s==null||this.ef(s))return!1}return!0},
eP:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcM(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q instanceof D.bq)this.f.push(q)
p=q.Q
if(p==null){p=new D.bl()
p.d=0
q.Q=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}u=new D.bn()
u.b=!0
this.a7(u)},
fu:function(a,b){var u,t,s
for(u=b.gT(b),t=this.gcM();u.A();){s=u.gK(u)
C.b.M(this.e,s)
s.gw().M(0,t)}u=new D.bo()
u.b=!0
this.a7(u)},
ef:function(a){var u=C.b.W(this.f,a)
return u},
$ai:function(){return[D.a7]},
$aaU:function(){return[D.a7]}}
D.bq.prototype={
a7:function(a){var u=this.Q
if(u!=null)u.E(a)},
eh:function(){return this.a7(null)},
gag:function(){return 4},
$ia7:1}
D.hO.prototype={$ia7:1}
V.U.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
V.am.prototype={
q:function(a,b){var u,t,s=this
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
return"["+V.C(u.a,3,0)+", "+V.C(u.b,3,0)+", "+V.C(u.c,3,0)+", "+V.C(u.d,3,0)+"]"}}
V.fb.prototype={}
V.h1.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.h1))return!1
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
h:function(a){var u,t,s,r,q=this,p=[P.M],o=V.bF(H.c([q.a,q.d,q.r],p),3,0),n=V.bF(H.c([q.b,q.e,q.x],p),3,0),m=V.bF(H.c([q.c,q.f,q.y],p),3,0)
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
V.aq.prototype={
at:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.M])
return t},
hu:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.z().a)return V.b1()
u=1/b1
t=-n
s=-a0
return V.ar((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
p:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ar(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
cj:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.T(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aq))return!1
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
h:function(a){return this.O()},
F:function(a){var u,t,s,r,q,p=this,o=[P.M],n=V.bF(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bF(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bF(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bF(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
O:function(){return this.F("")}}
V.a4.prototype={
L:function(a,b){return new V.a4(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}}
V.T.prototype={
B:function(a,b){return new V.T(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a,b){return new V.T(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){return new V.T(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
V.b6.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b6))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.C(u.a,3,0)+", "+V.C(u.b,3,0)+", "+V.C(u.c,3,0)+", "+V.C(u.d,3,0)+"]"}}
V.db.prototype={
ga8:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
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
return"["+V.C(u.a,3,0)+", "+V.C(u.b,3,0)+", "+V.C(u.c,3,0)+", "+V.C(u.d,3,0)+"]"}}
V.F.prototype={
b0:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.v(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.v(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.p()
u=this.b
if(typeof u!=="number")return u.p()
return new V.F(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.z().a){u=$.lr
return u==null?$.lr=new V.F(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.F(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.F))return!1
u=b.a
t=this.a
s=$.z()
s.toString
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.v(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.v(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}}
V.A.prototype={
b0:function(a){return Math.sqrt(this.C(this))},
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c8:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.A(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
ay:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.A(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.A(this.a+b.a,this.b+b.b,this.c+b.c)},
S:function(a){return new V.A(-this.a,-this.b,-this.c)},
p:function(a,b){return new V.A(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if(Math.abs(b-0)<$.z().a)return V.cd()
return new V.A(this.a/b,this.b/b,this.c/b)},
du:function(){var u=$.z().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.A))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
V.ce.prototype={
b0:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ce))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.C(u.a,3,0)+", "+V.C(u.b,3,0)+", "+V.C(u.c,3,0)+", "+V.C(u.d,3,0)+"]"}}
U.eR.prototype={
bu:function(a){var u=V.k5(a,this.c,this.b)
return u},
gw:function(){var u=this.y
return u==null?this.y=D.H():u},
G:function(a){var u=this.y
if(u!=null)u.E(a)},
scl:function(a,b){},
sc9:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.z().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bu(u)}s=new D.y("maximumLocation",s,t.b)
s.b=!0
t.G(s)}},
scb:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.z().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bu(u)}s=new D.y("minimumLocation",s,t.c)
s.b=!0
t.G(s)}},
sY:function(a,b){var u,t=this
b=t.bu(b)
u=t.d
if(!(Math.abs(u-b)<$.z().a)){t.d=b
u=new D.y("location",u,b)
u.b=!0
t.G(u)}},
sca:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.z().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.y("maximumVelocity",r,a)
r.b=!0
s.G(r)}},
sU:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.z().a)){u.f=a
t=new D.y("velocity",t,a)
t.b=!0
u.G(t)}},
sbY:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.z().a)){this.x=a
u=new D.y("dampening",u,a)
u.b=!0
this.G(u)}},
aj:function(a,b){var u,t,s,r=this,q=r.f,p=$.z().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sY(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.z().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sU(u)}}}
U.cJ.prototype={
gw:function(){var u=this.b
return u==null?this.b=D.H():u},
ak:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cJ))return!1
return J.D(this.a,b.a)},
h:function(a){return"Constant: "+this.a.F("          ")}}
U.bP.prototype={
gw:function(){var u=this.e
return u==null?this.e=D.H():u},
G:function(a){var u=this.e
if(u!=null)u.E(a)},
a3:function(){return this.G(null)},
ej:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaI(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.gw()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.bn()
u.b=!0
this.G(u)},
fs:function(a,b){var u,t
for(u=b.gT(b),t=this.gaI();u.A();)u.gK(u).gw().M(0,t)
u=new D.bo()
u.b=!0
this.G(u)},
ak:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.R()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a2(r,r.length),u=null;r.A();){q=r.d
if(q!=null){t=q.ak(0,b,c)
if(t!=null)u=u==null?t:t.p(0,u)}}s.f=u==null?V.b1():u
r=s.e
if(r!=null)r.ae(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bP))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.D(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$ai:function(){return[U.a8]},
$aaU:function(){return[U.a8]},
$ia8:1}
U.a8.prototype={}
U.dc.prototype={
gw:function(){var u=this.y
return u==null?this.y=D.H():u},
G:function(a){var u=this.y
if(u!=null)u.E(a)},
sdY:function(a){var u
a=V.k5(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.z().a)){this.a=a
u=new D.y("yaw",u,a)
u.b=!0
this.G(u)}},
sdJ:function(a,b){var u
b=V.k5(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.z().a)){this.b=b
u=new D.y("pitch",u,b)
u.b=!0
this.G(u)}},
sdQ:function(a){var u
a=V.k5(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.z().a)){this.c=a
u=new D.y("roll",u,a)
u.b=!0
this.G(u)}},
ak:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.sdY(u.a+u.d*b.y)
u.sdJ(0,u.b+u.e*b.y)
u.sdQ(u.c+u.f*b.y)
u.x=V.l7(u.c).p(0,V.l6(u.b)).p(0,V.l5(u.a))
t=u.y
if(t!=null)t.ae(0)}return u.x},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dc))return!1
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
return"Rotater: ["+V.C(u.a,3,0)+", "+V.C(u.b,3,0)+", "+V.C(u.c,3,0)+"], ["+V.C(u.d,3,0)+", "+V.C(u.e,3,0)+", "+V.C(u.f,3,0)+"]"}}
U.dx.prototype={
gw:function(){var u=this.cy
return u==null?this.cy=D.H():u},
G:function(a){var u=this.cy
if(u!=null)u.E(a)},
a3:function(){return this.G(null)},
aW:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gd6().n(0,u.gbC())
u.a.c.gdv().n(0,u.gbE())
u.a.c.gbo().n(0,u.gbG())
return!0},
bD:function(a){var u=this
if(!J.D(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bF:function(a){var u,t,s,r,q,p,o,n=this
H.q(a,"$iaF")
if(!n.y)return
if(n.x){u=a.d.L(0,a.y)
u=new V.F(u.a,u.b)
u=u.C(u)
t=n.r
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.L(0,a.y)
u=new V.F(t.a,t.b).p(0,2).u(0,u.ga8())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.p()
s=n.e
if(typeof s!=="number")return H.v(s)
t.sU(u*10*s)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=new V.F(s.a,s.b).p(0,2).u(0,u.ga8())
s=n.b
q=r.a
if(typeof q!=="number")return q.S()
p=n.e
if(typeof p!=="number")return H.v(p)
o=n.z
if(typeof o!=="number")return H.v(o)
s.sY(0,-q*p+o)
n.b.sU(0)
t=t.L(0,a.z)
n.Q=new V.F(t.a,t.b).p(0,2).u(0,u.ga8())}n.a3()},
bH:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.C(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.p()
s=r.e
if(typeof s!=="number")return H.v(s)
u.sU(t*10*s)
r.a3()}},
ak:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.R()
if(s<r){t.ch=r
u=b.y
t.b.aj(0,u)
t.cx=V.l7(t.b.d)}return t.cx},
$ia8:1}
U.dy.prototype={
gw:function(){var u=this.fx
return u==null?this.fx=D.H():u},
G:function(a){var u=this.fx
if(u!=null)u.E(a)},
a3:function(){return this.G(null)},
aW:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gd6().n(0,s.gbC())
s.a.c.gdv().n(0,s.gbE())
s.a.c.gbo().n(0,s.gbG())
u=s.a.d
t=u.f
u=t==null?u.f=D.H():t
u.n(0,s.geG())
u=s.a.d
t=u.d
u=t==null?u.d=D.H():t
u.n(0,s.geI())
u=s.a.e
t=u.b
u=t==null?u.b=D.H():t
u.n(0,s.gfW())
u=s.a.e
t=u.d
u=t==null?u.d=D.H():t
u.n(0,s.gfU())
u=s.a.e
t=u.c
u=t==null?u.c=D.H():t
u.n(0,s.gfS())
return!0},
ao:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.S()
u=-u}if(this.r){if(typeof t!=="number")return t.S()
t=-t}return new V.F(u,t)},
bD:function(a){var u=this
H.q(a,"$iaF")
if(!J.D(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bF:function(a){var u,t,s,r,q,p,o,n=this
H.q(a,"$iaF")
if(!n.cx)return
if(n.ch){u=a.d.L(0,a.y)
u=new V.F(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.L(0,a.y)
u=n.ao(new V.F(t.a,t.b).p(0,2).u(0,u.ga8()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.v(s)
t.sU(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.v(t)
s.sU(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.ao(new V.F(s.a,s.b).p(0,2).u(0,u.ga8()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sY(0,-p*q+s)
n.b.sU(0)
n.c.sU(0)
t=t.L(0,a.z)
n.dx=n.ao(new V.F(t.a,t.b).p(0,2).u(0,u.ga8()))}n.a3()},
bH:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.v(s)
u.sU(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.v(u)
s.sU(-t*10*u)
r.a3()}},
eH:function(a){var u=this
if(H.q(a,"$id_").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eJ:function(a){var u,t,s,r,q,p,o,n=this
H.q(a,"$iaF")
if(!J.D(n.d,a.x.b))return
u=a.c
t=a.d
s=t.L(0,a.y)
r=n.ao(new V.F(s.a,s.b).p(0,2).u(0,u.ga8()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sY(0,-p*q+s)
n.b.sU(0)
n.c.sU(0)
t=t.L(0,a.z)
n.dx=n.ao(new V.F(t.a,t.b).p(0,2).u(0,u.ga8()))
n.a3()},
fX:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fV:function(a){var u,t,s,r,q,p,o,n=this
H.q(a,"$idq")
if(!n.cx)return
if(n.ch){u=a.d.L(0,a.y)
u=new V.F(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.L(0,a.y)
u=n.ao(new V.F(t.a,t.b).p(0,2).u(0,u.ga8()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.v(s)
t.sU(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.v(t)
s.sU(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.ao(new V.F(s.a,s.b).p(0,2).u(0,u.ga8()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sY(0,-p*q+s)
n.b.sU(0)
n.c.sU(0)
t=t.L(0,a.z)
n.dx=n.ao(new V.F(t.a,t.b).p(0,2).u(0,u.ga8()))}n.a3()},
fT:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.v(s)
u.sU(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.v(u)
s.sU(-t*10*u)
r.a3()}},
ak:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.R()
if(s<r){t.dy=r
u=b.y
t.c.aj(0,u)
t.b.aj(0,u)
t.fr=V.l5(t.b.d).p(0,V.l6(t.c.d))}return t.fr},
$ia8:1}
U.dz.prototype={
gw:function(){var u=this.r
return u==null?this.r=D.H():u},
G:function(a){var u=this.r
if(u!=null)u.E(a)},
aW:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.H():t
t=r.geL()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.H():s).n(0,t)
return!0},
eM:function(a){var u,t,s,r,q=this
if(!J.D(q.b,q.a.b.c))return
H.q(a,"$ibX")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.p()
r=u+t*s
if(u!==r){q.d=r
u=new D.y("zoom",u,r)
u.b=!0
q.G(u)}},
ak:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ko(u,u,u,1)}return t.f},
$ia8:1}
M.cP.prototype={
au:function(a){var u=this.y
if(u!=null)u.E(a)},
ek:function(){return this.au(null)},
eX:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gan(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bl()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.bn()
u.b=!0
this.au(u)},
eZ:function(a,b){var u,t
for(u=b.gT(b),t=this.gan();u.A();)u.gK(u).gw().M(0,t)
u=new D.bo()
u.b=!0
this.au(u)},
sb6:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gw().M(0,t.gan())
u=t.d
t.d=a
if(a!=null)a.gw().n(0,t.gan())
s=new D.y("technique",u,t.d)
s.b=!0
t.au(s)}},
gw:function(){var u=this.y
return u==null?this.y=D.H():u},
aP:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.dM(a1.d)
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
if(typeof s!=="number")return H.v(s)
o=C.d.ai(p*s)
p=q.b
if(typeof r!=="number")return H.v(r)
n=C.d.ai(p*r)
p=C.d.ai(q.c*s)
a2.c=p
q=C.d.ai(q.d*r)
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
i=V.ar(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.dL(i)
t=$.la
if(t==null){t=V.mU()
q=$.lu
if(q==null)q=$.lu=new V.A(0,1,0)
p=$.ls
if(p==null)p=$.ls=new V.A(0,0,-1)
h=p.u(0,Math.sqrt(p.C(p)))
q=q.ay(h)
g=q.u(0,Math.sqrt(q.C(q)))
f=h.ay(g)
e=new V.A(t.a,t.b,t.c)
d=g.S(0).C(e)
c=f.S(0).C(e)
b=h.S(0).C(e)
t=V.ar(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.la=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.ak(0,a2,u)
if(a0!=null)a=a0.p(0,a)}a2.db.dL(a)
u=a1.d
if(u!=null)u.aj(0,a2)
for(u=a1.e.a,u=new J.a2(u,u.length);u.A();)u.d.aj(0,a2)
for(u=a1.e.a,u=new J.a2(u,u.length);u.A();)u.d.aP(a2)
a1.b.toString
a2.cy.cd()
a2.db.cd()
a1.c.toString
a2.dK()}}
A.cE.prototype={}
A.eF.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hi:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
hh:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.Z.prototype={
gal:function(a){var u=this.a?1:0
return u|0|0},
h:function(a){var u=this.a?1:0
return""+(u|0|0)},
q:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.Z))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fP.prototype={
e9:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
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
A.o1(c3,u)
A.o3(c3,u)
A.o2(c3,u)
A.o5(c3,u)
A.o6(c3,u)
A.o4(c3,u)
A.o7(c3,u)
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
m=A.o0(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cH(n,35633)
b8.f=b8.cH(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.t(P.u("Failed to link shader: "+H.e(l)))}b8.fO()
b8.fQ()
b8.Q=b8.x.i(0,"posAttr")
b8.cx=b8.x.i(0,"normAttr")
b8.ch=b8.x.i(0,"binmAttr")
b8.cy=b8.x.i(0,"txt2DAttr")
b8.db=b8.x.i(0,"txtCubeAttr")
b8.dx=b8.x.i(0,"bendAttr")
if(c3.dx)b8.id=H.q(b8.y.X(0,"invViewMat"),"$iaf")
if(t)b8.dy=H.q(b8.y.X(0,"objMat"),"$iaf")
if(r)b8.fr=H.q(b8.y.X(0,"viewObjMat"),"$iaf")
b8.fy=H.q(b8.y.X(0,"projViewObjMat"),"$iaf")
if(c3.ry)b8.k1=H.q(b8.y.X(0,"txt2DMat"),"$ica")
if(c3.x1)b8.k2=H.q(b8.y.X(0,"txtCubeMat"),"$iaf")
if(c3.x2)b8.k3=H.q(b8.y.X(0,"colorMat"),"$iaf")
b8.r1=H.c([],[A.af])
t=c3.y2
if(t>0){b8.k4=b8.y.X(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.i(0,q)
if(j==null)H.t(P.u(c0+q+c1))
s.push(H.q(j,"$iaf"))}}if(c3.a.a)b8.r2=H.q(b8.y.X(0,"emissionClr"),"$iL")
if(c3.b.a)b8.x1=H.q(b8.y.X(0,"ambientClr"),"$iL")
if(c3.c.a)b8.y2=H.q(b8.y.X(0,"diffuseClr"),"$iL")
if(c3.d.a)b8.dc=H.q(b8.y.X(0,"invDiffuseClr"),"$iL")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.de=H.q(b8.y.X(0,"shininess"),"$iX")
if(t)b8.dd=H.q(b8.y.X(0,"specularClr"),"$iL")}if(c3.cy){b8.df=H.q(b8.y.X(0,"envSampler"),"$ibx")
if(c3.r.a)b8.dg=H.q(b8.y.X(0,"reflectClr"),"$iL")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.dh=H.q(b8.y.X(0,"refraction"),"$iX")
if(t)b8.di=H.q(b8.y.X(0,"refractClr"),"$iL")}}if(c3.y.a)b8.dj=H.q(b8.y.X(0,"alpha"),"$iX")
t=P.w
s=[t,A.dt]
b8.bZ=new H.N(s)
b8.c_=new H.N([t,[P.n,A.c9]])
b8.c0=new H.N(s)
b8.c1=new H.N([t,[P.n,A.cb]])
b8.c2=new H.N(s)
b8.c3=new H.N([t,[P.n,A.cc]])
if(c3.id){for(t=c3.z,s=t.length,r=[A.c9],i=0;i<t.length;t.length===s||(0,H.o)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.af()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.i(0,d)
if(j==null)H.t(P.u(c0+d+c1))
H.q(j,"$iL")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.i(0,d)
if(c==null)H.t(P.u(c0+d+c1))
H.q(c,"$iL")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.i(0,d)
if(b==null)H.t(P.u(c0+d+c1))
H.q(b,"$iL")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.i(0,d)
if(j==null)H.t(P.u(c0+d+c1))
H.q(j,"$iL")
o=b8.y
d=f+"s["+k+"].color"
c=o.i(0,d)
if(c==null)H.t(P.u(c0+d+c1))
H.q(c,"$iL")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.i(0,o)
if(b==null)H.t(P.u(c0+o+c1))
H.q(b,"$ibw")
a2=b}else a2=b9
e.push(new A.c9(a1,a0,a,j,c,a2))}b8.c_.m(0,g,e)
q=b8.bZ
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.t(P.u(c0+o+c1))
q.m(0,g,j)}for(t=c3.Q,s=t.length,r=[A.cb],i=0;i<t.length;t.length===s||(0,H.o)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.i(0,o)
if(j==null)H.t(P.u(c0+o+c1))
H.q(j,"$iL")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.i(0,o)
if(c==null)H.t(P.u(c0+o+c1))
H.q(c,"$iL")
p=b8.y
o=f+"s["+k+"].color"
b=p.i(0,o)
if(b==null)H.t(P.u(c0+o+c1))
H.q(b,"$iL")
if(typeof g!=="number")return g.af()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.i(0,o)
if(a3==null)H.t(P.u(c0+o+c1))
H.q(a3,"$ica")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.i(0,o)
if(a3==null)H.t(P.u(c0+o+c1))
H.q(a3,"$ibx")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.i(0,o)
if(a3==null)H.t(P.u(c0+o+c1))
H.q(a3,"$ibx")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.i(0,o)
if(a5==null)H.t(P.u(c0+o+c1))
H.q(a5,"$ic8")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.i(0,o)
if(a3==null)H.t(P.u(c0+o+c1))
H.q(a3,"$iX")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.i(0,o)
if(a5==null)H.t(P.u(c0+o+c1))
H.q(a5,"$iX")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.i(0,o)
if(a8==null)H.t(P.u(c0+o+c1))
H.q(a8,"$iX")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}e.push(new A.cb(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.c1.m(0,g,e)
q=b8.c0
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.t(P.u(c0+o+c1))
q.m(0,g,j)}for(t=c3.ch,s=t.length,r=[A.cc],i=0;i<t.length;t.length===s||(0,H.o)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.i(0,o)
if(j==null)H.t(P.u(c0+o+c1))
H.q(j,"$iL")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.i(0,o)
if(c==null)H.t(P.u(c0+o+c1))
H.q(c,"$iL")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.i(0,o)
if(b==null)H.t(P.u(c0+o+c1))
H.q(b,"$iL")
p=b8.y
o=f+"s["+k+"].color"
a3=p.i(0,o)
if(a3==null)H.t(P.u(c0+o+c1))
H.q(a3,"$iL")
if(typeof g!=="number")return g.af()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.i(0,o)
if(a5==null)H.t(P.u(c0+o+c1))
H.q(a5,"$iL")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.i(0,o)
if(a8==null)H.t(P.u(c0+o+c1))
H.q(a8,"$iL")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.i(0,o)
if(b2==null)H.t(P.u(c0+o+c1))
H.q(b2,"$iX")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.i(0,o)
if(b3==null)H.t(P.u(c0+o+c1))
H.q(b3,"$iX")
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
H.q(a5,"$ic8")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.i(0,d)
if(a5==null)H.t(P.u(c0+d+c1))
H.q(a5,"$iX")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.i(0,d)
if(a8==null)H.t(P.u(c0+d+c1))
H.q(a8,"$iX")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.i(0,d)
if(a5==null)H.t(P.u(c0+d+c1))
H.q(a5,"$iX")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.i(0,d)
if(a8==null)H.t(P.u(c0+d+c1))
H.q(a8,"$iX")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.i(0,d)
if(b2==null)H.t(P.u(c0+d+c1))
H.q(b2,"$iX")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.i(0,d)
if(a5==null)H.t(P.u(c0+d+c1))
H.q(a5,"$ibw")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.i(0,o)
if(a5==null)H.t(P.u(c0+o+c1))
H.q(a5,"$ibw")
a6=a5}else a6=b9
e.push(new A.cc(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.c3.m(0,g,e)
q=b8.c2
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.t(P.u(c0+o+c1))
q.m(0,g,j)}}},
fM:function(a,b){}}
A.cM.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.d9.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.df.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.fS.prototype={
h:function(a){return this.aZ}}
A.c9.prototype={}
A.cb.prototype={}
A.cc.prototype={}
A.dd.prototype={
ec:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cH:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.u("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fO:function(){var u,t,s,r=this,q=H.c([],[A.cE]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cE(p,t.name,s))}r.x=new A.eF(q)},
fQ:function(){var u,t,s,r=this,q=H.c([],[A.ds]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.he(t.type,t.size,t.name,s))}r.y=new A.ii(q)},
aH:function(a,b,c){var u=this.a
if(a===1)return new A.dt(u,b,c)
else return A.kr(u,this.r,b,a,c)},
eB:function(a,b,c){var u=this.a
if(a===1)return new A.bw(u,b,c)
else return A.kr(u,this.r,b,a,c)},
eC:function(a,b,c){var u=this.a
if(a===1)return new A.bx(u,b,c)
else return A.kr(u,this.r,b,a,c)},
bd:function(a,b){return new P.dK(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
he:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aH(b,c,d)
case 5121:return u.aH(b,c,d)
case 5122:return u.aH(b,c,d)
case 5123:return u.aH(b,c,d)
case 5124:return u.aH(b,c,d)
case 5125:return u.aH(b,c,d)
case 5126:return new A.X(u.a,c,d)
case 35664:return new A.id(u.a,c,d)
case 35665:return new A.L(u.a,c,d)
case 35666:return new A.c8(u.a,c,d)
case 35667:return new A.ie(u.a,c,d)
case 35668:return new A.ig(u.a,c,d)
case 35669:return new A.ih(u.a,c,d)
case 35674:return new A.ij(u.a,c,d)
case 35675:return new A.ca(u.a,c,d)
case 35676:return new A.af(u.a,c,d)
case 35678:return u.eB(b,c,d)
case 35680:return u.eC(b,c,d)
case 35670:throw H.d(u.bd("BOOL",c))
case 35671:throw H.d(u.bd("BOOL_VEC2",c))
case 35672:throw H.d(u.bd("BOOL_VEC3",c))
case 35673:throw H.d(u.bd("BOOL_VEC4",c))
default:throw H.d(P.u("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.ds.prototype={}
A.ii.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
X:function(a,b){var u=this.i(0,b)
if(u==null)throw H.d(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.O()},
O:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.dt.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.ie.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.ig.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.ih.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.ic.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.X.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.id.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.L.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.c8.prototype={
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.ij.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.ca.prototype={
am:function(a){var u=new Float32Array(H.ct(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.af.prototype={
am:function(a){var u=new Float32Array(H.ct(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bw.prototype={
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bx.prototype={
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.ju.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c8(s.b,b).c8(s.d.c8(s.c,b),c)
a.sY(0,new V.T(r.a,r.b,r.c))
a.sdS(r.u(0,Math.sqrt(r.C(r))))
s=1-b
u=1-c
a.sd1(new V.b6(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.jE.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.jG.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.v(p)
s=-s*p
u=r*p
a.sY(0,new V.T(s,u,q))
u=new V.A(s,u,q)
a.sdS(u.u(0,Math.sqrt(u.C(u))))
a.sd1(new V.b6(1-c,2+c,-1,-1))}}
F.jH.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.jI.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.k_.prototype={
$2:function(a,b){return 0}}
F.k0.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.v(s)
u=a.f
t=new V.A(u.a,u.b,u.c)
s=t.u(0,Math.sqrt(t.C(t))).p(0,this.b+s)
a.sY(0,new V.T(s.a,s.b,s.c))}}
F.k3.prototype={
$1:function(a){return new V.T(Math.cos(a),Math.sin(a),0)}}
F.jQ.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.T(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.jF.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.kO(n.$1(o),m)
m=J.kO(n.$1(o+3.141592653589793/p.c),m).L(0,l)
m=new V.A(m.a,m.b,m.c)
u=m.u(0,Math.sqrt(m.C(m)))
n=$.lt
if(n==null){n=new V.A(1,0,0)
$.lt=n
t=n}else t=n
if(!J.D(u,t)){n=$.lv
if(n==null){n=new V.A(0,0,1)
$.lv=n
t=n}else t=n}n=u.ay(t)
s=n.u(0,Math.sqrt(n.C(n)))
n=s.ay(u)
t=n.u(0,Math.sqrt(n.C(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.p(0,n*m)
m=s.p(0,q*m)
a.sY(0,l.B(0,new V.T(n.a-m.a,n.b-m.b,n.c-m.c)))}}
F.aW.prototype={
aX:function(){var u=this
if(!u.gaY()){C.b.M(u.a.a.d.b,u)
u.a.a.Z()}u.bL()
u.bM()
u.fF()},
bP:function(a){this.a=a
a.d.b.push(this)},
bQ:function(a){this.b=a
a.d.c.push(this)},
fN:function(a){this.c=a
a.d.d.push(this)},
bL:function(){var u=this.a
if(u!=null){C.b.M(u.d.b,this)
this.a=null}},
bM:function(){var u=this.b
if(u!=null){C.b.M(u.d.c,this)
this.b=null}},
fF:function(){var u=this.c
if(u!=null){C.b.M(u.d.d,this)
this.c=null}},
gaY:function(){return this.a==null||this.b==null||this.c==null},
ew:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cd()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.du())return
return s.u(0,Math.sqrt(s.C(s)))},
ey:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.L(0,q)
r=new V.A(r.a,r.b,r.c)
s=r.u(0,Math.sqrt(r.C(r)))
r=t.L(0,q)
r=new V.A(r.a,r.b,r.c)
r=s.ay(r.u(0,Math.sqrt(r.C(r))))
return r.u(0,Math.sqrt(r.C(r)))},
bU:function(){var u,t=this
if(t.d!=null)return!0
u=t.ew()
if(u==null){u=t.ey()
if(u==null)return!1}t.d=u
t.a.a.Z()
return!0},
ev:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cd()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.du())return
return s.u(0,Math.sqrt(s.C(s)))},
ex:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.z().a){l=d.L(0,g)
l=new V.A(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.S(0)}else{p=(l-u.b)/r
l=d.L(0,g).p(0,p).B(0,g).L(0,j)
l=new V.A(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.S(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.C(l)))
l=o.ay(q)
l=l.u(0,Math.sqrt(l.C(l))).ay(o)
q=l.u(0,Math.sqrt(l.C(l)))}return q},
bS:function(){var u,t=this
if(t.e!=null)return!0
u=t.ev()
if(u==null){u=t.ex()
if(u==null)return!1}t.e=u
t.a.a.Z()
return!0},
gh8:function(a){var u=this
if(J.D(u.a,u.b))return!0
if(J.D(u.b,u.c))return!0
if(J.D(u.c,u.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.O()},
F:function(a){var u,t,s=this
if(s.gaY())return a+"disposed"
u=a+C.a.ad(J.a1(s.a.e),0)+", "+C.a.ad(J.a1(s.b.e),0)+", "+C.a.ad(J.a1(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.h(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.h(0)+"}"):u+"-}"},
O:function(){return this.F("")}}
F.fe.prototype={}
F.hL.prototype={
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
F.bT.prototype={
aX:function(){var u=this
if(!u.gaY()){C.b.M(u.a.a.c.b,u)
u.a.a.Z()}u.bL()
u.bM()},
bP:function(a){this.a=a
a.c.b.push(this)},
bQ:function(a){this.b=a
a.c.c.push(this)},
bL:function(){var u=this.a
if(u!=null){C.b.M(u.c.b,this)
this.a=null}},
bM:function(){var u=this.b
if(u!=null){C.b.M(u.c.c,this)
this.b=null}},
gaY:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.O()},
F:function(a){if(this.gaY())return a+"disposed"
return a+C.a.ad(J.a1(this.a.e),0)+", "+C.a.ad(J.a1(this.b.e),0)},
O:function(){return this.F("")}}
F.fB.prototype={}
F.ib.prototype={
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
F.c0.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.O()},
F:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.ad(J.a1(u.e),0)},
O:function(){return this.F("")}}
F.hD.prototype={
gw:function(){var u=this.e
return u==null?this.e=D.H():u},
b3:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.v()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){r=g[s]
h.a.n(0,r.hb())}h.a.v()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.B()
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
if(p!=null)p.E(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.v()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.mL(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.v()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.v()
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
F.bN(l,k,i)}g=h.e
if(g!=null)g.ae(0)},
ar:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ar()||!1
if(!t.a.ar())u=!1
s=t.e
if(s!=null)s.ae(0)
return u},
hy:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.cz(o,0)])
for(o=[F.ba];u.length!==0;){t=C.b.ghm(u)
C.b.dN(u,0)
if(t!=null){s=H.c([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.b(u,r)
q=u[r]
if(q!=null&&a.b2(0,t,q)){s.push(q)
C.b.dN(u,r)}}if(s.length>1)b.b3(s)}}p.a.v()
p.c.cg()
p.d.cg()
p.b.hS()
p.c.ci(new F.ib())
p.d.ci(new F.hL())
o=p.e
if(o!=null)o.ae(0)},
bR:function(){this.hy(new F.iE(),new F.hh())},
c4:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.c4()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.b(o,u)
t=o[u]
o=t.r
if(o!=null)t.sdw(new V.A(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.A(s,r,o).u(0,Math.sqrt(s*s+r*r+o*o))
if(!J.D(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.E(null)}}}}o=p.e
if(o!=null)o.ae(0)},
h6:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aR()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aQ().a)!==0)++s
if((t&$.aP().a)!==0)++s
if((t&$.be().a)!==0)++s
if((t&$.bf().a)!==0)++s
if((t&$.cA().a)!==0)++s
if((t&$.cB().a)!==0)++s
if((t&$.bH().a)!==0)++s
if((t&$.aO().a)!==0)++s
r=a4.gcp(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.c(u,[P.M])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.cF])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.h3(m)
k=l.gcp(l)
if(m>=t)return H.b(o,m)
o[m]=new Z.cF(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.b(i,j)
h=i[j].hx(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.b(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.ct(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cG(new Z.dB(a1,d),o,a4)
c.b=H.c([],[Z.bm])
if(a0.b.b.length!==0){b=H.c([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.v()
b.push(t.e)}a=Z.ku(u,34963,b)
c.b.push(new Z.bm(0,b.length,a))}if(a0.c.b.length!==0){b=H.c([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.v()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.v()
b.push(t.e)}a=Z.ku(u,34963,b)
c.b.push(new Z.bm(1,b.length,a))}if(a0.d.b.length!==0){b=H.c([],[P.w])
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
b.push(t.e)}a=Z.ku(u,34963,b)
c.b.push(new Z.bm(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.c([],[P.k])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.F(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.F(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.F(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.F(t))}return C.b.k(s,"\n")},
Z:function(){var u=this.e
if(u!=null)u.E(null)}}
F.hE.prototype={
h_:function(a){var u,t,s,r,q,p=H.c([],[F.aW]),o=a.length
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
p.push(F.bN(u,r,q))}}return p},
h0:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.c([],[F.aW])
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
h.push(F.bN(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bN(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bN(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.bN(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
ci:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.i(0,q)
for(o=q-1;o>=0;--o){n=r.d.i(0,o)
if(a.b2(0,p,n)){p.aX()
break}}}}},
cg:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.gh8(s)
if(t)s.aX()}},
ar:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].bU())s=!1
return s},
bT:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].bS())s=!1
return s},
c4:function(){var u,t,s,r,q,p
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
h:function(a){return this.O()},
F:function(a){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].F(a))
return C.b.k(r,"\n")},
O:function(){return this.F("")}}
F.hF.prototype={
gl:function(a){return this.b.length},
ci:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.i(0,q)
for(o=q-1;o>=0;--o){n=r.c.i(0,o)
if(a.b2(0,p,n)){p.aX()
break}}}}},
cg:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=J.D(s.a,s.b)
if(t)s.aX()}},
h:function(a){return this.O()},
F:function(a){var u,t,s=H.c([],[P.k]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].F(a+(""+u+". ")))}return C.b.k(s,"\n")},
O:function(){return this.F("")}}
F.hG.prototype={
gl:function(a){return this.b.length},
hS:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.M(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.E(null)}s=t.a
if(s!=null){C.b.M(s.b.b,t)
t.a=null}}}},
h:function(a){return this.O()},
F:function(a){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].F(a))
return C.b.k(r,"\n")},
O:function(){return this.F("")}}
F.ba.prototype={
bX:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.dA(u.cx,r,o,t,s,q,p,a,n)},
hb:function(){return this.bX(null)},
sY:function(a,b){var u
if(!J.D(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Z()}},
sdw:function(a){var u
a=a==null?null:a.u(0,Math.sqrt(a.C(a)))
if(!J.D(this.r,a)){this.r=a
u=this.a
if(u!=null)u.Z()}},
sdS:function(a){var u
if(!J.D(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Z()}},
sd1:function(a){var u
if(!J.D(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.Z()}},
hx:function(a){var u,t,s=this
if(a.q(0,$.aR())){u=s.f
t=[P.M]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.aQ())){u=s.r
t=[P.M]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.aP())){u=s.x
t=[P.M]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.be())){u=s.y
t=[P.M]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.q(0,$.bf())){u=s.z
t=[P.M]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.cA())){u=s.Q
t=[P.M]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.cB())){u=s.Q
t=[P.M]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.bH()))return H.c([s.ch],[P.M])
else if(a.q(0,$.aO())){u=s.cx
t=[P.M]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.M])},
bU:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cd()
t.d.H(0,new F.iJ(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ae(0)}return!0},
bS:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cd()
t.d.H(0,new F.iI(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ae(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.O()},
F:function(a){var u,t,s=this,r="-",q=H.c([],[P.k])
q.push(C.a.ad(J.a1(s.e),0))
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
O:function(){return this.F("")}}
F.iJ.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.iI.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.iz.prototype={
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
h1:function(a,b,c,d,e,f){var u=F.dA(a,null,b,c,d,e,f,null,0)
this.n(0,u)
return u},
gl:function(a){return this.c.length},
ar:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].bU()
return!0},
bT:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].bS()
return!0},
h7:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.D(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
h:function(a){return this.O()},
F:function(a){var u,t,s,r
this.v()
u=H.c([],[P.k])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r)u.push(t[r].F(a))
return C.b.k(u,"\n")},
O:function(){return this.F("")}}
F.iA.prototype={
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
C.b.H(u.c,new F.iB(u,b))
C.b.H(u.d,new F.iC(u,b))},
h:function(a){return this.O()},
O:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].F(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].F(""))
return C.b.k(r,"\n")}}
F.iB.prototype={
$1:function(a){if(!J.D(a.a,this.a))this.b.$1(a)}}
F.iC.prototype={
$1:function(a){var u=this.a
if(!J.D(a.a,u)&&!J.D(a.b,u))this.b.$1(a)}}
F.iD.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.b(t,u)
return t[u]}else{if(b<0)return H.b(t,b)
return t[b]}},
h:function(a){return this.O()},
O:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].F(""))
return C.b.k(r,"\n")}}
F.iF.prototype={}
F.iE.prototype={
b2:function(a,b,c){return J.D(b.f,c.f)}}
F.iG.prototype={}
F.hh.prototype={
b3:function(a){var u,t,s,r=V.cd()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)r=new V.A(r.a+s.a,r.b+s.b,r.c+s.c)}r=r.u(0,Math.sqrt(r.C(r)))
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t)a[t].sdw(r)
return}}
F.iH.prototype={
gl:function(a){return this.b.length},
h:function(a){return this.O()},
O:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].F(""))
return C.b.k(r,"\n")}}
O.d0.prototype={
gw:function(){var u=this.fr
return u==null?this.fr=D.H():u},
aa:function(a){var u=this.fr
if(u!=null)u.E(a)},
en:function(){return this.aa(null)},
cO:function(a){this.a=null
this.aa(a)},
fJ:function(){return this.cO(null)},
eR:function(a,b){var u=new D.bn()
u.b=!0
this.aa(u)},
eT:function(a,b){var u=new D.bo()
u.b=!0
this.aa(u)},
cE:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.w,h=new H.N([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=r.gag()
p=h.i(0,r.gag())
h.m(0,q,p==null?1:p)}o=H.c([],[A.cM])
h.H(0,new O.fW(j,o))
C.b.br(o,new O.fX())
n=new H.N([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=r.gag()
p=n.i(0,r.gag())
n.m(0,q,p==null?1:p)}m=H.c([],[A.d9])
n.H(0,new O.fY(j,m))
C.b.br(m,new O.fZ())
l=new H.N([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.o)(i),++s){r=i[s]
t=r.gag()
q=l.i(0,r.gag())
l.m(0,t,q==null?1:q)}k=H.c([],[A.df])
l.H(0,new O.h_(j,k))
C.b.br(k,new O.h0())
i=C.c.a4(j.e.a.length+3,4)
j.dy.e
return A.mS(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
eu:function(a,b){},
aj:function(a,b){var u,t,s
for(u=this.dx.a,u=new J.a2(u,u.length);u.A();){t=u.d
t.toString
s=$.h2
t.a=s==null?$.h2=new V.aq(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s
s=t.b
if(s!=null)t.a=s.ak(0,b,t)}},
hU:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.a
if(a6==null){a6=a5.cE()
u=a7.fr.i(0,a6.aZ)
if(u==null){u=A.mR(a6,a7.a)
t=u.b
if(t.length===0)H.t(P.u("May not cache a shader with no name."))
if(a7.fr.bf(0,t))H.t(P.u('Shader cache already contains a shader by the name "'+t+'".'))
a7.fr.m(0,t,u)}a6=a5.a=u
a8.e=null}s=a6.z
r=s.da
a6=a8.e
if(!(a6 instanceof Z.cG))a6=a8.e=null
if(a6==null||!a6.d.q(0,r)){a6=s.k3
if(a6)a8.d.ar()
q=s.k4
if(q){p=a8.d
o=p.e
if(o!=null)++o.d
p.d.bT()
p.a.bT()
p=p.e
if(p!=null)p.ae(0)}p=s.r2
if(p){o=a8.d
n=o.e
if(n!=null)++n.d
o.a.h7()
o=o.e
if(o!=null)o.ae(0)}m=a8.d.h6(new Z.iL(a7.a),r)
m.aO($.aR()).e=a5.a.Q.c
if(a6)m.aO($.aQ()).e=a5.a.cx.c
if(q)m.aO($.aP()).e=a5.a.ch.c
if(s.r1)m.aO($.be()).e=a5.a.cy.c
if(p)m.aO($.bf()).e=a5.a.db.c
if(s.rx)m.aO($.aO()).e=a5.a.dx.c
a8.e=m}l=H.c([],[T.i0])
a6=a5.a
q=a7.a
q.useProgram(a6.r)
a6.x.hi()
if(s.dy){a6=a5.a
p=a7.dx
p=p.ga5(p)
a6=a6.dy
a6.toString
a6.am(p.at(0,!0))}if(s.fr){a6=a5.a
p=a7.cx
if(p==null){p=a7.db
p=p.ga5(p)
o=a7.dx
o=a7.cx=p.p(0,o.ga5(o))
p=o}a6=a6.fr
a6.toString
a6.am(p.at(0,!0))}a6=a5.a
p=a7.ch
if(p==null){p=a7.ghQ()
o=a7.dx
o=a7.ch=p.p(0,o.ga5(o))
p=o}a6=a6.fy
a6.toString
a6.am(p.at(0,!0))
if(s.ry){a6=a5.a
p=a5.b
a6=a6.k1
a6.toString
a6.am(C.i.at(p,!0))}if(s.x1){a6=a5.a
p=a5.c
a6=a6.k2
a6.toString
a6.am(C.i.at(p,!0))}if(s.x2){a6=a5.a
p=a5.d
a6=a6.k3
a6.toString
a6.am(C.i.at(p,!0))}if(s.y2>0){k=a5.e.a.length
a6=a5.a.k4
a6.a.uniform1i(a6.d,k)
for(j=0;j<k;++j){a6=a5.a
p=a5.e.a
if(j>=p.length)return H.b(p,j)
p=p[j]
a6=a6.r1
if(j>=a6.length)return H.b(a6,j)
a6=a6[j]
i=new Float32Array(H.ct(p.at(0,!0)))
a6.a.uniformMatrix4fv(a6.d,!1,i)}}if(s.a.a){a6=a5.a
p=a5.f.f
a6=a6.r2
a6.a.uniform3f(a6.d,p.a,p.b,p.c)}if(s.id){if(s.b.a){a6=a5.a
p=a5.r.f
a6=a6.x1
a6.a.uniform3f(a6.d,p.a,p.b,p.c)}if(s.c.a){a6=a5.a
p=a5.x.f
a6=a6.y2
a6.a.uniform3f(a6.d,p.a,p.b,p.c)}if(s.d.a){a6=a5.a
p=a5.y.f
a6=a6.dc
a6.a.uniform3f(a6.d,p.a,p.b,p.c)}a6=s.e.a
if(!a6)p=!1
else p=!0
if(p){p=a5.a
o=a5.z.ch
p=p.de
p.a.uniform1f(p.d,o)}if(a6){a6=a5.a
p=a5.z.f
a6=a6.dd
a6.a.uniform3f(a6.d,p.a,p.b,p.c)}a6=s.z
if(a6.length>0){p=a7.db
h=p.ga5(p)
p=P.w
g=new H.N([p,p])
for(p=a5.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gag()
c=g.i(0,d)
if(c==null)c=0
g.m(0,d,c+1)
b=J.cC(a5.a.c_.i(0,d),c)
n=e.gd5(e)
a=C.d.p(h.a,n.gd7(n))+C.d.p(h.b,n.gd8(n))+C.d.p(h.c,n.gd9())
a0=C.d.p(h.e,n.gd7(n))+C.d.p(h.f,n.gd8(n))+C.d.p(h.r,n.gd9())
n=C.d.p(h.y,n.gd7(n))+C.d.p(h.z,n.gd8(n))+C.d.p(h.Q,n.gd9())
n=new V.A(a,a0,n).u(0,Math.sqrt(a*a+a0*a0+n*n))
a0=b.e
a=n.a
a1=n.b
n=n.c
a0.a.uniform3f(a0.d,a,a1,n)
n=e.gaN(e)
a1=b.f
a1.a.uniform3f(a1.d,n.a,n.b,n.c)
e.gaR()
n=e.gd5(e)
a=b.d
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=e.gbo()
a=b.b
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=e.gbm(e)
a=b.c
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=e.gaR()
if(!C.b.W(l,n)){n.sb_(0,l.length)
l.push(n)}n=e.gaR()
a=n.gb1(n)
if(a){a=b.r
a.toString
a0=n.gb1(n)
if(!a0)a.a.uniform1i(a.d,0)
else{n=n.gb_(n)
a.a.uniform1i(a.d,n)}}}for(p=a6.length,f=0;f<a6.length;a6.length===p||(0,H.o)(a6),++f){o=a6[f].a
k=g.i(0,o)
if(k==null)k=0
o=a5.a.bZ.i(0,o)
o.a.uniform1i(o.d,k)}}a6=s.Q
if(a6.length>0){p=a7.db
h=p.ga5(p)
p=P.w
a2=new H.N([p,p])
for(p=a5.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gag()
c=a2.i(0,d)
if(c==null)c=0
a2.m(0,d,c+1)
b=J.cC(a5.a.c1.i(0,d),c)
a3=h.p(0,e.a)
n=e.a
a=$.c1
n=n.cj(a==null?$.c1=new V.T(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=$.c1
n=a3.cj(n==null?$.c1=new V.T(0,0,0):n)
a=b.c
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=e.c
a=b.e
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=e.r
a=b.y
a.a.uniform1f(a.d,n)
n=e.x
a=b.z
a.a.uniform1f(a.d,n)
n=e.y
a=b.Q
a.a.uniform1f(a.d,n)}for(p=a6.length,f=0;f<a6.length;a6.length===p||(0,H.o)(a6),++f){o=a6[f].a
k=a2.i(0,o)
if(k==null)k=0
o=a5.a.c0.i(0,o)
o.a.uniform1i(o.d,k)}}a6=s.ch
if(a6.length>0){p=a7.db
h=p.ga5(p)
p=P.w
a4=new H.N([p,p])
for(p=a5.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gag()
c=a4.i(0,d)
if(c==null)c=0
a4.m(0,d,c+1)
b=J.cC(a5.a.c3.i(0,d),c)
n=e.ghP(e)
a=b.b
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=e.gd5(e).iv()
a=b.c
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=h.cj(e.ghP(e))
a=b.d
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=e.gaN(e)
a=b.e
a.a.uniform3f(a.d,n.a,n.b,n.c)
e.gaR()
n=e.gbo()
a=b.f
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=e.gbm(e)
a=b.r
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=e.giw()
a=b.x
a.a.uniform1f(a.d,n)
n=e.gix()
a=b.y
a.a.uniform1f(a.d,n)
e.gaR()
n=e.gaR()
if(!C.b.W(l,n)){n.sb_(0,l.length)
l.push(n)}n=e.gaR()
a=n.gb1(n)
if(a){a=b.dx
a.toString
a0=n.gb1(n)
if(!a0)a.a.uniform1i(a.d,0)
else{n=n.gb_(n)
a.a.uniform1i(a.d,n)}}e.gco()
n=e.gi4()
a=b.z
a.a.uniform4f(a.d,n.a,n.b,n.c,n.d)
n=e.gco()
if(!C.b.W(l,n)){n.sb_(0,l.length)
l.push(n)}n=e.gco()
a=n.gb1(n)
if(a){a=b.dy
a.toString
a0=n.gb1(n)
if(!a0)a.a.uniform1i(a.d,0)
else{n=n.gb_(n)
a.a.uniform1i(a.d,n)}}if(e.gib()){n=e.gi9()
a=b.Q
a.a.uniform1f(a.d,n)
n=e.gi8()
a=b.ch
a.a.uniform1f(a.d,n)}if(e.gia()){n=e.gi5()
a=b.cx
a.a.uniform1f(a.d,n)
n=e.gi6()
a=b.cy
a.a.uniform1f(a.d,n)
n=e.gi7()
a=b.db
a.a.uniform1f(a.d,n)}}for(p=a6.length,f=0;f<a6.length;a6.length===p||(0,H.o)(a6),++f){o=a6[f].a
k=a4.i(0,o)
if(k==null)k=0
o=a5.a.c2.i(0,o)
o.a.uniform1i(o.d,k)}}}if(s.dx){a6=a5.a
p=a7.Q
if(p==null){p=a7.db
p=a7.Q=p.ga5(p).hu(0)}a6=a6.id
a6.toString
a6.am(p.at(0,!0))}if(s.cy){a5.eu(l,a5.ch)
a6=a5.a
p=a5.ch
a6.fM(a6.df,p)
if(s.r.a){a6=a5.a
p=a5.cx.f
a6=a6.dg
a6.a.uniform3f(a6.d,p.a,p.b,p.c)}a6=s.x.a
if(!a6)p=!1
else p=!0
if(p){p=a5.a
o=a5.cy.ch
p=p.dh
p.a.uniform1f(p.d,o)}if(a6){a6=a5.a
p=a5.cy.f
a6=a6.di
a6.a.uniform3f(a6.d,p.a,p.b,p.c)}}a6=s.y.a
p=!a6
if(p)o=!1
else o=!0
if(o){if(a6){a6=a5.a
o=a5.db.f
a6=a6.dj
a6.a.uniform1f(a6.d,o)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].be(a7)
a6=a8.e
a6.be(a7)
a6.aP(a7)
a6.dV(a7)
if(p)a6=!1
else a6=!0
if(a6)q.disable(3042)
for(j=0;j<l.length;++j)l[j].dV(a7)
a6=a5.a
a6.toString
q.useProgram(null)
a6.x.hh()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.cE().aZ}}
O.fW.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cM(a,C.c.a4(b+3,4)*4))}}
O.fX.prototype={
$2:function(a,b){return J.k7(a.a,b.a)}}
O.fY.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.d9(a,C.c.a4(b+3,4)*4))}}
O.fZ.prototype={
$2:function(a,b){return J.k7(a.a,b.a)}}
O.h_.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.df(a,C.c.a4(b+3,4)*4))}}
O.h0.prototype={
$2:function(a,b){return J.k7(a.a,b.a)}}
O.fQ.prototype={
aw:function(){var u,t=this
t.cr()
u=t.f
if(!(Math.abs(u-1)<$.z().a)){t.f=1
u=new D.y(t.b,u,1)
u.b=!0
t.a.aa(u)}}}
O.d1.prototype={
aw:function(){},
cR:function(a){var u,t,s=this
if(!s.c.q(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aw()
u=s.a
u.a=null
u.aa(null)}}}
O.fR.prototype={}
O.ap.prototype={
cQ:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.y(s.b+".color",u,a)
t.b=!0
s.a.aa(t)}},
aw:function(){this.cr()
this.cQ(new V.U(1,1,1))},
saN:function(a,b){this.cR(new A.Z(!0,!1,!1))
this.cQ(b)}}
O.fT.prototype={}
O.fU.prototype={
aw:function(){var u,t=this
t.cs()
u=t.ch
if(!(Math.abs(u-1)<$.z().a)){t.ch=1
u=new D.y(t.b+".refraction",u,1)
u.b=!0
t.a.aa(u)}}}
O.fV.prototype={
cS:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.z().a)){u.ch=a
t=new D.y(u.b+".shininess",t,a)
t.b=!0
u.a.aa(t)}},
aw:function(){this.cs()
this.cS(100)}}
O.dk.prototype={}
T.i0.prototype={}
X.k9.prototype={}
X.fl.prototype={
gw:function(){var u=this.x
return u==null?this.x=D.H():u}}
X.d8.prototype={
gw:function(){var u=this.f
return u==null?this.f=D.H():u},
aG:function(a){var u=this.f
if(u!=null)u.E(a)},
eq:function(){return this.aG(null)},
saB:function(a){var u,t,s=this
if(!J.D(s.b,a)){u=s.b
if(u!=null)u.gw().M(0,s.gcw())
t=s.b
s.b=a
if(a!=null)a.gw().n(0,s.gcw())
u=new D.y("mover",t,s.b)
u.b=!0
s.aG(u)}}}
X.hX.prototype={}
V.cI.prototype={
ba:function(a){this.b=new P.fq(C.P)
this.c=null
this.d=H.c([],[[P.n,W.ai]])},
N:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.c([],[W.ai]))
u=a.split("\n")
for(l=u.length,t=[W.ai],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.c([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.eA(q,0,q.length)
n=o==null?q:o
C.N.e1(p,H.kK(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gas(m.d).push(p)}},
dH:function(a,b){var u,t,s,r,q=this
q.d=H.c([],[[P.n,W.ai]])
u=C.b.k(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bg():t).dU(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r)q.bl(t[r])}}
V.jZ.prototype={
$1:function(a){var u=C.d.dT(this.a.ghq(),2)
if(u!=="0.00")P.kJ(u+" fps")}}
V.f0.prototype={
bl:function(a){var u=this
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
bg:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=R.i4()
a1.c=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=T.p(new H.m("_"))
u.a.push(t)
t=T.K("a","z")
u.a.push(t)
t=T.K("A","Z")
u.a.push(t)
t=a1.j(0,q).k(0,q)
u=T.p(new H.m("_"))
t.a.push(u)
u=T.K("0","9")
t.a.push(u)
u=T.K("a","z")
t.a.push(u)
u=T.K("A","Z")
t.a.push(u)
u=a1.j(0,r).k(0,p)
t=T.K("0","9")
u.a.push(t)
t=a1.j(0,p).k(0,p)
u=T.K("0","9")
t.a.push(u)
u=a1.j(0,p).k(0,o)
t=T.p(new H.m("."))
u.a.push(t)
t=a1.j(0,o).k(0,n)
u=T.K("0","9")
t.a.push(u)
u=a1.j(0,n).k(0,n)
t=T.K("0","9")
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
a1.j(0,k).k(0,k).a.push(new T.ay())
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
a1.j(0,h).k(0,h).a.push(new T.ay())
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
s=[T.b0]
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
t.aC(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aC(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aC(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fn.prototype={
bl:function(a){var u=this
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
bg:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=R.i4()
e.c=e.j(0,r)
u=e.j(0,r).k(0,q)
t=T.p(new H.m("_"))
u.a.push(t)
t=T.K("a","z")
u.a.push(t)
t=T.K("A","Z")
u.a.push(t)
t=e.j(0,q).k(0,q)
u=T.p(new H.m("_"))
t.a.push(u)
u=T.K("0","9")
t.a.push(u)
u=T.K("a","z")
t.a.push(u)
u=T.K("A","Z")
t.a.push(u)
u=e.j(0,r).k(0,p)
t=T.K("0","9")
u.a.push(t)
t=e.j(0,p).k(0,p)
u=T.K("0","9")
t.a.push(u)
u=e.j(0,p).k(0,o)
t=T.p(new H.m("."))
u.a.push(t)
t=e.j(0,o).k(0,n)
u=T.K("0","9")
t.a.push(u)
u=e.j(0,n).k(0,n)
t=T.K("0","9")
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
e.j(0,k).k(0,m).a.push(new T.ay())
t=e.j(0,j).k(0,i)
u=T.p(new H.m("\n"))
t.a.push(u)
u=e.j(0,j).k(0,j)
t=new T.a3()
s=[T.b0]
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
u.aC(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aC(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aC(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fo.prototype={
bl:function(a){var u=this,t="#111"
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
bg:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=R.i4()
l.c=l.j(0,s)
u=l.j(0,s).k(0,r)
t=T.p(new H.m("_"))
u.a.push(t)
t=T.K("a","z")
u.a.push(t)
t=T.K("A","Z")
u.a.push(t)
t=l.j(0,r).k(0,r)
u=T.p(new H.m("_"))
t.a.push(u)
u=T.K("0","9")
t.a.push(u)
u=T.K("a","z")
t.a.push(u)
u=T.K("A","Z")
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
l.j(0,o).k(0,o).a.push(new T.ay())
l.j(0,s).k(0,m).a.push(new T.ay())
u=l.j(0,m).k(0,m)
t=new T.a3()
t.a=H.c([],[T.b0])
u.a.push(t)
u=T.p(new H.m('</\\-!>=_"'))
t.a.push(u)
u=T.K("a","z")
t.a.push(u)
u=T.K("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.P("Symbol")
u=l.j(0,n)
u.d=u.a.P("String")
u=l.j(0,r)
t=u.a.P(r)
u.d=t
t.aC(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.k]))
t=l.j(0,q)
t.d=t.a.P(q)
t=l.j(0,m)
t.d=t.a.P(m)
return l}}
V.hn.prototype={
dH:function(a,b){this.d=H.c([],[[P.n,W.ai]])
this.N(C.b.k(b,"\n"),"#111")},
bl:function(a){},
bg:function(){return}}
V.hr.prototype={
cY:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.lo().gcf().i(0,H.e(u))
if(t==null)if(d){c.$0()
m.cW(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.kQ(m.c).n(0,q)
o=W.mG("radio")
o.checked=s
o.name=u
W.Y(o,"change",new V.hs(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.kQ(m.c).n(0,r.createElement("br"))},
aV:function(a,b,c){return this.cY(a,b,c,!1)},
cW:function(a){var u,t,s=P.lo(),r=P.k,q=P.mN(s.gcf(),r,r)
q.m(0,this.a,a)
u=s.dO(0,q)
r=window.history
t=u.h(0)
r.toString
r.replaceState(new P.jd([],[]).ck(""),"",t)}}
V.hs.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.cW(u.d)}}}
V.hH.prototype={
ed:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.Y(q,"scroll",new V.hJ(o),!1)},
d_:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.fP()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.dU(C.b.hw(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
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
if(H.oE(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.b(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.el(C.x,n,C.e,!1)
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
dZ:function(a){var u,t,s,r=new V.f0("dart")
r.ba("dart")
u=new V.fn("glsl")
u.ba("glsl")
t=new V.fo("html")
t.ba("html")
s=C.b.hn(H.c([r,u,t],[V.cI]),new V.hK(a))
if(s!=null)return s
r=new V.hn("plain")
r.ba("plain")
return r},
cZ:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.c([],[P.w])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cx(s).a0(s,"+")){b0[t]=C.a.a6(s,1)
a6.push(1)
u=!0}else if(C.a.a0(s,"-")){b0[t]=C.a.a6(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.dZ(a8)
r.dH(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.el(C.x,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.kS()
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
for(a2=C.b.gT(s);a2.A();)d.appendChild(a2.gK(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
fY:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
fP:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=R.i4()
u.c=u.j(0,q)
t=u.j(0,q).k(0,p)
s=T.p(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new T.a3()
r=[T.b0]
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
u.j(0,q).k(0,i).a.push(new T.ay())
s=u.j(0,i).k(0,i)
t=new T.a3()
t.a=H.c([],r)
s.a.push(t)
s=T.p(new H.m("*_`["))
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
V.hJ.prototype={
$1:function(a){P.lk(C.n,new V.hI(this.a))}}
V.hI.prototype={
$0:function(){var u=C.d.ai(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.hK.prototype={
$1:function(a){return a.a===this.a}}
U.jR.prototype={
$0:function(){this.a.sa9(0,F.kE(1,null,null,1))}}
U.jS.prototype={
$0:function(){this.a.sa9(0,F.lO(!0,40,1))}}
U.jT.prototype={
$0:function(){this.a.sa9(0,F.lO(!1,40,0))}}
U.jU.prototype={
$0:function(){this.a.sa9(0,F.lZ(6,6))}}
U.jV.prototype={
$0:function(){this.a.sa9(0,F.m0())}}
U.jW.prototype={
$0:function(){this.a.sa9(0,F.ox())}}
U.jX.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.k]
u.cZ("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.cZ("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.e4=u.h
u=J.cV.prototype
u.e6=u.h
u=P.i.prototype
u.e5=u.bp
u=W.S.prototype
u.bs=u.ab
u=W.e4.prototype
u.e7=u.aq
u=T.cS.prototype
u.e3=u.aA
u.cq=u.h
u=O.d1.prototype
u.cr=u.aw
u=O.ap.prototype
u.cs=u.aw})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"of","no",8)
u(P,"og","np",8)
u(P,"oh","nq",8)
t(P,"lN","od",10)
s(W,"or",4,null,["$4"],["nr"],15,0)
s(W,"os",4,null,["$4"],["ns"],15,0)
var m
r(m=E.aB.prototype,"gdD",0,0,null,["$1","$0"],["dE","hG"],0,0)
r(m,"gdF",0,0,null,["$1","$0"],["dG","hH"],0,0)
r(m,"gdB",0,0,null,["$1","$0"],["dC","hF"],0,0)
r(m,"gdz",0,0,null,["$1","$0"],["dA","hC"],0,0)
q(m,"ghA","hB",4)
q(m,"ghD","hE",4)
r(m=E.dl.prototype,"gct",0,0,null,["$1","$0"],["cv","cu"],0,0)
p(m,"ghW","dP",10)
o(m=X.dw.prototype,"gf5","f6",5)
o(m,"geU","eV",5)
o(m,"gf_","f0",2)
o(m,"gf9","fa",11)
o(m,"gf7","f8",11)
o(m,"gfd","fe",2)
o(m,"gfh","fi",2)
o(m,"gf3","f4",2)
o(m,"gff","fg",2)
o(m,"gf1","f2",2)
o(m,"gfj","fk",18)
o(m,"gfl","fm",5)
o(m,"gfB","fC",6)
o(m,"gfv","fw",6)
o(m,"gfz","fA",6)
r(m=D.cX.prototype,"gcM",0,0,null,["$1","$0"],["cN","fb"],0,0)
o(m,"gfo","fp",19)
q(m,"geO","eP",12)
q(m,"gft","fu",12)
r(D.bq.prototype,"geg",0,0,null,["$1","$0"],["a7","eh"],0,0)
n(V.F.prototype,"gl","b0",7)
n(V.A.prototype,"gl","b0",7)
n(V.ce.prototype,"gl","b0",7)
r(m=U.bP.prototype,"gaI",0,0,null,["$1","$0"],["G","a3"],0,0)
q(m,"gei","ej",13)
q(m,"gfq","fs",13)
r(m=U.dx.prototype,"gaI",0,0,null,["$1","$0"],["G","a3"],0,0)
o(m,"gbC","bD",1)
o(m,"gbE","bF",1)
o(m,"gbG","bH",1)
r(m=U.dy.prototype,"gaI",0,0,null,["$1","$0"],["G","a3"],0,0)
o(m,"gbC","bD",1)
o(m,"gbE","bF",1)
o(m,"gbG","bH",1)
o(m,"geG","eH",1)
o(m,"geI","eJ",1)
o(m,"gfW","fX",1)
o(m,"gfU","fV",1)
o(m,"gfS","fT",1)
o(U.dz.prototype,"geL","eM",1)
r(m=M.cP.prototype,"gan",0,0,null,["$1","$0"],["au","ek"],0,0)
q(m,"geW","eX",4)
q(m,"geY","eZ",4)
r(m=O.d0.prototype,"gem",0,0,null,["$1","$0"],["aa","en"],0,0)
r(m,"gfI",0,0,null,["$1","$0"],["cO","fJ"],0,0)
q(m,"geQ","eR",14)
q(m,"geS","eT",14)
r(X.d8.prototype,"gcw",0,0,null,["$1","$0"],["aG","eq"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a_,null)
s(P.a_,[H.kk,J.a,J.a2,P.dS,P.i,H.bU,P.fu,H.cQ,H.io,H.eT,H.i9,P.bk,H.bK,H.e9,P.aD,H.fC,H.fE,H.fx,P.ef,P.dC,P.di,P.hT,P.dm,P.jt,P.j7,P.j1,P.dR,P.r,P.jl,P.fL,P.eQ,P.fr,P.jr,P.jq,P.ax,P.a6,P.aa,P.aV,P.hl,P.dg,P.dK,P.fk,P.fm,P.n,P.P,P.b3,P.k,P.Q,P.bz,P.iq,P.ja,W.eX,W.ch,W.I,W.d6,W.e4,W.jg,W.cR,W.aG,W.j6,W.em,P.jc,P.j2,P.bv,T.ay,T.cS,T.b0,T.ht,T.hC,R.dh,R.dn,R.dp,R.i3,O.aU,O.bV,E.eM,E.aB,E.hu,E.dl,Z.dB,Z.iL,Z.cG,Z.bm,Z.bb,D.eP,D.bl,D.V,X.cH,X.cW,X.fz,X.fI,X.ae,X.h9,X.i5,X.dw,D.f2,D.a7,D.bq,D.hO,V.U,V.am,V.fb,V.h1,V.aq,V.a4,V.T,V.b6,V.db,V.F,V.A,V.ce,U.dx,U.dy,U.dz,M.cP,A.cE,A.eF,A.Z,A.cM,A.d9,A.df,A.fS,A.c9,A.cb,A.cc,A.ds,A.ii,F.aW,F.fe,F.bT,F.fB,F.c0,F.hD,F.hE,F.hF,F.hG,F.ba,F.iz,F.iA,F.iD,F.iF,F.iG,F.iH,O.dk,O.d1,O.fT,X.k9,X.hX,X.d8,V.cI,V.hr,V.hH])
s(J.a,[J.fv,J.cU,J.cV,J.aX,J.bS,J.aY,H.bY,H.b2,W.f,W.eB,W.bh,W.an,W.G,W.dE,W.ad,W.f1,W.f3,W.dG,W.cO,W.dI,W.f5,W.h,W.dL,W.aC,W.fp,W.dN,W.bR,W.fH,W.h3,W.dT,W.dU,W.aE,W.dV,W.dY,W.aH,W.e1,W.e3,W.aJ,W.e5,W.aK,W.ea,W.at,W.ed,W.i2,W.aM,W.eg,W.i7,W.iv,W.en,W.ep,W.er,W.et,W.ev,P.b_,P.dP,P.b4,P.e_,P.hq,P.eb,P.b8,P.ei,P.eG,P.dD,P.e7])
s(J.cV,[J.hm,J.by,J.aZ])
t(J.kj,J.aX)
s(J.bS,[J.cT,J.fw])
t(P.fG,P.dS)
s(P.fG,[H.du,W.iS,W.a0,P.fg])
t(H.m,H.du)
s(P.i,[H.f8,H.fM,H.cf])
s(H.f8,[H.cZ,H.fD])
s(P.fu,[H.fN,H.iM])
t(H.fO,H.cZ)
t(H.eU,H.eT)
s(P.bk,[H.hi,H.fy,H.im,H.eO,H.hA,P.d7,P.ah,P.ip,P.ik,P.c5,P.eS,P.f_])
s(H.bK,[H.k4,H.hY,H.jM,H.jN,H.jO,P.iO,P.iN,P.iP,P.iQ,P.jk,P.jj,P.jC,P.j4,P.j5,P.fF,P.fK,P.f6,P.f7,P.iu,P.ir,P.is,P.it,P.jm,P.jn,P.jp,P.jo,P.jx,P.jw,P.jy,P.jz,W.f9,W.h5,W.h7,W.hz,W.hS,W.iX,W.hg,W.hf,W.j8,W.j9,W.ji,W.js,P.je,P.jD,P.fh,P.fi,P.eI,E.hv,E.hw,E.hx,E.i1,D.fc,D.fd,F.ju,F.jE,F.jG,F.jH,F.jI,F.k_,F.k0,F.k3,F.jQ,F.jF,F.iJ,F.iI,F.iB,F.iC,O.fW,O.fX,O.fY,O.fZ,O.h_,O.h0,V.jZ,V.hs,V.hJ,V.hI,V.hK,U.jR,U.jS,U.jT,U.jU,U.jV,U.jW,U.jX])
s(H.hY,[H.hQ,H.bI])
t(P.fJ,P.aD)
s(P.fJ,[H.N,W.iR])
t(H.d2,H.b2)
s(H.d2,[H.cj,H.cl])
t(H.ck,H.cj)
t(H.bZ,H.ck)
t(H.cm,H.cl)
t(H.d3,H.cm)
s(H.d3,[H.ha,H.hb,H.hc,H.hd,H.he,H.d4,H.c_])
t(P.j3,P.jt)
t(P.j0,P.j7)
t(P.ek,P.fL)
t(P.dv,P.ek)
s(P.eQ,[P.eK,P.fa])
t(P.eV,P.hT)
s(P.eV,[P.eL,P.fq,P.iy,P.ix])
t(P.iw,P.fa)
s(P.aa,[P.M,P.w])
s(P.ah,[P.bt,P.fs])
t(P.iU,P.bz)
s(W.f,[W.E,W.ff,W.bW,W.aI,W.cn,W.aL,W.au,W.cp,W.iK,W.cg,P.eJ,P.bg])
s(W.E,[W.S,W.aT])
s(W.S,[W.l,P.j])
s(W.l,[W.eC,W.eD,W.bi,W.bj,W.ai,W.fj,W.hB,W.dj,W.hV,W.hW,W.c7])
t(W.eW,W.an)
t(W.bL,W.dE)
s(W.ad,[W.eY,W.eZ])
t(W.dH,W.dG)
t(W.cN,W.dH)
t(W.dJ,W.dI)
t(W.f4,W.dJ)
t(W.ao,W.bh)
t(W.dM,W.dL)
t(W.bO,W.dM)
t(W.dO,W.dN)
t(W.bQ,W.dO)
t(W.b9,W.h)
s(W.b9,[W.bp,W.as,W.bu])
t(W.h4,W.dT)
t(W.h6,W.dU)
t(W.dW,W.dV)
t(W.h8,W.dW)
t(W.dZ,W.dY)
t(W.d5,W.dZ)
t(W.e2,W.e1)
t(W.ho,W.e2)
t(W.hy,W.e3)
t(W.co,W.cn)
t(W.hM,W.co)
t(W.e6,W.e5)
t(W.hN,W.e6)
t(W.hR,W.ea)
t(W.ee,W.ed)
t(W.hZ,W.ee)
t(W.cq,W.cp)
t(W.i_,W.cq)
t(W.eh,W.eg)
t(W.i6,W.eh)
t(W.bc,W.as)
t(W.eo,W.en)
t(W.iT,W.eo)
t(W.dF,W.cO)
t(W.eq,W.ep)
t(W.iY,W.eq)
t(W.es,W.er)
t(W.dX,W.es)
t(W.eu,W.et)
t(W.jb,W.eu)
t(W.ew,W.ev)
t(W.jf,W.ew)
t(W.iV,W.iR)
t(W.iW,P.di)
t(W.jh,W.e4)
t(P.jd,P.jc)
t(P.a9,P.j2)
t(P.dQ,P.dP)
t(P.fA,P.dQ)
t(P.e0,P.e_)
t(P.hj,P.e0)
t(P.c4,P.j)
t(P.ec,P.eb)
t(P.hU,P.ec)
t(P.ej,P.ei)
t(P.i8,P.ej)
t(P.eH,P.dD)
t(P.hk,P.bg)
t(P.e8,P.e7)
t(P.hP,P.e8)
s(T.cS,[T.a3,R.dr])
s(E.eM,[Z.cF,A.dd,T.i0])
s(D.V,[D.bn,D.bo,D.y,X.hp])
s(X.hp,[X.d_,X.aF,X.bX,X.dq])
s(O.aU,[D.cX,U.bP])
s(D.eP,[U.eR,U.a8])
s(U.a8,[U.cJ,U.dc])
t(A.fP,A.dd)
s(A.ds,[A.dt,A.ie,A.ig,A.ih,A.ic,A.X,A.id,A.L,A.c8,A.ij,A.ca,A.af,A.bw,A.bx])
t(F.hL,F.fe)
t(F.ib,F.fB)
t(F.iE,F.iF)
t(F.hh,F.iG)
t(O.d0,O.dk)
s(O.d1,[O.fQ,O.fR,O.ap])
s(O.ap,[O.fU,O.fV])
t(X.fl,X.hX)
s(V.cI,[V.f0,V.fn,V.fo,V.hn])
u(H.du,H.io)
u(H.cj,P.r)
u(H.ck,H.cQ)
u(H.cl,P.r)
u(H.cm,H.cQ)
u(P.dS,P.r)
u(P.ek,P.jl)
u(W.dE,W.eX)
u(W.dG,P.r)
u(W.dH,W.I)
u(W.dI,P.r)
u(W.dJ,W.I)
u(W.dL,P.r)
u(W.dM,W.I)
u(W.dN,P.r)
u(W.dO,W.I)
u(W.dT,P.aD)
u(W.dU,P.aD)
u(W.dV,P.r)
u(W.dW,W.I)
u(W.dY,P.r)
u(W.dZ,W.I)
u(W.e1,P.r)
u(W.e2,W.I)
u(W.e3,P.aD)
u(W.cn,P.r)
u(W.co,W.I)
u(W.e5,P.r)
u(W.e6,W.I)
u(W.ea,P.aD)
u(W.ed,P.r)
u(W.ee,W.I)
u(W.cp,P.r)
u(W.cq,W.I)
u(W.eg,P.r)
u(W.eh,W.I)
u(W.en,P.r)
u(W.eo,W.I)
u(W.ep,P.r)
u(W.eq,W.I)
u(W.er,P.r)
u(W.es,W.I)
u(W.et,P.r)
u(W.eu,W.I)
u(W.ev,P.r)
u(W.ew,W.I)
u(P.dP,P.r)
u(P.dQ,W.I)
u(P.e_,P.r)
u(P.e0,W.I)
u(P.eb,P.r)
u(P.ec,W.I)
u(P.ei,P.r)
u(P.ej,W.I)
u(P.dD,P.aD)
u(P.e7,P.r)
u(P.e8,W.I)})()
var v={mangledGlobalNames:{w:"int",M:"double",aa:"num",k:"String",ax:"bool",b3:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.V]},{func:1,ret:-1,args:[D.V]},{func:1,ret:-1,args:[W.as]},{func:1,ret:P.b3,args:[,,]},{func:1,ret:-1,args:[P.w,[P.i,E.aB]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.bu]},{func:1,ret:P.M},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bp]},{func:1,ret:-1,args:[P.w,[P.i,D.a7]]},{func:1,ret:-1,args:[P.w,[P.i,U.a8]]},{func:1,ret:-1,args:[P.w,[P.i,V.aq]]},{func:1,ret:P.ax,args:[W.S,P.k,P.k,W.ch]},{func:1,ret:P.b3,args:[,]},{func:1,ret:P.bv,args:[,,]},{func:1,ret:-1,args:[W.bc]},{func:1,ret:P.ax,args:[[P.i,D.a7]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bi.prototype
C.m=W.bj.prototype
C.N=W.ai.prototype
C.Q=J.a.prototype
C.b=J.aX.prototype
C.c=J.cT.prototype
C.i=J.cU.prototype
C.d=J.bS.prototype
C.a=J.aY.prototype
C.R=J.aZ.prototype
C.A=J.hm.prototype
C.B=W.dj.prototype
C.q=J.by.prototype
C.C=W.bc.prototype
C.D=W.cg.prototype
C.X=new P.eL()
C.E=new P.eK()
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

C.L=new P.hl()
C.e=new P.iw()
C.M=new P.iy()
C.f=new P.j3()
C.n=new P.aV(0)
C.O=new P.aV(5e6)
C.P=new P.fr("element",!1,!1,!1)
C.v=H.c(u([127,2047,65535,1114111]),[P.w])
C.j=H.c(u([0,0,32776,33792,1,10240,0,0]),[P.w])
C.S=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.k])
C.k=H.c(u([0,0,65490,45055,65535,34815,65534,18431]),[P.w])
C.l=H.c(u([0,0,26624,1023,65534,2047,65534,2047]),[P.w])
C.T=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.k])
C.w=H.c(u([]),[P.k])
C.U=H.c(u([0,0,32722,12287,65534,34815,65534,18431]),[P.w])
C.x=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.h=H.c(u([0,0,24576,1023,65534,34815,65534,18431]),[P.w])
C.y=H.c(u([0,0,32754,11263,65534,34815,65534,18431]),[P.w])
C.V=H.c(u([0,0,32722,12287,65535,34815,65534,18431]),[P.w])
C.z=H.c(u([0,0,65490,12287,65535,34815,65534,18431]),[P.w])
C.o=H.c(u(["bind","if","ref","repeat","syntax"]),[P.k])
C.p=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.k])
C.W=new H.eU(0,{},C.w,[P.k,P.k])})();(function staticFields(){$.al=0
$.bJ=null
$.kV=null
$.lT=null
$.lM=null
$.lX=null
$.jJ=null
$.jP=null
$.kH=null
$.bB=null
$.cu=null
$.cv=null
$.kA=!1
$.aj=C.f
$.a5=[]
$.aA=null
$.kd=null
$.l0=null
$.l_=null
$.ci=P.km(P.k,P.fm)
$.h2=null
$.lb=null
$.c1=null
$.lg=null
$.lr=null
$.lw=null
$.lt=null
$.lu=null
$.lv=null
$.ls=null
$.lx=null
$.la=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oK","m2",function(){return H.lS("_$dart_dartClosure")})
u($,"oL","kM",function(){return H.lS("_$dart_js")})
u($,"oM","m3",function(){return H.av(H.ia({
toString:function(){return"$receiver$"}}))})
u($,"oN","m4",function(){return H.av(H.ia({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oO","m5",function(){return H.av(H.ia(null))})
u($,"oP","m6",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oS","m9",function(){return H.av(H.ia(void 0))})
u($,"oT","ma",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oR","m8",function(){return H.av(H.lm(null))})
u($,"oQ","m7",function(){return H.av(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"oV","mc",function(){return H.av(H.lm(void 0))})
u($,"oU","mb",function(){return H.av(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"p8","kN",function(){return P.nn()})
u($,"oW","md",function(){return P.nk()})
u($,"p9","mh",function(){return H.mT(H.ct(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.w])))})
u($,"pb","mj",function(){return P.n7("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pc","mk",function(){return P.nM()})
u($,"pa","mi",function(){return P.l2(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.k)})
u($,"p2","mg",function(){return Z.ag(0)})
u($,"oX","me",function(){return Z.ag(511)})
u($,"p4","aR",function(){return Z.ag(1)})
u($,"p3","aQ",function(){return Z.ag(2)})
u($,"oZ","aP",function(){return Z.ag(4)})
u($,"p5","be",function(){return Z.ag(8)})
u($,"p6","bf",function(){return Z.ag(16)})
u($,"p_","cA",function(){return Z.ag(32)})
u($,"p0","cB",function(){return Z.ag(64)})
u($,"p1","mf",function(){return Z.ag(96)})
u($,"p7","bH",function(){return Z.ag(128)})
u($,"oY","aO",function(){return Z.ag(256)})
u($,"oJ","m1",function(){return new V.fb(1e-9)})
u($,"oI","z",function(){return $.m1()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bY,DataView:H.b2,ArrayBufferView:H.b2,Float32Array:H.bZ,Float64Array:H.bZ,Int16Array:H.ha,Int32Array:H.hb,Int8Array:H.hc,Uint16Array:H.hd,Uint32Array:H.he,Uint8ClampedArray:H.d4,CanvasPixelArray:H.d4,Uint8Array:H.c_,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLImageElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.eB,HTMLAnchorElement:W.eC,HTMLAreaElement:W.eD,Blob:W.bh,HTMLBodyElement:W.bi,HTMLCanvasElement:W.bj,CDATASection:W.aT,CharacterData:W.aT,Comment:W.aT,ProcessingInstruction:W.aT,Text:W.aT,CSSPerspective:W.eW,CSSCharsetRule:W.G,CSSConditionRule:W.G,CSSFontFaceRule:W.G,CSSGroupingRule:W.G,CSSImportRule:W.G,CSSKeyframeRule:W.G,MozCSSKeyframeRule:W.G,WebKitCSSKeyframeRule:W.G,CSSKeyframesRule:W.G,MozCSSKeyframesRule:W.G,WebKitCSSKeyframesRule:W.G,CSSMediaRule:W.G,CSSNamespaceRule:W.G,CSSPageRule:W.G,CSSRule:W.G,CSSStyleRule:W.G,CSSSupportsRule:W.G,CSSViewportRule:W.G,CSSStyleDeclaration:W.bL,MSStyleCSSProperties:W.bL,CSS2Properties:W.bL,CSSImageValue:W.ad,CSSKeywordValue:W.ad,CSSNumericValue:W.ad,CSSPositionValue:W.ad,CSSResourceValue:W.ad,CSSUnitValue:W.ad,CSSURLImageValue:W.ad,CSSStyleValue:W.ad,CSSMatrixComponent:W.an,CSSRotation:W.an,CSSScale:W.an,CSSSkew:W.an,CSSTranslation:W.an,CSSTransformComponent:W.an,CSSTransformValue:W.eY,CSSUnparsedValue:W.eZ,DataTransferItemList:W.f1,HTMLDivElement:W.ai,DOMException:W.f3,ClientRectList:W.cN,DOMRectList:W.cN,DOMRectReadOnly:W.cO,DOMStringList:W.f4,DOMTokenList:W.f5,Element:W.S,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.ao,FileList:W.bO,FileWriter:W.ff,HTMLFormElement:W.fj,Gamepad:W.aC,History:W.fp,HTMLCollection:W.bQ,HTMLFormControlsCollection:W.bQ,HTMLOptionsCollection:W.bQ,ImageData:W.bR,KeyboardEvent:W.bp,Location:W.fH,MediaList:W.h3,MessagePort:W.bW,MIDIInputMap:W.h4,MIDIOutputMap:W.h6,MimeType:W.aE,MimeTypeArray:W.h8,PointerEvent:W.as,MouseEvent:W.as,DragEvent:W.as,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,Attr:W.E,DocumentType:W.E,Node:W.E,NodeList:W.d5,RadioNodeList:W.d5,Plugin:W.aH,PluginArray:W.ho,RTCStatsReport:W.hy,HTMLSelectElement:W.hB,SourceBuffer:W.aI,SourceBufferList:W.hM,SpeechGrammar:W.aJ,SpeechGrammarList:W.hN,SpeechRecognitionResult:W.aK,Storage:W.hR,CSSStyleSheet:W.at,StyleSheet:W.at,HTMLTableElement:W.dj,HTMLTableRowElement:W.hV,HTMLTableSectionElement:W.hW,HTMLTemplateElement:W.c7,TextTrack:W.aL,TextTrackCue:W.au,VTTCue:W.au,TextTrackCueList:W.hZ,TextTrackList:W.i_,TimeRanges:W.i2,Touch:W.aM,TouchEvent:W.bu,TouchList:W.i6,TrackDefaultList:W.i7,CompositionEvent:W.b9,FocusEvent:W.b9,TextEvent:W.b9,UIEvent:W.b9,URL:W.iv,VideoTrackList:W.iK,WheelEvent:W.bc,Window:W.cg,DOMWindow:W.cg,CSSRuleList:W.iT,ClientRect:W.dF,DOMRect:W.dF,GamepadList:W.iY,NamedNodeMap:W.dX,MozNamedAttrMap:W.dX,SpeechRecognitionResultList:W.jb,StyleSheetList:W.jf,SVGLength:P.b_,SVGLengthList:P.fA,SVGNumber:P.b4,SVGNumberList:P.hj,SVGPointList:P.hq,SVGScriptElement:P.c4,SVGStringList:P.hU,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.b8,SVGTransformList:P.i8,AudioBuffer:P.eG,AudioParamMap:P.eH,AudioTrackList:P.eJ,AudioContext:P.bg,webkitAudioContext:P.bg,BaseAudioContext:P.bg,OfflineAudioContext:P.hk,SQLResultSetRowList:P.hP})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.d2.$nativeSuperclassTag="ArrayBufferView"
H.cj.$nativeSuperclassTag="ArrayBufferView"
H.ck.$nativeSuperclassTag="ArrayBufferView"
H.bZ.$nativeSuperclassTag="ArrayBufferView"
H.cl.$nativeSuperclassTag="ArrayBufferView"
H.cm.$nativeSuperclassTag="ArrayBufferView"
H.d3.$nativeSuperclassTag="ArrayBufferView"
W.cn.$nativeSuperclassTag="EventTarget"
W.co.$nativeSuperclassTag="EventTarget"
W.cp.$nativeSuperclassTag="EventTarget"
W.cq.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.lV,[])
else U.lV([])})})()
//# sourceMappingURL=test.dart.js.map
