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
a[c]=function(){a[c]=function(){H.pK(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lu"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lu"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lu(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={l6:function l6(){},
kA:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
h7:function(){return new P.cR("No element")},
nJ:function(){return new P.cR("Too many elements")},
e1:function(a,b,c,d,e){if(c-b<=32)H.od(a,b,c,d,e)
else H.oc(a,b,c,d,e)},
od:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.c(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.c(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a0()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.c(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
oc:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.a8(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.a8(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
r=p}C.a.k(a2,d,u)
C.a.k(a2,b,s)
C.a.k(a2,c,q)
if(a3<0||a3>=a2.length)return H.c(a2,a3)
C.a.k(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.c(a2,a4)
C.a.k(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.Q(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.R()
if(k<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a0()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.c(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.R()
if(g<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a0()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a0()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.R()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.c(a2,a1)
C.a.k(a2,a3,a2[a1])
C.a.k(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.c(a2,a1)
C.a.k(a2,a4,a2[a1])
C.a.k(a2,a1,r)
H.e1(a2,a3,o-2,a5,a6)
H.e1(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.c(a2,o)
if(!J.Q(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.c(a2,n)
if(!J.Q(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.R()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)}n=j
break}}}H.e1(a2,o,n,a5,a6)}else H.e1(a2,o,n,a5,a6)},
r:function r(a){this.a=a},
fO:function fO(){},
bY:function bY(){},
cC:function cC(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ho:function ho(a,b,c){this.a=a
this.b=b
this.$ti=c},
hp:function hp(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hq:function hq(a,b,c){this.a=a
this.b=b
this.$ti=c},
d0:function d0(a,b,c){this.a=a
this.b=b
this.$ti=c},
jo:function jo(a,b,c){this.a=a
this.b=b
this.$ti=c},
bU:function bU(){},
cZ:function cZ(){},
ec:function ec(){},
nB:function(){throw H.e(P.I("Cannot modify unmodifiable Map"))},
cm:function(a){var u,t=H.pL(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
pr:function(a){return v.types[H.ad(a)]},
py:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.V(a).$iL},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ar(a)
if(typeof u!=="string")throw H.e(H.bg(a))
return u},
cM:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
o4:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.c(p,3)
u=H.N(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.e(P.ah(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.D(s,q)|32)>t)return}return parseInt(a,b)},
cN:function(a){return H.nW(a)+H.lq(H.bM(a),0,null)},
nW:function(a){var u,t,s,r,q,p,o,n=J.V(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ic8){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cm(t.length>1&&C.b.D(t,0)===36?C.b.a9(t,1):t)},
nX:function(){if(!!self.location)return self.location.href
return},
m5:function(a){var u,t,s,r,q=J.aC(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
o5:function(a){var u,t,s,r=H.d([],[P.l])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.bg(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.aQ(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.e(H.bg(s))}return H.m5(r)},
m6:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.bg(s))
if(s<0)throw H.e(H.bg(s))
if(s>65535)return H.o5(a)}return H.m5(a)},
o6:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c_:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aQ(u,10))>>>0,56320|u&1023)}}throw H.e(P.ah(a,0,1114111,null,null))},
bZ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o3:function(a){var u=H.bZ(a).getFullYear()+0
return u},
o1:function(a){var u=H.bZ(a).getMonth()+1
return u},
nY:function(a){var u=H.bZ(a).getDate()+0
return u},
nZ:function(a){var u=H.bZ(a).getHours()+0
return u},
o0:function(a){var u=H.bZ(a).getMinutes()+0
return u},
o2:function(a){var u=H.bZ(a).getSeconds()+0
return u},
o_:function(a){var u=H.bZ(a).getMilliseconds()+0
return u},
D:function(a){throw H.e(H.bg(a))},
c:function(a,b){if(a==null)J.aC(a)
throw H.e(H.cg(a,b))},
cg:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aL(!0,b,s,null)
u=H.ad(J.aC(a))
if(!(b<0)){if(typeof u!=="number")return H.D(u)
t=b>=u}else t=!0
if(t)return P.Z(b,a,s,null,u)
return P.dX(b,s)},
pm:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c0(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c0(a,c,!0,b,"end",u)
return new P.aL(!0,b,"end",null)},
bg:function(a){return new P.aL(!0,a,null,null)},
e:function(a){var u
if(a==null)a=new P.dT()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.n0})
u.name=""}else u.toString=H.n0
return u},
n0:function(){return J.ar(this.dartException)},
A:function(a){throw H.e(a)},
u:function(a){throw H.e(P.bi(a))},
bc:function(a){var u,t,s,r,q,p
a=H.n_(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iL(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iM:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mg:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m1:function(a,b){return new H.hT(a,b==null?null:b.method)},
l7:function(a,b){var u=b==null,t=u?null:b.method
return new H.hb(a,t,u?null:b.receiver)},
aj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kU(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aQ(t,16)&8191)===10)switch(s){case 438:return f.$1(H.l7(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.m1(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.n4()
q=$.n5()
p=$.n6()
o=$.n7()
n=$.na()
m=$.nb()
l=$.n9()
$.n8()
k=$.nd()
j=$.nc()
i=r.ad(u)
if(i!=null)return f.$1(H.l7(H.N(u),i))
else{i=q.ad(u)
if(i!=null){i.method="call"
return f.$1(H.l7(H.N(u),i))}else{i=p.ad(u)
if(i==null){i=o.ad(u)
if(i==null){i=n.ad(u)
if(i==null){i=m.ad(u)
if(i==null){i=l.ad(u)
if(i==null){i=o.ad(u)
if(i==null){i=k.ad(u)
if(i==null){i=j.ad(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.m1(H.N(u),i))}}return f.$1(new H.iY(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.e3()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aL(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.e3()
return a},
ck:function(a){var u
if(a==null)return new H.eS(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eS(a)},
pq:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
px:function(a,b,c,d,e,f){H.f(a,"$ibz")
switch(H.ad(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.C("Unsupported number of arguments for wrapped closure"))},
cf:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.px)
a.$identity=u
return u},
nA:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.iq().constructor.prototype):Object.create(new H.cp(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aZ
if(typeof t!=="number")return t.B()
$.aZ=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lN(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.nw(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lN(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
nw:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.pr,a)
if(typeof a=="function")if(b)return a
else{u=c?H.lL:H.kZ
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.e("Error in functionType of tearoff")},
nx:function(a,b,c,d){var u=H.kZ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lN:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nz(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nx(t,!r,u,b)
if(t===0){r=$.aZ
if(typeof r!=="number")return r.B()
$.aZ=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cq
return new Function(r+H.i(q==null?$.cq=H.fv("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aZ
if(typeof r!=="number")return r.B()
$.aZ=r+1
o+=r
r="return function("+o+"){return this."
q=$.cq
return new Function(r+H.i(q==null?$.cq=H.fv("self"):q)+"."+H.i(u)+"("+o+");}")()},
ny:function(a,b,c,d){var u=H.kZ,t=H.lL
switch(b?-1:a){case 0:throw H.e(H.oa("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nz:function(a,b){var u,t,s,r,q,p,o,n=$.cq
if(n==null)n=$.cq=H.fv("self")
u=$.lK
if(u==null)u=$.lK=H.fv("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.ny(s,!q,t,b)
if(s===1){n="return function(){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+");"
u=$.aZ
if(typeof u!=="number")return u.B()
$.aZ=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+", "+o+");"
u=$.aZ
if(typeof u!=="number")return u.B()
$.aZ=u+1
return new Function(n+u+"}")()},
lu:function(a,b,c,d,e,f,g){return H.nA(a,b,c,d,!!e,!!f,g)},
kZ:function(a){return a.a},
lL:function(a){return a.c},
fv:function(a){var u,t,s,r=new H.cp("self","target","receiver","name"),q=J.l4(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
F:function(a){if(a==null)H.pg("boolean expression must not be null")
return a},
N:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aY(a,"String"))},
pn:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aY(a,"double"))},
mW:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aY(a,"num"))},
lr:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aY(a,"bool"))},
ad:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aY(a,"int"))},
mY:function(a,b){throw H.e(H.aY(a,H.cm(H.N(b).substring(2))))},
pE:function(a,b){throw H.e(H.nv(a,H.cm(H.N(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.V(a)[b])return a
H.mY(a,b)},
z:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.V(a)[b]
else u=!0
if(u)return a
H.pE(a,b)},
qt:function(a){if(a==null)return a
if(!!J.V(a).$ib)return a
throw H.e(H.aY(a,"List<dynamic>"))},
mU:function(a,b){var u
if(a==null)return a
u=J.V(a)
if(!!u.$ib)return a
if(u[b])return a
H.mY(a,b)},
mP:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ad(u)]
else return a.$S()}return},
ff:function(a,b){var u
if(typeof a=="function")return!0
u=H.mP(J.V(a))
if(u==null)return!1
return H.mB(u,null,b,null)},
o:function(a,b){var u,t
if(a==null)return a
if($.ln)return a
$.ln=!0
try{if(H.ff(a,b))return a
u=H.kO(b)
t=H.aY(a,u)
throw H.e(t)}finally{$.ln=!1}},
lw:function(a,b){if(a!=null&&!H.lt(a,b))H.A(H.aY(a,H.kO(b)))
return a},
aY:function(a,b){return new H.iN("TypeError: "+P.dA(a)+": type '"+H.i(H.mH(a))+"' is not a subtype of type '"+b+"'")},
nv:function(a,b){return new H.fw("CastError: "+P.dA(a)+": type '"+H.i(H.mH(a))+"' is not a subtype of type '"+b+"'")},
mH:function(a){var u,t=J.V(a)
if(!!t.$icr){u=H.mP(t)
if(u!=null)return H.kO(u)
return"Closure"}return H.cN(a)},
pg:function(a){throw H.e(new H.jp(a))},
pK:function(a){throw H.e(new P.fG(a))},
oa:function(a){return new H.ia(a)},
mR:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bM:function(a){if(a==null)return
return a.$ti},
qs:function(a,b,c){return H.cl(a["$a"+H.i(c)],H.bM(b))},
cj:function(a,b,c,d){var u=H.cl(a["$a"+H.i(c)],H.bM(b))
return u==null?null:u[d]},
aq:function(a,b,c){var u=H.cl(a["$a"+H.i(b)],H.bM(a))
return u==null?null:u[c]},
q:function(a,b){var u=H.bM(a)
return u==null?null:u[b]},
kO:function(a){return H.bL(a,null)},
bL:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cm(a[0].name)+H.lq(a,1,b)
if(typeof a=="function")return H.cm(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ad(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.i(b[t])}if('func' in a)return H.oQ(a,b)
if('futureOr' in a)return"FutureOr<"+H.bL("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oQ:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],[P.h])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.b.B(p,a0[m])
l=u[q]
if(l!=null&&l!==P.U)p+=" extends "+H.bL(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bL(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bL(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bL(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.pp(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.N(n[g])
i=i+h+H.bL(d[c],a0)+(" "+H.i(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lq:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.a7("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bL(p,c)}return"<"+u.i(0)+">"},
cl:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ls:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bM(a)
t=J.V(a)
if(t[b]==null)return!1
return H.mK(H.cl(t[d],u),null,c,null)},
m:function(a,b,c,d){if(a==null)return a
if(H.ls(a,b,c,d))return a
throw H.e(H.aY(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cm(b.substring(2))+H.lq(c,0,null),v.mangledGlobalNames)))},
mK:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aK(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aK(a[t],b,c[t],d))return!1
return!0},
qq:function(a,b,c){return a.apply(b,H.cl(J.V(b)["$a"+H.i(c)],H.bM(b)))},
mT:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="U"||a.name==="O"||a===-1||a===-2||H.mT(u)}return!1},
lt:function(a,b){var u,t
if(a==null)return b==null||b.name==="U"||b.name==="O"||b===-1||b===-2||H.mT(b)
if(b==null||b===-1||b.name==="U"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lt(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ff(a,b)}u=J.V(a).constructor
t=H.bM(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aK(u,null,b,null)},
E:function(a,b){if(a!=null&&!H.lt(a,b))throw H.e(H.aY(a,H.kO(b)))
return a},
aK:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="U"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="U"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aK(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="O")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aK("type" in a?a.type:l,b,s,d)
else if(H.aK(a,b,s,d))return!0
else{if(!('$i'+"cx" in t.prototype))return!1
r=t.prototype["$a"+"cx"]
q=H.cl(r,u?a.slice(1):l)
return H.aK(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.mB(a,b,c,d)
if('func' in a)return c.name==="bz"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mK(H.cl(m,u),b,p,d)},
mB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aK(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.aK(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aK(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aK(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pC(h,b,g,d)},
pC:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aK(c[s],d,a[s],b))return!1}return!0},
qr:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pA:function(a){var u,t,s,r,q=H.N($.mS.$1(a)),p=$.ky[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kE[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.N($.mJ.$2(a,q))
if(q!=null){p=$.ky[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kE[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kN(u)
$.ky[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kE[q]=u
return u}if(s==="-"){r=H.kN(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mX(a,u)
if(s==="*")throw H.e(P.iX(q))
if(v.leafTags[q]===true){r=H.kN(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mX(a,u)},
mX:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.ly(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kN:function(a){return J.ly(a,!1,null,!!a.$iL)},
pB:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kN(u)
else return J.ly(u,c,null,null)},
pv:function(){if(!0===$.lx)return
$.lx=!0
H.pw()},
pw:function(){var u,t,s,r,q,p,o,n
$.ky=Object.create(null)
$.kE=Object.create(null)
H.pu()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mZ.$1(q)
if(p!=null){o=H.pB(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pu:function(){var u,t,s,r,q,p,o=C.G()
o=H.ce(C.H,H.ce(C.I,H.ce(C.v,H.ce(C.v,H.ce(C.J,H.ce(C.K,H.ce(C.L(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mS=new H.kB(r)
$.mJ=new H.kC(q)
$.mZ=new H.kD(p)},
ce:function(a,b){return a(b)||b},
nL:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.e(P.a5("Illegal RegExp pattern ("+String(p)+")",a,null))},
pI:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
po:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n_:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lA:function(a,b,c){var u=H.pJ(a,b,c)
return u},
pJ:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n_(b),'g'),H.po(c))},
fA:function fA(){},
fB:function fB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iL:function iL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hT:function hT(a,b){this.a=a
this.b=b},
hb:function hb(a,b,c){this.a=a
this.b=b
this.c=c},
iY:function iY(a){this.a=a},
kU:function kU(a){this.a=a},
eS:function eS(a){this.a=a
this.b=null},
cr:function cr(){},
iA:function iA(){},
iq:function iq(){},
cp:function cp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iN:function iN(a){this.a=a},
fw:function fw(a){this.a=a},
ia:function ia(a){this.a=a},
jp:function jp(a){this.a=a},
a2:function a2(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hf:function hf(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hg:function hg(a,b){this.a=a
this.$ti=b},
hh:function hh(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kB:function kB(a){this.a=a},
kC:function kC(a){this.a=a},
kD:function kD(a){this.a=a},
ha:function ha(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cc:function(a){return a},
nU:function(a){return new Int8Array(a)},
bf:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.cg(b,a))},
oO:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.e(H.pm(a,b,c))
return b},
cH:function cH(){},
bD:function bD(){},
dP:function dP(){},
cI:function cI(){},
dQ:function dQ(){},
hL:function hL(){},
hM:function hM(){},
hN:function hN(){},
hO:function hO(){},
hP:function hP(){},
dR:function dR(){},
cJ:function cJ(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
d8:function d8(){},
pp:function(a){return J.lU(a?Object.keys(a):[],null)},
pL:function(a){return v.mangledGlobalNames[a]},
pD:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ly:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kz:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lx==null){H.pv()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.e(P.iX("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lC()]
if(r!=null)return r
r=H.pA(a)
if(r!=null)return r
if(typeof a=="function")return C.S
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.lC(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
nK:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.kY(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.ah(a,0,4294967295,"length",null))
return J.lU(new Array(a),b)},
lU:function(a,b){return J.l4(H.d(a,[b]))},
l4:function(a){a.fixed$length=Array
return a},
V:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dC.prototype
return J.h9.prototype}if(typeof a=="string")return J.bB.prototype
if(a==null)return J.dD.prototype
if(typeof a=="boolean")return J.h8.prototype
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bC.prototype
return a}if(a instanceof P.U)return a
return J.kz(a)},
dh:function(a){if(typeof a=="string")return J.bB.prototype
if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bC.prototype
return a}if(a instanceof P.U)return a
return J.kz(a)},
fg:function(a){if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bC.prototype
return a}if(a instanceof P.U)return a
return J.kz(a)},
mQ:function(a){if(typeof a=="number")return J.cB.prototype
if(typeof a=="string")return J.bB.prototype
if(a==null)return a
if(!(a instanceof P.U))return J.c8.prototype
return a},
di:function(a){if(typeof a=="string")return J.bB.prototype
if(a==null)return a
if(!(a instanceof P.U))return J.c8.prototype
return a},
ci:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bC.prototype
return a}if(a instanceof P.U)return a
return J.kz(a)},
Q:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.V(a).p(a,b)},
lE:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mQ(a).q(a,b)},
dl:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.py(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dh(a).j(a,b)},
kW:function(a,b,c){return J.fg(a).k(a,b,c)},
nm:function(a,b){return J.di(a).D(a,b)},
nn:function(a,b,c){return J.ci(a).ht(a,b,c)},
no:function(a,b,c,d){return J.ci(a).hW(a,b,c,d)},
np:function(a,b){return J.di(a).V(a,b)},
kX:function(a,b){return J.mQ(a).ia(a,b)},
fi:function(a,b){return J.fg(a).J(a,b)},
nq:function(a,b,c,d){return J.ci(a).it(a,b,c,d)},
lF:function(a,b){return J.fg(a).H(a,b)},
nr:function(a){return J.ci(a).gi5(a)},
lG:function(a){return J.ci(a).gc5(a)},
dm:function(a){return J.V(a).gI(a)},
br:function(a){return J.fg(a).gT(a)},
aC:function(a){return J.dh(a).gn(a)},
lH:function(a){return J.fg(a).iZ(a)},
ns:function(a,b){return J.ci(a).j2(a,b)},
nt:function(a,b,c){return J.di(a).t(a,b,c)},
nu:function(a){return J.di(a).ja(a)},
ar:function(a){return J.V(a).i(a)},
a:function a(){},
h8:function h8(){},
dD:function dD(){},
dE:function dE(){},
hX:function hX(){},
c8:function c8(){},
bC:function bC(){},
b3:function b3(a){this.$ti=a},
l5:function l5(a){this.$ti=a},
aw:function aw(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cB:function cB(){},
dC:function dC(){},
h9:function h9(){},
bB:function bB(){}},P={
op:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.ph()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cf(new P.jr(s),1)).observe(u,{childList:true})
return new P.jq(s,u,t)}else if(self.setImmediate!=null)return P.pi()
return P.pj()},
oq:function(a){self.scheduleImmediate(H.cf(new P.js(H.o(a,{func:1,ret:-1})),0))},
or:function(a){self.setImmediate(H.cf(new P.jt(H.o(a,{func:1,ret:-1})),0))},
os:function(a){P.lc(C.o,H.o(a,{func:1,ret:-1}))},
lc:function(a,b){var u=C.d.a8(a.a,1000)
return P.oy(u<0?0:u,b)},
mf:function(a,b){var u=C.d.a8(a.a,1000)
return P.oz(u<0?0:u,b)},
oy:function(a,b){var u=new P.eY()
u.eO(a,b)
return u},
oz:function(a,b){var u=new P.eY()
u.eP(a,b)
return u},
ot:function(a,b){var u,t,s
b.a=1
try{a.ed(new P.jD(b),new P.jE(b),null)}catch(s){u=H.aj(s)
t=H.ck(s)
P.pF(new P.jF(b,u,t))}},
mr:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaJ")
if(u>=4){t=b.bU()
b.a=a.a
b.c=a.c
P.d3(b,t)}else{t=H.f(b.c,"$ibe")
b.a=2
b.c=a
a.da(t)}},
d3:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$ial")
P.kp(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.d3(h.a,b)}g=h.a
q=g.c
u.a=t
u.b=q
p=!t
if(p){o=b.c
o=(o&1)!==0||(o&15)===8}else o=!0
if(o){o=b.b
n=o.b
if(t){m=g.b===n
m=!(m||m)}else m=!1
if(m){H.f(q,"$ial")
P.kp(i,i,g.b,q.a,q.b)
return}l=$.a1
if(l!==n)$.a1=n
else l=i
g=b.c
if((g&15)===8)new P.jJ(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.jI(u,b,q).$0()}else if((g&2)!==0)new P.jH(h,u,b).$0()
if(l!=null)$.a1=l
g=u.b
if(!!J.V(g).$icx){if(g.a>=4){k=H.f(o.c,"$ibe")
o.c=null
b=o.bi(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.mr(g,o)
return}}j=b.b
k=H.f(j.c,"$ibe")
j.c=null
b=j.bi(k)
g=u.a
p=u.b
if(!g){H.E(p,H.q(j,0))
j.a=4
j.c=p}else{H.f(p,"$ial")
j.a=8
j.c=p}h.a=j
g=j}},
pc:function(a,b){if(H.ff(a,{func:1,args:[P.U,P.at]}))return H.o(a,{func:1,ret:null,args:[P.U,P.at]})
if(H.ff(a,{func:1,args:[P.U]}))return H.o(a,{func:1,ret:null,args:[P.U]})
throw H.e(P.kY(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pb:function(){var u,t
for(;u=$.cd,u!=null;){$.dg=null
t=u.b
$.cd=t
if(t==null)$.df=null
u.a.$0()}},
pf:function(){$.lo=!0
try{P.pb()}finally{$.dg=null
$.lo=!1
if($.cd!=null)$.lD().$1(P.mL())}},
mG:function(a){var u=new P.ek(a)
if($.cd==null){$.cd=$.df=u
if(!$.lo)$.lD().$1(P.mL())}else $.df=$.df.b=u},
pe:function(a){var u,t,s=$.cd
if(s==null){P.mG(a)
$.dg=$.df
return}u=new P.ek(a)
t=$.dg
if(t==null){u.b=s
$.cd=$.dg=u}else{u.b=t.b
$.dg=t.b=u
if(u.b==null)$.df=u}},
pF:function(a){var u=null,t=$.a1
if(C.f===t){P.kr(u,u,C.f,a)
return}P.kr(u,u,t,H.o(t.c1(a),{func:1,ret:-1}))},
me:function(a,b){var u=$.a1
if(u===C.f)return P.lc(a,H.o(b,{func:1,ret:-1}))
return P.lc(a,H.o(u.c1(b),{func:1,ret:-1}))},
og:function(a,b){var u=$.a1
if(u===C.f)return P.mf(a,H.o(b,{func:1,ret:-1,args:[P.ba]}))
return P.mf(a,H.o(u.dt(b,P.ba),{func:1,ret:-1,args:[P.ba]}))},
kp:function(a,b,c,d,e){var u={}
u.a=d
P.pe(new P.kq(u,e))},
mC:function(a,b,c,d,e){var u,t=$.a1
if(t===c)return d.$0()
$.a1=c
u=t
try{t=d.$0()
return t}finally{$.a1=u}},
mD:function(a,b,c,d,e,f,g){var u,t=$.a1
if(t===c)return d.$1(e)
$.a1=c
u=t
try{t=d.$1(e)
return t}finally{$.a1=u}},
pd:function(a,b,c,d,e,f,g,h,i){var u,t=$.a1
if(t===c)return d.$2(e,f)
$.a1=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a1=u}},
kr:function(a,b,c,d){var u
H.o(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.c1(d):c.i6(d,-1)
P.mG(d)},
jr:function jr(a){this.a=a},
jq:function jq(a,b,c){this.a=a
this.b=b
this.c=c},
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
eY:function eY(){this.c=0},
k7:function k7(a,b){this.a=a
this.b=b},
k6:function k6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
be:function be(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aJ:function aJ(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jC:function jC(a,b){this.a=a
this.b=b},
jG:function jG(a,b){this.a=a
this.b=b},
jD:function jD(a){this.a=a},
jE:function jE(a){this.a=a},
jF:function jF(a,b,c){this.a=a
this.b=b
this.c=c},
jJ:function jJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jK:function jK(a){this.a=a},
jI:function jI(a,b,c){this.a=a
this.b=b
this.c=c},
jH:function jH(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(a){this.a=a
this.b=null},
it:function it(){},
iv:function iv(a,b){this.a=a
this.b=b},
iw:function iw(a,b){this.a=a
this.b=b},
cS:function cS(){},
iu:function iu(){},
ba:function ba(){},
al:function al(a,b){this.a=a
this.b=b},
kg:function kg(){},
kq:function kq(a,b){this.a=a
this.b=b},
jQ:function jQ(){},
jS:function jS(a,b,c){this.a=a
this.b=b
this.c=c},
jR:function jR(a,b){this.a=a
this.b=b},
jT:function jT(a,b,c){this.a=a
this.b=b
this.c=c},
nN:function(a,b){return new H.a2([a,b])},
l8:function(a,b){return new H.a2([a,b])},
nP:function(a){return H.pq(a,new H.a2([null,null]))},
dH:function(a){return new P.jO([a])},
li:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
ox:function(a,b,c){var u=new P.ez(a,b,[c])
u.c=a.e
return u},
nI:function(a,b,c){var u,t
if(P.lp(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.h])
C.a.h($.av,a)
try{P.oR(a,u)}finally{if(0>=$.av.length)return H.c($.av,-1)
$.av.pop()}t=P.mc(b,H.mU(u,"$ik"),", ")+c
return t.charCodeAt(0)==0?t:t},
l3:function(a,b,c){var u,t
if(P.lp(a))return b+"..."+c
u=new P.a7(b)
C.a.h($.av,a)
try{t=u
t.a=P.mc(t.a,a,", ")}finally{if(0>=$.av.length)return H.c($.av,-1)
$.av.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lp:function(a){var u,t
for(u=$.av.length,t=0;t<u;++t)if(a===$.av[t])return!0
return!1},
oR:function(a,b){var u,t,s,r,q,p,o,n=a.gT(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.w())return
u=H.i(n.gK(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.w()){if(l<=5)return
if(0>=b.length)return H.c(b,-1)
t=b.pop()
if(0>=b.length)return H.c(b,-1)
s=b.pop()}else{r=n.gK(n);++l
if(!n.w()){if(l<=4){C.a.h(b,H.i(r))
return}t=H.i(r)
if(0>=b.length)return H.c(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gK(n);++l
for(;n.w();r=q,q=p){p=n.gK(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2;--l}C.a.h(b,"...")
return}}s=H.i(r)
t=H.i(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.h(b,o)
C.a.h(b,s)
C.a.h(b,t)},
nO:function(a,b,c){var u=P.nN(b,c)
a.H(0,new P.hi(u,b,c))
return u},
lV:function(a,b){var u,t,s=P.dH(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t)s.h(0,H.E(a[t],b))
return s},
l9:function(a){var u,t={}
if(P.lp(a))return"{...}"
u=new P.a7("")
try{C.a.h($.av,a)
u.a+="{"
t.a=!0
J.lF(a,new P.hm(t,u))
u.a+="}"}finally{if(0>=$.av.length)return H.c($.av,-1)
$.av.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jO:function jO(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c9:function c9(a){this.a=a
this.c=this.b=null},
ez:function ez(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hi:function hi(a,b,c){this.a=a
this.b=b
this.c=c},
hj:function hj(){},
x:function x(){},
hl:function hl(){},
hm:function hm(a,b){this.a=a
this.b=b},
af:function af(){},
k8:function k8(){},
hn:function hn(){},
ed:function ed(a,b){this.a=a
this.$ti=b},
jV:function jV(){},
eA:function eA(){},
f2:function f2(){},
oj:function(a,b,c,d){if(b instanceof Uint8Array)return P.ok(!1,b,c,d)
return},
ok:function(a,b,c,d){var u,t,s=$.ne()
if(s==null)return
u=0===c
if(u&&!0)return P.lf(s,b)
t=b.length
d=P.bH(c,d,t)
if(u&&d===t)return P.lf(s,b)
return P.lf(s,b.subarray(c,d))},
lf:function(a,b){if(P.om(b))return
return P.on(a,b)},
on:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aj(t)}return},
om:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
ol:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aj(t)}return},
mF:function(a,b,c){var u,t,s
for(u=J.dh(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.ah()
if((s&127)!==s)return t-b}return c-b},
lJ:function(a,b,c,d,e,f){if(C.d.bd(f,4)!==0)throw H.e(P.a5("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.e(P.a5("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.e(P.a5("Invalid base64 padding, more than two '=' characters",a,b))},
fs:function fs(){},
ft:function ft(){},
bS:function bS(){},
bv:function bv(){},
fQ:function fQ(){},
h5:function h5(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
h4:function h4(a){this.a=a},
j5:function j5(){},
j7:function j7(){},
ke:function ke(a){this.b=0
this.c=a},
j6:function j6(a){this.a=a},
kd:function kd(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fh:function(a,b,c){var u=H.o4(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.e(P.a5(a,null,null))},
nF:function(a){if(a instanceof H.cr)return a.i(0)
return"Instance of '"+H.i(H.cN(a))+"'"},
nQ:function(a,b,c){var u,t=J.nK(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.k(t,u,b)
return H.m(t,"$ib",[c],"$ab")},
lW:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.br(a);u.w();)C.a.h(s,H.E(u.gK(u),c))
if(b)return s
return H.m(J.l4(s),"$ib",t,"$ab")},
cT:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.m(a,"$ib3",[P.l],"$ab3")
u=a.length
c=P.bH(b,c,u)
return H.m6(b>0||c<u?C.a.es(a,b,c):a)}if(!!J.V(a).$icJ)return H.o6(a,b,P.bH(b,c,a.length))
return P.oe(a,b,c)},
oe:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.e(P.ah(b,0,J.aC(a),q,q))
u=c==null
if(!u&&c<b)throw H.e(P.ah(c,b,J.aC(a),q,q))
t=J.br(a)
for(s=0;s<b;++s)if(!t.w())throw H.e(P.ah(b,0,s,q,q))
r=[]
if(u)for(;t.w();)r.push(t.gK(t))
else for(s=b;s<c;++s){if(!t.w())throw H.e(P.ah(c,b,s,q,q))
r.push(t.gK(t))}return H.m6(r)},
o8:function(a){return new H.ha(a,H.nL(a,!1,!0,!1,!1,!1))},
mc:function(a,b,c){var u=J.br(b)
if(!u.w())return a
if(c.length===0){do a+=H.i(u.gK(u))
while(u.w())}else{a+=H.i(u.gK(u))
for(;u.w();)a=a+c+H.i(u.gK(u))}return a},
mi:function(){var u=H.nX()
if(u!=null)return P.oi(u)
throw H.e(P.I("'Uri.base' is not supported"))},
f3:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.nk().b
if(typeof b!=="string")H.A(H.bg(b))
u=u.test(b)}else u=!1
if(u)return b
H.E(b,H.aq(c,"bS",0))
t=c.gis().c6(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c_(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nC:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nD:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dw:function(a){if(a>=10)return""+a
return"0"+a},
lP:function(a){return new P.bx(1000*a)},
dA:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ar(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nF(a)},
fl:function(a){return new P.aL(!1,null,null,a)},
kY:function(a,b,c){return new P.aL(!0,a,b,c)},
dX:function(a,b){return new P.c0(null,null,!0,a,b,"Value not in range")},
ah:function(a,b,c,d,e){return new P.c0(b,c,!0,a,d,"Invalid value")},
bH:function(a,b,c){if(0>a||a>c)throw H.e(P.ah(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.e(P.ah(b,a,c,"end",null))
return b}return c},
m7:function(a,b){if(typeof a!=="number")return a.R()
if(a<0)throw H.e(P.ah(a,0,null,b,null))},
Z:function(a,b,c,d,e){var u=H.ad(e==null?J.aC(b):e)
return new P.h6(u,!0,a,c,"Index out of range")},
I:function(a){return new P.iZ(a)},
iX:function(a){return new P.iW(a)},
mb:function(a){return new P.cR(a)},
bi:function(a){return new P.fz(a)},
C:function(a){return new P.es(a)},
a5:function(a,b,c){return new P.h_(a,b,c)},
nR:function(a,b,c){var u,t=H.d([],[c])
C.a.sn(t,a)
for(u=0;u<a;++u)C.a.k(t,u,b.$1(u))
return t},
lz:function(a){H.pD(a)},
oi:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.D(a,4)^58)*3|C.b.D(a,0)^100|C.b.D(a,1)^97|C.b.D(a,2)^116|C.b.D(a,3)^97)>>>0
if(u===0)return P.mh(e<e?C.b.t(a,0,e):a,5,f).gek()
else if(u===32)return P.mh(C.b.t(a,5,e),0,f).gek()}t=new Array(8)
t.fixed$length=Array
s=H.d(t,[P.l])
C.a.k(s,0,0)
C.a.k(s,1,-1)
C.a.k(s,2,-1)
C.a.k(s,7,-1)
C.a.k(s,3,0)
C.a.k(s,4,0)
C.a.k(s,5,e)
C.a.k(s,6,e)
if(P.mE(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.jc()
if(r>=0)if(P.mE(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.B()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.R()
if(typeof n!=="number")return H.D(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.b.a5(a,"..",o)))j=n>o+2&&C.b.a5(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.a5(a,"file",0)){if(q<=0){if(!C.b.a5(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.t(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.aW(a,o,n,"/");++e
n=h}k="file"}else if(C.b.a5(a,"http",0)){if(t&&p+3===o&&C.b.a5(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aW(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.a5(a,"https",0)){if(t&&p+4===o&&C.b.a5(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aW(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.t(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jY(a,r,q,p,o,n,m,k)}return P.oA(a,0,e,r,q,p,o,n,m,k)},
mk:function(a){var u=P.h
return C.a.ix(H.d(a.split("&"),[u]),P.l8(u,u),new P.j3(C.h),[P.y,P.h,P.h])},
oh:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.j0(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.V(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fh(C.b.t(a,s,t),n,n)
if(typeof p!=="number")return p.a0()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.c(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fh(C.b.t(a,s,c),n,n)
if(typeof p!=="number")return p.a0()
if(p>255)k.$2(l,s)
if(r>=u)return H.c(j,r)
j[r]=p
return j},
mj:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.j1(a),d=new P.j2(e,a)
if(a.length<2)e.$1("address is too short")
u=H.d([],[P.l])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.b.V(a,t)
if(p===58){if(t===b){++t
if(C.b.V(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
C.a.h(u,-1)
r=!0}else C.a.h(u,d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.a.gas(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)C.a.h(u,d.$2(s,c))
else{m=P.oh(a,s,c)
C.a.h(u,(m[0]<<8|m[1])>>>0)
C.a.h(u,(m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.c(l,i)
l[i]=0
f=i+1
if(f>=k)return H.c(l,f)
l[f]=0
i+=2}else{f=C.d.aQ(h,8)
if(i<0||i>=k)return H.c(l,i)
l[i]=f
f=i+1
if(f>=k)return H.c(l,f)
l[f]=h&255
i+=2}}return l},
oA:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oI(a,b,d)
else{if(d===b)P.cb(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oJ(a,u,e-1):""
s=P.oF(a,e,f,!1)
if(typeof f!=="number")return f.B()
r=f+1
if(typeof g!=="number")return H.D(g)
q=r<g?P.oH(P.fh(C.b.t(a,r,g),new P.k9(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oG(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.R()
o=h<i?P.lk(a,h+1,i,n):n
return new P.ca(j,t,s,q,p,o,i<c?P.oE(a,i+1,c):n)},
mv:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cb:function(a,b,c){throw H.e(P.a5(c,a,b))},
oH:function(a,b){if(a!=null&&a===P.mv(b))return
return a},
oF:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.b.V(a,b)===91){if(typeof c!=="number")return c.L()
u=c-1
if(C.b.V(a,u)!==93)P.cb(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.oC(a,t,u)
if(typeof s!=="number")return s.R()
if(s<u){r=s+1
q=P.mA(a,C.b.a5(a,"25",r)?s+3:r,u,"%25")}else q=""
P.mj(a,t,s)
return C.b.t(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.D(c)
p=b
for(;p<c;++p)if(C.b.V(a,p)===58){s=C.b.bn(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.mA(a,C.b.a5(a,"25",r)?s+3:r,c,"%25")}else q=""
P.mj(a,b,s)
return"["+C.b.t(a,b,s)+q+"]"}return P.oL(a,b,c)},
oC:function(a,b,c){var u,t=C.b.bn(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.D(c)
u=t<c}else u=!1
return u?t:c},
mA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.a7(d):null
if(typeof c!=="number")return H.D(c)
u=b
t=u
s=!0
for(;u<c;){r=C.b.V(a,u)
if(r===37){q=P.ll(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.a7("")
o=l.a+=C.b.t(a,t,u)
if(p)q=C.b.t(a,u,u+3)
else if(q==="%")P.cb(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.c(C.i,p)
p=(C.i[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.a7("")
if(t<u){l.a+=C.b.t(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.b.V(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.a7("")
l.a+=C.b.t(a,t,u)
l.a+=P.lj(r)
u+=m
t=u}}}if(l==null)return C.b.t(a,b,c)
if(t<c)l.a+=C.b.t(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
oL:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.D(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.V(a,u)
if(q===37){p=P.ll(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.a7("")
n=C.b.t(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.t(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.c(C.z,o)
o=(C.z[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.a7("")
if(t<u){s.a+=C.b.t(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.c(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.cb(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.V(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.a7("")
n=C.b.t(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.lj(q)
u+=l
t=u}}}}if(s==null)return C.b.t(a,b,c)
if(t<c){n=C.b.t(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oI:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mx(C.b.D(a,b)))P.cb(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.D(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.c(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cb(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.t(a,b,c)
return P.oB(t?a.toLowerCase():a)},
oB:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oJ:function(a,b,c){return P.dd(a,b,c,C.V,!1)},
oG:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dd(a,b,c,C.A,!0):C.j.jw(d,new P.ka(),P.h).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a2(u,"/"))u="/"+u
return P.oK(u,e,f)},
oK:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a2(a,"/"))return P.oM(a,!u||c)
return P.oN(a)},
lk:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.e(P.fl("Both query and queryParameters specified"))
return P.dd(a,b,c,C.l,!0)}if(d==null)return
u=new P.a7("")
t.a=""
d.H(0,new P.kb(new P.kc(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oE:function(a,b,c){return P.dd(a,b,c,C.l,!0)},
ll:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.V(a,b+1)
t=C.b.V(a,p)
s=H.kA(u)
r=H.kA(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.aQ(q,4)
if(p>=8)return H.c(C.i,p)
p=(C.i[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c_(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.t(a,b,b+3).toUpperCase()
return},
lj:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.l])
C.a.k(t,0,37)
C.a.k(t,1,C.b.D(o,a>>>4))
C.a.k(t,2,C.b.D(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.l])
for(q=0;--r,r>=0;s=128){p=C.d.hG(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.D(o,p>>>4))
C.a.k(t,q+2,C.b.D(o,p&15))
q+=3}}return P.cT(t,0,null)},
dd:function(a,b,c,d,e){var u=P.mz(a,b,c,d,e)
return u==null?C.b.t(a,b,c):u},
mz:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.R()
if(typeof c!=="number")return H.D(c)
if(!(o<c))break
c$0:{u=C.b.V(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.c(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.ll(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.c(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.cb(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.b.V(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.lj(u)}}if(m==null)m=new P.a7("")
m.a+=C.b.t(a,n,o)
m.a+=H.i(s)
if(typeof r!=="number")return H.D(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.R()
if(n<c)m.a+=C.b.t(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
my:function(a){if(C.b.a2(a,"."))return!0
return C.b.dP(a,"/.")!==-1},
oN:function(a){var u,t,s,r,q,p,o
if(!P.my(a))return a
u=H.d([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.Q(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.c(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oM:function(a,b){var u,t,s,r,q,p
if(!P.my(a))return!b?P.mw(a):a
u=H.d([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gas(u)!==".."){if(0>=u.length)return H.c(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.c(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gas(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.c(u,0)
C.a.k(u,0,P.mw(u[0]))}return C.a.m(u,"/")},
mw:function(a){var u,t,s,r=a.length
if(r>=2&&P.mx(J.nm(a,0)))for(u=1;u<r;++u){t=C.b.D(a,u)
if(t===58)return C.b.t(a,0,u)+"%3A"+C.b.a9(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.c(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oD:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.D(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.e(P.fl("Invalid URL encoding"))}}return u},
lm:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.D(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.t(a,b,c)
else r=new H.r(C.b.t(a,b,c))}else{r=H.d([],[P.l])
for(s=a.length,q=b;q<c;++q){t=C.b.D(a,q)
if(t>127)throw H.e(P.fl("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.e(P.fl("Truncated URI"))
C.a.h(r,P.oD(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.m(r,"$ib",[P.l],"$ab")
return new P.j6(!1).c6(r)},
mx:function(a){var u=a|32
return 97<=u&&u<=122},
mh:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.l])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.D(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.e(P.a5(m,a,t))}}if(s<0&&t>b)throw H.e(P.a5(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.D(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gas(l)
if(r!==44||t!==p+7||!C.b.a5(a,"base64",p+1))throw H.e(P.a5("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.iI(0,a,o,u)
else{n=P.mz(a,o,u,C.l,!0)
if(n!=null)a=C.b.aW(a,o,u,n)}return new P.j_(a,l,c)},
oP:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nR(22,new P.kk(),P.R),n=new P.kj(o),m=new P.kl(),l=new P.km(),k=H.f(n.$2(0,225),"$iR")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(14,225),"$iR")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(15,225),"$iR")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(1,225),"$iR")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(2,235),"$iR")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(3,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(4,229),"$iR")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(5,229),"$iR")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(6,231),"$iR")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(7,231),"$iR")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.f(n.$2(8,8),"$iR"),"]",5)
k=H.f(n.$2(9,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(16,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(17,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(10,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(18,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(19,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(11,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(12,236),"$iR")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.f(n.$2(13,237),"$iR")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.f(n.$2(20,245),"$iR"),"az",21)
k=H.f(n.$2(21,245),"$iR")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mE:function(a,b,c,d,e){var u,t,s,r,q=$.nl()
for(u=b;u<c;++u){if(d<0||d>=q.length)return H.c(q,d)
t=q[d]
s=C.b.D(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.c(t,s)
r=t[s]
d=r&31
C.a.k(e,r>>>5,u)}return d},
S:function S(){},
ax:function ax(a,b){this.a=a
this.b=b},
t:function t(){},
bx:function bx(a){this.a=a},
fM:function fM(){},
fN:function fN(){},
by:function by(){},
fm:function fm(){},
dT:function dT(){},
aL:function aL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c0:function c0(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h6:function h6(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iZ:function iZ(a){this.a=a},
iW:function iW(a){this.a=a},
cR:function cR(a){this.a=a},
fz:function fz(a){this.a=a},
hW:function hW(){},
e3:function e3(){},
fG:function fG(a){this.a=a},
es:function es(a){this.a=a},
h_:function h_(a,b,c){this.a=a
this.b=b
this.c=c},
bz:function bz(){},
l:function l(){},
k:function k(){},
b2:function b2(){},
b:function b(){},
y:function y(){},
O:function O(){},
a9:function a9(){},
U:function U(){},
at:function at(){},
h:function h(){},
a7:function a7(a){this.a=a},
j3:function j3(a){this.a=a},
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
j2:function j2(a,b){this.a=a
this.b=b},
ca:function ca(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
k9:function k9(a,b){this.a=a
this.b=b},
ka:function ka(){},
kc:function kc(a,b){this.a=a
this.b=b},
kb:function kb(a){this.a=a},
j_:function j_(a,b,c){this.a=a
this.b=b
this.c=c},
kk:function kk(){},
kj:function kj(a){this.a=a},
kl:function kl(){},
km:function km(){},
jY:function jY(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jx:function jx(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
bm:function(a){var u,t,s,r,q
if(a==null)return
u=P.l8(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r){q=H.N(t[r])
u.k(0,q,a[q])}return u},
pk:function(a){var u={}
a.H(0,new P.ks(u))
return u},
k_:function k_(){},
k1:function k1(a,b){this.a=a
this.b=b},
ks:function ks(a){this.a=a},
k0:function k0(a,b){this.a=a
this.b=b},
fW:function fW(a,b){this.a=a
this.b=b},
fX:function fX(){},
fY:function fY(){},
jN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ow:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jP:function jP(){},
ak:function ak(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b5:function b5(){},
hd:function hd(){},
b8:function b8(){},
hU:function hU(){},
i0:function i0(){},
cO:function cO(){},
ix:function ix(){},
p:function p(){},
bb:function bb(){},
iK:function iK(){},
ex:function ex(){},
ey:function ey(){},
eI:function eI(){},
eJ:function eJ(){},
eU:function eU(){},
eV:function eV(){},
f0:function f0(){},
f1:function f1(){},
R:function R(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(a){this.a=a},
fr:function fr(){},
bP:function bP(){},
hV:function hV(){},
el:function el(){},
dq:function dq(){},
dW:function dW(){},
c1:function c1(){},
e_:function e_(){},
eb:function eb(){},
ip:function ip(){},
eQ:function eQ(){},
eR:function eR(){}},W={
lI:function(){var u=document.createElement("a")
return u},
lM:function(){var u=document.createElement("canvas")
return u},
nE:function(a,b,c){var u=document.body,t=(u&&C.t).ac(u,a,b,c)
t.toString
u=W.G
u=new H.d0(new W.ap(t),H.o(new W.fP(),{func:1,ret:P.S,args:[u]}),[u])
return H.f(u.gaJ(u),"$iT")},
lS:function(a){H.f(a,"$ij")
return"wheel"},
cu:function(a){var u,t,s,r="element tag unavailable"
try{u=J.ci(a)
t=u.gea(a)
if(typeof t==="string")r=u.gea(a)}catch(s){H.aj(s)}return r},
nH:function(a){var u,t=document.createElement("input"),s=H.f(t,"$icA")
try{s.type=a}catch(u){H.aj(u)}return s},
jM:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mt:function(a,b,c,d){var u=W.jM(W.jM(W.jM(W.jM(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ac:function(a,b,c,d,e){var u=W.mI(new W.jB(c),W.n)
if(u!=null&&!0)J.no(a,b,u,!1)
return new W.jA(a,b,u,!1,[e])},
ms:function(a){var u=W.lI(),t=window.location
u=new W.bK(new W.jU(u,t))
u.eH(a)
return u},
ou:function(a,b,c,d){H.f(a,"$iT")
H.N(b)
H.N(c)
H.f(d,"$ibK")
return!0},
ov:function(a,b,c,d){var u,t,s
H.f(a,"$iT")
H.N(b)
H.N(c)
u=H.f(d,"$ibK").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mu:function(){var u=P.h,t=P.lV(C.p,u),s=H.q(C.p,0),r=H.o(new W.k5(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.k4(t,P.dH(u),P.dH(u),P.dH(u),null)
t.eN(null,new H.hq(C.p,r,[s,u]),q,null)
return t},
mI:function(a,b){var u=$.a1
if(u===C.f)return a
return u.dt(a,b)},
v:function v(){},
fj:function fj(){},
dn:function dn(){},
fk:function fk(){},
co:function co(){},
bQ:function bQ(){},
bs:function bs(){},
bR:function bR(){},
bt:function bt(){},
cs:function cs(){},
fC:function fC(){},
W:function W(){},
ct:function ct(){},
fD:function fD(){},
b0:function b0(){},
b1:function b1(){},
fE:function fE(){},
fF:function fF(){},
fI:function fI(){},
aD:function aD(){},
fJ:function fJ(){},
dx:function dx(){},
dy:function dy(){},
fK:function fK(){},
fL:function fL(){},
jv:function jv(a,b){this.a=a
this.b=b},
T:function T(){},
fP:function fP(){},
n:function n(){},
j:function j(){},
aE:function aE(){},
cw:function cw(){},
fV:function fV(){},
fZ:function fZ(){},
aN:function aN(){},
h3:function h3(){},
bV:function bV(){},
cz:function cz(){},
cA:function cA(){},
b4:function b4(){},
dI:function dI(){},
hE:function hE(){},
cE:function cE(){},
hF:function hF(){},
hG:function hG(a){this.a=a},
hH:function hH(){},
hI:function hI(a){this.a=a},
aO:function aO(){},
hJ:function hJ(){},
ag:function ag(){},
ap:function ap(a){this.a=a},
G:function G(){},
cK:function cK(){},
aP:function aP(){},
hZ:function hZ(){},
i8:function i8(){},
i9:function i9(a){this.a=a},
ib:function ib(){},
aR:function aR(){},
im:function im(){},
aS:function aS(){},
io:function io(){},
aT:function aT(){},
ir:function ir(){},
is:function is(a){this.a=a},
aF:function aF(){},
b9:function b9(){},
e4:function e4(){},
iy:function iy(){},
iz:function iz(){},
cU:function cU(){},
aV:function aV(){},
aG:function aG(){},
iB:function iB(){},
iC:function iC(){},
iE:function iE(){},
aW:function aW(){},
aX:function aX(){},
iI:function iI(){},
iJ:function iJ(){},
bI:function bI(){},
j4:function j4(){},
jm:function jm(){},
bd:function bd(){},
d1:function d1(){},
d2:function d2(){},
jw:function jw(){},
en:function en(){},
jL:function jL(){},
eF:function eF(){},
jZ:function jZ(){},
k2:function k2(){},
ju:function ju(){},
jy:function jy(a){this.a=a},
jz:function jz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lh:function lh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jA:function jA(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jB:function jB(a){this.a=a},
bK:function bK(a){this.a=a},
H:function H(){},
dS:function dS(a){this.a=a},
hR:function hR(a){this.a=a},
hQ:function hQ(a,b,c){this.a=a
this.b=b
this.c=c},
eN:function eN(){},
jW:function jW(){},
jX:function jX(){},
k4:function k4(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
k5:function k5(){},
k3:function k3(){},
dB:function dB(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aA:function aA(){},
jU:function jU(a,b){this.a=a
this.b=b},
f4:function f4(a){this.a=a},
kf:function kf(a){this.a=a},
em:function em(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eG:function eG(){},
eH:function eH(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
d9:function d9(){},
da:function da(){},
eO:function eO(){},
eP:function eP(){},
eT:function eT(){},
eW:function eW(){},
eX:function eX(){},
db:function db(){},
dc:function dc(){},
eZ:function eZ(){},
f_:function f_(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){}},O={
l_:function(a){var u=new O.a4([a])
u.bz(a)
return u},
a4:function a4(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cD:function cD(){this.b=this.a=null},
dL:function dL(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hy:function hy(a,b){this.a=a
this.b=b},
hz:function hz(){},
hA:function hA(a,b){this.a=a
this.b=b},
hB:function hB(){},
hC:function hC(a,b){this.a=a
this.b=b},
hD:function hD(){},
hs:function hs(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dM:function dM(){},
ht:function ht(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b6:function b6(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hv:function hv(){var _=this
_.e=_.d=_.c=_.b=null},
hw:function hw(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hx:function hx(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c2:function c2(){}},E={
lT:function(){var u=new E.an()
u.a=""
u.b=!0
u.seG(0,O.l_(E.an))
u.y.be(u.giJ(),u.giM())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sai(0,null)
u.sb9(null)
return u},
o9:function(a,b){var u=new E.i4(a)
u.eB(a,b)
return u},
of:function(a,b,c,d,e){var u,t,s=J.V(a)
if(!!s.$ibR)return E.md(a,!0,!0,!0,!1)
u=W.lM()
t=u.style
t.width="100%"
t.height="100%"
s.gc5(a).h(0,u)
return E.md(u,!0,!0,!0,!1)},
md:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.e7(),j=H.f(C.n.eo(a,"webgl2",P.nP(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic1")
if(j==null)H.A(P.C("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.o9(j,a)
H.ad(j.getParameter(3379))
H.ad(j.getParameter(34076))
u=new X.ee(a)
t=new X.hc()
t.c=new X.az(!1,!1,!1)
t.shn(P.dH(P.l))
u.b=t
t=new X.hK(u)
t.f=0
t.r=V.bF()
t.x=V.bF()
t.ch=t.Q=1
u.c=t
t=new X.hk(u)
t.r=0
t.x=V.bF()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iH(u)
t.f=V.bF()
t.r=V.bF()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sf9(H.d([],[[P.cS,P.U]]))
t=u.z
s=document
r=W.ag
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ac(s,"contextmenu",H.o(u.gfK(),q),!1,r))
t=u.z
p=W.n
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ac(a,"focus",H.o(u.gfQ(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ac(a,"blur",H.o(u.gfC(),o),!1,p))
t=u.z
n=W.b4
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ac(s,"keyup",H.o(u.gfU(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ac(s,"keydown",H.o(u.gfS(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ac(a,"mousedown",H.o(u.gfY(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ac(a,"mouseup",H.o(u.gh1(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ac(a,l,H.o(u.gh_(),q),!1,r))
n=u.z
W.lS(a)
m=W.bd;(n&&C.a).h(n,W.ac(a,H.N(W.lS(a)),H.o(u.gh3(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ac(s,l,H.o(u.gfM(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ac(s,"mouseup",H.o(u.gfO(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ac(s,"pointerlockchange",H.o(u.gh5(),o),!1,p))
p=u.z
o=W.aX
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ac(a,"touchstart",H.o(u.ghi(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ac(a,"touchend",H.o(u.ghe(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ac(a,"touchmove",H.o(u.ghg(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.ax(Date.now(),!1)
k.cy=0
k.dd()
return k},
fu:function fu(){},
an:function an(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i4:function i4(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i5:function i5(a){this.a=a},
i6:function i6(a){this.a=a},
i7:function i7(a){this.a=a},
e7:function e7(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=null},
iD:function iD(a){this.a=a}},Z={
lg:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cc(c)),35044)
a.bindBuffer(b,null)
return new Z.ej(b,u)},
aI:function(a){return new Z.bJ(a)},
ej:function ej(a,b){this.a=a
this.b=b},
dr:function dr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jn:function jn(a){this.a=a},
ds:function ds(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bA:function bA(a,b,c){this.a=a
this.b=b
this.c=c},
bJ:function bJ(a){this.a=a}},D={
Y:function(){var u=new D.bT()
u.saj(null)
u.saO(null)
u.c=null
u.d=0
return u},
fx:function fx(){},
bT:function bT(){var _=this
_.d=_.c=_.b=_.a=null},
fS:function fS(a){this.a=a},
fT:function fT(a){this.a=a},
B:function B(){this.b=null},
bW:function bW(a){this.b=null
this.$ti=a},
bX:function bX(a){this.b=null
this.$ti=a},
M:function M(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
l1:function(a,b){var u,t,s=new D.bw()
s.c=new V.a3(1,1,1)
s.a=V.mq()
s.d=V.mp()
s.e=V.oo()
u=s.b
s.b=b
b.gA().h(0,s.geI())
t=new D.M("mover",u,s.b,[U.aa])
t.b=!0
s.av(t)
if(!s.c.p(0,a)){u=s.c
s.c=a
t=new D.M("color",u,a,[V.a3])
t.b=!0
s.av(t)}return s},
bw:function bw(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ae:function ae(){},
dG:function dG(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dV:function dV(){},
e2:function e2(){}},X={dt:function dt(a,b){this.a=a
this.b=b},dF:function dF(a,b){this.a=a
this.b=b},hc:function hc(){var _=this
_.d=_.c=_.b=_.a=null},dJ:function dJ(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hk:function hk(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},az:function az(a,b,c){this.a=a
this.b=b
this.c=c},bl:function bl(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hK:function hK(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cF:function cF(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},i_:function i_(){},e9:function e9(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iH:function iH(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ee:function ee(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nG:function(a){var u=new X.h0(),t=new V.b_(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.m9
if(t==null){t=V.m8(0,0,1,1)
$.m9=t}u.r=t
return u},
du:function du(){},
h0:function h0(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dU:function dU(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
e5:function e5(){}},V={
kV:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bd(a-b,u)
return(a<0?a+u:a)+b},
P:function(a,b,c){if(a==null)return C.b.ae("null",c)
return C.b.ae(C.e.ee(Math.abs(a-0)<$.K().a?0:a,b),c+b+1)},
ch:function(a,b,c){var u,t,s,r,q,p=H.d([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.u)(a),++s){r=V.P(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.c(p,q)
C.a.k(p,q,C.b.ae(p[q],t))}return p},
dO:function(){var u=$.m0
return u==null?$.m0=V.b7(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b7:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
m_:function(a,b,c,d){return V.b7(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lX:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b7(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
lY:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b7(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
lZ:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b7(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
bF:function(){var u=$.m4
return u==null?$.m4=new V.ab(0,0):u},
nV:function(){var u=$.cL
return u==null?$.cL=new V.a6(0,0,0):u},
m8:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dY(a,b,c,d)},
d_:function(){var u=$.mo
return u==null?$.mo=new V.J(0,0,0):u},
oo:function(){var u=$.j8
return u==null?$.j8=new V.J(-1,0,0):u},
mp:function(){var u=$.j9
return u==null?$.j9=new V.J(0,1,0):u},
mq:function(){var u=$.ja
return u==null?$.ja=new V.J(0,0,1):u},
a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},
b_:function b_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fR:function fR(a){this.a=a},
dN:function dN(a,b,c,d,e,f,g,h,i){var _=this
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
ab:function ab(a,b){this.a=a
this.b=b},
a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},
bG:function bG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dY:function dY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
X:function X(a,b){this.a=a
this.b=b},
J:function J(a,b,c){this.a=a
this.b=b
this.c=c},
a_:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.e(P.C("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.D(a,0)
t=C.b.D(b,0)
s=new V.i3()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
w:function(a){var u=new V.ic()
u.eC(a)
return u},
iG:function(){var u=new V.iF(),t=P.h
u.shJ(new H.a2([t,V.cQ]))
u.shL(new H.a2([t,V.cV]))
u.c=null
return u},
bh:function bh(){},
ay:function ay(){},
dK:function dK(){},
as:function as(){this.a=null},
i3:function i3(){this.b=this.a=null},
ic:function ic(){this.a=null},
cQ:function cQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e8:function e8(a,b,c){this.a=a
this.b=b
this.c=c},
cV:function cV(a){this.b=a
this.c=null},
iF:function iF(){this.c=this.b=this.a=null},
cW:function cW(a){this.b=a
this.a=this.c=null},
pG:function(a){P.og(C.P,new V.kP(a))},
ob:function(a){var u=new V.ih()
u.eE(a,!0)
return u},
bu:function bu(){},
kP:function kP(a){this.a=a},
fH:function fH(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h1:function h1(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h2:function h2(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hY:function hY(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i1:function i1(a){this.a=a
this.c=null},
i2:function i2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ih:function ih(){this.b=this.a=null},
ij:function ij(a){this.a=a},
ii:function ii(a){this.a=a},
ik:function ik(a){this.a=a}},U={
l0:function(){var u=new U.fy()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
lO:function(a){var u=new U.dv()
u.a=a
return u},
la:function(a,b,c){var u,t=new U.dZ()
t.r=t.f=t.e=t.d=t.c=t.b=t.a=0
t.sem(0)
t.se1(0,0)
t.se8(0)
u=t.d
if(!(Math.abs(u-c)<$.K().a)){t.d=c
u=new D.M("deltaYaw",u,c,[P.t])
u.b=!0
t.G(u)}u=t.e
if(!(Math.abs(u-a)<$.K().a)){t.e=a
u=new D.M("deltaPitch",u,a,[P.t])
u.b=!0
t.G(u)}u=t.f
if(!(Math.abs(u-b)<$.K().a)){t.f=b
u=new D.M("deltaRoll",u,b,[P.t])
u.b=!0
t.G(u)}return t},
fy:function fy(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dv:function dv(){this.b=this.a=null},
cy:function cy(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
aa:function aa(){},
dZ:function dZ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ef:function ef(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
eg:function eg(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eh:function eh(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
mV:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="testCanvas",b=null,a="modifiers",a0=V.ob("Test 020"),a1=W.lM()
a1.className="pageLargeCanvas"
a1.id=c
a0.a.appendChild(a1)
u=[P.h]
a0.dq(H.d(["Test of the Matrial Lighting shader with multiple moving directional lights."],u))
a0.hV(H.d(["shapes"],u))
a0.dq(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(c)
if(t==null)H.A(P.C("Failed to find an element with the identifier, testCanvas."))
s=E.of(t,!0,!0,!0,!1)
r=U.la(0,0,0.3)
q=D.l1(new V.a3(1,0,0),r)
r=U.la(0.4,0,0)
p=D.l1(new V.a3(0,1,0),r)
r=U.la(0.5,0,0.5)
o=D.l1(new V.a3(0,0,1),r)
n=new O.dL()
n.seX(O.l_(V.ao))
n.e.be(n.gfw(),n.gfA())
r=new O.b6(n,"emission")
r.c=new A.am(!1,!1,!1)
r.f=new V.a3(0,0,0)
n.f=r
r=new O.b6(n,"ambient")
r.c=new A.am(!1,!1,!1)
r.f=new V.a3(0,0,0)
n.r=r
r=new O.b6(n,"diffuse")
r.c=new A.am(!1,!1,!1)
r.f=new V.a3(0,0,0)
n.x=r
r=new O.b6(n,"invDiffuse")
r.c=new A.am(!1,!1,!1)
r.f=new V.a3(0,0,0)
n.y=r
r=new O.hx(n,"specular")
r.c=new A.am(!1,!1,!1)
r.f=new V.a3(0,0,0)
r.ch=100
n.z=r
r=new O.ht(n,"bump")
r.c=new A.am(!1,!1,!1)
n.Q=r
n.ch=null
r=new O.b6(n,"reflect")
r.c=new A.am(!1,!1,!1)
r.f=new V.a3(0,0,0)
n.cx=r
r=new O.hw(n,"refract")
r.c=new A.am(!1,!1,!1)
r.f=new V.a3(0,0,0)
r.ch=1
n.cy=r
r=new O.hs(n,"alpha")
r.c=new A.am(!1,!1,!1)
r.f=1
n.db=r
r=new D.dG()
r.bz(D.ae)
r.sf7(H.d([],[D.bw]))
r.shk(H.d([],[D.dV]))
r.shI(H.d([],[D.e2]))
r.y=r.x=null
r.cE(r.gfu(),r.gh8(),r.ghc())
n.dx=r
m=new O.hv()
m.b=new V.b_(0,0,0,0)
m.c=1
m.d=10
m.e=!1
n.dy=m
m=r.x
r=m==null?r.x=D.Y():m
r.h(0,n.ghv())
r=n.dx
m=r.y
r=m==null?r.y=D.Y():m
r.h(0,n.gfE())
n.fr=null
n.dx.h(0,q)
n.dx.h(0,p)
n.dx.h(0,o)
n.f.saT(0,new V.a3(0,0,0))
r=n.r
r.saT(0,new V.a3(0.1,0.1,0.1))
r=n.x
r.saT(0,new V.a3(0.7,0.7,0.7))
r=n.z
r.saT(0,new V.a3(0.3,0.3,0.3))
r=n.z
r.df(new A.am(!0,!1,!1))
r.dg(100)
l=E.lT()
l.sai(0,F.n1())
k=E.lT()
k.sb9(U.lO(V.m_(3,3,3,1)))
r=F.lv(1,b,b,1)
r.cf()
k.sai(0,r)
j=new U.cy()
j.bz(U.aa)
j.be(j.gfs(),j.gha())
j.e=null
j.f=V.dO()
j.r=0
r=s.r
m=new U.eg()
i=U.l0()
i.scC(0,!0)
i.scm(6.283185307179586)
i.sco(0)
i.sZ(0,0)
i.scn(100)
i.sU(0)
i.sc8(0.5)
m.b=i
h=m.gaL()
i.gA().h(0,h)
i=U.l0()
i.scC(0,!0)
i.scm(6.283185307179586)
i.sco(0)
i.sZ(0,0)
i.scn(100)
i.sU(0)
i.sc8(0.5)
m.c=i
i.gA().h(0,h)
m.d=null
m.r=m.f=m.e=!1
m.y=m.x=2.5
m.Q=4
m.ch=m.cx=!1
m.db=m.cy=0
m.dx=null
m.dy=0
m.fx=m.fr=null
g=new X.az(!1,!1,!1)
f=m.d
m.d=g
i=[X.az]
h=new D.M(a,f,g,i)
h.b=!0
m.G(h)
h=m.f
if(h!==!1){m.f=!1
h=new D.M("invertX",h,!1,[P.S])
h.b=!0
m.G(h)}h=m.r
if(h!==!1){m.r=!1
h=new D.M("invertY",h,!1,[P.S])
h.b=!0
m.G(h)}m.b2(r)
j.h(0,m)
r=s.r
m=new U.ef()
h=U.l0()
h.scC(0,!0)
h.scm(6.283185307179586)
h.sco(0)
h.sZ(0,0)
h.scn(100)
h.sU(0)
h.sc8(0.2)
m.b=h
h.gA().h(0,m.gaL())
m.c=null
m.d=!1
m.e=2.5
m.r=4
m.x=m.y=!1
m.z=0
m.Q=null
m.ch=0
m.cy=m.cx=null
g=new X.az(!0,!1,!1)
f=m.c
m.c=g
h=new D.M(a,f,g,i)
h.b=!0
m.G(h)
m.b2(r)
j.h(0,m)
r=s.r
m=new U.eh()
m.c=0.01
m.e=m.d=0
g=new X.az(!1,!1,!1)
m.b=g
i=new D.M(a,b,g,i)
i.b=!0
m.G(i)
m.b2(r)
j.h(0,m)
j.h(0,U.lO(V.b7(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
r=new M.dz()
r.a=!0
r.sf_(0,O.l_(E.an))
r.e.be(r.gfG(),r.gfI())
r.y=r.x=r.r=r.f=null
e=X.nG(b)
d=new X.dU()
d.c=1.0471975511965976
d.d=0.1
d.e=2000
d.sb9(b)
m=d.c
if(!(Math.abs(m-1.0471975511965976)<$.K().a)){d.c=1.0471975511965976
m=new D.M("fov",m,1.0471975511965976,[P.t])
m.b=!0
d.aM(m)}m=d.d
if(!(Math.abs(m-0.1)<$.K().a)){d.d=0.1
m=new D.M("near",m,0.1,[P.t])
m.b=!0
d.aM(m)}m=d.e
if(!(Math.abs(m-2000)<$.K().a)){d.e=2000
m=new D.M("far",m,2000,[P.t])
m.b=!0
d.aM(m)}m=r.b
if(m!==d){if(m!=null)m.gA().N(0,r.gan())
f=r.b
r.b=d
d.gA().h(0,r.gan())
m=new D.M("camera",f,r.b,[X.du])
m.b=!0
r.aw(m)}m=r.c
if(m!==e){if(m!=null)m.gA().N(0,r.gan())
f=r.c
r.c=e
e.gA().h(0,r.gan())
m=new D.M("target",f,r.c,[X.e5])
m.b=!0
r.aw(m)}r.seb(b)
r.seb(n)
r.e.h(0,l)
r.e.h(0,k)
r.b.sb9(j)
m=s.d
if(m!==r){if(m!=null)m.gA().N(0,s.gcJ())
s.d=r
r.gA().h(0,s.gcJ())
s.cK()}r=new V.i1("shapes")
u=u.getElementById("shapes")
r.c=u
if(u==null)H.A("Failed to find shapes for RadioGroup")
r.b1(0,"Cube",new U.kG(l))
r.b1(0,"Cylinder",new U.kH(l))
r.b1(0,"Cone",new U.kI(l))
r.b1(0,"Sphere",new U.kJ(l))
r.dm(0,"Toroid",new U.kK(l),!0)
r.b1(0,"Knot",new U.kL(l))
u=s.z
if(u==null)u=s.z=D.Y()
r={func:1,ret:-1,args:[D.B]}
m=H.o(new U.kM(a0,n),r)
if(u.b==null)u.saO(H.d([],[r]))
u=u.b;(u&&C.a).h(u,m)
V.pG(s)},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
kM:function kM(a,b){this.a=a
this.b=b}},M={dz:function dz(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nS:function(a,b){var u=a.b6,t=new A.hr(b,u)
t.eD(b,u)
t.eA(a,b)
return t},
nT:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gal(a0)+a1.gal(a1)+a2.gal(a2)+a3.gal(a3)+a4.gal(a4)+a5.gal(a5)+a6.gal(a6)+a7.gal(a7)+a8.gal(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.u)(a9),++t)f+="_"+H.i(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.u)(b0),++t)f+="_"+H.i(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.u)(b1),++t)f+="_"+H.i(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.bq()
if(k){u=$.bp()
g=new Z.bJ(g.a|u.a)}if(j){u=$.bo()
g=new Z.bJ(g.a|u.a)}if(i){u=$.bn()
g=new Z.bJ(g.a|u.a)}return new A.hu(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,l,p,r,h,!0,!1,!1,o,r,m,k,j,!1,!1,i,!1,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
kn:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
ko:function(a,b,c){var u
A.kn(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.kS(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
oV:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.kn(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
oS:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.ko(b,t,"ambient")
b.a+="\n"},
oT:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.ko(b,t,"diffuse")
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
oW:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.ko(b,t,"invDiffuse")
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
p1:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.ko(b,t,"specular")
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
oY:function(a,b){var u,t,s
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
p_:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.kn(b,t,"reflect")
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
p0:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.kn(b,t,"refract")
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
oU:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.i(u)
s=A.kS(t)
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
r=[P.h]
o=H.d([],r)
if(!a.b.a)n=!1
else n=!0
if(n)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.d([],r)
if(!a.c.a)r=!1
else r=!0
if(r)C.a.h(m,"diffuse(norm, lit.viewDir)")
if(!a.d.a)r=!1
else r=!0
if(r)C.a.h(m,"invDiffuse(norm, lit.viewDir)")
if(!a.e.a)r=!1
else r=!0
if(r)C.a.h(m,"specular(norm, lit.viewDir)")
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
c.a+="      highLight = intensity*("+C.a.m(m," + ")+");\n"}else c.a+="   highLight = "+C.a.m(m," + ")+";\n"
C.a.h(o,"highLight")}r=c.a+="   return lit.color*("+C.a.m(o," + ")+");\n"
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
oZ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.i(u)
s=A.kS(t)
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
c.a=r+"\n"}r=[P.h]
l=H.d([],r)
C.a.h(l,"lit.color")
if(o)C.a.h(l,"attenuation")
if(u)C.a.h(l,"textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.m(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.d([],r)
if(!a.b.a)o=!1
else o=!0
if(o)C.a.h(l,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
C.a.h(l,"highLight")
m=u?", txtCube":""
if(p)m+=", shadowCube"
o=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
o+="   vec3 intensity = "+t+"Intensity(normDir, lit"+m+");\n"
c.a=o
c.a=o+"   if(length(intensity) > 0.0001) {\n"
k=H.d([],r)
if(!a.c.a)r=!1
else r=!0
if(r)C.a.h(k,"diffuse(norm, normDir)")
if(!a.d.a)r=!1
else r=!0
if(r)C.a.h(k,"invDiffuse(norm, normDir)")
if(!a.e.a)r=!1
else r=!0
if(r)C.a.h(k,"specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.a.m(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.m(l," + ")+");\n"
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
p2:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.i(u)
s=A.kS(t)
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
c.a=u+"\n"}u=[P.h]
j=H.d([],u)
if(n)C.a.h(j,"attenuation")
if(o)C.a.h(j,"scale")
if(m)C.a.h(j,"texture2D(txt2D, txtLoc).rgb")
else C.a.h(j,"vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.m(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.d([],u)
if(!a.b.a)r=!1
else r=!0
if(r)C.a.h(j,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"highLight")
k=m?", txt2D":""
if(p)k+=", shadow2D"
r=c.a+="   vec3 intensity = "+t+"Intensity(lit"+k+");\n"
r+="   if(length(intensity) > 0.0001) {\n"
c.a=r
c.a=r+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
i=H.d([],u)
if(!a.c.a)u=!1
else u=!0
if(u)C.a.h(i,"diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)C.a.h(i,"invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)C.a.h(i,"specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.a.m(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.m(j," + ")+");\n"
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
oX:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.d([],[P.h])
if(!a.b.a)u=!1
else u=!0
if(u)C.a.h(t,"ambientColor")
if(!a.c.a)u=!1
else u=!0
if(u)C.a.h(t,"diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)C.a.h(t,"invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)C.a.h(t,"specular(norm, litVec)")
u=b.a+="   return "+C.a.m(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
p3:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.a7("")
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
A.oV(a,j)
A.oS(a,j)
A.oT(a,j)
A.oW(a,j)
A.p1(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.p_(a,j)
A.p0(a,j)}A.oY(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.oU(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.oZ(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.p2(a,q[o],j)
A.oX(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.d([],[P.h])
if(r){j.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(n,"lightAccum")
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a9(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a9(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a9(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)C.a.h(n,"emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)C.a.h(n,"reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.m(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
p4:function(a,b){var u,t,s
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
p6:function(a,b){var u
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
p5:function(a,b){var u
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
p8:function(a,b){var u,t
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
p9:function(a,b){var u,t
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
p7:function(a,b){var u
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
pa:function(a,b){var u
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
kS:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.b.a9(a,1)},
ld:function(a,b,c,d,e){var u=new A.iP(a,c,e)
u.f=d
u.shT(P.nQ(d,0,P.l))
return u},
dp:function dp(a,b,c){this.a=a
this.b=b
this.c=c},
fn:function fn(a){this.a=a},
am:function am(a,b,c){this.a=a
this.b=b
this.c=c},
hr:function hr(a,b){var _=this
_.ji=_.jh=_.dA=_.dz=_.b6=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jv=_.ju=_.jt=_.ce=_.cd=_.cc=_.cb=_.ca=_.c9=_.js=_.jr=_.dH=_.jq=_.jp=_.dG=_.dF=_.jo=_.jn=_.dE=_.dD=_.jm=_.jl=_.dC=_.jk=_.jj=_.dB=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aM:function aM(a,b){this.a=a
this.b=b},
aQ:function aQ(a,b){this.a=a
this.b=b},
aU:function aU(a,b){this.a=a
this.b=b},
hu:function hu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.b6=b3
_.dz=b4},
c3:function c3(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c4:function c4(a,b,c,d,e,f,g,h,i,j){var _=this
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
c7:function c7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cP:function cP(){},
ea:function ea(){},
iU:function iU(a){this.a=a},
aH:function aH(a,b,c){this.a=a
this.c=b
this.d=c},
iR:function iR(a,b,c){this.a=a
this.c=b
this.d=c},
iS:function iS(a,b,c){this.a=a
this.c=b
this.d=c},
iT:function iT(a,b,c){this.a=a
this.c=b
this.d=c},
iP:function iP(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ai:function ai(a,b,c){this.a=a
this.c=b
this.d=c},
iQ:function iQ(a,b,c){this.a=a
this.c=b
this.d=c},
a0:function a0(a,b,c){this.a=a
this.c=b
this.d=c},
cX:function cX(a,b,c){this.a=a
this.c=b
this.d=c},
iV:function iV(a,b,c){this.a=a
this.c=b
this.d=c},
cY:function cY(a,b,c){this.a=a
this.c=b
this.d=c},
aB:function aB(a,b,c){this.a=a
this.c=b
this.d=c},
c5:function c5(a,b,c){this.a=a
this.c=b
this.d=c},
c6:function c6(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lv:function(a,b,c,d){var u=F.lb()
F.de(u,b,c,d,a,1,0,0,1)
F.de(u,b,c,d,a,0,1,0,3)
F.de(u,b,c,d,a,0,0,1,2)
F.de(u,b,c,d,a,-1,0,0,0)
F.de(u,b,c,d,a,0,-1,0,0)
F.de(u,b,c,d,a,0,0,-1,3)
u.ar()
return u},
ki:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
de:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.J(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.J(u+a3,t+a1,s+a2)
q=new V.J(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.J(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.ki(i)
l=F.ki(j.b)
k=F.lB(d,a0,new F.kh(j,F.ki(j.c),F.ki(j.d),l,m,c),b)
if(k!=null)a.b8(k)},
mO:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.lb()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.au])
q=u.a
p=new V.J(0,0,t)
p=p.u(0,Math.sqrt(p.C(p)))
C.a.h(r,q.hZ(new V.bG(a,-1,-1,-1),new V.b_(1,1,1,1),new V.a6(0,0,c),new V.J(0,0,t),new V.ab(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.D(k)
j=new V.J(m,l,t).u(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.ei(new V.bG(a,-1,-1,-1),null,new V.b_(i,g,h,1),new V.a6(m*k,l*k,c),new V.J(0,0,t),new V.ab(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.hX(r)
return u},
mM:function(a,b,c){return F.pl(!0,a,1,new F.kt(1,c),b)},
pl:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.lB(c,e,new F.kv(d),null)
if(u==null)return
u.ar()
u.c0()
if(b)u.b8(F.mO(3,!1,1,new F.kw(d),e))
u.b8(F.mO(1,!0,-1,new F.kx(d),e))
return u},
pH:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kQ()
t=F.lv(a,null,new F.kR(s,1),b)
t.c0()
return t},
n1:function(){return F.mN(15,30,0.5,1,new F.kT())},
pz:function(){return F.mN(12,120,0.3,1,new F.kF(3,2))},
mN:function(a,b,c,d,e){var u=F.lB(a,b,new F.ku(e,d,b,c),null)
if(u==null)return
u.ar()
u.c0()
return u},
lB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.lb()
t=H.d([],[F.au])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.ei(g,g,new V.b_(p,0,0,1),g,g,new V.ab(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.c7(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.ei(g,g,new V.b_(j,i,h,1),g,g,new V.ab(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.c7(d))}}u.d.hY(a+1,b+1,t)
return u},
cv:function(a,b,c){var u=new F.a8(),t=a.a
if(t==null)H.A(P.C("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.A(P.C("May not create a face with vertices attached to different shapes."))
u.bZ(a)
u.c_(b)
u.hB(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a_()
return u},
nM:function(a,b){var u=new F.bk(),t=a.a
if(t==null)H.A(P.C("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.A(P.C("May not create a line with vertices attached to different shapes."))
u.bZ(a)
u.c_(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a_()
return u},
lb:function(){var u=new F.e0(),t=new F.jb(u)
t.b=!1
t.shU(H.d([],[F.au]))
u.a=t
t=new F.ig(u)
t.sbS(H.d([],[F.bE]))
u.b=t
t=new F.ie(u)
t.sfg(H.d([],[F.bk]))
u.c=t
t=new F.id(u)
t.sfa(H.d([],[F.a8]))
u.d=t
u.e=null
return u},
ei:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.au(),r=new F.jj()
r.sbS(H.d([],[F.bE]))
s.b=r
r=new F.jf()
u=[F.bk]
r.sfh(H.d([],u))
r.sfi(H.d([],u))
s.c=r
r=new F.jc()
u=[F.a8]
r.sfb(H.d([],u))
r.sfc(H.d([],u))
r.sfd(H.d([],u))
s.d=r
h=$.nf()
s.e=0
r=$.bq()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bp().a)!==0?e:t
s.x=(u&$.bo().a)!==0?b:t
s.y=(u&$.bN().a)!==0?f:t
s.z=(u&$.bO().a)!==0?g:t
s.Q=(u&$.ng().a)!==0?c:t
s.ch=(u&$.cn().a)!==0?i:0
s.cx=(u&$.bn().a)!==0?a:t
return s},
kh:function kh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kt:function kt(a,b){this.a=a
this.b=b},
kv:function kv(a){this.a=a},
kw:function kw(a){this.a=a},
kx:function kx(a){this.a=a},
kQ:function kQ(){},
kR:function kR(a,b){this.a=a
this.b=b},
kT:function kT(){},
kF:function kF(a,b){this.a=a
this.b=b},
ku:function ku(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fU:function fU(){},
il:function il(){},
bk:function bk(){this.b=this.a=null},
he:function he(){},
iO:function iO(){},
bE:function bE(){this.a=null},
e0:function e0(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
id:function id(a){this.a=a
this.b=null},
ie:function ie(a){this.a=a
this.b=null},
ig:function ig(a){this.a=a
this.b=null},
au:function au(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jl:function jl(a){this.a=a},
jk:function jk(a){this.a=a},
jb:function jb(a){this.a=a
this.c=this.b=null},
jc:function jc(){this.d=this.c=this.b=null},
jd:function jd(a,b){this.a=a
this.b=b},
je:function je(a,b){this.a=a
this.b=b},
jf:function jf(){this.c=this.b=null},
jh:function jh(){},
jg:function jg(){},
ji:function ji(){},
hS:function hS(){},
jj:function jj(){this.b=null}},T={e6:function e6(){}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l6.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gI:function(a){return H.cM(a)},
i:function(a){return"Instance of '"+H.i(H.cN(a))+"'"}}
J.h8.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iS:1}
J.dD.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.dE.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.hX.prototype={}
J.c8.prototype={}
J.bC.prototype={
i:function(a){var u=a[$.n3()]
if(u==null)return this.ew(a)
return"JavaScript function for "+H.i(J.ar(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibz:1}
J.b3.prototype={
h:function(a,b){H.E(b,H.q(a,0))
if(!!a.fixed$length)H.A(P.I("add"))
a.push(b)},
e5:function(a,b){if(!!a.fixed$length)H.A(P.I("removeAt"))
if(b<0||b>=a.length)throw H.e(P.dX(b,null))
return a.splice(b,1)[0]},
N:function(a,b){var u
if(!!a.fixed$length)H.A(P.I("remove"))
for(u=0;u<a.length;++u)if(J.Q(a[u],b)){a.splice(u,1)
return!0}return!1},
H:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.e(P.bi(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.i(a[u]))
return t.join(b)},
iE:function(a){return this.m(a,"")},
ix:function(a,b,c,d){var u,t,s
H.E(b,d)
H.o(c,{func:1,ret:d,args:[d,H.q(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.e(P.bi(a))}return t},
iw:function(a,b){var u,t,s
H.o(b,{func:1,ret:P.S,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.F(b.$1(s)))return s
if(a.length!==u)throw H.e(P.bi(a))}throw H.e(H.h7())},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
es:function(a,b,c){if(b<0||b>a.length)throw H.e(P.ah(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.ah(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.q(a,0)])
return H.d(a.slice(b,c),[H.q(a,0)])},
giv:function(a){if(a.length>0)return a[0]
throw H.e(H.h7())},
gas:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.e(H.h7())},
dr:function(a,b){var u,t
H.o(b,{func:1,ret:P.S,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.F(b.$1(a[t])))return!0
if(a.length!==u)throw H.e(P.bi(a))}return!1},
bx:function(a,b){var u=H.q(a,0)
H.o(b,{func:1,ret:P.l,args:[u,u]})
if(!!a.immutable$list)H.A(P.I("sort"))
H.e1(a,0,a.length-1,b,u)},
W:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Q(a[u],b))return!0
return!1},
i:function(a){return P.l3(a,"[","]")},
gT:function(a){return new J.aw(a,a.length,[H.q(a,0)])},
gI:function(a){return H.cM(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.A(P.I("set length"))
if(b<0)throw H.e(P.ah(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.e(H.cg(a,b))
return a[b]},
k:function(a,b,c){H.E(c,H.q(a,0))
if(!!a.immutable$list)H.A(P.I("indexed set"))
if(b>=a.length||b<0)throw H.e(H.cg(a,b))
a[b]=c},
$ik:1,
$ib:1}
J.l5.prototype={}
J.aw.prototype={
gK:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(H.u(s))
u=t.c
if(u>=r){t.sd_(null)
return!1}t.sd_(s[u]);++t.c
return!0},
sd_:function(a){this.d=H.E(a,H.q(this,0))},
$ib2:1}
J.cB.prototype={
ia:function(a,b){var u
H.mW(b)
if(typeof b!=="number")throw H.e(H.bg(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbo(b)
if(this.gbo(a)===u)return 0
if(this.gbo(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbo:function(a){return a===0?1/a<0:a<0},
dJ:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.e(P.I(""+a+".floor()"))},
ak:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.I(""+a+".round()"))},
ee:function(a,b){var u
if(b>20)throw H.e(P.ah(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbo(a))return"-"+u
return u},
bc:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.e(P.ah(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.V(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.A(P.I("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.c(t,1)
u=t[1]
if(3>=s)return H.c(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.q("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bd:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ez:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.di(a,b)},
a8:function(a,b){return(a|0)===a?a/b|0:this.di(a,b)},
di:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.I("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aQ:function(a,b){var u
if(a>0)u=this.dh(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hG:function(a,b){if(b<0)throw H.e(H.bg(b))
return this.dh(a,b)},
dh:function(a,b){return b>31?0:a>>>b},
$it:1,
$ia9:1}
J.dC.prototype={$il:1}
J.h9.prototype={}
J.bB.prototype={
V:function(a,b){if(b<0)throw H.e(H.cg(a,b))
if(b>=a.length)H.A(H.cg(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.e(H.cg(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.e(P.kY(b,null,null))
return a+b},
aW:function(a,b,c,d){var u,t
c=P.bH(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a5:function(a,b,c){var u
if(c<0||c>a.length)throw H.e(P.ah(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a2:function(a,b){return this.a5(a,b,0)},
t:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.A(H.bg(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.R()
if(b<0)throw H.e(P.dX(b,null))
if(b>c)throw H.e(P.dX(b,null))
if(c>a.length)throw H.e(P.dX(c,null))
return a.substring(b,c)},
a9:function(a,b){return this.t(a,b,null)},
ja:function(a){return a.toLowerCase()},
q:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ae:function(a,b){var u=b-a.length
if(u<=0)return a
return this.q(" ",u)+a},
bn:function(a,b,c){var u
if(c<0||c>a.length)throw H.e(P.ah(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dP:function(a,b){return this.bn(a,b,0)},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$im2:1,
$ih:1}
H.r.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.b.V(this.a,b)},
$acZ:function(){return[P.l]},
$ax:function(){return[P.l]},
$ak:function(){return[P.l]},
$ab:function(){return[P.l]}}
H.fO.prototype={}
H.bY.prototype={
gT:function(a){var u=this
return new H.cC(u,u.gn(u),[H.aq(u,"bY",0)])},
bv:function(a,b){return this.ev(0,H.o(b,{func:1,ret:P.S,args:[H.aq(this,"bY",0)]}))}}
H.cC.prototype={
gK:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=J.dh(s),q=r.gn(s)
if(t.b!==q)throw H.e(P.bi(s))
u=t.c
if(u>=q){t.saY(null)
return!1}t.saY(r.J(s,u));++t.c
return!0},
saY:function(a){this.d=H.E(a,H.q(this,0))},
$ib2:1}
H.ho.prototype={
gT:function(a){return new H.hp(J.br(this.a),this.b,this.$ti)},
gn:function(a){return J.aC(this.a)},
J:function(a,b){return this.b.$1(J.fi(this.a,b))},
$ak:function(a,b){return[b]}}
H.hp.prototype={
w:function(){var u=this,t=u.b
if(t.w()){u.saY(u.c.$1(t.gK(t)))
return!0}u.saY(null)
return!1},
gK:function(a){return this.a},
saY:function(a){this.a=H.E(a,H.q(this,1))},
$ab2:function(a,b){return[b]}}
H.hq.prototype={
gn:function(a){return J.aC(this.a)},
J:function(a,b){return this.b.$1(J.fi(this.a,b))},
$abY:function(a,b){return[b]},
$ak:function(a,b){return[b]}}
H.d0.prototype={
gT:function(a){return new H.jo(J.br(this.a),this.b,this.$ti)}}
H.jo.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(H.F(t.$1(u.gK(u))))return!0
return!1},
gK:function(a){var u=this.a
return u.gK(u)}}
H.bU.prototype={}
H.cZ.prototype={
k:function(a,b,c){H.E(c,H.aq(this,"cZ",0))
throw H.e(P.I("Cannot modify an unmodifiable list"))}}
H.ec.prototype={}
H.fA.prototype={
i:function(a){return P.l9(this)},
k:function(a,b,c){H.E(b,H.q(this,0))
H.E(c,H.q(this,1))
return H.nB()},
$iy:1}
H.fB.prototype={
gn:function(a){return this.a},
bl:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bl(0,b))return
return this.d0(b)},
d0:function(a){return this.b[H.N(a)]},
H:function(a,b){var u,t,s,r,q=this,p=H.q(q,1)
H.o(b,{func:1,ret:-1,args:[H.q(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.E(q.d0(r),p))}}}
H.iL.prototype={
ad:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hT.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hb.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.iY.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kU.prototype={
$1:function(a){if(!!J.V(a).$iby)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:25}
H.eS.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iat:1}
H.cr.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ibz:1,
gjb:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iA.prototype={}
H.iq.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cm(u)+"'"}}
H.cp.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cp))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.cM(this.a)
else u=typeof t!=="object"?J.dm(t):H.cM(t)
return(u^H.cM(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.i(H.cN(u))+"'")}}
H.iN.prototype={
i:function(a){return this.a}}
H.fw.prototype={
i:function(a){return this.a}}
H.ia.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.jp.prototype={
i:function(a){return"Assertion failed: "+P.dA(this.a)}}
H.a2.prototype={
gn:function(a){return this.a},
giD:function(a){return this.a===0},
ga3:function(a){return new H.hg(this,[H.q(this,0)])},
bl:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cX(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cX(t,b)}else return s.iA(b)},
iA:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cj(u.bG(t,u.ci(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bg(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bg(r,b)
s=t==null?null:t.b
return s}else return q.iB(b)},
iB:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bG(r,s.ci(a))
t=s.cj(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.E(b,H.q(s,0))
H.E(c,H.q(s,1))
if(typeof b==="string"){u=s.b
s.cO(u==null?s.b=s.bQ():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cO(t==null?s.c=s.bQ():t,b,c)}else s.iC(b,c)},
iC:function(a,b){var u,t,s,r,q=this
H.E(a,H.q(q,0))
H.E(b,H.q(q,1))
u=q.d
if(u==null)u=q.d=q.bQ()
t=q.ci(a)
s=q.bG(u,t)
if(s==null)q.bX(u,t,[q.bR(a,b)])
else{r=q.cj(s,a)
if(r>=0)s[r].b=b
else s.push(q.bR(a,b))}},
H:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.q(s,0),H.q(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.e(P.bi(s))
u=u.c}},
cO:function(a,b,c){var u,t=this
H.E(b,H.q(t,0))
H.E(c,H.q(t,1))
u=t.bg(a,b)
if(u==null)t.bX(a,b,t.bR(b,c))
else u.b=c},
fo:function(){this.r=this.r+1&67108863},
bR:function(a,b){var u,t=this,s=new H.hf(H.E(a,H.q(t,0)),H.E(b,H.q(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fo()
return s},
ci:function(a){return J.dm(a)&0x3ffffff},
cj:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Q(a[t].a,b))return t
return-1},
i:function(a){return P.l9(this)},
bg:function(a,b){return a[b]},
bG:function(a,b){return a[b]},
bX:function(a,b,c){a[b]=c},
f5:function(a,b){delete a[b]},
cX:function(a,b){return this.bg(a,b)!=null},
bQ:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bX(t,u,t)
this.f5(t,u)
return t}}
H.hf.prototype={}
H.hg.prototype={
gn:function(a){return this.a.a},
gT:function(a){var u=this.a,t=new H.hh(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hh.prototype={
gK:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.bi(t))
else{t=u.c
if(t==null){u.scN(null)
return!1}else{u.scN(t.a)
u.c=u.c.c
return!0}}},
scN:function(a){this.d=H.E(a,H.q(this,0))},
$ib2:1}
H.kB.prototype={
$1:function(a){return this.a(a)},
$S:25}
H.kC.prototype={
$2:function(a,b){return this.a(a,b)},
$S:56}
H.kD.prototype={
$1:function(a){return this.a(H.N(a))},
$S:54}
H.ha.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$im2:1,
$io7:1}
H.cH.prototype={$icH:1}
H.bD.prototype={$ibD:1}
H.dP.prototype={
gn:function(a){return a.length},
$iL:1,
$aL:function(){}}
H.cI.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]},
k:function(a,b,c){H.pn(c)
H.bf(b,a,a.length)
a[b]=c},
$abU:function(){return[P.t]},
$ax:function(){return[P.t]},
$ik:1,
$ak:function(){return[P.t]},
$ib:1,
$ab:function(){return[P.t]}}
H.dQ.prototype={
k:function(a,b,c){H.ad(c)
H.bf(b,a,a.length)
a[b]=c},
$abU:function(){return[P.l]},
$ax:function(){return[P.l]},
$ik:1,
$ak:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]}}
H.hL.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hM.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hN.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hO.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hP.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.dR.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.cJ.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bf(b,a,a.length)
return a[b]},
$icJ:1,
$iR:1}
H.d5.prototype={}
H.d6.prototype={}
H.d7.prototype={}
H.d8.prototype={}
P.jr.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.jq.prototype={
$1:function(a){var u,t
this.a.a=H.o(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:49}
P.js.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jt.prototype={
$0:function(){this.a.$0()},
$S:0}
P.eY.prototype={
eO:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cf(new P.k7(this,b),0),a)
else throw H.e(P.I("`setTimeout()` not found."))},
eP:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cf(new P.k6(this,a,Date.now(),b),0),a)
else throw H.e(P.I("Periodic timer."))},
$iba:1}
P.k7.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.k6.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.ez(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.be.prototype={
iG:function(a){if((this.c&15)!==6)return!0
return this.b.b.cw(H.o(this.d,{func:1,ret:P.S,args:[P.U]}),a.a,P.S,P.U)},
iz:function(a){var u=this.e,t=P.U,s={futureOr:1,type:H.q(this,1)},r=this.b.b
if(H.ff(u,{func:1,args:[P.U,P.at]}))return H.lw(r.j4(u,a.a,a.b,null,t,P.at),s)
else return H.lw(r.cw(H.o(u,{func:1,args:[P.U]}),a.a,null,t),s)}}
P.aJ.prototype={
ed:function(a,b,c){var u,t,s,r=H.q(this,0)
H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a1
if(u!==C.f){H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.pc(b,u)}t=new P.aJ($.a1,[c])
s=b==null?1:3
this.cP(new P.be(t,s,a,b,[r,c]))
return t},
j7:function(a,b){return this.ed(a,null,b)},
cP:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ibe")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaJ")
s=u.a
if(s<4){u.cP(a)
return}t.a=s
t.c=u.c}P.kr(null,null,t.b,H.o(new P.jC(t,a),{func:1,ret:-1}))}},
da:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ibe")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaJ")
u=q.a
if(u<4){q.da(a)
return}p.a=u
p.c=q.c}o.a=p.bi(a)
P.kr(null,null,p.b,H.o(new P.jG(o,p),{func:1,ret:-1}))}},
bU:function(){var u=H.f(this.c,"$ibe")
this.c=null
return this.bi(u)},
bi:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cT:function(a){var u,t,s=this,r=H.q(s,0)
H.lw(a,{futureOr:1,type:r})
u=s.$ti
if(H.ls(a,"$icx",u,"$acx"))if(H.ls(a,"$iaJ",u,null))P.mr(a,s)
else P.ot(a,s)
else{t=s.bU()
H.E(a,r)
s.a=4
s.c=a
P.d3(s,t)}},
cU:function(a,b){var u,t=this
H.f(b,"$iat")
u=t.bU()
t.a=8
t.c=new P.al(a,b)
P.d3(t,u)},
$icx:1}
P.jC.prototype={
$0:function(){P.d3(this.a,this.b)},
$S:0}
P.jG.prototype={
$0:function(){P.d3(this.b,this.a.a)},
$S:0}
P.jD.prototype={
$1:function(a){var u=this.a
u.a=0
u.cT(a)},
$S:17}
P.jE.prototype={
$2:function(a,b){H.f(b,"$iat")
this.a.cU(a,b)},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jF.prototype={
$0:function(){this.a.cU(this.b,this.c)},
$S:0}
P.jJ.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.e9(H.o(s.d,{func:1}),null)}catch(r){u=H.aj(r)
t=H.ck(r)
if(o.d){s=H.f(o.a.a.c,"$ial").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$ial")
else q.b=new P.al(u,t)
q.a=!0
return}if(!!J.V(n).$icx){if(n instanceof P.aJ&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$ial")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.j7(new P.jK(p),null)
s.a=!1}},
$S:3}
P.jK.prototype={
$1:function(a){return this.a},
$S:46}
P.jI.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.q(s,0)
q=H.E(n.c,r)
p=H.q(s,1)
n.a.b=s.b.b.cw(H.o(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aj(o)
t=H.ck(o)
s=n.a
s.b=new P.al(u,t)
s.a=!0}},
$S:3}
P.jH.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$ial")
r=m.c
if(H.F(r.iG(u))&&r.e!=null){q=m.b
q.b=r.iz(u)
q.a=!1}}catch(p){t=H.aj(p)
s=H.ck(p)
r=H.f(m.a.a.c,"$ial")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.al(t,s)
n.a=!0}},
$S:3}
P.ek.prototype={}
P.it.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aJ($.a1,[P.l])
r.a=0
u=H.q(s,0)
t=H.o(new P.iv(r,s),{func:1,ret:-1,args:[u]})
H.o(new P.iw(r,q),{func:1,ret:-1})
W.ac(s.a,s.b,t,!1,u)
return q}}
P.iv.prototype={
$1:function(a){H.E(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.O,args:[H.q(this.b,0)]}}}
P.iw.prototype={
$0:function(){this.b.cT(this.a.a)},
$S:0}
P.cS.prototype={}
P.iu.prototype={}
P.ba.prototype={}
P.al.prototype={
i:function(a){return H.i(this.a)},
$iby:1}
P.kg.prototype={$iqk:1}
P.kq.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dT():s
s=this.b
if(s==null)throw H.e(t)
u=H.e(t)
u.stack=s.i(0)
throw u},
$S:0}
P.jQ.prototype={
j5:function(a){var u,t,s,r=null
H.o(a,{func:1,ret:-1})
try{if(C.f===$.a1){a.$0()
return}P.mC(r,r,this,a,-1)}catch(s){u=H.aj(s)
t=H.ck(s)
P.kp(r,r,this,u,H.f(t,"$iat"))}},
j6:function(a,b,c){var u,t,s,r=null
H.o(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.f===$.a1){a.$1(b)
return}P.mD(r,r,this,a,b,-1,c)}catch(s){u=H.aj(s)
t=H.ck(s)
P.kp(r,r,this,u,H.f(t,"$iat"))}},
i6:function(a,b){return new P.jS(this,H.o(a,{func:1,ret:b}),b)},
c1:function(a){return new P.jR(this,H.o(a,{func:1,ret:-1}))},
dt:function(a,b){return new P.jT(this,H.o(a,{func:1,ret:-1,args:[b]}),b)},
e9:function(a,b){H.o(a,{func:1,ret:b})
if($.a1===C.f)return a.$0()
return P.mC(null,null,this,a,b)},
cw:function(a,b,c,d){H.o(a,{func:1,ret:c,args:[d]})
H.E(b,d)
if($.a1===C.f)return a.$1(b)
return P.mD(null,null,this,a,b,c,d)},
j4:function(a,b,c,d,e,f){H.o(a,{func:1,ret:d,args:[e,f]})
H.E(b,e)
H.E(c,f)
if($.a1===C.f)return a.$2(b,c)
return P.pd(null,null,this,a,b,c,d,e,f)}}
P.jS.prototype={
$0:function(){return this.a.e9(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jR.prototype={
$0:function(){return this.a.j5(this.b)},
$S:3}
P.jT.prototype={
$1:function(a){var u=this.c
return this.a.j6(this.b,H.E(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jO.prototype={
gT:function(a){var u=this,t=new P.ez(u,u.r,u.$ti)
t.c=u.e
return t},
gn:function(a){return this.a},
W:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.f(u[b],"$ic9")!=null}else{t=this.f0(b)
return t}},
f0:function(a){var u=this.d
if(u==null)return!1
return this.bE(this.d1(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.E(b,H.q(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cQ(u==null?s.b=P.li():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cQ(t==null?s.c=P.li():t,b)}else return s.eR(0,b)},
eR:function(a,b){var u,t,s,r=this
H.E(b,H.q(r,0))
u=r.d
if(u==null)u=r.d=P.li()
t=r.cV(b)
s=u[t]
if(s==null)u[t]=[r.bB(b)]
else{if(r.bE(s,b)>=0)return!1
s.push(r.bB(b))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hq(this.c,b)
else return this.hp(0,b)},
hp:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.d1(r,b)
t=s.bE(u,b)
if(t<0)return!1
s.dj(u.splice(t,1)[0])
return!0},
cQ:function(a,b){H.E(b,H.q(this,0))
if(H.f(a[b],"$ic9")!=null)return!1
a[b]=this.bB(b)
return!0},
hq:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$ic9")
if(u==null)return!1
this.dj(u)
delete a[b]
return!0},
cS:function(){this.r=1073741823&this.r+1},
bB:function(a){var u,t=this,s=new P.c9(H.E(a,H.q(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cS()
return s},
dj:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cS()},
cV:function(a){return J.dm(a)&1073741823},
d1:function(a,b){return a[this.cV(b)]},
bE:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Q(a[t].a,b))return t
return-1}}
P.c9.prototype={}
P.ez.prototype={
gK:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.bi(t))
else{t=u.c
if(t==null){u.scR(null)
return!1}else{u.scR(H.E(t.a,H.q(u,0)))
u.c=u.c.b
return!0}}},
scR:function(a){this.d=H.E(a,H.q(this,0))},
$ib2:1}
P.hi.prototype={
$2:function(a,b){this.a.k(0,H.E(a,this.b),H.E(b,this.c))},
$S:5}
P.hj.prototype={$ik:1,$ib:1}
P.x.prototype={
gT:function(a){return new H.cC(a,this.gn(a),[H.cj(this,a,"x",0)])},
J:function(a,b){return this.j(a,b)},
j9:function(a,b){var u,t=this,s=H.d([],[H.cj(t,a,"x",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.k(s,u,t.j(a,u))
return s},
j8:function(a){return this.j9(a,!0)},
it:function(a,b,c,d){var u
H.E(d,H.cj(this,a,"x",0))
P.bH(b,c,this.gn(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.l3(a,"[","]")}}
P.hl.prototype={}
P.hm.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.i(a)
t.a=u+": "
t.a+=H.i(b)},
$S:5}
P.af.prototype={
H:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.cj(s,a,"af",0),H.cj(s,a,"af",1)]})
for(u=J.br(s.ga3(a));u.w();){t=u.gK(u)
b.$2(t,s.j(a,t))}},
gn:function(a){return J.aC(this.ga3(a))},
i:function(a){return P.l9(a)},
$iy:1}
P.k8.prototype={
k:function(a,b,c){H.E(b,H.q(this,0))
H.E(c,H.q(this,1))
throw H.e(P.I("Cannot modify unmodifiable map"))}}
P.hn.prototype={
j:function(a,b){return J.dl(this.a,b)},
k:function(a,b,c){J.kW(this.a,H.E(b,H.q(this,0)),H.E(c,H.q(this,1)))},
H:function(a,b){J.lF(this.a,H.o(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]}))},
gn:function(a){return J.aC(this.a)},
i:function(a){return J.ar(this.a)},
$iy:1}
P.ed.prototype={}
P.jV.prototype={
ap:function(a,b){var u
for(u=J.br(H.m(b,"$ik",this.$ti,"$ak"));u.w();)this.h(0,u.gK(u))},
i:function(a){return P.l3(this,"{","}")},
J:function(a,b){var u,t,s,r=this
P.m7(b,"index")
for(u=P.ox(r,r.r,H.q(r,0)),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.e(P.Z(b,r,"index",null,t))},
$ik:1,
$ima:1}
P.eA.prototype={}
P.f2.prototype={}
P.fs.prototype={
iI:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bH(a0,a1,b.length)
u=$.ni()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.D(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kA(C.b.D(b,n))
j=H.kA(C.b.D(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.c(u,i)
h=u[i]
if(h>=0){i=C.b.V("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.a7("")
g=r.a+=C.b.t(b,s,t)
r.a=g+H.c_(m)
s=n
continue}}throw H.e(P.a5("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.t(b,s,a1)
f=g.length
if(q>=0)P.lJ(b,p,a1,q,o,f)
else{e=C.d.bd(f-1,4)+1
if(e===1)throw H.e(P.a5(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aW(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lJ(b,p,a1,q,o,d)
else{e=C.d.bd(d,4)
if(e===1)throw H.e(P.a5(c,b,a1))
if(e>1)b=C.b.aW(b,a1,a1,e===2?"==":"=")}return b},
$abS:function(){return[[P.b,P.l],P.h]}}
P.ft.prototype={
$abv:function(){return[[P.b,P.l],P.h]}}
P.bS.prototype={}
P.bv.prototype={}
P.fQ.prototype={
$abS:function(){return[P.h,[P.b,P.l]]}}
P.h5.prototype={
i:function(a){return this.a}}
P.h4.prototype={
f2:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.a7("")
if(r>b)q.a+=C.b.t(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nt(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abv:function(){return[P.h,P.h]}}
P.j5.prototype={
gis:function(){return C.N}}
P.j7.prototype={
c6:function(a){var u,t,s=P.bH(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.ke(u)
if(t.fe(a,0,s)!==s)t.dl(J.np(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oO(0,t.b,u.length)))},
$abv:function(){return[P.h,[P.b,P.l]]}}
P.ke.prototype={
dl:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fe:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.V(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.D(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dl(r,C.b.D(a,p)))s=p}else if(r<=2047){q=n.b
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
P.j6.prototype={
c6:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[P.l],"$ab")
u=P.oj(!1,a,0,null)
if(u!=null)return u
t=P.bH(0,null,J.aC(a))
s=P.mF(a,0,t)
if(s>0){r=P.cT(a,0,s)
if(s===t)return r
q=new P.a7(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.a7("")
n=new P.kd(!1,q)
n.c=o
n.ib(a,p,t)
if(n.e>0){H.A(P.a5("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c_(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abv:function(){return[[P.b,P.l],P.h]}}
P.kd.prototype={
ib:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.m(a,"$ib",[P.l],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.dh(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.ah()
if((o&192)!==128){n=P.a5(h+C.d.bc(o,16),a,p)
throw H.e(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.c(C.w,n)
if(u<=C.w[n]){n=P.a5("Overlong encoding of 0x"+C.d.bc(u,16),a,p-s-1)
throw H.e(n)}if(u>1114111){n=P.a5("Character outside valid Unicode range: 0x"+C.d.bc(u,16),a,p-s-1)
throw H.e(n)}if(!i.c||u!==65279)q.a+=H.c_(u)
i.c=!1}for(n=p<c;n;){m=P.mF(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cT(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.R()
if(o<0){j=P.a5("Negative UTF-8 code unit: -0x"+C.d.bc(-o,16),a,k-1)
throw H.e(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a5(h+C.d.bc(o,16),a,k-1)
throw H.e(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.S.prototype={}
P.ax.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.ax&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.d.aQ(u,30))&1073741823},
i:function(a){var u=this,t=P.nC(H.o3(u)),s=P.dw(H.o1(u)),r=P.dw(H.nY(u)),q=P.dw(H.nZ(u)),p=P.dw(H.o0(u)),o=P.dw(H.o2(u)),n=P.nD(H.o_(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.t.prototype={}
P.bx.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.bx&&this.a===b.a},
gI:function(a){return C.d.gI(this.a)},
i:function(a){var u,t,s,r=new P.fN(),q=this.a
if(q<0)return"-"+new P.bx(0-q).i(0)
u=r.$1(C.d.a8(q,6e7)%60)
t=r.$1(C.d.a8(q,1e6)%60)
s=new P.fM().$1(q%1e6)
return""+C.d.a8(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.fM.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:18}
P.fN.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:18}
P.by.prototype={}
P.fm.prototype={
i:function(a){return"Assertion failed"}}
P.dT.prototype={
i:function(a){return"Throw of null."}}
P.aL.prototype={
gbD:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbC:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbD()+o+u
if(!q.a)return t
s=q.gbC()
r=P.dA(q.b)
return t+s+": "+r}}
P.c0.prototype={
gbD:function(){return"RangeError"},
gbC:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.h6.prototype={
gbD:function(){return"RangeError"},
gbC:function(){var u,t=H.ad(this.b)
if(typeof t!=="number")return t.R()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gn:function(a){return this.f}}
P.iZ.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iW.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cR.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fz.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dA(u)+"."}}
P.hW.prototype={
i:function(a){return"Out of Memory"},
$iby:1}
P.e3.prototype={
i:function(a){return"Stack Overflow"},
$iby:1}
P.fG.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.es.prototype={
i:function(a){return"Exception: "+this.a}}
P.h_.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.t(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.D(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.V(f,q)
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
k=""}j=C.b.t(f,m,n)
return h+l+j+k+"\n"+C.b.q(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.i(g)+")"):h}}
P.bz.prototype={}
P.l.prototype={}
P.k.prototype={
bv:function(a,b){var u=H.aq(this,"k",0)
return new H.d0(this,H.o(b,{func:1,ret:P.S,args:[u]}),[u])},
gn:function(a){var u,t=this.gT(this)
for(u=0;t.w();)++u
return u},
gaJ:function(a){var u,t=this.gT(this)
if(!t.w())throw H.e(H.h7())
u=t.gK(t)
if(t.w())throw H.e(H.nJ())
return u},
J:function(a,b){var u,t,s
P.m7(b,"index")
for(u=this.gT(this),t=0;u.w();){s=u.gK(u)
if(b===t)return s;++t}throw H.e(P.Z(b,this,"index",null,t))},
i:function(a){return P.nI(this,"(",")")}}
P.b2.prototype={}
P.b.prototype={$ik:1}
P.y.prototype={}
P.O.prototype={
gI:function(a){return P.U.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.a9.prototype={}
P.U.prototype={constructor:P.U,$iU:1,
p:function(a,b){return this===b},
gI:function(a){return H.cM(this)},
i:function(a){return"Instance of '"+H.i(H.cN(this))+"'"},
toString:function(){return this.i(this)}}
P.at.prototype={}
P.h.prototype={$im2:1}
P.a7.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipV:1}
P.j3.prototype={
$2:function(a,b){var u,t,s,r=P.h
H.m(a,"$iy",[r,r],"$ay")
H.N(b)
u=J.di(b).dP(b,"=")
if(u===-1){if(b!=="")J.kW(a,P.lm(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.t(b,0,u)
s=C.b.a9(b,u+1)
r=this.a
J.kW(a,P.lm(t,0,t.length,r,!0),P.lm(s,0,s.length,r,!0))}return a},
$S:45}
P.j0.prototype={
$2:function(a,b){throw H.e(P.a5("Illegal IPv4 address, "+a,this.a,b))},
$S:44}
P.j1.prototype={
$2:function(a,b){throw H.e(P.a5("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.j2.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fh(C.b.t(this.b,a,b),null,16)
if(typeof u!=="number")return u.R()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:42}
P.ca.prototype={
gel:function(){return this.b},
gcg:function(a){var u=this.c
if(u==null)return""
if(C.b.a2(u,"["))return C.b.t(u,1,u.length-1)
return u},
gbq:function(a){var u=this.d
if(u==null)return P.mv(this.a)
return u},
gcr:function(a){var u=this.f
return u==null?"":u},
gdK:function(){var u=this.r
return u==null?"":u},
e6:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.m(b,"$iy",[P.h,null],"$ay")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a2(p,"/"))p="/"+p
n=P.lk(null,0,0,b)
return new P.ca(u,s,q,r,p,n,m.r)},
gcs:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.h
s.sho(new P.ed(P.mk(u==null?"":u),[t,t]))}return s.Q},
gdL:function(){return this.c!=null},
gdO:function(){return this.f!=null},
gdM:function(){return this.r!=null},
i:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.i(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.i(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.i(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.V(b).$ile)if(s.a==b.gbw())if(s.c!=null===b.gdL())if(s.b==b.gel())if(s.gcg(s)==b.gcg(b))if(s.gbq(s)==b.gbq(b))if(s.e===b.ge0(b)){u=s.f
t=u==null
if(!t===b.gdO()){if(t)u=""
if(u===b.gcr(b)){u=s.r
t=u==null
if(!t===b.gdM()){if(t)u=""
u=u===b.gdK()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
return u==null?this.z=C.b.gI(this.i(0)):u},
sho:function(a){var u=P.h
this.Q=H.m(a,"$iy",[u,u],"$ay")},
$ile:1,
gbw:function(){return this.a},
ge0:function(a){return this.e}}
P.k9.prototype={
$1:function(a){throw H.e(P.a5("Invalid port",this.a,this.b+1))},
$S:41}
P.ka.prototype={
$1:function(a){return P.f3(C.W,a,C.h,!1)},
$S:22}
P.kc.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.f3(C.i,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.f3(C.i,b,C.h,!0))}},
$S:23}
P.kb.prototype={
$2:function(a,b){var u,t
H.N(a)
if(b==null||typeof b==="string")this.a.$2(a,H.N(b))
else for(u=J.br(H.mU(b,"$ik")),t=this.a;u.w();)t.$2(a,H.N(u.gK(u)))},
$S:40}
P.j_.prototype={
gek:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.c(o,0)
u=q.a
o=o[0]+1
t=C.b.bn(u,"?",o)
s=u.length
if(t>=0){r=P.dd(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jx("data",p,p,p,P.dd(u,o,s,C.A,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.c(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kk.prototype={
$1:function(a){return new Uint8Array(96)},
$S:48}
P.kj.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.c(u,a)
u=u[a]
J.nq(u,0,96,b)
return u},
$S:39}
P.kl.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.D(b,s)^96
if(r>=t)return H.c(a,r)
a[r]=c}}}
P.km.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.D(b,0),t=C.b.D(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.c(a,r)
a[r]=c}}}
P.jY.prototype={
gdL:function(){return this.c>0},
gdN:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.B()
t=this.e
if(typeof t!=="number")return H.D(t)
t=u+1<t
u=t}else u=!1
return u},
gdO:function(){var u=this.f
if(typeof u!=="number")return u.R()
return u<this.r},
gdM:function(){return this.r<this.a.length},
gd3:function(){return this.b===4&&C.b.a2(this.a,"http")},
gd4:function(){return this.b===5&&C.b.a2(this.a,"https")},
gbw:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gd3())q=t.x="http"
else if(t.gd4()){t.x="https"
q="https"}else if(q===4&&C.b.a2(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a2(t.a,r)){t.x=r
q=r}else{q=C.b.t(t.a,0,q)
t.x=q}return q},
gel:function(){var u=this.c,t=this.b+3
return u>t?C.b.t(this.a,t,u-1):""},
gcg:function(a){var u=this.c
return u>0?C.b.t(this.a,u,this.d):""},
gbq:function(a){var u,t=this
if(t.gdN()){u=t.d
if(typeof u!=="number")return u.B()
return P.fh(C.b.t(t.a,u+1,t.e),null,null)}if(t.gd3())return 80
if(t.gd4())return 443
return 0},
ge0:function(a){return C.b.t(this.a,this.e,this.f)},
gcr:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.R()
return u<t?C.b.t(this.a,u+1,t):""},
gdK:function(){var u=this.r,t=this.a
return u<t.length?C.b.a9(t,u+1):""},
gcs:function(){var u=this,t=u.f
if(typeof t!=="number")return t.R()
if(t>=u.r)return C.X
t=P.h
return new P.ed(P.mk(u.gcr(u)),[t,t])},
e6:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.m(b,"$iy",[P.h,null],"$ay")
u=k.gbw()
t=u==="file"
s=k.c
r=s>0?C.b.t(k.a,k.b+3,s):""
q=k.gdN()?k.gbq(k):j
s=k.c
if(s>0)p=C.b.t(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.t(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a2(o,"/"))o="/"+o
m=P.lk(j,0,0,b)
n=k.r
l=n<s.length?C.b.a9(s,n+1):j
return new P.ca(u,r,p,q,o,m,l)},
gI:function(a){var u=this.y
return u==null?this.y=C.b.gI(this.a):u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.V(b).$ile&&this.a===b.i(0)},
i:function(a){return this.a},
$ile:1}
P.jx.prototype={}
W.v.prototype={}
W.fj.prototype={
gn:function(a){return a.length}}
W.dn.prototype={
i:function(a){return String(a)},
$idn:1}
W.fk.prototype={
i:function(a){return String(a)}}
W.co.prototype={$ico:1}
W.bQ.prototype={$ibQ:1}
W.bs.prototype={$ibs:1}
W.bR.prototype={
eo:function(a,b,c){var u=a.getContext(b,P.pk(c))
return u},
$ibR:1}
W.bt.prototype={
gn:function(a){return a.length}}
W.cs.prototype={$ics:1}
W.fC.prototype={
gn:function(a){return a.length}}
W.W.prototype={$iW:1}
W.ct.prototype={
gn:function(a){return a.length}}
W.fD.prototype={}
W.b0.prototype={}
W.b1.prototype={}
W.fE.prototype={
gn:function(a){return a.length}}
W.fF.prototype={
gn:function(a){return a.length}}
W.fI.prototype={
gn:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.fJ.prototype={
i:function(a){return String(a)}}
W.dx.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.m(c,"$iak",[P.a9],"$aak")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[[P.ak,P.a9]]},
$ax:function(){return[[P.ak,P.a9]]},
$ik:1,
$ak:function(){return[[P.ak,P.a9]]},
$ib:1,
$ab:function(){return[[P.ak,P.a9]]},
$aH:function(){return[[P.ak,P.a9]]}}
W.dy.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gaI(a))+" x "+H.i(this.gaB(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$iak)return!1
return a.left===u.gbp(b)&&a.top===u.gbs(b)&&this.gaI(a)===u.gaI(b)&&this.gaB(a)===u.gaB(b)},
gI:function(a){return W.mt(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(this.gaI(a)),C.e.gI(this.gaB(a)))},
gdu:function(a){return a.bottom},
gaB:function(a){return a.height},
gbp:function(a){return a.left},
gcv:function(a){return a.right},
gbs:function(a){return a.top},
gaI:function(a){return a.width},
$iak:1,
$aak:function(){return[P.a9]}}
W.fK.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.N(c)
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[P.h]},
$ax:function(){return[P.h]},
$ik:1,
$ak:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aH:function(){return[P.h]}}
W.fL.prototype={
gn:function(a){return a.length}}
W.jv.prototype={
gn:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return H.f(u[b],"$iT")},
k:function(a,b,c){var u
H.f(c,"$iT")
u=this.b
if(b<0||b>=u.length)return H.c(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gT:function(a){var u=this.j8(this)
return new J.aw(u,u.length,[H.q(u,0)])},
$ax:function(){return[W.T]},
$ak:function(){return[W.T]},
$ab:function(){return[W.T]}}
W.T.prototype={
gi5:function(a){return new W.jy(a)},
gc5:function(a){return new W.jv(a,a.children)},
gdv:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.R()
if(s<0)s=-s*0
if(typeof r!=="number")return r.R()
if(r<0)r=-r*0
return new P.ak(u,t,s,r,[P.a9])},
i:function(a){return a.localName},
ac:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lR
if(u==null){u=H.d([],[W.aA])
t=new W.dS(u)
C.a.h(u,W.ms(null))
C.a.h(u,W.mu())
$.lR=t
d=t}else d=u
u=$.lQ
if(u==null){u=new W.f4(d)
$.lQ=u
c=u}else{u.a=d
c=u}}if($.bj==null){u=document
t=u.implementation.createHTMLDocument("")
$.bj=t
$.l2=t.createRange()
t=$.bj.createElement("base")
H.f(t,"$ico")
t.href=u.baseURI
$.bj.head.appendChild(t)}u=$.bj
if(u.body==null){t=u.createElement("body")
u.body=H.f(t,"$ibs")}u=$.bj
if(!!this.$ibs)s=u.body
else{s=u.createElement(a.tagName)
$.bj.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.W(C.U,a.tagName)){$.l2.selectNodeContents(s)
r=$.l2.createContextualFragment(b)}else{s.innerHTML=b
r=$.bj.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bj.body
if(s==null?u!=null:s!==u)J.lH(s)
c.cD(r)
document.adoptNode(r)
return r},
ig:function(a,b,c){return this.ac(a,b,c,null)},
eq:function(a,b){a.textContent=null
a.appendChild(this.ac(a,b,null,null))},
$iT:1,
gea:function(a){return a.tagName}}
W.fP.prototype={
$1:function(a){return!!J.V(H.f(a,"$iG")).$iT},
$S:27}
W.n.prototype={$in:1}
W.j.prototype={
hW:function(a,b,c,d){H.o(c,{func:1,args:[W.n]})
if(c!=null)this.eS(a,b,c,!1)},
eS:function(a,b,c,d){return a.addEventListener(b,H.cf(H.o(c,{func:1,args:[W.n]}),1),!1)},
$ij:1}
W.aE.prototype={$iaE:1}
W.cw.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaE")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aE]},
$ax:function(){return[W.aE]},
$ik:1,
$ak:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$icw:1,
$aH:function(){return[W.aE]}}
W.fV.prototype={
gn:function(a){return a.length}}
W.fZ.prototype={
gn:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.h3.prototype={
gn:function(a){return a.length}}
W.bV.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.G]},
$ax:function(){return[W.G]},
$ik:1,
$ak:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ibV:1,
$aH:function(){return[W.G]}}
W.cz.prototype={$icz:1}
W.cA.prototype={$icA:1}
W.b4.prototype={$ib4:1}
W.dI.prototype={
i:function(a){return String(a)},
$idI:1}
W.hE.prototype={
gn:function(a){return a.length}}
W.cE.prototype={$icE:1}
W.hF.prototype={
j:function(a,b){return P.bm(a.get(H.N(b)))},
H:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bm(t.value[1]))}},
ga3:function(a){var u=H.d([],[P.h])
this.H(a,new W.hG(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.e(P.I("Not supported"))},
$aaf:function(){return[P.h,null]},
$iy:1,
$ay:function(){return[P.h,null]}}
W.hG.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hH.prototype={
j:function(a,b){return P.bm(a.get(H.N(b)))},
H:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bm(t.value[1]))}},
ga3:function(a){var u=H.d([],[P.h])
this.H(a,new W.hI(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.e(P.I("Not supported"))},
$aaf:function(){return[P.h,null]},
$iy:1,
$ay:function(){return[P.h,null]}}
W.hI.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aO.prototype={$iaO:1}
W.hJ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaO")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aO]},
$ax:function(){return[W.aO]},
$ik:1,
$ak:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aH:function(){return[W.aO]}}
W.ag.prototype={$iag:1}
W.ap.prototype={
gaJ:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.e(P.mb("No elements"))
if(t>1)throw H.e(P.mb("More than one element"))
return u.firstChild},
ap:function(a,b){var u,t,s,r
H.m(b,"$ik",[W.G],"$ak")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
k:function(a,b,c){var u,t
H.f(c,"$iG")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.c(t,b)
u.replaceChild(c,t[b])},
gT:function(a){var u=this.a.childNodes
return new W.dB(u,u.length,[H.cj(C.Y,u,"H",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$ax:function(){return[W.G]},
$ak:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
iZ:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
j2:function(a,b){var u,t
try{u=a.parentNode
J.nn(u,b,a)}catch(t){H.aj(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eu(a):u},
i0:function(a,b){return a.appendChild(H.f(b,"$iG"))},
ht:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.cK.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.G]},
$ax:function(){return[W.G]},
$ik:1,
$ak:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aH:function(){return[W.G]}}
W.aP.prototype={$iaP:1,
gn:function(a){return a.length}}
W.hZ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaP")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aP]},
$ax:function(){return[W.aP]},
$ik:1,
$ak:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aH:function(){return[W.aP]}}
W.i8.prototype={
j:function(a,b){return P.bm(a.get(H.N(b)))},
H:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bm(t.value[1]))}},
ga3:function(a){var u=H.d([],[P.h])
this.H(a,new W.i9(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.e(P.I("Not supported"))},
$aaf:function(){return[P.h,null]},
$iy:1,
$ay:function(){return[P.h,null]}}
W.i9.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.ib.prototype={
gn:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.im.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaR")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aR]},
$ax:function(){return[W.aR]},
$ik:1,
$ak:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aH:function(){return[W.aR]}}
W.aS.prototype={$iaS:1}
W.io.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaS")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aS]},
$ax:function(){return[W.aS]},
$ik:1,
$ak:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aH:function(){return[W.aS]}}
W.aT.prototype={$iaT:1,
gn:function(a){return a.length}}
W.ir.prototype={
j:function(a,b){return a.getItem(H.N(b))},
k:function(a,b,c){a.setItem(b,c)},
H:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga3:function(a){var u=H.d([],[P.h])
this.H(a,new W.is(u))
return u},
gn:function(a){return a.length},
$aaf:function(){return[P.h,P.h]},
$iy:1,
$ay:function(){return[P.h,P.h]}}
W.is.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:23}
W.aF.prototype={$iaF:1}
W.b9.prototype={$ib9:1}
W.e4.prototype={
ac:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.by(a,b,c,d)
u=W.nE("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ap(t).ap(0,new W.ap(u))
return t}}
W.iy.prototype={
ac:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.by(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ac(u.createElement("table"),b,c,d)
u.toString
u=new W.ap(u)
s=u.gaJ(u)
s.toString
u=new W.ap(s)
r=u.gaJ(u)
t.toString
r.toString
new W.ap(t).ap(0,new W.ap(r))
return t}}
W.iz.prototype={
ac:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.by(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ac(u.createElement("table"),b,c,d)
u.toString
u=new W.ap(u)
s=u.gaJ(u)
t.toString
s.toString
new W.ap(t).ap(0,new W.ap(s))
return t}}
W.cU.prototype={$icU:1}
W.aV.prototype={$iaV:1}
W.aG.prototype={$iaG:1}
W.iB.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaG")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aG]},
$ax:function(){return[W.aG]},
$ik:1,
$ak:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$aH:function(){return[W.aG]}}
W.iC.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaV")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aV]},
$ax:function(){return[W.aV]},
$ik:1,
$ak:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aH:function(){return[W.aV]}}
W.iE.prototype={
gn:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.aX.prototype={$iaX:1}
W.iI.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaW")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aW]},
$ax:function(){return[W.aW]},
$ik:1,
$ak:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aH:function(){return[W.aW]}}
W.iJ.prototype={
gn:function(a){return a.length}}
W.bI.prototype={}
W.j4.prototype={
i:function(a){return String(a)}}
W.jm.prototype={
gn:function(a){return a.length}}
W.bd.prototype={
gij:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.I("deltaY is not supported"))},
gii:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.I("deltaX is not supported"))},
$ibd:1}
W.d1.prototype={
hu:function(a,b){return a.requestAnimationFrame(H.cf(H.o(b,{func:1,ret:-1,args:[P.a9]}),1))},
f8:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d2.prototype={$id2:1}
W.jw.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iW")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.W]},
$ax:function(){return[W.W]},
$ik:1,
$ak:function(){return[W.W]},
$ib:1,
$ab:function(){return[W.W]},
$aH:function(){return[W.W]}}
W.en.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$iak)return!1
return a.left===u.gbp(b)&&a.top===u.gbs(b)&&a.width===u.gaI(b)&&a.height===u.gaB(b)},
gI:function(a){return W.mt(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(a.width),C.e.gI(a.height))},
gaB:function(a){return a.height},
gaI:function(a){return a.width}}
W.jL.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaN")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aN]},
$ax:function(){return[W.aN]},
$ik:1,
$ak:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aH:function(){return[W.aN]}}
W.eF.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.G]},
$ax:function(){return[W.G]},
$ik:1,
$ak:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aH:function(){return[W.G]}}
W.jZ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaT")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aT]},
$ax:function(){return[W.aT]},
$ik:1,
$ak:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aH:function(){return[W.aT]}}
W.k2.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaF")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aF]},
$ax:function(){return[W.aF]},
$ik:1,
$ak:function(){return[W.aF]},
$ib:1,
$ab:function(){return[W.aF]},
$aH:function(){return[W.aF]}}
W.ju.prototype={
H:function(a,b){var u,t,s,r,q
H.o(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.ga3(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga3:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.c(r,t)
s=H.f(r[t],"$id2")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aaf:function(){return[P.h,P.h]},
$ay:function(){return[P.h,P.h]}}
W.jy.prototype={
j:function(a,b){return this.a.getAttribute(H.N(b))},
k:function(a,b,c){this.a.setAttribute(b,c)},
gn:function(a){return this.ga3(this).length}}
W.jz.prototype={}
W.lh.prototype={}
W.jA.prototype={}
W.jB.prototype={
$1:function(a){return this.a.$1(H.f(a,"$in"))},
$S:37}
W.bK.prototype={
eH:function(a){var u
if($.d4.giD($.d4)){for(u=0;u<262;++u)$.d4.k(0,C.T[u],W.ps())
for(u=0;u<12;++u)$.d4.k(0,C.q[u],W.pt())}},
aR:function(a){return $.nj().W(0,W.cu(a))},
aq:function(a,b,c){var u=$.d4.j(0,H.i(W.cu(a))+"::"+b)
if(u==null)u=$.d4.j(0,"*::"+b)
if(u==null)return!1
return H.lr(u.$4(a,b,c,this))},
$iaA:1}
W.H.prototype={
gT:function(a){return new W.dB(a,this.gn(a),[H.cj(this,a,"H",0)])}}
W.dS.prototype={
aR:function(a){return C.a.dr(this.a,new W.hR(a))},
aq:function(a,b,c){return C.a.dr(this.a,new W.hQ(a,b,c))},
$iaA:1}
W.hR.prototype={
$1:function(a){return H.f(a,"$iaA").aR(this.a)},
$S:29}
W.hQ.prototype={
$1:function(a){return H.f(a,"$iaA").aq(this.a,this.b,this.c)},
$S:29}
W.eN.prototype={
eN:function(a,b,c,d){var u,t,s
this.a.ap(0,c)
u=b.bv(0,new W.jW())
t=b.bv(0,new W.jX())
this.b.ap(0,u)
s=this.c
s.ap(0,C.x)
s.ap(0,t)},
aR:function(a){return this.a.W(0,W.cu(a))},
aq:function(a,b,c){var u=this,t=W.cu(a),s=u.c
if(s.W(0,H.i(t)+"::"+b))return u.d.i_(c)
else if(s.W(0,"*::"+b))return u.d.i_(c)
else{s=u.b
if(s.W(0,H.i(t)+"::"+b))return!0
else if(s.W(0,"*::"+b))return!0
else if(s.W(0,H.i(t)+"::*"))return!0
else if(s.W(0,"*::*"))return!0}return!1},
$iaA:1}
W.jW.prototype={
$1:function(a){return!C.a.W(C.q,H.N(a))},
$S:30}
W.jX.prototype={
$1:function(a){return C.a.W(C.q,H.N(a))},
$S:30}
W.k4.prototype={
aq:function(a,b,c){if(this.ey(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.W(0,b)
return!1}}
W.k5.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.N(a))},
$S:22}
W.k3.prototype={
aR:function(a){var u=J.V(a)
if(!!u.$icO)return!1
u=!!u.$ip
if(u&&W.cu(a)==="foreignObject")return!1
if(u)return!0
return!1},
aq:function(a,b,c){if(b==="is"||C.b.a2(b,"on"))return!1
return this.aR(a)},
$iaA:1}
W.dB.prototype={
w:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sd2(J.dl(u.a,t))
u.c=t
return!0}u.sd2(null)
u.c=s
return!1},
gK:function(a){return this.d},
sd2:function(a){this.d=H.E(a,H.q(this,0))},
$ib2:1}
W.aA.prototype={}
W.jU.prototype={$iq6:1}
W.f4.prototype={
cD:function(a){new W.kf(this).$2(a,null)},
b0:function(a,b){if(b==null)J.lH(a)
else b.removeChild(a)},
hy:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nr(a)
n=o.a.getAttribute("is")
H.f(a,"$iT")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.F(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.aj(r)}t="element unprintable"
try{t=J.ar(a)}catch(r){H.aj(r)}try{s=W.cu(a)
this.hx(H.f(a,"$iT"),b,p,t,s,H.f(o,"$iy"),H.N(n))}catch(r){if(H.aj(r) instanceof P.aL)throw r
else{this.b0(a,b)
window
q="Removing corrupted element "+H.i(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hx:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b0(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aR(a)){o.b0(a,b)
window
u="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.aq(a,"is",g)){o.b0(a,b)
window
u="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga3(f)
t=H.d(u.slice(0),[H.q(u,0)])
for(s=f.ga3(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.c(t,s)
r=t[s]
q=o.a
p=J.nu(r)
H.N(r)
if(!q.aq(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.i(e)+" "+r+'="'+H.i(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.V(a).$icU)o.cD(a.content)},
$ipS:1}
W.kf.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hy(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b0(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.aj(s)
r=H.f(u,"$iG")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.f(t,"$iG")}},
$S:35}
W.em.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.d9.prototype={}
W.da.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eT.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.db.prototype={}
W.dc.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f5.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fe.prototype={}
P.k_.prototype={
dI:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cB:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.V(a)
if(!!u.$iax)return new Date(a.a)
if(!!u.$io7)throw H.e(P.iX("structured clone of RegExp"))
if(!!u.$iaE)return a
if(!!u.$ibQ)return a
if(!!u.$icw)return a
if(!!u.$icz)return a
if(!!u.$icH||!!u.$ibD||!!u.$icE)return a
if(!!u.$iy){t=q.dI(a)
s=q.b
if(t>=s.length)return H.c(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.H(a,new P.k1(p,q))
return p.a}if(!!u.$ib){t=q.dI(a)
p=q.b
if(t>=p.length)return H.c(p,t)
r=p[t]
if(r!=null)return r
return q.ie(a,t)}throw H.e(P.iX("structured clone of other type"))},
ie:function(a,b){var u,t=J.dh(a),s=t.gn(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.cB(t.j(a,u)))
return r}}
P.k1.prototype={
$2:function(a,b){this.a.a[a]=this.b.cB(b)},
$S:5}
P.ks.prototype={
$2:function(a,b){this.a[a]=b},
$S:5}
P.k0.prototype={}
P.fW.prototype={
gbh:function(){var u=this.b,t=H.aq(u,"x",0),s=W.T
return new H.ho(new H.d0(u,H.o(new P.fX(),{func:1,ret:P.S,args:[t]}),[t]),H.o(new P.fY(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.f(c,"$iT")
u=this.gbh()
J.ns(u.b.$1(J.fi(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aC(this.gbh().a)},
j:function(a,b){var u=this.gbh()
return u.b.$1(J.fi(u.a,b))},
gT:function(a){var u=P.lW(this.gbh(),!1,W.T)
return new J.aw(u,u.length,[H.q(u,0)])},
$ax:function(){return[W.T]},
$ak:function(){return[W.T]},
$ab:function(){return[W.T]}}
P.fX.prototype={
$1:function(a){return!!J.V(H.f(a,"$iG")).$iT},
$S:27}
P.fY.prototype={
$1:function(a){return H.z(H.f(a,"$iG"),"$iT")},
$S:34}
P.jP.prototype={
gcv:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.D(t)
return H.E(u+t,H.q(this,0))},
gdu:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.D(t)
return H.E(u+t,H.q(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.i(u.a)+", "+H.i(u.b)+") "+H.i(u.c)+" x "+H.i(u.d)},
p:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.V(b)
if(!!u.$iak){t=p.a
if(t==u.gbp(b)){s=p.b
if(s==u.gbs(b)){r=p.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.D(r)
q=H.q(p,0)
if(H.E(t+r,q)===u.gcv(b)){t=p.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.D(t)
u=H.E(s+t,q)===u.gdu(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t=this,s=t.a,r=J.dm(s),q=t.b,p=J.dm(q),o=t.c
if(typeof s!=="number")return s.B()
if(typeof o!=="number")return H.D(o)
u=H.q(t,0)
o=C.d.gI(H.E(s+o,u))
s=t.d
if(typeof q!=="number")return q.B()
if(typeof s!=="number")return H.D(s)
u=C.d.gI(H.E(q+s,u))
return P.ow(P.jN(P.jN(P.jN(P.jN(0,r),p),o),u))}}
P.ak.prototype={
gbp:function(a){return this.a},
gbs:function(a){return this.b},
gaI:function(a){return this.c},
gaB:function(a){return this.d}}
P.b5.prototype={$ib5:1}
P.hd.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib5")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ax:function(){return[P.b5]},
$ik:1,
$ak:function(){return[P.b5]},
$ib:1,
$ab:function(){return[P.b5]},
$aH:function(){return[P.b5]}}
P.b8.prototype={$ib8:1}
P.hU.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib8")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ax:function(){return[P.b8]},
$ik:1,
$ak:function(){return[P.b8]},
$ib:1,
$ab:function(){return[P.b8]},
$aH:function(){return[P.b8]}}
P.i0.prototype={
gn:function(a){return a.length}}
P.cO.prototype={$icO:1}
P.ix.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.N(c)
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ax:function(){return[P.h]},
$ik:1,
$ak:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aH:function(){return[P.h]}}
P.p.prototype={
gc5:function(a){return new P.fW(a,new W.ap(a))},
ac:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aA])
C.a.h(p,W.ms(null))
C.a.h(p,W.mu())
C.a.h(p,new W.k3())
c=new W.f4(new W.dS(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).ig(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ap(s)
q=p.gaJ(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.bb.prototype={$ibb:1}
P.iK.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibb")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ax:function(){return[P.bb]},
$ik:1,
$ak:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$aH:function(){return[P.bb]}}
P.ex.prototype={}
P.ey.prototype={}
P.eI.prototype={}
P.eJ.prototype={}
P.eU.prototype={}
P.eV.prototype={}
P.f0.prototype={}
P.f1.prototype={}
P.R.prototype={$ik:1,
$ak:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]}}
P.fo.prototype={
gn:function(a){return a.length}}
P.fp.prototype={
j:function(a,b){return P.bm(a.get(H.N(b)))},
H:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bm(t.value[1]))}},
ga3:function(a){var u=H.d([],[P.h])
this.H(a,new P.fq(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.e(P.I("Not supported"))},
$aaf:function(){return[P.h,null]},
$iy:1,
$ay:function(){return[P.h,null]}}
P.fq.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.fr.prototype={
gn:function(a){return a.length}}
P.bP.prototype={}
P.hV.prototype={
gn:function(a){return a.length}}
P.el.prototype={}
P.dq.prototype={$idq:1}
P.dW.prototype={$idW:1}
P.c1.prototype={
a4:function(a,b,c){return a.uniform1f(b,c)},
bu:function(a,b,c){return a.uniform1i(b,c)},
Y:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eh:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
ei:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ej:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic1:1}
P.e_.prototype={$ie_:1}
P.eb.prototype={$ieb:1}
P.ip.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return P.bm(a.item(b))},
k:function(a,b,c){H.f(c,"$iy")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ax:function(){return[[P.y,,,]]},
$ik:1,
$ak:function(){return[[P.y,,,]]},
$ib:1,
$ab:function(){return[[P.y,,,]]},
$aH:function(){return[[P.y,,,]]}}
P.eQ.prototype={}
P.eR.prototype={}
O.a4.prototype={
bz:function(a){var u=this
u.sfj(H.d([],[a]))
u.sd8(null)
u.sd5(null)
u.sd9(null)},
cE:function(a,b,c){var u=this,t=H.aq(u,"a4",0)
H.o(b,{func:1,ret:P.S,args:[[P.k,t]]})
t={func:1,ret:-1,args:[P.l,[P.k,t]]}
H.o(a,t)
H.o(c,t)
u.sd8(b)
u.sd5(a)
u.sd9(c)},
be:function(a,b){return this.cE(a,null,b)},
h7:function(a){var u
H.m(a,"$ik",[H.aq(this,"a4",0)],"$ak")
u=this.b
if(u!=null)return u.$1(a)
return!0},
eF:function(a,b){var u
H.m(b,"$ik",[H.aq(this,"a4",0)],"$ak")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.aw(u,u.length,[H.q(u,0)])},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aq(s,"a4",0)
H.E(b,r)
r=[r]
if(H.F(s.h7(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.eF(t,H.d([b],r))}},
sfj:function(a){this.a=H.m(a,"$ib",[H.aq(this,"a4",0)],"$ab")},
sd8:function(a){this.b=H.o(a,{func:1,ret:P.S,args:[[P.k,H.aq(this,"a4",0)]]})},
sd5:function(a){this.c=H.o(a,{func:1,ret:-1,args:[P.l,[P.k,H.aq(this,"a4",0)]]})},
sd9:function(a){H.o(a,{func:1,ret:-1,args:[P.l,[P.k,H.aq(this,"a4",0)]]})},
$ik:1}
O.cD.prototype={
gn:function(a){return this.a.length},
gA:function(){var u=this.b
return u==null?this.b=D.Y():u},
aK:function(){var u=this.b
if(u!=null)u.E(null)},
ga1:function(a){var u=this.a
if(u.length>0)return C.a.gas(u)
else return V.dO()},
e3:function(a){var u=this.a
if(a==null)C.a.h(u,V.dO())
else C.a.h(u,a)
this.aK()},
cq:function(){var u=this.a
if(u.length>0){u.pop()
this.aK()}},
sbI:function(a){this.a=H.m(a,"$ib",[V.ao],"$ab")}}
E.fu.prototype={}
E.an.prototype={
sai:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gA().N(0,s.gdY())
u=s.c
if(u!=null)u.gA().h(0,s.gdY())
t=new D.M("shape",r,s.c,[F.e0])
t.b=!0
s.aF(t)}},
sb9:function(a){var u,t,s=this
if(!J.Q(s.r,a)){u=s.r
if(u!=null)u.gA().N(0,s.gdW())
if(a!=null)a.gA().h(0,s.gdW())
s.r=a
t=new D.M("mover",u,a,[U.aa])
t.b=!0
s.aF(t)}},
at:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.a:null
if(!J.Q(q,s.x)){u=s.x
s.x=q
t=new D.M("matrix",u,q,[V.ao])
t.b=!0
s.aF(t)}for(r=s.y.a,r=new J.aw(r,r.length,[H.q(r,0)]);r.w();)r.d.at(0,b)},
aV:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga1(s))
else C.a.h(s.a,r.q(0,s.ga1(s)))
s.aK()
a.e4(t.f)
s=a.dy
u=(s&&C.a).gas(s)
if(u!=null&&t.d!=null)u.j1(a,t)
for(s=t.y.a,s=new J.aw(s,s.length,[H.q(s,0)]);s.w();)s.d.aV(a)
a.e2()
a.dx.cq()},
aF:function(a){var u=this.z
if(u!=null)u.E(a)},
a_:function(){return this.aF(null)},
dZ:function(a){H.f(a,"$iB")
this.e=null
this.aF(a)},
iP:function(){return this.dZ(null)},
dX:function(a){this.aF(H.f(a,"$iB"))},
iO:function(){return this.dX(null)},
dV:function(a){this.aF(H.f(a,"$iB"))},
iL:function(){return this.dV(null)},
iK:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ik",[E.an],"$ak")
for(u=b.length,t=this.gdU(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bT()
o.saj(null)
o.saO(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a_()},
iN:function(a,b){var u,t
H.m(b,"$ik",[E.an],"$ak")
for(u=b.gT(b),t=this.gdU();u.w();)u.gK(u).gA().N(0,t)
this.a_()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seG:function(a,b){this.y=H.m(b,"$ia4",[E.an],"$aa4")},
$icG:1}
E.i4.prototype={
eB:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ax(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cD()
t=[V.ao]
u.sbI(H.d([],t))
u.b=null
u.gA().h(0,new E.i5(s))
s.cy=u
u=new O.cD()
u.sbI(H.d([],t))
u.b=null
u.gA().h(0,new E.i6(s))
s.db=u
u=new O.cD()
u.sbI(H.d([],t))
u.b=null
u.gA().h(0,new E.i7(s))
s.dx=u
s.shK(H.d([],[O.c2]))
u=s.dy;(u&&C.a).h(u,null)
s.shF(new H.a2([P.h,A.cP]))},
giY:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga1(s)
u=t.db
u=t.z=s.q(0,u.ga1(u))
s=u}return s},
e4:function(a){var u=this.dy,t=a==null?(u&&C.a).gas(u):a;(u&&C.a).h(u,t)},
e2:function(){var u=this.dy
if(u.length>1)u.pop()},
shK:function(a){this.dy=H.m(a,"$ib",[O.c2],"$ab")},
shF:function(a){this.fr=H.m(a,"$iy",[P.h,A.cP],"$ay")}}
E.i5.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.ch=u.z=null},
$S:10}
E.i6.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:10}
E.i7.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.cx=u.ch=null},
$S:10}
E.e7.prototype={
cL:function(a){H.f(a,"$iB")
this.e7()},
cK:function(){return this.cL(null)},
giy:function(){var u,t=this,s=Date.now(),r=C.d.a8(P.lP(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ax(s,!1)
return u/r},
dd:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.q()
if(typeof r!=="number")return H.D(r)
u=C.e.dJ(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.q()
t=C.e.dJ(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.me(C.o,s.gj3())}},
e7:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.o(new E.iD(this),{func:1,ret:-1,args:[P.a9]})
C.E.f8(u)
C.E.hu(u,W.mI(t,P.a9))}},
j0:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dd()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ax(r,!1)
s.y=P.lP(r-s.r.a).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aK()
r=s.db
C.a.sn(r.a,0)
r.aK()
r=s.dx
C.a.sn(r.a,0)
r.aK()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aV(p.e)}s=p.z
if(s!=null)s.E(null)}catch(q){u=H.aj(q)
t=H.ck(q)
P.lz("Error: "+H.i(u))
P.lz("Stack: "+H.i(t))
throw H.e(u)}}}
E.iD.prototype={
$1:function(a){var u
H.mW(a)
u=this.a
if(u.ch){u.ch=!1
u.j0()}},
$S:57}
Z.ej.prototype={$ipM:1}
Z.dr.prototype={
bk:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aj(s)
t=P.C('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.e(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.jn.prototype={$ipN:1}
Z.ds.prototype={
aU:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bk:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bk(a)},
eg:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aV:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.ar(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sff:function(a){this.b=H.m(a,"$ib",[Z.bA],"$ab")},
$ipW:1}
Z.bA.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.i(H.cN(this.c))+"'")+"]"}}
Z.bJ.prototype={
gcF:function(a){var u=this.a,t=(u&$.bq().a)!==0?3:0
if((u&$.bp().a)!==0)t+=3
if((u&$.bo().a)!==0)t+=3
if((u&$.bN().a)!==0)t+=2
if((u&$.bO().a)!==0)t+=3
if((u&$.dj().a)!==0)t+=3
if((u&$.dk().a)!==0)t+=4
if((u&$.cn().a)!==0)++t
return(u&$.bn().a)!==0?t+4:t},
i1:function(a){var u,t=$.bq(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bo()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bN()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bO()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bn()
if((s&t.a)!==0)if(u===a)return t
return $.nh()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bJ))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.h]),t=this.a
if((t&$.bq().a)!==0)C.a.h(u,"Pos")
if((t&$.bp().a)!==0)C.a.h(u,"Norm")
if((t&$.bo().a)!==0)C.a.h(u,"Binm")
if((t&$.bN().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bO().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dj().a)!==0)C.a.h(u,"Clr3")
if((t&$.dk().a)!==0)C.a.h(u,"Clr4")
if((t&$.cn().a)!==0)C.a.h(u,"Weight")
if((t&$.bn().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fx.prototype={}
D.bT.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.B]}
H.o(b,u)
if(this.a==null)this.saj(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
N:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[D.B]})
u=s.a
u=u==null?null:C.a.W(u,b)
if(u===!0){u=s.a
t=(u&&C.a).N(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.W(u,b)
if(u===!0){u=s.b
t=(u&&C.a).N(u,b)||t}return t},
E:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.B()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.H(P.lW(u,!0,{func:1,ret:-1,args:[D.B]}),new D.fS(q))
u=r.b
if(u!=null){r.saO(H.d([],[{func:1,ret:-1,args:[D.B]}]))
C.a.H(u,new D.fT(q))}return!0},
af:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}},
saj:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")},
saO:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")}}
D.fS.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.fT.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.B.prototype={}
D.bW.prototype={}
D.bX.prototype={}
D.M.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.dt.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dt))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.dF.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dF))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.hc.prototype={
iU:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
iQ:function(a){this.c=a.b
this.d.N(0,a.a)
return!1},
shn:function(a){this.d=H.m(a,"$ima",[P.l],"$ama")}}
X.dJ.prototype={}
X.hk.prototype={
aZ:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.q()
u=b.b
t=q.ch
if(typeof u!=="number")return u.q()
s=new V.ab(o.a+n*m,o.b+u*t)
t=q.a.gaS()
r=new X.bl(a,V.bF(),q.x,t,s)
r.b=!0
q.z=new P.ax(p,!1)
q.x=s
return r},
cp:function(a,b){this.r=a.a
return!1},
bb:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.ep()
if(typeof u!=="number")return u.ah()
this.r=(u&~t)>>>0
return!1},
ba:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.aZ(a,b))
return!0},
iV:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaS()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.q()
q=a.b
p=o.cy
if(typeof q!=="number")return q.q()
t=new X.cF(new V.X(s*r,q*p),u,t)
t.b=!0
n.E(t)
return!0},
fX:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dJ(c,r.a.gaS(),b)
s.b=!0
t.E(s)
r.y=new P.ax(u,!1)
r.x=V.bF()}}
X.az.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.az))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.F(this.b)?"Alt+":""
return u+(H.F(this.c)?"Shift+":"")}}
X.bl.prototype={}
X.hK.prototype={
bF:function(a,b,c){var u=this,t=new P.ax(Date.now(),!1),s=u.a.gaS(),r=new X.bl(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cp:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.bF(a,b,!0))
return!0},
bb:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.ep()
if(typeof t!=="number")return t.ah()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.bF(a,b,!0))
return!0},
ba:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.bF(a,b,!1))
return!0},
iW:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaS()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.q()
r=a.b
q=p.ch
if(typeof r!=="number")return r.q()
u=new X.cF(new V.X(t*s,r*q),u,b)
u.b=!0
o.E(u)
return!0},
gdw:function(){var u=this.b
return u==null?this.b=D.Y():u},
gcA:function(){var u=this.c
return u==null?this.c=D.Y():u},
gdS:function(){var u=this.d
return u==null?this.d=D.Y():u}}
X.cF.prototype={}
X.i_.prototype={}
X.e9.prototype={}
X.iH.prototype={
aZ:function(a,b){var u,t,s,r,q=this
H.m(a,"$ib",[V.ab],"$ab")
u=new P.ax(Date.now(),!1)
t=a.length>0?a[0]:V.bF()
s=q.a.gaS()
r=new X.e9(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
iT:function(a){var u
H.m(a,"$ib",[V.ab],"$ab")
u=this.b
if(u==null)return!1
u.E(this.aZ(a,!0))
return!0},
iR:function(a){var u
H.m(a,"$ib",[V.ab],"$ab")
u=this.c
if(u==null)return!1
u.E(this.aZ(a,!0))
return!0},
iS:function(a){var u
H.m(a,"$ib",[V.ab],"$ab")
u=this.d
if(u==null)return!1
u.E(this.aZ(a,!1))
return!0}}
X.ee.prototype={
gaS:function(){var u=this.a,t=C.n.gdv(u).c
t.toString
u=C.n.gdv(u).d
u.toString
return V.m8(0,0,t,u)},
cY:function(a){var u=a.keyCode,t=H.F(a.ctrlKey)||H.F(a.metaKey)
return new X.dF(u,new X.az(t,a.altKey,a.shiftKey))},
aP:function(a){var u=this.b,t=H.F(a.ctrlKey)||H.F(a.metaKey)
u.c=new X.az(t,a.altKey,a.shiftKey)},
bY:function(a){var u=this.b,t=H.F(a.ctrlKey)||H.F(a.metaKey)
u.c=new X.az(t,a.altKey,a.shiftKey)},
az:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.L()
u=t.top
if(typeof r!=="number")return r.L()
return new V.ab(s-q,r-u)},
b_:function(a){return new V.X(a.movementX,a.movementY)},
bT:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.ab])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=C.e.ak(r.pageX)
C.e.ak(r.pageY)
p=o.left
C.e.ak(r.pageX)
C.a.h(n,new V.ab(q-p,C.e.ak(r.pageY)-o.top))}return n},
ax:function(a){var u=a.buttons,t=H.F(a.ctrlKey)||H.F(a.metaKey)
return new X.dt(u,new X.az(t,a.altKey,a.shiftKey))},
bJ:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.L()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.L()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fR:function(a){this.f=!0},
fD:function(a){this.f=!1},
fL:function(a){H.f(a,"$iag")
if(H.F(this.f)&&this.bJ(a))a.preventDefault()},
fV:function(a){var u
H.f(a,"$ib4")
if(!H.F(this.f))return
u=this.cY(a)
this.b.iU(u)},
fT:function(a){var u
H.f(a,"$ib4")
if(!H.F(this.f))return
u=this.cY(a)
this.b.iQ(u)},
fZ:function(a){var u,t,s,r,q=this
H.f(a,"$iag")
u=q.a
u.focus()
q.f=!0
q.aP(a)
if(H.F(q.x)){t=q.ax(a)
s=q.b_(a)
if(q.d.cp(t,s))a.preventDefault()
return}if(H.F(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ax(a)
r=q.az(a)
if(q.c.cp(t,r))a.preventDefault()},
h2:function(a){var u,t,s,r=this
H.f(a,"$iag")
r.aP(a)
u=r.ax(a)
if(H.F(r.x)){t=r.b_(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.az(a)
if(r.c.bb(u,s))a.preventDefault()},
fP:function(a){var u,t,s,r=this
H.f(a,"$iag")
if(!r.bJ(a)){r.aP(a)
u=r.ax(a)
if(H.F(r.x)){t=r.b_(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.az(a)
if(r.c.bb(u,s))a.preventDefault()}},
h0:function(a){var u,t,s,r=this
H.f(a,"$iag")
r.aP(a)
u=r.ax(a)
if(H.F(r.x)){t=r.b_(a)
if(r.d.ba(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.az(a)
if(r.c.ba(u,s))a.preventDefault()},
fN:function(a){var u,t,s,r=this
H.f(a,"$iag")
if(!r.bJ(a)){r.aP(a)
u=r.ax(a)
if(H.F(r.x)){t=r.b_(a)
if(r.d.ba(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.az(a)
if(r.c.ba(u,s))a.preventDefault()}},
h4:function(a){var u,t,s=this
H.f(a,"$ibd")
s.aP(a)
u=new V.X((a&&C.D).gii(a),C.D.gij(a)).u(0,180)
if(H.F(s.x)){if(s.d.iV(u))a.preventDefault()
return}if(H.F(s.r))return
t=s.az(a)
if(s.c.iW(u,t))a.preventDefault()},
h6:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ax(s.y)
t=s.az(s.y)
s.d.fX(u,t,r)}},
hj:function(a){var u,t=this
H.f(a,"$iaX")
t.a.focus()
t.f=!0
t.bY(a)
u=t.bT(a)
if(t.e.iT(u))a.preventDefault()},
hf:function(a){var u
H.f(a,"$iaX")
this.bY(a)
u=this.bT(a)
if(this.e.iR(u))a.preventDefault()},
hh:function(a){var u
H.f(a,"$iaX")
this.bY(a)
u=this.bT(a)
if(this.e.iS(u))a.preventDefault()},
sf9:function(a){this.z=H.m(a,"$ib",[[P.cS,P.U]],"$ab")}}
D.bw.prototype={
av:function(a){var u
H.f(a,"$iB")
u=this.r
if(u!=null)u.E(a)},
eJ:function(){return this.av(null)},
$iae:1,
$icG:1}
D.ae.prototype={$icG:1}
D.dG.prototype={
av:function(a){var u=this.x
if(u!=null)u.E(a)},
d7:function(a){var u
H.f(a,"$iB")
u=this.y
if(u!=null)u.E(a)},
fW:function(){return this.d7(null)},
h9:function(a){var u,t,s
H.m(a,"$ik",[D.ae],"$ak")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(s==null||this.f1(s))return!1}return!0},
fv:function(a,b){var u,t,s,r,q,p,o,n=D.ae
H.m(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gd6(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=H.f(b[q],"$iae")
if(p instanceof D.bw)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.bT()
o.saj(null)
o.saO(null)
o.c=null
o.d=0
p.r=o}H.o(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bW([n])
n.b=!0
this.av(n)},
hd:function(a,b){var u,t,s,r=D.ae
H.m(b,"$ik",[r],"$ak")
for(u=b.gT(b),t=this.gd6();u.w();){s=u.gK(u)
C.a.N(this.e,s)
s.gA().N(0,t)}r=new D.bX([r])
r.b=!0
this.av(r)},
f1:function(a){var u=C.a.W(this.e,a)
return u},
sf7:function(a){this.e=H.m(a,"$ib",[D.bw],"$ab")},
shk:function(a){this.f=H.m(a,"$ib",[D.dV],"$ab")},
shI:function(a){this.r=H.m(a,"$ib",[D.e2],"$ab")},
$ak:function(){return[D.ae]},
$aa4:function(){return[D.ae]}}
D.dV.prototype={$iae:1,$icG:1}
D.e2.prototype={$iae:1,$icG:1}
V.a3.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
V.b_.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b_))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+", "+V.P(u.d,3,0)+"]"}}
V.fR.prototype={}
V.dN.prototype={
ag:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.t])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dN))return!1
u=b.a
t=$.K().a
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
i:function(a){var u,t,s,r,q=this,p=[P.t],o=V.ch(H.d([q.a,q.d,q.r],p),3,0),n=V.ch(H.d([q.b,q.e,q.x],p),3,0),m=V.ch(H.d([q.c,q.f,q.y],p),3,0)
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
V.ao.prototype={
ag:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.t])
return t},
dQ:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.K().a)return V.dO()
u=1/b1
t=-n
s=-a0
return V.b7((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
q:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.b7(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bt:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.J(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cz:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a6(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ao))return!1
u=b.a
t=$.K().a
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
i:function(a){return this.O()},
F:function(a){var u,t,s,r,q,p=this,o=[P.t],n=V.ch(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.ch(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.ch(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.ch(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
O:function(){return this.F("")}}
V.ab.prototype={
L:function(a,b){return new V.ab(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}}
V.a6.prototype={
B:function(a,b){return new V.a6(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a,b){return new V.a6(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){return new V.a6(this.a*b,this.b*b,this.c*b)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
V.bG.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bG))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+", "+V.P(u.d,3,0)+"]"}}
V.dY.prototype={
gaa:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dY))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+", "+V.P(u.d,3,0)+"]"}}
V.X.prototype={
ck:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.D(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.D(t)
return s*r+u*t},
q:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.q()
u=this.b
if(typeof u!=="number")return u.q()
return new V.X(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.K().a){u=$.ml
return u==null?$.ml=new V.X(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.X(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=this.a
s=$.K()
s.toString
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.D(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.D(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}}
V.J.prototype={
ck:function(a){return Math.sqrt(this.C(this))},
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cl:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.J(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aA:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.J(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.J(this.a+b.a,this.b+b.b,this.c+b.c)},
S:function(a){return new V.J(-this.a,-this.b,-this.c)},
q:function(a,b){return new V.J(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if(Math.abs(b-0)<$.K().a)return V.d_()
return new V.J(this.a/b,this.b/b,this.c/b)},
dR:function(){var u=$.K().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.J))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
U.fy.prototype={
bA:function(a){var u=V.kV(a,this.c,this.b)
return u},
gA:function(){var u=this.y
return u==null?this.y=D.Y():u},
G:function(a){var u=this.y
if(u!=null)u.E(a)},
scC:function(a,b){},
scm:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.K().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bA(u)}s=new D.M("maximumLocation",s,t.b,[P.t])
s.b=!0
t.G(s)}},
sco:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.K().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bA(u)}s=new D.M("minimumLocation",s,t.c,[P.t])
s.b=!0
t.G(s)}},
sZ:function(a,b){var u,t=this
b=t.bA(b)
u=t.d
if(!(Math.abs(u-b)<$.K().a)){t.d=b
u=new D.M("location",u,b,[P.t])
u.b=!0
t.G(u)}},
scn:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.K().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.M("maximumVelocity",r,a,[P.t])
r.b=!0
s.G(r)}},
sU:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.K().a)){u.f=a
t=new D.M("velocity",t,a,[P.t])
t.b=!0
u.G(t)}},
sc8:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.K().a)){this.x=a
u=new D.M("dampening",u,a,[P.t])
u.b=!0
this.G(u)}},
at:function(a,b){var u,t,s,r=this,q=r.f,p=$.K().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sZ(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.K().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sU(u)}}}
U.dv.prototype={
gA:function(){var u=this.b
return u==null?this.b=D.Y():u},
au:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dv))return!1
return J.Q(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")}}
U.cy.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.Y():u},
G:function(a){var u
H.f(a,"$iB")
u=this.e
if(u!=null)u.E(a)},
a6:function(){return this.G(null)},
ft:function(a,b){var u,t,s,r,q,p,o,n=U.aa
H.m(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gaL(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gA()
o.toString
H.o(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bW([n])
n.b=!0
this.G(n)},
hb:function(a,b){var u,t,s=U.aa
H.m(b,"$ik",[s],"$ak")
for(u=b.gT(b),t=this.gaL();u.w();)u.gK(u).gA().N(0,t)
s=new D.bX([s])
s.b=!0
this.G(s)},
au:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.R()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.aw(r,r.length,[H.q(r,0)]),u=null;r.w();){q=r.d
if(q!=null){t=q.au(0,b,c)
if(t!=null)u=u==null?t:t.q(0,u)}}s.f=u==null?V.dO():u
r=s.e
if(r!=null)r.af(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cy))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.Q(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ak:function(){return[U.aa]},
$aa4:function(){return[U.aa]},
$iaa:1}
U.aa.prototype={}
U.dZ.prototype={
gA:function(){var u=this.y
return u==null?this.y=D.Y():u},
G:function(a){var u=this.y
if(u!=null)u.E(a)},
sem:function(a){var u
a=V.kV(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.K().a)){this.a=a
u=new D.M("yaw",u,a,[P.t])
u.b=!0
this.G(u)}},
se1:function(a,b){var u
b=V.kV(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.K().a)){this.b=b
u=new D.M("pitch",u,b,[P.t])
u.b=!0
this.G(u)}},
se8:function(a){var u
a=V.kV(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.K().a)){this.c=a
u=new D.M("roll",u,a,[P.t])
u.b=!0
this.G(u)}},
au:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.sem(u.a+u.d*b.y)
u.se1(0,u.b+u.e*b.y)
u.se8(u.c+u.f*b.y)
u.x=V.lZ(u.c).q(0,V.lY(u.b)).q(0,V.lX(u.a))
t=u.y
if(t!=null)t.af(0)}return u.x},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dZ))return!1
u=r.a
t=b.a
s=$.K().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+"], ["+V.P(u.d,3,0)+", "+V.P(u.e,3,0)+", "+V.P(u.f,3,0)+"]"}}
U.ef.prototype={
gA:function(){var u=this.cy
return u==null?this.cy=D.Y():u},
G:function(a){var u
H.f(a,"$iB")
u=this.cy
if(u!=null)u.E(a)},
a6:function(){return this.G(null)},
b2:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdw().h(0,u.gbK())
u.a.c.gdS().h(0,u.gbM())
u.a.c.gcA().h(0,u.gbO())
return!0},
bL:function(a){var u=this
H.f(a,"$iB")
if(!J.Q(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bN:function(a){var u,t,s,r,q,p,o,n=this
a=H.z(H.f(a,"$iB"),"$ibl")
if(!H.F(n.y))return
if(H.F(n.x)){u=a.d.L(0,a.y)
u=new V.X(u.a,u.b)
u=u.C(u)
t=n.r
if(typeof t!=="number")return H.D(t)
if(u<t)return
n.x=!1}if(H.F(n.d)){u=a.c
t=a.d.L(0,a.y)
u=new V.X(t.a,t.b).q(0,2).u(0,u.gaa())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.q()
s=n.e
if(typeof s!=="number")return H.D(s)
t.sU(u*10*s)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=new V.X(s.a,s.b).q(0,2).u(0,u.gaa())
s=n.b
q=r.a
if(typeof q!=="number")return q.S()
p=n.e
if(typeof p!=="number")return H.D(p)
o=n.z
if(typeof o!=="number")return H.D(o)
s.sZ(0,-q*p+o)
n.b.sU(0)
t=t.L(0,a.z)
n.Q=new V.X(t.a,t.b).q(0,2).u(0,u.gaa())}n.a6()},
bP:function(a){var u,t,s,r=this
H.f(a,"$iB")
if(!H.F(r.y))return
r.y=!1
if(H.F(r.x))return
u=r.Q
if(u.C(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.q()
s=r.e
if(typeof s!=="number")return H.D(s)
u.sU(t*10*s)
r.a6()}},
au:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.R()
if(s<r){t.ch=r
u=b.y
t.b.at(0,u)
t.cx=V.lZ(t.b.d)}return t.cx},
$iaa:1}
U.eg.prototype={
gA:function(){var u=this.fx
return u==null?this.fx=D.Y():u},
G:function(a){var u
H.f(a,"$iB")
u=this.fx
if(u!=null)u.E(a)},
a6:function(){return this.G(null)},
b2:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdw().h(0,s.gbK())
s.a.c.gdS().h(0,s.gbM())
s.a.c.gcA().h(0,s.gbO())
u=s.a.d
t=u.f
u=t==null?u.f=D.Y():t
u.h(0,s.gfk())
u=s.a.d
t=u.d
u=t==null?u.d=D.Y():t
u.h(0,s.gfm())
u=s.a.e
t=u.b
u=t==null?u.b=D.Y():t
u.h(0,s.ghQ())
u=s.a.e
t=u.d
u=t==null?u.d=D.Y():t
u.h(0,s.ghO())
u=s.a.e
t=u.c
u=t==null?u.c=D.Y():t
u.h(0,s.ghM())
return!0},
ao:function(a){var u=a.a,t=a.b
if(H.F(this.f)){if(typeof u!=="number")return u.S()
u=-u}if(H.F(this.r)){if(typeof t!=="number")return t.S()
t=-t}return new V.X(u,t)},
bL:function(a){var u=this
a=H.z(H.f(a,"$iB"),"$ibl")
if(!J.Q(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bN:function(a){var u,t,s,r,q,p,o,n=this
a=H.z(H.f(a,"$iB"),"$ibl")
if(!H.F(n.cx))return
if(H.F(n.ch)){u=a.d.L(0,a.y)
u=new V.X(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.D(t)
if(u<t)return
n.ch=!1}if(H.F(n.e)){u=a.c
t=a.d.L(0,a.y)
u=n.ao(new V.X(t.a,t.b).q(0,2).u(0,u.gaa()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.D(s)
t.sU(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.D(t)
s.sU(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.ao(new V.X(s.a,s.b).q(0,2).u(0,u.gaa()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.D(p)
o=n.cy
if(typeof o!=="number")return H.D(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.D(q)
s=n.db
if(typeof s!=="number")return H.D(s)
o.sZ(0,-p*q+s)
n.b.sU(0)
n.c.sU(0)
t=t.L(0,a.z)
n.dx=n.ao(new V.X(t.a,t.b).q(0,2).u(0,u.gaa()))}n.a6()},
bP:function(a){var u,t,s,r=this
H.f(a,"$iB")
if(!H.F(r.cx))return
r.cx=!1
if(H.F(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.D(s)
u.sU(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.D(u)
s.sU(-t*10*u)
r.a6()}},
fl:function(a){var u=this
if(H.z(H.f(a,"$iB"),"$idJ").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fn:function(a){var u,t,s,r,q,p,o,n=this
a=H.z(H.f(a,"$iB"),"$ibl")
if(!J.Q(n.d,a.x.b))return
u=a.c
t=a.d
s=t.L(0,a.y)
r=n.ao(new V.X(s.a,s.b).q(0,2).u(0,u.gaa()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.D(p)
o=n.cy
if(typeof o!=="number")return H.D(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.D(q)
s=n.db
if(typeof s!=="number")return H.D(s)
o.sZ(0,-p*q+s)
n.b.sU(0)
n.c.sU(0)
t=t.L(0,a.z)
n.dx=n.ao(new V.X(t.a,t.b).q(0,2).u(0,u.gaa()))
n.a6()},
hR:function(a){var u=this
H.f(a,"$iB")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hP:function(a){var u,t,s,r,q,p,o,n=this
a=H.z(H.f(a,"$iB"),"$ie9")
if(!H.F(n.cx))return
if(H.F(n.ch)){u=a.d.L(0,a.y)
u=new V.X(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.D(t)
if(u<t)return
n.ch=!1}if(H.F(n.e)){u=a.c
t=a.d.L(0,a.y)
u=n.ao(new V.X(t.a,t.b).q(0,2).u(0,u.gaa()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.D(s)
t.sU(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.D(t)
s.sU(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.ao(new V.X(s.a,s.b).q(0,2).u(0,u.gaa()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.D(p)
o=n.cy
if(typeof o!=="number")return H.D(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.D(q)
s=n.db
if(typeof s!=="number")return H.D(s)
o.sZ(0,-p*q+s)
n.b.sU(0)
n.c.sU(0)
t=t.L(0,a.z)
n.dx=n.ao(new V.X(t.a,t.b).q(0,2).u(0,u.gaa()))}n.a6()},
hN:function(a){var u,t,s,r=this
H.f(a,"$iB")
if(!H.F(r.cx))return
r.cx=!1
if(H.F(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.D(s)
u.sU(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.D(u)
s.sU(-t*10*u)
r.a6()}},
au:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.R()
if(s<r){t.dy=r
u=b.y
t.c.at(0,u)
t.b.at(0,u)
t.fr=V.lX(t.b.d).q(0,V.lY(t.c.d))}return t.fr},
$iaa:1}
U.eh.prototype={
gA:function(){var u=this.r
return u==null?this.r=D.Y():u},
G:function(a){var u=this.r
if(u!=null)u.E(a)},
b2:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.Y():t
t=r.gfp()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.Y():s).h(0,t)
return!0},
fq:function(a){var u,t,s,r,q=this
H.f(a,"$iB")
if(!J.Q(q.b,q.a.b.c))return
H.z(a,"$icF")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.q()
r=u+t*s
if(u!==r){q.d=r
u=new D.M("zoom",u,r,[P.t])
u.b=!0
q.G(u)}},
au:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.m_(u,u,u,1)}return t.f},
$iaa:1}
M.dz.prototype={
aw:function(a){var u
H.f(a,"$iB")
u=this.y
if(u!=null)u.E(a)},
eK:function(){return this.aw(null)},
fH:function(a,b){var u,t,s,r,q,p,o,n=E.an
H.m(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gan(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bT()
o.saj(null)
o.saO(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bW([n])
n.b=!0
this.aw(n)},
fJ:function(a,b){var u,t,s=E.an
H.m(b,"$ik",[s],"$ak")
for(u=b.gT(b),t=this.gan();u.w();)u.gK(u).gA().N(0,t)
s=new D.bX([s])
s.b=!0
this.aw(s)},
seb:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gA().N(0,t.gan())
u=t.d
t.d=a
if(a!=null)a.gA().h(0,t.gan())
s=new D.M("technique",u,t.d,[O.c2])
s.b=!0
t.aw(s)}},
gA:function(){var u=this.y
return u==null?this.y=D.Y():u},
aV:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.e4(a1.d)
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
if(typeof s!=="number")return H.D(s)
o=C.e.ak(p*s)
p=q.b
if(typeof r!=="number")return H.D(r)
n=C.e.ak(p*r)
p=C.e.ak(q.c*s)
a2.c=p
q=C.e.ak(q.d*r)
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
i=V.b7(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.e3(i)
t=$.m3
if(t==null){t=V.nV()
q=V.mp()
p=$.mm
if(p==null)p=$.mm=new V.J(0,0,-1)
h=p.u(0,Math.sqrt(p.C(p)))
q=q.aA(h)
g=q.u(0,Math.sqrt(q.C(q)))
f=h.aA(g)
e=new V.J(t.a,t.b,t.c)
d=g.S(0).C(e)
c=f.S(0).C(e)
b=h.S(0).C(e)
t=V.b7(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.m3=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.au(0,a2,u)
if(a0!=null)a=a0.q(0,a)}a2.db.e3(a)
u=a1.d
if(u!=null)u.at(0,a2)
for(u=a1.e.a,u=new J.aw(u,u.length,[H.q(u,0)]);u.w();)u.d.at(0,a2)
for(u=a1.e.a,u=new J.aw(u,u.length,[H.q(u,0)]);u.w();)u.d.aV(a2)
a1.b.toString
a2.cy.cq()
a2.db.cq()
a1.c.toString
a2.e2()},
sf_:function(a,b){this.e=H.m(b,"$ia4",[E.an],"$aa4")},
$ipT:1}
A.dp.prototype={}
A.fn.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iq:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
ik:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.am.prototype={
gal:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
p:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.am))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.hr.prototype={
eA:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.a7("")
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
A.p4(c3,u)
A.p6(c3,u)
A.p5(c3,u)
A.p8(c3,u)
A.p9(c3,u)
A.p7(c3,u)
A.pa(c3,u)
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
m=A.p3(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cZ(n,35633)
b8.f=b8.cZ(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.F(H.lr(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.A(P.C("Failed to link shader: "+H.i(l)))}b8.hC()
b8.hE()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.z(b8.y.X(0,"invViewMat"),"$iaB")
if(t)b8.dy=H.z(b8.y.X(0,"objMat"),"$iaB")
if(r)b8.fr=H.z(b8.y.X(0,"viewObjMat"),"$iaB")
b8.fy=H.z(b8.y.X(0,"projViewObjMat"),"$iaB")
if(c3.ry)b8.k1=H.z(b8.y.X(0,"txt2DMat"),"$icY")
if(c3.x1)b8.k2=H.z(b8.y.X(0,"txtCubeMat"),"$iaB")
if(c3.x2)b8.k3=H.z(b8.y.X(0,"colorMat"),"$iaB")
b8.seW(H.d([],[A.aB]))
t=c3.y2
if(t>0){b8.k4=H.f(b8.y.X(0,"bendMatCount"),"$iaH")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.A(P.C(c0+q+c1));(s&&C.a).h(s,H.z(j,"$iaB"))}}if(c3.a.a)b8.r2=H.z(b8.y.X(0,"emissionClr"),"$ia0")
if(c3.b.a)b8.x1=H.z(b8.y.X(0,"ambientClr"),"$ia0")
if(c3.c.a)b8.y2=H.z(b8.y.X(0,"diffuseClr"),"$ia0")
if(c3.d.a)b8.dA=H.z(b8.y.X(0,"invDiffuseClr"),"$ia0")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.dC=H.z(b8.y.X(0,"shininess"),"$iai")
if(t)b8.dB=H.z(b8.y.X(0,"specularClr"),"$ia0")}if(c3.cy){b8.dD=H.z(b8.y.X(0,"envSampler"),"$ic6")
if(c3.r.a)b8.dE=H.z(b8.y.X(0,"reflectClr"),"$ia0")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.dF=H.z(b8.y.X(0,"refraction"),"$iai")
if(t)b8.dG=H.z(b8.y.X(0,"refractClr"),"$ia0")}}if(c3.y.a)b8.dH=H.z(b8.y.X(0,"alpha"),"$iai")
t=P.l
s=[t,A.aH]
b8.sf6(new H.a2(s))
b8.seL(new H.a2([t,[P.b,A.c3]]))
b8.shl(new H.a2(s))
b8.shm(new H.a2([t,[P.b,A.c4]]))
b8.shH(new H.a2(s))
b8.seM(new H.a2([t,[P.b,A.c7]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.c3],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ah()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.j(0,d)
if(j==null)H.A(P.C(c0+d+c1))
H.z(j,"$ia0")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.j(0,d)
if(c==null)H.A(P.C(c0+d+c1))
H.z(c,"$ia0")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.j(0,d)
if(b==null)H.A(P.C(c0+d+c1))
H.z(b,"$ia0")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.j(0,d)
if(j==null)H.A(P.C(c0+d+c1))
H.z(j,"$ia0")
o=b8.y
d=f+"s["+k+"].color"
c=o.j(0,d)
if(c==null)H.A(P.C(c0+d+c1))
H.z(c,"$ia0")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.j(0,o)
if(b==null)H.A(P.C(c0+o+c1))
H.z(b,"$ic5")
a2=b}else a2=b9
C.a.h(e,new A.c3(a1,a0,a,j,c,a2))}b8.ca.k(0,g,e)
q=b8.c9
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.A(P.C(c0+o+c1))
q.k(0,g,H.f(j,"$iaH"))}for(t=c3.Q,s=t.length,r=[A.c4],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.j(0,o)
if(j==null)H.A(P.C(c0+o+c1))
H.z(j,"$ia0")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.j(0,o)
if(c==null)H.A(P.C(c0+o+c1))
H.z(c,"$ia0")
p=b8.y
o=f+"s["+k+"].color"
b=p.j(0,o)
if(b==null)H.A(P.C(c0+o+c1))
H.z(b,"$ia0")
if(typeof g!=="number")return g.ah()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.A(P.C(c0+o+c1))
H.z(a3,"$icY")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.A(P.C(c0+o+c1))
H.z(a3,"$ic6")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.A(P.C(c0+o+c1))
H.z(a3,"$ic6")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.A(P.C(c0+o+c1))
H.z(a5,"$icX")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.j(0,o)
if(a3==null)H.A(P.C(c0+o+c1))
H.z(a3,"$iai")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.j(0,o)
if(a5==null)H.A(P.C(c0+o+c1))
H.z(a5,"$iai")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.j(0,o)
if(a8==null)H.A(P.C(c0+o+c1))
H.z(a8,"$iai")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}C.a.h(e,new A.c4(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.cc.k(0,g,e)
q=b8.cb
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.A(P.C(c0+o+c1))
q.k(0,g,H.f(j,"$iaH"))}for(t=c3.ch,s=t.length,r=[A.c7],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.j(0,o)
if(j==null)H.A(P.C(c0+o+c1))
H.z(j,"$ia0")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.j(0,o)
if(c==null)H.A(P.C(c0+o+c1))
H.z(c,"$ia0")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.j(0,o)
if(b==null)H.A(P.C(c0+o+c1))
H.z(b,"$ia0")
p=b8.y
o=f+"s["+k+"].color"
a3=p.j(0,o)
if(a3==null)H.A(P.C(c0+o+c1))
H.z(a3,"$ia0")
if(typeof g!=="number")return g.ah()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.j(0,o)
if(a5==null)H.A(P.C(c0+o+c1))
H.z(a5,"$ia0")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.j(0,o)
if(a8==null)H.A(P.C(c0+o+c1))
H.z(a8,"$ia0")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.j(0,o)
if(b2==null)H.A(P.C(c0+o+c1))
H.z(b2,"$iai")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.j(0,o)
if(b3==null)H.A(P.C(c0+o+c1))
H.z(b3,"$iai")
b4=b3
b5=b2
a0=a8
a1=a5}else{b4=b9
b5=b4
a0=b5
a1=a0}p=(g&2)!==0
if(p){o=b8.y
d=f+"s["+k+"].shadowAdj"
a5=o.j(0,d)
if(a5==null)H.A(P.C(c0+d+c1))
H.z(a5,"$icX")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.j(0,d)
if(a5==null)H.A(P.C(c0+d+c1))
H.z(a5,"$iai")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.j(0,d)
if(a8==null)H.A(P.C(c0+d+c1))
H.z(a8,"$iai")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.j(0,d)
if(a5==null)H.A(P.C(c0+d+c1))
H.z(a5,"$iai")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.j(0,d)
if(a8==null)H.A(P.C(c0+d+c1))
H.z(a8,"$iai")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.j(0,d)
if(b2==null)H.A(P.C(c0+d+c1))
H.z(b2,"$iai")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.j(0,d)
if(a5==null)H.A(P.C(c0+d+c1))
H.z(a5,"$ic5")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.A(P.C(c0+o+c1))
H.z(a5,"$ic5")
a6=a5}else a6=b9
C.a.h(e,new A.c7(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.ce.k(0,g,e)
q=b8.cd
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.A(P.C(c0+o+c1))
q.k(0,g,H.f(j,"$iaH"))}}},
hA:function(a,b){},
seW:function(a){this.r1=H.m(a,"$ib",[A.aB],"$ab")},
sf6:function(a){this.c9=H.m(a,"$iy",[P.l,A.aH],"$ay")},
seL:function(a){this.ca=H.m(a,"$iy",[P.l,[P.b,A.c3]],"$ay")},
shl:function(a){this.cb=H.m(a,"$iy",[P.l,A.aH],"$ay")},
shm:function(a){this.cc=H.m(a,"$iy",[P.l,[P.b,A.c4]],"$ay")},
shH:function(a){this.cd=H.m(a,"$iy",[P.l,A.aH],"$ay")},
seM:function(a){this.ce=H.m(a,"$iy",[P.l,[P.b,A.c7]],"$ay")}}
A.aM.prototype={
i:function(a){return"dirLight"+H.i(this.a)}}
A.aQ.prototype={
i:function(a){return"pointLight"+H.i(this.a)}}
A.aU.prototype={
i:function(a){return"spotLight"+H.i(this.a)}}
A.hu.prototype={
i:function(a){return this.b6}}
A.c3.prototype={}
A.c4.prototype={}
A.c7.prototype={}
A.cP.prototype={
eD:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cZ:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.F(H.lr(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.e(P.C("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
hC:function(){var u,t,s,r=this,q=H.d([],[A.dp]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.D(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dp(p,t.name,s))}r.x=new A.fn(q)},
hE:function(){var u,t,s,r=this,q=H.d([],[A.ea]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.D(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.ih(t.type,t.size,t.name,s))}r.y=new A.iU(q)},
aN:function(a,b,c){var u=this.a
if(a===1)return new A.aH(u,b,c)
else return A.ld(u,this.r,b,a,c)},
f3:function(a,b,c){var u=this.a
if(a===1)return new A.c5(u,b,c)
else return A.ld(u,this.r,b,a,c)},
f4:function(a,b,c){var u=this.a
if(a===1)return new A.c6(u,b,c)
else return A.ld(u,this.r,b,a,c)},
bj:function(a,b){return new P.es(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
ih:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aN(b,c,d)
case 5121:return u.aN(b,c,d)
case 5122:return u.aN(b,c,d)
case 5123:return u.aN(b,c,d)
case 5124:return u.aN(b,c,d)
case 5125:return u.aN(b,c,d)
case 5126:return new A.ai(u.a,c,d)
case 35664:return new A.iQ(u.a,c,d)
case 35665:return new A.a0(u.a,c,d)
case 35666:return new A.cX(u.a,c,d)
case 35667:return new A.iR(u.a,c,d)
case 35668:return new A.iS(u.a,c,d)
case 35669:return new A.iT(u.a,c,d)
case 35674:return new A.iV(u.a,c,d)
case 35675:return new A.cY(u.a,c,d)
case 35676:return new A.aB(u.a,c,d)
case 35678:return u.f3(b,c,d)
case 35680:return u.f4(b,c,d)
case 35670:throw H.e(u.bj("BOOL",c))
case 35671:throw H.e(u.bj("BOOL_VEC2",c))
case 35672:throw H.e(u.bj("BOOL_VEC3",c))
case 35673:throw H.e(u.bj("BOOL_VEC4",c))
default:throw H.e(P.C("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.ea.prototype={}
A.iU.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
X:function(a,b){var u=this.j(0,b)
if(u==null)throw H.e(P.C("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.O()},
O:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aH.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.iR.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.iS.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.iT.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.iP.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
shT:function(a){H.m(a,"$ib",[P.l],"$ab")}}
A.ai.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.iQ.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.a0.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.cX.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.iV.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.cY.prototype={
am:function(a){var u=new Float32Array(H.cc(H.m(a,"$ib",[P.t],"$ab")))
C.c.ei(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.aB.prototype={
am:function(a){var u=new Float32Array(H.cc(H.m(a,"$ib",[P.t],"$ab")))
C.c.ej(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.c5.prototype={
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.c6.prototype={
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.kh.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cl(s.b,b).cl(s.d.cl(s.c,b),c)
a.sZ(0,new V.a6(r.a,r.b,r.c))
a.sec(r.u(0,Math.sqrt(r.C(r))))
s=1-b
u=1-c
a.sds(new V.bG(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:7}
F.kt.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:20}
F.kv.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.D(p)
s=-s*p
u=r*p
a.sZ(0,new V.a6(s,u,q))
u=new V.J(s,u,q)
a.sec(u.u(0,Math.sqrt(u.C(u))))
a.sds(new V.bG(1-c,2+c,-1,-1))},
$S:7}
F.kw.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:19}
F.kx.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:19}
F.kQ.prototype={
$2:function(a,b){return 0},
$S:20}
F.kR.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.D(s)
u=a.f
t=new V.J(u.a,u.b,u.c)
s=t.u(0,Math.sqrt(t.C(t))).q(0,this.b+s)
a.sZ(0,new V.a6(s.a,s.b,s.c))},
$S:7}
F.kT.prototype={
$1:function(a){return new V.a6(Math.cos(a),Math.sin(a),0)},
$S:16}
F.kF.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.a6(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:16}
F.ku.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lE(n.$1(o),m)
m=J.lE(n.$1(o+3.141592653589793/p.c),m).L(0,l)
m=new V.J(m.a,m.b,m.c)
u=m.u(0,Math.sqrt(m.C(m)))
n=$.mn
if(n==null){n=new V.J(1,0,0)
$.mn=n
t=n}else t=n
n=u.aA(!J.Q(u,t)?V.mq():t)
s=n.u(0,Math.sqrt(n.C(n)))
n=s.aA(u)
t=n.u(0,Math.sqrt(n.C(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.q(0,n*m)
m=s.q(0,q*m)
a.sZ(0,l.B(0,new V.a6(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:7}
F.a8.prototype={
b4:function(){var u=this
if(!u.gb5()){C.a.N(u.a.a.d.b,u)
u.a.a.a_()}u.bV()
u.bW()
u.hr()},
bZ:function(a){this.a=a
C.a.h(a.d.b,this)},
c_:function(a){this.b=a
C.a.h(a.d.c,this)},
hB:function(a){this.c=a
C.a.h(a.d.d,this)},
bV:function(){var u=this.a
if(u!=null){C.a.N(u.d.b,this)
this.a=null}},
bW:function(){var u=this.b
if(u!=null){C.a.N(u.d.c,this)
this.b=null}},
hr:function(){var u=this.c
if(u!=null){C.a.N(u.d.d,this)
this.c=null}},
gb5:function(){return this.a==null||this.b==null||this.c==null},
eV:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d_()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dR())return
return s.u(0,Math.sqrt(s.C(s)))},
eZ:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.L(0,q)
r=new V.J(r.a,r.b,r.c)
s=r.u(0,Math.sqrt(r.C(r)))
r=t.L(0,q)
r=new V.J(r.a,r.b,r.c)
r=s.aA(r.u(0,Math.sqrt(r.C(r))))
return r.u(0,Math.sqrt(r.C(r)))},
c4:function(){var u,t=this
if(t.d!=null)return!0
u=t.eV()
if(u==null){u=t.eZ()
if(u==null)return!1}t.d=u
t.a.a.a_()
return!0},
eU:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d_()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dR())return
return s.u(0,Math.sqrt(s.C(s)))},
eY:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.K().a){l=d.L(0,g)
l=new V.J(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.S(0)}else{p=(l-u.b)/r
l=d.L(0,g).q(0,p).B(0,g).L(0,j)
l=new V.J(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.S(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.C(l)))
l=o.aA(q)
l=l.u(0,Math.sqrt(l.C(l))).aA(o)
q=l.u(0,Math.sqrt(l.C(l)))}return q},
c2:function(){var u,t=this
if(t.e!=null)return!0
u=t.eU()
if(u==null){u=t.eY()
if(u==null)return!1}t.e=u
t.a.a.a_()
return!0},
gi9:function(a){var u=this
if(J.Q(u.a,u.b))return!0
if(J.Q(u.b,u.c))return!0
if(J.Q(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
F:function(a){var u,t,s=this
if(s.gb5())return a+"disposed"
u=a+C.b.ae(J.ar(s.a.e),0)+", "+C.b.ae(J.ar(s.b.e),0)+", "+C.b.ae(J.ar(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
O:function(){return this.F("")}}
F.fU.prototype={}
F.il.prototype={
b7:function(a,b,c){var u,t=b.a
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
F.bk.prototype={
b4:function(){var u=this
if(!u.gb5()){C.a.N(u.a.a.c.b,u)
u.a.a.a_()}u.bV()
u.bW()},
bZ:function(a){this.a=a
C.a.h(a.c.b,this)},
c_:function(a){this.b=a
C.a.h(a.c.c,this)},
bV:function(){var u=this.a
if(u!=null){C.a.N(u.c.b,this)
this.a=null}},
bW:function(){var u=this.b
if(u!=null){C.a.N(u.c.c,this)
this.b=null}},
gb5:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
F:function(a){if(this.gb5())return a+"disposed"
return a+C.b.ae(J.ar(this.a.e),0)+", "+C.b.ae(J.ar(this.b.e),0)},
O:function(){return this.F("")}}
F.he.prototype={}
F.iO.prototype={
b7:function(a,b,c){var u,t=b.a
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
F.bE.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
F:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ae(J.ar(u.e),0)},
O:function(){return this.F("")}}
F.e0.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.Y():u},
b8:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.v()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){r=g[s]
h.a.h(0,r.ic())}h.a.v()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bE()
if(n.a==null)H.A(P.C("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.E(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.v()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.nM(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.v()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cv(l,k,i)}g=h.e
if(g!=null)g.af(0)},
ar:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ar()||!1
if(!t.a.ar())u=!1
s=t.e
if(s!=null)s.af(0)
return u},
iH:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.q(o,0)])
for(o=[F.au];u.length!==0;){t=C.a.giv(u)
C.a.e5(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.c(u,r)
q=u[r]
if(q!=null&&a.b7(0,t,q)){C.a.h(s,q)
C.a.e5(u,r)}}if(s.length>1)b.b8(s)}}p.a.v()
p.c.ct()
p.d.ct()
p.b.j_()
p.c.cu(new F.iO())
p.d.cu(new F.il())
o=p.e
if(o!=null)o.af(0)},
c0:function(){this.iH(new F.jg(),new F.hS())},
cf:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.cf()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.c(o,u)
t=o[u]
o=t.r
if(o!=null)t.sdT(new V.J(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.J(s,r,o).u(0,Math.sqrt(s*s+r*r+o*o))
if(!J.Q(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.E(null)}}}}o=p.e
if(o!=null)o.af(0)},
i7:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bq()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bp().a)!==0)++s
if((t&$.bo().a)!==0)++s
if((t&$.bN().a)!==0)++s
if((t&$.bO().a)!==0)++s
if((t&$.dj().a)!==0)++s
if((t&$.dk().a)!==0)++s
if((t&$.cn().a)!==0)++s
if((t&$.bn().a)!==0)++s
r=a3.gcF(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.t
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dr])
for(n=0,m=0;m<s;++m){l=a3.i1(m)
k=l.gcF(l)
C.a.k(o,m,new Z.dr(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.c(u,j)
i=u[j].iF(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cc(p)),35044)
u.bindBuffer(a0,null)
e=new Z.ds(new Z.ej(a0,f),o,a3)
e.sff(H.d([],[Z.bA]))
if(a.b.b.length!==0){t=P.l
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.v()
C.a.h(d,c.e)}b=Z.lg(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bA(0,d.length,b))}if(a.c.b.length!==0){t=P.l
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.v()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.v()
C.a.h(d,c.e)}b=Z.lg(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bA(1,d.length,b))}if(a.d.b.length!==0){t=P.l
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.v()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.v()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.c(c,m)
c=c[m].c
c.a.a.v()
C.a.h(d,c.e)}b=Z.lg(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bA(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.h])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.F(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.F(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.F(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.F(t))}return C.a.m(s,"\n")},
a_:function(){var u=this.e
if(u!=null)u.E(null)},
$ipU:1}
F.id.prototype={
hX:function(a){var u,t,s,r,q,p,o
H.m(a,"$ib",[F.au],"$ab")
u=H.d([],[F.a8])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.c(a,p)
p=a[p]
if(q>=o)return H.c(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.cv(s,p,o))}}return u},
hY:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.au],"$ab")
u=H.d([],[F.a8])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.c(c,r)
l=c[r];++r
if(r>=m)return H.c(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.c(c,j)
i=c[j]
if(s<0||s>=m)return H.c(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.cv(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cv(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cv(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cv(k,h,l))}o=!o}q=!q}return u},
gn:function(a){return this.b.length},
cu:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b7(0,p,n)){p.b4()
break}}}}},
ct:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=s.gi9(s)
if(t)s.b4()}},
ar:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].c4())s=!1
return s},
c3:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].c2())s=!1
return s},
cf:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.J(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.J(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.E(null)}},
i:function(a){return this.O()},
F:function(a){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(a))
return C.a.m(r,"\n")},
O:function(){return this.F("")},
sfa:function(a){this.b=H.m(a,"$ib",[F.a8],"$ab")}}
F.ie.prototype={
gn:function(a){return this.b.length},
cu:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b7(0,p,n)){p.b4()
break}}}}},
ct:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=J.Q(s.a,s.b)
if(t)s.b4()}},
i:function(a){return this.O()},
F:function(a){var u,t,s=H.d([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
C.a.h(s,t[u].F(a+(""+u+". ")))}return C.a.m(s,"\n")},
O:function(){return this.F("")},
sfg:function(a){this.b=H.m(a,"$ib",[F.bk],"$ab")}}
F.ig.prototype={
gn:function(a){return this.b.length},
j_:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.N(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.E(null)}s=t.a
if(s!=null){C.a.N(s.b.b,t)
t.a=null}}}},
i:function(a){return this.O()},
F:function(a){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(a))
return C.a.m(r,"\n")},
O:function(){return this.F("")},
sbS:function(a){this.b=H.m(a,"$ib",[F.bE],"$ab")}}
F.au.prototype={
c7:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.ei(u.cx,r,o,t,s,q,p,a,n)},
ic:function(){return this.c7(null)},
sZ:function(a,b){var u
if(!J.Q(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a_()}},
sdT:function(a){var u
a=a==null?null:a.u(0,Math.sqrt(a.C(a)))
if(!J.Q(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a_()}},
sec:function(a){var u
if(!J.Q(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a_()}},
sds:function(a){var u
if(!J.Q(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a_()}},
iF:function(a){var u,t,s=this
if(a.p(0,$.bq())){u=s.f
t=[P.t]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.bp())){u=s.r
t=[P.t]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.bo())){u=s.x
t=[P.t]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.bN())){u=s.y
t=[P.t]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.p(0,$.bO())){u=s.z
t=[P.t]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.dj())){u=s.Q
t=[P.t]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.dk())){u=s.Q
t=[P.t]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.cn()))return H.d([s.ch],[P.t])
else if(a.p(0,$.bn())){u=s.cx
t=[P.t]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.t])},
c4:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d_()
t.d.H(0,new F.jl(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.af(0)}return!0},
c2:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d_()
t.d.H(0,new F.jk(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.af(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
F:function(a){var u,t,s=this,r="-",q=H.d([],[P.h])
C.a.h(q,C.b.ae(J.ar(s.e),0))
u=s.f
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.r
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.x
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.y
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.z
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.Q
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
C.a.h(q,V.P(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
O:function(){return this.F("")}}
F.jl.prototype={
$1:function(a){var u,t
H.f(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:6}
F.jk.prototype={
$1:function(a){var u,t
H.f(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:6}
F.jb.prototype={
v:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.c(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.e(P.C("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a_()
return!0},
hZ:function(a,b,c,d,e,f){var u=F.ei(a,null,b,c,d,e,f,null,0)
this.h(0,u)
return u},
gn:function(a){return this.c.length},
ar:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].c4()
return!0},
c3:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].c2()
return!0},
i8:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.Q(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
i:function(a){return this.O()},
F:function(a){var u,t,s,r
this.v()
u=H.d([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].F(a))
return C.a.m(u,"\n")},
O:function(){return this.F("")},
shU:function(a){this.c=H.m(a,"$ib",[F.au],"$ab")}}
F.jc.prototype={
gn:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.c(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.c(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.c(t,b)
return t[b]},
H:function(a,b){var u=this
H.o(b,{func:1,ret:-1,args:[F.a8]})
C.a.H(u.b,b)
C.a.H(u.c,new F.jd(u,b))
C.a.H(u.d,new F.je(u,b))},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
return C.a.m(r,"\n")},
sfb:function(a){this.b=H.m(a,"$ib",[F.a8],"$ab")},
sfc:function(a){this.c=H.m(a,"$ib",[F.a8],"$ab")},
sfd:function(a){this.d=H.m(a,"$ib",[F.a8],"$ab")}}
F.jd.prototype={
$1:function(a){H.f(a,"$ia8")
if(!J.Q(a.a,this.a))this.b.$1(a)},
$S:6}
F.je.prototype={
$1:function(a){var u
H.f(a,"$ia8")
u=this.a
if(!J.Q(a.a,u)&&!J.Q(a.b,u))this.b.$1(a)},
$S:6}
F.jf.prototype={
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.c(t,u)
return t[u]}else{if(b<0)return H.c(t,b)
return t[b]}},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
return C.a.m(r,"\n")},
sfh:function(a){this.b=H.m(a,"$ib",[F.bk],"$ab")},
sfi:function(a){this.c=H.m(a,"$ib",[F.bk],"$ab")}}
F.jh.prototype={}
F.jg.prototype={
b7:function(a,b,c){return J.Q(b.f,c.f)}}
F.ji.prototype={}
F.hS.prototype={
b8:function(a){var u,t,s,r
H.m(a,"$ib",[F.au],"$ab")
u=V.d_()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.J(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.u(0,Math.sqrt(u.C(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.u)(a),++s)a[s].sdT(u)
return}}
F.jj.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
return C.a.m(r,"\n")},
sbS:function(a){this.b=H.m(a,"$ib",[F.bE],"$ab")}}
O.dL.prototype={
gA:function(){var u=this.fr
return u==null?this.fr=D.Y():u},
ab:function(a){var u
H.f(a,"$iB")
u=this.fr
if(u!=null)u.E(a)},
fF:function(){return this.ab(null)},
dc:function(a){H.f(a,"$iB")
this.a=null
this.ab(a)},
hw:function(){return this.dc(null)},
fz:function(a,b){var u=V.ao
H.m(b,"$ik",[u],"$ak")
u=new D.bW([u])
u.b=!0
this.ab(u)},
fB:function(a,b){var u=V.ao
H.m(b,"$ik",[u],"$ak")
u=new D.bX([u])
u.b=!0
this.ab(u)},
cW:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.l,h=new H.a2([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=h.j(0,0)
h.k(0,0,r==null?1:r)}q=H.d([],[A.aM])
h.H(0,new O.hy(j,q))
C.a.bx(q,new O.hz())
p=new H.a2([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){o=u[s]
r=o.gb3()
n=p.j(0,o.gb3())
p.k(0,r,n==null?1:n)}m=H.d([],[A.aQ])
p.H(0,new O.hA(j,m))
C.a.bx(m,new O.hB())
l=new H.a2([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.u)(i),++s){o=i[s]
t=o.gb3()
r=l.j(0,o.gb3())
l.k(0,t,r==null?1:r)}k=H.d([],[A.aU])
l.H(0,new O.hC(j,k))
C.a.bx(k,new O.hD())
i=C.d.a8(j.e.a.length+3,4)
j.dy.e
return A.nT(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
eT:function(a,b){H.m(a,"$ib",[T.e6],"$ab")},
at:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.aw(u,u.length,[H.q(u,0)]);u.w();){t=u.d
t.toString
s=$.ja
t.a=s==null?$.ja=new V.J(0,0,1):s
s=$.j9
t.d=s==null?$.j9=new V.J(0,1,0):s
s=$.j8
t.e=s==null?$.j8=new V.J(-1,0,0):s
s=t.b
if(s!=null){r=s.au(0,b,t)
if(r!=null){s=r.bt(t.a)
q=s.a
p=s.b
o=s.c
t.a=s.u(0,Math.sqrt(q*q+p*p+o*o))
o=r.bt(t.d)
p=o.a
q=o.b
s=o.c
t.d=o.u(0,Math.sqrt(p*p+q*q+s*s))
s=r.bt(t.e)
q=s.a
p=s.b
o=s.c
t.e=s.u(0,Math.sqrt(q*q+p*p+o*o))}}}},
j1:function(b6,b7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.cW()
u=b6.fr.j(0,b5.b6)
if(u==null){u=A.nS(b5,b6.a)
t=u.b
if(t.length===0)H.A(P.C("May not cache a shader with no name."))
if(b6.fr.bl(0,t))H.A(P.C('Shader cache already contains a shader by the name "'+t+'".'))
b6.fr.k(0,t,u)}b5=b4.a=u
b7.e=null}s=b5.z
r=s.dz
b5=b7.e
if(!(b5 instanceof Z.ds))b5=b7.e=null
if(b5==null||!b5.d.p(0,r)){b5=s.k3
if(b5)b7.d.ar()
q=s.k4
if(q){p=b7.d
o=p.e
if(o!=null)++o.d
p.d.c3()
p.a.c3()
p=p.e
if(p!=null)p.af(0)}p=s.r2
if(p){o=b7.d
n=o.e
if(n!=null)++n.d
o.a.i8()
o=o.e
if(o!=null)o.af(0)}m=b7.d.i7(new Z.jn(b6.a),r)
m.aU($.bq()).e=b4.a.Q.c
if(b5)m.aU($.bp()).e=b4.a.cx.c
if(q)m.aU($.bo()).e=b4.a.ch.c
if(s.r1)m.aU($.bN()).e=b4.a.cy.c
if(p)m.aU($.bO()).e=b4.a.db.c
if(s.rx)m.aU($.bn()).e=b4.a.dx.c
b7.e=m}b5=T.e6
l=H.d([],[b5])
q=b4.a
p=b6.a
p.useProgram(q.r)
q.x.iq()
if(s.dy){q=b4.a
o=b6.dx
o=o.ga1(o)
q=q.dy
q.toString
q.am(o.ag(0,!0))}if(s.fr){q=b4.a
o=b6.cx
if(o==null){o=b6.db
o=o.ga1(o)
n=b6.dx
n=b6.cx=o.q(0,n.ga1(n))
o=n}q=q.fr
q.toString
q.am(o.ag(0,!0))}q=b4.a
o=b6.ch
if(o==null){o=b6.giY()
n=b6.dx
n=b6.ch=o.q(0,n.ga1(n))
o=n}q=q.fy
q.toString
q.am(o.ag(0,!0))
if(s.ry){q=b4.a
o=b4.b
q=q.k1
q.toString
q.am(C.j.ag(o,!0))}if(s.x1){q=b4.a
o=b4.c
q=q.k2
q.toString
q.am(C.j.ag(o,!0))}if(s.x2){q=b4.a
o=b4.d
q=q.k3
q.toString
q.am(C.j.ag(o,!0))}if(s.y2>0){k=b4.e.a.length
q=b4.a.k4
C.c.bu(q.a,q.d,k)
for(q=[P.t],j=0;j<k;++j){o=b4.a
n=b4.e.a
if(j>=n.length)return H.c(n,j)
n=n[j]
o.toString
H.f(n,"$iao")
o=o.r1
if(j>=o.length)return H.c(o,j)
o=o[j]
i=new Float32Array(H.cc(H.m(n.ag(0,!0),"$ib",q,"$ab")))
C.c.ej(o.a,o.d,!1,i)}}if(s.a.a){q=b4.a
o=b4.f.f
q=q.r2
C.c.Y(q.a,q.d,o.a,o.b,o.c)}if(s.id){if(s.b.a){q=b4.a
o=b4.r.f
q=q.x1
C.c.Y(q.a,q.d,o.a,o.b,o.c)}if(s.c.a){q=b4.a
o=b4.x.f
q=q.y2
C.c.Y(q.a,q.d,o.a,o.b,o.c)}if(s.d.a){q=b4.a
o=b4.y.f
q=q.dA
C.c.Y(q.a,q.d,o.a,o.b,o.c)}q=s.e.a
if(!q)o=!1
else o=!0
if(o){o=b4.a
n=b4.z.ch
o=o.dC
C.c.a4(o.a,o.d,n)}if(q){q=b4.a
o=b4.z.f
q=q.dB
C.c.Y(q.a,q.d,o.a,o.b,o.c)}q=s.z
if(q.length>0){o=b6.db
h=o.ga1(o)
o=P.l
g=new H.a2([o,o])
for(o=b4.dx.e,n=o.length,f=0;f<o.length;o.length===n||(0,H.u)(o),++f){e=o[f]
d=g.j(0,0)
if(d==null)d=0
g.k(0,0,d+1)
c=J.dl(b4.a.ca.j(0,0),d)
b=h.bt(e.a)
a=b.a
a0=b.b
a1=b.c
a1=b.u(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=c.e
a=a1.a
b=a1.b
a1=a1.c
C.c.Y(a0.a,a0.d,a,b,a1)
a1=e.c
b=c.f
C.c.Y(b.a,b.d,a1.a,a1.b,a1.c)}for(o=q.length,f=0;f<q.length;q.length===o||(0,H.u)(q),++f){n=q[f].a
k=g.j(0,n)
if(k==null)k=0
n=b4.a.c9.j(0,n)
C.c.bu(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=b6.db
h=o.ga1(o)
o=P.l
a2=new H.a2([o,o])
for(o=b4.dx.f,n=o.length,b=[b5],a=[P.t],f=0;f<o.length;o.length===n||(0,H.u)(o),++f){e=o[f]
a3=e.gb3()
d=a2.j(0,a3)
if(d==null)d=0
a2.k(0,a3,d+1)
c=J.dl(b4.a.cc.j(0,a3),d)
a4=h.q(0,e.ga1(e))
a0=e.ga1(e)
a1=$.cL
a0=a0.cz(a1==null?$.cL=new V.a6(0,0,0):a1)
a1=c.b
C.c.Y(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=$.cL
a0=a4.cz(a0==null?$.cL=new V.a6(0,0,0):a0)
a1=c.c
C.c.Y(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=e.gaT(e)
a1=c.e
C.c.Y(a1.a,a1.d,a0.a,a0.b,a0.c)
e.gaH()
a0=a4.dQ(0)
a1=a0.a
a5=a0.b
a6=a0.c
a7=a0.e
a8=a0.f
a9=a0.r
b0=a0.y
b1=a0.z
a0=a0.Q
b2=c.d
b2.toString
i=new Float32Array(H.cc(H.m(new V.dN(a1,a5,a6,a7,a8,a9,b0,b1,a0).ag(0,!0),"$ib",a,"$ab")))
C.c.ei(b2.a,b2.d,!1,i)
e.gaH()
a0=e.gaH()
H.m(l,"$ib",b,"$ab")
if(!C.a.W(l,a0)){a0.saC(0,l.length)
C.a.h(l,a0)}a0=e.gaH()
a1=a0.gaD(a0)
if(a1){a1=c.f
a1.toString
a5=a0.gaD(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.gaC(a0)
a1.a.uniform1i(a1.d,a0)}}e.gaX()
a0=e.ger()
a1=c.x
a1.toString
a5=a0.gim(a0)
a6=a0.gio(a0)
a7=a0.gip()
a0=a0.gil()
C.c.eh(a1.a,a1.d,a5,a6,a7,a0)
a0=e.gaX()
if(!C.a.W(l,a0)){a0.saC(0,l.length)
C.a.h(l,a0)}a0=e.gaX()
a1=a0.gaD(a0)
if(a1){a1=c.r
a1.toString
a5=a0.gaD(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.gaC(a0)
a1.a.uniform1i(a1.d,a0)}}if(e.gir()){a0=e.gi2()
a1=c.y
C.c.a4(a1.a,a1.d,a0)
a0=e.gi3()
a1=c.z
C.c.a4(a1.a,a1.d,a0)
a0=e.gi4()
a1=c.Q
C.c.a4(a1.a,a1.d,a0)}}for(o=q.length,f=0;f<q.length;q.length===o||(0,H.u)(q),++f){n=q[f].a
k=a2.j(0,n)
if(k==null)k=0
n=b4.a.cb.j(0,n)
C.c.bu(n.a,n.d,k)}}q=s.ch
if(q.length>0){o=b6.db
h=o.ga1(o)
o=P.l
b3=new H.a2([o,o])
for(o=b4.dx.r,n=o.length,b5=[b5],f=0;f<o.length;o.length===n||(0,H.u)(o),++f){e=o[f]
a3=e.gb3()
d=b3.j(0,a3)
if(d==null)d=0
b3.k(0,a3,d+1)
c=J.dl(b4.a.ce.j(0,a3),d)
b=e.giX(e)
a=c.b
C.c.Y(a.a,a.d,b.a,b.b,b.c)
b=e.gjf(e).jx()
a=c.c
C.c.Y(a.a,a.d,b.a,b.b,b.c)
b=h.cz(e.giX(e))
a=c.d
C.c.Y(a.a,a.d,b.a,b.b,b.c)
b=e.gaT(e)
a=c.e
C.c.Y(a.a,a.d,b.a,b.b,b.c)
e.gaH()
b=e.gcA()
a=c.f
C.c.Y(a.a,a.d,b.a,b.b,b.c)
b=e.gcv(e)
a=c.r
C.c.Y(a.a,a.d,b.a,b.b,b.c)
b=e.gjy()
a=c.x
C.c.a4(a.a,a.d,b)
b=e.gjz()
a=c.y
C.c.a4(a.a,a.d,b)
e.gaH()
b=e.gaH()
H.m(l,"$ib",b5,"$ab")
if(!C.a.W(l,b)){b.saC(0,l.length)
C.a.h(l,b)}b=e.gaH()
a=b.gaD(b)
if(a){a=c.dx
a.toString
a0=b.gaD(b)
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.gaC(b)
a.a.uniform1i(a.d,b)}}e.gaX()
b=e.ger()
a=c.z
a.toString
a0=b.gim(b)
a1=b.gio(b)
a5=b.gip()
b=b.gil()
C.c.eh(a.a,a.d,a0,a1,a5,b)
b=e.gaX()
if(!C.a.W(l,b)){b.saC(0,l.length)
C.a.h(l,b)}b=e.gaX()
a=b.gaD(b)
if(a){a=c.dy
a.toString
a0=b.gaD(b)
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.gaC(b)
a.a.uniform1i(a.d,b)}}if(e.gjg()){b=e.gje()
a=c.Q
C.c.a4(a.a,a.d,b)
b=e.gjd()
a=c.ch
C.c.a4(a.a,a.d,b)}if(e.gir()){b=e.gi2()
a=c.cx
C.c.a4(a.a,a.d,b)
b=e.gi3()
a=c.cy
C.c.a4(a.a,a.d,b)
b=e.gi4()
a=c.db
C.c.a4(a.a,a.d,b)}}for(b5=q.length,f=0;f<q.length;q.length===b5||(0,H.u)(q),++f){o=q[f].a
k=b3.j(0,o)
if(k==null)k=0
o=b4.a.cd.j(0,o)
C.c.bu(o.a,o.d,k)}}}if(s.dx){b5=b4.a
q=b6.Q
if(q==null){q=b6.db
q=b6.Q=q.ga1(q).dQ(0)}b5=b5.id
b5.toString
b5.am(q.ag(0,!0))}if(s.cy){b4.eT(l,b4.ch)
b5=b4.a
q=b4.ch
b5.hA(b5.dD,q)
if(s.r.a){b5=b4.a
q=b4.cx.f
b5=b5.dE
C.c.Y(b5.a,b5.d,q.a,q.b,q.c)}b5=s.x.a
if(!b5)q=!1
else q=!0
if(q){q=b4.a
o=b4.cy.ch
q=q.dF
C.c.a4(q.a,q.d,o)}if(b5){b5=b4.a
q=b4.cy.f
b5=b5.dG
C.c.Y(b5.a,b5.d,q.a,q.b,q.c)}}b5=s.y.a
q=!b5
if(q)o=!1
else o=!0
if(o){if(b5){b5=b4.a
o=b4.db.f
b5=b5.dH
C.c.a4(b5.a,b5.d,o)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].bk(b6)
b5=b7.e
b5.bk(b6)
b5.aV(b6)
b5.eg(b6)
if(q)b5=!1
else b5=!0
if(b5)p.disable(3042)
for(j=0;j<l.length;++j)l[j].eg(b6)
b5=b4.a
b5.toString
p.useProgram(null)
b5.x.ik()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cW().b6},
seX:function(a){this.e=H.m(a,"$ia4",[V.ao],"$aa4")}}
O.hy.prototype={
$2:function(a,b){H.ad(a)
H.ad(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.aM(a,C.d.a8(b+3,4)*4))},
$S:11}
O.hz.prototype={
$2:function(a,b){H.f(a,"$iaM")
H.f(b,"$iaM")
return J.kX(a.a,b.a)},
$S:50}
O.hA.prototype={
$2:function(a,b){H.ad(a)
H.ad(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.aQ(a,C.d.a8(b+3,4)*4))},
$S:11}
O.hB.prototype={
$2:function(a,b){H.f(a,"$iaQ")
H.f(b,"$iaQ")
return J.kX(a.a,b.a)},
$S:51}
O.hC.prototype={
$2:function(a,b){H.ad(a)
H.ad(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.aU(a,C.d.a8(b+3,4)*4))},
$S:11}
O.hD.prototype={
$2:function(a,b){H.f(a,"$iaU")
H.f(b,"$iaU")
return J.kX(a.a,b.a)},
$S:52}
O.hs.prototype={
ay:function(){var u,t=this
t.cH()
u=t.f
if(!(Math.abs(u-1)<$.K().a)){t.f=1
u=new D.M(t.b,u,1,[P.t])
u.b=!0
t.a.ab(u)}}}
O.dM.prototype={
ay:function(){},
df:function(a){var u,t,s=this
if(!s.c.p(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.ay()
u=s.a
u.a=null
u.ab(null)}}}
O.ht.prototype={}
O.b6.prototype={
de:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.M(s.b+".color",u,a,[V.a3])
t.b=!0
s.a.ab(t)}},
ay:function(){this.cH()
this.de(new V.a3(1,1,1))},
saT:function(a,b){this.df(new A.am(!0,!1,!1))
this.de(b)}}
O.hv.prototype={}
O.hw.prototype={
ay:function(){var u,t=this
t.cI()
u=t.ch
if(!(Math.abs(u-1)<$.K().a)){t.ch=1
u=new D.M(t.b+".refraction",u,1,[P.t])
u.b=!0
t.a.ab(u)}}}
O.hx.prototype={
dg:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.K().a)){u.ch=a
t=new D.M(u.b+".shininess",t,a,[P.t])
t.b=!0
u.a.ab(t)}},
ay:function(){this.cI()
this.dg(100)}}
O.c2.prototype={}
T.e6.prototype={}
V.bh.prototype={
aE:function(a,b){return!0},
i:function(a){return"all"},
$iay:1}
V.ay.prototype={}
V.dK.prototype={
aE:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)if(u[s].aE(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa7:function(a){this.a=H.m(a,"$ib",[V.ay],"$ab")},
$iay:1}
V.as.prototype={
aE:function(a,b){return!this.ex(0,b)},
i:function(a){return"!["+this.cG(0)+"]"}}
V.i3.prototype={
aE:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c_(this.a),t=H.c_(this.b)
return u+".."+t},
$iay:1}
V.ic.prototype={
eC:function(a){var u,t
if(a.a.length<=0)throw H.e(P.C("May not create a SetMatcher with zero characters."))
u=new H.a2([P.l,P.S])
for(t=new H.cC(a,a.gn(a),[H.aq(a,"x",0)]);t.w();)u.k(0,t.d,!0)
this.shz(u)},
aE:function(a,b){return this.a.bl(0,b)},
i:function(a){var u=this.a
return P.cT(u.ga3(u),0,null)},
shz:function(a){this.a=H.m(a,"$iy",[P.l,P.S],"$ay")},
$iay:1}
V.cQ.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cW(this.a.l(0,b))
r.sa7(H.d([],[V.ay]))
r.c=!1
C.a.h(this.c,r)
return r},
iu:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.aE(0,a))return r}return},
i:function(a){return this.b},
shS:function(a){this.c=H.m(a,"$ib",[V.cW],"$ab")}}
V.e8.prototype={
i:function(a){var u=H.lA(this.b,"\n","\\n"),t=H.lA(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cV.prototype={
aG:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.h],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.u)(c),++t){s=c[t]
this.c.k(0,s,b)}},
i:function(a){return this.b},
shs:function(a){var u=P.h
this.c=H.m(a,"$iy",[u,u],"$ay")}}
V.iF.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cQ(this,b)
u.shS(H.d([],[V.cW]))
u.d=null
this.a.k(0,b,u)}return u},
P:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cV(a)
u=P.h
t.shs(new H.a2([u,u]))
this.b.k(0,a,t)}return t},
ef:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.e8]),k=this.c,j=[P.l],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.D(a,s)
q=k.iu(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cT(i,0,m)
throw H.e(P.C("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cT(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.e8(n==null?o.b:n,p,s)}++s}}},
shJ:function(a){this.a=H.m(a,"$iy",[P.h,V.cQ],"$ay")},
shL:function(a){this.b=H.m(a,"$iy",[P.h,V.cV],"$ay")}}
V.cW.prototype={
i:function(a){return this.b.b+": "+this.cG(0)}}
X.du.prototype={$icG:1}
X.h0.prototype={
gA:function(){var u=this.x
return u==null?this.x=D.Y():u}}
X.dU.prototype={
gA:function(){var u=this.f
return u==null?this.f=D.Y():u},
aM:function(a){var u
H.f(a,"$iB")
u=this.f
if(u!=null)u.E(a)},
eQ:function(){return this.aM(null)},
sb9:function(a){var u,t,s=this
if(!J.Q(s.b,a)){u=s.b
if(u!=null)u.gA().N(0,s.gcM())
t=s.b
s.b=a
if(a!=null)a.gA().h(0,s.gcM())
u=new D.M("mover",t,s.b,[U.aa])
u.b=!0
s.aM(u)}},
$icG:1,
$idu:1}
X.e5.prototype={}
V.bu.prototype={
bf:function(a){this.b=new P.h4(C.Q)
this.c=null
this.sbH(H.d([],[[P.b,W.aD]]))},
M:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aD]))
u=a.split("\n")
for(l=u.length,t=[W.aD],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.N(q)
o=m.b.f2(q,0,q.length)
n=o==null?q:o
C.O.eq(p,H.lA(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gas(m.d),p)}},
e_:function(a,b){var u,t,s,r,q=this
H.m(b,"$ib",[P.h],"$ab")
q.sbH(H.d([],[[P.b,W.aD]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bm():t).ef(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)q.br(t[r])},
sbH:function(a){this.d=H.m(a,"$ib",[[P.b,W.aD]],"$ab")}}
V.kP.prototype={
$1:function(a){var u
H.f(a,"$iba")
u=C.e.ee(this.a.giy(),2)
if(u!=="0.00")P.lz(u+" fps")},
$S:53}
V.fH.prototype={
br:function(a){var u=this
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
bm:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iG()
a1.c=a1.l(0,r)
u=a1.l(0,r).m(0,q)
t=V.w(new H.r("_"))
C.a.h(u.a,t)
t=V.a_("a","z")
C.a.h(u.a,t)
t=V.a_("A","Z")
C.a.h(u.a,t)
t=a1.l(0,q).m(0,q)
u=V.w(new H.r("_"))
C.a.h(t.a,u)
u=V.a_("0","9")
C.a.h(t.a,u)
u=V.a_("a","z")
C.a.h(t.a,u)
u=V.a_("A","Z")
C.a.h(t.a,u)
u=a1.l(0,r).m(0,p)
t=V.a_("0","9")
C.a.h(u.a,t)
t=a1.l(0,p).m(0,p)
u=V.a_("0","9")
C.a.h(t.a,u)
u=a1.l(0,p).m(0,o)
t=V.w(new H.r("."))
C.a.h(u.a,t)
t=a1.l(0,o).m(0,n)
u=V.a_("0","9")
C.a.h(t.a,u)
u=a1.l(0,n).m(0,n)
t=V.a_("0","9")
C.a.h(u.a,t)
t=a1.l(0,r).m(0,m)
u=V.w(new H.r(l))
C.a.h(t.a,u)
u=a1.l(0,m).m(0,m)
t=V.w(new H.r(l))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,k)
u=V.w(new H.r('"'))
C.a.h(t.a,u)
u=a1.l(0,k).m(0,j)
t=V.w(new H.r('"'))
C.a.h(u.a,t)
t=a1.l(0,k).m(0,i)
u=V.w(new H.r("\\"))
C.a.h(t.a,u)
u=a1.l(0,i).m(0,k)
t=V.w(new H.r('"'))
C.a.h(u.a,t)
C.a.h(a1.l(0,k).m(0,k).a,new V.bh())
t=a1.l(0,r).m(0,h)
u=V.w(new H.r("'"))
C.a.h(t.a,u)
u=a1.l(0,h).m(0,g)
t=V.w(new H.r("'"))
C.a.h(u.a,t)
t=a1.l(0,h).m(0,f)
u=V.w(new H.r("\\"))
C.a.h(t.a,u)
u=a1.l(0,f).m(0,h)
t=V.w(new H.r("'"))
C.a.h(u.a,t)
C.a.h(a1.l(0,h).m(0,h).a,new V.bh())
t=a1.l(0,r).m(0,e)
u=V.w(new H.r("/"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,d)
t=V.w(new H.r("/"))
C.a.h(u.a,t)
t=a1.l(0,d).m(0,c)
u=V.w(new H.r("\n"))
C.a.h(t.a,u)
u=a1.l(0,d).m(0,d)
t=new V.as()
s=[V.ay]
t.sa7(H.d([],s))
C.a.h(u.a,t)
u=V.w(new H.r("\n"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,b)
t=V.w(new H.r("*"))
C.a.h(u.a,t)
t=a1.l(0,b).m(0,a)
u=V.w(new H.r("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,b)
t=new V.as()
t.sa7(H.d([],s))
C.a.h(u.a,t)
u=V.w(new H.r("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,c)
t=V.w(new H.r("/"))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,a0)
u=V.w(new H.r(" \n\t"))
C.a.h(t.a,u)
u=a1.l(0,a0).m(0,a0)
t=V.w(new H.r(" \n\t"))
C.a.h(u.a,t)
t=a1.l(0,p)
t.d=t.a.P("Num")
t=a1.l(0,n)
t.d=t.a.P("Num")
t=a1.l(0,m)
t.d=t.a.P("Symbol")
t=a1.l(0,j)
t.d=t.a.P("String")
t=a1.l(0,g)
t.d=t.a.P("String")
t=a1.l(0,c)
t.d=t.a.P(d)
t=a1.l(0,a0)
t.d=t.a.P(a0)
t=a1.l(0,q)
t=t.d=t.a.P(q)
u=[P.h]
t.aG(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aG(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aG(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.h1.prototype={
br:function(a){var u=this
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
bm:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iG()
e.c=e.l(0,r)
u=e.l(0,r).m(0,q)
t=V.w(new H.r("_"))
C.a.h(u.a,t)
t=V.a_("a","z")
C.a.h(u.a,t)
t=V.a_("A","Z")
C.a.h(u.a,t)
t=e.l(0,q).m(0,q)
u=V.w(new H.r("_"))
C.a.h(t.a,u)
u=V.a_("0","9")
C.a.h(t.a,u)
u=V.a_("a","z")
C.a.h(t.a,u)
u=V.a_("A","Z")
C.a.h(t.a,u)
u=e.l(0,r).m(0,p)
t=V.a_("0","9")
C.a.h(u.a,t)
t=e.l(0,p).m(0,p)
u=V.a_("0","9")
C.a.h(t.a,u)
u=e.l(0,p).m(0,o)
t=V.w(new H.r("."))
C.a.h(u.a,t)
t=e.l(0,o).m(0,n)
u=V.a_("0","9")
C.a.h(t.a,u)
u=e.l(0,n).m(0,n)
t=V.a_("0","9")
C.a.h(u.a,t)
t=e.l(0,r).m(0,m)
u=V.w(new H.r(l))
C.a.h(t.a,u)
u=e.l(0,m).m(0,m)
t=V.w(new H.r(l))
C.a.h(u.a,t)
t=e.l(0,r).m(0,k)
u=V.w(new H.r("/"))
C.a.h(t.a,u)
u=e.l(0,k).m(0,j)
t=V.w(new H.r("/"))
C.a.h(u.a,t)
C.a.h(e.l(0,k).m(0,m).a,new V.bh())
t=e.l(0,j).m(0,i)
u=V.w(new H.r("\n"))
C.a.h(t.a,u)
u=e.l(0,j).m(0,j)
t=new V.as()
s=[V.ay]
t.sa7(H.d([],s))
C.a.h(u.a,t)
u=V.w(new H.r("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,h)
t=V.w(new H.r("#"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,h)
u=new V.as()
u.sa7(H.d([],s))
C.a.h(t.a,u)
t=V.w(new H.r("\n"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,g)
u=V.w(new H.r("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,f)
t=V.w(new H.r(" \n\t"))
C.a.h(u.a,t)
t=e.l(0,f).m(0,f)
u=V.w(new H.r(" \n\t"))
C.a.h(t.a,u)
u=e.l(0,p)
u.d=u.a.P("Num")
u=e.l(0,n)
u.d=u.a.P("Num")
u=e.l(0,m)
u.d=u.a.P("Symbol")
u=e.l(0,i)
u.d=u.a.P(j)
u=e.l(0,g)
u.d=u.a.P(h)
u=e.l(0,f)
u.d=u.a.P(f)
u=e.l(0,q)
u=u.d=u.a.P(q)
t=[P.h]
u.aG(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aG(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aG(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.h2.prototype={
br:function(a){var u=this,t="#111"
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
bm:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iG()
l.c=l.l(0,s)
u=l.l(0,s).m(0,r)
t=V.w(new H.r("_"))
C.a.h(u.a,t)
t=V.a_("a","z")
C.a.h(u.a,t)
t=V.a_("A","Z")
C.a.h(u.a,t)
t=l.l(0,r).m(0,r)
u=V.w(new H.r("_"))
C.a.h(t.a,u)
u=V.a_("0","9")
C.a.h(t.a,u)
u=V.a_("a","z")
C.a.h(t.a,u)
u=V.a_("A","Z")
C.a.h(t.a,u)
u=l.l(0,r).m(0,q)
t=V.w(new H.r("="))
C.a.h(u.a,t)
u.c=!0
u=l.l(0,s).m(0,p)
t=V.w(new H.r("</\\-!>="))
C.a.h(u.a,t)
t=l.l(0,p).m(0,p)
u=V.w(new H.r("</\\-!>="))
C.a.h(t.a,u)
u=l.l(0,s).m(0,o)
t=V.w(new H.r('"'))
C.a.h(u.a,t)
t=l.l(0,o).m(0,n)
u=V.w(new H.r('"'))
C.a.h(t.a,u)
u=l.l(0,o).m(0,"EscStr")
t=V.w(new H.r("\\"))
C.a.h(u.a,t)
t=l.l(0,"EscStr").m(0,o)
u=V.w(new H.r('"'))
C.a.h(t.a,u)
C.a.h(l.l(0,o).m(0,o).a,new V.bh())
C.a.h(l.l(0,s).m(0,m).a,new V.bh())
u=l.l(0,m).m(0,m)
t=new V.as()
t.sa7(H.d([],[V.ay]))
C.a.h(u.a,t)
u=V.w(new H.r('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.a_("a","z")
C.a.h(t.a,u)
u=V.a_("A","Z")
C.a.h(t.a,u)
u=l.l(0,p)
u.d=u.a.P("Symbol")
u=l.l(0,n)
u.d=u.a.P("String")
u=l.l(0,r)
t=u.a.P(r)
u.d=t
t.aG(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.l(0,q)
t.d=t.a.P(q)
t=l.l(0,m)
t.d=t.a.P(m)
return l}}
V.hY.prototype={
e_:function(a,b){H.m(b,"$ib",[P.h],"$ab")
this.sbH(H.d([],[[P.b,W.aD]]))
this.M(C.a.m(b,"\n"),"#111")},
br:function(a){},
bm:function(){return}}
V.i1.prototype={
dm:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.o(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.mi().gcs().j(0,H.i(u))
if(t==null)if(d){c.$0()
m.dk(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lG(m.c).h(0,q)
o=W.nH("radio")
o.checked=s
o.name=u
u=W.n
W.ac(o,"change",H.o(new V.i2(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lG(m.c).h(0,r.createElement("br"))},
b1:function(a,b,c){return this.dm(a,b,c,!1)},
dk:function(a){var u,t,s=P.mi(),r=P.h,q=P.nO(s.gcs(),r,r)
q.k(0,this.a,a)
u=s.e6(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.k0([],[]).cB(""),"",t)}}
V.i2.prototype={
$1:function(a){var u=this
if(H.F(u.b.checked)){u.c.$0()
u.a.dk(u.d)}},
$S:15}
V.ih.prototype={
eE:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.n
W.ac(q,"scroll",H.o(new V.ij(o),{func:1,ret:-1,args:[r]}),!1,r)},
dq:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.h],"$ab")
this.hD()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.ef(C.a.iE(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
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
if(H.pI(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=H.N(m[1])
l.textContent=H.N(m[0])
t.appendChild(l)}else{k=P.f3(C.y,n,C.h,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.i(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
en:function(a){var u,t,s,r=new V.fH("dart")
r.bf("dart")
u=new V.h1("glsl")
u.bf("glsl")
t=new V.h2("html")
t.bf("html")
s=C.a.iw(H.d([r,u,t],[V.bu]),new V.ik(a))
if(s!=null)return s
r=new V.hY("plain")
r.bf("plain")
return r},
dn:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.m(b0,"$ib",[P.h],"$ab")
u=H.d([],[P.l])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.di(r).a2(r,"+")){C.a.k(b0,s,C.b.a9(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a2(r,"-")){C.a.k(b0,s,C.b.a9(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.en(a8)
q.e_(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.f3(C.y,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lI()
i.href="#"+H.i(m)
i.textContent=a7
j.appendChild(i)
k.appendChild(j)
l.appendChild(k)
n.appendChild(l)
if(t)for(h=a9,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className=a5
if(s>=u.length)return H.c(u,s)
b=u[s]
if(b===0){++g;++h
d.textContent=""+g
c.textContent=""+h}else if(b>0){e.className="codeTableRow codeLineLightGreen"
d.className="codeLineNums codeLineGreen codeLineCenter"
c.className="codeLineNums codeLineGreen";++h
d.textContent="+"
c.textContent=""+h}else if(b<0){e.className="codeTableRow codeLineLightRed"
d.className="codeLineNums codeLineRed"
c.className="codeLineNums codeLineRed codeLineCenter";++g
d.textContent=""+g
c.textContent="-"}a=p.createElement("td")
a.className=a6
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.u)(r),++a0)C.Z.i0(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.u)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gT(r);a3.w();)c.appendChild(a3.gK(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
hV:function(a){var u,t,s,r,q,p,o,n="auto"
H.m(a,"$ib",[P.h],"$ab")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft=n
s.marginRight=n
this.a.appendChild(t)
r=t.insertRow(-1)
s=H.f(r.insertCell(-1),"$ib9").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
for(q=0;q<1;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.f(r.insertCell(-1),"$ib9")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
hD:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iG()
u.c=u.l(0,q)
t=u.l(0,q).m(0,p)
s=V.w(new H.r("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,p).m(0,p)
s=new V.as()
r=[V.ay]
s.sa7(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.r("*"))
C.a.h(s.a,t)
t=u.l(0,p).m(0,"BoldEnd")
s=V.w(new H.r("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,o)
s=V.w(new H.r("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,o).m(0,o)
s=new V.as()
s.sa7(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.r("_"))
C.a.h(s.a,t)
t=u.l(0,o).m(0,n)
s=V.w(new H.r("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,m)
s=V.w(new H.r("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,m).m(0,m)
s=new V.as()
s.sa7(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.r("`"))
C.a.h(s.a,t)
t=u.l(0,m).m(0,"CodeEnd")
s=V.w(new H.r("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,l)
s=V.w(new H.r("["))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,l).m(0,k)
s=V.w(new H.r("|"))
C.a.h(t.a,s)
s=u.l(0,l).m(0,j)
t=V.w(new H.r("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,l).m(0,l)
t=new V.as()
t.sa7(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.r("|]"))
C.a.h(t.a,s)
s=u.l(0,k).m(0,j)
t=V.w(new H.r("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,k).m(0,k)
t=new V.as()
t.sa7(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.r("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,q).m(0,i).a,new V.bh())
s=u.l(0,i).m(0,i)
t=new V.as()
t.sa7(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.r("*_`["))
C.a.h(t.a,s)
s=u.l(0,"BoldEnd")
s.d=s.a.P(p)
s=u.l(0,n)
s.d=s.a.P(o)
s=u.l(0,"CodeEnd")
s.d=s.a.P(m)
s=u.l(0,j)
s.d=s.a.P("Link")
s=u.l(0,i)
s.d=s.a.P(i)
this.b=u}}
V.ij.prototype={
$1:function(a){P.me(C.o,new V.ii(this.a))},
$S:15}
V.ii.prototype={
$0:function(){var u=C.e.ak(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:0}
V.ik.prototype={
$1:function(a){return H.f(a,"$ibu").a===this.a},
$S:55}
U.kG.prototype={
$0:function(){this.a.sai(0,F.lv(1,null,null,1))},
$S:0}
U.kH.prototype={
$0:function(){this.a.sai(0,F.mM(!0,40,1))},
$S:0}
U.kI.prototype={
$0:function(){this.a.sai(0,F.mM(!1,40,0))},
$S:0}
U.kJ.prototype={
$0:function(){this.a.sai(0,F.pH(6,6))},
$S:0}
U.kK.prototype={
$0:function(){this.a.sai(0,F.n1())},
$S:0}
U.kL.prototype={
$0:function(){this.a.sai(0,F.pz())},
$S:0}
U.kM.prototype={
$1:function(a){var u,t,s,r
H.f(a,"$iB")
u=this.a
t=this.b
s=t.a
r=[P.h]
u.dn("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dn("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:10};(function aliases(){var u=J.a.prototype
u.eu=u.i
u=J.dE.prototype
u.ew=u.i
u=P.k.prototype
u.ev=u.bv
u=W.T.prototype
u.by=u.ac
u=W.eN.prototype
u.ey=u.aq
u=O.dM.prototype
u.cH=u.ay
u=O.b6.prototype
u.cI=u.ay
u=V.dK.prototype
u.ex=u.aE
u.cG=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"ph","oq",12)
u(P,"pi","or",12)
u(P,"pj","os",12)
t(P,"mL","pf",3)
s(W,"ps",4,null,["$4"],["ou"],28,0)
s(W,"pt",4,null,["$4"],["ov"],28,0)
var m
r(m=E.an.prototype,"gdY",0,0,null,["$1","$0"],["dZ","iP"],1,0)
r(m,"gdW",0,0,null,["$1","$0"],["dX","iO"],1,0)
r(m,"gdU",0,0,null,["$1","$0"],["dV","iL"],1,0)
q(m,"giJ","iK",9)
q(m,"giM","iN",9)
r(m=E.e7.prototype,"gcJ",0,0,null,["$1","$0"],["cL","cK"],1,0)
p(m,"gj3","e7",3)
o(m=X.ee.prototype,"gfQ","fR",14)
o(m,"gfC","fD",14)
o(m,"gfK","fL",4)
o(m,"gfU","fV",31)
o(m,"gfS","fT",31)
o(m,"gfY","fZ",4)
o(m,"gh1","h2",4)
o(m,"gfO","fP",4)
o(m,"gh_","h0",4)
o(m,"gfM","fN",4)
o(m,"gh3","h4",36)
o(m,"gh5","h6",14)
o(m,"ghi","hj",13)
o(m,"ghe","hf",13)
o(m,"ghg","hh",13)
r(D.bw.prototype,"geI",0,0,null,["$1","$0"],["av","eJ"],1,0)
r(m=D.dG.prototype,"gd6",0,0,null,["$1","$0"],["d7","fW"],1,0)
o(m,"gh8","h9",38)
q(m,"gfu","fv",26)
q(m,"ghc","hd",26)
n(V.X.prototype,"gn","ck",24)
n(V.J.prototype,"gn","ck",24)
r(m=U.cy.prototype,"gaL",0,0,null,["$1","$0"],["G","a6"],1,0)
q(m,"gfs","ft",21)
q(m,"gha","hb",21)
r(m=U.ef.prototype,"gaL",0,0,null,["$1","$0"],["G","a6"],1,0)
o(m,"gbK","bL",2)
o(m,"gbM","bN",2)
o(m,"gbO","bP",2)
r(m=U.eg.prototype,"gaL",0,0,null,["$1","$0"],["G","a6"],1,0)
o(m,"gbK","bL",2)
o(m,"gbM","bN",2)
o(m,"gbO","bP",2)
o(m,"gfk","fl",2)
o(m,"gfm","fn",2)
o(m,"ghQ","hR",2)
o(m,"ghO","hP",2)
o(m,"ghM","hN",2)
o(U.eh.prototype,"gfp","fq",2)
r(m=M.dz.prototype,"gan",0,0,null,["$1","$0"],["aw","eK"],1,0)
q(m,"gfG","fH",9)
q(m,"gfI","fJ",9)
r(m=O.dL.prototype,"gfE",0,0,null,["$1","$0"],["ab","fF"],1,0)
r(m,"ghv",0,0,null,["$1","$0"],["dc","hw"],1,0)
q(m,"gfw","fz",33)
q(m,"gfA","fB",33)
r(X.dU.prototype,"gcM",0,0,null,["$1","$0"],["aM","eQ"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.U,null)
s(P.U,[H.l6,J.a,J.aw,P.eA,P.k,H.cC,P.b2,H.bU,H.cZ,H.fA,H.iL,P.by,H.cr,H.eS,P.af,H.hf,H.hh,H.ha,P.eY,P.be,P.aJ,P.ek,P.it,P.cS,P.iu,P.ba,P.al,P.kg,P.jV,P.c9,P.ez,P.x,P.k8,P.hn,P.bS,P.h5,P.ke,P.kd,P.S,P.ax,P.a9,P.bx,P.hW,P.e3,P.es,P.h_,P.bz,P.b,P.y,P.O,P.at,P.h,P.a7,P.ca,P.j_,P.jY,W.fD,W.bK,W.H,W.dS,W.eN,W.k3,W.dB,W.aA,W.jU,W.f4,P.k_,P.jP,P.R,O.a4,O.cD,E.fu,E.an,E.i4,E.e7,Z.ej,Z.jn,Z.ds,Z.bA,Z.bJ,D.fx,D.bT,D.B,X.dt,X.dF,X.hc,X.hk,X.az,X.hK,X.iH,X.ee,D.bw,D.ae,D.dV,D.e2,V.a3,V.b_,V.fR,V.dN,V.ao,V.ab,V.a6,V.bG,V.dY,V.X,V.J,U.ef,U.eg,U.eh,M.dz,A.dp,A.fn,A.am,A.aM,A.aQ,A.aU,A.hu,A.c3,A.c4,A.c7,A.ea,A.iU,F.a8,F.fU,F.bk,F.he,F.bE,F.e0,F.id,F.ie,F.ig,F.au,F.jb,F.jc,F.jf,F.jh,F.ji,F.jj,O.c2,O.dM,O.hv,V.bh,V.ay,V.dK,V.i3,V.ic,V.cQ,V.e8,V.cV,V.iF,X.du,X.e5,X.dU,V.bu,V.i1,V.ih])
s(J.a,[J.h8,J.dD,J.dE,J.b3,J.cB,J.bB,H.cH,H.bD,W.j,W.fj,W.bQ,W.b0,W.b1,W.W,W.em,W.fI,W.fJ,W.eo,W.dy,W.eq,W.fL,W.n,W.et,W.aN,W.h3,W.ev,W.cz,W.dI,W.hE,W.eB,W.eC,W.aO,W.eD,W.eG,W.aP,W.eK,W.eM,W.aS,W.eO,W.aT,W.eT,W.aF,W.eW,W.iE,W.aW,W.eZ,W.iJ,W.j4,W.f5,W.f7,W.f9,W.fb,W.fd,P.b5,P.ex,P.b8,P.eI,P.i0,P.eU,P.bb,P.f0,P.fo,P.el,P.dq,P.dW,P.c1,P.e_,P.eb,P.eQ])
s(J.dE,[J.hX,J.c8,J.bC])
t(J.l5,J.b3)
s(J.cB,[J.dC,J.h9])
t(P.hj,P.eA)
s(P.hj,[H.ec,W.jv,W.ap,P.fW])
t(H.r,H.ec)
s(P.k,[H.fO,H.ho,H.d0])
s(H.fO,[H.bY,H.hg])
s(P.b2,[H.hp,H.jo])
t(H.hq,H.bY)
t(H.fB,H.fA)
s(P.by,[H.hT,H.hb,H.iY,H.iN,H.fw,H.ia,P.fm,P.dT,P.aL,P.iZ,P.iW,P.cR,P.fz,P.fG])
s(H.cr,[H.kU,H.iA,H.kB,H.kC,H.kD,P.jr,P.jq,P.js,P.jt,P.k7,P.k6,P.jC,P.jG,P.jD,P.jE,P.jF,P.jJ,P.jK,P.jI,P.jH,P.iv,P.iw,P.kq,P.jS,P.jR,P.jT,P.hi,P.hm,P.fM,P.fN,P.j3,P.j0,P.j1,P.j2,P.k9,P.ka,P.kc,P.kb,P.kk,P.kj,P.kl,P.km,W.fP,W.hG,W.hI,W.i9,W.is,W.jB,W.hR,W.hQ,W.jW,W.jX,W.k5,W.kf,P.k1,P.ks,P.fX,P.fY,P.fq,E.i5,E.i6,E.i7,E.iD,D.fS,D.fT,F.kh,F.kt,F.kv,F.kw,F.kx,F.kQ,F.kR,F.kT,F.kF,F.ku,F.jl,F.jk,F.jd,F.je,O.hy,O.hz,O.hA,O.hB,O.hC,O.hD,V.kP,V.i2,V.ij,V.ii,V.ik,U.kG,U.kH,U.kI,U.kJ,U.kK,U.kL,U.kM])
s(H.iA,[H.iq,H.cp])
t(H.jp,P.fm)
t(P.hl,P.af)
s(P.hl,[H.a2,W.ju])
t(H.dP,H.bD)
s(H.dP,[H.d5,H.d7])
t(H.d6,H.d5)
t(H.cI,H.d6)
t(H.d8,H.d7)
t(H.dQ,H.d8)
s(H.dQ,[H.hL,H.hM,H.hN,H.hO,H.hP,H.dR,H.cJ])
t(P.jQ,P.kg)
t(P.jO,P.jV)
t(P.f2,P.hn)
t(P.ed,P.f2)
s(P.bS,[P.fs,P.fQ])
t(P.bv,P.iu)
s(P.bv,[P.ft,P.h4,P.j7,P.j6])
t(P.j5,P.fQ)
s(P.a9,[P.t,P.l])
s(P.aL,[P.c0,P.h6])
t(P.jx,P.ca)
s(W.j,[W.G,W.fV,W.cE,W.aR,W.d9,W.aV,W.aG,W.db,W.jm,W.d1,P.fr,P.bP])
s(W.G,[W.T,W.bt,W.d2])
s(W.T,[W.v,P.p])
s(W.v,[W.dn,W.fk,W.co,W.bs,W.bR,W.aD,W.fZ,W.cA,W.ib,W.b9,W.e4,W.iy,W.iz,W.cU])
s(W.b0,[W.cs,W.fE,W.fF])
t(W.fC,W.b1)
t(W.ct,W.em)
t(W.ep,W.eo)
t(W.dx,W.ep)
t(W.er,W.eq)
t(W.fK,W.er)
t(W.aE,W.bQ)
t(W.eu,W.et)
t(W.cw,W.eu)
t(W.ew,W.ev)
t(W.bV,W.ew)
t(W.bI,W.n)
s(W.bI,[W.b4,W.ag,W.aX])
t(W.hF,W.eB)
t(W.hH,W.eC)
t(W.eE,W.eD)
t(W.hJ,W.eE)
t(W.eH,W.eG)
t(W.cK,W.eH)
t(W.eL,W.eK)
t(W.hZ,W.eL)
t(W.i8,W.eM)
t(W.da,W.d9)
t(W.im,W.da)
t(W.eP,W.eO)
t(W.io,W.eP)
t(W.ir,W.eT)
t(W.eX,W.eW)
t(W.iB,W.eX)
t(W.dc,W.db)
t(W.iC,W.dc)
t(W.f_,W.eZ)
t(W.iI,W.f_)
t(W.bd,W.ag)
t(W.f6,W.f5)
t(W.jw,W.f6)
t(W.en,W.dy)
t(W.f8,W.f7)
t(W.jL,W.f8)
t(W.fa,W.f9)
t(W.eF,W.fa)
t(W.fc,W.fb)
t(W.jZ,W.fc)
t(W.fe,W.fd)
t(W.k2,W.fe)
t(W.jy,W.ju)
t(W.jz,P.it)
t(W.lh,W.jz)
t(W.jA,P.cS)
t(W.k4,W.eN)
t(P.k0,P.k_)
t(P.ak,P.jP)
t(P.ey,P.ex)
t(P.hd,P.ey)
t(P.eJ,P.eI)
t(P.hU,P.eJ)
t(P.cO,P.p)
t(P.eV,P.eU)
t(P.ix,P.eV)
t(P.f1,P.f0)
t(P.iK,P.f1)
t(P.fp,P.el)
t(P.hV,P.bP)
t(P.eR,P.eQ)
t(P.ip,P.eR)
s(E.fu,[Z.dr,A.cP,T.e6])
s(D.B,[D.bW,D.bX,D.M,X.i_])
s(X.i_,[X.dJ,X.bl,X.cF,X.e9])
s(O.a4,[D.dG,U.cy])
s(D.fx,[U.fy,U.aa])
s(U.aa,[U.dv,U.dZ])
t(A.hr,A.cP)
s(A.ea,[A.aH,A.iR,A.iS,A.iT,A.iP,A.ai,A.iQ,A.a0,A.cX,A.iV,A.cY,A.aB,A.c5,A.c6])
t(F.il,F.fU)
t(F.iO,F.he)
t(F.jg,F.jh)
t(F.hS,F.ji)
t(O.dL,O.c2)
s(O.dM,[O.hs,O.ht,O.b6])
s(O.b6,[O.hw,O.hx])
s(V.dK,[V.as,V.cW])
t(X.h0,X.e5)
s(V.bu,[V.fH,V.h1,V.h2,V.hY])
u(H.ec,H.cZ)
u(H.d5,P.x)
u(H.d6,H.bU)
u(H.d7,P.x)
u(H.d8,H.bU)
u(P.eA,P.x)
u(P.f2,P.k8)
u(W.em,W.fD)
u(W.eo,P.x)
u(W.ep,W.H)
u(W.eq,P.x)
u(W.er,W.H)
u(W.et,P.x)
u(W.eu,W.H)
u(W.ev,P.x)
u(W.ew,W.H)
u(W.eB,P.af)
u(W.eC,P.af)
u(W.eD,P.x)
u(W.eE,W.H)
u(W.eG,P.x)
u(W.eH,W.H)
u(W.eK,P.x)
u(W.eL,W.H)
u(W.eM,P.af)
u(W.d9,P.x)
u(W.da,W.H)
u(W.eO,P.x)
u(W.eP,W.H)
u(W.eT,P.af)
u(W.eW,P.x)
u(W.eX,W.H)
u(W.db,P.x)
u(W.dc,W.H)
u(W.eZ,P.x)
u(W.f_,W.H)
u(W.f5,P.x)
u(W.f6,W.H)
u(W.f7,P.x)
u(W.f8,W.H)
u(W.f9,P.x)
u(W.fa,W.H)
u(W.fb,P.x)
u(W.fc,W.H)
u(W.fd,P.x)
u(W.fe,W.H)
u(P.ex,P.x)
u(P.ey,W.H)
u(P.eI,P.x)
u(P.eJ,W.H)
u(P.eU,P.x)
u(P.eV,W.H)
u(P.f0,P.x)
u(P.f1,W.H)
u(P.el,P.af)
u(P.eQ,P.x)
u(P.eR,W.H)})()
var v={mangledGlobalNames:{l:"int",t:"double",a9:"num",h:"String",S:"bool",O:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.O},{func:1,ret:-1,opt:[D.B]},{func:1,ret:-1,args:[D.B]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ag]},{func:1,ret:P.O,args:[,,]},{func:1,ret:P.O,args:[F.a8]},{func:1,ret:P.O,args:[F.au,P.t,P.t]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[P.l,[P.k,E.an]]},{func:1,ret:P.O,args:[D.B]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:-1,args:[W.n]},{func:1,ret:P.O,args:[W.n]},{func:1,ret:V.a6,args:[P.t]},{func:1,ret:P.O,args:[,]},{func:1,ret:P.h,args:[P.l]},{func:1,ret:P.t,args:[P.t]},{func:1,ret:P.t,args:[P.t,P.t]},{func:1,ret:-1,args:[P.l,[P.k,U.aa]]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.t},{func:1,args:[,]},{func:1,ret:-1,args:[P.l,[P.k,D.ae]]},{func:1,ret:P.S,args:[W.G]},{func:1,ret:P.S,args:[W.T,P.h,P.h,W.bK]},{func:1,ret:P.S,args:[W.aA]},{func:1,ret:P.S,args:[P.h]},{func:1,ret:-1,args:[W.b4]},{func:1,ret:P.O,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:-1,args:[P.l,[P.k,V.ao]]},{func:1,ret:W.T,args:[W.G]},{func:1,ret:-1,args:[W.G,W.G]},{func:1,ret:-1,args:[W.bd]},{func:1,args:[W.n]},{func:1,ret:P.S,args:[[P.k,D.ae]]},{func:1,ret:P.R,args:[,,]},{func:1,ret:P.O,args:[P.h,,]},{func:1,ret:P.O,args:[P.h]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.l]},{func:1,ret:[P.y,P.h,P.h],args:[[P.y,P.h,P.h],P.h]},{func:1,ret:[P.aJ,,],args:[,]},{func:1,ret:P.O,args:[,],opt:[P.at]},{func:1,ret:P.R,args:[P.l]},{func:1,ret:P.O,args:[{func:1,ret:-1}]},{func:1,ret:P.l,args:[A.aM,A.aM]},{func:1,ret:P.l,args:[A.aQ,A.aQ]},{func:1,ret:P.l,args:[A.aU,A.aU]},{func:1,ret:P.O,args:[P.ba]},{func:1,args:[P.h]},{func:1,ret:P.S,args:[V.bu]},{func:1,args:[,P.h]},{func:1,ret:P.O,args:[P.a9]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bs.prototype
C.n=W.bR.prototype
C.O=W.aD.prototype
C.R=J.a.prototype
C.a=J.b3.prototype
C.d=J.dC.prototype
C.j=J.dD.prototype
C.e=J.cB.prototype
C.b=J.bB.prototype
C.S=J.bC.prototype
C.Y=W.cK.prototype
C.B=J.hX.prototype
C.c=P.c1.prototype
C.Z=W.b9.prototype
C.C=W.e4.prototype
C.r=J.c8.prototype
C.D=W.bd.prototype
C.E=W.d1.prototype
C.a_=new P.ft()
C.F=new P.fs()
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

C.M=new P.hW()
C.h=new P.j5()
C.N=new P.j7()
C.f=new P.jQ()
C.o=new P.bx(0)
C.P=new P.bx(5e6)
C.Q=new P.h5("element",!1,!1,!1)
C.w=H.d(u([127,2047,65535,1114111]),[P.l])
C.k=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.l])
C.T=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.l=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.m=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.U=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.x=H.d(u([]),[P.h])
C.V=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.y=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.i=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.z=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.W=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.A=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.p=H.d(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.q=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.X=new H.fB(0,{},C.x,[P.h,P.h])})();(function staticFields(){$.aZ=0
$.cq=null
$.lK=null
$.ln=!1
$.mS=null
$.mJ=null
$.mZ=null
$.ky=null
$.kE=null
$.lx=null
$.cd=null
$.df=null
$.dg=null
$.lo=!1
$.a1=C.f
$.av=[]
$.bj=null
$.l2=null
$.lR=null
$.lQ=null
$.d4=P.l8(P.h,P.bz)
$.m0=null
$.m4=null
$.cL=null
$.m9=null
$.ml=null
$.mo=null
$.mn=null
$.j8=null
$.j9=null
$.ja=null
$.mm=null
$.m3=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pQ","n3",function(){return H.mR("_$dart_dartClosure")})
u($,"pR","lC",function(){return H.mR("_$dart_js")})
u($,"pX","n4",function(){return H.bc(H.iM({
toString:function(){return"$receiver$"}}))})
u($,"pY","n5",function(){return H.bc(H.iM({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pZ","n6",function(){return H.bc(H.iM(null))})
u($,"q_","n7",function(){return H.bc(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q2","na",function(){return H.bc(H.iM(void 0))})
u($,"q3","nb",function(){return H.bc(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q1","n9",function(){return H.bc(H.mg(null))})
u($,"q0","n8",function(){return H.bc(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"q5","nd",function(){return H.bc(H.mg(void 0))})
u($,"q4","nc",function(){return H.bc(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"ql","lD",function(){return P.op()})
u($,"q7","ne",function(){return P.ol()})
u($,"qm","ni",function(){return H.nU(H.cc(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"qo","nk",function(){return P.o8("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qp","nl",function(){return P.oP()})
u($,"qn","nj",function(){return P.lV(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"qe","nh",function(){return Z.aI(0)})
u($,"q8","nf",function(){return Z.aI(511)})
u($,"qg","bq",function(){return Z.aI(1)})
u($,"qf","bp",function(){return Z.aI(2)})
u($,"qa","bo",function(){return Z.aI(4)})
u($,"qh","bN",function(){return Z.aI(8)})
u($,"qi","bO",function(){return Z.aI(16)})
u($,"qb","dj",function(){return Z.aI(32)})
u($,"qc","dk",function(){return Z.aI(64)})
u($,"qd","ng",function(){return Z.aI(96)})
u($,"qj","cn",function(){return Z.aI(128)})
u($,"q9","bn",function(){return Z.aI(256)})
u($,"pP","n2",function(){return new V.fR(1e-9)})
u($,"pO","K",function(){return $.n2()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cH,DataView:H.bD,ArrayBufferView:H.bD,Float32Array:H.cI,Float64Array:H.cI,Int16Array:H.hL,Int32Array:H.hM,Int8Array:H.hN,Uint16Array:H.hO,Uint32Array:H.hP,Uint8ClampedArray:H.dR,CanvasPixelArray:H.dR,Uint8Array:H.cJ,HTMLAudioElement:W.v,HTMLBRElement:W.v,HTMLButtonElement:W.v,HTMLContentElement:W.v,HTMLDListElement:W.v,HTMLDataElement:W.v,HTMLDataListElement:W.v,HTMLDetailsElement:W.v,HTMLDialogElement:W.v,HTMLEmbedElement:W.v,HTMLFieldSetElement:W.v,HTMLHRElement:W.v,HTMLHeadElement:W.v,HTMLHeadingElement:W.v,HTMLHtmlElement:W.v,HTMLIFrameElement:W.v,HTMLImageElement:W.v,HTMLLIElement:W.v,HTMLLabelElement:W.v,HTMLLegendElement:W.v,HTMLLinkElement:W.v,HTMLMapElement:W.v,HTMLMediaElement:W.v,HTMLMenuElement:W.v,HTMLMetaElement:W.v,HTMLMeterElement:W.v,HTMLModElement:W.v,HTMLOListElement:W.v,HTMLObjectElement:W.v,HTMLOptGroupElement:W.v,HTMLOptionElement:W.v,HTMLOutputElement:W.v,HTMLParagraphElement:W.v,HTMLParamElement:W.v,HTMLPictureElement:W.v,HTMLPreElement:W.v,HTMLProgressElement:W.v,HTMLQuoteElement:W.v,HTMLScriptElement:W.v,HTMLShadowElement:W.v,HTMLSlotElement:W.v,HTMLSourceElement:W.v,HTMLSpanElement:W.v,HTMLStyleElement:W.v,HTMLTableCaptionElement:W.v,HTMLTableColElement:W.v,HTMLTextAreaElement:W.v,HTMLTimeElement:W.v,HTMLTitleElement:W.v,HTMLTrackElement:W.v,HTMLUListElement:W.v,HTMLUnknownElement:W.v,HTMLVideoElement:W.v,HTMLDirectoryElement:W.v,HTMLFontElement:W.v,HTMLFrameElement:W.v,HTMLFrameSetElement:W.v,HTMLMarqueeElement:W.v,HTMLElement:W.v,AccessibleNodeList:W.fj,HTMLAnchorElement:W.dn,HTMLAreaElement:W.fk,HTMLBaseElement:W.co,Blob:W.bQ,HTMLBodyElement:W.bs,HTMLCanvasElement:W.bR,CDATASection:W.bt,CharacterData:W.bt,Comment:W.bt,ProcessingInstruction:W.bt,Text:W.bt,CSSNumericValue:W.cs,CSSUnitValue:W.cs,CSSPerspective:W.fC,CSSCharsetRule:W.W,CSSConditionRule:W.W,CSSFontFaceRule:W.W,CSSGroupingRule:W.W,CSSImportRule:W.W,CSSKeyframeRule:W.W,MozCSSKeyframeRule:W.W,WebKitCSSKeyframeRule:W.W,CSSKeyframesRule:W.W,MozCSSKeyframesRule:W.W,WebKitCSSKeyframesRule:W.W,CSSMediaRule:W.W,CSSNamespaceRule:W.W,CSSPageRule:W.W,CSSRule:W.W,CSSStyleRule:W.W,CSSSupportsRule:W.W,CSSViewportRule:W.W,CSSStyleDeclaration:W.ct,MSStyleCSSProperties:W.ct,CSS2Properties:W.ct,CSSImageValue:W.b0,CSSKeywordValue:W.b0,CSSPositionValue:W.b0,CSSResourceValue:W.b0,CSSURLImageValue:W.b0,CSSStyleValue:W.b0,CSSMatrixComponent:W.b1,CSSRotation:W.b1,CSSScale:W.b1,CSSSkew:W.b1,CSSTranslation:W.b1,CSSTransformComponent:W.b1,CSSTransformValue:W.fE,CSSUnparsedValue:W.fF,DataTransferItemList:W.fI,HTMLDivElement:W.aD,DOMException:W.fJ,ClientRectList:W.dx,DOMRectList:W.dx,DOMRectReadOnly:W.dy,DOMStringList:W.fK,DOMTokenList:W.fL,Element:W.T,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aE,FileList:W.cw,FileWriter:W.fV,HTMLFormElement:W.fZ,Gamepad:W.aN,History:W.h3,HTMLCollection:W.bV,HTMLFormControlsCollection:W.bV,HTMLOptionsCollection:W.bV,ImageData:W.cz,HTMLInputElement:W.cA,KeyboardEvent:W.b4,Location:W.dI,MediaList:W.hE,MessagePort:W.cE,MIDIInputMap:W.hF,MIDIOutputMap:W.hH,MimeType:W.aO,MimeTypeArray:W.hJ,PointerEvent:W.ag,MouseEvent:W.ag,DragEvent:W.ag,Document:W.G,DocumentFragment:W.G,HTMLDocument:W.G,ShadowRoot:W.G,XMLDocument:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cK,RadioNodeList:W.cK,Plugin:W.aP,PluginArray:W.hZ,RTCStatsReport:W.i8,HTMLSelectElement:W.ib,SourceBuffer:W.aR,SourceBufferList:W.im,SpeechGrammar:W.aS,SpeechGrammarList:W.io,SpeechRecognitionResult:W.aT,Storage:W.ir,CSSStyleSheet:W.aF,StyleSheet:W.aF,HTMLTableCellElement:W.b9,HTMLTableDataCellElement:W.b9,HTMLTableHeaderCellElement:W.b9,HTMLTableElement:W.e4,HTMLTableRowElement:W.iy,HTMLTableSectionElement:W.iz,HTMLTemplateElement:W.cU,TextTrack:W.aV,TextTrackCue:W.aG,VTTCue:W.aG,TextTrackCueList:W.iB,TextTrackList:W.iC,TimeRanges:W.iE,Touch:W.aW,TouchEvent:W.aX,TouchList:W.iI,TrackDefaultList:W.iJ,CompositionEvent:W.bI,FocusEvent:W.bI,TextEvent:W.bI,UIEvent:W.bI,URL:W.j4,VideoTrackList:W.jm,WheelEvent:W.bd,Window:W.d1,DOMWindow:W.d1,Attr:W.d2,CSSRuleList:W.jw,ClientRect:W.en,DOMRect:W.en,GamepadList:W.jL,NamedNodeMap:W.eF,MozNamedAttrMap:W.eF,SpeechRecognitionResultList:W.jZ,StyleSheetList:W.k2,SVGLength:P.b5,SVGLengthList:P.hd,SVGNumber:P.b8,SVGNumberList:P.hU,SVGPointList:P.i0,SVGScriptElement:P.cO,SVGStringList:P.ix,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bb,SVGTransformList:P.iK,AudioBuffer:P.fo,AudioParamMap:P.fp,AudioTrackList:P.fr,AudioContext:P.bP,webkitAudioContext:P.bP,BaseAudioContext:P.bP,OfflineAudioContext:P.hV,WebGLBuffer:P.dq,WebGLProgram:P.dW,WebGL2RenderingContext:P.c1,WebGLShader:P.e_,WebGLUniformLocation:P.eb,SQLResultSetRowList:P.ip})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dP.$nativeSuperclassTag="ArrayBufferView"
H.d5.$nativeSuperclassTag="ArrayBufferView"
H.d6.$nativeSuperclassTag="ArrayBufferView"
H.cI.$nativeSuperclassTag="ArrayBufferView"
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.dQ.$nativeSuperclassTag="ArrayBufferView"
W.d9.$nativeSuperclassTag="EventTarget"
W.da.$nativeSuperclassTag="EventTarget"
W.db.$nativeSuperclassTag="EventTarget"
W.dc.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.mV,[])
else U.mV([])})})()
//# sourceMappingURL=test.dart.js.map
