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
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lw(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={l7:function l7(){},
kA:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
h8:function(){return new P.cS("No element")},
nL:function(){return new P.cS("Too many elements")},
e2:function(a,b,c,d,e){if(c-b<=32)H.of(a,b,c,d,e)
else H.oe(a,b,c,d,e)},
of:function(a,b,c,d,e){var u,t,s,r,q
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
oe:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.a7(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.a7(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
H.e2(a2,a3,o-2,a5,a6)
H.e2(a2,n+2,a4,a5,a6)
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
break}}}H.e2(a2,o,n,a5,a6)}else H.e2(a2,o,n,a5,a6)},
r:function r(a){this.a=a},
fP:function fP(){},
c_:function c_(){},
cD:function cD(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hp:function hp(a,b,c){this.a=a
this.b=b
this.$ti=c},
hq:function hq(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hr:function hr(a,b,c){this.a=a
this.b=b
this.$ti=c},
d1:function d1(a,b,c){this.a=a
this.b=b
this.$ti=c},
jo:function jo(a,b,c){this.a=a
this.b=b
this.$ti=c},
bW:function bW(){},
d_:function d_(){},
ed:function ed(){},
nD:function(){throw H.e(P.I("Cannot modify unmodifiable Map"))},
cn:function(a){var u,t=H.pL(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
ps:function(a){return v.types[H.ad(a)]},
pz:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.V(a).$iM},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ar(a)
if(typeof u!=="string")throw H.e(H.aZ(a))
return u},
cN:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
o6:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.c(p,3)
u=H.O(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.e(P.ah(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.D(s,q)|32)>t)return}return parseInt(a,b)},
cO:function(a){return H.nY(a)+H.lr(H.bO(a),0,null)},
nY:function(a){var u,t,s,r,q,p,o,n=J.V(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ic9){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cn(t.length>1&&C.b.D(t,0)===36?C.b.a9(t,1):t)},
nZ:function(){if(!!self.location)return self.location.href
return},
m5:function(a){var u,t,s,r,q=J.aC(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
o7:function(a){var u,t,s,r=H.d([],[P.l])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.aZ(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.aP(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.e(H.aZ(s))}return H.m5(r)},
m6:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.aZ(s))
if(s<0)throw H.e(H.aZ(s))
if(s>65535)return H.o7(a)}return H.m5(a)},
o8:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c1:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aP(u,10))>>>0,56320|u&1023)}}throw H.e(P.ah(a,0,1114111,null,null))},
c0:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o5:function(a){var u=H.c0(a).getFullYear()+0
return u},
o3:function(a){var u=H.c0(a).getMonth()+1
return u},
o_:function(a){var u=H.c0(a).getDate()+0
return u},
o0:function(a){var u=H.c0(a).getHours()+0
return u},
o2:function(a){var u=H.c0(a).getMinutes()+0
return u},
o4:function(a){var u=H.c0(a).getSeconds()+0
return u},
o1:function(a){var u=H.c0(a).getMilliseconds()+0
return u},
D:function(a){throw H.e(H.aZ(a))},
c:function(a,b){if(a==null)J.aC(a)
throw H.e(H.ch(a,b))},
ch:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aL(!0,b,s,null)
u=H.ad(J.aC(a))
if(!(b<0)){if(typeof u!=="number")return H.D(u)
t=b>=u}else t=!0
if(t)return P.Z(b,a,s,null,u)
return P.dY(b,s)},
pn:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c2(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c2(a,c,!0,b,"end",u)
return new P.aL(!0,b,"end",null)},
aZ:function(a){return new P.aL(!0,a,null,null)},
e:function(a){var u
if(a==null)a=new P.dV()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.n2})
u.name=""}else u.toString=H.n2
return u},
n2:function(){return J.ar(this.dartException)},
A:function(a){throw H.e(a)},
u:function(a){throw H.e(P.bi(a))},
bd:function(a){var u,t,s,r,q,p
a=H.n0(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iO(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iP:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mg:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m1:function(a,b){return new H.hW(a,b==null?null:b.method)},
l8:function(a,b){var u=b==null,t=u?null:b.method
return new H.hc(a,t,u?null:b.receiver)},
aj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kU(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aP(t,16)&8191)===10)switch(s){case 438:return f.$1(H.l8(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.m1(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.n6()
q=$.n7()
p=$.n8()
o=$.n9()
n=$.nc()
m=$.nd()
l=$.nb()
$.na()
k=$.nf()
j=$.ne()
i=r.af(u)
if(i!=null)return f.$1(H.l8(H.O(u),i))
else{i=q.af(u)
if(i!=null){i.method="call"
return f.$1(H.l8(H.O(u),i))}else{i=p.af(u)
if(i==null){i=o.af(u)
if(i==null){i=n.af(u)
if(i==null){i=m.af(u)
if(i==null){i=l.af(u)
if(i==null){i=o.af(u)
if(i==null){i=k.af(u)
if(i==null){i=j.af(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.m1(H.O(u),i))}}return f.$1(new H.j0(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.e4()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aL(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.e4()
return a},
cl:function(a){var u
if(a==null)return new H.eT(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eT(a)},
pr:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
py:function(a,b,c,d,e,f){H.f(a,"$iby")
switch(H.ad(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.C("Unsupported number of arguments for wrapped closure"))},
cg:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.py)
a.$identity=u
return u},
nC:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.it().constructor.prototype):Object.create(new H.cq(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b_
if(typeof t!=="number")return t.B()
$.b_=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lP(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.ny(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lP(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
ny:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.ps,a)
if(typeof a=="function")if(b)return a
else{u=c?H.lN:H.kZ
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.e("Error in functionType of tearoff")},
nz:function(a,b,c,d){var u=H.kZ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lP:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nB(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nz(t,!r,u,b)
if(t===0){r=$.b_
if(typeof r!=="number")return r.B()
$.b_=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cr
return new Function(r+H.i(q==null?$.cr=H.fw("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b_
if(typeof r!=="number")return r.B()
$.b_=r+1
o+=r
r="return function("+o+"){return this."
q=$.cr
return new Function(r+H.i(q==null?$.cr=H.fw("self"):q)+"."+H.i(u)+"("+o+");}")()},
nA:function(a,b,c,d){var u=H.kZ,t=H.lN
switch(b?-1:a){case 0:throw H.e(H.oc("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nB:function(a,b){var u,t,s,r,q,p,o,n=$.cr
if(n==null)n=$.cr=H.fw("self")
u=$.lM
if(u==null)u=$.lM=H.fw("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nA(s,!q,t,b)
if(s===1){n="return function(){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+");"
u=$.b_
if(typeof u!=="number")return u.B()
$.b_=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+", "+o+");"
u=$.b_
if(typeof u!=="number")return u.B()
$.b_=u+1
return new Function(n+u+"}")()},
lw:function(a,b,c,d,e,f,g){return H.nC(a,b,c,d,!!e,!!f,g)},
kZ:function(a){return a.a},
lN:function(a){return a.c},
fw:function(a){var u,t,s,r=new H.cq("self","target","receiver","name"),q=J.l5(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
F:function(a){if(a==null)H.ph("boolean expression must not be null")
return a},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aY(a,"String"))},
po:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aY(a,"double"))},
mX:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aY(a,"num"))},
lt:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aY(a,"bool"))},
ad:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aY(a,"int"))},
mZ:function(a,b){throw H.e(H.aY(a,H.cn(H.O(b).substring(2))))},
pF:function(a,b){throw H.e(H.nx(a,H.cn(H.O(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.V(a)[b])return a
H.mZ(a,b)},
z:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.V(a)[b]
else u=!0
if(u)return a
H.pF(a,b)},
qt:function(a){if(a==null)return a
if(!!J.V(a).$ib)return a
throw H.e(H.aY(a,"List<dynamic>"))},
mV:function(a,b){var u
if(a==null)return a
u=J.V(a)
if(!!u.$ib)return a
if(u[b])return a
H.mZ(a,b)},
mQ:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ad(u)]
else return a.$S()}return},
fg:function(a,b){var u
if(typeof a=="function")return!0
u=H.mQ(J.V(a))
if(u==null)return!1
return H.mC(u,null,b,null)},
o:function(a,b){var u,t
if(a==null)return a
if($.lo)return a
$.lo=!0
try{if(H.fg(a,b))return a
u=H.kO(b)
t=H.aY(a,u)
throw H.e(t)}finally{$.lo=!1}},
ly:function(a,b){if(a!=null&&!H.lv(a,b))H.A(H.aY(a,H.kO(b)))
return a},
aY:function(a,b){return new H.iQ("TypeError: "+P.dE(a)+": type '"+H.i(H.mI(a))+"' is not a subtype of type '"+b+"'")},
nx:function(a,b){return new H.fx("CastError: "+P.dE(a)+": type '"+H.i(H.mI(a))+"' is not a subtype of type '"+b+"'")},
mI:function(a){var u,t=J.V(a)
if(!!t.$ics){u=H.mQ(t)
if(u!=null)return H.kO(u)
return"Closure"}return H.cO(a)},
ph:function(a){throw H.e(new H.jp(a))},
pK:function(a){throw H.e(new P.fH(a))},
oc:function(a){return new H.id(a)},
mS:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bO:function(a){if(a==null)return
return a.$ti},
qs:function(a,b,c){return H.cm(a["$a"+H.i(c)],H.bO(b))},
ck:function(a,b,c,d){var u=H.cm(a["$a"+H.i(c)],H.bO(b))
return u==null?null:u[d]},
aq:function(a,b,c){var u=H.cm(a["$a"+H.i(b)],H.bO(a))
return u==null?null:u[c]},
q:function(a,b){var u=H.bO(a)
return u==null?null:u[b]},
kO:function(a){return H.bN(a,null)},
bN:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cn(a[0].name)+H.lr(a,1,b)
if(typeof a=="function")return H.cn(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ad(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.i(b[t])}if('func' in a)return H.oR(a,b)
if('futureOr' in a)return"FutureOr<"+H.bN("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oR:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
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
if(l!=null&&l!==P.U)p+=" extends "+H.bN(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bN(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bN(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bN(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.pq(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.O(n[g])
i=i+h+H.bN(d[c],a0)+(" "+H.i(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lr:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.a6("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bN(p,c)}return"<"+u.i(0)+">"},
cm:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lu:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bO(a)
t=J.V(a)
if(t[b]==null)return!1
return H.mL(H.cm(t[d],u),null,c,null)},
n:function(a,b,c,d){if(a==null)return a
if(H.lu(a,b,c,d))return a
throw H.e(H.aY(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cn(b.substring(2))+H.lr(c,0,null),v.mangledGlobalNames)))},
mL:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aK(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aK(a[t],b,c[t],d))return!1
return!0},
qq:function(a,b,c){return a.apply(b,H.cm(J.V(b)["$a"+H.i(c)],H.bO(b)))},
mU:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="U"||a.name==="P"||a===-1||a===-2||H.mU(u)}return!1},
lv:function(a,b){var u,t
if(a==null)return b==null||b.name==="U"||b.name==="P"||b===-1||b===-2||H.mU(b)
if(b==null||b===-1||b.name==="U"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lv(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fg(a,b)}u=J.V(a).constructor
t=H.bO(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aK(u,null,b,null)},
E:function(a,b){if(a!=null&&!H.lv(a,b))throw H.e(H.aY(a,H.kO(b)))
return a},
aK:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="U"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="U"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aK(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="P")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aK("type" in a?a.type:l,b,s,d)
else if(H.aK(a,b,s,d))return!0
else{if(!('$i'+"cy" in t.prototype))return!1
r=t.prototype["$a"+"cy"]
q=H.cm(r,u?a.slice(1):l)
return H.aK(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.mC(a,b,c,d)
if('func' in a)return c.name==="by"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mL(H.cm(m,u),b,p,d)},
mC:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.pD(h,b,g,d)},
pD:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aK(c[s],d,a[s],b))return!1}return!0},
qr:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pB:function(a){var u,t,s,r,q=H.O($.mT.$1(a)),p=$.ky[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kE[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.O($.mK.$2(a,q))
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
return r.i}if(s==="+")return H.mY(a,u)
if(s==="*")throw H.e(P.j_(q))
if(v.leafTags[q]===true){r=H.kN(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mY(a,u)},
mY:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lA(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kN:function(a){return J.lA(a,!1,null,!!a.$iM)},
pC:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kN(u)
else return J.lA(u,c,null,null)},
pw:function(){if(!0===$.lz)return
$.lz=!0
H.px()},
px:function(){var u,t,s,r,q,p,o,n
$.ky=Object.create(null)
$.kE=Object.create(null)
H.pv()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.n_.$1(q)
if(p!=null){o=H.pC(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pv:function(){var u,t,s,r,q,p,o=C.G()
o=H.cf(C.H,H.cf(C.I,H.cf(C.v,H.cf(C.v,H.cf(C.J,H.cf(C.K,H.cf(C.L(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mT=new H.kB(r)
$.mK=new H.kC(q)
$.n_=new H.kD(p)},
cf:function(a,b){return a(b)||b},
nN:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.e(P.a4("Illegal RegExp pattern ("+String(p)+")",a,null))},
pI:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
pp:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n0:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lC:function(a,b,c){var u=H.pJ(a,b,c)
return u},
pJ:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n0(b),'g'),H.pp(c))},
fB:function fB(){},
fC:function fC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iO:function iO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hW:function hW(a,b){this.a=a
this.b=b},
hc:function hc(a,b,c){this.a=a
this.b=b
this.c=c},
j0:function j0(a){this.a=a},
kU:function kU(a){this.a=a},
eT:function eT(a){this.a=a
this.b=null},
cs:function cs(){},
iD:function iD(){},
it:function it(){},
cq:function cq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iQ:function iQ(a){this.a=a},
fx:function fx(a){this.a=a},
id:function id(a){this.a=a},
jp:function jp(a){this.a=a},
a2:function a2(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hg:function hg(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hh:function hh(a,b){this.a=a
this.$ti=b},
hi:function hi(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kB:function kB(a){this.a=a},
kC:function kC(a){this.a=a},
kD:function kD(a){this.a=a},
hb:function hb(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dg:function(a){return a},
nW:function(a){return new Int8Array(a)},
bg:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.ch(b,a))},
oP:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.e(H.pn(a,b,c))
return b},
cI:function cI(){},
bD:function bD(){},
dR:function dR(){},
cJ:function cJ(){},
dS:function dS(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(){},
hR:function hR(){},
hS:function hS(){},
dT:function dT(){},
cK:function cK(){},
d6:function d6(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
pq:function(a){return J.lU(a?Object.keys(a):[],null)},
pL:function(a){return v.mangledGlobalNames[a]},
pE:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lA:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kz:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lz==null){H.pw()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.e(P.j_("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lE()]
if(r!=null)return r
r=H.pB(a)
if(r!=null)return r
if(typeof a=="function")return C.S
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.lE(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
nM:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.kY(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.ah(a,0,4294967295,"length",null))
return J.lU(new Array(a),b)},
lU:function(a,b){return J.l5(H.d(a,[b]))},
l5:function(a){a.fixed$length=Array
return a},
V:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dG.prototype
return J.ha.prototype}if(typeof a=="string")return J.bA.prototype
if(a==null)return J.dH.prototype
if(typeof a=="boolean")return J.h9.prototype
if(a.constructor==Array)return J.b4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.U)return a
return J.kz(a)},
dj:function(a){if(typeof a=="string")return J.bA.prototype
if(a==null)return a
if(a.constructor==Array)return J.b4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.U)return a
return J.kz(a)},
fh:function(a){if(a==null)return a
if(a.constructor==Array)return J.b4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.U)return a
return J.kz(a)},
mR:function(a){if(typeof a=="number")return J.cC.prototype
if(typeof a=="string")return J.bA.prototype
if(a==null)return a
if(!(a instanceof P.U))return J.c9.prototype
return a},
dk:function(a){if(typeof a=="string")return J.bA.prototype
if(a==null)return a
if(!(a instanceof P.U))return J.c9.prototype
return a},
cj:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.U)return a
return J.kz(a)},
Q:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.V(a).q(a,b)},
lG:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mR(a).p(a,b)},
dn:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pz(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dj(a).j(a,b)},
kW:function(a,b,c){return J.fh(a).k(a,b,c)},
no:function(a,b){return J.dk(a).D(a,b)},
np:function(a,b,c){return J.cj(a).hv(a,b,c)},
nq:function(a,b,c,d){return J.cj(a).hY(a,b,c,d)},
nr:function(a,b){return J.dk(a).W(a,b)},
kX:function(a,b){return J.mR(a).i9(a,b)},
fj:function(a,b){return J.fh(a).J(a,b)},
ns:function(a,b,c,d){return J.cj(a).im(a,b,c,d)},
lH:function(a,b){return J.fh(a).H(a,b)},
nt:function(a){return J.cj(a).gi4(a)},
lI:function(a){return J.cj(a).gc7(a)},
dp:function(a){return J.V(a).gI(a)},
br:function(a){return J.fh(a).gT(a)},
aC:function(a){return J.dj(a).gn(a)},
lJ:function(a){return J.fh(a).iV(a)},
nu:function(a,b){return J.cj(a).iZ(a,b)},
nv:function(a,b,c){return J.dk(a).t(a,b,c)},
nw:function(a){return J.dk(a).j6(a)},
ar:function(a){return J.V(a).i(a)},
a:function a(){},
h9:function h9(){},
dH:function dH(){},
dI:function dI(){},
i_:function i_(){},
c9:function c9(){},
bB:function bB(){},
b4:function b4(a){this.$ti=a},
l6:function l6(a){this.$ti=a},
as:function as(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cC:function cC(){},
dG:function dG(){},
ha:function ha(){},
bA:function bA(){}},P={
oq:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pi()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cg(new P.jr(s),1)).observe(u,{childList:true})
return new P.jq(s,u,t)}else if(self.setImmediate!=null)return P.pj()
return P.pk()},
or:function(a){self.scheduleImmediate(H.cg(new P.js(H.o(a,{func:1,ret:-1})),0))},
os:function(a){self.setImmediate(H.cg(new P.jt(H.o(a,{func:1,ret:-1})),0))},
ot:function(a){P.ld(C.o,H.o(a,{func:1,ret:-1}))},
ld:function(a,b){var u=C.d.a7(a.a,1000)
return P.oz(u<0?0:u,b)},
mf:function(a,b){var u=C.d.a7(a.a,1000)
return P.oA(u<0?0:u,b)},
oz:function(a,b){var u=new P.eZ()
u.eU(a,b)
return u},
oA:function(a,b){var u=new P.eZ()
u.eV(a,b)
return u},
ou:function(a,b){var u,t,s
b.a=1
try{a.ei(new P.jD(b),new P.jE(b),null)}catch(s){u=H.aj(s)
t=H.cl(s)
P.pG(new P.jF(b,u,t))}},
ms:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaJ")
if(u>=4){t=b.bW()
b.a=a.a
b.c=a.c
P.d4(b,t)}else{t=H.f(b.c,"$ibf")
b.a=2
b.c=a
a.dc(t)}},
d4:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$iam")
P.kp(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.d4(h.a,b)}g=h.a
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
if(m){H.f(q,"$iam")
P.kp(i,i,g.b,q.a,q.b)
return}l=$.a1
if(l!==n)$.a1=n
else l=i
g=b.c
if((g&15)===8)new P.jJ(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.jI(u,b,q).$0()}else if((g&2)!==0)new P.jH(h,u,b).$0()
if(l!=null)$.a1=l
g=u.b
if(!!J.V(g).$icy){if(g.a>=4){k=H.f(o.c,"$ibf")
o.c=null
b=o.bj(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.ms(g,o)
return}}j=b.b
k=H.f(j.c,"$ibf")
j.c=null
b=j.bj(k)
g=u.a
p=u.b
if(!g){H.E(p,H.q(j,0))
j.a=4
j.c=p}else{H.f(p,"$iam")
j.a=8
j.c=p}h.a=j
g=j}},
pd:function(a,b){if(H.fg(a,{func:1,args:[P.U,P.au]}))return H.o(a,{func:1,ret:null,args:[P.U,P.au]})
if(H.fg(a,{func:1,args:[P.U]}))return H.o(a,{func:1,ret:null,args:[P.U]})
throw H.e(P.kY(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pc:function(){var u,t
for(;u=$.ce,u!=null;){$.di=null
t=u.b
$.ce=t
if(t==null)$.dh=null
u.a.$0()}},
pg:function(){$.lp=!0
try{P.pc()}finally{$.di=null
$.lp=!1
if($.ce!=null)$.lF().$1(P.mM())}},
mH:function(a){var u=new P.el(a)
if($.ce==null){$.ce=$.dh=u
if(!$.lp)$.lF().$1(P.mM())}else $.dh=$.dh.b=u},
pf:function(a){var u,t,s=$.ce
if(s==null){P.mH(a)
$.di=$.dh
return}u=new P.el(a)
t=$.di
if(t==null){u.b=s
$.ce=$.di=u}else{u.b=t.b
$.di=t.b=u
if(u.b==null)$.dh=u}},
pG:function(a){var u=null,t=$.a1
if(C.f===t){P.kr(u,u,C.f,a)
return}P.kr(u,u,t,H.o(t.c3(a),{func:1,ret:-1}))},
me:function(a,b){var u=$.a1
if(u===C.f)return P.ld(a,H.o(b,{func:1,ret:-1}))
return P.ld(a,H.o(u.c3(b),{func:1,ret:-1}))},
oi:function(a,b){var u=$.a1
if(u===C.f)return P.mf(a,H.o(b,{func:1,ret:-1,args:[P.bb]}))
return P.mf(a,H.o(u.du(b,P.bb),{func:1,ret:-1,args:[P.bb]}))},
kp:function(a,b,c,d,e){var u={}
u.a=d
P.pf(new P.kq(u,e))},
mD:function(a,b,c,d,e){var u,t=$.a1
if(t===c)return d.$0()
$.a1=c
u=t
try{t=d.$0()
return t}finally{$.a1=u}},
mE:function(a,b,c,d,e,f,g){var u,t=$.a1
if(t===c)return d.$1(e)
$.a1=c
u=t
try{t=d.$1(e)
return t}finally{$.a1=u}},
pe:function(a,b,c,d,e,f,g,h,i){var u,t=$.a1
if(t===c)return d.$2(e,f)
$.a1=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a1=u}},
kr:function(a,b,c,d){var u
H.o(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.c3(d):c.i5(d,-1)
P.mH(d)},
jr:function jr(a){this.a=a},
jq:function jq(a,b,c){this.a=a
this.b=b
this.c=c},
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
eZ:function eZ(){this.c=0},
k7:function k7(a,b){this.a=a
this.b=b},
k6:function k6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bf:function bf(a,b,c,d,e){var _=this
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
el:function el(a){this.a=a
this.b=null},
iw:function iw(){},
iy:function iy(a,b){this.a=a
this.b=b},
iz:function iz(a,b){this.a=a
this.b=b},
cT:function cT(){},
ix:function ix(){},
bb:function bb(){},
am:function am(a,b){this.a=a
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
nP:function(a,b){return new H.a2([a,b])},
l9:function(a,b){return new H.a2([a,b])},
nR:function(a){return H.pr(a,new H.a2([null,null]))},
dL:function(a){return new P.jO([a])},
lj:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oy:function(a,b,c){var u=new P.eA(a,b,[c])
u.c=a.e
return u},
nK:function(a,b,c){var u,t
if(P.lq(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.h])
C.a.h($.aw,a)
try{P.oS(a,u)}finally{if(0>=$.aw.length)return H.c($.aw,-1)
$.aw.pop()}t=P.mc(b,H.mV(u,"$ik"),", ")+c
return t.charCodeAt(0)==0?t:t},
l4:function(a,b,c){var u,t
if(P.lq(a))return b+"..."+c
u=new P.a6(b)
C.a.h($.aw,a)
try{t=u
t.a=P.mc(t.a,a,", ")}finally{if(0>=$.aw.length)return H.c($.aw,-1)
$.aw.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lq:function(a){var u,t
for(u=$.aw.length,t=0;t<u;++t)if(a===$.aw[t])return!0
return!1},
oS:function(a,b){var u,t,s,r,q,p,o,n=a.gT(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.A())return
u=H.i(n.gK(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.A()){if(l<=5)return
if(0>=b.length)return H.c(b,-1)
t=b.pop()
if(0>=b.length)return H.c(b,-1)
s=b.pop()}else{r=n.gK(n);++l
if(!n.A()){if(l<=4){C.a.h(b,H.i(r))
return}t=H.i(r)
if(0>=b.length)return H.c(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gK(n);++l
for(;n.A();r=q,q=p){p=n.gK(n);++l
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
nQ:function(a,b,c){var u=P.nP(b,c)
a.H(0,new P.hj(u,b,c))
return u},
lV:function(a,b){var u,t,s=P.dL(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t)s.h(0,H.E(a[t],b))
return s},
la:function(a){var u,t={}
if(P.lq(a))return"{...}"
u=new P.a6("")
try{C.a.h($.aw,a)
u.a+="{"
t.a=!0
J.lH(a,new P.hn(t,u))
u.a+="}"}finally{if(0>=$.aw.length)return H.c($.aw,-1)
$.aw.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jO:function jO(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cb:function cb(a){this.a=a
this.c=this.b=null},
eA:function eA(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
hk:function hk(){},
x:function x(){},
hm:function hm(){},
hn:function hn(a,b){this.a=a
this.b=b},
af:function af(){},
k8:function k8(){},
ho:function ho(){},
ee:function ee(a,b){this.a=a
this.$ti=b},
jV:function jV(){},
eB:function eB(){},
f3:function f3(){},
ol:function(a,b,c,d){if(b instanceof Uint8Array)return P.om(!1,b,c,d)
return},
om:function(a,b,c,d){var u,t,s=$.ng()
if(s==null)return
u=0===c
if(u&&!0)return P.lg(s,b)
t=b.length
d=P.bI(c,d,t)
if(u&&d===t)return P.lg(s,b)
return P.lg(s,b.subarray(c,d))},
lg:function(a,b){if(P.oo(b))return
return P.op(a,b)},
op:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aj(t)}return},
oo:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
on:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aj(t)}return},
mG:function(a,b,c){var u,t,s
for(u=J.dj(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.ai()
if((s&127)!==s)return t-b}return c-b},
lL:function(a,b,c,d,e,f){if(C.d.be(f,4)!==0)throw H.e(P.a4("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.e(P.a4("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.e(P.a4("Invalid base64 padding, more than two '=' characters",a,b))},
ft:function ft(){},
fu:function fu(){},
bU:function bU(){},
bv:function bv(){},
fR:function fR(){},
h6:function h6(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
h5:function h5(a){this.a=a},
j8:function j8(){},
ja:function ja(){},
ke:function ke(a){this.b=0
this.c=a},
j9:function j9(a){this.a=a},
kd:function kd(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fi:function(a,b,c){var u=H.o6(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.e(P.a4(a,null,null))},
nH:function(a){if(a instanceof H.cs)return a.i(0)
return"Instance of '"+H.i(H.cO(a))+"'"},
nS:function(a,b,c){var u,t=J.nM(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.k(t,u,b)
return H.n(t,"$ib",[c],"$ab")},
lW:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.br(a);u.A();)C.a.h(s,H.E(u.gK(u),c))
if(b)return s
return H.n(J.l5(s),"$ib",t,"$ab")},
cU:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.n(a,"$ib4",[P.l],"$ab4")
u=a.length
c=P.bI(b,c,u)
return H.m6(b>0||c<u?C.a.ev(a,b,c):a)}if(!!J.V(a).$icK)return H.o8(a,b,P.bI(b,c,a.length))
return P.og(a,b,c)},
og:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.e(P.ah(b,0,J.aC(a),q,q))
u=c==null
if(!u&&c<b)throw H.e(P.ah(c,b,J.aC(a),q,q))
t=J.br(a)
for(s=0;s<b;++s)if(!t.A())throw H.e(P.ah(b,0,s,q,q))
r=[]
if(u)for(;t.A();)r.push(t.gK(t))
else for(s=b;s<c;++s){if(!t.A())throw H.e(P.ah(c,b,s,q,q))
r.push(t.gK(t))}return H.m6(r)},
oa:function(a){return new H.hb(a,H.nN(a,!1,!0,!1,!1,!1))},
mc:function(a,b,c){var u=J.br(b)
if(!u.A())return a
if(c.length===0){do a+=H.i(u.gK(u))
while(u.A())}else{a+=H.i(u.gK(u))
for(;u.A();)a=a+c+H.i(u.gK(u))}return a},
mi:function(){var u=H.nZ()
if(u!=null)return P.ok(u)
throw H.e(P.I("'Uri.base' is not supported"))},
f4:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.nm().b
if(typeof b!=="string")H.A(H.aZ(b))
u=u.test(b)}else u=!1
if(u)return b
H.E(b,H.aq(c,"bU",0))
t=c.gil().c8(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c1(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nE:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nF:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dz:function(a){if(a>=10)return""+a
return"0"+a},
lQ:function(a){return new P.bw(1000*a)},
dE:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ar(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nH(a)},
fm:function(a){return new P.aL(!1,null,null,a)},
kY:function(a,b,c){return new P.aL(!0,a,b,c)},
dY:function(a,b){return new P.c2(null,null,!0,a,b,"Value not in range")},
ah:function(a,b,c,d,e){return new P.c2(b,c,!0,a,d,"Invalid value")},
bI:function(a,b,c){if(0>a||a>c)throw H.e(P.ah(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.e(P.ah(b,a,c,"end",null))
return b}return c},
m7:function(a,b){if(typeof a!=="number")return a.R()
if(a<0)throw H.e(P.ah(a,0,null,b,null))},
Z:function(a,b,c,d,e){var u=H.ad(e==null?J.aC(b):e)
return new P.h7(u,!0,a,c,"Index out of range")},
I:function(a){return new P.j1(a)},
j_:function(a){return new P.iZ(a)},
mb:function(a){return new P.cS(a)},
bi:function(a){return new P.fA(a)},
C:function(a){return new P.et(a)},
a4:function(a,b,c){return new P.h0(a,b,c)},
nT:function(a,b,c){var u,t=H.d([],[c])
C.a.sn(t,a)
for(u=0;u<a;++u)C.a.k(t,u,b.$1(u))
return t},
lB:function(a){H.pE(a)},
ok:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.D(a,4)^58)*3|C.b.D(a,0)^100|C.b.D(a,1)^97|C.b.D(a,2)^116|C.b.D(a,3)^97)>>>0
if(u===0)return P.mh(e<e?C.b.t(a,0,e):a,5,f).gen()
else if(u===32)return P.mh(C.b.t(a,5,e),0,f).gen()}t=new Array(8)
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
if(P.mF(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.ja()
if(r>=0)if(P.mF(a,0,r,20,s)===20)s[7]=r
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
l=!1}else{if(!(n<e&&n===o+2&&C.b.a4(a,"..",o)))j=n>o+2&&C.b.a4(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.a4(a,"file",0)){if(q<=0){if(!C.b.a4(a,"/",o)){i="file:///"
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
a=C.b.aV(a,o,n,"/");++e
n=h}k="file"}else if(C.b.a4(a,"http",0)){if(t&&p+3===o&&C.b.a4(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aV(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.a4(a,"https",0)){if(t&&p+4===o&&C.b.a4(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aV(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.t(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jY(a,r,q,p,o,n,m,k)}return P.oB(a,0,e,r,q,p,o,n,m,k)},
mk:function(a){var u=P.h
return C.a.ir(H.d(a.split("&"),[u]),P.l9(u,u),new P.j6(C.h),[P.y,P.h,P.h])},
oj:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.j3(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.W(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fi(C.b.t(a,s,t),n,n)
if(typeof p!=="number")return p.a0()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.c(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fi(C.b.t(a,s,c),n,n)
if(typeof p!=="number")return p.a0()
if(p>255)k.$2(l,s)
if(r>=u)return H.c(j,r)
j[r]=p
return j},
mj:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.j4(a),d=new P.j5(e,a)
if(a.length<2)e.$1("address is too short")
u=H.d([],[P.l])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.b.W(a,t)
if(p===58){if(t===b){++t
if(C.b.W(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
C.a.h(u,-1)
r=!0}else C.a.h(u,d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.a.gaw(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)C.a.h(u,d.$2(s,c))
else{m=P.oj(a,s,c)
C.a.h(u,(m[0]<<8|m[1])>>>0)
C.a.h(u,(m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.c(l,i)
l[i]=0
f=i+1
if(f>=k)return H.c(l,f)
l[f]=0
i+=2}else{f=C.d.aP(h,8)
if(i<0||i>=k)return H.c(l,i)
l[i]=f
f=i+1
if(f>=k)return H.c(l,f)
l[f]=h&255
i+=2}}return l},
oB:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oJ(a,b,d)
else{if(d===b)P.cd(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oK(a,u,e-1):""
s=P.oG(a,e,f,!1)
if(typeof f!=="number")return f.B()
r=f+1
if(typeof g!=="number")return H.D(g)
q=r<g?P.oI(P.fi(C.b.t(a,r,g),new P.k9(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oH(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.R()
o=h<i?P.ll(a,h+1,i,n):n
return new P.cc(j,t,s,q,p,o,i<c?P.oF(a,i+1,c):n)},
mw:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cd:function(a,b,c){throw H.e(P.a4(c,a,b))},
oI:function(a,b){if(a!=null&&a===P.mw(b))return
return a},
oG:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.b.W(a,b)===91){if(typeof c!=="number")return c.L()
u=c-1
if(C.b.W(a,u)!==93)P.cd(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.oD(a,t,u)
if(typeof s!=="number")return s.R()
if(s<u){r=s+1
q=P.mB(a,C.b.a4(a,"25",r)?s+3:r,u,"%25")}else q=""
P.mj(a,t,s)
return C.b.t(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.D(c)
p=b
for(;p<c;++p)if(C.b.W(a,p)===58){s=C.b.bo(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.mB(a,C.b.a4(a,"25",r)?s+3:r,c,"%25")}else q=""
P.mj(a,b,s)
return"["+C.b.t(a,b,s)+q+"]"}return P.oM(a,b,c)},
oD:function(a,b,c){var u,t=C.b.bo(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.D(c)
u=t<c}else u=!1
return u?t:c},
mB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.a6(d):null
if(typeof c!=="number")return H.D(c)
u=b
t=u
s=!0
for(;u<c;){r=C.b.W(a,u)
if(r===37){q=P.lm(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.a6("")
o=l.a+=C.b.t(a,t,u)
if(p)q=C.b.t(a,u,u+3)
else if(q==="%")P.cd(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.c(C.i,p)
p=(C.i[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.a6("")
if(t<u){l.a+=C.b.t(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.b.W(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.a6("")
l.a+=C.b.t(a,t,u)
l.a+=P.lk(r)
u+=m
t=u}}}if(l==null)return C.b.t(a,b,c)
if(t<c)l.a+=C.b.t(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
oM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.D(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.W(a,u)
if(q===37){p=P.lm(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.a6("")
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
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.a6("")
if(t<u){s.a+=C.b.t(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.c(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.cd(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.W(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.a6("")
n=C.b.t(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.lk(q)
u+=l
t=u}}}}if(s==null)return C.b.t(a,b,c)
if(t<c){n=C.b.t(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oJ:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.my(C.b.D(a,b)))P.cd(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.D(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.c(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cd(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.t(a,b,c)
return P.oC(t?a.toLowerCase():a)},
oC:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oK:function(a,b,c){return P.de(a,b,c,C.V,!1)},
oH:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.de(a,b,c,C.A,!0):C.j.jy(d,new P.ka(),P.h).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a1(u,"/"))u="/"+u
return P.oL(u,e,f)},
oL:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a1(a,"/"))return P.oN(a,!u||c)
return P.oO(a)},
ll:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.e(P.fm("Both query and queryParameters specified"))
return P.de(a,b,c,C.l,!0)}if(d==null)return
u=new P.a6("")
t.a=""
d.H(0,new P.kb(new P.kc(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oF:function(a,b,c){return P.de(a,b,c,C.l,!0)},
lm:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.W(a,b+1)
t=C.b.W(a,p)
s=H.kA(u)
r=H.kA(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.aP(q,4)
if(p>=8)return H.c(C.i,p)
p=(C.i[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c1(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.t(a,b,b+3).toUpperCase()
return},
lk:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
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
for(q=0;--r,r>=0;s=128){p=C.d.hI(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.D(o,p>>>4))
C.a.k(t,q+2,C.b.D(o,p&15))
q+=3}}return P.cU(t,0,null)},
de:function(a,b,c,d,e){var u=P.mA(a,b,c,d,e)
return u==null?C.b.t(a,b,c):u},
mA:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.R()
if(typeof c!=="number")return H.D(c)
if(!(o<c))break
c$0:{u=C.b.W(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.c(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.lm(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.c(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.cd(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.b.W(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.lk(u)}}if(m==null)m=new P.a6("")
m.a+=C.b.t(a,n,o)
m.a+=H.i(s)
if(typeof r!=="number")return H.D(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.R()
if(n<c)m.a+=C.b.t(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
mz:function(a){if(C.b.a1(a,"."))return!0
return C.b.dU(a,"/.")!==-1},
oO:function(a){var u,t,s,r,q,p,o
if(!P.mz(a))return a
u=H.d([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.Q(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.c(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oN:function(a,b){var u,t,s,r,q,p
if(!P.mz(a))return!b?P.mx(a):a
u=H.d([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaw(u)!==".."){if(0>=u.length)return H.c(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.c(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaw(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.c(u,0)
C.a.k(u,0,P.mx(u[0]))}return C.a.m(u,"/")},
mx:function(a){var u,t,s,r=a.length
if(r>=2&&P.my(J.no(a,0)))for(u=1;u<r;++u){t=C.b.D(a,u)
if(t===58)return C.b.t(a,0,u)+"%3A"+C.b.a9(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.c(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oE:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.D(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.e(P.fm("Invalid URL encoding"))}}return u},
ln:function(a,b,c,d,e){var u,t,s,r,q=b
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
if(t>127)throw H.e(P.fm("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.e(P.fm("Truncated URI"))
C.a.h(r,P.oE(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.n(r,"$ib",[P.l],"$ab")
return new P.j9(!1).c8(r)},
my:function(a){var u=a|32
return 97<=u&&u<=122},
mh:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.l])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.D(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.e(P.a4(m,a,t))}}if(s<0&&t>b)throw H.e(P.a4(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.D(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaw(l)
if(r!==44||t!==p+7||!C.b.a4(a,"base64",p+1))throw H.e(P.a4("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.iD(0,a,o,u)
else{n=P.mA(a,o,u,C.l,!0)
if(n!=null)a=C.b.aV(a,o,u,n)}return new P.j2(a,l,c)},
oQ:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nT(22,new P.kk(),P.R),n=new P.kj(o),m=new P.kl(),l=new P.km(),k=H.f(n.$2(0,225),"$iR")
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
mF:function(a,b,c,d,e){var u,t,s,r,q=$.nn()
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
bw:function bw(a){this.a=a},
fN:function fN(){},
fO:function fO(){},
bx:function bx(){},
fn:function fn(){},
dV:function dV(){},
aL:function aL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c2:function c2(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h7:function h7(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
j1:function j1(a){this.a=a},
iZ:function iZ(a){this.a=a},
cS:function cS(a){this.a=a},
fA:function fA(a){this.a=a},
hZ:function hZ(){},
e4:function e4(){},
fH:function fH(a){this.a=a},
et:function et(a){this.a=a},
h0:function h0(a,b,c){this.a=a
this.b=b
this.c=c},
by:function by(){},
l:function l(){},
k:function k(){},
b3:function b3(){},
b:function b(){},
y:function y(){},
P:function P(){},
a9:function a9(){},
U:function U(){},
au:function au(){},
h:function h(){},
a6:function a6(a){this.a=a},
j6:function j6(a){this.a=a},
j3:function j3(a){this.a=a},
j4:function j4(a){this.a=a},
j5:function j5(a,b){this.a=a
this.b=b},
cc:function cc(a,b,c,d,e,f,g){var _=this
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
j2:function j2(a,b,c){this.a=a
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
u=P.l9(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r){q=H.O(t[r])
u.k(0,q,a[q])}return u},
pl:function(a){var u={}
a.H(0,new P.ks(u))
return u},
k_:function k_(){},
k1:function k1(a,b){this.a=a
this.b=b},
ks:function ks(a){this.a=a},
k0:function k0(a,b){this.a=a
this.b=b},
fX:function fX(a,b){this.a=a
this.b=b},
fY:function fY(){},
fZ:function fZ(){},
jN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ox:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jP:function jP(){},
al:function al(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b6:function b6(){},
he:function he(){},
b9:function b9(){},
hX:function hX(){},
i3:function i3(){},
cP:function cP(){},
iA:function iA(){},
p:function p(){},
bc:function bc(){},
iN:function iN(){},
ey:function ey(){},
ez:function ez(){},
eJ:function eJ(){},
eK:function eK(){},
eV:function eV(){},
eW:function eW(){},
f1:function f1(){},
f2:function f2(){},
R:function R(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(a){this.a=a},
fs:function fs(){},
bR:function bR(){},
hY:function hY(){},
em:function em(){},
ds:function ds(){},
dX:function dX(){},
c3:function c3(){},
e0:function e0(){},
ec:function ec(){},
is:function is(){},
eR:function eR(){},
eS:function eS(){}},W={
lK:function(){var u=document.createElement("a")
return u},
lO:function(){var u=document.createElement("canvas")
return u},
nG:function(a,b,c){var u=document.body,t=(u&&C.t).ae(u,a,b,c)
t.toString
u=W.G
u=new H.d1(new W.ap(t),H.o(new W.fQ(),{func:1,ret:P.S,args:[u]}),[u])
return H.f(u.gaI(u),"$iT")},
lT:function(a){H.f(a,"$ij")
return"wheel"},
cv:function(a){var u,t,s,r="element tag unavailable"
try{u=J.cj(a)
t=u.geg(a)
if(typeof t==="string")r=u.geg(a)}catch(s){H.aj(s)}return r},
nJ:function(a){var u,t=document.createElement("input"),s=H.f(t,"$icB")
try{s.type=a}catch(u){H.aj(u)}return s},
jM:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mu:function(a,b,c,d){var u=W.jM(W.jM(W.jM(W.jM(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ac:function(a,b,c,d,e){var u=W.mJ(new W.jB(c),W.m)
if(u!=null&&!0)J.nq(a,b,u,!1)
return new W.jA(a,b,u,!1,[e])},
mt:function(a){var u=W.lK(),t=window.location
u=new W.bM(new W.jU(u,t))
u.eI(a)
return u},
ov:function(a,b,c,d){H.f(a,"$iT")
H.O(b)
H.O(c)
H.f(d,"$ibM")
return!0},
ow:function(a,b,c,d){var u,t,s
H.f(a,"$iT")
H.O(b)
H.O(c)
u=H.f(d,"$ibM").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mv:function(){var u=P.h,t=P.lV(C.p,u),s=H.q(C.p,0),r=H.o(new W.k5(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.k4(t,P.dL(u),P.dL(u),P.dL(u),null)
t.eR(null,new H.hr(C.p,r,[s,u]),q,null)
return t},
mJ:function(a,b){var u=$.a1
if(u===C.f)return a
return u.du(a,b)},
v:function v(){},
fk:function fk(){},
dq:function dq(){},
fl:function fl(){},
cp:function cp(){},
bS:function bS(){},
bs:function bs(){},
bT:function bT(){},
bt:function bt(){},
ct:function ct(){},
fD:function fD(){},
W:function W(){},
cu:function cu(){},
fE:function fE(){},
b1:function b1(){},
b2:function b2(){},
fF:function fF(){},
fG:function fG(){},
fJ:function fJ(){},
aD:function aD(){},
fK:function fK(){},
dB:function dB(){},
dC:function dC(){},
fL:function fL(){},
fM:function fM(){},
jv:function jv(a,b){this.a=a
this.b=b},
T:function T(){},
fQ:function fQ(){},
m:function m(){},
j:function j(){},
aE:function aE(){},
cx:function cx(){},
fW:function fW(){},
h_:function h_(){},
aN:function aN(){},
h4:function h4(){},
bX:function bX(){},
cA:function cA(){},
cB:function cB(){},
b5:function b5(){},
dM:function dM(){},
hH:function hH(){},
cF:function cF(){},
hI:function hI(){},
hJ:function hJ(a){this.a=a},
hK:function hK(){},
hL:function hL(a){this.a=a},
aO:function aO(){},
hM:function hM(){},
ag:function ag(){},
ap:function ap(a){this.a=a},
G:function G(){},
cL:function cL(){},
aP:function aP(){},
i1:function i1(){},
ib:function ib(){},
ic:function ic(a){this.a=a},
ie:function ie(){},
aR:function aR(){},
iq:function iq(){},
aS:function aS(){},
ir:function ir(){},
aT:function aT(){},
iu:function iu(){},
iv:function iv(a){this.a=a},
aF:function aF(){},
ba:function ba(){},
e5:function e5(){},
iB:function iB(){},
iC:function iC(){},
cV:function cV(){},
aV:function aV(){},
aG:function aG(){},
iE:function iE(){},
iF:function iF(){},
iH:function iH(){},
aW:function aW(){},
aX:function aX(){},
iL:function iL(){},
iM:function iM(){},
bK:function bK(){},
j7:function j7(){},
jm:function jm(){},
be:function be(){},
d2:function d2(){},
d3:function d3(){},
jw:function jw(){},
eo:function eo(){},
jL:function jL(){},
eG:function eG(){},
jZ:function jZ(){},
k2:function k2(){},
ju:function ju(){},
jy:function jy(a){this.a=a},
jz:function jz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
li:function li(a,b,c,d){var _=this
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
bM:function bM(a){this.a=a},
H:function H(){},
dU:function dU(a){this.a=a},
hU:function hU(a){this.a=a},
hT:function hT(a,b,c){this.a=a
this.b=b
this.c=c},
eO:function eO(){},
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
dF:function dF(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aA:function aA(){},
jU:function jU(a,b){this.a=a
this.b=b},
f5:function f5(a){this.a=a},
kf:function kf(a){this.a=a},
en:function en(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eH:function eH(){},
eI:function eI(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
da:function da(){},
db:function db(){},
eP:function eP(){},
eQ:function eQ(){},
eU:function eU(){},
eX:function eX(){},
eY:function eY(){},
dc:function dc(){},
dd:function dd(){},
f_:function f_(){},
f0:function f0(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){}},O={
l_:function(a){var u=new O.a3([a])
u.bB(a)
return u},
a3:function a3(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cE:function cE(){this.b=this.a=null},
lX:function(){var u,t,s=new O.dP()
s.sf2(O.l_(V.ak))
s.e.bf(s.gfC(),s.gfE())
u=new O.b7(s,"emission")
u.c=new A.an(!1,!1,!1)
u.f=new V.a7(0,0,0)
s.f=u
u=new O.b7(s,"ambient")
u.c=new A.an(!1,!1,!1)
u.f=new V.a7(0,0,0)
s.r=u
u=new O.b7(s,"diffuse")
u.c=new A.an(!1,!1,!1)
u.f=new V.a7(0,0,0)
s.x=u
u=new O.b7(s,"invDiffuse")
u.c=new A.an(!1,!1,!1)
u.f=new V.a7(0,0,0)
s.y=u
u=new O.hy(s,"specular")
u.c=new A.an(!1,!1,!1)
u.f=new V.a7(0,0,0)
u.ch=100
s.z=u
u=new O.hu(s,"bump")
u.c=new A.an(!1,!1,!1)
s.Q=u
s.ch=null
u=new O.b7(s,"reflect")
u.c=new A.an(!1,!1,!1)
u.f=new V.a7(0,0,0)
s.cx=u
u=new O.hx(s,"refract")
u.c=new A.an(!1,!1,!1)
u.f=new V.a7(0,0,0)
u.ch=1
s.cy=u
u=new O.ht(s,"alpha")
u.c=new A.an(!1,!1,!1)
u.f=1
s.db=u
u=new D.dK()
u.bB(D.ae)
u.seK(H.d([],[D.dA]))
u.shm(H.d([],[D.bE]))
u.seN(H.d([],[D.e3]))
u.y=u.x=null
u.cD(u.gfA(),u.gha(),u.ghe())
s.dx=u
t=new O.hw()
t.b=new V.b0(0,0,0,0)
t.c=1
t.d=10
t.e=!1
s.dy=t
t=u.x
u=t==null?u.x=D.Y():t
u.h(0,s.ghx())
u=s.dx
t=u.y
u=t==null?u.y=D.Y():t
u.h(0,s.geS())
s.fr=null
return s},
dP:function dP(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hz:function hz(a,b){this.a=a
this.b=b},
hA:function hA(){},
hB:function hB(a,b){this.a=a
this.b=b},
hC:function hC(){},
hD:function hD(a,b){this.a=a
this.b=b},
hE:function hE(){},
ht:function ht(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dQ:function dQ(){},
hu:function hu(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b7:function b7(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hw:function hw(){var _=this
_.e=_.d=_.c=_.b=null},
hx:function hx(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hy:function hy(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bJ:function bJ(){}},E={
l2:function(){var u=new E.ao()
u.a=""
u.b=!0
u.seH(0,O.l_(E.ao))
u.y.bf(u.giE(),u.giH())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sac(0,null)
u.sbc(null)
u.saF(null)
return u},
ob:function(a,b){var u=new E.i7(a)
u.eD(a,b)
return u},
oh:function(a,b,c,d,e){var u,t,s=J.V(a)
if(!!s.$ibT)return E.md(a,!0,!0,!0,!1)
u=W.lO()
t=u.style
t.width="100%"
t.height="100%"
s.gc7(a).h(0,u)
return E.md(u,!0,!0,!0,!1)},
md:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.e8(),j=H.f(C.n.er(a,"webgl2",P.nR(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic3")
if(j==null)H.A(P.C("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.ob(j,a)
H.ad(j.getParameter(3379))
H.ad(j.getParameter(34076))
u=new X.ef(a)
t=new X.hd()
t.c=new X.az(!1,!1,!1)
t.shp(P.dL(P.l))
u.b=t
t=new X.hN(u)
t.f=0
t.r=V.bG()
t.x=V.bG()
t.ch=t.Q=1
u.c=t
t=new X.hl(u)
t.r=0
t.x=V.bG()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iK(u)
t.f=V.bG()
t.r=V.bG()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfe(H.d([],[[P.cT,P.U]]))
t=u.z
s=document
r=W.ag
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ac(s,"contextmenu",H.o(u.gfM(),q),!1,r))
t=u.z
p=W.m
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ac(a,"focus",H.o(u.gfS(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ac(a,"blur",H.o(u.gfG(),o),!1,p))
t=u.z
n=W.b5
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ac(s,"keyup",H.o(u.gfW(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ac(s,"keydown",H.o(u.gfU(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ac(a,"mousedown",H.o(u.gh_(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ac(a,"mouseup",H.o(u.gh3(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ac(a,l,H.o(u.gh1(),q),!1,r))
n=u.z
W.lT(a)
m=W.be;(n&&C.a).h(n,W.ac(a,H.O(W.lT(a)),H.o(u.gh5(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ac(s,l,H.o(u.gfO(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ac(s,"mouseup",H.o(u.gfQ(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ac(s,"pointerlockchange",H.o(u.gh7(),o),!1,p))
p=u.z
o=W.aX
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ac(a,"touchstart",H.o(u.ghk(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ac(a,"touchend",H.o(u.ghg(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ac(a,"touchmove",H.o(u.ghi(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.ax(Date.now(),!1)
k.cy=0
k.de()
return k},
fv:function fv(){},
ao:function ao(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i7:function i7(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i8:function i8(a){this.a=a},
i9:function i9(a){this.a=a},
ia:function ia(a){this.a=a},
e8:function e8(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=null},
iG:function iG(a){this.a=a}},Z={
lh:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.dg(c)),35044)
a.bindBuffer(b,null)
return new Z.ek(b,u)},
aI:function(a){return new Z.bL(a)},
ek:function ek(a,b){this.a=a
this.b=b},
dt:function dt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jn:function jn(a){this.a=a},
du:function du(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
bL:function bL(a){this.a=a}},D={
Y:function(){var u=new D.bV()
u.saj(null)
u.saN(null)
u.c=null
u.d=0
return u},
fy:function fy(){},
bV:function bV(){var _=this
_.d=_.c=_.b=_.a=null},
fT:function fT(a){this.a=a},
fU:function fU(a){this.a=a},
B:function B(){this.b=null},
bY:function bY(a){this.b=null
this.$ti=a},
bZ:function bZ(a){this.b=null
this.$ti=a},
J:function J(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
dA:function dA(){},
ae:function ae(){},
dK:function dK(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
bE:function bE(){var _=this
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e3:function e3(){}},X={dv:function dv(a,b){this.a=a
this.b=b},dJ:function dJ(a,b){this.a=a
this.b=b},hd:function hd(){var _=this
_.d=_.c=_.b=_.a=null},dN:function dN(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hl:function hl(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},az:function az(a,b,c){this.a=a
this.b=b
this.c=c},bl:function bl(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hN:function hN(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cG:function cG(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},i2:function i2(){},ea:function ea(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iK:function iK(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ef:function ef(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nI:function(a){var u=new X.h1(),t=new V.b0(0,0,0,1)
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
dw:function dw(){},
h1:function h1(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dW:function dW(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
e6:function e6(){}},V={
kV:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.be(a-b,u)
return(a<0?a+u:a)+b},
N:function(a,b,c){if(a==null)return C.b.ag("null",c)
return C.b.ag(C.e.ej(Math.abs(a-0)<$.K().a?0:a,b),c+b+1)},
ci:function(a,b,c){var u,t,s,r,q,p=H.d([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.u)(a),++s){r=V.N(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.c(p,q)
C.a.k(p,q,C.b.ag(p[q],t))}return p},
bC:function(){var u=$.hG
return u==null?$.hG=V.b8(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b8:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ak(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
m0:function(a,b,c){return V.b8(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lb:function(a,b,c,d){return V.b8(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lY:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b8(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
lZ:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b8(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
m_:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b8(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
bG:function(){var u=$.m4
return u==null?$.m4=new V.ab(0,0):u},
nX:function(){var u=$.cM
return u==null?$.cM=new V.a5(0,0,0):u},
m8:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dZ(a,b,c,d)},
d0:function(){var u=$.mq
return u==null?$.mq=new V.L(0,0,0):u},
a7:function a7(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fS:function fS(a){this.a=a},
hF:function hF(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ak:function ak(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a5:function a5(a,b,c){this.a=a
this.b=b
this.c=c},
bH:function bH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dZ:function dZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
X:function X(a,b){this.a=a
this.b=b},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
ca:function ca(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a_:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.e(P.C("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.D(a,0)
t=C.b.D(b,0)
s=new V.i6()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
w:function(a){var u=new V.ig()
u.eE(a)
return u},
iJ:function(){var u=new V.iI(),t=P.h
u.shL(new H.a2([t,V.cR]))
u.shN(new H.a2([t,V.cW]))
u.c=null
return u},
bh:function bh(){},
ay:function ay(){},
dO:function dO(){},
at:function at(){this.a=null},
i6:function i6(){this.b=this.a=null},
ig:function ig(){this.a=null},
cR:function cR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e9:function e9(a,b,c){this.a=a
this.b=b
this.c=c},
cW:function cW(a){this.b=a
this.c=null},
iI:function iI(){this.c=this.b=this.a=null},
cX:function cX(a){this.b=a
this.a=this.c=null},
pH:function(a){P.oi(C.P,new V.kP(a))},
od:function(a){var u=new V.ik()
u.eG(a,!0)
return u},
bu:function bu(){},
kP:function kP(a){this.a=a},
fI:function fI(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h2:function h2(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h3:function h3(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i0:function i0(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i4:function i4(a){this.a=a
this.c=null},
i5:function i5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ik:function ik(){this.b=this.a=null},
im:function im(a){this.a=a},
il:function il(a){this.a=a},
io:function io(a){this.a=a}},U={
l0:function(){var u=new U.fz()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
dy:function(a){var u=new U.dx()
if(a==null)a=V.bC()
if(null!=a)u.a=a
return u},
l3:function(){var u=new U.cz()
u.bB(U.aa)
u.bf(u.geO(),u.ghc())
u.e=null
u.f=V.bC()
u.r=0
return u},
fz:function fz(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dx:function dx(){this.b=this.a=null},
cz:function cz(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
aa:function aa(){},
e_:function e_(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eg:function eg(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
eh:function eh(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ei:function ei(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ls:function(a,b,c,d,e,f,g,h){var u,t,s,r,q=c>1?1:c,p=d>1?1:d,o=e>1?1:e,n=new V.a7(q,p,o),m=U.l3()
m.h(0,U.dy(V.m0(0,0,2)))
o=new U.e_()
o.r=o.f=o.e=o.d=o.c=o.b=o.a=0
o.sep(0)
o.se7(0,0)
o.see(0)
q=o.d
if(!(Math.abs(q-f)<$.K().a)){o.d=f
q=new D.J("deltaYaw",q,f,[P.t])
q.b=!0
o.G(q)}q=o.e
if(!(Math.abs(q-g)<$.K().a)){o.e=g
q=new D.J("deltaPitch",q,g,[P.t])
q.b=!0
o.G(q)}q=o.f
if(!(Math.abs(q-h)<$.K().a)){o.f=h
q=new D.J("deltaRoll",q,h,[P.t])
q.b=!0
o.G(q)}m.h(0,o)
u=E.l2()
q=U.l3()
q.h(0,U.dy(V.lb(0.1,0.1,0.1,1)))
q.h(0,m)
u.saF(q)
u.sac(0,F.n1(8,8))
q=O.lX()
q.f.saS(0,n)
u.sbc(q)
t=new D.bE()
t.c=new V.a7(1,1,1)
t.r=1
t.y=t.x=0
t.z=!0
t.a=V.bC()
s=t.b
t.b=m
m.gw().h(0,t.geL())
q=new D.J("mover",s,t.b,[U.aa])
q.b=!0
t.aa(q)
if(!t.c.q(0,n)){s=t.c
t.c=n
q=new D.J("color",s,n,[V.a7])
q.b=!0
t.aa(q)}q=$.mr
if(q==null){q=new V.ca(1,0.00390625,0.0000152587890625,0)
$.mr=q
r=q}else r=q
if(!J.Q(t.f,r)){s=t.f
t.f=r
q=new D.J("shadowAdjust",s,r,[V.ca])
q.b=!0
t.aa(q)}q=t.r
if(!(Math.abs(q-1)<$.K().a)){t.r=1
q=new D.J("attenuation0",q,1,[P.t])
q.b=!0
t.aa(q)}q=t.x
if(!(Math.abs(q-0.5)<$.K().a)){t.x=0.5
q=new D.J("attenuation1",q,0.5,[P.t])
q.b=!0
t.aa(q)}q=t.y
if(!(Math.abs(q-0.15)<$.K().a)){t.y=0.15
q=new D.J("attenuation2",q,0.15,[P.t])
q.b=!0
t.aa(q)}a.dx.h(0,t)
b.e.h(0,u)},
mW:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="testCanvas",d=null,c="modifiers",b=V.od("Test 021"),a=W.lO()
a.className="pageLargeCanvas"
a.id=e
b.a.appendChild(a)
u=[P.h]
b.dr(H.d(["Test of the Material Lighting shader with multiple moving point lights. ","Emissive spheres are added at the lights sources."],u))
b.hX(H.d(["shapes"],u))
b.dr(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(e)
if(t==null)H.A(P.C("Failed to find an element with the identifier, testCanvas."))
s=E.oh(t,!0,!0,!0,!1)
r=E.l2()
r.saF(U.dy(V.bC()))
r.sac(0,F.n3())
q=E.l2()
q.saF(U.dy(V.lb(3,3,3,1)))
p=F.lx(1,d,d,1)
p.ci()
q.sac(0,p)
o=U.l3()
p=s.r
n=new U.eh()
m=U.l0()
m.scB(0,!0)
m.scn(6.283185307179586)
m.scp(0)
m.sZ(0,0)
m.sco(100)
m.sV(0)
m.sca(0.5)
n.b=m
l=n.gaM()
m.gw().h(0,l)
m=U.l0()
m.scB(0,!0)
m.scn(6.283185307179586)
m.scp(0)
m.sZ(0,0)
m.sco(100)
m.sV(0)
m.sca(0.5)
n.c=m
m.gw().h(0,l)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
k=new X.az(!1,!1,!1)
j=n.d
n.d=k
m=[X.az]
l=new D.J(c,j,k,m)
l.b=!0
n.G(l)
l=n.f
if(l!==!1){n.f=!1
l=new D.J("invertX",l,!1,[P.S])
l.b=!0
n.G(l)}l=n.r
if(l!==!1){n.r=!1
l=new D.J("invertY",l,!1,[P.S])
l.b=!0
n.G(l)}n.b1(p)
o.h(0,n)
p=s.r
n=new U.eg()
l=U.l0()
l.scB(0,!0)
l.scn(6.283185307179586)
l.scp(0)
l.sZ(0,0)
l.sco(100)
l.sV(0)
l.sca(0.2)
n.b=l
l.gw().h(0,n.gaM())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
k=new X.az(!0,!1,!1)
j=n.c
n.c=k
l=new D.J(c,j,k,m)
l.b=!0
n.G(l)
n.b1(p)
o.h(0,n)
p=s.r
n=new U.ei()
n.c=0.01
n.e=n.d=0
k=new X.az(!1,!1,!1)
n.b=k
m=new D.J(c,d,k,m)
m.b=!0
n.G(m)
n.b1(p)
o.h(0,n)
o.h(0,U.dy(V.m0(0,0,5)))
i=O.lX()
p=i.r
p.saS(0,new V.a7(0.15,0.15,0.15))
p=i.x
p.saS(0,new V.a7(0.4,0.4,0.4))
p=i.z
p.saS(0,new V.a7(0.3,0.3,0.3))
p=i.z
p.dg(new A.an(!0,!1,!1))
p.dh(100)
h=new M.dD()
h.a=!0
h.sf5(0,O.l_(E.ao))
h.e.bf(h.gfI(),h.gfK())
h.y=h.x=h.r=h.f=null
g=X.nI(d)
f=new X.dW()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.saF(d)
p=f.c
if(!(Math.abs(p-1.0471975511965976)<$.K().a)){f.c=1.0471975511965976
p=new D.J("fov",p,1.0471975511965976,[P.t])
p.b=!0
f.aK(p)}p=f.d
if(!(Math.abs(p-0.1)<$.K().a)){f.d=0.1
p=new D.J("near",p,0.1,[P.t])
p.b=!0
f.aK(p)}p=f.e
if(!(Math.abs(p-2000)<$.K().a)){f.e=2000
p=new D.J("far",p,2000,[P.t])
p.b=!0
f.aK(p)}p=h.b
if(p!==f){if(p!=null)p.gw().M(0,h.gar())
j=h.b
h.b=f
f.gw().h(0,h.gar())
p=new D.J("camera",j,h.b,[X.dw])
p.b=!0
h.ay(p)}p=h.c
if(p!==g){if(p!=null)p.gw().M(0,h.gar())
j=h.c
h.c=g
g.gw().h(0,h.gar())
p=new D.J("target",j,h.c,[X.e6])
p.b=!0
h.ay(p)}h.sbc(d)
h.sbc(i)
h.e.h(0,q)
h.e.h(0,r)
h.b.saF(o)
p=s.d
if(p!==h){if(p!=null)p.gw().M(0,s.gcJ())
s.d=h
h.gw().h(0,s.gcJ())
s.cK()}U.ls(i,h,1,0,0,0.3,0,0)
U.ls(i,h,0,1,0,0,0.4,0)
U.ls(i,h,0,0,1,0.5,0.5,0)
p=new V.i4("shapes")
u=u.getElementById("shapes")
p.c=u
if(u==null)H.A("Failed to find shapes for RadioGroup")
p.b0(0,"Cube",new U.kG(r))
p.b0(0,"Cylinder",new U.kH(r))
p.b0(0,"Cone",new U.kI(r))
p.b0(0,"Sphere",new U.kJ(r))
p.dn(0,"Toroid",new U.kK(r),!0)
p.b0(0,"Knot",new U.kL(r))
u=s.z
if(u==null)u=s.z=D.Y()
p={func:1,ret:-1,args:[D.B]}
n=H.o(new U.kM(b,i),p)
if(u.b==null)u.saN(H.d([],[p]))
u=u.b;(u&&C.a).h(u,n)
V.pH(s)},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
kM:function kM(a,b){this.a=a
this.b=b}},M={dD:function dD(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nU:function(a,b){var u=a.b4,t=new A.hs(b,u)
t.eF(b,u)
t.eC(a,b)
return t},
nV:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gap(a0)+a1.gap(a1)+a2.gap(a2)+a3.gap(a3)+a4.gap(a4)+a5.gap(a5)+a6.gap(a6)+a7.gap(a7)+a8.gap(a8)+"_"
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
g=new Z.bL(g.a|u.a)}if(j){u=$.bo()
g=new Z.bL(g.a|u.a)}if(i){u=$.bn()
g=new Z.bL(g.a|u.a)}return new A.hv(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,l,p,r,h,!0,!1,!1,o,r,m,k,j,!1,!1,i,!1,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
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
oW:function(a,b){var u,t=a.a,s=t.a
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
oT:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.ko(b,t,"ambient")
b.a+="\n"},
oU:function(a,b){var u,t=a.c
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
oX:function(a,b){var u,t=a.d
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
p2:function(a,b){var u,t=a.e
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
oZ:function(a,b){var u,t,s
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
p0:function(a,b){var u,t=a.r,s=t.a
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
p1:function(a,b){var u,t=a.x,s=t.a
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
oV:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
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
if(typeof u!=="number")return u.ai()
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
p_:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
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
if(typeof u!=="number")return u.ai()
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
p3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
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
if(typeof u!=="number")return u.ai()
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
oY:function(a,b){var u,t
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
p4:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.a6("")
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
A.oW(a,j)
A.oT(a,j)
A.oU(a,j)
A.oX(a,j)
A.p2(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.p0(a,j)
A.p1(a,j)}A.oZ(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.oV(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.p_(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.p3(a,q[o],j)
A.oY(a,j)}q=j.a+="// === Main ===\n"
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
p5:function(a,b){var u,t,s
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
p7:function(a,b){var u
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
p6:function(a,b){var u
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
p9:function(a,b){var u,t
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
pa:function(a,b){var u,t
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
p8:function(a,b){var u
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
pb:function(a,b){var u
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
le:function(a,b,c,d,e){var u=new A.iS(a,c,e)
u.f=d
u.shV(P.nS(d,0,P.l))
return u},
dr:function dr(a,b,c){this.a=a
this.b=b
this.c=c},
fo:function fo(a){this.a=a},
an:function an(a,b,c){this.a=a
this.b=b
this.c=c},
hs:function hs(a,b){var _=this
_.jk=_.jj=_.dF=_.dE=_.b4=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jx=_.jw=_.jv=_.cg=_.cf=_.ce=_.cd=_.cc=_.cb=_.ju=_.jt=_.dM=_.js=_.jr=_.dL=_.dK=_.jq=_.jp=_.dJ=_.dI=_.jo=_.jn=_.dH=_.jm=_.jl=_.dG=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aM:function aM(a,b){this.a=a
this.b=b},
aQ:function aQ(a,b){this.a=a
this.b=b},
aU:function aU(a,b){this.a=a
this.b=b},
hv:function hv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.b4=b3
_.dE=b4},
c4:function c4(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c5:function c5(a,b,c,d,e,f,g,h,i,j){var _=this
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
c8:function c8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cQ:function cQ(){},
eb:function eb(){},
iX:function iX(a){this.a=a},
aH:function aH(a,b,c){this.a=a
this.c=b
this.d=c},
iU:function iU(a,b,c){this.a=a
this.c=b
this.d=c},
iV:function iV(a,b,c){this.a=a
this.c=b
this.d=c},
iW:function iW(a,b,c){this.a=a
this.c=b
this.d=c},
iS:function iS(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ai:function ai(a,b,c){this.a=a
this.c=b
this.d=c},
iT:function iT(a,b,c){this.a=a
this.c=b
this.d=c},
a0:function a0(a,b,c){this.a=a
this.c=b
this.d=c},
cY:function cY(a,b,c){this.a=a
this.c=b
this.d=c},
iY:function iY(a,b,c){this.a=a
this.c=b
this.d=c},
cZ:function cZ(a,b,c){this.a=a
this.c=b
this.d=c},
aB:function aB(a,b,c){this.a=a
this.c=b
this.d=c},
c6:function c6(a,b,c){this.a=a
this.c=b
this.d=c},
c7:function c7(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lx:function(a,b,c,d){var u=F.lc()
F.df(u,b,c,d,a,1,0,0,1)
F.df(u,b,c,d,a,0,1,0,3)
F.df(u,b,c,d,a,0,0,1,2)
F.df(u,b,c,d,a,-1,0,0,0)
F.df(u,b,c,d,a,0,-1,0,0)
F.df(u,b,c,d,a,0,0,-1,3)
u.av()
return u},
ki:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
df:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.L(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.L(u+a3,t+a1,s+a2)
q=new V.L(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.L(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.ki(i)
l=F.ki(j.b)
k=F.lD(d,a0,new F.kh(j,F.ki(j.c),F.ki(j.d),l,m,c),b)
if(k!=null)a.b9(k)},
mP:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.lc()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.av])
q=u.a
p=new V.L(0,0,t)
p=p.u(0,Math.sqrt(p.C(p)))
C.a.h(r,q.i0(new V.bH(a,-1,-1,-1),new V.b0(1,1,1,1),new V.a5(0,0,c),new V.L(0,0,t),new V.ab(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.D(k)
j=new V.L(m,l,t).u(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.ej(new V.bH(a,-1,-1,-1),null,new V.b0(i,g,h,1),new V.a5(m*k,l*k,c),new V.L(0,0,t),new V.ab(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.hZ(r)
return u},
mN:function(a,b,c){return F.pm(!0,a,1,new F.kt(1,c),b)},
pm:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.lD(c,e,new F.kv(d),null)
if(u==null)return
u.av()
u.c2()
if(b)u.b9(F.mP(3,!1,1,new F.kw(d),e))
u.b9(F.mP(1,!0,-1,new F.kx(d),e))
return u},
n1:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kQ()
t=F.lx(a,null,new F.kR(s,1),b)
t.c2()
return t},
n3:function(){return F.mO(15,30,0.5,1,new F.kT())},
pA:function(){return F.mO(12,120,0.3,1,new F.kF(3,2))},
mO:function(a,b,c,d,e){var u=F.lD(a,b,new F.ku(e,d,b,c),null)
if(u==null)return
u.av()
u.c2()
return u},
lD:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.lc()
t=H.d([],[F.av])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.ej(g,g,new V.b0(p,0,0,1),g,g,new V.ab(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.c9(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.ej(g,g,new V.b0(j,i,h,1),g,g,new V.ab(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.c9(d))}}u.d.i_(a+1,b+1,t)
return u},
cw:function(a,b,c){var u=new F.a8(),t=a.a
if(t==null)H.A(P.C("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.A(P.C("May not create a face with vertices attached to different shapes."))
u.c0(a)
u.c1(b)
u.hD(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a_()
return u},
nO:function(a,b){var u=new F.bk(),t=a.a
if(t==null)H.A(P.C("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.A(P.C("May not create a line with vertices attached to different shapes."))
u.c0(a)
u.c1(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a_()
return u},
lc:function(){var u=new F.e1(),t=new F.jb(u)
t.b=!1
t.shW(H.d([],[F.av]))
u.a=t
t=new F.ij(u)
t.sbU(H.d([],[F.bF]))
u.b=t
t=new F.ii(u)
t.sfl(H.d([],[F.bk]))
u.c=t
t=new F.ih(u)
t.sff(H.d([],[F.a8]))
u.d=t
u.e=null
return u},
ej:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.av(),r=new F.jj()
r.sbU(H.d([],[F.bF]))
s.b=r
r=new F.jf()
u=[F.bk]
r.sfm(H.d([],u))
r.sfn(H.d([],u))
s.c=r
r=new F.jc()
u=[F.a8]
r.sfg(H.d([],u))
r.sfh(H.d([],u))
r.sfi(H.d([],u))
s.d=r
h=$.nh()
s.e=0
r=$.bq()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bp().a)!==0?e:t
s.x=(u&$.bo().a)!==0?b:t
s.y=(u&$.bP().a)!==0?f:t
s.z=(u&$.bQ().a)!==0?g:t
s.Q=(u&$.ni().a)!==0?c:t
s.ch=(u&$.co().a)!==0?i:0
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
fV:function fV(){},
ip:function ip(){},
bk:function bk(){this.b=this.a=null},
hf:function hf(){},
iR:function iR(){},
bF:function bF(){this.a=null},
e1:function e1(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ih:function ih(a){this.a=a
this.b=null},
ii:function ii(a){this.a=a
this.b=null},
ij:function ij(a){this.a=a
this.b=null},
av:function av(){var _=this
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
hV:function hV(){},
jj:function jj(){this.b=null}},T={e7:function e7(){}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l7.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gI:function(a){return H.cN(a)},
i:function(a){return"Instance of '"+H.i(H.cO(a))+"'"}}
J.h9.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iS:1}
J.dH.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.dI.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.i_.prototype={}
J.c9.prototype={}
J.bB.prototype={
i:function(a){var u=a[$.n5()]
if(u==null)return this.ey(a)
return"JavaScript function for "+H.i(J.ar(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iby:1}
J.b4.prototype={
h:function(a,b){H.E(b,H.q(a,0))
if(!!a.fixed$length)H.A(P.I("add"))
a.push(b)},
eb:function(a,b){if(!!a.fixed$length)H.A(P.I("removeAt"))
if(b<0||b>=a.length)throw H.e(P.dY(b,null))
return a.splice(b,1)[0]},
M:function(a,b){var u
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
iz:function(a){return this.m(a,"")},
ir:function(a,b,c,d){var u,t,s
H.E(b,d)
H.o(c,{func:1,ret:d,args:[d,H.q(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.e(P.bi(a))}return t},
iq:function(a,b){var u,t,s
H.o(b,{func:1,ret:P.S,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.F(b.$1(s)))return s
if(a.length!==u)throw H.e(P.bi(a))}throw H.e(H.h8())},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
ev:function(a,b,c){if(b<0||b>a.length)throw H.e(P.ah(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.ah(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.q(a,0)])
return H.d(a.slice(b,c),[H.q(a,0)])},
gip:function(a){if(a.length>0)return a[0]
throw H.e(H.h8())},
gaw:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.e(H.h8())},
ds:function(a,b){var u,t
H.o(b,{func:1,ret:P.S,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.F(b.$1(a[t])))return!0
if(a.length!==u)throw H.e(P.bi(a))}return!1},
bz:function(a,b){var u=H.q(a,0)
H.o(b,{func:1,ret:P.l,args:[u,u]})
if(!!a.immutable$list)H.A(P.I("sort"))
H.e2(a,0,a.length-1,b,u)},
X:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Q(a[u],b))return!0
return!1},
i:function(a){return P.l4(a,"[","]")},
gT:function(a){return new J.as(a,a.length,[H.q(a,0)])},
gI:function(a){return H.cN(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.A(P.I("set length"))
if(b<0)throw H.e(P.ah(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.e(H.ch(a,b))
return a[b]},
k:function(a,b,c){H.E(c,H.q(a,0))
if(!!a.immutable$list)H.A(P.I("indexed set"))
if(b>=a.length||b<0)throw H.e(H.ch(a,b))
a[b]=c},
$ik:1,
$ib:1}
J.l6.prototype={}
J.as.prototype={
gK:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(H.u(s))
u=t.c
if(u>=r){t.sd0(null)
return!1}t.sd0(s[u]);++t.c
return!0},
sd0:function(a){this.d=H.E(a,H.q(this,0))},
$ib3:1}
J.cC.prototype={
i9:function(a,b){var u
H.mX(b)
if(typeof b!=="number")throw H.e(H.aZ(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbp(b)
if(this.gbp(a)===u)return 0
if(this.gbp(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbp:function(a){return a===0?1/a<0:a<0},
dO:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.e(P.I(""+a+".floor()"))},
am:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.I(""+a+".round()"))},
ej:function(a,b){var u
if(b>20)throw H.e(P.ah(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbp(a))return"-"+u
return u},
bd:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.e(P.ah(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.W(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.A(P.I("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.c(t,1)
u=t[1]
if(3>=s)return H.c(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.p("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
p:function(a,b){if(typeof b!=="number")throw H.e(H.aZ(b))
return a*b},
be:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eB:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dj(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.dj(a,b)},
dj:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.I("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aP:function(a,b){var u
if(a>0)u=this.di(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hI:function(a,b){if(b<0)throw H.e(H.aZ(b))
return this.di(a,b)},
di:function(a,b){return b>31?0:a>>>b},
$it:1,
$ia9:1}
J.dG.prototype={$il:1}
J.ha.prototype={}
J.bA.prototype={
W:function(a,b){if(b<0)throw H.e(H.ch(a,b))
if(b>=a.length)H.A(H.ch(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.e(H.ch(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.e(P.kY(b,null,null))
return a+b},
aV:function(a,b,c,d){var u,t
c=P.bI(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a4:function(a,b,c){var u
if(c<0||c>a.length)throw H.e(P.ah(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a1:function(a,b){return this.a4(a,b,0)},
t:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.A(H.aZ(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.R()
if(b<0)throw H.e(P.dY(b,null))
if(b>c)throw H.e(P.dY(b,null))
if(c>a.length)throw H.e(P.dY(c,null))
return a.substring(b,c)},
a9:function(a,b){return this.t(a,b,null)},
j6:function(a){return a.toLowerCase()},
p:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ag:function(a,b){var u=b-a.length
if(u<=0)return a
return this.p(" ",u)+a},
bo:function(a,b,c){var u
if(c<0||c>a.length)throw H.e(P.ah(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dU:function(a,b){return this.bo(a,b,0)},
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
j:function(a,b){return C.b.W(this.a,b)},
$ad_:function(){return[P.l]},
$ax:function(){return[P.l]},
$ak:function(){return[P.l]},
$ab:function(){return[P.l]}}
H.fP.prototype={}
H.c_.prototype={
gT:function(a){var u=this
return new H.cD(u,u.gn(u),[H.aq(u,"c_",0)])},
bx:function(a,b){return this.ex(0,H.o(b,{func:1,ret:P.S,args:[H.aq(this,"c_",0)]}))}}
H.cD.prototype={
gK:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.dj(s),q=r.gn(s)
if(t.b!==q)throw H.e(P.bi(s))
u=t.c
if(u>=q){t.saX(null)
return!1}t.saX(r.J(s,u));++t.c
return!0},
saX:function(a){this.d=H.E(a,H.q(this,0))},
$ib3:1}
H.hp.prototype={
gT:function(a){return new H.hq(J.br(this.a),this.b,this.$ti)},
gn:function(a){return J.aC(this.a)},
J:function(a,b){return this.b.$1(J.fj(this.a,b))},
$ak:function(a,b){return[b]}}
H.hq.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.saX(u.c.$1(t.gK(t)))
return!0}u.saX(null)
return!1},
gK:function(a){return this.a},
saX:function(a){this.a=H.E(a,H.q(this,1))},
$ab3:function(a,b){return[b]}}
H.hr.prototype={
gn:function(a){return J.aC(this.a)},
J:function(a,b){return this.b.$1(J.fj(this.a,b))},
$ac_:function(a,b){return[b]},
$ak:function(a,b){return[b]}}
H.d1.prototype={
gT:function(a){return new H.jo(J.br(this.a),this.b,this.$ti)}}
H.jo.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(H.F(t.$1(u.gK(u))))return!0
return!1},
gK:function(a){var u=this.a
return u.gK(u)}}
H.bW.prototype={}
H.d_.prototype={
k:function(a,b,c){H.E(c,H.aq(this,"d_",0))
throw H.e(P.I("Cannot modify an unmodifiable list"))}}
H.ed.prototype={}
H.fB.prototype={
i:function(a){return P.la(this)},
k:function(a,b,c){H.E(b,H.q(this,0))
H.E(c,H.q(this,1))
return H.nD()},
$iy:1}
H.fC.prototype={
gn:function(a){return this.a},
bm:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bm(0,b))return
return this.d1(b)},
d1:function(a){return this.b[H.O(a)]},
H:function(a,b){var u,t,s,r,q=this,p=H.q(q,1)
H.o(b,{func:1,ret:-1,args:[H.q(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.E(q.d1(r),p))}}}
H.iO.prototype={
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
H.hW.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hc.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.j0.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kU.prototype={
$1:function(a){if(!!J.V(a).$ibx)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:25}
H.eT.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iau:1}
H.cs.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$iby:1,
gj9:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iD.prototype={}
H.it.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cn(u)+"'"}}
H.cq.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cq))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.cN(this.a)
else u=typeof t!=="object"?J.dp(t):H.cN(t)
return(u^H.cN(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.i(H.cO(u))+"'")}}
H.iQ.prototype={
i:function(a){return this.a}}
H.fx.prototype={
i:function(a){return this.a}}
H.id.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.jp.prototype={
i:function(a){return"Assertion failed: "+P.dE(this.a)}}
H.a2.prototype={
gn:function(a){return this.a},
giy:function(a){return this.a===0},
ga2:function(a){return new H.hh(this,[H.q(this,0)])},
bm:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cY(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cY(t,b)}else return s.iu(b)},
iu:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cl(u.bI(t,u.ck(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bh(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bh(r,b)
s=t==null?null:t.b
return s}else return q.iv(b)},
iv:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bI(r,s.ck(a))
t=s.cl(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.E(b,H.q(s,0))
H.E(c,H.q(s,1))
if(typeof b==="string"){u=s.b
s.cO(u==null?s.b=s.bS():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cO(t==null?s.c=s.bS():t,b,c)}else s.iw(b,c)},
iw:function(a,b){var u,t,s,r,q=this
H.E(a,H.q(q,0))
H.E(b,H.q(q,1))
u=q.d
if(u==null)u=q.d=q.bS()
t=q.ck(a)
s=q.bI(u,t)
if(s==null)q.bZ(u,t,[q.bT(a,b)])
else{r=q.cl(s,a)
if(r>=0)s[r].b=b
else s.push(q.bT(a,b))}},
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
u=t.bh(a,b)
if(u==null)t.bZ(a,b,t.bT(b,c))
else u.b=c},
fu:function(){this.r=this.r+1&67108863},
bT:function(a,b){var u,t=this,s=new H.hg(H.E(a,H.q(t,0)),H.E(b,H.q(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fu()
return s},
ck:function(a){return J.dp(a)&0x3ffffff},
cl:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Q(a[t].a,b))return t
return-1},
i:function(a){return P.la(this)},
bh:function(a,b){return a[b]},
bI:function(a,b){return a[b]},
bZ:function(a,b,c){a[b]=c},
fa:function(a,b){delete a[b]},
cY:function(a,b){return this.bh(a,b)!=null},
bS:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bZ(t,u,t)
this.fa(t,u)
return t}}
H.hg.prototype={}
H.hh.prototype={
gn:function(a){return this.a.a},
gT:function(a){var u=this.a,t=new H.hi(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hi.prototype={
gK:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.bi(t))
else{t=u.c
if(t==null){u.scN(null)
return!1}else{u.scN(t.a)
u.c=u.c.c
return!0}}},
scN:function(a){this.d=H.E(a,H.q(this,0))},
$ib3:1}
H.kB.prototype={
$1:function(a){return this.a(a)},
$S:25}
H.kC.prototype={
$2:function(a,b){return this.a(a,b)},
$S:56}
H.kD.prototype={
$1:function(a){return this.a(H.O(a))},
$S:54}
H.hb.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$im2:1,
$io9:1}
H.cI.prototype={$icI:1}
H.bD.prototype={$ibD:1}
H.dR.prototype={
gn:function(a){return a.length},
$iM:1,
$aM:function(){}}
H.cJ.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]},
k:function(a,b,c){H.po(c)
H.bg(b,a,a.length)
a[b]=c},
$abW:function(){return[P.t]},
$ax:function(){return[P.t]},
$ik:1,
$ak:function(){return[P.t]},
$ib:1,
$ab:function(){return[P.t]}}
H.dS.prototype={
k:function(a,b,c){H.ad(c)
H.bg(b,a,a.length)
a[b]=c},
$abW:function(){return[P.l]},
$ax:function(){return[P.l]},
$ik:1,
$ak:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]}}
H.hO.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hP.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hQ.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hR.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hS.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.dT.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.cK.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bg(b,a,a.length)
return a[b]},
$icK:1,
$iR:1}
H.d6.prototype={}
H.d7.prototype={}
H.d8.prototype={}
H.d9.prototype={}
P.jr.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:18}
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
P.eZ.prototype={
eU:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cg(new P.k7(this,b),0),a)
else throw H.e(P.I("`setTimeout()` not found."))},
eV:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cg(new P.k6(this,a,Date.now(),b),0),a)
else throw H.e(P.I("Periodic timer."))},
$ibb:1}
P.k7.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.k6.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.eB(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bf.prototype={
iB:function(a){if((this.c&15)!==6)return!0
return this.b.b.cw(H.o(this.d,{func:1,ret:P.S,args:[P.U]}),a.a,P.S,P.U)},
it:function(a){var u=this.e,t=P.U,s={futureOr:1,type:H.q(this,1)},r=this.b.b
if(H.fg(u,{func:1,args:[P.U,P.au]}))return H.ly(r.j0(u,a.a,a.b,null,t,P.au),s)
else return H.ly(r.cw(H.o(u,{func:1,args:[P.U]}),a.a,null,t),s)}}
P.aJ.prototype={
ei:function(a,b,c){var u,t,s,r=H.q(this,0)
H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a1
if(u!==C.f){H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.pd(b,u)}t=new P.aJ($.a1,[c])
s=b==null?1:3
this.cP(new P.bf(t,s,a,b,[r,c]))
return t},
j3:function(a,b){return this.ei(a,null,b)},
cP:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ibf")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaJ")
s=u.a
if(s<4){u.cP(a)
return}t.a=s
t.c=u.c}P.kr(null,null,t.b,H.o(new P.jC(t,a),{func:1,ret:-1}))}},
dc:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ibf")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaJ")
u=q.a
if(u<4){q.dc(a)
return}p.a=u
p.c=q.c}o.a=p.bj(a)
P.kr(null,null,p.b,H.o(new P.jG(o,p),{func:1,ret:-1}))}},
bW:function(){var u=H.f(this.c,"$ibf")
this.c=null
return this.bj(u)},
bj:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cU:function(a){var u,t,s=this,r=H.q(s,0)
H.ly(a,{futureOr:1,type:r})
u=s.$ti
if(H.lu(a,"$icy",u,"$acy"))if(H.lu(a,"$iaJ",u,null))P.ms(a,s)
else P.ou(a,s)
else{t=s.bW()
H.E(a,r)
s.a=4
s.c=a
P.d4(s,t)}},
cV:function(a,b){var u,t=this
H.f(b,"$iau")
u=t.bW()
t.a=8
t.c=new P.am(a,b)
P.d4(t,u)},
$icy:1}
P.jC.prototype={
$0:function(){P.d4(this.a,this.b)},
$S:0}
P.jG.prototype={
$0:function(){P.d4(this.b,this.a.a)},
$S:0}
P.jD.prototype={
$1:function(a){var u=this.a
u.a=0
u.cU(a)},
$S:18}
P.jE.prototype={
$2:function(a,b){H.f(b,"$iau")
this.a.cV(a,b)},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jF.prototype={
$0:function(){this.a.cV(this.b,this.c)},
$S:0}
P.jJ.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.ef(H.o(s.d,{func:1}),null)}catch(r){u=H.aj(r)
t=H.cl(r)
if(o.d){s=H.f(o.a.a.c,"$iam").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$iam")
else q.b=new P.am(u,t)
q.a=!0
return}if(!!J.V(n).$icy){if(n instanceof P.aJ&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$iam")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.j3(new P.jK(p),null)
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
t=H.cl(o)
s=n.a
s.b=new P.am(u,t)
s.a=!0}},
$S:3}
P.jH.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$iam")
r=m.c
if(H.F(r.iB(u))&&r.e!=null){q=m.b
q.b=r.it(u)
q.a=!1}}catch(p){t=H.aj(p)
s=H.cl(p)
r=H.f(m.a.a.c,"$iam")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.am(t,s)
n.a=!0}},
$S:3}
P.el.prototype={}
P.iw.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aJ($.a1,[P.l])
r.a=0
u=H.q(s,0)
t=H.o(new P.iy(r,s),{func:1,ret:-1,args:[u]})
H.o(new P.iz(r,q),{func:1,ret:-1})
W.ac(s.a,s.b,t,!1,u)
return q}}
P.iy.prototype={
$1:function(a){H.E(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.P,args:[H.q(this.b,0)]}}}
P.iz.prototype={
$0:function(){this.b.cU(this.a.a)},
$S:0}
P.cT.prototype={}
P.ix.prototype={}
P.bb.prototype={}
P.am.prototype={
i:function(a){return H.i(this.a)},
$ibx:1}
P.kg.prototype={$iqk:1}
P.kq.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dV():s
s=this.b
if(s==null)throw H.e(t)
u=H.e(t)
u.stack=s.i(0)
throw u},
$S:0}
P.jQ.prototype={
j1:function(a){var u,t,s,r=null
H.o(a,{func:1,ret:-1})
try{if(C.f===$.a1){a.$0()
return}P.mD(r,r,this,a,-1)}catch(s){u=H.aj(s)
t=H.cl(s)
P.kp(r,r,this,u,H.f(t,"$iau"))}},
j2:function(a,b,c){var u,t,s,r=null
H.o(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.f===$.a1){a.$1(b)
return}P.mE(r,r,this,a,b,-1,c)}catch(s){u=H.aj(s)
t=H.cl(s)
P.kp(r,r,this,u,H.f(t,"$iau"))}},
i5:function(a,b){return new P.jS(this,H.o(a,{func:1,ret:b}),b)},
c3:function(a){return new P.jR(this,H.o(a,{func:1,ret:-1}))},
du:function(a,b){return new P.jT(this,H.o(a,{func:1,ret:-1,args:[b]}),b)},
ef:function(a,b){H.o(a,{func:1,ret:b})
if($.a1===C.f)return a.$0()
return P.mD(null,null,this,a,b)},
cw:function(a,b,c,d){H.o(a,{func:1,ret:c,args:[d]})
H.E(b,d)
if($.a1===C.f)return a.$1(b)
return P.mE(null,null,this,a,b,c,d)},
j0:function(a,b,c,d,e,f){H.o(a,{func:1,ret:d,args:[e,f]})
H.E(b,e)
H.E(c,f)
if($.a1===C.f)return a.$2(b,c)
return P.pe(null,null,this,a,b,c,d,e,f)}}
P.jS.prototype={
$0:function(){return this.a.ef(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jR.prototype={
$0:function(){return this.a.j1(this.b)},
$S:3}
P.jT.prototype={
$1:function(a){var u=this.c
return this.a.j2(this.b,H.E(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jO.prototype={
gT:function(a){var u=this,t=new P.eA(u,u.r,u.$ti)
t.c=u.e
return t},
gn:function(a){return this.a},
X:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.f(u[b],"$icb")!=null}else{t=this.f6(b)
return t}},
f6:function(a){var u=this.d
if(u==null)return!1
return this.bG(this.d2(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.E(b,H.q(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cR(u==null?s.b=P.lj():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cR(t==null?s.c=P.lj():t,b)}else return s.eX(0,b)},
eX:function(a,b){var u,t,s,r=this
H.E(b,H.q(r,0))
u=r.d
if(u==null)u=r.d=P.lj()
t=r.cW(b)
s=u[t]
if(s==null)u[t]=[r.bD(b)]
else{if(r.bG(s,b)>=0)return!1
s.push(r.bD(b))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hs(this.c,b)
else return this.hr(0,b)},
hr:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.d2(r,b)
t=s.bG(u,b)
if(t<0)return!1
s.dk(u.splice(t,1)[0])
return!0},
cR:function(a,b){H.E(b,H.q(this,0))
if(H.f(a[b],"$icb")!=null)return!1
a[b]=this.bD(b)
return!0},
hs:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$icb")
if(u==null)return!1
this.dk(u)
delete a[b]
return!0},
cT:function(){this.r=1073741823&this.r+1},
bD:function(a){var u,t=this,s=new P.cb(H.E(a,H.q(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cT()
return s},
dk:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cT()},
cW:function(a){return J.dp(a)&1073741823},
d2:function(a,b){return a[this.cW(b)]},
bG:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Q(a[t].a,b))return t
return-1}}
P.cb.prototype={}
P.eA.prototype={
gK:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.bi(t))
else{t=u.c
if(t==null){u.scS(null)
return!1}else{u.scS(H.E(t.a,H.q(u,0)))
u.c=u.c.b
return!0}}},
scS:function(a){this.d=H.E(a,H.q(this,0))},
$ib3:1}
P.hj.prototype={
$2:function(a,b){this.a.k(0,H.E(a,this.b),H.E(b,this.c))},
$S:5}
P.hk.prototype={$ik:1,$ib:1}
P.x.prototype={
gT:function(a){return new H.cD(a,this.gn(a),[H.ck(this,a,"x",0)])},
J:function(a,b){return this.j(a,b)},
j5:function(a,b){var u,t=this,s=H.d([],[H.ck(t,a,"x",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.k(s,u,t.j(a,u))
return s},
j4:function(a){return this.j5(a,!0)},
im:function(a,b,c,d){var u
H.E(d,H.ck(this,a,"x",0))
P.bI(b,c,this.gn(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.l4(a,"[","]")}}
P.hm.prototype={}
P.hn.prototype={
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
H.o(b,{func:1,ret:-1,args:[H.ck(s,a,"af",0),H.ck(s,a,"af",1)]})
for(u=J.br(s.ga2(a));u.A();){t=u.gK(u)
b.$2(t,s.j(a,t))}},
gn:function(a){return J.aC(this.ga2(a))},
i:function(a){return P.la(a)},
$iy:1}
P.k8.prototype={
k:function(a,b,c){H.E(b,H.q(this,0))
H.E(c,H.q(this,1))
throw H.e(P.I("Cannot modify unmodifiable map"))}}
P.ho.prototype={
j:function(a,b){return J.dn(this.a,b)},
k:function(a,b,c){J.kW(this.a,H.E(b,H.q(this,0)),H.E(c,H.q(this,1)))},
H:function(a,b){J.lH(this.a,H.o(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]}))},
gn:function(a){return J.aC(this.a)},
i:function(a){return J.ar(this.a)},
$iy:1}
P.ee.prototype={}
P.jV.prototype={
at:function(a,b){var u
for(u=J.br(H.n(b,"$ik",this.$ti,"$ak"));u.A();)this.h(0,u.gK(u))},
i:function(a){return P.l4(this,"{","}")},
J:function(a,b){var u,t,s,r=this
P.m7(b,"index")
for(u=P.oy(r,r.r,H.q(r,0)),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.e(P.Z(b,r,"index",null,t))},
$ik:1,
$ima:1}
P.eB.prototype={}
P.f3.prototype={}
P.ft.prototype={
iD:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bI(a0,a1,b.length)
u=$.nk()
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
if(h>=0){i=C.b.W("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.a6("")
g=r.a+=C.b.t(b,s,t)
r.a=g+H.c1(m)
s=n
continue}}throw H.e(P.a4("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.t(b,s,a1)
f=g.length
if(q>=0)P.lL(b,p,a1,q,o,f)
else{e=C.d.be(f-1,4)+1
if(e===1)throw H.e(P.a4(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aV(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lL(b,p,a1,q,o,d)
else{e=C.d.be(d,4)
if(e===1)throw H.e(P.a4(c,b,a1))
if(e>1)b=C.b.aV(b,a1,a1,e===2?"==":"=")}return b},
$abU:function(){return[[P.b,P.l],P.h]}}
P.fu.prototype={
$abv:function(){return[[P.b,P.l],P.h]}}
P.bU.prototype={}
P.bv.prototype={}
P.fR.prototype={
$abU:function(){return[P.h,[P.b,P.l]]}}
P.h6.prototype={
i:function(a){return this.a}}
P.h5.prototype={
f7:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.a6("")
if(r>b)q.a+=C.b.t(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nv(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abv:function(){return[P.h,P.h]}}
P.j8.prototype={
gil:function(){return C.N}}
P.ja.prototype={
c8:function(a){var u,t,s=P.bI(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.ke(u)
if(t.fj(a,0,s)!==s)t.dm(J.nr(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oP(0,t.b,u.length)))},
$abv:function(){return[P.h,[P.b,P.l]]}}
P.ke.prototype={
dm:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fj:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.W(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.D(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dm(r,C.b.D(a,p)))s=p}else if(r<=2047){q=n.b
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
P.j9.prototype={
c8:function(a){var u,t,s,r,q,p,o,n,m
H.n(a,"$ib",[P.l],"$ab")
u=P.ol(!1,a,0,null)
if(u!=null)return u
t=P.bI(0,null,J.aC(a))
s=P.mG(a,0,t)
if(s>0){r=P.cU(a,0,s)
if(s===t)return r
q=new P.a6(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.a6("")
n=new P.kd(!1,q)
n.c=o
n.ia(a,p,t)
if(n.e>0){H.A(P.a4("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c1(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abv:function(){return[[P.b,P.l],P.h]}}
P.kd.prototype={
ia:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.n(a,"$ib",[P.l],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.dj(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.ai()
if((o&192)!==128){n=P.a4(h+C.d.bd(o,16),a,p)
throw H.e(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.c(C.w,n)
if(u<=C.w[n]){n=P.a4("Overlong encoding of 0x"+C.d.bd(u,16),a,p-s-1)
throw H.e(n)}if(u>1114111){n=P.a4("Character outside valid Unicode range: 0x"+C.d.bd(u,16),a,p-s-1)
throw H.e(n)}if(!i.c||u!==65279)q.a+=H.c1(u)
i.c=!1}for(n=p<c;n;){m=P.mG(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cU(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.R()
if(o<0){j=P.a4("Negative UTF-8 code unit: -0x"+C.d.bd(-o,16),a,k-1)
throw H.e(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a4(h+C.d.bd(o,16),a,k-1)
throw H.e(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.S.prototype={}
P.ax.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.ax&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.d.aP(u,30))&1073741823},
i:function(a){var u=this,t=P.nE(H.o5(u)),s=P.dz(H.o3(u)),r=P.dz(H.o_(u)),q=P.dz(H.o0(u)),p=P.dz(H.o2(u)),o=P.dz(H.o4(u)),n=P.nF(H.o1(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.t.prototype={}
P.bw.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bw&&this.a===b.a},
gI:function(a){return C.d.gI(this.a)},
i:function(a){var u,t,s,r=new P.fO(),q=this.a
if(q<0)return"-"+new P.bw(0-q).i(0)
u=r.$1(C.d.a7(q,6e7)%60)
t=r.$1(C.d.a7(q,1e6)%60)
s=new P.fN().$1(q%1e6)
return""+C.d.a7(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.fN.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:19}
P.fO.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:19}
P.bx.prototype={}
P.fn.prototype={
i:function(a){return"Assertion failed"}}
P.dV.prototype={
i:function(a){return"Throw of null."}}
P.aL.prototype={
gbF:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbE:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbF()+o+u
if(!q.a)return t
s=q.gbE()
r=P.dE(q.b)
return t+s+": "+r}}
P.c2.prototype={
gbF:function(){return"RangeError"},
gbE:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.h7.prototype={
gbF:function(){return"RangeError"},
gbE:function(){var u,t=H.ad(this.b)
if(typeof t!=="number")return t.R()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gn:function(a){return this.f}}
P.j1.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iZ.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cS.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fA.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dE(u)+"."}}
P.hZ.prototype={
i:function(a){return"Out of Memory"},
$ibx:1}
P.e4.prototype={
i:function(a){return"Stack Overflow"},
$ibx:1}
P.fH.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.et.prototype={
i:function(a){return"Exception: "+this.a}}
P.h0.prototype={
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
for(q=g;q<o;++q){p=C.b.W(f,q)
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
return h+l+j+k+"\n"+C.b.p(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.i(g)+")"):h}}
P.by.prototype={}
P.l.prototype={}
P.k.prototype={
bx:function(a,b){var u=H.aq(this,"k",0)
return new H.d1(this,H.o(b,{func:1,ret:P.S,args:[u]}),[u])},
gn:function(a){var u,t=this.gT(this)
for(u=0;t.A();)++u
return u},
gaI:function(a){var u,t=this.gT(this)
if(!t.A())throw H.e(H.h8())
u=t.gK(t)
if(t.A())throw H.e(H.nL())
return u},
J:function(a,b){var u,t,s
P.m7(b,"index")
for(u=this.gT(this),t=0;u.A();){s=u.gK(u)
if(b===t)return s;++t}throw H.e(P.Z(b,this,"index",null,t))},
i:function(a){return P.nK(this,"(",")")}}
P.b3.prototype={}
P.b.prototype={$ik:1}
P.y.prototype={}
P.P.prototype={
gI:function(a){return P.U.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.a9.prototype={}
P.U.prototype={constructor:P.U,$iU:1,
q:function(a,b){return this===b},
gI:function(a){return H.cN(this)},
i:function(a){return"Instance of '"+H.i(H.cO(this))+"'"},
toString:function(){return this.i(this)}}
P.au.prototype={}
P.h.prototype={$im2:1}
P.a6.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipV:1}
P.j6.prototype={
$2:function(a,b){var u,t,s,r=P.h
H.n(a,"$iy",[r,r],"$ay")
H.O(b)
u=J.dk(b).dU(b,"=")
if(u===-1){if(b!=="")J.kW(a,P.ln(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.t(b,0,u)
s=C.b.a9(b,u+1)
r=this.a
J.kW(a,P.ln(t,0,t.length,r,!0),P.ln(s,0,s.length,r,!0))}return a},
$S:45}
P.j3.prototype={
$2:function(a,b){throw H.e(P.a4("Illegal IPv4 address, "+a,this.a,b))},
$S:44}
P.j4.prototype={
$2:function(a,b){throw H.e(P.a4("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.j5.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fi(C.b.t(this.b,a,b),null,16)
if(typeof u!=="number")return u.R()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:42}
P.cc.prototype={
geo:function(){return this.b},
gcj:function(a){var u=this.c
if(u==null)return""
if(C.b.a1(u,"["))return C.b.t(u,1,u.length-1)
return u},
gbr:function(a){var u=this.d
if(u==null)return P.mw(this.a)
return u},
gcs:function(a){var u=this.f
return u==null?"":u},
gdP:function(){var u=this.r
return u==null?"":u},
ec:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.n(b,"$iy",[P.h,null],"$ay")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a1(p,"/"))p="/"+p
n=P.ll(null,0,0,b)
return new P.cc(u,s,q,r,p,n,m.r)},
gct:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.h
s.shq(new P.ee(P.mk(u==null?"":u),[t,t]))}return s.Q},
gdQ:function(){return this.c!=null},
gdT:function(){return this.f!=null},
gdR:function(){return this.r!=null},
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
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.V(b).$ilf)if(s.a==b.gby())if(s.c!=null===b.gdQ())if(s.b==b.geo())if(s.gcj(s)==b.gcj(b))if(s.gbr(s)==b.gbr(b))if(s.e===b.ge6(b)){u=s.f
t=u==null
if(!t===b.gdT()){if(t)u=""
if(u===b.gcs(b)){u=s.r
t=u==null
if(!t===b.gdR()){if(t)u=""
u=u===b.gdP()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
return u==null?this.z=C.b.gI(this.i(0)):u},
shq:function(a){var u=P.h
this.Q=H.n(a,"$iy",[u,u],"$ay")},
$ilf:1,
gby:function(){return this.a},
ge6:function(a){return this.e}}
P.k9.prototype={
$1:function(a){throw H.e(P.a4("Invalid port",this.a,this.b+1))},
$S:41}
P.ka.prototype={
$1:function(a){return P.f4(C.W,a,C.h,!1)},
$S:23}
P.kc.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.f4(C.i,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.f4(C.i,b,C.h,!0))}},
$S:24}
P.kb.prototype={
$2:function(a,b){var u,t
H.O(a)
if(b==null||typeof b==="string")this.a.$2(a,H.O(b))
else for(u=J.br(H.mV(b,"$ik")),t=this.a;u.A();)t.$2(a,H.O(u.gK(u)))},
$S:40}
P.j2.prototype={
gen:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.c(o,0)
u=q.a
o=o[0]+1
t=C.b.bo(u,"?",o)
s=u.length
if(t>=0){r=P.de(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jx("data",p,p,p,P.de(u,o,s,C.A,!1),r,p)},
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
J.ns(u,0,96,b)
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
gdQ:function(){return this.c>0},
gdS:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.B()
t=this.e
if(typeof t!=="number")return H.D(t)
t=u+1<t
u=t}else u=!1
return u},
gdT:function(){var u=this.f
if(typeof u!=="number")return u.R()
return u<this.r},
gdR:function(){return this.r<this.a.length},
gd4:function(){return this.b===4&&C.b.a1(this.a,"http")},
gd5:function(){return this.b===5&&C.b.a1(this.a,"https")},
gby:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gd4())q=t.x="http"
else if(t.gd5()){t.x="https"
q="https"}else if(q===4&&C.b.a1(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a1(t.a,r)){t.x=r
q=r}else{q=C.b.t(t.a,0,q)
t.x=q}return q},
geo:function(){var u=this.c,t=this.b+3
return u>t?C.b.t(this.a,t,u-1):""},
gcj:function(a){var u=this.c
return u>0?C.b.t(this.a,u,this.d):""},
gbr:function(a){var u,t=this
if(t.gdS()){u=t.d
if(typeof u!=="number")return u.B()
return P.fi(C.b.t(t.a,u+1,t.e),null,null)}if(t.gd4())return 80
if(t.gd5())return 443
return 0},
ge6:function(a){return C.b.t(this.a,this.e,this.f)},
gcs:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.R()
return u<t?C.b.t(this.a,u+1,t):""},
gdP:function(){var u=this.r,t=this.a
return u<t.length?C.b.a9(t,u+1):""},
gct:function(){var u=this,t=u.f
if(typeof t!=="number")return t.R()
if(t>=u.r)return C.X
t=P.h
return new P.ee(P.mk(u.gcs(u)),[t,t])},
ec:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.n(b,"$iy",[P.h,null],"$ay")
u=k.gby()
t=u==="file"
s=k.c
r=s>0?C.b.t(k.a,k.b+3,s):""
q=k.gdS()?k.gbr(k):j
s=k.c
if(s>0)p=C.b.t(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.t(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a1(o,"/"))o="/"+o
m=P.ll(j,0,0,b)
n=k.r
l=n<s.length?C.b.a9(s,n+1):j
return new P.cc(u,r,p,q,o,m,l)},
gI:function(a){var u=this.y
return u==null?this.y=C.b.gI(this.a):u},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.V(b).$ilf&&this.a===b.i(0)},
i:function(a){return this.a},
$ilf:1}
P.jx.prototype={}
W.v.prototype={}
W.fk.prototype={
gn:function(a){return a.length}}
W.dq.prototype={
i:function(a){return String(a)},
$idq:1}
W.fl.prototype={
i:function(a){return String(a)}}
W.cp.prototype={$icp:1}
W.bS.prototype={$ibS:1}
W.bs.prototype={$ibs:1}
W.bT.prototype={
er:function(a,b,c){var u=a.getContext(b,P.pl(c))
return u},
$ibT:1}
W.bt.prototype={
gn:function(a){return a.length}}
W.ct.prototype={$ict:1}
W.fD.prototype={
gn:function(a){return a.length}}
W.W.prototype={$iW:1}
W.cu.prototype={
gn:function(a){return a.length}}
W.fE.prototype={}
W.b1.prototype={}
W.b2.prototype={}
W.fF.prototype={
gn:function(a){return a.length}}
W.fG.prototype={
gn:function(a){return a.length}}
W.fJ.prototype={
gn:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.fK.prototype={
i:function(a){return String(a)}}
W.dB.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.n(c,"$ial",[P.a9],"$aal")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[[P.al,P.a9]]},
$ax:function(){return[[P.al,P.a9]]},
$ik:1,
$ak:function(){return[[P.al,P.a9]]},
$ib:1,
$ab:function(){return[[P.al,P.a9]]},
$aH:function(){return[[P.al,P.a9]]}}
W.dC.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gaH(a))+" x "+H.i(this.gaD(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$ial)return!1
return a.left===u.gbq(b)&&a.top===u.gbu(b)&&this.gaH(a)===u.gaH(b)&&this.gaD(a)===u.gaD(b)},
gI:function(a){return W.mu(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(this.gaH(a)),C.e.gI(this.gaD(a)))},
gdv:function(a){return a.bottom},
gaD:function(a){return a.height},
gbq:function(a){return a.left},
gbt:function(a){return a.right},
gbu:function(a){return a.top},
gaH:function(a){return a.width},
$ial:1,
$aal:function(){return[P.a9]}}
W.fL.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.O(c)
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[P.h]},
$ax:function(){return[P.h]},
$ik:1,
$ak:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aH:function(){return[P.h]}}
W.fM.prototype={
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
gT:function(a){var u=this.j4(this)
return new J.as(u,u.length,[H.q(u,0)])},
$ax:function(){return[W.T]},
$ak:function(){return[W.T]},
$ab:function(){return[W.T]}}
W.T.prototype={
gi4:function(a){return new W.jy(a)},
gc7:function(a){return new W.jv(a,a.children)},
gdw:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.R()
if(s<0)s=-s*0
if(typeof r!=="number")return r.R()
if(r<0)r=-r*0
return new P.al(u,t,s,r,[P.a9])},
i:function(a){return a.localName},
ae:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lS
if(u==null){u=H.d([],[W.aA])
t=new W.dU(u)
C.a.h(u,W.mt(null))
C.a.h(u,W.mv())
$.lS=t
d=t}else d=u
u=$.lR
if(u==null){u=new W.f5(d)
$.lR=u
c=u}else{u.a=d
c=u}}if($.bj==null){u=document
t=u.implementation.createHTMLDocument("")
$.bj=t
$.l1=t.createRange()
t=$.bj.createElement("base")
H.f(t,"$icp")
t.href=u.baseURI
$.bj.head.appendChild(t)}u=$.bj
if(u.body==null){t=u.createElement("body")
u.body=H.f(t,"$ibs")}u=$.bj
if(!!this.$ibs)s=u.body
else{s=u.createElement(a.tagName)
$.bj.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.X(C.U,a.tagName)){$.l1.selectNodeContents(s)
r=$.l1.createContextualFragment(b)}else{s.innerHTML=b
r=$.bj.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bj.body
if(s==null?u!=null:s!==u)J.lJ(s)
c.cC(r)
document.adoptNode(r)
return r},
ie:function(a,b,c){return this.ae(a,b,c,null)},
eu:function(a,b){a.textContent=null
a.appendChild(this.ae(a,b,null,null))},
$iT:1,
geg:function(a){return a.tagName}}
W.fQ.prototype={
$1:function(a){return!!J.V(H.f(a,"$iG")).$iT},
$S:27}
W.m.prototype={$im:1}
W.j.prototype={
hY:function(a,b,c,d){H.o(c,{func:1,args:[W.m]})
if(c!=null)this.eY(a,b,c,!1)},
eY:function(a,b,c,d){return a.addEventListener(b,H.cg(H.o(c,{func:1,args:[W.m]}),1),!1)},
$ij:1}
W.aE.prototype={$iaE:1}
W.cx.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaE")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aE]},
$ax:function(){return[W.aE]},
$ik:1,
$ak:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$icx:1,
$aH:function(){return[W.aE]}}
W.fW.prototype={
gn:function(a){return a.length}}
W.h_.prototype={
gn:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.h4.prototype={
gn:function(a){return a.length}}
W.bX.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.G]},
$ax:function(){return[W.G]},
$ik:1,
$ak:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ibX:1,
$aH:function(){return[W.G]}}
W.cA.prototype={$icA:1}
W.cB.prototype={$icB:1}
W.b5.prototype={$ib5:1}
W.dM.prototype={
i:function(a){return String(a)},
$idM:1}
W.hH.prototype={
gn:function(a){return a.length}}
W.cF.prototype={$icF:1}
W.hI.prototype={
j:function(a,b){return P.bm(a.get(H.O(b)))},
H:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bm(t.value[1]))}},
ga2:function(a){var u=H.d([],[P.h])
this.H(a,new W.hJ(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.e(P.I("Not supported"))},
$aaf:function(){return[P.h,null]},
$iy:1,
$ay:function(){return[P.h,null]}}
W.hJ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hK.prototype={
j:function(a,b){return P.bm(a.get(H.O(b)))},
H:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bm(t.value[1]))}},
ga2:function(a){var u=H.d([],[P.h])
this.H(a,new W.hL(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.e(P.I("Not supported"))},
$aaf:function(){return[P.h,null]},
$iy:1,
$ay:function(){return[P.h,null]}}
W.hL.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aO.prototype={$iaO:1}
W.hM.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaO")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aO]},
$ax:function(){return[W.aO]},
$ik:1,
$ak:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aH:function(){return[W.aO]}}
W.ag.prototype={$iag:1}
W.ap.prototype={
gaI:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.e(P.mb("No elements"))
if(t>1)throw H.e(P.mb("More than one element"))
return u.firstChild},
at:function(a,b){var u,t,s,r
H.n(b,"$ik",[W.G],"$ak")
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
return new W.dF(u,u.length,[H.ck(C.Y,u,"H",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$ax:function(){return[W.G]},
$ak:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
iV:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
iZ:function(a,b){var u,t
try{u=a.parentNode
J.np(u,b,a)}catch(t){H.aj(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.ew(a):u},
i2:function(a,b){return a.appendChild(H.f(b,"$iG"))},
hv:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.cL.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.G]},
$ax:function(){return[W.G]},
$ik:1,
$ak:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aH:function(){return[W.G]}}
W.aP.prototype={$iaP:1,
gn:function(a){return a.length}}
W.i1.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaP")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aP]},
$ax:function(){return[W.aP]},
$ik:1,
$ak:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aH:function(){return[W.aP]}}
W.ib.prototype={
j:function(a,b){return P.bm(a.get(H.O(b)))},
H:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bm(t.value[1]))}},
ga2:function(a){var u=H.d([],[P.h])
this.H(a,new W.ic(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.e(P.I("Not supported"))},
$aaf:function(){return[P.h,null]},
$iy:1,
$ay:function(){return[P.h,null]}}
W.ic.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.ie.prototype={
gn:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.iq.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaR")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aR]},
$ax:function(){return[W.aR]},
$ik:1,
$ak:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aH:function(){return[W.aR]}}
W.aS.prototype={$iaS:1}
W.ir.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaS")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aS]},
$ax:function(){return[W.aS]},
$ik:1,
$ak:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aH:function(){return[W.aS]}}
W.aT.prototype={$iaT:1,
gn:function(a){return a.length}}
W.iu.prototype={
j:function(a,b){return a.getItem(H.O(b))},
k:function(a,b,c){a.setItem(b,c)},
H:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga2:function(a){var u=H.d([],[P.h])
this.H(a,new W.iv(u))
return u},
gn:function(a){return a.length},
$aaf:function(){return[P.h,P.h]},
$iy:1,
$ay:function(){return[P.h,P.h]}}
W.iv.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:24}
W.aF.prototype={$iaF:1}
W.ba.prototype={$iba:1}
W.e5.prototype={
ae:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bA(a,b,c,d)
u=W.nG("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ap(t).at(0,new W.ap(u))
return t}}
W.iB.prototype={
ae:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bA(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ae(u.createElement("table"),b,c,d)
u.toString
u=new W.ap(u)
s=u.gaI(u)
s.toString
u=new W.ap(s)
r=u.gaI(u)
t.toString
r.toString
new W.ap(t).at(0,new W.ap(r))
return t}}
W.iC.prototype={
ae:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bA(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ae(u.createElement("table"),b,c,d)
u.toString
u=new W.ap(u)
s=u.gaI(u)
t.toString
s.toString
new W.ap(t).at(0,new W.ap(s))
return t}}
W.cV.prototype={$icV:1}
W.aV.prototype={$iaV:1}
W.aG.prototype={$iaG:1}
W.iE.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaG")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aG]},
$ax:function(){return[W.aG]},
$ik:1,
$ak:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$aH:function(){return[W.aG]}}
W.iF.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaV")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aV]},
$ax:function(){return[W.aV]},
$ik:1,
$ak:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aH:function(){return[W.aV]}}
W.iH.prototype={
gn:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.aX.prototype={$iaX:1}
W.iL.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaW")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aW]},
$ax:function(){return[W.aW]},
$ik:1,
$ak:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aH:function(){return[W.aW]}}
W.iM.prototype={
gn:function(a){return a.length}}
W.bK.prototype={}
W.j7.prototype={
i:function(a){return String(a)}}
W.jm.prototype={
gn:function(a){return a.length}}
W.be.prototype={
gii:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.I("deltaY is not supported"))},
gih:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.I("deltaX is not supported"))},
$ibe:1}
W.d2.prototype={
hw:function(a,b){return a.requestAnimationFrame(H.cg(H.o(b,{func:1,ret:-1,args:[P.a9]}),1))},
fd:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d3.prototype={$id3:1}
W.jw.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iW")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.W]},
$ax:function(){return[W.W]},
$ik:1,
$ak:function(){return[W.W]},
$ib:1,
$ab:function(){return[W.W]},
$aH:function(){return[W.W]}}
W.eo.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$ial)return!1
return a.left===u.gbq(b)&&a.top===u.gbu(b)&&a.width===u.gaH(b)&&a.height===u.gaD(b)},
gI:function(a){return W.mu(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(a.width),C.e.gI(a.height))},
gaD:function(a){return a.height},
gaH:function(a){return a.width}}
W.jL.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaN")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aN]},
$ax:function(){return[W.aN]},
$ik:1,
$ak:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aH:function(){return[W.aN]}}
W.eG.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.G]},
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
$iM:1,
$aM:function(){return[W.aT]},
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
$iM:1,
$aM:function(){return[W.aF]},
$ax:function(){return[W.aF]},
$ik:1,
$ak:function(){return[W.aF]},
$ib:1,
$ab:function(){return[W.aF]},
$aH:function(){return[W.aF]}}
W.ju.prototype={
H:function(a,b){var u,t,s,r,q
H.o(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.ga2(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga2:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.c(r,t)
s=H.f(r[t],"$id3")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aaf:function(){return[P.h,P.h]},
$ay:function(){return[P.h,P.h]}}
W.jy.prototype={
j:function(a,b){return this.a.getAttribute(H.O(b))},
k:function(a,b,c){this.a.setAttribute(b,c)},
gn:function(a){return this.ga2(this).length}}
W.jz.prototype={}
W.li.prototype={}
W.jA.prototype={}
W.jB.prototype={
$1:function(a){return this.a.$1(H.f(a,"$im"))},
$S:37}
W.bM.prototype={
eI:function(a){var u
if($.d5.giy($.d5)){for(u=0;u<262;++u)$.d5.k(0,C.T[u],W.pt())
for(u=0;u<12;++u)$.d5.k(0,C.q[u],W.pu())}},
aQ:function(a){return $.nl().X(0,W.cv(a))},
au:function(a,b,c){var u=$.d5.j(0,H.i(W.cv(a))+"::"+b)
if(u==null)u=$.d5.j(0,"*::"+b)
if(u==null)return!1
return H.lt(u.$4(a,b,c,this))},
$iaA:1}
W.H.prototype={
gT:function(a){return new W.dF(a,this.gn(a),[H.ck(this,a,"H",0)])}}
W.dU.prototype={
aQ:function(a){return C.a.ds(this.a,new W.hU(a))},
au:function(a,b,c){return C.a.ds(this.a,new W.hT(a,b,c))},
$iaA:1}
W.hU.prototype={
$1:function(a){return H.f(a,"$iaA").aQ(this.a)},
$S:29}
W.hT.prototype={
$1:function(a){return H.f(a,"$iaA").au(this.a,this.b,this.c)},
$S:29}
W.eO.prototype={
eR:function(a,b,c,d){var u,t,s
this.a.at(0,c)
u=b.bx(0,new W.jW())
t=b.bx(0,new W.jX())
this.b.at(0,u)
s=this.c
s.at(0,C.x)
s.at(0,t)},
aQ:function(a){return this.a.X(0,W.cv(a))},
au:function(a,b,c){var u=this,t=W.cv(a),s=u.c
if(s.X(0,H.i(t)+"::"+b))return u.d.i1(c)
else if(s.X(0,"*::"+b))return u.d.i1(c)
else{s=u.b
if(s.X(0,H.i(t)+"::"+b))return!0
else if(s.X(0,"*::"+b))return!0
else if(s.X(0,H.i(t)+"::*"))return!0
else if(s.X(0,"*::*"))return!0}return!1},
$iaA:1}
W.jW.prototype={
$1:function(a){return!C.a.X(C.q,H.O(a))},
$S:30}
W.jX.prototype={
$1:function(a){return C.a.X(C.q,H.O(a))},
$S:30}
W.k4.prototype={
au:function(a,b,c){if(this.eA(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.X(0,b)
return!1}}
W.k5.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.O(a))},
$S:23}
W.k3.prototype={
aQ:function(a){var u=J.V(a)
if(!!u.$icP)return!1
u=!!u.$ip
if(u&&W.cv(a)==="foreignObject")return!1
if(u)return!0
return!1},
au:function(a,b,c){if(b==="is"||C.b.a1(b,"on"))return!1
return this.aQ(a)},
$iaA:1}
W.dF.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sd3(J.dn(u.a,t))
u.c=t
return!0}u.sd3(null)
u.c=s
return!1},
gK:function(a){return this.d},
sd3:function(a){this.d=H.E(a,H.q(this,0))},
$ib3:1}
W.aA.prototype={}
W.jU.prototype={$iq6:1}
W.f5.prototype={
cC:function(a){new W.kf(this).$2(a,null)},
b_:function(a,b){if(b==null)J.lJ(a)
else b.removeChild(a)},
hA:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nt(a)
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
try{t=J.ar(a)}catch(r){H.aj(r)}try{s=W.cv(a)
this.hz(H.f(a,"$iT"),b,p,t,s,H.f(o,"$iy"),H.O(n))}catch(r){if(H.aj(r) instanceof P.aL)throw r
else{this.b_(a,b)
window
q="Removing corrupted element "+H.i(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hz:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b_(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aQ(a)){o.b_(a,b)
window
u="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.au(a,"is",g)){o.b_(a,b)
window
u="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga2(f)
t=H.d(u.slice(0),[H.q(u,0)])
for(s=f.ga2(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.c(t,s)
r=t[s]
q=o.a
p=J.nw(r)
H.O(r)
if(!q.au(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.i(e)+" "+r+'="'+H.i(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.V(a).$icV)o.cC(a.content)},
$ipS:1}
W.kf.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hA(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b_(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.aj(s)
r=H.f(u,"$iG")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.f(t,"$iG")}},
$S:35}
W.en.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.da.prototype={}
W.db.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eU.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.dc.prototype={}
W.dd.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.ff.prototype={}
P.k_.prototype={
dN:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cA:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.V(a)
if(!!u.$iax)return new Date(a.a)
if(!!u.$io9)throw H.e(P.j_("structured clone of RegExp"))
if(!!u.$iaE)return a
if(!!u.$ibS)return a
if(!!u.$icx)return a
if(!!u.$icA)return a
if(!!u.$icI||!!u.$ibD||!!u.$icF)return a
if(!!u.$iy){t=q.dN(a)
s=q.b
if(t>=s.length)return H.c(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.H(a,new P.k1(p,q))
return p.a}if(!!u.$ib){t=q.dN(a)
p=q.b
if(t>=p.length)return H.c(p,t)
r=p[t]
if(r!=null)return r
return q.ic(a,t)}throw H.e(P.j_("structured clone of other type"))},
ic:function(a,b){var u,t=J.dj(a),s=t.gn(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.cA(t.j(a,u)))
return r}}
P.k1.prototype={
$2:function(a,b){this.a.a[a]=this.b.cA(b)},
$S:5}
P.ks.prototype={
$2:function(a,b){this.a[a]=b},
$S:5}
P.k0.prototype={}
P.fX.prototype={
gbi:function(){var u=this.b,t=H.aq(u,"x",0),s=W.T
return new H.hp(new H.d1(u,H.o(new P.fY(),{func:1,ret:P.S,args:[t]}),[t]),H.o(new P.fZ(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.f(c,"$iT")
u=this.gbi()
J.nu(u.b.$1(J.fj(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aC(this.gbi().a)},
j:function(a,b){var u=this.gbi()
return u.b.$1(J.fj(u.a,b))},
gT:function(a){var u=P.lW(this.gbi(),!1,W.T)
return new J.as(u,u.length,[H.q(u,0)])},
$ax:function(){return[W.T]},
$ak:function(){return[W.T]},
$ab:function(){return[W.T]}}
P.fY.prototype={
$1:function(a){return!!J.V(H.f(a,"$iG")).$iT},
$S:27}
P.fZ.prototype={
$1:function(a){return H.z(H.f(a,"$iG"),"$iT")},
$S:34}
P.jP.prototype={
gbt:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.D(t)
return H.E(u+t,H.q(this,0))},
gdv:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.D(t)
return H.E(u+t,H.q(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.i(u.a)+", "+H.i(u.b)+") "+H.i(u.c)+" x "+H.i(u.d)},
q:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.V(b)
if(!!u.$ial){t=p.a
if(t==u.gbq(b)){s=p.b
if(s==u.gbu(b)){r=p.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.D(r)
q=H.q(p,0)
if(H.E(t+r,q)===u.gbt(b)){t=p.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.D(t)
u=H.E(s+t,q)===u.gdv(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t=this,s=t.a,r=J.dp(s),q=t.b,p=J.dp(q),o=t.c
if(typeof s!=="number")return s.B()
if(typeof o!=="number")return H.D(o)
u=H.q(t,0)
o=C.d.gI(H.E(s+o,u))
s=t.d
if(typeof q!=="number")return q.B()
if(typeof s!=="number")return H.D(s)
u=C.d.gI(H.E(q+s,u))
return P.ox(P.jN(P.jN(P.jN(P.jN(0,r),p),o),u))}}
P.al.prototype={
gbq:function(a){return this.a},
gbu:function(a){return this.b},
gaH:function(a){return this.c},
gaD:function(a){return this.d}}
P.b6.prototype={$ib6:1}
P.he.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib6")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ax:function(){return[P.b6]},
$ik:1,
$ak:function(){return[P.b6]},
$ib:1,
$ab:function(){return[P.b6]},
$aH:function(){return[P.b6]}}
P.b9.prototype={$ib9:1}
P.hX.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib9")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ax:function(){return[P.b9]},
$ik:1,
$ak:function(){return[P.b9]},
$ib:1,
$ab:function(){return[P.b9]},
$aH:function(){return[P.b9]}}
P.i3.prototype={
gn:function(a){return a.length}}
P.cP.prototype={$icP:1}
P.iA.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.O(c)
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ax:function(){return[P.h]},
$ik:1,
$ak:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aH:function(){return[P.h]}}
P.p.prototype={
gc7:function(a){return new P.fX(a,new W.ap(a))},
ae:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aA])
C.a.h(p,W.mt(null))
C.a.h(p,W.mv())
C.a.h(p,new W.k3())
c=new W.f5(new W.dU(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).ie(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ap(s)
q=p.gaI(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.bc.prototype={$ibc:1}
P.iN.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibc")
throw H.e(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ax:function(){return[P.bc]},
$ik:1,
$ak:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$aH:function(){return[P.bc]}}
P.ey.prototype={}
P.ez.prototype={}
P.eJ.prototype={}
P.eK.prototype={}
P.eV.prototype={}
P.eW.prototype={}
P.f1.prototype={}
P.f2.prototype={}
P.R.prototype={$ik:1,
$ak:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]}}
P.fp.prototype={
gn:function(a){return a.length}}
P.fq.prototype={
j:function(a,b){return P.bm(a.get(H.O(b)))},
H:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bm(t.value[1]))}},
ga2:function(a){var u=H.d([],[P.h])
this.H(a,new P.fr(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.e(P.I("Not supported"))},
$aaf:function(){return[P.h,null]},
$iy:1,
$ay:function(){return[P.h,null]}}
P.fr.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.fs.prototype={
gn:function(a){return a.length}}
P.bR.prototype={}
P.hY.prototype={
gn:function(a){return a.length}}
P.em.prototype={}
P.ds.prototype={$ids:1}
P.dX.prototype={$idX:1}
P.c3.prototype={
a3:function(a,b,c){return a.uniform1f(b,c)},
bv:function(a,b,c){return a.uniform1i(b,c)},
U:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
j7:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
j8:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
em:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic3:1}
P.e0.prototype={$ie0:1}
P.ec.prototype={$iec:1}
P.is.prototype={
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
P.eR.prototype={}
P.eS.prototype={}
O.a3.prototype={
bB:function(a){var u=this
u.sfo(H.d([],[a]))
u.sd9(null)
u.sd6(null)
u.sda(null)},
cD:function(a,b,c){var u=this,t=H.aq(u,"a3",0)
H.o(b,{func:1,ret:P.S,args:[[P.k,t]]})
t={func:1,ret:-1,args:[P.l,[P.k,t]]}
H.o(a,t)
H.o(c,t)
u.sd9(b)
u.sd6(a)
u.sda(c)},
bf:function(a,b){return this.cD(a,null,b)},
h9:function(a){var u
H.n(a,"$ik",[H.aq(this,"a3",0)],"$ak")
u=this.b
if(u!=null)return u.$1(a)
return!0},
fz:function(a,b){var u
H.n(b,"$ik",[H.aq(this,"a3",0)],"$ak")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.as(u,u.length,[H.q(u,0)])},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aq(s,"a3",0)
H.E(b,r)
r=[r]
if(H.F(s.h9(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.fz(t,H.d([b],r))}},
sfo:function(a){this.a=H.n(a,"$ib",[H.aq(this,"a3",0)],"$ab")},
sd9:function(a){this.b=H.o(a,{func:1,ret:P.S,args:[[P.k,H.aq(this,"a3",0)]]})},
sd6:function(a){this.c=H.o(a,{func:1,ret:-1,args:[P.l,[P.k,H.aq(this,"a3",0)]]})},
sda:function(a){H.o(a,{func:1,ret:-1,args:[P.l,[P.k,H.aq(this,"a3",0)]]})},
$ik:1}
O.cE.prototype={
gn:function(a){return this.a.length},
gw:function(){var u=this.b
return u==null?this.b=D.Y():u},
aJ:function(){var u=this.b
if(u!=null)u.E(null)},
ga8:function(a){var u=this.a
if(u.length>0)return C.a.gaw(u)
else return V.bC()},
e9:function(a){var u=this.a
if(a==null)C.a.h(u,V.bC())
else C.a.h(u,a)
this.aJ()},
cr:function(){var u=this.a
if(u.length>0){u.pop()
this.aJ()}},
sbK:function(a){this.a=H.n(a,"$ib",[V.ak],"$ab")}}
E.fv.prototype={}
E.ao.prototype={
cQ:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.as(u,u.length,[H.q(u,0)]);u.A();){t=u.d
if(t.f==null)t.cQ()}},
sac:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gw().M(0,s.ge1())
u=s.c
if(u!=null)u.gw().h(0,s.ge1())
t=new D.J("shape",r,s.c,[F.e1])
t.b=!0
s.al(t)}},
sbc:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gw().M(0,s.ge3())
u=s.f
s.f=a
if(a!=null)a.gw().h(0,s.ge3())
s.cQ()
t=new D.J("technique",u,s.f,[O.bJ])
t.b=!0
s.al(t)}},
saF:function(a){var u,t,s=this
if(!J.Q(s.r,a)){u=s.r
if(u!=null)u.gw().M(0,s.ge_())
if(a!=null)a.gw().h(0,s.ge_())
s.r=a
t=new D.J("mover",u,a,[U.aa])
t.b=!0
s.al(t)}},
an:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.ao(0,b,s):null
if(!J.Q(q,s.x)){u=s.x
s.x=q
t=new D.J("matrix",u,q,[V.ak])
t.b=!0
s.al(t)}r=s.f
if(r!=null)r.an(0,b)
for(r=s.y.a,r=new J.as(r,r.length,[H.q(r,0)]);r.A();)r.d.an(0,b)},
aU:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga8(s))
else C.a.h(s.a,r.p(0,s.ga8(s)))
s.aJ()
a.ea(t.f)
s=a.dy
u=(s&&C.a).gaw(s)
if(u!=null&&t.d!=null)u.iY(a,t)
for(s=t.y.a,s=new J.as(s,s.length,[H.q(s,0)]);s.A();)s.d.aU(a)
a.e8()
a.dx.cr()},
al:function(a){var u=this.z
if(u!=null)u.E(a)},
a_:function(){return this.al(null)},
e2:function(a){H.f(a,"$iB")
this.e=null
this.al(a)},
iK:function(){return this.e2(null)},
e4:function(a){this.al(H.f(a,"$iB"))},
iL:function(){return this.e4(null)},
e0:function(a){this.al(H.f(a,"$iB"))},
iJ:function(){return this.e0(null)},
dZ:function(a){this.al(H.f(a,"$iB"))},
iG:function(){return this.dZ(null)},
iF:function(a,b){var u,t,s,r,q,p,o
H.n(b,"$ik",[E.ao],"$ak")
for(u=b.length,t=this.gdY(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bV()
o.saj(null)
o.saN(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a_()},
iI:function(a,b){var u,t
H.n(b,"$ik",[E.ao],"$ak")
for(u=b.gT(b),t=this.gdY();u.A();)u.gK(u).gw().M(0,t)
this.a_()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seH:function(a,b){this.y=H.n(b,"$ia3",[E.ao],"$aa3")},
$icH:1}
E.i7.prototype={
eD:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ax(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cE()
t=[V.ak]
u.sbK(H.d([],t))
u.b=null
u.gw().h(0,new E.i8(s))
s.cy=u
u=new O.cE()
u.sbK(H.d([],t))
u.b=null
u.gw().h(0,new E.i9(s))
s.db=u
u=new O.cE()
u.sbK(H.d([],t))
u.b=null
u.gw().h(0,new E.ia(s))
s.dx=u
s.shM(H.d([],[O.bJ]))
u=s.dy;(u&&C.a).h(u,null)
s.shH(new H.a2([P.h,A.cQ]))},
giU:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga8(s)
u=t.db
u=t.z=s.p(0,u.ga8(u))
s=u}return s},
ea:function(a){var u=this.dy,t=a==null?(u&&C.a).gaw(u):a;(u&&C.a).h(u,t)},
e8:function(){var u=this.dy
if(u.length>1)u.pop()},
shM:function(a){this.dy=H.n(a,"$ib",[O.bJ],"$ab")},
shH:function(a){this.fr=H.n(a,"$iy",[P.h,A.cQ],"$ay")}}
E.i8.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.ch=u.z=null},
$S:10}
E.i9.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:10}
E.ia.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.cx=u.ch=null},
$S:10}
E.e8.prototype={
cL:function(a){H.f(a,"$iB")
this.ed()},
cK:function(){return this.cL(null)},
gis:function(){var u,t=this,s=Date.now(),r=C.d.a7(P.lQ(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ax(s,!1)
return u/r},
de:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.p()
if(typeof r!=="number")return H.D(r)
u=C.e.dO(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.p()
t=C.e.dO(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.me(C.o,s.gj_())}},
ed:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.o(new E.iG(this),{func:1,ret:-1,args:[P.a9]})
C.E.fd(u)
C.E.hw(u,W.mJ(t,P.a9))}},
iX:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.de()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ax(r,!1)
s.y=P.lQ(r-s.r.a).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aJ()
r=s.db
C.a.sn(r.a,0)
r.aJ()
r=s.dx
C.a.sn(r.a,0)
r.aJ()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aU(p.e)}s=p.z
if(s!=null)s.E(null)}catch(q){u=H.aj(q)
t=H.cl(q)
P.lB("Error: "+H.i(u))
P.lB("Stack: "+H.i(t))
throw H.e(u)}}}
E.iG.prototype={
$1:function(a){var u
H.mX(a)
u=this.a
if(u.ch){u.ch=!1
u.iX()}},
$S:57}
Z.ek.prototype={$ipM:1}
Z.dt.prototype={
bl:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aj(s)
t=P.C('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.e(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.jn.prototype={$ipN:1}
Z.du.prototype={
aT:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bl:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bl(a)},
el:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aU:function(a){var u,t,s,r,q,p=this.b.length
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
sfk:function(a){this.b=H.n(a,"$ib",[Z.bz],"$ab")},
$ipW:1}
Z.bz.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.i(H.cO(this.c))+"'")+"]"}}
Z.bL.prototype={
gcF:function(a){var u=this.a,t=(u&$.bq().a)!==0?3:0
if((u&$.bp().a)!==0)t+=3
if((u&$.bo().a)!==0)t+=3
if((u&$.bP().a)!==0)t+=2
if((u&$.bQ().a)!==0)t+=3
if((u&$.dl().a)!==0)t+=3
if((u&$.dm().a)!==0)t+=4
if((u&$.co().a)!==0)++t
return(u&$.bn().a)!==0?t+4:t},
i3:function(a){var u,t=$.bq(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bo()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bP()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bQ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.co()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bn()
if((s&t.a)!==0)if(u===a)return t
return $.nj()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bL))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.h]),t=this.a
if((t&$.bq().a)!==0)C.a.h(u,"Pos")
if((t&$.bp().a)!==0)C.a.h(u,"Norm")
if((t&$.bo().a)!==0)C.a.h(u,"Binm")
if((t&$.bP().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bQ().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dl().a)!==0)C.a.h(u,"Clr3")
if((t&$.dm().a)!==0)C.a.h(u,"Clr4")
if((t&$.co().a)!==0)C.a.h(u,"Weight")
if((t&$.bn().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fy.prototype={}
D.bV.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.B]}
H.o(b,u)
if(this.a==null)this.saj(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
M:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[D.B]})
u=s.a
u=u==null?null:C.a.X(u,b)
if(u===!0){u=s.a
t=(u&&C.a).M(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.X(u,b)
if(u===!0){u=s.b
t=(u&&C.a).M(u,b)||t}return t},
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
return!0}if(!t)C.a.H(P.lW(u,!0,{func:1,ret:-1,args:[D.B]}),new D.fT(q))
u=r.b
if(u!=null){r.saN(H.d([],[{func:1,ret:-1,args:[D.B]}]))
C.a.H(u,new D.fU(q))}return!0},
ah:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}},
saj:function(a){this.a=H.n(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")},
saN:function(a){this.b=H.n(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")}}
D.fT.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.fU.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.B.prototype={}
D.bY.prototype={}
D.bZ.prototype={}
D.J.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.dv.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dv))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.dJ.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dJ))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.hd.prototype={
iQ:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
iM:function(a){this.c=a.b
this.d.M(0,a.a)
return!1},
shp:function(a){this.d=H.n(a,"$ima",[P.l],"$ama")}}
X.dN.prototype={}
X.hl.prototype={
aY:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.p()
u=b.b
t=q.ch
if(typeof u!=="number")return u.p()
s=new V.ab(o.a+n*m,o.b+u*t)
t=q.a.gaR()
r=new X.bl(a,V.bG(),q.x,t,s)
r.b=!0
q.z=new P.ax(p,!1)
q.x=s
return r},
cq:function(a,b){this.r=a.a
return!1},
bb:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.es()
if(typeof u!=="number")return u.ai()
this.r=(u&~t)>>>0
return!1},
ba:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.aY(a,b))
return!0},
iR:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaR()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.p()
q=a.b
p=o.cy
if(typeof q!=="number")return q.p()
t=new X.cG(new V.X(s*r,q*p),u,t)
t.b=!0
n.E(t)
return!0},
fZ:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dN(c,r.a.gaR(),b)
s.b=!0
t.E(s)
r.y=new P.ax(u,!1)
r.x=V.bG()}}
X.az.prototype={
q:function(a,b){var u=this
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
X.hN.prototype={
bH:function(a,b,c){var u=this,t=new P.ax(Date.now(),!1),s=u.a.gaR(),r=new X.bl(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cq:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.bH(a,b,!0))
return!0},
bb:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.es()
if(typeof t!=="number")return t.ai()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.bH(a,b,!0))
return!0},
ba:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.bH(a,b,!1))
return!0},
iS:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaR()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.p()
r=a.b
q=p.ch
if(typeof r!=="number")return r.p()
u=new X.cG(new V.X(t*s,r*q),u,b)
u.b=!0
o.E(u)
return!0},
gdA:function(){var u=this.b
return u==null?this.b=D.Y():u},
gbw:function(){var u=this.c
return u==null?this.c=D.Y():u},
gdW:function(){var u=this.d
return u==null?this.d=D.Y():u}}
X.cG.prototype={}
X.i2.prototype={}
X.ea.prototype={}
X.iK.prototype={
aY:function(a,b){var u,t,s,r,q=this
H.n(a,"$ib",[V.ab],"$ab")
u=new P.ax(Date.now(),!1)
t=a.length>0?a[0]:V.bG()
s=q.a.gaR()
r=new X.ea(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
iP:function(a){var u
H.n(a,"$ib",[V.ab],"$ab")
u=this.b
if(u==null)return!1
u.E(this.aY(a,!0))
return!0},
iN:function(a){var u
H.n(a,"$ib",[V.ab],"$ab")
u=this.c
if(u==null)return!1
u.E(this.aY(a,!0))
return!0},
iO:function(a){var u
H.n(a,"$ib",[V.ab],"$ab")
u=this.d
if(u==null)return!1
u.E(this.aY(a,!1))
return!0}}
X.ef.prototype={
gaR:function(){var u=this.a,t=C.n.gdw(u).c
t.toString
u=C.n.gdw(u).d
u.toString
return V.m8(0,0,t,u)},
cZ:function(a){var u=a.keyCode,t=H.F(a.ctrlKey)||H.F(a.metaKey)
return new X.dJ(u,new X.az(t,a.altKey,a.shiftKey))},
aO:function(a){var u=this.b,t=H.F(a.ctrlKey)||H.F(a.metaKey)
u.c=new X.az(t,a.altKey,a.shiftKey)},
c_:function(a){var u=this.b,t=H.F(a.ctrlKey)||H.F(a.metaKey)
u.c=new X.az(t,a.altKey,a.shiftKey)},
aB:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.L()
u=t.top
if(typeof r!=="number")return r.L()
return new V.ab(s-q,r-u)},
aZ:function(a){return new V.X(a.movementX,a.movementY)},
bV:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.ab])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=C.e.am(r.pageX)
C.e.am(r.pageY)
p=o.left
C.e.am(r.pageX)
C.a.h(n,new V.ab(q-p,C.e.am(r.pageY)-o.top))}return n},
az:function(a){var u=a.buttons,t=H.F(a.ctrlKey)||H.F(a.metaKey)
return new X.dv(u,new X.az(t,a.altKey,a.shiftKey))},
bL:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.L()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.L()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fT:function(a){this.f=!0},
fH:function(a){this.f=!1},
fN:function(a){H.f(a,"$iag")
if(H.F(this.f)&&this.bL(a))a.preventDefault()},
fX:function(a){var u
H.f(a,"$ib5")
if(!H.F(this.f))return
u=this.cZ(a)
this.b.iQ(u)},
fV:function(a){var u
H.f(a,"$ib5")
if(!H.F(this.f))return
u=this.cZ(a)
this.b.iM(u)},
h0:function(a){var u,t,s,r,q=this
H.f(a,"$iag")
u=q.a
u.focus()
q.f=!0
q.aO(a)
if(H.F(q.x)){t=q.az(a)
s=q.aZ(a)
if(q.d.cq(t,s))a.preventDefault()
return}if(H.F(q.r)){q.y=a
u.requestPointerLock()
return}t=q.az(a)
r=q.aB(a)
if(q.c.cq(t,r))a.preventDefault()},
h4:function(a){var u,t,s,r=this
H.f(a,"$iag")
r.aO(a)
u=r.az(a)
if(H.F(r.x)){t=r.aZ(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aB(a)
if(r.c.bb(u,s))a.preventDefault()},
fR:function(a){var u,t,s,r=this
H.f(a,"$iag")
if(!r.bL(a)){r.aO(a)
u=r.az(a)
if(H.F(r.x)){t=r.aZ(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aB(a)
if(r.c.bb(u,s))a.preventDefault()}},
h2:function(a){var u,t,s,r=this
H.f(a,"$iag")
r.aO(a)
u=r.az(a)
if(H.F(r.x)){t=r.aZ(a)
if(r.d.ba(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aB(a)
if(r.c.ba(u,s))a.preventDefault()},
fP:function(a){var u,t,s,r=this
H.f(a,"$iag")
if(!r.bL(a)){r.aO(a)
u=r.az(a)
if(H.F(r.x)){t=r.aZ(a)
if(r.d.ba(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aB(a)
if(r.c.ba(u,s))a.preventDefault()}},
h6:function(a){var u,t,s=this
H.f(a,"$ibe")
s.aO(a)
u=new V.X((a&&C.D).gih(a),C.D.gii(a)).u(0,180)
if(H.F(s.x)){if(s.d.iR(u))a.preventDefault()
return}if(H.F(s.r))return
t=s.aB(a)
if(s.c.iS(u,t))a.preventDefault()},
h8:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.az(s.y)
t=s.aB(s.y)
s.d.fZ(u,t,r)}},
hl:function(a){var u,t=this
H.f(a,"$iaX")
t.a.focus()
t.f=!0
t.c_(a)
u=t.bV(a)
if(t.e.iP(u))a.preventDefault()},
hh:function(a){var u
H.f(a,"$iaX")
this.c_(a)
u=this.bV(a)
if(this.e.iN(u))a.preventDefault()},
hj:function(a){var u
H.f(a,"$iaX")
this.c_(a)
u=this.bV(a)
if(this.e.iO(u))a.preventDefault()},
sfe:function(a){this.z=H.n(a,"$ib",[[P.cT,P.U]],"$ab")}}
D.dA.prototype={$iae:1,$icH:1}
D.ae.prototype={$icH:1}
D.dK.prototype={
aa:function(a){var u=this.x
if(u!=null)u.E(a)},
d8:function(a){var u
H.f(a,"$iB")
u=this.y
if(u!=null)u.E(a)},
fY:function(){return this.d8(null)},
hb:function(a){var u,t,s
H.n(a,"$ik",[D.ae],"$ak")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(s==null||this.eJ(s))return!1}return!0},
fB:function(a,b){var u,t,s,r,q,p,o,n=D.ae
H.n(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gd7(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=H.f(b[q],"$iae")
if(p instanceof D.bE)C.a.h(this.f,p)
o=p.Q
if(o==null){o=new D.bV()
o.saj(null)
o.saN(null)
o.c=null
o.d=0
p.Q=o}H.o(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bY([n])
n.b=!0
this.aa(n)},
hf:function(a,b){var u,t,s,r=D.ae
H.n(b,"$ik",[r],"$ak")
for(u=b.gT(b),t=this.gd7();u.A();){s=u.gK(u)
C.a.M(this.e,s)
s.gw().M(0,t)}r=new D.bZ([r])
r.b=!0
this.aa(r)},
eJ:function(a){var u=C.a.X(this.f,a)
return u},
seK:function(a){this.e=H.n(a,"$ib",[D.dA],"$ab")},
shm:function(a){this.f=H.n(a,"$ib",[D.bE],"$ab")},
seN:function(a){this.r=H.n(a,"$ib",[D.e3],"$ab")},
$ak:function(){return[D.ae]},
$aa3:function(){return[D.ae]}}
D.bE.prototype={
aa:function(a){var u
H.f(a,"$iB")
u=this.Q
if(u!=null)u.E(a)},
eM:function(){return this.aa(null)},
gak:function(){return 4},
$iae:1,
$icH:1}
D.e3.prototype={$iae:1,$icH:1}
V.a7.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.b0.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b0))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.fS.prototype={}
V.hF.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.hF))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.t],o=V.ci(H.d([q.a,q.d,q.r],p),3,0),n=V.ci(H.d([q.b,q.e,q.x],p),3,0),m=V.ci(H.d([q.c,q.f,q.y],p),3,0)
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
V.ak.prototype={
ax:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.t])
return t},
ix:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.K().a)return V.bC()
u=1/b1
t=-n
s=-a0
return V.b8((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
p:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.b8(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
cz:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a5(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ak))return!1
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
F:function(a){var u,t,s,r,q,p=this,o=[P.t],n=V.ci(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.ci(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.ci(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.ci(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.a5.prototype={
B:function(a,b){return new V.a5(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a,b){return new V.a5(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){return new V.a5(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.bH.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bH))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.dZ.prototype={
gab:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dZ))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.X.prototype={
b6:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.D(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.D(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.p()
u=this.b
if(typeof u!=="number")return u.p()
return new V.X(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.K().a){u=$.ml
return u==null?$.ml=new V.X(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.X(u/b,t/b)},
q:function(a,b){var u,t,s
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
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.L.prototype={
b6:function(a){return Math.sqrt(this.C(this))},
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cm:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.L(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aC:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.L(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.L(this.a+b.a,this.b+b.b,this.c+b.c)},
S:function(a){return new V.L(-this.a,-this.b,-this.c)},
p:function(a,b){return new V.L(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if(Math.abs(b-0)<$.K().a)return V.d0()
return new V.L(this.a/b,this.b/b,this.c/b)},
dV:function(){var u=$.K().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.L))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.ca.prototype={
b6:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ca))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
U.fz.prototype={
bC:function(a){var u=V.kV(a,this.c,this.b)
return u},
gw:function(){var u=this.y
return u==null?this.y=D.Y():u},
G:function(a){var u=this.y
if(u!=null)u.E(a)},
scB:function(a,b){},
scn:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.K().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bC(u)}s=new D.J("maximumLocation",s,t.b,[P.t])
s.b=!0
t.G(s)}},
scp:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.K().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bC(u)}s=new D.J("minimumLocation",s,t.c,[P.t])
s.b=!0
t.G(s)}},
sZ:function(a,b){var u,t=this
b=t.bC(b)
u=t.d
if(!(Math.abs(u-b)<$.K().a)){t.d=b
u=new D.J("location",u,b,[P.t])
u.b=!0
t.G(u)}},
sco:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.K().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.J("maximumVelocity",r,a,[P.t])
r.b=!0
s.G(r)}},
sV:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.K().a)){u.f=a
t=new D.J("velocity",t,a,[P.t])
t.b=!0
u.G(t)}},
sca:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.K().a)){this.x=a
u=new D.J("dampening",u,a,[P.t])
u.b=!0
this.G(u)}},
an:function(a,b){var u,t,s,r=this,q=r.f,p=$.K().a
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
u=s}r.sV(u)}}}
U.dx.prototype={
gw:function(){var u=this.b
return u==null?this.b=D.Y():u},
ao:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dx))return!1
return J.Q(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")}}
U.cz.prototype={
gw:function(){var u=this.e
return u==null?this.e=D.Y():u},
G:function(a){var u
H.f(a,"$iB")
u=this.e
if(u!=null)u.E(a)},
a6:function(){return this.G(null)},
eP:function(a,b){var u,t,s,r,q,p,o,n=U.aa
H.n(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gaM(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gw()
o.toString
H.o(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bY([n])
n.b=!0
this.G(n)},
hd:function(a,b){var u,t,s=U.aa
H.n(b,"$ik",[s],"$ak")
for(u=b.gT(b),t=this.gaM();u.A();)u.gK(u).gw().M(0,t)
s=new D.bZ([s])
s.b=!0
this.G(s)},
ao:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.R()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.as(r,r.length,[H.q(r,0)]),u=null;r.A();){q=r.d
if(q!=null){t=q.ao(0,b,c)
if(t!=null)u=u==null?t:t.p(0,u)}}s.f=u==null?V.bC():u
r=s.e
if(r!=null)r.ah(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cz))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.Q(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ak:function(){return[U.aa]},
$aa3:function(){return[U.aa]},
$iaa:1}
U.aa.prototype={}
U.e_.prototype={
gw:function(){var u=this.y
return u==null?this.y=D.Y():u},
G:function(a){var u=this.y
if(u!=null)u.E(a)},
sep:function(a){var u
a=V.kV(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.K().a)){this.a=a
u=new D.J("yaw",u,a,[P.t])
u.b=!0
this.G(u)}},
se7:function(a,b){var u
b=V.kV(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.K().a)){this.b=b
u=new D.J("pitch",u,b,[P.t])
u.b=!0
this.G(u)}},
see:function(a){var u
a=V.kV(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.K().a)){this.c=a
u=new D.J("roll",u,a,[P.t])
u.b=!0
this.G(u)}},
ao:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.sep(u.a+u.d*b.y)
u.se7(0,u.b+u.e*b.y)
u.see(u.c+u.f*b.y)
u.x=V.m_(u.c).p(0,V.lZ(u.b)).p(0,V.lY(u.a))
t=u.y
if(t!=null)t.ah(0)}return u.x},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.e_))return!1
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
return"Rotater: ["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+"], ["+V.N(u.d,3,0)+", "+V.N(u.e,3,0)+", "+V.N(u.f,3,0)+"]"}}
U.eg.prototype={
gw:function(){var u=this.cy
return u==null?this.cy=D.Y():u},
G:function(a){var u
H.f(a,"$iB")
u=this.cy
if(u!=null)u.E(a)},
a6:function(){return this.G(null)},
b1:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdA().h(0,u.gbM())
u.a.c.gdW().h(0,u.gbO())
u.a.c.gbw().h(0,u.gbQ())
return!0},
bN:function(a){var u=this
H.f(a,"$iB")
if(!J.Q(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bP:function(a){var u,t,s,r,q,p,o,n=this
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
u=new V.X(t.a,t.b).p(0,2).u(0,u.gab())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.p()
s=n.e
if(typeof s!=="number")return H.D(s)
t.sV(u*10*s)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=new V.X(s.a,s.b).p(0,2).u(0,u.gab())
s=n.b
q=r.a
if(typeof q!=="number")return q.S()
p=n.e
if(typeof p!=="number")return H.D(p)
o=n.z
if(typeof o!=="number")return H.D(o)
s.sZ(0,-q*p+o)
n.b.sV(0)
t=t.L(0,a.z)
n.Q=new V.X(t.a,t.b).p(0,2).u(0,u.gab())}n.a6()},
bR:function(a){var u,t,s,r=this
H.f(a,"$iB")
if(!H.F(r.y))return
r.y=!1
if(H.F(r.x))return
u=r.Q
if(u.C(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.p()
s=r.e
if(typeof s!=="number")return H.D(s)
u.sV(t*10*s)
r.a6()}},
ao:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.R()
if(s<r){t.ch=r
u=b.y
t.b.an(0,u)
t.cx=V.m_(t.b.d)}return t.cx},
$iaa:1}
U.eh.prototype={
gw:function(){var u=this.fx
return u==null?this.fx=D.Y():u},
G:function(a){var u
H.f(a,"$iB")
u=this.fx
if(u!=null)u.E(a)},
a6:function(){return this.G(null)},
b1:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdA().h(0,s.gbM())
s.a.c.gdW().h(0,s.gbO())
s.a.c.gbw().h(0,s.gbQ())
u=s.a.d
t=u.f
u=t==null?u.f=D.Y():t
u.h(0,s.gfp())
u=s.a.d
t=u.d
u=t==null?u.d=D.Y():t
u.h(0,s.gfs())
u=s.a.e
t=u.b
u=t==null?u.b=D.Y():t
u.h(0,s.ghS())
u=s.a.e
t=u.d
u=t==null?u.d=D.Y():t
u.h(0,s.ghQ())
u=s.a.e
t=u.c
u=t==null?u.c=D.Y():t
u.h(0,s.ghO())
return!0},
as:function(a){var u=a.a,t=a.b
if(H.F(this.f)){if(typeof u!=="number")return u.S()
u=-u}if(H.F(this.r)){if(typeof t!=="number")return t.S()
t=-t}return new V.X(u,t)},
bN:function(a){var u=this
a=H.z(H.f(a,"$iB"),"$ibl")
if(!J.Q(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bP:function(a){var u,t,s,r,q,p,o,n=this
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
u=n.as(new V.X(t.a,t.b).p(0,2).u(0,u.gab()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.D(s)
t.sV(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.D(t)
s.sV(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.as(new V.X(s.a,s.b).p(0,2).u(0,u.gab()))
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
n.b.sV(0)
n.c.sV(0)
t=t.L(0,a.z)
n.dx=n.as(new V.X(t.a,t.b).p(0,2).u(0,u.gab()))}n.a6()},
bR:function(a){var u,t,s,r=this
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
u.sV(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.D(u)
s.sV(-t*10*u)
r.a6()}},
fq:function(a){var u=this
if(H.z(H.f(a,"$iB"),"$idN").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
ft:function(a){var u,t,s,r,q,p,o,n=this
a=H.z(H.f(a,"$iB"),"$ibl")
if(!J.Q(n.d,a.x.b))return
u=a.c
t=a.d
s=t.L(0,a.y)
r=n.as(new V.X(s.a,s.b).p(0,2).u(0,u.gab()))
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
n.b.sV(0)
n.c.sV(0)
t=t.L(0,a.z)
n.dx=n.as(new V.X(t.a,t.b).p(0,2).u(0,u.gab()))
n.a6()},
hT:function(a){var u=this
H.f(a,"$iB")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hR:function(a){var u,t,s,r,q,p,o,n=this
a=H.z(H.f(a,"$iB"),"$iea")
if(!H.F(n.cx))return
if(H.F(n.ch)){u=a.d.L(0,a.y)
u=new V.X(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.D(t)
if(u<t)return
n.ch=!1}if(H.F(n.e)){u=a.c
t=a.d.L(0,a.y)
u=n.as(new V.X(t.a,t.b).p(0,2).u(0,u.gab()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.D(s)
t.sV(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.D(t)
s.sV(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.as(new V.X(s.a,s.b).p(0,2).u(0,u.gab()))
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
n.b.sV(0)
n.c.sV(0)
t=t.L(0,a.z)
n.dx=n.as(new V.X(t.a,t.b).p(0,2).u(0,u.gab()))}n.a6()},
hP:function(a){var u,t,s,r=this
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
u.sV(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.D(u)
s.sV(-t*10*u)
r.a6()}},
ao:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.R()
if(s<r){t.dy=r
u=b.y
t.c.an(0,u)
t.b.an(0,u)
t.fr=V.lY(t.b.d).p(0,V.lZ(t.c.d))}return t.fr},
$iaa:1}
U.ei.prototype={
gw:function(){var u=this.r
return u==null?this.r=D.Y():u},
G:function(a){var u=this.r
if(u!=null)u.E(a)},
b1:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.Y():t
t=r.gfv()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.Y():s).h(0,t)
return!0},
fw:function(a){var u,t,s,r,q=this
H.f(a,"$iB")
if(!J.Q(q.b,q.a.b.c))return
H.z(a,"$icG")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.p()
r=u+t*s
if(u!==r){q.d=r
u=new D.J("zoom",u,r,[P.t])
u.b=!0
q.G(u)}},
ao:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.lb(u,u,u,1)}return t.f},
$iaa:1}
M.dD.prototype={
ay:function(a){var u
H.f(a,"$iB")
u=this.y
if(u!=null)u.E(a)},
eQ:function(){return this.ay(null)},
fJ:function(a,b){var u,t,s,r,q,p,o,n=E.ao
H.n(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gar(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bV()
o.saj(null)
o.saN(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bY([n])
n.b=!0
this.ay(n)},
fL:function(a,b){var u,t,s=E.ao
H.n(b,"$ik",[s],"$ak")
for(u=b.gT(b),t=this.gar();u.A();)u.gK(u).gw().M(0,t)
s=new D.bZ([s])
s.b=!0
this.ay(s)},
sbc:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gw().M(0,t.gar())
u=t.d
t.d=a
if(a!=null)a.gw().h(0,t.gar())
s=new D.J("technique",u,t.d,[O.bJ])
s.b=!0
t.ay(s)}},
gw:function(){var u=this.y
return u==null?this.y=D.Y():u},
aU:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.ea(a1.d)
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
o=C.e.am(p*s)
p=q.b
if(typeof r!=="number")return H.D(r)
n=C.e.am(p*r)
p=C.e.am(q.c*s)
a2.c=p
q=C.e.am(q.d*r)
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
i=V.b8(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.e9(i)
t=$.m3
if(t==null){t=V.nX()
q=$.mo
if(q==null)q=$.mo=new V.L(0,1,0)
p=$.mm
if(p==null)p=$.mm=new V.L(0,0,-1)
h=p.u(0,Math.sqrt(p.C(p)))
q=q.aC(h)
g=q.u(0,Math.sqrt(q.C(q)))
f=h.aC(g)
e=new V.L(t.a,t.b,t.c)
d=g.S(0).C(e)
c=f.S(0).C(e)
b=h.S(0).C(e)
t=V.b8(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.m3=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.ao(0,a2,u)
if(a0!=null)a=a0.p(0,a)}a2.db.e9(a)
u=a1.d
if(u!=null)u.an(0,a2)
for(u=a1.e.a,u=new J.as(u,u.length,[H.q(u,0)]);u.A();)u.d.an(0,a2)
for(u=a1.e.a,u=new J.as(u,u.length,[H.q(u,0)]);u.A();)u.d.aU(a2)
a1.b.toString
a2.cy.cr()
a2.db.cr()
a1.c.toString
a2.e8()},
sf5:function(a,b){this.e=H.n(b,"$ia3",[E.ao],"$aa3")},
$ipT:1}
A.dr.prototype={}
A.fo.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ik:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
ij:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.an.prototype={
gap:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
q:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.an))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.hs.prototype={
eC:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.a6("")
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
A.p5(c3,u)
A.p7(c3,u)
A.p6(c3,u)
A.p9(c3,u)
A.pa(c3,u)
A.p8(c3,u)
A.pb(c3,u)
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
m=A.p4(b8.z)
b8.c=n
b8.d=m
b8.e=b8.d_(n,35633)
b8.f=b8.d_(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.F(H.lt(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.A(P.C("Failed to link shader: "+H.i(l)))}b8.hE()
b8.hG()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.z(b8.y.Y(0,"invViewMat"),"$iaB")
if(t)b8.dy=H.z(b8.y.Y(0,"objMat"),"$iaB")
if(r)b8.fr=H.z(b8.y.Y(0,"viewObjMat"),"$iaB")
b8.fy=H.z(b8.y.Y(0,"projViewObjMat"),"$iaB")
if(c3.ry)b8.k1=H.z(b8.y.Y(0,"txt2DMat"),"$icZ")
if(c3.x1)b8.k2=H.z(b8.y.Y(0,"txtCubeMat"),"$iaB")
if(c3.x2)b8.k3=H.z(b8.y.Y(0,"colorMat"),"$iaB")
b8.sf1(H.d([],[A.aB]))
t=c3.y2
if(t>0){b8.k4=H.f(b8.y.Y(0,"bendMatCount"),"$iaH")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.A(P.C(c0+q+c1));(s&&C.a).h(s,H.z(j,"$iaB"))}}if(c3.a.a)b8.r2=H.z(b8.y.Y(0,"emissionClr"),"$ia0")
if(c3.b.a)b8.x1=H.z(b8.y.Y(0,"ambientClr"),"$ia0")
if(c3.c.a)b8.y2=H.z(b8.y.Y(0,"diffuseClr"),"$ia0")
if(c3.d.a)b8.dF=H.z(b8.y.Y(0,"invDiffuseClr"),"$ia0")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.dH=H.z(b8.y.Y(0,"shininess"),"$iai")
if(t)b8.dG=H.z(b8.y.Y(0,"specularClr"),"$ia0")}if(c3.cy){b8.dI=H.z(b8.y.Y(0,"envSampler"),"$ic7")
if(c3.r.a)b8.dJ=H.z(b8.y.Y(0,"reflectClr"),"$ia0")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.dK=H.z(b8.y.Y(0,"refraction"),"$iai")
if(t)b8.dL=H.z(b8.y.Y(0,"refractClr"),"$ia0")}}if(c3.y.a)b8.dM=H.z(b8.y.Y(0,"alpha"),"$iai")
t=P.l
s=[t,A.aH]
b8.sfb(new H.a2(s))
b8.sfc(new H.a2([t,[P.b,A.c4]]))
b8.shn(new H.a2(s))
b8.sho(new H.a2([t,[P.b,A.c5]]))
b8.shJ(new H.a2(s))
b8.shK(new H.a2([t,[P.b,A.c8]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.c4],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ai()
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
H.z(b,"$ic6")
a2=b}else a2=b9
C.a.h(e,new A.c4(a1,a0,a,j,c,a2))}b8.cc.k(0,g,e)
q=b8.cb
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.A(P.C(c0+o+c1))
q.k(0,g,H.f(j,"$iaH"))}for(t=c3.Q,s=t.length,r=[A.c5],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
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
if(typeof g!=="number")return g.ai()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.A(P.C(c0+o+c1))
H.z(a3,"$icZ")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.A(P.C(c0+o+c1))
H.z(a3,"$ic7")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.A(P.C(c0+o+c1))
H.z(a3,"$ic7")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.A(P.C(c0+o+c1))
H.z(a5,"$icY")
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
b1=b0}C.a.h(e,new A.c5(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.ce.k(0,g,e)
q=b8.cd
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.A(P.C(c0+o+c1))
q.k(0,g,H.f(j,"$iaH"))}for(t=c3.ch,s=t.length,r=[A.c8],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
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
if(typeof g!=="number")return g.ai()
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
H.z(a5,"$icY")
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
H.z(a5,"$ic6")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.A(P.C(c0+o+c1))
H.z(a5,"$ic6")
a6=a5}else a6=b9
C.a.h(e,new A.c8(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.cg.k(0,g,e)
q=b8.cf
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.A(P.C(c0+o+c1))
q.k(0,g,H.f(j,"$iaH"))}}},
hC:function(a,b){},
sf1:function(a){this.r1=H.n(a,"$ib",[A.aB],"$ab")},
sfb:function(a){this.cb=H.n(a,"$iy",[P.l,A.aH],"$ay")},
sfc:function(a){this.cc=H.n(a,"$iy",[P.l,[P.b,A.c4]],"$ay")},
shn:function(a){this.cd=H.n(a,"$iy",[P.l,A.aH],"$ay")},
sho:function(a){this.ce=H.n(a,"$iy",[P.l,[P.b,A.c5]],"$ay")},
shJ:function(a){this.cf=H.n(a,"$iy",[P.l,A.aH],"$ay")},
shK:function(a){this.cg=H.n(a,"$iy",[P.l,[P.b,A.c8]],"$ay")}}
A.aM.prototype={
i:function(a){return"dirLight"+H.i(this.a)}}
A.aQ.prototype={
i:function(a){return"pointLight"+H.i(this.a)}}
A.aU.prototype={
i:function(a){return"spotLight"+H.i(this.a)}}
A.hv.prototype={
i:function(a){return this.b4}}
A.c4.prototype={}
A.c5.prototype={}
A.c8.prototype={}
A.cQ.prototype={
eF:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
d_:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.F(H.lt(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.e(P.C("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
hE:function(){var u,t,s,r=this,q=H.d([],[A.dr]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.D(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dr(p,t.name,s))}r.x=new A.fo(q)},
hG:function(){var u,t,s,r=this,q=H.d([],[A.eb]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.D(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.ig(t.type,t.size,t.name,s))}r.y=new A.iX(q)},
aL:function(a,b,c){var u=this.a
if(a===1)return new A.aH(u,b,c)
else return A.le(u,this.r,b,a,c)},
f8:function(a,b,c){var u=this.a
if(a===1)return new A.c6(u,b,c)
else return A.le(u,this.r,b,a,c)},
f9:function(a,b,c){var u=this.a
if(a===1)return new A.c7(u,b,c)
else return A.le(u,this.r,b,a,c)},
bk:function(a,b){return new P.et(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
ig:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aL(b,c,d)
case 5121:return u.aL(b,c,d)
case 5122:return u.aL(b,c,d)
case 5123:return u.aL(b,c,d)
case 5124:return u.aL(b,c,d)
case 5125:return u.aL(b,c,d)
case 5126:return new A.ai(u.a,c,d)
case 35664:return new A.iT(u.a,c,d)
case 35665:return new A.a0(u.a,c,d)
case 35666:return new A.cY(u.a,c,d)
case 35667:return new A.iU(u.a,c,d)
case 35668:return new A.iV(u.a,c,d)
case 35669:return new A.iW(u.a,c,d)
case 35674:return new A.iY(u.a,c,d)
case 35675:return new A.cZ(u.a,c,d)
case 35676:return new A.aB(u.a,c,d)
case 35678:return u.f8(b,c,d)
case 35680:return u.f9(b,c,d)
case 35670:throw H.e(u.bk("BOOL",c))
case 35671:throw H.e(u.bk("BOOL_VEC2",c))
case 35672:throw H.e(u.bk("BOOL_VEC3",c))
case 35673:throw H.e(u.bk("BOOL_VEC4",c))
default:throw H.e(P.C("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.eb.prototype={}
A.iX.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
Y:function(a,b){var u=this.j(0,b)
if(u==null)throw H.e(P.C("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.O()},
O:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aH.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.iU.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.iV.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.iW.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.iS.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
shV:function(a){H.n(a,"$ib",[P.l],"$ab")}}
A.ai.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.iT.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.a0.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.cY.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.iY.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.cZ.prototype={
aq:function(a){var u=new Float32Array(H.dg(H.n(a,"$ib",[P.t],"$ab")))
C.c.j8(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.aB.prototype={
aq:function(a){var u=new Float32Array(H.dg(H.n(a,"$ib",[P.t],"$ab")))
C.c.em(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.c6.prototype={
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.c7.prototype={
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.kh.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cm(s.b,b).cm(s.d.cm(s.c,b),c)
a.sZ(0,new V.a5(r.a,r.b,r.c))
a.seh(r.u(0,Math.sqrt(r.C(r))))
s=1-b
u=1-c
a.sdt(new V.bH(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:7}
F.kt.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:21}
F.kv.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.D(p)
s=-s*p
u=r*p
a.sZ(0,new V.a5(s,u,q))
u=new V.L(s,u,q)
a.seh(u.u(0,Math.sqrt(u.C(u))))
a.sdt(new V.bH(1-c,2+c,-1,-1))},
$S:7}
F.kw.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:20}
F.kx.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:20}
F.kQ.prototype={
$2:function(a,b){return 0},
$S:21}
F.kR.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.D(s)
u=a.f
t=new V.L(u.a,u.b,u.c)
s=t.u(0,Math.sqrt(t.C(t))).p(0,this.b+s)
a.sZ(0,new V.a5(s.a,s.b,s.c))},
$S:7}
F.kT.prototype={
$1:function(a){return new V.a5(Math.cos(a),Math.sin(a),0)},
$S:17}
F.kF.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.a5(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:17}
F.ku.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lG(n.$1(o),m)
m=J.lG(n.$1(o+3.141592653589793/p.c),m).L(0,l)
m=new V.L(m.a,m.b,m.c)
u=m.u(0,Math.sqrt(m.C(m)))
n=$.mn
if(n==null){n=new V.L(1,0,0)
$.mn=n
t=n}else t=n
if(!J.Q(u,t)){n=$.mp
if(n==null){n=new V.L(0,0,1)
$.mp=n
t=n}else t=n}n=u.aC(t)
s=n.u(0,Math.sqrt(n.C(n)))
n=s.aC(u)
t=n.u(0,Math.sqrt(n.C(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.p(0,n*m)
m=s.p(0,q*m)
a.sZ(0,l.B(0,new V.a5(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:7}
F.a8.prototype={
b2:function(){var u=this
if(!u.gb3()){C.a.M(u.a.a.d.b,u)
u.a.a.a_()}u.bX()
u.bY()
u.ht()},
c0:function(a){this.a=a
C.a.h(a.d.b,this)},
c1:function(a){this.b=a
C.a.h(a.d.c,this)},
hD:function(a){this.c=a
C.a.h(a.d.d,this)},
bX:function(){var u=this.a
if(u!=null){C.a.M(u.d.b,this)
this.a=null}},
bY:function(){var u=this.b
if(u!=null){C.a.M(u.d.c,this)
this.b=null}},
ht:function(){var u=this.c
if(u!=null){C.a.M(u.d.d,this)
this.c=null}},
gb3:function(){return this.a==null||this.b==null||this.c==null},
f0:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d0()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dV())return
return s.u(0,Math.sqrt(s.C(s)))},
f4:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.L(0,q)
r=new V.L(r.a,r.b,r.c)
s=r.u(0,Math.sqrt(r.C(r)))
r=t.L(0,q)
r=new V.L(r.a,r.b,r.c)
r=s.aC(r.u(0,Math.sqrt(r.C(r))))
return r.u(0,Math.sqrt(r.C(r)))},
c6:function(){var u,t=this
if(t.d!=null)return!0
u=t.f0()
if(u==null){u=t.f4()
if(u==null)return!1}t.d=u
t.a.a.a_()
return!0},
f_:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d0()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dV())return
return s.u(0,Math.sqrt(s.C(s)))},
f3:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.K().a){l=d.L(0,g)
l=new V.L(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.S(0)}else{p=(l-u.b)/r
l=d.L(0,g).p(0,p).B(0,g).L(0,j)
l=new V.L(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.S(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.C(l)))
l=o.aC(q)
l=l.u(0,Math.sqrt(l.C(l))).aC(o)
q=l.u(0,Math.sqrt(l.C(l)))}return q},
c4:function(){var u,t=this
if(t.e!=null)return!0
u=t.f_()
if(u==null){u=t.f3()
if(u==null)return!1}t.e=u
t.a.a.a_()
return!0},
gi8:function(a){var u=this
if(J.Q(u.a,u.b))return!0
if(J.Q(u.b,u.c))return!0
if(J.Q(u.c,u.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
F:function(a){var u,t,s=this
if(s.gb3())return a+"disposed"
u=a+C.b.ag(J.ar(s.a.e),0)+", "+C.b.ag(J.ar(s.b.e),0)+", "+C.b.ag(J.ar(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
O:function(){return this.F("")}}
F.fV.prototype={}
F.ip.prototype={
b8:function(a,b,c){var u,t=b.a
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
b2:function(){var u=this
if(!u.gb3()){C.a.M(u.a.a.c.b,u)
u.a.a.a_()}u.bX()
u.bY()},
c0:function(a){this.a=a
C.a.h(a.c.b,this)},
c1:function(a){this.b=a
C.a.h(a.c.c,this)},
bX:function(){var u=this.a
if(u!=null){C.a.M(u.c.b,this)
this.a=null}},
bY:function(){var u=this.b
if(u!=null){C.a.M(u.c.c,this)
this.b=null}},
gb3:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
F:function(a){if(this.gb3())return a+"disposed"
return a+C.b.ag(J.ar(this.a.e),0)+", "+C.b.ag(J.ar(this.b.e),0)},
O:function(){return this.F("")}}
F.hf.prototype={}
F.iR.prototype={
b8:function(a,b,c){var u,t=b.a
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
F.bF.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
F:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ag(J.ar(u.e),0)},
O:function(){return this.F("")}}
F.e1.prototype={
gw:function(){var u=this.e
return u==null?this.e=D.Y():u},
b9:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.v()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){r=g[s]
h.a.h(0,r.ib())}h.a.v()
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
o=new F.bF()
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
F.nO(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){j=g[s]
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
F.cw(l,k,i)}g=h.e
if(g!=null)g.ah(0)},
av:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.av()||!1
if(!t.a.av())u=!1
s=t.e
if(s!=null)s.ah(0)
return u},
iC:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.q(o,0)])
for(o=[F.av];u.length!==0;){t=C.a.gip(u)
C.a.eb(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.c(u,r)
q=u[r]
if(q!=null&&a.b8(0,t,q)){C.a.h(s,q)
C.a.eb(u,r)}}if(s.length>1)b.b9(s)}}p.a.v()
p.c.cu()
p.d.cu()
p.b.iW()
p.c.cv(new F.iR())
p.d.cv(new F.ip())
o=p.e
if(o!=null)o.ah(0)},
c2:function(){this.iC(new F.jg(),new F.hV())},
ci:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.ci()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.c(o,u)
t=o[u]
o=t.r
if(o!=null)t.sdX(new V.L(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.L(s,r,o).u(0,Math.sqrt(s*s+r*r+o*o))
if(!J.Q(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.E(null)}}}}o=p.e
if(o!=null)o.ah(0)},
i6:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bq()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bp().a)!==0)++s
if((t&$.bo().a)!==0)++s
if((t&$.bP().a)!==0)++s
if((t&$.bQ().a)!==0)++s
if((t&$.dl().a)!==0)++s
if((t&$.dm().a)!==0)++s
if((t&$.co().a)!==0)++s
if((t&$.bn().a)!==0)++s
r=a3.gcF(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.t
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dt])
for(n=0,m=0;m<s;++m){l=a3.i3(m)
k=l.gcF(l)
C.a.k(o,m,new Z.dt(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.c(u,j)
i=u[j].iA(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.n(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.dg(p)),35044)
u.bindBuffer(a0,null)
e=new Z.du(new Z.ek(a0,f),o,a3)
e.sfk(H.d([],[Z.bz]))
if(a.b.b.length!==0){t=P.l
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.v()
C.a.h(d,c.e)}b=Z.lh(u,34963,H.n(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bz(0,d.length,b))}if(a.c.b.length!==0){t=P.l
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.v()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.v()
C.a.h(d,c.e)}b=Z.lh(u,34963,H.n(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bz(1,d.length,b))}if(a.d.b.length!==0){t=P.l
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
C.a.h(d,c.e)}b=Z.lh(u,34963,H.n(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bz(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.h])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.F(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.F(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.F(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.F(t))}return C.a.m(s,"\n")},
a_:function(){var u=this.e
if(u!=null)u.E(null)},
$ipU:1}
F.ih.prototype={
hZ:function(a){var u,t,s,r,q,p,o
H.n(a,"$ib",[F.av],"$ab")
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
C.a.h(u,F.cw(s,p,o))}}return u},
i_:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,"$ib",[F.av],"$ab")
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
C.a.h(u,F.cw(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cw(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cw(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cw(k,h,l))}o=!o}q=!q}return u},
gn:function(a){return this.b.length},
cv:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b8(0,p,n)){p.b2()
break}}}}},
cu:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=s.gi8(s)
if(t)s.b2()}},
av:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].c6())s=!1
return s},
c5:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].c4())s=!1
return s},
ci:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.L(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.L(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.E(null)}},
i:function(a){return this.O()},
F:function(a){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(a))
return C.a.m(r,"\n")},
O:function(){return this.F("")},
sff:function(a){this.b=H.n(a,"$ib",[F.a8],"$ab")}}
F.ii.prototype={
gn:function(a){return this.b.length},
cv:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b8(0,p,n)){p.b2()
break}}}}},
cu:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=J.Q(s.a,s.b)
if(t)s.b2()}},
i:function(a){return this.O()},
F:function(a){var u,t,s=H.d([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
C.a.h(s,t[u].F(a+(""+u+". ")))}return C.a.m(s,"\n")},
O:function(){return this.F("")},
sfl:function(a){this.b=H.n(a,"$ib",[F.bk],"$ab")}}
F.ij.prototype={
gn:function(a){return this.b.length},
iW:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.M(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.E(null)}s=t.a
if(s!=null){C.a.M(s.b.b,t)
t.a=null}}}},
i:function(a){return this.O()},
F:function(a){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(a))
return C.a.m(r,"\n")},
O:function(){return this.F("")},
sbU:function(a){this.b=H.n(a,"$ib",[F.bF],"$ab")}}
F.av.prototype={
c9:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.ej(u.cx,r,o,t,s,q,p,a,n)},
ib:function(){return this.c9(null)},
sZ:function(a,b){var u
if(!J.Q(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a_()}},
sdX:function(a){var u
a=a==null?null:a.u(0,Math.sqrt(a.C(a)))
if(!J.Q(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a_()}},
seh:function(a){var u
if(!J.Q(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a_()}},
sdt:function(a){var u
if(!J.Q(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a_()}},
iA:function(a){var u,t,s=this
if(a.q(0,$.bq())){u=s.f
t=[P.t]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.bp())){u=s.r
t=[P.t]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.bo())){u=s.x
t=[P.t]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.bP())){u=s.y
t=[P.t]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.q(0,$.bQ())){u=s.z
t=[P.t]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.dl())){u=s.Q
t=[P.t]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.dm())){u=s.Q
t=[P.t]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.co()))return H.d([s.ch],[P.t])
else if(a.q(0,$.bn())){u=s.cx
t=[P.t]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.t])},
c6:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d0()
t.d.H(0,new F.jl(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.ah(0)}return!0},
c4:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d0()
t.d.H(0,new F.jk(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.ah(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
F:function(a){var u,t,s=this,r="-",q=H.d([],[P.h])
C.a.h(q,C.b.ag(J.ar(s.e),0))
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
C.a.h(q,V.N(s.ch,3,0))
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
i0:function(a,b,c,d,e,f){var u=F.ej(a,null,b,c,d,e,f,null,0)
this.h(0,u)
return u},
gn:function(a){return this.c.length},
av:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].c6()
return!0},
c5:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].c4()
return!0},
i7:function(){var u,t,s,r,q,p,o,n
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
shW:function(a){this.c=H.n(a,"$ib",[F.av],"$ab")}}
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
sfg:function(a){this.b=H.n(a,"$ib",[F.a8],"$ab")},
sfh:function(a){this.c=H.n(a,"$ib",[F.a8],"$ab")},
sfi:function(a){this.d=H.n(a,"$ib",[F.a8],"$ab")}}
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
sfm:function(a){this.b=H.n(a,"$ib",[F.bk],"$ab")},
sfn:function(a){this.c=H.n(a,"$ib",[F.bk],"$ab")}}
F.jh.prototype={}
F.jg.prototype={
b8:function(a,b,c){return J.Q(b.f,c.f)}}
F.ji.prototype={}
F.hV.prototype={
b9:function(a){var u,t,s,r
H.n(a,"$ib",[F.av],"$ab")
u=V.d0()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.L(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.u(0,Math.sqrt(u.C(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.u)(a),++s)a[s].sdX(u)
return}}
F.jj.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
return C.a.m(r,"\n")},
sbU:function(a){this.b=H.n(a,"$ib",[F.bF],"$ab")}}
O.dP.prototype={
gw:function(){var u=this.fr
return u==null?this.fr=D.Y():u},
ad:function(a){var u
H.f(a,"$iB")
u=this.fr
if(u!=null)u.E(a)},
eT:function(){return this.ad(null)},
dd:function(a){H.f(a,"$iB")
this.a=null
this.ad(a)},
hy:function(){return this.dd(null)},
fD:function(a,b){var u=V.ak
H.n(b,"$ik",[u],"$ak")
u=new D.bY([u])
u.b=!0
this.ad(u)},
fF:function(a,b){var u=V.ak
H.n(b,"$ik",[u],"$ak")
u=new D.bZ([u])
u.b=!0
this.ad(u)},
cX:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.l,h=new H.a2([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.gak()
p=h.j(0,r.gak())
h.k(0,q,p==null?1:p)}o=H.d([],[A.aM])
h.H(0,new O.hz(j,o))
C.a.bz(o,new O.hA())
n=new H.a2([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.gak()
p=n.j(0,r.gak())
n.k(0,q,p==null?1:p)}m=H.d([],[A.aQ])
n.H(0,new O.hB(j,m))
C.a.bz(m,new O.hC())
l=new H.a2([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.u)(i),++s){r=i[s]
t=r.gak()
q=l.j(0,r.gak())
l.k(0,t,q==null?1:q)}k=H.d([],[A.aU])
l.H(0,new O.hD(j,k))
C.a.bz(k,new O.hE())
i=C.d.a7(j.e.a.length+3,4)
j.dy.e
return A.nV(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
eZ:function(a,b){H.n(a,"$ib",[T.e7],"$ab")},
an:function(a,b){var u,t,s
for(u=this.dx.a,u=new J.as(u,u.length,[H.q(u,0)]);u.A();){t=u.d
t.toString
s=$.hG
t.a=s==null?$.hG=new V.ak(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s
s=t.b
if(s!=null)t.a=s.ao(0,b,t)}},
iY:function(a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
if(a8==null){a8=a7.cX()
u=a9.fr.j(0,a8.b4)
if(u==null){u=A.nU(a8,a9.a)
t=u.b
if(t.length===0)H.A(P.C("May not cache a shader with no name."))
if(a9.fr.bm(0,t))H.A(P.C('Shader cache already contains a shader by the name "'+t+'".'))
a9.fr.k(0,t,u)}a8=a7.a=u
b0.e=null}s=a8.z
r=s.dE
a8=b0.e
if(!(a8 instanceof Z.du))a8=b0.e=null
if(a8==null||!a8.d.q(0,r)){a8=s.k3
if(a8)b0.d.av()
q=s.k4
if(q){p=b0.d
o=p.e
if(o!=null)++o.d
p.d.c5()
p.a.c5()
p=p.e
if(p!=null)p.ah(0)}p=s.r2
if(p){o=b0.d
n=o.e
if(n!=null)++n.d
o.a.i7()
o=o.e
if(o!=null)o.ah(0)}m=b0.d.i6(new Z.jn(a9.a),r)
m.aT($.bq()).e=a7.a.Q.c
if(a8)m.aT($.bp()).e=a7.a.cx.c
if(q)m.aT($.bo()).e=a7.a.ch.c
if(s.r1)m.aT($.bP()).e=a7.a.cy.c
if(p)m.aT($.bQ()).e=a7.a.db.c
if(s.rx)m.aT($.bn()).e=a7.a.dx.c
b0.e=m}a8=T.e7
l=H.d([],[a8])
q=a7.a
p=a9.a
p.useProgram(q.r)
q.x.ik()
if(s.dy){q=a7.a
o=a9.dx
o=o.ga8(o)
q=q.dy
q.toString
q.aq(o.ax(0,!0))}if(s.fr){q=a7.a
o=a9.cx
if(o==null){o=a9.db
o=o.ga8(o)
n=a9.dx
n=a9.cx=o.p(0,n.ga8(n))
o=n}q=q.fr
q.toString
q.aq(o.ax(0,!0))}q=a7.a
o=a9.ch
if(o==null){o=a9.giU()
n=a9.dx
n=a9.ch=o.p(0,n.ga8(n))
o=n}q=q.fy
q.toString
q.aq(o.ax(0,!0))
if(s.ry){q=a7.a
o=a7.b
q=q.k1
q.toString
q.aq(C.j.ax(o,!0))}if(s.x1){q=a7.a
o=a7.c
q=q.k2
q.toString
q.aq(C.j.ax(o,!0))}if(s.x2){q=a7.a
o=a7.d
q=q.k3
q.toString
q.aq(C.j.ax(o,!0))}if(s.y2>0){k=a7.e.a.length
q=a7.a.k4
C.c.bv(q.a,q.d,k)
for(q=[P.t],j=0;j<k;++j){o=a7.a
n=a7.e.a
if(j>=n.length)return H.c(n,j)
n=n[j]
o.toString
H.f(n,"$iak")
o=o.r1
if(j>=o.length)return H.c(o,j)
o=o[j]
i=new Float32Array(H.dg(H.n(n.ax(0,!0),"$ib",q,"$ab")))
C.c.em(o.a,o.d,!1,i)}}if(s.a.a){q=a7.a
o=a7.f.f
q=q.r2
C.c.U(q.a,q.d,o.a,o.b,o.c)}if(s.id){if(s.b.a){q=a7.a
o=a7.r.f
q=q.x1
C.c.U(q.a,q.d,o.a,o.b,o.c)}if(s.c.a){q=a7.a
o=a7.x.f
q=q.y2
C.c.U(q.a,q.d,o.a,o.b,o.c)}if(s.d.a){q=a7.a
o=a7.y.f
q=q.dF
C.c.U(q.a,q.d,o.a,o.b,o.c)}q=s.e.a
if(!q)o=!1
else o=!0
if(o){o=a7.a
n=a7.z.ch
o=o.dH
C.c.a3(o.a,o.d,n)}if(q){q=a7.a
o=a7.z.f
q=q.dG
C.c.U(q.a,q.d,o.a,o.b,o.c)}q=s.z
if(q.length>0){o=a9.db
h=o.ga8(o)
o=P.l
g=new H.a2([o,o])
for(o=a7.dx.e,n=o.length,f=[a8],e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
c=d.gak()
b=g.j(0,c)
if(b==null)b=0
g.k(0,c,b+1)
a=J.dn(a7.a.cc.j(0,c),b)
a0=d.gdz(d)
a1=C.e.p(h.a,a0.gdB(a0))+C.e.p(h.b,a0.gdC(a0))+C.e.p(h.c,a0.gdD())
a2=C.e.p(h.e,a0.gdB(a0))+C.e.p(h.f,a0.gdC(a0))+C.e.p(h.r,a0.gdD())
a0=C.e.p(h.y,a0.gdB(a0))+C.e.p(h.z,a0.gdC(a0))+C.e.p(h.Q,a0.gdD())
a0=new V.L(a1,a2,a0).u(0,Math.sqrt(a1*a1+a2*a2+a0*a0))
a2=a.e
a1=a0.a
a3=a0.b
a0=a0.c
C.c.U(a2.a,a2.d,a1,a3,a0)
a0=d.gaS(d)
a3=a.f
C.c.U(a3.a,a3.d,a0.a,a0.b,a0.c)
d.gaW()
a0=d.gdz(d)
a1=a.d
C.c.U(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gbw()
a1=a.b
C.c.U(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gbt(d)
a1=a.c
C.c.U(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gaW()
H.n(l,"$ib",f,"$ab")
if(!C.a.X(l,a0)){a0.sb5(0,l.length)
C.a.h(l,a0)}a0=d.gaW()
a1=a0.gb7(a0)
if(a1){a1=a.r
a1.toString
a2=a0.gb7(a0)
if(!a2)a1.a.uniform1i(a1.d,0)
else{a0=a0.gb5(a0)
a1.a.uniform1i(a1.d,a0)}}}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.u)(q),++e){n=q[e].a
k=g.j(0,n)
if(k==null)k=0
n=a7.a.cb.j(0,n)
C.c.bv(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=a9.db
h=o.ga8(o)
o=P.l
a4=new H.a2([o,o])
for(o=a7.dx.f,n=o.length,e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
c=d.gak()
b=a4.j(0,c)
if(b==null)b=0
a4.k(0,c,b+1)
a=J.dn(a7.a.ce.j(0,c),b)
a5=h.p(0,d.a)
f=d.a
a0=$.cM
f=f.cz(a0==null?$.cM=new V.a5(0,0,0):a0)
a0=a.b
C.c.U(a0.a,a0.d,f.a,f.b,f.c)
f=$.cM
f=a5.cz(f==null?$.cM=new V.a5(0,0,0):f)
a0=a.c
C.c.U(a0.a,a0.d,f.a,f.b,f.c)
f=d.c
a0=a.e
C.c.U(a0.a,a0.d,f.a,f.b,f.c)
f=d.r
a0=a.y
C.c.a3(a0.a,a0.d,f)
f=d.x
a0=a.z
C.c.a3(a0.a,a0.d,f)
f=d.y
a0=a.Q
C.c.a3(a0.a,a0.d,f)}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.u)(q),++e){n=q[e].a
k=a4.j(0,n)
if(k==null)k=0
n=a7.a.cd.j(0,n)
C.c.bv(n.a,n.d,k)}}q=s.ch
if(q.length>0){o=a9.db
h=o.ga8(o)
o=P.l
a6=new H.a2([o,o])
for(o=a7.dx.r,n=o.length,a8=[a8],e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
c=d.gak()
b=a6.j(0,c)
if(b==null)b=0
a6.k(0,c,b+1)
a=J.dn(a7.a.cg.j(0,c),b)
f=d.giT(d)
a0=a.b
C.c.U(a0.a,a0.d,f.a,f.b,f.c)
f=d.gdz(d).jz()
a0=a.c
C.c.U(a0.a,a0.d,f.a,f.b,f.c)
f=h.cz(d.giT(d))
a0=a.d
C.c.U(a0.a,a0.d,f.a,f.b,f.c)
f=d.gaS(d)
a0=a.e
C.c.U(a0.a,a0.d,f.a,f.b,f.c)
d.gaW()
f=d.gbw()
a0=a.f
C.c.U(a0.a,a0.d,f.a,f.b,f.c)
f=d.gbt(d)
a0=a.r
C.c.U(a0.a,a0.d,f.a,f.b,f.c)
f=d.gjA()
a0=a.x
C.c.a3(a0.a,a0.d,f)
f=d.gjB()
a0=a.y
C.c.a3(a0.a,a0.d,f)
d.gaW()
f=d.gaW()
H.n(l,"$ib",a8,"$ab")
if(!C.a.X(l,f)){f.sb5(0,l.length)
C.a.h(l,f)}f=d.gaW()
a0=f.gb7(f)
if(a0){a0=a.dx
a0.toString
a1=f.gb7(f)
if(!a1)a0.a.uniform1i(a0.d,0)
else{f=f.gb5(f)
a0.a.uniform1i(a0.d,f)}}d.gcE()
f=d.gjb()
a0=a.z
C.c.j7(a0.a,a0.d,f.a,f.b,f.c,f.d)
f=d.gcE()
if(!C.a.X(l,f)){f.sb5(0,l.length)
C.a.h(l,f)}f=d.gcE()
a0=f.gb7(f)
if(a0){a0=a.dy
a0.toString
a1=f.gb7(f)
if(!a1)a0.a.uniform1i(a0.d,0)
else{f=f.gb5(f)
a0.a.uniform1i(a0.d,f)}}if(d.gji()){f=d.gjg()
a0=a.Q
C.c.a3(a0.a,a0.d,f)
f=d.gjf()
a0=a.ch
C.c.a3(a0.a,a0.d,f)}if(d.gjh()){f=d.gjc()
a0=a.cx
C.c.a3(a0.a,a0.d,f)
f=d.gjd()
a0=a.cy
C.c.a3(a0.a,a0.d,f)
f=d.gje()
a0=a.db
C.c.a3(a0.a,a0.d,f)}}for(a8=q.length,e=0;e<q.length;q.length===a8||(0,H.u)(q),++e){o=q[e].a
k=a6.j(0,o)
if(k==null)k=0
o=a7.a.cf.j(0,o)
C.c.bv(o.a,o.d,k)}}}if(s.dx){a8=a7.a
q=a9.Q
if(q==null){q=a9.db
q=a9.Q=q.ga8(q).ix(0)}a8=a8.id
a8.toString
a8.aq(q.ax(0,!0))}if(s.cy){a7.eZ(l,a7.ch)
a8=a7.a
q=a7.ch
a8.hC(a8.dI,q)
if(s.r.a){a8=a7.a
q=a7.cx.f
a8=a8.dJ
C.c.U(a8.a,a8.d,q.a,q.b,q.c)}a8=s.x.a
if(!a8)q=!1
else q=!0
if(q){q=a7.a
o=a7.cy.ch
q=q.dK
C.c.a3(q.a,q.d,o)}if(a8){a8=a7.a
q=a7.cy.f
a8=a8.dL
C.c.U(a8.a,a8.d,q.a,q.b,q.c)}}a8=s.y.a
q=!a8
if(q)o=!1
else o=!0
if(o){if(a8){a8=a7.a
o=a7.db.f
a8=a8.dM
C.c.a3(a8.a,a8.d,o)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].bl(a9)
a8=b0.e
a8.bl(a9)
a8.aU(a9)
a8.el(a9)
if(q)a8=!1
else a8=!0
if(a8)p.disable(3042)
for(j=0;j<l.length;++j)l[j].el(a9)
a8=a7.a
a8.toString
p.useProgram(null)
a8.x.ij()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cX().b4},
sf2:function(a){this.e=H.n(a,"$ia3",[V.ak],"$aa3")}}
O.hz.prototype={
$2:function(a,b){H.ad(a)
H.ad(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.aM(a,C.d.a7(b+3,4)*4))},
$S:11}
O.hA.prototype={
$2:function(a,b){H.f(a,"$iaM")
H.f(b,"$iaM")
return J.kX(a.a,b.a)},
$S:50}
O.hB.prototype={
$2:function(a,b){H.ad(a)
H.ad(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.aQ(a,C.d.a7(b+3,4)*4))},
$S:11}
O.hC.prototype={
$2:function(a,b){H.f(a,"$iaQ")
H.f(b,"$iaQ")
return J.kX(a.a,b.a)},
$S:51}
O.hD.prototype={
$2:function(a,b){H.ad(a)
H.ad(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.aU(a,C.d.a7(b+3,4)*4))},
$S:11}
O.hE.prototype={
$2:function(a,b){H.f(a,"$iaU")
H.f(b,"$iaU")
return J.kX(a.a,b.a)},
$S:52}
O.ht.prototype={
aA:function(){var u,t=this
t.cH()
u=t.f
if(!(Math.abs(u-1)<$.K().a)){t.f=1
u=new D.J(t.b,u,1,[P.t])
u.b=!0
t.a.ad(u)}}}
O.dQ.prototype={
aA:function(){},
dg:function(a){var u,t,s=this
if(!s.c.q(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aA()
u=s.a
u.a=null
u.ad(null)}}}
O.hu.prototype={}
O.b7.prototype={
df:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.J(s.b+".color",u,a,[V.a7])
t.b=!0
s.a.ad(t)}},
aA:function(){this.cH()
this.df(new V.a7(1,1,1))},
saS:function(a,b){this.dg(new A.an(!0,!1,!1))
this.df(b)}}
O.hw.prototype={}
O.hx.prototype={
aA:function(){var u,t=this
t.cI()
u=t.ch
if(!(Math.abs(u-1)<$.K().a)){t.ch=1
u=new D.J(t.b+".refraction",u,1,[P.t])
u.b=!0
t.a.ad(u)}}}
O.hy.prototype={
dh:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.K().a)){u.ch=a
t=new D.J(u.b+".shininess",t,a,[P.t])
t.b=!0
u.a.ad(t)}},
aA:function(){this.cI()
this.dh(100)}}
O.bJ.prototype={}
T.e7.prototype={}
V.bh.prototype={
aE:function(a,b){return!0},
i:function(a){return"all"},
$iay:1}
V.ay.prototype={}
V.dO.prototype={
aE:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)if(u[s].aE(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa5:function(a){this.a=H.n(a,"$ib",[V.ay],"$ab")},
$iay:1}
V.at.prototype={
aE:function(a,b){return!this.ez(0,b)},
i:function(a){return"!["+this.cG(0)+"]"}}
V.i6.prototype={
aE:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c1(this.a),t=H.c1(this.b)
return u+".."+t},
$iay:1}
V.ig.prototype={
eE:function(a){var u,t
if(a.a.length<=0)throw H.e(P.C("May not create a SetMatcher with zero characters."))
u=new H.a2([P.l,P.S])
for(t=new H.cD(a,a.gn(a),[H.aq(a,"x",0)]);t.A();)u.k(0,t.d,!0)
this.shB(u)},
aE:function(a,b){return this.a.bm(0,b)},
i:function(a){var u=this.a
return P.cU(u.ga2(u),0,null)},
shB:function(a){this.a=H.n(a,"$iy",[P.l,P.S],"$ay")},
$iay:1}
V.cR.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cX(this.a.l(0,b))
r.sa5(H.d([],[V.ay]))
r.c=!1
C.a.h(this.c,r)
return r},
io:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.aE(0,a))return r}return},
i:function(a){return this.b},
shU:function(a){this.c=H.n(a,"$ib",[V.cX],"$ab")}}
V.e9.prototype={
i:function(a){var u=H.lC(this.b,"\n","\\n"),t=H.lC(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cW.prototype={
aG:function(a,b,c){var u,t,s
H.n(c,"$ib",[P.h],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.u)(c),++t){s=c[t]
this.c.k(0,s,b)}},
i:function(a){return this.b},
shu:function(a){var u=P.h
this.c=H.n(a,"$iy",[u,u],"$ay")}}
V.iI.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cR(this,b)
u.shU(H.d([],[V.cX]))
u.d=null
this.a.k(0,b,u)}return u},
P:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cW(a)
u=P.h
t.shu(new H.a2([u,u]))
this.b.k(0,a,t)}return t},
ek:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.e9]),k=this.c,j=[P.l],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.D(a,s)
q=k.io(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cU(i,0,m)
throw H.e(P.C("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cU(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.e9(n==null?o.b:n,p,s)}++s}}},
shL:function(a){this.a=H.n(a,"$iy",[P.h,V.cR],"$ay")},
shN:function(a){this.b=H.n(a,"$iy",[P.h,V.cW],"$ay")}}
V.cX.prototype={
i:function(a){return this.b.b+": "+this.cG(0)}}
X.dw.prototype={$icH:1}
X.h1.prototype={
gw:function(){var u=this.x
return u==null?this.x=D.Y():u}}
X.dW.prototype={
gw:function(){var u=this.f
return u==null?this.f=D.Y():u},
aK:function(a){var u
H.f(a,"$iB")
u=this.f
if(u!=null)u.E(a)},
eW:function(){return this.aK(null)},
saF:function(a){var u,t,s=this
if(!J.Q(s.b,a)){u=s.b
if(u!=null)u.gw().M(0,s.gcM())
t=s.b
s.b=a
if(a!=null)a.gw().h(0,s.gcM())
u=new D.J("mover",t,s.b,[U.aa])
u.b=!0
s.aK(u)}},
$icH:1,
$idw:1}
X.e6.prototype={}
V.bu.prototype={
bg:function(a){this.b=new P.h5(C.Q)
this.c=null
this.sbJ(H.d([],[[P.b,W.aD]]))},
N:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aD]))
u=a.split("\n")
for(l=u.length,t=[W.aD],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.O(q)
o=m.b.f7(q,0,q.length)
n=o==null?q:o
C.O.eu(p,H.lC(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaw(m.d),p)}},
e5:function(a,b){var u,t,s,r,q=this
H.n(b,"$ib",[P.h],"$ab")
q.sbJ(H.d([],[[P.b,W.aD]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bn():t).ek(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)q.bs(t[r])},
sbJ:function(a){this.d=H.n(a,"$ib",[[P.b,W.aD]],"$ab")}}
V.kP.prototype={
$1:function(a){var u
H.f(a,"$ibb")
u=C.e.ej(this.a.gis(),2)
if(u!=="0.00")P.lB(u+" fps")},
$S:53}
V.fI.prototype={
bs:function(a){var u=this
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
bn:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iJ()
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
t=new V.at()
s=[V.ay]
t.sa5(H.d([],s))
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
t=new V.at()
t.sa5(H.d([],s))
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
V.h2.prototype={
bs:function(a){var u=this
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
bn:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iJ()
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
t=new V.at()
s=[V.ay]
t.sa5(H.d([],s))
C.a.h(u.a,t)
u=V.w(new H.r("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,h)
t=V.w(new H.r("#"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,h)
u=new V.at()
u.sa5(H.d([],s))
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
V.h3.prototype={
bs:function(a){var u=this,t="#111"
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
bn:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iJ()
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
t=new V.at()
t.sa5(H.d([],[V.ay]))
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
V.i0.prototype={
e5:function(a,b){H.n(b,"$ib",[P.h],"$ab")
this.sbJ(H.d([],[[P.b,W.aD]]))
this.N(C.a.m(b,"\n"),"#111")},
bs:function(a){},
bn:function(){return}}
V.i4.prototype={
dn:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.o(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.mi().gct().j(0,H.i(u))
if(t==null)if(d){c.$0()
m.dl(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lI(m.c).h(0,q)
o=W.nJ("radio")
o.checked=s
o.name=u
u=W.m
W.ac(o,"change",H.o(new V.i5(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lI(m.c).h(0,r.createElement("br"))},
b0:function(a,b,c){return this.dn(a,b,c,!1)},
dl:function(a){var u,t,s=P.mi(),r=P.h,q=P.nQ(s.gct(),r,r)
q.k(0,this.a,a)
u=s.ec(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.k0([],[]).cA(""),"",t)}}
V.i5.prototype={
$1:function(a){var u=this
if(H.F(u.b.checked)){u.c.$0()
u.a.dl(u.d)}},
$S:16}
V.ik.prototype={
eG:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.m
W.ac(q,"scroll",H.o(new V.im(o),{func:1,ret:-1,args:[r]}),!1,r)},
dr:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.n(a,"$ib",[P.h],"$ab")
this.hF()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.ek(C.a.iz(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
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
l.href=H.O(m[1])
l.textContent=H.O(m[0])
t.appendChild(l)}else{k=P.f4(C.y,n,C.h,!1)
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
eq:function(a){var u,t,s,r=new V.fI("dart")
r.bg("dart")
u=new V.h2("glsl")
u.bg("glsl")
t=new V.h3("html")
t.bg("html")
s=C.a.iq(H.d([r,u,t],[V.bu]),new V.io(a))
if(s!=null)return s
r=new V.i0("plain")
r.bg("plain")
return r},
dq:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.n(b0,"$ib",[P.h],"$ab")
u=H.d([],[P.l])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dk(r).a1(r,"+")){C.a.k(b0,s,C.b.a9(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a1(r,"-")){C.a.k(b0,s,C.b.a9(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eq(a8)
q.e5(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.f4(C.y,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lK()
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.u)(r),++a0)C.Z.i2(a,r[a0])
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
for(a3=C.a.gT(r);a3.A();)c.appendChild(a3.gK(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
hX:function(a){var u,t,s,r,q,p,o,n="auto"
H.n(a,"$ib",[P.h],"$ab")
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
s=H.f(r.insertCell(-1),"$iba").style
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
o=H.f(r.insertCell(-1),"$iba")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
hF:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iJ()
u.c=u.l(0,q)
t=u.l(0,q).m(0,p)
s=V.w(new H.r("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,p).m(0,p)
s=new V.at()
r=[V.ay]
s.sa5(H.d([],r))
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
s=new V.at()
s.sa5(H.d([],r))
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
s=new V.at()
s.sa5(H.d([],r))
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
t=new V.at()
t.sa5(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.r("|]"))
C.a.h(t.a,s)
s=u.l(0,k).m(0,j)
t=V.w(new H.r("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,k).m(0,k)
t=new V.at()
t.sa5(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.r("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,q).m(0,i).a,new V.bh())
s=u.l(0,i).m(0,i)
t=new V.at()
t.sa5(H.d([],r))
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
V.im.prototype={
$1:function(a){P.me(C.o,new V.il(this.a))},
$S:16}
V.il.prototype={
$0:function(){var u=C.e.am(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:0}
V.io.prototype={
$1:function(a){return H.f(a,"$ibu").a===this.a},
$S:55}
U.kG.prototype={
$0:function(){this.a.sac(0,F.lx(1,null,null,1))},
$S:0}
U.kH.prototype={
$0:function(){this.a.sac(0,F.mN(!0,40,1))},
$S:0}
U.kI.prototype={
$0:function(){this.a.sac(0,F.mN(!1,40,0))},
$S:0}
U.kJ.prototype={
$0:function(){this.a.sac(0,F.n1(6,6))},
$S:0}
U.kK.prototype={
$0:function(){this.a.sac(0,F.n3())},
$S:0}
U.kL.prototype={
$0:function(){this.a.sac(0,F.pA())},
$S:0}
U.kM.prototype={
$1:function(a){var u,t,s,r
H.f(a,"$iB")
u=this.a
t=this.b
s=t.a
r=[P.h]
u.dq("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dq("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:10};(function aliases(){var u=J.a.prototype
u.ew=u.i
u=J.dI.prototype
u.ey=u.i
u=P.k.prototype
u.ex=u.bx
u=W.T.prototype
u.bA=u.ae
u=W.eO.prototype
u.eA=u.au
u=O.dQ.prototype
u.cH=u.aA
u=O.b7.prototype
u.cI=u.aA
u=V.dO.prototype
u.ez=u.aE
u.cG=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"pi","or",13)
u(P,"pj","os",13)
u(P,"pk","ot",13)
t(P,"mM","pg",3)
s(W,"pt",4,null,["$4"],["ov"],28,0)
s(W,"pu",4,null,["$4"],["ow"],28,0)
var m
r(m=E.ao.prototype,"ge1",0,0,null,["$1","$0"],["e2","iK"],1,0)
r(m,"ge3",0,0,null,["$1","$0"],["e4","iL"],1,0)
r(m,"ge_",0,0,null,["$1","$0"],["e0","iJ"],1,0)
r(m,"gdY",0,0,null,["$1","$0"],["dZ","iG"],1,0)
q(m,"giE","iF",9)
q(m,"giH","iI",9)
r(m=E.e8.prototype,"gcJ",0,0,null,["$1","$0"],["cL","cK"],1,0)
p(m,"gj_","ed",3)
o(m=X.ef.prototype,"gfS","fT",15)
o(m,"gfG","fH",15)
o(m,"gfM","fN",4)
o(m,"gfW","fX",31)
o(m,"gfU","fV",31)
o(m,"gh_","h0",4)
o(m,"gh3","h4",4)
o(m,"gfQ","fR",4)
o(m,"gh1","h2",4)
o(m,"gfO","fP",4)
o(m,"gh5","h6",36)
o(m,"gh7","h8",15)
o(m,"ghk","hl",14)
o(m,"ghg","hh",14)
o(m,"ghi","hj",14)
r(m=D.dK.prototype,"gd7",0,0,null,["$1","$0"],["d8","fY"],1,0)
o(m,"gha","hb",38)
q(m,"gfA","fB",26)
q(m,"ghe","hf",26)
r(D.bE.prototype,"geL",0,0,null,["$1","$0"],["aa","eM"],1,0)
n(V.X.prototype,"gn","b6",12)
n(V.L.prototype,"gn","b6",12)
n(V.ca.prototype,"gn","b6",12)
r(m=U.cz.prototype,"gaM",0,0,null,["$1","$0"],["G","a6"],1,0)
q(m,"geO","eP",22)
q(m,"ghc","hd",22)
r(m=U.eg.prototype,"gaM",0,0,null,["$1","$0"],["G","a6"],1,0)
o(m,"gbM","bN",2)
o(m,"gbO","bP",2)
o(m,"gbQ","bR",2)
r(m=U.eh.prototype,"gaM",0,0,null,["$1","$0"],["G","a6"],1,0)
o(m,"gbM","bN",2)
o(m,"gbO","bP",2)
o(m,"gbQ","bR",2)
o(m,"gfp","fq",2)
o(m,"gfs","ft",2)
o(m,"ghS","hT",2)
o(m,"ghQ","hR",2)
o(m,"ghO","hP",2)
o(U.ei.prototype,"gfv","fw",2)
r(m=M.dD.prototype,"gar",0,0,null,["$1","$0"],["ay","eQ"],1,0)
q(m,"gfI","fJ",9)
q(m,"gfK","fL",9)
r(m=O.dP.prototype,"geS",0,0,null,["$1","$0"],["ad","eT"],1,0)
r(m,"ghx",0,0,null,["$1","$0"],["dd","hy"],1,0)
q(m,"gfC","fD",33)
q(m,"gfE","fF",33)
r(X.dW.prototype,"gcM",0,0,null,["$1","$0"],["aK","eW"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.U,null)
s(P.U,[H.l7,J.a,J.as,P.eB,P.k,H.cD,P.b3,H.bW,H.d_,H.fB,H.iO,P.bx,H.cs,H.eT,P.af,H.hg,H.hi,H.hb,P.eZ,P.bf,P.aJ,P.el,P.iw,P.cT,P.ix,P.bb,P.am,P.kg,P.jV,P.cb,P.eA,P.x,P.k8,P.ho,P.bU,P.h6,P.ke,P.kd,P.S,P.ax,P.a9,P.bw,P.hZ,P.e4,P.et,P.h0,P.by,P.b,P.y,P.P,P.au,P.h,P.a6,P.cc,P.j2,P.jY,W.fE,W.bM,W.H,W.dU,W.eO,W.k3,W.dF,W.aA,W.jU,W.f5,P.k_,P.jP,P.R,O.a3,O.cE,E.fv,E.ao,E.i7,E.e8,Z.ek,Z.jn,Z.du,Z.bz,Z.bL,D.fy,D.bV,D.B,X.dv,X.dJ,X.hd,X.hl,X.az,X.hN,X.iK,X.ef,D.dA,D.ae,D.bE,D.e3,V.a7,V.b0,V.fS,V.hF,V.ak,V.ab,V.a5,V.bH,V.dZ,V.X,V.L,V.ca,U.eg,U.eh,U.ei,M.dD,A.dr,A.fo,A.an,A.aM,A.aQ,A.aU,A.hv,A.c4,A.c5,A.c8,A.eb,A.iX,F.a8,F.fV,F.bk,F.hf,F.bF,F.e1,F.ih,F.ii,F.ij,F.av,F.jb,F.jc,F.jf,F.jh,F.ji,F.jj,O.bJ,O.dQ,O.hw,V.bh,V.ay,V.dO,V.i6,V.ig,V.cR,V.e9,V.cW,V.iI,X.dw,X.e6,X.dW,V.bu,V.i4,V.ik])
s(J.a,[J.h9,J.dH,J.dI,J.b4,J.cC,J.bA,H.cI,H.bD,W.j,W.fk,W.bS,W.b1,W.b2,W.W,W.en,W.fJ,W.fK,W.ep,W.dC,W.er,W.fM,W.m,W.eu,W.aN,W.h4,W.ew,W.cA,W.dM,W.hH,W.eC,W.eD,W.aO,W.eE,W.eH,W.aP,W.eL,W.eN,W.aS,W.eP,W.aT,W.eU,W.aF,W.eX,W.iH,W.aW,W.f_,W.iM,W.j7,W.f6,W.f8,W.fa,W.fc,W.fe,P.b6,P.ey,P.b9,P.eJ,P.i3,P.eV,P.bc,P.f1,P.fp,P.em,P.ds,P.dX,P.c3,P.e0,P.ec,P.eR])
s(J.dI,[J.i_,J.c9,J.bB])
t(J.l6,J.b4)
s(J.cC,[J.dG,J.ha])
t(P.hk,P.eB)
s(P.hk,[H.ed,W.jv,W.ap,P.fX])
t(H.r,H.ed)
s(P.k,[H.fP,H.hp,H.d1])
s(H.fP,[H.c_,H.hh])
s(P.b3,[H.hq,H.jo])
t(H.hr,H.c_)
t(H.fC,H.fB)
s(P.bx,[H.hW,H.hc,H.j0,H.iQ,H.fx,H.id,P.fn,P.dV,P.aL,P.j1,P.iZ,P.cS,P.fA,P.fH])
s(H.cs,[H.kU,H.iD,H.kB,H.kC,H.kD,P.jr,P.jq,P.js,P.jt,P.k7,P.k6,P.jC,P.jG,P.jD,P.jE,P.jF,P.jJ,P.jK,P.jI,P.jH,P.iy,P.iz,P.kq,P.jS,P.jR,P.jT,P.hj,P.hn,P.fN,P.fO,P.j6,P.j3,P.j4,P.j5,P.k9,P.ka,P.kc,P.kb,P.kk,P.kj,P.kl,P.km,W.fQ,W.hJ,W.hL,W.ic,W.iv,W.jB,W.hU,W.hT,W.jW,W.jX,W.k5,W.kf,P.k1,P.ks,P.fY,P.fZ,P.fr,E.i8,E.i9,E.ia,E.iG,D.fT,D.fU,F.kh,F.kt,F.kv,F.kw,F.kx,F.kQ,F.kR,F.kT,F.kF,F.ku,F.jl,F.jk,F.jd,F.je,O.hz,O.hA,O.hB,O.hC,O.hD,O.hE,V.kP,V.i5,V.im,V.il,V.io,U.kG,U.kH,U.kI,U.kJ,U.kK,U.kL,U.kM])
s(H.iD,[H.it,H.cq])
t(H.jp,P.fn)
t(P.hm,P.af)
s(P.hm,[H.a2,W.ju])
t(H.dR,H.bD)
s(H.dR,[H.d6,H.d8])
t(H.d7,H.d6)
t(H.cJ,H.d7)
t(H.d9,H.d8)
t(H.dS,H.d9)
s(H.dS,[H.hO,H.hP,H.hQ,H.hR,H.hS,H.dT,H.cK])
t(P.jQ,P.kg)
t(P.jO,P.jV)
t(P.f3,P.ho)
t(P.ee,P.f3)
s(P.bU,[P.ft,P.fR])
t(P.bv,P.ix)
s(P.bv,[P.fu,P.h5,P.ja,P.j9])
t(P.j8,P.fR)
s(P.a9,[P.t,P.l])
s(P.aL,[P.c2,P.h7])
t(P.jx,P.cc)
s(W.j,[W.G,W.fW,W.cF,W.aR,W.da,W.aV,W.aG,W.dc,W.jm,W.d2,P.fs,P.bR])
s(W.G,[W.T,W.bt,W.d3])
s(W.T,[W.v,P.p])
s(W.v,[W.dq,W.fl,W.cp,W.bs,W.bT,W.aD,W.h_,W.cB,W.ie,W.ba,W.e5,W.iB,W.iC,W.cV])
s(W.b1,[W.ct,W.fF,W.fG])
t(W.fD,W.b2)
t(W.cu,W.en)
t(W.eq,W.ep)
t(W.dB,W.eq)
t(W.es,W.er)
t(W.fL,W.es)
t(W.aE,W.bS)
t(W.ev,W.eu)
t(W.cx,W.ev)
t(W.ex,W.ew)
t(W.bX,W.ex)
t(W.bK,W.m)
s(W.bK,[W.b5,W.ag,W.aX])
t(W.hI,W.eC)
t(W.hK,W.eD)
t(W.eF,W.eE)
t(W.hM,W.eF)
t(W.eI,W.eH)
t(W.cL,W.eI)
t(W.eM,W.eL)
t(W.i1,W.eM)
t(W.ib,W.eN)
t(W.db,W.da)
t(W.iq,W.db)
t(W.eQ,W.eP)
t(W.ir,W.eQ)
t(W.iu,W.eU)
t(W.eY,W.eX)
t(W.iE,W.eY)
t(W.dd,W.dc)
t(W.iF,W.dd)
t(W.f0,W.f_)
t(W.iL,W.f0)
t(W.be,W.ag)
t(W.f7,W.f6)
t(W.jw,W.f7)
t(W.eo,W.dC)
t(W.f9,W.f8)
t(W.jL,W.f9)
t(W.fb,W.fa)
t(W.eG,W.fb)
t(W.fd,W.fc)
t(W.jZ,W.fd)
t(W.ff,W.fe)
t(W.k2,W.ff)
t(W.jy,W.ju)
t(W.jz,P.iw)
t(W.li,W.jz)
t(W.jA,P.cT)
t(W.k4,W.eO)
t(P.k0,P.k_)
t(P.al,P.jP)
t(P.ez,P.ey)
t(P.he,P.ez)
t(P.eK,P.eJ)
t(P.hX,P.eK)
t(P.cP,P.p)
t(P.eW,P.eV)
t(P.iA,P.eW)
t(P.f2,P.f1)
t(P.iN,P.f2)
t(P.fq,P.em)
t(P.hY,P.bR)
t(P.eS,P.eR)
t(P.is,P.eS)
s(E.fv,[Z.dt,A.cQ,T.e7])
s(D.B,[D.bY,D.bZ,D.J,X.i2])
s(X.i2,[X.dN,X.bl,X.cG,X.ea])
s(O.a3,[D.dK,U.cz])
s(D.fy,[U.fz,U.aa])
s(U.aa,[U.dx,U.e_])
t(A.hs,A.cQ)
s(A.eb,[A.aH,A.iU,A.iV,A.iW,A.iS,A.ai,A.iT,A.a0,A.cY,A.iY,A.cZ,A.aB,A.c6,A.c7])
t(F.ip,F.fV)
t(F.iR,F.hf)
t(F.jg,F.jh)
t(F.hV,F.ji)
t(O.dP,O.bJ)
s(O.dQ,[O.ht,O.hu,O.b7])
s(O.b7,[O.hx,O.hy])
s(V.dO,[V.at,V.cX])
t(X.h1,X.e6)
s(V.bu,[V.fI,V.h2,V.h3,V.i0])
u(H.ed,H.d_)
u(H.d6,P.x)
u(H.d7,H.bW)
u(H.d8,P.x)
u(H.d9,H.bW)
u(P.eB,P.x)
u(P.f3,P.k8)
u(W.en,W.fE)
u(W.ep,P.x)
u(W.eq,W.H)
u(W.er,P.x)
u(W.es,W.H)
u(W.eu,P.x)
u(W.ev,W.H)
u(W.ew,P.x)
u(W.ex,W.H)
u(W.eC,P.af)
u(W.eD,P.af)
u(W.eE,P.x)
u(W.eF,W.H)
u(W.eH,P.x)
u(W.eI,W.H)
u(W.eL,P.x)
u(W.eM,W.H)
u(W.eN,P.af)
u(W.da,P.x)
u(W.db,W.H)
u(W.eP,P.x)
u(W.eQ,W.H)
u(W.eU,P.af)
u(W.eX,P.x)
u(W.eY,W.H)
u(W.dc,P.x)
u(W.dd,W.H)
u(W.f_,P.x)
u(W.f0,W.H)
u(W.f6,P.x)
u(W.f7,W.H)
u(W.f8,P.x)
u(W.f9,W.H)
u(W.fa,P.x)
u(W.fb,W.H)
u(W.fc,P.x)
u(W.fd,W.H)
u(W.fe,P.x)
u(W.ff,W.H)
u(P.ey,P.x)
u(P.ez,W.H)
u(P.eJ,P.x)
u(P.eK,W.H)
u(P.eV,P.x)
u(P.eW,W.H)
u(P.f1,P.x)
u(P.f2,W.H)
u(P.em,P.af)
u(P.eR,P.x)
u(P.eS,W.H)})()
var v={mangledGlobalNames:{l:"int",t:"double",a9:"num",h:"String",S:"bool",P:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.P},{func:1,ret:-1,opt:[D.B]},{func:1,ret:-1,args:[D.B]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ag]},{func:1,ret:P.P,args:[,,]},{func:1,ret:P.P,args:[F.a8]},{func:1,ret:P.P,args:[F.av,P.t,P.t]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[P.l,[P.k,E.ao]]},{func:1,ret:P.P,args:[D.B]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:P.t},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:-1,args:[W.m]},{func:1,ret:P.P,args:[W.m]},{func:1,ret:V.a5,args:[P.t]},{func:1,ret:P.P,args:[,]},{func:1,ret:P.h,args:[P.l]},{func:1,ret:P.t,args:[P.t]},{func:1,ret:P.t,args:[P.t,P.t]},{func:1,ret:-1,args:[P.l,[P.k,U.aa]]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,args:[,]},{func:1,ret:-1,args:[P.l,[P.k,D.ae]]},{func:1,ret:P.S,args:[W.G]},{func:1,ret:P.S,args:[W.T,P.h,P.h,W.bM]},{func:1,ret:P.S,args:[W.aA]},{func:1,ret:P.S,args:[P.h]},{func:1,ret:-1,args:[W.b5]},{func:1,ret:P.P,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:-1,args:[P.l,[P.k,V.ak]]},{func:1,ret:W.T,args:[W.G]},{func:1,ret:-1,args:[W.G,W.G]},{func:1,ret:-1,args:[W.be]},{func:1,args:[W.m]},{func:1,ret:P.S,args:[[P.k,D.ae]]},{func:1,ret:P.R,args:[,,]},{func:1,ret:P.P,args:[P.h,,]},{func:1,ret:P.P,args:[P.h]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.l]},{func:1,ret:[P.y,P.h,P.h],args:[[P.y,P.h,P.h],P.h]},{func:1,ret:[P.aJ,,],args:[,]},{func:1,ret:P.P,args:[,],opt:[P.au]},{func:1,ret:P.R,args:[P.l]},{func:1,ret:P.P,args:[{func:1,ret:-1}]},{func:1,ret:P.l,args:[A.aM,A.aM]},{func:1,ret:P.l,args:[A.aQ,A.aQ]},{func:1,ret:P.l,args:[A.aU,A.aU]},{func:1,ret:P.P,args:[P.bb]},{func:1,args:[P.h]},{func:1,ret:P.S,args:[V.bu]},{func:1,args:[,P.h]},{func:1,ret:P.P,args:[P.a9]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bs.prototype
C.n=W.bT.prototype
C.O=W.aD.prototype
C.R=J.a.prototype
C.a=J.b4.prototype
C.d=J.dG.prototype
C.j=J.dH.prototype
C.e=J.cC.prototype
C.b=J.bA.prototype
C.S=J.bB.prototype
C.Y=W.cL.prototype
C.B=J.i_.prototype
C.c=P.c3.prototype
C.Z=W.ba.prototype
C.C=W.e5.prototype
C.r=J.c9.prototype
C.D=W.be.prototype
C.E=W.d2.prototype
C.a_=new P.fu()
C.F=new P.ft()
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

C.M=new P.hZ()
C.h=new P.j8()
C.N=new P.ja()
C.f=new P.jQ()
C.o=new P.bw(0)
C.P=new P.bw(5e6)
C.Q=new P.h6("element",!1,!1,!1)
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
C.X=new H.fC(0,{},C.x,[P.h,P.h])})();(function staticFields(){$.b_=0
$.cr=null
$.lM=null
$.lo=!1
$.mT=null
$.mK=null
$.n_=null
$.ky=null
$.kE=null
$.lz=null
$.ce=null
$.dh=null
$.di=null
$.lp=!1
$.a1=C.f
$.aw=[]
$.bj=null
$.l1=null
$.lS=null
$.lR=null
$.d5=P.l9(P.h,P.by)
$.hG=null
$.m4=null
$.cM=null
$.m9=null
$.ml=null
$.mq=null
$.mn=null
$.mo=null
$.mp=null
$.mm=null
$.mr=null
$.m3=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pQ","n5",function(){return H.mS("_$dart_dartClosure")})
u($,"pR","lE",function(){return H.mS("_$dart_js")})
u($,"pX","n6",function(){return H.bd(H.iP({
toString:function(){return"$receiver$"}}))})
u($,"pY","n7",function(){return H.bd(H.iP({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pZ","n8",function(){return H.bd(H.iP(null))})
u($,"q_","n9",function(){return H.bd(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q2","nc",function(){return H.bd(H.iP(void 0))})
u($,"q3","nd",function(){return H.bd(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q1","nb",function(){return H.bd(H.mg(null))})
u($,"q0","na",function(){return H.bd(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"q5","nf",function(){return H.bd(H.mg(void 0))})
u($,"q4","ne",function(){return H.bd(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"ql","lF",function(){return P.oq()})
u($,"q7","ng",function(){return P.on()})
u($,"qm","nk",function(){return H.nW(H.dg(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"qo","nm",function(){return P.oa("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qp","nn",function(){return P.oQ()})
u($,"qn","nl",function(){return P.lV(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"qe","nj",function(){return Z.aI(0)})
u($,"q8","nh",function(){return Z.aI(511)})
u($,"qg","bq",function(){return Z.aI(1)})
u($,"qf","bp",function(){return Z.aI(2)})
u($,"qa","bo",function(){return Z.aI(4)})
u($,"qh","bP",function(){return Z.aI(8)})
u($,"qi","bQ",function(){return Z.aI(16)})
u($,"qb","dl",function(){return Z.aI(32)})
u($,"qc","dm",function(){return Z.aI(64)})
u($,"qd","ni",function(){return Z.aI(96)})
u($,"qj","co",function(){return Z.aI(128)})
u($,"q9","bn",function(){return Z.aI(256)})
u($,"pP","n4",function(){return new V.fS(1e-9)})
u($,"pO","K",function(){return $.n4()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cI,DataView:H.bD,ArrayBufferView:H.bD,Float32Array:H.cJ,Float64Array:H.cJ,Int16Array:H.hO,Int32Array:H.hP,Int8Array:H.hQ,Uint16Array:H.hR,Uint32Array:H.hS,Uint8ClampedArray:H.dT,CanvasPixelArray:H.dT,Uint8Array:H.cK,HTMLAudioElement:W.v,HTMLBRElement:W.v,HTMLButtonElement:W.v,HTMLContentElement:W.v,HTMLDListElement:W.v,HTMLDataElement:W.v,HTMLDataListElement:W.v,HTMLDetailsElement:W.v,HTMLDialogElement:W.v,HTMLEmbedElement:W.v,HTMLFieldSetElement:W.v,HTMLHRElement:W.v,HTMLHeadElement:W.v,HTMLHeadingElement:W.v,HTMLHtmlElement:W.v,HTMLIFrameElement:W.v,HTMLImageElement:W.v,HTMLLIElement:W.v,HTMLLabelElement:W.v,HTMLLegendElement:W.v,HTMLLinkElement:W.v,HTMLMapElement:W.v,HTMLMediaElement:W.v,HTMLMenuElement:W.v,HTMLMetaElement:W.v,HTMLMeterElement:W.v,HTMLModElement:W.v,HTMLOListElement:W.v,HTMLObjectElement:W.v,HTMLOptGroupElement:W.v,HTMLOptionElement:W.v,HTMLOutputElement:W.v,HTMLParagraphElement:W.v,HTMLParamElement:W.v,HTMLPictureElement:W.v,HTMLPreElement:W.v,HTMLProgressElement:W.v,HTMLQuoteElement:W.v,HTMLScriptElement:W.v,HTMLShadowElement:W.v,HTMLSlotElement:W.v,HTMLSourceElement:W.v,HTMLSpanElement:W.v,HTMLStyleElement:W.v,HTMLTableCaptionElement:W.v,HTMLTableColElement:W.v,HTMLTextAreaElement:W.v,HTMLTimeElement:W.v,HTMLTitleElement:W.v,HTMLTrackElement:W.v,HTMLUListElement:W.v,HTMLUnknownElement:W.v,HTMLVideoElement:W.v,HTMLDirectoryElement:W.v,HTMLFontElement:W.v,HTMLFrameElement:W.v,HTMLFrameSetElement:W.v,HTMLMarqueeElement:W.v,HTMLElement:W.v,AccessibleNodeList:W.fk,HTMLAnchorElement:W.dq,HTMLAreaElement:W.fl,HTMLBaseElement:W.cp,Blob:W.bS,HTMLBodyElement:W.bs,HTMLCanvasElement:W.bT,CDATASection:W.bt,CharacterData:W.bt,Comment:W.bt,ProcessingInstruction:W.bt,Text:W.bt,CSSNumericValue:W.ct,CSSUnitValue:W.ct,CSSPerspective:W.fD,CSSCharsetRule:W.W,CSSConditionRule:W.W,CSSFontFaceRule:W.W,CSSGroupingRule:W.W,CSSImportRule:W.W,CSSKeyframeRule:W.W,MozCSSKeyframeRule:W.W,WebKitCSSKeyframeRule:W.W,CSSKeyframesRule:W.W,MozCSSKeyframesRule:W.W,WebKitCSSKeyframesRule:W.W,CSSMediaRule:W.W,CSSNamespaceRule:W.W,CSSPageRule:W.W,CSSRule:W.W,CSSStyleRule:W.W,CSSSupportsRule:W.W,CSSViewportRule:W.W,CSSStyleDeclaration:W.cu,MSStyleCSSProperties:W.cu,CSS2Properties:W.cu,CSSImageValue:W.b1,CSSKeywordValue:W.b1,CSSPositionValue:W.b1,CSSResourceValue:W.b1,CSSURLImageValue:W.b1,CSSStyleValue:W.b1,CSSMatrixComponent:W.b2,CSSRotation:W.b2,CSSScale:W.b2,CSSSkew:W.b2,CSSTranslation:W.b2,CSSTransformComponent:W.b2,CSSTransformValue:W.fF,CSSUnparsedValue:W.fG,DataTransferItemList:W.fJ,HTMLDivElement:W.aD,DOMException:W.fK,ClientRectList:W.dB,DOMRectList:W.dB,DOMRectReadOnly:W.dC,DOMStringList:W.fL,DOMTokenList:W.fM,Element:W.T,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aE,FileList:W.cx,FileWriter:W.fW,HTMLFormElement:W.h_,Gamepad:W.aN,History:W.h4,HTMLCollection:W.bX,HTMLFormControlsCollection:W.bX,HTMLOptionsCollection:W.bX,ImageData:W.cA,HTMLInputElement:W.cB,KeyboardEvent:W.b5,Location:W.dM,MediaList:W.hH,MessagePort:W.cF,MIDIInputMap:W.hI,MIDIOutputMap:W.hK,MimeType:W.aO,MimeTypeArray:W.hM,PointerEvent:W.ag,MouseEvent:W.ag,DragEvent:W.ag,Document:W.G,DocumentFragment:W.G,HTMLDocument:W.G,ShadowRoot:W.G,XMLDocument:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cL,RadioNodeList:W.cL,Plugin:W.aP,PluginArray:W.i1,RTCStatsReport:W.ib,HTMLSelectElement:W.ie,SourceBuffer:W.aR,SourceBufferList:W.iq,SpeechGrammar:W.aS,SpeechGrammarList:W.ir,SpeechRecognitionResult:W.aT,Storage:W.iu,CSSStyleSheet:W.aF,StyleSheet:W.aF,HTMLTableCellElement:W.ba,HTMLTableDataCellElement:W.ba,HTMLTableHeaderCellElement:W.ba,HTMLTableElement:W.e5,HTMLTableRowElement:W.iB,HTMLTableSectionElement:W.iC,HTMLTemplateElement:W.cV,TextTrack:W.aV,TextTrackCue:W.aG,VTTCue:W.aG,TextTrackCueList:W.iE,TextTrackList:W.iF,TimeRanges:W.iH,Touch:W.aW,TouchEvent:W.aX,TouchList:W.iL,TrackDefaultList:W.iM,CompositionEvent:W.bK,FocusEvent:W.bK,TextEvent:W.bK,UIEvent:W.bK,URL:W.j7,VideoTrackList:W.jm,WheelEvent:W.be,Window:W.d2,DOMWindow:W.d2,Attr:W.d3,CSSRuleList:W.jw,ClientRect:W.eo,DOMRect:W.eo,GamepadList:W.jL,NamedNodeMap:W.eG,MozNamedAttrMap:W.eG,SpeechRecognitionResultList:W.jZ,StyleSheetList:W.k2,SVGLength:P.b6,SVGLengthList:P.he,SVGNumber:P.b9,SVGNumberList:P.hX,SVGPointList:P.i3,SVGScriptElement:P.cP,SVGStringList:P.iA,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bc,SVGTransformList:P.iN,AudioBuffer:P.fp,AudioParamMap:P.fq,AudioTrackList:P.fs,AudioContext:P.bR,webkitAudioContext:P.bR,BaseAudioContext:P.bR,OfflineAudioContext:P.hY,WebGLBuffer:P.ds,WebGLProgram:P.dX,WebGL2RenderingContext:P.c3,WebGLShader:P.e0,WebGLUniformLocation:P.ec,SQLResultSetRowList:P.is})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dR.$nativeSuperclassTag="ArrayBufferView"
H.d6.$nativeSuperclassTag="ArrayBufferView"
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.cJ.$nativeSuperclassTag="ArrayBufferView"
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
H.dS.$nativeSuperclassTag="ArrayBufferView"
W.da.$nativeSuperclassTag="EventTarget"
W.db.$nativeSuperclassTag="EventTarget"
W.dc.$nativeSuperclassTag="EventTarget"
W.dd.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.mW,[])
else U.mW([])})})()
//# sourceMappingURL=test.dart.js.map
