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
a[c]=function(){a[c]=function(){H.oB(b)}
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
jR:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
ko:function(){return new P.cb("No element")},
mA:function(){return new P.cb("Too many elements")},
dj:function(a,b,c,d){if(c-b<=32)H.n2(a,b,c,d)
else H.n1(a,b,c,d)},
n2:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.c(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.c(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a2()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.c(a,q)
C.b.m(a,s,a[q])
s=q}C.b.m(a,s,t)}},
n1:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.c.a9(a4-a3+1,6),d=a3+e,c=a4-e,b=C.c.a9(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.a2()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a2()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a2()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a2()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a2()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a2()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a2()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a2()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a2()
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
if(J.P(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.P()
if(k<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a2()
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
if(typeof f!=="number")return f.a2()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a2()
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
H.dj(a2,a3,o-2,a5)
H.dj(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.c(a2,o)
if(!J.P(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.c(a2,n)
if(!J.P(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
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
break}}}H.dj(a2,o,n,a5)}else H.dj(a2,o,n,a5)},
m:function m(a){this.a=a},
fg:function fg(){},
d3:function d3(){},
bZ:function bZ(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fR:function fR(a,b,c){this.a=a
this.b=b
this.$ti=c},
fS:function fS(a,b){this.a=null
this.b=a
this.c=b},
fT:function fT(a,b,c){this.a=a
this.b=b
this.$ti=c},
cj:function cj(a,b,c){this.a=a
this.b=b
this.$ti=c},
iY:function iY(a,b){this.a=a
this.b=b},
cU:function cU(){},
iz:function iz(){},
dA:function dA(){},
mt:function(){throw H.d(P.y("Cannot modify unmodifiable Map"))},
eI:function(a){var u,t=H.oC(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
ol:function(a){return v.types[a]},
lP:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.N(a).$iz},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a3(a)
if(typeof u!=="string")throw H.d(H.am(a))
return u},
c8:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mU:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.c(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.Y(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.D(s,q)|32)>t)return}return parseInt(a,b)},
c9:function(a){return H.mL(a)+H.lG(H.cB(a),0,null)},
mL:function(a){var u,t,s,r,q,p,o,n=J.N(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ibA){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.eI(t.length>1&&C.a.D(t,0)===36?C.a.ab(t,1):t)},
mM:function(){if(!!self.location)return self.location.href
return},
lg:function(a){var u,t,s,r,q=J.ae(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
mV:function(a){var u,t,s,r=H.b([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.am(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aS(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.d(H.am(s))}return H.lg(r)},
lh:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.am(s))
if(s<0)throw H.d(H.am(s))
if(s>65535)return H.mV(a)}return H.lg(a)},
mW:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bw:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aS(u,10))>>>0,56320|u&1023)}}throw H.d(P.Y(a,0,1114111,null,null))},
bv:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mT:function(a){var u=H.bv(a).getFullYear()+0
return u},
mR:function(a){var u=H.bv(a).getMonth()+1
return u},
mN:function(a){var u=H.bv(a).getDate()+0
return u},
mO:function(a){var u=H.bv(a).getHours()+0
return u},
mQ:function(a){var u=H.bv(a).getMinutes()+0
return u},
mS:function(a){var u=H.bv(a).getSeconds()+0
return u},
mP:function(a){var u=H.bv(a).getMilliseconds()+0
return u},
x:function(a){throw H.d(H.am(a))},
c:function(a,b){if(a==null)J.ae(a)
throw H.d(H.bI(a,b))},
bI:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ai(!0,b,s,null)
u=J.ae(a)
if(!(b<0)){if(typeof u!=="number")return H.x(u)
t=b>=u}else t=!0
if(t)return P.K(b,a,s,null,u)
return P.hx(b,s)},
oe:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bx(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bx(a,c,!0,b,"end",u)
return new P.ai(!0,b,"end",null)},
am:function(a){return new P.ai(!0,a,null,null)},
oa:function(a){if(typeof a!=="number")throw H.d(H.am(a))
return a},
d:function(a){var u
if(a==null)a=new P.dc()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lU})
u.name=""}else u.toString=H.lU
return u},
lU:function(){return J.a3(this.dartException)},
u:function(a){throw H.d(a)},
p:function(a){throw H.d(P.ap(a))},
ax:function(a){var u,t,s,r,q,p
a=H.lT(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.j])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.im(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
io:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lq:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lb:function(a,b){return new H.hk(a,b==null?null:b.method)},
ks:function(a,b){var u=b==null,t=u?null:b.method
return new H.fE(a,t,u?null:b.receiver)},
ad:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.ka(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aS(t,16)&8191)===10)switch(s){case 438:return f.$1(H.ks(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lb(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.lX()
q=$.lY()
p=$.lZ()
o=$.m_()
n=$.m2()
m=$.m3()
l=$.m1()
$.m0()
k=$.m5()
j=$.m4()
i=r.aj(u)
if(i!=null)return f.$1(H.ks(u,i))
else{i=q.aj(u)
if(i!=null){i.method="call"
return f.$1(H.ks(u,i))}else{i=p.aj(u)
if(i==null){i=o.aj(u)
if(i==null){i=n.aj(u)
if(i==null){i=m.aj(u)
if(i==null){i=l.aj(u)
if(i==null){i=o.aj(u)
if(i==null){i=k.aj(u)
if(i==null){i=j.aj(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lb(u,i))}}return f.$1(new H.iy(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dl()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ai(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dl()
return a},
kM:function(a){var u
if(a==null)return new H.eg(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eg(a)},
oi:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
or:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.v("Unsupported number of arguments for wrapped closure"))},
bH:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.or)
a.$identity=u
return u},
ms:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hU().constructor.prototype):Object.create(new H.bN(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ao
if(typeof t!=="number")return t.C()
$.ao=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.l0(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mo(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.l0(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mo:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.ol,a)
if(typeof a=="function")if(b)return a
else{u=c?H.l_:H.kd
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
mp:function(a,b,c,d){var u=H.kd
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
l0:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mr(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mp(t,!r,u,b)
if(t===0){r=$.ao
if(typeof r!=="number")return r.C()
$.ao=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bO
return new Function(r+H.e(q==null?$.bO=H.eV("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ao
if(typeof r!=="number")return r.C()
$.ao=r+1
o+=r
r="return function("+o+"){return this."
q=$.bO
return new Function(r+H.e(q==null?$.bO=H.eV("self"):q)+"."+H.e(u)+"("+o+");}")()},
mq:function(a,b,c,d){var u=H.kd,t=H.l_
switch(b?-1:a){case 0:throw H.d(H.n_("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mr:function(a,b){var u,t,s,r,q,p,o,n=$.bO
if(n==null)n=$.bO=H.eV("self")
u=$.kZ
if(u==null)u=$.kZ=H.eV("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mq(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ao
if(typeof u!=="number")return u.C()
$.ao=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ao
if(typeof u!=="number")return u.C()
$.ao=u+1
return new Function(n+u+"}")()},
kK:function(a,b,c,d,e,f,g){return H.ms(a,b,c,d,!!e,!!f,g)},
kd:function(a){return a.a},
l_:function(a){return a.c},
eV:function(a){var u,t,s,r=new H.bN("self","target","receiver","name"),q=J.kp(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
ov:function(a,b){throw H.d(H.mn(a,H.eI(b.substring(2))))},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else u=!0
if(u)return a
H.ov(a,b)},
og:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mn:function(a,b){return new H.eW("CastError: "+P.kk(a)+": type '"+H.e(H.o6(a))+"' is not a subtype of type '"+b+"'")},
o6:function(a){var u,t=J.N(a)
if(!!t.$ibQ){u=H.og(t)
if(u!=null)return H.ow(u)
return"Closure"}return H.c9(a)},
oB:function(a){throw H.d(new P.f8(a))},
n_:function(a){return new H.hE(a)},
lN:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cB:function(a){if(a==null)return
return a.$ti},
pb:function(a,b,c){return H.k8(a["$a"+H.e(c)],H.cB(b))},
ok:function(a,b,c,d){var u=H.k8(a["$a"+H.e(c)],H.cB(b))
return u==null?null:u[d]},
kL:function(a,b,c){var u=H.k8(a["$a"+H.e(b)],H.cB(a))
return u==null?null:u[c]},
eH:function(a,b){var u=H.cB(a)
return u==null?null:u[b]},
ow:function(a){return H.bi(a,null)},
bi:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.eI(a[0].name)+H.lG(a,1,b)
if(typeof a=="function")return H.eI(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.e(b[t])}if('func' in a)return H.nF(a,b)
if('futureOr' in a)return"FutureOr<"+H.bi("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nF:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.j])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.a.C(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a_)p+=" extends "+H.bi(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bi(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bi(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bi(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oh(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bi(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lG:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.T("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bi(p,c)}return"<"+u.h(0)+">"},
k8:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
p9:function(a,b,c){return a.apply(b,H.k8(J.N(b)["$a"+H.e(c)],H.cB(b)))},
pa:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
os:function(a){var u,t,s,r,q=$.lO.$1(a),p=$.jP[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jV[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.lL.$2(a,q)
if(q!=null){p=$.jP[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jV[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.k6(u)
$.jP[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jV[q]=u
return u}if(s==="-"){r=H.k6(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lR(a,u)
if(s==="*")throw H.d(P.ix(q))
if(v.leafTags[q]===true){r=H.k6(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lR(a,u)},
lR:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kO(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
k6:function(a){return J.kO(a,!1,null,!!a.$iz)},
ot:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.k6(u)
else return J.kO(u,c,null,null)},
op:function(){if(!0===$.kN)return
$.kN=!0
H.oq()},
oq:function(){var u,t,s,r,q,p,o,n
$.jP=Object.create(null)
$.jV=Object.create(null)
H.oo()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lS.$1(q)
if(p!=null){o=H.ot(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oo:function(){var u,t,s,r,q,p,o=C.G()
o=H.bG(C.H,H.bG(C.I,H.bG(C.u,H.bG(C.u,H.bG(C.J,H.bG(C.K,H.bG(C.L(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lO=new H.jS(r)
$.lL=new H.jT(q)
$.lS=new H.jU(p)},
bG:function(a,b){return a(b)||b},
mC:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(P.R("Illegal RegExp pattern ("+String(p)+")",a,null))},
oy:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
of:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lT:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kR:function(a,b,c){var u=H.oz(a,b,c)
return u},
oz:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lT(b),'g'),H.of(c))},
f1:function f1(){},
f2:function f2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
im:function im(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hk:function hk(a,b){this.a=a
this.b=b},
fE:function fE(a,b,c){this.a=a
this.b=b
this.c=c},
iy:function iy(a){this.a=a},
ka:function ka(a){this.a=a},
eg:function eg(a){this.a=a
this.b=null},
bQ:function bQ(){},
i1:function i1(){},
hU:function hU(){},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eW:function eW(a){this.a=a},
hE:function hE(a){this.a=a},
O:function O(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fH:function fH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fI:function fI(a,b){this.a=a
this.$ti=b},
fJ:function fJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jS:function jS(a){this.a=a},
jT:function jT(a){this.a=a},
jU:function jU(a){this.a=a},
fD:function fD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bE:function(a){return a},
mK:function(a){return new Int8Array(a)},
ay:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bI(b,a))},
nD:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.oe(a,b,c))
return b},
c3:function c3(){},
ba:function ba(){},
d7:function d7(){},
c4:function c4(){},
d8:function d8(){},
hd:function hd(){},
he:function he(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(){},
d9:function d9(){},
c5:function c5(){},
cn:function cn(){},
co:function co(){},
cp:function cp(){},
cq:function cq(){},
oh:function(a){return J.l6(a?Object.keys(a):[],null)},
oC:function(a){return v.mangledGlobalNames[a]},
ou:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kO:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jQ:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kN==null){H.op()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.ix("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kS()]
if(r!=null)return r
r=H.os(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.kS(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
mB:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.kX(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.Y(a,0,4294967295,"length",null))
return J.l6(new Array(a),b)},
l6:function(a,b){return J.kp(H.b(a,[b]))},
kp:function(a){a.fixed$length=Array
return a},
N:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cY.prototype
return J.cX.prototype}if(typeof a=="string")return J.b6.prototype
if(a==null)return J.cZ.prototype
if(typeof a=="boolean")return J.fC.prototype
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b7.prototype
return a}if(a instanceof P.a_)return a
return J.jQ(a)},
cz:function(a){if(typeof a=="string")return J.b6.prototype
if(a==null)return a
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b7.prototype
return a}if(a instanceof P.a_)return a
return J.jQ(a)},
eG:function(a){if(a==null)return a
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b7.prototype
return a}if(a instanceof P.a_)return a
return J.jQ(a)},
oj:function(a){if(typeof a=="number")return J.bX.prototype
if(typeof a=="string")return J.b6.prototype
if(a==null)return a
if(!(a instanceof P.a_))return J.bA.prototype
return a},
cA:function(a){if(typeof a=="string")return J.b6.prototype
if(a==null)return a
if(!(a instanceof P.a_))return J.bA.prototype
return a},
bK:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b7.prototype
return a}if(a instanceof P.a_)return a
return J.jQ(a)},
P:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).t(a,b)},
cF:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lP(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cz(a).i(a,b)},
kb:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.lP(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eG(a).m(a,b,c)},
me:function(a,b){return J.cA(a).D(a,b)},
mf:function(a,b,c){return J.bK(a).fJ(a,b,c)},
mg:function(a,b,c,d){return J.bK(a).h0(a,b,c,d)},
mh:function(a,b){return J.cA(a).Y(a,b)},
kc:function(a,b){return J.oj(a).hb(a,b)},
eJ:function(a,b){return J.eG(a).J(a,b)},
mi:function(a,b,c,d){return J.bK(a).hq(a,b,c,d)},
kU:function(a,b){return J.eG(a).B(a,b)},
mj:function(a){return J.bK(a).gh8(a)},
bM:function(a){return J.bK(a).gc0(a)},
cG:function(a){return J.N(a).gH(a)},
b_:function(a){return J.eG(a).gT(a)},
ae:function(a){return J.cz(a).gl(a)},
kV:function(a){return J.eG(a).hU(a)},
mk:function(a,b){return J.bK(a).hW(a,b)},
ml:function(a,b,c){return J.cA(a).q(a,b,c)},
mm:function(a){return J.cA(a).i4(a)},
a3:function(a){return J.N(a).h(a)},
a:function a(){},
fC:function fC(){},
cZ:function cZ(){},
d_:function d_(){},
ho:function ho(){},
bA:function bA(){},
b7:function b7(){},
b5:function b5(a){this.$ti=a},
kq:function kq(a){this.$ti=a},
a4:function a4(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bX:function bX(){},
cY:function cY(){},
cX:function cX(){},
b6:function b6(){}},P={
nf:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.o7()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bH(new P.j_(s),1)).observe(u,{childList:true})
return new P.iZ(s,u,t)}else if(self.setImmediate!=null)return P.o8()
return P.o9()},
ng:function(a){self.scheduleImmediate(H.bH(new P.j0(a),0))},
nh:function(a){self.setImmediate(H.bH(new P.j1(a),0))},
ni:function(a){P.kx(C.n,a)},
kx:function(a,b){var u=C.c.a9(a.a,1000)
return P.nn(u<0?0:u,b)},
lp:function(a,b){var u=C.c.a9(a.a,1000)
return P.no(u<0?0:u,b)},
nn:function(a,b){var u=new P.en()
u.en(a,b)
return u},
no:function(a,b){var u=new P.en()
u.eo(a,b)
return u},
o0:function(){var u,t
for(;u=$.bF,u!=null;){$.cy=null
t=u.b
$.bF=t
if(t==null)$.cx=null
u.a.$0()}},
o5:function(){$.kI=!0
try{P.o0()}finally{$.cy=null
$.kI=!1
if($.bF!=null)$.kT().$1(P.lM())}},
o3:function(a){var u=new P.dJ(a)
if($.bF==null){$.bF=$.cx=u
if(!$.kI)$.kT().$1(P.lM())}else $.cx=$.cx.b=u},
o4:function(a){var u,t,s=$.bF
if(s==null){P.o3(a)
$.cy=$.cx
return}u=new P.dJ(a)
t=$.cy
if(t==null){u.b=s
$.bF=$.cy=u}else{u.b=t.b
$.cy=t.b=u
if(u.b==null)$.cx=u}},
lo:function(a,b){var u=$.al
if(u===C.f)return P.kx(a,b)
return P.kx(a,u.h9(b))},
n5:function(a,b){var u=$.al
if(u===C.f)return P.lp(a,b)
return P.lp(a,u.dd(b,P.dt))},
lH:function(a,b,c,d,e){var u={}
u.a=d
P.o4(new P.jN(u,e))},
o1:function(a,b,c,d){var u,t=$.al
if(t===c)return d.$0()
$.al=c
u=t
try{t=d.$0()
return t}finally{$.al=u}},
o2:function(a,b,c,d,e){var u,t=$.al
if(t===c)return d.$1(e)
$.al=c
u=t
try{t=d.$1(e)
return t}finally{$.al=u}},
j_:function j_(a){this.a=a},
iZ:function iZ(a,b,c){this.a=a
this.b=b
this.c=c},
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
en:function en(){this.c=0},
jv:function jv(a,b){this.a=a
this.b=b},
ju:function ju(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dJ:function dJ(a){this.a=a
this.b=null},
dn:function dn(){},
hX:function hX(){},
dt:function dt(){},
jE:function jE(){},
jN:function jN(a,b){this.a=a
this.b=b},
jf:function jf(){},
jg:function jg(a,b){this.a=a
this.b=b},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
mE:function(a,b){return new H.O([a,b])},
kt:function(a,b){return new H.O([a,b])},
mF:function(a){return H.oi(a,new H.O([null,null]))},
d2:function(a){return new P.jc([a])},
kD:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nm:function(a,b){var u=new P.dY(a,b)
u.c=a.e
return u},
mz:function(a,b,c){var u,t
if(P.kJ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.j])
$.a6.push(a)
try{P.nG(a,u)}finally{if(0>=$.a6.length)return H.c($.a6,-1)
$.a6.pop()}t=P.lm(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kn:function(a,b,c){var u,t
if(P.kJ(a))return b+"..."+c
u=new P.T(b)
$.a6.push(a)
try{t=u
t.a=P.lm(t.a,a,", ")}finally{if(0>=$.a6.length)return H.c($.a6,-1)
$.a6.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kJ:function(a){var u,t
for(u=$.a6.length,t=0;t<u;++t)if(a===$.a6[t])return!0
return!1},
nG:function(a,b){var u,t,s,r,q,p,o,n=a.gT(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.v())return
u=H.e(n.gI(n))
b.push(u)
m+=u.length+2;++l}if(!n.v()){if(l<=5)return
if(0>=b.length)return H.c(b,-1)
t=b.pop()
if(0>=b.length)return H.c(b,-1)
s=b.pop()}else{r=n.gI(n);++l
if(!n.v()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.c(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gI(n);++l
for(;n.v();r=q,q=p){p=n.gI(n);++l
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
l7:function(a,b,c){var u=P.mE(b,c)
a.B(0,new P.fK(u))
return u},
l8:function(a,b){var u,t,s=P.d2(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t)s.n(0,a[t])
return s},
kv:function(a){var u,t={}
if(P.kJ(a))return"{...}"
u=new P.T("")
try{$.a6.push(a)
u.a+="{"
t.a=!0
J.kU(a,new P.fP(t,u))
u.a+="}"}finally{if(0>=$.a6.length)return H.c($.a6,-1)
$.a6.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jc:function jc(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jd:function jd(a){this.a=a
this.c=this.b=null},
dY:function dY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fK:function fK(a){this.a=a},
fL:function fL(){},
r:function r(){},
fO:function fO(){},
fP:function fP(a,b){this.a=a
this.b=b},
aH:function aH(){},
jw:function jw(){},
fQ:function fQ(){},
dB:function dB(a,b){this.a=a
this.$ti=b},
jj:function jj(){},
dZ:function dZ(){},
et:function et(){},
n8:function(a,b,c,d){if(b instanceof Uint8Array)return P.n9(!1,b,c,d)
return},
n9:function(a,b,c,d){var u,t,s=$.m6()
if(s==null)return
u=0===c
if(u&&!0)return P.kA(s,b)
t=b.length
d=P.bd(c,d,t)
if(u&&d===t)return P.kA(s,b)
return P.kA(s,b.subarray(c,d))},
kA:function(a,b){if(P.nb(b))return
return P.nc(a,b)},
nc:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ad(t)}return},
nb:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
na:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ad(t)}return},
lJ:function(a,b,c){var u,t,s
for(u=J.cz(a),t=b;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.al()
if((s&127)!==s)return t-b}return c-b},
kY:function(a,b,c,d,e,f){if(C.c.bh(f,4)!==0)throw H.d(P.R("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.R("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.R("Invalid base64 padding, more than two '=' characters",a,b))},
eS:function eS(){},
eT:function eT(){},
eY:function eY(){},
f3:function f3(){},
fi:function fi(){},
fy:function fy(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fx:function fx(a){this.a=a},
iI:function iI(){},
iK:function iK(){},
jC:function jC(a){this.b=0
this.c=a},
iJ:function iJ(a){this.a=a},
jB:function jB(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
cC:function(a,b,c){var u=H.mU(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.R(a,null,null))},
mx:function(a){if(a instanceof H.bQ)return a.h(0)
return"Instance of '"+H.e(H.c9(a))+"'"},
mG:function(a,b,c){var u,t,s=J.mB(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
ku:function(a,b,c){var u,t=H.b([],[c])
for(u=J.b_(a);u.v();)t.push(u.gI(u))
if(b)return t
return J.kp(t)},
cc:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.bd(b,c,u)
return H.lh(b>0||c<u?C.b.e8(a,b,c):a)}if(!!J.N(a).$ic5)return H.mW(a,b,P.bd(b,c,a.length))
return P.n3(a,b,c)},
n3:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.d(P.Y(b,0,J.ae(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.Y(c,b,J.ae(a),q,q))
t=J.b_(a)
for(s=0;s<b;++s)if(!t.v())throw H.d(P.Y(b,0,s,q,q))
r=[]
if(u)for(;t.v();)r.push(t.gI(t))
else for(s=b;s<c;++s){if(!t.v())throw H.d(P.Y(c,b,s,q,q))
r.push(t.gI(t))}return H.lh(r)},
mY:function(a){return new H.fD(a,H.mC(a,!1,!0,!1,!1,!1))},
lm:function(a,b,c){var u=J.b_(b)
if(!u.v())return a
if(c.length===0){do a+=H.e(u.gI(u))
while(u.v())}else{a+=H.e(u.gI(u))
for(;u.v();)a=a+c+H.e(u.gI(u))}return a},
iD:function(){var u=H.mM()
if(u!=null)return P.n7(u)
throw H.d(P.y("'Uri.base' is not supported"))},
eu:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mc().b
if(typeof b!=="string")H.u(H.am(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghp().c1(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bw(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mu:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mv:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cP:function(a){if(a>=10)return""+a
return"0"+a},
l2:function(a){return new P.b1(1000*a)},
kk:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a3(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mx(a)},
cH:function(a){return new P.ai(!1,null,null,a)},
kX:function(a,b,c){return new P.ai(!0,a,b,c)},
hx:function(a,b){return new P.bx(null,null,!0,a,b,"Value not in range")},
Y:function(a,b,c,d,e){return new P.bx(b,c,!0,a,d,"Invalid value")},
bd:function(a,b,c){if(0>a||a>c)throw H.d(P.Y(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.Y(b,a,c,"end",null))
return b}return c},
li:function(a,b){if(typeof a!=="number")return a.P()
if(a<0)throw H.d(P.Y(a,0,null,b,null))},
K:function(a,b,c,d,e){var u=e==null?J.ae(b):e
return new P.fA(u,!0,a,c,"Index out of range")},
y:function(a){return new P.iA(a)},
ix:function(a){return new P.iw(a)},
ll:function(a){return new P.cb(a)},
ap:function(a){return new P.f0(a)},
v:function(a){return new P.dR(a)},
R:function(a,b,c){return new P.fr(a,b,c)},
mH:function(a,b,c){var u,t,s=H.b([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.c(s,u)
s[u]=t}return s},
kQ:function(a){H.ou(a)},
n7:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.D(a,4)^58)*3|C.a.D(a,0)^100|C.a.D(a,1)^97|C.a.D(a,2)^116|C.a.D(a,3)^97)>>>0
if(u===0)return P.lr(e<e?C.a.q(a,0,e):a,5,f).ge0()
else if(u===32)return P.lr(C.a.q(a,5,e),0,f).ge0()}t=new Array(8)
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
if(P.lI(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.i6()
if(r>=0)if(P.lI(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.C()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.P()
if(typeof n!=="number")return H.x(n)
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
a=C.a.aW(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a7(a,"http",0)){if(t&&p+3===o&&C.a.a7(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aW(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a7(a,"https",0)){if(t&&p+4===o&&C.a.a7(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aW(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.q(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jm(a,r,q,p,o,n,m,k)}return P.np(a,0,e,r,q,p,o,n,m,k)},
lt:function(a){var u=P.j
return C.b.hu(H.b(a.split("&"),[u]),P.kt(u,u),new P.iG(C.e))},
n6:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iC(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.Y(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.cC(C.a.q(a,s,t),n,n)
if(typeof p!=="number")return p.a2()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.c(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.cC(C.a.q(a,s,c),n,n)
if(typeof p!=="number")return p.a2()
if(p>255)k.$2(l,s)
if(r>=u)return H.c(j,r)
j[r]=p
return j},
ls:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iE(a),d=new P.iF(e,a)
if(a.length<2)e.$1("address is too short")
u=H.b([],[P.w])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.Y(a,t)
if(p===58){if(t===b){++t
if(C.a.Y(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gav(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.n6(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.c(l,i)
l[i]=0
f=i+1
if(f>=k)return H.c(l,f)
l[f]=0
i+=2}else{f=C.c.aS(h,8)
if(i<0||i>=k)return H.c(l,i)
l[i]=f
f=i+1
if(f>=k)return H.c(l,f)
l[f]=h&255
i+=2}}return l},
np:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nx(a,b,d)
else{if(d===b)P.bD(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.ny(a,u,e-1):""
s=P.nu(a,e,f,!1)
if(typeof f!=="number")return f.C()
r=f+1
if(typeof g!=="number")return H.x(g)
q=r<g?P.nw(P.cC(C.a.q(a,r,g),new P.jx(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nv(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.P()
o=h<i?P.kF(a,h+1,i,n):n
return new P.bC(j,t,s,q,p,o,i<c?P.nt(a,i+1,c):n)},
lA:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bD:function(a,b,c){throw H.d(P.R(c,a,b))},
nw:function(a,b){if(a!=null&&a===P.lA(b))return
return a},
nu:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.Y(a,b)===91){if(typeof c!=="number")return c.L()
u=c-1
if(C.a.Y(a,u)!==93)P.bD(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nr(a,t,u)
if(typeof s!=="number")return s.P()
if(s<u){r=s+1
q=P.lF(a,C.a.a7(a,"25",r)?s+3:r,u,"%25")}else q=""
P.ls(a,t,s)
return C.a.q(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.x(c)
p=b
for(;p<c;++p)if(C.a.Y(a,p)===58){s=C.a.bp(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lF(a,C.a.a7(a,"25",r)?s+3:r,c,"%25")}else q=""
P.ls(a,b,s)
return"["+C.a.q(a,b,s)+q+"]"}return P.nA(a,b,c)},
nr:function(a,b,c){var u,t=C.a.bp(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.x(c)
u=t<c}else u=!1
return u?t:c},
lF:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.T(d):null
if(typeof c!=="number")return H.x(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.Y(a,u)
if(r===37){q=P.kG(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.T("")
o=l.a+=C.a.q(a,t,u)
if(p)q=C.a.q(a,u,u+3)
else if(q==="%")P.bD(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.c(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.T("")
if(t<u){l.a+=C.a.q(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.Y(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.T("")
l.a+=C.a.q(a,t,u)
l.a+=P.kE(r)
u+=m
t=u}}}if(l==null)return C.a.q(a,b,c)
if(t<c)l.a+=C.a.q(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
nA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.x(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.Y(a,u)
if(q===37){p=P.kG(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.T("")
n=C.a.q(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.q(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.c(C.y,o)
o=(C.y[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.T("")
if(t<u){s.a+=C.a.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.c(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bD(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.Y(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.T("")
n=C.a.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kE(q)
u+=l
t=u}}}}if(s==null)return C.a.q(a,b,c)
if(t<c){n=C.a.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nx:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lC(C.a.D(a,b)))P.bD(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.D(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.c(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bD(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.q(a,b,c)
return P.nq(t?a.toLowerCase():a)},
nq:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
ny:function(a,b,c){return P.cv(a,b,c,C.W,!1)},
nv:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cv(a,b,c,C.z,!0):C.j.im(d,new P.jy(),P.j).k(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a4(u,"/"))u="/"+u
return P.nz(u,e,f)},
nz:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a4(a,"/"))return P.nB(a,!u||c)
return P.nC(a)},
kF:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.d(P.cH("Both query and queryParameters specified"))
return P.cv(a,b,c,C.l,!0)}if(d==null)return
u=new P.T("")
t.a=""
d.B(0,new P.jz(new P.jA(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nt:function(a,b,c){return P.cv(a,b,c,C.l,!0)},
kG:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.Y(a,b+1)
t=C.a.Y(a,p)
s=H.jR(u)
r=H.jR(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aS(q,4)
if(p>=8)return H.c(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bw(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.q(a,b,b+3).toUpperCase()
return},
kE:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.w])
t[0]=37
t[1]=C.a.D(m,a>>>4)
t[2]=C.a.D(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.w])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.fT(a,6*r)&63|s
if(q>=u)return H.c(t,q)
t[q]=37
o=q+1
n=C.a.D(m,p>>>4)
if(o>=u)return H.c(t,o)
t[o]=n
n=q+2
o=C.a.D(m,p&15)
if(n>=u)return H.c(t,n)
t[n]=o
q+=3}}return P.cc(t,0,null)},
cv:function(a,b,c,d,e){var u=P.lE(a,b,c,d,e)
return u==null?C.a.q(a,b,c):u},
lE:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.P()
if(typeof c!=="number")return H.x(c)
if(!(o<c))break
c$0:{u=C.a.Y(a,o)
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
if(t){P.bD(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.Y(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kE(u)}}if(m==null)m=new P.T("")
m.a+=C.a.q(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.x(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.P()
if(n<c)m.a+=C.a.q(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lD:function(a){if(C.a.a4(a,"."))return!0
return C.a.dL(a,"/.")!==-1},
nC:function(a){var u,t,s,r,q,p,o
if(!P.lD(a))return a
u=H.b([],[P.j])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.P(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.c(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.k(u,"/")},
nB:function(a,b){var u,t,s,r,q,p
if(!P.lD(a))return!b?P.lB(a):a
u=H.b([],[P.j])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gav(u)!==".."){if(0>=u.length)return H.c(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.c(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gav(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.c(u,0)
t=P.lB(u[0])
if(0>=u.length)return H.c(u,0)
u[0]=t}return C.b.k(u,"/")},
lB:function(a){var u,t,s,r=a.length
if(r>=2&&P.lC(J.me(a,0)))for(u=1;u<r;++u){t=C.a.D(a,u)
if(t===58)return C.a.q(a,0,u)+"%3A"+C.a.ab(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.c(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
ns:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.D(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.cH("Invalid URL encoding"))}}return u},
kH:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.D(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.q(a,b,c)
else r=new H.m(C.a.q(a,b,c))}else{r=H.b([],[P.w])
for(s=a.length,q=b;q<c;++q){t=C.a.D(a,q)
if(t>127)throw H.d(P.cH("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.cH("Truncated URI"))
r.push(P.ns(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iJ(!1).c1(r)},
lC:function(a){var u=a|32
return 97<=u&&u<=122},
lr:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.b([b-1],[P.w])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.D(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.R(m,a,t))}}if(s<0&&t>b)throw H.d(P.R(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.D(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gav(l)
if(r!==44||t!==p+7||!C.a.a7(a,"base64",p+1))throw H.d(P.R("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.F.hE(0,a,o,u)
else{n=P.lE(a,o,u,C.l,!0)
if(n!=null)a=C.a.aW(a,o,u,n)}return new P.iB(a,l,c)},
nE:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.mH(22,new P.jI(),P.bz),n=new P.jH(o),m=new P.jJ(),l=new P.jK(),k=n.$2(0,225)
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
lI:function(a,b,c,d,e){var u,t,s,r,q,p=$.md()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.c(p,d)
t=p[d]
s=C.a.D(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.c(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.c(e,q)
e[q]=u}return d},
az:function az(){},
a7:function a7(a,b){this.a=a
this.b=b},
M:function M(){},
b1:function b1(a){this.a=a},
fe:function fe(){},
ff:function ff(){},
bp:function bp(){},
dc:function dc(){},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bx:function bx(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fA:function fA(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iA:function iA(a){this.a=a},
iw:function iw(a){this.a=a},
cb:function cb(a){this.a=a},
f0:function f0(a){this.a=a},
hn:function hn(){},
dl:function dl(){},
f8:function f8(a){this.a=a},
dR:function dR(a){this.a=a},
fr:function fr(a,b,c){this.a=a
this.b=b
this.c=c},
ft:function ft(){},
w:function w(){},
h:function h(){},
fB:function fB(){},
o:function o(){},
S:function S(){},
bb:function bb(){},
ac:function ac(){},
a_:function a_(){},
j:function j(){},
T:function T(a){this.a=a},
iG:function iG(a){this.a=a},
iC:function iC(a){this.a=a},
iE:function iE(a){this.a=a},
iF:function iF(a,b){this.a=a
this.b=b},
bC:function bC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jx:function jx(a,b){this.a=a
this.b=b},
jy:function jy(){},
jA:function jA(a,b){this.a=a
this.b=b},
jz:function jz(a){this.a=a},
iB:function iB(a,b,c){this.a=a
this.b=b
this.c=c},
jI:function jI(){},
jH:function jH(a){this.a=a},
jJ:function jJ(){},
jK:function jK(){},
jm:function jm(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
j5:function j5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
od:function(a){var u,t=J.N(a)
if(!!t.$iaG){u=t.gdi(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.es(a.data,a.height,a.width)},
oc:function(a){if(a instanceof P.es)return{data:a.a,height:a.b,width:a.c}
return a},
aV:function(a){var u,t,s,r,q
if(a==null)return
u=P.kt(P.j,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
ob:function(a){var u={}
a.B(0,new P.jO(u))
return u},
jo:function jo(){},
jp:function jp(a,b){this.a=a
this.b=b},
es:function es(a,b,c){this.a=a
this.b=b
this.c=c},
jO:function jO(a){this.a=a},
ek:function ek(a,b){this.a=a
this.b=b},
fn:function fn(a,b){this.a=a
this.b=b},
fo:function fo(){},
fp:function fp(){},
jb:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nl:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
je:function je(){},
aa:function aa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b8:function b8(){},
fG:function fG(){},
bc:function bc(){},
hl:function hl(){},
ht:function ht(){},
ca:function ca(){},
hY:function hY(){},
k:function k(){},
be:function be(){},
il:function il(){},
dW:function dW(){},
dX:function dX(){},
e6:function e6(){},
e7:function e7(){},
ei:function ei(){},
ej:function ej(){},
eq:function eq(){},
er:function er(){},
bz:function bz(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(a){this.a=a},
eR:function eR(){},
bk:function bk(){},
hm:function hm(){},
dK:function dK(){},
dg:function dg(){},
hT:function hT(){},
ee:function ee(){},
ef:function ef(){}},W={
kW:function(){var u=document.createElement("a")
return u},
kf:function(){var u=document.createElement("canvas")
return u},
mw:function(a,b,c){var u=document.body,t=(u&&C.r).ai(u,a,b,c)
t.toString
u=new H.cj(new W.a2(t),new W.fh(),[W.E])
return u.gaL(u)},
ki:function(a){return"wheel"},
bS:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bK(a)
t=u.gdX(a)
if(typeof t==="string")r=u.gdX(a)}catch(s){H.ad(s)}return r},
km:function(a){var u=document.createElement("img")
if(a!=null)u.src=a
return u},
my:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.ad(u)}return s},
ja:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ly:function(a,b,c,d){var u=W.ja(W.ja(W.ja(W.ja(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
U:function(a,b,c,d){var u=W.lK(new W.j8(c),W.i)
if(u!=null&&!0)J.mg(a,b,u,!1)
return new W.j7(a,b,u,!1)},
lx:function(a){var u=W.kW(),t=window.location
u=new W.cl(new W.ji(u,t))
u.ej(a)
return u},
nj:function(a,b,c,d){return!0},
nk:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
lz:function(){var u=P.j,t=P.l8(C.o,u),s=H.b(["TEMPLATE"],[u])
t=new W.js(t,P.d2(u),P.d2(u),P.d2(u),null)
t.em(null,new H.fT(C.o,new W.jt(),[H.eH(C.o,0),u]),s,null)
return t},
lK:function(a,b){var u=$.al
if(u===C.f)return a
return u.dd(a,b)},
n:function n(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
bl:function bl(){},
bm:function bm(){},
bn:function bn(){},
b0:function b0(){},
f4:function f4(){},
H:function H(){},
bR:function bR(){},
f5:function f5(){},
af:function af(){},
aq:function aq(){},
f6:function f6(){},
f7:function f7(){},
fa:function fa(){},
aj:function aj(){},
fb:function fb(){},
cR:function cR(){},
cS:function cS(){},
fc:function fc(){},
fd:function fd(){},
j3:function j3(a,b){this.a=a
this.b=b},
Q:function Q(){},
fh:function fh(){},
i:function i(){},
f:function f(){},
ar:function ar(){},
bU:function bU(){},
fm:function fm(){},
fq:function fq(){},
aF:function aF(){},
fw:function fw(){},
bW:function bW(){},
aG:function aG(){},
br:function br(){},
bt:function bt(){},
fM:function fM(){},
h6:function h6(){},
c1:function c1(){},
h7:function h7(){},
h8:function h8(a){this.a=a},
h9:function h9(){},
ha:function ha(a){this.a=a},
aJ:function aJ(){},
hb:function hb(){},
au:function au(){},
a2:function a2(a){this.a=a},
E:function E(){},
da:function da(){},
aM:function aM(){},
hq:function hq(){},
hC:function hC(){},
hD:function hD(a){this.a=a},
hF:function hF(){},
aP:function aP(){},
hQ:function hQ(){},
aQ:function aQ(){},
hR:function hR(){},
aR:function aR(){},
hV:function hV(){},
hW:function hW(a){this.a=a},
av:function av(){},
dp:function dp(){},
hZ:function hZ(){},
i_:function i_(){},
cd:function cd(){},
aS:function aS(){},
aw:function aw(){},
i2:function i2(){},
i3:function i3(){},
ie:function ie(){},
aT:function aT(){},
by:function by(){},
ij:function ij(){},
ik:function ik(){},
bf:function bf(){},
iH:function iH(){},
iX:function iX(){},
bh:function bh(){},
ck:function ck(){},
j4:function j4(){},
dM:function dM(){},
j9:function j9(){},
e3:function e3(){},
jn:function jn(){},
jq:function jq(){},
j2:function j2(){},
j6:function j6(a){this.a=a},
j7:function j7(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
j8:function j8(a){this.a=a},
cl:function cl(a){this.a=a},
J:function J(){},
db:function db(a){this.a=a},
hj:function hj(a){this.a=a},
hi:function hi(a,b,c){this.a=a
this.b=b
this.c=c},
eb:function eb(){},
jk:function jk(){},
jl:function jl(){},
js:function js(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jt:function jt(){},
jr:function jr(){},
cV:function cV(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aL:function aL(){},
ji:function ji(a,b){this.a=a
this.b=b},
ev:function ev(a){this.a=a},
jD:function jD(a){this.a=a},
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
cr:function cr(){},
cs:function cs(){},
ec:function ec(){},
ed:function ed(){},
eh:function eh(){},
el:function el(){},
em:function em(){},
ct:function ct(){},
cu:function cu(){},
eo:function eo(){},
ep:function ep(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){}},T={
L:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.d(P.v("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.D(a,0)
t=C.a.D(b,0)
s=new T.hw()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
q:function(a){var u=new T.hG()
u.eh(a)
return u},
aA:function aA(){},
cW:function cW(){},
b9:function b9(){},
a5:function a5(){this.a=null},
hw:function hw(){this.b=this.a=null},
hG:function hG(){this.a=null},
dr:function dr(){},
i4:function i4(){},
i8:function i8(){var _=this
_.y=_.d=_.c=_.b=_.a=null},
i9:function i9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ia:function ia(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
ic:function ic(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ib:function ib(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},R={
ih:function(){var u=new R.ig(),t=P.j
u.a=new H.O([t,R.dm])
u.b=new H.O([t,R.dv])
return u},
dm:function dm(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
du:function du(a,b,c){this.a=a
this.b=b
this.c=c},
dv:function dv(a){this.b=a
this.c=null},
ig:function ig(){this.c=this.b=this.a=null},
dx:function dx(a){this.b=a
this.a=this.c=null}},O={
kg:function(a){var u=new O.aB([a])
u.bj(a)
return u},
aB:function aB(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
c0:function c0(){this.b=this.a=null},
d5:function d5(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h0:function h0(a,b){this.a=a
this.b=b},
h1:function h1(){},
h2:function h2(a,b){this.a=a
this.b=b},
h3:function h3(){},
h4:function h4(a,b){this.a=a
this.b=b},
h5:function h5(){},
fV:function fV(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c_:function c_(){},
fW:function fW(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
as:function as(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fY:function fY(){var _=this
_.e=_.d=_.c=_.b=null},
fZ:function fZ(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h_:function h_(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
di:function di(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
dq:function dq(){}},E={
l5:function(){var u,t=new E.aE()
t.a=""
t.b=!0
u=O.kg(E.aE)
t.y=u
u.aY(t.ghF(),t.ghI())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbB(0,null)
return t},
mZ:function(a,b){var u=new E.hy(a)
u.eg(a,b)
return u},
n4:function(a,b,c,d,e){var u,t,s=J.N(a)
if(!!s.$ibn)return E.ln(a,!0,!0,!0,!1)
u=W.kf()
t=u.style
t.width="100%"
t.height="100%"
s.gc0(a).n(0,u)
return E.ln(u,!0,!0,!0,!1)},
ln:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.ds(),p=C.i.cv(a,"webgl2",P.mF(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.u(P.v("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.mZ(p,a)
u=new T.ia(p)
u.b=p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dC(a)
t=new X.fF()
t.c=new X.ag(!1,!1,!1)
t.d=P.d2(P.w)
u.b=t
t=new X.hc(u)
t.f=0
t.r=V.aN()
t.x=V.aN()
t.ch=t.Q=1
u.c=t
t=new X.fN(u)
t.r=0
t.x=V.aN()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ii(u)
t.f=V.aN()
t.r=V.aN()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.dn,P.a_]])
u.z=t
s=document
t.push(W.U(s,"contextmenu",u.gf0(),!1))
u.z.push(W.U(a,"focus",u.gf6(),!1))
u.z.push(W.U(a,"blur",u.geV(),!1))
u.z.push(W.U(s,"keyup",u.gfa(),!1))
u.z.push(W.U(s,"keydown",u.gf8(),!1))
u.z.push(W.U(a,"mousedown",u.gfe(),!1))
u.z.push(W.U(a,"mouseup",u.gfi(),!1))
u.z.push(W.U(a,r,u.gfg(),!1))
t=u.z
W.ki(a)
W.ki(a)
t.push(W.U(a,W.ki(a),u.gfk(),!1))
u.z.push(W.U(s,r,u.gf2(),!1))
u.z.push(W.U(s,"mouseup",u.gf4(),!1))
u.z.push(W.U(s,"pointerlockchange",u.gfm(),!1))
u.z.push(W.U(a,"touchstart",u.gfF(),!1))
u.z.push(W.U(a,"touchend",u.gfB(),!1))
u.z.push(W.U(a,"touchmove",u.gfD(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.a7(Date.now(),!1)
q.db=0
q.d_()
return q},
eU:function eU(){},
aE:function aE(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hy:function hy(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hz:function hz(a){this.a=a},
hA:function hA(a){this.a=a},
hB:function hB(a){this.a=a},
ds:function ds(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
id:function id(a){this.a=a}},Z={
kC:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bE(c)),35044)
a.bindBuffer(b,null)
return new Z.dH(b,u)},
ah:function(a){return new Z.aU(a)},
dH:function dH(a,b){this.a=a
this.b=b},
cJ:function cJ(a,b,c,d){var _=this
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
bs:function bs(a,b,c){this.a=a
this.b=b
this.c=c},
aU:function aU(a){this.a=a}},D={
C:function(){var u=new D.bq()
u.d=0
return u},
eX:function eX(){},
bq:function bq(){var _=this
_.d=_.c=_.b=_.a=null},
fk:function fk(a){this.a=a},
fl:function fl(a){this.a=a},
X:function X(){this.b=null},
b3:function b3(){this.b=null},
b4:function b4(){this.b=null},
A:function A(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
bo:function bo(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a8:function a8(){},
d1:function d1(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
hr:function hr(){},
hS:function hS(){}},X={cK:function cK(a,b){this.a=a
this.b=b},d0:function d0(a,b){this.a=a
this.b=b},fF:function fF(){var _=this
_.d=_.c=_.b=_.a=null},d4:function d4(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fN:function fN(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ag:function ag(a,b,c){this.a=a
this.b=b
this.c=c},aK:function aK(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hc:function hc(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c2:function c2(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hs:function hs(){},dw:function dw(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ii:function ii(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dC:function dC(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kl:function(a){var u=new X.fs(),t=new V.aC(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lk
if(t==null){t=V.lj(0,0,1,1)
$.lk=t}u.r=t
return u},
lc:function(a){var u,t,s=new X.dd()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gp().n(0,s.gep())
t=new D.A("mover",u,s.b)
t.b=!0
s.as(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.D().a)){s.c=1.0471975511965976
t=new D.A("fov",t,1.0471975511965976)
t.b=!0
s.as(t)}t=s.d
if(!(Math.abs(t-0.1)<$.D().a)){s.d=0.1
t=new D.A("near",t,0.1)
t.b=!0
s.as(t)}t=s.e
if(!(Math.abs(t-2000)<$.D().a)){s.e=2000
t=new D.A("far",t,2000)
t.b=!0
s.as(t)}return s},
ke:function ke(){},
fs:function fs(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fz:function fz(){this.b=this.a=null},
dd:function dd(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
i0:function i0(){}},V={
eZ:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.aC(u,t,s,1)},
oD:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.bh(a-b,u)
return(a<0?a+u:a)+b},
G:function(a,b,c){if(a==null)return C.a.ak("null",c)
return C.a.ak(C.d.dZ(Math.abs(a-0)<$.D().a?0:a,b),c+b+1)},
bJ:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.j])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.p)(a),++s){r=V.G(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.c(o,q)
u=C.a.ak(o[q],t)
p=o.length
if(q>=p)return H.c(o,q)
o[q]=u}return o},
kP:function(a){return C.d.i1(Math.pow(2,C.S.ca(Math.log(H.oa(a))/Math.log(2))))},
bu:function(){var u=$.la
return u==null?$.la=V.at(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
at:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
l9:function(a,b,c){var u=c.w(0,Math.sqrt(c.G(c))),t=b.ba(u),s=t.w(0,Math.sqrt(t.G(t))),r=u.ba(s),q=new V.B(a.a,a.b,a.c),p=s.S(0).G(q),o=r.S(0).G(q),n=u.S(0).G(q)
return V.at(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aN:function(){var u=$.le
return u==null?$.le=new V.a0(0,0):u},
lf:function(){var u=$.c7
return u==null?$.c7=new V.a1(0,0,0):u},
lj:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.df(a,b,c,d)},
dG:function(){var u=$.lw
return u==null?$.lw=new V.B(0,0,0):u},
nd:function(){var u=$.iL
return u==null?$.iL=new V.B(-1,0,0):u},
kB:function(){var u=$.iM
return u==null?$.iM=new V.B(0,1,0):u},
ne:function(){var u=$.iN
return u==null?$.iN=new V.B(0,0,1):u},
t:function t(a,b,c){this.a=a
this.b=b
this.c=c},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fj:function fj(a){this.a=a},
d6:function d6(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aI:function aI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aO:function aO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
df:function df(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
F:function F(a,b){this.a=a
this.b=b},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
ox:function(a){P.n5(C.P,new V.k7(a))},
n0:function(a){var u=new V.hL()
u.ei(a,!0)
return u},
cL:function cL(){},
k7:function k7(a){this.a=a},
f9:function f9(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fu:function fu(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fv:function fv(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hp:function hp(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hu:function hu(a){this.a=a
this.c=null},
hv:function hv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hL:function hL(){this.b=this.a=null},
hN:function hN(a){this.a=a},
hM:function hM(a){this.a=a},
hO:function hO(a){this.a=a},
i5:function i5(a,b){this.a=a
this.c=null
this.d=b},
i7:function i7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i6:function i6(){}},U={
kh:function(){var u=new U.f_()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
l1:function(a){var u=new U.cN()
u.a=a
return u},
f_:function f_(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cN:function cN(){this.b=this.a=null},
bV:function bV(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a9:function a9(){},
dD:function dD(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dE:function dE(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dF:function dF(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cM:function cM(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},cO:function cO(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},cT:function cT(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ak:function ak(){}},A={
mI:function(a,b){var u=a.aC,t=new A.fU(b,u)
t.cF(b,u)
t.ef(a,b)
return t},
mJ:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gar(a0)+a1.gar(a1)+a2.gar(a2)+a3.gar(a3)+a4.gar(a4)+a5.gar(a5)+a6.gar(a6)+a7.gar(a7)+a8.gar(a8)+"_"
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
g=$.an()
if(l){u=$.aY()
g=new Z.aU(g.a|u.a)}if(k){u=$.aX()
g=new Z.aU(g.a|u.a)}if(j){u=$.aZ()
g=new Z.aU(g.a|u.a)}if(i){u=$.aW()
g=new Z.aU(g.a|u.a)}return new A.fX(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,m,p,r,h,!0,!1,!1,o,r,n,l,k,j,!1,i,a,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
jL:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
jM:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.jL(a,b,c)
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
nK:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jL(b,t,"emission")
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
nH:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jM(b,t,"ambient")
b.a+="\n"},
nI:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jM(b,t,"diffuse")
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
nL:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jM(b,t,"invDiffuse")
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
nR:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jM(b,t,"specular")
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
nN:function(a,b){var u,t,s
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
nP:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jL(b,t,"reflect")
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
nQ:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jL(b,t,"refract")
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
nJ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
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
if(typeof u!=="number")return u.al()
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
r=[P.j]
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
nO:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
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
if(typeof u!=="number")return u.al()
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
c.a=r+"\n"}r=[P.j]
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
nS:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
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
if(typeof u!=="number")return u.al()
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
c.a=u+"\n"}u=[P.j]
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
nM:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.b([],[P.j])
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
nT:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.T("")
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
A.nK(a,j)
A.nH(a,j)
A.nI(a,j)
A.nL(a,j)
A.nR(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.nP(a,j)
A.nQ(a,j)}A.nN(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.nJ(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.nO(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.nS(a,q[o],j)
A.nM(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.b([],[P.j])
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
j.a+=m+(r[0].toUpperCase()+C.a.ab(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ab(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ab(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
nU:function(a,b){var u,t,s
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
nW:function(a,b){var u
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
nV:function(a,b){var u
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
nY:function(a,b){var u,t
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
nZ:function(a,b){var u,t
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
nX:function(a,b){var u
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
o_:function(a,b){var u
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
k9:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.a.ab(a,1)},
ky:function(a,b,c,d,e){var u=new A.ip(a,c,e)
u.f=d
P.mG(d,0,P.w)
return u},
cI:function cI(a,b,c){this.a=a
this.b=b
this.c=c},
eN:function eN(a){this.a=a},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
fU:function fU(a,b){var _=this
_.ib=_.dq=_.dn=_.dm=_.aC=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.il=_.ik=_.ij=_.c9=_.c8=_.c7=_.c6=_.c5=_.c4=_.ii=_.dE=_.dD=_.ih=_.dC=_.dB=_.dA=_.ig=_.dz=_.dw=_.dv=_.ie=_.du=_.dt=_.ic=_.ds=_.dr=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cQ:function cQ(a,b){this.a=a
this.b=b},
de:function de(a,b){this.a=a
this.b=b},
dk:function dk(a,b){this.a=a
this.b=b},
fX:function fX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aC=b3
_.dm=b4},
cf:function cf(a,b,c,d,e,f){var _=this
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
dh:function dh(){},
hP:function hP(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dy:function dy(){},
iu:function iu(a){this.a=a},
dz:function dz(a,b,c){this.a=a
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
V:function V(a,b,c){this.a=a
this.c=b
this.d=c},
iq:function iq(a,b,c){this.a=a
this.c=b
this.d=c},
I:function I(a,b,c){this.a=a
this.c=b
this.d=c},
ce:function ce(a,b,c){this.a=a
this.c=b
this.d=c},
iv:function iv(a,b,c){this.a=a
this.c=b
this.d=c},
cg:function cg(a,b,c){this.a=a
this.c=b
this.d=c},
ab:function ab(a,b,c){this.a=a
this.c=b
this.d=c},
Z:function Z(a,b,c){this.a=a
this.c=b
this.d=c},
bg:function bg(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jG:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cw:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.B(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.B(u+a3,t+a1,s+a2)
q=new V.B(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.B(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jG(i)
l=F.jG(j.b)
k=F.oA(d,a0,new F.jF(j,F.jG(j.c),F.jG(j.d),l,m,c),b)
if(k!=null)a.hD(k)},
oA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.kw()
t=H.b([],[F.bB])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.iO(g,g,new V.aC(p,0,0,1),g,g,new V.a0(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.c2(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.iO(g,g,new V.aC(j,i,h,1),g,g,new V.a0(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.c2(d))}}u.d.h2(a+1,b+1,t)
return u},
bT:function(a,b,c){var u=new F.b2(),t=a.a
if(t==null)H.u(P.v("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.u(P.v("May not create a face with vertices attached to different shapes."))
u.a=a
a.d.b.push(u)
u.b=b
b.d.c.push(u)
u.c=c
c.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.a6()
return u},
mD:function(a,b){var u=new F.bY(),t=a.a
if(t==null)H.u(P.v("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.u(P.v("May not create a line with vertices attached to different shapes."))
u.a=a
a.c.b.push(u)
u.b=b
b.c.c.push(u)
u.a.a.c.b.push(u)
u.a.a.a6()
return u},
kw:function(){var u=new F.hH(),t=new F.iP(u)
t.b=!1
t.c=H.b([],[F.bB])
u.a=t
t=new F.hK(u)
t.b=H.b([],[F.c6])
u.b=t
t=new F.hJ(u)
t.b=H.b([],[F.bY])
u.c=t
t=new F.hI(u)
t.b=H.b([],[F.b2])
u.d=t
u.e=null
return u},
iO:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bB(),r=new F.iU()
r.b=H.b([],[F.c6])
s.b=r
r=new F.iT()
u=[F.bY]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.iQ()
u=[F.b2]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.m7()
s.e=0
r=$.an()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aY().a)!==0?e:t
s.x=(u&$.aX().a)!==0?b:t
s.y=(u&$.aZ().a)!==0?f:t
s.z=(u&$.bj().a)!==0?g:t
s.Q=(u&$.m8().a)!==0?c:t
s.ch=(u&$.bL().a)!==0?i:0
s.cx=(u&$.aW().a)!==0?a:t
return s},
jF:function jF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b2:function b2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bY:function bY(){this.b=this.a=null},
c6:function c6(){this.a=null},
hH:function hH(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hI:function hI(a){this.a=a
this.b=null},
hJ:function hJ(a){this.a=a
this.b=null},
hK:function hK(a){this.a=a
this.b=null},
bB:function bB(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iW:function iW(a){this.a=a},
iV:function iV(a){this.a=a},
iP:function iP(a){this.a=a
this.c=this.b=null},
iQ:function iQ(){this.d=this.c=this.b=null},
iR:function iR(a,b){this.a=a
this.b=b},
iS:function iS(a,b){this.a=a
this.b=b},
iT:function iT(){this.c=this.b=null},
iU:function iU(){this.b=null}},B={
lQ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="testCanvas",a6=null,a7="bumpMaps",a8="controls",a9=34067,b0="modifiers",b1=V.n0("Test 015"),b2=W.kf()
b2.className="pageLargeCanvas"
b2.id=a5
b1.a.appendChild(b2)
u=[P.j]
b1.d9(H.b(["Test of Material Lighting shader with bump mapping, reflections, refractions."],u))
b1.h_(H.b(["bumpMaps","controls"],u))
b1.d9(H.b(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a5)
if(t==null)H.u(P.v("Failed to find an element with the identifier, testCanvas."))
s=E.n4(t,!0,!0,!0,!1)
r=X.kl(a6)
r.sdg(0,!1)
q=E.l5()
p=F.kw()
F.cw(p,a6,a6,1,1,1,0,0,1)
F.cw(p,a6,a6,1,1,0,1,0,3)
F.cw(p,a6,a6,1,1,0,0,1,2)
F.cw(p,a6,a6,1,1,-1,0,0,0)
F.cw(p,a6,a6,1,1,0,-1,0,0)
F.cw(p,a6,a6,1,1,0,0,-1,3)
p.aA()
q.sbB(0,p)
o=s.f
n=o.a
m=n.createTexture()
n.bindTexture(a9,m)
n.texParameteri(a9,10242,10497)
n.texParameteri(a9,10243,10497)
n.texParameteri(a9,10241,9729)
n.texParameteri(a9,10240,9729)
n.bindTexture(a9,a6)
l=new T.i9()
l.a=0
l.b=m
l.c=!1
l.d=0
o.aP(l,m,"../resources/maskonaive/posx.jpg",34069,!1,!1)
o.aP(l,m,"../resources/maskonaive/negx.jpg",34070,!1,!1)
o.aP(l,m,"../resources/maskonaive/posy.jpg",34071,!1,!1)
o.aP(l,m,"../resources/maskonaive/negy.jpg",34072,!1,!1)
o.aP(l,m,"../resources/maskonaive/posz.jpg",34073,!1,!1)
o.aP(l,m,"../resources/maskonaive/negz.jpg",34074,!1,!1)
k=new O.d5()
o=O.kg(V.aI)
k.e=o
o.aY(k.geR(),k.geT())
o=new O.as(k,"emission")
o.c=new A.W(!1,!1,!1)
o.f=new V.t(0,0,0)
k.f=o
o=new O.as(k,"ambient")
o.c=new A.W(!1,!1,!1)
o.f=new V.t(0,0,0)
k.r=o
o=new O.as(k,"diffuse")
o.c=new A.W(!1,!1,!1)
o.f=new V.t(0,0,0)
k.x=o
o=new O.as(k,"invDiffuse")
o.c=new A.W(!1,!1,!1)
o.f=new V.t(0,0,0)
k.y=o
o=new O.h_(k,"specular")
o.c=new A.W(!1,!1,!1)
o.f=new V.t(0,0,0)
o.ch=100
k.z=o
o=new O.fW(k,"bump")
o.c=new A.W(!1,!1,!1)
k.Q=o
k.ch=null
o=new O.as(k,"reflect")
o.c=new A.W(!1,!1,!1)
o.f=new V.t(0,0,0)
k.cx=o
o=new O.fZ(k,"refract")
o.c=new A.W(!1,!1,!1)
o.f=new V.t(0,0,0)
o.ch=1
k.cy=o
o=new O.fV(k,"alpha")
o.c=new A.W(!1,!1,!1)
o.f=1
k.db=o
o=new D.d1()
o.bj(D.a8)
o.e=H.b([],[D.bo])
o.f=H.b([],[D.hr])
o.r=H.b([],[D.hS])
o.y=o.x=null
o.cz(o.geP(),o.gfo(),o.gft())
k.dx=o
n=new O.fY()
n.b=new V.aC(0,0,0,0)
n.c=1
n.d=10
n.e=!1
k.dy=n
n=o.x
o=n==null?o.x=D.C():n
o.n(0,k.gfL())
o=k.dx
n=o.y
o=n==null?o.y=D.C():n
n=k.gaQ()
o.n(0,n)
k.fr=null
o=k.dx
j=V.kB()
i=U.l1(V.l9(V.lf(),j,new V.B(-1,-1,-1)))
h=new D.bo()
h.c=new V.t(1,1,1)
h.a=V.ne()
h.d=V.kB()
h.e=V.nd()
g=h.b
h.b=i
i.gp().n(0,h.gek())
i=new D.A("mover",g,h.b)
i.b=!0
h.aw(i)
f=new V.t(1,1,1)
if(!h.c.t(0,f)){g=h.c
h.c=f
i=new D.A("color",g,f)
i.b=!0
h.aw(i)}o.n(0,h)
o=k.r
o.su(0,new V.t(0.1,0.1,0.1))
o=k.x
o.su(0,new V.t(0.1,0.1,0.1))
k.z.su(0,new V.t(0,0,0))
o=k.z
o.b5(new A.W(!0,o.c.b,!1))
o.d2(10)
o=k.ch
if(o!==l){if(o!=null)o.gp().V(0,n)
g=k.ch
k.ch=l
l.gp().n(0,n)
o=new D.A("environment",g,k.ch)
o.b=!0
k.X(o)}k.cy.saB(0.6)
o=k.cy
o.su(0,new V.t(0.2,0.3,1))
o=k.cx
o.su(0,new V.t(0.6,0.6,0.6))
e=new U.bV()
e.bj(U.a9)
e.aY(e.geN(),e.gfq())
e.e=null
e.f=V.bu()
e.r=0
o=s.x
n=new U.dE()
i=U.kh()
i.scu(0,!0)
i.scj(6.283185307179586)
i.scl(0)
i.sad(0,0)
i.sck(100)
i.sW(0)
i.sc3(0.5)
n.b=i
h=n.gaN()
i.gp().n(0,h)
i=U.kh()
i.scu(0,!0)
i.scj(6.283185307179586)
i.scl(0)
i.sad(0,0)
i.sck(100)
i.sW(0)
i.sc3(0.5)
n.c=i
i.gp().n(0,h)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
d=new X.ag(!1,!1,!1)
g=n.d
n.d=d
i=new D.A(b0,g,d)
i.b=!0
n.R(i)
i=n.f
if(i!==!1){n.f=!1
i=new D.A("invertX",i,!1)
i.b=!0
n.R(i)}i=n.r
if(i!==!1){n.r=!1
i=new D.A("invertY",i,!1)
i.b=!0
n.R(i)}n.b7(o)
e.n(0,n)
o=s.x
n=new U.dD()
i=U.kh()
i.scu(0,!0)
i.scj(6.283185307179586)
i.scl(0)
i.sad(0,0)
i.sck(100)
i.sW(0)
i.sc3(0.2)
n.b=i
i.gp().n(0,n.gaN())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
d=new X.ag(!0,!1,!1)
g=n.c
n.c=d
i=new D.A(b0,g,d)
i.b=!0
n.R(i)
n.b7(o)
e.n(0,n)
o=s.x
n=new U.dF()
n.c=0.01
n.e=n.d=0
d=new X.ag(!1,!1,!1)
n.b=d
i=new D.A(b0,a6,d)
i.b=!0
n.R(i)
n.b7(o)
e.n(0,n)
e.n(0,U.l1(V.at(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=X.lc(e)
b=new M.cO()
b.a=!0
o=E.l5()
p=F.kw()
n=p.a
i=new V.B(-1,-1,1)
i=i.w(0,Math.sqrt(i.G(i)))
a=n.bm(new V.aO(1,2,4,6),V.eZ(255,0,0),new V.a1(-1,-1,0),new V.a0(0,1),i,a6)
i=p.a
n=new V.B(1,-1,1)
n=n.w(0,Math.sqrt(n.G(n)))
a0=i.bm(new V.aO(0,3,4,6),V.eZ(0,0,255),new V.a1(1,-1,0),new V.a0(1,1),n,a6)
n=p.a
i=new V.B(1,1,1)
i=i.w(0,Math.sqrt(i.G(i)))
a1=n.bm(new V.aO(0,2,5,6),V.eZ(0,128,0),new V.a1(1,1,0),new V.a0(1,0),i,a6)
i=p.a
n=V.aN()
h=new V.B(-1,1,1)
h=h.w(0,Math.sqrt(h.G(h)))
a2=i.bm(new V.aO(0,2,4,7),V.eZ(255,255,0),new V.a1(-1,1,0),n,h,a6)
p.d.h1(H.b([a,a0,a1,a2],[F.bB]))
p.aA()
o.sbB(0,p)
b.e=o
b.sb8(a6)
b.sbe(0,a6)
b.sbf(a6)
o=new O.di()
o.b=1.0471975511965976
o.d=new V.t(1,1,1)
g=o.c
o.c=l
l.gp().n(0,o.gaQ())
n=new D.A("boxTexture",g,o.c)
n.b=!0
o.X(n)
b.sbf(o)
b.sbe(0,r)
b.sb8(c)
a3=new M.cT()
a3.a=!0
o=O.kg(E.aE)
a3.e=o
o.aY(a3.geX(),a3.geZ())
a3.y=a3.x=a3.r=a3.f=null
a4=X.kl(a6)
a3.sb8(a6)
a3.sbe(0,a4)
a3.sbf(a6)
a3.sb8(c)
a3.sbf(k)
a3.sbe(0,r)
a3.e.n(0,q)
a3.c.sdg(0,!1)
o=M.ak
n=H.b([b,a3],[o])
i=new M.cM()
i.bj(o)
i.e=!0
i.f=!1
i.r=null
i.aY(i.gfv(),i.gfz())
i.aa(0,n)
o=s.d
if(o!==i){if(o!=null)o.gp().V(0,s.gcH())
s.d=i
i.gp().n(0,s.gcH())
s.cI()}o=new V.hu(a8)
n=u.getElementById(a8)
o.c=n
if(n==null)H.u("Failed to find controls for RadioGroup")
o.d7(0,"Silver",new B.jW(k),!0)
o.ac(0,"Gold",new B.jX(k))
o.ac(0,"Glass",new B.jY(k))
o.ac(0,"Blue Glass",new B.jZ(k))
o.ac(0,"Water Bubble",new B.k_(k))
o.ac(0,"No Reflection",new B.k0(k))
o.ac(0,"Pink Distort",new B.k1(k))
o.ac(0,"Cloak",new B.k2(k))
o.ac(0,"White and Shiny",new B.k3(k))
o=new V.i5(a7,new B.k4(k,s))
u=u.getElementById(a7)
o.c=u
if(u==null)H.u("Failed to find bumpMaps for Texture2DGroup")
o.ac(0,"../resources/BumpMap1.png",!0)
o.n(0,"../resources/BumpMap2.png")
o.n(0,"../resources/BumpMap3.png")
o.n(0,"../resources/BumpMap4.png")
o.n(0,"../resources/BumpMap5.png")
o.n(0,"../resources/ScrewBumpMap.png")
o.n(0,"../resources/CtrlPnlBumpMap.png")
u=s.Q
if(u==null)u=s.Q=D.C()
o=u.b
u=o==null?u.b=H.b([],[{func:1,ret:-1,args:[D.X]}]):o
u.push(new B.k5(b1,k))
V.ox(s)},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
jY:function jY(a){this.a=a},
jZ:function jZ(a){this.a=a},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a},
k1:function k1(a){this.a=a},
k2:function k2(a){this.a=a},
k3:function k3(a){this.a=a},
k4:function k4(a,b){this.a=a
this.b=b},
k5:function k5(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kr.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gH:function(a){return H.c8(a)},
h:function(a){return"Instance of '"+H.e(H.c9(a))+"'"}}
J.fC.prototype={
h:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iaz:1}
J.cZ.prototype={
t:function(a,b){return null==b},
h:function(a){return"null"},
gH:function(a){return 0}}
J.d_.prototype={
gH:function(a){return 0},
h:function(a){return String(a)}}
J.ho.prototype={}
J.bA.prototype={}
J.b7.prototype={
h:function(a){var u=a[$.lW()]
if(u==null)return this.ec(a)
return"JavaScript function for "+H.e(J.a3(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b5.prototype={
V:function(a,b){var u
if(!!a.fixed$length)H.u(P.y("remove"))
for(u=0;u<a.length;++u)if(J.P(a[u],b)){a.splice(u,1)
return!0}return!1},
aa:function(a,b){var u,t
if(!!a.fixed$length)H.u(P.y("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.p)(b),++t)a.push(b[t])},
B:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.d(P.ap(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.c(r,u)
r[u]=t}return r.join(b)},
hA:function(a){return this.k(a,"")},
ht:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.d(P.ap(a))}return u},
hu:function(a,b,c){return this.ht(a,b,c,null)},
hs:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.d(P.ap(a))}throw H.d(H.ko())},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
e8:function(a,b,c){if(b<0||b>a.length)throw H.d(P.Y(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.Y(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.eH(a,0)])
return H.b(a.slice(b,c),[H.eH(a,0)])},
gav:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.ko())},
dc:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.d(P.ap(a))}return!1},
bC:function(a,b){if(!!a.immutable$list)H.u(P.y("sort"))
H.dj(a,0,a.length-1,b)},
U:function(a,b){var u
for(u=0;u<a.length;++u)if(J.P(a[u],b))return!0
return!1},
h:function(a){return P.kn(a,"[","]")},
gT:function(a){return new J.a4(a,a.length)},
gH:function(a){return H.c8(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.u(P.y("set length"))
if(b<0)throw H.d(P.Y(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.d(H.bI(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.u(P.y("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bI(a,b))
a[b]=c},
$ih:1,
$io:1}
J.kq.prototype={}
J.a4.prototype={
gI:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.p(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bX.prototype={
hb:function(a,b){var u
if(typeof b!=="number")throw H.d(H.am(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbq(b)
if(this.gbq(a)===u)return 0
if(this.gbq(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbq:function(a){return a===0?1/a<0:a<0},
i1:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.y(""+a+".toInt()"))},
ca:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.y(""+a+".floor()"))},
ao:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.y(""+a+".round()"))},
dZ:function(a,b){var u
if(b>20)throw H.d(P.Y(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbq(a))return"-"+u
return u},
bg:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.Y(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.Y(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.u(P.y("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.c(t,1)
u=t[1]
if(3>=s)return H.c(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.A("0",r)},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bh:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ee:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d4(a,b)},
a9:function(a,b){return(a|0)===a?a/b|0:this.d4(a,b)},
d4:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.y("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aS:function(a,b){var u
if(a>0)u=this.d3(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fT:function(a,b){if(b<0)throw H.d(H.am(b))
return this.d3(a,b)},
d3:function(a,b){return b>31?0:a>>>b},
$iM:1,
$iac:1}
J.cY.prototype={$iw:1}
J.cX.prototype={}
J.b6.prototype={
Y:function(a,b){if(b<0)throw H.d(H.bI(a,b))
if(b>=a.length)H.u(H.bI(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.d(H.bI(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!=="string")throw H.d(P.kX(b,null,null))
return a+b},
aW:function(a,b,c,d){var u,t
c=P.bd(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a7:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.Y(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a4:function(a,b){return this.a7(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.u(H.am(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.d(P.hx(b,null))
if(b>c)throw H.d(P.hx(b,null))
if(c>a.length)throw H.d(P.hx(c,null))
return a.substring(b,c)},
ab:function(a,b){return this.q(a,b,null)},
i4:function(a){return a.toLowerCase()},
A:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ak:function(a,b){var u=b-a.length
if(u<=0)return a
return this.A(" ",u)+a},
bp:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.Y(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dL:function(a,b){return this.bp(a,b,0)},
h:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ij:1}
H.m.prototype={
gl:function(a){return this.a.length},
i:function(a,b){return C.a.Y(this.a,b)},
$ar:function(){return[P.w]},
$ah:function(){return[P.w]},
$ao:function(){return[P.w]}}
H.fg.prototype={}
H.d3.prototype={
gT:function(a){return new H.bZ(this,this.gl(this))},
bz:function(a,b){return this.eb(0,b)}}
H.bZ.prototype={
gI:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.cz(s),q=r.gl(s)
if(t.b!==q)throw H.d(P.ap(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.J(s,u);++t.c
return!0}}
H.fR.prototype={
gT:function(a){return new H.fS(J.b_(this.a),this.b)},
gl:function(a){return J.ae(this.a)},
J:function(a,b){return this.b.$1(J.eJ(this.a,b))},
$ah:function(a,b){return[b]}}
H.fS.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.a=u.c.$1(t.gI(t))
return!0}u.a=null
return!1},
gI:function(a){return this.a}}
H.fT.prototype={
gl:function(a){return J.ae(this.a)},
J:function(a,b){return this.b.$1(J.eJ(this.a,b))},
$ad3:function(a,b){return[b]},
$ah:function(a,b){return[b]}}
H.cj.prototype={
gT:function(a){return new H.iY(J.b_(this.a),this.b)}}
H.iY.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(t.$1(u.gI(u)))return!0
return!1},
gI:function(a){var u=this.a
return u.gI(u)}}
H.cU.prototype={}
H.iz.prototype={
m:function(a,b,c){throw H.d(P.y("Cannot modify an unmodifiable list"))}}
H.dA.prototype={}
H.f1.prototype={
h:function(a){return P.kv(this)},
m:function(a,b,c){return H.mt()},
$iS:1}
H.f2.prototype={
gl:function(a){return this.a},
bn:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bn(0,b))return
return this.cS(b)},
cS:function(a){return this.b[a]},
B:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cS(s))}}}
H.im.prototype={
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
H.hk.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fE.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.iy.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ka.prototype={
$1:function(a){if(!!J.N(a).$ibp)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.eg.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bQ.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
gi5:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i1.prototype={}
H.hU.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.eI(u)+"'"}}
H.bN.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bN))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.c8(this.a)
else u=typeof t!=="object"?J.cG(t):H.c8(t)
return(u^H.c8(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.c9(u))+"'")}}
H.eW.prototype={
h:function(a){return this.a}}
H.hE.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.O.prototype={
gl:function(a){return this.a},
ghz:function(a){return this.a===0},
ga5:function(a){return new H.fI(this,[H.eH(this,0)])},
bn:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cP(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cP(t,b)}else return s.hw(b)},
hw:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cd(u.bK(t,u.cc(a)),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bk(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bk(r,b)
s=t==null?null:t.b
return s}else return q.hx(b)},
hx:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bK(r,s.cc(a))
t=s.cd(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cK(u==null?s.b=s.bS():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cK(t==null?s.c=s.bS():t,b,c)}else s.hy(b,c)},
hy:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bS()
u=r.cc(a)
t=r.bK(q,u)
if(t==null)r.bW(q,u,[r.bT(a,b)])
else{s=r.cd(t,a)
if(s>=0)t[s].b=b
else t.push(r.bT(a,b))}},
B:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.d(P.ap(u))
t=t.c}},
cK:function(a,b,c){var u=this.bk(a,b)
if(u==null)this.bW(a,b,this.bT(b,c))
else u.b=c},
eK:function(){this.r=this.r+1&67108863},
bT:function(a,b){var u,t=this,s=new H.fH(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eK()
return s},
cc:function(a){return J.cG(a)&0x3ffffff},
cd:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.P(a[t].a,b))return t
return-1},
h:function(a){return P.kv(this)},
bk:function(a,b){return a[b]},
bK:function(a,b){return a[b]},
bW:function(a,b,c){a[b]=c},
eD:function(a,b){delete a[b]},
cP:function(a,b){return this.bk(a,b)!=null},
bS:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bW(t,u,t)
this.eD(t,u)
return t}}
H.fH.prototype={}
H.fI.prototype={
gl:function(a){return this.a.a},
gT:function(a){var u=this.a,t=new H.fJ(u,u.r)
t.c=u.e
return t}}
H.fJ.prototype={
gI:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.ap(t))
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
H.fD.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imX:1}
H.c3.prototype={$ic3:1}
H.ba.prototype={$iba:1}
H.d7.prototype={
gl:function(a){return a.length},
$iz:1,
$az:function(){}}
H.c4.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]},
m:function(a,b,c){H.ay(b,a,a.length)
a[b]=c},
$ar:function(){return[P.M]},
$ih:1,
$ah:function(){return[P.M]},
$io:1,
$ao:function(){return[P.M]}}
H.d8.prototype={
m:function(a,b,c){H.ay(b,a,a.length)
a[b]=c},
$ar:function(){return[P.w]},
$ih:1,
$ah:function(){return[P.w]},
$io:1,
$ao:function(){return[P.w]}}
H.hd.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.he.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.hf.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.hg.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.hh.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.d9.prototype={
gl:function(a){return a.length},
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.c5.prototype={
gl:function(a){return a.length},
i:function(a,b){H.ay(b,a,a.length)
return a[b]},
$ic5:1,
$ibz:1}
H.cn.prototype={}
H.co.prototype={}
H.cp.prototype={}
H.cq.prototype={}
P.j_.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.iZ.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.j0.prototype={
$0:function(){this.a.$0()}}
P.j1.prototype={
$0:function(){this.a.$0()}}
P.en.prototype={
en:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bH(new P.jv(this,b),0),a)
else throw H.d(P.y("`setTimeout()` not found."))},
eo:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bH(new P.ju(this,a,Date.now(),b),0),a)
else throw H.d(P.y("Periodic timer."))},
$idt:1}
P.jv.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.ju.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.ee(u,q)}s.c=r
t.d.$1(s)}}
P.dJ.prototype={}
P.dn.prototype={}
P.hX.prototype={}
P.dt.prototype={}
P.jE.prototype={}
P.jN.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dc():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.h(0)
throw u}}
P.jf.prototype={
hY:function(a){var u,t,s,r=null
try{if(C.f===$.al){a.$0()
return}P.o1(r,r,this,a)}catch(s){u=H.ad(s)
t=H.kM(s)
P.lH(r,r,this,u,t)}},
hZ:function(a,b){var u,t,s,r=null
try{if(C.f===$.al){a.$1(b)
return}P.o2(r,r,this,a,b)}catch(s){u=H.ad(s)
t=H.kM(s)
P.lH(r,r,this,u,t)}},
i_:function(a,b){return this.hZ(a,b,null)},
h9:function(a){return new P.jg(this,a)},
dd:function(a,b){return new P.jh(this,a,b)}}
P.jg.prototype={
$0:function(){return this.a.hY(this.b)}}
P.jh.prototype={
$1:function(a){return this.a.i_(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jc.prototype={
gT:function(a){var u=new P.dY(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
U:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.ey(b)
return t}},
ey:function(a){var u=this.d
if(u==null)return!1
return this.bI(this.cT(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cL(u==null?s.b=P.kD():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cL(t==null?s.c=P.kD():t,b)}else return s.er(0,b)},
er:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kD()
u=s.cN(b)
t=r[u]
if(t==null)r[u]=[s.bF(b)]
else{if(s.bI(t,b)>=0)return!1
t.push(s.bF(b))}return!0},
V:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fI(this.c,b)
else return this.fH(0,b)},
fH:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cT(r,b)
t=s.bI(u,b)
if(t<0)return!1
s.d5(u.splice(t,1)[0])
return!0},
cL:function(a,b){if(a[b]!=null)return!1
a[b]=this.bF(b)
return!0},
fI:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.d5(u)
delete a[b]
return!0},
cM:function(){this.r=1073741823&this.r+1},
bF:function(a){var u,t=this,s=new P.jd(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cM()
return s},
d5:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cM()},
cN:function(a){return J.cG(a)&1073741823},
cT:function(a,b){return a[this.cN(b)]},
bI:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.P(a[t].a,b))return t
return-1}}
P.jd.prototype={}
P.dY.prototype={
gI:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.ap(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fK.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.fL.prototype={$ih:1,$io:1}
P.r.prototype={
gT:function(a){return new H.bZ(a,this.gl(a))},
J:function(a,b){return this.i(a,b)},
B:function(a,b){var u,t=this.gl(a)
for(u=0;u<t;++u){b.$1(this.i(a,u))
if(t!==this.gl(a))throw H.d(P.ap(a))}},
i3:function(a,b){var u,t,s=this,r=H.b([],[H.ok(s,a,"r",0)])
C.b.sl(r,s.gl(a))
for(u=0;u<s.gl(a);++u){t=s.i(a,u)
if(u>=r.length)return H.c(r,u)
r[u]=t}return r},
i2:function(a){return this.i3(a,!0)},
hq:function(a,b,c,d){var u
P.bd(b,c,this.gl(a))
for(u=b;u<c;++u)this.m(a,u,d)},
h:function(a){return P.kn(a,"[","]")}}
P.fO.prototype={}
P.fP.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.aH.prototype={
B:function(a,b){var u,t
for(u=J.b_(this.ga5(a));u.v();){t=u.gI(u)
b.$2(t,this.i(a,t))}},
gl:function(a){return J.ae(this.ga5(a))},
h:function(a){return P.kv(a)},
$iS:1}
P.jw.prototype={
m:function(a,b,c){throw H.d(P.y("Cannot modify unmodifiable map"))}}
P.fQ.prototype={
i:function(a,b){return J.cF(this.a,b)},
m:function(a,b,c){J.kb(this.a,b,c)},
B:function(a,b){J.kU(this.a,b)},
gl:function(a){return J.ae(this.a)},
h:function(a){return J.a3(this.a)},
$iS:1}
P.dB.prototype={}
P.jj.prototype={
aa:function(a,b){var u
for(u=J.b_(b);u.v();)this.n(0,u.gI(u))},
h:function(a){return P.kn(this,"{","}")},
J:function(a,b){var u,t,s
P.li(b,"index")
for(u=P.nm(this,this.r),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.d(P.K(b,this,"index",null,t))},
$ih:1}
P.dZ.prototype={}
P.et.prototype={}
P.eS.prototype={
hE:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bd(a0,a1,b.length)
u=$.ma()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.a.D(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jR(C.a.D(b,n))
j=H.jR(C.a.D(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.c(u,i)
h=u[i]
if(h>=0){i=C.a.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.T("")
g=r.a+=C.a.q(b,s,t)
r.a=g+H.bw(m)
s=n
continue}}throw H.d(P.R("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.q(b,s,a1)
f=g.length
if(q>=0)P.kY(b,p,a1,q,o,f)
else{e=C.c.bh(f-1,4)+1
if(e===1)throw H.d(P.R(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aW(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.kY(b,p,a1,q,o,d)
else{e=C.c.bh(d,4)
if(e===1)throw H.d(P.R(c,b,a1))
if(e>1)b=C.a.aW(b,a1,a1,e===2?"==":"=")}return b}}
P.eT.prototype={}
P.eY.prototype={}
P.f3.prototype={}
P.fi.prototype={}
P.fy.prototype={
h:function(a){return this.a}}
P.fx.prototype={
eA:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.T("")
if(r>b)q.a+=C.a.q(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.ml(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iI.prototype={
ghp:function(){return C.N}}
P.iK.prototype={
c1:function(a){var u,t,s=P.bd(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jC(u)
if(t.eF(a,0,s)!==s)t.d6(J.mh(a,s-1),0)
return new Uint8Array(u.subarray(0,H.nD(0,t.b,u.length)))}}
P.jC.prototype={
d6:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eF:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.Y(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.D(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.d6(r,C.a.D(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iJ.prototype={
c1:function(a){var u,t,s,r,q,p,o,n,m=P.n8(!1,a,0,null)
if(m!=null)return m
u=P.bd(0,null,J.ae(a))
t=P.lJ(a,0,u)
if(t>0){s=P.cc(a,0,t)
if(t===u)return s
r=new P.T(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.T("")
o=new P.jB(!1,r)
o.c=p
o.hc(a,q,u)
if(o.e>0){H.u(P.R("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bw(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jB.prototype={
hc:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.cz(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.al()
if((r&192)!==128){q=P.R(k+C.c.bg(r,16),a,s)
throw H.d(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.c(C.v,q)
if(j<=C.v[q]){q=P.R("Overlong encoding of 0x"+C.c.bg(j,16),a,s-h-1)
throw H.d(q)}if(j>1114111){q=P.R("Character outside valid Unicode range: 0x"+C.c.bg(j,16),a,s-h-1)
throw H.d(q)}if(!l.c||j!==65279)t.a+=H.bw(j)
l.c=!1}for(q=s<c;q;){p=P.lJ(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.cc(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.P()
if(r<0){m=P.R("Negative UTF-8 code unit: -0x"+C.c.bg(-r,16),a,n-1)
throw H.d(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.R(k+C.c.bg(r,16),a,n-1)
throw H.d(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.az.prototype={}
P.a7.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.a7&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.c.aS(u,30))&1073741823},
h:function(a){var u=this,t=P.mu(H.mT(u)),s=P.cP(H.mR(u)),r=P.cP(H.mN(u)),q=P.cP(H.mO(u)),p=P.cP(H.mQ(u)),o=P.cP(H.mS(u)),n=P.mv(H.mP(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.M.prototype={}
P.b1.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.b1&&this.a===b.a},
gH:function(a){return C.c.gH(this.a)},
h:function(a){var u,t,s,r=new P.ff(),q=this.a
if(q<0)return"-"+new P.b1(0-q).h(0)
u=r.$1(C.c.a9(q,6e7)%60)
t=r.$1(C.c.a9(q,1e6)%60)
s=new P.fe().$1(q%1e6)
return""+C.c.a9(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.fe.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.ff.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bp.prototype={}
P.dc.prototype={
h:function(a){return"Throw of null."}}
P.ai.prototype={
gbH:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbG:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbH()+o+u
if(!q.a)return t
s=q.gbG()
r=P.kk(q.b)
return t+s+": "+r}}
P.bx.prototype={
gbH:function(){return"RangeError"},
gbG:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fA.prototype={
gbH:function(){return"RangeError"},
gbG:function(){var u,t=this.b
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
P.cb.prototype={
h:function(a){return"Bad state: "+this.a}}
P.f0.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kk(u)+"."}}
P.hn.prototype={
h:function(a){return"Out of Memory"},
$ibp:1}
P.dl.prototype={
h:function(a){return"Stack Overflow"},
$ibp:1}
P.f8.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dR.prototype={
h:function(a){return"Exception: "+this.a}}
P.fr.prototype={
h:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.q(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.D(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.Y(f,q)
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
P.ft.prototype={}
P.w.prototype={}
P.h.prototype={
bz:function(a,b){return new H.cj(this,b,[H.kL(this,"h",0)])},
gl:function(a){var u,t=this.gT(this)
for(u=0;t.v();)++u
return u},
gaL:function(a){var u,t=this.gT(this)
if(!t.v())throw H.d(H.ko())
u=t.gI(t)
if(t.v())throw H.d(H.mA())
return u},
J:function(a,b){var u,t,s
P.li(b,"index")
for(u=this.gT(this),t=0;u.v();){s=u.gI(u)
if(b===t)return s;++t}throw H.d(P.K(b,this,"index",null,t))},
h:function(a){return P.mz(this,"(",")")}}
P.fB.prototype={}
P.o.prototype={$ih:1}
P.S.prototype={}
P.bb.prototype={
gH:function(a){return P.a_.prototype.gH.call(this,this)},
h:function(a){return"null"}}
P.ac.prototype={}
P.a_.prototype={constructor:P.a_,$ia_:1,
t:function(a,b){return this===b},
gH:function(a){return H.c8(this)},
h:function(a){return"Instance of '"+H.e(H.c9(this))+"'"},
toString:function(){return this.h(this)}}
P.j.prototype={}
P.T.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iG.prototype={
$2:function(a,b){var u,t,s,r=J.cA(b).dL(b,"=")
if(r===-1){if(b!=="")J.kb(a,P.kH(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.q(b,0,r)
t=C.a.ab(b,r+1)
s=this.a
J.kb(a,P.kH(u,0,u.length,s,!0),P.kH(t,0,t.length,s,!0))}return a}}
P.iC.prototype={
$2:function(a,b){throw H.d(P.R("Illegal IPv4 address, "+a,this.a,b))}}
P.iE.prototype={
$2:function(a,b){throw H.d(P.R("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iF.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.cC(C.a.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.P()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bC.prototype={
ge1:function(){return this.b},
gcb:function(a){var u=this.c
if(u==null)return""
if(C.a.a4(u,"["))return C.a.q(u,1,u.length-1)
return u},
gbt:function(a){var u=this.d
if(u==null)return P.lA(this.a)
return u},
gcp:function(a){var u=this.f
return u==null?"":u},
gdG:function(){var u=this.r
return u==null?"":u},
cq:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a4(u,"/"))u="/"+u
s=P.kF(null,0,0,b)
return new P.bC(q,o,m,n,u,s,r.r)},
gbd:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.j
u=this.Q=new P.dB(P.lt(t==null?"":t),[u,u])
t=u}return t},
gdH:function(){return this.c!=null},
gdK:function(){return this.f!=null},
gdI:function(){return this.r!=null},
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
if(!!J.N(b).$ikz)if(s.a==b.gbA())if(s.c!=null===b.gdH())if(s.b==b.ge1())if(s.gcb(s)==b.gcb(b))if(s.gbt(s)==b.gbt(b))if(s.e===b.gdU(b)){u=s.f
t=u==null
if(!t===b.gdK()){if(t)u=""
if(u===b.gcp(b)){u=s.r
t=u==null
if(!t===b.gdI()){if(t)u=""
u=u===b.gdG()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gH:function(a){var u=this.z
return u==null?this.z=C.a.gH(this.h(0)):u},
$ikz:1,
gbA:function(){return this.a},
gdU:function(a){return this.e}}
P.jx.prototype={
$1:function(a){throw H.d(P.R("Invalid port",this.a,this.b+1))}}
P.jy.prototype={
$1:function(a){return P.eu(C.X,a,C.e,!1)}}
P.jA.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.eu(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.eu(C.h,b,C.e,!0))}}}
P.jz.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.b_(b),t=this.a;u.v();)t.$2(a,u.gI(u))}}
P.iB.prototype={
ge0:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.c(o,0)
u=q.a
o=o[0]+1
t=C.a.bp(u,"?",o)
s=u.length
if(t>=0){r=P.cv(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.j5("data",p,p,p,P.cv(u,o,s,C.z,!1),r,p)},
h:function(a){var u,t=this.b
if(0>=t.length)return H.c(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jI.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jH.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.c(u,a)
u=u[a]
J.mi(u,0,96,b)
return u},
$S:18}
P.jJ.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.D(b,s)^96
if(r>=t)return H.c(a,r)
a[r]=c}}}
P.jK.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.D(b,0),t=C.a.D(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.c(a,r)
a[r]=c}}}
P.jm.prototype={
gdH:function(){return this.c>0},
gdJ:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.C()
t=this.e
if(typeof t!=="number")return H.x(t)
t=u+1<t
u=t}else u=!1
return u},
gdK:function(){var u=this.f
if(typeof u!=="number")return u.P()
return u<this.r},
gdI:function(){return this.r<this.a.length},
gcU:function(){return this.b===4&&C.a.a4(this.a,"http")},
gcV:function(){return this.b===5&&C.a.a4(this.a,"https")},
gbA:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcU())q=t.x="http"
else if(t.gcV()){t.x="https"
q="https"}else if(q===4&&C.a.a4(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a4(t.a,r)){t.x=r
q=r}else{q=C.a.q(t.a,0,q)
t.x=q}return q},
ge1:function(){var u=this.c,t=this.b+3
return u>t?C.a.q(this.a,t,u-1):""},
gcb:function(a){var u=this.c
return u>0?C.a.q(this.a,u,this.d):""},
gbt:function(a){var u,t=this
if(t.gdJ()){u=t.d
if(typeof u!=="number")return u.C()
return P.cC(C.a.q(t.a,u+1,t.e),null,null)}if(t.gcU())return 80
if(t.gcV())return 443
return 0},
gdU:function(a){return C.a.q(this.a,this.e,this.f)},
gcp:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.P()
return u<t?C.a.q(this.a,u+1,t):""},
gdG:function(){var u=this.r,t=this.a
return u<t.length?C.a.ab(t,u+1):""},
gbd:function(){var u=this,t=u.f
if(typeof t!=="number")return t.P()
if(t>=u.r)return C.Y
t=P.j
return new P.dB(P.lt(u.gcp(u)),[t,t])},
cq:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbA(),m=n==="file",l=p.c,k=l>0?C.a.q(p.a,p.b+3,l):"",j=p.gdJ()?p.gbt(p):o
l=p.c
if(l>0)u=C.a.q(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.q(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a4(t,"/"))t="/"+t
r=P.kF(o,0,0,b)
s=p.r
q=s<l.length?C.a.ab(l,s+1):o
return new P.bC(n,k,u,j,t,r,q)},
gH:function(a){var u=this.y
return u==null?this.y=C.a.gH(this.a):u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.N(b).$ikz&&this.a===b.h(0)},
h:function(a){return this.a},
$ikz:1}
P.j5.prototype={}
W.n.prototype={}
W.eK.prototype={
gl:function(a){return a.length}}
W.eL.prototype={
h:function(a){return String(a)}}
W.eM.prototype={
h:function(a){return String(a)}}
W.bl.prototype={$ibl:1}
W.bm.prototype={$ibm:1}
W.bn.prototype={
cv:function(a,b,c){if(c!=null)return a.getContext(b,P.ob(c))
return a.getContext(b)},
e3:function(a,b){return this.cv(a,b,null)},
$ibn:1}
W.b0.prototype={
gl:function(a){return a.length}}
W.f4.prototype={
gl:function(a){return a.length}}
W.H.prototype={$iH:1}
W.bR.prototype={
gl:function(a){return a.length}}
W.f5.prototype={}
W.af.prototype={}
W.aq.prototype={}
W.f6.prototype={
gl:function(a){return a.length}}
W.f7.prototype={
gl:function(a){return a.length}}
W.fa.prototype={
gl:function(a){return a.length}}
W.aj.prototype={$iaj:1}
W.fb.prototype={
h:function(a){return String(a)}}
W.cR.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[[P.aa,P.ac]]},
$ar:function(){return[[P.aa,P.ac]]},
$ih:1,
$ah:function(){return[[P.aa,P.ac]]},
$io:1,
$ao:function(){return[[P.aa,P.ac]]}}
W.cS.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaK(a))+" x "+H.e(this.gaE(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.N(b)
if(!u.$iaa)return!1
return a.left===u.gbr(b)&&a.top===u.gbw(b)&&this.gaK(a)===u.gaK(b)&&this.gaE(a)===u.gaE(b)},
gH:function(a){return W.ly(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(this.gaK(a)),C.d.gH(this.gaE(a)))},
gde:function(a){return a.bottom},
gaE:function(a){return a.height},
gbr:function(a){return a.left},
gcr:function(a){return a.right},
gbw:function(a){return a.top},
gaK:function(a){return a.width},
$iaa:1,
$aaa:function(){return[P.ac]}}
W.fc.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[P.j]},
$ar:function(){return[P.j]},
$ih:1,
$ah:function(){return[P.j]},
$io:1,
$ao:function(){return[P.j]}}
W.fd.prototype={
gl:function(a){return a.length}}
W.j3.prototype={
gl:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gT:function(a){var u=this.i2(this)
return new J.a4(u,u.length)},
$ar:function(){return[W.Q]},
$ah:function(){return[W.Q]},
$ao:function(){return[W.Q]}}
W.Q.prototype={
gh8:function(a){return new W.j6(a)},
gc0:function(a){return new W.j3(a,a.children)},
gdh:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.P()
if(s<0)s=-s*0
if(typeof r!=="number")return r.P()
if(r<0)r=-r*0
return new P.aa(u,t,s,r,[P.ac])},
h:function(a){return a.localName},
ai:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.l4
if(u==null){u=H.b([],[W.aL])
t=new W.db(u)
u.push(W.lx(null))
u.push(W.lz())
$.l4=t
d=t}else d=u
u=$.l3
if(u==null){u=new W.ev(d)
$.l3=u
c=u}else{u.a=d
c=u}}if($.aD==null){u=document
t=u.implementation.createHTMLDocument("")
$.aD=t
$.kj=t.createRange()
s=$.aD.createElement("base")
s.href=u.baseURI
$.aD.head.appendChild(s)}u=$.aD
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aD
if(!!this.$ibm)r=u.body
else{r=u.createElement(a.tagName)
$.aD.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.U(C.V,a.tagName)){$.kj.selectNodeContents(r)
q=$.kj.createContextualFragment(b)}else{r.innerHTML=b
q=$.aD.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aD.body
if(r==null?u!=null:r!==u)J.kV(r)
c.cw(q)
document.adoptNode(q)
return q},
hf:function(a,b,c){return this.ai(a,b,c,null)},
e5:function(a,b){a.textContent=null
a.appendChild(this.ai(a,b,null,null))},
$iQ:1,
gdX:function(a){return a.tagName}}
W.fh.prototype={
$1:function(a){return!!J.N(a).$iQ}}
W.i.prototype={$ii:1}
W.f.prototype={
h0:function(a,b,c,d){if(c!=null)this.es(a,b,c,!1)},
es:function(a,b,c,d){return a.addEventListener(b,H.bH(c,1),!1)}}
W.ar.prototype={$iar:1}
W.bU.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.ar]},
$ar:function(){return[W.ar]},
$ih:1,
$ah:function(){return[W.ar]},
$io:1,
$ao:function(){return[W.ar]},
$ibU:1}
W.fm.prototype={
gl:function(a){return a.length}}
W.fq.prototype={
gl:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.fw.prototype={
gl:function(a){return a.length}}
W.bW.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.E]},
$ar:function(){return[W.E]},
$ih:1,
$ah:function(){return[W.E]},
$io:1,
$ao:function(){return[W.E]}}
W.aG.prototype={$iaG:1,
gdi:function(a){return a.data}}
W.br.prototype={$ibr:1}
W.bt.prototype={$ibt:1}
W.fM.prototype={
h:function(a){return String(a)}}
W.h6.prototype={
gl:function(a){return a.length}}
W.c1.prototype={$ic1:1}
W.h7.prototype={
i:function(a,b){return P.aV(a.get(b))},
B:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aV(u.value[1]))}},
ga5:function(a){var u=H.b([],[P.j])
this.B(a,new W.h8(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.y("Not supported"))},
$iS:1,
$aS:function(){return[P.j,null]}}
W.h8.prototype={
$2:function(a,b){return this.a.push(a)}}
W.h9.prototype={
i:function(a,b){return P.aV(a.get(b))},
B:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aV(u.value[1]))}},
ga5:function(a){var u=H.b([],[P.j])
this.B(a,new W.ha(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.y("Not supported"))},
$iS:1,
$aS:function(){return[P.j,null]}}
W.ha.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aJ.prototype={$iaJ:1}
W.hb.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aJ]},
$ar:function(){return[W.aJ]},
$ih:1,
$ah:function(){return[W.aJ]},
$io:1,
$ao:function(){return[W.aJ]}}
W.au.prototype={$iau:1}
W.a2.prototype={
gaL:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.d(P.ll("No elements"))
if(t>1)throw H.d(P.ll("More than one element"))
return u.firstChild},
aa:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.c(t,b)
u.replaceChild(c,t[b])},
gT:function(a){var u=this.a.childNodes
return new W.cV(u,u.length)},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$ar:function(){return[W.E]},
$ah:function(){return[W.E]},
$ao:function(){return[W.E]}}
W.E.prototype={
hU:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
hW:function(a,b){var u,t
try{u=a.parentNode
J.mf(u,b,a)}catch(t){H.ad(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.ea(a):u},
fJ:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.da.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.E]},
$ar:function(){return[W.E]},
$ih:1,
$ah:function(){return[W.E]},
$io:1,
$ao:function(){return[W.E]}}
W.aM.prototype={$iaM:1,
gl:function(a){return a.length}}
W.hq.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aM]},
$ar:function(){return[W.aM]},
$ih:1,
$ah:function(){return[W.aM]},
$io:1,
$ao:function(){return[W.aM]}}
W.hC.prototype={
i:function(a,b){return P.aV(a.get(b))},
B:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aV(u.value[1]))}},
ga5:function(a){var u=H.b([],[P.j])
this.B(a,new W.hD(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.y("Not supported"))},
$iS:1,
$aS:function(){return[P.j,null]}}
W.hD.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hF.prototype={
gl:function(a){return a.length}}
W.aP.prototype={$iaP:1}
W.hQ.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aP]},
$ar:function(){return[W.aP]},
$ih:1,
$ah:function(){return[W.aP]},
$io:1,
$ao:function(){return[W.aP]}}
W.aQ.prototype={$iaQ:1}
W.hR.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aQ]},
$ar:function(){return[W.aQ]},
$ih:1,
$ah:function(){return[W.aQ]},
$io:1,
$ao:function(){return[W.aQ]}}
W.aR.prototype={$iaR:1,
gl:function(a){return a.length}}
W.hV.prototype={
i:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
B:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga5:function(a){var u=H.b([],[P.j])
this.B(a,new W.hW(u))
return u},
gl:function(a){return a.length},
$iS:1,
$aS:function(){return[P.j,P.j]}}
W.hW.prototype={
$2:function(a,b){return this.a.push(a)}}
W.av.prototype={$iav:1}
W.dp.prototype={
ai:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
u=W.mw("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a2(t).aa(0,new W.a2(u))
return t}}
W.hZ.prototype={
ai:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ai(u.createElement("table"),b,c,d)
u.toString
u=new W.a2(u)
s=u.gaL(u)
s.toString
u=new W.a2(s)
r=u.gaL(u)
t.toString
r.toString
new W.a2(t).aa(0,new W.a2(r))
return t}}
W.i_.prototype={
ai:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ai(u.createElement("table"),b,c,d)
u.toString
u=new W.a2(u)
s=u.gaL(u)
t.toString
s.toString
new W.a2(t).aa(0,new W.a2(s))
return t}}
W.cd.prototype={$icd:1}
W.aS.prototype={$iaS:1}
W.aw.prototype={$iaw:1}
W.i2.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aw]},
$ar:function(){return[W.aw]},
$ih:1,
$ah:function(){return[W.aw]},
$io:1,
$ao:function(){return[W.aw]}}
W.i3.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aS]},
$ar:function(){return[W.aS]},
$ih:1,
$ah:function(){return[W.aS]},
$io:1,
$ao:function(){return[W.aS]}}
W.ie.prototype={
gl:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.by.prototype={$iby:1}
W.ij.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aT]},
$ar:function(){return[W.aT]},
$ih:1,
$ah:function(){return[W.aT]},
$io:1,
$ao:function(){return[W.aT]}}
W.ik.prototype={
gl:function(a){return a.length}}
W.bf.prototype={}
W.iH.prototype={
h:function(a){return String(a)}}
W.iX.prototype={
gl:function(a){return a.length}}
W.bh.prototype={
ghi:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.y("deltaY is not supported"))},
ghh:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.y("deltaX is not supported"))},
$ibh:1}
W.ck.prototype={
fK:function(a,b){return a.requestAnimationFrame(H.bH(b,1))},
eE:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.j4.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.H]},
$ar:function(){return[W.H]},
$ih:1,
$ah:function(){return[W.H]},
$io:1,
$ao:function(){return[W.H]}}
W.dM.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.N(b)
if(!u.$iaa)return!1
return a.left===u.gbr(b)&&a.top===u.gbw(b)&&a.width===u.gaK(b)&&a.height===u.gaE(b)},
gH:function(a){return W.ly(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(a.width),C.d.gH(a.height))},
gaE:function(a){return a.height},
gaK:function(a){return a.width}}
W.j9.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aF]},
$ar:function(){return[W.aF]},
$ih:1,
$ah:function(){return[W.aF]},
$io:1,
$ao:function(){return[W.aF]}}
W.e3.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.E]},
$ar:function(){return[W.E]},
$ih:1,
$ah:function(){return[W.E]},
$io:1,
$ao:function(){return[W.E]}}
W.jn.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aR]},
$ar:function(){return[W.aR]},
$ih:1,
$ah:function(){return[W.aR]},
$io:1,
$ao:function(){return[W.aR]}}
W.jq.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.av]},
$ar:function(){return[W.av]},
$ih:1,
$ah:function(){return[W.av]},
$io:1,
$ao:function(){return[W.av]}}
W.j2.prototype={
B:function(a,b){var u,t,s,r,q
for(u=this.ga5(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.p)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga5:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.j])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.c(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aS:function(){return[P.j,P.j]}}
W.j6.prototype={
i:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga5(this).length}}
W.j7.prototype={}
W.j8.prototype={
$1:function(a){return this.a.$1(a)}}
W.cl.prototype={
ej:function(a){var u
if($.cm.ghz($.cm)){for(u=0;u<262;++u)$.cm.m(0,C.U[u],W.om())
for(u=0;u<12;++u)$.cm.m(0,C.p[u],W.on())}},
aT:function(a){return $.mb().U(0,W.bS(a))},
au:function(a,b,c){var u=$.cm.i(0,H.e(W.bS(a))+"::"+b)
if(u==null)u=$.cm.i(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaL:1}
W.J.prototype={
gT:function(a){return new W.cV(a,this.gl(a))}}
W.db.prototype={
aT:function(a){return C.b.dc(this.a,new W.hj(a))},
au:function(a,b,c){return C.b.dc(this.a,new W.hi(a,b,c))},
$iaL:1}
W.hj.prototype={
$1:function(a){return a.aT(this.a)}}
W.hi.prototype={
$1:function(a){return a.au(this.a,this.b,this.c)}}
W.eb.prototype={
em:function(a,b,c,d){var u,t,s
this.a.aa(0,c)
u=b.bz(0,new W.jk())
t=b.bz(0,new W.jl())
this.b.aa(0,u)
s=this.c
s.aa(0,C.w)
s.aa(0,t)},
aT:function(a){return this.a.U(0,W.bS(a))},
au:function(a,b,c){var u=this,t=W.bS(a),s=u.c
if(s.U(0,H.e(t)+"::"+b))return u.d.h3(c)
else if(s.U(0,"*::"+b))return u.d.h3(c)
else{s=u.b
if(s.U(0,H.e(t)+"::"+b))return!0
else if(s.U(0,"*::"+b))return!0
else if(s.U(0,H.e(t)+"::*"))return!0
else if(s.U(0,"*::*"))return!0}return!1},
$iaL:1}
W.jk.prototype={
$1:function(a){return!C.b.U(C.p,a)}}
W.jl.prototype={
$1:function(a){return C.b.U(C.p,a)}}
W.js.prototype={
au:function(a,b,c){if(this.ed(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.U(0,b)
return!1}}
W.jt.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jr.prototype={
aT:function(a){var u=J.N(a)
if(!!u.$ica)return!1
u=!!u.$ik
if(u&&W.bS(a)==="foreignObject")return!1
if(u)return!0
return!1},
au:function(a,b,c){if(b==="is"||C.a.a4(b,"on"))return!1
return this.aT(a)},
$iaL:1}
W.cV.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cF(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gI:function(a){return this.d}}
W.aL.prototype={}
W.ji.prototype={}
W.ev.prototype={
cw:function(a){new W.jD(this).$2(a,null)},
b4:function(a,b){if(b==null)J.kV(a)
else b.removeChild(a)},
fO:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mj(a)
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
try{t=J.a3(a)}catch(r){H.ad(r)}try{s=W.bS(a)
this.fN(a,b,p,t,s,o,n)}catch(r){if(H.ad(r) instanceof P.ai)throw r
else{this.b4(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fN:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.b4(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aT(a)){p.b4(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.au(a,"is",g)){p.b4(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga5(f)
t=H.b(u.slice(0),[H.eH(u,0)])
for(s=f.ga5(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.c(t,s)
r=t[s]
if(!p.a.au(a,J.mm(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.N(a).$icd)p.cw(a.content)}}
W.jD.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fO(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b4(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ad(s)
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
W.cr.prototype={}
W.cs.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.eh.prototype={}
W.el.prototype={}
W.em.prototype={}
W.ct.prototype={}
W.cu.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
P.jo.prototype={
dF:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
by:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.N(a)
if(!!u.$ia7)return new Date(a.a)
if(!!u.$imX)throw H.d(P.ix("structured clone of RegExp"))
if(!!u.$iar)return a
if(!!u.$ibl)return a
if(!!u.$ibU)return a
if(!!u.$iaG)return a
if(!!u.$ic3||!!u.$iba||!!u.$ic1)return a
if(!!u.$iS){t=p.dF(a)
s=p.b
r=s.length
if(t>=r)return H.c(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.c(s,t)
s[t]=q
u.B(a,new P.jp(o,p))
return o.a}if(!!u.$io){t=p.dF(a)
o=p.b
if(t>=o.length)return H.c(o,t)
q=o[t]
if(q!=null)return q
return p.he(a,t)}throw H.d(P.ix("structured clone of other type"))},
he:function(a,b){var u,t=J.cz(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.c(q,b)
q[b]=r
for(u=0;u<s;++u){q=this.by(t.i(a,u))
if(u>=r.length)return H.c(r,u)
r[u]=q}return r}}
P.jp.prototype={
$2:function(a,b){this.a.a[a]=this.b.by(b)},
$S:3}
P.es.prototype={$iaG:1,
gdi:function(a){return this.a}}
P.jO.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.ek.prototype={}
P.fn.prototype={
gb1:function(){var u=this.b,t=H.kL(u,"r",0)
return new H.fR(new H.cj(u,new P.fo(),[t]),new P.fp(),[t,W.Q])},
B:function(a,b){C.b.B(P.ku(this.gb1(),!1,W.Q),b)},
m:function(a,b,c){var u=this.gb1()
J.mk(u.b.$1(J.eJ(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.ae(this.gb1().a)},
i:function(a,b){var u=this.gb1()
return u.b.$1(J.eJ(u.a,b))},
gT:function(a){var u=P.ku(this.gb1(),!1,W.Q)
return new J.a4(u,u.length)},
$ar:function(){return[W.Q]},
$ah:function(){return[W.Q]},
$ao:function(){return[W.Q]}}
P.fo.prototype={
$1:function(a){return!!J.N(a).$iQ}}
P.fp.prototype={
$1:function(a){return H.l(a,"$iQ")}}
P.je.prototype={
gcr:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.x(t)
return u+t},
gde:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.x(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
t:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.N(b)
if(!!u.$iaa){t=q.a
if(t==u.gbr(b)){s=q.b
if(s==u.gbw(b)){r=q.c
if(typeof t!=="number")return t.C()
if(typeof r!=="number")return H.x(r)
if(t+r===u.gcr(b)){t=q.d
if(typeof s!=="number")return s.C()
if(typeof t!=="number")return H.x(t)
u=s+t===u.gde(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u=this,t=u.a,s=J.cG(t),r=u.b,q=J.cG(r),p=u.c
if(typeof t!=="number")return t.C()
if(typeof p!=="number")return H.x(p)
p=C.c.gH(t+p)
t=u.d
if(typeof r!=="number")return r.C()
if(typeof t!=="number")return H.x(t)
t=C.c.gH(r+t)
return P.nl(P.jb(P.jb(P.jb(P.jb(0,s),q),p),t))}}
P.aa.prototype={
gbr:function(a){return this.a},
gbw:function(a){return this.b},
gaK:function(a){return this.c},
gaE:function(a){return this.d}}
P.b8.prototype={$ib8:1}
P.fG.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ar:function(){return[P.b8]},
$ih:1,
$ah:function(){return[P.b8]},
$io:1,
$ao:function(){return[P.b8]}}
P.bc.prototype={$ibc:1}
P.hl.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ar:function(){return[P.bc]},
$ih:1,
$ah:function(){return[P.bc]},
$io:1,
$ao:function(){return[P.bc]}}
P.ht.prototype={
gl:function(a){return a.length}}
P.ca.prototype={$ica:1}
P.hY.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ar:function(){return[P.j]},
$ih:1,
$ah:function(){return[P.j]},
$io:1,
$ao:function(){return[P.j]}}
P.k.prototype={
gc0:function(a){return new P.fn(a,new W.a2(a))},
ai:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aL])
p.push(W.lx(null))
p.push(W.lz())
p.push(new W.jr())
c=new W.ev(new W.db(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).hf(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a2(s)
q=p.gaL(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ik:1}
P.be.prototype={$ibe:1}
P.il.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ar:function(){return[P.be]},
$ih:1,
$ah:function(){return[P.be]},
$io:1,
$ao:function(){return[P.be]}}
P.dW.prototype={}
P.dX.prototype={}
P.e6.prototype={}
P.e7.prototype={}
P.ei.prototype={}
P.ej.prototype={}
P.eq.prototype={}
P.er.prototype={}
P.bz.prototype={$ih:1,
$ah:function(){return[P.w]},
$io:1,
$ao:function(){return[P.w]}}
P.eO.prototype={
gl:function(a){return a.length}}
P.eP.prototype={
i:function(a,b){return P.aV(a.get(b))},
B:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aV(u.value[1]))}},
ga5:function(a){var u=H.b([],[P.j])
this.B(a,new P.eQ(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.y("Not supported"))},
$iS:1,
$aS:function(){return[P.j,null]}}
P.eQ.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eR.prototype={
gl:function(a){return a.length}}
P.bk.prototype={}
P.hm.prototype={
gl:function(a){return a.length}}
P.dK.prototype={}
P.dg.prototype={
dY:function(a,b,c,d,e,f,g){var u,t=J.N(g)
if(!!t.$iaG)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.oc(g))
return}if(!!t.$ibr)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.cH("Incorrect number or type of arguments"))}}
P.hT.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return P.aV(a.item(b))},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ar:function(){return[[P.S,,,]]},
$ih:1,
$ah:function(){return[[P.S,,,]]},
$io:1,
$ao:function(){return[[P.S,,,]]}}
P.ee.prototype={}
P.ef.prototype={}
T.aA.prototype={
aF:function(a,b){return!0},
h:function(a){return"all"}}
T.cW.prototype={
aF:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)if(u[s].aF(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.p)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.b9.prototype={}
T.a5.prototype={
aF:function(a,b){return!this.e9(0,b)},
h:function(a){return"!["+this.cC(0)+"]"}}
T.hw.prototype={
aF:function(a,b){return this.a<=b&&this.b>=b},
h:function(a){var u=H.bw(this.a),t=H.bw(this.b)
return u+".."+t}}
T.hG.prototype={
eh:function(a){var u,t
if(a.a.length<=0)throw H.d(P.v("May not create a Set with zero characters."))
u=new H.O([P.w,P.az])
for(t=new H.bZ(a,a.gl(a));t.v();)u.m(0,t.d,!0)
this.a=u},
aF:function(a,b){return this.a.bn(0,b)},
h:function(a){var u=this.a
return P.cc(u.ga5(u),0,null)}}
R.dm.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.dx(this.a.j(0,b))
r.a=H.b([],[T.b9])
r.c=!1
this.c.push(r)
return r},
hr:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
if(r.aF(0,a))return r}return},
h:function(a){return this.b}}
R.du.prototype={
h:function(a){var u=H.kR(this.b,"\n","\\n"),t=H.kR(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.dv.prototype={
aH:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.p)(c),++t){s=c[t]
this.c.m(0,s,b)}},
h:function(a){return this.b}}
R.ig.prototype={
j:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.dm(this,b)
u.c=H.b([],[R.dx])
this.a.m(0,b,u)}return u},
O:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.dv(a)
u=P.j
t.c=new H.O([u,u])
this.b.m(0,a,t)}return t},
e_:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.b([],[R.du]),k=this.c,j=[P.w],i=H.b([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)l.push(t)
return l}r=C.a.D(a,s)
q=k.hr(r)
if(q==null){if(t==null){i.push(r)
p=P.cc(i,0,m)
throw H.d(P.v("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}l.push(t)
s=t.c+1
i=H.b([],j)
k=this.c
t=m}else{if(!q.c)i.push(r)
k=q.b
if(k.d!=null){p=P.cc(i,0,m)
o=k.d
n=o.c.i(0,p)
t=new R.du(n==null?o.b:n,p,s)}++s}}}}
R.dx.prototype={
h:function(a){return this.b.b+": "+this.cC(0)}}
O.aB.prototype={
bj:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cz:function(a,b,c){this.b=b
this.c=a},
aY:function(a,b){return this.cz(a,null,b)},
cY:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cG:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.a4(u,u.length)},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.kL(s,"aB",0)]
if(s.cY(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.cG(t,H.b([b],r))}},
aa:function(a,b){var u,t
if(this.cY(b)){u=this.a
t=u.length
C.b.aa(u,b)
this.cG(t,b)}},
$ih:1}
O.c0.prototype={
gl:function(a){return this.a.length},
gp:function(){var u=this.b
return u==null?this.b=D.C():u},
aM:function(){var u=this.b
if(u!=null)u.E(null)},
ga3:function(a){var u=this.a
if(u.length>0)return C.b.gav(u)
else return V.bu()},
bv:function(a){var u=this.a
if(a==null)u.push(V.bu())
else u.push(a)
this.aM()},
aG:function(){var u=this.a
if(u.length>0){u.pop()
this.aM()}}}
E.eU.prototype={}
E.aE.prototype={
sbB:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gp().V(0,s.gdR())
u=s.c
if(u!=null)u.gp().n(0,s.gdR())
t=new D.A("shape",r,s.c)
t.b=!0
s.bs(t)}},
aq:function(a,b){var u
for(u=this.y.a,u=new J.a4(u,u.length);u.v();)u.d.aq(0,b)},
af:function(a){var u,t=this,s=a.dx
s.a.push(s.ga3(s))
s.aM()
a.co(t.f)
s=a.dy
u=(s&&C.b).gav(s)
if(u!=null&&t.d!=null)u.dV(a,t)
for(s=t.y.a,s=new J.a4(s,s.length);s.v();)s.d.af(a)
a.cn()
a.dx.aG()},
bs:function(a){var u=this.z
if(u!=null)u.E(a)},
a6:function(){return this.bs(null)},
dS:function(a){this.e=null
this.bs(a)},
hK:function(){return this.dS(null)},
dQ:function(a){this.bs(a)},
hH:function(){return this.dQ(null)},
hG:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdP(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bq()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.a6()},
hJ:function(a,b){var u,t
for(u=b.gT(b),t=this.gdP();u.v();)u.gI(u).gp().V(0,t)
this.a6()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hy.prototype={
eg:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a7(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.c0()
t=[V.aI]
u.a=H.b([],t)
u.gp().n(0,new E.hz(s))
s.cy=u
u=new O.c0()
u.a=H.b([],t)
u.gp().n(0,new E.hA(s))
s.db=u
u=new O.c0()
u.a=H.b([],t)
u.gp().n(0,new E.hB(s))
s.dx=u
u=H.b([],[O.dq])
s.dy=u
u.push(null)
s.fr=new H.O([P.j,A.dh])},
ghT:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga3(s)
u=t.db
u=t.z=s.A(0,u.ga3(u))
s=u}return s},
co:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gav(u):a)},
cn:function(){var u=this.dy
if(u.length>1)u.pop()},
da:function(a){var u=a.b
if(u.length===0)throw H.d(P.v("May not cache a shader with no name."))
if(this.fr.bn(0,u))throw H.d(P.v('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.m(0,u,a)}}
E.hz.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hA.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hB.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.ds.prototype={
cJ:function(a){this.dW()},
cI:function(){return this.cJ(null)},
ghv:function(){var u,t=this,s=Date.now(),r=C.c.a9(P.l2(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a7(s,!1)
return u/r},
d_:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.A()
if(typeof r!=="number")return H.x(r)
u=C.d.ca(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.A()
t=C.d.ca(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lo(C.n,s.ghX())}},
dW:function(){if(!this.cx){this.cx=!0
var u=window
C.E.eE(u)
C.E.fK(u,W.lK(new E.id(this),P.ac))}},
hV:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.d_()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a7(r,!1)
s.y=P.l2(r-s.r.a).a*0.000001
r=s.cy
C.b.sl(r.a,0)
r.aM()
r=s.db
C.b.sl(r.a,0)
r.aM()
r=s.dx
C.b.sl(r.a,0)
r.aM()
r=s.dy;(r&&C.b).sl(r,0)
s.dy.push(null)
o.af(p.e)}s=p.Q
if(s!=null)s.E(null)}catch(q){u=H.ad(q)
t=H.kM(q)
P.kQ("Error: "+H.e(u))
P.kQ("Stack: "+H.e(t))
throw H.d(u)}}}
E.id.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.hV()}}}
Z.dH.prototype={}
Z.cJ.prototype={
a0:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ad(s)
t=P.v('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.d(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.dI.prototype={}
Z.bP.prototype={
aD:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a0:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a0(a)},
ap:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
af:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.j],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)p.push(u[s].h(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a3(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.b.k(p,", ")+"\nAttrs:   "+C.b.k(r,", ")}}
Z.bs.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.c9(this.c))+"'")+"]"}}
Z.aU.prototype={
gcB:function(a){var u=this.a,t=(u&$.an().a)!==0?3:0
if((u&$.aY().a)!==0)t+=3
if((u&$.aX().a)!==0)t+=3
if((u&$.aZ().a)!==0)t+=2
if((u&$.bj().a)!==0)t+=3
if((u&$.cD().a)!==0)t+=3
if((u&$.cE().a)!==0)t+=4
if((u&$.bL().a)!==0)++t
return(u&$.aW().a)!==0?t+4:t},
h4:function(a){var u,t=$.an(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aY()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aX()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aZ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cD()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cE()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bL()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aW()
if((s&t.a)!==0)if(u===a)return t
return $.m9()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aU))return!1
return this.a===b.a},
h:function(a){var u=H.b([],[P.j]),t=this.a
if((t&$.an().a)!==0)u.push("Pos")
if((t&$.aY().a)!==0)u.push("Norm")
if((t&$.aX().a)!==0)u.push("Binm")
if((t&$.aZ().a)!==0)u.push("Txt2D")
if((t&$.bj().a)!==0)u.push("TxtCube")
if((t&$.cD().a)!==0)u.push("Clr3")
if((t&$.cE().a)!==0)u.push("Clr4")
if((t&$.bL().a)!==0)u.push("Weight")
if((t&$.aW().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.k(u,"|")}}
D.eX.prototype={}
D.bq.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.X]}]):u).push(b)},
V:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.U(s,b)
if(s===!0){s=t.a
u=(s&&C.b).V(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.U(s,b)
if(s===!0){s=t.b
u=(s&&C.b).V(s,b)||u}return u},
E:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.X()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.b.B(P.ku(u,!0,{func:1,ret:-1,args:[D.X]}),new D.fk(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.X]}])
C.b.B(u,new D.fl(q))}return!0},
dl:function(){return this.E(null)},
aI:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}}}
D.fk.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fl.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.X.prototype={}
D.b3.prototype={}
D.b4.prototype={}
D.A.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cK.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cK))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.d0.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d0))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.fF.prototype={
hP:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
hL:function(a){this.c=a.b
this.d.V(0,a.a)
return!1}}
X.d4.prototype={}
X.fN.prototype={
b0:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.A()
u=b.b
t=q.ch
if(typeof u!=="number")return u.A()
s=new V.a0(o.a+n*m,o.b+u*t)
t=q.a.gaU()
r=new X.aK(a,V.aN(),q.x,t,s)
r.b=!0
q.z=new P.a7(p,!1)
q.x=s
return r},
cm:function(a,b){this.r=a.a
return!1},
bc:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.e4()
if(typeof u!=="number")return u.al()
this.r=(u&~t)>>>0
return!1},
bb:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.b0(a,b))
return!0},
hQ:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaU()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.A()
q=a.b
p=o.cy
if(typeof q!=="number")return q.A()
t=new X.c2(new V.F(s*r,q*p),u,t)
t.b=!0
n.E(t)
return!0},
fd:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.d4(c,r.a.gaU(),b)
s.b=!0
t.E(s)
r.y=new P.a7(u,!1)
r.x=V.aN()}}
X.ag.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ag))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aK.prototype={}
X.hc.prototype={
bJ:function(a,b,c){var u=this,t=new P.a7(Date.now(),!1),s=u.a.gaU(),r=new X.aK(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cm:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.bJ(a,b,!0))
return!0},
bc:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.e4()
if(typeof t!=="number")return t.al()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.bJ(a,b,!0))
return!0},
bb:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.bJ(a,b,!1))
return!0},
hR:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaU()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.A()
r=a.b
q=p.ch
if(typeof r!=="number")return r.A()
u=new X.c2(new V.F(t*s,r*q),u,b)
u.b=!0
o.E(u)
return!0},
gdk:function(){var u=this.b
return u==null?this.b=D.C():u},
gct:function(){var u=this.c
return u==null?this.c=D.C():u},
gdO:function(){var u=this.d
return u==null?this.d=D.C():u}}
X.c2.prototype={}
X.hs.prototype={}
X.dw.prototype={}
X.ii.prototype={
b0:function(a,b){var u=this,t=new P.a7(Date.now(),!1),s=a.length>0?a[0]:V.aN(),r=u.a.gaU(),q=new X.dw(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hO:function(a){var u=this.b
if(u==null)return!1
u.E(this.b0(a,!0))
return!0},
hM:function(a){var u=this.c
if(u==null)return!1
u.E(this.b0(a,!0))
return!0},
hN:function(a){var u=this.d
if(u==null)return!1
u.E(this.b0(a,!1))
return!0}}
X.dC.prototype={
gaU:function(){var u=this.a,t=C.i.gdh(u).c
t.toString
u=C.i.gdh(u).d
u.toString
return V.lj(0,0,t,u)},
cQ:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.d0(u,new X.ag(t,a.altKey,a.shiftKey))},
aR:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ag(t,a.altKey,a.shiftKey)},
bX:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ag(t,a.altKey,a.shiftKey)},
az:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.L()
u=t.top
if(typeof r!=="number")return r.L()
return new V.a0(s-q,r-u)},
b3:function(a){return new V.F(a.movementX,a.movementY)},
bU:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a0])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
q=C.d.ao(r.pageX)
C.d.ao(r.pageY)
p=o.left
C.d.ao(r.pageX)
n.push(new V.a0(q-p,C.d.ao(r.pageY)-o.top))}return n},
ax:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cK(u,new X.ag(t,a.altKey,a.shiftKey))},
bL:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.L()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.L()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
f7:function(a){this.f=!0},
eW:function(a){this.f=!1},
f1:function(a){if(this.f&&this.bL(a))a.preventDefault()},
fb:function(a){var u
if(!this.f)return
u=this.cQ(a)
this.b.hP(u)},
f9:function(a){var u
if(!this.f)return
u=this.cQ(a)
this.b.hL(u)},
ff:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aR(a)
if(r.x){u=r.ax(a)
t=r.b3(a)
if(r.d.cm(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ax(a)
s=r.az(a)
if(r.c.cm(u,s))a.preventDefault()},
fj:function(a){var u,t,s,r=this
r.aR(a)
u=r.ax(a)
if(r.x){t=r.b3(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(r.r)return
s=r.az(a)
if(r.c.bc(u,s))a.preventDefault()},
f5:function(a){var u,t,s,r=this
if(!r.bL(a)){r.aR(a)
u=r.ax(a)
if(r.x){t=r.b3(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(r.r)return
s=r.az(a)
if(r.c.bc(u,s))a.preventDefault()}},
fh:function(a){var u,t,s,r=this
r.aR(a)
u=r.ax(a)
if(r.x){t=r.b3(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(r.r)return
s=r.az(a)
if(r.c.bb(u,s))a.preventDefault()},
f3:function(a){var u,t,s,r=this
if(!r.bL(a)){r.aR(a)
u=r.ax(a)
if(r.x){t=r.b3(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(r.r)return
s=r.az(a)
if(r.c.bb(u,s))a.preventDefault()}},
fl:function(a){var u,t,s=this
s.aR(a)
u=new V.F((a&&C.D).ghh(a),C.D.ghi(a)).w(0,180)
if(s.x){if(s.d.hQ(u))a.preventDefault()
return}if(s.r)return
t=s.az(a)
if(s.c.hR(u,t))a.preventDefault()},
fn:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ax(s.y)
t=s.az(s.y)
s.d.fd(u,t,r)}},
fG:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bX(a)
u=t.bU(a)
if(t.e.hO(u))a.preventDefault()},
fC:function(a){var u
this.bX(a)
u=this.bU(a)
if(this.e.hM(u))a.preventDefault()},
fE:function(a){var u
this.bX(a)
u=this.bU(a)
if(this.e.hN(u))a.preventDefault()}}
D.bo.prototype={
aw:function(a){var u=this.r
if(u!=null)u.E(a)},
el:function(){return this.aw(null)},
$ia8:1}
D.a8.prototype={}
D.d1.prototype={
aw:function(a){var u=this.x
if(u!=null)u.E(a)},
cX:function(a){var u=this.y
if(u!=null)u.E(a)},
fc:function(){return this.cX(null)},
fp:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){s=a[t]
if(s==null||this.ez(s))return!1}return!0},
eQ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcW(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q instanceof D.bo)this.e.push(q)
p=q.r
if(p==null){p=new D.bq()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.b3()
u.b=!0
this.aw(u)},
fu:function(a,b){var u,t,s
for(u=b.gT(b),t=this.gcW();u.v();){s=u.gI(u)
C.b.V(this.e,s)
s.gp().V(0,t)}u=new D.b4()
u.b=!0
this.aw(u)},
ez:function(a){var u=C.b.U(this.e,a)
return u},
$ah:function(){return[D.a8]},
$aaB:function(){return[D.a8]}}
D.hr.prototype={$ia8:1}
D.hS.prototype={$ia8:1}
V.t.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.t))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
V.aC.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aC))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.G(u.a,3,0)+", "+V.G(u.b,3,0)+", "+V.G(u.c,3,0)+", "+V.G(u.d,3,0)+"]"}}
V.fj.prototype={}
V.d6.prototype={
ag:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.M])
return t},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d6))return!1
u=b.a
t=$.D().a
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
h:function(a){var u,t,s,r,q=this,p=[P.M],o=V.bJ(H.b([q.a,q.d,q.r],p),3,0),n=V.bJ(H.b([q.b,q.e,q.x],p),3,0),m=V.bJ(H.b([q.c,q.f,q.y],p),3,0)
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
V.aI.prototype={
ag:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.M])
return t},
ce:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.D().a)return V.bu()
u=1/b1
t=-n
s=-a0
return V.at((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
A:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.at(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bx:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.B(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cs:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a1(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aI))return!1
u=b.a
t=$.D().a
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
F:function(a){var u,t,s,r,q,p=this,o=[P.M],n=V.bJ(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bJ(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bJ(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bJ(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
N:function(){return this.F("")}}
V.a0.prototype={
L:function(a,b){return new V.a0(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}}
V.a1.prototype={
L:function(a,b){return new V.a1(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
V.aO.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aO))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.G(u.a,3,0)+", "+V.G(u.b,3,0)+", "+V.G(u.c,3,0)+", "+V.G(u.d,3,0)+"]"}}
V.df.prototype={
gae:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.df))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.G(u.a,3,0)+", "+V.G(u.b,3,0)+", "+V.G(u.c,3,0)+", "+V.G(u.d,3,0)+"]"}}
V.F.prototype={
cf:function(a){return Math.sqrt(this.G(this))},
G:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.x(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.x(t)
return s*r+u*t},
A:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.A()
u=this.b
if(typeof u!=="number")return u.A()
return new V.F(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.D().a){u=$.lu
return u==null?$.lu=new V.F(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.F(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.F))return!1
u=b.a
t=this.a
s=$.D()
s.toString
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.x(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.x(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}}
V.B.prototype={
cf:function(a){return Math.sqrt(this.G(this))},
G:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cg:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.B(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
ba:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.B(u*t-s*r,s*q-p*t,p*r-u*q)},
C:function(a,b){return new V.B(this.a+b.a,this.b+b.b,this.c+b.c)},
S:function(a){return new V.B(-this.a,-this.b,-this.c)},
w:function(a,b){if(Math.abs(b-0)<$.D().a)return V.dG()
return new V.B(this.a/b,this.b/b,this.c/b)},
dN:function(){var u=$.D().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.B))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
U.f_.prototype={
bE:function(a){var u=V.oD(a,this.c,this.b)
return u},
gp:function(){var u=this.y
return u==null?this.y=D.C():u},
R:function(a){var u=this.y
if(u!=null)u.E(a)},
scu:function(a,b){},
scj:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.D().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bE(u)}s=new D.A("maximumLocation",s,t.b)
s.b=!0
t.R(s)}},
scl:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.D().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bE(u)}s=new D.A("minimumLocation",s,t.c)
s.b=!0
t.R(s)}},
sad:function(a,b){var u,t=this
b=t.bE(b)
u=t.d
if(!(Math.abs(u-b)<$.D().a)){t.d=b
u=new D.A("location",u,b)
u.b=!0
t.R(u)}},
sck:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.D().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.A("maximumVelocity",r,a)
r.b=!0
s.R(r)}},
sW:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.D().a)){u.f=a
t=new D.A("velocity",t,a)
t.b=!0
u.R(t)}},
sc3:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.D().a)){this.x=a
u=new D.A("dampening",u,a)
u.b=!0
this.R(u)}},
aq:function(a,b){var u,t,s,r=this,q=r.f,p=$.D().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sad(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.D().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sW(u)}}}
U.cN.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.C():u},
aX:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cN))return!1
return J.P(this.a,b.a)},
h:function(a){return"Constant: "+this.a.F("          ")}}
U.bV.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.C():u},
R:function(a){var u=this.e
if(u!=null)u.E(a)},
a8:function(){return this.R(null)},
eO:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaN(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.gp()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b3()
u.b=!0
this.R(u)},
fs:function(a,b){var u,t
for(u=b.gT(b),t=this.gaN();u.v();)u.gI(u).gp().V(0,t)
u=new D.b4()
u.b=!0
this.R(u)},
aX:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.P()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a4(r,r.length),u=null;r.v();){q=r.d
if(q!=null){t=q.aX(0,b,c)
if(t!=null)u=u==null?t:t.A(0,u)}}s.f=u==null?V.bu():u
r=s.e
if(r!=null)r.aI(0)}return s.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bV))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.P(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$ah:function(){return[U.a9]},
$aaB:function(){return[U.a9]},
$ia9:1}
U.a9.prototype={}
U.dD.prototype={
gp:function(){var u=this.cy
return u==null?this.cy=D.C():u},
R:function(a){var u=this.cy
if(u!=null)u.E(a)},
a8:function(){return this.R(null)},
b7:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdk().n(0,u.gbM())
u.a.c.gdO().n(0,u.gbO())
u.a.c.gct().n(0,u.gbQ())
return!0},
bN:function(a){var u=this
if(!J.P(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bP:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaK")
if(!n.y)return
if(n.x){u=a.d.L(0,a.y)
u=new V.F(u.a,u.b)
u=u.G(u)
t=n.r
if(typeof t!=="number")return H.x(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.L(0,a.y)
u=new V.F(t.a,t.b).A(0,2).w(0,u.gae())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.A()
s=n.e
if(typeof s!=="number")return H.x(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=new V.F(s.a,s.b).A(0,2).w(0,u.gae())
s=n.b
q=r.a
if(typeof q!=="number")return q.S()
p=n.e
if(typeof p!=="number")return H.x(p)
o=n.z
if(typeof o!=="number")return H.x(o)
s.sad(0,-q*p+o)
n.b.sW(0)
t=t.L(0,a.z)
n.Q=new V.F(t.a,t.b).A(0,2).w(0,u.gae())}n.a8()},
bR:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.G(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.A()
s=r.e
if(typeof s!=="number")return H.x(s)
u.sW(t*10*s)
r.a8()}},
aX:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.P()
if(q<p){r.ch=p
u=b.y
r.b.aq(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.at(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia9:1}
U.dE.prototype={
gp:function(){var u=this.fx
return u==null?this.fx=D.C():u},
R:function(a){var u=this.fx
if(u!=null)u.E(a)},
a8:function(){return this.R(null)},
b7:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdk().n(0,s.gbM())
s.a.c.gdO().n(0,s.gbO())
s.a.c.gct().n(0,s.gbQ())
u=s.a.d
t=u.f
u=t==null?u.f=D.C():t
u.n(0,s.geG())
u=s.a.d
t=u.d
u=t==null?u.d=D.C():t
u.n(0,s.geI())
u=s.a.e
t=u.b
u=t==null?u.b=D.C():t
u.n(0,s.gfY())
u=s.a.e
t=u.d
u=t==null?u.d=D.C():t
u.n(0,s.gfW())
u=s.a.e
t=u.c
u=t==null?u.c=D.C():t
u.n(0,s.gfU())
return!0},
at:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.S()
u=-u}if(this.r){if(typeof t!=="number")return t.S()
t=-t}return new V.F(u,t)},
bN:function(a){var u=this
H.l(a,"$iaK")
if(!J.P(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bP:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaK")
if(!n.cx)return
if(n.ch){u=a.d.L(0,a.y)
u=new V.F(u.a,u.b)
u=u.G(u)
t=n.Q
if(typeof t!=="number")return H.x(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.L(0,a.y)
u=n.at(new V.F(t.a,t.b).A(0,2).w(0,u.gae()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.x(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.x(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.at(new V.F(s.a,s.b).A(0,2).w(0,u.gae()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.x(p)
o=n.cy
if(typeof o!=="number")return H.x(o)
s.sad(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.x(q)
s=n.db
if(typeof s!=="number")return H.x(s)
o.sad(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.L(0,a.z)
n.dx=n.at(new V.F(t.a,t.b).A(0,2).w(0,u.gae()))}n.a8()},
bR:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.G(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.x(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.x(u)
s.sW(-t*10*u)
r.a8()}},
eH:function(a){var u=this
if(H.l(a,"$id4").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eJ:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaK")
if(!J.P(n.d,a.x.b))return
u=a.c
t=a.d
s=t.L(0,a.y)
r=n.at(new V.F(s.a,s.b).A(0,2).w(0,u.gae()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.x(p)
o=n.cy
if(typeof o!=="number")return H.x(o)
s.sad(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.x(q)
s=n.db
if(typeof s!=="number")return H.x(s)
o.sad(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.L(0,a.z)
n.dx=n.at(new V.F(t.a,t.b).A(0,2).w(0,u.gae()))
n.a8()},
fZ:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fX:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$idw")
if(!n.cx)return
if(n.ch){u=a.d.L(0,a.y)
u=new V.F(u.a,u.b)
u=u.G(u)
t=n.Q
if(typeof t!=="number")return H.x(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.L(0,a.y)
u=n.at(new V.F(t.a,t.b).A(0,2).w(0,u.gae()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.x(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.x(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.at(new V.F(s.a,s.b).A(0,2).w(0,u.gae()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.x(p)
o=n.cy
if(typeof o!=="number")return H.x(o)
s.sad(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.x(q)
s=n.db
if(typeof s!=="number")return H.x(s)
o.sad(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.L(0,a.z)
n.dx=n.at(new V.F(t.a,t.b).A(0,2).w(0,u.gae()))}n.a8()},
fV:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.G(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.x(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.x(u)
s.sW(-t*10*u)
r.a8()}},
aX:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.P()
if(q<p){r.dy=p
u=b.y
r.c.aq(0,u)
r.b.aq(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.at(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.A(0,V.at(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia9:1}
U.dF.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.C():u},
R:function(a){var u=this.r
if(u!=null)u.E(a)},
b7:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.C():t
t=r.geL()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.C():s).n(0,t)
return!0},
eM:function(a){var u,t,s,r,q=this
if(!J.P(q.b,q.a.b.c))return
H.l(a,"$ic2")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.A()
r=u+t*s
if(u!==r){q.d=r
u=new D.A("zoom",u,r)
u.b=!0
q.R(u)}},
aX:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.at(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia9:1}
M.cM.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.C():u},
a_:function(a){var u=this.r
if(u!=null)u.E(a)},
b_:function(){return this.a_(null)},
fw:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gZ(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.gp()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b3()
u.b=!0
this.a_(u)},
fA:function(a,b){var u,t
for(u=b.gT(b),t=this.gZ();u.v();)u.gI(u).gp().V(0,t)
u=new D.b4()
u.b=!0
this.a_(u)},
af:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.a4(u,u.length);u.v();){t=u.d
if(t!=null)t.af(a)}s.f=!1},
$ah:function(){return[M.ak]},
$aaB:function(){return[M.ak]},
$iak:1}
M.cO.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.C():u},
a_:function(a){var u=this.r
if(u!=null)u.E(a)},
b_:function(){return this.a_(null)},
sb8:function(a){var u,t,s=this
if(a==null)a=new X.fz()
u=s.b
if(u!==a){if(u!=null)u.gp().V(0,s.gZ())
t=s.b
s.b=a
a.gp().n(0,s.gZ())
u=new D.A("camera",t,s.b)
u.b=!0
s.a_(u)}},
sbe:function(a,b){var u,t,s=this
if(b==null)b=X.kl(null)
u=s.c
if(u!==b){if(u!=null)u.gp().V(0,s.gZ())
t=s.c
s.c=b
b.gp().n(0,s.gZ())
u=new D.A("target",t,s.c)
u.b=!0
s.a_(u)}},
sbf:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().V(0,t.gZ())
u=t.d
t.d=a
if(a!=null)a.gp().n(0,t.gZ())
s=new D.A("technique",u,t.d)
s.b=!0
t.a_(s)}},
af:function(a){var u=this
a.co(u.d)
u.c.a0(a)
u.b.a0(a)
u.e.aq(0,a)
u.e.af(a)
u.b.ap(a)
u.c.toString
a.cn()},
$iak:1}
M.cT.prototype={
a_:function(a){var u=this.y
if(u!=null)u.E(a)},
b_:function(){return this.a_(null)},
eY:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gZ(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bq()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b3()
u.b=!0
this.a_(u)},
f_:function(a,b){var u,t
for(u=b.gT(b),t=this.gZ();u.v();)u.gI(u).gp().V(0,t)
u=new D.b4()
u.b=!0
this.a_(u)},
sb8:function(a){var u,t,s=this
if(a==null)a=X.lc(null)
u=s.b
if(u!==a){if(u!=null)u.gp().V(0,s.gZ())
t=s.b
s.b=a
a.gp().n(0,s.gZ())
u=new D.A("camera",t,s.b)
u.b=!0
s.a_(u)}},
sbe:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gp().V(0,t.gZ())
u=t.c
t.c=b
b.gp().n(0,t.gZ())
s=new D.A("target",u,t.c)
s.b=!0
t.a_(s)}},
sbf:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().V(0,t.gZ())
u=t.d
t.d=a
if(a!=null)a.gp().n(0,t.gZ())
s=new D.A("technique",u,t.d)
s.b=!0
t.a_(s)}},
gp:function(){var u=this.y
return u==null?this.y=D.C():u},
af:function(a){var u,t=this
a.co(t.d)
t.c.a0(a)
t.b.a0(a)
u=t.d
if(u!=null)u.aq(0,a)
for(u=t.e.a,u=new J.a4(u,u.length);u.v();)u.d.aq(0,a)
for(u=t.e.a,u=new J.a4(u,u.length);u.v();)u.d.af(a)
t.b.toString
a.cy.aG()
a.db.aG()
t.c.toString
a.cn()},
$iak:1}
M.ak.prototype={}
A.cI.prototype={}
A.eN.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hn:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dj:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.W.prototype={
gar:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
h:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof A.W))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.fU.prototype={
ef:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.T("")
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
A.nU(c0,u)
A.nW(c0,u)
A.nV(c0,u)
A.nY(c0,u)
A.nZ(c0,u)
A.nX(c0,u)
A.o_(c0,u)
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
b5.dM(0,s.charCodeAt(0)==0?s:s,A.nT(b5.z))
b5.Q=b5.x.i(0,"posAttr")
b5.cx=b5.x.i(0,"normAttr")
b5.ch=b5.x.i(0,"binmAttr")
b5.cy=b5.x.i(0,"txt2DAttr")
b5.db=b5.x.i(0,"txtCubeAttr")
b5.dx=b5.x.i(0,"bendAttr")
if(c0.dx)b5.id=H.l(b5.y.K(0,"invViewMat"),"$iab")
if(t)b5.dy=H.l(b5.y.K(0,"objMat"),"$iab")
if(r)b5.fr=H.l(b5.y.K(0,"viewObjMat"),"$iab")
b5.fy=H.l(b5.y.K(0,"projViewObjMat"),"$iab")
if(c0.ry)b5.k1=H.l(b5.y.K(0,"txt2DMat"),"$icg")
if(c0.x1)b5.k2=H.l(b5.y.K(0,"txtCubeMat"),"$iab")
if(c0.x2)b5.k3=H.l(b5.y.K(0,"colorMat"),"$iab")
b5.r1=H.b([],[A.ab])
t=c0.y2
if(t>0){b5.k4=b5.y.K(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.i(0,q)
if(m==null)H.u(P.v(b7+q+b8))
s.push(H.l(m,"$iab"))}}t=c0.a
if(t.a)b5.r2=H.l(b5.y.K(0,"emissionClr"),"$iI")
if(t.b)b5.rx=H.l(b5.y.K(0,"emissionTxt"),"$iZ")
t=c0.b
if(t.a)b5.x1=H.l(b5.y.K(0,"ambientClr"),"$iI")
if(t.b)b5.x2=H.l(b5.y.K(0,"ambientTxt"),"$iZ")
t=c0.c
if(t.a)b5.y2=H.l(b5.y.K(0,"diffuseClr"),"$iI")
if(t.b)b5.aC=H.l(b5.y.K(0,"diffuseTxt"),"$iZ")
t=c0.d
if(t.a)b5.dn=H.l(b5.y.K(0,"invDiffuseClr"),"$iI")
if(t.b)b5.dq=H.l(b5.y.K(0,"invDiffuseTxt"),"$iZ")
t=c0.e
s=t.a
if(s||t.b||!1){b5.dt=H.l(b5.y.K(0,"shininess"),"$iV")
if(s)b5.dr=H.l(b5.y.K(0,"specularClr"),"$iI")
if(t.b)b5.ds=H.l(b5.y.K(0,"specularTxt"),"$iZ")}if(c0.f.b)b5.du=H.l(b5.y.K(0,"bumpTxt"),"$iZ")
if(c0.cy){b5.dv=H.l(b5.y.K(0,"envSampler"),"$ibg")
t=c0.r
if(t.a)b5.dw=H.l(b5.y.K(0,"reflectClr"),"$iI")
if(t.b)b5.dz=H.l(b5.y.K(0,"reflectTxt"),"$iZ")
t=c0.x
s=t.a
if(s||t.b||!1){b5.dA=H.l(b5.y.K(0,"refraction"),"$iV")
if(s)b5.dB=H.l(b5.y.K(0,"refractClr"),"$iI")
if(t.b)b5.dC=H.l(b5.y.K(0,"refractTxt"),"$iZ")}}t=c0.y
if(t.a)b5.dD=H.l(b5.y.K(0,"alpha"),"$iV")
if(t.b)b5.dE=H.l(b5.y.K(0,"alphaTxt"),"$iZ")
t=P.w
s=[t,A.dz]
b5.c4=new H.O(s)
b5.c5=new H.O([t,[P.o,A.cf]])
b5.c6=new H.O(s)
b5.c7=new H.O([t,[P.o,A.ch]])
b5.c8=new H.O(s)
b5.c9=new H.O([t,[P.o,A.ci]])
if(c0.id){for(t=c0.z,s=t.length,r=[A.cf],l=0;l<t.length;t.length===s||(0,H.p)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.al()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.i(0,g)
if(m==null)H.u(P.v(b7+g+b8))
H.l(m,"$iI")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.i(0,g)
if(f==null)H.u(P.v(b7+g+b8))
H.l(f,"$iI")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.i(0,g)
if(e==null)H.u(P.v(b7+g+b8))
H.l(e,"$iI")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.i(0,g)
if(m==null)H.u(P.v(b7+g+b8))
H.l(m,"$iI")
o=b5.y
g=i+"s["+n+"].color"
f=o.i(0,g)
if(f==null)H.u(P.v(b7+g+b8))
H.l(f,"$iI")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.i(0,o)
if(e==null)H.u(P.v(b7+o+b8))
H.l(e,"$iZ")
a=e}else a=b6
h.push(new A.cf(b,c,d,m,f,a))}b5.c5.m(0,j,h)
q=b5.c4
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.u(P.v(b7+o+b8))
q.m(0,j,m)}for(t=c0.Q,s=t.length,r=[A.ch],l=0;l<t.length;t.length===s||(0,H.p)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.i(0,o)
if(m==null)H.u(P.v(b7+o+b8))
H.l(m,"$iI")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.i(0,o)
if(f==null)H.u(P.v(b7+o+b8))
H.l(f,"$iI")
p=b5.y
o=i+"s["+n+"].color"
e=p.i(0,o)
if(e==null)H.u(P.v(b7+o+b8))
H.l(e,"$iI")
if(typeof j!=="number")return j.al()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.i(0,o)
if(a0==null)H.u(P.v(b7+o+b8))
H.l(a0,"$icg")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.i(0,o)
if(a0==null)H.u(P.v(b7+o+b8))
H.l(a0,"$ibg")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.i(0,o)
if(a0==null)H.u(P.v(b7+o+b8))
H.l(a0,"$ibg")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.i(0,o)
if(a2==null)H.u(P.v(b7+o+b8))
H.l(a2,"$ice")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.i(0,o)
if(a0==null)H.u(P.v(b7+o+b8))
H.l(a0,"$iV")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.i(0,o)
if(a2==null)H.u(P.v(b7+o+b8))
H.l(a2,"$iV")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.i(0,o)
if(a5==null)H.u(P.v(b7+o+b8))
H.l(a5,"$iV")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}h.push(new A.ch(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.c7.m(0,j,h)
q=b5.c6
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.u(P.v(b7+o+b8))
q.m(0,j,m)}for(t=c0.ch,s=t.length,r=[A.ci],l=0;l<t.length;t.length===s||(0,H.p)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.i(0,o)
if(m==null)H.u(P.v(b7+o+b8))
H.l(m,"$iI")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.i(0,o)
if(f==null)H.u(P.v(b7+o+b8))
H.l(f,"$iI")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.i(0,o)
if(e==null)H.u(P.v(b7+o+b8))
H.l(e,"$iI")
p=b5.y
o=i+"s["+n+"].color"
a0=p.i(0,o)
if(a0==null)H.u(P.v(b7+o+b8))
H.l(a0,"$iI")
if(typeof j!=="number")return j.al()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.i(0,o)
if(a2==null)H.u(P.v(b7+o+b8))
H.l(a2,"$iI")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.i(0,o)
if(a5==null)H.u(P.v(b7+o+b8))
H.l(a5,"$iI")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.i(0,o)
if(a9==null)H.u(P.v(b7+o+b8))
H.l(a9,"$iV")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.i(0,o)
if(b0==null)H.u(P.v(b7+o+b8))
H.l(b0,"$iV")
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
if(a2==null)H.u(P.v(b7+g+b8))
H.l(a2,"$ice")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.i(0,g)
if(a2==null)H.u(P.v(b7+g+b8))
H.l(a2,"$iV")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.i(0,g)
if(a5==null)H.u(P.v(b7+g+b8))
H.l(a5,"$iV")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.i(0,g)
if(a2==null)H.u(P.v(b7+g+b8))
H.l(a2,"$iV")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.i(0,g)
if(a5==null)H.u(P.v(b7+g+b8))
H.l(a5,"$iV")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.i(0,g)
if(a9==null)H.u(P.v(b7+g+b8))
H.l(a9,"$iV")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.i(0,g)
if(a2==null)H.u(P.v(b7+g+b8))
H.l(a2,"$iZ")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.i(0,o)
if(a2==null)H.u(P.v(b7+o+b8))
H.l(a2,"$iZ")
a3=a2}else a3=b6
h.push(new A.ci(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.c9.m(0,j,h)
q=b5.c8
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.u(P.v(b7+o+b8))
q.m(0,j,m)}}},
an:function(a,b){if(b!=null&&b.d)a.e6(b)},
fP:function(a,b){if(b!=null&&b.d>=6)a.cA(b)}}
A.cQ.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.de.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.dk.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.fX.prototype={
h:function(a){return this.aC}}
A.cf.prototype={}
A.ch.prototype={}
A.ci.prototype={}
A.dh.prototype={
cF:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dM:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cR(b,35633)
r.f=r.cR(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.u(P.v("Failed to link shader: "+H.e(s)))}r.fQ()
r.fS()},
a0:function(a){a.a.useProgram(this.r)
this.x.hn()},
cR:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.v("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fQ:function(){var u,t,s,r=this,q=H.b([],[A.cI]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.x(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cI(p,t.name,s))}r.x=new A.eN(q)},
fS:function(){var u,t,s,r=this,q=H.b([],[A.dy]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.x(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hg(t.type,t.size,t.name,s))}r.y=new A.iu(q)},
aO:function(a,b,c){var u=this.a
if(a===1)return new A.dz(u,b,c)
else return A.ky(u,this.r,b,a,c)},
eB:function(a,b,c){var u=this.a
if(a===1)return new A.Z(u,b,c)
else return A.ky(u,this.r,b,a,c)},
eC:function(a,b,c){var u=this.a
if(a===1)return new A.bg(u,b,c)
else return A.ky(u,this.r,b,a,c)},
bl:function(a,b){return new P.dR(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hg:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aO(b,c,d)
case 5121:return u.aO(b,c,d)
case 5122:return u.aO(b,c,d)
case 5123:return u.aO(b,c,d)
case 5124:return u.aO(b,c,d)
case 5125:return u.aO(b,c,d)
case 5126:return new A.V(u.a,c,d)
case 35664:return new A.iq(u.a,c,d)
case 35665:return new A.I(u.a,c,d)
case 35666:return new A.ce(u.a,c,d)
case 35667:return new A.ir(u.a,c,d)
case 35668:return new A.is(u.a,c,d)
case 35669:return new A.it(u.a,c,d)
case 35674:return new A.iv(u.a,c,d)
case 35675:return new A.cg(u.a,c,d)
case 35676:return new A.ab(u.a,c,d)
case 35678:return u.eB(b,c,d)
case 35680:return u.eC(b,c,d)
case 35670:throw H.d(u.bl("BOOL",c))
case 35671:throw H.d(u.bl("BOOL_VEC2",c))
case 35672:throw H.d(u.bl("BOOL_VEC3",c))
case 35673:throw H.d(u.bl("BOOL_VEC4",c))
default:throw H.d(P.v("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.hP.prototype={}
A.dy.prototype={}
A.iu.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
K:function(a,b){var u=this.i(0,b)
if(u==null)throw H.d(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.N()},
N:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.p)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.dz.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.ir.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.is.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.it.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.ip.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.V.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.iq.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.I.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.ce.prototype={
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iv.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.cg.prototype={
am:function(a){var u=new Float32Array(H.bE(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.ab.prototype={
am:function(a){var u=new Float32Array(H.bE(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.Z.prototype={
e6:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bg.prototype={
cA:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jF.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cg(s.b,b).cg(s.d.cg(s.c,b),c)
s=new V.a1(r.a,r.b,r.c)
if(!J.P(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a6()}a.si0(r.w(0,Math.sqrt(r.G(r))))
s=1-b
u=1-c
u=new V.aO(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.P(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a6()}}}
F.b2.prototype={
ev:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.dG()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.dN())return
return s.w(0,Math.sqrt(s.G(s)))},
ex:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.L(0,q)
r=new V.B(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.G(r)))
r=t.L(0,q)
r=new V.B(r.a,r.b,r.c)
r=s.ba(r.w(0,Math.sqrt(r.G(r))))
return r.w(0,Math.sqrt(r.G(r)))},
c_:function(){var u,t=this
if(t.d!=null)return!0
u=t.ev()
if(u==null){u=t.ex()
if(u==null)return!1}t.d=u
t.a.a.a6()
return!0},
eu:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.dG()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.dN())return
return s.w(0,Math.sqrt(s.G(s)))},
ew:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.D().a){l=d.L(0,g)
l=new V.B(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.G(l)))
if(s.a-t.a<0)q=q.S(0)}else{p=(l-u.b)/r
l=d.L(0,g)
l=new V.a1(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).L(0,j)
l=new V.B(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.G(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.S(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.G(l)))
l=o.ba(q)
l=l.w(0,Math.sqrt(l.G(l))).ba(o)
q=l.w(0,Math.sqrt(l.G(l)))}return q},
bY:function(){var u,t=this
if(t.e!=null)return!0
u=t.eu()
if(u==null){u=t.ew()
if(u==null)return!1}t.e=u
t.a.a.a6()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.N()},
F:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.a.ak(J.a3(s.e),0)+", "+C.a.ak(J.a3(t.b.e),0)+", "+C.a.ak(J.a3(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.h(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.h(0)+"}"):u+"-}"},
N:function(){return this.F("")}}
F.bY.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.N()},
F:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.a.ak(J.a3(u.e),0)+", "+C.a.ak(J.a3(this.b.e),0)},
N:function(){return this.F("")}}
F.c6.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.N()},
F:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.ak(J.a3(u.e),0)},
N:function(){return this.F("")}}
F.hH.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.C():u},
hD:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.a1()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){r=g[s]
h.a.n(0,r.hd())}h.a.a1()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.a1()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.c6()
if(n.a==null)H.u(P.v("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.E(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.a1()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.a1()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.mD(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.a1()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.a1()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.a1()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
i=p[o]
o=h.d.a
o.a.n(0,l)
o.a.n(0,k)
o.a.n(0,i)
F.bT(l,k,i)}g=h.e
if(g!=null)g.aI(0)},
aA:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aA()||!1
if(!t.a.aA())u=!1
s=t.e
if(s!=null)s.aI(0)
return u},
df:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.an()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aY().a)!==0)++s
if((t&$.aX().a)!==0)++s
if((t&$.aZ().a)!==0)++s
if((t&$.bj().a)!==0)++s
if((t&$.cD().a)!==0)++s
if((t&$.cE().a)!==0)++s
if((t&$.bL().a)!==0)++s
if((t&$.aW().a)!==0)++s
r=a4.gcB(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.M])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cJ])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.h4(m)
k=l.gcB(l)
if(m>=t)return H.c(o,m)
o[m]=new Z.cJ(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.c(i,j)
h=i[j].hB(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.c(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bE(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bP(new Z.dH(a1,d),o,a4)
c.b=H.b([],[Z.bs])
if(a0.b.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.a1()
b.push(t.e)}a=Z.kC(u,34963,b)
c.b.push(new Z.bs(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.a1()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.c(t,m)
t=t[m].b
t.a.a.a1()
b.push(t.e)}a=Z.kC(u,34963,b)
c.b.push(new Z.bs(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.a1()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].b
t.a.a.a1()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].c
t.a.a.a1()
b.push(t.e)}a=Z.kC(u,34963,b)
c.b.push(new Z.bs(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.b([],[P.j])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.F(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.F(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.F(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.F(t))}return C.b.k(s,"\n")},
a6:function(){var u=this.e
if(u!=null)u.E(null)}}
F.hI.prototype={
h1:function(a){var u,t,s,r,q=H.b([],[F.b2]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.n(0,p)
u.a.n(0,s)
u.a.n(0,r)
q.push(F.bT(p,s,r))}return q},
h2:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.b2])
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
aA:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.p)(u),++r)if(!u[r].c_())s=!1
return s},
bZ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.p)(u),++r)if(!u[r].bY())s=!1
return s},
h:function(a){return this.N()},
F:function(a){var u,t,s,r=H.b([],[P.j])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].F(a))
return C.b.k(r,"\n")},
N:function(){return this.F("")}}
F.hJ.prototype={
gl:function(a){return this.b.length},
h:function(a){return this.N()},
F:function(a){var u,t,s=H.b([],[P.j]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
s.push(t[u].F(a+(""+u+". ")))}return C.b.k(s,"\n")},
N:function(){return this.F("")}}
F.hK.prototype={
gl:function(a){return this.b.length},
h:function(a){return this.N()},
F:function(a){var u,t,s,r=H.b([],[P.j])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].F(a))
return C.b.k(r,"\n")},
N:function(){return this.F("")}}
F.bB.prototype={
c2:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.iO(u.cx,r,o,t,s,q,p,a,n)},
hd:function(){return this.c2(null)},
si0:function(a){var u
if(!J.P(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a6()}},
hB:function(a){var u,t,s=this
if(a.t(0,$.an())){u=s.f
t=[P.M]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.aY())){u=s.r
t=[P.M]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.aX())){u=s.x
t=[P.M]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.aZ())){u=s.y
t=[P.M]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.t(0,$.bj())){u=s.z
t=[P.M]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cD())){u=s.Q
t=[P.M]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cE())){u=s.Q
t=[P.M]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.bL()))return H.b([s.ch],[P.M])
else if(a.t(0,$.aW())){u=s.cx
t=[P.M]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.M])},
c_:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dG()
t.d.B(0,new F.iW(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.G(s)))
s=t.a
if(s!=null){s.a6()
s=t.a.e
if(s!=null)s.aI(0)}return!0},
bY:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dG()
t.d.B(0,new F.iV(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.G(s)))
s=t.a
if(s!=null){s.a6()
s=t.a.e
if(s!=null)s.aI(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.N()},
F:function(a){var u,t,s=this,r="-",q=H.b([],[P.j])
q.push(C.a.ak(J.a3(s.e),0))
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
q.push(V.G(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.b.k(q,", ")
return a+"{"+t+"}"},
N:function(){return this.F("")}}
F.iW.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.C(0,t)}}}
F.iV.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.C(0,t)}}}
F.iP.prototype={
a1:function(){},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.v("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a6()
return!0},
bm:function(a,b,c,d,e,f){var u=F.iO(a,null,b,c,null,d,e,f,0)
this.n(0,u)
return u},
gl:function(a){return this.c.length},
aA:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)u[s].c_()
return!0},
bZ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)u[s].bY()
return!0},
ha:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.P(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
h:function(a){return this.N()},
F:function(a){var u,t,s,r
this.a1()
u=H.b([],[P.j])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r)u.push(t[r].F(a))
return C.b.k(u,"\n")},
N:function(){return this.F("")}}
F.iQ.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
B:function(a,b){var u=this
C.b.B(u.b,b)
C.b.B(u.c,new F.iR(u,b))
C.b.B(u.d,new F.iS(u,b))},
h:function(a){return this.N()},
N:function(){var u,t,s,r=H.b([],[P.j])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].F(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].F(""))
return C.b.k(r,"\n")}}
F.iR.prototype={
$1:function(a){if(!J.P(a.a,this.a))this.b.$1(a)}}
F.iS.prototype={
$1:function(a){var u=this.a
if(!J.P(a.a,u)&&!J.P(a.b,u))this.b.$1(a)}}
F.iT.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a){return this.N()},
N:function(){var u,t,s,r=H.b([],[P.j])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].F(""))
return C.b.k(r,"\n")}}
F.iU.prototype={
gl:function(a){return this.b.length},
h:function(a){return this.N()},
N:function(){var u,t,s,r=H.b([],[P.j])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].F(""))
return C.b.k(r,"\n")}}
O.d5.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.C():u},
X:function(a){var u=this.fr
if(u!=null)u.E(a)},
b2:function(){return this.X(null)},
cZ:function(a){this.a=null
this.X(a)},
fM:function(){return this.cZ(null)},
eS:function(a,b){var u=new D.b3()
u.b=!0
this.X(u)},
eU:function(a,b){var u=new D.b4()
u.b=!0
this.X(u)},
cO:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.w,h=new H.O([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=h.i(0,0)
h.m(0,0,r==null?1:r)}q=H.b([],[A.cQ])
h.B(0,new O.h0(j,q))
C.b.bC(q,new O.h1())
p=new H.O([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){o=u[s]
r=o.gb9()
n=p.i(0,o.gb9())
p.m(0,r,n==null?1:n)}m=H.b([],[A.de])
p.B(0,new O.h2(j,m))
C.b.bC(m,new O.h3())
l=new H.O([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.p)(i),++s){o=i[s]
t=o.gb9()
r=l.i(0,o.gb9())
l.m(0,t,r==null?1:r)}k=H.b([],[A.dk])
l.B(0,new O.h4(j,k))
C.b.bC(k,new O.h5())
i=C.c.a9(j.e.a.length+3,4)
j.dy.e
return A.mJ(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
ah:function(a,b){if(b!=null)if(!C.b.U(a,b)){b.saV(0,a.length)
a.push(b)}},
aq:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a4(u,u.length);u.v();){t=u.d
t.toString
s=$.iN
if(s==null)s=$.iN=new V.B(0,0,1)
t.a=s
r=$.iM
t.d=r==null?$.iM=new V.B(0,1,0):r
r=$.iL
t.e=r==null?$.iL=new V.B(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bx(s)
r=s.a
p=s.b
o=s.c
t.a=s.w(0,Math.sqrt(r*r+p*p+o*o))
o=q.bx(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.w(0,Math.sqrt(p*p+r*r+s*s))
s=q.bx(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.w(0,Math.sqrt(r*r+p*p+o*o))}}}},
dV:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a
if(b0==null){b0=a9.cO()
u=b1.fr.i(0,b0.aC)
if(u==null){u=A.mI(b0,b1.a)
b1.da(u)}b0=a9.a=u
b2.e=null}t=b0.z
s=t.dm
b0=b2.e
if(!(b0 instanceof Z.bP))b0=b2.e=null
if(b0==null||!b0.d.t(0,s)){b0=t.k3
if(b0)b2.d.aA()
r=t.k4
if(r){q=b2.d
p=q.e
if(p!=null)++p.d
q.d.bZ()
q.a.bZ()
q=q.e
if(q!=null)q.aI(0)}q=t.r2
if(q){p=b2.d
o=p.e
if(o!=null)++o.d
p.a.ha()
p=p.e
if(p!=null)p.aI(0)}n=b2.d.df(new Z.dI(b1.a),s)
n.aD($.an()).e=a9.a.Q.c
if(b0)n.aD($.aY()).e=a9.a.cx.c
if(r)n.aD($.aX()).e=a9.a.ch.c
if(t.r1)n.aD($.aZ()).e=a9.a.cy.c
if(q)n.aD($.bj()).e=a9.a.db.c
if(t.rx)n.aD($.aW()).e=a9.a.dx.c
b2.e=n}m=H.b([],[T.dr])
a9.a.a0(b1)
if(t.dy){b0=a9.a
r=b1.dx
r=r.ga3(r)
b0=b0.dy
b0.toString
b0.am(r.ag(0,!0))}if(t.fr){b0=a9.a
r=b1.cx
if(r==null){r=b1.db
r=r.ga3(r)
q=b1.dx
q=b1.cx=r.A(0,q.ga3(q))
r=q}b0=b0.fr
b0.toString
b0.am(r.ag(0,!0))}b0=a9.a
r=b1.ch
if(r==null){r=b1.ghT()
q=b1.dx
q=b1.ch=r.A(0,q.ga3(q))
r=q}b0=b0.fy
b0.toString
b0.am(r.ag(0,!0))
if(t.ry){b0=a9.a
r=a9.b
b0=b0.k1
b0.toString
b0.am(C.j.ag(r,!0))}if(t.x1){b0=a9.a
r=a9.c
b0=b0.k2
b0.toString
b0.am(C.j.ag(r,!0))}if(t.x2){b0=a9.a
r=a9.d
b0=b0.k3
b0.toString
b0.am(C.j.ag(r,!0))}if(t.y2>0){l=a9.e.a.length
b0=a9.a.k4
b0.a.uniform1i(b0.d,l)
for(k=0;k<l;++k){b0=a9.a
r=a9.e.a
if(k>=r.length)return H.c(r,k)
r=r[k]
b0=b0.r1
if(k>=b0.length)return H.c(b0,k)
b0=b0[k]
j=new Float32Array(H.bE(r.ag(0,!0)))
b0.a.uniformMatrix4fv(b0.d,!1,j)}}b0=t.a
if(b0.a){r=a9.a
q=a9.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.ah(m,a9.f.d)
b0=a9.a
r=a9.f.d
b0.an(b0.rx,r)}if(t.id){b0=t.b
if(b0.a){r=a9.a
q=a9.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.ah(m,a9.r.d)
b0=a9.a
r=a9.r.d
b0.an(b0.x2,r)}b0=t.c
if(b0.a){r=a9.a
q=a9.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.ah(m,a9.x.d)
b0=a9.a
r=a9.x.d
b0.an(b0.aC,r)}b0=t.d
if(b0.a){r=a9.a
q=a9.y.f
r=r.dn
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.ah(m,a9.y.d)
b0=a9.a
r=a9.y.d
b0.an(b0.dq,r)}b0=t.e
r=b0.a
if(r||b0.b||!1){q=a9.a
p=a9.z.ch
q=q.dt
q.a.uniform1f(q.d,p)}if(r){r=a9.a
q=a9.z.f
r=r.dr
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.ah(m,a9.z.d)
b0=a9.a
r=a9.z.d
b0.an(b0.ds,r)}b0=t.z
if(b0.length>0){r=b1.db
i=r.ga3(r)
r=P.w
h=new H.O([r,r])
for(r=a9.dx.e,q=r.length,g=0;g<r.length;r.length===q||(0,H.p)(r),++g){f=r[g]
e=h.i(0,0)
if(e==null)e=0
h.m(0,0,e+1)
d=J.cF(a9.a.c5.i(0,0),e)
p=i.bx(f.a)
o=p.a
c=p.b
b=p.c
b=p.w(0,Math.sqrt(o*o+c*c+b*b))
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
q=a9.a.c4.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.Q
if(b0.length>0){r=b1.db
i=r.ga3(r)
r=P.w
a=new H.O([r,r])
for(r=a9.dx.f,q=r.length,g=0;g<r.length;r.length===q||(0,H.p)(r),++g){f=r[g]
a0=f.gb9()
e=a.i(0,a0)
if(e==null)e=0
a.m(0,a0,e+1)
d=J.cF(a9.a.c7.i(0,a0),e)
a1=i.A(0,f.ga3(f))
p=f.ga3(f)
o=$.c7
p=p.cs(o==null?$.c7=new V.a1(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.c7
p=a1.cs(p==null?$.c7=new V.a1(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gu(f)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gaJ()
p=a1.ce(0)
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
j=new Float32Array(H.bE(new V.d6(o,c,b,a2,a3,a4,a5,a6,p).ag(0,!0)))
a7.a.uniformMatrix3fv(a7.d,!1,j)
f.gaJ()
p=f.gaJ()
if(!C.b.U(m,p)){p.saV(0,m.length)
m.push(p)}p=f.gaJ()
o=p.gci(p)
if(o){o=d.f
o.toString
c=p.d
if(c<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}f.gaZ()
p=f.ge7()
o=d.x
o.toString
c=p.ghk(p)
b=p.ghl(p)
a2=p.ghm()
p=p.ghj()
o.a.uniform4f(o.d,c,b,a2,p)
p=f.gaZ()
if(!C.b.U(m,p)){p.saV(0,m.length)
m.push(p)}p=f.gaZ()
o=p.gci(p)
if(o){o=d.r
o.toString
c=p.d
if(c<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(f.gho()){p=f.gh5()
o=d.y
o.a.uniform1f(o.d,p)
p=f.gh6()
o=d.z
o.a.uniform1f(o.d,p)
p=f.gh7()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.p)(b0),++g){q=b0[g].a
l=a.i(0,q)
if(l==null)l=0
q=a9.a.c6.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.ch
if(b0.length>0){r=b1.db
i=r.ga3(r)
r=P.w
a8=new H.O([r,r])
for(r=a9.dx.r,q=r.length,g=0;g<r.length;r.length===q||(0,H.p)(r),++g){f=r[g]
a0=f.gb9()
e=a8.i(0,a0)
if(e==null)e=0
a8.m(0,a0,e+1)
d=J.cF(a9.a.c9.i(0,a0),e)
p=f.ghS(f)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gi9(f).io()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=i.cs(f.ghS(f))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gu(f)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gaJ()
p=f.gct()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gcr(f)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gip()
o=d.x
o.a.uniform1f(o.d,p)
p=f.giq()
o=d.y
o.a.uniform1f(o.d,p)
f.gaJ()
p=f.gaJ()
if(!C.b.U(m,p)){p.saV(0,m.length)
m.push(p)}p=f.gaJ()
o=p.gci(p)
if(o){o=d.dx
o.toString
c=p.d
if(!c)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}f.gaZ()
p=f.ge7()
o=d.z
o.toString
c=p.ghk(p)
b=p.ghl(p)
a2=p.ghm()
p=p.ghj()
o.a.uniform4f(o.d,c,b,a2,p)
p=f.gaZ()
if(!C.b.U(m,p)){p.saV(0,m.length)
m.push(p)}p=f.gaZ()
o=p.gci(p)
if(o){o=d.dy
o.toString
c=p.d
if(!c)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(f.gia()){p=f.gi8()
o=d.Q
o.a.uniform1f(o.d,p)
p=f.gi7()
o=d.ch
o.a.uniform1f(o.d,p)}if(f.gho()){p=f.gh5()
o=d.cx
o.a.uniform1f(o.d,p)
p=f.gh6()
o=d.cy
o.a.uniform1f(o.d,p)
p=f.gh7()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.p)(b0),++g){q=b0[g].a
l=a8.i(0,q)
if(l==null)l=0
q=a9.a.c8.i(0,q)
q.a.uniform1i(q.d,l)}}}if(t.f.b){a9.ah(m,a9.Q.d)
b0=a9.a
r=a9.Q.d
b0.an(b0.du,r)}if(t.dx){b0=a9.a
r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.ga3(r).ce(0)}b0=b0.id
b0.toString
b0.am(r.ag(0,!0))}if(t.cy){a9.ah(m,a9.ch)
b0=a9.a
r=a9.ch
b0.fP(b0.dv,r)
b0=t.r
if(b0.a){r=a9.a
q=a9.cx.f
r=r.dw
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.ah(m,a9.cx.d)
b0=a9.a
r=a9.cx.d
b0.an(b0.dz,r)}b0=t.x
r=b0.a
if(r||b0.b||!1){q=a9.a
p=a9.cy.ch
q=q.dA
q.a.uniform1f(q.d,p)}if(r){r=a9.a
q=a9.cy.f
r=r.dB
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.ah(m,a9.cy.d)
b0=a9.a
r=a9.cy.d
b0.an(b0.dC,r)}}b0=t.y
r=b0.a
q=!r
if(!q||b0.b||!1){if(r){r=a9.a
p=a9.db.f
r=r.dD
r.a.uniform1f(r.d,p)}if(b0.b){a9.ah(m,a9.db.d)
r=a9.a
p=a9.db.d
r.an(r.dE,p)}r=b1.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].a0(b1)
r=b2.e
r.a0(b1)
r.af(b1)
r.ap(b1)
if(!q||b0.b||!1)b1.a.disable(3042)
for(k=0;k<m.length;++k)m[k].ap(b1)
b0=a9.a
b0.toString
b1.a.useProgram(null)
b0.x.dj()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.cO().aC}}
O.h0.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.cQ(a,C.c.a9(b+3,4)*4))}}
O.h1.prototype={
$2:function(a,b){return J.kc(a.a,b.a)}}
O.h2.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.de(a,C.c.a9(b+3,4)*4))}}
O.h3.prototype={
$2:function(a,b){return J.kc(a.a,b.a)}}
O.h4.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.dk(a,C.c.a9(b+3,4)*4))}}
O.h5.prototype={
$2:function(a,b){return J.kc(a.a,b.a)}}
O.fV.prototype={
ay:function(){var u,t=this
t.cD()
u=t.f
if(!(Math.abs(u-1)<$.D().a)){t.f=1
u=new D.A(t.b,u,1)
u.b=!0
t.a.X(u)}}}
O.c_.prototype={
X:function(a){return this.a.X(a)},
b2:function(){return this.X(null)},
ay:function(){},
b5:function(a){var u,t,s=this
if(!s.c.t(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.ay()
u=s.a
u.a=null
u.X(null)}}}
O.fW.prototype={}
O.as.prototype={
d1:function(a){var u,t,s=this
if(!s.f.t(0,a)){u=s.f
s.f=a
t=new D.A(s.b+".color",u,a)
t.b=!0
s.a.X(t)}},
ay:function(){this.cD()
this.d1(new V.t(1,1,1))},
su:function(a,b){this.b5(new A.W(!0,this.c.b,!1))
this.d1(b)}}
O.fY.prototype={}
O.fZ.prototype={
bV:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.D().a)){u.ch=a
t=new D.A(u.b+".refraction",t,a)
t.b=!0
u.a.X(t)}},
ay:function(){this.cE()
this.bV(1)},
saB:function(a){var u=this,t=u.c.b
if(a<=0){u.b5(new A.W(!1,t,!1))
u.bV(0)}else{u.b5(new A.W(!0,t,!1))
u.bV(a)}}}
O.h_.prototype={
d2:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.D().a)){u.ch=a
t=new D.A(u.b+".shininess",t,a)
t.b=!0
u.a.X(t)}},
ay:function(){this.cE()
this.d2(100)}}
O.di.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.C():u},
X:function(a){var u=this.e
if(u!=null)u.E(a)},
b2:function(){return this.X(null)},
dV:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.i(0,n)
if(u==null){t=a.a
u=new A.hP(t,n)
u.cF(t,n)
u.dM(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.i(0,"posAttr")
u.Q=H.l(u.y.i(0,"fov"),"$iV")
u.ch=H.l(u.y.i(0,"ratio"),"$iV")
u.cx=H.l(u.y.i(0,"boxClr"),"$iI")
u.cy=H.l(u.y.i(0,"boxTxt"),"$ibg")
u.db=H.l(u.y.i(0,"viewMat"),"$iab")
a.da(u)}o.a=u}if(b.e==null){t=b.d.df(new Z.dI(a.a),$.an())
t.aD($.an()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.a0(a)}t=a.d
s=a.c
r=o.a
r.a0(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.cA(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.ga3(s).ce(0)
r=r.db
r.toString
r.am(s.ag(0,!0))
t=b.e
if(t instanceof Z.bP){t.a0(a)
t.af(a)
t.ap(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.dj()
t=o.c
if(t!=null)t.ap(a)}}
O.dq.prototype={}
T.dr.prototype={}
T.i4.prototype={}
T.i8.prototype={
saV:function(a,b){this.a=b},
gp:function(){var u=this.y
return u==null?this.y=D.C():u},
a0:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}},
ap:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(3553,null)}}}
T.i9.prototype={
saV:function(a,b){this.a=b},
gp:function(){var u=this.e
return u==null?this.e=D.C():u},
a0:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
ap:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.ia.prototype={
hC:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.km(a)
t=new T.i8()
t.a=0
t.b=q
t.d=t.c=!1
W.U(u,"load",new T.ic(this,t,u,!1,q,!1,!1),!1)
return t},
aP:function(a,b,c,d,e,f){var u=W.km(c);++this.d
W.U(u,"load",new T.ib(this,u,!1,b,!1,d,a),!1)},
d0:function(a,b,c){var u,t,s,r
b=V.kP(b)
u=V.kP(a.width)
t=V.kP(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kf()
s.width=u
s.height=t
r=C.i.e3(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.od(r.getImageData(0,0,s.width,s.height))}}}
T.ic.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.d0(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.B.dY(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.dl()}++s.e}}
T.ib.prototype={
$1:function(a){var u=this,t=u.a,s=t.d0(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.B.dY(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.dl()}++t.e}}
X.ke.prototype={}
X.fs.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.C():u},
as:function(a){var u=this.x
if(u!=null)u.E(a)},
sdg:function(a,b){var u
if(this.b){this.b=!1
u=new D.A("clearColor",!0,!1)
u.b=!0
this.as(u)}},
a0:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.x(u)
q=C.d.ao(r*u)
r=s.b
if(typeof t!=="number")return H.x(t)
p=C.d.ao(r*t)
r=C.d.ao(s.c*u)
a.c=r
s=C.d.ao(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.fz.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.C():u},
a0:function(a){var u
a.cy.bv(V.bu())
u=V.bu()
a.db.bv(u)},
ap:function(a){a.cy.aG()
a.db.aG()}}
X.dd.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.C():u},
as:function(a){var u=this.f
if(u!=null)u.E(a)},
eq:function(){return this.as(null)},
a0:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.at(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bv(k)
r=$.ld
if(r==null){r=V.lf()
q=V.kB()
p=$.lv
r=V.l9(r,q,p==null?$.lv=new V.B(0,0,-1):p)
$.ld=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aX(0,a,s)
if(t!=null)u=t.A(0,u)}a.db.bv(u)},
ap:function(a){a.cy.aG()
a.db.aG()}}
X.i0.prototype={}
V.cL.prototype={
bi:function(a){this.b=new P.fx(C.Q)
this.c=null
this.d=H.b([],[[P.o,W.aj]])},
M:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.aj]))
u=a.split("\n")
for(l=u.length,t=[W.aj],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.eA(q,0,q.length)
n=o==null?q:o
C.O.e5(p,H.kR(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gav(m.d).push(p)}},
dT:function(a,b){var u,t,s,r,q=this
q.d=H.b([],[[P.o,W.aj]])
u=C.b.k(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bo():t).e_(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r)q.bu(t[r])}}
V.k7.prototype={
$1:function(a){var u=C.d.dZ(this.a.ghv(),2)
if(u!=="0.00")P.kQ(u+" fps")}}
V.f9.prototype={
bu:function(a){var u=this
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
bo:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=R.ih()
a1.c=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=T.q(new H.m("_"))
u.a.push(t)
t=T.L("a","z")
u.a.push(t)
t=T.L("A","Z")
u.a.push(t)
t=a1.j(0,q).k(0,q)
u=T.q(new H.m("_"))
t.a.push(u)
u=T.L("0","9")
t.a.push(u)
u=T.L("a","z")
t.a.push(u)
u=T.L("A","Z")
t.a.push(u)
u=a1.j(0,r).k(0,p)
t=T.L("0","9")
u.a.push(t)
t=a1.j(0,p).k(0,p)
u=T.L("0","9")
t.a.push(u)
u=a1.j(0,p).k(0,o)
t=T.q(new H.m("."))
u.a.push(t)
t=a1.j(0,o).k(0,n)
u=T.L("0","9")
t.a.push(u)
u=a1.j(0,n).k(0,n)
t=T.L("0","9")
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
a1.j(0,k).k(0,k).a.push(new T.aA())
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
a1.j(0,h).k(0,h).a.push(new T.aA())
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
s=[T.b9]
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
u=[P.j]
t.aH(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aH(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aH(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fu.prototype={
bu:function(a){var u=this
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
bo:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=R.ih()
e.c=e.j(0,r)
u=e.j(0,r).k(0,q)
t=T.q(new H.m("_"))
u.a.push(t)
t=T.L("a","z")
u.a.push(t)
t=T.L("A","Z")
u.a.push(t)
t=e.j(0,q).k(0,q)
u=T.q(new H.m("_"))
t.a.push(u)
u=T.L("0","9")
t.a.push(u)
u=T.L("a","z")
t.a.push(u)
u=T.L("A","Z")
t.a.push(u)
u=e.j(0,r).k(0,p)
t=T.L("0","9")
u.a.push(t)
t=e.j(0,p).k(0,p)
u=T.L("0","9")
t.a.push(u)
u=e.j(0,p).k(0,o)
t=T.q(new H.m("."))
u.a.push(t)
t=e.j(0,o).k(0,n)
u=T.L("0","9")
t.a.push(u)
u=e.j(0,n).k(0,n)
t=T.L("0","9")
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
e.j(0,k).k(0,m).a.push(new T.aA())
t=e.j(0,j).k(0,i)
u=T.q(new H.m("\n"))
t.a.push(u)
u=e.j(0,j).k(0,j)
t=new T.a5()
s=[T.b9]
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
t=[P.j]
u.aH(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aH(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aH(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.fv.prototype={
bu:function(a){var u=this,t="#111"
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
bo:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=R.ih()
l.c=l.j(0,s)
u=l.j(0,s).k(0,r)
t=T.q(new H.m("_"))
u.a.push(t)
t=T.L("a","z")
u.a.push(t)
t=T.L("A","Z")
u.a.push(t)
t=l.j(0,r).k(0,r)
u=T.q(new H.m("_"))
t.a.push(u)
u=T.L("0","9")
t.a.push(u)
u=T.L("a","z")
t.a.push(u)
u=T.L("A","Z")
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
l.j(0,o).k(0,o).a.push(new T.aA())
l.j(0,s).k(0,m).a.push(new T.aA())
u=l.j(0,m).k(0,m)
t=new T.a5()
t.a=H.b([],[T.b9])
u.a.push(t)
u=T.q(new H.m('</\\-!>=_"'))
t.a.push(u)
u=T.L("a","z")
t.a.push(u)
u=T.L("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.O("Symbol")
u=l.j(0,n)
u.d=u.a.O("String")
u=l.j(0,r)
t=u.a.O(r)
u.d=t
t.aH(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.j]))
t=l.j(0,q)
t.d=t.a.O(q)
t=l.j(0,m)
t.d=t.a.O(m)
return l}}
V.hp.prototype={
dT:function(a,b){this.d=H.b([],[[P.o,W.aj]])
this.M(C.b.k(b,"\n"),"#111")},
bu:function(a){},
bo:function(){return}}
V.hu.prototype={
d7:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.iD().gbd().i(0,H.e(u))
if(t==null)if(d){c.$0()
m.b6(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.bM(m.c).n(0,q)
o=W.my("radio")
o.checked=s
o.name=u
W.U(o,"change",new V.hv(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.bM(m.c).n(0,r.createElement("br"))},
ac:function(a,b,c){return this.d7(a,b,c,!1)},
b6:function(a){var u,t,s=P.iD(),r=P.j,q=P.l7(s.gbd(),r,r)
q.m(0,this.a,a)
u=s.cq(0,q)
r=window.history
t=u.h(0)
r.toString
r.replaceState(new P.ek([],[]).by(""),"",t)}}
V.hv.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.b6(u.d)}}}
V.hL.prototype={
ei:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.U(q,"scroll",new V.hN(o),!1)},
d9:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.fR()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.e_(C.b.hA(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
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
if(H.oy(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.eu(C.x,n,C.e,!1)
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
e2:function(a){var u,t,s,r=new V.f9("dart")
r.bi("dart")
u=new V.fu("glsl")
u.bi("glsl")
t=new V.fv("html")
t.bi("html")
s=C.b.hs(H.b([r,u,t],[V.cL]),new V.hO(a))
if(s!=null)return s
r=new V.hp("plain")
r.bi("plain")
return r},
d8:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.w])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cA(s).a4(s,"+")){b0[t]=C.a.ab(s,1)
a6.push(1)
u=!0}else if(C.a.a4(s,"-")){b0[t]=C.a.ab(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.e2(a8)
r.dT(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.eu(C.x,a7,C.e,!1)
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
for(a2=C.b.gT(s);a2.v();)d.appendChild(a2.gI(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
h_:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
for(s=0;s<2;++s){r=o.createElement("div")
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
fR:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=R.ih()
u.c=u.j(0,q)
t=u.j(0,q).k(0,p)
s=T.q(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new T.a5()
r=[T.b9]
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
u.j(0,q).k(0,i).a.push(new T.aA())
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
V.hN.prototype={
$1:function(a){P.lo(C.n,new V.hM(this.a))}}
V.hM.prototype={
$0:function(){var u=C.d.ao(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.hO.prototype={
$1:function(a){return a.a===this.a}}
V.i5.prototype={
ac:function(a,b,c){var u,t,s,r,q=this,p=W.km(null)
p.src=b
p.height=p.width=64
u=p.style
u.border="solid 2px white"
u=J.bM(q.c)
t=u.gl(u)
W.U(p,"click",new V.i7(q,p,b,t),!1)
J.bM(q.c).n(0,p)
J.bM(q.c).n(0,document.createElement("br"))
s=P.iD().gbd().i(0,H.e(q.a))
if(s==null){q.b6(t)
r=c}else r=P.cC(s,null,null)===t
if(r)p.click()},
n:function(a,b){return this.ac(a,b,!1)},
b6:function(a){var u,t,s=P.iD(),r=P.j,q=P.l7(s.gbd(),r,r)
q.m(0,this.a,""+a)
u=s.cq(0,q)
r=window.history
t=u.h(0)
r.toString
r.replaceState(new P.ek([],[]).by(""),"",t)}}
V.i7.prototype={
$1:function(a){var u=this,t=u.a,s=J.bM(t.c)
s.B(s,new V.i6())
s=u.b.style
s.border="solid 2px black"
t.d.$1(u.c)
t.b6(u.d)}}
V.i6.prototype={
$1:function(a){var u
if(!!J.N(a).$ibr){u=a.style
u.border="solid 2px white"}}}
B.jW.prototype={
$0:function(){var u=this.a,t=u.r
t.su(0,new V.t(0.1,0.1,0.1))
t=u.x
t.su(0,new V.t(0.2,0.2,0.2))
u.cy.su(0,new V.t(0,0,0))
u.cx.su(0,new V.t(1,1,1))}}
B.jX.prototype={
$0:function(){var u=this.a,t=u.r
t.su(0,new V.t(0.11,0.11,0.1))
t=u.x
t.su(0,new V.t(0.21,0.21,0.2))
u.cy.su(0,new V.t(0,0,0))
u=u.cx
u.su(0,new V.t(1,0.9,0.5))}}
B.jY.prototype={
$0:function(){var u=this.a,t=u.r
t.su(0,new V.t(0.1,0.1,0.1))
t=u.x
t.su(0,new V.t(0.1,0.1,0.1))
u.cy.saB(0.4)
t=u.cy
t.su(0,new V.t(0.6,0.6,0.6))
u=u.cx
u.su(0,new V.t(0.4,0.4,0.4))}}
B.jZ.prototype={
$0:function(){var u=this.a,t=u.r
t.su(0,new V.t(0.1,0.1,0.1))
t=u.x
t.su(0,new V.t(0.1,0.1,0.1))
u.cy.saB(0.4)
t=u.cy
t.su(0,new V.t(0.2,0.3,1))
u=u.cx
u.su(0,new V.t(0.3,0.3,0.3))}}
B.k_.prototype={
$0:function(){var u=this.a,t=u.r
t.su(0,new V.t(0.1,0.1,0.1))
t=u.x
t.su(0,new V.t(0.1,0.1,0.1))
u.cy.saB(0.6)
t=u.cy
t.su(0,new V.t(0.8,0.8,0.8))
u=u.cx
u.su(0,new V.t(0.2,0.2,0.2))}}
B.k0.prototype={
$0:function(){var u=this.a,t=u.r
t.su(0,new V.t(0.1,0.1,0.1))
t=u.x
t.su(0,new V.t(0.1,0.1,0.1))
u.cy.saB(0.6)
u.cy.su(0,new V.t(1,1,1))
u.cx.su(0,new V.t(0,0,0))}}
B.k1.prototype={
$0:function(){var u=this.a,t=u.r
t.su(0,new V.t(0.1,0.1,0.1))
t=u.x
t.su(0,new V.t(0.1,0.1,0.1))
u.cy.saB(0.9)
t=u.cy
t.su(0,new V.t(1,0.8,0.8))
u.cx.su(0,new V.t(0,0,0))}}
B.k2.prototype={
$0:function(){var u,t=this.a
t.r.su(0,new V.t(0,0,0))
u=t.x
u.su(0,new V.t(0.1,0.1,0.1))
t.cy.saB(0.99)
u=t.cy
u.su(0,new V.t(0.95,0.95,0.95))
t.cx.su(0,new V.t(0,0,0))}}
B.k3.prototype={
$0:function(){var u=this.a,t=u.r
t.su(0,new V.t(0.3,0.3,0.3))
t=u.x
t.su(0,new V.t(0.5,0.5,0.5))
u.cy.su(0,new V.t(0,0,0))
u=u.cx
u.su(0,new V.t(0.3,0.3,0.3))}}
B.k4.prototype={
$1:function(a){var u,t=this.a.Q,s=this.b.f.hC(a),r=t.c
if(!r.b)t.b5(new A.W(r.a,!0,!1))
r=t.d
if(r!==s){if(r!=null)r.gp().V(0,t.gaQ())
u=t.d
t.d=s
s.gp().n(0,t.gaQ())
s=new D.A(t.b+".texture2D",u,t.d)
s.b=!0
t.a.X(s)}}}
B.k5.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.j]
u.d8("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.d8("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.ea=u.h
u=J.d_.prototype
u.ec=u.h
u=P.h.prototype
u.eb=u.bz
u=W.Q.prototype
u.bD=u.ai
u=W.eb.prototype
u.ed=u.au
u=T.cW.prototype
u.e9=u.aF
u.cC=u.h
u=O.c_.prototype
u.cD=u.ay
u=O.as.prototype
u.cE=u.ay})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"o7","ng",7)
u(P,"o8","nh",7)
u(P,"o9","ni",7)
t(P,"lM","o5",9)
s(W,"om",4,null,["$4"],["nj"],16,0)
s(W,"on",4,null,["$4"],["nk"],16,0)
var m
r(m=E.aE.prototype,"gdR",0,0,null,["$1","$0"],["dS","hK"],0,0)
r(m,"gdP",0,0,null,["$1","$0"],["dQ","hH"],0,0)
q(m,"ghF","hG",4)
q(m,"ghI","hJ",4)
r(m=E.ds.prototype,"gcH",0,0,null,["$1","$0"],["cJ","cI"],0,0)
p(m,"ghX","dW",9)
o(m=X.dC.prototype,"gf6","f7",5)
o(m,"geV","eW",5)
o(m,"gf0","f1",2)
o(m,"gfa","fb",10)
o(m,"gf8","f9",10)
o(m,"gfe","ff",2)
o(m,"gfi","fj",2)
o(m,"gf4","f5",2)
o(m,"gfg","fh",2)
o(m,"gf2","f3",2)
o(m,"gfk","fl",19)
o(m,"gfm","fn",5)
o(m,"gfF","fG",6)
o(m,"gfB","fC",6)
o(m,"gfD","fE",6)
r(D.bo.prototype,"gek",0,0,null,["$1","$0"],["aw","el"],0,0)
r(m=D.d1.prototype,"gcW",0,0,null,["$1","$0"],["cX","fc"],0,0)
o(m,"gfo","fp",20)
q(m,"geP","eQ",11)
q(m,"gft","fu",11)
n(V.F.prototype,"gl","cf",12)
n(V.B.prototype,"gl","cf",12)
r(m=U.bV.prototype,"gaN",0,0,null,["$1","$0"],["R","a8"],0,0)
q(m,"geN","eO",13)
q(m,"gfq","fs",13)
r(m=U.dD.prototype,"gaN",0,0,null,["$1","$0"],["R","a8"],0,0)
o(m,"gbM","bN",1)
o(m,"gbO","bP",1)
o(m,"gbQ","bR",1)
r(m=U.dE.prototype,"gaN",0,0,null,["$1","$0"],["R","a8"],0,0)
o(m,"gbM","bN",1)
o(m,"gbO","bP",1)
o(m,"gbQ","bR",1)
o(m,"geG","eH",1)
o(m,"geI","eJ",1)
o(m,"gfY","fZ",1)
o(m,"gfW","fX",1)
o(m,"gfU","fV",1)
o(U.dF.prototype,"geL","eM",1)
r(m=M.cM.prototype,"gZ",0,0,null,["$1","$0"],["a_","b_"],0,0)
q(m,"gfv","fw",14)
q(m,"gfz","fA",14)
r(M.cO.prototype,"gZ",0,0,null,["$1","$0"],["a_","b_"],0,0)
r(m=M.cT.prototype,"gZ",0,0,null,["$1","$0"],["a_","b_"],0,0)
q(m,"geX","eY",4)
q(m,"geZ","f_",4)
r(m=O.d5.prototype,"gaQ",0,0,null,["$1","$0"],["X","b2"],0,0)
r(m,"gfL",0,0,null,["$1","$0"],["cZ","fM"],0,0)
q(m,"geR","eS",15)
q(m,"geT","eU",15)
r(O.c_.prototype,"gaQ",0,0,null,["$1","$0"],["X","b2"],0,0)
r(O.di.prototype,"gaQ",0,0,null,["$1","$0"],["X","b2"],0,0)
r(X.dd.prototype,"gep",0,0,null,["$1","$0"],["as","eq"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a_,null)
s(P.a_,[H.kr,J.a,J.a4,P.dZ,P.h,H.bZ,P.fB,H.cU,H.iz,H.f1,H.im,P.bp,H.bQ,H.eg,P.aH,H.fH,H.fJ,H.fD,P.en,P.dJ,P.dn,P.hX,P.dt,P.jE,P.jj,P.jd,P.dY,P.r,P.jw,P.fQ,P.eY,P.fy,P.jC,P.jB,P.az,P.a7,P.ac,P.b1,P.hn,P.dl,P.dR,P.fr,P.ft,P.o,P.S,P.bb,P.j,P.T,P.bC,P.iB,P.jm,W.f5,W.cl,W.J,W.db,W.eb,W.jr,W.cV,W.aL,W.ji,W.ev,P.jo,P.es,P.je,P.bz,T.aA,T.cW,T.b9,T.hw,T.hG,R.dm,R.du,R.dv,R.ig,O.aB,O.c0,E.eU,E.aE,E.hy,E.ds,Z.dH,Z.dI,Z.bP,Z.bs,Z.aU,D.eX,D.bq,D.X,X.cK,X.d0,X.fF,X.fN,X.ag,X.hc,X.ii,X.dC,D.bo,D.a8,D.hr,D.hS,V.t,V.aC,V.fj,V.d6,V.aI,V.a0,V.a1,V.aO,V.df,V.F,V.B,U.dD,U.dE,U.dF,M.cO,M.cT,M.ak,A.cI,A.eN,A.W,A.cQ,A.de,A.dk,A.fX,A.cf,A.ch,A.ci,A.dy,A.iu,F.b2,F.bY,F.c6,F.hH,F.hI,F.hJ,F.hK,F.bB,F.iP,F.iQ,F.iT,F.iU,O.dq,O.c_,O.fY,T.ia,X.ke,X.i0,X.fz,X.dd,V.cL,V.hu,V.hL,V.i5])
s(J.a,[J.fC,J.cZ,J.d_,J.b5,J.bX,J.b6,H.c3,H.ba,W.f,W.eK,W.bl,W.aq,W.H,W.dL,W.af,W.fa,W.fb,W.dN,W.cS,W.dP,W.fd,W.i,W.dS,W.aF,W.fw,W.dU,W.aG,W.fM,W.h6,W.e_,W.e0,W.aJ,W.e1,W.e4,W.aM,W.e8,W.ea,W.aQ,W.ec,W.aR,W.eh,W.av,W.el,W.ie,W.aT,W.eo,W.ik,W.iH,W.ew,W.ey,W.eA,W.eC,W.eE,P.b8,P.dW,P.bc,P.e6,P.ht,P.ei,P.be,P.eq,P.eO,P.dK,P.dg,P.ee])
s(J.d_,[J.ho,J.bA,J.b7])
t(J.kq,J.b5)
s(J.bX,[J.cY,J.cX])
t(P.fL,P.dZ)
s(P.fL,[H.dA,W.j3,W.a2,P.fn])
t(H.m,H.dA)
s(P.h,[H.fg,H.fR,H.cj])
s(H.fg,[H.d3,H.fI])
s(P.fB,[H.fS,H.iY])
t(H.fT,H.d3)
t(H.f2,H.f1)
s(P.bp,[H.hk,H.fE,H.iy,H.eW,H.hE,P.dc,P.ai,P.iA,P.iw,P.cb,P.f0,P.f8])
s(H.bQ,[H.ka,H.i1,H.jS,H.jT,H.jU,P.j_,P.iZ,P.j0,P.j1,P.jv,P.ju,P.jN,P.jg,P.jh,P.fK,P.fP,P.fe,P.ff,P.iG,P.iC,P.iE,P.iF,P.jx,P.jy,P.jA,P.jz,P.jI,P.jH,P.jJ,P.jK,W.fh,W.h8,W.ha,W.hD,W.hW,W.j8,W.hj,W.hi,W.jk,W.jl,W.jt,W.jD,P.jp,P.jO,P.fo,P.fp,P.eQ,E.hz,E.hA,E.hB,E.id,D.fk,D.fl,F.jF,F.iW,F.iV,F.iR,F.iS,O.h0,O.h1,O.h2,O.h3,O.h4,O.h5,T.ic,T.ib,V.k7,V.hv,V.hN,V.hM,V.hO,V.i7,V.i6,B.jW,B.jX,B.jY,B.jZ,B.k_,B.k0,B.k1,B.k2,B.k3,B.k4,B.k5])
s(H.i1,[H.hU,H.bN])
t(P.fO,P.aH)
s(P.fO,[H.O,W.j2])
t(H.d7,H.ba)
s(H.d7,[H.cn,H.cp])
t(H.co,H.cn)
t(H.c4,H.co)
t(H.cq,H.cp)
t(H.d8,H.cq)
s(H.d8,[H.hd,H.he,H.hf,H.hg,H.hh,H.d9,H.c5])
t(P.jf,P.jE)
t(P.jc,P.jj)
t(P.et,P.fQ)
t(P.dB,P.et)
s(P.eY,[P.eS,P.fi])
t(P.f3,P.hX)
s(P.f3,[P.eT,P.fx,P.iK,P.iJ])
t(P.iI,P.fi)
s(P.ac,[P.M,P.w])
s(P.ai,[P.bx,P.fA])
t(P.j5,P.bC)
s(W.f,[W.E,W.fm,W.c1,W.aP,W.cr,W.aS,W.aw,W.ct,W.iX,W.ck,P.eR,P.bk])
s(W.E,[W.Q,W.b0])
s(W.Q,[W.n,P.k])
s(W.n,[W.eL,W.eM,W.bm,W.bn,W.aj,W.fq,W.br,W.hF,W.dp,W.hZ,W.i_,W.cd])
t(W.f4,W.aq)
t(W.bR,W.dL)
s(W.af,[W.f6,W.f7])
t(W.dO,W.dN)
t(W.cR,W.dO)
t(W.dQ,W.dP)
t(W.fc,W.dQ)
t(W.ar,W.bl)
t(W.dT,W.dS)
t(W.bU,W.dT)
t(W.dV,W.dU)
t(W.bW,W.dV)
t(W.bf,W.i)
s(W.bf,[W.bt,W.au,W.by])
t(W.h7,W.e_)
t(W.h9,W.e0)
t(W.e2,W.e1)
t(W.hb,W.e2)
t(W.e5,W.e4)
t(W.da,W.e5)
t(W.e9,W.e8)
t(W.hq,W.e9)
t(W.hC,W.ea)
t(W.cs,W.cr)
t(W.hQ,W.cs)
t(W.ed,W.ec)
t(W.hR,W.ed)
t(W.hV,W.eh)
t(W.em,W.el)
t(W.i2,W.em)
t(W.cu,W.ct)
t(W.i3,W.cu)
t(W.ep,W.eo)
t(W.ij,W.ep)
t(W.bh,W.au)
t(W.ex,W.ew)
t(W.j4,W.ex)
t(W.dM,W.cS)
t(W.ez,W.ey)
t(W.j9,W.ez)
t(W.eB,W.eA)
t(W.e3,W.eB)
t(W.eD,W.eC)
t(W.jn,W.eD)
t(W.eF,W.eE)
t(W.jq,W.eF)
t(W.j6,W.j2)
t(W.j7,P.dn)
t(W.js,W.eb)
t(P.ek,P.jo)
t(P.aa,P.je)
t(P.dX,P.dW)
t(P.fG,P.dX)
t(P.e7,P.e6)
t(P.hl,P.e7)
t(P.ca,P.k)
t(P.ej,P.ei)
t(P.hY,P.ej)
t(P.er,P.eq)
t(P.il,P.er)
t(P.eP,P.dK)
t(P.hm,P.bk)
t(P.ef,P.ee)
t(P.hT,P.ef)
s(T.cW,[T.a5,R.dx])
s(E.eU,[Z.cJ,A.dh,T.dr])
s(D.X,[D.b3,D.b4,D.A,X.hs])
s(X.hs,[X.d4,X.aK,X.c2,X.dw])
s(O.aB,[D.d1,U.bV,M.cM])
s(D.eX,[U.f_,U.a9])
t(U.cN,U.a9)
s(A.dh,[A.fU,A.hP])
s(A.dy,[A.dz,A.ir,A.is,A.it,A.ip,A.V,A.iq,A.I,A.ce,A.iv,A.cg,A.ab,A.Z,A.bg])
s(O.dq,[O.d5,O.di])
s(O.c_,[O.fV,O.fW,O.as])
s(O.as,[O.fZ,O.h_])
s(T.dr,[T.i4,T.i9])
t(T.i8,T.i4)
t(X.fs,X.i0)
s(V.cL,[V.f9,V.fu,V.fv,V.hp])
u(H.dA,H.iz)
u(H.cn,P.r)
u(H.co,H.cU)
u(H.cp,P.r)
u(H.cq,H.cU)
u(P.dZ,P.r)
u(P.et,P.jw)
u(W.dL,W.f5)
u(W.dN,P.r)
u(W.dO,W.J)
u(W.dP,P.r)
u(W.dQ,W.J)
u(W.dS,P.r)
u(W.dT,W.J)
u(W.dU,P.r)
u(W.dV,W.J)
u(W.e_,P.aH)
u(W.e0,P.aH)
u(W.e1,P.r)
u(W.e2,W.J)
u(W.e4,P.r)
u(W.e5,W.J)
u(W.e8,P.r)
u(W.e9,W.J)
u(W.ea,P.aH)
u(W.cr,P.r)
u(W.cs,W.J)
u(W.ec,P.r)
u(W.ed,W.J)
u(W.eh,P.aH)
u(W.el,P.r)
u(W.em,W.J)
u(W.ct,P.r)
u(W.cu,W.J)
u(W.eo,P.r)
u(W.ep,W.J)
u(W.ew,P.r)
u(W.ex,W.J)
u(W.ey,P.r)
u(W.ez,W.J)
u(W.eA,P.r)
u(W.eB,W.J)
u(W.eC,P.r)
u(W.eD,W.J)
u(W.eE,P.r)
u(W.eF,W.J)
u(P.dW,P.r)
u(P.dX,W.J)
u(P.e6,P.r)
u(P.e7,W.J)
u(P.ei,P.r)
u(P.ej,W.J)
u(P.eq,P.r)
u(P.er,W.J)
u(P.dK,P.aH)
u(P.ee,P.r)
u(P.ef,W.J)})()
var v={mangledGlobalNames:{w:"int",M:"double",ac:"num",j:"String",az:"bool",bb:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.X]},{func:1,ret:-1,args:[D.X]},{func:1,ret:-1,args:[W.au]},{func:1,ret:P.bb,args:[,,]},{func:1,ret:-1,args:[P.w,[P.h,E.aE]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.by]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bt]},{func:1,ret:-1,args:[P.w,[P.h,D.a8]]},{func:1,ret:P.M},{func:1,ret:-1,args:[P.w,[P.h,U.a9]]},{func:1,ret:-1,args:[P.w,[P.h,M.ak]]},{func:1,ret:-1,args:[P.w,[P.h,V.aI]]},{func:1,ret:P.az,args:[W.Q,P.j,P.j,W.cl]},{func:1,ret:P.bb,args:[,]},{func:1,ret:P.bz,args:[,,]},{func:1,ret:-1,args:[W.bh]},{func:1,ret:P.az,args:[[P.h,D.a8]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bm.prototype
C.i=W.bn.prototype
C.O=W.aj.prototype
C.R=J.a.prototype
C.b=J.b5.prototype
C.S=J.cX.prototype
C.c=J.cY.prototype
C.j=J.cZ.prototype
C.d=J.bX.prototype
C.a=J.b6.prototype
C.T=J.b7.prototype
C.A=J.ho.prototype
C.B=P.dg.prototype
C.C=W.dp.prototype
C.q=J.bA.prototype
C.D=W.bh.prototype
C.E=W.ck.prototype
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

C.M=new P.hn()
C.e=new P.iI()
C.N=new P.iK()
C.f=new P.jf()
C.n=new P.b1(0)
C.P=new P.b1(5e6)
C.Q=new P.fy("element",!1,!1,!1)
C.v=H.b(u([127,2047,65535,1114111]),[P.w])
C.k=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.w])
C.U=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.j])
C.l=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.w])
C.m=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.w])
C.V=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.j])
C.w=H.b(u([]),[P.j])
C.W=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.w])
C.x=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.h=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.w])
C.y=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.w])
C.X=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.w])
C.z=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.w])
C.o=H.b(u(["bind","if","ref","repeat","syntax"]),[P.j])
C.p=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.j])
C.Y=new H.f2(0,{},C.w,[P.j,P.j])})();(function staticFields(){$.ao=0
$.bO=null
$.kZ=null
$.lO=null
$.lL=null
$.lS=null
$.jP=null
$.jV=null
$.kN=null
$.bF=null
$.cx=null
$.cy=null
$.kI=!1
$.al=C.f
$.a6=[]
$.aD=null
$.kj=null
$.l4=null
$.l3=null
$.cm=P.kt(P.j,P.ft)
$.la=null
$.le=null
$.c7=null
$.lk=null
$.lu=null
$.lw=null
$.iL=null
$.iM=null
$.iN=null
$.lv=null
$.ld=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oG","lW",function(){return H.lN("_$dart_dartClosure")})
u($,"oH","kS",function(){return H.lN("_$dart_js")})
u($,"oI","lX",function(){return H.ax(H.io({
toString:function(){return"$receiver$"}}))})
u($,"oJ","lY",function(){return H.ax(H.io({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oK","lZ",function(){return H.ax(H.io(null))})
u($,"oL","m_",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oO","m2",function(){return H.ax(H.io(void 0))})
u($,"oP","m3",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oN","m1",function(){return H.ax(H.lq(null))})
u($,"oM","m0",function(){return H.ax(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"oR","m5",function(){return H.ax(H.lq(void 0))})
u($,"oQ","m4",function(){return H.ax(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"p4","kT",function(){return P.nf()})
u($,"oS","m6",function(){return P.na()})
u($,"p5","ma",function(){return H.mK(H.bE(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.w])))})
u($,"p7","mc",function(){return P.mY("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"p8","md",function(){return P.nE()})
u($,"p6","mb",function(){return P.l8(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.j)})
u($,"oZ","m9",function(){return Z.ah(0)})
u($,"oT","m7",function(){return Z.ah(511)})
u($,"p0","an",function(){return Z.ah(1)})
u($,"p_","aY",function(){return Z.ah(2)})
u($,"oV","aX",function(){return Z.ah(4)})
u($,"p1","aZ",function(){return Z.ah(8)})
u($,"p2","bj",function(){return Z.ah(16)})
u($,"oW","cD",function(){return Z.ah(32)})
u($,"oX","cE",function(){return Z.ah(64)})
u($,"oY","m8",function(){return Z.ah(96)})
u($,"p3","bL",function(){return Z.ah(128)})
u($,"oU","aW",function(){return Z.ah(256)})
u($,"oF","lV",function(){return new V.fj(1e-9)})
u($,"oE","D",function(){return $.lV()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.c3,DataView:H.ba,ArrayBufferView:H.ba,Float32Array:H.c4,Float64Array:H.c4,Int16Array:H.hd,Int32Array:H.he,Int8Array:H.hf,Uint16Array:H.hg,Uint32Array:H.hh,Uint8ClampedArray:H.d9,CanvasPixelArray:H.d9,Uint8Array:H.c5,HTMLAudioElement:W.n,HTMLBRElement:W.n,HTMLBaseElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLInputElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMediaElement:W.n,HTMLMenuElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableCellElement:W.n,HTMLTableDataCellElement:W.n,HTMLTableHeaderCellElement:W.n,HTMLTableColElement:W.n,HTMLTextAreaElement:W.n,HTMLTimeElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLVideoElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLFrameSetElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,AccessibleNodeList:W.eK,HTMLAnchorElement:W.eL,HTMLAreaElement:W.eM,Blob:W.bl,HTMLBodyElement:W.bm,HTMLCanvasElement:W.bn,CDATASection:W.b0,CharacterData:W.b0,Comment:W.b0,ProcessingInstruction:W.b0,Text:W.b0,CSSPerspective:W.f4,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.bR,MSStyleCSSProperties:W.bR,CSS2Properties:W.bR,CSSImageValue:W.af,CSSKeywordValue:W.af,CSSNumericValue:W.af,CSSPositionValue:W.af,CSSResourceValue:W.af,CSSUnitValue:W.af,CSSURLImageValue:W.af,CSSStyleValue:W.af,CSSMatrixComponent:W.aq,CSSRotation:W.aq,CSSScale:W.aq,CSSSkew:W.aq,CSSTranslation:W.aq,CSSTransformComponent:W.aq,CSSTransformValue:W.f6,CSSUnparsedValue:W.f7,DataTransferItemList:W.fa,HTMLDivElement:W.aj,DOMException:W.fb,ClientRectList:W.cR,DOMRectList:W.cR,DOMRectReadOnly:W.cS,DOMStringList:W.fc,DOMTokenList:W.fd,Element:W.Q,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.ar,FileList:W.bU,FileWriter:W.fm,HTMLFormElement:W.fq,Gamepad:W.aF,History:W.fw,HTMLCollection:W.bW,HTMLFormControlsCollection:W.bW,HTMLOptionsCollection:W.bW,ImageData:W.aG,HTMLImageElement:W.br,KeyboardEvent:W.bt,Location:W.fM,MediaList:W.h6,MessagePort:W.c1,MIDIInputMap:W.h7,MIDIOutputMap:W.h9,MimeType:W.aJ,MimeTypeArray:W.hb,PointerEvent:W.au,MouseEvent:W.au,DragEvent:W.au,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,Attr:W.E,DocumentType:W.E,Node:W.E,NodeList:W.da,RadioNodeList:W.da,Plugin:W.aM,PluginArray:W.hq,RTCStatsReport:W.hC,HTMLSelectElement:W.hF,SourceBuffer:W.aP,SourceBufferList:W.hQ,SpeechGrammar:W.aQ,SpeechGrammarList:W.hR,SpeechRecognitionResult:W.aR,Storage:W.hV,CSSStyleSheet:W.av,StyleSheet:W.av,HTMLTableElement:W.dp,HTMLTableRowElement:W.hZ,HTMLTableSectionElement:W.i_,HTMLTemplateElement:W.cd,TextTrack:W.aS,TextTrackCue:W.aw,VTTCue:W.aw,TextTrackCueList:W.i2,TextTrackList:W.i3,TimeRanges:W.ie,Touch:W.aT,TouchEvent:W.by,TouchList:W.ij,TrackDefaultList:W.ik,CompositionEvent:W.bf,FocusEvent:W.bf,TextEvent:W.bf,UIEvent:W.bf,URL:W.iH,VideoTrackList:W.iX,WheelEvent:W.bh,Window:W.ck,DOMWindow:W.ck,CSSRuleList:W.j4,ClientRect:W.dM,DOMRect:W.dM,GamepadList:W.j9,NamedNodeMap:W.e3,MozNamedAttrMap:W.e3,SpeechRecognitionResultList:W.jn,StyleSheetList:W.jq,SVGLength:P.b8,SVGLengthList:P.fG,SVGNumber:P.bc,SVGNumberList:P.hl,SVGPointList:P.ht,SVGScriptElement:P.ca,SVGStringList:P.hY,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGElement:P.k,SVGTransform:P.be,SVGTransformList:P.il,AudioBuffer:P.eO,AudioParamMap:P.eP,AudioTrackList:P.eR,AudioContext:P.bk,webkitAudioContext:P.bk,BaseAudioContext:P.bk,OfflineAudioContext:P.hm,WebGL2RenderingContext:P.dg,SQLResultSetRowList:P.hT})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.cn.$nativeSuperclassTag="ArrayBufferView"
H.co.$nativeSuperclassTag="ArrayBufferView"
H.c4.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.cq.$nativeSuperclassTag="ArrayBufferView"
H.d8.$nativeSuperclassTag="ArrayBufferView"
W.cr.$nativeSuperclassTag="EventTarget"
W.cs.$nativeSuperclassTag="EventTarget"
W.ct.$nativeSuperclassTag="EventTarget"
W.cu.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.lQ,[])
else B.lQ([])})})()
//# sourceMappingURL=test.dart.js.map
