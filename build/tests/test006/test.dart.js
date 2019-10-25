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
a[c]=function(){a[c]=function(){H.ou(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kz"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kz"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kz(this,a,b,c,true,false,e).prototype
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
jQ:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
kd:function(){return new P.ca("No element")},
mr:function(){return new P.ca("Too many elements")},
dk:function(a,b,c,d){if(c-b<=32)H.mW(a,b,c,d)
else H.mV(a,b,c,d)},
mW:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.b(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.b(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a0()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.b(a,q)
C.b.m(a,s,a[q])
s=q}C.b.m(a,s,t)}},
mV:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.c.a6(a4-a3+1,6),d=a3+e,c=a4-e,b=C.c.a6(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a0()
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
if(typeof k!=="number")return k.O()
if(k<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a0()
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
if(typeof g!=="number")return g.O()
if(g<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a0()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a0()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.O()
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
if(typeof k!=="number")return k.O()
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
m:function m(a){this.a=a},
ff:function ff(){},
d3:function d3(){},
bX:function bX(a,b){var _=this
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
ci:function ci(a,b,c){this.a=a
this.b=b
this.$ti=c},
iW:function iW(a,b){this.a=a
this.b=b},
cT:function cT(){},
iz:function iz(){},
dB:function dB(){},
mk:function(){throw H.d(P.x("Cannot modify unmodifiable Map"))},
eH:function(a){var u,t=H.ov(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oe:function(a){return v.types[a]},
lG:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.O(a).$iy},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a3(a)
if(typeof u!=="string")throw H.d(H.an(a))
return u},
c6:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mN:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
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
c7:function(a){return H.mE(a)+H.lx(H.cA(a),0,null)},
mE:function(a){var u,t,s,r,q,p,o,n=J.O(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.Q||!!n.$ibE){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.eH(t.length>1&&C.a.C(t,0)===36?C.a.a8(t,1):t)},
mF:function(){if(!!self.location)return self.location.href
return},
l3:function(a){var u,t,s,r,q=J.ad(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
mO:function(a){var u,t,s,r=H.c([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.an(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aP(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.d(H.an(s))}return H.l3(r)},
l4:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.an(s))
if(s<0)throw H.d(H.an(s))
if(s>65535)return H.mO(a)}return H.l3(a)},
mP:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bz:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aP(u,10))>>>0,56320|u&1023)}}throw H.d(P.Y(a,0,1114111,null,null))},
by:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mM:function(a){var u=H.by(a).getFullYear()+0
return u},
mK:function(a){var u=H.by(a).getMonth()+1
return u},
mG:function(a){var u=H.by(a).getDate()+0
return u},
mH:function(a){var u=H.by(a).getHours()+0
return u},
mJ:function(a){var u=H.by(a).getMinutes()+0
return u},
mL:function(a){var u=H.by(a).getSeconds()+0
return u},
mI:function(a){var u=H.by(a).getMilliseconds()+0
return u},
v:function(a){throw H.d(H.an(a))},
b:function(a,b){if(a==null)J.ad(a)
throw H.d(H.bg(a,b))},
bg:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ak(!0,b,s,null)
u=J.ad(a)
if(!(b<0)){if(typeof u!=="number")return H.v(u)
t=b>=u}else t=!0
if(t)return P.K(b,a,s,null,u)
return P.hB(b,s)},
o7:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bA(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bA(a,c,!0,b,"end",u)
return new P.ak(!0,b,"end",null)},
an:function(a){return new P.ak(!0,a,null,null)},
o3:function(a){if(typeof a!=="number")throw H.d(H.an(a))
return a},
d:function(a){var u
if(a==null)a=new P.dd()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lL})
u.name=""}else u.toString=H.lL
return u},
lL:function(){return J.a3(this.dartException)},
t:function(a){throw H.d(a)},
q:function(a){throw H.d(P.as(a))},
aA:function(a){var u,t,s,r,q,p
a=H.lK(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.j])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.im(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
io:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ld:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
l_:function(a,b){return new H.hq(a,b==null?null:b.method)},
kh:function(a,b){var u=b==null,t=u?null:b.method
return new H.fK(a,t,u?null:b.receiver)},
aj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.k0(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aP(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kh(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.l_(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.lO()
q=$.lP()
p=$.lQ()
o=$.lR()
n=$.lU()
m=$.lV()
l=$.lT()
$.lS()
k=$.lX()
j=$.lW()
i=r.af(u)
if(i!=null)return f.$1(H.kh(u,i))
else{i=q.af(u)
if(i!=null){i.method="call"
return f.$1(H.kh(u,i))}else{i=p.af(u)
if(i==null){i=o.af(u)
if(i==null){i=n.af(u)
if(i==null){i=m.af(u)
if(i==null){i=l.af(u)
if(i==null){i=o.af(u)
if(i==null){i=k.af(u)
if(i==null){i=j.af(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.l_(u,i))}}return f.$1(new H.iy(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dm()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ak(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dm()
return a},
kB:function(a){var u
if(a==null)return new H.eg(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eg(a)},
ob:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
ok:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.r("Unsupported number of arguments for wrapped closure"))},
bK:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ok)
a.$identity=u
return u},
mj:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hW().constructor.prototype):Object.create(new H.bO(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ar
if(typeof t!=="number")return t.B()
$.ar=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.kQ(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mf(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.kQ(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mf:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oe,a)
if(typeof a=="function")if(b)return a
else{u=c?H.kP:H.k3
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
mg:function(a,b,c,d){var u=H.k3
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kQ:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mi(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mg(t,!r,u,b)
if(t===0){r=$.ar
if(typeof r!=="number")return r.B()
$.ar=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bP
return new Function(r+H.e(q==null?$.bP=H.eV("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ar
if(typeof r!=="number")return r.B()
$.ar=r+1
o+=r
r="return function("+o+"){return this."
q=$.bP
return new Function(r+H.e(q==null?$.bP=H.eV("self"):q)+"."+H.e(u)+"("+o+");}")()},
mh:function(a,b,c,d){var u=H.k3,t=H.kP
switch(b?-1:a){case 0:throw H.d(H.mT("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mi:function(a,b){var u,t,s,r,q,p,o,n=$.bP
if(n==null)n=$.bP=H.eV("self")
u=$.kO
if(u==null)u=$.kO=H.eV("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mh(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ar
if(typeof u!=="number")return u.B()
$.ar=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ar
if(typeof u!=="number")return u.B()
$.ar=u+1
return new Function(n+u+"}")()},
kz:function(a,b,c,d,e,f,g){return H.mj(a,b,c,d,!!e,!!f,g)},
k3:function(a){return a.a},
kP:function(a){return a.c},
eV:function(a){var u,t,s,r=new H.bO("self","target","receiver","name"),q=J.ke(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
oo:function(a,b){throw H.d(H.me(a,H.eH(b.substring(2))))},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.O(a)[b]
else u=!0
if(u)return a
H.oo(a,b)},
o9:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
me:function(a,b){return new H.eW("CastError: "+P.kb(a)+": type '"+H.e(H.o_(a))+"' is not a subtype of type '"+b+"'")},
o_:function(a){var u,t=J.O(a)
if(!!t.$ibQ){u=H.o9(t)
if(u!=null)return H.op(u)
return"Closure"}return H.c7(a)},
ou:function(a){throw H.d(new P.f7(a))},
mT:function(a){return new H.hI(a)},
lE:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
cA:function(a){if(a==null)return
return a.$ti},
p4:function(a,b,c){return H.jZ(a["$a"+H.e(c)],H.cA(b))},
od:function(a,b,c,d){var u=H.jZ(a["$a"+H.e(c)],H.cA(b))
return u==null?null:u[d]},
kA:function(a,b,c){var u=H.jZ(a["$a"+H.e(b)],H.cA(a))
return u==null?null:u[c]},
eG:function(a,b){var u=H.cA(a)
return u==null?null:u[b]},
op:function(a){return H.bf(a,null)},
bf:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.eH(a[0].name)+H.lx(a,1,b)
if(typeof a=="function")return H.eH(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.e(b[t])}if('func' in a)return H.ny(a,b)
if('futureOr' in a)return"FutureOr<"+H.bf("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ny:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.j])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.a.B(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a0)p+=" extends "+H.bf(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bf(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bf(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bf(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oa(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bf(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lx:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.S("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bf(p,c)}return"<"+u.h(0)+">"},
jZ:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
p2:function(a,b,c){return a.apply(b,H.jZ(J.O(b)["$a"+H.e(c)],H.cA(b)))},
p3:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ol:function(a){var u,t,s,r,q=$.lF.$1(a),p=$.jO[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jU[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.lC.$2(a,q)
if(q!=null){p=$.jO[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jU[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jX(u)
$.jO[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jU[q]=u
return u}if(s==="-"){r=H.jX(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lI(a,u)
if(s==="*")throw H.d(P.ix(q))
if(v.leafTags[q]===true){r=H.jX(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lI(a,u)},
lI:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kD(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jX:function(a){return J.kD(a,!1,null,!!a.$iy)},
om:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jX(u)
else return J.kD(u,c,null,null)},
oi:function(){if(!0===$.kC)return
$.kC=!0
H.oj()},
oj:function(){var u,t,s,r,q,p,o,n
$.jO=Object.create(null)
$.jU=Object.create(null)
H.oh()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lJ.$1(q)
if(p!=null){o=H.om(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oh:function(){var u,t,s,r,q,p,o=C.F()
o=H.bJ(C.G,H.bJ(C.H,H.bJ(C.u,H.bJ(C.u,H.bJ(C.I,H.bJ(C.J,H.bJ(C.K(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lF=new H.jR(r)
$.lC=new H.jS(q)
$.lJ=new H.jT(p)},
bJ:function(a,b){return a(b)||b},
mt:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(P.Q("Illegal RegExp pattern ("+String(p)+")",a,null))},
or:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
o8:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lK:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kG:function(a,b,c){var u=H.os(a,b,c)
return u},
os:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lK(b),'g'),H.o8(c))},
f0:function f0(){},
f1:function f1(a,b,c,d){var _=this
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
hq:function hq(a,b){this.a=a
this.b=b},
fK:function fK(a,b,c){this.a=a
this.b=b
this.c=c},
iy:function iy(a){this.a=a},
k0:function k0(a){this.a=a},
eg:function eg(a){this.a=a
this.b=null},
bQ:function bQ(){},
i3:function i3(){},
hW:function hW(){},
bO:function bO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eW:function eW(a){this.a=a},
hI:function hI(a){this.a=a},
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
bH:function(a){return a},
mC:function(a){return new Int8Array(a)},
aD:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bg(b,a))},
nw:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.o7(a,b,c))
return b},
c1:function c1(){},
b6:function b6(){},
d8:function d8(){},
c2:function c2(){},
d9:function d9(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
da:function da(){},
c3:function c3(){},
cm:function cm(){},
cn:function cn(){},
co:function co(){},
cp:function cp(){},
oa:function(a){return J.kW(a?Object.keys(a):[],null)},
ov:function(a){return v.mangledGlobalNames[a]},
on:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jP:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kC==null){H.oi()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.ix("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kH()]
if(r!=null)return r
r=H.ol(a)
if(r!=null)return r
if(typeof a=="function")return C.S
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.kH(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
ms:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.kM(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.Y(a,0,4294967295,"length",null))
return J.kW(new Array(a),b)},
kW:function(a,b){return J.ke(H.c(a,[b]))},
ke:function(a){a.fixed$length=Array
return a},
O:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cY.prototype
return J.cX.prototype}if(typeof a=="string")return J.b2.prototype
if(a==null)return J.cZ.prototype
if(typeof a=="boolean")return J.fI.prototype
if(a.constructor==Array)return J.b1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b3.prototype
return a}if(a instanceof P.a0)return a
return J.jP(a)},
cy:function(a){if(typeof a=="string")return J.b2.prototype
if(a==null)return a
if(a.constructor==Array)return J.b1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b3.prototype
return a}if(a instanceof P.a0)return a
return J.jP(a)},
eF:function(a){if(a==null)return a
if(a.constructor==Array)return J.b1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b3.prototype
return a}if(a instanceof P.a0)return a
return J.jP(a)},
oc:function(a){if(typeof a=="number")return J.bW.prototype
if(typeof a=="string")return J.b2.prototype
if(a==null)return a
if(!(a instanceof P.a0))return J.bE.prototype
return a},
cz:function(a){if(typeof a=="string")return J.b2.prototype
if(a==null)return a
if(!(a instanceof P.a0))return J.bE.prototype
return a},
bM:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b3.prototype
return a}if(a instanceof P.a0)return a
return J.jP(a)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.O(a).q(a,b)},
cD:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lG(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cy(a).i(a,b)},
k1:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.lG(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eF(a).m(a,b,c)},
m5:function(a,b){return J.cz(a).C(a,b)},
m6:function(a,b,c){return J.bM(a).fU(a,b,c)},
m7:function(a,b,c,d){return J.bM(a).he(a,b,c,d)},
m8:function(a,b){return J.cz(a).X(a,b)},
k2:function(a,b){return J.oc(a).hn(a,b)},
eI:function(a,b){return J.eF(a).F(a,b)},
m9:function(a,b,c,d){return J.bM(a).hC(a,b,c,d)},
kJ:function(a,b){return J.eF(a).u(a,b)},
ma:function(a){return J.bM(a).ghl(a)},
eJ:function(a){return J.bM(a).gbT(a)},
cE:function(a){return J.O(a).gE(a)},
aY:function(a){return J.eF(a).gV(a)},
ad:function(a){return J.cy(a).gl(a)},
kK:function(a){return J.eF(a).i9(a)},
mb:function(a,b){return J.bM(a).ib(a,b)},
mc:function(a,b,c){return J.cz(a).p(a,b,c)},
md:function(a){return J.cz(a).io(a)},
a3:function(a){return J.O(a).h(a)},
a:function a(){},
fI:function fI(){},
cZ:function cZ(){},
d_:function d_(){},
hu:function hu(){},
bE:function bE(){},
b3:function b3(){},
b1:function b1(a){this.$ti=a},
kf:function kf(a){this.$ti=a},
a4:function a4(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bW:function bW(){},
cY:function cY(){},
cX:function cX(){},
b2:function b2(){}},P={
n8:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.o0()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bK(new P.iY(s),1)).observe(u,{childList:true})
return new P.iX(s,u,t)}else if(self.setImmediate!=null)return P.o1()
return P.o2()},
n9:function(a){self.scheduleImmediate(H.bK(new P.iZ(a),0))},
na:function(a){self.setImmediate(H.bK(new P.j_(a),0))},
nb:function(a){P.kl(C.n,a)},
kl:function(a,b){var u=C.c.a6(a.a,1000)
return P.ng(u<0?0:u,b)},
lc:function(a,b){var u=C.c.a6(a.a,1000)
return P.nh(u<0?0:u,b)},
ng:function(a,b){var u=new P.em()
u.ew(a,b)
return u},
nh:function(a,b){var u=new P.em()
u.ex(a,b)
return u},
nU:function(){var u,t
for(;u=$.bI,u!=null;){$.cx=null
t=u.b
$.bI=t
if(t==null)$.cw=null
u.a.$0()}},
nZ:function(){$.kx=!0
try{P.nU()}finally{$.cx=null
$.kx=!1
if($.bI!=null)$.kI().$1(P.lD())}},
nX:function(a){var u=new P.dJ(a)
if($.bI==null){$.bI=$.cw=u
if(!$.kx)$.kI().$1(P.lD())}else $.cw=$.cw.b=u},
nY:function(a){var u,t,s=$.bI
if(s==null){P.nX(a)
$.cx=$.cw
return}u=new P.dJ(a)
t=$.cx
if(t==null){u.b=s
$.bI=$.cx=u}else{u.b=t.b
$.cx=t.b=u
if(u.b==null)$.cw=u}},
lb:function(a,b){var u=$.am
if(u===C.f)return P.kl(a,b)
return P.kl(a,u.hm(b))},
mZ:function(a,b){var u=$.am
if(u===C.f)return P.lc(a,b)
return P.lc(a,u.d6(b,P.du))},
ly:function(a,b,c,d,e){var u={}
u.a=d
P.nY(new P.jM(u,e))},
nV:function(a,b,c,d){var u,t=$.am
if(t===c)return d.$0()
$.am=c
u=t
try{t=d.$0()
return t}finally{$.am=u}},
nW:function(a,b,c,d,e){var u,t=$.am
if(t===c)return d.$1(e)
$.am=c
u=t
try{t=d.$1(e)
return t}finally{$.am=u}},
iY:function iY(a){this.a=a},
iX:function iX(a,b,c){this.a=a
this.b=b
this.c=c},
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
em:function em(){this.c=0},
ju:function ju(a,b){this.a=a
this.b=b},
jt:function jt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dJ:function dJ(a){this.a=a
this.b=null},
dp:function dp(){},
hZ:function hZ(){},
du:function du(){},
jD:function jD(){},
jM:function jM(a,b){this.a=a
this.b=b},
jd:function jd(){},
je:function je(a,b){this.a=a
this.b=b},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
mv:function(a,b){return new H.N([a,b])},
ki:function(a,b){return new H.N([a,b])},
mx:function(a){return H.ob(a,new H.N([null,null]))},
d2:function(a){return new P.ja([a])},
ks:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nf:function(a,b){var u=new P.dY(a,b)
u.c=a.e
return u},
mq:function(a,b,c){var u,t
if(P.ky(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.j])
$.a6.push(a)
try{P.nz(a,u)}finally{if(0>=$.a6.length)return H.b($.a6,-1)
$.a6.pop()}t=P.l9(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kc:function(a,b,c){var u,t
if(P.ky(a))return b+"..."+c
u=new P.S(b)
$.a6.push(a)
try{t=u
t.a=P.l9(t.a,a,", ")}finally{if(0>=$.a6.length)return H.b($.a6,-1)
$.a6.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ky:function(a){var u,t
for(u=$.a6.length,t=0;t<u;++t)if(a===$.a6[t])return!0
return!1},
nz:function(a,b){var u,t,s,r,q,p,o,n=a.gV(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.v())return
u=H.e(n.gG(n))
b.push(u)
m+=u.length+2;++l}if(!n.v()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gG(n);++l
if(!n.v()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gG(n);++l
for(;n.v();r=q,q=p){p=n.gG(n);++l
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
mw:function(a,b,c){var u=P.mv(b,c)
a.u(0,new P.fQ(u))
return u},
kX:function(a,b){var u,t,s=P.d2(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t)s.n(0,a[t])
return s},
kk:function(a){var u,t={}
if(P.ky(a))return"{...}"
u=new P.S("")
try{$.a6.push(a)
u.a+="{"
t.a=!0
J.kJ(a,new P.fV(t,u))
u.a+="}"}finally{if(0>=$.a6.length)return H.b($.a6,-1)
$.a6.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
ja:function ja(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jb:function jb(a){this.a=a
this.c=this.b=null},
dY:function dY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fQ:function fQ(a){this.a=a},
fR:function fR(){},
u:function u(){},
fU:function fU(){},
fV:function fV(a,b){this.a=a
this.b=b},
aK:function aK(){},
jv:function jv(){},
fW:function fW(){},
dC:function dC(a,b){this.a=a
this.$ti=b},
jh:function jh(){},
dZ:function dZ(){},
es:function es(){},
n1:function(a,b,c,d){if(b instanceof Uint8Array)return P.n2(!1,b,c,d)
return},
n2:function(a,b,c,d){var u,t,s=$.lY()
if(s==null)return
u=0===c
if(u&&!0)return P.ko(s,b)
t=b.length
d=P.ba(c,d,t)
if(u&&d===t)return P.ko(s,b)
return P.ko(s,b.subarray(c,d))},
ko:function(a,b){if(P.n4(b))return
return P.n5(a,b)},
n5:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aj(t)}return},
n4:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
n3:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aj(t)}return},
lA:function(a,b,c){var u,t,s
for(u=J.cy(a),t=b;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.ah()
if((s&127)!==s)return t-b}return c-b},
kN:function(a,b,c,d,e,f){if(C.c.b8(f,4)!==0)throw H.d(P.Q("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.Q("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.Q("Invalid base64 padding, more than two '=' characters",a,b))},
eS:function eS(){},
eT:function eT(){},
eY:function eY(){},
f2:function f2(){},
fh:function fh(){},
fx:function fx(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fw:function fw(a){this.a=a},
iH:function iH(){},
iJ:function iJ(){},
jB:function jB(a){this.b=0
this.c=a},
iI:function iI(a){this.a=a},
jA:function jA(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
cB:function(a,b,c){var u=H.mN(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.Q(a,null,null))},
mo:function(a){if(a instanceof H.bQ)return a.h(0)
return"Instance of '"+H.e(H.c7(a))+"'"},
my:function(a,b,c){var u,t,s=J.ms(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
kj:function(a,b,c){var u,t=H.c([],[c])
for(u=J.aY(a);u.v();)t.push(u.gG(u))
if(b)return t
return J.ke(t)},
cb:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.ba(b,c,u)
return H.l4(b>0||c<u?C.b.ee(a,b,c):a)}if(!!J.O(a).$ic3)return H.mP(a,b,P.ba(b,c,a.length))
return P.mX(a,b,c)},
mX:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.d(P.Y(b,0,J.ad(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.Y(c,b,J.ad(a),q,q))
t=J.aY(a)
for(s=0;s<b;++s)if(!t.v())throw H.d(P.Y(b,0,s,q,q))
r=[]
if(u)for(;t.v();)r.push(t.gG(t))
else for(s=b;s<c;++s){if(!t.v())throw H.d(P.Y(c,b,s,q,q))
r.push(t.gG(t))}return H.l4(r)},
mR:function(a){return new H.fJ(a,H.mt(a,!1,!0,!1,!1,!1))},
l9:function(a,b,c){var u=J.aY(b)
if(!u.v())return a
if(c.length===0){do a+=H.e(u.gG(u))
while(u.v())}else{a+=H.e(u.gG(u))
for(;u.v();)a=a+c+H.e(u.gG(u))}return a},
lf:function(){var u=H.mF()
if(u!=null)return P.n0(u)
throw H.d(P.x("'Uri.base' is not supported"))},
et:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.m3().b
if(typeof b!=="string")H.t(H.an(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghB().bU(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bz(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
ml:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mm:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cN:function(a){if(a>=10)return""+a
return"0"+a},
kS:function(a){return new P.b0(1000*a)},
kb:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a3(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mo(a)},
cF:function(a){return new P.ak(!1,null,null,a)},
kM:function(a,b,c){return new P.ak(!0,a,b,c)},
hB:function(a,b){return new P.bA(null,null,!0,a,b,"Value not in range")},
Y:function(a,b,c,d,e){return new P.bA(b,c,!0,a,d,"Invalid value")},
ba:function(a,b,c){if(0>a||a>c)throw H.d(P.Y(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.Y(b,a,c,"end",null))
return b}return c},
l5:function(a,b){if(typeof a!=="number")return a.O()
if(a<0)throw H.d(P.Y(a,0,null,b,null))},
K:function(a,b,c,d,e){var u=e==null?J.ad(b):e
return new P.fy(u,!0,a,c,"Index out of range")},
x:function(a){return new P.iA(a)},
ix:function(a){return new P.iw(a)},
l8:function(a){return new P.ca(a)},
as:function(a){return new P.f_(a)},
r:function(a){return new P.dR(a)},
Q:function(a,b,c){return new P.fq(a,b,c)},
mz:function(a,b,c){var u,t,s=H.c([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.b(s,u)
s[u]=t}return s},
kF:function(a){H.on(a)},
n0:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.C(a,4)^58)*3|C.a.C(a,0)^100|C.a.C(a,1)^97|C.a.C(a,2)^116|C.a.C(a,3)^97)>>>0
if(u===0)return P.le(e<e?C.a.p(a,0,e):a,5,f).ge5()
else if(u===32)return P.le(C.a.p(a,5,e),0,f).ge5()}t=new Array(8)
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
if(P.lz(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.iq()
if(r>=0)if(P.lz(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.B()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.O()
if(typeof n!=="number")return H.v(n)
if(m<n)n=m
if(typeof o!=="number")return o.O()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.O()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.O()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.a4(a,"..",o)))j=n>o+2&&C.a.a4(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.a4(a,"file",0)){if(q<=0){if(!C.a.a4(a,"/",o)){i="file:///"
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
a=C.a.aU(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a4(a,"http",0)){if(t&&p+3===o&&C.a.a4(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aU(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a4(a,"https",0)){if(t&&p+4===o&&C.a.a4(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aU(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.p(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jk(a,r,q,p,o,n,m,k)}return P.ni(a,0,e,r,q,p,o,n,m,k)},
lh:function(a){var u=P.j
return C.b.hH(H.c(a.split("&"),[u]),P.ki(u,u),new P.iF(C.e))},
n_:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iC(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.X(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.cB(C.a.p(a,s,t),n,n)
if(typeof p!=="number")return p.a0()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.b(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.cB(C.a.p(a,s,c),n,n)
if(typeof p!=="number")return p.a0()
if(p>255)k.$2(l,s)
if(r>=u)return H.b(j,r)
j[r]=p
return j},
lg:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iD(a),d=new P.iE(e,a)
if(a.length<2)e.$1("address is too short")
u=H.c([],[P.w])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.X(a,t)
if(p===58){if(t===b){++t
if(C.a.X(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gaq(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.n_(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.b(l,i)
l[i]=0
f=i+1
if(f>=k)return H.b(l,f)
l[f]=0
i+=2}else{f=C.c.aP(h,8)
if(i<0||i>=k)return H.b(l,i)
l[i]=f
f=i+1
if(f>=k)return H.b(l,f)
l[f]=h&255
i+=2}}return l},
ni:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nq(a,b,d)
else{if(d===b)P.bG(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nr(a,u,e-1):""
s=P.nn(a,e,f,!1)
if(typeof f!=="number")return f.B()
r=f+1
if(typeof g!=="number")return H.v(g)
q=r<g?P.np(P.cB(C.a.p(a,r,g),new P.jw(a,f),n),j):n}else{q=n
s=q
t=""}p=P.no(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.O()
o=h<i?P.ku(a,h+1,i,n):n
return new P.bF(j,t,s,q,p,o,i<c?P.nm(a,i+1,c):n)},
lr:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bG:function(a,b,c){throw H.d(P.Q(c,a,b))},
np:function(a,b){if(a!=null&&a===P.lr(b))return
return a},
nn:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.X(a,b)===91){if(typeof c!=="number")return c.K()
u=c-1
if(C.a.X(a,u)!==93)P.bG(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nk(a,t,u)
if(typeof s!=="number")return s.O()
if(s<u){r=s+1
q=P.lw(a,C.a.a4(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lg(a,t,s)
return C.a.p(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.v(c)
p=b
for(;p<c;++p)if(C.a.X(a,p)===58){s=C.a.bj(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lw(a,C.a.a4(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lg(a,b,s)
return"["+C.a.p(a,b,s)+q+"]"}return P.nt(a,b,c)},
nk:function(a,b,c){var u,t=C.a.bj(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.v(c)
u=t<c}else u=!1
return u?t:c},
lw:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.S(d):null
if(typeof c!=="number")return H.v(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.X(a,u)
if(r===37){q=P.kv(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.S("")
o=l.a+=C.a.p(a,t,u)
if(p)q=C.a.p(a,u,u+3)
else if(q==="%")P.bG(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.S("")
if(t<u){l.a+=C.a.p(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.X(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.S("")
l.a+=C.a.p(a,t,u)
l.a+=P.kt(r)
u+=m
t=u}}}if(l==null)return C.a.p(a,b,c)
if(t<c)l.a+=C.a.p(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
nt:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.v(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.X(a,u)
if(q===37){p=P.kv(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.S("")
n=C.a.p(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.p(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.b(C.y,o)
o=(C.y[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.S("")
if(t<u){s.a+=C.a.p(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.b(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bG(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.X(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.S("")
n=C.a.p(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kt(q)
u+=l
t=u}}}}if(s==null)return C.a.p(a,b,c)
if(t<c){n=C.a.p(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nq:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lt(C.a.C(a,b)))P.bG(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.C(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.b(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bG(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.p(a,b,c)
return P.nj(t?a.toLowerCase():a)},
nj:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nr:function(a,b,c){return P.cu(a,b,c,C.V,!1)},
no:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cu(a,b,c,C.z,!0):C.j.iE(d,new P.jx(),P.j).k(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a1(u,"/"))u="/"+u
return P.ns(u,e,f)},
ns:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a1(a,"/"))return P.nu(a,!u||c)
return P.nv(a)},
ku:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.d(P.cF("Both query and queryParameters specified"))
return P.cu(a,b,c,C.l,!0)}if(d==null)return
u=new P.S("")
t.a=""
d.u(0,new P.jy(new P.jz(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nm:function(a,b,c){return P.cu(a,b,c,C.l,!0)},
kv:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.X(a,b+1)
t=C.a.X(a,p)
s=H.jQ(u)
r=H.jQ(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aP(q,4)
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bz(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.p(a,b,b+3).toUpperCase()
return},
kt:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.c(u,[P.w])
t[0]=37
t[1]=C.a.C(m,a>>>4)
t[2]=C.a.C(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.c(u,[P.w])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.h4(a,6*r)&63|s
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
cu:function(a,b,c,d,e){var u=P.lv(a,b,c,d,e)
return u==null?C.a.p(a,b,c):u},
lv:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.O()
if(typeof c!=="number")return H.v(c)
if(!(o<c))break
c$0:{u=C.a.X(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.b(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kv(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.b(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bG(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.X(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kt(u)}}if(m==null)m=new P.S("")
m.a+=C.a.p(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.v(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.O()
if(n<c)m.a+=C.a.p(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lu:function(a){if(C.a.a1(a,"."))return!0
return C.a.dE(a,"/.")!==-1},
nv:function(a){var u,t,s,r,q,p,o
if(!P.lu(a))return a
u=H.c([],[P.j])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.D(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.b(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.k(u,"/")},
nu:function(a,b){var u,t,s,r,q,p
if(!P.lu(a))return!b?P.ls(a):a
u=H.c([],[P.j])
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
t=P.ls(u[0])
if(0>=u.length)return H.b(u,0)
u[0]=t}return C.b.k(u,"/")},
ls:function(a){var u,t,s,r=a.length
if(r>=2&&P.lt(J.m5(a,0)))for(u=1;u<r;++u){t=C.a.C(a,u)
if(t===58)return C.a.p(a,0,u)+"%3A"+C.a.a8(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.b(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nl:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.C(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.cF("Invalid URL encoding"))}}return u},
kw:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.C(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.p(a,b,c)
else r=new H.m(C.a.p(a,b,c))}else{r=H.c([],[P.w])
for(s=a.length,q=b;q<c;++q){t=C.a.C(a,q)
if(t>127)throw H.d(P.cF("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.cF("Truncated URI"))
r.push(P.nl(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iI(!1).bU(r)},
lt:function(a){var u=a|32
return 97<=u&&u<=122},
le:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.w])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.C(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.Q(m,a,t))}}if(s<0&&t>b)throw H.d(P.Q(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.C(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gaq(l)
if(r!==44||t!==p+7||!C.a.a4(a,"base64",p+1))throw H.d(P.Q("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.E.hS(0,a,o,u)
else{n=P.lv(a,o,u,C.l,!0)
if(n!=null)a=C.a.aU(a,o,u,n)}return new P.iB(a,l,c)},
nx:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.mz(22,new P.jH(),P.bC),n=new P.jG(o),m=new P.jI(),l=new P.jJ(),k=n.$2(0,225)
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
lz:function(a,b,c,d,e){var u,t,s,r,q,p=$.m4()
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
aE:function aE(){},
a7:function a7(a,b){this.a=a
this.b=b},
M:function M(){},
b0:function b0(a){this.a=a},
fd:function fd(){},
fe:function fe(){},
bp:function bp(){},
dd:function dd(){},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bA:function bA(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fy:function fy(a,b,c,d,e){var _=this
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
dm:function dm(){},
f7:function f7(a){this.a=a},
dR:function dR(a){this.a=a},
fq:function fq(a,b,c){this.a=a
this.b=b
this.c=c},
fs:function fs(){},
w:function w(){},
i:function i(){},
fH:function fH(){},
o:function o(){},
R:function R(){},
b7:function b7(){},
ac:function ac(){},
a0:function a0(){},
j:function j(){},
S:function S(a){this.a=a},
iF:function iF(a){this.a=a},
iC:function iC(a){this.a=a},
iD:function iD(a){this.a=a},
iE:function iE(a,b){this.a=a
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
jw:function jw(a,b){this.a=a
this.b=b},
jx:function jx(){},
jz:function jz(a,b){this.a=a
this.b=b},
jy:function jy(a){this.a=a},
iB:function iB(a,b,c){this.a=a
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
o6:function(a){var u,t=J.O(a)
if(!!t.$iaJ){u=t.gda(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.er(a.data,a.height,a.width)},
o5:function(a){if(a instanceof P.er)return{data:a.a,height:a.b,width:a.c}
return a},
aV:function(a){var u,t,s,r,q
if(a==null)return
u=P.ki(P.j,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
o4:function(a){var u={}
a.u(0,new P.jN(u))
return u},
jm:function jm(){},
jo:function jo(a,b){this.a=a
this.b=b},
er:function er(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function jN(a){this.a=a},
jn:function jn(a,b){this.a=a
this.b=b},
fm:function fm(a,b){this.a=a
this.b=b},
fn:function fn(){},
fo:function fo(){},
j9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ne:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jc:function jc(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b4:function b4(){},
fM:function fM(){},
b8:function b8(){},
hr:function hr(){},
hz:function hz(){},
c8:function c8(){},
i_:function i_(){},
k:function k(){},
bb:function bb(){},
il:function il(){},
dW:function dW(){},
dX:function dX(){},
e6:function e6(){},
e7:function e7(){},
ei:function ei(){},
ej:function ej(){},
ep:function ep(){},
eq:function eq(){},
bC:function bC(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(a){this.a=a},
eR:function eR(){},
bj:function bj(){},
hs:function hs(){},
dK:function dK(){},
di:function di(){},
hV:function hV(){},
ee:function ee(){},
ef:function ef(){}},W={
kL:function(){var u=document.createElement("a")
return u},
k5:function(){var u=document.createElement("canvas")
return u},
mn:function(a,b,c){var u=document.body,t=(u&&C.r).ad(u,a,b,c)
t.toString
u=new H.ci(new W.a2(t),new W.fg(),[W.C])
return u.gaH(u)},
k8:function(a){return"wheel"},
bS:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bM(a)
t=u.ge1(a)
if(typeof t==="string")r=u.ge1(a)}catch(s){H.aj(s)}return r},
kV:function(a){var u=document.createElement("img")
if(a!=null)u.src=a
return u},
j8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lp:function(a,b,c,d){var u=W.j8(W.j8(W.j8(W.j8(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
V:function(a,b,c,d){var u=W.lB(new W.j6(c),W.h)
if(u!=null&&!0)J.m7(a,b,u,!1)
return new W.j5(a,b,u,!1)},
lo:function(a){var u=W.kL(),t=window.location
u=new W.ck(new W.jg(u,t))
u.eq(a)
return u},
nc:function(a,b,c,d){return!0},
nd:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
lq:function(){var u=P.j,t=P.kX(C.o,u),s=H.c(["TEMPLATE"],[u])
t=new W.jr(t,P.d2(u),P.d2(u),P.d2(u),null)
t.ev(null,new H.fZ(C.o,new W.js(),[H.eG(C.o,0),u]),s,null)
return t},
lB:function(a,b){var u=$.am
if(u===C.f)return a
return u.d6(a,b)},
n:function n(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
bk:function bk(){},
bl:function bl(){},
bn:function bn(){},
aZ:function aZ(){},
f3:function f3(){},
H:function H(){},
bR:function bR(){},
f4:function f4(){},
ae:function ae(){},
at:function at(){},
f5:function f5(){},
f6:function f6(){},
f9:function f9(){},
al:function al(){},
fa:function fa(){},
cP:function cP(){},
cQ:function cQ(){},
fb:function fb(){},
fc:function fc(){},
j1:function j1(a,b){this.a=a
this.b=b},
P:function P(){},
fg:function fg(){},
h:function h(){},
f:function f(){},
au:function au(){},
bT:function bT(){},
fl:function fl(){},
fp:function fp(){},
aI:function aI(){},
fv:function fv(){},
bV:function bV(){},
aJ:function aJ(){},
bs:function bs(){},
bw:function bw(){},
fS:function fS(){},
hc:function hc(){},
c_:function c_(){},
hd:function hd(){},
he:function he(a){this.a=a},
hf:function hf(){},
hg:function hg(a){this.a=a},
aM:function aM(){},
hh:function hh(){},
ax:function ax(){},
a2:function a2(a){this.a=a},
C:function C(){},
db:function db(){},
aP:function aP(){},
hw:function hw(){},
hG:function hG(){},
hH:function hH(a){this.a=a},
hJ:function hJ(){},
aQ:function aQ(){},
hS:function hS(){},
aR:function aR(){},
hT:function hT(){},
aS:function aS(){},
hX:function hX(){},
hY:function hY(a){this.a=a},
ay:function ay(){},
dq:function dq(){},
i0:function i0(){},
i1:function i1(){},
cc:function cc(){},
aT:function aT(){},
az:function az(){},
i4:function i4(){},
i5:function i5(){},
ie:function ie(){},
aU:function aU(){},
bB:function bB(){},
ij:function ij(){},
ik:function ik(){},
bc:function bc(){},
iG:function iG(){},
iV:function iV(){},
be:function be(){},
cj:function cj(){},
j2:function j2(){},
dM:function dM(){},
j7:function j7(){},
e3:function e3(){},
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
ck:function ck(a){this.a=a},
J:function J(){},
dc:function dc(a){this.a=a},
hp:function hp(a){this.a=a},
ho:function ho(a,b,c){this.a=a
this.b=b
this.c=c},
eb:function eb(){},
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
cU:function cU(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aO:function aO(){},
jg:function jg(a,b){this.a=a
this.b=b},
eu:function eu(a){this.a=a},
jC:function jC(a){this.a=a},
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
cq:function cq(){},
cr:function cr(){},
ec:function ec(){},
ed:function ed(){},
eh:function eh(){},
ek:function ek(){},
el:function el(){},
cs:function cs(){},
ct:function ct(){},
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
L:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.d(P.r("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.C(a,0)
t=C.a.C(b,0)
s=new T.hA()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
p:function(a){var u=new T.hK()
u.en(a)
return u},
aF:function aF(){},
cV:function cV(){},
b5:function b5(){},
a5:function a5(){this.a=null},
hA:function hA(){this.b=this.a=null},
hK:function hK(){this.a=null},
ds:function ds(){},
i6:function i6(){},
ia:function ia(){var _=this
_.y=_.d=_.c=_.b=_.a=null},
ib:function ib(a){var _=this
_.a=a
_.e=_.d=_.b=null},
ic:function ic(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},R={
ih:function(){var u=new R.ig(),t=P.j
u.a=new H.N([t,R.dn])
u.b=new H.N([t,R.dw])
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
ig:function ig(){this.c=this.b=this.a=null},
dy:function dy(a){this.b=a
this.a=this.c=null}},O={
k6:function(a){var u=new O.b_([a])
u.bv(a)
return u},
b_:function b_(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bZ:function bZ(){this.b=this.a=null},
cW:function cW(){var _=this
_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fE:function fE(a,b){this.a=a
this.b=b},
fD:function fD(a){this.a=a},
fF:function fF(a,b){this.a=a
this.b=b},
fG:function fG(a,b){this.a=a
this.b=b},
fC:function fC(a,b){this.a=a
this.b=b},
fB:function fB(a,b){this.a=a
this.b=b},
fA:function fA(a){this.a=a},
d5:function d5(){var _=this
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
bY:function bY(){},
h1:function h1(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
av:function av(a,b){var _=this
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
dr:function dr(){}},E={
ka:function(){var u,t=new E.aH()
t.a=""
t.b=!0
u=O.k6(E.aH)
t.y=u
u.ba(t.ghT(),t.ghW())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbs(0,null)
t.scg(null)
t.sb4(null)
return t},
mS:function(a,b){var u=new E.hC(a)
u.em(a,b)
return u},
mY:function(a,b,c,d,e){var u,t,s=J.O(a)
if(!!s.$ibn)return E.la(a,!0,!0,!0,!1)
u=W.k5()
t=u.style
t.width="100%"
t.height="100%"
s.gbT(a).n(0,u)
return E.la(u,!0,!0,!0,!1)},
la:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dt(),p=C.i.cm(a,"webgl2",P.mx(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.t(P.r("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.mS(p,a)
u=new T.ib(p)
u.b=p.getParameter(3379)
p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dD(a)
t=new X.fL()
t.c=new X.af(!1,!1,!1)
t.d=P.d2(P.w)
u.b=t
t=new X.hi(u)
t.f=0
t.r=V.b9()
t.x=V.b9()
t.ch=t.Q=1
u.c=t
t=new X.fT(u)
t.r=0
t.x=V.b9()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ii(u)
t.f=V.b9()
t.r=V.b9()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.c([],[[P.dp,P.a0]])
u.z=t
s=document
t.push(W.V(s,"contextmenu",u.gfd(),!1))
u.z.push(W.V(a,"focus",u.gfj(),!1))
u.z.push(W.V(a,"blur",u.gf7(),!1))
u.z.push(W.V(s,"keyup",u.gfn(),!1))
u.z.push(W.V(s,"keydown",u.gfl(),!1))
u.z.push(W.V(a,"mousedown",u.gfs(),!1))
u.z.push(W.V(a,"mouseup",u.gfw(),!1))
u.z.push(W.V(a,r,u.gfu(),!1))
t=u.z
W.k8(a)
W.k8(a)
t.push(W.V(a,W.k8(a),u.gfA(),!1))
u.z.push(W.V(s,r,u.gff(),!1))
u.z.push(W.V(s,"mouseup",u.gfh(),!1))
u.z.push(W.V(s,"pointerlockchange",u.gfC(),!1))
u.z.push(W.V(a,"touchstart",u.gfP(),!1))
u.z.push(W.V(a,"touchend",u.gfL(),!1))
u.z.push(W.V(a,"touchmove",u.gfN(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.a7(Date.now(),!1)
q.db=0
q.cS()
return q},
eU:function eU(){},
aH:function aH(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hC:function hC(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hD:function hD(a){this.a=a},
hE:function hE(a){this.a=a},
hF:function hF(a){this.a=a},
dt:function dt(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
id:function id(a){this.a=a}},Z={
kr:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bH(c)),35044)
a.bindBuffer(b,null)
return new Z.dH(b,u)},
ai:function(a){return new Z.aC(a)},
dH:function dH(a,b){this.a=a
this.b=b},
cH:function cH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dI:function dI(a){this.a=a},
bm:function bm(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
cI:function cI(){this.a=null},
bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},
aC:function aC(a){this.a=a}},D={
E:function(){var u=new D.bq()
u.d=0
return u},
eX:function eX(){},
bq:function bq(){var _=this
_.d=_.c=_.b=_.a=null},
fj:function fj(a){this.a=a},
fk:function fk(a){this.a=a},
X:function X(){this.b=null},
bu:function bu(){this.b=null},
bv:function bv(){this.b=null},
z:function z(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
bo:function bo(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a8:function a8(){},
d1:function d1(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
hx:function hx(){},
hU:function hU(){}},X={cJ:function cJ(a,b){this.a=a
this.b=b},d0:function d0(a,b){this.a=a
this.b=b},fL:function fL(){var _=this
_.d=_.c=_.b=_.a=null},d4:function d4(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fT:function fT(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},af:function af(a,b,c){this.a=a
this.b=b
this.c=c},aN:function aN(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hi:function hi(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c0:function c0(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hy:function hy(){},dx:function dx(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ii:function ii(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dD:function dD(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mp:function(a){var u=new X.fr(),t=new V.T(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.l7
if(t==null){t=V.l6(0,0,1,1)
$.l7=t}u.r=t
return u},
k4:function k4(){},
fr:function fr(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
de:function de(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
i2:function i2(){}},V={
cL:function(a){if(a<0)a=0
else if(a>1)a=1
return new V.T(a,a,a,1)},
ow:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.b8(a-b,u)
return(a<0?a+u:a)+b},
G:function(a,b,c){if(a==null)return C.a.ag("null",c)
return C.a.ag(C.d.e2(Math.abs(a-0)<$.A().a?0:a,b),c+b+1)},
bL:function(a,b,c){var u,t,s,r,q,p,o=H.c([],[P.j])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.q)(a),++s){r=V.G(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.b(o,q)
u=C.a.ag(o[q],t)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=u}return o},
kE:function(a){return C.d.ik(Math.pow(2,C.R.c2(Math.log(H.o3(a))/Math.log(2))))},
d7:function(){var u=$.kZ
return u==null?$.kZ=V.aw(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aw:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kY:function(a,b,c){var u=c.A(0,Math.sqrt(c.H(c))),t=b.b2(u),s=t.A(0,Math.sqrt(t.H(t))),r=u.b2(s),q=new V.B(a.a,a.b,a.c),p=s.R(0).H(q),o=r.R(0).H(q),n=u.R(0).H(q)
return V.aw(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
b9:function(){var u=$.l1
return u==null?$.l1=new V.ag(0,0):u},
l2:function(){var u=$.c5
return u==null?$.c5=new V.aa(0,0,0):u},
l6:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dh(a,b,c,d)},
aB:function(){var u=$.ll
return u==null?$.ll=new V.B(0,0,0):u},
ln:function(){var u=$.lk
return u==null?$.lk=new V.B(1,0,0):u},
n6:function(){var u=$.iK
return u==null?$.iK=new V.B(-1,0,0):u},
kp:function(){var u=$.iL
return u==null?$.iL=new V.B(0,1,0):u},
n7:function(){var u=$.iM
return u==null?$.iM=new V.B(0,0,1):u},
lm:function(){var u=$.lj
return u==null?$.lj=new V.B(0,0,-1):u},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
T:function T(a,b,c,d){var _=this
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
aL:function aL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ag:function ag(a,b){this.a=a
this.b=b},
aa:function aa(a,b,c){this.a=a
this.b=b
this.c=c},
df:function df(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dh:function dh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
F:function F(a,b){this.a=a
this.b=b},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
oq:function(a){P.mZ(C.O,new V.jY(a))},
mU:function(a){var u=new V.hO()
u.eo(a,!0)
return u},
cK:function cK(){},
jY:function jY(a){this.a=a},
f8:function f8(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ft:function ft(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fu:function fu(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hv:function hv(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hO:function hO(){this.b=this.a=null},
hQ:function hQ(a){this.a=a},
hP:function hP(a){this.a=a},
hR:function hR(a){this.a=a},
i7:function i7(a,b){this.a=a
this.c=null
this.d=b},
i9:function i9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i8:function i8(){}},U={
k7:function(){var u=new U.eZ()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
kR:function(a){var u=new U.cM()
u.a=a
return u},
eZ:function eZ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cM:function cM(){this.b=this.a=null},
bU:function bU(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a9:function a9(){},
dE:function dE(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dF:function dF(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dG:function dG(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cR:function cR(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
mA:function(a,b){var u=a.az,t=new A.h_(b,u)
t.ct(b,u)
t.el(a,b)
return t},
mB:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gam(a0)+a1.gam(a1)+a2.gam(a2)+a3.gam(a3)+a4.gam(a4)+a5.gam(a5)+a6.gam(a6)+a7.gam(a7)+a8.gam(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.q)(a9),++t)f+="_"+H.e(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.q)(b0),++t)f+="_"+H.e(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.q)(b1),++t)f+="_"+H.e(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.aq()
if(l){u=$.ap()
g=new Z.aC(g.a|u.a)}if(k){u=$.ao()
g=new Z.aC(g.a|u.a)}if(j){u=$.aX()
g=new Z.aC(g.a|u.a)}if(i){u=$.aW()
g=new Z.aC(g.a|u.a)}return new A.h2(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,m,p,r,h,!0,!1,!1,o,r,n,l,k,j,!1,i,a,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
jK:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
jL:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.jK(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.k_(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
nD:function(a,b){var u,t=a.a,s=t.a
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
nA:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jL(b,t,"ambient")
b.a+="\n"},
nB:function(a,b){var u,t=a.c
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
nE:function(a,b){var u,t=a.d
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
nK:function(a,b){var u,t=a.e
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
nG:function(a,b){var u,t,s
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
nI:function(a,b){var u,t=a.r,s=t.a
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
nJ:function(a,b){var u,t=a.x,s=t.a
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
nC:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.k_(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ah()
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
nH:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.k_(t)
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
if(typeof u!=="number")return u.ah()
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
nL:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.k_(t)
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
if(typeof u!=="number")return u.ah()
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
nF:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.j])
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
nM:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.S("")
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
A.nD(a,j)
A.nA(a,j)
A.nB(a,j)
A.nE(a,j)
A.nK(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.nI(a,j)
A.nJ(a,j)}A.nG(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.nC(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.nH(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.nL(a,q[o],j)
A.nF(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.c([],[P.j])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a8(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a8(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a8(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
nN:function(a,b){var u,t,s
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
nP:function(a,b){var u
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
nO:function(a,b){var u
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
nR:function(a,b){var u,t
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
nS:function(a,b){var u,t
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
nQ:function(a,b){var u
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
nT:function(a,b){var u
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
k_:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.a8(a,1)},
km:function(a,b,c,d,e){var u=new A.ip(a,c,e)
u.f=d
P.my(d,0,P.w)
return u},
cG:function cG(a,b,c){this.a=a
this.b=b
this.c=c},
eN:function eN(a){this.a=a},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
fz:function fz(a,b){var _=this
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h_:function h_(a,b){var _=this
_.iv=_.dg=_.df=_.de=_.az=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iD=_.iC=_.iB=_.c1=_.c0=_.c_=_.bZ=_.bY=_.bX=_.iA=_.du=_.dt=_.iz=_.ds=_.dr=_.dq=_.iy=_.dn=_.dm=_.dl=_.ix=_.dk=_.dj=_.iw=_.di=_.dh=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cO:function cO(a,b){this.a=a
this.b=b},
dg:function dg(a,b){this.a=a
this.b=b},
dl:function dl(a,b){this.a=a
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
_.az=b3
_.de=b4},
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
dj:function dj(){},
dz:function dz(){},
iu:function iu(a){this.a=a},
dA:function dA(a,b,c){this.a=a
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
I:function I(a,b,c){this.a=a
this.c=b
this.d=c},
bd:function bd(a,b,c){this.a=a
this.c=b
this.d=c},
iv:function iv(a,b,c){this.a=a
this.c=b
this.d=c},
ce:function ce(a,b,c){this.a=a
this.c=b
this.d=c},
a1:function a1(a,b,c){this.a=a
this.c=b
this.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
bD:function bD(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jF:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cv:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.B(h,g+a1,f+a2)
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
j.d=i}m=F.jF(i)
l=F.jF(j.b)
k=F.ot(d,a0,new F.jE(j,F.jF(j.c),F.jF(j.d),l,m,c),b)
if(k!=null)a.hR(k)},
ot:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=F.c9()
t=H.c([],[F.ch])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.d1(new V.T(p,0,0,1),new V.ag(r,1))
c.$3(o,r,0)
t.push(o.bV(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.d1(new V.T(j,i,h,1),new V.ag(r,m))
c.$3(o,r,n)
t.push(o.bV(d))}}u.d.hf(a+1,b+1,t)
return u},
cS:function(a,b,c){var u=new F.br(),t=a.a
if(t==null)H.t(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.r("May not create a face with vertices attached to different shapes."))
u.a=a
a.d.b.push(u)
u.b=b
b.d.c.push(u)
u.c=c
c.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.Y()
return u},
mu:function(a,b){var u,t=new F.bx()
if(a==null)H.t(P.r("May not create a line with a null start vertex."))
if(b==null)H.t(P.r("May not create a line with a null end vertex."))
u=a.a
if(u==null)H.t(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(u!=b.a)H.t(P.r("May not create a line with vertices attached to different shapes."))
t.a=a
a.c.b.push(t)
t.b=b
b.c.c.push(t)
t.a.a.c.b.push(t)
t.a.a.Y()
return t},
mD:function(a){var u=new F.c4()
if(a.a==null)H.t(P.r("May not create a point with a vertex which is not attached to a shape."))
u.a=a
a.b.b.push(u)
u.a.a.b.b.push(u)
u.a.a.Y()
return u},
c9:function(){var u=new F.ah(),t=new F.iN(u)
t.b=!1
t.c=H.c([],[F.ch])
u.a=t
t=new F.hN(u)
t.b=H.c([],[F.c4])
u.b=t
t=new F.hM(u)
t.b=H.c([],[F.bx])
u.c=t
t=new F.hL(u)
t.b=H.c([],[F.br])
u.d=t
u.e=null
return u},
kq:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ch(),r=new F.iS()
r.b=H.c([],[F.c4])
s.b=r
r=new F.iR()
u=[F.bx]
r.b=H.c([],u)
r.c=H.c([],u)
s.c=r
r=new F.iO()
u=[F.br]
r.b=H.c([],u)
r.c=H.c([],u)
r.d=H.c([],u)
s.d=r
h=$.lZ()
s.e=0
r=$.aq()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.ap().a)!==0?e:t
s.x=(u&$.ao().a)!==0?b:t
s.y=(u&$.aX().a)!==0?f:t
s.z=(u&$.bi().a)!==0?g:t
s.Q=(u&$.m_().a)!==0?c:t
s.ch=(u&$.bN().a)!==0?i:0
s.cx=(u&$.aW().a)!==0?a:t
return s},
jE:function jE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
br:function br(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bx:function bx(){this.b=this.a=null},
c4:function c4(){this.a=null},
ah:function ah(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hL:function hL(a){this.a=a
this.b=null},
hM:function hM(a){this.a=a
this.b=null},
hN:function hN(a){this.a=a
this.b=null},
ch:function ch(){var _=this
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
iS:function iS(){this.b=null}},N={
lH:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="testCanvas",a=null,a0="bumpMaps",a1="modifiers",a2=V.mU("Test 006"),a3=W.k5()
a3.className="pageLargeCanvas"
a3.id=b
a2.a.appendChild(a3)
u=[P.j]
a2.d3(H.c(["A test of the Material Lighting shader with a bumpy 2D texture and ","a directional light. Select different bump maps for the test. ","The additional lines are part of shape inspection."],u))
a2.hd(H.c(["bumpMaps"],u))
a2.d3(H.c(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b)
if(t==null)H.t(P.r("Failed to find an element with the identifier, testCanvas."))
s=E.mY(t,!0,!0,!0,!1)
r=F.c9()
F.cv(r,a,a,1,1,1,0,0,1)
F.cv(r,a,a,1,1,0,1,0,3)
F.cv(r,a,a,1,1,0,0,1,2)
F.cv(r,a,a,1,1,-1,0,0,0)
F.cv(r,a,a,1,1,0,-1,0,0)
F.cv(r,a,a,1,1,0,0,-1,3)
r.ay()
q=new O.d5()
p=O.k6(V.aL)
q.e=p
p.ba(q.gf3(),q.gf5())
p=new O.av(q,"emission")
p.c=new A.Z(!1,!1,!1)
p.f=new V.W(0,0,0)
q.f=p
p=new O.av(q,"ambient")
p.c=new A.Z(!1,!1,!1)
p.f=new V.W(0,0,0)
q.r=p
p=new O.av(q,"diffuse")
p.c=new A.Z(!1,!1,!1)
p.f=new V.W(0,0,0)
q.x=p
p=new O.av(q,"invDiffuse")
p.c=new A.Z(!1,!1,!1)
p.f=new V.W(0,0,0)
q.y=p
p=new O.h5(q,"specular")
p.c=new A.Z(!1,!1,!1)
p.f=new V.W(0,0,0)
p.ch=100
q.z=p
p=new O.h1(q,"bump")
p.c=new A.Z(!1,!1,!1)
q.Q=p
q.ch=null
p=new O.av(q,"reflect")
p.c=new A.Z(!1,!1,!1)
p.f=new V.W(0,0,0)
q.cx=p
p=new O.h4(q,"refract")
p.c=new A.Z(!1,!1,!1)
p.f=new V.W(0,0,0)
p.ch=1
q.cy=p
p=new O.h0(q,"alpha")
p.c=new A.Z(!1,!1,!1)
p.f=1
q.db=p
p=new D.d1()
p.bv(D.a8)
p.e=H.c([],[D.bo])
p.f=H.c([],[D.hx])
p.r=H.c([],[D.hU])
p.y=p.x=null
p.co(p.gf1(),p.gfF(),p.gfJ())
q.dx=p
o=new O.h3()
o.b=new V.T(0,0,0,0)
o.c=1
o.d=10
o.e=!1
q.dy=o
o=p.x
p=o==null?p.x=D.E():o
p.n(0,q.gfW())
p=q.dx
o=p.y
p=o==null?p.y=D.E():o
p.n(0,q.gbd())
q.fr=null
p=q.dx
n=V.kp()
o=U.kR(V.kY(V.l2(),n,new V.B(0,0,-1)))
m=new V.W(1,1,1)
l=new D.bo()
l.c=new V.W(1,1,1)
l.a=V.n7()
l.d=V.kp()
l.e=V.n6()
k=l.b
l.b=o
o.gt().n(0,l.ger())
o=new D.z("mover",k,l.b)
o.b=!0
l.ar(o)
if(!l.c.q(0,m)){k=l.c
l.c=m
o=new D.z("color",k,m)
o.b=!0
l.ar(o)}p.n(0,l)
p=q.r
p.sa9(0,new V.W(0,0,1))
p=q.x
p.sa9(0,new V.W(0,1,0))
p=q.z
p.sa9(0,new V.W(1,0,0))
p=q.z
p.bO(new A.Z(!0,p.c.b,!1))
p.cU(10)
j=E.ka()
j.sbs(0,r)
j.scg(q)
i=E.ka()
i.sbs(0,r)
p=new O.cW()
p.b=V.lm()
p.c=new V.T(0.2,0.3,0.4,1)
p.d=new V.T(0.1,0.2,0.3,1)
p.e=V.cL(0.7)
p.f=V.cL(0.3)
p.r=V.cL(0.5)
p.x=V.cL(0.5)
p.y=new V.T(1,1,1,1)
p.z=V.cL(0.8)
p.r1=p.k4=p.k3=p.k2=p.k1=p.id=p.go=p.fy=p.fx=p.fr=p.dy=p.dx=p.db=p.cy=p.cx=p.ch=p.Q=!1
p.r2=1
if(!(Math.abs(0.6)<$.A().a)){p.r2=0.4
o=new D.z("vectorScale",1,0.4)
o.b=!0
p.T(o)}if(!p.ch){p.ch=!0
o=new D.z("showWireFrame",!1,!0)
o.b=!0
p.T(o)}if(!p.k3){p.k3=!0
o=new D.z("showAxis",!1,!0)
o.b=!0
p.T(o)}if(!p.cy){p.cy=!0
o=new D.z("showNormals",!1,!0)
o.b=!0
p.T(o)}if(!p.db){p.db=!0
o=new D.z("showBinormals",!1,!0)
o.b=!0
p.T(o)}i.scg(p)
h=E.ka()
h.y.n(0,i)
h.y.n(0,j)
p=new U.bU()
p.bv(U.a9)
p.ba(p.gf_(),p.gfH())
p.e=null
p.f=V.d7()
p.r=0
o=s.x
l=new U.dF()
g=U.k7()
g.scl(0,!0)
g.sc8(6.283185307179586)
g.sca(0)
g.saa(0,0)
g.sc9(100)
g.sW(0)
g.sbW(0.5)
l.b=g
f=l.gaJ()
g.gt().n(0,f)
g=U.k7()
g.scl(0,!0)
g.sc8(6.283185307179586)
g.sca(0)
g.saa(0,0)
g.sc9(100)
g.sW(0)
g.sbW(0.5)
l.c=g
g.gt().n(0,f)
l.d=null
l.r=l.f=l.e=!1
l.y=l.x=2.5
l.Q=4
l.ch=l.cx=!1
l.db=l.cy=0
l.dx=null
l.dy=0
l.fx=l.fr=null
e=new X.af(!1,!1,!1)
k=l.d
l.d=e
g=new D.z(a1,k,e)
g.b=!0
l.P(g)
g=l.f
if(g!==!1){l.f=!1
g=new D.z("invertX",g,!1)
g.b=!0
l.P(g)}g=l.r
if(g!==!0){l.r=!0
g=new D.z("invertY",g,!0)
g.b=!0
l.P(g)}l.b0(o)
p.n(0,l)
o=s.x
l=new U.dE()
g=U.k7()
g.scl(0,!0)
g.sc8(6.283185307179586)
g.sca(0)
g.saa(0,0)
g.sc9(100)
g.sW(0)
g.sbW(0.2)
l.b=g
g.gt().n(0,l.gaJ())
l.c=null
l.d=!1
l.e=2.5
l.r=4
l.x=l.y=!1
l.z=0
l.Q=null
l.ch=0
l.cy=l.cx=null
e=new X.af(!0,!1,!1)
k=l.c
l.c=e
g=new D.z(a1,k,e)
g.b=!0
l.P(g)
l.b0(o)
p.n(0,l)
o=s.x
l=new U.dG()
l.c=0.01
l.e=l.d=0
e=new X.af(!1,!1,!1)
l.b=e
g=new D.z(a1,a,e)
g.b=!0
l.P(g)
l.b0(o)
p.n(0,l)
h.sb4(p)
p=new M.cR()
p.a=!0
o=O.k6(E.aH)
p.e=o
o.ba(p.gf9(),p.gfb())
p.y=p.x=p.r=p.f=null
d=X.mp(a)
c=new X.de()
c.c=1.0471975511965976
c.d=0.1
c.e=2000
c.sb4(a)
o=c.c
if(!(Math.abs(o-1.0471975511965976)<$.A().a)){c.c=1.0471975511965976
o=new D.z("fov",o,1.0471975511965976)
o.b=!0
c.aM(o)}o=c.d
if(!(Math.abs(o-0.1)<$.A().a)){c.d=0.1
o=new D.z("near",o,0.1)
o.b=!0
c.aM(o)}o=c.e
if(!(Math.abs(o-2000)<$.A().a)){c.e=2000
o=new D.z("far",o,2000)
o.b=!0
c.aM(o)}o=p.b
if(o!==c){if(o!=null)o.gt().Z(0,p.gaK())
k=p.b
p.b=c
c.gt().n(0,p.gaK())
o=new D.z("camera",k,p.b)
o.b=!0
p.aL(o)}o=p.c
if(o!==d){if(o!=null)o.gt().Z(0,p.gaK())
k=p.c
p.c=d
d.gt().n(0,p.gaK())
o=new D.z("target",k,p.c)
o.b=!0
p.aL(o)}p.e.n(0,h)
p.b.sb4(U.kR(V.aw(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
o=s.d
if(o!==p){if(o!=null)o.gt().Z(0,s.gcu())
s.d=p
p.gt().n(0,s.gcu())
s.cv()}p=new V.i7(a0,new N.jV(q,s))
u=u.getElementById(a0)
p.c=u
if(u==null)H.t("Failed to find bumpMaps for Texture2DGroup")
p.av(0,"../resources/BumpMap1.png",!0)
p.n(0,"../resources/BumpMap2.png")
p.n(0,"../resources/BumpMap3.png")
p.n(0,"../resources/BumpMap4.png")
p.n(0,"../resources/BumpMap5.png")
p.n(0,"../resources/ScrewBumpMap.png")
p.n(0,"../resources/CtrlPnlBumpMap.png")
u=s.Q
if(u==null)u=s.Q=D.E()
p=u.b
u=p==null?u.b=H.c([],[{func:1,ret:-1,args:[D.X]}]):p
u.push(new N.jW(a2,q))
V.oq(s)},
jV:function jV(a,b){this.a=a
this.b=b},
jW:function jW(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kg.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gE:function(a){return H.c6(a)},
h:function(a){return"Instance of '"+H.e(H.c7(a))+"'"}}
J.fI.prototype={
h:function(a){return String(a)},
gE:function(a){return a?519018:218159},
$iaE:1}
J.cZ.prototype={
q:function(a,b){return null==b},
h:function(a){return"null"},
gE:function(a){return 0}}
J.d_.prototype={
gE:function(a){return 0},
h:function(a){return String(a)}}
J.hu.prototype={}
J.bE.prototype={}
J.b3.prototype={
h:function(a){var u=a[$.lN()]
if(u==null)return this.ei(a)
return"JavaScript function for "+H.e(J.a3(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b1.prototype={
Z:function(a,b){var u
if(!!a.fixed$length)H.t(P.x("remove"))
for(u=0;u<a.length;++u)if(J.D(a[u],b)){a.splice(u,1)
return!0}return!1},
u:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.d(P.as(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
hO:function(a){return this.k(a,"")},
hG:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.d(P.as(a))}return u},
hH:function(a,b,c){return this.hG(a,b,c,null)},
hF:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.d(P.as(a))}throw H.d(H.kd())},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
ee:function(a,b,c){if(b<0||b>a.length)throw H.d(P.Y(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.Y(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.eG(a,0)])
return H.c(a.slice(b,c),[H.eG(a,0)])},
gaq:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.kd())},
d5:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.d(P.as(a))}return!1},
bt:function(a,b){if(!!a.immutable$list)H.t(P.x("sort"))
H.dk(a,0,a.length-1,b)},
U:function(a,b){var u
for(u=0;u<a.length;++u)if(J.D(a[u],b))return!0
return!1},
h:function(a){return P.kc(a,"[","]")},
gV:function(a){return new J.a4(a,a.length)},
gE:function(a){return H.c6(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.x("set length"))
if(b<0)throw H.d(P.Y(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.bg(a,b))
if(b>=a.length||b<0)throw H.d(H.bg(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.t(P.x("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bg(a,b))
a[b]=c},
$ii:1,
$io:1}
J.kf.prototype={}
J.a4.prototype={
gG:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.q(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bW.prototype={
hn:function(a,b){var u
if(typeof b!=="number")throw H.d(H.an(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbk(b)
if(this.gbk(a)===u)return 0
if(this.gbk(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbk:function(a){return a===0?1/a<0:a<0},
ik:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.x(""+a+".toInt()"))},
c2:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.x(""+a+".floor()"))},
ak:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.x(""+a+".round()"))},
e2:function(a,b){var u
if(b>20)throw H.d(P.Y(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbk(a))return"-"+u
return u},
b7:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.Y(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.X(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.x("Unexpected toString result: "+u))
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
gE:function(a){var u,t,s,r,q=a|0
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
ek:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cW(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.cW(a,b)},
cW:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.x("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aP:function(a,b){var u
if(a>0)u=this.cV(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
h4:function(a,b){if(b<0)throw H.d(H.an(b))
return this.cV(a,b)},
cV:function(a,b){return b>31?0:a>>>b},
$iM:1,
$iac:1}
J.cY.prototype={$iw:1}
J.cX.prototype={}
J.b2.prototype={
X:function(a,b){if(b<0)throw H.d(H.bg(a,b))
if(b>=a.length)H.t(H.bg(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.d(H.bg(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.d(P.kM(b,null,null))
return a+b},
aU:function(a,b,c,d){var u,t
c=P.ba(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a4:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.Y(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a1:function(a,b){return this.a4(a,b,0)},
p:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.an(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.O()
if(b<0)throw H.d(P.hB(b,null))
if(b>c)throw H.d(P.hB(b,null))
if(c>a.length)throw H.d(P.hB(c,null))
return a.substring(b,c)},
a8:function(a,b){return this.p(a,b,null)},
io:function(a){return a.toLowerCase()},
w:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.L)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ag:function(a,b){var u=b-a.length
if(u<=0)return a
return this.w(" ",u)+a},
bj:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.Y(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dE:function(a,b){return this.bj(a,b,0)},
h:function(a){return a},
gE:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ij:1}
H.m.prototype={
gl:function(a){return this.a.length},
i:function(a,b){return C.a.X(this.a,b)},
$au:function(){return[P.w]},
$ai:function(){return[P.w]},
$ao:function(){return[P.w]}}
H.ff.prototype={}
H.d3.prototype={
gV:function(a){return new H.bX(this,this.gl(this))},
bq:function(a,b){return this.eh(0,b)}}
H.bX.prototype={
gG:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.cy(s),q=r.gl(s)
if(t.b!==q)throw H.d(P.as(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.F(s,u);++t.c
return!0}}
H.fX.prototype={
gV:function(a){return new H.fY(J.aY(this.a),this.b)},
gl:function(a){return J.ad(this.a)},
F:function(a,b){return this.b.$1(J.eI(this.a,b))},
$ai:function(a,b){return[b]}}
H.fY.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.a=u.c.$1(t.gG(t))
return!0}u.a=null
return!1},
gG:function(a){return this.a}}
H.fZ.prototype={
gl:function(a){return J.ad(this.a)},
F:function(a,b){return this.b.$1(J.eI(this.a,b))},
$ad3:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.ci.prototype={
gV:function(a){return new H.iW(J.aY(this.a),this.b)}}
H.iW.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(t.$1(u.gG(u)))return!0
return!1},
gG:function(a){var u=this.a
return u.gG(u)}}
H.cT.prototype={}
H.iz.prototype={
m:function(a,b,c){throw H.d(P.x("Cannot modify an unmodifiable list"))}}
H.dB.prototype={}
H.f0.prototype={
h:function(a){return P.kk(this)},
m:function(a,b,c){return H.mk()},
$iR:1}
H.f1.prototype={
gl:function(a){return this.a},
bh:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bh(0,b))return
return this.cL(b)},
cL:function(a){return this.b[a]},
u:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cL(s))}}}
H.im.prototype={
af:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.iy.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.k0.prototype={
$1:function(a){if(!!J.O(a).$ibp)if(a.$thrownJsError==null)a.$thrownJsError=this.a
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
gip:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i3.prototype={}
H.hW.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.eH(u)+"'"}}
H.bO.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bO))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gE:function(a){var u,t=this.c
if(t==null)u=H.c6(this.a)
else u=typeof t!=="object"?J.cE(t):H.c6(t)
return(u^H.c6(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.c7(u))+"'")}}
H.eW.prototype={
h:function(a){return this.a}}
H.hI.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.N.prototype={
gl:function(a){return this.a},
ghN:function(a){return this.a===0},
ga2:function(a){return new H.fO(this,[H.eG(this,0)])},
bh:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cI(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cI(t,b)}else return s.hK(b)},
hK:function(a){var u=this,t=u.d
if(t==null)return!1
return u.c5(u.bC(t,u.c4(a)),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bc(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bc(r,b)
s=t==null?null:t.b
return s}else return q.hL(b)},
hL:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bC(r,s.c4(a))
t=s.c5(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cA(u==null?s.b=s.bK():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cA(t==null?s.c=s.bK():t,b,c)}else s.hM(b,c)},
hM:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bK()
u=r.c4(a)
t=r.bC(q,u)
if(t==null)r.bP(q,u,[r.bL(a,b)])
else{s=r.c5(t,a)
if(s>=0)t[s].b=b
else t.push(r.bL(a,b))}},
u:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.d(P.as(u))
t=t.c}},
cA:function(a,b,c){var u=this.bc(a,b)
if(u==null)this.bP(a,b,this.bL(b,c))
else u.b=c},
eV:function(){this.r=this.r+1&67108863},
bL:function(a,b){var u,t=this,s=new H.fN(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eV()
return s},
c4:function(a){return J.cE(a)&0x3ffffff},
c5:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1},
h:function(a){return P.kk(this)},
bc:function(a,b){return a[b]},
bC:function(a,b){return a[b]},
bP:function(a,b,c){a[b]=c},
eO:function(a,b){delete a[b]},
cI:function(a,b){return this.bc(a,b)!=null},
bK:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bP(t,u,t)
this.eO(t,u)
return t}}
H.fN.prototype={}
H.fO.prototype={
gl:function(a){return this.a.a},
gV:function(a){var u=this.a,t=new H.fP(u,u.r)
t.c=u.e
return t}}
H.fP.prototype={
gG:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.as(t))
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
$imQ:1}
H.c1.prototype={$ic1:1}
H.b6.prototype={$ib6:1}
H.d8.prototype={
gl:function(a){return a.length},
$iy:1,
$ay:function(){}}
H.c2.prototype={
i:function(a,b){H.aD(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aD(b,a,a.length)
a[b]=c},
$au:function(){return[P.M]},
$ii:1,
$ai:function(){return[P.M]},
$io:1,
$ao:function(){return[P.M]}}
H.d9.prototype={
m:function(a,b,c){H.aD(b,a,a.length)
a[b]=c},
$au:function(){return[P.w]},
$ii:1,
$ai:function(){return[P.w]},
$io:1,
$ao:function(){return[P.w]}}
H.hj.prototype={
i:function(a,b){H.aD(b,a,a.length)
return a[b]}}
H.hk.prototype={
i:function(a,b){H.aD(b,a,a.length)
return a[b]}}
H.hl.prototype={
i:function(a,b){H.aD(b,a,a.length)
return a[b]}}
H.hm.prototype={
i:function(a,b){H.aD(b,a,a.length)
return a[b]}}
H.hn.prototype={
i:function(a,b){H.aD(b,a,a.length)
return a[b]}}
H.da.prototype={
gl:function(a){return a.length},
i:function(a,b){H.aD(b,a,a.length)
return a[b]}}
H.c3.prototype={
gl:function(a){return a.length},
i:function(a,b){H.aD(b,a,a.length)
return a[b]},
$ic3:1,
$ibC:1}
H.cm.prototype={}
H.cn.prototype={}
H.co.prototype={}
H.cp.prototype={}
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
P.em.prototype={
ew:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bK(new P.ju(this,b),0),a)
else throw H.d(P.x("`setTimeout()` not found."))},
ex:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bK(new P.jt(this,a,Date.now(),b),0),a)
else throw H.d(P.x("Periodic timer."))},
$idu:1}
P.ju.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jt.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.ek(u,q)}s.c=r
t.d.$1(s)}}
P.dJ.prototype={}
P.dp.prototype={}
P.hZ.prototype={}
P.du.prototype={}
P.jD.prototype={}
P.jM.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dd():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.h(0)
throw u}}
P.jd.prototype={
ie:function(a){var u,t,s,r=null
try{if(C.f===$.am){a.$0()
return}P.nV(r,r,this,a)}catch(s){u=H.aj(s)
t=H.kB(s)
P.ly(r,r,this,u,t)}},
ig:function(a,b){var u,t,s,r=null
try{if(C.f===$.am){a.$1(b)
return}P.nW(r,r,this,a,b)}catch(s){u=H.aj(s)
t=H.kB(s)
P.ly(r,r,this,u,t)}},
ih:function(a,b){return this.ig(a,b,null)},
hm:function(a){return new P.je(this,a)},
d6:function(a,b){return new P.jf(this,a,b)}}
P.je.prototype={
$0:function(){return this.a.ie(this.b)}}
P.jf.prototype={
$1:function(a){return this.a.ih(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ja.prototype={
gV:function(a){var u=new P.dY(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
U:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.eJ(b)
return t}},
eJ:function(a){var u=this.d
if(u==null)return!1
return this.bA(this.cM(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cE(u==null?s.b=P.ks():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cE(t==null?s.c=P.ks():t,b)}else return s.ez(0,b)},
ez:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.ks()
u=s.cG(b)
t=r[u]
if(t==null)r[u]=[s.bx(b)]
else{if(s.bA(t,b)>=0)return!1
t.push(s.bx(b))}return!0},
Z:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fS(this.c,b)
else return this.fR(0,b)},
fR:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cM(r,b)
t=s.bA(u,b)
if(t<0)return!1
s.cX(u.splice(t,1)[0])
return!0},
cE:function(a,b){if(a[b]!=null)return!1
a[b]=this.bx(b)
return!0},
fS:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cX(u)
delete a[b]
return!0},
cF:function(){this.r=1073741823&this.r+1},
bx:function(a){var u,t=this,s=new P.jb(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cF()
return s},
cX:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cF()},
cG:function(a){return J.cE(a)&1073741823},
cM:function(a,b){return a[this.cG(b)]},
bA:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1}}
P.jb.prototype={}
P.dY.prototype={
gG:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.as(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fQ.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.fR.prototype={$ii:1,$io:1}
P.u.prototype={
gV:function(a){return new H.bX(a,this.gl(a))},
F:function(a,b){return this.i(a,b)},
u:function(a,b){var u,t=this.gl(a)
for(u=0;u<t;++u){b.$1(this.i(a,u))
if(t!==this.gl(a))throw H.d(P.as(a))}},
im:function(a,b){var u,t,s=this,r=H.c([],[H.od(s,a,"u",0)])
C.b.sl(r,s.gl(a))
for(u=0;u<s.gl(a);++u){t=s.i(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t}return r},
il:function(a){return this.im(a,!0)},
hC:function(a,b,c,d){var u
P.ba(b,c,this.gl(a))
for(u=b;u<c;++u)this.m(a,u,d)},
h:function(a){return P.kc(a,"[","]")}}
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
P.aK.prototype={
u:function(a,b){var u,t
for(u=J.aY(this.ga2(a));u.v();){t=u.gG(u)
b.$2(t,this.i(a,t))}},
gl:function(a){return J.ad(this.ga2(a))},
h:function(a){return P.kk(a)},
$iR:1}
P.jv.prototype={
m:function(a,b,c){throw H.d(P.x("Cannot modify unmodifiable map"))}}
P.fW.prototype={
i:function(a,b){return J.cD(this.a,b)},
m:function(a,b,c){J.k1(this.a,b,c)},
u:function(a,b){J.kJ(this.a,b)},
gl:function(a){return J.ad(this.a)},
h:function(a){return J.a3(this.a)},
$iR:1}
P.dC.prototype={}
P.jh.prototype={
ao:function(a,b){var u
for(u=J.aY(b);u.v();)this.n(0,u.gG(u))},
h:function(a){return P.kc(this,"{","}")},
F:function(a,b){var u,t,s
P.l5(b,"index")
for(u=P.nf(this,this.r),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.d(P.K(b,this,"index",null,t))},
$ii:1}
P.dZ.prototype={}
P.es.prototype={}
P.eS.prototype={
hS:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.ba(a0,a1,b.length)
u=$.m1()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.a.C(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jQ(C.a.C(b,n))
j=H.jQ(C.a.C(b,n+1))
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
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.S("")
g=r.a+=C.a.p(b,s,t)
r.a=g+H.bz(m)
s=n
continue}}throw H.d(P.Q("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.p(b,s,a1)
f=g.length
if(q>=0)P.kN(b,p,a1,q,o,f)
else{e=C.c.b8(f-1,4)+1
if(e===1)throw H.d(P.Q(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aU(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.kN(b,p,a1,q,o,d)
else{e=C.c.b8(d,4)
if(e===1)throw H.d(P.Q(c,b,a1))
if(e>1)b=C.a.aU(b,a1,a1,e===2?"==":"=")}return b}}
P.eT.prototype={}
P.eY.prototype={}
P.f2.prototype={}
P.fh.prototype={}
P.fx.prototype={
h:function(a){return this.a}}
P.fw.prototype={
eL:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.S("")
if(r>b)q.a+=C.a.p(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.mc(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iH.prototype={
ghB:function(){return C.M}}
P.iJ.prototype={
bU:function(a){var u,t,s=P.ba(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jB(u)
if(t.eQ(a,0,s)!==s)t.d_(J.m8(a,s-1),0)
return new Uint8Array(u.subarray(0,H.nw(0,t.b,u.length)))}}
P.jB.prototype={
d_:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eQ:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.X(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.C(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.d_(r,C.a.C(a,p)))s=p}else if(r<=2047){q=n.b
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
bU:function(a){var u,t,s,r,q,p,o,n,m=P.n1(!1,a,0,null)
if(m!=null)return m
u=P.ba(0,null,J.ad(a))
t=P.lA(a,0,u)
if(t>0){s=P.cb(a,0,t)
if(t===u)return s
r=new P.S(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.S("")
o=new P.jA(!1,r)
o.c=p
o.ho(a,q,u)
if(o.e>0){H.t(P.Q("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bz(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jA.prototype={
ho:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.cy(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.ah()
if((r&192)!==128){q=P.Q(k+C.c.b7(r,16),a,s)
throw H.d(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.b(C.v,q)
if(j<=C.v[q]){q=P.Q("Overlong encoding of 0x"+C.c.b7(j,16),a,s-h-1)
throw H.d(q)}if(j>1114111){q=P.Q("Character outside valid Unicode range: 0x"+C.c.b7(j,16),a,s-h-1)
throw H.d(q)}if(!l.c||j!==65279)t.a+=H.bz(j)
l.c=!1}for(q=s<c;q;){p=P.lA(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.cb(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.O()
if(r<0){m=P.Q("Negative UTF-8 code unit: -0x"+C.c.b7(-r,16),a,n-1)
throw H.d(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.Q(k+C.c.b7(r,16),a,n-1)
throw H.d(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.aE.prototype={}
P.a7.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.a7&&this.a===b.a&&!0},
gE:function(a){var u=this.a
return(u^C.c.aP(u,30))&1073741823},
h:function(a){var u=this,t=P.ml(H.mM(u)),s=P.cN(H.mK(u)),r=P.cN(H.mG(u)),q=P.cN(H.mH(u)),p=P.cN(H.mJ(u)),o=P.cN(H.mL(u)),n=P.mm(H.mI(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.M.prototype={}
P.b0.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.b0&&this.a===b.a},
gE:function(a){return C.c.gE(this.a)},
h:function(a){var u,t,s,r=new P.fe(),q=this.a
if(q<0)return"-"+new P.b0(0-q).h(0)
u=r.$1(C.c.a6(q,6e7)%60)
t=r.$1(C.c.a6(q,1e6)%60)
s=new P.fd().$1(q%1e6)
return""+C.c.a6(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
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
P.dd.prototype={
h:function(a){return"Throw of null."}}
P.ak.prototype={
gbz:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gby:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbz()+o+u
if(!q.a)return t
s=q.gby()
r=P.kb(q.b)
return t+s+": "+r}}
P.bA.prototype={
gbz:function(){return"RangeError"},
gby:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fy.prototype={
gbz:function(){return"RangeError"},
gby:function(){var u,t=this.b
if(typeof t!=="number")return t.O()
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
return"Concurrent modification during iteration: "+P.kb(u)+"."}}
P.ht.prototype={
h:function(a){return"Out of Memory"},
$ibp:1}
P.dm.prototype={
h:function(a){return"Stack Overflow"},
$ibp:1}
P.f7.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dR.prototype={
h:function(a){return"Exception: "+this.a}}
P.fq.prototype={
h:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.p(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.C(f,q)
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
k=""}j=C.a.p(f,m,n)
return h+l+j+k+"\n"+C.a.w(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fs.prototype={}
P.w.prototype={}
P.i.prototype={
bq:function(a,b){return new H.ci(this,b,[H.kA(this,"i",0)])},
gl:function(a){var u,t=this.gV(this)
for(u=0;t.v();)++u
return u},
gaH:function(a){var u,t=this.gV(this)
if(!t.v())throw H.d(H.kd())
u=t.gG(t)
if(t.v())throw H.d(H.mr())
return u},
F:function(a,b){var u,t,s
P.l5(b,"index")
for(u=this.gV(this),t=0;u.v();){s=u.gG(u)
if(b===t)return s;++t}throw H.d(P.K(b,this,"index",null,t))},
h:function(a){return P.mq(this,"(",")")}}
P.fH.prototype={}
P.o.prototype={$ii:1}
P.R.prototype={}
P.b7.prototype={
gE:function(a){return P.a0.prototype.gE.call(this,this)},
h:function(a){return"null"}}
P.ac.prototype={}
P.a0.prototype={constructor:P.a0,$ia0:1,
q:function(a,b){return this===b},
gE:function(a){return H.c6(this)},
h:function(a){return"Instance of '"+H.e(H.c7(this))+"'"},
toString:function(){return this.h(this)}}
P.j.prototype={}
P.S.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iF.prototype={
$2:function(a,b){var u,t,s,r=J.cz(b).dE(b,"=")
if(r===-1){if(b!=="")J.k1(a,P.kw(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.p(b,0,r)
t=C.a.a8(b,r+1)
s=this.a
J.k1(a,P.kw(u,0,u.length,s,!0),P.kw(t,0,t.length,s,!0))}return a}}
P.iC.prototype={
$2:function(a,b){throw H.d(P.Q("Illegal IPv4 address, "+a,this.a,b))}}
P.iD.prototype={
$2:function(a,b){throw H.d(P.Q("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iE.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.cB(C.a.p(this.b,a,b),null,16)
if(typeof u!=="number")return u.O()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bF.prototype={
ge6:function(){return this.b},
gc3:function(a){var u=this.c
if(u==null)return""
if(C.a.a1(u,"["))return C.a.p(u,1,u.length-1)
return u},
gbm:function(a){var u=this.d
if(u==null)return P.lr(this.a)
return u},
gcd:function(a){var u=this.f
return u==null?"":u},
gdz:function(){var u=this.r
return u==null?"":u},
e_:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a1(u,"/"))u="/"+u
s=P.ku(null,0,0,b)
return new P.bF(q,o,m,n,u,s,r.r)},
gce:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.j
u=this.Q=new P.dC(P.lh(t==null?"":t),[u,u])
t=u}return t},
gdA:function(){return this.c!=null},
gdD:function(){return this.f!=null},
gdB:function(){return this.r!=null},
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
if(!!J.O(b).$ikn)if(s.a==b.gbr())if(s.c!=null===b.gdA())if(s.b==b.ge6())if(s.gc3(s)==b.gc3(b))if(s.gbm(s)==b.gbm(b))if(s.e===b.gdU(b)){u=s.f
t=u==null
if(!t===b.gdD()){if(t)u=""
if(u===b.gcd(b)){u=s.r
t=u==null
if(!t===b.gdB()){if(t)u=""
u=u===b.gdz()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gE:function(a){var u=this.z
return u==null?this.z=C.a.gE(this.h(0)):u},
$ikn:1,
gbr:function(){return this.a},
gdU:function(a){return this.e}}
P.jw.prototype={
$1:function(a){throw H.d(P.Q("Invalid port",this.a,this.b+1))}}
P.jx.prototype={
$1:function(a){return P.et(C.W,a,C.e,!1)}}
P.jz.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.et(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.et(C.h,b,C.e,!0))}}}
P.jy.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aY(b),t=this.a;u.v();)t.$2(a,u.gG(u))}}
P.iB.prototype={
ge5:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.b(o,0)
u=q.a
o=o[0]+1
t=C.a.bj(u,"?",o)
s=u.length
if(t>=0){r=P.cu(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.j3("data",p,p,p,P.cu(u,o,s,C.z,!1),r,p)},
h:function(a){var u,t=this.b
if(0>=t.length)return H.b(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jH.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jG.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.b(u,a)
u=u[a]
J.m9(u,0,96,b)
return u},
$S:18}
P.jI.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.C(b,s)^96
if(r>=t)return H.b(a,r)
a[r]=c}}}
P.jJ.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.C(b,0),t=C.a.C(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.b(a,r)
a[r]=c}}}
P.jk.prototype={
gdA:function(){return this.c>0},
gdC:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.B()
t=this.e
if(typeof t!=="number")return H.v(t)
t=u+1<t
u=t}else u=!1
return u},
gdD:function(){var u=this.f
if(typeof u!=="number")return u.O()
return u<this.r},
gdB:function(){return this.r<this.a.length},
gcN:function(){return this.b===4&&C.a.a1(this.a,"http")},
gcO:function(){return this.b===5&&C.a.a1(this.a,"https")},
gbr:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcN())q=t.x="http"
else if(t.gcO()){t.x="https"
q="https"}else if(q===4&&C.a.a1(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a1(t.a,r)){t.x=r
q=r}else{q=C.a.p(t.a,0,q)
t.x=q}return q},
ge6:function(){var u=this.c,t=this.b+3
return u>t?C.a.p(this.a,t,u-1):""},
gc3:function(a){var u=this.c
return u>0?C.a.p(this.a,u,this.d):""},
gbm:function(a){var u,t=this
if(t.gdC()){u=t.d
if(typeof u!=="number")return u.B()
return P.cB(C.a.p(t.a,u+1,t.e),null,null)}if(t.gcN())return 80
if(t.gcO())return 443
return 0},
gdU:function(a){return C.a.p(this.a,this.e,this.f)},
gcd:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.O()
return u<t?C.a.p(this.a,u+1,t):""},
gdz:function(){var u=this.r,t=this.a
return u<t.length?C.a.a8(t,u+1):""},
gce:function(){var u=this,t=u.f
if(typeof t!=="number")return t.O()
if(t>=u.r)return C.X
t=P.j
return new P.dC(P.lh(u.gcd(u)),[t,t])},
e_:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbr(),m=n==="file",l=p.c,k=l>0?C.a.p(p.a,p.b+3,l):"",j=p.gdC()?p.gbm(p):o
l=p.c
if(l>0)u=C.a.p(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.p(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a1(t,"/"))t="/"+t
r=P.ku(o,0,0,b)
s=p.r
q=s<l.length?C.a.a8(l,s+1):o
return new P.bF(n,k,u,j,t,r,q)},
gE:function(a){var u=this.y
return u==null?this.y=C.a.gE(this.a):u},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.O(b).$ikn&&this.a===b.h(0)},
h:function(a){return this.a},
$ikn:1}
P.j3.prototype={}
W.n.prototype={}
W.eK.prototype={
gl:function(a){return a.length}}
W.eL.prototype={
h:function(a){return String(a)}}
W.eM.prototype={
h:function(a){return String(a)}}
W.bk.prototype={$ibk:1}
W.bl.prototype={$ibl:1}
W.bn.prototype={
cm:function(a,b,c){if(c!=null)return a.getContext(b,P.o4(c))
return a.getContext(b)},
e9:function(a,b){return this.cm(a,b,null)},
$ibn:1}
W.aZ.prototype={
gl:function(a){return a.length}}
W.f3.prototype={
gl:function(a){return a.length}}
W.H.prototype={$iH:1}
W.bR.prototype={
gl:function(a){return a.length}}
W.f4.prototype={}
W.ae.prototype={}
W.at.prototype={}
W.f5.prototype={
gl:function(a){return a.length}}
W.f6.prototype={
gl:function(a){return a.length}}
W.f9.prototype={
gl:function(a){return a.length}}
W.al.prototype={$ial:1}
W.fa.prototype={
h:function(a){return String(a)}}
W.cP.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[[P.ab,P.ac]]},
$au:function(){return[[P.ab,P.ac]]},
$ii:1,
$ai:function(){return[[P.ab,P.ac]]},
$io:1,
$ao:function(){return[[P.ab,P.ac]]}}
W.cQ.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaG(a))+" x "+H.e(this.gaA(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.O(b)
if(!u.$iab)return!1
return a.left===u.gbl(b)&&a.top===u.gbo(b)&&this.gaG(a)===u.gaG(b)&&this.gaA(a)===u.gaA(b)},
gE:function(a){return W.lp(C.d.gE(a.left),C.d.gE(a.top),C.d.gE(this.gaG(a)),C.d.gE(this.gaA(a)))},
gd7:function(a){return a.bottom},
gaA:function(a){return a.height},
gbl:function(a){return a.left},
gcf:function(a){return a.right},
gbo:function(a){return a.top},
gaG:function(a){return a.width},
$iab:1,
$aab:function(){return[P.ac]}}
W.fb.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[P.j]},
$au:function(){return[P.j]},
$ii:1,
$ai:function(){return[P.j]},
$io:1,
$ao:function(){return[P.j]}}
W.fc.prototype={
gl:function(a){return a.length}}
W.j1.prototype={
gl:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var u=this.il(this)
return new J.a4(u,u.length)},
$au:function(){return[W.P]},
$ai:function(){return[W.P]},
$ao:function(){return[W.P]}}
W.P.prototype={
ghl:function(a){return new W.j4(a)},
gbT:function(a){return new W.j1(a,a.children)},
gd9:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.O()
if(s<0)s=-s*0
if(typeof r!=="number")return r.O()
if(r<0)r=-r*0
return new P.ab(u,t,s,r,[P.ac])},
h:function(a){return a.localName},
ad:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.kU
if(u==null){u=H.c([],[W.aO])
t=new W.dc(u)
u.push(W.lo(null))
u.push(W.lq())
$.kU=t
d=t}else d=u
u=$.kT
if(u==null){u=new W.eu(d)
$.kT=u
c=u}else{u.a=d
c=u}}if($.aG==null){u=document
t=u.implementation.createHTMLDocument("")
$.aG=t
$.k9=t.createRange()
s=$.aG.createElement("base")
s.href=u.baseURI
$.aG.head.appendChild(s)}u=$.aG
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aG
if(!!this.$ibl)r=u.body
else{r=u.createElement(a.tagName)
$.aG.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.U(C.U,a.tagName)){$.k9.selectNodeContents(r)
q=$.k9.createContextualFragment(b)}else{r.innerHTML=b
q=$.aG.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aG.body
if(r==null?u!=null:r!==u)J.kK(r)
c.cn(q)
document.adoptNode(q)
return q},
hq:function(a,b,c){return this.ad(a,b,c,null)},
eb:function(a,b){a.textContent=null
a.appendChild(this.ad(a,b,null,null))},
$iP:1,
ge1:function(a){return a.tagName}}
W.fg.prototype={
$1:function(a){return!!J.O(a).$iP}}
W.h.prototype={$ih:1}
W.f.prototype={
he:function(a,b,c,d){if(c!=null)this.eA(a,b,c,!1)},
eA:function(a,b,c,d){return a.addEventListener(b,H.bK(c,1),!1)}}
W.au.prototype={$iau:1}
W.bT.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.au]},
$au:function(){return[W.au]},
$ii:1,
$ai:function(){return[W.au]},
$io:1,
$ao:function(){return[W.au]},
$ibT:1}
W.fl.prototype={
gl:function(a){return a.length}}
W.fp.prototype={
gl:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.fv.prototype={
gl:function(a){return a.length}}
W.bV.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.C]},
$au:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]},
$io:1,
$ao:function(){return[W.C]}}
W.aJ.prototype={$iaJ:1,
gda:function(a){return a.data}}
W.bs.prototype={$ibs:1}
W.bw.prototype={$ibw:1}
W.fS.prototype={
h:function(a){return String(a)}}
W.hc.prototype={
gl:function(a){return a.length}}
W.c_.prototype={$ic_:1}
W.hd.prototype={
i:function(a,b){return P.aV(a.get(b))},
u:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aV(u.value[1]))}},
ga2:function(a){var u=H.c([],[P.j])
this.u(a,new W.he(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.x("Not supported"))},
$iR:1,
$aR:function(){return[P.j,null]}}
W.he.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hf.prototype={
i:function(a,b){return P.aV(a.get(b))},
u:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aV(u.value[1]))}},
ga2:function(a){var u=H.c([],[P.j])
this.u(a,new W.hg(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.x("Not supported"))},
$iR:1,
$aR:function(){return[P.j,null]}}
W.hg.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aM.prototype={$iaM:1}
W.hh.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aM]},
$au:function(){return[W.aM]},
$ii:1,
$ai:function(){return[W.aM]},
$io:1,
$ao:function(){return[W.aM]}}
W.ax.prototype={$iax:1}
W.a2.prototype={
gaH:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.d(P.l8("No elements"))
if(t>1)throw H.d(P.l8("More than one element"))
return u.firstChild},
ao:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.b(t,b)
u.replaceChild(c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.cU(u,u.length)},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$au:function(){return[W.C]},
$ai:function(){return[W.C]},
$ao:function(){return[W.C]}}
W.C.prototype={
i9:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
ib:function(a,b){var u,t
try{u=a.parentNode
J.m6(u,b,a)}catch(t){H.aj(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.eg(a):u},
fU:function(a,b,c){return a.replaceChild(b,c)},
$iC:1}
W.db.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.C]},
$au:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]},
$io:1,
$ao:function(){return[W.C]}}
W.aP.prototype={$iaP:1,
gl:function(a){return a.length}}
W.hw.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aP]},
$au:function(){return[W.aP]},
$ii:1,
$ai:function(){return[W.aP]},
$io:1,
$ao:function(){return[W.aP]}}
W.hG.prototype={
i:function(a,b){return P.aV(a.get(b))},
u:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aV(u.value[1]))}},
ga2:function(a){var u=H.c([],[P.j])
this.u(a,new W.hH(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.x("Not supported"))},
$iR:1,
$aR:function(){return[P.j,null]}}
W.hH.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hJ.prototype={
gl:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.hS.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aQ]},
$au:function(){return[W.aQ]},
$ii:1,
$ai:function(){return[W.aQ]},
$io:1,
$ao:function(){return[W.aQ]}}
W.aR.prototype={$iaR:1}
W.hT.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aR]},
$au:function(){return[W.aR]},
$ii:1,
$ai:function(){return[W.aR]},
$io:1,
$ao:function(){return[W.aR]}}
W.aS.prototype={$iaS:1,
gl:function(a){return a.length}}
W.hX.prototype={
i:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
u:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga2:function(a){var u=H.c([],[P.j])
this.u(a,new W.hY(u))
return u},
gl:function(a){return a.length},
$iR:1,
$aR:function(){return[P.j,P.j]}}
W.hY.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ay.prototype={$iay:1}
W.dq.prototype={
ad:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
u=W.mn("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a2(t).ao(0,new W.a2(u))
return t}}
W.i0.prototype={
ad:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.ad(u.createElement("table"),b,c,d)
u.toString
u=new W.a2(u)
s=u.gaH(u)
s.toString
u=new W.a2(s)
r=u.gaH(u)
t.toString
r.toString
new W.a2(t).ao(0,new W.a2(r))
return t}}
W.i1.prototype={
ad:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.ad(u.createElement("table"),b,c,d)
u.toString
u=new W.a2(u)
s=u.gaH(u)
t.toString
s.toString
new W.a2(t).ao(0,new W.a2(s))
return t}}
W.cc.prototype={$icc:1}
W.aT.prototype={$iaT:1}
W.az.prototype={$iaz:1}
W.i4.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.az]},
$au:function(){return[W.az]},
$ii:1,
$ai:function(){return[W.az]},
$io:1,
$ao:function(){return[W.az]}}
W.i5.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aT]},
$au:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$io:1,
$ao:function(){return[W.aT]}}
W.ie.prototype={
gl:function(a){return a.length}}
W.aU.prototype={$iaU:1}
W.bB.prototype={$ibB:1}
W.ij.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aU]},
$au:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$io:1,
$ao:function(){return[W.aU]}}
W.ik.prototype={
gl:function(a){return a.length}}
W.bc.prototype={}
W.iG.prototype={
h:function(a){return String(a)}}
W.iV.prototype={
gl:function(a){return a.length}}
W.be.prototype={
ght:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.x("deltaY is not supported"))},
ghs:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.x("deltaX is not supported"))},
$ibe:1}
W.cj.prototype={
fV:function(a,b){return a.requestAnimationFrame(H.bK(b,1))},
eP:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.j2.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.H]},
$au:function(){return[W.H]},
$ii:1,
$ai:function(){return[W.H]},
$io:1,
$ao:function(){return[W.H]}}
W.dM.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.O(b)
if(!u.$iab)return!1
return a.left===u.gbl(b)&&a.top===u.gbo(b)&&a.width===u.gaG(b)&&a.height===u.gaA(b)},
gE:function(a){return W.lp(C.d.gE(a.left),C.d.gE(a.top),C.d.gE(a.width),C.d.gE(a.height))},
gaA:function(a){return a.height},
gaG:function(a){return a.width}}
W.j7.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aI]},
$au:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]},
$io:1,
$ao:function(){return[W.aI]}}
W.e3.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.C]},
$au:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]},
$io:1,
$ao:function(){return[W.C]}}
W.jl.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aS]},
$au:function(){return[W.aS]},
$ii:1,
$ai:function(){return[W.aS]},
$io:1,
$ao:function(){return[W.aS]}}
W.jp.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.ay]},
$au:function(){return[W.ay]},
$ii:1,
$ai:function(){return[W.ay]},
$io:1,
$ao:function(){return[W.ay]}}
W.j0.prototype={
u:function(a,b){var u,t,s,r,q
for(u=this.ga2(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.q)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga2:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.j])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.b(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aR:function(){return[P.j,P.j]}}
W.j4.prototype={
i:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga2(this).length}}
W.j5.prototype={}
W.j6.prototype={
$1:function(a){return this.a.$1(a)}}
W.ck.prototype={
eq:function(a){var u
if($.cl.ghN($.cl)){for(u=0;u<262;++u)$.cl.m(0,C.T[u],W.of())
for(u=0;u<12;++u)$.cl.m(0,C.p[u],W.og())}},
aQ:function(a){return $.m2().U(0,W.bS(a))},
ap:function(a,b,c){var u=$.cl.i(0,H.e(W.bS(a))+"::"+b)
if(u==null)u=$.cl.i(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaO:1}
W.J.prototype={
gV:function(a){return new W.cU(a,this.gl(a))}}
W.dc.prototype={
aQ:function(a){return C.b.d5(this.a,new W.hp(a))},
ap:function(a,b,c){return C.b.d5(this.a,new W.ho(a,b,c))},
$iaO:1}
W.hp.prototype={
$1:function(a){return a.aQ(this.a)}}
W.ho.prototype={
$1:function(a){return a.ap(this.a,this.b,this.c)}}
W.eb.prototype={
ev:function(a,b,c,d){var u,t,s
this.a.ao(0,c)
u=b.bq(0,new W.ji())
t=b.bq(0,new W.jj())
this.b.ao(0,u)
s=this.c
s.ao(0,C.w)
s.ao(0,t)},
aQ:function(a){return this.a.U(0,W.bS(a))},
ap:function(a,b,c){var u=this,t=W.bS(a),s=u.c
if(s.U(0,H.e(t)+"::"+b))return u.d.hg(c)
else if(s.U(0,"*::"+b))return u.d.hg(c)
else{s=u.b
if(s.U(0,H.e(t)+"::"+b))return!0
else if(s.U(0,"*::"+b))return!0
else if(s.U(0,H.e(t)+"::*"))return!0
else if(s.U(0,"*::*"))return!0}return!1},
$iaO:1}
W.ji.prototype={
$1:function(a){return!C.b.U(C.p,a)}}
W.jj.prototype={
$1:function(a){return C.b.U(C.p,a)}}
W.jr.prototype={
ap:function(a,b,c){if(this.ej(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.U(0,b)
return!1}}
W.js.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jq.prototype={
aQ:function(a){var u=J.O(a)
if(!!u.$ic8)return!1
u=!!u.$ik
if(u&&W.bS(a)==="foreignObject")return!1
if(u)return!0
return!1},
ap:function(a,b,c){if(b==="is"||C.a.a1(b,"on"))return!1
return this.aQ(a)},
$iaO:1}
W.cU.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cD(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gG:function(a){return this.d}}
W.aO.prototype={}
W.jg.prototype={}
W.eu.prototype={
cn:function(a){new W.jC(this).$2(a,null)},
b_:function(a,b){if(b==null)J.kK(a)
else b.removeChild(a)},
h_:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.ma(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.aj(r)}t="element unprintable"
try{t=J.a3(a)}catch(r){H.aj(r)}try{s=W.bS(a)
this.fZ(a,b,p,t,s,o,n)}catch(r){if(H.aj(r) instanceof P.ak)throw r
else{this.b_(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fZ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.b_(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aQ(a)){p.b_(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.ap(a,"is",g)){p.b_(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga2(f)
t=H.c(u.slice(0),[H.eG(u,0)])
for(s=f.ga2(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.b(t,s)
r=t[s]
if(!p.a.ap(a,J.md(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.O(a).$icc)p.cn(a.content)}}
W.jC.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.h_(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b_(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.aj(s)
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
W.cq.prototype={}
W.cr.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.eh.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.cs.prototype={}
W.ct.prototype={}
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
P.jm.prototype={
dv:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
ck:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.O(a)
if(!!u.$ia7)return new Date(a.a)
if(!!u.$imQ)throw H.d(P.ix("structured clone of RegExp"))
if(!!u.$iau)return a
if(!!u.$ibk)return a
if(!!u.$ibT)return a
if(!!u.$iaJ)return a
if(!!u.$ic1||!!u.$ib6||!!u.$ic_)return a
if(!!u.$iR){t=p.dv(a)
s=p.b
r=s.length
if(t>=r)return H.b(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.b(s,t)
s[t]=q
u.u(a,new P.jo(o,p))
return o.a}if(!!u.$io){t=p.dv(a)
o=p.b
if(t>=o.length)return H.b(o,t)
q=o[t]
if(q!=null)return q
return p.hp(a,t)}throw H.d(P.ix("structured clone of other type"))},
hp:function(a,b){var u,t=J.cy(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.b(q,b)
q[b]=r
for(u=0;u<s;++u){q=this.ck(t.i(a,u))
if(u>=r.length)return H.b(r,u)
r[u]=q}return r}}
P.jo.prototype={
$2:function(a,b){this.a.a[a]=this.b.ck(b)},
$S:3}
P.er.prototype={$iaJ:1,
gda:function(a){return this.a}}
P.jN.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jn.prototype={}
P.fm.prototype={
gaY:function(){var u=this.b,t=H.kA(u,"u",0)
return new H.fX(new H.ci(u,new P.fn(),[t]),new P.fo(),[t,W.P])},
u:function(a,b){C.b.u(P.kj(this.gaY(),!1,W.P),b)},
m:function(a,b,c){var u=this.gaY()
J.mb(u.b.$1(J.eI(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.ad(this.gaY().a)},
i:function(a,b){var u=this.gaY()
return u.b.$1(J.eI(u.a,b))},
gV:function(a){var u=P.kj(this.gaY(),!1,W.P)
return new J.a4(u,u.length)},
$au:function(){return[W.P]},
$ai:function(){return[W.P]},
$ao:function(){return[W.P]}}
P.fn.prototype={
$1:function(a){return!!J.O(a).$iP}}
P.fo.prototype={
$1:function(a){return H.l(a,"$iP")}}
P.jc.prototype={
gcf:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.v(t)
return u+t},
gd7:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.v(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.O(b)
if(!!u.$iab){t=q.a
if(t==u.gbl(b)){s=q.b
if(s==u.gbo(b)){r=q.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.v(r)
if(t+r===u.gcf(b)){t=q.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.v(t)
u=s+t===u.gd7(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gE:function(a){var u=this,t=u.a,s=J.cE(t),r=u.b,q=J.cE(r),p=u.c
if(typeof t!=="number")return t.B()
if(typeof p!=="number")return H.v(p)
p=C.c.gE(t+p)
t=u.d
if(typeof r!=="number")return r.B()
if(typeof t!=="number")return H.v(t)
t=C.c.gE(r+t)
return P.ne(P.j9(P.j9(P.j9(P.j9(0,s),q),p),t))}}
P.ab.prototype={
gbl:function(a){return this.a},
gbo:function(a){return this.b},
gaG:function(a){return this.c},
gaA:function(a){return this.d}}
P.b4.prototype={$ib4:1}
P.fM.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
F:function(a,b){return this.i(a,b)},
$au:function(){return[P.b4]},
$ii:1,
$ai:function(){return[P.b4]},
$io:1,
$ao:function(){return[P.b4]}}
P.b8.prototype={$ib8:1}
P.hr.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
F:function(a,b){return this.i(a,b)},
$au:function(){return[P.b8]},
$ii:1,
$ai:function(){return[P.b8]},
$io:1,
$ao:function(){return[P.b8]}}
P.hz.prototype={
gl:function(a){return a.length}}
P.c8.prototype={$ic8:1}
P.i_.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
F:function(a,b){return this.i(a,b)},
$au:function(){return[P.j]},
$ii:1,
$ai:function(){return[P.j]},
$io:1,
$ao:function(){return[P.j]}}
P.k.prototype={
gbT:function(a){return new P.fm(a,new W.a2(a))},
ad:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.aO])
p.push(W.lo(null))
p.push(W.lq())
p.push(new W.jq())
c=new W.eu(new W.dc(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).hq(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a2(s)
q=p.gaH(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ik:1}
P.bb.prototype={$ibb:1}
P.il.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
F:function(a,b){return this.i(a,b)},
$au:function(){return[P.bb]},
$ii:1,
$ai:function(){return[P.bb]},
$io:1,
$ao:function(){return[P.bb]}}
P.dW.prototype={}
P.dX.prototype={}
P.e6.prototype={}
P.e7.prototype={}
P.ei.prototype={}
P.ej.prototype={}
P.ep.prototype={}
P.eq.prototype={}
P.bC.prototype={$ii:1,
$ai:function(){return[P.w]},
$io:1,
$ao:function(){return[P.w]}}
P.eO.prototype={
gl:function(a){return a.length}}
P.eP.prototype={
i:function(a,b){return P.aV(a.get(b))},
u:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aV(u.value[1]))}},
ga2:function(a){var u=H.c([],[P.j])
this.u(a,new P.eQ(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.x("Not supported"))},
$iR:1,
$aR:function(){return[P.j,null]}}
P.eQ.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eR.prototype={
gl:function(a){return a.length}}
P.bj.prototype={}
P.hs.prototype={
gl:function(a){return a.length}}
P.dK.prototype={}
P.di.prototype={
ii:function(a,b,c,d,e,f,g){var u,t=J.O(g)
if(!!t.$iaJ)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.o5(g))
return}if(!!t.$ibs)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.cF("Incorrect number or type of arguments"))}}
P.hV.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return P.aV(a.item(b))},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
F:function(a,b){return this.i(a,b)},
$au:function(){return[[P.R,,,]]},
$ii:1,
$ai:function(){return[[P.R,,,]]},
$io:1,
$ao:function(){return[[P.R,,,]]}}
P.ee.prototype={}
P.ef.prototype={}
T.aF.prototype={
aB:function(a,b){return!0},
h:function(a){return"all"}}
T.cV.prototype={
aB:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)if(u[s].aB(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.q)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.b5.prototype={}
T.a5.prototype={
aB:function(a,b){return!this.ef(0,b)},
h:function(a){return"!["+this.cq(0)+"]"}}
T.hA.prototype={
aB:function(a,b){return this.a<=b&&this.b>=b},
h:function(a){var u=H.bz(this.a),t=H.bz(this.b)
return u+".."+t}}
T.hK.prototype={
en:function(a){var u,t
if(a.a.length<=0)throw H.d(P.r("May not create a Set with zero characters."))
u=new H.N([P.w,P.aE])
for(t=new H.bX(a,a.gl(a));t.v();)u.m(0,t.d,!0)
this.a=u},
aB:function(a,b){return this.a.bh(0,b)},
h:function(a){var u=this.a
return P.cb(u.ga2(u),0,null)}}
R.dn.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.dy(this.a.j(0,b))
r.a=H.c([],[T.b5])
r.c=!1
this.c.push(r)
return r},
hD:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
if(r.aB(0,a))return r}return},
h:function(a){return this.b}}
R.dv.prototype={
h:function(a){var u=H.kG(this.b,"\n","\\n"),t=H.kG(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.dw.prototype={
aD:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.q)(c),++t){s=c[t]
this.c.m(0,s,b)}},
h:function(a){return this.b}}
R.ig.prototype={
j:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.dn(this,b)
u.c=H.c([],[R.dy])
this.a.m(0,b,u)}return u},
N:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.dw(a)
u=P.j
t.c=new H.N([u,u])
this.b.m(0,a,t)}return t},
e3:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.c([],[R.dv]),k=this.c,j=[P.w],i=H.c([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)l.push(t)
return l}r=C.a.C(a,s)
q=k.hD(r)
if(q==null){if(t==null){i.push(r)
p=P.cb(i,0,m)
throw H.d(P.r("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}l.push(t)
s=t.c+1
i=H.c([],j)
k=this.c
t=m}else{if(!q.c)i.push(r)
k=q.b
if(k.d!=null){p=P.cb(i,0,m)
o=k.d
n=o.c.i(0,p)
t=new R.dv(n==null?o.b:n,p,s)}++s}}}}
R.dy.prototype={
h:function(a){return this.b.b+": "+this.cq(0)}}
O.b_.prototype={
bv:function(a){this.a=H.c([],[a])
this.c=this.b=null},
co:function(a,b,c){this.b=b
this.c=a},
ba:function(a,b){return this.co(a,null,b)},
fE:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
ep:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.a4(u,u.length)},
F:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.kA(s,"b_",0)]
if(s.fE(H.c([b],r))){u=s.a
t=u.length
u.push(b)
s.ep(t,H.c([b],r))}},
$ii:1}
O.bZ.prototype={
gl:function(a){return this.a.length},
gt:function(){var u=this.b
return u==null?this.b=D.E():u},
aI:function(){var u=this.b
if(u!=null)u.I(null)},
ga_:function(a){var u=this.a
if(u.length>0)return C.b.gaq(u)
else return V.d7()},
dX:function(a){var u=this.a
if(a==null)u.push(V.d7())
else u.push(a)
this.aI()},
cc:function(){var u=this.a
if(u.length>0){u.pop()
this.aI()}}}
E.eU.prototype={}
E.aH.prototype={
cD:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.a4(u,u.length);u.v();){t=u.d
if(t.f==null)t.cD()}},
sbs:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().Z(0,s.gdO())
u=s.c
if(u!=null)u.gt().n(0,s.gdO())
t=new D.z("shape",r,s.c)
t.b=!0
s.aj(t)}},
scg:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gt().Z(0,s.gdQ())
u=s.f
s.f=a
if(a!=null)a.gt().n(0,s.gdQ())
s.cD()
t=new D.z("technique",u,s.f)
t.b=!0
s.aj(t)}},
sb4:function(a){var u,t,s=this
if(!J.D(s.r,a)){u=s.r
if(u!=null)u.gt().Z(0,s.gdM())
if(a!=null)a.gt().n(0,s.gdM())
s.r=a
t=new D.z("mover",u,a)
t.b=!0
s.aj(t)}},
al:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aV(0,b,s):null
if(!J.D(q,s.x)){u=s.x
s.x=q
t=new D.z("matrix",u,q)
t.b=!0
s.aj(t)}r=s.f
if(r!=null)r.al(0,b)
for(r=s.y.a,r=new J.a4(r,r.length);r.v();)r.d.al(0,b)},
aC:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.ga_(s))
else s.a.push(r.w(0,s.ga_(s)))
s.aI()
a.dY(t.f)
s=a.dy
u=(s&&C.b).gaq(s)
if(u!=null&&t.d!=null)u.dZ(a,t)
for(s=t.y.a,s=new J.a4(s,s.length);s.v();)s.d.aC(a)
a.dV()
a.dx.cc()},
aj:function(a){var u=this.z
if(u!=null)u.I(a)},
Y:function(){return this.aj(null)},
dP:function(a){this.e=null
this.aj(a)},
hZ:function(){return this.dP(null)},
dR:function(a){this.aj(a)},
i_:function(){return this.dR(null)},
dN:function(a){this.aj(a)},
hY:function(){return this.dN(null)},
dL:function(a){this.aj(a)},
hV:function(){return this.dL(null)},
hU:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdK(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bq()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.Y()},
hX:function(a,b){var u,t
for(u=b.gV(b),t=this.gdK();u.v();)u.gG(u).gt().Z(0,t)
this.Y()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hC.prototype={
em:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a7(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bZ()
t=[V.aL]
u.a=H.c([],t)
u.gt().n(0,new E.hD(s))
s.cy=u
u=new O.bZ()
u.a=H.c([],t)
u.gt().n(0,new E.hE(s))
s.db=u
u=new O.bZ()
u.a=H.c([],t)
u.gt().n(0,new E.hF(s))
s.dx=u
u=H.c([],[O.dr])
s.dy=u
u.push(null)
s.fr=new H.N([P.j,A.dj])},
gi8:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga_(s)
u=t.db
u=t.z=s.w(0,u.ga_(u))
s=u}return s},
gdW:function(){var u,t=this,s=t.ch
if(s==null){s=t.gi8()
u=t.dx
u=t.ch=s.w(0,u.ga_(u))
s=u}return s},
ge7:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.ga_(s)
u=t.dx
u=t.cx=s.w(0,u.ga_(u))
s=u}return s},
dY:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gaq(u):a)},
dV:function(){var u=this.dy
if(u.length>1)u.pop()},
d4:function(a){var u=a.b
if(u.length===0)throw H.d(P.r("May not cache a shader with no name."))
if(this.fr.bh(0,u))throw H.d(P.r('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.m(0,u,a)}}
E.hD.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hE.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hF.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dt.prototype={
cw:function(a){this.e0()},
cv:function(){return this.cw(null)},
ghI:function(){var u,t=this,s=Date.now(),r=C.c.a6(P.kS(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a7(s,!1)
return u/r},
cS:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.w()
if(typeof r!=="number")return H.v(r)
u=C.d.c2(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.w()
t=C.d.c2(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lb(C.n,s.gic())}},
e0:function(){if(!this.cx){this.cx=!0
var u=window
C.D.eP(u)
C.D.fV(u,W.lB(new E.id(this),P.ac))}},
ia:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cS()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a7(r,!1)
s.y=P.kS(r-s.r.a).a*0.000001
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
o.aC(p.e)}s=p.Q
if(s!=null)s.I(null)}catch(q){u=H.aj(q)
t=H.kB(q)
P.kF("Error: "+H.e(u))
P.kF("Stack: "+H.e(t))
throw H.d(u)}}}
E.id.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.ia()}}}
Z.dH.prototype={}
Z.cH.prototype={
aw:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aj(s)
t=P.r('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.d(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.dI.prototype={}
Z.bm.prototype={
ae:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aw:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aw(a)},
e4:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aC:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.b(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
dS:function(a){this.aw(a)
this.aC(a)
this.e4(a)},
h:function(a){var u,t,s,r,q=[P.j],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)p.push(u[s].h(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a3(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.b.k(p,", ")+"\nAttrs:   "+C.b.k(r,", ")}}
Z.cI.prototype={}
Z.bt.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.c7(this.c))+"'")+"]"}}
Z.aC.prototype={
gcp:function(a){var u=this.a,t=(u&$.aq().a)!==0?3:0
if((u&$.ap().a)!==0)t+=3
if((u&$.ao().a)!==0)t+=3
if((u&$.aX().a)!==0)t+=2
if((u&$.bi().a)!==0)t+=3
if((u&$.bh().a)!==0)t+=3
if((u&$.cC().a)!==0)t+=4
if((u&$.bN().a)!==0)++t
return(u&$.aW().a)!==0?t+4:t},
hh:function(a){var u,t=$.aq(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.ap()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ao()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aX()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bi()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bh()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cC()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bN()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aW()
if((s&t.a)!==0)if(u===a)return t
return $.m0()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aC))return!1
return this.a===b.a},
h:function(a){var u=H.c([],[P.j]),t=this.a
if((t&$.aq().a)!==0)u.push("Pos")
if((t&$.ap().a)!==0)u.push("Norm")
if((t&$.ao().a)!==0)u.push("Binm")
if((t&$.aX().a)!==0)u.push("Txt2D")
if((t&$.bi().a)!==0)u.push("TxtCube")
if((t&$.bh().a)!==0)u.push("Clr3")
if((t&$.cC().a)!==0)u.push("Clr4")
if((t&$.bN().a)!==0)u.push("Weight")
if((t&$.aW().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.k(u,"|")}}
D.eX.prototype={}
D.bq.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.c([],[{func:1,ret:-1,args:[D.X]}]):u).push(b)},
Z:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.U(s,b)
if(s===!0){s=t.a
u=(s&&C.b).Z(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.U(s,b)
if(s===!0){s=t.b
u=(s&&C.b).Z(s,b)||u}return u},
I:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.b.u(P.kj(u,!0,{func:1,ret:-1,args:[D.X]}),new D.fj(q))
u=r.b
if(u!=null){r.b=H.c([],[{func:1,ret:-1,args:[D.X]}])
C.b.u(u,new D.fk(q))}return!0},
hy:function(){return this.I(null)},
aE:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.I(u)}}}}
D.fj.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fk.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.X.prototype={}
D.bu.prototype={}
D.bv.prototype={}
D.z.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cJ.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cJ))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.d0.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d0))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.fL.prototype={
i4:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
i0:function(a){this.c=a.b
this.d.Z(0,a.a)
return!1}}
X.d4.prototype={}
X.fT.prototype={
aX:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.w()
u=b.b
t=q.ch
if(typeof u!=="number")return u.w()
s=new V.ag(o.a+n*m,o.b+u*t)
t=q.a.gaS()
r=new X.aN(a,V.b9(),q.x,t,s)
r.b=!0
q.z=new P.a7(p,!1)
q.x=s
return r},
cb:function(a,b){this.r=a.a
return!1},
b6:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.ea()
if(typeof u!=="number")return u.ah()
this.r=(u&~t)>>>0
return!1},
b5:function(a,b){var u=this.d
if(u==null)return!1
u.I(this.aX(a,b))
return!0},
i5:function(a){var u,t,s,r,q,p,o=this,n=o.e
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
t=new X.c0(new V.F(s*r,q*p),u,t)
t.b=!0
n.I(t)
return!0},
fq:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.d4(c,r.a.gaS(),b)
s.b=!0
t.I(s)
r.y=new P.a7(u,!1)
r.x=V.b9()}}
X.af.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.af))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aN.prototype={}
X.hi.prototype={
bB:function(a,b,c){var u=this,t=new P.a7(Date.now(),!1),s=u.a.gaS(),r=new X.aN(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cb:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.I(this.bB(a,b,!0))
return!0},
b6:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.ea()
if(typeof t!=="number")return t.ah()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.I(u.bB(a,b,!0))
return!0},
b5:function(a,b){var u=this.d
if(u==null)return!1
u.I(this.bB(a,b,!1))
return!0},
i6:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaS()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.w()
r=a.b
q=p.ch
if(typeof r!=="number")return r.w()
u=new X.c0(new V.F(t*s,r*q),u,b)
u.b=!0
o.I(u)
return!0},
gdd:function(){var u=this.b
return u==null?this.b=D.E():u},
gcj:function(){var u=this.c
return u==null?this.c=D.E():u},
gdI:function(){var u=this.d
return u==null?this.d=D.E():u}}
X.c0.prototype={}
X.hy.prototype={}
X.dx.prototype={}
X.ii.prototype={
aX:function(a,b){var u=this,t=new P.a7(Date.now(),!1),s=a.length>0?a[0]:V.b9(),r=u.a.gaS(),q=new X.dx(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
i3:function(a){var u=this.b
if(u==null)return!1
u.I(this.aX(a,!0))
return!0},
i1:function(a){var u=this.c
if(u==null)return!1
u.I(this.aX(a,!0))
return!0},
i2:function(a){var u=this.d
if(u==null)return!1
u.I(this.aX(a,!1))
return!0}}
X.dD.prototype={
gaS:function(){var u=this.a,t=C.i.gd9(u).c
t.toString
u=C.i.gd9(u).d
u.toString
return V.l6(0,0,t,u)},
cJ:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.d0(u,new X.af(t,a.altKey,a.shiftKey))},
aO:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.af(t,a.altKey,a.shiftKey)},
bQ:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.af(t,a.altKey,a.shiftKey)},
au:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.K()
u=t.top
if(typeof r!=="number")return r.K()
return new V.ag(s-q,r-u)},
aZ:function(a){return new V.F(a.movementX,a.movementY)},
bN:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.ag])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
q=C.d.ak(r.pageX)
C.d.ak(r.pageY)
p=o.left
C.d.ak(r.pageX)
n.push(new V.ag(q-p,C.d.ak(r.pageY)-o.top))}return n},
as:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cJ(u,new X.af(t,a.altKey,a.shiftKey))},
bD:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.K()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.K()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fk:function(a){this.f=!0},
f8:function(a){this.f=!1},
fe:function(a){if(this.f&&this.bD(a))a.preventDefault()},
fo:function(a){var u
if(!this.f)return
u=this.cJ(a)
this.b.i4(u)},
fm:function(a){var u
if(!this.f)return
u=this.cJ(a)
this.b.i0(u)},
ft:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aO(a)
if(r.x){u=r.as(a)
t=r.aZ(a)
if(r.d.cb(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.as(a)
s=r.au(a)
if(r.c.cb(u,s))a.preventDefault()},
fz:function(a){var u,t,s,r=this
r.aO(a)
u=r.as(a)
if(r.x){t=r.aZ(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(r.r)return
s=r.au(a)
if(r.c.b6(u,s))a.preventDefault()},
fi:function(a){var u,t,s,r=this
if(!r.bD(a)){r.aO(a)
u=r.as(a)
if(r.x){t=r.aZ(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(r.r)return
s=r.au(a)
if(r.c.b6(u,s))a.preventDefault()}},
fv:function(a){var u,t,s,r=this
r.aO(a)
u=r.as(a)
if(r.x){t=r.aZ(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(r.r)return
s=r.au(a)
if(r.c.b5(u,s))a.preventDefault()},
fg:function(a){var u,t,s,r=this
if(!r.bD(a)){r.aO(a)
u=r.as(a)
if(r.x){t=r.aZ(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(r.r)return
s=r.au(a)
if(r.c.b5(u,s))a.preventDefault()}},
fB:function(a){var u,t,s=this
s.aO(a)
u=new V.F((a&&C.C).ghs(a),C.C.ght(a)).A(0,180)
if(s.x){if(s.d.i5(u))a.preventDefault()
return}if(s.r)return
t=s.au(a)
if(s.c.i6(u,t))a.preventDefault()},
fD:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.as(s.y)
t=s.au(s.y)
s.d.fq(u,t,r)}},
fQ:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bQ(a)
u=t.bN(a)
if(t.e.i3(u))a.preventDefault()},
fM:function(a){var u
this.bQ(a)
u=this.bN(a)
if(this.e.i1(u))a.preventDefault()},
fO:function(a){var u
this.bQ(a)
u=this.bN(a)
if(this.e.i2(u))a.preventDefault()}}
D.bo.prototype={
ar:function(a){var u=this.r
if(u!=null)u.I(a)},
es:function(){return this.ar(null)},
$ia8:1}
D.a8.prototype={}
D.d1.prototype={
ar:function(a){var u=this.x
if(u!=null)u.I(a)},
cQ:function(a){var u=this.y
if(u!=null)u.I(a)},
fp:function(){return this.cQ(null)},
fG:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){s=a[t]
if(s==null||this.eK(s))return!1}return!0},
f2:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcP(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q instanceof D.bo)this.e.push(q)
p=q.r
if(p==null){p=new D.bq()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}u=new D.bu()
u.b=!0
this.ar(u)},
fK:function(a,b){var u,t,s
for(u=b.gV(b),t=this.gcP();u.v();){s=u.gG(u)
C.b.Z(this.e,s)
s.gt().Z(0,t)}u=new D.bv()
u.b=!0
this.ar(u)},
eK:function(a){var u=C.b.U(this.e,a)
return u},
$ai:function(){return[D.a8]},
$ab_:function(){return[D.a8]}}
D.hx.prototype={$ia8:1}
D.hU.prototype={$ia8:1}
V.W.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
V.T.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.G(u.a,3,0)+", "+V.G(u.b,3,0)+", "+V.G(u.c,3,0)+", "+V.G(u.d,3,0)+"]"}}
V.fi.prototype={}
V.d6.prototype={
a3:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.M])
return t},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d6))return!1
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
h:function(a){var u,t,s,r,q=this,p=[P.M],o=V.bL(H.c([q.a,q.d,q.r],p),3,0),n=V.bL(H.c([q.b,q.e,q.x],p),3,0),m=V.bL(H.c([q.c,q.f,q.y],p),3,0)
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
V.aL.prototype={
a3:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.M])
return t},
dG:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.A().a)return V.d7()
u=1/b1
t=-n
s=-a0
return V.aw((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
w:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aw(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bp:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.B(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
ci:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.aa(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aL))return!1
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
h:function(a){return this.M()},
D:function(a){var u,t,s,r,q,p=this,o=[P.M],n=V.bL(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bL(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bL(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bL(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
M:function(){return this.D("")}}
V.ag.prototype={
K:function(a,b){return new V.ag(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ag))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}}
V.aa.prototype={
B:function(a,b){return new V.aa(this.a+b.a,this.b+b.b,this.c+b.c)},
K:function(a,b){return new V.aa(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
V.df.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.df))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.G(u.a,3,0)+", "+V.G(u.b,3,0)+", "+V.G(u.c,3,0)+", "+V.G(u.d,3,0)+"]"}}
V.dh.prototype={
gab:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dh))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.G(u.a,3,0)+", "+V.G(u.b,3,0)+", "+V.G(u.c,3,0)+", "+V.G(u.d,3,0)+"]"}}
V.F.prototype={
c6:function(a){return Math.sqrt(this.H(this))},
H:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.v(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.v(t)
return s*r+u*t},
w:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.w()
u=this.b
if(typeof u!=="number")return u.w()
return new V.F(t*b,u*b)},
A:function(a,b){var u,t
if(Math.abs(b-0)<$.A().a){u=$.li
return u==null?$.li=new V.F(0,0):u}u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.F(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.F))return!1
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
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}}
V.B.prototype={
c6:function(a){return Math.sqrt(this.H(this))},
H:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c7:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.B(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
b2:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.B(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.B(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a){return new V.B(-this.a,-this.b,-this.c)},
A:function(a,b){if(Math.abs(b-0)<$.A().a)return V.aB()
return new V.B(this.a/b,this.b/b,this.c/b)},
dH:function(){var u=$.A().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.B))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
U.eZ.prototype={
bw:function(a){var u=V.ow(a,this.c,this.b)
return u},
gt:function(){var u=this.y
return u==null?this.y=D.E():u},
P:function(a){var u=this.y
if(u!=null)u.I(a)},
scl:function(a,b){},
sc8:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.A().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bw(u)}s=new D.z("maximumLocation",s,t.b)
s.b=!0
t.P(s)}},
sca:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.A().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bw(u)}s=new D.z("minimumLocation",s,t.c)
s.b=!0
t.P(s)}},
saa:function(a,b){var u,t=this
b=t.bw(b)
u=t.d
if(!(Math.abs(u-b)<$.A().a)){t.d=b
u=new D.z("location",u,b)
u.b=!0
t.P(u)}},
sc9:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.A().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.z("maximumVelocity",r,a)
r.b=!0
s.P(r)}},
sW:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.A().a)){u.f=a
t=new D.z("velocity",t,a)
t.b=!0
u.P(t)}},
sbW:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.A().a)){this.x=a
u=new D.z("dampening",u,a)
u.b=!0
this.P(u)}},
al:function(a,b){var u,t,s,r=this,q=r.f,p=$.A().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.saa(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.A().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sW(u)}}}
U.cM.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.E():u},
aV:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cM))return!1
return J.D(this.a,b.a)},
h:function(a){return"Constant: "+this.a.D("          ")}}
U.bU.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.E():u},
P:function(a){var u=this.e
if(u!=null)u.I(a)},
a5:function(){return this.P(null)},
f0:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaJ(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.gt()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.bu()
u.b=!0
this.P(u)},
fI:function(a,b){var u,t
for(u=b.gV(b),t=this.gaJ();u.v();)u.gG(u).gt().Z(0,t)
u=new D.bv()
u.b=!0
this.P(u)},
aV:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.O()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a4(r,r.length),u=null;r.v();){q=r.d
if(q!=null){t=q.aV(0,b,c)
if(t!=null)u=u==null?t:t.w(0,u)}}s.f=u==null?V.d7():u
r=s.e
if(r!=null)r.aE(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bU))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.D(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$ai:function(){return[U.a9]},
$ab_:function(){return[U.a9]},
$ia9:1}
U.a9.prototype={}
U.dE.prototype={
gt:function(){var u=this.cy
return u==null?this.cy=D.E():u},
P:function(a){var u=this.cy
if(u!=null)u.I(a)},
a5:function(){return this.P(null)},
b0:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdd().n(0,u.gbE())
u.a.c.gdI().n(0,u.gbG())
u.a.c.gcj().n(0,u.gbI())
return!0},
bF:function(a){var u=this
if(!J.D(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bH:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaN")
if(!n.y)return
if(n.x){u=a.d.K(0,a.y)
u=new V.F(u.a,u.b)
u=u.H(u)
t=n.r
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.K(0,a.y)
u=new V.F(t.a,t.b).w(0,2).A(0,u.gab())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.w()
s=n.e
if(typeof s!=="number")return H.v(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=new V.F(s.a,s.b).w(0,2).A(0,u.gab())
s=n.b
q=r.a
if(typeof q!=="number")return q.R()
p=n.e
if(typeof p!=="number")return H.v(p)
o=n.z
if(typeof o!=="number")return H.v(o)
s.saa(0,-q*p+o)
n.b.sW(0)
t=t.K(0,a.z)
n.Q=new V.F(t.a,t.b).w(0,2).A(0,u.gab())}n.a5()},
bJ:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.H(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.w()
s=r.e
if(typeof s!=="number")return H.v(s)
u.sW(t*10*s)
r.a5()}},
aV:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.O()
if(q<p){r.ch=p
u=b.y
r.b.al(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aw(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia9:1}
U.dF.prototype={
gt:function(){var u=this.fx
return u==null?this.fx=D.E():u},
P:function(a){var u=this.fx
if(u!=null)u.I(a)},
a5:function(){return this.P(null)},
b0:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdd().n(0,s.gbE())
s.a.c.gdI().n(0,s.gbG())
s.a.c.gcj().n(0,s.gbI())
u=s.a.d
t=u.f
u=t==null?u.f=D.E():t
u.n(0,s.geR())
u=s.a.d
t=u.d
u=t==null?u.d=D.E():t
u.n(0,s.geT())
u=s.a.e
t=u.b
u=t==null?u.b=D.E():t
u.n(0,s.gh9())
u=s.a.e
t=u.d
u=t==null?u.d=D.E():t
u.n(0,s.gh7())
u=s.a.e
t=u.c
u=t==null?u.c=D.E():t
u.n(0,s.gh5())
return!0},
an:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.R()
u=-u}if(this.r){if(typeof t!=="number")return t.R()
t=-t}return new V.F(u,t)},
bF:function(a){var u=this
H.l(a,"$iaN")
if(!J.D(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bH:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaN")
if(!n.cx)return
if(n.ch){u=a.d.K(0,a.y)
u=new V.F(u.a,u.b)
u=u.H(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.K(0,a.y)
u=n.an(new V.F(t.a,t.b).w(0,2).A(0,u.gab()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.R()
s=n.y
if(typeof s!=="number")return H.v(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.R()
t=n.x
if(typeof t!=="number")return H.v(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=n.an(new V.F(s.a,s.b).w(0,2).A(0,u.gab()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.saa(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.saa(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.K(0,a.z)
n.dx=n.an(new V.F(t.a,t.b).w(0,2).A(0,u.gab()))}n.a5()},
bJ:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.H(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.R()
s=r.y
if(typeof s!=="number")return H.v(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.R()
u=r.x
if(typeof u!=="number")return H.v(u)
s.sW(-t*10*u)
r.a5()}},
eS:function(a){var u=this
if(H.l(a,"$id4").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eU:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaN")
if(!J.D(n.d,a.x.b))return
u=a.c
t=a.d
s=t.K(0,a.y)
r=n.an(new V.F(s.a,s.b).w(0,2).A(0,u.gab()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.saa(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.saa(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.K(0,a.z)
n.dx=n.an(new V.F(t.a,t.b).w(0,2).A(0,u.gab()))
n.a5()},
ha:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
h8:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$idx")
if(!n.cx)return
if(n.ch){u=a.d.K(0,a.y)
u=new V.F(u.a,u.b)
u=u.H(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.K(0,a.y)
u=n.an(new V.F(t.a,t.b).w(0,2).A(0,u.gab()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.R()
s=n.y
if(typeof s!=="number")return H.v(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.R()
t=n.x
if(typeof t!=="number")return H.v(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=n.an(new V.F(s.a,s.b).w(0,2).A(0,u.gab()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.saa(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.saa(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.K(0,a.z)
n.dx=n.an(new V.F(t.a,t.b).w(0,2).A(0,u.gab()))}n.a5()},
h6:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.H(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.R()
s=r.y
if(typeof s!=="number")return H.v(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.R()
u=r.x
if(typeof u!=="number")return H.v(u)
s.sW(-t*10*u)
r.a5()}},
aV:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.O()
if(q<p){r.dy=p
u=b.y
r.c.al(0,u)
r.b.al(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aw(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.w(0,V.aw(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia9:1}
U.dG.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.E():u},
P:function(a){var u=this.r
if(u!=null)u.I(a)},
b0:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.E():t
t=r.geW()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.E():s).n(0,t)
return!0},
eX:function(a){var u,t,s,r,q=this
if(!J.D(q.b,q.a.b.c))return
H.l(a,"$ic0")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.w()
r=u+t*s
if(u!==r){q.d=r
u=new D.z("zoom",u,r)
u.b=!0
q.P(u)}},
aV:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.aw(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia9:1}
M.cR.prototype={
aL:function(a){var u=this.y
if(u!=null)u.I(a)},
eu:function(){return this.aL(null)},
fa:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaK(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bq()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.bu()
u.b=!0
this.aL(u)},
fc:function(a,b){var u,t
for(u=b.gV(b),t=this.gaK();u.v();)u.gG(u).gt().Z(0,t)
u=new D.bv()
u.b=!0
this.aL(u)},
gt:function(){var u=this.y
return u==null?this.y=D.E():u},
aC:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.dY(f.d)
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
if(typeof s!=="number")return H.v(s)
o=C.d.ak(p*s)
p=q.b
if(typeof r!=="number")return H.v(r)
n=C.d.ak(p*r)
p=C.d.ak(q.c*s)
a.c=p
q=C.d.ak(q.d*r)
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
i=V.aw(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dX(i)
t=$.l0
if(t==null){t=V.kY(V.l2(),V.kp(),V.lm())
$.l0=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.w(0,h)}a.db.dX(h)
for(u=f.e.a,u=new J.a4(u,u.length);u.v();)u.d.al(0,a)
for(u=f.e.a,u=new J.a4(u,u.length);u.v();)u.d.aC(a)
f.b.toString
a.cy.cc()
a.db.cc()
f.c.toString
a.dV()}}
A.cG.prototype={}
A.eN.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hz:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dc:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.Z.prototype={
gam:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
h:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof A.Z))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.fz.prototype={}
A.h_.prototype={
el:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.S("")
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
A.nN(c0,u)
A.nP(c0,u)
A.nO(c0,u)
A.nR(c0,u)
A.nS(c0,u)
A.nQ(c0,u)
A.nT(c0,u)
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
b5.dF(0,s.charCodeAt(0)==0?s:s,A.nM(b5.z))
b5.Q=b5.x.i(0,"posAttr")
b5.cx=b5.x.i(0,"normAttr")
b5.ch=b5.x.i(0,"binmAttr")
b5.cy=b5.x.i(0,"txt2DAttr")
b5.db=b5.x.i(0,"txtCubeAttr")
b5.dx=b5.x.i(0,"bendAttr")
if(c0.dx)b5.id=H.l(b5.y.J(0,"invViewMat"),"$ia1")
if(t)b5.dy=H.l(b5.y.J(0,"objMat"),"$ia1")
if(r)b5.fr=H.l(b5.y.J(0,"viewObjMat"),"$ia1")
b5.fy=H.l(b5.y.J(0,"projViewObjMat"),"$ia1")
if(c0.ry)b5.k1=H.l(b5.y.J(0,"txt2DMat"),"$ice")
if(c0.x1)b5.k2=H.l(b5.y.J(0,"txtCubeMat"),"$ia1")
if(c0.x2)b5.k3=H.l(b5.y.J(0,"colorMat"),"$ia1")
b5.r1=H.c([],[A.a1])
t=c0.y2
if(t>0){b5.k4=b5.y.J(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.i(0,q)
if(m==null)H.t(P.r(b7+q+b8))
s.push(H.l(m,"$ia1"))}}t=c0.a
if(t.a)b5.r2=H.l(b5.y.J(0,"emissionClr"),"$iI")
if(t.b)b5.rx=H.l(b5.y.J(0,"emissionTxt"),"$ia_")
t=c0.b
if(t.a)b5.x1=H.l(b5.y.J(0,"ambientClr"),"$iI")
if(t.b)b5.x2=H.l(b5.y.J(0,"ambientTxt"),"$ia_")
t=c0.c
if(t.a)b5.y2=H.l(b5.y.J(0,"diffuseClr"),"$iI")
if(t.b)b5.az=H.l(b5.y.J(0,"diffuseTxt"),"$ia_")
t=c0.d
if(t.a)b5.df=H.l(b5.y.J(0,"invDiffuseClr"),"$iI")
if(t.b)b5.dg=H.l(b5.y.J(0,"invDiffuseTxt"),"$ia_")
t=c0.e
s=t.a
if(s||t.b||!1){b5.dj=H.l(b5.y.J(0,"shininess"),"$iU")
if(s)b5.dh=H.l(b5.y.J(0,"specularClr"),"$iI")
if(t.b)b5.di=H.l(b5.y.J(0,"specularTxt"),"$ia_")}if(c0.f.b)b5.dk=H.l(b5.y.J(0,"bumpTxt"),"$ia_")
if(c0.cy){b5.dl=H.l(b5.y.J(0,"envSampler"),"$ibD")
t=c0.r
if(t.a)b5.dm=H.l(b5.y.J(0,"reflectClr"),"$iI")
if(t.b)b5.dn=H.l(b5.y.J(0,"reflectTxt"),"$ia_")
t=c0.x
s=t.a
if(s||t.b||!1){b5.dq=H.l(b5.y.J(0,"refraction"),"$iU")
if(s)b5.dr=H.l(b5.y.J(0,"refractClr"),"$iI")
if(t.b)b5.ds=H.l(b5.y.J(0,"refractTxt"),"$ia_")}}t=c0.y
if(t.a)b5.dt=H.l(b5.y.J(0,"alpha"),"$iU")
if(t.b)b5.du=H.l(b5.y.J(0,"alphaTxt"),"$ia_")
t=P.w
s=[t,A.dA]
b5.bX=new H.N(s)
b5.bY=new H.N([t,[P.o,A.cd]])
b5.bZ=new H.N(s)
b5.c_=new H.N([t,[P.o,A.cf]])
b5.c0=new H.N(s)
b5.c1=new H.N([t,[P.o,A.cg]])
if(c0.id){for(t=c0.z,s=t.length,r=[A.cd],l=0;l<t.length;t.length===s||(0,H.q)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ah()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.i(0,g)
if(m==null)H.t(P.r(b7+g+b8))
H.l(m,"$iI")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.i(0,g)
if(f==null)H.t(P.r(b7+g+b8))
H.l(f,"$iI")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.i(0,g)
if(e==null)H.t(P.r(b7+g+b8))
H.l(e,"$iI")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.i(0,g)
if(m==null)H.t(P.r(b7+g+b8))
H.l(m,"$iI")
o=b5.y
g=i+"s["+n+"].color"
f=o.i(0,g)
if(f==null)H.t(P.r(b7+g+b8))
H.l(f,"$iI")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.i(0,o)
if(e==null)H.t(P.r(b7+o+b8))
H.l(e,"$ia_")
a=e}else a=b6
h.push(new A.cd(b,c,d,m,f,a))}b5.bY.m(0,j,h)
q=b5.bX
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.t(P.r(b7+o+b8))
q.m(0,j,m)}for(t=c0.Q,s=t.length,r=[A.cf],l=0;l<t.length;t.length===s||(0,H.q)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.i(0,o)
if(m==null)H.t(P.r(b7+o+b8))
H.l(m,"$iI")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.i(0,o)
if(f==null)H.t(P.r(b7+o+b8))
H.l(f,"$iI")
p=b5.y
o=i+"s["+n+"].color"
e=p.i(0,o)
if(e==null)H.t(P.r(b7+o+b8))
H.l(e,"$iI")
if(typeof j!=="number")return j.ah()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.i(0,o)
if(a0==null)H.t(P.r(b7+o+b8))
H.l(a0,"$ice")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.i(0,o)
if(a0==null)H.t(P.r(b7+o+b8))
H.l(a0,"$ibD")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.i(0,o)
if(a0==null)H.t(P.r(b7+o+b8))
H.l(a0,"$ibD")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.i(0,o)
if(a2==null)H.t(P.r(b7+o+b8))
H.l(a2,"$ibd")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.i(0,o)
if(a0==null)H.t(P.r(b7+o+b8))
H.l(a0,"$iU")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.i(0,o)
if(a2==null)H.t(P.r(b7+o+b8))
H.l(a2,"$iU")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.i(0,o)
if(a5==null)H.t(P.r(b7+o+b8))
H.l(a5,"$iU")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}h.push(new A.cf(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.c_.m(0,j,h)
q=b5.bZ
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.t(P.r(b7+o+b8))
q.m(0,j,m)}for(t=c0.ch,s=t.length,r=[A.cg],l=0;l<t.length;t.length===s||(0,H.q)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.i(0,o)
if(m==null)H.t(P.r(b7+o+b8))
H.l(m,"$iI")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.i(0,o)
if(f==null)H.t(P.r(b7+o+b8))
H.l(f,"$iI")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.i(0,o)
if(e==null)H.t(P.r(b7+o+b8))
H.l(e,"$iI")
p=b5.y
o=i+"s["+n+"].color"
a0=p.i(0,o)
if(a0==null)H.t(P.r(b7+o+b8))
H.l(a0,"$iI")
if(typeof j!=="number")return j.ah()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.i(0,o)
if(a2==null)H.t(P.r(b7+o+b8))
H.l(a2,"$iI")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.i(0,o)
if(a5==null)H.t(P.r(b7+o+b8))
H.l(a5,"$iI")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.i(0,o)
if(a9==null)H.t(P.r(b7+o+b8))
H.l(a9,"$iU")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.i(0,o)
if(b0==null)H.t(P.r(b7+o+b8))
H.l(b0,"$iU")
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
if(a2==null)H.t(P.r(b7+g+b8))
H.l(a2,"$ibd")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.i(0,g)
if(a2==null)H.t(P.r(b7+g+b8))
H.l(a2,"$iU")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.i(0,g)
if(a5==null)H.t(P.r(b7+g+b8))
H.l(a5,"$iU")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.i(0,g)
if(a2==null)H.t(P.r(b7+g+b8))
H.l(a2,"$iU")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.i(0,g)
if(a5==null)H.t(P.r(b7+g+b8))
H.l(a5,"$iU")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.i(0,g)
if(a9==null)H.t(P.r(b7+g+b8))
H.l(a9,"$iU")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.i(0,g)
if(a2==null)H.t(P.r(b7+g+b8))
H.l(a2,"$ia_")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.i(0,o)
if(a2==null)H.t(P.r(b7+o+b8))
H.l(a2,"$ia_")
a3=a2}else a3=b6
h.push(new A.cg(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.c1.m(0,j,h)
q=b5.c0
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.t(P.r(b7+o+b8))
q.m(0,j,m)}}},
ai:function(a,b){if(b!=null&&b.d)a.ec(b)},
h0:function(a,b){}}
A.cO.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.dg.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.dl.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.h2.prototype={
h:function(a){return this.az}}
A.cd.prototype={}
A.cf.prototype={}
A.cg.prototype={}
A.dj.prototype={
ct:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dF:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cK(b,35633)
r.f=r.cK(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.t(P.r("Failed to link shader: "+H.e(s)))}r.h1()
r.h3()},
aw:function(a){a.a.useProgram(this.r)
this.x.hz()},
cK:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.r("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
h1:function(){var u,t,s,r=this,q=H.c([],[A.cG]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cG(p,t.name,s))}r.x=new A.eN(q)},
h3:function(){var u,t,s,r=this,q=H.c([],[A.dz]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hr(t.type,t.size,t.name,s))}r.y=new A.iu(q)},
aN:function(a,b,c){var u=this.a
if(a===1)return new A.dA(u,b,c)
else return A.km(u,this.r,b,a,c)},
eM:function(a,b,c){var u=this.a
if(a===1)return new A.a_(u,b,c)
else return A.km(u,this.r,b,a,c)},
eN:function(a,b,c){var u=this.a
if(a===1)return new A.bD(u,b,c)
else return A.km(u,this.r,b,a,c)},
bf:function(a,b){return new P.dR(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hr:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aN(b,c,d)
case 5121:return u.aN(b,c,d)
case 5122:return u.aN(b,c,d)
case 5123:return u.aN(b,c,d)
case 5124:return u.aN(b,c,d)
case 5125:return u.aN(b,c,d)
case 5126:return new A.U(u.a,c,d)
case 35664:return new A.iq(u.a,c,d)
case 35665:return new A.I(u.a,c,d)
case 35666:return new A.bd(u.a,c,d)
case 35667:return new A.ir(u.a,c,d)
case 35668:return new A.is(u.a,c,d)
case 35669:return new A.it(u.a,c,d)
case 35674:return new A.iv(u.a,c,d)
case 35675:return new A.ce(u.a,c,d)
case 35676:return new A.a1(u.a,c,d)
case 35678:return u.eM(b,c,d)
case 35680:return u.eN(b,c,d)
case 35670:throw H.d(u.bf("BOOL",c))
case 35671:throw H.d(u.bf("BOOL_VEC2",c))
case 35672:throw H.d(u.bf("BOOL_VEC3",c))
case 35673:throw H.d(u.bf("BOOL_VEC4",c))
default:throw H.d(P.r("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.dz.prototype={}
A.iu.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
J:function(a,b){var u=this.i(0,b)
if(u==null)throw H.d(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.M()},
M:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.q)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.dA.prototype={
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
A.I.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.bd.prototype={
b9:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iv.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.ce.prototype={
a7:function(a){var u=new Float32Array(H.bH(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.a1.prototype={
a7:function(a){var u=new Float32Array(H.bH(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.a_.prototype={
ec:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bD.prototype={
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jE.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c7(s.b,b).c7(s.d.c7(s.c,b),c)
s=new V.aa(r.a,r.b,r.c)
if(!J.D(a.f,s)){a.f=s
s=a.a
if(s!=null)s.Y()}a.sij(r.A(0,Math.sqrt(r.H(r))))
s=1-b
u=1-c
u=new V.df(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.D(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.Y()}}}
F.br.prototype={
eC:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.aB()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dH())return
return s.A(0,Math.sqrt(s.H(s)))},
eI:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.K(0,q)
r=new V.B(r.a,r.b,r.c)
s=r.A(0,Math.sqrt(r.H(r)))
r=t.K(0,q)
r=new V.B(r.a,r.b,r.c)
r=s.b2(r.A(0,Math.sqrt(r.H(r))))
return r.A(0,Math.sqrt(r.H(r)))},
bS:function(){var u,t=this
if(t.d!=null)return!0
u=t.eC()
if(u==null){u=t.eI()
if(u==null)return!1}t.d=u
t.a.a.Y()
return!0},
eB:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.aB()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dH())return
return s.A(0,Math.sqrt(s.H(s)))},
eH:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.A().a){l=d.K(0,g)
l=new V.B(l.a,l.b,l.c)
q=l.A(0,Math.sqrt(l.H(l)))
if(s.a-t.a<0)q=q.R(0)}else{p=(l-u.b)/r
l=d.K(0,g)
l=new V.aa(l.a*p,l.b*p,l.c*p).B(0,g).K(0,j)
l=new V.B(l.a,l.b,l.c)
q=l.A(0,Math.sqrt(l.H(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.R(0)}l=n.d
if(l!=null){o=l.A(0,Math.sqrt(l.H(l)))
l=o.b2(q)
l=l.A(0,Math.sqrt(l.H(l))).b2(o)
q=l.A(0,Math.sqrt(l.H(l)))}return q},
bR:function(){var u,t=this
if(t.e!=null)return!0
u=t.eB()
if(u==null){u=t.eH()
if(u==null)return!1}t.e=u
t.a.a.Y()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.M()},
D:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.a.ag(J.a3(s.e),0)+", "+C.a.ag(J.a3(t.b.e),0)+", "+C.a.ag(J.a3(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.h(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.h(0)+"}"):u+"-}"},
M:function(){return this.D("")}}
F.bx.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.M()},
D:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.a.ag(J.a3(u.e),0)+", "+C.a.ag(J.a3(this.b.e),0)},
M:function(){return this.D("")}}
F.c4.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.M()},
D:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.ag(J.a3(u.e),0)},
M:function(){return this.D("")}}
F.ah.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.E():u},
hR:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.S()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.q)(g),++s){r=g[s]
h.a.n(0,r.aT())}h.a.S()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.q)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.S()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
n=p[o]
h.b.a.a.n(0,n)
F.mD(n)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.q)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.S()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.S()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.mu(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.q)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.S()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.S()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.S()
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
F.cS(l,k,i)}g=h.e
if(g!=null)g.aE(0)},
ay:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ay()||!1
if(!t.a.ay())u=!1
s=t.e
if(s!=null)s.aE(0)
return u},
aR:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aR()||!1
if(!t.a.aR())u=!1
s=t.e
if(s!=null)s.aE(0)
return u},
bg:function(){var u=this.e
if(u!=null)++u.d
this.a.bg()
u=this.e
if(u!=null)u.aE(0)
return!0},
d8:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aq()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.ap().a)!==0)++s
if((t&$.ao().a)!==0)++s
if((t&$.aX().a)!==0)++s
if((t&$.bi().a)!==0)++s
if((t&$.bh().a)!==0)++s
if((t&$.cC().a)!==0)++s
if((t&$.bN().a)!==0)++s
if((t&$.aW().a)!==0)++s
r=a4.gcp(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.c(u,[P.M])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.cH])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.hh(m)
k=l.gcp(l)
if(m>=t)return H.b(o,m)
o[m]=new Z.cH(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.b(i,j)
h=i[j].hP(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.b(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bH(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bm(new Z.dH(a1,d),o,a4)
c.b=H.c([],[Z.bt])
if(a0.b.b.length!==0){b=H.c([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.S()
b.push(t.e)}a=Z.kr(u,34963,b)
c.b.push(new Z.bt(0,b.length,a))}if(a0.c.b.length!==0){b=H.c([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.S()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.S()
b.push(t.e)}a=Z.kr(u,34963,b)
c.b.push(new Z.bt(1,b.length,a))}if(a0.d.b.length!==0){b=H.c([],[P.w])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.S()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.S()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].c
t.a.a.S()
b.push(t.e)}a=Z.kr(u,34963,b)
c.b.push(new Z.bt(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.c([],[P.j])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.D(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.D(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.D(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.D(t))}return C.b.k(s,"\n")},
Y:function(){var u=this.e
if(u!=null)u.I(null)}}
F.hL.prototype={
hf:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.c([],[F.br])
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
h.push(F.cS(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.cS(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.cS(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.cS(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
ay:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.q)(u),++r)if(!u[r].bS())s=!1
return s},
aR:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.q)(u),++r)if(!u[r].bR())s=!1
return s},
h:function(a){return this.M()},
D:function(a){var u,t,s,r=H.c([],[P.j])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].D(a))
return C.b.k(r,"\n")},
M:function(){return this.D("")}}
F.hM.prototype={
av:function(a,b,c){var u,t=this.a
t.a.n(0,b)
t.a.n(0,c)
t=new F.bx()
if(b==null)H.t(P.r("May not create a line with a null start vertex."))
if(c==null)H.t(P.r("May not create a line with a null end vertex."))
u=b.a
if(u==null)H.t(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(u!=c.a)H.t(P.r("May not create a line with vertices attached to different shapes."))
t.a=b
b.c.b.push(t)
t.b=c
c.c.c.push(t)
t.a.a.c.b.push(t)
t.a.a.Y()
return t},
gl:function(a){return this.b.length},
h:function(a){return this.M()},
D:function(a){var u,t,s=H.c([],[P.j]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].D(a+(""+u+". ")))}return C.b.k(s,"\n")},
M:function(){return this.D("")}}
F.hN.prototype={
gl:function(a){return this.b.length},
h:function(a){return this.M()},
D:function(a){var u,t,s,r=H.c([],[P.j])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].D(a))
return C.b.k(r,"\n")},
M:function(){return this.D("")}}
F.ch.prototype={
bV:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.kq(u.cx,r,o,t,s,q,p,a,n)},
aT:function(){return this.bV(null)},
sdJ:function(a){var u
a=a==null?null:a.A(0,Math.sqrt(a.H(a)))
if(!J.D(this.r,a)){this.r=a
u=this.a
if(u!=null)u.Y()}},
sax:function(a){var u
a=a==null?null:a.A(0,Math.sqrt(a.H(a)))
if(!J.D(this.x,a)){this.x=a
u=this.a
if(u!=null)u.Y()}},
sij:function(a){var u
if(!J.D(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Y()}},
sa9:function(a,b){var u
if(!J.D(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.Y()}},
hP:function(a){var u,t,s=this
if(a.q(0,$.aq())){u=s.f
t=[P.M]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.ap())){u=s.r
t=[P.M]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.ao())){u=s.x
t=[P.M]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.aX())){u=s.y
t=[P.M]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.q(0,$.bi())){u=s.z
t=[P.M]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.bh())){u=s.Q
t=[P.M]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.cC())){u=s.Q
t=[P.M]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.bN()))return H.c([s.ch],[P.M])
else if(a.q(0,$.aW())){u=s.cx
t=[P.M]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.M])},
bS:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.aB()
t.d.u(0,new F.iU(s))
s=s.a
t.r=s.A(0,Math.sqrt(s.H(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.aE(0)}return!0},
bR:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.aB()
t.d.u(0,new F.iT(s))
s=s.a
t.x=s.A(0,Math.sqrt(s.H(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.aE(0)}return!0},
dw:function(a){var u,t,s,r=this.c.b.length
for(u=0;u<r;++u){t=this.c.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.b
t.a.a.S()
t=t.e
a.a.a.S()
if(t==a.e)return s}return},
hE:function(a){var u=this.dw(a)
if(u!=null)return u
return a.dw(this)},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.M()},
D:function(a){var u,t,s=this,r="-",q=H.c([],[P.j])
q.push(C.a.ag(J.a3(s.e),0))
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
M:function(){return this.D("")}}
F.iU.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.iT.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.iN.prototype={
S:function(){},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.r("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.Y()
return!0},
d1:function(a,b){var u=null,t=F.kq(u,u,a,u,u,b,u,u,0)
this.n(0,t)
return t},
d2:function(a,b,c){var u=null,t=F.kq(u,u,u,new V.aa(a,b,c),u,u,u,u,0)
this.n(0,t)
return t},
gl:function(a){return this.c.length},
ay:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)u[s].bS()
return!0},
aR:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)u[s].bR()
return!0},
bg:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.A(0,Math.sqrt(p*p+o*o+n*n))
if(!J.D(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.I(null)}}}}return!0},
h:function(a){return this.M()},
D:function(a){var u,t,s,r
this.S()
u=H.c([],[P.j])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r)u.push(t[r].D(a))
return C.b.k(u,"\n")},
M:function(){return this.D("")}}
F.iO.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
u:function(a,b){var u=this
C.b.u(u.b,b)
C.b.u(u.c,new F.iP(u,b))
C.b.u(u.d,new F.iQ(u,b))},
h:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.j])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].D(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].D(""))
return C.b.k(r,"\n")}}
F.iP.prototype={
$1:function(a){if(!J.D(a.a,this.a))this.b.$1(a)}}
F.iQ.prototype={
$1:function(a){var u=this.a
if(!J.D(a.a,u)&&!J.D(a.b,u))this.b.$1(a)}}
F.iR.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.j])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].D(""))
return C.b.k(r,"\n")}}
F.iS.prototype={
gl:function(a){return this.b.length},
h:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.j])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].D(""))
return C.b.k(r,"\n")}}
O.cW.prototype={
gt:function(){var u=this.rx
return u==null?this.rx=D.E():u},
T:function(a){var u=this.rx
if(u!=null)u.I(a)},
al:function(a,b){},
dZ:function(a,b){var u,t,s,r,q,p,o=this,n="Inspection",m=2929
if(o.a==null){u=a.fr.i(0,n)
if(u==null){t=a.a
u=new A.fz(t,n)
u.ct(t,n)
u.dF(0,"uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n","precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n")
u.z=u.x.i(0,"posAttr")
u.Q=u.x.i(0,"normAttr")
u.ch=u.x.i(0,"clrAttr")
u.cx=u.x.i(0,"binmAttr")
u.cy=H.l(u.y.i(0,"lightVec"),"$iI")
u.db=H.l(u.y.i(0,"ambientClr"),"$ibd")
u.dx=H.l(u.y.i(0,"diffuseClr"),"$ibd")
u.dy=H.l(u.y.i(0,"weightScalar"),"$iU")
u.fr=H.l(u.y.i(0,"viewMat"),"$ia1")
u.fx=H.l(u.y.i(0,"viewObjMatrix"),"$ia1")
u.fy=H.l(u.y.i(0,"projViewObjMatrix"),"$ia1")
a.d4(u)}o.a=u}if(b.e==null){b.d.ay()
b.d.aR()
b.d.bg()
t=new Z.cI()
t.a=new H.N([P.j,Z.bm])
b.e=t}t=o.a
t.aw(a)
s=o.r2
r=t.dy
r.a.uniform1f(r.d,s)
s=o.b
r=t.cy
r.toString
q=s.a
p=s.b
s=s.c
r.a.uniform3f(r.d,q,p,s)
s=a.db
s=s.ga_(s)
p=t.fr
p.toString
p.a7(s.a3(0,!0))
s=a.ge7()
p=t.fx
p.toString
p.a7(s.a3(0,!0))
s=a.gdW()
t=t.fy
t.toString
t.a7(s.a3(0,!0))
t=b.e
if(t instanceof Z.cI){s=a.a
s.blendFunc(1,1)
if(b.c==null){s.disable(m)
s.enable(3042)
s.blendFunc(1,1)
if(o.k3)o.fT(a,t,b.d,"Axis",o.gcB(),o.z,o.y)
s.enable(m)
s.blendFunc(770,771)}else{s.enable(m)
s.enable(3042)
s.blendFunc(770,771)
s.disable(m)
s.blendFunc(1,1)
if(o.ch)o.be(a,t,b.c,"wireFrame",o.ghb(),o.f,o.e)
if(o.cy)o.be(a,t,b.c,"normals",o.geY(),o.f,o.e)
if(o.db)o.be(a,t,b.c,"binormals",o.geF(),o.f,o.e)
if(o.k3)o.be(a,t,b.c,"Axis",o.gcB(),o.z,o.y)
s.enable(m)
s.blendFunc(770,771)}}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.dc()},
be:function(a,b,c,d,e,f,g){var u,t=b.a.i(0,d)
if(t==null){t=this.cC(a,e.$1(c))
b.a.m(0,d,t)}u=this.a
u.db.b9(f)
u.dx.b9(g)
t.dS(a)},
fT:function(a,b,c,d,e,f,g){var u,t=b.a.i(0,d)
if(t==null){t=this.cC(a,e.$1(c))
b.a.m(0,d,t)}u=this.a
u.db.b9(f)
u.dx.b9(g)
t.dS(a)},
cC:function(a,b){var u=this,t=$.aq(),s=$.ap(),r=b.d8(new Z.dI(a.a),new Z.aC(t.a|s.a|$.ao().a|$.bh().a))
r.ae($.aq()).e=u.a.z.c
r.ae($.ap()).e=u.a.Q.c
r.ae($.bh()).e=u.a.ch.c
r.ae($.ao()).e=u.a.cx.c
return r},
cZ:function(a,b){var u,t={}
t.a=b
u=F.c9()
t.a=new V.T(0,0.7,1,1)
C.b.u(a.a.c,new O.fE(t,u))
t=new O.fD(u)
C.b.u(a.c.b,new O.fF(u,t))
C.b.u(a.d.b,new O.fG(u,t))
return u},
hc:function(a){return this.cZ(a,null)},
eZ:function(a){var u=F.c9()
C.b.u(a.a.c,new O.fC(new V.T(1,1,0.3,1),u))
return u},
eG:function(a){var u=F.c9()
C.b.u(a.a.c,new O.fB(new V.T(1,0.3,0.3,1),u))
return u},
eD:function(a){return this.eE(a)},
eE:function(a){var u=F.c9(),t=new O.fA(u)
t.$3(1,0,0)
t.$3(0,1,0)
t.$3(0,0,1)
return u}}
O.fE.prototype={
$1:function(a){var u=this.b.a,t=a.aT()
t.sa9(0,this.a.a)
t.sax(V.aB())
u.n(0,t)}}
O.fD.prototype={
$2:function(a,b){if(a.hE(b)==null)this.a.c.av(0,a,b)}}
O.fF.prototype={
$1:function(a){var u,t=this.a,s=t.a,r=a.a
r.a.a.S()
r=r.e
s=s.c
if(r>>>0!==r||r>=s.length)return H.b(s,r)
u=s[r]
t=t.a
r=a.b
r.a.a.S()
r=r.e
t=t.c
if(r>>>0!==r||r>=t.length)return H.b(t,r)
this.b.$2(u,t[r])}}
O.fG.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.a,p=a.a
p.a.a.S()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
u=q[p]
p=r.a
q=a.b
q.a.a.S()
q=q.e
p=p.c
if(q>>>0!==q||q>=p.length)return H.b(p,q)
t=p[q]
r=r.a
q=a.c
q.a.a.S()
q=q.e
r=r.c
if(q>>>0!==q||q>=r.length)return H.b(r,q)
s=r[q]
q=this.b
q.$2(u,t)
q.$2(t,s)
q.$2(s,u)}}
O.fC.prototype={
$1:function(a){var u,t,s=a.aT()
s.sa9(0,this.a)
s.sax(V.aB())
u=s.aT()
u.sax(s.r)
t=this.b
t.a.n(0,s)
t.a.n(0,u)
t.c.av(0,s,u)}}
O.fB.prototype={
$1:function(a){var u,t,s=a.aT()
s.sa9(0,this.a)
s.sax(V.aB())
u=s.aT()
u.sax(a.x)
t=this.b
t.a.n(0,s)
t.a.n(0,u)
t.c.av(0,s,u)}}
O.fA.prototype={
$3:function(a,b,c){var u,t,s=a>1?1:a,r=b>1?1:b,q=c>1?1:c,p=new V.T(s,r,q,1)
s=this.a
u=s.a.d2(0,0,0)
u.sax(V.aB())
u.sdJ(V.ln())
u.sa9(0,p)
t=s.a.d2(a,b,c)
t.sax(V.aB())
t.sdJ(V.ln())
t.sa9(0,p)
s.c.av(0,u,t)}}
O.d5.prototype={
gt:function(){var u=this.fr
return u==null?this.fr=D.E():u},
T:function(a){var u=this.fr
if(u!=null)u.I(a)},
bM:function(){return this.T(null)},
cR:function(a){this.a=null
this.T(a)},
fX:function(){return this.cR(null)},
f4:function(a,b){var u=new D.bu()
u.b=!0
this.T(u)},
f6:function(a,b){var u=new D.bv()
u.b=!0
this.T(u)},
cH:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.w,h=new H.N([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=h.i(0,0)
h.m(0,0,r==null?1:r)}q=H.c([],[A.cO])
h.u(0,new O.h6(j,q))
C.b.bt(q,new O.h7())
p=new H.N([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){o=u[s]
r=o.gb1()
n=p.i(0,o.gb1())
p.m(0,r,n==null?1:n)}m=H.c([],[A.dg])
p.u(0,new O.h8(j,m))
C.b.bt(m,new O.h9())
l=new H.N([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.q)(i),++s){o=i[s]
t=o.gb1()
r=l.i(0,o.gb1())
l.m(0,t,r==null?1:r)}k=H.c([],[A.dl])
l.u(0,new O.ha(j,k))
C.b.bt(k,new O.hb())
i=C.c.a6(j.e.a.length+3,4)
j.dy.e
return A.mB(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
ac:function(a,b){if(b!=null)if(!C.b.U(a,b)){b.a=a.length
a.push(b)}},
al:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a4(u,u.length);u.v();){t=u.d
t.toString
s=$.iM
if(s==null)s=$.iM=new V.B(0,0,1)
t.a=s
r=$.iL
t.d=r==null?$.iL=new V.B(0,1,0):r
r=$.iK
t.e=r==null?$.iK=new V.B(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bp(s)
r=s.a
p=s.b
o=s.c
t.a=s.A(0,Math.sqrt(r*r+p*p+o*o))
o=q.bp(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.A(0,Math.sqrt(p*p+r*r+s*s))
s=q.bp(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.A(0,Math.sqrt(r*r+p*p+o*o))}}}},
dZ:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a
if(b0==null){b0=a9.cH()
u=b1.fr.i(0,b0.az)
if(u==null){u=A.mA(b0,b1.a)
b1.d4(u)}b0=a9.a=u
b2.e=null}t=b0.z
s=t.de
b0=b2.e
if(!(b0 instanceof Z.bm))b0=b2.e=null
if(b0==null||!b0.d.q(0,s)){b0=t.k3
if(b0)b2.d.ay()
r=t.k4
if(r)b2.d.aR()
q=t.r2
if(q)b2.d.bg()
p=b2.d.d8(new Z.dI(b1.a),s)
p.ae($.aq()).e=a9.a.Q.c
if(b0)p.ae($.ap()).e=a9.a.cx.c
if(r)p.ae($.ao()).e=a9.a.ch.c
if(t.r1)p.ae($.aX()).e=a9.a.cy.c
if(q)p.ae($.bi()).e=a9.a.db.c
if(t.rx)p.ae($.aW()).e=a9.a.dx.c
b2.e=p}o=H.c([],[T.ds])
a9.a.aw(b1)
if(t.dy){b0=a9.a
r=b1.dx
r=r.ga_(r)
b0=b0.dy
b0.toString
b0.a7(r.a3(0,!0))}if(t.fr){b0=a9.a
r=b1.ge7()
b0=b0.fr
b0.toString
b0.a7(r.a3(0,!0))}b0=a9.a
r=b1.gdW()
b0=b0.fy
b0.toString
b0.a7(r.a3(0,!0))
if(t.ry){b0=a9.a
r=a9.b
b0=b0.k1
b0.toString
b0.a7(C.j.a3(r,!0))}if(t.x1){b0=a9.a
r=a9.c
b0=b0.k2
b0.toString
b0.a7(C.j.a3(r,!0))}if(t.x2){b0=a9.a
r=a9.d
b0=b0.k3
b0.toString
b0.a7(C.j.a3(r,!0))}if(t.y2>0){n=a9.e.a.length
b0=a9.a.k4
b0.a.uniform1i(b0.d,n)
for(m=0;m<n;++m){b0=a9.a
r=a9.e.a
if(m>=r.length)return H.b(r,m)
r=r[m]
b0=b0.r1
if(m>=b0.length)return H.b(b0,m)
b0=b0[m]
l=new Float32Array(H.bH(r.a3(0,!0)))
b0.a.uniformMatrix4fv(b0.d,!1,l)}}b0=t.a
if(b0.a){r=a9.a
q=a9.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.ac(o,a9.f.d)
b0=a9.a
r=a9.f.d
b0.ai(b0.rx,r)}if(t.id){b0=t.b
if(b0.a){r=a9.a
q=a9.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.ac(o,a9.r.d)
b0=a9.a
r=a9.r.d
b0.ai(b0.x2,r)}b0=t.c
if(b0.a){r=a9.a
q=a9.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.ac(o,a9.x.d)
b0=a9.a
r=a9.x.d
b0.ai(b0.az,r)}b0=t.d
if(b0.a){r=a9.a
q=a9.y.f
r=r.df
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.ac(o,a9.y.d)
b0=a9.a
r=a9.y.d
b0.ai(b0.dg,r)}b0=t.e
r=b0.a
if(r||b0.b||!1){q=a9.a
k=a9.z.ch
q=q.dj
q.a.uniform1f(q.d,k)}if(r){r=a9.a
q=a9.z.f
r=r.dh
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.ac(o,a9.z.d)
b0=a9.a
r=a9.z.d
b0.ai(b0.di,r)}b0=t.z
if(b0.length>0){r=b1.db
j=r.ga_(r)
r=P.w
i=new H.N([r,r])
for(r=a9.dx.e,q=r.length,h=0;h<r.length;r.length===q||(0,H.q)(r),++h){g=r[h]
f=i.i(0,0)
if(f==null)f=0
i.m(0,0,f+1)
e=J.cD(a9.a.bY.i(0,0),f)
k=j.bp(g.a)
d=k.a
c=k.b
b=k.c
b=k.A(0,Math.sqrt(d*d+c*c+b*b))
c=e.e
d=b.a
k=b.b
b=b.c
c.a.uniform3f(c.d,d,k,b)
b=g.c
k=e.f
k.a.uniform3f(k.d,b.a,b.b,b.c)}for(r=b0.length,h=0;h<b0.length;b0.length===r||(0,H.q)(b0),++h){q=b0[h].a
n=i.i(0,q)
if(n==null)n=0
q=a9.a.bX.i(0,q)
q.a.uniform1i(q.d,n)}}b0=t.Q
if(b0.length>0){r=b1.db
j=r.ga_(r)
r=P.w
a=new H.N([r,r])
for(r=a9.dx.f,q=r.length,h=0;h<r.length;r.length===q||(0,H.q)(r),++h){g=r[h]
a0=g.gb1()
f=a.i(0,a0)
if(f==null)f=0
a.m(0,a0,f+1)
e=J.cD(a9.a.c_.i(0,a0),f)
a1=j.w(0,g.ga_(g))
k=g.ga_(g)
d=$.c5
k=k.ci(d==null?$.c5=new V.aa(0,0,0):d)
d=e.b
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=$.c5
k=a1.ci(k==null?$.c5=new V.aa(0,0,0):k)
d=e.c
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=g.ga9(g)
d=e.e
d.a.uniform3f(d.d,k.a,k.b,k.c)
g.gaF()
k=a1.dG(0)
d=k.a
c=k.b
b=k.c
a2=k.e
a3=k.f
a4=k.r
a5=k.y
a6=k.z
k=k.Q
a7=e.d
a7.toString
l=new Float32Array(H.bH(new V.d6(d,c,b,a2,a3,a4,a5,a6,k).a3(0,!0)))
a7.a.uniformMatrix3fv(a7.d,!1,l)
g.gaF()
k=g.gaF()
if(!C.b.U(o,k)){k.a=o.length
o.push(k)}k=g.gaF()
d=k.gb3(k)
if(d){d=e.f
d.toString
c=k.gb3(k)
if(!c)d.a.uniform1i(d.d,0)
else{k=k.ghJ(k)
d.a.uniform1i(d.d,k)}}g.gaW()
k=g.ged()
d=e.x
d.toString
c=k.ghv(k)
b=k.ghw(k)
a2=k.ghx()
k=k.ghu()
d.a.uniform4f(d.d,c,b,a2,k)
k=g.gaW()
if(!C.b.U(o,k)){k.a=o.length
o.push(k)}k=g.gaW()
d=k.gb3(k)
if(d){d=e.r
d.toString
c=k.gb3(k)
if(!c)d.a.uniform1i(d.d,0)
else{k=k.ghJ(k)
d.a.uniform1i(d.d,k)}}if(g.ghA()){k=g.ghi()
d=e.y
d.a.uniform1f(d.d,k)
k=g.ghj()
d=e.z
d.a.uniform1f(d.d,k)
k=g.ghk()
d=e.Q
d.a.uniform1f(d.d,k)}}for(r=b0.length,h=0;h<b0.length;b0.length===r||(0,H.q)(b0),++h){q=b0[h].a
n=a.i(0,q)
if(n==null)n=0
q=a9.a.bZ.i(0,q)
q.a.uniform1i(q.d,n)}}b0=t.ch
if(b0.length>0){r=b1.db
j=r.ga_(r)
r=P.w
a8=new H.N([r,r])
for(r=a9.dx.r,q=r.length,h=0;h<r.length;r.length===q||(0,H.q)(r),++h){g=r[h]
a0=g.gb1()
f=a8.i(0,a0)
if(f==null)f=0
a8.m(0,a0,f+1)
e=J.cD(a9.a.c1.i(0,a0),f)
k=g.gi7(g)
d=e.b
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=g.git(g).iF()
d=e.c
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=j.ci(g.gi7(g))
d=e.d
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=g.ga9(g)
d=e.e
d.a.uniform3f(d.d,k.a,k.b,k.c)
g.gaF()
k=g.gcj()
d=e.f
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=g.gcf(g)
d=e.r
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=g.giG()
d=e.x
d.a.uniform1f(d.d,k)
k=g.giH()
d=e.y
d.a.uniform1f(d.d,k)
g.gaF()
k=g.gaF()
if(!C.b.U(o,k)){k.a=o.length
o.push(k)}k=g.gaF()
d=k.gb3(k)
if(d){d=e.dx
d.toString
c=k.d
if(!c)d.a.uniform1i(d.d,0)
else{k=k.a
d.a.uniform1i(d.d,k)}}g.gaW()
k=g.ged()
d=e.z
d.toString
c=k.ghv(k)
b=k.ghw(k)
a2=k.ghx()
k=k.ghu()
d.a.uniform4f(d.d,c,b,a2,k)
k=g.gaW()
if(!C.b.U(o,k)){k.a=o.length
o.push(k)}k=g.gaW()
d=k.gb3(k)
if(d){d=e.dy
d.toString
c=k.d
if(!c)d.a.uniform1i(d.d,0)
else{k=k.a
d.a.uniform1i(d.d,k)}}if(g.giu()){k=g.gis()
d=e.Q
d.a.uniform1f(d.d,k)
k=g.gir()
d=e.ch
d.a.uniform1f(d.d,k)}if(g.ghA()){k=g.ghi()
d=e.cx
d.a.uniform1f(d.d,k)
k=g.ghj()
d=e.cy
d.a.uniform1f(d.d,k)
k=g.ghk()
d=e.db
d.a.uniform1f(d.d,k)}}for(r=b0.length,h=0;h<b0.length;b0.length===r||(0,H.q)(b0),++h){q=b0[h].a
n=a8.i(0,q)
if(n==null)n=0
q=a9.a.c0.i(0,q)
q.a.uniform1i(q.d,n)}}}if(t.f.b){a9.ac(o,a9.Q.d)
b0=a9.a
r=a9.Q.d
b0.ai(b0.dk,r)}if(t.dx){b0=a9.a
r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.ga_(r).dG(0)}b0=b0.id
b0.toString
b0.a7(r.a3(0,!0))}if(t.cy){a9.ac(o,a9.ch)
b0=a9.a
r=a9.ch
b0.h0(b0.dl,r)
b0=t.r
if(b0.a){r=a9.a
q=a9.cx.f
r=r.dm
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.ac(o,a9.cx.d)
b0=a9.a
r=a9.cx.d
b0.ai(b0.dn,r)}b0=t.x
r=b0.a
if(r||b0.b||!1){q=a9.a
k=a9.cy.ch
q=q.dq
q.a.uniform1f(q.d,k)}if(r){r=a9.a
q=a9.cy.f
r=r.dr
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.ac(o,a9.cy.d)
b0=a9.a
r=a9.cy.d
b0.ai(b0.ds,r)}}b0=t.y
r=b0.a
q=!r
if(!q||b0.b||!1){if(r){r=a9.a
k=a9.db.f
r=r.dt
r.a.uniform1f(r.d,k)}if(b0.b){a9.ac(o,a9.db.d)
r=a9.a
k=a9.db.d
r.ai(r.du,k)}r=b1.a
r.enable(3042)
r.blendFunc(770,771)}for(r=b1.a,m=0;m<o.length;++m){k=o[m]
if(!k.c&&k.d){k.c=!0
r.activeTexture(33984+k.a)
r.bindTexture(3553,k.b)}}k=H.l(b2.e,"$ibm")
k.aw(b1)
k.aC(b1)
k.e4(b1)
if(!q||b0.b||!1)r.disable(3042)
for(m=0;m<o.length;++m){b0=o[m]
if(b0.c){b0.c=!1
r.activeTexture(33984+b0.a)
r.bindTexture(3553,null)}}b0=a9.a
b0.toString
r.useProgram(null)
b0.x.dc()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.cH().az}}
O.h6.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cO(a,C.c.a6(b+3,4)*4))}}
O.h7.prototype={
$2:function(a,b){return J.k2(a.a,b.a)}}
O.h8.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.dg(a,C.c.a6(b+3,4)*4))}}
O.h9.prototype={
$2:function(a,b){return J.k2(a.a,b.a)}}
O.ha.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.dl(a,C.c.a6(b+3,4)*4))}}
O.hb.prototype={
$2:function(a,b){return J.k2(a.a,b.a)}}
O.h0.prototype={
at:function(){var u,t=this
t.cr()
u=t.f
if(!(Math.abs(u-1)<$.A().a)){t.f=1
u=new D.z(t.b,u,1)
u.b=!0
t.a.T(u)}}}
O.bY.prototype={
T:function(a){return this.a.T(a)},
bM:function(){return this.T(null)},
at:function(){},
bO:function(a){var u,t,s=this
if(!s.c.q(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.at()
u=s.a
u.a=null
u.T(null)}}}
O.h1.prototype={}
O.av.prototype={
cT:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.z(s.b+".color",u,a)
t.b=!0
s.a.T(t)}},
at:function(){this.cr()
this.cT(new V.W(1,1,1))},
sa9:function(a,b){this.bO(new A.Z(!0,this.c.b,!1))
this.cT(b)}}
O.h3.prototype={}
O.h4.prototype={
at:function(){var u,t=this
t.cs()
u=t.ch
if(!(Math.abs(u-1)<$.A().a)){t.ch=1
u=new D.z(t.b+".refraction",u,1)
u.b=!0
t.a.T(u)}}}
O.h5.prototype={
cU:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.A().a)){u.ch=a
t=new D.z(u.b+".shininess",t,a)
t.b=!0
u.a.T(t)}},
at:function(){this.cs()
this.cU(100)}}
O.dr.prototype={}
T.ds.prototype={}
T.i6.prototype={}
T.ia.prototype={
gt:function(){var u=this.y
return u==null?this.y=D.E():u}}
T.ib.prototype={
hQ:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.kV(a)
t=new T.ia()
t.a=0
t.b=q
t.d=t.c=!1
W.V(u,"load",new T.ic(this,t,u,!1,q,!1,!1),!1)
return t},
fY:function(a,b,c){var u,t,s,r
b=V.kE(b)
u=V.kE(a.width)
t=V.kE(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.k5()
s.width=u
s.height=t
r=C.i.e9(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.o6(r.getImageData(0,0,s.width,s.height))}}}
T.ic.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.fY(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.Y.ii(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.hy()}++s.e}}
X.k4.prototype={}
X.fr.prototype={
gt:function(){var u=this.x
return u==null?this.x=D.E():u}}
X.de.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.E():u},
aM:function(a){var u=this.f
if(u!=null)u.I(a)},
ey:function(){return this.aM(null)},
sb4:function(a){var u,t,s=this
if(!J.D(s.b,a)){u=s.b
if(u!=null)u.gt().Z(0,s.gcz())
t=s.b
s.b=a
if(a!=null)a.gt().n(0,s.gcz())
u=new D.z("mover",t,s.b)
u.b=!0
s.aM(u)}}}
X.i2.prototype={}
V.cK.prototype={
bb:function(a){this.b=new P.fw(C.P)
this.c=null
this.d=H.c([],[[P.o,W.al]])},
L:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.c([],[W.al]))
u=a.split("\n")
for(l=u.length,t=[W.al],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.c([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.eL(q,0,q.length)
n=o==null?q:o
C.N.eb(p,H.kG(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gaq(m.d).push(p)}},
dT:function(a,b){var u,t,s,r,q=this
q.d=H.c([],[[P.o,W.al]])
u=C.b.k(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bi():t).e3(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r)q.bn(t[r])}}
V.jY.prototype={
$1:function(a){var u=C.d.e2(this.a.ghI(),2)
if(u!=="0.00")P.kF(u+" fps")}}
V.f8.prototype={
bn:function(a){var u=this
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
bi:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=R.ih()
a1.c=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=T.p(new H.m("_"))
u.a.push(t)
t=T.L("a","z")
u.a.push(t)
t=T.L("A","Z")
u.a.push(t)
t=a1.j(0,q).k(0,q)
u=T.p(new H.m("_"))
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
t=T.p(new H.m("."))
u.a.push(t)
t=a1.j(0,o).k(0,n)
u=T.L("0","9")
t.a.push(u)
u=a1.j(0,n).k(0,n)
t=T.L("0","9")
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
a1.j(0,k).k(0,k).a.push(new T.aF())
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
a1.j(0,h).k(0,h).a.push(new T.aF())
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
t=new T.a5()
s=[T.b5]
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
t=new T.a5()
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
u=[P.j]
t.aD(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aD(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aD(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.ft.prototype={
bn:function(a){var u=this
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
bi:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=R.ih()
e.c=e.j(0,r)
u=e.j(0,r).k(0,q)
t=T.p(new H.m("_"))
u.a.push(t)
t=T.L("a","z")
u.a.push(t)
t=T.L("A","Z")
u.a.push(t)
t=e.j(0,q).k(0,q)
u=T.p(new H.m("_"))
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
t=T.p(new H.m("."))
u.a.push(t)
t=e.j(0,o).k(0,n)
u=T.L("0","9")
t.a.push(u)
u=e.j(0,n).k(0,n)
t=T.L("0","9")
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
e.j(0,k).k(0,m).a.push(new T.aF())
t=e.j(0,j).k(0,i)
u=T.p(new H.m("\n"))
t.a.push(u)
u=e.j(0,j).k(0,j)
t=new T.a5()
s=[T.b5]
t.a=H.c([],s)
u.a.push(t)
u=T.p(new H.m("\n"))
t.a.push(u)
u=e.j(0,r).k(0,h)
t=T.p(new H.m("#"))
u.a.push(t)
t=e.j(0,h).k(0,h)
u=new T.a5()
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
t=[P.j]
u.aD(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aD(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aD(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fu.prototype={
bn:function(a){var u=this,t="#111"
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
bi:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=R.ih()
l.c=l.j(0,s)
u=l.j(0,s).k(0,r)
t=T.p(new H.m("_"))
u.a.push(t)
t=T.L("a","z")
u.a.push(t)
t=T.L("A","Z")
u.a.push(t)
t=l.j(0,r).k(0,r)
u=T.p(new H.m("_"))
t.a.push(u)
u=T.L("0","9")
t.a.push(u)
u=T.L("a","z")
t.a.push(u)
u=T.L("A","Z")
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
l.j(0,o).k(0,o).a.push(new T.aF())
l.j(0,s).k(0,m).a.push(new T.aF())
u=l.j(0,m).k(0,m)
t=new T.a5()
t.a=H.c([],[T.b5])
u.a.push(t)
u=T.p(new H.m('</\\-!>=_"'))
t.a.push(u)
u=T.L("a","z")
t.a.push(u)
u=T.L("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.N("Symbol")
u=l.j(0,n)
u.d=u.a.N("String")
u=l.j(0,r)
t=u.a.N(r)
u.d=t
t.aD(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.j]))
t=l.j(0,q)
t.d=t.a.N(q)
t=l.j(0,m)
t.d=t.a.N(m)
return l}}
V.hv.prototype={
dT:function(a,b){this.d=H.c([],[[P.o,W.al]])
this.L(C.b.k(b,"\n"),"#111")},
bn:function(a){},
bi:function(){return}}
V.hO.prototype={
eo:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.V(q,"scroll",new V.hQ(o),!1)},
d3:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.h2()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.e3(C.b.hO(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
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
if(H.or(n,"|",0)){m=n.split("|")
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
e8:function(a){var u,t,s,r=new V.f8("dart")
r.bb("dart")
u=new V.ft("glsl")
u.bb("glsl")
t=new V.fu("html")
t.bb("html")
s=C.b.hF(H.c([r,u,t],[V.cK]),new V.hR(a))
if(s!=null)return s
r=new V.hv("plain")
r.bb("plain")
return r},
d0:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.c([],[P.w])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cz(s).a1(s,"+")){b0[t]=C.a.a8(s,1)
a6.push(1)
u=!0}else if(C.a.a1(s,"-")){b0[t]=C.a.a8(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.e8(a8)
r.dT(0,b0)
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
j=W.kL()
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
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.q)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.q)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.b.gV(s);a2.v();)d.appendChild(a2.gG(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
hd:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
h2:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=R.ih()
u.c=u.j(0,q)
t=u.j(0,q).k(0,p)
s=T.p(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new T.a5()
r=[T.b5]
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
s=new T.a5()
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
s=new T.a5()
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
t=new T.a5()
t.a=H.c([],r)
s.a.push(t)
s=T.p(new H.m("|]"))
t.a.push(s)
s=u.j(0,k).k(0,j)
t=T.p(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new T.a5()
t.a=H.c([],r)
s.a.push(t)
s=T.p(new H.m("|]"))
t.a.push(s)
u.j(0,q).k(0,i).a.push(new T.aF())
s=u.j(0,i).k(0,i)
t=new T.a5()
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
V.hQ.prototype={
$1:function(a){P.lb(C.n,new V.hP(this.a))}}
V.hP.prototype={
$0:function(){var u=C.d.ak(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.hR.prototype={
$1:function(a){return a.a===this.a}}
V.i7.prototype={
av:function(a,b,c){var u,t,s,r,q=this,p=W.kV(null)
p.src=b
p.height=p.width=64
u=p.style
u.border="solid 2px white"
u=J.eJ(q.c)
t=u.gl(u)
W.V(p,"click",new V.i9(q,p,b,t),!1)
J.eJ(q.c).n(0,p)
J.eJ(q.c).n(0,document.createElement("br"))
s=P.lf().gce().i(0,H.e(q.a))
if(s==null){q.cY(t)
r=c}else r=P.cB(s,null,null)===t
if(r)p.click()},
n:function(a,b){return this.av(a,b,!1)},
cY:function(a){var u,t,s=P.lf(),r=P.j,q=P.mw(s.gce(),r,r)
q.m(0,this.a,""+a)
u=s.e_(0,q)
r=window.history
t=u.h(0)
r.toString
r.replaceState(new P.jn([],[]).ck(""),"",t)}}
V.i9.prototype={
$1:function(a){var u=this,t=u.a,s=J.eJ(t.c)
s.u(s,new V.i8())
s=u.b.style
s.border="solid 2px black"
t.d.$1(u.c)
t.cY(u.d)}}
V.i8.prototype={
$1:function(a){var u
if(!!J.O(a).$ibs){u=a.style
u.border="solid 2px white"}}}
N.jV.prototype={
$1:function(a){var u,t=this.a.Q,s=this.b.f.hQ(a),r=t.c
if(!r.b)t.bO(new A.Z(r.a,!0,!1))
r=t.d
if(r!==s){if(r!=null)r.gt().Z(0,t.gbd())
u=t.d
t.d=s
s.gt().n(0,t.gbd())
s=new D.z(t.b+".texture2D",u,t.d)
s.b=!0
t.a.T(s)}}}
N.jW.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.j]
u.d0("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.d0("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.eg=u.h
u=J.d_.prototype
u.ei=u.h
u=P.i.prototype
u.eh=u.bq
u=W.P.prototype
u.bu=u.ad
u=W.eb.prototype
u.ej=u.ap
u=T.cV.prototype
u.ef=u.aB
u.cq=u.h
u=O.bY.prototype
u.cr=u.at
u=O.av.prototype
u.cs=u.at})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"o0","n9",8)
u(P,"o1","na",8)
u(P,"o2","nb",8)
t(P,"lD","nZ",10)
s(W,"of",4,null,["$4"],["nc"],16,0)
s(W,"og",4,null,["$4"],["nd"],16,0)
var m
r(m=E.aH.prototype,"gdO",0,0,null,["$1","$0"],["dP","hZ"],0,0)
r(m,"gdQ",0,0,null,["$1","$0"],["dR","i_"],0,0)
r(m,"gdM",0,0,null,["$1","$0"],["dN","hY"],0,0)
r(m,"gdK",0,0,null,["$1","$0"],["dL","hV"],0,0)
q(m,"ghT","hU",4)
q(m,"ghW","hX",4)
r(m=E.dt.prototype,"gcu",0,0,null,["$1","$0"],["cw","cv"],0,0)
p(m,"gic","e0",10)
o(m=X.dD.prototype,"gfj","fk",5)
o(m,"gf7","f8",5)
o(m,"gfd","fe",2)
o(m,"gfn","fo",11)
o(m,"gfl","fm",11)
o(m,"gfs","ft",2)
o(m,"gfw","fz",2)
o(m,"gfh","fi",2)
o(m,"gfu","fv",2)
o(m,"gff","fg",2)
o(m,"gfA","fB",19)
o(m,"gfC","fD",5)
o(m,"gfP","fQ",6)
o(m,"gfL","fM",6)
o(m,"gfN","fO",6)
r(D.bo.prototype,"ger",0,0,null,["$1","$0"],["ar","es"],0,0)
r(m=D.d1.prototype,"gcP",0,0,null,["$1","$0"],["cQ","fp"],0,0)
o(m,"gfF","fG",20)
q(m,"gf1","f2",12)
q(m,"gfJ","fK",12)
n(V.F.prototype,"gl","c6",13)
n(V.B.prototype,"gl","c6",13)
r(m=U.bU.prototype,"gaJ",0,0,null,["$1","$0"],["P","a5"],0,0)
q(m,"gf_","f0",14)
q(m,"gfH","fI",14)
r(m=U.dE.prototype,"gaJ",0,0,null,["$1","$0"],["P","a5"],0,0)
o(m,"gbE","bF",1)
o(m,"gbG","bH",1)
o(m,"gbI","bJ",1)
r(m=U.dF.prototype,"gaJ",0,0,null,["$1","$0"],["P","a5"],0,0)
o(m,"gbE","bF",1)
o(m,"gbG","bH",1)
o(m,"gbI","bJ",1)
o(m,"geR","eS",1)
o(m,"geT","eU",1)
o(m,"gh9","ha",1)
o(m,"gh7","h8",1)
o(m,"gh5","h6",1)
o(U.dG.prototype,"geW","eX",1)
r(m=M.cR.prototype,"gaK",0,0,null,["$1","$0"],["aL","eu"],0,0)
q(m,"gf9","fa",4)
q(m,"gfb","fc",4)
r(m=O.cW.prototype,"ghb",0,1,null,["$2$color","$1"],["cZ","hc"],21,0)
o(m,"geY","eZ",7)
o(m,"geF","eG",7)
o(m,"gcB","eD",7)
r(m=O.d5.prototype,"gbd",0,0,null,["$1","$0"],["T","bM"],0,0)
r(m,"gfW",0,0,null,["$1","$0"],["cR","fX"],0,0)
q(m,"gf3","f4",15)
q(m,"gf5","f6",15)
r(O.bY.prototype,"gbd",0,0,null,["$1","$0"],["T","bM"],0,0)
r(X.de.prototype,"gcz",0,0,null,["$1","$0"],["aM","ey"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a0,null)
s(P.a0,[H.kg,J.a,J.a4,P.dZ,P.i,H.bX,P.fH,H.cT,H.iz,H.f0,H.im,P.bp,H.bQ,H.eg,P.aK,H.fN,H.fP,H.fJ,P.em,P.dJ,P.dp,P.hZ,P.du,P.jD,P.jh,P.jb,P.dY,P.u,P.jv,P.fW,P.eY,P.fx,P.jB,P.jA,P.aE,P.a7,P.ac,P.b0,P.ht,P.dm,P.dR,P.fq,P.fs,P.o,P.R,P.b7,P.j,P.S,P.bF,P.iB,P.jk,W.f4,W.ck,W.J,W.dc,W.eb,W.jq,W.cU,W.aO,W.jg,W.eu,P.jm,P.er,P.jc,P.bC,T.aF,T.cV,T.b5,T.hA,T.hK,R.dn,R.dv,R.dw,R.ig,O.b_,O.bZ,E.eU,E.aH,E.hC,E.dt,Z.dH,Z.dI,Z.bm,Z.cI,Z.bt,Z.aC,D.eX,D.bq,D.X,X.cJ,X.d0,X.fL,X.fT,X.af,X.hi,X.ii,X.dD,D.bo,D.a8,D.hx,D.hU,V.W,V.T,V.fi,V.d6,V.aL,V.ag,V.aa,V.df,V.dh,V.F,V.B,U.dE,U.dF,U.dG,M.cR,A.cG,A.eN,A.Z,A.cO,A.dg,A.dl,A.h2,A.cd,A.cf,A.cg,A.dz,A.iu,F.br,F.bx,F.c4,F.ah,F.hL,F.hM,F.hN,F.ch,F.iN,F.iO,F.iR,F.iS,O.dr,O.bY,O.h3,T.ib,X.k4,X.i2,X.de,V.cK,V.hO,V.i7])
s(J.a,[J.fI,J.cZ,J.d_,J.b1,J.bW,J.b2,H.c1,H.b6,W.f,W.eK,W.bk,W.at,W.H,W.dL,W.ae,W.f9,W.fa,W.dN,W.cQ,W.dP,W.fc,W.h,W.dS,W.aI,W.fv,W.dU,W.aJ,W.fS,W.hc,W.e_,W.e0,W.aM,W.e1,W.e4,W.aP,W.e8,W.ea,W.aR,W.ec,W.aS,W.eh,W.ay,W.ek,W.ie,W.aU,W.en,W.ik,W.iG,W.ev,W.ex,W.ez,W.eB,W.eD,P.b4,P.dW,P.b8,P.e6,P.hz,P.ei,P.bb,P.ep,P.eO,P.dK,P.di,P.ee])
s(J.d_,[J.hu,J.bE,J.b3])
t(J.kf,J.b1)
s(J.bW,[J.cY,J.cX])
t(P.fR,P.dZ)
s(P.fR,[H.dB,W.j1,W.a2,P.fm])
t(H.m,H.dB)
s(P.i,[H.ff,H.fX,H.ci])
s(H.ff,[H.d3,H.fO])
s(P.fH,[H.fY,H.iW])
t(H.fZ,H.d3)
t(H.f1,H.f0)
s(P.bp,[H.hq,H.fK,H.iy,H.eW,H.hI,P.dd,P.ak,P.iA,P.iw,P.ca,P.f_,P.f7])
s(H.bQ,[H.k0,H.i3,H.jR,H.jS,H.jT,P.iY,P.iX,P.iZ,P.j_,P.ju,P.jt,P.jM,P.je,P.jf,P.fQ,P.fV,P.fd,P.fe,P.iF,P.iC,P.iD,P.iE,P.jw,P.jx,P.jz,P.jy,P.jH,P.jG,P.jI,P.jJ,W.fg,W.he,W.hg,W.hH,W.hY,W.j6,W.hp,W.ho,W.ji,W.jj,W.js,W.jC,P.jo,P.jN,P.fn,P.fo,P.eQ,E.hD,E.hE,E.hF,E.id,D.fj,D.fk,F.jE,F.iU,F.iT,F.iP,F.iQ,O.fE,O.fD,O.fF,O.fG,O.fC,O.fB,O.fA,O.h6,O.h7,O.h8,O.h9,O.ha,O.hb,T.ic,V.jY,V.hQ,V.hP,V.hR,V.i9,V.i8,N.jV,N.jW])
s(H.i3,[H.hW,H.bO])
t(P.fU,P.aK)
s(P.fU,[H.N,W.j0])
t(H.d8,H.b6)
s(H.d8,[H.cm,H.co])
t(H.cn,H.cm)
t(H.c2,H.cn)
t(H.cp,H.co)
t(H.d9,H.cp)
s(H.d9,[H.hj,H.hk,H.hl,H.hm,H.hn,H.da,H.c3])
t(P.jd,P.jD)
t(P.ja,P.jh)
t(P.es,P.fW)
t(P.dC,P.es)
s(P.eY,[P.eS,P.fh])
t(P.f2,P.hZ)
s(P.f2,[P.eT,P.fw,P.iJ,P.iI])
t(P.iH,P.fh)
s(P.ac,[P.M,P.w])
s(P.ak,[P.bA,P.fy])
t(P.j3,P.bF)
s(W.f,[W.C,W.fl,W.c_,W.aQ,W.cq,W.aT,W.az,W.cs,W.iV,W.cj,P.eR,P.bj])
s(W.C,[W.P,W.aZ])
s(W.P,[W.n,P.k])
s(W.n,[W.eL,W.eM,W.bl,W.bn,W.al,W.fp,W.bs,W.hJ,W.dq,W.i0,W.i1,W.cc])
t(W.f3,W.at)
t(W.bR,W.dL)
s(W.ae,[W.f5,W.f6])
t(W.dO,W.dN)
t(W.cP,W.dO)
t(W.dQ,W.dP)
t(W.fb,W.dQ)
t(W.au,W.bk)
t(W.dT,W.dS)
t(W.bT,W.dT)
t(W.dV,W.dU)
t(W.bV,W.dV)
t(W.bc,W.h)
s(W.bc,[W.bw,W.ax,W.bB])
t(W.hd,W.e_)
t(W.hf,W.e0)
t(W.e2,W.e1)
t(W.hh,W.e2)
t(W.e5,W.e4)
t(W.db,W.e5)
t(W.e9,W.e8)
t(W.hw,W.e9)
t(W.hG,W.ea)
t(W.cr,W.cq)
t(W.hS,W.cr)
t(W.ed,W.ec)
t(W.hT,W.ed)
t(W.hX,W.eh)
t(W.el,W.ek)
t(W.i4,W.el)
t(W.ct,W.cs)
t(W.i5,W.ct)
t(W.eo,W.en)
t(W.ij,W.eo)
t(W.be,W.ax)
t(W.ew,W.ev)
t(W.j2,W.ew)
t(W.dM,W.cQ)
t(W.ey,W.ex)
t(W.j7,W.ey)
t(W.eA,W.ez)
t(W.e3,W.eA)
t(W.eC,W.eB)
t(W.jl,W.eC)
t(W.eE,W.eD)
t(W.jp,W.eE)
t(W.j4,W.j0)
t(W.j5,P.dp)
t(W.jr,W.eb)
t(P.jn,P.jm)
t(P.ab,P.jc)
t(P.dX,P.dW)
t(P.fM,P.dX)
t(P.e7,P.e6)
t(P.hr,P.e7)
t(P.c8,P.k)
t(P.ej,P.ei)
t(P.i_,P.ej)
t(P.eq,P.ep)
t(P.il,P.eq)
t(P.eP,P.dK)
t(P.hs,P.bj)
t(P.ef,P.ee)
t(P.hV,P.ef)
s(T.cV,[T.a5,R.dy])
s(E.eU,[Z.cH,A.dj,T.ds])
s(D.X,[D.bu,D.bv,D.z,X.hy])
s(X.hy,[X.d4,X.aN,X.c0,X.dx])
s(O.b_,[D.d1,U.bU])
s(D.eX,[U.eZ,U.a9])
t(U.cM,U.a9)
s(A.dj,[A.fz,A.h_])
s(A.dz,[A.dA,A.ir,A.is,A.it,A.ip,A.U,A.iq,A.I,A.bd,A.iv,A.ce,A.a1,A.a_,A.bD])
s(O.dr,[O.cW,O.d5])
s(O.bY,[O.h0,O.h1,O.av])
s(O.av,[O.h4,O.h5])
t(T.i6,T.ds)
t(T.ia,T.i6)
t(X.fr,X.i2)
s(V.cK,[V.f8,V.ft,V.fu,V.hv])
u(H.dB,H.iz)
u(H.cm,P.u)
u(H.cn,H.cT)
u(H.co,P.u)
u(H.cp,H.cT)
u(P.dZ,P.u)
u(P.es,P.jv)
u(W.dL,W.f4)
u(W.dN,P.u)
u(W.dO,W.J)
u(W.dP,P.u)
u(W.dQ,W.J)
u(W.dS,P.u)
u(W.dT,W.J)
u(W.dU,P.u)
u(W.dV,W.J)
u(W.e_,P.aK)
u(W.e0,P.aK)
u(W.e1,P.u)
u(W.e2,W.J)
u(W.e4,P.u)
u(W.e5,W.J)
u(W.e8,P.u)
u(W.e9,W.J)
u(W.ea,P.aK)
u(W.cq,P.u)
u(W.cr,W.J)
u(W.ec,P.u)
u(W.ed,W.J)
u(W.eh,P.aK)
u(W.ek,P.u)
u(W.el,W.J)
u(W.cs,P.u)
u(W.ct,W.J)
u(W.en,P.u)
u(W.eo,W.J)
u(W.ev,P.u)
u(W.ew,W.J)
u(W.ex,P.u)
u(W.ey,W.J)
u(W.ez,P.u)
u(W.eA,W.J)
u(W.eB,P.u)
u(W.eC,W.J)
u(W.eD,P.u)
u(W.eE,W.J)
u(P.dW,P.u)
u(P.dX,W.J)
u(P.e6,P.u)
u(P.e7,W.J)
u(P.ei,P.u)
u(P.ej,W.J)
u(P.ep,P.u)
u(P.eq,W.J)
u(P.dK,P.aK)
u(P.ee,P.u)
u(P.ef,W.J)})()
var v={mangledGlobalNames:{w:"int",M:"double",ac:"num",j:"String",aE:"bool",b7:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.X]},{func:1,ret:-1,args:[D.X]},{func:1,ret:-1,args:[W.ax]},{func:1,ret:P.b7,args:[,,]},{func:1,ret:-1,args:[P.w,[P.i,E.aH]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.bB]},{func:1,ret:F.ah,args:[F.ah]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bw]},{func:1,ret:-1,args:[P.w,[P.i,D.a8]]},{func:1,ret:P.M},{func:1,ret:-1,args:[P.w,[P.i,U.a9]]},{func:1,ret:-1,args:[P.w,[P.i,V.aL]]},{func:1,ret:P.aE,args:[W.P,P.j,P.j,W.ck]},{func:1,ret:P.b7,args:[,]},{func:1,ret:P.bC,args:[,,]},{func:1,ret:-1,args:[W.be]},{func:1,ret:P.aE,args:[[P.i,D.a8]]},{func:1,ret:F.ah,args:[F.ah],named:{color:V.T}}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bl.prototype
C.i=W.bn.prototype
C.N=W.al.prototype
C.Q=J.a.prototype
C.b=J.b1.prototype
C.R=J.cX.prototype
C.c=J.cY.prototype
C.j=J.cZ.prototype
C.d=J.bW.prototype
C.a=J.b2.prototype
C.S=J.b3.prototype
C.A=J.hu.prototype
C.Y=P.di.prototype
C.B=W.dq.prototype
C.q=J.bE.prototype
C.C=W.be.prototype
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

C.L=new P.ht()
C.e=new P.iH()
C.M=new P.iJ()
C.f=new P.jd()
C.n=new P.b0(0)
C.O=new P.b0(5e6)
C.P=new P.fx("element",!1,!1,!1)
C.v=H.c(u([127,2047,65535,1114111]),[P.w])
C.k=H.c(u([0,0,32776,33792,1,10240,0,0]),[P.w])
C.T=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.j])
C.l=H.c(u([0,0,65490,45055,65535,34815,65534,18431]),[P.w])
C.m=H.c(u([0,0,26624,1023,65534,2047,65534,2047]),[P.w])
C.U=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.j])
C.w=H.c(u([]),[P.j])
C.V=H.c(u([0,0,32722,12287,65534,34815,65534,18431]),[P.w])
C.x=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.h=H.c(u([0,0,24576,1023,65534,34815,65534,18431]),[P.w])
C.y=H.c(u([0,0,32754,11263,65534,34815,65534,18431]),[P.w])
C.W=H.c(u([0,0,32722,12287,65535,34815,65534,18431]),[P.w])
C.z=H.c(u([0,0,65490,12287,65535,34815,65534,18431]),[P.w])
C.o=H.c(u(["bind","if","ref","repeat","syntax"]),[P.j])
C.p=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.j])
C.X=new H.f1(0,{},C.w,[P.j,P.j])})();(function staticFields(){$.ar=0
$.bP=null
$.kO=null
$.lF=null
$.lC=null
$.lJ=null
$.jO=null
$.jU=null
$.kC=null
$.bI=null
$.cw=null
$.cx=null
$.kx=!1
$.am=C.f
$.a6=[]
$.aG=null
$.k9=null
$.kU=null
$.kT=null
$.cl=P.ki(P.j,P.fs)
$.kZ=null
$.l1=null
$.c5=null
$.l7=null
$.li=null
$.ll=null
$.lk=null
$.iK=null
$.iL=null
$.iM=null
$.lj=null
$.l0=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oz","lN",function(){return H.lE("_$dart_dartClosure")})
u($,"oA","kH",function(){return H.lE("_$dart_js")})
u($,"oB","lO",function(){return H.aA(H.io({
toString:function(){return"$receiver$"}}))})
u($,"oC","lP",function(){return H.aA(H.io({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oD","lQ",function(){return H.aA(H.io(null))})
u($,"oE","lR",function(){return H.aA(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oH","lU",function(){return H.aA(H.io(void 0))})
u($,"oI","lV",function(){return H.aA(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oG","lT",function(){return H.aA(H.ld(null))})
u($,"oF","lS",function(){return H.aA(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"oK","lX",function(){return H.aA(H.ld(void 0))})
u($,"oJ","lW",function(){return H.aA(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"oY","kI",function(){return P.n8()})
u($,"oL","lY",function(){return P.n3()})
u($,"oZ","m1",function(){return H.mC(H.bH(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.w])))})
u($,"p0","m3",function(){return P.mR("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"p1","m4",function(){return P.nx()})
u($,"p_","m2",function(){return P.kX(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.j)})
u($,"oS","m0",function(){return Z.ai(0)})
u($,"oM","lZ",function(){return Z.ai(511)})
u($,"oU","aq",function(){return Z.ai(1)})
u($,"oT","ap",function(){return Z.ai(2)})
u($,"oO","ao",function(){return Z.ai(4)})
u($,"oV","aX",function(){return Z.ai(8)})
u($,"oW","bi",function(){return Z.ai(16)})
u($,"oP","bh",function(){return Z.ai(32)})
u($,"oQ","cC",function(){return Z.ai(64)})
u($,"oR","m_",function(){return Z.ai(96)})
u($,"oX","bN",function(){return Z.ai(128)})
u($,"oN","aW",function(){return Z.ai(256)})
u($,"oy","lM",function(){return new V.fi(1e-9)})
u($,"ox","A",function(){return $.lM()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.c1,DataView:H.b6,ArrayBufferView:H.b6,Float32Array:H.c2,Float64Array:H.c2,Int16Array:H.hj,Int32Array:H.hk,Int8Array:H.hl,Uint16Array:H.hm,Uint32Array:H.hn,Uint8ClampedArray:H.da,CanvasPixelArray:H.da,Uint8Array:H.c3,HTMLAudioElement:W.n,HTMLBRElement:W.n,HTMLBaseElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLInputElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMediaElement:W.n,HTMLMenuElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableCellElement:W.n,HTMLTableDataCellElement:W.n,HTMLTableHeaderCellElement:W.n,HTMLTableColElement:W.n,HTMLTextAreaElement:W.n,HTMLTimeElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLVideoElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLFrameSetElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,AccessibleNodeList:W.eK,HTMLAnchorElement:W.eL,HTMLAreaElement:W.eM,Blob:W.bk,HTMLBodyElement:W.bl,HTMLCanvasElement:W.bn,CDATASection:W.aZ,CharacterData:W.aZ,Comment:W.aZ,ProcessingInstruction:W.aZ,Text:W.aZ,CSSPerspective:W.f3,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.bR,MSStyleCSSProperties:W.bR,CSS2Properties:W.bR,CSSImageValue:W.ae,CSSKeywordValue:W.ae,CSSNumericValue:W.ae,CSSPositionValue:W.ae,CSSResourceValue:W.ae,CSSUnitValue:W.ae,CSSURLImageValue:W.ae,CSSStyleValue:W.ae,CSSMatrixComponent:W.at,CSSRotation:W.at,CSSScale:W.at,CSSSkew:W.at,CSSTranslation:W.at,CSSTransformComponent:W.at,CSSTransformValue:W.f5,CSSUnparsedValue:W.f6,DataTransferItemList:W.f9,HTMLDivElement:W.al,DOMException:W.fa,ClientRectList:W.cP,DOMRectList:W.cP,DOMRectReadOnly:W.cQ,DOMStringList:W.fb,DOMTokenList:W.fc,Element:W.P,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.au,FileList:W.bT,FileWriter:W.fl,HTMLFormElement:W.fp,Gamepad:W.aI,History:W.fv,HTMLCollection:W.bV,HTMLFormControlsCollection:W.bV,HTMLOptionsCollection:W.bV,ImageData:W.aJ,HTMLImageElement:W.bs,KeyboardEvent:W.bw,Location:W.fS,MediaList:W.hc,MessagePort:W.c_,MIDIInputMap:W.hd,MIDIOutputMap:W.hf,MimeType:W.aM,MimeTypeArray:W.hh,PointerEvent:W.ax,MouseEvent:W.ax,DragEvent:W.ax,Document:W.C,DocumentFragment:W.C,HTMLDocument:W.C,ShadowRoot:W.C,XMLDocument:W.C,Attr:W.C,DocumentType:W.C,Node:W.C,NodeList:W.db,RadioNodeList:W.db,Plugin:W.aP,PluginArray:W.hw,RTCStatsReport:W.hG,HTMLSelectElement:W.hJ,SourceBuffer:W.aQ,SourceBufferList:W.hS,SpeechGrammar:W.aR,SpeechGrammarList:W.hT,SpeechRecognitionResult:W.aS,Storage:W.hX,CSSStyleSheet:W.ay,StyleSheet:W.ay,HTMLTableElement:W.dq,HTMLTableRowElement:W.i0,HTMLTableSectionElement:W.i1,HTMLTemplateElement:W.cc,TextTrack:W.aT,TextTrackCue:W.az,VTTCue:W.az,TextTrackCueList:W.i4,TextTrackList:W.i5,TimeRanges:W.ie,Touch:W.aU,TouchEvent:W.bB,TouchList:W.ij,TrackDefaultList:W.ik,CompositionEvent:W.bc,FocusEvent:W.bc,TextEvent:W.bc,UIEvent:W.bc,URL:W.iG,VideoTrackList:W.iV,WheelEvent:W.be,Window:W.cj,DOMWindow:W.cj,CSSRuleList:W.j2,ClientRect:W.dM,DOMRect:W.dM,GamepadList:W.j7,NamedNodeMap:W.e3,MozNamedAttrMap:W.e3,SpeechRecognitionResultList:W.jl,StyleSheetList:W.jp,SVGLength:P.b4,SVGLengthList:P.fM,SVGNumber:P.b8,SVGNumberList:P.hr,SVGPointList:P.hz,SVGScriptElement:P.c8,SVGStringList:P.i_,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGElement:P.k,SVGTransform:P.bb,SVGTransformList:P.il,AudioBuffer:P.eO,AudioParamMap:P.eP,AudioTrackList:P.eR,AudioContext:P.bj,webkitAudioContext:P.bj,BaseAudioContext:P.bj,OfflineAudioContext:P.hs,WebGL2RenderingContext:P.di,SQLResultSetRowList:P.hV})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.cm.$nativeSuperclassTag="ArrayBufferView"
H.cn.$nativeSuperclassTag="ArrayBufferView"
H.c2.$nativeSuperclassTag="ArrayBufferView"
H.co.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(N.lH,[])
else N.lH([])})})()
//# sourceMappingURL=test.dart.js.map
