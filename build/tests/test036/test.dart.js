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
a[c]=function(){a[c]=function(){H.nB(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jR"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jR"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jR(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jC:function jC(){},
jb:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
kb:function(){return new P.hp("No element")},
d3:function(a,b,c,d){if(c-b<=32)H.m7(a,b,c,d)
else H.m6(a,b,c,d)},
m7:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.b(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.b(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.Z()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.b(a,q)
C.b.k(a,s,a[q])
s=q}C.b.k(a,s,t)}},
m6:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.c.a0(a4-a3+1,6),d=a3+e,c=a4-e,b=C.c.a0(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
r=p}C.b.k(a2,d,u)
C.b.k(a2,b,s)
C.b.k(a2,c,q)
if(a3<0||a3>=a2.length)return H.b(a2,a3)
C.b.k(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.b(a2,a4)
C.b.k(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.A(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.K()
if(k<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.k(a2,m,a2[o])
C.b.k(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.Z()
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
if(typeof g!=="number")return g.K()
if(g<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.k(a2,m,a2[o])
C.b.k(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.Z()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.Z()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.K()
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
H.d3(a2,a3,o-2,a5)
H.d3(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.b(a2,o)
if(!J.A(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.b(a2,n)
if(!J.A(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.k(a2,m,a2[o])
C.b.k(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.K()
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
break}}}H.d3(a2,o,n,a5)}else H.d3(a2,o,n,a5)},
M:function M(a){this.a=a},
eV:function eV(){},
cJ:function cJ(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fr:function fr(a,b,c){this.a=a
this.b=b
this.$ti=c},
fs:function fs(a,b){this.a=null
this.b=a
this.c=b},
im:function im(a,b,c){this.a=a
this.b=b
this.$ti=c},
io:function io(a,b){this.a=a
this.b=b},
cz:function cz(){},
hV:function hV(){},
dh:function dh(){},
lz:function(){throw H.d(P.w("Cannot modify unmodifiable Map"))},
el:function(a){var u,t=H.nD(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
nn:function(a){return v.types[a]},
kY:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Q(a).$ix},
f:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ai(a)
if(typeof u!=="string")throw H.d(H.ag(a))
return u},
bW:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
lZ:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.b(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.U(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.D(s,q)|32)>t)return}return parseInt(a,b)},
bX:function(a){return H.lQ(a)+H.kN(H.ci(a),0,null)},
lQ:function(a){var u,t,s,r,q,p,o,n=J.Q(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.M||!!n.$ibv){r=C.r(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.el(t.length>1&&C.a.D(t,0)===36?C.a.ag(t,1):t)},
lR:function(){if(!!self.location)return self.location.href
return},
kl:function(a){var u,t,s,r,q=J.ac(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
m_:function(a){var u,t,s,r=H.c([],[P.t])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.r)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.ag(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aE(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.d(H.ag(s))}return H.kl(r)},
km:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.ag(s))
if(s<0)throw H.d(H.ag(s))
if(s>65535)return H.m_(a)}return H.kl(a)},
m0:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
cX:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aE(u,10))>>>0,56320|u&1023)}}throw H.d(P.U(a,0,1114111,null,null))},
bp:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lY:function(a){var u=H.bp(a).getFullYear()+0
return u},
lW:function(a){var u=H.bp(a).getMonth()+1
return u},
lS:function(a){var u=H.bp(a).getDate()+0
return u},
lT:function(a){var u=H.bp(a).getHours()+0
return u},
lV:function(a){var u=H.bp(a).getMinutes()+0
return u},
lX:function(a){var u=H.bp(a).getSeconds()+0
return u},
lU:function(a){var u=H.bp(a).getMilliseconds()+0
return u},
u:function(a){throw H.d(H.ag(a))},
b:function(a,b){if(a==null)J.ac(a)
throw H.d(H.bB(a,b))},
bB:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aj(!0,b,s,null)
u=J.ac(a)
if(!(b<0)){if(typeof u!=="number")return H.u(u)
t=b>=u}else t=!0
if(t)return P.H(b,a,s,null,u)
return P.cY(b,s)},
nh:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bq(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bq(a,c,!0,b,"end",u)
return new P.aj(!0,b,"end",null)},
ag:function(a){return new P.aj(!0,a,null,null)},
ne:function(a){if(typeof a!=="number")throw H.d(H.ag(a))
return a},
d:function(a){var u
if(a==null)a=new P.cT()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.l3})
u.name=""}else u.toString=H.l3
return u},
l3:function(){return J.ai(this.dartException)},
n:function(a){throw H.d(a)},
r:function(a){throw H.d(P.bl(a))},
as:function(a){var u,t,s,r,q,p
a=H.l1(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.q])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hJ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hK:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kv:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kg:function(a,b){return new H.fU(a,b==null?null:b.method)},
jD:function(a,b){var u=b==null,t=u?null:b.method
return new H.fd(a,t,u?null:b.receiver)},
bd:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jp(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aE(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jD(H.f(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kg(H.f(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.l6()
q=$.l7()
p=$.l8()
o=$.l9()
n=$.lc()
m=$.ld()
l=$.lb()
$.la()
k=$.lf()
j=$.le()
i=r.ac(u)
if(i!=null)return f.$1(H.jD(u,i))
else{i=q.ac(u)
if(i!=null){i.method="call"
return f.$1(H.jD(u,i))}else{i=p.ac(u)
if(i==null){i=o.ac(u)
if(i==null){i=n.ac(u)
if(i==null){i=m.ac(u)
if(i==null){i=l.ac(u)
if(i==null){i=o.ac(u)
if(i==null){i=k.ac(u)
if(i==null){i=j.ac(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kg(u,i))}}return f.$1(new H.hU(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.d5()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aj(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.d5()
return a},
jT:function(a){var u
if(a==null)return new H.dX(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dX(a)},
nl:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
nr:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.o("Unsupported number of arguments for wrapped closure"))},
bA:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nr)
a.$identity=u
return u},
ly:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hq().constructor.prototype):Object.create(new H.bE(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ak
if(typeof t!=="number")return t.C()
$.ak=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.k7(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.lu(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.k7(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
lu:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.nn,a)
if(typeof a=="function")if(b)return a
else{u=c?H.k5:H.jt
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
lv:function(a,b,c,d){var u=H.jt
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
k7:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lx(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lv(t,!r,u,b)
if(t===0){r=$.ak
if(typeof r!=="number")return r.C()
$.ak=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bF
return new Function(r+H.f(q==null?$.bF=H.eA("self"):q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ak
if(typeof r!=="number")return r.C()
$.ak=r+1
o+=r
r="return function("+o+"){return this."
q=$.bF
return new Function(r+H.f(q==null?$.bF=H.eA("self"):q)+"."+H.f(u)+"("+o+");}")()},
lw:function(a,b,c,d){var u=H.jt,t=H.k5
switch(b?-1:a){case 0:throw H.d(H.m4("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lx:function(a,b){var u,t,s,r,q,p,o,n=$.bF
if(n==null)n=$.bF=H.eA("self")
u=$.k4
if(u==null)u=$.k4=H.eA("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lw(s,!q,t,b)
if(s===1){n="return function(){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+");"
u=$.ak
if(typeof u!=="number")return u.C()
$.ak=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+", "+o+");"
u=$.ak
if(typeof u!=="number")return u.C()
$.ak=u+1
return new Function(n+u+"}")()},
jR:function(a,b,c,d,e,f,g){return H.ly(a,b,c,d,!!e,!!f,g)},
jt:function(a){return a.a},
k5:function(a){return a.c},
eA:function(a){var u,t,s,r=new H.bE("self","target","receiver","name"),q=J.jA(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
nv:function(a,b){throw H.d(H.lt(a,H.el(b.substring(2))))},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else u=!0
if(u)return a
H.nv(a,b)},
nj:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
lt:function(a,b){return new H.eB("CastError: "+P.jx(a)+": type '"+H.f(H.na(a))+"' is not a subtype of type '"+b+"'")},
na:function(a){var u,t=J.Q(a)
if(!!t.$ibH){u=H.nj(t)
if(u!=null)return H.nw(u)
return"Closure"}return H.bX(a)},
nB:function(a){throw H.d(new P.eO(a))},
m4:function(a){return new H.ha(a)},
kV:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
ci:function(a){if(a==null)return
return a.$ti},
ob:function(a,b,c){return H.jm(a["$a"+H.f(c)],H.ci(b))},
nm:function(a,b,c,d){var u=H.jm(a["$a"+H.f(c)],H.ci(b))
return u==null?null:u[d]},
kW:function(a,b,c){var u=H.jm(a["$a"+H.f(b)],H.ci(a))
return u==null?null:u[c]},
ej:function(a,b){var u=H.ci(a)
return u==null?null:u[b]},
nw:function(a){return H.bb(a,null)},
bb:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.el(a[0].name)+H.kN(a,1,b)
if(typeof a=="function")return H.el(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.f(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.f(b[t])}if('func' in a)return H.mJ(a,b)
if('futureOr' in a)return"FutureOr<"+H.bb("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mJ:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.q])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.a.C(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a_)p+=" extends "+H.bb(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bb(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bb(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bb(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.nk(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bb(d[c],a0)+(" "+H.f(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kN:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.O("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bb(p,c)}return"<"+u.h(0)+">"},
jm:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
o9:function(a,b,c){return a.apply(b,H.jm(J.Q(b)["$a"+H.f(c)],H.ci(b)))},
oa:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ns:function(a){var u,t,s,r,q=$.kX.$1(a),p=$.j8[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jf[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.kS.$2(a,q)
if(q!=null){p=$.j8[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jf[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jk(u)
$.j8[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jf[q]=u
return u}if(s==="-"){r=H.jk(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.l_(a,u)
if(s==="*")throw H.d(P.hT(q))
if(v.leafTags[q]===true){r=H.jk(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.l_(a,u)},
l_:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jV(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jk:function(a){return J.jV(a,!1,null,!!a.$ix)},
nt:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jk(u)
else return J.jV(u,c,null,null)},
np:function(){if(!0===$.jU)return
$.jU=!0
H.nq()},
nq:function(){var u,t,s,r,q,p,o,n
$.j8=Object.create(null)
$.jf=Object.create(null)
H.no()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.l0.$1(q)
if(p!=null){o=H.nt(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
no:function(){var u,t,s,r,q,p,o=C.D()
o=H.bz(C.E,H.bz(C.F,H.bz(C.t,H.bz(C.t,H.bz(C.G,H.bz(C.H,H.bz(C.I(C.r),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kX=new H.jc(r)
$.kS=new H.jd(q)
$.l0=new H.je(p)},
bz:function(a,b){return a(b)||b},
lG:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(P.L("Illegal RegExp pattern ("+String(p)+")",a,null))},
ny:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
ni:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
l1:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
l2:function(a,b,c){var u=H.nz(a,b,c)
return u},
nz:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.l1(b),'g'),H.ni(c))},
eH:function eH(){},
eI:function eI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hJ:function hJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fU:function fU(a,b){this.a=a
this.b=b},
fd:function fd(a,b,c){this.a=a
this.b=b
this.c=c},
hU:function hU(a){this.a=a},
jp:function jp(a){this.a=a},
dX:function dX(a){this.a=a
this.b=null},
bH:function bH(){},
hw:function hw(){},
hq:function hq(){},
bE:function bE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eB:function eB(a){this.a=a},
ha:function ha(a){this.a=a},
K:function K(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fh:function fh(a,b){this.a=a
this.b=b
this.c=null},
fi:function fi(a,b){this.a=a
this.$ti=b},
fj:function fj(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jc:function jc(a){this.a=a},
jd:function jd(a){this.a=a},
je:function je(a){this.a=a},
fc:function fc(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ba:function(a){return a},
lP:function(a){return new Int8Array(a)},
at:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bB(b,a))},
mH:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.nh(a,b,c))
return b},
bS:function bS(){},
aZ:function aZ(){},
cP:function cP(){},
bT:function bT(){},
cQ:function cQ(){},
fO:function fO(){},
fP:function fP(){},
fQ:function fQ(){},
fR:function fR(){},
fS:function fS(){},
cR:function cR(){},
bU:function bU(){},
c6:function c6(){},
c7:function c7(){},
c8:function c8(){},
c9:function c9(){},
nk:function(a){return J.kc(a?Object.keys(a):[],null)},
nD:function(a){return v.mangledGlobalNames[a]},
nu:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jV:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ja:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jU==null){H.np()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.hT("Return interceptor for "+H.f(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jY()]
if(r!=null)return r
r=H.ns(a)
if(r!=null)return r
if(typeof a=="function")return C.O
u=Object.getPrototypeOf(a)
if(u==null)return C.z
if(u===Object.prototype)return C.z
if(typeof s=="function"){Object.defineProperty(s,$.jY(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
lF:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.k2(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.U(a,0,4294967295,"length",null))
return J.kc(new Array(a),b)},
kc:function(a,b){return J.jA(H.c(a,[b]))},
jA:function(a){a.fixed$length=Array
return a},
Q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cD.prototype
return J.cC.prototype}if(typeof a=="string")return J.aV.prototype
if(a==null)return J.cE.prototype
if(typeof a=="boolean")return J.fb.prototype
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aW.prototype
return a}if(a instanceof P.a_)return a
return J.ja(a)},
ch:function(a){if(typeof a=="string")return J.aV.prototype
if(a==null)return a
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aW.prototype
return a}if(a instanceof P.a_)return a
return J.ja(a)},
j9:function(a){if(a==null)return a
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aW.prototype
return a}if(a instanceof P.a_)return a
return J.ja(a)},
kU:function(a){if(typeof a=="number")return J.bO.prototype
if(typeof a=="string")return J.aV.prototype
if(a==null)return a
if(!(a instanceof P.a_))return J.bv.prototype
return a},
jS:function(a){if(typeof a=="string")return J.aV.prototype
if(a==null)return a
if(!(a instanceof P.a_))return J.bv.prototype
return a},
ei:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aW.prototype
return a}if(a instanceof P.a_)return a
return J.ja(a)},
A:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).n(a,b)},
k_:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kU(a).p(a,b)},
cl:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kY(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ch(a).i(a,b)},
jq:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.kY(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.j9(a).k(a,b,c)},
ln:function(a,b){return J.jS(a).D(a,b)},
lo:function(a,b,c){return J.ei(a).ff(a,b,c)},
lp:function(a,b,c,d){return J.ei(a).fB(a,b,c,d)},
lq:function(a,b){return J.jS(a).U(a,b)},
jr:function(a,b){return J.kU(a).fL(a,b)},
js:function(a,b){return J.j9(a).G(a,b)},
lr:function(a,b,c,d){return J.ei(a).fY(a,b,c,d)},
k0:function(a,b){return J.j9(a).F(a,b)},
k1:function(a){return J.ei(a).gbJ(a)},
cm:function(a){return J.Q(a).gE(a)},
bg:function(a){return J.j9(a).gV(a)},
ac:function(a){return J.ch(a).gj(a)},
ls:function(a,b){return J.ei(a).hs(a,b)},
ai:function(a){return J.Q(a).h(a)},
a:function a(){},
fb:function fb(){},
cE:function cE(){},
cF:function cF(){},
fY:function fY(){},
bv:function bv(){},
aW:function aW(){},
aU:function aU(a){this.$ti=a},
jB:function jB(a){this.$ti=a},
a1:function a1(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bO:function bO(){},
cD:function cD(){},
cC:function cC(){},
aV:function aV(){}},P={
ml:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.nb()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bA(new P.iq(s),1)).observe(u,{childList:true})
return new P.ip(s,u,t)}else if(self.setImmediate!=null)return P.nc()
return P.nd()},
mm:function(a){self.scheduleImmediate(H.bA(new P.ir(a),0))},
mn:function(a){self.setImmediate(H.bA(new P.is(a),0))},
mo:function(a){P.jF(C.p,a)},
jF:function(a,b){var u=C.c.a0(a.a,1000)
return P.mr(u<0?0:u,b)},
ku:function(a,b){var u=C.c.a0(a.a,1000)
return P.ms(u<0?0:u,b)},
mr:function(a,b){var u=new P.e2()
u.dQ(a,b)
return u},
ms:function(a,b){var u=new P.e2()
u.dR(a,b)
return u},
n4:function(){var u,t
for(;u=$.by,u!=null;){$.cg=null
t=u.b
$.by=t
if(t==null)$.cf=null
u.a.$0()}},
n9:function(){$.jP=!0
try{P.n4()}finally{$.cg=null
$.jP=!1
if($.by!=null)$.jZ().$1(P.kT())}},
n7:function(a){var u=new P.dq(a)
if($.by==null){$.by=$.cf=u
if(!$.jP)$.jZ().$1(P.kT())}else $.cf=$.cf.b=u},
n8:function(a){var u,t,s=$.by
if(s==null){P.n7(a)
$.cg=$.cf
return}u=new P.dq(a)
t=$.cg
if(t==null){u.b=s
$.by=$.cg=u}else{u.b=t.b
$.cg=t.b=u
if(u.b==null)$.cf=u}},
kt:function(a,b){var u=$.af
if(u===C.f)return P.jF(a,b)
return P.jF(a,u.fI(b))},
mc:function(a,b){var u=$.af
if(u===C.f)return P.ku(a,b)
return P.ku(a,u.cP(b,P.db))},
kO:function(a,b,c,d,e){var u={}
u.a=d
P.n8(new P.j5(u,e))},
n5:function(a,b,c,d){var u,t=$.af
if(t===c)return d.$0()
$.af=c
u=t
try{t=d.$0()
return t}finally{$.af=u}},
n6:function(a,b,c,d,e){var u,t=$.af
if(t===c)return d.$1(e)
$.af=c
u=t
try{t=d.$1(e)
return t}finally{$.af=u}},
iq:function iq(a){this.a=a},
ip:function ip(a,b,c){this.a=a
this.b=b
this.c=c},
ir:function ir(a){this.a=a},
is:function is(a){this.a=a},
e2:function e2(){this.c=0},
iQ:function iQ(a,b){this.a=a
this.b=b},
iP:function iP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dq:function dq(a){this.a=a
this.b=null},
d7:function d7(){},
ht:function ht(){},
db:function db(){},
iZ:function iZ(){},
j5:function j5(a,b){this.a=a
this.b=b},
iF:function iF(){},
iG:function iG(a,b){this.a=a
this.b=b},
iH:function iH(a,b,c){this.a=a
this.b=b
this.c=c},
lH:function(a,b){return new H.K([a,b])},
kd:function(a,b){return new H.K([a,b])},
lJ:function(a){return H.nl(a,new H.K([null,null]))},
lK:function(a){return new P.iC([a])},
jK:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mq:function(a,b){var u=new P.dF(a,b)
u.c=a.e
return u},
lE:function(a,b,c){var u,t
if(P.jQ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.q])
$.a3.push(a)
try{P.mK(a,u)}finally{if(0>=$.a3.length)return H.b($.a3,-1)
$.a3.pop()}t=P.kp(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
jz:function(a,b,c){var u,t
if(P.jQ(a))return b+"..."+c
u=new P.O(b)
$.a3.push(a)
try{t=u
t.a=P.kp(t.a,a,", ")}finally{if(0>=$.a3.length)return H.b($.a3,-1)
$.a3.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jQ:function(a){var u,t
for(u=$.a3.length,t=0;t<u;++t)if(a===$.a3[t])return!0
return!1},
mK:function(a,b){var u,t,s,r,q,p,o,n=a.gV(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.v())return
u=H.f(n.gI(n))
b.push(u)
m+=u.length+2;++l}if(!n.v()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gI(n);++l
if(!n.v()){if(l<=4){b.push(H.f(r))
return}t=H.f(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gI(n);++l
for(;n.v();r=q,q=p){p=n.gI(n);++l
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
lI:function(a,b,c){var u=P.lH(b,c)
a.F(0,new P.fk(u))
return u},
jE:function(a){var u,t={}
if(P.jQ(a))return"{...}"
u=new P.O("")
try{$.a3.push(a)
u.a+="{"
t.a=!0
J.k0(a,new P.fp(t,u))
u.a+="}"}finally{if(0>=$.a3.length)return H.b($.a3,-1)
$.a3.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iC:function iC(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iD:function iD(a){this.a=a
this.c=this.b=null},
dF:function dF(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fk:function fk(a){this.a=a},
fl:function fl(){},
p:function p(){},
fo:function fo(){},
fp:function fp(a,b){this.a=a
this.b=b},
ax:function ax(){},
iR:function iR(){},
fq:function fq(){},
di:function di(a,b){this.a=a
this.$ti=b},
iI:function iI(){},
dG:function dG(){},
e7:function e7(){},
mf:function(a,b,c,d){if(b instanceof Uint8Array)return P.mg(!1,b,c,d)
return},
mg:function(a,b,c,d){var u,t,s=$.lg()
if(s==null)return
u=0===c
if(u&&!0)return P.jI(s,b)
t=b.length
d=P.b2(c,d,t)
if(u&&d===t)return P.jI(s,b)
return P.jI(s,b.subarray(c,d))},
jI:function(a,b){if(P.mi(b))return
return P.mj(a,b)},
mj:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.bd(t)}return},
mi:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
mh:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.bd(t)}return},
kQ:function(a,b,c){var u,t,s
for(u=J.ch(a),t=b;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.af()
if((s&127)!==s)return t-b}return c-b},
k3:function(a,b,c,d,e,f){if(C.c.b3(f,4)!==0)throw H.d(P.L("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.L("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.L("Invalid base64 padding, more than two '=' characters",a,b))},
ex:function ex(){},
ey:function ey(){},
eD:function eD(){},
eJ:function eJ(){},
eW:function eW(){},
i2:function i2(){},
i4:function i4(){},
iY:function iY(a){this.b=0
this.c=a},
i3:function i3(a){this.a=a},
iX:function iX(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
ek:function(a,b,c){var u=H.lZ(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.L(a,null,null))},
lC:function(a){if(a instanceof H.bH)return a.h(0)
return"Instance of '"+H.f(H.bX(a))+"'"},
lL:function(a,b,c){var u,t,s=J.lF(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
ke:function(a,b,c){var u,t=H.c([],[c])
for(u=J.bg(a);u.v();)t.push(u.gI(u))
if(b)return t
return J.jA(t)},
bZ:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.b2(b,c,u)
return H.km(b>0||c<u?C.b.dE(a,b,c):a)}if(!!J.Q(a).$ibU)return H.m0(a,b,P.b2(b,c,a.length))
return P.m8(a,b,c)},
m8:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.d(P.U(b,0,J.ac(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.U(c,b,J.ac(a),q,q))
t=J.bg(a)
for(s=0;s<b;++s)if(!t.v())throw H.d(P.U(b,0,s,q,q))
r=[]
if(u)for(;t.v();)r.push(t.gI(t))
else for(s=b;s<c;++s){if(!t.v())throw H.d(P.U(c,b,s,q,q))
r.push(t.gI(t))}return H.km(r)},
m2:function(a){return new H.fc(a,H.lG(a,!1,!0,!1,!1,!1))},
kp:function(a,b,c){var u=J.bg(b)
if(!u.v())return a
if(c.length===0){do a+=H.f(u.gI(u))
while(u.v())}else{a+=H.f(u.gI(u))
for(;u.v();)a=a+c+H.f(u.gI(u))}return a},
kx:function(){var u=H.lR()
if(u!=null)return P.me(u)
throw H.d(P.w("'Uri.base' is not supported"))},
iW:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.ll().b
if(typeof b!=="string")H.n(H.ag(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.gfX().bK(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.cX(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lA:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lB:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ct:function(a){if(a>=10)return""+a
return"0"+a},
k9:function(a){return new P.aP(1000*a)},
jx:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ai(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lC(a)},
eq:function(a){return new P.aj(!1,null,null,a)},
k2:function(a,b,c){return new P.aj(!0,a,b,c)},
cY:function(a,b){return new P.bq(null,null,!0,a,b,"Value not in range")},
U:function(a,b,c,d,e){return new P.bq(b,c,!0,a,d,"Invalid value")},
b2:function(a,b,c){if(0>a||a>c)throw H.d(P.U(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.U(b,a,c,"end",null))
return b}return c},
kn:function(a,b){if(typeof a!=="number")return a.K()
if(a<0)throw H.d(P.U(a,0,null,b,null))},
H:function(a,b,c,d,e){var u=e==null?J.ac(b):e
return new P.f9(u,!0,a,c,"Index out of range")},
w:function(a){return new P.hW(a)},
hT:function(a){return new P.hS(a)},
bl:function(a){return new P.eG(a)},
o:function(a){return new P.dy(a)},
L:function(a,b,c){return new P.f5(a,b,c)},
lM:function(a,b,c){var u,t,s=H.c([],[c])
C.b.sj(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.b(s,u)
s[u]=t}return s},
jX:function(a){H.nu(a)},
me:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.D(a,4)^58)*3|C.a.D(a,0)^100|C.a.D(a,1)^97|C.a.D(a,2)^116|C.a.D(a,3)^97)>>>0
if(u===0)return P.kw(e<e?C.a.q(a,0,e):a,5,f).gdw()
else if(u===32)return P.kw(C.a.q(a,5,e),0,f).gdw()}t=new Array(8)
t.fixed$length=Array
s=H.c(t,[P.t])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.kP(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.hD()
if(r>=0)if(P.kP(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.C()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.K()
if(typeof n!=="number")return H.u(n)
if(m<n)n=m
if(typeof o!=="number")return o.K()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.K()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.K()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.a2(a,"..",o)))j=n>o+2&&C.a.a2(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.a2(a,"file",0)){if(q<=0){if(!C.a.a2(a,"/",o)){i="file:///"
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
a=C.a.aH(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a2(a,"http",0)){if(t&&p+3===o&&C.a.a2(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aH(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a2(a,"https",0)){if(t&&p+4===o&&C.a.a2(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aH(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.q(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.iJ(a,r,q,p,o,n,m,k)}return P.mt(a,0,e,r,q,p,o,n,m,k)},
kz:function(a){var u=P.q
return C.b.h1(H.c(a.split("&"),[u]),P.kd(u,u),new P.i0(C.e))},
md:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.hY(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.U(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.ek(C.a.q(a,s,t),n,n)
if(typeof p!=="number")return p.Z()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.b(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.ek(C.a.q(a,s,c),n,n)
if(typeof p!=="number")return p.Z()
if(p>255)k.$2(l,s)
if(r>=u)return H.b(j,r)
j[r]=p
return j},
ky:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.hZ(a),d=new P.i_(e,a)
if(a.length<2)e.$1("address is too short")
u=H.c([],[P.t])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.U(a,t)
if(p===58){if(t===b){++t
if(C.a.U(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gaw(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.md(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.b(l,i)
l[i]=0
f=i+1
if(f>=k)return H.b(l,f)
l[f]=0
i+=2}else{f=C.c.aE(h,8)
if(i<0||i>=k)return H.b(l,i)
l[i]=f
f=i+1
if(f>=k)return H.b(l,f)
l[f]=h&255
i+=2}}return l},
mt:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.mB(a,b,d)
else{if(d===b)P.bx(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.mC(a,u,e-1):""
s=P.my(a,e,f,!1)
if(typeof f!=="number")return f.C()
r=f+1
if(typeof g!=="number")return H.u(g)
q=r<g?P.mA(P.ek(C.a.q(a,r,g),new P.iS(a,f),n),j):n}else{q=n
s=q
t=""}p=P.mz(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.K()
o=h<i?P.jM(a,h+1,i,n):n
return new P.bw(j,t,s,q,p,o,i<c?P.mx(a,i+1,c):n)},
kH:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bx:function(a,b,c){throw H.d(P.L(c,a,b))},
mA:function(a,b){if(a!=null&&a===P.kH(b))return
return a},
my:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.U(a,b)===91){if(typeof c!=="number")return c.H()
u=c-1
if(C.a.U(a,u)!==93)P.bx(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.mv(a,t,u)
if(typeof s!=="number")return s.K()
if(s<u){r=s+1
q=P.kM(a,C.a.a2(a,"25",r)?s+3:r,u,"%25")}else q=""
P.ky(a,t,s)
return C.a.q(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.u(c)
p=b
for(;p<c;++p)if(C.a.U(a,p)===58){s=C.a.ba(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.kM(a,C.a.a2(a,"25",r)?s+3:r,c,"%25")}else q=""
P.ky(a,b,s)
return"["+C.a.q(a,b,s)+q+"]"}return P.mE(a,b,c)},
mv:function(a,b,c){var u,t=C.a.ba(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.u(c)
u=t<c}else u=!1
return u?t:c},
kM:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.O(d):null
if(typeof c!=="number")return H.u(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.U(a,u)
if(r===37){q=P.jN(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.O("")
o=l.a+=C.a.q(a,t,u)
if(p)q=C.a.q(a,u,u+3)
else if(q==="%")P.bx(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.O("")
if(t<u){l.a+=C.a.q(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.U(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.O("")
l.a+=C.a.q(a,t,u)
l.a+=P.jL(r)
u+=m
t=u}}}if(l==null)return C.a.q(a,b,c)
if(t<c)l.a+=C.a.q(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
mE:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.u(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.U(a,u)
if(q===37){p=P.jN(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.O("")
n=C.a.q(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.q(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.b(C.x,o)
o=(C.x[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.O("")
if(t<u){s.a+=C.a.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.b(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bx(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.U(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.O("")
n=C.a.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.jL(q)
u+=l
t=u}}}}if(s==null)return C.a.q(a,b,c)
if(t<c){n=C.a.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
mB:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.kJ(C.a.D(a,b)))P.bx(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.D(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.b(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bx(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.q(a,b,c)
return P.mu(t?a.toLowerCase():a)},
mu:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mC:function(a,b,c){return P.ce(a,b,c,C.Q,!1)},
mz:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.ce(a,b,c,C.y,!0):C.j.hX(d,new P.iT(),P.q).t(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.aa(u,"/"))u="/"+u
return P.mD(u,e,f)},
mD:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.aa(a,"/"))return P.mF(a,!u||c)
return P.mG(a)},
jM:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.d(P.eq("Both query and queryParameters specified"))
return P.ce(a,b,c,C.l,!0)}if(d==null)return
u=new P.O("")
t.a=""
d.F(0,new P.iU(new P.iV(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
mx:function(a,b,c){return P.ce(a,b,c,C.l,!0)},
jN:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.U(a,b+1)
t=C.a.U(a,p)
s=H.jb(u)
r=H.jb(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aE(q,4)
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.cX(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.q(a,b,b+3).toUpperCase()
return},
jL:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.c(u,[P.t])
t[0]=37
t[1]=C.a.D(m,a>>>4)
t[2]=C.a.D(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.c(u,[P.t])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.fq(a,6*r)&63|s
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
q+=3}}return P.bZ(t,0,null)},
ce:function(a,b,c,d,e){var u=P.kL(a,b,c,d,e)
return u==null?C.a.q(a,b,c):u},
kL:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.K()
if(typeof c!=="number")return H.u(c)
if(!(o<c))break
c$0:{u=C.a.U(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.b(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.jN(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.b(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bx(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.U(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.jL(u)}}if(m==null)m=new P.O("")
m.a+=C.a.q(a,n,o)
m.a+=H.f(s)
if(typeof r!=="number")return H.u(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.K()
if(n<c)m.a+=C.a.q(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
kK:function(a){if(C.a.aa(a,"."))return!0
return C.a.df(a,"/.")!==-1},
mG:function(a){var u,t,s,r,q,p,o
if(!P.kK(a))return a
u=H.c([],[P.q])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.A(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.b(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.t(u,"/")},
mF:function(a,b){var u,t,s,r,q,p
if(!P.kK(a))return!b?P.kI(a):a
u=H.c([],[P.q])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gaw(u)!==".."){if(0>=u.length)return H.b(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.b(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gaw(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.b(u,0)
t=P.kI(u[0])
if(0>=u.length)return H.b(u,0)
u[0]=t}return C.b.t(u,"/")},
kI:function(a){var u,t,s,r=a.length
if(r>=2&&P.kJ(J.ln(a,0)))for(u=1;u<r;++u){t=C.a.D(a,u)
if(t===58)return C.a.q(a,0,u)+"%3A"+C.a.ag(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.b(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
mw:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.D(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.eq("Invalid URL encoding"))}}return u},
jO:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.D(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.q(a,b,c)
else r=new H.M(C.a.q(a,b,c))}else{r=H.c([],[P.t])
for(s=a.length,q=b;q<c;++q){t=C.a.D(a,q)
if(t>127)throw H.d(P.eq("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.eq("Truncated URI"))
r.push(P.mw(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.i3(!1).bK(r)},
kJ:function(a){var u=a|32
return 97<=u&&u<=122},
kw:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.t])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.D(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.L(m,a,t))}}if(s<0&&t>b)throw H.d(P.L(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.D(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gaw(l)
if(r!==44||t!==p+7||!C.a.a2(a,"base64",p+1))throw H.d(P.L("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.C.ha(0,a,o,u)
else{n=P.kL(a,o,u,C.l,!0)
if(n!=null)a=C.a.aH(a,o,u,n)}return new P.hX(a,l,c)},
mI:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.lM(22,new P.j0(),P.bs),n=new P.j_(o),m=new P.j1(),l=new P.j2(),k=n.$2(0,225)
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
kP:function(a,b,c,d,e){var u,t,s,r,q,p=$.lm()
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
bc:function bc(){},
a4:function a4(a,b){this.a=a
this.b=b},
J:function J(){},
aP:function aP(a){this.a=a},
eT:function eT(){},
eU:function eU(){},
bn:function bn(){},
cT:function cT(){},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bq:function bq(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f9:function f9(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hW:function hW(a){this.a=a},
hS:function hS(a){this.a=a},
hp:function hp(a){this.a=a},
eG:function eG(a){this.a=a},
fX:function fX(){},
d5:function d5(){},
eO:function eO(a){this.a=a},
dy:function dy(a){this.a=a},
f5:function f5(a,b,c){this.a=a
this.b=b
this.c=c},
t:function t(){},
h:function h(){},
fa:function fa(){},
m:function m(){},
N:function N(){},
b_:function b_(){},
a8:function a8(){},
a_:function a_(){},
q:function q(){},
O:function O(a){this.a=a},
i0:function i0(a){this.a=a},
hY:function hY(a){this.a=a},
hZ:function hZ(a){this.a=a},
i_:function i_(a,b){this.a=a
this.b=b},
bw:function bw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
iS:function iS(a,b){this.a=a
this.b=b},
iT:function iT(){},
iV:function iV(a,b){this.a=a
this.b=b},
iU:function iU(a){this.a=a},
hX:function hX(a,b,c){this.a=a
this.b=b
this.c=c},
j0:function j0(){},
j_:function j_(a){this.a=a},
j1:function j1(){},
j2:function j2(){},
iJ:function iJ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
iw:function iw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
aK:function(a){var u,t,s,r,q
if(a==null)return
u=P.kd(P.q,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r){q=t[r]
u.k(0,q,a[q])}return u},
nf:function(a){var u={}
a.F(0,new P.j6(u))
return u},
iL:function iL(){},
iN:function iN(a,b){this.a=a
this.b=b},
j6:function j6(a){this.a=a},
iM:function iM(a,b){this.a=a
this.b=b},
f1:function f1(a,b){this.a=a
this.b=b},
f2:function f2(){},
f3:function f3(){},
iB:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mp:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iE:function iE(){},
a7:function a7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aX:function aX(){},
ff:function ff(){},
b0:function b0(){},
fV:function fV(){},
h1:function h1(){},
hu:function hu(){},
j:function j(){},
b4:function b4(){},
hI:function hI(){},
dD:function dD(){},
dE:function dE(){},
dO:function dO(){},
dP:function dP(){},
dZ:function dZ(){},
e_:function e_(){},
e5:function e5(){},
e6:function e6(){},
bs:function bs(){},
es:function es(){},
et:function et(){},
eu:function eu(a){this.a=a},
ev:function ev(){},
bh:function bh(){},
fW:function fW(){},
dr:function dr(){},
d1:function d1(){},
ho:function ho(){},
dV:function dV(){},
dW:function dW(){}},W={
k6:function(){var u=document.createElement("canvas")
return u},
jw:function(a){return"wheel"},
lD:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.bd(u)}return s},
iA:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kG:function(a,b,c,d){var u=W.iA(W.iA(W.iA(W.iA(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
W:function(a,b,c,d){var u=W.kR(new W.iy(c),W.i)
if(u!=null&&!0)J.lp(a,b,u,!1)
return new W.ix(a,b,u,!1)},
kR:function(a,b){var u=$.af
if(u===C.f)return a
return u.cP(a,b)},
k:function k(){},
em:function em(){},
eo:function eo(){},
ep:function ep(){},
bi:function bi(){},
bj:function bj(){},
aO:function aO(){},
eK:function eK(){},
F:function F(){},
bI:function bI(){},
eL:function eL(){},
a9:function a9(){},
al:function al(){},
eM:function eM(){},
eN:function eN(){},
eP:function eP(){},
eQ:function eQ(){},
cv:function cv(){},
cw:function cw(){},
eR:function eR(){},
eS:function eS(){},
iu:function iu(a,b){this.a=a
this.b=b},
X:function X(){},
i:function i(){},
e:function e(){},
am:function am(){},
bJ:function bJ(){},
f0:function f0(){},
f4:function f4(){},
aw:function aw(){},
f7:function f7(){},
bL:function bL(){},
bM:function bM(){},
bo:function bo(){},
fm:function fm(){},
fH:function fH(){},
bQ:function bQ(){},
fI:function fI(){},
fJ:function fJ(a){this.a=a},
fK:function fK(){},
fL:function fL(a){this.a=a},
ay:function ay(){},
fM:function fM(){},
ap:function ap(){},
it:function it(a){this.a=a},
C:function C(){},
cS:function cS(){},
aB:function aB(){},
fZ:function fZ(){},
h8:function h8(){},
h9:function h9(a){this.a=a},
hb:function hb(){},
aD:function aD(){},
hl:function hl(){},
aE:function aE(){},
hm:function hm(){},
aF:function aF(){},
hr:function hr(){},
hs:function hs(a){this.a=a},
aq:function aq(){},
aG:function aG(){},
ar:function ar(){},
hx:function hx(){},
hy:function hy(){},
hD:function hD(){},
aH:function aH(){},
br:function br(){},
hG:function hG(){},
hH:function hH(){},
b5:function b5(){},
i1:function i1(){},
il:function il(){},
b9:function b9(){},
c5:function c5(){},
iv:function iv(){},
dt:function dt(){},
iz:function iz(){},
dL:function dL(){},
iK:function iK(){},
iO:function iO(){},
ix:function ix(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iy:function iy(a){this.a=a},
G:function G(){},
cA:function cA(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
ds:function ds(){},
du:function du(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
dz:function dz(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
dM:function dM(){},
dN:function dN(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
ca:function ca(){},
cb:function cb(){},
dT:function dT(){},
dU:function dU(){},
dY:function dY(){},
e0:function e0(){},
e1:function e1(){},
cc:function cc(){},
cd:function cd(){},
e3:function e3(){},
e4:function e4(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){}},T={
Y:function(a){var u=new T.hc()
u.dL(a)
return u},
en:function en(){},
cB:function cB(){},
cL:function cL(){},
aA:function aA(){this.a=null},
hc:function hc(){this.a=null},
kq:function(a){var u=new T.hA()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
c_:function c_(){},
hz:function hz(){},
hA:function hA(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},R={d6:function d6(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},dc:function dc(a,b,c){this.a=a
this.b=b
this.c=c},dd:function dd(a){this.b=a
this.c=null},hE:function hE(){this.c=this.b=this.a=null},df:function df(a){this.b=a
this.a=this.c=null}},O={
eE:function(a){var u=new O.au([a])
u.b4(a)
return u},
au:function au(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bP:function bP(){this.b=this.a=null},
kr:function(a,b){var u,t,s,r,q=new O.b3()
q.sad(b)
q.scU(null)
u=V.d0()
if(!J.A(q.c,u)){t=q.c
q.c=u
s=new D.v("source",t,u)
s.b=!0
q.O(s)}r=a==null?V.d0():a
if(!J.A(q.d,r)){t=q.d
q.d=r
s=new D.v("destination",t,r)
s.b=!0
q.O(s)}if(q.e!==!1){q.e=!1
s=new D.v("flip",!0,!1)
s.b=!0
q.O(s)}q.f=null
return q},
cM:function cM(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fA:function fA(a,b){this.a=a
this.b=b},
fB:function fB(){},
fC:function fC(a,b){this.a=a
this.b=b},
fD:function fD(){},
fE:function fE(a,b){this.a=a
this.b=b},
fF:function fF(){},
fu:function fu(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cN:function cN(){},
fv:function fv(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
an:function an(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fx:function fx(){var _=this
_.e=_.d=_.c=_.b=null},
fy:function fy(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fz:function fz(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d8:function d8(){},
d9:function d9(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
b3:function b3(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
ka:function(){var u,t=new E.av()
t.a=""
t.b=!0
u=O.eE(E.av)
t.y=u
u.az(t.ghb(),t.ghe())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbj(0,null)
return t},
m3:function(a,b){var u=new E.h4(a)
u.dK(a,b)
return u},
mb:function(a,b,c,d,e){var u,t,s=J.Q(a)
if(!!s.$ibj)return E.ks(a,!0,!0,!0,!1)
u=W.k6()
t=u.style
t.width="100%"
t.height="100%"
s.gbJ(a).l(0,u)
return E.ks(u,!0,!0,!0,!1)},
ks:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.da(),p=C.n.dA(a,"webgl2",P.lJ(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.n(P.o("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.m3(p,a)
p.getParameter(3379)
p.getParameter(34076)
u=new X.dj(a)
t=new X.fe()
t.c=new X.aa(!1,!1,!1)
t.d=P.lK(P.t)
u.b=t
t=new X.fN(u)
t.f=0
t.r=V.aC()
t.x=V.aC()
t.ch=t.Q=1
u.c=t
t=new X.fn(u)
t.r=0
t.x=V.aC()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hF(u)
t.f=V.aC()
t.r=V.aC()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.c([],[[P.d7,P.a_]])
u.z=t
s=document
t.push(W.W(s,"contextmenu",u.ges(),!1))
u.z.push(W.W(a,"focus",u.geD(),!1))
u.z.push(W.W(a,"blur",u.gem(),!1))
u.z.push(W.W(s,"keyup",u.geH(),!1))
u.z.push(W.W(s,"keydown",u.geF(),!1))
u.z.push(W.W(a,"mousedown",u.geL(),!1))
u.z.push(W.W(a,"mouseup",u.geP(),!1))
u.z.push(W.W(a,r,u.geN(),!1))
t=u.z
W.jw(a)
W.jw(a)
t.push(W.W(a,W.jw(a),u.geR(),!1))
u.z.push(W.W(s,r,u.gev(),!1))
u.z.push(W.W(s,"mouseup",u.gex(),!1))
u.z.push(W.W(s,"pointerlockchange",u.geT(),!1))
u.z.push(W.W(a,"touchstart",u.gf8(),!1))
u.z.push(W.W(a,"touchend",u.gf4(),!1))
u.z.push(W.W(a,"touchmove",u.gf6(),!1))
q.r=u
q.Q=!0
q.ch=!1
q.cx=new P.a4(Date.now(),!1)
q.cy=0
q.cD()
return q},
ez:function ez(){},
av:function av(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h4:function h4(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h5:function h5(a){this.a=a},
h6:function h6(a){this.a=a},
h7:function h7(a){this.a=a},
da:function da(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=null},
hC:function hC(a){this.a=a}},Z={
kF:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.ba(c)),35044)
a.bindBuffer(b,null)
return new Z.dn(b,u)},
ab:function(a){return new Z.b8(a)},
dn:function dn(a,b){this.a=a
this.b=b},
co:function co(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dp:function dp(a){this.a=a},
bG:function bG(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bN:function bN(a,b,c){this.a=a
this.b=b
this.c=c},
b8:function b8(a){this.a=a}},D={
B:function(){var u=new D.aQ()
u.d=0
return u},
eC:function eC(){},
aQ:function aQ(){var _=this
_.d=_.c=_.b=_.a=null},
eY:function eY(a){this.a=a},
eZ:function eZ(a){this.a=a},
P:function P(){this.b=null},
aS:function aS(){this.b=null},
aT:function aT(){this.b=null},
v:function v(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
bm:function bm(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a5:function a5(){},
cH:function cH(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
h_:function h_(){},
hn:function hn(){}},X={cp:function cp(a,b){this.a=a
this.b=b},cG:function cG(a,b){this.a=a
this.b=b},fe:function fe(){var _=this
_.d=_.c=_.b=_.a=null},cK:function cK(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fn:function fn(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aa:function aa(a,b,c){this.a=a
this.b=b
this.c=c},az:function az(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fN:function fN(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bR:function bR(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h0:function h0(){},de:function de(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hF:function hF(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dj:function dj(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jy:function(a){var u,t=new X.f6()
if(a==null)u=new V.S(0,0,0,1)
else u=a
t.a=u
t.b=!0
t.c=2000
t.d=!0
t.e=0
t.f=!1
u=V.d0()
t.r=u
return t},
kh:function(a){var u,t,s=new X.cU()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gm().l(0,s.gdS())
t=new D.v("mover",u,s.b)
t.b=!0
s.a_(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.y().a)){s.c=1.0471975511965976
t=new D.v("fov",t,1.0471975511965976)
t.b=!0
s.a_(t)}t=s.d
if(!(Math.abs(t-0.1)<$.y().a)){s.d=0.1
t=new D.v("near",t,0.1)
t.b=!0
s.a_(t)}t=s.e
if(!(Math.abs(t-2000)<$.y().a)){s.e=2000
t=new D.v("far",t,2000)
t.b=!0
s.a_(t)}return s},
ew:function ew(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ju:function ju(){},
f6:function f6(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f8:function f8(){this.b=this.a=null},
cU:function cU(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hv:function hv(){}},V={
nE:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.b3(a-b,u)
return(a<0?a+u:a)+b},
E:function(a,b,c){if(a==null)return C.a.ax("null",c)
return C.a.ax(C.d.dv(Math.abs(a-0)<$.y().a?0:a,b),c+b+1)},
bC:function(a,b,c){var u,t,s,r,q,p,o=H.c([],[P.q])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.r)(a),++s){r=V.E(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.b(o,q)
u=C.a.ax(o[q],t)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=u}return o},
jW:function(a){return C.d.hy(Math.pow(2,C.N.bS(Math.log(H.ne(a))/Math.log(2))))},
aY:function(){var u=$.fG
return u==null?$.fG=V.ad(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ad:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kf:function(a,b,c){var u=c.u(0,Math.sqrt(c.w(c))),t=b.au(u),s=t.u(0,Math.sqrt(t.w(t))),r=u.au(s),q=new V.z(a.a,a.b,a.c),p=s.P(0).w(q),o=r.P(0).w(q),n=u.P(0).w(q)
return V.ad(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aC:function(){var u=$.kj
return u==null?$.kj=new V.a0(0,0):u},
kk:function(){var u=$.bV
return u==null?$.bV=new V.T(0,0,0):u},
d0:function(){var u=$.bY
return u==null?$.bY=V.d_(0,0,1,1):u},
d_:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cZ(a,b,c,d)},
c4:function(){var u=$.kD
return u==null?$.kD=new V.z(0,0,0):u},
mk:function(){var u=$.i5
return u==null?$.i5=new V.z(-1,0,0):u},
jJ:function(){var u=$.i6
return u==null?$.i6=new V.z(0,1,0):u},
kE:function(){var u=$.i7
return u==null?$.i7=new V.z(0,0,1):u},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
S:function S(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eX:function eX(a){this.a=a},
cO:function cO(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ao:function ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
b1:function b1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cZ:function cZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
D:function D(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
nx:function(a){P.mc(C.L,new V.jl(a))},
m5:function(a){var u=new V.hh()
u.dM(a,!0)
return u},
jl:function jl(a){this.a=a},
h2:function h2(a){this.a=a
this.c=null},
h3:function h3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hh:function hh(){this.b=this.a=null},
hj:function hj(a){this.a=a},
hi:function hi(a){this.a=a}},U={
jv:function(){var u=new U.eF()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
k8:function(a){var u=new U.cr()
u.a=a
return u},
eF:function eF(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cr:function cr(){this.b=this.a=null},
bK:function bK(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a6:function a6(){},
dk:function dk(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dl:function dl(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dm:function dm(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cq:function cq(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},cs:function cs(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},cx:function cx(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ae:function ae(){}},A={
lN:function(a,b){var u=a.aT,t=new A.ft(b,u)
t.cg(b,u)
t.dJ(a,b)
return t},
lO:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gai(a0)+a1.gai(a1)+a2.gai(a2)+a3.gai(a3)+a4.gai(a4)+a5.gai(a5)+a6.gai(a6)+a7.gai(a7)+a8.gai(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.r)(a9),++t)f+="_"+H.f(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.r)(b0),++t)f+="_"+H.f(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.r)(b1),++t)f+="_"+H.f(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.ah()
if(k){u=$.aN()
g=new Z.b8(g.a|u.a)}if(j){u=$.aM()
g=new Z.b8(g.a|u.a)}if(i){u=$.aL()
g=new Z.b8(g.a|u.a)}return new A.fw(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,l,p,r,h,!0,!1,!1,o,r,m,k,j,!1,!1,i,!1,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
j3:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
j4:function(a,b,c){var u
A.j3(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.jn(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
mO:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.j3(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
mL:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.j4(b,t,"ambient")
b.a+="\n"},
mM:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.j4(b,t,"diffuse")
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
mP:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.j4(b,t,"invDiffuse")
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
mV:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.j4(b,t,"specular")
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
mR:function(a,b){var u,t,s
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
mT:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.j3(b,t,"reflect")
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
mU:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.j3(b,t,"refract")
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
mN:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.f(u)
s=A.jn(t)
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
r=[P.q]
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
c.a+="      highLight = intensity*("+C.b.t(m," + ")+");\n"}else c.a+="   highLight = "+C.b.t(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.b.t(o," + ")+");\n"
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
mS:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.f(u)
s=A.jn(t)
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
c.a=r+"\n"}r=[P.q]
l=H.c([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.b.t(l," * ")+";\n"
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
r=c.a+="      highLight = intensity*("+C.b.t(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.b.t(l," + ")+");\n"
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
mW:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.f(u)
s=A.jn(t)
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
c.a=u+"\n"}u=[P.q]
j=H.c([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.b.t(j," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.b.t(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.t(j," + ")+");\n"
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
mQ:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.q])
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
u=b.a+="   return "+C.b.t(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
mX:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.O("")
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
A.mO(a,j)
A.mL(a,j)
A.mM(a,j)
A.mP(a,j)
A.mV(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.mT(a,j)
A.mU(a,j)}A.mR(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.r)(q),++o)A.mN(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.r)(q),++o)A.mS(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.r)(q),++o)A.mW(a,q[o],j)
A.mQ(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.c([],[P.q])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.r)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ag(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.r)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ag(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.r)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ag(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)n.push("emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)n.push("reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.b.t(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
mY:function(a,b){var u,t,s
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
n_:function(a,b){var u
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
mZ:function(a,b){var u
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
n1:function(a,b){var u,t
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
n2:function(a,b){var u,t
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
n0:function(a,b){var u
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
n3:function(a,b){var u
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
jn:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.ag(a,1)},
ma:function(a,b){var u,t,s,r
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+="\nvec4 clrAccum;\n"
s=b===C.v
t=(s||b===C.o?t+"float colorCount;\n":t)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.u)t+="      clrAccum += color;\n"
else if(b===C.i)t+="      clrAccum = mix(clrAccum, color, color.a);\n"
else t=s?t+"      clrAccum += color;\n      colorCount += 1.0;\n":t+"      clrAccum = color;\n      colorCount = 1.0;\n"
t+="   }\n}\n\nvoid layoutAll()\n{\n"
r=b===C.o
if(r)for(u=a-1;u>=0;--u)t=t+("   if(txtCount > "+u+")\n")+"   {\n"+("     layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return;\n")+("   layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(s)t+="   colorCount = 1.0;\n"
else if(r)t+="   colorCount = 0.0;\n"
t+="   layoutAll();\n"
t=(s?t+"   clrAccum = clrAccum/colorCount;\n":t)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return t.charCodeAt(0)==0?t:t},
m9:function(a,b,c){var u="TextureLayout_"+a+"_"+C.c.h(b.a),t=new A.hB(c,u)
t.cg(c,u)
t.dN(a,b,c)
return t},
jG:function(a,b,c,d,e){var u=new A.hM(a,c,e)
u.f=d
P.lL(d,0,P.t)
return u},
cn:function cn(a,b,c){this.a=a
this.b=b
this.c=c},
er:function er(a){this.a=a},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
ft:function ft(a,b){var _=this
_.hJ=_.hI=_.d0=_.d_=_.aT=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hW=_.hV=_.hU=_.bR=_.bQ=_.bP=_.bO=_.bN=_.bM=_.hT=_.hS=_.d7=_.hR=_.hQ=_.d6=_.d5=_.hP=_.hO=_.d4=_.d3=_.hN=_.hM=_.d2=_.hL=_.hK=_.d1=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cu:function cu(a,b){this.a=a
this.b=b},
cW:function cW(a,b){this.a=a
this.b=b},
d4:function d4(a,b){this.a=a
this.b=b},
fw:function fw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aT=b3
_.d_=b4},
c0:function c0(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c2:function c2(a,b,c,d,e,f,g,h,i,j){var _=this
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
c3:function c3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d2:function d2(){},
bk:function bk(a,b){this.a=a
this.b=b},
hB:function hB(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dg:function dg(){},
hQ:function hQ(a){this.a=a},
b6:function b6(a,b,c){this.a=a
this.c=b
this.d=c},
hN:function hN(a,b,c){this.a=a
this.c=b
this.d=c},
hO:function hO(a,b,c){this.a=a
this.c=b
this.d=c},
hP:function hP(a,b,c){this.a=a
this.c=b
this.d=c},
hM:function hM(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c},
aI:function aI(a,b,c){this.a=a
this.c=b
this.d=c},
I:function I(a,b,c){this.a=a
this.c=b
this.d=c},
bt:function bt(a,b,c){this.a=a
this.c=b
this.d=c},
hR:function hR(a,b,c){this.a=a
this.c=b
this.d=c},
c1:function c1(a,b,c){this.a=a
this.c=b
this.d=c},
a2:function a2(a,b,c){this.a=a
this.c=b
this.d=c},
aJ:function aJ(a,b,c){this.a=a
this.c=b
this.d=c},
bu:function bu(a,b,c){this.a=a
this.c=b
this.d=c}},F={
nC:function(){return F.ng(15,30,0.5,1,new F.jo())},
ng:function(a,b,c,d,e){var u=F.nA(a,b,new F.j7(e,d,b,c))
if(u==null)return
u.at()
u.h9(new F.ie(),new F.fT())
return u},
nA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.ko()
t=H.c([],[F.b7])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.i8(g,g,new V.S(p,0,0,1),g,g,new V.a0(r,1),g,g,0)
q.l(0,o)
c.$3(o,r,0)
t.push(o.cV(g))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.i8(g,g,new V.S(j,i,h,1),g,g,new V.a0(r,m),g,g,0)
k.l(0,o)
c.$3(o,r,n)
t.push(o.cV(g))}}u.d.fD(a+1,b+1,t)
return u},
cy:function(a,b,c){var u=new F.aR(),t=a.a
if(t==null)H.n(P.o("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.n(P.o("May not create a face with vertices attached to different shapes."))
u.fk(a)
u.fl(b)
u.fm(c)
u.a.a.d.b.push(u)
u.a.a.a7()
return u},
ko:function(){var u=new F.hd(),t=new F.i9(u)
t.b=!1
t.c=H.c([],[F.b7])
u.a=t
t=new F.hg()
t.b=H.c([],[F.cV])
u.b=t
t=new F.hf(u)
t.b=H.c([],[F.cI])
u.c=t
t=new F.he(u)
t.b=H.c([],[F.aR])
u.d=t
u.e=null
return u},
i8:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.b7(),r=new F.ii()
r.b=H.c([],[F.cV])
s.b=r
r=new F.id()
u=[F.cI]
r.b=H.c([],u)
r.c=H.c([],u)
s.c=r
r=new F.ia()
u=[F.aR]
r.b=H.c([],u)
r.c=H.c([],u)
r.d=H.c([],u)
s.d=r
h=$.lh()
s.e=0
r=$.ah()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aN().a)!==0?e:t
s.x=(u&$.aM().a)!==0?b:t
s.y=(u&$.be().a)!==0?f:t
s.z=(u&$.bf().a)!==0?g:t
s.Q=(u&$.li().a)!==0?c:t
s.ch=(u&$.bD().a)!==0?i:0
s.cx=(u&$.aL().a)!==0?a:t
return s},
jo:function jo(){},
j7:function j7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aR:function aR(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
f_:function f_(){},
hk:function hk(){},
cI:function cI(){},
fg:function fg(){},
hL:function hL(){},
cV:function cV(){},
hd:function hd(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
he:function he(a){this.a=a
this.b=null},
hf:function hf(a){this.a=a
this.b=null},
hg:function hg(){this.b=null},
b7:function b7(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ik:function ik(a){this.a=a},
ij:function ij(a){this.a=a},
i9:function i9(a){this.a=a
this.c=this.b=null},
ia:function ia(){this.d=this.c=this.b=null},
ib:function ib(a,b){this.a=a
this.b=b},
ic:function ic(a,b){this.a=a
this.b=b},
id:function id(){this.c=this.b=null},
ig:function ig(){},
ie:function ie(){},
ih:function ih(){},
fT:function fT(){},
ii:function ii(){this.b=null}},S={
kZ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1="testCanvas",b2=null,b3="modifiers",b4=V.m5("Test 036"),b5=W.k6()
b5.className="pageLargeCanvas"
b5.id=b1
b4.a.appendChild(b5)
u=[P.q]
b4.cN(H.c(["Test of the texture layout cover technique."],u))
b4.fA(H.c(["blends"],u))
b4.cN(H.c(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b1)
if(t==null)H.n(P.o("Failed to find an element with the identifier, testCanvas."))
s=E.mb(t,!0,!0,!0,!1)
r=new U.bK()
r.b4(U.a6)
r.az(r.gee(),r.geX())
r.e=null
r.f=V.aY()
r.r=0
b4=s.r
q=new U.dl()
p=U.jv()
p.sca(0,!0)
p.sbX(6.283185307179586)
p.sbZ(0)
p.sa5(0,0)
p.sbY(100)
p.sT(0)
p.sbL(0.5)
q.b=p
o=q.gaC()
p.gm().l(0,o)
p=U.jv()
p.sca(0,!0)
p.sbX(6.283185307179586)
p.sbZ(0)
p.sa5(0,0)
p.sbY(100)
p.sT(0)
p.sbL(0.5)
q.c=p
p.gm().l(0,o)
q.d=null
q.r=q.f=q.e=!1
q.y=q.x=2.5
q.Q=4
q.ch=q.cx=!1
q.db=q.cy=0
q.dx=null
q.dy=0
q.fx=q.fr=null
n=new X.aa(!1,!1,!1)
m=q.d
q.d=n
p=new D.v(b3,m,n)
p.b=!0
q.M(p)
p=q.f
if(p!==!1){q.f=!1
p=new D.v("invertX",p,!1)
p.b=!0
q.M(p)}p=q.r
if(p!==!1){q.r=!1
p=new D.v("invertY",p,!1)
p.b=!0
q.M(p)}q.aO(b4)
r.l(0,q)
b4=s.r
q=new U.dk()
p=U.jv()
p.sca(0,!0)
p.sbX(6.283185307179586)
p.sbZ(0)
p.sa5(0,0)
p.sbY(100)
p.sT(0)
p.sbL(0.2)
q.b=p
p.gm().l(0,q.gaC())
q.c=null
q.d=!1
q.e=2.5
q.r=4
q.x=q.y=!1
q.z=0
q.Q=null
q.ch=0
q.cy=q.cx=null
n=new X.aa(!0,!1,!1)
m=q.c
q.c=n
p=new D.v(b3,m,n)
p.b=!0
q.M(p)
q.aO(b4)
r.l(0,q)
b4=s.r
q=new U.dm()
q.c=0.01
q.e=q.d=0
n=new X.aa(!1,!1,!1)
q.b=n
p=new D.v(b3,b2,n)
p.b=!0
q.M(p)
q.aO(b4)
r.l(0,q)
r.l(0,U.k8(V.ad(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
l=X.kh(r)
k=new V.S(0,0,0,0)
j=new X.ew()
j.d=j.c=j.b=j.a=512
j.e=!0
j.f=!1
j.x=j.r=1
j.ch=T.kq(b2)
j.cx=new V.S(0,0,0,1)
j.cy=!0
j.db=2000
j.dx=!0
j.dy=V.d0()
j.sae(0,512)
j.sab(0,512)
if(!j.cx.n(0,k)){m=j.cx
j.cx=k
b4=new D.v("color",m,k)
b4.b=!0
j.a_(b4)}b4=j.db
if(!(Math.abs(b4-2000)<$.y().a)){j.db=2000
b4=new D.v("depth",b4,2000)
b4.b=!0
j.a_(b4)}if(!j.f){j.f=!0
b4=new D.v("autoResize",!1,!0)
b4.b=!0
j.a_(b4)}b4=j.r
if(!(Math.abs(b4-1)<$.y().a)){j.r=1
b4=new D.v("autoResizeScalarX",b4,1)
b4.b=!0
j.a_(b4)}b4=j.x
if(!(Math.abs(b4-1)<$.y().a)){j.x=1
b4=new D.v("autoResizeScalarY",b4,1)
b4.b=!0
j.a_(b4)}i=V.d0()
if(!J.A(j.dy,i)){m=j.dy
j.dy=i
b4=new D.v("region",m,i)
b4.b=!0
j.a_(b4)}h=E.ka()
h.sbj(0,F.nC())
g=new O.cM()
b4=O.eE(V.ao)
g.e=b4
b4.az(g.gei(),g.gek())
b4=new O.an(g,"emission")
b4.c=new A.Z(!1,!1,!1)
b4.f=new V.R(0,0,0)
g.f=b4
b4=new O.an(g,"ambient")
b4.c=new A.Z(!1,!1,!1)
b4.f=new V.R(0,0,0)
g.r=b4
b4=new O.an(g,"diffuse")
b4.c=new A.Z(!1,!1,!1)
b4.f=new V.R(0,0,0)
g.x=b4
b4=new O.an(g,"invDiffuse")
b4.c=new A.Z(!1,!1,!1)
b4.f=new V.R(0,0,0)
g.y=b4
b4=new O.fz(g,"specular")
b4.c=new A.Z(!1,!1,!1)
b4.f=new V.R(0,0,0)
b4.ch=100
g.z=b4
b4=new O.fv(g,"bump")
b4.c=new A.Z(!1,!1,!1)
g.Q=b4
g.ch=null
b4=new O.an(g,"reflect")
b4.c=new A.Z(!1,!1,!1)
b4.f=new V.R(0,0,0)
g.cx=b4
b4=new O.fy(g,"refract")
b4.c=new A.Z(!1,!1,!1)
b4.f=new V.R(0,0,0)
b4.ch=1
g.cy=b4
b4=new O.fu(g,"alpha")
b4.c=new A.Z(!1,!1,!1)
b4.f=1
g.db=b4
b4=new D.cH()
b4.b4(D.a5)
b4.e=H.c([],[D.bm])
b4.f=H.c([],[D.h_])
b4.r=H.c([],[D.hn])
b4.y=b4.x=null
b4.cb(b4.geg(),b4.geV(),b4.geZ())
g.dx=b4
q=new O.fx()
q.b=new V.S(0,0,0,0)
q.c=1
q.d=10
q.e=!1
g.dy=q
q=b4.x
b4=q==null?b4.x=D.B():q
b4.l(0,g.gfh())
b4=g.dx
q=b4.y
b4=q==null?b4.y=D.B():q
b4.l(0,g.gao())
g.fr=null
b4=g.dx
f=V.jJ()
q=U.k8(V.kf(V.kk(),f,new V.z(0,-1,-1)))
k=new V.R(1,1,1)
p=new D.bm()
p.c=new V.R(1,1,1)
p.a=V.kE()
p.d=V.jJ()
p.e=V.mk()
m=p.b
p.b=q
q.gm().l(0,p.gdO())
q=new D.v("mover",m,p.b)
q.b=!0
p.an(q)
if(!p.c.n(0,k)){m=p.c
p.c=k
q=new D.v("color",m,k)
q.b=!0
p.an(q)}b4.l(0,p)
b4=g.r
b4.saQ(0,new V.R(0,0,1))
b4=g.x
b4.saQ(0,new V.R(0,1,0))
b4=g.z
b4.saQ(0,new V.R(1,0,0))
b4=g.z
b4.cF(new A.Z(!0,!1,!1))
b4.cG(10)
e=new M.cx()
e.a=!0
b4=O.eE(E.av)
e.e=b4
b4.az(e.geo(),e.geq())
e.y=e.x=e.r=e.f=null
d=X.jy(b2)
e.scS(b2)
e.sb_(0,d)
e.sb0(b2)
e.scS(l)
e.sb0(g)
e.sb_(0,j)
e.e.l(0,h)
c=new V.S(0,0,0,1)
b=new O.d9()
b.a=new V.S(0,0,0,0)
b4=O.eE(O.b3)
b.c=b4
b4.az(b.gez(),b.geB())
b.d=0
b.e=null
b.r=b.f=C.i
if(!b.a.n(0,c)){m=b.a
b.a=c
b4=new D.v("backColor",m,c)
b4.b=!0
b.O(b4)}b.saP(C.i)
for(a=0;a<3;++a){a0=a*0.3333333333333333
for(a1=0;a1<3;++a1){b4=b.c
q=j.ch
q=O.kr(V.d_(a0,a1*0.3333333333333333,0.3333333333333333,0.3333333333333333),q)
p=[H.ej(b4,0)]
if(b4.bA(H.c([q],p))){o=b4.a
a2=o.length
o.push(q)
p=H.c([q],p)
b4=b4.c
if(b4!=null)b4.$2(a2,p)}}}b4=b.c
q=O.kr(b2,b2)
q.sad(j.ch)
q.scU(V.ad(0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1))
b4.l(0,q)
a3=X.jy(new V.S(0,0,0,1))
a4=new M.cs()
a4.a=!0
b4=E.ka()
a5=F.ko()
q=a5.a
p=new V.z(-1,-1,1)
p=p.u(0,Math.sqrt(p.w(p)))
a6=q.b8(new V.b1(1,2,4,6),new V.S(1,0,0,1),new V.T(-1,-1,0),new V.a0(0,1),p,b2)
q=a5.a
p=new V.z(1,-1,1)
p=p.u(0,Math.sqrt(p.w(p)))
a7=q.b8(new V.b1(0,3,4,6),new V.S(0,0,1,1),new V.T(1,-1,0),new V.a0(1,1),p,b2)
q=a5.a
p=new V.z(1,1,1)
p=p.u(0,Math.sqrt(p.w(p)))
a8=q.b8(new V.b1(0,2,5,6),new V.S(0,1,0,1),new V.T(1,1,0),new V.a0(1,0),p,b2)
q=a5.a
p=V.aC()
o=new V.z(-1,1,1)
o=o.u(0,Math.sqrt(o.w(o)))
a9=q.b8(new V.b1(0,2,4,7),new V.S(1,1,0,1),new V.T(-1,1,0),p,o,b2)
a5.d.fC(H.c([a6,a7,a8,a9],[F.b7]))
a5.at()
b4.sbj(0,a5)
a4.e=b4
b0=new X.f8()
m=a4.b
a4.b=b0
b0.gm().l(0,a4.gX())
b4=new D.v("camera",m,a4.b)
b4.b=!0
a4.W(b4)
a4.sb_(0,b2)
a4.sb0(b2)
a4.sb0(b)
a4.sb_(0,a3)
b4=M.ae
q=H.c([e,a4],[b4])
p=new M.cq()
p.b4(b4)
p.e=!0
p.f=!1
p.r=null
p.az(p.gf0(),p.gf2())
p.bF(0,q)
b4=s.d
if(b4!==p){if(b4!=null)b4.gm().N(0,s.gcj())
s.d=p
p.gm().l(0,s.gcj())
s.ck()}b4=new V.h2("blends")
u=u.getElementById("blends")
b4.c=u
if(u==null)H.n("Failed to find blends for RadioGroup")
b4.bE(0,"Additive",new S.jg(b))
b4.cM(0,"AlphaBlend",new S.jh(b),!0)
b4.bE(0,"Average",new S.ji(b))
b4.bE(0,"Overwrite",new S.jj(b))
V.nx(s)},
jg:function jg(a){this.a=a},
jh:function jh(a){this.a=a},
ji:function ji(a){this.a=a},
jj:function jj(a){this.a=a}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F,S]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jC.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gE:function(a){return H.bW(a)},
h:function(a){return"Instance of '"+H.f(H.bX(a))+"'"}}
J.fb.prototype={
h:function(a){return String(a)},
gE:function(a){return a?519018:218159},
$ibc:1}
J.cE.prototype={
n:function(a,b){return null==b},
h:function(a){return"null"},
gE:function(a){return 0}}
J.cF.prototype={
gE:function(a){return 0},
h:function(a){return String(a)}}
J.fY.prototype={}
J.bv.prototype={}
J.aW.prototype={
h:function(a){var u=a[$.l5()]
if(u==null)return this.dH(a)
return"JavaScript function for "+H.f(J.ai(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aU.prototype={
dr:function(a,b){if(!!a.fixed$length)H.n(P.w("removeAt"))
if(b<0||b>=a.length)throw H.d(P.cY(b,null))
return a.splice(b,1)[0]},
N:function(a,b){var u
if(!!a.fixed$length)H.n(P.w("remove"))
for(u=0;u<a.length;++u)if(J.A(a[u],b)){a.splice(u,1)
return!0}return!1},
bF:function(a,b){var u,t
if(!!a.fixed$length)H.n(P.w("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.r)(b),++t)a.push(b[t])},
F:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.d(P.bl(a))}},
t:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.f(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
h6:function(a){return this.t(a,"")},
h0:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.d(P.bl(a))}return u},
h1:function(a,b,c){return this.h0(a,b,c,null)},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
dE:function(a,b,c){if(b<0||b>a.length)throw H.d(P.U(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.U(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.ej(a,0)])
return H.c(a.slice(b,c),[H.ej(a,0)])},
gh_:function(a){if(a.length>0)return a[0]
throw H.d(H.kb())},
gaw:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.kb())},
bk:function(a,b){if(!!a.immutable$list)H.n(P.w("sort"))
H.d3(a,0,a.length-1,b)},
al:function(a,b){var u
for(u=0;u<a.length;++u)if(J.A(a[u],b))return!0
return!1},
h:function(a){return P.jz(a,"[","]")},
gV:function(a){return new J.a1(a,a.length)},
gE:function(a){return H.bW(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.n(P.w("set length"))
if(b<0)throw H.d(P.U(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.d(H.bB(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.n(P.w("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bB(a,b))
a[b]=c},
$ih:1,
$im:1}
J.jB.prototype={}
J.a1.prototype={
gI:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.r(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bO.prototype={
fL:function(a,b){var u
if(typeof b!=="number")throw H.d(H.ag(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbb(b)
if(this.gbb(a)===u)return 0
if(this.gbb(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbb:function(a){return a===0?1/a<0:a<0},
hy:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.w(""+a+".toInt()"))},
bS:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.w(""+a+".floor()"))},
Y:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.w(""+a+".round()"))},
dv:function(a,b){var u
if(b>20)throw H.d(P.U(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbb(a))return"-"+u
return u},
b1:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.U(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.U(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.n(P.w("Unexpected toString result: "+u))
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
gE:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
b3:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dI:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cI(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.cI(a,b)},
cI:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.w("Result of truncating division is "+H.f(u)+": "+H.f(a)+" ~/ "+b))},
aE:function(a,b){var u
if(a>0)u=this.cH(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fq:function(a,b){if(b<0)throw H.d(H.ag(b))
return this.cH(a,b)},
cH:function(a,b){return b>31?0:a>>>b},
$iJ:1,
$ia8:1}
J.cD.prototype={$it:1}
J.cC.prototype={}
J.aV.prototype={
U:function(a,b){if(b<0)throw H.d(H.bB(a,b))
if(b>=a.length)H.n(H.bB(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.d(H.bB(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!=="string")throw H.d(P.k2(b,null,null))
return a+b},
aH:function(a,b,c,d){var u,t
c=P.b2(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a2:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.U(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
aa:function(a,b){return this.a2(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.n(H.ag(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.K()
if(b<0)throw H.d(P.cY(b,null))
if(b>c)throw H.d(P.cY(b,null))
if(c>a.length)throw H.d(P.cY(c,null))
return a.substring(b,c)},
ag:function(a,b){return this.q(a,b,null)},
p:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.J)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ax:function(a,b){var u=b-a.length
if(u<=0)return a
return this.p(" ",u)+a},
ba:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.U(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
df:function(a,b){return this.ba(a,b,0)},
h:function(a){return a},
gE:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gj:function(a){return a.length},
$iq:1}
H.M.prototype={
gj:function(a){return this.a.length},
i:function(a,b){return C.a.U(this.a,b)},
$ap:function(){return[P.t]},
$ah:function(){return[P.t]},
$am:function(){return[P.t]}}
H.eV.prototype={}
H.cJ.prototype={
gI:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.ch(s),q=r.gj(s)
if(t.b!==q)throw H.d(P.bl(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.G(s,u);++t.c
return!0}}
H.fr.prototype={
gV:function(a){return new H.fs(J.bg(this.a),this.b)},
gj:function(a){return J.ac(this.a)},
G:function(a,b){return this.b.$1(J.js(this.a,b))},
$ah:function(a,b){return[b]}}
H.fs.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.a=u.c.$1(t.gI(t))
return!0}u.a=null
return!1},
gI:function(a){return this.a}}
H.im.prototype={
gV:function(a){return new H.io(J.bg(this.a),this.b)}}
H.io.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(t.$1(u.gI(u)))return!0
return!1},
gI:function(a){var u=this.a
return u.gI(u)}}
H.cz.prototype={}
H.hV.prototype={
k:function(a,b,c){throw H.d(P.w("Cannot modify an unmodifiable list"))}}
H.dh.prototype={}
H.eH.prototype={
h:function(a){return P.jE(this)},
k:function(a,b,c){return H.lz()},
$iN:1}
H.eI.prototype={
gj:function(a){return this.a},
b9:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.b9(0,b))return
return this.ct(b)},
ct:function(a){return this.b[a]},
F:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.ct(s))}}}
H.hJ.prototype={
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
H.fU.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fd.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.f(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.f(t.a)+")"
return s+r+"' on '"+u+"' ("+H.f(t.a)+")"}}
H.hU.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jp.prototype={
$1:function(a){if(!!J.Q(a).$ibn)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.dX.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bH.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
ghC:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hw.prototype={}
H.hq.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.el(u)+"'"}}
H.bE.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bE))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gE:function(a){var u,t=this.c
if(t==null)u=H.bW(this.a)
else u=typeof t!=="object"?J.cm(t):H.bW(t)
return(u^H.bW(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.bX(u))+"'")}}
H.eB.prototype={
h:function(a){return this.a}}
H.ha.prototype={
h:function(a){return"RuntimeError: "+H.f(this.a)}}
H.K.prototype={
gj:function(a){return this.a},
gam:function(a){return new H.fi(this,[H.ej(this,0)])},
b9:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cq(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cq(t,b)}else return s.h3(b)},
h3:function(a){var u=this,t=u.d
if(t==null)return!1
return u.bV(u.bq(t,u.bU(a)),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b5(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b5(r,b)
s=t==null?null:t.b
return s}else return q.h4(b)},
h4:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bq(r,s.bU(a))
t=s.bV(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cm(u==null?s.b=s.by():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cm(t==null?s.c=s.by():t,b,c)}else s.h5(b,c)},
h5:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.by()
u=r.bU(a)
t=r.bq(q,u)
if(t==null)r.bC(q,u,[r.bz(a,b)])
else{s=r.bV(t,a)
if(s>=0)t[s].b=b
else t.push(r.bz(a,b))}},
F:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.d(P.bl(u))
t=t.c}},
cm:function(a,b,c){var u=this.b5(a,b)
if(u==null)this.bC(a,b,this.bz(b,c))
else u.b=c},
bz:function(a,b){var u=this,t=new H.fh(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
bU:function(a){return J.cm(a)&0x3ffffff},
bV:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.A(a[t].a,b))return t
return-1},
h:function(a){return P.jE(this)},
b5:function(a,b){return a[b]},
bq:function(a,b){return a[b]},
bC:function(a,b,c){a[b]=c},
e3:function(a,b){delete a[b]},
cq:function(a,b){return this.b5(a,b)!=null},
by:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bC(t,u,t)
this.e3(t,u)
return t}}
H.fh.prototype={}
H.fi.prototype={
gj:function(a){return this.a.a},
gV:function(a){var u=this.a,t=new H.fj(u,u.r)
t.c=u.e
return t}}
H.fj.prototype={
gI:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bl(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.jc.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.jd.prototype={
$2:function(a,b){return this.a(a,b)}}
H.je.prototype={
$1:function(a){return this.a(a)}}
H.fc.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$im1:1}
H.bS.prototype={$ibS:1}
H.aZ.prototype={$iaZ:1}
H.cP.prototype={
gj:function(a){return a.length},
$ix:1,
$ax:function(){}}
H.bT.prototype={
i:function(a,b){H.at(b,a,a.length)
return a[b]},
k:function(a,b,c){H.at(b,a,a.length)
a[b]=c},
$ap:function(){return[P.J]},
$ih:1,
$ah:function(){return[P.J]},
$im:1,
$am:function(){return[P.J]}}
H.cQ.prototype={
k:function(a,b,c){H.at(b,a,a.length)
a[b]=c},
$ap:function(){return[P.t]},
$ih:1,
$ah:function(){return[P.t]},
$im:1,
$am:function(){return[P.t]}}
H.fO.prototype={
i:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.fP.prototype={
i:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.fQ.prototype={
i:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.fR.prototype={
i:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.fS.prototype={
i:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.cR.prototype={
gj:function(a){return a.length},
i:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.bU.prototype={
gj:function(a){return a.length},
i:function(a,b){H.at(b,a,a.length)
return a[b]},
$ibU:1,
$ibs:1}
H.c6.prototype={}
H.c7.prototype={}
H.c8.prototype={}
H.c9.prototype={}
P.iq.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.ip.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.ir.prototype={
$0:function(){this.a.$0()}}
P.is.prototype={
$0:function(){this.a.$0()}}
P.e2.prototype={
dQ:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bA(new P.iQ(this,b),0),a)
else throw H.d(P.w("`setTimeout()` not found."))},
dR:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bA(new P.iP(this,a,Date.now(),b),0),a)
else throw H.d(P.w("Periodic timer."))},
$idb:1}
P.iQ.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iP.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.dI(u,q)}s.c=r
t.d.$1(s)}}
P.dq.prototype={}
P.d7.prototype={}
P.ht.prototype={}
P.db.prototype={}
P.iZ.prototype={}
P.j5.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cT():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.h(0)
throw u}}
P.iF.prototype={
hu:function(a){var u,t,s,r=null
try{if(C.f===$.af){a.$0()
return}P.n5(r,r,this,a)}catch(s){u=H.bd(s)
t=H.jT(s)
P.kO(r,r,this,u,t)}},
hv:function(a,b){var u,t,s,r=null
try{if(C.f===$.af){a.$1(b)
return}P.n6(r,r,this,a,b)}catch(s){u=H.bd(s)
t=H.jT(s)
P.kO(r,r,this,u,t)}},
hw:function(a,b){return this.hv(a,b,null)},
fI:function(a){return new P.iG(this,a)},
cP:function(a,b){return new P.iH(this,a,b)}}
P.iG.prototype={
$0:function(){return this.a.hu(this.b)}}
P.iH.prototype={
$1:function(a){return this.a.hw(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iC.prototype={
gV:function(a){var u=new P.dF(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
l:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cn(u==null?s.b=P.jK():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cn(t==null?s.c=P.jK():t,b)}else return s.dU(0,b)},
dU:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jK()
u=s.co(b)
t=r[u]
if(t==null)r[u]=[s.bm(b)]
else{if(s.cu(t,b)>=0)return!1
t.push(s.bm(b))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fb(this.c,b)
else return this.fa(0,b)},
fa:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.e6(r,b)
t=s.cu(u,b)
if(t<0)return!1
s.cJ(u.splice(t,1)[0])
return!0},
cn:function(a,b){if(a[b]!=null)return!1
a[b]=this.bm(b)
return!0},
fb:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cJ(u)
delete a[b]
return!0},
cz:function(){this.r=1073741823&this.r+1},
bm:function(a){var u,t=this,s=new P.iD(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cz()
return s},
cJ:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cz()},
co:function(a){return J.cm(a)&1073741823},
e6:function(a,b){return a[this.co(b)]},
cu:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.A(a[t].a,b))return t
return-1}}
P.iD.prototype={}
P.dF.prototype={
gI:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bl(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fk.prototype={
$2:function(a,b){this.a.k(0,a,b)},
$S:3}
P.fl.prototype={$ih:1,$im:1}
P.p.prototype={
gV:function(a){return new H.cJ(a,this.gj(a))},
G:function(a,b){return this.i(a,b)},
hA:function(a,b){var u,t,s=this,r=H.c([],[H.nm(s,a,"p",0)])
C.b.sj(r,s.gj(a))
for(u=0;u<s.gj(a);++u){t=s.i(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t}return r},
hz:function(a){return this.hA(a,!0)},
fY:function(a,b,c,d){var u
P.b2(b,c,this.gj(a))
for(u=b;u<c;++u)this.k(a,u,d)},
h:function(a){return P.jz(a,"[","]")}}
P.fo.prototype={}
P.fp.prototype={
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
for(u=J.bg(this.gam(a));u.v();){t=u.gI(u)
b.$2(t,this.i(a,t))}},
gj:function(a){return J.ac(this.gam(a))},
h:function(a){return P.jE(a)},
$iN:1}
P.iR.prototype={
k:function(a,b,c){throw H.d(P.w("Cannot modify unmodifiable map"))}}
P.fq.prototype={
i:function(a,b){return J.cl(this.a,b)},
k:function(a,b,c){J.jq(this.a,b,c)},
F:function(a,b){J.k0(this.a,b)},
gj:function(a){return J.ac(this.a)},
h:function(a){return J.ai(this.a)},
$iN:1}
P.di.prototype={}
P.iI.prototype={
h:function(a){return P.jz(this,"{","}")},
G:function(a,b){var u,t,s
P.kn(b,"index")
for(u=P.mq(this,this.r),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.d(P.H(b,this,"index",null,t))},
$ih:1}
P.dG.prototype={}
P.e7.prototype={}
P.ex.prototype={
ha:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.b2(a0,a1,b.length)
u=$.lk()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.a.D(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jb(C.a.D(b,n))
j=H.jb(C.a.D(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.b(u,i)
h=u[i]
if(h>=0){i=C.a.U("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.O("")
g=r.a+=C.a.q(b,s,t)
r.a=g+H.cX(m)
s=n
continue}}throw H.d(P.L("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.q(b,s,a1)
f=g.length
if(q>=0)P.k3(b,p,a1,q,o,f)
else{e=C.c.b3(f-1,4)+1
if(e===1)throw H.d(P.L(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aH(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.k3(b,p,a1,q,o,d)
else{e=C.c.b3(d,4)
if(e===1)throw H.d(P.L(c,b,a1))
if(e>1)b=C.a.aH(b,a1,a1,e===2?"==":"=")}return b}}
P.ey.prototype={}
P.eD.prototype={}
P.eJ.prototype={}
P.eW.prototype={}
P.i2.prototype={
gfX:function(){return C.K}}
P.i4.prototype={
bK:function(a){var u,t,s=P.b2(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iY(u)
if(t.e5(a,0,s)!==s)t.cL(J.lq(a,s-1),0)
return new Uint8Array(u.subarray(0,H.mH(0,t.b,u.length)))}}
P.iY.prototype={
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
e5:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.U(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.D(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cL(r,C.a.D(a,p)))s=p}else if(r<=2047){q=n.b
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
P.i3.prototype={
bK:function(a){var u,t,s,r,q,p,o,n,m=P.mf(!1,a,0,null)
if(m!=null)return m
u=P.b2(0,null,J.ac(a))
t=P.kQ(a,0,u)
if(t>0){s=P.bZ(a,0,t)
if(t===u)return s
r=new P.O(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.O("")
o=new P.iX(!1,r)
o.c=p
o.fM(a,q,u)
if(o.e>0){H.n(P.L("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.cX(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.iX.prototype={
fM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.ch(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.af()
if((r&192)!==128){q=P.L(k+C.c.b1(r,16),a,s)
throw H.d(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.b(C.w,q)
if(j<=C.w[q]){q=P.L("Overlong encoding of 0x"+C.c.b1(j,16),a,s-h-1)
throw H.d(q)}if(j>1114111){q=P.L("Character outside valid Unicode range: 0x"+C.c.b1(j,16),a,s-h-1)
throw H.d(q)}if(!l.c||j!==65279)t.a+=H.cX(j)
l.c=!1}for(q=s<c;q;){p=P.kQ(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.bZ(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.K()
if(r<0){m=P.L("Negative UTF-8 code unit: -0x"+C.c.b1(-r,16),a,n-1)
throw H.d(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.L(k+C.c.b1(r,16),a,n-1)
throw H.d(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.bc.prototype={}
P.a4.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.a4&&this.a===b.a&&!0},
gE:function(a){var u=this.a
return(u^C.c.aE(u,30))&1073741823},
h:function(a){var u=this,t=P.lA(H.lY(u)),s=P.ct(H.lW(u)),r=P.ct(H.lS(u)),q=P.ct(H.lT(u)),p=P.ct(H.lV(u)),o=P.ct(H.lX(u)),n=P.lB(H.lU(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.J.prototype={}
P.aP.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aP&&this.a===b.a},
gE:function(a){return C.c.gE(this.a)},
h:function(a){var u,t,s,r=new P.eU(),q=this.a
if(q<0)return"-"+new P.aP(0-q).h(0)
u=r.$1(C.c.a0(q,6e7)%60)
t=r.$1(C.c.a0(q,1e6)%60)
s=new P.eT().$1(q%1e6)
return""+C.c.a0(q,36e8)+":"+H.f(u)+":"+H.f(t)+"."+H.f(s)}}
P.eT.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eU.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bn.prototype={}
P.cT.prototype={
h:function(a){return"Throw of null."}}
P.aj.prototype={
gbo:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbn:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbo()+o+u
if(!q.a)return t
s=q.gbn()
r=P.jx(q.b)
return t+s+": "+r}}
P.bq.prototype={
gbo:function(){return"RangeError"},
gbn:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.f(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.f(s)
else if(t>s)u=": Not in range "+H.f(s)+".."+H.f(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.f(s)}return u}}
P.f9.prototype={
gbo:function(){return"RangeError"},
gbn:function(){var u,t=this.b
if(typeof t!=="number")return t.K()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.f(u)},
gj:function(a){return this.f}}
P.hW.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.hS.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hp.prototype={
h:function(a){return"Bad state: "+this.a}}
P.eG.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.jx(u)+"."}}
P.fX.prototype={
h:function(a){return"Out of Memory"},
$ibn:1}
P.d5.prototype={
h:function(a){return"Stack Overflow"},
$ibn:1}
P.eO.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dy.prototype={
h:function(a){return"Exception: "+this.a}}
P.f5.prototype={
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
for(q=g;q<o;++q){p=C.a.U(f,q)
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
return h+l+j+k+"\n"+C.a.p(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.f(g)+")"):h}}
P.t.prototype={}
P.h.prototype={
gj:function(a){var u,t=this.gV(this)
for(u=0;t.v();)++u
return u},
G:function(a,b){var u,t,s
P.kn(b,"index")
for(u=this.gV(this),t=0;u.v();){s=u.gI(u)
if(b===t)return s;++t}throw H.d(P.H(b,this,"index",null,t))},
h:function(a){return P.lE(this,"(",")")}}
P.fa.prototype={}
P.m.prototype={$ih:1}
P.N.prototype={}
P.b_.prototype={
gE:function(a){return P.a_.prototype.gE.call(this,this)},
h:function(a){return"null"}}
P.a8.prototype={}
P.a_.prototype={constructor:P.a_,$ia_:1,
n:function(a,b){return this===b},
gE:function(a){return H.bW(this)},
h:function(a){return"Instance of '"+H.f(H.bX(this))+"'"},
toString:function(){return this.h(this)}}
P.q.prototype={}
P.O.prototype={
gj:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.i0.prototype={
$2:function(a,b){var u,t,s,r=J.jS(b).df(b,"=")
if(r===-1){if(b!=="")J.jq(a,P.jO(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.q(b,0,r)
t=C.a.ag(b,r+1)
s=this.a
J.jq(a,P.jO(u,0,u.length,s,!0),P.jO(t,0,t.length,s,!0))}return a}}
P.hY.prototype={
$2:function(a,b){throw H.d(P.L("Illegal IPv4 address, "+a,this.a,b))}}
P.hZ.prototype={
$2:function(a,b){throw H.d(P.L("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.i_.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.ek(C.a.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.K()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bw.prototype={
gdz:function(){return this.b},
gbT:function(a){var u=this.c
if(u==null)return""
if(C.a.aa(u,"["))return C.a.q(u,1,u.length-1)
return u},
gbe:function(a){var u=this.d
if(u==null)return P.kH(this.a)
return u},
gc2:function(a){var u=this.f
return u==null?"":u},
gd9:function(){var u=this.r
return u==null?"":u},
dt:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.aa(u,"/"))u="/"+u
s=P.jM(null,0,0,b)
return new P.bw(q,o,m,n,u,s,r.r)},
gc3:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.q
u=this.Q=new P.di(P.kz(t==null?"":t),[u,u])
t=u}return t},
gda:function(){return this.c!=null},
gde:function(){return this.f!=null},
gdc:function(){return this.r!=null},
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
if(!!J.Q(b).$ijH)if(s.a==b.gbi())if(s.c!=null===b.gda())if(s.b==b.gdz())if(s.gbT(s)==b.gbT(b))if(s.gbe(s)==b.gbe(b))if(s.e===b.gdq(b)){u=s.f
t=u==null
if(!t===b.gde()){if(t)u=""
if(u===b.gc2(b)){u=s.r
t=u==null
if(!t===b.gdc()){if(t)u=""
u=u===b.gd9()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gE:function(a){var u=this.z
return u==null?this.z=C.a.gE(this.h(0)):u},
$ijH:1,
gbi:function(){return this.a},
gdq:function(a){return this.e}}
P.iS.prototype={
$1:function(a){throw H.d(P.L("Invalid port",this.a,this.b+1))}}
P.iT.prototype={
$1:function(a){return P.iW(C.S,a,C.e,!1)}}
P.iV.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.f(P.iW(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.f(P.iW(C.h,b,C.e,!0))}}}
P.iU.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.bg(b),t=this.a;u.v();)t.$2(a,u.gI(u))}}
P.hX.prototype={
gdw:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.b(o,0)
u=q.a
o=o[0]+1
t=C.a.ba(u,"?",o)
s=u.length
if(t>=0){r=P.ce(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.iw("data",p,p,p,P.ce(u,o,s,C.y,!1),r,p)},
h:function(a){var u,t=this.b
if(0>=t.length)return H.b(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.j0.prototype={
$1:function(a){return new Uint8Array(96)}}
P.j_.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.b(u,a)
u=u[a]
J.lr(u,0,96,b)
return u},
$S:18}
P.j1.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.D(b,s)^96
if(r>=t)return H.b(a,r)
a[r]=c}}}
P.j2.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.D(b,0),t=C.a.D(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.b(a,r)
a[r]=c}}}
P.iJ.prototype={
gda:function(){return this.c>0},
gdd:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.C()
t=this.e
if(typeof t!=="number")return H.u(t)
t=u+1<t
u=t}else u=!1
return u},
gde:function(){var u=this.f
if(typeof u!=="number")return u.K()
return u<this.r},
gdc:function(){return this.r<this.a.length},
gcv:function(){return this.b===4&&C.a.aa(this.a,"http")},
gcw:function(){return this.b===5&&C.a.aa(this.a,"https")},
gbi:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcv())q=t.x="http"
else if(t.gcw()){t.x="https"
q="https"}else if(q===4&&C.a.aa(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.aa(t.a,r)){t.x=r
q=r}else{q=C.a.q(t.a,0,q)
t.x=q}return q},
gdz:function(){var u=this.c,t=this.b+3
return u>t?C.a.q(this.a,t,u-1):""},
gbT:function(a){var u=this.c
return u>0?C.a.q(this.a,u,this.d):""},
gbe:function(a){var u,t=this
if(t.gdd()){u=t.d
if(typeof u!=="number")return u.C()
return P.ek(C.a.q(t.a,u+1,t.e),null,null)}if(t.gcv())return 80
if(t.gcw())return 443
return 0},
gdq:function(a){return C.a.q(this.a,this.e,this.f)},
gc2:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.K()
return u<t?C.a.q(this.a,u+1,t):""},
gd9:function(){var u=this.r,t=this.a
return u<t.length?C.a.ag(t,u+1):""},
gc3:function(){var u=this,t=u.f
if(typeof t!=="number")return t.K()
if(t>=u.r)return C.T
t=P.q
return new P.di(P.kz(u.gc2(u)),[t,t])},
dt:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbi(),m=n==="file",l=p.c,k=l>0?C.a.q(p.a,p.b+3,l):"",j=p.gdd()?p.gbe(p):o
l=p.c
if(l>0)u=C.a.q(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.q(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.aa(t,"/"))t="/"+t
r=P.jM(o,0,0,b)
s=p.r
q=s<l.length?C.a.ag(l,s+1):o
return new P.bw(n,k,u,j,t,r,q)},
gE:function(a){var u=this.y
return u==null?this.y=C.a.gE(this.a):u},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.Q(b).$ijH&&this.a===b.h(0)},
h:function(a){return this.a},
$ijH:1}
P.iw.prototype={}
W.k.prototype={}
W.em.prototype={
gj:function(a){return a.length}}
W.eo.prototype={
h:function(a){return String(a)}}
W.ep.prototype={
h:function(a){return String(a)}}
W.bi.prototype={$ibi:1}
W.bj.prototype={
dA:function(a,b,c){var u=a.getContext(b,P.nf(c))
return u},
$ibj:1}
W.aO.prototype={
gj:function(a){return a.length}}
W.eK.prototype={
gj:function(a){return a.length}}
W.F.prototype={$iF:1}
W.bI.prototype={
gj:function(a){return a.length}}
W.eL.prototype={}
W.a9.prototype={}
W.al.prototype={}
W.eM.prototype={
gj:function(a){return a.length}}
W.eN.prototype={
gj:function(a){return a.length}}
W.eP.prototype={
gj:function(a){return a.length}}
W.eQ.prototype={
h:function(a){return String(a)}}
W.cv.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[[P.a7,P.a8]]},
$ap:function(){return[[P.a7,P.a8]]},
$ih:1,
$ah:function(){return[[P.a7,P.a8]]},
$im:1,
$am:function(){return[[P.a7,P.a8]]}}
W.cw.prototype={
h:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gae(a))+" x "+H.f(this.gab(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
if(!u.$ia7)return!1
return a.left===u.gbc(b)&&a.top===u.gbg(b)&&this.gae(a)===u.gae(b)&&this.gab(a)===u.gab(b)},
gE:function(a){return W.kG(C.d.gE(a.left),C.d.gE(a.top),C.d.gE(this.gae(a)),C.d.gE(this.gab(a)))},
gcQ:function(a){return a.bottom},
gab:function(a){return a.height},
gbc:function(a){return a.left},
gc6:function(a){return a.right},
gbg:function(a){return a.top},
gae:function(a){return a.width},
$ia7:1,
$aa7:function(){return[P.a8]}}
W.eR.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[P.q]},
$ap:function(){return[P.q]},
$ih:1,
$ah:function(){return[P.q]},
$im:1,
$am:function(){return[P.q]}}
W.eS.prototype={
gj:function(a){return a.length}}
W.iu.prototype={
gj:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
k:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
this.a.replaceChild(c,u[b])},
l:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var u=this.hz(this)
return new J.a1(u,u.length)},
$ap:function(){return[W.X]},
$ah:function(){return[W.X]},
$am:function(){return[W.X]}}
W.X.prototype={
gbJ:function(a){return new W.iu(a,a.children)},
gcT:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.K()
if(s<0)s=-s*0
if(typeof r!=="number")return r.K()
if(r<0)r=-r*0
return new P.a7(u,t,s,r,[P.a8])},
h:function(a){return a.localName},
$iX:1}
W.i.prototype={$ii:1}
W.e.prototype={
fB:function(a,b,c,d){if(c!=null)this.dV(a,b,c,!1)},
dV:function(a,b,c,d){return a.addEventListener(b,H.bA(c,1),!1)}}
W.am.prototype={$iam:1}
W.bJ.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.am]},
$ap:function(){return[W.am]},
$ih:1,
$ah:function(){return[W.am]},
$im:1,
$am:function(){return[W.am]},
$ibJ:1}
W.f0.prototype={
gj:function(a){return a.length}}
W.f4.prototype={
gj:function(a){return a.length}}
W.aw.prototype={$iaw:1}
W.f7.prototype={
gj:function(a){return a.length}}
W.bL.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.C]},
$ap:function(){return[W.C]},
$ih:1,
$ah:function(){return[W.C]},
$im:1,
$am:function(){return[W.C]}}
W.bM.prototype={$ibM:1}
W.bo.prototype={$ibo:1}
W.fm.prototype={
h:function(a){return String(a)}}
W.fH.prototype={
gj:function(a){return a.length}}
W.bQ.prototype={$ibQ:1}
W.fI.prototype={
i:function(a,b){return P.aK(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aK(u.value[1]))}},
gam:function(a){var u=H.c([],[P.q])
this.F(a,new W.fJ(u))
return u},
gj:function(a){return a.size},
k:function(a,b,c){throw H.d(P.w("Not supported"))},
$iN:1,
$aN:function(){return[P.q,null]}}
W.fJ.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fK.prototype={
i:function(a,b){return P.aK(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aK(u.value[1]))}},
gam:function(a){var u=H.c([],[P.q])
this.F(a,new W.fL(u))
return u},
gj:function(a){return a.size},
k:function(a,b,c){throw H.d(P.w("Not supported"))},
$iN:1,
$aN:function(){return[P.q,null]}}
W.fL.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ay.prototype={$iay:1}
W.fM.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.ay]},
$ap:function(){return[W.ay]},
$ih:1,
$ah:function(){return[W.ay]},
$im:1,
$am:function(){return[W.ay]}}
W.ap.prototype={$iap:1}
W.it.prototype={
k:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.b(t,b)
u.replaceChild(c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.cA(u,u.length)},
gj:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$ap:function(){return[W.C]},
$ah:function(){return[W.C]},
$am:function(){return[W.C]}}
W.C.prototype={
hs:function(a,b){var u,t
try{u=a.parentNode
J.lo(u,b,a)}catch(t){H.bd(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.dG(a):u},
ff:function(a,b,c){return a.replaceChild(b,c)},
$iC:1}
W.cS.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.C]},
$ap:function(){return[W.C]},
$ih:1,
$ah:function(){return[W.C]},
$im:1,
$am:function(){return[W.C]}}
W.aB.prototype={$iaB:1,
gj:function(a){return a.length}}
W.fZ.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aB]},
$ap:function(){return[W.aB]},
$ih:1,
$ah:function(){return[W.aB]},
$im:1,
$am:function(){return[W.aB]}}
W.h8.prototype={
i:function(a,b){return P.aK(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aK(u.value[1]))}},
gam:function(a){var u=H.c([],[P.q])
this.F(a,new W.h9(u))
return u},
gj:function(a){return a.size},
k:function(a,b,c){throw H.d(P.w("Not supported"))},
$iN:1,
$aN:function(){return[P.q,null]}}
W.h9.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hb.prototype={
gj:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.hl.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aD]},
$ap:function(){return[W.aD]},
$ih:1,
$ah:function(){return[W.aD]},
$im:1,
$am:function(){return[W.aD]}}
W.aE.prototype={$iaE:1}
W.hm.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aE]},
$ap:function(){return[W.aE]},
$ih:1,
$ah:function(){return[W.aE]},
$im:1,
$am:function(){return[W.aE]}}
W.aF.prototype={$iaF:1,
gj:function(a){return a.length}}
W.hr.prototype={
i:function(a,b){return a.getItem(b)},
k:function(a,b,c){a.setItem(b,c)},
F:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gam:function(a){var u=H.c([],[P.q])
this.F(a,new W.hs(u))
return u},
gj:function(a){return a.length},
$iN:1,
$aN:function(){return[P.q,P.q]}}
W.hs.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aq.prototype={$iaq:1}
W.aG.prototype={$iaG:1}
W.ar.prototype={$iar:1}
W.hx.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.ar]},
$ap:function(){return[W.ar]},
$ih:1,
$ah:function(){return[W.ar]},
$im:1,
$am:function(){return[W.ar]}}
W.hy.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aG]},
$ap:function(){return[W.aG]},
$ih:1,
$ah:function(){return[W.aG]},
$im:1,
$am:function(){return[W.aG]}}
W.hD.prototype={
gj:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.br.prototype={$ibr:1}
W.hG.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aH]},
$ap:function(){return[W.aH]},
$ih:1,
$ah:function(){return[W.aH]},
$im:1,
$am:function(){return[W.aH]}}
W.hH.prototype={
gj:function(a){return a.length}}
W.b5.prototype={}
W.i1.prototype={
h:function(a){return String(a)}}
W.il.prototype={
gj:function(a){return a.length}}
W.b9.prototype={
gfQ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.w("deltaY is not supported"))},
gfP:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.w("deltaX is not supported"))},
$ib9:1}
W.c5.prototype={
fg:function(a,b){return a.requestAnimationFrame(H.bA(b,1))},
e4:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iv.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.F]},
$ap:function(){return[W.F]},
$ih:1,
$ah:function(){return[W.F]},
$im:1,
$am:function(){return[W.F]}}
W.dt.prototype={
h:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
if(!u.$ia7)return!1
return a.left===u.gbc(b)&&a.top===u.gbg(b)&&a.width===u.gae(b)&&a.height===u.gab(b)},
gE:function(a){return W.kG(C.d.gE(a.left),C.d.gE(a.top),C.d.gE(a.width),C.d.gE(a.height))},
gab:function(a){return a.height},
gae:function(a){return a.width}}
W.iz.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aw]},
$ap:function(){return[W.aw]},
$ih:1,
$ah:function(){return[W.aw]},
$im:1,
$am:function(){return[W.aw]}}
W.dL.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.C]},
$ap:function(){return[W.C]},
$ih:1,
$ah:function(){return[W.C]},
$im:1,
$am:function(){return[W.C]}}
W.iK.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aF]},
$ap:function(){return[W.aF]},
$ih:1,
$ah:function(){return[W.aF]},
$im:1,
$am:function(){return[W.aF]}}
W.iO.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aq]},
$ap:function(){return[W.aq]},
$ih:1,
$ah:function(){return[W.aq]},
$im:1,
$am:function(){return[W.aq]}}
W.ix.prototype={}
W.iy.prototype={
$1:function(a){return this.a.$1(a)}}
W.G.prototype={
gV:function(a){return new W.cA(a,this.gj(a))}}
W.cA.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cl(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gI:function(a){return this.d}}
W.ds.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.ca.prototype={}
W.cb.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dY.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.cc.prototype={}
W.cd.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
P.iL.prototype={
d8:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
c9:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.Q(a)
if(!!u.$ia4)return new Date(a.a)
if(!!u.$im1)throw H.d(P.hT("structured clone of RegExp"))
if(!!u.$iam)return a
if(!!u.$ibi)return a
if(!!u.$ibJ)return a
if(!!u.$ibM)return a
if(!!u.$ibS||!!u.$iaZ||!!u.$ibQ)return a
if(!!u.$iN){t=p.d8(a)
s=p.b
r=s.length
if(t>=r)return H.b(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.b(s,t)
s[t]=q
u.F(a,new P.iN(o,p))
return o.a}if(!!u.$im){t=p.d8(a)
o=p.b
if(t>=o.length)return H.b(o,t)
q=o[t]
if(q!=null)return q
return p.fN(a,t)}throw H.d(P.hT("structured clone of other type"))},
fN:function(a,b){var u,t=J.ch(a),s=t.gj(a),r=new Array(s),q=this.b
if(b>=q.length)return H.b(q,b)
q[b]=r
for(u=0;u<s;++u){q=this.c9(t.i(a,u))
if(u>=r.length)return H.b(r,u)
r[u]=q}return r}}
P.iN.prototype={
$2:function(a,b){this.a.a[a]=this.b.c9(b)},
$S:3}
P.j6.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.iM.prototype={}
P.f1.prototype={
gb6:function(){var u=this.b,t=H.kW(u,"p",0)
return new H.fr(new H.im(u,new P.f2(),[t]),new P.f3(),[t,W.X])},
k:function(a,b,c){var u=this.gb6()
J.ls(u.b.$1(J.js(u.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.ac(this.gb6().a)},
i:function(a,b){var u=this.gb6()
return u.b.$1(J.js(u.a,b))},
gV:function(a){var u=P.ke(this.gb6(),!1,W.X)
return new J.a1(u,u.length)},
$ap:function(){return[W.X]},
$ah:function(){return[W.X]},
$am:function(){return[W.X]}}
P.f2.prototype={
$1:function(a){return!!J.Q(a).$iX}}
P.f3.prototype={
$1:function(a){return H.l(a,"$iX")}}
P.iE.prototype={
gc6:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.u(t)
return u+t},
gcQ:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.u(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.f(u.a)+", "+H.f(u.b)+") "+H.f(u.c)+" x "+H.f(u.d)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.Q(b)
if(!!u.$ia7){t=q.a
if(t==u.gbc(b)){s=q.b
if(s==u.gbg(b)){r=q.c
if(typeof t!=="number")return t.C()
if(typeof r!=="number")return H.u(r)
if(t+r===u.gc6(b)){t=q.d
if(typeof s!=="number")return s.C()
if(typeof t!=="number")return H.u(t)
u=s+t===u.gcQ(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gE:function(a){var u=this,t=u.a,s=J.cm(t),r=u.b,q=J.cm(r),p=u.c
if(typeof t!=="number")return t.C()
if(typeof p!=="number")return H.u(p)
p=C.c.gE(t+p)
t=u.d
if(typeof r!=="number")return r.C()
if(typeof t!=="number")return H.u(t)
t=C.c.gE(r+t)
return P.mp(P.iB(P.iB(P.iB(P.iB(0,s),q),p),t))}}
P.a7.prototype={
gbc:function(a){return this.a},
gbg:function(a){return this.b},
gae:function(a){return this.c},
gab:function(a){return this.d}}
P.aX.prototype={$iaX:1}
P.ff.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
G:function(a,b){return this.i(a,b)},
$ap:function(){return[P.aX]},
$ih:1,
$ah:function(){return[P.aX]},
$im:1,
$am:function(){return[P.aX]}}
P.b0.prototype={$ib0:1}
P.fV.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
G:function(a,b){return this.i(a,b)},
$ap:function(){return[P.b0]},
$ih:1,
$ah:function(){return[P.b0]},
$im:1,
$am:function(){return[P.b0]}}
P.h1.prototype={
gj:function(a){return a.length}}
P.hu.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
G:function(a,b){return this.i(a,b)},
$ap:function(){return[P.q]},
$ih:1,
$ah:function(){return[P.q]},
$im:1,
$am:function(){return[P.q]}}
P.j.prototype={
gbJ:function(a){return new P.f1(a,new W.it(a))}}
P.b4.prototype={$ib4:1}
P.hI.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
G:function(a,b){return this.i(a,b)},
$ap:function(){return[P.b4]},
$ih:1,
$ah:function(){return[P.b4]},
$im:1,
$am:function(){return[P.b4]}}
P.dD.prototype={}
P.dE.prototype={}
P.dO.prototype={}
P.dP.prototype={}
P.dZ.prototype={}
P.e_.prototype={}
P.e5.prototype={}
P.e6.prototype={}
P.bs.prototype={$ih:1,
$ah:function(){return[P.t]},
$im:1,
$am:function(){return[P.t]}}
P.es.prototype={
gj:function(a){return a.length}}
P.et.prototype={
i:function(a,b){return P.aK(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aK(u.value[1]))}},
gam:function(a){var u=H.c([],[P.q])
this.F(a,new P.eu(u))
return u},
gj:function(a){return a.size},
k:function(a,b,c){throw H.d(P.w("Not supported"))},
$iN:1,
$aN:function(){return[P.q,null]}}
P.eu.prototype={
$2:function(a,b){return this.a.push(a)}}
P.ev.prototype={
gj:function(a){return a.length}}
P.bh.prototype={}
P.fW.prototype={
gj:function(a){return a.length}}
P.dr.prototype={}
P.d1.prototype={
hx:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}}
P.ho.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return P.aK(a.item(b))},
k:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
G:function(a,b){return this.i(a,b)},
$ap:function(){return[[P.N,,,]]},
$ih:1,
$ah:function(){return[[P.N,,,]]},
$im:1,
$am:function(){return[[P.N,,,]]}}
P.dV.prototype={}
P.dW.prototype={}
T.en.prototype={
aG:function(a,b){return!0},
h:function(a){return"all"}}
T.cB.prototype={
aG:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)if(u[s].aG(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.r)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.cL.prototype={}
T.aA.prototype={
aG:function(a,b){return!this.dF(0,b)},
h:function(a){return"!["+this.cd(0)+"]"}}
T.hc.prototype={
dL:function(a){var u,t
if(a.a.length<=0)throw H.d(P.o("May not create a Set with zero characters."))
u=new H.K([P.t,P.bc])
for(t=new H.cJ(a,a.gj(a));t.v();)u.k(0,t.d,!0)
this.a=u},
aG:function(a,b){return this.a.b9(0,b)},
h:function(a){var u=this.a
return P.bZ(u.gam(u),0,null)}}
R.d6.prototype={
t:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.df(this.a.L(0,b))
r.a=H.c([],[T.cL])
r.c=!1
this.c.push(r)
return r},
fZ:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
if(r.aG(0,a))return r}return},
h:function(a){return this.b}}
R.dc.prototype={
h:function(a){var u=H.l2(this.b,"\n","\\n"),t=H.l2(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.dd.prototype={
h:function(a){return this.b}}
R.hE.prototype={
L:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.d6(this,b)
u.c=H.c([],[R.df])
this.a.k(0,b,u)}return u},
b2:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.dd(a)
u=P.q
t.c=new H.K([u,u])
this.b.k(0,a,t)}return t},
hB:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.c([],[R.dc]),k=this.c,j=[P.t],i=H.c([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)l.push(t)
return l}r=C.a.D(a,s)
q=k.fZ(r)
if(q==null){if(t==null){i.push(r)
p=P.bZ(i,0,m)
throw H.d(P.o("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}l.push(t)
s=t.c+1
i=H.c([],j)
k=this.c
t=m}else{if(!q.c)i.push(r)
k=q.b
if(k.d!=null){p=P.bZ(i,0,m)
o=k.d
n=o.c.i(0,p)
t=new R.dc(n==null?o.b:n,p,s)}++s}}}}
R.df.prototype={
h:function(a){return this.b.b+": "+this.cd(0)}}
O.au.prototype={
b4:function(a){this.a=H.c([],[a])
this.c=this.b=null},
cb:function(a,b,c){this.b=b
this.c=a},
az:function(a,b){return this.cb(a,null,b)},
bA:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
ci:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.a1(u,u.length)},
G:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
l:function(a,b){var u,t,s=this,r=[H.kW(s,"au",0)]
if(s.bA(H.c([b],r))){u=s.a
t=u.length
u.push(b)
s.ci(t,H.c([b],r))}},
bF:function(a,b){var u,t
if(this.bA(b)){u=this.a
t=u.length
C.b.bF(u,b)
this.ci(t,b)}},
$ih:1}
O.bP.prototype={
gj:function(a){return this.a.length},
gm:function(){var u=this.b
return u==null?this.b=D.B():u},
aA:function(){var u=this.b
if(u!=null)u.B(null)},
ga1:function(a){var u=this.a
if(u.length>0)return C.b.gaw(u)
else return V.aY()},
bf:function(a){var u=this.a
if(a==null)u.push(V.aY())
else u.push(a)
this.aA()},
aZ:function(){var u=this.a
if(u.length>0){u.pop()
this.aA()}}}
E.ez.prototype={}
E.av.prototype={
sbj:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().N(0,s.gdm())
u=s.c
if(u!=null)u.gm().l(0,s.gdm())
t=new D.v("shape",r,s.c)
t.b=!0
s.bd(t)}},
ah:function(a,b){var u
for(u=this.y.a,u=new J.a1(u,u.length);u.v();)u.d.ah(0,b)},
a8:function(a){var u,t=this,s=a.dx
s.a.push(s.ga1(s))
s.aA()
a.c1(t.f)
s=a.dy
u=(s&&C.b).gaw(s)
if(u!=null&&t.d!=null)u.ds(a,t)
for(s=t.y.a,s=new J.a1(s,s.length);s.v();)s.d.a8(a)
a.c0()
a.dx.aZ()},
bd:function(a){var u=this.z
if(u!=null)u.B(a)},
a7:function(){return this.bd(null)},
dn:function(a){this.e=null
this.bd(a)},
hg:function(){return this.dn(null)},
dl:function(a){this.bd(a)},
hd:function(){return this.dl(null)},
hc:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdk(),s=[{func:1,ret:-1,args:[D.P]}],r=0;r<b.length;b.length===u||(0,H.r)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.aQ()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.a7()},
hf:function(a,b){var u,t
for(u=b.gV(b),t=this.gdk();u.v();)u.gI(u).gm().N(0,t)
this.a7()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.h4.prototype={
dK:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a4(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bP()
t=[V.ao]
u.a=H.c([],t)
u.gm().l(0,new E.h5(s))
s.cy=u
u=new O.bP()
u.a=H.c([],t)
u.gm().l(0,new E.h6(s))
s.db=u
u=new O.bP()
u.a=H.c([],t)
u.gm().l(0,new E.h7(s))
s.dx=u
u=H.c([],[O.d8])
s.dy=u
u.push(null)
s.fr=new H.K([P.q,A.d2])},
ghp:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga1(s)
u=t.db
u=t.z=s.p(0,u.ga1(u))
s=u}return s},
c1:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gaw(u):a)},
c0:function(){var u=this.dy
if(u.length>1)u.pop()},
cO:function(a){var u=a.b
if(u.length===0)throw H.d(P.o("May not cache a shader with no name."))
if(this.fr.b9(0,u))throw H.d(P.o('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)}}
E.h5.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.h6.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.h7.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.da.prototype={
cl:function(a){this.du()},
ck:function(){return this.cl(null)},
gh2:function(){var u,t=this,s=Date.now(),r=C.c.a0(P.k9(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.a4(s,!1)
return u/r},
cD:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.p()
if(typeof r!=="number")return H.u(r)
u=C.d.bS(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.p()
t=C.d.bS(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kt(C.p,s.ght())}},
du:function(){if(!this.ch){this.ch=!0
var u=window
C.B.e4(u)
C.B.fg(u,W.kR(new E.hC(this),P.a8))}},
hr:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.cD()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a4(r,!1)
s.y=P.k9(r-s.r.a).a*0.000001
r=s.cy
C.b.sj(r.a,0)
r.aA()
r=s.db
C.b.sj(r.a,0)
r.aA()
r=s.dx
C.b.sj(r.a,0)
r.aA()
r=s.dy;(r&&C.b).sj(r,0)
s.dy.push(null)
o.a8(p.e)}}catch(q){u=H.bd(q)
t=H.jT(q)
P.jX("Error: "+H.f(u))
P.jX("Stack: "+H.f(t))
throw H.d(u)}}}
E.hC.prototype={
$1:function(a){var u=this.a
if(u.ch){u.ch=!1
u.hr()}}}
Z.dn.prototype={}
Z.co.prototype={
a4:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.bd(s)
t=P.o('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.f(u))
throw H.d(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.f(u.e)+"]"}}
Z.dp.prototype={}
Z.bG.prototype={
av:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a4:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a4(a)},
aI:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a8:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.b(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.q],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)p.push(u[s].h(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.ai(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.b.t(p,", ")+"\nAttrs:   "+C.b.t(r,", ")}}
Z.bN.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.bX(this.c))+"'")+"]"}}
Z.b8.prototype={
gcc:function(a){var u=this.a,t=(u&$.ah().a)!==0?3:0
if((u&$.aN().a)!==0)t+=3
if((u&$.aM().a)!==0)t+=3
if((u&$.be().a)!==0)t+=2
if((u&$.bf().a)!==0)t+=3
if((u&$.cj().a)!==0)t+=3
if((u&$.ck().a)!==0)t+=4
if((u&$.bD().a)!==0)++t
return(u&$.aL().a)!==0?t+4:t},
fE:function(a){var u,t=$.ah(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aN()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aM()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.be()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bf()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ck()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bD()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aL()
if((s&t.a)!==0)if(u===a)return t
return $.lj()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b8))return!1
return this.a===b.a},
h:function(a){var u=H.c([],[P.q]),t=this.a
if((t&$.ah().a)!==0)u.push("Pos")
if((t&$.aN().a)!==0)u.push("Norm")
if((t&$.aM().a)!==0)u.push("Binm")
if((t&$.be().a)!==0)u.push("Txt2D")
if((t&$.bf().a)!==0)u.push("TxtCube")
if((t&$.cj().a)!==0)u.push("Clr3")
if((t&$.ck().a)!==0)u.push("Clr4")
if((t&$.bD().a)!==0)u.push("Weight")
if((t&$.aL().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.t(u,"|")}}
D.eC.prototype={}
D.aQ.prototype={
l:function(a,b){var u=this.a;(u==null?this.a=H.c([],[{func:1,ret:-1,args:[D.P]}]):u).push(b)},
N:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.al(s,b)
if(s===!0){s=t.a
u=(s&&C.b).N(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.al(s,b)
if(s===!0){s=t.b
u=(s&&C.b).N(s,b)||u}return u},
B:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.P()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.b.F(P.ke(u,!0,{func:1,ret:-1,args:[D.P]}),new D.eY(q))
u=r.b
if(u!=null){r.b=H.c([],[{func:1,ret:-1,args:[D.P]}])
C.b.F(u,new D.eZ(q))}return!0},
cZ:function(){return this.B(null)},
ay:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.B(u)}}}}
D.eY.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eZ.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.P.prototype={}
D.aS.prototype={}
D.aT.prototype={}
D.v.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.cp.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cp))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.f(this.a)}}
X.cG.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cG))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.f(this.a)}}
X.fe.prototype={
hl:function(a){this.c=a.b
this.d.l(0,a.a)
return!1},
hh:function(a){this.c=a.b
this.d.N(0,a.a)
return!1}}
X.cK.prototype={}
X.fn.prototype={
aM:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.p()
u=b.b
t=q.ch
if(typeof u!=="number")return u.p()
s=new V.a0(o.a+n*m,o.b+u*t)
t=q.a.gaF()
r=new X.az(a,V.aC(),q.x,t,s)
r.b=!0
q.z=new P.a4(p,!1)
q.x=s
return r},
c_:function(a,b){this.r=a.a
return!1},
aY:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dB()
if(typeof u!=="number")return u.af()
this.r=(u&~t)>>>0
return!1},
aX:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.aM(a,b))
return!0},
hm:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaF()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.p()
q=a.b
p=o.cy
if(typeof q!=="number")return q.p()
t=new X.bR(new V.D(s*r,q*p),u,t)
t.b=!0
n.B(t)
return!0},
eK:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cK(c,r.a.gaF(),b)
s.b=!0
t.B(s)
r.y=new P.a4(u,!1)
r.x=V.aC()}}
X.aa.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aa))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.az.prototype={}
X.fN.prototype={
bp:function(a,b,c){var u=this,t=new P.a4(Date.now(),!1),s=u.a.gaF(),r=new X.az(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c_:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.B(this.bp(a,b,!0))
return!0},
aY:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dB()
if(typeof t!=="number")return t.af()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.B(u.bp(a,b,!0))
return!0},
aX:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.bp(a,b,!1))
return!0},
hn:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaF()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.p()
r=a.b
q=p.ch
if(typeof r!=="number")return r.p()
u=new X.bR(new V.D(t*s,r*q),u,b)
u.b=!0
o.B(u)
return!0},
gcY:function(){var u=this.b
return u==null?this.b=D.B():u},
gc8:function(){var u=this.c
return u==null?this.c=D.B():u},
gdj:function(){var u=this.d
return u==null?this.d=D.B():u}}
X.bR.prototype={}
X.h0.prototype={}
X.de.prototype={}
X.hF.prototype={
aM:function(a,b){var u=this,t=new P.a4(Date.now(),!1),s=a.length>0?a[0]:V.aC(),r=u.a.gaF(),q=new X.de(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hk:function(a){var u=this.b
if(u==null)return!1
u.B(this.aM(a,!0))
return!0},
hi:function(a){var u=this.c
if(u==null)return!1
u.B(this.aM(a,!0))
return!0},
hj:function(a){var u=this.d
if(u==null)return!1
u.B(this.aM(a,!1))
return!0}}
X.dj.prototype={
gaF:function(){var u=this.a,t=C.n.gcT(u).c
t.toString
u=C.n.gcT(u).d
u.toString
return V.d_(0,0,t,u)},
cr:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cG(u,new X.aa(t,a.altKey,a.shiftKey))},
aD:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.aa(t,a.altKey,a.shiftKey)},
bD:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.aa(t,a.altKey,a.shiftKey)},
as:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.H()
u=t.top
if(typeof r!=="number")return r.H()
return new V.a0(s-q,r-u)},
aN:function(a){return new V.D(a.movementX,a.movementY)},
bB:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a0])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
q=C.d.Y(r.pageX)
C.d.Y(r.pageY)
p=o.left
C.d.Y(r.pageX)
n.push(new V.a0(q-p,C.d.Y(r.pageY)-o.top))}return n},
aq:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cp(u,new X.aa(t,a.altKey,a.shiftKey))},
br:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.H()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.H()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eE:function(a){this.f=!0},
en:function(a){this.f=!1},
eu:function(a){if(this.f&&this.br(a))a.preventDefault()},
eI:function(a){var u
if(!this.f)return
u=this.cr(a)
this.b.hl(u)},
eG:function(a){var u
if(!this.f)return
u=this.cr(a)
this.b.hh(u)},
eM:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aD(a)
if(r.x){u=r.aq(a)
t=r.aN(a)
if(r.d.c_(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.aq(a)
s=r.as(a)
if(r.c.c_(u,s))a.preventDefault()},
eQ:function(a){var u,t,s,r=this
r.aD(a)
u=r.aq(a)
if(r.x){t=r.aN(a)
if(r.d.aY(u,t))a.preventDefault()
return}if(r.r)return
s=r.as(a)
if(r.c.aY(u,s))a.preventDefault()},
ey:function(a){var u,t,s,r=this
if(!r.br(a)){r.aD(a)
u=r.aq(a)
if(r.x){t=r.aN(a)
if(r.d.aY(u,t))a.preventDefault()
return}if(r.r)return
s=r.as(a)
if(r.c.aY(u,s))a.preventDefault()}},
eO:function(a){var u,t,s,r=this
r.aD(a)
u=r.aq(a)
if(r.x){t=r.aN(a)
if(r.d.aX(u,t))a.preventDefault()
return}if(r.r)return
s=r.as(a)
if(r.c.aX(u,s))a.preventDefault()},
ew:function(a){var u,t,s,r=this
if(!r.br(a)){r.aD(a)
u=r.aq(a)
if(r.x){t=r.aN(a)
if(r.d.aX(u,t))a.preventDefault()
return}if(r.r)return
s=r.as(a)
if(r.c.aX(u,s))a.preventDefault()}},
eS:function(a){var u,t,s=this
s.aD(a)
u=new V.D((a&&C.A).gfP(a),C.A.gfQ(a)).u(0,180)
if(s.x){if(s.d.hm(u))a.preventDefault()
return}if(s.r)return
t=s.as(a)
if(s.c.hn(u,t))a.preventDefault()},
eU:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aq(s.y)
t=s.as(s.y)
s.d.eK(u,t,r)}},
f9:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bD(a)
u=t.bB(a)
if(t.e.hk(u))a.preventDefault()},
f5:function(a){var u
this.bD(a)
u=this.bB(a)
if(this.e.hi(u))a.preventDefault()},
f7:function(a){var u
this.bD(a)
u=this.bB(a)
if(this.e.hj(u))a.preventDefault()}}
D.bm.prototype={
an:function(a){var u=this.r
if(u!=null)u.B(a)},
dP:function(){return this.an(null)},
$ia5:1}
D.a5.prototype={}
D.cH.prototype={
an:function(a){var u=this.x
if(u!=null)u.B(a)},
cB:function(a){var u=this.y
if(u!=null)u.B(a)},
eJ:function(){return this.cB(null)},
eW:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.r)(a),++t){s=a[t]
if(s==null||this.e0(s))return!1}return!0},
eh:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcA(),s=[{func:1,ret:-1,args:[D.P]}],r=0;r<b.length;b.length===u||(0,H.r)(b),++r){q=b[r]
if(q instanceof D.bm)this.e.push(q)
p=q.r
if(p==null){p=new D.aQ()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}u=new D.aS()
u.b=!0
this.an(u)},
f_:function(a,b){var u,t,s
for(u=b.gV(b),t=this.gcA();u.v();){s=u.gI(u)
C.b.N(this.e,s)
s.gm().N(0,t)}u=new D.aT()
u.b=!0
this.an(u)},
e0:function(a){var u=C.b.al(this.e,a)
return u},
$ah:function(){return[D.a5]},
$aau:function(){return[D.a5]}}
D.h_.prototype={$ia5:1}
D.hn.prototype={$ia5:1}
V.R.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
V.S.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.eX.prototype={}
V.cO.prototype={
a9:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.J])
return t},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cO))return!1
u=b.a
t=$.y().a
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
h:function(a){var u,t,s,r,q=this,p=[P.J],o=V.bC(H.c([q.a,q.d,q.r],p),3,0),n=V.bC(H.c([q.b,q.e,q.x],p),3,0),m=V.bC(H.c([q.c,q.f,q.y],p),3,0)
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
V.ao.prototype={
a9:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.J])
return t},
dh:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.y().a)return V.aY()
u=1/b1
t=-n
s=-a0
return V.ad((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
p:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ad(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bh:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.z(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
c7:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.T(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ao))return!1
u=b.a
t=$.y().a
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
h:function(a){return this.R()},
J:function(a){var u,t,s,r,q,p=this,o=[P.J],n=V.bC(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bC(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bC(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bC(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
R:function(){return this.J("")}}
V.a0.prototype={
H:function(a,b){return new V.a0(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}}
V.T.prototype={
C:function(a,b){return new V.T(this.a+b.a,this.b+b.b,this.c+b.c)},
H:function(a,b){return new V.T(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){return new V.T(this.a*b,this.b*b,this.c*b)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
V.b1.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b1))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.cZ.prototype={
ga6:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cZ))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.D.prototype={
bW:function(a){return Math.sqrt(this.w(this))},
w:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.u(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.u(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.p()
u=this.b
if(typeof u!=="number")return u.p()
return new V.D(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.y().a){u=$.kA
return u==null?$.kA=new V.D(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.D(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.D))return!1
u=b.a
t=this.a
s=$.y()
s.toString
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.u(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}}
V.z.prototype={
bW:function(a){return Math.sqrt(this.w(this))},
w:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
au:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.z(u*t-s*r,s*q-p*t,p*r-u*q)},
C:function(a,b){return new V.z(this.a+b.a,this.b+b.b,this.c+b.c)},
P:function(a){return new V.z(-this.a,-this.b,-this.c)},
p:function(a,b){return new V.z(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if(Math.abs(b-0)<$.y().a)return V.c4()
return new V.z(this.a/b,this.b/b,this.c/b)},
di:function(){var u=$.y().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.z))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
U.eF.prototype={
bl:function(a){var u=V.nE(a,this.c,this.b)
return u},
gm:function(){var u=this.y
return u==null?this.y=D.B():u},
M:function(a){var u=this.y
if(u!=null)u.B(a)},
sca:function(a,b){},
sbX:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.y().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bl(u)}s=new D.v("maximumLocation",s,t.b)
s.b=!0
t.M(s)}},
sbZ:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.y().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bl(u)}s=new D.v("minimumLocation",s,t.c)
s.b=!0
t.M(s)}},
sa5:function(a,b){var u,t=this
b=t.bl(b)
u=t.d
if(!(Math.abs(u-b)<$.y().a)){t.d=b
u=new D.v("location",u,b)
u.b=!0
t.M(u)}},
sbY:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.y().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.v("maximumVelocity",r,a)
r.b=!0
s.M(r)}},
sT:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.y().a)){u.f=a
t=new D.v("velocity",t,a)
t.b=!0
u.M(t)}},
sbL:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.y().a)){this.x=a
u=new D.v("dampening",u,a)
u.b=!0
this.M(u)}},
ah:function(a,b){var u,t,s,r=this,q=r.f,p=$.y().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa5(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.y().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sT(u)}}}
U.cr.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.B():u},
aJ:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cr))return!1
return J.A(this.a,b.a)},
h:function(a){return"Constant: "+this.a.J("          ")}}
U.bK.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.B():u},
M:function(a){var u=this.e
if(u!=null)u.B(a)},
a3:function(){return this.M(null)},
ef:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaC(),s=[{func:1,ret:-1,args:[D.P]}],r=0;r<b.length;b.length===u||(0,H.r)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aS()
u.b=!0
this.M(u)},
eY:function(a,b){var u,t
for(u=b.gV(b),t=this.gaC();u.v();)u.gI(u).gm().N(0,t)
u=new D.aT()
u.b=!0
this.M(u)},
aJ:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.K()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a1(r,r.length),u=null;r.v();){q=r.d
if(q!=null){t=q.aJ(0,b,c)
if(t!=null)u=u==null?t:t.p(0,u)}}s.f=u==null?V.aY():u
r=s.e
if(r!=null)r.ay(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bK))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.A(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$ah:function(){return[U.a6]},
$aau:function(){return[U.a6]},
$ia6:1}
U.a6.prototype={}
U.dk.prototype={
gm:function(){var u=this.cy
return u==null?this.cy=D.B():u},
M:function(a){var u=this.cy
if(u!=null)u.B(a)},
a3:function(){return this.M(null)},
aO:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcY().l(0,u.gbs())
u.a.c.gdj().l(0,u.gbu())
u.a.c.gc8().l(0,u.gbw())
return!0},
bt:function(a){var u=this
if(!J.A(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bv:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaz")
if(!n.y)return
if(n.x){u=a.d.H(0,a.y)
u=new V.D(u.a,u.b)
u=u.w(u)
t=n.r
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.H(0,a.y)
u=new V.D(t.a,t.b).p(0,2).u(0,u.ga6())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.p()
s=n.e
if(typeof s!=="number")return H.u(s)
t.sT(u*10*s)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=new V.D(s.a,s.b).p(0,2).u(0,u.ga6())
s=n.b
q=r.a
if(typeof q!=="number")return q.P()
p=n.e
if(typeof p!=="number")return H.u(p)
o=n.z
if(typeof o!=="number")return H.u(o)
s.sa5(0,-q*p+o)
n.b.sT(0)
t=t.H(0,a.z)
n.Q=new V.D(t.a,t.b).p(0,2).u(0,u.ga6())}n.a3()},
bx:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.w(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.p()
s=r.e
if(typeof s!=="number")return H.u(s)
u.sT(t*10*s)
r.a3()}},
aJ:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.K()
if(q<p){r.ch=p
u=b.y
r.b.ah(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.ad(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia6:1}
U.dl.prototype={
gm:function(){var u=this.fx
return u==null?this.fx=D.B():u},
M:function(a){var u=this.fx
if(u!=null)u.B(a)},
a3:function(){return this.M(null)},
aO:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcY().l(0,s.gbs())
s.a.c.gdj().l(0,s.gbu())
s.a.c.gc8().l(0,s.gbw())
u=s.a.d
t=u.f
u=t==null?u.f=D.B():t
u.l(0,s.ge8())
u=s.a.d
t=u.d
u=t==null?u.d=D.B():t
u.l(0,s.gea())
u=s.a.e
t=u.b
u=t==null?u.b=D.B():t
u.l(0,s.gfw())
u=s.a.e
t=u.d
u=t==null?u.d=D.B():t
u.l(0,s.gfu())
u=s.a.e
t=u.c
u=t==null?u.c=D.B():t
u.l(0,s.gfs())
return!0},
ak:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.P()
u=-u}if(this.r){if(typeof t!=="number")return t.P()
t=-t}return new V.D(u,t)},
bt:function(a){var u=this
H.l(a,"$iaz")
if(!J.A(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bv:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaz")
if(!n.cx)return
if(n.ch){u=a.d.H(0,a.y)
u=new V.D(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.H(0,a.y)
u=n.ak(new V.D(t.a,t.b).p(0,2).u(0,u.ga6()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.P()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sT(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.P()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=n.ak(new V.D(s.a,s.b).p(0,2).u(0,u.ga6()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa5(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa5(0,-p*q+s)
n.b.sT(0)
n.c.sT(0)
t=t.H(0,a.z)
n.dx=n.ak(new V.D(t.a,t.b).p(0,2).u(0,u.ga6()))}n.a3()},
bx:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.P()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sT(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.P()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sT(-t*10*u)
r.a3()}},
e9:function(a){var u=this
if(H.l(a,"$icK").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eb:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaz")
if(!J.A(n.d,a.x.b))return
u=a.c
t=a.d
s=t.H(0,a.y)
r=n.ak(new V.D(s.a,s.b).p(0,2).u(0,u.ga6()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa5(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa5(0,-p*q+s)
n.b.sT(0)
n.c.sT(0)
t=t.H(0,a.z)
n.dx=n.ak(new V.D(t.a,t.b).p(0,2).u(0,u.ga6()))
n.a3()},
fz:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fv:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$ide")
if(!n.cx)return
if(n.ch){u=a.d.H(0,a.y)
u=new V.D(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.H(0,a.y)
u=n.ak(new V.D(t.a,t.b).p(0,2).u(0,u.ga6()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.P()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sT(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.P()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=n.ak(new V.D(s.a,s.b).p(0,2).u(0,u.ga6()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa5(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa5(0,-p*q+s)
n.b.sT(0)
n.c.sT(0)
t=t.H(0,a.z)
n.dx=n.ak(new V.D(t.a,t.b).p(0,2).u(0,u.ga6()))}n.a3()},
ft:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.P()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sT(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.P()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sT(-t*10*u)
r.a3()}},
aJ:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.K()
if(q<p){r.dy=p
u=b.y
r.c.ah(0,u)
r.b.ah(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.ad(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.p(0,V.ad(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia6:1}
U.dm.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.B():u},
M:function(a){var u=this.r
if(u!=null)u.B(a)},
aO:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.B():t
t=r.gec()
u.l(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.B():s).l(0,t)
return!0},
ed:function(a){var u,t,s,r,q=this
if(!J.A(q.b,q.a.b.c))return
H.l(a,"$ibR")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.p()
r=u+t*s
if(u!==r){q.d=r
u=new D.v("zoom",u,r)
u.b=!0
q.M(u)}},
aJ:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ad(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia6:1}
M.cq.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.B():u},
W:function(a){var u=this.r
if(u!=null)u.B(a)},
aL:function(){return this.W(null)},
f1:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gX(),s=[{func:1,ret:-1,args:[D.P]}],r=0;r<b.length;b.length===u||(0,H.r)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aS()
u.b=!0
this.W(u)},
f3:function(a,b){var u,t
for(u=b.gV(b),t=this.gX();u.v();)u.gI(u).gm().N(0,t)
u=new D.aT()
u.b=!0
this.W(u)},
a8:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.a1(u,u.length);u.v();){t=u.d
if(t!=null)t.a8(a)}s.f=!1},
$ah:function(){return[M.ae]},
$aau:function(){return[M.ae]},
$iae:1}
M.cs.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.B():u},
W:function(a){var u=this.r
if(u!=null)u.B(a)},
aL:function(){return this.W(null)},
sb_:function(a,b){var u,t,s=this
if(b==null)b=X.jy(null)
u=s.c
if(u!==b){if(u!=null)u.gm().N(0,s.gX())
t=s.c
s.c=b
b.gm().l(0,s.gX())
u=new D.v("target",t,s.c)
u.b=!0
s.W(u)}},
sb0:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().N(0,t.gX())
u=t.d
t.d=a
if(a!=null)a.gm().l(0,t.gX())
s=new D.v("technique",u,t.d)
s.b=!0
t.W(s)}},
a8:function(a){var u,t,s=this
a.c1(s.d)
s.c.a4(a)
u=s.b
u.toString
a.cy.bf(V.aY())
t=V.aY()
u.a
a.db.bf(t)
s.e.ah(0,a)
s.e.a8(a)
s.b.toString
a.cy.aZ()
a.db.aZ()
s.c.toString
a.c0()},
$iae:1}
M.cx.prototype={
W:function(a){var u=this.y
if(u!=null)u.B(a)},
aL:function(){return this.W(null)},
ep:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gX(),s=[{func:1,ret:-1,args:[D.P]}],r=0;r<b.length;b.length===u||(0,H.r)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.aQ()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aS()
u.b=!0
this.W(u)},
er:function(a,b){var u,t
for(u=b.gV(b),t=this.gX();u.v();)u.gI(u).gm().N(0,t)
u=new D.aT()
u.b=!0
this.W(u)},
scS:function(a){var u,t,s=this
if(a==null)a=X.kh(null)
u=s.b
if(u!==a){if(u!=null)u.gm().N(0,s.gX())
t=s.b
s.b=a
a.gm().l(0,s.gX())
u=new D.v("camera",t,s.b)
u.b=!0
s.W(u)}},
sb_:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gm().N(0,t.gX())
u=t.c
t.c=b
b.gm().l(0,t.gX())
s=new D.v("target",u,t.c)
s.b=!0
t.W(s)}},
sb0:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().N(0,t.gX())
u=t.d
t.d=a
if(a!=null)a.gm().l(0,t.gX())
s=new D.v("technique",u,t.d)
s.b=!0
t.W(s)}},
gm:function(){var u=this.y
return u==null?this.y=D.B():u},
a8:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=this
a.c1(j.d)
j.c.a4(a)
u=j.b
t=a.c
s=a.d
r=u.c
q=u.d
p=u.e
o=p-q
n=1/Math.tan(r*0.5)
m=V.ad(-n/(t/s),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
u.a
a.cy.bf(m)
t=$.ki
if(t==null){t=V.kk()
s=V.jJ()
r=$.kB
t=V.kf(t,s,r==null?$.kB=new V.z(0,0,-1):r)
$.ki=t
l=t}else l=t
t=u.b
if(t!=null){k=t.aJ(0,a,u)
if(k!=null)l=k.p(0,l)}a.db.bf(l)
u=j.d
if(u!=null)u.ah(0,a)
for(u=j.e.a,u=new J.a1(u,u.length);u.v();)u.d.ah(0,a)
for(u=j.e.a,u=new J.a1(u,u.length);u.v();)u.d.a8(a)
j.b.toString
a.cy.aZ()
a.db.aZ()
j.c.aI(a)
a.c0()},
$iae:1}
M.ae.prototype={}
A.cn.prototype={}
A.er.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fV:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
cW:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.Z.prototype={
gai:function(a){var u=this.a?1:0
return u|0|0},
h:function(a){var u=this.a?1:0
return""+(u|0|0)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.Z))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.ft.prototype={
dJ:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.O("")
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
A.mY(c0,u)
A.n_(c0,u)
A.mZ(c0,u)
A.n1(c0,u)
A.n2(c0,u)
A.n0(c0,u)
A.n3(c0,u)
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
b5.dg(0,s.charCodeAt(0)==0?s:s,A.mX(b5.z))
b5.Q=b5.x.i(0,"posAttr")
b5.cx=b5.x.i(0,"normAttr")
b5.ch=b5.x.i(0,"binmAttr")
b5.cy=b5.x.i(0,"txt2DAttr")
b5.db=b5.x.i(0,"txtCubeAttr")
b5.dx=b5.x.i(0,"bendAttr")
if(c0.dx)b5.id=H.l(b5.y.S(0,"invViewMat"),"$ia2")
if(t)b5.dy=H.l(b5.y.S(0,"objMat"),"$ia2")
if(r)b5.fr=H.l(b5.y.S(0,"viewObjMat"),"$ia2")
b5.fy=H.l(b5.y.S(0,"projViewObjMat"),"$ia2")
if(c0.ry)b5.k1=H.l(b5.y.S(0,"txt2DMat"),"$ic1")
if(c0.x1)b5.k2=H.l(b5.y.S(0,"txtCubeMat"),"$ia2")
if(c0.x2)b5.k3=H.l(b5.y.S(0,"colorMat"),"$ia2")
b5.r1=H.c([],[A.a2])
t=c0.y2
if(t>0){b5.k4=b5.y.S(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.i(0,q)
if(m==null)H.n(P.o(b7+q+b8))
s.push(H.l(m,"$ia2"))}}if(c0.a.a)b5.r2=H.l(b5.y.S(0,"emissionClr"),"$iI")
if(c0.b.a)b5.x1=H.l(b5.y.S(0,"ambientClr"),"$iI")
if(c0.c.a)b5.y2=H.l(b5.y.S(0,"diffuseClr"),"$iI")
if(c0.d.a)b5.d0=H.l(b5.y.S(0,"invDiffuseClr"),"$iI")
t=c0.e.a
if(!t)s=!1
else s=!0
if(s){b5.d2=H.l(b5.y.S(0,"shininess"),"$iV")
if(t)b5.d1=H.l(b5.y.S(0,"specularClr"),"$iI")}if(c0.cy){b5.d3=H.l(b5.y.S(0,"envSampler"),"$ibu")
if(c0.r.a)b5.d4=H.l(b5.y.S(0,"reflectClr"),"$iI")
t=c0.x.a
if(!t)s=!1
else s=!0
if(s){b5.d5=H.l(b5.y.S(0,"refraction"),"$iV")
if(t)b5.d6=H.l(b5.y.S(0,"refractClr"),"$iI")}}if(c0.y.a)b5.d7=H.l(b5.y.S(0,"alpha"),"$iV")
t=P.t
s=[t,A.b6]
b5.bM=new H.K(s)
b5.bN=new H.K([t,[P.m,A.c0]])
b5.bO=new H.K(s)
b5.bP=new H.K([t,[P.m,A.c2]])
b5.bQ=new H.K(s)
b5.bR=new H.K([t,[P.m,A.c3]])
if(c0.id){for(t=c0.z,s=t.length,r=[A.c0],l=0;l<t.length;t.length===s||(0,H.r)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.f(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.af()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.i(0,g)
if(m==null)H.n(P.o(b7+g+b8))
H.l(m,"$iI")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.i(0,g)
if(f==null)H.n(P.o(b7+g+b8))
H.l(f,"$iI")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.i(0,g)
if(e==null)H.n(P.o(b7+g+b8))
H.l(e,"$iI")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.i(0,g)
if(m==null)H.n(P.o(b7+g+b8))
H.l(m,"$iI")
o=b5.y
g=i+"s["+n+"].color"
f=o.i(0,g)
if(f==null)H.n(P.o(b7+g+b8))
H.l(f,"$iI")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.i(0,o)
if(e==null)H.n(P.o(b7+o+b8))
H.l(e,"$iaJ")
a=e}else a=b6
h.push(new A.c0(b,c,d,m,f,a))}b5.bN.k(0,j,h)
q=b5.bM
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.n(P.o(b7+o+b8))
q.k(0,j,m)}for(t=c0.Q,s=t.length,r=[A.c2],l=0;l<t.length;t.length===s||(0,H.r)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.f(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.i(0,o)
if(m==null)H.n(P.o(b7+o+b8))
H.l(m,"$iI")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.i(0,o)
if(f==null)H.n(P.o(b7+o+b8))
H.l(f,"$iI")
p=b5.y
o=i+"s["+n+"].color"
e=p.i(0,o)
if(e==null)H.n(P.o(b7+o+b8))
H.l(e,"$iI")
if(typeof j!=="number")return j.af()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.i(0,o)
if(a0==null)H.n(P.o(b7+o+b8))
H.l(a0,"$ic1")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.i(0,o)
if(a0==null)H.n(P.o(b7+o+b8))
H.l(a0,"$ibu")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.i(0,o)
if(a0==null)H.n(P.o(b7+o+b8))
H.l(a0,"$ibu")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.i(0,o)
if(a2==null)H.n(P.o(b7+o+b8))
H.l(a2,"$ibt")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.i(0,o)
if(a0==null)H.n(P.o(b7+o+b8))
H.l(a0,"$iV")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.i(0,o)
if(a2==null)H.n(P.o(b7+o+b8))
H.l(a2,"$iV")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.i(0,o)
if(a5==null)H.n(P.o(b7+o+b8))
H.l(a5,"$iV")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}h.push(new A.c2(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.bP.k(0,j,h)
q=b5.bO
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.n(P.o(b7+o+b8))
q.k(0,j,m)}for(t=c0.ch,s=t.length,r=[A.c3],l=0;l<t.length;t.length===s||(0,H.r)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.f(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.i(0,o)
if(m==null)H.n(P.o(b7+o+b8))
H.l(m,"$iI")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.i(0,o)
if(f==null)H.n(P.o(b7+o+b8))
H.l(f,"$iI")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.i(0,o)
if(e==null)H.n(P.o(b7+o+b8))
H.l(e,"$iI")
p=b5.y
o=i+"s["+n+"].color"
a0=p.i(0,o)
if(a0==null)H.n(P.o(b7+o+b8))
H.l(a0,"$iI")
if(typeof j!=="number")return j.af()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.i(0,o)
if(a2==null)H.n(P.o(b7+o+b8))
H.l(a2,"$iI")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.i(0,o)
if(a5==null)H.n(P.o(b7+o+b8))
H.l(a5,"$iI")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.i(0,o)
if(a9==null)H.n(P.o(b7+o+b8))
H.l(a9,"$iV")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.i(0,o)
if(b0==null)H.n(P.o(b7+o+b8))
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
if(a2==null)H.n(P.o(b7+g+b8))
H.l(a2,"$ibt")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.i(0,g)
if(a2==null)H.n(P.o(b7+g+b8))
H.l(a2,"$iV")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.i(0,g)
if(a5==null)H.n(P.o(b7+g+b8))
H.l(a5,"$iV")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.i(0,g)
if(a2==null)H.n(P.o(b7+g+b8))
H.l(a2,"$iV")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.i(0,g)
if(a5==null)H.n(P.o(b7+g+b8))
H.l(a5,"$iV")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.i(0,g)
if(a9==null)H.n(P.o(b7+g+b8))
H.l(a9,"$iV")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.i(0,g)
if(a2==null)H.n(P.o(b7+g+b8))
H.l(a2,"$iaJ")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.i(0,o)
if(a2==null)H.n(P.o(b7+o+b8))
H.l(a2,"$iaJ")
a3=a2}else a3=b6
h.push(new A.c3(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.bR.k(0,j,h)
q=b5.bQ
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.n(P.o(b7+o+b8))
q.k(0,j,m)}}},
fj:function(a,b){}}
A.cu.prototype={
h:function(a){return"dirLight"+H.f(this.a)}}
A.cW.prototype={
h:function(a){return"pointLight"+H.f(this.a)}}
A.d4.prototype={
h:function(a){return"spotLight"+H.f(this.a)}}
A.fw.prototype={
h:function(a){return this.aT}}
A.c0.prototype={}
A.c2.prototype={}
A.c3.prototype={}
A.d2.prototype={
cg:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dg:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cs(b,35633)
r.f=r.cs(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.n(P.o("Failed to link shader: "+H.f(s)))}r.fn()
r.fp()},
a4:function(a){a.a.useProgram(this.r)
this.x.fV()},
cs:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.o("Error compiling shader '"+H.f(s)+"': "+H.f(u)))}return s},
fn:function(){var u,t,s,r=this,q=H.c([],[A.cn]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cn(p,t.name,s))}r.x=new A.er(q)},
fp:function(){var u,t,s,r=this,q=H.c([],[A.dg]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fO(t.type,t.size,t.name,s))}r.y=new A.hQ(q)},
aB:function(a,b,c){var u=this.a
if(a===1)return new A.b6(u,b,c)
else return A.jG(u,this.r,b,a,c)},
e1:function(a,b,c){var u=this.a
if(a===1)return new A.aJ(u,b,c)
else return A.jG(u,this.r,b,a,c)},
e2:function(a,b,c){var u=this.a
if(a===1)return new A.bu(u,b,c)
else return A.jG(u,this.r,b,a,c)},
b7:function(a,b){return new P.dy(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
fO:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aB(b,c,d)
case 5121:return u.aB(b,c,d)
case 5122:return u.aB(b,c,d)
case 5123:return u.aB(b,c,d)
case 5124:return u.aB(b,c,d)
case 5125:return u.aB(b,c,d)
case 5126:return new A.V(u.a,c,d)
case 35664:return new A.aI(u.a,c,d)
case 35665:return new A.I(u.a,c,d)
case 35666:return new A.bt(u.a,c,d)
case 35667:return new A.hN(u.a,c,d)
case 35668:return new A.hO(u.a,c,d)
case 35669:return new A.hP(u.a,c,d)
case 35674:return new A.hR(u.a,c,d)
case 35675:return new A.c1(u.a,c,d)
case 35676:return new A.a2(u.a,c,d)
case 35678:return u.e1(b,c,d)
case 35680:return u.e2(b,c,d)
case 35670:throw H.d(u.b7("BOOL",c))
case 35671:throw H.d(u.b7("BOOL_VEC2",c))
case 35672:throw H.d(u.b7("BOOL_VEC3",c))
case 35673:throw H.d(u.b7("BOOL_VEC4",c))
default:throw H.d(P.o("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.bk.prototype={
h:function(a){return this.b}}
A.hB.prototype={
dN:function(a,b,c){var u,t,s,r,q,p=this,o="Required uniform value, ",n=", was not defined or used in shader."
p.dg(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.ma(a,b))
p.z=p.x.i(0,"posAttr")
p.Q=H.l(p.y.S(0,"txtCount"),"$ib6")
p.ch=H.l(p.y.S(0,"backClr"),"$ibt")
p.cx=H.c([],[A.aJ])
p.cy=H.c([],[A.a2])
u=[A.aI]
p.db=H.c([],u)
p.dx=H.c([],u)
p.dy=H.c([],u)
p.fr=H.c([],u)
p.fx=H.c([],[A.b6])
for(t=0;t<a;++t){u=p.cx
s=p.y
r="txt"+t
q=s.i(0,r)
if(q==null)H.n(P.o(o+r+n))
u.push(H.l(q,"$iaJ"))
u=p.cy
s=p.y
r="clrMat"+t
q=s.i(0,r)
if(q==null)H.n(P.o(o+r+n))
u.push(H.l(q,"$ia2"))
u=p.db
s=p.y
r="srcLoc"+t
q=s.i(0,r)
if(q==null)H.n(P.o(o+r+n))
u.push(H.l(q,"$iaI"))
u=p.dx
s=p.y
r="srcSize"+t
q=s.i(0,r)
if(q==null)H.n(P.o(o+r+n))
u.push(H.l(q,"$iaI"))
u=p.dy
s=p.y
r="destLoc"+t
q=s.i(0,r)
if(q==null)H.n(P.o(o+r+n))
u.push(H.l(q,"$iaI"))
u=p.fr
s=p.y
r="destSize"+t
q=s.i(0,r)
if(q==null)H.n(P.o(o+r+n))
u.push(H.l(q,"$iaI"))
u=p.fx
s=p.y
r="flip"+t
q=s.i(0,r)
if(q==null)H.n(P.o(o+r+n))
u.push(H.l(q,"$ib6"))}}}
A.dg.prototype={}
A.hQ.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
S:function(a,b){var u=this.i(0,b)
if(u==null)throw H.d(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.R()},
R:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.r)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.b6.prototype={
h:function(a){return"Uniform1i: "+H.f(this.c)}}
A.hN.prototype={
h:function(a){return"Uniform2i: "+H.f(this.c)}}
A.hO.prototype={
h:function(a){return"Uniform3i: "+H.f(this.c)}}
A.hP.prototype={
h:function(a){return"Uniform4i: "+H.f(this.c)}}
A.hM.prototype={
h:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.V.prototype={
h:function(a){return"Uniform1f: "+H.f(this.c)}}
A.aI.prototype={
h:function(a){return"Uniform2f: "+H.f(this.c)}}
A.I.prototype={
h:function(a){return"Uniform3f: "+H.f(this.c)}}
A.bt.prototype={
dC:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
h:function(a){return"Uniform4f: "+H.f(this.c)}}
A.hR.prototype={
h:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.c1.prototype={
aj:function(a){var u=new Float32Array(H.ba(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.f(this.c)}}
A.a2.prototype={
aj:function(a){var u=new Float32Array(H.ba(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.f(this.c)}}
A.aJ.prototype={
h:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.bu.prototype={
h:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.jo.prototype={
$1:function(a){return new V.T(Math.cos(a),Math.sin(a),0)}}
F.j7.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.k_(n.$1(o),m)
m=J.k_(n.$1(o+3.141592653589793/p.c),m).H(0,l)
m=new V.z(m.a,m.b,m.c)
u=m.u(0,Math.sqrt(m.w(m)))
n=$.kC
if(n==null){n=new V.z(1,0,0)
$.kC=n
t=n}else t=n
n=u.au(!J.A(u,t)?V.kE():t)
s=n.u(0,Math.sqrt(n.w(n)))
n=s.au(u)
t=n.u(0,Math.sqrt(n.w(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.p(0,n*m)
m=s.p(0,q*m)
m=l.C(0,new V.T(n.a-m.a,n.b-m.b,n.c-m.c))
if(!J.A(a.f,m)){a.f=m
n=a.a
if(n!=null)n.a7()}}}
F.aR.prototype={
aS:function(){var u=this
if(!u.gcX()){C.b.N(u.a.a.d.b,u)
u.a.a.a7()}u.fc()
u.fd()
u.fe()},
fk:function(a){this.a=a
a.d.b.push(this)},
fl:function(a){this.b=a
a.d.c.push(this)},
fm:function(a){this.c=a
a.d.d.push(this)},
fc:function(){var u=this.a
if(u!=null){C.b.N(u.d.b,this)
this.a=null}},
fd:function(){var u=this.b
if(u!=null){C.b.N(u.d.c,this)
this.b=null}},
fe:function(){var u=this.c
if(u!=null){C.b.N(u.d.d,this)
this.c=null}},
gcX:function(){return this.a==null||this.b==null||this.c==null},
dY:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.c4()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.di())return
return s.u(0,Math.sqrt(s.w(s)))},
e_:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.H(0,q)
r=new V.z(r.a,r.b,r.c)
s=r.u(0,Math.sqrt(r.w(r)))
r=t.H(0,q)
r=new V.z(r.a,r.b,r.c)
r=s.au(r.u(0,Math.sqrt(r.w(r))))
return r.u(0,Math.sqrt(r.w(r)))},
bI:function(){var u,t=this
if(t.d!=null)return!0
u=t.dY()
if(u==null){u=t.e_()
if(u==null)return!1}t.d=u
t.a.a.a7()
return!0},
dX:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.c4()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.di())return
return s.u(0,Math.sqrt(s.w(s)))},
dZ:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.y().a){l=d.H(0,g)
l=new V.z(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.w(l)))
if(s.a-t.a<0)q=q.P(0)}else{p=(l-u.b)/r
l=d.H(0,g).p(0,p).C(0,g).H(0,j)
l=new V.z(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.w(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.P(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.w(l)))
l=o.au(q)
l=l.u(0,Math.sqrt(l.w(l))).au(o)
q=l.u(0,Math.sqrt(l.w(l)))}return q},
bG:function(){var u,t=this
if(t.e!=null)return!0
u=t.dX()
if(u==null){u=t.dZ()
if(u==null)return!1}t.e=u
t.a.a.a7()
return!0},
gfK:function(a){var u=this
if(J.A(u.a,u.b))return!0
if(J.A(u.b,u.c))return!0
if(J.A(u.c,u.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.R()},
J:function(a){var u,t,s=this
if(s.gcX())return a+"disposed"
u=a+C.a.ax(J.ai(s.a.e),0)+", "+C.a.ax(J.ai(s.b.e),0)+", "+C.a.ax(J.ai(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.h(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.h(0)+"}"):u+"-}"},
R:function(){return this.J("")}}
F.f_.prototype={}
F.hk.prototype={
aW:function(a,b,c){var u,t=b.a
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
if(t==u.e){t=b.c
t.a.a.A()
t=t.e
u=c.c
u.a.a.A()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.c
u.a.a.A()
if(t==u.e){t=b.c
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.A()
t=t.e
u=c.c
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
if(t==u.e){t=b.c
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.cI.prototype={}
F.fg.prototype={}
F.hL.prototype={
aW:function(a,b,c){var u,t=b.a
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
return t==u.e}else{t=b.a
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
return t==u.e}else return!1}}}
F.cV.prototype={}
F.hd.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.B():u},
at:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.at()||!1
if(!t.a.at())u=!1
s=t.e
if(s!=null)s.ay(0)
return u},
h9:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.ej(o,0)])
for(o=[F.b7];u.length!==0;){t=C.b.gh_(u)
C.b.dr(u,0)
if(t!=null){s=H.c([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.b(u,r)
q=u[r]
if(q!=null&&a.aW(0,t,q)){s.push(q)
C.b.dr(u,r)}}if(s.length>1)b.h8(s)}}p.a.A()
p.c.c4()
p.d.c4()
p.b.hq()
p.c.c5(new F.hL())
p.d.c5(new F.hk())
o=p.e
if(o!=null)o.ay(0)},
cR:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.ah()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aN().a)!==0)++s
if((t&$.aM().a)!==0)++s
if((t&$.be().a)!==0)++s
if((t&$.bf().a)!==0)++s
if((t&$.cj().a)!==0)++s
if((t&$.ck().a)!==0)++s
if((t&$.bD().a)!==0)++s
if((t&$.aL().a)!==0)++s
r=a4.gcc(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.c(u,[P.J])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.co])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fE(m)
k=l.gcc(l)
if(m>=t)return H.b(o,m)
o[m]=new Z.co(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.b(i,j)
h=i[j].h7(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.b(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.ba(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bG(new Z.dn(a1,d),o,a4)
c.b=H.c([],[Z.bN])
a0.b.b
if(a0.c.b.length!==0){b=H.c([],[P.t])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.A()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.A()
b.push(t.e)}a=Z.kF(u,34963,b)
c.b.push(new Z.bN(1,b.length,a))}if(a0.d.b.length!==0){b=H.c([],[P.t])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.A()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.A()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].c
t.a.a.A()
b.push(t.e)}a=Z.kF(u,34963,b)
c.b.push(new Z.bN(4,b.length,a))}return c},
h:function(a){var u=this,t=H.c([],[P.q])
if(u.a.c.length!==0){t.push("Vertices:")
t.push(u.a.J("   "))}u.b.b
if(u.c.b.length!==0){t.push("Lines:")
t.push(u.c.J("   "))}if(u.d.b.length!==0){t.push("Faces:")
t.push(u.d.J("   "))}return C.b.t(t,"\n")},
a7:function(){var u=this.e
if(u!=null)u.B(null)}}
F.he.prototype={
fC:function(a){var u,t,s,r,q=H.c([],[F.aR]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.l(0,p)
u.a.l(0,s)
u.a.l(0,r)
q.push(F.cy(p,s,r))}return q},
fD:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.c([],[F.aR])
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
h.push(F.cy(m,l,j))
u.a.l(0,m)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.cy(m,j,i))}else{n.l(0,l)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.cy(l,j,i))
u.a.l(0,l)
u.a.l(0,i)
u.a.l(0,m)
h.push(F.cy(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
c5:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.i(0,q)
for(o=q-1;o>=0;--o){n=r.d.i(0,o)
if(a.aW(0,p,n)){p.aS()
break}}}}},
c4:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.gfK(s)
if(t)s.aS()}},
at:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.r)(u),++r)if(!u[r].bI())s=!1
return s},
bH:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.r)(u),++r)if(!u[r].bG())s=!1
return s},
h:function(a){return this.R()},
J:function(a){var u,t,s,r=H.c([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].J(a))
return C.b.t(r,"\n")},
R:function(){return this.J("")}}
F.hf.prototype={
gj:function(a){return this.b.length},
c5:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.i(0,q)
for(o=q-1;o>=0;--o){n=r.c.i(0,o)
if(a.aW(0,p,n)){p.aS()
break}}}}},
c4:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=J.A(s.a,s.b)
if(t)s.aS()}},
h:function(a){return this.R()},
J:function(a){var u,t,s=H.c([],[P.q]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].J(a+(""+u+". ")))}return C.b.t(s,"\n")},
R:function(){return this.J("")}}
F.hg.prototype={
gj:function(a){return 0},
hq:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.b(t,u)
t=t[u].gi1()
t=t.ghZ(t)
if(t.gj(t).Z(0,1)){t=this.b
return H.b(t,u)
t[u].aS()}}},
h:function(a){return this.R()},
J:function(a){var u,t,s=H.c([],[P.q])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.b(u,t)
s.push(u[t].J(a))}return C.b.t(s,"\n")},
R:function(){return this.J("")}}
F.b7.prototype={
cV:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.i8(u.cx,r,o,t,s,q,p,a,n)},
h7:function(a){var u,t,s=this
if(a.n(0,$.ah())){u=s.f
t=[P.J]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.aN())){u=s.r
t=[P.J]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.aM())){u=s.x
t=[P.J]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.be())){u=s.y
t=[P.J]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.n(0,$.bf())){u=s.z
t=[P.J]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.cj())){u=s.Q
t=[P.J]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.ck())){u=s.Q
t=[P.J]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bD()))return H.c([s.ch],[P.J])
else if(a.n(0,$.aL())){u=s.cx
t=[P.J]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.J])},
bI:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.c4()
t.d.F(0,new F.ik(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.a7()
s=t.a.e
if(s!=null)s.ay(0)}return!0},
bG:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.c4()
t.d.F(0,new F.ij(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.a7()
s=t.a.e
if(s!=null)s.ay(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.R()},
J:function(a){var u,t,s=this,r="-",q=H.c([],[P.q])
q.push(C.a.ax(J.ai(s.e),0))
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
q.push(V.E(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.b.t(q,", ")
return a+"{"+t+"}"},
R:function(){return this.J("")}}
F.ik.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.C(0,t)}}}
F.ij.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.C(0,t)}}}
F.i9.prototype={
A:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.b(u,r)
u[r].e=s;++s}this.b=!1}},
l:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.o("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a7()
return!0},
b8:function(a,b,c,d,e,f){var u=F.i8(a,null,b,c,null,d,e,f,0)
this.l(0,u)
return u},
gj:function(a){return this.c.length},
at:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)u[s].bI()
return!0},
bH:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)u[s].bG()
return!0},
fJ:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.A(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.B(null)}}}}return!0},
h:function(a){return this.R()},
J:function(a){var u,t,s,r
this.A()
u=H.c([],[P.q])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r)u.push(t[r].J(a))
return C.b.t(u,"\n")},
R:function(){return this.J("")}}
F.ia.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
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
C.b.F(u.c,new F.ib(u,b))
C.b.F(u.d,new F.ic(u,b))},
h:function(a){return this.R()},
R:function(){var u,t,s,r=H.c([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].J(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].J(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].J(""))
return C.b.t(r,"\n")}}
F.ib.prototype={
$1:function(a){if(!J.A(a.a,this.a))this.b.$1(a)}}
F.ic.prototype={
$1:function(a){var u=this.a
if(!J.A(a.a,u)&&!J.A(a.b,u))this.b.$1(a)}}
F.id.prototype={
gj:function(a){return this.b.length+this.c.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.b(t,u)
return t[u]}else{if(b<0)return H.b(t,b)
return t[b]}},
h:function(a){return this.R()},
R:function(){var u,t,s,r=H.c([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].J(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].J(""))
return C.b.t(r,"\n")}}
F.ig.prototype={}
F.ie.prototype={
aW:function(a,b,c){return J.A(b.f,c.f)}}
F.ih.prototype={}
F.fT.prototype={
h8:function(a){var u,t,s,r,q,p,o,n,m=V.c4()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.z(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.u(0,Math.sqrt(m.w(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.r)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.u(0,Math.sqrt(p*p+o*o+n*n))}if(!J.A(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.B(null)}}}return}}
F.ii.prototype={
gj:function(a){return 0},
h:function(a){return this.R()},
R:function(){var u,t,s=H.c([],[P.q])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.b(u,t)
s.push(u[t].J(""))}return C.b.t(s,"\n")}}
O.cM.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.B():u},
O:function(a){var u=this.fr
if(u!=null)u.B(a)},
ap:function(){return this.O(null)},
cC:function(a){this.a=null
this.O(a)},
fi:function(){return this.cC(null)},
ej:function(a,b){var u=new D.aS()
u.b=!0
this.O(u)},
el:function(a,b){var u=new D.aT()
u.b=!0
this.O(u)},
cp:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.t,h=new H.K([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=h.i(0,0)
h.k(0,0,r==null?1:r)}q=H.c([],[A.cu])
h.F(0,new O.fA(j,q))
C.b.bk(q,new O.fB())
p=new H.K([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){o=u[s]
r=o.gaR()
n=p.i(0,o.gaR())
p.k(0,r,n==null?1:n)}m=H.c([],[A.cW])
p.F(0,new O.fC(j,m))
C.b.bk(m,new O.fD())
l=new H.K([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.r)(i),++s){o=i[s]
t=o.gaR()
r=l.i(0,o.gaR())
l.k(0,t,r==null?1:r)}k=H.c([],[A.d4])
l.F(0,new O.fE(j,k))
C.b.bk(k,new O.fF())
i=C.c.a0(j.e.a.length+3,4)
j.dy.e
return A.lO(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
dW:function(a,b){},
ah:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a1(u,u.length);u.v();){t=u.d
t.toString
s=$.i7
if(s==null)s=$.i7=new V.z(0,0,1)
t.a=s
r=$.i6
t.d=r==null?$.i6=new V.z(0,1,0):r
r=$.i5
t.e=r==null?$.i5=new V.z(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bh(s)
r=s.a
p=s.b
o=s.c
t.a=s.u(0,Math.sqrt(r*r+p*p+o*o))
o=q.bh(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.u(0,Math.sqrt(p*p+r*r+s*s))
s=q.bh(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.u(0,Math.sqrt(r*r+p*p+o*o))}}}},
ds:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a
if(b0==null){b0=a9.cp()
u=b1.fr.i(0,b0.aT)
if(u==null){u=A.lN(b0,b1.a)
b1.cO(u)}b0=a9.a=u
b2.e=null}t=b0.z
s=t.d_
b0=b2.e
if(!(b0 instanceof Z.bG))b0=b2.e=null
if(b0==null||!b0.d.n(0,s)){b0=t.k3
if(b0)b2.d.at()
r=t.k4
if(r){q=b2.d
p=q.e
if(p!=null)++p.d
q.d.bH()
q.a.bH()
q=q.e
if(q!=null)q.ay(0)}q=t.r2
if(q){p=b2.d
o=p.e
if(o!=null)++o.d
p.a.fJ()
p=p.e
if(p!=null)p.ay(0)}n=b2.d.cR(new Z.dp(b1.a),s)
n.av($.ah()).e=a9.a.Q.c
if(b0)n.av($.aN()).e=a9.a.cx.c
if(r)n.av($.aM()).e=a9.a.ch.c
if(t.r1)n.av($.be()).e=a9.a.cy.c
if(q)n.av($.bf()).e=a9.a.db.c
if(t.rx)n.av($.aL()).e=a9.a.dx.c
b2.e=n}m=H.c([],[T.c_])
a9.a.a4(b1)
if(t.dy){b0=a9.a
r=b1.dx
r=r.ga1(r)
b0=b0.dy
b0.toString
b0.aj(r.a9(0,!0))}if(t.fr){b0=a9.a
r=b1.cx
if(r==null){r=b1.db
r=r.ga1(r)
q=b1.dx
q=b1.cx=r.p(0,q.ga1(q))
r=q}b0=b0.fr
b0.toString
b0.aj(r.a9(0,!0))}b0=a9.a
r=b1.ch
if(r==null){r=b1.ghp()
q=b1.dx
q=b1.ch=r.p(0,q.ga1(q))
r=q}b0=b0.fy
b0.toString
b0.aj(r.a9(0,!0))
if(t.ry){b0=a9.a
r=a9.b
b0=b0.k1
b0.toString
b0.aj(C.j.a9(r,!0))}if(t.x1){b0=a9.a
r=a9.c
b0=b0.k2
b0.toString
b0.aj(C.j.a9(r,!0))}if(t.x2){b0=a9.a
r=a9.d
b0=b0.k3
b0.toString
b0.aj(C.j.a9(r,!0))}if(t.y2>0){l=a9.e.a.length
b0=a9.a.k4
b0.a.uniform1i(b0.d,l)
for(k=0;k<l;++k){b0=a9.a
r=a9.e.a
if(k>=r.length)return H.b(r,k)
r=r[k]
b0=b0.r1
if(k>=b0.length)return H.b(b0,k)
b0=b0[k]
j=new Float32Array(H.ba(r.a9(0,!0)))
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
b0=b0.d0
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}b0=t.e.a
if(!b0)r=!1
else r=!0
if(r){r=a9.a
q=a9.z.ch
r=r.d2
r.a.uniform1f(r.d,q)}if(b0){b0=a9.a
r=a9.z.f
b0=b0.d1
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}b0=t.z
if(b0.length>0){r=b1.db
i=r.ga1(r)
r=P.t
h=new H.K([r,r])
for(r=a9.dx.e,q=r.length,g=0;g<r.length;r.length===q||(0,H.r)(r),++g){f=r[g]
e=h.i(0,0)
if(e==null)e=0
h.k(0,0,e+1)
d=J.cl(a9.a.bN.i(0,0),e)
p=i.bh(f.a)
o=p.a
c=p.b
b=p.c
b=p.u(0,Math.sqrt(o*o+c*c+b*b))
c=d.e
o=b.a
p=b.b
b=b.c
c.a.uniform3f(c.d,o,p,b)
b=f.c
p=d.f
p.a.uniform3f(p.d,b.a,b.b,b.c)}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.r)(b0),++g){q=b0[g].a
l=h.i(0,q)
if(l==null)l=0
q=a9.a.bM.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.Q
if(b0.length>0){r=b1.db
i=r.ga1(r)
r=P.t
a=new H.K([r,r])
for(r=a9.dx.f,q=r.length,g=0;g<r.length;r.length===q||(0,H.r)(r),++g){f=r[g]
a0=f.gaR()
e=a.i(0,a0)
if(e==null)e=0
a.k(0,a0,e+1)
d=J.cl(a9.a.bP.i(0,a0),e)
a1=i.p(0,f.ga1(f))
p=f.ga1(f)
o=$.bV
p=p.c7(o==null?$.bV=new V.T(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.bV
p=a1.c7(p==null?$.bV=new V.T(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gaQ(f)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gad()
p=a1.dh(0)
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
j=new Float32Array(H.ba(new V.cO(o,c,b,a2,a3,a4,a5,a6,p).a9(0,!0)))
a7.a.uniformMatrix3fv(a7.d,!1,j)
f.gad()
p=f.gad()
if(!C.b.al(m,p)){p.saU(0,m.length)
m.push(p)}p=f.gad()
o=p.gaV(p)
if(o){o=d.f
o.toString
c=p.gaV(p)
if(!c)o.a.uniform1i(o.d,0)
else{p=p.gaU(p)
o.a.uniform1i(o.d,p)}}f.gaK()
p=f.gdD()
o=d.x
o.toString
c=p.gfS(p)
b=p.gfT(p)
a2=p.gfU()
p=p.gfR()
o.a.uniform4f(o.d,c,b,a2,p)
p=f.gaK()
if(!C.b.al(m,p)){p.saU(0,m.length)
m.push(p)}p=f.gaK()
o=p.gaV(p)
if(o){o=d.r
o.toString
c=p.gaV(p)
if(!c)o.a.uniform1i(o.d,0)
else{p=p.gaU(p)
o.a.uniform1i(o.d,p)}}if(f.gfW()){p=f.gfF()
o=d.y
o.a.uniform1f(o.d,p)
p=f.gfG()
o=d.z
o.a.uniform1f(o.d,p)
p=f.gfH()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.r)(b0),++g){q=b0[g].a
l=a.i(0,q)
if(l==null)l=0
q=a9.a.bO.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.ch
if(b0.length>0){r=b1.db
i=r.ga1(r)
r=P.t
a8=new H.K([r,r])
for(r=a9.dx.r,q=r.length,g=0;g<r.length;r.length===q||(0,H.r)(r),++g){f=r[g]
a0=f.gaR()
e=a8.i(0,a0)
if(e==null)e=0
a8.k(0,a0,e+1)
d=J.cl(a9.a.bR.i(0,a0),e)
p=f.gho(f)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.ghG(f).hY()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=i.c7(f.gho(f))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gaQ(f)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gad()
p=f.gc8()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gc6(f)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gi_()
o=d.x
o.a.uniform1f(o.d,p)
p=f.gi0()
o=d.y
o.a.uniform1f(o.d,p)
f.gad()
p=f.gad()
if(!C.b.al(m,p)){p.saU(0,m.length)
m.push(p)}p=f.gad()
o=p.gaV(p)
if(o){o=d.dx
o.toString
c=p.d
if(!c)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}f.gaK()
p=f.gdD()
o=d.z
o.toString
c=p.gfS(p)
b=p.gfT(p)
a2=p.gfU()
p=p.gfR()
o.a.uniform4f(o.d,c,b,a2,p)
p=f.gaK()
if(!C.b.al(m,p)){p.saU(0,m.length)
m.push(p)}p=f.gaK()
o=p.gaV(p)
if(o){o=d.dy
o.toString
c=p.d
if(!c)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(f.ghH()){p=f.ghF()
o=d.Q
o.a.uniform1f(o.d,p)
p=f.ghE()
o=d.ch
o.a.uniform1f(o.d,p)}if(f.gfW()){p=f.gfF()
o=d.cx
o.a.uniform1f(o.d,p)
p=f.gfG()
o=d.cy
o.a.uniform1f(o.d,p)
p=f.gfH()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.r)(b0),++g){q=b0[g].a
l=a8.i(0,q)
if(l==null)l=0
q=a9.a.bQ.i(0,q)
q.a.uniform1i(q.d,l)}}}if(t.dx){b0=a9.a
r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.ga1(r).dh(0)}b0=b0.id
b0.toString
b0.aj(r.a9(0,!0))}if(t.cy){a9.dW(m,a9.ch)
b0=a9.a
r=a9.ch
b0.fj(b0.d3,r)
if(t.r.a){b0=a9.a
r=a9.cx.f
b0=b0.d4
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}b0=t.x.a
if(!b0)r=!1
else r=!0
if(r){r=a9.a
q=a9.cy.ch
r=r.d5
r.a.uniform1f(r.d,q)}if(b0){b0=a9.a
r=a9.cy.f
b0=b0.d6
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}}b0=t.y.a
r=!b0
if(r)q=!1
else q=!0
if(q){if(b0){b0=a9.a
q=a9.db.f
b0=b0.d7
b0.a.uniform1f(b0.d,q)}b0=b1.a
b0.enable(3042)
b0.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].a4(b1)
b0=b2.e
b0.a4(b1)
b0.a8(b1)
b0.aI(b1)
if(r)b0=!1
else b0=!0
if(b0)b1.a.disable(3042)
for(k=0;k<m.length;++k)m[k].aI(b1)
b0=a9.a
b0.toString
b1.a.useProgram(null)
b0.x.cW()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.cp().aT}}
O.fA.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.cu(a,C.c.a0(b+3,4)*4))}}
O.fB.prototype={
$2:function(a,b){return J.jr(a.a,b.a)}}
O.fC.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.cW(a,C.c.a0(b+3,4)*4))}}
O.fD.prototype={
$2:function(a,b){return J.jr(a.a,b.a)}}
O.fE.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.d4(a,C.c.a0(b+3,4)*4))}}
O.fF.prototype={
$2:function(a,b){return J.jr(a.a,b.a)}}
O.fu.prototype={
ar:function(){var u,t=this
t.ce()
u=t.f
if(!(Math.abs(u-1)<$.y().a)){t.f=1
u=new D.v(t.b,u,1)
u.b=!0
t.a.O(u)}}}
O.cN.prototype={
ar:function(){},
cF:function(a){var u,t,s=this
if(!s.c.n(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.ar()
u=s.a
u.a=null
u.O(null)}}}
O.fv.prototype={}
O.an.prototype={
cE:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.v(s.b+".color",u,a)
t.b=!0
s.a.O(t)}},
ar:function(){this.ce()
this.cE(new V.R(1,1,1))},
saQ:function(a,b){this.cF(new A.Z(!0,!1,!1))
this.cE(b)}}
O.fx.prototype={}
O.fy.prototype={
ar:function(){var u,t=this
t.cf()
u=t.ch
if(!(Math.abs(u-1)<$.y().a)){t.ch=1
u=new D.v(t.b+".refraction",u,1)
u.b=!0
t.a.O(u)}}}
O.fz.prototype={
cG:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.y().a)){u.ch=a
t=new D.v(u.b+".shininess",t,a)
t.b=!0
u.a.O(t)}},
ar:function(){this.cf()
this.cG(100)}}
O.d8.prototype={}
O.d9.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.B():u},
O:function(a){var u=this.e
if(u!=null)u.B(a)},
ap:function(){return this.O(null)},
eA:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gao(),s=[{func:1,ret:-1,args:[D.P]}],r=0;r<b.length;b.length===u||(0,H.r)(b),++r){q=b[r]
if(q!=null){p=q.f
if(p==null){p=new D.aQ()
p.d=0
q.f=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.ap()},
eC:function(a,b){var u,t
for(u=b.gV(b),t=this.gao();u.v();)u.gI(u).gm().N(0,t)
this.ap()},
saP:function(a){var u=this.f
if(u!==a){this.f=a
u=new D.v("blend",u,a)
u.b=!0
this.O(u)}},
e7:function(a){a=C.c.a0(a+3,4)*4
if(a<=0)return 4
return a},
ds:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.e7(j.c.a.length)
if(i!==j.d||j.f!=j.r){j.d=i
j.r=j.f
j.b=null}u=j.b
if(u==null){u=j.f
t="TextureLayout_"+i+"_"+C.c.h(u.a)
s=a.fr.i(0,t)
if(s==null){s=A.m9(i,u,a.a)
a.cO(s)}j.b=s
u=s}if(b.e==null){u=b.d.cR(new Z.dp(a.a),$.ah())
t=u.av($.ah())
r=j.b
t.e=r.z.c
b.e=u
u=r}u.a4(a)
q=H.c([],[T.c_])
for(p=0,o=0;u=j.c.a,o<u.length;++o){n=u[o]
if(n!=null&&n.a!=null){u=n.a
if(u!=null)if(!C.b.al(q,u)){u.a=q.length
q.push(u)}u=j.b
t=n.a
u=u.cx
if(p>=u.length)return H.b(u,p)
u=u[p]
r=t==null||!t.d
m=u.a
u=u.d
if(r)m.uniform1i(u,0)
else m.uniform1i(u,t.a)
u=j.b
t=n.b
u=u.cy
if(p>=u.length)return H.b(u,p)
u=u[p]
if(t==null){t=$.fG
if(t==null){t=new V.ao(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.fG=t}}l=new Float32Array(H.ba(t.a9(0,!0)))
u.a.uniformMatrix4fv(u.d,!1,l)
u=j.b
k=n.c
u.toString
if(k==null){t=$.bY
if(t==null){t=V.d_(0,0,1,1)
$.bY=t
k=t}else k=t}t=u.db
if(p>=t.length)return H.b(t,p)
t=t[p]
t.a.uniform2f(t.d,k.a,k.b)
u=u.dx
if(p>=u.length)return H.b(u,p)
u=u[p]
u.a.uniform2f(u.d,k.c,k.d)
u=j.b
k=n.d
u.toString
if(k==null){t=$.bY
if(t==null){t=V.d_(0,0,1,1)
$.bY=t
k=t}else k=t}t=u.dy
if(p>=t.length)return H.b(t,p)
t=t[p]
t.a.uniform2f(t.d,k.a,k.b)
u=u.fr
if(p>=u.length)return H.b(u,p)
u=u[p]
u.a.uniform2f(u.d,k.c,k.d)
u=j.b
t=n.e
u=u.fx
if(p>=u.length)return H.b(u,p)
u=u[p]
t=t?1:0
u.a.uniform1i(u.d,t);++p}}u=j.b.Q
u.a.uniform1i(u.d,p)
u=j.b
t=j.a
u.ch.dC(t)
for(u=a.a,o=0;o<q.length;++o){t=q[o]
if(!t.c&&t.d){t.c=!0
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}t=b.e
if(t instanceof Z.bG){t.a4(a)
t.a8(a)
t.aI(a)}else b.e=null
t=j.b
t.toString
u.useProgram(null)
t.x.cW()
for(o=0;o<q.length;++o){t=q[o]
if(t.c){t.c=!1
u.activeTexture(33984+t.a)
u.bindTexture(3553,null)}}}}
O.b3.prototype={
O:function(a){var u=this.f
if(u!=null)u.B(a)},
ap:function(){return this.O(null)},
sad:function(a){var u,t=this,s=t.a
if(s!=a){if(s!=null)s.gm().N(0,t.gao())
u=t.a
t.a=a
if(a!=null)a.gm().l(0,t.gao())
s=new D.v("texture",u,t.a)
s.b=!0
t.O(s)}},
scU:function(a){var u,t,s=this
if(a==null)a=V.aY()
if(!J.A(s.b,a)){u=s.b
s.b=a
t=new D.v("colorMatrix",u,a)
t.b=!0
s.O(t)}}}
T.c_.prototype={}
T.hz.prototype={}
T.hA.prototype={
gm:function(){var u=this.y
return u==null?this.y=D.B():u}}
X.ew.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.B():u},
a_:function(a){var u=this.fr
if(u!=null)u.B(a)},
sae:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.v("width",u,b)
u.b=!0
t.a_(u)}},
sab:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.v("height",u,b)
u.b=!0
t.a_(u)}},
a4:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=3553,f=36161,e=36160
if(i.f){u=a.a
t=u.drawingBufferWidth
s=i.r
if(typeof t!=="number")return t.p()
i.sae(0,C.c.Y(t*s))
u=u.drawingBufferHeight
s=i.x
if(typeof u!=="number")return u.p()
i.sab(0,C.c.Y(u*s))}if(i.y==null){u=a.a
t=i.ch
s=i.a
r=i.b
q=u.getParameter(3379)
p=V.jW(s)
o=V.jW(r)
q=V.jW(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(g,n)
u.texParameteri(g,10242,33071)
u.texParameteri(g,10243,33071)
u.texParameteri(g,10241,9729)
u.texParameteri(g,10240,9729)
C.U.hx(u,g,0,6408,p,o,0,6408,5121,h)
u.bindTexture(g,h)
m=T.kq(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.cZ()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.cZ()
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
a.c=C.d.Y(s*i.a)
r=t.d
a.d=C.d.Y(r*i.b)
l=t.a
k=i.c
j=C.d.Y(l*k)
t=t.b
l=i.d
u.viewport(j,C.d.Y(t*l),C.d.Y(s*k),C.d.Y(r*l))
u.clearDepth(i.db)
t=i.cx
u.clearColor(t.a,t.b,t.c,t.d)
u.clear(16640)},
aI:function(a){a.a.bindFramebuffer(36160,null)}}
X.ju.prototype={}
X.f6.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.B():u},
a4:function(a){var u,t,s,r,q,p,o=a.a
o.bindFramebuffer(36160,null)
o.enable(2884)
o.enable(2929)
o.depthFunc(513)
u=o.drawingBufferWidth
t=o.drawingBufferHeight
s=this.r
r=s.a
if(typeof u!=="number")return H.u(u)
q=C.d.Y(r*u)
r=s.b
if(typeof t!=="number")return H.u(t)
p=C.d.Y(r*t)
r=C.d.Y(s.c*u)
a.c=r
s=C.d.Y(s.d*t)
a.d=s
o.viewport(q,p,r,s)
o.clearDepth(this.c)
s=this.a
o.clearColor(s.a,s.b,s.c,s.d)
o.clear(16640)},
aI:function(a){}}
X.f8.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.B():u}}
X.cU.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.B():u},
a_:function(a){var u=this.f
if(u!=null)u.B(a)},
dT:function(){return this.a_(null)}}
X.hv.prototype={}
V.jl.prototype={
$1:function(a){var u=C.d.dv(this.a.gh2(),2)
if(u!=="0.00")P.jX(u+" fps")}}
V.h2.prototype={
cM:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.kx().gc3().i(0,H.f(u))
if(t==null)if(d){c.$0()
m.cK(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.k1(m.c).l(0,q)
o=W.lD("radio")
o.checked=s
o.name=u
W.W(o,"change",new V.h3(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.k1(m.c).l(0,r.createElement("br"))},
bE:function(a,b,c){return this.cM(a,b,c,!1)},
cK:function(a){var u,t,s=P.kx(),r=P.q,q=P.lI(s.gc3(),r,r)
q.k(0,this.a,a)
u=s.dt(0,q)
r=window.history
t=u.h(0)
r.toString
r.replaceState(new P.iM([],[]).c9(""),"",t)}}
V.h3.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.cK(u.d)}}}
V.hh.prototype={
dM:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.W(q,"scroll",new V.hj(o),!1)},
cN:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.fo()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.hB(C.b.h6(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
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
if(H.ny(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.b(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.iW(C.R,n,C.e,!1)
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
fA:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
fo:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new R.hE()
t=P.q
u.a=new H.K([t,R.d6])
u.b=new H.K([t,R.dd])
u.c=u.L(0,q)
t=u.L(0,q).t(0,p)
s=T.Y(new H.M("*"))
t.a.push(s)
t.c=!0
t=u.L(0,p).t(0,p)
s=new T.aA()
r=[T.cL]
s.a=H.c([],r)
t.a.push(s)
t=T.Y(new H.M("*"))
s.a.push(t)
t=u.L(0,p).t(0,"BoldEnd")
s=T.Y(new H.M("*"))
t.a.push(s)
t.c=!0
t=u.L(0,q).t(0,o)
s=T.Y(new H.M("_"))
t.a.push(s)
t.c=!0
t=u.L(0,o).t(0,o)
s=new T.aA()
s.a=H.c([],r)
t.a.push(s)
t=T.Y(new H.M("_"))
s.a.push(t)
t=u.L(0,o).t(0,n)
s=T.Y(new H.M("_"))
t.a.push(s)
t.c=!0
t=u.L(0,q).t(0,m)
s=T.Y(new H.M("`"))
t.a.push(s)
t.c=!0
t=u.L(0,m).t(0,m)
s=new T.aA()
s.a=H.c([],r)
t.a.push(s)
t=T.Y(new H.M("`"))
s.a.push(t)
t=u.L(0,m).t(0,"CodeEnd")
s=T.Y(new H.M("`"))
t.a.push(s)
t.c=!0
t=u.L(0,q).t(0,l)
s=T.Y(new H.M("["))
t.a.push(s)
t.c=!0
t=u.L(0,l).t(0,k)
s=T.Y(new H.M("|"))
t.a.push(s)
s=u.L(0,l).t(0,j)
t=T.Y(new H.M("]"))
s.a.push(t)
s.c=!0
s=u.L(0,l).t(0,l)
t=new T.aA()
t.a=H.c([],r)
s.a.push(t)
s=T.Y(new H.M("|]"))
t.a.push(s)
s=u.L(0,k).t(0,j)
t=T.Y(new H.M("]"))
s.a.push(t)
s.c=!0
s=u.L(0,k).t(0,k)
t=new T.aA()
t.a=H.c([],r)
s.a.push(t)
s=T.Y(new H.M("|]"))
t.a.push(s)
u.L(0,q).t(0,i).a.push(new T.en())
s=u.L(0,i).t(0,i)
t=new T.aA()
t.a=H.c([],r)
s.a.push(t)
s=T.Y(new H.M("*_`["))
t.a.push(s)
s=u.L(0,"BoldEnd")
s.d=s.a.b2(p)
s=u.L(0,n)
s.d=s.a.b2(o)
s=u.L(0,"CodeEnd")
s.d=s.a.b2(m)
s=u.L(0,j)
s.d=s.a.b2("Link")
s=u.L(0,i)
s.d=s.a.b2(i)
this.b=u}}
V.hj.prototype={
$1:function(a){P.kt(C.p,new V.hi(this.a))}}
V.hi.prototype={
$0:function(){var u=C.d.Y(document.documentElement.scrollTop),t=this.a.style,s=H.f(-0.01*u)+"px"
t.top=s}}
S.jg.prototype={
$0:function(){this.a.saP(C.u)}}
S.jh.prototype={
$0:function(){this.a.saP(C.i)}}
S.ji.prototype={
$0:function(){this.a.saP(C.v)}}
S.jj.prototype={
$0:function(){this.a.saP(C.o)}};(function aliases(){var u=J.a.prototype
u.dG=u.h
u=J.cF.prototype
u.dH=u.h
u=T.cB.prototype
u.dF=u.aG
u.cd=u.h
u=O.cN.prototype
u.ce=u.ar
u=O.an.prototype
u.cf=u.ar})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"nb","mm",7)
u(P,"nc","mn",7)
u(P,"nd","mo",7)
t(P,"kT","n9",9)
var n
s(n=E.av.prototype,"gdm",0,0,null,["$1","$0"],["dn","hg"],0,0)
s(n,"gdk",0,0,null,["$1","$0"],["dl","hd"],0,0)
r(n,"ghb","hc",4)
r(n,"ghe","hf",4)
s(n=E.da.prototype,"gcj",0,0,null,["$1","$0"],["cl","ck"],0,0)
q(n,"ght","du",9)
p(n=X.dj.prototype,"geD","eE",5)
p(n,"gem","en",5)
p(n,"ges","eu",2)
p(n,"geH","eI",10)
p(n,"geF","eG",10)
p(n,"geL","eM",2)
p(n,"geP","eQ",2)
p(n,"gex","ey",2)
p(n,"geN","eO",2)
p(n,"gev","ew",2)
p(n,"geR","eS",19)
p(n,"geT","eU",5)
p(n,"gf8","f9",6)
p(n,"gf4","f5",6)
p(n,"gf6","f7",6)
s(D.bm.prototype,"gdO",0,0,null,["$1","$0"],["an","dP"],0,0)
s(n=D.cH.prototype,"gcA",0,0,null,["$1","$0"],["cB","eJ"],0,0)
p(n,"geV","eW",20)
r(n,"geg","eh",11)
r(n,"geZ","f_",11)
o(V.D.prototype,"gj","bW",12)
o(V.z.prototype,"gj","bW",12)
s(n=U.bK.prototype,"gaC",0,0,null,["$1","$0"],["M","a3"],0,0)
r(n,"gee","ef",13)
r(n,"geX","eY",13)
s(n=U.dk.prototype,"gaC",0,0,null,["$1","$0"],["M","a3"],0,0)
p(n,"gbs","bt",1)
p(n,"gbu","bv",1)
p(n,"gbw","bx",1)
s(n=U.dl.prototype,"gaC",0,0,null,["$1","$0"],["M","a3"],0,0)
p(n,"gbs","bt",1)
p(n,"gbu","bv",1)
p(n,"gbw","bx",1)
p(n,"ge8","e9",1)
p(n,"gea","eb",1)
p(n,"gfw","fz",1)
p(n,"gfu","fv",1)
p(n,"gfs","ft",1)
p(U.dm.prototype,"gec","ed",1)
s(n=M.cq.prototype,"gX",0,0,null,["$1","$0"],["W","aL"],0,0)
r(n,"gf0","f1",14)
r(n,"gf2","f3",14)
s(M.cs.prototype,"gX",0,0,null,["$1","$0"],["W","aL"],0,0)
s(n=M.cx.prototype,"gX",0,0,null,["$1","$0"],["W","aL"],0,0)
r(n,"geo","ep",4)
r(n,"geq","er",4)
s(n=O.cM.prototype,"gao",0,0,null,["$1","$0"],["O","ap"],0,0)
s(n,"gfh",0,0,null,["$1","$0"],["cC","fi"],0,0)
r(n,"gei","ej",15)
r(n,"gek","el",15)
s(n=O.d9.prototype,"gao",0,0,null,["$1","$0"],["O","ap"],0,0)
r(n,"gez","eA",16)
r(n,"geB","eC",16)
s(O.b3.prototype,"gao",0,0,null,["$1","$0"],["O","ap"],0,0)
s(X.cU.prototype,"gdS",0,0,null,["$1","$0"],["a_","dT"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a_,null)
s(P.a_,[H.jC,J.a,J.a1,P.dG,P.h,H.cJ,P.fa,H.cz,H.hV,H.eH,H.hJ,P.bn,H.bH,H.dX,P.ax,H.fh,H.fj,H.fc,P.e2,P.dq,P.d7,P.ht,P.db,P.iZ,P.iI,P.iD,P.dF,P.p,P.iR,P.fq,P.eD,P.iY,P.iX,P.bc,P.a4,P.a8,P.aP,P.fX,P.d5,P.dy,P.f5,P.m,P.N,P.b_,P.q,P.O,P.bw,P.hX,P.iJ,W.eL,W.G,W.cA,P.iL,P.iE,P.bs,T.en,T.cB,T.cL,T.hc,R.d6,R.dc,R.dd,R.hE,O.au,O.bP,E.ez,E.av,E.h4,E.da,Z.dn,Z.dp,Z.bG,Z.bN,Z.b8,D.eC,D.aQ,D.P,X.cp,X.cG,X.fe,X.fn,X.aa,X.fN,X.hF,X.dj,D.bm,D.a5,D.h_,D.hn,V.R,V.S,V.eX,V.cO,V.ao,V.a0,V.T,V.b1,V.cZ,V.D,V.z,U.dk,U.dl,U.dm,M.cs,M.cx,M.ae,A.cn,A.er,A.Z,A.cu,A.cW,A.d4,A.fw,A.c0,A.c2,A.c3,A.bk,A.dg,A.hQ,F.aR,F.f_,F.cI,F.fg,F.cV,F.hd,F.he,F.hf,F.hg,F.b7,F.i9,F.ia,F.id,F.ig,F.ih,F.ii,O.d8,O.cN,O.fx,O.b3,X.hv,X.ju,X.f8,X.cU,V.h2,V.hh])
s(J.a,[J.fb,J.cE,J.cF,J.aU,J.bO,J.aV,H.bS,H.aZ,W.e,W.em,W.bi,W.al,W.F,W.ds,W.a9,W.eP,W.eQ,W.du,W.cw,W.dw,W.eS,W.i,W.dz,W.aw,W.f7,W.dB,W.bM,W.fm,W.fH,W.dH,W.dI,W.ay,W.dJ,W.dM,W.aB,W.dQ,W.dS,W.aE,W.dT,W.aF,W.dY,W.aq,W.e0,W.hD,W.aH,W.e3,W.hH,W.i1,W.e8,W.ea,W.ec,W.ee,W.eg,P.aX,P.dD,P.b0,P.dO,P.h1,P.dZ,P.b4,P.e5,P.es,P.dr,P.d1,P.dV])
s(J.cF,[J.fY,J.bv,J.aW])
t(J.jB,J.aU)
s(J.bO,[J.cD,J.cC])
t(P.fl,P.dG)
s(P.fl,[H.dh,W.iu,W.it,P.f1])
t(H.M,H.dh)
s(P.h,[H.eV,H.fr,H.im])
s(P.fa,[H.fs,H.io])
t(H.eI,H.eH)
s(P.bn,[H.fU,H.fd,H.hU,H.eB,H.ha,P.cT,P.aj,P.hW,P.hS,P.hp,P.eG,P.eO])
s(H.bH,[H.jp,H.hw,H.jc,H.jd,H.je,P.iq,P.ip,P.ir,P.is,P.iQ,P.iP,P.j5,P.iG,P.iH,P.fk,P.fp,P.eT,P.eU,P.i0,P.hY,P.hZ,P.i_,P.iS,P.iT,P.iV,P.iU,P.j0,P.j_,P.j1,P.j2,W.fJ,W.fL,W.h9,W.hs,W.iy,P.iN,P.j6,P.f2,P.f3,P.eu,E.h5,E.h6,E.h7,E.hC,D.eY,D.eZ,F.jo,F.j7,F.ik,F.ij,F.ib,F.ic,O.fA,O.fB,O.fC,O.fD,O.fE,O.fF,V.jl,V.h3,V.hj,V.hi,S.jg,S.jh,S.ji,S.jj])
s(H.hw,[H.hq,H.bE])
t(P.fo,P.ax)
t(H.K,P.fo)
t(H.fi,H.eV)
t(H.cP,H.aZ)
s(H.cP,[H.c6,H.c8])
t(H.c7,H.c6)
t(H.bT,H.c7)
t(H.c9,H.c8)
t(H.cQ,H.c9)
s(H.cQ,[H.fO,H.fP,H.fQ,H.fR,H.fS,H.cR,H.bU])
t(P.iF,P.iZ)
t(P.iC,P.iI)
t(P.e7,P.fq)
t(P.di,P.e7)
s(P.eD,[P.ex,P.eW])
t(P.eJ,P.ht)
s(P.eJ,[P.ey,P.i4,P.i3])
t(P.i2,P.eW)
s(P.a8,[P.J,P.t])
s(P.aj,[P.bq,P.f9])
t(P.iw,P.bw)
s(W.e,[W.C,W.f0,W.bQ,W.aD,W.ca,W.aG,W.ar,W.cc,W.il,W.c5,P.ev,P.bh])
s(W.C,[W.X,W.aO])
s(W.X,[W.k,P.j])
s(W.k,[W.eo,W.ep,W.bj,W.f4,W.hb])
t(W.eK,W.al)
t(W.bI,W.ds)
s(W.a9,[W.eM,W.eN])
t(W.dv,W.du)
t(W.cv,W.dv)
t(W.dx,W.dw)
t(W.eR,W.dx)
t(W.am,W.bi)
t(W.dA,W.dz)
t(W.bJ,W.dA)
t(W.dC,W.dB)
t(W.bL,W.dC)
t(W.b5,W.i)
s(W.b5,[W.bo,W.ap,W.br])
t(W.fI,W.dH)
t(W.fK,W.dI)
t(W.dK,W.dJ)
t(W.fM,W.dK)
t(W.dN,W.dM)
t(W.cS,W.dN)
t(W.dR,W.dQ)
t(W.fZ,W.dR)
t(W.h8,W.dS)
t(W.cb,W.ca)
t(W.hl,W.cb)
t(W.dU,W.dT)
t(W.hm,W.dU)
t(W.hr,W.dY)
t(W.e1,W.e0)
t(W.hx,W.e1)
t(W.cd,W.cc)
t(W.hy,W.cd)
t(W.e4,W.e3)
t(W.hG,W.e4)
t(W.b9,W.ap)
t(W.e9,W.e8)
t(W.iv,W.e9)
t(W.dt,W.cw)
t(W.eb,W.ea)
t(W.iz,W.eb)
t(W.ed,W.ec)
t(W.dL,W.ed)
t(W.ef,W.ee)
t(W.iK,W.ef)
t(W.eh,W.eg)
t(W.iO,W.eh)
t(W.ix,P.d7)
t(P.iM,P.iL)
t(P.a7,P.iE)
t(P.dE,P.dD)
t(P.ff,P.dE)
t(P.dP,P.dO)
t(P.fV,P.dP)
t(P.e_,P.dZ)
t(P.hu,P.e_)
t(P.e6,P.e5)
t(P.hI,P.e6)
t(P.et,P.dr)
t(P.fW,P.bh)
t(P.dW,P.dV)
t(P.ho,P.dW)
s(T.cB,[T.aA,R.df])
s(E.ez,[Z.co,A.d2,T.c_])
s(D.P,[D.aS,D.aT,D.v,X.h0])
s(X.h0,[X.cK,X.az,X.bR,X.de])
s(O.au,[D.cH,U.bK,M.cq])
s(D.eC,[U.eF,U.a6])
t(U.cr,U.a6)
s(A.d2,[A.ft,A.hB])
s(A.dg,[A.b6,A.hN,A.hO,A.hP,A.hM,A.V,A.aI,A.I,A.bt,A.hR,A.c1,A.a2,A.aJ,A.bu])
t(F.hk,F.f_)
t(F.hL,F.fg)
t(F.ie,F.ig)
t(F.fT,F.ih)
s(O.d8,[O.cM,O.d9])
s(O.cN,[O.fu,O.fv,O.an])
s(O.an,[O.fy,O.fz])
t(T.hz,T.c_)
t(T.hA,T.hz)
s(X.hv,[X.ew,X.f6])
u(H.dh,H.hV)
u(H.c6,P.p)
u(H.c7,H.cz)
u(H.c8,P.p)
u(H.c9,H.cz)
u(P.dG,P.p)
u(P.e7,P.iR)
u(W.ds,W.eL)
u(W.du,P.p)
u(W.dv,W.G)
u(W.dw,P.p)
u(W.dx,W.G)
u(W.dz,P.p)
u(W.dA,W.G)
u(W.dB,P.p)
u(W.dC,W.G)
u(W.dH,P.ax)
u(W.dI,P.ax)
u(W.dJ,P.p)
u(W.dK,W.G)
u(W.dM,P.p)
u(W.dN,W.G)
u(W.dQ,P.p)
u(W.dR,W.G)
u(W.dS,P.ax)
u(W.ca,P.p)
u(W.cb,W.G)
u(W.dT,P.p)
u(W.dU,W.G)
u(W.dY,P.ax)
u(W.e0,P.p)
u(W.e1,W.G)
u(W.cc,P.p)
u(W.cd,W.G)
u(W.e3,P.p)
u(W.e4,W.G)
u(W.e8,P.p)
u(W.e9,W.G)
u(W.ea,P.p)
u(W.eb,W.G)
u(W.ec,P.p)
u(W.ed,W.G)
u(W.ee,P.p)
u(W.ef,W.G)
u(W.eg,P.p)
u(W.eh,W.G)
u(P.dD,P.p)
u(P.dE,W.G)
u(P.dO,P.p)
u(P.dP,W.G)
u(P.dZ,P.p)
u(P.e_,W.G)
u(P.e5,P.p)
u(P.e6,W.G)
u(P.dr,P.ax)
u(P.dV,P.p)
u(P.dW,W.G)})()
var v={mangledGlobalNames:{t:"int",J:"double",a8:"num",q:"String",bc:"bool",b_:"Null",m:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.P]},{func:1,ret:-1,args:[D.P]},{func:1,ret:-1,args:[W.ap]},{func:1,ret:P.b_,args:[,,]},{func:1,ret:-1,args:[P.t,[P.h,E.av]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.br]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bo]},{func:1,ret:-1,args:[P.t,[P.h,D.a5]]},{func:1,ret:P.J},{func:1,ret:-1,args:[P.t,[P.h,U.a6]]},{func:1,ret:-1,args:[P.t,[P.h,M.ae]]},{func:1,ret:-1,args:[P.t,[P.h,V.ao]]},{func:1,ret:-1,args:[P.t,[P.h,O.b3]]},{func:1,ret:P.b_,args:[,]},{func:1,ret:P.bs,args:[,,]},{func:1,ret:-1,args:[W.b9]},{func:1,ret:P.bc,args:[[P.h,D.a5]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.n=W.bj.prototype
C.M=J.a.prototype
C.b=J.aU.prototype
C.N=J.cC.prototype
C.c=J.cD.prototype
C.j=J.cE.prototype
C.d=J.bO.prototype
C.a=J.aV.prototype
C.O=J.aW.prototype
C.z=J.fY.prototype
C.U=P.d1.prototype
C.q=J.bv.prototype
C.A=W.b9.prototype
C.B=W.c5.prototype
C.V=new P.ey()
C.C=new P.ex()
C.r=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.D=function() {
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
C.I=function(getTagFallback) {
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
C.E=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.F=function(hooks) {
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
C.H=function(hooks) {
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
C.G=function(hooks) {
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

C.J=new P.fX()
C.e=new P.i2()
C.K=new P.i4()
C.f=new P.iF()
C.o=new A.bk(0,"ColorBlendType.Overwrite")
C.u=new A.bk(1,"ColorBlendType.Additive")
C.v=new A.bk(2,"ColorBlendType.Average")
C.i=new A.bk(3,"ColorBlendType.AlphaBlend")
C.p=new P.aP(0)
C.L=new P.aP(5e6)
C.w=H.c(u([127,2047,65535,1114111]),[P.t])
C.k=H.c(u([0,0,32776,33792,1,10240,0,0]),[P.t])
C.l=H.c(u([0,0,65490,45055,65535,34815,65534,18431]),[P.t])
C.m=H.c(u([0,0,26624,1023,65534,2047,65534,2047]),[P.t])
C.Q=H.c(u([0,0,32722,12287,65534,34815,65534,18431]),[P.t])
C.R=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.t])
C.h=H.c(u([0,0,24576,1023,65534,34815,65534,18431]),[P.t])
C.x=H.c(u([0,0,32754,11263,65534,34815,65534,18431]),[P.t])
C.S=H.c(u([0,0,32722,12287,65535,34815,65534,18431]),[P.t])
C.y=H.c(u([0,0,65490,12287,65535,34815,65534,18431]),[P.t])
C.P=H.c(u([]),[P.q])
C.T=new H.eI(0,{},C.P,[P.q,P.q])})();(function staticFields(){$.ak=0
$.bF=null
$.k4=null
$.kX=null
$.kS=null
$.l0=null
$.j8=null
$.jf=null
$.jU=null
$.by=null
$.cf=null
$.cg=null
$.jP=!1
$.af=C.f
$.a3=[]
$.fG=null
$.kj=null
$.bV=null
$.bY=null
$.kA=null
$.kD=null
$.kC=null
$.i5=null
$.i6=null
$.i7=null
$.kB=null
$.ki=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nH","l5",function(){return H.kV("_$dart_dartClosure")})
u($,"nI","jY",function(){return H.kV("_$dart_js")})
u($,"nJ","l6",function(){return H.as(H.hK({
toString:function(){return"$receiver$"}}))})
u($,"nK","l7",function(){return H.as(H.hK({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nL","l8",function(){return H.as(H.hK(null))})
u($,"nM","l9",function(){return H.as(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nP","lc",function(){return H.as(H.hK(void 0))})
u($,"nQ","ld",function(){return H.as(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nO","lb",function(){return H.as(H.kv(null))})
u($,"nN","la",function(){return H.as(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nS","lf",function(){return H.as(H.kv(void 0))})
u($,"nR","le",function(){return H.as(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"o5","jZ",function(){return P.ml()})
u($,"nT","lg",function(){return P.mh()})
u($,"o6","lk",function(){return H.lP(H.ba(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.t])))})
u($,"o7","ll",function(){return P.m2("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"o8","lm",function(){return P.mI()})
u($,"o_","lj",function(){return Z.ab(0)})
u($,"nU","lh",function(){return Z.ab(511)})
u($,"o1","ah",function(){return Z.ab(1)})
u($,"o0","aN",function(){return Z.ab(2)})
u($,"nW","aM",function(){return Z.ab(4)})
u($,"o2","be",function(){return Z.ab(8)})
u($,"o3","bf",function(){return Z.ab(16)})
u($,"nX","cj",function(){return Z.ab(32)})
u($,"nY","ck",function(){return Z.ab(64)})
u($,"nZ","li",function(){return Z.ab(96)})
u($,"o4","bD",function(){return Z.ab(128)})
u($,"nV","aL",function(){return Z.ab(256)})
u($,"nG","l4",function(){return new V.eX(1e-9)})
u($,"nF","y",function(){return $.l4()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bS,DataView:H.aZ,ArrayBufferView:H.aZ,Float32Array:H.bT,Float64Array:H.bT,Int16Array:H.fO,Int32Array:H.fP,Int8Array:H.fQ,Uint16Array:H.fR,Uint32Array:H.fS,Uint8ClampedArray:H.cR,CanvasPixelArray:H.cR,Uint8Array:H.bU,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLBodyElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLDivElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTableElement:W.k,HTMLTableRowElement:W.k,HTMLTableSectionElement:W.k,HTMLTemplateElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,AccessibleNodeList:W.em,HTMLAnchorElement:W.eo,HTMLAreaElement:W.ep,Blob:W.bi,HTMLCanvasElement:W.bj,CDATASection:W.aO,CharacterData:W.aO,Comment:W.aO,ProcessingInstruction:W.aO,Text:W.aO,CSSPerspective:W.eK,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.bI,MSStyleCSSProperties:W.bI,CSS2Properties:W.bI,CSSImageValue:W.a9,CSSKeywordValue:W.a9,CSSNumericValue:W.a9,CSSPositionValue:W.a9,CSSResourceValue:W.a9,CSSUnitValue:W.a9,CSSURLImageValue:W.a9,CSSStyleValue:W.a9,CSSMatrixComponent:W.al,CSSRotation:W.al,CSSScale:W.al,CSSSkew:W.al,CSSTranslation:W.al,CSSTransformComponent:W.al,CSSTransformValue:W.eM,CSSUnparsedValue:W.eN,DataTransferItemList:W.eP,DOMException:W.eQ,ClientRectList:W.cv,DOMRectList:W.cv,DOMRectReadOnly:W.cw,DOMStringList:W.eR,DOMTokenList:W.eS,Element:W.X,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.am,FileList:W.bJ,FileWriter:W.f0,HTMLFormElement:W.f4,Gamepad:W.aw,History:W.f7,HTMLCollection:W.bL,HTMLFormControlsCollection:W.bL,HTMLOptionsCollection:W.bL,ImageData:W.bM,KeyboardEvent:W.bo,Location:W.fm,MediaList:W.fH,MessagePort:W.bQ,MIDIInputMap:W.fI,MIDIOutputMap:W.fK,MimeType:W.ay,MimeTypeArray:W.fM,PointerEvent:W.ap,MouseEvent:W.ap,DragEvent:W.ap,Document:W.C,DocumentFragment:W.C,HTMLDocument:W.C,ShadowRoot:W.C,XMLDocument:W.C,Attr:W.C,DocumentType:W.C,Node:W.C,NodeList:W.cS,RadioNodeList:W.cS,Plugin:W.aB,PluginArray:W.fZ,RTCStatsReport:W.h8,HTMLSelectElement:W.hb,SourceBuffer:W.aD,SourceBufferList:W.hl,SpeechGrammar:W.aE,SpeechGrammarList:W.hm,SpeechRecognitionResult:W.aF,Storage:W.hr,CSSStyleSheet:W.aq,StyleSheet:W.aq,TextTrack:W.aG,TextTrackCue:W.ar,VTTCue:W.ar,TextTrackCueList:W.hx,TextTrackList:W.hy,TimeRanges:W.hD,Touch:W.aH,TouchEvent:W.br,TouchList:W.hG,TrackDefaultList:W.hH,CompositionEvent:W.b5,FocusEvent:W.b5,TextEvent:W.b5,UIEvent:W.b5,URL:W.i1,VideoTrackList:W.il,WheelEvent:W.b9,Window:W.c5,DOMWindow:W.c5,CSSRuleList:W.iv,ClientRect:W.dt,DOMRect:W.dt,GamepadList:W.iz,NamedNodeMap:W.dL,MozNamedAttrMap:W.dL,SpeechRecognitionResultList:W.iK,StyleSheetList:W.iO,SVGLength:P.aX,SVGLengthList:P.ff,SVGNumber:P.b0,SVGNumberList:P.fV,SVGPointList:P.h1,SVGStringList:P.hu,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGScriptElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGTransform:P.b4,SVGTransformList:P.hI,AudioBuffer:P.es,AudioParamMap:P.et,AudioTrackList:P.ev,AudioContext:P.bh,webkitAudioContext:P.bh,BaseAudioContext:P.bh,OfflineAudioContext:P.fW,WebGL2RenderingContext:P.d1,SQLResultSetRowList:P.ho})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.c6.$nativeSuperclassTag="ArrayBufferView"
H.c7.$nativeSuperclassTag="ArrayBufferView"
H.bT.$nativeSuperclassTag="ArrayBufferView"
H.c8.$nativeSuperclassTag="ArrayBufferView"
H.c9.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
W.ca.$nativeSuperclassTag="EventTarget"
W.cb.$nativeSuperclassTag="EventTarget"
W.cc.$nativeSuperclassTag="EventTarget"
W.cd.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(S.kZ,[])
else S.kZ([])})})()
//# sourceMappingURL=test.dart.js.map
