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
a[c]=function(){a[c]=function(){H.nx(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jL"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jL"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jL(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={js:function js(){},
j2:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
lx:function(){return new P.he("No element")},
cY:function(a,b,c,d){if(c-b<=32)H.m1(a,b,c,d)
else H.m0(a,b,c,d)},
m1:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.b(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.b(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.U()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.b(a,q)
C.b.k(a,s,a[q])
s=q}C.b.k(a,s,t)}},
m0:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.c.a_(a4-a3+1,6),d=a3+e,c=a4-e,b=C.c.a_(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.U()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.U()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.U()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.U()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.U()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.U()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.U()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.U()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.U()
if(a1>0){p=q
q=r
r=p}C.b.k(a2,d,u)
C.b.k(a2,b,s)
C.b.k(a2,c,q)
if(a3<0||a3>=a2.length)return H.b(a2,a3)
C.b.k(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.b(a2,a4)
C.b.k(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.E(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.M()
if(k<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.k(a2,m,a2[o])
C.b.k(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.U()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.b.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.b.k(a2,o,a2[n])
C.b.k(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.b(a2,n)
C.b.k(a2,m,a2[n])
C.b.k(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.M()
if(g<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.k(a2,m,a2[o])
C.b.k(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.U()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.U()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.M()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.b.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.b.k(a2,o,a2[n])
C.b.k(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.b.k(a2,m,a2[n])
C.b.k(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.b(a2,a1)
C.b.k(a2,a3,a2[a1])
C.b.k(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.b(a2,a1)
C.b.k(a2,a4,a2[a1])
C.b.k(a2,a1,r)
H.cY(a2,a3,o-2,a5)
H.cY(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.b(a2,o)
if(!J.E(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.b(a2,n)
if(!J.E(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.k(a2,m,a2[o])
C.b.k(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.M()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.b.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.b.k(a2,o,a2[n])
C.b.k(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.b.k(a2,m,a2[n])
C.b.k(a2,n,l)}n=j
break}}}H.cY(a2,o,n,a5)}else H.cY(a2,o,n,a5)},
N:function N(a){this.a=a},
eQ:function eQ(){},
cH:function cH(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fk:function fk(a,b,c){this.a=a
this.b=b
this.$ti=c},
fl:function fl(a,b){this.a=null
this.b=a
this.c=b},
i8:function i8(a,b,c){this.a=a
this.b=b
this.$ti=c},
i9:function i9(a,b){this.a=a
this.b=b},
cy:function cy(){},
hL:function hL(){},
dc:function dc(){},
lq:function(){throw H.c(P.v("Cannot modify unmodifiable Map"))},
ef:function(a){var u,t=H.ny(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
nj:function(a){return v.types[a]},
kO:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Q(a).$iy},
f:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a2(a)
if(typeof u!=="string")throw H.c(H.af(a))
return u},
bV:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
lT:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.b(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.T(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.D(s,q)|32)>t)return}return parseInt(a,b)},
bW:function(a){return H.lK(a)+H.kE(H.ch(a),0,null)},
lK:function(a){var u,t,s,r,q,p,o,n=J.Q(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.I||!!n.$ibq){r=C.p(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.ef(t.length>1&&C.a.D(t,0)===36?C.a.a3(t,1):t)},
lL:function(){if(!!self.location)return self.location.href
return},
kf:function(a){var u,t,s,r,q=J.ad(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lU:function(a){var u,t,s,r=H.d([],[P.u])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.af(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aG(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.af(s))}return H.kf(r)},
kg:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.af(s))
if(s<0)throw H.c(H.af(s))
if(s>65535)return H.lU(a)}return H.kf(a)},
lV:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
cT:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aG(u,10))>>>0,56320|u&1023)}}throw H.c(P.T(a,0,1114111,null,null))},
bl:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lS:function(a){var u=H.bl(a).getFullYear()+0
return u},
lQ:function(a){var u=H.bl(a).getMonth()+1
return u},
lM:function(a){var u=H.bl(a).getDate()+0
return u},
lN:function(a){var u=H.bl(a).getHours()+0
return u},
lP:function(a){var u=H.bl(a).getMinutes()+0
return u},
lR:function(a){var u=H.bl(a).getSeconds()+0
return u},
lO:function(a){var u=H.bl(a).getMilliseconds()+0
return u},
l:function(a){throw H.c(H.af(a))},
b:function(a,b){if(a==null)J.ad(a)
throw H.c(H.bx(a,b))},
bx:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ag(!0,b,s,null)
u=J.ad(a)
if(!(b<0)){if(typeof u!=="number")return H.l(u)
t=b>=u}else t=!0
if(t)return P.G(b,a,s,null,u)
return P.fU(b,s)},
nc:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bm(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bm(a,c,!0,b,"end",u)
return new P.ag(!0,b,"end",null)},
af:function(a){return new P.ag(!0,a,null,null)},
n7:function(a){if(typeof a!=="number")throw H.c(H.af(a))
return a},
c:function(a){var u
if(a==null)a=new P.cQ()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kV})
u.name=""}else u.toString=H.kV
return u},
kV:function(){return J.a2(this.dartException)},
r:function(a){throw H.c(a)},
o:function(a){throw H.c(P.bd(a))},
aq:function(a){var u,t,s,r,q,p
a=H.kS(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.q])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hz(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hA:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kp:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kb:function(a,b){return new H.fL(a,b==null?null:b.method)},
jt:function(a,b){var u=b==null,t=u?null:b.method
return new H.f7(a,t,u?null:b.receiver)},
b7:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jd(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aG(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jt(H.f(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kb(H.f(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kY()
q=$.kZ()
p=$.l_()
o=$.l0()
n=$.l3()
m=$.l4()
l=$.l2()
$.l1()
k=$.l6()
j=$.l5()
i=r.a7(u)
if(i!=null)return f.$1(H.jt(u,i))
else{i=q.a7(u)
if(i!=null){i.method="call"
return f.$1(H.jt(u,i))}else{i=p.a7(u)
if(i==null){i=o.a7(u)
if(i==null){i=n.a7(u)
if(i==null){i=m.a7(u)
if(i==null){i=l.a7(u)
if(i==null){i=o.a7(u)
if(i==null){i=k.a7(u)
if(i==null){i=j.a7(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kb(u,i))}}return f.$1(new H.hK(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.d_()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ag(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.d_()
return a},
jN:function(a){var u
if(a==null)return new H.dR(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dR(a)},
ng:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
no:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.t("Unsupported number of arguments for wrapped closure"))},
bw:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.no)
a.$identity=u
return u},
lp:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hf().constructor.prototype):Object.create(new H.bA(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ah
if(typeof t!=="number")return t.u()
$.ah=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.k_(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.ll(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.k_(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
ll:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.nj,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jZ:H.ji
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
lm:function(a,b,c,d){var u=H.ji
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
k_:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lo(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lm(t,!r,u,b)
if(t===0){r=$.ah
if(typeof r!=="number")return r.u()
$.ah=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bB
return new Function(r+H.f(q==null?$.bB=H.es("self"):q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ah
if(typeof r!=="number")return r.u()
$.ah=r+1
o+=r
r="return function("+o+"){return this."
q=$.bB
return new Function(r+H.f(q==null?$.bB=H.es("self"):q)+"."+H.f(u)+"("+o+");}")()},
ln:function(a,b,c,d){var u=H.ji,t=H.jZ
switch(b?-1:a){case 0:throw H.c(H.lZ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lo:function(a,b){var u,t,s,r,q,p,o,n=$.bB
if(n==null)n=$.bB=H.es("self")
u=$.jY
if(u==null)u=$.jY=H.es("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.ln(s,!q,t,b)
if(s===1){n="return function(){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+");"
u=$.ah
if(typeof u!=="number")return u.u()
$.ah=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+", "+o+");"
u=$.ah
if(typeof u!=="number")return u.u()
$.ah=u+1
return new Function(n+u+"}")()},
jL:function(a,b,c,d,e,f,g){return H.lp(a,b,c,d,!!e,!!f,g)},
ji:function(a){return a.a},
jZ:function(a){return a.c},
es:function(a){var u,t,s,r=new H.bA("self","target","receiver","name"),q=J.jq(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
ns:function(a,b){throw H.c(H.lk(a,H.ef(b.substring(2))))},
m:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else u=!0
if(u)return a
H.ns(a,b)},
ne:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
lk:function(a,b){return new H.et("CastError: "+P.jo(a)+": type '"+H.f(H.n3(a))+"' is not a subtype of type '"+b+"'")},
n3:function(a){var u,t=J.Q(a)
if(!!t.$ibC){u=H.ne(t)
if(u!=null)return H.nt(u)
return"Closure"}return H.bW(a)},
nx:function(a){throw H.c(new P.eJ(a))},
lZ:function(a){return new H.h0(a)},
kL:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
ch:function(a){if(a==null)return
return a.$ti},
o5:function(a,b,c){return H.jb(a["$a"+H.f(c)],H.ch(b))},
ni:function(a,b,c,d){var u=H.jb(a["$a"+H.f(c)],H.ch(b))
return u==null?null:u[d]},
kM:function(a,b,c){var u=H.jb(a["$a"+H.f(b)],H.ch(a))
return u==null?null:u[c]},
j_:function(a,b){var u=H.ch(a)
return u==null?null:u[b]},
nt:function(a){return H.b6(a,null)},
b6:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ef(a[0].name)+H.kE(a,1,b)
if(typeof a=="function")return H.ef(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.f(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.f(b[t])}if('func' in a)return H.mC(a,b)
if('futureOr' in a)return"FutureOr<"+H.b6("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mC:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],[P.q])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.a.u(p,a0[m])
l=u[q]
if(l!=null&&l!==P.Z)p+=" extends "+H.b6(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.b6(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.b6(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.b6(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.nf(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.b6(d[c],a0)+(" "+H.f(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kE:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.P("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b6(p,c)}return"<"+u.h(0)+">"},
jb:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
o3:function(a,b,c){return a.apply(b,H.jb(J.Q(b)["$a"+H.f(c)],H.ch(b)))},
o4:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
np:function(a){var u,t,s,r,q=$.kN.$1(a),p=$.iX[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j6[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.kJ.$2(a,q)
if(q!=null){p=$.iX[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j6[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.j9(u)
$.iX[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.j6[q]=u
return u}if(s==="-"){r=H.j9(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kQ(a,u)
if(s==="*")throw H.c(P.hJ(q))
if(v.leafTags[q]===true){r=H.j9(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kQ(a,u)},
kQ:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jP(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
j9:function(a){return J.jP(a,!1,null,!!a.$iy)},
nq:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.j9(u)
else return J.jP(u,c,null,null)},
nm:function(){if(!0===$.jO)return
$.jO=!0
H.nn()},
nn:function(){var u,t,s,r,q,p,o,n
$.iX=Object.create(null)
$.j6=Object.create(null)
H.nl()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kR.$1(q)
if(p!=null){o=H.nq(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nl:function(){var u,t,s,r,q,p,o=C.z()
o=H.bv(C.A,H.bv(C.B,H.bv(C.q,H.bv(C.q,H.bv(C.C,H.bv(C.D,H.bv(C.E(C.p),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kN=new H.j3(r)
$.kJ=new H.j4(q)
$.kR=new H.j5(p)},
bv:function(a,b){return a(b)||b},
lz:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.L("Illegal RegExp pattern ("+String(p)+")",a,null))},
nv:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
nd:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kS:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kT:function(a,b,c){var u=H.nw(a,b,c)
return u},
nw:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kS(b),'g'),H.nd(c))},
eC:function eC(){},
eD:function eD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hz:function hz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fL:function fL(a,b){this.a=a
this.b=b},
f7:function f7(a,b,c){this.a=a
this.b=b
this.c=c},
hK:function hK(a){this.a=a},
jd:function jd(a){this.a=a},
dR:function dR(a){this.a=a
this.b=null},
bC:function bC(){},
hl:function hl(){},
hf:function hf(){},
bA:function bA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
et:function et(a){this.a=a},
h0:function h0(a){this.a=a},
J:function J(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fa:function fa(a,b){this.a=a
this.b=b
this.c=null},
fb:function fb(a,b){this.a=a
this.$ti=b},
fc:function fc(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
j3:function j3(a){this.a=a},
j4:function j4(a){this.a=a},
j5:function j5(a){this.a=a},
f6:function f6(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bt:function(a){return a},
lJ:function(a){return new Int8Array(a)},
ar:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bx(b,a))},
mA:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.nc(a,b,c))
return b},
bP:function bP(){},
aZ:function aZ(){},
cM:function cM(){},
bQ:function bQ(){},
cN:function cN(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(){},
fK:function fK(){},
cO:function cO(){},
bR:function bR(){},
c4:function c4(){},
c5:function c5(){},
c6:function c6(){},
c7:function c7(){},
nf:function(a){return J.k2(a?Object.keys(a):[],null)},
ny:function(a){return v.mangledGlobalNames[a]},
nr:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jP:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iZ:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jO==null){H.nm()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.hJ("Return interceptor for "+H.f(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jS()]
if(r!=null)return r
r=H.np(a)
if(r!=null)return r
if(typeof a=="function")return C.K
u=Object.getPrototypeOf(a)
if(u==null)return C.v
if(u===Object.prototype)return C.v
if(typeof s=="function"){Object.defineProperty(s,$.jS(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
ly:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.jW(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.T(a,0,4294967295,"length",null))
return J.k2(new Array(a),b)},
k2:function(a,b){return J.jq(H.d(a,[b]))},
jq:function(a){a.fixed$length=Array
return a},
Q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cC.prototype
return J.cB.prototype}if(typeof a=="string")return J.aU.prototype
if(a==null)return J.cD.prototype
if(typeof a=="boolean")return J.f5.prototype
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.Z)return a
return J.iZ(a)},
cg:function(a){if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.Z)return a
return J.iZ(a)},
iY:function(a){if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.Z)return a
return J.iZ(a)},
nh:function(a){if(typeof a=="number")return J.bJ.prototype
if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(!(a instanceof P.Z))return J.bq.prototype
return a},
jM:function(a){if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(!(a instanceof P.Z))return J.bq.prototype
return a},
ed:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.Z)return a
return J.iZ(a)},
E:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).n(a,b)},
ck:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kO(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cg(a).i(a,b)},
jf:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.kO(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.iY(a).k(a,b,c)},
le:function(a,b){return J.jM(a).D(a,b)},
lf:function(a,b,c){return J.ed(a).fb(a,b,c)},
lg:function(a,b,c,d){return J.ed(a).fu(a,b,c,d)},
lh:function(a,b){return J.jM(a).P(a,b)},
jg:function(a,b){return J.nh(a).fF(a,b)},
jh:function(a,b){return J.iY(a).G(a,b)},
li:function(a,b,c,d){return J.ed(a).fV(a,b,c,d)},
jU:function(a,b){return J.iY(a).F(a,b)},
jV:function(a){return J.ed(a).gbH(a)},
cl:function(a){return J.Q(a).gE(a)},
b9:function(a){return J.iY(a).gS(a)},
ad:function(a){return J.cg(a).gj(a)},
lj:function(a,b){return J.ed(a).hs(a,b)},
a2:function(a){return J.Q(a).h(a)},
a:function a(){},
f5:function f5(){},
cD:function cD(){},
cE:function cE(){},
fP:function fP(){},
bq:function bq(){},
aV:function aV(){},
aT:function aT(a){this.$ti=a},
jr:function jr(a){this.$ti=a},
a_:function a_(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bJ:function bJ(){},
cC:function cC(){},
cB:function cB(){},
aU:function aU(){}},P={
me:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.n4()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bw(new P.ib(s),1)).observe(u,{childList:true})
return new P.ia(s,u,t)}else if(self.setImmediate!=null)return P.n5()
return P.n6()},
mf:function(a){self.scheduleImmediate(H.bw(new P.ic(a),0))},
mg:function(a){self.setImmediate(H.bw(new P.id(a),0))},
mh:function(a){P.jx(C.m,a)},
jx:function(a,b){var u=C.c.a_(a.a,1000)
return P.mk(u<0?0:u,b)},
ko:function(a,b){var u=C.c.a_(a.a,1000)
return P.ml(u<0?0:u,b)},
mk:function(a,b){var u=new P.dX()
u.dY(a,b)
return u},
ml:function(a,b){var u=new P.dX()
u.dZ(a,b)
return u},
mY:function(){var u,t
for(;u=$.bu,u!=null;){$.cf=null
t=u.b
$.bu=t
if(t==null)$.ce=null
u.a.$0()}},
n2:function(){$.jJ=!0
try{P.mY()}finally{$.cf=null
$.jJ=!1
if($.bu!=null)$.jT().$1(P.kK())}},
n0:function(a){var u=new P.dj(a)
if($.bu==null){$.bu=$.ce=u
if(!$.jJ)$.jT().$1(P.kK())}else $.ce=$.ce.b=u},
n1:function(a){var u,t,s=$.bu
if(s==null){P.n0(a)
$.cf=$.ce
return}u=new P.dj(a)
t=$.cf
if(t==null){u.b=s
$.bu=$.cf=u}else{u.b=t.b
$.cf=t.b=u
if(u.b==null)$.ce=u}},
kn:function(a,b){var u=$.ae
if(u===C.f)return P.jx(a,b)
return P.jx(a,u.fC(b))},
m4:function(a,b){var u=$.ae
if(u===C.f)return P.ko(a,b)
return P.ko(a,u.cK(b,P.d5))},
kF:function(a,b,c,d,e){var u={}
u.a=d
P.n1(new P.iV(u,e))},
mZ:function(a,b,c,d){var u,t=$.ae
if(t===c)return d.$0()
$.ae=c
u=t
try{t=d.$0()
return t}finally{$.ae=u}},
n_:function(a,b,c,d,e){var u,t=$.ae
if(t===c)return d.$1(e)
$.ae=c
u=t
try{t=d.$1(e)
return t}finally{$.ae=u}},
ib:function ib(a){this.a=a},
ia:function ia(a,b,c){this.a=a
this.b=b
this.c=c},
ic:function ic(a){this.a=a},
id:function id(a){this.a=a},
dX:function dX(){this.c=0},
iD:function iD(a,b){this.a=a
this.b=b},
iC:function iC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dj:function dj(a){this.a=a
this.b=null},
d1:function d1(){},
hi:function hi(){},
d5:function d5(){},
iM:function iM(){},
iV:function iV(a,b){this.a=a
this.b=b},
is:function is(){},
it:function it(a,b){this.a=a
this.b=b},
iu:function iu(a,b,c){this.a=a
this.b=b
this.c=c},
lA:function(a,b){return new H.J([a,b])},
k3:function(a,b){return new H.J([a,b])},
lC:function(a){return H.ng(a,new H.J([null,null]))},
lD:function(a){return new P.ip([a])},
jE:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mj:function(a,b){var u=new P.dz(a,b)
u.c=a.e
return u},
lw:function(a,b,c){var u,t
if(P.jK(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.q])
$.a1.push(a)
try{P.mD(a,u)}finally{if(0>=$.a1.length)return H.b($.a1,-1)
$.a1.pop()}t=P.kl(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
jp:function(a,b,c){var u,t
if(P.jK(a))return b+"..."+c
u=new P.P(b)
$.a1.push(a)
try{t=u
t.a=P.kl(t.a,a,", ")}finally{if(0>=$.a1.length)return H.b($.a1,-1)
$.a1.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jK:function(a){var u,t
for(u=$.a1.length,t=0;t<u;++t)if(a===$.a1[t])return!0
return!1},
mD:function(a,b){var u,t,s,r,q,p,o,n=a.gS(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.v())return
u=H.f(n.gJ(n))
b.push(u)
m+=u.length+2;++l}if(!n.v()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gJ(n);++l
if(!n.v()){if(l<=4){b.push(H.f(r))
return}t=H.f(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gJ(n);++l
for(;n.v();r=q,q=p){p=n.gJ(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.f(r)
t=H.f(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
lB:function(a,b,c){var u=P.lA(b,c)
a.F(0,new P.fd(u))
return u},
ju:function(a){var u,t={}
if(P.jK(a))return"{...}"
u=new P.P("")
try{$.a1.push(a)
u.a+="{"
t.a=!0
J.jU(a,new P.fi(t,u))
u.a+="}"}finally{if(0>=$.a1.length)return H.b($.a1,-1)
$.a1.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
ip:function ip(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iq:function iq(a){this.a=a
this.c=this.b=null},
dz:function dz(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fd:function fd(a){this.a=a},
fe:function fe(){},
p:function p(){},
fh:function fh(){},
fi:function fi(a,b){this.a=a
this.b=b},
ax:function ax(){},
iE:function iE(){},
fj:function fj(){},
dd:function dd(a,b){this.a=a
this.$ti=b},
iv:function iv(){},
dA:function dA(){},
e2:function e2(){},
m7:function(a,b,c,d){if(b instanceof Uint8Array)return P.m8(!1,b,c,d)
return},
m8:function(a,b,c,d){var u,t,s=$.l7()
if(s==null)return
u=0===c
if(u&&!0)return P.jB(s,b)
t=b.length
d=P.b2(c,d,t)
if(u&&d===t)return P.jB(s,b)
return P.jB(s,b.subarray(c,d))},
jB:function(a,b){if(P.ma(b))return
return P.mb(a,b)},
mb:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.b7(t)}return},
ma:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
m9:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.b7(t)}return},
kH:function(a,b,c){var u,t,s
for(u=J.cg(a),t=b;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.ab()
if((s&127)!==s)return t-b}return c-b},
jX:function(a,b,c,d,e,f){if(C.c.aZ(f,4)!==0)throw H.c(P.L("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.L("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.L("Invalid base64 padding, more than two '=' characters",a,b))},
ep:function ep(){},
eq:function eq(){},
ey:function ey(){},
eE:function eE(){},
eR:function eR(){},
hT:function hT(){},
hV:function hV(){},
iL:function iL(a){this.b=0
this.c=a},
hU:function hU(a){this.a=a},
iK:function iK(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
ee:function(a,b,c){var u=H.lT(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.L(a,null,null))},
lt:function(a){if(a instanceof H.bC)return a.h(0)
return"Instance of '"+H.f(H.bW(a))+"'"},
lE:function(a,b,c){var u,t,s=J.ly(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
k4:function(a,b,c){var u,t=H.d([],[c])
for(u=J.b9(a);u.v();)t.push(u.gJ(u))
if(b)return t
return J.jq(t)},
bX:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.b2(b,c,u)
return H.kg(b>0||c<u?C.b.dF(a,b,c):a)}if(!!J.Q(a).$ibR)return H.lV(a,b,P.b2(b,c,a.length))
return P.m2(a,b,c)},
m2:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.T(b,0,J.ad(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.T(c,b,J.ad(a),q,q))
t=J.b9(a)
for(s=0;s<b;++s)if(!t.v())throw H.c(P.T(b,0,s,q,q))
r=[]
if(u)for(;t.v();)r.push(t.gJ(t))
else for(s=b;s<c;++s){if(!t.v())throw H.c(P.T(c,b,s,q,q))
r.push(t.gJ(t))}return H.kg(r)},
lX:function(a){return new H.f6(a,H.lz(a,!1,!0,!1,!1,!1))},
kl:function(a,b,c){var u=J.b9(b)
if(!u.v())return a
if(c.length===0){do a+=H.f(u.gJ(u))
while(u.v())}else{a+=H.f(u.gJ(u))
for(;u.v();)a=a+c+H.f(u.gJ(u))}return a},
jA:function(){var u=H.lL()
if(u!=null)return P.m6(u)
throw H.c(P.v("'Uri.base' is not supported"))},
iJ:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.lc().b
if(typeof b!=="string")H.r(H.af(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.gfU().bI(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.cT(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lr:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
ls:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cs:function(a){if(a>=10)return""+a
return"0"+a},
k0:function(a){return new P.aQ(1000*a)},
jo:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a2(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lt(a)},
cm:function(a){return new P.ag(!1,null,null,a)},
jW:function(a,b,c){return new P.ag(!0,a,b,c)},
fU:function(a,b){return new P.bm(null,null,!0,a,b,"Value not in range")},
T:function(a,b,c,d,e){return new P.bm(b,c,!0,a,d,"Invalid value")},
b2:function(a,b,c){if(0>a||a>c)throw H.c(P.T(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.T(b,a,c,"end",null))
return b}return c},
kh:function(a,b){if(typeof a!=="number")return a.M()
if(a<0)throw H.c(P.T(a,0,null,b,null))},
G:function(a,b,c,d,e){var u=e==null?J.ad(b):e
return new P.f3(u,!0,a,c,"Index out of range")},
v:function(a){return new P.hM(a)},
hJ:function(a){return new P.hI(a)},
bd:function(a){return new P.eA(a)},
t:function(a){return new P.ds(a)},
L:function(a,b,c){return new P.f0(a,b,c)},
lF:function(a,b,c){var u,t,s=H.d([],[c])
C.b.sj(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.b(s,u)
s[u]=t}return s},
jR:function(a){H.nr(a)},
m6:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.D(a,4)^58)*3|C.a.D(a,0)^100|C.a.D(a,1)^97|C.a.D(a,2)^116|C.a.D(a,3)^97)>>>0
if(u===0)return P.kq(e<e?C.a.p(a,0,e):a,5,f).gdw()
else if(u===32)return P.kq(C.a.p(a,5,e),0,f).gdw()}t=new Array(8)
t.fixed$length=Array
s=H.d(t,[P.u])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.kG(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.hE()
if(r>=0)if(P.kG(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.u()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.M()
if(typeof n!=="number")return H.l(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.a.Z(a,"..",o)))j=n>o+2&&C.a.Z(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.Z(a,"file",0)){if(q<=0){if(!C.a.Z(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.a.p(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.a.aN(a,o,n,"/");++e
n=h}k="file"}else if(C.a.Z(a,"http",0)){if(t&&p+3===o&&C.a.Z(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aN(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.Z(a,"https",0)){if(t&&p+4===o&&C.a.Z(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aN(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.p(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.iw(a,r,q,p,o,n,m,k)}return P.mm(a,0,e,r,q,p,o,n,m,k)},
ks:function(a){var u=P.q
return C.b.fY(H.d(a.split("&"),[u]),P.k3(u,u),new P.hR(C.e))},
m5:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.hO(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.P(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.ee(C.a.p(a,s,t),n,n)
if(typeof p!=="number")return p.U()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.b(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.ee(C.a.p(a,s,c),n,n)
if(typeof p!=="number")return p.U()
if(p>255)k.$2(l,s)
if(r>=u)return H.b(j,r)
j[r]=p
return j},
kr:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.hP(a),d=new P.hQ(e,a)
if(a.length<2)e.$1("address is too short")
u=H.d([],[P.u])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.P(a,t)
if(p===58){if(t===b){++t
if(C.a.P(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gau(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.m5(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.b(l,i)
l[i]=0
f=i+1
if(f>=k)return H.b(l,f)
l[f]=0
i+=2}else{f=C.c.aG(h,8)
if(i<0||i>=k)return H.b(l,i)
l[i]=f
f=i+1
if(f>=k)return H.b(l,f)
l[f]=h&255
i+=2}}return l},
mm:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.mu(a,b,d)
else{if(d===b)P.bs(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.mv(a,u,e-1):""
s=P.mr(a,e,f,!1)
if(typeof f!=="number")return f.u()
r=f+1
if(typeof g!=="number")return H.l(g)
q=r<g?P.mt(P.ee(C.a.p(a,r,g),new P.iF(a,f),n),j):n}else{q=n
s=q
t=""}p=P.ms(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.M()
o=h<i?P.jG(a,h+1,i,n):n
return new P.br(j,t,s,q,p,o,i<c?P.mq(a,i+1,c):n)},
ky:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bs:function(a,b,c){throw H.c(P.L(c,a,b))},
mt:function(a,b){if(a!=null&&a===P.ky(b))return
return a},
mr:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.P(a,b)===91){if(typeof c!=="number")return c.A()
u=c-1
if(C.a.P(a,u)!==93)P.bs(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.mo(a,t,u)
if(typeof s!=="number")return s.M()
if(s<u){r=s+1
q=P.kD(a,C.a.Z(a,"25",r)?s+3:r,u,"%25")}else q=""
P.kr(a,t,s)
return C.a.p(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.l(c)
p=b
for(;p<c;++p)if(C.a.P(a,p)===58){s=C.a.b7(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.kD(a,C.a.Z(a,"25",r)?s+3:r,c,"%25")}else q=""
P.kr(a,b,s)
return"["+C.a.p(a,b,s)+q+"]"}return P.mx(a,b,c)},
mo:function(a,b,c){var u,t=C.a.b7(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.l(c)
u=t<c}else u=!1
return u?t:c},
kD:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.P(d):null
if(typeof c!=="number")return H.l(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.P(a,u)
if(r===37){q=P.jH(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.P("")
o=l.a+=C.a.p(a,t,u)
if(p)q=C.a.p(a,u,u+3)
else if(q==="%")P.bs(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.P("")
if(t<u){l.a+=C.a.p(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.P(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.P("")
l.a+=C.a.p(a,t,u)
l.a+=P.jF(r)
u+=m
t=u}}}if(l==null)return C.a.p(a,b,c)
if(t<c)l.a+=C.a.p(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
mx:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.l(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.P(a,u)
if(q===37){p=P.jH(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.P("")
n=C.a.p(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.p(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.b(C.t,o)
o=(C.t[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.P("")
if(t<u){s.a+=C.a.p(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.b(C.j,o)
o=(C.j[o]&1<<(q&15))!==0}else o=!1
if(o)P.bs(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.P(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.P("")
n=C.a.p(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.jF(q)
u+=l
t=u}}}}if(s==null)return C.a.p(a,b,c)
if(t<c){n=C.a.p(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
mu:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.kA(C.a.D(a,b)))P.bs(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.D(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.b(C.l,r)
r=(C.l[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bs(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.p(a,b,c)
return P.mn(t?a.toLowerCase():a)},
mn:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mv:function(a,b,c){return P.cc(a,b,c,C.M,!1)},
ms:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cc(a,b,c,C.u,!0):C.n.hS(d,new P.iG(),P.q).q(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a2(u,"/"))u="/"+u
return P.mw(u,e,f)},
mw:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a2(a,"/"))return P.my(a,!u||c)
return P.mz(a)},
jG:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.cm("Both query and queryParameters specified"))
return P.cc(a,b,c,C.k,!0)}if(d==null)return
u=new P.P("")
t.a=""
d.F(0,new P.iH(new P.iI(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
mq:function(a,b,c){return P.cc(a,b,c,C.k,!0)},
jH:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.P(a,b+1)
t=C.a.P(a,p)
s=H.j2(u)
r=H.j2(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aG(q,4)
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.cT(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.p(a,b,b+3).toUpperCase()
return},
jF:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.u])
t[0]=37
t[1]=C.a.D(m,a>>>4)
t[2]=C.a.D(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.u])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.fk(a,6*r)&63|s
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
q+=3}}return P.bX(t,0,null)},
cc:function(a,b,c,d,e){var u=P.kC(a,b,c,d,e)
return u==null?C.a.p(a,b,c):u},
kC:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.M()
if(typeof c!=="number")return H.l(c)
if(!(o<c))break
c$0:{u=C.a.P(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.b(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.jH(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.b(C.j,t)
t=(C.j[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bs(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.P(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.jF(u)}}if(m==null)m=new P.P("")
m.a+=C.a.p(a,n,o)
m.a+=H.f(s)
if(typeof r!=="number")return H.l(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.M()
if(n<c)m.a+=C.a.p(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
kB:function(a){if(C.a.a2(a,"."))return!0
return C.a.d8(a,"/.")!==-1},
mz:function(a){var u,t,s,r,q,p,o
if(!P.kB(a))return a
u=H.d([],[P.q])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.E(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.b(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.q(u,"/")},
my:function(a,b){var u,t,s,r,q,p
if(!P.kB(a))return!b?P.kz(a):a
u=H.d([],[P.q])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gau(u)!==".."){if(0>=u.length)return H.b(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.b(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gau(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.b(u,0)
t=P.kz(u[0])
if(0>=u.length)return H.b(u,0)
u[0]=t}return C.b.q(u,"/")},
kz:function(a){var u,t,s,r=a.length
if(r>=2&&P.kA(J.le(a,0)))for(u=1;u<r;++u){t=C.a.D(a,u)
if(t===58)return C.a.p(a,0,u)+"%3A"+C.a.a3(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.b(C.l,s)
s=(C.l[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
mp:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.D(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.cm("Invalid URL encoding"))}}return u},
jI:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.D(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.p(a,b,c)
else r=new H.N(C.a.p(a,b,c))}else{r=H.d([],[P.u])
for(s=a.length,q=b;q<c;++q){t=C.a.D(a,q)
if(t>127)throw H.c(P.cm("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.cm("Truncated URI"))
r.push(P.mp(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.hU(!1).bI(r)},
kA:function(a){var u=a|32
return 97<=u&&u<=122},
kq:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.u])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.D(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.L(m,a,t))}}if(s<0&&t>b)throw H.c(P.L(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.D(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gau(l)
if(r!==44||t!==p+7||!C.a.Z(a,"base64",p+1))throw H.c(P.L("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.y.h7(0,a,o,u)
else{n=P.kC(a,o,u,C.k,!0)
if(n!=null)a=C.a.aN(a,o,u,n)}return new P.hN(a,l,c)},
mB:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.lF(22,new P.iQ(),P.bo),n=new P.iP(o),m=new P.iR(),l=new P.iS(),k=n.$2(0,225)
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
kG:function(a,b,c,d,e){var u,t,s,r,q,p=$.ld()
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
as:function as(){},
a3:function a3(a,b){this.a=a
this.b=b},
I:function I(){},
aQ:function aQ(a){this.a=a},
eO:function eO(){},
eP:function eP(){},
bf:function bf(){},
cQ:function cQ(){},
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
f3:function f3(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hM:function hM(a){this.a=a},
hI:function hI(a){this.a=a},
he:function he(a){this.a=a},
eA:function eA(a){this.a=a},
fO:function fO(){},
d_:function d_(){},
eJ:function eJ(a){this.a=a},
ds:function ds(a){this.a=a},
f0:function f0(a,b,c){this.a=a
this.b=b
this.c=c},
u:function u(){},
h:function h(){},
f4:function f4(){},
n:function n(){},
O:function O(){},
b_:function b_(){},
a8:function a8(){},
Z:function Z(){},
q:function q(){},
P:function P(a){this.a=a},
hR:function hR(a){this.a=a},
hO:function hO(a){this.a=a},
hP:function hP(a){this.a=a},
hQ:function hQ(a,b){this.a=a
this.b=b},
br:function br(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
iF:function iF(a,b){this.a=a
this.b=b},
iG:function iG(){},
iI:function iI(a,b){this.a=a
this.b=b},
iH:function iH(a){this.a=a},
hN:function hN(a,b,c){this.a=a
this.b=b
this.c=c},
iQ:function iQ(){},
iP:function iP(a){this.a=a},
iR:function iR(){},
iS:function iS(){},
iw:function iw(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
ii:function ii(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
na:function(a){var u,t=J.Q(a)
if(!!t.$iaw){u=t.gcN(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.e1(a.data,a.height,a.width)},
n9:function(a){if(a instanceof P.e1)return{data:a.a,height:a.b,width:a.c}
return a},
aI:function(a){var u,t,s,r,q
if(a==null)return
u=P.k3(P.q,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r){q=t[r]
u.k(0,q,a[q])}return u},
n8:function(a){var u={}
a.F(0,new P.iW(u))
return u},
iy:function iy(){},
iA:function iA(a,b){this.a=a
this.b=b},
e1:function e1(a,b,c){this.a=a
this.b=b
this.c=c},
iW:function iW(a){this.a=a},
iz:function iz(a,b){this.a=a
this.b=b},
eX:function eX(a,b){this.a=a
this.b=b},
eY:function eY(){},
eZ:function eZ(){},
io:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mi:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ir:function ir(){},
a7:function a7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aW:function aW(){},
f9:function f9(){},
b0:function b0(){},
fM:function fM(){},
fT:function fT(){},
hj:function hj(){},
j:function j(){},
b3:function b3(){},
hy:function hy(){},
dx:function dx(){},
dy:function dy(){},
dI:function dI(){},
dJ:function dJ(){},
dT:function dT(){},
dU:function dU(){},
e_:function e_(){},
e0:function e0(){},
bo:function bo(){},
el:function el(){},
em:function em(){},
en:function en(a){this.a=a},
eo:function eo(){},
ba:function ba(){},
fN:function fN(){},
dk:function dk(){},
cV:function cV(){},
hd:function hd(){},
dP:function dP(){},
dQ:function dQ(){}},W={
jk:function(){var u=document.createElement("canvas")
return u},
jn:function(a){return"wheel"},
lv:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.b7(u)}return s},
im:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kx:function(a,b,c,d){var u=W.im(W.im(W.im(W.im(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
R:function(a,b,c,d){var u=W.kI(new W.ik(c),W.i)
if(u!=null&&!0)J.lg(a,b,u,!1)
return new W.ij(a,b,u,!1)},
kI:function(a,b){var u=$.ae
if(u===C.f)return a
return u.cK(a,b)},
k:function k(){},
eg:function eg(){},
ei:function ei(){},
ej:function ej(){},
bb:function bb(){},
bc:function bc(){},
aO:function aO(){},
eF:function eF(){},
C:function C(){},
bE:function bE(){},
eG:function eG(){},
a9:function a9(){},
ai:function ai(){},
eH:function eH(){},
eI:function eI(){},
eK:function eK(){},
eL:function eL(){},
cu:function cu(){},
cv:function cv(){},
eM:function eM(){},
eN:function eN(){},
ig:function ig(a,b){this.a=a
this.b=b},
S:function S(){},
i:function i(){},
e:function e(){},
aj:function aj(){},
bF:function bF(){},
eW:function eW(){},
f_:function f_(){},
av:function av(){},
f2:function f2(){},
bH:function bH(){},
aw:function aw(){},
bI:function bI(){},
ex:function ex(){},
bk:function bk(){},
ff:function ff(){},
fz:function fz(){},
bO:function bO(){},
fA:function fA(){},
fB:function fB(a){this.a=a},
fC:function fC(){},
fD:function fD(a){this.a=a},
az:function az(){},
fE:function fE(){},
an:function an(){},
ie:function ie(a){this.a=a},
B:function B(){},
cP:function cP(){},
aB:function aB(){},
fQ:function fQ(){},
fZ:function fZ(){},
h_:function h_(a){this.a=a},
h1:function h1(){},
aC:function aC(){},
ha:function ha(){},
aD:function aD(){},
hb:function hb(){},
aE:function aE(){},
hg:function hg(){},
hh:function hh(a){this.a=a},
ao:function ao(){},
aF:function aF(){},
ap:function ap(){},
hm:function hm(){},
hn:function hn(){},
ht:function ht(){},
aG:function aG(){},
bn:function bn(){},
hw:function hw(){},
hx:function hx(){},
b4:function b4(){},
hS:function hS(){},
i6:function i6(){},
b5:function b5(){},
c3:function c3(){},
ih:function ih(){},
dm:function dm(){},
il:function il(){},
dF:function dF(){},
ix:function ix(){},
iB:function iB(){},
ij:function ij(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ik:function ik(a){this.a=a},
F:function F(){},
cz:function cz(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
dl:function dl(){},
dn:function dn(){},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
dt:function dt(){},
du:function du(){},
dv:function dv(){},
dw:function dw(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
dG:function dG(){},
dH:function dH(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
c8:function c8(){},
c9:function c9(){},
dN:function dN(){},
dO:function dO(){},
dS:function dS(){},
dV:function dV(){},
dW:function dW(){},
ca:function ca(){},
cb:function cb(){},
dY:function dY(){},
dZ:function dZ(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){}},T={
X:function(a){var u=new T.h2()
u.dM(a)
return u},
eh:function eh(){},
cA:function cA(){},
cJ:function cJ(){},
aA:function aA(){this.a=null},
h2:function h2(){this.a=null},
d3:function d3(){},
ho:function ho(){},
hp:function hp(){var _=this
_.y=_.d=_.c=_.b=_.a=null},
hq:function hq(a){var _=this
_.a=a
_.e=_.d=_.b=null},
hr:function hr(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},R={d0:function d0(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},d6:function d6(a,b,c){this.a=a
this.b=b
this.c=c},d7:function d7(a){this.b=a
this.c=null},hu:function hu(){this.c=this.b=this.a=null},d9:function d9(a){this.b=a
this.a=this.c=null}},O={
jl:function(a){var u=new O.at([a])
u.b0(a)
return u},
at:function at(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bN:function bN(){this.b=this.a=null},
k5:function(){var u,t=new O.cK(),s=O.jl(V.al)
t.e=s
s.b_(t.ger(),t.geu())
s=new O.ak(t,"emission")
s.c=new A.V(!1,!1,!1)
s.f=new V.K(0,0,0)
t.f=s
s=new O.ak(t,"ambient")
s.c=new A.V(!1,!1,!1)
s.f=new V.K(0,0,0)
t.r=s
s=new O.ak(t,"diffuse")
s.c=new A.V(!1,!1,!1)
s.f=new V.K(0,0,0)
t.x=s
s=new O.ak(t,"invDiffuse")
s.c=new A.V(!1,!1,!1)
s.f=new V.K(0,0,0)
t.y=s
s=new O.fs(t,"specular")
s.c=new A.V(!1,!1,!1)
s.f=new V.K(0,0,0)
s.ch=100
t.z=s
s=new O.fo(t,"bump")
s.c=new A.V(!1,!1,!1)
t.Q=s
t.ch=null
s=new O.ak(t,"reflect")
s.c=new A.V(!1,!1,!1)
s.f=new V.K(0,0,0)
t.cx=s
s=new O.fr(t,"refract")
s.c=new A.V(!1,!1,!1)
s.f=new V.K(0,0,0)
s.ch=1
t.cy=s
s=new O.fn(t,"alpha")
s.c=new A.V(!1,!1,!1)
s.f=1
t.db=s
s=new D.cG()
s.b0(D.a5)
s.e=H.d([],[D.be])
s.f=H.d([],[D.fR])
s.r=H.d([],[D.hc])
s.y=s.x=null
s.bf(s.gep(),s.geY(),s.gf1())
t.dx=s
u=new O.fq()
u.b=new V.aP(0,0,0,0)
u.c=1
u.d=10
u.e=!1
t.dy=u
u=s.x
s=u==null?s.x=D.D():u
s.l(0,t.gfd())
s=t.dx
u=s.y
s=u==null?s.y=D.D():u
s.l(0,t.gb3())
t.fr=null
return t},
cK:function cK(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ft:function ft(a,b){this.a=a
this.b=b},
fu:function fu(){},
fv:function fv(a,b){this.a=a
this.b=b},
fw:function fw(){},
fx:function fx(a,b){this.a=a
this.b=b},
fy:function fy(){},
fn:function fn(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bM:function bM(){},
fo:function fo(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ak:function ak(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fq:function fq(){var _=this
_.e=_.d=_.c=_.b=null},
fr:function fr(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fs:function fs(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d2:function d2(){}},E={
eS:function(){var u,t=new E.au()
t.a=""
t.b=!0
u=O.jl(E.au)
t.y=u
u.b_(t.gh8(),t.ghb())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbg(0,null)
t.sc1(null)
t.saL(null)
return t},
lY:function(a,b){var u=new E.fV(a)
u.dL(a,b)
return u},
m3:function(a,b,c,d,e){var u,t,s=J.Q(a)
if(!!s.$ibc)return E.km(a,!0,!0,!0,!1)
u=W.jk()
t=u.style
t.width="100%"
t.height="100%"
s.gbH(a).l(0,u)
return E.km(u,!0,!0,!0,!1)},
km:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.d4(),p=C.i.c5(a,"webgl2",P.lC(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.r(P.t("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.lY(p,a)
u=new T.hq(p)
u.b=p.getParameter(3379)
p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.de(a)
t=new X.f8()
t.d=P.lD(P.u)
u.b=t
t=new X.fF(u)
t.f=0
t.r=V.b1()
t.x=V.b1()
t.ch=t.Q=1
u.c=t
t=new X.fg(u)
t.r=0
t.x=V.b1()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hv(u)
t.f=V.b1()
t.r=V.b1()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.d([],[[P.d1,P.Z]])
u.z=t
s=document
t.push(W.R(s,"contextmenu",u.geC(),!1))
u.z.push(W.R(a,"focus",u.geI(),!1))
u.z.push(W.R(a,"blur",u.gew(),!1))
u.z.push(W.R(s,"keyup",u.gbu(),!1))
u.z.push(W.R(s,"keydown",u.gbi(),!1))
u.z.push(W.R(a,"mousedown",u.geO(),!1))
u.z.push(W.R(a,"mouseup",u.geS(),!1))
u.z.push(W.R(a,r,u.geQ(),!1))
t=u.z
W.jn(a)
W.jn(a)
t.push(W.R(a,W.jn(a),u.geU(),!1))
u.z.push(W.R(s,r,u.geE(),!1))
u.z.push(W.R(s,"mouseup",u.geG(),!1))
u.z.push(W.R(s,"pointerlockchange",u.geW(),!1))
u.z.push(W.R(a,"touchstart",u.gf7(),!1))
u.z.push(W.R(a,"touchend",u.gf3(),!1))
u.z.push(W.R(a,"touchmove",u.gf5(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.a3(Date.now(),!1)
q.db=0
q.cz()
return q},
er:function er(){},
au:function au(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fV:function fV(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fW:function fW(a){this.a=a},
fX:function fX(a){this.a=a},
fY:function fY(a){this.a=a},
d4:function d4(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
hs:function hs(a){this.a=a}},Z={
jD:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bt(c)),35044)
a.bindBuffer(b,null)
return new Z.di(b,u)},
ac:function(a){return new Z.aH(a)},
di:function di(a,b){this.a=a
this.b=b},
co:function co(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
i7:function i7(a){this.a=a},
cp:function cp(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bi:function bi(a,b,c){this.a=a
this.b=b
this.c=c},
aH:function aH(a){this.a=a}},D={
D:function(){var u=new D.bg()
u.d=0
return u},
eu:function eu(){},
bg:function bg(){var _=this
_.d=_.c=_.b=_.a=null},
eU:function eU(a){this.a=a},
eV:function eV(a){this.a=a},
W:function W(){this.b=null},
aR:function aR(){this.b=null},
aS:function aS(){this.b=null},
w:function w(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
jm:function(a,b){var u,t,s=new D.be()
s.c=new V.K(1,1,1)
s.a=V.md()
s.d=V.jC()
s.e=V.mc()
u=s.b
s.b=b
b.gt().l(0,s.gdV())
t=new D.w("mover",u,s.b)
t.b=!0
s.am(t)
if(!s.c.n(0,a)){u=s.c
s.c=a
t=new D.w("color",u,a)
t.b=!0
s.am(t)}return s},
be:function be(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a5:function a5(){},
cG:function cG(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
fR:function fR(){},
hc:function hc(){}},X={
bK:function(){var u=new X.cF()
u.b0(X.a4)
u.f=u.e=null
u.r=!1
u.y=u.x=null
u.bf(u.gdP(),u.gdR(),u.gdT())
return u},
cq:function cq(a,b){this.a=a
this.b=b},
a4:function a4(a,b){this.a=a
this.b=b},
bj:function bj(a){this.c=a
this.b=null},
cF:function cF(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
f8:function f8(){this.d=this.b=this.a=null},
cI:function cI(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},
fg:function fg(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
aX:function aX(a,b,c){this.a=a
this.b=b
this.c=c},
aY:function aY(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},
fF:function fF(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
fS:function fS(){},
d8:function d8(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},
hv:function hv(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},
de:function de(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lu:function(a){var u=new X.f1(),t=new V.aP(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kj
if(t==null){t=V.ki(0,0,1,1)
$.kj=t}u.r=t
return u},
jj:function jj(){},
f1:function f1(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cR:function cR(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hk:function hk(){},
nb:function(a){var u,t,s,r,q,p,o,n,m,l,k=null,j=O.k5(),i=j.dx,h=U.eB(V.jw(1,-3,-1,k))
i.l(0,D.jm(new V.K(0.4,0.4,1),h))
i=j.dx
h=U.eB(V.jw(0,1,0,k))
i.l(0,D.jm(new V.K(0,0.2,0.1),h))
i=j.r
i.saq(0,new V.K(0.2,0.2,0.2))
i=j.x
i.saq(0,new V.K(0.7,0.7,0.7))
j.z.saq(0,new V.K(1,1,1))
i=j.z
i.by(new A.V(!0,i.c.b,!1))
i.cB(10)
u=E.eS()
u.sc1(j)
t=F.kk()
F.cd(t,k,k,1,1,1,0,0,1)
F.cd(t,k,k,1,1,0,1,0,3)
F.cd(t,k,k,1,1,0,0,1,2)
F.cd(t,k,k,1,1,-1,0,0,0)
F.cd(t,k,k,1,1,0,-1,0,0)
F.cd(t,k,k,1,1,0,0,-1,3)
t.aH()
for(i=[U.a0],s=-60;s<=60;s+=12)for(h=s/10,r=-60;r<=60;r+=12){q=E.eS()
q.sbg(0,t)
p=r/10
o=new U.cW()
o.r=o.f=o.e=o.d=o.c=o.b=o.a=0
o.sdA(h)
o.sdk(0,p)
o.sds(0)
n=o.d
if(!(Math.abs(n-h)<$.x().a)){o.d=h
n=new D.w("deltaYaw",n,h)
n.b=!0
m=o.y
if(m!=null)m.B(n)}n=o.e
if(!(Math.abs(n-p)<$.x().a)){o.e=p
p=new D.w("deltaPitch",n,p)
p.b=!0
n=o.y
if(n!=null)n.B(p)}p=o.f
if(!(Math.abs(p-0.32)<$.x().a)){o.f=0.32
p=new D.w("deltaRoll",p,0.32)
p.b=!0
n=o.y
if(n!=null)n.B(p)}p=new U.bD()
p.sW(0,new V.al(1,0,0,s,0,1,0,0,0,0,1,r,0,0,0,1))
q.saL(U.k1(H.d([o,p],i)))
p=u.y
o=[H.j_(p,0)]
if(p.bw(H.d([q],o))){n=p.a
l=n.length
n.push(q)
o=H.d([q],o)
p=p.c
if(p!=null)p.$2(l,o)}}return u},
kP:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="testCanvas",c=1000,b=V.m_("Test 038"),a=W.jk()
a.className="pageLargeCanvas"
a.id=d
b.a.appendChild(a)
u=[P.q]
b.cI(H.d(["A test of basic 3D movement around a room similar to a first person view. ","A and D (left and right arrow keys) strifes left and right. ","W and S (up and down arrow keys) moves forward and backward. ","Q and E moves up and down. Mouse looks around with left mouse button pressed."],u))
b.ft(H.d(["options"],u))
b.cI(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(d)
if(t==null)H.r(P.t("Failed to find an element with the identifier, testCanvas."))
s=E.m3(t,!0,!0,!0,!1)
r=E.eS()
b=r.y
q=s.f.h5("../resources/Grass.png",!0,!0)
p=U.eB(V.k9(0,-3,0).m(0,V.am(c,0,0,0,0,1,0,0,0,0,c,0,0,0,0,1)).m(0,V.jv(-1.5707963267948966)))
o=O.k5()
n=new V.ay(c,0,0,0,c,0,0,0,1)
if(!J.E(o.b,n)){m=o.b
l=m==null&&!0
if(l)o.a=null
o.b=n
m=new D.w("texture2DMatrix",m,n)
m.b=!0
o.V(m)}o.dx.l(0,D.jm(new V.K(1,1,1),U.eB(V.jw(1,-3,-1,null))))
m=o.r
m.saq(0,new V.K(0.5,0.5,0.5))
m=o.x
m.saq(0,new V.K(0.5,0.5,0.5))
o.r.sdt(q)
o.x.sdt(q)
m=E.eS()
m.sbg(0,F.nk(20,20))
m.saL(p)
m.sc1(o)
b.l(0,m)
r.y.l(0,X.nb(s))
m=s.x
k=new U.dg()
b=X.bK()
b.a6(39)
b.a6(68)
l=k.geK()
b.gaJ().l(0,l)
k.a=b
b=X.bK()
b.a6(37)
b.a6(65)
b.gaJ().l(0,l)
k.b=b
b=X.bK()
b.a6(81)
b.gaJ().l(0,l)
k.c=b
b=X.bK()
b.a6(69)
b.gaJ().l(0,l)
k.d=b
b=X.bK()
b.a6(40)
b.a6(83)
b.gaJ().l(0,l)
k.e=b
b=X.bK()
b.a6(38)
b.a6(87)
b.gaJ().l(0,l)
k.f=b
b=U.cr()
b.saU(30)
b.sar(0)
l=k.gaA()
b.gt().l(0,l)
k.r=b
b=U.cr()
b.saU(30)
b.sar(0)
b.gt().l(0,l)
k.x=b
b=U.cr()
b.saU(30)
b.sar(0)
b.gt().l(0,l)
k.y=b
k.Q=k.z=null
k.ch=60
k.cx=15
k.cy=0
k.dy=k.dx=k.db=null
k.a.ai(m)
k.b.ai(m)
k.c.ai(m)
k.d.ai(m)
k.e.ai(m)
k.f.ai(m)
b=s.x
j=new U.df()
m=U.cr()
m.sc4(0,!0)
m.sbW(6.283185307179586)
m.sbX(0)
m.sY(0,0)
m.saU(100)
m.sR(0)
m.sar(0.5)
j.b=m
l=j.gaA()
m.gt().l(0,l)
m=U.cr()
m.sc4(0,!0)
m.sbW(6.283185307179586)
m.sbX(0)
m.sY(0,0)
m.saU(100)
m.sR(0)
m.sar(0.5)
j.c=m
m.gt().l(0,l)
j.d=null
j.r=j.f=j.e=!1
j.y=j.x=2.5
j.Q=4
j.ch=j.cx=!1
j.db=j.cy=0
j.dx=null
j.dy=0
j.fx=j.fr=null
i=new X.aX(!1,!1,!1)
h=j.d
j.d=i
m=new D.w("modifiers",h,i)
m.b=!0
j.I(m)
m=j.f
if(m!==!1){j.f=!1
m=new D.w("invertX",m,!1)
m.b=!0
j.I(m)}m=j.r
if(m!==!1){j.r=!1
m=new D.w("invertY",m,!1)
m.b=!0
j.I(m)}j.ai(b)
j.b.sbW(1.5707963267948966)
j.b.sbX(-1.5707963267948966)
j.b.sar(1)
j.c.sar(1)
j.b.sc4(0,!1)
j.gt().l(0,new X.j7(k,j))
g=U.k1(H.d([k,j],[U.a0]))
b=new M.cw()
b.a=!0
m=O.jl(E.au)
b.e=m
m.b_(b.gey(),b.geA())
b.y=b.x=b.r=b.f=null
f=X.lu(null)
e=new X.cR()
e.c=1.0471975511965976
e.d=0.1
e.e=2000
e.saL(null)
m=e.c
if(!(Math.abs(m-1.0471975511965976)<$.x().a)){e.c=1.0471975511965976
m=new D.w("fov",m,1.0471975511965976)
m.b=!0
e.aD(m)}m=e.d
if(!(Math.abs(m-0.1)<$.x().a)){e.d=0.1
m=new D.w("near",m,0.1)
m.b=!0
e.aD(m)}m=e.e
if(!(Math.abs(m-2000)<$.x().a)){e.e=2000
m=new D.w("far",m,2000)
m.b=!0
e.aD(m)}m=b.b
if(m!==e){if(m!=null)m.gt().T(0,b.gaB())
h=b.b
b.b=e
e.gt().l(0,b.gaB())
m=new D.w("camera",h,b.b)
m.b=!0
b.aC(m)}m=b.c
if(m!==f){if(m!=null)m.gt().T(0,b.gaB())
h=b.c
b.c=f
f.gt().l(0,b.gaB())
m=new D.w("target",h,b.c)
m.b=!0
b.aC(m)}b.e.l(0,r)
b.b.saL(g)
m=s.d
if(m!==b){if(m!=null)m.gt().T(0,s.gcb())
s.d=b
b.gt().l(0,s.gcb())
s.cc()}b=new V.ev("options")
u=u.getElementById("options")
b.c=u
if(u==null)H.r("Failed to find options for CheckGroup")
b.d=H.d([],[W.ex])
b.fs(0,"Mouse Locking",new X.j8(s),!1)
V.nu(s)},
j7:function j7(a,b){this.a=a
this.b=b},
j8:function j8(a){this.a=a}},V={
je:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.aZ(a-b,u)
return(a<0?a+u:a)+b},
A:function(a,b,c){if(a==null)return C.a.a8("null",c)
return C.a.a8(C.d.dv(Math.abs(a-0)<$.x().a?0:a,b),c+b+1)},
by:function(a,b,c){var u,t,s,r,q,p,o=H.d([],[P.q])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.o)(a),++s){r=V.A(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.b(o,q)
u=C.a.a8(o[q],t)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=u}return o},
jQ:function(a){return C.d.hy(Math.pow(2,C.J.bQ(Math.log(H.n7(a))/Math.log(2))))},
lI:function(){var u=$.k6
return u==null?$.k6=new V.ay(1,0,0,0,1,0,0,0,1):u},
cL:function(){var u=$.ka
return u==null?$.ka=V.am(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
am:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
k9:function(a,b,c){return V.am(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
jv:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.am(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
k8:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.am(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
jw:function(a,b,c,d){d=V.jC()
return V.k7(V.ke(),d,new V.z(a,b,c))},
k7:function(a,b,c){var u=c.w(0,Math.sqrt(c.K(c))),t=b.aS(u),s=t.w(0,Math.sqrt(t.K(t))),r=u.aS(s),q=new V.z(a.a,a.b,a.c),p=s.O(0).K(q),o=r.O(0).K(q),n=u.O(0).K(q)
return V.am(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
b1:function(){var u=$.kd
return u==null?$.kd=new V.aa(0,0):u},
ke:function(){var u=$.bT
return u==null?$.bT=new V.a6(0,0,0):u},
ki:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cU(a,b,c,d)},
dh:function(){var u=$.kv
return u==null?$.kv=new V.z(0,0,0):u},
mc:function(){var u=$.hW
return u==null?$.hW=new V.z(-1,0,0):u},
jC:function(){var u=$.hX
return u==null?$.hX=new V.z(0,1,0):u},
md:function(){var u=$.hY
return u==null?$.hY=new V.z(0,0,1):u},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eT:function eT(a){this.a=a},
ay:function ay(a,b,c,d,e,f,g,h,i){var _=this
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
aa:function aa(a,b){this.a=a
this.b=b},
a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},
bU:function bU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cU:function cU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
M:function M(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
nu:function(a){P.m4(C.H,new V.ja(a))},
m_:function(a){var u=new V.h7()
u.dO(a,!0)
return u},
ev:function ev(a){this.a=a
this.d=this.c=null},
ew:function ew(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ja:function ja(a){this.a=a},
h7:function h7(){this.b=this.a=null},
h9:function h9(a){this.a=a},
h8:function h8(a){this.a=a}},U={
cr:function(){var u=new U.ez()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
eB:function(a){var u=new U.bD()
u.a=a
return u},
k1:function(a){var u=new U.bG()
u.b0(U.a0)
u.b_(u.gen(),u.gf_())
u.bC(0,a)
u.e=null
u.f=V.cL()
u.r=0
return u},
ez:function ez(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bD:function bD(){this.b=this.a=null},
bG:function bG(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a0:function a0(){},
cW:function cW(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
df:function df(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dg:function dg(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cw:function cw(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
lG:function(a,b){var u=a.as,t=new A.fm(b,u)
t.dN(b,u)
t.dK(a,b)
return t},
lH:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gaf(a0)+a1.gaf(a1)+a2.gaf(a2)+a3.gaf(a3)+a4.gaf(a4)+a5.gaf(a5)+a6.gaf(a6)+a7.gaf(a7)+a8.gaf(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.o)(a9),++t)f+="_"+H.f(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.o)(b0),++t)f+="_"+H.f(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.o)(b1),++t)f+="_"+H.f(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.aM()
if(l){u=$.aL()
g=new Z.aH(g.a|u.a)}if(k){u=$.aK()
g=new Z.aH(g.a|u.a)}if(j){u=$.aN()
g=new Z.aH(g.a|u.a)}if(i){u=$.aJ()
g=new Z.aH(g.a|u.a)}return new A.fp(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,m,p,r,h,!0,!1,!1,o,r,n,l,k,j,!1,i,a,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
iT:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
iU:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.iT(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.jc(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
mH:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.iT(b,t,"emission")
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
mE:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.iU(b,t,"ambient")
b.a+="\n"},
mF:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.iU(b,t,"diffuse")
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
mI:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.iU(b,t,"invDiffuse")
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
mO:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.iU(b,t,"specular")
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
mK:function(a,b){var u,t,s
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
mM:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.iT(b,t,"reflect")
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
mN:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.iT(b,t,"refract")
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
mG:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.f(u)
s=A.jc(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ab()
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
r=[P.q]
o=H.d([],r)
n=a.b
if(n.a||n.b||!1)o.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.d([],r)
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
c.a+="      highLight = intensity*("+C.b.q(m," + ")+");\n"}else c.a+="   highLight = "+C.b.q(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.b.q(o," + ")+");\n"
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
mL:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.f(u)
s=A.jc(t)
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
if(typeof u!=="number")return u.ab()
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
c.a=r+"\n"}r=[P.q]
l=H.d([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.b.q(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.d([],r)
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
k=H.d([],r)
r=a.c
if(r.a||r.b||!1)k.push("diffuse(norm, normDir)")
r=a.d
if(r.a||r.b||!1)k.push("invDiffuse(norm, normDir)")
r=a.e
if(r.a||r.b||!1)k.push("specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.b.q(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.b.q(l," + ")+");\n"
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
mP:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.f(u)
s=A.jc(t)
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
if(typeof u!=="number")return u.ab()
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
c.a=u+"\n"}u=[P.q]
j=H.d([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.b.q(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.d([],u)
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
i=H.d([],u)
u=a.c
if(u.a||u.b||!1)i.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)i.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)i.push("specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.b.q(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.q(j," + ")+");\n"
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
mJ:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.d([],[P.q])
u=a.b
if(u.a||u.b||!1)t.push("ambientColor")
u=a.c
if(u.a||u.b||!1)t.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)t.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.b.q(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
mQ:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.P("")
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
A.mH(a,j)
A.mE(a,j)
A.mF(a,j)
A.mI(a,j)
A.mO(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.mM(a,j)
A.mN(a,j)}A.mK(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.mG(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.mL(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.mP(a,q[o],j)
A.mJ(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.d([],[P.q])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a3(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a3(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a3(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)n.push("emissionColor()")
u=a.r
if(u.a||u.b||!1)n.push("reflect(refl)")
u=a.x
if(u.a||u.b||!1)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.b.q(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
mR:function(a,b){var u,t,s
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
mT:function(a,b){var u
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
mS:function(a,b){var u
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
mV:function(a,b){var u,t
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
mW:function(a,b){var u,t
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
mU:function(a,b){var u
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
mX:function(a,b){var u
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
jc:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.a3(a,1)},
jy:function(a,b,c,d,e){var u=new A.hB(a,c,e)
u.f=d
P.lE(d,0,P.u)
return u},
cn:function cn(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(a){this.a=a},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
fm:function fm(a,b){var _=this
_.hJ=_.cQ=_.cP=_.cO=_.as=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hR=_.hQ=_.hP=_.bP=_.bO=_.bN=_.bM=_.bL=_.bK=_.hO=_.d1=_.d0=_.hN=_.d_=_.cZ=_.cY=_.hM=_.cX=_.cW=_.cV=_.hL=_.cU=_.cT=_.hK=_.cS=_.cR=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ct:function ct(a,b){this.a=a
this.b=b},
cS:function cS(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b){this.a=a
this.b=b},
fp:function fp(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.as=b3
_.cO=b4},
bZ:function bZ(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c0:function c0(a,b,c,d,e,f,g,h,i,j){var _=this
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
c1:function c1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cX:function cX(){},
da:function da(){},
hG:function hG(a){this.a=a},
db:function db(a,b,c){this.a=a
this.c=b
this.d=c},
hD:function hD(a,b,c){this.a=a
this.c=b
this.d=c},
hE:function hE(a,b,c){this.a=a
this.c=b
this.d=c},
hF:function hF(a,b,c){this.a=a
this.c=b
this.d=c},
hB:function hB(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
U:function U(a,b,c){this.a=a
this.c=b
this.d=c},
hC:function hC(a,b,c){this.a=a
this.c=b
this.d=c},
H:function H(a,b,c){this.a=a
this.c=b
this.d=c},
bY:function bY(a,b,c){this.a=a
this.c=b
this.d=c},
hH:function hH(a,b,c){this.a=a
this.c=b
this.d=c},
c_:function c_(a,b,c){this.a=a
this.c=b
this.d=c},
ab:function ab(a,b,c){this.a=a
this.c=b
this.d=c},
Y:function Y(a,b,c){this.a=a
this.c=b
this.d=c},
bp:function bp(a,b,c){this.a=a
this.c=b
this.d=c}},F={
iO:function(a){var u,t=a.a>0?1:0
if(a.b>0)t+=2
u=a.c
if(typeof u!=="number")return u.U()
return(u>0?t+4:t)*2},
cd:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.z(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.z(u+a3,t+a1,s+a2)
q=new V.z(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.z(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.iO(i)
l=F.iO(j.b)
k=F.kU(d,a0,new F.iN(j,F.iO(j.c),F.iO(j.d),l,m,c),b)
if(k!=null)a.h6(k)},
nk:function(a,b){var u,t={}
t.a=u
t.a=null
t.a=new F.j0()
return F.kU(b,a,new F.j1(t),null)},
kU:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=F.kk()
t=H.d([],[F.c2])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.cH(new V.aP(p,0,0,1),new V.aa(r,1))
c.$3(o,r,0)
t.push(o.bJ(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.cH(new V.aP(j,i,h,1),new V.aa(r,m))
c.$3(o,r,n)
t.push(o.bJ(d))}}u.d.fv(a+1,b+1,t)
return u},
cx:function(a,b,c){var u=new F.bh(),t=a.a
if(t==null)H.r(P.t("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.r(P.t("May not create a face with vertices attached to different shapes."))
u.a=a
a.d.b.push(u)
u.b=b
b.d.c.push(u)
u.c=c
c.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.a0()
return u},
kk:function(){var u=new F.h3(),t=new F.hZ(u)
t.b=!1
t.c=H.d([],[F.c2])
u.a=t
t=new F.h6(u)
t.b=H.d([],[F.bS])
u.b=t
t=new F.h5(u)
t.b=H.d([],[F.bL])
u.c=t
t=new F.h4(u)
t.b=H.d([],[F.bh])
u.d=t
u.e=null
return u},
kw:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.c2(),r=new F.i3()
r.b=H.d([],[F.bS])
s.b=r
r=new F.i2()
u=[F.bL]
r.b=H.d([],u)
r.c=H.d([],u)
s.c=r
r=new F.i_()
u=[F.bh]
r.b=H.d([],u)
r.c=H.d([],u)
r.d=H.d([],u)
s.d=r
h=$.l8()
s.e=0
r=$.aM()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aL().a)!==0?e:t
s.x=(u&$.aK().a)!==0?b:t
s.y=(u&$.aN().a)!==0?f:t
s.z=(u&$.b8().a)!==0?g:t
s.Q=(u&$.l9().a)!==0?c:t
s.ch=(u&$.bz().a)!==0?i:0
s.cx=(u&$.aJ().a)!==0?a:t
return s},
iN:function iN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j0:function j0(){},
j1:function j1(a){this.a=a},
bh:function bh(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bL:function bL(){this.b=this.a=null},
bS:function bS(){this.a=null},
h3:function h3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h4:function h4(a){this.a=a
this.b=null},
h5:function h5(a){this.a=a
this.b=null},
h6:function h6(a){this.a=a
this.b=null},
c2:function c2(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i5:function i5(a){this.a=a},
i4:function i4(a){this.a=a},
hZ:function hZ(a){this.a=a
this.c=this.b=null},
i_:function i_(){this.d=this.c=this.b=null},
i0:function i0(a,b){this.a=a
this.b=b},
i1:function i1(a,b){this.a=a
this.b=b},
i2:function i2(){this.c=this.b=null},
i3:function i3(){this.b=null}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.js.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gE:function(a){return H.bV(a)},
h:function(a){return"Instance of '"+H.f(H.bW(a))+"'"}}
J.f5.prototype={
h:function(a){return String(a)},
gE:function(a){return a?519018:218159},
$ias:1}
J.cD.prototype={
n:function(a,b){return null==b},
h:function(a){return"null"},
gE:function(a){return 0}}
J.cE.prototype={
gE:function(a){return 0},
h:function(a){return String(a)}}
J.fP.prototype={}
J.bq.prototype={}
J.aV.prototype={
h:function(a){var u=a[$.kX()]
if(u==null)return this.dI(a)
return"JavaScript function for "+H.f(J.a2(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aT.prototype={
T:function(a,b){var u
if(!!a.fixed$length)H.r(P.v("remove"))
for(u=0;u<a.length;++u)if(J.E(a[u],b)){a.splice(u,1)
return!0}return!1},
bC:function(a,b){var u,t
if(!!a.fixed$length)H.r(P.v("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.o)(b),++t)a.push(b[t])},
F:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.bd(a))}},
q:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.f(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
h3:function(a){return this.q(a,"")},
fX:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.bd(a))}return u},
fY:function(a,b,c){return this.fX(a,b,c,null)},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
dF:function(a,b,c){if(b<0||b>a.length)throw H.c(P.T(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.T(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.j_(a,0)])
return H.d(a.slice(b,c),[H.j_(a,0)])},
gau:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.lx())},
bh:function(a,b){if(!!a.immutable$list)H.r(P.v("sort"))
H.cY(a,0,a.length-1,b)},
a1:function(a,b){var u
for(u=0;u<a.length;++u)if(J.E(a[u],b))return!0
return!1},
h:function(a){return P.jp(a,"[","]")},
gS:function(a){return new J.a_(a,a.length)},
gE:function(a){return H.bV(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.r(P.v("set length"))
if(b<0)throw H.c(P.T(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.c(H.bx(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.r(P.v("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bx(a,b))
a[b]=c},
$ih:1,
$in:1}
J.jr.prototype={}
J.a_.prototype={
gJ:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.o(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bJ.prototype={
fF:function(a,b){var u
if(typeof b!=="number")throw H.c(H.af(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb9(b)
if(this.gb9(a)===u)return 0
if(this.gb9(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb9:function(a){return a===0?1/a<0:a<0},
hy:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.v(""+a+".toInt()"))},
bQ:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.v(""+a+".floor()"))},
ae:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.v(""+a+".round()"))},
dv:function(a,b){var u
if(b>20)throw H.c(P.T(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gb9(a))return"-"+u
return u},
aX:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.T(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.P(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.r(P.v("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.b(t,1)
u=t[1]
if(3>=s)return H.b(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.m("0",r)},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gE:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
aZ:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dJ:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cD(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.cD(a,b)},
cD:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.v("Result of truncating division is "+H.f(u)+": "+H.f(a)+" ~/ "+b))},
aG:function(a,b){var u
if(a>0)u=this.cC(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fk:function(a,b){if(b<0)throw H.c(H.af(b))
return this.cC(a,b)},
cC:function(a,b){return b>31?0:a>>>b},
$iI:1,
$ia8:1}
J.cC.prototype={$iu:1}
J.cB.prototype={}
J.aU.prototype={
P:function(a,b){if(b<0)throw H.c(H.bx(a,b))
if(b>=a.length)H.r(H.bx(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.c(H.bx(a,b))
return a.charCodeAt(b)},
u:function(a,b){if(typeof b!=="string")throw H.c(P.jW(b,null,null))
return a+b},
aN:function(a,b,c,d){var u,t
c=P.b2(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
Z:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.T(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a2:function(a,b){return this.Z(a,b,0)},
p:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.af(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.M()
if(b<0)throw H.c(P.fU(b,null))
if(b>c)throw H.c(P.fU(b,null))
if(c>a.length)throw H.c(P.fU(c,null))
return a.substring(b,c)},
a3:function(a,b){return this.p(a,b,null)},
m:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.F)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a8:function(a,b){var u=b-a.length
if(u<=0)return a
return this.m(" ",u)+a},
hg:function(a,b,c){var u=b-a.length
if(u<=0)return a
return a+this.m(c,u)},
b7:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.T(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
d8:function(a,b){return this.b7(a,b,0)},
h:function(a){return a},
gE:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gj:function(a){return a.length},
$iq:1}
H.N.prototype={
gj:function(a){return this.a.length},
i:function(a,b){return C.a.P(this.a,b)},
$ap:function(){return[P.u]},
$ah:function(){return[P.u]},
$an:function(){return[P.u]}}
H.eQ.prototype={}
H.cH.prototype={
gJ:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.cg(s),q=r.gj(s)
if(t.b!==q)throw H.c(P.bd(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.G(s,u);++t.c
return!0}}
H.fk.prototype={
gS:function(a){return new H.fl(J.b9(this.a),this.b)},
gj:function(a){return J.ad(this.a)},
G:function(a,b){return this.b.$1(J.jh(this.a,b))},
$ah:function(a,b){return[b]}}
H.fl.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.a=u.c.$1(t.gJ(t))
return!0}u.a=null
return!1},
gJ:function(a){return this.a}}
H.i8.prototype={
gS:function(a){return new H.i9(J.b9(this.a),this.b)}}
H.i9.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(t.$1(u.gJ(u)))return!0
return!1},
gJ:function(a){var u=this.a
return u.gJ(u)}}
H.cy.prototype={}
H.hL.prototype={
k:function(a,b,c){throw H.c(P.v("Cannot modify an unmodifiable list"))}}
H.dc.prototype={}
H.eC.prototype={
h:function(a){return P.ju(this)},
k:function(a,b,c){return H.lq()},
$iO:1}
H.eD.prototype={
gj:function(a){return this.a},
b6:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.b6(0,b))return
return this.cp(b)},
cp:function(a){return this.b[a]},
F:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cp(s))}}}
H.hz.prototype={
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
H.fL.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f7.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.f(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.f(t.a)+")"
return s+r+"' on '"+u+"' ("+H.f(t.a)+")"}}
H.hK.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jd.prototype={
$1:function(a){if(!!J.Q(a).$ibf)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.dR.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bC.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
ghD:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hl.prototype={}
H.hf.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ef(u)+"'"}}
H.bA.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bA))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gE:function(a){var u,t=this.c
if(t==null)u=H.bV(this.a)
else u=typeof t!=="object"?J.cl(t):H.bV(t)
return(u^H.bV(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.bW(u))+"'")}}
H.et.prototype={
h:function(a){return this.a}}
H.h0.prototype={
h:function(a){return"RuntimeError: "+H.f(this.a)}}
H.J.prototype={
gj:function(a){return this.a},
gaj:function(a){return new H.fb(this,[H.j_(this,0)])},
b6:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cm(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cm(t,b)}else return s.h0(b)},
h0:function(a){var u=this,t=u.d
if(t==null)return!1
return u.bT(u.bp(t,u.bS(a)),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b1(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b1(r,b)
s=t==null?null:t.b
return s}else return q.h1(b)},
h1:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bp(r,s.bS(a))
t=s.bT(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cg(u==null?s.b=s.br():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cg(t==null?s.c=s.br():t,b,c)}else s.h2(b,c)},
h2:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.br()
u=r.bS(a)
t=r.bp(q,u)
if(t==null)r.bz(q,u,[r.bs(a,b)])
else{s=r.bT(t,a)
if(s>=0)t[s].b=b
else t.push(r.bs(a,b))}},
F:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.bd(u))
t=t.c}},
cg:function(a,b,c){var u=this.b1(a,b)
if(u==null)this.bz(a,b,this.bs(b,c))
else u.b=c},
bs:function(a,b){var u=this,t=new H.fa(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
bS:function(a){return J.cl(a)&0x3ffffff},
bT:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.E(a[t].a,b))return t
return-1},
h:function(a){return P.ju(this)},
b1:function(a,b){return a[b]},
bp:function(a,b){return a[b]},
bz:function(a,b,c){a[b]=c},
e9:function(a,b){delete a[b]},
cm:function(a,b){return this.b1(a,b)!=null},
br:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bz(t,u,t)
this.e9(t,u)
return t}}
H.fa.prototype={}
H.fb.prototype={
gj:function(a){return this.a.a},
gS:function(a){var u=this.a,t=new H.fc(u,u.r)
t.c=u.e
return t}}
H.fc.prototype={
gJ:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bd(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.j3.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.j4.prototype={
$2:function(a,b){return this.a(a,b)}}
H.j5.prototype={
$1:function(a){return this.a(a)}}
H.f6.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ilW:1}
H.bP.prototype={$ibP:1}
H.aZ.prototype={$iaZ:1}
H.cM.prototype={
gj:function(a){return a.length},
$iy:1,
$ay:function(){}}
H.bQ.prototype={
i:function(a,b){H.ar(b,a,a.length)
return a[b]},
k:function(a,b,c){H.ar(b,a,a.length)
a[b]=c},
$ap:function(){return[P.I]},
$ih:1,
$ah:function(){return[P.I]},
$in:1,
$an:function(){return[P.I]}}
H.cN.prototype={
k:function(a,b,c){H.ar(b,a,a.length)
a[b]=c},
$ap:function(){return[P.u]},
$ih:1,
$ah:function(){return[P.u]},
$in:1,
$an:function(){return[P.u]}}
H.fG.prototype={
i:function(a,b){H.ar(b,a,a.length)
return a[b]}}
H.fH.prototype={
i:function(a,b){H.ar(b,a,a.length)
return a[b]}}
H.fI.prototype={
i:function(a,b){H.ar(b,a,a.length)
return a[b]}}
H.fJ.prototype={
i:function(a,b){H.ar(b,a,a.length)
return a[b]}}
H.fK.prototype={
i:function(a,b){H.ar(b,a,a.length)
return a[b]}}
H.cO.prototype={
gj:function(a){return a.length},
i:function(a,b){H.ar(b,a,a.length)
return a[b]}}
H.bR.prototype={
gj:function(a){return a.length},
i:function(a,b){H.ar(b,a,a.length)
return a[b]},
$ibR:1,
$ibo:1}
H.c4.prototype={}
H.c5.prototype={}
H.c6.prototype={}
H.c7.prototype={}
P.ib.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.ia.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.ic.prototype={
$0:function(){this.a.$0()}}
P.id.prototype={
$0:function(){this.a.$0()}}
P.dX.prototype={
dY:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bw(new P.iD(this,b),0),a)
else throw H.c(P.v("`setTimeout()` not found."))},
dZ:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bw(new P.iC(this,a,Date.now(),b),0),a)
else throw H.c(P.v("Periodic timer."))},
$id5:1}
P.iD.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iC.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.dJ(u,q)}s.c=r
t.d.$1(s)}}
P.dj.prototype={}
P.d1.prototype={}
P.hi.prototype={}
P.d5.prototype={}
P.iM.prototype={}
P.iV.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cQ():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.h(0)
throw u}}
P.is.prototype={
hu:function(a){var u,t,s,r=null
try{if(C.f===$.ae){a.$0()
return}P.mZ(r,r,this,a)}catch(s){u=H.b7(s)
t=H.jN(s)
P.kF(r,r,this,u,t)}},
hv:function(a,b){var u,t,s,r=null
try{if(C.f===$.ae){a.$1(b)
return}P.n_(r,r,this,a,b)}catch(s){u=H.b7(s)
t=H.jN(s)
P.kF(r,r,this,u,t)}},
hw:function(a,b){return this.hv(a,b,null)},
fC:function(a){return new P.it(this,a)},
cK:function(a,b){return new P.iu(this,a,b)}}
P.it.prototype={
$0:function(){return this.a.hu(this.b)}}
P.iu.prototype={
$1:function(a){return this.a.hw(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ip.prototype={
gS:function(a){var u=new P.dz(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
l:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cj(u==null?s.b=P.jE():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cj(t==null?s.c=P.jE():t,b)}else return s.e0(0,b)},
e0:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jE()
u=s.ck(b)
t=r[u]
if(t==null)r[u]=[s.bl(b)]
else{if(s.cq(t,b)>=0)return!1
t.push(s.bl(b))}return!0},
T:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fa(this.c,b)
else return this.f9(0,b)},
f9:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.ec(r,b)
t=s.cq(u,b)
if(t<0)return!1
s.cE(u.splice(t,1)[0])
return!0},
cj:function(a,b){if(a[b]!=null)return!1
a[b]=this.bl(b)
return!0},
fa:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cE(u)
delete a[b]
return!0},
ct:function(){this.r=1073741823&this.r+1},
bl:function(a){var u,t=this,s=new P.iq(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.ct()
return s},
cE:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.ct()},
ck:function(a){return J.cl(a)&1073741823},
ec:function(a,b){return a[this.ck(b)]},
cq:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.E(a[t].a,b))return t
return-1}}
P.iq.prototype={}
P.dz.prototype={
gJ:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bd(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fd.prototype={
$2:function(a,b){this.a.k(0,a,b)},
$S:3}
P.fe.prototype={$ih:1,$in:1}
P.p.prototype={
gS:function(a){return new H.cH(a,this.gj(a))},
G:function(a,b){return this.i(a,b)},
hA:function(a,b){var u,t,s=this,r=H.d([],[H.ni(s,a,"p",0)])
C.b.sj(r,s.gj(a))
for(u=0;u<s.gj(a);++u){t=s.i(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t}return r},
hz:function(a){return this.hA(a,!0)},
fV:function(a,b,c,d){var u
P.b2(b,c,this.gj(a))
for(u=b;u<c;++u)this.k(a,u,d)},
h:function(a){return P.jp(a,"[","]")}}
P.fh.prototype={}
P.fi.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.f(a)
t.a=u+": "
t.a+=H.f(b)},
$S:3}
P.ax.prototype={
F:function(a,b){var u,t
for(u=J.b9(this.gaj(a));u.v();){t=u.gJ(u)
b.$2(t,this.i(a,t))}},
gj:function(a){return J.ad(this.gaj(a))},
h:function(a){return P.ju(a)},
$iO:1}
P.iE.prototype={
k:function(a,b,c){throw H.c(P.v("Cannot modify unmodifiable map"))}}
P.fj.prototype={
i:function(a,b){return J.ck(this.a,b)},
k:function(a,b,c){J.jf(this.a,b,c)},
F:function(a,b){J.jU(this.a,b)},
gj:function(a){return J.ad(this.a)},
h:function(a){return J.a2(this.a)},
$iO:1}
P.dd.prototype={}
P.iv.prototype={
h:function(a){return P.jp(this,"{","}")},
G:function(a,b){var u,t,s
P.kh(b,"index")
for(u=P.mj(this,this.r),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.c(P.G(b,this,"index",null,t))},
$ih:1}
P.dA.prototype={}
P.e2.prototype={}
P.ep.prototype={
h7:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.b2(a0,a1,b.length)
u=$.lb()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.a.D(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.j2(C.a.D(b,n))
j=H.j2(C.a.D(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.b(u,i)
h=u[i]
if(h>=0){i=C.a.P("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.P("")
g=r.a+=C.a.p(b,s,t)
r.a=g+H.cT(m)
s=n
continue}}throw H.c(P.L("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.p(b,s,a1)
f=g.length
if(q>=0)P.jX(b,p,a1,q,o,f)
else{e=C.c.aZ(f-1,4)+1
if(e===1)throw H.c(P.L(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aN(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.jX(b,p,a1,q,o,d)
else{e=C.c.aZ(d,4)
if(e===1)throw H.c(P.L(c,b,a1))
if(e>1)b=C.a.aN(b,a1,a1,e===2?"==":"=")}return b}}
P.eq.prototype={}
P.ey.prototype={}
P.eE.prototype={}
P.eR.prototype={}
P.hT.prototype={
gfU:function(){return C.G}}
P.hV.prototype={
bI:function(a){var u,t,s=P.b2(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iL(u)
if(t.eb(a,0,s)!==s)t.cG(J.lh(a,s-1),0)
return new Uint8Array(u.subarray(0,H.mA(0,t.b,u.length)))}}
P.iL.prototype={
cG:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eb:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.P(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.D(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cG(r,C.a.D(a,p)))s=p}else if(r<=2047){q=n.b
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
P.hU.prototype={
bI:function(a){var u,t,s,r,q,p,o,n,m=P.m7(!1,a,0,null)
if(m!=null)return m
u=P.b2(0,null,J.ad(a))
t=P.kH(a,0,u)
if(t>0){s=P.bX(a,0,t)
if(t===u)return s
r=new P.P(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.P("")
o=new P.iK(!1,r)
o.c=p
o.fG(a,q,u)
if(o.e>0){H.r(P.L("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.cT(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.iK.prototype={
fG:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.cg(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.ab()
if((r&192)!==128){q=P.L(k+C.c.aX(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.b(C.r,q)
if(j<=C.r[q]){q=P.L("Overlong encoding of 0x"+C.c.aX(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.L("Character outside valid Unicode range: 0x"+C.c.aX(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.cT(j)
l.c=!1}for(q=s<c;q;){p=P.kH(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.bX(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.M()
if(r<0){m=P.L("Negative UTF-8 code unit: -0x"+C.c.aX(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.L(k+C.c.aX(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.as.prototype={}
P.a3.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.a3&&this.a===b.a&&!0},
gE:function(a){var u=this.a
return(u^C.c.aG(u,30))&1073741823},
h:function(a){var u=this,t=P.lr(H.lS(u)),s=P.cs(H.lQ(u)),r=P.cs(H.lM(u)),q=P.cs(H.lN(u)),p=P.cs(H.lP(u)),o=P.cs(H.lR(u)),n=P.ls(H.lO(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.I.prototype={}
P.aQ.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aQ&&this.a===b.a},
gE:function(a){return C.c.gE(this.a)},
h:function(a){var u,t,s,r=new P.eP(),q=this.a
if(q<0)return"-"+new P.aQ(0-q).h(0)
u=r.$1(C.c.a_(q,6e7)%60)
t=r.$1(C.c.a_(q,1e6)%60)
s=new P.eO().$1(q%1e6)
return""+C.c.a_(q,36e8)+":"+H.f(u)+":"+H.f(t)+"."+H.f(s)}}
P.eO.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eP.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bf.prototype={}
P.cQ.prototype={
h:function(a){return"Throw of null."}}
P.ag.prototype={
gbn:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbm:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbn()+o+u
if(!q.a)return t
s=q.gbm()
r=P.jo(q.b)
return t+s+": "+r}}
P.bm.prototype={
gbn:function(){return"RangeError"},
gbm:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.f(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.f(s)
else if(t>s)u=": Not in range "+H.f(s)+".."+H.f(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.f(s)}return u}}
P.f3.prototype={
gbn:function(){return"RangeError"},
gbm:function(){var u,t=this.b
if(typeof t!=="number")return t.M()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.f(u)},
gj:function(a){return this.f}}
P.hM.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.hI.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.he.prototype={
h:function(a){return"Bad state: "+this.a}}
P.eA.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.jo(u)+"."}}
P.fO.prototype={
h:function(a){return"Out of Memory"},
$ibf:1}
P.d_.prototype={
h:function(a){return"Stack Overflow"},
$ibf:1}
P.eJ.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ds.prototype={
h:function(a){return"Exception: "+this.a}}
P.f0.prototype={
h:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.p(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.D(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.P(f,q)
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
k=""}j=C.a.p(f,m,n)
return h+l+j+k+"\n"+C.a.m(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.f(g)+")"):h}}
P.u.prototype={}
P.h.prototype={
gj:function(a){var u,t=this.gS(this)
for(u=0;t.v();)++u
return u},
G:function(a,b){var u,t,s
P.kh(b,"index")
for(u=this.gS(this),t=0;u.v();){s=u.gJ(u)
if(b===t)return s;++t}throw H.c(P.G(b,this,"index",null,t))},
h:function(a){return P.lw(this,"(",")")}}
P.f4.prototype={}
P.n.prototype={$ih:1}
P.O.prototype={}
P.b_.prototype={
gE:function(a){return P.Z.prototype.gE.call(this,this)},
h:function(a){return"null"}}
P.a8.prototype={}
P.Z.prototype={constructor:P.Z,$iZ:1,
n:function(a,b){return this===b},
gE:function(a){return H.bV(this)},
h:function(a){return"Instance of '"+H.f(H.bW(this))+"'"},
toString:function(){return this.h(this)}}
P.q.prototype={}
P.P.prototype={
gj:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.hR.prototype={
$2:function(a,b){var u,t,s,r=J.jM(b).d8(b,"=")
if(r===-1){if(b!=="")J.jf(a,P.jI(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.p(b,0,r)
t=C.a.a3(b,r+1)
s=this.a
J.jf(a,P.jI(u,0,u.length,s,!0),P.jI(t,0,t.length,s,!0))}return a}}
P.hO.prototype={
$2:function(a,b){throw H.c(P.L("Illegal IPv4 address, "+a,this.a,b))}}
P.hP.prototype={
$2:function(a,b){throw H.c(P.L("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.hQ.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.ee(C.a.p(this.b,a,b),null,16)
if(typeof u!=="number")return u.M()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.br.prototype={
gdz:function(){return this.b},
gbR:function(a){var u=this.c
if(u==null)return""
if(C.a.a2(u,"["))return C.a.p(u,1,u.length-1)
return u},
gbb:function(a){var u=this.d
if(u==null)return P.ky(this.a)
return u},
gc_:function(a){var u=this.f
return u==null?"":u},
gd3:function(){var u=this.r
return u==null?"":u},
dq:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a2(u,"/"))u="/"+u
s=P.jG(null,0,0,b)
return new P.br(q,o,m,n,u,s,r.r)},
gbc:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.q
u=this.Q=new P.dd(P.ks(t==null?"":t),[u,u])
t=u}return t},
gd4:function(){return this.c!=null},
gd7:function(){return this.f!=null},
gd5:function(){return this.r!=null},
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
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.Q(b).$ijz)if(s.a==b.gbe())if(s.c!=null===b.gd4())if(s.b==b.gdz())if(s.gbR(s)==b.gbR(b))if(s.gbb(s)==b.gbb(b))if(s.e===b.gdj(b)){u=s.f
t=u==null
if(!t===b.gd7()){if(t)u=""
if(u===b.gc_(b)){u=s.r
t=u==null
if(!t===b.gd5()){if(t)u=""
u=u===b.gd3()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gE:function(a){var u=this.z
return u==null?this.z=C.a.gE(this.h(0)):u},
$ijz:1,
gbe:function(){return this.a},
gdj:function(a){return this.e}}
P.iF.prototype={
$1:function(a){throw H.c(P.L("Invalid port",this.a,this.b+1))}}
P.iG.prototype={
$1:function(a){return P.iJ(C.O,a,C.e,!1)}}
P.iI.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.f(P.iJ(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.f(P.iJ(C.h,b,C.e,!0))}}}
P.iH.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.b9(b),t=this.a;u.v();)t.$2(a,u.gJ(u))}}
P.hN.prototype={
gdw:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.b(o,0)
u=q.a
o=o[0]+1
t=C.a.b7(u,"?",o)
s=u.length
if(t>=0){r=P.cc(u,t+1,s,C.k,!1)
s=t}else r=p
return q.c=new P.ii("data",p,p,p,P.cc(u,o,s,C.u,!1),r,p)},
h:function(a){var u,t=this.b
if(0>=t.length)return H.b(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.iQ.prototype={
$1:function(a){return new Uint8Array(96)}}
P.iP.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.b(u,a)
u=u[a]
J.li(u,0,96,b)
return u},
$S:17}
P.iR.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.D(b,s)^96
if(r>=t)return H.b(a,r)
a[r]=c}}}
P.iS.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.D(b,0),t=C.a.D(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.b(a,r)
a[r]=c}}}
P.iw.prototype={
gd4:function(){return this.c>0},
gd6:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.u()
t=this.e
if(typeof t!=="number")return H.l(t)
t=u+1<t
u=t}else u=!1
return u},
gd7:function(){var u=this.f
if(typeof u!=="number")return u.M()
return u<this.r},
gd5:function(){return this.r<this.a.length},
gcr:function(){return this.b===4&&C.a.a2(this.a,"http")},
gcs:function(){return this.b===5&&C.a.a2(this.a,"https")},
gbe:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcr())q=t.x="http"
else if(t.gcs()){t.x="https"
q="https"}else if(q===4&&C.a.a2(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a2(t.a,r)){t.x=r
q=r}else{q=C.a.p(t.a,0,q)
t.x=q}return q},
gdz:function(){var u=this.c,t=this.b+3
return u>t?C.a.p(this.a,t,u-1):""},
gbR:function(a){var u=this.c
return u>0?C.a.p(this.a,u,this.d):""},
gbb:function(a){var u,t=this
if(t.gd6()){u=t.d
if(typeof u!=="number")return u.u()
return P.ee(C.a.p(t.a,u+1,t.e),null,null)}if(t.gcr())return 80
if(t.gcs())return 443
return 0},
gdj:function(a){return C.a.p(this.a,this.e,this.f)},
gc_:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.M()
return u<t?C.a.p(this.a,u+1,t):""},
gd3:function(){var u=this.r,t=this.a
return u<t.length?C.a.a3(t,u+1):""},
gbc:function(){var u=this,t=u.f
if(typeof t!=="number")return t.M()
if(t>=u.r)return C.P
t=P.q
return new P.dd(P.ks(u.gc_(u)),[t,t])},
dq:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbe(),m=n==="file",l=p.c,k=l>0?C.a.p(p.a,p.b+3,l):"",j=p.gd6()?p.gbb(p):o
l=p.c
if(l>0)u=C.a.p(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.p(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a2(t,"/"))t="/"+t
r=P.jG(o,0,0,b)
s=p.r
q=s<l.length?C.a.a3(l,s+1):o
return new P.br(n,k,u,j,t,r,q)},
gE:function(a){var u=this.y
return u==null?this.y=C.a.gE(this.a):u},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.Q(b).$ijz&&this.a===b.h(0)},
h:function(a){return this.a},
$ijz:1}
P.ii.prototype={}
W.k.prototype={}
W.eg.prototype={
gj:function(a){return a.length}}
W.ei.prototype={
h:function(a){return String(a)}}
W.ej.prototype={
h:function(a){return String(a)}}
W.bb.prototype={$ibb:1}
W.bc.prototype={
c5:function(a,b,c){if(c!=null)return a.getContext(b,P.n8(c))
return a.getContext(b)},
dB:function(a,b){return this.c5(a,b,null)},
$ibc:1}
W.aO.prototype={
gj:function(a){return a.length}}
W.eF.prototype={
gj:function(a){return a.length}}
W.C.prototype={$iC:1}
W.bE.prototype={
gj:function(a){return a.length}}
W.eG.prototype={}
W.a9.prototype={}
W.ai.prototype={}
W.eH.prototype={
gj:function(a){return a.length}}
W.eI.prototype={
gj:function(a){return a.length}}
W.eK.prototype={
gj:function(a){return a.length}}
W.eL.prototype={
h:function(a){return String(a)}}
W.cu.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[[P.a7,P.a8]]},
$ap:function(){return[[P.a7,P.a8]]},
$ih:1,
$ah:function(){return[[P.a7,P.a8]]},
$in:1,
$an:function(){return[[P.a7,P.a8]]}}
W.cv.prototype={
h:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gay(a))+" x "+H.f(this.gat(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
if(!u.$ia7)return!1
return a.left===u.gba(b)&&a.top===u.gbd(b)&&this.gay(a)===u.gay(b)&&this.gat(a)===u.gat(b)},
gE:function(a){return W.kx(C.d.gE(a.left),C.d.gE(a.top),C.d.gE(this.gay(a)),C.d.gE(this.gat(a)))},
gcL:function(a){return a.bottom},
gat:function(a){return a.height},
gba:function(a){return a.left},
gc0:function(a){return a.right},
gbd:function(a){return a.top},
gay:function(a){return a.width},
$ia7:1,
$aa7:function(){return[P.a8]}}
W.eM.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[P.q]},
$ap:function(){return[P.q]},
$ih:1,
$ah:function(){return[P.q]},
$in:1,
$an:function(){return[P.q]}}
W.eN.prototype={
gj:function(a){return a.length}}
W.ig.prototype={
gj:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
k:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
this.a.replaceChild(c,u[b])},
l:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var u=this.hz(this)
return new J.a_(u,u.length)},
$ap:function(){return[W.S]},
$ah:function(){return[W.S]},
$an:function(){return[W.S]}}
W.S.prototype={
gbH:function(a){return new W.ig(a,a.children)},
gcM:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.M()
if(s<0)s=-s*0
if(typeof r!=="number")return r.M()
if(r<0)r=-r*0
return new P.a7(u,t,s,r,[P.a8])},
h:function(a){return a.localName},
$iS:1}
W.i.prototype={$ii:1}
W.e.prototype={
fu:function(a,b,c,d){if(c!=null)this.e1(a,b,c,!1)},
e1:function(a,b,c,d){return a.addEventListener(b,H.bw(c,1),!1)}}
W.aj.prototype={$iaj:1}
W.bF.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aj]},
$ap:function(){return[W.aj]},
$ih:1,
$ah:function(){return[W.aj]},
$in:1,
$an:function(){return[W.aj]},
$ibF:1}
W.eW.prototype={
gj:function(a){return a.length}}
W.f_.prototype={
gj:function(a){return a.length}}
W.av.prototype={$iav:1}
W.f2.prototype={
gj:function(a){return a.length}}
W.bH.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.B]},
$ap:function(){return[W.B]},
$ih:1,
$ah:function(){return[W.B]},
$in:1,
$an:function(){return[W.B]}}
W.aw.prototype={$iaw:1,
gcN:function(a){return a.data}}
W.bI.prototype={$ibI:1}
W.ex.prototype={$iS:1,$iB:1}
W.bk.prototype={$ibk:1}
W.ff.prototype={
h:function(a){return String(a)}}
W.fz.prototype={
gj:function(a){return a.length}}
W.bO.prototype={$ibO:1}
W.fA.prototype={
i:function(a,b){return P.aI(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aI(u.value[1]))}},
gaj:function(a){var u=H.d([],[P.q])
this.F(a,new W.fB(u))
return u},
gj:function(a){return a.size},
k:function(a,b,c){throw H.c(P.v("Not supported"))},
$iO:1,
$aO:function(){return[P.q,null]}}
W.fB.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fC.prototype={
i:function(a,b){return P.aI(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aI(u.value[1]))}},
gaj:function(a){var u=H.d([],[P.q])
this.F(a,new W.fD(u))
return u},
gj:function(a){return a.size},
k:function(a,b,c){throw H.c(P.v("Not supported"))},
$iO:1,
$aO:function(){return[P.q,null]}}
W.fD.prototype={
$2:function(a,b){return this.a.push(a)}}
W.az.prototype={$iaz:1}
W.fE.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.az]},
$ap:function(){return[W.az]},
$ih:1,
$ah:function(){return[W.az]},
$in:1,
$an:function(){return[W.az]}}
W.an.prototype={$ian:1}
W.ie.prototype={
k:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.b(t,b)
u.replaceChild(c,t[b])},
gS:function(a){var u=this.a.childNodes
return new W.cz(u,u.length)},
gj:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$ap:function(){return[W.B]},
$ah:function(){return[W.B]},
$an:function(){return[W.B]}}
W.B.prototype={
hs:function(a,b){var u,t
try{u=a.parentNode
J.lf(u,b,a)}catch(t){H.b7(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.dH(a):u},
fb:function(a,b,c){return a.replaceChild(b,c)},
$iB:1}
W.cP.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.B]},
$ap:function(){return[W.B]},
$ih:1,
$ah:function(){return[W.B]},
$in:1,
$an:function(){return[W.B]}}
W.aB.prototype={$iaB:1,
gj:function(a){return a.length}}
W.fQ.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aB]},
$ap:function(){return[W.aB]},
$ih:1,
$ah:function(){return[W.aB]},
$in:1,
$an:function(){return[W.aB]}}
W.fZ.prototype={
i:function(a,b){return P.aI(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aI(u.value[1]))}},
gaj:function(a){var u=H.d([],[P.q])
this.F(a,new W.h_(u))
return u},
gj:function(a){return a.size},
k:function(a,b,c){throw H.c(P.v("Not supported"))},
$iO:1,
$aO:function(){return[P.q,null]}}
W.h_.prototype={
$2:function(a,b){return this.a.push(a)}}
W.h1.prototype={
gj:function(a){return a.length}}
W.aC.prototype={$iaC:1}
W.ha.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aC]},
$ap:function(){return[W.aC]},
$ih:1,
$ah:function(){return[W.aC]},
$in:1,
$an:function(){return[W.aC]}}
W.aD.prototype={$iaD:1}
W.hb.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aD]},
$ap:function(){return[W.aD]},
$ih:1,
$ah:function(){return[W.aD]},
$in:1,
$an:function(){return[W.aD]}}
W.aE.prototype={$iaE:1,
gj:function(a){return a.length}}
W.hg.prototype={
i:function(a,b){return a.getItem(b)},
k:function(a,b,c){a.setItem(b,c)},
F:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaj:function(a){var u=H.d([],[P.q])
this.F(a,new W.hh(u))
return u},
gj:function(a){return a.length},
$iO:1,
$aO:function(){return[P.q,P.q]}}
W.hh.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ao.prototype={$iao:1}
W.aF.prototype={$iaF:1}
W.ap.prototype={$iap:1}
W.hm.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.ap]},
$ap:function(){return[W.ap]},
$ih:1,
$ah:function(){return[W.ap]},
$in:1,
$an:function(){return[W.ap]}}
W.hn.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aF]},
$ap:function(){return[W.aF]},
$ih:1,
$ah:function(){return[W.aF]},
$in:1,
$an:function(){return[W.aF]}}
W.ht.prototype={
gj:function(a){return a.length}}
W.aG.prototype={$iaG:1}
W.bn.prototype={$ibn:1}
W.hw.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aG]},
$ap:function(){return[W.aG]},
$ih:1,
$ah:function(){return[W.aG]},
$in:1,
$an:function(){return[W.aG]}}
W.hx.prototype={
gj:function(a){return a.length}}
W.b4.prototype={}
W.hS.prototype={
h:function(a){return String(a)}}
W.i6.prototype={
gj:function(a){return a.length}}
W.b5.prototype={
gfL:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.v("deltaY is not supported"))},
gfK:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.v("deltaX is not supported"))},
$ib5:1}
W.c3.prototype={
fc:function(a,b){return a.requestAnimationFrame(H.bw(b,1))},
ea:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ih.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.C]},
$ap:function(){return[W.C]},
$ih:1,
$ah:function(){return[W.C]},
$in:1,
$an:function(){return[W.C]}}
W.dm.prototype={
h:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
if(!u.$ia7)return!1
return a.left===u.gba(b)&&a.top===u.gbd(b)&&a.width===u.gay(b)&&a.height===u.gat(b)},
gE:function(a){return W.kx(C.d.gE(a.left),C.d.gE(a.top),C.d.gE(a.width),C.d.gE(a.height))},
gat:function(a){return a.height},
gay:function(a){return a.width}}
W.il.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.av]},
$ap:function(){return[W.av]},
$ih:1,
$ah:function(){return[W.av]},
$in:1,
$an:function(){return[W.av]}}
W.dF.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.B]},
$ap:function(){return[W.B]},
$ih:1,
$ah:function(){return[W.B]},
$in:1,
$an:function(){return[W.B]}}
W.ix.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aE]},
$ap:function(){return[W.aE]},
$ih:1,
$ah:function(){return[W.aE]},
$in:1,
$an:function(){return[W.aE]}}
W.iB.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.ao]},
$ap:function(){return[W.ao]},
$ih:1,
$ah:function(){return[W.ao]},
$in:1,
$an:function(){return[W.ao]}}
W.ij.prototype={}
W.ik.prototype={
$1:function(a){return this.a.$1(a)}}
W.F.prototype={
gS:function(a){return new W.cz(a,this.gj(a))}}
W.cz.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.ck(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gJ:function(a){return this.d}}
W.dl.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.dt.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.c8.prototype={}
W.c9.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dS.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.ca.prototype={}
W.cb.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
P.iy.prototype={
d2:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
c3:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.Q(a)
if(!!u.$ia3)return new Date(a.a)
if(!!u.$ilW)throw H.c(P.hJ("structured clone of RegExp"))
if(!!u.$iaj)return a
if(!!u.$ibb)return a
if(!!u.$ibF)return a
if(!!u.$iaw)return a
if(!!u.$ibP||!!u.$iaZ||!!u.$ibO)return a
if(!!u.$iO){t=p.d2(a)
s=p.b
r=s.length
if(t>=r)return H.b(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.b(s,t)
s[t]=q
u.F(a,new P.iA(o,p))
return o.a}if(!!u.$in){t=p.d2(a)
o=p.b
if(t>=o.length)return H.b(o,t)
q=o[t]
if(q!=null)return q
return p.fI(a,t)}throw H.c(P.hJ("structured clone of other type"))},
fI:function(a,b){var u,t=J.cg(a),s=t.gj(a),r=new Array(s),q=this.b
if(b>=q.length)return H.b(q,b)
q[b]=r
for(u=0;u<s;++u){q=this.c3(t.i(a,u))
if(u>=r.length)return H.b(r,u)
r[u]=q}return r}}
P.iA.prototype={
$2:function(a,b){this.a.a[a]=this.b.c3(b)},
$S:3}
P.e1.prototype={$iaw:1,
gcN:function(a){return this.a}}
P.iW.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.iz.prototype={}
P.eX.prototype={
gb2:function(){var u=this.b,t=H.kM(u,"p",0)
return new H.fk(new H.i8(u,new P.eY(),[t]),new P.eZ(),[t,W.S])},
k:function(a,b,c){var u=this.gb2()
J.lj(u.b.$1(J.jh(u.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.ad(this.gb2().a)},
i:function(a,b){var u=this.gb2()
return u.b.$1(J.jh(u.a,b))},
gS:function(a){var u=P.k4(this.gb2(),!1,W.S)
return new J.a_(u,u.length)},
$ap:function(){return[W.S]},
$ah:function(){return[W.S]},
$an:function(){return[W.S]}}
P.eY.prototype={
$1:function(a){return!!J.Q(a).$iS}}
P.eZ.prototype={
$1:function(a){return H.m(a,"$iS")}}
P.ir.prototype={
gc0:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.l(t)
return u+t},
gcL:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.l(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.f(u.a)+", "+H.f(u.b)+") "+H.f(u.c)+" x "+H.f(u.d)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.Q(b)
if(!!u.$ia7){t=q.a
if(t==u.gba(b)){s=q.b
if(s==u.gbd(b)){r=q.c
if(typeof t!=="number")return t.u()
if(typeof r!=="number")return H.l(r)
if(t+r===u.gc0(b)){t=q.d
if(typeof s!=="number")return s.u()
if(typeof t!=="number")return H.l(t)
u=s+t===u.gcL(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gE:function(a){var u=this,t=u.a,s=J.cl(t),r=u.b,q=J.cl(r),p=u.c
if(typeof t!=="number")return t.u()
if(typeof p!=="number")return H.l(p)
p=C.c.gE(t+p)
t=u.d
if(typeof r!=="number")return r.u()
if(typeof t!=="number")return H.l(t)
t=C.c.gE(r+t)
return P.mi(P.io(P.io(P.io(P.io(0,s),q),p),t))}}
P.a7.prototype={
gba:function(a){return this.a},
gbd:function(a){return this.b},
gay:function(a){return this.c},
gat:function(a){return this.d}}
P.aW.prototype={$iaW:1}
P.f9.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
G:function(a,b){return this.i(a,b)},
$ap:function(){return[P.aW]},
$ih:1,
$ah:function(){return[P.aW]},
$in:1,
$an:function(){return[P.aW]}}
P.b0.prototype={$ib0:1}
P.fM.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
G:function(a,b){return this.i(a,b)},
$ap:function(){return[P.b0]},
$ih:1,
$ah:function(){return[P.b0]},
$in:1,
$an:function(){return[P.b0]}}
P.fT.prototype={
gj:function(a){return a.length}}
P.hj.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
G:function(a,b){return this.i(a,b)},
$ap:function(){return[P.q]},
$ih:1,
$ah:function(){return[P.q]},
$in:1,
$an:function(){return[P.q]}}
P.j.prototype={
gbH:function(a){return new P.eX(a,new W.ie(a))}}
P.b3.prototype={$ib3:1}
P.hy.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
G:function(a,b){return this.i(a,b)},
$ap:function(){return[P.b3]},
$ih:1,
$ah:function(){return[P.b3]},
$in:1,
$an:function(){return[P.b3]}}
P.dx.prototype={}
P.dy.prototype={}
P.dI.prototype={}
P.dJ.prototype={}
P.dT.prototype={}
P.dU.prototype={}
P.e_.prototype={}
P.e0.prototype={}
P.bo.prototype={$ih:1,
$ah:function(){return[P.u]},
$in:1,
$an:function(){return[P.u]}}
P.el.prototype={
gj:function(a){return a.length}}
P.em.prototype={
i:function(a,b){return P.aI(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aI(u.value[1]))}},
gaj:function(a){var u=H.d([],[P.q])
this.F(a,new P.en(u))
return u},
gj:function(a){return a.size},
k:function(a,b,c){throw H.c(P.v("Not supported"))},
$iO:1,
$aO:function(){return[P.q,null]}}
P.en.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eo.prototype={
gj:function(a){return a.length}}
P.ba.prototype={}
P.fN.prototype={
gj:function(a){return a.length}}
P.dk.prototype={}
P.cV.prototype={
hx:function(a,b,c,d,e,f,g){var u,t=J.Q(g)
if(!!t.$iaw)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.n9(g))
return}if(!!t.$ibI)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.cm("Incorrect number or type of arguments"))}}
P.hd.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return P.aI(a.item(b))},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
G:function(a,b){return this.i(a,b)},
$ap:function(){return[[P.O,,,]]},
$ih:1,
$ah:function(){return[[P.O,,,]]},
$in:1,
$an:function(){return[[P.O,,,]]}}
P.dP.prototype={}
P.dQ.prototype={}
T.eh.prototype={
aK:function(a,b){return!0},
h:function(a){return"all"}}
T.cA.prototype={
aK:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)if(u[s].aK(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.cJ.prototype={}
T.aA.prototype={
aK:function(a,b){return!this.dG(0,b)},
h:function(a){return"!["+this.c7(0)+"]"}}
T.h2.prototype={
dM:function(a){var u,t
if(a.a.length<=0)throw H.c(P.t("May not create a Set with zero characters."))
u=new H.J([P.u,P.as])
for(t=new H.cH(a,a.gj(a));t.v();)u.k(0,t.d,!0)
this.a=u},
aK:function(a,b){return this.a.b6(0,b)},
h:function(a){var u=this.a
return P.bX(u.gaj(u),0,null)}}
R.d0.prototype={
q:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.d9(this.a.N(0,b))
r.a=H.d([],[T.cJ])
r.c=!1
this.c.push(r)
return r},
fW:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.aK(0,a))return r}return},
h:function(a){return this.b}}
R.d6.prototype={
h:function(a){var u=H.kT(this.b,"\n","\\n"),t=H.kT(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.d7.prototype={
h:function(a){return this.b}}
R.hu.prototype={
N:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.d0(this,b)
u.c=H.d([],[R.d9])
this.a.k(0,b,u)}return u},
aY:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.d7(a)
u=P.q
t.c=new H.J([u,u])
this.b.k(0,a,t)}return t},
hB:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[R.d6]),k=this.c,j=[P.u],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)l.push(t)
return l}r=C.a.D(a,s)
q=k.fW(r)
if(q==null){if(t==null){i.push(r)
p=P.bX(i,0,m)
throw H.c(P.t("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}l.push(t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)i.push(r)
k=q.b
if(k.d!=null){p=P.bX(i,0,m)
o=k.d
n=o.c.i(0,p)
t=new R.d6(n==null?o.b:n,p,s)}++s}}}}
R.d9.prototype={
h:function(a){return this.b.b+": "+this.c7(0)}}
O.at.prototype={
b0:function(a){this.a=H.d([],[a])
this.c=this.b=null},
bf:function(a,b,c){this.b=b
this.c=a},
b_:function(a,b){return this.bf(a,null,b)},
bw:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
ca:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.a_(u,u.length)},
G:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
l:function(a,b){var u,t,s=this,r=[H.kM(s,"at",0)]
if(s.bw(H.d([b],r))){u=s.a
t=u.length
u.push(b)
s.ca(t,H.d([b],r))}},
bC:function(a,b){var u,t
if(this.bw(b)){u=this.a
t=u.length
C.b.bC(u,b)
this.ca(t,b)}},
$ih:1}
O.bN.prototype={
gj:function(a){return this.a.length},
gt:function(){var u=this.b
return u==null?this.b=D.D():u},
az:function(){var u=this.b
if(u!=null)u.B(null)},
gW:function(a){var u=this.a
if(u.length>0)return C.b.gau(u)
else return V.cL()},
dm:function(a){var u=this.a
if(a==null)u.push(V.cL())
else u.push(a)
this.az()},
bZ:function(){var u=this.a
if(u.length>0){u.pop()
this.az()}}}
E.er.prototype={}
E.au.prototype={
ci:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.a_(u,u.length);u.v();){t=u.d
if(t.f==null)t.ci()}},
sbg:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().T(0,s.gdf())
u=s.c
if(u!=null)u.gt().l(0,s.gdf())
t=new D.w("shape",r,s.c)
t.b=!0
s.ad(t)}},
sc1:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gt().T(0,s.gdh())
u=s.f
s.f=a
if(a!=null)a.gt().l(0,s.gdh())
s.ci()
t=new D.w("technique",u,s.f)
t.b=!0
s.ad(t)}},
saL:function(a){var u,t,s=this
if(!J.E(s.r,a)){u=s.r
if(u!=null)u.gt().T(0,s.gdd())
if(a!=null)a.gt().l(0,s.gdd())
s.r=a
t=new D.w("mover",u,a)
t.b=!0
s.ad(t)}},
aa:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.ax(0,b,s):null
if(!J.E(q,s.x)){u=s.x
s.x=q
t=new D.w("matrix",u,q)
t.b=!0
s.ad(t)}r=s.f
if(r!=null)r.aa(0,b)
for(r=s.y.a,r=new J.a_(r,r.length);r.v();)r.d.aa(0,b)},
aM:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.gW(s))
else s.a.push(r.m(0,s.gW(s)))
s.az()
a.dn(t.f)
s=a.dy
u=(s&&C.b).gau(s)
if(u!=null&&t.d!=null)u.hr(a,t)
for(s=t.y.a,s=new J.a_(s,s.length);s.v();)s.d.aM(a)
a.dl()
a.dx.bZ()},
ad:function(a){var u=this.z
if(u!=null)u.B(a)},
a0:function(){return this.ad(null)},
dg:function(a){this.e=null
this.ad(a)},
he:function(){return this.dg(null)},
di:function(a){this.ad(a)},
hf:function(){return this.di(null)},
de:function(a){this.ad(a)},
hd:function(){return this.de(null)},
dc:function(a){this.ad(a)},
ha:function(){return this.dc(null)},
h9:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gda(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bg()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.d([],s):o).push(t)}}this.a0()},
hc:function(a,b){var u,t
for(u=b.gS(b),t=this.gda();u.v();)u.gJ(u).gt().T(0,t)
this.a0()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.fV.prototype={
dL:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a3(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bN()
t=[V.al]
u.a=H.d([],t)
u.gt().l(0,new E.fW(s))
s.cy=u
u=new O.bN()
u.a=H.d([],t)
u.gt().l(0,new E.fX(s))
s.db=u
u=new O.bN()
u.a=H.d([],t)
u.gt().l(0,new E.fY(s))
s.dx=u
u=H.d([],[O.d2])
s.dy=u
u.push(null)
s.fr=new H.J([P.q,A.cX])},
ghp:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gW(s)
u=t.db
u=t.z=s.m(0,u.gW(u))
s=u}return s},
dn:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gau(u):a)},
dl:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.fW.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.fX.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.fY.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.d4.prototype={
cd:function(a){this.dr()},
cc:function(){return this.cd(null)},
gfZ:function(){var u,t=this,s=Date.now(),r=C.c.a_(P.k0(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a3(s,!1)
return u/r},
cz:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.m()
if(typeof r!=="number")return H.l(r)
u=C.d.bQ(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.m()
t=C.d.bQ(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kn(C.m,s.ght())}},
dr:function(){if(!this.cx){this.cx=!0
var u=window
C.x.ea(u)
C.x.fc(u,W.kI(new E.hs(this),P.a8))}},
hq:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cz()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a3(r,!1)
s.y=P.k0(r-s.r.a).a*0.000001
r=s.cy
C.b.sj(r.a,0)
r.az()
r=s.db
C.b.sj(r.a,0)
r.az()
r=s.dx
C.b.sj(r.a,0)
r.az()
r=s.dy;(r&&C.b).sj(r,0)
s.dy.push(null)
o.aM(p.e)}}catch(q){u=H.b7(q)
t=H.jN(q)
P.jR("Error: "+H.f(u))
P.jR("Stack: "+H.f(t))
throw H.c(u)}}}
E.hs.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.hq()}}}
Z.di.prototype={}
Z.co.prototype={
bD:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.b7(s)
t=P.t('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.f(u))
throw H.c(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.f(u.e)+"]"}}
Z.i7.prototype={}
Z.cp.prototype={
aI:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bD:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bD(a)},
hC:function(a){var u,t,s
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
h:function(a){var u,t,s,r,q=[P.q],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)p.push(u[s].h(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a2(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.b.q(p,", ")+"\nAttrs:   "+C.b.q(r,", ")}}
Z.bi.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.bW(this.c))+"'")+"]"}}
Z.aH.prototype={
gc6:function(a){var u=this.a,t=(u&$.aM().a)!==0?3:0
if((u&$.aL().a)!==0)t+=3
if((u&$.aK().a)!==0)t+=3
if((u&$.aN().a)!==0)t+=2
if((u&$.b8().a)!==0)t+=3
if((u&$.ci().a)!==0)t+=3
if((u&$.cj().a)!==0)t+=4
if((u&$.bz().a)!==0)++t
return(u&$.aJ().a)!==0?t+4:t},
fw:function(a){var u,t=$.aM(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aL()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aK()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aN()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b8()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ci()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bz()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aJ()
if((s&t.a)!==0)if(u===a)return t
return $.la()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aH))return!1
return this.a===b.a},
h:function(a){var u=H.d([],[P.q]),t=this.a
if((t&$.aM().a)!==0)u.push("Pos")
if((t&$.aL().a)!==0)u.push("Norm")
if((t&$.aK().a)!==0)u.push("Binm")
if((t&$.aN().a)!==0)u.push("Txt2D")
if((t&$.b8().a)!==0)u.push("TxtCube")
if((t&$.ci().a)!==0)u.push("Clr3")
if((t&$.cj().a)!==0)u.push("Clr4")
if((t&$.bz().a)!==0)u.push("Weight")
if((t&$.aJ().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.q(u,"|")}}
D.eu.prototype={}
D.bg.prototype={
l:function(a,b){var u=this.a;(u==null?this.a=H.d([],[{func:1,ret:-1,args:[D.W]}]):u).push(b)},
T:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.a1(s,b)
if(s===!0){s=t.a
u=(s&&C.b).T(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.a1(s,b)
if(s===!0){s=t.b
u=(s&&C.b).T(s,b)||u}return u},
B:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.b.F(P.k4(u,!0,{func:1,ret:-1,args:[D.W]}),new D.eU(q))
u=r.b
if(u!=null){r.b=H.d([],[{func:1,ret:-1,args:[D.W]}])
C.b.F(u,new D.eV(q))}return!0},
fR:function(){return this.B(null)},
al:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.B(u)}}}}
D.eU.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eV.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.W.prototype={}
D.aR.prototype={}
D.aS.prototype={}
D.w.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.cq.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cq))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.f(this.a)}}
X.a4.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.a4))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.f(this.a)}}
X.bj.prototype={}
X.cF.prototype={
gaJ:function(){var u=this.y
return u==null?this.y=D.D():u},
a6:function(a){this.l(0,new X.a4(a,new X.aX(!1,!1,!1)))},
ce:function(a){},
dS:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(C.b.a1(this.a,s))return!1}return!0},
dQ:function(a,b){var u=new D.aR()
u.b=!0
this.ce(u)},
dU:function(a,b){var u=new D.aS()
u.b=!0
this.ce(u)},
bj:function(a){var u,t=this
if(!t.r&&a instanceof X.bj){u=a.c
if(C.b.a1(t.a,u)){t.r=!0
u=t.y
if(u!=null)u.B(a)}}},
bv:function(a){var u
if(this.r&&a instanceof X.bj){u=a.c
if(C.b.a1(this.a,u))this.r=!1}},
ai:function(a){var u,t,s=this
if(s.f!=null)return!1
s.f=a
u=a.b
t=u.b
if(t==null)t=u.b=D.D()
t.l(0,s.gbi())
t=u.a
u=t==null?u.a=D.D():t
u.l(0,s.gbu())
return!0},
$ah:function(){return[X.a4]},
$aat:function(){return[X.a4]}}
X.f8.prototype={
hl:function(a){var u,t
this.d.l(0,a.a)
u=this.a
if(u==null)return!1
t=new X.bj(a)
t.b=!0
return u.B(t)},
hh:function(a){var u,t
this.d.T(0,a.a)
u=this.b
if(u==null)return!1
t=new X.bj(a)
t.b=!0
return u.B(t)}}
X.cI.prototype={}
X.fg.prototype={
aP:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.m()
u=b.b
t=q.ch
if(typeof u!=="number")return u.m()
s=new V.aa(o.a+n*m,o.b+u*t)
t=q.a.gb5()
r=new X.aY(a,V.b1(),q.x,t,s)
r.b=!0
q.z=new P.a3(p,!1)
q.x=s
return r},
bY:function(a,b){this.r=a.a
return!1},
aW:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dC()
if(typeof u!=="number")return u.ab()
this.r=(u&~t)>>>0
return!1},
aV:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.aP(a,b))
return!0},
hm:function(a){return!1},
eN:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cI(c,r.a.gb5(),b)
s.b=!0
t.B(s)
r.y=new P.a3(u,!1)
r.x=V.b1()}}
X.aX.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aX))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aY.prototype={}
X.fF.prototype={
bo:function(a,b,c){var u=this,t=new P.a3(Date.now(),!1),s=u.a.gb5(),r=new X.aY(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
bY:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.B(this.bo(a,b,!0))
return!0},
aW:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dC()
if(typeof t!=="number")return t.ab()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.B(u.bo(a,b,!0))
return!0},
aV:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.bo(a,b,!1))
return!0},
hn:function(a,b){return!1}}
X.fS.prototype={}
X.d8.prototype={}
X.hv.prototype={
aP:function(a,b){var u=this,t=new P.a3(Date.now(),!1),s=a.length>0?a[0]:V.b1(),r=u.a.gb5(),q=new X.d8(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hk:function(a){var u=this.b
if(u==null)return!1
u.B(this.aP(a,!0))
return!0},
hi:function(a){var u=this.c
if(u==null)return!1
u.B(this.aP(a,!0))
return!0},
hj:function(a){var u=this.d
if(u==null)return!1
u.B(this.aP(a,!1))
return!0}}
X.de.prototype={
gb5:function(){var u=this.a,t=C.i.gcM(u).c
t.toString
u=C.i.gcM(u).d
u.toString
return V.ki(0,0,t,u)},
cn:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.a4(u,new X.aX(t,a.altKey,a.shiftKey))},
aF:function(a){a.shiftKey},
bA:function(a){a.shiftKey},
ap:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.A()
u=t.top
if(typeof r!=="number")return r.A()
return new V.aa(s-q,r-u)},
aQ:function(a){return new V.M(a.movementX,a.movementY)},
bx:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.aa])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=C.d.ae(r.pageX)
C.d.ae(r.pageY)
p=o.left
C.d.ae(r.pageX)
n.push(new V.aa(q-p,C.d.ae(r.pageY)-o.top))}return n},
an:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cq(u,new X.aX(t,a.altKey,a.shiftKey))},
bq:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.A()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.A()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eJ:function(a){this.f=!0},
ex:function(a){this.f=!1},
eD:function(a){if(this.f&&this.bq(a))a.preventDefault()},
bv:function(a){var u
if(!this.f)return
u=this.cn(a)
if(this.b.hl(u))a.preventDefault()},
bj:function(a){var u
if(!this.f)return
u=this.cn(a)
if(this.b.hh(u))a.preventDefault()},
eP:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aF(a)
if(r.x){u=r.an(a)
t=r.aQ(a)
if(r.d.bY(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.an(a)
s=r.ap(a)
if(r.c.bY(u,s))a.preventDefault()},
eT:function(a){var u,t,s,r=this
r.aF(a)
u=r.an(a)
if(r.x){t=r.aQ(a)
if(r.d.aW(u,t))a.preventDefault()
return}if(r.r)return
s=r.ap(a)
if(r.c.aW(u,s))a.preventDefault()},
eH:function(a){var u,t,s,r=this
if(!r.bq(a)){r.aF(a)
u=r.an(a)
if(r.x){t=r.aQ(a)
if(r.d.aW(u,t))a.preventDefault()
return}if(r.r)return
s=r.ap(a)
if(r.c.aW(u,s))a.preventDefault()}},
eR:function(a){var u,t,s,r=this
r.aF(a)
u=r.an(a)
if(r.x){t=r.aQ(a)
if(r.d.aV(u,t))a.preventDefault()
return}if(r.r)return
s=r.ap(a)
if(r.c.aV(u,s))a.preventDefault()},
eF:function(a){var u,t,s,r=this
if(!r.bq(a)){r.aF(a)
u=r.an(a)
if(r.x){t=r.aQ(a)
if(r.d.aV(u,t))a.preventDefault()
return}if(r.r)return
s=r.ap(a)
if(r.c.aV(u,s))a.preventDefault()}},
eV:function(a){var u,t,s=this
s.aF(a)
u=new V.M((a&&C.w).gfK(a),C.w.gfL(a)).w(0,180)
if(s.x){if(s.d.hm(u))a.preventDefault()
return}if(s.r)return
t=s.ap(a)
if(s.c.hn(u,t))a.preventDefault()},
eX:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.an(s.y)
t=s.ap(s.y)
s.d.eN(u,t,r)}},
f8:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bA(a)
u=t.bx(a)
if(t.e.hk(u))a.preventDefault()},
f4:function(a){var u
this.bA(a)
u=this.bx(a)
if(this.e.hi(u))a.preventDefault()},
f6:function(a){var u
this.bA(a)
u=this.bx(a)
if(this.e.hj(u))a.preventDefault()}}
D.be.prototype={
am:function(a){var u=this.r
if(u!=null)u.B(a)},
dW:function(){return this.am(null)},
$ia5:1}
D.a5.prototype={}
D.cG.prototype={
am:function(a){var u=this.x
if(u!=null)u.B(a)},
cv:function(a){var u=this.y
if(u!=null)u.B(a)},
eM:function(){return this.cv(null)},
eZ:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(s==null||this.e6(s))return!1}return!0},
eq:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcu(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q instanceof D.be)this.e.push(q)
p=q.r
if(p==null){p=new D.bg()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.d([],s):o).push(t)}u=new D.aR()
u.b=!0
this.am(u)},
f2:function(a,b){var u,t,s
for(u=b.gS(b),t=this.gcu();u.v();){s=u.gJ(u)
C.b.T(this.e,s)
s.gt().T(0,t)}u=new D.aS()
u.b=!0
this.am(u)},
e6:function(a){var u=C.b.a1(this.e,a)
return u},
$ah:function(){return[D.a5]},
$aat:function(){return[D.a5]}}
D.fR.prototype={$ia5:1}
D.hc.prototype={$ia5:1}
V.K.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.aP.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aP))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+", "+V.A(u.d,3,0)+"]"}}
V.eT.prototype={}
V.ay.prototype={
a9:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.I])
return t},
b8:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=i.e,f=i.y
if(typeof f!=="number")return H.l(f)
u=g*f
t=i.f
s=i.x
if(typeof s!=="number")return H.l(s)
r=i.d
q=i.b
p=q*f
o=i.c
n=s*o
m=i.r
l=q*t-g*o
if(typeof m!=="number")return m.m()
k=h*(u-t*s)-r*(p-n)+m*l
if(Math.abs(k-0)<$.x().a)return V.lI()
j=1/k
return new V.ay((u-s*t)*j,(n-p)*j,l*j,(m*t-r*f)*j,(h*f-m*o)*j,(r*o-h*t)*j,(r*s-m*g)*j,(m*q-h*s)*j,(h*g-r*q)*j)},
aw:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.l(o)
u=r.r
if(typeof u!=="number")return u.m()
t=r.x
if(typeof t!=="number")return t.m()
s=r.y
if(typeof s!=="number")return s.m()
return new V.z(r.a*q+r.b*p+r.c*o,r.d*q+r.e*p+r.f*o,u*q+t*p+s*o)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.ay))return!1
u=b.a
t=$.x()
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
if(typeof u!=="number")return u.A()
if(typeof r!=="number")return H.l(r)
if(!(Math.abs(u-r)<s))return!1
u=b.x
t=q.x
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.l(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=q.y
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.l(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){var u,t,s,r,q=this,p=[P.I],o=V.by(H.d([q.a,q.d,q.r],p),3,0),n=V.by(H.d([q.b,q.e,q.x],p),3,0),m=V.by(H.d([q.c,q.f,q.y],p),3,0)
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
a9:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.I])
return t},
b8:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a,c=e.f,b=e.b,a=e.e,a0=d*c-b*a,a1=e.r,a2=e.c,a3=d*a1-a2*a,a4=e.x,a5=e.d,a6=d*a4-a5*a,a7=b*a1-a2*c,a8=b*a4-a5*c,a9=a2*a4-a5*a1,b0=e.y,b1=e.cy
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
if(Math.abs(i-0)<$.x().a)return V.cL()
h=1/i
g=-a
f=-t
return V.am((c*j-a1*k+a4*l)*h,(-b*j+a2*k-a5*l)*h,(b1*a9-r*a8+o*a7)*h,(-u*a9+q*a8-n*a7)*h,(g*j+a1*m-a4*p)*h,(d*j-a2*m+a5*p)*h,(f*a9+r*a6-o*a3)*h,(b0*a9-q*a6+n*a3)*h,(a*k-c*m+a4*s)*h,(-d*k+b*m-a5*s)*h,(t*a8-b1*a6+o*a0)*h,(-b0*a8+u*a6-n*a0)*h,(g*l+c*p-a1*s)*h,(d*l-b*p+a2*s)*h,(f*a7+b1*a3-r*a0)*h,(b0*a7-u*a3+q*a0)*h)},
m:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.a,a7=b3.a,a8=a5.b,a9=b3.e,b0=a5.c,b1=b3.y
if(typeof b1!=="number")return H.l(b1)
u=a5.d
t=b3.cx
s=b3.b
r=b3.f
q=b3.z
if(typeof q!=="number")return H.l(q)
p=b3.cy
o=b3.c
n=b3.r
m=b3.Q
if(typeof m!=="number")return H.l(m)
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
return V.am(a6*a7+a8*a9+b0*b1+u*t,a6*s+a8*r+b0*q+u*p,a6*o+a8*n+b0*m+u*l,a6*k+a8*j+b0*i+u*h,g*a7+f*a9+e*b1+d*t,g*s+f*r+e*q+d*p,g*o+f*n+e*m+d*l,g*k+f*j+e*i+d*h,c*a7+b*a9+a*b1+a0*t,c*s+b*r+a*q+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,a1*a7+a2*a9+a3*b1+a4*t,a1*s+a2*r+a3*q+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h)},
aw:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.l(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.z(r.a*q+r.b*p+r.c*o,r.e*q+r.f*p+r.r*o,u*q+t*p+s*o)},
c2:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.l(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.a6(r.a*q+r.b*p+r.c*o+r.d,r.e*q+r.f*p+r.r*o+r.x,u*q+t*p+s*o+r.ch)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.al))return!1
u=b.a
t=$.x()
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
if(typeof u!=="number")return u.A()
if(typeof r!=="number")return H.l(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=q.z
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.l(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=q.Q
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.l(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-q.ch)<s))return!1
if(!(Math.abs(b.cx-q.cx)<s))return!1
if(!(Math.abs(b.cy-q.cy)<s))return!1
if(!(Math.abs(b.db-q.db)<s))return!1
if(!(Math.abs(b.dx-q.dx)<s))return!1
return!0},
h:function(a){return this.L()},
C:function(a){var u,t,s,r,q,p=this,o=[P.I],n=V.by(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.by(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.by(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.by(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
V.aa.prototype={
A:function(a,b){return new V.aa(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.a6.prototype={
A:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.l(t)
return new V.a6(this.a-b.a,this.b-b.b,u-t)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.x()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.A()
if(typeof r!=="number")return H.l(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.bU.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bU))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+", "+V.A(u.d,3,0)+"]"}}
V.cU.prototype={
gak:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cU))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+", "+V.A(u.d,3,0)+"]"}}
V.M.prototype={
bU:function(a){return Math.sqrt(this.K(this))},
K:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.l(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.l(t)
return s*r+u*t},
m:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.m()
u=this.b
if(typeof u!=="number")return u.m()
return new V.M(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.x().a){u=$.kt
return u==null?$.kt=new V.M(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.M(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=this.a
s=$.x()
s.toString
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.l(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.l(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.z.prototype={
bU:function(a){return Math.sqrt(this.K(this))},
K:function(a){var u=this.c,t=a.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.l(t)
return this.a*a.a+this.b*a.b+u*t},
bV:function(a,b){var u=this.a,t=this.b,s=this.c,r=a.c
if(typeof r!=="number")return r.A()
if(typeof s!=="number")return H.l(s)
return new V.z(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
aS:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof p!=="number")return H.l(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.m()
s=a.a
r=this.a
return new V.z(q*p-u*t,u*s-r*p,r*t-q*s)},
u:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.l(t)
return new V.z(this.a+b.a,this.b+b.b,u+t)},
O:function(a){var u=this.c
if(typeof u!=="number")return u.O()
return new V.z(-this.a,-this.b,-u)},
w:function(a,b){var u
if(Math.abs(b-0)<$.x().a)return V.dh()
u=this.c
if(typeof u!=="number")return u.w()
return new V.z(this.a/b,this.b/b,u/b)},
d9:function(){var u,t=$.x(),s=t.a
if(!(Math.abs(0-this.a)<s))return!1
if(!(Math.abs(0-this.b)<s))return!1
u=this.c
t.toString
if(typeof u!=="number")return H.l(u)
if(!(Math.abs(0-u)<s))return!1
return!0},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.z))return!1
u=b.a
t=$.x()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.A()
if(typeof r!=="number")return H.l(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
U.ez.prototype={
bk:function(a){var u=this.a,t=this.c,s=this.b
if(u)return V.je(a,t,s)
else{if(a<t)u=t
else u=a>s?s:a
return u}},
gt:function(){var u=this.y
return u==null?this.y=D.D():u},
I:function(a){var u=this.y
if(u!=null)u.B(a)},
sc4:function(a,b){var u=this.a
if(u!==b){this.a=b
u=new D.w("wrap",u,b)
u.b=!0
this.I(u)}},
sbW:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.x().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bk(u)}s=new D.w("maximumLocation",s,t.b)
s.b=!0
t.I(s)}},
sbX:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.x().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bk(u)}s=new D.w("minimumLocation",s,t.c)
s.b=!0
t.I(s)}},
sY:function(a,b){var u,t=this
b=t.bk(b==null?0:b)
u=t.d
if(!(Math.abs(u-b)<$.x().a)){t.d=b
u=new D.w("location",u,b)
u.b=!0
t.I(u)}},
saU:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.x().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.w("maximumVelocity",r,a)
r.b=!0
s.I(r)}},
sR:function(a){var u=this,t=a==null?0:a,s=u.e
a=-s
if(!(t<a))a=t>s?s:t
t=u.f
if(!(Math.abs(t-a)<$.x().a)){u.f=a
t=new D.w("velocity",t,a)
t.b=!0
u.I(t)}},
sar:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.x().a)){this.x=a
u=new D.w("dampening",u,a)
u.b=!0
this.I(u)}},
aa:function(a,b){var u,t,s,r=this,q=r.f,p=$.x().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sY(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.x().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.bD.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.D():u},
sW:function(a,b){var u,t,s,r=this
if(!J.E(r.a,b)){u=r.a
r.a=b
t=new D.w("matrix",u,b)
t.b=!0
s=r.b
if(s!=null)s.B(t)}},
ax:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bD))return!1
return J.E(this.a,b.a)},
h:function(a){return"Constant: "+this.a.C("          ")}}
U.bG.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.D():u},
I:function(a){var u=this.e
if(u!=null)u.B(a)},
a4:function(){return this.I(null)},
eo:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaA(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.gt()
o=p.a;(o==null?p.a=H.d([],s):o).push(t)}}u=new D.aR()
u.b=!0
this.I(u)},
f0:function(a,b){var u,t
for(u=b.gS(b),t=this.gaA();u.v();)u.gJ(u).gt().T(0,t)
u=new D.aS()
u.b=!0
this.I(u)},
ax:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.M()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a_(r,r.length),u=null;r.v();){q=r.d
if(q!=null){t=q.ax(0,b,c)
if(t!=null)u=u==null?t:t.m(0,u)}}s.f=u==null?V.cL():u
r=s.e
if(r!=null)r.al(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bG))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.E(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$ah:function(){return[U.a0]},
$aat:function(){return[U.a0]},
$ia0:1}
U.a0.prototype={}
U.cW.prototype={
gt:function(){var u=this.y
return u==null?this.y=D.D():u},
I:function(a){var u=this.y
if(u!=null)u.B(a)},
sdA:function(a){var u
a=V.je(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.x().a)){this.a=a
u=new D.w("yaw",u,a)
u.b=!0
this.I(u)}},
sdk:function(a,b){var u
b=V.je(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.x().a)){this.b=b
u=new D.w("pitch",u,b)
u.b=!0
this.I(u)}},
sds:function(a){var u
a=V.je(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.x().a)){this.c=a
u=new D.w("roll",u,a)
u.b=!0
this.I(u)}},
ax:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.sdA(s.a+s.d*b.y)
s.sdk(0,s.b+s.e*b.y)
s.sds(s.c+s.f*b.y)
r=s.c
u=Math.cos(r)
t=Math.sin(r)
s.x=V.am(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1).m(0,V.k8(s.b)).m(0,V.jv(s.a))
r=s.y
if(r!=null)r.al(0)}return s.x},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.cW))return!1
u=r.a
t=b.a
s=$.x().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
h:function(a){var u=this
return"Rotater: ["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+"], ["+V.A(u.d,3,0)+", "+V.A(u.e,3,0)+", "+V.A(u.f,3,0)+"]"}}
U.df.prototype={
gt:function(){var u=this.fx
return u==null?this.fx=D.D():u},
I:function(a){var u=this.fx
if(u!=null)u.B(a)},
a4:function(){return this.I(null)},
ai:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.D():t
u.l(0,s.geh())
u=s.a.c
t=u.d
u=t==null?u.d=D.D():t
u.l(0,s.gej())
u=s.a.c
t=u.c
u=t==null?u.c=D.D():t
u.l(0,s.gel())
u=s.a.d
t=u.f
u=t==null?u.f=D.D():t
u.l(0,s.ged())
u=s.a.d
t=u.d
u=t==null?u.d=D.D():t
u.l(0,s.gef())
u=s.a.e
t=u.b
u=t==null?u.b=D.D():t
u.l(0,s.gfp())
u=s.a.e
t=u.d
u=t==null?u.d=D.D():t
u.l(0,s.gfn())
u=s.a.e
t=u.c
u=t==null?u.c=D.D():t
u.l(0,s.gfl())
return!0},
ah:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.O()
u=-u}if(this.r){if(typeof t!=="number")return t.O()
t=-t}return new V.M(u,t)},
ei:function(a){var u=this
H.m(a,"$iaY")
if(!J.E(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
ek:function(a){var u,t,s,r,q,p,o,n=this
H.m(a,"$iaY")
if(!n.cx)return
if(n.ch){u=a.d.A(0,a.y)
u=new V.M(u.a,u.b)
u=u.K(u)
t=n.Q
if(typeof t!=="number")return H.l(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.A(0,a.y)
u=n.ah(new V.M(t.a,t.b).m(0,2).w(0,u.gak()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.l(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.l(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.A(0,a.y)
r=n.ah(new V.M(s.a,s.b).m(0,2).w(0,u.gak()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.l(p)
o=n.cy
if(typeof o!=="number")return H.l(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.l(q)
s=n.db
if(typeof s!=="number")return H.l(s)
o.sY(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.A(0,a.z)
n.dx=n.ah(new V.M(t.a,t.b).m(0,2).w(0,u.gak()))}n.a4()},
em:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.K(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.l(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.l(u)
s.sR(-t*10*u)
r.a4()}},
ee:function(a){var u=this
if(H.m(a,"$icI").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eg:function(a){var u,t,s,r,q,p,o,n=this
H.m(a,"$iaY")
if(!J.E(n.d,a.x.b))return
u=a.c
t=a.d
s=t.A(0,a.y)
r=n.ah(new V.M(s.a,s.b).m(0,2).w(0,u.gak()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.l(p)
o=n.cy
if(typeof o!=="number")return H.l(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.l(q)
s=n.db
if(typeof s!=="number")return H.l(s)
o.sY(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.A(0,a.z)
n.dx=n.ah(new V.M(t.a,t.b).m(0,2).w(0,u.gak()))
n.a4()},
fq:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fo:function(a){var u,t,s,r,q,p,o,n=this
H.m(a,"$id8")
if(!n.cx)return
if(n.ch){u=a.d.A(0,a.y)
u=new V.M(u.a,u.b)
u=u.K(u)
t=n.Q
if(typeof t!=="number")return H.l(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.A(0,a.y)
u=n.ah(new V.M(t.a,t.b).m(0,2).w(0,u.gak()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.l(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.l(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.A(0,a.y)
r=n.ah(new V.M(s.a,s.b).m(0,2).w(0,u.gak()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.l(p)
o=n.cy
if(typeof o!=="number")return H.l(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.l(q)
s=n.db
if(typeof s!=="number")return H.l(s)
o.sY(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.A(0,a.z)
n.dx=n.ah(new V.M(t.a,t.b).m(0,2).w(0,u.gak()))}n.a4()},
fm:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.K(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.l(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.l(u)
s.sR(-t*10*u)
r.a4()}},
ax:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.M()
if(s<r){t.dy=r
u=b.y
t.c.aa(0,u)
t.b.aa(0,u)
t.fr=V.jv(t.b.d).m(0,V.k8(t.c.d))}return t.fr},
$ia0:1}
U.dg.prototype={
gt:function(){var u=this.dx
return u==null?this.dx=D.D():u},
I:function(a){var u=this.dx
if(u!=null)u.B(a)},
a4:function(){return this.I(null)},
gY:function(a){return new V.a6(this.r.d,this.x.d,this.y.d)},
eL:function(a){this.I(a)},
bB:function(a,b,c,d,e){if(a.r){if(typeof e!=="number")return e.u()
e+=d}else if(b.r){if(typeof e!=="number")return e.A()
e-=d}else{if(typeof e!=="number")return e.U()
e=e>0?e-Math.min(e,c):e+Math.min(-e,c)}return e},
ax:function(a,b,c){var u,t,s,r,q=this,p=q.cy,o=b.e
if(typeof p!=="number")return p.M()
if(p<o){q.cy=o
q.gY(q)
u=b.y
if(u>0.1)u=0.1
p=q.ch
if(typeof p!=="number")return p.m()
t=p*u
p=q.cx
if(typeof p!=="number")return p.m()
s=p*u
r=new V.z(q.r.f,q.x.f,q.y.f)
p=q.Q
if(p!=null)r=p.aw(r)
r=new V.z(q.bB(q.a,q.b,t,s,r.a),q.bB(q.c,q.d,t,s,r.b),q.bB(q.e,q.f,t,s,r.c))
p=q.z
if(p!=null)r=p.aw(r)
q.r.sR(r.a)
q.x.sR(r.b)
q.y.sR(r.c)
q.r.aa(0,u)
q.x.aa(0,u)
q.y.aa(0,u)
q.db=V.k9(q.r.d,-q.x.d,q.y.d)}return q.db},
$ia0:1}
M.cw.prototype={
aC:function(a){var u=this.y
if(u!=null)u.B(a)},
dX:function(){return this.aC(null)},
ez:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaB(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bg()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.d([],s):o).push(t)}}u=new D.aR()
u.b=!0
this.aC(u)},
eB:function(a,b){var u,t
for(u=b.gS(b),t=this.gaB();u.v();)u.gJ(u).gt().T(0,t)
u=new D.aS()
u.b=!0
this.aC(u)},
gt:function(){var u=this.y
return u==null?this.y=D.D():u},
aM:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.dn(f.d)
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
if(typeof s!=="number")return H.l(s)
o=C.d.ae(p*s)
p=q.b
if(typeof r!=="number")return H.l(r)
n=C.d.ae(p*r)
p=C.d.ae(q.c*s)
a.c=p
q=C.d.ae(q.d*r)
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
i=V.am(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dm(i)
t=$.kc
if(t==null){t=V.ke()
q=V.jC()
p=$.ku
t=V.k7(t,q,p==null?$.ku=new V.z(0,0,-1):p)
$.kc=t
h=t}else h=t
t=u.b
if(t!=null){g=t.ax(0,a,u)
if(g!=null)h=g.m(0,h)}a.db.dm(h)
for(u=f.e.a,u=new J.a_(u,u.length);u.v();)u.d.aa(0,a)
for(u=f.e.a,u=new J.a_(u,u.length);u.v();)u.d.aM(a)
f.b.toString
a.cy.bZ()
a.db.bZ()
f.c.toString
a.dl()}}
A.cn.prototype={}
A.ek.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fS:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
fM:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.V.prototype={
gaf:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
h:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
n:function(a,b){if(b==null)return!1
if(!(b instanceof A.V))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.fm.prototype={
dK:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
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
A.mR(c3,u)
A.mT(c3,u)
A.mS(c3,u)
A.mV(c3,u)
A.mW(c3,u)
A.mU(c3,u)
A.mX(c3,u)
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
m=A.mQ(b8.z)
b8.c=n
b8.d=m
b8.e=b8.co(n,35633)
b8.f=b8.co(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.r(P.t("Failed to link shader: "+H.f(l)))}b8.fh()
b8.fj()
b8.Q=b8.x.i(0,"posAttr")
b8.cx=b8.x.i(0,"normAttr")
b8.ch=b8.x.i(0,"binmAttr")
b8.cy=b8.x.i(0,"txt2DAttr")
b8.db=b8.x.i(0,"txtCubeAttr")
b8.dx=b8.x.i(0,"bendAttr")
if(c3.dx)b8.id=H.m(b8.y.H(0,"invViewMat"),"$iab")
if(t)b8.dy=H.m(b8.y.H(0,"objMat"),"$iab")
if(r)b8.fr=H.m(b8.y.H(0,"viewObjMat"),"$iab")
b8.fy=H.m(b8.y.H(0,"projViewObjMat"),"$iab")
if(c3.ry)b8.k1=H.m(b8.y.H(0,"txt2DMat"),"$ic_")
if(c3.x1)b8.k2=H.m(b8.y.H(0,"txtCubeMat"),"$iab")
if(c3.x2)b8.k3=H.m(b8.y.H(0,"colorMat"),"$iab")
b8.r1=H.d([],[A.ab])
t=c3.y2
if(t>0){b8.k4=b8.y.H(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.i(0,q)
if(j==null)H.r(P.t(c0+q+c1))
s.push(H.m(j,"$iab"))}}t=c3.a
if(t.a)b8.r2=H.m(b8.y.H(0,"emissionClr"),"$iH")
if(t.b)b8.rx=H.m(b8.y.H(0,"emissionTxt"),"$iY")
t=c3.b
if(t.a)b8.x1=H.m(b8.y.H(0,"ambientClr"),"$iH")
if(t.b)b8.x2=H.m(b8.y.H(0,"ambientTxt"),"$iY")
t=c3.c
if(t.a)b8.y2=H.m(b8.y.H(0,"diffuseClr"),"$iH")
if(t.b)b8.as=H.m(b8.y.H(0,"diffuseTxt"),"$iY")
t=c3.d
if(t.a)b8.cP=H.m(b8.y.H(0,"invDiffuseClr"),"$iH")
if(t.b)b8.cQ=H.m(b8.y.H(0,"invDiffuseTxt"),"$iY")
t=c3.e
s=t.a
if(s||t.b||!1){b8.cT=H.m(b8.y.H(0,"shininess"),"$iU")
if(s)b8.cR=H.m(b8.y.H(0,"specularClr"),"$iH")
if(t.b)b8.cS=H.m(b8.y.H(0,"specularTxt"),"$iY")}if(c3.f.b)b8.cU=H.m(b8.y.H(0,"bumpTxt"),"$iY")
if(c3.cy){b8.cV=H.m(b8.y.H(0,"envSampler"),"$ibp")
t=c3.r
if(t.a)b8.cW=H.m(b8.y.H(0,"reflectClr"),"$iH")
if(t.b)b8.cX=H.m(b8.y.H(0,"reflectTxt"),"$iY")
t=c3.x
s=t.a
if(s||t.b||!1){b8.cY=H.m(b8.y.H(0,"refraction"),"$iU")
if(s)b8.cZ=H.m(b8.y.H(0,"refractClr"),"$iH")
if(t.b)b8.d_=H.m(b8.y.H(0,"refractTxt"),"$iY")}}t=c3.y
if(t.a)b8.d0=H.m(b8.y.H(0,"alpha"),"$iU")
if(t.b)b8.d1=H.m(b8.y.H(0,"alphaTxt"),"$iY")
t=P.u
s=[t,A.db]
b8.bK=new H.J(s)
b8.bL=new H.J([t,[P.n,A.bZ]])
b8.bM=new H.J(s)
b8.bN=new H.J([t,[P.n,A.c0]])
b8.bO=new H.J(s)
b8.bP=new H.J([t,[P.n,A.c1]])
if(c3.id){for(t=c3.z,s=t.length,r=[A.bZ],i=0;i<t.length;t.length===s||(0,H.o)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.f(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ab()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.i(0,d)
if(j==null)H.r(P.t(c0+d+c1))
H.m(j,"$iH")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.i(0,d)
if(c==null)H.r(P.t(c0+d+c1))
H.m(c,"$iH")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.i(0,d)
if(b==null)H.r(P.t(c0+d+c1))
H.m(b,"$iH")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.i(0,d)
if(j==null)H.r(P.t(c0+d+c1))
H.m(j,"$iH")
o=b8.y
d=f+"s["+k+"].color"
c=o.i(0,d)
if(c==null)H.r(P.t(c0+d+c1))
H.m(c,"$iH")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.i(0,o)
if(b==null)H.r(P.t(c0+o+c1))
H.m(b,"$iY")
a2=b}else a2=b9
e.push(new A.bZ(a1,a0,a,j,c,a2))}b8.bL.k(0,g,e)
q=b8.bK
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.r(P.t(c0+o+c1))
q.k(0,g,j)}for(t=c3.Q,s=t.length,r=[A.c0],i=0;i<t.length;t.length===s||(0,H.o)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.f(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.i(0,o)
if(j==null)H.r(P.t(c0+o+c1))
H.m(j,"$iH")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.i(0,o)
if(c==null)H.r(P.t(c0+o+c1))
H.m(c,"$iH")
p=b8.y
o=f+"s["+k+"].color"
b=p.i(0,o)
if(b==null)H.r(P.t(c0+o+c1))
H.m(b,"$iH")
if(typeof g!=="number")return g.ab()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.i(0,o)
if(a3==null)H.r(P.t(c0+o+c1))
H.m(a3,"$ic_")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.i(0,o)
if(a3==null)H.r(P.t(c0+o+c1))
H.m(a3,"$ibp")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.i(0,o)
if(a3==null)H.r(P.t(c0+o+c1))
H.m(a3,"$ibp")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.i(0,o)
if(a5==null)H.r(P.t(c0+o+c1))
H.m(a5,"$ibY")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.i(0,o)
if(a3==null)H.r(P.t(c0+o+c1))
H.m(a3,"$iU")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.i(0,o)
if(a5==null)H.r(P.t(c0+o+c1))
H.m(a5,"$iU")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.i(0,o)
if(a8==null)H.r(P.t(c0+o+c1))
H.m(a8,"$iU")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}e.push(new A.c0(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.bN.k(0,g,e)
q=b8.bM
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.r(P.t(c0+o+c1))
q.k(0,g,j)}for(t=c3.ch,s=t.length,r=[A.c1],i=0;i<t.length;t.length===s||(0,H.o)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.f(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.i(0,o)
if(j==null)H.r(P.t(c0+o+c1))
H.m(j,"$iH")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.i(0,o)
if(c==null)H.r(P.t(c0+o+c1))
H.m(c,"$iH")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.i(0,o)
if(b==null)H.r(P.t(c0+o+c1))
H.m(b,"$iH")
p=b8.y
o=f+"s["+k+"].color"
a3=p.i(0,o)
if(a3==null)H.r(P.t(c0+o+c1))
H.m(a3,"$iH")
if(typeof g!=="number")return g.ab()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.i(0,o)
if(a5==null)H.r(P.t(c0+o+c1))
H.m(a5,"$iH")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.i(0,o)
if(a8==null)H.r(P.t(c0+o+c1))
H.m(a8,"$iH")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.i(0,o)
if(b2==null)H.r(P.t(c0+o+c1))
H.m(b2,"$iU")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.i(0,o)
if(b3==null)H.r(P.t(c0+o+c1))
H.m(b3,"$iU")
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
if(a5==null)H.r(P.t(c0+d+c1))
H.m(a5,"$ibY")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.i(0,d)
if(a5==null)H.r(P.t(c0+d+c1))
H.m(a5,"$iU")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.i(0,d)
if(a8==null)H.r(P.t(c0+d+c1))
H.m(a8,"$iU")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.i(0,d)
if(a5==null)H.r(P.t(c0+d+c1))
H.m(a5,"$iU")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.i(0,d)
if(a8==null)H.r(P.t(c0+d+c1))
H.m(a8,"$iU")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.i(0,d)
if(b2==null)H.r(P.t(c0+d+c1))
H.m(b2,"$iU")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.i(0,d)
if(a5==null)H.r(P.t(c0+d+c1))
H.m(a5,"$iY")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.i(0,o)
if(a5==null)H.r(P.t(c0+o+c1))
H.m(a5,"$iY")
a6=a5}else a6=b9
e.push(new A.c1(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.bP.k(0,g,e)
q=b8.bO
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.r(P.t(c0+o+c1))
q.k(0,g,j)}}},
ac:function(a,b){if(b!=null&&b.d)a.dD(b)},
fg:function(a,b){}}
A.ct.prototype={
h:function(a){return"dirLight"+H.f(this.a)}}
A.cS.prototype={
h:function(a){return"pointLight"+H.f(this.a)}}
A.cZ.prototype={
h:function(a){return"spotLight"+H.f(this.a)}}
A.fp.prototype={
h:function(a){return this.as}}
A.bZ.prototype={}
A.c0.prototype={}
A.c1.prototype={}
A.cX.prototype={
dN:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
co:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.t("Error compiling shader '"+H.f(s)+"': "+H.f(u)))}return s},
fh:function(){var u,t,s,r=this,q=H.d([],[A.cn]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.l(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cn(p,t.name,s))}r.x=new A.ek(q)},
fj:function(){var u,t,s,r=this,q=H.d([],[A.da]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.l(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fJ(t.type,t.size,t.name,s))}r.y=new A.hG(q)},
aE:function(a,b,c){var u=this.a
if(a===1)return new A.db(u,b,c)
else return A.jy(u,this.r,b,a,c)},
e7:function(a,b,c){var u=this.a
if(a===1)return new A.Y(u,b,c)
else return A.jy(u,this.r,b,a,c)},
e8:function(a,b,c){var u=this.a
if(a===1)return new A.bp(u,b,c)
else return A.jy(u,this.r,b,a,c)},
b4:function(a,b){return new P.ds(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
fJ:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aE(b,c,d)
case 5121:return u.aE(b,c,d)
case 5122:return u.aE(b,c,d)
case 5123:return u.aE(b,c,d)
case 5124:return u.aE(b,c,d)
case 5125:return u.aE(b,c,d)
case 5126:return new A.U(u.a,c,d)
case 35664:return new A.hC(u.a,c,d)
case 35665:return new A.H(u.a,c,d)
case 35666:return new A.bY(u.a,c,d)
case 35667:return new A.hD(u.a,c,d)
case 35668:return new A.hE(u.a,c,d)
case 35669:return new A.hF(u.a,c,d)
case 35674:return new A.hH(u.a,c,d)
case 35675:return new A.c_(u.a,c,d)
case 35676:return new A.ab(u.a,c,d)
case 35678:return u.e7(b,c,d)
case 35680:return u.e8(b,c,d)
case 35670:throw H.c(u.b4("BOOL",c))
case 35671:throw H.c(u.b4("BOOL_VEC2",c))
case 35672:throw H.c(u.b4("BOOL_VEC3",c))
case 35673:throw H.c(u.b4("BOOL_VEC4",c))
default:throw H.c(P.t("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.da.prototype={}
A.hG.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
H:function(a,b){var u=this.i(0,b)
if(u==null)throw H.c(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.L()},
L:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.db.prototype={
h:function(a){return"Uniform1i: "+H.f(this.c)}}
A.hD.prototype={
h:function(a){return"Uniform2i: "+H.f(this.c)}}
A.hE.prototype={
h:function(a){return"Uniform3i: "+H.f(this.c)}}
A.hF.prototype={
h:function(a){return"Uniform4i: "+H.f(this.c)}}
A.hB.prototype={
h:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.U.prototype={
h:function(a){return"Uniform1f: "+H.f(this.c)}}
A.hC.prototype={
h:function(a){return"Uniform2f: "+H.f(this.c)}}
A.H.prototype={
h:function(a){return"Uniform3f: "+H.f(this.c)}}
A.bY.prototype={
h:function(a){return"Uniform4f: "+H.f(this.c)}}
A.hH.prototype={
h:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.c_.prototype={
ag:function(a){var u=new Float32Array(H.bt(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.f(this.c)}}
A.ab.prototype={
ag:function(a){var u=new Float32Array(H.bt(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.f(this.c)}}
A.Y.prototype={
dD:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.bp.prototype={
h:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.iN.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bV(s.b,b).bV(s.d.bV(s.c,b),c)
a.sY(0,new V.a6(r.a,r.b,r.c))
a.sdu(r.w(0,Math.sqrt(r.K(r))))
s=1-b
u=1-c
a.scJ(new V.bU(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))}}
F.j0.prototype={
$2:function(a,b){return 0}}
F.j1.prototype={
$3:function(a,b,c){var u,t,s=b*2-1,r=c*2-1
a.sY(0,new V.a6(s,r,this.a.a.$2(b,c)))
u=new V.z(s,r,1)
a.sdu(u.w(0,Math.sqrt(u.K(u))))
u=1-b
t=1-c
a.scJ(new V.bU(b*c,2+u*c,4+b*t,6+u*t))}}
F.bh.prototype={
e3:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.dh()
if(q!=null)s=s.u(0,q)
if(u!=null)s=s.u(0,u)
if(t!=null)s=s.u(0,t)
if(s.d9())return
return s.w(0,Math.sqrt(s.K(s)))},
e5:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.A(0,q)
r=new V.z(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.K(r)))
r=t.A(0,q)
r=new V.z(r.a,r.b,r.c)
r=s.aS(r.w(0,Math.sqrt(r.K(r))))
return r.w(0,Math.sqrt(r.K(r)))},
bG:function(){var u,t=this
if(t.d!=null)return!0
u=t.e3()
if(u==null){u=t.e5()
if(u==null)return!1}t.d=u
t.a.a.a0()
return!0},
e2:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.dh()
if(q!=null)s=s.u(0,q)
if(u!=null)s=s.u(0,u)
if(t!=null)s=s.u(0,t)
if(s.d9())return
return s.w(0,Math.sqrt(s.K(s)))},
e4:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.x().a){l=d.A(0,g)
l=new V.z(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.K(l)))
if(s.a-t.a<0)q=q.O(0)}else{p=(l-u.b)/r
l=d.A(0,g)
k=l.c
if(typeof k!=="number")return k.m()
i=g.a
h=g.b
f=g.c
if(typeof f!=="number")return H.l(f)
f=new V.a6(l.a*p+i,l.b*p+h,k*p+f).A(0,j)
f=new V.z(f.a,f.b,f.c)
q=f.w(0,Math.sqrt(f.K(f)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.O(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.K(l)))
l=o.aS(q)
l=l.w(0,Math.sqrt(l.K(l))).aS(o)
q=l.w(0,Math.sqrt(l.K(l)))}return q},
bE:function(){var u,t=this
if(t.e!=null)return!0
u=t.e2()
if(u==null){u=t.e4()
if(u==null)return!1}t.e=u
t.a.a.a0()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.L()},
C:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.a.a8(J.a2(s.e),0)+", "+C.a.a8(J.a2(t.b.e),0)+", "+C.a.a8(J.a2(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.h(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.h(0)+"}"):u+"-}"},
L:function(){return this.C("")}}
F.bL.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.L()},
C:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.a.a8(J.a2(u.e),0)+", "+C.a.a8(J.a2(this.b.e),0)},
L:function(){return this.C("")}}
F.bS.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.L()},
C:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.a8(J.a2(u.e),0)},
L:function(){return this.C("")}}
F.h3.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.D():u},
h6:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.X()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){r=g[s]
h.a.l(0,r.fH())}h.a.X()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.X()
o=o.e
if(typeof o!=="number")return o.u()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
n=p[o]
h.b.a.a.l(0,n)
o=new F.bS()
if(n.a==null)H.r(P.t("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.B(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.X()
o=o.e
if(typeof o!=="number")return o.u()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.X()
p=p.e
if(typeof p!=="number")return p.u()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.c.a
p.a.l(0,l)
p.a.l(0,k)
p=new F.bL()
o=l.a
if(o==null)H.r(P.t("May not create a line with a start vertex which is not attached to a shape."))
if(o!=k.a)H.r(P.t("May not create a line with vertices attached to different shapes."))
p.a=l
l.c.b.push(p)
p.b=k
k.c.c.push(p)
p.a.a.c.b.push(p)
p=p.a.a.e
if(p!=null)p.B(null)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.X()
o=o.e
if(typeof o!=="number")return o.u()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.X()
p=p.e
if(typeof p!=="number")return p.u()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.X()
o=o.e
if(typeof o!=="number")return o.u()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
i=p[o]
o=h.d.a
o.a.l(0,l)
o.a.l(0,k)
o.a.l(0,i)
F.cx(l,k,i)}g=h.e
if(g!=null)g.al(0)},
aH:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aH()||!1
if(!t.a.aH())u=!1
s=t.e
if(s!=null)s.al(0)
return u},
fD:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aM()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aL().a)!==0)++s
if((t&$.aK().a)!==0)++s
if((t&$.aN().a)!==0)++s
if((t&$.b8().a)!==0)++s
if((t&$.ci().a)!==0)++s
if((t&$.cj().a)!==0)++s
if((t&$.bz().a)!==0)++s
if((t&$.aJ().a)!==0)++s
r=a4.gc6(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.d(u,[P.I])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.co])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fw(m)
k=l.gc6(l)
if(m>=t)return H.b(o,m)
o[m]=new Z.co(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.b(i,j)
h=i[j].h4(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.b(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bt(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cp(new Z.di(a1,d),o,a4)
c.b=H.d([],[Z.bi])
if(a0.b.b.length!==0){b=H.d([],[P.u])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.X()
b.push(t.e)}a=Z.jD(u,34963,b)
c.b.push(new Z.bi(0,b.length,a))}if(a0.c.b.length!==0){b=H.d([],[P.u])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.X()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.X()
b.push(t.e)}a=Z.jD(u,34963,b)
c.b.push(new Z.bi(1,b.length,a))}if(a0.d.b.length!==0){b=H.d([],[P.u])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.X()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.X()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].c
t.a.a.X()
b.push(t.e)}a=Z.jD(u,34963,b)
c.b.push(new Z.bi(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.d([],[P.q])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.C(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.C(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.C(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.C(t))}return C.b.q(s,"\n")},
a0:function(){var u=this.e
if(u!=null)u.B(null)}}
F.h4.prototype={
fv:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.d([],[F.bh])
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
if(p){n.l(0,m)
u.a.l(0,l)
u.a.l(0,j)
h.push(F.cx(m,l,j))
u.a.l(0,m)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.cx(m,j,i))}else{n.l(0,l)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.cx(l,j,i))
u.a.l(0,l)
u.a.l(0,i)
u.a.l(0,m)
h.push(F.cx(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
aH:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].bG())s=!1
return s},
bF:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].bE())s=!1
return s},
h:function(a){return this.L()},
C:function(a){var u,t,s,r=H.d([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].C(a))
return C.b.q(r,"\n")},
L:function(){return this.C("")}}
F.h5.prototype={
gj:function(a){return this.b.length},
h:function(a){return this.L()},
C:function(a){var u,t,s=H.d([],[P.q]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].C(a+(""+u+". ")))}return C.b.q(s,"\n")},
L:function(){return this.C("")}}
F.h6.prototype={
gj:function(a){return this.b.length},
h:function(a){return this.L()},
C:function(a){var u,t,s,r=H.d([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].C(a))
return C.b.q(r,"\n")},
L:function(){return this.C("")}}
F.c2.prototype={
bJ:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.kw(u.cx,r,o,t,s,q,p,a,n)},
fH:function(){return this.bJ(null)},
sY:function(a,b){var u
if(!J.E(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a0()}},
sdu:function(a){var u
if(!J.E(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a0()}},
scJ:function(a){var u
if(!J.E(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a0()}},
h4:function(a){var u,t,s=this
if(a.n(0,$.aM())){u=s.f
t=[P.I]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.aL())){u=s.r
t=[P.I]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.aK())){u=s.x
t=[P.I]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.aN())){u=s.y
t=[P.I]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.n(0,$.b8())){u=s.z
t=[P.I]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.ci())){u=s.Q
t=[P.I]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.cj())){u=s.Q
t=[P.I]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bz()))return H.d([s.ch],[P.I])
else if(a.n(0,$.aJ())){u=s.cx
t=[P.I]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.I])},
bG:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dh()
t.d.F(0,new F.i5(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.K(s)))
s=t.a
if(s!=null){s.a0()
s=t.a.e
if(s!=null)s.al(0)}return!0},
bE:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dh()
t.d.F(0,new F.i4(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.K(s)))
s=t.a
if(s!=null){s.a0()
s=t.a.e
if(s!=null)s.al(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.L()},
C:function(a){var u,t,s=this,r="-",q=H.d([],[P.q])
q.push(C.a.a8(J.a2(s.e),0))
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
q.push(V.A(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.b.q(q,", ")
return a+"{"+t+"}"},
L:function(){return this.C("")}}
F.i5.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.u(0,t)}}}
F.i4.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.u(0,t)}}}
F.hZ.prototype={
X:function(){},
l:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.t("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a0()
return!0},
cH:function(a,b){var u=null,t=F.kw(u,u,a,u,u,b,u,u,0)
this.l(0,t)
return t},
gj:function(a){return this.c.length},
aH:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].bG()
return!0},
bF:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].bE()
return!0},
fE:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.m()
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.E(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.B(null)}}}}return!0},
h:function(a){return this.L()},
C:function(a){var u,t,s,r
this.X()
u=H.d([],[P.q])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r)u.push(t[r].C(a))
return C.b.q(u,"\n")},
L:function(){return this.C("")}}
F.i_.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
F:function(a,b){var u=this
C.b.F(u.b,b)
C.b.F(u.c,new F.i0(u,b))
C.b.F(u.d,new F.i1(u,b))},
h:function(a){return this.L()},
L:function(){var u,t,s,r=H.d([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].C(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].C(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].C(""))
return C.b.q(r,"\n")}}
F.i0.prototype={
$1:function(a){if(!J.E(a.a,this.a))this.b.$1(a)}}
F.i1.prototype={
$1:function(a){var u=this.a
if(!J.E(a.a,u)&&!J.E(a.b,u))this.b.$1(a)}}
F.i2.prototype={
gj:function(a){return this.b.length+this.c.length},
h:function(a){return this.L()},
L:function(){var u,t,s,r=H.d([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].C(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].C(""))
return C.b.q(r,"\n")}}
F.i3.prototype={
gj:function(a){return this.b.length},
h:function(a){return this.L()},
L:function(){var u,t,s,r=H.d([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].C(""))
return C.b.q(r,"\n")}}
O.cK.prototype={
gt:function(){var u=this.fr
return u==null?this.fr=D.D():u},
V:function(a){var u=this.fr
if(u!=null)u.B(a)},
bt:function(){return this.V(null)},
cw:function(a){this.a=null
this.V(a)},
fe:function(){return this.cw(null)},
es:function(a,b){var u=new D.aR()
u.b=!0
this.V(u)},
ev:function(a,b){var u=new D.aS()
u.b=!0
this.V(u)},
cl:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.u,h=new H.J([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=h.i(0,0)
h.k(0,0,r==null?1:r)}q=H.d([],[A.ct])
h.F(0,new O.ft(j,q))
C.b.bh(q,new O.fu())
p=new H.J([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){o=u[s]
r=o.gaR()
n=p.i(0,o.gaR())
p.k(0,r,n==null?1:n)}m=H.d([],[A.cS])
p.F(0,new O.fv(j,m))
C.b.bh(m,new O.fw())
l=new H.J([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.o)(i),++s){o=i[s]
t=o.gaR()
r=l.i(0,o.gaR())
l.k(0,t,r==null?1:r)}k=H.d([],[A.cZ])
l.F(0,new O.fx(j,k))
C.b.bh(k,new O.fy())
i=C.c.a_(j.e.a.length+3,4)
u=j.b
j.dy.e
return A.lH(u!=null,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
a5:function(a,b){if(b!=null)if(!C.b.a1(a,b)){b.a=a.length
a.push(b)}},
aa:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a_(u,u.length);u.v();){t=u.d
t.toString
s=$.hY
if(s==null)s=$.hY=new V.z(0,0,1)
t.a=s
r=$.hX
t.d=r==null?$.hX=new V.z(0,1,0):r
r=$.hW
t.e=r==null?$.hW=new V.z(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.aw(s)
r=s.a
p=s.b
o=s.c
if(typeof o!=="number")return o.m()
t.a=s.w(0,Math.sqrt(r*r+p*p+o*o))
o=q.aw(t.d)
p=o.a
r=o.b
s=o.c
if(typeof s!=="number")return s.m()
t.d=o.w(0,Math.sqrt(p*p+r*r+s*s))
s=q.aw(t.e)
r=s.a
p=s.b
o=s.c
if(typeof o!=="number")return o.m()
t.e=s.w(0,Math.sqrt(r*r+p*p+o*o))}}}},
hr:function(b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a
if(b2==null){b2=b1.cl()
u=b3.fr.i(0,b2.as)
if(u==null){u=A.lG(b2,b3.a)
t=u.b
if(t.length===0)H.r(P.t("May not cache a shader with no name."))
if(b3.fr.b6(0,t))H.r(P.t('Shader cache already contains a shader by the name "'+t+'".'))
b3.fr.k(0,t,u)}b2=b1.a=u
b4.e=null}s=b2.z
r=s.cO
b2=b4.e
if(!(b2 instanceof Z.cp))b2=b4.e=null
if(b2==null||!b2.d.n(0,r)){b2=s.k3
if(b2)b4.d.aH()
q=s.k4
if(q){p=b4.d
o=p.e
if(o!=null)++o.d
p.d.bF()
p.a.bF()
p=p.e
if(p!=null)p.al(0)}p=s.r2
if(p){o=b4.d
n=o.e
if(n!=null)++n.d
o.a.fE()
o=o.e
if(o!=null)o.al(0)}m=b4.d.fD(new Z.i7(b3.a),r)
m.aI($.aM()).e=b1.a.Q.c
if(b2)m.aI($.aL()).e=b1.a.cx.c
if(q)m.aI($.aK()).e=b1.a.ch.c
if(s.r1)m.aI($.aN()).e=b1.a.cy.c
if(p)m.aI($.b8()).e=b1.a.db.c
if(s.rx)m.aI($.aJ()).e=b1.a.dx.c
b4.e=m}l=H.d([],[T.d3])
b2=b1.a
q=b3.a
q.useProgram(b2.r)
b2.x.fS()
if(s.dy){b2=b1.a
p=b3.dx
p=p.gW(p)
b2=b2.dy
b2.toString
b2.ag(p.a9(0,!0))}if(s.fr){b2=b1.a
p=b3.cx
if(p==null){p=b3.db
p=p.gW(p)
o=b3.dx
o=b3.cx=p.m(0,o.gW(o))
p=o}b2=b2.fr
b2.toString
b2.ag(p.a9(0,!0))}b2=b1.a
p=b3.ch
if(p==null){p=b3.ghp()
o=b3.dx
o=b3.ch=p.m(0,o.gW(o))
p=o}b2=b2.fy
b2.toString
b2.ag(p.a9(0,!0))
if(s.ry){b2=b1.a
p=b1.b
b2=b2.k1
b2.toString
b2.ag(p.a9(0,!0))}if(s.x1){b2=b1.a
p=b1.c
b2=b2.k2
b2.toString
b2.ag(C.n.a9(p,!0))}if(s.x2){b2=b1.a
p=b1.d
b2=b2.k3
b2.toString
b2.ag(C.n.a9(p,!0))}if(s.y2>0){k=b1.e.a.length
b2=b1.a.k4
b2.a.uniform1i(b2.d,k)
for(j=0;j<k;++j){b2=b1.a
p=b1.e.a
if(j>=p.length)return H.b(p,j)
p=p[j]
b2=b2.r1
if(j>=b2.length)return H.b(b2,j)
b2=b2[j]
i=new Float32Array(H.bt(p.a9(0,!0)))
b2.a.uniformMatrix4fv(b2.d,!1,i)}}b2=s.a
if(b2.a){p=b1.a
o=b1.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.b){b1.a5(l,b1.f.d)
b2=b1.a
p=b1.f.d
b2.ac(b2.rx,p)}if(s.id){b2=s.b
if(b2.a){p=b1.a
o=b1.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.b){b1.a5(l,b1.r.d)
b2=b1.a
p=b1.r.d
b2.ac(b2.x2,p)}b2=s.c
if(b2.a){p=b1.a
o=b1.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.b){b1.a5(l,b1.x.d)
b2=b1.a
p=b1.x.d
b2.ac(b2.as,p)}b2=s.d
if(b2.a){p=b1.a
o=b1.y.f
p=p.cP
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.b){b1.a5(l,b1.y.d)
b2=b1.a
p=b1.y.d
b2.ac(b2.cQ,p)}b2=s.e
p=b2.a
if(p||b2.b||!1){o=b1.a
n=b1.z.ch
o=o.cT
o.a.uniform1f(o.d,n)}if(p){p=b1.a
o=b1.z.f
p=p.cR
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.b){b1.a5(l,b1.z.d)
b2=b1.a
p=b1.z.d
b2.ac(b2.cS,p)}b2=s.z
if(b2.length>0){p=b3.db
h=p.gW(p)
p=P.u
g=new H.J([p,p])
for(p=b1.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=g.i(0,0)
if(d==null)d=0
g.k(0,0,d+1)
c=J.ck(b1.a.bL.i(0,0),d)
n=h.aw(e.a)
b=n.a
a=n.b
a0=n.c
if(typeof a0!=="number")return a0.m()
a0=n.w(0,Math.sqrt(b*b+a*a+a0*a0))
a=c.e
b=a0.a
n=a0.b
a0=a0.c
a.a.uniform3f(a.d,b,n,a0)
a0=e.c
n=c.f
n.a.uniform3f(n.d,a0.a,a0.b,a0.c)}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.o)(b2),++f){o=b2[f].a
k=g.i(0,o)
if(k==null)k=0
o=b1.a.bK.i(0,o)
o.a.uniform1i(o.d,k)}}b2=s.Q
if(b2.length>0){p=b3.db
h=p.gW(p)
p=P.u
a1=new H.J([p,p])
for(p=b1.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
a2=e.gaR()
d=a1.i(0,a2)
if(d==null)d=0
a1.k(0,a2,d+1)
c=J.ck(b1.a.bN.i(0,a2),d)
a3=h.m(0,e.gW(e))
n=e.gW(e)
b=$.bT
n=n.c2(b==null?$.bT=new V.a6(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.bT
n=a3.c2(n==null?$.bT=new V.a6(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gaq(e)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
e.gav()
n=a3.b8(0)
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
i=new Float32Array(H.bt(new V.ay(b,a,a0,a4,a5,a6,a7,a8,n).a9(0,!0)))
a9.a.uniformMatrix3fv(a9.d,!1,i)
e.gav()
n=e.gav()
if(!C.b.a1(l,n)){n.a=l.length
l.push(n)}n=e.gav()
b=n.gaT(n)
if(b){b=c.f
b.toString
a=n.gaT(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.gh_(n)
b.a.uniform1i(b.d,n)}}e.gaO()
n=e.gdE()
b=c.x
b.toString
a=n.gfO(n)
a0=n.gfP(n)
a4=n.gfQ()
n=n.gfN()
b.a.uniform4f(b.d,a,a0,a4,n)
n=e.gaO()
if(!C.b.a1(l,n)){n.a=l.length
l.push(n)}n=e.gaO()
b=n.gaT(n)
if(b){b=c.r
b.toString
a=n.gaT(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.gh_(n)
b.a.uniform1i(b.d,n)}}if(e.gfT()){n=e.gfz()
b=c.y
b.a.uniform1f(b.d,n)
n=e.gfA()
b=c.z
b.a.uniform1f(b.d,n)
n=e.gfB()
b=c.Q
b.a.uniform1f(b.d,n)}}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.o)(b2),++f){o=b2[f].a
k=a1.i(0,o)
if(k==null)k=0
o=b1.a.bM.i(0,o)
o.a.uniform1i(o.d,k)}}b2=s.ch
if(b2.length>0){p=b3.db
h=p.gW(p)
p=P.u
b0=new H.J([p,p])
for(p=b1.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
a2=e.gaR()
d=b0.i(0,a2)
if(d==null)d=0
b0.k(0,a2,d+1)
c=J.ck(b1.a.bP.i(0,a2),d)
n=e.gho(e)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.ghH(e).hT()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=h.c2(e.gho(e))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gaq(e)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
e.gav()
n=e.ghW()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gc0(e)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.ghU()
b=c.x
b.a.uniform1f(b.d,n)
n=e.ghV()
b=c.y
b.a.uniform1f(b.d,n)
e.gav()
n=e.gav()
if(!C.b.a1(l,n)){n.a=l.length
l.push(n)}n=e.gav()
b=n.gaT(n)
if(b){b=c.dx
b.toString
a=n.d
if(!a)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}e.gaO()
n=e.gdE()
b=c.z
b.toString
a=n.gfO(n)
a0=n.gfP(n)
a4=n.gfQ()
n=n.gfN()
b.a.uniform4f(b.d,a,a0,a4,n)
n=e.gaO()
if(!C.b.a1(l,n)){n.a=l.length
l.push(n)}n=e.gaO()
b=n.gaT(n)
if(b){b=c.dy
b.toString
a=n.d
if(!a)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}if(e.ghI()){n=e.ghG()
b=c.Q
b.a.uniform1f(b.d,n)
n=e.ghF()
b=c.ch
b.a.uniform1f(b.d,n)}if(e.gfT()){n=e.gfz()
b=c.cx
b.a.uniform1f(b.d,n)
n=e.gfA()
b=c.cy
b.a.uniform1f(b.d,n)
n=e.gfB()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.o)(b2),++f){o=b2[f].a
k=b0.i(0,o)
if(k==null)k=0
o=b1.a.bO.i(0,o)
o.a.uniform1i(o.d,k)}}}if(s.f.b){b1.a5(l,b1.Q.d)
b2=b1.a
p=b1.Q.d
b2.ac(b2.cU,p)}if(s.dx){b2=b1.a
p=b3.Q
if(p==null){p=b3.db
p=b3.Q=p.gW(p).b8(0)}b2=b2.id
b2.toString
b2.ag(p.a9(0,!0))}if(s.cy){b1.a5(l,b1.ch)
b2=b1.a
p=b1.ch
b2.fg(b2.cV,p)
b2=s.r
if(b2.a){p=b1.a
o=b1.cx.f
p=p.cW
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.b){b1.a5(l,b1.cx.d)
b2=b1.a
p=b1.cx.d
b2.ac(b2.cX,p)}b2=s.x
p=b2.a
if(p||b2.b||!1){o=b1.a
n=b1.cy.ch
o=o.cY
o.a.uniform1f(o.d,n)}if(p){p=b1.a
o=b1.cy.f
p=p.cZ
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.b){b1.a5(l,b1.cy.d)
b2=b1.a
p=b1.cy.d
b2.ac(b2.d_,p)}}b2=s.y
p=b2.a
o=!p
if(!o||b2.b||!1){if(p){p=b1.a
n=b1.db.f
p=p.d0
p.a.uniform1f(p.d,n)}if(b2.b){b1.a5(l,b1.db.d)
p=b1.a
n=b1.db.d
p.ac(p.d1,n)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j){p=l[j]
if(!p.c&&p.d){p.c=!0
q.activeTexture(33984+p.a)
q.bindTexture(3553,p.b)}}p=b4.e
p.bD(b3)
p.aM(b3)
p.hC(b3)
if(!o||b2.b||!1)q.disable(3042)
for(j=0;j<l.length;++j){b2=l[j]
if(b2.c){b2.c=!1
q.activeTexture(33984+b2.a)
q.bindTexture(3553,null)}}b2=b1.a
b2.toString
q.useProgram(null)
b2.x.fM()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.cl().as}}
O.ft.prototype={
$2:function(a,b){if(typeof b!=="number")return b.u()
return this.b.push(new A.ct(a,C.c.a_(b+3,4)*4))}}
O.fu.prototype={
$2:function(a,b){return J.jg(a.a,b.a)}}
O.fv.prototype={
$2:function(a,b){if(typeof b!=="number")return b.u()
return this.b.push(new A.cS(a,C.c.a_(b+3,4)*4))}}
O.fw.prototype={
$2:function(a,b){return J.jg(a.a,b.a)}}
O.fx.prototype={
$2:function(a,b){if(typeof b!=="number")return b.u()
return this.b.push(new A.cZ(a,C.c.a_(b+3,4)*4))}}
O.fy.prototype={
$2:function(a,b){return J.jg(a.a,b.a)}}
O.fn.prototype={
ao:function(){var u,t=this
t.c8()
u=t.f
if(!(Math.abs(u-1)<$.x().a)){t.f=1
u=new D.w(t.b,u,1)
u.b=!0
t.a.V(u)}}}
O.bM.prototype={
V:function(a){return this.a.V(a)},
bt:function(){return this.V(null)},
ao:function(){},
by:function(a){var u,t,s=this
if(!s.c.n(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.ao()
u=s.a
u.a=null
u.V(null)}},
sdt:function(a){var u,t=this,s=t.c
if(!s.b)t.by(new A.V(s.a,!0,!1))
s=t.d
if(s!==a){if(s!=null)s.gt().T(0,t.gb3())
u=t.d
t.d=a
a.gt().l(0,t.gb3())
s=new D.w(t.b+".texture2D",u,t.d)
s.b=!0
t.a.V(s)}}}
O.fo.prototype={}
O.ak.prototype={
cA:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.w(s.b+".color",u,a)
t.b=!0
s.a.V(t)}},
ao:function(){this.c8()
this.cA(new V.K(1,1,1))},
saq:function(a,b){this.by(new A.V(!0,this.c.b,!1))
this.cA(b)}}
O.fq.prototype={}
O.fr.prototype={
ao:function(){var u,t=this
t.c9()
u=t.ch
if(!(Math.abs(u-1)<$.x().a)){t.ch=1
u=new D.w(t.b+".refraction",u,1)
u.b=!0
t.a.V(u)}}}
O.fs.prototype={
cB:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.x().a)){u.ch=a
t=new D.w(u.b+".shininess",t,a)
t.b=!0
u.a.V(t)}},
ao:function(){this.c9()
this.cB(100)}}
O.d2.prototype={}
T.d3.prototype={}
T.ho.prototype={}
T.hp.prototype={
gt:function(){var u=this.y
return u==null?this.y=D.D():u}}
T.hq.prototype={
h5:function(a,b,c){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,10497)
r.texParameteri(s,10243,10497)
r.texParameteri(s,10241,9987)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.hp()
t.a=0
t.b=q
t.d=t.c=!1
W.R(u,"load",new T.hr(this,t,u,!1,q,!1,!0),!1)
return t},
ff:function(a,b,c){var u,t,s,r
b=V.jQ(b)
u=V.jQ(a.width)
t=V.jQ(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jk()
s.width=u
s.height=t
r=C.i.dB(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.na(r.getImageData(0,0,s.width,s.height))}}}
T.hr.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.ff(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.Q.hx(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.fR()}++s.e}}
X.jj.prototype={}
X.f1.prototype={
gt:function(){var u=this.x
return u==null?this.x=D.D():u}}
X.cR.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.D():u},
aD:function(a){var u=this.f
if(u!=null)u.B(a)},
e_:function(){return this.aD(null)},
saL:function(a){var u,t,s=this
if(!J.E(s.b,a)){u=s.b
if(u!=null)u.gt().T(0,s.gcf())
t=s.b
s.b=a
if(a!=null)a.gt().l(0,s.gcf())
u=new D.w("mover",t,s.b)
u.b=!0
s.aD(u)}}}
X.hk.prototype={}
V.ev.prototype={
fs:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=this
if(l.c==null)return
u=l.d.length
t=P.jA().gbc().i(0,l.a)
if(t==null||t.length<=u){s=!0
r=!1}else{if(u>=t.length)return H.b(t,u)
r=t[u]==="1"
s=!1}c.$1(r)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
J.jV(l.c).l(0,p)
n=W.lv("checkbox")
n.checked=r
W.R(n,"change",new V.ew(l,c,n,u),!1)
p.appendChild(n)
m=q.createElement("span")
m.textContent=b
p.appendChild(m)
J.jV(l.c).l(0,q.createElement("br"))
l.d.push(n)
if(s)l.cF(u,r)},
cF:function(a,b){var u,t,s,r,q,p=this.a,o=P.jA().gbc().i(0,p)
if(o==null)o=""
u=o.length
if(u<a)o=C.a.hg(o,a-u+1,"0")
t=a>0?C.a.p(o,0,a):""
t+=b?"1":"0"
u=a+1
if(u<o.length)t+=C.a.a3(o,u)
s=P.jA()
u=P.q
r=P.lB(s.gbc(),u,u)
r.k(0,p,t)
q=s.dq(0,r)
p=window.history
u=q.h(0)
p.toString
p.replaceState(new P.iz([],[]).c3(""),"",u)}}
V.ew.prototype={
$1:function(a){var u=this,t=u.c
u.b.$1(t.checked)
u.a.cF(u.d,t.checked)}}
V.ja.prototype={
$1:function(a){var u=C.d.dv(this.a.gfZ(),2)
if(u!=="0.00")P.jR(u+" fps")}}
V.h7.prototype={
dO:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.R(q,"scroll",new V.h9(o),!1)},
cI:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.fi()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.hB(C.b.h3(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
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
if(H.nv(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.b(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.iJ(C.N,n,C.e,!1)
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
ft:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
fi:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new R.hu()
t=P.q
u.a=new H.J([t,R.d0])
u.b=new H.J([t,R.d7])
u.c=u.N(0,q)
t=u.N(0,q).q(0,p)
s=T.X(new H.N("*"))
t.a.push(s)
t.c=!0
t=u.N(0,p).q(0,p)
s=new T.aA()
r=[T.cJ]
s.a=H.d([],r)
t.a.push(s)
t=T.X(new H.N("*"))
s.a.push(t)
t=u.N(0,p).q(0,"BoldEnd")
s=T.X(new H.N("*"))
t.a.push(s)
t.c=!0
t=u.N(0,q).q(0,o)
s=T.X(new H.N("_"))
t.a.push(s)
t.c=!0
t=u.N(0,o).q(0,o)
s=new T.aA()
s.a=H.d([],r)
t.a.push(s)
t=T.X(new H.N("_"))
s.a.push(t)
t=u.N(0,o).q(0,n)
s=T.X(new H.N("_"))
t.a.push(s)
t.c=!0
t=u.N(0,q).q(0,m)
s=T.X(new H.N("`"))
t.a.push(s)
t.c=!0
t=u.N(0,m).q(0,m)
s=new T.aA()
s.a=H.d([],r)
t.a.push(s)
t=T.X(new H.N("`"))
s.a.push(t)
t=u.N(0,m).q(0,"CodeEnd")
s=T.X(new H.N("`"))
t.a.push(s)
t.c=!0
t=u.N(0,q).q(0,l)
s=T.X(new H.N("["))
t.a.push(s)
t.c=!0
t=u.N(0,l).q(0,k)
s=T.X(new H.N("|"))
t.a.push(s)
s=u.N(0,l).q(0,j)
t=T.X(new H.N("]"))
s.a.push(t)
s.c=!0
s=u.N(0,l).q(0,l)
t=new T.aA()
t.a=H.d([],r)
s.a.push(t)
s=T.X(new H.N("|]"))
t.a.push(s)
s=u.N(0,k).q(0,j)
t=T.X(new H.N("]"))
s.a.push(t)
s.c=!0
s=u.N(0,k).q(0,k)
t=new T.aA()
t.a=H.d([],r)
s.a.push(t)
s=T.X(new H.N("|]"))
t.a.push(s)
u.N(0,q).q(0,i).a.push(new T.eh())
s=u.N(0,i).q(0,i)
t=new T.aA()
t.a=H.d([],r)
s.a.push(t)
s=T.X(new H.N("*_`["))
t.a.push(s)
s=u.N(0,"BoldEnd")
s.d=s.a.aY(p)
s=u.N(0,n)
s.d=s.a.aY(o)
s=u.N(0,"CodeEnd")
s.d=s.a.aY(m)
s=u.N(0,j)
s.d=s.a.aY("Link")
s=u.N(0,i)
s.d=s.a.aY(i)
this.b=u}}
V.h9.prototype={
$1:function(a){P.kn(C.m,new V.h8(this.a))}}
V.h8.prototype={
$0:function(){var u=C.d.ae(document.documentElement.scrollTop),t=this.a.style,s=H.f(-0.01*u)+"px"
t.top=s}}
X.j7.prototype={
$1:function(a){var u,t=this.a,s=-this.b.c.d,r=Math.cos(s),q=Math.sin(s)
s=new V.ay(r,0,-q,0,1,0,q,0,r)
if(!J.E(t.z,s)){u=t.z
t.z=s
t.Q=s.b8(0)
s=new D.w("velocityRotation",u,t.z)
s.b=!0
t.I(s)}}}
X.j8.prototype={
$1:function(a){this.a.x.r=a}};(function aliases(){var u=J.a.prototype
u.dH=u.h
u=J.cE.prototype
u.dI=u.h
u=T.cA.prototype
u.dG=u.aK
u.c7=u.h
u=O.bM.prototype
u.c8=u.ao
u=O.ak.prototype
u.c9=u.ao})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"n4","mf",7)
u(P,"n5","mg",7)
u(P,"n6","mh",7)
t(P,"kK","n2",9)
var n
s(n=E.au.prototype,"gdf",0,0,null,["$1","$0"],["dg","he"],0,0)
s(n,"gdh",0,0,null,["$1","$0"],["di","hf"],0,0)
s(n,"gdd",0,0,null,["$1","$0"],["de","hd"],0,0)
s(n,"gda",0,0,null,["$1","$0"],["dc","ha"],0,0)
r(n,"gh8","h9",4)
r(n,"ghb","hc",4)
s(n=E.d4.prototype,"gcb",0,0,null,["$1","$0"],["cd","cc"],0,0)
q(n,"ght","dr",9)
p(n=X.cF.prototype,"gdR","dS",18)
r(n,"gdP","dQ",10)
r(n,"gdT","dU",10)
p(n,"gbi","bj",1)
p(n,"gbu","bv",1)
p(n=X.de.prototype,"geI","eJ",5)
p(n,"gew","ex",5)
p(n,"geC","eD",2)
p(n,"gbu","bv",11)
p(n,"gbi","bj",11)
p(n,"geO","eP",2)
p(n,"geS","eT",2)
p(n,"geG","eH",2)
p(n,"geQ","eR",2)
p(n,"geE","eF",2)
p(n,"geU","eV",19)
p(n,"geW","eX",5)
p(n,"gf7","f8",6)
p(n,"gf3","f4",6)
p(n,"gf5","f6",6)
s(D.be.prototype,"gdV",0,0,null,["$1","$0"],["am","dW"],0,0)
s(n=D.cG.prototype,"gcu",0,0,null,["$1","$0"],["cv","eM"],0,0)
p(n,"geY","eZ",20)
r(n,"gep","eq",12)
r(n,"gf1","f2",12)
o(V.M.prototype,"gj","bU",13)
o(V.z.prototype,"gj","bU",13)
s(n=U.bG.prototype,"gaA",0,0,null,["$1","$0"],["I","a4"],0,0)
r(n,"gen","eo",14)
r(n,"gf_","f0",14)
s(n=U.df.prototype,"gaA",0,0,null,["$1","$0"],["I","a4"],0,0)
p(n,"geh","ei",1)
p(n,"gej","ek",1)
p(n,"gel","em",1)
p(n,"ged","ee",1)
p(n,"gef","eg",1)
p(n,"gfp","fq",1)
p(n,"gfn","fo",1)
p(n,"gfl","fm",1)
s(n=U.dg.prototype,"gaA",0,0,null,["$1","$0"],["I","a4"],0,0)
p(n,"geK","eL",1)
s(n=M.cw.prototype,"gaB",0,0,null,["$1","$0"],["aC","dX"],0,0)
r(n,"gey","ez",4)
r(n,"geA","eB",4)
s(n=O.cK.prototype,"gb3",0,0,null,["$1","$0"],["V","bt"],0,0)
s(n,"gfd",0,0,null,["$1","$0"],["cw","fe"],0,0)
r(n,"ger","es",15)
r(n,"geu","ev",15)
s(O.bM.prototype,"gb3",0,0,null,["$1","$0"],["V","bt"],0,0)
s(X.cR.prototype,"gcf",0,0,null,["$1","$0"],["aD","e_"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.Z,null)
s(P.Z,[H.js,J.a,J.a_,P.dA,P.h,H.cH,P.f4,H.cy,H.hL,H.eC,H.hz,P.bf,H.bC,H.dR,P.ax,H.fa,H.fc,H.f6,P.dX,P.dj,P.d1,P.hi,P.d5,P.iM,P.iv,P.iq,P.dz,P.p,P.iE,P.fj,P.ey,P.iL,P.iK,P.as,P.a3,P.a8,P.aQ,P.fO,P.d_,P.ds,P.f0,P.n,P.O,P.b_,P.q,P.P,P.br,P.hN,P.iw,W.eG,W.ex,W.F,W.cz,P.iy,P.e1,P.ir,P.bo,T.eh,T.cA,T.cJ,T.h2,R.d0,R.d6,R.d7,R.hu,O.at,O.bN,E.er,E.au,E.fV,E.d4,Z.di,Z.i7,Z.cp,Z.bi,Z.aH,D.eu,D.bg,D.W,X.cq,X.a4,X.f8,X.fg,X.aX,X.fF,X.hv,X.de,D.be,D.a5,D.fR,D.hc,V.K,V.aP,V.eT,V.ay,V.al,V.aa,V.a6,V.bU,V.cU,V.M,V.z,U.df,U.dg,M.cw,A.cn,A.ek,A.V,A.ct,A.cS,A.cZ,A.fp,A.bZ,A.c0,A.c1,A.da,A.hG,F.bh,F.bL,F.bS,F.h3,F.h4,F.h5,F.h6,F.c2,F.hZ,F.i_,F.i2,F.i3,O.d2,O.bM,O.fq,T.hq,X.jj,X.hk,X.cR,V.ev,V.h7])
s(J.a,[J.f5,J.cD,J.cE,J.aT,J.bJ,J.aU,H.bP,H.aZ,W.e,W.eg,W.bb,W.ai,W.C,W.dl,W.a9,W.eK,W.eL,W.dn,W.cv,W.dq,W.eN,W.i,W.dt,W.av,W.f2,W.dv,W.aw,W.ff,W.fz,W.dB,W.dC,W.az,W.dD,W.dG,W.aB,W.dK,W.dM,W.aD,W.dN,W.aE,W.dS,W.ao,W.dV,W.ht,W.aG,W.dY,W.hx,W.hS,W.e3,W.e5,W.e7,W.e9,W.eb,P.aW,P.dx,P.b0,P.dI,P.fT,P.dT,P.b3,P.e_,P.el,P.dk,P.cV,P.dP])
s(J.cE,[J.fP,J.bq,J.aV])
t(J.jr,J.aT)
s(J.bJ,[J.cC,J.cB])
t(P.fe,P.dA)
s(P.fe,[H.dc,W.ig,W.ie,P.eX])
t(H.N,H.dc)
s(P.h,[H.eQ,H.fk,H.i8])
s(P.f4,[H.fl,H.i9])
t(H.eD,H.eC)
s(P.bf,[H.fL,H.f7,H.hK,H.et,H.h0,P.cQ,P.ag,P.hM,P.hI,P.he,P.eA,P.eJ])
s(H.bC,[H.jd,H.hl,H.j3,H.j4,H.j5,P.ib,P.ia,P.ic,P.id,P.iD,P.iC,P.iV,P.it,P.iu,P.fd,P.fi,P.eO,P.eP,P.hR,P.hO,P.hP,P.hQ,P.iF,P.iG,P.iI,P.iH,P.iQ,P.iP,P.iR,P.iS,W.fB,W.fD,W.h_,W.hh,W.ik,P.iA,P.iW,P.eY,P.eZ,P.en,E.fW,E.fX,E.fY,E.hs,D.eU,D.eV,F.iN,F.j0,F.j1,F.i5,F.i4,F.i0,F.i1,O.ft,O.fu,O.fv,O.fw,O.fx,O.fy,T.hr,V.ew,V.ja,V.h9,V.h8,X.j7,X.j8])
s(H.hl,[H.hf,H.bA])
t(P.fh,P.ax)
t(H.J,P.fh)
t(H.fb,H.eQ)
t(H.cM,H.aZ)
s(H.cM,[H.c4,H.c6])
t(H.c5,H.c4)
t(H.bQ,H.c5)
t(H.c7,H.c6)
t(H.cN,H.c7)
s(H.cN,[H.fG,H.fH,H.fI,H.fJ,H.fK,H.cO,H.bR])
t(P.is,P.iM)
t(P.ip,P.iv)
t(P.e2,P.fj)
t(P.dd,P.e2)
s(P.ey,[P.ep,P.eR])
t(P.eE,P.hi)
s(P.eE,[P.eq,P.hV,P.hU])
t(P.hT,P.eR)
s(P.a8,[P.I,P.u])
s(P.ag,[P.bm,P.f3])
t(P.ii,P.br)
s(W.e,[W.B,W.eW,W.bO,W.aC,W.c8,W.aF,W.ap,W.ca,W.i6,W.c3,P.eo,P.ba])
s(W.B,[W.S,W.aO])
s(W.S,[W.k,P.j])
s(W.k,[W.ei,W.ej,W.bc,W.f_,W.bI,W.h1])
t(W.eF,W.ai)
t(W.bE,W.dl)
s(W.a9,[W.eH,W.eI])
t(W.dp,W.dn)
t(W.cu,W.dp)
t(W.dr,W.dq)
t(W.eM,W.dr)
t(W.aj,W.bb)
t(W.du,W.dt)
t(W.bF,W.du)
t(W.dw,W.dv)
t(W.bH,W.dw)
t(W.b4,W.i)
s(W.b4,[W.bk,W.an,W.bn])
t(W.fA,W.dB)
t(W.fC,W.dC)
t(W.dE,W.dD)
t(W.fE,W.dE)
t(W.dH,W.dG)
t(W.cP,W.dH)
t(W.dL,W.dK)
t(W.fQ,W.dL)
t(W.fZ,W.dM)
t(W.c9,W.c8)
t(W.ha,W.c9)
t(W.dO,W.dN)
t(W.hb,W.dO)
t(W.hg,W.dS)
t(W.dW,W.dV)
t(W.hm,W.dW)
t(W.cb,W.ca)
t(W.hn,W.cb)
t(W.dZ,W.dY)
t(W.hw,W.dZ)
t(W.b5,W.an)
t(W.e4,W.e3)
t(W.ih,W.e4)
t(W.dm,W.cv)
t(W.e6,W.e5)
t(W.il,W.e6)
t(W.e8,W.e7)
t(W.dF,W.e8)
t(W.ea,W.e9)
t(W.ix,W.ea)
t(W.ec,W.eb)
t(W.iB,W.ec)
t(W.ij,P.d1)
t(P.iz,P.iy)
t(P.a7,P.ir)
t(P.dy,P.dx)
t(P.f9,P.dy)
t(P.dJ,P.dI)
t(P.fM,P.dJ)
t(P.dU,P.dT)
t(P.hj,P.dU)
t(P.e0,P.e_)
t(P.hy,P.e0)
t(P.em,P.dk)
t(P.fN,P.ba)
t(P.dQ,P.dP)
t(P.hd,P.dQ)
s(T.cA,[T.aA,R.d9])
s(E.er,[Z.co,A.cX,T.d3])
s(D.W,[D.aR,D.aS,D.w,X.bj,X.fS])
s(O.at,[X.cF,D.cG,U.bG])
s(X.fS,[X.cI,X.aY,X.d8])
s(D.eu,[U.ez,U.a0])
s(U.a0,[U.bD,U.cW])
t(A.fm,A.cX)
s(A.da,[A.db,A.hD,A.hE,A.hF,A.hB,A.U,A.hC,A.H,A.bY,A.hH,A.c_,A.ab,A.Y,A.bp])
t(O.cK,O.d2)
s(O.bM,[O.fn,O.fo,O.ak])
s(O.ak,[O.fr,O.fs])
t(T.ho,T.d3)
t(T.hp,T.ho)
t(X.f1,X.hk)
u(H.dc,H.hL)
u(H.c4,P.p)
u(H.c5,H.cy)
u(H.c6,P.p)
u(H.c7,H.cy)
u(P.dA,P.p)
u(P.e2,P.iE)
u(W.dl,W.eG)
u(W.dn,P.p)
u(W.dp,W.F)
u(W.dq,P.p)
u(W.dr,W.F)
u(W.dt,P.p)
u(W.du,W.F)
u(W.dv,P.p)
u(W.dw,W.F)
u(W.dB,P.ax)
u(W.dC,P.ax)
u(W.dD,P.p)
u(W.dE,W.F)
u(W.dG,P.p)
u(W.dH,W.F)
u(W.dK,P.p)
u(W.dL,W.F)
u(W.dM,P.ax)
u(W.c8,P.p)
u(W.c9,W.F)
u(W.dN,P.p)
u(W.dO,W.F)
u(W.dS,P.ax)
u(W.dV,P.p)
u(W.dW,W.F)
u(W.ca,P.p)
u(W.cb,W.F)
u(W.dY,P.p)
u(W.dZ,W.F)
u(W.e3,P.p)
u(W.e4,W.F)
u(W.e5,P.p)
u(W.e6,W.F)
u(W.e7,P.p)
u(W.e8,W.F)
u(W.e9,P.p)
u(W.ea,W.F)
u(W.eb,P.p)
u(W.ec,W.F)
u(P.dx,P.p)
u(P.dy,W.F)
u(P.dI,P.p)
u(P.dJ,W.F)
u(P.dT,P.p)
u(P.dU,W.F)
u(P.e_,P.p)
u(P.e0,W.F)
u(P.dk,P.ax)
u(P.dP,P.p)
u(P.dQ,W.F)})()
var v={mangledGlobalNames:{u:"int",I:"double",a8:"num",q:"String",as:"bool",b_:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.W]},{func:1,ret:-1,args:[D.W]},{func:1,ret:-1,args:[W.an]},{func:1,ret:P.b_,args:[,,]},{func:1,ret:-1,args:[P.u,[P.h,E.au]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bn]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[P.u,[P.h,X.a4]]},{func:1,ret:-1,args:[W.bk]},{func:1,ret:-1,args:[P.u,[P.h,D.a5]]},{func:1,ret:P.I},{func:1,ret:-1,args:[P.u,[P.h,U.a0]]},{func:1,ret:-1,args:[P.u,[P.h,V.al]]},{func:1,ret:P.b_,args:[,]},{func:1,ret:P.bo,args:[,,]},{func:1,ret:P.as,args:[[P.h,X.a4]]},{func:1,ret:-1,args:[W.b5]},{func:1,ret:P.as,args:[[P.h,D.a5]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.i=W.bc.prototype
C.I=J.a.prototype
C.b=J.aT.prototype
C.J=J.cB.prototype
C.c=J.cC.prototype
C.n=J.cD.prototype
C.d=J.bJ.prototype
C.a=J.aU.prototype
C.K=J.aV.prototype
C.v=J.fP.prototype
C.Q=P.cV.prototype
C.o=J.bq.prototype
C.w=W.b5.prototype
C.x=W.c3.prototype
C.R=new P.eq()
C.y=new P.ep()
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.z=function() {
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
C.E=function(getTagFallback) {
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
C.A=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.B=function(hooks) {
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
C.D=function(hooks) {
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
C.C=function(hooks) {
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
C.q=function(hooks) { return hooks; }

C.F=new P.fO()
C.e=new P.hT()
C.G=new P.hV()
C.f=new P.is()
C.m=new P.aQ(0)
C.H=new P.aQ(5e6)
C.r=H.d(u([127,2047,65535,1114111]),[P.u])
C.j=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.u])
C.k=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.u])
C.l=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.u])
C.M=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.u])
C.N=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.u])
C.h=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.u])
C.t=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.u])
C.O=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.u])
C.u=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.u])
C.L=H.d(u([]),[P.q])
C.P=new H.eD(0,{},C.L,[P.q,P.q])})();(function staticFields(){$.ah=0
$.bB=null
$.jY=null
$.kN=null
$.kJ=null
$.kR=null
$.iX=null
$.j6=null
$.jO=null
$.bu=null
$.ce=null
$.cf=null
$.jJ=!1
$.ae=C.f
$.a1=[]
$.k6=null
$.ka=null
$.kd=null
$.bT=null
$.kj=null
$.kt=null
$.kv=null
$.hW=null
$.hX=null
$.hY=null
$.ku=null
$.kc=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nB","kX",function(){return H.kL("_$dart_dartClosure")})
u($,"nC","jS",function(){return H.kL("_$dart_js")})
u($,"nD","kY",function(){return H.aq(H.hA({
toString:function(){return"$receiver$"}}))})
u($,"nE","kZ",function(){return H.aq(H.hA({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nF","l_",function(){return H.aq(H.hA(null))})
u($,"nG","l0",function(){return H.aq(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nJ","l3",function(){return H.aq(H.hA(void 0))})
u($,"nK","l4",function(){return H.aq(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nI","l2",function(){return H.aq(H.kp(null))})
u($,"nH","l1",function(){return H.aq(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nM","l6",function(){return H.aq(H.kp(void 0))})
u($,"nL","l5",function(){return H.aq(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"o_","jT",function(){return P.me()})
u($,"nN","l7",function(){return P.m9()})
u($,"o0","lb",function(){return H.lJ(H.bt(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.u])))})
u($,"o1","lc",function(){return P.lX("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"o2","ld",function(){return P.mB()})
u($,"nU","la",function(){return Z.ac(0)})
u($,"nO","l8",function(){return Z.ac(511)})
u($,"nW","aM",function(){return Z.ac(1)})
u($,"nV","aL",function(){return Z.ac(2)})
u($,"nQ","aK",function(){return Z.ac(4)})
u($,"nX","aN",function(){return Z.ac(8)})
u($,"nY","b8",function(){return Z.ac(16)})
u($,"nR","ci",function(){return Z.ac(32)})
u($,"nS","cj",function(){return Z.ac(64)})
u($,"nT","l9",function(){return Z.ac(96)})
u($,"nZ","bz",function(){return Z.ac(128)})
u($,"nP","aJ",function(){return Z.ac(256)})
u($,"nA","kW",function(){return new V.eT(1e-9)})
u($,"nz","x",function(){return $.kW()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bP,DataView:H.aZ,ArrayBufferView:H.aZ,Float32Array:H.bQ,Float64Array:H.bQ,Int16Array:H.fG,Int32Array:H.fH,Int8Array:H.fI,Uint16Array:H.fJ,Uint32Array:H.fK,Uint8ClampedArray:H.cO,CanvasPixelArray:H.cO,Uint8Array:H.bR,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLBodyElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLDivElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTableElement:W.k,HTMLTableRowElement:W.k,HTMLTableSectionElement:W.k,HTMLTemplateElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,AccessibleNodeList:W.eg,HTMLAnchorElement:W.ei,HTMLAreaElement:W.ej,Blob:W.bb,HTMLCanvasElement:W.bc,CDATASection:W.aO,CharacterData:W.aO,Comment:W.aO,ProcessingInstruction:W.aO,Text:W.aO,CSSPerspective:W.eF,CSSCharsetRule:W.C,CSSConditionRule:W.C,CSSFontFaceRule:W.C,CSSGroupingRule:W.C,CSSImportRule:W.C,CSSKeyframeRule:W.C,MozCSSKeyframeRule:W.C,WebKitCSSKeyframeRule:W.C,CSSKeyframesRule:W.C,MozCSSKeyframesRule:W.C,WebKitCSSKeyframesRule:W.C,CSSMediaRule:W.C,CSSNamespaceRule:W.C,CSSPageRule:W.C,CSSRule:W.C,CSSStyleRule:W.C,CSSSupportsRule:W.C,CSSViewportRule:W.C,CSSStyleDeclaration:W.bE,MSStyleCSSProperties:W.bE,CSS2Properties:W.bE,CSSImageValue:W.a9,CSSKeywordValue:W.a9,CSSNumericValue:W.a9,CSSPositionValue:W.a9,CSSResourceValue:W.a9,CSSUnitValue:W.a9,CSSURLImageValue:W.a9,CSSStyleValue:W.a9,CSSMatrixComponent:W.ai,CSSRotation:W.ai,CSSScale:W.ai,CSSSkew:W.ai,CSSTranslation:W.ai,CSSTransformComponent:W.ai,CSSTransformValue:W.eH,CSSUnparsedValue:W.eI,DataTransferItemList:W.eK,DOMException:W.eL,ClientRectList:W.cu,DOMRectList:W.cu,DOMRectReadOnly:W.cv,DOMStringList:W.eM,DOMTokenList:W.eN,Element:W.S,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aj,FileList:W.bF,FileWriter:W.eW,HTMLFormElement:W.f_,Gamepad:W.av,History:W.f2,HTMLCollection:W.bH,HTMLFormControlsCollection:W.bH,HTMLOptionsCollection:W.bH,ImageData:W.aw,HTMLImageElement:W.bI,KeyboardEvent:W.bk,Location:W.ff,MediaList:W.fz,MessagePort:W.bO,MIDIInputMap:W.fA,MIDIOutputMap:W.fC,MimeType:W.az,MimeTypeArray:W.fE,PointerEvent:W.an,MouseEvent:W.an,DragEvent:W.an,Document:W.B,DocumentFragment:W.B,HTMLDocument:W.B,ShadowRoot:W.B,XMLDocument:W.B,Attr:W.B,DocumentType:W.B,Node:W.B,NodeList:W.cP,RadioNodeList:W.cP,Plugin:W.aB,PluginArray:W.fQ,RTCStatsReport:W.fZ,HTMLSelectElement:W.h1,SourceBuffer:W.aC,SourceBufferList:W.ha,SpeechGrammar:W.aD,SpeechGrammarList:W.hb,SpeechRecognitionResult:W.aE,Storage:W.hg,CSSStyleSheet:W.ao,StyleSheet:W.ao,TextTrack:W.aF,TextTrackCue:W.ap,VTTCue:W.ap,TextTrackCueList:W.hm,TextTrackList:W.hn,TimeRanges:W.ht,Touch:W.aG,TouchEvent:W.bn,TouchList:W.hw,TrackDefaultList:W.hx,CompositionEvent:W.b4,FocusEvent:W.b4,TextEvent:W.b4,UIEvent:W.b4,URL:W.hS,VideoTrackList:W.i6,WheelEvent:W.b5,Window:W.c3,DOMWindow:W.c3,CSSRuleList:W.ih,ClientRect:W.dm,DOMRect:W.dm,GamepadList:W.il,NamedNodeMap:W.dF,MozNamedAttrMap:W.dF,SpeechRecognitionResultList:W.ix,StyleSheetList:W.iB,SVGLength:P.aW,SVGLengthList:P.f9,SVGNumber:P.b0,SVGNumberList:P.fM,SVGPointList:P.fT,SVGStringList:P.hj,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGScriptElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGTransform:P.b3,SVGTransformList:P.hy,AudioBuffer:P.el,AudioParamMap:P.em,AudioTrackList:P.eo,AudioContext:P.ba,webkitAudioContext:P.ba,BaseAudioContext:P.ba,OfflineAudioContext:P.fN,WebGL2RenderingContext:P.cV,SQLResultSetRowList:P.hd})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.c4.$nativeSuperclassTag="ArrayBufferView"
H.c5.$nativeSuperclassTag="ArrayBufferView"
H.bQ.$nativeSuperclassTag="ArrayBufferView"
H.c6.$nativeSuperclassTag="ArrayBufferView"
H.c7.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
W.c8.$nativeSuperclassTag="EventTarget"
W.c9.$nativeSuperclassTag="EventTarget"
W.ca.$nativeSuperclassTag="EventTarget"
W.cb.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.kP,[])
else X.kP([])})})()
//# sourceMappingURL=test.dart.js.map
