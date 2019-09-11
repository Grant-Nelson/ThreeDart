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
a[c]=function(){a[c]=function(){H.oW(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kV(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kz:function kz(){},
jY:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
lb:function(){return new P.dK("No element")},
mZ:function(){return new P.dK("Too few elements")},
dH:function(a,b,c,d,e){H.m(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.l,args:[e,e]})
if(c-b<=32)H.nt(a,b,c,d,e)
else H.ns(a,b,c,d,e)},
nt:function(a,b,c,d,e){var u,t,s,r,q
H.m(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.l,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.c(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.c(a,r)
r=J.aX(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.c(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
ns:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.m(a2,"$ib",[a6],"$ab")
H.n(a5,{func:1,ret:P.l,args:[a6,a6]})
u=C.e.a1(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.e.a1(a3+a4,2)
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
if(J.aX(a5.$2(n,m),0)){i=m
m=n
n=i}if(J.aX(a5.$2(k,j),0)){i=j
j=k
k=i}if(J.aX(a5.$2(n,l),0)){i=l
l=n
n=i}if(J.aX(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.aX(a5.$2(n,k),0)){i=k
k=n
n=i}if(J.aX(a5.$2(l,k),0)){i=k
k=l
l=i}if(J.aX(a5.$2(m,j),0)){i=j
j=m
m=i}if(J.aX(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.aX(a5.$2(k,j),0)){i=j
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
if(J.O(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.c(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.N()
if(d<0){if(f!==h){if(h>=a2.length)return H.c(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.c(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.aa()
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
if(typeof a0!=="number")return a0.N()
if(a0<0){if(f!==h){if(h>=a2.length)return H.c(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else{a1=a5.$2(e,k)
if(typeof a1!=="number")return a1.aa()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.c(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.aa()
if(d>0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.c(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.N()
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
H.dH(a2,a3,h-2,a5,a6)
H.dH(a2,g+2,a4,a5,a6)
if(a)return
if(h<t&&g>s){while(!0){if(h>=a2.length)return H.c(a2,h)
if(!J.O(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.c(a2,g)
if(!J.O(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.c(a2,f)
e=a2[f]
if(a5.$2(e,m)===0){if(f!==h){if(h>=a2.length)return H.c(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else if(a5.$2(e,k)===0)for(;!0;){if(g<0||g>=a2.length)return H.c(a2,g)
if(a5.$2(a2[g],k)===0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.c(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.N()
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
break}}}H.dH(a2,h,g,a5,a6)}else H.dH(a2,h,g,a5,a6)},
a4:function a4(a){this.a=a},
fr:function fr(){},
dp:function dp(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fX:function fX(a,b,c){this.a=a
this.b=b
this.$ti=c},
fY:function fY(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
iP:function iP(a,b,c){this.a=a
this.b=b
this.$ti=c},
iQ:function iQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
bQ:function bQ(){},
cK:function cK(){},
dT:function dT(){},
mR:function(){throw H.d(P.F("Cannot modify unmodifiable Map"))},
ce:function(a){var u,t=H.M(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
oE:function(a){return v.types[H.a_(a)]},
oK:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.U(a).$iJ},
k:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.as(a)
if(typeof u!=="string")throw H.d(H.ar(a))
return u},
cA:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nk:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.c(p,3)
u=H.M(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.ad(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.E(s,q)|32)>t)return}return parseInt(a,b)},
bV:function(a){return H.nb(a)+H.kS(H.bF(a),0,null)},
nb:function(a){var u,t,s,r,q,p,o,n=J.U(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.J||!!n.$ibB){r=C.q(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.ce(t.length>1&&C.b.E(t,0)===36?C.b.ab(t,1):t)},
nc:function(){if(!!self.location)return self.location.href
return},
lo:function(a){var u,t,s,r,q
H.k3(a)
u=J.aK(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
nl:function(a){var u,t,s,r=H.e([],[P.l])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.w)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.ar(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.aH(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.d(H.ar(s))}return H.lo(r)},
lp:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.ar(s))
if(s<0)throw H.d(H.ar(s))
if(s>65535)return H.nl(a)}return H.lo(a)},
nm:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
dB:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aH(u,10))>>>0,56320|u&1023)}}throw H.d(P.ad(a,0,1114111,null,null))},
bU:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nj:function(a){var u=H.bU(a).getFullYear()+0
return u},
nh:function(a){var u=H.bU(a).getMonth()+1
return u},
nd:function(a){var u=H.bU(a).getDate()+0
return u},
ne:function(a){var u=H.bU(a).getHours()+0
return u},
ng:function(a){var u=H.bU(a).getMinutes()+0
return u},
ni:function(a){var u=H.bU(a).getSeconds()+0
return u},
nf:function(a){var u=H.bU(a).getMilliseconds()+0
return u},
q:function(a){throw H.d(H.ar(a))},
c:function(a,b){if(a==null)J.aK(a)
throw H.d(H.c9(a,b))},
c9:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aY(!0,b,s,null)
u=H.a_(J.aK(a))
if(!(b<0)){if(typeof u!=="number")return H.q(u)
t=b>=u}else t=!0
if(t)return P.V(b,a,s,null,u)
return P.dD(b,s)},
oy:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bW(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bW(a,c,!0,b,"end",u)
return new P.aY(!0,b,"end",null)},
ar:function(a){return new P.aY(!0,a,null,null)},
d:function(a){var u
if(a==null)a=new P.dy()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mk})
u.name=""}else u.toString=H.mk
return u},
mk:function(){return J.as(this.dartException)},
y:function(a){throw H.d(a)},
w:function(a){throw H.d(P.bN(a))},
bb:function(a){var u,t,s,r,q,p
a=H.mi(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.e([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.i9(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ia:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lx:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lj:function(a,b){return new H.hp(a,b==null?null:b.method)},
kA:function(a,b){var u=b==null,t=u?null:b.method
return new H.fJ(a,t,u?null:b.receiver)},
aJ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kl(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.aH(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kA(H.k(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lj(H.k(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mn()
q=$.mo()
p=$.mp()
o=$.mq()
n=$.mt()
m=$.mu()
l=$.ms()
$.mr()
k=$.mw()
j=$.mv()
i=r.a6(u)
if(i!=null)return f.$1(H.kA(H.M(u),i))
else{i=q.a6(u)
if(i!=null){i.method="call"
return f.$1(H.kA(H.M(u),i))}else{i=p.a6(u)
if(i==null){i=o.a6(u)
if(i==null){i=n.a6(u)
if(i==null){i=m.a6(u)
if(i==null){i=l.a6(u)
if(i==null){i=o.a6(u)
if(i==null){i=k.a6(u)
if(i==null){i=j.a6(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lj(H.M(u),i))}}return f.$1(new H.io(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dJ()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aY(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dJ()
return a},
cc:function(a){var u
if(a==null)return new H.ew(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ew(a)},
oC:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
oJ:function(a,b,c,d,e,f){H.f(a,"$iku")
switch(H.a_(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.C("Unsupported number of arguments for wrapped closure"))},
c8:function(a,b){var u
H.a_(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oJ)
a.$identity=u
return u},
mQ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hS().constructor.prototype):Object.create(new H.cg(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aZ
if(typeof t!=="number")return t.n()
$.aZ=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.l9(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.oE,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.l7:H.kr
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.d("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.l9(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
mN:function(a,b,c,d){var u=H.kr
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
l9:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mP(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mN(t,!r,u,b)
if(t===0){r=$.aZ
if(typeof r!=="number")return r.n()
$.aZ=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ch
return new Function(r+H.k(q==null?$.ch=H.f9("self"):q)+";return "+p+"."+H.k(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aZ
if(typeof r!=="number")return r.n()
$.aZ=r+1
o+=r
r="return function("+o+"){return this."
q=$.ch
return new Function(r+H.k(q==null?$.ch=H.f9("self"):q)+"."+H.k(u)+"("+o+");}")()},
mO:function(a,b,c,d){var u=H.kr,t=H.l7
switch(b?-1:a){case 0:throw H.d(H.nq("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mP:function(a,b){var u,t,s,r,q,p,o,n=$.ch
if(n==null)n=$.ch=H.f9("self")
u=$.l6
if(u==null)u=$.l6=H.f9("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mO(s,!q,t,b)
if(s===1){n="return function(){return this."+H.k(n)+"."+H.k(t)+"(this."+H.k(u)+");"
u=$.aZ
if(typeof u!=="number")return u.n()
$.aZ=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.k(n)+"."+H.k(t)+"(this."+H.k(u)+", "+o+");"
u=$.aZ
if(typeof u!=="number")return u.n()
$.aZ=u+1
return new Function(n+u+"}")()},
kV:function(a,b,c,d,e,f,g){return H.mQ(a,b,H.a_(c),d,!!e,!!f,g)},
kr:function(a){return a.a},
l7:function(a){return a.c},
f9:function(a){var u,t,s,r=new H.cg("self","target","receiver","name"),q=J.kx(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
E:function(a){if(a==null)H.os("boolean expression must not be null")
return a},
M:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.aW(a,"String"))},
oz:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aW(a,"double"))},
me:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aW(a,"num"))},
m1:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.aW(a,"bool"))},
a_:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.aW(a,"int"))},
mg:function(a,b){throw H.d(H.aW(a,H.ce(H.M(b).substring(2))))},
oQ:function(a,b){throw H.d(H.mM(a,H.ce(H.M(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.U(a)[b])return a
H.mg(a,b)},
x:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.U(a)[b]
else u=!0
if(u)return a
H.oQ(a,b)},
k3:function(a){if(a==null)return a
if(!!J.U(a).$ib)return a
throw H.d(H.aW(a,"List<dynamic>"))},
mc:function(a,b){var u
if(a==null)return a
u=J.U(a)
if(!!u.$ib)return a
if(u[b])return a
H.mg(a,b)},
m6:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a_(u)]
else return a.$S()}return},
eS:function(a,b){var u
if(typeof a=="function")return!0
u=H.m6(J.U(a))
if(u==null)return!1
return H.lR(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.kP)return a
$.kP=!0
try{if(H.eS(a,b))return a
u=H.ke(b)
t=H.aW(a,u)
throw H.d(t)}finally{$.kP=!1}},
kW:function(a,b){if(a!=null&&!H.kU(a,b))H.y(H.aW(a,H.ke(b)))
return a},
aW:function(a,b){return new H.ib("TypeError: "+P.dh(a)+": type '"+H.lX(a)+"' is not a subtype of type '"+b+"'")},
mM:function(a,b){return new H.fa("CastError: "+P.dh(a)+": type '"+H.lX(a)+"' is not a subtype of type '"+b+"'")},
lX:function(a){var u,t=J.U(a)
if(!!t.$ici){u=H.m6(t)
if(u!=null)return H.ke(u)
return"Closure"}return H.bV(a)},
os:function(a){throw H.d(new H.iR(a))},
oW:function(a){throw H.d(new P.fk(H.M(a)))},
nq:function(a){return new H.hF(a)},
m9:function(a){return v.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
bF:function(a){if(a==null)return
return a.$ti},
pB:function(a,b,c){return H.cd(a["$a"+H.k(c)],H.bF(b))},
bE:function(a,b,c,d){var u
H.M(c)
H.a_(d)
u=H.cd(a["$a"+H.k(c)],H.bF(b))
return u==null?null:u[d]},
ax:function(a,b,c){var u
H.M(b)
H.a_(c)
u=H.cd(a["$a"+H.k(b)],H.bF(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.a_(b)
u=H.bF(a)
return u==null?null:u[b]},
ke:function(a){return H.bD(a,null)},
bD:function(a,b){var u,t
H.m(b,"$ib",[P.h],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ce(a[0].name)+H.kS(a,1,b)
if(typeof a=="function")return H.ce(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a_(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.k(b[t])}if('func' in a)return H.o1(a,b)
if('futureOr' in a)return"FutureOr<"+H.bD("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
o1:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.h]
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
if(m!=null&&m!==P.P)p+=" extends "+H.bD(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bD(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bD(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bD(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.oB(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.M(b[h])
j=j+i+H.bD(e[d],a0)+(" "+H.k(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
kS:function(a,b,c){var u,t,s,r,q,p
H.m(c,"$ib",[P.h],"$ab")
if(a==null)return""
u=new P.aj("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bD(p,c)}return"<"+u.i(0)+">"},
cd:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
kT:function(a,b,c,d){var u,t
H.M(b)
H.k3(c)
H.M(d)
if(a==null)return!1
u=H.bF(a)
t=J.U(a)
if(t[b]==null)return!1
return H.m_(H.cd(t[d],u),null,c,null)},
m:function(a,b,c,d){H.M(b)
H.k3(c)
H.M(d)
if(a==null)return a
if(H.kT(a,b,c,d))return a
throw H.d(H.aW(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.ce(b.substring(2))+H.kS(c,0,null),v.mangledGlobalNames)))},
m_:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aI(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aI(a[t],b,c[t],d))return!1
return!0},
pz:function(a,b,c){return a.apply(b,H.cd(J.U(b)["$a"+H.k(c)],H.bF(b)))},
mb:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="P"||a.name==="L"||a===-1||a===-2||H.mb(u)}return!1},
kU:function(a,b){var u,t
if(a==null)return b==null||b.name==="P"||b.name==="L"||b===-1||b===-2||H.mb(b)
if(b==null||b===-1||b.name==="P"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kU(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eS(a,b)}u=J.U(a).constructor
t=H.bF(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aI(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.kU(a,b))throw H.d(H.aW(a,H.ke(b)))
return a},
aI:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="P"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="P"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aI(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="L")return!0
if('func' in c)return H.lR(a,b,c,d)
if('func' in a)return c.name==="ku"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aI("type" in a?a.type:l,b,s,d)
else if(H.aI(a,b,s,d))return!0
else{if(!('$i'+"cn" in t.prototype))return!1
r=t.prototype["$a"+"cn"]
q=H.cd(r,u?a.slice(1):l)
return H.aI(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.m_(H.cd(m,u),b,p,d)},
lR:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aI(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aI(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aI(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aI(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.oO(h,b,g,d)},
oO:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aI(c[s],d,a[s],b))return!1}return!0},
pA:function(a,b,c){Object.defineProperty(a,H.M(b),{value:c,enumerable:false,writable:true,configurable:true})},
oM:function(a){var u,t,s,r,q=H.M($.ma.$1(a)),p=$.jU[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k1[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.M($.lZ.$2(a,q))
if(q!=null){p=$.jU[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k1[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kd(u)
$.jU[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.k1[q]=u
return u}if(s==="-"){r=H.kd(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mf(a,u)
if(s==="*")throw H.d(P.im(q))
if(v.leafTags[q]===true){r=H.kd(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mf(a,u)},
mf:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kZ(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kd:function(a){return J.kZ(a,!1,null,!!a.$iJ)},
oN:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kd(u)
else return J.kZ(u,c,null,null)},
oH:function(){if(!0===$.kY)return
$.kY=!0
H.oI()},
oI:function(){var u,t,s,r,q,p,o,n
$.jU=Object.create(null)
$.k1=Object.create(null)
H.oG()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mh.$1(q)
if(p!=null){o=H.oN(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oG:function(){var u,t,s,r,q,p,o=C.A()
o=H.c7(C.B,H.c7(C.C,H.c7(C.r,H.c7(C.r,H.c7(C.D,H.c7(C.E,H.c7(C.F(C.q),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.ma=new H.jZ(r)
$.lZ=new H.k_(q)
$.mh=new H.k0(p)},
c7:function(a,b){return a(b)||b},
n0:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.d(P.a3("Illegal RegExp pattern ("+String(r)+")",a,null))},
oU:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oA:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mi:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
mj:function(a,b,c){var u=H.oV(a,b,c)
return u},
oV:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mi(b),'g'),H.oA(c))},
fe:function fe(){},
ff:function ff(a,b,c,d){var _=this
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
hp:function hp(a,b){this.a=a
this.b=b},
fJ:function fJ(a,b,c){this.a=a
this.b=b
this.c=c},
io:function io(a){this.a=a},
kl:function kl(a){this.a=a},
ew:function ew(a){this.a=a
this.b=null},
ci:function ci(){},
i_:function i_(){},
hS:function hS(){},
cg:function cg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ib:function ib(a){this.a=a},
fa:function fa(a){this.a=a},
hF:function hF(a){this.a=a},
iR:function iR(a){this.a=a},
Y:function Y(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fN:function fN(a,b){this.a=a
this.b=b
this.c=null},
fO:function fO(a,b){this.a=a
this.$ti=b},
fP:function fP(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jZ:function jZ(a){this.a=a},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a},
fI:function fI(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c5:function(a){return a},
na:function(a){return new Int8Array(a)},
be:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.c9(b,a))},
o_:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.oy(a,b,c))
return b},
cv:function cv(){},
bx:function bx(){},
dv:function dv(){},
cw:function cw(){},
dw:function dw(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
dx:function dx(){},
cx:function cx(){},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
cS:function cS(){},
oB:function(a){return J.lc(a?Object.keys(a):[],null)},
oP:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kZ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eU:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kY==null){H.oH()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.im("Return interceptor for "+H.k(u(a,q))))}s=a.constructor
r=s==null?null:s[$.l0()]
if(r!=null)return r
r=H.oM(a)
if(r!=null)return r
if(typeof a=="function")return C.K
u=Object.getPrototypeOf(a)
if(u==null)return C.w
if(u===Object.prototype)return C.w
if(typeof s=="function"){Object.defineProperty(s,$.l0(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
n_:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.kq(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.ad(a,0,4294967295,"length",null))
return J.lc(new Array(a),b)},
lc:function(a,b){return J.kx(H.e(a,[b]))},
kx:function(a){H.k3(a)
a.fixed$length=Array
return a},
U:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dj.prototype
return J.fH.prototype}if(typeof a=="string")return J.bg.prototype
if(a==null)return J.dk.prototype
if(typeof a=="boolean")return J.fG.prototype
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.P)return a
return J.eU(a)},
oD:function(a){if(typeof a=="number")return J.bw.prototype
if(typeof a=="string")return J.bg.prototype
if(a==null)return a
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.P)return a
return J.eU(a)},
cb:function(a){if(typeof a=="string")return J.bg.prototype
if(a==null)return a
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.P)return a
return J.eU(a)},
jV:function(a){if(a==null)return a
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.P)return a
return J.eU(a)},
m7:function(a){if(typeof a=="number")return J.bw.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bB.prototype
return a},
m8:function(a){if(typeof a=="number")return J.bw.prototype
if(typeof a=="string")return J.bg.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bB.prototype
return a},
kX:function(a){if(typeof a=="string")return J.bg.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bB.prototype
return a},
eT:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.P)return a
return J.eU(a)},
mE:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.oD(a).n(a,b)},
O:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).q(a,b)},
aX:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.m7(a).aa(a,b)},
l2:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.m8(a).m(a,b)},
mF:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.m7(a).p(a,b)},
d3:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.oK(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cb(a).j(a,b)},
kn:function(a,b,c){return J.jV(a).k(a,b,c)},
mG:function(a,b){return J.kX(a).E(a,b)},
mH:function(a,b,c){return J.eT(a).h5(a,b,c)},
mI:function(a,b,c,d){return J.eT(a).hw(a,b,c,d)},
mJ:function(a,b){return J.kX(a).T(a,b)},
ko:function(a,b){return J.m8(a).hJ(a,b)},
kp:function(a,b){return J.jV(a).J(a,b)},
mK:function(a,b,c,d){return J.eT(a).hW(a,b,c,d)},
l3:function(a,b){return J.jV(a).I(a,b)},
l4:function(a){return J.eT(a).gbT(a)},
d4:function(a){return J.U(a).gG(a)},
bI:function(a){return J.jV(a).gX(a)},
aK:function(a){return J.cb(a).gl(a)},
mL:function(a,b){return J.eT(a).iv(a,b)},
as:function(a){return J.U(a).i(a)},
a:function a(){},
fG:function fG(){},
dk:function dk(){},
dl:function dl(){},
ht:function ht(){},
bB:function bB(){},
bh:function bh(){},
aM:function aM(a){this.$ti=a},
ky:function ky(a){this.$ti=a},
at:function at(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bw:function bw(){},
dj:function dj(){},
fH:function fH(){},
bg:function bg(){}},P={
nF:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.ot()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c8(new P.iT(s),1)).observe(u,{childList:true})
return new P.iS(s,u,t)}else if(self.setImmediate!=null)return P.ou()
return P.ov()},
nG:function(a){self.scheduleImmediate(H.c8(new P.iU(H.n(a,{func:1,ret:-1})),0))},
nH:function(a){self.setImmediate(H.c8(new P.iV(H.n(a,{func:1,ret:-1})),0))},
nI:function(a){P.kF(C.o,H.n(a,{func:1,ret:-1}))},
kF:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.e.a1(a.a,1000)
return P.nL(u<0?0:u,b)},
lw:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.b9]})
u=C.e.a1(a.a,1000)
return P.nM(u<0?0:u,b)},
nL:function(a,b){var u=new P.eC()
u.ev(a,b)
return u},
nM:function(a,b){var u=new P.eC()
u.ew(a,b)
return u},
nJ:function(a,b){var u,t,s
b.a=1
try{a.e0(new P.j3(b),new P.j4(b),null)}catch(s){u=H.aJ(s)
t=H.cc(s)
P.oR(new P.j5(b,u,t))}},
lH:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaH")
if(u>=4){t=b.bF()
b.a=a.a
b.c=a.c
P.cN(b,t)}else{t=H.f(b.c,"$ibd")
b.a=2
b.c=a
a.d3(t)}},
cN:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$iak")
g=g.b
r=s.a
q=s.b
g.toString
P.jL(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
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
P.jL(i,i,g,r,q)
return}l=$.X
if(l!=n)$.X=n
else l=i
g=b.c
if(g===8)new P.j9(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.j8(u,b,o).$0()}else if((g&2)!==0)new P.j7(h,u,b).$0()
if(l!=null)$.X=l
g=u.b
if(!!J.U(g).$icn){if(g.a>=4){k=H.f(q.c,"$ibd")
q.c=null
b=q.b9(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.lH(g,q)
return}}j=b.b
k=H.f(j.c,"$ibd")
j.c=null
b=j.b9(k)
g=u.a
r=u.b
if(!g){H.A(r,H.u(j,0))
j.a=4
j.c=r}else{H.f(r,"$iak")
j.a=8
j.c=r}h.a=j
g=j}},
oo:function(a,b){if(H.eS(a,{func:1,args:[P.P,P.ap]}))return H.n(a,{func:1,ret:null,args:[P.P,P.ap]})
if(H.eS(a,{func:1,args:[P.P]}))return H.n(a,{func:1,ret:null,args:[P.P]})
throw H.d(P.kq(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
on:function(){var u,t
for(;u=$.c6,u!=null;){$.d0=null
t=u.b
$.c6=t
if(t==null)$.d_=null
u.a.$0()}},
or:function(){$.kQ=!0
try{P.on()}finally{$.d0=null
$.kQ=!1
if($.c6!=null)$.l1().$1(P.m0())}},
lW:function(a){var u=new P.e0(H.n(a,{func:1,ret:-1}))
if($.c6==null){$.c6=$.d_=u
if(!$.kQ)$.l1().$1(P.m0())}else $.d_=$.d_.b=u},
oq:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.c6
if(u==null){P.lW(a)
$.d0=$.d_
return}t=new P.e0(a)
s=$.d0
if(s==null){t.b=u
$.c6=$.d0=t}else{t.b=s.b
$.d0=s.b=t
if(t.b==null)$.d_=t}},
oR:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.X
if(C.f===u){P.jN(t,t,C.f,a)
return}u.toString
P.jN(t,t,u,H.n(u.bO(a),s))},
lv:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.X
if(u===C.f){u.toString
return P.kF(a,b)}return P.kF(a,H.n(u.bO(b),t))},
nw:function(a,b){var u,t,s={func:1,ret:-1,args:[P.b9]}
H.n(b,s)
u=$.X
if(u===C.f){u.toString
return P.lw(a,b)}t=u.dh(b,P.b9)
$.X.toString
return P.lw(a,H.n(t,s))},
jL:function(a,b,c,d,e){var u={}
u.a=d
P.oq(new P.jM(u,e))},
lS:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.X
if(t===c)return d.$0()
$.X=c
u=t
try{t=d.$0()
return t}finally{$.X=u}},
lT:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.A(e,g)
t=$.X
if(t===c)return d.$1(e)
$.X=c
u=t
try{t=d.$1(e)
return t}finally{$.X=u}},
op:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
t=$.X
if(t===c)return d.$2(e,f)
$.X=c
u=t
try{t=d.$2(e,f)
return t}finally{$.X=u}},
jN:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bO(d):c.hF(d,-1)
P.lW(d)},
iT:function iT(a){this.a=a},
iS:function iS(a,b,c){this.a=a
this.b=b
this.c=c},
iU:function iU(a){this.a=a},
iV:function iV(a){this.a=a},
eC:function eC(){this.c=0},
jt:function jt(a,b){this.a=a
this.b=b},
js:function js(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bd:function bd(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aH:function aH(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
j2:function j2(a,b){this.a=a
this.b=b},
j6:function j6(a,b){this.a=a
this.b=b},
j3:function j3(a){this.a=a},
j4:function j4(a){this.a=a},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c},
j9:function j9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ja:function ja(a){this.a=a},
j8:function j8(a,b,c){this.a=a
this.b=b
this.c=c},
j7:function j7(a,b,c){this.a=a
this.b=b
this.c=c},
e0:function e0(a){this.a=a
this.b=null},
hV:function hV(){},
hX:function hX(a,b){this.a=a
this.b=b},
hY:function hY(a,b){this.a=a
this.b=b},
cE:function cE(){},
hW:function hW(){},
b9:function b9(){},
ak:function ak(a,b){this.a=a
this.b=b},
jC:function jC(){},
jM:function jM(a,b){this.a=a
this.b=b},
jh:function jh(){},
jj:function jj(a,b,c){this.a=a
this.b=b
this.c=c},
ji:function ji(a,b){this.a=a
this.b=b},
jk:function jk(a,b,c){this.a=a
this.b=b
this.c=c},
n2:function(a,b){return new H.Y([a,b])},
ld:function(a,b){return new H.Y([a,b])},
n4:function(a){return H.oC(a,new H.Y([null,null]))},
n5:function(a){return new P.je([a])},
kM:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lJ:function(a,b,c){var u=new P.jf(a,b,[c])
u.c=a.e
return u},
mY:function(a,b,c){var u,t
if(P.kR(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.e([],[P.h])
C.a.h($.aq,a)
try{P.o2(a,u)}finally{if(0>=$.aq.length)return H.c($.aq,-1)
$.aq.pop()}t=P.lt(b,H.mc(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
kw:function(a,b,c){var u,t
if(P.kR(a))return b+"..."+c
u=new P.aj(b)
C.a.h($.aq,a)
try{t=u
t.a=P.lt(t.a,a,", ")}finally{if(0>=$.aq.length)return H.c($.aq,-1)
$.aq.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kR:function(a){var u,t
for(u=$.aq.length,t=0;t<u;++t)if(a===$.aq[t])return!0
return!1},
o2:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.m(b,"$ib",[P.h],"$ab")
u=a.gX(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.H())return
r=H.k(u.gP(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.H()){if(s<=5)return
if(0>=b.length)return H.c(b,-1)
q=b.pop()
if(0>=b.length)return H.c(b,-1)
p=b.pop()}else{o=u.gP(u);++s
if(!u.H()){if(s<=4){C.a.h(b,H.k(o))
return}q=H.k(o)
if(0>=b.length)return H.c(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gP(u);++s
for(;u.H();o=n,n=m){m=u.gP(u);++s
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
n3:function(a,b,c){var u=P.n2(b,c)
a.I(0,new P.fQ(u,b,c))
return u},
kB:function(a){var u,t={}
if(P.kR(a))return"{...}"
u=new P.aj("")
try{C.a.h($.aq,a)
u.a+="{"
t.a=!0
J.l3(a,new P.fV(t,u))
u.a+="}"}finally{if(0>=$.aq.length)return H.c($.aq,-1)
$.aq.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
je:function je(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cO:function cO(a){this.a=a
this.c=this.b=null},
jf:function jf(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fQ:function fQ(a,b,c){this.a=a
this.b=b
this.c=c},
fR:function fR(){},
v:function v(){},
fU:function fU(){},
fV:function fV(a,b){this.a=a
this.b=b},
ag:function ag(){},
ju:function ju(){},
fW:function fW(){},
dU:function dU(a,b){this.a=a
this.$ti=b},
jl:function jl(){},
ef:function ef(){},
eH:function eH(){},
nz:function(a,b,c,d){H.m(b,"$ib",[P.l],"$ab")
if(b instanceof Uint8Array)return P.nA(!1,b,c,d)
return},
nA:function(a,b,c,d){var u,t,s=$.mx()
if(s==null)return
u=0===c
if(u&&!0)return P.kI(s,b)
t=b.length
d=P.bm(c,d,t)
if(u&&d===t)return P.kI(s,b)
return P.kI(s,b.subarray(c,d))},
kI:function(a,b){if(P.nC(b))return
return P.nD(a,b)},
nD:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aJ(t)}return},
nC:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nB:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aJ(t)}return},
lV:function(a,b,c){var u,t,s
H.m(a,"$ib",[P.l],"$ab")
for(u=J.cb(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.a9()
if((s&127)!==s)return t-b}return c-b},
l5:function(a,b,c,d,e,f){if(C.e.b4(f,4)!==0)throw H.d(P.a3("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.a3("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.a3("Invalid base64 padding, more than two '=' characters",a,b))},
f6:function f6(){},
f7:function f7(){},
bM:function bM(){},
bP:function bP(){},
fs:function fs(){},
iw:function iw(){},
iy:function iy(){},
jB:function jB(a){this.b=0
this.c=a},
ix:function ix(a){this.a=a},
jA:function jA(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eV:function(a,b,c){var u
H.n(b,{func:1,ret:P.l,args:[P.h]})
u=H.nk(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.a3(a,null,null))},
mV:function(a){if(a instanceof H.ci)return a.i(0)
return"Instance of '"+H.bV(a)+"'"},
n6:function(a,b,c){var u,t
H.A(b,c)
u=J.n_(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.k(u,t,b)
return H.m(u,"$ib",[c],"$ab")},
le:function(a,b,c){var u,t=[c],s=H.e([],t)
for(u=J.bI(a);u.H();)C.a.h(s,H.A(u.gP(u),c))
if(b)return s
return H.m(J.kx(s),"$ib",t,"$ab")},
cF:function(a,b,c){var u,t=P.l
H.m(a,"$ij",[t],"$aj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.m(a,"$iaM",[t],"$aaM")
u=a.length
c=P.bm(b,c,u)
return H.lp(b>0||c<u?C.a.ec(a,b,c):a)}if(!!J.U(a).$icx)return H.nm(a,b,P.bm(b,c,a.length))
return P.nu(a,b,c)},
nu:function(a,b,c){var u,t,s,r,q=null
H.m(a,"$ij",[P.l],"$aj")
if(b<0)throw H.d(P.ad(b,0,J.aK(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.ad(c,b,J.aK(a),q,q))
t=J.bI(a)
for(s=0;s<b;++s)if(!t.H())throw H.d(P.ad(b,0,s,q,q))
r=[]
if(u)for(;t.H();)r.push(t.gP(t))
else for(s=b;s<c;++s){if(!t.H())throw H.d(P.ad(c,b,s,q,q))
r.push(t.gP(t))}return H.lp(r)},
no:function(a){return new H.fI(a,H.n0(a,!1,!0,!1))},
lt:function(a,b,c){var u=J.bI(b)
if(!u.H())return a
if(c.length===0){do a+=H.k(u.gP(u))
while(u.H())}else{a+=H.k(u.gP(u))
for(;u.H();)a=a+c+H.k(u.gP(u))}return a},
lz:function(){var u=H.nc()
if(u!=null)return P.ny(u)
throw H.d(P.F("'Uri.base' is not supported"))},
jz:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.m(a,"$ib",[P.l],"$ab")
if(c===C.h){u=$.mC().b
if(typeof b!=="string")H.y(H.ar(b))
u=u.test(b)}else u=!1
if(u)return b
H.A(b,H.ax(c,"bM",0))
t=c.ghV().bU(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dB(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mS:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mT:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dc:function(a){if(a>=10)return""+a
return"0"+a},
la:function(a,b){return new P.b1(1e6*b+1000*a)},
dh:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.as(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mV(a)},
f_:function(a){return new P.aY(!1,null,null,a)},
kq:function(a,b,c){return new P.aY(!0,a,b,c)},
dD:function(a,b){return new P.bW(null,null,!0,a,b,"Value not in range")},
ad:function(a,b,c,d,e){return new P.bW(b,c,!0,a,d,"Invalid value")},
bm:function(a,b,c){if(0>a||a>c)throw H.d(P.ad(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.ad(b,a,c,"end",null))
return b}return c},
kD:function(a,b){if(typeof a!=="number")return a.N()
if(a<0)throw H.d(P.ad(a,0,null,b,null))},
V:function(a,b,c,d,e){var u=H.a_(e==null?J.aK(b):e)
return new P.fF(u,!0,a,c,"Index out of range")},
F:function(a){return new P.ip(a)},
im:function(a){return new P.il(a)},
bN:function(a){return new P.fd(a)},
C:function(a){return new P.e8(a)},
a3:function(a,b,c){return new P.fC(a,b,c)},
n7:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.l]})
u=H.e([],[c])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.k(u,t,b.$1(t))
return u},
l_:function(a){H.oP(a)},
ny:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.E(a,4)^58)*3|C.b.E(a,0)^100|C.b.E(a,1)^97|C.b.E(a,2)^116|C.b.E(a,3)^97)>>>0
if(u===0)return P.ly(e<e?C.b.w(a,0,e):a,5,f).ge6()
else if(u===32)return P.ly(C.b.w(a,5,e),0,f).ge6()}t=new Array(8)
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
if(P.lU(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.iJ()
if(r>=0)if(P.lU(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.n()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.N()
if(typeof n!=="number")return H.q(n)
if(m<n)n=m
if(typeof o!=="number")return o.N()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.N()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.N()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.a4(a,"..",o)))j=n>o+2&&C.b.a4(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.a4(a,"file",0)){if(q<=0){if(!C.b.a4(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.w(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.aN(a,o,n,"/");++e
n=h}k="file"}else if(C.b.a4(a,"http",0)){if(t&&p+3===o&&C.b.a4(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aN(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.a4(a,"https",0)){if(t&&p+4===o&&C.b.a4(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aN(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.w(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jm(a,r,q,p,o,n,m,k)}return P.nN(a,0,e,r,q,p,o,n,m,k)},
lB:function(a){var u=P.h
return C.a.hZ(H.e(a.split("&"),[u]),P.ld(u,u),new P.iu(C.h),[P.z,P.h,P.h])},
nx:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.ir(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.T(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eV(C.b.w(a,s,t),n,n)
if(typeof p!=="number")return p.aa()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.c(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eV(C.b.w(a,s,c),n,n)
if(typeof p!=="number")return p.aa()
if(p>255)k.$2(l,s)
if(r>=u)return H.c(j,r)
j[r]=p
return j},
lA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.is(a)
t=new P.it(u,a)
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
l=C.a.gax(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.nx(a,q,c)
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
nN:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nU(a,b,d)
else{if(d===b)P.cX(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nV(a,u,e-1):""
s=P.nR(a,e,f,!1)
if(typeof f!=="number")return f.n()
r=f+1
if(typeof g!=="number")return H.q(g)
q=r<g?P.nT(P.eV(C.b.w(a,r,g),new P.jv(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nS(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.N()
o=h<i?P.kN(a,h+1,i,n):n
return new P.c4(j,t,s,q,p,o,i<c?P.nQ(a,i+1,c):n)},
lK:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cX:function(a,b,c){throw H.d(P.a3(c,a,b))},
nT:function(a,b){if(a!=null&&a===P.lK(b))return
return a},
nR:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.T(a,b)===91){if(typeof c!=="number")return c.p()
u=c-1
if(C.b.T(a,u)!==93)P.cX(a,b,"Missing end `]` to match `[` in host")
P.lA(a,b+1,u)
return C.b.w(a,b,c).toLowerCase()}if(typeof c!=="number")return H.q(c)
t=b
for(;t<c;++t)if(C.b.T(a,t)===58){P.lA(a,b,c)
return"["+a+"]"}return P.nX(a,b,c)},
nX:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.q(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.T(a,u)
if(q===37){p=P.lQ(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.aj("")
n=C.b.w(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.w(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.c(C.u,o)
o=(C.u[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.aj("")
if(t<u){s.a+=C.b.w(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.c(C.j,o)
o=(C.j[o]&1<<(q&15))!==0}else o=!1
if(o)P.cX(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.T(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.aj("")
n=C.b.w(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.lL(q)
u+=l
t=u}}}}if(s==null)return C.b.w(a,b,c)
if(t<c){n=C.b.w(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nU:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lN(C.b.E(a,b)))P.cX(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.E(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.c(C.l,r)
r=(C.l[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cX(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.w(a,b,c)
return P.nO(t?a.toLowerCase():a)},
nO:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nV:function(a,b,c){return P.cY(a,b,c,C.M,!1)},
nS:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cY(a,b,c,C.v,!0):C.i.j2(d,new P.jw(),P.h).u(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a3(u,"/"))u="/"+u
return P.nW(u,e,f)},
nW:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a3(a,"/"))return P.nY(a,!u||c)
return P.nZ(a)},
kN:function(a,b,c,d){var u,t={}
H.m(d,"$iz",[P.h,null],"$az")
if(a!=null){if(d!=null)throw H.d(P.f_("Both query and queryParameters specified"))
return P.cY(a,b,c,C.k,!0)}if(d==null)return
u=new P.aj("")
t.a=""
d.I(0,new P.jx(new P.jy(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nQ:function(a,b,c){return P.cY(a,b,c,C.k,!0)},
lQ:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.T(a,b+1)
t=C.b.T(a,p)
s=H.jY(u)
r=H.jY(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.e.aH(q,4)
if(p>=8)return H.c(C.m,p)
p=(C.m[p]&1<<(q&15))!==0}else p=!1
if(p)return H.dB(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.w(a,b,b+3).toUpperCase()
return},
lL:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.e(u,[P.l])
C.a.k(t,0,37)
C.a.k(t,1,C.b.E(o,a>>>4))
C.a.k(t,2,C.b.E(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.e(u,[P.l])
for(q=0;--r,r>=0;s=128){p=C.e.hg(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.E(o,p>>>4))
C.a.k(t,q+2,C.b.E(o,p&15))
q+=3}}return P.cF(t,0,null)},
cY:function(a,b,c,d,e){var u=P.lP(a,b,c,H.m(d,"$ib",[P.l],"$ab"),e)
return u==null?C.b.w(a,b,c):u},
lP:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.m(d,"$ib",[P.l],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.N()
if(typeof c!=="number")return H.q(c)
if(!(t<c))break
c$0:{q=C.b.T(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.c(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.lQ(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.c(C.j,p)
p=(C.j[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cX(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.T(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.lL(q)}}if(r==null)r=new P.aj("")
r.a+=C.b.w(a,s,t)
r.a+=H.k(o)
if(typeof n!=="number")return H.q(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.N()
if(s<c)r.a+=C.b.w(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
lO:function(a){if(C.b.a3(a,"."))return!0
return C.b.dF(a,"/.")!==-1},
nZ:function(a){var u,t,s,r,q,p,o
if(!P.lO(a))return a
u=H.e([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.O(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.c(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.u(u,"/")},
nY:function(a,b){var u,t,s,r,q,p
if(!P.lO(a))return!b?P.lM(a):a
u=H.e([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gax(u)!==".."){if(0>=u.length)return H.c(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.c(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gax(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.c(u,0)
C.a.k(u,0,P.lM(u[0]))}return C.a.u(u,"/")},
lM:function(a){var u,t,s,r=a.length
if(r>=2&&P.lN(J.mG(a,0)))for(u=1;u<r;++u){t=C.b.E(a,u)
if(t===58)return C.b.w(a,0,u)+"%3A"+C.b.ab(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.c(C.l,s)
s=(C.l[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nP:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.E(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.f_("Invalid URL encoding"))}}return u},
kO:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.E(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.w(a,b,c)
else r=new H.a4(C.b.w(a,b,c))}else{r=H.e([],[P.l])
for(s=a.length,q=b;q<c;++q){t=C.b.E(a,q)
if(t>127)throw H.d(P.f_("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.f_("Truncated URI"))
C.a.h(r,P.nP(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.m(r,"$ib",[P.l],"$ab")
return new P.ix(!1).bU(r)},
lN:function(a){var u=a|32
return 97<=u&&u<=122},
ly:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.e([b-1],[P.l])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.E(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.a3(m,a,t))}}if(s<0&&t>b)throw H.d(P.a3(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.E(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gax(l)
if(r!==44||t!==p+7||!C.b.a4(a,"base64",p+1))throw H.d(P.a3("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.z.i8(0,a,o,u)
else{n=P.lP(a,o,u,C.k,!0)
if(n!=null)a=C.b.aN(a,o,u,n)}return new P.iq(a,l,c)},
o0:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.n7(22,new P.jG(),P.Q),n=new P.jF(o),m=new P.jH(),l=new P.jI(),k=H.f(n.$2(0,225),"$iQ")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(14,225),"$iQ")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(15,225),"$iQ")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(1,225),"$iQ")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(2,235),"$iQ")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(3,235),"$iQ")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(4,229),"$iQ")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(5,229),"$iQ")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(6,231),"$iQ")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(7,231),"$iQ")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.f(n.$2(8,8),"$iQ"),"]",5)
k=H.f(n.$2(9,235),"$iQ")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(16,235),"$iQ")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(17,235),"$iQ")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(10,235),"$iQ")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(18,235),"$iQ")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(19,235),"$iQ")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(11,235),"$iQ")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(12,236),"$iQ")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.f(n.$2(13,237),"$iQ")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.f(n.$2(20,245),"$iQ"),"az",21)
k=H.f(n.$2(21,245),"$iQ")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
lU:function(a,b,c,d,e){var u,t,s,r,q
H.m(e,"$ib",[P.l],"$ab")
u=$.mD()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.c(u,d)
s=u[d]
r=C.b.E(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.c(s,r)
q=s[r]
d=q&31
C.a.k(e,q>>>5,t)}return d},
ab:function ab(){},
au:function au(a,b){this.a=a
this.b=b},
p:function p(){},
b1:function b1(a){this.a=a},
fp:function fp(){},
fq:function fq(){},
bu:function bu(){},
f0:function f0(){},
dy:function dy(){},
aY:function aY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bW:function bW(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fF:function fF(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ip:function ip(a){this.a=a},
il:function il(a){this.a=a},
dK:function dK(a){this.a=a},
fd:function fd(a){this.a=a},
hs:function hs(){},
dJ:function dJ(){},
fk:function fk(a){this.a=a},
e8:function e8(a){this.a=a},
fC:function fC(a,b,c){this.a=a
this.b=b
this.c=c},
l:function l(){},
j:function j(){},
b3:function b3(){},
b:function b(){},
z:function z(){},
L:function L(){},
a7:function a7(){},
P:function P(){},
ap:function ap(){},
h:function h(){},
aj:function aj(a){this.a=a},
iu:function iu(a){this.a=a},
ir:function ir(a){this.a=a},
is:function is(a){this.a=a},
it:function it(a,b){this.a=a
this.b=b},
c4:function c4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jv:function jv(a,b){this.a=a
this.b=b},
jw:function jw(){},
jy:function jy(a,b){this.a=a
this.b=b},
jx:function jx(a){this.a=a},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
jG:function jG(){},
jF:function jF(a){this.a=a},
jH:function jH(){},
jI:function jI(){},
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
iZ:function iZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
bo:function(a){var u,t,s,r,q
if(a==null)return
u=P.ld(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r){q=H.M(t[r])
u.k(0,q,a[q])}return u},
ow:function(a){var u={}
a.I(0,new P.jO(u))
return u},
jo:function jo(){},
jq:function jq(a,b){this.a=a
this.b=b},
jO:function jO(a){this.a=a},
jp:function jp(a,b){this.a=a
this.b=b},
fy:function fy(a,b){this.a=a
this.b=b},
fz:function fz(){},
fA:function fA(){},
jd:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nK:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jg:function jg(){},
ah:function ah(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b5:function b5(){},
fL:function fL(){},
b8:function b8(){},
hq:function hq(){},
hw:function hw(){},
hZ:function hZ(){},
r:function r(){},
ba:function ba(){},
i8:function i8(){},
ed:function ed(){},
ee:function ee(){},
en:function en(){},
eo:function eo(){},
ey:function ey(){},
ez:function ez(){},
eF:function eF(){},
eG:function eG(){},
Q:function Q(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(a){this.a=a},
f5:function f5(){},
bJ:function bJ(){},
hr:function hr(){},
e1:function e1(){},
d6:function d6(){},
dC:function dC(){},
bX:function bX(){},
dG:function dG(){},
dS:function dS(){},
hR:function hR(){},
eu:function eu(){},
ev:function ev(){}},W={
l8:function(){var u=document.createElement("canvas")
return u},
mU:function(a){H.f(a,"$ii")
return"wheel"},
mX:function(a){var u,t=document.createElement("input"),s=H.f(t,"$icq")
try{s.type=a}catch(u){H.aJ(u)}return s},
jc:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lI:function(a,b,c,d){var u=W.jc(W.jc(W.jc(W.jc(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
aa:function(a,b,c,d,e){var u=W.lY(new W.j1(c),W.o)
if(u!=null&&!0)J.mI(a,b,u,!1)
return new W.j0(a,b,u,!1,[e])},
lY:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.X
if(u===C.f)return a
return u.dh(a,b)},
t:function t(){},
eW:function eW(){},
eY:function eY(){},
eZ:function eZ(){},
bK:function bK(){},
bL:function bL(){},
bt:function bt(){},
cj:function cj(){},
fg:function fg(){},
T:function T(){},
ck:function ck(){},
fh:function fh(){},
b_:function b_(){},
b0:function b0(){},
fi:function fi(){},
fj:function fj(){},
fl:function fl(){},
dd:function dd(){},
fm:function fm(){},
de:function de(){},
df:function df(){},
fn:function fn(){},
fo:function fo(){},
iX:function iX(a,b){this.a=a
this.b=b},
a2:function a2(){},
o:function o(){},
i:function i(){},
aA:function aA(){},
cm:function cm(){},
fx:function fx(){},
fB:function fB(){},
aL:function aL(){},
fE:function fE(){},
bR:function bR(){},
cp:function cp(){},
cq:function cq(){},
b4:function b4(){},
fS:function fS(){},
hc:function hc(){},
cs:function cs(){},
hd:function hd(){},
he:function he(a){this.a=a},
hf:function hf(){},
hg:function hg(a){this.a=a},
aN:function aN(){},
hh:function hh(){},
ac:function ac(){},
iW:function iW(a){this.a=a},
G:function G(){},
cy:function cy(){},
aO:function aO(){},
hu:function hu(){},
hD:function hD(){},
hE:function hE(a){this.a=a},
hG:function hG(){},
aQ:function aQ(){},
hP:function hP(){},
aR:function aR(){},
hQ:function hQ(){},
aS:function aS(){},
hT:function hT(){},
hU:function hU(a){this.a=a},
aD:function aD(){},
bn:function bn(){},
aT:function aT(){},
aE:function aE(){},
i0:function i0(){},
i1:function i1(){},
i3:function i3(){},
aU:function aU(){},
aV:function aV(){},
i6:function i6(){},
i7:function i7(){},
bA:function bA(){},
iv:function iv(){},
iN:function iN(){},
bc:function bc(){},
cM:function cM(){},
iY:function iY(){},
e3:function e3(){},
jb:function jb(){},
ek:function ek(){},
jn:function jn(){},
jr:function jr(){},
j_:function j_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kL:function kL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j0:function j0(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
j1:function j1(a){this.a=a},
D:function D(){},
di:function di(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
e2:function e2(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
el:function el(){},
em:function em(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
cT:function cT(){},
cU:function cU(){},
es:function es(){},
et:function et(){},
ex:function ex(){},
eA:function eA(){},
eB:function eB(){},
cV:function cV(){},
cW:function cW(){},
eD:function eD(){},
eE:function eE(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){}},O={
ks:function(a){var u=new O.a0([a])
u.bm(a)
return u},
a0:function a0(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cr:function cr(){this.b=this.a=null},
ds:function ds(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h5:function h5(a,b){this.a=a
this.b=b},
h6:function h6(){},
h7:function h7(a,b){this.a=a
this.b=b},
h8:function h8(){},
h9:function h9(a,b){this.a=a
this.b=b},
ha:function ha(){},
h_:function h_(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dt:function dt(){},
h0:function h0(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b6:function b6(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h2:function h2(){var _=this
_.e=_.d=_.c=_.b=null},
h3:function h3(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h4:function h4(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bZ:function bZ(){}},E={
np:function(a,b){var u=new E.hz(a)
u.ei(a,b)
return u},
nv:function(a,b,c,d,e){var u,t,s=J.U(a)
if(!!s.$ibL)return E.lu(a,!0,!0,!0,!1)
u=W.l8()
t=u.style
t.width="100%"
t.height="100%"
s.gbT(a).h(0,u)
return E.lu(u,!0,!0,!0,!1)},
lu:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dO(),j=H.f(C.n.e9(a,"webgl2",P.n4(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibX")
if(j==null)H.y(P.C("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.np(j,a)
H.a_(j.getParameter(3379))
H.a_(j.getParameter(34076))
u=new X.dV(a)
t=new X.fK()
t.c=new X.av(!1,!1,!1)
t.sh_(P.n5(P.l))
u.b=t
t=new X.hi(u)
t.f=0
t.r=V.bz()
t.x=V.bz()
t.ch=t.Q=1
u.c=t
t=new X.fT(u)
t.r=0
t.x=V.bz()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.i5(u)
t.f=V.bz()
t.r=V.bz()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seP(H.e([],[[P.cE,P.P]]))
t=u.z
s=document
r=W.ac
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.aa(s,"contextmenu",H.n(u.gfk(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.aa(a,"focus",H.n(u.gfq(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.aa(a,"blur",H.n(u.gfc(),o),!1,p))
t=u.z
n=W.b4
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.aa(s,"keyup",H.n(u.gfv(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.aa(s,"keydown",H.n(u.gft(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.aa(a,"mousedown",H.n(u.gfB(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.aa(a,"mouseup",H.n(u.gfF(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.aa(a,l,H.n(u.gfD(),q),!1,r))
n=u.z
m=W.bc;(n&&C.a).h(n,W.aa(a,H.M(W.mU(a)),H.n(u.gfH(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.aa(s,l,H.n(u.gfm(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.aa(s,"mouseup",H.n(u.gfo(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.aa(s,"pointerlockchange",H.n(u.gfJ(),o),!1,p))
p=u.z
o=W.aV
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.aa(a,"touchstart",H.n(u.gfV(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.aa(a,"touchend",H.n(u.gfR(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.aa(a,"touchmove",H.n(u.gfT(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.au(Date.now(),!1)
k.cy=0
k.d5()
return k},
f8:function f8(){},
an:function an(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hz:function hz(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hA:function hA(a){this.a=a},
hB:function hB(a){this.a=a},
hC:function hC(a){this.a=a},
dL:function dL(a){this.c=a
this.b=null},
dO:function dO(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=null},
i2:function i2(a){this.a=a}},Z={
kK:function(a,b,c){var u
H.m(c,"$ib",[P.l],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.c5(c)),35044)
a.bindBuffer(b,null)
return new Z.e_(b,u)},
aG:function(a){return new Z.bC(a)},
e_:function e_(a,b){this.a=a
this.b=b},
d7:function d7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iO:function iO(a){this.a=a},
d8:function d8(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bv:function bv(a,b,c){this.a=a
this.b=b
this.c=c},
bC:function bC(a){this.a=a}},D={
R:function(){var u=new D.b2()
u.sa0(null)
u.sak(null)
u.c=null
u.d=0
return u},
fb:function fb(){},
b2:function b2(){var _=this
_.d=_.c=_.b=_.a=null},
fu:function fu(a){this.a=a},
fv:function fv(a){this.a=a},
B:function B(){this.b=null},
bS:function bS(a){this.b=null
this.$ti=a},
bT:function bT(a){this.b=null
this.$ti=a},
K:function K(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bf:function bf(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a8:function a8(){},
dn:function dn(){var _=this
_.d=_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dA:function dA(){},
dI:function dI(){}},X={d9:function d9(a,b){this.a=a
this.b=b},dm:function dm(a,b){this.a=a
this.b=b},fK:function fK(){var _=this
_.d=_.c=_.b=_.a=null},dq:function dq(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fT:function fT(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},av:function av(a,b,c){this.a=a
this.b=b
this.c=c},bk:function bk(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hi:function hi(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ct:function ct(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hv:function hv(){},dQ:function dQ(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},i5:function i5(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dV:function dV(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mW:function(a){var u=new X.fD(),t=new V.ay(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lr
if(t==null){t=V.lq(0,0,1,1)
$.lr=t}u.r=t
return u},
da:function da(){},
fD:function fD(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dz:function dz(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dM:function dM(){}},V={
km:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.b4(a-b,u)
return(a<0?a+u:a)+b},
N:function(a,b,c){if(a==null)return C.b.a7("null",c)
return C.b.a7(C.c.e1(Math.abs(a-0)<$.I().a?0:a,b),c+b+1)},
ca:function(a,b,c){var u,t,s,r,q,p
H.m(a,"$ib",[P.p],"$ab")
u=H.e([],[P.h])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.w)(a),++r){q=V.N(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.c(u,p)
C.a.k(u,p,C.b.a7(u[p],s))}return u},
ao:function(){var u=$.li
return u==null?$.li=V.b7(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b7:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.am(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
hb:function(a,b,c){return V.b7(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kC:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b7(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
lg:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b7(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
lh:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b7(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
lf:function(a,b,c){var u=c.t(0,Math.sqrt(c.B(c))),t=b.au(u),s=t.t(0,Math.sqrt(t.B(t))),r=u.au(s),q=new V.H(a.a,a.b,a.c),p=s.O(0).B(q),o=r.O(0).B(q),n=u.O(0).B(q)
return V.b7(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bz:function(){var u=$.lm
return u==null?$.lm=new V.a6(0,0):u},
ln:function(){var u=$.cz
return u==null?$.cz=new V.Z(0,0,0):u},
lq:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dE(a,b,c,d)},
cL:function(){var u=$.lF
return u==null?$.lF=new V.H(0,0,0):u},
nE:function(){var u=$.iz
return u==null?$.iz=new V.H(-1,0,0):u},
kJ:function(){var u=$.iA
return u==null?$.iA=new V.H(0,1,0):u},
lG:function(){var u=$.iB
return u==null?$.iB=new V.H(0,0,1):u},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
ay:function ay(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ft:function ft(a){this.a=a},
du:function du(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
am:function am(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a6:function a6(a,b){this.a=a
this.b=b},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dE:function dE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
S:function S(a,b){this.a=a
this.b=b},
H:function H(a,b,c){this.a=a
this.b=b
this.c=c},
ai:function(a){var u=new V.hH()
u.ej(a)
return u},
eX:function eX(){},
bj:function bj(){},
dr:function dr(){},
bl:function bl(){this.a=null},
hH:function hH(){this.a=null},
cD:function cD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dP:function dP(a,b,c){this.a=a
this.b=b
this.c=c},
cG:function cG(a){this.b=a
this.c=null},
i4:function i4(){this.c=this.b=this.a=null},
cH:function cH(a){this.b=a
this.a=this.c=null},
oS:function(a){P.nw(C.I,new V.kf(a))},
nr:function(a){var u=new V.hL()
u.el(a,!0)
return u},
kf:function kf(a){this.a=a},
hx:function hx(a){this.a=a
this.c=null},
hy:function hy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hL:function hL(){this.b=this.a=null},
hN:function hN(a){this.a=a},
hM:function hM(a){this.a=a}},U={
kt:function(){var u=new U.fc()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
bO:function(a){var u=new U.db()
if(a==null)a=V.ao()
if(null!=a)u.a=a
return u},
kv:function(){var u=new U.co()
u.bm(U.a9)
u.b5(u.geo(),u.gfN())
u.e=null
u.f=V.ao()
u.r=0
return u},
cB:function(a,b,c){var u,t=new U.dF()
t.r=t.f=t.e=t.d=t.c=t.b=t.a=0
t.se8(0)
t.sdR(0,0)
t.sdY(0)
u=t.d
if(!(Math.abs(u-c)<$.I().a)){t.d=c
u=new D.K("deltaYaw",u,c,[P.p])
u.b=!0
t.D(u)}u=t.e
if(!(Math.abs(u-a)<$.I().a)){t.e=a
u=new D.K("deltaPitch",u,a,[P.p])
u.b=!0
t.D(u)}u=t.f
if(!(Math.abs(u-b)<$.I().a)){t.f=b
u=new D.K("deltaRoll",u,b,[P.p])
u.b=!0
t.D(u)}return t},
fc:function fc(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
db:function db(){this.b=this.a=null},
co:function co(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a9:function a9(){},
dF:function dF(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dW:function dW(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dX:function dX(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dY:function dY(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dg:function dg(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
n8:function(a,b){var u=a.aX,t=new A.fZ(b,u)
t.ek(b,u)
t.eh(a,b)
return t},
n9:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.m(a9,"$ib",[A.az],"$ab")
H.m(b0,"$ib",[A.aB],"$ab")
H.m(b1,"$ib",[A.aC],"$ab")
u="MaterialLight_"+a0.gag(a0)+a1.gag(a1)+a2.gag(a2)+a3.gag(a3)+a4.gag(a4)+a5.gag(a5)+a6.gag(a6)+a7.gag(a7)+a8.gag(a8)+"_"
u+=a?"1":"0"
u+=b?"1":"0"
u+=c?"1":"0"
u=u+"0_"+e
t=a9.length
if(t>0){u+="_Dir"
for(s=0;s<a9.length;a9.length===t||(0,H.w)(a9),++s)u+="_"+H.k(a9[s].a)}t=b0.length
if(t>0){u+="_Point"
for(s=0;s<b0.length;b0.length===t||(0,H.w)(b0),++s)u+="_"+H.k(b0[s].a)}t=b1.length
if(t>0){u+="_Spot"
for(s=0;s<b1.length;b1.length===t||(0,H.w)(b1),++s)u+="_"+H.k(b1[s].a)}for(t=a9.length,r=0,q=!1,s=0;s<t;++s,q=!0)r+=a9[s].b
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
f=$.bs()
if(j){t=$.br()
f=new Z.bC(f.a|t.a)}if(i){t=$.bq()
f=new Z.bC(f.a|t.a)}if(h){t=$.bp()
f=new Z.bC(f.a|t.a)}return new A.h1(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,r,o,k,o,q,g,!0,!1,!1,n,q,l,j,i,!1,!1,h,!1,!1,c,!1,e,u.charCodeAt(0)==0?u:u,f)},
jJ:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jK:function(a,b,c){var u
A.jJ(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.kj(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
o6:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jJ(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
o3:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jK(b,t,"ambient")
b.a+="\n"},
o4:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jK(b,t,"diffuse")
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
o7:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jK(b,t,"invDiffuse")
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
od:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jK(b,t,"specular")
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
o9:function(a,b){var u,t,s
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
ob:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jJ(b,t,"reflect")
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
oc:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jJ(b,t,"refract")
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
o5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.k(u)
s=A.kj(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.a9()
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
oa:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.k(u)
s=A.kj(t)
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
if(typeof u!=="number")return u.a9()
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
oe:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.k(u)
s=A.kj(t)
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
if(typeof u!=="number")return u.a9()
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
o8:function(a,b){var u,t
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
of:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.aj("")
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
A.o6(a,j)
A.o3(a,j)
A.o4(a,j)
A.o7(a,j)
A.od(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.ob(a,j)
A.oc(a,j)}A.o9(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.w)(q),++o)A.o5(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.w)(q),++o)A.oa(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.w)(q),++o)A.oe(a,q[o],j)
A.o8(a,j)}q=j.a+="// === Main ===\n"
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.w)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ab(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.w)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ab(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.w)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ab(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
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
og:function(a,b){var u,t,s
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
oi:function(a,b){var u
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
oh:function(a,b){var u
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
ok:function(a,b){var u,t
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
ol:function(a,b){var u,t
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
oj:function(a,b){var u
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
om:function(a,b){var u
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
kj:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.b.ab(a,1)},
kG:function(a,b,c,d,e){var u=new A.id(a,c,e)
u.f=d
u.sht(P.n6(d,0,P.l))
return u},
d5:function d5(a,b,c){this.a=a
this.b=b
this.c=c},
f1:function f1(a){this.a=a},
al:function al(a,b,c){this.a=a
this.b=b
this.c=c},
fZ:function fZ(a,b){var _=this
_.iP=_.iO=_.dm=_.dl=_.aX=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.j1=_.j0=_.j_=_.c3=_.c2=_.c1=_.c0=_.c_=_.bZ=_.iZ=_.iY=_.dv=_.iX=_.iW=_.du=_.dt=_.iV=_.iU=_.ds=_.dr=_.iT=_.iS=_.dq=_.iR=_.iQ=_.dn=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
az:function az(a,b){this.a=a
this.b=b},
aB:function aB(a,b){this.a=a
this.b=b},
aC:function aC(a,b){this.a=a
this.b=b},
h1:function h1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aX=b3
_.dl=b4},
c_:function c_(a,b,c,d,e,f){var _=this
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
cC:function cC(){},
dR:function dR(){},
ij:function ij(a){this.a=a},
aF:function aF(a,b,c){this.a=a
this.c=b
this.d=c},
ig:function ig(a,b,c){this.a=a
this.c=b
this.d=c},
ih:function ih(a,b,c){this.a=a
this.c=b
this.d=c},
ii:function ii(a,b,c){this.a=a
this.c=b
this.d=c},
id:function id(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ae:function ae(a,b,c){this.a=a
this.c=b
this.d=c},
ie:function ie(a,b,c){this.a=a
this.c=b
this.d=c},
W:function W(a,b,c){this.a=a
this.c=b
this.d=c},
cI:function cI(a,b,c){this.a=a
this.c=b
this.d=c},
ik:function ik(a,b,c){this.a=a
this.c=b
this.d=c},
cJ:function cJ(a,b,c){this.a=a
this.c=b
this.d=c},
aw:function aw(a,b,c){this.a=a
this.c=b
this.d=c},
c1:function c1(a,b,c){this.a=a
this.c=b
this.d=c},
c2:function c2(a,b,c){this.a=a
this.c=b
this.d=c}},F={
m2:function(a,b,c){var u,t=null
H.n(b,{func:1,ret:-1,args:[F.af,P.p,P.p]})
u=F.kE()
F.cZ(u,t,b,c,a,1,0,0,1)
F.cZ(u,t,b,c,a,0,1,0,3)
F.cZ(u,t,b,c,a,0,0,1,2)
F.cZ(u,t,b,c,a,-1,0,0,0)
F.cZ(u,t,b,c,a,0,-1,0,0)
F.cZ(u,t,b,c,a,0,0,-1,3)
u.ac()
return u},
jE:function(a){var u,t=a.a>0?1:0
if(a.b>0)t+=2
u=a.c
if(typeof u!=="number")return u.aa()
return(u>0?t+4:t)*2},
cZ:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={}
H.n(c,{func:1,ret:-1,args:[F.af,P.p,P.p]})
u=a1+a2
t=u+a3
s=a2+a3
r=a3+a1
q=new V.H(t,s+a1,r+a2)
e.a=q
p=a1-a2
o=a2-a3
n=a3-a1
m=e.b=new V.H(p+a3,o+a1,n+a2)
l=new V.H(p-a3,o-a1,n-a2)
e.c=l
k=e.d=new V.H(u-a3,s-a1,r-a2)
if(t>0){e.d=m
e.b=k
t=m
u=k}else{t=k
u=m}for(r=t,t=u,u=q,s=l,j=0;j<a4;++j,i=r,r=u,u=t,t=s,s=i){e.a=t
e.b=s
e.c=r
e.d=u}h=F.jE(u)
g=F.jE(e.b)
f=F.ki(d,a0,new F.jD(e,F.jE(e.c),F.jE(e.d),g,h,c),b)
if(f!=null)a.aZ(f)},
m5:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(d,{func:1,ret:P.p,args:[P.p]})
if(e<3)return
u=F.kE()
t=b?-1:1
s=-6.283185307179586/e
r=H.e([],[F.af])
q=u.a
p=new V.H(0,0,t)
p=p.t(0,Math.sqrt(p.B(p)))
C.a.h(r,q.hz(new V.aP(a,-1,-1,-1),new V.ay(1,1,1,1),new V.Z(0,0,c),new V.H(0,0,t),new V.a6(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.q(k)
j=new V.H(m,l,t).t(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.dZ(new V.aP(a,-1,-1,-1),null,new V.ay(i,g,h,1),new V.Z(m*k,l*k,c),new V.H(0,0,t),new V.a6(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.hx(r)
return u},
m3:function(a,b,c,d){return F.ox(!0,a,b,new F.jP(1,d),c)},
ox:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.p,args:[P.p,P.p]})
if(e<3)return
if(c<1)return
u=F.ki(c,e,new F.jR(d),null)
if(u==null)return
u.ac()
u.bM()
if(b)u.aZ(F.m5(3,!1,1,new F.jS(d),e))
u.aZ(F.m5(1,!0,-1,new F.jT(d),e))
return u},
oT:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kg()
t=F.m2(a,new F.kh(s,1),b)
t.bM()
return t},
oX:function(a,b){return F.m4(15,30,b,a,new F.kk())},
oL:function(a){return F.m4(12,120,a,1,new F.k2(3,2))},
m4:function(a,b,c,d,e){var u=F.ki(a,b,new F.jQ(H.n(e,{func:1,ret:V.Z,args:[P.p]}),d,b,c),null)
if(u==null)return
u.ac()
u.bM()
return u},
oF:function(){var u,t={}
t.a=u
t.a=null
t.a=new F.jW()
return F.ki(4,4,new F.jX(t),null)},
ki:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.af,P.p,P.p]})
if(a<1)return
if(b<1)return
u=F.kE()
t=H.e([],[F.af])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dZ(g,g,new V.ay(p,0,0,1),g,g,new V.a6(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.bV(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.dZ(g,g,new V.ay(j,i,h,1),g,g,new V.a6(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.bV(d))}}u.d.hy(a+1,b+1,t)
return u},
cl:function(a,b,c){var u=new F.a5(),t=a.a
if(t==null)H.y(P.C("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.y(P.C("May not create a face with vertices attached to different shapes."))
u.bK(a)
u.bL(b)
u.hb(c)
C.a.h(u.a.a.d.b,u)
u.a.a.W()
return u},
n1:function(a,b){var u=new F.bi(),t=a.a
if(t==null)H.y(P.C("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.y(P.C("May not create a line with vertices attached to different shapes."))
u.bK(a)
u.bL(b)
C.a.h(u.a.a.c.b,u)
u.a.a.W()
return u},
kE:function(){var u=new F.bY(),t=new F.iC(u)
t.b=!1
t.shu(H.e([],[F.af]))
u.a=t
t=new F.hK(u)
t.sbD(H.e([],[F.by]))
u.b=t
t=new F.hJ(u)
t.seX(H.e([],[F.bi]))
u.c=t
t=new F.hI(u)
t.seQ(H.e([],[F.a5]))
u.d=t
u.e=null
return u},
dZ:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.af(),r=new F.iK()
r.sbD(H.e([],[F.by]))
s.b=r
r=new F.iG()
u=[F.bi]
r.seY(H.e([],u))
r.seZ(H.e([],u))
s.c=r
r=new F.iD()
u=[F.a5]
r.seR(H.e([],u))
r.seS(H.e([],u))
r.seT(H.e([],u))
s.d=r
h=$.my()
s.e=0
r=$.bs()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.br().a)!==0?e:t
s.x=(u&$.bq().a)!==0?b:t
s.y=(u&$.bG().a)!==0?f:t
s.z=(u&$.bH().a)!==0?g:t
s.Q=(u&$.mz().a)!==0?c:t
s.ch=(u&$.cf().a)!==0?i:0
s.cx=(u&$.bp().a)!==0?a:t
return s},
jD:function jD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jP:function jP(a,b){this.a=a
this.b=b},
jR:function jR(a){this.a=a},
jS:function jS(a){this.a=a},
jT:function jT(a){this.a=a},
kg:function kg(){},
kh:function kh(a,b){this.a=a
this.b=b},
kk:function kk(){},
k2:function k2(a,b){this.a=a
this.b=b},
jQ:function jQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jW:function jW(){},
jX:function jX(a){this.a=a},
a5:function a5(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fw:function fw(){},
hO:function hO(){},
bi:function bi(){this.b=this.a=null},
fM:function fM(){},
ic:function ic(){},
by:function by(){this.a=null},
bY:function bY(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hI:function hI(a){this.a=a
this.b=null},
hJ:function hJ(a){this.a=a
this.b=null},
hK:function hK(a){this.a=a
this.b=null},
af:function af(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iM:function iM(a){this.a=a},
iL:function iL(a){this.a=a},
iC:function iC(a){this.a=a
this.c=this.b=null},
iD:function iD(){this.d=this.c=this.b=null},
iE:function iE(a,b){this.a=a
this.b=b},
iF:function iF(a,b){this.a=a
this.b=b},
iG:function iG(){this.c=this.b=null},
iI:function iI(){},
iH:function iH(){},
iJ:function iJ(){},
ho:function ho(){},
iK:function iK(){this.b=null}},T={dN:function dN(){}},K={
md:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="testCanvas",a=null,a0="modifiers",a1=V.nr("Test 035"),a2=W.l8()
a2.className="pageLargeCanvas"
a2.id=b
a1.a.appendChild(a2)
u=[P.h]
a1.dg(H.e(["A test of the bending a shape with the Material Light Shader. ","Not all of the shapes have predefined bend values."],u))
a1.hv(H.e(["shapes"],u))
a1.dg(H.e(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b)
if(t==null)H.y(P.C("Failed to find an element with the identifier, testCanvas."))
s=E.nv(t,!0,!0,!0,!1)
r=new E.an()
r.a=""
r.b=!0
a1=E.an
r.seH(0,O.ks(a1))
r.y.b5(r.gi9(),r.gic())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.scs(0,a)
r.sb_(a)
r.sb_(U.bO(a))
q=new O.ds()
q.seE(O.ks(V.am))
q.e.b5(q.gf8(),q.gfa())
p=new O.b6(q,"emission")
p.c=new A.al(!1,!1,!1)
p.f=new V.a1(0,0,0)
q.f=p
p=new O.b6(q,"ambient")
p.c=new A.al(!1,!1,!1)
p.f=new V.a1(0,0,0)
q.r=p
p=new O.b6(q,"diffuse")
p.c=new A.al(!1,!1,!1)
p.f=new V.a1(0,0,0)
q.x=p
p=new O.b6(q,"invDiffuse")
p.c=new A.al(!1,!1,!1)
p.f=new V.a1(0,0,0)
q.y=p
p=new O.h4(q,"specular")
p.c=new A.al(!1,!1,!1)
p.f=new V.a1(0,0,0)
p.ch=100
q.z=p
p=new O.h0(q,"bump")
p.c=new A.al(!1,!1,!1)
q.Q=p
q.ch=null
p=new O.b6(q,"reflect")
p.c=new A.al(!1,!1,!1)
p.f=new V.a1(0,0,0)
q.cx=p
p=new O.h3(q,"refract")
p.c=new A.al(!1,!1,!1)
p.f=new V.a1(0,0,0)
p.ch=1
q.cy=p
p=new O.h_(q,"alpha")
p.c=new A.al(!1,!1,!1)
p.f=1
q.db=p
p=new D.dn()
p.bm(D.a8)
p.seN(H.e([],[D.bf]))
p.sfX(H.e([],[D.dA]))
p.shi(H.e([],[D.dI]))
p.y=p.x=null
p.cr(p.gf6(),p.gfL(),p.gfP())
q.dx=p
o=new O.h2()
o.b=new V.ay(0,0,0,0)
o.c=1
o.d=10
o.e=!1
q.dy=o
o=p.x
p=o==null?p.x=D.R():o
p.h(0,q.gh7())
p=q.dx
o=p.y
p=o==null?p.y=D.R():o
p.h(0,q.gfe())
q.fr=null
p=q.dx
n=V.kJ()
o=U.bO(V.lf(V.ln(),n,new V.H(1,1,-3)))
m=new V.a1(1,1,1)
l=new D.bf()
l.c=new V.a1(1,1,1)
l.a=V.lG()
l.d=V.kJ()
l.e=V.nE()
k=l.b
l.b=o
o.gA().h(0,l.gem())
o=new D.K("mover",k,l.b,[U.a9])
o.b=!0
l.an(o)
if(!l.c.q(0,m)){k=l.c
l.c=m
o=new D.K("color",k,m,[V.a1])
o.b=!0
l.an(o)}p.h(0,l)
p=q.r
p.saT(0,new V.a1(0,0,1))
p=q.x
p.saT(0,new V.a1(0,1,0))
p=q.z
p.saT(0,new V.a1(1,0,0))
p=q.z
p.d7(new A.al(!0,!1,!1))
p.d8(10)
q.e.h(0,V.ao())
q.e.h(0,V.ao())
q.e.h(0,V.ao())
q.e.h(0,V.ao())
q.e.h(0,V.ao())
q.e.h(0,V.ao())
q.e.h(0,V.ao())
q.e.h(0,V.ao())
j=U.kv()
p=s.r
o=new U.dX()
l=U.kt()
l.scq(0,!0)
l.sc9(6.283185307179586)
l.scb(0)
l.sV(0,0)
l.sca(100)
l.sR(0)
l.sbW(0.5)
o.b=l
i=o.gaD()
l.gA().h(0,i)
l=U.kt()
l.scq(0,!0)
l.sc9(6.283185307179586)
l.scb(0)
l.sV(0,0)
l.sca(100)
l.sR(0)
l.sbW(0.5)
o.c=l
l.gA().h(0,i)
o.d=null
o.r=o.f=o.e=!1
o.y=o.x=2.5
o.Q=4
o.ch=o.cx=!1
o.db=o.cy=0
o.dx=null
o.dy=0
o.fx=o.fr=null
h=new X.av(!1,!1,!1)
k=o.d
o.d=h
l=[X.av]
i=new D.K(a0,k,h,l)
i.b=!0
o.D(i)
i=o.f
if(i!==!1){o.f=!1
i=new D.K("invertX",i,!1,[P.ab])
i.b=!0
o.D(i)}i=o.r
if(i!==!1){o.r=!1
i=new D.K("invertY",i,!1,[P.ab])
i.b=!0
o.D(i)}o.aS(p)
j.h(0,o)
p=s.r
o=new U.dW()
i=U.kt()
i.scq(0,!0)
i.sc9(6.283185307179586)
i.scb(0)
i.sV(0,0)
i.sca(100)
i.sR(0)
i.sbW(0.2)
o.b=i
i.gA().h(0,o.gaD())
o.c=null
o.d=!1
o.e=2.5
o.r=4
o.x=o.y=!1
o.z=0
o.Q=null
o.ch=0
o.cy=o.cx=null
h=new X.av(!0,!1,!1)
k=o.c
o.c=h
i=new D.K(a0,k,h,l)
i.b=!0
o.D(i)
o.aS(p)
j.h(0,o)
p=s.r
o=new U.dY()
o.c=0.01
o.e=o.d=0
h=new X.av(!1,!1,!1)
o.b=h
l=new D.K(a0,a,h,l)
l.b=!0
o.D(l)
o.aS(p)
j.h(0,o)
j.h(0,U.bO(V.hb(0,0,5)))
g=U.kv()
g.h(0,U.bO(V.hb(0.5,0,0)))
g.h(0,U.cB(0,1.7,0))
g.h(0,U.cB(0.5,0,0))
g.h(0,U.bO(V.kC(0.35)))
g.h(0,U.cB(-0.5,0,0))
g.h(0,U.cB(0,-1.7,0))
g.h(0,U.bO(V.hb(-0.5,0,0)))
f=U.kv()
f.h(0,U.cB(0,-1.4,0))
f.h(0,U.bO(V.hb(0.5,0,0)))
f.h(0,U.cB(0,1.4,0))
e=new M.dg()
e.a=!0
e.seq(0,O.ks(a1))
e.e.b5(e.gfg(),e.gfi())
e.y=e.x=e.r=e.f=null
d=X.mW(a)
c=new X.dz()
c.c=1.0471975511965976
c.d=0.1
c.e=2000
c.sb_(a)
a1=c.c
if(!(Math.abs(a1-1.0471975511965976)<$.I().a)){c.c=1.0471975511965976
a1=new D.K("fov",a1,1.0471975511965976,[P.p])
a1.b=!0
c.aE(a1)}a1=c.d
if(!(Math.abs(a1-0.1)<$.I().a)){c.d=0.1
a1=new D.K("near",a1,0.1,[P.p])
a1.b=!0
c.aE(a1)}a1=c.e
if(!(Math.abs(a1-2000)<$.I().a)){c.e=2000
a1=new D.K("far",a1,2000,[P.p])
a1.b=!0
c.aE(a1)}a1=e.b
if(a1!==c){if(a1!=null)a1.gA().K(0,e.gai())
k=e.b
e.b=c
c.gA().h(0,e.gai())
a1=new D.K("camera",k,e.b,[X.da])
a1.b=!0
e.ao(a1)}a1=e.c
if(a1!==d){if(a1!=null)a1.gA().K(0,e.gai())
k=e.c
e.c=d
d.gA().h(0,e.gai())
a1=new D.K("target",k,e.c,[X.dM])
a1.b=!0
e.ao(a1)}e.se_(a)
e.se_(q)
e.e.h(0,r)
e.b.sb_(j)
a1=e.f
if(a1==null)a1=e.f=D.R()
a1.h(0,new K.k4(g,f,q))
a1=s.d
if(a1!==e){if(a1!=null)a1.gA().K(0,s.gcz())
s.d=e
e.gA().h(0,s.gcz())
s.cA()}a1=new K.kc(r)
p=new V.hx("shapes")
u=u.getElementById("shapes")
p.c=u
if(u==null)H.y("Failed to find shapes for RadioGroup")
p.df(0,"Cuboid",new K.k5(a1),!0)
p.aI(0,"Cylinder",new K.k6(a1))
p.aI(0,"Cone",new K.k7(a1))
p.aI(0,"Sphere",new K.k8(a1))
p.aI(0,"Toroid",new K.k9(a1))
p.aI(0,"Knot",new K.ka(a1))
p.aI(0,"Grid",new K.kb(a1))
V.oS(s)},
k4:function k4(a,b,c){this.a=a
this.b=b
this.c=c},
kc:function kc(a){this.a=a},
k5:function k5(a){this.a=a},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a},
k9:function k9(a){this.a=a},
ka:function ka(a){this.a=a},
kb:function kb(a){this.a=a}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kz.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gG:function(a){return H.cA(a)},
i:function(a){return"Instance of '"+H.bV(a)+"'"}}
J.fG.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iab:1}
J.dk.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.dl.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.ht.prototype={}
J.bB.prototype={}
J.bh.prototype={
i:function(a){var u=a[$.mm()]
if(u==null)return this.ee(a)
return"JavaScript function for "+H.k(J.as(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iku:1}
J.aM.prototype={
h:function(a,b){H.A(b,H.u(a,0))
if(!!a.fixed$length)H.y(P.F("add"))
a.push(b)},
dV:function(a,b){if(!!a.fixed$length)H.y(P.F("removeAt"))
if(b<0||b>=a.length)throw H.d(P.dD(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var u
if(!!a.fixed$length)H.y(P.F("remove"))
for(u=0;u<a.length;++u)if(J.O(a[u],b)){a.splice(u,1)
return!0}return!1},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.d(P.bN(a))}},
u:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.k(a[u]))
return t.join(b)},
i4:function(a){return this.u(a,"")},
hZ:function(a,b,c,d){var u,t,s
H.A(b,d)
H.n(c,{func:1,ret:d,args:[d,H.u(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.d(P.bN(a))}return t},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
ec:function(a,b,c){if(b<0||b>a.length)throw H.d(P.ad(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.ad(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.u(a,0)])
return H.e(a.slice(b,c),[H.u(a,0)])},
ghY:function(a){if(a.length>0)return a[0]
throw H.d(H.lb())},
gax:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.lb())},
b6:function(a,b,c,d){var u,t,s=H.u(a,0)
H.m(d,"$ij",[s],"$aj")
if(!!a.immutable$list)H.y(P.F("setRange"))
P.bm(b,c,a.length)
u=c-b
if(u===0)return
P.kD(0,"skipCount")
H.m(d,"$ib",[s],"$ab")
s=J.cb(d)
if(u>s.gl(d))throw H.d(H.mZ())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
bl:function(a,b){var u=H.u(a,0)
H.n(b,{func:1,ret:P.l,args:[u,u]})
if(!!a.immutable$list)H.y(P.F("sort"))
H.dH(a,0,a.length-1,b,u)},
at:function(a,b){var u
for(u=0;u<a.length;++u)if(J.O(a[u],b))return!0
return!1},
i:function(a){return P.kw(a,"[","]")},
gX:function(a){return new J.at(a,a.length,[H.u(a,0)])},
gG:function(a){return H.cA(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.y(P.F("set length"))
if(b<0)throw H.d(P.ad(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.d(H.c9(a,b))
return a[b]},
k:function(a,b,c){H.A(c,H.u(a,0))
if(!!a.immutable$list)H.y(P.F("indexed set"))
if(b>=a.length||b<0)throw H.d(H.c9(a,b))
a[b]=c},
n:function(a,b){var u,t=[H.u(a,0)]
H.m(b,"$ib",t,"$ab")
u=C.e.n(a.length,b.gl(b))
t=H.e([],t)
this.sl(t,u)
this.b6(t,0,a.length,a)
this.b6(t,a.length,u,b)
return t},
$ij:1,
$ib:1}
J.ky.prototype={}
J.at.prototype={
gP:function(a){return this.d},
H:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.w(s))
u=t.c
if(u>=r){t.scP(null)
return!1}t.scP(s[u]);++t.c
return!0},
scP:function(a){this.d=H.A(a,H.u(this,0))},
$ib3:1}
J.bw.prototype={
hJ:function(a,b){var u
H.me(b)
if(typeof b!=="number")throw H.d(H.ar(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbd(b)
if(this.gbd(a)===u)return 0
if(this.gbd(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbd:function(a){return a===0?1/a<0:a<0},
dz:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.F(""+a+".floor()"))},
ae:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.F(""+a+".round()"))},
e1:function(a,b){var u
if(b>20)throw H.d(P.ad(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbd(a))return"-"+u
return u},
b2:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.ad(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.T(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.y(P.F("Unexpected toString result: "+u))
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
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
n:function(a,b){if(typeof b!=="number")throw H.d(H.ar(b))
return a+b},
p:function(a,b){if(typeof b!=="number")throw H.d(H.ar(b))
return a-b},
m:function(a,b){if(typeof b!=="number")throw H.d(H.ar(b))
return a*b},
b4:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eg:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.da(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.da(a,b)},
da:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.F("Result of truncating division is "+H.k(u)+": "+H.k(a)+" ~/ "+b))},
aH:function(a,b){var u
if(a>0)u=this.d9(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hg:function(a,b){if(b<0)throw H.d(H.ar(b))
return this.d9(a,b)},
d9:function(a,b){return b>31?0:a>>>b},
aa:function(a,b){if(typeof b!=="number")throw H.d(H.ar(b))
return a>b},
$ip:1,
$ia7:1}
J.dj.prototype={$il:1}
J.fH.prototype={}
J.bg.prototype={
T:function(a,b){if(b<0)throw H.d(H.c9(a,b))
if(b>=a.length)H.y(H.c9(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(b>=a.length)throw H.d(H.c9(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.d(P.kq(b,null,null))
return a+b},
aN:function(a,b,c,d){var u,t
c=P.bm(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a4:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.ad(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a3:function(a,b){return this.a4(a,b,0)},
w:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.y(H.ar(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.N()
if(b<0)throw H.d(P.dD(b,null))
if(b>c)throw H.d(P.dD(b,null))
if(c>a.length)throw H.d(P.dD(c,null))
return a.substring(b,c)},
ab:function(a,b){return this.w(a,b,null)},
m:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.G)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a7:function(a,b){var u=b-a.length
if(u<=0)return a
return this.m(" ",u)+a},
dG:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.ad(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dF:function(a,b){return this.dG(a,b,0)},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ilk:1,
$ih:1}
H.a4.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.b.T(this.a,b)},
$acK:function(){return[P.l]},
$av:function(){return[P.l]},
$aj:function(){return[P.l]},
$ab:function(){return[P.l]}}
H.fr.prototype={}
H.dp.prototype={
gP:function(a){return this.d},
H:function(){var u,t=this,s=t.a,r=J.cb(s),q=r.gl(s)
if(t.b!==q)throw H.d(P.bN(s))
u=t.c
if(u>=q){t.saP(null)
return!1}t.saP(r.J(s,u));++t.c
return!0},
saP:function(a){this.d=H.A(a,H.u(this,0))},
$ib3:1}
H.fX.prototype={
gX:function(a){return new H.fY(J.bI(this.a),this.b,this.$ti)},
gl:function(a){return J.aK(this.a)},
J:function(a,b){return this.b.$1(J.kp(this.a,b))},
$aj:function(a,b){return[b]}}
H.fY.prototype={
H:function(){var u=this,t=u.b
if(t.H()){u.saP(u.c.$1(t.gP(t)))
return!0}u.saP(null)
return!1},
gP:function(a){return this.a},
saP:function(a){this.a=H.A(a,H.u(this,1))},
$ab3:function(a,b){return[b]}}
H.iP.prototype={
gX:function(a){return new H.iQ(J.bI(this.a),this.b,this.$ti)}}
H.iQ.prototype={
H:function(){var u,t
for(u=this.a,t=this.b;u.H();)if(H.E(t.$1(u.gP(u))))return!0
return!1},
gP:function(a){var u=this.a
return u.gP(u)}}
H.bQ.prototype={}
H.cK.prototype={
k:function(a,b,c){H.A(c,H.ax(this,"cK",0))
throw H.d(P.F("Cannot modify an unmodifiable list"))}}
H.dT.prototype={}
H.fe.prototype={
i:function(a){return P.kB(this)},
k:function(a,b,c){H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
return H.mR()},
$iz:1}
H.ff.prototype={
gl:function(a){return this.a},
bc:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bc(0,b))return
return this.cR(b)},
cR:function(a){return this.b[H.M(a)]},
I:function(a,b){var u,t,s,r,q=this,p=H.u(q,1)
H.n(b,{func:1,ret:-1,args:[H.u(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.A(q.cR(r),p))}}}
H.i9.prototype={
a6:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hp.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.k(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fJ.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.k(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.k(t.a)+")"
return s+r+"' on '"+u+"' ("+H.k(t.a)+")"}}
H.io.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kl.prototype={
$1:function(a){if(!!J.U(a).$ibu)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:24}
H.ew.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iap:1}
H.ci.prototype={
i:function(a){return"Closure '"+H.bV(this).trim()+"'"},
$iku:1,
giI:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i_.prototype={}
H.hS.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ce(u)+"'"}}
H.cg.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cg))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.cA(this.a)
else u=typeof t!=="object"?J.d4(t):H.cA(t)
return(u^H.cA(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.bV(u)+"'")}}
H.ib.prototype={
i:function(a){return this.a}}
H.fa.prototype={
i:function(a){return this.a}}
H.hF.prototype={
i:function(a){return"RuntimeError: "+H.k(this.a)}}
H.iR.prototype={
i:function(a){return"Assertion failed: "+P.dh(this.a)}}
H.Y.prototype={
gl:function(a){return this.a},
gal:function(a){return new H.fO(this,[H.u(this,0)])},
bc:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cM(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cM(t,b)}else return s.i1(b)},
i1:function(a){var u=this,t=u.d
if(t==null)return!1
return u.c6(u.bs(t,u.c5(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b7(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b7(r,b)
s=t==null?null:t.b
return s}else return q.i2(b)},
i2:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bs(r,s.c5(a))
t=s.c6(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.A(b,H.u(s,0))
H.A(c,H.u(s,1))
if(typeof b==="string"){u=s.b
s.cE(u==null?s.b=s.bB():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cE(t==null?s.c=s.bB():t,b,c)}else s.i3(b,c)},
i3:function(a,b){var u,t,s,r,q=this
H.A(a,H.u(q,0))
H.A(b,H.u(q,1))
u=q.d
if(u==null)u=q.d=q.bB()
t=q.c5(a)
s=q.bs(u,t)
if(s==null)q.bI(u,t,[q.bC(a,b)])
else{r=q.c6(s,a)
if(r>=0)s[r].b=b
else s.push(q.bC(a,b))}},
I:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.u(s,0),H.u(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.d(P.bN(s))
u=u.c}},
cE:function(a,b,c){var u,t=this
H.A(b,H.u(t,0))
H.A(c,H.u(t,1))
u=t.b7(a,b)
if(u==null)t.bI(a,b,t.bC(b,c))
else u.b=c},
bC:function(a,b){var u=this,t=new H.fN(H.A(a,H.u(u,0)),H.A(b,H.u(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
c5:function(a){return J.d4(a)&0x3ffffff},
c6:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.O(a[t].a,b))return t
return-1},
i:function(a){return P.kB(this)},
b7:function(a,b){return a[b]},
bs:function(a,b){return a[b]},
bI:function(a,b,c){a[b]=c},
eL:function(a,b){delete a[b]},
cM:function(a,b){return this.b7(a,b)!=null},
bB:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bI(t,u,t)
this.eL(t,u)
return t}}
H.fN.prototype={}
H.fO.prototype={
gl:function(a){return this.a.a},
gX:function(a){var u=this.a,t=new H.fP(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fP.prototype={
gP:function(a){return this.d},
H:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bN(t))
else{t=u.c
if(t==null){u.scD(null)
return!1}else{u.scD(t.a)
u.c=u.c.c
return!0}}},
scD:function(a){this.d=H.A(a,H.u(this,0))},
$ib3:1}
H.jZ.prototype={
$1:function(a){return this.a(a)},
$S:24}
H.k_.prototype={
$2:function(a,b){return this.a(a,b)},
$S:51}
H.k0.prototype={
$1:function(a){return this.a(H.M(a))},
$S:46}
H.fI.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ilk:1,
$inn:1}
H.cv.prototype={$icv:1}
H.bx.prototype={$ibx:1}
H.dv.prototype={
gl:function(a){return a.length},
$iJ:1,
$aJ:function(){}}
H.cw.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]},
k:function(a,b,c){H.oz(c)
H.be(b,a,a.length)
a[b]=c},
$abQ:function(){return[P.p]},
$av:function(){return[P.p]},
$ij:1,
$aj:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.dw.prototype={
k:function(a,b,c){H.a_(c)
H.be(b,a,a.length)
a[b]=c},
$abQ:function(){return[P.l]},
$av:function(){return[P.l]},
$ij:1,
$aj:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]}}
H.hj.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.hk.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.hl.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.hm.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.hn.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.dx.prototype={
gl:function(a){return a.length},
j:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.cx.prototype={
gl:function(a){return a.length},
j:function(a,b){H.be(b,a,a.length)
return a[b]},
$icx:1,
$iQ:1}
H.cP.prototype={}
H.cQ.prototype={}
H.cR.prototype={}
H.cS.prototype={}
P.iT.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:19}
P.iS.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:45}
P.iU.prototype={
$0:function(){this.a.$0()},
$S:0}
P.iV.prototype={
$0:function(){this.a.$0()},
$S:0}
P.eC.prototype={
ev:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c8(new P.jt(this,b),0),a)
else throw H.d(P.F("`setTimeout()` not found."))},
ew:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c8(new P.js(this,a,Date.now(),b),0),a)
else throw H.d(P.F("Periodic timer."))},
$ib9:1}
P.jt.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.js.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.eg(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bd.prototype={
i6:function(a){if(this.c!==6)return!0
return this.b.b.cl(H.n(this.d,{func:1,ret:P.ab,args:[P.P]}),a.a,P.ab,P.P)},
i0:function(a){var u=this.e,t=P.P,s={futureOr:1,type:H.u(this,1)},r=this.b.b
if(H.eS(u,{func:1,args:[P.P,P.ap]}))return H.kW(r.ix(u,a.a,a.b,null,t,P.ap),s)
else return H.kW(r.cl(H.n(u,{func:1,args:[P.P]}),a.a,null,t),s)}}
P.aH.prototype={
e0:function(a,b,c){var u,t,s,r=H.u(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.X
if(u!==C.f){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.oo(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aH($.X,[c])
s=b==null?1:3
this.cF(new P.bd(t,s,a,b,[r,c]))
return t},
iA:function(a,b){return this.e0(a,null,b)},
cF:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ibd")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaH")
s=u.a
if(s<4){u.cF(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.jN(null,null,s,H.n(new P.j2(t,a),{func:1,ret:-1}))}},
d3:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ibd")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaH")
u=q.a
if(u<4){q.d3(a)
return}p.a=u
p.c=q.c}o.a=p.b9(a)
u=p.b
u.toString
P.jN(null,null,u,H.n(new P.j6(o,p),{func:1,ret:-1}))}},
bF:function(){var u=H.f(this.c,"$ibd")
this.c=null
return this.b9(u)},
b9:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cI:function(a){var u,t,s=this,r=H.u(s,0)
H.kW(a,{futureOr:1,type:r})
u=s.$ti
if(H.kT(a,"$icn",u,"$acn"))if(H.kT(a,"$iaH",u,null))P.lH(a,s)
else P.nJ(a,s)
else{t=s.bF()
H.A(a,r)
s.a=4
s.c=a
P.cN(s,t)}},
cJ:function(a,b){var u,t=this
H.f(b,"$iap")
u=t.bF()
t.a=8
t.c=new P.ak(a,b)
P.cN(t,u)},
$icn:1}
P.j2.prototype={
$0:function(){P.cN(this.a,this.b)},
$S:0}
P.j6.prototype={
$0:function(){P.cN(this.b,this.a.a)},
$S:0}
P.j3.prototype={
$1:function(a){var u=this.a
u.a=0
u.cI(a)},
$S:19}
P.j4.prototype={
$2:function(a,b){H.f(b,"$iap")
this.a.cJ(a,b)},
$1:function(a){return this.$2(a,null)},
$S:43}
P.j5.prototype={
$0:function(){this.a.cJ(this.b,this.c)},
$S:0}
P.j9.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dZ(H.n(s.d,{func:1}),null)}catch(r){u=H.aJ(r)
t=H.cc(r)
if(o.d){s=H.f(o.a.a.c,"$iak").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$iak")
else q.b=new P.ak(u,t)
q.a=!0
return}if(!!J.U(n).$icn){if(n instanceof P.aH&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$iak")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.iA(new P.ja(p),null)
s.a=!1}},
$S:3}
P.ja.prototype={
$1:function(a){return this.a},
$S:42}
P.j8.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.u(s,0)
q=H.A(n.c,r)
p=H.u(s,1)
n.a.b=s.b.b.cl(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aJ(o)
t=H.cc(o)
s=n.a
s.b=new P.ak(u,t)
s.a=!0}},
$S:3}
P.j7.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$iak")
r=m.c
if(H.E(r.i6(u))&&r.e!=null){q=m.b
q.b=r.i0(u)
q.a=!1}}catch(p){t=H.aJ(p)
s=H.cc(p)
r=H.f(m.a.a.c,"$iak")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ak(t,s)
n.a=!0}},
$S:3}
P.e0.prototype={}
P.hV.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.aH($.X,[P.l])
r.a=0
u=H.u(s,0)
t=H.n(new P.hX(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.hY(r,q),{func:1,ret:-1})
W.aa(s.a,s.b,t,!1,u)
return q}}
P.hX.prototype={
$1:function(a){H.A(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.u(this.b,0)]}}}
P.hY.prototype={
$0:function(){this.b.cI(this.a.a)},
$S:0}
P.cE.prototype={}
P.hW.prototype={}
P.b9.prototype={}
P.ak.prototype={
i:function(a){return H.k(this.a)},
$ibu:1}
P.jC.prototype={$ipu:1}
P.jM.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dy():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.i(0)
throw u},
$S:0}
P.jh.prototype={
iy:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.X){a.$0()
return}P.lS(r,r,this,a,-1)}catch(s){u=H.aJ(s)
t=H.cc(s)
P.jL(r,r,this,u,H.f(t,"$iap"))}},
iz:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.f===$.X){a.$1(b)
return}P.lT(r,r,this,a,b,-1,c)}catch(s){u=H.aJ(s)
t=H.cc(s)
P.jL(r,r,this,u,H.f(t,"$iap"))}},
hF:function(a,b){return new P.jj(this,H.n(a,{func:1,ret:b}),b)},
bO:function(a){return new P.ji(this,H.n(a,{func:1,ret:-1}))},
dh:function(a,b){return new P.jk(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
dZ:function(a,b){H.n(a,{func:1,ret:b})
if($.X===C.f)return a.$0()
return P.lS(null,null,this,a,b)},
cl:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.X===C.f)return a.$1(b)
return P.lT(null,null,this,a,b,c,d)},
ix:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.X===C.f)return a.$2(b,c)
return P.op(null,null,this,a,b,c,d,e,f)}}
P.jj.prototype={
$0:function(){return this.a.dZ(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.ji.prototype={
$0:function(){return this.a.iy(this.b)},
$S:3}
P.jk.prototype={
$1:function(a){var u=this.c
return this.a.iz(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.je.prototype={
gX:function(a){return P.lJ(this,this.r,H.u(this,0))},
gl:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.A(b,H.u(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cG(u==null?s.b=P.kM():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cG(t==null?s.c=P.kM():t,b)}else return s.ey(0,b)},
ey:function(a,b){var u,t,s,r=this
H.A(b,H.u(r,0))
u=r.d
if(u==null)u=r.d=P.kM()
t=r.cK(b)
s=u[t]
if(s==null)u[t]=[r.bo(b)]
else{if(r.cS(s,b)>=0)return!1
s.push(r.bo(b))}return!0},
K:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.h2(this.c,b)
else return this.h1(0,b)},
h1:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.eV(r,b)
t=s.cS(u,b)
if(t<0)return!1
s.dc(u.splice(t,1)[0])
return!0},
cG:function(a,b){H.A(b,H.u(this,0))
if(H.f(a[b],"$icO")!=null)return!1
a[b]=this.bo(b)
return!0},
h2:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$icO")
if(u==null)return!1
this.dc(u)
delete a[b]
return!0},
cW:function(){this.r=1073741823&this.r+1},
bo:function(a){var u,t=this,s=new P.cO(H.A(a,H.u(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cW()
return s},
dc:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cW()},
cK:function(a){return J.d4(a)&1073741823},
eV:function(a,b){return a[this.cK(b)]},
cS:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.O(a[t].a,b))return t
return-1}}
P.cO.prototype={}
P.jf.prototype={
gP:function(a){return this.d},
H:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bN(t))
else{t=u.c
if(t==null){u.scH(null)
return!1}else{u.scH(H.A(t.a,H.u(u,0)))
u.c=u.c.b
return!0}}},
scH:function(a){this.d=H.A(a,H.u(this,0))},
$ib3:1}
P.fQ.prototype={
$2:function(a,b){this.a.k(0,H.A(a,this.b),H.A(b,this.c))},
$S:7}
P.fR.prototype={$ij:1,$ib:1}
P.v.prototype={
gX:function(a){return new H.dp(a,this.gl(a),[H.bE(this,a,"v",0)])},
J:function(a,b){return this.j(a,b)},
iC:function(a,b){var u,t=this,s=H.e([],[H.bE(t,a,"v",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.k(s,u,t.j(a,u))
return s},
iB:function(a){return this.iC(a,!0)},
n:function(a,b){var u,t=this,s=[H.bE(t,a,"v",0)]
H.m(b,"$ib",s,"$ab")
u=H.e([],s)
C.a.sl(u,C.e.n(t.gl(a),b.gl(b)))
C.a.b6(u,0,t.gl(a),a)
C.a.b6(u,t.gl(a),u.length,b)
return u},
hW:function(a,b,c,d){var u
H.A(d,H.bE(this,a,"v",0))
P.bm(b,c,this.gl(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.kw(a,"[","]")}}
P.fU.prototype={}
P.fV.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.k(a)
t.a=u+": "
t.a+=H.k(b)},
$S:7}
P.ag.prototype={
I:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bE(s,a,"ag",0),H.bE(s,a,"ag",1)]})
for(u=J.bI(s.gal(a));u.H();){t=u.gP(u)
b.$2(t,s.j(a,t))}},
gl:function(a){return J.aK(this.gal(a))},
i:function(a){return P.kB(a)},
$iz:1}
P.ju.prototype={
k:function(a,b,c){H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
throw H.d(P.F("Cannot modify unmodifiable map"))}}
P.fW.prototype={
j:function(a,b){return J.d3(this.a,b)},
k:function(a,b,c){J.kn(this.a,H.A(b,H.u(this,0)),H.A(c,H.u(this,1)))},
I:function(a,b){J.l3(this.a,H.n(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]}))},
gl:function(a){return J.aK(this.a)},
i:function(a){return J.as(this.a)},
$iz:1}
P.dU.prototype={}
P.jl.prototype={
i:function(a){return P.kw(this,"{","}")},
J:function(a,b){var u,t,s,r=this
P.kD(b,"index")
for(u=P.lJ(r,r.r,H.u(r,0)),t=0;u.H();){s=u.d
if(b===t)return s;++t}throw H.d(P.V(b,r,"index",null,t))},
$ij:1,
$ils:1}
P.ef.prototype={}
P.eH.prototype={}
P.f6.prototype={
i8:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bm(a0,a1,b.length)
u=$.mB()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.E(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jY(C.b.E(b,n))
j=H.jY(C.b.E(b,n+1))
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
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.aj("")
g=r.a+=C.b.w(b,s,t)
r.a=g+H.dB(m)
s=n
continue}}throw H.d(P.a3("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.w(b,s,a1)
f=g.length
if(q>=0)P.l5(b,p,a1,q,o,f)
else{e=C.e.b4(f-1,4)+1
if(e===1)throw H.d(P.a3(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aN(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.l5(b,p,a1,q,o,d)
else{e=C.e.b4(d,4)
if(e===1)throw H.d(P.a3(c,b,a1))
if(e>1)b=C.b.aN(b,a1,a1,e===2?"==":"=")}return b},
$abM:function(){return[[P.b,P.l],P.h]}}
P.f7.prototype={
$abP:function(){return[[P.b,P.l],P.h]}}
P.bM.prototype={}
P.bP.prototype={}
P.fs.prototype={
$abM:function(){return[P.h,[P.b,P.l]]}}
P.iw.prototype={
ghV:function(){return C.H}}
P.iy.prototype={
bU:function(a){var u,t,s=P.bm(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jB(u)
if(t.eU(a,0,s)!==s)t.de(J.mJ(a,s-1),0)
return new Uint8Array(u.subarray(0,H.o_(0,t.b,u.length)))},
$abP:function(){return[P.h,[P.b,P.l]]}}
P.jB.prototype={
de:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eU:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.T(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.E(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.de(r,C.b.E(a,p)))s=p}else if(r<=2047){q=n.b
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
P.ix.prototype={
bU:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[P.l],"$ab")
u=P.nz(!1,a,0,null)
if(u!=null)return u
t=P.bm(0,null,J.aK(a))
s=P.lV(a,0,t)
if(s>0){r=P.cF(a,0,s)
if(s===t)return r
q=new P.aj(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.aj("")
n=new P.jA(!1,q)
n.c=o
n.hK(a,p,t)
if(n.e>0){H.y(P.a3("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.dB(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abP:function(){return[[P.b,P.l],P.h]}}
P.jA.prototype={
hK:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.m(a,"$ib",[P.l],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.cb(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.a9()
if((o&192)!==128){n=P.a3(h+C.e.b2(o,16),a,p)
throw H.d(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.c(C.t,n)
if(u<=C.t[n]){n=P.a3("Overlong encoding of 0x"+C.e.b2(u,16),a,p-s-1)
throw H.d(n)}if(u>1114111){n=P.a3("Character outside valid Unicode range: 0x"+C.e.b2(u,16),a,p-s-1)
throw H.d(n)}if(!i.c||u!==65279)q.a+=H.dB(u)
i.c=!1}for(n=p<c;n;){m=P.lV(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cF(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.N()
if(o<0){j=P.a3("Negative UTF-8 code unit: -0x"+C.e.b2(-o,16),a,k-1)
throw H.d(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a3(h+C.e.b2(o,16),a,k-1)
throw H.d(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.ab.prototype={}
P.au.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.au&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.e.aH(u,30))&1073741823},
i:function(a){var u=this,t=P.mS(H.nj(u)),s=P.dc(H.nh(u)),r=P.dc(H.nd(u)),q=P.dc(H.ne(u)),p=P.dc(H.ng(u)),o=P.dc(H.ni(u)),n=P.mT(H.nf(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.p.prototype={}
P.b1.prototype={
n:function(a,b){return new P.b1(C.e.n(this.a,b.gcQ()))},
p:function(a,b){return new P.b1(C.e.p(this.a,b.gcQ()))},
aa:function(a,b){return C.e.aa(this.a,b.gcQ())},
q:function(a,b){if(b==null)return!1
return b instanceof P.b1&&this.a===b.a},
gG:function(a){return C.e.gG(this.a)},
i:function(a){var u,t,s,r=new P.fq(),q=this.a
if(q<0)return"-"+new P.b1(0-q).i(0)
u=r.$1(C.e.a1(q,6e7)%60)
t=r.$1(C.e.a1(q,1e6)%60)
s=new P.fp().$1(q%1e6)
return""+C.e.a1(q,36e8)+":"+H.k(u)+":"+H.k(t)+"."+H.k(s)}}
P.fp.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:18}
P.fq.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:18}
P.bu.prototype={}
P.f0.prototype={
i:function(a){return"Assertion failed"}}
P.dy.prototype={
i:function(a){return"Throw of null."}}
P.aY.prototype={
gbq:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbp:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbq()+o+u
if(!q.a)return t
s=q.gbp()
r=P.dh(q.b)
return t+s+": "+r}}
P.bW.prototype={
gbq:function(){return"RangeError"},
gbp:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.k(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.k(s)
else if(t>s)u=": Not in range "+H.k(s)+".."+H.k(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.k(s)}return u}}
P.fF.prototype={
gbq:function(){return"RangeError"},
gbp:function(){var u,t=H.a_(this.b)
if(typeof t!=="number")return t.N()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.k(u)},
gl:function(a){return this.f}}
P.ip.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.il.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.dK.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fd.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dh(u)+"."}}
P.hs.prototype={
i:function(a){return"Out of Memory"},
$ibu:1}
P.dJ.prototype={
i:function(a){return"Stack Overflow"},
$ibu:1}
P.fk.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e8.prototype={
i:function(a){return"Exception: "+this.a}}
P.fC.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.w(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.E(f,q)
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
k=""}j=C.b.w(f,m,n)
return h+l+j+k+"\n"+C.b.m(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.k(g)+")"):h}}
P.l.prototype={}
P.j.prototype={
gl:function(a){var u,t=this.gX(this)
for(u=0;t.H();)++u
return u},
J:function(a,b){var u,t,s
P.kD(b,"index")
for(u=this.gX(this),t=0;u.H();){s=u.gP(u)
if(b===t)return s;++t}throw H.d(P.V(b,this,"index",null,t))},
i:function(a){return P.mY(this,"(",")")}}
P.b3.prototype={}
P.b.prototype={$ij:1}
P.z.prototype={}
P.L.prototype={
gG:function(a){return P.P.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.a7.prototype={}
P.P.prototype={constructor:P.P,$iP:1,
q:function(a,b){return this===b},
gG:function(a){return H.cA(this)},
i:function(a){return"Instance of '"+H.bV(this)+"'"},
toString:function(){return this.i(this)}}
P.ap.prototype={}
P.h.prototype={$ilk:1}
P.aj.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ip5:1}
P.iu.prototype={
$2:function(a,b){var u,t,s,r=P.h
H.m(a,"$iz",[r,r],"$az")
H.M(b)
u=J.kX(b).dF(b,"=")
if(u===-1){if(b!=="")J.kn(a,P.kO(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.w(b,0,u)
s=C.b.ab(b,u+1)
r=this.a
J.kn(a,P.kO(t,0,t.length,r,!0),P.kO(s,0,s.length,r,!0))}return a},
$S:41}
P.ir.prototype={
$2:function(a,b){throw H.d(P.a3("Illegal IPv4 address, "+a,this.a,b))},
$S:40}
P.is.prototype={
$2:function(a,b){throw H.d(P.a3("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:39}
P.it.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eV(C.b.w(this.b,a,b),null,16)
if(typeof u!=="number")return u.N()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:38}
P.c4.prototype={
ge7:function(){return this.b},
gc4:function(a){var u=this.c
if(u==null)return""
if(C.b.a3(u,"["))return C.b.w(u,1,u.length-1)
return u},
gbf:function(a){var u=this.d
if(u==null)return P.lK(this.a)
return u},
gce:function(a){var u=this.f
return u==null?"":u},
gdA:function(){var u=this.r
return u==null?"":u},
dW:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.m(b,"$iz",[P.h,null],"$az")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a3(p,"/"))p="/"+p
n=P.kN(null,0,0,b)
return new P.c4(u,s,q,r,p,n,m.r)},
gcf:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.h
s.sh0(new P.dU(P.lB(u==null?"":u),[t,t]))}return s.Q},
gdB:function(){return this.c!=null},
gdE:function(){return this.f!=null},
gdC:function(){return this.r!=null},
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
if(!!J.U(b).$ikH)if(s.a==b.gbk())if(s.c!=null===b.gdB())if(s.b==b.ge7())if(s.gc4(s)==b.gc4(b))if(s.gbf(s)==b.gbf(b))if(s.e===b.gdQ(b)){u=s.f
t=u==null
if(!t===b.gdE()){if(t)u=""
if(u===b.gce(b)){u=s.r
t=u==null
if(!t===b.gdC()){if(t)u=""
u=u===b.gdA()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gG:function(a){var u=this.z
return u==null?this.z=C.b.gG(this.i(0)):u},
sh0:function(a){var u=P.h
this.Q=H.m(a,"$iz",[u,u],"$az")},
$ikH:1,
gbk:function(){return this.a},
gdQ:function(a){return this.e}}
P.jv.prototype={
$1:function(a){throw H.d(P.a3("Invalid port",this.a,this.b+1))},
$S:37}
P.jw.prototype={
$1:function(a){return P.jz(C.O,a,C.h,!1)},
$S:36}
P.jy.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.k(P.jz(C.m,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.k(P.jz(C.m,b,C.h,!0))}},
$S:28}
P.jx.prototype={
$2:function(a,b){var u,t
H.M(a)
if(b==null||typeof b==="string")this.a.$2(a,H.M(b))
else for(u=J.bI(H.mc(b,"$ij")),t=this.a;u.H();)t.$2(a,H.M(u.gP(u)))},
$S:35}
P.iq.prototype={
ge6:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.c(o,0)
u=q.a
o=o[0]+1
t=C.b.dG(u,"?",o)
s=u.length
if(t>=0){r=P.cY(u,t+1,s,C.k,!1)
s=t}else r=p
return q.c=new P.iZ("data",p,p,p,P.cY(u,o,s,C.v,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.c(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jG.prototype={
$1:function(a){return new Uint8Array(96)},
$S:34}
P.jF.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.c(u,a)
u=u[a]
J.mK(u,0,96,b)
return u},
$S:32}
P.jH.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.E(b,s)^96
if(r>=t)return H.c(a,r)
a[r]=c}}}
P.jI.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.E(b,0),t=C.b.E(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.c(a,r)
a[r]=c}}}
P.jm.prototype={
gdB:function(){return this.c>0},
gdD:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.n()
t=this.e
if(typeof t!=="number")return H.q(t)
t=u+1<t
u=t}else u=!1
return u},
gdE:function(){var u=this.f
if(typeof u!=="number")return u.N()
return u<this.r},
gdC:function(){return this.r<this.a.length},
gcU:function(){return this.b===4&&C.b.a3(this.a,"http")},
gcV:function(){return this.b===5&&C.b.a3(this.a,"https")},
gbk:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcU())q=t.x="http"
else if(t.gcV()){t.x="https"
q="https"}else if(q===4&&C.b.a3(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a3(t.a,r)){t.x=r
q=r}else{q=C.b.w(t.a,0,q)
t.x=q}return q},
ge7:function(){var u=this.c,t=this.b+3
return u>t?C.b.w(this.a,t,u-1):""},
gc4:function(a){var u=this.c
return u>0?C.b.w(this.a,u,this.d):""},
gbf:function(a){var u,t=this
if(t.gdD()){u=t.d
if(typeof u!=="number")return u.n()
return P.eV(C.b.w(t.a,u+1,t.e),null,null)}if(t.gcU())return 80
if(t.gcV())return 443
return 0},
gdQ:function(a){return C.b.w(this.a,this.e,this.f)},
gce:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.N()
return u<t?C.b.w(this.a,u+1,t):""},
gdA:function(){var u=this.r,t=this.a
return u<t.length?C.b.ab(t,u+1):""},
gcf:function(){var u=this,t=u.f
if(typeof t!=="number")return t.N()
if(t>=u.r)return C.P
t=P.h
return new P.dU(P.lB(u.gce(u)),[t,t])},
dW:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.m(b,"$iz",[P.h,null],"$az")
u=k.gbk()
t=u==="file"
s=k.c
r=s>0?C.b.w(k.a,k.b+3,s):""
q=k.gdD()?k.gbf(k):j
s=k.c
if(s>0)p=C.b.w(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.w(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a3(o,"/"))o="/"+o
m=P.kN(j,0,0,b)
n=k.r
l=n<s.length?C.b.ab(s,n+1):j
return new P.c4(u,r,p,q,o,m,l)},
gG:function(a){var u=this.y
return u==null?this.y=C.b.gG(this.a):u},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.U(b).$ikH&&this.a===b.i(0)},
i:function(a){return this.a},
$ikH:1}
P.iZ.prototype={}
W.t.prototype={}
W.eW.prototype={
gl:function(a){return a.length}}
W.eY.prototype={
i:function(a){return String(a)}}
W.eZ.prototype={
i:function(a){return String(a)}}
W.bK.prototype={$ibK:1}
W.bL.prototype={
e9:function(a,b,c){var u=a.getContext(b,P.ow(c))
return u},
$ibL:1}
W.bt.prototype={
gl:function(a){return a.length}}
W.cj.prototype={$icj:1}
W.fg.prototype={
gl:function(a){return a.length}}
W.T.prototype={$iT:1}
W.ck.prototype={
gl:function(a){return a.length}}
W.fh.prototype={}
W.b_.prototype={}
W.b0.prototype={}
W.fi.prototype={
gl:function(a){return a.length}}
W.fj.prototype={
gl:function(a){return a.length}}
W.fl.prototype={
gl:function(a){return a.length}}
W.dd.prototype={$idd:1}
W.fm.prototype={
i:function(a){return String(a)}}
W.de.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.m(c,"$iah",[P.a7],"$aah")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[[P.ah,P.a7]]},
$av:function(){return[[P.ah,P.a7]]},
$ij:1,
$aj:function(){return[[P.ah,P.a7]]},
$ib:1,
$ab:function(){return[[P.ah,P.a7]]},
$aD:function(){return[[P.ah,P.a7]]}}
W.df.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gaB(a))+" x "+H.k(this.gav(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$iah)return!1
return a.left===u.gbe(b)&&a.top===u.gbg(b)&&this.gaB(a)===u.gaB(b)&&this.gav(a)===u.gav(b)},
gG:function(a){return W.lI(C.c.gG(a.left),C.c.gG(a.top),C.c.gG(this.gaB(a)),C.c.gG(this.gav(a)))},
gdi:function(a){return a.bottom},
gav:function(a){return a.height},
gbe:function(a){return a.left},
gck:function(a){return a.right},
gbg:function(a){return a.top},
gaB:function(a){return a.width},
$iah:1,
$aah:function(){return[P.a7]}}
W.fn.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.M(c)
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[P.h]},
$av:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aD:function(){return[P.h]}}
W.fo.prototype={
gl:function(a){return a.length}}
W.iX.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return H.f(u[b],"$ia2")},
k:function(a,b,c){var u
H.f(c,"$ia2")
u=this.b
if(b<0||b>=u.length)return H.c(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gX:function(a){var u=this.iB(this)
return new J.at(u,u.length,[H.u(u,0)])},
$av:function(){return[W.a2]},
$aj:function(){return[W.a2]},
$ab:function(){return[W.a2]}}
W.a2.prototype={
gbT:function(a){return new W.iX(a,a.children)},
gdj:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.N()
if(s<0)s=-s*0
if(typeof r!=="number")return r.N()
if(r<0)r=-r*0
return new P.ah(u,t,s,r,[P.a7])},
i:function(a){return a.localName},
$ia2:1}
W.o.prototype={$io:1}
W.i.prototype={
hw:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.ez(a,b,c,!1)},
ez:function(a,b,c,d){return a.addEventListener(b,H.c8(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ii:1}
W.aA.prototype={$iaA:1}
W.cm.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaA")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aA]},
$av:function(){return[W.aA]},
$ij:1,
$aj:function(){return[W.aA]},
$ib:1,
$ab:function(){return[W.aA]},
$icm:1,
$aD:function(){return[W.aA]}}
W.fx.prototype={
gl:function(a){return a.length}}
W.fB.prototype={
gl:function(a){return a.length}}
W.aL.prototype={$iaL:1}
W.fE.prototype={
gl:function(a){return a.length}}
W.bR.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.G]},
$av:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ibR:1,
$aD:function(){return[W.G]}}
W.cp.prototype={$icp:1}
W.cq.prototype={$icq:1}
W.b4.prototype={$ib4:1}
W.fS.prototype={
i:function(a){return String(a)}}
W.hc.prototype={
gl:function(a){return a.length}}
W.cs.prototype={$ics:1}
W.hd.prototype={
j:function(a,b){return P.bo(a.get(H.M(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bo(t.value[1]))}},
gal:function(a){var u=H.e([],[P.h])
this.I(a,new W.he(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.d(P.F("Not supported"))},
$aag:function(){return[P.h,null]},
$iz:1,
$az:function(){return[P.h,null]}}
W.he.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hf.prototype={
j:function(a,b){return P.bo(a.get(H.M(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bo(t.value[1]))}},
gal:function(a){var u=H.e([],[P.h])
this.I(a,new W.hg(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.d(P.F("Not supported"))},
$aag:function(){return[P.h,null]},
$iz:1,
$az:function(){return[P.h,null]}}
W.hg.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aN.prototype={$iaN:1}
W.hh.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaN")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aN]},
$av:function(){return[W.aN]},
$ij:1,
$aj:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aD:function(){return[W.aN]}}
W.ac.prototype={$iac:1}
W.iW.prototype={
k:function(a,b,c){var u,t
H.f(c,"$iG")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.c(t,b)
u.replaceChild(c,t[b])},
gX:function(a){var u=this.a.childNodes
return new W.di(u,u.length,[H.bE(C.Q,u,"D",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$av:function(){return[W.G]},
$aj:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
iv:function(a,b){var u,t
try{u=a.parentNode
J.mH(u,b,a)}catch(t){H.aJ(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.ed(a):u},
h5:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.cy.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.G]},
$av:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aD:function(){return[W.G]}}
W.aO.prototype={$iaO:1,
gl:function(a){return a.length}}
W.hu.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaO")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aO]},
$av:function(){return[W.aO]},
$ij:1,
$aj:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aD:function(){return[W.aO]}}
W.hD.prototype={
j:function(a,b){return P.bo(a.get(H.M(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bo(t.value[1]))}},
gal:function(a){var u=H.e([],[P.h])
this.I(a,new W.hE(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.d(P.F("Not supported"))},
$aag:function(){return[P.h,null]},
$iz:1,
$az:function(){return[P.h,null]}}
W.hE.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hG.prototype={
gl:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.hP.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaQ")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aQ]},
$av:function(){return[W.aQ]},
$ij:1,
$aj:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aD:function(){return[W.aQ]}}
W.aR.prototype={$iaR:1}
W.hQ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaR")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aR]},
$av:function(){return[W.aR]},
$ij:1,
$aj:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aD:function(){return[W.aR]}}
W.aS.prototype={$iaS:1,
gl:function(a){return a.length}}
W.hT.prototype={
j:function(a,b){return a.getItem(H.M(b))},
k:function(a,b,c){a.setItem(b,c)},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gal:function(a){var u=H.e([],[P.h])
this.I(a,new W.hU(u))
return u},
gl:function(a){return a.length},
$aag:function(){return[P.h,P.h]},
$iz:1,
$az:function(){return[P.h,P.h]}}
W.hU.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:28}
W.aD.prototype={$iaD:1}
W.bn.prototype={$ibn:1}
W.aT.prototype={$iaT:1}
W.aE.prototype={$iaE:1}
W.i0.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaE")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aE]},
$av:function(){return[W.aE]},
$ij:1,
$aj:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$aD:function(){return[W.aE]}}
W.i1.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaT")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aT]},
$av:function(){return[W.aT]},
$ij:1,
$aj:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aD:function(){return[W.aT]}}
W.i3.prototype={
gl:function(a){return a.length}}
W.aU.prototype={$iaU:1}
W.aV.prototype={$iaV:1}
W.i6.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaU")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aU]},
$av:function(){return[W.aU]},
$ij:1,
$aj:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aD:function(){return[W.aU]}}
W.i7.prototype={
gl:function(a){return a.length}}
W.bA.prototype={}
W.iv.prototype={
i:function(a){return String(a)}}
W.iN.prototype={
gl:function(a){return a.length}}
W.bc.prototype={
ghP:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.F("deltaY is not supported"))},
ghO:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.F("deltaX is not supported"))},
$ibc:1}
W.cM.prototype={
h6:function(a,b){return a.requestAnimationFrame(H.c8(H.n(b,{func:1,ret:-1,args:[P.a7]}),1))},
eO:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iY.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iT")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.T]},
$av:function(){return[W.T]},
$ij:1,
$aj:function(){return[W.T]},
$ib:1,
$ab:function(){return[W.T]},
$aD:function(){return[W.T]}}
W.e3.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$iah)return!1
return a.left===u.gbe(b)&&a.top===u.gbg(b)&&a.width===u.gaB(b)&&a.height===u.gav(b)},
gG:function(a){return W.lI(C.c.gG(a.left),C.c.gG(a.top),C.c.gG(a.width),C.c.gG(a.height))},
gav:function(a){return a.height},
gaB:function(a){return a.width}}
W.jb.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaL")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aL]},
$av:function(){return[W.aL]},
$ij:1,
$aj:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aD:function(){return[W.aL]}}
W.ek.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.G]},
$av:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aD:function(){return[W.G]}}
W.jn.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaS")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aS]},
$av:function(){return[W.aS]},
$ij:1,
$aj:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aD:function(){return[W.aS]}}
W.jr.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaD")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aD]},
$av:function(){return[W.aD]},
$ij:1,
$aj:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$aD:function(){return[W.aD]}}
W.j_.prototype={}
W.kL.prototype={}
W.j0.prototype={}
W.j1.prototype={
$1:function(a){return this.a.$1(H.f(a,"$io"))},
$S:31}
W.D.prototype={
gX:function(a){return new W.di(a,this.gl(a),[H.bE(this,a,"D",0)])}}
W.di.prototype={
H:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scT(J.d3(u.a,t))
u.c=t
return!0}u.scT(null)
u.c=s
return!1},
gP:function(a){return this.d},
scT:function(a){this.d=H.A(a,H.u(this,0))},
$ib3:1}
W.e2.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.el.prototype={}
W.em.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.cT.prototype={}
W.cU.prototype={}
W.es.prototype={}
W.et.prototype={}
W.ex.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.cV.prototype={}
W.cW.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
P.jo.prototype={
dw:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cp:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.U(a)
if(!!u.$iau)return new Date(a.a)
if(!!u.$inn)throw H.d(P.im("structured clone of RegExp"))
if(!!u.$iaA)return a
if(!!u.$ibK)return a
if(!!u.$icm)return a
if(!!u.$icp)return a
if(!!u.$icv||!!u.$ibx||!!u.$ics)return a
if(!!u.$iz){t=q.dw(a)
s=q.b
if(t>=s.length)return H.c(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.I(a,new P.jq(p,q))
return p.a}if(!!u.$ib){t=q.dw(a)
p=q.b
if(t>=p.length)return H.c(p,t)
r=p[t]
if(r!=null)return r
return q.hM(a,t)}throw H.d(P.im("structured clone of other type"))},
hM:function(a,b){var u,t=J.cb(a),s=t.gl(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.cp(t.j(a,u)))
return r}}
P.jq.prototype={
$2:function(a,b){this.a.a[a]=this.b.cp(b)},
$S:7}
P.jO.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.jp.prototype={}
P.fy.prototype={
gb8:function(){var u=this.b,t=H.ax(u,"v",0),s=W.a2
return new H.fX(new H.iP(u,H.n(new P.fz(),{func:1,ret:P.ab,args:[t]}),[t]),H.n(new P.fA(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.f(c,"$ia2")
u=this.gb8()
J.mL(u.b.$1(J.kp(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aK(this.gb8().a)},
j:function(a,b){var u=this.gb8()
return u.b.$1(J.kp(u.a,b))},
gX:function(a){var u=P.le(this.gb8(),!1,W.a2)
return new J.at(u,u.length,[H.u(u,0)])},
$av:function(){return[W.a2]},
$aj:function(){return[W.a2]},
$ab:function(){return[W.a2]}}
P.fz.prototype={
$1:function(a){return!!J.U(H.f(a,"$iG")).$ia2},
$S:30}
P.fA.prototype={
$1:function(a){return H.x(H.f(a,"$iG"),"$ia2")},
$S:29}
P.jg.prototype={
gck:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.q(t)
return H.A(u+t,H.u(this,0))},
gdi:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.q(t)
return H.A(u+t,H.u(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.k(u.a)+", "+H.k(u.b)+") "+H.k(u.c)+" x "+H.k(u.d)},
q:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.U(b)
if(!!u.$iah){t=p.a
if(t==u.gbe(b)){s=p.b
if(s==u.gbg(b)){r=p.c
if(typeof t!=="number")return t.n()
if(typeof r!=="number")return H.q(r)
q=H.u(p,0)
if(H.A(t+r,q)===u.gck(b)){t=p.d
if(typeof s!=="number")return s.n()
if(typeof t!=="number")return H.q(t)
u=H.A(s+t,q)===u.gdi(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t=this,s=t.a,r=J.d4(s),q=t.b,p=J.d4(q),o=t.c
if(typeof s!=="number")return s.n()
if(typeof o!=="number")return H.q(o)
u=H.u(t,0)
o=C.e.gG(H.A(s+o,u))
s=t.d
if(typeof q!=="number")return q.n()
if(typeof s!=="number")return H.q(s)
u=C.e.gG(H.A(q+s,u))
return P.nK(P.jd(P.jd(P.jd(P.jd(0,r),p),o),u))}}
P.ah.prototype={
gbe:function(a){return this.a},
gbg:function(a){return this.b},
gaB:function(a){return this.c},
gav:function(a){return this.d}}
P.b5.prototype={$ib5:1}
P.fL.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib5")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$av:function(){return[P.b5]},
$ij:1,
$aj:function(){return[P.b5]},
$ib:1,
$ab:function(){return[P.b5]},
$aD:function(){return[P.b5]}}
P.b8.prototype={$ib8:1}
P.hq.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib8")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$av:function(){return[P.b8]},
$ij:1,
$aj:function(){return[P.b8]},
$ib:1,
$ab:function(){return[P.b8]},
$aD:function(){return[P.b8]}}
P.hw.prototype={
gl:function(a){return a.length}}
P.hZ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.M(c)
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$av:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aD:function(){return[P.h]}}
P.r.prototype={
gbT:function(a){return new P.fy(a,new W.iW(a))}}
P.ba.prototype={$iba:1}
P.i8.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$iba")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$av:function(){return[P.ba]},
$ij:1,
$aj:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aD:function(){return[P.ba]}}
P.ed.prototype={}
P.ee.prototype={}
P.en.prototype={}
P.eo.prototype={}
P.ey.prototype={}
P.ez.prototype={}
P.eF.prototype={}
P.eG.prototype={}
P.Q.prototype={$ij:1,
$aj:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]}}
P.f2.prototype={
gl:function(a){return a.length}}
P.f3.prototype={
j:function(a,b){return P.bo(a.get(H.M(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bo(t.value[1]))}},
gal:function(a){var u=H.e([],[P.h])
this.I(a,new P.f4(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.d(P.F("Not supported"))},
$aag:function(){return[P.h,null]},
$iz:1,
$az:function(){return[P.h,null]}}
P.f4.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.f5.prototype={
gl:function(a){return a.length}}
P.bJ.prototype={}
P.hr.prototype={
gl:function(a){return a.length}}
P.e1.prototype={}
P.d6.prototype={$id6:1}
P.dC.prototype={$idC:1}
P.bX.prototype={
Z:function(a,b,c){return a.uniform1f(b,c)},
bi:function(a,b,c){return a.uniform1i(b,c)},
U:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
e3:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
e4:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
e5:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibX:1}
P.dG.prototype={$idG:1}
P.dS.prototype={$idS:1}
P.hR.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return P.bo(a.item(b))},
k:function(a,b,c){H.f(c,"$iz")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$av:function(){return[[P.z,,,]]},
$ij:1,
$aj:function(){return[[P.z,,,]]},
$ib:1,
$ab:function(){return[[P.z,,,]]},
$aD:function(){return[[P.z,,,]]}}
P.eu.prototype={}
P.ev.prototype={}
O.a0.prototype={
bm:function(a){var u=this
u.sf_(H.e([],[a]))
u.sd1(null)
u.scY(null)
u.sd2(null)},
cr:function(a,b,c){var u=this,t=H.ax(u,"a0",0)
H.n(b,{func:1,ret:P.ab,args:[[P.j,t]]})
t={func:1,ret:-1,args:[P.l,[P.j,t]]}
H.n(a,t)
H.n(c,t)
u.sd1(b)
u.scY(a)
u.sd2(c)},
b5:function(a,b){return this.cr(a,null,b)},
d0:function(a){var u
H.m(a,"$ij",[H.ax(this,"a0",0)],"$aj")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cX:function(a,b){var u
H.m(b,"$ij",[H.ax(this,"a0",0)],"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gX:function(a){var u=this.a
return new J.at(u,u.length,[H.u(u,0)])},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ax(s,"a0",0)
H.A(b,r)
r=[r]
if(H.E(s.d0(H.e([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.cX(t,H.e([b],r))}},
k:function(a,b,c){var u,t,s,r=this,q=H.ax(r,"a0",0)
H.A(c,q)
u=r.a
if(b>=u.length)return H.c(u,b)
t=u[b]
if(!J.O(t,c)&&H.E(r.d0(H.e([c],[q])))){C.a.k(r.a,b,c)
u=[q]
q=H.m(H.e([t],u),"$ij",[q],"$aj")
s=r.d
if(s!=null)s.$2(b,q)
r.cX(b,H.e([c],u))}},
sf_:function(a){this.a=H.m(a,"$ib",[H.ax(this,"a0",0)],"$ab")},
sd1:function(a){this.b=H.n(a,{func:1,ret:P.ab,args:[[P.j,H.ax(this,"a0",0)]]})},
scY:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.l,[P.j,H.ax(this,"a0",0)]]})},
sd2:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.l,[P.j,H.ax(this,"a0",0)]]})},
$ij:1}
O.cr.prototype={
gl:function(a){return this.a.length},
gA:function(){var u=this.b
return u==null?this.b=D.R():u},
aC:function(){var u=this.b
if(u!=null)u.F(null)},
gY:function(a){var u=this.a
if(u.length>0)return C.a.gax(u)
else return V.ao()},
dT:function(a){var u=this.a
if(a==null)C.a.h(u,V.ao())
else C.a.h(u,a)
this.aC()},
cd:function(){var u=this.a
if(u.length>0){u.pop()
this.aC()}},
sbt:function(a){this.a=H.m(a,"$ib",[V.am],"$ab")}}
E.f8.prototype={}
E.an.prototype={
scs:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gA().K(0,s.gdO())
u=s.c
if(u!=null)u.gA().h(0,s.gdO())
t=new D.K("shape",r,s.c,[F.bY])
t.b=!0
s.az(t)}},
sb_:function(a){var u,t,s=this
if(!J.O(s.r,a)){u=s.r
if(u!=null)u.gA().K(0,s.gdM())
if(a!=null)a.gA().h(0,s.gdM())
s.r=a
t=new D.K("mover",u,a,[U.a9])
t.b=!0
s.az(t)}},
am:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.a:null
if(!J.O(q,s.x)){u=s.x
s.x=q
t=new D.K("matrix",u,q,[V.am])
t.b=!0
s.az(t)}for(r=s.y.a,r=new J.at(r,r.length,[H.u(r,0)]);r.H();)r.d.am(0,b)},
aM:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gY(s))
else C.a.h(s.a,r.m(0,s.gY(s)))
s.aC()
a.dU(t.f)
s=a.dy
u=(s&&C.a).gax(s)
if(u!=null&&t.d!=null)u.iu(a,t)
for(s=t.y.a,s=new J.at(s,s.length,[H.u(s,0)]);s.H();)s.d.aM(a)
a.dS()
a.dx.cd()},
gA:function(){var u=this.z
return u==null?this.z=D.R():u},
az:function(a){var u=this.z
if(u!=null)u.F(a)},
W:function(){return this.az(null)},
dP:function(a){H.f(a,"$iB")
this.e=null
this.az(a)},
ih:function(){return this.dP(null)},
dN:function(a){this.az(H.f(a,"$iB"))},
ig:function(){return this.dN(null)},
dL:function(a){this.az(H.f(a,"$iB"))},
ib:function(){return this.dL(null)},
ia:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ij",[E.an],"$aj")
for(u=b.length,t=this.gdK(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.b2()
o.sa0(null)
o.sak(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sa0(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}this.W()},
ie:function(a,b){var u,t,s,r,q
H.m(b,"$ij",[E.an],"$aj")
for(u=b.length,t=this.gdK(),s=0;s<b.length;b.length===u||(0,H.w)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.b2()
q.sa0(null)
q.sak(null)
q.c=null
q.d=0
r.z=q}q.K(0,t)}}this.W()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seH:function(a,b){this.y=H.m(b,"$ia0",[E.an],"$aa0")},
$icu:1}
E.hz.prototype={
ei:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.au(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cr()
t=[V.am]
u.sbt(H.e([],t))
u.b=null
u.gA().h(0,new E.hA(s))
s.cy=u
u=new O.cr()
u.sbt(H.e([],t))
u.b=null
u.gA().h(0,new E.hB(s))
s.db=u
u=new O.cr()
u.sbt(H.e([],t))
u.b=null
u.gA().h(0,new E.hC(s))
s.dx=u
s.shk(H.e([],[O.bZ]))
u=s.dy;(u&&C.a).h(u,null)
s.shf(new H.Y([P.h,A.cC]))},
gir:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gY(s)
u=t.db
u=t.z=s.m(0,u.gY(u))
s=u}return s},
dU:function(a){var u=this.dy,t=a==null?(u&&C.a).gax(u):a;(u&&C.a).h(u,t)},
dS:function(){var u=this.dy
if(u.length>1)u.pop()},
shk:function(a){this.dy=H.m(a,"$ib",[O.bZ],"$ab")},
shf:function(a){this.fr=H.m(a,"$iz",[P.h,A.cC],"$az")}}
E.hA.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.ch=u.z=null},
$S:10}
E.hB.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:10}
E.hC.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.cx=u.ch=null},
$S:10}
E.dL.prototype={}
E.dO.prototype={
cB:function(a){H.f(a,"$iB")
this.dX()},
cA:function(){return this.cB(null)},
gi_:function(){var u,t=this,s=Date.now(),r=C.e.a1(P.la(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.au(s,!1)
return u/r},
d5:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.m()
if(typeof r!=="number")return H.q(r)
u=C.c.dz(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.m()
t=C.c.dz(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lv(C.o,s.giw())}},
dX:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.i2(this),{func:1,ret:-1,args:[P.a7]})
C.y.eO(u)
C.y.h6(u,W.lY(t,P.a7))}},
it:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.d5()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.au(r,!1)
s.y=P.la(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aC()
r=s.db
C.a.sl(r.a,0)
r.aC()
r=s.dx
C.a.sl(r.a,0)
r.aC()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aM(p.e)}}catch(q){u=H.aJ(q)
t=H.cc(q)
P.l_("Error: "+H.k(u))
P.l_("Stack: "+H.k(t))
throw H.d(u)}}}
E.i2.prototype={
$1:function(a){var u
H.me(a)
u=this.a
if(u.ch){u.ch=!1
u.it()}},
$S:53}
Z.e_.prototype={$ioY:1}
Z.d7.prototype={
bb:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aJ(s)
t=P.C('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.k(u))
throw H.d(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.k(u.e)+"]"}}
Z.iO.prototype={$ioZ:1}
Z.d8.prototype={
aK:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bb:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bb(a)},
e2:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aM:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.e([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(p,u[s].i(0))
r=H.e([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.as(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.u(p,", ")+"\nAttrs:   "+C.a.u(r,", ")},
seW:function(a){this.b=H.m(a,"$ib",[Z.bv],"$ab")},
$ip6:1}
Z.bv.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bV(this.c)+"'")+"]"}}
Z.bC.prototype={
gct:function(a){var u=this.a,t=(u&$.bs().a)!==0?3:0
if((u&$.br().a)!==0)t+=3
if((u&$.bq().a)!==0)t+=3
if((u&$.bG().a)!==0)t+=2
if((u&$.bH().a)!==0)t+=3
if((u&$.d1().a)!==0)t+=3
if((u&$.d2().a)!==0)t+=4
if((u&$.cf().a)!==0)++t
return(u&$.bp().a)!==0?t+4:t},
hB:function(a){var u,t=$.bs(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.br()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bq()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bG()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bH()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d1()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d2()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cf()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bp()
if((s&t.a)!==0)if(u===a)return t
return $.mA()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bC))return!1
return this.a===b.a},
i:function(a){var u=H.e([],[P.h]),t=this.a
if((t&$.bs().a)!==0)C.a.h(u,"Pos")
if((t&$.br().a)!==0)C.a.h(u,"Norm")
if((t&$.bq().a)!==0)C.a.h(u,"Binm")
if((t&$.bG().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bH().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d1().a)!==0)C.a.h(u,"Clr3")
if((t&$.d2().a)!==0)C.a.h(u,"Clr4")
if((t&$.cf().a)!==0)C.a.h(u,"Weight")
if((t&$.bp().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.u(u,"|")}}
D.fb.prototype={}
D.b2.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.B]}
H.n(b,u)
if(this.a==null)this.sa0(H.e([],[u]))
u=this.a;(u&&C.a).h(u,b)},
K:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.B]})
u=s.a
u=u==null?null:C.a.at(u,b)
if(u===!0){u=s.a
t=(u&&C.a).K(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.at(u,b)
if(u===!0){u=s.b
t=(u&&C.a).K(u,b)||t}return t},
F:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.I(P.le(u,!0,{func:1,ret:-1,args:[D.B]}),new D.fu(q))
u=r.b
if(u!=null){r.sak(H.e([],[{func:1,ret:-1,args:[D.B]}]))
C.a.I(u,new D.fv(q))}return!0},
ad:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.F(u)}}},
sa0:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")},
sak:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")}}
D.fu.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:27}
D.fv.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:27}
D.B.prototype={}
D.bS.prototype={}
D.bT.prototype={}
D.K.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}
X.d9.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d9))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.dm.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dm))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.fK.prototype={
im:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
ii:function(a){this.c=a.b
this.d.K(0,a.a)
return!1},
sh_:function(a){this.d=H.m(a,"$ils",[P.l],"$als")}}
X.dq.prototype={}
X.fT.prototype={
aQ:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.m()
u=b.b
t=q.ch
if(typeof u!=="number")return u.m()
s=new V.a6(o.a+n*m,o.b+u*t)
t=q.a.gaJ()
r=new X.bk(a,V.bz(),q.x,t,s)
r.b=!0
q.z=new P.au(p,!1)
q.x=s
return r},
cc:function(a,b){this.r=a.a
return!1},
b1:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.ea()
if(typeof u!=="number")return u.a9()
this.r=(u&~t)>>>0
return!1},
b0:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.aQ(a,b))
return!0},
io:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaJ()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.m()
q=a.b
p=o.cy
if(typeof q!=="number")return q.m()
t=new X.ct(new V.S(s*r,q*p),u,t)
t.b=!0
n.F(t)
return!0},
fA:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dq(c,r.a.gaJ(),b)
s.b=!0
t.F(s)
r.y=new P.au(u,!1)
r.x=V.bz()}}
X.av.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.av))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.E(this.b)?"Alt+":""
return u+(H.E(this.c)?"Shift+":"")}}
X.bk.prototype={}
X.hi.prototype={
br:function(a,b,c){var u=this,t=new P.au(Date.now(),!1),s=u.a.gaJ(),r=new X.bk(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cc:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.F(this.br(a,b,!0))
return!0},
b1:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.ea()
if(typeof t!=="number")return t.a9()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.F(u.br(a,b,!0))
return!0},
b0:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.br(a,b,!1))
return!0},
ip:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaJ()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.m()
r=a.b
q=p.ch
if(typeof r!=="number")return r.m()
u=new X.ct(new V.S(t*s,r*q),u,b)
u.b=!0
o.F(u)
return!0},
gdk:function(){var u=this.b
return u==null?this.b=D.R():u},
gco:function(){var u=this.c
return u==null?this.c=D.R():u},
gdJ:function(){var u=this.d
return u==null?this.d=D.R():u}}
X.ct.prototype={}
X.hv.prototype={}
X.dQ.prototype={}
X.i5.prototype={
aQ:function(a,b){var u,t,s,r,q=this
H.m(a,"$ib",[V.a6],"$ab")
u=new P.au(Date.now(),!1)
t=a.length>0?a[0]:V.bz()
s=q.a.gaJ()
r=new X.dQ(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
il:function(a){var u
H.m(a,"$ib",[V.a6],"$ab")
u=this.b
if(u==null)return!1
u.F(this.aQ(a,!0))
return!0},
ij:function(a){var u
H.m(a,"$ib",[V.a6],"$ab")
u=this.c
if(u==null)return!1
u.F(this.aQ(a,!0))
return!0},
ik:function(a){var u
H.m(a,"$ib",[V.a6],"$ab")
u=this.d
if(u==null)return!1
u.F(this.aQ(a,!1))
return!0}}
X.dV.prototype={
gaJ:function(){var u=this.a,t=C.n.gdj(u).c
t.toString
u=C.n.gdj(u).d
u.toString
return V.lq(0,0,t,u)},
cN:function(a){var u=a.keyCode,t=H.E(a.ctrlKey)||H.E(a.metaKey)
return new X.dm(u,new X.av(t,a.altKey,a.shiftKey))},
aG:function(a){var u=this.b,t=H.E(a.ctrlKey)||H.E(a.metaKey)
u.c=new X.av(t,a.altKey,a.shiftKey)},
bJ:function(a){var u=this.b,t=H.E(a.ctrlKey)||H.E(a.metaKey)
u.c=new X.av(t,a.altKey,a.shiftKey)},
as:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.p()
u=t.top
if(typeof r!=="number")return r.p()
return new V.a6(s-q,r-u)},
aR:function(a){return new V.S(a.movementX,a.movementY)},
bE:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.e([],[V.a6])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
q=C.c.ae(r.pageX)
C.c.ae(r.pageY)
p=o.left
C.c.ae(r.pageX)
C.a.h(n,new V.a6(q-p,C.c.ae(r.pageY)-o.top))}return n},
ap:function(a){var u=a.buttons,t=H.E(a.ctrlKey)||H.E(a.metaKey)
return new X.d9(u,new X.av(t,a.altKey,a.shiftKey))},
bu:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.p()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.p()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fs:function(a){this.f=!0},
fd:function(a){this.f=!1},
fl:function(a){H.f(a,"$iac")
if(H.E(this.f)&&this.bu(a))a.preventDefault()},
fw:function(a){var u
H.f(a,"$ib4")
if(!H.E(this.f))return
u=this.cN(a)
this.b.im(u)},
fu:function(a){var u
H.f(a,"$ib4")
if(!H.E(this.f))return
u=this.cN(a)
this.b.ii(u)},
fC:function(a){var u,t,s,r,q=this
H.f(a,"$iac")
u=q.a
u.focus()
q.f=!0
q.aG(a)
if(H.E(q.x)){t=q.ap(a)
s=q.aR(a)
if(q.d.cc(t,s))a.preventDefault()
return}if(H.E(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ap(a)
r=q.as(a)
if(q.c.cc(t,r))a.preventDefault()},
fG:function(a){var u,t,s,r=this
H.f(a,"$iac")
r.aG(a)
u=r.ap(a)
if(H.E(r.x)){t=r.aR(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.as(a)
if(r.c.b1(u,s))a.preventDefault()},
fp:function(a){var u,t,s,r=this
H.f(a,"$iac")
if(!r.bu(a)){r.aG(a)
u=r.ap(a)
if(H.E(r.x)){t=r.aR(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.as(a)
if(r.c.b1(u,s))a.preventDefault()}},
fE:function(a){var u,t,s,r=this
H.f(a,"$iac")
r.aG(a)
u=r.ap(a)
if(H.E(r.x)){t=r.aR(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.as(a)
if(r.c.b0(u,s))a.preventDefault()},
fn:function(a){var u,t,s,r=this
H.f(a,"$iac")
if(!r.bu(a)){r.aG(a)
u=r.ap(a)
if(H.E(r.x)){t=r.aR(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.as(a)
if(r.c.b0(u,s))a.preventDefault()}},
fI:function(a){var u,t,s=this
H.f(a,"$ibc")
s.aG(a)
u=new V.S((a&&C.x).ghO(a),C.x.ghP(a)).t(0,180)
if(H.E(s.x)){if(s.d.io(u))a.preventDefault()
return}if(H.E(s.r))return
t=s.as(a)
if(s.c.ip(u,t))a.preventDefault()},
fK:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ap(s.y)
t=s.as(s.y)
s.d.fA(u,t,r)}},
fW:function(a){var u,t=this
H.f(a,"$iaV")
t.a.focus()
t.f=!0
t.bJ(a)
u=t.bE(a)
if(t.e.il(u))a.preventDefault()},
fS:function(a){var u
H.f(a,"$iaV")
this.bJ(a)
u=this.bE(a)
if(this.e.ij(u))a.preventDefault()},
fU:function(a){var u
H.f(a,"$iaV")
this.bJ(a)
u=this.bE(a)
if(this.e.ik(u))a.preventDefault()},
seP:function(a){this.z=H.m(a,"$ib",[[P.cE,P.P]],"$ab")}}
D.bf.prototype={
gA:function(){var u=this.r
return u==null?this.r=D.R():u},
an:function(a){var u
H.f(a,"$iB")
u=this.r
if(u!=null)u.F(a)},
en:function(){return this.an(null)},
$ia8:1,
$icu:1}
D.a8.prototype={$icu:1}
D.dn.prototype={
gA:function(){var u=this.x
return u==null?this.x=D.R():u},
an:function(a){var u=this.x
if(u!=null)u.F(a)},
d_:function(a){var u
H.f(a,"$iB")
u=this.y
if(u!=null)u.F(a)},
fz:function(){return this.d_(null)},
fM:function(a){var u,t,s
H.m(a,"$ij",[D.a8],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.w)(a),++t){s=a[t]
if(s==null||this.eI(s))return!1}return!0},
f7:function(a,b){var u,t,s,r,q,p,o,n=D.a8
H.m(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gcZ(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=H.f(b[q],"$ia8")
if(p instanceof D.bf)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.b2()
o.sa0(null)
o.sak(null)
o.c=null
o.d=0
p.r=o}H.n(t,s)
if(o.a==null)o.sa0(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bS([n])
n.b=!0
this.an(n)},
fQ:function(a,b){var u,t,s,r,q,p=D.a8
H.m(b,"$ij",[p],"$aj")
for(u=b.length,t=this.gcZ(),s=0;s<b.length;b.length===u||(0,H.w)(b),++s){r=H.f(b[s],"$ia8")
if(r instanceof D.bf)C.a.K(this.e,r)
q=r.r
if(q==null){q=new D.b2()
q.sa0(null)
q.sak(null)
q.c=null
q.d=0
r.r=q}q.K(0,t)}p=new D.bT([p])
p.b=!0
this.an(p)},
eI:function(a){var u=C.a.at(this.e,a)
return u},
seN:function(a){this.e=H.m(a,"$ib",[D.bf],"$ab")},
sfX:function(a){this.f=H.m(a,"$ib",[D.dA],"$ab")},
shi:function(a){this.r=H.m(a,"$ib",[D.dI],"$ab")},
$aj:function(){return[D.a8]},
$aa0:function(){return[D.a8]}}
D.dA.prototype={$ia8:1,$icu:1}
D.dI.prototype={$ia8:1,$icu:1}
V.a1.prototype={
n:function(a,b){var u=C.c.n(this.a,b.gcg()),t=C.c.n(this.b,b.gbj()),s=C.c.n(this.c,b.gbP())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a1(u,t,s)},
p:function(a,b){var u=C.c.p(this.a,b.gcg()),t=C.c.p(this.b,b.gbj()),s=C.c.p(this.c,b.gbP())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a1(u,t,s)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.ay.prototype={
n:function(a,b){var u=this,t=C.c.n(u.a,b.gcg()),s=C.c.n(u.b,b.gbj()),r=C.c.n(u.c,b.gbP()),q=C.c.n(u.d,b.ghA(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.ay(t,s,r,q)},
p:function(a,b){var u=this,t=C.c.p(u.a,b.gcg()),s=C.c.p(u.b,b.gbj()),r=C.c.p(u.c,b.gbP()),q=C.c.p(u.d,b.ghA(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.ay(t,s,r,q)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ay))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.ft.prototype={}
V.du.prototype={
a8:function(a,b){var u=this,t=H.e([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.p])
return t},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.du))return!1
u=b.a
t=$.I()
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
if(typeof r!=="number")return H.q(r)
if(!(Math.abs(u-r)<s))return!1
u=b.x
t=q.x
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.q(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=q.y
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.q(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.p],o=V.ca(H.e([q.a,q.d,q.r],p),3,0),n=V.ca(H.e([q.b,q.e,q.x],p),3,0),m=V.ca(H.e([q.c,q.f,q.y],p),3,0)
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
V.am.prototype={
a8:function(a,b){var u=this,t=H.e([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.p])
return t},
dH:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a,c=e.f,b=e.b,a=e.e,a0=d*c-b*a,a1=e.r,a2=e.c,a3=d*a1-a2*a,a4=e.x,a5=e.d,a6=d*a4-a5*a,a7=b*a1-a2*c,a8=b*a4-a5*c,a9=a2*a4-a5*a1,b0=e.y,b1=e.cy
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
if(Math.abs(i-0)<$.I().a)return V.ao()
h=1/i
g=-a
f=-t
return V.b7((c*j-a1*k+a4*l)*h,(-b*j+a2*k-a5*l)*h,(b1*a9-r*a8+o*a7)*h,(-u*a9+q*a8-n*a7)*h,(g*j+a1*m-a4*p)*h,(d*j-a2*m+a5*p)*h,(f*a9+r*a6-o*a3)*h,(b0*a9-q*a6+n*a3)*h,(a*k-c*m+a4*s)*h,(-d*k+b*m-a5*s)*h,(t*a8-b1*a6+o*a0)*h,(-b0*a8+u*a6-n*a0)*h,(g*l+c*p-a1*s)*h,(d*l-b*p+a2*s)*h,(f*a7+b1*a3-r*a0)*h,(b0*a7-u*a3+q*a0)*h)},
m:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.a,a7=b3.a,a8=a5.b,a9=b3.e,b0=a5.c,b1=b3.y
if(typeof b1!=="number")return H.q(b1)
u=a5.d
t=b3.cx
s=b3.b
r=b3.f
q=b3.z
if(typeof q!=="number")return H.q(q)
p=b3.cy
o=b3.c
n=b3.r
m=b3.Q
if(typeof m!=="number")return H.q(m)
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
return V.b7(a6*a7+a8*a9+b0*b1+u*t,a6*s+a8*r+b0*q+u*p,a6*o+a8*n+b0*m+u*l,a6*k+a8*j+b0*i+u*h,g*a7+f*a9+e*b1+d*t,g*s+f*r+e*q+d*p,g*o+f*n+e*m+d*l,g*k+f*j+e*i+d*h,c*a7+b*a9+a*b1+a0*t,c*s+b*r+a*q+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,a1*a7+a2*a9+a3*b1+a4*t,a1*s+a2*r+a3*q+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h)},
bh:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.q(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.H(r.a*q+r.b*p+r.c*o,r.e*q+r.f*p+r.r*o,u*q+t*p+s*o)},
cn:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.q(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.Z(r.a*q+r.b*p+r.c*o+r.d,r.e*q+r.f*p+r.r*o+r.x,u*q+t*p+s*o+r.ch)},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.am))return!1
u=b.a
t=$.I()
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
if(typeof r!=="number")return H.q(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=q.z
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.q(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=q.Q
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.q(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-q.ch)<s))return!1
if(!(Math.abs(b.cx-q.cx)<s))return!1
if(!(Math.abs(b.cy-q.cy)<s))return!1
if(!(Math.abs(b.db-q.db)<s))return!1
if(!(Math.abs(b.dx-q.dx)<s))return!1
return!0},
i:function(a){return this.L()},
C:function(a){var u,t,s,r,q,p=this,o=[P.p],n=V.ca(H.e([p.a,p.e,p.y,p.cx],o),3,0),m=V.ca(H.e([p.b,p.f,p.z,p.cy],o),3,0),l=V.ca(H.e([p.c,p.r,p.Q,p.db],o),3,0),k=V.ca(H.e([p.d,p.x,p.ch,p.dx],o),3,0)
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
L:function(){return this.C("")}}
V.a6.prototype={
n:function(a,b){return new V.a6(this.a+b.a,this.b+b.b)},
p:function(a,b){return new V.a6(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.Z.prototype={
n:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.q(t)
return new V.Z(this.a+b.a,this.b+b.b,u+t)},
p:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.q(t)
return new V.Z(this.a-b.a,this.b-b.b,u-t)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.Z(this.a*b,this.b*b,u*b)},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.I()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.p()
if(typeof r!=="number")return H.q(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.aP.prototype={
n:function(a,b){var u=this
return new V.aP(C.c.n(u.a,b.giF(b)),C.c.n(u.b,b.giG(b)),C.c.n(u.c,b.giH(b)),C.c.n(u.d,b.giE(b)))},
p:function(a,b){var u=this
return new V.aP(C.c.p(u.a,b.giF(b)),C.c.p(u.b,b.giG(b)),C.c.p(u.c,b.giH(b)),C.c.p(u.d,b.giE(b)))},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aP))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.dE.prototype={
ga2:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dE))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.S.prototype={
c7:function(a){return Math.sqrt(this.B(this))},
B:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.q(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.q(t)
return s*r+u*t},
n:function(a,b){var u,t=this.a,s=b.gbX(b)
if(typeof t!=="number")return t.n()
s=C.c.n(t,s)
t=this.b
u=b.gbY(b)
if(typeof t!=="number")return t.n()
return new V.S(s,C.c.n(t,u))},
p:function(a,b){var u,t=this.a,s=b.gbX(b)
if(typeof t!=="number")return t.p()
s=C.c.p(t,s)
t=this.b
u=b.gbY(b)
if(typeof t!=="number")return t.p()
return new V.S(s,C.c.p(t,u))},
m:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.m()
u=this.b
if(typeof u!=="number")return u.m()
return new V.S(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.I().a){u=$.lC
return u==null?$.lC=new V.S(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.S(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=this.a
s=$.I()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.q(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.q(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.H.prototype={
c7:function(a){return Math.sqrt(this.B(this))},
B:function(a){var u=this.c,t=a.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.q(t)
return this.a*a.a+this.b*a.b+u*t},
c8:function(a,b){var u=this.a,t=this.b,s=this.c,r=a.c
if(typeof r!=="number")return r.p()
if(typeof s!=="number")return H.q(s)
return new V.H(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
au:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof p!=="number")return H.q(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.m()
s=a.a
r=this.a
return new V.H(q*p-u*t,u*s-r*p,r*t-q*s)},
n:function(a,b){var u=b.a,t=b.b,s=this.c,r=b.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.q(r)
return new V.H(this.a+u,this.b+t,s+r)},
p:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.q(t)
return new V.H(this.a-b.a,this.b-b.b,u-t)},
O:function(a){var u=this.c
if(typeof u!=="number")return u.O()
return new V.H(-this.a,-this.b,-u)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.H(this.a*b,this.b*b,u*b)},
t:function(a,b){var u
if(Math.abs(b-0)<$.I().a)return V.cL()
u=this.c
if(typeof u!=="number")return u.t()
return new V.H(this.a/b,this.b/b,u/b)},
dI:function(){var u,t=$.I(),s=t.a
if(!(Math.abs(0-this.a)<s))return!1
if(!(Math.abs(0-this.b)<s))return!1
u=this.c
t.toString
if(typeof u!=="number")return H.q(u)
if(!(Math.abs(0-u)<s))return!1
return!0},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.H))return!1
u=b.a
t=$.I()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.p()
if(typeof r!=="number")return H.q(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
U.fc.prototype={
bn:function(a){var u=V.km(a,this.c,this.b)
return u},
gA:function(){var u=this.y
return u==null?this.y=D.R():u},
D:function(a){var u=this.y
if(u!=null)u.F(a)},
scq:function(a,b){},
sc9:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.I().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bn(u)}s=new D.K("maximumLocation",s,t.b,[P.p])
s.b=!0
t.D(s)}},
scb:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.I().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bn(u)}s=new D.K("minimumLocation",s,t.c,[P.p])
s.b=!0
t.D(s)}},
sV:function(a,b){var u,t=this
b=t.bn(b)
u=t.d
if(!(Math.abs(u-b)<$.I().a)){t.d=b
u=new D.K("location",u,b,[P.p])
u.b=!0
t.D(u)}},
sca:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.I().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.K("maximumVelocity",r,a,[P.p])
r.b=!0
s.D(r)}},
sR:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.I().a)){u.f=a
t=new D.K("velocity",t,a,[P.p])
t.b=!0
u.D(t)}},
sbW:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.I().a)){this.x=a
u=new D.K("dampening",u,a,[P.p])
u.b=!0
this.D(u)}},
am:function(a,b){var u,t,s,r=this,q=r.f,p=$.I().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sV(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.I().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.db.prototype={
gA:function(){var u=this.b
return u==null?this.b=D.R():u},
af:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.db))return!1
return J.O(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")}}
U.co.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.R():u},
D:function(a){var u
H.f(a,"$iB")
u=this.e
if(u!=null)u.F(a)},
a_:function(){return this.D(null)},
ep:function(a,b){var u,t,s,r,q,p,o,n=U.a9
H.m(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gaD(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=b[q]
if(p!=null){o=p.gA()
o.toString
H.n(t,s)
if(o.a==null)o.sa0(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bS([n])
n.b=!0
this.D(n)},
fO:function(a,b){var u,t,s,r,q=U.a9
H.m(b,"$ij",[q],"$aj")
for(u=b.length,t=this.gaD(),s=0;s<b.length;b.length===u||(0,H.w)(b),++s){r=b[s]
if(r!=null)r.gA().K(0,t)}q=new D.bT([q])
q.b=!0
this.D(q)},
af:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.N()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.at(r,r.length,[H.u(r,0)]),u=null;r.H();){q=r.d
if(q!=null){t=q.af(0,b,c)
if(t!=null)u=u==null?t:t.m(0,u)}}s.f=u==null?V.ao():u
r=s.e
if(r!=null)r.ad(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.co))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.O(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.a9]},
$aa0:function(){return[U.a9]},
$ia9:1}
U.a9.prototype={}
U.dF.prototype={
gA:function(){var u=this.y
return u==null?this.y=D.R():u},
D:function(a){var u=this.y
if(u!=null)u.F(a)},
se8:function(a){var u
a=V.km(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.I().a)){this.a=a
u=new D.K("yaw",u,a,[P.p])
u.b=!0
this.D(u)}},
sdR:function(a,b){var u
b=V.km(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.I().a)){this.b=b
u=new D.K("pitch",u,b,[P.p])
u.b=!0
this.D(u)}},
sdY:function(a){var u
a=V.km(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.I().a)){this.c=a
u=new D.K("roll",u,a,[P.p])
u.b=!0
this.D(u)}},
af:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.se8(u.a+u.d*b.y)
u.sdR(0,u.b+u.e*b.y)
u.sdY(u.c+u.f*b.y)
u.x=V.lh(u.c).m(0,V.lg(u.b)).m(0,V.kC(u.a))
t=u.y
if(t!=null)t.ad(0)}return u.x},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dF))return!1
u=r.a
t=b.a
s=$.I().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+"], ["+V.N(u.d,3,0)+", "+V.N(u.e,3,0)+", "+V.N(u.f,3,0)+"]"}}
U.dW.prototype={
gA:function(){var u=this.cy
return u==null?this.cy=D.R():u},
D:function(a){var u
H.f(a,"$iB")
u=this.cy
if(u!=null)u.F(a)},
a_:function(){return this.D(null)},
aS:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdk().h(0,u.gbv())
u.a.c.gdJ().h(0,u.gbx())
u.a.c.gco().h(0,u.gbz())
return!0},
bw:function(a){var u=this
H.f(a,"$iB")
if(!J.O(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
by:function(a){var u,t,s,r,q,p,o,n=this
a=H.x(H.f(a,"$iB"),"$ibk")
if(!H.E(n.y))return
if(H.E(n.x)){u=a.d.p(0,a.y)
u=new V.S(u.a,u.b)
u=u.B(u)
t=n.r
if(typeof t!=="number")return H.q(t)
if(u<t)return
n.x=!1}if(H.E(n.d)){u=a.c
t=a.d.p(0,a.y)
u=new V.S(t.a,t.b).m(0,2).t(0,u.ga2())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.m()
s=n.e
if(typeof s!=="number")return H.q(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=new V.S(s.a,s.b).m(0,2).t(0,u.ga2())
s=n.b
q=r.a
if(typeof q!=="number")return q.O()
p=n.e
if(typeof p!=="number")return H.q(p)
o=n.z
if(typeof o!=="number")return H.q(o)
s.sV(0,-q*p+o)
n.b.sR(0)
t=t.p(0,a.z)
n.Q=new V.S(t.a,t.b).m(0,2).t(0,u.ga2())}n.a_()},
bA:function(a){var u,t,s,r=this
H.f(a,"$iB")
if(!H.E(r.y))return
r.y=!1
if(H.E(r.x))return
u=r.Q
if(u.B(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.m()
s=r.e
if(typeof s!=="number")return H.q(s)
u.sR(t*10*s)
r.a_()}},
af:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.N()
if(s<r){t.ch=r
u=b.y
t.b.am(0,u)
t.cx=V.lh(t.b.d)}return t.cx},
$ia9:1}
U.dX.prototype={
gA:function(){var u=this.fx
return u==null?this.fx=D.R():u},
D:function(a){var u
H.f(a,"$iB")
u=this.fx
if(u!=null)u.F(a)},
a_:function(){return this.D(null)},
aS:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdk().h(0,s.gbv())
s.a.c.gdJ().h(0,s.gbx())
s.a.c.gco().h(0,s.gbz())
u=s.a.d
t=u.f
u=t==null?u.f=D.R():t
u.h(0,s.gf0())
u=s.a.d
t=u.d
u=t==null?u.d=D.R():t
u.h(0,s.gf2())
u=s.a.e
t=u.b
u=t==null?u.b=D.R():t
u.h(0,s.ghq())
u=s.a.e
t=u.d
u=t==null?u.d=D.R():t
u.h(0,s.gho())
u=s.a.e
t=u.c
u=t==null?u.c=D.R():t
u.h(0,s.ghm())
return!0},
aj:function(a){var u=a.a,t=a.b
if(H.E(this.f)){if(typeof u!=="number")return u.O()
u=-u}if(H.E(this.r)){if(typeof t!=="number")return t.O()
t=-t}return new V.S(u,t)},
bw:function(a){var u=this
a=H.x(H.f(a,"$iB"),"$ibk")
if(!J.O(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
by:function(a){var u,t,s,r,q,p,o,n=this
a=H.x(H.f(a,"$iB"),"$ibk")
if(!H.E(n.cx))return
if(H.E(n.ch)){u=a.d.p(0,a.y)
u=new V.S(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.q(t)
if(u<t)return
n.ch=!1}if(H.E(n.e)){u=a.c
t=a.d.p(0,a.y)
u=n.aj(new V.S(t.a,t.b).m(0,2).t(0,u.ga2()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.q(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.q(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=n.aj(new V.S(s.a,s.b).m(0,2).t(0,u.ga2()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.q(p)
o=n.cy
if(typeof o!=="number")return H.q(o)
s.sV(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.q(q)
s=n.db
if(typeof s!=="number")return H.q(s)
o.sV(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.p(0,a.z)
n.dx=n.aj(new V.S(t.a,t.b).m(0,2).t(0,u.ga2()))}n.a_()},
bA:function(a){var u,t,s,r=this
H.f(a,"$iB")
if(!H.E(r.cx))return
r.cx=!1
if(H.E(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.q(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.q(u)
s.sR(-t*10*u)
r.a_()}},
f1:function(a){var u=this
if(H.x(H.f(a,"$iB"),"$idq").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
f3:function(a){var u,t,s,r,q,p,o,n=this
a=H.x(H.f(a,"$iB"),"$ibk")
if(!J.O(n.d,a.x.b))return
u=a.c
t=a.d
s=t.p(0,a.y)
r=n.aj(new V.S(s.a,s.b).m(0,2).t(0,u.ga2()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.q(p)
o=n.cy
if(typeof o!=="number")return H.q(o)
s.sV(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.q(q)
s=n.db
if(typeof s!=="number")return H.q(s)
o.sV(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.p(0,a.z)
n.dx=n.aj(new V.S(t.a,t.b).m(0,2).t(0,u.ga2()))
n.a_()},
hr:function(a){var u=this
H.f(a,"$iB")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hp:function(a){var u,t,s,r,q,p,o,n=this
a=H.x(H.f(a,"$iB"),"$idQ")
if(!H.E(n.cx))return
if(H.E(n.ch)){u=a.d.p(0,a.y)
u=new V.S(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.q(t)
if(u<t)return
n.ch=!1}if(H.E(n.e)){u=a.c
t=a.d.p(0,a.y)
u=n.aj(new V.S(t.a,t.b).m(0,2).t(0,u.ga2()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.q(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.q(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=n.aj(new V.S(s.a,s.b).m(0,2).t(0,u.ga2()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.q(p)
o=n.cy
if(typeof o!=="number")return H.q(o)
s.sV(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.q(q)
s=n.db
if(typeof s!=="number")return H.q(s)
o.sV(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.p(0,a.z)
n.dx=n.aj(new V.S(t.a,t.b).m(0,2).t(0,u.ga2()))}n.a_()},
hn:function(a){var u,t,s,r=this
H.f(a,"$iB")
if(!H.E(r.cx))return
r.cx=!1
if(H.E(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.q(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.q(u)
s.sR(-t*10*u)
r.a_()}},
af:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.N()
if(s<r){t.dy=r
u=b.y
t.c.am(0,u)
t.b.am(0,u)
t.fr=V.kC(t.b.d).m(0,V.lg(t.c.d))}return t.fr},
$ia9:1}
U.dY.prototype={
gA:function(){var u=this.r
return u==null?this.r=D.R():u},
D:function(a){var u=this.r
if(u!=null)u.F(a)},
aS:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.R():t
t=r.gf4()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.R():s).h(0,t)
return!0},
f5:function(a){var u,t,s,r,q=this
H.f(a,"$iB")
if(!J.O(q.b,q.a.b.c))return
H.x(a,"$ict")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.m()
r=u+t*s
if(u!==r){q.d=r
u=new D.K("zoom",u,r,[P.p])
u.b=!0
q.D(u)}},
af:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.b7(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia9:1}
M.dg.prototype={
ao:function(a){var u
H.f(a,"$iB")
u=this.y
if(u!=null)u.F(a)},
er:function(){return this.ao(null)},
fh:function(a,b){var u,t,s,r,q,p,o,n=E.an
H.m(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gai(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.b2()
o.sa0(null)
o.sak(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sa0(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bS([n])
n.b=!0
this.ao(n)},
fj:function(a,b){var u,t,s,r,q,p=E.an
H.m(b,"$ij",[p],"$aj")
for(u=b.length,t=this.gai(),s=0;s<b.length;b.length===u||(0,H.w)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.b2()
q.sa0(null)
q.sak(null)
q.c=null
q.d=0
r.z=q}q.K(0,t)}}p=new D.bT([p])
p.b=!0
this.ao(p)},
se_:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gA().K(0,t.gai())
u=t.d
t.d=a
if(a!=null)a.gA().h(0,t.gai())
s=new D.K("technique",u,t.d,[O.bZ])
s.b=!0
t.ao(s)}},
gA:function(){var u=this.y
return u==null?this.y=D.R():u},
aM:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=new E.dL(a)
e.b=!0
u=f.f
if(u!=null)u.F(e)
a.dU(f.d)
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
if(typeof s!=="number")return H.q(s)
o=C.c.ae(p*s)
p=q.b
if(typeof r!=="number")return H.q(r)
n=C.c.ae(p*r)
p=C.c.ae(q.c*s)
a.c=p
q=C.c.ae(q.d*r)
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
i=V.b7(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dT(i)
t=$.ll
if(t==null){t=V.ln()
q=V.kJ()
p=$.lD
t=V.lf(t,q,p==null?$.lD=new V.H(0,0,-1):p)
$.ll=t
h=t}else h=t
t=u.b
if(t!=null){g=t.af(0,a,u)
if(g!=null)h=g.m(0,h)}a.db.dT(h)
u=f.d
if(u!=null)u.am(0,a)
for(u=f.e.a,u=new J.at(u,u.length,[H.u(u,0)]);u.H();)u.d.am(0,a)
for(u=f.e.a,u=new J.at(u,u.length,[H.u(u,0)]);u.H();)u.d.aM(a)
f.b.toString
a.cy.cd()
a.db.cd()
f.c.toString
a.dS()},
seq:function(a,b){this.e=H.m(b,"$ia0",[E.an],"$aa0")},
$ip3:1}
A.d5.prototype={}
A.f1.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hT:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
hQ:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.al.prototype={
gag:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
q:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.al))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fZ.prototype={
eh:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.aj("")
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
A.og(c3,u)
A.oi(c3,u)
A.oh(c3,u)
A.ok(c3,u)
A.ol(c3,u)
A.oj(c3,u)
A.om(c3,u)
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
m=A.of(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cO(n,35633)
b8.f=b8.cO(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.E(H.m1(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.y(P.C("Failed to link shader: "+H.k(l)))}b8.hc()
b8.he()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.x(b8.y.S(0,"invViewMat"),"$iaw")
if(t)b8.dy=H.x(b8.y.S(0,"objMat"),"$iaw")
if(r)b8.fr=H.x(b8.y.S(0,"viewObjMat"),"$iaw")
b8.fy=H.x(b8.y.S(0,"projViewObjMat"),"$iaw")
if(c3.ry)b8.k1=H.x(b8.y.S(0,"txt2DMat"),"$icJ")
if(c3.x1)b8.k2=H.x(b8.y.S(0,"txtCubeMat"),"$iaw")
if(c3.x2)b8.k3=H.x(b8.y.S(0,"colorMat"),"$iaw")
b8.seD(H.e([],[A.aw]))
t=c3.y2
if(t>0){b8.k4=H.f(b8.y.S(0,"bendMatCount"),"$iaF")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.y(P.C(c0+q+c1));(s&&C.a).h(s,H.x(j,"$iaw"))}}if(c3.a.a)b8.r2=H.x(b8.y.S(0,"emissionClr"),"$iW")
if(c3.b.a)b8.x1=H.x(b8.y.S(0,"ambientClr"),"$iW")
if(c3.c.a)b8.y2=H.x(b8.y.S(0,"diffuseClr"),"$iW")
if(c3.d.a)b8.dm=H.x(b8.y.S(0,"invDiffuseClr"),"$iW")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.dq=H.x(b8.y.S(0,"shininess"),"$iae")
if(t)b8.dn=H.x(b8.y.S(0,"specularClr"),"$iW")}if(c3.cy){b8.dr=H.x(b8.y.S(0,"envSampler"),"$ic2")
if(c3.r.a)b8.ds=H.x(b8.y.S(0,"reflectClr"),"$iW")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.dt=H.x(b8.y.S(0,"refraction"),"$iae")
if(t)b8.du=H.x(b8.y.S(0,"refractClr"),"$iW")}}if(c3.y.a)b8.dv=H.x(b8.y.S(0,"alpha"),"$iae")
t=P.l
s=[t,A.aF]
b8.seM(new H.Y(s))
b8.ses(new H.Y([t,[P.b,A.c_]]))
b8.sfY(new H.Y(s))
b8.sfZ(new H.Y([t,[P.b,A.c0]]))
b8.shh(new H.Y(s))
b8.seu(new H.Y([t,[P.b,A.c3]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.c_],i=0;i<t.length;t.length===s||(0,H.w)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.k(g)
e=H.e([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.a9()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.j(0,d)
if(j==null)H.y(P.C(c0+d+c1))
H.x(j,"$iW")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.j(0,d)
if(c==null)H.y(P.C(c0+d+c1))
H.x(c,"$iW")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.j(0,d)
if(b==null)H.y(P.C(c0+d+c1))
H.x(b,"$iW")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.j(0,d)
if(j==null)H.y(P.C(c0+d+c1))
H.x(j,"$iW")
o=b8.y
d=f+"s["+k+"].color"
c=o.j(0,d)
if(c==null)H.y(P.C(c0+d+c1))
H.x(c,"$iW")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.j(0,o)
if(b==null)H.y(P.C(c0+o+c1))
H.x(b,"$ic1")
a2=b}else a2=b9
C.a.h(e,new A.c_(a1,a0,a,j,c,a2))}b8.c_.k(0,g,e)
q=b8.bZ
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.y(P.C(c0+o+c1))
q.k(0,g,H.f(j,"$iaF"))}for(t=c3.Q,s=t.length,r=[A.c0],i=0;i<t.length;t.length===s||(0,H.w)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.k(g)
e=H.e([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.j(0,o)
if(j==null)H.y(P.C(c0+o+c1))
H.x(j,"$iW")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.j(0,o)
if(c==null)H.y(P.C(c0+o+c1))
H.x(c,"$iW")
p=b8.y
o=f+"s["+k+"].color"
b=p.j(0,o)
if(b==null)H.y(P.C(c0+o+c1))
H.x(b,"$iW")
if(typeof g!=="number")return g.a9()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.y(P.C(c0+o+c1))
H.x(a3,"$icJ")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.y(P.C(c0+o+c1))
H.x(a3,"$ic2")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.y(P.C(c0+o+c1))
H.x(a3,"$ic2")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.y(P.C(c0+o+c1))
H.x(a5,"$icI")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.j(0,o)
if(a3==null)H.y(P.C(c0+o+c1))
H.x(a3,"$iae")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.j(0,o)
if(a5==null)H.y(P.C(c0+o+c1))
H.x(a5,"$iae")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.j(0,o)
if(a8==null)H.y(P.C(c0+o+c1))
H.x(a8,"$iae")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}C.a.h(e,new A.c0(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.c1.k(0,g,e)
q=b8.c0
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.y(P.C(c0+o+c1))
q.k(0,g,H.f(j,"$iaF"))}for(t=c3.ch,s=t.length,r=[A.c3],i=0;i<t.length;t.length===s||(0,H.w)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.k(g)
e=H.e([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.j(0,o)
if(j==null)H.y(P.C(c0+o+c1))
H.x(j,"$iW")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.j(0,o)
if(c==null)H.y(P.C(c0+o+c1))
H.x(c,"$iW")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.j(0,o)
if(b==null)H.y(P.C(c0+o+c1))
H.x(b,"$iW")
p=b8.y
o=f+"s["+k+"].color"
a3=p.j(0,o)
if(a3==null)H.y(P.C(c0+o+c1))
H.x(a3,"$iW")
if(typeof g!=="number")return g.a9()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.j(0,o)
if(a5==null)H.y(P.C(c0+o+c1))
H.x(a5,"$iW")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.j(0,o)
if(a8==null)H.y(P.C(c0+o+c1))
H.x(a8,"$iW")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.j(0,o)
if(b2==null)H.y(P.C(c0+o+c1))
H.x(b2,"$iae")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.j(0,o)
if(b3==null)H.y(P.C(c0+o+c1))
H.x(b3,"$iae")
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
if(a5==null)H.y(P.C(c0+d+c1))
H.x(a5,"$icI")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.j(0,d)
if(a5==null)H.y(P.C(c0+d+c1))
H.x(a5,"$iae")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.j(0,d)
if(a8==null)H.y(P.C(c0+d+c1))
H.x(a8,"$iae")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.j(0,d)
if(a5==null)H.y(P.C(c0+d+c1))
H.x(a5,"$iae")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.j(0,d)
if(a8==null)H.y(P.C(c0+d+c1))
H.x(a8,"$iae")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.j(0,d)
if(b2==null)H.y(P.C(c0+d+c1))
H.x(b2,"$iae")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.j(0,d)
if(a5==null)H.y(P.C(c0+d+c1))
H.x(a5,"$ic1")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.y(P.C(c0+o+c1))
H.x(a5,"$ic1")
a6=a5}else a6=b9
C.a.h(e,new A.c3(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.c3.k(0,g,e)
q=b8.c2
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.y(P.C(c0+o+c1))
q.k(0,g,H.f(j,"$iaF"))}}},
ha:function(a,b){},
seD:function(a){this.r1=H.m(a,"$ib",[A.aw],"$ab")},
seM:function(a){this.bZ=H.m(a,"$iz",[P.l,A.aF],"$az")},
ses:function(a){this.c_=H.m(a,"$iz",[P.l,[P.b,A.c_]],"$az")},
sfY:function(a){this.c0=H.m(a,"$iz",[P.l,A.aF],"$az")},
sfZ:function(a){this.c1=H.m(a,"$iz",[P.l,[P.b,A.c0]],"$az")},
shh:function(a){this.c2=H.m(a,"$iz",[P.l,A.aF],"$az")},
seu:function(a){this.c3=H.m(a,"$iz",[P.l,[P.b,A.c3]],"$az")}}
A.az.prototype={
i:function(a){return"dirLight"+H.k(this.a)}}
A.aB.prototype={
i:function(a){return"pointLight"+H.k(this.a)}}
A.aC.prototype={
i:function(a){return"spotLight"+H.k(this.a)}}
A.h1.prototype={
i:function(a){return this.aX}}
A.c_.prototype={}
A.c0.prototype={}
A.c3.prototype={}
A.cC.prototype={
ek:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cO:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.E(H.m1(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.C("Error compiling shader '"+H.k(s)+"': "+H.k(u)))}return s},
hc:function(){var u,t,s,r=this,q=H.e([],[A.d5]),p=r.a,o=H.a_(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.q(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d5(p,t.name,s))}r.x=new A.f1(q)},
he:function(){var u,t,s,r=this,q=H.e([],[A.dR]),p=r.a,o=H.a_(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.q(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.hN(t.type,t.size,t.name,s))}r.y=new A.ij(q)},
aF:function(a,b,c){var u=this.a
if(a===1)return new A.aF(u,b,c)
else return A.kG(u,this.r,b,a,c)},
eJ:function(a,b,c){var u=this.a
if(a===1)return new A.c1(u,b,c)
else return A.kG(u,this.r,b,a,c)},
eK:function(a,b,c){var u=this.a
if(a===1)return new A.c2(u,b,c)
else return A.kG(u,this.r,b,a,c)},
ba:function(a,b){return new P.e8(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
hN:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aF(b,c,d)
case 5121:return u.aF(b,c,d)
case 5122:return u.aF(b,c,d)
case 5123:return u.aF(b,c,d)
case 5124:return u.aF(b,c,d)
case 5125:return u.aF(b,c,d)
case 5126:return new A.ae(u.a,c,d)
case 35664:return new A.ie(u.a,c,d)
case 35665:return new A.W(u.a,c,d)
case 35666:return new A.cI(u.a,c,d)
case 35667:return new A.ig(u.a,c,d)
case 35668:return new A.ih(u.a,c,d)
case 35669:return new A.ii(u.a,c,d)
case 35674:return new A.ik(u.a,c,d)
case 35675:return new A.cJ(u.a,c,d)
case 35676:return new A.aw(u.a,c,d)
case 35678:return u.eJ(b,c,d)
case 35680:return u.eK(b,c,d)
case 35670:throw H.d(u.ba("BOOL",c))
case 35671:throw H.d(u.ba("BOOL_VEC2",c))
case 35672:throw H.d(u.ba("BOOL_VEC3",c))
case 35673:throw H.d(u.ba("BOOL_VEC4",c))
default:throw H.d(P.C("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}}
A.dR.prototype={}
A.ij.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
S:function(a,b){var u=this.j(0,b)
if(u==null)throw H.d(P.C("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.L()},
L:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.w)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aF.prototype={
i:function(a){return"Uniform1i: "+H.k(this.c)}}
A.ig.prototype={
i:function(a){return"Uniform2i: "+H.k(this.c)}}
A.ih.prototype={
i:function(a){return"Uniform3i: "+H.k(this.c)}}
A.ii.prototype={
i:function(a){return"Uniform4i: "+H.k(this.c)}}
A.id.prototype={
i:function(a){return"Uniform1iv: "+H.k(this.c)},
sht:function(a){H.m(a,"$ib",[P.l],"$ab")}}
A.ae.prototype={
i:function(a){return"Uniform1f: "+H.k(this.c)}}
A.ie.prototype={
i:function(a){return"Uniform2f: "+H.k(this.c)}}
A.W.prototype={
i:function(a){return"Uniform3f: "+H.k(this.c)}}
A.cI.prototype={
i:function(a){return"Uniform4f: "+H.k(this.c)}}
A.ik.prototype={
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}}
A.cJ.prototype={
ah:function(a){var u=new Float32Array(H.c5(H.m(a,"$ib",[P.p],"$ab")))
C.d.e4(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.k(this.c)}}
A.aw.prototype={
ah:function(a){var u=new Float32Array(H.c5(H.m(a,"$ib",[P.p],"$ab")))
C.d.e5(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.k(this.c)}}
A.c1.prototype={
i:function(a){return"UniformSampler2D: "+H.k(this.c)}}
A.c2.prototype={
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}
F.jD.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c8(s.b,b).c8(s.d.c8(s.c,b),c)
a.sV(0,new V.Z(r.a,r.b,r.c))
a.scm(r.t(0,Math.sqrt(r.B(r))))
s=1-b
u=1-c
a.sbN(new V.aP(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:5}
F.jP.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:11}
F.jR.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.q(p)
s=-s*p
u=r*p
a.sV(0,new V.Z(s,u,q))
u=new V.H(s,u,q)
a.scm(u.t(0,Math.sqrt(u.B(u))))
a.sbN(new V.aP(1-c,2+c,-1,-1))},
$S:5}
F.jS.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:17}
F.jT.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:17}
F.kg.prototype={
$2:function(a,b){return 0},
$S:11}
F.kh.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.q(s)
u=a.f
t=new V.H(u.a,u.b,u.c)
s=t.t(0,Math.sqrt(t.B(t))).m(0,this.b+s)
a.sV(0,new V.Z(s.a,s.b,s.c))},
$S:5}
F.kk.prototype={
$1:function(a){return new V.Z(Math.cos(a),Math.sin(a),0)},
$S:16}
F.k2.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.Z(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:16}
F.jQ.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o=this,n=b*6.283185307179586,m=o.a,l=o.b,k=J.l2(m.$1(n),l)
l=J.mF(J.l2(m.$1(n+3.141592653589793/o.c),l),k)
l=new V.H(l.a,l.b,l.c)
u=l.t(0,Math.sqrt(l.B(l)))
m=$.lE
if(m==null){m=new V.H(1,0,0)
$.lE=m
t=m}else t=m
m=u.au(!J.O(u,t)?V.lG():t)
s=m.t(0,Math.sqrt(m.B(m)))
m=s.au(u)
t=m.t(0,Math.sqrt(m.B(m)))
r=c*6.283185307179586
m=Math.cos(r)
l=o.d
q=Math.sin(r)
m=t.m(0,m*l)
l=s.m(0,q*l)
q=m.c
p=l.c
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.q(p)
a.sV(0,J.mE(k,new V.Z(m.a-l.a,m.b-l.b,q-p)))},
$S:5}
F.jW.prototype={
$2:function(a,b){return 0},
$S:11}
F.jX.prototype={
$3:function(a,b,c){var u,t,s=b*2-1,r=c*2-1
a.sV(0,new V.Z(s,r,this.a.a.$2(b,c)))
u=new V.H(s,r,1)
a.scm(u.t(0,Math.sqrt(u.B(u))))
u=1-b
t=1-c
a.sbN(new V.aP(b*c,2+u*c,4+b*t,6+u*t))},
$S:5}
F.a5.prototype={
aV:function(){var u=this
if(!u.gaW()){C.a.K(u.a.a.d.b,u)
u.a.a.W()}u.bG()
u.bH()
u.h3()},
bK:function(a){this.a=a
C.a.h(a.d.b,this)},
bL:function(a){this.b=a
C.a.h(a.d.c,this)},
hb:function(a){this.c=a
C.a.h(a.d.d,this)},
bG:function(){var u=this.a
if(u!=null){C.a.K(u.d.b,this)
this.a=null}},
bH:function(){var u=this.b
if(u!=null){C.a.K(u.d.c,this)
this.b=null}},
h3:function(){var u=this.c
if(u!=null){C.a.K(u.d.d,this)
this.c=null}},
gaW:function(){return this.a==null||this.b==null||this.c==null},
eC:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cL()
if(q!=null)s=s.n(0,q)
if(u!=null)s=s.n(0,u)
if(t!=null)s=s.n(0,t)
if(s.dI())return
return s.t(0,Math.sqrt(s.B(s)))},
eG:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.p(0,q)
r=new V.H(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.B(r)))
r=t.p(0,q)
r=new V.H(r.a,r.b,r.c)
r=s.au(r.t(0,Math.sqrt(r.B(r))))
return r.t(0,Math.sqrt(r.B(r)))},
bS:function(){var u,t=this
if(t.d!=null)return!0
u=t.eC()
if(u==null){u=t.eG()
if(u==null)return!1}t.d=u
t.a.a.W()
return!0},
eB:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cL()
if(q!=null)s=s.n(0,q)
if(u!=null)s=s.n(0,u)
if(t!=null)s=s.n(0,t)
if(s.dI())return
return s.t(0,Math.sqrt(s.B(s)))},
eF:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.I().a){l=d.p(0,g)
l=new V.H(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.B(l)))
if(s.a-t.a<0)q=q.O(0)}else{p=(l-u.b)/r
l=d.p(0,g).m(0,p).n(0,g).p(0,j)
l=new V.H(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.B(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.O(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.B(l)))
l=o.au(q)
l=l.t(0,Math.sqrt(l.B(l))).au(o)
q=l.t(0,Math.sqrt(l.B(l)))}return q},
bQ:function(){var u,t=this
if(t.e!=null)return!0
u=t.eB()
if(u==null){u=t.eF()
if(u==null)return!1}t.e=u
t.a.a.W()
return!0},
ghI:function(a){var u=this
if(J.O(u.a,u.b))return!0
if(J.O(u.b,u.c))return!0
if(J.O(u.c,u.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var u,t,s=this
if(s.gaW())return a+"disposed"
u=a+C.b.a7(J.as(s.a.e),0)+", "+C.b.a7(J.as(s.b.e),0)+", "+C.b.a7(J.as(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
L:function(){return this.C("")}}
F.fw.prototype={}
F.hO.prototype={
aY:function(a,b,c){var u,t=b.a
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
F.bi.prototype={
aV:function(){var u=this
if(!u.gaW()){C.a.K(u.a.a.c.b,u)
u.a.a.W()}u.bG()
u.bH()},
bK:function(a){this.a=a
C.a.h(a.c.b,this)},
bL:function(a){this.b=a
C.a.h(a.c.c,this)},
bG:function(){var u=this.a
if(u!=null){C.a.K(u.c.b,this)
this.a=null}},
bH:function(){var u=this.b
if(u!=null){C.a.K(u.c.c,this)
this.b=null}},
gaW:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){if(this.gaW())return a+"disposed"
return a+C.b.a7(J.as(this.a.e),0)+", "+C.b.a7(J.as(this.b.e),0)},
L:function(){return this.C("")}}
F.fM.prototype={}
F.ic.prototype={
aY:function(a,b,c){var u,t=b.a
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
F.by.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.a7(J.as(u.e),0)},
L:function(){return this.C("")}}
F.bY.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.R():u},
aZ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.v()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.w)(g),++s){r=g[s]
h.a.h(0,r.hL())}h.a.v()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.w)(g),++s){q=g[s]
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
o=new F.by()
if(n.a==null)H.y(P.C("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.F(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.w)(g),++s){m=g[s]
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
F.n1(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.w)(g),++s){j=g[s]
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
F.cl(l,k,i)}g=h.e
if(g!=null)g.ad(0)},
ac:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ac()||!1
if(!t.a.ac())u=!1
s=t.e
if(s!=null)s.ad(0)
return u},
i7:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.e(o.slice(0),[H.u(o,0)])
for(o=[F.af];u.length!==0;){t=C.a.ghY(u)
C.a.dV(u,0)
if(t!=null){s=H.e([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.c(u,r)
q=u[r]
if(q!=null&&a.aY(0,t,q)){C.a.h(s,q)
C.a.dV(u,r)}}if(s.length>1)b.aZ(s)}}p.a.v()
p.c.ci()
p.d.ci()
p.b.is()
p.c.cj(new F.ic())
p.d.cj(new F.hO())
o=p.e
if(o!=null)o.ad(0)},
bM:function(){this.i7(new F.iH(),new F.ho())},
hG:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bs()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.br().a)!==0)++s
if((t&$.bq().a)!==0)++s
if((t&$.bG().a)!==0)++s
if((t&$.bH().a)!==0)++s
if((t&$.d1().a)!==0)++s
if((t&$.d2().a)!==0)++s
if((t&$.cf().a)!==0)++s
if((t&$.bp().a)!==0)++s
r=a3.gct(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.p
p=H.e(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.e(u,[Z.d7])
for(n=0,m=0;m<s;++m){l=a3.hB(m)
k=l.gct(l)
C.a.k(o,m,new Z.d7(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.c(u,j)
i=u[j].i5(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.c5(p)),35044)
u.bindBuffer(a0,null)
e=new Z.d8(new Z.e_(a0,f),o,a3)
e.seW(H.e([],[Z.bv]))
if(a.b.b.length!==0){t=P.l
d=H.e([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.v()
C.a.h(d,c.e)}b=Z.kK(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bv(0,d.length,b))}if(a.c.b.length!==0){t=P.l
d=H.e([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.v()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.v()
C.a.h(d,c.e)}b=Z.kK(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bv(1,d.length,b))}if(a.d.b.length!==0){t=P.l
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
C.a.h(d,c.e)}b=Z.kK(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bv(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.e([],[P.h])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.C(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.C(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.C(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.C(t))}return C.a.u(s,"\n")},
W:function(){var u=this.e
if(u!=null)u.F(null)},
$ip4:1}
F.hI.prototype={
hx:function(a){var u,t,s,r,q,p,o
H.m(a,"$ib",[F.af],"$ab")
u=H.e([],[F.a5])
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
C.a.h(u,F.cl(s,p,o))}}return u},
hy:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.af],"$ab")
u=H.e([],[F.a5])
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
C.a.h(u,F.cl(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cl(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cl(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cl(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
cj:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.aY(0,p,n)){p.aV()
break}}}}},
ci:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=s.ghI(s)
if(t)s.aV()}},
ac:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.w)(u),++r)if(!u[r].bS())s=!1
return s},
bR:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.w)(u),++r)if(!u[r].bQ())s=!1
return s},
i:function(a){return this.L()},
C:function(a){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].C(a))
return C.a.u(r,"\n")},
L:function(){return this.C("")},
seQ:function(a){this.b=H.m(a,"$ib",[F.a5],"$ab")}}
F.hJ.prototype={
gl:function(a){return this.b.length},
cj:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.aY(0,p,n)){p.aV()
break}}}}},
ci:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=J.O(s.a,s.b)
if(t)s.aV()}},
i:function(a){return this.L()},
C:function(a){var u,t,s=H.e([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
C.a.h(s,t[u].C(a+(""+u+". ")))}return C.a.u(s,"\n")},
L:function(){return this.C("")},
seX:function(a){this.b=H.m(a,"$ib",[F.bi],"$ab")}}
F.hK.prototype={
gl:function(a){return this.b.length},
is:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.K(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.F(null)}s=t.a
if(s!=null){C.a.K(s.b.b,t)
t.a=null}}}},
i:function(a){return this.L()},
C:function(a){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].C(a))
return C.a.u(r,"\n")},
L:function(){return this.C("")},
sbD:function(a){this.b=H.m(a,"$ib",[F.by],"$ab")}}
F.af.prototype={
bV:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.dZ(u.cx,r,o,t,s,q,p,a,n)},
hL:function(){return this.bV(null)},
sV:function(a,b){var u
if(!J.O(this.f,b)){this.f=b
u=this.a
if(u!=null)u.W()}},
scm:function(a){var u
if(!J.O(this.z,a)){this.z=a
u=this.a
if(u!=null)u.W()}},
sbN:function(a){var u
if(!J.O(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.W()}},
i5:function(a){var u,t,s=this
if(a.q(0,$.bs())){u=s.f
t=[P.p]
if(u==null)return H.e([0,0,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.q(0,$.br())){u=s.r
t=[P.p]
if(u==null)return H.e([0,1,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.q(0,$.bq())){u=s.x
t=[P.p]
if(u==null)return H.e([0,0,1],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.q(0,$.bG())){u=s.y
t=[P.p]
if(u==null)return H.e([0,0],t)
else return H.e([u.a,u.b],t)}else if(a.q(0,$.bH())){u=s.z
t=[P.p]
if(u==null)return H.e([0,0,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.q(0,$.d1())){u=s.Q
t=[P.p]
if(u==null)return H.e([1,1,1],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.q(0,$.d2())){u=s.Q
t=[P.p]
if(u==null)return H.e([1,1,1,1],t)
else return H.e([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.cf()))return H.e([s.ch],[P.p])
else if(a.q(0,$.bp())){u=s.cx
t=[P.p]
if(u==null)return H.e([-1,-1,-1,-1],t)
else return H.e([u.a,u.b,u.c,u.d],t)}else return H.e([],[P.p])},
bS:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cL()
t.d.I(0,new F.iM(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.ad(0)}return!0},
bQ:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cL()
t.d.I(0,new F.iL(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.ad(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var u,t,s=this,r="-",q=H.e([],[P.h])
C.a.h(q,C.b.a7(J.as(s.e),0))
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
t=C.a.u(q,", ")
return a+"{"+t+"}"},
L:function(){return this.C("")}}
F.iM.prototype={
$1:function(a){var u,t
H.f(a,"$ia5")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:9}
F.iL.prototype={
$1:function(a){var u,t
H.f(a,"$ia5")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:9}
F.iC.prototype={
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
u.W()
return!0},
hz:function(a,b,c,d,e,f){var u=F.dZ(a,null,b,c,d,e,f,null,0)
this.h(0,u)
return u},
gl:function(a){return this.c.length},
ac:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)u[s].bS()
return!0},
bR:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)u[s].bQ()
return!0},
hH:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.m()
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.O(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.F(null)}}}}return!0},
i:function(a){return this.L()},
C:function(a){var u,t,s,r
this.v()
u=H.e([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].C(a))
return C.a.u(u,"\n")},
L:function(){return this.C("")},
shu:function(a){this.c=H.m(a,"$ib",[F.af],"$ab")}}
F.iD.prototype={
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
I:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a5]})
C.a.I(u.b,b)
C.a.I(u.c,new F.iE(u,b))
C.a.I(u.d,new F.iF(u,b))},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].C(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].C(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].C(""))
return C.a.u(r,"\n")},
seR:function(a){this.b=H.m(a,"$ib",[F.a5],"$ab")},
seS:function(a){this.c=H.m(a,"$ib",[F.a5],"$ab")},
seT:function(a){this.d=H.m(a,"$ib",[F.a5],"$ab")}}
F.iE.prototype={
$1:function(a){H.f(a,"$ia5")
if(!J.O(a.a,this.a))this.b.$1(a)},
$S:9}
F.iF.prototype={
$1:function(a){var u
H.f(a,"$ia5")
u=this.a
if(!J.O(a.a,u)&&!J.O(a.b,u))this.b.$1(a)},
$S:9}
F.iG.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.c(t,u)
return t[u]}else{if(b<0)return H.c(t,b)
return t[b]}},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].C(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].C(""))
return C.a.u(r,"\n")},
seY:function(a){this.b=H.m(a,"$ib",[F.bi],"$ab")},
seZ:function(a){this.c=H.m(a,"$ib",[F.bi],"$ab")}}
F.iI.prototype={}
F.iH.prototype={
aY:function(a,b,c){return J.O(b.f,c.f)}}
F.iJ.prototype={}
F.ho.prototype={
aZ:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[F.af],"$ab")
u=V.cL()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null){q=u.a
p=r.a
o=u.b
n=r.b
m=u.c
r=r.c
if(typeof m!=="number")return m.n()
if(typeof r!=="number")return H.q(r)
u=new V.H(q+p,o+n,m+r)}}u=u.t(0,Math.sqrt(u.B(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.w)(a),++s){l=a[s]
if(r)k=null
else{q=u.a
p=u.b
o=u.c
if(typeof o!=="number")return o.m()
k=u.t(0,Math.sqrt(q*q+p*p+o*o))}if(!J.O(l.r,k)){l.r=k
q=l.a
if(q!=null){q=q.e
if(q!=null)q.F(null)}}}return}}
F.iK.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].C(""))
return C.a.u(r,"\n")},
sbD:function(a){this.b=H.m(a,"$ib",[F.by],"$ab")}}
O.ds.prototype={
gA:function(){var u=this.fr
return u==null?this.fr=D.R():u},
a5:function(a){var u
H.f(a,"$iB")
u=this.fr
if(u!=null)u.F(a)},
ff:function(){return this.a5(null)},
d4:function(a){H.f(a,"$iB")
this.a=null
this.a5(a)},
h8:function(){return this.d4(null)},
f9:function(a,b){var u=V.am
H.m(b,"$ij",[u],"$aj")
u=new D.bS([u])
u.b=!0
this.a5(u)},
fb:function(a,b){var u=V.am
H.m(b,"$ij",[u],"$aj")
u=new D.bT([u])
u.b=!0
this.a5(u)},
cL:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.l,h=new H.Y([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=h.j(0,0)
h.k(0,0,r==null?1:r)}q=H.e([],[A.az])
h.I(0,new O.h5(j,q))
C.a.bl(q,new O.h6())
p=new H.Y([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){o=u[s]
r=o.gaU()
n=p.j(0,o.gaU())
p.k(0,r,n==null?1:n)}m=H.e([],[A.aB])
p.I(0,new O.h7(j,m))
C.a.bl(m,new O.h8())
l=new H.Y([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.w)(i),++s){o=i[s]
t=o.gaU()
r=l.j(0,o.gaU())
l.k(0,t,r==null?1:r)}k=H.e([],[A.aC])
l.I(0,new O.h9(j,k))
C.a.bl(k,new O.ha())
i=C.e.a1(j.e.a.length+3,4)
j.dy.e
return A.n9(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
eA:function(a,b){H.m(a,"$ib",[T.dN],"$ab")},
am:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.at(u,u.length,[H.u(u,0)]);u.H();){t=u.d
t.toString
s=$.iB
if(s==null)s=$.iB=new V.H(0,0,1)
t.a=s
r=$.iA
t.d=r==null?$.iA=new V.H(0,1,0):r
r=$.iz
t.e=r==null?$.iz=new V.H(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bh(s)
r=s.a
p=s.b
o=s.c
if(typeof o!=="number")return o.m()
t.a=s.t(0,Math.sqrt(r*r+p*p+o*o))
o=q.bh(t.d)
p=o.a
r=o.b
s=o.c
if(typeof s!=="number")return s.m()
t.d=o.t(0,Math.sqrt(p*p+r*r+s*s))
s=q.bh(t.e)
r=s.a
p=s.b
o=s.c
if(typeof o!=="number")return o.m()
t.e=s.t(0,Math.sqrt(r*r+p*p+o*o))}}}},
iu:function(b6,b7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.cL()
u=b6.fr.j(0,b5.aX)
if(u==null){u=A.n8(b5,b6.a)
t=u.b
if(t.length===0)H.y(P.C("May not cache a shader with no name."))
if(b6.fr.bc(0,t))H.y(P.C('Shader cache already contains a shader by the name "'+t+'".'))
b6.fr.k(0,t,u)}b5=b4.a=u
b7.e=null}s=b5.z
r=s.dl
b5=b7.e
if(!(b5 instanceof Z.d8))b5=b7.e=null
if(b5==null||!b5.d.q(0,r)){b5=s.k3
if(b5)b7.d.ac()
q=s.k4
if(q){p=b7.d
o=p.e
if(o!=null)++o.d
p.d.bR()
p.a.bR()
p=p.e
if(p!=null)p.ad(0)}p=s.r2
if(p){o=b7.d
n=o.e
if(n!=null)++n.d
o.a.hH()
o=o.e
if(o!=null)o.ad(0)}m=b7.d.hG(new Z.iO(b6.a),r)
m.aK($.bs()).e=b4.a.Q.c
if(b5)m.aK($.br()).e=b4.a.cx.c
if(q)m.aK($.bq()).e=b4.a.ch.c
if(s.r1)m.aK($.bG()).e=b4.a.cy.c
if(p)m.aK($.bH()).e=b4.a.db.c
if(s.rx)m.aK($.bp()).e=b4.a.dx.c
b7.e=m}b5=T.dN
l=H.e([],[b5])
q=b4.a
p=b6.a
p.useProgram(q.r)
q.x.hT()
if(s.dy){q=b4.a
o=b6.dx
o=o.gY(o)
q=q.dy
q.toString
q.ah(o.a8(0,!0))}if(s.fr){q=b4.a
o=b6.cx
if(o==null){o=b6.db
o=o.gY(o)
n=b6.dx
n=b6.cx=o.m(0,n.gY(n))
o=n}q=q.fr
q.toString
q.ah(o.a8(0,!0))}q=b4.a
o=b6.ch
if(o==null){o=b6.gir()
n=b6.dx
n=b6.ch=o.m(0,n.gY(n))
o=n}q=q.fy
q.toString
q.ah(o.a8(0,!0))
if(s.ry){q=b4.a
o=b4.b
q=q.k1
q.toString
q.ah(C.i.a8(o,!0))}if(s.x1){q=b4.a
o=b4.c
q=q.k2
q.toString
q.ah(C.i.a8(o,!0))}if(s.x2){q=b4.a
o=b4.d
q=q.k3
q.toString
q.ah(C.i.a8(o,!0))}if(s.y2>0){k=b4.e.a.length
q=b4.a.k4
C.d.bi(q.a,q.d,k)
for(q=[P.p],j=0;j<k;++j){o=b4.a
n=b4.e.a
if(j>=n.length)return H.c(n,j)
n=n[j]
o.toString
H.f(n,"$iam")
o=o.r1
if(j>=o.length)return H.c(o,j)
o=o[j]
i=new Float32Array(H.c5(H.m(n.a8(0,!0),"$ib",q,"$ab")))
C.d.e5(o.a,o.d,!1,i)}}if(s.a.a){q=b4.a
o=b4.f.f
q=q.r2
C.d.U(q.a,q.d,o.a,o.b,o.c)}if(s.id){if(s.b.a){q=b4.a
o=b4.r.f
q=q.x1
C.d.U(q.a,q.d,o.a,o.b,o.c)}if(s.c.a){q=b4.a
o=b4.x.f
q=q.y2
C.d.U(q.a,q.d,o.a,o.b,o.c)}if(s.d.a){q=b4.a
o=b4.y.f
q=q.dm
C.d.U(q.a,q.d,o.a,o.b,o.c)}q=s.e.a
if(!q)o=!1
else o=!0
if(o){o=b4.a
n=b4.z.ch
o=o.dq
C.d.Z(o.a,o.d,n)}if(q){q=b4.a
o=b4.z.f
q=q.dn
C.d.U(q.a,q.d,o.a,o.b,o.c)}q=s.z
if(q.length>0){o=b6.db
h=o.gY(o)
o=P.l
g=new H.Y([o,o])
for(o=b4.dx.e,n=o.length,f=0;f<o.length;o.length===n||(0,H.w)(o),++f){e=o[f]
d=g.j(0,0)
if(d==null)d=0
g.k(0,0,d+1)
c=J.d3(b4.a.c_.j(0,0),d)
b=h.bh(e.a)
a=b.a
a0=b.b
a1=b.c
if(typeof a1!=="number")return a1.m()
a1=b.t(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=c.e
a=a1.a
b=a1.b
a1=a1.c
C.d.U(a0.a,a0.d,a,b,a1)
a1=e.c
b=c.f
C.d.U(b.a,b.d,a1.a,a1.b,a1.c)}for(o=q.length,f=0;f<q.length;q.length===o||(0,H.w)(q),++f){n=q[f].a
k=g.j(0,n)
if(k==null)k=0
n=b4.a.bZ.j(0,n)
C.d.bi(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=b6.db
h=o.gY(o)
o=P.l
a2=new H.Y([o,o])
for(o=b4.dx.f,n=o.length,b=[b5],a=[P.p],f=0;f<o.length;o.length===n||(0,H.w)(o),++f){e=o[f]
a3=e.gaU()
d=a2.j(0,a3)
if(d==null)d=0
a2.k(0,a3,d+1)
c=J.d3(b4.a.c1.j(0,a3),d)
a4=h.m(0,e.gY(e))
a0=e.gY(e)
a1=$.cz
a0=a0.cn(a1==null?$.cz=new V.Z(0,0,0):a1)
a1=c.b
C.d.U(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=$.cz
a0=a4.cn(a0==null?$.cz=new V.Z(0,0,0):a0)
a1=c.c
C.d.U(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=e.gaT(e)
a1=c.e
C.d.U(a1.a,a1.d,a0.a,a0.b,a0.c)
e.gaA()
a0=a4.dH(0)
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
i=new Float32Array(H.c5(H.m(new V.du(a1,a5,a6,a7,a8,a9,b0,b1,a0).a8(0,!0),"$ib",a,"$ab")))
C.d.e4(b2.a,b2.d,!1,i)
e.gaA()
a0=e.gaA()
H.m(l,"$ib",b,"$ab")
if(!C.a.at(l,a0)){a0.saw(0,l.length)
C.a.h(l,a0)}a0=e.gaA()
a1=a0.gay(a0)
if(a1){a1=c.f
a1.toString
a5=a0.gay(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.gaw(a0)
a1.a.uniform1i(a1.d,a0)}}e.gaO()
a0=e.geb()
a1=c.x
a1.toString
a5=a0.gbX(a0)
a6=a0.gbY(a0)
a7=a0.ghS()
a0=a0.ghR()
C.d.e3(a1.a,a1.d,a5,a6,a7,a0)
a0=e.gaO()
if(!C.a.at(l,a0)){a0.saw(0,l.length)
C.a.h(l,a0)}a0=e.gaO()
a1=a0.gay(a0)
if(a1){a1=c.r
a1.toString
a5=a0.gay(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.gaw(a0)
a1.a.uniform1i(a1.d,a0)}}if(e.ghU()){a0=e.ghC()
a1=c.y
C.d.Z(a1.a,a1.d,a0)
a0=e.ghD()
a1=c.z
C.d.Z(a1.a,a1.d,a0)
a0=e.ghE()
a1=c.Q
C.d.Z(a1.a,a1.d,a0)}}for(o=q.length,f=0;f<q.length;q.length===o||(0,H.w)(q),++f){n=q[f].a
k=a2.j(0,n)
if(k==null)k=0
n=b4.a.c0.j(0,n)
C.d.bi(n.a,n.d,k)}}q=s.ch
if(q.length>0){o=b6.db
h=o.gY(o)
o=P.l
b3=new H.Y([o,o])
for(o=b4.dx.r,n=o.length,b5=[b5],f=0;f<o.length;o.length===n||(0,H.w)(o),++f){e=o[f]
a3=e.gaU()
d=b3.j(0,a3)
if(d==null)d=0
b3.k(0,a3,d+1)
c=J.d3(b4.a.c3.j(0,a3),d)
b=e.giq(e)
a=c.b
C.d.U(a.a,a.d,b.a,b.b,b.c)
b=e.giM(e).j3()
a=c.c
C.d.U(a.a,a.d,b.a,b.b,b.c)
b=h.cn(e.giq(e))
a=c.d
C.d.U(a.a,a.d,b.a,b.b,b.c)
b=e.gaT(e)
a=c.e
C.d.U(a.a,a.d,b.a,b.b,b.c)
e.gaA()
b=e.gco()
a=c.f
C.d.U(a.a,a.d,b.a,b.b,b.c)
b=e.gck(e)
a=c.r
C.d.U(a.a,a.d,b.a,b.b,b.c)
b=e.gj4()
a=c.x
C.d.Z(a.a,a.d,b)
b=e.gj5()
a=c.y
C.d.Z(a.a,a.d,b)
e.gaA()
b=e.gaA()
H.m(l,"$ib",b5,"$ab")
if(!C.a.at(l,b)){b.saw(0,l.length)
C.a.h(l,b)}b=e.gaA()
a=b.gay(b)
if(a){a=c.dx
a.toString
a0=b.gay(b)
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.gaw(b)
a.a.uniform1i(a.d,b)}}e.gaO()
b=e.geb()
a=c.z
a.toString
a0=b.gbX(b)
a1=b.gbY(b)
a5=b.ghS()
b=b.ghR()
C.d.e3(a.a,a.d,a0,a1,a5,b)
b=e.gaO()
if(!C.a.at(l,b)){b.saw(0,l.length)
C.a.h(l,b)}b=e.gaO()
a=b.gay(b)
if(a){a=c.dy
a.toString
a0=b.gay(b)
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.gaw(b)
a.a.uniform1i(a.d,b)}}if(e.giN()){b=e.giL()
a=c.Q
C.d.Z(a.a,a.d,b)
b=e.giK()
a=c.ch
C.d.Z(a.a,a.d,b)}if(e.ghU()){b=e.ghC()
a=c.cx
C.d.Z(a.a,a.d,b)
b=e.ghD()
a=c.cy
C.d.Z(a.a,a.d,b)
b=e.ghE()
a=c.db
C.d.Z(a.a,a.d,b)}}for(b5=q.length,f=0;f<q.length;q.length===b5||(0,H.w)(q),++f){o=q[f].a
k=b3.j(0,o)
if(k==null)k=0
o=b4.a.c2.j(0,o)
C.d.bi(o.a,o.d,k)}}}if(s.dx){b5=b4.a
q=b6.Q
if(q==null){q=b6.db
q=b6.Q=q.gY(q).dH(0)}b5=b5.id
b5.toString
b5.ah(q.a8(0,!0))}if(s.cy){b4.eA(l,b4.ch)
b5=b4.a
q=b4.ch
b5.ha(b5.dr,q)
if(s.r.a){b5=b4.a
q=b4.cx.f
b5=b5.ds
C.d.U(b5.a,b5.d,q.a,q.b,q.c)}b5=s.x.a
if(!b5)q=!1
else q=!0
if(q){q=b4.a
o=b4.cy.ch
q=q.dt
C.d.Z(q.a,q.d,o)}if(b5){b5=b4.a
q=b4.cy.f
b5=b5.du
C.d.U(b5.a,b5.d,q.a,q.b,q.c)}}b5=s.y.a
q=!b5
if(q)o=!1
else o=!0
if(o){if(b5){b5=b4.a
o=b4.db.f
b5=b5.dv
C.d.Z(b5.a,b5.d,o)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].bb(b6)
b5=b7.e
b5.bb(b6)
b5.aM(b6)
b5.e2(b6)
if(q)b5=!1
else b5=!0
if(b5)p.disable(3042)
for(j=0;j<l.length;++j)l[j].e2(b6)
b5=b4.a
b5.toString
p.useProgram(null)
b5.x.hQ()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cL().aX},
seE:function(a){this.e=H.m(a,"$ia0",[V.am],"$aa0")}}
O.h5.prototype={
$2:function(a,b){H.a_(a)
H.a_(b)
if(typeof b!=="number")return b.n()
return C.a.h(this.b,new A.az(a,C.e.a1(b+3,4)*4))},
$S:15}
O.h6.prototype={
$2:function(a,b){H.f(a,"$iaz")
H.f(b,"$iaz")
return J.ko(a.a,b.a)},
$S:47}
O.h7.prototype={
$2:function(a,b){H.a_(a)
H.a_(b)
if(typeof b!=="number")return b.n()
return C.a.h(this.b,new A.aB(a,C.e.a1(b+3,4)*4))},
$S:15}
O.h8.prototype={
$2:function(a,b){H.f(a,"$iaB")
H.f(b,"$iaB")
return J.ko(a.a,b.a)},
$S:48}
O.h9.prototype={
$2:function(a,b){H.a_(a)
H.a_(b)
if(typeof b!=="number")return b.n()
return C.a.h(this.b,new A.aC(a,C.e.a1(b+3,4)*4))},
$S:15}
O.ha.prototype={
$2:function(a,b){H.f(a,"$iaC")
H.f(b,"$iaC")
return J.ko(a.a,b.a)},
$S:49}
O.h_.prototype={
ar:function(){var u,t=this
t.cv()
u=t.f
if(!(Math.abs(u-1)<$.I().a)){t.f=1
u=new D.K(t.b,u,1,[P.p])
u.b=!0
t.a.a5(u)}}}
O.dt.prototype={
ar:function(){},
d7:function(a){var u,t,s=this
if(!s.c.q(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.ar()
u=s.a
u.a=null
u.a5(null)}}}
O.h0.prototype={}
O.b6.prototype={
d6:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.K(s.b+".color",u,a,[V.a1])
t.b=!0
s.a.a5(t)}},
ar:function(){this.cv()
this.d6(new V.a1(1,1,1))},
saT:function(a,b){this.d7(new A.al(!0,!1,!1))
this.d6(b)}}
O.h2.prototype={}
O.h3.prototype={
ar:function(){var u,t=this
t.cw()
u=t.ch
if(!(Math.abs(u-1)<$.I().a)){t.ch=1
u=new D.K(t.b+".refraction",u,1,[P.p])
u.b=!0
t.a.a5(u)}}}
O.h4.prototype={
d8:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.I().a)){u.ch=a
t=new D.K(u.b+".shininess",t,a,[P.p])
t.b=!0
u.a.a5(t)}},
ar:function(){this.cw()
this.d8(100)}}
O.bZ.prototype={}
T.dN.prototype={}
V.eX.prototype={
aL:function(a,b){return!0},
i:function(a){return"all"},
$ibj:1}
V.bj.prototype={}
V.dr.prototype={
aL:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)if(u[s].aL(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.w)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saq:function(a){this.a=H.m(a,"$ib",[V.bj],"$ab")},
$ibj:1}
V.bl.prototype={
aL:function(a,b){return!this.ef(0,b)},
i:function(a){return"!["+this.cu(0)+"]"}}
V.hH.prototype={
ej:function(a){var u,t
if(a.a.length<=0)throw H.d(P.C("May not create a SetMatcher with zero characters."))
u=new H.Y([P.l,P.ab])
for(t=new H.dp(a,a.gl(a),[H.ax(a,"v",0)]);t.H();)u.k(0,t.d,!0)
this.sh9(u)},
aL:function(a,b){return this.a.bc(0,b)},
i:function(a){var u=this.a
return P.cF(u.gal(u),0,null)},
sh9:function(a){this.a=H.m(a,"$iz",[P.l,P.ab],"$az")},
$ibj:1}
V.cD.prototype={
u:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cH(this.a.M(0,b))
r.saq(H.e([],[V.bj]))
r.c=!1
C.a.h(this.c,r)
return r},
hX:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
if(r.aL(0,a))return r}return},
i:function(a){return this.b},
shs:function(a){this.c=H.m(a,"$ib",[V.cH],"$ab")}}
V.dP.prototype={
i:function(a){var u=H.mj(this.b,"\n","\\n"),t=H.mj(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cG.prototype={
i:function(a){return this.b},
sh4:function(a){var u=P.h
this.c=H.m(a,"$iz",[u,u],"$az")}}
V.i4.prototype={
M:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cD(this,b)
u.shs(H.e([],[V.cH]))
u.d=null
this.a.k(0,b,u)}return u},
b3:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cG(a)
u=P.h
t.sh4(new H.Y([u,u]))
this.b.k(0,a,t)}return t},
iD:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.e([],[V.dP]),k=this.c,j=[P.l],i=H.e([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.E(a,s)
q=k.hX(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cF(i,0,m)
throw H.d(P.C("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.e([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cF(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.dP(n==null?o.b:n,p,s)}++s}}},
shj:function(a){this.a=H.m(a,"$iz",[P.h,V.cD],"$az")},
shl:function(a){this.b=H.m(a,"$iz",[P.h,V.cG],"$az")}}
V.cH.prototype={
i:function(a){return this.b.b+": "+this.cu(0)}}
X.da.prototype={$icu:1}
X.fD.prototype={
gA:function(){var u=this.x
return u==null?this.x=D.R():u}}
X.dz.prototype={
gA:function(){var u=this.f
return u==null?this.f=D.R():u},
aE:function(a){var u
H.f(a,"$iB")
u=this.f
if(u!=null)u.F(a)},
ex:function(){return this.aE(null)},
sb_:function(a){var u,t,s=this
if(!J.O(s.b,a)){u=s.b
if(u!=null)u.gA().K(0,s.gcC())
t=s.b
s.b=a
if(a!=null)a.gA().h(0,s.gcC())
u=new D.K("mover",t,s.b,[U.a9])
u.b=!0
s.aE(u)}},
$icu:1,
$ida:1}
X.dM.prototype={}
V.kf.prototype={
$1:function(a){var u
H.f(a,"$ib9")
u=C.c.e1(this.a.gi_(),2)
if(u!=="0.00")P.l_(u+" fps")},
$S:50}
V.hx.prototype={
df:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.lz().gcf().j(0,H.k(u))
if(t==null)if(d){c.$0()
m.dd(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.l4(m.c).h(0,q)
o=W.mX("radio")
o.checked=s
o.name=u
u=W.o
W.aa(o,"change",H.n(new V.hy(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.l4(m.c).h(0,r.createElement("br"))},
aI:function(a,b,c){return this.df(a,b,c,!1)},
dd:function(a){var u,t,s=P.lz(),r=P.h,q=P.n3(s.gcf(),r,r)
q.k(0,this.a,a)
u=s.dW(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.jp([],[]).cp(""),"",t)}}
V.hy.prototype={
$1:function(a){var u=this
if(H.E(u.b.checked)){u.c.$0()
u.a.dd(u.d)}},
$S:26}
V.hL.prototype={
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
W.aa(q,"scroll",H.n(new V.hN(o),{func:1,ret:-1,args:[r]}),!1,r)},
dg:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.h],"$ab")
this.hd()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.iD(C.a.i4(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.w)(s),++q){p=s[q]
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
if(H.oU(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=H.M(m[1])
l.textContent=H.M(m[0])
t.appendChild(l)}else{k=P.jz(C.N,n,C.h,!1)
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
hv:function(a){var u,t,s,r,q,p,o,n="auto"
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
s=H.f(r.insertCell(-1),"$ibn").style
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
o=H.f(r.insertCell(-1),"$ibn")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
hd:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.i4()
t=P.h
u.shj(new H.Y([t,V.cD]))
u.shl(new H.Y([t,V.cG]))
u.c=null
u.c=u.M(0,q)
t=u.M(0,q).u(0,p)
s=V.ai(new H.a4("*"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,p).u(0,p)
s=new V.bl()
r=[V.bj]
s.saq(H.e([],r))
C.a.h(t.a,s)
t=V.ai(new H.a4("*"))
C.a.h(s.a,t)
t=u.M(0,p).u(0,"BoldEnd")
s=V.ai(new H.a4("*"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,q).u(0,o)
s=V.ai(new H.a4("_"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,o).u(0,o)
s=new V.bl()
s.saq(H.e([],r))
C.a.h(t.a,s)
t=V.ai(new H.a4("_"))
C.a.h(s.a,t)
t=u.M(0,o).u(0,n)
s=V.ai(new H.a4("_"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,q).u(0,m)
s=V.ai(new H.a4("`"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,m).u(0,m)
s=new V.bl()
s.saq(H.e([],r))
C.a.h(t.a,s)
t=V.ai(new H.a4("`"))
C.a.h(s.a,t)
t=u.M(0,m).u(0,"CodeEnd")
s=V.ai(new H.a4("`"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,q).u(0,l)
s=V.ai(new H.a4("["))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,l).u(0,k)
s=V.ai(new H.a4("|"))
C.a.h(t.a,s)
s=u.M(0,l).u(0,j)
t=V.ai(new H.a4("]"))
C.a.h(s.a,t)
s.c=!0
s=u.M(0,l).u(0,l)
t=new V.bl()
t.saq(H.e([],r))
C.a.h(s.a,t)
s=V.ai(new H.a4("|]"))
C.a.h(t.a,s)
s=u.M(0,k).u(0,j)
t=V.ai(new H.a4("]"))
C.a.h(s.a,t)
s.c=!0
s=u.M(0,k).u(0,k)
t=new V.bl()
t.saq(H.e([],r))
C.a.h(s.a,t)
s=V.ai(new H.a4("|]"))
C.a.h(t.a,s)
C.a.h(u.M(0,q).u(0,i).a,new V.eX())
s=u.M(0,i).u(0,i)
t=new V.bl()
t.saq(H.e([],r))
C.a.h(s.a,t)
s=V.ai(new H.a4("*_`["))
C.a.h(t.a,s)
s=u.M(0,"BoldEnd")
s.d=s.a.b3(p)
s=u.M(0,n)
s.d=s.a.b3(o)
s=u.M(0,"CodeEnd")
s.d=s.a.b3(m)
s=u.M(0,j)
s.d=s.a.b3("Link")
s=u.M(0,i)
s.d=s.a.b3(i)
this.b=u}}
V.hN.prototype={
$1:function(a){P.lv(C.o,new V.hM(this.a))},
$S:26}
V.hM.prototype={
$0:function(){var u=C.c.ae(document.documentElement.scrollTop),t=this.a.style,s=H.k(-0.01*u)+"px"
t.top=s},
$S:0}
K.k4.prototype={
$1:function(a){var u=H.x(H.f(a,"$iB"),"$idL").c,t=this.a.af(0,u,null),s=this.b.af(0,u,null),r=this.c
r.e.k(0,0,t)
r.e.k(0,1,s)
r.e.k(0,2,t)
r.e.k(0,3,s)
r.e.k(0,4,t)
r.e.k(0,5,s)
r.e.k(0,6,t)
r.e.k(0,7,s)},
$S:10}
K.kc.prototype={
$1:function(a){a.ac()
this.a.scs(0,a)},
$S:52}
K.k5.prototype={
$0:function(){this.a.$1(F.m2(30,null,30))},
$S:0}
K.k6.prototype={
$0:function(){this.a.$1(F.m3(!0,100,20,1))},
$S:0}
K.k7.prototype={
$0:function(){this.a.$1(F.m3(!1,30,12,0))},
$S:0}
K.k8.prototype={
$0:function(){this.a.$1(F.oT(20,20))},
$S:0}
K.k9.prototype={
$0:function(){this.a.$1(F.oX(1.5,0.25))},
$S:0}
K.ka.prototype={
$0:function(){this.a.$1(F.oL(0.1))},
$S:0}
K.kb.prototype={
$0:function(){this.a.$1(F.oF())},
$S:0};(function aliases(){var u=J.a.prototype
u.ed=u.i
u=J.dl.prototype
u.ee=u.i
u=O.dt.prototype
u.cv=u.ar
u=O.b6.prototype
u.cw=u.ar
u=V.dr.prototype
u.ef=u.aL
u.cu=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"ot","nG",12)
u(P,"ou","nH",12)
u(P,"ov","nI",12)
t(P,"m0","or",3)
var n
s(n=E.an.prototype,"gdO",0,0,null,["$1","$0"],["dP","ih"],1,0)
s(n,"gdM",0,0,null,["$1","$0"],["dN","ig"],1,0)
s(n,"gdK",0,0,null,["$1","$0"],["dL","ib"],1,0)
r(n,"gi9","ia",6)
r(n,"gic","ie",6)
s(n=E.dO.prototype,"gcz",0,0,null,["$1","$0"],["cB","cA"],1,0)
q(n,"giw","dX",3)
p(n=X.dV.prototype,"gfq","fs",14)
p(n,"gfc","fd",14)
p(n,"gfk","fl",4)
p(n,"gfv","fw",25)
p(n,"gft","fu",25)
p(n,"gfB","fC",4)
p(n,"gfF","fG",4)
p(n,"gfo","fp",4)
p(n,"gfD","fE",4)
p(n,"gfm","fn",4)
p(n,"gfH","fI",33)
p(n,"gfJ","fK",14)
p(n,"gfV","fW",13)
p(n,"gfR","fS",13)
p(n,"gfT","fU",13)
s(D.bf.prototype,"gem",0,0,null,["$1","$0"],["an","en"],1,0)
s(n=D.dn.prototype,"gcZ",0,0,null,["$1","$0"],["d_","fz"],1,0)
p(n,"gfL","fM",44)
r(n,"gf6","f7",23)
r(n,"gfP","fQ",23)
o(V.S.prototype,"gl","c7",22)
o(V.H.prototype,"gl","c7",22)
s(n=U.co.prototype,"gaD",0,0,null,["$1","$0"],["D","a_"],1,0)
r(n,"geo","ep",21)
r(n,"gfN","fO",21)
s(n=U.dW.prototype,"gaD",0,0,null,["$1","$0"],["D","a_"],1,0)
p(n,"gbv","bw",2)
p(n,"gbx","by",2)
p(n,"gbz","bA",2)
s(n=U.dX.prototype,"gaD",0,0,null,["$1","$0"],["D","a_"],1,0)
p(n,"gbv","bw",2)
p(n,"gbx","by",2)
p(n,"gbz","bA",2)
p(n,"gf0","f1",2)
p(n,"gf2","f3",2)
p(n,"ghq","hr",2)
p(n,"gho","hp",2)
p(n,"ghm","hn",2)
p(U.dY.prototype,"gf4","f5",2)
s(n=M.dg.prototype,"gai",0,0,null,["$1","$0"],["ao","er"],1,0)
r(n,"gfg","fh",6)
r(n,"gfi","fj",6)
s(n=O.ds.prototype,"gfe",0,0,null,["$1","$0"],["a5","ff"],1,0)
s(n,"gh7",0,0,null,["$1","$0"],["d4","h8"],1,0)
r(n,"gf8","f9",20)
r(n,"gfa","fb",20)
s(X.dz.prototype,"gcC",0,0,null,["$1","$0"],["aE","ex"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.P,null)
s(P.P,[H.kz,J.a,J.at,P.ef,P.j,H.dp,P.b3,H.bQ,H.cK,H.fe,H.i9,P.bu,H.ci,H.ew,P.ag,H.fN,H.fP,H.fI,P.eC,P.bd,P.aH,P.e0,P.hV,P.cE,P.hW,P.b9,P.ak,P.jC,P.jl,P.cO,P.jf,P.v,P.ju,P.fW,P.bM,P.jB,P.jA,P.ab,P.au,P.a7,P.b1,P.hs,P.dJ,P.e8,P.fC,P.b,P.z,P.L,P.ap,P.h,P.aj,P.c4,P.iq,P.jm,W.fh,W.D,W.di,P.jo,P.jg,P.Q,O.a0,O.cr,E.f8,E.an,E.hz,D.B,E.dO,Z.e_,Z.iO,Z.d8,Z.bv,Z.bC,D.fb,D.b2,X.d9,X.dm,X.fK,X.fT,X.av,X.hi,X.i5,X.dV,D.bf,D.a8,D.dA,D.dI,V.a1,V.ay,V.ft,V.du,V.am,V.a6,V.Z,V.aP,V.dE,V.S,V.H,U.dW,U.dX,U.dY,M.dg,A.d5,A.f1,A.al,A.az,A.aB,A.aC,A.h1,A.c_,A.c0,A.c3,A.dR,A.ij,F.a5,F.fw,F.bi,F.fM,F.by,F.bY,F.hI,F.hJ,F.hK,F.af,F.iC,F.iD,F.iG,F.iI,F.iJ,F.iK,O.bZ,O.dt,O.h2,V.eX,V.bj,V.dr,V.hH,V.cD,V.dP,V.cG,V.i4,X.da,X.dM,X.dz,V.hx,V.hL])
s(J.a,[J.fG,J.dk,J.dl,J.aM,J.bw,J.bg,H.cv,H.bx,W.i,W.eW,W.bK,W.b_,W.b0,W.T,W.e2,W.fl,W.fm,W.e4,W.df,W.e6,W.fo,W.o,W.e9,W.aL,W.fE,W.eb,W.cp,W.fS,W.hc,W.eg,W.eh,W.aN,W.ei,W.el,W.aO,W.ep,W.er,W.aR,W.es,W.aS,W.ex,W.aD,W.eA,W.i3,W.aU,W.eD,W.i7,W.iv,W.eI,W.eK,W.eM,W.eO,W.eQ,P.b5,P.ed,P.b8,P.en,P.hw,P.ey,P.ba,P.eF,P.f2,P.e1,P.d6,P.dC,P.bX,P.dG,P.dS,P.eu])
s(J.dl,[J.ht,J.bB,J.bh])
t(J.ky,J.aM)
s(J.bw,[J.dj,J.fH])
t(P.fR,P.ef)
s(P.fR,[H.dT,W.iX,W.iW,P.fy])
t(H.a4,H.dT)
s(P.j,[H.fr,H.fX,H.iP])
s(P.b3,[H.fY,H.iQ])
t(H.ff,H.fe)
s(P.bu,[H.hp,H.fJ,H.io,H.ib,H.fa,H.hF,P.f0,P.dy,P.aY,P.ip,P.il,P.dK,P.fd,P.fk])
s(H.ci,[H.kl,H.i_,H.jZ,H.k_,H.k0,P.iT,P.iS,P.iU,P.iV,P.jt,P.js,P.j2,P.j6,P.j3,P.j4,P.j5,P.j9,P.ja,P.j8,P.j7,P.hX,P.hY,P.jM,P.jj,P.ji,P.jk,P.fQ,P.fV,P.fp,P.fq,P.iu,P.ir,P.is,P.it,P.jv,P.jw,P.jy,P.jx,P.jG,P.jF,P.jH,P.jI,W.he,W.hg,W.hE,W.hU,W.j1,P.jq,P.jO,P.fz,P.fA,P.f4,E.hA,E.hB,E.hC,E.i2,D.fu,D.fv,F.jD,F.jP,F.jR,F.jS,F.jT,F.kg,F.kh,F.kk,F.k2,F.jQ,F.jW,F.jX,F.iM,F.iL,F.iE,F.iF,O.h5,O.h6,O.h7,O.h8,O.h9,O.ha,V.kf,V.hy,V.hN,V.hM,K.k4,K.kc,K.k5,K.k6,K.k7,K.k8,K.k9,K.ka,K.kb])
s(H.i_,[H.hS,H.cg])
t(H.iR,P.f0)
t(P.fU,P.ag)
t(H.Y,P.fU)
t(H.fO,H.fr)
t(H.dv,H.bx)
s(H.dv,[H.cP,H.cR])
t(H.cQ,H.cP)
t(H.cw,H.cQ)
t(H.cS,H.cR)
t(H.dw,H.cS)
s(H.dw,[H.hj,H.hk,H.hl,H.hm,H.hn,H.dx,H.cx])
t(P.jh,P.jC)
t(P.je,P.jl)
t(P.eH,P.fW)
t(P.dU,P.eH)
s(P.bM,[P.f6,P.fs])
t(P.bP,P.hW)
s(P.bP,[P.f7,P.iy,P.ix])
t(P.iw,P.fs)
s(P.a7,[P.p,P.l])
s(P.aY,[P.bW,P.fF])
t(P.iZ,P.c4)
s(W.i,[W.G,W.fx,W.cs,W.aQ,W.cT,W.aT,W.aE,W.cV,W.iN,W.cM,P.f5,P.bJ])
s(W.G,[W.a2,W.bt])
s(W.a2,[W.t,P.r])
s(W.t,[W.eY,W.eZ,W.bL,W.dd,W.fB,W.cq,W.hG,W.bn])
s(W.b_,[W.cj,W.fi,W.fj])
t(W.fg,W.b0)
t(W.ck,W.e2)
t(W.e5,W.e4)
t(W.de,W.e5)
t(W.e7,W.e6)
t(W.fn,W.e7)
t(W.aA,W.bK)
t(W.ea,W.e9)
t(W.cm,W.ea)
t(W.ec,W.eb)
t(W.bR,W.ec)
t(W.bA,W.o)
s(W.bA,[W.b4,W.ac,W.aV])
t(W.hd,W.eg)
t(W.hf,W.eh)
t(W.ej,W.ei)
t(W.hh,W.ej)
t(W.em,W.el)
t(W.cy,W.em)
t(W.eq,W.ep)
t(W.hu,W.eq)
t(W.hD,W.er)
t(W.cU,W.cT)
t(W.hP,W.cU)
t(W.et,W.es)
t(W.hQ,W.et)
t(W.hT,W.ex)
t(W.eB,W.eA)
t(W.i0,W.eB)
t(W.cW,W.cV)
t(W.i1,W.cW)
t(W.eE,W.eD)
t(W.i6,W.eE)
t(W.bc,W.ac)
t(W.eJ,W.eI)
t(W.iY,W.eJ)
t(W.e3,W.df)
t(W.eL,W.eK)
t(W.jb,W.eL)
t(W.eN,W.eM)
t(W.ek,W.eN)
t(W.eP,W.eO)
t(W.jn,W.eP)
t(W.eR,W.eQ)
t(W.jr,W.eR)
t(W.j_,P.hV)
t(W.kL,W.j_)
t(W.j0,P.cE)
t(P.jp,P.jo)
t(P.ah,P.jg)
t(P.ee,P.ed)
t(P.fL,P.ee)
t(P.eo,P.en)
t(P.hq,P.eo)
t(P.ez,P.ey)
t(P.hZ,P.ez)
t(P.eG,P.eF)
t(P.i8,P.eG)
t(P.f3,P.e1)
t(P.hr,P.bJ)
t(P.ev,P.eu)
t(P.hR,P.ev)
s(D.B,[E.dL,D.bS,D.bT,D.K,X.hv])
s(E.f8,[Z.d7,A.cC,T.dN])
s(X.hv,[X.dq,X.bk,X.ct,X.dQ])
s(O.a0,[D.dn,U.co])
s(D.fb,[U.fc,U.a9])
s(U.a9,[U.db,U.dF])
t(A.fZ,A.cC)
s(A.dR,[A.aF,A.ig,A.ih,A.ii,A.id,A.ae,A.ie,A.W,A.cI,A.ik,A.cJ,A.aw,A.c1,A.c2])
t(F.hO,F.fw)
t(F.ic,F.fM)
t(F.iH,F.iI)
t(F.ho,F.iJ)
t(O.ds,O.bZ)
s(O.dt,[O.h_,O.h0,O.b6])
s(O.b6,[O.h3,O.h4])
s(V.dr,[V.bl,V.cH])
t(X.fD,X.dM)
u(H.dT,H.cK)
u(H.cP,P.v)
u(H.cQ,H.bQ)
u(H.cR,P.v)
u(H.cS,H.bQ)
u(P.ef,P.v)
u(P.eH,P.ju)
u(W.e2,W.fh)
u(W.e4,P.v)
u(W.e5,W.D)
u(W.e6,P.v)
u(W.e7,W.D)
u(W.e9,P.v)
u(W.ea,W.D)
u(W.eb,P.v)
u(W.ec,W.D)
u(W.eg,P.ag)
u(W.eh,P.ag)
u(W.ei,P.v)
u(W.ej,W.D)
u(W.el,P.v)
u(W.em,W.D)
u(W.ep,P.v)
u(W.eq,W.D)
u(W.er,P.ag)
u(W.cT,P.v)
u(W.cU,W.D)
u(W.es,P.v)
u(W.et,W.D)
u(W.ex,P.ag)
u(W.eA,P.v)
u(W.eB,W.D)
u(W.cV,P.v)
u(W.cW,W.D)
u(W.eD,P.v)
u(W.eE,W.D)
u(W.eI,P.v)
u(W.eJ,W.D)
u(W.eK,P.v)
u(W.eL,W.D)
u(W.eM,P.v)
u(W.eN,W.D)
u(W.eO,P.v)
u(W.eP,W.D)
u(W.eQ,P.v)
u(W.eR,W.D)
u(P.ed,P.v)
u(P.ee,W.D)
u(P.en,P.v)
u(P.eo,W.D)
u(P.ey,P.v)
u(P.ez,W.D)
u(P.eF,P.v)
u(P.eG,W.D)
u(P.e1,P.ag)
u(P.eu,P.v)
u(P.ev,W.D)})();(function constants(){var u=hunkHelpers.makeConstList
C.n=W.bL.prototype
C.J=J.a.prototype
C.a=J.aM.prototype
C.e=J.dj.prototype
C.i=J.dk.prototype
C.c=J.bw.prototype
C.b=J.bg.prototype
C.K=J.bh.prototype
C.Q=W.cy.prototype
C.w=J.ht.prototype
C.d=P.bX.prototype
C.p=J.bB.prototype
C.x=W.bc.prototype
C.y=W.cM.prototype
C.R=new P.f7()
C.z=new P.f6()
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

C.G=new P.hs()
C.h=new P.iw()
C.H=new P.iy()
C.f=new P.jh()
C.o=new P.b1(0)
C.I=new P.b1(5e6)
C.t=H.e(u([127,2047,65535,1114111]),[P.l])
C.j=H.e(u([0,0,32776,33792,1,10240,0,0]),[P.l])
C.k=H.e(u([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.l=H.e(u([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.M=H.e(u([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.N=H.e(u([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.m=H.e(u([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.u=H.e(u([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.O=H.e(u([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.v=H.e(u([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.L=H.e(u([]),[P.h])
C.P=new H.ff(0,{},C.L,[P.h,P.h])})()
var v={mangledGlobalNames:{l:"int",p:"double",a7:"num",h:"String",ab:"bool",L:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.L},{func:1,ret:-1,opt:[D.B]},{func:1,ret:-1,args:[D.B]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ac]},{func:1,ret:P.L,args:[F.af,P.p,P.p]},{func:1,ret:-1,args:[P.l,[P.j,E.an]]},{func:1,ret:P.L,args:[,,]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:P.L,args:[F.a5]},{func:1,ret:P.L,args:[D.B]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aV]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:V.Z,args:[P.p]},{func:1,ret:P.p,args:[P.p]},{func:1,ret:P.h,args:[P.l]},{func:1,ret:P.L,args:[,]},{func:1,ret:-1,args:[P.l,[P.j,V.am]]},{func:1,ret:-1,args:[P.l,[P.j,U.a9]]},{func:1,ret:P.p},{func:1,ret:-1,args:[P.l,[P.j,D.a8]]},{func:1,args:[,]},{func:1,ret:-1,args:[W.b4]},{func:1,ret:P.L,args:[W.o]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:W.a2,args:[W.G]},{func:1,ret:P.ab,args:[W.G]},{func:1,args:[W.o]},{func:1,ret:P.Q,args:[,,]},{func:1,ret:-1,args:[W.bc]},{func:1,ret:P.Q,args:[P.l]},{func:1,ret:P.L,args:[P.h,,]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:P.L,args:[P.h]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.l]},{func:1,ret:[P.z,P.h,P.h],args:[[P.z,P.h,P.h],P.h]},{func:1,ret:[P.aH,,],args:[,]},{func:1,ret:P.L,args:[,],opt:[P.ap]},{func:1,ret:P.ab,args:[[P.j,D.a8]]},{func:1,ret:P.L,args:[{func:1,ret:-1}]},{func:1,args:[P.h]},{func:1,ret:P.l,args:[A.az,A.az]},{func:1,ret:P.l,args:[A.aB,A.aB]},{func:1,ret:P.l,args:[A.aC,A.aC]},{func:1,ret:P.L,args:[P.b9]},{func:1,args:[,P.h]},{func:1,ret:-1,args:[F.bY]},{func:1,ret:P.L,args:[P.a7]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aZ=0
$.ch=null
$.l6=null
$.kP=!1
$.ma=null
$.lZ=null
$.mh=null
$.jU=null
$.k1=null
$.kY=null
$.c6=null
$.d_=null
$.d0=null
$.kQ=!1
$.X=C.f
$.aq=[]
$.li=null
$.lm=null
$.cz=null
$.lr=null
$.lC=null
$.lF=null
$.lE=null
$.iz=null
$.iA=null
$.iB=null
$.lD=null
$.ll=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"p1","mm",function(){return H.m9("_$dart_dartClosure")})
u($,"p2","l0",function(){return H.m9("_$dart_js")})
u($,"p7","mn",function(){return H.bb(H.ia({
toString:function(){return"$receiver$"}}))})
u($,"p8","mo",function(){return H.bb(H.ia({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"p9","mp",function(){return H.bb(H.ia(null))})
u($,"pa","mq",function(){return H.bb(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pd","mt",function(){return H.bb(H.ia(void 0))})
u($,"pe","mu",function(){return H.bb(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pc","ms",function(){return H.bb(H.lx(null))})
u($,"pb","mr",function(){return H.bb(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pg","mw",function(){return H.bb(H.lx(void 0))})
u($,"pf","mv",function(){return H.bb(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pv","l1",function(){return P.nF()})
u($,"ph","mx",function(){return P.nB()})
u($,"pw","mB",function(){return H.na(H.c5(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"px","mC",function(){return P.no("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"py","mD",function(){return P.o0()})
u($,"po","mA",function(){return Z.aG(0)})
u($,"pi","my",function(){return Z.aG(511)})
u($,"pq","bs",function(){return Z.aG(1)})
u($,"pp","br",function(){return Z.aG(2)})
u($,"pk","bq",function(){return Z.aG(4)})
u($,"pr","bG",function(){return Z.aG(8)})
u($,"ps","bH",function(){return Z.aG(16)})
u($,"pl","d1",function(){return Z.aG(32)})
u($,"pm","d2",function(){return Z.aG(64)})
u($,"pn","mz",function(){return Z.aG(96)})
u($,"pt","cf",function(){return Z.aG(128)})
u($,"pj","bp",function(){return Z.aG(256)})
u($,"p0","ml",function(){return new V.ft(1e-9)})
u($,"p_","I",function(){return $.ml()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cv,DataView:H.bx,ArrayBufferView:H.bx,Float32Array:H.cw,Float64Array:H.cw,Int16Array:H.hj,Int32Array:H.hk,Int8Array:H.hl,Uint16Array:H.hm,Uint32Array:H.hn,Uint8ClampedArray:H.dx,CanvasPixelArray:H.dx,Uint8Array:H.cx,HTMLAudioElement:W.t,HTMLBRElement:W.t,HTMLBaseElement:W.t,HTMLBodyElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLImageElement:W.t,HTMLLIElement:W.t,HTMLLabelElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMediaElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableColElement:W.t,HTMLTableElement:W.t,HTMLTableRowElement:W.t,HTMLTableSectionElement:W.t,HTMLTemplateElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLVideoElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,AccessibleNodeList:W.eW,HTMLAnchorElement:W.eY,HTMLAreaElement:W.eZ,Blob:W.bK,HTMLCanvasElement:W.bL,CDATASection:W.bt,CharacterData:W.bt,Comment:W.bt,ProcessingInstruction:W.bt,Text:W.bt,CSSNumericValue:W.cj,CSSUnitValue:W.cj,CSSPerspective:W.fg,CSSCharsetRule:W.T,CSSConditionRule:W.T,CSSFontFaceRule:W.T,CSSGroupingRule:W.T,CSSImportRule:W.T,CSSKeyframeRule:W.T,MozCSSKeyframeRule:W.T,WebKitCSSKeyframeRule:W.T,CSSKeyframesRule:W.T,MozCSSKeyframesRule:W.T,WebKitCSSKeyframesRule:W.T,CSSMediaRule:W.T,CSSNamespaceRule:W.T,CSSPageRule:W.T,CSSRule:W.T,CSSStyleRule:W.T,CSSSupportsRule:W.T,CSSViewportRule:W.T,CSSStyleDeclaration:W.ck,MSStyleCSSProperties:W.ck,CSS2Properties:W.ck,CSSImageValue:W.b_,CSSKeywordValue:W.b_,CSSPositionValue:W.b_,CSSResourceValue:W.b_,CSSURLImageValue:W.b_,CSSStyleValue:W.b_,CSSMatrixComponent:W.b0,CSSRotation:W.b0,CSSScale:W.b0,CSSSkew:W.b0,CSSTranslation:W.b0,CSSTransformComponent:W.b0,CSSTransformValue:W.fi,CSSUnparsedValue:W.fj,DataTransferItemList:W.fl,HTMLDivElement:W.dd,DOMException:W.fm,ClientRectList:W.de,DOMRectList:W.de,DOMRectReadOnly:W.df,DOMStringList:W.fn,DOMTokenList:W.fo,Element:W.a2,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.i,Accelerometer:W.i,AccessibleNode:W.i,AmbientLightSensor:W.i,Animation:W.i,ApplicationCache:W.i,DOMApplicationCache:W.i,OfflineResourceList:W.i,BackgroundFetchRegistration:W.i,BatteryManager:W.i,BroadcastChannel:W.i,CanvasCaptureMediaStreamTrack:W.i,DedicatedWorkerGlobalScope:W.i,EventSource:W.i,FileReader:W.i,FontFaceSet:W.i,Gyroscope:W.i,XMLHttpRequest:W.i,XMLHttpRequestEventTarget:W.i,XMLHttpRequestUpload:W.i,LinearAccelerationSensor:W.i,Magnetometer:W.i,MediaDevices:W.i,MediaKeySession:W.i,MediaQueryList:W.i,MediaRecorder:W.i,MediaSource:W.i,MediaStream:W.i,MediaStreamTrack:W.i,MIDIAccess:W.i,MIDIInput:W.i,MIDIOutput:W.i,MIDIPort:W.i,NetworkInformation:W.i,Notification:W.i,OffscreenCanvas:W.i,OrientationSensor:W.i,PaymentRequest:W.i,Performance:W.i,PermissionStatus:W.i,PresentationAvailability:W.i,PresentationConnection:W.i,PresentationConnectionList:W.i,PresentationRequest:W.i,RelativeOrientationSensor:W.i,RemotePlayback:W.i,RTCDataChannel:W.i,DataChannel:W.i,RTCDTMFSender:W.i,RTCPeerConnection:W.i,webkitRTCPeerConnection:W.i,mozRTCPeerConnection:W.i,ScreenOrientation:W.i,Sensor:W.i,ServiceWorker:W.i,ServiceWorkerContainer:W.i,ServiceWorkerGlobalScope:W.i,ServiceWorkerRegistration:W.i,SharedWorker:W.i,SharedWorkerGlobalScope:W.i,SpeechRecognition:W.i,SpeechSynthesis:W.i,SpeechSynthesisUtterance:W.i,VR:W.i,VRDevice:W.i,VRDisplay:W.i,VRSession:W.i,VisualViewport:W.i,WebSocket:W.i,Worker:W.i,WorkerGlobalScope:W.i,WorkerPerformance:W.i,BluetoothDevice:W.i,BluetoothRemoteGATTCharacteristic:W.i,Clipboard:W.i,MojoInterfaceInterceptor:W.i,USB:W.i,IDBDatabase:W.i,IDBOpenDBRequest:W.i,IDBVersionChangeRequest:W.i,IDBRequest:W.i,IDBTransaction:W.i,AnalyserNode:W.i,RealtimeAnalyserNode:W.i,AudioBufferSourceNode:W.i,AudioDestinationNode:W.i,AudioNode:W.i,AudioScheduledSourceNode:W.i,AudioWorkletNode:W.i,BiquadFilterNode:W.i,ChannelMergerNode:W.i,AudioChannelMerger:W.i,ChannelSplitterNode:W.i,AudioChannelSplitter:W.i,ConstantSourceNode:W.i,ConvolverNode:W.i,DelayNode:W.i,DynamicsCompressorNode:W.i,GainNode:W.i,AudioGainNode:W.i,IIRFilterNode:W.i,MediaElementAudioSourceNode:W.i,MediaStreamAudioDestinationNode:W.i,MediaStreamAudioSourceNode:W.i,OscillatorNode:W.i,Oscillator:W.i,PannerNode:W.i,AudioPannerNode:W.i,webkitAudioPannerNode:W.i,ScriptProcessorNode:W.i,JavaScriptAudioNode:W.i,StereoPannerNode:W.i,WaveShaperNode:W.i,EventTarget:W.i,File:W.aA,FileList:W.cm,FileWriter:W.fx,HTMLFormElement:W.fB,Gamepad:W.aL,History:W.fE,HTMLCollection:W.bR,HTMLFormControlsCollection:W.bR,HTMLOptionsCollection:W.bR,ImageData:W.cp,HTMLInputElement:W.cq,KeyboardEvent:W.b4,Location:W.fS,MediaList:W.hc,MessagePort:W.cs,MIDIInputMap:W.hd,MIDIOutputMap:W.hf,MimeType:W.aN,MimeTypeArray:W.hh,PointerEvent:W.ac,MouseEvent:W.ac,DragEvent:W.ac,Document:W.G,DocumentFragment:W.G,HTMLDocument:W.G,ShadowRoot:W.G,XMLDocument:W.G,Attr:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cy,RadioNodeList:W.cy,Plugin:W.aO,PluginArray:W.hu,RTCStatsReport:W.hD,HTMLSelectElement:W.hG,SourceBuffer:W.aQ,SourceBufferList:W.hP,SpeechGrammar:W.aR,SpeechGrammarList:W.hQ,SpeechRecognitionResult:W.aS,Storage:W.hT,CSSStyleSheet:W.aD,StyleSheet:W.aD,HTMLTableCellElement:W.bn,HTMLTableDataCellElement:W.bn,HTMLTableHeaderCellElement:W.bn,TextTrack:W.aT,TextTrackCue:W.aE,VTTCue:W.aE,TextTrackCueList:W.i0,TextTrackList:W.i1,TimeRanges:W.i3,Touch:W.aU,TouchEvent:W.aV,TouchList:W.i6,TrackDefaultList:W.i7,CompositionEvent:W.bA,FocusEvent:W.bA,TextEvent:W.bA,UIEvent:W.bA,URL:W.iv,VideoTrackList:W.iN,WheelEvent:W.bc,Window:W.cM,DOMWindow:W.cM,CSSRuleList:W.iY,ClientRect:W.e3,DOMRect:W.e3,GamepadList:W.jb,NamedNodeMap:W.ek,MozNamedAttrMap:W.ek,SpeechRecognitionResultList:W.jn,StyleSheetList:W.jr,SVGLength:P.b5,SVGLengthList:P.fL,SVGNumber:P.b8,SVGNumberList:P.hq,SVGPointList:P.hw,SVGStringList:P.hZ,SVGAElement:P.r,SVGAnimateElement:P.r,SVGAnimateMotionElement:P.r,SVGAnimateTransformElement:P.r,SVGAnimationElement:P.r,SVGCircleElement:P.r,SVGClipPathElement:P.r,SVGDefsElement:P.r,SVGDescElement:P.r,SVGDiscardElement:P.r,SVGEllipseElement:P.r,SVGFEBlendElement:P.r,SVGFEColorMatrixElement:P.r,SVGFEComponentTransferElement:P.r,SVGFECompositeElement:P.r,SVGFEConvolveMatrixElement:P.r,SVGFEDiffuseLightingElement:P.r,SVGFEDisplacementMapElement:P.r,SVGFEDistantLightElement:P.r,SVGFEFloodElement:P.r,SVGFEFuncAElement:P.r,SVGFEFuncBElement:P.r,SVGFEFuncGElement:P.r,SVGFEFuncRElement:P.r,SVGFEGaussianBlurElement:P.r,SVGFEImageElement:P.r,SVGFEMergeElement:P.r,SVGFEMergeNodeElement:P.r,SVGFEMorphologyElement:P.r,SVGFEOffsetElement:P.r,SVGFEPointLightElement:P.r,SVGFESpecularLightingElement:P.r,SVGFESpotLightElement:P.r,SVGFETileElement:P.r,SVGFETurbulenceElement:P.r,SVGFilterElement:P.r,SVGForeignObjectElement:P.r,SVGGElement:P.r,SVGGeometryElement:P.r,SVGGraphicsElement:P.r,SVGImageElement:P.r,SVGLineElement:P.r,SVGLinearGradientElement:P.r,SVGMarkerElement:P.r,SVGMaskElement:P.r,SVGMetadataElement:P.r,SVGPathElement:P.r,SVGPatternElement:P.r,SVGPolygonElement:P.r,SVGPolylineElement:P.r,SVGRadialGradientElement:P.r,SVGRectElement:P.r,SVGScriptElement:P.r,SVGSetElement:P.r,SVGStopElement:P.r,SVGStyleElement:P.r,SVGElement:P.r,SVGSVGElement:P.r,SVGSwitchElement:P.r,SVGSymbolElement:P.r,SVGTSpanElement:P.r,SVGTextContentElement:P.r,SVGTextElement:P.r,SVGTextPathElement:P.r,SVGTextPositioningElement:P.r,SVGTitleElement:P.r,SVGUseElement:P.r,SVGViewElement:P.r,SVGGradientElement:P.r,SVGComponentTransferFunctionElement:P.r,SVGFEDropShadowElement:P.r,SVGMPathElement:P.r,SVGTransform:P.ba,SVGTransformList:P.i8,AudioBuffer:P.f2,AudioParamMap:P.f3,AudioTrackList:P.f5,AudioContext:P.bJ,webkitAudioContext:P.bJ,BaseAudioContext:P.bJ,OfflineAudioContext:P.hr,WebGLBuffer:P.d6,WebGLProgram:P.dC,WebGL2RenderingContext:P.bX,WebGLShader:P.dG,WebGLUniformLocation:P.dS,SQLResultSetRowList:P.hR})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dv.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
H.cS.$nativeSuperclassTag="ArrayBufferView"
H.dw.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(K.md,[])
else K.md([])})})()
//# sourceMappingURL=test.dart.js.map
