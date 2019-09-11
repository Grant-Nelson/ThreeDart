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
a[c]=function(){a[c]=function(){H.nt(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.k6"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.k6"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.k6(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jO:function jO(){},
fy:function(){return new P.bS("No element")},
lX:function(){return new P.bS("Too many elements")},
lW:function(){return new P.bS("Too few elements")},
dD:function(a,b,c,d,e){H.l(a,"$ib",[e],"$ab")
H.k(d,{func:1,ret:P.p,args:[e,e]})
if(c-b<=32)H.mi(a,b,c,d,e)
else H.mh(a,b,c,d,e)},
mi:function(a,b,c,d,e){var u,t,s,r,q
H.l(a,"$ib",[e],"$ab")
H.k(d,{func:1,ret:P.p,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.d(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.d(a,r)
r=J.aI(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.d(a,q)
C.a.n(a,s,a[q])
s=q}C.a.n(a,s,t)}},
mh:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.l(a2,"$ib",[a6],"$ab")
H.k(a5,{func:1,ret:P.p,args:[a6,a6]})
u=C.e.V(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.e.V(a3+a4,2)
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
if(J.aI(a5.$2(n,m),0)){i=m
m=n
n=i}if(J.aI(a5.$2(k,j),0)){i=j
j=k
k=i}if(J.aI(a5.$2(n,l),0)){i=l
l=n
n=i}if(J.aI(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.aI(a5.$2(n,k),0)){i=k
k=n
n=i}if(J.aI(a5.$2(l,k),0)){i=k
k=l
l=i}if(J.aI(a5.$2(m,j),0)){i=j
j=m
m=i}if(J.aI(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.aI(a5.$2(k,j),0)){i=j
j=k
k=i}C.a.n(a2,t,n)
C.a.n(a2,r,l)
C.a.n(a2,s,j)
if(a3<0||a3>=a2.length)return H.d(a2,a3)
C.a.n(a2,q,a2[a3])
if(a4<0||a4>=a2.length)return H.d(a2,a4)
C.a.n(a2,p,a2[a4])
h=a3+1
g=a4-1
if(J.Y(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.aD()
if(d<0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.n(a2,f,a2[h])
C.a.n(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.a9()
if(d>0){--g
continue}else{c=g-1
o=a2.length
if(d<0){if(h>=o)return H.d(a2,h)
C.a.n(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.d(a2,g)
C.a.n(a2,h,a2[g])
C.a.n(a2,g,e)
g=c
h=b
break}else{if(g>=o)return H.d(a2,g)
C.a.n(a2,f,a2[g])
C.a.n(a2,g,e)
g=c
break}}}}a=!0}else{for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
a0=a5.$2(e,m)
if(typeof a0!=="number")return a0.aD()
if(a0<0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.n(a2,f,a2[h])
C.a.n(a2,h,e)}++h}else{a1=a5.$2(e,k)
if(typeof a1!=="number")return a1.a9()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.a9()
if(d>0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.aD()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.d(a2,h)
C.a.n(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.d(a2,g)
C.a.n(a2,h,a2[g])
C.a.n(a2,g,e)
h=b}else{if(g>=o)return H.d(a2,g)
C.a.n(a2,f,a2[g])
C.a.n(a2,g,e)}g=c
break}}}}a=!1}o=h-1
if(o>=a2.length)return H.d(a2,o)
C.a.n(a2,a3,a2[o])
C.a.n(a2,o,m)
o=g+1
if(o<0||o>=a2.length)return H.d(a2,o)
C.a.n(a2,a4,a2[o])
C.a.n(a2,o,k)
H.dD(a2,a3,h-2,a5,a6)
H.dD(a2,g+2,a4,a5,a6)
if(a)return
if(h<t&&g>s){while(!0){if(h>=a2.length)return H.d(a2,h)
if(!J.Y(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.d(a2,g)
if(!J.Y(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
if(a5.$2(e,m)===0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.n(a2,f,a2[h])
C.a.n(a2,h,e)}++h}else if(a5.$2(e,k)===0)for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
if(a5.$2(a2[g],k)===0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.aD()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.d(a2,h)
C.a.n(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.d(a2,g)
C.a.n(a2,h,a2[g])
C.a.n(a2,g,e)
h=b}else{if(g>=o)return H.d(a2,g)
C.a.n(a2,f,a2[g])
C.a.n(a2,g,e)}g=c
break}}}H.dD(a2,h,g,a5,a6)}else H.dD(a2,h,g,a5,a6)},
q:function q(a){this.a=a},
fc:function fc(){},
bL:function bL(){},
cn:function cn(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fM:function fM(a,b,c){this.a=a
this.b=b
this.$ti=c},
fN:function fN(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fO:function fO(a,b,c){this.a=a
this.b=b
this.$ti=c},
cG:function cG(a,b,c){this.a=a
this.b=b
this.$ti=c},
iD:function iD(a,b,c){this.a=a
this.b=b
this.$ti=c},
bJ:function bJ(){},
dO:function dO(){},
dN:function dN(){},
c8:function(a){var u,t=H.E(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
na:function(a){return v.types[H.a_(a)]},
nh:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.X(a).$iG},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aJ(a)
if(typeof u!=="string")throw H.h(H.aH(a))
return u},
cv:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bP:function(a){return H.m3(a)+H.k2(H.bA(a),0,null)},
m3:function(a){var u,t,s,r,q,p,o,n=J.X(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.I||!!n.$ibv){r=C.p(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.c8(t.length>1&&C.d.as(t,0)===36?C.d.aa(t,1):t)},
kF:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
mb:function(a){var u,t,s,r=H.c([],[P.p])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.aH(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.aU(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.h(H.aH(s))}return H.kF(r)},
kG:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.aH(s))
if(s<0)throw H.h(H.aH(s))
if(s>65535)return H.mb(a)}return H.kF(a)},
jR:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aU(u,10))>>>0,56320|u&1023)}throw H.h(P.aX(a,0,1114111,null,null))},
bO:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ma:function(a){var u=H.bO(a).getFullYear()+0
return u},
m8:function(a){var u=H.bO(a).getMonth()+1
return u},
m4:function(a){var u=H.bO(a).getDate()+0
return u},
m5:function(a){var u=H.bO(a).getHours()+0
return u},
m7:function(a){var u=H.bO(a).getMinutes()+0
return u},
m9:function(a){var u=H.bO(a).getSeconds()+0
return u},
m6:function(a){var u=H.bO(a).getMilliseconds()+0
return u},
bB:function(a){throw H.h(H.aH(a))},
d:function(a,b){if(a==null)J.bF(a)
throw H.h(H.c3(a,b))},
c3:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aK(!0,b,s,null)
u=H.a_(J.bF(a))
if(!(b<0)){if(typeof u!=="number")return H.bB(u)
t=b>=u}else t=!0
if(t)return P.R(b,a,s,null,u)
return P.dy(b,s)},
n5:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bQ(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bQ(a,c,!0,b,"end",u)
return new P.aK(!0,b,"end",null)},
aH:function(a){return new P.aK(!0,a,null,null)},
h:function(a){var u
if(a==null)a=new P.dt()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.ll})
u.name=""}else u.toString=H.ll
return u},
ll:function(){return J.aJ(this.dartException)},
A:function(a){throw H.h(a)},
v:function(a){throw H.h(P.bn(a))},
b3:function(a){var u,t,s,r,q,p
a=H.lk(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.i4(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
i5:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kO:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kA:function(a,b){return new H.hh(a,b==null?null:b.method)},
jP:function(a,b){var u=b==null,t=u?null:b.method
return new H.fC(a,t,u?null:b.receiver)},
ao:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jE(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.aU(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jP(H.j(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kA(H.j(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.lo()
q=$.lp()
p=$.lq()
o=$.lr()
n=$.lu()
m=$.lv()
l=$.lt()
$.ls()
k=$.lx()
j=$.lw()
i=r.a_(u)
if(i!=null)return f.$1(H.jP(H.E(u),i))
else{i=q.a_(u)
if(i!=null){i.method="call"
return f.$1(H.jP(H.E(u),i))}else{i=p.a_(u)
if(i==null){i=o.a_(u)
if(i==null){i=n.a_(u)
if(i==null){i=m.a_(u)
if(i==null){i=l.a_(u)
if(i==null){i=o.a_(u)
if(i==null){i=k.a_(u)
if(i==null){i=j.a_(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kA(H.E(u),i))}}return f.$1(new H.ih(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dF()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aK(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dF()
return a},
c6:function(a){var u
if(a==null)return new H.ep(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ep(a)},
n8:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
ng:function(a,b,c,d,e,f){H.m(a,"$ibr")
switch(H.a_(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.x("Unsupported number of arguments for wrapped closure"))},
c2:function(a,b){var u
H.a_(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ng)
a.$identity=u
return u},
lO:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hK().constructor.prototype):Object.create(new H.cb(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aL
if(typeof t!=="number")return t.p()
$.aL=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.ko(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.na,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.km:H.jI
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.h("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ko(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
lL:function(a,b,c,d){var u=H.jI
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ko:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lN(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lL(t,!r,u,b)
if(t===0){r=$.aL
if(typeof r!=="number")return r.p()
$.aL=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cc
return new Function(r+H.j(q==null?$.cc=H.eX("self"):q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aL
if(typeof r!=="number")return r.p()
$.aL=r+1
o+=r
r="return function("+o+"){return this."
q=$.cc
return new Function(r+H.j(q==null?$.cc=H.eX("self"):q)+"."+H.j(u)+"("+o+");}")()},
lM:function(a,b,c,d){var u=H.jI,t=H.km
switch(b?-1:a){case 0:throw H.h(H.mf("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lN:function(a,b){var u,t,s,r,q,p,o,n=$.cc
if(n==null)n=$.cc=H.eX("self")
u=$.kl
if(u==null)u=$.kl=H.eX("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lM(s,!q,t,b)
if(s===1){n="return function(){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+");"
u=$.aL
if(typeof u!=="number")return u.p()
$.aL=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+", "+o+");"
u=$.aL
if(typeof u!=="number")return u.p()
$.aL=u+1
return new Function(n+u+"}")()},
k6:function(a,b,c,d,e,f,g){return H.lO(a,b,H.a_(c),d,!!e,!!f,g)},
jI:function(a){return a.a},
km:function(a){return a.c},
eX:function(a){var u,t,s,r=new H.cb("self","target","receiver","name"),q=J.jM(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
I:function(a){if(a==null)H.n_("boolean expression must not be null")
return a},
E:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aF(a,"String"))},
o7:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aF(a,"double"))},
lg:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aF(a,"num"))},
k3:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aF(a,"bool"))},
a_:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aF(a,"int"))},
li:function(a,b){throw H.h(H.aF(a,H.c8(H.E(b).substring(2))))},
nn:function(a,b){throw H.h(H.lK(a,H.c8(H.E(b).substring(2))))},
m:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.X(a)[b])return a
H.li(a,b)},
z:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.X(a)[b]
else u=!0
if(u)return a
H.nn(a,b)},
kb:function(a){if(a==null)return a
if(!!J.X(a).$ib)return a
throw H.h(H.aF(a,"List<dynamic>"))},
ni:function(a,b){var u
if(a==null)return a
u=J.X(a)
if(!!u.$ib)return a
if(u[b])return a
H.li(a,b)},
l9:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a_(u)]
else return a.$S()}return},
eL:function(a,b){var u
if(typeof a=="function")return!0
u=H.l9(J.X(a))
if(u==null)return!1
return H.l0(u,null,b,null)},
k:function(a,b){var u,t
if(a==null)return a
if($.k_)return a
$.k_=!0
try{if(H.eL(a,b))return a
u=H.jA(b)
t=H.aF(a,u)
throw H.h(t)}finally{$.k_=!1}},
k7:function(a,b){if(a!=null&&!H.k5(a,b))H.A(H.aF(a,H.jA(b)))
return a},
aF:function(a,b){return new H.i6("TypeError: "+P.da(a)+": type '"+H.l4(a)+"' is not a subtype of type '"+b+"'")},
lK:function(a,b){return new H.eY("CastError: "+P.da(a)+": type '"+H.l4(a)+"' is not a subtype of type '"+b+"'")},
l4:function(a){var u,t=J.X(a)
if(!!t.$icd){u=H.l9(t)
if(u!=null)return H.jA(u)
return"Closure"}return H.bP(a)},
n_:function(a){throw H.h(new H.iE(a))},
nt:function(a){throw H.h(new P.f4(H.E(a)))},
mf:function(a){return new H.hw(a)},
lc:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bA:function(a){if(a==null)return
return a.$ti},
o8:function(a,b,c){return H.c7(a["$a"+H.j(c)],H.bA(b))},
c5:function(a,b,c,d){var u
H.E(c)
H.a_(d)
u=H.c7(a["$a"+H.j(c)],H.bA(b))
return u==null?null:u[d]},
ak:function(a,b,c){var u
H.E(b)
H.a_(c)
u=H.c7(a["$a"+H.j(b)],H.bA(a))
return u==null?null:u[c]},
w:function(a,b){var u
H.a_(b)
u=H.bA(a)
return u==null?null:u[b]},
jA:function(a){return H.bz(a,null)},
bz:function(a,b){var u,t
H.l(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c8(a[0].name)+H.k2(a,1,b)
if(typeof a=="function")return H.c8(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a_(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.j(b[t])}if('func' in a)return H.mz(a,b)
if('futureOr' in a)return"FutureOr<"+H.bz("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mz:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.f]
H.l(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.d(a0,n)
p=C.d.p(p,a0[n])
m=u[q]
if(m!=null&&m!==P.K)p+=" extends "+H.bz(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bz(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bz(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bz(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.n7(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.E(b[h])
j=j+i+H.bz(e[d],a0)+(" "+H.j(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
k2:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.bd("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bz(p,c)}return"<"+u.i(0)+">"},
c7:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
k4:function(a,b,c,d){var u,t
H.E(b)
H.kb(c)
H.E(d)
if(a==null)return!1
u=H.bA(a)
t=J.X(a)
if(t[b]==null)return!1
return H.l7(H.c7(t[d],u),null,c,null)},
l:function(a,b,c,d){H.E(b)
H.kb(c)
H.E(d)
if(a==null)return a
if(H.k4(a,b,c,d))return a
throw H.h(H.aF(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c8(b.substring(2))+H.k2(c,0,null),v.mangledGlobalNames)))},
l7:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.az(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.az(a[t],b,c[t],d))return!1
return!0},
o5:function(a,b,c){return a.apply(b,H.c7(J.X(b)["$a"+H.j(c)],H.bA(b)))},
le:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="K"||a.name==="J"||a===-1||a===-2||H.le(u)}return!1},
k5:function(a,b){var u,t
if(a==null)return b==null||b.name==="K"||b.name==="J"||b===-1||b===-2||H.le(b)
if(b==null||b===-1||b.name==="K"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.k5(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eL(a,b)}u=J.X(a).constructor
t=H.bA(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.az(u,null,b,null)},
H:function(a,b){if(a!=null&&!H.k5(a,b))throw H.h(H.aF(a,H.jA(b)))
return a},
az:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="K"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="K"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.az(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="J")return!0
if('func' in c)return H.l0(a,b,c,d)
if('func' in a)return c.name==="br"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.az("type" in a?a.type:l,b,s,d)
else if(H.az(a,b,s,d))return!0
else{if(!('$i'+"cj" in t.prototype))return!1
r=t.prototype["$a"+"cj"]
q=H.c7(r,u?a.slice(1):l)
return H.az(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.l7(H.c7(m,u),b,p,d)},
l0:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.az(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.az(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.az(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.az(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.nl(h,b,g,d)},
nl:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.az(c[s],d,a[s],b))return!1}return!0},
o6:function(a,b,c){Object.defineProperty(a,H.E(b),{value:c,enumerable:false,writable:true,configurable:true})},
nj:function(a){var u,t,s,r,q=H.E($.ld.$1(a)),p=$.jr[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jx[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.E($.l6.$2(a,q))
if(q!=null){p=$.jr[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jx[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jz(u)
$.jr[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jx[q]=u
return u}if(s==="-"){r=H.jz(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lh(a,u)
if(s==="*")throw H.h(P.kP(q))
if(v.leafTags[q]===true){r=H.jz(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lh(a,u)},
lh:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kc(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jz:function(a){return J.kc(a,!1,null,!!a.$iG)},
nk:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jz(u)
else return J.kc(u,c,null,null)},
ne:function(){if(!0===$.ka)return
$.ka=!0
H.nf()},
nf:function(){var u,t,s,r,q,p,o,n
$.jr=Object.create(null)
$.jx=Object.create(null)
H.nd()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lj.$1(q)
if(p!=null){o=H.nk(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nd:function(){var u,t,s,r,q,p,o=C.w()
o=H.c1(C.x,H.c1(C.y,H.c1(C.o,H.c1(C.o,H.c1(C.z,H.c1(C.A,H.c1(C.B(C.p),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.ld=new H.ju(r)
$.l6=new H.jv(q)
$.lj=new H.jw(p)},
c1:function(a,b){return a(b)||b},
lZ:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.h(new P.fq("Illegal RegExp pattern ("+String(r)+")",a))},
nq:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
n6:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lk:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ke:function(a,b,c){var u=H.nr(a,b,c)
return u},
nr:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lk(b),'g'),H.n6(c))},
i4:function i4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hh:function hh(a,b){this.a=a
this.b=b},
fC:function fC(a,b,c){this.a=a
this.b=b
this.c=c},
ih:function ih(a){this.a=a},
jE:function jE(a){this.a=a},
ep:function ep(a){this.a=a
this.b=null},
cd:function cd(){},
hU:function hU(){},
hK:function hK(){},
cb:function cb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i6:function i6(a){this.a=a},
eY:function eY(a){this.a=a},
hw:function hw(a){this.a=a},
iE:function iE(a){this.a=a},
Z:function Z(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fG:function fG(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dh:function dh(a,b){this.a=a
this.$ti=b},
fH:function fH(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ju:function ju(a){this.a=a},
jv:function jv(a){this.a=a},
jw:function jw(a){this.a=a},
fB:function fB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cS:function(a){return a},
by:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.c3(b,a))},
my:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.n5(a,b,c))
return b},
cs:function cs(){},
dp:function dp(){},
cr:function cr(){},
dq:function dq(){},
h8:function h8(){},
h9:function h9(){},
ha:function ha(){},
hb:function hb(){},
hc:function hc(){},
dr:function dr(){},
hd:function hd(){},
cK:function cK(){},
cL:function cL(){},
cM:function cM(){},
cN:function cN(){},
n7:function(a){return J.kt(a?Object.keys(a):[],null)},
nm:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kc:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eM:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.ka==null){H.ne()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.kP("Return interceptor for "+H.j(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kg()]
if(r!=null)return r
r=H.nj(a)
if(r!=null)return r
if(typeof a=="function")return C.J
u=Object.getPrototypeOf(a)
if(u==null)return C.r
if(u===Object.prototype)return C.r
if(typeof s=="function"){Object.defineProperty(s,$.kg(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
lY:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.jH(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.aX(a,0,4294967295,"length",null))
return J.kt(new Array(a),b)},
kt:function(a,b){return J.jM(H.c(a,[b]))},
jM:function(a){H.kb(a)
a.fixed$length=Array
return a},
X:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dc.prototype
return J.fA.prototype}if(typeof a=="string")return J.b8.prototype
if(a==null)return J.dd.prototype
if(typeof a=="boolean")return J.fz.prototype
if(a.constructor==Array)return J.aB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.K)return a
return J.eM(a)},
n9:function(a){if(typeof a=="number")return J.bs.prototype
if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(a.constructor==Array)return J.aB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.K)return a
return J.eM(a)},
js:function(a){if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(a.constructor==Array)return J.aB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.K)return a
return J.eM(a)},
jt:function(a){if(a==null)return a
if(a.constructor==Array)return J.aB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.K)return a
return J.eM(a)},
la:function(a){if(typeof a=="number")return J.bs.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.bv.prototype
return a},
lb:function(a){if(typeof a=="number")return J.bs.prototype
if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.bv.prototype
return a},
k8:function(a){if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.bv.prototype
return a},
k9:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.K)return a
return J.eM(a)},
lD:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.n9(a).p(a,b)},
Y:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.X(a).q(a,b)},
aI:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.la(a).a9(a,b)},
ki:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lb(a).J(a,b)},
lE:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.la(a).u(a,b)},
eN:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nh(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.js(a).j(a,b)},
lF:function(a,b,c,d){return J.k9(a).fJ(a,b,c,d)},
jF:function(a,b){return J.lb(a).fW(a,b)},
jG:function(a,b){return J.jt(a).v(a,b)},
lG:function(a,b){return J.jt(a).D(a,b)},
lH:function(a){return J.k9(a).gfS(a)},
cX:function(a){return J.X(a).gG(a)},
bE:function(a){return J.jt(a).gM(a)},
bF:function(a){return J.js(a).gm(a)},
kj:function(a){return J.jt(a).hy(a)},
lI:function(a,b,c){return J.k8(a).aQ(a,b,c)},
lJ:function(a){return J.k8(a).hJ(a)},
aJ:function(a){return J.X(a).i(a)},
a:function a(){},
fz:function fz(){},
dd:function dd(){},
de:function de(){},
hl:function hl(){},
bv:function bv(){},
b9:function b9(){},
aB:function aB(a){this.$ti=a},
jN:function jN(a){this.$ti=a},
ap:function ap(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bs:function bs(){},
dc:function dc(){},
fA:function fA(){},
b8:function b8(){}},P={
mo:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.n0()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c2(new P.iG(s),1)).observe(u,{childList:true})
return new P.iF(s,u,t)}else if(self.setImmediate!=null)return P.n1()
return P.n2()},
mp:function(a){self.scheduleImmediate(H.c2(new P.iH(H.k(a,{func:1,ret:-1})),0))},
mq:function(a){self.setImmediate(H.c2(new P.iI(H.k(a,{func:1,ret:-1})),0))},
mr:function(a){P.jV(C.i,H.k(a,{func:1,ret:-1}))},
jV:function(a,b){var u
H.k(b,{func:1,ret:-1})
u=C.e.V(a.a,1000)
return P.mw(u<0?0:u,b)},
kN:function(a,b){var u
H.k(b,{func:1,ret:-1,args:[P.b1]})
u=C.e.V(a.a,1000)
return P.mx(u<0?0:u,b)},
mw:function(a,b){var u=new P.ev()
u.dR(a,b)
return u},
mx:function(a,b){var u=new P.ev()
u.dS(a,b)
return u},
ms:function(a,b){var u,t,s
b.a=1
try{a.da(new P.iR(b),new P.iS(b),null)}catch(s){u=H.ao(s)
t=H.c6(s)
P.no(new P.iT(b,u,t))}},
kW:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.m(a.c,"$iay")
if(u>=4){t=b.bn()
b.a=a.a
b.c=a.c
P.cJ(b,t)}else{t=H.m(b.c,"$ib5")
b.a=2
b.c=a
a.cm(t)}},
cJ:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.m(g.c,"$iaa")
g=g.b
r=s.a
q=s.b
g.toString
P.jm(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cJ(h.a,b)}g=h.a
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
if(m){H.m(o,"$iaa")
g=g.b
r=o.a
q=o.b
g.toString
P.jm(i,i,g,r,q)
return}l=$.V
if(l!=n)$.V=n
else l=i
g=b.c
if(g===8)new P.iX(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.iW(u,b,o).$0()}else if((g&2)!==0)new P.iV(h,u,b).$0()
if(l!=null)$.V=l
g=u.b
if(!!J.X(g).$icj){if(g.a>=4){k=H.m(q.c,"$ib5")
q.c=null
b=q.aT(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.kW(g,q)
return}}j=b.b
k=H.m(j.c,"$ib5")
j.c=null
b=j.aT(k)
g=u.a
r=u.b
if(!g){H.H(r,H.w(j,0))
j.a=4
j.c=r}else{H.m(r,"$iaa")
j.a=8
j.c=r}h.a=j
g=j}},
mW:function(a,b){if(H.eL(a,{func:1,args:[P.K,P.ah]}))return H.k(a,{func:1,ret:null,args:[P.K,P.ah]})
if(H.eL(a,{func:1,args:[P.K]}))return H.k(a,{func:1,ret:null,args:[P.K]})
throw H.h(P.jH(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mV:function(){var u,t
for(;u=$.c0,u!=null;){$.cU=null
t=u.b
$.c0=t
if(t==null)$.cT=null
u.a.$0()}},
mZ:function(){$.k0=!0
try{P.mV()}finally{$.cU=null
$.k0=!1
if($.c0!=null)$.kh().$1(P.l8())}},
l3:function(a){var u=new P.dR(H.k(a,{func:1,ret:-1}))
if($.c0==null){$.c0=$.cT=u
if(!$.k0)$.kh().$1(P.l8())}else $.cT=$.cT.b=u},
mY:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
u=$.c0
if(u==null){P.l3(a)
$.cU=$.cT
return}t=new P.dR(a)
s=$.cU
if(s==null){t.b=u
$.c0=$.cU=t}else{t.b=s.b
$.cU=s.b=t
if(t.b==null)$.cT=t}},
no:function(a){var u,t=null,s={func:1,ret:-1}
H.k(a,s)
u=$.V
if(C.f===u){P.jo(t,t,C.f,a)
return}u.toString
P.jo(t,t,u,H.k(u.bq(a),s))},
kM:function(a,b){var u,t={func:1,ret:-1}
H.k(b,t)
u=$.V
if(u===C.f){u.toString
return P.jV(a,b)}return P.jV(a,H.k(u.bq(b),t))},
ml:function(a,b){var u,t,s={func:1,ret:-1,args:[P.b1]}
H.k(b,s)
u=$.V
if(u===C.f){u.toString
return P.kN(a,b)}t=u.cB(b,P.b1)
$.V.toString
return P.kN(a,H.k(t,s))},
jm:function(a,b,c,d,e){var u={}
u.a=d
P.mY(new P.jn(u,e))},
l1:function(a,b,c,d,e){var u,t
H.k(d,{func:1,ret:e})
t=$.V
if(t===c)return d.$0()
$.V=c
u=t
try{t=d.$0()
return t}finally{$.V=u}},
l2:function(a,b,c,d,e,f,g){var u,t
H.k(d,{func:1,ret:f,args:[g]})
H.H(e,g)
t=$.V
if(t===c)return d.$1(e)
$.V=c
u=t
try{t=d.$1(e)
return t}finally{$.V=u}},
mX:function(a,b,c,d,e,f,g,h,i){var u,t
H.k(d,{func:1,ret:g,args:[h,i]})
H.H(e,h)
H.H(f,i)
t=$.V
if(t===c)return d.$2(e,f)
$.V=c
u=t
try{t=d.$2(e,f)
return t}finally{$.V=u}},
jo:function(a,b,c,d){var u
H.k(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bq(d):c.fT(d,-1)
P.l3(d)},
iG:function iG(a){this.a=a},
iF:function iF(a,b,c){this.a=a
this.b=b
this.c=c},
iH:function iH(a){this.a=a},
iI:function iI(a){this.a=a},
ev:function ev(){this.c=0},
jg:function jg(a,b){this.a=a
this.b=b},
jf:function jf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b5:function b5(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ay:function ay(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
iQ:function iQ(a,b){this.a=a
this.b=b},
iU:function iU(a,b){this.a=a
this.b=b},
iR:function iR(a){this.a=a},
iS:function iS(a){this.a=a},
iT:function iT(a,b,c){this.a=a
this.b=b
this.c=c},
iX:function iX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iY:function iY(a){this.a=a},
iW:function iW(a,b,c){this.a=a
this.b=b
this.c=c},
iV:function iV(a,b,c){this.a=a
this.b=b
this.c=c},
dR:function dR(a){this.a=a
this.b=null},
hN:function hN(){},
hP:function hP(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b){this.a=a
this.b=b},
cz:function cz(){},
hO:function hO(){},
b1:function b1(){},
aa:function aa(a,b){this.a=a
this.b=b},
jj:function jj(){},
jn:function jn(a,b){this.a=a
this.b=b},
j2:function j2(){},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
j3:function j3(a,b){this.a=a
this.b=b},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c},
ku:function(a,b){return new H.Z([a,b])},
m_:function(a){return H.n8(a,new H.Z([null,null]))},
di:function(a){return new P.j0([a])},
jZ:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mv:function(a,b,c){var u=new P.e6(a,b,[c])
u.c=a.e
return u},
lV:function(a,b,c){var u,t
if(P.k1(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.f])
C.a.h($.aj,a)
try{P.mA(a,u)}finally{if(0>=$.aj.length)return H.d($.aj,-1)
$.aj.pop()}t=P.kK(b,H.ni(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
jL:function(a,b,c){var u,t
if(P.k1(a))return b+"..."+c
u=new P.bd(b)
C.a.h($.aj,a)
try{t=u
t.a=P.kK(t.a,a,", ")}finally{if(0>=$.aj.length)return H.d($.aj,-1)
$.aj.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
k1:function(a){var u,t
for(u=$.aj.length,t=0;t<u;++t)if(a===$.aj[t])return!0
return!1},
mA:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.f],"$ab")
u=a.gM(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.t())return
r=H.j(u.gC(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.t()){if(s<=5)return
if(0>=b.length)return H.d(b,-1)
q=b.pop()
if(0>=b.length)return H.d(b,-1)
p=b.pop()}else{o=u.gC(u);++s
if(!u.t()){if(s<=4){C.a.h(b,H.j(o))
return}q=H.j(o)
if(0>=b.length)return H.d(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gC(u);++s
for(;u.t();o=n,n=m){m=u.gC(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.j(o)
q=H.j(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
kv:function(a,b){var u,t,s=P.di(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t)s.h(0,H.H(a[t],b))
return s},
kx:function(a){var u,t={}
if(P.k1(a))return"{...}"
u=new P.bd("")
try{C.a.h($.aj,a)
u.a+="{"
t.a=!0
J.lG(a,new P.fL(t,u))
u.a+="}"}finally{if(0>=$.aj.length)return H.d($.aj,-1)
$.aj.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
j0:function j0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c_:function c_(a){this.a=a
this.c=this.b=null},
e6:function e6(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fI:function fI(){},
u:function u(){},
fK:function fK(){},
fL:function fL(a,b){this.a=a
this.b=b},
a4:function a4(){},
j7:function j7(){},
e7:function e7(){},
ce:function ce(){},
cf:function cf(){},
fe:function fe(){},
fw:function fw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fv:function fv(a){this.a=a},
ik:function ik(){},
il:function il(){},
jh:function jh(a){this.b=0
this.c=a},
lT:function(a){if(a instanceof H.cd)return a.i(0)
return"Instance of '"+H.bP(a)+"'"},
m0:function(a,b,c){var u,t
H.H(b,c)
u=J.lY(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.l(u,"$ib",[c],"$ab")},
kw:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bE(a);u.t();)C.a.h(s,H.H(u.gC(u),c))
if(b)return s
return H.l(J.jM(s),"$ib",t,"$ab")},
jU:function(a){var u,t,s=P.p
H.l(a,"$ii",[s],"$ai")
if(a.constructor===Array){H.l(a,"$iaB",[s],"$aaB")
u=a.length
t=P.jT(0,null,u)
return H.kG(t<u?C.a.ds(a,0,t):a)}return P.mj(a,0,null)},
mj:function(a,b,c){var u,t,s
H.l(a,"$ii",[P.p],"$ai")
u=J.bE(a)
for(t=0;t<b;++t)if(!u.t())throw H.h(P.aX(b,0,t,null,null))
s=[]
for(;u.t();)s.push(u.gC(u))
return H.kG(s)},
mc:function(a){return new H.fB(a,H.lZ(a,!1,!0,!1))},
kK:function(a,b,c){var u=J.bE(b)
if(!u.t())return a
if(c.length===0){do a+=H.j(u.gC(u))
while(u.t())}else{a+=H.j(u.gC(u))
for(;u.t();)a=a+c+H.j(u.gC(u))}return a},
l_:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.l(a,"$ib",[P.p],"$ab")
if(c===C.h){u=$.lC().b
u=u.test(b)}else u=!1
if(u)return b
t=C.D.fX(H.H(b,H.ak(c,"ce",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jR(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lP:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lQ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d6:function(a){if(a>=10)return""+a
return"0"+a},
kq:function(a,b){return new P.aP(1e6*b+1000*a)},
da:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aJ(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lT(a)},
jH:function(a,b,c){return new P.aK(!0,a,b,c)},
dy:function(a,b){return new P.bQ(null,null,!0,a,b,"Value not in range")},
aX:function(a,b,c,d,e){return new P.bQ(b,c,!0,a,d,"Invalid value")},
jT:function(a,b,c){if(0>a||a>c)throw H.h(P.aX(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.h(P.aX(b,a,c,"end",null))
return b}return c},
jS:function(a,b){if(typeof a!=="number")return a.aD()
if(a<0)throw H.h(P.aX(a,0,null,b,null))},
R:function(a,b,c,d,e){var u=H.a_(e==null?J.bF(b):e)
return new P.fx(u,!0,a,c,"Index out of range")},
ai:function(a){return new P.ii(a)},
kP:function(a){return new P.ig(a)},
kJ:function(a){return new P.bS(a)},
bn:function(a){return new P.f_(a)},
x:function(a){return new P.dZ(a)},
kd:function(a){H.nm(a)},
M:function M(){},
bo:function bo(a,b){this.a=a
this.b=b},
y:function y(){},
aP:function aP(a){this.a=a},
fa:function fa(){},
fb:function fb(){},
bq:function bq(){},
eQ:function eQ(){},
dt:function dt(){},
aK:function aK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bQ:function bQ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fx:function fx(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ii:function ii(a){this.a=a},
ig:function ig(a){this.a=a},
bS:function bS(a){this.a=a},
f_:function f_(a){this.a=a},
hk:function hk(){},
dF:function dF(){},
f4:function f4(a){this.a=a},
dZ:function dZ(a){this.a=a},
fq:function fq(a,b){this.a=a
this.b=b},
br:function br(){},
p:function p(){},
i:function i(){},
aS:function aS(){},
b:function b(){},
D:function D(){},
J:function J(){},
a9:function a9(){},
K:function K(){},
ah:function ah(){},
f:function f(){},
bd:function bd(a){this.a=a},
bf:function(a){var u,t,s,r,q
if(a==null)return
u=P.ku(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r){q=H.E(t[r])
u.n(0,q,a[q])}return u},
n3:function(a){var u={}
a.D(0,new P.jp(u))
return u},
jp:function jp(a){this.a=a},
fm:function fm(a,b){this.a=a
this.b=b},
fn:function fn(){},
fo:function fo(){},
j1:function j1(){},
at:function at(){},
ba:function ba(){},
fE:function fE(){},
bc:function bc(){},
hi:function hi(){},
ho:function ho(){},
cw:function cw(){},
hR:function hR(){},
o:function o(){},
be:function be(){},
i3:function i3(){},
e4:function e4(){},
e5:function e5(){},
ef:function ef(){},
eg:function eg(){},
er:function er(){},
es:function es(){},
ey:function ey(){},
ez:function ez(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(a){this.a=a},
eV:function eV(){},
bG:function bG(){},
hj:function hj(){},
dS:function dS(){},
d0:function d0(){},
dx:function dx(){},
bR:function bR(){},
dB:function dB(){},
dM:function dM(){},
hJ:function hJ(){},
en:function en(){},
eo:function eo(){}},W={
kk:function(){var u=document.createElement("a")
return u},
kn:function(){var u=document.createElement("canvas")
return u},
lR:function(a,b,c){var u=document.body,t=(u&&C.n).Z(u,a,b,c)
t.toString
u=W.C
u=new H.cG(new W.ae(t),H.k(new W.fd(),{func:1,ret:P.M,args:[u]}),[u])
return H.m(u.gap(u),"$iP")},
lS:function(a){H.m(a,"$ie")
return"wheel"},
ci:function(a){var u,t,s,r="element tag unavailable"
try{u=J.k9(a)
t=u.gd8(a)
if(typeof t==="string")r=u.gd8(a)}catch(s){H.ao(s)}return r},
j_:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kY:function(a,b,c,d){var u=W.j_(W.j_(W.j_(W.j_(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a8:function(a,b,c,d,e){var u=W.l5(new W.iP(c),W.n)
if(u!=null&&!0)J.lF(a,b,u,!1)
return new W.iO(a,b,u,!1,[e])},
kX:function(a){var u=W.kk(),t=window.location
u=new W.bx(new W.j6(u,t))
u.dG(a)
return u},
mt:function(a,b,c,d){H.m(a,"$iP")
H.E(b)
H.E(c)
H.m(d,"$ibx")
return!0},
mu:function(a,b,c,d){var u,t,s
H.m(a,"$iP")
H.E(b)
H.E(c)
u=H.m(d,"$ibx").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
kZ:function(){var u=P.f,t=P.kv(C.k,u),s=H.w(C.k,0),r=H.k(new W.je(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.jd(t,P.di(u),P.di(u),P.di(u),null)
t.dO(null,new H.fO(C.k,r,[s,u]),q,null)
return t},
l5:function(a,b){var u
H.k(a,{func:1,ret:-1,args:[b]})
u=$.V
if(u===C.f)return a
return u.cB(a,b)},
r:function r(){},
eO:function eO(){},
cY:function cY(){},
eP:function eP(){},
ca:function ca(){},
d_:function d_(){},
bk:function bk(){},
bH:function bH(){},
bl:function bl(){},
cg:function cg(){},
f0:function f0(){},
Q:function Q(){},
ch:function ch(){},
f1:function f1(){},
aN:function aN(){},
aO:function aO(){},
f2:function f2(){},
f3:function f3(){},
f6:function f6(){},
ar:function ar(){},
f7:function f7(){},
d7:function d7(){},
d8:function d8(){},
f8:function f8(){},
f9:function f9(){},
iK:function iK(a,b){this.a=a
this.b=b},
P:function P(){},
fd:function fd(){},
n:function n(){},
e:function e(){},
aQ:function aQ(){},
fk:function fk(){},
fl:function fl(){},
fp:function fp(){},
aR:function aR(){},
fu:function fu(){},
bK:function bK(){},
aT:function aT(){},
dj:function dj(){},
h1:function h1(){},
h2:function h2(){},
h3:function h3(a){this.a=a},
h4:function h4(){},
h5:function h5(a){this.a=a},
aV:function aV(){},
h6:function h6(){},
a5:function a5(){},
ae:function ae(a){this.a=a},
C:function C(){},
ct:function ct(){},
aW:function aW(){},
hn:function hn(){},
hu:function hu(){},
hv:function hv(a){this.a=a},
hx:function hx(){},
aY:function aY(){},
hH:function hH(){},
aZ:function aZ(){},
hI:function hI(){},
b_:function b_(){},
hL:function hL(){},
hM:function hM(a){this.a=a},
aC:function aC(){},
bT:function bT(){},
dG:function dG(){},
hS:function hS(){},
hT:function hT(){},
cA:function cA(){},
b0:function b0(){},
aD:function aD(){},
hV:function hV(){},
hW:function hW(){},
hY:function hY(){},
b2:function b2(){},
aE:function aE(){},
i1:function i1(){},
i2:function i2(){},
bu:function bu(){},
ij:function ij(){},
iB:function iB(){},
b4:function b4(){},
cH:function cH(){},
cI:function cI(){},
iL:function iL(){},
dU:function dU(){},
iZ:function iZ(){},
ec:function ec(){},
ja:function ja(){},
jb:function jb(){},
iJ:function iJ(){},
iM:function iM(a){this.a=a},
iN:function iN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jY:function jY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iO:function iO(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iP:function iP(a){this.a=a},
bx:function bx(a){this.a=a},
B:function B(){},
ds:function ds(a){this.a=a},
hf:function hf(a){this.a=a},
he:function he(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(){},
j8:function j8(){},
j9:function j9(){},
jd:function jd(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
je:function je(){},
jc:function jc(){},
db:function db(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
am:function am(){},
j6:function j6(a,b){this.a=a
this.b=b},
eA:function eA(a){this.a=a},
ji:function ji(a){this.a=a},
dT:function dT(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
e_:function e_(){},
e0:function e0(){},
e2:function e2(){},
e3:function e3(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ed:function ed(){},
ee:function ee(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
cO:function cO(){},
cP:function cP(){},
el:function el(){},
em:function em(){},
eq:function eq(){},
et:function et(){},
eu:function eu(){},
cQ:function cQ(){},
cR:function cR(){},
ew:function ew(){},
ex:function ex(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){}},O={
jJ:function(a){var u=new O.a1([a])
u.bV(a)
return u},
a1:function a1(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
co:function co(){this.b=this.a=null},
dl:function dl(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fW:function fW(a,b){this.a=a
this.b=b},
fX:function fX(){},
fY:function fY(a,b){this.a=a
this.b=b},
fZ:function fZ(){},
h_:function h_(a,b){this.a=a
this.b=b},
h0:function h0(){},
fQ:function fQ(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dm:function dm(){},
fR:function fR(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aU:function aU(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fT:function fT(){var _=this
_.e=_.d=_.c=_.b=null},
fU:function fU(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fV:function fV(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bU:function bU(){}},E={
me:function(a,b){var u=new E.hq(a)
u.dC(a,b)
return u},
mk:function(a,b,c,d,e){var u,t,s=J.X(a)
if(!!s.$ibH)return E.kL(a,!0,!0,!0,!1)
u=W.kn()
t=u.style
t.width="100%"
t.height="100%"
s.gcC(a).h(0,u)
return E.kL(u,!0,!0,!0,!1)},
kL:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dJ(),j=H.m(C.E.dl(a,"webgl2",P.m_(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibR")
if(j==null)H.A(P.x("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.me(j,a)
H.a_(j.getParameter(3379))
H.a_(j.getParameter(34076))
u=new X.dP(a)
t=new X.fD()
t.sfc(P.di(P.p))
u.b=t
t=new X.h7(u)
t.f=0
t.r=V.dw()
t.x=V.dw()
t.ch=t.Q=1
u.c=t
t=new X.fJ(u)
t.r=0
t.x=V.dw()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.i0(u)
t.f=V.dw()
t.r=V.dw()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seb(H.c([],[[P.cz,P.K]]))
t=u.z
s=document
r=W.a5
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a8(s,"contextmenu",H.k(u.geB(),q),!1,r))
t=u.z
p=W.n
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a8(a,"focus",H.k(u.geH(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a8(a,"blur",H.k(u.gev(),o),!1,p))
t=u.z
n=W.aT
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a8(s,"keyup",H.k(u.geL(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a8(s,"keydown",H.k(u.geJ(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a8(a,"mousedown",H.k(u.geP(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a8(a,"mouseup",H.k(u.geT(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a8(a,l,H.k(u.geR(),q),!1,r))
n=u.z
m=W.b4;(n&&C.a).h(n,W.a8(a,H.E(W.lS(a)),H.k(u.geV(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a8(s,l,H.k(u.geD(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a8(s,"mouseup",H.k(u.geF(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a8(s,"pointerlockchange",H.k(u.geX(),o),!1,p))
p=u.z
o=W.aE
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a8(a,"touchstart",H.k(u.gf7(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a8(a,"touchend",H.k(u.gf3(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a8(a,"touchmove",H.k(u.gf5(),s),!1,o))
k.Q=!0
k.ch=!1
k.cx=new P.bo(Date.now(),!1)
k.cy=0
k.co()
return k},
eW:function eW(){},
af:function af(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hq:function hq(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hr:function hr(a){this.a=a},
hs:function hs(a){this.a=a},
ht:function ht(a){this.a=a},
dJ:function dJ(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
hX:function hX(a){this.a=a}},Z={
mn:function(a,b,c){var u
H.l(c,"$ib",[P.p],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cS(c)),35044)
a.bindBuffer(b,null)
return new Z.dQ(b,u)},
ax:function(a){return new Z.bw(a)},
dQ:function dQ(a,b){this.a=a
this.b=b},
d1:function d1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iC:function iC(a){this.a=a},
d2:function d2(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
ck:function ck(a,b,c){this.a=a
this.b=b
this.c=c},
bw:function bw(a){this.a=a}},D={
aA:function(){var u=new D.bI()
u.sa5(null)
u.sav(null)
u.c=null
u.d=0
return u},
eZ:function eZ(){},
bI:function bI(){var _=this
_.d=_.c=_.b=_.a=null},
fg:function fg(a){this.a=a},
fh:function fh(a){this.a=a},
F:function F(){this.b=null},
cl:function cl(a){this.b=null
this.$ti=a},
cm:function cm(a){this.b=null
this.$ti=a},
U:function U(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bp:function bp(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a3:function a3(){},
dg:function dg(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dv:function dv(){},
dE:function dE(){}},X={d3:function d3(a,b){this.a=a
this.b=b},df:function df(a,b){this.a=a
this.b=b},fD:function fD(){this.d=this.b=this.a=null},fJ:function fJ(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cp:function cp(a,b,c){this.a=a
this.b=b
this.c=c},h7:function h7(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},i0:function i0(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dP:function dP(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lU:function(a){var u=new X.fr(),t=V.W(1)
u.a=new V.aM(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kH
if(t==null){t=V.md(0,0,1,1)
$.kH=t}u.r=t
return u},
d4:function d4(){},
fr:function fr(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
du:function du(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dH:function dH(){},
lf:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="testCanvas",f=null,e=V.mg("Test 003"),d=W.kn()
d.className="pageLargeCanvas"
d.id=g
e.a.appendChild(d)
u=[P.f]
e.cz(H.c(["A test of the Material Light Shader with a solid color directional lighting."],u))
e.cz(H.c(["\xab[Back to Tests|../]"],u))
t=new E.af()
t.a=""
t.b=!0
u=E.af
t.se2(0,O.jJ(u))
t.y.b6(t.ghi(),t.ghl())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbQ(0,f)
t.saM(f)
t.sbQ(0,F.nu())
s=new U.dA()
s.r=s.f=s.e=s.d=s.c=s.b=s.a=0
s.sdj(0)
s.sd0(0,0)
s.sd6(0)
r=s.d
if(!(Math.abs(r-0.1)<$.O().a)){s.d=0.1
r=new D.U("deltaYaw",r,0.1,[P.y])
r.b=!0
s.au(r)}r=s.e
if(!(Math.abs(r-0.21)<$.O().a)){s.e=0.21
r=new D.U("deltaPitch",r,0.21,[P.y])
r.b=!0
s.au(r)}r=s.f
if(!(Math.abs(r-0.32)<$.O().a)){s.f=0.32
r=new D.U("deltaRoll",r,0.32,[P.y])
r.b=!0
s.au(r)}t.saM(s)
q=new O.dl()
q.se_(O.jJ(V.ac))
q.e.b6(q.geq(),q.ges())
s=new O.aU(q,"emission")
s.c=new A.ab(!1,!1,!1)
s.f=new V.a0(0,0,0)
q.f=s
s=new O.aU(q,"ambient")
s.c=new A.ab(!1,!1,!1)
s.f=new V.a0(0,0,0)
q.r=s
s=new O.aU(q,"diffuse")
s.c=new A.ab(!1,!1,!1)
s.f=new V.a0(0,0,0)
q.x=s
s=new O.aU(q,"invDiffuse")
s.c=new A.ab(!1,!1,!1)
s.f=new V.a0(0,0,0)
q.y=s
s=new O.fV(q,"specular")
s.c=new A.ab(!1,!1,!1)
s.f=new V.a0(0,0,0)
s.ch=100
q.z=s
s=new O.fR(q,"bump")
s.c=new A.ab(!1,!1,!1)
q.Q=s
q.ch=null
s=new O.aU(q,"reflect")
s.c=new A.ab(!1,!1,!1)
s.f=new V.a0(0,0,0)
q.cx=s
s=new O.fU(q,"refract")
s.c=new A.ab(!1,!1,!1)
s.f=new V.a0(0,0,0)
s.ch=1
q.cy=s
s=new O.fQ(q,"alpha")
s.c=new A.ab(!1,!1,!1)
s.f=1
q.db=s
s=new D.dg()
s.bV(D.a3)
s.se9(H.c([],[D.bp]))
s.sf9(H.c([],[D.dv]))
s.sfC(H.c([],[D.dE]))
s.y=s.x=null
s.bP(s.geo(),s.gf_(),s.gf1())
q.dx=s
r=new O.fT()
r.b=new V.aM(0,0,0,0)
r.c=1
r.d=10
r.e=!1
q.dy=r
r=s.x
s=r==null?s.x=D.aA():r
s.h(0,q.gfk())
s=q.dx
r=s.y
s=r==null?s.y=D.aA():r
s.h(0,q.gdP())
q.fr=null
s=q.dx
p=V.jX()
r=U.kp(V.ky(V.kE(),p,new V.L(1,1,-3)))
o=new V.a0(1,1,1)
n=new D.bp()
n.c=new V.a0(1,1,1)
n.a=V.kU()
n.d=V.jX()
n.e=V.mm()
m=n.b
n.b=r
r.gA().h(0,n.gdI())
r=new D.U("mover",m,n.b,[U.bM])
r.b=!0
n.ab(r)
if(!n.c.q(0,o)){m=n.c
n.c=o
r=new D.U("color",m,o,[V.a0])
r.b=!0
n.ab(r)}s.h(0,n)
q.r.saJ(0,new V.a0(V.W(0),V.W(0),V.W(1)))
q.x.saJ(0,new V.a0(V.W(0),V.W(1),V.W(0)))
q.z.saJ(0,new V.a0(V.W(1),V.W(0),V.W(0)))
s=q.z
s.cq(new A.ab(!0,!1,!1))
s.cr(10)
l=new M.d9()
l.a=!0
l.sdK(0,O.jJ(u))
l.e.b6(l.gex(),l.gez())
l.y=l.x=l.r=l.f=null
k=X.lU(f)
j=new X.du()
j.c=1.0471975511965976
j.d=0.1
j.e=2000
j.saM(f)
u=j.c
if(!(Math.abs(u-1.0471975511965976)<$.O().a)){j.c=1.0471975511965976
u=new D.U("fov",u,1.0471975511965976,[P.y])
u.b=!0
j.ar(u)}u=j.d
if(!(Math.abs(u-0.1)<$.O().a)){j.d=0.1
u=new D.U("near",u,0.1,[P.y])
u.b=!0
j.ar(u)}u=j.e
if(!(Math.abs(u-2000)<$.O().a)){j.e=2000
u=new D.U("far",u,2000,[P.y])
u.b=!0
j.ar(u)}u=l.b
if(u!==j){if(u!=null)u.gA().N(0,l.ga4())
m=l.b
l.b=j
j.gA().h(0,l.ga4())
u=new D.U("camera",m,l.b,[X.d4])
u.b=!0
l.ac(u)}u=l.c
if(u!==k){if(u!=null)u.gA().N(0,l.ga4())
m=l.c
l.c=k
k.gA().h(0,l.ga4())
u=new D.U("target",m,l.c,[X.dH])
u.b=!0
l.ac(u)}l.sd9(f)
l.sd9(q)
l.e.h(0,t)
l.b.saM(U.kp(V.bb(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
i=document.getElementById(g)
if(i==null)H.A(P.x("Failed to find an element with the identifier, testCanvas."))
h=E.mk(i,!0,!0,!0,!1)
u=h.d
if(u!==l){if(u!=null)u.gA().N(0,h.gbW())
h.d=l
l.gA().h(0,h.gbW())
h.bX()}u=h.z
if(u==null)u=h.z=D.aA()
s={func:1,ret:-1,args:[D.F]}
r=H.k(new X.jy(e,q),s)
if(u.b==null)u.sav(H.c([],[s]))
u=u.b;(u&&C.a).h(u,r)
V.np(h)},
jy:function jy(a,b){this.a=a
this.b=b}},V={
W:function(a){var u
if(a<0)u=0
else u=a>1?1:a
return u},
kf:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.b.dm(a-b,u)
return(a<0?a+u:a)+b},
N:function(a,b,c){if(a==null)return C.d.al("null",c)
return C.d.al(C.b.dc(Math.abs(a-0)<$.O().a?0:a,b),c+b+1)},
c4:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.y],"$ab")
u=H.c([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.v)(a),++r){q=V.N(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.d(u,p)
C.a.n(u,p,C.d.al(u[p],s))}return u},
jQ:function(){var u=$.kz
return u==null?$.kz=V.bb(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bb:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ac(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ky:function(a,b,c){var u=c.w(0,Math.sqrt(c.I(c))),t=b.ag(u),s=t.w(0,Math.sqrt(t.I(t))),r=u.ag(s),q=new V.L(a.a,a.b,a.c),p=s.aE(0).I(q),o=r.aE(0).I(q),n=u.aE(0).I(q)
return V.bb(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
dw:function(){var u=$.kD
return u==null?$.kD=new V.ad(0,0):u},
kE:function(){var u=$.cu
return u==null?$.cu=new V.a6(0,0,0):u},
md:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dz(a,b,c,d)},
cF:function(){var u=$.kT
return u==null?$.kT=new V.L(0,0,0):u},
mm:function(){var u=$.im
return u==null?$.im=new V.L(-1,0,0):u},
jX:function(){var u=$.io
return u==null?$.io=new V.L(0,1,0):u},
kU:function(){var u=$.ip
return u==null?$.ip=new V.L(0,0,1):u},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
aM:function aM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ff:function ff(a){this.a=a},
dn:function dn(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ac:function ac(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ad:function ad(a,b){this.a=a
this.b=b},
a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},
dz:function dz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aG:function aG(a,b){this.a=a
this.b=b},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
S:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.h(P.x("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.d.as(a,0)
t=C.d.as(b,0)
s=new V.hp()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
t:function(a){var u=new V.hy()
u.dD(a)
return u},
i_:function(){var u=new V.hZ(),t=P.f
u.sfD(new H.Z([t,V.cy]))
u.sfF(new H.Z([t,V.cB]))
u.c=null
return u},
b6:function b6(){},
al:function al(){},
dk:function dk(){},
ag:function ag(){this.a=null},
hp:function hp(){this.b=this.a=null},
hy:function hy(){this.a=null},
cy:function cy(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dK:function dK(a,b,c){this.a=a
this.b=b
this.c=c},
cB:function cB(a){this.b=a
this.c=null},
hZ:function hZ(){this.c=this.b=this.a=null},
cC:function cC(a){this.b=a
this.a=this.c=null},
np:function(a){P.ml(C.G,new V.jB(a))},
mg:function(a){var u=new V.hC()
u.dF(a,!0)
return u},
bm:function bm(){},
jB:function jB(a){this.a=a},
f5:function f5(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fs:function fs(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ft:function ft(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hm:function hm(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hC:function hC(){this.b=this.a=null},
hE:function hE(a){this.a=a},
hD:function hD(a){this.a=a},
hF:function hF(a){this.a=a}},U={
kp:function(a){var u=new U.d5()
u.a=a
return u},
d5:function d5(){this.b=this.a=null},
bM:function bM(){},
dA:function dA(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={d9:function d9(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
m1:function(a,b){var u=a.aL,t=new A.fP(b,u)
t.dE(b,u)
t.dB(a,b)
return t},
m2:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.l(a9,"$ib",[A.aq],"$ab")
H.l(b0,"$ib",[A.as],"$ab")
H.l(b1,"$ib",[A.au],"$ab")
u="MaterialLight_"+a0.ga2(a0)+a1.ga2(a1)+a2.ga2(a2)+a3.ga2(a3)+a4.ga2(a4)+a5.ga2(a5)+a6.ga2(a6)+a7.ga2(a7)+a8.ga2(a8)+"_"
u+=a?"1":"0"
u+=b?"1":"0"
u+=c?"1":"0"
u=u+"0_"+e
t=a9.length
if(t>0){u+="_Dir"
for(s=0;s<a9.length;a9.length===t||(0,H.v)(a9),++s)u+="_"+H.j(a9[s].a)}t=b0.length
if(t>0){u+="_Point"
for(s=0;s<b0.length;b0.length===t||(0,H.v)(b0),++s)u+="_"+H.j(b0[s].a)}t=b1.length
if(t>0){u+="_Spot"
for(s=0;s<b1.length;b1.length===t||(0,H.v)(b1),++s)u+="_"+H.j(b1[s].a)}for(t=a9.length,r=0,q=!1,s=0;s<t;++s,q=!0)r+=a9[s].b
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
f=$.bj()
if(j){t=$.bi()
f=new Z.bw(f.a|t.a)}if(i){t=$.bh()
f=new Z.bw(f.a|t.a)}if(h){t=$.bg()
f=new Z.bw(f.a|t.a)}return new A.fS(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,r,o,k,o,q,g,!0,!1,!1,n,q,l,j,i,!1,!1,h,!1,!1,c,!1,e,u.charCodeAt(0)==0?u:u,f)},
jk:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jl:function(a,b,c){var u
A.jk(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.jC(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
mE:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jk(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
mB:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jl(b,t,"ambient")
b.a+="\n"},
mC:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jl(b,t,"diffuse")
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
mF:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jl(b,t,"invDiffuse")
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
mL:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jl(b,t,"specular")
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
mH:function(a,b){var u,t,s
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
mJ:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jk(b,t,"reflect")
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
mK:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jk(b,t,"refract")
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
mD:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.j(u)
s=A.jC(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.a8()
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
r=[P.f]
o=H.c([],r)
if(!a.b.a)n=!1
else n=!0
if(n)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.c([],r)
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
c.a+="      highLight = intensity*("+C.a.l(m," + ")+");\n"}else c.a+="   highLight = "+C.a.l(m," + ")+";\n"
C.a.h(o,"highLight")}r=c.a+="   return lit.color*("+C.a.l(o," + ")+");\n"
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
mI:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.j(u)
s=A.jC(t)
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
if(typeof u!=="number")return u.a8()
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
c.a=r+"\n"}r=[P.f]
l=H.c([],r)
C.a.h(l,"lit.color")
if(o)C.a.h(l,"attenuation")
if(u)C.a.h(l,"textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.l(l," * ")+";\n"
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
if(o)C.a.h(l,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
C.a.h(l,"highLight")
m=u?", txtCube":""
if(p)m+=", shadowCube"
o=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
o+="   vec3 intensity = "+t+"Intensity(normDir, lit"+m+");\n"
c.a=o
c.a=o+"   if(length(intensity) > 0.0001) {\n"
k=H.c([],r)
if(!a.c.a)r=!1
else r=!0
if(r)C.a.h(k,"diffuse(norm, normDir)")
if(!a.d.a)r=!1
else r=!0
if(r)C.a.h(k,"invDiffuse(norm, normDir)")
if(!a.e.a)r=!1
else r=!0
if(r)C.a.h(k,"specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.a.l(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.l(l," + ")+");\n"
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
mM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.j(u)
s=A.jC(t)
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
if(typeof u!=="number")return u.a8()
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
c.a=u+"\n"}u=[P.f]
j=H.c([],u)
if(n)C.a.h(j,"attenuation")
if(o)C.a.h(j,"scale")
if(m)C.a.h(j,"texture2D(txt2D, txtLoc).rgb")
else C.a.h(j,"vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.l(j," * ")+";\n"
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
if(r)C.a.h(j,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"highLight")
k=m?", txt2D":""
if(p)k+=", shadow2D"
r=c.a+="   vec3 intensity = "+t+"Intensity(lit"+k+");\n"
r+="   if(length(intensity) > 0.0001) {\n"
c.a=r
c.a=r+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
i=H.c([],u)
if(!a.c.a)u=!1
else u=!0
if(u)C.a.h(i,"diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)C.a.h(i,"invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)C.a.h(i,"specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.a.l(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.l(j," + ")+");\n"
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
mG:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.f])
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
u=b.a+="   return "+C.a.l(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
mN:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.bd("")
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
A.mE(a,j)
A.mB(a,j)
A.mC(a,j)
A.mF(a,j)
A.mL(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.mJ(a,j)
A.mK(a,j)}A.mH(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.v)(q),++o)A.mD(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.v)(q),++o)A.mI(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.v)(q),++o)A.mM(a,q[o],j)
A.mG(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.c([],[P.f])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.v)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.d.aa(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.v)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.d.aa(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.v)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.d.aa(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)C.a.h(n,"emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)C.a.h(n,"reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.l(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
mO:function(a,b){var u,t,s
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
mQ:function(a,b){var u
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
mP:function(a,b){var u
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
mS:function(a,b){var u,t
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
mT:function(a,b){var u,t
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
mR:function(a,b){var u
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
mU:function(a,b){var u
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
jC:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.d.aa(a,1)},
jW:function(a,b,c,d,e){var u=new A.i8(a,c,e)
u.f=d
u.sfH(P.m0(d,0,P.p))
return u},
cZ:function cZ(a,b,c){this.a=a
this.b=b
this.c=c},
eR:function eR(a){this.a=a},
ab:function ab(a,b,c){this.a=a
this.b=b
this.c=c},
fP:function fP(a,b){var _=this
_.hQ=_.hP=_.cI=_.cH=_.aL=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.i2=_.i1=_.i0=_.bD=_.bC=_.bB=_.bA=_.bz=_.by=_.i_=_.hZ=_.cP=_.hY=_.hX=_.cO=_.cN=_.hW=_.hV=_.cM=_.cL=_.hU=_.hT=_.cK=_.hS=_.hR=_.cJ=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aq:function aq(a,b){this.a=a
this.b=b},
as:function as(a,b){this.a=a
this.b=b},
au:function au(a,b){this.a=a
this.b=b},
fS:function fS(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aL=b3
_.cH=b4},
bV:function bV(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bW:function bW(a,b,c,d,e,f,g,h,i,j){var _=this
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
bZ:function bZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cx:function cx(){},
dL:function dL(){},
id:function id(a){this.a=a},
av:function av(a,b,c){this.a=a
this.c=b
this.d=c},
ia:function ia(a,b,c){this.a=a
this.c=b
this.d=c},
ib:function ib(a,b,c){this.a=a
this.c=b
this.d=c},
ic:function ic(a,b,c){this.a=a
this.c=b
this.d=c},
i8:function i8(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a7:function a7(a,b,c){this.a=a
this.c=b
this.d=c},
i9:function i9(a,b,c){this.a=a
this.c=b
this.d=c},
T:function T(a,b,c){this.a=a
this.c=b
this.d=c},
cD:function cD(a,b,c){this.a=a
this.c=b
this.d=c},
ie:function ie(a,b,c){this.a=a
this.c=b
this.d=c},
cE:function cE(a,b,c){this.a=a
this.c=b
this.d=c},
an:function an(a,b,c){this.a=a
this.c=b
this.d=c},
bX:function bX(a,b,c){this.a=a
this.c=b
this.d=c},
bY:function bY(a,b,c){this.a=a
this.c=b
this.d=c}},F={
nu:function(){return F.n4(15,30,0.5,1,new F.jD())},
n4:function(a,b,c,d,e){var u=F.ns(a,b,new F.jq(H.k(e,{func:1,ret:V.a6,args:[P.y]}),d,b,c))
if(u==null)return
u.ay()
u.hh(new F.iv(),new F.hg())
return u},
ns:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,{func:1,ret:-1,args:[F.aw,P.y,P.y]})
if(a<1)return
if(b<1)return
u=new F.dC()
t=new F.iq(u)
t.b=!1
s=[F.aw]
t.sfI(H.c([],s))
u.a=t
t=new F.hB()
t.sbl(H.c([],[F.bN]))
u.b=t
t=new F.hA(u)
t.sei(H.c([],[F.bt]))
u.c=t
t=new F.hz(u)
t.sec(H.c([],[F.a2]))
u.d=t
u.e=null
r=H.c([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
o=t.cw(new V.aM(s,0,0,1),new V.ad(p,1))
c.$3(o,p,0)
C.a.h(r,o.cF(null))}for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
o=k.cw(new V.aM(j,i,h,1),new V.ad(p,m))
c.$3(o,p,n)
C.a.h(r,o.cF(null))}}u.d.fK(a+1,b+1,r)
return u},
fi:function(a,b,c){var u=new F.a2(),t=a.a
if(t==null)H.A(P.x("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.A(P.x("May not create a face with vertices attached to different shapes."))
u.fq(a)
u.fs(b)
u.ft(c)
C.a.h(u.a.a.d.b,u)
u.a.a.X()
return u},
kV:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aw(),r=new F.iy()
r.sbl(H.c([],[F.bN]))
s.b=r
r=new F.iu()
u=[F.bt]
r.sej(H.c([],u))
r.sek(H.c([],u))
s.c=r
r=new F.ir()
u=[F.a2]
r.sed(H.c([],u))
r.see(H.c([],u))
r.sef(H.c([],u))
s.d=r
h=$.ly()
s.e=0
r=$.bj()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bi().a)!==0?e:t
s.x=(u&$.bh().a)!==0?b:t
s.y=(u&$.bC().a)!==0?f:t
s.z=(u&$.bD().a)!==0?g:t
s.Q=(u&$.lz().a)!==0?c:t
s.ch=(u&$.c9().a)!==0?i:0
s.cx=(u&$.bg().a)!==0?a:t
return s},
jD:function jD(){},
jq:function jq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a2:function a2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fj:function fj(){},
hG:function hG(){},
bt:function bt(){},
fF:function fF(){},
i7:function i7(){},
bN:function bN(){},
dC:function dC(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hz:function hz(a){this.a=a
this.b=null},
hA:function hA(a){this.a=a
this.b=null},
hB:function hB(){this.b=null},
aw:function aw(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iA:function iA(a){this.a=a},
iz:function iz(a){this.a=a},
iq:function iq(a){this.a=a
this.c=this.b=null},
ir:function ir(){this.d=this.c=this.b=null},
is:function is(a,b){this.a=a
this.b=b},
it:function it(a,b){this.a=a
this.b=b},
iu:function iu(){this.c=this.b=null},
iw:function iw(){},
iv:function iv(){},
ix:function ix(){},
hg:function hg(){},
iy:function iy(){this.b=null}},T={dI:function dI(){}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jO.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gG:function(a){return H.cv(a)},
i:function(a){return"Instance of '"+H.bP(a)+"'"}}
J.fz.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iM:1}
J.dd.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.de.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.hl.prototype={}
J.bv.prototype={}
J.b9.prototype={
i:function(a){var u=a[$.ln()]
if(u==null)return this.dv(a)
return"JavaScript function for "+H.j(J.aJ(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibr:1}
J.aB.prototype={
h:function(a,b){H.H(b,H.w(a,0))
if(!!a.fixed$length)H.A(P.ai("add"))
a.push(b)},
d4:function(a,b){if(!!a.fixed$length)H.A(P.ai("removeAt"))
if(b<0||b>=a.length)throw H.h(P.dy(b,null))
return a.splice(b,1)[0]},
N:function(a,b){var u
if(!!a.fixed$length)H.A(P.ai("remove"))
for(u=0;u<a.length;++u)if(J.Y(a[u],b)){a.splice(u,1)
return!0}return!1},
D:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.w(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.bn(a))}},
l:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.n(t,u,H.j(a[u]))
return t.join(b)},
hd:function(a){return this.l(a,"")},
h8:function(a,b){var u,t,s
H.k(b,{func:1,ret:P.M,args:[H.w(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.I(b.$1(s)))return s
if(a.length!==u)throw H.h(P.bn(a))}throw H.h(H.fy())},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
ds:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.aX(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.aX(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.w(a,0)])
return H.c(a.slice(b,c),[H.w(a,0)])},
gh7:function(a){if(a.length>0)return a[0]
throw H.h(H.fy())},
gb_:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.fy())},
aP:function(a,b,c,d){var u,t,s=H.w(a,0)
H.l(d,"$ii",[s],"$ai")
if(!!a.immutable$list)H.A(P.ai("setRange"))
P.jT(b,c,a.length)
u=c-b
if(u===0)return
P.jS(0,"skipCount")
H.l(d,"$ib",[s],"$ab")
s=J.js(d)
if(u>s.gm(d))throw H.h(H.lW())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
cA:function(a,b){var u,t
H.k(b,{func:1,ret:P.M,args:[H.w(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.I(b.$1(a[t])))return!0
if(a.length!==u)throw H.h(P.bn(a))}return!1},
b7:function(a,b){var u=H.w(a,0)
H.k(b,{func:1,ret:P.p,args:[u,u]})
if(!!a.immutable$list)H.A(P.ai("sort"))
H.dD(a,0,a.length-1,b,u)},
L:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Y(a[u],b))return!0
return!1},
i:function(a){return P.jL(a,"[","]")},
gM:function(a){return new J.ap(a,a.length,[H.w(a,0)])},
gG:function(a){return H.cv(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.A(P.ai("set length"))
if(b<0)throw H.h(P.aX(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.h(H.c3(a,b))
return a[b]},
n:function(a,b,c){H.H(c,H.w(a,0))
if(!!a.immutable$list)H.A(P.ai("indexed set"))
if(b>=a.length||b<0)throw H.h(H.c3(a,b))
a[b]=c},
p:function(a,b){var u,t=[H.w(a,0)]
H.l(b,"$ib",t,"$ab")
u=C.e.p(a.length,b.gm(b))
t=H.c([],t)
this.sm(t,u)
this.aP(t,0,a.length,a)
this.aP(t,a.length,u,b)
return t},
$ii:1,
$ib:1}
J.jN.prototype={}
J.ap.prototype={
gC:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.h(H.v(s))
u=t.c
if(u>=r){t.sc_(null)
return!1}t.sc_(s[u]);++t.c
return!0},
sc_:function(a){this.d=H.H(a,H.w(this,0))},
$iaS:1}
J.bs.prototype={
fW:function(a,b){var u
H.lg(b)
if(typeof b!=="number")throw H.h(H.aH(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gaZ(b)
if(this.gaZ(a)===u)return 0
if(this.gaZ(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaZ:function(a){return a===0?1/a<0:a<0},
cQ:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.ai(""+a+".floor()"))},
a1:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ai(""+a+".round()"))},
dc:function(a,b){var u
if(b>20)throw H.h(P.aX(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gaZ(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
p:function(a,b){if(typeof b!=="number")throw H.h(H.aH(b))
return a+b},
u:function(a,b){if(typeof b!=="number")throw H.h(H.aH(b))
return a-b},
J:function(a,b){if(typeof b!=="number")throw H.h(H.aH(b))
return a*b},
dm:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dA:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cs(a,b)},
V:function(a,b){return(a|0)===a?a/b|0:this.cs(a,b)},
cs:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.ai("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
aU:function(a,b){var u
if(a>0)u=this.fA(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fA:function(a,b){return b>31?0:a>>>b},
a9:function(a,b){if(typeof b!=="number")throw H.h(H.aH(b))
return a>b},
$iy:1,
$ia9:1}
J.dc.prototype={$ip:1}
J.fA.prototype={}
J.b8.prototype={
bv:function(a,b){if(b<0)throw H.h(H.c3(a,b))
if(b>=a.length)H.A(H.c3(a,b))
return a.charCodeAt(b)},
as:function(a,b){if(b>=a.length)throw H.h(H.c3(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.h(P.jH(b,null,null))
return a+b},
b8:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
aQ:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.dy(b,null))
if(b>c)throw H.h(P.dy(b,null))
if(c>a.length)throw H.h(P.dy(c,null))
return a.substring(b,c)},
aa:function(a,b){return this.aQ(a,b,null)},
hJ:function(a){return a.toLowerCase()},
J:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.C)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
al:function(a,b){var u=b-a.length
if(u<=0)return a
return this.J(" ",u)+a},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ikB:1,
$if:1}
H.q.prototype={
gm:function(a){return this.a.length},
j:function(a,b){return C.d.bv(this.a,b)},
$adO:function(){return[P.p]},
$au:function(){return[P.p]},
$ai:function(){return[P.p]},
$ab:function(){return[P.p]}}
H.fc.prototype={}
H.bL.prototype={
gM:function(a){var u=this
return new H.cn(u,u.gm(u),[H.ak(u,"bL",0)])},
b4:function(a,b){return this.du(0,H.k(b,{func:1,ret:P.M,args:[H.ak(this,"bL",0)]}))}}
H.cn.prototype={
gC:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=J.js(s),q=r.gm(s)
if(t.b!==q)throw H.h(P.bn(s))
u=t.c
if(u>=q){t.saG(null)
return!1}t.saG(r.v(s,u));++t.c
return!0},
saG:function(a){this.d=H.H(a,H.w(this,0))},
$iaS:1}
H.fM.prototype={
gM:function(a){return new H.fN(J.bE(this.a),this.b,this.$ti)},
gm:function(a){return J.bF(this.a)},
v:function(a,b){return this.b.$1(J.jG(this.a,b))},
$ai:function(a,b){return[b]}}
H.fN.prototype={
t:function(){var u=this,t=u.b
if(t.t()){u.saG(u.c.$1(t.gC(t)))
return!0}u.saG(null)
return!1},
gC:function(a){return this.a},
saG:function(a){this.a=H.H(a,H.w(this,1))},
$aaS:function(a,b){return[b]}}
H.fO.prototype={
gm:function(a){return J.bF(this.a)},
v:function(a,b){return this.b.$1(J.jG(this.a,b))},
$abL:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cG.prototype={
gM:function(a){return new H.iD(J.bE(this.a),this.b,this.$ti)}}
H.iD.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(H.I(t.$1(u.gC(u))))return!0
return!1},
gC:function(a){var u=this.a
return u.gC(u)}}
H.bJ.prototype={}
H.dO.prototype={}
H.dN.prototype={}
H.i4.prototype={
a_:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hh.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fC.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.j(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.j(t.a)+")"
return s+r+"' on '"+u+"' ("+H.j(t.a)+")"}}
H.ih.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jE.prototype={
$1:function(a){if(!!J.X(a).$ibq)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:13}
H.ep.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iah:1}
H.cd.prototype={
i:function(a){return"Closure '"+H.bP(this).trim()+"'"},
$ibr:1,
ghK:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hU.prototype={}
H.hK.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c8(u)+"'"}}
H.cb.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cb))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.cv(this.a)
else u=typeof t!=="object"?J.cX(t):H.cv(t)
return(u^H.cv(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bP(u)+"'")}}
H.i6.prototype={
i:function(a){return this.a}}
H.eY.prototype={
i:function(a){return this.a}}
H.hw.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.iE.prototype={
i:function(a){return"Assertion failed: "+P.da(this.a)}}
H.Z.prototype={
gm:function(a){return this.a},
gW:function(a){return new H.dh(this,[H.w(this,0)])},
cE:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.c9(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.c9(t,b)}else return s.hb(b)},
hb:function(a){var u=this.d
if(u==null)return!1
return this.bE(this.be(u,J.cX(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aS(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aS(r,b)
s=t==null?null:t.b
return s}else return q.hc(b)},
hc:function(a){var u,t,s=this.d
if(s==null)return
u=this.be(s,J.cX(a)&0x3ffffff)
t=this.bE(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s,r,q,p,o=this
H.H(b,H.w(o,0))
H.H(c,H.w(o,1))
if(typeof b==="string"){u=o.b
o.c0(u==null?o.b=o.bj():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.c0(t==null?o.c=o.bj():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bj()
r=J.cX(b)&0x3ffffff
q=o.be(s,r)
if(q==null)o.bo(s,r,[o.bk(b,c)])
else{p=o.bE(q,b)
if(p>=0)q[p].b=c
else q.push(o.bk(b,c))}}},
D:function(a,b){var u,t,s=this
H.k(b,{func:1,ret:-1,args:[H.w(s,0),H.w(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.h(P.bn(s))
u=u.c}},
c0:function(a,b,c){var u,t=this
H.H(b,H.w(t,0))
H.H(c,H.w(t,1))
u=t.aS(a,b)
if(u==null)t.bo(a,b,t.bk(b,c))
else u.b=c},
em:function(){this.r=this.r+1&67108863},
bk:function(a,b){var u,t=this,s=new H.fG(H.H(a,H.w(t,0)),H.H(b,H.w(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.em()
return s},
bE:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Y(a[t].a,b))return t
return-1},
i:function(a){return P.kx(this)},
aS:function(a,b){return a[b]},
be:function(a,b){return a[b]},
bo:function(a,b,c){a[b]=c},
e7:function(a,b){delete a[b]},
c9:function(a,b){return this.aS(a,b)!=null},
bj:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bo(t,u,t)
this.e7(t,u)
return t}}
H.fG.prototype={}
H.dh.prototype={
gm:function(a){return this.a.a},
gM:function(a){var u=this.a,t=new H.fH(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fH.prototype={
gC:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.bn(t))
else{t=u.c
if(t==null){u.scc(null)
return!1}else{u.scc(t.a)
u.c=u.c.c
return!0}}},
scc:function(a){this.d=H.H(a,H.w(this,0))},
$iaS:1}
H.ju.prototype={
$1:function(a){return this.a(a)},
$S:13}
H.jv.prototype={
$2:function(a,b){return this.a(a,b)},
$S:44}
H.jw.prototype={
$1:function(a){return this.a(H.E(a))},
$S:26}
H.fB.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikB:1}
H.cs.prototype={}
H.dp.prototype={
gm:function(a){return a.length},
$iG:1,
$aG:function(){}}
H.cr.prototype={
j:function(a,b){H.by(b,a,a.length)
return a[b]},
$abJ:function(){return[P.y]},
$au:function(){return[P.y]},
$ii:1,
$ai:function(){return[P.y]},
$ib:1,
$ab:function(){return[P.y]}}
H.dq.prototype={
$abJ:function(){return[P.p]},
$au:function(){return[P.p]},
$ii:1,
$ai:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.h8.prototype={
j:function(a,b){H.by(b,a,a.length)
return a[b]}}
H.h9.prototype={
j:function(a,b){H.by(b,a,a.length)
return a[b]}}
H.ha.prototype={
j:function(a,b){H.by(b,a,a.length)
return a[b]}}
H.hb.prototype={
j:function(a,b){H.by(b,a,a.length)
return a[b]}}
H.hc.prototype={
j:function(a,b){H.by(b,a,a.length)
return a[b]}}
H.dr.prototype={
gm:function(a){return a.length},
j:function(a,b){H.by(b,a,a.length)
return a[b]}}
H.hd.prototype={
gm:function(a){return a.length},
j:function(a,b){H.by(b,a,a.length)
return a[b]}}
H.cK.prototype={}
H.cL.prototype={}
H.cM.prototype={}
H.cN.prototype={}
P.iG.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:12}
P.iF.prototype={
$1:function(a){var u,t
this.a.a=H.k(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:37}
P.iH.prototype={
$0:function(){this.a.$0()},
$S:1}
P.iI.prototype={
$0:function(){this.a.$0()},
$S:1}
P.ev.prototype={
dR:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c2(new P.jg(this,b),0),a)
else throw H.h(P.ai("`setTimeout()` not found."))},
dS:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c2(new P.jf(this,a,Date.now(),b),0),a)
else throw H.h(P.ai("Periodic timer."))},
$ib1:1}
P.jg.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:2}
P.jf.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.dA(u,q)}s.c=r
t.d.$1(s)},
$S:1}
P.b5.prototype={
hf:function(a){if(this.c!==6)return!0
return this.b.b.bM(H.k(this.d,{func:1,ret:P.M,args:[P.K]}),a.a,P.M,P.K)},
ha:function(a){var u=this.e,t=P.K,s={futureOr:1,type:H.w(this,1)},r=this.b.b
if(H.eL(u,{func:1,args:[P.K,P.ah]}))return H.k7(r.hD(u,a.a,a.b,null,t,P.ah),s)
else return H.k7(r.bM(H.k(u,{func:1,args:[P.K]}),a.a,null,t),s)}}
P.ay.prototype={
da:function(a,b,c){var u,t,s,r=H.w(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.V
if(u!==C.f){u.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.mW(b,u)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.ay($.V,[c])
s=b==null?1:3
this.c1(new P.b5(t,s,a,b,[r,c]))
return t},
hG:function(a,b){return this.da(a,null,b)},
c1:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.m(t.c,"$ib5")
t.c=a}else{if(s===2){u=H.m(t.c,"$iay")
s=u.a
if(s<4){u.c1(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.jo(null,null,s,H.k(new P.iQ(t,a),{func:1,ret:-1}))}},
cm:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.m(p.c,"$ib5")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.m(p.c,"$iay")
u=q.a
if(u<4){q.cm(a)
return}p.a=u
p.c=q.c}o.a=p.aT(a)
u=p.b
u.toString
P.jo(null,null,u,H.k(new P.iU(o,p),{func:1,ret:-1}))}},
bn:function(){var u=H.m(this.c,"$ib5")
this.c=null
return this.aT(u)},
aT:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
c5:function(a){var u,t,s=this,r=H.w(s,0)
H.k7(a,{futureOr:1,type:r})
u=s.$ti
if(H.k4(a,"$icj",u,"$acj"))if(H.k4(a,"$iay",u,null))P.kW(a,s)
else P.ms(a,s)
else{t=s.bn()
H.H(a,r)
s.a=4
s.c=a
P.cJ(s,t)}},
c6:function(a,b){var u,t=this
H.m(b,"$iah")
u=t.bn()
t.a=8
t.c=new P.aa(a,b)
P.cJ(t,u)},
$icj:1}
P.iQ.prototype={
$0:function(){P.cJ(this.a,this.b)},
$S:1}
P.iU.prototype={
$0:function(){P.cJ(this.b,this.a.a)},
$S:1}
P.iR.prototype={
$1:function(a){var u=this.a
u.a=0
u.c5(a)},
$S:12}
P.iS.prototype={
$2:function(a,b){H.m(b,"$iah")
this.a.c6(a,b)},
$1:function(a){return this.$2(a,null)},
$S:45}
P.iT.prototype={
$0:function(){this.a.c6(this.b,this.c)},
$S:1}
P.iX.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.d7(H.k(s.d,{func:1}),null)}catch(r){u=H.ao(r)
t=H.c6(r)
if(o.d){s=H.m(o.a.a.c,"$iaa").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.m(o.a.a.c,"$iaa")
else q.b=new P.aa(u,t)
q.a=!0
return}if(!!J.X(n).$icj){if(n instanceof P.ay&&n.a>=4){if(n.a===8){s=o.b
s.b=H.m(n.c,"$iaa")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.hG(new P.iY(p),null)
s.a=!1}},
$S:2}
P.iY.prototype={
$1:function(a){return this.a},
$S:35}
P.iW.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.w(s,0)
q=H.H(n.c,r)
p=H.w(s,1)
n.a.b=s.b.b.bM(H.k(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ao(o)
t=H.c6(o)
s=n.a
s.b=new P.aa(u,t)
s.a=!0}},
$S:2}
P.iV.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.m(m.a.a.c,"$iaa")
r=m.c
if(H.I(r.hf(u))&&r.e!=null){q=m.b
q.b=r.ha(u)
q.a=!1}}catch(p){t=H.ao(p)
s=H.c6(p)
r=H.m(m.a.a.c,"$iaa")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.aa(t,s)
n.a=!0}},
$S:2}
P.dR.prototype={}
P.hN.prototype={
gm:function(a){var u,t,s=this,r={},q=new P.ay($.V,[P.p])
r.a=0
u=H.w(s,0)
t=H.k(new P.hP(r,s),{func:1,ret:-1,args:[u]})
H.k(new P.hQ(r,q),{func:1,ret:-1})
W.a8(s.a,s.b,t,!1,u)
return q}}
P.hP.prototype={
$1:function(a){H.H(a,H.w(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.w(this.b,0)]}}}
P.hQ.prototype={
$0:function(){this.b.c5(this.a.a)},
$S:1}
P.cz.prototype={}
P.hO.prototype={}
P.b1.prototype={}
P.aa.prototype={
i:function(a){return H.j(this.a)},
$ibq:1}
P.jj.prototype={$io1:1}
P.jn.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dt():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.i(0)
throw u},
$S:1}
P.j2.prototype={
hE:function(a){var u,t,s,r=null
H.k(a,{func:1,ret:-1})
try{if(C.f===$.V){a.$0()
return}P.l1(r,r,this,a,-1)}catch(s){u=H.ao(s)
t=H.c6(s)
P.jm(r,r,this,u,H.m(t,"$iah"))}},
hF:function(a,b,c){var u,t,s,r=null
H.k(a,{func:1,ret:-1,args:[c]})
H.H(b,c)
try{if(C.f===$.V){a.$1(b)
return}P.l2(r,r,this,a,b,-1,c)}catch(s){u=H.ao(s)
t=H.c6(s)
P.jm(r,r,this,u,H.m(t,"$iah"))}},
fT:function(a,b){return new P.j4(this,H.k(a,{func:1,ret:b}),b)},
bq:function(a){return new P.j3(this,H.k(a,{func:1,ret:-1}))},
cB:function(a,b){return new P.j5(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
d7:function(a,b){H.k(a,{func:1,ret:b})
if($.V===C.f)return a.$0()
return P.l1(null,null,this,a,b)},
bM:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.H(b,d)
if($.V===C.f)return a.$1(b)
return P.l2(null,null,this,a,b,c,d)},
hD:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.H(b,e)
H.H(c,f)
if($.V===C.f)return a.$2(b,c)
return P.mX(null,null,this,a,b,c,d,e,f)}}
P.j4.prototype={
$0:function(){return this.a.d7(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.j3.prototype={
$0:function(){return this.a.hE(this.b)},
$S:2}
P.j5.prototype={
$1:function(a){var u=this.c
return this.a.hF(this.b,H.H(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.j0.prototype={
gM:function(a){var u=this,t=new P.e6(u,u.r,u.$ti)
t.c=u.e
return t},
gm:function(a){return this.a},
L:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.m(u[b],"$ic_")!=null}else{t=this.e3(b)
return t}},
e3:function(a){var u=this.d
if(u==null)return!1
return this.bd(this.ce(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.H(b,H.w(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.c2(u==null?s.b=P.jZ():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.c2(t==null?s.c=P.jZ():t,b)}else return s.dU(0,b)},
dU:function(a,b){var u,t,s,r=this
H.H(b,H.w(r,0))
u=r.d
if(u==null)u=r.d=P.jZ()
t=r.c7(b)
s=u[t]
if(s==null)u[t]=[r.ba(b)]
else{if(r.bd(s,b)>=0)return!1
s.push(r.ba(b))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fe(this.c,b)
else return this.fd(0,b)},
fd:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.ce(r,b)
t=s.bd(u,b)
if(t<0)return!1
s.ct(u.splice(t,1)[0])
return!0},
c2:function(a,b){H.H(b,H.w(this,0))
if(H.m(a[b],"$ic_")!=null)return!1
a[b]=this.ba(b)
return!0},
fe:function(a,b){var u
if(a==null)return!1
u=H.m(a[b],"$ic_")
if(u==null)return!1
this.ct(u)
delete a[b]
return!0},
c4:function(){this.r=1073741823&this.r+1},
ba:function(a){var u,t=this,s=new P.c_(H.H(a,H.w(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.c4()
return s},
ct:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.c4()},
c7:function(a){return J.cX(a)&1073741823},
ce:function(a,b){return a[this.c7(b)]},
bd:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Y(a[t].a,b))return t
return-1}}
P.c_.prototype={}
P.e6.prototype={
gC:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.bn(t))
else{t=u.c
if(t==null){u.sc3(null)
return!1}else{u.sc3(H.H(t.a,H.w(u,0)))
u.c=u.c.b
return!0}}},
sc3:function(a){this.d=H.H(a,H.w(this,0))},
$iaS:1}
P.fI.prototype={$ii:1,$ib:1}
P.u.prototype={
gM:function(a){return new H.cn(a,this.gm(a),[H.c5(this,a,"u",0)])},
v:function(a,b){return this.j(a,b)},
hI:function(a,b){var u,t=this,s=H.c([],[H.c5(t,a,"u",0)])
C.a.sm(s,t.gm(a))
for(u=0;u<t.gm(a);++u)C.a.n(s,u,t.j(a,u))
return s},
hH:function(a){return this.hI(a,!0)},
p:function(a,b){var u,t=this,s=[H.c5(t,a,"u",0)]
H.l(b,"$ib",s,"$ab")
u=H.c([],s)
C.a.sm(u,C.e.p(t.gm(a),b.gm(b)))
C.a.aP(u,0,t.gm(a),a)
C.a.aP(u,t.gm(a),u.length,b)
return u},
i:function(a){return P.jL(a,"[","]")}}
P.fK.prototype={}
P.fL.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.j(a)
t.a=u+": "
t.a+=H.j(b)},
$S:15}
P.a4.prototype={
D:function(a,b){var u,t,s=this
H.k(b,{func:1,ret:-1,args:[H.c5(s,a,"a4",0),H.c5(s,a,"a4",1)]})
for(u=J.bE(s.gW(a));u.t();){t=u.gC(u)
b.$2(t,s.j(a,t))}},
gm:function(a){return J.bF(this.gW(a))},
i:function(a){return P.kx(a)},
$iD:1}
P.j7.prototype={
a6:function(a,b){var u
for(u=J.bE(H.l(b,"$ii",this.$ti,"$ai"));u.t();)this.h(0,u.gC(u))},
i:function(a){return P.jL(this,"{","}")},
v:function(a,b){var u,t,s,r=this
P.jS(b,"index")
for(u=P.mv(r,r.r,H.w(r,0)),t=0;u.t();){s=u.d
if(b===t)return s;++t}throw H.h(P.R(b,r,"index",null,t))},
$ii:1,
$ikI:1}
P.e7.prototype={}
P.ce.prototype={}
P.cf.prototype={}
P.fe.prototype={
$ace:function(){return[P.f,[P.b,P.p]]}}
P.fw.prototype={
i:function(a){return this.a}}
P.fv.prototype={
e4:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.d(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.bd("")
if(r>b)q.a+=C.d.aQ(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lI(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$acf:function(){return[P.f,P.f]}}
P.ik.prototype={}
P.il.prototype={
fX:function(a){var u,t,s=P.jT(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jh(u)
if(t.eg(a,0,s)!==s)t.cu(C.d.bv(a,s-1),0)
return new Uint8Array(u.subarray(0,H.my(0,t.b,u.length)))},
$acf:function(){return[P.f,[P.b,P.p]]}}
P.jh.prototype={
cu:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eg:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.d.bv(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.d.as(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cu(r,C.d.as(a,p)))s=p}else if(r<=2047){q=n.b
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
P.M.prototype={}
P.bo.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bo&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.e.aU(u,30))&1073741823},
i:function(a){var u=this,t=P.lP(H.ma(u)),s=P.d6(H.m8(u)),r=P.d6(H.m4(u)),q=P.d6(H.m5(u)),p=P.d6(H.m7(u)),o=P.d6(H.m9(u)),n=P.lQ(H.m6(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.y.prototype={}
P.aP.prototype={
p:function(a,b){return new P.aP(C.e.p(this.a,b.gcd()))},
u:function(a,b){return new P.aP(C.e.u(this.a,b.gcd()))},
a9:function(a,b){return C.e.a9(this.a,b.gcd())},
q:function(a,b){if(b==null)return!1
return b instanceof P.aP&&this.a===b.a},
gG:function(a){return C.e.gG(this.a)},
i:function(a){var u,t,s,r=new P.fb(),q=this.a
if(q<0)return"-"+new P.aP(0-q).i(0)
u=r.$1(C.e.V(q,6e7)%60)
t=r.$1(C.e.V(q,1e6)%60)
s=new P.fa().$1(q%1e6)
return""+C.e.V(q,36e8)+":"+H.j(u)+":"+H.j(t)+"."+H.j(s)}}
P.fa.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:23}
P.fb.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:23}
P.bq.prototype={}
P.eQ.prototype={
i:function(a){return"Assertion failed"}}
P.dt.prototype={
i:function(a){return"Throw of null."}}
P.aK.prototype={
gbc:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbb:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbc()+o+u
if(!q.a)return t
s=q.gbb()
r=P.da(q.b)
return t+s+": "+r}}
P.bQ.prototype={
gbc:function(){return"RangeError"},
gbb:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.j(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.j(s)
else if(t>s)u=": Not in range "+H.j(s)+".."+H.j(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.j(s)}return u}}
P.fx.prototype={
gbc:function(){return"RangeError"},
gbb:function(){var u,t=H.a_(this.b)
if(typeof t!=="number")return t.aD()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.j(u)},
gm:function(a){return this.f}}
P.ii.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ig.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bS.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f_.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.da(u)+"."}}
P.hk.prototype={
i:function(a){return"Out of Memory"},
$ibq:1}
P.dF.prototype={
i:function(a){return"Stack Overflow"},
$ibq:1}
P.f4.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dZ.prototype={
i:function(a){return"Exception: "+this.a}}
P.fq.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.d.aQ(s,0,75)+"...":s
return t+"\n"+r}}
P.br.prototype={}
P.p.prototype={}
P.i.prototype={
b4:function(a,b){var u=H.ak(this,"i",0)
return new H.cG(this,H.k(b,{func:1,ret:P.M,args:[u]}),[u])},
gm:function(a){var u,t=this.gM(this)
for(u=0;t.t();)++u
return u},
gap:function(a){var u,t=this.gM(this)
if(!t.t())throw H.h(H.fy())
u=t.gC(t)
if(t.t())throw H.h(H.lX())
return u},
v:function(a,b){var u,t,s
P.jS(b,"index")
for(u=this.gM(this),t=0;u.t();){s=u.gC(u)
if(b===t)return s;++t}throw H.h(P.R(b,this,"index",null,t))},
i:function(a){return P.lV(this,"(",")")}}
P.aS.prototype={}
P.b.prototype={$ii:1}
P.D.prototype={}
P.J.prototype={
gG:function(a){return P.K.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.a9.prototype={}
P.K.prototype={constructor:P.K,$iK:1,
q:function(a,b){return this===b},
gG:function(a){return H.cv(this)},
i:function(a){return"Instance of '"+H.bP(this)+"'"},
toString:function(){return this.i(this)}}
P.ah.prototype={}
P.f.prototype={$ikB:1}
P.bd.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.r.prototype={}
W.eO.prototype={
gm:function(a){return a.length}}
W.cY.prototype={
i:function(a){return String(a)},
$icY:1}
W.eP.prototype={
i:function(a){return String(a)}}
W.ca.prototype={$ica:1}
W.d_.prototype={}
W.bk.prototype={$ibk:1}
W.bH.prototype={
dl:function(a,b,c){var u=a.getContext(b,P.n3(c))
return u},
$ibH:1}
W.bl.prototype={
gm:function(a){return a.length}}
W.cg.prototype={$icg:1}
W.f0.prototype={
gm:function(a){return a.length}}
W.Q.prototype={$iQ:1}
W.ch.prototype={
gm:function(a){return a.length}}
W.f1.prototype={}
W.aN.prototype={}
W.aO.prototype={}
W.f2.prototype={
gm:function(a){return a.length}}
W.f3.prototype={
gm:function(a){return a.length}}
W.f6.prototype={
gm:function(a){return a.length}}
W.ar.prototype={$iar:1}
W.f7.prototype={
i:function(a){return String(a)}}
W.d7.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[[P.at,P.a9]]},
$au:function(){return[[P.at,P.a9]]},
$ii:1,
$ai:function(){return[[P.at,P.a9]]},
$ib:1,
$ab:function(){return[[P.at,P.a9]]},
$aB:function(){return[[P.at,P.a9]]}}
W.d8.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gaC(a))+" x "+H.j(this.gaA(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.X(b)
if(!u.$iat)return!1
return a.left===u.gcT(b)&&a.top===u.gde(b)&&this.gaC(a)===u.gaC(b)&&this.gaA(a)===u.gaA(b)},
gG:function(a){return W.kY(C.b.gG(a.left),C.b.gG(a.top),C.b.gG(this.gaC(a)),C.b.gG(this.gaA(a)))},
gaA:function(a){return a.height},
gcT:function(a){return a.left},
gde:function(a){return a.top},
gaC:function(a){return a.width},
$iat:1,
$aat:function(){return[P.a9]}}
W.f8.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[P.f]},
$au:function(){return[P.f]},
$ii:1,
$ai:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aB:function(){return[P.f]}}
W.f9.prototype={
gm:function(a){return a.length}}
W.iK.prototype={
gm:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.m(u[b],"$iP")},
h:function(a,b){this.a.appendChild(b)
return b},
gM:function(a){var u=this.hH(this)
return new J.ap(u,u.length,[H.w(u,0)])},
$au:function(){return[W.P]},
$ai:function(){return[W.P]},
$ab:function(){return[W.P]}}
W.P.prototype={
gfS:function(a){return new W.iM(a)},
gcC:function(a){return new W.iK(a,a.children)},
i:function(a){return a.localName},
Z:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.ks
if(u==null){u=H.c([],[W.am])
t=new W.ds(u)
C.a.h(u,W.kX(null))
C.a.h(u,W.kZ())
$.ks=t
d=t}else d=u
u=$.kr
if(u==null){u=new W.eA(d)
$.kr=u
c=u}else{u.a=d
c=u}}if($.b7==null){u=document
t=u.implementation.createHTMLDocument("")
$.b7=t
$.jK=t.createRange()
t=$.b7.createElement("base")
H.m(t,"$ica")
t.href=u.baseURI
$.b7.head.appendChild(t)}u=$.b7
if(u.body==null){t=u.createElement("body")
u.body=H.m(t,"$ibk")}u=$.b7
if(!!this.$ibk)s=u.body
else{s=u.createElement(a.tagName)
$.b7.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.L(C.L,a.tagName)){$.jK.selectNodeContents(s)
r=$.jK.createContextualFragment(b)}else{s.innerHTML=b
r=$.b7.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.b7.body
if(s==null?u!=null:s!==u)J.kj(s)
c.bO(r)
document.adoptNode(r)
return r},
fY:function(a,b,c){return this.Z(a,b,c,null)},
dq:function(a,b){a.textContent=null
a.appendChild(this.Z(a,b,null,null))},
$iP:1,
gd8:function(a){return a.tagName}}
W.fd.prototype={
$1:function(a){return!!J.X(H.m(a,"$iC")).$iP},
$S:22}
W.n.prototype={$in:1}
W.e.prototype={
fJ:function(a,b,c,d){H.k(c,{func:1,args:[W.n]})
if(c!=null)this.dV(a,b,c,!1)},
dV:function(a,b,c,d){return a.addEventListener(b,H.c2(H.k(c,{func:1,args:[W.n]}),1),!1)},
$ie:1}
W.aQ.prototype={$iaQ:1}
W.fk.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aQ]},
$au:function(){return[W.aQ]},
$ii:1,
$ai:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aB:function(){return[W.aQ]}}
W.fl.prototype={
gm:function(a){return a.length}}
W.fp.prototype={
gm:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.fu.prototype={
gm:function(a){return a.length}}
W.bK.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.C]},
$au:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$ibK:1,
$aB:function(){return[W.C]}}
W.aT.prototype={$iaT:1}
W.dj.prototype={
i:function(a){return String(a)},
$idj:1}
W.h1.prototype={
gm:function(a){return a.length}}
W.h2.prototype={
j:function(a,b){return P.bf(a.get(H.E(b)))},
D:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bf(t.value[1]))}},
gW:function(a){var u=H.c([],[P.f])
this.D(a,new W.h3(u))
return u},
gm:function(a){return a.size},
$aa4:function(){return[P.f,null]},
$iD:1,
$aD:function(){return[P.f,null]}}
W.h3.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.h4.prototype={
j:function(a,b){return P.bf(a.get(H.E(b)))},
D:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bf(t.value[1]))}},
gW:function(a){var u=H.c([],[P.f])
this.D(a,new W.h5(u))
return u},
gm:function(a){return a.size},
$aa4:function(){return[P.f,null]},
$iD:1,
$aD:function(){return[P.f,null]}}
W.h5.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aV.prototype={$iaV:1}
W.h6.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aV]},
$au:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aB:function(){return[W.aV]}}
W.a5.prototype={$ia5:1}
W.ae.prototype={
gap:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.h(P.kJ("No elements"))
if(t>1)throw H.h(P.kJ("More than one element"))
return u.firstChild},
a6:function(a,b){var u,t,s,r
H.l(b,"$ii",[W.C],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gM:function(a){var u=this.a.childNodes
return new W.db(u,u.length,[H.c5(C.N,u,"B",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$au:function(){return[W.C]},
$ai:function(){return[W.C]},
$ab:function(){return[W.C]}}
W.C.prototype={
hy:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i:function(a){var u=a.nodeValue
return u==null?this.dt(a):u},
fN:function(a,b){return a.appendChild(b)},
$iC:1}
W.ct.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.C]},
$au:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$aB:function(){return[W.C]}}
W.aW.prototype={$iaW:1,
gm:function(a){return a.length}}
W.hn.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aW]},
$au:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aB:function(){return[W.aW]}}
W.hu.prototype={
j:function(a,b){return P.bf(a.get(H.E(b)))},
D:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bf(t.value[1]))}},
gW:function(a){var u=H.c([],[P.f])
this.D(a,new W.hv(u))
return u},
gm:function(a){return a.size},
$aa4:function(){return[P.f,null]},
$iD:1,
$aD:function(){return[P.f,null]}}
W.hv.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hx.prototype={
gm:function(a){return a.length}}
W.aY.prototype={$iaY:1}
W.hH.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aY]},
$au:function(){return[W.aY]},
$ii:1,
$ai:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aB:function(){return[W.aY]}}
W.aZ.prototype={$iaZ:1}
W.hI.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aZ]},
$au:function(){return[W.aZ]},
$ii:1,
$ai:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aB:function(){return[W.aZ]}}
W.b_.prototype={$ib_:1,
gm:function(a){return a.length}}
W.hL.prototype={
j:function(a,b){return a.getItem(H.E(b))},
D:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gW:function(a){var u=H.c([],[P.f])
this.D(a,new W.hM(u))
return u},
gm:function(a){return a.length},
$aa4:function(){return[P.f,P.f]},
$iD:1,
$aD:function(){return[P.f,P.f]}}
W.hM.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:36}
W.aC.prototype={$iaC:1}
W.bT.prototype={}
W.dG.prototype={
Z:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.b9(a,b,c,d)
u=W.lR("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ae(t).a6(0,new W.ae(u))
return t}}
W.hS.prototype={
Z:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.b9(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.t.Z(u.createElement("table"),b,c,d)
u.toString
u=new W.ae(u)
s=u.gap(u)
s.toString
u=new W.ae(s)
r=u.gap(u)
t.toString
r.toString
new W.ae(t).a6(0,new W.ae(r))
return t}}
W.hT.prototype={
Z:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.b9(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.t.Z(u.createElement("table"),b,c,d)
u.toString
u=new W.ae(u)
s=u.gap(u)
t.toString
s.toString
new W.ae(t).a6(0,new W.ae(s))
return t}}
W.cA.prototype={$icA:1}
W.b0.prototype={$ib0:1}
W.aD.prototype={$iaD:1}
W.hV.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aD]},
$au:function(){return[W.aD]},
$ii:1,
$ai:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$aB:function(){return[W.aD]}}
W.hW.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b0]},
$au:function(){return[W.b0]},
$ii:1,
$ai:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aB:function(){return[W.b0]}}
W.hY.prototype={
gm:function(a){return a.length}}
W.b2.prototype={$ib2:1}
W.aE.prototype={$iaE:1}
W.i1.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b2]},
$au:function(){return[W.b2]},
$ii:1,
$ai:function(){return[W.b2]},
$ib:1,
$ab:function(){return[W.b2]},
$aB:function(){return[W.b2]}}
W.i2.prototype={
gm:function(a){return a.length}}
W.bu.prototype={}
W.ij.prototype={
i:function(a){return String(a)}}
W.iB.prototype={
gm:function(a){return a.length}}
W.b4.prototype={
gh0:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ai("deltaY is not supported"))},
gh_:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ai("deltaX is not supported"))},
$ib4:1}
W.cH.prototype={
fj:function(a,b){return a.requestAnimationFrame(H.c2(H.k(b,{func:1,ret:-1,args:[P.a9]}),1))},
ea:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cI.prototype={$icI:1}
W.iL.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.Q]},
$au:function(){return[W.Q]},
$ii:1,
$ai:function(){return[W.Q]},
$ib:1,
$ab:function(){return[W.Q]},
$aB:function(){return[W.Q]}}
W.dU.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.X(b)
if(!u.$iat)return!1
return a.left===u.gcT(b)&&a.top===u.gde(b)&&a.width===u.gaC(b)&&a.height===u.gaA(b)},
gG:function(a){return W.kY(C.b.gG(a.left),C.b.gG(a.top),C.b.gG(a.width),C.b.gG(a.height))},
gaA:function(a){return a.height},
gaC:function(a){return a.width}}
W.iZ.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aR]},
$au:function(){return[W.aR]},
$ii:1,
$ai:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aB:function(){return[W.aR]}}
W.ec.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.C]},
$au:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$aB:function(){return[W.C]}}
W.ja.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b_]},
$au:function(){return[W.b_]},
$ii:1,
$ai:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aB:function(){return[W.b_]}}
W.jb.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aC]},
$au:function(){return[W.aC]},
$ii:1,
$ai:function(){return[W.aC]},
$ib:1,
$ab:function(){return[W.aC]},
$aB:function(){return[W.aC]}}
W.iJ.prototype={
D:function(a,b){var u,t,s,r,q
H.k(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.gW(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.v)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gW:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.f])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=H.m(r[t],"$icI")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aa4:function(){return[P.f,P.f]},
$aD:function(){return[P.f,P.f]}}
W.iM.prototype={
j:function(a,b){return this.a.getAttribute(H.E(b))},
gm:function(a){return this.gW(this).length}}
W.iN.prototype={}
W.jY.prototype={}
W.iO.prototype={}
W.iP.prototype={
$1:function(a){return this.a.$1(H.m(a,"$in"))},
$S:32}
W.bx.prototype={
dG:function(a){var u
if($.e1.a===0){for(u=0;u<262;++u)$.e1.n(0,C.K[u],W.nb())
for(u=0;u<12;++u)$.e1.n(0,C.l[u],W.nc())}},
ax:function(a){return $.lB().L(0,W.ci(a))},
a7:function(a,b,c){var u=$.e1.j(0,H.j(W.ci(a))+"::"+b)
if(u==null)u=$.e1.j(0,"*::"+b)
if(u==null)return!1
return H.k3(u.$4(a,b,c,this))},
$iam:1}
W.B.prototype={
gM:function(a){return new W.db(a,this.gm(a),[H.c5(this,a,"B",0)])}}
W.ds.prototype={
ax:function(a){return C.a.cA(this.a,new W.hf(a))},
a7:function(a,b,c){return C.a.cA(this.a,new W.he(a,b,c))},
$iam:1}
W.hf.prototype={
$1:function(a){return H.m(a,"$iam").ax(this.a)},
$S:16}
W.he.prototype={
$1:function(a){return H.m(a,"$iam").a7(this.a,this.b,this.c)},
$S:16}
W.ek.prototype={
dO:function(a,b,c,d){var u,t,s
this.a.a6(0,c)
u=b.b4(0,new W.j8())
t=b.b4(0,new W.j9())
this.b.a6(0,u)
s=this.c
s.a6(0,C.M)
s.a6(0,t)},
ax:function(a){return this.a.L(0,W.ci(a))},
a7:function(a,b,c){var u=this,t=W.ci(a),s=u.c
if(s.L(0,H.j(t)+"::"+b))return u.d.fL(c)
else if(s.L(0,"*::"+b))return u.d.fL(c)
else{s=u.b
if(s.L(0,H.j(t)+"::"+b))return!0
else if(s.L(0,"*::"+b))return!0
else if(s.L(0,H.j(t)+"::*"))return!0
else if(s.L(0,"*::*"))return!0}return!1},
$iam:1}
W.j8.prototype={
$1:function(a){return!C.a.L(C.l,H.E(a))},
$S:14}
W.j9.prototype={
$1:function(a){return C.a.L(C.l,H.E(a))},
$S:14}
W.jd.prototype={
a7:function(a,b,c){if(this.dz(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.L(0,b)
return!1}}
W.je.prototype={
$1:function(a){return"TEMPLATE::"+H.j(H.E(a))},
$S:31}
W.jc.prototype={
ax:function(a){var u=J.X(a)
if(!!u.$icw)return!1
u=!!u.$io
if(u&&W.ci(a)==="foreignObject")return!1
if(u)return!0
return!1},
a7:function(a,b,c){if(b==="is"||C.d.b8(b,"on"))return!1
return this.ax(a)},
$iam:1}
W.db.prototype={
t:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scf(J.eN(u.a,t))
u.c=t
return!0}u.scf(null)
u.c=s
return!1},
gC:function(a){return this.d},
scf:function(a){this.d=H.H(a,H.w(this,0))},
$iaS:1}
W.am.prototype={}
W.j6.prototype={$inP:1}
W.eA.prototype={
bO:function(a){new W.ji(this).$2(a,null)},
aI:function(a,b){if(b==null)J.kj(a)
else b.removeChild(a)},
fn:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.lH(a)
n=o.a.getAttribute("is")
H.m(a,"$iP")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.I(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ao(r)}t="element unprintable"
try{t=J.aJ(a)}catch(r){H.ao(r)}try{s=W.ci(a)
this.fm(H.m(a,"$iP"),b,p,t,s,H.m(o,"$iD"),H.E(n))}catch(r){if(H.ao(r) instanceof P.aK)throw r
else{this.aI(a,b)
window
q="Removing corrupted element "+H.j(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fm:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.aI(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.ax(a)){o.aI(a,b)
window
u="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.a7(a,"is",g)){o.aI(a,b)
window
u="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gW(f)
t=H.c(u.slice(0),[H.w(u,0)])
for(s=f.gW(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
q=o.a
p=J.lJ(r)
H.E(r)
if(!q.a7(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.j(e)+" "+r+'="'+H.j(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.X(a).$icA)o.bO(a.content)},
$inB:1}
W.ji.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fn(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aI(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ao(s)
r=H.m(u,"$iC")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.m(t,"$iC")}},
$S:29}
W.dT.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.cO.prototype={}
W.cP.prototype={}
W.el.prototype={}
W.em.prototype={}
W.eq.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.cQ.prototype={}
W.cR.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
P.jp.prototype={
$2:function(a,b){this.a[a]=b},
$S:15}
P.fm.prototype={
gbf:function(){var u=this.b,t=H.ak(u,"u",0),s=W.P
return new H.fM(new H.cG(u,H.k(new P.fn(),{func:1,ret:P.M,args:[t]}),[t]),H.k(new P.fo(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.bF(this.gbf().a)},
j:function(a,b){var u=this.gbf()
return u.b.$1(J.jG(u.a,b))},
gM:function(a){var u=P.kw(this.gbf(),!1,W.P)
return new J.ap(u,u.length,[H.w(u,0)])},
$au:function(){return[W.P]},
$ai:function(){return[W.P]},
$ab:function(){return[W.P]}}
P.fn.prototype={
$1:function(a){return!!J.X(H.m(a,"$iC")).$iP},
$S:22}
P.fo.prototype={
$1:function(a){return H.z(H.m(a,"$iC"),"$iP")},
$S:27}
P.j1.prototype={}
P.at.prototype={}
P.ba.prototype={$iba:1}
P.fE.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.j(a,b)},
$au:function(){return[P.ba]},
$ii:1,
$ai:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aB:function(){return[P.ba]}}
P.bc.prototype={$ibc:1}
P.hi.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.j(a,b)},
$au:function(){return[P.bc]},
$ii:1,
$ai:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$aB:function(){return[P.bc]}}
P.ho.prototype={
gm:function(a){return a.length}}
P.cw.prototype={$icw:1}
P.hR.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.j(a,b)},
$au:function(){return[P.f]},
$ii:1,
$ai:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aB:function(){return[P.f]}}
P.o.prototype={
gcC:function(a){return new P.fm(a,new W.ae(a))},
Z:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.am])
C.a.h(p,W.kX(null))
C.a.h(p,W.kZ())
C.a.h(p,new W.jc())
c=new W.eA(new W.ds(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.n).fY(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ae(s)
q=p.gap(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$io:1}
P.be.prototype={$ibe:1}
P.i3.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.j(a,b)},
$au:function(){return[P.be]},
$ii:1,
$ai:function(){return[P.be]},
$ib:1,
$ab:function(){return[P.be]},
$aB:function(){return[P.be]}}
P.e4.prototype={}
P.e5.prototype={}
P.ef.prototype={}
P.eg.prototype={}
P.er.prototype={}
P.es.prototype={}
P.ey.prototype={}
P.ez.prototype={}
P.eS.prototype={
gm:function(a){return a.length}}
P.eT.prototype={
j:function(a,b){return P.bf(a.get(H.E(b)))},
D:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bf(t.value[1]))}},
gW:function(a){var u=H.c([],[P.f])
this.D(a,new P.eU(u))
return u},
gm:function(a){return a.size},
$aa4:function(){return[P.f,null]},
$iD:1,
$aD:function(){return[P.f,null]}}
P.eU.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.eV.prototype={
gm:function(a){return a.length}}
P.bG.prototype={}
P.hj.prototype={
gm:function(a){return a.length}}
P.dS.prototype={}
P.d0.prototype={$id0:1}
P.dx.prototype={$idx:1}
P.bR.prototype={
T:function(a,b,c){return a.uniform1f(b,c)},
b2:function(a,b,c){return a.uniform1i(b,c)},
P:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dg:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
dh:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
di:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibR:1}
P.dB.prototype={$idB:1}
P.dM.prototype={$idM:1}
P.hJ.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.R(b,a,null,null,null))
return P.bf(a.item(b))},
v:function(a,b){return this.j(a,b)},
$au:function(){return[[P.D,,,]]},
$ii:1,
$ai:function(){return[[P.D,,,]]},
$ib:1,
$ab:function(){return[[P.D,,,]]},
$aB:function(){return[[P.D,,,]]}}
P.en.prototype={}
P.eo.prototype={}
O.a1.prototype={
bV:function(a){var u=this
u.sel(H.c([],[a]))
u.sck(null)
u.scg(null)
u.scl(null)},
bP:function(a,b,c){var u=this,t=H.ak(u,"a1",0)
H.k(b,{func:1,ret:P.M,args:[[P.i,t]]})
t={func:1,ret:-1,args:[P.p,[P.i,t]]}
H.k(a,t)
H.k(c,t)
u.sck(b)
u.scg(a)
u.scl(c)},
b6:function(a,b){return this.bP(a,null,b)},
eZ:function(a){var u
H.l(a,"$ii",[H.ak(this,"a1",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
en:function(a,b){var u
H.l(b,"$ii",[H.ak(this,"a1",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gM:function(a){var u=this.a
return new J.ap(u,u.length,[H.w(u,0)])},
v:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ak(s,"a1",0)
H.H(b,r)
r=[r]
if(H.I(s.eZ(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.en(t,H.c([b],r))}},
sel:function(a){this.a=H.l(a,"$ib",[H.ak(this,"a1",0)],"$ab")},
sck:function(a){this.b=H.k(a,{func:1,ret:P.M,args:[[P.i,H.ak(this,"a1",0)]]})},
scg:function(a){this.c=H.k(a,{func:1,ret:-1,args:[P.p,[P.i,H.ak(this,"a1",0)]]})},
scl:function(a){H.k(a,{func:1,ret:-1,args:[P.p,[P.i,H.ak(this,"a1",0)]]})},
$ii:1}
O.co.prototype={
gm:function(a){return this.a.length},
gA:function(){var u=this.b
return u==null?this.b=D.aA():u},
aq:function(){var u=this.b
if(u!=null)u.R(null)},
gS:function(a){var u=this.a
if(u.length>0)return C.a.gb_(u)
else return V.jQ()},
d2:function(a){var u=this.a
if(a==null)C.a.h(u,V.jQ())
else C.a.h(u,a)
this.aq()},
bI:function(){var u=this.a
if(u.length>0){u.pop()
this.aq()}},
sbh:function(a){this.a=H.l(a,"$ib",[V.ac],"$ab")}}
E.eW.prototype={}
E.af.prototype={
sbQ:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gA().N(0,s.gcY())
u=s.c
if(u!=null)u.gA().h(0,s.gcY())
t=new D.U("shape",r,s.c,[F.dC])
t.b=!0
s.ak(t)}},
saM:function(a){var u,t,s=this
if(!J.Y(s.r,a)){u=s.r
if(u!=null)u.gA().N(0,s.gcW())
if(a!=null)a.gA().h(0,s.gcW())
s.r=a
t=new D.U("mover",u,a,[U.bM])
t.b=!0
s.ak(t)}},
b3:function(a,b){var u,t,s,r,q,p,o,n=this,m=n.r
if(m!=null){u=m.r
t=b.e
if(u<t){m.r=t
u=m.y
if(u!=null)++u.d
m.sdj(m.a+m.d*b.y)
m.sd0(0,m.b+m.e*b.y)
m.sd6(m.c+m.f*b.y)
u=m.c
s=Math.cos(u)
r=Math.sin(u)
u=V.bb(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)
t=m.b
s=Math.cos(t)
r=Math.sin(t)
u=u.J(0,V.bb(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1))
t=m.a
s=Math.cos(t)
r=Math.sin(t)
m.x=u.J(0,V.bb(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1))
u=m.y
if(u!=null)u.an(0)}q=m.x}else q=null
if(!J.Y(q,n.x)){p=n.x
n.x=q
o=new D.U("matrix",p,q,[V.ac])
o.b=!0
n.ak(o)}for(m=n.y.a,m=new J.ap(m,m.length,[H.w(m,0)]);m.t();)m.d.b3(0,b)},
aB:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gS(s))
else C.a.h(s.a,r.J(0,s.gS(s)))
s.aq()
a.d3(t.f)
s=a.dy
u=(s&&C.a).gb_(s)
if(u!=null&&t.d!=null)u.hB(a,t)
for(s=t.y.a,s=new J.ap(s,s.length,[H.w(s,0)]);s.t();)s.d.aB(a)
a.d1()
a.dx.bI()},
ak:function(a){var u=this.z
if(u!=null)u.R(a)},
X:function(){return this.ak(null)},
cZ:function(a){H.m(a,"$iF")
this.e=null
this.ak(a)},
ho:function(){return this.cZ(null)},
cX:function(a){this.ak(H.m(a,"$iF"))},
hn:function(){return this.cX(null)},
cV:function(a){this.ak(H.m(a,"$iF"))},
hk:function(){return this.cV(null)},
hj:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ii",[E.af],"$ai")
for(u=b.length,t=this.gcU(),s={func:1,ret:-1,args:[D.F]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bI()
o.sa5(null)
o.sav(null)
o.c=null
o.d=0
p.z=o}H.k(t,s)
if(o.a==null)o.sa5(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.X()},
hm:function(a,b){var u,t
H.l(b,"$ii",[E.af],"$ai")
for(u=b.gM(b),t=this.gcU();u.t();)u.gC(u).gA().N(0,t)
this.X()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
se2:function(a,b){this.y=H.l(b,"$ia1",[E.af],"$aa1")},
$icq:1}
E.hq.prototype={
dC:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.bo(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.co()
t=[V.ac]
u.sbh(H.c([],t))
u.b=null
u.gA().h(0,new E.hr(s))
s.cy=u
u=new O.co()
u.sbh(H.c([],t))
u.b=null
u.gA().h(0,new E.hs(s))
s.db=u
u=new O.co()
u.sbh(H.c([],t))
u.b=null
u.gA().h(0,new E.ht(s))
s.dx=u
s.sfE(H.c([],[O.bU]))
u=s.dy;(u&&C.a).h(u,null)
s.sfz(new H.Z([P.f,A.cx]))},
ghx:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gS(s)
u=t.db
u=t.z=s.J(0,u.gS(u))
s=u}return s},
d3:function(a){var u=this.dy,t=a==null?(u&&C.a).gb_(u):a;(u&&C.a).h(u,t)},
d1:function(){var u=this.dy
if(u.length>1)u.pop()},
sfE:function(a){this.dy=H.l(a,"$ib",[O.bU],"$ab")},
sfz:function(a){this.fr=H.l(a,"$iD",[P.f,A.cx],"$aD")}}
E.hr.prototype={
$1:function(a){var u
H.m(a,"$iF")
u=this.a
u.ch=u.z=null},
$S:5}
E.hs.prototype={
$1:function(a){var u
H.m(a,"$iF")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:5}
E.ht.prototype={
$1:function(a){var u
H.m(a,"$iF")
u=this.a
u.cx=u.ch=null},
$S:5}
E.dJ.prototype={
bY:function(a){H.m(a,"$iF")
this.d5()},
bX:function(){return this.bY(null)},
gh9:function(){var u,t=this,s=Date.now(),r=C.e.V(P.kq(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.bo(s,!1)
return u/r},
co:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.J()
if(typeof r!=="number")return H.bB(r)
u=C.b.cQ(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.J()
t=C.b.cQ(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kM(C.i,s.ghC())}},
d5:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.k(new E.hX(this),{func:1,ret:-1,args:[P.a9]})
C.v.ea(u)
C.v.fj(u,W.l5(t,P.a9))}},
hA:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.co()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.bo(r,!1)
s.y=P.kq(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aq()
r=s.db
C.a.sm(r.a,0)
r.aq()
r=s.dx
C.a.sm(r.a,0)
r.aq()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aB(p.e)}s=p.z
if(s!=null)s.R(null)}catch(q){u=H.ao(q)
t=H.c6(q)
P.kd("Error: "+H.j(u))
P.kd("Stack: "+H.j(t))
throw H.h(u)}}}
E.hX.prototype={
$1:function(a){var u
H.lg(a)
u=this.a
if(u.ch){u.ch=!1
u.hA()}},
$S:25}
Z.dQ.prototype={$inv:1}
Z.d1.prototype={
aW:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ao(s)
t=P.x('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.j(u))
throw H.h(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.j(u.e)+"]"}}
Z.iC.prototype={$inw:1}
Z.d2.prototype={
az:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aW:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aW(a)},
df:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aB:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.f],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aJ(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(p,", ")+"\nAttrs:   "+C.a.l(r,", ")},
seh:function(a){this.b=H.l(a,"$ib",[Z.ck],"$ab")},
$inE:1}
Z.ck.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bP(this.c)+"'")+"]"}}
Z.bw.prototype={
gbR:function(a){var u=this.a,t=(u&$.bj().a)!==0?3:0
if((u&$.bi().a)!==0)t+=3
if((u&$.bh().a)!==0)t+=3
if((u&$.bC().a)!==0)t+=2
if((u&$.bD().a)!==0)t+=3
if((u&$.cV().a)!==0)t+=3
if((u&$.cW().a)!==0)t+=4
if((u&$.c9().a)!==0)++t
return(u&$.bg().a)!==0?t+4:t},
fO:function(a){var u,t=$.bj(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bi()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bh()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bC()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bD()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cV()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cW()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c9()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bg()
if((s&t.a)!==0)if(u===a)return t
return $.lA()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bw))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.f]),t=this.a
if((t&$.bj().a)!==0)C.a.h(u,"Pos")
if((t&$.bi().a)!==0)C.a.h(u,"Norm")
if((t&$.bh().a)!==0)C.a.h(u,"Binm")
if((t&$.bC().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bD().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cV().a)!==0)C.a.h(u,"Clr3")
if((t&$.cW().a)!==0)C.a.h(u,"Clr4")
if((t&$.c9().a)!==0)C.a.h(u,"Weight")
if((t&$.bg().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.eZ.prototype={}
D.bI.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.F]}
H.k(b,u)
if(this.a==null)this.sa5(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
N:function(a,b){var u,t,s=this
H.k(b,{func:1,ret:-1,args:[D.F]})
u=s.a
u=u==null?null:C.a.L(u,b)
if(u===!0){u=s.a
t=(u&&C.a).N(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.L(u,b)
if(u===!0){u=s.b
t=(u&&C.a).N(u,b)||t}return t},
R:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.F()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.D(P.kw(u,!0,{func:1,ret:-1,args:[D.F]}),new D.fg(q))
u=r.b
if(u!=null){r.sav(H.c([],[{func:1,ret:-1,args:[D.F]}]))
C.a.D(u,new D.fh(q))}return!0},
an:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.R(u)}}},
sa5:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.F]}],"$ab")},
sav:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.F]}],"$ab")}}
D.fg.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.F]})
u=this.a.a
u.b
a.$1(u)},
$S:17}
D.fh.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.F]})
u=this.a.a
u.b
a.$1(u)},
$S:17}
D.F.prototype={}
D.cl.prototype={}
D.cm.prototype={}
D.U.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.d3.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d3))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.df.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.df))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.fD.prototype={
ht:function(a){this.d.h(0,a.a)
return!1},
hp:function(a){this.d.N(0,a.a)
return!1},
sfc:function(a){this.d=H.l(a,"$ikI",[P.p],"$akI")}}
X.fJ.prototype={
bH:function(a,b){this.r=a.a
return!1},
aO:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dn()
if(typeof u!=="number")return u.a8()
this.r=(u&~t)>>>0
return!1},
aN:function(a,b){return!1},
hu:function(a){return!1},
eO:function(a,b,c){return}}
X.cp.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.cp))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.I(this.b)?"Alt+":""
return u+(H.I(this.c)?"Shift+":"")}}
X.h7.prototype={
bH:function(a,b){this.f=a.a
return!1},
aO:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.dn()
if(typeof u!=="number")return u.a8()
this.f=(u&~t)>>>0
return!1},
aN:function(a,b){return!1},
hv:function(a,b){return!1}}
X.i0.prototype={
hs:function(a){H.l(a,"$ib",[V.ad],"$ab")
return!1},
hq:function(a){H.l(a,"$ib",[V.ad],"$ab")
return!1},
hr:function(a){H.l(a,"$ib",[V.ad],"$ab")
return!1}}
X.dP.prototype={
ca:function(a){var u=a.keyCode,t=H.I(a.ctrlKey)||H.I(a.metaKey)
return new X.df(u,new X.cp(t,a.altKey,a.shiftKey))},
aw:function(a){if(!H.I(a.ctrlKey))H.I(a.metaKey)
a.shiftKey},
bp:function(a){if(!H.I(a.ctrlKey))H.I(a.metaKey)
a.shiftKey},
af:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.u()
u=t.top
if(typeof r!=="number")return r.u()
return new V.ad(s-q,r-u)},
aH:function(a){return new V.aG(a.movementX,a.movementY)},
bm:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.ad])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
q=C.b.a1(r.pageX)
C.b.a1(r.pageY)
p=o.left
C.b.a1(r.pageX)
C.a.h(n,new V.ad(q-p,C.b.a1(r.pageY)-o.top))}return n},
ad:function(a){var u=a.buttons,t=H.I(a.ctrlKey)||H.I(a.metaKey)
return new X.d3(u,new X.cp(t,a.altKey,a.shiftKey))},
bi:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.u()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.u()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eI:function(a){this.f=!0},
ew:function(a){this.f=!1},
eC:function(a){H.m(a,"$ia5")
if(H.I(this.f)&&this.bi(a))a.preventDefault()},
eM:function(a){var u
H.m(a,"$iaT")
if(!H.I(this.f))return
u=this.ca(a)
this.b.ht(u)},
eK:function(a){var u
H.m(a,"$iaT")
if(!H.I(this.f))return
u=this.ca(a)
this.b.hp(u)},
eQ:function(a){var u,t,s,r,q=this
H.m(a,"$ia5")
u=q.a
u.focus()
q.f=!0
q.aw(a)
if(H.I(q.x)){t=q.ad(a)
s=q.aH(a)
if(q.d.bH(t,s))a.preventDefault()
return}if(H.I(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ad(a)
r=q.af(a)
if(q.c.bH(t,r))a.preventDefault()},
eU:function(a){var u,t,s,r=this
H.m(a,"$ia5")
r.aw(a)
u=r.ad(a)
if(H.I(r.x)){t=r.aH(a)
if(r.d.aO(u,t))a.preventDefault()
return}if(H.I(r.r))return
s=r.af(a)
if(r.c.aO(u,s))a.preventDefault()},
eG:function(a){var u,t,s,r=this
H.m(a,"$ia5")
if(!r.bi(a)){r.aw(a)
u=r.ad(a)
if(H.I(r.x)){t=r.aH(a)
if(r.d.aO(u,t))a.preventDefault()
return}if(H.I(r.r))return
s=r.af(a)
if(r.c.aO(u,s))a.preventDefault()}},
eS:function(a){var u,t,s,r=this
H.m(a,"$ia5")
r.aw(a)
u=r.ad(a)
if(H.I(r.x)){t=r.aH(a)
if(r.d.aN(u,t))a.preventDefault()
return}if(H.I(r.r))return
s=r.af(a)
if(r.c.aN(u,s))a.preventDefault()},
eE:function(a){var u,t,s,r=this
H.m(a,"$ia5")
if(!r.bi(a)){r.aw(a)
u=r.ad(a)
if(H.I(r.x)){t=r.aH(a)
if(r.d.aN(u,t))a.preventDefault()
return}if(H.I(r.r))return
s=r.af(a)
if(r.c.aN(u,s))a.preventDefault()}},
eW:function(a){var u,t,s=this
H.m(a,"$ib4")
s.aw(a)
u=new V.aG((a&&C.u).gh_(a),C.u.gh0(a)).w(0,180)
if(H.I(s.x)){if(s.d.hu(u))a.preventDefault()
return}if(H.I(s.r))return
t=s.af(a)
if(s.c.hv(u,t))a.preventDefault()},
eY:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ad(s.y)
t=s.af(s.y)
s.d.eO(u,t,r)}},
f8:function(a){var u,t=this
H.m(a,"$iaE")
t.a.focus()
t.f=!0
t.bp(a)
u=t.bm(a)
if(t.e.hs(u))a.preventDefault()},
f4:function(a){var u
H.m(a,"$iaE")
this.bp(a)
u=this.bm(a)
if(this.e.hq(u))a.preventDefault()},
f6:function(a){var u
H.m(a,"$iaE")
this.bp(a)
u=this.bm(a)
if(this.e.hr(u))a.preventDefault()},
seb:function(a){this.z=H.l(a,"$ib",[[P.cz,P.K]],"$ab")}}
D.bp.prototype={
ab:function(a){var u
H.m(a,"$iF")
u=this.r
if(u!=null)u.R(a)},
dJ:function(){return this.ab(null)},
$ia3:1,
$icq:1}
D.a3.prototype={$icq:1}
D.dg.prototype={
ab:function(a){var u=this.x
if(u!=null)u.R(a)},
cj:function(a){var u
H.m(a,"$iF")
u=this.y
if(u!=null)u.R(a)},
eN:function(){return this.cj(null)},
f0:function(a){var u,t,s
H.l(a,"$ii",[D.a3],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(s==null||this.dH(s))return!1}return!0},
ep:function(a,b){var u,t,s,r,q,p,o,n=D.a3
H.l(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gci(),s={func:1,ret:-1,args:[D.F]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=H.m(b[q],"$ia3")
if(p instanceof D.bp)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.bI()
o.sa5(null)
o.sav(null)
o.c=null
o.d=0
p.r=o}H.k(t,s)
if(o.a==null)o.sa5(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.cl([n])
n.b=!0
this.ab(n)},
f2:function(a,b){var u,t,s,r=D.a3
H.l(b,"$ii",[r],"$ai")
for(u=b.gM(b),t=this.gci();u.t();){s=u.gC(u)
C.a.N(this.e,s)
s.gA().N(0,t)}r=new D.cm([r])
r.b=!0
this.ab(r)},
dH:function(a){var u=C.a.L(this.e,a)
return u},
se9:function(a){this.e=H.l(a,"$ib",[D.bp],"$ab")},
sf9:function(a){this.f=H.l(a,"$ib",[D.dv],"$ab")},
sfC:function(a){this.r=H.l(a,"$ib",[D.dE],"$ab")},
$ai:function(){return[D.a3]},
$aa1:function(){return[D.a3]}}
D.dv.prototype={$ia3:1,$icq:1}
D.dE.prototype={$ia3:1,$icq:1}
V.a0.prototype={
p:function(a,b){var u=C.b.p(this.a,b.gbJ()),t=C.b.p(this.b,b.gb5()),s=C.b.p(this.c,b.gbr())
return new V.a0(V.W(u),V.W(t),V.W(s))},
u:function(a,b){var u=C.b.u(this.a,b.gbJ()),t=C.b.u(this.b,b.gb5()),s=C.b.u(this.c,b.gbr())
return new V.a0(V.W(u),V.W(t),V.W(s))},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.aM.prototype={
p:function(a,b){var u=this,t=C.b.p(u.a,b.gbJ()),s=C.b.p(u.b,b.gb5()),r=C.b.p(u.c,b.gbr()),q=C.b.p(u.d,b.gfM(b))
return new V.aM(V.W(t),V.W(s),V.W(r),V.W(q))},
u:function(a,b){var u=this,t=C.b.u(u.a,b.gbJ()),s=C.b.u(u.b,b.gb5()),r=C.b.u(u.c,b.gbr()),q=C.b.u(u.d,b.gfM(b))
return new V.aM(V.W(t),V.W(s),V.W(r),V.W(q))},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aM))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.ff.prototype={}
V.dn.prototype={
a0:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.y])
return t},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dn))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.y],o=V.c4(H.c([q.a,q.d,q.r],p),3,0),n=V.c4(H.c([q.b,q.e,q.x],p),3,0),m=V.c4(H.c([q.c,q.f,q.y],p),3,0)
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
V.ac.prototype={
a0:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.y])
return t},
cR:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.O().a)return V.jQ()
u=1/b1
t=-n
s=-a0
return V.bb((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
J:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.bb(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
b1:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.L(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bN:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a6(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ac))return!1
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
i:function(a){return this.K()},
E:function(a){var u,t,s,r,q,p=this,o=[P.y],n=V.c4(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.c4(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.c4(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.c4(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
K:function(){return this.E("")}}
V.ad.prototype={
p:function(a,b){return new V.ad(this.a+b.a,this.b+b.b)},
u:function(a,b){return new V.ad(C.b.u(this.a,b.gia(b)),C.b.u(this.b,b.gib(b)))},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ad))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.a6.prototype={
p:function(a,b){return new V.a6(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.a6(this.a-b.a,this.b-b.b,this.c-b.c)},
J:function(a,b){return new V.a6(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.dz.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dz))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.aG.prototype={
bF:function(a){var u,t=this.a
if(typeof t!=="number")return t.J()
u=this.b
if(typeof u!=="number")return u.J()
return Math.sqrt(t*t+u*u)},
p:function(a,b){var u,t=this.a,s=b.gbw(b)
if(typeof t!=="number")return t.p()
s=C.b.p(t,s)
t=this.b
u=b.gbx(b)
if(typeof t!=="number")return t.p()
return new V.aG(s,C.b.p(t,u))},
u:function(a,b){var u,t=this.a,s=b.gbw(b)
if(typeof t!=="number")return t.u()
s=C.b.u(t,s)
t=this.b
u=b.gbx(b)
if(typeof t!=="number")return t.u()
return new V.aG(s,C.b.u(t,u))},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.O().a){u=$.kQ
return u==null?$.kQ=new V.aG(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.aG(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aG))return!1
u=b.a
t=this.a
s=$.O()
s.toString
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.bB(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.bB(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.L.prototype={
bF:function(a){return Math.sqrt(this.I(this))},
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ag:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.L(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.L(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.L(this.a-b.a,this.b-b.b,this.c-b.c)},
aE:function(a){return new V.L(-this.a,-this.b,-this.c)},
J:function(a,b){return new V.L(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if(Math.abs(b-0)<$.O().a)return V.cF()
return new V.L(this.a/b,this.b/b,this.c/b)},
cS:function(){var u=$.O().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.L))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
U.d5.prototype={
gA:function(){var u=this.b
return u==null?this.b=D.aA():u},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d5))return!1
return J.Y(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.bM.prototype={}
U.dA.prototype={
gA:function(){var u=this.y
return u==null?this.y=D.aA():u},
au:function(a){var u=this.y
if(u!=null)u.R(a)},
sdj:function(a){var u
a=V.kf(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.O().a)){this.a=a
u=new D.U("yaw",u,a,[P.y])
u.b=!0
this.au(u)}},
sd0:function(a,b){var u
b=V.kf(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.O().a)){this.b=b
u=new D.U("pitch",u,b,[P.y])
u.b=!0
this.au(u)}},
sd6:function(a){var u
a=V.kf(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.O().a)){this.c=a
u=new D.U("roll",u,a,[P.y])
u.b=!0
this.au(u)}},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dA))return!1
u=r.a
t=b.a
s=$.O().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+"], ["+V.N(u.d,3,0)+", "+V.N(u.e,3,0)+", "+V.N(u.f,3,0)+"]"}}
M.d9.prototype={
ac:function(a){var u
H.m(a,"$iF")
u=this.y
if(u!=null)u.R(a)},
dL:function(){return this.ac(null)},
ey:function(a,b){var u,t,s,r,q,p,o,n=E.af
H.l(b,"$ii",[n],"$ai")
for(u=b.length,t=this.ga4(),s={func:1,ret:-1,args:[D.F]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bI()
o.sa5(null)
o.sav(null)
o.c=null
o.d=0
p.z=o}H.k(t,s)
if(o.a==null)o.sa5(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.cl([n])
n.b=!0
this.ac(n)},
eA:function(a,b){var u,t,s=E.af
H.l(b,"$ii",[s],"$ai")
for(u=b.gM(b),t=this.ga4();u.t();)u.gC(u).gA().N(0,t)
s=new D.cm([s])
s.b=!0
this.ac(s)},
sd9:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gA().N(0,t.ga4())
u=t.d
t.d=a
if(a!=null)a.gA().h(0,t.ga4())
s=new D.U("technique",u,t.d,[O.bU])
s.b=!0
t.ac(s)}},
gA:function(){var u=this.y
return u==null?this.y=D.aA():u},
aB:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.d3(f.d)
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
if(typeof s!=="number")return H.bB(s)
o=C.b.a1(p*s)
p=q.b
if(typeof r!=="number")return H.bB(r)
n=C.b.a1(p*r)
p=C.b.a1(q.c*s)
a.c=p
q=C.b.a1(q.d*r)
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
i=V.bb(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.d2(i)
t=$.kC
if(t==null){t=V.kE()
q=V.jX()
p=$.kR
t=V.ky(t,q,p==null?$.kR=new V.L(0,0,-1):p)
$.kC=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.J(0,h)}a.db.d2(h)
u=f.d
if(u!=null)u.b3(0,a)
for(u=f.e.a,u=new J.ap(u,u.length,[H.w(u,0)]);u.t();)u.d.b3(0,a)
for(u=f.e.a,u=new J.ap(u,u.length,[H.w(u,0)]);u.t();)u.d.aB(a)
f.b.toString
a.cy.bI()
a.db.bI()
f.c.toString
a.d1()},
sdK:function(a,b){this.e=H.l(b,"$ia1",[E.af],"$aa1")},
$inC:1}
A.cZ.prototype={}
A.eR.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
h4:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
h1:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ab.prototype={
ga2:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
q:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.ab))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fP.prototype={
dB:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.bd("")
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
A.mO(c3,u)
A.mQ(c3,u)
A.mP(c3,u)
A.mS(c3,u)
A.mT(c3,u)
A.mR(c3,u)
A.mU(c3,u)
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
m=A.mN(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cb(n,35633)
b8.f=b8.cb(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.I(H.k3(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.A(P.x("Failed to link shader: "+H.j(l)))}b8.fu()
b8.fw()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.z(b8.y.O(0,"invViewMat"),"$ian")
if(t)b8.dy=H.z(b8.y.O(0,"objMat"),"$ian")
if(r)b8.fr=H.z(b8.y.O(0,"viewObjMat"),"$ian")
b8.fy=H.z(b8.y.O(0,"projViewObjMat"),"$ian")
if(c3.ry)b8.k1=H.z(b8.y.O(0,"txt2DMat"),"$icE")
if(c3.x1)b8.k2=H.z(b8.y.O(0,"txtCubeMat"),"$ian")
if(c3.x2)b8.k3=H.z(b8.y.O(0,"colorMat"),"$ian")
b8.sdZ(H.c([],[A.an]))
t=c3.y2
if(t>0){b8.k4=H.m(b8.y.O(0,"bendMatCount"),"$iav")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.A(P.x(c0+q+c1));(s&&C.a).h(s,H.z(j,"$ian"))}}if(c3.a.a)b8.r2=H.z(b8.y.O(0,"emissionClr"),"$iT")
if(c3.b.a)b8.x1=H.z(b8.y.O(0,"ambientClr"),"$iT")
if(c3.c.a)b8.y2=H.z(b8.y.O(0,"diffuseClr"),"$iT")
if(c3.d.a)b8.cI=H.z(b8.y.O(0,"invDiffuseClr"),"$iT")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.cK=H.z(b8.y.O(0,"shininess"),"$ia7")
if(t)b8.cJ=H.z(b8.y.O(0,"specularClr"),"$iT")}if(c3.cy){b8.cL=H.z(b8.y.O(0,"envSampler"),"$ibY")
if(c3.r.a)b8.cM=H.z(b8.y.O(0,"reflectClr"),"$iT")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.cN=H.z(b8.y.O(0,"refraction"),"$ia7")
if(t)b8.cO=H.z(b8.y.O(0,"refractClr"),"$iT")}}if(c3.y.a)b8.cP=H.z(b8.y.O(0,"alpha"),"$ia7")
t=P.p
s=[t,A.av]
b8.se8(new H.Z(s))
b8.sdM(new H.Z([t,[P.b,A.bV]]))
b8.sfa(new H.Z(s))
b8.sfb(new H.Z([t,[P.b,A.bW]]))
b8.sfB(new H.Z(s))
b8.sdN(new H.Z([t,[P.b,A.bZ]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.bV],i=0;i<t.length;t.length===s||(0,H.v)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.j(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.a8()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.j(0,d)
if(j==null)H.A(P.x(c0+d+c1))
H.z(j,"$iT")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.j(0,d)
if(c==null)H.A(P.x(c0+d+c1))
H.z(c,"$iT")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.j(0,d)
if(b==null)H.A(P.x(c0+d+c1))
H.z(b,"$iT")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.j(0,d)
if(j==null)H.A(P.x(c0+d+c1))
H.z(j,"$iT")
o=b8.y
d=f+"s["+k+"].color"
c=o.j(0,d)
if(c==null)H.A(P.x(c0+d+c1))
H.z(c,"$iT")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.j(0,o)
if(b==null)H.A(P.x(c0+o+c1))
H.z(b,"$ibX")
a2=b}else a2=b9
C.a.h(e,new A.bV(a1,a0,a,j,c,a2))}b8.bz.n(0,g,e)
q=b8.by
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.A(P.x(c0+o+c1))
q.n(0,g,H.m(j,"$iav"))}for(t=c3.Q,s=t.length,r=[A.bW],i=0;i<t.length;t.length===s||(0,H.v)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.j(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.j(0,o)
if(j==null)H.A(P.x(c0+o+c1))
H.z(j,"$iT")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.j(0,o)
if(c==null)H.A(P.x(c0+o+c1))
H.z(c,"$iT")
p=b8.y
o=f+"s["+k+"].color"
b=p.j(0,o)
if(b==null)H.A(P.x(c0+o+c1))
H.z(b,"$iT")
if(typeof g!=="number")return g.a8()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.A(P.x(c0+o+c1))
H.z(a3,"$icE")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.A(P.x(c0+o+c1))
H.z(a3,"$ibY")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.A(P.x(c0+o+c1))
H.z(a3,"$ibY")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.A(P.x(c0+o+c1))
H.z(a5,"$icD")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.j(0,o)
if(a3==null)H.A(P.x(c0+o+c1))
H.z(a3,"$ia7")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.j(0,o)
if(a5==null)H.A(P.x(c0+o+c1))
H.z(a5,"$ia7")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.j(0,o)
if(a8==null)H.A(P.x(c0+o+c1))
H.z(a8,"$ia7")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}C.a.h(e,new A.bW(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.bB.n(0,g,e)
q=b8.bA
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.A(P.x(c0+o+c1))
q.n(0,g,H.m(j,"$iav"))}for(t=c3.ch,s=t.length,r=[A.bZ],i=0;i<t.length;t.length===s||(0,H.v)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.j(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.j(0,o)
if(j==null)H.A(P.x(c0+o+c1))
H.z(j,"$iT")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.j(0,o)
if(c==null)H.A(P.x(c0+o+c1))
H.z(c,"$iT")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.j(0,o)
if(b==null)H.A(P.x(c0+o+c1))
H.z(b,"$iT")
p=b8.y
o=f+"s["+k+"].color"
a3=p.j(0,o)
if(a3==null)H.A(P.x(c0+o+c1))
H.z(a3,"$iT")
if(typeof g!=="number")return g.a8()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.j(0,o)
if(a5==null)H.A(P.x(c0+o+c1))
H.z(a5,"$iT")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.j(0,o)
if(a8==null)H.A(P.x(c0+o+c1))
H.z(a8,"$iT")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.j(0,o)
if(b2==null)H.A(P.x(c0+o+c1))
H.z(b2,"$ia7")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.j(0,o)
if(b3==null)H.A(P.x(c0+o+c1))
H.z(b3,"$ia7")
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
if(a5==null)H.A(P.x(c0+d+c1))
H.z(a5,"$icD")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.j(0,d)
if(a5==null)H.A(P.x(c0+d+c1))
H.z(a5,"$ia7")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.j(0,d)
if(a8==null)H.A(P.x(c0+d+c1))
H.z(a8,"$ia7")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.j(0,d)
if(a5==null)H.A(P.x(c0+d+c1))
H.z(a5,"$ia7")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.j(0,d)
if(a8==null)H.A(P.x(c0+d+c1))
H.z(a8,"$ia7")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.j(0,d)
if(b2==null)H.A(P.x(c0+d+c1))
H.z(b2,"$ia7")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.j(0,d)
if(a5==null)H.A(P.x(c0+d+c1))
H.z(a5,"$ibX")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.A(P.x(c0+o+c1))
H.z(a5,"$ibX")
a6=a5}else a6=b9
C.a.h(e,new A.bZ(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.bD.n(0,g,e)
q=b8.bC
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.A(P.x(c0+o+c1))
q.n(0,g,H.m(j,"$iav"))}}},
fp:function(a,b){},
sdZ:function(a){this.r1=H.l(a,"$ib",[A.an],"$ab")},
se8:function(a){this.by=H.l(a,"$iD",[P.p,A.av],"$aD")},
sdM:function(a){this.bz=H.l(a,"$iD",[P.p,[P.b,A.bV]],"$aD")},
sfa:function(a){this.bA=H.l(a,"$iD",[P.p,A.av],"$aD")},
sfb:function(a){this.bB=H.l(a,"$iD",[P.p,[P.b,A.bW]],"$aD")},
sfB:function(a){this.bC=H.l(a,"$iD",[P.p,A.av],"$aD")},
sdN:function(a){this.bD=H.l(a,"$iD",[P.p,[P.b,A.bZ]],"$aD")}}
A.aq.prototype={
i:function(a){return"dirLight"+H.j(this.a)}}
A.as.prototype={
i:function(a){return"pointLight"+H.j(this.a)}}
A.au.prototype={
i:function(a){return"spotLight"+H.j(this.a)}}
A.fS.prototype={
i:function(a){return this.aL}}
A.bV.prototype={}
A.bW.prototype={}
A.bZ.prototype={}
A.cx.prototype={
dE:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cb:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.I(H.k3(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.h(P.x("Error compiling shader '"+H.j(s)+"': "+H.j(u)))}return s},
fu:function(){var u,t,s,r=this,q=H.c([],[A.cZ]),p=r.a,o=H.a_(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.bB(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.cZ(p,t.name,s))}r.x=new A.eR(q)},
fw:function(){var u,t,s,r=this,q=H.c([],[A.dL]),p=r.a,o=H.a_(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.bB(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.fZ(t.type,t.size,t.name,s))}r.y=new A.id(q)},
at:function(a,b,c){var u=this.a
if(a===1)return new A.av(u,b,c)
else return A.jW(u,this.r,b,a,c)},
e5:function(a,b,c){var u=this.a
if(a===1)return new A.bX(u,b,c)
else return A.jW(u,this.r,b,a,c)},
e6:function(a,b,c){var u=this.a
if(a===1)return new A.bY(u,b,c)
else return A.jW(u,this.r,b,a,c)},
aV:function(a,b){return new P.dZ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
fZ:function(a,b,c,d){var u=this
switch(a){case 5120:return u.at(b,c,d)
case 5121:return u.at(b,c,d)
case 5122:return u.at(b,c,d)
case 5123:return u.at(b,c,d)
case 5124:return u.at(b,c,d)
case 5125:return u.at(b,c,d)
case 5126:return new A.a7(u.a,c,d)
case 35664:return new A.i9(u.a,c,d)
case 35665:return new A.T(u.a,c,d)
case 35666:return new A.cD(u.a,c,d)
case 35667:return new A.ia(u.a,c,d)
case 35668:return new A.ib(u.a,c,d)
case 35669:return new A.ic(u.a,c,d)
case 35674:return new A.ie(u.a,c,d)
case 35675:return new A.cE(u.a,c,d)
case 35676:return new A.an(u.a,c,d)
case 35678:return u.e5(b,c,d)
case 35680:return u.e6(b,c,d)
case 35670:throw H.h(u.aV("BOOL",c))
case 35671:throw H.h(u.aV("BOOL_VEC2",c))
case 35672:throw H.h(u.aV("BOOL_VEC3",c))
case 35673:throw H.h(u.aV("BOOL_VEC4",c))
default:throw H.h(P.x("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.dL.prototype={}
A.id.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
O:function(a,b){var u=this.j(0,b)
if(u==null)throw H.h(P.x("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.K()},
K:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.av.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.ia.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.ib.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.ic.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.i8.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
sfH:function(a){H.l(a,"$ib",[P.p],"$ab")}}
A.a7.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.i9.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.T.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.cD.prototype={
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.ie.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.cE.prototype={
a3:function(a){var u=new Float32Array(H.cS(H.l(a,"$ib",[P.y],"$ab")))
C.c.dh(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.an.prototype={
a3:function(a){var u=new Float32Array(H.cS(H.l(a,"$ib",[P.y],"$ab")))
C.c.di(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.bX.prototype={
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.bY.prototype={
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.jD.prototype={
$1:function(a){return new V.a6(Math.cos(a),Math.sin(a),0)},
$S:33}
F.jq.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.ki(n.$1(o),m)
m=J.lE(J.ki(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.L(m.a,m.b,m.c)
u=m.w(0,Math.sqrt(m.I(m)))
n=$.kS
if(n==null){n=new V.L(1,0,0)
$.kS=n
t=n}else t=n
n=u.ag(!J.Y(u,t)?V.kU():t)
s=n.w(0,Math.sqrt(n.I(n)))
n=s.ag(u)
t=n.w(0,Math.sqrt(n.I(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.J(0,n*m)
m=s.J(0,q*m)
m=J.lD(l,new V.a6(n.a-m.a,n.b-m.b,n.c-m.c))
if(!J.Y(a.f,m)){a.f=H.m(m,"$ia6")
n=a.a
if(n!=null)n.X()}},
$S:34}
F.a2.prototype={
aY:function(){var u=this
if(!u.gcG()){C.a.N(u.a.a.d.b,u)
u.a.a.X()}u.ff()
u.fg()
u.fh()},
fq:function(a){this.a=a
C.a.h(a.d.b,this)},
fs:function(a){this.b=a
C.a.h(a.d.c,this)},
ft:function(a){this.c=a
C.a.h(a.d.d,this)},
ff:function(){var u=this.a
if(u!=null){C.a.N(u.d.b,this)
this.a=null}},
fg:function(){var u=this.b
if(u!=null){C.a.N(u.d.c,this)
this.b=null}},
fh:function(){var u=this.c
if(u!=null){C.a.N(u.d.d,this)
this.c=null}},
gcG:function(){return this.a==null||this.b==null||this.c==null},
dY:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cF()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.cS())return
return s.w(0,Math.sqrt(s.I(s)))},
e1:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.u(0,q)
r=new V.L(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.I(r)))
r=t.u(0,q)
r=new V.L(r.a,r.b,r.c)
r=s.ag(r.w(0,Math.sqrt(r.I(r))))
return r.w(0,Math.sqrt(r.I(r)))},
bu:function(){var u,t=this
if(t.d!=null)return!0
u=t.dY()
if(u==null){u=t.e1()
if(u==null)return!1}t.d=u
t.a.a.X()
return!0},
dX:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cF()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.cS())return
return s.w(0,Math.sqrt(s.I(s)))},
e0:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.O().a){l=d.u(0,g)
l=new V.L(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.I(l)))
if(s.a-t.a<0)q=q.aE(0)}else{p=(l-u.b)/r
l=d.u(0,g).J(0,p).p(0,g).u(0,j)
l=new V.L(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.I(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.aE(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.I(l)))
l=o.ag(q)
l=l.w(0,Math.sqrt(l.I(l))).ag(o)
q=l.w(0,Math.sqrt(l.I(l)))}return q},
bs:function(){var u,t=this
if(t.e!=null)return!0
u=t.dX()
if(u==null){u=t.e0()
if(u==null)return!1}t.e=u
t.a.a.X()
return!0},
gcD:function(a){var u=this
if(J.Y(u.a,u.b))return!0
if(J.Y(u.b,u.c))return!0
if(J.Y(u.c,u.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
E:function(a){var u,t,s=this
if(s.gcG())return a+"disposed"
u=a+C.d.al(J.aJ(s.a.e),0)+", "+C.d.al(J.aJ(s.b.e),0)+", "+C.d.al(J.aJ(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
K:function(){return this.E("")}}
F.fj.prototype={}
F.hG.prototype={
bG:function(a,b,c){var u,t=b.a
t.a.a.H()
t=t.e
u=c.a
u.a.a.H()
if(t==u.e){t=b.b
t.a.a.H()
t=t.e
u=c.b
u.a.a.H()
if(t==u.e){t=b.c
t.a.a.H()
t=t.e
u=c.c
u.a.a.H()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.H()
t=t.e
u=c.b
u.a.a.H()
if(t==u.e){t=b.b
t.a.a.H()
t=t.e
u=c.c
u.a.a.H()
if(t==u.e){t=b.c
t.a.a.H()
t=t.e
u=c.a
u.a.a.H()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.H()
t=t.e
u=c.c
u.a.a.H()
if(t==u.e){t=b.b
t.a.a.H()
t=t.e
u=c.a
u.a.a.H()
if(t==u.e){t=b.c
t.a.a.H()
t=t.e
u=c.b
u.a.a.H()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bt.prototype={}
F.fF.prototype={}
F.i7.prototype={}
F.bN.prototype={}
F.dC.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.aA():u},
ay:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ay()||!1
if(!t.a.ay())u=!1
s=t.e
if(s!=null)s.an(0)
return u},
hh:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.w(o,0)])
for(o=[F.aw];u.length!==0;){t=C.a.gh7(u)
C.a.d4(u,0)
if(t!=null){s=H.c([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.bG(0,t,q)){C.a.h(s,q)
C.a.d4(u,r)}}if(s.length>1)b.hg(s)}}p.a.H()
p.c.bK()
p.d.bK()
p.b.hz()
p.c.bL(new F.i7())
p.d.bL(new F.hG())
o=p.e
if(o!=null)o.an(0)},
fU:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bj()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bi().a)!==0)++s
if((t&$.bh().a)!==0)++s
if((t&$.bC().a)!==0)++s
if((t&$.bD().a)!==0)++s
if((t&$.cV().a)!==0)++s
if((t&$.cW().a)!==0)++s
if((t&$.c9().a)!==0)++s
if((t&$.bg().a)!==0)++s
r=a3.gbR(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.y
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.d1])
for(n=0,m=0;m<s;++m){l=a3.fO(m)
k=l.gbR(l)
C.a.n(o,m,new Z.d1(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.d(u,j)
i=u[j].he(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.n(p,h,i[g]);++h}}n+=k}H.l(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cS(p)),35044)
u.bindBuffer(a0,null)
e=new Z.d2(new Z.dQ(a0,f),o,a3)
e.seh(H.c([],[Z.ck]))
a.b.b
a.c.b
if(a.d.b.length!==0){t=P.p
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.H()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.H()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].c
c.a.a.H()
C.a.h(d,c.e)}b=Z.mn(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.ck(4,d.length,b))}return e},
i:function(a){var u=this,t=H.c([],[P.f])
if(u.a.c.length!==0){C.a.h(t,"Vertices:")
C.a.h(t,u.a.E("   "))}u.b.b
u.c.b
if(u.d.b.length!==0){C.a.h(t,"Faces:")
C.a.h(t,u.d.E("   "))}return C.a.l(t,"\n")},
X:function(){var u=this.e
if(u!=null)u.R(null)},
$inD:1}
F.hz.prototype={
fK:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.aw],"$ab")
u=H.c([],[F.a2])
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
C.a.h(u,F.fi(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.fi(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.fi(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.fi(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
bL:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.bG(0,p,n)){p.aY()
break}}}}},
bK:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.gcD(s)
if(t)s.aY()}},
ay:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].bu())s=!1
return s},
bt:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].bs())s=!1
return s},
i:function(a){return this.K()},
E:function(a){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].E(a))
return C.a.l(r,"\n")},
K:function(){return this.E("")},
sec:function(a){this.b=H.l(a,"$ib",[F.a2],"$ab")}}
F.hA.prototype={
gm:function(a){return 0},
bL:function(a){var u,t,s,r,q
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(r.c.c,q=-1;!1;--q)r.c.j(0,q)}},
bK:function(){var u,t,s
for(u=-1;!1;--u){t=this.b
return H.d(t,u)
s=t[u]
t=s.gcD(s)
if(t)s.aY()}},
i:function(a){return this.K()},
E:function(a){var u,t,s=H.c([],[P.f])
for(u=0;!1;++u){t=this.b
if(u>=0)return H.d(t,u)
C.a.h(s,t[u].E(a+(""+u+". ")))}return C.a.l(s,"\n")},
K:function(){return this.E("")},
sei:function(a){this.b=H.l(a,"$ib",[F.bt],"$ab")}}
F.hB.prototype={
gm:function(a){return 0},
hz:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.d(t,u)
t=t[u].gi9()
t=t.gi4(t)
if(t.gm(t).a9(0,1)){t=this.b
return H.d(t,u)
t[u].aY()}}},
i:function(a){return this.K()},
E:function(a){var u,t,s=H.c([],[P.f])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.d(u,t)
C.a.h(s,u[t].E(a))}return C.a.l(s,"\n")},
K:function(){return this.E("")},
sbl:function(a){this.b=H.l(a,"$ib",[F.bN],"$ab")}}
F.aw.prototype={
cF:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.kV(u.cx,r,o,t,s,q,p,a,n)},
he:function(a){var u,t,s=this
if(a.q(0,$.bj())){u=s.f
t=[P.y]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.bi())){u=s.r
t=[P.y]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.bh())){u=s.x
t=[P.y]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.bC())){u=s.y
t=[P.y]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.q(0,$.bD())){u=s.z
t=[P.y]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.cV())){u=s.Q
t=[P.y]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.cW())){u=s.Q
t=[P.y]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.c9()))return H.c([s.ch],[P.y])
else if(a.q(0,$.bg())){u=H.c([-1,-1,-1,-1],[P.y])
return u}else return H.c([],[P.y])},
bu:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cF()
t.d.D(0,new F.iA(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.I(s)))
s=t.a
if(s!=null){s.X()
s=t.a.e
if(s!=null)s.an(0)}return!0},
bs:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cF()
t.d.D(0,new F.iz(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.I(s)))
s=t.a
if(s!=null){s.X()
s=t.a.e
if(s!=null)s.an(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
E:function(a){var u,t,s=this,r="-",q=H.c([],[P.f])
C.a.h(q,C.d.al(J.aJ(s.e),0))
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
C.a.h(q,r)
t=C.a.l(q,", ")
return a+"{"+t+"}"},
K:function(){return this.E("")}}
F.iA.prototype={
$1:function(a){var u,t
H.m(a,"$ia2")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:4}
F.iz.prototype={
$1:function(a){var u,t
H.m(a,"$ia2")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:4}
F.iq.prototype={
H:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.h(P.x("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.X()
return!0},
cw:function(a,b){var u=null,t=F.kV(u,u,a,u,u,b,u,u,0)
this.h(0,t)
return t},
gm:function(a){return this.c.length},
ay:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].bu()
return!0},
bt:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].bs()
return!0},
fV:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.Y(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.R(null)}}}}return!0},
i:function(a){return this.K()},
E:function(a){var u,t,s,r
this.H()
u=H.c([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].E(a))
return C.a.l(u,"\n")},
K:function(){return this.E("")},
sfI:function(a){this.c=H.l(a,"$ib",[F.aw],"$ab")}}
F.ir.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.d(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.d(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.d(t,b)
return t[b]},
D:function(a,b){var u=this
H.k(b,{func:1,ret:-1,args:[F.a2]})
C.a.D(u.b,b)
C.a.D(u.c,new F.is(u,b))
C.a.D(u.d,new F.it(u,b))},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].E(""))
return C.a.l(r,"\n")},
sed:function(a){this.b=H.l(a,"$ib",[F.a2],"$ab")},
see:function(a){this.c=H.l(a,"$ib",[F.a2],"$ab")},
sef:function(a){this.d=H.l(a,"$ib",[F.a2],"$ab")}}
F.is.prototype={
$1:function(a){H.m(a,"$ia2")
if(!J.Y(a.a,this.a))this.b.$1(a)},
$S:4}
F.it.prototype={
$1:function(a){var u
H.m(a,"$ia2")
u=this.a
if(!J.Y(a.a,u)&&!J.Y(a.b,u))this.b.$1(a)},
$S:4}
F.iu.prototype={
gm:function(a){return 0},
j:function(a,b){var u,t
if(b>=0){u=this.c
t=b-0
if(t>=0)return H.d(u,t)
return u[t]}else{u=this.b
return H.d(u,b)
return u[b]}},
i:function(a){return this.K()},
K:function(){var u,t,s=H.c([],[P.f])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.d(u,t)
C.a.h(s,u[t].E(""))}for(u=this.c,t=0;!1;++t){if(t>=0)return H.d(u,t)
C.a.h(s,u[t].E(""))}return C.a.l(s,"\n")},
sej:function(a){this.b=H.l(a,"$ib",[F.bt],"$ab")},
sek:function(a){this.c=H.l(a,"$ib",[F.bt],"$ab")}}
F.iw.prototype={}
F.iv.prototype={
bG:function(a,b,c){return J.Y(b.f,c.f)}}
F.ix.prototype={}
F.hg.prototype={
hg:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ib",[F.aw],"$ab")
u=V.cF()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.L(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.w(0,Math.sqrt(u.I(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.v)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.w(0,Math.sqrt(o*o+n*n+m*m))}if(!J.Y(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.R(null)}}}return}}
F.iy.prototype={
gm:function(a){return 0},
i:function(a){return this.K()},
K:function(){var u,t,s=H.c([],[P.f])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.d(u,t)
C.a.h(s,u[t].E(""))}return C.a.l(s,"\n")},
sbl:function(a){this.b=H.l(a,"$ib",[F.bN],"$ab")}}
O.dl.prototype={
gA:function(){var u=this.fr
return u==null?this.fr=D.aA():u},
Y:function(a){var u
H.m(a,"$iF")
u=this.fr
if(u!=null)u.R(a)},
dQ:function(){return this.Y(null)},
cn:function(a){H.m(a,"$iF")
this.a=null
this.Y(a)},
fl:function(){return this.cn(null)},
er:function(a,b){var u=V.ac
H.l(b,"$ii",[u],"$ai")
u=new D.cl([u])
u.b=!0
this.Y(u)},
eu:function(a,b){var u=V.ac
H.l(b,"$ii",[u],"$ai")
u=new D.cm([u])
u.b=!0
this.Y(u)},
c8:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.p,h=new H.Z([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=h.j(0,0)
h.n(0,0,r==null?1:r)}q=H.c([],[A.aq])
h.D(0,new O.fW(j,q))
C.a.b7(q,new O.fX())
p=new H.Z([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){o=u[s]
r=o.gaK()
n=p.j(0,o.gaK())
p.n(0,r,n==null?1:n)}m=H.c([],[A.as])
p.D(0,new O.fY(j,m))
C.a.b7(m,new O.fZ())
l=new H.Z([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.v)(i),++s){o=i[s]
t=o.gaK()
r=l.j(0,o.gaK())
l.n(0,t,r==null?1:r)}k=H.c([],[A.au])
l.D(0,new O.h_(j,k))
C.a.b7(k,new O.h0())
i=C.e.V(j.e.a.length+3,4)
j.dy.e
return A.m2(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
dW:function(a,b){H.l(a,"$ib",[T.dI],"$ab")},
b3:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.ap(u,u.length,[H.w(u,0)]);u.t();){t=u.d
t.toString
s=$.ip
if(s==null)s=$.ip=new V.L(0,0,1)
t.a=s
r=$.io
t.d=r==null?$.io=new V.L(0,1,0):r
r=$.im
t.e=r==null?$.im=new V.L(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.b1(s)
r=s.a
p=s.b
o=s.c
t.a=s.w(0,Math.sqrt(r*r+p*p+o*o))
o=q.b1(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.w(0,Math.sqrt(p*p+r*r+s*s))
s=q.b1(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.w(0,Math.sqrt(r*r+p*p+o*o))}}}},
hB:function(b6,b7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.c8()
u=b6.fr.j(0,b5.aL)
if(u==null){u=A.m1(b5,b6.a)
t=u.b
if(t.length===0)H.A(P.x("May not cache a shader with no name."))
if(b6.fr.cE(0,t))H.A(P.x('Shader cache already contains a shader by the name "'+t+'".'))
b6.fr.n(0,t,u)}b5=b4.a=u
b7.e=null}s=b5.z
r=s.cH
b5=b7.e
if(!(b5 instanceof Z.d2))b5=b7.e=null
if(b5==null||!b5.d.q(0,r)){b5=s.k3
if(b5)b7.d.ay()
q=s.k4
if(q){p=b7.d
o=p.e
if(o!=null)++o.d
p.d.bt()
p.a.bt()
p=p.e
if(p!=null)p.an(0)}p=s.r2
if(p){o=b7.d
n=o.e
if(n!=null)++n.d
o.a.fV()
o=o.e
if(o!=null)o.an(0)}m=b7.d.fU(new Z.iC(b6.a),r)
m.az($.bj()).e=b4.a.Q.c
if(b5)m.az($.bi()).e=b4.a.cx.c
if(q)m.az($.bh()).e=b4.a.ch.c
if(s.r1)m.az($.bC()).e=b4.a.cy.c
if(p)m.az($.bD()).e=b4.a.db.c
if(s.rx)m.az($.bg()).e=b4.a.dx.c
b7.e=m}b5=T.dI
l=H.c([],[b5])
q=b4.a
p=b6.a
p.useProgram(q.r)
q.x.h4()
if(s.dy){q=b4.a
o=b6.dx
o=o.gS(o)
q=q.dy
q.toString
q.a3(o.a0(0,!0))}if(s.fr){q=b4.a
o=b6.cx
if(o==null){o=b6.db
o=o.gS(o)
n=b6.dx
n=b6.cx=o.J(0,n.gS(n))
o=n}q=q.fr
q.toString
q.a3(o.a0(0,!0))}q=b4.a
o=b6.ch
if(o==null){o=b6.ghx()
n=b6.dx
n=b6.ch=o.J(0,n.gS(n))
o=n}q=q.fy
q.toString
q.a3(o.a0(0,!0))
if(s.ry){q=b4.a
o=b4.b
q=q.k1
q.toString
q.a3(C.j.a0(o,!0))}if(s.x1){q=b4.a
o=b4.c
q=q.k2
q.toString
q.a3(C.j.a0(o,!0))}if(s.x2){q=b4.a
o=b4.d
q=q.k3
q.toString
q.a3(C.j.a0(o,!0))}if(s.y2>0){k=b4.e.a.length
q=b4.a.k4
C.c.b2(q.a,q.d,k)
for(q=[P.y],j=0;j<k;++j){o=b4.a
n=b4.e.a
if(j>=n.length)return H.d(n,j)
n=n[j]
o.toString
H.m(n,"$iac")
o=o.r1
if(j>=o.length)return H.d(o,j)
o=o[j]
i=new Float32Array(H.cS(H.l(n.a0(0,!0),"$ib",q,"$ab")))
C.c.di(o.a,o.d,!1,i)}}if(s.a.a){q=b4.a
o=b4.f.f
q=q.r2
C.c.P(q.a,q.d,o.a,o.b,o.c)}if(s.id){if(s.b.a){q=b4.a
o=b4.r.f
q=q.x1
C.c.P(q.a,q.d,o.a,o.b,o.c)}if(s.c.a){q=b4.a
o=b4.x.f
q=q.y2
C.c.P(q.a,q.d,o.a,o.b,o.c)}if(s.d.a){q=b4.a
o=b4.y.f
q=q.cI
C.c.P(q.a,q.d,o.a,o.b,o.c)}q=s.e.a
if(!q)o=!1
else o=!0
if(o){o=b4.a
n=b4.z.ch
o=o.cK
C.c.T(o.a,o.d,n)}if(q){q=b4.a
o=b4.z.f
q=q.cJ
C.c.P(q.a,q.d,o.a,o.b,o.c)}q=s.z
if(q.length>0){o=b6.db
h=o.gS(o)
o=P.p
g=new H.Z([o,o])
for(o=b4.dx.e,n=o.length,f=0;f<o.length;o.length===n||(0,H.v)(o),++f){e=o[f]
d=g.j(0,0)
if(d==null)d=0
g.n(0,0,d+1)
c=J.eN(b4.a.bz.j(0,0),d)
b=h.b1(e.a)
a=b.a
a0=b.b
a1=b.c
a1=b.w(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=c.e
a=a1.a
b=a1.b
a1=a1.c
C.c.P(a0.a,a0.d,a,b,a1)
a1=e.c
b=c.f
C.c.P(b.a,b.d,a1.a,a1.b,a1.c)}for(o=q.length,f=0;f<q.length;q.length===o||(0,H.v)(q),++f){n=q[f].a
k=g.j(0,n)
if(k==null)k=0
n=b4.a.by.j(0,n)
C.c.b2(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=b6.db
h=o.gS(o)
o=P.p
a2=new H.Z([o,o])
for(o=b4.dx.f,n=o.length,b=[b5],a=[P.y],f=0;f<o.length;o.length===n||(0,H.v)(o),++f){e=o[f]
a3=e.gaK()
d=a2.j(0,a3)
if(d==null)d=0
a2.n(0,a3,d+1)
c=J.eN(b4.a.bB.j(0,a3),d)
a4=h.J(0,e.gS(e))
a0=e.gS(e)
a1=$.cu
a0=a0.bN(a1==null?$.cu=new V.a6(0,0,0):a1)
a1=c.b
C.c.P(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=$.cu
a0=a4.bN(a0==null?$.cu=new V.a6(0,0,0):a0)
a1=c.c
C.c.P(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=e.gaJ(e)
a1=c.e
C.c.P(a1.a,a1.d,a0.a,a0.b,a0.c)
e.gao()
a0=a4.cR(0)
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
i=new Float32Array(H.cS(H.l(new V.dn(a1,a5,a6,a7,a8,a9,b0,b1,a0).a0(0,!0),"$ib",a,"$ab")))
C.c.dh(b2.a,b2.d,!1,i)
e.gao()
a0=e.gao()
H.l(l,"$ib",b,"$ab")
if(!C.a.L(l,a0)){a0.sah(0,l.length)
C.a.h(l,a0)}a0=e.gao()
a1=a0.gai(a0)
if(a1){a1=c.f
a1.toString
a5=a0.gai(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.gah(a0)
a1.a.uniform1i(a1.d,a0)}}e.gaF()
a0=e.gdr()
a1=c.x
a1.toString
a5=a0.gbw(a0)
a6=a0.gbx(a0)
a7=a0.gh3()
a0=a0.gh2()
C.c.dg(a1.a,a1.d,a5,a6,a7,a0)
a0=e.gaF()
if(!C.a.L(l,a0)){a0.sah(0,l.length)
C.a.h(l,a0)}a0=e.gaF()
a1=a0.gai(a0)
if(a1){a1=c.r
a1.toString
a5=a0.gai(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.gah(a0)
a1.a.uniform1i(a1.d,a0)}}if(e.gh5()){a0=e.gfP()
a1=c.y
C.c.T(a1.a,a1.d,a0)
a0=e.gfQ()
a1=c.z
C.c.T(a1.a,a1.d,a0)
a0=e.gfR()
a1=c.Q
C.c.T(a1.a,a1.d,a0)}}for(o=q.length,f=0;f<q.length;q.length===o||(0,H.v)(q),++f){n=q[f].a
k=a2.j(0,n)
if(k==null)k=0
n=b4.a.bA.j(0,n)
C.c.b2(n.a,n.d,k)}}q=s.ch
if(q.length>0){o=b6.db
h=o.gS(o)
o=P.p
b3=new H.Z([o,o])
for(o=b4.dx.r,n=o.length,b5=[b5],f=0;f<o.length;o.length===n||(0,H.v)(o),++f){e=o[f]
a3=e.gaK()
d=b3.j(0,a3)
if(d==null)d=0
b3.n(0,a3,d+1)
c=J.eN(b4.a.bD.j(0,a3),d)
b=e.ghw(e)
a=c.b
C.c.P(a.a,a.d,b.a,b.b,b.c)
b=e.ghN(e).i3()
a=c.c
C.c.P(a.a,a.d,b.a,b.b,b.c)
b=h.bN(e.ghw(e))
a=c.d
C.c.P(a.a,a.d,b.a,b.b,b.c)
b=e.gaJ(e)
a=c.e
C.c.P(a.a,a.d,b.a,b.b,b.c)
e.gao()
b=e.gi8()
a=c.f
C.c.P(a.a,a.d,b.a,b.b,b.c)
b=e.gi5(e)
a=c.r
C.c.P(a.a,a.d,b.a,b.b,b.c)
b=e.gi6()
a=c.x
C.c.T(a.a,a.d,b)
b=e.gi7()
a=c.y
C.c.T(a.a,a.d,b)
e.gao()
b=e.gao()
H.l(l,"$ib",b5,"$ab")
if(!C.a.L(l,b)){b.sah(0,l.length)
C.a.h(l,b)}b=e.gao()
a=b.gai(b)
if(a){a=c.dx
a.toString
a0=b.gai(b)
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.gah(b)
a.a.uniform1i(a.d,b)}}e.gaF()
b=e.gdr()
a=c.z
a.toString
a0=b.gbw(b)
a1=b.gbx(b)
a5=b.gh3()
b=b.gh2()
C.c.dg(a.a,a.d,a0,a1,a5,b)
b=e.gaF()
if(!C.a.L(l,b)){b.sah(0,l.length)
C.a.h(l,b)}b=e.gaF()
a=b.gai(b)
if(a){a=c.dy
a.toString
a0=b.gai(b)
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.gah(b)
a.a.uniform1i(a.d,b)}}if(e.ghO()){b=e.ghM()
a=c.Q
C.c.T(a.a,a.d,b)
b=e.ghL()
a=c.ch
C.c.T(a.a,a.d,b)}if(e.gh5()){b=e.gfP()
a=c.cx
C.c.T(a.a,a.d,b)
b=e.gfQ()
a=c.cy
C.c.T(a.a,a.d,b)
b=e.gfR()
a=c.db
C.c.T(a.a,a.d,b)}}for(b5=q.length,f=0;f<q.length;q.length===b5||(0,H.v)(q),++f){o=q[f].a
k=b3.j(0,o)
if(k==null)k=0
o=b4.a.bC.j(0,o)
C.c.b2(o.a,o.d,k)}}}if(s.dx){b5=b4.a
q=b6.Q
if(q==null){q=b6.db
q=b6.Q=q.gS(q).cR(0)}b5=b5.id
b5.toString
b5.a3(q.a0(0,!0))}if(s.cy){b4.dW(l,b4.ch)
b5=b4.a
q=b4.ch
b5.fp(b5.cL,q)
if(s.r.a){b5=b4.a
q=b4.cx.f
b5=b5.cM
C.c.P(b5.a,b5.d,q.a,q.b,q.c)}b5=s.x.a
if(!b5)q=!1
else q=!0
if(q){q=b4.a
o=b4.cy.ch
q=q.cN
C.c.T(q.a,q.d,o)}if(b5){b5=b4.a
q=b4.cy.f
b5=b5.cO
C.c.P(b5.a,b5.d,q.a,q.b,q.c)}}b5=s.y.a
q=!b5
if(q)o=!1
else o=!0
if(o){if(b5){b5=b4.a
o=b4.db.f
b5=b5.cP
C.c.T(b5.a,b5.d,o)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].aW(b6)
b5=b7.e
b5.aW(b6)
b5.aB(b6)
b5.df(b6)
if(q)b5=!1
else b5=!0
if(b5)p.disable(3042)
for(j=0;j<l.length;++j)l[j].df(b6)
b5=b4.a
b5.toString
p.useProgram(null)
b5.x.h1()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.c8().aL},
se_:function(a){this.e=H.l(a,"$ia1",[V.ac],"$aa1")}}
O.fW.prototype={
$2:function(a,b){H.a_(a)
H.a_(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aq(a,C.e.V(b+3,4)*4))},
$S:9}
O.fX.prototype={
$2:function(a,b){H.m(a,"$iaq")
H.m(b,"$iaq")
return J.jF(a.a,b.a)},
$S:38}
O.fY.prototype={
$2:function(a,b){H.a_(a)
H.a_(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.as(a,C.e.V(b+3,4)*4))},
$S:9}
O.fZ.prototype={
$2:function(a,b){H.m(a,"$ias")
H.m(b,"$ias")
return J.jF(a.a,b.a)},
$S:39}
O.h_.prototype={
$2:function(a,b){H.a_(a)
H.a_(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.au(a,C.e.V(b+3,4)*4))},
$S:9}
O.h0.prototype={
$2:function(a,b){H.m(a,"$iau")
H.m(b,"$iau")
return J.jF(a.a,b.a)},
$S:40}
O.fQ.prototype={
ae:function(){var u,t=this
t.bT()
u=t.f
if(!(Math.abs(u-1)<$.O().a)){t.f=1
u=new D.U(t.b,u,1,[P.y])
u.b=!0
t.a.Y(u)}}}
O.dm.prototype={
ae:function(){},
cq:function(a){var u,t,s=this
if(!s.c.q(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.ae()
u=s.a
u.a=null
u.Y(null)}}}
O.fR.prototype={}
O.aU.prototype={
cp:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.U(s.b+".color",u,a,[V.a0])
t.b=!0
s.a.Y(t)}},
ae:function(){this.bT()
this.cp(new V.a0(1,1,1))},
saJ:function(a,b){this.cq(new A.ab(!0,!1,!1))
this.cp(b)}}
O.fT.prototype={}
O.fU.prototype={
ae:function(){var u,t=this
t.bU()
u=t.ch
if(!(Math.abs(u-1)<$.O().a)){t.ch=1
u=new D.U(t.b+".refraction",u,1,[P.y])
u.b=!0
t.a.Y(u)}}}
O.fV.prototype={
cr:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.O().a)){u.ch=a
t=new D.U(u.b+".shininess",t,a,[P.y])
t.b=!0
u.a.Y(t)}},
ae:function(){this.bU()
this.cr(100)}}
O.bU.prototype={}
T.dI.prototype={}
V.b6.prototype={
aj:function(a,b){return!0},
i:function(a){return"all"},
$ial:1}
V.al.prototype={}
V.dk.prototype={
aj:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)if(u[s].aj(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sU:function(a){this.a=H.l(a,"$ib",[V.al],"$ab")},
$ial:1}
V.ag.prototype={
aj:function(a,b){return!this.dw(0,b)},
i:function(a){return"!["+this.bS(0)+"]"}}
V.hp.prototype={
aj:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.jR(this.a),t=H.jR(this.b)
return u+".."+t},
$ial:1}
V.hy.prototype={
dD:function(a){var u,t
if(a.a.length<=0)throw H.h(P.x("May not create a SetMatcher with zero characters."))
u=new H.Z([P.p,P.M])
for(t=new H.cn(a,a.gm(a),[H.ak(a,"u",0)]);t.t();)u.n(0,t.d,!0)
this.sfo(u)},
aj:function(a,b){return this.a.cE(0,b)},
i:function(a){var u=this.a
return P.jU(new H.dh(u,[H.w(u,0)]))},
sfo:function(a){this.a=H.l(a,"$iD",[P.p,P.M],"$aD")},
$ial:1}
V.cy.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cC(this.a.k(0,b))
r.sU(H.c([],[V.al]))
r.c=!1
C.a.h(this.c,r)
return r},
h6:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.aj(0,a))return r}return},
i:function(a){return this.b},
sfG:function(a){this.c=H.l(a,"$ib",[V.cC],"$ab")}}
V.dK.prototype={
i:function(a){var u=H.ke(this.b,"\n","\\n"),t=H.ke(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cB.prototype={
am:function(a,b,c){var u,t,s
H.l(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.v)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
sfi:function(a){var u=P.f
this.c=H.l(a,"$iD",[u,u],"$aD")}}
V.hZ.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cy(this,b)
u.sfG(H.c([],[V.cC]))
u.d=null
this.a.n(0,b,u)}return u},
F:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cB(a)
u=P.f
t.sfi(new H.Z([u,u]))
this.b.n(0,a,t)}return t},
dd:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.dK]),l=this.c,k=[P.p],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.d.as(a,s)
q=l.h6(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.jU(j)
throw H.h(P.x("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.jU(j)
o=l.d
n=o.c.j(0,p)
t=new V.dK(n==null?o.b:n,p,s)}++s}}},
sfD:function(a){this.a=H.l(a,"$iD",[P.f,V.cy],"$aD")},
sfF:function(a){this.b=H.l(a,"$iD",[P.f,V.cB],"$aD")}}
V.cC.prototype={
i:function(a){return this.b.b+": "+this.bS(0)}}
X.d4.prototype={$icq:1}
X.fr.prototype={
gA:function(){var u=this.x
return u==null?this.x=D.aA():u}}
X.du.prototype={
gA:function(){var u=this.f
return u==null?this.f=D.aA():u},
ar:function(a){var u
H.m(a,"$iF")
u=this.f
if(u!=null)u.R(a)},
dT:function(){return this.ar(null)},
saM:function(a){var u,t,s=this
if(!J.Y(s.b,a)){u=s.b
if(u!=null)u.gA().N(0,s.gbZ())
t=s.b
s.b=a
if(a!=null)a.gA().h(0,s.gbZ())
u=new D.U("mover",t,s.b,[U.bM])
u.b=!0
s.ar(u)}},
$icq:1,
$id4:1}
X.dH.prototype={}
V.bm.prototype={
aR:function(a){this.b=new P.fv(C.H)
this.c=null
this.sbg(H.c([],[[P.b,W.ar]]))},
B:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.ar]))
u=a.split("\n")
for(l=u.length,t=[W.ar],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.E(q)
o=m.b.e4(q,0,q.length)
n=o==null?q:o
C.F.dq(p,H.ke(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gb_(m.d),p)}},
d_:function(a,b){var u,t,s,r,q=this
H.l(b,"$ib",[P.f],"$ab")
q.sbg(H.c([],[[P.b,W.ar]]))
u=C.a.l(b,"\n")
t=q.c
for(t=(t==null?q.c=q.aX():t).dd(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)q.b0(t[r])},
sbg:function(a){this.d=H.l(a,"$ib",[[P.b,W.ar]],"$ab")}}
V.jB.prototype={
$1:function(a){var u
H.m(a,"$ib1")
u=C.b.dc(this.a.gh9(),2)
if(u!=="0.00")P.kd(u+" fps")},
$S:41}
V.f5.prototype={
b0:function(a){var u=this
switch(a.a){case"Class":u.B(a.b,"#551")
break
case"Comment":u.B(a.b,"#777")
break
case"Id":u.B(a.b,"#111")
break
case"Num":u.B(a.b,"#191")
break
case"Reserved":u.B(a.b,"#119")
break
case"String":u.B(a.b,"#171")
break
case"Symbol":u.B(a.b,"#616")
break
case"Type":u.B(a.b,"#B11")
break
case"Whitespace":u.B(a.b,"#111")
break}},
aX:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.i_()
a1.c=a1.k(0,r)
u=a1.k(0,r).l(0,q)
t=V.t(new H.q("_"))
C.a.h(u.a,t)
t=V.S("a","z")
C.a.h(u.a,t)
t=V.S("A","Z")
C.a.h(u.a,t)
t=a1.k(0,q).l(0,q)
u=V.t(new H.q("_"))
C.a.h(t.a,u)
u=V.S("0","9")
C.a.h(t.a,u)
u=V.S("a","z")
C.a.h(t.a,u)
u=V.S("A","Z")
C.a.h(t.a,u)
u=a1.k(0,r).l(0,p)
t=V.S("0","9")
C.a.h(u.a,t)
t=a1.k(0,p).l(0,p)
u=V.S("0","9")
C.a.h(t.a,u)
u=a1.k(0,p).l(0,o)
t=V.t(new H.q("."))
C.a.h(u.a,t)
t=a1.k(0,o).l(0,n)
u=V.S("0","9")
C.a.h(t.a,u)
u=a1.k(0,n).l(0,n)
t=V.S("0","9")
C.a.h(u.a,t)
t=a1.k(0,r).l(0,m)
u=V.t(new H.q(l))
C.a.h(t.a,u)
u=a1.k(0,m).l(0,m)
t=V.t(new H.q(l))
C.a.h(u.a,t)
t=a1.k(0,r).l(0,k)
u=V.t(new H.q('"'))
C.a.h(t.a,u)
u=a1.k(0,k).l(0,j)
t=V.t(new H.q('"'))
C.a.h(u.a,t)
t=a1.k(0,k).l(0,i)
u=V.t(new H.q("\\"))
C.a.h(t.a,u)
u=a1.k(0,i).l(0,k)
t=V.t(new H.q('"'))
C.a.h(u.a,t)
C.a.h(a1.k(0,k).l(0,k).a,new V.b6())
t=a1.k(0,r).l(0,h)
u=V.t(new H.q("'"))
C.a.h(t.a,u)
u=a1.k(0,h).l(0,g)
t=V.t(new H.q("'"))
C.a.h(u.a,t)
t=a1.k(0,h).l(0,f)
u=V.t(new H.q("\\"))
C.a.h(t.a,u)
u=a1.k(0,f).l(0,h)
t=V.t(new H.q("'"))
C.a.h(u.a,t)
C.a.h(a1.k(0,h).l(0,h).a,new V.b6())
t=a1.k(0,r).l(0,e)
u=V.t(new H.q("/"))
C.a.h(t.a,u)
u=a1.k(0,e).l(0,d)
t=V.t(new H.q("/"))
C.a.h(u.a,t)
t=a1.k(0,d).l(0,c)
u=V.t(new H.q("\n"))
C.a.h(t.a,u)
u=a1.k(0,d).l(0,d)
t=new V.ag()
s=[V.al]
t.sU(H.c([],s))
C.a.h(u.a,t)
u=V.t(new H.q("\n"))
C.a.h(t.a,u)
u=a1.k(0,e).l(0,b)
t=V.t(new H.q("*"))
C.a.h(u.a,t)
t=a1.k(0,b).l(0,a)
u=V.t(new H.q("*"))
C.a.h(t.a,u)
u=a1.k(0,a).l(0,b)
t=new V.ag()
t.sU(H.c([],s))
C.a.h(u.a,t)
u=V.t(new H.q("*"))
C.a.h(t.a,u)
u=a1.k(0,a).l(0,c)
t=V.t(new H.q("/"))
C.a.h(u.a,t)
t=a1.k(0,r).l(0,a0)
u=V.t(new H.q(" \n\t"))
C.a.h(t.a,u)
u=a1.k(0,a0).l(0,a0)
t=V.t(new H.q(" \n\t"))
C.a.h(u.a,t)
t=a1.k(0,p)
t.d=t.a.F("Num")
t=a1.k(0,n)
t.d=t.a.F("Num")
t=a1.k(0,m)
t.d=t.a.F("Symbol")
t=a1.k(0,j)
t.d=t.a.F("String")
t=a1.k(0,g)
t.d=t.a.F("String")
t=a1.k(0,c)
t.d=t.a.F(d)
t=a1.k(0,a0)
t.d=t.a.F(a0)
t=a1.k(0,q)
t=t.d=t.a.F(q)
u=[P.f]
t.am(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.am(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.am(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fs.prototype={
b0:function(a){var u=this
switch(a.a){case"Builtin":u.B(a.b,"#411")
break
case"Comment":u.B(a.b,"#777")
break
case"Id":u.B(a.b,"#111")
break
case"Num":u.B(a.b,"#191")
break
case"Preprocess":u.B(a.b,"#737")
break
case"Reserved":u.B(a.b,"#119")
break
case"Symbol":u.B(a.b,"#611")
break
case"Type":u.B(a.b,"#171")
break
case"Whitespace":u.B(a.b,"#111")
break}},
aX:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.i_()
e.c=e.k(0,r)
u=e.k(0,r).l(0,q)
t=V.t(new H.q("_"))
C.a.h(u.a,t)
t=V.S("a","z")
C.a.h(u.a,t)
t=V.S("A","Z")
C.a.h(u.a,t)
t=e.k(0,q).l(0,q)
u=V.t(new H.q("_"))
C.a.h(t.a,u)
u=V.S("0","9")
C.a.h(t.a,u)
u=V.S("a","z")
C.a.h(t.a,u)
u=V.S("A","Z")
C.a.h(t.a,u)
u=e.k(0,r).l(0,p)
t=V.S("0","9")
C.a.h(u.a,t)
t=e.k(0,p).l(0,p)
u=V.S("0","9")
C.a.h(t.a,u)
u=e.k(0,p).l(0,o)
t=V.t(new H.q("."))
C.a.h(u.a,t)
t=e.k(0,o).l(0,n)
u=V.S("0","9")
C.a.h(t.a,u)
u=e.k(0,n).l(0,n)
t=V.S("0","9")
C.a.h(u.a,t)
t=e.k(0,r).l(0,m)
u=V.t(new H.q(l))
C.a.h(t.a,u)
u=e.k(0,m).l(0,m)
t=V.t(new H.q(l))
C.a.h(u.a,t)
t=e.k(0,r).l(0,k)
u=V.t(new H.q("/"))
C.a.h(t.a,u)
u=e.k(0,k).l(0,j)
t=V.t(new H.q("/"))
C.a.h(u.a,t)
C.a.h(e.k(0,k).l(0,m).a,new V.b6())
t=e.k(0,j).l(0,i)
u=V.t(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,j).l(0,j)
t=new V.ag()
s=[V.al]
t.sU(H.c([],s))
C.a.h(u.a,t)
u=V.t(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,r).l(0,h)
t=V.t(new H.q("#"))
C.a.h(u.a,t)
t=e.k(0,h).l(0,h)
u=new V.ag()
u.sU(H.c([],s))
C.a.h(t.a,u)
t=V.t(new H.q("\n"))
C.a.h(u.a,t)
t=e.k(0,h).l(0,g)
u=V.t(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,r).l(0,f)
t=V.t(new H.q(" \n\t"))
C.a.h(u.a,t)
t=e.k(0,f).l(0,f)
u=V.t(new H.q(" \n\t"))
C.a.h(t.a,u)
u=e.k(0,p)
u.d=u.a.F("Num")
u=e.k(0,n)
u.d=u.a.F("Num")
u=e.k(0,m)
u.d=u.a.F("Symbol")
u=e.k(0,i)
u.d=u.a.F(j)
u=e.k(0,g)
u.d=u.a.F(h)
u=e.k(0,f)
u.d=u.a.F(f)
u=e.k(0,q)
u=u.d=u.a.F(q)
t=[P.f]
u.am(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.am(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.am(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.ft.prototype={
b0:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.B(a.b,"#911")
u.B("=",t)
break
case"Id":u.B(a.b,t)
break
case"Other":u.B(a.b,t)
break
case"Reserved":u.B(a.b,"#119")
break
case"String":u.B(a.b,"#171")
break
case"Symbol":u.B(a.b,"#616")
break}},
aX:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.i_()
l.c=l.k(0,s)
u=l.k(0,s).l(0,r)
t=V.t(new H.q("_"))
C.a.h(u.a,t)
t=V.S("a","z")
C.a.h(u.a,t)
t=V.S("A","Z")
C.a.h(u.a,t)
t=l.k(0,r).l(0,r)
u=V.t(new H.q("_"))
C.a.h(t.a,u)
u=V.S("0","9")
C.a.h(t.a,u)
u=V.S("a","z")
C.a.h(t.a,u)
u=V.S("A","Z")
C.a.h(t.a,u)
u=l.k(0,r).l(0,q)
t=V.t(new H.q("="))
C.a.h(u.a,t)
u.c=!0
u=l.k(0,s).l(0,p)
t=V.t(new H.q("</\\-!>="))
C.a.h(u.a,t)
t=l.k(0,p).l(0,p)
u=V.t(new H.q("</\\-!>="))
C.a.h(t.a,u)
u=l.k(0,s).l(0,o)
t=V.t(new H.q('"'))
C.a.h(u.a,t)
t=l.k(0,o).l(0,n)
u=V.t(new H.q('"'))
C.a.h(t.a,u)
u=l.k(0,o).l(0,"EscStr")
t=V.t(new H.q("\\"))
C.a.h(u.a,t)
t=l.k(0,"EscStr").l(0,o)
u=V.t(new H.q('"'))
C.a.h(t.a,u)
C.a.h(l.k(0,o).l(0,o).a,new V.b6())
C.a.h(l.k(0,s).l(0,m).a,new V.b6())
u=l.k(0,m).l(0,m)
t=new V.ag()
t.sU(H.c([],[V.al]))
C.a.h(u.a,t)
u=V.t(new H.q('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.S("a","z")
C.a.h(t.a,u)
u=V.S("A","Z")
C.a.h(t.a,u)
u=l.k(0,p)
u.d=u.a.F("Symbol")
u=l.k(0,n)
u.d=u.a.F("String")
u=l.k(0,r)
t=u.a.F(r)
u.d=t
t.am(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
t=l.k(0,q)
t.d=t.a.F(q)
t=l.k(0,m)
t.d=t.a.F(m)
return l}}
V.hm.prototype={
d_:function(a,b){H.l(b,"$ib",[P.f],"$ab")
this.sbg(H.c([],[[P.b,W.ar]]))
this.B(C.a.l(b,"\n"),"#111")},
b0:function(a){},
aX:function(){return}}
V.hC.prototype={
dF:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a8(q,"scroll",H.k(new V.hE(o),{func:1,ret:-1,args:[r]}),!1,r)},
cz:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.f],"$ab")
this.fv()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.dd(C.a.hd(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.v)(s),++q){p=s[q]
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
if(H.nq(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.E(m[1])
l.textContent=H.E(m[0])
t.appendChild(l)}else{k=P.l_(C.q,n,C.h,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
dk:function(a){var u,t,s,r=new V.f5("dart")
r.aR("dart")
u=new V.fs("glsl")
u.aR("glsl")
t=new V.ft("html")
t.aR("html")
s=C.a.h8(H.c([r,u,t],[V.bm]),new V.hF(a))
if(s!=null)return s
r=new V.hm("plain")
r.aR("plain")
return r},
cv:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.l(b0,"$ib",[P.f],"$ab")
u=H.c([],[P.p])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.k8(r).b8(r,"+")){C.a.n(b0,s,C.d.aa(r,1))
C.a.h(u,1)
t=!0}else if(C.d.b8(r,"-")){C.a.n(b0,s,C.d.aa(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.dk(a8)
q.d_(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.l_(C.q,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.kk()
i.href="#"+m
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
if(s>=u.length)return H.d(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.v)(r),++a0)C.O.fN(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.v)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gM(r);a3.t();)c.appendChild(a3.gC(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
fv:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.i_()
u.c=u.k(0,q)
t=u.k(0,q).l(0,p)
s=V.t(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).l(0,p)
s=new V.ag()
r=[V.al]
s.sU(H.c([],r))
C.a.h(t.a,s)
t=V.t(new H.q("*"))
C.a.h(s.a,t)
t=u.k(0,p).l(0,"BoldEnd")
s=V.t(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,o)
s=V.t(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,o).l(0,o)
s=new V.ag()
s.sU(H.c([],r))
C.a.h(t.a,s)
t=V.t(new H.q("_"))
C.a.h(s.a,t)
t=u.k(0,o).l(0,n)
s=V.t(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,m)
s=V.t(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,m).l(0,m)
s=new V.ag()
s.sU(H.c([],r))
C.a.h(t.a,s)
t=V.t(new H.q("`"))
C.a.h(s.a,t)
t=u.k(0,m).l(0,"CodeEnd")
s=V.t(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,l)
s=V.t(new H.q("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,l).l(0,k)
s=V.t(new H.q("|"))
C.a.h(t.a,s)
s=u.k(0,l).l(0,j)
t=V.t(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,l).l(0,l)
t=new V.ag()
t.sU(H.c([],r))
C.a.h(s.a,t)
s=V.t(new H.q("|]"))
C.a.h(t.a,s)
s=u.k(0,k).l(0,j)
t=V.t(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).l(0,k)
t=new V.ag()
t.sU(H.c([],r))
C.a.h(s.a,t)
s=V.t(new H.q("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).l(0,i).a,new V.b6())
s=u.k(0,i).l(0,i)
t=new V.ag()
t.sU(H.c([],r))
C.a.h(s.a,t)
s=V.t(new H.q("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.F(p)
s=u.k(0,n)
s.d=s.a.F(o)
s=u.k(0,"CodeEnd")
s.d=s.a.F(m)
s=u.k(0,j)
s.d=s.a.F("Link")
s=u.k(0,i)
s.d=s.a.F(i)
this.b=u}}
V.hE.prototype={
$1:function(a){P.kM(C.i,new V.hD(this.a))},
$S:42}
V.hD.prototype={
$0:function(){var u=C.b.a1(document.documentElement.scrollTop),t=this.a.style,s=H.j(-0.01*u)+"px"
t.top=s},
$S:1}
V.hF.prototype={
$1:function(a){return H.m(a,"$ibm").a===this.a},
$S:43}
X.jy.prototype={
$1:function(a){var u,t,s,r
H.m(a,"$iF")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.cv("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.cv("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:5};(function aliases(){var u=J.a.prototype
u.dt=u.i
u=J.de.prototype
u.dv=u.i
u=P.i.prototype
u.du=u.b4
u=W.P.prototype
u.b9=u.Z
u=W.ek.prototype
u.dz=u.a7
u=O.dm.prototype
u.bT=u.ae
u=O.aU.prototype
u.bU=u.ae
u=V.dk.prototype
u.dw=u.aj
u.bS=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"n0","mp",11)
u(P,"n1","mq",11)
u(P,"n2","mr",11)
t(P,"l8","mZ",2)
s(W,"nb",4,null,["$4"],["mt"],18,0)
s(W,"nc",4,null,["$4"],["mu"],18,0)
var m
r(m=E.af.prototype,"gcY",0,0,null,["$1","$0"],["cZ","ho"],0,0)
r(m,"gcW",0,0,null,["$1","$0"],["cX","hn"],0,0)
r(m,"gcU",0,0,null,["$1","$0"],["cV","hk"],0,0)
q(m,"ghi","hj",7)
q(m,"ghl","hm",7)
r(m=E.dJ.prototype,"gbW",0,0,null,["$1","$0"],["bY","bX"],0,0)
p(m,"ghC","d5",2)
o(m=X.dP.prototype,"geH","eI",10)
o(m,"gev","ew",10)
o(m,"geB","eC",3)
o(m,"geL","eM",19)
o(m,"geJ","eK",19)
o(m,"geP","eQ",3)
o(m,"geT","eU",3)
o(m,"geF","eG",3)
o(m,"geR","eS",3)
o(m,"geD","eE",3)
o(m,"geV","eW",28)
o(m,"geX","eY",10)
o(m,"gf7","f8",8)
o(m,"gf3","f4",8)
o(m,"gf5","f6",8)
r(D.bp.prototype,"gdI",0,0,null,["$1","$0"],["ab","dJ"],0,0)
r(m=D.dg.prototype,"gci",0,0,null,["$1","$0"],["cj","eN"],0,0)
o(m,"gf_","f0",30)
q(m,"geo","ep",24)
q(m,"gf1","f2",24)
n(V.aG.prototype,"gm","bF",21)
n(V.L.prototype,"gm","bF",21)
r(m=M.d9.prototype,"ga4",0,0,null,["$1","$0"],["ac","dL"],0,0)
q(m,"gex","ey",7)
q(m,"gez","eA",7)
r(m=O.dl.prototype,"gdP",0,0,null,["$1","$0"],["Y","dQ"],0,0)
r(m,"gfk",0,0,null,["$1","$0"],["cn","fl"],0,0)
q(m,"geq","er",20)
q(m,"ges","eu",20)
r(X.du.prototype,"gbZ",0,0,null,["$1","$0"],["ar","dT"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.K,null)
s(P.K,[H.jO,J.a,J.ap,P.e7,P.i,H.cn,P.aS,H.bJ,H.dO,H.i4,P.bq,H.cd,H.ep,P.a4,H.fG,H.fH,H.fB,P.ev,P.b5,P.ay,P.dR,P.hN,P.cz,P.hO,P.b1,P.aa,P.jj,P.j7,P.c_,P.e6,P.u,P.ce,P.fw,P.jh,P.M,P.bo,P.a9,P.aP,P.hk,P.dF,P.dZ,P.fq,P.br,P.b,P.D,P.J,P.ah,P.f,P.bd,W.f1,W.bx,W.B,W.ds,W.ek,W.jc,W.db,W.am,W.j6,W.eA,P.j1,O.a1,O.co,E.eW,E.af,E.hq,E.dJ,Z.dQ,Z.iC,Z.d2,Z.ck,Z.bw,D.eZ,D.bI,D.F,X.d3,X.df,X.fD,X.fJ,X.cp,X.h7,X.i0,X.dP,D.bp,D.a3,D.dv,D.dE,V.a0,V.aM,V.ff,V.dn,V.ac,V.ad,V.a6,V.dz,V.aG,V.L,M.d9,A.cZ,A.eR,A.ab,A.aq,A.as,A.au,A.fS,A.bV,A.bW,A.bZ,A.dL,A.id,F.a2,F.fj,F.bt,F.fF,F.bN,F.dC,F.hz,F.hA,F.hB,F.aw,F.iq,F.ir,F.iu,F.iw,F.ix,F.iy,O.bU,O.dm,O.fT,V.b6,V.al,V.dk,V.hp,V.hy,V.cy,V.dK,V.cB,V.hZ,X.d4,X.dH,X.du,V.bm,V.hC])
s(J.a,[J.fz,J.dd,J.de,J.aB,J.bs,J.b8,H.cs,W.e,W.eO,W.d_,W.aN,W.aO,W.Q,W.dT,W.f6,W.f7,W.dV,W.d8,W.dX,W.f9,W.n,W.e_,W.aR,W.fu,W.e2,W.dj,W.h1,W.e8,W.e9,W.aV,W.ea,W.ed,W.aW,W.eh,W.ej,W.aZ,W.el,W.b_,W.eq,W.aC,W.et,W.hY,W.b2,W.ew,W.i2,W.ij,W.eB,W.eD,W.eF,W.eH,W.eJ,P.ba,P.e4,P.bc,P.ef,P.ho,P.er,P.be,P.ey,P.eS,P.dS,P.d0,P.dx,P.bR,P.dB,P.dM,P.en])
s(J.de,[J.hl,J.bv,J.b9])
t(J.jN,J.aB)
s(J.bs,[J.dc,J.fA])
t(P.fI,P.e7)
s(P.fI,[H.dN,W.iK,W.ae,P.fm])
t(H.q,H.dN)
s(P.i,[H.fc,H.fM,H.cG])
s(H.fc,[H.bL,H.dh])
s(P.aS,[H.fN,H.iD])
t(H.fO,H.bL)
s(P.bq,[H.hh,H.fC,H.ih,H.i6,H.eY,H.hw,P.eQ,P.dt,P.aK,P.ii,P.ig,P.bS,P.f_,P.f4])
s(H.cd,[H.jE,H.hU,H.ju,H.jv,H.jw,P.iG,P.iF,P.iH,P.iI,P.jg,P.jf,P.iQ,P.iU,P.iR,P.iS,P.iT,P.iX,P.iY,P.iW,P.iV,P.hP,P.hQ,P.jn,P.j4,P.j3,P.j5,P.fL,P.fa,P.fb,W.fd,W.h3,W.h5,W.hv,W.hM,W.iP,W.hf,W.he,W.j8,W.j9,W.je,W.ji,P.jp,P.fn,P.fo,P.eU,E.hr,E.hs,E.ht,E.hX,D.fg,D.fh,F.jD,F.jq,F.iA,F.iz,F.is,F.it,O.fW,O.fX,O.fY,O.fZ,O.h_,O.h0,V.jB,V.hE,V.hD,V.hF,X.jy])
s(H.hU,[H.hK,H.cb])
t(H.iE,P.eQ)
t(P.fK,P.a4)
s(P.fK,[H.Z,W.iJ])
t(H.dp,H.cs)
s(H.dp,[H.cK,H.cM])
t(H.cL,H.cK)
t(H.cr,H.cL)
t(H.cN,H.cM)
t(H.dq,H.cN)
s(H.dq,[H.h8,H.h9,H.ha,H.hb,H.hc,H.dr,H.hd])
t(P.j2,P.jj)
t(P.j0,P.j7)
t(P.cf,P.hO)
t(P.fe,P.ce)
s(P.cf,[P.fv,P.il])
t(P.ik,P.fe)
s(P.a9,[P.y,P.p])
s(P.aK,[P.bQ,P.fx])
s(W.e,[W.C,W.fl,W.aY,W.cO,W.b0,W.aD,W.cQ,W.iB,W.cH,P.eV,P.bG])
s(W.C,[W.P,W.bl,W.cI])
s(W.P,[W.r,P.o])
s(W.r,[W.cY,W.eP,W.ca,W.bk,W.bH,W.ar,W.fp,W.hx,W.bT,W.dG,W.hS,W.hT,W.cA])
s(W.aN,[W.cg,W.f2,W.f3])
t(W.f0,W.aO)
t(W.ch,W.dT)
t(W.dW,W.dV)
t(W.d7,W.dW)
t(W.dY,W.dX)
t(W.f8,W.dY)
t(W.aQ,W.d_)
t(W.e0,W.e_)
t(W.fk,W.e0)
t(W.e3,W.e2)
t(W.bK,W.e3)
t(W.bu,W.n)
s(W.bu,[W.aT,W.a5,W.aE])
t(W.h2,W.e8)
t(W.h4,W.e9)
t(W.eb,W.ea)
t(W.h6,W.eb)
t(W.ee,W.ed)
t(W.ct,W.ee)
t(W.ei,W.eh)
t(W.hn,W.ei)
t(W.hu,W.ej)
t(W.cP,W.cO)
t(W.hH,W.cP)
t(W.em,W.el)
t(W.hI,W.em)
t(W.hL,W.eq)
t(W.eu,W.et)
t(W.hV,W.eu)
t(W.cR,W.cQ)
t(W.hW,W.cR)
t(W.ex,W.ew)
t(W.i1,W.ex)
t(W.b4,W.a5)
t(W.eC,W.eB)
t(W.iL,W.eC)
t(W.dU,W.d8)
t(W.eE,W.eD)
t(W.iZ,W.eE)
t(W.eG,W.eF)
t(W.ec,W.eG)
t(W.eI,W.eH)
t(W.ja,W.eI)
t(W.eK,W.eJ)
t(W.jb,W.eK)
t(W.iM,W.iJ)
t(W.iN,P.hN)
t(W.jY,W.iN)
t(W.iO,P.cz)
t(W.jd,W.ek)
t(P.at,P.j1)
t(P.e5,P.e4)
t(P.fE,P.e5)
t(P.eg,P.ef)
t(P.hi,P.eg)
t(P.cw,P.o)
t(P.es,P.er)
t(P.hR,P.es)
t(P.ez,P.ey)
t(P.i3,P.ez)
t(P.eT,P.dS)
t(P.hj,P.bG)
t(P.eo,P.en)
t(P.hJ,P.eo)
s(E.eW,[Z.d1,A.cx,T.dI])
s(D.F,[D.cl,D.cm,D.U])
t(D.dg,O.a1)
t(U.bM,D.eZ)
s(U.bM,[U.d5,U.dA])
t(A.fP,A.cx)
s(A.dL,[A.av,A.ia,A.ib,A.ic,A.i8,A.a7,A.i9,A.T,A.cD,A.ie,A.cE,A.an,A.bX,A.bY])
t(F.hG,F.fj)
t(F.i7,F.fF)
t(F.iv,F.iw)
t(F.hg,F.ix)
t(O.dl,O.bU)
s(O.dm,[O.fQ,O.fR,O.aU])
s(O.aU,[O.fU,O.fV])
s(V.dk,[V.ag,V.cC])
t(X.fr,X.dH)
s(V.bm,[V.f5,V.fs,V.ft,V.hm])
u(H.dN,H.dO)
u(H.cK,P.u)
u(H.cL,H.bJ)
u(H.cM,P.u)
u(H.cN,H.bJ)
u(P.e7,P.u)
u(W.dT,W.f1)
u(W.dV,P.u)
u(W.dW,W.B)
u(W.dX,P.u)
u(W.dY,W.B)
u(W.e_,P.u)
u(W.e0,W.B)
u(W.e2,P.u)
u(W.e3,W.B)
u(W.e8,P.a4)
u(W.e9,P.a4)
u(W.ea,P.u)
u(W.eb,W.B)
u(W.ed,P.u)
u(W.ee,W.B)
u(W.eh,P.u)
u(W.ei,W.B)
u(W.ej,P.a4)
u(W.cO,P.u)
u(W.cP,W.B)
u(W.el,P.u)
u(W.em,W.B)
u(W.eq,P.a4)
u(W.et,P.u)
u(W.eu,W.B)
u(W.cQ,P.u)
u(W.cR,W.B)
u(W.ew,P.u)
u(W.ex,W.B)
u(W.eB,P.u)
u(W.eC,W.B)
u(W.eD,P.u)
u(W.eE,W.B)
u(W.eF,P.u)
u(W.eG,W.B)
u(W.eH,P.u)
u(W.eI,W.B)
u(W.eJ,P.u)
u(W.eK,W.B)
u(P.e4,P.u)
u(P.e5,W.B)
u(P.ef,P.u)
u(P.eg,W.B)
u(P.er,P.u)
u(P.es,W.B)
u(P.ey,P.u)
u(P.ez,W.B)
u(P.dS,P.a4)
u(P.en,P.u)
u(P.eo,W.B)})();(function constants(){var u=hunkHelpers.makeConstList
C.n=W.bk.prototype
C.E=W.bH.prototype
C.F=W.ar.prototype
C.I=J.a.prototype
C.a=J.aB.prototype
C.e=J.dc.prototype
C.j=J.dd.prototype
C.b=J.bs.prototype
C.d=J.b8.prototype
C.J=J.b9.prototype
C.N=W.ct.prototype
C.r=J.hl.prototype
C.c=P.bR.prototype
C.O=W.bT.prototype
C.t=W.dG.prototype
C.m=J.bv.prototype
C.u=W.b4.prototype
C.v=W.cH.prototype
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.w=function() {
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
C.B=function(getTagFallback) {
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
C.x=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.y=function(hooks) {
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
C.A=function(hooks) {
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
C.z=function(hooks) {
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
C.o=function(hooks) { return hooks; }

C.C=new P.hk()
C.h=new P.ik()
C.D=new P.il()
C.f=new P.j2()
C.i=new P.aP(0)
C.G=new P.aP(5e6)
C.H=new P.fw("element",!0,!1,!1,!1)
C.K=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.L=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.M=H.c(u([]),[P.f])
C.q=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.p])
C.k=H.c(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.l=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])})()
var v={mangledGlobalNames:{p:"int",y:"double",a9:"num",f:"String",M:"bool",J:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.F]},{func:1,ret:P.J},{func:1,ret:-1},{func:1,ret:-1,args:[W.a5]},{func:1,ret:P.J,args:[F.a2]},{func:1,ret:P.J,args:[D.F]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[P.p,[P.i,E.af]]},{func:1,ret:-1,args:[W.aE]},{func:1,ret:-1,args:[P.p,P.p]},{func:1,ret:-1,args:[W.n]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.J,args:[,]},{func:1,args:[,]},{func:1,ret:P.M,args:[P.f]},{func:1,ret:P.J,args:[,,]},{func:1,ret:P.M,args:[W.am]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.F]}]},{func:1,ret:P.M,args:[W.P,P.f,P.f,W.bx]},{func:1,ret:-1,args:[W.aT]},{func:1,ret:-1,args:[P.p,[P.i,V.ac]]},{func:1,ret:P.y},{func:1,ret:P.M,args:[W.C]},{func:1,ret:P.f,args:[P.p]},{func:1,ret:-1,args:[P.p,[P.i,D.a3]]},{func:1,ret:P.J,args:[P.a9]},{func:1,args:[P.f]},{func:1,ret:W.P,args:[W.C]},{func:1,ret:-1,args:[W.b4]},{func:1,ret:-1,args:[W.C,W.C]},{func:1,ret:P.M,args:[[P.i,D.a3]]},{func:1,ret:P.f,args:[P.f]},{func:1,args:[W.n]},{func:1,ret:V.a6,args:[P.y]},{func:1,ret:P.J,args:[F.aw,P.y,P.y]},{func:1,ret:[P.ay,,],args:[,]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,ret:P.p,args:[A.aq,A.aq]},{func:1,ret:P.p,args:[A.as,A.as]},{func:1,ret:P.p,args:[A.au,A.au]},{func:1,ret:P.J,args:[P.b1]},{func:1,ret:P.J,args:[W.n]},{func:1,ret:P.M,args:[V.bm]},{func:1,args:[,P.f]},{func:1,ret:P.J,args:[,],opt:[P.ah]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aL=0
$.cc=null
$.kl=null
$.k_=!1
$.ld=null
$.l6=null
$.lj=null
$.jr=null
$.jx=null
$.ka=null
$.c0=null
$.cT=null
$.cU=null
$.k0=!1
$.V=C.f
$.aj=[]
$.b7=null
$.jK=null
$.ks=null
$.kr=null
$.e1=P.ku(P.f,P.br)
$.kz=null
$.kD=null
$.cu=null
$.kH=null
$.kQ=null
$.kT=null
$.kS=null
$.im=null
$.io=null
$.ip=null
$.kR=null
$.kC=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nz","ln",function(){return H.lc("_$dart_dartClosure")})
u($,"nA","kg",function(){return H.lc("_$dart_js")})
u($,"nF","lo",function(){return H.b3(H.i5({
toString:function(){return"$receiver$"}}))})
u($,"nG","lp",function(){return H.b3(H.i5({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nH","lq",function(){return H.b3(H.i5(null))})
u($,"nI","lr",function(){return H.b3(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nL","lu",function(){return H.b3(H.i5(void 0))})
u($,"nM","lv",function(){return H.b3(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nK","lt",function(){return H.b3(H.kO(null))})
u($,"nJ","ls",function(){return H.b3(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nO","lx",function(){return H.b3(H.kO(void 0))})
u($,"nN","lw",function(){return H.b3(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"o2","kh",function(){return P.mo()})
u($,"o4","lC",function(){return P.mc("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"o3","lB",function(){return P.kv(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"nW","lA",function(){return Z.ax(0)})
u($,"nQ","ly",function(){return Z.ax(511)})
u($,"nY","bj",function(){return Z.ax(1)})
u($,"nX","bi",function(){return Z.ax(2)})
u($,"nS","bh",function(){return Z.ax(4)})
u($,"nZ","bC",function(){return Z.ax(8)})
u($,"o_","bD",function(){return Z.ax(16)})
u($,"nT","cV",function(){return Z.ax(32)})
u($,"nU","cW",function(){return Z.ax(64)})
u($,"nV","lz",function(){return Z.ax(96)})
u($,"o0","c9",function(){return Z.ax(128)})
u($,"nR","bg",function(){return Z.ax(256)})
u($,"ny","lm",function(){return new V.ff(1e-9)})
u($,"nx","O",function(){return $.lm()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cs,ArrayBufferView:H.cs,Float32Array:H.cr,Float64Array:H.cr,Int16Array:H.h8,Int32Array:H.h9,Int8Array:H.ha,Uint16Array:H.hb,Uint32Array:H.hc,Uint8ClampedArray:H.dr,CanvasPixelArray:H.dr,Uint8Array:H.hd,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLImageElement:W.r,HTMLInputElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableColElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.eO,HTMLAnchorElement:W.cY,HTMLAreaElement:W.eP,HTMLBaseElement:W.ca,Blob:W.d_,HTMLBodyElement:W.bk,HTMLCanvasElement:W.bH,CDATASection:W.bl,CharacterData:W.bl,Comment:W.bl,ProcessingInstruction:W.bl,Text:W.bl,CSSNumericValue:W.cg,CSSUnitValue:W.cg,CSSPerspective:W.f0,CSSCharsetRule:W.Q,CSSConditionRule:W.Q,CSSFontFaceRule:W.Q,CSSGroupingRule:W.Q,CSSImportRule:W.Q,CSSKeyframeRule:W.Q,MozCSSKeyframeRule:W.Q,WebKitCSSKeyframeRule:W.Q,CSSKeyframesRule:W.Q,MozCSSKeyframesRule:W.Q,WebKitCSSKeyframesRule:W.Q,CSSMediaRule:W.Q,CSSNamespaceRule:W.Q,CSSPageRule:W.Q,CSSRule:W.Q,CSSStyleRule:W.Q,CSSSupportsRule:W.Q,CSSViewportRule:W.Q,CSSStyleDeclaration:W.ch,MSStyleCSSProperties:W.ch,CSS2Properties:W.ch,CSSImageValue:W.aN,CSSKeywordValue:W.aN,CSSPositionValue:W.aN,CSSResourceValue:W.aN,CSSURLImageValue:W.aN,CSSStyleValue:W.aN,CSSMatrixComponent:W.aO,CSSRotation:W.aO,CSSScale:W.aO,CSSSkew:W.aO,CSSTranslation:W.aO,CSSTransformComponent:W.aO,CSSTransformValue:W.f2,CSSUnparsedValue:W.f3,DataTransferItemList:W.f6,HTMLDivElement:W.ar,DOMException:W.f7,ClientRectList:W.d7,DOMRectList:W.d7,DOMRectReadOnly:W.d8,DOMStringList:W.f8,DOMTokenList:W.f9,Element:W.P,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aQ,FileList:W.fk,FileWriter:W.fl,HTMLFormElement:W.fp,Gamepad:W.aR,History:W.fu,HTMLCollection:W.bK,HTMLFormControlsCollection:W.bK,HTMLOptionsCollection:W.bK,KeyboardEvent:W.aT,Location:W.dj,MediaList:W.h1,MIDIInputMap:W.h2,MIDIOutputMap:W.h4,MimeType:W.aV,MimeTypeArray:W.h6,PointerEvent:W.a5,MouseEvent:W.a5,DragEvent:W.a5,Document:W.C,DocumentFragment:W.C,HTMLDocument:W.C,ShadowRoot:W.C,XMLDocument:W.C,DocumentType:W.C,Node:W.C,NodeList:W.ct,RadioNodeList:W.ct,Plugin:W.aW,PluginArray:W.hn,RTCStatsReport:W.hu,HTMLSelectElement:W.hx,SourceBuffer:W.aY,SourceBufferList:W.hH,SpeechGrammar:W.aZ,SpeechGrammarList:W.hI,SpeechRecognitionResult:W.b_,Storage:W.hL,CSSStyleSheet:W.aC,StyleSheet:W.aC,HTMLTableCellElement:W.bT,HTMLTableDataCellElement:W.bT,HTMLTableHeaderCellElement:W.bT,HTMLTableElement:W.dG,HTMLTableRowElement:W.hS,HTMLTableSectionElement:W.hT,HTMLTemplateElement:W.cA,TextTrack:W.b0,TextTrackCue:W.aD,VTTCue:W.aD,TextTrackCueList:W.hV,TextTrackList:W.hW,TimeRanges:W.hY,Touch:W.b2,TouchEvent:W.aE,TouchList:W.i1,TrackDefaultList:W.i2,CompositionEvent:W.bu,FocusEvent:W.bu,TextEvent:W.bu,UIEvent:W.bu,URL:W.ij,VideoTrackList:W.iB,WheelEvent:W.b4,Window:W.cH,DOMWindow:W.cH,Attr:W.cI,CSSRuleList:W.iL,ClientRect:W.dU,DOMRect:W.dU,GamepadList:W.iZ,NamedNodeMap:W.ec,MozNamedAttrMap:W.ec,SpeechRecognitionResultList:W.ja,StyleSheetList:W.jb,SVGLength:P.ba,SVGLengthList:P.fE,SVGNumber:P.bc,SVGNumberList:P.hi,SVGPointList:P.ho,SVGScriptElement:P.cw,SVGStringList:P.hR,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,SVGTransform:P.be,SVGTransformList:P.i3,AudioBuffer:P.eS,AudioParamMap:P.eT,AudioTrackList:P.eV,AudioContext:P.bG,webkitAudioContext:P.bG,BaseAudioContext:P.bG,OfflineAudioContext:P.hj,WebGLBuffer:P.d0,WebGLProgram:P.dx,WebGL2RenderingContext:P.bR,WebGLShader:P.dB,WebGLUniformLocation:P.dM,SQLResultSetRowList:P.hJ})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dp.$nativeSuperclassTag="ArrayBufferView"
H.cK.$nativeSuperclassTag="ArrayBufferView"
H.cL.$nativeSuperclassTag="ArrayBufferView"
H.cr.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.dq.$nativeSuperclassTag="ArrayBufferView"
W.cO.$nativeSuperclassTag="EventTarget"
W.cP.$nativeSuperclassTag="EventTarget"
W.cQ.$nativeSuperclassTag="EventTarget"
W.cR.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.lf,[])
else X.lf([])})})()
//# sourceMappingURL=test.dart.js.map
