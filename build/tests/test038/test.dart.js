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
a[c]=function(){a[c]=function(){H.oD(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kE"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kE"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kE(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={ki:function ki(){},
jT:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
mC:function(){return new P.hR("No element")},
dM:function(a,b,c,d,e){H.m(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.k,args:[e,e]})
if(c-b<=32)H.n6(a,b,c,d,e)
else H.n5(a,b,c,d,e)},
n6:function(a,b,c,d,e){var u,t,s,r,q
H.m(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.k,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.d(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.d(a,r)
r=J.aV(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.d(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
n5:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.m(a2,"$ib",[a6],"$ab")
H.n(a5,{func:1,ret:P.k,args:[a6,a6]})
u=C.d.a_(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.d.a_(a3+a4,2)
q=r-u
p=r+u
o=a2.length
if(t<0||t>=o)return H.d(a2,t)
n=a2[t]
if(q<0||q>=o)return H.d(a2,q)
m=a2[q]
if(r<0||r>=o)return H.d(a2,r)
l=a2[r]
if(p<0||p>=o)return H.d(a2,p)
k=a2[p]
if(s<0||s>=o)return H.d(a2,s)
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
if(a3<0||a3>=a2.length)return H.d(a2,a3)
C.a.k(a2,q,a2[a3])
if(a4<0||a4>=a2.length)return H.d(a2,a4)
C.a.k(a2,p,a2[a4])
h=a3+1
g=a4-1
if(J.T(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.N()
if(d<0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.a2()
if(d>0){--g
continue}else{c=g-1
o=a2.length
if(d<0){if(h>=o)return H.d(a2,h)
C.a.k(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.d(a2,g)
C.a.k(a2,h,a2[g])
C.a.k(a2,g,e)
g=c
h=b
break}else{if(g>=o)return H.d(a2,g)
C.a.k(a2,f,a2[g])
C.a.k(a2,g,e)
g=c
break}}}}a=!0}else{for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
a0=a5.$2(e,m)
if(typeof a0!=="number")return a0.N()
if(a0<0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else{a1=a5.$2(e,k)
if(typeof a1!=="number")return a1.a2()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.a2()
if(d>0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.N()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.d(a2,h)
C.a.k(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.d(a2,g)
C.a.k(a2,h,a2[g])
C.a.k(a2,g,e)
h=b}else{if(g>=o)return H.d(a2,g)
C.a.k(a2,f,a2[g])
C.a.k(a2,g,e)}g=c
break}}}}a=!1}o=h-1
if(o>=a2.length)return H.d(a2,o)
C.a.k(a2,a3,a2[o])
C.a.k(a2,o,m)
o=g+1
if(o<0||o>=a2.length)return H.d(a2,o)
C.a.k(a2,a4,a2[o])
C.a.k(a2,o,k)
H.dM(a2,a3,h-2,a5,a6)
H.dM(a2,g+2,a4,a5,a6)
if(a)return
if(h<t&&g>s){while(!0){if(h>=a2.length)return H.d(a2,h)
if(!J.T(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.d(a2,g)
if(!J.T(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
if(a5.$2(e,m)===0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else if(a5.$2(e,k)===0)for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
if(a5.$2(a2[g],k)===0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.N()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.d(a2,h)
C.a.k(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.d(a2,g)
C.a.k(a2,h,a2[g])
C.a.k(a2,g,e)
h=b}else{if(g>=o)return H.d(a2,g)
C.a.k(a2,f,a2[g])
C.a.k(a2,g,e)}g=c
break}}}H.dM(a2,h,g,a5,a6)}else H.dM(a2,h,g,a5,a6)},
a4:function a4(a){this.a=a},
fw:function fw(){},
dv:function dv(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
h_:function h_(a,b,c){this.a=a
this.b=b
this.$ti=c},
h0:function h0(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
iO:function iO(a,b,c){this.a=a
this.b=b
this.$ti=c},
iP:function iP(a,b,c){this.a=a
this.b=b
this.$ti=c},
bR:function bR(){},
cN:function cN(){},
dX:function dX(){},
mu:function(){throw H.c(P.E("Cannot modify unmodifiable Map"))},
cd:function(a){var u,t=H.L(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
on:function(a){return v.types[H.a0(a)]},
ot:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.S(a).$iK},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.as(a)
if(typeof u!=="string")throw H.c(H.aG(a))
return u},
cD:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mY:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.d(p,3)
u=H.L(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ac(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.D(s,q)|32)>t)return}return parseInt(a,b)},
bW:function(a){return H.mP(a)+H.kB(H.bH(a),0,null)},
mP:function(a){var u,t,s,r,q,p,o,n=J.S(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.J||!!n.$ibF){r=C.q(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cd(t.length>1&&C.b.D(t,0)===36?C.b.a5(t,1):t)},
mQ:function(){if(!!self.location)return self.location.href
return},
l8:function(a){var u,t,s,r,q
H.jY(a)
u=J.aI(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
mZ:function(a){var u,t,s,r=H.e([],[P.k])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.y)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aG(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.aK(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.aG(s))}return H.l8(r)},
l9:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aG(s))
if(s<0)throw H.c(H.aG(s))
if(s>65535)return H.mZ(a)}return H.l8(a)},
n_:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
dG:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aK(u,10))>>>0,56320|u&1023)}}throw H.c(P.ac(a,0,1114111,null,null))},
bV:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mX:function(a){var u=H.bV(a).getFullYear()+0
return u},
mV:function(a){var u=H.bV(a).getMonth()+1
return u},
mR:function(a){var u=H.bV(a).getDate()+0
return u},
mS:function(a){var u=H.bV(a).getHours()+0
return u},
mU:function(a){var u=H.bV(a).getMinutes()+0
return u},
mW:function(a){var u=H.bV(a).getSeconds()+0
return u},
mT:function(a){var u=H.bV(a).getMilliseconds()+0
return u},
r:function(a){throw H.c(H.aG(a))},
d:function(a,b){if(a==null)J.aI(a)
throw H.c(H.c8(a,b))},
c8:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aW(!0,b,s,null)
u=H.a0(J.aI(a))
if(!(b<0)){if(typeof u!=="number")return H.r(u)
t=b>=u}else t=!0
if(t)return P.U(b,a,s,null,u)
return P.hy(b,s)},
og:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bX(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bX(a,c,!0,b,"end",u)
return new P.aW(!0,b,"end",null)},
aG:function(a){return new P.aW(!0,a,null,null)},
ob:function(a){if(typeof a!=="number")throw H.c(H.aG(a))
return a},
c:function(a){var u
if(a==null)a=new P.dD()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.m_})
u.name=""}else u.toString=H.m_
return u},
m_:function(){return J.as(this.dartException)},
z:function(a){throw H.c(a)},
y:function(a){throw H.c(P.bO(a))},
b8:function(a){var u,t,s,r,q,p
a=H.lX(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.e([],[P.i])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ic(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
id:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lj:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
l3:function(a,b){return new H.hq(a,b==null?null:b.method)},
kj:function(a,b){var u=b==null,t=u?null:b.method
return new H.fN(a,t,u?null:b.receiver)},
aH:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.k4(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aK(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kj(H.l(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.l3(H.l(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.m2()
q=$.m3()
p=$.m4()
o=$.m5()
n=$.m8()
m=$.m9()
l=$.m7()
$.m6()
k=$.mb()
j=$.ma()
i=r.a9(u)
if(i!=null)return f.$1(H.kj(H.L(u),i))
else{i=q.a9(u)
if(i!=null){i.method="call"
return f.$1(H.kj(H.L(u),i))}else{i=p.a9(u)
if(i==null){i=o.a9(u)
if(i==null){i=n.a9(u)
if(i==null){i=m.a9(u)
if(i==null){i=l.a9(u)
if(i==null){i=o.a9(u)
if(i==null){i=k.a9(u)
if(i==null){i=j.a9(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.l3(H.L(u),i))}}return f.$1(new H.iq(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dO()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aW(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dO()
return a},
cb:function(a){var u
if(a==null)return new H.ez(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ez(a)},
ok:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
os:function(a,b,c,d,e,f){H.f(a,"$ike")
switch(H.a0(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.C("Unsupported number of arguments for wrapped closure"))},
c7:function(a,b){var u
H.a0(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.os)
a.$identity=u
return u},
mt:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hS().constructor.prototype):Object.create(new H.cf(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aX
if(typeof t!=="number")return t.u()
$.aX=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.kS(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.on,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.kR:H.ka
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kS(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
mq:function(a,b,c,d){var u=H.ka
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kS:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.ms(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mq(t,!r,u,b)
if(t===0){r=$.aX
if(typeof r!=="number")return r.u()
$.aX=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cg
return new Function(r+H.l(q==null?$.cg=H.fb("self"):q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aX
if(typeof r!=="number")return r.u()
$.aX=r+1
o+=r
r="return function("+o+"){return this."
q=$.cg
return new Function(r+H.l(q==null?$.cg=H.fb("self"):q)+"."+H.l(u)+"("+o+");}")()},
mr:function(a,b,c,d){var u=H.ka,t=H.kR
switch(b?-1:a){case 0:throw H.c(H.n3("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
ms:function(a,b){var u,t,s,r,q,p,o,n=$.cg
if(n==null)n=$.cg=H.fb("self")
u=$.kQ
if(u==null)u=$.kQ=H.fb("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mr(s,!q,t,b)
if(s===1){n="return function(){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+");"
u=$.aX
if(typeof u!=="number")return u.u()
$.aX=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+", "+o+");"
u=$.aX
if(typeof u!=="number")return u.u()
$.aX=u+1
return new Function(n+u+"}")()},
kE:function(a,b,c,d,e,f,g){return H.mt(a,b,H.a0(c),d,!!e,!!f,g)},
ka:function(a){return a.a},
kR:function(a){return a.c},
fb:function(a){var u,t,s,r=new H.cf("self","target","receiver","name"),q=J.kg(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
F:function(a){if(a==null)H.o7("boolean expression must not be null")
return a},
L:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aT(a,"String"))},
oh:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aT(a,"double"))},
lT:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aT(a,"num"))},
lM:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aT(a,"bool"))},
a0:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aT(a,"int"))},
lV:function(a,b){throw H.c(H.aT(a,H.cd(H.L(b).substring(2))))},
oy:function(a,b){throw H.c(H.mp(a,H.cd(H.L(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.S(a)[b])return a
H.lV(a,b)},
u:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.S(a)[b]
else u=!0
if(u)return a
H.oy(a,b)},
jY:function(a){if(a==null)return a
if(!!J.S(a).$ib)return a
throw H.c(H.aT(a,"List<dynamic>"))},
lR:function(a,b){var u
if(a==null)return a
u=J.S(a)
if(!!u.$ib)return a
if(u[b])return a
H.lV(a,b)},
lN:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a0(u)]
else return a.$S()}return},
eW:function(a,b){var u
if(typeof a=="function")return!0
u=H.lN(J.S(a))
if(u==null)return!1
return H.lB(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.ky)return a
$.ky=!0
try{if(H.eW(a,b))return a
u=H.k1(b)
t=H.aT(a,u)
throw H.c(t)}finally{$.ky=!1}},
kF:function(a,b){if(a!=null&&!H.kD(a,b))H.z(H.aT(a,H.k1(b)))
return a},
aT:function(a,b){return new H.ie("TypeError: "+P.dl(a)+": type '"+H.lH(a)+"' is not a subtype of type '"+b+"'")},
mp:function(a,b){return new H.fc("CastError: "+P.dl(a)+": type '"+H.lH(a)+"' is not a subtype of type '"+b+"'")},
lH:function(a){var u,t=J.S(a)
if(!!t.$icj){u=H.lN(t)
if(u!=null)return H.k1(u)
return"Closure"}return H.bW(a)},
o7:function(a){throw H.c(new H.iQ(a))},
oD:function(a){throw H.c(new P.fp(H.L(a)))},
n3:function(a){return new H.hF(a)},
lO:function(a){return v.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
bH:function(a){if(a==null)return
return a.$ti},
pi:function(a,b,c){return H.cc(a["$a"+H.l(c)],H.bH(b))},
ca:function(a,b,c,d){var u
H.L(c)
H.a0(d)
u=H.cc(a["$a"+H.l(c)],H.bH(b))
return u==null?null:u[d]},
av:function(a,b,c){var u
H.L(b)
H.a0(c)
u=H.cc(a["$a"+H.l(b)],H.bH(a))
return u==null?null:u[c]},
t:function(a,b){var u
H.a0(b)
u=H.bH(a)
return u==null?null:u[b]},
k1:function(a){return H.bG(a,null)},
bG:function(a,b){var u,t
H.m(b,"$ib",[P.i],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cd(a[0].name)+H.kB(a,1,b)
if(typeof a=="function")return H.cd(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a0(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.l(b[t])}if('func' in a)return H.nH(a,b)
if('futureOr' in a)return"FutureOr<"+H.bG("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nH:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.i]
H.m(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.e([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.d(a0,n)
p=C.b.u(p,a0[n])
m=u[q]
if(m!=null&&m!==P.O)p+=" extends "+H.bG(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bG(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bG(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bG(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.oj(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.L(b[h])
j=j+i+H.bG(e[d],a0)+(" "+H.l(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
kB:function(a,b,c){var u,t,s,r,q,p
H.m(c,"$ib",[P.i],"$ab")
if(a==null)return""
u=new P.al("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bG(p,c)}return"<"+u.i(0)+">"},
cc:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
kC:function(a,b,c,d){var u,t
H.L(b)
H.jY(c)
H.L(d)
if(a==null)return!1
u=H.bH(a)
t=J.S(a)
if(t[b]==null)return!1
return H.lK(H.cc(t[d],u),null,c,null)},
m:function(a,b,c,d){H.L(b)
H.jY(c)
H.L(d)
if(a==null)return a
if(H.kC(a,b,c,d))return a
throw H.c(H.aT(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cd(b.substring(2))+H.kB(c,0,null),v.mangledGlobalNames)))},
lK:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aF(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aF(a[t],b,c[t],d))return!1
return!0},
pg:function(a,b,c){return a.apply(b,H.cc(J.S(b)["$a"+H.l(c)],H.bH(b)))},
lQ:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="O"||a.name==="J"||a===-1||a===-2||H.lQ(u)}return!1},
kD:function(a,b){var u,t
if(a==null)return b==null||b.name==="O"||b.name==="J"||b===-1||b===-2||H.lQ(b)
if(b==null||b===-1||b.name==="O"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kD(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eW(a,b)}u=J.S(a).constructor
t=H.bH(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aF(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.kD(a,b))throw H.c(H.aT(a,H.k1(b)))
return a},
aF:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="O"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="O"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aF(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="J")return!0
if('func' in c)return H.lB(a,b,c,d)
if('func' in a)return c.name==="ke"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aF("type" in a?a.type:l,b,s,d)
else if(H.aF(a,b,s,d))return!0
else{if(!('$i'+"co" in t.prototype))return!1
r=t.prototype["$a"+"co"]
q=H.cc(r,u?a.slice(1):l)
return H.aF(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.lK(H.cc(m,u),b,p,d)},
lB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.ow(h,b,g,d)},
ow:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aF(c[s],d,a[s],b))return!1}return!0},
ph:function(a,b,c){Object.defineProperty(a,H.L(b),{value:c,enumerable:false,writable:true,configurable:true})},
ou:function(a){var u,t,s,r,q=H.L($.lP.$1(a)),p=$.jO[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jX[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.L($.lJ.$2(a,q))
if(q!=null){p=$.jO[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jX[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.k0(u)
$.jO[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jX[q]=u
return u}if(s==="-"){r=H.k0(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lU(a,u)
if(s==="*")throw H.c(P.ip(q))
if(v.leafTags[q]===true){r=H.k0(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lU(a,u)},
lU:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kI(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
k0:function(a){return J.kI(a,!1,null,!!a.$iK)},
ov:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.k0(u)
else return J.kI(u,c,null,null)},
oq:function(){if(!0===$.kH)return
$.kH=!0
H.or()},
or:function(){var u,t,s,r,q,p,o,n
$.jO=Object.create(null)
$.jX=Object.create(null)
H.op()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lW.$1(q)
if(p!=null){o=H.ov(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
op:function(){var u,t,s,r,q,p,o=C.A()
o=H.c6(C.B,H.c6(C.C,H.c6(C.r,H.c6(C.r,H.c6(C.D,H.c6(C.E,H.c6(C.F(C.q),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lP=new H.jU(r)
$.lJ=new H.jV(q)
$.lW=new H.jW(p)},
c6:function(a,b){return a(b)||b},
mE:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a2("Illegal RegExp pattern ("+String(r)+")",a,null))},
oB:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oi:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lX:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lY:function(a,b,c){var u=H.oC(a,b,c)
return u},
oC:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lX(b),'g'),H.oi(c))},
fj:function fj(){},
fk:function fk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ic:function ic(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hq:function hq(a,b){this.a=a
this.b=b},
fN:function fN(a,b,c){this.a=a
this.b=b
this.c=c},
iq:function iq(a){this.a=a},
k4:function k4(a){this.a=a},
ez:function ez(a){this.a=a
this.b=null},
cj:function cj(){},
i_:function i_(){},
hS:function hS(){},
cf:function cf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ie:function ie(a){this.a=a},
fc:function fc(a){this.a=a},
hF:function hF(a){this.a=a},
iQ:function iQ(a){this.a=a},
a_:function a_(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fQ:function fQ(a,b){this.a=a
this.b=b
this.c=null},
fR:function fR(a,b){this.a=a
this.$ti=b},
fS:function fS(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jU:function jU(a){this.a=a},
jV:function jV(a){this.a=a},
jW:function jW(a){this.a=a},
fM:function fM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c4:function(a){return a},
mO:function(a){return new Int8Array(a)},
bb:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.c8(b,a))},
nF:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.og(a,b,c))
return b},
cx:function cx(){},
bA:function bA(){},
dA:function dA(){},
cy:function cy(){},
dB:function dB(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){},
hp:function hp(){},
dC:function dC(){},
cz:function cz(){},
cR:function cR(){},
cS:function cS(){},
cT:function cT(){},
cU:function cU(){},
oj:function(a){return J.kV(a?Object.keys(a):[],null)},
ox:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kI:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jQ:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kH==null){H.oq()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.ip("Return interceptor for "+H.l(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kL()]
if(r!=null)return r
r=H.ou(a)
if(r!=null)return r
if(typeof a=="function")return C.L
u=Object.getPrototypeOf(a)
if(u==null)return C.w
if(u===Object.prototype)return C.w
if(typeof s=="function"){Object.defineProperty(s,$.kL(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
mD:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.k9(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ac(a,0,4294967295,"length",null))
return J.kV(new Array(a),b)},
kV:function(a,b){return J.kg(H.e(a,[b]))},
kg:function(a){H.jY(a)
a.fixed$length=Array
return a},
S:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dq.prototype
return J.dp.prototype}if(typeof a=="string")return J.bx.prototype
if(a==null)return J.dr.prototype
if(typeof a=="boolean")return J.fL.prototype
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.O)return a
return J.jQ(a)},
d3:function(a){if(typeof a=="string")return J.bx.prototype
if(a==null)return a
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.O)return a
return J.jQ(a)},
jP:function(a){if(a==null)return a
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.O)return a
return J.jQ(a)},
ol:function(a){if(typeof a=="number")return J.bT.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.bF.prototype
return a},
om:function(a){if(typeof a=="number")return J.bT.prototype
if(typeof a=="string")return J.bx.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.bF.prototype
return a},
kG:function(a){if(typeof a=="string")return J.bx.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.bF.prototype
return a},
eX:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.O)return a
return J.jQ(a)},
T:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.S(a).n(a,b)},
aV:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.ol(a).a2(a,b)},
d6:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ot(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.d3(a).j(a,b)},
k6:function(a,b,c){return J.jP(a).k(a,b,c)},
mj:function(a,b){return J.kG(a).D(a,b)},
mk:function(a,b,c){return J.eX(a).h6(a,b,c)},
ml:function(a,b,c,d){return J.eX(a).hz(a,b,c,d)},
mm:function(a,b){return J.kG(a).R(a,b)},
k7:function(a,b){return J.om(a).hI(a,b)},
k8:function(a,b){return J.jP(a).G(a,b)},
mn:function(a,b,c,d){return J.eX(a).hY(a,b,c,d)},
kN:function(a,b){return J.jP(a).F(a,b)},
kO:function(a){return J.eX(a).gbS(a)},
d7:function(a){return J.S(a).gE(a)},
bJ:function(a){return J.jP(a).gS(a)},
aI:function(a){return J.d3(a).gl(a)},
mo:function(a,b){return J.eX(a).iz(a,b)},
as:function(a){return J.S(a).i(a)},
a:function a(){},
fL:function fL(){},
dr:function dr(){},
ds:function ds(){},
hu:function hu(){},
bF:function bF(){},
by:function by(){},
b0:function b0(a){this.$ti=a},
kh:function kh(a){this.$ti=a},
ap:function ap(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bT:function bT(){},
dq:function dq(){},
dp:function dp(){},
bx:function bx(){}},P={
nk:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.o8()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c7(new P.iS(s),1)).observe(u,{childList:true})
return new P.iR(s,u,t)}else if(self.setImmediate!=null)return P.o9()
return P.oa()},
nl:function(a){self.scheduleImmediate(H.c7(new P.iT(H.n(a,{func:1,ret:-1})),0))},
nm:function(a){self.setImmediate(H.c7(new P.iU(H.n(a,{func:1,ret:-1})),0))},
nn:function(a){P.kn(C.n,H.n(a,{func:1,ret:-1}))},
kn:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.d.a_(a.a,1000)
return P.nq(u<0?0:u,b)},
li:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.b6]})
u=C.d.a_(a.a,1000)
return P.nr(u<0?0:u,b)},
nq:function(a,b){var u=new P.eF()
u.eu(a,b)
return u},
nr:function(a,b){var u=new P.eF()
u.ev(a,b)
return u},
no:function(a,b){var u,t,s
b.a=1
try{a.dW(new P.j2(b),new P.j3(b),null)}catch(s){u=H.aH(s)
t=H.cb(s)
P.oz(new P.j4(b,u,t))}},
lr:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaE")
if(u>=4){t=b.bH()
b.a=a.a
b.c=a.c
P.cP(b,t)}else{t=H.f(b.c,"$iba")
b.a=2
b.c=a
a.cU(t)}},
cP:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$ian")
g=g.b
r=s.a
q=s.b
g.toString
P.jK(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cP(h.a,b)}g=h.a
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
if(m){H.f(o,"$ian")
g=g.b
r=o.a
q=o.b
g.toString
P.jK(i,i,g,r,q)
return}l=$.W
if(l!=n)$.W=n
else l=i
g=b.c
if(g===8)new P.j8(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.j7(u,b,o).$0()}else if((g&2)!==0)new P.j6(h,u,b).$0()
if(l!=null)$.W=l
g=u.b
if(!!J.S(g).$ico){if(g.a>=4){k=H.f(q.c,"$iba")
q.c=null
b=q.ba(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.lr(g,q)
return}}j=b.b
k=H.f(j.c,"$iba")
j.c=null
b=j.ba(k)
g=u.a
r=u.b
if(!g){H.A(r,H.t(j,0))
j.a=4
j.c=r}else{H.f(r,"$ian")
j.a=8
j.c=r}h.a=j
g=j}},
o3:function(a,b){if(H.eW(a,{func:1,args:[P.O,P.aq]}))return H.n(a,{func:1,ret:null,args:[P.O,P.aq]})
if(H.eW(a,{func:1,args:[P.O]}))return H.n(a,{func:1,ret:null,args:[P.O]})
throw H.c(P.k9(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
o2:function(){var u,t
for(;u=$.c5,u!=null;){$.d2=null
t=u.b
$.c5=t
if(t==null)$.d1=null
u.a.$0()}},
o6:function(){$.kz=!0
try{P.o2()}finally{$.d2=null
$.kz=!1
if($.c5!=null)$.kM().$1(P.lL())}},
lG:function(a){var u=new P.e3(H.n(a,{func:1,ret:-1}))
if($.c5==null){$.c5=$.d1=u
if(!$.kz)$.kM().$1(P.lL())}else $.d1=$.d1.b=u},
o5:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.c5
if(u==null){P.lG(a)
$.d2=$.d1
return}t=new P.e3(a)
s=$.d2
if(s==null){t.b=u
$.c5=$.d2=t}else{t.b=s.b
$.d2=s.b=t
if(t.b==null)$.d1=t}},
oz:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.W
if(C.f===u){P.jM(t,t,C.f,a)
return}u.toString
P.jM(t,t,u,H.n(u.bO(a),s))},
lh:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.W
if(u===C.f){u.toString
return P.kn(a,b)}return P.kn(a,H.n(u.bO(b),t))},
n9:function(a,b){var u,t,s={func:1,ret:-1,args:[P.b6]}
H.n(b,s)
u=$.W
if(u===C.f){u.toString
return P.li(a,b)}t=u.d6(b,P.b6)
$.W.toString
return P.li(a,H.n(t,s))},
jK:function(a,b,c,d,e){var u={}
u.a=d
P.o5(new P.jL(u,e))},
lC:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.W
if(t===c)return d.$0()
$.W=c
u=t
try{t=d.$0()
return t}finally{$.W=u}},
lD:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.A(e,g)
t=$.W
if(t===c)return d.$1(e)
$.W=c
u=t
try{t=d.$1(e)
return t}finally{$.W=u}},
o4:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
t=$.W
if(t===c)return d.$2(e,f)
$.W=c
u=t
try{t=d.$2(e,f)
return t}finally{$.W=u}},
jM:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bO(d):c.hF(d,-1)
P.lG(d)},
iS:function iS(a){this.a=a},
iR:function iR(a,b,c){this.a=a
this.b=b
this.c=c},
iT:function iT(a){this.a=a},
iU:function iU(a){this.a=a},
eF:function eF(){this.c=0},
js:function js(a,b){this.a=a
this.b=b},
jr:function jr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ba:function ba(a,b,c,d,e){var _=this
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
j1:function j1(a,b){this.a=a
this.b=b},
j5:function j5(a,b){this.a=a
this.b=b},
j2:function j2(a){this.a=a},
j3:function j3(a){this.a=a},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
j8:function j8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j9:function j9(a){this.a=a},
j7:function j7(a,b,c){this.a=a
this.b=b
this.c=c},
j6:function j6(a,b,c){this.a=a
this.b=b
this.c=c},
e3:function e3(a){this.a=a
this.b=null},
hV:function hV(){},
hX:function hX(a,b){this.a=a
this.b=b},
hY:function hY(a,b){this.a=a
this.b=b},
cG:function cG(){},
hW:function hW(){},
b6:function b6(){},
an:function an(a,b){this.a=a
this.b=b},
jB:function jB(){},
jL:function jL(a,b){this.a=a
this.b=b},
jg:function jg(){},
ji:function ji(a,b,c){this.a=a
this.b=b
this.c=c},
jh:function jh(a,b){this.a=a
this.b=b},
jj:function jj(a,b,c){this.a=a
this.b=b
this.c=c},
mF:function(a,b){return new H.a_([a,b])},
kW:function(a,b){return new H.a_([a,b])},
mH:function(a){return H.ok(a,new H.a_([null,null]))},
mI:function(a){return new P.jd([a])},
kv:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lt:function(a,b,c){var u=new P.je(a,b,[c])
u.c=a.e
return u},
mB:function(a,b,c){var u,t
if(P.kA(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.e([],[P.i])
C.a.h($.ar,a)
try{P.nI(a,u)}finally{if(0>=$.ar.length)return H.d($.ar,-1)
$.ar.pop()}t=P.lf(b,H.lR(u,"$ih"),", ")+c
return t.charCodeAt(0)==0?t:t},
kf:function(a,b,c){var u,t
if(P.kA(a))return b+"..."+c
u=new P.al(b)
C.a.h($.ar,a)
try{t=u
t.a=P.lf(t.a,a,", ")}finally{if(0>=$.ar.length)return H.d($.ar,-1)
$.ar.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kA:function(a){var u,t
for(u=$.ar.length,t=0;t<u;++t)if(a===$.ar[t])return!0
return!1},
nI:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.m(b,"$ib",[P.i],"$ab")
u=a.gS(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.v())return
r=H.l(u.gJ(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.v()){if(s<=5)return
if(0>=b.length)return H.d(b,-1)
q=b.pop()
if(0>=b.length)return H.d(b,-1)
p=b.pop()}else{o=u.gJ(u);++s
if(!u.v()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.d(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gJ(u);++s
for(;u.v();o=n,n=m){m=u.gJ(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.l(o)
q=H.l(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
mG:function(a,b,c){var u=P.mF(b,c)
a.F(0,new P.fT(u,b,c))
return u},
kk:function(a){var u,t={}
if(P.kA(a))return"{...}"
u=new P.al("")
try{C.a.h($.ar,a)
u.a+="{"
t.a=!0
J.kN(a,new P.fY(t,u))
u.a+="}"}finally{if(0>=$.ar.length)return H.d($.ar,-1)
$.ar.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jd:function jd(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cQ:function cQ(a){this.a=a
this.c=this.b=null},
je:function je(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fT:function fT(a,b,c){this.a=a
this.b=b
this.c=c},
fU:function fU(){},
v:function v(){},
fX:function fX(){},
fY:function fY(a,b){this.a=a
this.b=b},
ag:function ag(){},
jt:function jt(){},
fZ:function fZ(){},
dY:function dY(a,b){this.a=a
this.$ti=b},
jk:function jk(){},
ei:function ei(){},
eL:function eL(){},
nd:function(a,b,c,d){H.m(b,"$ib",[P.k],"$ab")
if(b instanceof Uint8Array)return P.ne(!1,b,c,d)
return},
ne:function(a,b,c,d){var u,t,s=$.mc()
if(s==null)return
u=0===c
if(u&&!0)return P.kr(s,b)
t=b.length
d=P.bD(c,d,t)
if(u&&d===t)return P.kr(s,b)
return P.kr(s,b.subarray(c,d))},
kr:function(a,b){if(P.ng(b))return
return P.nh(a,b)},
nh:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aH(t)}return},
ng:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nf:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aH(t)}return},
lF:function(a,b,c){var u,t,s
H.m(a,"$ib",[P.k],"$ab")
for(u=J.d3(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.ae()
if((s&127)!==s)return t-b}return c-b},
kP:function(a,b,c,d,e,f){if(C.d.b4(f,4)!==0)throw H.c(P.a2("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a2("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a2("Invalid base64 padding, more than two '=' characters",a,b))},
f8:function f8(){},
f9:function f9(){},
bN:function bN(){},
bP:function bP(){},
fx:function fx(){},
iy:function iy(){},
iA:function iA(){},
jA:function jA(a){this.b=0
this.c=a},
iz:function iz(a){this.a=a},
jz:function jz(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eY:function(a,b,c){var u
H.n(b,{func:1,ret:P.k,args:[P.i]})
u=H.mY(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a2(a,null,null))},
my:function(a){if(a instanceof H.cj)return a.i(0)
return"Instance of '"+H.bW(a)+"'"},
mJ:function(a,b,c){var u,t
H.A(b,c)
u=J.mD(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.k(u,t,b)
return H.m(u,"$ib",[c],"$ab")},
kX:function(a,b,c){var u,t=[c],s=H.e([],t)
for(u=J.bJ(a);u.v();)C.a.h(s,H.A(u.gJ(u),c))
if(b)return s
return H.m(J.kg(s),"$ib",t,"$ab")},
cH:function(a,b,c){var u,t=P.k
H.m(a,"$ih",[t],"$ah")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.m(a,"$ib0",[t],"$ab0")
u=a.length
c=P.bD(b,c,u)
return H.l9(b>0||c<u?C.a.e7(a,b,c):a)}if(!!J.S(a).$icz)return H.n_(a,b,P.bD(b,c,a.length))
return P.n7(a,b,c)},
n7:function(a,b,c){var u,t,s,r,q=null
H.m(a,"$ih",[P.k],"$ah")
if(b<0)throw H.c(P.ac(b,0,J.aI(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.ac(c,b,J.aI(a),q,q))
t=J.bJ(a)
for(s=0;s<b;++s)if(!t.v())throw H.c(P.ac(b,0,s,q,q))
r=[]
if(u)for(;t.v();)r.push(t.gJ(t))
else for(s=b;s<c;++s){if(!t.v())throw H.c(P.ac(c,b,s,q,q))
r.push(t.gJ(t))}return H.l9(r)},
n1:function(a){return new H.fM(a,H.mE(a,!1,!0,!1))},
lf:function(a,b,c){var u=J.bJ(b)
if(!u.v())return a
if(c.length===0){do a+=H.l(u.gJ(u))
while(u.v())}else{a+=H.l(u.gJ(u))
for(;u.v();)a=a+c+H.l(u.gJ(u))}return a},
kq:function(){var u=H.mQ()
if(u!=null)return P.nc(u)
throw H.c(P.E("'Uri.base' is not supported"))},
jy:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.m(a,"$ib",[P.k],"$ab")
if(c===C.h){u=$.mh().b
if(typeof b!=="string")H.z(H.aG(b))
u=u.test(b)}else u=!1
if(u)return b
H.A(b,H.av(c,"bN",0))
t=c.ghX().bT(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dG(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mv:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mw:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dg:function(a){if(a>=10)return""+a
return"0"+a},
kT:function(a,b){return new P.bs(1e6*b+1000*a)},
dl:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.as(a)
if(typeof a==="string")return JSON.stringify(a)
return P.my(a)},
d8:function(a){return new P.aW(!1,null,null,a)},
k9:function(a,b,c){return new P.aW(!0,a,b,c)},
hy:function(a,b){return new P.bX(null,null,!0,a,b,"Value not in range")},
ac:function(a,b,c,d,e){return new P.bX(b,c,!0,a,d,"Invalid value")},
bD:function(a,b,c){if(0>a||a>c)throw H.c(P.ac(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ac(b,a,c,"end",null))
return b}return c},
la:function(a,b){if(typeof a!=="number")return a.N()
if(a<0)throw H.c(P.ac(a,0,null,b,null))},
U:function(a,b,c,d,e){var u=H.a0(e==null?J.aI(b):e)
return new P.fK(u,!0,a,c,"Index out of range")},
E:function(a){return new P.ir(a)},
ip:function(a){return new P.io(a)},
bO:function(a){return new P.fh(a)},
C:function(a){return new P.eb(a)},
a2:function(a,b,c){return new P.fH(a,b,c)},
mK:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.k]})
u=H.e([],[c])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.k(u,t,b.$1(t))
return u},
kK:function(a){H.ox(a)},
nc:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.D(a,4)^58)*3|C.b.D(a,0)^100|C.b.D(a,1)^97|C.b.D(a,2)^116|C.b.D(a,3)^97)>>>0
if(u===0)return P.lk(e<e?C.b.t(a,0,e):a,5,f).ge0()
else if(u===32)return P.lk(C.b.t(a,5,e),0,f).ge0()}t=new Array(8)
t.fixed$length=Array
s=H.e(t,[P.k])
C.a.k(s,0,0)
C.a.k(s,1,-1)
C.a.k(s,2,-1)
C.a.k(s,7,-1)
C.a.k(s,3,0)
C.a.k(s,4,0)
C.a.k(s,5,e)
C.a.k(s,6,e)
if(P.lE(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.iM()
if(r>=0)if(P.lE(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.u()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.N()
if(typeof n!=="number")return H.r(n)
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
u=2}a=i+C.b.t(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.aR(a,o,n,"/");++e
n=h}k="file"}else if(C.b.a4(a,"http",0)){if(t&&p+3===o&&C.b.a4(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aR(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.a4(a,"https",0)){if(t&&p+4===o&&C.b.a4(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aR(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.t(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jl(a,r,q,p,o,n,m,k)}return P.ns(a,0,e,r,q,p,o,n,m,k)},
lm:function(a){var u=P.i
return C.a.i_(H.e(a.split("&"),[u]),P.kW(u,u),new P.iw(C.h),[P.w,P.i,P.i])},
nb:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.it(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.R(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eY(C.b.t(a,s,t),n,n)
if(typeof p!=="number")return p.a2()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eY(C.b.t(a,s,c),n,n)
if(typeof p!=="number")return p.a2()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
ll:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.iu(a)
t=new P.iv(u,a)
if(a.length<2)u.$1("address is too short")
s=H.e([],[P.k])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.R(a,r)
if(n===58){if(r===b){++r
if(C.b.R(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gay(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.nb(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.d(j,g)
j[g]=0
d=g+1
if(d>=i)return H.d(j,d)
j[d]=0
g+=2}else{d=C.d.aK(f,8)
if(g<0||g>=i)return H.d(j,g)
j[g]=d
d=g+1
if(d>=i)return H.d(j,d)
j[d]=f&255
g+=2}}return j},
ns:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nz(a,b,d)
else{if(d===b)P.cZ(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nA(a,u,e-1):""
s=P.nw(a,e,f,!1)
if(typeof f!=="number")return f.u()
r=f+1
if(typeof g!=="number")return H.r(g)
q=r<g?P.ny(P.eY(C.b.t(a,r,g),new P.ju(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nx(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.N()
o=h<i?P.kw(a,h+1,i,n):n
return new P.c3(j,t,s,q,p,o,i<c?P.nv(a,i+1,c):n)},
lu:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cZ:function(a,b,c){throw H.c(P.a2(c,a,b))},
ny:function(a,b){if(a!=null&&a===P.lu(b))return
return a},
nw:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.R(a,b)===91){if(typeof c!=="number")return c.A()
u=c-1
if(C.b.R(a,u)!==93)P.cZ(a,b,"Missing end `]` to match `[` in host")
P.ll(a,b+1,u)
return C.b.t(a,b,c).toLowerCase()}if(typeof c!=="number")return H.r(c)
t=b
for(;t<c;++t)if(C.b.R(a,t)===58){P.ll(a,b,c)
return"["+a+"]"}return P.nC(a,b,c)},
nC:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.r(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.R(a,u)
if(q===37){p=P.lA(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.al("")
n=C.b.t(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.t(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.d(C.u,o)
o=(C.u[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.al("")
if(t<u){s.a+=C.b.t(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.j,o)
o=(C.j[o]&1<<(q&15))!==0}else o=!1
if(o)P.cZ(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.R(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.al("")
n=C.b.t(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.lv(q)
u+=l
t=u}}}}if(s==null)return C.b.t(a,b,c)
if(t<c){n=C.b.t(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nz:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lx(C.b.D(a,b)))P.cZ(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.D(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.l,r)
r=(C.l[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cZ(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.t(a,b,c)
return P.nt(t?a.toLowerCase():a)},
nt:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nA:function(a,b,c){return P.d_(a,b,c,C.N,!1)},
nx:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.d_(a,b,c,C.v,!0):C.o.j0(d,new P.jv(),P.i).q(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a3(u,"/"))u="/"+u
return P.nB(u,e,f)},
nB:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a3(a,"/"))return P.nD(a,!u||c)
return P.nE(a)},
kw:function(a,b,c,d){var u,t={}
H.m(d,"$iw",[P.i,null],"$aw")
if(a!=null){if(d!=null)throw H.c(P.d8("Both query and queryParameters specified"))
return P.d_(a,b,c,C.k,!0)}if(d==null)return
u=new P.al("")
t.a=""
d.F(0,new P.jw(new P.jx(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nv:function(a,b,c){return P.d_(a,b,c,C.k,!0)},
lA:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.R(a,b+1)
t=C.b.R(a,p)
s=H.jT(u)
r=H.jT(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.aK(q,4)
if(p>=8)return H.d(C.m,p)
p=(C.m[p]&1<<(q&15))!==0}else p=!1
if(p)return H.dG(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.t(a,b,b+3).toUpperCase()
return},
lv:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.e(u,[P.k])
C.a.k(t,0,37)
C.a.k(t,1,C.b.D(o,a>>>4))
C.a.k(t,2,C.b.D(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.e(u,[P.k])
for(q=0;--r,r>=0;s=128){p=C.d.hh(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.D(o,p>>>4))
C.a.k(t,q+2,C.b.D(o,p&15))
q+=3}}return P.cH(t,0,null)},
d_:function(a,b,c,d,e){var u=P.lz(a,b,c,H.m(d,"$ib",[P.k],"$ab"),e)
return u==null?C.b.t(a,b,c):u},
lz:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.m(d,"$ib",[P.k],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.N()
if(typeof c!=="number")return H.r(c)
if(!(t<c))break
c$0:{q=C.b.R(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.d(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.lA(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.d(C.j,p)
p=(C.j[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cZ(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.R(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.lv(q)}}if(r==null)r=new P.al("")
r.a+=C.b.t(a,s,t)
r.a+=H.l(o)
if(typeof n!=="number")return H.r(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.N()
if(s<c)r.a+=C.b.t(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
ly:function(a){if(C.b.a3(a,"."))return!0
return C.b.dA(a,"/.")!==-1},
nE:function(a){var u,t,s,r,q,p,o
if(!P.ly(a))return a
u=H.e([],[P.i])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.T(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.q(u,"/")},
nD:function(a,b){var u,t,s,r,q,p
if(!P.ly(a))return!b?P.lw(a):a
u=H.e([],[P.i])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gay(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gay(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.d(u,0)
C.a.k(u,0,P.lw(u[0]))}return C.a.q(u,"/")},
lw:function(a){var u,t,s,r=a.length
if(r>=2&&P.lx(J.mj(a,0)))for(u=1;u<r;++u){t=C.b.D(a,u)
if(t===58)return C.b.t(a,0,u)+"%3A"+C.b.a5(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.l,s)
s=(C.l[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nu:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.D(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.d8("Invalid URL encoding"))}}return u},
kx:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.D(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.t(a,b,c)
else r=new H.a4(C.b.t(a,b,c))}else{r=H.e([],[P.k])
for(s=a.length,q=b;q<c;++q){t=C.b.D(a,q)
if(t>127)throw H.c(P.d8("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.d8("Truncated URI"))
C.a.h(r,P.nu(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.m(r,"$ib",[P.k],"$ab")
return new P.iz(!1).bT(r)},
lx:function(a){var u=a|32
return 97<=u&&u<=122},
lk:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.e([b-1],[P.k])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.D(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a2(m,a,t))}}if(s<0&&t>b)throw H.c(P.a2(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.D(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gay(l)
if(r!==44||t!==p+7||!C.b.a4(a,"base64",p+1))throw H.c(P.a2("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.z.ib(0,a,o,u)
else{n=P.lz(a,o,u,C.k,!0)
if(n!=null)a=C.b.aR(a,o,u,n)}return new P.is(a,l,c)},
nG:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.mK(22,new P.jF(),P.P),n=new P.jE(o),m=new P.jG(),l=new P.jH(),k=H.f(n.$2(0,225),"$iP")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(14,225),"$iP")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(15,225),"$iP")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(1,225),"$iP")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(2,235),"$iP")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(3,235),"$iP")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(4,229),"$iP")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(5,229),"$iP")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(6,231),"$iP")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(7,231),"$iP")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.f(n.$2(8,8),"$iP"),"]",5)
k=H.f(n.$2(9,235),"$iP")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(16,235),"$iP")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(17,235),"$iP")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(10,235),"$iP")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(18,235),"$iP")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(19,235),"$iP")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(11,235),"$iP")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(12,236),"$iP")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.f(n.$2(13,237),"$iP")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.f(n.$2(20,245),"$iP"),"az",21)
k=H.f(n.$2(21,245),"$iP")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
lE:function(a,b,c,d,e){var u,t,s,r,q
H.m(e,"$ib",[P.k],"$ab")
u=$.mi()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.d(u,d)
s=u[d]
r=C.b.D(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.d(s,r)
q=s[r]
d=q&31
C.a.k(e,q>>>5,t)}return d},
X:function X(){},
at:function at(a,b){this.a=a
this.b=b},
x:function x(){},
bs:function bs(a){this.a=a},
fu:function fu(){},
fv:function fv(){},
bt:function bt(){},
f2:function f2(){},
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
fK:function fK(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ir:function ir(a){this.a=a},
io:function io(a){this.a=a},
hR:function hR(a){this.a=a},
fh:function fh(a){this.a=a},
ht:function ht(){},
dO:function dO(){},
fp:function fp(a){this.a=a},
eb:function eb(a){this.a=a},
fH:function fH(a,b,c){this.a=a
this.b=b
this.c=c},
k:function k(){},
h:function h(){},
b_:function b_(){},
b:function b(){},
w:function w(){},
J:function J(){},
a7:function a7(){},
O:function O(){},
aq:function aq(){},
i:function i(){},
al:function al(a){this.a=a},
iw:function iw(a){this.a=a},
it:function it(a){this.a=a},
iu:function iu(a){this.a=a},
iv:function iv(a,b){this.a=a
this.b=b},
c3:function c3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
ju:function ju(a,b){this.a=a
this.b=b},
jv:function jv(){},
jx:function jx(a,b){this.a=a
this.b=b},
jw:function jw(a){this.a=a},
is:function is(a,b,c){this.a=a
this.b=b
this.c=c},
jF:function jF(){},
jE:function jE(a){this.a=a},
jG:function jG(){},
jH:function jH(){},
jl:function jl(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
iY:function iY(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oe:function(a){var u,t=J.S(a)
if(!!t.$ibc){u=t.gd9(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eK(a.data,a.height,a.width)},
od:function(a){if(a instanceof P.eK)return{data:a.a,height:a.b,width:a.c}
return a},
bj:function(a){var u,t,s,r,q
if(a==null)return
u=P.kW(P.i,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r){q=H.L(t[r])
u.k(0,q,a[q])}return u},
oc:function(a){var u={}
a.F(0,new P.jN(u))
return u},
jn:function jn(){},
jp:function jp(a,b){this.a=a
this.b=b},
eK:function eK(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function jN(a){this.a=a},
jo:function jo(a,b){this.a=a
this.b=b},
fD:function fD(a,b){this.a=a
this.b=b},
fE:function fE(){},
fF:function fF(){},
jc:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
np:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jf:function jf(){},
aj:function aj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b2:function b2(){},
fP:function fP(){},
b5:function b5(){},
hr:function hr(){},
hx:function hx(){},
hZ:function hZ(){},
p:function p(){},
b7:function b7(){},
ib:function ib(){},
eg:function eg(){},
eh:function eh(){},
eq:function eq(){},
er:function er(){},
eB:function eB(){},
eC:function eC(){},
eI:function eI(){},
eJ:function eJ(){},
P:function P(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(a){this.a=a},
f7:function f7(){},
bK:function bK(){},
hs:function hs(){},
e4:function e4(){},
da:function da(){},
dH:function dH(){},
bY:function bY(){},
dK:function dK(){},
dQ:function dQ(){},
dW:function dW(){},
hQ:function hQ(){},
ex:function ex(){},
ey:function ey(){}},W={
kb:function(){var u=document.createElement("canvas")
return u},
mx:function(a){H.f(a,"$ij")
return"wheel"},
mA:function(a){var u,t=document.createElement("input"),s=H.f(t,"$icr")
try{s.type=a}catch(u){H.aH(u)}return s},
jb:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ls:function(a,b,c,d){var u=W.jb(W.jb(W.jb(W.jb(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a6:function(a,b,c,d,e){var u=W.lI(new W.j0(c),W.o)
if(u!=null&&!0)J.ml(a,b,u,!1)
return new W.j_(a,b,u,!1,[e])},
lI:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.W
if(u===C.f)return a
return u.d6(a,b)},
q:function q(){},
eZ:function eZ(){},
f0:function f0(){},
f1:function f1(){},
bL:function bL(){},
bM:function bM(){},
ch:function ch(){},
bp:function bp(){},
cl:function cl(){},
fl:function fl(){},
R:function R(){},
cm:function cm(){},
fm:function fm(){},
aY:function aY(){},
aZ:function aZ(){},
fn:function fn(){},
fo:function fo(){},
fq:function fq(){},
dh:function dh(){},
fr:function fr(){},
di:function di(){},
dj:function dj(){},
fs:function fs(){},
ft:function ft(){},
iW:function iW(a,b){this.a=a
this.b=b},
a1:function a1(){},
o:function o(){},
j:function j(){},
ax:function ax(){},
cn:function cn(){},
fC:function fC(){},
fG:function fG(){},
aJ:function aJ(){},
fJ:function fJ(){},
bS:function bS(){},
bc:function bc(){},
cq:function cq(){},
cr:function cr(){},
ci:function ci(){},
b1:function b1(){},
fV:function fV(){},
he:function he(){},
cv:function cv(){},
hf:function hf(){},
hg:function hg(a){this.a=a},
hh:function hh(){},
hi:function hi(a){this.a=a},
aL:function aL(){},
hj:function hj(){},
ab:function ab(){},
iV:function iV(a){this.a=a},
G:function G(){},
cA:function cA(){},
aM:function aM(){},
hv:function hv(){},
hD:function hD(){},
hE:function hE(a){this.a=a},
hG:function hG(){},
aN:function aN(){},
hO:function hO(){},
aO:function aO(){},
hP:function hP(){},
aP:function aP(){},
hT:function hT(){},
hU:function hU(a){this.a=a},
aA:function aA(){},
bh:function bh(){},
aQ:function aQ(){},
aB:function aB(){},
i0:function i0(){},
i1:function i1(){},
i6:function i6(){},
aR:function aR(){},
aS:function aS(){},
i9:function i9(){},
ia:function ia(){},
bE:function bE(){},
ix:function ix(){},
iM:function iM(){},
b9:function b9(){},
cO:function cO(){},
iX:function iX(){},
e6:function e6(){},
ja:function ja(){},
en:function en(){},
jm:function jm(){},
jq:function jq(){},
iZ:function iZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ku:function ku(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j_:function j_(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
j0:function j0(a){this.a=a},
D:function D(){},
dn:function dn(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
e5:function e5(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){},
em:function em(){},
eo:function eo(){},
ep:function ep(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
cV:function cV(){},
cW:function cW(){},
ev:function ev(){},
ew:function ew(){},
eA:function eA(){},
eD:function eD(){},
eE:function eE(){},
cX:function cX(){},
cY:function cY(){},
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
kc:function(a){var u=new O.Y([a])
u.b6(a)
return u},
Y:function Y(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cu:function cu(){this.b=this.a=null},
kY:function(){var u,t,s=new O.dy()
s.seC(O.kc(V.aa))
s.e.b5(s.gfe(),s.gfg())
u=new O.b3(s,"emission")
u.c=new A.ae(!1,!1,!1)
u.f=new V.Z(0,0,0)
s.f=u
u=new O.b3(s,"ambient")
u.c=new A.ae(!1,!1,!1)
u.f=new V.Z(0,0,0)
s.r=u
u=new O.b3(s,"diffuse")
u.c=new A.ae(!1,!1,!1)
u.f=new V.Z(0,0,0)
s.x=u
u=new O.b3(s,"invDiffuse")
u.c=new A.ae(!1,!1,!1)
u.f=new V.Z(0,0,0)
s.y=u
u=new O.h7(s,"specular")
u.c=new A.ae(!1,!1,!1)
u.f=new V.Z(0,0,0)
u.ch=100
s.z=u
u=new O.h3(s,"bump")
u.c=new A.ae(!1,!1,!1)
s.Q=u
s.ch=null
u=new O.b3(s,"reflect")
u.c=new A.ae(!1,!1,!1)
u.f=new V.Z(0,0,0)
s.cx=u
u=new O.h6(s,"refract")
u.c=new A.ae(!1,!1,!1)
u.f=new V.Z(0,0,0)
u.ch=1
s.cy=u
u=new O.h2(s,"alpha")
u.c=new A.ae(!1,!1,!1)
u.f=1
s.db=u
u=new D.du()
u.b6(D.a9)
u.seo(H.e([],[D.br]))
u.sfZ(H.e([],[D.dF]))
u.ser(H.e([],[D.dN]))
u.y=u.x=null
u.bm(u.gfc(),u.gfN(),u.gfR())
s.dx=u
t=new O.h5()
t.b=new V.bq(0,0,0,0)
t.c=1
t.d=10
t.e=!1
s.dy=t
t=u.x
u=t==null?u.x=D.Q():t
u.h(0,s.gh8())
u=s.dx
t=u.y
u=t==null?u.y=D.Q():t
u.h(0,s.gb9())
s.fr=null
return s},
dy:function dy(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h8:function h8(a,b){this.a=a
this.b=b},
h9:function h9(){},
ha:function ha(a,b){this.a=a
this.b=b},
hb:function hb(){},
hc:function hc(a,b){this.a=a
this.b=b},
hd:function hd(){},
h2:function h2(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ct:function ct(){},
h3:function h3(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b3:function b3(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h5:function h5(){var _=this
_.e=_.d=_.c=_.b=null},
h6:function h6(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h7:function h7(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bZ:function bZ(){}},E={
fy:function(){var u=new E.ao()
u.a=""
u.b=!0
u.seh(0,O.kc(E.ao))
u.y.b5(u.gic(),u.gih())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sbn(0,null)
u.scd(null)
u.saP(null)
return u},
n2:function(a,b){var u=new E.hz(a)
u.ed(a,b)
return u},
n8:function(a,b,c,d,e){var u,t,s=J.S(a)
if(!!s.$ibM)return E.lg(a,!0,!0,!0,!1)
u=W.kb()
t=u.style
t.width="100%"
t.height="100%"
s.gbS(a).h(0,u)
return E.lg(u,!0,!0,!0,!1)},
lg:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dS(),j=H.f(C.i.ci(a,"webgl2",P.mH(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibY")
if(j==null)H.z(P.C("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.n2(j,a)
u=new T.i3(j)
u.b=H.a0(j.getParameter(3379))
H.a0(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.dZ(a)
t=new X.fO()
t.sh1(P.mI(P.k))
u.b=t
t=new X.hk(u)
t.f=0
t.r=V.bC()
t.x=V.bC()
t.ch=t.Q=1
u.c=t
t=new X.fW(u)
t.r=0
t.x=V.bC()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.i8(u)
t.f=V.bC()
t.r=V.bC()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seP(H.e([],[[P.cG,P.O]]))
t=u.z
s=document
r=W.ab
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a6(s,"contextmenu",H.n(u.gfo(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a6(a,"focus",H.n(u.gfv(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a6(a,"blur",H.n(u.gfi(),o),!1,p))
t=u.z
n=W.b1
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a6(s,"keyup",H.n(u.gbC(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a6(s,"keydown",H.n(u.gbp(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a6(a,"mousedown",H.n(u.gfD(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a6(a,"mouseup",H.n(u.gfH(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a6(a,l,H.n(u.gfF(),q),!1,r))
n=u.z
m=W.b9;(n&&C.a).h(n,W.a6(a,H.L(W.mx(a)),H.n(u.gfJ(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a6(s,l,H.n(u.gfq(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a6(s,"mouseup",H.n(u.gft(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a6(s,"pointerlockchange",H.n(u.gfL(),o),!1,p))
p=u.z
o=W.aS
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a6(a,"touchstart",H.n(u.gfX(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a6(a,"touchend",H.n(u.gfT(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a6(a,"touchmove",H.n(u.gfV(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.at(Date.now(),!1)
k.cy=0
k.cW()
return k},
fa:function fa(){},
ao:function ao(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hz:function hz(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hA:function hA(a){this.a=a},
hB:function hB(a){this.a=a},
hC:function hC(a){this.a=a},
dS:function dS(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
i5:function i5(a){this.a=a}},Z={
kt:function(a,b,c){var u
H.m(c,"$ib",[P.k],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.c4(c)),35044)
a.bindBuffer(b,null)
return new Z.e2(b,u)},
aD:function(a){return new Z.bi(a)},
e2:function e2(a,b){this.a=a
this.b=b},
db:function db(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iN:function iN(a){this.a=a},
dc:function dc(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bu:function bu(a,b,c){this.a=a
this.b=b
this.c=c},
bi:function bi(a){this.a=a}},D={
Q:function(){var u=new D.bQ()
u.saf(null)
u.saV(null)
u.c=null
u.d=0
return u},
fd:function fd(){},
bQ:function bQ(){var _=this
_.d=_.c=_.b=_.a=null},
fA:function fA(a){this.a=a},
fB:function fB(a){this.a=a},
B:function B(){this.b=null},
bv:function bv(a){this.b=null
this.$ti=a},
bw:function bw(a){this.b=null
this.$ti=a},
H:function H(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
kd:function(a,b){var u,t,s=new D.br()
s.c=new V.Z(1,1,1)
s.a=V.nj()
s.d=V.ks()
s.e=V.ni()
u=s.b
s.b=b
b.gp().h(0,s.gep())
t=new D.H("mover",u,s.b,[U.a5])
t.b=!0
s.ap(t)
if(!s.c.n(0,a)){u=s.c
s.c=a
t=new D.H("color",u,a,[V.Z])
t.b=!0
s.ap(t)}return s},
br:function br(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a9:function a9(){},
du:function du(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dF:function dF(){},
dN:function dN(){}},X={
cs:function(){var u=new X.dt()
u.b6(X.af)
u.f=u.e=null
u.r=!1
u.y=u.x=null
u.bm(u.gei(),u.gek(),u.gem())
return u},
dd:function dd(a,b){this.a=a
this.b=b},
af:function af(a,b){this.a=a
this.b=b},
bU:function bU(a){this.c=a
this.b=null},
dt:function dt(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
fO:function fO(){this.d=this.b=this.a=null},
dw:function dw(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},
fW:function fW(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
bf:function bf(a,b,c){this.a=a
this.b=b
this.c=c},
bz:function bz(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},
hk:function hk(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hw:function hw(){},
dU:function dU(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},
i8:function i8(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},
dZ:function dZ(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mz:function(a){var u=new X.fI(),t=new V.bq(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lc
if(t==null){t=V.lb(0,0,1,1)
$.lc=t}u.r=t
return u},
de:function de(){},
fI:function fI(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dE:function dE(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dP:function dP(){},
of:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=null,i=O.kY(),h=i.dx,g=U.fi(V.km(1,-3,-1,j))
h.h(0,D.kd(new V.Z(0.4,0.4,1),g))
h=i.dx
g=U.fi(V.km(0,1,0,j))
h.h(0,D.kd(new V.Z(0,0.2,0.1),g))
h=i.r
h.sau(0,new V.Z(0.2,0.2,0.2))
h=i.x
h.sau(0,new V.Z(0.7,0.7,0.7))
i.z.sau(0,new V.Z(1,1,1))
h=i.z
h.bI(new A.ae(!0,h.c.b,!1))
h.cY(10)
u=E.fy()
u.scd(i)
t=F.le()
F.d0(t,j,j,1,1,1,0,0,1)
F.d0(t,j,j,1,1,0,1,0,3)
F.d0(t,j,j,1,1,0,0,1,2)
F.d0(t,j,j,1,1,-1,0,0,0)
F.d0(t,j,j,1,1,0,-1,0,0)
F.d0(t,j,j,1,1,0,0,-1,3)
t.aL()
for(h=[U.a5],g=[P.x],s=-60;s<=60;s+=12)for(r=s/10,q=-60;q<=60;q+=12){p=E.fy()
p.sbn(0,t)
o=q/10
n=new U.dJ()
n.r=n.f=n.e=n.d=n.c=n.b=n.a=0
n.se2(r)
n.sdM(0,o)
n.sdS(0)
m=n.d
if(!(Math.abs(m-r)<$.I().a)){n.d=r
m=new D.H("deltaYaw",m,r,g)
m.b=!0
l=n.y
if(l!=null)l.B(m)}m=n.e
if(!(Math.abs(m-o)<$.I().a)){n.e=o
o=new D.H("deltaPitch",m,o,g)
o.b=!0
m=n.y
if(m!=null)m.B(o)}o=n.f
if(!(Math.abs(o-0.32)<$.I().a)){n.f=0.32
o=new D.H("deltaRoll",o,0.32,g)
o.b=!0
m=n.y
if(m!=null)m.B(o)}o=new U.ck()
o.sV(0,new V.aa(1,0,0,s,0,1,0,0,0,0,1,q,0,0,0,1))
p.saP(U.kU(H.e([n,o],h)))
o=u.y
n=H.t(o,0)
H.A(p,n)
m=[n]
if(H.F(o.bE(H.e([p],m)))){l=o.a
k=l.length
C.a.h(l,p)
n=H.m(H.e([p],m),"$ih",[n],"$ah")
o=o.c
if(o!=null)o.$2(k,n)}}return u},
lS:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="testCanvas",c=null,b=1000,a=V.n4("Test 038"),a0=W.kb()
a0.className="pageLargeCanvas"
a0.id=d
a.a.appendChild(a0)
u=[P.i]
a.d4(H.e(["A test of basic 3D movement around a room similar to a first person view. ","A and D (left and right arrow keys) strifes left and right. ","W and S (up and down arrow keys) moves forward and backward. ","Q and E moves up and down. Mouse looks around with left mouse button pressed."],u))
a.hy(H.e(["options"],u))
a.d4(H.e(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(d)
if(t==null)H.z(P.C("Failed to find an element with the identifier, testCanvas."))
s=E.n8(t,!0,!0,!0,!1)
r=E.fy()
a=r.y
q=s.f.i8("../resources/Grass.png",!0,!0)
p=U.fi(V.l1(0,-3,0).m(0,V.b4(b,0,0,0,0,1,0,0,0,0,b,0,0,0,0,1)).m(0,V.kl(-1.5707963267948966)))
o=O.kY()
n=new V.aK(b,0,0,0,b,0,0,0,1)
if(!J.T(o.b,n)){m=o.b
l=m==null&&!0
if(l)o.a=null
o.b=n
m=new D.H("texture2DMatrix",m,n,[V.aK])
m.b=!0
o.W(m)}o.dx.h(0,D.kd(new V.Z(1,1,1),U.fi(V.km(1,-3,-1,c))))
m=o.r
m.sau(0,new V.Z(0.5,0.5,0.5))
m=o.x
m.sau(0,new V.Z(0.5,0.5,0.5))
o.r.sdU(q)
o.x.sdU(q)
m=E.fy()
m.sbn(0,F.oo(20,20))
m.saP(p)
m.scd(o)
a.h(0,m)
r.y.h(0,X.of(s))
m=s.r
k=new U.e0()
a=X.cs()
a.a8(39)
a.a8(68)
l=k.gfz()
a.gaN().h(0,l)
k.a=a
a=X.cs()
a.a8(37)
a.a8(65)
a.gaN().h(0,l)
k.b=a
a=X.cs()
a.a8(81)
a.gaN().h(0,l)
k.c=a
a=X.cs()
a.a8(69)
a.gaN().h(0,l)
k.d=a
a=X.cs()
a.a8(40)
a.a8(83)
a.gaN().h(0,l)
k.e=a
a=X.cs()
a.a8(38)
a.a8(87)
a.gaN().h(0,l)
k.f=a
a=U.df()
a.sb_(30)
a.sav(0)
l=k.gaE()
a.gp().h(0,l)
k.r=a
a=U.df()
a.sb_(30)
a.sav(0)
a.gp().h(0,l)
k.x=a
a=U.df()
a.sb_(30)
a.sav(0)
a.gp().h(0,l)
k.y=a
k.Q=k.z=null
k.ch=60
k.cx=15
k.cy=0
k.dx=k.db=null
k.seH(c)
k.a.al(m)
k.b.al(m)
k.c.al(m)
k.d.al(m)
k.e.al(m)
k.f.al(m)
a=s.r
j=new U.e_()
m=U.df()
m.scg(0,!0)
m.sc6(6.283185307179586)
m.sc7(0)
m.sY(0,0)
m.sb_(100)
m.sP(0)
m.sav(0.5)
j.b=m
l=j.gaE()
m.gp().h(0,l)
m=U.df()
m.scg(0,!0)
m.sc6(6.283185307179586)
m.sc7(0)
m.sY(0,0)
m.sb_(100)
m.sP(0)
m.sav(0.5)
j.c=m
m.gp().h(0,l)
j.d=null
j.r=j.f=j.e=!1
j.y=j.x=2.5
j.Q=4
j.ch=j.cx=!1
j.db=j.cy=0
j.dx=null
j.dy=0
j.fx=j.fr=null
i=new X.bf(!1,!1,!1)
h=j.d
j.d=i
m=new D.H("modifiers",h,i,[X.bf])
m.b=!0
j.I(m)
m=j.f
if(m!==!1){j.f=!1
m=new D.H("invertX",m,!1,[P.X])
m.b=!0
j.I(m)}m=j.r
if(m!==!1){j.r=!1
m=new D.H("invertY",m,!1,[P.X])
m.b=!0
j.I(m)}j.al(a)
j.b.sc6(1.5707963267948966)
j.b.sc7(-1.5707963267948966)
j.b.sav(1)
j.c.sav(1)
j.b.scg(0,!1)
j.gp().h(0,new X.jZ(k,j))
g=U.kU(H.e([k,j],[U.a5]))
a=new M.dk()
a.a=!0
a.seG(0,O.kc(E.ao))
a.e.b5(a.gfk(),a.gfm())
a.y=a.x=a.r=a.f=null
f=X.mz(c)
e=new X.dE()
e.c=1.0471975511965976
e.d=0.1
e.e=2000
e.saP(c)
m=e.c
if(!(Math.abs(m-1.0471975511965976)<$.I().a)){e.c=1.0471975511965976
m=new D.H("fov",m,1.0471975511965976,[P.x])
m.b=!0
e.aH(m)}m=e.d
if(!(Math.abs(m-0.1)<$.I().a)){e.d=0.1
m=new D.H("near",m,0.1,[P.x])
m.b=!0
e.aH(m)}m=e.e
if(!(Math.abs(m-2000)<$.I().a)){e.e=2000
m=new D.H("far",m,2000,[P.x])
m.b=!0
e.aH(m)}m=a.b
if(m!==e){if(m!=null)m.gp().T(0,a.gaF())
h=a.b
a.b=e
e.gp().h(0,a.gaF())
m=new D.H("camera",h,a.b,[X.de])
m.b=!0
a.aG(m)}m=a.c
if(m!==f){if(m!=null)m.gp().T(0,a.gaF())
h=a.c
a.c=f
f.gp().h(0,a.gaF())
m=new D.H("target",h,a.c,[X.dP])
m.b=!0
a.aG(m)}a.e.h(0,r)
a.b.saP(g)
m=s.d
if(m!==a){if(m!=null)m.gp().T(0,s.gco())
s.d=a
a.gp().h(0,s.gco())
s.cp()}a=new V.fe("options")
u=u.getElementById("options")
a.c=u
if(u==null)H.z("Failed to find options for CheckGroup")
a.seF(H.e([],[W.ci]))
a.hx(0,"Mouse Locking",new X.k_(s),!1)
V.oA(s)},
jZ:function jZ(a,b){this.a=a
this.b=b},
k_:function k_(a){this.a=a}},V={
k5:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.b4(a-b,u)
return(a<0?a+u:a)+b},
N:function(a,b,c){if(a==null)return C.b.aa("null",c)
return C.b.aa(C.e.dX(Math.abs(a-0)<$.I().a?0:a,b),c+b+1)},
c9:function(a,b,c){var u,t,s,r,q,p
H.m(a,"$ib",[P.x],"$ab")
u=H.e([],[P.i])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.y)(a),++r){q=V.N(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.d(u,p)
C.a.k(u,p,C.b.aa(u[p],s))}return u},
kJ:function(a){return C.e.iG(Math.pow(2,C.K.c0(Math.log(H.ob(a))/Math.log(2))))},
mN:function(){var u=$.kZ
return u==null?$.kZ=new V.aK(1,0,0,0,1,0,0,0,1):u},
dz:function(){var u=$.l2
return u==null?$.l2=V.b4(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b4:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aa(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
l1:function(a,b,c){return V.b4(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kl:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b4(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
l0:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b4(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
km:function(a,b,c,d){d=V.ks()
return V.l_(V.l7(),d,new V.M(a,b,c))},
l_:function(a,b,c){var u=c.w(0,Math.sqrt(c.K(c))),t=b.aY(u),s=t.w(0,Math.sqrt(t.K(t))),r=u.aY(s),q=new V.M(a.a,a.b,a.c),p=s.O(0).K(q),o=r.O(0).K(q),n=u.O(0).K(q)
return V.b4(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bC:function(){var u=$.l6
return u==null?$.l6=new V.ah(0,0):u},
l7:function(){var u=$.cB
return u==null?$.cB=new V.ai(0,0,0):u},
lb:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dI(a,b,c,d)},
e1:function(){var u=$.lp
return u==null?$.lp=new V.M(0,0,0):u},
ni:function(){var u=$.iB
return u==null?$.iB=new V.M(-1,0,0):u},
ks:function(){var u=$.iC
return u==null?$.iC=new V.M(0,1,0):u},
nj:function(){var u=$.iD
return u==null?$.iD=new V.M(0,0,1):u},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
bq:function bq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fz:function fz(a){this.a=a},
aK:function aK(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aa:function aa(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ah:function ah(a,b){this.a=a
this.b=b},
ai:function ai(a,b,c){this.a=a
this.b=b
this.c=c},
cC:function cC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dI:function dI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a3:function a3(a,b){this.a=a
this.b=b},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
ak:function(a){var u=new V.hH()
u.ee(a)
return u},
f_:function f_(){},
be:function be(){},
dx:function dx(){},
bg:function bg(){this.a=null},
hH:function hH(){this.a=null},
cF:function cF(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dT:function dT(a,b,c){this.a=a
this.b=b
this.c=c},
cJ:function cJ(a){this.b=a
this.c=null},
i7:function i7(){this.c=this.b=this.a=null},
cK:function cK(a){this.b=a
this.a=this.c=null},
oA:function(a){P.n9(C.I,new V.k2(a))},
n4:function(a){var u=new V.hL()
u.eg(a,!0)
return u},
fe:function fe(a){this.a=a
this.d=this.c=null},
ff:function ff(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k2:function k2(a){this.a=a},
hL:function hL(){this.b=this.a=null},
hN:function hN(a){this.a=a},
hM:function hM(a){this.a=a}},U={
df:function(){var u=new U.fg()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
fi:function(a){var u=new U.ck()
u.sV(0,a)
return u},
kU:function(a){var u=new U.cp()
u.b6(U.a5)
u.b5(u.gfa(),u.gfP())
u.bM(0,a)
u.e=null
u.f=V.dz()
u.r=0
return u},
fg:function fg(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ck:function ck(){this.b=this.a=null},
cp:function cp(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a5:function a5(){},
dJ:function dJ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e_:function e_(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e0:function e0(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dk:function dk(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
mL:function(a,b){var u=a.aw,t=new A.h1(b,u)
t.ef(b,u)
t.ec(a,b)
return t},
mM:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.m(a9,"$ib",[A.aw],"$ab")
H.m(b0,"$ib",[A.ay],"$ab")
H.m(b1,"$ib",[A.az],"$ab")
u="MaterialLight_"+a0.gad(a0)+a1.gad(a1)+a2.gad(a2)+a3.gad(a3)+a4.gad(a4)+a5.gad(a5)+a6.gad(a6)+a7.gad(a7)+a8.gad(a8)+"_"
u+=a?"1":"0"
u+=b?"1":"0"
u+=c?"1":"0"
u=u+"0_"+e
t=a9.length
if(t>0){u+="_Dir"
for(s=0;s<a9.length;a9.length===t||(0,H.y)(a9),++s)u+="_"+H.l(a9[s].a)}t=b0.length
if(t>0){u+="_Point"
for(s=0;s<b0.length;b0.length===t||(0,H.y)(b0),++s)u+="_"+H.l(b0[s].a)}t=b1.length
if(t>0){u+="_Spot"
for(s=0;s<b1.length;b1.length===t||(0,H.y)(b1),++s)u+="_"+H.l(b1[s].a)}for(t=a9.length,r=0,q=!1,s=0;s<t;++s,q=!0)r+=a9[s].b
for(t=b0.length,s=0;s<t;++s,q=!0)r+=b0[s].b
for(p=b1.length,s=0;s<p;++s,q=!0)r+=b1[s].b
o=a6.a||a6.b||!1||a7.a||a7.b||!1
if(!(a1.a||a1.b||!1))if(!(a2.a||a2.b||!1)){p=a3.a||a3.b||!1||a4.a||a4.b||!1
n=p}else n=!0
else n=!0
p=!a4.a
m=!p||a4.b||!1||t>0||o
if(!(a2.a||a2.b||!1))l=a3.a||a3.b||!1||!p||a4.b||!1
else l=!0
if(!l)k=a5.a||a5.b||!1||o
else k=!0
j=a5.a||a5.b||!1
i=a0.b||a1.b||a2.b||a3.b||a4.b||a5.b||a6.b||a7.b||a8.b
h=e>0
g=k||j||m||!1
a=a&&i
f=$.bn()
if(k){t=$.bm()
f=new Z.bi(f.a|t.a)}if(j){t=$.bl()
f=new Z.bi(f.a|t.a)}if(i){t=$.bo()
f=new Z.bi(f.a|t.a)}if(h){t=$.bk()
f=new Z.bi(f.a|t.a)}return new A.h4(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,r,o,l,o,q,g,!0,!1,!1,n,q,m,k,j,i,!1,h,a,!1,c,!1,e,u.charCodeAt(0)==0?u:u,f)},
jI:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
jJ:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.jI(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.k3(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
nM:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jI(b,t,"emission")
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
nJ:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jJ(b,t,"ambient")
b.a+="\n"},
nK:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jJ(b,t,"diffuse")
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
nN:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jJ(b,t,"invDiffuse")
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
nT:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jJ(b,t,"specular")
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
nP:function(a,b){var u,t,s
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
nR:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jI(b,t,"reflect")
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
nS:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jI(b,t,"refract")
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
nL:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.l(u)
s=A.k3(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ae()
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
r=[P.i]
o=H.e([],r)
n=a.b
if(n.a||n.b||!1)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.e([],r)
r=a.c
if(r.a||r.b||!1)C.a.h(m,"diffuse(norm, lit.viewDir)")
r=a.d
if(r.a||r.b||!1)C.a.h(m,"invDiffuse(norm, lit.viewDir)")
r=a.e
if(r.a||r.b||!1)C.a.h(m,"specular(norm, lit.viewDir)")
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
c.a+="      highLight = intensity*("+C.a.q(m," + ")+");\n"}else c.a+="   highLight = "+C.a.q(m," + ")+";\n"
C.a.h(o,"highLight")}r=c.a+="   return lit.color*("+C.a.q(o," + ")+");\n"
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
nQ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.l(u)
s=A.k3(t)
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
if(typeof u!=="number")return u.ae()
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
c.a=r+"\n"}r=[P.i]
l=H.e([],r)
C.a.h(l,"lit.color")
if(o)C.a.h(l,"attenuation")
if(u)C.a.h(l,"textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.q(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.e([],r)
o=a.b
if(o.a||o.b||!1)C.a.h(l,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
C.a.h(l,"highLight")
m=u?", txtCube":""
if(p)m+=", shadowCube"
o=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
o+="   vec3 intensity = "+t+"Intensity(normDir, lit"+m+");\n"
c.a=o
c.a=o+"   if(length(intensity) > 0.0001) {\n"
k=H.e([],r)
r=a.c
if(r.a||r.b||!1)C.a.h(k,"diffuse(norm, normDir)")
r=a.d
if(r.a||r.b||!1)C.a.h(k,"invDiffuse(norm, normDir)")
r=a.e
if(r.a||r.b||!1)C.a.h(k,"specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.a.q(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.q(l," + ")+");\n"
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
nU:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.l(u)
s=A.k3(t)
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
if(typeof u!=="number")return u.ae()
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
c.a=u+"\n"}u=[P.i]
j=H.e([],u)
if(n)C.a.h(j,"attenuation")
if(o)C.a.h(j,"scale")
if(m)C.a.h(j,"texture2D(txt2D, txtLoc).rgb")
else C.a.h(j,"vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.q(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.e([],u)
r=a.b
if(r.a||r.b||!1)C.a.h(j,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"highLight")
k=m?", txt2D":""
if(p)k+=", shadow2D"
r=c.a+="   vec3 intensity = "+t+"Intensity(lit"+k+");\n"
r+="   if(length(intensity) > 0.0001) {\n"
c.a=r
c.a=r+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
i=H.e([],u)
u=a.c
if(u.a||u.b||!1)C.a.h(i,"diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)C.a.h(i,"invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)C.a.h(i,"specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.a.q(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.q(j," + ")+");\n"
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
nO:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.e([],[P.i])
u=a.b
if(u.a||u.b||!1)C.a.h(t,"ambientColor")
u=a.c
if(u.a||u.b||!1)C.a.h(t,"diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)C.a.h(t,"invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)C.a.h(t,"specular(norm, litVec)")
u=b.a+="   return "+C.a.q(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
nV:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.al("")
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
A.nM(a,j)
A.nJ(a,j)
A.nK(a,j)
A.nN(a,j)
A.nT(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.nR(a,j)
A.nS(a,j)}A.nP(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.y)(q),++o)A.nL(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.y)(q),++o)A.nQ(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.y)(q),++o)A.nU(a,q[o],j)
A.nO(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.e([],[P.i])
if(r){j.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(n,"lightAccum")
u=a.b
if(u.a||u.b||!1)j.a+="   setAmbientColor();\n"
u=a.c
if(u.a||u.b||!1)j.a+="   setDiffuseColor();\n"
u=a.d
if(u.a||u.b||!1)j.a+="   setInvDiffuseColor();\n"
u=a.e
if(u.a||u.b||!1)j.a+="   setSpecularColor();\n"
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.y)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a5(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.y)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a5(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.y)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a5(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)C.a.h(n,"emissionColor()")
u=a.r
if(u.a||u.b||!1)C.a.h(n,"reflect(refl)")
u=a.x
if(u.a||u.b||!1)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.q(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
nW:function(a,b){var u,t,s
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
nY:function(a,b){var u
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
nX:function(a,b){var u
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
o_:function(a,b){var u,t
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
o0:function(a,b){var u,t
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
nZ:function(a,b){var u
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
o1:function(a,b){var u
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
k3:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.b.a5(a,1)},
ko:function(a,b,c,d,e){var u=new A.ig(a,c,e)
u.f=d
u.shv(P.mJ(d,0,P.k))
return u},
d9:function d9(a,b,c){this.a=a
this.b=b
this.c=c},
f3:function f3(a){this.a=a},
ae:function ae(a,b,c){this.a=a
this.b=b
this.c=c},
h1:function h1(a,b){var _=this
_.iS=_.dd=_.dc=_.da=_.aw=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.j_=_.iZ=_.iY=_.c_=_.bZ=_.bY=_.bX=_.bW=_.bV=_.iX=_.dr=_.dq=_.iW=_.dn=_.dm=_.dl=_.iV=_.dk=_.dj=_.di=_.iU=_.dh=_.dg=_.iT=_.df=_.de=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aw:function aw(a,b){this.a=a
this.b=b},
ay:function ay(a,b){this.a=a
this.b=b},
az:function az(a,b){this.a=a
this.b=b},
h4:function h4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aw=b3
_.da=b4},
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
c2:function c2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cE:function cE(){},
dV:function dV(){},
il:function il(a){this.a=a},
aC:function aC(a,b,c){this.a=a
this.c=b
this.d=c},
ii:function ii(a,b,c){this.a=a
this.c=b
this.d=c},
ij:function ij(a,b,c){this.a=a
this.c=b
this.d=c},
ik:function ik(a,b,c){this.a=a
this.c=b
this.d=c},
ig:function ig(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ad:function ad(a,b,c){this.a=a
this.c=b
this.d=c},
ih:function ih(a,b,c){this.a=a
this.c=b
this.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c},
cL:function cL(a,b,c){this.a=a
this.c=b
this.d=c},
im:function im(a,b,c){this.a=a
this.c=b
this.d=c},
cM:function cM(a,b,c){this.a=a
this.c=b
this.d=c},
au:function au(a,b,c){this.a=a
this.c=b
this.d=c},
am:function am(a,b,c){this.a=a
this.c=b
this.d=c},
c1:function c1(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jD:function(a){var u,t=a.a>0?1:0
if(a.b>0)t+=2
u=a.c
if(typeof u!=="number")return u.a2()
return(u>0?t+4:t)*2},
d0:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.M(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.M(u+a3,t+a1,s+a2)
q=new V.M(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.M(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jD(i)
l=F.jD(j.b)
k=F.lZ(d,a0,new F.jC(j,F.jD(j.c),F.jD(j.d),l,m,c),b)
if(k!=null)a.ia(k)},
oo:function(a,b){var u,t={}
t.a=u
t.a=null
t.a=new F.jR()
return F.lZ(b,a,new F.jS(t),null)},
lZ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,{func:1,ret:-1,args:[F.aU,P.x,P.x]})
if(a<1)return
if(b<1)return
u=F.le()
t=H.e([],[F.aU])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.d3(new V.bq(p,0,0,1),new V.ah(r,1))
c.$3(o,r,0)
C.a.h(t,o.bU(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.d3(new V.bq(j,i,h,1),new V.ah(r,m))
c.$3(o,r,n)
C.a.h(t,o.bU(d))}}u.d.hA(a+1,b+1,t)
return u},
dm:function(a,b,c){var u=new F.a8(),t=a.a
if(t==null)H.z(P.C("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.z(P.C("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a0()
return u},
le:function(){var u=new F.dL(),t=new F.iE(u)
t.b=!1
t.shw(H.e([],[F.aU]))
u.a=t
t=new F.hK(u)
t.sbF(H.e([],[F.bB]))
u.b=t
t=new F.hJ(u)
t.seX(H.e([],[F.bd]))
u.c=t
t=new F.hI(u)
t.seQ(H.e([],[F.a8]))
u.d=t
u.e=null
return u},
lq:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aU(),r=new F.iJ()
r.sbF(H.e([],[F.bB]))
s.b=r
r=new F.iI()
u=[F.bd]
r.seY(H.e([],u))
r.seZ(H.e([],u))
s.c=r
r=new F.iF()
u=[F.a8]
r.seR(H.e([],u))
r.seS(H.e([],u))
r.seT(H.e([],u))
s.d=r
h=$.md()
s.e=0
r=$.bn()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bm().a)!==0?e:t
s.x=(u&$.bl().a)!==0?b:t
s.y=(u&$.bo().a)!==0?f:t
s.z=(u&$.bI().a)!==0?g:t
s.Q=(u&$.me().a)!==0?c:t
s.ch=(u&$.ce().a)!==0?i:0
s.cx=(u&$.bk().a)!==0?a:t
return s},
jC:function jC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jR:function jR(){},
jS:function jS(a){this.a=a},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bd:function bd(){this.b=this.a=null},
bB:function bB(){this.a=null},
dL:function dL(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hI:function hI(a){this.a=a
this.b=null},
hJ:function hJ(a){this.a=a
this.b=null},
hK:function hK(a){this.a=a
this.b=null},
aU:function aU(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iL:function iL(a){this.a=a},
iK:function iK(a){this.a=a},
iE:function iE(a){this.a=a
this.c=this.b=null},
iF:function iF(){this.d=this.c=this.b=null},
iG:function iG(a,b){this.a=a
this.b=b},
iH:function iH(a,b){this.a=a
this.b=b},
iI:function iI(){this.c=this.b=null},
iJ:function iJ(){this.b=null}},T={cI:function cI(){},dR:function dR(){},i2:function i2(){var _=this
_.y=_.d=_.c=_.b=_.a=null},i3:function i3(a){var _=this
_.a=a
_.e=_.d=_.b=null},i4:function i4(a,b,c,d,e,f,g){var _=this
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
H.ki.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gE:function(a){return H.cD(a)},
i:function(a){return"Instance of '"+H.bW(a)+"'"}}
J.fL.prototype={
i:function(a){return String(a)},
gE:function(a){return a?519018:218159},
$iX:1}
J.dr.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gE:function(a){return 0}}
J.ds.prototype={
gE:function(a){return 0},
i:function(a){return String(a)}}
J.hu.prototype={}
J.bF.prototype={}
J.by.prototype={
i:function(a){var u=a[$.m1()]
if(u==null)return this.e9(a)
return"JavaScript function for "+H.l(J.as(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ike:1}
J.b0.prototype={
h:function(a,b){H.A(b,H.t(a,0))
if(!!a.fixed$length)H.z(P.E("add"))
a.push(b)},
T:function(a,b){var u
if(!!a.fixed$length)H.z(P.E("remove"))
for(u=0;u<a.length;++u)if(J.T(a[u],b)){a.splice(u,1)
return!0}return!1},
bM:function(a,b){var u,t
H.m(b,"$ih",[H.t(a,0)],"$ah")
if(!!a.fixed$length)H.z(P.E("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.y)(b),++t)a.push(b[t])},
F:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bO(a))}},
q:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.l(a[u]))
return t.join(b)},
i6:function(a){return this.q(a,"")},
i_:function(a,b,c,d){var u,t,s
H.A(b,d)
H.n(c,{func:1,ret:d,args:[d,H.t(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bO(a))}return t},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
e7:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ac(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ac(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.t(a,0)])
return H.e(a.slice(b,c),[H.t(a,0)])},
gay:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.mC())},
bo:function(a,b){var u=H.t(a,0)
H.n(b,{func:1,ret:P.k,args:[u,u]})
if(!!a.immutable$list)H.z(P.E("sort"))
H.dM(a,0,a.length-1,b,u)},
a1:function(a,b){var u
for(u=0;u<a.length;++u)if(J.T(a[u],b))return!0
return!1},
i:function(a){return P.kf(a,"[","]")},
gS:function(a){return new J.ap(a,a.length,[H.t(a,0)])},
gE:function(a){return H.cD(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.z(P.E("set length"))
if(b<0)throw H.c(P.ac(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.c8(a,b))
return a[b]},
k:function(a,b,c){H.A(c,H.t(a,0))
if(!!a.immutable$list)H.z(P.E("indexed set"))
if(b>=a.length||b<0)throw H.c(H.c8(a,b))
a[b]=c},
$ih:1,
$ib:1}
J.kh.prototype={}
J.ap.prototype={
gJ:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.y(s))
u=t.c
if(u>=r){t.scI(null)
return!1}t.scI(s[u]);++t.c
return!0},
scI:function(a){this.d=H.A(a,H.t(this,0))},
$ib_:1}
J.bT.prototype={
hI:function(a,b){var u
H.lT(b)
if(typeof b!=="number")throw H.c(H.aG(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbf(b)
if(this.gbf(a)===u)return 0
if(this.gbf(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbf:function(a){return a===0?1/a<0:a<0},
iG:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.E(""+a+".toInt()"))},
c0:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.E(""+a+".floor()"))},
ai:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.E(""+a+".round()"))},
dX:function(a,b){var u
if(b>20)throw H.c(P.ac(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbf(a))return"-"+u
return u},
b2:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ac(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.R(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.z(P.E("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.m("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gE:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
b4:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eb:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d_(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.d_(a,b)},
d_:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.E("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
aK:function(a,b){var u
if(a>0)u=this.cZ(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hh:function(a,b){if(b<0)throw H.c(H.aG(b))
return this.cZ(a,b)},
cZ:function(a,b){return b>31?0:a>>>b},
a2:function(a,b){if(typeof b!=="number")throw H.c(H.aG(b))
return a>b},
$ix:1,
$ia7:1}
J.dq.prototype={$ik:1}
J.dp.prototype={}
J.bx.prototype={
R:function(a,b){if(b<0)throw H.c(H.c8(a,b))
if(b>=a.length)H.z(H.c8(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.c(H.c8(a,b))
return a.charCodeAt(b)},
u:function(a,b){if(typeof b!=="string")throw H.c(P.k9(b,null,null))
return a+b},
aR:function(a,b,c,d){var u,t
c=P.bD(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a4:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ac(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a3:function(a,b){return this.a4(a,b,0)},
t:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.z(H.aG(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.N()
if(b<0)throw H.c(P.hy(b,null))
if(b>c)throw H.c(P.hy(b,null))
if(c>a.length)throw H.c(P.hy(c,null))
return a.substring(b,c)},
a5:function(a,b){return this.t(a,b,null)},
m:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.G)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aa:function(a,b){var u=b-a.length
if(u<=0)return a
return this.m(" ",u)+a},
im:function(a,b,c){var u=b-a.length
if(u<=0)return a
return a+this.m(c,u)},
dB:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ac(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dA:function(a,b){return this.dB(a,b,0)},
i:function(a){return a},
gE:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$il4:1,
$ii:1}
H.a4.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.b.R(this.a,b)},
$acN:function(){return[P.k]},
$av:function(){return[P.k]},
$ah:function(){return[P.k]},
$ab:function(){return[P.k]}}
H.fw.prototype={}
H.dv.prototype={
gJ:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.d3(s),q=r.gl(s)
if(t.b!==q)throw H.c(P.bO(s))
u=t.c
if(u>=q){t.saT(null)
return!1}t.saT(r.G(s,u));++t.c
return!0},
saT:function(a){this.d=H.A(a,H.t(this,0))},
$ib_:1}
H.h_.prototype={
gS:function(a){return new H.h0(J.bJ(this.a),this.b,this.$ti)},
gl:function(a){return J.aI(this.a)},
G:function(a,b){return this.b.$1(J.k8(this.a,b))},
$ah:function(a,b){return[b]}}
H.h0.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.saT(u.c.$1(t.gJ(t)))
return!0}u.saT(null)
return!1},
gJ:function(a){return this.a},
saT:function(a){this.a=H.A(a,H.t(this,1))},
$ab_:function(a,b){return[b]}}
H.iO.prototype={
gS:function(a){return new H.iP(J.bJ(this.a),this.b,this.$ti)}}
H.iP.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(H.F(t.$1(u.gJ(u))))return!0
return!1},
gJ:function(a){var u=this.a
return u.gJ(u)}}
H.bR.prototype={}
H.cN.prototype={
k:function(a,b,c){H.A(c,H.av(this,"cN",0))
throw H.c(P.E("Cannot modify an unmodifiable list"))}}
H.dX.prototype={}
H.fj.prototype={
i:function(a){return P.kk(this)},
k:function(a,b,c){H.A(b,H.t(this,0))
H.A(c,H.t(this,1))
return H.mu()},
$iw:1}
H.fk.prototype={
gl:function(a){return this.a},
bd:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bd(0,b))return
return this.cJ(b)},
cJ:function(a){return this.b[H.L(a)]},
F:function(a,b){var u,t,s,r,q=this,p=H.t(q,1)
H.n(b,{func:1,ret:-1,args:[H.t(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.A(q.cJ(r),p))}}}
H.ic.prototype={
a9:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fN.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.l(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.l(t.a)+")"
return s+r+"' on '"+u+"' ("+H.l(t.a)+")"}}
H.iq.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.k4.prototype={
$1:function(a){if(!!J.S(a).$ibt)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:22}
H.ez.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaq:1}
H.cj.prototype={
i:function(a){return"Closure '"+H.bW(this).trim()+"'"},
$ike:1,
giL:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i_.prototype={}
H.hS.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cd(u)+"'"}}
H.cf.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cf))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gE:function(a){var u,t=this.c
if(t==null)u=H.cD(this.a)
else u=typeof t!=="object"?J.d7(t):H.cD(t)
return(u^H.cD(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bW(u)+"'")}}
H.ie.prototype={
i:function(a){return this.a}}
H.fc.prototype={
i:function(a){return this.a}}
H.hF.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.iQ.prototype={
i:function(a){return"Assertion failed: "+P.dl(this.a)}}
H.a_.prototype={
gl:function(a){return this.a},
gam:function(a){return new H.fR(this,[H.t(this,0)])},
bd:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cF(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cF(t,b)}else return s.i3(b)},
i3:function(a){var u=this,t=u.d
if(t==null)return!1
return u.c3(u.bw(t,u.c2(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b7(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b7(r,b)
s=t==null?null:t.b
return s}else return q.i4(b)},
i4:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bw(r,s.c2(a))
t=s.c3(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.A(b,H.t(s,0))
H.A(c,H.t(s,1))
if(typeof b==="string"){u=s.b
s.cu(u==null?s.b=s.bz():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cu(t==null?s.c=s.bz():t,b,c)}else s.i5(b,c)},
i5:function(a,b){var u,t,s,r,q=this
H.A(a,H.t(q,0))
H.A(b,H.t(q,1))
u=q.d
if(u==null)u=q.d=q.bz()
t=q.c2(a)
s=q.bw(u,t)
if(s==null)q.bJ(u,t,[q.bA(a,b)])
else{r=q.c3(s,a)
if(r>=0)s[r].b=b
else s.push(q.bA(a,b))}},
F:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.t(s,0),H.t(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bO(s))
u=u.c}},
cu:function(a,b,c){var u,t=this
H.A(b,H.t(t,0))
H.A(c,H.t(t,1))
u=t.b7(a,b)
if(u==null)t.bJ(a,b,t.bA(b,c))
else u.b=c},
bA:function(a,b){var u=this,t=new H.fQ(H.A(a,H.t(u,0)),H.A(b,H.t(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
c2:function(a){return J.d7(a)&0x3ffffff},
c3:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.T(a[t].a,b))return t
return-1},
i:function(a){return P.kk(this)},
b7:function(a,b){return a[b]},
bw:function(a,b){return a[b]},
bJ:function(a,b,c){a[b]=c},
eL:function(a,b){delete a[b]},
cF:function(a,b){return this.b7(a,b)!=null},
bz:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bJ(t,u,t)
this.eL(t,u)
return t}}
H.fQ.prototype={}
H.fR.prototype={
gl:function(a){return this.a.a},
gS:function(a){var u=this.a,t=new H.fS(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fS.prototype={
gJ:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bO(t))
else{t=u.c
if(t==null){u.sct(null)
return!1}else{u.sct(t.a)
u.c=u.c.c
return!0}}},
sct:function(a){this.d=H.A(a,H.t(this,0))},
$ib_:1}
H.jU.prototype={
$1:function(a){return this.a(a)},
$S:22}
H.jV.prototype={
$2:function(a,b){return this.a(a,b)},
$S:50}
H.jW.prototype={
$1:function(a){return this.a(H.L(a))},
$S:46}
H.fM.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$il4:1,
$in0:1}
H.cx.prototype={$icx:1}
H.bA.prototype={$ibA:1,$ina:1}
H.dA.prototype={
gl:function(a){return a.length},
$iK:1,
$aK:function(){}}
H.cy.prototype={
j:function(a,b){H.bb(b,a,a.length)
return a[b]},
k:function(a,b,c){H.oh(c)
H.bb(b,a,a.length)
a[b]=c},
$abR:function(){return[P.x]},
$av:function(){return[P.x]},
$ih:1,
$ah:function(){return[P.x]},
$ib:1,
$ab:function(){return[P.x]}}
H.dB.prototype={
k:function(a,b,c){H.a0(c)
H.bb(b,a,a.length)
a[b]=c},
$abR:function(){return[P.k]},
$av:function(){return[P.k]},
$ih:1,
$ah:function(){return[P.k]},
$ib:1,
$ab:function(){return[P.k]}}
H.hl.prototype={
j:function(a,b){H.bb(b,a,a.length)
return a[b]}}
H.hm.prototype={
j:function(a,b){H.bb(b,a,a.length)
return a[b]}}
H.hn.prototype={
j:function(a,b){H.bb(b,a,a.length)
return a[b]}}
H.ho.prototype={
j:function(a,b){H.bb(b,a,a.length)
return a[b]}}
H.hp.prototype={
j:function(a,b){H.bb(b,a,a.length)
return a[b]}}
H.dC.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bb(b,a,a.length)
return a[b]},
$ioY:1}
H.cz.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bb(b,a,a.length)
return a[b]},
$icz:1,
$iP:1}
H.cR.prototype={}
H.cS.prototype={}
H.cT.prototype={}
H.cU.prototype={}
P.iS.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:21}
P.iR.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:45}
P.iT.prototype={
$0:function(){this.a.$0()},
$S:2}
P.iU.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eF.prototype={
eu:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c7(new P.js(this,b),0),a)
else throw H.c(P.E("`setTimeout()` not found."))},
ev:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c7(new P.jr(this,a,Date.now(),b),0),a)
else throw H.c(P.E("Periodic timer."))},
$ib6:1}
P.js.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jr.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.eb(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.ba.prototype={
i9:function(a){if(this.c!==6)return!0
return this.b.b.cc(H.n(this.d,{func:1,ret:P.X,args:[P.O]}),a.a,P.X,P.O)},
i1:function(a){var u=this.e,t=P.O,s={futureOr:1,type:H.t(this,1)},r=this.b.b
if(H.eW(u,{func:1,args:[P.O,P.aq]}))return H.kF(r.iB(u,a.a,a.b,null,t,P.aq),s)
else return H.kF(r.cc(H.n(u,{func:1,args:[P.O]}),a.a,null,t),s)}}
P.aE.prototype={
dW:function(a,b,c){var u,t,s,r=H.t(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.W
if(u!==C.f){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.o3(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aE($.W,[c])
s=b==null?1:3
this.cv(new P.ba(t,s,a,b,[r,c]))
return t},
iF:function(a,b){return this.dW(a,null,b)},
cv:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$iba")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaE")
s=u.a
if(s<4){u.cv(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.jM(null,null,s,H.n(new P.j1(t,a),{func:1,ret:-1}))}},
cU:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$iba")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaE")
u=q.a
if(u<4){q.cU(a)
return}p.a=u
p.c=q.c}o.a=p.ba(a)
u=p.b
u.toString
P.jM(null,null,u,H.n(new P.j5(o,p),{func:1,ret:-1}))}},
bH:function(){var u=H.f(this.c,"$iba")
this.c=null
return this.ba(u)},
ba:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cB:function(a){var u,t,s=this,r=H.t(s,0)
H.kF(a,{futureOr:1,type:r})
u=s.$ti
if(H.kC(a,"$ico",u,"$aco"))if(H.kC(a,"$iaE",u,null))P.lr(a,s)
else P.no(a,s)
else{t=s.bH()
H.A(a,r)
s.a=4
s.c=a
P.cP(s,t)}},
cC:function(a,b){var u,t=this
H.f(b,"$iaq")
u=t.bH()
t.a=8
t.c=new P.an(a,b)
P.cP(t,u)},
$ico:1}
P.j1.prototype={
$0:function(){P.cP(this.a,this.b)},
$S:2}
P.j5.prototype={
$0:function(){P.cP(this.b,this.a.a)},
$S:2}
P.j2.prototype={
$1:function(a){var u=this.a
u.a=0
u.cB(a)},
$S:21}
P.j3.prototype={
$2:function(a,b){H.f(b,"$iaq")
this.a.cC(a,b)},
$1:function(a){return this.$2(a,null)},
$S:44}
P.j4.prototype={
$0:function(){this.a.cC(this.b,this.c)},
$S:2}
P.j8.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dT(H.n(s.d,{func:1}),null)}catch(r){u=H.aH(r)
t=H.cb(r)
if(o.d){s=H.f(o.a.a.c,"$ian").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$ian")
else q.b=new P.an(u,t)
q.a=!0
return}if(!!J.S(n).$ico){if(n instanceof P.aE&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$ian")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.iF(new P.j9(p),null)
s.a=!1}},
$S:3}
P.j9.prototype={
$1:function(a){return this.a},
$S:42}
P.j7.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.t(s,0)
q=H.A(n.c,r)
p=H.t(s,1)
n.a.b=s.b.b.cc(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aH(o)
t=H.cb(o)
s=n.a
s.b=new P.an(u,t)
s.a=!0}},
$S:3}
P.j6.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$ian")
r=m.c
if(H.F(r.i9(u))&&r.e!=null){q=m.b
q.b=r.i1(u)
q.a=!1}}catch(p){t=H.aH(p)
s=H.cb(p)
r=H.f(m.a.a.c,"$ian")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.an(t,s)
n.a=!0}},
$S:3}
P.e3.prototype={}
P.hV.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.aE($.W,[P.k])
r.a=0
u=H.t(s,0)
t=H.n(new P.hX(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.hY(r,q),{func:1,ret:-1})
W.a6(s.a,s.b,t,!1,u)
return q}}
P.hX.prototype={
$1:function(a){H.A(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.t(this.b,0)]}}}
P.hY.prototype={
$0:function(){this.b.cB(this.a.a)},
$S:2}
P.cG.prototype={}
P.hW.prototype={}
P.b6.prototype={}
P.an.prototype={
i:function(a){return H.l(this.a)},
$ibt:1}
P.jB.prototype={$ipb:1}
P.jL.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dD():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:2}
P.jg.prototype={
iC:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.W){a.$0()
return}P.lC(r,r,this,a,-1)}catch(s){u=H.aH(s)
t=H.cb(s)
P.jK(r,r,this,u,H.f(t,"$iaq"))}},
iD:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.f===$.W){a.$1(b)
return}P.lD(r,r,this,a,b,-1,c)}catch(s){u=H.aH(s)
t=H.cb(s)
P.jK(r,r,this,u,H.f(t,"$iaq"))}},
hF:function(a,b){return new P.ji(this,H.n(a,{func:1,ret:b}),b)},
bO:function(a){return new P.jh(this,H.n(a,{func:1,ret:-1}))},
d6:function(a,b){return new P.jj(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
dT:function(a,b){H.n(a,{func:1,ret:b})
if($.W===C.f)return a.$0()
return P.lC(null,null,this,a,b)},
cc:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.W===C.f)return a.$1(b)
return P.lD(null,null,this,a,b,c,d)},
iB:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.W===C.f)return a.$2(b,c)
return P.o4(null,null,this,a,b,c,d,e,f)}}
P.ji.prototype={
$0:function(){return this.a.dT(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jh.prototype={
$0:function(){return this.a.iC(this.b)},
$S:3}
P.jj.prototype={
$1:function(a){var u=this.c
return this.a.iD(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jd.prototype={
gS:function(a){return P.lt(this,this.r,H.t(this,0))},
gl:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.A(b,H.t(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cz(u==null?s.b=P.kv():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cz(t==null?s.c=P.kv():t,b)}else return s.ex(0,b)},
ex:function(a,b){var u,t,s,r=this
H.A(b,H.t(r,0))
u=r.d
if(u==null)u=r.d=P.kv()
t=r.cD(b)
s=u[t]
if(s==null)u[t]=[r.bs(b)]
else{if(r.cK(s,b)>=0)return!1
s.push(r.bs(b))}return!0},
T:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.h4(this.c,b)
else return this.h3(0,b)},
h3:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.eV(r,b)
t=s.cK(u,b)
if(t<0)return!1
s.d0(u.splice(t,1)[0])
return!0},
cz:function(a,b){H.A(b,H.t(this,0))
if(H.f(a[b],"$icQ")!=null)return!1
a[b]=this.bs(b)
return!0},
h4:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$icQ")
if(u==null)return!1
this.d0(u)
delete a[b]
return!0},
cO:function(){this.r=1073741823&this.r+1},
bs:function(a){var u,t=this,s=new P.cQ(H.A(a,H.t(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cO()
return s},
d0:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cO()},
cD:function(a){return J.d7(a)&1073741823},
eV:function(a,b){return a[this.cD(b)]},
cK:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.T(a[t].a,b))return t
return-1}}
P.cQ.prototype={}
P.je.prototype={
gJ:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bO(t))
else{t=u.c
if(t==null){u.scA(null)
return!1}else{u.scA(H.A(t.a,H.t(u,0)))
u.c=u.c.b
return!0}}},
scA:function(a){this.d=H.A(a,H.t(this,0))},
$ib_:1}
P.fT.prototype={
$2:function(a,b){this.a.k(0,H.A(a,this.b),H.A(b,this.c))},
$S:6}
P.fU.prototype={$ih:1,$ib:1}
P.v.prototype={
gS:function(a){return new H.dv(a,this.gl(a),[H.ca(this,a,"v",0)])},
G:function(a,b){return this.j(a,b)},
iI:function(a,b){var u,t=this,s=H.e([],[H.ca(t,a,"v",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.k(s,u,t.j(a,u))
return s},
iH:function(a){return this.iI(a,!0)},
hY:function(a,b,c,d){var u
H.A(d,H.ca(this,a,"v",0))
P.bD(b,c,this.gl(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.kf(a,"[","]")}}
P.fX.prototype={}
P.fY.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.l(a)
t.a=u+": "
t.a+=H.l(b)},
$S:6}
P.ag.prototype={
F:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.ca(s,a,"ag",0),H.ca(s,a,"ag",1)]})
for(u=J.bJ(s.gam(a));u.v();){t=u.gJ(u)
b.$2(t,s.j(a,t))}},
gl:function(a){return J.aI(this.gam(a))},
i:function(a){return P.kk(a)},
$iw:1}
P.jt.prototype={
k:function(a,b,c){H.A(b,H.t(this,0))
H.A(c,H.t(this,1))
throw H.c(P.E("Cannot modify unmodifiable map"))}}
P.fZ.prototype={
j:function(a,b){return J.d6(this.a,b)},
k:function(a,b,c){J.k6(this.a,H.A(b,H.t(this,0)),H.A(c,H.t(this,1)))},
F:function(a,b){J.kN(this.a,H.n(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gl:function(a){return J.aI(this.a)},
i:function(a){return J.as(this.a)},
$iw:1}
P.dY.prototype={}
P.jk.prototype={
i:function(a){return P.kf(this,"{","}")},
G:function(a,b){var u,t,s,r=this
P.la(b,"index")
for(u=P.lt(r,r.r,H.t(r,0)),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.c(P.U(b,r,"index",null,t))},
$ih:1,
$ild:1}
P.ei.prototype={}
P.eL.prototype={}
P.f8.prototype={
ib:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bD(a0,a1,b.length)
u=$.mg()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.D(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jT(C.b.D(b,n))
j=H.jT(C.b.D(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.b.R("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.al("")
g=r.a+=C.b.t(b,s,t)
r.a=g+H.dG(m)
s=n
continue}}throw H.c(P.a2("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.t(b,s,a1)
f=g.length
if(q>=0)P.kP(b,p,a1,q,o,f)
else{e=C.d.b4(f-1,4)+1
if(e===1)throw H.c(P.a2(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aR(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.kP(b,p,a1,q,o,d)
else{e=C.d.b4(d,4)
if(e===1)throw H.c(P.a2(c,b,a1))
if(e>1)b=C.b.aR(b,a1,a1,e===2?"==":"=")}return b},
$abN:function(){return[[P.b,P.k],P.i]}}
P.f9.prototype={
$abP:function(){return[[P.b,P.k],P.i]}}
P.bN.prototype={}
P.bP.prototype={}
P.fx.prototype={
$abN:function(){return[P.i,[P.b,P.k]]}}
P.iy.prototype={
ghX:function(){return C.H}}
P.iA.prototype={
bT:function(a){var u,t,s=P.bD(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jA(u)
if(t.eU(a,0,s)!==s)t.d2(J.mm(a,s-1),0)
return new Uint8Array(u.subarray(0,H.nF(0,t.b,u.length)))},
$abP:function(){return[P.i,[P.b,P.k]]}}
P.jA.prototype={
d2:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.d(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.d(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.d(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.d(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.d(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.d(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.d(s,r)
s[r]=128|a&63
return!1}},
eU:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.R(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.D(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.d2(r,C.b.D(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.d(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.d(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.d(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.d(u,q)
u[q]=128|r&63}}return s}}
P.iz.prototype={
bT:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[P.k],"$ab")
u=P.nd(!1,a,0,null)
if(u!=null)return u
t=P.bD(0,null,J.aI(a))
s=P.lF(a,0,t)
if(s>0){r=P.cH(a,0,s)
if(s===t)return r
q=new P.al(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.al("")
n=new P.jz(!1,q)
n.c=o
n.hJ(a,p,t)
if(n.e>0){H.z(P.a2("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.dG(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abP:function(){return[[P.b,P.k],P.i]}}
P.jz.prototype={
hJ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.m(a,"$ib",[P.k],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.d3(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.ae()
if((o&192)!==128){n=P.a2(h+C.d.b2(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.d(C.t,n)
if(u<=C.t[n]){n=P.a2("Overlong encoding of 0x"+C.d.b2(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a2("Character outside valid Unicode range: 0x"+C.d.b2(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.dG(u)
i.c=!1}for(n=p<c;n;){m=P.lF(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cH(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.N()
if(o<0){j=P.a2("Negative UTF-8 code unit: -0x"+C.d.b2(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a2(h+C.d.b2(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.X.prototype={}
P.at.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.at&&this.a===b.a&&!0},
gE:function(a){var u=this.a
return(u^C.d.aK(u,30))&1073741823},
i:function(a){var u=this,t=P.mv(H.mX(u)),s=P.dg(H.mV(u)),r=P.dg(H.mR(u)),q=P.dg(H.mS(u)),p=P.dg(H.mU(u)),o=P.dg(H.mW(u)),n=P.mw(H.mT(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.x.prototype={}
P.bs.prototype={
a2:function(a,b){return C.d.a2(this.a,b.giN())},
n:function(a,b){if(b==null)return!1
return b instanceof P.bs&&this.a===b.a},
gE:function(a){return C.d.gE(this.a)},
i:function(a){var u,t,s,r=new P.fv(),q=this.a
if(q<0)return"-"+new P.bs(0-q).i(0)
u=r.$1(C.d.a_(q,6e7)%60)
t=r.$1(C.d.a_(q,1e6)%60)
s=new P.fu().$1(q%1e6)
return""+C.d.a_(q,36e8)+":"+H.l(u)+":"+H.l(t)+"."+H.l(s)}}
P.fu.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:17}
P.fv.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:17}
P.bt.prototype={}
P.f2.prototype={
i:function(a){return"Assertion failed"}}
P.dD.prototype={
i:function(a){return"Throw of null."}}
P.aW.prototype={
gbu:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbt:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbu()+o+u
if(!q.a)return t
s=q.gbt()
r=P.dl(q.b)
return t+s+": "+r}}
P.bX.prototype={
gbu:function(){return"RangeError"},
gbt:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.l(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.l(s)
else if(t>s)u=": Not in range "+H.l(s)+".."+H.l(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.l(s)}return u}}
P.fK.prototype={
gbu:function(){return"RangeError"},
gbt:function(){var u,t=H.a0(this.b)
if(typeof t!=="number")return t.N()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.l(u)},
gl:function(a){return this.f}}
P.ir.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.io.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hR.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fh.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dl(u)+"."}}
P.ht.prototype={
i:function(a){return"Out of Memory"},
$ibt:1}
P.dO.prototype={
i:function(a){return"Stack Overflow"},
$ibt:1}
P.fp.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eb.prototype={
i:function(a){return"Exception: "+this.a}}
P.fH.prototype={
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
for(q=g;q<o;++q){p=C.b.R(f,q)
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
return h+l+j+k+"\n"+C.b.m(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.l(g)+")"):h}}
P.k.prototype={}
P.h.prototype={
gl:function(a){var u,t=this.gS(this)
for(u=0;t.v();)++u
return u},
G:function(a,b){var u,t,s
P.la(b,"index")
for(u=this.gS(this),t=0;u.v();){s=u.gJ(u)
if(b===t)return s;++t}throw H.c(P.U(b,this,"index",null,t))},
i:function(a){return P.mB(this,"(",")")}}
P.b_.prototype={}
P.b.prototype={$ih:1}
P.w.prototype={}
P.J.prototype={
gE:function(a){return P.O.prototype.gE.call(this,this)},
i:function(a){return"null"}}
P.a7.prototype={}
P.O.prototype={constructor:P.O,$iO:1,
n:function(a,b){return this===b},
gE:function(a){return H.cD(this)},
i:function(a){return"Instance of '"+H.bW(this)+"'"},
toString:function(){return this.i(this)}}
P.aq.prototype={}
P.i.prototype={$il4:1}
P.al.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ioM:1}
P.iw.prototype={
$2:function(a,b){var u,t,s,r=P.i
H.m(a,"$iw",[r,r],"$aw")
H.L(b)
u=J.kG(b).dA(b,"=")
if(u===-1){if(b!=="")J.k6(a,P.kx(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.t(b,0,u)
s=C.b.a5(b,u+1)
r=this.a
J.k6(a,P.kx(t,0,t.length,r,!0),P.kx(s,0,s.length,r,!0))}return a},
$S:41}
P.it.prototype={
$2:function(a,b){throw H.c(P.a2("Illegal IPv4 address, "+a,this.a,b))},
$S:40}
P.iu.prototype={
$2:function(a,b){throw H.c(P.a2("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:39}
P.iv.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eY(C.b.t(this.b,a,b),null,16)
if(typeof u!=="number")return u.N()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:37}
P.c3.prototype={
ge1:function(){return this.b},
gc1:function(a){var u=this.c
if(u==null)return""
if(C.b.a3(u,"["))return C.b.t(u,1,u.length-1)
return u},
gbh:function(a){var u=this.d
if(u==null)return P.lu(this.a)
return u},
gca:function(a){var u=this.f
return u==null?"":u},
gdt:function(){var u=this.r
return u==null?"":u},
dQ:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.m(b,"$iw",[P.i,null],"$aw")
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
n=P.kw(null,0,0,b)
return new P.c3(u,s,q,r,p,n,m.r)},
gbi:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.i
s.sh2(new P.dY(P.lm(u==null?"":u),[t,t]))}return s.Q},
gdu:function(){return this.c!=null},
gdz:function(){return this.f!=null},
gdv:function(){return this.r!=null},
i:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.l(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.l(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.l(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.S(b).$ikp)if(s.a==b.gbl())if(s.c!=null===b.gdu())if(s.b==b.ge1())if(s.gc1(s)==b.gc1(b))if(s.gbh(s)==b.gbh(b))if(s.e===b.gdL(b)){u=s.f
t=u==null
if(!t===b.gdz()){if(t)u=""
if(u===b.gca(b)){u=s.r
t=u==null
if(!t===b.gdv()){if(t)u=""
u=u===b.gdt()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gE:function(a){var u=this.z
return u==null?this.z=C.b.gE(this.i(0)):u},
sh2:function(a){var u=P.i
this.Q=H.m(a,"$iw",[u,u],"$aw")},
$ikp:1,
gbl:function(){return this.a},
gdL:function(a){return this.e}}
P.ju.prototype={
$1:function(a){throw H.c(P.a2("Invalid port",this.a,this.b+1))},
$S:35}
P.jv.prototype={
$1:function(a){return P.jy(C.P,a,C.h,!1)},
$S:34}
P.jx.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.l(P.jy(C.m,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.l(P.jy(C.m,b,C.h,!0))}},
$S:26}
P.jw.prototype={
$2:function(a,b){var u,t
H.L(a)
if(b==null||typeof b==="string")this.a.$2(a,H.L(b))
else for(u=J.bJ(H.lR(b,"$ih")),t=this.a;u.v();)t.$2(a,H.L(u.gJ(u)))},
$S:33}
P.is.prototype={
ge0:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.b.dB(u,"?",o)
s=u.length
if(t>=0){r=P.d_(u,t+1,s,C.k,!1)
s=t}else r=p
return q.c=new P.iY("data",p,p,p,P.d_(u,o,s,C.v,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jF.prototype={
$1:function(a){return new Uint8Array(96)},
$S:32}
P.jE.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.mn(u,0,96,b)
return u},
$S:31}
P.jG.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.D(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.jH.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.D(b,0),t=C.b.D(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.jl.prototype={
gdu:function(){return this.c>0},
gdw:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.u()
t=this.e
if(typeof t!=="number")return H.r(t)
t=u+1<t
u=t}else u=!1
return u},
gdz:function(){var u=this.f
if(typeof u!=="number")return u.N()
return u<this.r},
gdv:function(){return this.r<this.a.length},
gcM:function(){return this.b===4&&C.b.a3(this.a,"http")},
gcN:function(){return this.b===5&&C.b.a3(this.a,"https")},
gbl:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcM())q=t.x="http"
else if(t.gcN()){t.x="https"
q="https"}else if(q===4&&C.b.a3(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a3(t.a,r)){t.x=r
q=r}else{q=C.b.t(t.a,0,q)
t.x=q}return q},
ge1:function(){var u=this.c,t=this.b+3
return u>t?C.b.t(this.a,t,u-1):""},
gc1:function(a){var u=this.c
return u>0?C.b.t(this.a,u,this.d):""},
gbh:function(a){var u,t=this
if(t.gdw()){u=t.d
if(typeof u!=="number")return u.u()
return P.eY(C.b.t(t.a,u+1,t.e),null,null)}if(t.gcM())return 80
if(t.gcN())return 443
return 0},
gdL:function(a){return C.b.t(this.a,this.e,this.f)},
gca:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.N()
return u<t?C.b.t(this.a,u+1,t):""},
gdt:function(){var u=this.r,t=this.a
return u<t.length?C.b.a5(t,u+1):""},
gbi:function(){var u=this,t=u.f
if(typeof t!=="number")return t.N()
if(t>=u.r)return C.Q
t=P.i
return new P.dY(P.lm(u.gca(u)),[t,t])},
dQ:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.m(b,"$iw",[P.i,null],"$aw")
u=k.gbl()
t=u==="file"
s=k.c
r=s>0?C.b.t(k.a,k.b+3,s):""
q=k.gdw()?k.gbh(k):j
s=k.c
if(s>0)p=C.b.t(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.t(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a3(o,"/"))o="/"+o
m=P.kw(j,0,0,b)
n=k.r
l=n<s.length?C.b.a5(s,n+1):j
return new P.c3(u,r,p,q,o,m,l)},
gE:function(a){var u=this.y
return u==null?this.y=C.b.gE(this.a):u},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.S(b).$ikp&&this.a===b.i(0)},
i:function(a){return this.a},
$ikp:1}
P.iY.prototype={}
W.q.prototype={}
W.eZ.prototype={
gl:function(a){return a.length}}
W.f0.prototype={
i:function(a){return String(a)}}
W.f1.prototype={
i:function(a){return String(a)}}
W.bL.prototype={$ibL:1}
W.bM.prototype={
ci:function(a,b,c){if(c!=null)return a.getContext(b,P.oc(c))
return a.getContext(b)},
e3:function(a,b){return this.ci(a,b,null)},
$ibM:1}
W.ch.prototype={$ich:1}
W.bp.prototype={
gl:function(a){return a.length}}
W.cl.prototype={$icl:1}
W.fl.prototype={
gl:function(a){return a.length}}
W.R.prototype={$iR:1}
W.cm.prototype={
gl:function(a){return a.length}}
W.fm.prototype={}
W.aY.prototype={}
W.aZ.prototype={}
W.fn.prototype={
gl:function(a){return a.length}}
W.fo.prototype={
gl:function(a){return a.length}}
W.fq.prototype={
gl:function(a){return a.length}}
W.dh.prototype={$idh:1}
W.fr.prototype={
i:function(a){return String(a)}}
W.di.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.m(c,"$iaj",[P.a7],"$aaj")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[[P.aj,P.a7]]},
$av:function(){return[[P.aj,P.a7]]},
$ih:1,
$ah:function(){return[[P.aj,P.a7]]},
$ib:1,
$ab:function(){return[[P.aj,P.a7]]},
$aD:function(){return[[P.aj,P.a7]]}}
W.dj.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaC(a))+" x "+H.l(this.gax(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.S(b)
if(!u.$iaj)return!1
return a.left===u.gbg(b)&&a.top===u.gbj(b)&&this.gaC(a)===u.gaC(b)&&this.gax(a)===u.gax(b)},
gE:function(a){return W.ls(C.e.gE(a.left),C.e.gE(a.top),C.e.gE(this.gaC(a)),C.e.gE(this.gax(a)))},
gd7:function(a){return a.bottom},
gax:function(a){return a.height},
gbg:function(a){return a.left},
gcb:function(a){return a.right},
gbj:function(a){return a.top},
gaC:function(a){return a.width},
$iaj:1,
$aaj:function(){return[P.a7]}}
W.fs.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.L(c)
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[P.i]},
$av:function(){return[P.i]},
$ih:1,
$ah:function(){return[P.i]},
$ib:1,
$ab:function(){return[P.i]},
$aD:function(){return[P.i]}}
W.ft.prototype={
gl:function(a){return a.length}}
W.iW.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.f(u[b],"$ia1")},
k:function(a,b,c){var u
H.f(c,"$ia1")
u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var u=this.iH(this)
return new J.ap(u,u.length,[H.t(u,0)])},
$av:function(){return[W.a1]},
$ah:function(){return[W.a1]},
$ab:function(){return[W.a1]}}
W.a1.prototype={
gbS:function(a){return new W.iW(a,a.children)},
gd8:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.N()
if(s<0)s=-s*0
if(typeof r!=="number")return r.N()
if(r<0)r=-r*0
return new P.aj(u,t,s,r,[P.a7])},
i:function(a){return a.localName},
$ia1:1}
W.o.prototype={$io:1}
W.j.prototype={
hz:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.ey(a,b,c,!1)},
ey:function(a,b,c,d){return a.addEventListener(b,H.c7(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ij:1}
W.ax.prototype={$iax:1}
W.cn.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iax")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.ax]},
$av:function(){return[W.ax]},
$ih:1,
$ah:function(){return[W.ax]},
$ib:1,
$ab:function(){return[W.ax]},
$icn:1,
$aD:function(){return[W.ax]}}
W.fC.prototype={
gl:function(a){return a.length}}
W.fG.prototype={
gl:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.fJ.prototype={
gl:function(a){return a.length}}
W.bS.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.G]},
$av:function(){return[W.G]},
$ih:1,
$ah:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ibS:1,
$aD:function(){return[W.G]}}
W.bc.prototype={$ibc:1,
gd9:function(a){return a.data}}
W.cq.prototype={$icq:1}
W.cr.prototype={$icr:1,$ici:1}
W.ci.prototype={$ia1:1,$ij:1,$iG:1}
W.b1.prototype={$ib1:1}
W.fV.prototype={
i:function(a){return String(a)}}
W.he.prototype={
gl:function(a){return a.length}}
W.cv.prototype={$icv:1}
W.hf.prototype={
j:function(a,b){return P.bj(a.get(H.L(b)))},
F:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bj(t.value[1]))}},
gam:function(a){var u=H.e([],[P.i])
this.F(a,new W.hg(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.c(P.E("Not supported"))},
$aag:function(){return[P.i,null]},
$iw:1,
$aw:function(){return[P.i,null]}}
W.hg.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hh.prototype={
j:function(a,b){return P.bj(a.get(H.L(b)))},
F:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bj(t.value[1]))}},
gam:function(a){var u=H.e([],[P.i])
this.F(a,new W.hi(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.c(P.E("Not supported"))},
$aag:function(){return[P.i,null]},
$iw:1,
$aw:function(){return[P.i,null]}}
W.hi.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.aL.prototype={$iaL:1}
W.hj.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaL")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aL]},
$av:function(){return[W.aL]},
$ih:1,
$ah:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aD:function(){return[W.aL]}}
W.ab.prototype={$iab:1}
W.iV.prototype={
k:function(a,b,c){var u,t
H.f(c,"$iG")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gS:function(a){var u=this.a.childNodes
return new W.dn(u,u.length,[H.ca(C.R,u,"D",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$av:function(){return[W.G]},
$ah:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
iz:function(a,b){var u,t
try{u=a.parentNode
J.mk(u,b,a)}catch(t){H.aH(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.e8(a):u},
h6:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.cA.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.G]},
$av:function(){return[W.G]},
$ih:1,
$ah:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aD:function(){return[W.G]}}
W.aM.prototype={$iaM:1,
gl:function(a){return a.length}}
W.hv.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaM")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aM]},
$av:function(){return[W.aM]},
$ih:1,
$ah:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aD:function(){return[W.aM]}}
W.hD.prototype={
j:function(a,b){return P.bj(a.get(H.L(b)))},
F:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bj(t.value[1]))}},
gam:function(a){var u=H.e([],[P.i])
this.F(a,new W.hE(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.c(P.E("Not supported"))},
$aag:function(){return[P.i,null]},
$iw:1,
$aw:function(){return[P.i,null]}}
W.hE.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hG.prototype={
gl:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.hO.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaN")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aN]},
$av:function(){return[W.aN]},
$ih:1,
$ah:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aD:function(){return[W.aN]}}
W.aO.prototype={$iaO:1}
W.hP.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaO")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aO]},
$av:function(){return[W.aO]},
$ih:1,
$ah:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aD:function(){return[W.aO]}}
W.aP.prototype={$iaP:1,
gl:function(a){return a.length}}
W.hT.prototype={
j:function(a,b){return a.getItem(H.L(b))},
k:function(a,b,c){a.setItem(b,c)},
F:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,P.i]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gam:function(a){var u=H.e([],[P.i])
this.F(a,new W.hU(u))
return u},
gl:function(a){return a.length},
$aag:function(){return[P.i,P.i]},
$iw:1,
$aw:function(){return[P.i,P.i]}}
W.hU.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:26}
W.aA.prototype={$iaA:1}
W.bh.prototype={$ibh:1}
W.aQ.prototype={$iaQ:1}
W.aB.prototype={$iaB:1}
W.i0.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaB")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aB]},
$av:function(){return[W.aB]},
$ih:1,
$ah:function(){return[W.aB]},
$ib:1,
$ab:function(){return[W.aB]},
$aD:function(){return[W.aB]}}
W.i1.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaQ")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aQ]},
$av:function(){return[W.aQ]},
$ih:1,
$ah:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aD:function(){return[W.aQ]}}
W.i6.prototype={
gl:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.aS.prototype={$iaS:1}
W.i9.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaR")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aR]},
$av:function(){return[W.aR]},
$ih:1,
$ah:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aD:function(){return[W.aR]}}
W.ia.prototype={
gl:function(a){return a.length}}
W.bE.prototype={}
W.ix.prototype={
i:function(a){return String(a)}}
W.iM.prototype={
gl:function(a){return a.length}}
W.b9.prototype={
ghO:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.E("deltaY is not supported"))},
ghN:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.E("deltaX is not supported"))},
$ib9:1}
W.cO.prototype={
h7:function(a,b){return a.requestAnimationFrame(H.c7(H.n(b,{func:1,ret:-1,args:[P.a7]}),1))},
eO:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iX.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iR")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.R]},
$av:function(){return[W.R]},
$ih:1,
$ah:function(){return[W.R]},
$ib:1,
$ab:function(){return[W.R]},
$aD:function(){return[W.R]}}
W.e6.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.S(b)
if(!u.$iaj)return!1
return a.left===u.gbg(b)&&a.top===u.gbj(b)&&a.width===u.gaC(b)&&a.height===u.gax(b)},
gE:function(a){return W.ls(C.e.gE(a.left),C.e.gE(a.top),C.e.gE(a.width),C.e.gE(a.height))},
gax:function(a){return a.height},
gaC:function(a){return a.width}}
W.ja.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaJ")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aJ]},
$av:function(){return[W.aJ]},
$ih:1,
$ah:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$aD:function(){return[W.aJ]}}
W.en.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.G]},
$av:function(){return[W.G]},
$ih:1,
$ah:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aD:function(){return[W.G]}}
W.jm.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaP")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aP]},
$av:function(){return[W.aP]},
$ih:1,
$ah:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aD:function(){return[W.aP]}}
W.jq.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaA")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aA]},
$av:function(){return[W.aA]},
$ih:1,
$ah:function(){return[W.aA]},
$ib:1,
$ab:function(){return[W.aA]},
$aD:function(){return[W.aA]}}
W.iZ.prototype={}
W.ku.prototype={}
W.j_.prototype={}
W.j0.prototype={
$1:function(a){return this.a.$1(H.f(a,"$io"))},
$S:29}
W.D.prototype={
gS:function(a){return new W.dn(a,this.gl(a),[H.ca(this,a,"D",0)])}}
W.dn.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scL(J.d6(u.a,t))
u.c=t
return!0}u.scL(null)
u.c=s
return!1},
gJ:function(a){return this.d},
scL:function(a){this.d=H.A(a,H.t(this,0))},
$ib_:1}
W.e5.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.em.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.cV.prototype={}
W.cW.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.eA.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.cX.prototype={}
W.cY.prototype={}
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
P.jn.prototype={
ds:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cf:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.S(a)
if(!!u.$iat)return new Date(a.a)
if(!!u.$in0)throw H.c(P.ip("structured clone of RegExp"))
if(!!u.$iax)return a
if(!!u.$ibL)return a
if(!!u.$icn)return a
if(!!u.$ibc)return a
if(!!u.$icx||!!u.$ibA||!!u.$icv)return a
if(!!u.$iw){t=q.ds(a)
s=q.b
if(t>=s.length)return H.d(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.F(a,new P.jp(p,q))
return p.a}if(!!u.$ib){t=q.ds(a)
p=q.b
if(t>=p.length)return H.d(p,t)
r=p[t]
if(r!=null)return r
return q.hL(a,t)}throw H.c(P.ip("structured clone of other type"))},
hL:function(a,b){var u,t=J.d3(a),s=t.gl(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.cf(t.j(a,u)))
return r}}
P.jp.prototype={
$2:function(a,b){this.a.a[a]=this.b.cf(b)},
$S:6}
P.eK.prototype={$ibc:1,
gd9:function(a){return this.a}}
P.jN.prototype={
$2:function(a,b){this.a[a]=b},
$S:6}
P.jo.prototype={}
P.fD.prototype={
gb8:function(){var u=this.b,t=H.av(u,"v",0),s=W.a1
return new H.h_(new H.iO(u,H.n(new P.fE(),{func:1,ret:P.X,args:[t]}),[t]),H.n(new P.fF(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.f(c,"$ia1")
u=this.gb8()
J.mo(u.b.$1(J.k8(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aI(this.gb8().a)},
j:function(a,b){var u=this.gb8()
return u.b.$1(J.k8(u.a,b))},
gS:function(a){var u=P.kX(this.gb8(),!1,W.a1)
return new J.ap(u,u.length,[H.t(u,0)])},
$av:function(){return[W.a1]},
$ah:function(){return[W.a1]},
$ab:function(){return[W.a1]}}
P.fE.prototype={
$1:function(a){return!!J.S(H.f(a,"$iG")).$ia1},
$S:27}
P.fF.prototype={
$1:function(a){return H.u(H.f(a,"$iG"),"$ia1")},
$S:53}
P.jf.prototype={
gcb:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.r(t)
return H.A(u+t,H.t(this,0))},
gd7:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.r(t)
return H.A(u+t,H.t(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.l(u.a)+", "+H.l(u.b)+") "+H.l(u.c)+" x "+H.l(u.d)},
n:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.S(b)
if(!!u.$iaj){t=p.a
if(t==u.gbg(b)){s=p.b
if(s==u.gbj(b)){r=p.c
if(typeof t!=="number")return t.u()
if(typeof r!=="number")return H.r(r)
q=H.t(p,0)
if(H.A(t+r,q)===u.gcb(b)){t=p.d
if(typeof s!=="number")return s.u()
if(typeof t!=="number")return H.r(t)
u=H.A(s+t,q)===u.gd7(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gE:function(a){var u,t=this,s=t.a,r=J.d7(s),q=t.b,p=J.d7(q),o=t.c
if(typeof s!=="number")return s.u()
if(typeof o!=="number")return H.r(o)
u=H.t(t,0)
o=C.d.gE(H.A(s+o,u))
s=t.d
if(typeof q!=="number")return q.u()
if(typeof s!=="number")return H.r(s)
u=C.d.gE(H.A(q+s,u))
return P.np(P.jc(P.jc(P.jc(P.jc(0,r),p),o),u))}}
P.aj.prototype={
gbg:function(a){return this.a},
gbj:function(a){return this.b},
gaC:function(a){return this.c},
gax:function(a){return this.d}}
P.b2.prototype={$ib2:1}
P.fP.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib2")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){return this.j(a,b)},
$av:function(){return[P.b2]},
$ih:1,
$ah:function(){return[P.b2]},
$ib:1,
$ab:function(){return[P.b2]},
$aD:function(){return[P.b2]}}
P.b5.prototype={$ib5:1}
P.hr.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib5")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){return this.j(a,b)},
$av:function(){return[P.b5]},
$ih:1,
$ah:function(){return[P.b5]},
$ib:1,
$ab:function(){return[P.b5]},
$aD:function(){return[P.b5]}}
P.hx.prototype={
gl:function(a){return a.length}}
P.hZ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.L(c)
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){return this.j(a,b)},
$av:function(){return[P.i]},
$ih:1,
$ah:function(){return[P.i]},
$ib:1,
$ab:function(){return[P.i]},
$aD:function(){return[P.i]}}
P.p.prototype={
gbS:function(a){return new P.fD(a,new W.iV(a))}}
P.b7.prototype={$ib7:1}
P.ib.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib7")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){return this.j(a,b)},
$av:function(){return[P.b7]},
$ih:1,
$ah:function(){return[P.b7]},
$ib:1,
$ab:function(){return[P.b7]},
$aD:function(){return[P.b7]}}
P.eg.prototype={}
P.eh.prototype={}
P.eq.prototype={}
P.er.prototype={}
P.eB.prototype={}
P.eC.prototype={}
P.eI.prototype={}
P.eJ.prototype={}
P.P.prototype={$ih:1,
$ah:function(){return[P.k]},
$ib:1,
$ab:function(){return[P.k]},
$ina:1}
P.f4.prototype={
gl:function(a){return a.length}}
P.f5.prototype={
j:function(a,b){return P.bj(a.get(H.L(b)))},
F:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bj(t.value[1]))}},
gam:function(a){var u=H.e([],[P.i])
this.F(a,new P.f6(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.c(P.E("Not supported"))},
$aag:function(){return[P.i,null]},
$iw:1,
$aw:function(){return[P.i,null]}}
P.f6.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
P.f7.prototype={
gl:function(a){return a.length}}
P.bK.prototype={}
P.hs.prototype={
gl:function(a){return a.length}}
P.e4.prototype={}
P.da.prototype={$ida:1}
P.dH.prototype={$idH:1}
P.bY.prototype={
iE:function(a,b,c,d,e,f,g){var u,t=J.S(g)
if(!!t.$ibc)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.od(g))
return}if(!!t.$icq)t=!0
else t=!1
if(t){this.hm(a,b,c,d,e,f,g)
return}throw H.c(P.d8("Incorrect number or type of arguments"))},
hm:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
Z:function(a,b,c){return a.uniform1f(b,c)},
bk:function(a,b,c){return a.uniform1i(b,c)},
U:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dY:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
dZ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
e_:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibY:1}
P.dK.prototype={$idK:1}
P.dQ.prototype={$idQ:1}
P.dW.prototype={$idW:1}
P.hQ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.U(b,a,null,null,null))
return P.bj(a.item(b))},
k:function(a,b,c){H.f(c,"$iw")
throw H.c(P.E("Cannot assign element of immutable List."))},
G:function(a,b){return this.j(a,b)},
$av:function(){return[[P.w,,,]]},
$ih:1,
$ah:function(){return[[P.w,,,]]},
$ib:1,
$ab:function(){return[[P.w,,,]]},
$aD:function(){return[[P.w,,,]]}}
P.ex.prototype={}
P.ey.prototype={}
O.Y.prototype={
b6:function(a){var u=this
u.sf_(H.e([],[a]))
u.scS(null)
u.scP(null)
u.scT(null)},
bm:function(a,b,c){var u=this,t=H.av(u,"Y",0)
H.n(b,{func:1,ret:P.X,args:[[P.h,t]]})
t={func:1,ret:-1,args:[P.k,[P.h,t]]}
H.n(a,t)
H.n(c,t)
u.scS(b)
u.scP(a)
u.scT(c)},
b5:function(a,b){return this.bm(a,null,b)},
bE:function(a){var u
H.m(a,"$ih",[H.av(this,"Y",0)],"$ah")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cn:function(a,b){var u
H.m(b,"$ih",[H.av(this,"Y",0)],"$ah")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.ap(u,u.length,[H.t(u,0)])},
G:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.av(s,"Y",0)
H.A(b,r)
r=[r]
if(H.F(s.bE(H.e([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.cn(t,H.e([b],r))}},
bM:function(a,b){var u,t,s=this
H.m(b,"$ih",[H.av(s,"Y",0)],"$ah")
if(H.F(s.bE(b))){u=s.a
t=u.length
C.a.bM(u,b)
s.cn(t,b)}},
sf_:function(a){this.a=H.m(a,"$ib",[H.av(this,"Y",0)],"$ab")},
scS:function(a){this.b=H.n(a,{func:1,ret:P.X,args:[[P.h,H.av(this,"Y",0)]]})},
scP:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.k,[P.h,H.av(this,"Y",0)]]})},
scT:function(a){H.n(a,{func:1,ret:-1,args:[P.k,[P.h,H.av(this,"Y",0)]]})},
$ih:1}
O.cu.prototype={
gl:function(a){return this.a.length},
gp:function(){var u=this.b
return u==null?this.b=D.Q():u},
aD:function(){var u=this.b
if(u!=null)u.B(null)},
gV:function(a){var u=this.a
if(u.length>0)return C.a.gay(u)
else return V.dz()},
dO:function(a){var u=this.a
if(a==null)C.a.h(u,V.dz())
else C.a.h(u,a)
this.aD()},
c9:function(){var u=this.a
if(u.length>0){u.pop()
this.aD()}},
sbx:function(a){this.a=H.m(a,"$ib",[V.aa],"$ab")}}
E.fa.prototype={}
E.ao.prototype={
cw:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.ap(u,u.length,[H.t(u,0)]);u.v();){t=u.d
if(t.f==null)t.cw()}},
sbn:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gp().T(0,s.gdH())
u=s.c
if(u!=null)u.gp().h(0,s.gdH())
t=new D.H("shape",r,s.c,[F.dL])
t.b=!0
s.ah(t)}},
scd:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gp().T(0,s.gdJ())
u=s.f
s.f=a
if(a!=null)a.gp().h(0,s.gdJ())
s.cw()
t=new D.H("technique",u,s.f,[O.bZ])
t.b=!0
s.ah(t)}},
saP:function(a){var u,t,s=this
if(!J.T(s.r,a)){u=s.r
if(u!=null)u.gp().T(0,s.gdF())
if(a!=null)a.gp().h(0,s.gdF())
s.r=a
t=new D.H("mover",u,a,[U.a5])
t.b=!0
s.ah(t)}},
ac:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aB(0,b,s):null
if(!J.T(q,s.x)){u=s.x
s.x=q
t=new D.H("matrix",u,q,[V.aa])
t.b=!0
s.ah(t)}r=s.f
if(r!=null)r.ac(0,b)
for(r=s.y.a,r=new J.ap(r,r.length,[H.t(r,0)]);r.v();)r.d.ac(0,b)},
aQ:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gV(s))
else C.a.h(s.a,r.m(0,s.gV(s)))
s.aD()
a.dP(t.f)
s=a.dy
u=(s&&C.a).gay(s)
if(u!=null&&t.d!=null)u.iy(a,t)
for(s=t.y.a,s=new J.ap(s,s.length,[H.t(s,0)]);s.v();)s.d.aQ(a)
a.dN()
a.dx.c9()},
gp:function(){var u=this.z
return u==null?this.z=D.Q():u},
ah:function(a){var u=this.z
if(u!=null)u.B(a)},
a0:function(){return this.ah(null)},
dI:function(a){H.f(a,"$iB")
this.e=null
this.ah(a)},
ik:function(){return this.dI(null)},
dK:function(a){this.ah(H.f(a,"$iB"))},
il:function(){return this.dK(null)},
dG:function(a){this.ah(H.f(a,"$iB"))},
ij:function(){return this.dG(null)},
dE:function(a){this.ah(H.f(a,"$iB"))},
ig:function(){return this.dE(null)},
ie:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ih",[E.ao],"$ah")
for(u=b.length,t=this.gdD(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.y)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bQ()
o.saf(null)
o.saV(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.saf(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a0()},
ii:function(a,b){var u,t
H.m(b,"$ih",[E.ao],"$ah")
for(u=b.gS(b),t=this.gdD();u.v();)u.gJ(u).gp().T(0,t)
this.a0()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seh:function(a,b){this.y=H.m(b,"$iY",[E.ao],"$aY")},
$icw:1}
E.hz.prototype={
ed:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.at(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cu()
t=[V.aa]
u.sbx(H.e([],t))
u.b=null
u.gp().h(0,new E.hA(s))
s.cy=u
u=new O.cu()
u.sbx(H.e([],t))
u.b=null
u.gp().h(0,new E.hB(s))
s.db=u
u=new O.cu()
u.sbx(H.e([],t))
u.b=null
u.gp().h(0,new E.hC(s))
s.dx=u
s.shl(H.e([],[O.bZ]))
u=s.dy;(u&&C.a).h(u,null)
s.shg(new H.a_([P.i,A.cE]))},
giw:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gV(s)
u=t.db
u=t.z=s.m(0,u.gV(u))
s=u}return s},
dP:function(a){var u=this.dy,t=a==null?(u&&C.a).gay(u):a;(u&&C.a).h(u,t)},
dN:function(){var u=this.dy
if(u.length>1)u.pop()},
shl:function(a){this.dy=H.m(a,"$ib",[O.bZ],"$ab")},
shg:function(a){this.fr=H.m(a,"$iw",[P.i,A.cE],"$aw")}}
E.hA.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.ch=u.z=null},
$S:8}
E.hB.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:8}
E.hC.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.cx=u.ch=null},
$S:8}
E.dS.prototype={
cq:function(a){H.f(a,"$iB")
this.dR()},
cp:function(){return this.cq(null)},
gi0:function(){var u,t=this,s=Date.now(),r=C.d.a_(P.kT(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.at(s,!1)
return u/r},
cW:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.m()
if(typeof r!=="number")return H.r(r)
u=C.e.c0(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.m()
t=C.e.c0(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lh(C.n,s.giA())}},
dR:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.i5(this),{func:1,ret:-1,args:[P.a7]})
C.y.eO(u)
C.y.h7(u,W.lI(t,P.a7))}},
ix:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.cW()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.at(r,!1)
s.y=P.kT(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aD()
r=s.db
C.a.sl(r.a,0)
r.aD()
r=s.dx
C.a.sl(r.a,0)
r.aD()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aQ(p.e)}}catch(q){u=H.aH(q)
t=H.cb(q)
P.kK("Error: "+H.l(u))
P.kK("Stack: "+H.l(t))
throw H.c(u)}}}
E.i5.prototype={
$1:function(a){var u
H.lT(a)
u=this.a
if(u.ch){u.ch=!1
u.ix()}},
$S:28}
Z.e2.prototype={$ioE:1}
Z.db.prototype={
bN:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aH(s)
t=P.C('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.l(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.l(u.e)+"]"}}
Z.iN.prototype={$ioF:1}
Z.dc.prototype={
aM:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bN:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bN(a)},
iK:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aQ:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.i],p=H.e([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)C.a.h(p,u[s].i(0))
r=H.e([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.as(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.q(p,", ")+"\nAttrs:   "+C.a.q(r,", ")},
seW:function(a){this.b=H.m(a,"$ib",[Z.bu],"$ab")},
$ioN:1}
Z.bu.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bW(this.c)+"'")+"]"}}
Z.bi.prototype={
gcj:function(a){var u=this.a,t=(u&$.bn().a)!==0?3:0
if((u&$.bm().a)!==0)t+=3
if((u&$.bl().a)!==0)t+=3
if((u&$.bo().a)!==0)t+=2
if((u&$.bI().a)!==0)t+=3
if((u&$.d4().a)!==0)t+=3
if((u&$.d5().a)!==0)t+=4
if((u&$.ce().a)!==0)++t
return(u&$.bk().a)!==0?t+4:t},
hB:function(a){var u,t=$.bn(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bo()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bI()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d4()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d5()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ce()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0)if(u===a)return t
return $.mf()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bi))return!1
return this.a===b.a},
i:function(a){var u=H.e([],[P.i]),t=this.a
if((t&$.bn().a)!==0)C.a.h(u,"Pos")
if((t&$.bm().a)!==0)C.a.h(u,"Norm")
if((t&$.bl().a)!==0)C.a.h(u,"Binm")
if((t&$.bo().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bI().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d4().a)!==0)C.a.h(u,"Clr3")
if((t&$.d5().a)!==0)C.a.h(u,"Clr4")
if((t&$.ce().a)!==0)C.a.h(u,"Weight")
if((t&$.bk().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.q(u,"|")}}
D.fd.prototype={}
D.bQ.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.B]}
H.n(b,u)
if(this.a==null)this.saf(H.e([],[u]))
u=this.a;(u&&C.a).h(u,b)},
T:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.B]})
u=s.a
u=u==null?null:C.a.a1(u,b)
if(u===!0){u=s.a
t=(u&&C.a).T(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.a1(u,b)
if(u===!0){u=s.b
t=(u&&C.a).T(u,b)||t}return t},
B:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.F(P.kX(u,!0,{func:1,ret:-1,args:[D.B]}),new D.fA(q))
u=r.b
if(u!=null){r.saV(H.e([],[{func:1,ret:-1,args:[D.B]}]))
C.a.F(u,new D.fB(q))}return!0},
hU:function(){return this.B(null)},
ao:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.B(u)}}},
saf:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")},
saV:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")}}
D.fA.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:25}
D.fB.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:25}
D.B.prototype={}
D.bv.prototype={}
D.bw.prototype={}
D.H.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.dd.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dd))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.af.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.af))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.bU.prototype={}
X.dt.prototype={
gaN:function(){var u=this.y
return u==null?this.y=D.Q():u},
a8:function(a){this.h(0,new X.af(a,new X.bf(!1,!1,!1)))},
cr:function(a){},
el:function(a){var u,t,s
H.m(a,"$ih",[X.af],"$ah")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.y)(a),++t){s=a[t]
if(C.a.a1(this.a,s))return!1}return!0},
ej:function(a,b){var u=X.af
H.m(b,"$ih",[u],"$ah")
u=new D.bv([u])
u.b=!0
this.cr(u)},
en:function(a,b){var u=X.af
H.m(b,"$ih",[u],"$ah")
u=new D.bw([u])
u.b=!0
this.cr(u)},
bq:function(a){var u,t=this
H.f(a,"$iB")
if(!t.r&&a instanceof X.bU){u=a.c
if(C.a.a1(t.a,u)){t.r=!0
u=t.y
if(u!=null)u.B(a)}}},
bD:function(a){var u
H.f(a,"$iB")
if(this.r&&a instanceof X.bU){u=a.c
if(C.a.a1(this.a,u))this.r=!1}},
al:function(a){var u,t,s=this
if(s.f!=null)return!1
s.f=a
u=a.b
t=u.b
if(t==null)t=u.b=D.Q()
t.h(0,s.gbp())
t=u.a
u=t==null?u.a=D.Q():t
u.h(0,s.gbC())
return!0},
$ah:function(){return[X.af]},
$aY:function(){return[X.af]}}
X.fO.prototype={
is:function(a){var u,t
this.d.h(0,a.a)
u=this.a
if(u==null)return!1
t=new X.bU(a)
t.b=!0
return u.B(t)},
io:function(a){var u,t
this.d.T(0,a.a)
u=this.b
if(u==null)return!1
t=new X.bU(a)
t.b=!0
return u.B(t)},
sh1:function(a){this.d=H.m(a,"$ild",[P.k],"$ald")}}
X.dw.prototype={}
X.fW.prototype={
aU:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.m()
u=b.b
t=q.ch
if(typeof u!=="number")return u.m()
s=new V.ah(o.a+n*m,o.b+u*t)
t=q.a.gbc()
r=new X.bz(a,V.bC(),q.x,t,s)
r.b=!0
q.z=new P.at(p,!1)
q.x=s
return r},
c8:function(a,b){this.r=a.a
return!1},
b1:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.e4()
if(typeof u!=="number")return u.ae()
this.r=(u&~t)>>>0
return!1},
b0:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.aU(a,b))
return!0},
it:function(a){return!1},
fC:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dw(c,r.a.gbc(),b)
s.b=!0
t.B(s)
r.y=new P.at(u,!1)
r.x=V.bC()}}
X.bf.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bf))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.F(this.b)?"Alt+":""
return u+(H.F(this.c)?"Shift+":"")}}
X.bz.prototype={}
X.hk.prototype={
bv:function(a,b,c){var u=this,t=new P.at(Date.now(),!1),s=u.a.gbc(),r=new X.bz(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c8:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.B(this.bv(a,b,!0))
return!0},
b1:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.e4()
if(typeof t!=="number")return t.ae()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.B(u.bv(a,b,!0))
return!0},
b0:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.bv(a,b,!1))
return!0},
iu:function(a,b){return!1}}
X.hw.prototype={}
X.dU.prototype={}
X.i8.prototype={
aU:function(a,b){var u,t,s,r,q=this
H.m(a,"$ib",[V.ah],"$ab")
u=new P.at(Date.now(),!1)
t=a.length>0?a[0]:V.bC()
s=q.a.gbc()
r=new X.dU(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
ir:function(a){var u
H.m(a,"$ib",[V.ah],"$ab")
u=this.b
if(u==null)return!1
u.B(this.aU(a,!0))
return!0},
ip:function(a){var u
H.m(a,"$ib",[V.ah],"$ab")
u=this.c
if(u==null)return!1
u.B(this.aU(a,!0))
return!0},
iq:function(a){var u
H.m(a,"$ib",[V.ah],"$ab")
u=this.d
if(u==null)return!1
u.B(this.aU(a,!1))
return!0}}
X.dZ.prototype={
gbc:function(){var u=this.a,t=C.i.gd8(u).c
t.toString
u=C.i.gd8(u).d
u.toString
return V.lb(0,0,t,u)},
cG:function(a){var u=a.keyCode,t=H.F(a.ctrlKey)||H.F(a.metaKey)
return new X.af(u,new X.bf(t,a.altKey,a.shiftKey))},
aJ:function(a){if(!H.F(a.ctrlKey))H.F(a.metaKey)
a.shiftKey},
bK:function(a){if(!H.F(a.ctrlKey))H.F(a.metaKey)
a.shiftKey},
at:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.A()
u=t.top
if(typeof r!=="number")return r.A()
return new V.ah(s-q,r-u)},
aW:function(a){return new V.a3(a.movementX,a.movementY)},
bG:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.e([],[V.ah])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
q=C.e.ai(r.pageX)
C.e.ai(r.pageY)
p=o.left
C.e.ai(r.pageX)
C.a.h(n,new V.ah(q-p,C.e.ai(r.pageY)-o.top))}return n},
aq:function(a){var u=a.buttons,t=H.F(a.ctrlKey)||H.F(a.metaKey)
return new X.dd(u,new X.bf(t,a.altKey,a.shiftKey))},
by:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.A()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.A()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fw:function(a){this.f=!0},
fj:function(a){this.f=!1},
fp:function(a){H.f(a,"$iab")
if(H.F(this.f)&&this.by(a))a.preventDefault()},
bD:function(a){var u
H.f(a,"$ib1")
if(!H.F(this.f))return
u=this.cG(a)
if(this.b.is(u))a.preventDefault()},
bq:function(a){var u
H.f(a,"$ib1")
if(!H.F(this.f))return
u=this.cG(a)
if(this.b.io(u))a.preventDefault()},
fE:function(a){var u,t,s,r,q=this
H.f(a,"$iab")
u=q.a
u.focus()
q.f=!0
q.aJ(a)
if(H.F(q.x)){t=q.aq(a)
s=q.aW(a)
if(q.d.c8(t,s))a.preventDefault()
return}if(H.F(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aq(a)
r=q.at(a)
if(q.c.c8(t,r))a.preventDefault()},
fI:function(a){var u,t,s,r=this
H.f(a,"$iab")
r.aJ(a)
u=r.aq(a)
if(H.F(r.x)){t=r.aW(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.at(a)
if(r.c.b1(u,s))a.preventDefault()},
fu:function(a){var u,t,s,r=this
H.f(a,"$iab")
if(!r.by(a)){r.aJ(a)
u=r.aq(a)
if(H.F(r.x)){t=r.aW(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.at(a)
if(r.c.b1(u,s))a.preventDefault()}},
fG:function(a){var u,t,s,r=this
H.f(a,"$iab")
r.aJ(a)
u=r.aq(a)
if(H.F(r.x)){t=r.aW(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.at(a)
if(r.c.b0(u,s))a.preventDefault()},
fs:function(a){var u,t,s,r=this
H.f(a,"$iab")
if(!r.by(a)){r.aJ(a)
u=r.aq(a)
if(H.F(r.x)){t=r.aW(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.at(a)
if(r.c.b0(u,s))a.preventDefault()}},
fK:function(a){var u,t,s=this
H.f(a,"$ib9")
s.aJ(a)
u=new V.a3((a&&C.x).ghN(a),C.x.ghO(a)).w(0,180)
if(H.F(s.x)){if(s.d.it(u))a.preventDefault()
return}if(H.F(s.r))return
t=s.at(a)
if(s.c.iu(u,t))a.preventDefault()},
fM:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aq(s.y)
t=s.at(s.y)
s.d.fC(u,t,r)}},
fY:function(a){var u,t=this
H.f(a,"$iaS")
t.a.focus()
t.f=!0
t.bK(a)
u=t.bG(a)
if(t.e.ir(u))a.preventDefault()},
fU:function(a){var u
H.f(a,"$iaS")
this.bK(a)
u=this.bG(a)
if(this.e.ip(u))a.preventDefault()},
fW:function(a){var u
H.f(a,"$iaS")
this.bK(a)
u=this.bG(a)
if(this.e.iq(u))a.preventDefault()},
seP:function(a){this.z=H.m(a,"$ib",[[P.cG,P.O]],"$ab")}}
D.br.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.Q():u},
ap:function(a){var u
H.f(a,"$iB")
u=this.r
if(u!=null)u.B(a)},
eq:function(){return this.ap(null)},
$ia9:1,
$icw:1}
D.a9.prototype={$icw:1}
D.du.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.Q():u},
ap:function(a){var u=this.x
if(u!=null)u.B(a)},
cR:function(a){var u
H.f(a,"$iB")
u=this.y
if(u!=null)u.B(a)},
fB:function(){return this.cR(null)},
fO:function(a){var u,t,s
H.m(a,"$ih",[D.a9],"$ah")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.y)(a),++t){s=a[t]
if(s==null||this.eI(s))return!1}return!0},
fd:function(a,b){var u,t,s,r,q,p,o,n=D.a9
H.m(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gcQ(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.y)(b),++q){p=H.f(b[q],"$ia9")
if(p instanceof D.br)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.bQ()
o.saf(null)
o.saV(null)
o.c=null
o.d=0
p.r=o}H.n(t,s)
if(o.a==null)o.saf(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bv([n])
n.b=!0
this.ap(n)},
fS:function(a,b){var u,t,s,r=D.a9
H.m(b,"$ih",[r],"$ah")
for(u=b.gS(b),t=this.gcQ();u.v();){s=u.gJ(u)
C.a.T(this.e,s)
s.gp().T(0,t)}r=new D.bw([r])
r.b=!0
this.ap(r)},
eI:function(a){var u=C.a.a1(this.e,a)
return u},
seo:function(a){this.e=H.m(a,"$ib",[D.br],"$ab")},
sfZ:function(a){this.f=H.m(a,"$ib",[D.dF],"$ab")},
ser:function(a){this.r=H.m(a,"$ib",[D.dN],"$ab")},
$ah:function(){return[D.a9]},
$aY:function(){return[D.a9]}}
D.dF.prototype={$ia9:1,$icw:1}
D.dN.prototype={$ia9:1,$icw:1}
V.Z.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.bq.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bq))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.fz.prototype={}
V.aK.prototype={
ab:function(a,b){var u=this,t=H.e([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.x])
return t},
be:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=i.e,f=i.y
if(typeof f!=="number")return H.r(f)
u=g*f
t=i.f
s=i.x
if(typeof s!=="number")return H.r(s)
r=i.d
q=i.b
p=q*f
o=i.c
n=s*o
m=i.r
l=q*t-g*o
if(typeof m!=="number")return m.m()
k=h*(u-t*s)-r*(p-n)+m*l
if(Math.abs(k-0)<$.I().a)return V.mN()
j=1/k
return new V.aK((u-s*t)*j,(n-p)*j,l*j,(m*t-r*f)*j,(h*f-m*o)*j,(r*o-h*t)*j,(r*s-m*g)*j,(m*q-h*s)*j,(h*g-r*q)*j)},
aA:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.r(o)
u=r.r
if(typeof u!=="number")return u.m()
t=r.x
if(typeof t!=="number")return t.m()
s=r.y
if(typeof s!=="number")return s.m()
return new V.M(r.a*q+r.b*p+r.c*o,r.d*q+r.e*p+r.f*o,u*q+t*p+s*o)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.aK))return!1
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
if(typeof u!=="number")return u.A()
if(typeof r!=="number")return H.r(r)
if(!(Math.abs(u-r)<s))return!1
u=b.x
t=q.x
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.r(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=q.y
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.r(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.x],o=V.c9(H.e([q.a,q.d,q.r],p),3,0),n=V.c9(H.e([q.b,q.e,q.x],p),3,0),m=V.c9(H.e([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.d(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.d(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.d(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.d(o,1)
r=" "+o[1]+", "
if(1>=t)return H.d(n,1)
r=r+n[1]+", "
if(1>=s)return H.d(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.d(o,2)
p=" "+o[2]+", "
if(2>=t)return H.d(n,2)
p=p+n[2]+", "
if(2>=s)return H.d(m,2)
return r+(p+m[2]+"]")}}
V.aa.prototype={
ab:function(a,b){var u=this,t=H.e([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.x])
return t},
be:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a,c=e.f,b=e.b,a=e.e,a0=d*c-b*a,a1=e.r,a2=e.c,a3=d*a1-a2*a,a4=e.x,a5=e.d,a6=d*a4-a5*a,a7=b*a1-a2*c,a8=b*a4-a5*c,a9=a2*a4-a5*a1,b0=e.y,b1=e.cy
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
if(Math.abs(i-0)<$.I().a)return V.dz()
h=1/i
g=-a
f=-t
return V.b4((c*j-a1*k+a4*l)*h,(-b*j+a2*k-a5*l)*h,(b1*a9-r*a8+o*a7)*h,(-u*a9+q*a8-n*a7)*h,(g*j+a1*m-a4*p)*h,(d*j-a2*m+a5*p)*h,(f*a9+r*a6-o*a3)*h,(b0*a9-q*a6+n*a3)*h,(a*k-c*m+a4*s)*h,(-d*k+b*m-a5*s)*h,(t*a8-b1*a6+o*a0)*h,(-b0*a8+u*a6-n*a0)*h,(g*l+c*p-a1*s)*h,(d*l-b*p+a2*s)*h,(f*a7+b1*a3-r*a0)*h,(b0*a7-u*a3+q*a0)*h)},
m:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.a,a7=b3.a,a8=a5.b,a9=b3.e,b0=a5.c,b1=b3.y
if(typeof b1!=="number")return H.r(b1)
u=a5.d
t=b3.cx
s=b3.b
r=b3.f
q=b3.z
if(typeof q!=="number")return H.r(q)
p=b3.cy
o=b3.c
n=b3.r
m=b3.Q
if(typeof m!=="number")return H.r(m)
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
return V.b4(a6*a7+a8*a9+b0*b1+u*t,a6*s+a8*r+b0*q+u*p,a6*o+a8*n+b0*m+u*l,a6*k+a8*j+b0*i+u*h,g*a7+f*a9+e*b1+d*t,g*s+f*r+e*q+d*p,g*o+f*n+e*m+d*l,g*k+f*j+e*i+d*h,c*a7+b*a9+a*b1+a0*t,c*s+b*r+a*q+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,a1*a7+a2*a9+a3*b1+a4*t,a1*s+a2*r+a3*q+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h)},
aA:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.r(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.M(r.a*q+r.b*p+r.c*o,r.e*q+r.f*p+r.r*o,u*q+t*p+s*o)},
ce:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.r(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.ai(r.a*q+r.b*p+r.c*o+r.d,r.e*q+r.f*p+r.r*o+r.x,u*q+t*p+s*o+r.ch)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.aa))return!1
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
if(typeof u!=="number")return u.A()
if(typeof r!=="number")return H.r(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=q.z
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.r(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=q.Q
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.r(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-q.ch)<s))return!1
if(!(Math.abs(b.cx-q.cx)<s))return!1
if(!(Math.abs(b.cy-q.cy)<s))return!1
if(!(Math.abs(b.db-q.db)<s))return!1
if(!(Math.abs(b.dx-q.dx)<s))return!1
return!0},
i:function(a){return this.L()},
C:function(a){var u,t,s,r,q,p=this,o=[P.x],n=V.c9(H.e([p.a,p.e,p.y,p.cx],o),3,0),m=V.c9(H.e([p.b,p.f,p.z,p.cy],o),3,0),l=V.c9(H.e([p.c,p.r,p.Q,p.db],o),3,0),k=V.c9(H.e([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.d(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.d(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.d(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.d(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.d(n,1)
q=q+n[1]+", "
if(1>=t)return H.d(m,1)
q=q+m[1]+", "
if(1>=s)return H.d(l,1)
q=q+l[1]+", "
if(1>=r)return H.d(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.d(n,2)
u=u+n[2]+", "
if(2>=t)return H.d(m,2)
u=u+m[2]+", "
if(2>=s)return H.d(l,2)
u=u+l[2]+", "
if(2>=r)return H.d(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.d(n,3)
q=q+n[3]+", "
if(3>=t)return H.d(m,3)
q=q+m[3]+", "
if(3>=s)return H.d(l,3)
q=q+l[3]+", "
if(3>=r)return H.d(k,3)
return u+(q+k[3]+"]")},
L:function(){return this.C("")}}
V.ah.prototype={
A:function(a,b){return new V.ah(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ah))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.ai.prototype={
A:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.r(t)
return new V.ai(this.a-b.a,this.b-b.b,u-t)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.ai))return!1
u=b.a
t=$.I()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.A()
if(typeof r!=="number")return H.r(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.cC.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cC))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.dI.prototype={
gan:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dI))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.a3.prototype={
c4:function(a){return Math.sqrt(this.K(this))},
K:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.r(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.r(t)
return s*r+u*t},
m:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.m()
u=this.b
if(typeof u!=="number")return u.m()
return new V.a3(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.I().a){u=$.ln
return u==null?$.ln=new V.a3(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.a3(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=this.a
s=$.I()
s.toString
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.r(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.r(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.M.prototype={
c4:function(a){return Math.sqrt(this.K(this))},
K:function(a){var u=this.c,t=a.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.r(t)
return this.a*a.a+this.b*a.b+u*t},
c5:function(a,b){var u=this.a,t=this.b,s=this.c,r=a.c
if(typeof r!=="number")return r.A()
if(typeof s!=="number")return H.r(s)
return new V.M(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
aY:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof p!=="number")return H.r(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.m()
s=a.a
r=this.a
return new V.M(q*p-u*t,u*s-r*p,r*t-q*s)},
u:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.r(t)
return new V.M(this.a+b.a,this.b+b.b,u+t)},
O:function(a){var u=this.c
if(typeof u!=="number")return u.O()
return new V.M(-this.a,-this.b,-u)},
w:function(a,b){var u
if(Math.abs(b-0)<$.I().a)return V.e1()
u=this.c
if(typeof u!=="number")return u.w()
return new V.M(this.a/b,this.b/b,u/b)},
dC:function(){var u,t=$.I(),s=t.a
if(!(Math.abs(0-this.a)<s))return!1
if(!(Math.abs(0-this.b)<s))return!1
u=this.c
t.toString
if(typeof u!=="number")return H.r(u)
if(!(Math.abs(0-u)<s))return!1
return!0},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=$.I()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.A()
if(typeof r!=="number")return H.r(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
U.fg.prototype={
br:function(a){var u=this.a,t=this.c,s=this.b
if(u)return V.k5(a,t,s)
else{if(a<t)u=t
else u=a>s?s:a
return u}},
gp:function(){var u=this.y
return u==null?this.y=D.Q():u},
I:function(a){var u=this.y
if(u!=null)u.B(a)},
scg:function(a,b){var u=this.a
if(u!==b){this.a=b
u=new D.H("wrap",u,b,[P.X])
u.b=!0
this.I(u)}},
sc6:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.I().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.br(u)}s=new D.H("maximumLocation",s,t.b,[P.x])
s.b=!0
t.I(s)}},
sc7:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.I().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.br(u)}s=new D.H("minimumLocation",s,t.c,[P.x])
s.b=!0
t.I(s)}},
sY:function(a,b){var u,t=this
b=t.br(b==null?0:b)
u=t.d
if(!(Math.abs(u-b)<$.I().a)){t.d=b
u=new D.H("location",u,b,[P.x])
u.b=!0
t.I(u)}},
sb_:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.I().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.H("maximumVelocity",r,a,[P.x])
r.b=!0
s.I(r)}},
sP:function(a){var u=this,t=a==null?0:a,s=u.e
a=-s
if(!(t<a))a=t>s?s:t
t=u.f
if(!(Math.abs(t-a)<$.I().a)){u.f=a
t=new D.H("velocity",t,a,[P.x])
t.b=!0
u.I(t)}},
sav:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.I().a)){this.x=a
u=new D.H("dampening",u,a,[P.x])
u.b=!0
this.I(u)}},
ac:function(a,b){var u,t,s,r=this,q=r.f,p=$.I().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sY(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.I().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sP(u)}}}
U.ck.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.Q():u},
sV:function(a,b){var u,t,s,r=this
if(!J.T(r.a,b)){u=r.a
r.a=b
t=new D.H("matrix",u,b,[V.aa])
t.b=!0
s=r.b
if(s!=null)s.B(t)}},
aB:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ck))return!1
return J.T(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")}}
U.cp.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.Q():u},
I:function(a){var u
H.f(a,"$iB")
u=this.e
if(u!=null)u.B(a)},
a6:function(){return this.I(null)},
fb:function(a,b){var u,t,s,r,q,p,o,n=U.a5
H.m(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gaE(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.y)(b),++q){p=b[q]
if(p!=null){o=p.gp()
o.toString
H.n(t,s)
if(o.a==null)o.saf(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bv([n])
n.b=!0
this.I(n)},
fQ:function(a,b){var u,t,s=U.a5
H.m(b,"$ih",[s],"$ah")
for(u=b.gS(b),t=this.gaE();u.v();)u.gJ(u).gp().T(0,t)
s=new D.bw([s])
s.b=!0
this.I(s)},
aB:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.N()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ap(r,r.length,[H.t(r,0)]),u=null;r.v();){q=r.d
if(q!=null){t=q.aB(0,b,c)
if(t!=null)u=u==null?t:t.m(0,u)}}s.f=u==null?V.dz():u
r=s.e
if(r!=null)r.ao(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cp))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.T(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ah:function(){return[U.a5]},
$aY:function(){return[U.a5]},
$ia5:1}
U.a5.prototype={}
U.dJ.prototype={
gp:function(){var u=this.y
return u==null?this.y=D.Q():u},
I:function(a){var u=this.y
if(u!=null)u.B(a)},
se2:function(a){var u
a=V.k5(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.I().a)){this.a=a
u=new D.H("yaw",u,a,[P.x])
u.b=!0
this.I(u)}},
sdM:function(a,b){var u
b=V.k5(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.I().a)){this.b=b
u=new D.H("pitch",u,b,[P.x])
u.b=!0
this.I(u)}},
sdS:function(a){var u
a=V.k5(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.I().a)){this.c=a
u=new D.H("roll",u,a,[P.x])
u.b=!0
this.I(u)}},
aB:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.se2(s.a+s.d*b.y)
s.sdM(0,s.b+s.e*b.y)
s.sdS(s.c+s.f*b.y)
r=s.c
u=Math.cos(r)
t=Math.sin(r)
s.x=V.b4(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1).m(0,V.l0(s.b)).m(0,V.kl(s.a))
r=s.y
if(r!=null)r.ao(0)}return s.x},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dJ))return!1
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
U.e_.prototype={
gp:function(){var u=this.fx
return u==null?this.fx=D.Q():u},
I:function(a){var u
H.f(a,"$iB")
u=this.fx
if(u!=null)u.B(a)},
a6:function(){return this.I(null)},
al:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.Q():t
u.h(0,s.gf4())
u=s.a.c
t=u.d
u=t==null?u.d=D.Q():t
u.h(0,s.gf6())
u=s.a.c
t=u.c
u=t==null?u.c=D.Q():t
u.h(0,s.gf8())
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
u.h(0,s.ghs())
u=s.a.e
t=u.d
u=t==null?u.d=D.Q():t
u.h(0,s.ghq())
u=s.a.e
t=u.c
u=t==null?u.c=D.Q():t
u.h(0,s.gho())
return!0},
ak:function(a){var u=a.a,t=a.b
if(H.F(this.f)){if(typeof u!=="number")return u.O()
u=-u}if(H.F(this.r)){if(typeof t!=="number")return t.O()
t=-t}return new V.a3(u,t)},
f5:function(a){var u=this
a=H.u(H.f(a,"$iB"),"$ibz")
if(!J.T(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
f7:function(a){var u,t,s,r,q,p,o,n=this
a=H.u(H.f(a,"$iB"),"$ibz")
if(!H.F(n.cx))return
if(H.F(n.ch)){u=a.d.A(0,a.y)
u=new V.a3(u.a,u.b)
u=u.K(u)
t=n.Q
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.ch=!1}if(H.F(n.e)){u=a.c
t=a.d.A(0,a.y)
u=n.ak(new V.a3(t.a,t.b).m(0,2).w(0,u.gan()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.r(s)
t.sP(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.r(t)
s.sP(-u*10*t)}else{u=a.c
t=a.d
s=t.A(0,a.y)
r=n.ak(new V.a3(s.a,s.b).m(0,2).w(0,u.gan()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.sY(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.A(0,a.z)
n.dx=n.ak(new V.a3(t.a,t.b).m(0,2).w(0,u.gan()))}n.a6()},
f9:function(a){var u,t,s,r=this
H.f(a,"$iB")
if(!H.F(r.cx))return
r.cx=!1
if(H.F(r.ch))return
u=r.dx
if(u.K(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.r(s)
u.sP(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.r(u)
s.sP(-t*10*u)
r.a6()}},
f1:function(a){var u=this
if(H.u(H.f(a,"$iB"),"$idw").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
f3:function(a){var u,t,s,r,q,p,o,n=this
a=H.u(H.f(a,"$iB"),"$ibz")
if(!J.T(n.d,a.x.b))return
u=a.c
t=a.d
s=t.A(0,a.y)
r=n.ak(new V.a3(s.a,s.b).m(0,2).w(0,u.gan()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.sY(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.A(0,a.z)
n.dx=n.ak(new V.a3(t.a,t.b).m(0,2).w(0,u.gan()))
n.a6()},
ht:function(a){var u=this
H.f(a,"$iB")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hr:function(a){var u,t,s,r,q,p,o,n=this
a=H.u(H.f(a,"$iB"),"$idU")
if(!H.F(n.cx))return
if(H.F(n.ch)){u=a.d.A(0,a.y)
u=new V.a3(u.a,u.b)
u=u.K(u)
t=n.Q
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.ch=!1}if(H.F(n.e)){u=a.c
t=a.d.A(0,a.y)
u=n.ak(new V.a3(t.a,t.b).m(0,2).w(0,u.gan()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.r(s)
t.sP(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.r(t)
s.sP(-u*10*t)}else{u=a.c
t=a.d
s=t.A(0,a.y)
r=n.ak(new V.a3(s.a,s.b).m(0,2).w(0,u.gan()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.sY(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.A(0,a.z)
n.dx=n.ak(new V.a3(t.a,t.b).m(0,2).w(0,u.gan()))}n.a6()},
hp:function(a){var u,t,s,r=this
H.f(a,"$iB")
if(!H.F(r.cx))return
r.cx=!1
if(H.F(r.ch))return
u=r.dx
if(u.K(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.r(s)
u.sP(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.r(u)
s.sP(-t*10*u)
r.a6()}},
aB:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.N()
if(s<r){t.dy=r
u=b.y
t.c.ac(0,u)
t.b.ac(0,u)
t.fr=V.kl(t.b.d).m(0,V.l0(t.c.d))}return t.fr},
$ia5:1}
U.e0.prototype={
gp:function(){var u=this.dx
return u==null?this.dx=D.Q():u},
I:function(a){var u
H.f(a,"$iB")
u=this.dx
if(u!=null)u.B(a)},
a6:function(){return this.I(null)},
gY:function(a){return new V.ai(this.r.d,this.x.d,this.y.d)},
fA:function(a){this.I(H.f(a,"$iB"))},
bL:function(a,b,c,d,e){if(a.r){if(typeof e!=="number")return e.u()
e+=d}else if(b.r){if(typeof e!=="number")return e.A()
e-=d}else{if(typeof e!=="number")return e.a2()
e=e>0?e-Math.min(e,c):e+Math.min(-e,c)}return e},
aB:function(a,b,c){var u,t,s,r,q=this,p=q.cy,o=b.e
if(typeof p!=="number")return p.N()
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
r=new V.M(q.r.f,q.x.f,q.y.f)
p=q.Q
if(p!=null)r=p.aA(r)
r=new V.M(q.bL(q.a,q.b,t,s,r.a),q.bL(q.c,q.d,t,s,r.b),q.bL(q.e,q.f,t,s,r.c))
p=q.z
if(p!=null)r=p.aA(r)
q.r.sP(r.a)
q.x.sP(r.b)
q.y.sP(r.c)
q.r.ac(0,u)
q.x.ac(0,u)
q.y.ac(0,u)
q.db=V.l1(q.r.d,-q.x.d,q.y.d)}return q.db},
seH:function(a){this.dy=H.n(a,{func:1,ret:V.ai,args:[V.ai,V.ai]})},
$ia5:1}
M.dk.prototype={
aG:function(a){var u
H.f(a,"$iB")
u=this.y
if(u!=null)u.B(a)},
es:function(){return this.aG(null)},
fl:function(a,b){var u,t,s,r,q,p,o,n=E.ao
H.m(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gaF(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.y)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bQ()
o.saf(null)
o.saV(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.saf(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bv([n])
n.b=!0
this.aG(n)},
fn:function(a,b){var u,t,s=E.ao
H.m(b,"$ih",[s],"$ah")
for(u=b.gS(b),t=this.gaF();u.v();)u.gJ(u).gp().T(0,t)
s=new D.bw([s])
s.b=!0
this.aG(s)},
gp:function(){var u=this.y
return u==null?this.y=D.Q():u},
aQ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.dP(f.d)
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
if(typeof s!=="number")return H.r(s)
o=C.e.ai(p*s)
p=q.b
if(typeof r!=="number")return H.r(r)
n=C.e.ai(p*r)
p=C.e.ai(q.c*s)
a.c=p
q=C.e.ai(q.d*r)
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
i=V.b4(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dO(i)
t=$.l5
if(t==null){t=V.l7()
q=V.ks()
p=$.lo
t=V.l_(t,q,p==null?$.lo=new V.M(0,0,-1):p)
$.l5=t
h=t}else h=t
t=u.b
if(t!=null){g=t.aB(0,a,u)
if(g!=null)h=g.m(0,h)}a.db.dO(h)
for(u=f.e.a,u=new J.ap(u,u.length,[H.t(u,0)]);u.v();)u.d.ac(0,a)
for(u=f.e.a,u=new J.ap(u,u.length,[H.t(u,0)]);u.v();)u.d.aQ(a)
f.b.toString
a.cy.c9()
a.db.c9()
f.c.toString
a.dN()},
seG:function(a,b){this.e=H.m(b,"$iY",[E.ao],"$aY")},
$ioK:1}
A.d9.prototype={}
A.f3.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hV:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
hP:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ae.prototype={
gad:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){return""+this.gad(this)},
n:function(a,b){if(b==null)return!1
if(!(b instanceof A.ae))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.h1.prototype={
ec:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.al("")
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
A.nW(c3,u)
A.nY(c3,u)
A.nX(c3,u)
A.o_(c3,u)
A.o0(c3,u)
A.nZ(c3,u)
A.o1(c3,u)
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
m=A.nV(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cH(n,35633)
b8.f=b8.cH(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.F(H.lM(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.z(P.C("Failed to link shader: "+H.l(l)))}b8.hd()
b8.hf()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.u(b8.y.H(0,"invViewMat"),"$iau")
if(t)b8.dy=H.u(b8.y.H(0,"objMat"),"$iau")
if(r)b8.fr=H.u(b8.y.H(0,"viewObjMat"),"$iau")
b8.fy=H.u(b8.y.H(0,"projViewObjMat"),"$iau")
if(c3.ry)b8.k1=H.u(b8.y.H(0,"txt2DMat"),"$icM")
if(c3.x1)b8.k2=H.u(b8.y.H(0,"txtCubeMat"),"$iau")
if(c3.x2)b8.k3=H.u(b8.y.H(0,"colorMat"),"$iau")
b8.seB(H.e([],[A.au]))
t=c3.y2
if(t>0){b8.k4=H.f(b8.y.H(0,"bendMatCount"),"$iaC")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.z(P.C(c0+q+c1));(s&&C.a).h(s,H.u(j,"$iau"))}}t=c3.a
if(t.a)b8.r2=H.u(b8.y.H(0,"emissionClr"),"$iV")
if(t.b)b8.rx=H.u(b8.y.H(0,"emissionTxt"),"$iam")
t=c3.b
if(t.a)b8.x1=H.u(b8.y.H(0,"ambientClr"),"$iV")
if(t.b)b8.x2=H.u(b8.y.H(0,"ambientTxt"),"$iam")
t=c3.c
if(t.a)b8.y2=H.u(b8.y.H(0,"diffuseClr"),"$iV")
if(t.b)b8.aw=H.u(b8.y.H(0,"diffuseTxt"),"$iam")
t=c3.d
if(t.a)b8.dc=H.u(b8.y.H(0,"invDiffuseClr"),"$iV")
if(t.b)b8.dd=H.u(b8.y.H(0,"invDiffuseTxt"),"$iam")
t=c3.e
s=t.a
if(s||t.b||!1){b8.dg=H.u(b8.y.H(0,"shininess"),"$iad")
if(s)b8.de=H.u(b8.y.H(0,"specularClr"),"$iV")
if(t.b)b8.df=H.u(b8.y.H(0,"specularTxt"),"$iam")}if(c3.f.b)b8.dh=H.u(b8.y.H(0,"bumpTxt"),"$iam")
if(c3.cy){b8.di=H.u(b8.y.H(0,"envSampler"),"$ic1")
t=c3.r
if(t.a)b8.dj=H.u(b8.y.H(0,"reflectClr"),"$iV")
if(t.b)b8.dk=H.u(b8.y.H(0,"reflectTxt"),"$iam")
t=c3.x
s=t.a
if(s||t.b||!1){b8.dl=H.u(b8.y.H(0,"refraction"),"$iad")
if(s)b8.dm=H.u(b8.y.H(0,"refractClr"),"$iV")
if(t.b)b8.dn=H.u(b8.y.H(0,"refractTxt"),"$iam")}}t=c3.y
if(t.a)b8.dq=H.u(b8.y.H(0,"alpha"),"$iad")
if(t.b)b8.dr=H.u(b8.y.H(0,"alphaTxt"),"$iam")
t=P.k
s=[t,A.aC]
b8.seM(new H.a_(s))
b8.seN(new H.a_([t,[P.b,A.c_]]))
b8.sh_(new H.a_(s))
b8.sh0(new H.a_([t,[P.b,A.c0]]))
b8.shi(new H.a_(s))
b8.shj(new H.a_([t,[P.b,A.c2]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.c_],i=0;i<t.length;t.length===s||(0,H.y)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.l(g)
e=H.e([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ae()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.j(0,d)
if(j==null)H.z(P.C(c0+d+c1))
H.u(j,"$iV")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.j(0,d)
if(c==null)H.z(P.C(c0+d+c1))
H.u(c,"$iV")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.j(0,d)
if(b==null)H.z(P.C(c0+d+c1))
H.u(b,"$iV")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.j(0,d)
if(j==null)H.z(P.C(c0+d+c1))
H.u(j,"$iV")
o=b8.y
d=f+"s["+k+"].color"
c=o.j(0,d)
if(c==null)H.z(P.C(c0+d+c1))
H.u(c,"$iV")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.j(0,o)
if(b==null)H.z(P.C(c0+o+c1))
H.u(b,"$iam")
a2=b}else a2=b9
C.a.h(e,new A.c_(a1,a0,a,j,c,a2))}b8.bW.k(0,g,e)
q=b8.bV
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.z(P.C(c0+o+c1))
q.k(0,g,H.f(j,"$iaC"))}for(t=c3.Q,s=t.length,r=[A.c0],i=0;i<t.length;t.length===s||(0,H.y)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.l(g)
e=H.e([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.j(0,o)
if(j==null)H.z(P.C(c0+o+c1))
H.u(j,"$iV")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.j(0,o)
if(c==null)H.z(P.C(c0+o+c1))
H.u(c,"$iV")
p=b8.y
o=f+"s["+k+"].color"
b=p.j(0,o)
if(b==null)H.z(P.C(c0+o+c1))
H.u(b,"$iV")
if(typeof g!=="number")return g.ae()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.z(P.C(c0+o+c1))
H.u(a3,"$icM")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.z(P.C(c0+o+c1))
H.u(a3,"$ic1")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.z(P.C(c0+o+c1))
H.u(a3,"$ic1")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.z(P.C(c0+o+c1))
H.u(a5,"$icL")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.j(0,o)
if(a3==null)H.z(P.C(c0+o+c1))
H.u(a3,"$iad")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.j(0,o)
if(a5==null)H.z(P.C(c0+o+c1))
H.u(a5,"$iad")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.j(0,o)
if(a8==null)H.z(P.C(c0+o+c1))
H.u(a8,"$iad")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}C.a.h(e,new A.c0(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.bY.k(0,g,e)
q=b8.bX
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.z(P.C(c0+o+c1))
q.k(0,g,H.f(j,"$iaC"))}for(t=c3.ch,s=t.length,r=[A.c2],i=0;i<t.length;t.length===s||(0,H.y)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.l(g)
e=H.e([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.j(0,o)
if(j==null)H.z(P.C(c0+o+c1))
H.u(j,"$iV")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.j(0,o)
if(c==null)H.z(P.C(c0+o+c1))
H.u(c,"$iV")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.j(0,o)
if(b==null)H.z(P.C(c0+o+c1))
H.u(b,"$iV")
p=b8.y
o=f+"s["+k+"].color"
a3=p.j(0,o)
if(a3==null)H.z(P.C(c0+o+c1))
H.u(a3,"$iV")
if(typeof g!=="number")return g.ae()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.j(0,o)
if(a5==null)H.z(P.C(c0+o+c1))
H.u(a5,"$iV")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.j(0,o)
if(a8==null)H.z(P.C(c0+o+c1))
H.u(a8,"$iV")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.j(0,o)
if(b2==null)H.z(P.C(c0+o+c1))
H.u(b2,"$iad")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.j(0,o)
if(b3==null)H.z(P.C(c0+o+c1))
H.u(b3,"$iad")
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
if(a5==null)H.z(P.C(c0+d+c1))
H.u(a5,"$icL")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.j(0,d)
if(a5==null)H.z(P.C(c0+d+c1))
H.u(a5,"$iad")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.j(0,d)
if(a8==null)H.z(P.C(c0+d+c1))
H.u(a8,"$iad")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.j(0,d)
if(a5==null)H.z(P.C(c0+d+c1))
H.u(a5,"$iad")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.j(0,d)
if(a8==null)H.z(P.C(c0+d+c1))
H.u(a8,"$iad")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.j(0,d)
if(b2==null)H.z(P.C(c0+d+c1))
H.u(b2,"$iad")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.j(0,d)
if(a5==null)H.z(P.C(c0+d+c1))
H.u(a5,"$iam")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.z(P.C(c0+o+c1))
H.u(a5,"$iam")
a6=a5}else a6=b9
C.a.h(e,new A.c2(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.c_.k(0,g,e)
q=b8.bZ
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.z(P.C(c0+o+c1))
q.k(0,g,H.f(j,"$iaC"))}}},
ag:function(a,b){if(b!=null&&b.d)a.e5(b)},
hc:function(a,b){},
seB:function(a){this.r1=H.m(a,"$ib",[A.au],"$ab")},
seM:function(a){this.bV=H.m(a,"$iw",[P.k,A.aC],"$aw")},
seN:function(a){this.bW=H.m(a,"$iw",[P.k,[P.b,A.c_]],"$aw")},
sh_:function(a){this.bX=H.m(a,"$iw",[P.k,A.aC],"$aw")},
sh0:function(a){this.bY=H.m(a,"$iw",[P.k,[P.b,A.c0]],"$aw")},
shi:function(a){this.bZ=H.m(a,"$iw",[P.k,A.aC],"$aw")},
shj:function(a){this.c_=H.m(a,"$iw",[P.k,[P.b,A.c2]],"$aw")}}
A.aw.prototype={
i:function(a){return"dirLight"+H.l(this.a)}}
A.ay.prototype={
i:function(a){return"pointLight"+H.l(this.a)}}
A.az.prototype={
i:function(a){return"spotLight"+H.l(this.a)}}
A.h4.prototype={
i:function(a){return this.aw}}
A.c_.prototype={}
A.c0.prototype={}
A.c2.prototype={}
A.cE.prototype={
ef:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cH:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.F(H.lM(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.C("Error compiling shader '"+H.l(s)+"': "+H.l(u)))}return s},
hd:function(){var u,t,s,r=this,q=H.e([],[A.d9]),p=r.a,o=H.a0(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.r(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d9(p,t.name,s))}r.x=new A.f3(q)},
hf:function(){var u,t,s,r=this,q=H.e([],[A.dV]),p=r.a,o=H.a0(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.r(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.hM(t.type,t.size,t.name,s))}r.y=new A.il(q)},
aI:function(a,b,c){var u=this.a
if(a===1)return new A.aC(u,b,c)
else return A.ko(u,this.r,b,a,c)},
eJ:function(a,b,c){var u=this.a
if(a===1)return new A.am(u,b,c)
else return A.ko(u,this.r,b,a,c)},
eK:function(a,b,c){var u=this.a
if(a===1)return new A.c1(u,b,c)
else return A.ko(u,this.r,b,a,c)},
bb:function(a,b){return new P.eb(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hM:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aI(b,c,d)
case 5121:return u.aI(b,c,d)
case 5122:return u.aI(b,c,d)
case 5123:return u.aI(b,c,d)
case 5124:return u.aI(b,c,d)
case 5125:return u.aI(b,c,d)
case 5126:return new A.ad(u.a,c,d)
case 35664:return new A.ih(u.a,c,d)
case 35665:return new A.V(u.a,c,d)
case 35666:return new A.cL(u.a,c,d)
case 35667:return new A.ii(u.a,c,d)
case 35668:return new A.ij(u.a,c,d)
case 35669:return new A.ik(u.a,c,d)
case 35674:return new A.im(u.a,c,d)
case 35675:return new A.cM(u.a,c,d)
case 35676:return new A.au(u.a,c,d)
case 35678:return u.eJ(b,c,d)
case 35680:return u.eK(b,c,d)
case 35670:throw H.c(u.bb("BOOL",c))
case 35671:throw H.c(u.bb("BOOL_VEC2",c))
case 35672:throw H.c(u.bb("BOOL_VEC3",c))
case 35673:throw H.c(u.bb("BOOL_VEC4",c))
default:throw H.c(P.C("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.dV.prototype={}
A.il.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
H:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.C("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.L()},
L:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.y)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aC.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.ii.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.ij.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.ik.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.ig.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
shv:function(a){H.m(a,"$ib",[P.k],"$ab")}}
A.ad.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.ih.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.V.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.cL.prototype={
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.im.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.cM.prototype={
aj:function(a){var u=new Float32Array(H.c4(H.m(a,"$ib",[P.x],"$ab")))
C.c.dZ(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.au.prototype={
aj:function(a){var u=new Float32Array(H.c4(H.m(a,"$ib",[P.x],"$ab")))
C.c.e_(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.am.prototype={
e5:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.c1.prototype={
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.jC.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c5(s.b,b).c5(s.d.c5(s.c,b),c)
a.sY(0,new V.ai(r.a,r.b,r.c))
a.sdV(r.w(0,Math.sqrt(r.K(r))))
s=1-b
u=1-c
a.sd5(new V.cC(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))},
$S:16}
F.jR.prototype={
$2:function(a,b){return 0},
$S:43}
F.jS.prototype={
$3:function(a,b,c){var u,t,s=b*2-1,r=c*2-1
a.sY(0,new V.ai(s,r,this.a.a.$2(b,c)))
u=new V.M(s,r,1)
a.sdV(u.w(0,Math.sqrt(u.K(u))))
u=1-b
t=1-c
a.sd5(new V.cC(b*c,2+u*c,4+b*t,6+u*t))},
$S:16}
F.a8.prototype={
eA:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.e1()
if(q!=null)s=s.u(0,q)
if(u!=null)s=s.u(0,u)
if(t!=null)s=s.u(0,t)
if(s.dC())return
return s.w(0,Math.sqrt(s.K(s)))},
eE:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.A(0,q)
r=new V.M(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.K(r)))
r=t.A(0,q)
r=new V.M(r.a,r.b,r.c)
r=s.aY(r.w(0,Math.sqrt(r.K(r))))
return r.w(0,Math.sqrt(r.K(r)))},
bR:function(){var u,t=this
if(t.d!=null)return!0
u=t.eA()
if(u==null){u=t.eE()
if(u==null)return!1}t.d=u
t.a.a.a0()
return!0},
ez:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.e1()
if(q!=null)s=s.u(0,q)
if(u!=null)s=s.u(0,u)
if(t!=null)s=s.u(0,t)
if(s.dC())return
return s.w(0,Math.sqrt(s.K(s)))},
eD:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.I().a){l=d.A(0,g)
l=new V.M(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.K(l)))
if(s.a-t.a<0)q=q.O(0)}else{p=(l-u.b)/r
l=d.A(0,g)
k=l.c
if(typeof k!=="number")return k.m()
i=g.a
h=g.b
f=g.c
if(typeof f!=="number")return H.r(f)
f=new V.ai(l.a*p+i,l.b*p+h,k*p+f).A(0,j)
f=new V.M(f.a,f.b,f.c)
q=f.w(0,Math.sqrt(f.K(f)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.O(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.K(l)))
l=o.aY(q)
l=l.w(0,Math.sqrt(l.K(l))).aY(o)
q=l.w(0,Math.sqrt(l.K(l)))}return q},
bP:function(){var u,t=this
if(t.e!=null)return!0
u=t.ez()
if(u==null){u=t.eD()
if(u==null)return!1}t.e=u
t.a.a.a0()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.aa(J.as(s.e),0)+", "+C.b.aa(J.as(t.b.e),0)+", "+C.b.aa(J.as(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
L:function(){return this.C("")}}
F.bd.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.aa(J.as(u.e),0)+", "+C.b.aa(J.as(this.b.e),0)},
L:function(){return this.C("")}}
F.bB.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.aa(J.as(u.e),0)},
L:function(){return this.C("")}}
F.dL.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.Q():u},
ia:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.X()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.y)(g),++s){r=g[s]
h.a.h(0,r.hK())}h.a.X()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.y)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.X()
o=o.e
if(typeof o!=="number")return o.u()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bB()
if(n.a==null)H.z(P.C("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.B(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.y)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.X()
o=o.e
if(typeof o!=="number")return o.u()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.X()
p=p.e
if(typeof p!=="number")return p.u()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
p=new F.bd()
o=l.a
if(o==null)H.z(P.C("May not create a line with a start vertex which is not attached to a shape."))
if(o!=k.a)H.z(P.C("May not create a line with vertices attached to different shapes."))
p.a=l
C.a.h(l.c.b,p)
p.b=k
C.a.h(k.c.c,p)
C.a.h(p.a.a.c.b,p)
p=p.a.a.e
if(p!=null)p.B(null)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.y)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.X()
o=o.e
if(typeof o!=="number")return o.u()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.X()
p=p.e
if(typeof p!=="number")return p.u()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.X()
o=o.e
if(typeof o!=="number")return o.u()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.dm(l,k,i)}g=h.e
if(g!=null)g.ao(0)},
aL:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aL()||!1
if(!t.a.aL())u=!1
s=t.e
if(s!=null)s.ao(0)
return u},
hG:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bn()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bm().a)!==0)++s
if((t&$.bl().a)!==0)++s
if((t&$.bo().a)!==0)++s
if((t&$.bI().a)!==0)++s
if((t&$.d4().a)!==0)++s
if((t&$.d5().a)!==0)++s
if((t&$.ce().a)!==0)++s
if((t&$.bk().a)!==0)++s
r=a3.gcj(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.x
p=H.e(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.e(u,[Z.db])
for(n=0,m=0;m<s;++m){l=a3.hB(m)
k=l.gcj(l)
C.a.k(o,m,new Z.db(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.d(u,j)
i=u[j].i7(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.c4(p)),35044)
u.bindBuffer(a0,null)
e=new Z.dc(new Z.e2(a0,f),o,a3)
e.seW(H.e([],[Z.bu]))
if(a.b.b.length!==0){t=P.k
d=H.e([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.X()
C.a.h(d,c.e)}b=Z.kt(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bu(0,d.length,b))}if(a.c.b.length!==0){t=P.k
d=H.e([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.X()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.X()
C.a.h(d,c.e)}b=Z.kt(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bu(1,d.length,b))}if(a.d.b.length!==0){t=P.k
d=H.e([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.X()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.X()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].c
c.a.a.X()
C.a.h(d,c.e)}b=Z.kt(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bu(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.e([],[P.i])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.C(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.C(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.C(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.C(t))}return C.a.q(s,"\n")},
a0:function(){var u=this.e
if(u!=null)u.B(null)},
$ioL:1}
F.hI.prototype={
hA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.aU],"$ab")
u=H.e([],[F.a8])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.d(c,r)
l=c[r];++r
if(r>=m)return H.d(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.d(c,j)
i=c[j]
if(s<0||s>=m)return H.d(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.dm(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dm(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dm(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dm(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
aL:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.y)(u),++r)if(!u[r].bR())s=!1
return s},
bQ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.y)(u),++r)if(!u[r].bP())s=!1
return s},
i:function(a){return this.L()},
C:function(a){var u,t,s,r=H.e([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)C.a.h(r,u[s].C(a))
return C.a.q(r,"\n")},
L:function(){return this.C("")},
seQ:function(a){this.b=H.m(a,"$ib",[F.a8],"$ab")}}
F.hJ.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.L()},
C:function(a){var u,t,s=H.e([],[P.i]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
C.a.h(s,t[u].C(a+(""+u+". ")))}return C.a.q(s,"\n")},
L:function(){return this.C("")},
seX:function(a){this.b=H.m(a,"$ib",[F.bd],"$ab")}}
F.hK.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.L()},
C:function(a){var u,t,s,r=H.e([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)C.a.h(r,u[s].C(a))
return C.a.q(r,"\n")},
L:function(){return this.C("")},
sbF:function(a){this.b=H.m(a,"$ib",[F.bB],"$ab")}}
F.aU.prototype={
bU:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.lq(u.cx,r,o,t,s,q,p,a,n)},
hK:function(){return this.bU(null)},
sY:function(a,b){var u
if(!J.T(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a0()}},
sdV:function(a){var u
if(!J.T(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a0()}},
sd5:function(a){var u
if(!J.T(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a0()}},
i7:function(a){var u,t,s=this
if(a.n(0,$.bn())){u=s.f
t=[P.x]
if(u==null)return H.e([0,0,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.n(0,$.bm())){u=s.r
t=[P.x]
if(u==null)return H.e([0,1,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.n(0,$.bl())){u=s.x
t=[P.x]
if(u==null)return H.e([0,0,1],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.n(0,$.bo())){u=s.y
t=[P.x]
if(u==null)return H.e([0,0],t)
else return H.e([u.a,u.b],t)}else if(a.n(0,$.bI())){u=s.z
t=[P.x]
if(u==null)return H.e([0,0,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.n(0,$.d4())){u=s.Q
t=[P.x]
if(u==null)return H.e([1,1,1],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.n(0,$.d5())){u=s.Q
t=[P.x]
if(u==null)return H.e([1,1,1,1],t)
else return H.e([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.ce()))return H.e([s.ch],[P.x])
else if(a.n(0,$.bk())){u=s.cx
t=[P.x]
if(u==null)return H.e([-1,-1,-1,-1],t)
else return H.e([u.a,u.b,u.c,u.d],t)}else return H.e([],[P.x])},
bR:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.e1()
t.d.F(0,new F.iL(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.K(s)))
s=t.a
if(s!=null){s.a0()
s=t.a.e
if(s!=null)s.ao(0)}return!0},
bP:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.e1()
t.d.F(0,new F.iK(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.K(s)))
s=t.a
if(s!=null){s.a0()
s=t.a.e
if(s!=null)s.ao(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var u,t,s=this,r="-",q=H.e([],[P.i])
C.a.h(q,C.b.aa(J.as(s.e),0))
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
t=C.a.q(q,", ")
return a+"{"+t+"}"},
L:function(){return this.C("")}}
F.iL.prototype={
$1:function(a){var u,t
H.f(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.u(0,u)}},
$S:9}
F.iK.prototype={
$1:function(a){var u,t
H.f(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.u(0,u)}},
$S:9}
F.iE.prototype={
X:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.C("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a0()
return!0},
d3:function(a,b){var u=null,t=F.lq(u,u,a,u,u,b,u,u,0)
this.h(0,t)
return t},
gl:function(a){return this.c.length},
aL:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)u[s].bR()
return!0},
bQ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)u[s].bP()
return!0},
hH:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.m()
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.T(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.B(null)}}}}return!0},
i:function(a){return this.L()},
C:function(a){var u,t,s,r
this.X()
u=H.e([],[P.i])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].C(a))
return C.a.q(u,"\n")},
L:function(){return this.C("")},
shw:function(a){this.c=H.m(a,"$ib",[F.aU],"$ab")}}
F.iF.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
F:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a8]})
C.a.F(u.b,b)
C.a.F(u.c,new F.iG(u,b))
C.a.F(u.d,new F.iH(u,b))},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.e([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)C.a.h(r,u[s].C(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)C.a.h(r,u[s].C(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)C.a.h(r,u[s].C(""))
return C.a.q(r,"\n")},
seR:function(a){this.b=H.m(a,"$ib",[F.a8],"$ab")},
seS:function(a){this.c=H.m(a,"$ib",[F.a8],"$ab")},
seT:function(a){this.d=H.m(a,"$ib",[F.a8],"$ab")}}
F.iG.prototype={
$1:function(a){H.f(a,"$ia8")
if(!J.T(a.a,this.a))this.b.$1(a)},
$S:9}
F.iH.prototype={
$1:function(a){var u
H.f(a,"$ia8")
u=this.a
if(!J.T(a.a,u)&&!J.T(a.b,u))this.b.$1(a)},
$S:9}
F.iI.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.e([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)C.a.h(r,u[s].C(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)C.a.h(r,u[s].C(""))
return C.a.q(r,"\n")},
seY:function(a){this.b=H.m(a,"$ib",[F.bd],"$ab")},
seZ:function(a){this.c=H.m(a,"$ib",[F.bd],"$ab")}}
F.iJ.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.e([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)C.a.h(r,u[s].C(""))
return C.a.q(r,"\n")},
sbF:function(a){this.b=H.m(a,"$ib",[F.bB],"$ab")}}
O.dy.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.Q():u},
W:function(a){var u
H.f(a,"$iB")
u=this.fr
if(u!=null)u.B(a)},
bB:function(){return this.W(null)},
cV:function(a){H.f(a,"$iB")
this.a=null
this.W(a)},
h9:function(){return this.cV(null)},
ff:function(a,b){var u=V.aa
H.m(b,"$ih",[u],"$ah")
u=new D.bv([u])
u.b=!0
this.W(u)},
fh:function(a,b){var u=V.aa
H.m(b,"$ih",[u],"$ah")
u=new D.bw([u])
u.b=!0
this.W(u)},
cE:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.k,h=new H.a_([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=h.j(0,0)
h.k(0,0,r==null?1:r)}q=H.e([],[A.aw])
h.F(0,new O.h8(j,q))
C.a.bo(q,new O.h9())
p=new H.a_([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){o=u[s]
r=o.gaX()
n=p.j(0,o.gaX())
p.k(0,r,n==null?1:n)}m=H.e([],[A.ay])
p.F(0,new O.ha(j,m))
C.a.bo(m,new O.hb())
l=new H.a_([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.y)(i),++s){o=i[s]
t=o.gaX()
r=l.j(0,o.gaX())
l.k(0,t,r==null?1:r)}k=H.e([],[A.az])
l.F(0,new O.hc(j,k))
C.a.bo(k,new O.hd())
i=C.d.a_(j.e.a.length+3,4)
u=j.b
j.dy.e
return A.mM(u!=null,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
a7:function(a,b){H.m(a,"$ib",[T.cI],"$ab")
if(b!=null)if(!C.a.a1(a,b)){b.a=a.length
C.a.h(a,b)}},
ac:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.ap(u,u.length,[H.t(u,0)]);u.v();){t=u.d
t.toString
s=$.iD
if(s==null)s=$.iD=new V.M(0,0,1)
t.a=s
r=$.iC
t.d=r==null?$.iC=new V.M(0,1,0):r
r=$.iB
t.e=r==null?$.iB=new V.M(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.aA(s)
r=s.a
p=s.b
o=s.c
if(typeof o!=="number")return o.m()
t.a=s.w(0,Math.sqrt(r*r+p*p+o*o))
o=q.aA(t.d)
p=o.a
r=o.b
s=o.c
if(typeof s!=="number")return s.m()
t.d=o.w(0,Math.sqrt(p*p+r*r+s*s))
s=q.aA(t.e)
r=s.a
p=s.b
o=s.c
if(typeof o!=="number")return o.m()
t.e=s.w(0,Math.sqrt(r*r+p*p+o*o))}}}},
iy:function(b6,b7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.cE()
u=b6.fr.j(0,b5.aw)
if(u==null){u=A.mL(b5,b6.a)
t=u.b
if(t.length===0)H.z(P.C("May not cache a shader with no name."))
if(b6.fr.bd(0,t))H.z(P.C('Shader cache already contains a shader by the name "'+t+'".'))
b6.fr.k(0,t,u)}b5=b4.a=u
b7.e=null}s=b5.z
r=s.da
b5=b7.e
if(!(b5 instanceof Z.dc))b5=b7.e=null
if(b5==null||!b5.d.n(0,r)){b5=s.k3
if(b5)b7.d.aL()
q=s.k4
if(q){p=b7.d
o=p.e
if(o!=null)++o.d
p.d.bQ()
p.a.bQ()
p=p.e
if(p!=null)p.ao(0)}p=s.r2
if(p){o=b7.d
n=o.e
if(n!=null)++n.d
o.a.hH()
o=o.e
if(o!=null)o.ao(0)}m=b7.d.hG(new Z.iN(b6.a),r)
m.aM($.bn()).e=b4.a.Q.c
if(b5)m.aM($.bm()).e=b4.a.cx.c
if(q)m.aM($.bl()).e=b4.a.ch.c
if(s.r1)m.aM($.bo()).e=b4.a.cy.c
if(p)m.aM($.bI()).e=b4.a.db.c
if(s.rx)m.aM($.bk()).e=b4.a.dx.c
b7.e=m}b5=T.cI
l=H.e([],[b5])
q=b4.a
p=b6.a
p.useProgram(q.r)
q.x.hV()
if(s.dy){q=b4.a
o=b6.dx
o=o.gV(o)
q=q.dy
q.toString
q.aj(o.ab(0,!0))}if(s.fr){q=b4.a
o=b6.cx
if(o==null){o=b6.db
o=o.gV(o)
n=b6.dx
n=b6.cx=o.m(0,n.gV(n))
o=n}q=q.fr
q.toString
q.aj(o.ab(0,!0))}q=b4.a
o=b6.ch
if(o==null){o=b6.giw()
n=b6.dx
n=b6.ch=o.m(0,n.gV(n))
o=n}q=q.fy
q.toString
q.aj(o.ab(0,!0))
if(s.ry){q=b4.a
o=b4.b
q=q.k1
q.toString
q.aj(o.ab(0,!0))}if(s.x1){q=b4.a
o=b4.c
q=q.k2
q.toString
q.aj(C.o.ab(o,!0))}if(s.x2){q=b4.a
o=b4.d
q=q.k3
q.toString
q.aj(C.o.ab(o,!0))}if(s.y2>0){k=b4.e.a.length
q=b4.a.k4
C.c.bk(q.a,q.d,k)
for(q=[P.x],j=0;j<k;++j){o=b4.a
n=b4.e.a
if(j>=n.length)return H.d(n,j)
n=n[j]
o.toString
H.f(n,"$iaa")
o=o.r1
if(j>=o.length)return H.d(o,j)
o=o[j]
i=new Float32Array(H.c4(H.m(n.ab(0,!0),"$ib",q,"$ab")))
C.c.e_(o.a,o.d,!1,i)}}q=s.a
if(q.a){o=b4.a
n=b4.f.f
o=o.r2
C.c.U(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.a7(l,b4.f.d)
q=b4.a
o=b4.f.d
q.ag(q.rx,o)}if(s.id){q=s.b
if(q.a){o=b4.a
n=b4.r.f
o=o.x1
C.c.U(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.a7(l,b4.r.d)
q=b4.a
o=b4.r.d
q.ag(q.x2,o)}q=s.c
if(q.a){o=b4.a
n=b4.x.f
o=o.y2
C.c.U(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.a7(l,b4.x.d)
q=b4.a
o=b4.x.d
q.ag(q.aw,o)}q=s.d
if(q.a){o=b4.a
n=b4.y.f
o=o.dc
C.c.U(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.a7(l,b4.y.d)
q=b4.a
o=b4.y.d
q.ag(q.dd,o)}q=s.e
o=q.a
if(o||q.b||!1){n=b4.a
h=b4.z.ch
n=n.dg
C.c.Z(n.a,n.d,h)}if(o){o=b4.a
n=b4.z.f
o=o.de
C.c.U(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.a7(l,b4.z.d)
q=b4.a
o=b4.z.d
q.ag(q.df,o)}q=s.z
if(q.length>0){o=b6.db
g=o.gV(o)
o=P.k
f=new H.a_([o,o])
for(o=b4.dx.e,n=o.length,e=0;e<o.length;o.length===n||(0,H.y)(o),++e){d=o[e]
c=f.j(0,0)
if(c==null)c=0
f.k(0,0,c+1)
b=J.d6(b4.a.bW.j(0,0),c)
h=g.aA(d.a)
a=h.a
a0=h.b
a1=h.c
if(typeof a1!=="number")return a1.m()
a1=h.w(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
h=a1.b
a1=a1.c
C.c.U(a0.a,a0.d,a,h,a1)
a1=d.c
h=b.f
C.c.U(h.a,h.d,a1.a,a1.b,a1.c)}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.y)(q),++e){n=q[e].a
k=f.j(0,n)
if(k==null)k=0
n=b4.a.bV.j(0,n)
C.c.bk(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=b6.db
g=o.gV(o)
o=P.k
a2=new H.a_([o,o])
for(o=b4.dx.f,n=o.length,h=[b5],a=[P.x],e=0;e<o.length;o.length===n||(0,H.y)(o),++e){d=o[e]
a3=d.gaX()
c=a2.j(0,a3)
if(c==null)c=0
a2.k(0,a3,c+1)
b=J.d6(b4.a.bY.j(0,a3),c)
a4=g.m(0,d.gV(d))
a0=d.gV(d)
a1=$.cB
a0=a0.ce(a1==null?$.cB=new V.ai(0,0,0):a1)
a1=b.b
C.c.U(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=$.cB
a0=a4.ce(a0==null?$.cB=new V.ai(0,0,0):a0)
a1=b.c
C.c.U(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gau(d)
a1=b.e
C.c.U(a1.a,a1.d,a0.a,a0.b,a0.c)
d.gaz()
a0=a4.be(0)
a1=a0.a
a5=a0.b
a6=a0.c
a7=a0.e
a8=a0.f
a9=a0.r
b0=a0.y
b1=a0.z
a0=a0.Q
b2=b.d
b2.toString
i=new Float32Array(H.c4(H.m(new V.aK(a1,a5,a6,a7,a8,a9,b0,b1,a0).ab(0,!0),"$ib",a,"$ab")))
C.c.dZ(b2.a,b2.d,!1,i)
d.gaz()
a0=d.gaz()
H.m(l,"$ib",h,"$ab")
if(!C.a.a1(l,a0)){a0.a=l.length
C.a.h(l,a0)}a0=d.gaz()
a1=a0.gaZ(a0)
if(a1){a1=b.f
a1.toString
a5=a0.gaZ(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.gi2(a0)
a1.a.uniform1i(a1.d,a0)}}d.gaS()
a0=d.ge6()
a1=b.x
a1.toString
a5=a0.ghR(a0)
a6=a0.ghS(a0)
a7=a0.ghT()
a0=a0.ghQ()
C.c.dY(a1.a,a1.d,a5,a6,a7,a0)
a0=d.gaS()
if(!C.a.a1(l,a0)){a0.a=l.length
C.a.h(l,a0)}a0=d.gaS()
a1=a0.gaZ(a0)
if(a1){a1=b.r
a1.toString
a5=a0.gaZ(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.gi2(a0)
a1.a.uniform1i(a1.d,a0)}}if(d.ghW()){a0=d.ghC()
a1=b.y
C.c.Z(a1.a,a1.d,a0)
a0=d.ghD()
a1=b.z
C.c.Z(a1.a,a1.d,a0)
a0=d.ghE()
a1=b.Q
C.c.Z(a1.a,a1.d,a0)}}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.y)(q),++e){n=q[e].a
k=a2.j(0,n)
if(k==null)k=0
n=b4.a.bX.j(0,n)
C.c.bk(n.a,n.d,k)}}q=s.ch
if(q.length>0){o=b6.db
g=o.gV(o)
o=P.k
b3=new H.a_([o,o])
for(o=b4.dx.r,n=o.length,b5=[b5],e=0;e<o.length;o.length===n||(0,H.y)(o),++e){d=o[e]
a3=d.gaX()
c=b3.j(0,a3)
if(c==null)c=0
b3.k(0,a3,c+1)
b=J.d6(b4.a.c_.j(0,a3),c)
h=d.giv(d)
a=b.b
C.c.U(a.a,a.d,h.a,h.b,h.c)
h=d.giQ(d).j1()
a=b.c
C.c.U(a.a,a.d,h.a,h.b,h.c)
h=g.ce(d.giv(d))
a=b.d
C.c.U(a.a,a.d,h.a,h.b,h.c)
h=d.gau(d)
a=b.e
C.c.U(a.a,a.d,h.a,h.b,h.c)
d.gaz()
h=d.gj4()
a=b.f
C.c.U(a.a,a.d,h.a,h.b,h.c)
h=d.gcb(d)
a=b.r
C.c.U(a.a,a.d,h.a,h.b,h.c)
h=d.gj2()
a=b.x
C.c.Z(a.a,a.d,h)
h=d.gj3()
a=b.y
C.c.Z(a.a,a.d,h)
d.gaz()
h=d.gaz()
H.m(l,"$ib",b5,"$ab")
if(!C.a.a1(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gaz()
a=h.gaZ(h)
if(a){a=b.dx
a.toString
a0=h.d
if(!a0)a.a.uniform1i(a.d,0)
else{h=h.a
a.a.uniform1i(a.d,h)}}d.gaS()
h=d.ge6()
a=b.z
a.toString
a0=h.ghR(h)
a1=h.ghS(h)
a5=h.ghT()
h=h.ghQ()
C.c.dY(a.a,a.d,a0,a1,a5,h)
h=d.gaS()
if(!C.a.a1(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gaS()
a=h.gaZ(h)
if(a){a=b.dy
a.toString
a0=h.d
if(!a0)a.a.uniform1i(a.d,0)
else{h=h.a
a.a.uniform1i(a.d,h)}}if(d.giR()){h=d.giP()
a=b.Q
C.c.Z(a.a,a.d,h)
h=d.giO()
a=b.ch
C.c.Z(a.a,a.d,h)}if(d.ghW()){h=d.ghC()
a=b.cx
C.c.Z(a.a,a.d,h)
h=d.ghD()
a=b.cy
C.c.Z(a.a,a.d,h)
h=d.ghE()
a=b.db
C.c.Z(a.a,a.d,h)}}for(b5=q.length,e=0;e<q.length;q.length===b5||(0,H.y)(q),++e){o=q[e].a
k=b3.j(0,o)
if(k==null)k=0
o=b4.a.bZ.j(0,o)
C.c.bk(o.a,o.d,k)}}}if(s.f.b){b4.a7(l,b4.Q.d)
b5=b4.a
q=b4.Q.d
b5.ag(b5.dh,q)}if(s.dx){b5=b4.a
q=b6.Q
if(q==null){q=b6.db
q=b6.Q=q.gV(q).be(0)}b5=b5.id
b5.toString
b5.aj(q.ab(0,!0))}if(s.cy){b4.a7(l,b4.ch)
b5=b4.a
q=b4.ch
b5.hc(b5.di,q)
b5=s.r
if(b5.a){q=b4.a
o=b4.cx.f
q=q.dj
C.c.U(q.a,q.d,o.a,o.b,o.c)}if(b5.b){b4.a7(l,b4.cx.d)
b5=b4.a
q=b4.cx.d
b5.ag(b5.dk,q)}b5=s.x
q=b5.a
if(q||b5.b||!1){o=b4.a
n=b4.cy.ch
o=o.dl
C.c.Z(o.a,o.d,n)}if(q){q=b4.a
o=b4.cy.f
q=q.dm
C.c.U(q.a,q.d,o.a,o.b,o.c)}if(b5.b){b4.a7(l,b4.cy.d)
b5=b4.a
q=b4.cy.d
b5.ag(b5.dn,q)}}b5=s.y
q=b5.a
o=!q
if(!o||b5.b||!1){if(q){q=b4.a
n=b4.db.f
q=q.dq
C.c.Z(q.a,q.d,n)}if(b5.b){b4.a7(l,b4.db.d)
q=b4.a
n=b4.db.d
q.ag(q.dr,n)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j){q=l[j]
if(!q.c&&q.d){q.c=!0
p.activeTexture(33984+q.a)
p.bindTexture(3553,q.b)}}q=b7.e
q.bN(b6)
q.aQ(b6)
q.iK(b6)
if(!o||b5.b||!1)p.disable(3042)
for(j=0;j<l.length;++j){b5=l[j]
if(b5.c){b5.c=!1
p.activeTexture(33984+b5.a)
p.bindTexture(3553,null)}}b5=b4.a
b5.toString
p.useProgram(null)
b5.x.hP()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cE().aw},
seC:function(a){this.e=H.m(a,"$iY",[V.aa],"$aY")}}
O.h8.prototype={
$2:function(a,b){H.a0(a)
H.a0(b)
if(typeof b!=="number")return b.u()
return C.a.h(this.b,new A.aw(a,C.d.a_(b+3,4)*4))},
$S:10}
O.h9.prototype={
$2:function(a,b){H.f(a,"$iaw")
H.f(b,"$iaw")
return J.k7(a.a,b.a)},
$S:47}
O.ha.prototype={
$2:function(a,b){H.a0(a)
H.a0(b)
if(typeof b!=="number")return b.u()
return C.a.h(this.b,new A.ay(a,C.d.a_(b+3,4)*4))},
$S:10}
O.hb.prototype={
$2:function(a,b){H.f(a,"$iay")
H.f(b,"$iay")
return J.k7(a.a,b.a)},
$S:48}
O.hc.prototype={
$2:function(a,b){H.a0(a)
H.a0(b)
if(typeof b!=="number")return b.u()
return C.a.h(this.b,new A.az(a,C.d.a_(b+3,4)*4))},
$S:10}
O.hd.prototype={
$2:function(a,b){H.f(a,"$iaz")
H.f(b,"$iaz")
return J.k7(a.a,b.a)},
$S:49}
O.h2.prototype={
as:function(){var u,t=this
t.cl()
u=t.f
if(!(Math.abs(u-1)<$.I().a)){t.f=1
u=new D.H(t.b,u,1,[P.x])
u.b=!0
t.a.W(u)}}}
O.ct.prototype={
W:function(a){return this.a.W(H.f(a,"$iB"))},
bB:function(){return this.W(null)},
as:function(){},
bI:function(a){var u,t,s=this
if(!s.c.n(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.as()
u=s.a
u.a=null
u.W(null)}},
sdU:function(a){var u,t=this,s=t.c
if(!s.b)t.bI(new A.ae(s.a,!0,!1))
s=t.d
if(s!==a){if(s!=null)s.gp().T(0,t.gb9())
u=t.d
t.d=a
a.gp().h(0,t.gb9())
s=new D.H(t.b+".texture2D",u,t.d,[T.dR])
s.b=!0
t.a.W(s)}}}
O.h3.prototype={}
O.b3.prototype={
cX:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.H(s.b+".color",u,a,[V.Z])
t.b=!0
s.a.W(t)}},
as:function(){this.cl()
this.cX(new V.Z(1,1,1))},
sau:function(a,b){this.bI(new A.ae(!0,this.c.b,!1))
this.cX(b)}}
O.h5.prototype={}
O.h6.prototype={
as:function(){var u,t=this
t.cm()
u=t.ch
if(!(Math.abs(u-1)<$.I().a)){t.ch=1
u=new D.H(t.b+".refraction",u,1,[P.x])
u.b=!0
t.a.W(u)}}}
O.h7.prototype={
cY:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.I().a)){u.ch=a
t=new D.H(u.b+".shininess",t,a,[P.x])
t.b=!0
u.a.W(t)}},
as:function(){this.cm()
this.cY(100)}}
O.bZ.prototype={}
T.cI.prototype={}
T.dR.prototype={}
T.i2.prototype={
gp:function(){var u=this.y
return u==null?this.y=D.Q():u}}
T.i3.prototype={
i8:function(a,b,c){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,10497)
r.texParameteri(s,10243,10497)
r.texParameteri(s,10241,9987)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.i2()
t.a=0
t.b=q
t.d=t.c=!1
r=W.o
W.a6(u,"load",H.n(new T.i4(this,t,u,!1,q,!1,!0),{func:1,ret:-1,args:[r]}),!1,r)
return t},
ha:function(a,b,c){var u,t,s,r
b=V.kJ(b)
u=V.kJ(a.width)
t=V.kJ(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kb()
s.width=u
s.height=t
r=H.f(C.i.e3(s,"2d"),"$ich")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oe(r.getImageData(0,0,s.width,s.height))}}}
T.i4.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.ha(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.c.iE(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.hU()}++s.e},
$S:14}
V.f_.prototype={
aO:function(a,b){return!0},
i:function(a){return"all"},
$ibe:1}
V.be.prototype={}
V.dx.prototype={
aO:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)if(u[s].aO(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.y)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sar:function(a){this.a=H.m(a,"$ib",[V.be],"$ab")},
$ibe:1}
V.bg.prototype={
aO:function(a,b){return!this.ea(0,b)},
i:function(a){return"!["+this.ck(0)+"]"}}
V.hH.prototype={
ee:function(a){var u,t
if(a.a.length<=0)throw H.c(P.C("May not create a SetMatcher with zero characters."))
u=new H.a_([P.k,P.X])
for(t=new H.dv(a,a.gl(a),[H.av(a,"v",0)]);t.v();)u.k(0,t.d,!0)
this.shb(u)},
aO:function(a,b){return this.a.bd(0,b)},
i:function(a){var u=this.a
return P.cH(u.gam(u),0,null)},
shb:function(a){this.a=H.m(a,"$iw",[P.k,P.X],"$aw")},
$ibe:1}
V.cF.prototype={
q:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cK(this.a.M(0,b))
r.sar(H.e([],[V.be]))
r.c=!1
C.a.h(this.c,r)
return r},
hZ:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(r.aO(0,a))return r}return},
i:function(a){return this.b},
shu:function(a){this.c=H.m(a,"$ib",[V.cK],"$ab")}}
V.dT.prototype={
i:function(a){var u=H.lY(this.b,"\n","\\n"),t=H.lY(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cJ.prototype={
i:function(a){return this.b},
sh5:function(a){var u=P.i
this.c=H.m(a,"$iw",[u,u],"$aw")}}
V.i7.prototype={
M:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cF(this,b)
u.shu(H.e([],[V.cK]))
u.d=null
this.a.k(0,b,u)}return u},
b3:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cJ(a)
u=P.i
t.sh5(new H.a_([u,u]))
this.b.k(0,a,t)}return t},
iJ:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.e([],[V.dT]),k=this.c,j=[P.k],i=H.e([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.D(a,s)
q=k.hZ(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cH(i,0,m)
throw H.c(P.C("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.e([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cH(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.dT(n==null?o.b:n,p,s)}++s}}},
shk:function(a){this.a=H.m(a,"$iw",[P.i,V.cF],"$aw")},
shn:function(a){this.b=H.m(a,"$iw",[P.i,V.cJ],"$aw")}}
V.cK.prototype={
i:function(a){return this.b.b+": "+this.ck(0)}}
X.de.prototype={$icw:1}
X.fI.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.Q():u}}
X.dE.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.Q():u},
aH:function(a){var u
H.f(a,"$iB")
u=this.f
if(u!=null)u.B(a)},
ew:function(){return this.aH(null)},
saP:function(a){var u,t,s=this
if(!J.T(s.b,a)){u=s.b
if(u!=null)u.gp().T(0,s.gcs())
t=s.b
s.b=a
if(a!=null)a.gp().h(0,s.gcs())
u=new D.H("mover",t,s.b,[U.a5])
u.b=!0
s.aH(u)}},
$icw:1,
$ide:1}
X.dP.prototype={}
V.fe.prototype={
hx:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=this
H.n(c,{func:1,ret:-1,args:[P.X]})
if(l.c==null)return
u=l.d.length
t=P.kq().gbi().j(0,l.a)
if(t==null||t.length<=u){s=!0
r=!1}else{if(u>=t.length)return H.d(t,u)
r=t[u]==="1"
s=!1}c.$1(r)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
J.kO(l.c).h(0,p)
n=W.mA("checkbox")
n.checked=r
o=W.o
W.a6(n,"change",H.n(new V.ff(l,c,n,u),{func:1,ret:-1,args:[o]}),!1,o)
p.appendChild(n)
m=q.createElement("span")
m.textContent=b
p.appendChild(m)
J.kO(l.c).h(0,q.createElement("br"))
C.a.h(l.d,n)
if(s)l.d1(u,r)},
d1:function(a,b){var u,t,s,r,q,p=this.a,o=P.kq().gbi().j(0,p)
if(o==null)o=""
u=o.length
if(u<a)o=C.b.im(o,a-u+1,"0")
t=a>0?C.b.t(o,0,a):""
t+=H.F(b)?"1":"0"
u=a+1
if(u<o.length)t+=C.b.a5(o,u)
s=P.kq()
u=P.i
r=P.mG(s.gbi(),u,u)
r.k(0,p,t)
q=s.dQ(0,r)
p=window.history
u=q.i(0)
p.toString
p.replaceState(new P.jo([],[]).cf(""),"",u)},
seF:function(a){this.d=H.m(a,"$ib",[W.ci],"$ab")}}
V.ff.prototype={
$1:function(a){var u=this,t=u.c
u.b.$1(t.checked)
u.a.d1(u.d,t.checked)},
$S:14}
V.k2.prototype={
$1:function(a){var u
H.f(a,"$ib6")
u=C.e.dX(this.a.gi0(),2)
if(u!=="0.00")P.kK(u+" fps")},
$S:51}
V.hL.prototype={
eg:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a6(q,"scroll",H.n(new V.hN(o),{func:1,ret:-1,args:[r]}),!1,r)},
d4:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.i],"$ab")
this.he()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.iJ(C.a.i6(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
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
if(H.oB(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.L(m[1])
l.textContent=H.L(m[0])
t.appendChild(l)}else{k=P.jy(C.O,n,C.h,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.l(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
hy:function(a){var u,t,s,r,q,p,o,n="auto"
H.m(a,"$ib",[P.i],"$ab")
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
s=H.f(r.insertCell(-1),"$ibh").style
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
o=H.f(r.insertCell(-1),"$ibh")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
he:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.i7()
t=P.i
u.shk(new H.a_([t,V.cF]))
u.shn(new H.a_([t,V.cJ]))
u.c=null
u.c=u.M(0,q)
t=u.M(0,q).q(0,p)
s=V.ak(new H.a4("*"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,p).q(0,p)
s=new V.bg()
r=[V.be]
s.sar(H.e([],r))
C.a.h(t.a,s)
t=V.ak(new H.a4("*"))
C.a.h(s.a,t)
t=u.M(0,p).q(0,"BoldEnd")
s=V.ak(new H.a4("*"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,q).q(0,o)
s=V.ak(new H.a4("_"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,o).q(0,o)
s=new V.bg()
s.sar(H.e([],r))
C.a.h(t.a,s)
t=V.ak(new H.a4("_"))
C.a.h(s.a,t)
t=u.M(0,o).q(0,n)
s=V.ak(new H.a4("_"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,q).q(0,m)
s=V.ak(new H.a4("`"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,m).q(0,m)
s=new V.bg()
s.sar(H.e([],r))
C.a.h(t.a,s)
t=V.ak(new H.a4("`"))
C.a.h(s.a,t)
t=u.M(0,m).q(0,"CodeEnd")
s=V.ak(new H.a4("`"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,q).q(0,l)
s=V.ak(new H.a4("["))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,l).q(0,k)
s=V.ak(new H.a4("|"))
C.a.h(t.a,s)
s=u.M(0,l).q(0,j)
t=V.ak(new H.a4("]"))
C.a.h(s.a,t)
s.c=!0
s=u.M(0,l).q(0,l)
t=new V.bg()
t.sar(H.e([],r))
C.a.h(s.a,t)
s=V.ak(new H.a4("|]"))
C.a.h(t.a,s)
s=u.M(0,k).q(0,j)
t=V.ak(new H.a4("]"))
C.a.h(s.a,t)
s.c=!0
s=u.M(0,k).q(0,k)
t=new V.bg()
t.sar(H.e([],r))
C.a.h(s.a,t)
s=V.ak(new H.a4("|]"))
C.a.h(t.a,s)
C.a.h(u.M(0,q).q(0,i).a,new V.f_())
s=u.M(0,i).q(0,i)
t=new V.bg()
t.sar(H.e([],r))
C.a.h(s.a,t)
s=V.ak(new H.a4("*_`["))
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
$1:function(a){P.lh(C.n,new V.hM(this.a))},
$S:14}
V.hM.prototype={
$0:function(){var u=C.e.ai(document.documentElement.scrollTop),t=this.a.style,s=H.l(-0.01*u)+"px"
t.top=s},
$S:2}
X.jZ.prototype={
$1:function(a){var u,t,s,r,q
H.f(a,"$iB")
u=this.a
t=-this.b.c.d
s=Math.cos(t)
r=Math.sin(t)
t=new V.aK(s,0,-r,0,1,0,r,0,s)
if(!J.T(u.z,t)){q=u.z
u.z=t
u.Q=t.be(0)
t=new D.H("velocityRotation",q,u.z,[V.aK])
t.b=!0
u.I(t)}},
$S:8}
X.k_.prototype={
$1:function(a){this.a.r.r=a},
$S:52};(function aliases(){var u=J.a.prototype
u.e8=u.i
u=J.ds.prototype
u.e9=u.i
u=O.ct.prototype
u.cl=u.as
u=O.b3.prototype
u.cm=u.as
u=V.dx.prototype
u.ea=u.aO
u.ck=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"o8","nl",12)
u(P,"o9","nm",12)
u(P,"oa","nn",12)
t(P,"lL","o6",3)
var n
s(n=E.ao.prototype,"gdH",0,0,null,["$1","$0"],["dI","ik"],0,0)
s(n,"gdJ",0,0,null,["$1","$0"],["dK","il"],0,0)
s(n,"gdF",0,0,null,["$1","$0"],["dG","ij"],0,0)
s(n,"gdD",0,0,null,["$1","$0"],["dE","ig"],0,0)
r(n,"gic","ie",5)
r(n,"gih","ii",5)
s(n=E.dS.prototype,"gco",0,0,null,["$1","$0"],["cq","cp"],0,0)
q(n,"giA","dR",3)
p(n=X.dt.prototype,"gek","el",30)
r(n,"gei","ej",24)
r(n,"gem","en",24)
p(n,"gbp","bq",1)
p(n,"gbC","bD",1)
p(n=X.dZ.prototype,"gfv","fw",13)
p(n,"gfi","fj",13)
p(n,"gfo","fp",4)
p(n,"gbC","bD",15)
p(n,"gbp","bq",15)
p(n,"gfD","fE",4)
p(n,"gfH","fI",4)
p(n,"gft","fu",4)
p(n,"gfF","fG",4)
p(n,"gfq","fs",4)
p(n,"gfJ","fK",36)
p(n,"gfL","fM",13)
p(n,"gfX","fY",11)
p(n,"gfT","fU",11)
p(n,"gfV","fW",11)
s(D.br.prototype,"gep",0,0,null,["$1","$0"],["ap","eq"],0,0)
s(n=D.du.prototype,"gcQ",0,0,null,["$1","$0"],["cR","fB"],0,0)
p(n,"gfN","fO",38)
r(n,"gfc","fd",20)
r(n,"gfR","fS",20)
o(V.a3.prototype,"gl","c4",19)
o(V.M.prototype,"gl","c4",19)
s(n=U.cp.prototype,"gaE",0,0,null,["$1","$0"],["I","a6"],0,0)
r(n,"gfa","fb",18)
r(n,"gfP","fQ",18)
s(n=U.e_.prototype,"gaE",0,0,null,["$1","$0"],["I","a6"],0,0)
p(n,"gf4","f5",1)
p(n,"gf6","f7",1)
p(n,"gf8","f9",1)
p(n,"gf0","f1",1)
p(n,"gf2","f3",1)
p(n,"ghs","ht",1)
p(n,"ghq","hr",1)
p(n,"gho","hp",1)
s(n=U.e0.prototype,"gaE",0,0,null,["$1","$0"],["I","a6"],0,0)
p(n,"gfz","fA",1)
s(n=M.dk.prototype,"gaF",0,0,null,["$1","$0"],["aG","es"],0,0)
r(n,"gfk","fl",5)
r(n,"gfm","fn",5)
s(n=O.dy.prototype,"gb9",0,0,null,["$1","$0"],["W","bB"],0,0)
s(n,"gh8",0,0,null,["$1","$0"],["cV","h9"],0,0)
r(n,"gfe","ff",23)
r(n,"gfg","fh",23)
s(O.ct.prototype,"gb9",0,0,null,["$1","$0"],["W","bB"],0,0)
s(X.dE.prototype,"gcs",0,0,null,["$1","$0"],["aH","ew"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.O,null)
s(P.O,[H.ki,J.a,J.ap,P.ei,P.h,H.dv,P.b_,H.bR,H.cN,H.fj,H.ic,P.bt,H.cj,H.ez,P.ag,H.fQ,H.fS,H.fM,P.eF,P.ba,P.aE,P.e3,P.hV,P.cG,P.hW,P.b6,P.an,P.jB,P.jk,P.cQ,P.je,P.v,P.jt,P.fZ,P.bN,P.jA,P.jz,P.X,P.at,P.a7,P.bs,P.ht,P.dO,P.eb,P.fH,P.b,P.w,P.J,P.aq,P.i,P.al,P.c3,P.is,P.jl,W.fm,W.ci,W.D,W.dn,P.jn,P.eK,P.jf,P.P,O.Y,O.cu,E.fa,E.ao,E.hz,E.dS,Z.e2,Z.iN,Z.dc,Z.bu,Z.bi,D.fd,D.bQ,D.B,X.dd,X.af,X.fO,X.fW,X.bf,X.hk,X.i8,X.dZ,D.br,D.a9,D.dF,D.dN,V.Z,V.bq,V.fz,V.aK,V.aa,V.ah,V.ai,V.cC,V.dI,V.a3,V.M,U.e_,U.e0,M.dk,A.d9,A.f3,A.ae,A.aw,A.ay,A.az,A.h4,A.c_,A.c0,A.c2,A.dV,A.il,F.a8,F.bd,F.bB,F.dL,F.hI,F.hJ,F.hK,F.aU,F.iE,F.iF,F.iI,F.iJ,O.bZ,O.ct,O.h5,T.i3,V.f_,V.be,V.dx,V.hH,V.cF,V.dT,V.cJ,V.i7,X.de,X.dP,X.dE,V.fe,V.hL])
s(J.a,[J.fL,J.dr,J.ds,J.b0,J.bT,J.bx,H.cx,H.bA,W.j,W.eZ,W.bL,W.ch,W.aY,W.aZ,W.R,W.e5,W.fq,W.fr,W.e7,W.dj,W.e9,W.ft,W.o,W.ec,W.aJ,W.fJ,W.ee,W.bc,W.fV,W.he,W.ej,W.ek,W.aL,W.el,W.eo,W.aM,W.es,W.eu,W.aO,W.ev,W.aP,W.eA,W.aA,W.eD,W.i6,W.aR,W.eG,W.ia,W.ix,W.eM,W.eO,W.eQ,W.eS,W.eU,P.b2,P.eg,P.b5,P.eq,P.hx,P.eB,P.b7,P.eI,P.f4,P.e4,P.da,P.dH,P.bY,P.dK,P.dQ,P.dW,P.ex])
s(J.ds,[J.hu,J.bF,J.by])
t(J.kh,J.b0)
s(J.bT,[J.dq,J.dp])
t(P.fU,P.ei)
s(P.fU,[H.dX,W.iW,W.iV,P.fD])
t(H.a4,H.dX)
s(P.h,[H.fw,H.h_,H.iO])
s(P.b_,[H.h0,H.iP])
t(H.fk,H.fj)
s(P.bt,[H.hq,H.fN,H.iq,H.ie,H.fc,H.hF,P.f2,P.dD,P.aW,P.ir,P.io,P.hR,P.fh,P.fp])
s(H.cj,[H.k4,H.i_,H.jU,H.jV,H.jW,P.iS,P.iR,P.iT,P.iU,P.js,P.jr,P.j1,P.j5,P.j2,P.j3,P.j4,P.j8,P.j9,P.j7,P.j6,P.hX,P.hY,P.jL,P.ji,P.jh,P.jj,P.fT,P.fY,P.fu,P.fv,P.iw,P.it,P.iu,P.iv,P.ju,P.jv,P.jx,P.jw,P.jF,P.jE,P.jG,P.jH,W.hg,W.hi,W.hE,W.hU,W.j0,P.jp,P.jN,P.fE,P.fF,P.f6,E.hA,E.hB,E.hC,E.i5,D.fA,D.fB,F.jC,F.jR,F.jS,F.iL,F.iK,F.iG,F.iH,O.h8,O.h9,O.ha,O.hb,O.hc,O.hd,T.i4,V.ff,V.k2,V.hN,V.hM,X.jZ,X.k_])
s(H.i_,[H.hS,H.cf])
t(H.iQ,P.f2)
t(P.fX,P.ag)
t(H.a_,P.fX)
t(H.fR,H.fw)
t(H.dA,H.bA)
s(H.dA,[H.cR,H.cT])
t(H.cS,H.cR)
t(H.cy,H.cS)
t(H.cU,H.cT)
t(H.dB,H.cU)
s(H.dB,[H.hl,H.hm,H.hn,H.ho,H.hp,H.dC,H.cz])
t(P.jg,P.jB)
t(P.jd,P.jk)
t(P.eL,P.fZ)
t(P.dY,P.eL)
s(P.bN,[P.f8,P.fx])
t(P.bP,P.hW)
s(P.bP,[P.f9,P.iA,P.iz])
t(P.iy,P.fx)
s(P.a7,[P.x,P.k])
s(P.aW,[P.bX,P.fK])
t(P.iY,P.c3)
s(W.j,[W.G,W.fC,W.cv,W.aN,W.cV,W.aQ,W.aB,W.cX,W.iM,W.cO,P.f7,P.bK])
s(W.G,[W.a1,W.bp])
s(W.a1,[W.q,P.p])
s(W.q,[W.f0,W.f1,W.bM,W.dh,W.fG,W.cq,W.cr,W.hG,W.bh])
s(W.aY,[W.cl,W.fn,W.fo])
t(W.fl,W.aZ)
t(W.cm,W.e5)
t(W.e8,W.e7)
t(W.di,W.e8)
t(W.ea,W.e9)
t(W.fs,W.ea)
t(W.ax,W.bL)
t(W.ed,W.ec)
t(W.cn,W.ed)
t(W.ef,W.ee)
t(W.bS,W.ef)
t(W.bE,W.o)
s(W.bE,[W.b1,W.ab,W.aS])
t(W.hf,W.ej)
t(W.hh,W.ek)
t(W.em,W.el)
t(W.hj,W.em)
t(W.ep,W.eo)
t(W.cA,W.ep)
t(W.et,W.es)
t(W.hv,W.et)
t(W.hD,W.eu)
t(W.cW,W.cV)
t(W.hO,W.cW)
t(W.ew,W.ev)
t(W.hP,W.ew)
t(W.hT,W.eA)
t(W.eE,W.eD)
t(W.i0,W.eE)
t(W.cY,W.cX)
t(W.i1,W.cY)
t(W.eH,W.eG)
t(W.i9,W.eH)
t(W.b9,W.ab)
t(W.eN,W.eM)
t(W.iX,W.eN)
t(W.e6,W.dj)
t(W.eP,W.eO)
t(W.ja,W.eP)
t(W.eR,W.eQ)
t(W.en,W.eR)
t(W.eT,W.eS)
t(W.jm,W.eT)
t(W.eV,W.eU)
t(W.jq,W.eV)
t(W.iZ,P.hV)
t(W.ku,W.iZ)
t(W.j_,P.cG)
t(P.jo,P.jn)
t(P.aj,P.jf)
t(P.eh,P.eg)
t(P.fP,P.eh)
t(P.er,P.eq)
t(P.hr,P.er)
t(P.eC,P.eB)
t(P.hZ,P.eC)
t(P.eJ,P.eI)
t(P.ib,P.eJ)
t(P.f5,P.e4)
t(P.hs,P.bK)
t(P.ey,P.ex)
t(P.hQ,P.ey)
s(E.fa,[Z.db,A.cE,T.cI])
s(D.B,[D.bv,D.bw,D.H,X.bU,X.hw])
s(O.Y,[X.dt,D.du,U.cp])
s(X.hw,[X.dw,X.bz,X.dU])
s(D.fd,[U.fg,U.a5])
s(U.a5,[U.ck,U.dJ])
t(A.h1,A.cE)
s(A.dV,[A.aC,A.ii,A.ij,A.ik,A.ig,A.ad,A.ih,A.V,A.cL,A.im,A.cM,A.au,A.am,A.c1])
t(O.dy,O.bZ)
s(O.ct,[O.h2,O.h3,O.b3])
s(O.b3,[O.h6,O.h7])
t(T.dR,T.cI)
t(T.i2,T.dR)
s(V.dx,[V.bg,V.cK])
t(X.fI,X.dP)
u(H.dX,H.cN)
u(H.cR,P.v)
u(H.cS,H.bR)
u(H.cT,P.v)
u(H.cU,H.bR)
u(P.ei,P.v)
u(P.eL,P.jt)
u(W.e5,W.fm)
u(W.e7,P.v)
u(W.e8,W.D)
u(W.e9,P.v)
u(W.ea,W.D)
u(W.ec,P.v)
u(W.ed,W.D)
u(W.ee,P.v)
u(W.ef,W.D)
u(W.ej,P.ag)
u(W.ek,P.ag)
u(W.el,P.v)
u(W.em,W.D)
u(W.eo,P.v)
u(W.ep,W.D)
u(W.es,P.v)
u(W.et,W.D)
u(W.eu,P.ag)
u(W.cV,P.v)
u(W.cW,W.D)
u(W.ev,P.v)
u(W.ew,W.D)
u(W.eA,P.ag)
u(W.eD,P.v)
u(W.eE,W.D)
u(W.cX,P.v)
u(W.cY,W.D)
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
u(P.eg,P.v)
u(P.eh,W.D)
u(P.eq,P.v)
u(P.er,W.D)
u(P.eB,P.v)
u(P.eC,W.D)
u(P.eI,P.v)
u(P.eJ,W.D)
u(P.e4,P.ag)
u(P.ex,P.v)
u(P.ey,W.D)})();(function constants(){var u=hunkHelpers.makeConstList
C.i=W.bM.prototype
C.J=J.a.prototype
C.a=J.b0.prototype
C.K=J.dp.prototype
C.d=J.dq.prototype
C.o=J.dr.prototype
C.e=J.bT.prototype
C.b=J.bx.prototype
C.L=J.by.prototype
C.R=W.cA.prototype
C.w=J.hu.prototype
C.c=P.bY.prototype
C.p=J.bF.prototype
C.x=W.b9.prototype
C.y=W.cO.prototype
C.S=new P.f9()
C.z=new P.f8()
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
C.h=new P.iy()
C.H=new P.iA()
C.f=new P.jg()
C.n=new P.bs(0)
C.I=new P.bs(5e6)
C.t=H.e(u([127,2047,65535,1114111]),[P.k])
C.j=H.e(u([0,0,32776,33792,1,10240,0,0]),[P.k])
C.k=H.e(u([0,0,65490,45055,65535,34815,65534,18431]),[P.k])
C.l=H.e(u([0,0,26624,1023,65534,2047,65534,2047]),[P.k])
C.N=H.e(u([0,0,32722,12287,65534,34815,65534,18431]),[P.k])
C.O=H.e(u([0,0,65498,45055,65535,34815,65534,18431]),[P.k])
C.m=H.e(u([0,0,24576,1023,65534,34815,65534,18431]),[P.k])
C.u=H.e(u([0,0,32754,11263,65534,34815,65534,18431]),[P.k])
C.P=H.e(u([0,0,32722,12287,65535,34815,65534,18431]),[P.k])
C.v=H.e(u([0,0,65490,12287,65535,34815,65534,18431]),[P.k])
C.M=H.e(u([]),[P.i])
C.Q=new H.fk(0,{},C.M,[P.i,P.i])})()
var v={mangledGlobalNames:{k:"int",x:"double",a7:"num",i:"String",X:"bool",J:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.B]},{func:1,ret:-1,args:[D.B]},{func:1,ret:P.J},{func:1,ret:-1},{func:1,ret:-1,args:[W.ab]},{func:1,ret:-1,args:[P.k,[P.h,E.ao]]},{func:1,ret:P.J,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:P.J,args:[D.B]},{func:1,ret:P.J,args:[F.a8]},{func:1,ret:-1,args:[P.k,P.k]},{func:1,ret:-1,args:[W.aS]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.o]},{func:1,ret:P.J,args:[W.o]},{func:1,ret:-1,args:[W.b1]},{func:1,ret:P.J,args:[F.aU,P.x,P.x]},{func:1,ret:P.i,args:[P.k]},{func:1,ret:-1,args:[P.k,[P.h,U.a5]]},{func:1,ret:P.x},{func:1,ret:-1,args:[P.k,[P.h,D.a9]]},{func:1,ret:P.J,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[P.k,[P.h,V.aa]]},{func:1,ret:-1,args:[P.k,[P.h,X.af]]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:P.X,args:[W.G]},{func:1,ret:P.J,args:[P.a7]},{func:1,args:[W.o]},{func:1,ret:P.X,args:[[P.h,X.af]]},{func:1,ret:P.P,args:[,,]},{func:1,ret:P.P,args:[P.k]},{func:1,ret:P.J,args:[P.i,,]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:P.J,args:[P.i]},{func:1,ret:-1,args:[W.b9]},{func:1,ret:P.k,args:[P.k,P.k]},{func:1,ret:P.X,args:[[P.h,D.a9]]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:-1,args:[P.i,P.k]},{func:1,ret:[P.w,P.i,P.i],args:[[P.w,P.i,P.i],P.i]},{func:1,ret:[P.aE,,],args:[,]},{func:1,ret:P.x,args:[P.x,P.x]},{func:1,ret:P.J,args:[,],opt:[P.aq]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,args:[P.i]},{func:1,ret:P.k,args:[A.aw,A.aw]},{func:1,ret:P.k,args:[A.ay,A.ay]},{func:1,ret:P.k,args:[A.az,A.az]},{func:1,args:[,P.i]},{func:1,ret:P.J,args:[P.b6]},{func:1,ret:P.J,args:[P.X]},{func:1,ret:W.a1,args:[W.G]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aX=0
$.cg=null
$.kQ=null
$.ky=!1
$.lP=null
$.lJ=null
$.lW=null
$.jO=null
$.jX=null
$.kH=null
$.c5=null
$.d1=null
$.d2=null
$.kz=!1
$.W=C.f
$.ar=[]
$.kZ=null
$.l2=null
$.l6=null
$.cB=null
$.lc=null
$.ln=null
$.lp=null
$.iB=null
$.iC=null
$.iD=null
$.lo=null
$.l5=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oI","m1",function(){return H.lO("_$dart_dartClosure")})
u($,"oJ","kL",function(){return H.lO("_$dart_js")})
u($,"oO","m2",function(){return H.b8(H.id({
toString:function(){return"$receiver$"}}))})
u($,"oP","m3",function(){return H.b8(H.id({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oQ","m4",function(){return H.b8(H.id(null))})
u($,"oR","m5",function(){return H.b8(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oU","m8",function(){return H.b8(H.id(void 0))})
u($,"oV","m9",function(){return H.b8(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oT","m7",function(){return H.b8(H.lj(null))})
u($,"oS","m6",function(){return H.b8(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"oX","mb",function(){return H.b8(H.lj(void 0))})
u($,"oW","ma",function(){return H.b8(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pc","kM",function(){return P.nk()})
u($,"oZ","mc",function(){return P.nf()})
u($,"pd","mg",function(){return H.mO(H.c4(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.k])))})
u($,"pe","mh",function(){return P.n1("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pf","mi",function(){return P.nG()})
u($,"p5","mf",function(){return Z.aD(0)})
u($,"p_","md",function(){return Z.aD(511)})
u($,"p7","bn",function(){return Z.aD(1)})
u($,"p6","bm",function(){return Z.aD(2)})
u($,"p1","bl",function(){return Z.aD(4)})
u($,"p8","bo",function(){return Z.aD(8)})
u($,"p9","bI",function(){return Z.aD(16)})
u($,"p2","d4",function(){return Z.aD(32)})
u($,"p3","d5",function(){return Z.aD(64)})
u($,"p4","me",function(){return Z.aD(96)})
u($,"pa","ce",function(){return Z.aD(128)})
u($,"p0","bk",function(){return Z.aD(256)})
u($,"oH","m0",function(){return new V.fz(1e-9)})
u($,"oG","I",function(){return $.m0()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cx,DataView:H.bA,ArrayBufferView:H.bA,Float32Array:H.cy,Float64Array:H.cy,Int16Array:H.hl,Int32Array:H.hm,Int8Array:H.hn,Uint16Array:H.ho,Uint32Array:H.hp,Uint8ClampedArray:H.dC,CanvasPixelArray:H.dC,Uint8Array:H.cz,HTMLAudioElement:W.q,HTMLBRElement:W.q,HTMLBaseElement:W.q,HTMLBodyElement:W.q,HTMLButtonElement:W.q,HTMLContentElement:W.q,HTMLDListElement:W.q,HTMLDataElement:W.q,HTMLDataListElement:W.q,HTMLDetailsElement:W.q,HTMLDialogElement:W.q,HTMLEmbedElement:W.q,HTMLFieldSetElement:W.q,HTMLHRElement:W.q,HTMLHeadElement:W.q,HTMLHeadingElement:W.q,HTMLHtmlElement:W.q,HTMLIFrameElement:W.q,HTMLLIElement:W.q,HTMLLabelElement:W.q,HTMLLegendElement:W.q,HTMLLinkElement:W.q,HTMLMapElement:W.q,HTMLMediaElement:W.q,HTMLMenuElement:W.q,HTMLMetaElement:W.q,HTMLMeterElement:W.q,HTMLModElement:W.q,HTMLOListElement:W.q,HTMLObjectElement:W.q,HTMLOptGroupElement:W.q,HTMLOptionElement:W.q,HTMLOutputElement:W.q,HTMLParagraphElement:W.q,HTMLParamElement:W.q,HTMLPictureElement:W.q,HTMLPreElement:W.q,HTMLProgressElement:W.q,HTMLQuoteElement:W.q,HTMLScriptElement:W.q,HTMLShadowElement:W.q,HTMLSlotElement:W.q,HTMLSourceElement:W.q,HTMLSpanElement:W.q,HTMLStyleElement:W.q,HTMLTableCaptionElement:W.q,HTMLTableColElement:W.q,HTMLTableElement:W.q,HTMLTableRowElement:W.q,HTMLTableSectionElement:W.q,HTMLTemplateElement:W.q,HTMLTextAreaElement:W.q,HTMLTimeElement:W.q,HTMLTitleElement:W.q,HTMLTrackElement:W.q,HTMLUListElement:W.q,HTMLUnknownElement:W.q,HTMLVideoElement:W.q,HTMLDirectoryElement:W.q,HTMLFontElement:W.q,HTMLFrameElement:W.q,HTMLFrameSetElement:W.q,HTMLMarqueeElement:W.q,HTMLElement:W.q,AccessibleNodeList:W.eZ,HTMLAnchorElement:W.f0,HTMLAreaElement:W.f1,Blob:W.bL,HTMLCanvasElement:W.bM,CanvasRenderingContext2D:W.ch,CDATASection:W.bp,CharacterData:W.bp,Comment:W.bp,ProcessingInstruction:W.bp,Text:W.bp,CSSNumericValue:W.cl,CSSUnitValue:W.cl,CSSPerspective:W.fl,CSSCharsetRule:W.R,CSSConditionRule:W.R,CSSFontFaceRule:W.R,CSSGroupingRule:W.R,CSSImportRule:W.R,CSSKeyframeRule:W.R,MozCSSKeyframeRule:W.R,WebKitCSSKeyframeRule:W.R,CSSKeyframesRule:W.R,MozCSSKeyframesRule:W.R,WebKitCSSKeyframesRule:W.R,CSSMediaRule:W.R,CSSNamespaceRule:W.R,CSSPageRule:W.R,CSSRule:W.R,CSSStyleRule:W.R,CSSSupportsRule:W.R,CSSViewportRule:W.R,CSSStyleDeclaration:W.cm,MSStyleCSSProperties:W.cm,CSS2Properties:W.cm,CSSImageValue:W.aY,CSSKeywordValue:W.aY,CSSPositionValue:W.aY,CSSResourceValue:W.aY,CSSURLImageValue:W.aY,CSSStyleValue:W.aY,CSSMatrixComponent:W.aZ,CSSRotation:W.aZ,CSSScale:W.aZ,CSSSkew:W.aZ,CSSTranslation:W.aZ,CSSTransformComponent:W.aZ,CSSTransformValue:W.fn,CSSUnparsedValue:W.fo,DataTransferItemList:W.fq,HTMLDivElement:W.dh,DOMException:W.fr,ClientRectList:W.di,DOMRectList:W.di,DOMRectReadOnly:W.dj,DOMStringList:W.fs,DOMTokenList:W.ft,Element:W.a1,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.ax,FileList:W.cn,FileWriter:W.fC,HTMLFormElement:W.fG,Gamepad:W.aJ,History:W.fJ,HTMLCollection:W.bS,HTMLFormControlsCollection:W.bS,HTMLOptionsCollection:W.bS,ImageData:W.bc,HTMLImageElement:W.cq,HTMLInputElement:W.cr,KeyboardEvent:W.b1,Location:W.fV,MediaList:W.he,MessagePort:W.cv,MIDIInputMap:W.hf,MIDIOutputMap:W.hh,MimeType:W.aL,MimeTypeArray:W.hj,PointerEvent:W.ab,MouseEvent:W.ab,DragEvent:W.ab,Document:W.G,DocumentFragment:W.G,HTMLDocument:W.G,ShadowRoot:W.G,XMLDocument:W.G,Attr:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cA,RadioNodeList:W.cA,Plugin:W.aM,PluginArray:W.hv,RTCStatsReport:W.hD,HTMLSelectElement:W.hG,SourceBuffer:W.aN,SourceBufferList:W.hO,SpeechGrammar:W.aO,SpeechGrammarList:W.hP,SpeechRecognitionResult:W.aP,Storage:W.hT,CSSStyleSheet:W.aA,StyleSheet:W.aA,HTMLTableCellElement:W.bh,HTMLTableDataCellElement:W.bh,HTMLTableHeaderCellElement:W.bh,TextTrack:W.aQ,TextTrackCue:W.aB,VTTCue:W.aB,TextTrackCueList:W.i0,TextTrackList:W.i1,TimeRanges:W.i6,Touch:W.aR,TouchEvent:W.aS,TouchList:W.i9,TrackDefaultList:W.ia,CompositionEvent:W.bE,FocusEvent:W.bE,TextEvent:W.bE,UIEvent:W.bE,URL:W.ix,VideoTrackList:W.iM,WheelEvent:W.b9,Window:W.cO,DOMWindow:W.cO,CSSRuleList:W.iX,ClientRect:W.e6,DOMRect:W.e6,GamepadList:W.ja,NamedNodeMap:W.en,MozNamedAttrMap:W.en,SpeechRecognitionResultList:W.jm,StyleSheetList:W.jq,SVGLength:P.b2,SVGLengthList:P.fP,SVGNumber:P.b5,SVGNumberList:P.hr,SVGPointList:P.hx,SVGStringList:P.hZ,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGScriptElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGTransform:P.b7,SVGTransformList:P.ib,AudioBuffer:P.f4,AudioParamMap:P.f5,AudioTrackList:P.f7,AudioContext:P.bK,webkitAudioContext:P.bK,BaseAudioContext:P.bK,OfflineAudioContext:P.hs,WebGLBuffer:P.da,WebGLProgram:P.dH,WebGL2RenderingContext:P.bY,WebGLShader:P.dK,WebGLTexture:P.dQ,WebGLUniformLocation:P.dW,SQLResultSetRowList:P.hQ})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dA.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
H.cS.$nativeSuperclassTag="ArrayBufferView"
H.cy.$nativeSuperclassTag="ArrayBufferView"
H.cT.$nativeSuperclassTag="ArrayBufferView"
H.cU.$nativeSuperclassTag="ArrayBufferView"
H.dB.$nativeSuperclassTag="ArrayBufferView"
W.cV.$nativeSuperclassTag="EventTarget"
W.cW.$nativeSuperclassTag="EventTarget"
W.cX.$nativeSuperclassTag="EventTarget"
W.cY.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.lS,[])
else X.lS([])})})()
//# sourceMappingURL=test.dart.js.map
