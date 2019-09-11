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
a[c]=function(){a[c]=function(){H.pN(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lC"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lC"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lC(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={ld:function ld(){},
kP:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
ho:function(){return new P.cZ("No element")},
nL:function(){return new P.cZ("Too many elements")},
eg:function(a,b,c,d,e){if(c-b<=32)H.od(a,b,c,d,e)
else H.oc(a,b,c,d,e)},
od:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.e(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.e(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a3()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.e(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
oc:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.ae(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.ae(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
if(d<0||d>=a1)return H.e(a2,d)
u=a2[d]
if(a<0||a>=a1)return H.e(a2,a)
t=a2[a]
if(b<0||b>=a1)return H.e(a2,b)
s=a2[b]
if(a0<0||a0>=a1)return H.e(a2,a0)
r=a2[a0]
if(c<0||c>=a1)return H.e(a2,c)
q=a2[c]
a1=a5.$2(u,t)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=q
q=r
r=p}C.a.k(a2,d,u)
C.a.k(a2,b,s)
C.a.k(a2,c,q)
if(a3<0||a3>=a2.length)return H.e(a2,a3)
C.a.k(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.e(a2,a4)
C.a.k(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.U(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.e(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.O()
if(k<0){if(m!==o){if(o>=a2.length)return H.e(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.e(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a3()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.e(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.e(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.e(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.e(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.O()
if(g<0){if(m!==o){if(o>=a2.length)return H.e(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a3()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.e(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a3()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.e(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.O()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.e(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.e(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
o=i}else{if(n>=a1)return H.e(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.e(a2,a1)
C.a.k(a2,a3,a2[a1])
C.a.k(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.e(a2,a1)
C.a.k(a2,a4,a2[a1])
C.a.k(a2,a1,r)
H.eg(a2,a3,o-2,a5,a6)
H.eg(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.e(a2,o)
if(!J.U(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.e(a2,n)
if(!J.U(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.e(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.e(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.e(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.e(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.O()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.e(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.e(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
o=i}else{if(n>=a1)return H.e(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)}n=j
break}}}H.eg(a2,o,n,a5,a6)}else H.eg(a2,o,n,a5,a6)},
t:function t(a){this.a=a},
h3:function h3(){},
c8:function c8(){},
cJ:function cJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hE:function hE(a,b,c){this.a=a
this.b=b
this.$ti=c},
hF:function hF(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hG:function hG(a,b,c){this.a=a
this.b=b
this.$ti=c},
d9:function d9(a,b,c){this.a=a
this.b=b
this.$ti=c},
jJ:function jJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
c4:function c4(){},
d6:function d6(){},
er:function er(){},
nF:function(){throw H.c(P.I("Cannot modify unmodifiable Map"))},
cv:function(a){var u,t=H.pP(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
pv:function(a){return v.types[H.ad(a)]},
pC:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.S(a).$iL},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aN(a)
if(typeof u!=="string")throw H.c(H.b1(a))
return u},
cT:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
o4:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.e(p,3)
u=H.M(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ah(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.D(s,q)|32)>t)return}return parseInt(a,b)},
cU:function(a){return H.nW(a)+H.ly(H.bW(a),0,null)},
nW:function(a){var u,t,s,r,q,p,o,n=J.S(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ici){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cv(t.length>1&&C.b.D(t,0)===36?C.b.ai(t,1):t)},
nX:function(){if(!!self.location)return self.location.href
return},
mc:function(a){var u,t,s,r,q=J.aE(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
o5:function(a){var u,t,s,r=H.d([],[P.l])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.b1(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.aS(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.b1(s))}return H.mc(r)},
md:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.b1(s))
if(s<0)throw H.c(H.b1(s))
if(s>65535)return H.o5(a)}return H.mc(a)},
o6:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
cc:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aS(u,10))>>>0,56320|u&1023)}}throw H.c(P.ah(a,0,1114111,null,null))},
cb:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o3:function(a){var u=H.cb(a).getFullYear()+0
return u},
o1:function(a){var u=H.cb(a).getMonth()+1
return u},
nY:function(a){var u=H.cb(a).getDate()+0
return u},
nZ:function(a){var u=H.cb(a).getHours()+0
return u},
o0:function(a){var u=H.cb(a).getMinutes()+0
return u},
o2:function(a){var u=H.cb(a).getSeconds()+0
return u},
o_:function(a){var u=H.cb(a).getMilliseconds()+0
return u},
B:function(a){throw H.c(H.b1(a))},
e:function(a,b){if(a==null)J.aE(a)
throw H.c(H.cq(a,b))},
cq:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aO(!0,b,s,null)
u=H.ad(J.aE(a))
if(!(b<0)){if(typeof u!=="number")return H.B(u)
t=b>=u}else t=!0
if(t)return P.a_(b,a,s,null,u)
return P.ea(b,s)},
pq:function(a,b,c){var u="Invalid value"
if(a>c)return new P.cd(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.cd(a,c,!0,b,"end",u)
return new P.aO(!0,b,"end",null)},
b1:function(a){return new P.aO(!0,a,null,null)},
pl:function(a){if(typeof a!=="number")throw H.c(H.b1(a))
return a},
c:function(a){var u
if(a==null)a=new P.e6()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.n5})
u.name=""}else u.toString=H.n5
return u},
n5:function(){return J.aN(this.dartException)},
A:function(a){throw H.c(a)},
x:function(a){throw H.c(P.b3(a))},
bg:function(a){var u,t,s,r,q,p
a=H.n4(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.j5(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
j6:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mo:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m6:function(a,b){return new H.i7(a,b==null?null:b.method)},
le:function(a,b){var u=b==null,t=u?null:b.method
return new H.hr(a,t,u?null:b.receiver)},
am:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.l0(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aS(t,16)&8191)===10)switch(s){case 438:return f.$1(H.le(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.m6(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.n8()
q=$.n9()
p=$.na()
o=$.nb()
n=$.ne()
m=$.nf()
l=$.nd()
$.nc()
k=$.nh()
j=$.ng()
i=r.aq(u)
if(i!=null)return f.$1(H.le(H.M(u),i))
else{i=q.aq(u)
if(i!=null){i.method="call"
return f.$1(H.le(H.M(u),i))}else{i=p.aq(u)
if(i==null){i=o.aq(u)
if(i==null){i=n.aq(u)
if(i==null){i=m.aq(u)
if(i==null){i=l.aq(u)
if(i==null){i=o.aq(u)
if(i==null){i=k.aq(u)
if(i==null){i=j.aq(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.m6(H.M(u),i))}}return f.$1(new H.ji(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ei()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aO(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ei()
return a},
ct:function(a){var u
if(a==null)return new H.f5(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f5(a)},
pu:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
pB:function(a,b,c,d,e,f){H.f(a,"$ibE")
switch(H.ad(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.C("Unsupported number of arguments for wrapped closure"))},
cp:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pB)
a.$identity=u
return u},
nE:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.iD().constructor.prototype):Object.create(new H.cy(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b2
if(typeof t!=="number")return t.F()
$.b2=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lR(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.nA(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lR(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
nA:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.pv,a)
if(typeof a=="function")if(b)return a
else{u=c?H.lQ:H.l4
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
nB:function(a,b,c,d){var u=H.l4
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lR:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nD(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nB(t,!r,u,b)
if(t===0){r=$.b2
if(typeof r!=="number")return r.F()
$.b2=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cz
return new Function(r+H.i(q==null?$.cz=H.fK("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b2
if(typeof r!=="number")return r.F()
$.b2=r+1
o+=r
r="return function("+o+"){return this."
q=$.cz
return new Function(r+H.i(q==null?$.cz=H.fK("self"):q)+"."+H.i(u)+"("+o+");}")()},
nC:function(a,b,c,d){var u=H.l4,t=H.lQ
switch(b?-1:a){case 0:throw H.c(H.oa("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nD:function(a,b){var u,t,s,r,q,p,o,n=$.cz
if(n==null)n=$.cz=H.fK("self")
u=$.lP
if(u==null)u=$.lP=H.fK("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nC(s,!q,t,b)
if(s===1){n="return function(){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+");"
u=$.b2
if(typeof u!=="number")return u.F()
$.b2=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+", "+o+");"
u=$.b2
if(typeof u!=="number")return u.F()
$.b2=u+1
return new Function(n+u+"}")()},
lC:function(a,b,c,d,e,f,g){return H.nE(a,b,c,d,!!e,!!f,g)},
l4:function(a){return a.a},
lQ:function(a){return a.c},
fK:function(a){var u,t,s,r=new H.cy("self","target","receiver","name"),q=J.lb(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
F:function(a){if(a==null)H.ph("boolean expression must not be null")
return a},
M:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b0(a,"String"))},
pr:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b0(a,"double"))},
n0:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b0(a,"num"))},
lz:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b0(a,"bool"))},
ad:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b0(a,"int"))},
n2:function(a,b){throw H.c(H.b0(a,H.cv(H.M(b).substring(2))))},
pH:function(a,b){throw H.c(H.nz(a,H.cv(H.M(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.S(a)[b])return a
H.n2(a,b)},
r:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.S(a)[b]
else u=!0
if(u)return a
H.pH(a,b)},
qy:function(a){if(a==null)return a
if(!!J.S(a).$ib)return a
throw H.c(H.b0(a,"List<dynamic>"))},
mZ:function(a,b){var u
if(a==null)return a
u=J.S(a)
if(!!u.$ib)return a
if(u[b])return a
H.n2(a,b)},
mU:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ad(u)]
else return a.$S()}return},
fu:function(a,b){var u
if(typeof a=="function")return!0
u=H.mU(J.S(a))
if(u==null)return!1
return H.mJ(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lv)return a
$.lv=!0
try{if(H.fu(a,b))return a
u=H.kX(b)
t=H.b0(a,u)
throw H.c(t)}finally{$.lv=!1}},
lD:function(a,b){if(a!=null&&!H.lB(a,b))H.A(H.b0(a,H.kX(b)))
return a},
b0:function(a,b){return new H.j7("TypeError: "+P.dM(a)+": type '"+H.i(H.mP(a))+"' is not a subtype of type '"+b+"'")},
nz:function(a,b){return new H.fL("CastError: "+P.dM(a)+": type '"+H.i(H.mP(a))+"' is not a subtype of type '"+b+"'")},
mP:function(a){var u,t=J.S(a)
if(!!t.$icB){u=H.mU(t)
if(u!=null)return H.kX(u)
return"Closure"}return H.cU(a)},
ph:function(a){throw H.c(new H.jK(a))},
pN:function(a){throw H.c(new P.fV(a))},
oa:function(a){return new H.ip(a)},
mW:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bW:function(a){if(a==null)return
return a.$ti},
qx:function(a,b,c){return H.cu(a["$a"+H.i(c)],H.bW(b))},
bV:function(a,b,c,d){var u=H.cu(a["$a"+H.i(c)],H.bW(b))
return u==null?null:u[d]},
al:function(a,b,c){var u=H.cu(a["$a"+H.i(b)],H.bW(a))
return u==null?null:u[c]},
q:function(a,b){var u=H.bW(a)
return u==null?null:u[b]},
kX:function(a){return H.bU(a,null)},
bU:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cv(a[0].name)+H.ly(a,1,b)
if(typeof a=="function")return H.cv(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ad(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.i(b[t])}if('func' in a)return H.oR(a,b)
if('futureOr' in a)return"FutureOr<"+H.bU("type" in a?a.type:null,b)+">"
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
if(m<0)return H.e(a0,m)
p=C.b.F(p,a0[m])
l=u[q]
if(l!=null&&l!==P.V)p+=" extends "+H.bU(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bU(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bU(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bU(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.pt(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.M(n[g])
i=i+h+H.bU(d[c],a0)+(" "+H.i(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
ly:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.a6("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bU(p,c)}return"<"+u.i(0)+">"},
cu:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lA:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bW(a)
t=J.S(a)
if(t[b]==null)return!1
return H.mS(H.cu(t[d],u),null,c,null)},
m:function(a,b,c,d){if(a==null)return a
if(H.lA(a,b,c,d))return a
throw H.c(H.b0(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cv(b.substring(2))+H.ly(c,0,null),v.mangledGlobalNames)))},
mS:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aM(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aM(a[t],b,c[t],d))return!1
return!0},
qv:function(a,b,c){return a.apply(b,H.cu(J.S(b)["$a"+H.i(c)],H.bW(b)))},
mY:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="V"||a.name==="K"||a===-1||a===-2||H.mY(u)}return!1},
lB:function(a,b){var u,t
if(a==null)return b==null||b.name==="V"||b.name==="K"||b===-1||b===-2||H.mY(b)
if(b==null||b===-1||b.name==="V"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lB(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fu(a,b)}u=J.S(a).constructor
t=H.bW(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aM(u,null,b,null)},
D:function(a,b){if(a!=null&&!H.lB(a,b))throw H.c(H.b0(a,H.kX(b)))
return a},
aM:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="V"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="V"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aM(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="K")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aM("type" in a?a.type:l,b,s,d)
else if(H.aM(a,b,s,d))return!0
else{if(!('$i'+"cG" in t.prototype))return!1
r=t.prototype["$a"+"cG"]
q=H.cu(r,u?a.slice(1):l)
return H.aM(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.mJ(a,b,c,d)
if('func' in a)return c.name==="bE"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mS(H.cu(m,u),b,p,d)},
mJ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aM(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aM(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aM(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aM(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pF(h,b,g,d)},
pF:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aM(c[s],d,a[s],b))return!1}return!0},
qw:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pD:function(a){var u,t,s,r,q=H.M($.mX.$1(a)),p=$.kN[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kT[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.M($.mR.$2(a,q))
if(q!=null){p=$.kN[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kT[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kW(u)
$.kN[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kT[q]=u
return u}if(s==="-"){r=H.kW(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.n1(a,u)
if(s==="*")throw H.c(P.jh(q))
if(v.leafTags[q]===true){r=H.kW(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.n1(a,u)},
n1:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lF(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kW:function(a){return J.lF(a,!1,null,!!a.$iL)},
pE:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kW(u)
else return J.lF(u,c,null,null)},
pz:function(){if(!0===$.lE)return
$.lE=!0
H.pA()},
pA:function(){var u,t,s,r,q,p,o,n
$.kN=Object.create(null)
$.kT=Object.create(null)
H.py()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.n3.$1(q)
if(p!=null){o=H.pE(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
py:function(){var u,t,s,r,q,p,o=C.G()
o=H.co(C.H,H.co(C.I,H.co(C.v,H.co(C.v,H.co(C.J,H.co(C.K,H.co(C.L(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mX=new H.kQ(r)
$.mR=new H.kR(q)
$.n3=new H.kS(p)},
co:function(a,b){return a(b)||b},
nN:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.a4("Illegal RegExp pattern ("+String(p)+")",a,null))},
pK:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
ps:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n4:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lH:function(a,b,c){var u=H.pL(a,b,c)
return u},
pL:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n4(b),'g'),H.ps(c))},
fP:function fP(){},
fQ:function fQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j5:function j5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i7:function i7(a,b){this.a=a
this.b=b},
hr:function hr(a,b,c){this.a=a
this.b=b
this.c=c},
ji:function ji(a){this.a=a},
l0:function l0(a){this.a=a},
f5:function f5(a){this.a=a
this.b=null},
cB:function cB(){},
iN:function iN(){},
iD:function iD(){},
cy:function cy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j7:function j7(a){this.a=a},
fL:function fL(a){this.a=a},
ip:function ip(a){this.a=a},
jK:function jK(a){this.a=a},
a3:function a3(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hv:function hv(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hw:function hw(a,b){this.a=a
this.$ti=b},
hx:function hx(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a){this.a=a},
hq:function hq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cm:function(a){return a},
nV:function(a){return new Int8Array(a)},
bj:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cq(b,a))},
oP:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.pq(a,b,c))
return b},
cO:function cO(){},
bL:function bL(){},
e2:function e2(){},
cP:function cP(){},
e3:function e3(){},
i_:function i_(){},
i0:function i0(){},
i1:function i1(){},
i2:function i2(){},
i3:function i3(){},
e4:function e4(){},
cQ:function cQ(){},
de:function de(){},
df:function df(){},
dg:function dg(){},
dh:function dh(){},
pt:function(a){return J.m_(a?Object.keys(a):[],null)},
pP:function(a){return v.mangledGlobalNames[a]},
pG:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lF:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kO:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lE==null){H.pz()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.jh("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lI()]
if(r!=null)return r
r=H.pD(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.lI(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
nM:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.l3(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ah(a,0,4294967295,"length",null))
return J.m_(new Array(a),b)},
m_:function(a,b){return J.lb(H.d(a,[b]))},
lb:function(a){a.fixed$length=Array
return a},
S:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dR.prototype
return J.dQ.prototype}if(typeof a=="string")return J.bH.prototype
if(a==null)return J.dS.prototype
if(typeof a=="boolean")return J.hp.prototype
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
return a}if(a instanceof P.V)return a
return J.kO(a)},
dq:function(a){if(typeof a=="string")return J.bH.prototype
if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
return a}if(a instanceof P.V)return a
return J.kO(a)},
fv:function(a){if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
return a}if(a instanceof P.V)return a
return J.kO(a)},
mV:function(a){if(typeof a=="number")return J.cI.prototype
if(typeof a=="string")return J.bH.prototype
if(a==null)return a
if(!(a instanceof P.V))return J.ci.prototype
return a},
dr:function(a){if(typeof a=="string")return J.bH.prototype
if(a==null)return a
if(!(a instanceof P.V))return J.ci.prototype
return a},
cs:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
return a}if(a instanceof P.V)return a
return J.kO(a)},
U:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.S(a).t(a,b)},
lK:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mV(a).u(a,b)},
dw:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pC(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dq(a).j(a,b)},
l1:function(a,b,c){return J.fv(a).k(a,b,c)},
nq:function(a,b){return J.dr(a).D(a,b)},
nr:function(a,b,c){return J.cs(a).hE(a,b,c)},
ns:function(a,b,c,d){return J.cs(a).i9(a,b,c,d)},
nt:function(a,b){return J.dr(a).X(a,b)},
l2:function(a,b){return J.mV(a).ip(a,b)},
fw:function(a,b){return J.fv(a).I(a,b)},
nu:function(a,b,c,d){return J.cs(a).iD(a,b,c,d)},
lL:function(a,b){return J.fv(a).A(a,b)},
nv:function(a){return J.cs(a).gik(a)},
fx:function(a){return J.cs(a).gc9(a)},
dx:function(a){return J.S(a).gG(a)},
bw:function(a){return J.fv(a).gT(a)},
aE:function(a){return J.dq(a).gn(a)},
lM:function(a){return J.fv(a).j9(a)},
nw:function(a,b){return J.cs(a).jc(a,b)},
nx:function(a,b,c){return J.dr(a).q(a,b,c)},
ny:function(a){return J.dr(a).jl(a)},
aN:function(a){return J.S(a).i(a)},
a:function a(){},
hp:function hp(){},
dS:function dS(){},
dT:function dT(){},
ib:function ib(){},
ci:function ci(){},
bI:function bI(){},
b7:function b7(a){this.$ti=a},
lc:function lc(a){this.$ti=a},
as:function as(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cI:function cI(){},
dR:function dR(){},
dQ:function dQ(){},
bH:function bH(){}},P={
oq:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pi()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cp(new P.jM(s),1)).observe(u,{childList:true})
return new P.jL(s,u,t)}else if(self.setImmediate!=null)return P.pj()
return P.pk()},
or:function(a){self.scheduleImmediate(H.cp(new P.jN(H.n(a,{func:1,ret:-1})),0))},
os:function(a){self.setImmediate(H.cp(new P.jO(H.n(a,{func:1,ret:-1})),0))},
ot:function(a){P.lk(C.o,H.n(a,{func:1,ret:-1}))},
lk:function(a,b){var u=C.d.ae(a.a,1000)
return P.oz(u<0?0:u,b)},
mn:function(a,b){var u=C.d.ae(a.a,1000)
return P.oA(u<0?0:u,b)},
oz:function(a,b){var u=new P.fb()
u.eW(a,b)
return u},
oA:function(a,b){var u=new P.fb()
u.eX(a,b)
return u},
ou:function(a,b){var u,t,s
b.a=1
try{a.eo(new P.jY(b),new P.jZ(b),null)}catch(s){u=H.am(s)
t=H.ct(s)
P.pI(new P.k_(b,u,t))}},
mz:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaL")
if(u>=4){t=b.c0()
b.a=a.a
b.c=a.c
P.dc(b,t)}else{t=H.f(b.c,"$ibi")
b.a=2
b.c=a
a.dn(t)}},
dc:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$ian")
P.kI(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.dc(h.a,b)}g=h.a
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
if(m){H.f(q,"$ian")
P.kI(i,i,g.b,q.a,q.b)
return}l=$.a1
if(l!==n)$.a1=n
else l=i
g=b.c
if((g&15)===8)new P.k3(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.k2(u,b,q).$0()}else if((g&2)!==0)new P.k1(h,u,b).$0()
if(l!=null)$.a1=l
g=u.b
if(!!J.S(g).$icG){if(g.a>=4){k=H.f(o.c,"$ibi")
o.c=null
b=o.bl(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.mz(g,o)
return}}j=b.b
k=H.f(j.c,"$ibi")
j.c=null
b=j.bl(k)
g=u.a
p=u.b
if(!g){H.D(p,H.q(j,0))
j.a=4
j.c=p}else{H.f(p,"$ian")
j.a=8
j.c=p}h.a=j
g=j}},
pd:function(a,b){if(H.fu(a,{func:1,args:[P.V,P.av]}))return H.n(a,{func:1,ret:null,args:[P.V,P.av]})
if(H.fu(a,{func:1,args:[P.V]}))return H.n(a,{func:1,ret:null,args:[P.V]})
throw H.c(P.l3(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pc:function(){var u,t
for(;u=$.cn,u!=null;){$.dp=null
t=u.b
$.cn=t
if(t==null)$.dn=null
u.a.$0()}},
pg:function(){$.lw=!0
try{P.pc()}finally{$.dp=null
$.lw=!1
if($.cn!=null)$.lJ().$1(P.mT())}},
mO:function(a){var u=new P.ey(a)
if($.cn==null){$.cn=$.dn=u
if(!$.lw)$.lJ().$1(P.mT())}else $.dn=$.dn.b=u},
pf:function(a){var u,t,s=$.cn
if(s==null){P.mO(a)
$.dp=$.dn
return}u=new P.ey(a)
t=$.dp
if(t==null){u.b=s
$.cn=$.dp=u}else{u.b=t.b
$.dp=t.b=u
if(u.b==null)$.dn=u}},
pI:function(a){var u=null,t=$.a1
if(C.f===t){P.kK(u,u,C.f,a)
return}P.kK(u,u,t,H.n(t.c4(a),{func:1,ret:-1}))},
mm:function(a,b){var u=$.a1
if(u===C.f)return P.lk(a,H.n(b,{func:1,ret:-1}))
return P.lk(a,H.n(u.c4(b),{func:1,ret:-1}))},
og:function(a,b){var u=$.a1
if(u===C.f)return P.mn(a,H.n(b,{func:1,ret:-1,args:[P.be]}))
return P.mn(a,H.n(u.dJ(b,P.be),{func:1,ret:-1,args:[P.be]}))},
kI:function(a,b,c,d,e){var u={}
u.a=d
P.pf(new P.kJ(u,e))},
mK:function(a,b,c,d,e){var u,t=$.a1
if(t===c)return d.$0()
$.a1=c
u=t
try{t=d.$0()
return t}finally{$.a1=u}},
mL:function(a,b,c,d,e,f,g){var u,t=$.a1
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
kK:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.c4(d):c.il(d,-1)
P.mO(d)},
jM:function jM(a){this.a=a},
jL:function jL(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function jN(a){this.a=a},
jO:function jO(a){this.a=a},
fb:function fb(){this.c=0},
ks:function ks(a,b){this.a=a
this.b=b},
kr:function kr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bi:function bi(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aL:function aL(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jX:function jX(a,b){this.a=a
this.b=b},
k0:function k0(a,b){this.a=a
this.b=b},
jY:function jY(a){this.a=a},
jZ:function jZ(a){this.a=a},
k_:function k_(a,b,c){this.a=a
this.b=b
this.c=c},
k3:function k3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k4:function k4(a){this.a=a},
k2:function k2(a,b,c){this.a=a
this.b=b
this.c=c},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
ey:function ey(a){this.a=a
this.b=null},
iG:function iG(){},
iI:function iI(a,b){this.a=a
this.b=b},
iJ:function iJ(a,b){this.a=a
this.b=b},
d_:function d_(){},
iH:function iH(){},
be:function be(){},
an:function an(a,b){this.a=a
this.b=b},
kB:function kB(){},
kJ:function kJ(a,b){this.a=a
this.b=b},
ka:function ka(){},
kc:function kc(a,b,c){this.a=a
this.b=b
this.c=c},
kb:function kb(a,b){this.a=a
this.b=b},
kd:function kd(a,b,c){this.a=a
this.b=b
this.c=c},
nO:function(a,b){return new H.a3([a,b])},
lf:function(a,b){return new H.a3([a,b])},
nQ:function(a){return H.pu(a,new H.a3([null,null]))},
dW:function(a){return new P.k8([a])},
lq:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oy:function(a,b,c){var u=new P.eN(a,b,[c])
u.c=a.e
return u},
nK:function(a,b,c){var u,t
if(P.lx(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.h])
C.a.h($.ax,a)
try{P.oS(a,u)}finally{if(0>=$.ax.length)return H.e($.ax,-1)
$.ax.pop()}t=P.mk(b,H.mZ(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
la:function(a,b,c){var u,t
if(P.lx(a))return b+"..."+c
u=new P.a6(b)
C.a.h($.ax,a)
try{t=u
t.a=P.mk(t.a,a,", ")}finally{if(0>=$.ax.length)return H.e($.ax,-1)
$.ax.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lx:function(a){var u,t
for(u=$.ax.length,t=0;t<u;++t)if(a===$.ax[t])return!0
return!1},
oS:function(a,b){var u,t,s,r,q,p,o,n=a.gT(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.w())return
u=H.i(n.gH(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.w()){if(l<=5)return
if(0>=b.length)return H.e(b,-1)
t=b.pop()
if(0>=b.length)return H.e(b,-1)
s=b.pop()}else{r=n.gH(n);++l
if(!n.w()){if(l<=4){C.a.h(b,H.i(r))
return}t=H.i(r)
if(0>=b.length)return H.e(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gH(n);++l
for(;n.w();r=q,q=p){p=n.gH(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.e(b,-1)
m-=b.pop().length+2;--l}C.a.h(b,"...")
return}}s=H.i(r)
t=H.i(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.h(b,o)
C.a.h(b,s)
C.a.h(b,t)},
nP:function(a,b,c){var u=P.nO(b,c)
a.A(0,new P.hy(u,b,c))
return u},
m0:function(a,b){var u,t,s=P.dW(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t)s.h(0,H.D(a[t],b))
return s},
lh:function(a){var u,t={}
if(P.lx(a))return"{...}"
u=new P.a6("")
try{C.a.h($.ax,a)
u.a+="{"
t.a=!0
J.lL(a,new P.hC(t,u))
u.a+="}"}finally{if(0>=$.ax.length)return H.e($.ax,-1)
$.ax.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
k8:function k8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cj:function cj(a){this.a=a
this.c=this.b=null},
eN:function eN(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hy:function hy(a,b,c){this.a=a
this.b=b
this.c=c},
hz:function hz(){},
w:function w(){},
hB:function hB(){},
hC:function hC(a,b){this.a=a
this.b=b},
ag:function ag(){},
kt:function kt(){},
hD:function hD(){},
es:function es(a,b){this.a=a
this.$ti=b},
kf:function kf(){},
eO:function eO(){},
fh:function fh(){},
ok:function(a,b,c,d){if(b instanceof Uint8Array)return P.ol(!1,b,c,d)
return},
ol:function(a,b,c,d){var u,t,s=$.ni()
if(s==null)return
u=0===c
if(u&&!0)return P.ln(s,b)
t=b.length
d=P.bN(c,d,t)
if(u&&d===t)return P.ln(s,b)
return P.ln(s,b.subarray(c,d))},
ln:function(a,b){if(P.on(b))return
return P.oo(a,b)},
oo:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.am(t)}return},
on:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
om:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.am(t)}return},
mN:function(a,b,c){var u,t,s
for(u=J.dq(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.as()
if((s&127)!==s)return t-b}return c-b},
lO:function(a,b,c,d,e,f){if(C.d.bg(f,4)!==0)throw H.c(P.a4("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a4("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a4("Invalid base64 padding, more than two '=' characters",a,b))},
fH:function fH(){},
fI:function fI(){},
c2:function c2(){},
bA:function bA(){},
h5:function h5(){},
hl:function hl(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
hk:function hk(a){this.a=a},
jq:function jq(){},
js:function js(){},
kz:function kz(a){this.b=0
this.c=a},
jr:function jr(a){this.a=a},
ky:function ky(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
ds:function(a,b,c){var u=H.o4(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a4(a,null,null))},
nJ:function(a){if(a instanceof H.cB)return a.i(0)
return"Instance of '"+H.i(H.cU(a))+"'"},
nR:function(a,b,c){var u,t=J.nM(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.k(t,u,b)
return H.m(t,"$ib",[c],"$ab")},
lg:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bw(a);u.w();)C.a.h(s,H.D(u.gH(u),c))
if(b)return s
return H.m(J.lb(s),"$ib",t,"$ab")},
d0:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.m(a,"$ib7",[P.l],"$ab7")
u=a.length
c=P.bN(b,c,u)
return H.md(b>0||c<u?C.a.eE(a,b,c):a)}if(!!J.S(a).$icQ)return H.o6(a,b,P.bN(b,c,a.length))
return P.oe(a,b,c)},
oe:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.ah(b,0,J.aE(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.ah(c,b,J.aE(a),q,q))
t=J.bw(a)
for(s=0;s<b;++s)if(!t.w())throw H.c(P.ah(b,0,s,q,q))
r=[]
if(u)for(;t.w();)r.push(t.gH(t))
else for(s=b;s<c;++s){if(!t.w())throw H.c(P.ah(c,b,s,q,q))
r.push(t.gH(t))}return H.md(r)},
o8:function(a){return new H.hq(a,H.nN(a,!1,!0,!1,!1,!1))},
mk:function(a,b,c){var u=J.bw(b)
if(!u.w())return a
if(c.length===0){do a+=H.i(u.gH(u))
while(u.w())}else{a+=H.i(u.gH(u))
for(;u.w();)a=a+c+H.i(u.gH(u))}return a},
mq:function(){var u=H.nX()
if(u!=null)return P.oj(u)
throw H.c(P.I("'Uri.base' is not supported"))},
fi:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.no().b
if(typeof b!=="string")H.A(H.b1(b))
u=u.test(b)}else u=!1
if(u)return b
H.D(b,H.al(c,"c2",0))
t=c.giC().ca(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.cc(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nG:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nH:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dH:function(a){if(a>=10)return""+a
return"0"+a},
lU:function(a){return new P.bC(1000*a)},
dM:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aN(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nJ(a)},
dz:function(a){return new P.aO(!1,null,null,a)},
l3:function(a,b,c){return new P.aO(!0,a,b,c)},
ea:function(a,b){return new P.cd(null,null,!0,a,b,"Value not in range")},
ah:function(a,b,c,d,e){return new P.cd(b,c,!0,a,d,"Invalid value")},
bN:function(a,b,c){if(0>a||a>c)throw H.c(P.ah(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ah(b,a,c,"end",null))
return b}return c},
me:function(a,b){if(typeof a!=="number")return a.O()
if(a<0)throw H.c(P.ah(a,0,null,b,null))},
a_:function(a,b,c,d,e){var u=H.ad(e==null?J.aE(b):e)
return new P.hn(u,!0,a,c,"Index out of range")},
I:function(a){return new P.jj(a)},
jh:function(a){return new P.jg(a)},
mj:function(a){return new P.cZ(a)},
b3:function(a){return new P.fO(a)},
C:function(a){return new P.eG(a)},
a4:function(a,b,c){return new P.hf(a,b,c)},
nS:function(a,b,c){var u,t=H.d([],[c])
C.a.sn(t,a)
for(u=0;u<a;++u)C.a.k(t,u,b.$1(u))
return t},
lG:function(a){H.pG(a)},
oj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.D(a,4)^58)*3|C.b.D(a,0)^100|C.b.D(a,1)^97|C.b.D(a,2)^116|C.b.D(a,3)^97)>>>0
if(u===0)return P.mp(e<e?C.b.q(a,0,e):a,5,f).gev()
else if(u===32)return P.mp(C.b.q(a,5,e),0,f).gev()}t=new Array(8)
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
if(P.mM(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.jn()
if(r>=0)if(P.mM(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.F()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.O()
if(typeof n!=="number")return H.B(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.b.ab(a,"..",o)))j=n>o+2&&C.b.ab(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.ab(a,"file",0)){if(q<=0){if(!C.b.ab(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.q(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.aV(a,o,n,"/");++e
n=h}k="file"}else if(C.b.ab(a,"http",0)){if(t&&p+3===o&&C.b.ab(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aV(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.ab(a,"https",0)){if(t&&p+4===o&&C.b.ab(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aV(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.q(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.ki(a,r,q,p,o,n,m,k)}return P.oB(a,0,e,r,q,p,o,n,m,k)},
ms:function(a){var u=P.h
return C.a.iH(H.d(a.split("&"),[u]),P.lf(u,u),new P.jo(C.h),[P.y,P.h,P.h])},
oi:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jl(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.X(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.ds(C.b.q(a,s,t),n,n)
if(typeof p!=="number")return p.a3()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.e(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.ds(C.b.q(a,s,c),n,n)
if(typeof p!=="number")return p.a3()
if(p>255)k.$2(l,s)
if(r>=u)return H.e(j,r)
j[r]=p
return j},
mr:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.jm(a),d=new P.jn(e,a)
if(a.length<2)e.$1("address is too short")
u=H.d([],[P.l])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.b.X(a,t)
if(p===58){if(t===b){++t
if(C.b.X(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
C.a.h(u,-1)
r=!0}else C.a.h(u,d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.a.gay(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)C.a.h(u,d.$2(s,c))
else{m=P.oi(a,s,c)
C.a.h(u,(m[0]<<8|m[1])>>>0)
C.a.h(u,(m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.e(l,i)
l[i]=0
f=i+1
if(f>=k)return H.e(l,f)
l[f]=0
i+=2}else{f=C.d.aS(h,8)
if(i<0||i>=k)return H.e(l,i)
l[i]=f
f=i+1
if(f>=k)return H.e(l,f)
l[f]=h&255
i+=2}}return l},
oB:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oJ(a,b,d)
else{if(d===b)P.cl(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oK(a,u,e-1):""
s=P.oG(a,e,f,!1)
if(typeof f!=="number")return f.F()
r=f+1
if(typeof g!=="number")return H.B(g)
q=r<g?P.oI(P.ds(C.b.q(a,r,g),new P.ku(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oH(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.O()
o=h<i?P.ls(a,h+1,i,n):n
return new P.ck(j,t,s,q,p,o,i<c?P.oF(a,i+1,c):n)},
mD:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cl:function(a,b,c){throw H.c(P.a4(c,a,b))},
oI:function(a,b){if(a!=null&&a===P.mD(b))return
return a},
oG:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.b.X(a,b)===91){if(typeof c!=="number")return c.J()
u=c-1
if(C.b.X(a,u)!==93)P.cl(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.oD(a,t,u)
if(typeof s!=="number")return s.O()
if(s<u){r=s+1
q=P.mI(a,C.b.ab(a,"25",r)?s+3:r,u,"%25")}else q=""
P.mr(a,t,s)
return C.b.q(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.B(c)
p=b
for(;p<c;++p)if(C.b.X(a,p)===58){s=C.b.bq(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.mI(a,C.b.ab(a,"25",r)?s+3:r,c,"%25")}else q=""
P.mr(a,b,s)
return"["+C.b.q(a,b,s)+q+"]"}return P.oM(a,b,c)},
oD:function(a,b,c){var u,t=C.b.bq(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.B(c)
u=t<c}else u=!1
return u?t:c},
mI:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.a6(d):null
if(typeof c!=="number")return H.B(c)
u=b
t=u
s=!0
for(;u<c;){r=C.b.X(a,u)
if(r===37){q=P.lt(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.a6("")
o=l.a+=C.b.q(a,t,u)
if(p)q=C.b.q(a,u,u+3)
else if(q==="%")P.cl(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.e(C.i,p)
p=(C.i[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.a6("")
if(t<u){l.a+=C.b.q(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.b.X(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.a6("")
l.a+=C.b.q(a,t,u)
l.a+=P.lr(r)
u+=m
t=u}}}if(l==null)return C.b.q(a,b,c)
if(t<c)l.a+=C.b.q(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
oM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.B(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.X(a,u)
if(q===37){p=P.lt(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.a6("")
n=C.b.q(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.q(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.z,o)
o=(C.z[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.a6("")
if(t<u){s.a+=C.b.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.l,o)
o=(C.l[o]&1<<(q&15))!==0}else o=!1
if(o)P.cl(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.X(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.a6("")
n=C.b.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.lr(q)
u+=l
t=u}}}}if(s==null)return C.b.q(a,b,c)
if(t<c){n=C.b.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oJ:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mF(C.b.D(a,b)))P.cl(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.D(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.n,r)
r=(C.n[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cl(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.q(a,b,c)
return P.oC(t?a.toLowerCase():a)},
oC:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oK:function(a,b,c){return P.dm(a,b,c,C.W,!1)},
oH:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dm(a,b,c,C.A,!0):C.k.jH(d,new P.kv(),P.h).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a9(u,"/"))u="/"+u
return P.oL(u,e,f)},
oL:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a9(a,"/"))return P.oN(a,!u||c)
return P.oO(a)},
ls:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.dz("Both query and queryParameters specified"))
return P.dm(a,b,c,C.m,!0)}if(d==null)return
u=new P.a6("")
t.a=""
d.A(0,new P.kw(new P.kx(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oF:function(a,b,c){return P.dm(a,b,c,C.m,!0)},
lt:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.X(a,b+1)
t=C.b.X(a,p)
s=H.kP(u)
r=H.kP(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.aS(q,4)
if(p>=8)return H.e(C.i,p)
p=(C.i[p]&1<<(q&15))!==0}else p=!1
if(p)return H.cc(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.q(a,b,b+3).toUpperCase()
return},
lr:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
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
for(q=0;--r,r>=0;s=128){p=C.d.hT(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.D(o,p>>>4))
C.a.k(t,q+2,C.b.D(o,p&15))
q+=3}}return P.d0(t,0,null)},
dm:function(a,b,c,d,e){var u=P.mH(a,b,c,d,e)
return u==null?C.b.q(a,b,c):u},
mH:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.O()
if(typeof c!=="number")return H.B(c)
if(!(o<c))break
c$0:{u=C.b.X(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.e(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.lt(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.e(C.l,t)
t=(C.l[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.cl(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.b.X(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.lr(u)}}if(m==null)m=new P.a6("")
m.a+=C.b.q(a,n,o)
m.a+=H.i(s)
if(typeof r!=="number")return H.B(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.O()
if(n<c)m.a+=C.b.q(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
mG:function(a){if(C.b.a9(a,"."))return!0
return C.b.e7(a,"/.")!==-1},
oO:function(a){var u,t,s,r,q,p,o
if(!P.mG(a))return a
u=H.d([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.U(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oN:function(a,b){var u,t,s,r,q,p
if(!P.mG(a))return!b?P.mE(a):a
u=H.d([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gay(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gay(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.k(u,0,P.mE(u[0]))}return C.a.m(u,"/")},
mE:function(a){var u,t,s,r=a.length
if(r>=2&&P.mF(J.nq(a,0)))for(u=1;u<r;++u){t=C.b.D(a,u)
if(t===58)return C.b.q(a,0,u)+"%3A"+C.b.ai(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.e(C.n,s)
s=(C.n[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oE:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.D(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dz("Invalid URL encoding"))}}return u},
lu:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.D(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.q(a,b,c)
else r=new H.t(C.b.q(a,b,c))}else{r=H.d([],[P.l])
for(s=a.length,q=b;q<c;++q){t=C.b.D(a,q)
if(t>127)throw H.c(P.dz("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.dz("Truncated URI"))
C.a.h(r,P.oE(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.m(r,"$ib",[P.l],"$ab")
return new P.jr(!1).ca(r)},
mF:function(a){var u=a|32
return 97<=u&&u<=122},
mp:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.l])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.D(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a4(m,a,t))}}if(s<0&&t>b)throw H.c(P.a4(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.D(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gay(l)
if(r!==44||t!==p+7||!C.b.ab(a,"base64",p+1))throw H.c(P.a4("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.iU(0,a,o,u)
else{n=P.mH(a,o,u,C.m,!0)
if(n!=null)a=C.b.aV(a,o,u,n)}return new P.jk(a,l,c)},
oQ:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nS(22,new P.kD(),P.T),n=new P.kC(o),m=new P.kE(),l=new P.kF(),k=H.f(n.$2(0,225),"$iT")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(14,225),"$iT")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(15,225),"$iT")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(1,225),"$iT")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(2,235),"$iT")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(3,235),"$iT")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(4,229),"$iT")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(5,229),"$iT")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(6,231),"$iT")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(7,231),"$iT")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.f(n.$2(8,8),"$iT"),"]",5)
k=H.f(n.$2(9,235),"$iT")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(16,235),"$iT")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(17,235),"$iT")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(10,235),"$iT")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(18,235),"$iT")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(19,235),"$iT")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(11,235),"$iT")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(12,236),"$iT")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.f(n.$2(13,237),"$iT")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.f(n.$2(20,245),"$iT"),"az",21)
k=H.f(n.$2(21,245),"$iT")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mM:function(a,b,c,d,e){var u,t,s,r,q=$.np()
for(u=b;u<c;++u){if(d<0||d>=q.length)return H.e(q,d)
t=q[d]
s=C.b.D(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.e(t,s)
r=t[s]
d=r&31
C.a.k(e,r>>>5,u)}return d},
P:function P(){},
ay:function ay(a,b){this.a=a
this.b=b},
E:function E(){},
bC:function bC(a){this.a=a},
h1:function h1(){},
h2:function h2(){},
bD:function bD(){},
fA:function fA(){},
e6:function e6(){},
aO:function aO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cd:function cd(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hn:function hn(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
jj:function jj(a){this.a=a},
jg:function jg(a){this.a=a},
cZ:function cZ(a){this.a=a},
fO:function fO(a){this.a=a},
ia:function ia(){},
ei:function ei(){},
fV:function fV(a){this.a=a},
eG:function eG(a){this.a=a},
hf:function hf(a,b,c){this.a=a
this.b=b
this.c=c},
bE:function bE(){},
l:function l(){},
j:function j(){},
b6:function b6(){},
b:function b(){},
y:function y(){},
K:function K(){},
ae:function ae(){},
V:function V(){},
av:function av(){},
h:function h(){},
a6:function a6(a){this.a=a},
jo:function jo(a){this.a=a},
jl:function jl(a){this.a=a},
jm:function jm(a){this.a=a},
jn:function jn(a,b){this.a=a
this.b=b},
ck:function ck(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
ku:function ku(a,b){this.a=a
this.b=b},
kv:function kv(){},
kx:function kx(a,b){this.a=a
this.b=b},
kw:function kw(a){this.a=a},
jk:function jk(a,b,c){this.a=a
this.b=b
this.c=c},
kD:function kD(){},
kC:function kC(a){this.a=a},
kE:function kE(){},
kF:function kF(){},
ki:function ki(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jS:function jS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
po:function(a){var u,t=J.S(a)
if(!!t.$ibn){u=t.gdQ(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fg(a.data,a.height,a.width)},
pn:function(a){if(a instanceof P.fg)return{data:a.a,height:a.b,width:a.c}
return a},
bs:function(a){var u,t,s,r,q
if(a==null)return
u=P.lf(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r){q=H.M(t[r])
u.k(0,q,a[q])}return u},
pm:function(a){var u={}
a.A(0,new P.kL(u))
return u},
kk:function kk(){},
km:function km(a,b){this.a=a
this.b=b},
fg:function fg(a,b,c){this.a=a
this.b=b
this.c=c},
kL:function kL(a){this.a=a},
kl:function kl(a,b){this.a=a
this.b=b},
hb:function hb(a,b){this.a=a
this.b=b},
hc:function hc(){},
hd:function hd(){},
k7:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ox:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k9:function k9(){},
aj:function aj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b9:function b9(){},
ht:function ht(){},
bc:function bc(){},
i8:function i8(){},
ig:function ig(){},
cW:function cW(){},
iK:function iK(){},
p:function p(){},
bf:function bf(){},
j4:function j4(){},
eL:function eL(){},
eM:function eM(){},
eW:function eW(){},
eX:function eX(){},
f7:function f7(){},
f8:function f8(){},
fe:function fe(){},
ff:function ff(){},
T:function T(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(a){this.a=a},
fF:function fF(){},
bY:function bY(){},
i9:function i9(){},
ez:function ez(){},
dB:function dB(){},
dP:function dP(){},
e9:function e9(){},
eb:function eb(){},
ce:function ce(){},
ec:function ec(){},
ek:function ek(){},
eq:function eq(){},
iC:function iC(){},
f3:function f3(){},
f4:function f4(){}},W={
lN:function(){var u=document.createElement("a")
return u},
l5:function(){var u=document.createElement("canvas")
return u},
nI:function(a,b,c){var u=document.body,t=(u&&C.t).ao(u,a,b,c)
t.toString
u=W.G
u=new H.d9(new W.ar(t),H.n(new W.h4(),{func:1,ret:P.P,args:[u]}),[u])
return H.f(u.gaL(u),"$iN")},
lX:function(a){H.f(a,"$ik")
return"wheel"},
cE:function(a){var u,t,s,r="element tag unavailable"
try{u=J.cs(a)
t=u.gel(a)
if(typeof t==="string")r=u.gel(a)}catch(s){H.am(s)}return r},
l9:function(a){var u=document.createElement("img")
if(a!=null)u.src=a
return u},
k6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mB:function(a,b,c,d){var u=W.k6(W.k6(W.k6(W.k6(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a8:function(a,b,c,d,e){var u=W.mQ(new W.jW(c),W.o)
if(u!=null&&!0)J.ns(a,b,u,!1)
return new W.jV(a,b,u,!1,[e])},
mA:function(a){var u=W.lN(),t=window.location
u=new W.bT(new W.ke(u,t))
u.eQ(a)
return u},
ov:function(a,b,c,d){H.f(a,"$iN")
H.M(b)
H.M(c)
H.f(d,"$ibT")
return!0},
ow:function(a,b,c,d){var u,t,s
H.f(a,"$iN")
H.M(b)
H.M(c)
u=H.f(d,"$ibT").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mC:function(){var u=P.h,t=P.m0(C.p,u),s=H.q(C.p,0),r=H.n(new W.kq(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.kp(t,P.dW(u),P.dW(u),P.dW(u),null)
t.eV(null,new H.hG(C.p,r,[s,u]),q,null)
return t},
mQ:function(a,b){var u=$.a1
if(u===C.f)return a
return u.dJ(a,b)},
u:function u(){},
fy:function fy(){},
dy:function dy(){},
fz:function fz(){},
cx:function cx(){},
bZ:function bZ(){},
bx:function bx(){},
c1:function c1(){},
cA:function cA(){},
by:function by(){},
cC:function cC(){},
fR:function fR(){},
W:function W(){},
cD:function cD(){},
fS:function fS(){},
b4:function b4(){},
b5:function b5(){},
fT:function fT(){},
fU:function fU(){},
fX:function fX(){},
aF:function aF(){},
fZ:function fZ(){},
dJ:function dJ(){},
dK:function dK(){},
h_:function h_(){},
h0:function h0(){},
jQ:function jQ(a,b){this.a=a
this.b=b},
N:function N(){},
h4:function h4(){},
o:function o(){},
k:function k(){},
aG:function aG(){},
cF:function cF(){},
ha:function ha(){},
he:function he(){},
aQ:function aQ(){},
hj:function hj(){},
c5:function c5(){},
bn:function bn(){},
c6:function c6(){},
b8:function b8(){},
dX:function dX(){},
hT:function hT(){},
cM:function cM(){},
hU:function hU(){},
hV:function hV(a){this.a=a},
hW:function hW(){},
hX:function hX(a){this.a=a},
aR:function aR(){},
hY:function hY(){},
a5:function a5(){},
ar:function ar(a){this.a=a},
G:function G(){},
cR:function cR(){},
aS:function aS(){},
id:function id(){},
im:function im(){},
io:function io(a){this.a=a},
iq:function iq(){},
aU:function aU(){},
iA:function iA(){},
aV:function aV(){},
iB:function iB(){},
aW:function aW(){},
iE:function iE(){},
iF:function iF(a){this.a=a},
aH:function aH(){},
bd:function bd(){},
ej:function ej(){},
iL:function iL(){},
iM:function iM(){},
d2:function d2(){},
aY:function aY(){},
aI:function aI(){},
iO:function iO(){},
iP:function iP(){},
iZ:function iZ(){},
aZ:function aZ(){},
b_:function b_(){},
j2:function j2(){},
j3:function j3(){},
bQ:function bQ(){},
jp:function jp(){},
jI:function jI(){},
bh:function bh(){},
da:function da(){},
db:function db(){},
jR:function jR(){},
eB:function eB(){},
k5:function k5(){},
eT:function eT(){},
kj:function kj(){},
kn:function kn(){},
jP:function jP(){},
jT:function jT(a){this.a=a},
jU:function jU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lp:function lp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jV:function jV(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jW:function jW(a){this.a=a},
bT:function bT(a){this.a=a},
H:function H(){},
e5:function e5(a){this.a=a},
i5:function i5(a){this.a=a},
i4:function i4(a,b,c){this.a=a
this.b=b
this.c=c},
f0:function f0(){},
kg:function kg(){},
kh:function kh(){},
kp:function kp(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kq:function kq(){},
ko:function ko(){},
dO:function dO(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aB:function aB(){},
ke:function ke(a,b){this.a=a
this.b=b},
fj:function fj(a){this.a=a},
kA:function kA(a){this.a=a},
eA:function eA(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eU:function eU(){},
eV:function eV(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
di:function di(){},
dj:function dj(){},
f1:function f1(){},
f2:function f2(){},
f6:function f6(){},
f9:function f9(){},
fa:function fa(){},
dk:function dk(){},
dl:function dl(){},
fc:function fc(){},
fd:function fd(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){}},O={
l6:function(a){var u=new O.a2([a])
u.bi(a)
return u},
a2:function a2(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cL:function cL(){this.b=this.a=null},
fY:function fY(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e_:function e_(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hN:function hN(a,b){this.a=a
this.b=b},
hO:function hO(){},
hP:function hP(a,b){this.a=a
this.b=b},
hQ:function hQ(){},
hR:function hR(a,b){this.a=a
this.b=b},
hS:function hS(){},
hH:function hH(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
e1:function e1(){},
hI:function hI(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ba:function ba(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hK:function hK(){var _=this
_.e=_.d=_.c=_.b=null},
hL:function hL(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hM:function hM(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ee:function ee(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bO:function bO(){}},E={
lY:function(){var u=new E.aq()
u.a=""
u.b=!0
u.seP(0,O.l6(E.aq))
u.y.aY(u.giV(),u.giY())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sbC(0,null)
return u},
o9:function(a,b){var u=new E.ii(a)
u.eM(a,b)
return u},
of:function(a,b,c,d,e){var u,t,s=J.S(a)
if(!!s.$ic1)return E.ml(a,!0,!0,!0,!1)
u=W.l5()
t=u.style
t.width="100%"
t.height="100%"
s.gc9(a).h(0,u)
return E.ml(u,!0,!0,!0,!1)},
ml:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.em(),j=H.f(C.j.cN(a,"webgl2",P.nQ(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ice")
if(j==null)H.A(P.C("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.o9(j,a)
u=new T.iV(j)
u.b=H.ad(j.getParameter(3379))
u.c=H.ad(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.et(a)
t=new X.hs()
t.c=new X.aA(!1,!1,!1)
t.shw(P.dW(P.l))
u.b=t
t=new X.hZ(u)
t.f=0
t.r=V.bp()
t.x=V.bp()
t.ch=t.Q=1
u.c=t
t=new X.hA(u)
t.r=0
t.x=V.bp()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.j1(u)
t.f=V.bp()
t.r=V.bp()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfh(H.d([],[[P.d_,P.V]]))
t=u.z
s=document
r=W.a5
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a8(s,"contextmenu",H.n(u.gfQ(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a8(a,"focus",H.n(u.gfW(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a8(a,"blur",H.n(u.gfK(),o),!1,p))
t=u.z
n=W.b8
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a8(s,"keyup",H.n(u.gh_(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a8(s,"keydown",H.n(u.gfY(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a8(a,"mousedown",H.n(u.gh3(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a8(a,"mouseup",H.n(u.gh7(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a8(a,l,H.n(u.gh5(),q),!1,r))
n=u.z
W.lX(a)
m=W.bh;(n&&C.a).h(n,W.a8(a,H.M(W.lX(a)),H.n(u.gh9(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a8(s,l,H.n(u.gfS(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a8(s,"mouseup",H.n(u.gfU(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a8(s,"pointerlockchange",H.n(u.ghb(),o),!1,p))
p=u.z
o=W.b_
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a8(a,"touchstart",H.n(u.ghr(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a8(a,"touchend",H.n(u.ghn(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a8(a,"touchmove",H.n(u.ghp(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.ay(Date.now(),!1)
k.cy=0
k.dr()
return k},
fJ:function fJ(){},
aq:function aq(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ii:function ii(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ij:function ij(a){this.a=a},
ik:function ik(a){this.a=a},
il:function il(a){this.a=a},
em:function em(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iY:function iY(a){this.a=a}},Z={
my:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cm(c)),35044)
a.bindBuffer(b,null)
return new Z.ex(b,u)},
aK:function(a){return new Z.br(a)},
ex:function ex(a,b){this.a=a
this.b=b},
dC:function dC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
d8:function d8(a){this.a=a},
c_:function c_(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
c7:function c7(a,b,c){this.a=a
this.b=b
this.c=c},
br:function br(a){this.a=a}},D={
Q:function(){var u=new D.c3()
u.san(null)
u.saQ(null)
u.c=null
u.d=0
return u},
fM:function fM(){},
c3:function c3(){var _=this
_.d=_.c=_.b=_.a=null},
h7:function h7(a){this.a=a},
h8:function h8(a){this.a=a},
z:function z(){this.b=null},
bF:function bF(a){this.b=null
this.$ti=a},
bG:function bG(a){this.b=null
this.$ti=a},
J:function J(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bB:function bB(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
af:function af(){},
dV:function dV(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
e8:function e8(){},
eh:function eh(){}},X={dD:function dD(a,b){this.a=a
this.b=b},dU:function dU(a,b){this.a=a
this.b=b},hs:function hs(){var _=this
_.d=_.c=_.b=_.a=null},dY:function dY(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hA:function hA(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aA:function aA(a,b,c){this.a=a
this.b=b
this.c=c},bo:function bo(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hZ:function hZ(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cN:function cN(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ie:function ie(){},eo:function eo(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},j1:function j1(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},et:function et(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lZ:function(a){var u=new X.hg(),t=new V.ao(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.li()
u.r=t
return u},
m8:function(a){var u,t,s=new X.e7()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gp().h(0,s.geY())
t=new D.J("mover",u,s.b,[U.ai])
t.b=!0
s.a2(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.O().a)){s.c=1.0471975511965976
t=new D.J("fov",t,1.0471975511965976,[P.E])
t.b=!0
s.a2(t)}t=s.d
if(!(Math.abs(t-0.1)<$.O().a)){s.d=0.1
t=new D.J("near",t,0.1,[P.E])
t.b=!0
s.a2(t)}t=s.e
if(!(Math.abs(t-2000)<$.O().a)){s.e=2000
t=new D.J("far",t,2000,[P.E])
t.b=!0
s.a2(t)}return s},
fG:function fG(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
c0:function c0(){},
hg:function hg(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hm:function hm(){this.b=this.a=null},
e7:function e7(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
d1:function d1(){},
n_:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="testCanvas",a6=null,a7="bumpMaps",a8="modifiers",a9=34067,b0=V.ob("Test 029"),b1=W.l5()
b1.className="pageLargeCanvas"
b1.id=a5
b0.a.appendChild(b1)
u=[P.h]
b0.dH(H.d(["Test of bump distort pass. It renders the scene to a back buffer then ","paints that back buffer texture to the front buffer with a distortion."],u))
b0.i8(H.d(["bumpMaps"],u))
b0.dH(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a5)
if(t==null)H.A(P.C("Failed to find an element with the identifier, testCanvas."))
s=E.of(t,!0,!0,!0,!1)
r=new U.cH()
q=U.ai
r.bi(q)
r.aY(r.gfC(),r.ghf())
r.e=null
r.f=V.bK()
r.r=0
p=s.r
o=new U.ev()
n=U.l7()
n.scM(0,!0)
n.scu(6.283185307179586)
n.scw(0)
n.saj(0,0)
n.scv(100)
n.sW(0)
n.scb(0.5)
o.b=n
m=o.gaP()
n.gp().h(0,m)
n=U.l7()
n.scM(0,!0)
n.scu(6.283185307179586)
n.scw(0)
n.saj(0,0)
n.scv(100)
n.sW(0)
n.scb(0.5)
o.c=n
n.gp().h(0,m)
o.d=null
o.r=o.f=o.e=!1
o.y=o.x=2.5
o.Q=4
o.ch=o.cx=!1
o.db=o.cy=0
o.dx=null
o.dy=0
o.fx=o.fr=null
l=new X.aA(!1,!1,!1)
k=o.d
o.d=l
n=[X.aA]
m=new D.J(a8,k,l,n)
m.b=!0
o.P(m)
m=o.f
if(m!==!1){o.f=!1
m=new D.J("invertX",m,!1,[P.P])
m.b=!0
o.P(m)}m=o.r
if(m!==!1){o.r=!1
m=new D.J("invertY",m,!1,[P.P])
m.b=!0
o.P(m)}o.b5(p)
r.h(0,o)
p=s.r
o=new U.eu()
m=U.l7()
m.scM(0,!0)
m.scu(6.283185307179586)
m.scw(0)
m.saj(0,0)
m.scv(100)
m.sW(0)
m.scb(0.2)
o.b=m
m.gp().h(0,o.gaP())
o.c=null
o.d=!1
o.e=2.5
o.r=4
o.x=o.y=!1
o.z=0
o.Q=null
o.ch=0
o.cy=o.cx=null
l=new X.aA(!0,!1,!1)
k=o.c
o.c=l
m=new D.J(a8,k,l,n)
m.b=!0
o.P(m)
o.b5(p)
r.h(0,o)
p=s.r
o=new U.ew()
o.c=0.01
o.e=o.d=0
l=new X.aA(!1,!1,!1)
o.b=l
n=new D.J(a8,a6,l,n)
n.b=!0
o.P(n)
o.b5(p)
r.h(0,o)
r.h(0,U.lS(V.bb(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
j=X.m8(r)
i=new X.fG()
i.d=i.c=i.b=i.a=512
i.e=!0
i.f=!1
i.x=i.r=1
i.ch=T.lj(a6)
i.cx=new V.ao(0,0,0,1)
i.cy=!0
i.db=2000
i.dx=!0
i.dy=V.li()
i.sar(0,512)
i.sap(0,512)
h=new V.ao(0,0,0,1)
if(!i.cx.t(0,h)){k=i.cx
i.cx=h
p=new D.J("color",k,h,[V.ao])
p.b=!0
i.a2(p)}if(i.cy){i.cy=!1
p=new D.J("clearColor",!0,!1,[P.P])
p.b=!0
i.a2(p)}p=i.db
if(!(Math.abs(p-2000)<$.O().a)){i.db=2000
p=new D.J("depth",p,2000,[P.E])
p.b=!0
i.a2(p)}if(!i.f){i.f=!0
p=new D.J("autoResize",!1,!0,[P.P])
p.b=!0
i.a2(p)}p=i.r
if(!(Math.abs(p-1)<$.O().a)){i.r=1
p=new D.J("autoResizeScalarX",p,1,[P.E])
p.b=!0
i.a2(p)}p=i.x
if(!(Math.abs(p-1)<$.O().a)){i.x=1
p=new D.J("autoResizeScalarY",p,1,[P.E])
p.b=!0
i.a2(p)}g=V.li()
if(!J.U(i.dy,g)){k=i.dy
i.dy=g
p=new D.J("region",k,g,[V.cV])
p.b=!0
i.a2(p)}f=E.lY()
f.sbC(0,F.pO())
e=new O.e_()
e.sf4(O.l6(V.at))
e.e.aY(e.gfG(),e.gfI())
p=new O.ba(e,"emission")
p.c=new A.ap(!1,!1,!1)
p.f=new V.a7(0,0,0)
e.f=p
p=new O.ba(e,"ambient")
p.c=new A.ap(!1,!1,!1)
p.f=new V.a7(0,0,0)
e.r=p
p=new O.ba(e,"diffuse")
p.c=new A.ap(!1,!1,!1)
p.f=new V.a7(0,0,0)
e.x=p
p=new O.ba(e,"invDiffuse")
p.c=new A.ap(!1,!1,!1)
p.f=new V.a7(0,0,0)
e.y=p
p=new O.hM(e,"specular")
p.c=new A.ap(!1,!1,!1)
p.f=new V.a7(0,0,0)
p.ch=100
e.z=p
p=new O.hI(e,"bump")
p.c=new A.ap(!1,!1,!1)
e.Q=p
e.ch=null
p=new O.ba(e,"reflect")
p.c=new A.ap(!1,!1,!1)
p.f=new V.a7(0,0,0)
e.cx=p
p=new O.hL(e,"refract")
p.c=new A.ap(!1,!1,!1)
p.f=new V.a7(0,0,0)
p.ch=1
e.cy=p
p=new O.hH(e,"alpha")
p.c=new A.ap(!1,!1,!1)
p.f=1
e.db=p
p=new D.dV()
p.bi(D.af)
p.sff(H.d([],[D.bB]))
p.sht(H.d([],[D.e8]))
p.shV(H.d([],[D.eh]))
p.y=p.x=null
p.cP(p.gfE(),p.ghd(),p.ghh())
e.dx=p
o=new O.hK()
o.b=new V.ao(0,0,0,0)
o.c=1
o.d=10
o.e=!1
e.dy=o
o=p.x
p=o==null?p.x=D.Q():o
p.h(0,e.ghG())
p=e.dx
o=p.y
p=o==null?p.y=D.Q():o
p.h(0,e.gbG())
e.fr=null
p=e.dx
d=V.lo()
o=U.lS(V.m3(V.mb(),d,new V.R(0,-1,-1)))
h=new V.a7(1,1,1)
n=new D.bB()
n.c=new V.a7(1,1,1)
n.a=V.mx()
n.d=V.lo()
n.e=V.op()
k=n.b
n.b=o
o.gp().h(0,n.geR())
q=new D.J("mover",k,n.b,[q])
q.b=!0
n.az(q)
if(!n.c.t(0,h)){k=n.c
n.c=h
q=new D.J("color",k,h,[V.a7])
q.b=!0
n.az(q)}p.h(0,n)
q=e.r
q.sb7(0,new V.a7(0,0,1))
q=e.x
q.sb7(0,new V.a7(0,1,0))
q=e.z
q.sb7(0,new V.a7(1,0,0))
q=e.z
q.dv(new A.ap(!0,!1,!1))
q.dw(10)
q=s.f
p=q.a
c=p.createTexture()
p.bindTexture(a9,c)
p.texParameteri(a9,10242,10497)
p.texParameteri(a9,10243,10497)
p.texParameteri(a9,10241,9729)
p.texParameteri(a9,10240,9729)
p.bindTexture(a9,a6)
b=new T.el()
b.a=0
b.b=c
b.c=!1
b.d=0
q.aO(b,c,"../resources/maskonaive/posx.jpg",34069,!1,!1)
q.aO(b,c,"../resources/maskonaive/negx.jpg",34070,!1,!1)
q.aO(b,c,"../resources/maskonaive/posy.jpg",34071,!1,!1)
q.aO(b,c,"../resources/maskonaive/negy.jpg",34072,!1,!1)
q.aO(b,c,"../resources/maskonaive/posz.jpg",34073,!1,!1)
q.aO(b,c,"../resources/maskonaive/negz.jpg",34074,!1,!1)
a=M.lT()
q=new O.ee()
q.b=1.0471975511965976
q.d=new V.a7(1,1,1)
k=q.c
q.c=b
b.gp().h(0,q.gbG())
p=new D.J("boxTexture",k,q.c,[T.el])
p.b=!0
q.a6(p)
a.saW(q)
a.sbe(0,i)
a.sb6(j)
a0=new M.dL()
a0.a=!0
a0.sf7(0,O.l6(E.aq))
a0.e.aY(a0.gfM(),a0.gfO())
a0.y=a0.x=a0.r=a0.f=null
a1=X.lZ(a6)
a0.sb6(a6)
a0.sbe(0,a1)
a0.saW(a6)
a0.sb6(j)
a0.saW(e)
a0.sbe(0,i)
a0.e.h(0,f)
a2=new O.fY()
a2.sdO(a6)
a2.sdM(a6)
a3=V.m2()
if(!J.U(a2.d,a3)){a2.d=a3
a2.at()}a3=V.m2()
if(!J.U(a2.e,a3)){a2.e=a3
a2.at()}a2.sdL(a6)
a2.sdO(i.ch)
a2.sdL(V.m4(0.05,0.05,0.05))
a4=M.lT()
a4.saW(a2)
q=M.aC
p=H.d([a,a0,a4],[q])
o=new M.dE()
o.bi(q)
o.e=!0
o.f=!1
o.r=null
o.aY(o.ghj(),o.ghl())
o.af(0,p)
q=s.d
if(q!==o){if(q!=null)q.gp().R(0,s.gcV())
s.d=o
o.gp().h(0,s.gcV())
s.cW()}q=new V.iR(a7,new X.kU(a2,s))
u=u.getElementById(a7)
q.c=u
if(u==null)H.A("Failed to find bumpMaps for Texture2DGroup")
q.dF(0,"../resources/BumpMap1.png",!0)
q.h(0,"../resources/BumpMap2.png")
q.h(0,"../resources/BumpMap3.png")
q.h(0,"../resources/BumpMap4.png")
q.h(0,"../resources/BumpMap5.png")
q.h(0,"../resources/ScrewBumpMap.png")
q.h(0,"../resources/CtrlPnlBumpMap.png")
u=s.z
if(u==null)u=s.z=D.Q()
q={func:1,ret:-1,args:[D.z]}
p=H.n(new X.kV(b0,a2),q)
if(u.b==null)u.saQ(H.d([],[q]))
u=u.b;(u&&C.a).h(u,p)
V.pJ(s)},
kU:function kU(a,b){this.a=a
this.b=b},
kV:function kV(a,b){this.a=a
this.b=b}},V={
pQ:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bg(a-b,u)
return(a<0?a+u:a)+b},
Y:function(a,b,c){if(a==null)return C.b.aG("null",c)
return C.b.aG(C.e.ep(Math.abs(a-0)<$.O().a?0:a,b),c+b+1)},
cr:function(a,b,c){var u,t,s,r,q,p=H.d([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.x)(a),++s){r=V.Y(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.e(p,q)
C.a.k(p,q,C.b.aG(p[q],t))}return p},
dt:function(a){return C.e.ji(Math.pow(2,C.S.cl(Math.log(H.pl(a))/Math.log(2))))},
m2:function(){var u=$.m1
return u==null?$.m1=new V.cK(1,0,0,0,1,0,0,0,1):u},
bK:function(){var u=$.m5
return u==null?$.m5=V.bb(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bb:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.at(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
m4:function(a,b,c){return V.bb(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
m3:function(a,b,c){var u=c.v(0,Math.sqrt(c.B(c))),t=b.aE(u),s=t.v(0,Math.sqrt(t.B(t))),r=u.aE(s),q=new V.R(a.a,a.b,a.c),p=s.S(0).B(q),o=r.S(0).B(q),n=u.S(0).B(q)
return V.bb(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bp:function(){var u=$.ma
return u==null?$.ma=new V.aa(0,0):u},
mb:function(){var u=$.cS
return u==null?$.cS=new V.ab(0,0,0):u},
li:function(){var u=$.mg
return u==null?$.mg=V.mf(0,0,1,1):u},
mf:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cV(a,b,c,d)},
d7:function(){var u=$.mw
return u==null?$.mw=new V.R(0,0,0):u},
op:function(){var u=$.jt
return u==null?$.jt=new V.R(-1,0,0):u},
lo:function(){var u=$.ju
return u==null?$.ju=new V.R(0,1,0):u},
mx:function(){var u=$.jv
return u==null?$.jv=new V.R(0,0,1):u},
a7:function a7(a,b,c){this.a=a
this.b=b
this.c=c},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h6:function h6(a){this.a=a},
cK:function cK(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
at:function at(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ab:function ab(a,b,c){this.a=a
this.b=b
this.c=c},
bM:function bM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cV:function cV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
X:function X(a,b){this.a=a
this.b=b},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
a0:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.C("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.D(a,0)
t=C.b.D(b,0)
s=new V.ih()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
v:function(a){var u=new V.ir()
u.eN(a)
return u},
j0:function(){var u=new V.j_(),t=P.h
u.shW(new H.a3([t,V.cY]))
u.shZ(new H.a3([t,V.d3]))
u.c=null
return u},
bl:function bl(){},
az:function az(){},
dZ:function dZ(){},
au:function au(){this.a=null},
ih:function ih(){this.b=this.a=null},
ir:function ir(){this.a=null},
cY:function cY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
en:function en(a,b,c){this.a=a
this.b=b
this.c=c},
d3:function d3(a){this.b=a
this.c=null},
j_:function j_(){this.c=this.b=this.a=null},
d4:function d4(a){this.b=a
this.a=this.c=null},
pJ:function(a){P.og(C.P,new V.kY(a))},
ob:function(a){var u=new V.iv()
u.eO(a,!0)
return u},
bz:function bz(){},
kY:function kY(a){this.a=a},
fW:function fW(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hh:function hh(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hi:function hi(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ic:function ic(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iv:function iv(){this.b=this.a=null},
ix:function ix(a){this.a=a},
iw:function iw(a){this.a=a},
iy:function iy(a){this.a=a},
iR:function iR(a,b){this.a=a
this.c=null
this.d=b},
iT:function iT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iS:function iS(){}},U={
l7:function(){var u=new U.fN()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
lS:function(a){var u=new U.dF()
u.a=a
return u},
fN:function fN(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dF:function dF(){this.b=this.a=null},
cH:function cH(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ai:function ai(){},
eu:function eu(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
ev:function ev(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ew:function ew(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
lT:function(){var u,t,s,r,q,p,o,n,m,l=null,k=new M.dG()
k.a=!0
u=E.lY()
t=F.mi()
s=t.a
r=new V.R(-1,-1,1)
r=r.v(0,Math.sqrt(r.B(r)))
q=s.bn(new V.bM(1,2,4,6),new V.ao(1,0,0,1),new V.ab(-1,-1,0),new V.aa(0,1),r,l)
s=t.a
r=new V.R(1,-1,1)
r=r.v(0,Math.sqrt(r.B(r)))
p=s.bn(new V.bM(0,3,4,6),new V.ao(0,0,1,1),new V.ab(1,-1,0),new V.aa(1,1),r,l)
s=t.a
r=new V.R(1,1,1)
r=r.v(0,Math.sqrt(r.B(r)))
o=s.bn(new V.bM(0,2,5,6),new V.ao(0,1,0,1),new V.ab(1,1,0),new V.aa(1,0),r,l)
s=t.a
r=V.bp()
n=new V.R(-1,1,1)
n=n.v(0,Math.sqrt(n.B(n)))
m=s.bn(new V.bM(0,2,4,7),new V.ao(1,1,0,1),new V.ab(-1,1,0),r,n,l)
t.d.ia(H.d([q,p,o,m],[F.aw]))
t.aD()
u.sbC(0,t)
k.e=u
k.sb6(l)
k.sbe(0,l)
k.saW(l)
return k},
dE:function dE(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
dG:function dG(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dL:function dL(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aC:function aC(){}},A={
nT:function(a,b){var u=a.ba,t=new A.e0(b,u)
t.bF(b,u)
t.eL(a,b)
return t},
nU:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gav(a0)+a1.gav(a1)+a2.gav(a2)+a3.gav(a3)+a4.gav(a4)+a5.gav(a5)+a6.gav(a6)+a7.gav(a7)+a8.gav(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.x)(a9),++t)f+="_"+H.i(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.x)(b0),++t)f+="_"+H.i(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.x)(b1),++t)f+="_"+H.i(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.aD()
if(k){u=$.bv()
g=new Z.br(g.a|u.a)}if(j){u=$.bu()
g=new Z.br(g.a|u.a)}if(i){u=$.bt()
g=new Z.br(g.a|u.a)}return new A.hJ(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,l,p,r,h,!0,!1,!1,o,r,m,k,j,!1,!1,i,!1,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
kG:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
kH:function(a,b,c){var u
A.kG(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.kZ(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
oW:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.kG(b,t,"emission")
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
A.kH(b,t,"ambient")
b.a+="\n"},
oU:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.kH(b,t,"diffuse")
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
A.kH(b,t,"invDiffuse")
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
A.kH(b,t,"specular")
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
A.kG(b,t,"reflect")
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
A.kG(b,t,"refract")
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
s=A.kZ(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.as()
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
s=A.kZ(t)
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
if(typeof u!=="number")return u.as()
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
s=A.kZ(t)
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
if(typeof u!=="number")return u.as()
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.x)(q),++o)A.oV(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.x)(q),++o)A.p_(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.x)(q),++o)A.p3(a,q[o],j)
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.x)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ai(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.x)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ai(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.x)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ai(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
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
kZ:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.ai(a,1)},
ll:function(a,b,c,d,e){var u=new A.j9(a,c,e)
u.f=d
u.si6(P.nR(d,0,P.l))
return u},
dA:function dA(a,b,c){this.a=a
this.b=b
this.c=c},
fB:function fB(a){this.a=a},
ap:function ap(a,b,c){this.a=a
this.b=b
this.c=c},
dI:function dI(a,b){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
e0:function e0(a,b){var _=this
_.jt=_.js=_.dU=_.dT=_.ba=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jG=_.jF=_.jE=_.ck=_.cj=_.ci=_.cg=_.cf=_.ce=_.jD=_.jC=_.e0=_.jB=_.jA=_.e_=_.dZ=_.jz=_.jy=_.dY=_.dX=_.jx=_.jw=_.dW=_.jv=_.ju=_.dV=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aP:function aP(a,b){this.a=a
this.b=b},
aT:function aT(a,b){this.a=a
this.b=b},
aX:function aX(a,b){this.a=a
this.b=b},
hJ:function hJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.ba=b3
_.dT=b4},
cf:function cf(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cg:function cg(a,b,c,d,e,f,g,h,i,j){var _=this
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
ch:function ch(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ef:function ef(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ep:function ep(){},
je:function je(a){this.a=a},
aJ:function aJ(a,b,c){this.a=a
this.c=b
this.d=c},
jb:function jb(a,b,c){this.a=a
this.c=b
this.d=c},
jc:function jc(a,b,c){this.a=a
this.c=b
this.d=c},
jd:function jd(a,b,c){this.a=a
this.c=b
this.d=c},
j9:function j9(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ac:function ac(a,b,c){this.a=a
this.c=b
this.d=c},
ja:function ja(a,b,c){this.a=a
this.c=b
this.d=c},
Z:function Z(a,b,c){this.a=a
this.c=b
this.d=c},
d5:function d5(a,b,c){this.a=a
this.c=b
this.d=c},
jf:function jf(a,b,c){this.a=a
this.c=b
this.d=c},
bR:function bR(a,b,c){this.a=a
this.c=b
this.d=c},
ak:function ak(a,b,c){this.a=a
this.c=b
this.d=c},
bq:function bq(a,b,c){this.a=a
this.c=b
this.d=c},
bS:function bS(a,b,c){this.a=a
this.c=b
this.d=c}},F={
pO:function(){return F.pp(15,30,0.5,1,new F.l_())},
pp:function(a,b,c,d,e){var u=F.pM(a,b,new F.kM(e,d,b,c))
if(u==null)return
u.aD()
u.iT(new F.jC(),new F.i6())
return u},
pM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.mi()
t=H.d([],[F.aw])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.jw(g,g,new V.ao(p,0,0,1),g,g,new V.aa(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.dP(g))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.jw(g,g,new V.ao(j,i,h,1),g,g,new V.aa(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.dP(g))}}u.d.ib(a+1,b+1,t)
return u},
dN:function(a,b,c){var u=new F.a9(),t=a.a
if(t==null)H.A(P.C("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.A(P.C("May not create a face with vertices attached to different shapes."))
u.hM(a)
u.hN(b)
u.hO(c)
C.a.h(u.a.a.d.b,u)
u.a.a.al()
return u},
mi:function(){var u=new F.ed(),t=new F.jx(u)
t.b=!1
t.si7(H.d([],[F.aw]))
u.a=t
t=new F.iu()
t.sbZ(H.d([],[F.ca]))
u.b=t
t=new F.it(u)
t.sfo(H.d([],[F.bJ]))
u.c=t
t=new F.is(u)
t.sfi(H.d([],[F.a9]))
u.d=t
u.e=null
return u},
jw:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aw(),r=new F.jF()
r.sbZ(H.d([],[F.ca]))
s.b=r
r=new F.jB()
u=[F.bJ]
r.sfp(H.d([],u))
r.sfq(H.d([],u))
s.c=r
r=new F.jy()
u=[F.a9]
r.sfj(H.d([],u))
r.sfk(H.d([],u))
r.sfl(H.d([],u))
s.d=r
h=$.nj()
s.e=0
r=$.aD()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bv().a)!==0?e:t
s.x=(u&$.bu().a)!==0?b:t
s.y=(u&$.bk().a)!==0?f:t
s.z=(u&$.bX().a)!==0?g:t
s.Q=(u&$.nk().a)!==0?c:t
s.ch=(u&$.cw().a)!==0?i:0
s.cx=(u&$.bt().a)!==0?a:t
return s},
l_:function l_(){},
kM:function kM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h9:function h9(){},
iz:function iz(){},
bJ:function bJ(){},
hu:function hu(){},
j8:function j8(){},
ca:function ca(){},
ed:function ed(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
is:function is(a){this.a=a
this.b=null},
it:function it(a){this.a=a
this.b=null},
iu:function iu(){this.b=null},
aw:function aw(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jH:function jH(a){this.a=a},
jG:function jG(a){this.a=a},
jx:function jx(a){this.a=a
this.c=this.b=null},
jy:function jy(){this.d=this.c=this.b=null},
jz:function jz(a,b){this.a=a
this.b=b},
jA:function jA(a,b){this.a=a
this.b=b},
jB:function jB(){this.c=this.b=null},
jD:function jD(){},
jC:function jC(){},
jE:function jE(){},
i6:function i6(){},
jF:function jF(){this.b=null}},T={
lj:function(a){var u=new T.iU()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
bP:function bP(){},
iQ:function iQ(){},
iU:function iU(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
el:function el(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iV:function iV(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
iX:function iX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iW:function iW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ld.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gG:function(a){return H.cT(a)},
i:function(a){return"Instance of '"+H.i(H.cU(a))+"'"}}
J.hp.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iP:1}
J.dS.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.dT.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.ib.prototype={}
J.ci.prototype={}
J.bI.prototype={
i:function(a){var u=a[$.n7()]
if(u==null)return this.eH(a)
return"JavaScript function for "+H.i(J.aN(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibE:1}
J.b7.prototype={
h:function(a,b){H.D(b,H.q(a,0))
if(!!a.fixed$length)H.A(P.I("add"))
a.push(b)},
eh:function(a,b){if(!!a.fixed$length)H.A(P.I("removeAt"))
if(b<0||b>=a.length)throw H.c(P.ea(b,null))
return a.splice(b,1)[0]},
R:function(a,b){var u
if(!!a.fixed$length)H.A(P.I("remove"))
for(u=0;u<a.length;++u)if(J.U(a[u],b)){a.splice(u,1)
return!0}return!1},
af:function(a,b){var u,t
H.m(b,"$ij",[H.q(a,0)],"$aj")
if(!!a.fixed$length)H.A(P.I("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.x)(b),++t)a.push(b[t])},
A:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.b3(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.i(a[u]))
return t.join(b)},
iO:function(a){return this.m(a,"")},
iH:function(a,b,c,d){var u,t,s
H.D(b,d)
H.n(c,{func:1,ret:d,args:[d,H.q(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.b3(a))}return t},
iG:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.P,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.F(b.$1(s)))return s
if(a.length!==u)throw H.c(P.b3(a))}throw H.c(H.ho())},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
eE:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ah(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ah(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.q(a,0)])
return H.d(a.slice(b,c),[H.q(a,0)])},
giF:function(a){if(a.length>0)return a[0]
throw H.c(H.ho())},
gay:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.ho())},
dI:function(a,b){var u,t
H.n(b,{func:1,ret:P.P,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.F(b.$1(a[t])))return!0
if(a.length!==u)throw H.c(P.b3(a))}return!1},
bD:function(a,b){var u=H.q(a,0)
H.n(b,{func:1,ret:P.l,args:[u,u]})
if(!!a.immutable$list)H.A(P.I("sort"))
H.eg(a,0,a.length-1,b,u)},
U:function(a,b){var u
for(u=0;u<a.length;++u)if(J.U(a[u],b))return!0
return!1},
i:function(a){return P.la(a,"[","]")},
gT:function(a){return new J.as(a,a.length,[H.q(a,0)])},
gG:function(a){return H.cT(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.A(P.I("set length"))
if(b<0)throw H.c(P.ah(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cq(a,b))
return a[b]},
k:function(a,b,c){H.D(c,H.q(a,0))
if(!!a.immutable$list)H.A(P.I("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cq(a,b))
a[b]=c},
$ij:1,
$ib:1}
J.lc.prototype={}
J.as.prototype={
gH:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.x(s))
u=t.c
if(u>=r){t.scY(null)
return!1}t.scY(s[u]);++t.c
return!0},
scY:function(a){this.d=H.D(a,H.q(this,0))},
$ib6:1}
J.cI.prototype={
ip:function(a,b){var u
H.n0(b)
if(typeof b!=="number")throw H.c(H.b1(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbr(b)
if(this.gbr(a)===u)return 0
if(this.gbr(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbr:function(a){return a===0?1/a<0:a<0},
ji:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.I(""+a+".toInt()"))},
cl:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.I(""+a+".floor()"))},
a1:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.I(""+a+".round()"))},
ep:function(a,b){var u
if(b>20)throw H.c(P.ah(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbr(a))return"-"+u
return u},
bf:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ah(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.X(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.A(P.I("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.u("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bg:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eK:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dB(a,b)},
ae:function(a,b){return(a|0)===a?a/b|0:this.dB(a,b)},
dB:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.I("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aS:function(a,b){var u
if(a>0)u=this.dA(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hT:function(a,b){if(b<0)throw H.c(H.b1(b))
return this.dA(a,b)},
dA:function(a,b){return b>31?0:a>>>b},
$iE:1,
$iae:1}
J.dR.prototype={$il:1}
J.dQ.prototype={}
J.bH.prototype={
X:function(a,b){if(b<0)throw H.c(H.cq(a,b))
if(b>=a.length)H.A(H.cq(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.c(H.cq(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(typeof b!=="string")throw H.c(P.l3(b,null,null))
return a+b},
aV:function(a,b,c,d){var u,t
c=P.bN(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ab:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ah(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a9:function(a,b){return this.ab(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.A(H.b1(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.O()
if(b<0)throw H.c(P.ea(b,null))
if(b>c)throw H.c(P.ea(b,null))
if(c>a.length)throw H.c(P.ea(c,null))
return a.substring(b,c)},
ai:function(a,b){return this.q(a,b,null)},
jl:function(a){return a.toLowerCase()},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aG:function(a,b){var u=b-a.length
if(u<=0)return a
return this.u(" ",u)+a},
bq:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ah(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
e7:function(a,b){return this.bq(a,b,0)},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$im7:1,
$ih:1}
H.t.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.b.X(this.a,b)},
$ad6:function(){return[P.l]},
$aw:function(){return[P.l]},
$aj:function(){return[P.l]},
$ab:function(){return[P.l]}}
H.h3.prototype={}
H.c8.prototype={
gT:function(a){var u=this
return new H.cJ(u,u.gn(u),[H.al(u,"c8",0)])},
bA:function(a,b){return this.eG(0,H.n(b,{func:1,ret:P.P,args:[H.al(this,"c8",0)]}))}}
H.cJ.prototype={
gH:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=J.dq(s),q=r.gn(s)
if(t.b!==q)throw H.c(P.b3(s))
u=t.c
if(u>=q){t.sb0(null)
return!1}t.sb0(r.I(s,u));++t.c
return!0},
sb0:function(a){this.d=H.D(a,H.q(this,0))},
$ib6:1}
H.hE.prototype={
gT:function(a){return new H.hF(J.bw(this.a),this.b,this.$ti)},
gn:function(a){return J.aE(this.a)},
I:function(a,b){return this.b.$1(J.fw(this.a,b))},
$aj:function(a,b){return[b]}}
H.hF.prototype={
w:function(){var u=this,t=u.b
if(t.w()){u.sb0(u.c.$1(t.gH(t)))
return!0}u.sb0(null)
return!1},
gH:function(a){return this.a},
sb0:function(a){this.a=H.D(a,H.q(this,1))},
$ab6:function(a,b){return[b]}}
H.hG.prototype={
gn:function(a){return J.aE(this.a)},
I:function(a,b){return this.b.$1(J.fw(this.a,b))},
$ac8:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.d9.prototype={
gT:function(a){return new H.jJ(J.bw(this.a),this.b,this.$ti)}}
H.jJ.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(H.F(t.$1(u.gH(u))))return!0
return!1},
gH:function(a){var u=this.a
return u.gH(u)}}
H.c4.prototype={}
H.d6.prototype={
k:function(a,b,c){H.D(c,H.al(this,"d6",0))
throw H.c(P.I("Cannot modify an unmodifiable list"))}}
H.er.prototype={}
H.fP.prototype={
i:function(a){return P.lh(this)},
k:function(a,b,c){H.D(b,H.q(this,0))
H.D(c,H.q(this,1))
return H.nF()},
$iy:1}
H.fQ.prototype={
gn:function(a){return this.a},
bo:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bo(0,b))return
return this.dc(b)},
dc:function(a){return this.b[H.M(a)]},
A:function(a,b){var u,t,s,r,q=this,p=H.q(q,1)
H.n(b,{func:1,ret:-1,args:[H.q(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.D(q.dc(r),p))}}}
H.j5.prototype={
aq:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.i7.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hr.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.ji.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.l0.prototype={
$1:function(a){if(!!J.S(a).$ibD)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:24}
H.f5.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iav:1}
H.cB.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ibE:1,
gjm:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iN.prototype={}
H.iD.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cv(u)+"'"}}
H.cy.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cy))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.cT(this.a)
else u=typeof t!=="object"?J.dx(t):H.cT(t)
return(u^H.cT(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.i(H.cU(u))+"'")}}
H.j7.prototype={
i:function(a){return this.a}}
H.fL.prototype={
i:function(a){return this.a}}
H.ip.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.jK.prototype={
i:function(a){return"Assertion failed: "+P.dM(this.a)}}
H.a3.prototype={
gn:function(a){return this.a},
giN:function(a){return this.a===0},
gaa:function(a){return new H.hw(this,[H.q(this,0)])},
bo:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.d7(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.d7(t,b)}else return s.iK(b)},
iK:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cq(u.bN(t,u.cp(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bk(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bk(r,b)
s=t==null?null:t.b
return s}else return q.iL(b)},
iL:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bN(r,s.cp(a))
t=s.cq(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.D(b,H.q(s,0))
H.D(c,H.q(s,1))
if(typeof b==="string"){u=s.b
s.cZ(u==null?s.b=s.bX():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cZ(t==null?s.c=s.bX():t,b,c)}else s.iM(b,c)},
iM:function(a,b){var u,t,s,r,q=this
H.D(a,H.q(q,0))
H.D(b,H.q(q,1))
u=q.d
if(u==null)u=q.d=q.bX()
t=q.cp(a)
s=q.bN(u,t)
if(s==null)q.c1(u,t,[q.bY(a,b)])
else{r=q.cq(s,a)
if(r>=0)s[r].b=b
else s.push(q.bY(a,b))}},
A:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.q(s,0),H.q(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.b3(s))
u=u.c}},
cZ:function(a,b,c){var u,t=this
H.D(b,H.q(t,0))
H.D(c,H.q(t,1))
u=t.bk(a,b)
if(u==null)t.c1(a,b,t.bY(b,c))
else u.b=c},
fz:function(){this.r=this.r+1&67108863},
bY:function(a,b){var u,t=this,s=new H.hv(H.D(a,H.q(t,0)),H.D(b,H.q(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fz()
return s},
cp:function(a){return J.dx(a)&0x3ffffff},
cq:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1},
i:function(a){return P.lh(this)},
bk:function(a,b){return a[b]},
bN:function(a,b){return a[b]},
c1:function(a,b,c){a[b]=c},
fd:function(a,b){delete a[b]},
d7:function(a,b){return this.bk(a,b)!=null},
bX:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c1(t,u,t)
this.fd(t,u)
return t}}
H.hv.prototype={}
H.hw.prototype={
gn:function(a){return this.a.a},
gT:function(a){var u=this.a,t=new H.hx(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hx.prototype={
gH:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.b3(t))
else{t=u.c
if(t==null){u.sda(null)
return!1}else{u.sda(t.a)
u.c=u.c.c
return!0}}},
sda:function(a){this.d=H.D(a,H.q(this,0))},
$ib6:1}
H.kQ.prototype={
$1:function(a){return this.a(a)},
$S:24}
H.kR.prototype={
$2:function(a,b){return this.a(a,b)},
$S:42}
H.kS.prototype={
$1:function(a){return this.a(H.M(a))},
$S:57}
H.hq.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$im7:1,
$io7:1}
H.cO.prototype={$icO:1}
H.bL.prototype={$ibL:1,$ioh:1}
H.e2.prototype={
gn:function(a){return a.length},
$iL:1,
$aL:function(){}}
H.cP.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]},
k:function(a,b,c){H.pr(c)
H.bj(b,a,a.length)
a[b]=c},
$ac4:function(){return[P.E]},
$aw:function(){return[P.E]},
$ij:1,
$aj:function(){return[P.E]},
$ib:1,
$ab:function(){return[P.E]}}
H.e3.prototype={
k:function(a,b,c){H.ad(c)
H.bj(b,a,a.length)
a[b]=c},
$ac4:function(){return[P.l]},
$aw:function(){return[P.l]},
$ij:1,
$aj:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]}}
H.i_.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.i0.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.i1.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.i2.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.i3.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.e4.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bj(b,a,a.length)
return a[b]},
$iqa:1}
H.cQ.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bj(b,a,a.length)
return a[b]},
$icQ:1,
$iT:1}
H.de.prototype={}
H.df.prototype={}
H.dg.prototype={}
H.dh.prototype={}
P.jM.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:30}
P.jL.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:34}
P.jN.prototype={
$0:function(){this.a.$0()},
$S:2}
P.jO.prototype={
$0:function(){this.a.$0()},
$S:2}
P.fb.prototype={
eW:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cp(new P.ks(this,b),0),a)
else throw H.c(P.I("`setTimeout()` not found."))},
eX:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cp(new P.kr(this,a,Date.now(),b),0),a)
else throw H.c(P.I("Periodic timer."))},
$ibe:1}
P.ks.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.kr.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.eK(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.bi.prototype={
iR:function(a){if((this.c&15)!==6)return!0
return this.b.b.cI(H.n(this.d,{func:1,ret:P.P,args:[P.V]}),a.a,P.P,P.V)},
iJ:function(a){var u=this.e,t=P.V,s={futureOr:1,type:H.q(this,1)},r=this.b.b
if(H.fu(u,{func:1,args:[P.V,P.av]}))return H.lD(r.je(u,a.a,a.b,null,t,P.av),s)
else return H.lD(r.cI(H.n(u,{func:1,args:[P.V]}),a.a,null,t),s)}}
P.aL.prototype={
eo:function(a,b,c){var u,t,s,r=H.q(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a1
if(u!==C.f){H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.pd(b,u)}t=new P.aL($.a1,[c])
s=b==null?1:3
this.d_(new P.bi(t,s,a,b,[r,c]))
return t},
jh:function(a,b){return this.eo(a,null,b)},
d_:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ibi")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaL")
s=u.a
if(s<4){u.d_(a)
return}t.a=s
t.c=u.c}P.kK(null,null,t.b,H.n(new P.jX(t,a),{func:1,ret:-1}))}},
dn:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ibi")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaL")
u=q.a
if(u<4){q.dn(a)
return}p.a=u
p.c=q.c}o.a=p.bl(a)
P.kK(null,null,p.b,H.n(new P.k0(o,p),{func:1,ret:-1}))}},
c0:function(){var u=H.f(this.c,"$ibi")
this.c=null
return this.bl(u)},
bl:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d3:function(a){var u,t,s=this,r=H.q(s,0)
H.lD(a,{futureOr:1,type:r})
u=s.$ti
if(H.lA(a,"$icG",u,"$acG"))if(H.lA(a,"$iaL",u,null))P.mz(a,s)
else P.ou(a,s)
else{t=s.c0()
H.D(a,r)
s.a=4
s.c=a
P.dc(s,t)}},
d4:function(a,b){var u,t=this
H.f(b,"$iav")
u=t.c0()
t.a=8
t.c=new P.an(a,b)
P.dc(t,u)},
$icG:1}
P.jX.prototype={
$0:function(){P.dc(this.a,this.b)},
$S:2}
P.k0.prototype={
$0:function(){P.dc(this.b,this.a.a)},
$S:2}
P.jY.prototype={
$1:function(a){var u=this.a
u.a=0
u.d3(a)},
$S:30}
P.jZ.prototype={
$2:function(a,b){H.f(b,"$iav")
this.a.d4(a,b)},
$1:function(a){return this.$2(a,null)},
$S:52}
P.k_.prototype={
$0:function(){this.a.d4(this.b,this.c)},
$S:2}
P.k3.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.ek(H.n(s.d,{func:1}),null)}catch(r){u=H.am(r)
t=H.ct(r)
if(o.d){s=H.f(o.a.a.c,"$ian").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$ian")
else q.b=new P.an(u,t)
q.a=!0
return}if(!!J.S(n).$icG){if(n instanceof P.aL&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$ian")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jh(new P.k4(p),null)
s.a=!1}},
$S:3}
P.k4.prototype={
$1:function(a){return this.a},
$S:48}
P.k2.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.q(s,0)
q=H.D(n.c,r)
p=H.q(s,1)
n.a.b=s.b.b.cI(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.am(o)
t=H.ct(o)
s=n.a
s.b=new P.an(u,t)
s.a=!0}},
$S:3}
P.k1.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$ian")
r=m.c
if(H.F(r.iR(u))&&r.e!=null){q=m.b
q.b=r.iJ(u)
q.a=!1}}catch(p){t=H.am(p)
s=H.ct(p)
r=H.f(m.a.a.c,"$ian")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.an(t,s)
n.a=!0}},
$S:3}
P.ey.prototype={}
P.iG.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aL($.a1,[P.l])
r.a=0
u=H.q(s,0)
t=H.n(new P.iI(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.iJ(r,q),{func:1,ret:-1})
W.a8(s.a,s.b,t,!1,u)
return q}}
P.iI.prototype={
$1:function(a){H.D(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.K,args:[H.q(this.b,0)]}}}
P.iJ.prototype={
$0:function(){this.b.d3(this.a.a)},
$S:2}
P.d_.prototype={}
P.iH.prototype={}
P.be.prototype={}
P.an.prototype={
i:function(a){return H.i(this.a)},
$ibD:1}
P.kB.prototype={$iqp:1}
P.kJ.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e6():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:2}
P.ka.prototype={
jf:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.a1){a.$0()
return}P.mK(r,r,this,a,-1)}catch(s){u=H.am(s)
t=H.ct(s)
P.kI(r,r,this,u,H.f(t,"$iav"))}},
jg:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.f===$.a1){a.$1(b)
return}P.mL(r,r,this,a,b,-1,c)}catch(s){u=H.am(s)
t=H.ct(s)
P.kI(r,r,this,u,H.f(t,"$iav"))}},
il:function(a,b){return new P.kc(this,H.n(a,{func:1,ret:b}),b)},
c4:function(a){return new P.kb(this,H.n(a,{func:1,ret:-1}))},
dJ:function(a,b){return new P.kd(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
ek:function(a,b){H.n(a,{func:1,ret:b})
if($.a1===C.f)return a.$0()
return P.mK(null,null,this,a,b)},
cI:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.a1===C.f)return a.$1(b)
return P.mL(null,null,this,a,b,c,d)},
je:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.a1===C.f)return a.$2(b,c)
return P.pe(null,null,this,a,b,c,d,e,f)}}
P.kc.prototype={
$0:function(){return this.a.ek(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.kb.prototype={
$0:function(){return this.a.jf(this.b)},
$S:3}
P.kd.prototype={
$1:function(a){var u=this.c
return this.a.jg(this.b,H.D(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.k8.prototype={
gT:function(a){var u=this,t=new P.eN(u,u.r,u.$ti)
t.c=u.e
return t},
gn:function(a){return this.a},
U:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.f(u[b],"$icj")!=null}else{t=this.f8(b)
return t}},
f8:function(a){var u=this.d
if(u==null)return!1
return this.bL(this.dd(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.D(b,H.q(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.d0(u==null?s.b=P.lq():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.d0(t==null?s.c=P.lq():t,b)}else return s.f_(0,b)},
f_:function(a,b){var u,t,s,r=this
H.D(b,H.q(r,0))
u=r.d
if(u==null)u=r.d=P.lq()
t=r.d5(b)
s=u[t]
if(s==null)u[t]=[r.bI(b)]
else{if(r.bL(s,b)>=0)return!1
s.push(r.bI(b))}return!0},
R:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hz(this.c,b)
else return this.hy(0,b)},
hy:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.dd(r,b)
t=s.bL(u,b)
if(t<0)return!1
s.dC(u.splice(t,1)[0])
return!0},
d0:function(a,b){H.D(b,H.q(this,0))
if(H.f(a[b],"$icj")!=null)return!1
a[b]=this.bI(b)
return!0},
hz:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$icj")
if(u==null)return!1
this.dC(u)
delete a[b]
return!0},
d2:function(){this.r=1073741823&this.r+1},
bI:function(a){var u,t=this,s=new P.cj(H.D(a,H.q(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.d2()
return s},
dC:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.d2()},
d5:function(a){return J.dx(a)&1073741823},
dd:function(a,b){return a[this.d5(b)]},
bL:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1}}
P.cj.prototype={}
P.eN.prototype={
gH:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.b3(t))
else{t=u.c
if(t==null){u.sd1(null)
return!1}else{u.sd1(H.D(t.a,H.q(u,0)))
u.c=u.c.b
return!0}}},
sd1:function(a){this.d=H.D(a,H.q(this,0))},
$ib6:1}
P.hy.prototype={
$2:function(a,b){this.a.k(0,H.D(a,this.b),H.D(b,this.c))},
$S:6}
P.hz.prototype={$ij:1,$ib:1}
P.w.prototype={
gT:function(a){return new H.cJ(a,this.gn(a),[H.bV(this,a,"w",0)])},
I:function(a,b){return this.j(a,b)},
A:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bV(s,a,"w",0)]})
u=s.gn(a)
for(t=0;t<u;++t){b.$1(s.j(a,t))
if(u!==s.gn(a))throw H.c(P.b3(a))}},
jk:function(a,b){var u,t=this,s=H.d([],[H.bV(t,a,"w",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.k(s,u,t.j(a,u))
return s},
jj:function(a){return this.jk(a,!0)},
iD:function(a,b,c,d){var u
H.D(d,H.bV(this,a,"w",0))
P.bN(b,c,this.gn(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.la(a,"[","]")}}
P.hB.prototype={}
P.hC.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.i(a)
t.a=u+": "
t.a+=H.i(b)},
$S:6}
P.ag.prototype={
A:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bV(s,a,"ag",0),H.bV(s,a,"ag",1)]})
for(u=J.bw(s.gaa(a));u.w();){t=u.gH(u)
b.$2(t,s.j(a,t))}},
gn:function(a){return J.aE(this.gaa(a))},
i:function(a){return P.lh(a)},
$iy:1}
P.kt.prototype={
k:function(a,b,c){H.D(b,H.q(this,0))
H.D(c,H.q(this,1))
throw H.c(P.I("Cannot modify unmodifiable map"))}}
P.hD.prototype={
j:function(a,b){return J.dw(this.a,b)},
k:function(a,b,c){J.l1(this.a,H.D(b,H.q(this,0)),H.D(c,H.q(this,1)))},
A:function(a,b){J.lL(this.a,H.n(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]}))},
gn:function(a){return J.aE(this.a)},
i:function(a){return J.aN(this.a)},
$iy:1}
P.es.prototype={}
P.kf.prototype={
af:function(a,b){var u
for(u=J.bw(H.m(b,"$ij",this.$ti,"$aj"));u.w();)this.h(0,u.gH(u))},
i:function(a){return P.la(this,"{","}")},
I:function(a,b){var u,t,s,r=this
P.me(b,"index")
for(u=P.oy(r,r.r,H.q(r,0)),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.c(P.a_(b,r,"index",null,t))},
$ij:1,
$imh:1}
P.eO.prototype={}
P.fh.prototype={}
P.fH.prototype={
iU:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bN(a0,a1,b.length)
u=$.nm()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.D(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kP(C.b.D(b,n))
j=H.kP(C.b.D(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.b.X("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.a6("")
g=r.a+=C.b.q(b,s,t)
r.a=g+H.cc(m)
s=n
continue}}throw H.c(P.a4("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.q(b,s,a1)
f=g.length
if(q>=0)P.lO(b,p,a1,q,o,f)
else{e=C.d.bg(f-1,4)+1
if(e===1)throw H.c(P.a4(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aV(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lO(b,p,a1,q,o,d)
else{e=C.d.bg(d,4)
if(e===1)throw H.c(P.a4(c,b,a1))
if(e>1)b=C.b.aV(b,a1,a1,e===2?"==":"=")}return b},
$ac2:function(){return[[P.b,P.l],P.h]}}
P.fI.prototype={
$abA:function(){return[[P.b,P.l],P.h]}}
P.c2.prototype={}
P.bA.prototype={}
P.h5.prototype={
$ac2:function(){return[P.h,[P.b,P.l]]}}
P.hl.prototype={
i:function(a){return this.a}}
P.hk.prototype={
fa:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.e(a,r)
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
if(r>b)q.a+=C.b.q(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nx(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abA:function(){return[P.h,P.h]}}
P.jq.prototype={
giC:function(){return C.N}}
P.js.prototype={
ca:function(a){var u,t,s=P.bN(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kz(u)
if(t.fm(a,0,s)!==s)t.dE(J.nt(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oP(0,t.b,u.length)))},
$abA:function(){return[P.h,[P.b,P.l]]}}
P.kz.prototype={
dE:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.e(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.e(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.e(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.e(s,r)
s[r]=128|a&63
return!1}},
fm:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.X(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.D(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dE(r,C.b.D(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.e(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.e(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.e(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.e(u,q)
u[q]=128|r&63}}return s}}
P.jr.prototype={
ca:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[P.l],"$ab")
u=P.ok(!1,a,0,null)
if(u!=null)return u
t=P.bN(0,null,J.aE(a))
s=P.mN(a,0,t)
if(s>0){r=P.d0(a,0,s)
if(s===t)return r
q=new P.a6(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.a6("")
n=new P.ky(!1,q)
n.c=o
n.iq(a,p,t)
if(n.e>0){H.A(P.a4("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.cc(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abA:function(){return[[P.b,P.l],P.h]}}
P.ky.prototype={
iq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.m(a,"$ib",[P.l],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.dq(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.as()
if((o&192)!==128){n=P.a4(h+C.d.bf(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.e(C.w,n)
if(u<=C.w[n]){n=P.a4("Overlong encoding of 0x"+C.d.bf(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a4("Character outside valid Unicode range: 0x"+C.d.bf(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.cc(u)
i.c=!1}for(n=p<c;n;){m=P.mN(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.d0(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.O()
if(o<0){j=P.a4("Negative UTF-8 code unit: -0x"+C.d.bf(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a4(h+C.d.bf(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.P.prototype={}
P.ay.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.ay&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.d.aS(u,30))&1073741823},
i:function(a){var u=this,t=P.nG(H.o3(u)),s=P.dH(H.o1(u)),r=P.dH(H.nY(u)),q=P.dH(H.nZ(u)),p=P.dH(H.o0(u)),o=P.dH(H.o2(u)),n=P.nH(H.o_(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.E.prototype={}
P.bC.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.bC&&this.a===b.a},
gG:function(a){return C.d.gG(this.a)},
i:function(a){var u,t,s,r=new P.h2(),q=this.a
if(q<0)return"-"+new P.bC(0-q).i(0)
u=r.$1(C.d.ae(q,6e7)%60)
t=r.$1(C.d.ae(q,1e6)%60)
s=new P.h1().$1(q%1e6)
return""+C.d.ae(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.h1.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:15}
P.h2.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:15}
P.bD.prototype={}
P.fA.prototype={
i:function(a){return"Assertion failed"}}
P.e6.prototype={
i:function(a){return"Throw of null."}}
P.aO.prototype={
gbK:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbJ:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbK()+o+u
if(!q.a)return t
s=q.gbJ()
r=P.dM(q.b)
return t+s+": "+r}}
P.cd.prototype={
gbK:function(){return"RangeError"},
gbJ:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.hn.prototype={
gbK:function(){return"RangeError"},
gbJ:function(){var u,t=H.ad(this.b)
if(typeof t!=="number")return t.O()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gn:function(a){return this.f}}
P.jj.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.jg.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cZ.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fO.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dM(u)+"."}}
P.ia.prototype={
i:function(a){return"Out of Memory"},
$ibD:1}
P.ei.prototype={
i:function(a){return"Stack Overflow"},
$ibD:1}
P.fV.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eG.prototype={
i:function(a){return"Exception: "+this.a}}
P.hf.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.q(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.D(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.X(f,q)
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
k=""}j=C.b.q(f,m,n)
return h+l+j+k+"\n"+C.b.u(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.i(g)+")"):h}}
P.bE.prototype={}
P.l.prototype={}
P.j.prototype={
bA:function(a,b){var u=H.al(this,"j",0)
return new H.d9(this,H.n(b,{func:1,ret:P.P,args:[u]}),[u])},
gn:function(a){var u,t=this.gT(this)
for(u=0;t.w();)++u
return u},
gaL:function(a){var u,t=this.gT(this)
if(!t.w())throw H.c(H.ho())
u=t.gH(t)
if(t.w())throw H.c(H.nL())
return u},
I:function(a,b){var u,t,s
P.me(b,"index")
for(u=this.gT(this),t=0;u.w();){s=u.gH(u)
if(b===t)return s;++t}throw H.c(P.a_(b,this,"index",null,t))},
i:function(a){return P.nK(this,"(",")")}}
P.b6.prototype={}
P.b.prototype={$ij:1}
P.y.prototype={}
P.K.prototype={
gG:function(a){return P.V.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.ae.prototype={}
P.V.prototype={constructor:P.V,$iV:1,
t:function(a,b){return this===b},
gG:function(a){return H.cT(this)},
i:function(a){return"Instance of '"+H.i(H.cU(this))+"'"},
toString:function(){return this.i(this)}}
P.av.prototype={}
P.h.prototype={$im7:1}
P.a6.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipZ:1}
P.jo.prototype={
$2:function(a,b){var u,t,s,r=P.h
H.m(a,"$iy",[r,r],"$ay")
H.M(b)
u=J.dr(b).e7(b,"=")
if(u===-1){if(b!=="")J.l1(a,P.lu(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.q(b,0,u)
s=C.b.ai(b,u+1)
r=this.a
J.l1(a,P.lu(t,0,t.length,r,!0),P.lu(s,0,s.length,r,!0))}return a},
$S:47}
P.jl.prototype={
$2:function(a,b){throw H.c(P.a4("Illegal IPv4 address, "+a,this.a,b))},
$S:46}
P.jm.prototype={
$2:function(a,b){throw H.c(P.a4("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.jn.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.ds(C.b.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.O()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:41}
P.ck.prototype={
gew:function(){return this.b},
gcm:function(a){var u=this.c
if(u==null)return""
if(C.b.a9(u,"["))return C.b.q(u,1,u.length-1)
return u},
gbu:function(a){var u=this.d
if(u==null)return P.mD(this.a)
return u},
gcC:function(a){var u=this.f
return u==null?"":u},
ge2:function(){var u=this.r
return u==null?"":u},
ei:function(a,b){var u,t,s,r,q,p,o,n,m=this
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
if(o&&!C.b.a9(p,"/"))p="/"+p
n=P.ls(null,0,0,b)
return new P.ck(u,s,q,r,p,n,m.r)},
gcD:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.h
s.shx(new P.es(P.ms(u==null?"":u),[t,t]))}return s.Q},
ge3:function(){return this.c!=null},
ge6:function(){return this.f!=null},
ge4:function(){return this.r!=null},
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
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.S(b).$ilm)if(s.a==b.gbB())if(s.c!=null===b.ge3())if(s.b==b.gew())if(s.gcm(s)==b.gcm(b))if(s.gbu(s)==b.gbu(b))if(s.e===b.gef(b)){u=s.f
t=u==null
if(!t===b.ge6()){if(t)u=""
if(u===b.gcC(b)){u=s.r
t=u==null
if(!t===b.ge4()){if(t)u=""
u=u===b.ge2()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gG:function(a){var u=this.z
return u==null?this.z=C.b.gG(this.i(0)):u},
shx:function(a){var u=P.h
this.Q=H.m(a,"$iy",[u,u],"$ay")},
$ilm:1,
gbB:function(){return this.a},
gef:function(a){return this.e}}
P.ku.prototype={
$1:function(a){throw H.c(P.a4("Invalid port",this.a,this.b+1))},
$S:19}
P.kv.prototype={
$1:function(a){return P.fi(C.X,a,C.h,!1)},
$S:20}
P.kx.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.fi(C.i,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.fi(C.i,b,C.h,!0))}},
$S:21}
P.kw.prototype={
$2:function(a,b){var u,t
H.M(a)
if(b==null||typeof b==="string")this.a.$2(a,H.M(b))
else for(u=J.bw(H.mZ(b,"$ij")),t=this.a;u.w();)t.$2(a,H.M(u.gH(u)))},
$S:40}
P.jk.prototype={
gev:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.e(o,0)
u=q.a
o=o[0]+1
t=C.b.bq(u,"?",o)
s=u.length
if(t>=0){r=P.dm(u,t+1,s,C.m,!1)
s=t}else r=p
return q.c=new P.jS("data",p,p,p,P.dm(u,o,s,C.A,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.e(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kD.prototype={
$1:function(a){return new Uint8Array(96)},
$S:39}
P.kC.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.nu(u,0,96,b)
return u},
$S:33}
P.kE.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.D(b,s)^96
if(r>=t)return H.e(a,r)
a[r]=c}}}
P.kF.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.D(b,0),t=C.b.D(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.e(a,r)
a[r]=c}}}
P.ki.prototype={
ge3:function(){return this.c>0},
ge5:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.F()
t=this.e
if(typeof t!=="number")return H.B(t)
t=u+1<t
u=t}else u=!1
return u},
ge6:function(){var u=this.f
if(typeof u!=="number")return u.O()
return u<this.r},
ge4:function(){return this.r<this.a.length},
gdf:function(){return this.b===4&&C.b.a9(this.a,"http")},
gdg:function(){return this.b===5&&C.b.a9(this.a,"https")},
gbB:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdf())q=t.x="http"
else if(t.gdg()){t.x="https"
q="https"}else if(q===4&&C.b.a9(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a9(t.a,r)){t.x=r
q=r}else{q=C.b.q(t.a,0,q)
t.x=q}return q},
gew:function(){var u=this.c,t=this.b+3
return u>t?C.b.q(this.a,t,u-1):""},
gcm:function(a){var u=this.c
return u>0?C.b.q(this.a,u,this.d):""},
gbu:function(a){var u,t=this
if(t.ge5()){u=t.d
if(typeof u!=="number")return u.F()
return P.ds(C.b.q(t.a,u+1,t.e),null,null)}if(t.gdf())return 80
if(t.gdg())return 443
return 0},
gef:function(a){return C.b.q(this.a,this.e,this.f)},
gcC:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.O()
return u<t?C.b.q(this.a,u+1,t):""},
ge2:function(){var u=this.r,t=this.a
return u<t.length?C.b.ai(t,u+1):""},
gcD:function(){var u=this,t=u.f
if(typeof t!=="number")return t.O()
if(t>=u.r)return C.Y
t=P.h
return new P.es(P.ms(u.gcC(u)),[t,t])},
ei:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.m(b,"$iy",[P.h,null],"$ay")
u=k.gbB()
t=u==="file"
s=k.c
r=s>0?C.b.q(k.a,k.b+3,s):""
q=k.ge5()?k.gbu(k):j
s=k.c
if(s>0)p=C.b.q(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.q(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a9(o,"/"))o="/"+o
m=P.ls(j,0,0,b)
n=k.r
l=n<s.length?C.b.ai(s,n+1):j
return new P.ck(u,r,p,q,o,m,l)},
gG:function(a){var u=this.y
return u==null?this.y=C.b.gG(this.a):u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.S(b).$ilm&&this.a===b.i(0)},
i:function(a){return this.a},
$ilm:1}
P.jS.prototype={}
W.u.prototype={}
W.fy.prototype={
gn:function(a){return a.length}}
W.dy.prototype={
i:function(a){return String(a)},
$idy:1}
W.fz.prototype={
i:function(a){return String(a)}}
W.cx.prototype={$icx:1}
W.bZ.prototype={$ibZ:1}
W.bx.prototype={$ibx:1}
W.c1.prototype={
cN:function(a,b,c){if(c!=null)return a.getContext(b,P.pm(c))
return a.getContext(b)},
ey:function(a,b){return this.cN(a,b,null)},
$ic1:1}
W.cA.prototype={$icA:1}
W.by.prototype={
gn:function(a){return a.length}}
W.cC.prototype={$icC:1}
W.fR.prototype={
gn:function(a){return a.length}}
W.W.prototype={$iW:1}
W.cD.prototype={
gn:function(a){return a.length}}
W.fS.prototype={}
W.b4.prototype={}
W.b5.prototype={}
W.fT.prototype={
gn:function(a){return a.length}}
W.fU.prototype={
gn:function(a){return a.length}}
W.fX.prototype={
gn:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.fZ.prototype={
i:function(a){return String(a)}}
W.dJ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.m(c,"$iaj",[P.ae],"$aaj")
throw H.c(P.I("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[[P.aj,P.ae]]},
$aw:function(){return[[P.aj,P.ae]]},
$ij:1,
$aj:function(){return[[P.aj,P.ae]]},
$ib:1,
$ab:function(){return[[P.aj,P.ae]]},
$aH:function(){return[[P.aj,P.ae]]}}
W.dK.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gar(a))+" x "+H.i(this.gap(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.S(b)
if(!u.$iaj)return!1
return a.left===u.gbs(b)&&a.top===u.gbx(b)&&this.gar(a)===u.gar(b)&&this.gap(a)===u.gap(b)},
gG:function(a){return W.mB(C.e.gG(a.left),C.e.gG(a.top),C.e.gG(this.gar(a)),C.e.gG(this.gap(a)))},
gdK:function(a){return a.bottom},
gap:function(a){return a.height},
gbs:function(a){return a.left},
gcH:function(a){return a.right},
gbx:function(a){return a.top},
gar:function(a){return a.width},
$iaj:1,
$aaj:function(){return[P.ae]}}
W.h_.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.M(c)
throw H.c(P.I("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[P.h]},
$aw:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aH:function(){return[P.h]}}
W.h0.prototype={
gn:function(a){return a.length}}
W.jQ.prototype={
gn:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.f(u[b],"$iN")},
k:function(a,b,c){var u
H.f(c,"$iN")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gT:function(a){var u=this.jj(this)
return new J.as(u,u.length,[H.q(u,0)])},
$aw:function(){return[W.N]},
$aj:function(){return[W.N]},
$ab:function(){return[W.N]}}
W.N.prototype={
gik:function(a){return new W.jT(a)},
gc9:function(a){return new W.jQ(a,a.children)},
gdN:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.O()
if(s<0)s=-s*0
if(typeof r!=="number")return r.O()
if(r<0)r=-r*0
return new P.aj(u,t,s,r,[P.ae])},
i:function(a){return a.localName},
ao:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lW
if(u==null){u=H.d([],[W.aB])
t=new W.e5(u)
C.a.h(u,W.mA(null))
C.a.h(u,W.mC())
$.lW=t
d=t}else d=u
u=$.lV
if(u==null){u=new W.fj(d)
$.lV=u
c=u}else{u.a=d
c=u}}if($.bm==null){u=document
t=u.implementation.createHTMLDocument("")
$.bm=t
$.l8=t.createRange()
t=$.bm.createElement("base")
H.f(t,"$icx")
t.href=u.baseURI
$.bm.head.appendChild(t)}u=$.bm
if(u.body==null){t=u.createElement("body")
u.body=H.f(t,"$ibx")}u=$.bm
if(!!this.$ibx)s=u.body
else{s=u.createElement(a.tagName)
$.bm.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.U(C.V,a.tagName)){$.l8.selectNodeContents(s)
r=$.l8.createContextualFragment(b)}else{s.innerHTML=b
r=$.bm.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bm.body
if(s==null?u!=null:s!==u)J.lM(s)
c.cO(r)
document.adoptNode(r)
return r},
is:function(a,b,c){return this.ao(a,b,c,null)},
eA:function(a,b){a.textContent=null
a.appendChild(this.ao(a,b,null,null))},
$iN:1,
gel:function(a){return a.tagName}}
W.h4.prototype={
$1:function(a){return!!J.S(H.f(a,"$iG")).$iN},
$S:25}
W.o.prototype={$io:1}
W.k.prototype={
i9:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.f0(a,b,c,!1)},
f0:function(a,b,c,d){return a.addEventListener(b,H.cp(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ik:1}
W.aG.prototype={$iaG:1}
W.cF.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaG")
throw H.c(P.I("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aG]},
$aw:function(){return[W.aG]},
$ij:1,
$aj:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$icF:1,
$aH:function(){return[W.aG]}}
W.ha.prototype={
gn:function(a){return a.length}}
W.he.prototype={
gn:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.hj.prototype={
gn:function(a){return a.length}}
W.c5.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.c(P.I("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.G]},
$aw:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ic5:1,
$aH:function(){return[W.G]}}
W.bn.prototype={$ibn:1,
gdQ:function(a){return a.data}}
W.c6.prototype={$ic6:1}
W.b8.prototype={$ib8:1}
W.dX.prototype={
i:function(a){return String(a)},
$idX:1}
W.hT.prototype={
gn:function(a){return a.length}}
W.cM.prototype={$icM:1}
W.hU.prototype={
j:function(a,b){return P.bs(a.get(H.M(b)))},
A:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bs(t.value[1]))}},
gaa:function(a){var u=H.d([],[P.h])
this.A(a,new W.hV(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.I("Not supported"))},
$aag:function(){return[P.h,null]},
$iy:1,
$ay:function(){return[P.h,null]}}
W.hV.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hW.prototype={
j:function(a,b){return P.bs(a.get(H.M(b)))},
A:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bs(t.value[1]))}},
gaa:function(a){var u=H.d([],[P.h])
this.A(a,new W.hX(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.I("Not supported"))},
$aag:function(){return[P.h,null]},
$iy:1,
$ay:function(){return[P.h,null]}}
W.hX.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.aR.prototype={$iaR:1}
W.hY.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaR")
throw H.c(P.I("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aR]},
$aw:function(){return[W.aR]},
$ij:1,
$aj:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aH:function(){return[W.aR]}}
W.a5.prototype={$ia5:1}
W.ar.prototype={
gaL:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.mj("No elements"))
if(t>1)throw H.c(P.mj("More than one element"))
return u.firstChild},
af:function(a,b){var u,t,s,r
H.m(b,"$ij",[W.G],"$aj")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
k:function(a,b,c){var u,t
H.f(c,"$iG")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
u.replaceChild(c,t[b])},
gT:function(a){var u=this.a.childNodes
return new W.dO(u,u.length,[H.bV(C.Z,u,"H",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$aw:function(){return[W.G]},
$aj:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
j9:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
jc:function(a,b){var u,t
try{u=a.parentNode
J.nr(u,b,a)}catch(t){H.am(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eF(a):u},
ie:function(a,b){return a.appendChild(H.f(b,"$iG"))},
hE:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.cR.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.c(P.I("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.G]},
$aw:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aH:function(){return[W.G]}}
W.aS.prototype={$iaS:1,
gn:function(a){return a.length}}
W.id.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaS")
throw H.c(P.I("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aS]},
$aw:function(){return[W.aS]},
$ij:1,
$aj:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aH:function(){return[W.aS]}}
W.im.prototype={
j:function(a,b){return P.bs(a.get(H.M(b)))},
A:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bs(t.value[1]))}},
gaa:function(a){var u=H.d([],[P.h])
this.A(a,new W.io(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.I("Not supported"))},
$aag:function(){return[P.h,null]},
$iy:1,
$ay:function(){return[P.h,null]}}
W.io.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.iq.prototype={
gn:function(a){return a.length}}
W.aU.prototype={$iaU:1}
W.iA.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaU")
throw H.c(P.I("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aU]},
$aw:function(){return[W.aU]},
$ij:1,
$aj:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aH:function(){return[W.aU]}}
W.aV.prototype={$iaV:1}
W.iB.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaV")
throw H.c(P.I("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aV]},
$aw:function(){return[W.aV]},
$ij:1,
$aj:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aH:function(){return[W.aV]}}
W.aW.prototype={$iaW:1,
gn:function(a){return a.length}}
W.iE.prototype={
j:function(a,b){return a.getItem(H.M(b))},
k:function(a,b,c){a.setItem(b,c)},
A:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaa:function(a){var u=H.d([],[P.h])
this.A(a,new W.iF(u))
return u},
gn:function(a){return a.length},
$aag:function(){return[P.h,P.h]},
$iy:1,
$ay:function(){return[P.h,P.h]}}
W.iF.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:21}
W.aH.prototype={$iaH:1}
W.bd.prototype={$ibd:1}
W.ej.prototype={
ao:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bE(a,b,c,d)
u=W.nI("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ar(t).af(0,new W.ar(u))
return t}}
W.iL.prototype={
ao:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bE(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ao(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaL(u)
s.toString
u=new W.ar(s)
r=u.gaL(u)
t.toString
r.toString
new W.ar(t).af(0,new W.ar(r))
return t}}
W.iM.prototype={
ao:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bE(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ao(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaL(u)
t.toString
s.toString
new W.ar(t).af(0,new W.ar(s))
return t}}
W.d2.prototype={$id2:1}
W.aY.prototype={$iaY:1}
W.aI.prototype={$iaI:1}
W.iO.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaI")
throw H.c(P.I("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aI]},
$aw:function(){return[W.aI]},
$ij:1,
$aj:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$aH:function(){return[W.aI]}}
W.iP.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaY")
throw H.c(P.I("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aY]},
$aw:function(){return[W.aY]},
$ij:1,
$aj:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aH:function(){return[W.aY]}}
W.iZ.prototype={
gn:function(a){return a.length}}
W.aZ.prototype={$iaZ:1}
W.b_.prototype={$ib_:1}
W.j2.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaZ")
throw H.c(P.I("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aZ]},
$aw:function(){return[W.aZ]},
$ij:1,
$aj:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aH:function(){return[W.aZ]}}
W.j3.prototype={
gn:function(a){return a.length}}
W.bQ.prototype={}
W.jp.prototype={
i:function(a){return String(a)}}
W.jI.prototype={
gn:function(a){return a.length}}
W.bh.prototype={
giv:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.I("deltaY is not supported"))},
giu:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.I("deltaX is not supported"))},
$ibh:1}
W.da.prototype={
hF:function(a,b){return a.requestAnimationFrame(H.cp(H.n(b,{func:1,ret:-1,args:[P.ae]}),1))},
fg:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.db.prototype={$idb:1}
W.jR.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iW")
throw H.c(P.I("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.W]},
$aw:function(){return[W.W]},
$ij:1,
$aj:function(){return[W.W]},
$ib:1,
$ab:function(){return[W.W]},
$aH:function(){return[W.W]}}
W.eB.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.S(b)
if(!u.$iaj)return!1
return a.left===u.gbs(b)&&a.top===u.gbx(b)&&a.width===u.gar(b)&&a.height===u.gap(b)},
gG:function(a){return W.mB(C.e.gG(a.left),C.e.gG(a.top),C.e.gG(a.width),C.e.gG(a.height))},
gap:function(a){return a.height},
gar:function(a){return a.width}}
W.k5.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaQ")
throw H.c(P.I("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aQ]},
$aw:function(){return[W.aQ]},
$ij:1,
$aj:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aH:function(){return[W.aQ]}}
W.eT.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.c(P.I("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.G]},
$aw:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aH:function(){return[W.G]}}
W.kj.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaW")
throw H.c(P.I("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aW]},
$aw:function(){return[W.aW]},
$ij:1,
$aj:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aH:function(){return[W.aW]}}
W.kn.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaH")
throw H.c(P.I("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aH]},
$aw:function(){return[W.aH]},
$ij:1,
$aj:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aH:function(){return[W.aH]}}
W.jP.prototype={
A:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.gaa(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.x)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gaa:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.e(r,t)
s=H.f(r[t],"$idb")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aag:function(){return[P.h,P.h]},
$ay:function(){return[P.h,P.h]}}
W.jT.prototype={
j:function(a,b){return this.a.getAttribute(H.M(b))},
k:function(a,b,c){this.a.setAttribute(b,c)},
gn:function(a){return this.gaa(this).length}}
W.jU.prototype={}
W.lp.prototype={}
W.jV.prototype={}
W.jW.prototype={
$1:function(a){return this.a.$1(H.f(a,"$io"))},
$S:38}
W.bT.prototype={
eQ:function(a){var u
if($.dd.giN($.dd)){for(u=0;u<262;++u)$.dd.k(0,C.U[u],W.pw())
for(u=0;u<12;++u)$.dd.k(0,C.q[u],W.px())}},
aT:function(a){return $.nn().U(0,W.cE(a))},
ax:function(a,b,c){var u=$.dd.j(0,H.i(W.cE(a))+"::"+b)
if(u==null)u=$.dd.j(0,"*::"+b)
if(u==null)return!1
return H.lz(u.$4(a,b,c,this))},
$iaB:1}
W.H.prototype={
gT:function(a){return new W.dO(a,this.gn(a),[H.bV(this,a,"H",0)])}}
W.e5.prototype={
aT:function(a){return C.a.dI(this.a,new W.i5(a))},
ax:function(a,b,c){return C.a.dI(this.a,new W.i4(a,b,c))},
$iaB:1}
W.i5.prototype={
$1:function(a){return H.f(a,"$iaB").aT(this.a)},
$S:27}
W.i4.prototype={
$1:function(a){return H.f(a,"$iaB").ax(this.a,this.b,this.c)},
$S:27}
W.f0.prototype={
eV:function(a,b,c,d){var u,t,s
this.a.af(0,c)
u=b.bA(0,new W.kg())
t=b.bA(0,new W.kh())
this.b.af(0,u)
s=this.c
s.af(0,C.x)
s.af(0,t)},
aT:function(a){return this.a.U(0,W.cE(a))},
ax:function(a,b,c){var u=this,t=W.cE(a),s=u.c
if(s.U(0,H.i(t)+"::"+b))return u.d.ic(c)
else if(s.U(0,"*::"+b))return u.d.ic(c)
else{s=u.b
if(s.U(0,H.i(t)+"::"+b))return!0
else if(s.U(0,"*::"+b))return!0
else if(s.U(0,H.i(t)+"::*"))return!0
else if(s.U(0,"*::*"))return!0}return!1},
$iaB:1}
W.kg.prototype={
$1:function(a){return!C.a.U(C.q,H.M(a))},
$S:28}
W.kh.prototype={
$1:function(a){return C.a.U(C.q,H.M(a))},
$S:28}
W.kp.prototype={
ax:function(a,b,c){if(this.eJ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.U(0,b)
return!1}}
W.kq.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.M(a))},
$S:20}
W.ko.prototype={
aT:function(a){var u=J.S(a)
if(!!u.$icW)return!1
u=!!u.$ip
if(u&&W.cE(a)==="foreignObject")return!1
if(u)return!0
return!1},
ax:function(a,b,c){if(b==="is"||C.b.a9(b,"on"))return!1
return this.aT(a)},
$iaB:1}
W.dO.prototype={
w:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sde(J.dw(u.a,t))
u.c=t
return!0}u.sde(null)
u.c=s
return!1},
gH:function(a){return this.d},
sde:function(a){this.d=H.D(a,H.q(this,0))},
$ib6:1}
W.aB.prototype={}
W.ke.prototype={$iqb:1}
W.fj.prototype={
cO:function(a){new W.kA(this).$2(a,null)},
b4:function(a,b){if(b==null)J.lM(a)
else b.removeChild(a)},
hJ:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nv(a)
n=o.a.getAttribute("is")
H.f(a,"$iN")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.F(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.am(r)}t="element unprintable"
try{t=J.aN(a)}catch(r){H.am(r)}try{s=W.cE(a)
this.hI(H.f(a,"$iN"),b,p,t,s,H.f(o,"$iy"),H.M(n))}catch(r){if(H.am(r) instanceof P.aO)throw r
else{this.b4(a,b)
window
q="Removing corrupted element "+H.i(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hI:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b4(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aT(a)){o.b4(a,b)
window
u="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.ax(a,"is",g)){o.b4(a,b)
window
u="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gaa(f)
t=H.d(u.slice(0),[H.q(u,0)])
for(s=f.gaa(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.e(t,s)
r=t[s]
q=o.a
p=J.ny(r)
H.M(r)
if(!q.ax(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.i(e)+" "+r+'="'+H.i(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.S(a).$id2)o.cO(a.content)},
$ipX:1}
W.kA.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hJ(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b4(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.am(s)
r=H.f(u,"$iG")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.f(t,"$iG")}},
$S:37}
W.eA.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.di.prototype={}
W.dj.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.f6.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.dk.prototype={}
W.dl.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
P.kk.prototype={
e1:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cL:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.S(a)
if(!!u.$iay)return new Date(a.a)
if(!!u.$io7)throw H.c(P.jh("structured clone of RegExp"))
if(!!u.$iaG)return a
if(!!u.$ibZ)return a
if(!!u.$icF)return a
if(!!u.$ibn)return a
if(!!u.$icO||!!u.$ibL||!!u.$icM)return a
if(!!u.$iy){t=q.e1(a)
s=q.b
if(t>=s.length)return H.e(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.A(a,new P.km(p,q))
return p.a}if(!!u.$ib){t=q.e1(a)
p=q.b
if(t>=p.length)return H.e(p,t)
r=p[t]
if(r!=null)return r
return q.ir(a,t)}throw H.c(P.jh("structured clone of other type"))},
ir:function(a,b){var u,t=J.dq(a),s=t.gn(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.cL(t.j(a,u)))
return r}}
P.km.prototype={
$2:function(a,b){this.a.a[a]=this.b.cL(b)},
$S:6}
P.fg.prototype={$ibn:1,
gdQ:function(a){return this.a}}
P.kL.prototype={
$2:function(a,b){this.a[a]=b},
$S:6}
P.kl.prototype={}
P.hb.prototype={
gb2:function(){var u=this.b,t=H.al(u,"w",0),s=W.N
return new H.hE(new H.d9(u,H.n(new P.hc(),{func:1,ret:P.P,args:[t]}),[t]),H.n(new P.hd(),{func:1,ret:s,args:[t]}),[t,s])},
A:function(a,b){H.n(b,{func:1,ret:-1,args:[W.N]})
C.a.A(P.lg(this.gb2(),!1,W.N),b)},
k:function(a,b,c){var u
H.f(c,"$iN")
u=this.gb2()
J.nw(u.b.$1(J.fw(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aE(this.gb2().a)},
j:function(a,b){var u=this.gb2()
return u.b.$1(J.fw(u.a,b))},
gT:function(a){var u=P.lg(this.gb2(),!1,W.N)
return new J.as(u,u.length,[H.q(u,0)])},
$aw:function(){return[W.N]},
$aj:function(){return[W.N]},
$ab:function(){return[W.N]}}
P.hc.prototype={
$1:function(a){return!!J.S(H.f(a,"$iG")).$iN},
$S:25}
P.hd.prototype={
$1:function(a){return H.r(H.f(a,"$iG"),"$iN")},
$S:35}
P.k9.prototype={
gcH:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.B(t)
return H.D(u+t,H.q(this,0))},
gdK:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.B(t)
return H.D(u+t,H.q(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.i(u.a)+", "+H.i(u.b)+") "+H.i(u.c)+" x "+H.i(u.d)},
t:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.S(b)
if(!!u.$iaj){t=p.a
if(t==u.gbs(b)){s=p.b
if(s==u.gbx(b)){r=p.c
if(typeof t!=="number")return t.F()
if(typeof r!=="number")return H.B(r)
q=H.q(p,0)
if(H.D(t+r,q)===u.gcH(b)){t=p.d
if(typeof s!=="number")return s.F()
if(typeof t!=="number")return H.B(t)
u=H.D(s+t,q)===u.gdK(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t=this,s=t.a,r=J.dx(s),q=t.b,p=J.dx(q),o=t.c
if(typeof s!=="number")return s.F()
if(typeof o!=="number")return H.B(o)
u=H.q(t,0)
o=C.d.gG(H.D(s+o,u))
s=t.d
if(typeof q!=="number")return q.F()
if(typeof s!=="number")return H.B(s)
u=C.d.gG(H.D(q+s,u))
return P.ox(P.k7(P.k7(P.k7(P.k7(0,r),p),o),u))}}
P.aj.prototype={
gbs:function(a){return this.a},
gbx:function(a){return this.b},
gar:function(a){return this.c},
gap:function(a){return this.d}}
P.b9.prototype={$ib9:1}
P.ht.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib9")
throw H.c(P.I("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$aw:function(){return[P.b9]},
$ij:1,
$aj:function(){return[P.b9]},
$ib:1,
$ab:function(){return[P.b9]},
$aH:function(){return[P.b9]}}
P.bc.prototype={$ibc:1}
P.i8.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibc")
throw H.c(P.I("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bc]},
$ij:1,
$aj:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$aH:function(){return[P.bc]}}
P.ig.prototype={
gn:function(a){return a.length}}
P.cW.prototype={$icW:1}
P.iK.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.M(c)
throw H.c(P.I("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$aw:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aH:function(){return[P.h]}}
P.p.prototype={
gc9:function(a){return new P.hb(a,new W.ar(a))},
ao:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aB])
C.a.h(p,W.mA(null))
C.a.h(p,W.mC())
C.a.h(p,new W.ko())
c=new W.fj(new W.e5(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).is(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ar(s)
q=p.gaL(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.bf.prototype={$ibf:1}
P.j4.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibf")
throw H.c(P.I("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bf]},
$ij:1,
$aj:function(){return[P.bf]},
$ib:1,
$ab:function(){return[P.bf]},
$aH:function(){return[P.bf]}}
P.eL.prototype={}
P.eM.prototype={}
P.eW.prototype={}
P.eX.prototype={}
P.f7.prototype={}
P.f8.prototype={}
P.fe.prototype={}
P.ff.prototype={}
P.T.prototype={$ij:1,
$aj:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]},
$ioh:1}
P.fC.prototype={
gn:function(a){return a.length}}
P.fD.prototype={
j:function(a,b){return P.bs(a.get(H.M(b)))},
A:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bs(t.value[1]))}},
gaa:function(a){var u=H.d([],[P.h])
this.A(a,new P.fE(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.I("Not supported"))},
$aag:function(){return[P.h,null]},
$iy:1,
$ay:function(){return[P.h,null]}}
P.fE.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
P.fF.prototype={
gn:function(a){return a.length}}
P.bY.prototype={}
P.i9.prototype={
gn:function(a){return a.length}}
P.ez.prototype={}
P.dB.prototype={$idB:1}
P.dP.prototype={$idP:1}
P.e9.prototype={$ie9:1}
P.eb.prototype={$ieb:1}
P.ce.prototype={
en:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.S(g)
if(!!u.$ibn&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.pn(g))
return}if(!!u.$ic6&&h==null&&t&&!0){this.hY(a,b,c,d,e,f,g)
return}throw H.c(P.dz("Incorrect number or type of arguments"))},
em:function(a,b,c,d,e,f,g){return this.en(a,b,c,d,e,f,g,null,null,null)},
hY:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a5:function(a,b,c){return a.uniform1f(b,c)},
bz:function(a,b,c){return a.uniform1i(b,c)},
Y:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
er:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
es:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eu:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ice:1}
P.ec.prototype={$iec:1}
P.ek.prototype={$iek:1}
P.eq.prototype={$ieq:1}
P.iC.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return P.bs(a.item(b))},
k:function(a,b,c){H.f(c,"$iy")
throw H.c(P.I("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$aw:function(){return[[P.y,,,]]},
$ij:1,
$aj:function(){return[[P.y,,,]]},
$ib:1,
$ab:function(){return[[P.y,,,]]},
$aH:function(){return[[P.y,,,]]}}
P.f3.prototype={}
P.f4.prototype={}
O.a2.prototype={
bi:function(a){var u=this
u.sfs(H.d([],[a]))
u.sdl(null)
u.sdh(null)
u.sdm(null)},
cP:function(a,b,c){var u=this,t=H.al(u,"a2",0)
H.n(b,{func:1,ret:P.P,args:[[P.j,t]]})
t={func:1,ret:-1,args:[P.l,[P.j,t]]}
H.n(a,t)
H.n(c,t)
u.sdl(b)
u.sdh(a)
u.sdm(c)},
aY:function(a,b){return this.cP(a,null,b)},
dk:function(a){var u
H.m(a,"$ij",[H.al(this,"a2",0)],"$aj")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cU:function(a,b){var u
H.m(b,"$ij",[H.al(this,"a2",0)],"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.as(u,u.length,[H.q(u,0)])},
I:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.al(s,"a2",0)
H.D(b,r)
r=[r]
if(H.F(s.dk(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.cU(t,H.d([b],r))}},
af:function(a,b){var u,t,s=this
H.m(b,"$ij",[H.al(s,"a2",0)],"$aj")
if(H.F(s.dk(b))){u=s.a
t=u.length
C.a.af(u,b)
s.cU(t,b)}},
sfs:function(a){this.a=H.m(a,"$ib",[H.al(this,"a2",0)],"$ab")},
sdl:function(a){this.b=H.n(a,{func:1,ret:P.P,args:[[P.j,H.al(this,"a2",0)]]})},
sdh:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.l,[P.j,H.al(this,"a2",0)]]})},
sdm:function(a){H.n(a,{func:1,ret:-1,args:[P.l,[P.j,H.al(this,"a2",0)]]})},
$ij:1}
O.cL.prototype={
gn:function(a){return this.a.length},
gp:function(){var u=this.b
return u==null?this.b=D.Q():u},
aM:function(){var u=this.b
if(u!=null)u.C(null)},
ga7:function(a){var u=this.a
if(u.length>0)return C.a.gay(u)
else return V.bK()},
bw:function(a){var u=this.a
if(a==null)C.a.h(u,V.bK())
else C.a.h(u,a)
this.aM()},
aH:function(){var u=this.a
if(u.length>0){u.pop()
this.aM()}},
sbP:function(a){this.a=H.m(a,"$ib",[V.at],"$ab")}}
E.fJ.prototype={}
E.aq.prototype={
sbC:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gp().R(0,s.gec())
u=s.c
if(u!=null)u.gp().h(0,s.gec())
t=new D.J("shape",r,s.c,[F.ed])
t.b=!0
s.bt(t)}},
ah:function(a,b){var u
for(u=this.y.a,u=new J.as(u,u.length,[H.q(u,0)]);u.w();)u.d.ah(0,b)},
ag:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.ga7(s))
s.aM()
a.cB(t.f)
s=a.dy
u=(s&&C.a).gay(s)
if(u!=null&&t.d!=null)u.cG(a,t)
for(s=t.y.a,s=new J.as(s,s.length,[H.q(s,0)]);s.w();)s.d.ag(a)
a.cA()
a.dx.aH()},
bt:function(a){var u=this.z
if(u!=null)u.C(a)},
al:function(){return this.bt(null)},
ed:function(a){H.f(a,"$iz")
this.e=null
this.bt(a)},
j_:function(){return this.ed(null)},
eb:function(a){this.bt(H.f(a,"$iz"))},
iX:function(){return this.eb(null)},
iW:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ij",[E.aq],"$aj")
for(u=b.length,t=this.gea(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c3()
o.san(null)
o.saQ(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.san(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.al()},
iZ:function(a,b){var u,t
H.m(b,"$ij",[E.aq],"$aj")
for(u=b.gT(b),t=this.gea();u.w();)u.gH(u).gp().R(0,t)
this.al()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seP:function(a,b){this.y=H.m(b,"$ia2",[E.aq],"$aa2")},
$ic9:1}
E.ii.prototype={
eM:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ay(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cL()
t=[V.at]
u.sbP(H.d([],t))
u.b=null
u.gp().h(0,new E.ij(s))
s.cy=u
u=new O.cL()
u.sbP(H.d([],t))
u.b=null
u.gp().h(0,new E.ik(s))
s.db=u
u=new O.cL()
u.sbP(H.d([],t))
u.b=null
u.gp().h(0,new E.il(s))
s.dx=u
s.shX(H.d([],[O.bO]))
u=s.dy;(u&&C.a).h(u,null)
s.shS(new H.a3([P.h,A.cX]))},
gj8:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga7(s)
u=t.db
u=t.z=s.u(0,u.ga7(u))
s=u}return s},
geg:function(){var u,t=this,s=t.ch
if(s==null){s=t.gj8()
u=t.dx
u=t.ch=s.u(0,u.ga7(u))
s=u}return s},
cB:function(a){var u=this.dy,t=a==null?(u&&C.a).gay(u):a;(u&&C.a).h(u,t)},
cA:function(){var u=this.dy
if(u.length>1)u.pop()},
c3:function(a){var u=a.b
if(u.length===0)throw H.c(P.C("May not cache a shader with no name."))
if(this.fr.bo(0,u))throw H.c(P.C('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)},
shX:function(a){this.dy=H.m(a,"$ib",[O.bO],"$ab")},
shS:function(a){this.fr=H.m(a,"$iy",[P.h,A.cX],"$ay")}}
E.ij.prototype={
$1:function(a){var u
H.f(a,"$iz")
u=this.a
u.ch=u.z=null},
$S:8}
E.ik.prototype={
$1:function(a){var u
H.f(a,"$iz")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:8}
E.il.prototype={
$1:function(a){var u
H.f(a,"$iz")
u=this.a
u.cx=u.ch=null},
$S:8}
E.em.prototype={
cX:function(a){H.f(a,"$iz")
this.ej()},
cW:function(){return this.cX(null)},
giI:function(){var u,t=this,s=Date.now(),r=C.d.ae(P.lU(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ay(s,!1)
return u/r},
dr:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.u()
if(typeof r!=="number")return H.B(r)
u=C.e.cl(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.u()
t=C.e.cl(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.mm(C.o,s.gjd())}},
ej:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iY(this),{func:1,ret:-1,args:[P.ae]})
C.E.fg(u)
C.E.hF(u,W.mQ(t,P.ae))}},
jb:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dr()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ay(r,!1)
s.y=P.lU(r-s.r.a).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aM()
r=s.db
C.a.sn(r.a,0)
r.aM()
r=s.dx
C.a.sn(r.a,0)
r.aM()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.ag(p.e)}s=p.z
if(s!=null)s.C(null)}catch(q){u=H.am(q)
t=H.ct(q)
P.lG("Error: "+H.i(u))
P.lG("Stack: "+H.i(t))
throw H.c(u)}}}
E.iY.prototype={
$1:function(a){var u
H.n0(a)
u=this.a
if(u.ch){u.ch=!1
u.jb()}},
$S:32}
Z.ex.prototype={$ipR:1}
Z.dC.prototype={
a0:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.am(s)
t=P.C('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.d8.prototype={$ipS:1}
Z.c_.prototype={
au:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a0:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a0(a)},
am:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ag:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aN(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sfn:function(a){this.b=H.m(a,"$ib",[Z.c7],"$ab")},
$iq_:1}
Z.c7.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.i(H.cU(this.c))+"'")+"]"}}
Z.br.prototype={
gcQ:function(a){var u=this.a,t=(u&$.aD().a)!==0?3:0
if((u&$.bv().a)!==0)t+=3
if((u&$.bu().a)!==0)t+=3
if((u&$.bk().a)!==0)t+=2
if((u&$.bX().a)!==0)t+=3
if((u&$.du().a)!==0)t+=3
if((u&$.dv().a)!==0)t+=4
if((u&$.cw().a)!==0)++t
return(u&$.bt().a)!==0?t+4:t},
ig:function(a){var u,t=$.aD(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bu()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bX()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.du()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bt()
if((s&t.a)!==0)if(u===a)return t
return $.nl()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.br))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.h]),t=this.a
if((t&$.aD().a)!==0)C.a.h(u,"Pos")
if((t&$.bv().a)!==0)C.a.h(u,"Norm")
if((t&$.bu().a)!==0)C.a.h(u,"Binm")
if((t&$.bk().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bX().a)!==0)C.a.h(u,"TxtCube")
if((t&$.du().a)!==0)C.a.h(u,"Clr3")
if((t&$.dv().a)!==0)C.a.h(u,"Clr4")
if((t&$.cw().a)!==0)C.a.h(u,"Weight")
if((t&$.bt().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fM.prototype={}
D.c3.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.z]}
H.n(b,u)
if(this.a==null)this.san(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
R:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.z]})
u=s.a
u=u==null?null:C.a.U(u,b)
if(u===!0){u=s.a
t=(u&&C.a).R(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.U(u,b)
if(u===!0){u=s.b
t=(u&&C.a).R(u,b)||t}return t},
C:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.z()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.A(P.lg(u,!0,{func:1,ret:-1,args:[D.z]}),new D.h7(q))
u=r.b
if(u!=null){r.saQ(H.d([],[{func:1,ret:-1,args:[D.z]}]))
C.a.A(u,new D.h8(q))}return!0},
cd:function(){return this.C(null)},
aJ:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.C(u)}}},
san:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")},
saQ:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")}}
D.h7.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:31}
D.h8.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:31}
D.z.prototype={}
D.bF.prototype={}
D.bG.prototype={}
D.J.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.dD.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dD))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.dU.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dU))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.hs.prototype={
j4:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
j0:function(a){this.c=a.b
this.d.R(0,a.a)
return!1},
shw:function(a){this.d=H.m(a,"$imh",[P.l],"$amh")}}
X.dY.prototype={}
X.hA.prototype={
b1:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.u()
u=b.b
t=q.ch
if(typeof u!=="number")return u.u()
s=new V.aa(o.a+n*m,o.b+u*t)
t=q.a.gaU()
r=new X.bo(a,V.bp(),q.x,t,s)
r.b=!0
q.z=new P.ay(p,!1)
q.x=s
return r},
cz:function(a,b){this.r=a.a
return!1},
bd:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.ez()
if(typeof u!=="number")return u.as()
this.r=(u&~t)>>>0
return!1},
bc:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.b1(a,b))
return!0},
j5:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaU()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.u()
q=a.b
p=o.cy
if(typeof q!=="number")return q.u()
t=new X.cN(new V.X(s*r,q*p),u,t)
t.b=!0
n.C(t)
return!0},
h2:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dY(c,r.a.gaU(),b)
s.b=!0
t.C(s)
r.y=new P.ay(u,!1)
r.x=V.bp()}}
X.aA.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aA))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.F(this.b)?"Alt+":""
return u+(H.F(this.c)?"Shift+":"")}}
X.bo.prototype={}
X.hZ.prototype={
bM:function(a,b,c){var u=this,t=new P.ay(Date.now(),!1),s=u.a.gaU(),r=new X.bo(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cz:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.C(this.bM(a,b,!0))
return!0},
bd:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.ez()
if(typeof t!=="number")return t.as()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.C(u.bM(a,b,!0))
return!0},
bc:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.bM(a,b,!1))
return!0},
j6:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaU()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.u()
r=a.b
q=p.ch
if(typeof r!=="number")return r.u()
u=new X.cN(new V.X(t*s,r*q),u,b)
u.b=!0
o.C(u)
return!0},
gdS:function(){var u=this.b
return u==null?this.b=D.Q():u},
gcK:function(){var u=this.c
return u==null?this.c=D.Q():u},
ge9:function(){var u=this.d
return u==null?this.d=D.Q():u}}
X.cN.prototype={}
X.ie.prototype={}
X.eo.prototype={}
X.j1.prototype={
b1:function(a,b){var u,t,s,r,q=this
H.m(a,"$ib",[V.aa],"$ab")
u=new P.ay(Date.now(),!1)
t=a.length>0?a[0]:V.bp()
s=q.a.gaU()
r=new X.eo(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
j3:function(a){var u
H.m(a,"$ib",[V.aa],"$ab")
u=this.b
if(u==null)return!1
u.C(this.b1(a,!0))
return!0},
j1:function(a){var u
H.m(a,"$ib",[V.aa],"$ab")
u=this.c
if(u==null)return!1
u.C(this.b1(a,!0))
return!0},
j2:function(a){var u
H.m(a,"$ib",[V.aa],"$ab")
u=this.d
if(u==null)return!1
u.C(this.b1(a,!1))
return!0}}
X.et.prototype={
gaU:function(){var u=this.a,t=C.j.gdN(u).c
t.toString
u=C.j.gdN(u).d
u.toString
return V.mf(0,0,t,u)},
d8:function(a){var u=a.keyCode,t=H.F(a.ctrlKey)||H.F(a.metaKey)
return new X.dU(u,new X.aA(t,a.altKey,a.shiftKey))},
aR:function(a){var u=this.b,t=H.F(a.ctrlKey)||H.F(a.metaKey)
u.c=new X.aA(t,a.altKey,a.shiftKey)},
c2:function(a){var u=this.b,t=H.F(a.ctrlKey)||H.F(a.metaKey)
u.c=new X.aA(t,a.altKey,a.shiftKey)},
aC:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.J()
u=t.top
if(typeof r!=="number")return r.J()
return new V.aa(s-q,r-u)},
b3:function(a){return new V.X(a.movementX,a.movementY)},
c_:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.aa])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
q=C.e.a1(r.pageX)
C.e.a1(r.pageY)
p=o.left
C.e.a1(r.pageX)
C.a.h(n,new V.aa(q-p,C.e.a1(r.pageY)-o.top))}return n},
aA:function(a){var u=a.buttons,t=H.F(a.ctrlKey)||H.F(a.metaKey)
return new X.dD(u,new X.aA(t,a.altKey,a.shiftKey))},
bQ:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.J()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.J()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fX:function(a){this.f=!0},
fL:function(a){this.f=!1},
fR:function(a){H.f(a,"$ia5")
if(H.F(this.f)&&this.bQ(a))a.preventDefault()},
h0:function(a){var u
H.f(a,"$ib8")
if(!H.F(this.f))return
u=this.d8(a)
this.b.j4(u)},
fZ:function(a){var u
H.f(a,"$ib8")
if(!H.F(this.f))return
u=this.d8(a)
this.b.j0(u)},
h4:function(a){var u,t,s,r,q=this
H.f(a,"$ia5")
u=q.a
u.focus()
q.f=!0
q.aR(a)
if(H.F(q.x)){t=q.aA(a)
s=q.b3(a)
if(q.d.cz(t,s))a.preventDefault()
return}if(H.F(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aA(a)
r=q.aC(a)
if(q.c.cz(t,r))a.preventDefault()},
h8:function(a){var u,t,s,r=this
H.f(a,"$ia5")
r.aR(a)
u=r.aA(a)
if(H.F(r.x)){t=r.b3(a)
if(r.d.bd(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aC(a)
if(r.c.bd(u,s))a.preventDefault()},
fV:function(a){var u,t,s,r=this
H.f(a,"$ia5")
if(!r.bQ(a)){r.aR(a)
u=r.aA(a)
if(H.F(r.x)){t=r.b3(a)
if(r.d.bd(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aC(a)
if(r.c.bd(u,s))a.preventDefault()}},
h6:function(a){var u,t,s,r=this
H.f(a,"$ia5")
r.aR(a)
u=r.aA(a)
if(H.F(r.x)){t=r.b3(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aC(a)
if(r.c.bc(u,s))a.preventDefault()},
fT:function(a){var u,t,s,r=this
H.f(a,"$ia5")
if(!r.bQ(a)){r.aR(a)
u=r.aA(a)
if(H.F(r.x)){t=r.b3(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aC(a)
if(r.c.bc(u,s))a.preventDefault()}},
ha:function(a){var u,t,s=this
H.f(a,"$ibh")
s.aR(a)
u=new V.X((a&&C.D).giu(a),C.D.giv(a)).v(0,180)
if(H.F(s.x)){if(s.d.j5(u))a.preventDefault()
return}if(H.F(s.r))return
t=s.aC(a)
if(s.c.j6(u,t))a.preventDefault()},
hc:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aA(s.y)
t=s.aC(s.y)
s.d.h2(u,t,r)}},
hs:function(a){var u,t=this
H.f(a,"$ib_")
t.a.focus()
t.f=!0
t.c2(a)
u=t.c_(a)
if(t.e.j3(u))a.preventDefault()},
ho:function(a){var u
H.f(a,"$ib_")
this.c2(a)
u=this.c_(a)
if(this.e.j1(u))a.preventDefault()},
hq:function(a){var u
H.f(a,"$ib_")
this.c2(a)
u=this.c_(a)
if(this.e.j2(u))a.preventDefault()},
sfh:function(a){this.z=H.m(a,"$ib",[[P.d_,P.V]],"$ab")}}
D.bB.prototype={
az:function(a){var u
H.f(a,"$iz")
u=this.r
if(u!=null)u.C(a)},
eS:function(){return this.az(null)},
$iaf:1,
$ic9:1}
D.af.prototype={$ic9:1}
D.dV.prototype={
az:function(a){var u=this.x
if(u!=null)u.C(a)},
dj:function(a){var u
H.f(a,"$iz")
u=this.y
if(u!=null)u.C(a)},
h1:function(){return this.dj(null)},
he:function(a){var u,t,s
H.m(a,"$ij",[D.af],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t){s=a[t]
if(s==null||this.f9(s))return!1}return!0},
fF:function(a,b){var u,t,s,r,q,p,o,n=D.af
H.m(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gdi(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=H.f(b[q],"$iaf")
if(p instanceof D.bB)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.c3()
o.san(null)
o.saQ(null)
o.c=null
o.d=0
p.r=o}H.n(t,s)
if(o.a==null)o.san(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bF([n])
n.b=!0
this.az(n)},
hi:function(a,b){var u,t,s,r=D.af
H.m(b,"$ij",[r],"$aj")
for(u=b.gT(b),t=this.gdi();u.w();){s=u.gH(u)
C.a.R(this.e,s)
s.gp().R(0,t)}r=new D.bG([r])
r.b=!0
this.az(r)},
f9:function(a){var u=C.a.U(this.e,a)
return u},
sff:function(a){this.e=H.m(a,"$ib",[D.bB],"$ab")},
sht:function(a){this.f=H.m(a,"$ib",[D.e8],"$ab")},
shV:function(a){this.r=H.m(a,"$ib",[D.eh],"$ab")},
$aj:function(){return[D.af]},
$aa2:function(){return[D.af]}}
D.e8.prototype={$iaf:1,$ic9:1}
D.eh.prototype={$iaf:1,$ic9:1}
V.a7.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+", "+V.Y(this.c,3,0)+"]"}}
V.ao.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ao))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Y(u.a,3,0)+", "+V.Y(u.b,3,0)+", "+V.Y(u.c,3,0)+", "+V.Y(u.d,3,0)+"]"}}
V.h6.prototype={}
V.cK.prototype={
a4:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.E])
return t},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cK))return!1
u=b.a
t=$.O().a
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
i:function(a){var u,t,s,r,q=this,p=[P.E],o=V.cr(H.d([q.a,q.d,q.r],p),3,0),n=V.cr(H.d([q.b,q.e,q.x],p),3,0),m=V.cr(H.d([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.e(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.e(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.e(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.e(o,1)
r=" "+o[1]+", "
if(1>=t)return H.e(n,1)
r=r+n[1]+", "
if(1>=s)return H.e(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.e(o,2)
p=" "+o[2]+", "
if(2>=t)return H.e(n,2)
p=p+n[2]+", "
if(2>=s)return H.e(m,2)
return r+(p+m[2]+"]")}}
V.at.prototype={
a4:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.E])
return t},
cr:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.O().a)return V.bK()
u=1/b1
t=-n
s=-a0
return V.bb((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
u:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.bb(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
by:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.R(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cJ:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.ab(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.at))return!1
u=b.a
t=$.O().a
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
i:function(a){return this.V()},
K:function(a){var u,t,s,r,q,p=this,o=[P.E],n=V.cr(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.cr(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.cr(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.cr(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.e(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.e(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.e(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.e(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.e(n,1)
q=q+n[1]+", "
if(1>=t)return H.e(m,1)
q=q+m[1]+", "
if(1>=s)return H.e(l,1)
q=q+l[1]+", "
if(1>=r)return H.e(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.e(n,2)
u=u+n[2]+", "
if(2>=t)return H.e(m,2)
u=u+m[2]+", "
if(2>=s)return H.e(l,2)
u=u+l[2]+", "
if(2>=r)return H.e(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.e(n,3)
q=q+n[3]+", "
if(3>=t)return H.e(m,3)
q=q+m[3]+", "
if(3>=s)return H.e(l,3)
q=q+l[3]+", "
if(3>=r)return H.e(k,3)
return u+(q+k[3]+"]")},
V:function(){return this.K("")}}
V.aa.prototype={
J:function(a,b){return new V.aa(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+"]"}}
V.ab.prototype={
F:function(a,b){return new V.ab(this.a+b.a,this.b+b.b,this.c+b.c)},
J:function(a,b){return new V.ab(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){return new V.ab(this.a*b,this.b*b,this.c*b)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ab))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+", "+V.Y(this.c,3,0)+"]"}}
V.bM.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bM))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Y(u.a,3,0)+", "+V.Y(u.b,3,0)+", "+V.Y(u.c,3,0)+", "+V.Y(u.d,3,0)+"]"}}
V.cV.prototype={
gak:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cV))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Y(u.a,3,0)+", "+V.Y(u.b,3,0)+", "+V.Y(u.c,3,0)+", "+V.Y(u.d,3,0)+"]"}}
V.X.prototype={
cs:function(a){return Math.sqrt(this.B(this))},
B:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.B(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.B(t)
return s*r+u*t},
u:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.u()
u=this.b
if(typeof u!=="number")return u.u()
return new V.X(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.O().a){u=$.mt
return u==null?$.mt=new V.X(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.X(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=this.a
s=$.O()
s.toString
if(typeof u!=="number")return u.J()
if(typeof t!=="number")return H.B(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.J()
if(typeof t!=="number")return H.B(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+"]"}}
V.R.prototype={
cs:function(a){return Math.sqrt(this.B(this))},
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aE:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.R(u*t-s*r,s*q-p*t,p*r-u*q)},
F:function(a,b){return new V.R(this.a+b.a,this.b+b.b,this.c+b.c)},
S:function(a){return new V.R(-this.a,-this.b,-this.c)},
u:function(a,b){return new V.R(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if(Math.abs(b-0)<$.O().a)return V.d7()
return new V.R(this.a/b,this.b/b,this.c/b)},
e8:function(){var u=$.O().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+", "+V.Y(this.c,3,0)+"]"}}
U.fN.prototype={
bH:function(a){var u=V.pQ(a,this.c,this.b)
return u},
gp:function(){var u=this.y
return u==null?this.y=D.Q():u},
P:function(a){var u=this.y
if(u!=null)u.C(a)},
scM:function(a,b){},
scu:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.O().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bH(u)}s=new D.J("maximumLocation",s,t.b,[P.E])
s.b=!0
t.P(s)}},
scw:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.O().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bH(u)}s=new D.J("minimumLocation",s,t.c,[P.E])
s.b=!0
t.P(s)}},
saj:function(a,b){var u,t=this
b=t.bH(b)
u=t.d
if(!(Math.abs(u-b)<$.O().a)){t.d=b
u=new D.J("location",u,b,[P.E])
u.b=!0
t.P(u)}},
scv:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.O().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.J("maximumVelocity",r,a,[P.E])
r.b=!0
s.P(r)}},
sW:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.O().a)){u.f=a
t=new D.J("velocity",t,a,[P.E])
t.b=!0
u.P(t)}},
scb:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.O().a)){this.x=a
u=new D.J("dampening",u,a,[P.E])
u.b=!0
this.P(u)}},
ah:function(a,b){var u,t,s,r=this,q=r.f,p=$.O().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.saj(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.O().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sW(u)}}}
U.dF.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.Q():u},
aX:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dF))return!1
return J.U(this.a,b.a)},
i:function(a){return"Constant: "+this.a.K("          ")}}
U.cH.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.Q():u},
P:function(a){var u
H.f(a,"$iz")
u=this.e
if(u!=null)u.C(a)},
ad:function(){return this.P(null)},
fD:function(a,b){var u,t,s,r,q,p,o,n=U.ai
H.m(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gaP(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.gp()
o.toString
H.n(t,s)
if(o.a==null)o.san(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bF([n])
n.b=!0
this.P(n)},
hg:function(a,b){var u,t,s=U.ai
H.m(b,"$ij",[s],"$aj")
for(u=b.gT(b),t=this.gaP();u.w();)u.gH(u).gp().R(0,t)
s=new D.bG([s])
s.b=!0
this.P(s)},
aX:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.O()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.as(r,r.length,[H.q(r,0)]),u=null;r.w();){q=r.d
if(q!=null){t=q.aX(0,b,c)
if(t!=null)u=u==null?t:t.u(0,u)}}s.f=u==null?V.bK():u
r=s.e
if(r!=null)r.aJ(0)}return s.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cH))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.U(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.ai]},
$aa2:function(){return[U.ai]},
$iai:1}
U.ai.prototype={}
U.eu.prototype={
gp:function(){var u=this.cy
return u==null?this.cy=D.Q():u},
P:function(a){var u
H.f(a,"$iz")
u=this.cy
if(u!=null)u.C(a)},
ad:function(){return this.P(null)},
b5:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdS().h(0,u.gbR())
u.a.c.ge9().h(0,u.gbT())
u.a.c.gcK().h(0,u.gbV())
return!0},
bS:function(a){var u=this
H.f(a,"$iz")
if(!J.U(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bU:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.f(a,"$iz"),"$ibo")
if(!H.F(n.y))return
if(H.F(n.x)){u=a.d.J(0,a.y)
u=new V.X(u.a,u.b)
u=u.B(u)
t=n.r
if(typeof t!=="number")return H.B(t)
if(u<t)return
n.x=!1}if(H.F(n.d)){u=a.c
t=a.d.J(0,a.y)
u=new V.X(t.a,t.b).u(0,2).v(0,u.gak())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.u()
s=n.e
if(typeof s!=="number")return H.B(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.J(0,a.y)
r=new V.X(s.a,s.b).u(0,2).v(0,u.gak())
s=n.b
q=r.a
if(typeof q!=="number")return q.S()
p=n.e
if(typeof p!=="number")return H.B(p)
o=n.z
if(typeof o!=="number")return H.B(o)
s.saj(0,-q*p+o)
n.b.sW(0)
t=t.J(0,a.z)
n.Q=new V.X(t.a,t.b).u(0,2).v(0,u.gak())}n.ad()},
bW:function(a){var u,t,s,r=this
H.f(a,"$iz")
if(!H.F(r.y))return
r.y=!1
if(H.F(r.x))return
u=r.Q
if(u.B(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.u()
s=r.e
if(typeof s!=="number")return H.B(s)
u.sW(t*10*s)
r.ad()}},
aX:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.O()
if(q<p){r.ch=p
u=b.y
r.b.ah(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.bb(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iai:1}
U.ev.prototype={
gp:function(){var u=this.fx
return u==null?this.fx=D.Q():u},
P:function(a){var u
H.f(a,"$iz")
u=this.fx
if(u!=null)u.C(a)},
ad:function(){return this.P(null)},
b5:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdS().h(0,s.gbR())
s.a.c.ge9().h(0,s.gbT())
s.a.c.gcK().h(0,s.gbV())
u=s.a.d
t=u.f
u=t==null?u.f=D.Q():t
u.h(0,s.gft())
u=s.a.d
t=u.d
u=t==null?u.d=D.Q():t
u.h(0,s.gfv())
u=s.a.e
t=u.b
u=t==null?u.b=D.Q():t
u.h(0,s.gi3())
u=s.a.e
t=u.d
u=t==null?u.d=D.Q():t
u.h(0,s.gi1())
u=s.a.e
t=u.c
u=t==null?u.c=D.Q():t
u.h(0,s.gi_())
return!0},
aw:function(a){var u=a.a,t=a.b
if(H.F(this.f)){if(typeof u!=="number")return u.S()
u=-u}if(H.F(this.r)){if(typeof t!=="number")return t.S()
t=-t}return new V.X(u,t)},
bS:function(a){var u=this
a=H.r(H.f(a,"$iz"),"$ibo")
if(!J.U(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bU:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.f(a,"$iz"),"$ibo")
if(!H.F(n.cx))return
if(H.F(n.ch)){u=a.d.J(0,a.y)
u=new V.X(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.B(t)
if(u<t)return
n.ch=!1}if(H.F(n.e)){u=a.c
t=a.d.J(0,a.y)
u=n.aw(new V.X(t.a,t.b).u(0,2).v(0,u.gak()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.B(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.B(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.J(0,a.y)
r=n.aw(new V.X(s.a,s.b).u(0,2).v(0,u.gak()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.B(p)
o=n.cy
if(typeof o!=="number")return H.B(o)
s.saj(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.B(q)
s=n.db
if(typeof s!=="number")return H.B(s)
o.saj(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.J(0,a.z)
n.dx=n.aw(new V.X(t.a,t.b).u(0,2).v(0,u.gak()))}n.ad()},
bW:function(a){var u,t,s,r=this
H.f(a,"$iz")
if(!H.F(r.cx))return
r.cx=!1
if(H.F(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.B(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.B(u)
s.sW(-t*10*u)
r.ad()}},
fu:function(a){var u=this
if(H.r(H.f(a,"$iz"),"$idY").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fw:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.f(a,"$iz"),"$ibo")
if(!J.U(n.d,a.x.b))return
u=a.c
t=a.d
s=t.J(0,a.y)
r=n.aw(new V.X(s.a,s.b).u(0,2).v(0,u.gak()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.B(p)
o=n.cy
if(typeof o!=="number")return H.B(o)
s.saj(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.B(q)
s=n.db
if(typeof s!=="number")return H.B(s)
o.saj(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.J(0,a.z)
n.dx=n.aw(new V.X(t.a,t.b).u(0,2).v(0,u.gak()))
n.ad()},
i4:function(a){var u=this
H.f(a,"$iz")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
i2:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.f(a,"$iz"),"$ieo")
if(!H.F(n.cx))return
if(H.F(n.ch)){u=a.d.J(0,a.y)
u=new V.X(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.B(t)
if(u<t)return
n.ch=!1}if(H.F(n.e)){u=a.c
t=a.d.J(0,a.y)
u=n.aw(new V.X(t.a,t.b).u(0,2).v(0,u.gak()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.B(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.B(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.J(0,a.y)
r=n.aw(new V.X(s.a,s.b).u(0,2).v(0,u.gak()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.B(p)
o=n.cy
if(typeof o!=="number")return H.B(o)
s.saj(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.B(q)
s=n.db
if(typeof s!=="number")return H.B(s)
o.saj(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.J(0,a.z)
n.dx=n.aw(new V.X(t.a,t.b).u(0,2).v(0,u.gak()))}n.ad()},
i0:function(a){var u,t,s,r=this
H.f(a,"$iz")
if(!H.F(r.cx))return
r.cx=!1
if(H.F(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.B(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.B(u)
s.sW(-t*10*u)
r.ad()}},
aX:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.O()
if(q<p){r.dy=p
u=b.y
r.c.ah(0,u)
r.b.ah(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.bb(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.u(0,V.bb(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iai:1}
U.ew.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.Q():u},
P:function(a){var u=this.r
if(u!=null)u.C(a)},
b5:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.Q():t
t=r.gfA()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.Q():s).h(0,t)
return!0},
fB:function(a){var u,t,s,r,q=this
H.f(a,"$iz")
if(!J.U(q.b,q.a.b.c))return
H.r(a,"$icN")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){q.d=r
u=new D.J("zoom",u,r,[P.E])
u.b=!0
q.P(u)}},
aX:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.m4(u,u,u)}return t.f},
$iai:1}
M.dE.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.Q():u},
a_:function(a){var u
H.f(a,"$iz")
u=this.r
if(u!=null)u.C(a)},
b_:function(){return this.a_(null)},
hk:function(a,b){var u,t,s,r,q,p,o,n=M.aC
H.m(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gZ(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.gp()
o.toString
H.n(t,s)
if(o.a==null)o.san(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bF([n])
n.b=!0
this.a_(n)},
hm:function(a,b){var u,t,s=M.aC
H.m(b,"$ij",[s],"$aj")
for(u=b.gT(b),t=this.gZ();u.w();)u.gH(u).gp().R(0,t)
s=new D.bG([s])
s.b=!0
this.a_(s)},
ag:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.as(u,u.length,[H.q(u,0)]);u.w();){t=u.d
if(t!=null)t.ag(a)}s.f=!1},
$aj:function(){return[M.aC]},
$aa2:function(){return[M.aC]},
$iaC:1}
M.dG.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.Q():u},
a_:function(a){var u
H.f(a,"$iz")
u=this.r
if(u!=null)u.C(a)},
b_:function(){return this.a_(null)},
sb6:function(a){var u,t,s=this
if(a==null)a=new X.hm()
u=s.b
if(u!==a){if(u!=null)u.gp().R(0,s.gZ())
t=s.b
s.b=a
a.gp().h(0,s.gZ())
u=new D.J("camera",t,s.b,[X.c0])
u.b=!0
s.a_(u)}},
sbe:function(a,b){var u,t,s=this
if(b==null)b=X.lZ(null)
u=s.c
if(u!==b){if(u!=null)u.gp().R(0,s.gZ())
t=s.c
s.c=b
b.gp().h(0,s.gZ())
u=new D.J("target",t,s.c,[X.d1])
u.b=!0
s.a_(u)}},
saW:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().R(0,t.gZ())
u=t.d
t.d=a
if(a!=null)a.gp().h(0,t.gZ())
s=new D.J("technique",u,t.d,[O.bO])
s.b=!0
t.a_(s)}},
ag:function(a){var u,t=this
a.cB(t.d)
t.c.a0(a)
t.b.a0(a)
u=t.d
if(u!=null)u.ah(0,a)
t.e.ah(0,a)
t.e.ag(a)
t.b.am(a)
t.c.am(a)
a.cA()},
$iaC:1}
M.dL.prototype={
a_:function(a){var u
H.f(a,"$iz")
u=this.y
if(u!=null)u.C(a)},
b_:function(){return this.a_(null)},
fN:function(a,b){var u,t,s,r,q,p,o,n=E.aq
H.m(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gZ(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c3()
o.san(null)
o.saQ(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.san(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bF([n])
n.b=!0
this.a_(n)},
fP:function(a,b){var u,t,s=E.aq
H.m(b,"$ij",[s],"$aj")
for(u=b.gT(b),t=this.gZ();u.w();)u.gH(u).gp().R(0,t)
s=new D.bG([s])
s.b=!0
this.a_(s)},
sb6:function(a){var u,t,s=this
if(a==null)a=X.m8(null)
u=s.b
if(u!==a){if(u!=null)u.gp().R(0,s.gZ())
t=s.b
s.b=a
a.gp().h(0,s.gZ())
u=new D.J("camera",t,s.b,[X.c0])
u.b=!0
s.a_(u)}},
sbe:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gp().R(0,t.gZ())
u=t.c
t.c=b
b.gp().h(0,t.gZ())
s=new D.J("target",u,t.c,[X.d1])
s.b=!0
t.a_(s)}},
saW:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().R(0,t.gZ())
u=t.d
t.d=a
if(a!=null)a.gp().h(0,t.gZ())
s=new D.J("technique",u,t.d,[O.bO])
s.b=!0
t.a_(s)}},
gp:function(){var u=this.y
return u==null?this.y=D.Q():u},
ag:function(a){var u,t=this
a.cB(t.d)
t.c.a0(a)
t.b.a0(a)
u=t.d
if(u!=null)u.ah(0,a)
for(u=t.e.a,u=new J.as(u,u.length,[H.q(u,0)]);u.w();)u.d.ah(0,a)
for(u=t.e.a,u=new J.as(u,u.length,[H.q(u,0)]);u.w();)u.d.ag(a)
t.b.toString
a.cy.aH()
a.db.aH()
t.c.am(a)
a.cA()},
sf7:function(a,b){this.e=H.m(b,"$ia2",[E.aq],"$aa2")},
$iaC:1}
M.aC.prototype={}
A.dA.prototype={}
A.fB.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iA:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
cc:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ap.prototype={
gav:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
t:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.ap))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.dI.prototype={
dz:function(a,b){if(b!=null&&b.d)a.eB(b)}}
A.e0.prototype={
eL:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.a6("")
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
A.p5(c0,u)
A.p7(c0,u)
A.p6(c0,u)
A.p9(c0,u)
A.pa(c0,u)
A.p8(c0,u)
A.pb(c0,u)
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
b5.co(0,s.charCodeAt(0)==0?s:s,A.p4(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.r(b5.y.M(0,"invViewMat"),"$iak")
if(t)b5.dy=H.r(b5.y.M(0,"objMat"),"$iak")
if(r)b5.fr=H.r(b5.y.M(0,"viewObjMat"),"$iak")
b5.fy=H.r(b5.y.M(0,"projViewObjMat"),"$iak")
if(c0.ry)b5.k1=H.r(b5.y.M(0,"txt2DMat"),"$ibR")
if(c0.x1)b5.k2=H.r(b5.y.M(0,"txtCubeMat"),"$iak")
if(c0.x2)b5.k3=H.r(b5.y.M(0,"colorMat"),"$iak")
b5.sf3(H.d([],[A.ak]))
t=c0.y2
if(t>0){b5.k4=H.f(b5.y.M(0,"bendMatCount"),"$iaJ")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.A(P.C(b7+q+b8));(s&&C.a).h(s,H.r(m,"$iak"))}}if(c0.a.a)b5.r2=H.r(b5.y.M(0,"emissionClr"),"$iZ")
if(c0.b.a)b5.x1=H.r(b5.y.M(0,"ambientClr"),"$iZ")
if(c0.c.a)b5.y2=H.r(b5.y.M(0,"diffuseClr"),"$iZ")
if(c0.d.a)b5.dU=H.r(b5.y.M(0,"invDiffuseClr"),"$iZ")
t=c0.e.a
if(!t)s=!1
else s=!0
if(s){b5.dW=H.r(b5.y.M(0,"shininess"),"$iac")
if(t)b5.dV=H.r(b5.y.M(0,"specularClr"),"$iZ")}if(c0.cy){b5.dX=H.r(b5.y.M(0,"envSampler"),"$ibS")
if(c0.r.a)b5.dY=H.r(b5.y.M(0,"reflectClr"),"$iZ")
t=c0.x.a
if(!t)s=!1
else s=!0
if(s){b5.dZ=H.r(b5.y.M(0,"refraction"),"$iac")
if(t)b5.e_=H.r(b5.y.M(0,"refractClr"),"$iZ")}}if(c0.y.a)b5.e0=H.r(b5.y.M(0,"alpha"),"$iac")
t=P.l
s=[t,A.aJ]
b5.sfe(new H.a3(s))
b5.seT(new H.a3([t,[P.b,A.cf]]))
b5.shu(new H.a3(s))
b5.shv(new H.a3([t,[P.b,A.cg]]))
b5.shU(new H.a3(s))
b5.seU(new H.a3([t,[P.b,A.ch]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.cf],l=0;l<t.length;t.length===s||(0,H.x)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.i(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.as()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.A(P.C(b7+g+b8))
H.r(m,"$iZ")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.A(P.C(b7+g+b8))
H.r(f,"$iZ")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.A(P.C(b7+g+b8))
H.r(e,"$iZ")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.A(P.C(b7+g+b8))
H.r(m,"$iZ")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.A(P.C(b7+g+b8))
H.r(f,"$iZ")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.A(P.C(b7+o+b8))
H.r(e,"$ibq")
a=e}else a=b6
C.a.h(h,new A.cf(b,c,d,m,f,a))}b5.cf.k(0,j,h)
q=b5.ce
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.A(P.C(b7+o+b8))
q.k(0,j,H.f(m,"$iaJ"))}for(t=c0.Q,s=t.length,r=[A.cg],l=0;l<t.length;t.length===s||(0,H.x)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.i(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.A(P.C(b7+o+b8))
H.r(m,"$iZ")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.A(P.C(b7+o+b8))
H.r(f,"$iZ")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.A(P.C(b7+o+b8))
H.r(e,"$iZ")
if(typeof j!=="number")return j.as()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.A(P.C(b7+o+b8))
H.r(a0,"$ibR")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.A(P.C(b7+o+b8))
H.r(a0,"$ibS")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.A(P.C(b7+o+b8))
H.r(a0,"$ibS")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.A(P.C(b7+o+b8))
H.r(a2,"$id5")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.A(P.C(b7+o+b8))
H.r(a0,"$iac")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.A(P.C(b7+o+b8))
H.r(a2,"$iac")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.A(P.C(b7+o+b8))
H.r(a5,"$iac")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.cg(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.ci.k(0,j,h)
q=b5.cg
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.A(P.C(b7+o+b8))
q.k(0,j,H.f(m,"$iaJ"))}for(t=c0.ch,s=t.length,r=[A.ch],l=0;l<t.length;t.length===s||(0,H.x)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.i(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.A(P.C(b7+o+b8))
H.r(m,"$iZ")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.A(P.C(b7+o+b8))
H.r(f,"$iZ")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.A(P.C(b7+o+b8))
H.r(e,"$iZ")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.A(P.C(b7+o+b8))
H.r(a0,"$iZ")
if(typeof j!=="number")return j.as()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.A(P.C(b7+o+b8))
H.r(a2,"$iZ")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.A(P.C(b7+o+b8))
H.r(a5,"$iZ")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.A(P.C(b7+o+b8))
H.r(a9,"$iac")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.A(P.C(b7+o+b8))
H.r(b0,"$iac")
b1=b0
b2=a9
c=a5
b=a2}else{b1=b6
b2=b1
c=b2
b=c}p=(j&2)!==0
if(p){o=b5.y
g=i+"s["+n+"].shadowAdj"
a2=o.j(0,g)
if(a2==null)H.A(P.C(b7+g+b8))
H.r(a2,"$id5")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.A(P.C(b7+g+b8))
H.r(a2,"$iac")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.A(P.C(b7+g+b8))
H.r(a5,"$iac")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.A(P.C(b7+g+b8))
H.r(a2,"$iac")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.A(P.C(b7+g+b8))
H.r(a5,"$iac")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.A(P.C(b7+g+b8))
H.r(a9,"$iac")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.A(P.C(b7+g+b8))
H.r(a2,"$ibq")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.A(P.C(b7+o+b8))
H.r(a2,"$ibq")
a3=a2}else a3=b6
C.a.h(h,new A.ch(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.ck.k(0,j,h)
q=b5.cj
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.A(P.C(b7+o+b8))
q.k(0,j,H.f(m,"$iaJ"))}}},
hL:function(a,b){},
sf3:function(a){this.r1=H.m(a,"$ib",[A.ak],"$ab")},
sfe:function(a){this.ce=H.m(a,"$iy",[P.l,A.aJ],"$ay")},
seT:function(a){this.cf=H.m(a,"$iy",[P.l,[P.b,A.cf]],"$ay")},
shu:function(a){this.cg=H.m(a,"$iy",[P.l,A.aJ],"$ay")},
shv:function(a){this.ci=H.m(a,"$iy",[P.l,[P.b,A.cg]],"$ay")},
shU:function(a){this.cj=H.m(a,"$iy",[P.l,A.aJ],"$ay")},
seU:function(a){this.ck=H.m(a,"$iy",[P.l,[P.b,A.ch]],"$ay")}}
A.aP.prototype={
i:function(a){return"dirLight"+H.i(this.a)}}
A.aT.prototype={
i:function(a){return"pointLight"+H.i(this.a)}}
A.aX.prototype={
i:function(a){return"spotLight"+H.i(this.a)}}
A.hJ.prototype={
i:function(a){return this.ba}}
A.cf.prototype={}
A.cg.prototype={}
A.ch.prototype={}
A.cX.prototype={
bF:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
co:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.d9(b,35633)
r.f=r.d9(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.F(H.lz(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.A(P.C("Failed to link shader: "+H.i(s)))}r.hP()
r.hR()},
a0:function(a){a.a.useProgram(this.r)
this.x.iA()},
d9:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.F(H.lz(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.C("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
hP:function(){var u,t,s,r=this,q=H.d([],[A.dA]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.B(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dA(p,t.name,s))}r.x=new A.fB(q)},
hR:function(){var u,t,s,r=this,q=H.d([],[A.ep]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.B(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.it(t.type,t.size,t.name,s))}r.y=new A.je(q)},
aN:function(a,b,c){var u=this.a
if(a===1)return new A.aJ(u,b,c)
else return A.ll(u,this.r,b,a,c)},
fb:function(a,b,c){var u=this.a
if(a===1)return new A.bq(u,b,c)
else return A.ll(u,this.r,b,a,c)},
fc:function(a,b,c){var u=this.a
if(a===1)return new A.bS(u,b,c)
else return A.ll(u,this.r,b,a,c)},
bm:function(a,b){return new P.eG(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
it:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aN(b,c,d)
case 5121:return u.aN(b,c,d)
case 5122:return u.aN(b,c,d)
case 5123:return u.aN(b,c,d)
case 5124:return u.aN(b,c,d)
case 5125:return u.aN(b,c,d)
case 5126:return new A.ac(u.a,c,d)
case 35664:return new A.ja(u.a,c,d)
case 35665:return new A.Z(u.a,c,d)
case 35666:return new A.d5(u.a,c,d)
case 35667:return new A.jb(u.a,c,d)
case 35668:return new A.jc(u.a,c,d)
case 35669:return new A.jd(u.a,c,d)
case 35674:return new A.jf(u.a,c,d)
case 35675:return new A.bR(u.a,c,d)
case 35676:return new A.ak(u.a,c,d)
case 35678:return u.fb(b,c,d)
case 35680:return u.fc(b,c,d)
case 35670:throw H.c(u.bm("BOOL",c))
case 35671:throw H.c(u.bm("BOOL_VEC2",c))
case 35672:throw H.c(u.bm("BOOL_VEC3",c))
case 35673:throw H.c(u.bm("BOOL_VEC4",c))
default:throw H.c(P.C("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.ef.prototype={}
A.ep.prototype={}
A.je.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
M:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.C("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.V()},
V:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aJ.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.jb.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.jc.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.jd.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.j9.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
si6:function(a){H.m(a,"$ib",[P.l],"$ab")}}
A.ac.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.ja.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.Z.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.d5.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.jf.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.bR.prototype={
a8:function(a){var u=new Float32Array(H.cm(H.m(a,"$ib",[P.E],"$ab")))
C.c.es(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.ak.prototype={
a8:function(a){var u=new Float32Array(H.cm(H.m(a,"$ib",[P.E],"$ab")))
C.c.eu(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.bq.prototype={
eB:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.bS.prototype={
eC:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.l_.prototype={
$1:function(a){return new V.ab(Math.cos(a),Math.sin(a),0)},
$S:44}
F.kM.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lK(n.$1(o),m)
m=J.lK(n.$1(o+3.141592653589793/p.c),m).J(0,l)
m=new V.R(m.a,m.b,m.c)
u=m.v(0,Math.sqrt(m.B(m)))
n=$.mv
if(n==null){n=new V.R(1,0,0)
$.mv=n
t=n}else t=n
n=u.aE(!J.U(u,t)?V.mx():t)
s=n.v(0,Math.sqrt(n.B(n)))
n=s.aE(u)
t=n.v(0,Math.sqrt(n.B(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.u(0,n*m)
m=s.u(0,q*m)
m=l.F(0,new V.ab(n.a-m.a,n.b-m.b,n.c-m.c))
if(!J.U(a.f,m)){a.f=m
n=a.a
if(n!=null)n.al()}},
$S:45}
F.a9.prototype={
b9:function(){var u=this
if(!u.gdR()){C.a.R(u.a.a.d.b,u)
u.a.a.al()}u.hA()
u.hB()
u.hC()},
hM:function(a){this.a=a
C.a.h(a.d.b,this)},
hN:function(a){this.b=a
C.a.h(a.d.c,this)},
hO:function(a){this.c=a
C.a.h(a.d.d,this)},
hA:function(){var u=this.a
if(u!=null){C.a.R(u.d.b,this)
this.a=null}},
hB:function(){var u=this.b
if(u!=null){C.a.R(u.d.c,this)
this.b=null}},
hC:function(){var u=this.c
if(u!=null){C.a.R(u.d.d,this)
this.c=null}},
gdR:function(){return this.a==null||this.b==null||this.c==null},
f2:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d7()
if(q!=null)s=s.F(0,q)
if(u!=null)s=s.F(0,u)
if(t!=null)s=s.F(0,t)
if(s.e8())return
return s.v(0,Math.sqrt(s.B(s)))},
f6:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.J(0,q)
r=new V.R(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.B(r)))
r=t.J(0,q)
r=new V.R(r.a,r.b,r.c)
r=s.aE(r.v(0,Math.sqrt(r.B(r))))
return r.v(0,Math.sqrt(r.B(r)))},
c8:function(){var u,t=this
if(t.d!=null)return!0
u=t.f2()
if(u==null){u=t.f6()
if(u==null)return!1}t.d=u
t.a.a.al()
return!0},
f1:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d7()
if(q!=null)s=s.F(0,q)
if(u!=null)s=s.F(0,u)
if(t!=null)s=s.F(0,t)
if(s.e8())return
return s.v(0,Math.sqrt(s.B(s)))},
f5:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.O().a){l=d.J(0,g)
l=new V.R(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.B(l)))
if(s.a-t.a<0)q=q.S(0)}else{p=(l-u.b)/r
l=d.J(0,g).u(0,p).F(0,g).J(0,j)
l=new V.R(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.B(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.S(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.B(l)))
l=o.aE(q)
l=l.v(0,Math.sqrt(l.B(l))).aE(o)
q=l.v(0,Math.sqrt(l.B(l)))}return q},
c6:function(){var u,t=this
if(t.e!=null)return!0
u=t.f1()
if(u==null){u=t.f5()
if(u==null)return!1}t.e=u
t.a.a.al()
return!0},
gio:function(a){var u=this
if(J.U(u.a,u.b))return!0
if(J.U(u.b,u.c))return!0
if(J.U(u.c,u.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.V()},
K:function(a){var u,t,s=this
if(s.gdR())return a+"disposed"
u=a+C.b.aG(J.aN(s.a.e),0)+", "+C.b.aG(J.aN(s.b.e),0)+", "+C.b.aG(J.aN(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
V:function(){return this.K("")}}
F.h9.prototype={}
F.iz.prototype={
bb:function(a,b,c){var u,t=b.a
t.a.a.E()
t=t.e
u=c.a
u.a.a.E()
if(t==u.e){t=b.b
t.a.a.E()
t=t.e
u=c.b
u.a.a.E()
if(t==u.e){t=b.c
t.a.a.E()
t=t.e
u=c.c
u.a.a.E()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.E()
t=t.e
u=c.b
u.a.a.E()
if(t==u.e){t=b.b
t.a.a.E()
t=t.e
u=c.c
u.a.a.E()
if(t==u.e){t=b.c
t.a.a.E()
t=t.e
u=c.a
u.a.a.E()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.E()
t=t.e
u=c.c
u.a.a.E()
if(t==u.e){t=b.b
t.a.a.E()
t=t.e
u=c.a
u.a.a.E()
if(t==u.e){t=b.c
t.a.a.E()
t=t.e
u=c.b
u.a.a.E()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bJ.prototype={}
F.hu.prototype={}
F.j8.prototype={
bb:function(a,b,c){var u,t=b.a
t.a.a.E()
t=t.e
u=c.a
u.a.a.E()
if(t==u.e){t=b.b
t.a.a.E()
t=t.e
u=c.b
u.a.a.E()
return t==u.e}else{t=b.a
t.a.a.E()
t=t.e
u=c.b
u.a.a.E()
if(t==u.e){t=b.b
t.a.a.E()
t=t.e
u=c.a
u.a.a.E()
return t==u.e}else return!1}}}
F.ca.prototype={}
F.ed.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.Q():u},
aD:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aD()||!1
if(!t.a.aD())u=!1
s=t.e
if(s!=null)s.aJ(0)
return u},
iT:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.q(o,0)])
for(o=[F.aw];u.length!==0;){t=C.a.giF(u)
C.a.eh(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.e(u,r)
q=u[r]
if(q!=null&&a.bb(0,t,q)){C.a.h(s,q)
C.a.eh(u,r)}}if(s.length>1)b.iS(s)}}p.a.E()
p.c.cE()
p.d.cE()
p.b.ja()
p.c.cF(new F.j8())
p.d.cF(new F.iz())
o=p.e
if(o!=null)o.aJ(0)},
c5:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aD()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bv().a)!==0)++s
if((t&$.bu().a)!==0)++s
if((t&$.bk().a)!==0)++s
if((t&$.bX().a)!==0)++s
if((t&$.du().a)!==0)++s
if((t&$.dv().a)!==0)++s
if((t&$.cw().a)!==0)++s
if((t&$.bt().a)!==0)++s
r=a3.gcQ(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.E
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dC])
for(n=0,m=0;m<s;++m){l=a3.ig(m)
k=l.gcQ(l)
C.a.k(o,m,new Z.dC(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.e(u,j)
i=u[j].iP(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cm(p)),35044)
u.bindBuffer(a0,null)
e=new Z.c_(new Z.ex(a0,f),o,a3)
e.sfn(H.d([],[Z.c7]))
a.b.b
if(a.c.b.length!==0){t=P.l
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.E()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.E()
C.a.h(d,c.e)}b=Z.my(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.c7(1,d.length,b))}if(a.d.b.length!==0){t=P.l
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.E()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.E()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].c
c.a.a.E()
C.a.h(d,c.e)}b=Z.my(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.c7(4,d.length,b))}return e},
i:function(a){var u=this,t=H.d([],[P.h])
if(u.a.c.length!==0){C.a.h(t,"Vertices:")
C.a.h(t,u.a.K("   "))}u.b.b
if(u.c.b.length!==0){C.a.h(t,"Lines:")
C.a.h(t,u.c.K("   "))}if(u.d.b.length!==0){C.a.h(t,"Faces:")
C.a.h(t,u.d.K("   "))}return C.a.m(t,"\n")},
al:function(){var u=this.e
if(u!=null)u.C(null)},
$ipY:1}
F.is.prototype={
ia:function(a){var u,t,s,r,q,p
H.m(a,"$ib",[F.aw],"$ab")
u=H.d([],[F.a9])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.dN(t,q,p))}return u},
ib:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.aw],"$ab")
u=H.d([],[F.a9])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.e(c,r)
l=c[r];++r
if(r>=m)return H.e(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.e(c,j)
i=c[j]
if(s<0||s>=m)return H.e(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.dN(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dN(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dN(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dN(k,h,l))}o=!o}q=!q}return u},
gn:function(a){return this.b.length},
cF:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.bb(0,p,n)){p.b9()
break}}}}},
cE:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.gio(s)
if(t)s.b9()}},
aD:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].c8())s=!1
return s},
c7:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].c6())s=!1
return s},
i:function(a){return this.V()},
K:function(a){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].K(a))
return C.a.m(r,"\n")},
V:function(){return this.K("")},
sfi:function(a){this.b=H.m(a,"$ib",[F.a9],"$ab")}}
F.it.prototype={
gn:function(a){return this.b.length},
cF:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.bb(0,p,n)){p.b9()
break}}}}},
cE:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.U(s.a,s.b)
if(t)s.b9()}},
i:function(a){return this.V()},
K:function(a){var u,t,s=H.d([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
C.a.h(s,t[u].K(a+(""+u+". ")))}return C.a.m(s,"\n")},
V:function(){return this.K("")},
sfo:function(a){this.b=H.m(a,"$ib",[F.bJ],"$ab")}}
F.iu.prototype={
gn:function(a){return 0},
ja:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.e(t,u)
t=t[u].gjM()
t=t.gjJ(t)
if(t.gn(t).a3(0,1)){t=this.b
return H.e(t,u)
t[u].b9()}}},
i:function(a){return this.V()},
K:function(a){var u,t,s=H.d([],[P.h])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.e(u,t)
C.a.h(s,u[t].K(a))}return C.a.m(s,"\n")},
V:function(){return this.K("")},
sbZ:function(a){this.b=H.m(a,"$ib",[F.ca],"$ab")}}
F.aw.prototype={
dP:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.jw(u.cx,r,o,t,s,q,p,a,n)},
iP:function(a){var u,t,s=this
if(a.t(0,$.aD())){u=s.f
t=[P.E]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.bv())){u=s.r
t=[P.E]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.bu())){u=s.x
t=[P.E]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.bk())){u=s.y
t=[P.E]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.t(0,$.bX())){u=s.z
t=[P.E]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.du())){u=s.Q
t=[P.E]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.dv())){u=s.Q
t=[P.E]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.cw()))return H.d([s.ch],[P.E])
else if(a.t(0,$.bt())){u=s.cx
t=[P.E]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.E])},
c8:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d7()
t.d.A(0,new F.jH(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.al()
s=t.a.e
if(s!=null)s.aJ(0)}return!0},
c6:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d7()
t.d.A(0,new F.jG(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.al()
s=t.a.e
if(s!=null)s.aJ(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.V()},
K:function(a){var u,t,s=this,r="-",q=H.d([],[P.h])
C.a.h(q,C.b.aG(J.aN(s.e),0))
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
C.a.h(q,V.Y(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
V:function(){return this.K("")}}
F.jH.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.F(0,u)}},
$S:9}
F.jG.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.F(0,u)}},
$S:9}
F.jx.prototype={
E:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.C("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.al()
return!0},
bn:function(a,b,c,d,e,f){var u=F.jw(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gn:function(a){return this.c.length},
aD:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].c8()
return!0},
c7:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].c6()
return!0},
im:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.U(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.C(null)}}}}return!0},
i:function(a){return this.V()},
K:function(a){var u,t,s,r
this.E()
u=H.d([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].K(a))
return C.a.m(u,"\n")},
V:function(){return this.K("")},
si7:function(a){this.c=H.m(a,"$ib",[F.aw],"$ab")}}
F.jy.prototype={
gn:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.e(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.e(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.e(t,b)
return t[b]},
A:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a9]})
C.a.A(u.b,b)
C.a.A(u.c,new F.jz(u,b))
C.a.A(u.d,new F.jA(u,b))},
i:function(a){return this.V()},
V:function(){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].K(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].K(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].K(""))
return C.a.m(r,"\n")},
sfj:function(a){this.b=H.m(a,"$ib",[F.a9],"$ab")},
sfk:function(a){this.c=H.m(a,"$ib",[F.a9],"$ab")},
sfl:function(a){this.d=H.m(a,"$ib",[F.a9],"$ab")}}
F.jz.prototype={
$1:function(a){H.f(a,"$ia9")
if(!J.U(a.a,this.a))this.b.$1(a)},
$S:9}
F.jA.prototype={
$1:function(a){var u
H.f(a,"$ia9")
u=this.a
if(!J.U(a.a,u)&&!J.U(a.b,u))this.b.$1(a)},
$S:9}
F.jB.prototype={
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.e(t,u)
return t[u]}else{if(b<0)return H.e(t,b)
return t[b]}},
i:function(a){return this.V()},
V:function(){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].K(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].K(""))
return C.a.m(r,"\n")},
sfp:function(a){this.b=H.m(a,"$ib",[F.bJ],"$ab")},
sfq:function(a){this.c=H.m(a,"$ib",[F.bJ],"$ab")}}
F.jD.prototype={}
F.jC.prototype={
bb:function(a,b,c){return J.U(b.f,c.f)}}
F.jE.prototype={}
F.i6.prototype={
iS:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[F.aw],"$ab")
u=V.d7()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.R(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.v(0,Math.sqrt(u.B(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.x)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.v(0,Math.sqrt(o*o+n*n+m*m))}if(!J.U(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.C(null)}}}return}}
F.jF.prototype={
gn:function(a){return 0},
i:function(a){return this.V()},
V:function(){var u,t,s=H.d([],[P.h])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.e(u,t)
C.a.h(s,u[t].K(""))}return C.a.m(s,"\n")},
sbZ:function(a){this.b=H.m(a,"$ib",[F.ca],"$ab")}}
O.fY.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.Q():u},
at:function(){var u=this.r
if(u!=null)u.C(null)},
sdO:function(a){if(this.b!=a){this.b=a
this.at()}},
sdM:function(a){if(this.c!=a){this.c=a
this.at()}},
sdL:function(a){var u=a==null?V.bK():a
this.f=u
if(!J.U(u,a)){this.f=a
this.at()}},
ah:function(a,b){},
bj:function(a,b){H.m(a,"$ib",[T.bP],"$ab")
if(b!=null)if(!C.a.U(a,b)){b.a=a.length
C.a.h(a,b)}},
cG:function(a,b){var u,t,s,r,q,p,o,n=this,m="Distort"
if(n.a==null){u=H.f(a.fr.j(0,m),"$idI")
if(u==null){t=a.a
u=new A.dI(t,m)
u.bF(t,m)
u.co(0,"uniform mat4 projViewObjMat;                             \nuniform mat3 colorTxt2DMat;                              \nuniform mat3 bumpTxt2DMat;                               \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec2 txt2DAttr;                                \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvoid main()                                              \n{                                                        \n   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n}                                                        \n","precision mediump float;                           \n                                                   \nuniform sampler2D colorTxt;                        \nuniform sampler2D bumpTxt;                         \nuniform mat4 bumpMat;                              \n                                                   \nvarying vec2 colorTxt2D;                           \nvarying vec2 bumpTxt2D;                            \n                                                   \nvec2 offset()                                      \n{                                                  \n   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb; \n   txt2D = normalize(txt2D*2.0 - 1.0);             \n   return (bumpMat * vec4(txt2D, 1.0)).xy;         \n}                                                  \n                                                   \nvoid main()                                        \n{                                                  \n   vec2 txt2D = colorTxt2D + offset();             \n   gl_FragColor = texture2D(colorTxt, txt2D);      \n}                                                  \n")
u.z=u.x.j(0,"posAttr")
u.Q=u.x.j(0,"txt2DAttr")
u.ch=H.r(u.y.M(0,"projViewObjMat"),"$iak")
u.cx=H.r(u.y.M(0,"colorTxt2DMat"),"$ibR")
u.cy=H.r(u.y.M(0,"bumpTxt2DMat"),"$ibR")
u.db=H.r(u.y.M(0,"colorTxt"),"$ibq")
u.dx=H.r(u.y.M(0,"bumpTxt"),"$ibq")
u.dy=H.r(u.y.M(0,"bumpMat"),"$iak")
a.c3(u)}n.a=u}if(b.e==null){t=b.d
s=$.aD()
r=$.bk()
r=t.c5(new Z.d8(a.a),new Z.br(s.a|r.a))
r.au($.aD()).e=n.a.z.c
r.au($.bk()).e=n.a.Q.c
b.e=r}q=H.d([],[T.bP])
n.bj(q,n.b)
n.bj(q,n.c)
for(t=a.a,p=0;p<q.length;++p){s=q[p]
if(!s.c&&s.d){s.c=!0
t.activeTexture(33984+s.a)
t.bindTexture(3553,s.b)}}s=n.a
s.a0(a)
r=n.b
s.dz(s.db,r)
r=n.c
s.dz(s.dx,r)
r=a.geg()
o=s.ch
o.toString
o.a8(r.a4(0,!0))
r=n.d
o=s.cx
o.toString
o.a8(r.a4(0,!0))
r=n.e
o=s.cy
o.toString
o.a8(r.a4(0,!0))
r=n.f
s=s.dy
s.toString
s.a8(r.a4(0,!0))
s=b.e
if(s instanceof Z.c_){s.a0(a)
s.ag(a)
s.am(a)}else b.e=null
s=n.a
s.toString
t.useProgram(null)
s.x.cc()
for(p=0;p<q.length;++p){s=q[p]
if(s.c){s.c=!1
t.activeTexture(33984+s.a)
t.bindTexture(3553,null)}}}}
O.e_.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.Q():u},
a6:function(a){var u
H.f(a,"$iz")
u=this.fr
if(u!=null)u.C(a)},
at:function(){return this.a6(null)},
dq:function(a){H.f(a,"$iz")
this.a=null
this.a6(a)},
hH:function(){return this.dq(null)},
fH:function(a,b){var u=V.at
H.m(b,"$ij",[u],"$aj")
u=new D.bF([u])
u.b=!0
this.a6(u)},
fJ:function(a,b){var u=V.at
H.m(b,"$ij",[u],"$aj")
u=new D.bG([u])
u.b=!0
this.a6(u)},
d6:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.l,h=new H.a3([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=h.j(0,0)
h.k(0,0,r==null?1:r)}q=H.d([],[A.aP])
h.A(0,new O.hN(j,q))
C.a.bD(q,new O.hO())
p=new H.a3([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){o=u[s]
r=o.gb8()
n=p.j(0,o.gb8())
p.k(0,r,n==null?1:n)}m=H.d([],[A.aT])
p.A(0,new O.hP(j,m))
C.a.bD(m,new O.hQ())
l=new H.a3([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.x)(i),++s){o=i[s]
t=o.gb8()
r=l.j(0,o.gb8())
l.k(0,t,r==null?1:r)}k=H.d([],[A.aX])
l.A(0,new O.hR(j,k))
C.a.bD(k,new O.hS())
i=C.d.ae(j.e.a.length+3,4)
j.dy.e
return A.nU(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
bj:function(a,b){H.m(a,"$ib",[T.bP],"$ab")},
ah:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.as(u,u.length,[H.q(u,0)]);u.w();){t=u.d
t.toString
s=$.jv
if(s==null)s=$.jv=new V.R(0,0,1)
t.a=s
r=$.ju
t.d=r==null?$.ju=new V.R(0,1,0):r
r=$.jt
t.e=r==null?$.jt=new V.R(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.by(s)
r=s.a
p=s.b
o=s.c
t.a=s.v(0,Math.sqrt(r*r+p*p+o*o))
o=q.by(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.v(0,Math.sqrt(p*p+r*r+s*s))
s=q.by(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.v(0,Math.sqrt(r*r+p*p+o*o))}}}},
cG:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.d6()
u=H.f(b4.fr.j(0,b3.ba),"$ie0")
if(u==null){u=A.nT(b3,b4.a)
b4.c3(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.dT
b3=b5.e
if(!(b3 instanceof Z.c_))b3=b5.e=null
if(b3==null||!b3.d.t(0,s)){b3=t.k3
if(b3)b5.d.aD()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.c7()
q.a.c7()
q=q.e
if(q!=null)q.aJ(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.im()
p=p.e
if(p!=null)p.aJ(0)}n=b5.d.c5(new Z.d8(b4.a),s)
n.au($.aD()).e=b2.a.Q.c
if(b3)n.au($.bv()).e=b2.a.cx.c
if(r)n.au($.bu()).e=b2.a.ch.c
if(t.r1)n.au($.bk()).e=b2.a.cy.c
if(q)n.au($.bX()).e=b2.a.db.c
if(t.rx)n.au($.bt()).e=b2.a.dx.c
b5.e=n}b3=T.bP
m=H.d([],[b3])
b2.a.a0(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.ga7(q)
r=r.dy
r.toString
r.a8(q.a4(0,!0))}if(t.fr){r=b2.a
q=b4.cx
if(q==null){q=b4.db
q=q.ga7(q)
p=b4.dx
p=b4.cx=q.u(0,p.ga7(p))
q=p}r=r.fr
r.toString
r.a8(q.a4(0,!0))}r=b2.a
q=b4.geg()
r=r.fy
r.toString
r.a8(q.a4(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.a8(C.k.a4(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.a8(C.k.a4(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.a8(C.k.a4(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.c.bz(r.a,r.d,l)
for(r=[P.E],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.e(p,k)
p=p[k]
q.toString
H.f(p,"$iat")
q=q.r1
if(k>=q.length)return H.e(q,k)
q=q[k]
j=new Float32Array(H.cm(H.m(p.a4(0,!0),"$ib",r,"$ab")))
C.c.eu(q.a,q.d,!1,j)}}if(t.a.a){r=b2.a
q=b2.f.f
r=r.r2
C.c.Y(r.a,r.d,q.a,q.b,q.c)}if(t.id){if(t.b.a){r=b2.a
q=b2.r.f
r=r.x1
C.c.Y(r.a,r.d,q.a,q.b,q.c)}if(t.c.a){r=b2.a
q=b2.x.f
r=r.y2
C.c.Y(r.a,r.d,q.a,q.b,q.c)}if(t.d.a){r=b2.a
q=b2.y.f
r=r.dU
C.c.Y(r.a,r.d,q.a,q.b,q.c)}r=t.e.a
if(!r)q=!1
else q=!0
if(q){q=b2.a
p=b2.z.ch
q=q.dW
C.c.a5(q.a,q.d,p)}if(r){r=b2.a
q=b2.z.f
r=r.dV
C.c.Y(r.a,r.d,q.a,q.b,q.c)}r=t.z
if(r.length>0){q=b4.db
i=q.ga7(q)
q=P.l
h=new H.a3([q,q])
for(q=b2.dx.e,p=q.length,g=0;g<q.length;q.length===p||(0,H.x)(q),++g){f=q[g]
e=h.j(0,0)
if(e==null)e=0
h.k(0,0,e+1)
d=J.dw(b2.a.cf.j(0,0),e)
o=i.by(f.a)
c=o.a
b=o.b
a=o.c
a=o.v(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
o=a.b
a=a.c
C.c.Y(b.a,b.d,c,o,a)
a=f.c
o=d.f
C.c.Y(o.a,o.d,a.a,a.b,a.c)}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.x)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.ce.j(0,p)
C.c.bz(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.ga7(q)
q=P.l
a0=new H.a3([q,q])
for(q=b2.dx.f,p=q.length,o=[b3],c=[P.E],g=0;g<q.length;q.length===p||(0,H.x)(q),++g){f=q[g]
a1=f.gb8()
e=a0.j(0,a1)
if(e==null)e=0
a0.k(0,a1,e+1)
d=J.dw(b2.a.ci.j(0,a1),e)
a2=i.u(0,f.ga7(f))
b=f.ga7(f)
a=$.cS
b=b.cJ(a==null?$.cS=new V.ab(0,0,0):a)
a=d.b
C.c.Y(a.a,a.d,b.a,b.b,b.c)
b=$.cS
b=a2.cJ(b==null?$.cS=new V.ab(0,0,0):b)
a=d.c
C.c.Y(a.a,a.d,b.a,b.b,b.c)
b=f.gb7(f)
a=d.e
C.c.Y(a.a,a.d,b.a,b.b,b.c)
f.gaK()
b=a2.cr(0)
a=b.a
a3=b.b
a4=b.c
a5=b.e
a6=b.f
a7=b.r
a8=b.y
a9=b.z
b=b.Q
b0=d.d
b0.toString
j=new Float32Array(H.cm(H.m(new V.cK(a,a3,a4,a5,a6,a7,a8,a9,b).a4(0,!0),"$ib",c,"$ab")))
C.c.es(b0.a,b0.d,!1,j)
f.gaK()
b=f.gaK()
H.m(m,"$ib",o,"$ab")
if(!C.a.U(m,b)){b.scn(0,m.length)
C.a.h(m,b)}b=f.gaK()
a=b.gct(b)
if(a){a=d.f
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}f.gaZ()
b=f.geD()
a=d.x
a.toString
a3=b.gix(b)
a4=b.giy(b)
a5=b.giz()
b=b.giw()
C.c.er(a.a,a.d,a3,a4,a5,b)
b=f.gaZ()
if(!C.a.U(m,b)){b.scn(0,m.length)
C.a.h(m,b)}b=f.gaZ()
a=b.gct(b)
if(a){a=d.r
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}if(f.giB()){b=f.gih()
a=d.y
C.c.a5(a.a,a.d,b)
b=f.gii()
a=d.z
C.c.a5(a.a,a.d,b)
b=f.gij()
a=d.Q
C.c.a5(a.a,a.d,b)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.x)(r),++g){p=r[g].a
l=a0.j(0,p)
if(l==null)l=0
p=b2.a.cg.j(0,p)
C.c.bz(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.ga7(q)
q=P.l
b1=new H.a3([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.x)(q),++g){f=q[g]
a1=f.gb8()
e=b1.j(0,a1)
if(e==null)e=0
b1.k(0,a1,e+1)
d=J.dw(b2.a.ck.j(0,a1),e)
o=f.gj7(f)
c=d.b
C.c.Y(c.a,c.d,o.a,o.b,o.c)
o=f.gjq(f).jI()
c=d.c
C.c.Y(c.a,c.d,o.a,o.b,o.c)
o=i.cJ(f.gj7(f))
c=d.d
C.c.Y(c.a,c.d,o.a,o.b,o.c)
o=f.gb7(f)
c=d.e
C.c.Y(c.a,c.d,o.a,o.b,o.c)
f.gaK()
o=f.gcK()
c=d.f
C.c.Y(c.a,c.d,o.a,o.b,o.c)
o=f.gcH(f)
c=d.r
C.c.Y(c.a,c.d,o.a,o.b,o.c)
o=f.gjK()
c=d.x
C.c.a5(c.a,c.d,o)
o=f.gjL()
c=d.y
C.c.a5(c.a,c.d,o)
f.gaK()
o=f.gaK()
H.m(m,"$ib",b3,"$ab")
if(!C.a.U(m,o)){o.scn(0,m.length)
C.a.h(m,o)}o=f.gaK()
c=o.gct(o)
if(c){c=d.dx
c.toString
b=o.d
if(!b)c.a.uniform1i(c.d,0)
else{o=o.a
c.a.uniform1i(c.d,o)}}f.gaZ()
o=f.geD()
c=d.z
c.toString
b=o.gix(o)
a=o.giy(o)
a3=o.giz()
o=o.giw()
C.c.er(c.a,c.d,b,a,a3,o)
o=f.gaZ()
if(!C.a.U(m,o)){o.scn(0,m.length)
C.a.h(m,o)}o=f.gaZ()
c=o.gct(o)
if(c){c=d.dy
c.toString
b=o.d
if(!b)c.a.uniform1i(c.d,0)
else{o=o.a
c.a.uniform1i(c.d,o)}}if(f.gjr()){o=f.gjp()
c=d.Q
C.c.a5(c.a,c.d,o)
o=f.gjo()
c=d.ch
C.c.a5(c.a,c.d,o)}if(f.giB()){o=f.gih()
c=d.cx
C.c.a5(c.a,c.d,o)
o=f.gii()
c=d.cy
C.c.a5(c.a,c.d,o)
o=f.gij()
c=d.db
C.c.a5(c.a,c.d,o)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.x)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.cj.j(0,q)
C.c.bz(q.a,q.d,l)}}}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.ga7(r).cr(0)}b3=b3.id
b3.toString
b3.a8(r.a4(0,!0))}if(t.cy){b2.bj(m,b2.ch)
b3=b2.a
r=b2.ch
b3.hL(b3.dX,r)
if(t.r.a){b3=b2.a
r=b2.cx.f
b3=b3.dY
C.c.Y(b3.a,b3.d,r.a,r.b,r.c)}b3=t.x.a
if(!b3)r=!1
else r=!0
if(r){r=b2.a
q=b2.cy.ch
r=r.dZ
C.c.a5(r.a,r.d,q)}if(b3){b3=b2.a
r=b2.cy.f
b3=b3.e_
C.c.Y(b3.a,b3.d,r.a,r.b,r.c)}}b3=t.y.a
r=!b3
if(r)q=!1
else q=!0
if(q){if(b3){b3=b2.a
q=b2.db.f
b3=b3.e0
C.c.a5(b3.a,b3.d,q)}b3=b4.a
b3.enable(3042)
b3.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].a0(b4)
b3=b5.e
b3.a0(b4)
b3.ag(b4)
b3.am(b4)
if(r)b3=!1
else b3=!0
if(b3)b4.a.disable(3042)
for(k=0;k<m.length;++k)m[k].am(b4)
b3=b2.a
b3.toString
b4.a.useProgram(null)
b3.x.cc()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.d6().ba},
sf4:function(a){this.e=H.m(a,"$ia2",[V.at],"$aa2")}}
O.hN.prototype={
$2:function(a,b){H.ad(a)
H.ad(b)
if(typeof b!=="number")return b.F()
return C.a.h(this.b,new A.aP(a,C.d.ae(b+3,4)*4))},
$S:14}
O.hO.prototype={
$2:function(a,b){H.f(a,"$iaP")
H.f(b,"$iaP")
return J.l2(a.a,b.a)},
$S:49}
O.hP.prototype={
$2:function(a,b){H.ad(a)
H.ad(b)
if(typeof b!=="number")return b.F()
return C.a.h(this.b,new A.aT(a,C.d.ae(b+3,4)*4))},
$S:14}
O.hQ.prototype={
$2:function(a,b){H.f(a,"$iaT")
H.f(b,"$iaT")
return J.l2(a.a,b.a)},
$S:50}
O.hR.prototype={
$2:function(a,b){H.ad(a)
H.ad(b)
if(typeof b!=="number")return b.F()
return C.a.h(this.b,new A.aX(a,C.d.ae(b+3,4)*4))},
$S:14}
O.hS.prototype={
$2:function(a,b){H.f(a,"$iaX")
H.f(b,"$iaX")
return J.l2(a.a,b.a)},
$S:51}
O.hH.prototype={
aB:function(){var u,t=this
t.cS()
u=t.f
if(!(Math.abs(u-1)<$.O().a)){t.f=1
u=new D.J(t.b,u,1,[P.E])
u.b=!0
t.a.a6(u)}}}
O.e1.prototype={
aB:function(){},
dv:function(a){var u,t,s=this
if(!s.c.t(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aB()
u=s.a
u.a=null
u.a6(null)}}}
O.hI.prototype={}
O.ba.prototype={
dt:function(a){var u,t,s=this
if(!s.f.t(0,a)){u=s.f
s.f=a
t=new D.J(s.b+".color",u,a,[V.a7])
t.b=!0
s.a.a6(t)}},
aB:function(){this.cS()
this.dt(new V.a7(1,1,1))},
sb7:function(a,b){this.dv(new A.ap(!0,!1,!1))
this.dt(b)}}
O.hK.prototype={}
O.hL.prototype={
aB:function(){var u,t=this
t.cT()
u=t.ch
if(!(Math.abs(u-1)<$.O().a)){t.ch=1
u=new D.J(t.b+".refraction",u,1,[P.E])
u.b=!0
t.a.a6(u)}}}
O.hM.prototype={
dw:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.O().a)){u.ch=a
t=new D.J(u.b+".shininess",t,a,[P.E])
t.b=!0
u.a.a6(t)}},
aB:function(){this.cT()
this.dw(100)}}
O.ee.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.Q():u},
a6:function(a){var u
H.f(a,"$iz")
u=this.e
if(u!=null)u.C(a)},
at:function(){return this.a6(null)},
ah:function(a,b){},
cG:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.f(a.fr.j(0,n),"$ief")
if(u==null){t=a.a
u=new A.ef(t,n)
u.bF(t,n)
u.co(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.r(u.y.j(0,"fov"),"$iac")
u.ch=H.r(u.y.j(0,"ratio"),"$iac")
u.cx=H.r(u.y.j(0,"boxClr"),"$iZ")
u.cy=H.r(u.y.j(0,"boxTxt"),"$ibS")
u.db=H.r(u.y.j(0,"viewMat"),"$iak")
a.c3(u)}o.a=u}if(b.e==null){t=b.d.c5(new Z.d8(a.a),$.aD())
t.au($.aD()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
s.activeTexture(33985)
s.bindTexture(34067,t.b)}}t=a.d
s=a.c
r=o.a
r.a0(a)
q=o.b
p=r.Q
C.c.a5(p.a,p.d,q)
q=r.ch
C.c.a5(q.a,q.d,t/s)
s=o.c
r.cy.eC(s)
s=o.d
t=r.cx
C.c.Y(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga7(s).cr(0)
r=r.db
r.toString
r.a8(s.a4(0,!0))
t=b.e
if(t instanceof Z.c_){t.a0(a)
t.ag(a)
t.am(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.cc()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.bO.prototype={}
T.bP.prototype={}
T.iQ.prototype={}
T.iU.prototype={
du:function(){if(!this.d){this.d=!0
var u=this.y
if(u!=null)u.cd()}}}
T.el.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.Q():u}}
T.iV.prototype={
iQ:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.l9(a)
t=T.lj(q)
r=W.o
W.a8(u,"load",H.n(new T.iX(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
aO:function(a,b,c,d,e,f){var u,t=W.l9(c);++this.d
u=W.o
W.a8(t,"load",H.n(new T.iW(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
ds:function(a,b,c){var u,t,s,r
b=V.dt(b)
u=V.dt(a.width)
t=V.dt(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.l5()
s.width=u
s.height=t
r=H.f(C.j.ey(s,"2d"),"$icA")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.po(r.getImageData(0,0,s.width,s.height))}}}
T.iX.prototype={
$1:function(a){var u,t,s=this,r=3553,q=s.b,p=s.c
q.e=p.width
q.f=p.height
u=s.a
t=u.ds(p,u.b,s.d)
q.r=p.width
q.x=p.height
p=u.a
p.bindTexture(r,s.e)
p.pixelStorei(37440,s.f?1:0)
C.c.em(p,r,0,6408,6408,5121,t)
if(s.r)p.generateMipmap(r)
p.bindTexture(r,null)
q.du();++u.e},
$S:11}
T.iW.prototype={
$1:function(a){var u=this,t=u.a,s=t.ds(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.c.em(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.cd()}++t.e},
$S:11}
V.bl.prototype={
aF:function(a,b){return!0},
i:function(a){return"all"},
$iaz:1}
V.az.prototype={}
V.dZ.prototype={
aF:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)if(u[s].aF(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sac:function(a){this.a=H.m(a,"$ib",[V.az],"$ab")},
$iaz:1}
V.au.prototype={
aF:function(a,b){return!this.eI(0,b)},
i:function(a){return"!["+this.cR(0)+"]"}}
V.ih.prototype={
aF:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.cc(this.a),t=H.cc(this.b)
return u+".."+t},
$iaz:1}
V.ir.prototype={
eN:function(a){var u,t
if(a.a.length<=0)throw H.c(P.C("May not create a SetMatcher with zero characters."))
u=new H.a3([P.l,P.P])
for(t=new H.cJ(a,a.gn(a),[H.al(a,"w",0)]);t.w();)u.k(0,t.d,!0)
this.shK(u)},
aF:function(a,b){return this.a.bo(0,b)},
i:function(a){var u=this.a
return P.d0(u.gaa(u),0,null)},
shK:function(a){this.a=H.m(a,"$iy",[P.l,P.P],"$ay")},
$iaz:1}
V.cY.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d4(this.a.l(0,b))
r.sac(H.d([],[V.az]))
r.c=!1
C.a.h(this.c,r)
return r},
iE:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.aF(0,a))return r}return},
i:function(a){return this.b},
si5:function(a){this.c=H.m(a,"$ib",[V.d4],"$ab")}}
V.en.prototype={
i:function(a){var u=H.lH(this.b,"\n","\\n"),t=H.lH(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d3.prototype={
aI:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.h],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.x)(c),++t){s=c[t]
this.c.k(0,s,b)}},
i:function(a){return this.b},
shD:function(a){var u=P.h
this.c=H.m(a,"$iy",[u,u],"$ay")}}
V.j_.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cY(this,b)
u.si5(H.d([],[V.d4]))
u.d=null
this.a.k(0,b,u)}return u},
N:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.d3(a)
u=P.h
t.shD(new H.a3([u,u]))
this.b.k(0,a,t)}return t},
eq:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.en]),k=this.c,j=[P.l],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.D(a,s)
q=k.iE(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.d0(i,0,m)
throw H.c(P.C("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.d0(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.en(n==null?o.b:n,p,s)}++s}}},
shW:function(a){this.a=H.m(a,"$iy",[P.h,V.cY],"$ay")},
shZ:function(a){this.b=H.m(a,"$iy",[P.h,V.d3],"$ay")}}
V.d4.prototype={
i:function(a){return this.b.b+": "+this.cR(0)}}
X.fG.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.Q():u},
a2:function(a){var u=this.fr
if(u!=null)u.C(a)},
sar:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.J("width",u,b,[P.l])
u.b=!0
t.a2(u)}},
sap:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.J("height",u,b,[P.l])
u.b=!0
t.a2(u)}},
a0:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){u=a.a
t=u.drawingBufferWidth
s=h.r
if(typeof t!=="number")return t.u()
h.sar(0,C.d.a1(t*s))
u=u.drawingBufferHeight
s=h.x
if(typeof u!=="number")return u.u()
h.sap(0,C.d.a1(u*s))}if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=H.ad(u.getParameter(3379))
p=V.dt(s)
o=V.dt(r)
q=V.dt(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.c.en(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.lj(n)
m.e=s
m.f=r
m.r=p
m.x=o
m.du()
t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.cd()
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
a.c=C.e.a1(s*h.a)
r=t.d
a.d=C.e.a1(r*h.b)
l=t.a
k=h.c
if(typeof k!=="number")return H.B(k)
j=C.e.a1(l*k)
t=t.b
l=h.d
if(typeof l!=="number")return H.B(l)
u.viewport(j,C.e.a1(t*l),C.e.a1(s*k),C.e.a1(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
am:function(a){a.a.bindFramebuffer(36160,null)}}
X.c0.prototype={$ic9:1}
X.hg.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.Q():u},
a0:function(a){var u,t,s,r,q,p,o=a.a
o.bindFramebuffer(36160,null)
o.enable(2884)
o.enable(2929)
o.depthFunc(513)
u=o.drawingBufferWidth
t=o.drawingBufferHeight
s=this.r
r=s.a
if(typeof u!=="number")return H.B(u)
q=C.e.a1(r*u)
r=s.b
if(typeof t!=="number")return H.B(t)
p=C.e.a1(r*t)
r=C.e.a1(s.c*u)
a.c=r
s=C.e.a1(s.d*t)
a.d=s
o.viewport(q,p,r,s)
o.clearDepth(this.c)
s=this.a
o.clearColor(s.a,s.b,s.c,s.d)
o.clear(16640)},
am:function(a){}}
X.hm.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.Q():u},
a0:function(a){var u
a.cy.bw(V.bK())
u=V.bK()
a.db.bw(u)},
am:function(a){a.cy.aH()
a.db.aH()},
$ic9:1,
$ic0:1}
X.e7.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.Q():u},
a2:function(a){var u
H.f(a,"$iz")
u=this.f
if(u!=null)u.C(a)},
eZ:function(){return this.a2(null)},
a0:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.bb(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bw(k)
r=$.m9
if(r==null){r=V.mb()
q=V.lo()
p=$.mu
r=V.m3(r,q,p==null?$.mu=new V.R(0,0,-1):p)
$.m9=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aX(0,a,s)
if(t!=null)u=t.u(0,u)}a.db.bw(u)},
am:function(a){a.cy.aH()
a.db.aH()},
$ic9:1,
$ic0:1}
X.d1.prototype={}
V.bz.prototype={
bh:function(a){this.b=new P.hk(C.Q)
this.c=null
this.sbO(H.d([],[[P.b,W.aF]]))},
L:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aF]))
u=a.split("\n")
for(l=u.length,t=[W.aF],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.M(q)
o=m.b.fa(q,0,q.length)
n=o==null?q:o
C.O.eA(p,H.lH(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gay(m.d),p)}},
ee:function(a,b){var u,t,s,r,q=this
H.m(b,"$ib",[P.h],"$ab")
q.sbO(H.d([],[[P.b,W.aF]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bp():t).eq(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)q.bv(t[r])},
sbO:function(a){this.d=H.m(a,"$ib",[[P.b,W.aF]],"$ab")}}
V.kY.prototype={
$1:function(a){var u
H.f(a,"$ibe")
u=C.e.ep(this.a.giI(),2)
if(u!=="0.00")P.lG(u+" fps")},
$S:53}
V.fW.prototype={
bv:function(a){var u=this
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
bp:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.j0()
a1.c=a1.l(0,r)
u=a1.l(0,r).m(0,q)
t=V.v(new H.t("_"))
C.a.h(u.a,t)
t=V.a0("a","z")
C.a.h(u.a,t)
t=V.a0("A","Z")
C.a.h(u.a,t)
t=a1.l(0,q).m(0,q)
u=V.v(new H.t("_"))
C.a.h(t.a,u)
u=V.a0("0","9")
C.a.h(t.a,u)
u=V.a0("a","z")
C.a.h(t.a,u)
u=V.a0("A","Z")
C.a.h(t.a,u)
u=a1.l(0,r).m(0,p)
t=V.a0("0","9")
C.a.h(u.a,t)
t=a1.l(0,p).m(0,p)
u=V.a0("0","9")
C.a.h(t.a,u)
u=a1.l(0,p).m(0,o)
t=V.v(new H.t("."))
C.a.h(u.a,t)
t=a1.l(0,o).m(0,n)
u=V.a0("0","9")
C.a.h(t.a,u)
u=a1.l(0,n).m(0,n)
t=V.a0("0","9")
C.a.h(u.a,t)
t=a1.l(0,r).m(0,m)
u=V.v(new H.t(l))
C.a.h(t.a,u)
u=a1.l(0,m).m(0,m)
t=V.v(new H.t(l))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,k)
u=V.v(new H.t('"'))
C.a.h(t.a,u)
u=a1.l(0,k).m(0,j)
t=V.v(new H.t('"'))
C.a.h(u.a,t)
t=a1.l(0,k).m(0,i)
u=V.v(new H.t("\\"))
C.a.h(t.a,u)
u=a1.l(0,i).m(0,k)
t=V.v(new H.t('"'))
C.a.h(u.a,t)
C.a.h(a1.l(0,k).m(0,k).a,new V.bl())
t=a1.l(0,r).m(0,h)
u=V.v(new H.t("'"))
C.a.h(t.a,u)
u=a1.l(0,h).m(0,g)
t=V.v(new H.t("'"))
C.a.h(u.a,t)
t=a1.l(0,h).m(0,f)
u=V.v(new H.t("\\"))
C.a.h(t.a,u)
u=a1.l(0,f).m(0,h)
t=V.v(new H.t("'"))
C.a.h(u.a,t)
C.a.h(a1.l(0,h).m(0,h).a,new V.bl())
t=a1.l(0,r).m(0,e)
u=V.v(new H.t("/"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,d)
t=V.v(new H.t("/"))
C.a.h(u.a,t)
t=a1.l(0,d).m(0,c)
u=V.v(new H.t("\n"))
C.a.h(t.a,u)
u=a1.l(0,d).m(0,d)
t=new V.au()
s=[V.az]
t.sac(H.d([],s))
C.a.h(u.a,t)
u=V.v(new H.t("\n"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,b)
t=V.v(new H.t("*"))
C.a.h(u.a,t)
t=a1.l(0,b).m(0,a)
u=V.v(new H.t("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,b)
t=new V.au()
t.sac(H.d([],s))
C.a.h(u.a,t)
u=V.v(new H.t("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,c)
t=V.v(new H.t("/"))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,a0)
u=V.v(new H.t(" \n\t"))
C.a.h(t.a,u)
u=a1.l(0,a0).m(0,a0)
t=V.v(new H.t(" \n\t"))
C.a.h(u.a,t)
t=a1.l(0,p)
t.d=t.a.N("Num")
t=a1.l(0,n)
t.d=t.a.N("Num")
t=a1.l(0,m)
t.d=t.a.N("Symbol")
t=a1.l(0,j)
t.d=t.a.N("String")
t=a1.l(0,g)
t.d=t.a.N("String")
t=a1.l(0,c)
t.d=t.a.N(d)
t=a1.l(0,a0)
t.d=t.a.N(a0)
t=a1.l(0,q)
t=t.d=t.a.N(q)
u=[P.h]
t.aI(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aI(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aI(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.hh.prototype={
bv:function(a){var u=this
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
bp:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.j0()
e.c=e.l(0,r)
u=e.l(0,r).m(0,q)
t=V.v(new H.t("_"))
C.a.h(u.a,t)
t=V.a0("a","z")
C.a.h(u.a,t)
t=V.a0("A","Z")
C.a.h(u.a,t)
t=e.l(0,q).m(0,q)
u=V.v(new H.t("_"))
C.a.h(t.a,u)
u=V.a0("0","9")
C.a.h(t.a,u)
u=V.a0("a","z")
C.a.h(t.a,u)
u=V.a0("A","Z")
C.a.h(t.a,u)
u=e.l(0,r).m(0,p)
t=V.a0("0","9")
C.a.h(u.a,t)
t=e.l(0,p).m(0,p)
u=V.a0("0","9")
C.a.h(t.a,u)
u=e.l(0,p).m(0,o)
t=V.v(new H.t("."))
C.a.h(u.a,t)
t=e.l(0,o).m(0,n)
u=V.a0("0","9")
C.a.h(t.a,u)
u=e.l(0,n).m(0,n)
t=V.a0("0","9")
C.a.h(u.a,t)
t=e.l(0,r).m(0,m)
u=V.v(new H.t(l))
C.a.h(t.a,u)
u=e.l(0,m).m(0,m)
t=V.v(new H.t(l))
C.a.h(u.a,t)
t=e.l(0,r).m(0,k)
u=V.v(new H.t("/"))
C.a.h(t.a,u)
u=e.l(0,k).m(0,j)
t=V.v(new H.t("/"))
C.a.h(u.a,t)
C.a.h(e.l(0,k).m(0,m).a,new V.bl())
t=e.l(0,j).m(0,i)
u=V.v(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,j).m(0,j)
t=new V.au()
s=[V.az]
t.sac(H.d([],s))
C.a.h(u.a,t)
u=V.v(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,h)
t=V.v(new H.t("#"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,h)
u=new V.au()
u.sac(H.d([],s))
C.a.h(t.a,u)
t=V.v(new H.t("\n"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,g)
u=V.v(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,f)
t=V.v(new H.t(" \n\t"))
C.a.h(u.a,t)
t=e.l(0,f).m(0,f)
u=V.v(new H.t(" \n\t"))
C.a.h(t.a,u)
u=e.l(0,p)
u.d=u.a.N("Num")
u=e.l(0,n)
u.d=u.a.N("Num")
u=e.l(0,m)
u.d=u.a.N("Symbol")
u=e.l(0,i)
u.d=u.a.N(j)
u=e.l(0,g)
u.d=u.a.N(h)
u=e.l(0,f)
u.d=u.a.N(f)
u=e.l(0,q)
u=u.d=u.a.N(q)
t=[P.h]
u.aI(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aI(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aI(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.hi.prototype={
bv:function(a){var u=this,t="#111"
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
bp:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.j0()
l.c=l.l(0,s)
u=l.l(0,s).m(0,r)
t=V.v(new H.t("_"))
C.a.h(u.a,t)
t=V.a0("a","z")
C.a.h(u.a,t)
t=V.a0("A","Z")
C.a.h(u.a,t)
t=l.l(0,r).m(0,r)
u=V.v(new H.t("_"))
C.a.h(t.a,u)
u=V.a0("0","9")
C.a.h(t.a,u)
u=V.a0("a","z")
C.a.h(t.a,u)
u=V.a0("A","Z")
C.a.h(t.a,u)
u=l.l(0,r).m(0,q)
t=V.v(new H.t("="))
C.a.h(u.a,t)
u.c=!0
u=l.l(0,s).m(0,p)
t=V.v(new H.t("</\\-!>="))
C.a.h(u.a,t)
t=l.l(0,p).m(0,p)
u=V.v(new H.t("</\\-!>="))
C.a.h(t.a,u)
u=l.l(0,s).m(0,o)
t=V.v(new H.t('"'))
C.a.h(u.a,t)
t=l.l(0,o).m(0,n)
u=V.v(new H.t('"'))
C.a.h(t.a,u)
u=l.l(0,o).m(0,"EscStr")
t=V.v(new H.t("\\"))
C.a.h(u.a,t)
t=l.l(0,"EscStr").m(0,o)
u=V.v(new H.t('"'))
C.a.h(t.a,u)
C.a.h(l.l(0,o).m(0,o).a,new V.bl())
C.a.h(l.l(0,s).m(0,m).a,new V.bl())
u=l.l(0,m).m(0,m)
t=new V.au()
t.sac(H.d([],[V.az]))
C.a.h(u.a,t)
u=V.v(new H.t('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.a0("a","z")
C.a.h(t.a,u)
u=V.a0("A","Z")
C.a.h(t.a,u)
u=l.l(0,p)
u.d=u.a.N("Symbol")
u=l.l(0,n)
u.d=u.a.N("String")
u=l.l(0,r)
t=u.a.N(r)
u.d=t
t.aI(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.l(0,q)
t.d=t.a.N(q)
t=l.l(0,m)
t.d=t.a.N(m)
return l}}
V.ic.prototype={
ee:function(a,b){H.m(b,"$ib",[P.h],"$ab")
this.sbO(H.d([],[[P.b,W.aF]]))
this.L(C.a.m(b,"\n"),"#111")},
bv:function(a){},
bp:function(){return}}
V.iv.prototype={
eO:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.o
W.a8(q,"scroll",H.n(new V.ix(o),{func:1,ret:-1,args:[r]}),!1,r)},
dH:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.h],"$ab")
this.hQ()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eq(C.a.iO(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){p=s[q]
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
if(H.pK(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.M(m[1])
l.textContent=H.M(m[0])
t.appendChild(l)}else{k=P.fi(C.y,n,C.h,!1)
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
ex:function(a){var u,t,s,r=new V.fW("dart")
r.bh("dart")
u=new V.hh("glsl")
u.bh("glsl")
t=new V.hi("html")
t.bh("html")
s=C.a.iG(H.d([r,u,t],[V.bz]),new V.iy(a))
if(s!=null)return s
r=new V.ic("plain")
r.bh("plain")
return r},
dG:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.m(b0,"$ib",[P.h],"$ab")
u=H.d([],[P.l])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dr(r).a9(r,"+")){C.a.k(b0,s,C.b.ai(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a9(r,"-")){C.a.k(b0,s,C.b.ai(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.ex(a8)
q.ee(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.fi(C.y,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lN()
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
if(s>=u.length)return H.e(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.x)(r),++a0)C.a_.ie(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.x)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gT(r);a3.w();)c.appendChild(a3.gH(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
i8:function(a){var u,t,s,r,q,p,o,n="auto"
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
s=H.f(r.insertCell(-1),"$ibd").style
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
o=H.f(r.insertCell(-1),"$ibd")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
hQ:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.j0()
u.c=u.l(0,q)
t=u.l(0,q).m(0,p)
s=V.v(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,p).m(0,p)
s=new V.au()
r=[V.az]
s.sac(H.d([],r))
C.a.h(t.a,s)
t=V.v(new H.t("*"))
C.a.h(s.a,t)
t=u.l(0,p).m(0,"BoldEnd")
s=V.v(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,o)
s=V.v(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,o).m(0,o)
s=new V.au()
s.sac(H.d([],r))
C.a.h(t.a,s)
t=V.v(new H.t("_"))
C.a.h(s.a,t)
t=u.l(0,o).m(0,n)
s=V.v(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,m)
s=V.v(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,m).m(0,m)
s=new V.au()
s.sac(H.d([],r))
C.a.h(t.a,s)
t=V.v(new H.t("`"))
C.a.h(s.a,t)
t=u.l(0,m).m(0,"CodeEnd")
s=V.v(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,l)
s=V.v(new H.t("["))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,l).m(0,k)
s=V.v(new H.t("|"))
C.a.h(t.a,s)
s=u.l(0,l).m(0,j)
t=V.v(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,l).m(0,l)
t=new V.au()
t.sac(H.d([],r))
C.a.h(s.a,t)
s=V.v(new H.t("|]"))
C.a.h(t.a,s)
s=u.l(0,k).m(0,j)
t=V.v(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,k).m(0,k)
t=new V.au()
t.sac(H.d([],r))
C.a.h(s.a,t)
s=V.v(new H.t("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,q).m(0,i).a,new V.bl())
s=u.l(0,i).m(0,i)
t=new V.au()
t.sac(H.d([],r))
C.a.h(s.a,t)
s=V.v(new H.t("*_`["))
C.a.h(t.a,s)
s=u.l(0,"BoldEnd")
s.d=s.a.N(p)
s=u.l(0,n)
s.d=s.a.N(o)
s=u.l(0,"CodeEnd")
s.d=s.a.N(m)
s=u.l(0,j)
s.d=s.a.N("Link")
s=u.l(0,i)
s.d=s.a.N(i)
this.b=u}}
V.ix.prototype={
$1:function(a){P.mm(C.o,new V.iw(this.a))},
$S:11}
V.iw.prototype={
$0:function(){var u=C.e.a1(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:2}
V.iy.prototype={
$1:function(a){return H.f(a,"$ibz").a===this.a},
$S:54}
V.iR.prototype={
dF:function(a,b,c){var u,t,s,r,q=this,p=W.l9(null)
p.src=b
p.height=p.width=64
u=p.style
u.border="solid 2px white"
u=J.fx(q.c)
t=u.gn(u)
u=W.a5
W.a8(p,"click",H.n(new V.iT(q,p,b,t),{func:1,ret:-1,args:[u]}),!1,u)
J.fx(q.c).h(0,p)
J.fx(q.c).h(0,document.createElement("br"))
s=P.mq().gcD().j(0,H.i(q.a))
if(s==null){q.dD(t)
r=c}else r=P.ds(s,null,null)===t
if(r)p.click()},
h:function(a,b){return this.dF(a,b,!1)},
dD:function(a){var u,t,s=P.mq(),r=P.h,q=P.nP(s.gcD(),r,r)
q.k(0,this.a,""+a)
u=s.ei(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.kl([],[]).cL(""),"",t)}}
V.iT.prototype={
$1:function(a){var u,t,s=this
H.f(a,"$ia5")
u=s.a
t=J.fx(u.c)
t.A(t,new V.iS())
t=s.b.style
t.border="solid 2px black"
u.d.$1(s.c)
u.dD(s.d)},
$S:55}
V.iS.prototype={
$1:function(a){var u
H.f(a,"$iN")
if(!!J.S(a).$ic6){u=a.style
u.border="solid 2px white"}},
$S:56}
X.kU.prototype={
$1:function(a){this.a.sdM(this.b.f.iQ(a))},
$S:19}
X.kV.prototype={
$1:function(a){var u,t,s,r
H.f(a,"$iz")
u=this.a
t=this.b
s=t.a
r=[P.h]
u.dG("Vertex Shader for distort","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dG("Fragment Shader for distort","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:8};(function aliases(){var u=J.a.prototype
u.eF=u.i
u=J.dT.prototype
u.eH=u.i
u=P.j.prototype
u.eG=u.bA
u=W.N.prototype
u.bE=u.ao
u=W.f0.prototype
u.eJ=u.ax
u=O.e1.prototype
u.cS=u.aB
u=O.ba.prototype
u.cT=u.aB
u=V.dZ.prototype
u.eI=u.aF
u.cR=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"pi","or",10)
u(P,"pj","os",10)
u(P,"pk","ot",10)
t(P,"mT","pg",3)
s(W,"pw",4,null,["$4"],["ov"],26,0)
s(W,"px",4,null,["$4"],["ow"],26,0)
var m
r(m=E.aq.prototype,"gec",0,0,null,["$1","$0"],["ed","j_"],0,0)
r(m,"gea",0,0,null,["$1","$0"],["eb","iX"],0,0)
q(m,"giV","iW",5)
q(m,"giY","iZ",5)
r(m=E.em.prototype,"gcV",0,0,null,["$1","$0"],["cX","cW"],0,0)
p(m,"gjd","ej",3)
o(m=X.et.prototype,"gfW","fX",13)
o(m,"gfK","fL",13)
o(m,"gfQ","fR",4)
o(m,"gh_","h0",29)
o(m,"gfY","fZ",29)
o(m,"gh3","h4",4)
o(m,"gh7","h8",4)
o(m,"gfU","fV",4)
o(m,"gh5","h6",4)
o(m,"gfS","fT",4)
o(m,"gh9","ha",36)
o(m,"ghb","hc",13)
o(m,"ghr","hs",12)
o(m,"ghn","ho",12)
o(m,"ghp","hq",12)
r(D.bB.prototype,"geR",0,0,null,["$1","$0"],["az","eS"],0,0)
r(m=D.dV.prototype,"gdi",0,0,null,["$1","$0"],["dj","h1"],0,0)
o(m,"ghd","he",58)
q(m,"gfE","fF",23)
q(m,"ghh","hi",23)
n(V.X.prototype,"gn","cs",22)
n(V.R.prototype,"gn","cs",22)
r(m=U.cH.prototype,"gaP",0,0,null,["$1","$0"],["P","ad"],0,0)
q(m,"gfC","fD",18)
q(m,"ghf","hg",18)
r(m=U.eu.prototype,"gaP",0,0,null,["$1","$0"],["P","ad"],0,0)
o(m,"gbR","bS",1)
o(m,"gbT","bU",1)
o(m,"gbV","bW",1)
r(m=U.ev.prototype,"gaP",0,0,null,["$1","$0"],["P","ad"],0,0)
o(m,"gbR","bS",1)
o(m,"gbT","bU",1)
o(m,"gbV","bW",1)
o(m,"gft","fu",1)
o(m,"gfv","fw",1)
o(m,"gi3","i4",1)
o(m,"gi1","i2",1)
o(m,"gi_","i0",1)
o(U.ew.prototype,"gfA","fB",1)
r(m=M.dE.prototype,"gZ",0,0,null,["$1","$0"],["a_","b_"],0,0)
q(m,"ghj","hk",17)
q(m,"ghl","hm",17)
r(M.dG.prototype,"gZ",0,0,null,["$1","$0"],["a_","b_"],0,0)
r(m=M.dL.prototype,"gZ",0,0,null,["$1","$0"],["a_","b_"],0,0)
q(m,"gfM","fN",5)
q(m,"gfO","fP",5)
r(m=O.e_.prototype,"gbG",0,0,null,["$1","$0"],["a6","at"],0,0)
r(m,"ghG",0,0,null,["$1","$0"],["dq","hH"],0,0)
q(m,"gfG","fH",16)
q(m,"gfI","fJ",16)
r(O.ee.prototype,"gbG",0,0,null,["$1","$0"],["a6","at"],0,0)
r(X.e7.prototype,"geY",0,0,null,["$1","$0"],["a2","eZ"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.V,null)
s(P.V,[H.ld,J.a,J.as,P.eO,P.j,H.cJ,P.b6,H.c4,H.d6,H.fP,H.j5,P.bD,H.cB,H.f5,P.ag,H.hv,H.hx,H.hq,P.fb,P.bi,P.aL,P.ey,P.iG,P.d_,P.iH,P.be,P.an,P.kB,P.kf,P.cj,P.eN,P.w,P.kt,P.hD,P.c2,P.hl,P.kz,P.ky,P.P,P.ay,P.ae,P.bC,P.ia,P.ei,P.eG,P.hf,P.bE,P.b,P.y,P.K,P.av,P.h,P.a6,P.ck,P.jk,P.ki,W.fS,W.bT,W.H,W.e5,W.f0,W.ko,W.dO,W.aB,W.ke,W.fj,P.kk,P.fg,P.k9,P.T,O.a2,O.cL,E.fJ,E.aq,E.ii,E.em,Z.ex,Z.d8,Z.c_,Z.c7,Z.br,D.fM,D.c3,D.z,X.dD,X.dU,X.hs,X.hA,X.aA,X.hZ,X.j1,X.et,D.bB,D.af,D.e8,D.eh,V.a7,V.ao,V.h6,V.cK,V.at,V.aa,V.ab,V.bM,V.cV,V.X,V.R,U.eu,U.ev,U.ew,M.dG,M.dL,M.aC,A.dA,A.fB,A.ap,A.aP,A.aT,A.aX,A.hJ,A.cf,A.cg,A.ch,A.ep,A.je,F.a9,F.h9,F.bJ,F.hu,F.ca,F.ed,F.is,F.it,F.iu,F.aw,F.jx,F.jy,F.jB,F.jD,F.jE,F.jF,O.bO,O.e1,O.hK,T.iV,V.bl,V.az,V.dZ,V.ih,V.ir,V.cY,V.en,V.d3,V.j_,X.d1,X.c0,X.hm,X.e7,V.bz,V.iv,V.iR])
s(J.a,[J.hp,J.dS,J.dT,J.b7,J.cI,J.bH,H.cO,H.bL,W.k,W.fy,W.bZ,W.cA,W.b4,W.b5,W.W,W.eA,W.fX,W.fZ,W.eC,W.dK,W.eE,W.h0,W.o,W.eH,W.aQ,W.hj,W.eJ,W.bn,W.dX,W.hT,W.eP,W.eQ,W.aR,W.eR,W.eU,W.aS,W.eY,W.f_,W.aV,W.f1,W.aW,W.f6,W.aH,W.f9,W.iZ,W.aZ,W.fc,W.j3,W.jp,W.fk,W.fm,W.fo,W.fq,W.fs,P.b9,P.eL,P.bc,P.eW,P.ig,P.f7,P.bf,P.fe,P.fC,P.ez,P.dB,P.dP,P.e9,P.eb,P.ce,P.ec,P.ek,P.eq,P.f3])
s(J.dT,[J.ib,J.ci,J.bI])
t(J.lc,J.b7)
s(J.cI,[J.dR,J.dQ])
t(P.hz,P.eO)
s(P.hz,[H.er,W.jQ,W.ar,P.hb])
t(H.t,H.er)
s(P.j,[H.h3,H.hE,H.d9])
s(H.h3,[H.c8,H.hw])
s(P.b6,[H.hF,H.jJ])
t(H.hG,H.c8)
t(H.fQ,H.fP)
s(P.bD,[H.i7,H.hr,H.ji,H.j7,H.fL,H.ip,P.fA,P.e6,P.aO,P.jj,P.jg,P.cZ,P.fO,P.fV])
s(H.cB,[H.l0,H.iN,H.kQ,H.kR,H.kS,P.jM,P.jL,P.jN,P.jO,P.ks,P.kr,P.jX,P.k0,P.jY,P.jZ,P.k_,P.k3,P.k4,P.k2,P.k1,P.iI,P.iJ,P.kJ,P.kc,P.kb,P.kd,P.hy,P.hC,P.h1,P.h2,P.jo,P.jl,P.jm,P.jn,P.ku,P.kv,P.kx,P.kw,P.kD,P.kC,P.kE,P.kF,W.h4,W.hV,W.hX,W.io,W.iF,W.jW,W.i5,W.i4,W.kg,W.kh,W.kq,W.kA,P.km,P.kL,P.hc,P.hd,P.fE,E.ij,E.ik,E.il,E.iY,D.h7,D.h8,F.l_,F.kM,F.jH,F.jG,F.jz,F.jA,O.hN,O.hO,O.hP,O.hQ,O.hR,O.hS,T.iX,T.iW,V.kY,V.ix,V.iw,V.iy,V.iT,V.iS,X.kU,X.kV])
s(H.iN,[H.iD,H.cy])
t(H.jK,P.fA)
t(P.hB,P.ag)
s(P.hB,[H.a3,W.jP])
t(H.e2,H.bL)
s(H.e2,[H.de,H.dg])
t(H.df,H.de)
t(H.cP,H.df)
t(H.dh,H.dg)
t(H.e3,H.dh)
s(H.e3,[H.i_,H.i0,H.i1,H.i2,H.i3,H.e4,H.cQ])
t(P.ka,P.kB)
t(P.k8,P.kf)
t(P.fh,P.hD)
t(P.es,P.fh)
s(P.c2,[P.fH,P.h5])
t(P.bA,P.iH)
s(P.bA,[P.fI,P.hk,P.js,P.jr])
t(P.jq,P.h5)
s(P.ae,[P.E,P.l])
s(P.aO,[P.cd,P.hn])
t(P.jS,P.ck)
s(W.k,[W.G,W.ha,W.cM,W.aU,W.di,W.aY,W.aI,W.dk,W.jI,W.da,P.fF,P.bY])
s(W.G,[W.N,W.by,W.db])
s(W.N,[W.u,P.p])
s(W.u,[W.dy,W.fz,W.cx,W.bx,W.c1,W.aF,W.he,W.c6,W.iq,W.bd,W.ej,W.iL,W.iM,W.d2])
s(W.b4,[W.cC,W.fT,W.fU])
t(W.fR,W.b5)
t(W.cD,W.eA)
t(W.eD,W.eC)
t(W.dJ,W.eD)
t(W.eF,W.eE)
t(W.h_,W.eF)
t(W.aG,W.bZ)
t(W.eI,W.eH)
t(W.cF,W.eI)
t(W.eK,W.eJ)
t(W.c5,W.eK)
t(W.bQ,W.o)
s(W.bQ,[W.b8,W.a5,W.b_])
t(W.hU,W.eP)
t(W.hW,W.eQ)
t(W.eS,W.eR)
t(W.hY,W.eS)
t(W.eV,W.eU)
t(W.cR,W.eV)
t(W.eZ,W.eY)
t(W.id,W.eZ)
t(W.im,W.f_)
t(W.dj,W.di)
t(W.iA,W.dj)
t(W.f2,W.f1)
t(W.iB,W.f2)
t(W.iE,W.f6)
t(W.fa,W.f9)
t(W.iO,W.fa)
t(W.dl,W.dk)
t(W.iP,W.dl)
t(W.fd,W.fc)
t(W.j2,W.fd)
t(W.bh,W.a5)
t(W.fl,W.fk)
t(W.jR,W.fl)
t(W.eB,W.dK)
t(W.fn,W.fm)
t(W.k5,W.fn)
t(W.fp,W.fo)
t(W.eT,W.fp)
t(W.fr,W.fq)
t(W.kj,W.fr)
t(W.ft,W.fs)
t(W.kn,W.ft)
t(W.jT,W.jP)
t(W.jU,P.iG)
t(W.lp,W.jU)
t(W.jV,P.d_)
t(W.kp,W.f0)
t(P.kl,P.kk)
t(P.aj,P.k9)
t(P.eM,P.eL)
t(P.ht,P.eM)
t(P.eX,P.eW)
t(P.i8,P.eX)
t(P.cW,P.p)
t(P.f8,P.f7)
t(P.iK,P.f8)
t(P.ff,P.fe)
t(P.j4,P.ff)
t(P.fD,P.ez)
t(P.i9,P.bY)
t(P.f4,P.f3)
t(P.iC,P.f4)
s(E.fJ,[Z.dC,A.cX,T.bP])
s(D.z,[D.bF,D.bG,D.J,X.ie])
s(X.ie,[X.dY,X.bo,X.cN,X.eo])
s(O.a2,[D.dV,U.cH,M.dE])
s(D.fM,[U.fN,U.ai])
t(U.dF,U.ai)
s(A.cX,[A.dI,A.e0,A.ef])
s(A.ep,[A.aJ,A.jb,A.jc,A.jd,A.j9,A.ac,A.ja,A.Z,A.d5,A.jf,A.bR,A.ak,A.bq,A.bS])
t(F.iz,F.h9)
t(F.j8,F.hu)
t(F.jC,F.jD)
t(F.i6,F.jE)
s(O.bO,[O.fY,O.e_,O.ee])
s(O.e1,[O.hH,O.hI,O.ba])
s(O.ba,[O.hL,O.hM])
s(T.bP,[T.iQ,T.el])
t(T.iU,T.iQ)
s(V.dZ,[V.au,V.d4])
s(X.d1,[X.fG,X.hg])
s(V.bz,[V.fW,V.hh,V.hi,V.ic])
u(H.er,H.d6)
u(H.de,P.w)
u(H.df,H.c4)
u(H.dg,P.w)
u(H.dh,H.c4)
u(P.eO,P.w)
u(P.fh,P.kt)
u(W.eA,W.fS)
u(W.eC,P.w)
u(W.eD,W.H)
u(W.eE,P.w)
u(W.eF,W.H)
u(W.eH,P.w)
u(W.eI,W.H)
u(W.eJ,P.w)
u(W.eK,W.H)
u(W.eP,P.ag)
u(W.eQ,P.ag)
u(W.eR,P.w)
u(W.eS,W.H)
u(W.eU,P.w)
u(W.eV,W.H)
u(W.eY,P.w)
u(W.eZ,W.H)
u(W.f_,P.ag)
u(W.di,P.w)
u(W.dj,W.H)
u(W.f1,P.w)
u(W.f2,W.H)
u(W.f6,P.ag)
u(W.f9,P.w)
u(W.fa,W.H)
u(W.dk,P.w)
u(W.dl,W.H)
u(W.fc,P.w)
u(W.fd,W.H)
u(W.fk,P.w)
u(W.fl,W.H)
u(W.fm,P.w)
u(W.fn,W.H)
u(W.fo,P.w)
u(W.fp,W.H)
u(W.fq,P.w)
u(W.fr,W.H)
u(W.fs,P.w)
u(W.ft,W.H)
u(P.eL,P.w)
u(P.eM,W.H)
u(P.eW,P.w)
u(P.eX,W.H)
u(P.f7,P.w)
u(P.f8,W.H)
u(P.fe,P.w)
u(P.ff,W.H)
u(P.ez,P.ag)
u(P.f3,P.w)
u(P.f4,W.H)})()
var v={mangledGlobalNames:{l:"int",E:"double",ae:"num",h:"String",P:"bool",K:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.z]},{func:1,ret:-1,args:[D.z]},{func:1,ret:P.K},{func:1,ret:-1},{func:1,ret:-1,args:[W.a5]},{func:1,ret:-1,args:[P.l,[P.j,E.aq]]},{func:1,ret:P.K,args:[,,]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:P.K,args:[D.z]},{func:1,ret:P.K,args:[F.a9]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.K,args:[W.o]},{func:1,ret:-1,args:[W.b_]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:P.h,args:[P.l]},{func:1,ret:-1,args:[P.l,[P.j,V.at]]},{func:1,ret:-1,args:[P.l,[P.j,M.aC]]},{func:1,ret:-1,args:[P.l,[P.j,U.ai]]},{func:1,ret:P.K,args:[P.h]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.E},{func:1,ret:-1,args:[P.l,[P.j,D.af]]},{func:1,args:[,]},{func:1,ret:P.P,args:[W.G]},{func:1,ret:P.P,args:[W.N,P.h,P.h,W.bT]},{func:1,ret:P.P,args:[W.aB]},{func:1,ret:P.P,args:[P.h]},{func:1,ret:-1,args:[W.b8]},{func:1,ret:P.K,args:[,]},{func:1,ret:P.K,args:[{func:1,ret:-1,args:[D.z]}]},{func:1,ret:P.K,args:[P.ae]},{func:1,ret:P.T,args:[,,]},{func:1,ret:P.K,args:[{func:1,ret:-1}]},{func:1,ret:W.N,args:[W.G]},{func:1,ret:-1,args:[W.bh]},{func:1,ret:-1,args:[W.G,W.G]},{func:1,args:[W.o]},{func:1,ret:P.T,args:[P.l]},{func:1,ret:P.K,args:[P.h,,]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,args:[,P.h]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:V.ab,args:[P.E]},{func:1,ret:P.K,args:[F.aw,P.E,P.E]},{func:1,ret:-1,args:[P.h,P.l]},{func:1,ret:[P.y,P.h,P.h],args:[[P.y,P.h,P.h],P.h]},{func:1,ret:[P.aL,,],args:[,]},{func:1,ret:P.l,args:[A.aP,A.aP]},{func:1,ret:P.l,args:[A.aT,A.aT]},{func:1,ret:P.l,args:[A.aX,A.aX]},{func:1,ret:P.K,args:[,],opt:[P.av]},{func:1,ret:P.K,args:[P.be]},{func:1,ret:P.P,args:[V.bz]},{func:1,ret:P.K,args:[W.a5]},{func:1,ret:P.K,args:[W.N]},{func:1,args:[P.h]},{func:1,ret:P.P,args:[[P.j,D.af]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bx.prototype
C.j=W.c1.prototype
C.O=W.aF.prototype
C.R=J.a.prototype
C.a=J.b7.prototype
C.S=J.dQ.prototype
C.d=J.dR.prototype
C.k=J.dS.prototype
C.e=J.cI.prototype
C.b=J.bH.prototype
C.T=J.bI.prototype
C.Z=W.cR.prototype
C.B=J.ib.prototype
C.c=P.ce.prototype
C.a_=W.bd.prototype
C.C=W.ej.prototype
C.r=J.ci.prototype
C.D=W.bh.prototype
C.E=W.da.prototype
C.a0=new P.fI()
C.F=new P.fH()
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

C.M=new P.ia()
C.h=new P.jq()
C.N=new P.js()
C.f=new P.ka()
C.o=new P.bC(0)
C.P=new P.bC(5e6)
C.Q=new P.hl("element",!1,!1,!1)
C.w=H.d(u([127,2047,65535,1114111]),[P.l])
C.l=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.l])
C.U=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.m=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.n=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.V=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.x=H.d(u([]),[P.h])
C.W=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.y=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.i=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.z=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.X=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.A=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.p=H.d(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.q=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.Y=new H.fQ(0,{},C.x,[P.h,P.h])})();(function staticFields(){$.b2=0
$.cz=null
$.lP=null
$.lv=!1
$.mX=null
$.mR=null
$.n3=null
$.kN=null
$.kT=null
$.lE=null
$.cn=null
$.dn=null
$.dp=null
$.lw=!1
$.a1=C.f
$.ax=[]
$.bm=null
$.l8=null
$.lW=null
$.lV=null
$.dd=P.lf(P.h,P.bE)
$.m1=null
$.m5=null
$.ma=null
$.cS=null
$.mg=null
$.mt=null
$.mw=null
$.mv=null
$.jt=null
$.ju=null
$.jv=null
$.mu=null
$.m9=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pV","n7",function(){return H.mW("_$dart_dartClosure")})
u($,"pW","lI",function(){return H.mW("_$dart_js")})
u($,"q0","n8",function(){return H.bg(H.j6({
toString:function(){return"$receiver$"}}))})
u($,"q1","n9",function(){return H.bg(H.j6({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"q2","na",function(){return H.bg(H.j6(null))})
u($,"q3","nb",function(){return H.bg(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q6","ne",function(){return H.bg(H.j6(void 0))})
u($,"q7","nf",function(){return H.bg(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q5","nd",function(){return H.bg(H.mo(null))})
u($,"q4","nc",function(){return H.bg(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"q9","nh",function(){return H.bg(H.mo(void 0))})
u($,"q8","ng",function(){return H.bg(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qq","lJ",function(){return P.oq()})
u($,"qc","ni",function(){return P.om()})
u($,"qr","nm",function(){return H.nV(H.cm(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"qt","no",function(){return P.o8("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qu","np",function(){return P.oQ()})
u($,"qs","nn",function(){return P.m0(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"qj","nl",function(){return Z.aK(0)})
u($,"qd","nj",function(){return Z.aK(511)})
u($,"ql","aD",function(){return Z.aK(1)})
u($,"qk","bv",function(){return Z.aK(2)})
u($,"qf","bu",function(){return Z.aK(4)})
u($,"qm","bk",function(){return Z.aK(8)})
u($,"qn","bX",function(){return Z.aK(16)})
u($,"qg","du",function(){return Z.aK(32)})
u($,"qh","dv",function(){return Z.aK(64)})
u($,"qi","nk",function(){return Z.aK(96)})
u($,"qo","cw",function(){return Z.aK(128)})
u($,"qe","bt",function(){return Z.aK(256)})
u($,"pU","n6",function(){return new V.h6(1e-9)})
u($,"pT","O",function(){return $.n6()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cO,DataView:H.bL,ArrayBufferView:H.bL,Float32Array:H.cP,Float64Array:H.cP,Int16Array:H.i_,Int32Array:H.i0,Int8Array:H.i1,Uint16Array:H.i2,Uint32Array:H.i3,Uint8ClampedArray:H.e4,CanvasPixelArray:H.e4,Uint8Array:H.cQ,HTMLAudioElement:W.u,HTMLBRElement:W.u,HTMLButtonElement:W.u,HTMLContentElement:W.u,HTMLDListElement:W.u,HTMLDataElement:W.u,HTMLDataListElement:W.u,HTMLDetailsElement:W.u,HTMLDialogElement:W.u,HTMLEmbedElement:W.u,HTMLFieldSetElement:W.u,HTMLHRElement:W.u,HTMLHeadElement:W.u,HTMLHeadingElement:W.u,HTMLHtmlElement:W.u,HTMLIFrameElement:W.u,HTMLInputElement:W.u,HTMLLIElement:W.u,HTMLLabelElement:W.u,HTMLLegendElement:W.u,HTMLLinkElement:W.u,HTMLMapElement:W.u,HTMLMediaElement:W.u,HTMLMenuElement:W.u,HTMLMetaElement:W.u,HTMLMeterElement:W.u,HTMLModElement:W.u,HTMLOListElement:W.u,HTMLObjectElement:W.u,HTMLOptGroupElement:W.u,HTMLOptionElement:W.u,HTMLOutputElement:W.u,HTMLParagraphElement:W.u,HTMLParamElement:W.u,HTMLPictureElement:W.u,HTMLPreElement:W.u,HTMLProgressElement:W.u,HTMLQuoteElement:W.u,HTMLScriptElement:W.u,HTMLShadowElement:W.u,HTMLSlotElement:W.u,HTMLSourceElement:W.u,HTMLSpanElement:W.u,HTMLStyleElement:W.u,HTMLTableCaptionElement:W.u,HTMLTableColElement:W.u,HTMLTextAreaElement:W.u,HTMLTimeElement:W.u,HTMLTitleElement:W.u,HTMLTrackElement:W.u,HTMLUListElement:W.u,HTMLUnknownElement:W.u,HTMLVideoElement:W.u,HTMLDirectoryElement:W.u,HTMLFontElement:W.u,HTMLFrameElement:W.u,HTMLFrameSetElement:W.u,HTMLMarqueeElement:W.u,HTMLElement:W.u,AccessibleNodeList:W.fy,HTMLAnchorElement:W.dy,HTMLAreaElement:W.fz,HTMLBaseElement:W.cx,Blob:W.bZ,HTMLBodyElement:W.bx,HTMLCanvasElement:W.c1,CanvasRenderingContext2D:W.cA,CDATASection:W.by,CharacterData:W.by,Comment:W.by,ProcessingInstruction:W.by,Text:W.by,CSSNumericValue:W.cC,CSSUnitValue:W.cC,CSSPerspective:W.fR,CSSCharsetRule:W.W,CSSConditionRule:W.W,CSSFontFaceRule:W.W,CSSGroupingRule:W.W,CSSImportRule:W.W,CSSKeyframeRule:W.W,MozCSSKeyframeRule:W.W,WebKitCSSKeyframeRule:W.W,CSSKeyframesRule:W.W,MozCSSKeyframesRule:W.W,WebKitCSSKeyframesRule:W.W,CSSMediaRule:W.W,CSSNamespaceRule:W.W,CSSPageRule:W.W,CSSRule:W.W,CSSStyleRule:W.W,CSSSupportsRule:W.W,CSSViewportRule:W.W,CSSStyleDeclaration:W.cD,MSStyleCSSProperties:W.cD,CSS2Properties:W.cD,CSSImageValue:W.b4,CSSKeywordValue:W.b4,CSSPositionValue:W.b4,CSSResourceValue:W.b4,CSSURLImageValue:W.b4,CSSStyleValue:W.b4,CSSMatrixComponent:W.b5,CSSRotation:W.b5,CSSScale:W.b5,CSSSkew:W.b5,CSSTranslation:W.b5,CSSTransformComponent:W.b5,CSSTransformValue:W.fT,CSSUnparsedValue:W.fU,DataTransferItemList:W.fX,HTMLDivElement:W.aF,DOMException:W.fZ,ClientRectList:W.dJ,DOMRectList:W.dJ,DOMRectReadOnly:W.dK,DOMStringList:W.h_,DOMTokenList:W.h0,Element:W.N,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.k,Accelerometer:W.k,AccessibleNode:W.k,AmbientLightSensor:W.k,Animation:W.k,ApplicationCache:W.k,DOMApplicationCache:W.k,OfflineResourceList:W.k,BackgroundFetchRegistration:W.k,BatteryManager:W.k,BroadcastChannel:W.k,CanvasCaptureMediaStreamTrack:W.k,DedicatedWorkerGlobalScope:W.k,EventSource:W.k,FileReader:W.k,FontFaceSet:W.k,Gyroscope:W.k,XMLHttpRequest:W.k,XMLHttpRequestEventTarget:W.k,XMLHttpRequestUpload:W.k,LinearAccelerationSensor:W.k,Magnetometer:W.k,MediaDevices:W.k,MediaKeySession:W.k,MediaQueryList:W.k,MediaRecorder:W.k,MediaSource:W.k,MediaStream:W.k,MediaStreamTrack:W.k,MIDIAccess:W.k,MIDIInput:W.k,MIDIOutput:W.k,MIDIPort:W.k,NetworkInformation:W.k,Notification:W.k,OffscreenCanvas:W.k,OrientationSensor:W.k,PaymentRequest:W.k,Performance:W.k,PermissionStatus:W.k,PresentationAvailability:W.k,PresentationConnection:W.k,PresentationConnectionList:W.k,PresentationRequest:W.k,RelativeOrientationSensor:W.k,RemotePlayback:W.k,RTCDataChannel:W.k,DataChannel:W.k,RTCDTMFSender:W.k,RTCPeerConnection:W.k,webkitRTCPeerConnection:W.k,mozRTCPeerConnection:W.k,ScreenOrientation:W.k,Sensor:W.k,ServiceWorker:W.k,ServiceWorkerContainer:W.k,ServiceWorkerGlobalScope:W.k,ServiceWorkerRegistration:W.k,SharedWorker:W.k,SharedWorkerGlobalScope:W.k,SpeechRecognition:W.k,SpeechSynthesis:W.k,SpeechSynthesisUtterance:W.k,VR:W.k,VRDevice:W.k,VRDisplay:W.k,VRSession:W.k,VisualViewport:W.k,WebSocket:W.k,Worker:W.k,WorkerGlobalScope:W.k,WorkerPerformance:W.k,BluetoothDevice:W.k,BluetoothRemoteGATTCharacteristic:W.k,Clipboard:W.k,MojoInterfaceInterceptor:W.k,USB:W.k,IDBDatabase:W.k,IDBOpenDBRequest:W.k,IDBVersionChangeRequest:W.k,IDBRequest:W.k,IDBTransaction:W.k,AnalyserNode:W.k,RealtimeAnalyserNode:W.k,AudioBufferSourceNode:W.k,AudioDestinationNode:W.k,AudioNode:W.k,AudioScheduledSourceNode:W.k,AudioWorkletNode:W.k,BiquadFilterNode:W.k,ChannelMergerNode:W.k,AudioChannelMerger:W.k,ChannelSplitterNode:W.k,AudioChannelSplitter:W.k,ConstantSourceNode:W.k,ConvolverNode:W.k,DelayNode:W.k,DynamicsCompressorNode:W.k,GainNode:W.k,AudioGainNode:W.k,IIRFilterNode:W.k,MediaElementAudioSourceNode:W.k,MediaStreamAudioDestinationNode:W.k,MediaStreamAudioSourceNode:W.k,OscillatorNode:W.k,Oscillator:W.k,PannerNode:W.k,AudioPannerNode:W.k,webkitAudioPannerNode:W.k,ScriptProcessorNode:W.k,JavaScriptAudioNode:W.k,StereoPannerNode:W.k,WaveShaperNode:W.k,EventTarget:W.k,File:W.aG,FileList:W.cF,FileWriter:W.ha,HTMLFormElement:W.he,Gamepad:W.aQ,History:W.hj,HTMLCollection:W.c5,HTMLFormControlsCollection:W.c5,HTMLOptionsCollection:W.c5,ImageData:W.bn,HTMLImageElement:W.c6,KeyboardEvent:W.b8,Location:W.dX,MediaList:W.hT,MessagePort:W.cM,MIDIInputMap:W.hU,MIDIOutputMap:W.hW,MimeType:W.aR,MimeTypeArray:W.hY,PointerEvent:W.a5,MouseEvent:W.a5,DragEvent:W.a5,Document:W.G,DocumentFragment:W.G,HTMLDocument:W.G,ShadowRoot:W.G,XMLDocument:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cR,RadioNodeList:W.cR,Plugin:W.aS,PluginArray:W.id,RTCStatsReport:W.im,HTMLSelectElement:W.iq,SourceBuffer:W.aU,SourceBufferList:W.iA,SpeechGrammar:W.aV,SpeechGrammarList:W.iB,SpeechRecognitionResult:W.aW,Storage:W.iE,CSSStyleSheet:W.aH,StyleSheet:W.aH,HTMLTableCellElement:W.bd,HTMLTableDataCellElement:W.bd,HTMLTableHeaderCellElement:W.bd,HTMLTableElement:W.ej,HTMLTableRowElement:W.iL,HTMLTableSectionElement:W.iM,HTMLTemplateElement:W.d2,TextTrack:W.aY,TextTrackCue:W.aI,VTTCue:W.aI,TextTrackCueList:W.iO,TextTrackList:W.iP,TimeRanges:W.iZ,Touch:W.aZ,TouchEvent:W.b_,TouchList:W.j2,TrackDefaultList:W.j3,CompositionEvent:W.bQ,FocusEvent:W.bQ,TextEvent:W.bQ,UIEvent:W.bQ,URL:W.jp,VideoTrackList:W.jI,WheelEvent:W.bh,Window:W.da,DOMWindow:W.da,Attr:W.db,CSSRuleList:W.jR,ClientRect:W.eB,DOMRect:W.eB,GamepadList:W.k5,NamedNodeMap:W.eT,MozNamedAttrMap:W.eT,SpeechRecognitionResultList:W.kj,StyleSheetList:W.kn,SVGLength:P.b9,SVGLengthList:P.ht,SVGNumber:P.bc,SVGNumberList:P.i8,SVGPointList:P.ig,SVGScriptElement:P.cW,SVGStringList:P.iK,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bf,SVGTransformList:P.j4,AudioBuffer:P.fC,AudioParamMap:P.fD,AudioTrackList:P.fF,AudioContext:P.bY,webkitAudioContext:P.bY,BaseAudioContext:P.bY,OfflineAudioContext:P.i9,WebGLBuffer:P.dB,WebGLFramebuffer:P.dP,WebGLProgram:P.e9,WebGLRenderbuffer:P.eb,WebGL2RenderingContext:P.ce,WebGLShader:P.ec,WebGLTexture:P.ek,WebGLUniformLocation:P.eq,SQLResultSetRowList:P.iC})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e2.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.e3.$nativeSuperclassTag="ArrayBufferView"
W.di.$nativeSuperclassTag="EventTarget"
W.dj.$nativeSuperclassTag="EventTarget"
W.dk.$nativeSuperclassTag="EventTarget"
W.dl.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.n_,[])
else X.n_([])})})()
//# sourceMappingURL=test.dart.js.map
