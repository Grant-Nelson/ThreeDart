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
a[c]=function(){a[c]=function(){H.pd(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.la"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.la"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.la(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r=r+x
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
if(w[u][a])return w[u][a]}}var C={},H={kO:function kO(){},
k4:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
lw:function(){return new P.dO("No element")},
nc:function(){return new P.dO("Too few elements")},
dL:function(a,b,c,d,e){H.m(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.l,args:[e,e]})
if(c-b<=32)H.nG(a,b,c,d,e)
else H.nF(a,b,c,d,e)},
nG:function(a,b,c,d,e){var u,t,s,r,q
H.m(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.l,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.c(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.c(a,r)
r=J.aV(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.c(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
nF:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.m(a2,"$ib",[a6],"$ab")
H.n(a5,{func:1,ret:P.l,args:[a6,a6]})
u=C.e.a_(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.e.a_(a3+a4,2)
q=r-u
p=r+u
o=a2.length
if(t<0||t>=o)return H.c(a2,t)
n=a2[t]
if(q<0||q>=o)return H.c(a2,q)
m=a2[q]
if(r<0||r>=o)return H.c(a2,r)
l=a2[r]
if(p<0||p>=o)return H.c(a2,p)
k=a2[p]
if(s<0||s>=o)return H.c(a2,s)
j=a2[s]
if(J.aV(a5.$2(n,m),0)){i=m
m=n
n=i}if(J.aV(a5.$2(k,j),0)){i=j
j=k
k=i}if(J.aV(a5.$2(n,l),0)){i=l
l=n
n=i}if(J.aV(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.aV(a5.$2(n,k),0)){i=k
k=n
n=i}if(J.aV(a5.$2(l,k),0)){i=k
k=l
l=i}if(J.aV(a5.$2(m,j),0)){i=j
j=m
m=i}if(J.aV(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.aV(a5.$2(k,j),0)){i=j
j=k
k=i}C.a.k(a2,t,n)
C.a.k(a2,r,l)
C.a.k(a2,s,j)
if(a3<0||a3>=a2.length)return H.c(a2,a3)
C.a.k(a2,q,a2[a3])
if(a4<0||a4>=a2.length)return H.c(a2,a4)
C.a.k(a2,p,a2[a4])
h=a3+1
g=a4-1
if(J.L(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.c(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.O()
if(d<0){if(f!==h){if(h>=a2.length)return H.c(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.c(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.ac()
if(d>0){--g
continue}else{c=g-1
o=a2.length
if(d<0){if(h>=o)return H.c(a2,h)
C.a.k(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.c(a2,g)
C.a.k(a2,h,a2[g])
C.a.k(a2,g,e)
g=c
h=b
break}else{if(g>=o)return H.c(a2,g)
C.a.k(a2,f,a2[g])
C.a.k(a2,g,e)
g=c
break}}}}a=!0}else{for(f=h;f<=g;++f){if(f>=a2.length)return H.c(a2,f)
e=a2[f]
a0=a5.$2(e,m)
if(typeof a0!=="number")return a0.O()
if(a0<0){if(f!==h){if(h>=a2.length)return H.c(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else{a1=a5.$2(e,k)
if(typeof a1!=="number")return a1.ac()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.c(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.ac()
if(d>0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.c(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.O()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.c(a2,h)
C.a.k(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.c(a2,g)
C.a.k(a2,h,a2[g])
C.a.k(a2,g,e)
h=b}else{if(g>=o)return H.c(a2,g)
C.a.k(a2,f,a2[g])
C.a.k(a2,g,e)}g=c
break}}}}a=!1}o=h-1
if(o>=a2.length)return H.c(a2,o)
C.a.k(a2,a3,a2[o])
C.a.k(a2,o,m)
o=g+1
if(o<0||o>=a2.length)return H.c(a2,o)
C.a.k(a2,a4,a2[o])
C.a.k(a2,o,k)
H.dL(a2,a3,h-2,a5,a6)
H.dL(a2,g+2,a4,a5,a6)
if(a)return
if(h<t&&g>s){while(!0){if(h>=a2.length)return H.c(a2,h)
if(!J.L(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.c(a2,g)
if(!J.L(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.c(a2,f)
e=a2[f]
if(a5.$2(e,m)===0){if(f!==h){if(h>=a2.length)return H.c(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else if(a5.$2(e,k)===0)for(;!0;){if(g<0||g>=a2.length)return H.c(a2,g)
if(a5.$2(a2[g],k)===0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.c(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.O()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.c(a2,h)
C.a.k(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.c(a2,g)
C.a.k(a2,h,a2[g])
C.a.k(a2,g,e)
h=b}else{if(g>=o)return H.c(a2,g)
C.a.k(a2,f,a2[g])
C.a.k(a2,g,e)}g=c
break}}}H.dL(a2,h,g,a5,a6)}else H.dL(a2,h,g,a5,a6)},
a5:function a5(a){this.a=a},
fu:function fu(){},
dt:function dt(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
h_:function h_(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
iZ:function iZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
j_:function j_(a,b,c){this.a=a
this.b=b
this.$ti=c},
bQ:function bQ(){},
cK:function cK(){},
dW:function dW(){},
n4:function(){throw H.d(P.F("Cannot modify unmodifiable Map"))},
cf:function(a){var u,t=H.K(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
oX:function(a){return v.types[H.a_(a)]},
p1:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.S(a).$iJ},
k:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.as(a)
if(typeof u!=="string")throw H.d(H.aj(a))
return u},
cA:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nx:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.c(p,3)
u=H.K(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.ad(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.F(s,q)|32)>t)return}return parseInt(a,b)},
bW:function(a){return H.no(a)+H.l7(H.bH(a),0,null)},
no:function(a){var u,t,s,r,q,p,o,n=J.S(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.J||!!n.$ibF){r=C.q(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cf(t.length>1&&C.b.F(t,0)===36?C.b.ad(t,1):t)},
np:function(){if(!!self.location)return self.location.href
return},
lH:function(a){var u,t,s,r,q
H.ka(a)
u=J.aI(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
ny:function(a){var u,t,s,r=H.e([],[P.l])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.z)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.aj(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.aH(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.d(H.aj(s))}return H.lH(r)},
lI:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.aj(s))
if(s<0)throw H.d(H.aj(s))
if(s>65535)return H.ny(a)}return H.lH(a)},
nz:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
dG:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aH(u,10))>>>0,56320|u&1023)}}throw H.d(P.ad(a,0,1114111,null,null))},
bV:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nw:function(a){var u=H.bV(a).getFullYear()+0
return u},
nu:function(a){var u=H.bV(a).getMonth()+1
return u},
nq:function(a){var u=H.bV(a).getDate()+0
return u},
nr:function(a){var u=H.bV(a).getHours()+0
return u},
nt:function(a){var u=H.bV(a).getMinutes()+0
return u},
nv:function(a){var u=H.bV(a).getSeconds()+0
return u},
ns:function(a){var u=H.bV(a).getMilliseconds()+0
return u},
p:function(a){throw H.d(H.aj(a))},
c:function(a,b){if(a==null)J.aI(a)
throw H.d(H.ca(a,b))},
ca:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aW(!0,b,s,null)
u=H.a_(J.aI(a))
if(!(b<0)){if(typeof u!=="number")return H.p(u)
t=b>=u}else t=!0
if(t)return P.W(b,a,s,null,u)
return P.dI(b,s)},
oR:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bX(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bX(a,c,!0,b,"end",u)
return new P.aW(!0,b,"end",null)},
aj:function(a){return new P.aW(!0,a,null,null)},
oK:function(a){if(typeof a!=="number")throw H.d(H.aj(a))
return a},
d:function(a){var u
if(a==null)a=new P.dD()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mA})
u.name=""}else u.toString=H.mA
return u},
mA:function(){return J.as(this.dartException)},
w:function(a){throw H.d(a)},
z:function(a){throw H.d(P.bw(a))},
b9:function(a){var u,t,s,r,q,p
a=H.my(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.e([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ij(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ik:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lR:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lC:function(a,b){return new H.hq(a,b==null?null:b.method)},
kP:function(a,b){var u=b==null,t=u?null:b.method
return new H.fL(a,t,u?null:b.receiver)},
aH:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kB(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.aH(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kP(H.k(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lC(H.k(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mD()
q=$.mE()
p=$.mF()
o=$.mG()
n=$.mJ()
m=$.mK()
l=$.mI()
$.mH()
k=$.mM()
j=$.mL()
i=r.a8(u)
if(i!=null)return f.$1(H.kP(H.K(u),i))
else{i=q.a8(u)
if(i!=null){i.method="call"
return f.$1(H.kP(H.K(u),i))}else{i=p.a8(u)
if(i==null){i=o.a8(u)
if(i==null){i=n.a8(u)
if(i==null){i=m.a8(u)
if(i==null){i=l.a8(u)
if(i==null){i=o.a8(u)
if(i==null){i=k.a8(u)
if(i==null){i=j.a8(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lC(H.K(u),i))}}return f.$1(new H.ix(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dN()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aW(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dN()
return a},
cd:function(a){var u
if(a==null)return new H.ey(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ey(a)},
oV:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
p0:function(a,b,c,d,e,f){H.f(a,"$ikK")
switch(H.a_(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.C("Unsupported number of arguments for wrapped closure"))},
c9:function(a,b){var u
H.a_(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.p0)
a.$identity=u
return u},
n3:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hT().constructor.prototype):Object.create(new H.ch(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aX
if(typeof t!=="number")return t.n()
$.aX=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.lr(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.oX,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.lq:H.kG
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.d("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lr(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
n0:function(a,b,c,d){var u=H.kG
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lr:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.n2(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.n0(t,!r,u,b)
if(t===0){r=$.aX
if(typeof r!=="number")return r.n()
$.aX=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ci
return new Function(r+H.k(q==null?$.ci=H.fc("self"):q)+";return "+p+"."+H.k(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aX
if(typeof r!=="number")return r.n()
$.aX=r+1
o+=r
r="return function("+o+"){return this."
q=$.ci
return new Function(r+H.k(q==null?$.ci=H.fc("self"):q)+"."+H.k(u)+"("+o+");}")()},
n1:function(a,b,c,d){var u=H.kG,t=H.lq
switch(b?-1:a){case 0:throw H.d(H.nD("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
n2:function(a,b){var u,t,s,r,q,p,o,n=$.ci
if(n==null)n=$.ci=H.fc("self")
u=$.lp
if(u==null)u=$.lp=H.fc("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.n1(s,!q,t,b)
if(s===1){n="return function(){return this."+H.k(n)+"."+H.k(t)+"(this."+H.k(u)+");"
u=$.aX
if(typeof u!=="number")return u.n()
$.aX=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.k(n)+"."+H.k(t)+"(this."+H.k(u)+", "+o+");"
u=$.aX
if(typeof u!=="number")return u.n()
$.aX=u+1
return new Function(n+u+"}")()},
la:function(a,b,c,d,e,f,g){return H.n3(a,b,H.a_(c),d,!!e,!!f,g)},
kG:function(a){return a.a},
lq:function(a){return a.c},
fc:function(a){var u,t,s,r=new H.ch("self","target","receiver","name"),q=J.kM(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
E:function(a){if(a==null)H.oG("boolean expression must not be null")
return a},
K:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.aT(a,"String"))},
oS:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aT(a,"double"))},
mu:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aT(a,"num"))},
mk:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.aT(a,"bool"))},
a_:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.aT(a,"int"))},
mw:function(a,b){throw H.d(H.aT(a,H.cf(H.K(b).substring(2))))},
p7:function(a,b){throw H.d(H.n_(a,H.cf(H.K(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.S(a)[b])return a
H.mw(a,b)},
y:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.S(a)[b]
else u=!0
if(u)return a
H.p7(a,b)},
ka:function(a){if(a==null)return a
if(!!J.S(a).$ib)return a
throw H.d(H.aT(a,"List<dynamic>"))},
ms:function(a,b){var u
if(a==null)return a
u=J.S(a)
if(!!u.$ib)return a
if(u[b])return a
H.mw(a,b)},
mm:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a_(u)]
else return a.$S()}return},
eW:function(a,b){var u
if(typeof a=="function")return!0
u=H.mm(J.S(a))
if(u==null)return!1
return H.m9(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.l4)return a
$.l4=!0
try{if(H.eW(a,b))return a
u=H.kv(b)
t=H.aT(a,u)
throw H.d(t)}finally{$.l4=!1}},
lb:function(a,b){if(a!=null&&!H.l9(a,b))H.w(H.aT(a,H.kv(b)))
return a},
aT:function(a,b){return new H.il("TypeError: "+P.dj(a)+": type '"+H.mf(a)+"' is not a subtype of type '"+b+"'")},
n_:function(a,b){return new H.fd("CastError: "+P.dj(a)+": type '"+H.mf(a)+"' is not a subtype of type '"+b+"'")},
mf:function(a){var u,t=J.S(a)
if(!!t.$ick){u=H.mm(t)
if(u!=null)return H.kv(u)
return"Closure"}return H.bW(a)},
oG:function(a){throw H.d(new H.j0(a))},
pd:function(a){throw H.d(new P.fn(H.K(a)))},
nD:function(a){return new H.hG(a)},
mp:function(a){return v.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
bH:function(a){if(a==null)return
return a.$ti},
pV:function(a,b,c){return H.ce(a["$a"+H.k(c)],H.bH(b))},
bs:function(a,b,c,d){var u
H.K(c)
H.a_(d)
u=H.ce(a["$a"+H.k(c)],H.bH(b))
return u==null?null:u[d]},
aG:function(a,b,c){var u
H.K(b)
H.a_(c)
u=H.ce(a["$a"+H.k(b)],H.bH(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.a_(b)
u=H.bH(a)
return u==null?null:u[b]},
kv:function(a){return H.bG(a,null)},
bG:function(a,b){var u,t
H.m(b,"$ib",[P.h],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cf(a[0].name)+H.l7(a,1,b)
if(typeof a=="function")return H.cf(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a_(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.k(b[t])}if('func' in a)return H.of(a,b)
if('futureOr' in a)return"FutureOr<"+H.bG("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
of:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.h]
H.m(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.e([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.c(a0,n)
p=C.b.n(p,a0[n])
m=u[q]
if(m!=null&&m!==P.M)p+=" extends "+H.bG(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bG(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bG(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bG(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.oU(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.K(b[h])
j=j+i+H.bG(e[d],a0)+(" "+H.k(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
l7:function(a,b,c){var u,t,s,r,q,p
H.m(c,"$ib",[P.h],"$ab")
if(a==null)return""
u=new P.ai("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bG(p,c)}return"<"+u.i(0)+">"},
ce:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
l8:function(a,b,c,d){var u,t
H.K(b)
H.ka(c)
H.K(d)
if(a==null)return!1
u=H.bH(a)
t=J.S(a)
if(t[b]==null)return!1
return H.mi(H.ce(t[d],u),null,c,null)},
m:function(a,b,c,d){H.K(b)
H.ka(c)
H.K(d)
if(a==null)return a
if(H.l8(a,b,c,d))return a
throw H.d(H.aT(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cf(b.substring(2))+H.l7(c,0,null),v.mangledGlobalNames)))},
mi:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aF(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aF(a[t],b,c[t],d))return!1
return!0},
pT:function(a,b,c){return a.apply(b,H.ce(J.S(b)["$a"+H.k(c)],H.bH(b)))},
mr:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="M"||a.name==="G"||a===-1||a===-2||H.mr(u)}return!1},
l9:function(a,b){var u,t
if(a==null)return b==null||b.name==="M"||b.name==="G"||b===-1||b===-2||H.mr(b)
if(b==null||b===-1||b.name==="M"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.l9(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eW(a,b)}u=J.S(a).constructor
t=H.bH(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aF(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.l9(a,b))throw H.d(H.aT(a,H.kv(b)))
return a},
aF:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="M"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="M"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aF(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="G")return!0
if('func' in c)return H.m9(a,b,c,d)
if('func' in a)return c.name==="kK"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aF("type" in a?a.type:l,b,s,d)
else if(H.aF(a,b,s,d))return!0
else{if(!('$i'+"co" in t.prototype))return!1
r=t.prototype["$a"+"co"]
q=H.ce(r,u?a.slice(1):l)
return H.aF(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mi(H.ce(m,u),b,p,d)},
m9:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aF(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aF(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aF(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aF(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.p5(h,b,g,d)},
p5:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aF(c[s],d,a[s],b))return!1}return!0},
pU:function(a,b,c){Object.defineProperty(a,H.K(b),{value:c,enumerable:false,writable:true,configurable:true})},
p3:function(a){var u,t,s,r,q=H.K($.mq.$1(a)),p=$.k0[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k8[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.K($.mh.$2(a,q))
if(q!=null){p=$.k0[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k8[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.ku(u)
$.k0[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.k8[q]=u
return u}if(s==="-"){r=H.ku(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mv(a,u)
if(s==="*")throw H.d(P.iw(q))
if(v.leafTags[q]===true){r=H.ku(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mv(a,u)},
mv:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lf(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ku:function(a){return J.lf(a,!1,null,!!a.$iJ)},
p4:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ku(u)
else return J.lf(u,c,null,null)},
oZ:function(){if(!0===$.le)return
$.le=!0
H.p_()},
p_:function(){var u,t,s,r,q,p,o,n
$.k0=Object.create(null)
$.k8=Object.create(null)
H.oY()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mx.$1(q)
if(p!=null){o=H.p4(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oY:function(){var u,t,s,r,q,p,o=C.A()
o=H.c8(C.B,H.c8(C.C,H.c8(C.r,H.c8(C.r,H.c8(C.D,H.c8(C.E,H.c8(C.F(C.q),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mq=new H.k5(r)
$.mh=new H.k6(q)
$.mx=new H.k7(p)},
c8:function(a,b){return a(b)||b},
ne:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.d(P.a3("Illegal RegExp pattern ("+String(r)+")",a,null))},
pb:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oT:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
my:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
mz:function(a,b,c){var u=H.pc(a,b,c)
return u},
pc:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.my(b),'g'),H.oT(c))},
fh:function fh(){},
fi:function fi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ij:function ij(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hq:function hq(a,b){this.a=a
this.b=b},
fL:function fL(a,b,c){this.a=a
this.b=b
this.c=c},
ix:function ix(a){this.a=a},
kB:function kB(a){this.a=a},
ey:function ey(a){this.a=a
this.b=null},
ck:function ck(){},
i0:function i0(){},
hT:function hT(){},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
il:function il(a){this.a=a},
fd:function fd(a){this.a=a},
hG:function hG(a){this.a=a},
j0:function j0(a){this.a=a},
Z:function Z(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fP:function fP(a,b){this.a=a
this.b=b
this.c=null},
fQ:function fQ(a,b){this.a=a
this.$ti=b},
fR:function fR(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
k5:function k5(a){this.a=a},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
fK:function fK(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c6:function(a){return a},
nn:function(a){return new Int8Array(a)},
bc:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.ca(b,a))},
od:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.oR(a,b,c))
return b},
cv:function cv(){},
bB:function bB(){},
dA:function dA(){},
cw:function cw(){},
dB:function dB(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){},
dC:function dC(){},
cx:function cx(){},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
cS:function cS(){},
oU:function(a){return J.lx(a?Object.keys(a):[],null)},
p6:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lf:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eY:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.le==null){H.oZ()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.iw("Return interceptor for "+H.k(u(a,q))))}s=a.constructor
r=s==null?null:s[$.li()]
if(r!=null)return r
r=H.p3(a)
if(r!=null)return r
if(typeof a=="function")return C.L
u=Object.getPrototypeOf(a)
if(u==null)return C.w
if(u===Object.prototype)return C.w
if(typeof s=="function"){Object.defineProperty(s,$.li(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
nd:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.kF(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.ad(a,0,4294967295,"length",null))
return J.lx(new Array(a),b)},
lx:function(a,b){return J.kM(H.e(a,[b]))},
kM:function(a){H.ka(a)
a.fixed$length=Array
return a},
S:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dn.prototype
return J.dm.prototype}if(typeof a=="string")return J.bh.prototype
if(a==null)return J.dp.prototype
if(typeof a=="boolean")return J.fJ.prototype
if(a.constructor==Array)return J.aK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bi.prototype
return a}if(a instanceof P.M)return a
return J.eY(a)},
oW:function(a){if(typeof a=="number")return J.bA.prototype
if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(a.constructor==Array)return J.aK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bi.prototype
return a}if(a instanceof P.M)return a
return J.eY(a)},
cc:function(a){if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(a.constructor==Array)return J.aK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bi.prototype
return a}if(a instanceof P.M)return a
return J.eY(a)},
k1:function(a){if(a==null)return a
if(a.constructor==Array)return J.aK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bi.prototype
return a}if(a instanceof P.M)return a
return J.eY(a)},
mn:function(a){if(typeof a=="number")return J.bA.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bF.prototype
return a},
mo:function(a){if(typeof a=="number")return J.bA.prototype
if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bF.prototype
return a},
lc:function(a){if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bF.prototype
return a},
eX:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bi.prototype
return a}if(a instanceof P.M)return a
return J.eY(a)},
mS:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.oW(a).n(a,b)},
L:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.S(a).q(a,b)},
aV:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.mn(a).ac(a,b)},
lm:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mo(a).m(a,b)},
mT:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.mn(a).p(a,b)},
d4:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.p1(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cc(a).j(a,b)},
kC:function(a,b,c){return J.k1(a).k(a,b,c)},
mU:function(a,b){return J.lc(a).F(a,b)},
mV:function(a,b,c){return J.eX(a).h8(a,b,c)},
mW:function(a,b,c,d){return J.eX(a).hB(a,b,c,d)},
mX:function(a,b){return J.lc(a).T(a,b)},
kD:function(a,b){return J.mo(a).hN(a,b)},
kE:function(a,b){return J.k1(a).I(a,b)},
mY:function(a,b,c,d){return J.eX(a).i0(a,b,c,d)},
ln:function(a,b){return J.k1(a).D(a,b)},
cg:function(a){return J.eX(a).gbZ(a)},
d5:function(a){return J.S(a).gH(a)},
bJ:function(a){return J.k1(a).gU(a)},
aI:function(a){return J.cc(a).gl(a)},
mZ:function(a,b){return J.eX(a).iC(a,b)},
as:function(a){return J.S(a).i(a)},
a:function a(){},
fJ:function fJ(){},
dp:function dp(){},
dq:function dq(){},
hu:function hu(){},
bF:function bF(){},
bi:function bi(){},
aK:function aK(a){this.$ti=a},
kN:function kN(a){this.$ti=a},
ap:function ap(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bA:function bA(){},
dn:function dn(){},
dm:function dm(){},
bh:function bh(){}},P={
nT:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oH()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c9(new P.j2(s),1)).observe(u,{childList:true})
return new P.j1(s,u,t)}else if(self.setImmediate!=null)return P.oI()
return P.oJ()},
nU:function(a){self.scheduleImmediate(H.c9(new P.j3(H.n(a,{func:1,ret:-1})),0))},
nV:function(a){self.setImmediate(H.c9(new P.j4(H.n(a,{func:1,ret:-1})),0))},
nW:function(a){P.kU(C.o,H.n(a,{func:1,ret:-1}))},
kU:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.e.a_(a.a,1000)
return P.nZ(u<0?0:u,b)},
lQ:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.b7]})
u=C.e.a_(a.a,1000)
return P.o_(u<0?0:u,b)},
nZ:function(a,b){var u=new P.eF()
u.eu(a,b)
return u},
o_:function(a,b){var u=new P.eF()
u.ev(a,b)
return u},
nX:function(a,b){var u,t,s
b.a=1
try{a.e2(new P.jd(b),new P.je(b),null)}catch(s){u=H.aH(s)
t=H.cd(s)
P.p8(new P.jf(b,u,t))}},
m_:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaE")
if(u>=4){t=b.bL()
b.a=a.a
b.c=a.c
P.cN(b,t)}else{t=H.f(b.c,"$ibb")
b.a=2
b.c=a
a.d8(t)}},
cN:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$iak")
g=g.b
r=s.a
q=s.b
g.toString
P.jU(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cN(h.a,b)}g=h.a
o=g.c
u.a=t
u.b=o
r=!t
if(r){q=b.c
q=(q&1)!==0||q===8}else q=!0
if(q){q=b.b
n=q.b
if(t){m=g.b
m.toString
m=m==n
if(!m)n.toString
else m=!0
m=!m}else m=!1
if(m){H.f(o,"$iak")
g=g.b
r=o.a
q=o.b
g.toString
P.jU(i,i,g,r,q)
return}l=$.Y
if(l!=n)$.Y=n
else l=i
g=b.c
if(g===8)new P.jj(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.ji(u,b,o).$0()}else if((g&2)!==0)new P.jh(h,u,b).$0()
if(l!=null)$.Y=l
g=u.b
if(!!J.S(g).$ico){if(g.a>=4){k=H.f(q.c,"$ibb")
q.c=null
b=q.bb(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.m_(g,q)
return}}j=b.b
k=H.f(j.c,"$ibb")
j.c=null
b=j.bb(k)
g=u.a
r=u.b
if(!g){H.B(r,H.u(j,0))
j.a=4
j.c=r}else{H.f(r,"$iak")
j.a=8
j.c=r}h.a=j
g=j}},
oC:function(a,b){if(H.eW(a,{func:1,args:[P.M,P.aq]}))return H.n(a,{func:1,ret:null,args:[P.M,P.aq]})
if(H.eW(a,{func:1,args:[P.M]}))return H.n(a,{func:1,ret:null,args:[P.M]})
throw H.d(P.kF(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oB:function(){var u,t
for(;u=$.c7,u!=null;){$.d0=null
t=u.b
$.c7=t
if(t==null)$.d_=null
u.a.$0()}},
oF:function(){$.l5=!0
try{P.oB()}finally{$.d0=null
$.l5=!1
if($.c7!=null)$.ll().$1(P.mj())}},
me:function(a){var u=new P.e2(H.n(a,{func:1,ret:-1}))
if($.c7==null){$.c7=$.d_=u
if(!$.l5)$.ll().$1(P.mj())}else $.d_=$.d_.b=u},
oE:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.c7
if(u==null){P.me(a)
$.d0=$.d_
return}t=new P.e2(a)
s=$.d0
if(s==null){t.b=u
$.c7=$.d0=t}else{t.b=s.b
$.d0=s.b=t
if(t.b==null)$.d_=t}},
p8:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.Y
if(C.f===u){P.jW(t,t,C.f,a)
return}u.toString
P.jW(t,t,u,H.n(u.bU(a),s))},
lP:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.Y
if(u===C.f){u.toString
return P.kU(a,b)}return P.kU(a,H.n(u.bU(b),t))},
nJ:function(a,b){var u,t,s={func:1,ret:-1,args:[P.b7]}
H.n(b,s)
u=$.Y
if(u===C.f){u.toString
return P.lQ(a,b)}t=u.dk(b,P.b7)
$.Y.toString
return P.lQ(a,H.n(t,s))},
jU:function(a,b,c,d,e){var u={}
u.a=d
P.oE(new P.jV(u,e))},
ma:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.Y
if(t===c)return d.$0()
$.Y=c
u=t
try{t=d.$0()
return t}finally{$.Y=u}},
mb:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.Y
if(t===c)return d.$1(e)
$.Y=c
u=t
try{t=d.$1(e)
return t}finally{$.Y=u}},
oD:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.Y
if(t===c)return d.$2(e,f)
$.Y=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Y=u}},
jW:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bU(d):c.hJ(d,-1)
P.me(d)},
j2:function j2(a){this.a=a},
j1:function j1(a,b,c){this.a=a
this.b=b
this.c=c},
j3:function j3(a){this.a=a},
j4:function j4(a){this.a=a},
eF:function eF(){this.c=0},
jC:function jC(a,b){this.a=a
this.b=b},
jB:function jB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bb:function bb(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aE:function aE(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jc:function jc(a,b){this.a=a
this.b=b},
jg:function jg(a,b){this.a=a
this.b=b},
jd:function jd(a){this.a=a},
je:function je(a){this.a=a},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
jj:function jj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jk:function jk(a){this.a=a},
ji:function ji(a,b,c){this.a=a
this.b=b
this.c=c},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
e2:function e2(a){this.a=a
this.b=null},
hW:function hW(){},
hY:function hY(a,b){this.a=a
this.b=b},
hZ:function hZ(a,b){this.a=a
this.b=b},
cD:function cD(){},
hX:function hX(){},
b7:function b7(){},
ak:function ak(a,b){this.a=a
this.b=b},
jL:function jL(){},
jV:function jV(a,b){this.a=a
this.b=b},
jr:function jr(){},
jt:function jt(a,b,c){this.a=a
this.b=b
this.c=c},
js:function js(a,b){this.a=a
this.b=b},
ju:function ju(a,b,c){this.a=a
this.b=b
this.c=c},
ng:function(a,b){return new H.Z([a,b])},
ly:function(a,b){return new H.Z([a,b])},
nh:function(a){return H.oV(a,new H.Z([null,null]))},
ni:function(a){return new P.jo([a])},
l1:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
m1:function(a,b,c){var u=new P.jp(a,b,[c])
u.c=a.e
return u},
nb:function(a,b,c){var u,t
if(P.l6(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.e([],[P.h])
C.a.h($.ar,a)
try{P.og(a,u)}finally{if(0>=$.ar.length)return H.c($.ar,-1)
$.ar.pop()}t=P.lN(b,H.ms(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
kL:function(a,b,c){var u,t
if(P.l6(a))return b+"..."+c
u=new P.ai(b)
C.a.h($.ar,a)
try{t=u
t.a=P.lN(t.a,a,", ")}finally{if(0>=$.ar.length)return H.c($.ar,-1)
$.ar.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
l6:function(a){var u,t
for(u=$.ar.length,t=0;t<u;++t)if(a===$.ar[t])return!0
return!1},
og:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.m(b,"$ib",[P.h],"$ab")
u=a.gU(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.B())return
r=H.k(u.gJ(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.B()){if(s<=5)return
if(0>=b.length)return H.c(b,-1)
q=b.pop()
if(0>=b.length)return H.c(b,-1)
p=b.pop()}else{o=u.gJ(u);++s
if(!u.B()){if(s<=4){C.a.h(b,H.k(o))
return}q=H.k(o)
if(0>=b.length)return H.c(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gJ(u);++s
for(;u.B();o=n,n=m){m=u.gJ(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.c(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.k(o)
q=H.k(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
lz:function(a,b,c){var u=P.ng(b,c)
a.D(0,new P.fS(u,b,c))
return u},
kR:function(a){var u,t={}
if(P.l6(a))return"{...}"
u=new P.ai("")
try{C.a.h($.ar,a)
u.a+="{"
t.a=!0
J.ln(a,new P.fX(t,u))
u.a+="}"}finally{if(0>=$.ar.length)return H.c($.ar,-1)
$.ar.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jo:function jo(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cO:function cO(a){this.a=a
this.c=this.b=null},
jp:function jp(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fS:function fS(a,b,c){this.a=a
this.b=b
this.c=c},
fT:function fT(){},
v:function v(){},
fW:function fW(){},
fX:function fX(a,b){this.a=a
this.b=b},
af:function af(){},
jD:function jD(){},
fY:function fY(){},
dX:function dX(a,b){this.a=a
this.$ti=b},
jv:function jv(){},
eh:function eh(){},
eL:function eL(){},
nN:function(a,b,c,d){H.m(b,"$ib",[P.l],"$ab")
if(b instanceof Uint8Array)return P.nO(!1,b,c,d)
return},
nO:function(a,b,c,d){var u,t,s=$.mN()
if(s==null)return
u=0===c
if(u&&!0)return P.kX(s,b)
t=b.length
d=P.bo(c,d,t)
if(u&&d===t)return P.kX(s,b)
return P.kX(s,b.subarray(c,d))},
kX:function(a,b){if(P.nQ(b))return
return P.nR(a,b)},
nR:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aH(t)}return},
nQ:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nP:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aH(t)}return},
md:function(a,b,c){var u,t,s
H.m(a,"$ib",[P.l],"$ab")
for(u=J.cc(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.ab()
if((s&127)!==s)return t-b}return c-b},
lo:function(a,b,c,d,e,f){if(C.e.ai(f,4)!==0)throw H.d(P.a3("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.a3("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.a3("Invalid base64 padding, more than two '=' characters",a,b))},
f9:function f9(){},
fa:function fa(){},
bN:function bN(){},
bO:function bO(){},
fv:function fv(){},
iG:function iG(){},
iI:function iI(){},
jK:function jK(a){this.b=0
this.c=a},
iH:function iH(a){this.a=a},
jJ:function jJ(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
d1:function(a,b,c){var u
H.n(b,{func:1,ret:P.l,args:[P.h]})
u=H.nx(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.a3(a,null,null))},
n8:function(a){if(a instanceof H.ck)return a.i(0)
return"Instance of '"+H.bW(a)+"'"},
nj:function(a,b,c){var u,t
H.B(b,c)
u=J.nd(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.k(u,t,b)
return H.m(u,"$ib",[c],"$ab")},
kQ:function(a,b,c){var u,t=[c],s=H.e([],t)
for(u=J.bJ(a);u.B();)C.a.h(s,H.B(u.gJ(u),c))
if(b)return s
return H.m(J.kM(s),"$ib",t,"$ab")},
cE:function(a,b,c){var u,t=P.l
H.m(a,"$ij",[t],"$aj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.m(a,"$iaK",[t],"$aaK")
u=a.length
c=P.bo(b,c,u)
return H.lI(b>0||c<u?C.a.ed(a,b,c):a)}if(!!J.S(a).$icx)return H.nz(a,b,P.bo(b,c,a.length))
return P.nH(a,b,c)},
nH:function(a,b,c){var u,t,s,r,q=null
H.m(a,"$ij",[P.l],"$aj")
if(b<0)throw H.d(P.ad(b,0,J.aI(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.ad(c,b,J.aI(a),q,q))
t=J.bJ(a)
for(s=0;s<b;++s)if(!t.B())throw H.d(P.ad(b,0,s,q,q))
r=[]
if(u)for(;t.B();)r.push(t.gJ(t))
else for(s=b;s<c;++s){if(!t.B())throw H.d(P.ad(c,b,s,q,q))
r.push(t.gJ(t))}return H.lI(r)},
nB:function(a){return new H.fK(a,H.ne(a,!1,!0,!1))},
lN:function(a,b,c){var u=J.bJ(b)
if(!u.B())return a
if(c.length===0){do a+=H.k(u.gJ(u))
while(u.B())}else{a+=H.k(u.gJ(u))
for(;u.B();)a=a+c+H.k(u.gJ(u))}return a},
iB:function(){var u=H.np()
if(u!=null)return P.nM(u)
throw H.d(P.F("'Uri.base' is not supported"))},
jI:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.m(a,"$ib",[P.l],"$ab")
if(c===C.h){u=$.mQ().b
if(typeof b!=="string")H.w(H.aj(b))
u=u.test(b)}else u=!1
if(u)return b
H.B(b,H.aG(c,"bN",0))
t=c.gi_().c_(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dG(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
n5:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
n6:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
de:function(a){if(a>=10)return""+a
return"0"+a},
lt:function(a,b){return new P.b0(1e6*b+1000*a)},
dj:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.as(a)
if(typeof a==="string")return JSON.stringify(a)
return P.n8(a)},
d6:function(a){return new P.aW(!1,null,null,a)},
kF:function(a,b,c){return new P.aW(!0,a,b,c)},
dI:function(a,b){return new P.bX(null,null,!0,a,b,"Value not in range")},
ad:function(a,b,c,d,e){return new P.bX(b,c,!0,a,d,"Invalid value")},
bo:function(a,b,c){if(0>a||a>c)throw H.d(P.ad(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.ad(b,a,c,"end",null))
return b}return c},
kS:function(a,b){if(typeof a!=="number")return a.O()
if(a<0)throw H.d(P.ad(a,0,null,b,null))},
W:function(a,b,c,d,e){var u=H.a_(e==null?J.aI(b):e)
return new P.fI(u,!0,a,c,"Index out of range")},
F:function(a){return new P.iy(a)},
iw:function(a){return new P.iv(a)},
bw:function(a){return new P.fg(a)},
C:function(a){return new P.ea(a)},
a3:function(a,b,c){return new P.fF(a,b,c)},
nk:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.l]})
u=H.e([],[c])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.k(u,t,b.$1(t))
return u},
lh:function(a){H.p6(a)},
nM:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.F(a,4)^58)*3|C.b.F(a,0)^100|C.b.F(a,1)^97|C.b.F(a,2)^116|C.b.F(a,3)^97)>>>0
if(u===0)return P.lS(e<e?C.b.A(a,0,e):a,5,f).ge8()
else if(u===32)return P.lS(C.b.A(a,5,e),0,f).ge8()}t=new Array(8)
t.fixed$length=Array
s=H.e(t,[P.l])
C.a.k(s,0,0)
C.a.k(s,1,-1)
C.a.k(s,2,-1)
C.a.k(s,7,-1)
C.a.k(s,3,0)
C.a.k(s,4,0)
C.a.k(s,5,e)
C.a.k(s,6,e)
if(P.mc(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.iU()
if(r>=0)if(P.mc(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.n()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.O()
if(typeof n!=="number")return H.p(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.b.a6(a,"..",o)))j=n>o+2&&C.b.a6(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.a6(a,"file",0)){if(q<=0){if(!C.b.a6(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.A(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.aM(a,o,n,"/");++e
n=h}k="file"}else if(C.b.a6(a,"http",0)){if(t&&p+3===o&&C.b.a6(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aM(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.a6(a,"https",0)){if(t&&p+4===o&&C.b.a6(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aM(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.A(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jw(a,r,q,p,o,n,m,k)}return P.o0(a,0,e,r,q,p,o,n,m,k)},
lU:function(a){var u=P.h
return C.a.i3(H.e(a.split("&"),[u]),P.ly(u,u),new P.iE(C.h),[P.x,P.h,P.h])},
nL:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iA(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.T(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.d1(C.b.A(a,s,t),n,n)
if(typeof p!=="number")return p.ac()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.c(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.d1(C.b.A(a,s,c),n,n)
if(typeof p!=="number")return p.ac()
if(p>255)k.$2(l,s)
if(r>=u)return H.c(j,r)
j[r]=p
return j},
lT:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.iC(a)
t=new P.iD(u,a)
if(a.length<2)u.$1("address is too short")
s=H.e([],[P.l])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.T(a,r)
if(n===58){if(r===b){++r
if(C.b.T(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaw(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.nL(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.c(j,g)
j[g]=0
d=g+1
if(d>=i)return H.c(j,d)
j[d]=0
g+=2}else{d=C.e.aH(f,8)
if(g<0||g>=i)return H.c(j,g)
j[g]=d
d=g+1
if(d>=i)return H.c(j,d)
j[d]=f&255
g+=2}}return j},
o0:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.o7(a,b,d)
else{if(d===b)P.cX(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.o8(a,u,e-1):""
s=P.o4(a,e,f,!1)
if(typeof f!=="number")return f.n()
r=f+1
if(typeof g!=="number")return H.p(g)
q=r<g?P.o6(P.d1(C.b.A(a,r,g),new P.jE(a,f),n),j):n}else{q=n
s=q
t=""}p=P.o5(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.O()
o=h<i?P.l2(a,h+1,i,n):n
return new P.c5(j,t,s,q,p,o,i<c?P.o3(a,i+1,c):n)},
m2:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cX:function(a,b,c){throw H.d(P.a3(c,a,b))},
o6:function(a,b){if(a!=null&&a===P.m2(b))return
return a},
o4:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.T(a,b)===91){if(typeof c!=="number")return c.p()
u=c-1
if(C.b.T(a,u)!==93)P.cX(a,b,"Missing end `]` to match `[` in host")
P.lT(a,b+1,u)
return C.b.A(a,b,c).toLowerCase()}if(typeof c!=="number")return H.p(c)
t=b
for(;t<c;++t)if(C.b.T(a,t)===58){P.lT(a,b,c)
return"["+a+"]"}return P.oa(a,b,c)},
oa:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.p(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.T(a,u)
if(q===37){p=P.m8(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ai("")
n=C.b.A(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.A(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.c(C.u,o)
o=(C.u[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ai("")
if(t<u){s.a+=C.b.A(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.c(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.cX(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.T(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ai("")
n=C.b.A(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.m3(q)
u+=l
t=u}}}}if(s==null)return C.b.A(a,b,c)
if(t<c){n=C.b.A(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
o7:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.m5(C.b.F(a,b)))P.cX(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.c(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cX(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.A(a,b,c)
return P.o1(t?a.toLowerCase():a)},
o1:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
o8:function(a,b,c){return P.cY(a,b,c,C.N,!1)},
o5:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cY(a,b,c,C.v,!0):C.j.jd(d,new P.jF(),P.h).u(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a5(u,"/"))u="/"+u
return P.o9(u,e,f)},
o9:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a5(a,"/"))return P.ob(a,!u||c)
return P.oc(a)},
l2:function(a,b,c,d){var u,t={}
H.m(d,"$ix",[P.h,null],"$ax")
if(a!=null){if(d!=null)throw H.d(P.d6("Both query and queryParameters specified"))
return P.cY(a,b,c,C.l,!0)}if(d==null)return
u=new P.ai("")
t.a=""
d.D(0,new P.jG(new P.jH(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
o3:function(a,b,c){return P.cY(a,b,c,C.l,!0)},
m8:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.T(a,b+1)
t=C.b.T(a,p)
s=H.k4(u)
r=H.k4(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.e.aH(q,4)
if(p>=8)return H.c(C.n,p)
p=(C.n[p]&1<<(q&15))!==0}else p=!1
if(p)return H.dG(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.A(a,b,b+3).toUpperCase()
return},
m3:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.e(u,[P.l])
C.a.k(t,0,37)
C.a.k(t,1,C.b.F(o,a>>>4))
C.a.k(t,2,C.b.F(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.e(u,[P.l])
for(q=0;--r,r>=0;s=128){p=C.e.hk(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.F(o,p>>>4))
C.a.k(t,q+2,C.b.F(o,p&15))
q+=3}}return P.cE(t,0,null)},
cY:function(a,b,c,d,e){var u=P.m7(a,b,c,H.m(d,"$ib",[P.l],"$ab"),e)
return u==null?C.b.A(a,b,c):u},
m7:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.m(d,"$ib",[P.l],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.O()
if(typeof c!=="number")return H.p(c)
if(!(t<c))break
c$0:{q=C.b.T(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.c(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.m8(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.c(C.k,p)
p=(C.k[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cX(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.T(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.m3(q)}}if(r==null)r=new P.ai("")
r.a+=C.b.A(a,s,t)
r.a+=H.k(o)
if(typeof n!=="number")return H.p(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.O()
if(s<c)r.a+=C.b.A(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
m6:function(a){if(C.b.a5(a,"."))return!0
return C.b.dI(a,"/.")!==-1},
oc:function(a){var u,t,s,r,q,p,o
if(!P.m6(a))return a
u=H.e([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.L(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.c(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.u(u,"/")},
ob:function(a,b){var u,t,s,r,q,p
if(!P.m6(a))return!b?P.m4(a):a
u=H.e([],[P.h])
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
C.a.k(u,0,P.m4(u[0]))}return C.a.u(u,"/")},
m4:function(a){var u,t,s,r=a.length
if(r>=2&&P.m5(J.mU(a,0)))for(u=1;u<r;++u){t=C.b.F(a,u)
if(t===58)return C.b.A(a,0,u)+"%3A"+C.b.ad(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.c(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
o2:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.d6("Invalid URL encoding"))}}return u},
l3:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.F(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.A(a,b,c)
else r=new H.a5(C.b.A(a,b,c))}else{r=H.e([],[P.l])
for(s=a.length,q=b;q<c;++q){t=C.b.F(a,q)
if(t>127)throw H.d(P.d6("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.d6("Truncated URI"))
C.a.h(r,P.o2(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.m(r,"$ib",[P.l],"$ab")
return new P.iH(!1).c_(r)},
m5:function(a){var u=a|32
return 97<=u&&u<=122},
lS:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.e([b-1],[P.l])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.F(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.a3(m,a,t))}}if(s<0&&t>b)throw H.d(P.a3(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.F(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaw(l)
if(r!==44||t!==p+7||!C.b.a6(a,"base64",p+1))throw H.d(P.a3("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.z.ig(0,a,o,u)
else{n=P.m7(a,o,u,C.l,!0)
if(n!=null)a=C.b.aM(a,o,u,n)}return new P.iz(a,l,c)},
oe:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nk(22,new P.jP(),P.N),n=new P.jO(o),m=new P.jQ(),l=new P.jR(),k=H.f(n.$2(0,225),"$iN")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(14,225),"$iN")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(15,225),"$iN")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(1,225),"$iN")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(2,235),"$iN")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(3,235),"$iN")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(4,229),"$iN")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(5,229),"$iN")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(6,231),"$iN")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(7,231),"$iN")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.f(n.$2(8,8),"$iN"),"]",5)
k=H.f(n.$2(9,235),"$iN")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(16,235),"$iN")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(17,235),"$iN")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(10,235),"$iN")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(18,235),"$iN")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(19,235),"$iN")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(11,235),"$iN")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(12,236),"$iN")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.f(n.$2(13,237),"$iN")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.f(n.$2(20,245),"$iN"),"az",21)
k=H.f(n.$2(21,245),"$iN")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mc:function(a,b,c,d,e){var u,t,s,r,q
H.m(e,"$ib",[P.l],"$ab")
u=$.mR()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.c(u,d)
s=u[d]
r=C.b.F(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.c(s,r)
q=s[r]
d=q&31
C.a.k(e,q>>>5,t)}return d},
aa:function aa(){},
at:function at(a,b){this.a=a
this.b=b},
t:function t(){},
b0:function b0(a){this.a=a},
fs:function fs(){},
ft:function ft(){},
by:function by(){},
f3:function f3(){},
dD:function dD(){},
aW:function aW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bX:function bX(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fI:function fI(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iy:function iy(a){this.a=a},
iv:function iv(a){this.a=a},
dO:function dO(a){this.a=a},
fg:function fg(a){this.a=a},
ht:function ht(){},
dN:function dN(){},
fn:function fn(a){this.a=a},
ea:function ea(a){this.a=a},
fF:function fF(a,b,c){this.a=a
this.b=b
this.c=c},
l:function l(){},
j:function j(){},
b1:function b1(){},
b:function b(){},
x:function x(){},
G:function G(){},
a7:function a7(){},
M:function M(){},
aq:function aq(){},
h:function h(){},
ai:function ai(a){this.a=a},
iE:function iE(a){this.a=a},
iA:function iA(a){this.a=a},
iC:function iC(a){this.a=a},
iD:function iD(a,b){this.a=a
this.b=b},
c5:function c5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jE:function jE(a,b){this.a=a
this.b=b},
jF:function jF(){},
jH:function jH(a,b){this.a=a
this.b=b},
jG:function jG(a){this.a=a},
iz:function iz(a,b,c){this.a=a
this.b=b
this.c=c},
jP:function jP(){},
jO:function jO(a){this.a=a},
jQ:function jQ(){},
jR:function jR(){},
jw:function jw(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
j8:function j8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oN:function(a){var u,t=J.S(a)
if(!!t.$ibg){u=t.gdn(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eK(a.data,a.height,a.width)},
oM:function(a){if(a instanceof P.eK)return{data:a.a,height:a.b,width:a.c}
return a},
br:function(a){var u,t,s,r,q
if(a==null)return
u=P.ly(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r){q=H.K(t[r])
u.k(0,q,a[q])}return u},
oL:function(a){var u={}
a.D(0,new P.jX(u))
return u},
jy:function jy(){},
jz:function jz(a,b){this.a=a
this.b=b},
eK:function eK(a,b,c){this.a=a
this.b=b
this.c=c},
jX:function jX(a){this.a=a},
eC:function eC(a,b){this.a=a
this.b=b},
fB:function fB(a,b){this.a=a
this.b=b},
fC:function fC(){},
fD:function fD(){},
jn:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nY:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jq:function jq(){},
ag:function ag(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b3:function b3(){},
fN:function fN(){},
b6:function b6(){},
hr:function hr(){},
hx:function hx(){},
i_:function i_(){},
q:function q(){},
b8:function b8(){},
ii:function ii(){},
ef:function ef(){},
eg:function eg(){},
ep:function ep(){},
eq:function eq(){},
eA:function eA(){},
eB:function eB(){},
eI:function eI(){},
eJ:function eJ(){},
N:function N(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(a){this.a=a},
f8:function f8(){},
bK:function bK(){},
hs:function hs(){},
e3:function e3(){},
d8:function d8(){},
dH:function dH(){},
bY:function bY(){},
dK:function dK(){},
dQ:function dQ(){},
dV:function dV(){},
hS:function hS(){},
ew:function ew(){},
ex:function ex(){}},W={
kH:function(){var u=document.createElement("canvas")
return u},
n7:function(a){H.f(a,"$ii")
return"wheel"},
lv:function(a){var u=document.createElement("img")
if(a!=null)u.src=a
return u},
na:function(a){var u,t=document.createElement("input"),s=H.f(t,"$icq")
try{s.type=a}catch(u){H.aH(u)}return s},
jm:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m0:function(a,b,c,d){var u=W.jm(W.jm(W.jm(W.jm(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a6:function(a,b,c,d,e){var u=W.mg(new W.jb(c),W.o)
if(u!=null&&!0)J.mW(a,b,u,!1)
return new W.ja(a,b,u,!1,[e])},
mg:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.Y
if(u===C.f)return a
return u.dk(a,b)},
r:function r(){},
f_:function f_(){},
f1:function f1(){},
f2:function f2(){},
bL:function bL(){},
bM:function bM(){},
cj:function cj(){},
bv:function bv(){},
cl:function cl(){},
fj:function fj(){},
T:function T(){},
cm:function cm(){},
fk:function fk(){},
aZ:function aZ(){},
b_:function b_(){},
fl:function fl(){},
fm:function fm(){},
fo:function fo(){},
df:function df(){},
fp:function fp(){},
dg:function dg(){},
dh:function dh(){},
fq:function fq(){},
fr:function fr(){},
j6:function j6(a,b){this.a=a
this.b=b},
V:function V(){},
o:function o(){},
i:function i(){},
ax:function ax(){},
cn:function cn(){},
fA:function fA(){},
fE:function fE(){},
aJ:function aJ(){},
fH:function fH(){},
bR:function bR(){},
bg:function bg(){},
bS:function bS(){},
cq:function cq(){},
b2:function b2(){},
fU:function fU(){},
hd:function hd(){},
cs:function cs(){},
he:function he(){},
hf:function hf(a){this.a=a},
hg:function hg(){},
hh:function hh(a){this.a=a},
aL:function aL(){},
hi:function hi(){},
a4:function a4(){},
j5:function j5(a){this.a=a},
H:function H(){},
cy:function cy(){},
aM:function aM(){},
hv:function hv(){},
hE:function hE(){},
hF:function hF(a){this.a=a},
hH:function hH(){},
aN:function aN(){},
hQ:function hQ(){},
aO:function aO(){},
hR:function hR(){},
aP:function aP(){},
hU:function hU(){},
hV:function hV(a){this.a=a},
aA:function aA(){},
bp:function bp(){},
aQ:function aQ(){},
aB:function aB(){},
i1:function i1(){},
i2:function i2(){},
ic:function ic(){},
aR:function aR(){},
aS:function aS(){},
ig:function ig(){},
ih:function ih(){},
bE:function bE(){},
iF:function iF(){},
iX:function iX(){},
ba:function ba(){},
cM:function cM(){},
j7:function j7(){},
e5:function e5(){},
jl:function jl(){},
em:function em(){},
jx:function jx(){},
jA:function jA(){},
j9:function j9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
l0:function l0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ja:function ja(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jb:function jb(a){this.a=a},
D:function D(){},
dl:function dl(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
e4:function e4(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){},
en:function en(){},
eo:function eo(){},
er:function er(){},
es:function es(){},
et:function et(){},
cT:function cT(){},
cU:function cU(){},
eu:function eu(){},
ev:function ev(){},
ez:function ez(){},
eD:function eD(){},
eE:function eE(){},
cV:function cV(){},
cW:function cW(){},
eG:function eG(){},
eH:function eH(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){}},O={
kI:function(a){var u=new O.a1([a])
u.bs(a)
return u},
a1:function a1(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cr:function cr(){this.b=this.a=null},
dw:function dw(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h7:function h7(a,b){this.a=a
this.b=b},
h8:function h8(){},
h9:function h9(a,b){this.a=a
this.b=b},
ha:function ha(){},
hb:function hb(a,b){this.a=a
this.b=b},
hc:function hc(){},
h1:function h1(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dx:function dx(){},
h2:function h2(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b4:function b4(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h4:function h4(){var _=this
_.e=_.d=_.c=_.b=null},
h5:function h5(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h6:function h6(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c_:function c_(){}},E={
lu:function(){var u=new E.am()
u.a=""
u.b=!0
u.sen(0,O.kI(E.am))
u.y.b8(u.gih(),u.gik())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.scz(0,null)
u.se1(null)
u.sb2(null)
return u},
nC:function(a,b){var u=new E.hA(a)
u.ei(a,b)
return u},
nI:function(a,b,c,d,e){var u,t,s=J.S(a)
if(!!s.$ibM)return E.lO(a,!0,!0,!0,!1)
u=W.kH()
t=u.style
t.width="100%"
t.height="100%"
s.gbZ(a).h(0,u)
return E.lO(u,!0,!0,!0,!1)},
lO:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dR(),j=H.f(C.i.cv(a,"webgl2",P.nh(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibY")
if(j==null)H.w(P.C("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.nC(j,a)
u=new T.i8(j)
u.b=H.a_(j.getParameter(3379))
H.a_(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.dY(a)
t=new X.fM()
t.c=new X.au(!1,!1,!1)
t.sh2(P.ni(P.l))
u.b=t
t=new X.hj(u)
t.f=0
t.r=V.bD()
t.x=V.bD()
t.ch=t.Q=1
u.c=t
t=new X.fV(u)
t.r=0
t.x=V.bD()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ie(u)
t.f=V.bD()
t.r=V.bD()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seO(H.e([],[[P.cD,P.M]]))
t=u.z
s=document
r=W.a4
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a6(s,"contextmenu",H.n(u.gfm(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a6(a,"focus",H.n(u.gft(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a6(a,"blur",H.n(u.gfe(),o),!1,p))
t=u.z
n=W.b2
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a6(s,"keyup",H.n(u.gfz(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a6(s,"keydown",H.n(u.gfv(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a6(a,"mousedown",H.n(u.gfD(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a6(a,"mouseup",H.n(u.gfH(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a6(a,l,H.n(u.gfF(),q),!1,r))
n=u.z
m=W.ba;(n&&C.a).h(n,W.a6(a,H.K(W.n7(a)),H.n(u.gfJ(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a6(s,l,H.n(u.gfo(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a6(s,"mouseup",H.n(u.gfq(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a6(s,"pointerlockchange",H.n(u.gfL(),o),!1,p))
p=u.z
o=W.aS
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a6(a,"touchstart",H.n(u.gfY(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a6(a,"touchend",H.n(u.gfU(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a6(a,"touchmove",H.n(u.gfW(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.at(Date.now(),!1)
k.cy=0
k.da()
return k},
fb:function fb(){},
am:function am(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hA:function hA(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hB:function hB(a){this.a=a},
hC:function hC(a){this.a=a},
hD:function hD(a){this.a=a},
dR:function dR(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ib:function ib(a){this.a=a}},Z={
l_:function(a,b,c){var u
H.m(c,"$ib",[P.l],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.c6(c)),35044)
a.bindBuffer(b,null)
return new Z.e1(b,u)},
aD:function(a){return new Z.bq(a)},
e1:function e1(a,b){this.a=a
this.b=b},
d9:function d9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iY:function iY(a){this.a=a},
da:function da(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
bq:function bq(a){this.a=a}},D={
Q:function(){var u=new D.bP()
u.sae(null)
u.saS(null)
u.c=null
u.d=0
return u},
fe:function fe(){},
bP:function bP(){var _=this
_.d=_.c=_.b=_.a=null},
fx:function fx(a){this.a=a},
fy:function fy(a){this.a=a},
A:function A(){this.b=null},
bT:function bT(a){this.b=null
this.$ti=a},
bU:function bU(a){this.b=null
this.$ti=a},
O:function O(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bx:function bx(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ab:function ab(){},
ds:function ds(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dF:function dF(){},
dM:function dM(){}},X={db:function db(a,b){this.a=a
this.b=b},dr:function dr(a,b){this.a=a
this.b=b},fM:function fM(){var _=this
_.d=_.c=_.b=_.a=null},du:function du(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fV:function fV(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},au:function au(a,b,c){this.a=a
this.b=b
this.c=c},bl:function bl(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hj:function hj(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ct:function ct(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hw:function hw(){},dT:function dT(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ie:function ie(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dY:function dY(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
n9:function(a){var u=new X.fG(),t=new V.aY(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lL
if(t==null){t=V.lK(0,0,1,1)
$.lL=t}u.r=t
return u},
dc:function dc(){},
fG:function fG(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dE:function dE(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dP:function dP(){}},V={
pf:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.ai(a-b,u)
return(a<0?a+u:a)+b},
U:function(a,b,c){if(a==null)return C.b.a9("null",c)
return C.b.a9(C.c.e3(Math.abs(a-0)<$.P().a?0:a,b),c+b+1)},
cb:function(a,b,c){var u,t,s,r,q,p
H.m(a,"$ib",[P.t],"$ab")
u=H.e([],[P.h])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.z)(a),++r){q=V.U(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.c(u,p)
C.a.k(u,p,C.b.a9(u[p],s))}return u},
lg:function(a){return C.c.iJ(Math.pow(2,C.K.b0(Math.log(H.oK(a))/Math.log(2))))},
dz:function(){var u=$.lB
return u==null?$.lB=V.b5(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b5:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.an(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lA:function(a,b,c){var u=c.t(0,Math.sqrt(c.C(c))),t=b.at(u),s=t.t(0,Math.sqrt(t.C(t))),r=u.at(s),q=new V.I(a.a,a.b,a.c),p=s.P(0).C(q),o=r.P(0).C(q),n=u.P(0).C(q)
return V.b5(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bD:function(){var u=$.lF
return u==null?$.lF=new V.ac(0,0):u},
lG:function(){var u=$.cz
return u==null?$.cz=new V.a0(0,0,0):u},
lK:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dJ(a,b,c,d)},
cL:function(){var u=$.lY
return u==null?$.lY=new V.I(0,0,0):u},
nS:function(){var u=$.iJ
return u==null?$.iJ=new V.I(-1,0,0):u},
kY:function(){var u=$.iK
return u==null?$.iK=new V.I(0,1,0):u},
lZ:function(){var u=$.iL
return u==null?$.iL=new V.I(0,0,1):u},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
aY:function aY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fw:function fw(a){this.a=a},
dy:function dy(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
an:function an(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ac:function ac(a,b){this.a=a
this.b=b},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
bn:function bn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dJ:function dJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
R:function R(a,b){this.a=a
this.b=b},
I:function I(a,b,c){this.a=a
this.b=b
this.c=c},
ah:function(a){var u=new V.hI()
u.ej(a)
return u},
f0:function f0(){},
bk:function bk(){},
dv:function dv(){},
bm:function bm(){this.a=null},
hI:function hI(){this.a=null},
cC:function cC(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dS:function dS(a,b,c){this.a=a
this.b=b
this.c=c},
cG:function cG(a){this.b=a
this.c=null},
id:function id(){this.c=this.b=this.a=null},
cH:function cH(a){this.b=a
this.a=this.c=null},
p9:function(a){P.nJ(C.I,new V.kw(a))},
lJ:function(a){var u=new V.hy(a),t=document.getElementById(a)
u.c=t
if(t==null)H.w("Failed to find "+a+" for RadioGroup")
return u},
nE:function(a){var u=new V.hM()
u.el(a,!0)
return u},
kw:function kw(a){this.a=a},
hy:function hy(a){this.a=a
this.c=null},
hz:function hz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hM:function hM(){this.b=this.a=null},
hO:function hO(a){this.a=a},
hN:function hN(a){this.a=a},
i4:function i4(a,b){this.a=a
this.c=null
this.d=b},
i6:function i6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i5:function i5(){}},U={
kJ:function(){var u=new U.ff()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
ls:function(a){var u=new U.dd()
u.a=a
return u},
ff:function ff(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dd:function dd(){this.b=this.a=null},
cp:function cp(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a9:function a9(){},
dZ:function dZ(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
e_:function e_(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e0:function e0(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={di:function di(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nl:function(a,b){var u=a.b_,t=new A.h0(b,u)
t.ek(b,u)
t.eh(a,b)
return t},
nm:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.m(a9,"$ib",[A.aw],"$ab")
H.m(b0,"$ib",[A.ay],"$ab")
H.m(b1,"$ib",[A.az],"$ab")
u="MaterialLight_"+a0.gah(a0)+a1.gah(a1)+a2.gah(a2)+a3.gah(a3)+a4.gah(a4)+a5.gah(a5)+a6.gah(a6)+a7.gah(a7)+a8.gah(a8)+"_"
u+=a?"1":"0"
u+=b?"1":"0"
u+=c?"1":"0"
u=u+"0_"+e
t=a9.length
if(t>0){u+="_Dir"
for(s=0;s<a9.length;a9.length===t||(0,H.z)(a9),++s)u+="_"+H.k(a9[s].a)}t=b0.length
if(t>0){u+="_Point"
for(s=0;s<b0.length;b0.length===t||(0,H.z)(b0),++s)u+="_"+H.k(b0[s].a)}t=b1.length
if(t>0){u+="_Spot"
for(s=0;s<b1.length;b1.length===t||(0,H.z)(b1),++s)u+="_"+H.k(b1[s].a)}for(t=a9.length,r=0,q=!1,s=0;s<t;++s,q=!0)r+=a9[s].b
for(t=b0.length,s=0;s<t;++s,q=!0)r+=b0[s].b
for(p=b1.length,s=0;s<p;++s,q=!0)r+=b1[s].b
if(!a6.a)p=!1
else p=!0
if(!p)if(!a7.a)o=!1
else o=!0
else o=!0
if(!a1.a)p=!1
else p=!0
if(!p){if(!a2.a)p=!1
else p=!0
if(!p){if(!a3.a)p=!1
else p=!0
if(!p)if(!a4.a)p=!1
else p=!0
else p=!0
n=p}else n=!0}else n=!0
p=!a4.a
if(p)m=!1
else m=!0
l=m||t>0||o
if(!a2.a)t=!1
else t=!0
if(!t){if(!a3.a)t=!1
else t=!0
if(!t){if(p)t=!1
else t=!0
k=t}else k=!0}else k=!0
if(!k){if(!a5.a)t=!1
else t=!0
j=t||o}else j=!0
if(!a5.a)i=!1
else i=!0
h=e>0
g=j||i||l||!1
f=$.bf()
if(j){t=$.aU()
f=new Z.bq(f.a|t.a)}if(i){t=$.be()
f=new Z.bq(f.a|t.a)}if(h){t=$.bd()
f=new Z.bq(f.a|t.a)}return new A.h3(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,r,o,k,o,q,g,!0,!1,!1,n,q,l,j,i,!1,!1,h,!1,!1,c,!1,e,u.charCodeAt(0)==0?u:u,f)},
jS:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jT:function(a,b,c){var u
A.jS(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.kz(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
ok:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jS(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
oh:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jT(b,t,"ambient")
b.a+="\n"},
oi:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jT(b,t,"diffuse")
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
ol:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jT(b,t,"invDiffuse")
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
or:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jT(b,t,"specular")
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
on:function(a,b){var u,t,s
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
op:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jS(b,t,"reflect")
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
oq:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jS(b,t,"refract")
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
oj:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.k(u)
s=A.kz(t)
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
r=[P.h]
o=H.e([],r)
if(!a.b.a)n=!1
else n=!0
if(n)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.e([],r)
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
c.a+="      highLight = intensity*("+C.a.u(m," + ")+");\n"}else c.a+="   highLight = "+C.a.u(m," + ")+";\n"
C.a.h(o,"highLight")}r=c.a+="   return lit.color*("+C.a.u(o," + ")+");\n"
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
oo:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.k(u)
s=A.kz(t)
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
c.a=r+"\n"}r=[P.h]
l=H.e([],r)
C.a.h(l,"lit.color")
if(o)C.a.h(l,"attenuation")
if(u)C.a.h(l,"textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.u(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.e([],r)
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
k=H.e([],r)
if(!a.c.a)r=!1
else r=!0
if(r)C.a.h(k,"diffuse(norm, normDir)")
if(!a.d.a)r=!1
else r=!0
if(r)C.a.h(k,"invDiffuse(norm, normDir)")
if(!a.e.a)r=!1
else r=!0
if(r)C.a.h(k,"specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.a.u(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.u(l," + ")+");\n"
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
os:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.k(u)
s=A.kz(t)
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
c.a=u+"\n"}u=[P.h]
j=H.e([],u)
if(n)C.a.h(j,"attenuation")
if(o)C.a.h(j,"scale")
if(m)C.a.h(j,"texture2D(txt2D, txtLoc).rgb")
else C.a.h(j,"vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.u(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.e([],u)
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
i=H.e([],u)
if(!a.c.a)u=!1
else u=!0
if(u)C.a.h(i,"diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)C.a.h(i,"invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)C.a.h(i,"specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.a.u(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.u(j," + ")+");\n"
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
om:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.e([],[P.h])
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
u=b.a+="   return "+C.a.u(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
ot:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.ai("")
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
A.ok(a,j)
A.oh(a,j)
A.oi(a,j)
A.ol(a,j)
A.or(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.op(a,j)
A.oq(a,j)}A.on(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.z)(q),++o)A.oj(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.z)(q),++o)A.oo(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.z)(q),++o)A.os(a,q[o],j)
A.om(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.e([],[P.h])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.z)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ad(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.z)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ad(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.z)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ad(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)C.a.h(n,"emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)C.a.h(n,"reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.u(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
ou:function(a,b){var u,t,s
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
ow:function(a,b){var u
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
ov:function(a,b){var u
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
oy:function(a,b){var u,t
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
oz:function(a,b){var u,t
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
ox:function(a,b){var u
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
oA:function(a,b){var u
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
kz:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.b.ad(a,1)},
kV:function(a,b,c,d,e){var u=new A.io(a,c,e)
u.f=d
u.shy(P.nj(d,0,P.l))
return u},
d7:function d7(a,b,c){this.a=a
this.b=b
this.c=c},
f4:function f4(a){this.a=a},
al:function al(a,b,c){this.a=a
this.b=b
this.c=c},
h0:function h0(a,b){var _=this
_.j_=_.iZ=_.ds=_.dr=_.b_=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jc=_.jb=_.ja=_.c9=_.c8=_.c7=_.c6=_.c5=_.c4=_.j9=_.j8=_.dB=_.j7=_.j6=_.dA=_.dz=_.j5=_.j4=_.dw=_.dv=_.j3=_.j2=_.du=_.j1=_.j0=_.dt=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aw:function aw(a,b){this.a=a
this.b=b},
ay:function ay(a,b){this.a=a
this.b=b},
az:function az(a,b){this.a=a
this.b=b},
h3:function h3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.b_=b3
_.dr=b4},
c0:function c0(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c1:function c1(a,b,c,d,e,f,g,h,i,j){var _=this
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
c4:function c4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cB:function cB(){},
dU:function dU(){},
it:function it(a){this.a=a},
aC:function aC(a,b,c){this.a=a
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
ae:function ae(a,b,c){this.a=a
this.c=b
this.d=c},
ip:function ip(a,b,c){this.a=a
this.c=b
this.d=c},
X:function X(a,b,c){this.a=a
this.c=b
this.d=c},
cI:function cI(a,b,c){this.a=a
this.c=b
this.d=c},
iu:function iu(a,b,c){this.a=a
this.c=b
this.d=c},
cJ:function cJ(a,b,c){this.a=a
this.c=b
this.d=c},
av:function av(a,b,c){this.a=a
this.c=b
this.d=c},
c2:function c2(a,b,c){this.a=a
this.c=b
this.d=c},
c3:function c3(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ml:function(a,b,c){var u,t=null
H.n(b,{func:1,ret:-1,args:[F.ao,P.t,P.t]})
u=F.kT()
F.cZ(u,t,b,c,a,1,0,0,1)
F.cZ(u,t,b,c,a,0,1,0,3)
F.cZ(u,t,b,c,a,0,0,1,2)
F.cZ(u,t,b,c,a,-1,0,0,0)
F.cZ(u,t,b,c,a,0,-1,0,0)
F.cZ(u,t,b,c,a,0,0,-1,3)
u.a2()
return u},
jN:function(a){var u,t=a.a>0?1:0
if(a.b>0)t+=2
u=a.c
if(typeof u!=="number")return u.ac()
return(u>0?t+4:t)*2},
cZ:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={}
H.n(c,{func:1,ret:-1,args:[F.ao,P.t,P.t]})
u=a1+a2
t=u+a3
s=a2+a3
r=a3+a1
q=new V.I(t,s+a1,r+a2)
e.a=q
p=a1-a2
o=a2-a3
n=a3-a1
m=e.b=new V.I(p+a3,o+a1,n+a2)
l=new V.I(p-a3,o-a1,n-a2)
e.c=l
k=e.d=new V.I(u-a3,s-a1,r-a2)
if(t>0){e.d=m
e.b=k
t=m
u=k}else{t=k
u=m}for(r=t,t=u,u=q,s=l,j=0;j<a4;++j,i=r,r=u,u=t,t=s,s=i){e.a=t
e.b=s
e.c=r
e.d=u}h=F.jN(u)
g=F.jN(e.b)
f=F.eZ(d,a0,new F.jM(e,F.jN(e.c),F.jN(e.d),g,h,c),b)
if(f!=null)a.bi(f)},
oO:function(a,b,c,d){return F.oP(!1,!1,c,new F.jY(1,1),d)},
oP:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.t,args:[P.t,P.t]})
if(e<3)return
if(c<1)return
u=F.eZ(c,e,new F.k_(d),null)
if(u==null)return
u.a2()
u.bd()
return u},
p2:function(a,b){var u=F.eZ(a,b,new F.k9(),null)
u.d.bk()
u.a2()
u.bd()
return u},
pa:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kx()
t=F.ml(a,new F.ky(s,1),b)
t.bd()
return t},
pe:function(a,b){return F.oQ(b,a,0.5,1,new F.kA())},
oQ:function(a,b,c,d,e){var u=F.eZ(a,b,new F.jZ(H.n(e,{func:1,ret:V.a0,args:[P.t]}),d,b,c),null)
if(u==null)return
u.a2()
u.bd()
return u},
ld:function(a,b){var u,t={}
t.a=u
t.a=null
t.a=new F.k2()
return F.eZ(b,a,new F.k3(t),null)},
eZ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.ao,P.t,P.t]})
if(a<1)return
if(b<1)return
u=F.kT()
t=H.e([],[F.ao])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.kZ(g,g,new V.aY(p,0,0,1),g,g,new V.ac(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.c0(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.kZ(g,g,new V.aY(j,i,h,1),g,g,new V.ac(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.c0(d))}}u.d.hC(a+1,b+1,t)
return u},
dk:function(a,b,c){var u=new F.a8(),t=a.a
if(t==null)H.w(P.C("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.w(P.C("May not create a face with vertices attached to different shapes."))
u.bQ(a)
u.bR(b)
u.hf(c)
C.a.h(u.a.a.d.b,u)
u.a.a.Y()
return u},
nf:function(a,b){var u=new F.bj(),t=a.a
if(t==null)H.w(P.C("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.w(P.C("May not create a line with vertices attached to different shapes."))
u.bQ(a)
u.bR(b)
C.a.h(u.a.a.c.b,u)
u.a.a.Y()
return u},
kT:function(){var u=new F.bZ(),t=new F.iM(u)
t.b=!1
t.shz(H.e([],[F.ao]))
u.a=t
t=new F.hL(u)
t.sbJ(H.e([],[F.bC]))
u.b=t
t=new F.hK(u)
t.seX(H.e([],[F.bj]))
u.c=t
t=new F.hJ(u)
t.seP(H.e([],[F.a8]))
u.d=t
u.e=null
return u},
kZ:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ao(),r=new F.iU()
r.sbJ(H.e([],[F.bC]))
s.b=r
r=new F.iQ()
u=[F.bj]
r.seY(H.e([],u))
r.seZ(H.e([],u))
s.c=r
r=new F.iN()
u=[F.a8]
r.seQ(H.e([],u))
r.seR(H.e([],u))
r.seS(H.e([],u))
s.d=r
h=$.lj()
s.e=0
r=$.bf()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aU().a)!==0?e:t
s.x=(u&$.be().a)!==0?b:t
s.y=(u&$.bt().a)!==0?f:t
s.z=(u&$.bu().a)!==0?g:t
s.Q=(u&$.lk().a)!==0?c:t
s.ch=(u&$.bI().a)!==0?i:0
s.cx=(u&$.bd().a)!==0?a:t
return s},
jM:function jM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jY:function jY(a,b){this.a=a
this.b=b},
k_:function k_(a){this.a=a},
k9:function k9(){},
kx:function kx(){},
ky:function ky(a,b){this.a=a
this.b=b},
kA:function kA(){},
jZ:function jZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k2:function k2(){},
k3:function k3(a){this.a=a},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fz:function fz(){},
hP:function hP(){},
bj:function bj(){this.b=this.a=null},
fO:function fO(){},
im:function im(){},
bC:function bC(){this.a=null},
bZ:function bZ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hJ:function hJ(a){this.a=a
this.b=null},
hK:function hK(a){this.a=a
this.b=null},
hL:function hL(a){this.a=a
this.b=null},
ao:function ao(){var _=this
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
hp:function hp(){},
iU:function iU(){this.b=null}},T={cF:function cF(){},i3:function i3(){},i7:function i7(){var _=this
_.y=_.x=_.r=_.d=_.c=_.b=_.a=null},i8:function i8(a){var _=this
_.a=a
_.e=_.d=_.b=null},i9:function i9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},ia:function ia(a,b,c){this.a=a
this.b=b
this.c=c}},K={
mt:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="testCanvas",a="heightMaps",a0="modifiers",a1={},a2=V.nE("Test 037"),a3=W.kH()
a3.className="pageLargeCanvas"
a3.id=b
a2.a.appendChild(a3)
u=[P.h]
a2.dj(H.e(["A test of applying a height map to an image. ","Some shapes will take a bit to calculate depending on quality of mapping."],u))
a2.hA(H.e(["heightMaps","shapes","scalars"],u))
a2.dj(H.e(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b)
if(t==null)H.w(P.C("Failed to find an element with the identifier, testCanvas."))
s=E.nI(t,!0,!0,!0,!1)
r=new O.dw()
r.seD(O.kI(V.an))
r.e.b8(r.gfa(),r.gfc())
a2=new O.b4(r,"emission")
a2.c=new A.al(!1,!1,!1)
a2.f=new V.a2(0,0,0)
r.f=a2
a2=new O.b4(r,"ambient")
a2.c=new A.al(!1,!1,!1)
a2.f=new V.a2(0,0,0)
r.r=a2
a2=new O.b4(r,"diffuse")
a2.c=new A.al(!1,!1,!1)
a2.f=new V.a2(0,0,0)
r.x=a2
a2=new O.b4(r,"invDiffuse")
a2.c=new A.al(!1,!1,!1)
a2.f=new V.a2(0,0,0)
r.y=a2
a2=new O.h6(r,"specular")
a2.c=new A.al(!1,!1,!1)
a2.f=new V.a2(0,0,0)
a2.ch=100
r.z=a2
a2=new O.h2(r,"bump")
a2.c=new A.al(!1,!1,!1)
r.Q=a2
r.ch=null
a2=new O.b4(r,"reflect")
a2.c=new A.al(!1,!1,!1)
a2.f=new V.a2(0,0,0)
r.cx=a2
a2=new O.h5(r,"refract")
a2.c=new A.al(!1,!1,!1)
a2.f=new V.a2(0,0,0)
a2.ch=1
r.cy=a2
a2=new O.h1(r,"alpha")
a2.c=new A.al(!1,!1,!1)
a2.f=1
r.db=a2
a2=new D.ds()
a2.bs(D.ab)
a2.seM(H.e([],[D.bx]))
a2.sh_(H.e([],[D.dF]))
a2.shm(H.e([],[D.dM]))
a2.y=a2.x=null
a2.cw(a2.gf8(),a2.gfO(),a2.gfS())
r.dx=a2
q=new O.h4()
q.b=new V.aY(0,0,0,0)
q.c=1
q.d=10
q.e=!1
r.dy=q
q=a2.x
a2=q==null?a2.x=D.Q():q
a2.h(0,r.gha())
a2=r.dx
q=a2.y
a2=q==null?a2.y=D.Q():q
a2.h(0,r.gfg())
r.fr=null
a2=r.dx
p=V.kY()
q=U.ls(V.lA(V.lG(),p,new V.I(1,1,-3)))
o=new V.a2(1,1,1)
n=new D.bx()
n.c=new V.a2(1,1,1)
n.a=V.lZ()
n.d=V.kY()
n.e=V.nS()
m=n.b
n.b=q
q.gw().h(0,n.geo())
q=new D.O("mover",m,n.b,[U.a9])
q.b=!0
n.an(q)
if(!n.c.q(0,o)){m=n.c
n.c=o
q=new D.O("color",m,o,[V.a2])
q.b=!0
n.an(q)}a2.h(0,n)
a2=r.r
a2.saW(0,new V.a2(0,0,1))
a2=r.x
a2.saW(0,new V.a2(0,1,0))
a2=r.z
a2.saW(0,new V.a2(1,0,0))
a2=r.z
a2.dd(new A.al(!0,!1,!1))
a2.de(10)
l=E.lu()
l.se1(r)
k=E.lu()
k.y.h(0,l)
a2=new U.cp()
a2.bs(U.a9)
a2.b8(a2.gf6(),a2.gfQ())
a2.e=null
a2.f=V.dz()
a2.r=0
q=s.r
n=new U.e_()
j=U.kJ()
j.scu(0,!0)
j.scf(6.283185307179586)
j.sci(0)
j.sV(0,0)
j.scg(100)
j.sR(0)
j.sc1(0.5)
n.b=j
i=n.gaB()
j.gw().h(0,i)
j=U.kJ()
j.scu(0,!0)
j.scf(6.283185307179586)
j.sci(0)
j.sV(0,0)
j.scg(100)
j.sR(0)
j.sc1(0.5)
n.c=j
j.gw().h(0,i)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
h=new X.au(!1,!1,!1)
m=n.d
n.d=h
j=[X.au]
i=new D.O(a0,m,h,j)
i.b=!0
n.N(i)
i=n.f
if(i!==!1){n.f=!1
i=new D.O("invertX",i,!1,[P.aa])
i.b=!0
n.N(i)}i=n.r
if(i!==!1){n.r=!1
i=new D.O("invertY",i,!1,[P.aa])
i.b=!0
n.N(i)}n.aV(q)
a2.h(0,n)
q=s.r
n=new U.dZ()
i=U.kJ()
i.scu(0,!0)
i.scf(6.283185307179586)
i.sci(0)
i.sV(0,0)
i.scg(100)
i.sR(0)
i.sc1(0.2)
n.b=i
i.gw().h(0,n.gaB())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
h=new X.au(!0,!1,!1)
m=n.c
n.c=h
i=new D.O(a0,m,h,j)
i.b=!0
n.N(i)
n.aV(q)
a2.h(0,n)
q=s.r
n=new U.e0()
n.c=0.01
n.e=n.d=0
h=new X.au(!1,!1,!1)
n.b=h
j=new D.O(a0,null,h,j)
j.b=!0
n.N(j)
n.aV(q)
a2.h(0,n)
k.sb2(a2)
a2=new M.di()
a2.a=!0
a2.seG(0,O.kI(E.am))
a2.e.b8(a2.gfi(),a2.gfk())
a2.y=a2.x=a2.r=a2.f=null
g=X.n9(null)
f=new X.dE()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.sb2(null)
q=f.c
if(!(Math.abs(q-1.0471975511965976)<$.P().a)){f.c=1.0471975511965976
q=new D.O("fov",q,1.0471975511965976,[P.t])
q.b=!0
f.aE(q)}q=f.d
if(!(Math.abs(q-0.1)<$.P().a)){f.d=0.1
q=new D.O("near",q,0.1,[P.t])
q.b=!0
f.aE(q)}q=f.e
if(!(Math.abs(q-2000)<$.P().a)){f.e=2000
q=new D.O("far",q,2000,[P.t])
q.b=!0
f.aE(q)}q=a2.b
if(q!==f){if(q!=null)q.gw().K(0,a2.gaC())
m=a2.b
a2.b=f
f.gw().h(0,a2.gaC())
q=new D.O("camera",m,a2.b,[X.dc])
q.b=!0
a2.aD(q)}q=a2.c
if(q!==g){if(q!=null)q.gw().K(0,a2.gaC())
m=a2.c
a2.c=g
g.gw().h(0,a2.gaC())
q=new D.O("target",m,a2.c,[X.dP])
q.b=!0
a2.aD(q)}a2.e.h(0,k)
a2.b.sb2(U.ls(V.b5(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
q=s.d
if(q!==a2){if(q!=null)q.gw().K(0,s.gcF())
s.d=a2
a2.gw().h(0,s.gcF())
s.cG()}a1.a=null
a1.b=""
a1.c=1
e=new K.kc(a1,s,l)
a2=new V.i4(a,new K.kd(a1,e))
u=u.getElementById(a)
a2.c=u
if(u==null)H.w("Failed to find heightMaps for Texture2DGroup")
a2.X(0,"../resources/HeightMap1.png",!0)
a2.h(0,"../resources/HeightMap2.png")
a2.h(0,"../resources/HeightMap3.png")
a2.h(0,"../resources/HeightMap4.png")
a2.h(0,"../resources/ScrewHeightMap.png")
d=new K.ke(a1,e)
a2=V.lJ("shapes")
a2.X(0,"Cuboid",new K.km(d))
a2.X(0,"Cylinder",new K.kn(d))
a2.X(0,"LatLonSphere",new K.ko(d))
a2.X(0,"Sphere",new K.kp(d))
a2.X(0,"Toroid",new K.kq(d))
a2.X(0,"Grid Small",new K.kr(d))
a2.bS(0,"Grid Medium",new K.ks(d),!0)
a2.X(0,"Grid Large",new K.kt(d))
c=new K.kf(a1,e)
a1=V.lJ("scalars")
a1.X(0,"0.1",new K.kg(c))
a1.X(0,"0.2",new K.kh(c))
a1.X(0,"0.4",new K.ki(c))
a1.bS(0,"0.6",new K.kj(c),!0)
a1.X(0,"0.8",new K.kk(c))
a1.X(0,"1.0",new K.kl(c))
V.p9(s)},
kc:function kc(a,b,c){this.a=a
this.b=b
this.c=c},
kb:function kb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kd:function kd(a,b){this.a=a
this.b=b},
ke:function ke(a,b){this.a=a
this.b=b},
km:function km(a){this.a=a},
kn:function kn(a){this.a=a},
ko:function ko(a){this.a=a},
kp:function kp(a){this.a=a},
kq:function kq(a){this.a=a},
kr:function kr(a){this.a=a},
ks:function ks(a){this.a=a},
kt:function kt(a){this.a=a},
kf:function kf(a,b){this.a=a
this.b=b},
kg:function kg(a){this.a=a},
kh:function kh(a){this.a=a},
ki:function ki(a){this.a=a},
kj:function kj(a){this.a=a},
kk:function kk(a){this.a=a},
kl:function kl(a){this.a=a}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kO.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gH:function(a){return H.cA(a)},
i:function(a){return"Instance of '"+H.bW(a)+"'"}}
J.fJ.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iaa:1}
J.dp.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0}}
J.dq.prototype={
gH:function(a){return 0},
i:function(a){return String(a)}}
J.hu.prototype={}
J.bF.prototype={}
J.bi.prototype={
i:function(a){var u=a[$.mC()]
if(u==null)return this.ef(a)
return"JavaScript function for "+H.k(J.as(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ikK:1}
J.aK.prototype={
h:function(a,b){H.B(b,H.u(a,0))
if(!!a.fixed$length)H.w(P.F("add"))
a.push(b)},
dZ:function(a,b){if(!!a.fixed$length)H.w(P.F("removeAt"))
if(b<0||b>=a.length)throw H.d(P.dI(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var u
if(!!a.fixed$length)H.w(P.F("remove"))
for(u=0;u<a.length;++u)if(J.L(a[u],b)){a.splice(u,1)
return!0}return!1},
D:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.d(P.bw(a))}},
u:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.k(a[u]))
return t.join(b)},
i9:function(a){return this.u(a,"")},
i3:function(a,b,c,d){var u,t,s
H.B(b,d)
H.n(c,{func:1,ret:d,args:[d,H.u(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.d(P.bw(a))}return t},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
ed:function(a,b,c){if(b<0||b>a.length)throw H.d(P.ad(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.ad(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.u(a,0)])
return H.e(a.slice(b,c),[H.u(a,0)])},
gi2:function(a){if(a.length>0)return a[0]
throw H.d(H.lw())},
gaw:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.lw())},
b9:function(a,b,c,d){var u,t,s=H.u(a,0)
H.m(d,"$ij",[s],"$aj")
if(!!a.immutable$list)H.w(P.F("setRange"))
P.bo(b,c,a.length)
u=c-b
if(u===0)return
P.kS(0,"skipCount")
H.m(d,"$ib",[s],"$ab")
s=J.cc(d)
if(u>s.gl(d))throw H.d(H.nc())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
br:function(a,b){var u=H.u(a,0)
H.n(b,{func:1,ret:P.l,args:[u,u]})
if(!!a.immutable$list)H.w(P.F("sort"))
H.dL(a,0,a.length-1,b,u)},
as:function(a,b){var u
for(u=0;u<a.length;++u)if(J.L(a[u],b))return!0
return!1},
i:function(a){return P.kL(a,"[","]")},
gU:function(a){return new J.ap(a,a.length,[H.u(a,0)])},
gH:function(a){return H.cA(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.w(P.F("set length"))
if(b<0)throw H.d(P.ad(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.d(H.ca(a,b))
return a[b]},
k:function(a,b,c){H.B(c,H.u(a,0))
if(!!a.immutable$list)H.w(P.F("indexed set"))
if(b>=a.length||b<0)throw H.d(H.ca(a,b))
a[b]=c},
n:function(a,b){var u,t=[H.u(a,0)]
H.m(b,"$ib",t,"$ab")
u=C.e.n(a.length,b.gl(b))
t=H.e([],t)
this.sl(t,u)
this.b9(t,0,a.length,a)
this.b9(t,a.length,u,b)
return t},
$ij:1,
$ib:1}
J.kN.prototype={}
J.ap.prototype={
gJ:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.z(s))
u=t.c
if(u>=r){t.scW(null)
return!1}t.scW(s[u]);++t.c
return!0},
scW:function(a){this.d=H.B(a,H.u(this,0))},
$ib1:1}
J.bA.prototype={
hN:function(a,b){var u
H.mu(b)
if(typeof b!=="number")throw H.d(H.aj(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbg(b)
if(this.gbg(a)===u)return 0
if(this.gbg(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbg:function(a){return a===0?1/a<0:a<0},
iJ:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.F(""+a+".toInt()"))},
b0:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.F(""+a+".floor()"))},
ag:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.F(""+a+".round()"))},
e3:function(a,b){var u
if(b>20)throw H.d(P.ad(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbg(a))return"-"+u
return u},
b6:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.ad(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.T(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.w(P.F("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.c(t,1)
u=t[1]
if(3>=s)return H.c(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.m("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
n:function(a,b){if(typeof b!=="number")throw H.d(H.aj(b))
return a+b},
p:function(a,b){if(typeof b!=="number")throw H.d(H.aj(b))
return a-b},
m:function(a,b){if(typeof b!=="number")throw H.d(H.aj(b))
return a*b},
ai:function(a,b){var u
if(typeof b!=="number")throw H.d(H.aj(b))
u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
cE:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dg(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.dg(a,b)},
dg:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.F("Result of truncating division is "+H.k(u)+": "+H.k(a)+" ~/ "+b))},
aH:function(a,b){var u
if(a>0)u=this.df(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hk:function(a,b){if(b<0)throw H.d(H.aj(b))
return this.df(a,b)},
df:function(a,b){return b>31?0:a>>>b},
ac:function(a,b){if(typeof b!=="number")throw H.d(H.aj(b))
return a>b},
$it:1,
$ia7:1}
J.dn.prototype={$il:1}
J.dm.prototype={}
J.bh.prototype={
T:function(a,b){if(b<0)throw H.d(H.ca(a,b))
if(b>=a.length)H.w(H.ca(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.d(H.ca(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.d(P.kF(b,null,null))
return a+b},
aM:function(a,b,c,d){var u,t
c=P.bo(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a6:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.ad(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a5:function(a,b){return this.a6(a,b,0)},
A:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.w(H.aj(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.O()
if(b<0)throw H.d(P.dI(b,null))
if(b>c)throw H.d(P.dI(b,null))
if(c>a.length)throw H.d(P.dI(c,null))
return a.substring(b,c)},
ad:function(a,b){return this.A(a,b,null)},
m:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.G)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a9:function(a,b){var u=b-a.length
if(u<=0)return a
return this.m(" ",u)+a},
dJ:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.ad(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dI:function(a,b){return this.dJ(a,b,0)},
i:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ilD:1,
$ih:1}
H.a5.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.b.T(this.a,b)},
$acK:function(){return[P.l]},
$av:function(){return[P.l]},
$aj:function(){return[P.l]},
$ab:function(){return[P.l]}}
H.fu.prototype={}
H.dt.prototype={
gJ:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=J.cc(s),q=r.gl(s)
if(t.b!==q)throw H.d(P.bw(s))
u=t.c
if(u>=q){t.saP(null)
return!1}t.saP(r.I(s,u));++t.c
return!0},
saP:function(a){this.d=H.B(a,H.u(this,0))},
$ib1:1}
H.fZ.prototype={
gU:function(a){return new H.h_(J.bJ(this.a),this.b,this.$ti)},
gl:function(a){return J.aI(this.a)},
I:function(a,b){return this.b.$1(J.kE(this.a,b))},
$aj:function(a,b){return[b]}}
H.h_.prototype={
B:function(){var u=this,t=u.b
if(t.B()){u.saP(u.c.$1(t.gJ(t)))
return!0}u.saP(null)
return!1},
gJ:function(a){return this.a},
saP:function(a){this.a=H.B(a,H.u(this,1))},
$ab1:function(a,b){return[b]}}
H.iZ.prototype={
gU:function(a){return new H.j_(J.bJ(this.a),this.b,this.$ti)}}
H.j_.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(H.E(t.$1(u.gJ(u))))return!0
return!1},
gJ:function(a){var u=this.a
return u.gJ(u)}}
H.bQ.prototype={}
H.cK.prototype={
k:function(a,b,c){H.B(c,H.aG(this,"cK",0))
throw H.d(P.F("Cannot modify an unmodifiable list"))}}
H.dW.prototype={}
H.fh.prototype={
i:function(a){return P.kR(this)},
k:function(a,b,c){H.B(b,H.u(this,0))
H.B(c,H.u(this,1))
return H.n4()},
$ix:1}
H.fi.prototype={
gl:function(a){return this.a},
bf:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bf(0,b))return
return this.cY(b)},
cY:function(a){return this.b[H.K(a)]},
D:function(a,b){var u,t,s,r,q=this,p=H.u(q,1)
H.n(b,{func:1,ret:-1,args:[H.u(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.B(q.cY(r),p))}}}
H.ij.prototype={
a8:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.k(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fL.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.k(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.k(t.a)+")"
return s+r+"' on '"+u+"' ("+H.k(t.a)+")"}}
H.ix.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kB.prototype={
$1:function(a){if(!!J.S(a).$iby)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:23}
H.ey.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaq:1}
H.ck.prototype={
i:function(a){return"Closure '"+H.bW(this).trim()+"'"},
$ikK:1,
giT:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i0.prototype={}
H.hT.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cf(u)+"'"}}
H.ch.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.ch))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.cA(this.a)
else u=typeof t!=="object"?J.d5(t):H.cA(t)
return(u^H.cA(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.bW(u)+"'")}}
H.il.prototype={
i:function(a){return this.a}}
H.fd.prototype={
i:function(a){return this.a}}
H.hG.prototype={
i:function(a){return"RuntimeError: "+H.k(this.a)}}
H.j0.prototype={
i:function(a){return"Assertion failed: "+P.dj(this.a)}}
H.Z.prototype={
gl:function(a){return this.a},
gal:function(a){return new H.fQ(this,[H.u(this,0)])},
bf:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cT(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cT(t,b)}else return s.i6(b)},
i6:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cc(u.by(t,u.cb(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.ba(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.ba(r,b)
s=t==null?null:t.b
return s}else return q.i7(b)},
i7:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.by(r,s.cb(a))
t=s.cc(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.B(b,H.u(s,0))
H.B(c,H.u(s,1))
if(typeof b==="string"){u=s.b
s.cK(u==null?s.b=s.bH():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cK(t==null?s.c=s.bH():t,b,c)}else s.i8(b,c)},
i8:function(a,b){var u,t,s,r,q=this
H.B(a,H.u(q,0))
H.B(b,H.u(q,1))
u=q.d
if(u==null)u=q.d=q.bH()
t=q.cb(a)
s=q.by(u,t)
if(s==null)q.bO(u,t,[q.bI(a,b)])
else{r=q.cc(s,a)
if(r>=0)s[r].b=b
else s.push(q.bI(a,b))}},
D:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.u(s,0),H.u(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.d(P.bw(s))
u=u.c}},
cK:function(a,b,c){var u,t=this
H.B(b,H.u(t,0))
H.B(c,H.u(t,1))
u=t.ba(a,b)
if(u==null)t.bO(a,b,t.bI(b,c))
else u.b=c},
bI:function(a,b){var u=this,t=new H.fP(H.B(a,H.u(u,0)),H.B(b,H.u(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
cb:function(a){return J.d5(a)&0x3ffffff},
cc:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.L(a[t].a,b))return t
return-1},
i:function(a){return P.kR(this)},
ba:function(a,b){return a[b]},
by:function(a,b){return a[b]},
bO:function(a,b,c){a[b]=c},
eK:function(a,b){delete a[b]},
cT:function(a,b){return this.ba(a,b)!=null},
bH:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bO(t,u,t)
this.eK(t,u)
return t}}
H.fP.prototype={}
H.fQ.prototype={
gl:function(a){return this.a.a},
gU:function(a){var u=this.a,t=new H.fR(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fR.prototype={
gJ:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bw(t))
else{t=u.c
if(t==null){u.scJ(null)
return!1}else{u.scJ(t.a)
u.c=u.c.c
return!0}}},
scJ:function(a){this.d=H.B(a,H.u(this,0))},
$ib1:1}
H.k5.prototype={
$1:function(a){return this.a(a)},
$S:23}
H.k6.prototype={
$2:function(a,b){return this.a(a,b)},
$S:39}
H.k7.prototype={
$1:function(a){return this.a(H.K(a))},
$S:40}
H.fK.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ilD:1,
$inA:1}
H.cv.prototype={$icv:1}
H.bB.prototype={$ibB:1,$inK:1}
H.dA.prototype={
gl:function(a){return a.length},
$iJ:1,
$aJ:function(){}}
H.cw.prototype={
j:function(a,b){H.bc(b,a,a.length)
return a[b]},
k:function(a,b,c){H.oS(c)
H.bc(b,a,a.length)
a[b]=c},
$abQ:function(){return[P.t]},
$av:function(){return[P.t]},
$ij:1,
$aj:function(){return[P.t]},
$ib:1,
$ab:function(){return[P.t]}}
H.dB.prototype={
k:function(a,b,c){H.a_(c)
H.bc(b,a,a.length)
a[b]=c},
$abQ:function(){return[P.l]},
$av:function(){return[P.l]},
$ij:1,
$aj:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]}}
H.hk.prototype={
j:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.hl.prototype={
j:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.hm.prototype={
j:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.hn.prototype={
j:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.ho.prototype={
j:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.dC.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bc(b,a,a.length)
return a[b]},
$ipA:1}
H.cx.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bc(b,a,a.length)
return a[b]},
$icx:1,
$iN:1}
H.cP.prototype={}
H.cQ.prototype={}
H.cR.prototype={}
H.cS.prototype={}
P.j2.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:26}
P.j1.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:31}
P.j3.prototype={
$0:function(){this.a.$0()},
$S:0}
P.j4.prototype={
$0:function(){this.a.$0()},
$S:0}
P.eF.prototype={
eu:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c9(new P.jC(this,b),0),a)
else throw H.d(P.F("`setTimeout()` not found."))},
ev:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c9(new P.jB(this,a,Date.now(),b),0),a)
else throw H.d(P.F("Periodic timer."))},
$ib7:1}
P.jC.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jB.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.cE(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bb.prototype={
ic:function(a){if(this.c!==6)return!0
return this.b.b.cq(H.n(this.d,{func:1,ret:P.aa,args:[P.M]}),a.a,P.aa,P.M)},
i5:function(a){var u=this.e,t=P.M,s={futureOr:1,type:H.u(this,1)},r=this.b.b
if(H.eW(u,{func:1,args:[P.M,P.aq]}))return H.lb(r.iE(u,a.a,a.b,null,t,P.aq),s)
else return H.lb(r.cq(H.n(u,{func:1,args:[P.M]}),a.a,null,t),s)}}
P.aE.prototype={
e2:function(a,b,c){var u,t,s,r=H.u(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.Y
if(u!==C.f){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.oC(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aE($.Y,[c])
s=b==null?1:3
this.cL(new P.bb(t,s,a,b,[r,c]))
return t},
iI:function(a,b){return this.e2(a,null,b)},
cL:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ibb")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaE")
s=u.a
if(s<4){u.cL(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.jW(null,null,s,H.n(new P.jc(t,a),{func:1,ret:-1}))}},
d8:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ibb")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaE")
u=q.a
if(u<4){q.d8(a)
return}p.a=u
p.c=q.c}o.a=p.bb(a)
u=p.b
u.toString
P.jW(null,null,u,H.n(new P.jg(o,p),{func:1,ret:-1}))}},
bL:function(){var u=H.f(this.c,"$ibb")
this.c=null
return this.bb(u)},
bb:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cP:function(a){var u,t,s=this,r=H.u(s,0)
H.lb(a,{futureOr:1,type:r})
u=s.$ti
if(H.l8(a,"$ico",u,"$aco"))if(H.l8(a,"$iaE",u,null))P.m_(a,s)
else P.nX(a,s)
else{t=s.bL()
H.B(a,r)
s.a=4
s.c=a
P.cN(s,t)}},
cQ:function(a,b){var u,t=this
H.f(b,"$iaq")
u=t.bL()
t.a=8
t.c=new P.ak(a,b)
P.cN(t,u)},
$ico:1}
P.jc.prototype={
$0:function(){P.cN(this.a,this.b)},
$S:0}
P.jg.prototype={
$0:function(){P.cN(this.b,this.a.a)},
$S:0}
P.jd.prototype={
$1:function(a){var u=this.a
u.a=0
u.cP(a)},
$S:26}
P.je.prototype={
$2:function(a,b){H.f(b,"$iaq")
this.a.cQ(a,b)},
$1:function(a){return this.$2(a,null)},
$S:49}
P.jf.prototype={
$0:function(){this.a.cQ(this.b,this.c)},
$S:0}
P.jj.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.e0(H.n(s.d,{func:1}),null)}catch(r){u=H.aH(r)
t=H.cd(r)
if(o.d){s=H.f(o.a.a.c,"$iak").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$iak")
else q.b=new P.ak(u,t)
q.a=!0
return}if(!!J.S(n).$ico){if(n instanceof P.aE&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$iak")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.iI(new P.jk(p),null)
s.a=!1}},
$S:3}
P.jk.prototype={
$1:function(a){return this.a},
$S:45}
P.ji.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.u(s,0)
q=H.B(n.c,r)
p=H.u(s,1)
n.a.b=s.b.b.cq(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aH(o)
t=H.cd(o)
s=n.a
s.b=new P.ak(u,t)
s.a=!0}},
$S:3}
P.jh.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$iak")
r=m.c
if(H.E(r.ic(u))&&r.e!=null){q=m.b
q.b=r.i5(u)
q.a=!1}}catch(p){t=H.aH(p)
s=H.cd(p)
r=H.f(m.a.a.c,"$iak")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ak(t,s)
n.a=!0}},
$S:3}
P.e2.prototype={}
P.hW.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.aE($.Y,[P.l])
r.a=0
u=H.u(s,0)
t=H.n(new P.hY(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.hZ(r,q),{func:1,ret:-1})
W.a6(s.a,s.b,t,!1,u)
return q}}
P.hY.prototype={
$1:function(a){H.B(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.u(this.b,0)]}}}
P.hZ.prototype={
$0:function(){this.b.cP(this.a.a)},
$S:0}
P.cD.prototype={}
P.hX.prototype={}
P.b7.prototype={}
P.ak.prototype={
i:function(a){return H.k(this.a)},
$iby:1}
P.jL.prototype={$ipO:1}
P.jV.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dD():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.i(0)
throw u},
$S:0}
P.jr.prototype={
iF:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.Y){a.$0()
return}P.ma(r,r,this,a,-1)}catch(s){u=H.aH(s)
t=H.cd(s)
P.jU(r,r,this,u,H.f(t,"$iaq"))}},
iG:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.f===$.Y){a.$1(b)
return}P.mb(r,r,this,a,b,-1,c)}catch(s){u=H.aH(s)
t=H.cd(s)
P.jU(r,r,this,u,H.f(t,"$iaq"))}},
hJ:function(a,b){return new P.jt(this,H.n(a,{func:1,ret:b}),b)},
bU:function(a){return new P.js(this,H.n(a,{func:1,ret:-1}))},
dk:function(a,b){return new P.ju(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
e0:function(a,b){H.n(a,{func:1,ret:b})
if($.Y===C.f)return a.$0()
return P.ma(null,null,this,a,b)},
cq:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.Y===C.f)return a.$1(b)
return P.mb(null,null,this,a,b,c,d)},
iE:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.Y===C.f)return a.$2(b,c)
return P.oD(null,null,this,a,b,c,d,e,f)}}
P.jt.prototype={
$0:function(){return this.a.e0(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.js.prototype={
$0:function(){return this.a.iF(this.b)},
$S:3}
P.ju.prototype={
$1:function(a){var u=this.c
return this.a.iG(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jo.prototype={
gU:function(a){return P.m1(this,this.r,H.u(this,0))},
gl:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.B(b,H.u(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cN(u==null?s.b=P.l1():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cN(t==null?s.c=P.l1():t,b)}else return s.ex(0,b)},
ex:function(a,b){var u,t,s,r=this
H.B(b,H.u(r,0))
u=r.d
if(u==null)u=r.d=P.l1()
t=r.cR(b)
s=u[t]
if(s==null)u[t]=[r.bu(b)]
else{if(r.cZ(s,b)>=0)return!1
s.push(r.bu(b))}return!0},
K:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.h5(this.c,b)
else return this.h4(0,b)},
h4:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.eV(r,b)
t=s.cZ(u,b)
if(t<0)return!1
s.dh(u.splice(t,1)[0])
return!0},
cN:function(a,b){H.B(b,H.u(this,0))
if(H.f(a[b],"$icO")!=null)return!1
a[b]=this.bu(b)
return!0},
h5:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$icO")
if(u==null)return!1
this.dh(u)
delete a[b]
return!0},
d2:function(){this.r=1073741823&this.r+1},
bu:function(a){var u,t=this,s=new P.cO(H.B(a,H.u(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.d2()
return s},
dh:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.d2()},
cR:function(a){return J.d5(a)&1073741823},
eV:function(a,b){return a[this.cR(b)]},
cZ:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.L(a[t].a,b))return t
return-1}}
P.cO.prototype={}
P.jp.prototype={
gJ:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bw(t))
else{t=u.c
if(t==null){u.scO(null)
return!1}else{u.scO(H.B(t.a,H.u(u,0)))
u.c=u.c.b
return!0}}},
scO:function(a){this.d=H.B(a,H.u(this,0))},
$ib1:1}
P.fS.prototype={
$2:function(a,b){this.a.k(0,H.B(a,this.b),H.B(b,this.c))},
$S:7}
P.fT.prototype={$ij:1,$ib:1}
P.v.prototype={
gU:function(a){return new H.dt(a,this.gl(a),[H.bs(this,a,"v",0)])},
I:function(a,b){return this.j(a,b)},
D:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bs(s,a,"v",0)]})
u=s.gl(a)
for(t=0;t<u;++t){b.$1(s.j(a,t))
if(u!==s.gl(a))throw H.d(P.bw(a))}},
iL:function(a,b){var u,t=this,s=H.e([],[H.bs(t,a,"v",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.k(s,u,t.j(a,u))
return s},
iK:function(a){return this.iL(a,!0)},
n:function(a,b){var u,t=this,s=[H.bs(t,a,"v",0)]
H.m(b,"$ib",s,"$ab")
u=H.e([],s)
C.a.sl(u,C.e.n(t.gl(a),b.gl(b)))
C.a.b9(u,0,t.gl(a),a)
C.a.b9(u,t.gl(a),u.length,b)
return u},
i0:function(a,b,c,d){var u
H.B(d,H.bs(this,a,"v",0))
P.bo(b,c,this.gl(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.kL(a,"[","]")}}
P.fW.prototype={}
P.fX.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.k(a)
t.a=u+": "
t.a+=H.k(b)},
$S:7}
P.af.prototype={
D:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bs(s,a,"af",0),H.bs(s,a,"af",1)]})
for(u=J.bJ(s.gal(a));u.B();){t=u.gJ(u)
b.$2(t,s.j(a,t))}},
gl:function(a){return J.aI(this.gal(a))},
i:function(a){return P.kR(a)},
$ix:1}
P.jD.prototype={
k:function(a,b,c){H.B(b,H.u(this,0))
H.B(c,H.u(this,1))
throw H.d(P.F("Cannot modify unmodifiable map"))}}
P.fY.prototype={
j:function(a,b){return J.d4(this.a,b)},
k:function(a,b,c){J.kC(this.a,H.B(b,H.u(this,0)),H.B(c,H.u(this,1)))},
D:function(a,b){J.ln(this.a,H.n(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]}))},
gl:function(a){return J.aI(this.a)},
i:function(a){return J.as(this.a)},
$ix:1}
P.dX.prototype={}
P.jv.prototype={
i:function(a){return P.kL(this,"{","}")},
I:function(a,b){var u,t,s,r=this
P.kS(b,"index")
for(u=P.m1(r,r.r,H.u(r,0)),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.d(P.W(b,r,"index",null,t))},
$ij:1,
$ilM:1}
P.eh.prototype={}
P.eL.prototype={}
P.f9.prototype={
ig:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bo(a0,a1,b.length)
u=$.mP()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.F(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.k4(C.b.F(b,n))
j=H.k4(C.b.F(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.c(u,i)
h=u[i]
if(h>=0){i=C.b.T("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ai("")
g=r.a+=C.b.A(b,s,t)
r.a=g+H.dG(m)
s=n
continue}}throw H.d(P.a3("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.A(b,s,a1)
f=g.length
if(q>=0)P.lo(b,p,a1,q,o,f)
else{e=C.e.ai(f-1,4)+1
if(e===1)throw H.d(P.a3(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aM(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lo(b,p,a1,q,o,d)
else{e=C.e.ai(d,4)
if(e===1)throw H.d(P.a3(c,b,a1))
if(e>1)b=C.b.aM(b,a1,a1,e===2?"==":"=")}return b},
$abN:function(){return[[P.b,P.l],P.h]}}
P.fa.prototype={
$abO:function(){return[[P.b,P.l],P.h]}}
P.bN.prototype={}
P.bO.prototype={}
P.fv.prototype={
$abN:function(){return[P.h,[P.b,P.l]]}}
P.iG.prototype={
gi_:function(){return C.H}}
P.iI.prototype={
c_:function(a){var u,t,s=P.bo(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jK(u)
if(t.eT(a,0,s)!==s)t.di(J.mX(a,s-1),0)
return new Uint8Array(u.subarray(0,H.od(0,t.b,u.length)))},
$abO:function(){return[P.h,[P.b,P.l]]}}
P.jK.prototype={
di:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eT:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.T(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.F(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.di(r,C.b.F(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iH.prototype={
c_:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[P.l],"$ab")
u=P.nN(!1,a,0,null)
if(u!=null)return u
t=P.bo(0,null,J.aI(a))
s=P.md(a,0,t)
if(s>0){r=P.cE(a,0,s)
if(s===t)return r
q=new P.ai(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ai("")
n=new P.jJ(!1,q)
n.c=o
n.hO(a,p,t)
if(n.e>0){H.w(P.a3("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.dG(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abO:function(){return[[P.b,P.l],P.h]}}
P.jJ.prototype={
hO:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.m(a,"$ib",[P.l],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.cc(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.ab()
if((o&192)!==128){n=P.a3(h+C.e.b6(o,16),a,p)
throw H.d(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.c(C.t,n)
if(u<=C.t[n]){n=P.a3("Overlong encoding of 0x"+C.e.b6(u,16),a,p-s-1)
throw H.d(n)}if(u>1114111){n=P.a3("Character outside valid Unicode range: 0x"+C.e.b6(u,16),a,p-s-1)
throw H.d(n)}if(!i.c||u!==65279)q.a+=H.dG(u)
i.c=!1}for(n=p<c;n;){m=P.md(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cE(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.O()
if(o<0){j=P.a3("Negative UTF-8 code unit: -0x"+C.e.b6(-o,16),a,k-1)
throw H.d(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a3(h+C.e.b6(o,16),a,k-1)
throw H.d(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.aa.prototype={}
P.at.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.at&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.e.aH(u,30))&1073741823},
i:function(a){var u=this,t=P.n5(H.nw(u)),s=P.de(H.nu(u)),r=P.de(H.nq(u)),q=P.de(H.nr(u)),p=P.de(H.nt(u)),o=P.de(H.nv(u)),n=P.n6(H.ns(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.t.prototype={}
P.b0.prototype={
n:function(a,b){return new P.b0(C.e.n(this.a,b.gcX()))},
p:function(a,b){return new P.b0(C.e.p(this.a,b.gcX()))},
ac:function(a,b){return C.e.ac(this.a,b.gcX())},
q:function(a,b){if(b==null)return!1
return b instanceof P.b0&&this.a===b.a},
gH:function(a){return C.e.gH(this.a)},
i:function(a){var u,t,s,r=new P.ft(),q=this.a
if(q<0)return"-"+new P.b0(0-q).i(0)
u=r.$1(C.e.a_(q,6e7)%60)
t=r.$1(C.e.a_(q,1e6)%60)
s=new P.fs().$1(q%1e6)
return""+C.e.a_(q,36e8)+":"+H.k(u)+":"+H.k(t)+"."+H.k(s)}}
P.fs.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:17}
P.ft.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:17}
P.by.prototype={}
P.f3.prototype={
i:function(a){return"Assertion failed"}}
P.dD.prototype={
i:function(a){return"Throw of null."}}
P.aW.prototype={
gbw:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbv:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbw()+o+u
if(!q.a)return t
s=q.gbv()
r=P.dj(q.b)
return t+s+": "+r}}
P.bX.prototype={
gbw:function(){return"RangeError"},
gbv:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.k(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.k(s)
else if(t>s)u=": Not in range "+H.k(s)+".."+H.k(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.k(s)}return u}}
P.fI.prototype={
gbw:function(){return"RangeError"},
gbv:function(){var u,t=H.a_(this.b)
if(typeof t!=="number")return t.O()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.k(u)},
gl:function(a){return this.f}}
P.iy.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iv.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.dO.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fg.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dj(u)+"."}}
P.ht.prototype={
i:function(a){return"Out of Memory"},
$iby:1}
P.dN.prototype={
i:function(a){return"Stack Overflow"},
$iby:1}
P.fn.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ea.prototype={
i:function(a){return"Exception: "+this.a}}
P.fF.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.A(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.F(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.T(f,q)
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
k=""}j=C.b.A(f,m,n)
return h+l+j+k+"\n"+C.b.m(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.k(g)+")"):h}}
P.l.prototype={}
P.j.prototype={
gl:function(a){var u,t=this.gU(this)
for(u=0;t.B();)++u
return u},
I:function(a,b){var u,t,s
P.kS(b,"index")
for(u=this.gU(this),t=0;u.B();){s=u.gJ(u)
if(b===t)return s;++t}throw H.d(P.W(b,this,"index",null,t))},
i:function(a){return P.nb(this,"(",")")}}
P.b1.prototype={}
P.b.prototype={$ij:1}
P.x.prototype={}
P.G.prototype={
gH:function(a){return P.M.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.a7.prototype={}
P.M.prototype={constructor:P.M,$iM:1,
q:function(a,b){return this===b},
gH:function(a){return H.cA(this)},
i:function(a){return"Instance of '"+H.bW(this)+"'"},
toString:function(){return this.i(this)}}
P.aq.prototype={}
P.h.prototype={$ilD:1}
P.ai.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipo:1}
P.iE.prototype={
$2:function(a,b){var u,t,s,r=P.h
H.m(a,"$ix",[r,r],"$ax")
H.K(b)
u=J.lc(b).dI(b,"=")
if(u===-1){if(b!=="")J.kC(a,P.l3(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.A(b,0,u)
s=C.b.ad(b,u+1)
r=this.a
J.kC(a,P.l3(t,0,t.length,r,!0),P.l3(s,0,s.length,r,!0))}return a},
$S:44}
P.iA.prototype={
$2:function(a,b){throw H.d(P.a3("Illegal IPv4 address, "+a,this.a,b))},
$S:43}
P.iC.prototype={
$2:function(a,b){throw H.d(P.a3("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:41}
P.iD.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.d1(C.b.A(this.b,a,b),null,16)
if(typeof u!=="number")return u.O()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:38}
P.c5.prototype={
ge9:function(){return this.b},
gca:function(a){var u=this.c
if(u==null)return""
if(C.b.a5(u,"["))return C.b.A(u,1,u.length-1)
return u},
gbj:function(a){var u=this.d
if(u==null)return P.m2(this.a)
return u},
gcl:function(a){var u=this.f
return u==null?"":u},
gdD:function(){var u=this.r
return u==null?"":u},
co:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.m(b,"$ix",[P.h,null],"$ax")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a5(p,"/"))p="/"+p
n=P.l2(null,0,0,b)
return new P.c5(u,s,q,r,p,n,m.r)},
gb5:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.h
s.sh3(new P.dX(P.lU(u==null?"":u),[t,t]))}return s.Q},
gdE:function(){return this.c!=null},
gdH:function(){return this.f!=null},
gdF:function(){return this.r!=null},
i:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.k(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.k(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.k(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.S(b).$ikW)if(s.a==b.gbq())if(s.c!=null===b.gdE())if(s.b==b.ge9())if(s.gca(s)==b.gca(b))if(s.gbj(s)==b.gbj(b))if(s.e===b.gdV(b)){u=s.f
t=u==null
if(!t===b.gdH()){if(t)u=""
if(u===b.gcl(b)){u=s.r
t=u==null
if(!t===b.gdF()){if(t)u=""
u=u===b.gdD()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gH:function(a){var u=this.z
return u==null?this.z=C.b.gH(this.i(0)):u},
sh3:function(a){var u=P.h
this.Q=H.m(a,"$ix",[u,u],"$ax")},
$ikW:1,
gbq:function(){return this.a},
gdV:function(a){return this.e}}
P.jE.prototype={
$1:function(a){throw H.d(P.a3("Invalid port",this.a,this.b+1))},
$S:20}
P.jF.prototype={
$1:function(a){return P.jI(C.P,a,C.h,!1)},
$S:37}
P.jH.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.k(P.jI(C.n,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.k(P.jI(C.n,b,C.h,!0))}},
$S:22}
P.jG.prototype={
$2:function(a,b){var u,t
H.K(a)
if(b==null||typeof b==="string")this.a.$2(a,H.K(b))
else for(u=J.bJ(H.ms(b,"$ij")),t=this.a;u.B();)t.$2(a,H.K(u.gJ(u)))},
$S:55}
P.iz.prototype={
ge8:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.c(o,0)
u=q.a
o=o[0]+1
t=C.b.dJ(u,"?",o)
s=u.length
if(t>=0){r=P.cY(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.j8("data",p,p,p,P.cY(u,o,s,C.v,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.c(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jP.prototype={
$1:function(a){return new Uint8Array(96)},
$S:36}
P.jO.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.c(u,a)
u=u[a]
J.mY(u,0,96,b)
return u},
$S:34}
P.jQ.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.F(b,s)^96
if(r>=t)return H.c(a,r)
a[r]=c}}}
P.jR.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.F(b,0),t=C.b.F(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.c(a,r)
a[r]=c}}}
P.jw.prototype={
gdE:function(){return this.c>0},
gdG:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.n()
t=this.e
if(typeof t!=="number")return H.p(t)
t=u+1<t
u=t}else u=!1
return u},
gdH:function(){var u=this.f
if(typeof u!=="number")return u.O()
return u<this.r},
gdF:function(){return this.r<this.a.length},
gd0:function(){return this.b===4&&C.b.a5(this.a,"http")},
gd1:function(){return this.b===5&&C.b.a5(this.a,"https")},
gbq:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gd0())q=t.x="http"
else if(t.gd1()){t.x="https"
q="https"}else if(q===4&&C.b.a5(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a5(t.a,r)){t.x=r
q=r}else{q=C.b.A(t.a,0,q)
t.x=q}return q},
ge9:function(){var u=this.c,t=this.b+3
return u>t?C.b.A(this.a,t,u-1):""},
gca:function(a){var u=this.c
return u>0?C.b.A(this.a,u,this.d):""},
gbj:function(a){var u,t=this
if(t.gdG()){u=t.d
if(typeof u!=="number")return u.n()
return P.d1(C.b.A(t.a,u+1,t.e),null,null)}if(t.gd0())return 80
if(t.gd1())return 443
return 0},
gdV:function(a){return C.b.A(this.a,this.e,this.f)},
gcl:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.O()
return u<t?C.b.A(this.a,u+1,t):""},
gdD:function(){var u=this.r,t=this.a
return u<t.length?C.b.ad(t,u+1):""},
gb5:function(){var u=this,t=u.f
if(typeof t!=="number")return t.O()
if(t>=u.r)return C.Q
t=P.h
return new P.dX(P.lU(u.gcl(u)),[t,t])},
co:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.m(b,"$ix",[P.h,null],"$ax")
u=k.gbq()
t=u==="file"
s=k.c
r=s>0?C.b.A(k.a,k.b+3,s):""
q=k.gdG()?k.gbj(k):j
s=k.c
if(s>0)p=C.b.A(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.A(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a5(o,"/"))o="/"+o
m=P.l2(j,0,0,b)
n=k.r
l=n<s.length?C.b.ad(s,n+1):j
return new P.c5(u,r,p,q,o,m,l)},
gH:function(a){var u=this.y
return u==null?this.y=C.b.gH(this.a):u},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.S(b).$ikW&&this.a===b.i(0)},
i:function(a){return this.a},
$ikW:1}
P.j8.prototype={}
W.r.prototype={}
W.f_.prototype={
gl:function(a){return a.length}}
W.f1.prototype={
i:function(a){return String(a)}}
W.f2.prototype={
i:function(a){return String(a)}}
W.bL.prototype={$ibL:1}
W.bM.prototype={
cv:function(a,b,c){if(c!=null)return a.getContext(b,P.oL(c))
return a.getContext(b)},
ea:function(a,b){return this.cv(a,b,null)},
$ibM:1}
W.cj.prototype={$icj:1}
W.bv.prototype={
gl:function(a){return a.length}}
W.cl.prototype={$icl:1}
W.fj.prototype={
gl:function(a){return a.length}}
W.T.prototype={$iT:1}
W.cm.prototype={
gl:function(a){return a.length}}
W.fk.prototype={}
W.aZ.prototype={}
W.b_.prototype={}
W.fl.prototype={
gl:function(a){return a.length}}
W.fm.prototype={
gl:function(a){return a.length}}
W.fo.prototype={
gl:function(a){return a.length}}
W.df.prototype={$idf:1}
W.fp.prototype={
i:function(a){return String(a)}}
W.dg.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.m(c,"$iag",[P.a7],"$aag")
throw H.d(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[[P.ag,P.a7]]},
$av:function(){return[[P.ag,P.a7]]},
$ij:1,
$aj:function(){return[[P.ag,P.a7]]},
$ib:1,
$ab:function(){return[[P.ag,P.a7]]},
$aD:function(){return[[P.ag,P.a7]]}}
W.dh.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gaz(a))+" x "+H.k(this.gau(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.S(b)
if(!u.$iag)return!1
return a.left===u.gbh(b)&&a.top===u.gbl(b)&&this.gaz(a)===u.gaz(b)&&this.gau(a)===u.gau(b)},
gH:function(a){return W.m0(C.c.gH(a.left),C.c.gH(a.top),C.c.gH(this.gaz(a)),C.c.gH(this.gau(a)))},
gdl:function(a){return a.bottom},
gau:function(a){return a.height},
gbh:function(a){return a.left},
gcp:function(a){return a.right},
gbl:function(a){return a.top},
gaz:function(a){return a.width},
$iag:1,
$aag:function(){return[P.a7]}}
W.fq.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.K(c)
throw H.d(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[P.h]},
$av:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aD:function(){return[P.h]}}
W.fr.prototype={
gl:function(a){return a.length}}
W.j6.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return H.f(u[b],"$iV")},
k:function(a,b,c){var u
H.f(c,"$iV")
u=this.b
if(b<0||b>=u.length)return H.c(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gU:function(a){var u=this.iK(this)
return new J.ap(u,u.length,[H.u(u,0)])},
$av:function(){return[W.V]},
$aj:function(){return[W.V]},
$ab:function(){return[W.V]}}
W.V.prototype={
gbZ:function(a){return new W.j6(a,a.children)},
gdm:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.O()
if(s<0)s=-s*0
if(typeof r!=="number")return r.O()
if(r<0)r=-r*0
return new P.ag(u,t,s,r,[P.a7])},
i:function(a){return a.localName},
$iV:1}
W.o.prototype={$io:1}
W.i.prototype={
hB:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.ey(a,b,c,!1)},
ey:function(a,b,c,d){return a.addEventListener(b,H.c9(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ii:1}
W.ax.prototype={$iax:1}
W.cn.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iax")
throw H.d(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.ax]},
$av:function(){return[W.ax]},
$ij:1,
$aj:function(){return[W.ax]},
$ib:1,
$ab:function(){return[W.ax]},
$icn:1,
$aD:function(){return[W.ax]}}
W.fA.prototype={
gl:function(a){return a.length}}
W.fE.prototype={
gl:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.fH.prototype={
gl:function(a){return a.length}}
W.bR.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iH")
throw H.d(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.H]},
$av:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$ibR:1,
$aD:function(){return[W.H]}}
W.bg.prototype={$ibg:1,
gdn:function(a){return a.data}}
W.bS.prototype={$ibS:1}
W.cq.prototype={$icq:1}
W.b2.prototype={$ib2:1}
W.fU.prototype={
i:function(a){return String(a)}}
W.hd.prototype={
gl:function(a){return a.length}}
W.cs.prototype={$ics:1}
W.he.prototype={
j:function(a,b){return P.br(a.get(H.K(b)))},
D:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
gal:function(a){var u=H.e([],[P.h])
this.D(a,new W.hf(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.d(P.F("Not supported"))},
$aaf:function(){return[P.h,null]},
$ix:1,
$ax:function(){return[P.h,null]}}
W.hf.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hg.prototype={
j:function(a,b){return P.br(a.get(H.K(b)))},
D:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
gal:function(a){var u=H.e([],[P.h])
this.D(a,new W.hh(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.d(P.F("Not supported"))},
$aaf:function(){return[P.h,null]},
$ix:1,
$ax:function(){return[P.h,null]}}
W.hh.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aL.prototype={$iaL:1}
W.hi.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaL")
throw H.d(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aL]},
$av:function(){return[W.aL]},
$ij:1,
$aj:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aD:function(){return[W.aL]}}
W.a4.prototype={$ia4:1}
W.j5.prototype={
k:function(a,b,c){var u,t
H.f(c,"$iH")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.c(t,b)
u.replaceChild(c,t[b])},
gU:function(a){var u=this.a.childNodes
return new W.dl(u,u.length,[H.bs(C.R,u,"D",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$av:function(){return[W.H]},
$aj:function(){return[W.H]},
$ab:function(){return[W.H]}}
W.H.prototype={
iC:function(a,b){var u,t
try{u=a.parentNode
J.mV(u,b,a)}catch(t){H.aH(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.ee(a):u},
h8:function(a,b,c){return a.replaceChild(b,c)},
$iH:1}
W.cy.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iH")
throw H.d(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.H]},
$av:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aD:function(){return[W.H]}}
W.aM.prototype={$iaM:1,
gl:function(a){return a.length}}
W.hv.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaM")
throw H.d(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aM]},
$av:function(){return[W.aM]},
$ij:1,
$aj:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aD:function(){return[W.aM]}}
W.hE.prototype={
j:function(a,b){return P.br(a.get(H.K(b)))},
D:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
gal:function(a){var u=H.e([],[P.h])
this.D(a,new W.hF(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.d(P.F("Not supported"))},
$aaf:function(){return[P.h,null]},
$ix:1,
$ax:function(){return[P.h,null]}}
W.hF.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hH.prototype={
gl:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.hQ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaN")
throw H.d(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aN]},
$av:function(){return[W.aN]},
$ij:1,
$aj:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aD:function(){return[W.aN]}}
W.aO.prototype={$iaO:1}
W.hR.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaO")
throw H.d(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aO]},
$av:function(){return[W.aO]},
$ij:1,
$aj:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aD:function(){return[W.aO]}}
W.aP.prototype={$iaP:1,
gl:function(a){return a.length}}
W.hU.prototype={
j:function(a,b){return a.getItem(H.K(b))},
k:function(a,b,c){a.setItem(b,c)},
D:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gal:function(a){var u=H.e([],[P.h])
this.D(a,new W.hV(u))
return u},
gl:function(a){return a.length},
$aaf:function(){return[P.h,P.h]},
$ix:1,
$ax:function(){return[P.h,P.h]}}
W.hV.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:22}
W.aA.prototype={$iaA:1}
W.bp.prototype={$ibp:1}
W.aQ.prototype={$iaQ:1}
W.aB.prototype={$iaB:1}
W.i1.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaB")
throw H.d(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aB]},
$av:function(){return[W.aB]},
$ij:1,
$aj:function(){return[W.aB]},
$ib:1,
$ab:function(){return[W.aB]},
$aD:function(){return[W.aB]}}
W.i2.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaQ")
throw H.d(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aQ]},
$av:function(){return[W.aQ]},
$ij:1,
$aj:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aD:function(){return[W.aQ]}}
W.ic.prototype={
gl:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.aS.prototype={$iaS:1}
W.ig.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaR")
throw H.d(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aR]},
$av:function(){return[W.aR]},
$ij:1,
$aj:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aD:function(){return[W.aR]}}
W.ih.prototype={
gl:function(a){return a.length}}
W.bE.prototype={}
W.iF.prototype={
i:function(a){return String(a)}}
W.iX.prototype={
gl:function(a){return a.length}}
W.ba.prototype={
ghT:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.F("deltaY is not supported"))},
ghS:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.F("deltaX is not supported"))},
$iba:1}
W.cM.prototype={
h9:function(a,b){return a.requestAnimationFrame(H.c9(H.n(b,{func:1,ret:-1,args:[P.a7]}),1))},
eN:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.j7.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iT")
throw H.d(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.T]},
$av:function(){return[W.T]},
$ij:1,
$aj:function(){return[W.T]},
$ib:1,
$ab:function(){return[W.T]},
$aD:function(){return[W.T]}}
W.e5.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.S(b)
if(!u.$iag)return!1
return a.left===u.gbh(b)&&a.top===u.gbl(b)&&a.width===u.gaz(b)&&a.height===u.gau(b)},
gH:function(a){return W.m0(C.c.gH(a.left),C.c.gH(a.top),C.c.gH(a.width),C.c.gH(a.height))},
gau:function(a){return a.height},
gaz:function(a){return a.width}}
W.jl.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaJ")
throw H.d(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aJ]},
$av:function(){return[W.aJ]},
$ij:1,
$aj:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$aD:function(){return[W.aJ]}}
W.em.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iH")
throw H.d(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.H]},
$av:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aD:function(){return[W.H]}}
W.jx.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaP")
throw H.d(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aP]},
$av:function(){return[W.aP]},
$ij:1,
$aj:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aD:function(){return[W.aP]}}
W.jA.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaA")
throw H.d(P.F("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aA]},
$av:function(){return[W.aA]},
$ij:1,
$aj:function(){return[W.aA]},
$ib:1,
$ab:function(){return[W.aA]},
$aD:function(){return[W.aA]}}
W.j9.prototype={}
W.l0.prototype={}
W.ja.prototype={}
W.jb.prototype={
$1:function(a){return this.a.$1(H.f(a,"$io"))},
$S:32}
W.D.prototype={
gU:function(a){return new W.dl(a,this.gl(a),[H.bs(this,a,"D",0)])}}
W.dl.prototype={
B:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sd_(J.d4(u.a,t))
u.c=t
return!0}u.sd_(null)
u.c=s
return!1},
gJ:function(a){return this.d},
sd_:function(a){this.d=H.B(a,H.u(this,0))},
$ib1:1}
W.e4.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
W.cT.prototype={}
W.cU.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ez.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.cV.prototype={}
W.cW.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
P.jy.prototype={
dC:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
bo:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.S(a)
if(!!u.$iat)return new Date(a.a)
if(!!u.$inA)throw H.d(P.iw("structured clone of RegExp"))
if(!!u.$iax)return a
if(!!u.$ibL)return a
if(!!u.$icn)return a
if(!!u.$ibg)return a
if(!!u.$icv||!!u.$ibB||!!u.$ics)return a
if(!!u.$ix){t=q.dC(a)
s=q.b
if(t>=s.length)return H.c(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.D(a,new P.jz(p,q))
return p.a}if(!!u.$ib){t=q.dC(a)
p=q.b
if(t>=p.length)return H.c(p,t)
r=p[t]
if(r!=null)return r
return q.hQ(a,t)}throw H.d(P.iw("structured clone of other type"))},
hQ:function(a,b){var u,t=J.cc(a),s=t.gl(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.bo(t.j(a,u)))
return r}}
P.jz.prototype={
$2:function(a,b){this.a.a[a]=this.b.bo(b)},
$S:7}
P.eK.prototype={$ibg:1,
gdn:function(a){return this.a}}
P.jX.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.eC.prototype={}
P.fB.prototype={
gaR:function(){var u=this.b,t=H.aG(u,"v",0),s=W.V
return new H.fZ(new H.iZ(u,H.n(new P.fC(),{func:1,ret:P.aa,args:[t]}),[t]),H.n(new P.fD(),{func:1,ret:s,args:[t]}),[t,s])},
D:function(a,b){H.n(b,{func:1,ret:-1,args:[W.V]})
C.a.D(P.kQ(this.gaR(),!1,W.V),b)},
k:function(a,b,c){var u
H.f(c,"$iV")
u=this.gaR()
J.mZ(u.b.$1(J.kE(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aI(this.gaR().a)},
j:function(a,b){var u=this.gaR()
return u.b.$1(J.kE(u.a,b))},
gU:function(a){var u=P.kQ(this.gaR(),!1,W.V)
return new J.ap(u,u.length,[H.u(u,0)])},
$av:function(){return[W.V]},
$aj:function(){return[W.V]},
$ab:function(){return[W.V]}}
P.fC.prototype={
$1:function(a){return!!J.S(H.f(a,"$iH")).$iV},
$S:30}
P.fD.prototype={
$1:function(a){return H.y(H.f(a,"$iH"),"$iV")},
$S:29}
P.jq.prototype={
gcp:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.p(t)
return H.B(u+t,H.u(this,0))},
gdl:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.p(t)
return H.B(u+t,H.u(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.k(u.a)+", "+H.k(u.b)+") "+H.k(u.c)+" x "+H.k(u.d)},
q:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.S(b)
if(!!u.$iag){t=p.a
if(t==u.gbh(b)){s=p.b
if(s==u.gbl(b)){r=p.c
if(typeof t!=="number")return t.n()
if(typeof r!=="number")return H.p(r)
q=H.u(p,0)
if(H.B(t+r,q)===u.gcp(b)){t=p.d
if(typeof s!=="number")return s.n()
if(typeof t!=="number")return H.p(t)
u=H.B(s+t,q)===u.gdl(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u,t=this,s=t.a,r=J.d5(s),q=t.b,p=J.d5(q),o=t.c
if(typeof s!=="number")return s.n()
if(typeof o!=="number")return H.p(o)
u=H.u(t,0)
o=C.e.gH(H.B(s+o,u))
s=t.d
if(typeof q!=="number")return q.n()
if(typeof s!=="number")return H.p(s)
u=C.e.gH(H.B(q+s,u))
return P.nY(P.jn(P.jn(P.jn(P.jn(0,r),p),o),u))}}
P.ag.prototype={
gbh:function(a){return this.a},
gbl:function(a){return this.b},
gaz:function(a){return this.c},
gau:function(a){return this.d}}
P.b3.prototype={$ib3:1}
P.fN.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib3")
throw H.d(P.F("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$av:function(){return[P.b3]},
$ij:1,
$aj:function(){return[P.b3]},
$ib:1,
$ab:function(){return[P.b3]},
$aD:function(){return[P.b3]}}
P.b6.prototype={$ib6:1}
P.hr.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib6")
throw H.d(P.F("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$av:function(){return[P.b6]},
$ij:1,
$aj:function(){return[P.b6]},
$ib:1,
$ab:function(){return[P.b6]},
$aD:function(){return[P.b6]}}
P.hx.prototype={
gl:function(a){return a.length}}
P.i_.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.K(c)
throw H.d(P.F("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$av:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aD:function(){return[P.h]}}
P.q.prototype={
gbZ:function(a){return new P.fB(a,new W.j5(a))}}
P.b8.prototype={$ib8:1}
P.ii.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib8")
throw H.d(P.F("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$av:function(){return[P.b8]},
$ij:1,
$aj:function(){return[P.b8]},
$ib:1,
$ab:function(){return[P.b8]},
$aD:function(){return[P.b8]}}
P.ef.prototype={}
P.eg.prototype={}
P.ep.prototype={}
P.eq.prototype={}
P.eA.prototype={}
P.eB.prototype={}
P.eI.prototype={}
P.eJ.prototype={}
P.N.prototype={$ij:1,
$aj:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]},
$inK:1}
P.f5.prototype={
gl:function(a){return a.length}}
P.f6.prototype={
j:function(a,b){return P.br(a.get(H.K(b)))},
D:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
gal:function(a){var u=H.e([],[P.h])
this.D(a,new P.f7(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.d(P.F("Not supported"))},
$aaf:function(){return[P.h,null]},
$ix:1,
$ax:function(){return[P.h,null]}}
P.f7.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.f8.prototype={
gl:function(a){return a.length}}
P.bK.prototype={}
P.hs.prototype={
gl:function(a){return a.length}}
P.e3.prototype={}
P.d8.prototype={$id8:1}
P.dH.prototype={$idH:1}
P.bY.prototype={
iH:function(a,b,c,d,e,f,g){var u,t=J.S(g)
if(!!t.$ibg)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.oM(g))
return}if(!!t.$ibS)t=!0
else t=!1
if(t){this.hp(a,b,c,d,e,f,g)
return}throw H.d(P.d6("Incorrect number or type of arguments"))},
hp:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a0:function(a,b,c){return a.uniform1f(b,c)},
bn:function(a,b,c){return a.uniform1i(b,c)},
W:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
e5:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
e6:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
e7:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibY:1}
P.dK.prototype={$idK:1}
P.dQ.prototype={$idQ:1}
P.dV.prototype={$idV:1}
P.hS.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.W(b,a,null,null,null))
return P.br(a.item(b))},
k:function(a,b,c){H.f(c,"$ix")
throw H.d(P.F("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$av:function(){return[[P.x,,,]]},
$ij:1,
$aj:function(){return[[P.x,,,]]},
$ib:1,
$ab:function(){return[[P.x,,,]]},
$aD:function(){return[[P.x,,,]]}}
P.ew.prototype={}
P.ex.prototype={}
O.a1.prototype={
bs:function(a){var u=this
u.sf_(H.e([],[a]))
u.sd6(null)
u.sd3(null)
u.sd7(null)},
cw:function(a,b,c){var u=this,t=H.aG(u,"a1",0)
H.n(b,{func:1,ret:P.aa,args:[[P.j,t]]})
t={func:1,ret:-1,args:[P.l,[P.j,t]]}
H.n(a,t)
H.n(c,t)
u.sd6(b)
u.sd3(a)
u.sd7(c)},
b8:function(a,b){return this.cw(a,null,b)},
fN:function(a){var u
H.m(a,"$ij",[H.aG(this,"a1",0)],"$aj")
u=this.b
if(u!=null)return u.$1(a)
return!0},
em:function(a,b){var u
H.m(b,"$ij",[H.aG(this,"a1",0)],"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.ap(u,u.length,[H.u(u,0)])},
I:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aG(s,"a1",0)
H.B(b,r)
r=[r]
if(H.E(s.fN(H.e([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.em(t,H.e([b],r))}},
sf_:function(a){this.a=H.m(a,"$ib",[H.aG(this,"a1",0)],"$ab")},
sd6:function(a){this.b=H.n(a,{func:1,ret:P.aa,args:[[P.j,H.aG(this,"a1",0)]]})},
sd3:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.l,[P.j,H.aG(this,"a1",0)]]})},
sd7:function(a){H.n(a,{func:1,ret:-1,args:[P.l,[P.j,H.aG(this,"a1",0)]]})},
$ij:1}
O.cr.prototype={
gl:function(a){return this.a.length},
gw:function(){var u=this.b
return u==null?this.b=D.Q():u},
aA:function(){var u=this.b
if(u!=null)u.G(null)},
gZ:function(a){var u=this.a
if(u.length>0)return C.a.gaw(u)
else return V.dz()},
dX:function(a){var u=this.a
if(a==null)C.a.h(u,V.dz())
else C.a.h(u,a)
this.aA()},
ck:function(){var u=this.a
if(u.length>0){u.pop()
this.aA()}},
sbz:function(a){this.a=H.m(a,"$ib",[V.an],"$ab")}}
E.fb.prototype={}
E.am.prototype={
cM:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.ap(u,u.length,[H.u(u,0)]);u.B();){t=u.d
if(t.f==null)t.cM()}},
scz:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gw().K(0,s.gdR())
u=s.c
if(u!=null)u.gw().h(0,s.gdR())
t=new D.O("shape",r,s.c,[F.bZ])
t.b=!0
s.af(t)}},
se1:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gw().K(0,s.gdT())
u=s.f
s.f=a
if(a!=null)a.gw().h(0,s.gdT())
s.cM()
t=new D.O("technique",u,s.f,[O.c_])
t.b=!0
s.af(t)}},
sb2:function(a){var u,t,s=this
if(!J.L(s.r,a)){u=s.r
if(u!=null)u.gw().K(0,s.gdP())
if(a!=null)a.gw().h(0,s.gdP())
s.r=a
t=new D.O("mover",u,a,[U.a9])
t.b=!0
s.af(t)}},
am:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aN(0,b,s):null
if(!J.L(q,s.x)){u=s.x
s.x=q
t=new D.O("matrix",u,q,[V.an])
t.b=!0
s.af(t)}r=s.f
if(r!=null)r.am(0,b)
for(r=s.y.a,r=new J.ap(r,r.length,[H.u(r,0)]);r.B();)r.d.am(0,b)},
aL:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gZ(s))
else C.a.h(s.a,r.m(0,s.gZ(s)))
s.aA()
a.dY(t.f)
s=a.dy
u=(s&&C.a).gaw(s)
if(u!=null&&t.d!=null)u.iB(a,t)
for(s=t.y.a,s=new J.ap(s,s.length,[H.u(s,0)]);s.B();)s.d.aL(a)
a.dW()
a.dx.ck()},
gw:function(){var u=this.z
return u==null?this.z=D.Q():u},
af:function(a){var u=this.z
if(u!=null)u.G(a)},
Y:function(){return this.af(null)},
dS:function(a){H.f(a,"$iA")
this.e=null
this.af(a)},
io:function(){return this.dS(null)},
dU:function(a){this.af(H.f(a,"$iA"))},
ip:function(){return this.dU(null)},
dQ:function(a){this.af(H.f(a,"$iA"))},
im:function(){return this.dQ(null)},
dO:function(a){this.af(H.f(a,"$iA"))},
ij:function(){return this.dO(null)},
ii:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ij",[E.am],"$aj")
for(u=b.length,t=this.gdN(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bP()
o.sae(null)
o.saS(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sae(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}this.Y()},
il:function(a,b){var u,t
H.m(b,"$ij",[E.am],"$aj")
for(u=b.gU(b),t=this.gdN();u.B();)u.gJ(u).gw().K(0,t)
this.Y()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sen:function(a,b){this.y=H.m(b,"$ia1",[E.am],"$aa1")},
$icu:1}
E.hA.prototype={
ei:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.at(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cr()
t=[V.an]
u.sbz(H.e([],t))
u.b=null
u.gw().h(0,new E.hB(s))
s.cy=u
u=new O.cr()
u.sbz(H.e([],t))
u.b=null
u.gw().h(0,new E.hC(s))
s.db=u
u=new O.cr()
u.sbz(H.e([],t))
u.b=null
u.gw().h(0,new E.hD(s))
s.dx=u
s.sho(H.e([],[O.c_]))
u=s.dy;(u&&C.a).h(u,null)
s.shj(new H.Z([P.h,A.cB]))},
giy:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gZ(s)
u=t.db
u=t.z=s.m(0,u.gZ(u))
s=u}return s},
dY:function(a){var u=this.dy,t=a==null?(u&&C.a).gaw(u):a;(u&&C.a).h(u,t)},
dW:function(){var u=this.dy
if(u.length>1)u.pop()},
sho:function(a){this.dy=H.m(a,"$ib",[O.c_],"$ab")},
shj:function(a){this.fr=H.m(a,"$ix",[P.h,A.cB],"$ax")}}
E.hB.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.ch=u.z=null},
$S:6}
E.hC.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:6}
E.hD.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.cx=u.ch=null},
$S:6}
E.dR.prototype={
cH:function(a){H.f(a,"$iA")
this.e_()},
cG:function(){return this.cH(null)},
gi4:function(){var u,t=this,s=Date.now(),r=C.e.a_(P.lt(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.at(s,!1)
return u/r},
da:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.m()
if(typeof r!=="number")return H.p(r)
u=C.c.b0(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.m()
t=C.c.b0(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lP(C.o,s.giD())}},
e_:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.ib(this),{func:1,ret:-1,args:[P.a7]})
C.y.eN(u)
C.y.h9(u,W.mg(t,P.a7))}},
iA:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.da()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.at(r,!1)
s.y=P.lt(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aA()
r=s.db
C.a.sl(r.a,0)
r.aA()
r=s.dx
C.a.sl(r.a,0)
r.aA()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aL(p.e)}}catch(q){u=H.aH(q)
t=H.cd(q)
P.lh("Error: "+H.k(u))
P.lh("Stack: "+H.k(t))
throw H.d(u)}}}
E.ib.prototype={
$1:function(a){var u
H.mu(a)
u=this.a
if(u.ch){u.ch=!1
u.iA()}},
$S:28}
Z.e1.prototype={$ipg:1}
Z.d9.prototype={
be:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aH(s)
t=P.C('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.k(u))
throw H.d(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.k(u.e)+"]"}}
Z.iY.prototype={$iph:1}
Z.da.prototype={
aJ:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
be:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].be(a)},
e4:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aL:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.e([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(p,u[s].i(0))
r=H.e([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.as(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.u(p,", ")+"\nAttrs:   "+C.a.u(r,", ")},
seW:function(a){this.b=H.m(a,"$ib",[Z.bz],"$ab")},
$ipp:1}
Z.bz.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bW(this.c)+"'")+"]"}}
Z.bq.prototype={
gcA:function(a){var u=this.a,t=(u&$.bf().a)!==0?3:0
if((u&$.aU().a)!==0)t+=3
if((u&$.be().a)!==0)t+=3
if((u&$.bt().a)!==0)t+=2
if((u&$.bu().a)!==0)t+=3
if((u&$.d2().a)!==0)t+=3
if((u&$.d3().a)!==0)t+=4
if((u&$.bI().a)!==0)++t
return(u&$.bd().a)!==0?t+4:t},
hF:function(a){var u,t=$.bf(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aU()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.be()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bt()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bu()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d2()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d3()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bI()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bd()
if((s&t.a)!==0)if(u===a)return t
return $.mO()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bq))return!1
return this.a===b.a},
i:function(a){var u=H.e([],[P.h]),t=this.a
if((t&$.bf().a)!==0)C.a.h(u,"Pos")
if((t&$.aU().a)!==0)C.a.h(u,"Norm")
if((t&$.be().a)!==0)C.a.h(u,"Binm")
if((t&$.bt().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bu().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d2().a)!==0)C.a.h(u,"Clr3")
if((t&$.d3().a)!==0)C.a.h(u,"Clr4")
if((t&$.bI().a)!==0)C.a.h(u,"Weight")
if((t&$.bd().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.u(u,"|")}}
D.fe.prototype={}
D.bP.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.A]}
H.n(b,u)
if(this.a==null)this.sae(H.e([],[u]))
u=this.a;(u&&C.a).h(u,b)},
K:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.A]})
u=s.a
u=u==null?null:C.a.as(u,b)
if(u===!0){u=s.a
t=(u&&C.a).K(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.as(u,b)
if(u===!0){u=s.b
t=(u&&C.a).K(u,b)||t}return t},
G:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.A()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.D(P.kQ(u,!0,{func:1,ret:-1,args:[D.A]}),new D.fx(q))
u=r.b
if(u!=null){r.saS(H.e([],[{func:1,ret:-1,args:[D.A]}]))
C.a.D(u,new D.fy(q))}return!0},
hX:function(){return this.G(null)},
a4:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.G(u)}}},
sae:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")},
saS:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")}}
D.fx.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:25}
D.fy.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:25}
D.A.prototype={}
D.bT.prototype={}
D.bU.prototype={}
D.O.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}
X.db.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.db))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.dr.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dr))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.fM.prototype={
iu:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
iq:function(a){this.c=a.b
this.d.K(0,a.a)
return!1},
sh2:function(a){this.d=H.m(a,"$ilM",[P.l],"$alM")}}
X.du.prototype={}
X.fV.prototype={
aQ:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.m()
u=b.b
t=q.ch
if(typeof u!=="number")return u.m()
s=new V.ac(o.a+n*m,o.b+u*t)
t=q.a.gaI()
r=new X.bl(a,V.bD(),q.x,t,s)
r.b=!0
q.z=new P.at(p,!1)
q.x=s
return r},
cj:function(a,b){this.r=a.a
return!1},
b4:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eb()
if(typeof u!=="number")return u.ab()
this.r=(u&~t)>>>0
return!1},
b3:function(a,b){var u=this.d
if(u==null)return!1
u.G(this.aQ(a,b))
return!0},
iv:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaI()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.m()
q=a.b
p=o.cy
if(typeof q!=="number")return q.m()
t=new X.ct(new V.R(s*r,q*p),u,t)
t.b=!0
n.G(t)
return!0},
fC:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.du(c,r.a.gaI(),b)
s.b=!0
t.G(s)
r.y=new P.at(u,!1)
r.x=V.bD()}}
X.au.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.au))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.E(this.b)?"Alt+":""
return u+(H.E(this.c)?"Shift+":"")}}
X.bl.prototype={}
X.hj.prototype={
bx:function(a,b,c){var u=this,t=new P.at(Date.now(),!1),s=u.a.gaI(),r=new X.bl(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cj:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.G(this.bx(a,b,!0))
return!0},
b4:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eb()
if(typeof t!=="number")return t.ab()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.G(u.bx(a,b,!0))
return!0},
b3:function(a,b){var u=this.d
if(u==null)return!1
u.G(this.bx(a,b,!1))
return!0},
iw:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaI()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.m()
r=a.b
q=p.ch
if(typeof r!=="number")return r.m()
u=new X.ct(new V.R(t*s,r*q),u,b)
u.b=!0
o.G(u)
return!0},
gdq:function(){var u=this.b
return u==null?this.b=D.Q():u},
gct:function(){var u=this.c
return u==null?this.c=D.Q():u},
gdM:function(){var u=this.d
return u==null?this.d=D.Q():u}}
X.ct.prototype={}
X.hw.prototype={}
X.dT.prototype={}
X.ie.prototype={
aQ:function(a,b){var u,t,s,r,q=this
H.m(a,"$ib",[V.ac],"$ab")
u=new P.at(Date.now(),!1)
t=a.length>0?a[0]:V.bD()
s=q.a.gaI()
r=new X.dT(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
it:function(a){var u
H.m(a,"$ib",[V.ac],"$ab")
u=this.b
if(u==null)return!1
u.G(this.aQ(a,!0))
return!0},
ir:function(a){var u
H.m(a,"$ib",[V.ac],"$ab")
u=this.c
if(u==null)return!1
u.G(this.aQ(a,!0))
return!0},
is:function(a){var u
H.m(a,"$ib",[V.ac],"$ab")
u=this.d
if(u==null)return!1
u.G(this.aQ(a,!1))
return!0}}
X.dY.prototype={
gaI:function(){var u=this.a,t=C.i.gdm(u).c
t.toString
u=C.i.gdm(u).d
u.toString
return V.lK(0,0,t,u)},
cU:function(a){var u=a.keyCode,t=H.E(a.ctrlKey)||H.E(a.metaKey)
return new X.dr(u,new X.au(t,a.altKey,a.shiftKey))},
aG:function(a){var u=this.b,t=H.E(a.ctrlKey)||H.E(a.metaKey)
u.c=new X.au(t,a.altKey,a.shiftKey)},
bP:function(a){var u=this.b,t=H.E(a.ctrlKey)||H.E(a.metaKey)
u.c=new X.au(t,a.altKey,a.shiftKey)},
ar:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.p()
u=t.top
if(typeof r!=="number")return r.p()
return new V.ac(s-q,r-u)},
aT:function(a){return new V.R(a.movementX,a.movementY)},
bK:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.e([],[V.ac])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
q=C.c.ag(r.pageX)
C.c.ag(r.pageY)
p=o.left
C.c.ag(r.pageX)
C.a.h(n,new V.ac(q-p,C.c.ag(r.pageY)-o.top))}return n},
ao:function(a){var u=a.buttons,t=H.E(a.ctrlKey)||H.E(a.metaKey)
return new X.db(u,new X.au(t,a.altKey,a.shiftKey))},
bA:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.p()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.p()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fu:function(a){this.f=!0},
ff:function(a){this.f=!1},
fn:function(a){H.f(a,"$ia4")
if(H.E(this.f)&&this.bA(a))a.preventDefault()},
fA:function(a){var u
H.f(a,"$ib2")
if(!H.E(this.f))return
u=this.cU(a)
this.b.iu(u)},
fw:function(a){var u
H.f(a,"$ib2")
if(!H.E(this.f))return
u=this.cU(a)
this.b.iq(u)},
fE:function(a){var u,t,s,r,q=this
H.f(a,"$ia4")
u=q.a
u.focus()
q.f=!0
q.aG(a)
if(H.E(q.x)){t=q.ao(a)
s=q.aT(a)
if(q.d.cj(t,s))a.preventDefault()
return}if(H.E(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ao(a)
r=q.ar(a)
if(q.c.cj(t,r))a.preventDefault()},
fI:function(a){var u,t,s,r=this
H.f(a,"$ia4")
r.aG(a)
u=r.ao(a)
if(H.E(r.x)){t=r.aT(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.ar(a)
if(r.c.b4(u,s))a.preventDefault()},
fs:function(a){var u,t,s,r=this
H.f(a,"$ia4")
if(!r.bA(a)){r.aG(a)
u=r.ao(a)
if(H.E(r.x)){t=r.aT(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.ar(a)
if(r.c.b4(u,s))a.preventDefault()}},
fG:function(a){var u,t,s,r=this
H.f(a,"$ia4")
r.aG(a)
u=r.ao(a)
if(H.E(r.x)){t=r.aT(a)
if(r.d.b3(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.ar(a)
if(r.c.b3(u,s))a.preventDefault()},
fp:function(a){var u,t,s,r=this
H.f(a,"$ia4")
if(!r.bA(a)){r.aG(a)
u=r.ao(a)
if(H.E(r.x)){t=r.aT(a)
if(r.d.b3(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.ar(a)
if(r.c.b3(u,s))a.preventDefault()}},
fK:function(a){var u,t,s=this
H.f(a,"$iba")
s.aG(a)
u=new V.R((a&&C.x).ghS(a),C.x.ghT(a)).t(0,180)
if(H.E(s.x)){if(s.d.iv(u))a.preventDefault()
return}if(H.E(s.r))return
t=s.ar(a)
if(s.c.iw(u,t))a.preventDefault()},
fM:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ao(s.y)
t=s.ar(s.y)
s.d.fC(u,t,r)}},
fZ:function(a){var u,t=this
H.f(a,"$iaS")
t.a.focus()
t.f=!0
t.bP(a)
u=t.bK(a)
if(t.e.it(u))a.preventDefault()},
fV:function(a){var u
H.f(a,"$iaS")
this.bP(a)
u=this.bK(a)
if(this.e.ir(u))a.preventDefault()},
fX:function(a){var u
H.f(a,"$iaS")
this.bP(a)
u=this.bK(a)
if(this.e.is(u))a.preventDefault()},
seO:function(a){this.z=H.m(a,"$ib",[[P.cD,P.M]],"$ab")}}
D.bx.prototype={
gw:function(){var u=this.r
return u==null?this.r=D.Q():u},
an:function(a){var u
H.f(a,"$iA")
u=this.r
if(u!=null)u.G(a)},
ep:function(){return this.an(null)},
$iab:1,
$icu:1}
D.ab.prototype={$icu:1}
D.ds.prototype={
gw:function(){var u=this.x
return u==null?this.x=D.Q():u},
an:function(a){var u=this.x
if(u!=null)u.G(a)},
d5:function(a){var u
H.f(a,"$iA")
u=this.y
if(u!=null)u.G(a)},
fB:function(){return this.d5(null)},
fP:function(a){var u,t,s
H.m(a,"$ij",[D.ab],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.z)(a),++t){s=a[t]
if(s==null||this.eH(s))return!1}return!0},
f9:function(a,b){var u,t,s,r,q,p,o,n=D.ab
H.m(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gd4(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=H.f(b[q],"$iab")
if(p instanceof D.bx)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.bP()
o.sae(null)
o.saS(null)
o.c=null
o.d=0
p.r=o}H.n(t,s)
if(o.a==null)o.sae(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bT([n])
n.b=!0
this.an(n)},
fT:function(a,b){var u,t,s,r=D.ab
H.m(b,"$ij",[r],"$aj")
for(u=b.gU(b),t=this.gd4();u.B();){s=u.gJ(u)
C.a.K(this.e,s)
s.gw().K(0,t)}r=new D.bU([r])
r.b=!0
this.an(r)},
eH:function(a){var u=C.a.as(this.e,a)
return u},
seM:function(a){this.e=H.m(a,"$ib",[D.bx],"$ab")},
sh_:function(a){this.f=H.m(a,"$ib",[D.dF],"$ab")},
shm:function(a){this.r=H.m(a,"$ib",[D.dM],"$ab")},
$aj:function(){return[D.ab]},
$aa1:function(){return[D.ab]}}
D.dF.prototype={$iab:1,$icu:1}
D.dM.prototype={$iab:1,$icu:1}
V.a2.prototype={
n:function(a,b){var u=C.c.n(this.a,b.gcm()),t=C.c.n(this.b,b.gbp()),s=C.c.n(this.c,b.gbV())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a2(u,t,s)},
p:function(a,b){var u=C.c.p(this.a,b.gcm()),t=C.c.p(this.b,b.gbp()),s=C.c.p(this.c,b.gbV())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a2(u,t,s)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.aY.prototype={
n:function(a,b){var u=this,t=C.c.n(u.a,b.gcm()),s=C.c.n(u.b,b.gbp()),r=C.c.n(u.c,b.gbV()),q=C.c.n(u.d,b.ghD(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aY(t,s,r,q)},
p:function(a,b){var u=this,t=C.c.p(u.a,b.gcm()),s=C.c.p(u.b,b.gbp()),r=C.c.p(u.c,b.gbV()),q=C.c.p(u.d,b.ghD(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aY(t,s,r,q)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aY))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.fw.prototype={}
V.dy.prototype={
aa:function(a,b){var u=this,t=H.e([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.t])
return t},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.dy))return!1
u=b.a
t=$.P()
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
if(typeof u!=="number")return u.p()
if(typeof r!=="number")return H.p(r)
if(!(Math.abs(u-r)<s))return!1
u=b.x
t=q.x
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.p(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=q.y
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.p(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.t],o=V.cb(H.e([q.a,q.d,q.r],p),3,0),n=V.cb(H.e([q.b,q.e,q.x],p),3,0),m=V.cb(H.e([q.c,q.f,q.y],p),3,0)
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
V.an.prototype={
aa:function(a,b){var u=this,t=H.e([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.t])
return t},
dK:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a,c=e.f,b=e.b,a=e.e,a0=d*c-b*a,a1=e.r,a2=e.c,a3=d*a1-a2*a,a4=e.x,a5=e.d,a6=d*a4-a5*a,a7=b*a1-a2*c,a8=b*a4-a5*c,a9=a2*a4-a5*a1,b0=e.y,b1=e.cy
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
if(Math.abs(i-0)<$.P().a)return V.dz()
h=1/i
g=-a
f=-t
return V.b5((c*j-a1*k+a4*l)*h,(-b*j+a2*k-a5*l)*h,(b1*a9-r*a8+o*a7)*h,(-u*a9+q*a8-n*a7)*h,(g*j+a1*m-a4*p)*h,(d*j-a2*m+a5*p)*h,(f*a9+r*a6-o*a3)*h,(b0*a9-q*a6+n*a3)*h,(a*k-c*m+a4*s)*h,(-d*k+b*m-a5*s)*h,(t*a8-b1*a6+o*a0)*h,(-b0*a8+u*a6-n*a0)*h,(g*l+c*p-a1*s)*h,(d*l-b*p+a2*s)*h,(f*a7+b1*a3-r*a0)*h,(b0*a7-u*a3+q*a0)*h)},
m:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.a,a7=b3.a,a8=a5.b,a9=b3.e,b0=a5.c,b1=b3.y
if(typeof b1!=="number")return H.p(b1)
u=a5.d
t=b3.cx
s=b3.b
r=b3.f
q=b3.z
if(typeof q!=="number")return H.p(q)
p=b3.cy
o=b3.c
n=b3.r
m=b3.Q
if(typeof m!=="number")return H.p(m)
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
return V.b5(a6*a7+a8*a9+b0*b1+u*t,a6*s+a8*r+b0*q+u*p,a6*o+a8*n+b0*m+u*l,a6*k+a8*j+b0*i+u*h,g*a7+f*a9+e*b1+d*t,g*s+f*r+e*q+d*p,g*o+f*n+e*m+d*l,g*k+f*j+e*i+d*h,c*a7+b*a9+a*b1+a0*t,c*s+b*r+a*q+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,a1*a7+a2*a9+a3*b1+a4*t,a1*s+a2*r+a3*q+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h)},
bm:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.p(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.I(r.a*q+r.b*p+r.c*o,r.e*q+r.f*p+r.r*o,u*q+t*p+s*o)},
cs:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.p(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.a0(r.a*q+r.b*p+r.c*o+r.d,r.e*q+r.f*p+r.r*o+r.x,u*q+t*p+s*o+r.ch)},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.an))return!1
u=b.a
t=$.P()
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
if(typeof u!=="number")return u.p()
if(typeof r!=="number")return H.p(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=q.z
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.p(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=q.Q
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.p(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-q.ch)<s))return!1
if(!(Math.abs(b.cx-q.cx)<s))return!1
if(!(Math.abs(b.cy-q.cy)<s))return!1
if(!(Math.abs(b.db-q.db)<s))return!1
if(!(Math.abs(b.dx-q.dx)<s))return!1
return!0},
i:function(a){return this.L()},
E:function(a){var u,t,s,r,q,p=this,o=[P.t],n=V.cb(H.e([p.a,p.e,p.y,p.cx],o),3,0),m=V.cb(H.e([p.b,p.f,p.z,p.cy],o),3,0),l=V.cb(H.e([p.c,p.r,p.Q,p.db],o),3,0),k=V.cb(H.e([p.d,p.x,p.ch,p.dx],o),3,0)
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
L:function(){return this.E("")}}
V.ac.prototype={
n:function(a,b){return new V.ac(this.a+b.a,this.b+b.b)},
p:function(a,b){return new V.ac(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ac))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.a0.prototype={
n:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.p(t)
return new V.a0(this.a+b.a,this.b+b.b,u+t)},
p:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.p(t)
return new V.a0(this.a-b.a,this.b-b.b,u-t)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.a0(this.a*b,this.b*b,u*b)},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.P()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.p()
if(typeof r!=="number")return H.p(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.bn.prototype={
n:function(a,b){var u=this
return new V.bn(C.c.n(u.a,b.giQ(b)),C.c.n(u.b,b.giR(b)),C.c.n(u.c,b.giS(b)),C.c.n(u.d,b.giP(b)))},
p:function(a,b){var u=this
return new V.bn(C.c.p(u.a,b.giQ(b)),C.c.p(u.b,b.giR(b)),C.c.p(u.c,b.giS(b)),C.c.p(u.d,b.giP(b)))},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bn))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.dJ.prototype={
ga3:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dJ))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.R.prototype={
cd:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.p(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.p(t)
return s*r+u*t},
n:function(a,b){var u,t=this.a,s=b.gc2(b)
if(typeof t!=="number")return t.n()
s=C.c.n(t,s)
t=this.b
u=b.gc3(b)
if(typeof t!=="number")return t.n()
return new V.R(s,C.c.n(t,u))},
p:function(a,b){var u,t=this.a,s=b.gc2(b)
if(typeof t!=="number")return t.p()
s=C.c.p(t,s)
t=this.b
u=b.gc3(b)
if(typeof t!=="number")return t.p()
return new V.R(s,C.c.p(t,u))},
m:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.m()
u=this.b
if(typeof u!=="number")return u.m()
return new V.R(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.P().a){u=$.lV
return u==null?$.lV=new V.R(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.R(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=this.a
s=$.P()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.p(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.p(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.I.prototype={
cd:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u=this.c,t=a.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.p(t)
return this.a*a.a+this.b*a.b+u*t},
ce:function(a,b){var u=this.a,t=this.b,s=this.c,r=a.c
if(typeof r!=="number")return r.p()
if(typeof s!=="number")return H.p(s)
return new V.I(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
at:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof p!=="number")return H.p(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.m()
s=a.a
r=this.a
return new V.I(q*p-u*t,u*s-r*p,r*t-q*s)},
n:function(a,b){var u=b.a,t=b.b,s=this.c,r=b.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.p(r)
return new V.I(this.a+u,this.b+t,s+r)},
p:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.p(t)
return new V.I(this.a-b.a,this.b-b.b,u-t)},
P:function(a){var u=this.c
if(typeof u!=="number")return u.P()
return new V.I(-this.a,-this.b,-u)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.I(this.a*b,this.b*b,u*b)},
t:function(a,b){var u
if(Math.abs(b-0)<$.P().a)return V.cL()
u=this.c
if(typeof u!=="number")return u.t()
return new V.I(this.a/b,this.b/b,u/b)},
dL:function(){var u,t=$.P(),s=t.a
if(!(Math.abs(0-this.a)<s))return!1
if(!(Math.abs(0-this.b)<s))return!1
u=this.c
t.toString
if(typeof u!=="number")return H.p(u)
if(!(Math.abs(0-u)<s))return!1
return!0},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.I))return!1
u=b.a
t=$.P()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.p()
if(typeof r!=="number")return H.p(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
U.ff.prototype={
bt:function(a){var u=V.pf(a,this.c,this.b)
return u},
gw:function(){var u=this.y
return u==null?this.y=D.Q():u},
N:function(a){var u=this.y
if(u!=null)u.G(a)},
scu:function(a,b){},
scf:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.P().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bt(u)}s=new D.O("maximumLocation",s,t.b,[P.t])
s.b=!0
t.N(s)}},
sci:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.P().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bt(u)}s=new D.O("minimumLocation",s,t.c,[P.t])
s.b=!0
t.N(s)}},
sV:function(a,b){var u,t=this
b=t.bt(b)
u=t.d
if(!(Math.abs(u-b)<$.P().a)){t.d=b
u=new D.O("location",u,b,[P.t])
u.b=!0
t.N(u)}},
scg:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.P().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.O("maximumVelocity",r,a,[P.t])
r.b=!0
s.N(r)}},
sR:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.P().a)){u.f=a
t=new D.O("velocity",t,a,[P.t])
t.b=!0
u.N(t)}},
sc1:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.P().a)){this.x=a
u=new D.O("dampening",u,a,[P.t])
u.b=!0
this.N(u)}},
am:function(a,b){var u,t,s,r=this,q=r.f,p=$.P().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sV(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.P().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.dd.prototype={
gw:function(){var u=this.b
return u==null?this.b=D.Q():u},
aN:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dd))return!1
return J.L(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.cp.prototype={
gw:function(){var u=this.e
return u==null?this.e=D.Q():u},
N:function(a){var u
H.f(a,"$iA")
u=this.e
if(u!=null)u.G(a)},
a1:function(){return this.N(null)},
f7:function(a,b){var u,t,s,r,q,p,o,n=U.a9
H.m(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gaB(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.gw()
o.toString
H.n(t,s)
if(o.a==null)o.sae(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bT([n])
n.b=!0
this.N(n)},
fR:function(a,b){var u,t,s=U.a9
H.m(b,"$ij",[s],"$aj")
for(u=b.gU(b),t=this.gaB();u.B();)u.gJ(u).gw().K(0,t)
s=new D.bU([s])
s.b=!0
this.N(s)},
aN:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.O()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ap(r,r.length,[H.u(r,0)]),u=null;r.B();){q=r.d
if(q!=null){t=q.aN(0,b,c)
if(t!=null)u=u==null?t:t.m(0,u)}}s.f=u==null?V.dz():u
r=s.e
if(r!=null)r.a4(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cp))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.L(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.a9]},
$aa1:function(){return[U.a9]},
$ia9:1}
U.a9.prototype={}
U.dZ.prototype={
gw:function(){var u=this.cy
return u==null?this.cy=D.Q():u},
N:function(a){var u
H.f(a,"$iA")
u=this.cy
if(u!=null)u.G(a)},
a1:function(){return this.N(null)},
aV:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdq().h(0,u.gbB())
u.a.c.gdM().h(0,u.gbD())
u.a.c.gct().h(0,u.gbF())
return!0},
bC:function(a){var u=this
H.f(a,"$iA")
if(!J.L(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bE:function(a){var u,t,s,r,q,p,o,n=this
a=H.y(H.f(a,"$iA"),"$ibl")
if(!H.E(n.y))return
if(H.E(n.x)){u=a.d.p(0,a.y)
u=new V.R(u.a,u.b)
u=u.C(u)
t=n.r
if(typeof t!=="number")return H.p(t)
if(u<t)return
n.x=!1}if(H.E(n.d)){u=a.c
t=a.d.p(0,a.y)
u=new V.R(t.a,t.b).m(0,2).t(0,u.ga3())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.m()
s=n.e
if(typeof s!=="number")return H.p(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=new V.R(s.a,s.b).m(0,2).t(0,u.ga3())
s=n.b
q=r.a
if(typeof q!=="number")return q.P()
p=n.e
if(typeof p!=="number")return H.p(p)
o=n.z
if(typeof o!=="number")return H.p(o)
s.sV(0,-q*p+o)
n.b.sR(0)
t=t.p(0,a.z)
n.Q=new V.R(t.a,t.b).m(0,2).t(0,u.ga3())}n.a1()},
bG:function(a){var u,t,s,r=this
H.f(a,"$iA")
if(!H.E(r.y))return
r.y=!1
if(H.E(r.x))return
u=r.Q
if(u.C(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.m()
s=r.e
if(typeof s!=="number")return H.p(s)
u.sR(t*10*s)
r.a1()}},
aN:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.O()
if(q<p){r.ch=p
u=b.y
r.b.am(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.b5(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia9:1}
U.e_.prototype={
gw:function(){var u=this.fx
return u==null?this.fx=D.Q():u},
N:function(a){var u
H.f(a,"$iA")
u=this.fx
if(u!=null)u.G(a)},
a1:function(){return this.N(null)},
aV:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdq().h(0,s.gbB())
s.a.c.gdM().h(0,s.gbD())
s.a.c.gct().h(0,s.gbF())
u=s.a.d
t=u.f
u=t==null?u.f=D.Q():t
u.h(0,s.gf0())
u=s.a.d
t=u.d
u=t==null?u.d=D.Q():t
u.h(0,s.gf2())
u=s.a.e
t=u.b
u=t==null?u.b=D.Q():t
u.h(0,s.ghv())
u=s.a.e
t=u.d
u=t==null?u.d=D.Q():t
u.h(0,s.ght())
u=s.a.e
t=u.c
u=t==null?u.c=D.Q():t
u.h(0,s.ghr())
return!0},
ak:function(a){var u=a.a,t=a.b
if(H.E(this.f)){if(typeof u!=="number")return u.P()
u=-u}if(H.E(this.r)){if(typeof t!=="number")return t.P()
t=-t}return new V.R(u,t)},
bC:function(a){var u=this
a=H.y(H.f(a,"$iA"),"$ibl")
if(!J.L(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bE:function(a){var u,t,s,r,q,p,o,n=this
a=H.y(H.f(a,"$iA"),"$ibl")
if(!H.E(n.cx))return
if(H.E(n.ch)){u=a.d.p(0,a.y)
u=new V.R(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.p(t)
if(u<t)return
n.ch=!1}if(H.E(n.e)){u=a.c
t=a.d.p(0,a.y)
u=n.ak(new V.R(t.a,t.b).m(0,2).t(0,u.ga3()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.P()
s=n.y
if(typeof s!=="number")return H.p(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.P()
t=n.x
if(typeof t!=="number")return H.p(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=n.ak(new V.R(s.a,s.b).m(0,2).t(0,u.ga3()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.p(p)
o=n.cy
if(typeof o!=="number")return H.p(o)
s.sV(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.p(q)
s=n.db
if(typeof s!=="number")return H.p(s)
o.sV(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.p(0,a.z)
n.dx=n.ak(new V.R(t.a,t.b).m(0,2).t(0,u.ga3()))}n.a1()},
bG:function(a){var u,t,s,r=this
H.f(a,"$iA")
if(!H.E(r.cx))return
r.cx=!1
if(H.E(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.P()
s=r.y
if(typeof s!=="number")return H.p(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.P()
u=r.x
if(typeof u!=="number")return H.p(u)
s.sR(-t*10*u)
r.a1()}},
f1:function(a){var u=this
if(H.y(H.f(a,"$iA"),"$idu").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
f3:function(a){var u,t,s,r,q,p,o,n=this
a=H.y(H.f(a,"$iA"),"$ibl")
if(!J.L(n.d,a.x.b))return
u=a.c
t=a.d
s=t.p(0,a.y)
r=n.ak(new V.R(s.a,s.b).m(0,2).t(0,u.ga3()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.p(p)
o=n.cy
if(typeof o!=="number")return H.p(o)
s.sV(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.p(q)
s=n.db
if(typeof s!=="number")return H.p(s)
o.sV(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.p(0,a.z)
n.dx=n.ak(new V.R(t.a,t.b).m(0,2).t(0,u.ga3()))
n.a1()},
hw:function(a){var u=this
H.f(a,"$iA")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hu:function(a){var u,t,s,r,q,p,o,n=this
a=H.y(H.f(a,"$iA"),"$idT")
if(!H.E(n.cx))return
if(H.E(n.ch)){u=a.d.p(0,a.y)
u=new V.R(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.p(t)
if(u<t)return
n.ch=!1}if(H.E(n.e)){u=a.c
t=a.d.p(0,a.y)
u=n.ak(new V.R(t.a,t.b).m(0,2).t(0,u.ga3()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.P()
s=n.y
if(typeof s!=="number")return H.p(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.P()
t=n.x
if(typeof t!=="number")return H.p(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=n.ak(new V.R(s.a,s.b).m(0,2).t(0,u.ga3()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.p(p)
o=n.cy
if(typeof o!=="number")return H.p(o)
s.sV(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.p(q)
s=n.db
if(typeof s!=="number")return H.p(s)
o.sV(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.p(0,a.z)
n.dx=n.ak(new V.R(t.a,t.b).m(0,2).t(0,u.ga3()))}n.a1()},
hs:function(a){var u,t,s,r=this
H.f(a,"$iA")
if(!H.E(r.cx))return
r.cx=!1
if(H.E(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.P()
s=r.y
if(typeof s!=="number")return H.p(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.P()
u=r.x
if(typeof u!=="number")return H.p(u)
s.sR(-t*10*u)
r.a1()}},
aN:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.O()
if(q<p){r.dy=p
u=b.y
r.c.am(0,u)
r.b.am(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.b5(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.m(0,V.b5(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia9:1}
U.e0.prototype={
gw:function(){var u=this.r
return u==null?this.r=D.Q():u},
N:function(a){var u=this.r
if(u!=null)u.G(a)},
aV:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.Q():t
t=r.gf4()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.Q():s).h(0,t)
return!0},
f5:function(a){var u,t,s,r,q=this
H.f(a,"$iA")
if(!J.L(q.b,q.a.b.c))return
H.y(a,"$ict")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.m()
r=u+t*s
if(u!==r){q.d=r
u=new D.O("zoom",u,r,[P.t])
u.b=!0
q.N(u)}},
aN:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.b5(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia9:1}
M.di.prototype={
aD:function(a){var u
H.f(a,"$iA")
u=this.y
if(u!=null)u.G(a)},
eq:function(){return this.aD(null)},
fj:function(a,b){var u,t,s,r,q,p,o,n=E.am
H.m(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gaC(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bP()
o.sae(null)
o.saS(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sae(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bT([n])
n.b=!0
this.aD(n)},
fl:function(a,b){var u,t,s=E.am
H.m(b,"$ij",[s],"$aj")
for(u=b.gU(b),t=this.gaC();u.B();)u.gJ(u).gw().K(0,t)
s=new D.bU([s])
s.b=!0
this.aD(s)},
gw:function(){var u=this.y
return u==null?this.y=D.Q():u},
aL:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
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
if(typeof s!=="number")return H.p(s)
o=C.c.ag(p*s)
p=q.b
if(typeof r!=="number")return H.p(r)
n=C.c.ag(p*r)
p=C.c.ag(q.c*s)
a.c=p
q=C.c.ag(q.d*r)
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
i=V.b5(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dX(i)
t=$.lE
if(t==null){t=V.lG()
q=V.kY()
p=$.lW
t=V.lA(t,q,p==null?$.lW=new V.I(0,0,-1):p)
$.lE=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.m(0,h)}a.db.dX(h)
for(u=f.e.a,u=new J.ap(u,u.length,[H.u(u,0)]);u.B();)u.d.am(0,a)
for(u=f.e.a,u=new J.ap(u,u.length,[H.u(u,0)]);u.B();)u.d.aL(a)
f.b.toString
a.cy.ck()
a.db.ck()
f.c.toString
a.dW()},
seG:function(a,b){this.e=H.m(b,"$ia1",[E.am],"$aa1")},
$ipm:1}
A.d7.prototype={}
A.f4.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hY:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
hU:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.al.prototype={
gah:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
q:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.al))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.h0.prototype={
eh:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.ai("")
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
A.ou(c3,u)
A.ow(c3,u)
A.ov(c3,u)
A.oy(c3,u)
A.oz(c3,u)
A.ox(c3,u)
A.oA(c3,u)
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
m=A.ot(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cV(n,35633)
b8.f=b8.cV(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.E(H.mk(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.w(P.C("Failed to link shader: "+H.k(l)))}b8.hg()
b8.hi()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.y(b8.y.S(0,"invViewMat"),"$iav")
if(t)b8.dy=H.y(b8.y.S(0,"objMat"),"$iav")
if(r)b8.fr=H.y(b8.y.S(0,"viewObjMat"),"$iav")
b8.fy=H.y(b8.y.S(0,"projViewObjMat"),"$iav")
if(c3.ry)b8.k1=H.y(b8.y.S(0,"txt2DMat"),"$icJ")
if(c3.x1)b8.k2=H.y(b8.y.S(0,"txtCubeMat"),"$iav")
if(c3.x2)b8.k3=H.y(b8.y.S(0,"colorMat"),"$iav")
b8.seC(H.e([],[A.av]))
t=c3.y2
if(t>0){b8.k4=H.f(b8.y.S(0,"bendMatCount"),"$iaC")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.w(P.C(c0+q+c1));(s&&C.a).h(s,H.y(j,"$iav"))}}if(c3.a.a)b8.r2=H.y(b8.y.S(0,"emissionClr"),"$iX")
if(c3.b.a)b8.x1=H.y(b8.y.S(0,"ambientClr"),"$iX")
if(c3.c.a)b8.y2=H.y(b8.y.S(0,"diffuseClr"),"$iX")
if(c3.d.a)b8.ds=H.y(b8.y.S(0,"invDiffuseClr"),"$iX")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.du=H.y(b8.y.S(0,"shininess"),"$iae")
if(t)b8.dt=H.y(b8.y.S(0,"specularClr"),"$iX")}if(c3.cy){b8.dv=H.y(b8.y.S(0,"envSampler"),"$ic3")
if(c3.r.a)b8.dw=H.y(b8.y.S(0,"reflectClr"),"$iX")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.dz=H.y(b8.y.S(0,"refraction"),"$iae")
if(t)b8.dA=H.y(b8.y.S(0,"refractClr"),"$iX")}}if(c3.y.a)b8.dB=H.y(b8.y.S(0,"alpha"),"$iae")
t=P.l
s=[t,A.aC]
b8.seL(new H.Z(s))
b8.ser(new H.Z([t,[P.b,A.c0]]))
b8.sh0(new H.Z(s))
b8.sh1(new H.Z([t,[P.b,A.c1]]))
b8.shl(new H.Z(s))
b8.ses(new H.Z([t,[P.b,A.c4]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.c0],i=0;i<t.length;t.length===s||(0,H.z)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.k(g)
e=H.e([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ab()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.j(0,d)
if(j==null)H.w(P.C(c0+d+c1))
H.y(j,"$iX")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.j(0,d)
if(c==null)H.w(P.C(c0+d+c1))
H.y(c,"$iX")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.j(0,d)
if(b==null)H.w(P.C(c0+d+c1))
H.y(b,"$iX")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.j(0,d)
if(j==null)H.w(P.C(c0+d+c1))
H.y(j,"$iX")
o=b8.y
d=f+"s["+k+"].color"
c=o.j(0,d)
if(c==null)H.w(P.C(c0+d+c1))
H.y(c,"$iX")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.j(0,o)
if(b==null)H.w(P.C(c0+o+c1))
H.y(b,"$ic2")
a2=b}else a2=b9
C.a.h(e,new A.c0(a1,a0,a,j,c,a2))}b8.c5.k(0,g,e)
q=b8.c4
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.w(P.C(c0+o+c1))
q.k(0,g,H.f(j,"$iaC"))}for(t=c3.Q,s=t.length,r=[A.c1],i=0;i<t.length;t.length===s||(0,H.z)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.k(g)
e=H.e([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.j(0,o)
if(j==null)H.w(P.C(c0+o+c1))
H.y(j,"$iX")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.j(0,o)
if(c==null)H.w(P.C(c0+o+c1))
H.y(c,"$iX")
p=b8.y
o=f+"s["+k+"].color"
b=p.j(0,o)
if(b==null)H.w(P.C(c0+o+c1))
H.y(b,"$iX")
if(typeof g!=="number")return g.ab()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.w(P.C(c0+o+c1))
H.y(a3,"$icJ")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.w(P.C(c0+o+c1))
H.y(a3,"$ic3")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.w(P.C(c0+o+c1))
H.y(a3,"$ic3")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.w(P.C(c0+o+c1))
H.y(a5,"$icI")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.j(0,o)
if(a3==null)H.w(P.C(c0+o+c1))
H.y(a3,"$iae")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.j(0,o)
if(a5==null)H.w(P.C(c0+o+c1))
H.y(a5,"$iae")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.j(0,o)
if(a8==null)H.w(P.C(c0+o+c1))
H.y(a8,"$iae")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}C.a.h(e,new A.c1(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.c7.k(0,g,e)
q=b8.c6
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.w(P.C(c0+o+c1))
q.k(0,g,H.f(j,"$iaC"))}for(t=c3.ch,s=t.length,r=[A.c4],i=0;i<t.length;t.length===s||(0,H.z)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.k(g)
e=H.e([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.j(0,o)
if(j==null)H.w(P.C(c0+o+c1))
H.y(j,"$iX")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.j(0,o)
if(c==null)H.w(P.C(c0+o+c1))
H.y(c,"$iX")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.j(0,o)
if(b==null)H.w(P.C(c0+o+c1))
H.y(b,"$iX")
p=b8.y
o=f+"s["+k+"].color"
a3=p.j(0,o)
if(a3==null)H.w(P.C(c0+o+c1))
H.y(a3,"$iX")
if(typeof g!=="number")return g.ab()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.j(0,o)
if(a5==null)H.w(P.C(c0+o+c1))
H.y(a5,"$iX")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.j(0,o)
if(a8==null)H.w(P.C(c0+o+c1))
H.y(a8,"$iX")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.j(0,o)
if(b2==null)H.w(P.C(c0+o+c1))
H.y(b2,"$iae")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.j(0,o)
if(b3==null)H.w(P.C(c0+o+c1))
H.y(b3,"$iae")
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
if(a5==null)H.w(P.C(c0+d+c1))
H.y(a5,"$icI")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.j(0,d)
if(a5==null)H.w(P.C(c0+d+c1))
H.y(a5,"$iae")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.j(0,d)
if(a8==null)H.w(P.C(c0+d+c1))
H.y(a8,"$iae")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.j(0,d)
if(a5==null)H.w(P.C(c0+d+c1))
H.y(a5,"$iae")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.j(0,d)
if(a8==null)H.w(P.C(c0+d+c1))
H.y(a8,"$iae")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.j(0,d)
if(b2==null)H.w(P.C(c0+d+c1))
H.y(b2,"$iae")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.j(0,d)
if(a5==null)H.w(P.C(c0+d+c1))
H.y(a5,"$ic2")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.w(P.C(c0+o+c1))
H.y(a5,"$ic2")
a6=a5}else a6=b9
C.a.h(e,new A.c4(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.c9.k(0,g,e)
q=b8.c8
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.w(P.C(c0+o+c1))
q.k(0,g,H.f(j,"$iaC"))}}},
he:function(a,b){},
seC:function(a){this.r1=H.m(a,"$ib",[A.av],"$ab")},
seL:function(a){this.c4=H.m(a,"$ix",[P.l,A.aC],"$ax")},
ser:function(a){this.c5=H.m(a,"$ix",[P.l,[P.b,A.c0]],"$ax")},
sh0:function(a){this.c6=H.m(a,"$ix",[P.l,A.aC],"$ax")},
sh1:function(a){this.c7=H.m(a,"$ix",[P.l,[P.b,A.c1]],"$ax")},
shl:function(a){this.c8=H.m(a,"$ix",[P.l,A.aC],"$ax")},
ses:function(a){this.c9=H.m(a,"$ix",[P.l,[P.b,A.c4]],"$ax")}}
A.aw.prototype={
i:function(a){return"dirLight"+H.k(this.a)}}
A.ay.prototype={
i:function(a){return"pointLight"+H.k(this.a)}}
A.az.prototype={
i:function(a){return"spotLight"+H.k(this.a)}}
A.h3.prototype={
i:function(a){return this.b_}}
A.c0.prototype={}
A.c1.prototype={}
A.c4.prototype={}
A.cB.prototype={
ek:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cV:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.E(H.mk(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.C("Error compiling shader '"+H.k(s)+"': "+H.k(u)))}return s},
hg:function(){var u,t,s,r=this,q=H.e([],[A.d7]),p=r.a,o=H.a_(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.p(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d7(p,t.name,s))}r.x=new A.f4(q)},
hi:function(){var u,t,s,r=this,q=H.e([],[A.dU]),p=r.a,o=H.a_(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.p(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.hR(t.type,t.size,t.name,s))}r.y=new A.it(q)},
aF:function(a,b,c){var u=this.a
if(a===1)return new A.aC(u,b,c)
else return A.kV(u,this.r,b,a,c)},
eI:function(a,b,c){var u=this.a
if(a===1)return new A.c2(u,b,c)
else return A.kV(u,this.r,b,a,c)},
eJ:function(a,b,c){var u=this.a
if(a===1)return new A.c3(u,b,c)
else return A.kV(u,this.r,b,a,c)},
bc:function(a,b){return new P.ea(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
hR:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aF(b,c,d)
case 5121:return u.aF(b,c,d)
case 5122:return u.aF(b,c,d)
case 5123:return u.aF(b,c,d)
case 5124:return u.aF(b,c,d)
case 5125:return u.aF(b,c,d)
case 5126:return new A.ae(u.a,c,d)
case 35664:return new A.ip(u.a,c,d)
case 35665:return new A.X(u.a,c,d)
case 35666:return new A.cI(u.a,c,d)
case 35667:return new A.iq(u.a,c,d)
case 35668:return new A.ir(u.a,c,d)
case 35669:return new A.is(u.a,c,d)
case 35674:return new A.iu(u.a,c,d)
case 35675:return new A.cJ(u.a,c,d)
case 35676:return new A.av(u.a,c,d)
case 35678:return u.eI(b,c,d)
case 35680:return u.eJ(b,c,d)
case 35670:throw H.d(u.bc("BOOL",c))
case 35671:throw H.d(u.bc("BOOL_VEC2",c))
case 35672:throw H.d(u.bc("BOOL_VEC3",c))
case 35673:throw H.d(u.bc("BOOL_VEC4",c))
default:throw H.d(P.C("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}}
A.dU.prototype={}
A.it.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
S:function(a,b){var u=this.j(0,b)
if(u==null)throw H.d(P.C("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.L()},
L:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aC.prototype={
i:function(a){return"Uniform1i: "+H.k(this.c)}}
A.iq.prototype={
i:function(a){return"Uniform2i: "+H.k(this.c)}}
A.ir.prototype={
i:function(a){return"Uniform3i: "+H.k(this.c)}}
A.is.prototype={
i:function(a){return"Uniform4i: "+H.k(this.c)}}
A.io.prototype={
i:function(a){return"Uniform1iv: "+H.k(this.c)},
shy:function(a){H.m(a,"$ib",[P.l],"$ab")}}
A.ae.prototype={
i:function(a){return"Uniform1f: "+H.k(this.c)}}
A.ip.prototype={
i:function(a){return"Uniform2f: "+H.k(this.c)}}
A.X.prototype={
i:function(a){return"Uniform3f: "+H.k(this.c)}}
A.cI.prototype={
i:function(a){return"Uniform4f: "+H.k(this.c)}}
A.iu.prototype={
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}}
A.cJ.prototype={
aj:function(a){var u=new Float32Array(H.c6(H.m(a,"$ib",[P.t],"$ab")))
C.d.e6(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.k(this.c)}}
A.av.prototype={
aj:function(a){var u=new Float32Array(H.c6(H.m(a,"$ib",[P.t],"$ab")))
C.d.e7(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.k(this.c)}}
A.c2.prototype={
i:function(a){return"UniformSampler2D: "+H.k(this.c)}}
A.c3.prototype={
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}
F.jM.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.ce(s.b,b).ce(s.d.ce(s.c,b),c)
a.sV(0,new V.a0(r.a,r.b,r.c))
a.scr(r.t(0,Math.sqrt(r.C(r))))
s=1-b
u=1-c
a.sbT(new V.bn(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:4}
F.jY.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:11}
F.k_.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.p(p)
s=-s*p
u=r*p
a.sV(0,new V.a0(s,u,q))
u=new V.I(s,u,q)
a.scr(u.t(0,Math.sqrt(u.C(u))))
a.sbT(new V.bn(1-c,2+c,-1,-1))},
$S:4}
F.k9.prototype={
$3:function(a,b,c){var u=c*3.141592653589793,t=Math.sin(u),s=b*6.283185307179586,r=new V.I(Math.cos(s)*t,Math.cos(u),Math.sin(s)*t)
s=r.t(0,Math.sqrt(r.C(r)))
a.sV(0,new V.a0(s.a,s.b,s.c))},
$S:4}
F.kx.prototype={
$2:function(a,b){return 0},
$S:11}
F.ky.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.p(s)
u=a.f
t=new V.I(u.a,u.b,u.c)
s=t.t(0,Math.sqrt(t.C(t))).m(0,this.b+s)
a.sV(0,new V.a0(s.a,s.b,s.c))},
$S:4}
F.kA.prototype={
$1:function(a){return new V.a0(Math.cos(a),Math.sin(a),0)},
$S:42}
F.jZ.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o=this,n=b*6.283185307179586,m=o.a,l=o.b,k=J.lm(m.$1(n),l)
l=J.mT(J.lm(m.$1(n+3.141592653589793/o.c),l),k)
l=new V.I(l.a,l.b,l.c)
u=l.t(0,Math.sqrt(l.C(l)))
m=$.lX
if(m==null){m=new V.I(1,0,0)
$.lX=m
t=m}else t=m
m=u.at(!J.L(u,t)?V.lZ():t)
s=m.t(0,Math.sqrt(m.C(m)))
m=s.at(u)
t=m.t(0,Math.sqrt(m.C(m)))
r=c*6.283185307179586
m=Math.cos(r)
l=o.d
q=Math.sin(r)
m=t.m(0,m*l)
l=s.m(0,q*l)
q=m.c
p=l.c
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.p(p)
a.sV(0,J.mS(k,new V.a0(m.a-l.a,m.b-l.b,q-p)))},
$S:4}
F.k2.prototype={
$2:function(a,b){return 0},
$S:11}
F.k3.prototype={
$3:function(a,b,c){var u,t,s=b*2-1,r=c*2-1
a.sV(0,new V.a0(s,r,this.a.a.$2(b,c)))
u=new V.I(s,r,1)
a.scr(u.t(0,Math.sqrt(u.C(u))))
u=1-b
t=1-c
a.sbT(new V.bn(b*c,2+u*c,4+b*t,6+u*t))},
$S:4}
F.a8.prototype={
aY:function(){var u=this
if(!u.gaZ()){C.a.K(u.a.a.d.b,u)
u.a.a.Y()}u.bM()
u.bN()
u.h6()},
bQ:function(a){this.a=a
C.a.h(a.d.b,this)},
bR:function(a){this.b=a
C.a.h(a.d.c,this)},
hf:function(a){this.c=a
C.a.h(a.d.d,this)},
bM:function(){var u=this.a
if(u!=null){C.a.K(u.d.b,this)
this.a=null}},
bN:function(){var u=this.b
if(u!=null){C.a.K(u.d.c,this)
this.b=null}},
h6:function(){var u=this.c
if(u!=null){C.a.K(u.d.d,this)
this.c=null}},
gaZ:function(){return this.a==null||this.b==null||this.c==null},
eB:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cL()
if(q!=null)s=s.n(0,q)
if(u!=null)s=s.n(0,u)
if(t!=null)s=s.n(0,t)
if(s.dL())return
return s.t(0,Math.sqrt(s.C(s)))},
eF:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.p(0,q)
r=new V.I(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.C(r)))
r=t.p(0,q)
r=new V.I(r.a,r.b,r.c)
r=s.at(r.t(0,Math.sqrt(r.C(r))))
return r.t(0,Math.sqrt(r.C(r)))},
bY:function(){var u,t=this
if(t.d!=null)return!0
u=t.eB()
if(u==null){u=t.eF()
if(u==null)return!1}t.d=u
t.a.a.Y()
return!0},
eA:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cL()
if(q!=null)s=s.n(0,q)
if(u!=null)s=s.n(0,u)
if(t!=null)s=s.n(0,t)
if(s.dL())return
return s.t(0,Math.sqrt(s.C(s)))},
eE:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.P().a){l=d.p(0,g)
l=new V.I(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.P(0)}else{p=(l-u.b)/r
l=d.p(0,g).m(0,p).n(0,g).p(0,j)
l=new V.I(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.P(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.C(l)))
l=o.at(q)
l=l.t(0,Math.sqrt(l.C(l))).at(o)
q=l.t(0,Math.sqrt(l.C(l)))}return q},
bW:function(){var u,t=this
if(t.e!=null)return!0
u=t.eA()
if(u==null){u=t.eE()
if(u==null)return!1}t.e=u
t.a.a.Y()
return!0},
ghM:function(a){var u=this
if(J.L(u.a,u.b))return!0
if(J.L(u.b,u.c))return!0
if(J.L(u.c,u.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
E:function(a){var u,t,s=this
if(s.gaZ())return a+"disposed"
u=a+C.b.a9(J.as(s.a.e),0)+", "+C.b.a9(J.as(s.b.e),0)+", "+C.b.a9(J.as(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
L:function(){return this.E("")}}
F.fz.prototype={}
F.hP.prototype={
b1:function(a,b,c){var u,t=b.a
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
F.bj.prototype={
aY:function(){var u=this
if(!u.gaZ()){C.a.K(u.a.a.c.b,u)
u.a.a.Y()}u.bM()
u.bN()},
bQ:function(a){this.a=a
C.a.h(a.c.b,this)},
bR:function(a){this.b=a
C.a.h(a.c.c,this)},
bM:function(){var u=this.a
if(u!=null){C.a.K(u.c.b,this)
this.a=null}},
bN:function(){var u=this.b
if(u!=null){C.a.K(u.c.c,this)
this.b=null}},
gaZ:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
E:function(a){if(this.gaZ())return a+"disposed"
return a+C.b.a9(J.as(this.a.e),0)+", "+C.b.a9(J.as(this.b.e),0)},
L:function(){return this.E("")}}
F.fO.prototype={}
F.im.prototype={
b1:function(a,b,c){var u,t=b.a
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
F.bC.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
E:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.a9(J.as(u.e),0)},
L:function(){return this.E("")}}
F.bZ.prototype={
gw:function(){var u=this.e
return u==null?this.e=D.Q():u},
bi:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.v()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.z)(g),++s){r=g[s]
h.a.h(0,r.hP())}h.a.v()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.z)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.n()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bC()
if(n.a==null)H.w(P.C("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.G(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.z)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.n()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.v()
p=p.e
if(typeof p!=="number")return p.n()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.nf(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.z)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.n()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.v()
p=p.e
if(typeof p!=="number")return p.n()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.n()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.dk(l,k,i)}g=h.e
if(g!=null)g.a4(0)},
a2:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.a2()||!1
if(!t.a.a2())u=!1
s=t.e
if(s!=null)s.a4(0)
return u},
hE:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.e
if(c!=null)++c.d
for(u=d.a.c.length-1,c=a.b,t=a.a,s=t.length,r=a.c,q=c-1;u>=0;--u){p=d.a.c
if(u>=p.length)return H.c(p,u)
o=p[u]
p=o.y
n=C.c.b0(p.a*q)
p=p.b
if(typeof r!=="number")return r.p()
m=C.c.b0(p*(r-1))
n=n>=0?C.e.ai(n,c):c+C.e.ai(n,c)
l=(n+(m>=0?C.e.ai(m,r):r+C.e.ai(m,r))*c)*4
if(l<0||l>=s)return H.c(t,l)
p=t[l]/255
k=l+1
if(k>=s)return H.c(t,k)
k=t[k]/255
j=l+2
if(j>=s)return H.c(t,j)
j=t[j]/255
i=l+3
if(i>=s)return H.c(t,i)
i=t[i]/255
if(p<0)p=0
else if(p>1)p=1
if(k<0)k=0
else if(k>1)k=1
if(j<0)j=0
else if(j>1)j=1
if(!(i<0))if(i>1)i=1
h=(p+k+j)*b/3
p=o.f
k=o.r
j=k.a
i=k.b
k=k.c
if(typeof k!=="number")return k.m()
g=p.a
f=p.b
e=p.c
if(typeof e!=="number")return e.n()
k=new V.a0(g+j*h,f+i*h,e+k*h)
if(!J.L(p,k)){o.f=k
p=o.a
if(p!=null){p=p.e
if(p!=null)p.G(null)}}}c=d.e
if(c!=null)c.a4(0)},
iO:function(a){var u,t,s,r,q=this.e
if(q!=null)++q.d
for(q=this.a,u=q.c.length-1,t=a.a;u>=0;--u){s=q.c
if(u>=s.length)return H.c(s,u)
r=s[u]
if((t&$.bf().a)===0)r.f=null
if((t&$.aU().a)===0)r.r=null
if((t&$.be().a)===0)r.x=null
if((t&$.bt().a)===0)r.y=null
if((t&$.bu().a)===0)r.z=null
if((t&$.lk().a)===0)r.Q=null
if((t&$.bI().a)===0)r.ch=0
if((t&$.bd().a)===0)r.cx=null}q=this.e
if(q!=null)q.a4(0)},
iN:function(a){var u,t,s,r=this.e
if(r!=null)++r.d
for(r=this.d,u=r.b.length-1;u>=0;--u){t=r.b
if(u>=t.length)return H.c(t,u)
s=t[u]
s.d=null}r=this.e
if(r!=null)r.a4(0)},
ie:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.e(o.slice(0),[H.u(o,0)])
for(o=[F.ao];u.length!==0;){t=C.a.gi2(u)
C.a.dZ(u,0)
if(t!=null){s=H.e([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.c(u,r)
q=u[r]
if(q!=null&&a.b1(0,t,q)){C.a.h(s,q)
C.a.dZ(u,r)}}if(s.length>1)b.bi(s)}}p.a.v()
p.c.bk()
p.d.bk()
p.b.iz()
p.c.cn(new F.im())
p.d.cn(new F.hP())
o=p.e
if(o!=null)o.a4(0)},
bd:function(){this.ie(new F.iR(),new F.hp())},
hK:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bf()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.aU().a)!==0)++s
if((t&$.be().a)!==0)++s
if((t&$.bt().a)!==0)++s
if((t&$.bu().a)!==0)++s
if((t&$.d2().a)!==0)++s
if((t&$.d3().a)!==0)++s
if((t&$.bI().a)!==0)++s
if((t&$.bd().a)!==0)++s
r=a3.gcA(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.t
p=H.e(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.e(u,[Z.d9])
for(n=0,m=0;m<s;++m){l=a3.hF(m)
k=l.gcA(l)
C.a.k(o,m,new Z.d9(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.c(u,j)
i=u[j].ia(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.c6(p)),35044)
u.bindBuffer(a0,null)
e=new Z.da(new Z.e1(a0,f),o,a3)
e.seW(H.e([],[Z.bz]))
if(a.b.b.length!==0){t=P.l
d=H.e([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.v()
C.a.h(d,c.e)}b=Z.l_(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bz(0,d.length,b))}if(a.c.b.length!==0){t=P.l
d=H.e([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.v()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.v()
C.a.h(d,c.e)}b=Z.l_(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bz(1,d.length,b))}if(a.d.b.length!==0){t=P.l
d=H.e([],[t])
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
C.a.h(d,c.e)}b=Z.l_(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bz(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.e([],[P.h])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.E(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.E(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.E(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.E(t))}return C.a.u(s,"\n")},
Y:function(){var u=this.e
if(u!=null)u.G(null)},
$ipn:1}
F.hJ.prototype={
hC:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.ao],"$ab")
u=H.e([],[F.a8])
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
C.a.h(u,F.dk(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dk(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dk(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dk(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
cn:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b1(0,p,n)){p.aY()
break}}}}},
bk:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=s.ghM(s)
if(t)s.aY()}},
a2:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].bY())s=!1
return s},
bX:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].bW())s=!1
return s},
i:function(a){return this.L()},
E:function(a){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].E(a))
return C.a.u(r,"\n")},
L:function(){return this.E("")},
seP:function(a){this.b=H.m(a,"$ib",[F.a8],"$ab")}}
F.hK.prototype={
gl:function(a){return this.b.length},
cn:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b1(0,p,n)){p.aY()
break}}}}},
bk:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=J.L(s.a,s.b)
if(t)s.aY()}},
i:function(a){return this.L()},
E:function(a){var u,t,s=H.e([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
C.a.h(s,t[u].E(a+(""+u+". ")))}return C.a.u(s,"\n")},
L:function(){return this.E("")},
seX:function(a){this.b=H.m(a,"$ib",[F.bj],"$ab")}}
F.hL.prototype={
gl:function(a){return this.b.length},
iz:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.K(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.G(null)}s=t.a
if(s!=null){C.a.K(s.b.b,t)
t.a=null}}}},
i:function(a){return this.L()},
E:function(a){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].E(a))
return C.a.u(r,"\n")},
L:function(){return this.E("")},
sbJ:function(a){this.b=H.m(a,"$ib",[F.bC],"$ab")}}
F.ao.prototype={
c0:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.kZ(u.cx,r,o,t,s,q,p,a,n)},
hP:function(){return this.c0(null)},
sV:function(a,b){var u
if(!J.L(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Y()}},
scr:function(a){var u
if(!J.L(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Y()}},
sbT:function(a){var u
if(!J.L(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.Y()}},
ia:function(a){var u,t,s=this
if(a.q(0,$.bf())){u=s.f
t=[P.t]
if(u==null)return H.e([0,0,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.q(0,$.aU())){u=s.r
t=[P.t]
if(u==null)return H.e([0,1,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.q(0,$.be())){u=s.x
t=[P.t]
if(u==null)return H.e([0,0,1],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.q(0,$.bt())){u=s.y
t=[P.t]
if(u==null)return H.e([0,0],t)
else return H.e([u.a,u.b],t)}else if(a.q(0,$.bu())){u=s.z
t=[P.t]
if(u==null)return H.e([0,0,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.q(0,$.d2())){u=s.Q
t=[P.t]
if(u==null)return H.e([1,1,1],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.q(0,$.d3())){u=s.Q
t=[P.t]
if(u==null)return H.e([1,1,1,1],t)
else return H.e([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.bI()))return H.e([s.ch],[P.t])
else if(a.q(0,$.bd())){u=s.cx
t=[P.t]
if(u==null)return H.e([-1,-1,-1,-1],t)
else return H.e([u.a,u.b,u.c,u.d],t)}else return H.e([],[P.t])},
bY:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cL()
t.d.D(0,new F.iW(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.a4(0)}return!0},
bW:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cL()
t.d.D(0,new F.iV(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.a4(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
E:function(a){var u,t,s=this,r="-",q=H.e([],[P.h])
C.a.h(q,C.b.a9(J.as(s.e),0))
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
C.a.h(q,V.U(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.u(q,", ")
return a+"{"+t+"}"},
L:function(){return this.E("")}}
F.iW.prototype={
$1:function(a){var u,t
H.f(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:10}
F.iV.prototype={
$1:function(a){var u,t
H.f(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:10}
F.iM.prototype={
v:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.c(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.C("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.Y()
return!0},
gl:function(a){return this.c.length},
a2:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].bY()
return!0},
bX:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].bW()
return!0},
hL:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.m()
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.L(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.G(null)}}}}return!0},
i:function(a){return this.L()},
E:function(a){var u,t,s,r
this.v()
u=H.e([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].E(a))
return C.a.u(u,"\n")},
L:function(){return this.E("")},
shz:function(a){this.c=H.m(a,"$ib",[F.ao],"$ab")}}
F.iN.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
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
D:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a8]})
C.a.D(u.b,b)
C.a.D(u.c,new F.iO(u,b))
C.a.D(u.d,new F.iP(u,b))},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].E(""))
return C.a.u(r,"\n")},
seQ:function(a){this.b=H.m(a,"$ib",[F.a8],"$ab")},
seR:function(a){this.c=H.m(a,"$ib",[F.a8],"$ab")},
seS:function(a){this.d=H.m(a,"$ib",[F.a8],"$ab")}}
F.iO.prototype={
$1:function(a){H.f(a,"$ia8")
if(!J.L(a.a,this.a))this.b.$1(a)},
$S:10}
F.iP.prototype={
$1:function(a){var u
H.f(a,"$ia8")
u=this.a
if(!J.L(a.a,u)&&!J.L(a.b,u))this.b.$1(a)},
$S:10}
F.iQ.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.c(t,u)
return t[u]}else{if(b<0)return H.c(t,b)
return t[b]}},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].E(""))
return C.a.u(r,"\n")},
seY:function(a){this.b=H.m(a,"$ib",[F.bj],"$ab")},
seZ:function(a){this.c=H.m(a,"$ib",[F.bj],"$ab")}}
F.iS.prototype={}
F.iR.prototype={
b1:function(a,b,c){return J.L(b.f,c.f)}}
F.iT.prototype={}
F.hp.prototype={
bi:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[F.ao],"$ab")
u=V.cL()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null){q=u.a
p=r.a
o=u.b
n=r.b
m=u.c
r=r.c
if(typeof m!=="number")return m.n()
if(typeof r!=="number")return H.p(r)
u=new V.I(q+p,o+n,m+r)}}u=u.t(0,Math.sqrt(u.C(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.z)(a),++s){l=a[s]
if(r)k=null
else{q=u.a
p=u.b
o=u.c
if(typeof o!=="number")return o.m()
k=u.t(0,Math.sqrt(q*q+p*p+o*o))}if(!J.L(l.r,k)){l.r=k
q=l.a
if(q!=null){q=q.e
if(q!=null)q.G(null)}}}return}}
F.iU.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].E(""))
return C.a.u(r,"\n")},
sbJ:function(a){this.b=H.m(a,"$ib",[F.bC],"$ab")}}
O.dw.prototype={
gw:function(){var u=this.fr
return u==null?this.fr=D.Q():u},
a7:function(a){var u
H.f(a,"$iA")
u=this.fr
if(u!=null)u.G(a)},
fh:function(){return this.a7(null)},
d9:function(a){H.f(a,"$iA")
this.a=null
this.a7(a)},
hb:function(){return this.d9(null)},
fb:function(a,b){var u=V.an
H.m(b,"$ij",[u],"$aj")
u=new D.bT([u])
u.b=!0
this.a7(u)},
fd:function(a,b){var u=V.an
H.m(b,"$ij",[u],"$aj")
u=new D.bU([u])
u.b=!0
this.a7(u)},
cS:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.l,h=new H.Z([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=h.j(0,0)
h.k(0,0,r==null?1:r)}q=H.e([],[A.aw])
h.D(0,new O.h7(j,q))
C.a.br(q,new O.h8())
p=new H.Z([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){o=u[s]
r=o.gaX()
n=p.j(0,o.gaX())
p.k(0,r,n==null?1:n)}m=H.e([],[A.ay])
p.D(0,new O.h9(j,m))
C.a.br(m,new O.ha())
l=new H.Z([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.z)(i),++s){o=i[s]
t=o.gaX()
r=l.j(0,o.gaX())
l.k(0,t,r==null?1:r)}k=H.e([],[A.az])
l.D(0,new O.hb(j,k))
C.a.br(k,new O.hc())
i=C.e.a_(j.e.a.length+3,4)
j.dy.e
return A.nm(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
ez:function(a,b){H.m(a,"$ib",[T.cF],"$ab")},
am:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.ap(u,u.length,[H.u(u,0)]);u.B();){t=u.d
t.toString
s=$.iL
if(s==null)s=$.iL=new V.I(0,0,1)
t.a=s
r=$.iK
t.d=r==null?$.iK=new V.I(0,1,0):r
r=$.iJ
t.e=r==null?$.iJ=new V.I(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bm(s)
r=s.a
p=s.b
o=s.c
if(typeof o!=="number")return o.m()
t.a=s.t(0,Math.sqrt(r*r+p*p+o*o))
o=q.bm(t.d)
p=o.a
r=o.b
s=o.c
if(typeof s!=="number")return s.m()
t.d=o.t(0,Math.sqrt(p*p+r*r+s*s))
s=q.bm(t.e)
r=s.a
p=s.b
o=s.c
if(typeof o!=="number")return o.m()
t.e=s.t(0,Math.sqrt(r*r+p*p+o*o))}}}},
iB:function(b6,b7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.cS()
u=b6.fr.j(0,b5.b_)
if(u==null){u=A.nl(b5,b6.a)
t=u.b
if(t.length===0)H.w(P.C("May not cache a shader with no name."))
if(b6.fr.bf(0,t))H.w(P.C('Shader cache already contains a shader by the name "'+t+'".'))
b6.fr.k(0,t,u)}b5=b4.a=u
b7.e=null}s=b5.z
r=s.dr
b5=b7.e
if(!(b5 instanceof Z.da))b5=b7.e=null
if(b5==null||!b5.d.q(0,r)){b5=s.k3
if(b5)b7.d.a2()
q=s.k4
if(q){p=b7.d
o=p.e
if(o!=null)++o.d
p.d.bX()
p.a.bX()
p=p.e
if(p!=null)p.a4(0)}p=s.r2
if(p){o=b7.d
n=o.e
if(n!=null)++n.d
o.a.hL()
o=o.e
if(o!=null)o.a4(0)}m=b7.d.hK(new Z.iY(b6.a),r)
m.aJ($.bf()).e=b4.a.Q.c
if(b5)m.aJ($.aU()).e=b4.a.cx.c
if(q)m.aJ($.be()).e=b4.a.ch.c
if(s.r1)m.aJ($.bt()).e=b4.a.cy.c
if(p)m.aJ($.bu()).e=b4.a.db.c
if(s.rx)m.aJ($.bd()).e=b4.a.dx.c
b7.e=m}b5=T.cF
l=H.e([],[b5])
q=b4.a
p=b6.a
p.useProgram(q.r)
q.x.hY()
if(s.dy){q=b4.a
o=b6.dx
o=o.gZ(o)
q=q.dy
q.toString
q.aj(o.aa(0,!0))}if(s.fr){q=b4.a
o=b6.cx
if(o==null){o=b6.db
o=o.gZ(o)
n=b6.dx
n=b6.cx=o.m(0,n.gZ(n))
o=n}q=q.fr
q.toString
q.aj(o.aa(0,!0))}q=b4.a
o=b6.ch
if(o==null){o=b6.giy()
n=b6.dx
n=b6.ch=o.m(0,n.gZ(n))
o=n}q=q.fy
q.toString
q.aj(o.aa(0,!0))
if(s.ry){q=b4.a
o=b4.b
q=q.k1
q.toString
q.aj(C.j.aa(o,!0))}if(s.x1){q=b4.a
o=b4.c
q=q.k2
q.toString
q.aj(C.j.aa(o,!0))}if(s.x2){q=b4.a
o=b4.d
q=q.k3
q.toString
q.aj(C.j.aa(o,!0))}if(s.y2>0){k=b4.e.a.length
q=b4.a.k4
C.d.bn(q.a,q.d,k)
for(q=[P.t],j=0;j<k;++j){o=b4.a
n=b4.e.a
if(j>=n.length)return H.c(n,j)
n=n[j]
o.toString
H.f(n,"$ian")
o=o.r1
if(j>=o.length)return H.c(o,j)
o=o[j]
i=new Float32Array(H.c6(H.m(n.aa(0,!0),"$ib",q,"$ab")))
C.d.e7(o.a,o.d,!1,i)}}if(s.a.a){q=b4.a
o=b4.f.f
q=q.r2
C.d.W(q.a,q.d,o.a,o.b,o.c)}if(s.id){if(s.b.a){q=b4.a
o=b4.r.f
q=q.x1
C.d.W(q.a,q.d,o.a,o.b,o.c)}if(s.c.a){q=b4.a
o=b4.x.f
q=q.y2
C.d.W(q.a,q.d,o.a,o.b,o.c)}if(s.d.a){q=b4.a
o=b4.y.f
q=q.ds
C.d.W(q.a,q.d,o.a,o.b,o.c)}q=s.e.a
if(!q)o=!1
else o=!0
if(o){o=b4.a
n=b4.z.ch
o=o.du
C.d.a0(o.a,o.d,n)}if(q){q=b4.a
o=b4.z.f
q=q.dt
C.d.W(q.a,q.d,o.a,o.b,o.c)}q=s.z
if(q.length>0){o=b6.db
h=o.gZ(o)
o=P.l
g=new H.Z([o,o])
for(o=b4.dx.e,n=o.length,f=0;f<o.length;o.length===n||(0,H.z)(o),++f){e=o[f]
d=g.j(0,0)
if(d==null)d=0
g.k(0,0,d+1)
c=J.d4(b4.a.c5.j(0,0),d)
b=h.bm(e.a)
a=b.a
a0=b.b
a1=b.c
if(typeof a1!=="number")return a1.m()
a1=b.t(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=c.e
a=a1.a
b=a1.b
a1=a1.c
C.d.W(a0.a,a0.d,a,b,a1)
a1=e.c
b=c.f
C.d.W(b.a,b.d,a1.a,a1.b,a1.c)}for(o=q.length,f=0;f<q.length;q.length===o||(0,H.z)(q),++f){n=q[f].a
k=g.j(0,n)
if(k==null)k=0
n=b4.a.c4.j(0,n)
C.d.bn(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=b6.db
h=o.gZ(o)
o=P.l
a2=new H.Z([o,o])
for(o=b4.dx.f,n=o.length,b=[b5],a=[P.t],f=0;f<o.length;o.length===n||(0,H.z)(o),++f){e=o[f]
a3=e.gaX()
d=a2.j(0,a3)
if(d==null)d=0
a2.k(0,a3,d+1)
c=J.d4(b4.a.c7.j(0,a3),d)
a4=h.m(0,e.gZ(e))
a0=e.gZ(e)
a1=$.cz
a0=a0.cs(a1==null?$.cz=new V.a0(0,0,0):a1)
a1=c.b
C.d.W(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=$.cz
a0=a4.cs(a0==null?$.cz=new V.a0(0,0,0):a0)
a1=c.c
C.d.W(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=e.gaW(e)
a1=c.e
C.d.W(a1.a,a1.d,a0.a,a0.b,a0.c)
e.gay()
a0=a4.dK(0)
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
i=new Float32Array(H.c6(H.m(new V.dy(a1,a5,a6,a7,a8,a9,b0,b1,a0).aa(0,!0),"$ib",a,"$ab")))
C.d.e6(b2.a,b2.d,!1,i)
e.gay()
a0=e.gay()
H.m(l,"$ib",b,"$ab")
if(!C.a.as(l,a0)){a0.sav(0,l.length)
C.a.h(l,a0)}a0=e.gay()
a1=a0.gax(a0)
if(a1){a1=c.f
a1.toString
a5=a0.gax(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.gav(a0)
a1.a.uniform1i(a1.d,a0)}}e.gaO()
a0=e.gec()
a1=c.x
a1.toString
a5=a0.gc2(a0)
a6=a0.gc3(a0)
a7=a0.ghW()
a0=a0.ghV()
C.d.e5(a1.a,a1.d,a5,a6,a7,a0)
a0=e.gaO()
if(!C.a.as(l,a0)){a0.sav(0,l.length)
C.a.h(l,a0)}a0=e.gaO()
a1=a0.gax(a0)
if(a1){a1=c.r
a1.toString
a5=a0.gax(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.gav(a0)
a1.a.uniform1i(a1.d,a0)}}if(e.ghZ()){a0=e.ghG()
a1=c.y
C.d.a0(a1.a,a1.d,a0)
a0=e.ghH()
a1=c.z
C.d.a0(a1.a,a1.d,a0)
a0=e.ghI()
a1=c.Q
C.d.a0(a1.a,a1.d,a0)}}for(o=q.length,f=0;f<q.length;q.length===o||(0,H.z)(q),++f){n=q[f].a
k=a2.j(0,n)
if(k==null)k=0
n=b4.a.c6.j(0,n)
C.d.bn(n.a,n.d,k)}}q=s.ch
if(q.length>0){o=b6.db
h=o.gZ(o)
o=P.l
b3=new H.Z([o,o])
for(o=b4.dx.r,n=o.length,b5=[b5],f=0;f<o.length;o.length===n||(0,H.z)(o),++f){e=o[f]
a3=e.gaX()
d=b3.j(0,a3)
if(d==null)d=0
b3.k(0,a3,d+1)
c=J.d4(b4.a.c9.j(0,a3),d)
b=e.gix(e)
a=c.b
C.d.W(a.a,a.d,b.a,b.b,b.c)
b=e.giX(e).je()
a=c.c
C.d.W(a.a,a.d,b.a,b.b,b.c)
b=h.cs(e.gix(e))
a=c.d
C.d.W(a.a,a.d,b.a,b.b,b.c)
b=e.gaW(e)
a=c.e
C.d.W(a.a,a.d,b.a,b.b,b.c)
e.gay()
b=e.gct()
a=c.f
C.d.W(a.a,a.d,b.a,b.b,b.c)
b=e.gcp(e)
a=c.r
C.d.W(a.a,a.d,b.a,b.b,b.c)
b=e.gjf()
a=c.x
C.d.a0(a.a,a.d,b)
b=e.gjg()
a=c.y
C.d.a0(a.a,a.d,b)
e.gay()
b=e.gay()
H.m(l,"$ib",b5,"$ab")
if(!C.a.as(l,b)){b.sav(0,l.length)
C.a.h(l,b)}b=e.gay()
a=b.gax(b)
if(a){a=c.dx
a.toString
a0=b.gax(b)
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.gav(b)
a.a.uniform1i(a.d,b)}}e.gaO()
b=e.gec()
a=c.z
a.toString
a0=b.gc2(b)
a1=b.gc3(b)
a5=b.ghW()
b=b.ghV()
C.d.e5(a.a,a.d,a0,a1,a5,b)
b=e.gaO()
if(!C.a.as(l,b)){b.sav(0,l.length)
C.a.h(l,b)}b=e.gaO()
a=b.gax(b)
if(a){a=c.dy
a.toString
a0=b.gax(b)
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.gav(b)
a.a.uniform1i(a.d,b)}}if(e.giY()){b=e.giW()
a=c.Q
C.d.a0(a.a,a.d,b)
b=e.giV()
a=c.ch
C.d.a0(a.a,a.d,b)}if(e.ghZ()){b=e.ghG()
a=c.cx
C.d.a0(a.a,a.d,b)
b=e.ghH()
a=c.cy
C.d.a0(a.a,a.d,b)
b=e.ghI()
a=c.db
C.d.a0(a.a,a.d,b)}}for(b5=q.length,f=0;f<q.length;q.length===b5||(0,H.z)(q),++f){o=q[f].a
k=b3.j(0,o)
if(k==null)k=0
o=b4.a.c8.j(0,o)
C.d.bn(o.a,o.d,k)}}}if(s.dx){b5=b4.a
q=b6.Q
if(q==null){q=b6.db
q=b6.Q=q.gZ(q).dK(0)}b5=b5.id
b5.toString
b5.aj(q.aa(0,!0))}if(s.cy){b4.ez(l,b4.ch)
b5=b4.a
q=b4.ch
b5.he(b5.dv,q)
if(s.r.a){b5=b4.a
q=b4.cx.f
b5=b5.dw
C.d.W(b5.a,b5.d,q.a,q.b,q.c)}b5=s.x.a
if(!b5)q=!1
else q=!0
if(q){q=b4.a
o=b4.cy.ch
q=q.dz
C.d.a0(q.a,q.d,o)}if(b5){b5=b4.a
q=b4.cy.f
b5=b5.dA
C.d.W(b5.a,b5.d,q.a,q.b,q.c)}}b5=s.y.a
q=!b5
if(q)o=!1
else o=!0
if(o){if(b5){b5=b4.a
o=b4.db.f
b5=b5.dB
C.d.a0(b5.a,b5.d,o)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].be(b6)
b5=b7.e
b5.be(b6)
b5.aL(b6)
b5.e4(b6)
if(q)b5=!1
else b5=!0
if(b5)p.disable(3042)
for(j=0;j<l.length;++j)l[j].e4(b6)
b5=b4.a
b5.toString
p.useProgram(null)
b5.x.hU()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cS().b_},
seD:function(a){this.e=H.m(a,"$ia1",[V.an],"$aa1")}}
O.h7.prototype={
$2:function(a,b){H.a_(a)
H.a_(b)
if(typeof b!=="number")return b.n()
return C.a.h(this.b,new A.aw(a,C.e.a_(b+3,4)*4))},
$S:14}
O.h8.prototype={
$2:function(a,b){H.f(a,"$iaw")
H.f(b,"$iaw")
return J.kD(a.a,b.a)},
$S:46}
O.h9.prototype={
$2:function(a,b){H.a_(a)
H.a_(b)
if(typeof b!=="number")return b.n()
return C.a.h(this.b,new A.ay(a,C.e.a_(b+3,4)*4))},
$S:14}
O.ha.prototype={
$2:function(a,b){H.f(a,"$iay")
H.f(b,"$iay")
return J.kD(a.a,b.a)},
$S:47}
O.hb.prototype={
$2:function(a,b){H.a_(a)
H.a_(b)
if(typeof b!=="number")return b.n()
return C.a.h(this.b,new A.az(a,C.e.a_(b+3,4)*4))},
$S:14}
O.hc.prototype={
$2:function(a,b){H.f(a,"$iaz")
H.f(b,"$iaz")
return J.kD(a.a,b.a)},
$S:48}
O.h1.prototype={
aq:function(){var u,t=this
t.cC()
u=t.f
if(!(Math.abs(u-1)<$.P().a)){t.f=1
u=new D.O(t.b,u,1,[P.t])
u.b=!0
t.a.a7(u)}}}
O.dx.prototype={
aq:function(){},
dd:function(a){var u,t,s=this
if(!s.c.q(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aq()
u=s.a
u.a=null
u.a7(null)}}}
O.h2.prototype={}
O.b4.prototype={
dc:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.O(s.b+".color",u,a,[V.a2])
t.b=!0
s.a.a7(t)}},
aq:function(){this.cC()
this.dc(new V.a2(1,1,1))},
saW:function(a,b){this.dd(new A.al(!0,!1,!1))
this.dc(b)}}
O.h4.prototype={}
O.h5.prototype={
aq:function(){var u,t=this
t.cD()
u=t.ch
if(!(Math.abs(u-1)<$.P().a)){t.ch=1
u=new D.O(t.b+".refraction",u,1,[P.t])
u.b=!0
t.a.a7(u)}}}
O.h6.prototype={
de:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.P().a)){u.ch=a
t=new D.O(u.b+".shininess",t,a,[P.t])
t.b=!0
u.a.a7(t)}},
aq:function(){this.cD()
this.de(100)}}
O.c_.prototype={}
T.cF.prototype={}
T.i3.prototype={}
T.i7.prototype={
gw:function(){var u=this.y
return u==null?this.y=D.Q():u}}
T.i8.prototype={
ib:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.lv(a)
t=new T.i7()
t.a=0
t.b=q
t.d=t.c=!1
t.x=t.r=0
r=W.o
W.a6(u,"load",H.n(new T.i9(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
hc:function(a,b,c){var u,t,s,r
b=V.lg(b)
u=V.lg(a.width)
t=V.lg(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kH()
s.width=u
s.height=t
r=H.f(C.i.ea(s,"2d"),"$icj")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oN(r.getImageData(0,0,s.width,s.height))}}}
T.i9.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=u.c,q=s.hc(r,s.b,u.d),p=u.b
p.r=r.width
p.x=r.height
r=s.a
r.bindTexture(t,u.e)
r.pixelStorei(37440,u.f?1:0)
C.d.iH(r,t,0,6408,6408,5121,q)
if(u.r)r.generateMipmap(t)
r.bindTexture(t,null)
if(!p.d){p.d=!0
r=p.y
if(r!=null)r.hX()}++s.e},
$S:16}
T.ia.prototype={
eU:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.c
if(typeof f!=="number")return f.cE()
u=C.e.a_(f,2)
t=this.b
s=this.a
r=s.length
q=t*4
for(;u>=0;--u){p=q*u
o=q*(f-1-u)
for(n=0;n<t;++n){m=4*n
l=p+m
k=o+m
for(j=0;j<4;++j){i=l+j
h=k+j
if(i<0||i>=r)return H.c(s,i)
g=s[i]
if(h<0||h>=r)return H.c(s,h)
s[i]=s[h]
s[h]=g}}}}}
V.f0.prototype={
aK:function(a,b){return!0},
i:function(a){return"all"},
$ibk:1}
V.bk.prototype={}
V.dv.prototype={
aK:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)if(u[s].aK(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sap:function(a){this.a=H.m(a,"$ib",[V.bk],"$ab")},
$ibk:1}
V.bm.prototype={
aK:function(a,b){return!this.eg(0,b)},
i:function(a){return"!["+this.cB(0)+"]"}}
V.hI.prototype={
ej:function(a){var u,t
if(a.a.length<=0)throw H.d(P.C("May not create a SetMatcher with zero characters."))
u=new H.Z([P.l,P.aa])
for(t=new H.dt(a,a.gl(a),[H.aG(a,"v",0)]);t.B();)u.k(0,t.d,!0)
this.shd(u)},
aK:function(a,b){return this.a.bf(0,b)},
i:function(a){var u=this.a
return P.cE(u.gal(u),0,null)},
shd:function(a){this.a=H.m(a,"$ix",[P.l,P.aa],"$ax")},
$ibk:1}
V.cC.prototype={
u:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cH(this.a.M(0,b))
r.sap(H.e([],[V.bk]))
r.c=!1
C.a.h(this.c,r)
return r},
i1:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.aK(0,a))return r}return},
i:function(a){return this.b},
shx:function(a){this.c=H.m(a,"$ib",[V.cH],"$ab")}}
V.dS.prototype={
i:function(a){var u=H.mz(this.b,"\n","\\n"),t=H.mz(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cG.prototype={
i:function(a){return this.b},
sh7:function(a){var u=P.h
this.c=H.m(a,"$ix",[u,u],"$ax")}}
V.id.prototype={
M:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cC(this,b)
u.shx(H.e([],[V.cH]))
u.d=null
this.a.k(0,b,u)}return u},
b7:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cG(a)
u=P.h
t.sh7(new H.Z([u,u]))
this.b.k(0,a,t)}return t},
iM:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.e([],[V.dS]),k=this.c,j=[P.l],i=H.e([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.F(a,s)
q=k.i1(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cE(i,0,m)
throw H.d(P.C("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.e([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cE(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.dS(n==null?o.b:n,p,s)}++s}}},
shn:function(a){this.a=H.m(a,"$ix",[P.h,V.cC],"$ax")},
shq:function(a){this.b=H.m(a,"$ix",[P.h,V.cG],"$ax")}}
V.cH.prototype={
i:function(a){return this.b.b+": "+this.cB(0)}}
X.dc.prototype={$icu:1}
X.fG.prototype={
gw:function(){var u=this.x
return u==null?this.x=D.Q():u}}
X.dE.prototype={
gw:function(){var u=this.f
return u==null?this.f=D.Q():u},
aE:function(a){var u
H.f(a,"$iA")
u=this.f
if(u!=null)u.G(a)},
ew:function(){return this.aE(null)},
sb2:function(a){var u,t,s=this
if(!J.L(s.b,a)){u=s.b
if(u!=null)u.gw().K(0,s.gcI())
t=s.b
s.b=a
if(a!=null)a.gw().h(0,s.gcI())
u=new D.O("mover",t,s.b,[U.a9])
u.b=!0
s.aE(u)}},
$icu:1,
$idc:1}
X.dP.prototype={}
V.kw.prototype={
$1:function(a){var u
H.f(a,"$ib7")
u=C.c.e3(this.a.gi4(),2)
if(u!=="0.00")P.lh(u+" fps")},
$S:50}
V.hy.prototype={
bS:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.iB().gb5().j(0,H.k(u))
if(t==null)if(d){c.$0()
m.aU(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.cg(m.c).h(0,q)
o=W.na("radio")
o.checked=s
o.name=u
u=W.o
W.a6(o,"change",H.n(new V.hz(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.cg(m.c).h(0,r.createElement("br"))},
X:function(a,b,c){return this.bS(a,b,c,!1)},
aU:function(a){var u,t,s=P.iB(),r=P.h,q=P.lz(s.gb5(),r,r)
q.k(0,this.a,a)
u=s.co(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.eC([],[]).bo(""),"",t)}}
V.hz.prototype={
$1:function(a){var u=this
if(H.E(u.b.checked)){u.c.$0()
u.a.aU(u.d)}},
$S:16}
V.hM.prototype={
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
r=W.o
W.a6(q,"scroll",H.n(new V.hO(o),{func:1,ret:-1,args:[r]}),!1,r)},
dj:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.h],"$ab")
this.hh()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.iM(C.a.i9(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
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
if(H.pb(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=H.K(m[1])
l.textContent=H.K(m[0])
t.appendChild(l)}else{k=P.jI(C.O,n,C.h,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.k(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
hA:function(a){var u,t,s,r,q,p,o,n="auto"
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
s=H.f(r.insertCell(-1),"$ibp").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
for(q=0;q<3;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.f(r.insertCell(-1),"$ibp")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
hh:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.id()
t=P.h
u.shn(new H.Z([t,V.cC]))
u.shq(new H.Z([t,V.cG]))
u.c=null
u.c=u.M(0,q)
t=u.M(0,q).u(0,p)
s=V.ah(new H.a5("*"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,p).u(0,p)
s=new V.bm()
r=[V.bk]
s.sap(H.e([],r))
C.a.h(t.a,s)
t=V.ah(new H.a5("*"))
C.a.h(s.a,t)
t=u.M(0,p).u(0,"BoldEnd")
s=V.ah(new H.a5("*"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,q).u(0,o)
s=V.ah(new H.a5("_"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,o).u(0,o)
s=new V.bm()
s.sap(H.e([],r))
C.a.h(t.a,s)
t=V.ah(new H.a5("_"))
C.a.h(s.a,t)
t=u.M(0,o).u(0,n)
s=V.ah(new H.a5("_"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,q).u(0,m)
s=V.ah(new H.a5("`"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,m).u(0,m)
s=new V.bm()
s.sap(H.e([],r))
C.a.h(t.a,s)
t=V.ah(new H.a5("`"))
C.a.h(s.a,t)
t=u.M(0,m).u(0,"CodeEnd")
s=V.ah(new H.a5("`"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,q).u(0,l)
s=V.ah(new H.a5("["))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,l).u(0,k)
s=V.ah(new H.a5("|"))
C.a.h(t.a,s)
s=u.M(0,l).u(0,j)
t=V.ah(new H.a5("]"))
C.a.h(s.a,t)
s.c=!0
s=u.M(0,l).u(0,l)
t=new V.bm()
t.sap(H.e([],r))
C.a.h(s.a,t)
s=V.ah(new H.a5("|]"))
C.a.h(t.a,s)
s=u.M(0,k).u(0,j)
t=V.ah(new H.a5("]"))
C.a.h(s.a,t)
s.c=!0
s=u.M(0,k).u(0,k)
t=new V.bm()
t.sap(H.e([],r))
C.a.h(s.a,t)
s=V.ah(new H.a5("|]"))
C.a.h(t.a,s)
C.a.h(u.M(0,q).u(0,i).a,new V.f0())
s=u.M(0,i).u(0,i)
t=new V.bm()
t.sap(H.e([],r))
C.a.h(s.a,t)
s=V.ah(new H.a5("*_`["))
C.a.h(t.a,s)
s=u.M(0,"BoldEnd")
s.d=s.a.b7(p)
s=u.M(0,n)
s.d=s.a.b7(o)
s=u.M(0,"CodeEnd")
s.d=s.a.b7(m)
s=u.M(0,j)
s.d=s.a.b7("Link")
s=u.M(0,i)
s.d=s.a.b7(i)
this.b=u}}
V.hO.prototype={
$1:function(a){P.lP(C.o,new V.hN(this.a))},
$S:16}
V.hN.prototype={
$0:function(){var u=C.c.ag(document.documentElement.scrollTop),t=this.a.style,s=H.k(-0.01*u)+"px"
t.top=s},
$S:0}
V.i4.prototype={
X:function(a,b,c){var u,t,s,r,q=this,p=W.lv(null)
p.src=b
p.height=p.width=64
u=p.style
u.border="solid 2px white"
u=J.cg(q.c)
t=u.gl(u)
u=W.a4
W.a6(p,"click",H.n(new V.i6(q,p,b,t),{func:1,ret:-1,args:[u]}),!1,u)
J.cg(q.c).h(0,p)
J.cg(q.c).h(0,document.createElement("br"))
s=P.iB().gb5().j(0,H.k(q.a))
if(s==null){q.aU(t)
r=c}else r=P.d1(s,null,null)===t
if(r)p.click()},
h:function(a,b){return this.X(a,b,!1)},
aU:function(a){var u,t,s=P.iB(),r=P.h,q=P.lz(s.gb5(),r,r)
q.k(0,this.a,""+a)
u=s.co(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.eC([],[]).bo(""),"",t)}}
V.i6.prototype={
$1:function(a){var u,t,s=this
H.f(a,"$ia4")
u=s.a
t=J.cg(u.c)
t.D(t,new V.i5())
t=s.b.style
t.border="solid 2px black"
u.d.$1(s.c)
u.aU(s.d)},
$S:51}
V.i5.prototype={
$1:function(a){var u
H.f(a,"$iV")
if(!!J.S(a).$ibS){u=a.style
u.border="solid 2px white"}},
$S:52}
K.kc.prototype={
$0:function(){var u,t,s,r=this.a
if(r.a!=null&&r.b.length!==0){u=this.b
t=u.f.ib(r.b)
s=t.y
if(s==null)s=t.y=D.Q()
s.h(0,new K.kb(r,u,t,this.c))}},
$S:0}
K.kb.prototype={
$1:function(a){var u,t,s,r,q,p,o,n,m=this
H.f(a,"$iA")
u=m.c
t=m.b.f.a
s=u.r
r=u.x
if(typeof r!=="number")return r.p()
q=r-r-0
t.bindFramebuffer(36160,t.createFramebuffer())
t.readBuffer(36064)
t.framebufferTexture2D(36160,36064,3553,u.b,0)
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.p(r)
p=new Uint8Array(s*r*4)
t.readPixels(0,q,s,r,6408,5121,p)
t.bindFramebuffer(36160,null)
o=new T.ia(p,s,r)
o.eU()
u=m.a
t=u.a
n=F.kT()
n.bi(t)
n.a2()
n.hE(o,u.c)
u=$.aU()
u.toString
n.iO(new Z.bq($.lj().a&~u.a))
n.iN(!1)
n.a2()
m.d.scz(0,n)},
$S:6}
K.kd.prototype={
$1:function(a){this.a.b=a
this.b.$0()},
$S:20}
K.ke.prototype={
$1:function(a){this.a.a=a
this.b.$0()},
$S:53}
K.km.prototype={
$0:function(){this.a.$1(F.ml(50,null,50))},
$S:0}
K.kn.prototype={
$0:function(){this.a.$1(F.oO(!1,!1,80,80))},
$S:0}
K.ko.prototype={
$0:function(){this.a.$1(F.p2(80,80))},
$S:0}
K.kp.prototype={
$0:function(){this.a.$1(F.pa(50,50))},
$S:0}
K.kq.prototype={
$0:function(){this.a.$1(F.pe(50,50))},
$S:0}
K.kr.prototype={
$0:function(){this.a.$1(F.ld(50,50))},
$S:0}
K.ks.prototype={
$0:function(){this.a.$1(F.ld(100,100))},
$S:0}
K.kt.prototype={
$0:function(){this.a.$1(F.ld(150,150))},
$S:0}
K.kf.prototype={
$1:function(a){this.a.c=a
this.b.$0()},
$S:54}
K.kg.prototype={
$0:function(){this.a.$1(0.1)},
$S:0}
K.kh.prototype={
$0:function(){this.a.$1(0.2)},
$S:0}
K.ki.prototype={
$0:function(){this.a.$1(0.4)},
$S:0}
K.kj.prototype={
$0:function(){this.a.$1(0.6)},
$S:0}
K.kk.prototype={
$0:function(){this.a.$1(0.8)},
$S:0}
K.kl.prototype={
$0:function(){this.a.$1(1)},
$S:0};(function aliases(){var u=J.a.prototype
u.ee=u.i
u=J.dq.prototype
u.ef=u.i
u=O.dx.prototype
u.cC=u.aq
u=O.b4.prototype
u.cD=u.aq
u=V.dv.prototype
u.eg=u.aK
u.cB=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"oH","nU",12)
u(P,"oI","nV",12)
u(P,"oJ","nW",12)
t(P,"mj","oF",3)
var n
s(n=E.am.prototype,"gdR",0,0,null,["$1","$0"],["dS","io"],1,0)
s(n,"gdT",0,0,null,["$1","$0"],["dU","ip"],1,0)
s(n,"gdP",0,0,null,["$1","$0"],["dQ","im"],1,0)
s(n,"gdN",0,0,null,["$1","$0"],["dO","ij"],1,0)
r(n,"gih","ii",9)
r(n,"gik","il",9)
s(n=E.dR.prototype,"gcF",0,0,null,["$1","$0"],["cH","cG"],1,0)
q(n,"giD","e_",3)
p(n=X.dY.prototype,"gft","fu",15)
p(n,"gfe","ff",15)
p(n,"gfm","fn",5)
p(n,"gfz","fA",24)
p(n,"gfv","fw",24)
p(n,"gfD","fE",5)
p(n,"gfH","fI",5)
p(n,"gfq","fs",5)
p(n,"gfF","fG",5)
p(n,"gfo","fp",5)
p(n,"gfJ","fK",33)
p(n,"gfL","fM",15)
p(n,"gfY","fZ",13)
p(n,"gfU","fV",13)
p(n,"gfW","fX",13)
s(D.bx.prototype,"geo",0,0,null,["$1","$0"],["an","ep"],1,0)
s(n=D.ds.prototype,"gd4",0,0,null,["$1","$0"],["d5","fB"],1,0)
p(n,"gfO","fP",35)
r(n,"gf8","f9",27)
r(n,"gfS","fT",27)
o(V.R.prototype,"gl","cd",21)
o(V.I.prototype,"gl","cd",21)
s(n=U.cp.prototype,"gaB",0,0,null,["$1","$0"],["N","a1"],1,0)
r(n,"gf6","f7",19)
r(n,"gfQ","fR",19)
s(n=U.dZ.prototype,"gaB",0,0,null,["$1","$0"],["N","a1"],1,0)
p(n,"gbB","bC",2)
p(n,"gbD","bE",2)
p(n,"gbF","bG",2)
s(n=U.e_.prototype,"gaB",0,0,null,["$1","$0"],["N","a1"],1,0)
p(n,"gbB","bC",2)
p(n,"gbD","bE",2)
p(n,"gbF","bG",2)
p(n,"gf0","f1",2)
p(n,"gf2","f3",2)
p(n,"ghv","hw",2)
p(n,"ght","hu",2)
p(n,"ghr","hs",2)
p(U.e0.prototype,"gf4","f5",2)
s(n=M.di.prototype,"gaC",0,0,null,["$1","$0"],["aD","eq"],1,0)
r(n,"gfi","fj",9)
r(n,"gfk","fl",9)
s(n=O.dw.prototype,"gfg",0,0,null,["$1","$0"],["a7","fh"],1,0)
s(n,"gha",0,0,null,["$1","$0"],["d9","hb"],1,0)
r(n,"gfa","fb",18)
r(n,"gfc","fd",18)
s(X.dE.prototype,"gcI",0,0,null,["$1","$0"],["aE","ew"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.M,null)
s(P.M,[H.kO,J.a,J.ap,P.eh,P.j,H.dt,P.b1,H.bQ,H.cK,H.fh,H.ij,P.by,H.ck,H.ey,P.af,H.fP,H.fR,H.fK,P.eF,P.bb,P.aE,P.e2,P.hW,P.cD,P.hX,P.b7,P.ak,P.jL,P.jv,P.cO,P.jp,P.v,P.jD,P.fY,P.bN,P.jK,P.jJ,P.aa,P.at,P.a7,P.b0,P.ht,P.dN,P.ea,P.fF,P.b,P.x,P.G,P.aq,P.h,P.ai,P.c5,P.iz,P.jw,W.fk,W.D,W.dl,P.jy,P.eK,P.jq,P.N,O.a1,O.cr,E.fb,E.am,E.hA,E.dR,Z.e1,Z.iY,Z.da,Z.bz,Z.bq,D.fe,D.bP,D.A,X.db,X.dr,X.fM,X.fV,X.au,X.hj,X.ie,X.dY,D.bx,D.ab,D.dF,D.dM,V.a2,V.aY,V.fw,V.dy,V.an,V.ac,V.a0,V.bn,V.dJ,V.R,V.I,U.dZ,U.e_,U.e0,M.di,A.d7,A.f4,A.al,A.aw,A.ay,A.az,A.h3,A.c0,A.c1,A.c4,A.dU,A.it,F.a8,F.fz,F.bj,F.fO,F.bC,F.bZ,F.hJ,F.hK,F.hL,F.ao,F.iM,F.iN,F.iQ,F.iS,F.iT,F.iU,O.c_,O.dx,O.h4,T.i8,T.ia,V.f0,V.bk,V.dv,V.hI,V.cC,V.dS,V.cG,V.id,X.dc,X.dP,X.dE,V.hy,V.hM,V.i4])
s(J.a,[J.fJ,J.dp,J.dq,J.aK,J.bA,J.bh,H.cv,H.bB,W.i,W.f_,W.bL,W.cj,W.aZ,W.b_,W.T,W.e4,W.fo,W.fp,W.e6,W.dh,W.e8,W.fr,W.o,W.eb,W.aJ,W.fH,W.ed,W.bg,W.fU,W.hd,W.ei,W.ej,W.aL,W.ek,W.en,W.aM,W.er,W.et,W.aO,W.eu,W.aP,W.ez,W.aA,W.eD,W.ic,W.aR,W.eG,W.ih,W.iF,W.eM,W.eO,W.eQ,W.eS,W.eU,P.b3,P.ef,P.b6,P.ep,P.hx,P.eA,P.b8,P.eI,P.f5,P.e3,P.d8,P.dH,P.bY,P.dK,P.dQ,P.dV,P.ew])
s(J.dq,[J.hu,J.bF,J.bi])
t(J.kN,J.aK)
s(J.bA,[J.dn,J.dm])
t(P.fT,P.eh)
s(P.fT,[H.dW,W.j6,W.j5,P.fB])
t(H.a5,H.dW)
s(P.j,[H.fu,H.fZ,H.iZ])
s(P.b1,[H.h_,H.j_])
t(H.fi,H.fh)
s(P.by,[H.hq,H.fL,H.ix,H.il,H.fd,H.hG,P.f3,P.dD,P.aW,P.iy,P.iv,P.dO,P.fg,P.fn])
s(H.ck,[H.kB,H.i0,H.k5,H.k6,H.k7,P.j2,P.j1,P.j3,P.j4,P.jC,P.jB,P.jc,P.jg,P.jd,P.je,P.jf,P.jj,P.jk,P.ji,P.jh,P.hY,P.hZ,P.jV,P.jt,P.js,P.ju,P.fS,P.fX,P.fs,P.ft,P.iE,P.iA,P.iC,P.iD,P.jE,P.jF,P.jH,P.jG,P.jP,P.jO,P.jQ,P.jR,W.hf,W.hh,W.hF,W.hV,W.jb,P.jz,P.jX,P.fC,P.fD,P.f7,E.hB,E.hC,E.hD,E.ib,D.fx,D.fy,F.jM,F.jY,F.k_,F.k9,F.kx,F.ky,F.kA,F.jZ,F.k2,F.k3,F.iW,F.iV,F.iO,F.iP,O.h7,O.h8,O.h9,O.ha,O.hb,O.hc,T.i9,V.kw,V.hz,V.hO,V.hN,V.i6,V.i5,K.kc,K.kb,K.kd,K.ke,K.km,K.kn,K.ko,K.kp,K.kq,K.kr,K.ks,K.kt,K.kf,K.kg,K.kh,K.ki,K.kj,K.kk,K.kl])
s(H.i0,[H.hT,H.ch])
t(H.j0,P.f3)
t(P.fW,P.af)
t(H.Z,P.fW)
t(H.fQ,H.fu)
t(H.dA,H.bB)
s(H.dA,[H.cP,H.cR])
t(H.cQ,H.cP)
t(H.cw,H.cQ)
t(H.cS,H.cR)
t(H.dB,H.cS)
s(H.dB,[H.hk,H.hl,H.hm,H.hn,H.ho,H.dC,H.cx])
t(P.jr,P.jL)
t(P.jo,P.jv)
t(P.eL,P.fY)
t(P.dX,P.eL)
s(P.bN,[P.f9,P.fv])
t(P.bO,P.hX)
s(P.bO,[P.fa,P.iI,P.iH])
t(P.iG,P.fv)
s(P.a7,[P.t,P.l])
s(P.aW,[P.bX,P.fI])
t(P.j8,P.c5)
s(W.i,[W.H,W.fA,W.cs,W.aN,W.cT,W.aQ,W.aB,W.cV,W.iX,W.cM,P.f8,P.bK])
s(W.H,[W.V,W.bv])
s(W.V,[W.r,P.q])
s(W.r,[W.f1,W.f2,W.bM,W.df,W.fE,W.bS,W.cq,W.hH,W.bp])
s(W.aZ,[W.cl,W.fl,W.fm])
t(W.fj,W.b_)
t(W.cm,W.e4)
t(W.e7,W.e6)
t(W.dg,W.e7)
t(W.e9,W.e8)
t(W.fq,W.e9)
t(W.ax,W.bL)
t(W.ec,W.eb)
t(W.cn,W.ec)
t(W.ee,W.ed)
t(W.bR,W.ee)
t(W.bE,W.o)
s(W.bE,[W.b2,W.a4,W.aS])
t(W.he,W.ei)
t(W.hg,W.ej)
t(W.el,W.ek)
t(W.hi,W.el)
t(W.eo,W.en)
t(W.cy,W.eo)
t(W.es,W.er)
t(W.hv,W.es)
t(W.hE,W.et)
t(W.cU,W.cT)
t(W.hQ,W.cU)
t(W.ev,W.eu)
t(W.hR,W.ev)
t(W.hU,W.ez)
t(W.eE,W.eD)
t(W.i1,W.eE)
t(W.cW,W.cV)
t(W.i2,W.cW)
t(W.eH,W.eG)
t(W.ig,W.eH)
t(W.ba,W.a4)
t(W.eN,W.eM)
t(W.j7,W.eN)
t(W.e5,W.dh)
t(W.eP,W.eO)
t(W.jl,W.eP)
t(W.eR,W.eQ)
t(W.em,W.eR)
t(W.eT,W.eS)
t(W.jx,W.eT)
t(W.eV,W.eU)
t(W.jA,W.eV)
t(W.j9,P.hW)
t(W.l0,W.j9)
t(W.ja,P.cD)
t(P.eC,P.jy)
t(P.ag,P.jq)
t(P.eg,P.ef)
t(P.fN,P.eg)
t(P.eq,P.ep)
t(P.hr,P.eq)
t(P.eB,P.eA)
t(P.i_,P.eB)
t(P.eJ,P.eI)
t(P.ii,P.eJ)
t(P.f6,P.e3)
t(P.hs,P.bK)
t(P.ex,P.ew)
t(P.hS,P.ex)
s(E.fb,[Z.d9,A.cB,T.cF])
s(D.A,[D.bT,D.bU,D.O,X.hw])
s(X.hw,[X.du,X.bl,X.ct,X.dT])
s(O.a1,[D.ds,U.cp])
s(D.fe,[U.ff,U.a9])
t(U.dd,U.a9)
t(A.h0,A.cB)
s(A.dU,[A.aC,A.iq,A.ir,A.is,A.io,A.ae,A.ip,A.X,A.cI,A.iu,A.cJ,A.av,A.c2,A.c3])
t(F.hP,F.fz)
t(F.im,F.fO)
t(F.iR,F.iS)
t(F.hp,F.iT)
t(O.dw,O.c_)
s(O.dx,[O.h1,O.h2,O.b4])
s(O.b4,[O.h5,O.h6])
t(T.i3,T.cF)
t(T.i7,T.i3)
s(V.dv,[V.bm,V.cH])
t(X.fG,X.dP)
u(H.dW,H.cK)
u(H.cP,P.v)
u(H.cQ,H.bQ)
u(H.cR,P.v)
u(H.cS,H.bQ)
u(P.eh,P.v)
u(P.eL,P.jD)
u(W.e4,W.fk)
u(W.e6,P.v)
u(W.e7,W.D)
u(W.e8,P.v)
u(W.e9,W.D)
u(W.eb,P.v)
u(W.ec,W.D)
u(W.ed,P.v)
u(W.ee,W.D)
u(W.ei,P.af)
u(W.ej,P.af)
u(W.ek,P.v)
u(W.el,W.D)
u(W.en,P.v)
u(W.eo,W.D)
u(W.er,P.v)
u(W.es,W.D)
u(W.et,P.af)
u(W.cT,P.v)
u(W.cU,W.D)
u(W.eu,P.v)
u(W.ev,W.D)
u(W.ez,P.af)
u(W.eD,P.v)
u(W.eE,W.D)
u(W.cV,P.v)
u(W.cW,W.D)
u(W.eG,P.v)
u(W.eH,W.D)
u(W.eM,P.v)
u(W.eN,W.D)
u(W.eO,P.v)
u(W.eP,W.D)
u(W.eQ,P.v)
u(W.eR,W.D)
u(W.eS,P.v)
u(W.eT,W.D)
u(W.eU,P.v)
u(W.eV,W.D)
u(P.ef,P.v)
u(P.eg,W.D)
u(P.ep,P.v)
u(P.eq,W.D)
u(P.eA,P.v)
u(P.eB,W.D)
u(P.eI,P.v)
u(P.eJ,W.D)
u(P.e3,P.af)
u(P.ew,P.v)
u(P.ex,W.D)})();(function constants(){var u=hunkHelpers.makeConstList
C.i=W.bM.prototype
C.J=J.a.prototype
C.a=J.aK.prototype
C.K=J.dm.prototype
C.e=J.dn.prototype
C.j=J.dp.prototype
C.c=J.bA.prototype
C.b=J.bh.prototype
C.L=J.bi.prototype
C.R=W.cy.prototype
C.w=J.hu.prototype
C.d=P.bY.prototype
C.p=J.bF.prototype
C.x=W.ba.prototype
C.y=W.cM.prototype
C.S=new P.fa()
C.z=new P.f9()
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.A=function() {
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
C.F=function(getTagFallback) {
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
C.B=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.C=function(hooks) {
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
C.E=function(hooks) {
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
C.D=function(hooks) {
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
C.r=function(hooks) { return hooks; }

C.G=new P.ht()
C.h=new P.iG()
C.H=new P.iI()
C.f=new P.jr()
C.o=new P.b0(0)
C.I=new P.b0(5e6)
C.t=H.e(u([127,2047,65535,1114111]),[P.l])
C.k=H.e(u([0,0,32776,33792,1,10240,0,0]),[P.l])
C.l=H.e(u([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.m=H.e(u([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.N=H.e(u([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.O=H.e(u([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.n=H.e(u([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.u=H.e(u([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.P=H.e(u([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.v=H.e(u([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.M=H.e(u([]),[P.h])
C.Q=new H.fi(0,{},C.M,[P.h,P.h])})()
var v={mangledGlobalNames:{l:"int",t:"double",a7:"num",h:"String",aa:"bool",G:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.G},{func:1,ret:-1,opt:[D.A]},{func:1,ret:-1,args:[D.A]},{func:1,ret:-1},{func:1,ret:P.G,args:[F.ao,P.t,P.t]},{func:1,ret:-1,args:[W.a4]},{func:1,ret:P.G,args:[D.A]},{func:1,ret:P.G,args:[,,]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[P.l,[P.j,E.am]]},{func:1,ret:P.G,args:[F.a8]},{func:1,ret:P.t,args:[P.t,P.t]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aS]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:-1,args:[W.o]},{func:1,ret:P.G,args:[W.o]},{func:1,ret:P.h,args:[P.l]},{func:1,ret:-1,args:[P.l,[P.j,V.an]]},{func:1,ret:-1,args:[P.l,[P.j,U.a9]]},{func:1,ret:P.G,args:[P.h]},{func:1,ret:P.t},{func:1,ret:-1,args:[P.h,P.h]},{func:1,args:[,]},{func:1,ret:-1,args:[W.b2]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:P.G,args:[,]},{func:1,ret:-1,args:[P.l,[P.j,D.ab]]},{func:1,ret:P.G,args:[P.a7]},{func:1,ret:W.V,args:[W.H]},{func:1,ret:P.aa,args:[W.H]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,args:[W.o]},{func:1,ret:-1,args:[W.ba]},{func:1,ret:P.N,args:[,,]},{func:1,ret:P.aa,args:[[P.j,D.ab]]},{func:1,ret:P.N,args:[P.l]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,args:[,P.h]},{func:1,args:[P.h]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:V.a0,args:[P.t]},{func:1,ret:-1,args:[P.h,P.l]},{func:1,ret:[P.x,P.h,P.h],args:[[P.x,P.h,P.h],P.h]},{func:1,ret:[P.aE,,],args:[,]},{func:1,ret:P.l,args:[A.aw,A.aw]},{func:1,ret:P.l,args:[A.ay,A.ay]},{func:1,ret:P.l,args:[A.az,A.az]},{func:1,ret:P.G,args:[,],opt:[P.aq]},{func:1,ret:P.G,args:[P.b7]},{func:1,ret:P.G,args:[W.a4]},{func:1,ret:P.G,args:[W.V]},{func:1,ret:P.G,args:[F.bZ]},{func:1,ret:P.G,args:[P.t]},{func:1,ret:P.G,args:[P.h,,]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aX=0
$.ci=null
$.lp=null
$.l4=!1
$.mq=null
$.mh=null
$.mx=null
$.k0=null
$.k8=null
$.le=null
$.c7=null
$.d_=null
$.d0=null
$.l5=!1
$.Y=C.f
$.ar=[]
$.lB=null
$.lF=null
$.cz=null
$.lL=null
$.lV=null
$.lY=null
$.lX=null
$.iJ=null
$.iK=null
$.iL=null
$.lW=null
$.lE=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pk","mC",function(){return H.mp("_$dart_dartClosure")})
u($,"pl","li",function(){return H.mp("_$dart_js")})
u($,"pq","mD",function(){return H.b9(H.ik({
toString:function(){return"$receiver$"}}))})
u($,"pr","mE",function(){return H.b9(H.ik({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"ps","mF",function(){return H.b9(H.ik(null))})
u($,"pt","mG",function(){return H.b9(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pw","mJ",function(){return H.b9(H.ik(void 0))})
u($,"px","mK",function(){return H.b9(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pv","mI",function(){return H.b9(H.lR(null))})
u($,"pu","mH",function(){return H.b9(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pz","mM",function(){return H.b9(H.lR(void 0))})
u($,"py","mL",function(){return H.b9(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pP","ll",function(){return P.nT()})
u($,"pB","mN",function(){return P.nP()})
u($,"pQ","mP",function(){return H.nn(H.c6(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"pR","mQ",function(){return P.nB("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pS","mR",function(){return P.oe()})
u($,"pI","mO",function(){return Z.aD(0)})
u($,"pC","lj",function(){return Z.aD(511)})
u($,"pK","bf",function(){return Z.aD(1)})
u($,"pJ","aU",function(){return Z.aD(2)})
u($,"pE","be",function(){return Z.aD(4)})
u($,"pL","bt",function(){return Z.aD(8)})
u($,"pM","bu",function(){return Z.aD(16)})
u($,"pF","d2",function(){return Z.aD(32)})
u($,"pG","d3",function(){return Z.aD(64)})
u($,"pH","lk",function(){return Z.aD(96)})
u($,"pN","bI",function(){return Z.aD(128)})
u($,"pD","bd",function(){return Z.aD(256)})
u($,"pj","mB",function(){return new V.fw(1e-9)})
u($,"pi","P",function(){return $.mB()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cv,DataView:H.bB,ArrayBufferView:H.bB,Float32Array:H.cw,Float64Array:H.cw,Int16Array:H.hk,Int32Array:H.hl,Int8Array:H.hm,Uint16Array:H.hn,Uint32Array:H.ho,Uint8ClampedArray:H.dC,CanvasPixelArray:H.dC,Uint8Array:H.cx,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLBaseElement:W.r,HTMLBodyElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableColElement:W.r,HTMLTableElement:W.r,HTMLTableRowElement:W.r,HTMLTableSectionElement:W.r,HTMLTemplateElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.f_,HTMLAnchorElement:W.f1,HTMLAreaElement:W.f2,Blob:W.bL,HTMLCanvasElement:W.bM,CanvasRenderingContext2D:W.cj,CDATASection:W.bv,CharacterData:W.bv,Comment:W.bv,ProcessingInstruction:W.bv,Text:W.bv,CSSNumericValue:W.cl,CSSUnitValue:W.cl,CSSPerspective:W.fj,CSSCharsetRule:W.T,CSSConditionRule:W.T,CSSFontFaceRule:W.T,CSSGroupingRule:W.T,CSSImportRule:W.T,CSSKeyframeRule:W.T,MozCSSKeyframeRule:W.T,WebKitCSSKeyframeRule:W.T,CSSKeyframesRule:W.T,MozCSSKeyframesRule:W.T,WebKitCSSKeyframesRule:W.T,CSSMediaRule:W.T,CSSNamespaceRule:W.T,CSSPageRule:W.T,CSSRule:W.T,CSSStyleRule:W.T,CSSSupportsRule:W.T,CSSViewportRule:W.T,CSSStyleDeclaration:W.cm,MSStyleCSSProperties:W.cm,CSS2Properties:W.cm,CSSImageValue:W.aZ,CSSKeywordValue:W.aZ,CSSPositionValue:W.aZ,CSSResourceValue:W.aZ,CSSURLImageValue:W.aZ,CSSStyleValue:W.aZ,CSSMatrixComponent:W.b_,CSSRotation:W.b_,CSSScale:W.b_,CSSSkew:W.b_,CSSTranslation:W.b_,CSSTransformComponent:W.b_,CSSTransformValue:W.fl,CSSUnparsedValue:W.fm,DataTransferItemList:W.fo,HTMLDivElement:W.df,DOMException:W.fp,ClientRectList:W.dg,DOMRectList:W.dg,DOMRectReadOnly:W.dh,DOMStringList:W.fq,DOMTokenList:W.fr,Element:W.V,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.i,Accelerometer:W.i,AccessibleNode:W.i,AmbientLightSensor:W.i,Animation:W.i,ApplicationCache:W.i,DOMApplicationCache:W.i,OfflineResourceList:W.i,BackgroundFetchRegistration:W.i,BatteryManager:W.i,BroadcastChannel:W.i,CanvasCaptureMediaStreamTrack:W.i,DedicatedWorkerGlobalScope:W.i,EventSource:W.i,FileReader:W.i,FontFaceSet:W.i,Gyroscope:W.i,XMLHttpRequest:W.i,XMLHttpRequestEventTarget:W.i,XMLHttpRequestUpload:W.i,LinearAccelerationSensor:W.i,Magnetometer:W.i,MediaDevices:W.i,MediaKeySession:W.i,MediaQueryList:W.i,MediaRecorder:W.i,MediaSource:W.i,MediaStream:W.i,MediaStreamTrack:W.i,MIDIAccess:W.i,MIDIInput:W.i,MIDIOutput:W.i,MIDIPort:W.i,NetworkInformation:W.i,Notification:W.i,OffscreenCanvas:W.i,OrientationSensor:W.i,PaymentRequest:W.i,Performance:W.i,PermissionStatus:W.i,PresentationAvailability:W.i,PresentationConnection:W.i,PresentationConnectionList:W.i,PresentationRequest:W.i,RelativeOrientationSensor:W.i,RemotePlayback:W.i,RTCDataChannel:W.i,DataChannel:W.i,RTCDTMFSender:W.i,RTCPeerConnection:W.i,webkitRTCPeerConnection:W.i,mozRTCPeerConnection:W.i,ScreenOrientation:W.i,Sensor:W.i,ServiceWorker:W.i,ServiceWorkerContainer:W.i,ServiceWorkerGlobalScope:W.i,ServiceWorkerRegistration:W.i,SharedWorker:W.i,SharedWorkerGlobalScope:W.i,SpeechRecognition:W.i,SpeechSynthesis:W.i,SpeechSynthesisUtterance:W.i,VR:W.i,VRDevice:W.i,VRDisplay:W.i,VRSession:W.i,VisualViewport:W.i,WebSocket:W.i,Worker:W.i,WorkerGlobalScope:W.i,WorkerPerformance:W.i,BluetoothDevice:W.i,BluetoothRemoteGATTCharacteristic:W.i,Clipboard:W.i,MojoInterfaceInterceptor:W.i,USB:W.i,IDBDatabase:W.i,IDBOpenDBRequest:W.i,IDBVersionChangeRequest:W.i,IDBRequest:W.i,IDBTransaction:W.i,AnalyserNode:W.i,RealtimeAnalyserNode:W.i,AudioBufferSourceNode:W.i,AudioDestinationNode:W.i,AudioNode:W.i,AudioScheduledSourceNode:W.i,AudioWorkletNode:W.i,BiquadFilterNode:W.i,ChannelMergerNode:W.i,AudioChannelMerger:W.i,ChannelSplitterNode:W.i,AudioChannelSplitter:W.i,ConstantSourceNode:W.i,ConvolverNode:W.i,DelayNode:W.i,DynamicsCompressorNode:W.i,GainNode:W.i,AudioGainNode:W.i,IIRFilterNode:W.i,MediaElementAudioSourceNode:W.i,MediaStreamAudioDestinationNode:W.i,MediaStreamAudioSourceNode:W.i,OscillatorNode:W.i,Oscillator:W.i,PannerNode:W.i,AudioPannerNode:W.i,webkitAudioPannerNode:W.i,ScriptProcessorNode:W.i,JavaScriptAudioNode:W.i,StereoPannerNode:W.i,WaveShaperNode:W.i,EventTarget:W.i,File:W.ax,FileList:W.cn,FileWriter:W.fA,HTMLFormElement:W.fE,Gamepad:W.aJ,History:W.fH,HTMLCollection:W.bR,HTMLFormControlsCollection:W.bR,HTMLOptionsCollection:W.bR,ImageData:W.bg,HTMLImageElement:W.bS,HTMLInputElement:W.cq,KeyboardEvent:W.b2,Location:W.fU,MediaList:W.hd,MessagePort:W.cs,MIDIInputMap:W.he,MIDIOutputMap:W.hg,MimeType:W.aL,MimeTypeArray:W.hi,PointerEvent:W.a4,MouseEvent:W.a4,DragEvent:W.a4,Document:W.H,DocumentFragment:W.H,HTMLDocument:W.H,ShadowRoot:W.H,XMLDocument:W.H,Attr:W.H,DocumentType:W.H,Node:W.H,NodeList:W.cy,RadioNodeList:W.cy,Plugin:W.aM,PluginArray:W.hv,RTCStatsReport:W.hE,HTMLSelectElement:W.hH,SourceBuffer:W.aN,SourceBufferList:W.hQ,SpeechGrammar:W.aO,SpeechGrammarList:W.hR,SpeechRecognitionResult:W.aP,Storage:W.hU,CSSStyleSheet:W.aA,StyleSheet:W.aA,HTMLTableCellElement:W.bp,HTMLTableDataCellElement:W.bp,HTMLTableHeaderCellElement:W.bp,TextTrack:W.aQ,TextTrackCue:W.aB,VTTCue:W.aB,TextTrackCueList:W.i1,TextTrackList:W.i2,TimeRanges:W.ic,Touch:W.aR,TouchEvent:W.aS,TouchList:W.ig,TrackDefaultList:W.ih,CompositionEvent:W.bE,FocusEvent:W.bE,TextEvent:W.bE,UIEvent:W.bE,URL:W.iF,VideoTrackList:W.iX,WheelEvent:W.ba,Window:W.cM,DOMWindow:W.cM,CSSRuleList:W.j7,ClientRect:W.e5,DOMRect:W.e5,GamepadList:W.jl,NamedNodeMap:W.em,MozNamedAttrMap:W.em,SpeechRecognitionResultList:W.jx,StyleSheetList:W.jA,SVGLength:P.b3,SVGLengthList:P.fN,SVGNumber:P.b6,SVGNumberList:P.hr,SVGPointList:P.hx,SVGStringList:P.i_,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGScriptElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGTransform:P.b8,SVGTransformList:P.ii,AudioBuffer:P.f5,AudioParamMap:P.f6,AudioTrackList:P.f8,AudioContext:P.bK,webkitAudioContext:P.bK,BaseAudioContext:P.bK,OfflineAudioContext:P.hs,WebGLBuffer:P.d8,WebGLProgram:P.dH,WebGL2RenderingContext:P.bY,WebGLShader:P.dK,WebGLTexture:P.dQ,WebGLUniformLocation:P.dV,SQLResultSetRowList:P.hS})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dA.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
H.cS.$nativeSuperclassTag="ArrayBufferView"
H.dB.$nativeSuperclassTag="ArrayBufferView"
W.cT.$nativeSuperclassTag="EventTarget"
W.cU.$nativeSuperclassTag="EventTarget"
W.cV.$nativeSuperclassTag="EventTarget"
W.cW.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.mt,[])
else K.mt([])})})()
//# sourceMappingURL=test.dart.js.map
