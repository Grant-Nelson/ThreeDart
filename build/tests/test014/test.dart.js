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
a[c]=function(){a[c]=function(){H.p5(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.l0"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.l0"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.l0(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kK:function kK(){},
jX:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
fB:function(){return new P.c9("No element")},
n5:function(){return new P.c9("Too many elements")},
dk:function(a,b,c,d){if(c-b<=32)H.nz(a,b,c,d)
else H.ny(a,b,c,d)},
nz:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.b(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.b(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a5()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.b(a,q)
C.b.m(a,s,a[q])
s=q}C.b.m(a,s,t)}},
ny:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.c.ac(a4-a3+1,6),d=a3+e,c=a4-e,b=C.c.ac(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.a5()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a5()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a5()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a5()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a5()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a5()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a5()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a5()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a5()
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
if(J.F(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.R()
if(k<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a5()
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
if(typeof f!=="number")return f.a5()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a5()
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
H.dk(a2,a3,o-2,a5)
H.dk(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.b(a2,o)
if(!J.F(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.b(a2,n)
if(!J.F(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
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
break}}}H.dk(a2,o,n,a5)}else H.dk(a2,o,n,a5)},
l:function l(a){this.a=a},
ff:function ff(){},
d2:function d2(){},
bY:function bY(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fT:function fT(a,b,c){this.a=a
this.b=b
this.$ti=c},
fU:function fU(a,b){this.a=null
this.b=a
this.c=b},
fV:function fV(a,b,c){this.a=a
this.b=b
this.$ti=c},
ci:function ci(a,b,c){this.a=a
this.b=b
this.$ti=c},
iY:function iY(a,b){this.a=a
this.b=b},
cT:function cT(){},
iy:function iy(){},
dB:function dB(){},
mZ:function(){throw H.d(P.y("Cannot modify unmodifiable Map"))},
eI:function(a){var u,t=H.p6(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oQ:function(a){return v.types[a]},
mi:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Q(a).$iA},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a2(a)
if(typeof u!=="string")throw H.d(H.an(a))
return u},
c6:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nq:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
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
c7:function(a){return H.nh(a)+H.m4(H.cA(a),0,null)},
nh:function(a){var u,t,s,r,q,p,o,n=J.Q(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.Q||!!n.$ibA){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.eI(t.length>1&&C.a.F(t,0)===36?C.a.ae(t,1):t)},
ni:function(){if(!!self.location)return self.location.href
return},
lB:function(a){var u,t,s,r,q=J.ae(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
nr:function(a){var u,t,s,r=H.c([],[P.x])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.an(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aQ(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.d(H.an(s))}return H.lB(r)},
lC:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.an(s))
if(s<0)throw H.d(H.an(s))
if(s>65535)return H.nr(a)}return H.lB(a)},
ns:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bv:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aQ(u,10))>>>0,56320|u&1023)}}throw H.d(P.a_(a,0,1114111,null,null))},
bu:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
np:function(a){var u=H.bu(a).getFullYear()+0
return u},
nn:function(a){var u=H.bu(a).getMonth()+1
return u},
nj:function(a){var u=H.bu(a).getDate()+0
return u},
nk:function(a){var u=H.bu(a).getHours()+0
return u},
nm:function(a){var u=H.bu(a).getMinutes()+0
return u},
no:function(a){var u=H.bu(a).getSeconds()+0
return u},
nl:function(a){var u=H.bu(a).getMilliseconds()+0
return u},
w:function(a){throw H.d(H.an(a))},
b:function(a,b){if(a==null)J.ae(a)
throw H.d(H.bH(a,b))},
bH:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aj(!0,b,s,null)
u=J.ae(a)
if(!(b<0)){if(typeof u!=="number")return H.w(u)
t=b>=u}else t=!0
if(t)return P.L(b,a,s,null,u)
return P.df(b,s)},
oK:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bw(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bw(a,c,!0,b,"end",u)
return new P.aj(!0,b,"end",null)},
an:function(a){return new P.aj(!0,a,null,null)},
oG:function(a){if(typeof a!=="number")throw H.d(H.an(a))
return a},
d:function(a){var u
if(a==null)a=new P.dc()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mo})
u.name=""}else u.toString=H.mo
return u},
mo:function(){return J.a2(this.dartException)},
u:function(a){throw H.d(a)},
o:function(a){throw H.d(P.aC(a))},
ax:function(a){var u,t,s,r,q,p
a=H.mm(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.k])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ik(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
il:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lM:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lw:function(a,b){return new H.hn(a,b==null?null:b.method)},
kL:function(a,b){var u=b==null,t=u?null:b.method
return new H.fF(a,t,u?null:b.receiver)},
ad:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kv(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aQ(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kL(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lw(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.ms()
q=$.mt()
p=$.mu()
o=$.mv()
n=$.my()
m=$.mz()
l=$.mx()
$.mw()
k=$.mB()
j=$.mA()
i=r.aj(u)
if(i!=null)return f.$1(H.kL(u,i))
else{i=q.aj(u)
if(i!=null){i.method="call"
return f.$1(H.kL(u,i))}else{i=p.aj(u)
if(i==null){i=o.aj(u)
if(i==null){i=n.aj(u)
if(i==null){i=m.aj(u)
if(i==null){i=l.aj(u)
if(i==null){i=o.aj(u)
if(i==null){i=k.aj(u)
if(i==null){i=j.aj(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lw(u,i))}}return f.$1(new H.ix(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dm()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aj(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dm()
return a},
l3:function(a){var u
if(a==null)return new H.eh(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eh(a)},
oO:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
oW:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.v("Unsupported number of arguments for wrapped closure"))},
bG:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oW)
a.$identity=u
return u},
mY:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hY().constructor.prototype):Object.create(new H.bL(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ap
if(typeof t!=="number")return t.D()
$.ap=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.ll(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mU(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.ll(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mU:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oQ,a)
if(typeof a=="function")if(b)return a
else{u=c?H.lk:H.ky
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
mV:function(a,b,c,d){var u=H.ky
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ll:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mX(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mV(t,!r,u,b)
if(t===0){r=$.ap
if(typeof r!=="number")return r.D()
$.ap=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bM
return new Function(r+H.e(q==null?$.bM=H.eV("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ap
if(typeof r!=="number")return r.D()
$.ap=r+1
o+=r
r="return function("+o+"){return this."
q=$.bM
return new Function(r+H.e(q==null?$.bM=H.eV("self"):q)+"."+H.e(u)+"("+o+");}")()},
mW:function(a,b,c,d){var u=H.ky,t=H.lk
switch(b?-1:a){case 0:throw H.d(H.nw("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mX:function(a,b){var u,t,s,r,q,p,o,n=$.bM
if(n==null)n=$.bM=H.eV("self")
u=$.lj
if(u==null)u=$.lj=H.eV("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mW(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ap
if(typeof u!=="number")return u.D()
$.ap=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ap
if(typeof u!=="number")return u.D()
$.ap=u+1
return new Function(n+u+"}")()},
l0:function(a,b,c,d,e,f,g){return H.mY(a,b,c,d,!!e,!!f,g)},
ky:function(a){return a.a},
lk:function(a){return a.c},
eV:function(a){var u,t,s,r=new H.bL("self","target","receiver","name"),q=J.kI(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
p0:function(a,b){throw H.d(H.mT(a,H.eI(b.substring(2))))},
q:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else u=!0
if(u)return a
H.p0(a,b)},
oM:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mT:function(a,b){return new H.eW("CastError: "+P.kF(a)+": type '"+H.e(H.oC(a))+"' is not a subtype of type '"+b+"'")},
oC:function(a){var u,t=J.Q(a)
if(!!t.$ibO){u=H.oM(t)
if(u!=null)return H.p1(u)
return"Closure"}return H.c7(a)},
p5:function(a){throw H.d(new P.f7(a))},
nw:function(a){return new H.hG(a)},
mg:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
cA:function(a){if(a==null)return
return a.$ti},
pG:function(a,b,c){return H.ks(a["$a"+H.e(c)],H.cA(b))},
oP:function(a,b,c,d){var u=H.ks(a["$a"+H.e(c)],H.cA(b))
return u==null?null:u[d]},
l2:function(a,b,c){var u=H.ks(a["$a"+H.e(b)],H.cA(a))
return u==null?null:u[c]},
cB:function(a,b){var u=H.cA(a)
return u==null?null:u[b]},
p1:function(a){return H.bh(a,null)},
bh:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.eI(a[0].name)+H.m4(a,1,b)
if(typeof a=="function")return H.eI(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.e(b[t])}if('func' in a)return H.oa(a,b)
if('futureOr' in a)return"FutureOr<"+H.bh("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oa:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.k])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.a.D(p,a0[m])
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
for(n=H.oN(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bh(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
m4:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.T("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bh(p,c)}return"<"+u.h(0)+">"},
ks:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pE:function(a,b,c){return a.apply(b,H.ks(J.Q(b)["$a"+H.e(c)],H.cA(b)))},
pF:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oY:function(a){var u,t,s,r,q=$.mh.$1(a),p=$.jV[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k0[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.m9.$2(a,q)
if(q!=null){p=$.jV[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k0[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.ko(u)
$.jV[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.k0[q]=u
return u}if(s==="-"){r=H.ko(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mk(a,u)
if(s==="*")throw H.d(P.iw(q))
if(v.leafTags[q]===true){r=H.ko(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mk(a,u)},
mk:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.l5(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ko:function(a){return J.l5(a,!1,null,!!a.$iA)},
oZ:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ko(u)
else return J.l5(u,c,null,null)},
oU:function(){if(!0===$.l4)return
$.l4=!0
H.oV()},
oV:function(){var u,t,s,r,q,p,o,n
$.jV=Object.create(null)
$.k0=Object.create(null)
H.oT()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.ml.$1(q)
if(p!=null){o=H.oZ(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oT:function(){var u,t,s,r,q,p,o=C.F()
o=H.bF(C.G,H.bF(C.H,H.bF(C.u,H.bF(C.u,H.bF(C.I,H.bF(C.J,H.bF(C.K(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mh=new H.jY(r)
$.m9=new H.jZ(q)
$.ml=new H.k_(p)},
bF:function(a,b){return a(b)||b},
n7:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(P.R("Illegal RegExp pattern ("+String(p)+")",a,null))},
p3:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oL:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mm:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
l8:function(a,b,c){var u=H.p4(a,b,c)
return u},
p4:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mm(b),'g'),H.oL(c))},
f0:function f0(){},
f1:function f1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ik:function ik(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hn:function hn(a,b){this.a=a
this.b=b},
fF:function fF(a,b,c){this.a=a
this.b=b
this.c=c},
ix:function ix(a){this.a=a},
kv:function kv(a){this.a=a},
eh:function eh(a){this.a=a
this.b=null},
bO:function bO(){},
i5:function i5(){},
hY:function hY(){},
bL:function bL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eW:function eW(a){this.a=a},
hG:function hG(a){this.a=a},
P:function P(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fJ:function fJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fK:function fK(a,b){this.a=a
this.$ti=b},
fL:function fL(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jY:function jY(a){this.a=a},
jZ:function jZ(a){this.a=a},
k_:function k_(a){this.a=a},
fE:function fE(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bD:function(a){return a},
ng:function(a){return new Int8Array(a)},
ay:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bH(b,a))},
o8:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.oK(a,b,c))
return b},
c1:function c1(){},
b8:function b8(){},
d7:function d7(){},
c2:function c2(){},
d8:function d8(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){},
hj:function hj(){},
d9:function d9(){},
c3:function c3(){},
cm:function cm(){},
cn:function cn(){},
co:function co(){},
cp:function cp(){},
oN:function(a){return J.lr(a?Object.keys(a):[],null)},
p6:function(a){return v.mangledGlobalNames[a]},
p_:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
l5:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jW:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.l4==null){H.oU()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.iw("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.la()]
if(r!=null)return r
r=H.oY(a)
if(r!=null)return r
if(typeof a=="function")return C.S
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.la(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
n6:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.lh(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.a_(a,0,4294967295,"length",null))
return J.lr(new Array(a),b)},
lr:function(a,b){return J.kI(H.c(a,[b]))},
kI:function(a){a.fixed$length=Array
return a},
Q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cX.prototype
return J.cW.prototype}if(typeof a=="string")return J.b4.prototype
if(a==null)return J.cY.prototype
if(typeof a=="boolean")return J.fD.prototype
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.a0)return a
return J.jW(a)},
cy:function(a){if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.a0)return a
return J.jW(a)},
eG:function(a){if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.a0)return a
return J.jW(a)},
mf:function(a){if(typeof a=="number")return J.bW.prototype
if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(!(a instanceof P.a0))return J.bA.prototype
return a},
cz:function(a){if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(!(a instanceof P.a0))return J.bA.prototype
return a},
bJ:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.a0)return a
return J.jW(a)},
F:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).v(a,b)},
lc:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mf(a).w(a,b)},
cE:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mi(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cy(a).i(a,b)},
kw:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.mi(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eG(a).m(a,b,c)},
mK:function(a,b){return J.cz(a).F(a,b)},
mL:function(a,b,c){return J.bJ(a).fO(a,b,c)},
mM:function(a,b,c,d){return J.bJ(a).h7(a,b,c,d)},
mN:function(a,b){return J.cz(a).X(a,b)},
kx:function(a,b){return J.mf(a).hj(a,b)},
eJ:function(a,b){return J.eG(a).K(a,b)},
mO:function(a,b,c,d){return J.bJ(a).hz(a,b,c,d)},
ld:function(a,b){return J.eG(a).H(a,b)},
mP:function(a){return J.bJ(a).ghf(a)},
le:function(a){return J.bJ(a).gc5(a)},
cF:function(a){return J.Q(a).gI(a)},
aY:function(a){return J.eG(a).gU(a)},
ae:function(a){return J.cy(a).gl(a)},
lf:function(a){return J.eG(a).i3(a)},
mQ:function(a,b){return J.bJ(a).i6(a,b)},
mR:function(a,b,c){return J.cz(a).u(a,b,c)},
mS:function(a){return J.cz(a).ih(a)},
a2:function(a){return J.Q(a).h(a)},
a:function a(){},
fD:function fD(){},
cY:function cY(){},
cZ:function cZ(){},
hr:function hr(){},
bA:function bA(){},
b5:function b5(){},
b3:function b3(a){this.$ti=a},
kJ:function kJ(a){this.$ti=a},
a3:function a3(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bW:function bW(){},
cX:function cX(){},
cW:function cW(){},
b4:function b4(){}},P={
nL:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oD()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bG(new P.j_(s),1)).observe(u,{childList:true})
return new P.iZ(s,u,t)}else if(self.setImmediate!=null)return P.oE()
return P.oF()},
nM:function(a){self.scheduleImmediate(H.bG(new P.j0(a),0))},
nN:function(a){self.setImmediate(H.bG(new P.j1(a),0))},
nO:function(a){P.kO(C.n,a)},
kO:function(a,b){var u=C.c.ac(a.a,1000)
return P.nT(u<0?0:u,b)},
lL:function(a,b){var u=C.c.ac(a.a,1000)
return P.nU(u<0?0:u,b)},
nT:function(a,b){var u=new P.en()
u.eq(a,b)
return u},
nU:function(a,b){var u=new P.en()
u.er(a,b)
return u},
ow:function(){var u,t
for(;u=$.bE,u!=null;){$.cx=null
t=u.b
$.bE=t
if(t==null)$.cw=null
u.a.$0()}},
oB:function(){$.kZ=!0
try{P.ow()}finally{$.cx=null
$.kZ=!1
if($.bE!=null)$.lb().$1(P.ma())}},
oz:function(a){var u=new P.dK(a)
if($.bE==null){$.bE=$.cw=u
if(!$.kZ)$.lb().$1(P.ma())}else $.cw=$.cw.b=u},
oA:function(a){var u,t,s=$.bE
if(s==null){P.oz(a)
$.cx=$.cw
return}u=new P.dK(a)
t=$.cx
if(t==null){u.b=s
$.bE=$.cx=u}else{u.b=t.b
$.cx=t.b=u
if(u.b==null)$.cw=u}},
lK:function(a,b){var u=$.am
if(u===C.f)return P.kO(a,b)
return P.kO(a,u.hg(b))},
nC:function(a,b){var u=$.am
if(u===C.f)return P.lL(a,b)
return P.lL(a,u.dm(b,P.du))},
m5:function(a,b,c,d,e){var u={}
u.a=d
P.oA(new P.jO(u,e))},
ox:function(a,b,c,d){var u,t=$.am
if(t===c)return d.$0()
$.am=c
u=t
try{t=d.$0()
return t}finally{$.am=u}},
oy:function(a,b,c,d,e){var u,t=$.am
if(t===c)return d.$1(e)
$.am=c
u=t
try{t=d.$1(e)
return t}finally{$.am=u}},
j_:function j_(a){this.a=a},
iZ:function iZ(a,b,c){this.a=a
this.b=b
this.c=c},
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
en:function en(){this.c=0},
jw:function jw(a,b){this.a=a
this.b=b},
jv:function jv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dK:function dK(a){this.a=a
this.b=null},
dp:function dp(){},
i0:function i0(){},
du:function du(){},
jF:function jF(){},
jO:function jO(a,b){this.a=a
this.b=b},
jf:function jf(){},
jg:function jg(a,b){this.a=a
this.b=b},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
n9:function(a,b){return new H.P([a,b])},
kM:function(a,b){return new H.P([a,b])},
nb:function(a){return H.oO(a,new H.P([null,null]))},
d1:function(a){return new P.jc([a])},
kU:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nS:function(a,b){var u=new P.dZ(a,b)
u.c=a.e
return u},
n4:function(a,b,c){var u,t
if(P.l_(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.k])
$.a6.push(a)
try{P.ob(a,u)}finally{if(0>=$.a6.length)return H.b($.a6,-1)
$.a6.pop()}t=P.lI(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kH:function(a,b,c){var u,t
if(P.l_(a))return b+"..."+c
u=new P.T(b)
$.a6.push(a)
try{t=u
t.a=P.lI(t.a,a,", ")}finally{if(0>=$.a6.length)return H.b($.a6,-1)
$.a6.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
l_:function(a){var u,t
for(u=$.a6.length,t=0;t<u;++t)if(a===$.a6[t])return!0
return!1},
ob:function(a,b){var u,t,s,r,q,p,o,n=a.gU(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.B())return
u=H.e(n.gJ(n))
b.push(u)
m+=u.length+2;++l}if(!n.B()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gJ(n);++l
if(!n.B()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gJ(n);++l
for(;n.B();r=q,q=p){p=n.gJ(n);++l
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
na:function(a,b,c){var u=P.n9(b,c)
a.H(0,new P.fM(u))
return u},
ls:function(a,b){var u,t,s=P.d1(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t)s.n(0,a[t])
return s},
kN:function(a){var u,t={}
if(P.l_(a))return"{...}"
u=new P.T("")
try{$.a6.push(a)
u.a+="{"
t.a=!0
J.ld(a,new P.fR(t,u))
u.a+="}"}finally{if(0>=$.a6.length)return H.b($.a6,-1)
$.a6.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jc:function jc(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jd:function jd(a){this.a=a
this.c=this.b=null},
dZ:function dZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fM:function fM(a){this.a=a},
fN:function fN(){},
t:function t(){},
fQ:function fQ(){},
fR:function fR(a,b){this.a=a
this.b=b},
aH:function aH(){},
jx:function jx(){},
fS:function fS(){},
dC:function dC(a,b){this.a=a
this.$ti=b},
jj:function jj(){},
e_:function e_(){},
et:function et(){},
nF:function(a,b,c,d){if(b instanceof Uint8Array)return P.nG(!1,b,c,d)
return},
nG:function(a,b,c,d){var u,t,s=$.mC()
if(s==null)return
u=0===c
if(u&&!0)return P.kR(s,b)
t=b.length
d=P.bb(c,d,t)
if(u&&d===t)return P.kR(s,b)
return P.kR(s,b.subarray(c,d))},
kR:function(a,b){if(P.nI(b))return
return P.nJ(a,b)},
nJ:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ad(t)}return},
nI:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nH:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ad(t)}return},
m7:function(a,b,c){var u,t,s
for(u=J.cy(a),t=b;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.al()
if((s&127)!==s)return t-b}return c-b},
li:function(a,b,c,d,e,f){if(C.c.be(f,4)!==0)throw H.d(P.R("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.R("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.R("Invalid base64 padding, more than two '=' characters",a,b))},
eS:function eS(){},
eT:function eT(){},
eY:function eY(){},
f2:function f2(){},
fh:function fh(){},
fy:function fy(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fx:function fx(a){this.a=a},
iG:function iG(){},
iI:function iI(){},
jD:function jD(a){this.b=0
this.c=a},
iH:function iH(a){this.a=a},
jC:function jC(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eH:function(a,b,c){var u=H.nq(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.R(a,null,null))},
n2:function(a){if(a instanceof H.bO)return a.h(0)
return"Instance of '"+H.e(H.c7(a))+"'"},
nc:function(a,b,c){var u,t,s=J.n6(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
lt:function(a,b,c){var u,t=H.c([],[c])
for(u=J.aY(a);u.B();)t.push(u.gJ(u))
if(b)return t
return J.kI(t)},
ca:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.bb(b,c,u)
return H.lC(b>0||c<u?C.b.eb(a,b,c):a)}if(!!J.Q(a).$ic3)return H.ns(a,b,P.bb(b,c,a.length))
return P.nA(a,b,c)},
nA:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.d(P.a_(b,0,J.ae(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.a_(c,b,J.ae(a),q,q))
t=J.aY(a)
for(s=0;s<b;++s)if(!t.B())throw H.d(P.a_(b,0,s,q,q))
r=[]
if(u)for(;t.B();)r.push(t.gJ(t))
else for(s=b;s<c;++s){if(!t.B())throw H.d(P.a_(c,b,s,q,q))
r.push(t.gJ(t))}return H.lC(r)},
nu:function(a){return new H.fE(a,H.n7(a,!1,!0,!1,!1,!1))},
lI:function(a,b,c){var u=J.aY(b)
if(!u.B())return a
if(c.length===0){do a+=H.e(u.gJ(u))
while(u.B())}else{a+=H.e(u.gJ(u))
for(;u.B();)a=a+c+H.e(u.gJ(u))}return a},
lO:function(){var u=H.ni()
if(u!=null)return P.nE(u)
throw H.d(P.y("'Uri.base' is not supported"))},
eu:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mI().b
if(typeof b!=="string")H.u(H.an(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghy().c6(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bv(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
n_:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
n0:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cO:function(a){if(a>=10)return""+a
return"0"+a},
ln:function(a){return new P.b_(1000*a)},
kF:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a2(a)
if(typeof a==="string")return JSON.stringify(a)
return P.n2(a)},
cG:function(a){return new P.aj(!1,null,null,a)},
lh:function(a,b,c){return new P.aj(!0,a,b,c)},
df:function(a,b){return new P.bw(null,null,!0,a,b,"Value not in range")},
a_:function(a,b,c,d,e){return new P.bw(b,c,!0,a,d,"Invalid value")},
bb:function(a,b,c){if(0>a||a>c)throw H.d(P.a_(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.a_(b,a,c,"end",null))
return b}return c},
lE:function(a,b){if(typeof a!=="number")return a.R()
if(a<0)throw H.d(P.a_(a,0,null,b,null))},
L:function(a,b,c,d,e){var u=e==null?J.ae(b):e
return new P.fA(u,!0,a,c,"Index out of range")},
y:function(a){return new P.iz(a)},
iw:function(a){return new P.iv(a)},
lH:function(a){return new P.c9(a)},
aC:function(a){return new P.f_(a)},
v:function(a){return new P.dS(a)},
R:function(a,b,c){return new P.fr(a,b,c)},
nd:function(a,b,c){var u,t,s=H.c([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.b(s,u)
s[u]=t}return s},
l7:function(a){H.p_(a)},
nE:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.F(a,4)^58)*3|C.a.F(a,0)^100|C.a.F(a,1)^97|C.a.F(a,2)^116|C.a.F(a,3)^97)>>>0
if(u===0)return P.lN(e<e?C.a.u(a,0,e):a,5,f).ge4()
else if(u===32)return P.lN(C.a.u(a,5,e),0,f).ge4()}t=new Array(8)
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
if(P.m6(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.ij()
if(r>=0)if(P.m6(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.D()
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
l=!1}else{if(!(n<e&&n===o+2&&C.a.aa(a,"..",o)))j=n>o+2&&C.a.aa(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.aa(a,"file",0)){if(q<=0){if(!C.a.aa(a,"/",o)){i="file:///"
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
a=C.a.aT(a,o,n,"/");++e
n=h}k="file"}else if(C.a.aa(a,"http",0)){if(t&&p+3===o&&C.a.aa(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aT(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.aa(a,"https",0)){if(t&&p+4===o&&C.a.aa(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aT(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.u(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jm(a,r,q,p,o,n,m,k)}return P.nV(a,0,e,r,q,p,o,n,m,k)},
lQ:function(a){var u=P.k
return C.b.hE(H.c(a.split("&"),[u]),P.kM(u,u),new P.iE(C.e))},
nD:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iB(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.X(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eH(C.a.u(a,s,t),n,n)
if(typeof p!=="number")return p.a5()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.b(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eH(C.a.u(a,s,c),n,n)
if(typeof p!=="number")return p.a5()
if(p>255)k.$2(l,s)
if(r>=u)return H.b(j,r)
j[r]=p
return j},
lP:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iC(a),d=new P.iD(e,a)
if(a.length<2)e.$1("address is too short")
u=H.c([],[P.x])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.X(a,t)
if(p===58){if(t===b){++t
if(C.a.X(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gau(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.nD(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.b(l,i)
l[i]=0
f=i+1
if(f>=k)return H.b(l,f)
l[f]=0
i+=2}else{f=C.c.aQ(h,8)
if(i<0||i>=k)return H.b(l,i)
l[i]=f
f=i+1
if(f>=k)return H.b(l,f)
l[f]=h&255
i+=2}}return l},
nV:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.o2(a,b,d)
else{if(d===b)P.bC(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.o3(a,u,e-1):""
s=P.o_(a,e,f,!1)
if(typeof f!=="number")return f.D()
r=f+1
if(typeof g!=="number")return H.w(g)
q=r<g?P.o1(P.eH(C.a.u(a,r,g),new P.jy(a,f),n),j):n}else{q=n
s=q
t=""}p=P.o0(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.R()
o=h<i?P.kW(a,h+1,i,n):n
return new P.bB(j,t,s,q,p,o,i<c?P.nZ(a,i+1,c):n)},
lZ:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bC:function(a,b,c){throw H.d(P.R(c,a,b))},
o1:function(a,b){if(a!=null&&a===P.lZ(b))return
return a},
o_:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.X(a,b)===91){if(typeof c!=="number")return c.M()
u=c-1
if(C.a.X(a,u)!==93)P.bC(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nX(a,t,u)
if(typeof s!=="number")return s.R()
if(s<u){r=s+1
q=P.m3(a,C.a.aa(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lP(a,t,s)
return C.a.u(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.w(c)
p=b
for(;p<c;++p)if(C.a.X(a,p)===58){s=C.a.bo(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.m3(a,C.a.aa(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lP(a,b,s)
return"["+C.a.u(a,b,s)+q+"]"}return P.o5(a,b,c)},
nX:function(a,b,c){var u,t=C.a.bo(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.w(c)
u=t<c}else u=!1
return u?t:c},
m3:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.T(d):null
if(typeof c!=="number")return H.w(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.X(a,u)
if(r===37){q=P.kX(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.T("")
o=l.a+=C.a.u(a,t,u)
if(p)q=C.a.u(a,u,u+3)
else if(q==="%")P.bC(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.T("")
if(t<u){l.a+=C.a.u(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.X(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.T("")
l.a+=C.a.u(a,t,u)
l.a+=P.kV(r)
u+=m
t=u}}}if(l==null)return C.a.u(a,b,c)
if(t<c)l.a+=C.a.u(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
o5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.w(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.X(a,u)
if(q===37){p=P.kX(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.T("")
n=C.a.u(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.u(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.b(C.y,o)
o=(C.y[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.T("")
if(t<u){s.a+=C.a.u(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.b(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bC(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.X(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.T("")
n=C.a.u(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kV(q)
u+=l
t=u}}}}if(s==null)return C.a.u(a,b,c)
if(t<c){n=C.a.u(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
o2:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.m0(C.a.F(a,b)))P.bC(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.b(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bC(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.u(a,b,c)
return P.nW(t?a.toLowerCase():a)},
nW:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
o3:function(a,b,c){return P.cu(a,b,c,C.V,!1)},
o0:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cu(a,b,c,C.z,!0):C.j.iE(d,new P.jz(),P.k).k(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a7(u,"/"))u="/"+u
return P.o4(u,e,f)},
o4:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a7(a,"/"))return P.o6(a,!u||c)
return P.o7(a)},
kW:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.d(P.cG("Both query and queryParameters specified"))
return P.cu(a,b,c,C.l,!0)}if(d==null)return
u=new P.T("")
t.a=""
d.H(0,new P.jA(new P.jB(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nZ:function(a,b,c){return P.cu(a,b,c,C.l,!0)},
kX:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.X(a,b+1)
t=C.a.X(a,p)
s=H.jX(u)
r=H.jX(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aQ(q,4)
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bv(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.u(a,b,b+3).toUpperCase()
return},
kV:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
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
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.h_(a,6*r)&63|s
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
q+=3}}return P.ca(t,0,null)},
cu:function(a,b,c,d,e){var u=P.m2(a,b,c,d,e)
return u==null?C.a.u(a,b,c):u},
m2:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.R()
if(typeof c!=="number")return H.w(c)
if(!(o<c))break
c$0:{u=C.a.X(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.b(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kX(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.b(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bC(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.X(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kV(u)}}if(m==null)m=new P.T("")
m.a+=C.a.u(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.w(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.R()
if(n<c)m.a+=C.a.u(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
m1:function(a){if(C.a.a7(a,"."))return!0
return C.a.dN(a,"/.")!==-1},
o7:function(a){var u,t,s,r,q,p,o
if(!P.m1(a))return a
u=H.c([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.F(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.b(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.k(u,"/")},
o6:function(a,b){var u,t,s,r,q,p
if(!P.m1(a))return!b?P.m_(a):a
u=H.c([],[P.k])
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
t=P.m_(u[0])
if(0>=u.length)return H.b(u,0)
u[0]=t}return C.b.k(u,"/")},
m_:function(a){var u,t,s,r=a.length
if(r>=2&&P.m0(J.mK(a,0)))for(u=1;u<r;++u){t=C.a.F(a,u)
if(t===58)return C.a.u(a,0,u)+"%3A"+C.a.ae(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.b(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nY:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.cG("Invalid URL encoding"))}}return u},
kY:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.F(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.u(a,b,c)
else r=new H.l(C.a.u(a,b,c))}else{r=H.c([],[P.x])
for(s=a.length,q=b;q<c;++q){t=C.a.F(a,q)
if(t>127)throw H.d(P.cG("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.cG("Truncated URI"))
r.push(P.nY(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iH(!1).c6(r)},
m0:function(a){var u=a|32
return 97<=u&&u<=122},
lN:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.x])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.F(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.R(m,a,t))}}if(s<0&&t>b)throw H.d(P.R(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.F(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gau(l)
if(r!==44||t!==p+7||!C.a.aa(a,"base64",p+1))throw H.d(P.R("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.E.hO(0,a,o,u)
else{n=P.m2(a,o,u,C.l,!0)
if(n!=null)a=C.a.aT(a,o,u,n)}return new P.iA(a,l,c)},
o9:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nd(22,new P.jJ(),P.by),n=new P.jI(o),m=new P.jK(),l=new P.jL(),k=n.$2(0,225)
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
m6:function(a,b,c,d,e){var u,t,s,r,q,p=$.mJ()
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
az:function az(){},
a7:function a7(a,b){this.a=a
this.b=b},
N:function N(){},
b_:function b_(a){this.a=a},
fd:function fd(){},
fe:function fe(){},
bp:function bp(){},
dc:function dc(){},
aj:function aj(a,b,c,d){var _=this
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
fA:function fA(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iz:function iz(a){this.a=a},
iv:function iv(a){this.a=a},
c9:function c9(a){this.a=a},
f_:function f_(a){this.a=a},
hq:function hq(){},
dm:function dm(){},
f7:function f7(a){this.a=a},
dS:function dS(a){this.a=a},
fr:function fr(a,b,c){this.a=a
this.b=b
this.c=c},
ft:function ft(){},
x:function x(){},
h:function h(){},
fC:function fC(){},
n:function n(){},
S:function S(){},
b9:function b9(){},
ac:function ac(){},
a0:function a0(){},
k:function k(){},
T:function T(a){this.a=a},
iE:function iE(a){this.a=a},
iB:function iB(a){this.a=a},
iC:function iC(a){this.a=a},
iD:function iD(a,b){this.a=a
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
jy:function jy(a,b){this.a=a
this.b=b},
jz:function jz(){},
jB:function jB(a,b){this.a=a
this.b=b},
jA:function jA(a){this.a=a},
iA:function iA(a,b,c){this.a=a
this.b=b
this.c=c},
jJ:function jJ(){},
jI:function jI(a){this.a=a},
jK:function jK(){},
jL:function jL(){},
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
oJ:function(a){var u,t=J.Q(a)
if(!!t.$iaG){u=t.gdt(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.es(a.data,a.height,a.width)},
oI:function(a){if(a instanceof P.es)return{data:a.a,height:a.b,width:a.c}
return a},
aU:function(a){var u,t,s,r,q
if(a==null)return
u=P.kM(P.k,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
oH:function(a){var u={}
a.H(0,new P.jP(u))
return u},
jo:function jo(){},
jq:function jq(a,b){this.a=a
this.b=b},
es:function es(a,b,c){this.a=a
this.b=b
this.c=c},
jP:function jP(a){this.a=a},
jp:function jp(a,b){this.a=a
this.b=b},
fn:function fn(a,b){this.a=a
this.b=b},
fo:function fo(){},
fp:function fp(){},
jb:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nR:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
je:function je(){},
aa:function aa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b6:function b6(){},
fH:function fH(){},
ba:function ba(){},
ho:function ho(){},
hw:function hw(){},
c8:function c8(){},
i1:function i1(){},
j:function j(){},
bc:function bc(){},
ij:function ij(){},
dX:function dX(){},
dY:function dY(){},
e7:function e7(){},
e8:function e8(){},
ej:function ej(){},
ek:function ek(){},
eq:function eq(){},
er:function er(){},
by:function by(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(a){this.a=a},
eR:function eR(){},
bk:function bk(){},
hp:function hp(){},
dL:function dL(){},
dh:function dh(){},
hX:function hX(){},
ef:function ef(){},
eg:function eg(){}},W={
lg:function(){var u=document.createElement("a")
return u},
kA:function(){var u=document.createElement("canvas")
return u},
n1:function(a,b,c){var u=document.body,t=(u&&C.r).ai(u,a,b,c)
t.toString
u=new H.ci(new W.a1(t),new W.fg(),[W.E])
return u.gaK(u)},
kD:function(a){return"wheel"},
bQ:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bJ(a)
t=u.ge0(a)
if(typeof t==="string")r=u.ge0(a)}catch(s){H.ad(s)}return r},
n3:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.ad(u)}return s},
ja:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lX:function(a,b,c,d){var u=W.ja(W.ja(W.ja(W.ja(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
X:function(a,b,c,d){var u=W.m8(new W.j8(c),W.i)
if(u!=null&&!0)J.mM(a,b,u,!1)
return new W.j7(a,b,u,!1)},
lW:function(a){var u=W.lg(),t=window.location
u=new W.ck(new W.ji(u,t))
u.em(a)
return u},
nP:function(a,b,c,d){return!0},
nQ:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
lY:function(){var u=P.k,t=P.ls(C.o,u),s=H.c(["TEMPLATE"],[u])
t=new W.jt(t,P.d1(u),P.d1(u),P.d1(u),null)
t.ep(null,new H.fV(C.o,new W.ju(),[H.cB(C.o,0),u]),s,null)
return t},
m8:function(a,b){var u=$.am
if(u===C.f)return a
return u.dm(a,b)},
m:function m(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
bl:function bl(){},
bm:function bm(){},
bn:function bn(){},
aZ:function aZ(){},
f3:function f3(){},
I:function I(){},
bP:function bP(){},
f4:function f4(){},
af:function af(){},
aq:function aq(){},
f5:function f5(){},
f6:function f6(){},
f9:function f9(){},
ak:function ak(){},
fa:function fa(){},
cQ:function cQ(){},
cR:function cR(){},
fb:function fb(){},
fc:function fc(){},
j3:function j3(a,b){this.a=a
this.b=b},
U:function U(){},
fg:function fg(){},
i:function i(){},
f:function f(){},
ar:function ar(){},
bS:function bS(){},
fm:function fm(){},
fq:function fq(){},
aF:function aF(){},
fw:function fw(){},
bU:function bU(){},
aG:function aG(){},
bV:function bV(){},
bs:function bs(){},
fO:function fO(){},
h8:function h8(){},
c_:function c_(){},
h9:function h9(){},
ha:function ha(a){this.a=a},
hb:function hb(){},
hc:function hc(a){this.a=a},
aJ:function aJ(){},
hd:function hd(){},
au:function au(){},
a1:function a1(a){this.a=a},
E:function E(){},
da:function da(){},
aM:function aM(){},
ht:function ht(){},
hE:function hE(){},
hF:function hF(a){this.a=a},
hH:function hH(){},
aO:function aO(){},
hU:function hU(){},
aP:function aP(){},
hV:function hV(){},
aQ:function aQ(){},
hZ:function hZ(){},
i_:function i_(a){this.a=a},
av:function av(){},
dq:function dq(){},
i2:function i2(){},
i3:function i3(){},
cb:function cb(){},
aR:function aR(){},
aw:function aw(){},
i6:function i6(){},
i7:function i7(){},
ic:function ic(){},
aS:function aS(){},
bx:function bx(){},
ih:function ih(){},
ii:function ii(){},
bd:function bd(){},
iF:function iF(){},
iX:function iX(){},
bg:function bg(){},
cj:function cj(){},
j4:function j4(){},
dN:function dN(){},
j9:function j9(){},
e4:function e4(){},
jn:function jn(){},
jr:function jr(){},
j2:function j2(){},
j6:function j6(a){this.a=a},
j7:function j7(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
j8:function j8(a){this.a=a},
ck:function ck(a){this.a=a},
K:function K(){},
db:function db(a){this.a=a},
hl:function hl(a){this.a=a},
hk:function hk(a,b,c){this.a=a
this.b=b
this.c=c},
ec:function ec(){},
jk:function jk(){},
jl:function jl(){},
jt:function jt(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ju:function ju(){},
js:function js(){},
cU:function cU(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aL:function aL(){},
ji:function ji(a,b){this.a=a
this.b=b},
ev:function ev(a){this.a=a},
jE:function jE(a){this.a=a},
dM:function dM(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e5:function e5(){},
e6:function e6(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
cq:function cq(){},
cr:function cr(){},
ed:function ed(){},
ee:function ee(){},
ei:function ei(){},
el:function el(){},
em:function em(){},
cs:function cs(){},
ct:function ct(){},
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
M:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.d(P.v("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.F(a,0)
t=C.a.F(b,0)
s=new T.hz()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
r:function(a){var u=new T.hI()
u.ek(a)
return u},
aA:function aA(){},
cV:function cV(){},
b7:function b7(){},
a5:function a5(){this.a=null},
hz:function hz(){this.b=this.a=null},
hI:function hI(){this.a=null},
ds:function ds(){},
i8:function i8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i9:function i9(a){var _=this
_.a=a
_.e=_.d=_.c=null},
ia:function ia(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},R={
ie:function(){var u=new R.id(),t=P.k
u.a=new H.P([t,R.dn])
u.b=new H.P([t,R.dw])
return u},
dn:function dn(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dv:function dv(a,b,c){this.a=a
this.b=b
this.c=c},
dw:function dw(a){this.b=a
this.c=null},
id:function id(){this.c=this.b=this.a=null},
dy:function dy(a){this.b=a
this.a=this.c=null}},O={
kB:function(a){var u=new O.aB([a])
u.bg(a)
return u},
aB:function aB(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bZ:function bZ(){this.b=this.a=null},
d4:function d4(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h2:function h2(a,b){this.a=a
this.b=b},
h3:function h3(){},
h4:function h4(a,b){this.a=a
this.b=b},
h5:function h5(){},
h6:function h6(a,b){this.a=a
this.b=b},
h7:function h7(){},
fX:function fX(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d5:function d5(){},
fY:function fY(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
as:function as(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h_:function h_(){var _=this
_.e=_.d=_.c=_.b=null},
h0:function h0(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h1:function h1(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dj:function dj(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
dr:function dr(){}},E={
lq:function(){var u,t=new E.aE()
t.a=""
t.b=!0
u=O.kB(E.aE)
t.y=u
u.aV(t.ghP(),t.ghS())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sa9(0,null)
return t},
nv:function(a,b){var u=new E.hA(a)
u.ej(a,b)
return u},
nB:function(a,b,c,d,e){var u,t,s=J.Q(a)
if(!!s.$ibn)return E.lJ(a,!0,!0,!0,!1)
u=W.kA()
t=u.style
t.width="100%"
t.height="100%"
s.gc5(a).n(0,u)
return E.lJ(u,!0,!0,!0,!1)},
lJ:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dt(),p=C.i.cE(a,"webgl2",P.nb(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.u(P.v("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.nv(p,a)
u=new T.i9(p)
p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dD(a)
t=new X.fG()
t.c=new X.ag(!1,!1,!1)
t.d=P.d1(P.x)
u.b=t
t=new X.he(u)
t.f=0
t.r=V.aN()
t.x=V.aN()
t.ch=t.Q=1
u.c=t
t=new X.fP(u)
t.r=0
t.x=V.aN()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ig(u)
t.f=V.aN()
t.r=V.aN()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.c([],[[P.dp,P.a0]])
u.z=t
s=document
t.push(W.X(s,"contextmenu",u.gf4(),!1))
u.z.push(W.X(a,"focus",u.gfa(),!1))
u.z.push(W.X(a,"blur",u.geZ(),!1))
u.z.push(W.X(s,"keyup",u.gfe(),!1))
u.z.push(W.X(s,"keydown",u.gfc(),!1))
u.z.push(W.X(a,"mousedown",u.gfi(),!1))
u.z.push(W.X(a,"mouseup",u.gfm(),!1))
u.z.push(W.X(a,r,u.gfk(),!1))
t=u.z
W.kD(a)
W.kD(a)
t.push(W.X(a,W.kD(a),u.gfo(),!1))
u.z.push(W.X(s,r,u.gf6(),!1))
u.z.push(W.X(s,"mouseup",u.gf8(),!1))
u.z.push(W.X(s,"pointerlockchange",u.gfq(),!1))
u.z.push(W.X(a,"touchstart",u.gfJ(),!1))
u.z.push(W.X(a,"touchend",u.gfF(),!1))
u.z.push(W.X(a,"touchmove",u.gfH(),!1))
q.r=u
q.Q=!0
q.ch=!1
q.cx=new P.a7(Date.now(),!1)
q.cy=0
q.d6()
return q},
eU:function eU(){},
aE:function aE(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hA:function hA(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hB:function hB(a){this.a=a},
hC:function hC(a){this.a=a},
hD:function hD(a){this.a=a},
dt:function dt(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ib:function ib(a){this.a=a}},Z={
kT:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bD(c)),35044)
a.bindBuffer(b,null)
return new Z.dI(b,u)},
ai:function(a){return new Z.bf(a)},
dI:function dI(a,b){this.a=a
this.b=b},
cI:function cI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dJ:function dJ(a){this.a=a},
bN:function bN(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
br:function br(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a){this.a=a}},D={
D:function(){var u=new D.bq()
u.d=0
return u},
eX:function eX(){},
bq:function bq(){var _=this
_.d=_.c=_.b=_.a=null},
fj:function fj(a){this.a=a},
fk:function fk(a){this.a=a},
W:function W(){this.b=null},
b1:function b1(){this.b=null},
b2:function b2(){this.b=null},
B:function B(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
bo:function bo(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a8:function a8(){},
d0:function d0(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
hu:function hu(){},
hW:function hW(){},
mj:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="testCanvas",a5=null,a6=34067,a7="modifiers",a8=V.nx("Test 014"),a9=W.kA()
a9.className="pageLargeCanvas"
a9.id=a4
a8.a.appendChild(a9)
u=[P.k]
a8.di(H.c(["Test of Material Lighting shader with different reflections and refractions. No alpha is being used. The background cube maps is being painted onto the object."],u))
a8.h6(H.c(["controls","shapes"],u))
a8.di(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a4)
if(t==null)H.u(P.v("Failed to find an element with the identifier, testCanvas."))
s=E.nB(t,!0,!0,!0,!1)
r=X.kG(a5)
r.sdr(0,!1)
q=E.lq()
q.sa9(0,F.mp())
u=s.f
p=u.a
o=p.createTexture()
p.bindTexture(a6,o)
p.texParameteri(a6,10242,10497)
p.texParameteri(a6,10243,10497)
p.texParameteri(a6,10241,9729)
p.texParameteri(a6,10240,9729)
p.bindTexture(a6,a5)
n=new T.i8()
n.a=0
n.b=o
n.c=!1
n.d=0
u.aO(n,o,"../resources/maskonaive/posx.jpg",34069,!1,!1)
u.aO(n,o,"../resources/maskonaive/negx.jpg",34070,!1,!1)
u.aO(n,o,"../resources/maskonaive/posy.jpg",34071,!1,!1)
u.aO(n,o,"../resources/maskonaive/negy.jpg",34072,!1,!1)
u.aO(n,o,"../resources/maskonaive/posz.jpg",34073,!1,!1)
u.aO(n,o,"../resources/maskonaive/negz.jpg",34074,!1,!1)
m=new O.d4()
u=O.kB(V.aI)
m.e=u
u.aV(m.geV(),m.geX())
u=new O.as(m,"emission")
u.c=new A.Y(!1,!1,!1)
u.f=new V.p(0,0,0)
m.f=u
u=new O.as(m,"ambient")
u.c=new A.Y(!1,!1,!1)
u.f=new V.p(0,0,0)
m.r=u
u=new O.as(m,"diffuse")
u.c=new A.Y(!1,!1,!1)
u.f=new V.p(0,0,0)
m.x=u
u=new O.as(m,"invDiffuse")
u.c=new A.Y(!1,!1,!1)
u.f=new V.p(0,0,0)
m.y=u
u=new O.h1(m,"specular")
u.c=new A.Y(!1,!1,!1)
u.f=new V.p(0,0,0)
u.ch=100
m.z=u
u=new O.fY(m,"bump")
u.c=new A.Y(!1,!1,!1)
m.Q=u
m.ch=null
u=new O.as(m,"reflect")
u.c=new A.Y(!1,!1,!1)
u.f=new V.p(0,0,0)
m.cx=u
u=new O.h0(m,"refract")
u.c=new A.Y(!1,!1,!1)
u.f=new V.p(0,0,0)
u.ch=1
m.cy=u
u=new O.fX(m,"alpha")
u.c=new A.Y(!1,!1,!1)
u.f=1
m.db=u
u=new D.d0()
u.bg(D.a8)
u.e=H.c([],[D.bo])
u.f=H.c([],[D.hu])
u.r=H.c([],[D.hW])
u.y=u.x=null
u.cG(u.geT(),u.gft(),u.gfz())
m.dx=u
p=new O.h_()
p.b=new V.a4(0,0,0,0)
p.c=1
p.d=10
p.e=!1
m.dy=p
p=u.x
u=p==null?u.x=D.D():p
u.n(0,m.gfQ())
u=m.dx
p=u.y
u=p==null?u.y=D.D():p
p=m.gbR()
u.n(0,p)
m.fr=null
u=m.dx
l=V.kS()
k=U.lm(V.lu(V.lA(),l,new V.z(-1,-1,-1)))
j=new V.p(1,1,1)
i=new D.bo()
i.c=new V.p(1,1,1)
i.a=V.lV()
i.d=V.kS()
i.e=V.nK()
h=i.b
i.b=k
k.gq().n(0,i.gen())
k=new D.B("mover",h,i.b)
k.b=!0
i.aw(k)
if(!i.c.v(0,j)){h=i.c
i.c=j
k=new D.B("color",h,j)
k.b=!0
i.aw(k)}u.n(0,i)
u=m.r
u.sp(0,new V.p(0.1,0.1,0.1))
u=m.x
u.sp(0,new V.p(0.1,0.1,0.1))
u=m.z
u.sp(0,new V.p(1,1,1))
u=m.z
u.bj(new A.Y(!0,!1,!1))
u.d8(10)
u=m.ch
if(u!==n){if(u!=null)u.gq().L(0,p)
h=m.ch
m.ch=n
n.gq().n(0,p)
u=new D.B("environment",h,m.ch)
u.b=!0
m.a3(u)}m.cy.saB(0.6)
u=m.cy
u.sp(0,new V.p(0.2,0.3,1))
u=m.cx
u.sp(0,new V.p(0.6,0.6,0.6))
g=new U.bT()
g.bg(U.a9)
g.aV(g.geR(),g.gfv())
g.e=null
g.f=V.bt()
g.r=0
u=s.r
p=new U.dF()
k=U.kC()
k.scD(0,!0)
k.scn(6.283185307179586)
k.scp(0)
k.sa1(0,0)
k.sco(100)
k.sW(0)
k.sc8(0.5)
p.b=k
i=p.gaM()
k.gq().n(0,i)
k=U.kC()
k.scD(0,!0)
k.scn(6.283185307179586)
k.scp(0)
k.sa1(0,0)
k.sco(100)
k.sW(0)
k.sc8(0.5)
p.c=k
k.gq().n(0,i)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
f=new X.ag(!1,!1,!1)
h=p.d
p.d=f
k=new D.B(a7,h,f)
k.b=!0
p.S(k)
k=p.f
if(k!==!1){p.f=!1
k=new D.B("invertX",k,!1)
k.b=!0
p.S(k)}k=p.r
if(k!==!1){p.r=!1
k=new D.B("invertY",k,!1)
k.b=!0
p.S(k)}p.b0(u)
g.n(0,p)
u=s.r
p=new U.dE()
k=U.kC()
k.scD(0,!0)
k.scn(6.283185307179586)
k.scp(0)
k.sa1(0,0)
k.sco(100)
k.sW(0)
k.sc8(0.2)
p.b=k
k.gq().n(0,p.gaM())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
f=new X.ag(!0,!1,!1)
h=p.c
p.c=f
k=new D.B(a7,h,f)
k.b=!0
p.S(k)
p.b0(u)
g.n(0,p)
u=s.r
p=new U.dG()
p.c=0.01
p.e=p.d=0
f=new X.ag(!1,!1,!1)
p.b=f
k=new D.B(a7,a5,f)
k.b=!0
p.S(k)
p.b0(u)
g.n(0,p)
g.n(0,U.lm(V.at(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
e=X.lx(g)
d=new M.cN()
d.a=!0
u=E.lq()
c=F.hK()
p=c.a
k=new V.z(-1,-1,1)
k=k.t(0,Math.sqrt(k.C(k)))
b=p.bl(new V.ah(1,2,4,6),new V.a4(1,0,0,1),new V.O(-1,-1,0),new V.Z(0,1),k,a5)
p=c.a
k=new V.z(1,-1,1)
k=k.t(0,Math.sqrt(k.C(k)))
a=p.bl(new V.ah(0,3,4,6),new V.a4(0,0,1,1),new V.O(1,-1,0),new V.Z(1,1),k,a5)
p=c.a
k=new V.z(1,1,1)
k=k.t(0,Math.sqrt(k.C(k)))
a0=p.bl(new V.ah(0,2,5,6),new V.a4(0,1,0,1),new V.O(1,1,0),new V.Z(1,0),k,a5)
p=c.a
k=V.aN()
i=new V.z(-1,1,1)
i=i.t(0,Math.sqrt(i.C(i)))
a1=p.bl(new V.ah(0,2,4,7),new V.a4(1,1,0,1),new V.O(-1,1,0),k,i,a5)
c.d.dg(H.c([b,a,a0,a1],[F.aT]))
c.an()
u.sa9(0,c)
d.e=u
d.sb1(a5)
d.sbb(0,a5)
d.sbc(a5)
u=new O.dj()
u.b=1.0471975511965976
u.d=new V.p(1,1,1)
h=u.c
u.c=n
n.gq().n(0,u.gbR())
p=new D.B("boxTexture",h,u.c)
p.b=!0
u.a3(p)
d.sbc(u)
d.sbb(0,r)
d.sb1(e)
a2=new M.cS()
a2.a=!0
u=O.kB(E.aE)
a2.e=u
u.aV(a2.gf0(),a2.gf2())
a2.y=a2.x=a2.r=a2.f=null
a3=X.kG(a5)
a2.sb1(a5)
a2.sbb(0,a3)
a2.sbc(a5)
a2.sb1(e)
a2.sbc(m)
a2.sbb(0,r)
a2.e.n(0,q)
a2.c.sdr(0,!1)
u=M.al
p=H.c([d,a2],[u])
k=new M.cL()
k.bg(u)
k.e=!0
k.f=!1
k.r=null
k.aV(k.gfB(),k.gfD())
k.ad(0,p)
u=s.d
if(u!==k){if(u!=null)u.gq().L(0,s.gcO())
s.d=k
k.gq().n(0,s.gcO())
s.cP()}u=V.lD("controls")
u.c0(0,"Silver",new D.k5(m),!0)
u.a2(0,"Gold",new D.k6(m))
u.a2(0,"Glass",new D.k7(m))
u.a2(0,"Blue Glass",new D.kg(m))
u.a2(0,"Water Bubble",new D.kh(m))
u.a2(0,"No Reflection",new D.ki(m))
u.a2(0,"Pink Distort",new D.kj(m))
u.a2(0,"Cloak",new D.kk(m))
u.a2(0,"White and Shiny",new D.kl(m))
u=V.lD("shapes")
u.a2(0,"Cube",new D.km(q))
u.a2(0,"Cuboid",new D.kn(q))
u.a2(0,"Cylinder",new D.k8(q))
u.a2(0,"Cone",new D.k9(q))
u.a2(0,"Cylindrical",new D.ka(q))
u.a2(0,"Sphere",new D.kb(q))
u.a2(0,"Spherical",new D.kc(q))
u.c0(0,"Toroid",new D.kd(q),!0)
u.a2(0,"Knot",new D.ke(q))
u=s.z
if(u==null)u=s.z=D.D()
p=u.b
u=p==null?u.b=H.c([],[{func:1,ret:-1,args:[D.W]}]):p
u.push(new D.kf(a8,m))
V.p2(s)},
k5:function k5(a){this.a=a},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
kg:function kg(a){this.a=a},
kh:function kh(a){this.a=a},
ki:function ki(a){this.a=a},
kj:function kj(a){this.a=a},
kk:function kk(a){this.a=a},
kl:function kl(a){this.a=a},
km:function km(a){this.a=a},
kn:function kn(a){this.a=a},
k4:function k4(){},
k8:function k8(a){this.a=a},
k9:function k9(a){this.a=a},
ka:function ka(a){this.a=a},
k3:function k3(){},
kb:function kb(a){this.a=a},
kc:function kc(a){this.a=a},
k2:function k2(){},
kd:function kd(a){this.a=a},
ke:function ke(a){this.a=a},
kf:function kf(a,b){this.a=a
this.b=b}},X={cJ:function cJ(a,b){this.a=a
this.b=b},d_:function d_(a,b){this.a=a
this.b=b},fG:function fG(){var _=this
_.d=_.c=_.b=_.a=null},d3:function d3(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fP:function fP(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ag:function ag(a,b,c){this.a=a
this.b=b
this.c=c},aK:function aK(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},he:function he(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c0:function c0(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hv:function hv(){},dx:function dx(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ig:function ig(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dD:function dD(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kG:function(a){var u=new X.fs(),t=new V.a4(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lG
if(t==null){t=V.lF(0,0,1,1)
$.lG=t}u.r=t
return u},
lx:function(a){var u,t,s=new X.dd()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gq().n(0,s.ges())
t=new D.B("mover",u,s.b)
t.b=!0
s.ar(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.C().a)){s.c=1.0471975511965976
t=new D.B("fov",t,1.0471975511965976)
t.b=!0
s.ar(t)}t=s.d
if(!(Math.abs(t-0.1)<$.C().a)){s.d=0.1
t=new D.B("near",t,0.1)
t.b=!0
s.ar(t)}t=s.e
if(!(Math.abs(t-2000)<$.C().a)){s.e=2000
t=new D.B("far",t,2000)
t.b=!0
s.ar(t)}return s},
kz:function kz(){},
fs:function fs(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fz:function fz(){this.b=this.a=null},
dd:function dd(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
i4:function i4(){}},V={
p7:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.be(a-b,u)
return(a<0?a+u:a)+b},
H:function(a,b,c){if(a==null)return C.a.ak("null",c)
return C.a.ak(C.d.e2(Math.abs(a-0)<$.C().a?0:a,b),c+b+1)},
bI:function(a,b,c){var u,t,s,r,q,p,o=H.c([],[P.k])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.o)(a),++s){r=V.H(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.b(o,q)
u=C.a.ak(o[q],t)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=u}return o},
l6:function(a){return C.d.ic(Math.pow(2,C.R.cf(Math.log(H.oG(a))/Math.log(2))))},
bt:function(){var u=$.lv
return u==null?$.lv=V.at(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
at:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lu:function(a,b,c){var u=c.t(0,Math.sqrt(c.C(c))),t=b.aA(u),s=t.t(0,Math.sqrt(t.C(t))),r=u.aA(s),q=new V.z(a.a,a.b,a.c),p=s.T(0).C(q),o=r.T(0).C(q),n=u.T(0).C(q)
return V.at(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aN:function(){var u=$.lz
return u==null?$.lz=new V.Z(0,0):u},
lA:function(){var u=$.c5
return u==null?$.c5=new V.O(0,0,0):u},
lF:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dg(a,b,c,d)},
ch:function(){var u=$.lU
return u==null?$.lU=new V.z(0,0,0):u},
nK:function(){var u=$.iJ
return u==null?$.iJ=new V.z(-1,0,0):u},
kS:function(){var u=$.iK
return u==null?$.iK=new V.z(0,1,0):u},
lV:function(){var u=$.iL
return u==null?$.iL=new V.z(0,0,1):u},
p:function p(a,b,c){this.a=a
this.b=b
this.c=c},
a4:function a4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fi:function fi(a){this.a=a},
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
Z:function Z(a,b){this.a=a
this.b=b},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dg:function dg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
G:function G(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
p2:function(a){P.nC(C.O,new V.kp(a))},
lD:function(a){var u=new V.hx(a),t=document.getElementById(a)
u.c=t
if(t==null)H.u("Failed to find "+a+" for RadioGroup")
return u},
nx:function(a){var u=new V.hO()
u.el(a,!0)
return u},
cK:function cK(){},
kp:function kp(a){this.a=a},
f8:function f8(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fu:function fu(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fv:function fv(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hs:function hs(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hx:function hx(a){this.a=a
this.c=null},
hy:function hy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hO:function hO(){this.b=this.a=null},
hQ:function hQ(a){this.a=a},
hP:function hP(a){this.a=a},
hR:function hR(a){this.a=a}},U={
kC:function(){var u=new U.eZ()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
lm:function(a){var u=new U.cM()
u.a=a
return u},
eZ:function eZ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cM:function cM(){this.b=this.a=null},
bT:function bT(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a9:function a9(){},
dE:function dE(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dF:function dF(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dG:function dG(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cL:function cL(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},cN:function cN(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},cS:function cS(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},al:function al(){}},A={
ne:function(a,b){var u=a.b5,t=new A.fW(b,u)
t.cM(b,u)
t.ei(a,b)
return t},
nf:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gaq(a0)+a1.gaq(a1)+a2.gaq(a2)+a3.gaq(a3)+a4.gaq(a4)+a5.gaq(a5)+a6.gaq(a6)+a7.gaq(a7)+a8.gaq(a8)+"_"
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
g=$.ao()
if(k){u=$.aX()
g=new Z.bf(g.a|u.a)}if(j){u=$.aW()
g=new Z.bf(g.a|u.a)}if(i){u=$.aV()
g=new Z.bf(g.a|u.a)}return new A.fZ(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,l,p,r,h,!0,!1,!1,o,r,m,k,j,!1,!1,i,!1,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
jM:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jN:function(a,b,c){var u
A.jM(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.kt(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
of:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jM(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
oc:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jN(b,t,"ambient")
b.a+="\n"},
od:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jN(b,t,"diffuse")
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
og:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jN(b,t,"invDiffuse")
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
om:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jN(b,t,"specular")
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
oi:function(a,b){var u,t,s
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
ok:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jM(b,t,"reflect")
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
ol:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jM(b,t,"refract")
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
oe:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.kt(t)
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
oj:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.kt(t)
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
on:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.kt(t)
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
oh:function(a,b){var u,t
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
oo:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.T("")
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
A.of(a,j)
A.oc(a,j)
A.od(a,j)
A.og(a,j)
A.om(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.ok(a,j)
A.ol(a,j)}A.oi(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.oe(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.oj(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.on(a,q[o],j)
A.oh(a,j)}q=j.a+="// === Main ===\n"
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
j.a+=m+(r[0].toUpperCase()+C.a.ae(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ae(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ae(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
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
op:function(a,b){var u,t,s
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
or:function(a,b){var u
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
oq:function(a,b){var u
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
ot:function(a,b){var u,t
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
ou:function(a,b){var u,t
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
os:function(a,b){var u
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
ov:function(a,b){var u
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
kt:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.ae(a,1)},
kP:function(a,b,c,d,e){var u=new A.io(a,c,e)
u.f=d
P.nc(d,0,P.x)
return u},
cH:function cH(a,b,c){this.a=a
this.b=b
this.c=c},
eN:function eN(a){this.a=a},
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
fW:function fW(a,b){var _=this
_.iq=_.ip=_.dz=_.dw=_.b5=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iD=_.iC=_.iB=_.ce=_.cd=_.cc=_.cb=_.ca=_.c9=_.iA=_.iz=_.dG=_.iy=_.ix=_.dF=_.dE=_.iw=_.iv=_.dD=_.dC=_.iu=_.it=_.dB=_.is=_.ir=_.dA=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cP:function cP(a,b){this.a=a
this.b=b},
de:function de(a,b){this.a=a
this.b=b},
dl:function dl(a,b){this.a=a
this.b=b},
fZ:function fZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.b5=b3
_.dw=b4},
cd:function cd(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cf:function cf(a,b,c,d,e,f,g,h,i,j){var _=this
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
cg:function cg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
di:function di(){},
hT:function hT(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dz:function dz(){},
it:function it(a){this.a=a},
dA:function dA(a,b,c){this.a=a
this.c=b
this.d=c},
iq:function iq(a,b,c){this.a=a
this.c=b
this.d=c},
ir:function ir(a,b,c){this.a=a
this.c=b
this.d=c},
is:function is(a,b,c){this.a=a
this.c=b
this.d=c},
io:function io(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c},
ip:function ip(a,b,c){this.a=a
this.c=b
this.d=c},
J:function J(a,b,c){this.a=a
this.c=b
this.d=c},
cc:function cc(a,b,c){this.a=a
this.c=b
this.d=c},
iu:function iu(a,b,c){this.a=a
this.c=b
this.d=c},
ce:function ce(a,b,c){this.a=a
this.c=b
this.d=c},
ab:function ab(a,b,c){this.a=a
this.c=b
this.d=c},
bz:function bz(a,b,c){this.a=a
this.c=b
this.d=c},
be:function be(a,b,c){this.a=a
this.c=b
this.d=c}},F={
l1:function(a,b,c,d){var u=F.hK()
F.cv(u,b,c,d,a,1,0,0,1)
F.cv(u,b,c,d,a,0,1,0,3)
F.cv(u,b,c,d,a,0,0,1,2)
F.cv(u,b,c,d,a,-1,0,0,0)
F.cv(u,b,c,d,a,0,-1,0,0)
F.cv(u,b,c,d,a,0,0,-1,3)
u.an()
return u},
jH:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cv:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.z(h,g+a1,f+a2)
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
j.d=i}m=F.jH(i)
l=F.jH(j.b)
k=F.l9(d,a0,new F.jG(j,F.jH(j.c),F.jH(j.d),l,m,c),b)
if(k!=null)a.b8(k)},
me:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.hK()
t=b?-1:1
s=-6.283185307179586/e
r=H.c([],[F.aT])
q=u.a
p=new V.z(0,0,t)
p=p.t(0,Math.sqrt(p.C(p)))
r.push(q.h9(new V.ah(a,-1,-1,-1),new V.a4(1,1,1,1),new V.O(0,0,c),new V.z(0,0,t),new V.Z(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.w(k)
j=new V.z(m,l,t).t(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.dH(new V.ah(a,-1,-1,-1),null,new V.a4(i,g,h,1),new V.O(m*k,l*k,c),new V.z(0,0,t),new V.Z(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.n(0,f)
r.push(f)}u.d.dg(r)
return u},
mb:function(a,b,c){return F.mc(!0,a,1,new F.jQ(1,c),b)},
mc:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.l9(c,e,new F.jS(d),null)
if(u==null)return
u.an()
u.c1()
if(b)u.b8(F.me(3,!1,1,new F.jT(d),e))
u.b8(F.me(1,!0,-1,new F.jU(d),e))
return u},
mn:function(a,b,c){var u,t={}
t.a=b
if(b==null)t.a=new F.kq()
u=F.l1(a,null,new F.kr(t,1),c)
u.c1()
return u},
mp:function(){return F.md(15,30,0.5,1,new F.ku())},
oX:function(){return F.md(12,120,0.3,1,new F.k1(3,2))},
md:function(a,b,c,d,e){var u=F.l9(a,b,new F.jR(e,d,b,c),null)
if(u==null)return
u.an()
u.c1()
return u},
l9:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.hK()
t=H.c([],[F.aT])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dH(g,g,new V.a4(p,0,0,1),g,g,new V.Z(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.c7(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.dH(g,g,new V.a4(j,i,h,1),g,g,new V.Z(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.c7(d))}}u.d.h8(a+1,b+1,t)
return u},
bR:function(a,b,c){var u=new F.b0(),t=a.a
if(t==null)H.u(P.v("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.u(P.v("May not create a face with vertices attached to different shapes."))
u.bZ(a)
u.c_(b)
u.fW(c)
u.a.a.d.b.push(u)
u.a.a.a4()
return u},
n8:function(a,b){var u=new F.bX(),t=a.a
if(t==null)H.u(P.v("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.u(P.v("May not create a line with vertices attached to different shapes."))
u.bZ(a)
u.c_(b)
u.a.a.c.b.push(u)
u.a.a.a4()
return u},
hK:function(){var u=new F.hJ(),t=new F.iM(u)
t.b=!1
t.c=H.c([],[F.aT])
u.a=t
t=new F.hN(u)
t.b=H.c([],[F.c4])
u.b=t
t=new F.hM(u)
t.b=H.c([],[F.bX])
u.c=t
t=new F.hL(u)
t.b=H.c([],[F.b0])
u.d=t
u.e=null
return u},
dH:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aT(),r=new F.iU()
r.b=H.c([],[F.c4])
s.b=r
r=new F.iQ()
u=[F.bX]
r.b=H.c([],u)
r.c=H.c([],u)
s.c=r
r=new F.iN()
u=[F.b0]
r.b=H.c([],u)
r.c=H.c([],u)
r.d=H.c([],u)
s.d=r
h=$.mD()
s.e=0
r=$.ao()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aX().a)!==0?e:t
s.x=(u&$.aW().a)!==0?b:t
s.y=(u&$.bi().a)!==0?f:t
s.z=(u&$.bj().a)!==0?g:t
s.Q=(u&$.mE().a)!==0?c:t
s.ch=(u&$.bK().a)!==0?i:0
s.cx=(u&$.aV().a)!==0?a:t
return s},
jG:function jG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jQ:function jQ(a,b){this.a=a
this.b=b},
jS:function jS(a){this.a=a},
jT:function jT(a){this.a=a},
jU:function jU(a){this.a=a},
kq:function kq(){},
kr:function kr(a,b){this.a=a
this.b=b},
ku:function ku(){},
k1:function k1(a,b){this.a=a
this.b=b},
jR:function jR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b0:function b0(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fl:function fl(){},
hS:function hS(){},
bX:function bX(){this.b=this.a=null},
fI:function fI(){},
im:function im(){},
c4:function c4(){this.a=null},
hJ:function hJ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hL:function hL(a){this.a=a
this.b=null},
hM:function hM(a){this.a=a
this.b=null},
hN:function hN(a){this.a=a
this.b=null},
aT:function aT(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iW:function iW(a){this.a=a},
iV:function iV(a){this.a=a},
iM:function iM(a){this.a=a
this.c=this.b=null},
iN:function iN(){this.d=this.c=this.b=null},
iO:function iO(a,b){this.a=a
this.b=b},
iP:function iP(a,b){this.a=a
this.b=b},
iQ:function iQ(){this.c=this.b=null},
iS:function iS(){},
iR:function iR(){},
iT:function iT(){},
hm:function hm(){},
iU:function iU(){this.b=null}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kK.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gI:function(a){return H.c6(a)},
h:function(a){return"Instance of '"+H.e(H.c7(a))+"'"}}
J.fD.prototype={
h:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iaz:1}
J.cY.prototype={
v:function(a,b){return null==b},
h:function(a){return"null"},
gI:function(a){return 0}}
J.cZ.prototype={
gI:function(a){return 0},
h:function(a){return String(a)}}
J.hr.prototype={}
J.bA.prototype={}
J.b5.prototype={
h:function(a){var u=a[$.mr()]
if(u==null)return this.ef(a)
return"JavaScript function for "+H.e(J.a2(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b3.prototype={
dX:function(a,b){if(!!a.fixed$length)H.u(P.y("removeAt"))
if(b<0||b>=a.length)throw H.d(P.df(b,null))
return a.splice(b,1)[0]},
L:function(a,b){var u
if(!!a.fixed$length)H.u(P.y("remove"))
for(u=0;u<a.length;++u)if(J.F(a[u],b)){a.splice(u,1)
return!0}return!1},
ad:function(a,b){var u,t
if(!!a.fixed$length)H.u(P.y("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.o)(b),++t)a.push(b[t])},
H:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.d(P.aC(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
hL:function(a){return this.k(a,"")},
hD:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.d(P.aC(a))}return u},
hE:function(a,b,c){return this.hD(a,b,c,null)},
hC:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.d(P.aC(a))}throw H.d(H.fB())},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
eb:function(a,b,c){if(b<0||b>a.length)throw H.d(P.a_(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.a_(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.cB(a,0)])
return H.c(a.slice(b,c),[H.cB(a,0)])},
ghB:function(a){if(a.length>0)return a[0]
throw H.d(H.fB())},
gau:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.fB())},
dk:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.d(P.aC(a))}return!1},
bz:function(a,b){if(!!a.immutable$list)H.u(P.y("sort"))
H.dk(a,0,a.length-1,b)},
V:function(a,b){var u
for(u=0;u<a.length;++u)if(J.F(a[u],b))return!0
return!1},
h:function(a){return P.kH(a,"[","]")},
gU:function(a){return new J.a3(a,a.length)},
gI:function(a){return H.c6(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.u(P.y("set length"))
if(b<0)throw H.d(P.a_(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.d(H.bH(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.u(P.y("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bH(a,b))
a[b]=c},
$ih:1,
$in:1}
J.kJ.prototype={}
J.a3.prototype={
gJ:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.o(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bW.prototype={
hj:function(a,b){var u
if(typeof b!=="number")throw H.d(H.an(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbp(b)
if(this.gbp(a)===u)return 0
if(this.gbp(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbp:function(a){return a===0?1/a<0:a<0},
ic:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.y(""+a+".toInt()"))},
cf:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.y(""+a+".floor()"))},
ao:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.y(""+a+".round()"))},
e2:function(a,b){var u
if(b>20)throw H.d(P.a_(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbp(a))return"-"+u
return u},
bd:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.a_(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.X(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.u(P.y("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.b(t,1)
u=t[1]
if(3>=s)return H.b(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.w("0",r)},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
be:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eh:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.da(a,b)},
ac:function(a,b){return(a|0)===a?a/b|0:this.da(a,b)},
da:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.y("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aQ:function(a,b){var u
if(a>0)u=this.d9(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
h_:function(a,b){if(b<0)throw H.d(H.an(b))
return this.d9(a,b)},
d9:function(a,b){return b>31?0:a>>>b},
$iN:1,
$iac:1}
J.cX.prototype={$ix:1}
J.cW.prototype={}
J.b4.prototype={
X:function(a,b){if(b<0)throw H.d(H.bH(a,b))
if(b>=a.length)H.u(H.bH(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.d(H.bH(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(typeof b!=="string")throw H.d(P.lh(b,null,null))
return a+b},
aT:function(a,b,c,d){var u,t
c=P.bb(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
aa:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.a_(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a7:function(a,b){return this.aa(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.u(H.an(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.R()
if(b<0)throw H.d(P.df(b,null))
if(b>c)throw H.d(P.df(b,null))
if(c>a.length)throw H.d(P.df(c,null))
return a.substring(b,c)},
ae:function(a,b){return this.u(a,b,null)},
ih:function(a){return a.toLowerCase()},
w:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.L)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ak:function(a,b){var u=b-a.length
if(u<=0)return a
return this.w(" ",u)+a},
bo:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.a_(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dN:function(a,b){return this.bo(a,b,0)},
h:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ik:1}
H.l.prototype={
gl:function(a){return this.a.length},
i:function(a,b){return C.a.X(this.a,b)},
$at:function(){return[P.x]},
$ah:function(){return[P.x]},
$an:function(){return[P.x]}}
H.ff.prototype={}
H.d2.prototype={
gU:function(a){return new H.bY(this,this.gl(this))},
bx:function(a,b){return this.ee(0,b)}}
H.bY.prototype={
gJ:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=J.cy(s),q=r.gl(s)
if(t.b!==q)throw H.d(P.aC(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.K(s,u);++t.c
return!0}}
H.fT.prototype={
gU:function(a){return new H.fU(J.aY(this.a),this.b)},
gl:function(a){return J.ae(this.a)},
K:function(a,b){return this.b.$1(J.eJ(this.a,b))},
$ah:function(a,b){return[b]}}
H.fU.prototype={
B:function(){var u=this,t=u.b
if(t.B()){u.a=u.c.$1(t.gJ(t))
return!0}u.a=null
return!1},
gJ:function(a){return this.a}}
H.fV.prototype={
gl:function(a){return J.ae(this.a)},
K:function(a,b){return this.b.$1(J.eJ(this.a,b))},
$ad2:function(a,b){return[b]},
$ah:function(a,b){return[b]}}
H.ci.prototype={
gU:function(a){return new H.iY(J.aY(this.a),this.b)}}
H.iY.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(t.$1(u.gJ(u)))return!0
return!1},
gJ:function(a){var u=this.a
return u.gJ(u)}}
H.cT.prototype={}
H.iy.prototype={
m:function(a,b,c){throw H.d(P.y("Cannot modify an unmodifiable list"))}}
H.dB.prototype={}
H.f0.prototype={
h:function(a){return P.kN(this)},
m:function(a,b,c){return H.mZ()},
$iS:1}
H.f1.prototype={
gl:function(a){return this.a},
bm:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bm(0,b))return
return this.cZ(b)},
cZ:function(a){return this.b[a]},
H:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cZ(s))}}}
H.ik.prototype={
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
H.hn.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fF.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.ix.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kv.prototype={
$1:function(a){if(!!J.Q(a).$ibp)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.eh.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bO.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
gii:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i5.prototype={}
H.hY.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.eI(u)+"'"}}
H.bL.prototype={
v:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bL))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.c6(this.a)
else u=typeof t!=="object"?J.cF(t):H.c6(t)
return(u^H.c6(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.c7(u))+"'")}}
H.eW.prototype={
h:function(a){return this.a}}
H.hG.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.P.prototype={
gl:function(a){return this.a},
ghK:function(a){return this.a===0},
ga8:function(a){return new H.fK(this,[H.cB(this,0)])},
bm:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cW(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cW(t,b)}else return s.hH(b)},
hH:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cj(u.bH(t,u.ci(a)),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bh(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bh(r,b)
s=t==null?null:t.b
return s}else return q.hI(b)},
hI:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bH(r,s.ci(a))
t=s.cj(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cR(u==null?s.b=s.bP():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cR(t==null?s.c=s.bP():t,b,c)}else s.hJ(b,c)},
hJ:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bP()
u=r.ci(a)
t=r.bH(q,u)
if(t==null)r.bX(q,u,[r.bQ(a,b)])
else{s=r.cj(t,a)
if(s>=0)t[s].b=b
else t.push(r.bQ(a,b))}},
H:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.d(P.aC(u))
t=t.c}},
cR:function(a,b,c){var u=this.bh(a,b)
if(u==null)this.bX(a,b,this.bQ(b,c))
else u.b=c},
eO:function(){this.r=this.r+1&67108863},
bQ:function(a,b){var u,t=this,s=new H.fJ(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eO()
return s},
ci:function(a){return J.cF(a)&0x3ffffff},
cj:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.F(a[t].a,b))return t
return-1},
h:function(a){return P.kN(this)},
bh:function(a,b){return a[b]},
bH:function(a,b){return a[b]},
bX:function(a,b,c){a[b]=c},
eH:function(a,b){delete a[b]},
cW:function(a,b){return this.bh(a,b)!=null},
bP:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bX(t,u,t)
this.eH(t,u)
return t}}
H.fJ.prototype={}
H.fK.prototype={
gl:function(a){return this.a.a},
gU:function(a){var u=this.a,t=new H.fL(u,u.r)
t.c=u.e
return t}}
H.fL.prototype={
gJ:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.aC(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.jY.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.jZ.prototype={
$2:function(a,b){return this.a(a,b)}}
H.k_.prototype={
$1:function(a){return this.a(a)}}
H.fE.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$int:1}
H.c1.prototype={$ic1:1}
H.b8.prototype={$ib8:1}
H.d7.prototype={
gl:function(a){return a.length},
$iA:1,
$aA:function(){}}
H.c2.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]},
m:function(a,b,c){H.ay(b,a,a.length)
a[b]=c},
$at:function(){return[P.N]},
$ih:1,
$ah:function(){return[P.N]},
$in:1,
$an:function(){return[P.N]}}
H.d8.prototype={
m:function(a,b,c){H.ay(b,a,a.length)
a[b]=c},
$at:function(){return[P.x]},
$ih:1,
$ah:function(){return[P.x]},
$in:1,
$an:function(){return[P.x]}}
H.hf.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.hg.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.hh.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.hi.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.hj.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.d9.prototype={
gl:function(a){return a.length},
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.c3.prototype={
gl:function(a){return a.length},
i:function(a,b){H.ay(b,a,a.length)
return a[b]},
$ic3:1,
$iby:1}
H.cm.prototype={}
H.cn.prototype={}
H.co.prototype={}
H.cp.prototype={}
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
eq:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bG(new P.jw(this,b),0),a)
else throw H.d(P.y("`setTimeout()` not found."))},
er:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bG(new P.jv(this,a,Date.now(),b),0),a)
else throw H.d(P.y("Periodic timer."))},
$idu:1}
P.jw.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jv.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.eh(u,q)}s.c=r
t.d.$1(s)}}
P.dK.prototype={}
P.dp.prototype={}
P.i0.prototype={}
P.du.prototype={}
P.jF.prototype={}
P.jO.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dc():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.h(0)
throw u}}
P.jf.prototype={
i8:function(a){var u,t,s,r=null
try{if(C.f===$.am){a.$0()
return}P.ox(r,r,this,a)}catch(s){u=H.ad(s)
t=H.l3(s)
P.m5(r,r,this,u,t)}},
i9:function(a,b){var u,t,s,r=null
try{if(C.f===$.am){a.$1(b)
return}P.oy(r,r,this,a,b)}catch(s){u=H.ad(s)
t=H.l3(s)
P.m5(r,r,this,u,t)}},
ia:function(a,b){return this.i9(a,b,null)},
hg:function(a){return new P.jg(this,a)},
dm:function(a,b){return new P.jh(this,a,b)}}
P.jg.prototype={
$0:function(){return this.a.i8(this.b)}}
P.jh.prototype={
$1:function(a){return this.a.ia(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jc.prototype={
gU:function(a){var u=new P.dZ(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
V:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.eC(b)
return t}},
eC:function(a){var u=this.d
if(u==null)return!1
return this.bF(this.d_(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cS(u==null?s.b=P.kU():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cS(t==null?s.c=P.kU():t,b)}else return s.ev(0,b)},
ev:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kU()
u=s.cU(b)
t=r[u]
if(t==null)r[u]=[s.bC(b)]
else{if(s.bF(t,b)>=0)return!1
t.push(s.bC(b))}return!0},
L:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fM(this.c,b)
else return this.fL(0,b)},
fL:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.d_(r,b)
t=s.bF(u,b)
if(t<0)return!1
s.dc(u.splice(t,1)[0])
return!0},
cS:function(a,b){if(a[b]!=null)return!1
a[b]=this.bC(b)
return!0},
fM:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.dc(u)
delete a[b]
return!0},
cT:function(){this.r=1073741823&this.r+1},
bC:function(a){var u,t=this,s=new P.jd(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cT()
return s},
dc:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cT()},
cU:function(a){return J.cF(a)&1073741823},
d_:function(a,b){return a[this.cU(b)]},
bF:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.F(a[t].a,b))return t
return-1}}
P.jd.prototype={}
P.dZ.prototype={
gJ:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.aC(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fM.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.fN.prototype={$ih:1,$in:1}
P.t.prototype={
gU:function(a){return new H.bY(a,this.gl(a))},
K:function(a,b){return this.i(a,b)},
ig:function(a,b){var u,t,s=this,r=H.c([],[H.oP(s,a,"t",0)])
C.b.sl(r,s.gl(a))
for(u=0;u<s.gl(a);++u){t=s.i(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t}return r},
ie:function(a){return this.ig(a,!0)},
hz:function(a,b,c,d){var u
P.bb(b,c,this.gl(a))
for(u=b;u<c;++u)this.m(a,u,d)},
h:function(a){return P.kH(a,"[","]")}}
P.fQ.prototype={}
P.fR.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.aH.prototype={
H:function(a,b){var u,t
for(u=J.aY(this.ga8(a));u.B();){t=u.gJ(u)
b.$2(t,this.i(a,t))}},
gl:function(a){return J.ae(this.ga8(a))},
h:function(a){return P.kN(a)},
$iS:1}
P.jx.prototype={
m:function(a,b,c){throw H.d(P.y("Cannot modify unmodifiable map"))}}
P.fS.prototype={
i:function(a,b){return J.cE(this.a,b)},
m:function(a,b,c){J.kw(this.a,b,c)},
H:function(a,b){J.ld(this.a,b)},
gl:function(a){return J.ae(this.a)},
h:function(a){return J.a2(this.a)},
$iS:1}
P.dC.prototype={}
P.jj.prototype={
ad:function(a,b){var u
for(u=J.aY(b);u.B();)this.n(0,u.gJ(u))},
h:function(a){return P.kH(this,"{","}")},
K:function(a,b){var u,t,s
P.lE(b,"index")
for(u=P.nS(this,this.r),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.d(P.L(b,this,"index",null,t))},
$ih:1}
P.e_.prototype={}
P.et.prototype={}
P.eS.prototype={
hO:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bb(a0,a1,b.length)
u=$.mG()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.a.F(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jX(C.a.F(b,n))
j=H.jX(C.a.F(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.b(u,i)
h=u[i]
if(h>=0){i=C.a.X("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.T("")
g=r.a+=C.a.u(b,s,t)
r.a=g+H.bv(m)
s=n
continue}}throw H.d(P.R("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.u(b,s,a1)
f=g.length
if(q>=0)P.li(b,p,a1,q,o,f)
else{e=C.c.be(f-1,4)+1
if(e===1)throw H.d(P.R(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aT(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.li(b,p,a1,q,o,d)
else{e=C.c.be(d,4)
if(e===1)throw H.d(P.R(c,b,a1))
if(e>1)b=C.a.aT(b,a1,a1,e===2?"==":"=")}return b}}
P.eT.prototype={}
P.eY.prototype={}
P.f2.prototype={}
P.fh.prototype={}
P.fy.prototype={
h:function(a){return this.a}}
P.fx.prototype={
eE:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.T("")
if(r>b)q.a+=C.a.u(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.mR(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iG.prototype={
ghy:function(){return C.M}}
P.iI.prototype={
c6:function(a){var u,t,s=P.bb(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jD(u)
if(t.eJ(a,0,s)!==s)t.de(J.mN(a,s-1),0)
return new Uint8Array(u.subarray(0,H.o8(0,t.b,u.length)))}}
P.jD.prototype={
de:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eJ:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.X(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.F(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.de(r,C.a.F(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iH.prototype={
c6:function(a){var u,t,s,r,q,p,o,n,m=P.nF(!1,a,0,null)
if(m!=null)return m
u=P.bb(0,null,J.ae(a))
t=P.m7(a,0,u)
if(t>0){s=P.ca(a,0,t)
if(t===u)return s
r=new P.T(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.T("")
o=new P.jC(!1,r)
o.c=p
o.hk(a,q,u)
if(o.e>0){H.u(P.R("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bv(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jC.prototype={
hk:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.cy(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.al()
if((r&192)!==128){q=P.R(k+C.c.bd(r,16),a,s)
throw H.d(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.b(C.v,q)
if(j<=C.v[q]){q=P.R("Overlong encoding of 0x"+C.c.bd(j,16),a,s-h-1)
throw H.d(q)}if(j>1114111){q=P.R("Character outside valid Unicode range: 0x"+C.c.bd(j,16),a,s-h-1)
throw H.d(q)}if(!l.c||j!==65279)t.a+=H.bv(j)
l.c=!1}for(q=s<c;q;){p=P.m7(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.ca(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.R()
if(r<0){m=P.R("Negative UTF-8 code unit: -0x"+C.c.bd(-r,16),a,n-1)
throw H.d(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.R(k+C.c.bd(r,16),a,n-1)
throw H.d(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.az.prototype={}
P.a7.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.a7&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.c.aQ(u,30))&1073741823},
h:function(a){var u=this,t=P.n_(H.np(u)),s=P.cO(H.nn(u)),r=P.cO(H.nj(u)),q=P.cO(H.nk(u)),p=P.cO(H.nm(u)),o=P.cO(H.no(u)),n=P.n0(H.nl(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.N.prototype={}
P.b_.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.b_&&this.a===b.a},
gI:function(a){return C.c.gI(this.a)},
h:function(a){var u,t,s,r=new P.fe(),q=this.a
if(q<0)return"-"+new P.b_(0-q).h(0)
u=r.$1(C.c.ac(q,6e7)%60)
t=r.$1(C.c.ac(q,1e6)%60)
s=new P.fd().$1(q%1e6)
return""+C.c.ac(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.fd.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fe.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bp.prototype={}
P.dc.prototype={
h:function(a){return"Throw of null."}}
P.aj.prototype={
gbE:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbD:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbE()+o+u
if(!q.a)return t
s=q.gbD()
r=P.kF(q.b)
return t+s+": "+r}}
P.bw.prototype={
gbE:function(){return"RangeError"},
gbD:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fA.prototype={
gbE:function(){return"RangeError"},
gbD:function(){var u,t=this.b
if(typeof t!=="number")return t.R()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.iz.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.iv.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c9.prototype={
h:function(a){return"Bad state: "+this.a}}
P.f_.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kF(u)+"."}}
P.hq.prototype={
h:function(a){return"Out of Memory"},
$ibp:1}
P.dm.prototype={
h:function(a){return"Stack Overflow"},
$ibp:1}
P.f7.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dS.prototype={
h:function(a){return"Exception: "+this.a}}
P.fr.prototype={
h:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.u(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.F(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.X(f,q)
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
return h+l+j+k+"\n"+C.a.w(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.ft.prototype={}
P.x.prototype={}
P.h.prototype={
bx:function(a,b){return new H.ci(this,b,[H.l2(this,"h",0)])},
gl:function(a){var u,t=this.gU(this)
for(u=0;t.B();)++u
return u},
gaK:function(a){var u,t=this.gU(this)
if(!t.B())throw H.d(H.fB())
u=t.gJ(t)
if(t.B())throw H.d(H.n5())
return u},
K:function(a,b){var u,t,s
P.lE(b,"index")
for(u=this.gU(this),t=0;u.B();){s=u.gJ(u)
if(b===t)return s;++t}throw H.d(P.L(b,this,"index",null,t))},
h:function(a){return P.n4(this,"(",")")}}
P.fC.prototype={}
P.n.prototype={$ih:1}
P.S.prototype={}
P.b9.prototype={
gI:function(a){return P.a0.prototype.gI.call(this,this)},
h:function(a){return"null"}}
P.ac.prototype={}
P.a0.prototype={constructor:P.a0,$ia0:1,
v:function(a,b){return this===b},
gI:function(a){return H.c6(this)},
h:function(a){return"Instance of '"+H.e(H.c7(this))+"'"},
toString:function(){return this.h(this)}}
P.k.prototype={}
P.T.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iE.prototype={
$2:function(a,b){var u,t,s,r=J.cz(b).dN(b,"=")
if(r===-1){if(b!=="")J.kw(a,P.kY(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.u(b,0,r)
t=C.a.ae(b,r+1)
s=this.a
J.kw(a,P.kY(u,0,u.length,s,!0),P.kY(t,0,t.length,s,!0))}return a}}
P.iB.prototype={
$2:function(a,b){throw H.d(P.R("Illegal IPv4 address, "+a,this.a,b))}}
P.iC.prototype={
$2:function(a,b){throw H.d(P.R("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iD.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eH(C.a.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.R()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bB.prototype={
ge5:function(){return this.b},
gcg:function(a){var u=this.c
if(u==null)return""
if(C.a.a7(u,"["))return C.a.u(u,1,u.length-1)
return u},
gbs:function(a){var u=this.d
if(u==null)return P.lZ(this.a)
return u},
gct:function(a){var u=this.f
return u==null?"":u},
gdI:function(){var u=this.r
return u==null?"":u},
dZ:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a7(u,"/"))u="/"+u
s=P.kW(null,0,0,b)
return new P.bB(q,o,m,n,u,s,r.r)},
gcu:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.k
u=this.Q=new P.dC(P.lQ(t==null?"":t),[u,u])
t=u}return t},
gdJ:function(){return this.c!=null},
gdM:function(){return this.f!=null},
gdK:function(){return this.r!=null},
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
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.Q(b).$ikQ)if(s.a==b.gby())if(s.c!=null===b.gdJ())if(s.b==b.ge5())if(s.gcg(s)==b.gcg(b))if(s.gbs(s)==b.gbs(b))if(s.e===b.gdW(b)){u=s.f
t=u==null
if(!t===b.gdM()){if(t)u=""
if(u===b.gct(b)){u=s.r
t=u==null
if(!t===b.gdK()){if(t)u=""
u=u===b.gdI()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
return u==null?this.z=C.a.gI(this.h(0)):u},
$ikQ:1,
gby:function(){return this.a},
gdW:function(a){return this.e}}
P.jy.prototype={
$1:function(a){throw H.d(P.R("Invalid port",this.a,this.b+1))}}
P.jz.prototype={
$1:function(a){return P.eu(C.W,a,C.e,!1)}}
P.jB.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.eu(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.eu(C.h,b,C.e,!0))}}}
P.jA.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aY(b),t=this.a;u.B();)t.$2(a,u.gJ(u))}}
P.iA.prototype={
ge4:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.b(o,0)
u=q.a
o=o[0]+1
t=C.a.bo(u,"?",o)
s=u.length
if(t>=0){r=P.cu(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.j5("data",p,p,p,P.cu(u,o,s,C.z,!1),r,p)},
h:function(a){var u,t=this.b
if(0>=t.length)return H.b(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jJ.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jI.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.b(u,a)
u=u[a]
J.mO(u,0,96,b)
return u},
$S:18}
P.jK.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.F(b,s)^96
if(r>=t)return H.b(a,r)
a[r]=c}}}
P.jL.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.F(b,0),t=C.a.F(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.b(a,r)
a[r]=c}}}
P.jm.prototype={
gdJ:function(){return this.c>0},
gdL:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.D()
t=this.e
if(typeof t!=="number")return H.w(t)
t=u+1<t
u=t}else u=!1
return u},
gdM:function(){var u=this.f
if(typeof u!=="number")return u.R()
return u<this.r},
gdK:function(){return this.r<this.a.length},
gd0:function(){return this.b===4&&C.a.a7(this.a,"http")},
gd1:function(){return this.b===5&&C.a.a7(this.a,"https")},
gby:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gd0())q=t.x="http"
else if(t.gd1()){t.x="https"
q="https"}else if(q===4&&C.a.a7(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a7(t.a,r)){t.x=r
q=r}else{q=C.a.u(t.a,0,q)
t.x=q}return q},
ge5:function(){var u=this.c,t=this.b+3
return u>t?C.a.u(this.a,t,u-1):""},
gcg:function(a){var u=this.c
return u>0?C.a.u(this.a,u,this.d):""},
gbs:function(a){var u,t=this
if(t.gdL()){u=t.d
if(typeof u!=="number")return u.D()
return P.eH(C.a.u(t.a,u+1,t.e),null,null)}if(t.gd0())return 80
if(t.gd1())return 443
return 0},
gdW:function(a){return C.a.u(this.a,this.e,this.f)},
gct:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.R()
return u<t?C.a.u(this.a,u+1,t):""},
gdI:function(){var u=this.r,t=this.a
return u<t.length?C.a.ae(t,u+1):""},
gcu:function(){var u=this,t=u.f
if(typeof t!=="number")return t.R()
if(t>=u.r)return C.X
t=P.k
return new P.dC(P.lQ(u.gct(u)),[t,t])},
dZ:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gby(),m=n==="file",l=p.c,k=l>0?C.a.u(p.a,p.b+3,l):"",j=p.gdL()?p.gbs(p):o
l=p.c
if(l>0)u=C.a.u(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.u(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a7(t,"/"))t="/"+t
r=P.kW(o,0,0,b)
s=p.r
q=s<l.length?C.a.ae(l,s+1):o
return new P.bB(n,k,u,j,t,r,q)},
gI:function(a){var u=this.y
return u==null?this.y=C.a.gI(this.a):u},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.Q(b).$ikQ&&this.a===b.h(0)},
h:function(a){return this.a},
$ikQ:1}
P.j5.prototype={}
W.m.prototype={}
W.eK.prototype={
gl:function(a){return a.length}}
W.eL.prototype={
h:function(a){return String(a)}}
W.eM.prototype={
h:function(a){return String(a)}}
W.bl.prototype={$ibl:1}
W.bm.prototype={$ibm:1}
W.bn.prototype={
cE:function(a,b,c){if(c!=null)return a.getContext(b,P.oH(c))
return a.getContext(b)},
e7:function(a,b){return this.cE(a,b,null)},
$ibn:1}
W.aZ.prototype={
gl:function(a){return a.length}}
W.f3.prototype={
gl:function(a){return a.length}}
W.I.prototype={$iI:1}
W.bP.prototype={
gl:function(a){return a.length}}
W.f4.prototype={}
W.af.prototype={}
W.aq.prototype={}
W.f5.prototype={
gl:function(a){return a.length}}
W.f6.prototype={
gl:function(a){return a.length}}
W.f9.prototype={
gl:function(a){return a.length}}
W.ak.prototype={$iak:1}
W.fa.prototype={
h:function(a){return String(a)}}
W.cQ.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[[P.aa,P.ac]]},
$at:function(){return[[P.aa,P.ac]]},
$ih:1,
$ah:function(){return[[P.aa,P.ac]]},
$in:1,
$an:function(){return[[P.aa,P.ac]]}}
W.cR.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaJ(a))+" x "+H.e(this.gaD(a))},
v:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
if(!u.$iaa)return!1
return a.left===u.gbq(b)&&a.top===u.gbv(b)&&this.gaJ(a)===u.gaJ(b)&&this.gaD(a)===u.gaD(b)},
gI:function(a){return W.lX(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(this.gaJ(a)),C.d.gI(this.gaD(a)))},
gdn:function(a){return a.bottom},
gaD:function(a){return a.height},
gbq:function(a){return a.left},
gcz:function(a){return a.right},
gbv:function(a){return a.top},
gaJ:function(a){return a.width},
$iaa:1,
$aaa:function(){return[P.ac]}}
W.fb.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[P.k]},
$at:function(){return[P.k]},
$ih:1,
$ah:function(){return[P.k]},
$in:1,
$an:function(){return[P.k]}}
W.fc.prototype={
gl:function(a){return a.length}}
W.j3.prototype={
gl:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gU:function(a){var u=this.ie(this)
return new J.a3(u,u.length)},
$at:function(){return[W.U]},
$ah:function(){return[W.U]},
$an:function(){return[W.U]}}
W.U.prototype={
ghf:function(a){return new W.j6(a)},
gc5:function(a){return new W.j3(a,a.children)},
gds:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.R()
if(s<0)s=-s*0
if(typeof r!=="number")return r.R()
if(r<0)r=-r*0
return new P.aa(u,t,s,r,[P.ac])},
h:function(a){return a.localName},
ai:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.lp
if(u==null){u=H.c([],[W.aL])
t=new W.db(u)
u.push(W.lW(null))
u.push(W.lY())
$.lp=t
d=t}else d=u
u=$.lo
if(u==null){u=new W.ev(d)
$.lo=u
c=u}else{u.a=d
c=u}}if($.aD==null){u=document
t=u.implementation.createHTMLDocument("")
$.aD=t
$.kE=t.createRange()
s=$.aD.createElement("base")
s.href=u.baseURI
$.aD.head.appendChild(s)}u=$.aD
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aD
if(!!this.$ibm)r=u.body
else{r=u.createElement(a.tagName)
$.aD.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.V(C.U,a.tagName)){$.kE.selectNodeContents(r)
q=$.kE.createContextualFragment(b)}else{r.innerHTML=b
q=$.aD.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aD.body
if(r==null?u!=null:r!==u)J.lf(r)
c.cF(q)
document.adoptNode(q)
return q},
hn:function(a,b,c){return this.ai(a,b,c,null)},
e9:function(a,b){a.textContent=null
a.appendChild(this.ai(a,b,null,null))},
$iU:1,
ge0:function(a){return a.tagName}}
W.fg.prototype={
$1:function(a){return!!J.Q(a).$iU}}
W.i.prototype={$ii:1}
W.f.prototype={
h7:function(a,b,c,d){if(c!=null)this.ew(a,b,c,!1)},
ew:function(a,b,c,d){return a.addEventListener(b,H.bG(c,1),!1)}}
W.ar.prototype={$iar:1}
W.bS.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.ar]},
$at:function(){return[W.ar]},
$ih:1,
$ah:function(){return[W.ar]},
$in:1,
$an:function(){return[W.ar]},
$ibS:1}
W.fm.prototype={
gl:function(a){return a.length}}
W.fq.prototype={
gl:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.fw.prototype={
gl:function(a){return a.length}}
W.bU.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.E]},
$at:function(){return[W.E]},
$ih:1,
$ah:function(){return[W.E]},
$in:1,
$an:function(){return[W.E]}}
W.aG.prototype={$iaG:1,
gdt:function(a){return a.data}}
W.bV.prototype={$ibV:1}
W.bs.prototype={$ibs:1}
W.fO.prototype={
h:function(a){return String(a)}}
W.h8.prototype={
gl:function(a){return a.length}}
W.c_.prototype={$ic_:1}
W.h9.prototype={
i:function(a,b){return P.aU(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aU(u.value[1]))}},
ga8:function(a){var u=H.c([],[P.k])
this.H(a,new W.ha(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.y("Not supported"))},
$iS:1,
$aS:function(){return[P.k,null]}}
W.ha.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hb.prototype={
i:function(a,b){return P.aU(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aU(u.value[1]))}},
ga8:function(a){var u=H.c([],[P.k])
this.H(a,new W.hc(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.y("Not supported"))},
$iS:1,
$aS:function(){return[P.k,null]}}
W.hc.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aJ.prototype={$iaJ:1}
W.hd.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aJ]},
$at:function(){return[W.aJ]},
$ih:1,
$ah:function(){return[W.aJ]},
$in:1,
$an:function(){return[W.aJ]}}
W.au.prototype={$iau:1}
W.a1.prototype={
gaK:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.d(P.lH("No elements"))
if(t>1)throw H.d(P.lH("More than one element"))
return u.firstChild},
ad:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.b(t,b)
u.replaceChild(c,t[b])},
gU:function(a){var u=this.a.childNodes
return new W.cU(u,u.length)},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$at:function(){return[W.E]},
$ah:function(){return[W.E]},
$an:function(){return[W.E]}}
W.E.prototype={
i3:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i6:function(a,b){var u,t
try{u=a.parentNode
J.mL(u,b,a)}catch(t){H.ad(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.ed(a):u},
fO:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.da.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.E]},
$at:function(){return[W.E]},
$ih:1,
$ah:function(){return[W.E]},
$in:1,
$an:function(){return[W.E]}}
W.aM.prototype={$iaM:1,
gl:function(a){return a.length}}
W.ht.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aM]},
$at:function(){return[W.aM]},
$ih:1,
$ah:function(){return[W.aM]},
$in:1,
$an:function(){return[W.aM]}}
W.hE.prototype={
i:function(a,b){return P.aU(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aU(u.value[1]))}},
ga8:function(a){var u=H.c([],[P.k])
this.H(a,new W.hF(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.y("Not supported"))},
$iS:1,
$aS:function(){return[P.k,null]}}
W.hF.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hH.prototype={
gl:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.hU.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aO]},
$at:function(){return[W.aO]},
$ih:1,
$ah:function(){return[W.aO]},
$in:1,
$an:function(){return[W.aO]}}
W.aP.prototype={$iaP:1}
W.hV.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aP]},
$at:function(){return[W.aP]},
$ih:1,
$ah:function(){return[W.aP]},
$in:1,
$an:function(){return[W.aP]}}
W.aQ.prototype={$iaQ:1,
gl:function(a){return a.length}}
W.hZ.prototype={
i:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
H:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga8:function(a){var u=H.c([],[P.k])
this.H(a,new W.i_(u))
return u},
gl:function(a){return a.length},
$iS:1,
$aS:function(){return[P.k,P.k]}}
W.i_.prototype={
$2:function(a,b){return this.a.push(a)}}
W.av.prototype={$iav:1}
W.dq.prototype={
ai:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bA(a,b,c,d)
u=W.n1("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a1(t).ad(0,new W.a1(u))
return t}}
W.i2.prototype={
ai:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bA(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.ai(u.createElement("table"),b,c,d)
u.toString
u=new W.a1(u)
s=u.gaK(u)
s.toString
u=new W.a1(s)
r=u.gaK(u)
t.toString
r.toString
new W.a1(t).ad(0,new W.a1(r))
return t}}
W.i3.prototype={
ai:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bA(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.ai(u.createElement("table"),b,c,d)
u.toString
u=new W.a1(u)
s=u.gaK(u)
t.toString
s.toString
new W.a1(t).ad(0,new W.a1(s))
return t}}
W.cb.prototype={$icb:1}
W.aR.prototype={$iaR:1}
W.aw.prototype={$iaw:1}
W.i6.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aw]},
$at:function(){return[W.aw]},
$ih:1,
$ah:function(){return[W.aw]},
$in:1,
$an:function(){return[W.aw]}}
W.i7.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aR]},
$at:function(){return[W.aR]},
$ih:1,
$ah:function(){return[W.aR]},
$in:1,
$an:function(){return[W.aR]}}
W.ic.prototype={
gl:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.bx.prototype={$ibx:1}
W.ih.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aS]},
$at:function(){return[W.aS]},
$ih:1,
$ah:function(){return[W.aS]},
$in:1,
$an:function(){return[W.aS]}}
W.ii.prototype={
gl:function(a){return a.length}}
W.bd.prototype={}
W.iF.prototype={
h:function(a){return String(a)}}
W.iX.prototype={
gl:function(a){return a.length}}
W.bg.prototype={
ghq:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.y("deltaY is not supported"))},
ghp:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.y("deltaX is not supported"))},
$ibg:1}
W.cj.prototype={
fP:function(a,b){return a.requestAnimationFrame(H.bG(b,1))},
eI:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.j4.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.I]},
$at:function(){return[W.I]},
$ih:1,
$ah:function(){return[W.I]},
$in:1,
$an:function(){return[W.I]}}
W.dN.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
v:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
if(!u.$iaa)return!1
return a.left===u.gbq(b)&&a.top===u.gbv(b)&&a.width===u.gaJ(b)&&a.height===u.gaD(b)},
gI:function(a){return W.lX(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(a.width),C.d.gI(a.height))},
gaD:function(a){return a.height},
gaJ:function(a){return a.width}}
W.j9.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aF]},
$at:function(){return[W.aF]},
$ih:1,
$ah:function(){return[W.aF]},
$in:1,
$an:function(){return[W.aF]}}
W.e4.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.E]},
$at:function(){return[W.E]},
$ih:1,
$ah:function(){return[W.E]},
$in:1,
$an:function(){return[W.E]}}
W.jn.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aQ]},
$at:function(){return[W.aQ]},
$ih:1,
$ah:function(){return[W.aQ]},
$in:1,
$an:function(){return[W.aQ]}}
W.jr.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.av]},
$at:function(){return[W.av]},
$ih:1,
$ah:function(){return[W.av]},
$in:1,
$an:function(){return[W.av]}}
W.j2.prototype={
H:function(a,b){var u,t,s,r,q
for(u=this.ga8(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.o)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga8:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.k])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.b(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aS:function(){return[P.k,P.k]}}
W.j6.prototype={
i:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga8(this).length}}
W.j7.prototype={}
W.j8.prototype={
$1:function(a){return this.a.$1(a)}}
W.ck.prototype={
em:function(a){var u
if($.cl.ghK($.cl)){for(u=0;u<262;++u)$.cl.m(0,C.T[u],W.oR())
for(u=0;u<12;++u)$.cl.m(0,C.p[u],W.oS())}},
aR:function(a){return $.mH().V(0,W.bQ(a))},
at:function(a,b,c){var u=$.cl.i(0,H.e(W.bQ(a))+"::"+b)
if(u==null)u=$.cl.i(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaL:1}
W.K.prototype={
gU:function(a){return new W.cU(a,this.gl(a))}}
W.db.prototype={
aR:function(a){return C.b.dk(this.a,new W.hl(a))},
at:function(a,b,c){return C.b.dk(this.a,new W.hk(a,b,c))},
$iaL:1}
W.hl.prototype={
$1:function(a){return a.aR(this.a)}}
W.hk.prototype={
$1:function(a){return a.at(this.a,this.b,this.c)}}
W.ec.prototype={
ep:function(a,b,c,d){var u,t,s
this.a.ad(0,c)
u=b.bx(0,new W.jk())
t=b.bx(0,new W.jl())
this.b.ad(0,u)
s=this.c
s.ad(0,C.w)
s.ad(0,t)},
aR:function(a){return this.a.V(0,W.bQ(a))},
at:function(a,b,c){var u=this,t=W.bQ(a),s=u.c
if(s.V(0,H.e(t)+"::"+b))return u.d.ha(c)
else if(s.V(0,"*::"+b))return u.d.ha(c)
else{s=u.b
if(s.V(0,H.e(t)+"::"+b))return!0
else if(s.V(0,"*::"+b))return!0
else if(s.V(0,H.e(t)+"::*"))return!0
else if(s.V(0,"*::*"))return!0}return!1},
$iaL:1}
W.jk.prototype={
$1:function(a){return!C.b.V(C.p,a)}}
W.jl.prototype={
$1:function(a){return C.b.V(C.p,a)}}
W.jt.prototype={
at:function(a,b,c){if(this.eg(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.V(0,b)
return!1}}
W.ju.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.js.prototype={
aR:function(a){var u=J.Q(a)
if(!!u.$ic8)return!1
u=!!u.$ij
if(u&&W.bQ(a)==="foreignObject")return!1
if(u)return!0
return!1},
at:function(a,b,c){if(b==="is"||C.a.a7(b,"on"))return!1
return this.aR(a)},
$iaL:1}
W.cU.prototype={
B:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cE(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gJ:function(a){return this.d}}
W.aL.prototype={}
W.ji.prototype={}
W.ev.prototype={
cF:function(a){new W.jE(this).$2(a,null)},
b_:function(a,b){if(b==null)J.lf(a)
else b.removeChild(a)},
fU:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mP(a)
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
try{t=J.a2(a)}catch(r){H.ad(r)}try{s=W.bQ(a)
this.fT(a,b,p,t,s,o,n)}catch(r){if(H.ad(r) instanceof P.aj)throw r
else{this.b_(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fT:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.b_(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aR(a)){p.b_(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.at(a,"is",g)){p.b_(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga8(f)
t=H.c(u.slice(0),[H.cB(u,0)])
for(s=f.ga8(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.b(t,s)
r=t[s]
if(!p.a.at(a,J.mS(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.Q(a).$icb)p.cF(a.content)}}
W.jE.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fU(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b_(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ad(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dM.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.cq.prototype={}
W.cr.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ei.prototype={}
W.el.prototype={}
W.em.prototype={}
W.cs.prototype={}
W.ct.prototype={}
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
dH:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
cC:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.Q(a)
if(!!u.$ia7)return new Date(a.a)
if(!!u.$int)throw H.d(P.iw("structured clone of RegExp"))
if(!!u.$iar)return a
if(!!u.$ibl)return a
if(!!u.$ibS)return a
if(!!u.$iaG)return a
if(!!u.$ic1||!!u.$ib8||!!u.$ic_)return a
if(!!u.$iS){t=p.dH(a)
s=p.b
r=s.length
if(t>=r)return H.b(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.b(s,t)
s[t]=q
u.H(a,new P.jq(o,p))
return o.a}if(!!u.$in){t=p.dH(a)
o=p.b
if(t>=o.length)return H.b(o,t)
q=o[t]
if(q!=null)return q
return p.hm(a,t)}throw H.d(P.iw("structured clone of other type"))},
hm:function(a,b){var u,t=J.cy(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.b(q,b)
q[b]=r
for(u=0;u<s;++u){q=this.cC(t.i(a,u))
if(u>=r.length)return H.b(r,u)
r[u]=q}return r}}
P.jq.prototype={
$2:function(a,b){this.a.a[a]=this.b.cC(b)},
$S:3}
P.es.prototype={$iaG:1,
gdt:function(a){return this.a}}
P.jP.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jp.prototype={}
P.fn.prototype={
gbi:function(){var u=this.b,t=H.l2(u,"t",0)
return new H.fT(new H.ci(u,new P.fo(),[t]),new P.fp(),[t,W.U])},
m:function(a,b,c){var u=this.gbi()
J.mQ(u.b.$1(J.eJ(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.ae(this.gbi().a)},
i:function(a,b){var u=this.gbi()
return u.b.$1(J.eJ(u.a,b))},
gU:function(a){var u=P.lt(this.gbi(),!1,W.U)
return new J.a3(u,u.length)},
$at:function(){return[W.U]},
$ah:function(){return[W.U]},
$an:function(){return[W.U]}}
P.fo.prototype={
$1:function(a){return!!J.Q(a).$iU}}
P.fp.prototype={
$1:function(a){return H.q(a,"$iU")}}
P.je.prototype={
gcz:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.w(t)
return u+t},
gdn:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.w(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
v:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.Q(b)
if(!!u.$iaa){t=q.a
if(t==u.gbq(b)){s=q.b
if(s==u.gbv(b)){r=q.c
if(typeof t!=="number")return t.D()
if(typeof r!=="number")return H.w(r)
if(t+r===u.gcz(b)){t=q.d
if(typeof s!=="number")return s.D()
if(typeof t!=="number")return H.w(t)
u=s+t===u.gdn(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u=this,t=u.a,s=J.cF(t),r=u.b,q=J.cF(r),p=u.c
if(typeof t!=="number")return t.D()
if(typeof p!=="number")return H.w(p)
p=C.c.gI(t+p)
t=u.d
if(typeof r!=="number")return r.D()
if(typeof t!=="number")return H.w(t)
t=C.c.gI(r+t)
return P.nR(P.jb(P.jb(P.jb(P.jb(0,s),q),p),t))}}
P.aa.prototype={
gbq:function(a){return this.a},
gbv:function(a){return this.b},
gaJ:function(a){return this.c},
gaD:function(a){return this.d}}
P.b6.prototype={$ib6:1}
P.fH.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$at:function(){return[P.b6]},
$ih:1,
$ah:function(){return[P.b6]},
$in:1,
$an:function(){return[P.b6]}}
P.ba.prototype={$iba:1}
P.ho.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$at:function(){return[P.ba]},
$ih:1,
$ah:function(){return[P.ba]},
$in:1,
$an:function(){return[P.ba]}}
P.hw.prototype={
gl:function(a){return a.length}}
P.c8.prototype={$ic8:1}
P.i1.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$at:function(){return[P.k]},
$ih:1,
$ah:function(){return[P.k]},
$in:1,
$an:function(){return[P.k]}}
P.j.prototype={
gc5:function(a){return new P.fn(a,new W.a1(a))},
ai:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.aL])
p.push(W.lW(null))
p.push(W.lY())
p.push(new W.js())
c=new W.ev(new W.db(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).hn(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a1(s)
q=p.gaK(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ij:1}
P.bc.prototype={$ibc:1}
P.ij.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$at:function(){return[P.bc]},
$ih:1,
$ah:function(){return[P.bc]},
$in:1,
$an:function(){return[P.bc]}}
P.dX.prototype={}
P.dY.prototype={}
P.e7.prototype={}
P.e8.prototype={}
P.ej.prototype={}
P.ek.prototype={}
P.eq.prototype={}
P.er.prototype={}
P.by.prototype={$ih:1,
$ah:function(){return[P.x]},
$in:1,
$an:function(){return[P.x]}}
P.eO.prototype={
gl:function(a){return a.length}}
P.eP.prototype={
i:function(a,b){return P.aU(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aU(u.value[1]))}},
ga8:function(a){var u=H.c([],[P.k])
this.H(a,new P.eQ(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.y("Not supported"))},
$iS:1,
$aS:function(){return[P.k,null]}}
P.eQ.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eR.prototype={
gl:function(a){return a.length}}
P.bk.prototype={}
P.hp.prototype={
gl:function(a){return a.length}}
P.dL.prototype={}
P.dh.prototype={
ib:function(a,b,c,d,e,f,g){var u,t=J.Q(g)
if(!!t.$iaG)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.oI(g))
return}if(!!t.$ibV)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.cG("Incorrect number or type of arguments"))}}
P.hX.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return P.aU(a.item(b))},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$at:function(){return[[P.S,,,]]},
$ih:1,
$ah:function(){return[[P.S,,,]]},
$in:1,
$an:function(){return[[P.S,,,]]}}
P.ef.prototype={}
P.eg.prototype={}
T.aA.prototype={
aE:function(a,b){return!0},
h:function(a){return"all"}}
T.cV.prototype={
aE:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)if(u[s].aE(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.b7.prototype={}
T.a5.prototype={
aE:function(a,b){return!this.ec(0,b)},
h:function(a){return"!["+this.cJ(0)+"]"}}
T.hz.prototype={
aE:function(a,b){return this.a<=b&&this.b>=b},
h:function(a){var u=H.bv(this.a),t=H.bv(this.b)
return u+".."+t}}
T.hI.prototype={
ek:function(a){var u,t
if(a.a.length<=0)throw H.d(P.v("May not create a Set with zero characters."))
u=new H.P([P.x,P.az])
for(t=new H.bY(a,a.gl(a));t.B();)u.m(0,t.d,!0)
this.a=u},
aE:function(a,b){return this.a.bm(0,b)},
h:function(a){var u=this.a
return P.ca(u.ga8(u),0,null)}}
R.dn.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.dy(this.a.j(0,b))
r.a=H.c([],[T.b7])
r.c=!1
this.c.push(r)
return r},
hA:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.aE(0,a))return r}return},
h:function(a){return this.b}}
R.dv.prototype={
h:function(a){var u=H.l8(this.b,"\n","\\n"),t=H.l8(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.dw.prototype={
aG:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.o)(c),++t){s=c[t]
this.c.m(0,s,b)}},
h:function(a){return this.b}}
R.id.prototype={
j:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.dn(this,b)
u.c=H.c([],[R.dy])
this.a.m(0,b,u)}return u},
P:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.dw(a)
u=P.k
t.c=new H.P([u,u])
this.b.m(0,a,t)}return t},
e3:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.c([],[R.dv]),k=this.c,j=[P.x],i=H.c([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)l.push(t)
return l}r=C.a.F(a,s)
q=k.hA(r)
if(q==null){if(t==null){i.push(r)
p=P.ca(i,0,m)
throw H.d(P.v("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}l.push(t)
s=t.c+1
i=H.c([],j)
k=this.c
t=m}else{if(!q.c)i.push(r)
k=q.b
if(k.d!=null){p=P.ca(i,0,m)
o=k.d
n=o.c.i(0,p)
t=new R.dv(n==null?o.b:n,p,s)}++s}}}}
R.dy.prototype={
h:function(a){return this.b.b+": "+this.cJ(0)}}
O.aB.prototype={
bg:function(a){this.a=H.c([],[a])
this.c=this.b=null},
cG:function(a,b,c){this.b=b
this.c=a},
aV:function(a,b){return this.cG(a,null,b)},
d4:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cN:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.a3(u,u.length)},
K:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.l2(s,"aB",0)]
if(s.d4(H.c([b],r))){u=s.a
t=u.length
u.push(b)
s.cN(t,H.c([b],r))}},
ad:function(a,b){var u,t
if(this.d4(b)){u=this.a
t=u.length
C.b.ad(u,b)
this.cN(t,b)}},
$ih:1}
O.bZ.prototype={
gl:function(a){return this.a.length},
gq:function(){var u=this.b
return u==null?this.b=D.D():u},
aL:function(){var u=this.b
if(u!=null)u.E(null)},
ga6:function(a){var u=this.a
if(u.length>0)return C.b.gau(u)
else return V.bt()},
bu:function(a){var u=this.a
if(a==null)u.push(V.bt())
else u.push(a)
this.aL()},
aF:function(){var u=this.a
if(u.length>0){u.pop()
this.aL()}}}
E.eU.prototype={}
E.aE.prototype={
sa9:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gq().L(0,s.gdT())
u=s.c
if(u!=null)u.gq().n(0,s.gdT())
t=new D.B("shape",r,s.c)
t.b=!0
s.br(t)}},
ap:function(a,b){var u
for(u=this.y.a,u=new J.a3(u,u.length);u.B();)u.d.ap(0,b)},
ag:function(a){var u,t=this,s=a.dx
s.a.push(s.ga6(s))
s.aL()
a.cs(t.f)
s=a.dy
u=(s&&C.b).gau(s)
if(u!=null&&t.d!=null)u.dY(a,t)
for(s=t.y.a,s=new J.a3(s,s.length);s.B();)s.d.ag(a)
a.cr()
a.dx.aF()},
br:function(a){var u=this.z
if(u!=null)u.E(a)},
a4:function(){return this.br(null)},
dU:function(a){this.e=null
this.br(a)},
hU:function(){return this.dU(null)},
dS:function(a){this.br(a)},
hR:function(){return this.dS(null)},
hQ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdR(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bq()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.a4()},
hT:function(a,b){var u,t
for(u=b.gU(b),t=this.gdR();u.B();)u.gJ(u).gq().L(0,t)
this.a4()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hA.prototype={
ej:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a7(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bZ()
t=[V.aI]
u.a=H.c([],t)
u.gq().n(0,new E.hB(s))
s.cy=u
u=new O.bZ()
u.a=H.c([],t)
u.gq().n(0,new E.hC(s))
s.db=u
u=new O.bZ()
u.a=H.c([],t)
u.gq().n(0,new E.hD(s))
s.dx=u
u=H.c([],[O.dr])
s.dy=u
u.push(null)
s.fr=new H.P([P.k,A.di])},
gi2:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga6(s)
u=t.db
u=t.z=s.w(0,u.ga6(u))
s=u}return s},
cs:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gau(u):a)},
cr:function(){var u=this.dy
if(u.length>1)u.pop()},
dj:function(a){var u=a.b
if(u.length===0)throw H.d(P.v("May not cache a shader with no name."))
if(this.fr.bm(0,u))throw H.d(P.v('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.m(0,u,a)}}
E.hB.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hC.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hD.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dt.prototype={
cQ:function(a){this.e_()},
cP:function(){return this.cQ(null)},
ghF:function(){var u,t=this,s=Date.now(),r=C.c.ac(P.ln(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.a7(s,!1)
return u/r},
d6:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.w()
if(typeof r!=="number")return H.w(r)
u=C.d.cf(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.w()
t=C.d.cf(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lK(C.n,s.gi7())}},
e_:function(){if(!this.ch){this.ch=!0
var u=window
C.D.eI(u)
C.D.fP(u,W.m8(new E.ib(this),P.ac))}},
i5:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.d6()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a7(r,!1)
s.y=P.ln(r-s.r.a).a*0.000001
r=s.cy
C.b.sl(r.a,0)
r.aL()
r=s.db
C.b.sl(r.a,0)
r.aL()
r=s.dx
C.b.sl(r.a,0)
r.aL()
r=s.dy;(r&&C.b).sl(r,0)
s.dy.push(null)
o.ag(p.e)}s=p.z
if(s!=null)s.E(null)}catch(q){u=H.ad(q)
t=H.l3(q)
P.l7("Error: "+H.e(u))
P.l7("Stack: "+H.e(t))
throw H.d(u)}}}
E.ib.prototype={
$1:function(a){var u=this.a
if(u.ch){u.ch=!1
u.i5()}}}
Z.dI.prototype={}
Z.cI.prototype={
a0:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ad(s)
t=P.v('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.d(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.dJ.prototype={}
Z.bN.prototype={
aC:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a0:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a0(a)},
aI:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ag:function(a){var u,t,s,r,q,p=this.b.length
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
Z.br.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.c7(this.c))+"'")+"]"}}
Z.bf.prototype={
gcI:function(a){var u=this.a,t=(u&$.ao().a)!==0?3:0
if((u&$.aX().a)!==0)t+=3
if((u&$.aW().a)!==0)t+=3
if((u&$.bi().a)!==0)t+=2
if((u&$.bj().a)!==0)t+=3
if((u&$.cC().a)!==0)t+=3
if((u&$.cD().a)!==0)t+=4
if((u&$.bK().a)!==0)++t
return(u&$.aV().a)!==0?t+4:t},
hb:function(a){var u,t=$.ao(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aX()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aW()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bi()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cC()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cD()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bK()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aV()
if((s&t.a)!==0)if(u===a)return t
return $.mF()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bf))return!1
return this.a===b.a},
h:function(a){var u=H.c([],[P.k]),t=this.a
if((t&$.ao().a)!==0)u.push("Pos")
if((t&$.aX().a)!==0)u.push("Norm")
if((t&$.aW().a)!==0)u.push("Binm")
if((t&$.bi().a)!==0)u.push("Txt2D")
if((t&$.bj().a)!==0)u.push("TxtCube")
if((t&$.cC().a)!==0)u.push("Clr3")
if((t&$.cD().a)!==0)u.push("Clr4")
if((t&$.bK().a)!==0)u.push("Weight")
if((t&$.aV().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.k(u,"|")}}
D.eX.prototype={}
D.bq.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.c([],[{func:1,ret:-1,args:[D.W]}]):u).push(b)},
L:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.V(s,b)
if(s===!0){s=t.a
u=(s&&C.b).L(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.V(s,b)
if(s===!0){s=t.b
u=(s&&C.b).L(s,b)||u}return u},
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
return!0}if(!t)C.b.H(P.lt(u,!0,{func:1,ret:-1,args:[D.W]}),new D.fj(q))
u=r.b
if(u!=null){r.b=H.c([],[{func:1,ret:-1,args:[D.W]}])
C.b.H(u,new D.fk(q))}return!0},
hv:function(){return this.E(null)},
av:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}}}
D.fj.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fk.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.W.prototype={}
D.b1.prototype={}
D.b2.prototype={}
D.B.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cJ.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cJ))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.d_.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d_))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.fG.prototype={
hZ:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
hV:function(a){this.c=a.b
this.d.L(0,a.a)
return!1}}
X.d3.prototype={}
X.fP.prototype={
aY:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.w()
u=b.b
t=q.ch
if(typeof u!=="number")return u.w()
s=new V.Z(o.a+n*m,o.b+u*t)
t=q.a.gaS()
r=new X.aK(a,V.aN(),q.x,t,s)
r.b=!0
q.z=new P.a7(p,!1)
q.x=s
return r},
cq:function(a,b){this.r=a.a
return!1},
ba:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.e8()
if(typeof u!=="number")return u.al()
this.r=(u&~t)>>>0
return!1},
b9:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.aY(a,b))
return!0},
i_:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaS()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.w()
q=a.b
p=o.cy
if(typeof q!=="number")return q.w()
t=new X.c0(new V.G(s*r,q*p),u,t)
t.b=!0
n.E(t)
return!0},
fh:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.d3(c,r.a.gaS(),b)
s.b=!0
t.E(s)
r.y=new P.a7(u,!1)
r.x=V.aN()}}
X.ag.prototype={
v:function(a,b){var u=this
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
X.he.prototype={
bG:function(a,b,c){var u=this,t=new P.a7(Date.now(),!1),s=u.a.gaS(),r=new X.aK(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cq:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.bG(a,b,!0))
return!0},
ba:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.e8()
if(typeof t!=="number")return t.al()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.bG(a,b,!0))
return!0},
b9:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.bG(a,b,!1))
return!0},
i0:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaS()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.w()
r=a.b
q=p.ch
if(typeof r!=="number")return r.w()
u=new X.c0(new V.G(t*s,r*q),u,b)
u.b=!0
o.E(u)
return!0},
gdv:function(){var u=this.b
return u==null?this.b=D.D():u},
gcB:function(){var u=this.c
return u==null?this.c=D.D():u},
gdQ:function(){var u=this.d
return u==null?this.d=D.D():u}}
X.c0.prototype={}
X.hv.prototype={}
X.dx.prototype={}
X.ig.prototype={
aY:function(a,b){var u=this,t=new P.a7(Date.now(),!1),s=a.length>0?a[0]:V.aN(),r=u.a.gaS(),q=new X.dx(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hY:function(a){var u=this.b
if(u==null)return!1
u.E(this.aY(a,!0))
return!0},
hW:function(a){var u=this.c
if(u==null)return!1
u.E(this.aY(a,!0))
return!0},
hX:function(a){var u=this.d
if(u==null)return!1
u.E(this.aY(a,!1))
return!0}}
X.dD.prototype={
gaS:function(){var u=this.a,t=C.i.gds(u).c
t.toString
u=C.i.gds(u).d
u.toString
return V.lF(0,0,t,u)},
cX:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.d_(u,new X.ag(t,a.altKey,a.shiftKey))},
aP:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ag(t,a.altKey,a.shiftKey)},
bY:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ag(t,a.altKey,a.shiftKey)},
az:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.M()
u=t.top
if(typeof r!=="number")return r.M()
return new V.Z(s-q,r-u)},
aZ:function(a){return new V.G(a.movementX,a.movementY)},
bT:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.Z])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=C.d.ao(r.pageX)
C.d.ao(r.pageY)
p=o.left
C.d.ao(r.pageX)
n.push(new V.Z(q-p,C.d.ao(r.pageY)-o.top))}return n},
ax:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cJ(u,new X.ag(t,a.altKey,a.shiftKey))},
bI:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.M()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.M()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fb:function(a){this.f=!0},
f_:function(a){this.f=!1},
f5:function(a){if(this.f&&this.bI(a))a.preventDefault()},
ff:function(a){var u
if(!this.f)return
u=this.cX(a)
this.b.hZ(u)},
fd:function(a){var u
if(!this.f)return
u=this.cX(a)
this.b.hV(u)},
fj:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aP(a)
if(r.x){u=r.ax(a)
t=r.aZ(a)
if(r.d.cq(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ax(a)
s=r.az(a)
if(r.c.cq(u,s))a.preventDefault()},
fn:function(a){var u,t,s,r=this
r.aP(a)
u=r.ax(a)
if(r.x){t=r.aZ(a)
if(r.d.ba(u,t))a.preventDefault()
return}if(r.r)return
s=r.az(a)
if(r.c.ba(u,s))a.preventDefault()},
f9:function(a){var u,t,s,r=this
if(!r.bI(a)){r.aP(a)
u=r.ax(a)
if(r.x){t=r.aZ(a)
if(r.d.ba(u,t))a.preventDefault()
return}if(r.r)return
s=r.az(a)
if(r.c.ba(u,s))a.preventDefault()}},
fl:function(a){var u,t,s,r=this
r.aP(a)
u=r.ax(a)
if(r.x){t=r.aZ(a)
if(r.d.b9(u,t))a.preventDefault()
return}if(r.r)return
s=r.az(a)
if(r.c.b9(u,s))a.preventDefault()},
f7:function(a){var u,t,s,r=this
if(!r.bI(a)){r.aP(a)
u=r.ax(a)
if(r.x){t=r.aZ(a)
if(r.d.b9(u,t))a.preventDefault()
return}if(r.r)return
s=r.az(a)
if(r.c.b9(u,s))a.preventDefault()}},
fp:function(a){var u,t,s=this
s.aP(a)
u=new V.G((a&&C.C).ghp(a),C.C.ghq(a)).t(0,180)
if(s.x){if(s.d.i_(u))a.preventDefault()
return}if(s.r)return
t=s.az(a)
if(s.c.i0(u,t))a.preventDefault()},
fs:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ax(s.y)
t=s.az(s.y)
s.d.fh(u,t,r)}},
fK:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bY(a)
u=t.bT(a)
if(t.e.hY(u))a.preventDefault()},
fG:function(a){var u
this.bY(a)
u=this.bT(a)
if(this.e.hW(u))a.preventDefault()},
fI:function(a){var u
this.bY(a)
u=this.bT(a)
if(this.e.hX(u))a.preventDefault()}}
D.bo.prototype={
aw:function(a){var u=this.r
if(u!=null)u.E(a)},
eo:function(){return this.aw(null)},
$ia8:1}
D.a8.prototype={}
D.d0.prototype={
aw:function(a){var u=this.x
if(u!=null)u.E(a)},
d3:function(a){var u=this.y
if(u!=null)u.E(a)},
fg:function(){return this.d3(null)},
fu:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(s==null||this.eD(s))return!1}return!0},
eU:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gd2(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q instanceof D.bo)this.e.push(q)
p=q.r
if(p==null){p=new D.bq()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}u=new D.b1()
u.b=!0
this.aw(u)},
fA:function(a,b){var u,t,s
for(u=b.gU(b),t=this.gd2();u.B();){s=u.gJ(u)
C.b.L(this.e,s)
s.gq().L(0,t)}u=new D.b2()
u.b=!0
this.aw(u)},
eD:function(a){var u=C.b.V(this.e,a)
return u},
$ah:function(){return[D.a8]},
$aaB:function(){return[D.a8]}}
D.hu.prototype={$ia8:1}
D.hW.prototype={$ia8:1}
V.p.prototype={
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.p))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.a4.prototype={
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.H(u.a,3,0)+", "+V.H(u.b,3,0)+", "+V.H(u.c,3,0)+", "+V.H(u.d,3,0)+"]"}}
V.fi.prototype={}
V.d6.prototype={
ah:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.N])
return t},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d6))return!1
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
h:function(a){var u,t,s,r,q=this,p=[P.N],o=V.bI(H.c([q.a,q.d,q.r],p),3,0),n=V.bI(H.c([q.b,q.e,q.x],p),3,0),m=V.bI(H.c([q.c,q.f,q.y],p),3,0)
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
V.aI.prototype={
ah:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.N])
return t},
ck:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.C().a)return V.bt()
u=1/b1
t=-n
s=-a0
return V.at((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
w:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.at(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bw:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.z(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cA:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.O(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aI))return!1
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
G:function(a){var u,t,s,r,q,p=this,o=[P.N],n=V.bI(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bI(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bI(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bI(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
V.Z.prototype={
M:function(a,b){return new V.Z(this.a-b.a,this.b-b.b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.O.prototype={
D:function(a,b){return new V.O(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a,b){return new V.O(this.a-b.a,this.b-b.b,this.c-b.c)},
w:function(a,b){return new V.O(this.a*b,this.b*b,this.c*b)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.ah.prototype={
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ah))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.H(u.a,3,0)+", "+V.H(u.b,3,0)+", "+V.H(u.c,3,0)+", "+V.H(u.d,3,0)+"]"}}
V.dg.prototype={
gaf:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dg))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.H(u.a,3,0)+", "+V.H(u.b,3,0)+", "+V.H(u.c,3,0)+", "+V.H(u.d,3,0)+"]"}}
V.G.prototype={
cl:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.w(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.w(t)
return s*r+u*t},
w:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.w()
u=this.b
if(typeof u!=="number")return u.w()
return new V.G(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.C().a){u=$.lR
return u==null?$.lR=new V.G(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.G(u/b,t/b)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
u=b.a
t=this.a
s=$.C()
s.toString
if(typeof u!=="number")return u.M()
if(typeof t!=="number")return H.w(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.M()
if(typeof t!=="number")return H.w(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.z.prototype={
cl:function(a){return Math.sqrt(this.C(this))},
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cm:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.z(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aA:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.z(u*t-s*r,s*q-p*t,p*r-u*q)},
D:function(a,b){return new V.z(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.z(-this.a,-this.b,-this.c)},
w:function(a,b){return new V.z(this.a*b,this.b*b,this.c*b)},
t:function(a,b){if(Math.abs(b-0)<$.C().a)return V.ch()
return new V.z(this.a/b,this.b/b,this.c/b)},
dP:function(){var u=$.C().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.z))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
U.eZ.prototype={
bB:function(a){var u=V.p7(a,this.c,this.b)
return u},
gq:function(){var u=this.y
return u==null?this.y=D.D():u},
S:function(a){var u=this.y
if(u!=null)u.E(a)},
scD:function(a,b){},
scn:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.C().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bB(u)}s=new D.B("maximumLocation",s,t.b)
s.b=!0
t.S(s)}},
scp:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.C().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bB(u)}s=new D.B("minimumLocation",s,t.c)
s.b=!0
t.S(s)}},
sa1:function(a,b){var u,t=this
b=t.bB(b)
u=t.d
if(!(Math.abs(u-b)<$.C().a)){t.d=b
u=new D.B("location",u,b)
u.b=!0
t.S(u)}},
sco:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.C().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.B("maximumVelocity",r,a)
r.b=!0
s.S(r)}},
sW:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.C().a)){u.f=a
t=new D.B("velocity",t,a)
t.b=!0
u.S(t)}},
sc8:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.C().a)){this.x=a
u=new D.B("dampening",u,a)
u.b=!0
this.S(u)}},
ap:function(a,b){var u,t,s,r=this,q=r.f,p=$.C().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa1(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.C().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sW(u)}}}
U.cM.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.D():u},
aU:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cM))return!1
return J.F(this.a,b.a)},
h:function(a){return"Constant: "+this.a.G("          ")}}
U.bT.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.D():u},
S:function(a){var u=this.e
if(u!=null)u.E(a)},
ab:function(){return this.S(null)},
eS:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaM(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.gq()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.b1()
u.b=!0
this.S(u)},
fw:function(a,b){var u,t
for(u=b.gU(b),t=this.gaM();u.B();)u.gJ(u).gq().L(0,t)
u=new D.b2()
u.b=!0
this.S(u)},
aU:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.R()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a3(r,r.length),u=null;r.B();){q=r.d
if(q!=null){t=q.aU(0,b,c)
if(t!=null)u=u==null?t:t.w(0,u)}}s.f=u==null?V.bt():u
r=s.e
if(r!=null)r.av(0)}return s.f},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bT))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.F(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$ah:function(){return[U.a9]},
$aaB:function(){return[U.a9]},
$ia9:1}
U.a9.prototype={}
U.dE.prototype={
gq:function(){var u=this.cy
return u==null?this.cy=D.D():u},
S:function(a){var u=this.cy
if(u!=null)u.E(a)},
ab:function(){return this.S(null)},
b0:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdv().n(0,u.gbJ())
u.a.c.gdQ().n(0,u.gbL())
u.a.c.gcB().n(0,u.gbN())
return!0},
bK:function(a){var u=this
if(!J.F(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bM:function(a){var u,t,s,r,q,p,o,n=this
H.q(a,"$iaK")
if(!n.y)return
if(n.x){u=a.d.M(0,a.y)
u=new V.G(u.a,u.b)
u=u.C(u)
t=n.r
if(typeof t!=="number")return H.w(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.M(0,a.y)
u=new V.G(t.a,t.b).w(0,2).t(0,u.gaf())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.w()
s=n.e
if(typeof s!=="number")return H.w(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=new V.G(s.a,s.b).w(0,2).t(0,u.gaf())
s=n.b
q=r.a
if(typeof q!=="number")return q.T()
p=n.e
if(typeof p!=="number")return H.w(p)
o=n.z
if(typeof o!=="number")return H.w(o)
s.sa1(0,-q*p+o)
n.b.sW(0)
t=t.M(0,a.z)
n.Q=new V.G(t.a,t.b).w(0,2).t(0,u.gaf())}n.ab()},
bO:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.C(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.w()
s=r.e
if(typeof s!=="number")return H.w(s)
u.sW(t*10*s)
r.ab()}},
aU:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.R()
if(q<p){r.ch=p
u=b.y
r.b.ap(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.at(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia9:1}
U.dF.prototype={
gq:function(){var u=this.fx
return u==null?this.fx=D.D():u},
S:function(a){var u=this.fx
if(u!=null)u.E(a)},
ab:function(){return this.S(null)},
b0:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdv().n(0,s.gbJ())
s.a.c.gdQ().n(0,s.gbL())
s.a.c.gcB().n(0,s.gbN())
u=s.a.d
t=u.f
u=t==null?u.f=D.D():t
u.n(0,s.geK())
u=s.a.d
t=u.d
u=t==null?u.d=D.D():t
u.n(0,s.geM())
u=s.a.e
t=u.b
u=t==null?u.b=D.D():t
u.n(0,s.gh4())
u=s.a.e
t=u.d
u=t==null?u.d=D.D():t
u.n(0,s.gh2())
u=s.a.e
t=u.c
u=t==null?u.c=D.D():t
u.n(0,s.gh0())
return!0},
as:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.T()
u=-u}if(this.r){if(typeof t!=="number")return t.T()
t=-t}return new V.G(u,t)},
bK:function(a){var u=this
H.q(a,"$iaK")
if(!J.F(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bM:function(a){var u,t,s,r,q,p,o,n=this
H.q(a,"$iaK")
if(!n.cx)return
if(n.ch){u=a.d.M(0,a.y)
u=new V.G(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.w(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.M(0,a.y)
u=n.as(new V.G(t.a,t.b).w(0,2).t(0,u.gaf()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.w(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.w(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=n.as(new V.G(s.a,s.b).w(0,2).t(0,u.gaf()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.sa1(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.M(0,a.z)
n.dx=n.as(new V.G(t.a,t.b).w(0,2).t(0,u.gaf()))}n.ab()},
bO:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.w(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.w(u)
s.sW(-t*10*u)
r.ab()}},
eL:function(a){var u=this
if(H.q(a,"$id3").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eN:function(a){var u,t,s,r,q,p,o,n=this
H.q(a,"$iaK")
if(!J.F(n.d,a.x.b))return
u=a.c
t=a.d
s=t.M(0,a.y)
r=n.as(new V.G(s.a,s.b).w(0,2).t(0,u.gaf()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.sa1(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.M(0,a.z)
n.dx=n.as(new V.G(t.a,t.b).w(0,2).t(0,u.gaf()))
n.ab()},
h5:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
h3:function(a){var u,t,s,r,q,p,o,n=this
H.q(a,"$idx")
if(!n.cx)return
if(n.ch){u=a.d.M(0,a.y)
u=new V.G(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.w(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.M(0,a.y)
u=n.as(new V.G(t.a,t.b).w(0,2).t(0,u.gaf()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.w(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.w(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=n.as(new V.G(s.a,s.b).w(0,2).t(0,u.gaf()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.sa1(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.M(0,a.z)
n.dx=n.as(new V.G(t.a,t.b).w(0,2).t(0,u.gaf()))}n.ab()},
h1:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.w(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.w(u)
s.sW(-t*10*u)
r.ab()}},
aU:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.R()
if(q<p){r.dy=p
u=b.y
r.c.ap(0,u)
r.b.ap(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.at(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.w(0,V.at(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia9:1}
U.dG.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.D():u},
S:function(a){var u=this.r
if(u!=null)u.E(a)},
b0:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.D():t
t=r.geP()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.D():s).n(0,t)
return!0},
eQ:function(a){var u,t,s,r,q=this
if(!J.F(q.b,q.a.b.c))return
H.q(a,"$ic0")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.w()
r=u+t*s
if(u!==r){q.d=r
u=new D.B("zoom",u,r)
u.b=!0
q.S(u)}},
aU:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.at(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia9:1}
M.cL.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.D():u},
a_:function(a){var u=this.r
if(u!=null)u.E(a)},
aX:function(){return this.a_(null)},
fC:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gZ(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.gq()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.b1()
u.b=!0
this.a_(u)},
fE:function(a,b){var u,t
for(u=b.gU(b),t=this.gZ();u.B();)u.gJ(u).gq().L(0,t)
u=new D.b2()
u.b=!0
this.a_(u)},
ag:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.a3(u,u.length);u.B();){t=u.d
if(t!=null)t.ag(a)}s.f=!1},
$ah:function(){return[M.al]},
$aaB:function(){return[M.al]},
$ial:1}
M.cN.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.D():u},
a_:function(a){var u=this.r
if(u!=null)u.E(a)},
aX:function(){return this.a_(null)},
sb1:function(a){var u,t,s=this
if(a==null)a=new X.fz()
u=s.b
if(u!==a){if(u!=null)u.gq().L(0,s.gZ())
t=s.b
s.b=a
a.gq().n(0,s.gZ())
u=new D.B("camera",t,s.b)
u.b=!0
s.a_(u)}},
sbb:function(a,b){var u,t,s=this
if(b==null)b=X.kG(null)
u=s.c
if(u!==b){if(u!=null)u.gq().L(0,s.gZ())
t=s.c
s.c=b
b.gq().n(0,s.gZ())
u=new D.B("target",t,s.c)
u.b=!0
s.a_(u)}},
sbc:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().L(0,t.gZ())
u=t.d
t.d=a
if(a!=null)a.gq().n(0,t.gZ())
s=new D.B("technique",u,t.d)
s.b=!0
t.a_(s)}},
ag:function(a){var u=this
a.cs(u.d)
u.c.a0(a)
u.b.a0(a)
u.e.ap(0,a)
u.e.ag(a)
u.b.aI(a)
u.c.toString
a.cr()},
$ial:1}
M.cS.prototype={
a_:function(a){var u=this.y
if(u!=null)u.E(a)},
aX:function(){return this.a_(null)},
f1:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gZ(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bq()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.b1()
u.b=!0
this.a_(u)},
f3:function(a,b){var u,t
for(u=b.gU(b),t=this.gZ();u.B();)u.gJ(u).gq().L(0,t)
u=new D.b2()
u.b=!0
this.a_(u)},
sb1:function(a){var u,t,s=this
if(a==null)a=X.lx(null)
u=s.b
if(u!==a){if(u!=null)u.gq().L(0,s.gZ())
t=s.b
s.b=a
a.gq().n(0,s.gZ())
u=new D.B("camera",t,s.b)
u.b=!0
s.a_(u)}},
sbb:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gq().L(0,t.gZ())
u=t.c
t.c=b
b.gq().n(0,t.gZ())
s=new D.B("target",u,t.c)
s.b=!0
t.a_(s)}},
sbc:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().L(0,t.gZ())
u=t.d
t.d=a
if(a!=null)a.gq().n(0,t.gZ())
s=new D.B("technique",u,t.d)
s.b=!0
t.a_(s)}},
gq:function(){var u=this.y
return u==null?this.y=D.D():u},
ag:function(a){var u,t=this
a.cs(t.d)
t.c.a0(a)
t.b.a0(a)
u=t.d
if(u!=null)u.ap(0,a)
for(u=t.e.a,u=new J.a3(u,u.length);u.B();)u.d.ap(0,a)
for(u=t.e.a,u=new J.a3(u,u.length);u.B();)u.d.ag(a)
t.b.toString
a.cy.aF()
a.db.aF()
t.c.toString
a.cr()},
$ial:1}
M.al.prototype={}
A.cH.prototype={}
A.eN.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hw:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
du:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.Y.prototype={
gaq:function(a){var u=this.a?1:0
return u|0|0},
h:function(a){var u=this.a?1:0
return""+(u|0|0)},
v:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.Y))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fW.prototype={
ei:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
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
A.op(c0,u)
A.or(c0,u)
A.oq(c0,u)
A.ot(c0,u)
A.ou(c0,u)
A.os(c0,u)
A.ov(c0,u)
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
b5.dO(0,s.charCodeAt(0)==0?s:s,A.oo(b5.z))
b5.Q=b5.x.i(0,"posAttr")
b5.cx=b5.x.i(0,"normAttr")
b5.ch=b5.x.i(0,"binmAttr")
b5.cy=b5.x.i(0,"txt2DAttr")
b5.db=b5.x.i(0,"txtCubeAttr")
b5.dx=b5.x.i(0,"bendAttr")
if(c0.dx)b5.id=H.q(b5.y.Y(0,"invViewMat"),"$iab")
if(t)b5.dy=H.q(b5.y.Y(0,"objMat"),"$iab")
if(r)b5.fr=H.q(b5.y.Y(0,"viewObjMat"),"$iab")
b5.fy=H.q(b5.y.Y(0,"projViewObjMat"),"$iab")
if(c0.ry)b5.k1=H.q(b5.y.Y(0,"txt2DMat"),"$ice")
if(c0.x1)b5.k2=H.q(b5.y.Y(0,"txtCubeMat"),"$iab")
if(c0.x2)b5.k3=H.q(b5.y.Y(0,"colorMat"),"$iab")
b5.r1=H.c([],[A.ab])
t=c0.y2
if(t>0){b5.k4=b5.y.Y(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.i(0,q)
if(m==null)H.u(P.v(b7+q+b8))
s.push(H.q(m,"$iab"))}}if(c0.a.a)b5.r2=H.q(b5.y.Y(0,"emissionClr"),"$iJ")
if(c0.b.a)b5.x1=H.q(b5.y.Y(0,"ambientClr"),"$iJ")
if(c0.c.a)b5.y2=H.q(b5.y.Y(0,"diffuseClr"),"$iJ")
if(c0.d.a)b5.dz=H.q(b5.y.Y(0,"invDiffuseClr"),"$iJ")
t=c0.e.a
if(!t)s=!1
else s=!0
if(s){b5.dB=H.q(b5.y.Y(0,"shininess"),"$iV")
if(t)b5.dA=H.q(b5.y.Y(0,"specularClr"),"$iJ")}if(c0.cy){b5.dC=H.q(b5.y.Y(0,"envSampler"),"$ibe")
if(c0.r.a)b5.dD=H.q(b5.y.Y(0,"reflectClr"),"$iJ")
t=c0.x.a
if(!t)s=!1
else s=!0
if(s){b5.dE=H.q(b5.y.Y(0,"refraction"),"$iV")
if(t)b5.dF=H.q(b5.y.Y(0,"refractClr"),"$iJ")}}if(c0.y.a)b5.dG=H.q(b5.y.Y(0,"alpha"),"$iV")
t=P.x
s=[t,A.dA]
b5.c9=new H.P(s)
b5.ca=new H.P([t,[P.n,A.cd]])
b5.cb=new H.P(s)
b5.cc=new H.P([t,[P.n,A.cf]])
b5.cd=new H.P(s)
b5.ce=new H.P([t,[P.n,A.cg]])
if(c0.id){for(t=c0.z,s=t.length,r=[A.cd],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.al()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.i(0,g)
if(m==null)H.u(P.v(b7+g+b8))
H.q(m,"$iJ")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.i(0,g)
if(f==null)H.u(P.v(b7+g+b8))
H.q(f,"$iJ")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.i(0,g)
if(e==null)H.u(P.v(b7+g+b8))
H.q(e,"$iJ")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.i(0,g)
if(m==null)H.u(P.v(b7+g+b8))
H.q(m,"$iJ")
o=b5.y
g=i+"s["+n+"].color"
f=o.i(0,g)
if(f==null)H.u(P.v(b7+g+b8))
H.q(f,"$iJ")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.i(0,o)
if(e==null)H.u(P.v(b7+o+b8))
H.q(e,"$ibz")
a=e}else a=b6
h.push(new A.cd(b,c,d,m,f,a))}b5.ca.m(0,j,h)
q=b5.c9
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.u(P.v(b7+o+b8))
q.m(0,j,m)}for(t=c0.Q,s=t.length,r=[A.cf],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.i(0,o)
if(m==null)H.u(P.v(b7+o+b8))
H.q(m,"$iJ")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.i(0,o)
if(f==null)H.u(P.v(b7+o+b8))
H.q(f,"$iJ")
p=b5.y
o=i+"s["+n+"].color"
e=p.i(0,o)
if(e==null)H.u(P.v(b7+o+b8))
H.q(e,"$iJ")
if(typeof j!=="number")return j.al()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.i(0,o)
if(a0==null)H.u(P.v(b7+o+b8))
H.q(a0,"$ice")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.i(0,o)
if(a0==null)H.u(P.v(b7+o+b8))
H.q(a0,"$ibe")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.i(0,o)
if(a0==null)H.u(P.v(b7+o+b8))
H.q(a0,"$ibe")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.i(0,o)
if(a2==null)H.u(P.v(b7+o+b8))
H.q(a2,"$icc")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.i(0,o)
if(a0==null)H.u(P.v(b7+o+b8))
H.q(a0,"$iV")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.i(0,o)
if(a2==null)H.u(P.v(b7+o+b8))
H.q(a2,"$iV")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.i(0,o)
if(a5==null)H.u(P.v(b7+o+b8))
H.q(a5,"$iV")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}h.push(new A.cf(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.cc.m(0,j,h)
q=b5.cb
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.u(P.v(b7+o+b8))
q.m(0,j,m)}for(t=c0.ch,s=t.length,r=[A.cg],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.i(0,o)
if(m==null)H.u(P.v(b7+o+b8))
H.q(m,"$iJ")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.i(0,o)
if(f==null)H.u(P.v(b7+o+b8))
H.q(f,"$iJ")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.i(0,o)
if(e==null)H.u(P.v(b7+o+b8))
H.q(e,"$iJ")
p=b5.y
o=i+"s["+n+"].color"
a0=p.i(0,o)
if(a0==null)H.u(P.v(b7+o+b8))
H.q(a0,"$iJ")
if(typeof j!=="number")return j.al()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.i(0,o)
if(a2==null)H.u(P.v(b7+o+b8))
H.q(a2,"$iJ")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.i(0,o)
if(a5==null)H.u(P.v(b7+o+b8))
H.q(a5,"$iJ")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.i(0,o)
if(a9==null)H.u(P.v(b7+o+b8))
H.q(a9,"$iV")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.i(0,o)
if(b0==null)H.u(P.v(b7+o+b8))
H.q(b0,"$iV")
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
H.q(a2,"$icc")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.i(0,g)
if(a2==null)H.u(P.v(b7+g+b8))
H.q(a2,"$iV")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.i(0,g)
if(a5==null)H.u(P.v(b7+g+b8))
H.q(a5,"$iV")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.i(0,g)
if(a2==null)H.u(P.v(b7+g+b8))
H.q(a2,"$iV")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.i(0,g)
if(a5==null)H.u(P.v(b7+g+b8))
H.q(a5,"$iV")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.i(0,g)
if(a9==null)H.u(P.v(b7+g+b8))
H.q(a9,"$iV")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.i(0,g)
if(a2==null)H.u(P.v(b7+g+b8))
H.q(a2,"$ibz")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.i(0,o)
if(a2==null)H.u(P.v(b7+o+b8))
H.q(a2,"$ibz")
a3=a2}else a3=b6
h.push(new A.cg(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.ce.m(0,j,h)
q=b5.cd
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.u(P.v(b7+o+b8))
q.m(0,j,m)}}},
fV:function(a,b){if(b!=null&&b.d>=6)a.cH(b)}}
A.cP.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.de.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.dl.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.fZ.prototype={
h:function(a){return this.b5}}
A.cd.prototype={}
A.cf.prototype={}
A.cg.prototype={}
A.di.prototype={
cM:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dO:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cY(b,35633)
r.f=r.cY(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.u(P.v("Failed to link shader: "+H.e(s)))}r.fX()
r.fZ()},
a0:function(a){a.a.useProgram(this.r)
this.x.hw()},
cY:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.v("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fX:function(){var u,t,s,r=this,q=H.c([],[A.cH]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.w(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cH(p,t.name,s))}r.x=new A.eN(q)},
fZ:function(){var u,t,s,r=this,q=H.c([],[A.dz]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.w(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.ho(t.type,t.size,t.name,s))}r.y=new A.it(q)},
aN:function(a,b,c){var u=this.a
if(a===1)return new A.dA(u,b,c)
else return A.kP(u,this.r,b,a,c)},
eF:function(a,b,c){var u=this.a
if(a===1)return new A.bz(u,b,c)
else return A.kP(u,this.r,b,a,c)},
eG:function(a,b,c){var u=this.a
if(a===1)return new A.be(u,b,c)
else return A.kP(u,this.r,b,a,c)},
bk:function(a,b){return new P.dS(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
ho:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aN(b,c,d)
case 5121:return u.aN(b,c,d)
case 5122:return u.aN(b,c,d)
case 5123:return u.aN(b,c,d)
case 5124:return u.aN(b,c,d)
case 5125:return u.aN(b,c,d)
case 5126:return new A.V(u.a,c,d)
case 35664:return new A.ip(u.a,c,d)
case 35665:return new A.J(u.a,c,d)
case 35666:return new A.cc(u.a,c,d)
case 35667:return new A.iq(u.a,c,d)
case 35668:return new A.ir(u.a,c,d)
case 35669:return new A.is(u.a,c,d)
case 35674:return new A.iu(u.a,c,d)
case 35675:return new A.ce(u.a,c,d)
case 35676:return new A.ab(u.a,c,d)
case 35678:return u.eF(b,c,d)
case 35680:return u.eG(b,c,d)
case 35670:throw H.d(u.bk("BOOL",c))
case 35671:throw H.d(u.bk("BOOL_VEC2",c))
case 35672:throw H.d(u.bk("BOOL_VEC3",c))
case 35673:throw H.d(u.bk("BOOL_VEC4",c))
default:throw H.d(P.v("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.hT.prototype={}
A.dz.prototype={}
A.it.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
Y:function(a,b){var u=this.i(0,b)
if(u==null)throw H.d(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.O()},
O:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.dA.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.iq.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.ir.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.is.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.io.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.V.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.ip.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.J.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.cc.prototype={
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iu.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.ce.prototype={
am:function(a){var u=new Float32Array(H.bD(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.ab.prototype={
am:function(a){var u=new Float32Array(H.bD(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bz.prototype={
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.be.prototype={
cH:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jG.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cm(s.b,b).cm(s.d.cm(s.c,b),c)
a.sa1(0,new V.O(r.a,r.b,r.c))
a.se1(r.t(0,Math.sqrt(r.C(r))))
s=1-b
u=1-c
a.sdl(new V.ah(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.jQ.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.jS.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.w(p)
s=-s*p
u=r*p
a.sa1(0,new V.O(s,u,q))
u=new V.z(s,u,q)
a.se1(u.t(0,Math.sqrt(u.C(u))))
a.sdl(new V.ah(1-c,2+c,-1,-1))}}
F.jT.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.jU.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.kq.prototype={
$2:function(a,b){return 0}}
F.kr.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.w(s)
u=a.f
t=new V.z(u.a,u.b,u.c)
s=t.t(0,Math.sqrt(t.C(t))).w(0,this.b+s)
a.sa1(0,new V.O(s.a,s.b,s.c))}}
F.ku.prototype={
$1:function(a){return new V.O(Math.cos(a),Math.sin(a),0)}}
F.k1.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.O(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.jR.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lc(n.$1(o),m)
m=J.lc(n.$1(o+3.141592653589793/p.c),m).M(0,l)
m=new V.z(m.a,m.b,m.c)
u=m.t(0,Math.sqrt(m.C(m)))
n=$.lT
if(n==null){n=new V.z(1,0,0)
$.lT=n
t=n}else t=n
n=u.aA(!J.F(u,t)?V.lV():t)
s=n.t(0,Math.sqrt(n.C(n)))
n=s.aA(u)
t=n.t(0,Math.sqrt(n.C(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.w(0,n*m)
m=s.w(0,q*m)
a.sa1(0,l.D(0,new V.O(n.a-m.a,n.b-m.b,n.c-m.c)))}}
F.b0.prototype={
b3:function(){var u=this
if(!u.gb4()){C.b.L(u.a.a.d.b,u)
u.a.a.a4()}u.bU()
u.bV()
u.fN()},
bZ:function(a){this.a=a
a.d.b.push(this)},
c_:function(a){this.b=a
a.d.c.push(this)},
fW:function(a){this.c=a
a.d.d.push(this)},
bU:function(){var u=this.a
if(u!=null){C.b.L(u.d.b,this)
this.a=null}},
bV:function(){var u=this.b
if(u!=null){C.b.L(u.d.c,this)
this.b=null}},
fN:function(){var u=this.c
if(u!=null){C.b.L(u.d.d,this)
this.c=null}},
gb4:function(){return this.a==null||this.b==null||this.c==null},
ez:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.ch()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.dP())return
return s.t(0,Math.sqrt(s.C(s)))},
eB:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.M(0,q)
r=new V.z(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.C(r)))
r=t.M(0,q)
r=new V.z(r.a,r.b,r.c)
r=s.aA(r.t(0,Math.sqrt(r.C(r))))
return r.t(0,Math.sqrt(r.C(r)))},
c4:function(){var u,t=this
if(t.d!=null)return!0
u=t.ez()
if(u==null){u=t.eB()
if(u==null)return!1}t.d=u
t.a.a.a4()
return!0},
ey:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.ch()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.dP())return
return s.t(0,Math.sqrt(s.C(s)))},
eA:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.C().a){l=d.M(0,g)
l=new V.z(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.M(0,g).w(0,p).D(0,g).M(0,j)
l=new V.z(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.C(l)))
l=o.aA(q)
l=l.t(0,Math.sqrt(l.C(l))).aA(o)
q=l.t(0,Math.sqrt(l.C(l)))}return q},
c2:function(){var u,t=this
if(t.e!=null)return!0
u=t.ey()
if(u==null){u=t.eA()
if(u==null)return!1}t.e=u
t.a.a.a4()
return!0},
ghi:function(a){var u=this
if(J.F(u.a,u.b))return!0
if(J.F(u.b,u.c))return!0
if(J.F(u.c,u.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.O()},
G:function(a){var u,t,s=this
if(s.gb4())return a+"disposed"
u=a+C.a.ak(J.a2(s.a.e),0)+", "+C.a.ak(J.a2(s.b.e),0)+", "+C.a.ak(J.a2(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.h(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.h(0)+"}"):u+"-}"},
O:function(){return this.G("")}}
F.fl.prototype={}
F.hS.prototype={
b7:function(a,b,c){var u,t=b.a
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
F.bX.prototype={
b3:function(){var u=this
if(!u.gb4()){C.b.L(u.a.a.c.b,u)
u.a.a.a4()}u.bU()
u.bV()},
bZ:function(a){this.a=a
a.c.b.push(this)},
c_:function(a){this.b=a
a.c.c.push(this)},
bU:function(){var u=this.a
if(u!=null){C.b.L(u.c.b,this)
this.a=null}},
bV:function(){var u=this.b
if(u!=null){C.b.L(u.c.c,this)
this.b=null}},
gb4:function(){return this.a==null||this.b==null},
v:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.O()},
G:function(a){if(this.gb4())return a+"disposed"
return a+C.a.ak(J.a2(this.a.e),0)+", "+C.a.ak(J.a2(this.b.e),0)},
O:function(){return this.G("")}}
F.fI.prototype={}
F.im.prototype={
b7:function(a,b,c){var u,t=b.a
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
F.c4.prototype={
v:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.O()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.ak(J.a2(u.e),0)},
O:function(){return this.G("")}}
F.hJ.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.D():u},
b8:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.A()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){r=g[s]
h.a.n(0,r.hl())}h.a.A()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.c4()
if(n.a==null)H.u(P.v("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.E(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.A()
p=p.e
if(typeof p!=="number")return p.D()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.n8(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.A()
p=p.e
if(typeof p!=="number")return p.D()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
i=p[o]
o=h.d.a
o.a.n(0,l)
o.a.n(0,k)
o.a.n(0,i)
F.bR(l,k,i)}g=h.e
if(g!=null)g.av(0)},
an:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.an()||!1
if(!t.a.an())u=!1
s=t.e
if(s!=null)s.av(0)
return u},
hN:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.cB(o,0)])
for(o=[F.aT];u.length!==0;){t=C.b.ghB(u)
C.b.dX(u,0)
if(t!=null){s=H.c([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.b(u,r)
q=u[r]
if(q!=null&&a.b7(0,t,q)){s.push(q)
C.b.dX(u,r)}}if(s.length>1)b.b8(s)}}p.a.A()
p.c.cv()
p.d.cv()
p.b.i4()
p.c.cw(new F.im())
p.d.cw(new F.hS())
o=p.e
if(o!=null)o.av(0)},
c1:function(){this.hN(new F.iR(),new F.hm())},
dq:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.ao()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aX().a)!==0)++s
if((t&$.aW().a)!==0)++s
if((t&$.bi().a)!==0)++s
if((t&$.bj().a)!==0)++s
if((t&$.cC().a)!==0)++s
if((t&$.cD().a)!==0)++s
if((t&$.bK().a)!==0)++s
if((t&$.aV().a)!==0)++s
r=a4.gcI(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.c(u,[P.N])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.cI])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.hb(m)
k=l.gcI(l)
if(m>=t)return H.b(o,m)
o[m]=new Z.cI(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.b(i,j)
h=i[j].hM(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.b(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bD(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bN(new Z.dI(a1,d),o,a4)
c.b=H.c([],[Z.br])
if(a0.b.b.length!==0){b=H.c([],[P.x])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.A()
b.push(t.e)}a=Z.kT(u,34963,b)
c.b.push(new Z.br(0,b.length,a))}if(a0.c.b.length!==0){b=H.c([],[P.x])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.A()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.A()
b.push(t.e)}a=Z.kT(u,34963,b)
c.b.push(new Z.br(1,b.length,a))}if(a0.d.b.length!==0){b=H.c([],[P.x])
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
b.push(t.e)}a=Z.kT(u,34963,b)
c.b.push(new Z.br(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.c([],[P.k])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.G(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.G(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.G(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.G(t))}return C.b.k(s,"\n")},
a4:function(){var u=this.e
if(u!=null)u.E(null)}}
F.hL.prototype={
dg:function(a){var u,t,s,r,q,p=H.c([],[F.b0]),o=a.length
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
p.push(F.bR(u,r,q))}}return p},
h8:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.c([],[F.b0])
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
cw:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.i(0,q)
for(o=q-1;o>=0;--o){n=r.d.i(0,o)
if(a.b7(0,p,n)){p.b3()
break}}}}},
cv:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.ghi(s)
if(t)s.b3()}},
an:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].c4())s=!1
return s},
c3:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].c2())s=!1
return s},
h:function(a){return this.O()},
G:function(a){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].G(a))
return C.b.k(r,"\n")},
O:function(){return this.G("")}}
F.hM.prototype={
gl:function(a){return this.b.length},
cw:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.i(0,q)
for(o=q-1;o>=0;--o){n=r.c.i(0,o)
if(a.b7(0,p,n)){p.b3()
break}}}}},
cv:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=J.F(s.a,s.b)
if(t)s.b3()}},
h:function(a){return this.O()},
G:function(a){var u,t,s=H.c([],[P.k]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].G(a+(""+u+". ")))}return C.b.k(s,"\n")},
O:function(){return this.G("")}}
F.hN.prototype={
gl:function(a){return this.b.length},
i4:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.L(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.E(null)}s=t.a
if(s!=null){C.b.L(s.b.b,t)
t.a=null}}}},
h:function(a){return this.O()},
G:function(a){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].G(a))
return C.b.k(r,"\n")},
O:function(){return this.G("")}}
F.aT.prototype={
c7:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.dH(u.cx,r,o,t,s,q,p,a,n)},
hl:function(){return this.c7(null)},
sa1:function(a,b){var u
if(!J.F(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a4()}},
se1:function(a){var u
if(!J.F(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a4()}},
sdl:function(a){var u
if(!J.F(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a4()}},
hM:function(a){var u,t,s=this
if(a.v(0,$.ao())){u=s.f
t=[P.N]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.aX())){u=s.r
t=[P.N]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.aW())){u=s.x
t=[P.N]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.bi())){u=s.y
t=[P.N]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.v(0,$.bj())){u=s.z
t=[P.N]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.cC())){u=s.Q
t=[P.N]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.cD())){u=s.Q
t=[P.N]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.v(0,$.bK()))return H.c([s.ch],[P.N])
else if(a.v(0,$.aV())){u=s.cx
t=[P.N]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.N])},
c4:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.ch()
t.d.H(0,new F.iW(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a4()
s=t.a.e
if(s!=null)s.av(0)}return!0},
c2:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.ch()
t.d.H(0,new F.iV(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a4()
s=t.a.e
if(s!=null)s.av(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.O()},
G:function(a){var u,t,s=this,r="-",q=H.c([],[P.k])
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
q.push(V.H(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.b.k(q,", ")
return a+"{"+t+"}"},
O:function(){return this.G("")}}
F.iW.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.D(0,t)}}}
F.iV.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.D(0,t)}}}
F.iM.prototype={
A:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.b(u,r)
u[r].e=s;++s}this.b=!1}},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.v("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a4()
return!0},
dh:function(a,b,c,d,e,f,g){var u=F.dH(a,null,b,c,d,e,f,g,0)
this.n(0,u)
return u},
bl:function(a,b,c,d,e,f){return this.dh(a,b,c,null,d,e,f)},
h9:function(a,b,c,d,e,f){return this.dh(a,b,c,d,e,f,null)},
gl:function(a){return this.c.length},
an:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].c4()
return!0},
c3:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].c2()
return!0},
hh:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.F(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
h:function(a){return this.O()},
G:function(a){var u,t,s,r
this.A()
u=H.c([],[P.k])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r)u.push(t[r].G(a))
return C.b.k(u,"\n")},
O:function(){return this.G("")}}
F.iN.prototype={
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
C.b.H(u.c,new F.iO(u,b))
C.b.H(u.d,new F.iP(u,b))},
h:function(a){return this.O()},
O:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].G(""))
return C.b.k(r,"\n")}}
F.iO.prototype={
$1:function(a){if(!J.F(a.a,this.a))this.b.$1(a)}}
F.iP.prototype={
$1:function(a){var u=this.a
if(!J.F(a.a,u)&&!J.F(a.b,u))this.b.$1(a)}}
F.iQ.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.b(t,u)
return t[u]}else{if(b<0)return H.b(t,b)
return t[b]}},
h:function(a){return this.O()},
O:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].G(""))
return C.b.k(r,"\n")}}
F.iS.prototype={}
F.iR.prototype={
b7:function(a,b,c){return J.F(b.f,c.f)}}
F.iT.prototype={}
F.hm.prototype={
b8:function(a){var u,t,s,r,q,p,o,n,m=V.ch()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.z(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.t(0,Math.sqrt(m.C(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.t(0,Math.sqrt(p*p+o*o+n*n))}if(!J.F(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.E(null)}}}return}}
F.iU.prototype={
gl:function(a){return this.b.length},
h:function(a){return this.O()},
O:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].G(""))
return C.b.k(r,"\n")}}
O.d4.prototype={
gq:function(){var u=this.fr
return u==null?this.fr=D.D():u},
a3:function(a){var u=this.fr
if(u!=null)u.E(a)},
bS:function(){return this.a3(null)},
d5:function(a){this.a=null
this.a3(a)},
fR:function(){return this.d5(null)},
eW:function(a,b){var u=new D.b1()
u.b=!0
this.a3(u)},
eY:function(a,b){var u=new D.b2()
u.b=!0
this.a3(u)},
cV:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.x,h=new H.P([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=h.i(0,0)
h.m(0,0,r==null?1:r)}q=H.c([],[A.cP])
h.H(0,new O.h2(j,q))
C.b.bz(q,new O.h3())
p=new H.P([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){o=u[s]
r=o.gb2()
n=p.i(0,o.gb2())
p.m(0,r,n==null?1:n)}m=H.c([],[A.de])
p.H(0,new O.h4(j,m))
C.b.bz(m,new O.h5())
l=new H.P([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.o)(i),++s){o=i[s]
t=o.gb2()
r=l.i(0,o.gb2())
l.m(0,t,r==null?1:r)}k=H.c([],[A.dl])
l.H(0,new O.h6(j,k))
C.b.bz(k,new O.h7())
i=C.c.ac(j.e.a.length+3,4)
j.dy.e
return A.nf(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
ex:function(a,b){if(b!=null)if(!C.b.V(a,b)){b.a=a.length
a.push(b)}},
ap:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a3(u,u.length);u.B();){t=u.d
t.toString
s=$.iL
if(s==null)s=$.iL=new V.z(0,0,1)
t.a=s
r=$.iK
t.d=r==null?$.iK=new V.z(0,1,0):r
r=$.iJ
t.e=r==null?$.iJ=new V.z(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bw(s)
r=s.a
p=s.b
o=s.c
t.a=s.t(0,Math.sqrt(r*r+p*p+o*o))
o=q.bw(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.t(0,Math.sqrt(p*p+r*r+s*s))
s=q.bw(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.t(0,Math.sqrt(r*r+p*p+o*o))}}}},
dY:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a
if(b0==null){b0=a9.cV()
u=b1.fr.i(0,b0.b5)
if(u==null){u=A.ne(b0,b1.a)
b1.dj(u)}b0=a9.a=u
b2.e=null}t=b0.z
s=t.dw
b0=b2.e
if(!(b0 instanceof Z.bN))b0=b2.e=null
if(b0==null||!b0.d.v(0,s)){b0=t.k3
if(b0)b2.d.an()
r=t.k4
if(r){q=b2.d
p=q.e
if(p!=null)++p.d
q.d.c3()
q.a.c3()
q=q.e
if(q!=null)q.av(0)}q=t.r2
if(q){p=b2.d
o=p.e
if(o!=null)++o.d
p.a.hh()
p=p.e
if(p!=null)p.av(0)}n=b2.d.dq(new Z.dJ(b1.a),s)
n.aC($.ao()).e=a9.a.Q.c
if(b0)n.aC($.aX()).e=a9.a.cx.c
if(r)n.aC($.aW()).e=a9.a.ch.c
if(t.r1)n.aC($.bi()).e=a9.a.cy.c
if(q)n.aC($.bj()).e=a9.a.db.c
if(t.rx)n.aC($.aV()).e=a9.a.dx.c
b2.e=n}m=H.c([],[T.ds])
a9.a.a0(b1)
if(t.dy){b0=a9.a
r=b1.dx
r=r.ga6(r)
b0=b0.dy
b0.toString
b0.am(r.ah(0,!0))}if(t.fr){b0=a9.a
r=b1.cx
if(r==null){r=b1.db
r=r.ga6(r)
q=b1.dx
q=b1.cx=r.w(0,q.ga6(q))
r=q}b0=b0.fr
b0.toString
b0.am(r.ah(0,!0))}b0=a9.a
r=b1.ch
if(r==null){r=b1.gi2()
q=b1.dx
q=b1.ch=r.w(0,q.ga6(q))
r=q}b0=b0.fy
b0.toString
b0.am(r.ah(0,!0))
if(t.ry){b0=a9.a
r=a9.b
b0=b0.k1
b0.toString
b0.am(C.j.ah(r,!0))}if(t.x1){b0=a9.a
r=a9.c
b0=b0.k2
b0.toString
b0.am(C.j.ah(r,!0))}if(t.x2){b0=a9.a
r=a9.d
b0=b0.k3
b0.toString
b0.am(C.j.ah(r,!0))}if(t.y2>0){l=a9.e.a.length
b0=a9.a.k4
b0.a.uniform1i(b0.d,l)
for(k=0;k<l;++k){b0=a9.a
r=a9.e.a
if(k>=r.length)return H.b(r,k)
r=r[k]
b0=b0.r1
if(k>=b0.length)return H.b(b0,k)
b0=b0[k]
j=new Float32Array(H.bD(r.ah(0,!0)))
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
b0=b0.dz
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}b0=t.e.a
if(!b0)r=!1
else r=!0
if(r){r=a9.a
q=a9.z.ch
r=r.dB
r.a.uniform1f(r.d,q)}if(b0){b0=a9.a
r=a9.z.f
b0=b0.dA
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}b0=t.z
if(b0.length>0){r=b1.db
i=r.ga6(r)
r=P.x
h=new H.P([r,r])
for(r=a9.dx.e,q=r.length,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
e=h.i(0,0)
if(e==null)e=0
h.m(0,0,e+1)
d=J.cE(a9.a.ca.i(0,0),e)
p=i.bw(f.a)
o=p.a
c=p.b
b=p.c
b=p.t(0,Math.sqrt(o*o+c*c+b*b))
c=d.e
o=b.a
p=b.b
b=b.c
c.a.uniform3f(c.d,o,p,b)
b=f.c
p=d.f
p.a.uniform3f(p.d,b.a,b.b,b.c)}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.o)(b0),++g){q=b0[g].a
l=h.i(0,q)
if(l==null)l=0
q=a9.a.c9.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.Q
if(b0.length>0){r=b1.db
i=r.ga6(r)
r=P.x
a=new H.P([r,r])
for(r=a9.dx.f,q=r.length,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
a0=f.gb2()
e=a.i(0,a0)
if(e==null)e=0
a.m(0,a0,e+1)
d=J.cE(a9.a.cc.i(0,a0),e)
a1=i.w(0,f.ga6(f))
p=f.ga6(f)
o=$.c5
p=p.cA(o==null?$.c5=new V.O(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.c5
p=a1.cA(p==null?$.c5=new V.O(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gp(f)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gaH()
p=a1.ck(0)
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
j=new Float32Array(H.bD(new V.d6(o,c,b,a2,a3,a4,a5,a6,p).ah(0,!0)))
a7.a.uniformMatrix3fv(a7.d,!1,j)
f.gaH()
p=f.gaH()
if(!C.b.V(m,p)){p.a=m.length
m.push(p)}p=f.gaH()
o=p.gb6(p)
if(o){o=d.f
o.toString
c=p.d
if(c<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}f.gaW()
p=f.gea()
o=d.x
o.toString
c=p.ghs(p)
b=p.ght(p)
a2=p.ghu()
p=p.ghr()
o.a.uniform4f(o.d,c,b,a2,p)
p=f.gaW()
if(!C.b.V(m,p)){p.a=m.length
m.push(p)}p=f.gaW()
o=p.gb6(p)
if(o){o=d.r
o.toString
c=p.d
if(c<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(f.ghx()){p=f.ghc()
o=d.y
o.a.uniform1f(o.d,p)
p=f.ghd()
o=d.z
o.a.uniform1f(o.d,p)
p=f.ghe()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.o)(b0),++g){q=b0[g].a
l=a.i(0,q)
if(l==null)l=0
q=a9.a.cb.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.ch
if(b0.length>0){r=b1.db
i=r.ga6(r)
r=P.x
a8=new H.P([r,r])
for(r=a9.dx.r,q=r.length,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
a0=f.gb2()
e=a8.i(0,a0)
if(e==null)e=0
a8.m(0,a0,e+1)
d=J.cE(a9.a.ce.i(0,a0),e)
p=f.gi1(f)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gim(f).iF()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=i.cA(f.gi1(f))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gp(f)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gaH()
p=f.gcB()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gcz(f)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.giG()
o=d.x
o.a.uniform1f(o.d,p)
p=f.giH()
o=d.y
o.a.uniform1f(o.d,p)
f.gaH()
p=f.gaH()
if(!C.b.V(m,p)){p.a=m.length
m.push(p)}p=f.gaH()
o=p.gb6(p)
if(o){o=d.dx
o.toString
c=p.gb6(p)
if(!c)o.a.uniform1i(o.d,0)
else{p=p.ghG(p)
o.a.uniform1i(o.d,p)}}f.gaW()
p=f.gea()
o=d.z
o.toString
c=p.ghs(p)
b=p.ght(p)
a2=p.ghu()
p=p.ghr()
o.a.uniform4f(o.d,c,b,a2,p)
p=f.gaW()
if(!C.b.V(m,p)){p.a=m.length
m.push(p)}p=f.gaW()
o=p.gb6(p)
if(o){o=d.dy
o.toString
c=p.gb6(p)
if(!c)o.a.uniform1i(o.d,0)
else{p=p.ghG(p)
o.a.uniform1i(o.d,p)}}if(f.gio()){p=f.gil()
o=d.Q
o.a.uniform1f(o.d,p)
p=f.gik()
o=d.ch
o.a.uniform1f(o.d,p)}if(f.ghx()){p=f.ghc()
o=d.cx
o.a.uniform1f(o.d,p)
p=f.ghd()
o=d.cy
o.a.uniform1f(o.d,p)
p=f.ghe()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.o)(b0),++g){q=b0[g].a
l=a8.i(0,q)
if(l==null)l=0
q=a9.a.cd.i(0,q)
q.a.uniform1i(q.d,l)}}}if(t.dx){b0=a9.a
r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.ga6(r).ck(0)}b0=b0.id
b0.toString
b0.am(r.ah(0,!0))}if(t.cy){a9.ex(m,a9.ch)
b0=a9.a
r=a9.ch
b0.fV(b0.dC,r)
if(t.r.a){b0=a9.a
r=a9.cx.f
b0=b0.dD
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}b0=t.x.a
if(!b0)r=!1
else r=!0
if(r){r=a9.a
q=a9.cy.ch
r=r.dE
r.a.uniform1f(r.d,q)}if(b0){b0=a9.a
r=a9.cy.f
b0=b0.dF
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}}b0=t.y.a
r=!b0
if(r)q=!1
else q=!0
if(q){if(b0){b0=a9.a
q=a9.db.f
b0=b0.dG
b0.a.uniform1f(b0.d,q)}b0=b1.a
b0.enable(3042)
b0.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].a0(b1)
b0=b2.e
b0.a0(b1)
b0.ag(b1)
b0.aI(b1)
if(r)b0=!1
else b0=!0
if(b0)b1.a.disable(3042)
for(b0=b1.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b0.activeTexture(33984+r.a)
b0.bindTexture(34067,null)}}r=a9.a
r.toString
b0.useProgram(null)
r.x.du()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.cV().b5}}
O.h2.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.cP(a,C.c.ac(b+3,4)*4))}}
O.h3.prototype={
$2:function(a,b){return J.kx(a.a,b.a)}}
O.h4.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.de(a,C.c.ac(b+3,4)*4))}}
O.h5.prototype={
$2:function(a,b){return J.kx(a.a,b.a)}}
O.h6.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.dl(a,C.c.ac(b+3,4)*4))}}
O.h7.prototype={
$2:function(a,b){return J.kx(a.a,b.a)}}
O.fX.prototype={
ay:function(){var u,t=this
t.cK()
u=t.f
if(!(Math.abs(u-1)<$.C().a)){t.f=1
u=new D.B(t.b,u,1)
u.b=!0
t.a.a3(u)}}}
O.d5.prototype={
ay:function(){},
bj:function(a){var u,t,s=this
if(!s.c.v(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.ay()
u=s.a
u.a=null
u.a3(null)}}}
O.fY.prototype={}
O.as.prototype={
d7:function(a){var u,t,s=this
if(!s.f.v(0,a)){u=s.f
s.f=a
t=new D.B(s.b+".color",u,a)
t.b=!0
s.a.a3(t)}},
ay:function(){this.cK()
this.d7(new V.p(1,1,1))},
sp:function(a,b){this.bj(new A.Y(!0,!1,!1))
this.d7(b)}}
O.h_.prototype={}
O.h0.prototype={
bW:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.C().a)){u.ch=a
t=new D.B(u.b+".refraction",t,a)
t.b=!0
u.a.a3(t)}},
ay:function(){this.cL()
this.bW(1)},
saB:function(a){var u=this
if(a<=0){u.bj(new A.Y(!1,!1,!1))
u.bW(0)}else{u.bj(new A.Y(!0,!1,!1))
u.bW(a)}}}
O.h1.prototype={
d8:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.C().a)){u.ch=a
t=new D.B(u.b+".shininess",t,a)
t.b=!0
u.a.a3(t)}},
ay:function(){this.cL()
this.d8(100)}}
O.dj.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.D():u},
a3:function(a){var u=this.e
if(u!=null)u.E(a)},
bS:function(){return this.a3(null)},
dY:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.i(0,n)
if(u==null){t=a.a
u=new A.hT(t,n)
u.cM(t,n)
u.dO(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.i(0,"posAttr")
u.Q=H.q(u.y.i(0,"fov"),"$iV")
u.ch=H.q(u.y.i(0,"ratio"),"$iV")
u.cx=H.q(u.y.i(0,"boxClr"),"$iJ")
u.cy=H.q(u.y.i(0,"boxTxt"),"$ibe")
u.db=H.q(u.y.i(0,"viewMat"),"$iab")
a.dj(u)}o.a=u}if(b.e==null){t=b.d.dq(new Z.dJ(a.a),$.ao())
t.aC($.ao()).e=o.a.z.c
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
r.cy.cH(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.ga6(s).ck(0)
r=r.db
r.toString
r.am(s.ah(0,!0))
t=b.e
if(t instanceof Z.bN){t.a0(a)
t.ag(a)
t.aI(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.du()
t=o.c
if(t!=null)t.aI(a)}}
O.dr.prototype={}
T.ds.prototype={}
T.i8.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.D():u},
a0:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
aI:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.i9.prototype={
aO:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.X(u,"load",new T.ia(this,u,!1,b,!1,d,a),!1)},
fS:function(a,b,c){var u,t,s,r
b=V.l6(b)
u=V.l6(a.width)
t=V.l6(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kA()
s.width=u
s.height=t
r=C.i.e7(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oJ(r.getImageData(0,0,s.width,s.height))}}}
T.ia.prototype={
$1:function(a){var u=this,t=u.a,s=t.fS(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.Y.ib(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.hv()}++t.e}}
X.kz.prototype={}
X.fs.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.D():u},
ar:function(a){var u=this.x
if(u!=null)u.E(a)},
sdr:function(a,b){var u
if(this.b){this.b=!1
u=new D.B("clearColor",!0,!1)
u.b=!0
this.ar(u)}},
a0:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.w(u)
q=C.d.ao(r*u)
r=s.b
if(typeof t!=="number")return H.w(t)
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
gq:function(){var u=this.b
return u==null?this.b=D.D():u},
a0:function(a){var u
a.cy.bu(V.bt())
u=V.bt()
a.db.bu(u)},
aI:function(a){a.cy.aF()
a.db.aF()}}
X.dd.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.D():u},
ar:function(a){var u=this.f
if(u!=null)u.E(a)},
eu:function(){return this.ar(null)},
a0:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.at(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bu(k)
r=$.ly
if(r==null){r=V.lA()
q=V.kS()
p=$.lS
r=V.lu(r,q,p==null?$.lS=new V.z(0,0,-1):p)
$.ly=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aU(0,a,s)
if(t!=null)u=t.w(0,u)}a.db.bu(u)},
aI:function(a){a.cy.aF()
a.db.aF()}}
X.i4.prototype={}
V.cK.prototype={
bf:function(a){this.b=new P.fx(C.P)
this.c=null
this.d=H.c([],[[P.n,W.ak]])},
N:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.c([],[W.ak]))
u=a.split("\n")
for(l=u.length,t=[W.ak],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.c([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.eE(q,0,q.length)
n=o==null?q:o
C.N.e9(p,H.l8(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gau(m.d).push(p)}},
dV:function(a,b){var u,t,s,r,q=this
q.d=H.c([],[[P.n,W.ak]])
u=C.b.k(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bn():t).e3(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r)q.bt(t[r])}}
V.kp.prototype={
$1:function(a){var u=C.d.e2(this.a.ghF(),2)
if(u!=="0.00")P.l7(u+" fps")}}
V.f8.prototype={
bt:function(a){var u=this
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
bn:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=R.ie()
a1.c=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=T.r(new H.l("_"))
u.a.push(t)
t=T.M("a","z")
u.a.push(t)
t=T.M("A","Z")
u.a.push(t)
t=a1.j(0,q).k(0,q)
u=T.r(new H.l("_"))
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
t=T.r(new H.l("."))
u.a.push(t)
t=a1.j(0,o).k(0,n)
u=T.M("0","9")
t.a.push(u)
u=a1.j(0,n).k(0,n)
t=T.M("0","9")
u.a.push(t)
t=a1.j(0,r).k(0,m)
u=T.r(new H.l(l))
t.a.push(u)
u=a1.j(0,m).k(0,m)
t=T.r(new H.l(l))
u.a.push(t)
t=a1.j(0,r).k(0,k)
u=T.r(new H.l('"'))
t.a.push(u)
u=a1.j(0,k).k(0,j)
t=T.r(new H.l('"'))
u.a.push(t)
t=a1.j(0,k).k(0,i)
u=T.r(new H.l("\\"))
t.a.push(u)
u=a1.j(0,i).k(0,k)
t=T.r(new H.l('"'))
u.a.push(t)
a1.j(0,k).k(0,k).a.push(new T.aA())
t=a1.j(0,r).k(0,h)
u=T.r(new H.l("'"))
t.a.push(u)
u=a1.j(0,h).k(0,g)
t=T.r(new H.l("'"))
u.a.push(t)
t=a1.j(0,h).k(0,f)
u=T.r(new H.l("\\"))
t.a.push(u)
u=a1.j(0,f).k(0,h)
t=T.r(new H.l("'"))
u.a.push(t)
a1.j(0,h).k(0,h).a.push(new T.aA())
t=a1.j(0,r).k(0,e)
u=T.r(new H.l("/"))
t.a.push(u)
u=a1.j(0,e).k(0,d)
t=T.r(new H.l("/"))
u.a.push(t)
t=a1.j(0,d).k(0,c)
u=T.r(new H.l("\n"))
t.a.push(u)
u=a1.j(0,d).k(0,d)
t=new T.a5()
s=[T.b7]
t.a=H.c([],s)
u.a.push(t)
u=T.r(new H.l("\n"))
t.a.push(u)
u=a1.j(0,e).k(0,b)
t=T.r(new H.l("*"))
u.a.push(t)
t=a1.j(0,b).k(0,a)
u=T.r(new H.l("*"))
t.a.push(u)
u=a1.j(0,a).k(0,b)
t=new T.a5()
t.a=H.c([],s)
u.a.push(t)
u=T.r(new H.l("*"))
t.a.push(u)
u=a1.j(0,a).k(0,c)
t=T.r(new H.l("/"))
u.a.push(t)
t=a1.j(0,r).k(0,a0)
u=T.r(new H.l(" \n\t"))
t.a.push(u)
u=a1.j(0,a0).k(0,a0)
t=T.r(new H.l(" \n\t"))
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
t.aG(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aG(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aG(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fu.prototype={
bt:function(a){var u=this
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
bn:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=R.ie()
e.c=e.j(0,r)
u=e.j(0,r).k(0,q)
t=T.r(new H.l("_"))
u.a.push(t)
t=T.M("a","z")
u.a.push(t)
t=T.M("A","Z")
u.a.push(t)
t=e.j(0,q).k(0,q)
u=T.r(new H.l("_"))
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
t=T.r(new H.l("."))
u.a.push(t)
t=e.j(0,o).k(0,n)
u=T.M("0","9")
t.a.push(u)
u=e.j(0,n).k(0,n)
t=T.M("0","9")
u.a.push(t)
t=e.j(0,r).k(0,m)
u=T.r(new H.l(l))
t.a.push(u)
u=e.j(0,m).k(0,m)
t=T.r(new H.l(l))
u.a.push(t)
t=e.j(0,r).k(0,k)
u=T.r(new H.l("/"))
t.a.push(u)
u=e.j(0,k).k(0,j)
t=T.r(new H.l("/"))
u.a.push(t)
e.j(0,k).k(0,m).a.push(new T.aA())
t=e.j(0,j).k(0,i)
u=T.r(new H.l("\n"))
t.a.push(u)
u=e.j(0,j).k(0,j)
t=new T.a5()
s=[T.b7]
t.a=H.c([],s)
u.a.push(t)
u=T.r(new H.l("\n"))
t.a.push(u)
u=e.j(0,r).k(0,h)
t=T.r(new H.l("#"))
u.a.push(t)
t=e.j(0,h).k(0,h)
u=new T.a5()
u.a=H.c([],s)
t.a.push(u)
t=T.r(new H.l("\n"))
u.a.push(t)
t=e.j(0,h).k(0,g)
u=T.r(new H.l("\n"))
t.a.push(u)
u=e.j(0,r).k(0,f)
t=T.r(new H.l(" \n\t"))
u.a.push(t)
t=e.j(0,f).k(0,f)
u=T.r(new H.l(" \n\t"))
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
u.aG(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aG(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aG(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fv.prototype={
bt:function(a){var u=this,t="#111"
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
bn:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=R.ie()
l.c=l.j(0,s)
u=l.j(0,s).k(0,r)
t=T.r(new H.l("_"))
u.a.push(t)
t=T.M("a","z")
u.a.push(t)
t=T.M("A","Z")
u.a.push(t)
t=l.j(0,r).k(0,r)
u=T.r(new H.l("_"))
t.a.push(u)
u=T.M("0","9")
t.a.push(u)
u=T.M("a","z")
t.a.push(u)
u=T.M("A","Z")
t.a.push(u)
u=l.j(0,r).k(0,q)
t=T.r(new H.l("="))
u.a.push(t)
u.c=!0
u=l.j(0,s).k(0,p)
t=T.r(new H.l("</\\-!>="))
u.a.push(t)
t=l.j(0,p).k(0,p)
u=T.r(new H.l("</\\-!>="))
t.a.push(u)
u=l.j(0,s).k(0,o)
t=T.r(new H.l('"'))
u.a.push(t)
t=l.j(0,o).k(0,n)
u=T.r(new H.l('"'))
t.a.push(u)
u=l.j(0,o).k(0,"EscStr")
t=T.r(new H.l("\\"))
u.a.push(t)
t=l.j(0,"EscStr").k(0,o)
u=T.r(new H.l('"'))
t.a.push(u)
l.j(0,o).k(0,o).a.push(new T.aA())
l.j(0,s).k(0,m).a.push(new T.aA())
u=l.j(0,m).k(0,m)
t=new T.a5()
t.a=H.c([],[T.b7])
u.a.push(t)
u=T.r(new H.l('</\\-!>=_"'))
t.a.push(u)
u=T.M("a","z")
t.a.push(u)
u=T.M("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.P("Symbol")
u=l.j(0,n)
u.d=u.a.P("String")
u=l.j(0,r)
t=u.a.P(r)
u.d=t
t.aG(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.k]))
t=l.j(0,q)
t.d=t.a.P(q)
t=l.j(0,m)
t.d=t.a.P(m)
return l}}
V.hs.prototype={
dV:function(a,b){this.d=H.c([],[[P.n,W.ak]])
this.N(C.b.k(b,"\n"),"#111")},
bt:function(a){},
bn:function(){return}}
V.hx.prototype={
c0:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.lO().gcu().i(0,H.e(u))
if(t==null)if(d){c.$0()
m.dd(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.le(m.c).n(0,q)
o=W.n3("radio")
o.checked=s
o.name=u
W.X(o,"change",new V.hy(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.le(m.c).n(0,r.createElement("br"))},
a2:function(a,b,c){return this.c0(a,b,c,!1)},
dd:function(a){var u,t,s=P.lO(),r=P.k,q=P.na(s.gcu(),r,r)
q.m(0,this.a,a)
u=s.dZ(0,q)
r=window.history
t=u.h(0)
r.toString
r.replaceState(new P.jp([],[]).cC(""),"",t)}}
V.hy.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.dd(u.d)}}}
V.hO.prototype={
el:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.X(q,"scroll",new V.hQ(o),!1)},
di:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.fY()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.e3(C.b.hL(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
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
if(H.p3(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.b(m,1)
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
e6:function(a){var u,t,s,r=new V.f8("dart")
r.bf("dart")
u=new V.fu("glsl")
u.bf("glsl")
t=new V.fv("html")
t.bf("html")
s=C.b.hC(H.c([r,u,t],[V.cK]),new V.hR(a))
if(s!=null)return s
r=new V.hs("plain")
r.bf("plain")
return r},
df:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.c([],[P.x])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cz(s).a7(s,"+")){b0[t]=C.a.ae(s,1)
a6.push(1)
u=!0}else if(C.a.a7(s,"-")){b0[t]=C.a.ae(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.e6(a8)
r.dV(0,b0)
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
j=W.lg()
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
for(a2=C.b.gU(s);a2.B();)d.appendChild(a2.gJ(a2))
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
fY:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=R.ie()
u.c=u.j(0,q)
t=u.j(0,q).k(0,p)
s=T.r(new H.l("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new T.a5()
r=[T.b7]
s.a=H.c([],r)
t.a.push(s)
t=T.r(new H.l("*"))
s.a.push(t)
t=u.j(0,p).k(0,"BoldEnd")
s=T.r(new H.l("*"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,o)
s=T.r(new H.l("_"))
t.a.push(s)
t.c=!0
t=u.j(0,o).k(0,o)
s=new T.a5()
s.a=H.c([],r)
t.a.push(s)
t=T.r(new H.l("_"))
s.a.push(t)
t=u.j(0,o).k(0,n)
s=T.r(new H.l("_"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,m)
s=T.r(new H.l("`"))
t.a.push(s)
t.c=!0
t=u.j(0,m).k(0,m)
s=new T.a5()
s.a=H.c([],r)
t.a.push(s)
t=T.r(new H.l("`"))
s.a.push(t)
t=u.j(0,m).k(0,"CodeEnd")
s=T.r(new H.l("`"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,l)
s=T.r(new H.l("["))
t.a.push(s)
t.c=!0
t=u.j(0,l).k(0,k)
s=T.r(new H.l("|"))
t.a.push(s)
s=u.j(0,l).k(0,j)
t=T.r(new H.l("]"))
s.a.push(t)
s.c=!0
s=u.j(0,l).k(0,l)
t=new T.a5()
t.a=H.c([],r)
s.a.push(t)
s=T.r(new H.l("|]"))
t.a.push(s)
s=u.j(0,k).k(0,j)
t=T.r(new H.l("]"))
s.a.push(t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new T.a5()
t.a=H.c([],r)
s.a.push(t)
s=T.r(new H.l("|]"))
t.a.push(s)
u.j(0,q).k(0,i).a.push(new T.aA())
s=u.j(0,i).k(0,i)
t=new T.a5()
t.a=H.c([],r)
s.a.push(t)
s=T.r(new H.l("*_`["))
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
V.hQ.prototype={
$1:function(a){P.lK(C.n,new V.hP(this.a))}}
V.hP.prototype={
$0:function(){var u=C.d.ao(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.hR.prototype={
$1:function(a){return a.a===this.a}}
D.k5.prototype={
$0:function(){var u=this.a,t=u.r
t.sp(0,new V.p(0.1,0.1,0.1))
t=u.x
t.sp(0,new V.p(0.2,0.2,0.2))
t=u.z
t.sp(0,new V.p(1,1,1))
u.cy.sp(0,new V.p(0,0,0))
u=u.cx
u.sp(0,new V.p(1,1,1))}}
D.k6.prototype={
$0:function(){var u=this.a,t=u.r
t.sp(0,new V.p(0.11,0.11,0.1))
t=u.x
t.sp(0,new V.p(0.21,0.21,0.2))
t=u.z
t.sp(0,new V.p(1,1,1))
u.cy.sp(0,new V.p(0,0,0))
u=u.cx
u.sp(0,new V.p(1,0.9,0.5))}}
D.k7.prototype={
$0:function(){var u=this.a,t=u.r
t.sp(0,new V.p(0.1,0.1,0.1))
t=u.x
t.sp(0,new V.p(0.1,0.1,0.1))
t=u.z
t.sp(0,new V.p(1,1,1))
u.cy.saB(0.4)
t=u.cy
t.sp(0,new V.p(0.6,0.6,0.6))
u=u.cx
u.sp(0,new V.p(0.4,0.4,0.4))}}
D.kg.prototype={
$0:function(){var u=this.a,t=u.r
t.sp(0,new V.p(0.1,0.1,0.1))
t=u.x
t.sp(0,new V.p(0.1,0.1,0.1))
t=u.z
t.sp(0,new V.p(1,1,1))
u.cy.saB(0.4)
t=u.cy
t.sp(0,new V.p(0.2,0.3,1))
u=u.cx
u.sp(0,new V.p(0.3,0.3,0.3))}}
D.kh.prototype={
$0:function(){var u=this.a,t=u.r
t.sp(0,new V.p(0.1,0.1,0.1))
t=u.x
t.sp(0,new V.p(0.1,0.1,0.1))
t=u.z
t.sp(0,new V.p(1,1,1))
u.cy.saB(0.6)
t=u.cy
t.sp(0,new V.p(0.8,0.8,0.8))
u=u.cx
u.sp(0,new V.p(0.2,0.2,0.2))}}
D.ki.prototype={
$0:function(){var u=this.a,t=u.r
t.sp(0,new V.p(0.1,0.1,0.1))
t=u.x
t.sp(0,new V.p(0.1,0.1,0.1))
t=u.z
t.sp(0,new V.p(1,1,1))
u.cy.saB(0.6)
t=u.cy
t.sp(0,new V.p(1,1,1))
u.cx.sp(0,new V.p(0,0,0))}}
D.kj.prototype={
$0:function(){var u=this.a,t=u.r
t.sp(0,new V.p(0.1,0.1,0.1))
t=u.x
t.sp(0,new V.p(0.1,0.1,0.1))
t=u.z
t.sp(0,new V.p(1,1,1))
u.cy.saB(0.9)
t=u.cy
t.sp(0,new V.p(1,0.8,0.8))
u.cx.sp(0,new V.p(0,0,0))}}
D.kk.prototype={
$0:function(){var u=this.a,t=u.r
t.sp(0,new V.p(0,0,0))
t=u.x
t.sp(0,new V.p(0.1,0.1,0.1))
t=u.z
t.sp(0,new V.p(0.1,0.1,0.1))
u.cy.saB(0.99)
t=u.cy
t.sp(0,new V.p(0.95,0.95,0.95))
u.cx.sp(0,new V.p(0,0,0))}}
D.kl.prototype={
$0:function(){var u=this.a,t=u.r
t.sp(0,new V.p(0.3,0.3,0.3))
t=u.x
t.sp(0,new V.p(0.5,0.5,0.5))
t=u.z
t.sp(0,new V.p(1,1,1))
u.cy.sp(0,new V.p(0,0,0))
u=u.cx
u.sp(0,new V.p(0.3,0.3,0.3))}}
D.km.prototype={
$0:function(){this.a.sa9(0,F.l1(1,null,null,1))}}
D.kn.prototype={
$0:function(){this.a.sa9(0,F.l1(15,null,new D.k4(),15))}}
D.k4.prototype={
$3:function(a,b,c){var u,t=Math.cos(c*4*3.141592653589793+3.141592653589793),s=Math.cos(b*4*3.141592653589793+3.141592653589793),r=a.f
r=new V.z(r.a,r.b,r.c)
u=r.t(0,Math.sqrt(r.C(r)))
r=a.f
s=u.w(0,t*0.1+s*0.1)
a.sa1(0,r.D(0,new V.O(s.a,s.b,s.c)))}}
D.k8.prototype={
$0:function(){this.a.sa9(0,F.mb(!0,30,1))}}
D.k9.prototype={
$0:function(){this.a.sa9(0,F.mb(!1,30,0))}}
D.ka.prototype={
$0:function(){this.a.sa9(0,F.mc(!0,!0,25,new D.k3(),50))}}
D.k3.prototype={
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8}}
D.kb.prototype={
$0:function(){this.a.sa9(0,F.mn(6,null,6))}}
D.kc.prototype={
$0:function(){this.a.sa9(0,F.mn(10,new D.k2(),10))}}
D.k2.prototype={
$2:function(a,b){var u=a-0.5,t=b-0.5
return Math.cos(Math.sqrt(u*u+t*t)*3.141592653589793)*0.3}}
D.kd.prototype={
$0:function(){this.a.sa9(0,F.mp())}}
D.ke.prototype={
$0:function(){this.a.sa9(0,F.oX())}}
D.kf.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.k]
u.df("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.df("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.ed=u.h
u=J.cZ.prototype
u.ef=u.h
u=P.h.prototype
u.ee=u.bx
u=W.U.prototype
u.bA=u.ai
u=W.ec.prototype
u.eg=u.at
u=T.cV.prototype
u.ec=u.aE
u.cJ=u.h
u=O.d5.prototype
u.cK=u.ay
u=O.as.prototype
u.cL=u.ay})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"oD","nM",7)
u(P,"oE","nN",7)
u(P,"oF","nO",7)
t(P,"ma","oB",9)
s(W,"oR",4,null,["$4"],["nP"],16,0)
s(W,"oS",4,null,["$4"],["nQ"],16,0)
var m
r(m=E.aE.prototype,"gdT",0,0,null,["$1","$0"],["dU","hU"],0,0)
r(m,"gdR",0,0,null,["$1","$0"],["dS","hR"],0,0)
q(m,"ghP","hQ",4)
q(m,"ghS","hT",4)
r(m=E.dt.prototype,"gcO",0,0,null,["$1","$0"],["cQ","cP"],0,0)
p(m,"gi7","e_",9)
o(m=X.dD.prototype,"gfa","fb",5)
o(m,"geZ","f_",5)
o(m,"gf4","f5",2)
o(m,"gfe","ff",10)
o(m,"gfc","fd",10)
o(m,"gfi","fj",2)
o(m,"gfm","fn",2)
o(m,"gf8","f9",2)
o(m,"gfk","fl",2)
o(m,"gf6","f7",2)
o(m,"gfo","fp",19)
o(m,"gfq","fs",5)
o(m,"gfJ","fK",6)
o(m,"gfF","fG",6)
o(m,"gfH","fI",6)
r(D.bo.prototype,"gen",0,0,null,["$1","$0"],["aw","eo"],0,0)
r(m=D.d0.prototype,"gd2",0,0,null,["$1","$0"],["d3","fg"],0,0)
o(m,"gft","fu",20)
q(m,"geT","eU",11)
q(m,"gfz","fA",11)
n(V.G.prototype,"gl","cl",12)
n(V.z.prototype,"gl","cl",12)
r(m=U.bT.prototype,"gaM",0,0,null,["$1","$0"],["S","ab"],0,0)
q(m,"geR","eS",13)
q(m,"gfv","fw",13)
r(m=U.dE.prototype,"gaM",0,0,null,["$1","$0"],["S","ab"],0,0)
o(m,"gbJ","bK",1)
o(m,"gbL","bM",1)
o(m,"gbN","bO",1)
r(m=U.dF.prototype,"gaM",0,0,null,["$1","$0"],["S","ab"],0,0)
o(m,"gbJ","bK",1)
o(m,"gbL","bM",1)
o(m,"gbN","bO",1)
o(m,"geK","eL",1)
o(m,"geM","eN",1)
o(m,"gh4","h5",1)
o(m,"gh2","h3",1)
o(m,"gh0","h1",1)
o(U.dG.prototype,"geP","eQ",1)
r(m=M.cL.prototype,"gZ",0,0,null,["$1","$0"],["a_","aX"],0,0)
q(m,"gfB","fC",14)
q(m,"gfD","fE",14)
r(M.cN.prototype,"gZ",0,0,null,["$1","$0"],["a_","aX"],0,0)
r(m=M.cS.prototype,"gZ",0,0,null,["$1","$0"],["a_","aX"],0,0)
q(m,"gf0","f1",4)
q(m,"gf2","f3",4)
r(m=O.d4.prototype,"gbR",0,0,null,["$1","$0"],["a3","bS"],0,0)
r(m,"gfQ",0,0,null,["$1","$0"],["d5","fR"],0,0)
q(m,"geV","eW",15)
q(m,"geX","eY",15)
r(O.dj.prototype,"gbR",0,0,null,["$1","$0"],["a3","bS"],0,0)
r(X.dd.prototype,"ges",0,0,null,["$1","$0"],["ar","eu"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a0,null)
s(P.a0,[H.kK,J.a,J.a3,P.e_,P.h,H.bY,P.fC,H.cT,H.iy,H.f0,H.ik,P.bp,H.bO,H.eh,P.aH,H.fJ,H.fL,H.fE,P.en,P.dK,P.dp,P.i0,P.du,P.jF,P.jj,P.jd,P.dZ,P.t,P.jx,P.fS,P.eY,P.fy,P.jD,P.jC,P.az,P.a7,P.ac,P.b_,P.hq,P.dm,P.dS,P.fr,P.ft,P.n,P.S,P.b9,P.k,P.T,P.bB,P.iA,P.jm,W.f4,W.ck,W.K,W.db,W.ec,W.js,W.cU,W.aL,W.ji,W.ev,P.jo,P.es,P.je,P.by,T.aA,T.cV,T.b7,T.hz,T.hI,R.dn,R.dv,R.dw,R.id,O.aB,O.bZ,E.eU,E.aE,E.hA,E.dt,Z.dI,Z.dJ,Z.bN,Z.br,Z.bf,D.eX,D.bq,D.W,X.cJ,X.d_,X.fG,X.fP,X.ag,X.he,X.ig,X.dD,D.bo,D.a8,D.hu,D.hW,V.p,V.a4,V.fi,V.d6,V.aI,V.Z,V.O,V.ah,V.dg,V.G,V.z,U.dE,U.dF,U.dG,M.cN,M.cS,M.al,A.cH,A.eN,A.Y,A.cP,A.de,A.dl,A.fZ,A.cd,A.cf,A.cg,A.dz,A.it,F.b0,F.fl,F.bX,F.fI,F.c4,F.hJ,F.hL,F.hM,F.hN,F.aT,F.iM,F.iN,F.iQ,F.iS,F.iT,F.iU,O.dr,O.d5,O.h_,T.i9,X.kz,X.i4,X.fz,X.dd,V.cK,V.hx,V.hO])
s(J.a,[J.fD,J.cY,J.cZ,J.b3,J.bW,J.b4,H.c1,H.b8,W.f,W.eK,W.bl,W.aq,W.I,W.dM,W.af,W.f9,W.fa,W.dO,W.cR,W.dQ,W.fc,W.i,W.dT,W.aF,W.fw,W.dV,W.aG,W.fO,W.h8,W.e0,W.e1,W.aJ,W.e2,W.e5,W.aM,W.e9,W.eb,W.aP,W.ed,W.aQ,W.ei,W.av,W.el,W.ic,W.aS,W.eo,W.ii,W.iF,W.ew,W.ey,W.eA,W.eC,W.eE,P.b6,P.dX,P.ba,P.e7,P.hw,P.ej,P.bc,P.eq,P.eO,P.dL,P.dh,P.ef])
s(J.cZ,[J.hr,J.bA,J.b5])
t(J.kJ,J.b3)
s(J.bW,[J.cX,J.cW])
t(P.fN,P.e_)
s(P.fN,[H.dB,W.j3,W.a1,P.fn])
t(H.l,H.dB)
s(P.h,[H.ff,H.fT,H.ci])
s(H.ff,[H.d2,H.fK])
s(P.fC,[H.fU,H.iY])
t(H.fV,H.d2)
t(H.f1,H.f0)
s(P.bp,[H.hn,H.fF,H.ix,H.eW,H.hG,P.dc,P.aj,P.iz,P.iv,P.c9,P.f_,P.f7])
s(H.bO,[H.kv,H.i5,H.jY,H.jZ,H.k_,P.j_,P.iZ,P.j0,P.j1,P.jw,P.jv,P.jO,P.jg,P.jh,P.fM,P.fR,P.fd,P.fe,P.iE,P.iB,P.iC,P.iD,P.jy,P.jz,P.jB,P.jA,P.jJ,P.jI,P.jK,P.jL,W.fg,W.ha,W.hc,W.hF,W.i_,W.j8,W.hl,W.hk,W.jk,W.jl,W.ju,W.jE,P.jq,P.jP,P.fo,P.fp,P.eQ,E.hB,E.hC,E.hD,E.ib,D.fj,D.fk,F.jG,F.jQ,F.jS,F.jT,F.jU,F.kq,F.kr,F.ku,F.k1,F.jR,F.iW,F.iV,F.iO,F.iP,O.h2,O.h3,O.h4,O.h5,O.h6,O.h7,T.ia,V.kp,V.hy,V.hQ,V.hP,V.hR,D.k5,D.k6,D.k7,D.kg,D.kh,D.ki,D.kj,D.kk,D.kl,D.km,D.kn,D.k4,D.k8,D.k9,D.ka,D.k3,D.kb,D.kc,D.k2,D.kd,D.ke,D.kf])
s(H.i5,[H.hY,H.bL])
t(P.fQ,P.aH)
s(P.fQ,[H.P,W.j2])
t(H.d7,H.b8)
s(H.d7,[H.cm,H.co])
t(H.cn,H.cm)
t(H.c2,H.cn)
t(H.cp,H.co)
t(H.d8,H.cp)
s(H.d8,[H.hf,H.hg,H.hh,H.hi,H.hj,H.d9,H.c3])
t(P.jf,P.jF)
t(P.jc,P.jj)
t(P.et,P.fS)
t(P.dC,P.et)
s(P.eY,[P.eS,P.fh])
t(P.f2,P.i0)
s(P.f2,[P.eT,P.fx,P.iI,P.iH])
t(P.iG,P.fh)
s(P.ac,[P.N,P.x])
s(P.aj,[P.bw,P.fA])
t(P.j5,P.bB)
s(W.f,[W.E,W.fm,W.c_,W.aO,W.cq,W.aR,W.aw,W.cs,W.iX,W.cj,P.eR,P.bk])
s(W.E,[W.U,W.aZ])
s(W.U,[W.m,P.j])
s(W.m,[W.eL,W.eM,W.bm,W.bn,W.ak,W.fq,W.bV,W.hH,W.dq,W.i2,W.i3,W.cb])
t(W.f3,W.aq)
t(W.bP,W.dM)
s(W.af,[W.f5,W.f6])
t(W.dP,W.dO)
t(W.cQ,W.dP)
t(W.dR,W.dQ)
t(W.fb,W.dR)
t(W.ar,W.bl)
t(W.dU,W.dT)
t(W.bS,W.dU)
t(W.dW,W.dV)
t(W.bU,W.dW)
t(W.bd,W.i)
s(W.bd,[W.bs,W.au,W.bx])
t(W.h9,W.e0)
t(W.hb,W.e1)
t(W.e3,W.e2)
t(W.hd,W.e3)
t(W.e6,W.e5)
t(W.da,W.e6)
t(W.ea,W.e9)
t(W.ht,W.ea)
t(W.hE,W.eb)
t(W.cr,W.cq)
t(W.hU,W.cr)
t(W.ee,W.ed)
t(W.hV,W.ee)
t(W.hZ,W.ei)
t(W.em,W.el)
t(W.i6,W.em)
t(W.ct,W.cs)
t(W.i7,W.ct)
t(W.ep,W.eo)
t(W.ih,W.ep)
t(W.bg,W.au)
t(W.ex,W.ew)
t(W.j4,W.ex)
t(W.dN,W.cR)
t(W.ez,W.ey)
t(W.j9,W.ez)
t(W.eB,W.eA)
t(W.e4,W.eB)
t(W.eD,W.eC)
t(W.jn,W.eD)
t(W.eF,W.eE)
t(W.jr,W.eF)
t(W.j6,W.j2)
t(W.j7,P.dp)
t(W.jt,W.ec)
t(P.jp,P.jo)
t(P.aa,P.je)
t(P.dY,P.dX)
t(P.fH,P.dY)
t(P.e8,P.e7)
t(P.ho,P.e8)
t(P.c8,P.j)
t(P.ek,P.ej)
t(P.i1,P.ek)
t(P.er,P.eq)
t(P.ij,P.er)
t(P.eP,P.dL)
t(P.hp,P.bk)
t(P.eg,P.ef)
t(P.hX,P.eg)
s(T.cV,[T.a5,R.dy])
s(E.eU,[Z.cI,A.di,T.ds])
s(D.W,[D.b1,D.b2,D.B,X.hv])
s(X.hv,[X.d3,X.aK,X.c0,X.dx])
s(O.aB,[D.d0,U.bT,M.cL])
s(D.eX,[U.eZ,U.a9])
t(U.cM,U.a9)
s(A.di,[A.fW,A.hT])
s(A.dz,[A.dA,A.iq,A.ir,A.is,A.io,A.V,A.ip,A.J,A.cc,A.iu,A.ce,A.ab,A.bz,A.be])
t(F.hS,F.fl)
t(F.im,F.fI)
t(F.iR,F.iS)
t(F.hm,F.iT)
s(O.dr,[O.d4,O.dj])
s(O.d5,[O.fX,O.fY,O.as])
s(O.as,[O.h0,O.h1])
t(T.i8,T.ds)
t(X.fs,X.i4)
s(V.cK,[V.f8,V.fu,V.fv,V.hs])
u(H.dB,H.iy)
u(H.cm,P.t)
u(H.cn,H.cT)
u(H.co,P.t)
u(H.cp,H.cT)
u(P.e_,P.t)
u(P.et,P.jx)
u(W.dM,W.f4)
u(W.dO,P.t)
u(W.dP,W.K)
u(W.dQ,P.t)
u(W.dR,W.K)
u(W.dT,P.t)
u(W.dU,W.K)
u(W.dV,P.t)
u(W.dW,W.K)
u(W.e0,P.aH)
u(W.e1,P.aH)
u(W.e2,P.t)
u(W.e3,W.K)
u(W.e5,P.t)
u(W.e6,W.K)
u(W.e9,P.t)
u(W.ea,W.K)
u(W.eb,P.aH)
u(W.cq,P.t)
u(W.cr,W.K)
u(W.ed,P.t)
u(W.ee,W.K)
u(W.ei,P.aH)
u(W.el,P.t)
u(W.em,W.K)
u(W.cs,P.t)
u(W.ct,W.K)
u(W.eo,P.t)
u(W.ep,W.K)
u(W.ew,P.t)
u(W.ex,W.K)
u(W.ey,P.t)
u(W.ez,W.K)
u(W.eA,P.t)
u(W.eB,W.K)
u(W.eC,P.t)
u(W.eD,W.K)
u(W.eE,P.t)
u(W.eF,W.K)
u(P.dX,P.t)
u(P.dY,W.K)
u(P.e7,P.t)
u(P.e8,W.K)
u(P.ej,P.t)
u(P.ek,W.K)
u(P.eq,P.t)
u(P.er,W.K)
u(P.dL,P.aH)
u(P.ef,P.t)
u(P.eg,W.K)})()
var v={mangledGlobalNames:{x:"int",N:"double",ac:"num",k:"String",az:"bool",b9:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.W]},{func:1,ret:-1,args:[D.W]},{func:1,ret:-1,args:[W.au]},{func:1,ret:P.b9,args:[,,]},{func:1,ret:-1,args:[P.x,[P.h,E.aE]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bx]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bs]},{func:1,ret:-1,args:[P.x,[P.h,D.a8]]},{func:1,ret:P.N},{func:1,ret:-1,args:[P.x,[P.h,U.a9]]},{func:1,ret:-1,args:[P.x,[P.h,M.al]]},{func:1,ret:-1,args:[P.x,[P.h,V.aI]]},{func:1,ret:P.az,args:[W.U,P.k,P.k,W.ck]},{func:1,ret:P.b9,args:[,]},{func:1,ret:P.by,args:[,,]},{func:1,ret:-1,args:[W.bg]},{func:1,ret:P.az,args:[[P.h,D.a8]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bm.prototype
C.i=W.bn.prototype
C.N=W.ak.prototype
C.Q=J.a.prototype
C.b=J.b3.prototype
C.R=J.cW.prototype
C.c=J.cX.prototype
C.j=J.cY.prototype
C.d=J.bW.prototype
C.a=J.b4.prototype
C.S=J.b5.prototype
C.A=J.hr.prototype
C.Y=P.dh.prototype
C.B=W.dq.prototype
C.q=J.bA.prototype
C.C=W.bg.prototype
C.D=W.cj.prototype
C.Z=new P.eT()
C.E=new P.eS()
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

C.L=new P.hq()
C.e=new P.iG()
C.M=new P.iI()
C.f=new P.jf()
C.n=new P.b_(0)
C.O=new P.b_(5e6)
C.P=new P.fy("element",!1,!1,!1)
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
C.X=new H.f1(0,{},C.w,[P.k,P.k])})();(function staticFields(){$.ap=0
$.bM=null
$.lj=null
$.mh=null
$.m9=null
$.ml=null
$.jV=null
$.k0=null
$.l4=null
$.bE=null
$.cw=null
$.cx=null
$.kZ=!1
$.am=C.f
$.a6=[]
$.aD=null
$.kE=null
$.lp=null
$.lo=null
$.cl=P.kM(P.k,P.ft)
$.lv=null
$.lz=null
$.c5=null
$.lG=null
$.lR=null
$.lU=null
$.lT=null
$.iJ=null
$.iK=null
$.iL=null
$.lS=null
$.ly=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pa","mr",function(){return H.mg("_$dart_dartClosure")})
u($,"pb","la",function(){return H.mg("_$dart_js")})
u($,"pc","ms",function(){return H.ax(H.il({
toString:function(){return"$receiver$"}}))})
u($,"pd","mt",function(){return H.ax(H.il({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pe","mu",function(){return H.ax(H.il(null))})
u($,"pf","mv",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pi","my",function(){return H.ax(H.il(void 0))})
u($,"pj","mz",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ph","mx",function(){return H.ax(H.lM(null))})
u($,"pg","mw",function(){return H.ax(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pl","mB",function(){return H.ax(H.lM(void 0))})
u($,"pk","mA",function(){return H.ax(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pz","lb",function(){return P.nL()})
u($,"pm","mC",function(){return P.nH()})
u($,"pA","mG",function(){return H.ng(H.bD(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.x])))})
u($,"pC","mI",function(){return P.nu("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pD","mJ",function(){return P.o9()})
u($,"pB","mH",function(){return P.ls(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.k)})
u($,"pt","mF",function(){return Z.ai(0)})
u($,"pn","mD",function(){return Z.ai(511)})
u($,"pv","ao",function(){return Z.ai(1)})
u($,"pu","aX",function(){return Z.ai(2)})
u($,"pp","aW",function(){return Z.ai(4)})
u($,"pw","bi",function(){return Z.ai(8)})
u($,"px","bj",function(){return Z.ai(16)})
u($,"pq","cC",function(){return Z.ai(32)})
u($,"pr","cD",function(){return Z.ai(64)})
u($,"ps","mE",function(){return Z.ai(96)})
u($,"py","bK",function(){return Z.ai(128)})
u($,"po","aV",function(){return Z.ai(256)})
u($,"p9","mq",function(){return new V.fi(1e-9)})
u($,"p8","C",function(){return $.mq()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.c1,DataView:H.b8,ArrayBufferView:H.b8,Float32Array:H.c2,Float64Array:H.c2,Int16Array:H.hf,Int32Array:H.hg,Int8Array:H.hh,Uint16Array:H.hi,Uint32Array:H.hj,Uint8ClampedArray:H.d9,CanvasPixelArray:H.d9,Uint8Array:H.c3,HTMLAudioElement:W.m,HTMLBRElement:W.m,HTMLBaseElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLInputElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMediaElement:W.m,HTMLMenuElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableCellElement:W.m,HTMLTableDataCellElement:W.m,HTMLTableHeaderCellElement:W.m,HTMLTableColElement:W.m,HTMLTextAreaElement:W.m,HTMLTimeElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLVideoElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLFrameSetElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,AccessibleNodeList:W.eK,HTMLAnchorElement:W.eL,HTMLAreaElement:W.eM,Blob:W.bl,HTMLBodyElement:W.bm,HTMLCanvasElement:W.bn,CDATASection:W.aZ,CharacterData:W.aZ,Comment:W.aZ,ProcessingInstruction:W.aZ,Text:W.aZ,CSSPerspective:W.f3,CSSCharsetRule:W.I,CSSConditionRule:W.I,CSSFontFaceRule:W.I,CSSGroupingRule:W.I,CSSImportRule:W.I,CSSKeyframeRule:W.I,MozCSSKeyframeRule:W.I,WebKitCSSKeyframeRule:W.I,CSSKeyframesRule:W.I,MozCSSKeyframesRule:W.I,WebKitCSSKeyframesRule:W.I,CSSMediaRule:W.I,CSSNamespaceRule:W.I,CSSPageRule:W.I,CSSRule:W.I,CSSStyleRule:W.I,CSSSupportsRule:W.I,CSSViewportRule:W.I,CSSStyleDeclaration:W.bP,MSStyleCSSProperties:W.bP,CSS2Properties:W.bP,CSSImageValue:W.af,CSSKeywordValue:W.af,CSSNumericValue:W.af,CSSPositionValue:W.af,CSSResourceValue:W.af,CSSUnitValue:W.af,CSSURLImageValue:W.af,CSSStyleValue:W.af,CSSMatrixComponent:W.aq,CSSRotation:W.aq,CSSScale:W.aq,CSSSkew:W.aq,CSSTranslation:W.aq,CSSTransformComponent:W.aq,CSSTransformValue:W.f5,CSSUnparsedValue:W.f6,DataTransferItemList:W.f9,HTMLDivElement:W.ak,DOMException:W.fa,ClientRectList:W.cQ,DOMRectList:W.cQ,DOMRectReadOnly:W.cR,DOMStringList:W.fb,DOMTokenList:W.fc,Element:W.U,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.ar,FileList:W.bS,FileWriter:W.fm,HTMLFormElement:W.fq,Gamepad:W.aF,History:W.fw,HTMLCollection:W.bU,HTMLFormControlsCollection:W.bU,HTMLOptionsCollection:W.bU,ImageData:W.aG,HTMLImageElement:W.bV,KeyboardEvent:W.bs,Location:W.fO,MediaList:W.h8,MessagePort:W.c_,MIDIInputMap:W.h9,MIDIOutputMap:W.hb,MimeType:W.aJ,MimeTypeArray:W.hd,PointerEvent:W.au,MouseEvent:W.au,DragEvent:W.au,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,Attr:W.E,DocumentType:W.E,Node:W.E,NodeList:W.da,RadioNodeList:W.da,Plugin:W.aM,PluginArray:W.ht,RTCStatsReport:W.hE,HTMLSelectElement:W.hH,SourceBuffer:W.aO,SourceBufferList:W.hU,SpeechGrammar:W.aP,SpeechGrammarList:W.hV,SpeechRecognitionResult:W.aQ,Storage:W.hZ,CSSStyleSheet:W.av,StyleSheet:W.av,HTMLTableElement:W.dq,HTMLTableRowElement:W.i2,HTMLTableSectionElement:W.i3,HTMLTemplateElement:W.cb,TextTrack:W.aR,TextTrackCue:W.aw,VTTCue:W.aw,TextTrackCueList:W.i6,TextTrackList:W.i7,TimeRanges:W.ic,Touch:W.aS,TouchEvent:W.bx,TouchList:W.ih,TrackDefaultList:W.ii,CompositionEvent:W.bd,FocusEvent:W.bd,TextEvent:W.bd,UIEvent:W.bd,URL:W.iF,VideoTrackList:W.iX,WheelEvent:W.bg,Window:W.cj,DOMWindow:W.cj,CSSRuleList:W.j4,ClientRect:W.dN,DOMRect:W.dN,GamepadList:W.j9,NamedNodeMap:W.e4,MozNamedAttrMap:W.e4,SpeechRecognitionResultList:W.jn,StyleSheetList:W.jr,SVGLength:P.b6,SVGLengthList:P.fH,SVGNumber:P.ba,SVGNumberList:P.ho,SVGPointList:P.hw,SVGScriptElement:P.c8,SVGStringList:P.i1,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.bc,SVGTransformList:P.ij,AudioBuffer:P.eO,AudioParamMap:P.eP,AudioTrackList:P.eR,AudioContext:P.bk,webkitAudioContext:P.bk,BaseAudioContext:P.bk,OfflineAudioContext:P.hp,WebGL2RenderingContext:P.dh,SQLResultSetRowList:P.hX})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.cm.$nativeSuperclassTag="ArrayBufferView"
H.cn.$nativeSuperclassTag="ArrayBufferView"
H.c2.$nativeSuperclassTag="ArrayBufferView"
H.co.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.d8.$nativeSuperclassTag="ArrayBufferView"
W.cq.$nativeSuperclassTag="EventTarget"
W.cr.$nativeSuperclassTag="EventTarget"
W.cs.$nativeSuperclassTag="EventTarget"
W.ct.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(D.mj,[])
else D.mj([])})})()
//# sourceMappingURL=test.dart.js.map
