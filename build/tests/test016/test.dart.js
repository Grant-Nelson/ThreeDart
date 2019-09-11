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
a[c]=function(){a[c]=function(){H.nN(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kq"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kq"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kq(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={k8:function k8(){},
k5:function(){return new P.cM("No element")},
mc:function(){return new P.cM("Too many elements")},
dU:function(a,b,c,d,e){H.m(a,"$ib",[e],"$ab")
H.l(d,{func:1,ret:P.p,args:[e,e]})
if(c-b<=32)H.my(a,b,c,d,e)
else H.mx(a,b,c,d,e)},
my:function(a,b,c,d,e){var u,t,s,r,q
H.m(a,"$ib",[e],"$ab")
H.l(d,{func:1,ret:P.p,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.d(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.d(a,r)
r=J.aP(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.d(a,q)
C.a.n(a,s,a[q])
s=q}C.a.n(a,s,t)}},
mx:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.m(a2,"$ib",[a6],"$ab")
H.l(a5,{func:1,ret:P.p,args:[a6,a6]})
u=C.e.a3(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.e.a3(a3+a4,2)
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
if(J.aP(a5.$2(n,m),0)){i=m
m=n
n=i}if(J.aP(a5.$2(k,j),0)){i=j
j=k
k=i}if(J.aP(a5.$2(n,l),0)){i=l
l=n
n=i}if(J.aP(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.aP(a5.$2(n,k),0)){i=k
k=n
n=i}if(J.aP(a5.$2(l,k),0)){i=k
k=l
l=i}if(J.aP(a5.$2(m,j),0)){i=j
j=m
m=i}if(J.aP(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.aP(a5.$2(k,j),0)){i=j
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
if(J.a3(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.aa()
if(d<0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.n(a2,f,a2[h])
C.a.n(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.aE()
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
if(typeof a0!=="number")return a0.aa()
if(a0<0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.n(a2,f,a2[h])
C.a.n(a2,h,e)}++h}else{a1=a5.$2(e,k)
if(typeof a1!=="number")return a1.aE()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.aE()
if(d>0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.aa()
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
H.dU(a2,a3,h-2,a5,a6)
H.dU(a2,g+2,a4,a5,a6)
if(a)return
if(h<t&&g>s){while(!0){if(h>=a2.length)return H.d(a2,h)
if(!J.a3(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.d(a2,g)
if(!J.a3(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
if(a5.$2(e,m)===0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.n(a2,f,a2[h])
C.a.n(a2,h,e)}++h}else if(a5.$2(e,k)===0)for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
if(a5.$2(a2[g],k)===0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.aa()
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
break}}}H.dU(a2,h,g,a5,a6)}else H.dU(a2,h,g,a5,a6)},
r:function r(a){this.a=a},
fz:function fz(){},
bZ:function bZ(){},
cA:function cA(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
h4:function h4(a,b,c){this.a=a
this.b=b
this.$ti=c},
h5:function h5(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
h6:function h6(a,b,c){this.a=a
this.b=b
this.$ti=c},
cV:function cV(a,b,c){this.a=a
this.b=b
this.$ti=c},
iT:function iT(a,b,c){this.a=a
this.b=b
this.$ti=c},
bW:function bW(){},
e4:function e4(){},
e3:function e3(){},
cj:function(a){var u,t=H.I(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
nu:function(a){return v.types[H.a1(a)]},
nB:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.V(a).$iJ},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.as(a)
if(typeof u!=="string")throw H.i(H.bm(a))
return u},
cI:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
c2:function(a){return H.mk(a)+H.km(H.bN(a),0,null)},
mk:function(a){var u,t,s,r,q,p,o,n=J.V(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.I||!!n.$ibJ){r=C.p(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cj(t.length>1&&C.c.aI(t,0)===36?C.c.ap(t,1):t)},
l_:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
ms:function(a){var u,t,s,r=H.c([],[P.p])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.t)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.bm(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.bf(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.i(H.bm(s))}return H.l_(r)},
l0:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.bm(s))
if(s<0)throw H.i(H.bm(s))
if(s>65535)return H.ms(a)}return H.l_(a)},
ka:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.bf(u,10))>>>0,56320|u&1023)}throw H.i(P.b1(a,0,1114111,null,null))},
c1:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mr:function(a){var u=H.c1(a).getFullYear()+0
return u},
mp:function(a){var u=H.c1(a).getMonth()+1
return u},
ml:function(a){var u=H.c1(a).getDate()+0
return u},
mm:function(a){var u=H.c1(a).getHours()+0
return u},
mo:function(a){var u=H.c1(a).getMinutes()+0
return u},
mq:function(a){var u=H.c1(a).getSeconds()+0
return u},
mn:function(a){var u=H.c1(a).getMilliseconds()+0
return u},
F:function(a){throw H.i(H.bm(a))},
d:function(a,b){if(a==null)J.bR(a)
throw H.i(H.cf(a,b))},
cf:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aJ(!0,b,s,null)
u=H.a1(J.bR(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.X(b,a,s,null,u)
return P.hH(b,s)},
no:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c3(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c3(a,c,!0,b,"end",u)
return new P.aJ(!0,b,"end",null)},
bm:function(a){return new P.aJ(!0,a,null,null)},
nk:function(a){if(typeof a!=="number")throw H.i(H.bm(a))
return a},
i:function(a){var u
if(a==null)a=new P.dL()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lE})
u.name=""}else u.toString=H.lE
return u},
lE:function(){return J.as(this.dartException)},
A:function(a){throw H.i(a)},
t:function(a){throw H.i(P.bv(a))},
b8:function(a){var u,t,s,r,q,p
a=H.lD(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iq(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ir:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lb:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kU:function(a,b){return new H.hy(a,b==null?null:b.method)},
k9:function(a,b){var u=b==null,t=u?null:b.method
return new H.fW(a,t,u?null:b.receiver)},
ay:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jV(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.bf(t,16)&8191)===10)switch(s){case 438:return f.$1(H.k9(H.j(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kU(H.j(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.lH()
q=$.lI()
p=$.lJ()
o=$.lK()
n=$.lN()
m=$.lO()
l=$.lM()
$.lL()
k=$.lQ()
j=$.lP()
i=r.af(u)
if(i!=null)return f.$1(H.k9(H.I(u),i))
else{i=q.af(u)
if(i!=null){i.method="call"
return f.$1(H.k9(H.I(u),i))}else{i=p.af(u)
if(i==null){i=o.af(u)
if(i==null){i=n.af(u)
if(i==null){i=m.af(u)
if(i==null){i=l.af(u)
if(i==null){i=o.af(u)
if(i==null){i=k.af(u)
if(i==null){i=j.af(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kU(H.I(u),i))}}return f.$1(new H.iB(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dW()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aJ(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dW()
return a},
ch:function(a){var u
if(a==null)return new H.eL(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eL(a)},
nr:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
nA:function(a,b,c,d,e,f){H.k(a,"$ibz")
switch(H.a1(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.z("Unsupported number of arguments for wrapped closure"))},
ce:function(a,b){var u
H.a1(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nA)
a.$identity=u
return u},
m5:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.i1().constructor.prototype):Object.create(new H.cm(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aQ
if(typeof t!=="number")return t.C()
$.aQ=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.kH(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.nu,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.kG:H.jZ
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.i("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kH(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
m2:function(a,b,c,d){var u=H.jZ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kH:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.m4(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.m2(t,!r,u,b)
if(t===0){r=$.aQ
if(typeof r!=="number")return r.C()
$.aQ=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cn
return new Function(r+H.j(q==null?$.cn=H.fi("self"):q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aQ
if(typeof r!=="number")return r.C()
$.aQ=r+1
o+=r
r="return function("+o+"){return this."
q=$.cn
return new Function(r+H.j(q==null?$.cn=H.fi("self"):q)+"."+H.j(u)+"("+o+");}")()},
m3:function(a,b,c,d){var u=H.jZ,t=H.kG
switch(b?-1:a){case 0:throw H.i(H.mv("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
m4:function(a,b){var u,t,s,r,q,p,o,n=$.cn
if(n==null)n=$.cn=H.fi("self")
u=$.kF
if(u==null)u=$.kF=H.fi("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.m3(s,!q,t,b)
if(s===1){n="return function(){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+");"
u=$.aQ
if(typeof u!=="number")return u.C()
$.aQ=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+", "+o+");"
u=$.aQ
if(typeof u!=="number")return u.C()
$.aQ=u+1
return new Function(n+u+"}")()},
kq:function(a,b,c,d,e,f,g){return H.m5(a,b,H.a1(c),d,!!e,!!f,g)},
jZ:function(a){return a.a},
kG:function(a){return a.c},
fi:function(a){var u,t,s,r=new H.cm("self","target","receiver","name"),q=J.k6(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
B:function(a){if(a==null)H.ng("boolean expression must not be null")
return a},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.aN(a,"String"))},
os:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aN(a,"double"))},
lz:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aN(a,"num"))},
kn:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.aN(a,"bool"))},
a1:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.aN(a,"int"))},
lB:function(a,b){throw H.i(H.aN(a,H.cj(H.I(b).substring(2))))},
nH:function(a,b){throw H.i(H.m1(a,H.cj(H.I(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.V(a)[b])return a
H.lB(a,b)},
q:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.V(a)[b]
else u=!0
if(u)return a
H.nH(a,b)},
kw:function(a){if(a==null)return a
if(!!J.V(a).$ib)return a
throw H.i(H.aN(a,"List<dynamic>"))},
nC:function(a,b){var u
if(a==null)return a
u=J.V(a)
if(!!u.$ib)return a
if(u[b])return a
H.lB(a,b)},
lu:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a1(u)]
else return a.$S()}return},
f7:function(a,b){var u
if(typeof a=="function")return!0
u=H.lu(J.V(a))
if(u==null)return!1
return H.ll(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.kj)return a
$.kj=!0
try{if(H.f7(a,b))return a
u=H.jS(b)
t=H.aN(a,u)
throw H.i(t)}finally{$.kj=!1}},
kr:function(a,b){if(a!=null&&!H.kp(a,b))H.A(H.aN(a,H.jS(b)))
return a},
aN:function(a,b){return new H.is("TypeError: "+P.dr(a)+": type '"+H.lp(a)+"' is not a subtype of type '"+b+"'")},
m1:function(a,b){return new H.fj("CastError: "+P.dr(a)+": type '"+H.lp(a)+"' is not a subtype of type '"+b+"'")},
lp:function(a){var u,t=J.V(a)
if(!!t.$icq){u=H.lu(t)
if(u!=null)return H.jS(u)
return"Closure"}return H.c2(a)},
ng:function(a){throw H.i(new H.iU(a))},
nN:function(a){throw H.i(new P.fr(H.I(a)))},
mv:function(a){return new H.hP(a)},
lv:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bN:function(a){if(a==null)return
return a.$ti},
ot:function(a,b,c){return H.ci(a["$a"+H.j(c)],H.bN(b))},
da:function(a,b,c,d){var u
H.I(c)
H.a1(d)
u=H.ci(a["$a"+H.j(c)],H.bN(b))
return u==null?null:u[d]},
aj:function(a,b,c){var u
H.I(b)
H.a1(c)
u=H.ci(a["$a"+H.j(b)],H.bN(a))
return u==null?null:u[c]},
y:function(a,b){var u
H.a1(b)
u=H.bN(a)
return u==null?null:u[b]},
jS:function(a){return H.bM(a,null)},
bM:function(a,b){var u,t
H.m(b,"$ib",[P.h],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cj(a[0].name)+H.km(a,1,b)
if(typeof a=="function")return H.cj(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a1(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.j(b[t])}if('func' in a)return H.mQ(a,b)
if('futureOr' in a)return"FutureOr<"+H.bM("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mQ:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.h]
H.m(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.d(a0,n)
p=C.c.C(p,a0[n])
m=u[q]
if(m!=null&&m!==P.P)p+=" extends "+H.bM(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bM(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bM(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bM(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.nq(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.I(b[h])
j=j+i+H.bM(e[d],a0)+(" "+H.j(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
km:function(a,b,c){var u,t,s,r,q,p
H.m(c,"$ib",[P.h],"$ab")
if(a==null)return""
u=new P.bj("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bM(p,c)}return"<"+u.i(0)+">"},
ci:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ko:function(a,b,c,d){var u,t
H.I(b)
H.kw(c)
H.I(d)
if(a==null)return!1
u=H.bN(a)
t=J.V(a)
if(t[b]==null)return!1
return H.ls(H.ci(t[d],u),null,c,null)},
m:function(a,b,c,d){H.I(b)
H.kw(c)
H.I(d)
if(a==null)return a
if(H.ko(a,b,c,d))return a
throw H.i(H.aN(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cj(b.substring(2))+H.km(c,0,null),v.mangledGlobalNames)))},
ls:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aI(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aI(a[t],b,c[t],d))return!1
return!0},
oq:function(a,b,c){return a.apply(b,H.ci(J.V(b)["$a"+H.j(c)],H.bN(b)))},
lx:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="P"||a.name==="N"||a===-1||a===-2||H.lx(u)}return!1},
kp:function(a,b){var u,t
if(a==null)return b==null||b.name==="P"||b.name==="N"||b===-1||b===-2||H.lx(b)
if(b==null||b===-1||b.name==="P"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kp(a,"type" in b?b.type:null))return!0
if('func' in b)return H.f7(a,b)}u=J.V(a).constructor
t=H.bN(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aI(u,null,b,null)},
H:function(a,b){if(a!=null&&!H.kp(a,b))throw H.i(H.aN(a,H.jS(b)))
return a},
aI:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="P"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="P"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aI(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="N")return!0
if('func' in c)return H.ll(a,b,c,d)
if('func' in a)return c.name==="bz"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aI("type" in a?a.type:l,b,s,d)
else if(H.aI(a,b,s,d))return!0
else{if(!('$i'+"cx" in t.prototype))return!1
r=t.prototype["$a"+"cx"]
q=H.ci(r,u?a.slice(1):l)
return H.aI(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.ls(H.ci(m,u),b,p,d)},
ll:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.nF(h,b,g,d)},
nF:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aI(c[s],d,a[s],b))return!1}return!0},
or:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
nD:function(a){var u,t,s,r,q=H.I($.lw.$1(a)),p=$.jJ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jP[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.I($.lr.$2(a,q))
if(q!=null){p=$.jJ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jP[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jR(u)
$.jJ[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jP[q]=u
return u}if(s==="-"){r=H.jR(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lA(a,u)
if(s==="*")throw H.i(P.lc(q))
if(v.leafTags[q]===true){r=H.jR(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lA(a,u)},
lA:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kx(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jR:function(a){return J.kx(a,!1,null,!!a.$iJ)},
nE:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jR(u)
else return J.kx(u,c,null,null)},
ny:function(){if(!0===$.kv)return
$.kv=!0
H.nz()},
nz:function(){var u,t,s,r,q,p,o,n
$.jJ=Object.create(null)
$.jP=Object.create(null)
H.nx()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lC.$1(q)
if(p!=null){o=H.nE(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nx:function(){var u,t,s,r,q,p,o=C.x()
o=H.cd(C.y,H.cd(C.z,H.cd(C.q,H.cd(C.q,H.cd(C.A,H.cd(C.B,H.cd(C.C(C.p),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lw=new H.jM(r)
$.lr=new H.jN(q)
$.lC=new H.jO(p)},
cd:function(a,b){return a(b)||b},
me:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.i(new P.fL("Illegal RegExp pattern ("+String(r)+")",a))},
nK:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
np:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lD:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kA:function(a,b,c){var u=H.nL(a,b,c)
return u},
nL:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lD(b),'g'),H.np(c))},
iq:function iq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hy:function hy(a,b){this.a=a
this.b=b},
fW:function fW(a,b,c){this.a=a
this.b=b
this.c=c},
iB:function iB(a){this.a=a},
jV:function jV(a){this.a=a},
eL:function eL(a){this.a=a
this.b=null},
cq:function cq(){},
ib:function ib(){},
i1:function i1(){},
cm:function cm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
is:function is(a){this.a=a},
fj:function fj(a){this.a=a},
hP:function hP(a){this.a=a},
iU:function iU(a){this.a=a},
a0:function a0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fZ:function fZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dz:function dz(a,b){this.a=a
this.$ti=b},
h_:function h_(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jM:function jM(a){this.a=a},
jN:function jN(a){this.a=a},
jO:function jO(a){this.a=a},
fV:function fV(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d7:function(a){return a},
bL:function(a,b,c){if(a>>>0!==a||a>=c)throw H.i(H.cf(b,a))},
mP:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.i(H.no(a,b,c))
return b},
cF:function cF(){},
dH:function dH(){},
cE:function cE(){},
dI:function dI(){},
hq:function hq(){},
hr:function hr(){},
hs:function hs(){},
ht:function ht(){},
hu:function hu(){},
dJ:function dJ(){},
hv:function hv(){},
cZ:function cZ(){},
d_:function d_(){},
d0:function d0(){},
d1:function d1(){},
nq:function(a){return J.kN(a?Object.keys(a):[],null)},
nG:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kx:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jL:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kv==null){H.ny()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.i(P.lc("Return interceptor for "+H.j(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kB()]
if(r!=null)return r
r=H.nD(a)
if(r!=null)return r
if(typeof a=="function")return C.K
u=Object.getPrototypeOf(a)
if(u==null)return C.t
if(u===Object.prototype)return C.t
if(typeof s=="function"){Object.defineProperty(s,$.kB(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
md:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.jY(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.b1(a,0,4294967295,"length",null))
return J.kN(new Array(a),b)},
kN:function(a,b){return J.k6(H.c(a,[b]))},
k6:function(a){H.kw(a)
a.fixed$length=Array
return a},
V:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.du.prototype
return J.dt.prototype}if(typeof a=="string")return J.bE.prototype
if(a==null)return J.dv.prototype
if(typeof a=="boolean")return J.fU.prototype
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.P)return a
return J.jL(a)},
ks:function(a){if(typeof a=="string")return J.bE.prototype
if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.P)return a
return J.jL(a)},
jK:function(a){if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.P)return a
return J.jL(a)},
ns:function(a){if(typeof a=="number")return J.bY.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bJ.prototype
return a},
nt:function(a){if(typeof a=="number")return J.bY.prototype
if(typeof a=="string")return J.bE.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bJ.prototype
return a},
kt:function(a){if(typeof a=="string")return J.bE.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bJ.prototype
return a},
ku:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.P)return a
return J.jL(a)},
a3:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.V(a).q(a,b)},
aP:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.ns(a).aE(a,b)},
f8:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nB(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ks(a).j(a,b)},
lW:function(a,b,c,d){return J.ku(a).hs(a,b,c,d)},
jW:function(a,b){return J.nt(a).hE(a,b)},
jX:function(a,b){return J.jK(a).D(a,b)},
lX:function(a,b){return J.jK(a).J(a,b)},
lY:function(a){return J.ku(a).ghB(a)},
bP:function(a){return J.V(a).gG(a)},
bQ:function(a){return J.jK(a).gO(a)},
bR:function(a){return J.ks(a).gm(a)},
kD:function(a){return J.jK(a).ij(a)},
lZ:function(a,b,c){return J.kt(a).ba(a,b,c)},
m_:function(a){return J.kt(a).iv(a)},
as:function(a){return J.V(a).i(a)},
a:function a(){},
fU:function fU(){},
dv:function dv(){},
dw:function dw(){},
hC:function hC(){},
bJ:function bJ(){},
bF:function bF(){},
aW:function aW(a){this.$ti=a},
k7:function k7(a){this.$ti=a},
ak:function ak(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bY:function bY(){},
du:function du(){},
dt:function dt(){},
bE:function bE(){}},P={
mE:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.nh()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.ce(new P.iW(s),1)).observe(u,{childList:true})
return new P.iV(s,u,t)}else if(self.setImmediate!=null)return P.ni()
return P.nj()},
mF:function(a){self.scheduleImmediate(H.ce(new P.iX(H.l(a,{func:1,ret:-1})),0))},
mG:function(a){self.setImmediate(H.ce(new P.iY(H.l(a,{func:1,ret:-1})),0))},
mH:function(a){P.kd(C.j,H.l(a,{func:1,ret:-1}))},
kd:function(a,b){var u
H.l(b,{func:1,ret:-1})
u=C.e.a3(a.a,1000)
return P.mN(u<0?0:u,b)},
la:function(a,b){var u
H.l(b,{func:1,ret:-1,args:[P.b6]})
u=C.e.a3(a.a,1000)
return P.mO(u<0?0:u,b)},
mN:function(a,b){var u=new P.eR()
u.en(a,b)
return u},
mO:function(a,b){var u=new P.eR()
u.eo(a,b)
return u},
mI:function(a,b){var u,t,s
b.a=1
try{a.dT(new P.j6(b),new P.j7(b),null)}catch(s){u=H.ay(s)
t=H.ch(s)
P.nI(new P.j8(b,u,t))}},
lg:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iaH")
if(u>=4){t=b.bT()
b.a=a.a
b.c=a.c
P.cY(b,t)}else{t=H.k(b.c,"$iba")
b.a=2
b.c=a
a.d1(t)}},
cY:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iaf")
g=g.b
r=s.a
q=s.b
g.toString
P.jF(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cY(h.a,b)}g=h.a
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
if(m){H.k(o,"$iaf")
g=g.b
r=o.a
q=o.b
g.toString
P.jF(i,i,g,r,q)
return}l=$.Z
if(l!=n)$.Z=n
else l=i
g=b.c
if(g===8)new P.jc(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jb(u,b,o).$0()}else if((g&2)!==0)new P.ja(h,u,b).$0()
if(l!=null)$.Z=l
g=u.b
if(!!J.V(g).$icx){if(g.a>=4){k=H.k(q.c,"$iba")
q.c=null
b=q.be(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.lg(g,q)
return}}j=b.b
k=H.k(j.c,"$iba")
j.c=null
b=j.be(k)
g=u.a
r=u.b
if(!g){H.H(r,H.y(j,0))
j.a=4
j.c=r}else{H.k(r,"$iaf")
j.a=8
j.c=r}h.a=j
g=j}},
nc:function(a,b){if(H.f7(a,{func:1,args:[P.P,P.ao]}))return H.l(a,{func:1,ret:null,args:[P.P,P.ao]})
if(H.f7(a,{func:1,args:[P.P]}))return H.l(a,{func:1,ret:null,args:[P.P]})
throw H.i(P.jY(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
nb:function(){var u,t
for(;u=$.cc,u!=null;){$.d9=null
t=u.b
$.cc=t
if(t==null)$.d8=null
u.a.$0()}},
nf:function(){$.kk=!0
try{P.nb()}finally{$.d9=null
$.kk=!1
if($.cc!=null)$.kC().$1(P.lt())}},
lo:function(a){var u=new P.ec(H.l(a,{func:1,ret:-1}))
if($.cc==null){$.cc=$.d8=u
if(!$.kk)$.kC().$1(P.lt())}else $.d8=$.d8.b=u},
ne:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
u=$.cc
if(u==null){P.lo(a)
$.d9=$.d8
return}t=new P.ec(a)
s=$.d9
if(s==null){t.b=u
$.cc=$.d9=t}else{t.b=s.b
$.d9=s.b=t
if(t.b==null)$.d8=t}},
nI:function(a){var u,t=null,s={func:1,ret:-1}
H.l(a,s)
u=$.Z
if(C.f===u){P.jH(t,t,C.f,a)
return}u.toString
P.jH(t,t,u,H.l(u.bX(a),s))},
l9:function(a,b){var u,t={func:1,ret:-1}
H.l(b,t)
u=$.Z
if(u===C.f){u.toString
return P.kd(a,b)}return P.kd(a,H.l(u.bX(b),t))},
mB:function(a,b){var u,t,s={func:1,ret:-1,args:[P.b6]}
H.l(b,s)
u=$.Z
if(u===C.f){u.toString
return P.la(a,b)}t=u.de(b,P.b6)
$.Z.toString
return P.la(a,H.l(t,s))},
jF:function(a,b,c,d,e){var u={}
u.a=d
P.ne(new P.jG(u,e))},
lm:function(a,b,c,d,e){var u,t
H.l(d,{func:1,ret:e})
t=$.Z
if(t===c)return d.$0()
$.Z=c
u=t
try{t=d.$0()
return t}finally{$.Z=u}},
ln:function(a,b,c,d,e,f,g){var u,t
H.l(d,{func:1,ret:f,args:[g]})
H.H(e,g)
t=$.Z
if(t===c)return d.$1(e)
$.Z=c
u=t
try{t=d.$1(e)
return t}finally{$.Z=u}},
nd:function(a,b,c,d,e,f,g,h,i){var u,t
H.l(d,{func:1,ret:g,args:[h,i]})
H.H(e,h)
H.H(f,i)
t=$.Z
if(t===c)return d.$2(e,f)
$.Z=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Z=u}},
jH:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bX(d):c.hC(d,-1)
P.lo(d)},
iW:function iW(a){this.a=a},
iV:function iV(a,b,c){this.a=a
this.b=b
this.c=c},
iX:function iX(a){this.a=a},
iY:function iY(a){this.a=a},
eR:function eR(){this.c=0},
jx:function jx(a,b){this.a=a
this.b=b},
jw:function jw(a,b,c,d){var _=this
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
aH:function aH(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
j5:function j5(a,b){this.a=a
this.b=b},
j9:function j9(a,b){this.a=a
this.b=b},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
j8:function j8(a,b,c){this.a=a
this.b=b
this.c=c},
jc:function jc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jd:function jd(a){this.a=a},
jb:function jb(a,b,c){this.a=a
this.b=b
this.c=c},
ja:function ja(a,b,c){this.a=a
this.b=b
this.c=c},
ec:function ec(a){this.a=a
this.b=null},
i4:function i4(){},
i6:function i6(a,b){this.a=a
this.b=b},
i7:function i7(a,b){this.a=a
this.b=b},
cN:function cN(){},
i5:function i5(){},
b6:function b6(){},
af:function af(a,b){this.a=a
this.b=b},
jA:function jA(){},
jG:function jG(a,b){this.a=a
this.b=b},
jj:function jj(){},
jl:function jl(a,b,c){this.a=a
this.b=b
this.c=c},
jk:function jk(a,b){this.a=a
this.b=b},
jm:function jm(a,b,c){this.a=a
this.b=b
this.c=c},
kO:function(a,b){return new H.a0([a,b])},
mg:function(a){return H.nr(a,new H.a0([null,null]))},
dA:function(a){return new P.jh([a])},
ki:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mM:function(a,b,c){var u=new P.es(a,b,[c])
u.c=a.e
return u},
mb:function(a,b,c){var u,t
if(P.kl(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.h])
C.a.h($.ar,a)
try{P.mR(a,u)}finally{if(0>=$.ar.length)return H.d($.ar,-1)
$.ar.pop()}t=P.l7(b,H.nC(u,"$ie"),", ")+c
return t.charCodeAt(0)==0?t:t},
k4:function(a,b,c){var u,t
if(P.kl(a))return b+"..."+c
u=new P.bj(b)
C.a.h($.ar,a)
try{t=u
t.a=P.l7(t.a,a,", ")}finally{if(0>=$.ar.length)return H.d($.ar,-1)
$.ar.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kl:function(a){var u,t
for(u=$.ar.length,t=0;t<u;++t)if(a===$.ar[t])return!0
return!1},
mR:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.m(b,"$ib",[P.h],"$ab")
u=a.gO(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.u())return
r=H.j(u.gE(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.u()){if(s<=5)return
if(0>=b.length)return H.d(b,-1)
q=b.pop()
if(0>=b.length)return H.d(b,-1)
p=b.pop()}else{o=u.gE(u);++s
if(!u.u()){if(s<=4){C.a.h(b,H.j(o))
return}q=H.j(o)
if(0>=b.length)return H.d(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gE(u);++s
for(;u.u();o=n,n=m){m=u.gE(u);++s
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
kP:function(a,b){var u,t,s=P.dA(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.t)(a),++t)s.h(0,H.H(a[t],b))
return s},
kR:function(a){var u,t={}
if(P.kl(a))return"{...}"
u=new P.bj("")
try{C.a.h($.ar,a)
u.a+="{"
t.a=!0
J.lX(a,new P.h3(t,u))
u.a+="}"}finally{if(0>=$.ar.length)return H.d($.ar,-1)
$.ar.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jh:function jh(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cb:function cb(a){this.a=a
this.c=this.b=null},
es:function es(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
h0:function h0(){},
w:function w(){},
h2:function h2(){},
h3:function h3(a,b){this.a=a
this.b=b},
aa:function aa(){},
jo:function jo(){},
et:function et(){},
cr:function cr(){},
cs:function cs(){},
fB:function fB(){},
fR:function fR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fQ:function fQ(a){this.a=a},
iE:function iE(){},
iF:function iF(){},
jy:function jy(a){this.b=0
this.c=a},
ma:function(a){if(a instanceof H.cq)return a.i(0)
return"Instance of '"+H.c2(a)+"'"},
mh:function(a,b,c){var u,t
H.H(b,c)
u=J.md(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.m(u,"$ib",[c],"$ab")},
kQ:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bQ(a);u.u();)C.a.h(s,H.H(u.gE(u),c))
if(b)return s
return H.m(J.k6(s),"$ib",t,"$ab")},
kc:function(a){var u,t,s=P.p
H.m(a,"$ie",[s],"$ae")
if(a.constructor===Array){H.m(a,"$iaW",[s],"$aaW")
u=a.length
t=P.l2(0,null,u)
return H.l0(t<u?C.a.e4(a,0,t):a)}return P.mz(a,0,null)},
mz:function(a,b,c){var u,t,s
H.m(a,"$ie",[P.p],"$ae")
u=J.bQ(a)
for(t=0;t<b;++t)if(!u.u())throw H.i(P.b1(b,0,t,null,null))
s=[]
for(;u.u();)s.push(u.gE(u))
return H.l0(s)},
mt:function(a){return new H.fV(a,H.me(a,!1,!0,!1))},
l7:function(a,b,c){var u=J.bQ(b)
if(!u.u())return a
if(c.length===0){do a+=H.j(u.gE(u))
while(u.u())}else{a+=H.j(u.gE(u))
for(;u.u();)a=a+c+H.j(u.gE(u))}return a},
lk:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.m(a,"$ib",[P.p],"$ab")
if(c===C.i){u=$.lV().b
u=u.test(b)}else u=!1
if(u)return b
t=C.E.hF(H.H(b,H.aj(c,"cr",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.ka(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
m6:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
m7:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dm:function(a){if(a>=10)return""+a
return"0"+a},
kJ:function(a,b){return new P.bx(1e6*b+1000*a)},
dr:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.as(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ma(a)},
m0:function(a){return new P.aJ(!1,null,null,a)},
jY:function(a,b,c){return new P.aJ(!0,a,b,c)},
hH:function(a,b){return new P.c3(null,null,!0,a,b,"Value not in range")},
b1:function(a,b,c,d,e){return new P.c3(b,c,!0,a,d,"Invalid value")},
l2:function(a,b,c){if(0>a||a>c)throw H.i(P.b1(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.i(P.b1(b,a,c,"end",null))
return b}return c},
l1:function(a,b){if(typeof a!=="number")return a.aa()
if(a<0)throw H.i(P.b1(a,0,null,b,null))},
X:function(a,b,c,d,e){var u=H.a1(e==null?J.bR(b):e)
return new P.fT(u,!0,a,c,"Index out of range")},
aq:function(a){return new P.iC(a)},
lc:function(a){return new P.iA(a)},
l6:function(a){return new P.cM(a)},
bv:function(a){return new P.fm(a)},
z:function(a){return new P.ek(a)},
kz:function(a){H.nG(a)},
O:function O(){},
aA:function aA(a,b){this.a=a
this.b=b},
C:function C(){},
bx:function bx(a){this.a=a},
fx:function fx(){},
fy:function fy(){},
by:function by(){},
fb:function fb(){},
dL:function dL(){},
aJ:function aJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c3:function c3(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fT:function fT(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iC:function iC(a){this.a=a},
iA:function iA(a){this.a=a},
cM:function cM(a){this.a=a},
fm:function fm(a){this.a=a},
hB:function hB(){},
dW:function dW(){},
fr:function fr(a){this.a=a},
ek:function ek(a){this.a=a},
fL:function fL(a,b){this.a=a
this.b=b},
bz:function bz(){},
p:function p(){},
e:function e(){},
aV:function aV(){},
b:function b(){},
G:function G(){},
N:function N(){},
a8:function a8(){},
P:function P(){},
ao:function ao(){},
h:function h(){},
bj:function bj(a){this.a=a},
nn:function(a){var u,t=J.V(a)
if(!!t.$ibA){u=t.gdl(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eW(a.data,a.height,a.width)},
nm:function(a){if(a instanceof P.eW)return{data:a.a,height:a.b,width:a.c}
return a},
bn:function(a){var u,t,s,r,q
if(a==null)return
u=P.kO(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.t)(t),++r){q=H.I(t[r])
u.n(0,q,a[q])}return u},
nl:function(a){var u={}
a.J(0,new P.jI(u))
return u},
eW:function eW(a,b,c){this.a=a
this.b=b
this.c=c},
jI:function jI(a){this.a=a},
fH:function fH(a,b){this.a=a
this.b=b},
fI:function fI(){},
fJ:function fJ(){},
jg:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mL:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ji:function ji(){},
an:function an(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bd:function bd(){},
fY:function fY(){},
bg:function bg(){},
hz:function hz(){},
hG:function hG(){},
cJ:function cJ(){},
i8:function i8(){},
o:function o(){},
bk:function bk(){},
ip:function ip(){},
eq:function eq(){},
er:function er(){},
eB:function eB(){},
eC:function eC(){},
eN:function eN(){},
eO:function eO(){},
eU:function eU(){},
eV:function eV(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(a){this.a=a},
fg:function fg(){},
bS:function bS(){},
hA:function hA(){},
ed:function ed(){},
dg:function dg(){},
dO:function dO(){},
c4:function c4(){},
dQ:function dQ(){},
dY:function dY(){},
e2:function e2(){},
i0:function i0(){},
eJ:function eJ(){},
eK:function eK(){}},W={
kE:function(){var u=document.createElement("a")
return u},
k_:function(){var u=document.createElement("canvas")
return u},
m8:function(a,b,c){var u=document.body,t=(u&&C.o).ae(u,a,b,c)
t.toString
u=W.E
u=new H.cV(new W.ai(t),H.l(new W.fA(),{func:1,ret:P.O,args:[u]}),[u])
return H.k(u.gaF(u),"$iR")},
m9:function(a){H.k(a,"$if")
return"wheel"},
cv:function(a){var u,t,s,r="element tag unavailable"
try{u=J.ku(a)
t=u.gdS(a)
if(typeof t==="string")r=u.gdS(a)}catch(s){H.ay(s)}return r},
jf:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
li:function(a,b,c,d){var u=W.jf(W.jf(W.jf(W.jf(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a7:function(a,b,c,d,e){var u=W.lq(new W.j4(c),W.n)
if(u!=null&&!0)J.lW(a,b,u,!1)
return new W.j3(a,b,u,!1,[e])},
lh:function(a){var u=W.kE(),t=window.location
u=new W.bK(new W.jn(u,t))
u.eg(a)
return u},
mJ:function(a,b,c,d){H.k(a,"$iR")
H.I(b)
H.I(c)
H.k(d,"$ibK")
return!0},
mK:function(a,b,c,d){var u,t,s
H.k(a,"$iR")
H.I(b)
H.I(c)
u=H.k(d,"$ibK").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
lj:function(){var u=P.h,t=P.kP(C.l,u),s=H.y(C.l,0),r=H.l(new W.jv(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.ju(t,P.dA(u),P.dA(u),P.dA(u),null)
t.em(null,new H.h6(C.l,r,[s,u]),q,null)
return t},
lq:function(a,b){var u
H.l(a,{func:1,ret:-1,args:[b]})
u=$.Z
if(u===C.f)return a
return u.de(a,b)},
u:function u(){},
f9:function f9(){},
dd:function dd(){},
fa:function fa(){},
cl:function cl(){},
df:function df(){},
bs:function bs(){},
bU:function bU(){},
cp:function cp(){},
bt:function bt(){},
ct:function ct(){},
fn:function fn(){},
S:function S(){},
cu:function cu(){},
fo:function fo(){},
aR:function aR(){},
aS:function aS(){},
fp:function fp(){},
fq:function fq(){},
ft:function ft(){},
aC:function aC(){},
fu:function fu(){},
dn:function dn(){},
dp:function dp(){},
fv:function fv(){},
fw:function fw(){},
j_:function j_(a,b){this.a=a
this.b=b},
R:function R(){},
fA:function fA(){},
n:function n(){},
f:function f(){},
aT:function aT(){},
fF:function fF(){},
fG:function fG(){},
fK:function fK(){},
aU:function aU(){},
fP:function fP(){},
bX:function bX(){},
bA:function bA(){},
cz:function cz(){},
aX:function aX(){},
dB:function dB(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(a){this.a=a},
hm:function hm(){},
hn:function hn(a){this.a=a},
b_:function b_(){},
ho:function ho(){},
ab:function ab(){},
ai:function ai(a){this.a=a},
E:function E(){},
cG:function cG(){},
b0:function b0(){},
hE:function hE(){},
hN:function hN(){},
hO:function hO(a){this.a=a},
hQ:function hQ(){},
b2:function b2(){},
hZ:function hZ(){},
b3:function b3(){},
i_:function i_(){},
b4:function b4(){},
i2:function i2(){},
i3:function i3(a){this.a=a},
aK:function aK(){},
c5:function c5(){},
dX:function dX(){},
i9:function i9(){},
ia:function ia(){},
cP:function cP(){},
b5:function b5(){},
aL:function aL(){},
ic:function ic(){},
id:function id(){},
ii:function ii(){},
b7:function b7(){},
aM:function aM(){},
im:function im(){},
io:function io(){},
bI:function bI(){},
iD:function iD(){},
iS:function iS(){},
b9:function b9(){},
cW:function cW(){},
cX:function cX(){},
j0:function j0(){},
ef:function ef(){},
je:function je(){},
ey:function ey(){},
jr:function jr(){},
js:function js(){},
iZ:function iZ(){},
j1:function j1(a){this.a=a},
j2:function j2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kh:function kh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j3:function j3(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
j4:function j4(a){this.a=a},
bK:function bK(a){this.a=a},
D:function D(){},
dK:function dK(a){this.a=a},
hx:function hx(a){this.a=a},
hw:function hw(a,b,c){this.a=a
this.b=b
this.c=c},
eG:function eG(){},
jp:function jp(){},
jq:function jq(){},
ju:function ju(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jv:function jv(){},
jt:function jt(){},
ds:function ds(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
av:function av(){},
jn:function jn(a,b){this.a=a
this.b=b},
eX:function eX(a){this.a=a},
jz:function jz(a){this.a=a},
ee:function ee(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
el:function el(){},
em:function em(){},
eo:function eo(){},
ep:function ep(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ez:function ez(){},
eA:function eA(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
d2:function d2(){},
d3:function d3(){},
eH:function eH(){},
eI:function eI(){},
eM:function eM(){},
eP:function eP(){},
eQ:function eQ(){},
d4:function d4(){},
d5:function d5(){},
eS:function eS(){},
eT:function eT(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){}},O={
k0:function(a){var u=new O.a_([a])
u.bc(a)
return u},
a_:function a_(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cC:function cC(){this.b=this.a=null},
dE:function dE(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hd:function hd(a,b){this.a=a
this.b=b},
he:function he(){},
hf:function hf(a,b){this.a=a
this.b=b},
hg:function hg(){},
hh:function hh(a,b){this.a=a
this.b=b},
hi:function hi(){},
h7:function h7(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cB:function cB(){},
h8:function h8(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aY:function aY(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ha:function ha(){var _=this
_.e=_.d=_.c=_.b=null},
hb:function hb(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hc:function hc(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dS:function dS(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bH:function bH(){}},E={
kM:function(){var u=new E.ag()
u.a=""
u.b=!0
u.sef(0,O.k0(E.ag))
u.y.aT(u.gi2(),u.gi5())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sbu(0,null)
return u},
mu:function(a,b){var u=new E.hJ(a)
u.ec(a,b)
return u},
mA:function(a,b,c,d,e){var u,t,s=J.V(a)
if(!!s.$ibU)return E.l8(a,!0,!0,!0,!1)
u=W.k_()
t=u.style
t.width="100%"
t.height="100%"
s.gdh(a).h(0,u)
return E.l8(u,!0,!0,!0,!1)},
l8:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dZ(),j=H.k(C.h.cr(a,"webgl2",P.mg(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic4")
if(j==null)H.A(P.z("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.mu(j,a)
u=new T.ie(j)
H.a1(j.getParameter(3379))
u.c=H.a1(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.e5(a)
t=new X.fX()
t.c=new X.au(!1,!1,!1)
t.sfY(P.dA(P.p))
u.b=t
t=new X.hp(u)
t.f=0
t.r=V.bh()
t.x=V.bh()
t.ch=t.Q=1
u.c=t
t=new X.h1(u)
t.r=0
t.x=V.bh()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.il(u)
t.f=V.bh()
t.r=V.bh()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seJ(H.c([],[[P.cN,P.P]]))
t=u.z
s=document
r=W.ab
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a7(s,"contextmenu",H.l(u.gfe(),q),!1,r))
t=u.z
p=W.n
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a7(a,"focus",H.l(u.gfk(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a7(a,"blur",H.l(u.gf8(),o),!1,p))
t=u.z
n=W.aX
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a7(s,"keyup",H.l(u.gfo(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a7(s,"keydown",H.l(u.gfm(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a7(a,"mousedown",H.l(u.gft(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a7(a,"mouseup",H.l(u.gfz(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a7(a,l,H.l(u.gfv(),q),!1,r))
n=u.z
m=W.b9;(n&&C.a).h(n,W.a7(a,H.I(W.m9(a)),H.l(u.gfB(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a7(s,l,H.l(u.gfg(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a7(s,"mouseup",H.l(u.gfi(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a7(s,"pointerlockchange",H.l(u.gfD(),o),!1,p))
p=u.z
o=W.aM
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a7(a,"touchstart",H.l(u.gfT(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a7(a,"touchend",H.l(u.gfP(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a7(a,"touchmove",H.l(u.gfR(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aA(Date.now(),!1)
k.cy=0
k.d3()
return k},
fh:function fh(){},
ag:function ag(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hJ:function hJ(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hK:function hK(a){this.a=a},
hL:function hL(a){this.a=a},
hM:function hM(a){this.a=a},
dZ:function dZ(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ih:function ih(a){this.a=a}},Z={
kg:function(a,b,c){var u
H.m(c,"$ib",[P.p],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.d7(c)),35044)
a.bindBuffer(b,null)
return new Z.ea(b,u)},
aG:function(a){return new Z.bl(a)},
ea:function ea(a,b){this.a=a
this.b=b},
dh:function dh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
eb:function eb(a){this.a=a},
co:function co(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bB:function bB(a,b,c){this.a=a
this.b=b
this.c=c},
bl:function bl(a){this.a=a}},D={
L:function(){var u=new D.bV()
u.sac(null)
u.saM(null)
u.c=null
u.d=0
return u},
fk:function fk(){},
bV:function bV(){var _=this
_.d=_.c=_.b=_.a=null},
fD:function fD(a){this.a=a},
fE:function fE(a){this.a=a},
x:function x(){this.b=null},
bC:function bC(a){this.b=null
this.$ti=a},
bD:function bD(a){this.b=null
this.$ti=a},
K:function K(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bw:function bw(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a9:function a9(){},
dy:function dy(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dN:function dN(){},
dV:function dV(){}},X={di:function di(a,b){this.a=a
this.b=b},dx:function dx(a,b){this.a=a
this.b=b},fX:function fX(){var _=this
_.d=_.c=_.b=_.a=null},dC:function dC(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h1:function h1(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},au:function au(a,b,c){this.a=a
this.b=b
this.c=c},bf:function bf(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hp:function hp(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cD:function cD(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hF:function hF(){},e0:function e0(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},il:function il(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},e5:function e5(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
k3:function(a){var u=new X.fM(),t=new V.az(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.l4
if(t==null){t=V.l3(0,0,1,1)
$.l4=t}u.r=t
return u},
kW:function(a){var u,t,s=new X.dM()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gp().h(0,s.gep())
t=new D.K("mover",u,s.b,[U.ac])
t.b=!0
s.al(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.Q().a)){s.c=1.0471975511965976
t=new D.K("fov",t,1.0471975511965976,[P.C])
t.b=!0
s.al(t)}t=s.d
if(!(Math.abs(t-0.1)<$.Q().a)){s.d=0.1
t=new D.K("near",t,0.1,[P.C])
t.b=!0
s.al(t)}t=s.e
if(!(Math.abs(t-2000)<$.Q().a)){s.e=2000
t=new D.K("far",t,2000,[P.C])
t.b=!0
s.al(t)}return s},
bT:function bT(){},
fM:function fM(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fS:function fS(){this.b=this.a=null},
dM:function dM(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cO:function cO(){},
ly:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="testCanvas",a5=null,a6="modifiers",a7=V.mw("Test 016"),a8=W.k_()
a8.className="pageLargeCanvas"
a8.id=a4
a7.a.appendChild(a8)
u=[P.h]
a7.da(H.c(["A test of the Material Lighting shader with cube texturing, ","bump mapping, and a color directional light."],u))
a7.da(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a4)
if(t==null)H.A(P.z("Failed to find an element with the identifier, testCanvas."))
s=E.mA(t,!0,!0,!0,!1)
r=X.k3(a5)
r.sdi(0,!1)
q=E.kM()
p=F.kb()
F.d6(p,a5,a5,1,1,1,0,0,1)
F.d6(p,a5,a5,1,1,0,1,0,3)
F.d6(p,a5,a5,1,1,0,0,1,2)
F.d6(p,a5,a5,1,1,-1,0,0,0)
F.d6(p,a5,a5,1,1,0,-1,0,0)
F.d6(p,a5,a5,1,1,0,0,-1,3)
p.au()
q.sbu(0,p)
o=s.f.dI("../resources/maskonaive",".jpg")
n=s.f.ce("../resources/diceColor")
m=new O.dE()
m.sex(O.k0(V.al))
m.e.aT(m.gf4(),m.gf6())
u=new O.aY(m,"emission")
u.c=new A.ae(!1,!1,!1)
u.f=new V.a2(0,0,0)
m.f=u
u=new O.aY(m,"ambient")
u.c=new A.ae(!1,!1,!1)
u.f=new V.a2(0,0,0)
m.r=u
u=new O.aY(m,"diffuse")
u.c=new A.ae(!1,!1,!1)
u.f=new V.a2(0,0,0)
m.x=u
u=new O.aY(m,"invDiffuse")
u.c=new A.ae(!1,!1,!1)
u.f=new V.a2(0,0,0)
m.y=u
u=new O.hc(m,"specular")
u.c=new A.ae(!1,!1,!1)
u.f=new V.a2(0,0,0)
u.ch=100
m.z=u
u=new O.h8(m,"bump")
u.c=new A.ae(!1,!1,!1)
m.Q=u
m.ch=null
u=new O.aY(m,"reflect")
u.c=new A.ae(!1,!1,!1)
u.f=new V.a2(0,0,0)
m.cx=u
u=new O.hb(m,"refract")
u.c=new A.ae(!1,!1,!1)
u.f=new V.a2(0,0,0)
u.ch=1
m.cy=u
u=new O.h7(m,"alpha")
u.c=new A.ae(!1,!1,!1)
u.f=1
m.db=u
u=new D.dy()
u.bc(D.a9)
u.seH(H.c([],[D.bw]))
u.sfV(H.c([],[D.dN]))
u.she(H.c([],[D.dV]))
u.y=u.x=null
u.ct(u.gf2(),u.gfF(),u.gfJ())
m.dx=u
l=new O.ha()
l.b=new V.az(0,0,0,0)
l.c=1
l.d=10
l.e=!1
m.dy=l
l=u.x
u=l==null?u.x=D.L():l
u.h(0,m.gh2())
u=m.dx
l=u.y
u=l==null?u.y=D.L():l
l=m.gaL()
u.h(0,l)
m.fr=null
u=m.dx
k=V.kf()
j=U.kI(V.kS(V.kZ(),k,new V.M(1,-1,-3)))
i=new V.a2(1,1,1)
h=new D.bw()
h.c=new V.a2(1,1,1)
h.a=V.mD()
h.d=V.kf()
h.e=V.mC()
g=h.b
h.b=j
j.gp().h(0,h.gei())
j=new D.K("mover",g,h.b,[U.ac])
j.b=!0
h.aq(j)
if(!h.c.q(0,i)){g=h.c
h.c=i
j=new D.K("color",g,i,[V.a2])
j.b=!0
h.aq(j)}u.h(0,h)
u=m.r
u.saQ(0,new V.a2(0.2,0.2,0.2))
u=m.x
u.saQ(0,new V.a2(0.7,0.7,0.7))
u=m.z
u.saQ(0,new V.a2(0.7,0.7,0.7))
m.r.saR(n)
m.x.saR(n)
m.z.saR(s.f.ce("../resources/diceSpecular"))
u=m.z
u.bU(new A.ae(!0,!1,u.c.c))
u.d5(10)
m.Q.saR(s.f.ce("../resources/diceBumpMap"))
u=m.ch
if(u!==o){if(u!=null)u.gp().R(0,l)
g=m.ch
m.ch=o
o.gp().h(0,l)
u=new D.K("environment",g,m.ch,[T.c6])
u.b=!0
m.T(u)}u=m.cx
u.saQ(0,new V.a2(0.3,0.3,0.3))
f=new U.cy()
f.bc(U.ac)
f.aT(f.gf0(),f.gfH())
f.e=null
f.f=V.c_()
f.r=0
u=s.r
l=new U.e7()
j=U.k1()
j.scq(0,!0)
j.scf(6.283185307179586)
j.sci(0)
j.sa6(0,0)
j.scg(100)
j.sS(0)
j.sc2(0.5)
l.b=j
h=l.gaH()
j.gp().h(0,h)
j=U.k1()
j.scq(0,!0)
j.scf(6.283185307179586)
j.sci(0)
j.sa6(0,0)
j.scg(100)
j.sS(0)
j.sc2(0.5)
l.c=j
j.gp().h(0,h)
l.d=null
l.r=l.f=l.e=!1
l.y=l.x=2.5
l.Q=4
l.ch=l.cx=!1
l.db=l.cy=0
l.dx=null
l.dy=0
l.fx=l.fr=null
e=new X.au(!1,!1,!1)
g=l.d
l.d=e
j=[X.au]
h=new D.K(a6,g,e,j)
h.b=!0
l.M(h)
h=l.f
if(h!==!1){l.f=!1
h=new D.K("invertX",h,!1,[P.O])
h.b=!0
l.M(h)}h=l.r
if(h!==!1){l.r=!1
h=new D.K("invertY",h,!1,[P.O])
h.b=!0
l.M(h)}l.b0(u)
f.h(0,l)
u=s.r
l=new U.e6()
h=U.k1()
h.scq(0,!0)
h.scf(6.283185307179586)
h.sci(0)
h.sa6(0,0)
h.scg(100)
h.sS(0)
h.sc2(0.2)
l.b=h
h.gp().h(0,l.gaH())
l.c=null
l.d=!1
l.e=2.5
l.r=4
l.x=l.y=!1
l.z=0
l.Q=null
l.ch=0
l.cy=l.cx=null
e=new X.au(!0,!1,!1)
g=l.c
l.c=e
h=new D.K(a6,g,e,j)
h.b=!0
l.M(h)
l.b0(u)
f.h(0,l)
u=s.r
l=new U.e8()
l.c=0.01
l.e=l.d=0
e=new X.au(!1,!1,!1)
l.b=e
j=new D.K(a6,a5,e,j)
j.b=!0
l.M(j)
l.b0(u)
f.h(0,l)
f.h(0,U.kI(V.aZ(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
d=X.kW(f)
c=new M.dl()
c.a=!0
u=E.kM()
p=F.kb()
l=p.a
j=new V.M(-1,-1,1)
j=j.t(0,Math.sqrt(j.B(j)))
b=l.bh(new V.bi(1,2,4,6),new V.az(1,0,0,1),new V.ah(-1,-1,0),new V.a5(0,1),j,a5)
l=p.a
j=new V.M(1,-1,1)
j=j.t(0,Math.sqrt(j.B(j)))
a=l.bh(new V.bi(0,3,4,6),new V.az(0,0,1,1),new V.ah(1,-1,0),new V.a5(1,1),j,a5)
l=p.a
j=new V.M(1,1,1)
j=j.t(0,Math.sqrt(j.B(j)))
a0=l.bh(new V.bi(0,2,5,6),new V.az(0,1,0,1),new V.ah(1,1,0),new V.a5(1,0),j,a5)
l=p.a
j=V.bh()
h=new V.M(-1,1,1)
h=h.t(0,Math.sqrt(h.B(h)))
a1=l.bh(new V.bi(0,2,4,7),new V.az(1,1,0,1),new V.ah(-1,1,0),j,h,a5)
p.d.ht(H.c([b,a,a0,a1],[F.ax]))
p.au()
u.sbu(0,p)
c.e=u
c.sb1(a5)
c.sb8(0,a5)
c.sb9(a5)
u=new O.dS()
u.b=1.0471975511965976
u.d=new V.a2(1,1,1)
g=u.c
u.c=o
o.gp().h(0,u.gaL())
l=new D.K("boxTexture",g,u.c,[T.c6])
l.b=!0
u.T(l)
c.sb9(u)
c.sb8(0,r)
c.sb1(d)
a2=new M.dq()
a2.a=!0
a2.seA(0,O.k0(E.ag))
a2.e.aT(a2.gfa(),a2.gfc())
a2.y=a2.x=a2.r=a2.f=null
a3=X.k3(a5)
a2.sb1(a5)
a2.sb8(0,a3)
a2.sb9(a5)
a2.sb1(d)
a2.sb9(m)
a2.sb8(0,r)
a2.e.h(0,q)
a2.c.sdi(0,!1)
u=M.aw
l=H.c([c,a2],[u])
j=new M.dj()
j.bc(u)
j.e=!0
j.f=!1
j.r=null
j.aT(j.gfL(),j.gfN())
j.a4(0,l)
u=s.d
if(u!==j){if(u!=null)u.gp().R(0,s.gcD())
s.d=j
j.gp().h(0,s.gcD())
s.cE()}u=s.z
if(u==null)u=s.z=D.L()
l={func:1,ret:-1,args:[D.x]}
j=H.l(new X.jQ(a7,m),l)
if(u.b==null)u.saM(H.c([],[l]))
u=u.b;(u&&C.a).h(u,j)
V.nJ(s)},
jQ:function jQ(a,b){this.a=a
this.b=b}},V={
nO:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.e0(a-b,u)
return(a<0?a+u:a)+b},
U:function(a,b,c){if(a==null)return C.c.ag("null",c)
return C.c.ag(C.d.dU(Math.abs(a-0)<$.Q().a?0:a,b),c+b+1)},
cg:function(a,b,c){var u,t,s,r,q,p
H.m(a,"$ib",[P.C],"$ab")
u=H.c([],[P.h])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.t)(a),++r){q=V.U(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.d(u,p)
C.a.n(u,p,C.c.ag(u[p],s))}return u},
ky:function(a){return C.d.is(Math.pow(2,C.J.c9(Math.log(H.nk(a))/Math.log(2))))},
c_:function(){var u=$.kT
return u==null?$.kT=V.aZ(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aZ:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kS:function(a,b,c){var u=c.t(0,Math.sqrt(c.B(c))),t=b.b3(u),s=t.t(0,Math.sqrt(t.B(t))),r=u.b3(s),q=new V.M(a.a,a.b,a.c),p=s.N(0).B(q),o=r.N(0).B(q),n=u.N(0).B(q)
return V.aZ(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bh:function(){var u=$.kY
return u==null?$.kY=new V.a5(0,0):u},
kZ:function(){var u=$.cH
return u==null?$.cH=new V.ah(0,0,0):u},
l3:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dP(a,b,c,d)},
e9:function(){var u=$.lf
return u==null?$.lf=new V.M(0,0,0):u},
mC:function(){var u=$.iG
return u==null?$.iG=new V.M(-1,0,0):u},
kf:function(){var u=$.iH
return u==null?$.iH=new V.M(0,1,0):u},
mD:function(){var u=$.iI
return u==null?$.iI=new V.M(0,0,1):u},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
az:function az(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fC:function fC(a){this.a=a},
dG:function dG(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
al:function al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a5:function a5(a,b){this.a=a
this.b=b},
ah:function ah(a,b,c){this.a=a
this.b=b
this.c=c},
bi:function bi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dP:function dP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
T:function T(a,b){this.a=a
this.b=b},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
Y:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.i(P.z("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.aI(a,0)
t=C.c.aI(b,0)
s=new V.hI()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
v:function(a){var u=new V.hR()
u.ed(a)
return u},
ik:function(){var u=new V.ij(),t=P.h
u.shf(new H.a0([t,V.cL]))
u.shi(new H.a0([t,V.cR]))
u.c=null
return u},
bb:function bb(){},
at:function at(){},
dD:function dD(){},
am:function am(){this.a=null},
hI:function hI(){this.b=this.a=null},
hR:function hR(){this.a=null},
cL:function cL(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e_:function e_(a,b,c){this.a=a
this.b=b
this.c=c},
cR:function cR(a){this.b=a
this.c=null},
ij:function ij(){this.c=this.b=this.a=null},
cS:function cS(a){this.b=a
this.a=this.c=null},
nJ:function(a){P.mB(C.G,new V.jT(a))},
mw:function(a){var u=new V.hV()
u.ee(a,!0)
return u},
bu:function bu(){},
jT:function jT(a){this.a=a},
fs:function fs(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fN:function fN(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fO:function fO(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hD:function hD(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hV:function hV(){this.b=this.a=null},
hX:function hX(a){this.a=a},
hW:function hW(a){this.a=a},
hY:function hY(a){this.a=a}},U={
k1:function(){var u=new U.fl()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
kI:function(a){var u=new U.dk()
u.a=a
return u},
fl:function fl(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dk:function dk(){this.b=this.a=null},
cy:function cy(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ac:function ac(){},
e6:function e6(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
e7:function e7(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e8:function e8(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dj:function dj(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},dl:function dl(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},dq:function dq(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aw:function aw(){}},A={
mi:function(a,b){var u=a.b4,t=new A.dF(b,u)
t.cB(b,u)
t.eb(a,b)
return t},
mj:function(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
H.m(b0,"$ib",[A.aB],"$ab")
H.m(b1,"$ib",[A.aD],"$ab")
H.m(b2,"$ib",[A.aE],"$ab")
u="MaterialLight_"+a1.gak(a1)+a2.gak(a2)+a3.gak(a3)+a4.gak(a4)+a5.gak(a5)+a6.gak(a6)+a7.gak(a7)+a8.gak(a8)+a9.gak(a9)+"_"
u+=a?"1":"0"
u+=b?"1":"0"
u+=c?"1":"0"
u=u+"0_"+a0
t=b0.length
if(t>0){u+="_Dir"
for(s=0;s<b0.length;b0.length===t||(0,H.t)(b0),++s)u+="_"+H.j(b0[s].a)}t=b1.length
if(t>0){u+="_Point"
for(s=0;s<b1.length;b1.length===t||(0,H.t)(b1),++s)u+="_"+H.j(b1[s].a)}t=b2.length
if(t>0){u+="_Spot"
for(s=0;s<b2.length;b2.length===t||(0,H.t)(b2),++s)u+="_"+H.j(b2[s].a)}for(t=b0.length,r=0,q=!1,s=0;s<t;++s,q=!0)r+=b0[s].b
for(t=b1.length,s=0;s<t;++s,q=!0)r+=b1[s].b
for(p=b2.length,s=0;s<p;++s,q=!0)r+=b2[s].b
if(!a7.a)p=a7.c
else p=!0
if(!p)if(!a8.a){p=a8.c
o=p}else o=!0
else o=!0
if(!a2.a)p=a2.c
else p=!0
if(!p){if(!a3.a)p=a3.c
else p=!0
if(!p){if(!a4.a)p=a4.c
else p=!0
if(!p)if(!a5.a)p=a5.c
else p=!0
else p=!0
n=p}else n=!0}else n=!0
p=!a5.a
if(p)m=a5.c
else m=!0
l=m||t>0||o
if(!a3.a)t=a3.c
else t=!0
if(!t){if(!a4.a)t=a4.c
else t=!0
if(!t){if(p)t=a5.c
else t=!0
k=t}else k=!0}else k=!0
if(!k){if(!a6.a)t=a6.c
else t=!0
j=t||o}else j=!0
if(!a6.a)i=a6.c
else i=!0
h=a1.c||a2.c||a3.c||a4.c||a5.c||a6.c||a7.c||a8.c||a9.c
g=a0>0
f=j||i||l||!1
b=b&&h
e=$.aO()
if(j){t=$.bq()
e=new Z.bl(e.a|t.a)}if(i){t=$.bp()
e=new Z.bl(e.a|t.a)}if(h){t=$.br()
e=new Z.bl(e.a|t.a)}if(g){t=$.bo()
e=new Z.bl(e.a|t.a)}return new A.h9(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,r,o,k,o,q,f,!0,!1,!1,n,q,l,j,i,!1,h,g,!1,b,c,!1,a0,u.charCodeAt(0)==0?u:u,e)},
jD:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
jE:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.jD(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.jU(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
mV:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jD(b,t,"emission")
u=b.a+="\n"
u+="vec3 emissionColor()\n"
b.a=u
u=b.a=u+"{\n"
if(s)if(t.c){t=u+"   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
b.a=t}else{t=u+"   return emissionClr;\n"
b.a=t}else if(t.c){t=u+"   return textureCube(emissionTxt, txtCube).rgb;\n"
b.a=t}else t=u
t+="}\n"
b.a=t
b.a=t+"\n"},
mS:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jE(b,t,"ambient")
b.a+="\n"},
mT:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jE(b,t,"diffuse")
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
mW:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jE(b,t,"invDiffuse")
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
n1:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jE(b,t,"specular")
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
mY:function(a,b){var u,t,s
if(!a.k3)return
u=b.a+="// === Normal ===\n"
u=b.a=u+"\n"
if(a.f.c){u+="uniform samplerCube bumpTxt;\n"
b.a=u
u+="\n"
b.a=u}u+="vec3 normal()\n"
b.a=u
u=b.a=u+"{\n"
t=a.f
s=t.a
if(!s)t=t.c
else t=!0
if(!t||s)u=b.a=u+"   return normalize(normalVec);\n"
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
n_:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jD(b,t,"reflect")
u=b.a+="\n"
u+="vec3 reflect(vec3 refl)\n"
b.a=u
u=b.a=u+"{\n"
if(s)if(t.c){t=u+"   vec3 scalar = reflectClr*textureCube(reflectTxt, txtCube).rgb;\n"
b.a=t}else{t=u+"   vec3 scalar = reflectClr;\n"
b.a=t}else if(t.c){t=u+"   vec3 scalar = textureCube(reflectTxt, txtCube).rgb;\n"
b.a=t}else t=u
t+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=t
t+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=t
t+="}\n"
b.a=t
b.a=t+"\n"},
n0:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jD(b,t,"refract")
u=b.a+="uniform float refraction;\n"
u+="\n"
b.a=u
u+="vec3 refract(vec3 refl)\n"
b.a=u
u=b.a=u+"{\n"
if(s)if(t.c){t=u+"   vec3 scalar = refractClr*textureCube(refractTxt, txtCube).rgb;\n"
b.a=t}else{t=u+"   vec3 scalar = refractClr;\n"
b.a=t}else if(t.c){t=u+"   vec3 scalar = textureCube(refractTxt, txtCube).rgb;\n"
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
mU:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.j(u)
s=A.jU(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ao()
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
o=H.c([],r)
n=a.b
if(!n.a)n=n.c
else n=!0
if(n)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.c([],r)
r=a.c
if(!r.a)r=r.c
else r=!0
if(r)C.a.h(m,"diffuse(norm, lit.viewDir)")
r=a.d
if(!r.a)r=r.c
else r=!0
if(r)C.a.h(m,"invDiffuse(norm, lit.viewDir)")
r=a.e
if(!r.a)r=r.c
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
mZ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.j(u)
s=A.jU(t)
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
if(typeof u!=="number")return u.ao()
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
o=a.b
if(!o.a)o=o.c
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
r=a.c
if(!r.a)r=r.c
else r=!0
if(r)C.a.h(k,"diffuse(norm, normDir)")
r=a.d
if(!r.a)r=r.c
else r=!0
if(r)C.a.h(k,"invDiffuse(norm, normDir)")
r=a.e
if(!r.a)r=r.c
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
n2:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.j(u)
s=A.jU(t)
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
if(typeof u!=="number")return u.ao()
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
r=a.b
if(!r.a)r=r.c
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
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(i,"diffuse(norm, litVec)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(i,"invDiffuse(norm, litVec)")
u=a.e
if(!u.a)u=u.c
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
mX:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.h])
u=a.b
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(t,"ambientColor")
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(t,"diffuse(norm, litVec)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(t,"invDiffuse(norm, litVec)")
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(t,"specular(norm, litVec)")
u=b.a+="   return "+C.a.l(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
n3:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.bj("")
i.a="precision mediump float;\n"
i.a=k
u=a.k3
if(u){i.a=j
t=j}else t=k
if(a.k4){t+="varying vec3 binormalVec;\n"
i.a=t}if(a.r1){t+="varying vec2 txt2D;\n"
i.a=t}if(a.r2){t+="varying vec3 txtCube;\n"
i.a=t}if(a.k1){t+="varying vec3 objPos;\n"
i.a=t}t=i.a=(a.k2?i.a=t+"varying vec3 viewPos;\n":t)+"\n"
s=a.x2
if(s){t+="uniform mat4 colorMat;\n"
i.a=t}if(a.dx)t=i.a=t+"uniform mat4 invViewMat;\n"
i.a=t+"\n"
A.mV(a,i)
A.mS(a,i)
A.mT(a,i)
A.mW(a,i)
A.n1(a,i)
t=a.cy
if(t){r=i.a+="// === Enviromental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.n_(a,i)
A.n0(a,i)}A.mY(a,i)
r=i.a+="// === Alpha ===\n"
r=i.a=r+"\n"
q=a.y
p=q.a
if(p){r+="uniform float alpha;\n"
i.a=r}q=q.c
r=(q?i.a=r+"uniform samplerCube alphaTxt;\n":r)+"float alphaValue()\n"
i.a=r
r=i.a=r+"{\n"
if(!p)o=q
else o=!0
if(!o)r=i.a=r+"   return 1.0;\n"
else if(q){if(p){r+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
i.a=r}else{r+="   float a = textureCube(alphaTxt, txtCube).a;\n"
i.a=r}r+="   if (a <= 0.000001) discard;\n"
i.a=r
r+="   return a;\n"
i.a=r}else if(p){r+="   return alpha;\n"
i.a=r}r+="}\n"
i.a=r
i.a=r+"\n"
r=a.id
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.t)(q),++n)A.mU(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.t)(q),++n)A.mZ(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.t)(q),++n)A.n2(a,q[n],i)
A.mX(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.c([],[P.h])
if(r){i.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(m,"lightAccum")
u=a.b
if(!u.a)u=u.c
else u=!0
if(u)i.a+="   setAmbientColor();\n"
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)i.a+="   setDiffuseColor();\n"
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)i.a+="   setInvDiffuseColor();\n"
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)i.a+="   setSpecularColor();\n"
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.t)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.c.ap(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.t)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.c.ap(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.t)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.c.ap(r,1))+"Values(norm);\n"}if(a.cx<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(m,"emissionColor()")
u=a.r
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(m,"reflect(refl)")
u=a.x
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(m,"refract(refl)")
if(m.length<=0)C.a.h(m,"vec3(0.0, 0.0, 0.0)")
u=i.a+="   vec4 objClr = vec4("+C.a.l(m," + ")+", alpha);\n"
if(s)u=i.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
n4:function(a,b){var u,t,s
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
n6:function(a,b){var u
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
n5:function(a,b){var u
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
n8:function(a,b){var u,t
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
n9:function(a,b){var u,t
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
n7:function(a,b){var u
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
na:function(a,b){var u
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
jU:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.c.ap(a,1)},
ke:function(a,b,c,d,e){var u=new A.it(a,c,e)
u.f=d
u.shq(P.mh(d,0,P.p))
return u},
de:function de(a,b,c){this.a=a
this.b=b
this.c=c},
fc:function fc(a){this.a=a},
ae:function ae(a,b,c){this.a=a
this.b=b
this.c=c},
dF:function dF(a,b){var _=this
_.dr=_.iC=_.dq=_.bj=_.b4=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iK=_.iJ=_.iI=_.c8=_.c7=_.c6=_.c5=_.c4=_.c3=_.dF=_.iH=_.dE=_.dD=_.iG=_.dC=_.dB=_.dA=_.iF=_.dz=_.dw=_.dv=_.iE=_.du=_.dt=_.iD=_.ds=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aB:function aB(a,b){this.a=a
this.b=b},
aD:function aD(a,b){this.a=a
this.b=b},
aE:function aE(a,b){this.a=a
this.b=b},
h9:function h9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.bj=b4},
c7:function c7(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c8:function c8(a,b,c,d,e,f,g,h,i,j){var _=this
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
ca:function ca(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cK:function cK(){},
dT:function dT(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
e1:function e1(){},
iy:function iy(a){this.a=a},
aF:function aF(a,b,c){this.a=a
this.c=b
this.d=c},
iv:function iv(a,b,c){this.a=a
this.c=b
this.d=c},
iw:function iw(a,b,c){this.a=a
this.c=b
this.d=c},
ix:function ix(a,b,c){this.a=a
this.c=b
this.d=c},
it:function it(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a6:function a6(a,b,c){this.a=a
this.c=b
this.d=c},
iu:function iu(a,b,c){this.a=a
this.c=b
this.d=c},
W:function W(a,b,c){this.a=a
this.c=b
this.d=c},
cT:function cT(a,b,c){this.a=a
this.c=b
this.d=c},
iz:function iz(a,b,c){this.a=a
this.c=b
this.d=c},
cU:function cU(a,b,c){this.a=a
this.c=b
this.d=c},
ap:function ap(a,b,c){this.a=a
this.c=b
this.d=c},
c9:function c9(a,b,c){this.a=a
this.c=b
this.d=c},
ad:function ad(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jC:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
d6:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.M(h,g+a1,f+a2)
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
j.d=i}m=F.jC(i)
l=F.jC(j.b)
k=F.nM(d,a0,new F.jB(j,F.jC(j.c),F.jC(j.d),l,m,c),b)
if(k!=null)a.i1(k)},
nM:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.l(c,{func:1,ret:-1,args:[F.ax,P.C,P.C]})
if(a<1)return
if(b<1)return
u=F.kb()
t=H.c([],[F.ax])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.iJ(g,g,new V.az(p,0,0,1),g,g,new V.a5(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.c1(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.iJ(g,g,new V.az(j,i,h,1),g,g,new V.a5(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.c1(d))}}u.d.hu(a+1,b+1,t)
return u},
cw:function(a,b,c){var u=new F.a4(),t=a.a
if(t==null)H.A(P.z("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.A(P.z("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a0()
return u},
mf:function(a,b){var u=new F.be(),t=a.a
if(t==null)H.A(P.z("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.A(P.z("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a0()
return u},
kb:function(){var u=new F.dR(),t=new F.iK(u)
t.b=!1
t.shr(H.c([],[F.ax]))
u.a=t
t=new F.hU(u)
t.sbR(H.c([],[F.bG]))
u.b=t
t=new F.hT(u)
t.seQ(H.c([],[F.be]))
u.c=t
t=new F.hS(u)
t.seK(H.c([],[F.a4]))
u.d=t
u.e=null
return u},
iJ:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ax(),r=new F.iP()
r.sbR(H.c([],[F.bG]))
s.b=r
r=new F.iO()
u=[F.be]
r.seR(H.c([],u))
r.seS(H.c([],u))
s.c=r
r=new F.iL()
u=[F.a4]
r.seL(H.c([],u))
r.seM(H.c([],u))
r.seN(H.c([],u))
s.d=r
h=$.lR()
s.e=0
r=$.aO()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bq().a)!==0?e:t
s.x=(u&$.bp().a)!==0?b:t
s.y=(u&$.bO().a)!==0?f:t
s.z=(u&$.br().a)!==0?g:t
s.Q=(u&$.lS().a)!==0?c:t
s.ch=(u&$.ck().a)!==0?i:0
s.cx=(u&$.bo().a)!==0?a:t
return s},
jB:function jB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a4:function a4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
be:function be(){this.b=this.a=null},
bG:function bG(){this.a=null},
dR:function dR(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hS:function hS(a){this.a=a
this.b=null},
hT:function hT(a){this.a=a
this.b=null},
hU:function hU(a){this.a=a
this.b=null},
ax:function ax(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iR:function iR(a){this.a=a},
iQ:function iQ(a){this.a=a},
iK:function iK(a){this.a=a
this.c=this.b=null},
iL:function iL(){this.d=this.c=this.b=null},
iM:function iM(a,b){this.a=a
this.b=b},
iN:function iN(a,b){this.a=a
this.b=b},
iO:function iO(){this.c=this.b=null},
iP:function iP(){this.b=null}},T={cQ:function cQ(){},c6:function c6(){var _=this
_.e=_.d=_.c=_.b=_.a=null},ie:function ie(a){var _=this
_.a=a
_.e=_.d=_.c=null},ig:function ig(a,b,c,d,e,f,g){var _=this
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
H.k8.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gG:function(a){return H.cI(a)},
i:function(a){return"Instance of '"+H.c2(a)+"'"}}
J.fU.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iO:1}
J.dv.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.dw.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.hC.prototype={}
J.bJ.prototype={}
J.bF.prototype={
i:function(a){var u=a[$.lG()]
if(u==null)return this.e7(a)
return"JavaScript function for "+H.j(J.as(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibz:1}
J.aW.prototype={
h:function(a,b){H.H(b,H.y(a,0))
if(!!a.fixed$length)H.A(P.aq("add"))
a.push(b)},
R:function(a,b){var u
if(!!a.fixed$length)H.A(P.aq("remove"))
for(u=0;u<a.length;++u)if(J.a3(a[u],b)){a.splice(u,1)
return!0}return!1},
a4:function(a,b){var u,t
H.m(b,"$ie",[H.y(a,0)],"$ae")
if(!!a.fixed$length)H.A(P.aq("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.t)(b),++t)a.push(b[t])},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.i(P.bv(a))}},
l:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.n(t,u,H.j(a[u]))
return t.join(b)},
hZ:function(a){return this.l(a,"")},
hT:function(a,b){var u,t,s
H.l(b,{func:1,ret:P.O,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.B(b.$1(s)))return s
if(a.length!==u)throw H.i(P.bv(a))}throw H.i(H.k5())},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
e4:function(a,b,c){var u=a.length
if(b>u)throw H.i(P.b1(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.i(P.b1(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.y(a,0)])
return H.c(a.slice(b,c),[H.y(a,0)])},
gbl:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.i(H.k5())},
dd:function(a,b){var u,t
H.l(b,{func:1,ret:P.O,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.B(b.$1(a[t])))return!0
if(a.length!==u)throw H.i(P.bv(a))}return!1},
bv:function(a,b){var u=H.y(a,0)
H.l(b,{func:1,ret:P.p,args:[u,u]})
if(!!a.immutable$list)H.A(P.aq("sort"))
H.dU(a,0,a.length-1,b,u)},
P:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a3(a[u],b))return!0
return!1},
i:function(a){return P.k4(a,"[","]")},
gO:function(a){return new J.ak(a,a.length,[H.y(a,0)])},
gG:function(a){return H.cI(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.A(P.aq("set length"))
if(b<0)throw H.i(P.b1(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.i(H.cf(a,b))
return a[b]},
n:function(a,b,c){H.H(c,H.y(a,0))
if(!!a.immutable$list)H.A(P.aq("indexed set"))
if(b>=a.length||b<0)throw H.i(H.cf(a,b))
a[b]=c},
$ie:1,
$ib:1}
J.k7.prototype={}
J.ak.prototype={
gE:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.i(H.t(s))
u=t.c
if(u>=r){t.scG(null)
return!1}t.scG(s[u]);++t.c
return!0},
scG:function(a){this.d=H.H(a,H.y(this,0))},
$iaV:1}
J.bY.prototype={
hE:function(a,b){var u
H.lz(b)
if(typeof b!=="number")throw H.i(H.bm(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbk(b)
if(this.gbk(a)===u)return 0
if(this.gbk(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbk:function(a){return a===0?1/a<0:a<0},
is:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.i(P.aq(""+a+".toInt()"))},
c9:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.i(P.aq(""+a+".floor()"))},
ai:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.aq(""+a+".round()"))},
dU:function(a,b){var u
if(b>20)throw H.i(P.b1(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbk(a))return"-"+u
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
e0:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ea:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d6(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.d6(a,b)},
d6:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.i(P.aq("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
bf:function(a,b){var u
if(a>0)u=this.hc(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hc:function(a,b){return b>31?0:a>>>b},
aE:function(a,b){if(typeof b!=="number")throw H.i(H.bm(b))
return a>b},
$iC:1,
$ia8:1}
J.du.prototype={$ip:1}
J.dt.prototype={}
J.bE.prototype={
c0:function(a,b){if(b<0)throw H.i(H.cf(a,b))
if(b>=a.length)H.A(H.cf(a,b))
return a.charCodeAt(b)},
aI:function(a,b){if(b>=a.length)throw H.i(H.cf(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!=="string")throw H.i(P.jY(b,null,null))
return a+b},
bw:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
ba:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.i(P.hH(b,null))
if(b>c)throw H.i(P.hH(b,null))
if(c>a.length)throw H.i(P.hH(c,null))
return a.substring(b,c)},
ap:function(a,b){return this.ba(a,b,null)},
iv:function(a){return a.toLowerCase()},
v:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.D)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ag:function(a,b){var u=b-a.length
if(u<=0)return a
return this.v(" ",u)+a},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ikV:1,
$ih:1}
H.r.prototype={
gm:function(a){return this.a.length},
j:function(a,b){return C.c.c0(this.a,b)},
$ae4:function(){return[P.p]},
$aw:function(){return[P.p]},
$ae:function(){return[P.p]},
$ab:function(){return[P.p]}}
H.fz.prototype={}
H.bZ.prototype={
gO:function(a){var u=this
return new H.cA(u,u.gm(u),[H.aj(u,"bZ",0)])},
bt:function(a,b){return this.e6(0,H.l(b,{func:1,ret:P.O,args:[H.aj(this,"bZ",0)]}))}}
H.cA.prototype={
gE:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.ks(s),q=r.gm(s)
if(t.b!==q)throw H.i(P.bv(s))
u=t.c
if(u>=q){t.saW(null)
return!1}t.saW(r.D(s,u));++t.c
return!0},
saW:function(a){this.d=H.H(a,H.y(this,0))},
$iaV:1}
H.h4.prototype={
gO:function(a){return new H.h5(J.bQ(this.a),this.b,this.$ti)},
gm:function(a){return J.bR(this.a)},
D:function(a,b){return this.b.$1(J.jX(this.a,b))},
$ae:function(a,b){return[b]}}
H.h5.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.saW(u.c.$1(t.gE(t)))
return!0}u.saW(null)
return!1},
gE:function(a){return this.a},
saW:function(a){this.a=H.H(a,H.y(this,1))},
$aaV:function(a,b){return[b]}}
H.h6.prototype={
gm:function(a){return J.bR(this.a)},
D:function(a,b){return this.b.$1(J.jX(this.a,b))},
$abZ:function(a,b){return[b]},
$ae:function(a,b){return[b]}}
H.cV.prototype={
gO:function(a){return new H.iT(J.bQ(this.a),this.b,this.$ti)}}
H.iT.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(H.B(t.$1(u.gE(u))))return!0
return!1},
gE:function(a){var u=this.a
return u.gE(u)}}
H.bW.prototype={}
H.e4.prototype={}
H.e3.prototype={}
H.iq.prototype={
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
H.hy.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fW.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.j(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.j(t.a)+")"
return s+r+"' on '"+u+"' ("+H.j(t.a)+")"}}
H.iB.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jV.prototype={
$1:function(a){if(!!J.V(a).$iby)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:14}
H.eL.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iao:1}
H.cq.prototype={
i:function(a){return"Closure '"+H.c2(this).trim()+"'"},
$ibz:1,
giw:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ib.prototype={}
H.i1.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cj(u)+"'"}}
H.cm.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cm))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.cI(this.a)
else u=typeof t!=="object"?J.bP(t):H.cI(t)
return(u^H.cI(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.c2(u)+"'")}}
H.is.prototype={
i:function(a){return this.a}}
H.fj.prototype={
i:function(a){return this.a}}
H.hP.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.iU.prototype={
i:function(a){return"Assertion failed: "+P.dr(this.a)}}
H.a0.prototype={
gm:function(a){return this.a},
ga5:function(a){return new H.dz(this,[H.y(this,0)])},
dk:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cR(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cR(t,b)}else return s.hX(b)},
hX:function(a){var u=this.d
if(u==null)return!1
return this.ca(this.bE(u,J.bP(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bd(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bd(r,b)
s=t==null?null:t.b
return s}else return q.hY(b)},
hY:function(a){var u,t,s=this.d
if(s==null)return
u=this.bE(s,J.bP(a)&0x3ffffff)
t=this.ca(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s,r,q,p,o=this
H.H(b,H.y(o,0))
H.H(c,H.y(o,1))
if(typeof b==="string"){u=o.b
o.cI(u==null?o.b=o.bP():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cI(t==null?o.c=o.bP():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bP()
r=J.bP(b)&0x3ffffff
q=o.bE(s,r)
if(q==null)o.bV(s,r,[o.bQ(b,c)])
else{p=o.ca(q,b)
if(p>=0)q[p].b=c
else q.push(o.bQ(b,c))}}},
J:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.y(s,0),H.y(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.i(P.bv(s))
u=u.c}},
cI:function(a,b,c){var u,t=this
H.H(b,H.y(t,0))
H.H(c,H.y(t,1))
u=t.bd(a,b)
if(u==null)t.bV(a,b,t.bQ(b,c))
else u.b=c},
eY:function(){this.r=this.r+1&67108863},
bQ:function(a,b){var u,t=this,s=new H.fZ(H.H(a,H.y(t,0)),H.H(b,H.y(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eY()
return s},
ca:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a3(a[t].a,b))return t
return-1},
i:function(a){return P.kR(this)},
bd:function(a,b){return a[b]},
bE:function(a,b){return a[b]},
bV:function(a,b,c){a[b]=c},
eF:function(a,b){delete a[b]},
cR:function(a,b){return this.bd(a,b)!=null},
bP:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bV(t,u,t)
this.eF(t,u)
return t}}
H.fZ.prototype={}
H.dz.prototype={
gm:function(a){return this.a.a},
gO:function(a){var u=this.a,t=new H.h_(u,u.r,this.$ti)
t.c=u.e
return t}}
H.h_.prototype={
gE:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.i(P.bv(t))
else{t=u.c
if(t==null){u.scH(null)
return!1}else{u.scH(t.a)
u.c=u.c.c
return!0}}},
scH:function(a){this.d=H.H(a,H.y(this,0))},
$iaV:1}
H.jM.prototype={
$1:function(a){return this.a(a)},
$S:14}
H.jN.prototype={
$2:function(a,b){return this.a(a,b)},
$S:33}
H.jO.prototype={
$1:function(a){return this.a(H.I(a))},
$S:34}
H.fV.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikV:1}
H.cF.prototype={$io7:1}
H.dH.prototype={
gm:function(a){return a.length},
$iJ:1,
$aJ:function(){}}
H.cE.prototype={
j:function(a,b){H.bL(b,a,a.length)
return a[b]},
$abW:function(){return[P.C]},
$aw:function(){return[P.C]},
$ie:1,
$ae:function(){return[P.C]},
$ib:1,
$ab:function(){return[P.C]}}
H.dI.prototype={
$abW:function(){return[P.p]},
$aw:function(){return[P.p]},
$ie:1,
$ae:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.hq.prototype={
j:function(a,b){H.bL(b,a,a.length)
return a[b]}}
H.hr.prototype={
j:function(a,b){H.bL(b,a,a.length)
return a[b]}}
H.hs.prototype={
j:function(a,b){H.bL(b,a,a.length)
return a[b]}}
H.ht.prototype={
j:function(a,b){H.bL(b,a,a.length)
return a[b]}}
H.hu.prototype={
j:function(a,b){H.bL(b,a,a.length)
return a[b]}}
H.dJ.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bL(b,a,a.length)
return a[b]},
$io8:1}
H.hv.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bL(b,a,a.length)
return a[b]}}
H.cZ.prototype={}
H.d_.prototype={}
H.d0.prototype={}
H.d1.prototype={}
P.iW.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:18}
P.iV.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:39}
P.iX.prototype={
$0:function(){this.a.$0()},
$S:2}
P.iY.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eR.prototype={
en:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ce(new P.jx(this,b),0),a)
else throw H.i(P.aq("`setTimeout()` not found."))},
eo:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ce(new P.jw(this,a,Date.now(),b),0),a)
else throw H.i(P.aq("Periodic timer."))},
$ib6:1}
P.jx.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jw.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.ea(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.ba.prototype={
i0:function(a){if(this.c!==6)return!0
return this.b.b.cn(H.l(this.d,{func:1,ret:P.O,args:[P.P]}),a.a,P.O,P.P)},
hV:function(a){var u=this.e,t=P.P,s={futureOr:1,type:H.y(this,1)},r=this.b.b
if(H.f7(u,{func:1,args:[P.P,P.ao]}))return H.kr(r.im(u,a.a,a.b,null,t,P.ao),s)
else return H.kr(r.cn(H.l(u,{func:1,args:[P.P]}),a.a,null,t),s)}}
P.aH.prototype={
dT:function(a,b,c){var u,t,s,r=H.y(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.Z
if(u!==C.f){u.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.nc(b,u)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aH($.Z,[c])
s=b==null?1:3
this.cJ(new P.ba(t,s,a,b,[r,c]))
return t},
ir:function(a,b){return this.dT(a,null,b)},
cJ:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$iba")
t.c=a}else{if(s===2){u=H.k(t.c,"$iaH")
s=u.a
if(s<4){u.cJ(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.jH(null,null,s,H.l(new P.j5(t,a),{func:1,ret:-1}))}},
d1:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$iba")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iaH")
u=q.a
if(u<4){q.d1(a)
return}p.a=u
p.c=q.c}o.a=p.be(a)
u=p.b
u.toString
P.jH(null,null,u,H.l(new P.j9(o,p),{func:1,ret:-1}))}},
bT:function(){var u=H.k(this.c,"$iba")
this.c=null
return this.be(u)},
be:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cN:function(a){var u,t,s=this,r=H.y(s,0)
H.kr(a,{futureOr:1,type:r})
u=s.$ti
if(H.ko(a,"$icx",u,"$acx"))if(H.ko(a,"$iaH",u,null))P.lg(a,s)
else P.mI(a,s)
else{t=s.bT()
H.H(a,r)
s.a=4
s.c=a
P.cY(s,t)}},
cO:function(a,b){var u,t=this
H.k(b,"$iao")
u=t.bT()
t.a=8
t.c=new P.af(a,b)
P.cY(t,u)},
$icx:1}
P.j5.prototype={
$0:function(){P.cY(this.a,this.b)},
$S:2}
P.j9.prototype={
$0:function(){P.cY(this.b,this.a.a)},
$S:2}
P.j6.prototype={
$1:function(a){var u=this.a
u.a=0
u.cN(a)},
$S:18}
P.j7.prototype={
$2:function(a,b){H.k(b,"$iao")
this.a.cO(a,b)},
$1:function(a){return this.$2(a,null)},
$S:35}
P.j8.prototype={
$0:function(){this.a.cO(this.b,this.c)},
$S:2}
P.jc.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dR(H.l(s.d,{func:1}),null)}catch(r){u=H.ay(r)
t=H.ch(r)
if(o.d){s=H.k(o.a.a.c,"$iaf").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iaf")
else q.b=new P.af(u,t)
q.a=!0
return}if(!!J.V(n).$icx){if(n instanceof P.aH&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iaf")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.ir(new P.jd(p),null)
s.a=!1}},
$S:3}
P.jd.prototype={
$1:function(a){return this.a},
$S:40}
P.jb.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.y(s,0)
q=H.H(n.c,r)
p=H.y(s,1)
n.a.b=s.b.b.cn(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ay(o)
t=H.ch(o)
s=n.a
s.b=new P.af(u,t)
s.a=!0}},
$S:3}
P.ja.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iaf")
r=m.c
if(H.B(r.i0(u))&&r.e!=null){q=m.b
q.b=r.hV(u)
q.a=!1}}catch(p){t=H.ay(p)
s=H.ch(p)
r=H.k(m.a.a.c,"$iaf")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.af(t,s)
n.a=!0}},
$S:3}
P.ec.prototype={}
P.i4.prototype={
gm:function(a){var u,t,s=this,r={},q=new P.aH($.Z,[P.p])
r.a=0
u=H.y(s,0)
t=H.l(new P.i6(r,s),{func:1,ret:-1,args:[u]})
H.l(new P.i7(r,q),{func:1,ret:-1})
W.a7(s.a,s.b,t,!1,u)
return q}}
P.i6.prototype={
$1:function(a){H.H(a,H.y(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.y(this.b,0)]}}}
P.i7.prototype={
$0:function(){this.b.cN(this.a.a)},
$S:2}
P.cN.prototype={}
P.i5.prototype={}
P.b6.prototype={}
P.af.prototype={
i:function(a){return H.j(this.a)},
$iby:1}
P.jA.prototype={$iom:1}
P.jG.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dL():s
s=this.b
if(s==null)throw H.i(t)
u=H.i(t)
u.stack=s.i(0)
throw u},
$S:2}
P.jj.prototype={
io:function(a){var u,t,s,r=null
H.l(a,{func:1,ret:-1})
try{if(C.f===$.Z){a.$0()
return}P.lm(r,r,this,a,-1)}catch(s){u=H.ay(s)
t=H.ch(s)
P.jF(r,r,this,u,H.k(t,"$iao"))}},
ip:function(a,b,c){var u,t,s,r=null
H.l(a,{func:1,ret:-1,args:[c]})
H.H(b,c)
try{if(C.f===$.Z){a.$1(b)
return}P.ln(r,r,this,a,b,-1,c)}catch(s){u=H.ay(s)
t=H.ch(s)
P.jF(r,r,this,u,H.k(t,"$iao"))}},
hC:function(a,b){return new P.jl(this,H.l(a,{func:1,ret:b}),b)},
bX:function(a){return new P.jk(this,H.l(a,{func:1,ret:-1}))},
de:function(a,b){return new P.jm(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
dR:function(a,b){H.l(a,{func:1,ret:b})
if($.Z===C.f)return a.$0()
return P.lm(null,null,this,a,b)},
cn:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.H(b,d)
if($.Z===C.f)return a.$1(b)
return P.ln(null,null,this,a,b,c,d)},
im:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.H(b,e)
H.H(c,f)
if($.Z===C.f)return a.$2(b,c)
return P.nd(null,null,this,a,b,c,d,e,f)}}
P.jl.prototype={
$0:function(){return this.a.dR(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jk.prototype={
$0:function(){return this.a.io(this.b)},
$S:3}
P.jm.prototype={
$1:function(a){var u=this.c
return this.a.ip(this.b,H.H(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jh.prototype={
gO:function(a){var u=this,t=new P.es(u,u.r,u.$ti)
t.c=u.e
return t},
gm:function(a){return this.a},
P:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.k(u[b],"$icb")!=null}else{t=this.eB(b)
return t}},
eB:function(a){var u=this.d
if(u==null)return!1
return this.bC(this.cU(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.H(b,H.y(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cK(u==null?s.b=P.ki():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cK(t==null?s.c=P.ki():t,b)}else return s.er(0,b)},
er:function(a,b){var u,t,s,r=this
H.H(b,H.y(r,0))
u=r.d
if(u==null)u=r.d=P.ki()
t=r.cP(b)
s=u[t]
if(s==null)u[t]=[r.bz(b)]
else{if(r.bC(s,b)>=0)return!1
s.push(r.bz(b))}return!0},
R:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.h_(this.c,b)
else return this.fZ(0,b)},
fZ:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cU(r,b)
t=s.bC(u,b)
if(t<0)return!1
s.d7(u.splice(t,1)[0])
return!0},
cK:function(a,b){H.H(b,H.y(this,0))
if(H.k(a[b],"$icb")!=null)return!1
a[b]=this.bz(b)
return!0},
h_:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$icb")
if(u==null)return!1
this.d7(u)
delete a[b]
return!0},
cM:function(){this.r=1073741823&this.r+1},
bz:function(a){var u,t=this,s=new P.cb(H.H(a,H.y(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cM()
return s},
d7:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cM()},
cP:function(a){return J.bP(a)&1073741823},
cU:function(a,b){return a[this.cP(b)]},
bC:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a3(a[t].a,b))return t
return-1}}
P.cb.prototype={}
P.es.prototype={
gE:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.i(P.bv(t))
else{t=u.c
if(t==null){u.scL(null)
return!1}else{u.scL(H.H(t.a,H.y(u,0)))
u.c=u.c.b
return!0}}},
scL:function(a){this.d=H.H(a,H.y(this,0))},
$iaV:1}
P.h0.prototype={$ie:1,$ib:1}
P.w.prototype={
gO:function(a){return new H.cA(a,this.gm(a),[H.da(this,a,"w",0)])},
D:function(a,b){return this.j(a,b)},
iu:function(a,b){var u,t=this,s=H.c([],[H.da(t,a,"w",0)])
C.a.sm(s,t.gm(a))
for(u=0;u<t.gm(a);++u)C.a.n(s,u,t.j(a,u))
return s},
it:function(a){return this.iu(a,!0)},
i:function(a){return P.k4(a,"[","]")}}
P.h2.prototype={}
P.h3.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.j(a)
t.a=u+": "
t.a+=H.j(b)},
$S:19}
P.aa.prototype={
J:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.da(s,a,"aa",0),H.da(s,a,"aa",1)]})
for(u=J.bQ(s.ga5(a));u.u();){t=u.gE(u)
b.$2(t,s.j(a,t))}},
gm:function(a){return J.bR(this.ga5(a))},
i:function(a){return P.kR(a)},
$iG:1}
P.jo.prototype={
a4:function(a,b){var u
for(u=J.bQ(H.m(b,"$ie",this.$ti,"$ae"));u.u();)this.h(0,u.gE(u))},
i:function(a){return P.k4(this,"{","}")},
D:function(a,b){var u,t,s,r=this
P.l1(b,"index")
for(u=P.mM(r,r.r,H.y(r,0)),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.i(P.X(b,r,"index",null,t))},
$ie:1,
$il5:1}
P.et.prototype={}
P.cr.prototype={}
P.cs.prototype={}
P.fB.prototype={
$acr:function(){return[P.h,[P.b,P.p]]}}
P.fR.prototype={
i:function(a){return this.a}}
P.fQ.prototype={
eC:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.bj("")
if(r>b)q.a+=C.c.ba(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lZ(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$acs:function(){return[P.h,P.h]}}
P.iE.prototype={}
P.iF.prototype={
hF:function(a){var u,t,s=P.l2(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jy(u)
if(t.eO(a,0,s)!==s)t.d8(C.c.c0(a,s-1),0)
return new Uint8Array(u.subarray(0,H.mP(0,t.b,u.length)))},
$acs:function(){return[P.h,[P.b,P.p]]}}
P.jy.prototype={
d8:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eO:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.c.c0(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.c.aI(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.d8(r,C.c.aI(a,p)))s=p}else if(r<=2047){q=n.b
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
P.O.prototype={}
P.aA.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.aA&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.e.bf(u,30))&1073741823},
i:function(a){var u=this,t=P.m6(H.mr(u)),s=P.dm(H.mp(u)),r=P.dm(H.ml(u)),q=P.dm(H.mm(u)),p=P.dm(H.mo(u)),o=P.dm(H.mq(u)),n=P.m7(H.mn(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.C.prototype={}
P.bx.prototype={
aE:function(a,b){return C.e.aE(this.a,b.gix())},
q:function(a,b){if(b==null)return!1
return b instanceof P.bx&&this.a===b.a},
gG:function(a){return C.e.gG(this.a)},
i:function(a){var u,t,s,r=new P.fy(),q=this.a
if(q<0)return"-"+new P.bx(0-q).i(0)
u=r.$1(C.e.a3(q,6e7)%60)
t=r.$1(C.e.a3(q,1e6)%60)
s=new P.fx().$1(q%1e6)
return""+C.e.a3(q,36e8)+":"+H.j(u)+":"+H.j(t)+"."+H.j(s)}}
P.fx.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:21}
P.fy.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:21}
P.by.prototype={}
P.fb.prototype={
i:function(a){return"Assertion failed"}}
P.dL.prototype={
i:function(a){return"Throw of null."}}
P.aJ.prototype={
gbB:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbA:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbB()+o+u
if(!q.a)return t
s=q.gbA()
r=P.dr(q.b)
return t+s+": "+r}}
P.c3.prototype={
gbB:function(){return"RangeError"},
gbA:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.j(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.j(s)
else if(t>s)u=": Not in range "+H.j(s)+".."+H.j(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.j(s)}return u}}
P.fT.prototype={
gbB:function(){return"RangeError"},
gbA:function(){var u,t=H.a1(this.b)
if(typeof t!=="number")return t.aa()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.j(u)},
gm:function(a){return this.f}}
P.iC.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iA.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cM.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fm.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dr(u)+"."}}
P.hB.prototype={
i:function(a){return"Out of Memory"},
$iby:1}
P.dW.prototype={
i:function(a){return"Stack Overflow"},
$iby:1}
P.fr.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ek.prototype={
i:function(a){return"Exception: "+this.a}}
P.fL.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.c.ba(s,0,75)+"...":s
return t+"\n"+r}}
P.bz.prototype={}
P.p.prototype={}
P.e.prototype={
bt:function(a,b){var u=H.aj(this,"e",0)
return new H.cV(this,H.l(b,{func:1,ret:P.O,args:[u]}),[u])},
gm:function(a){var u,t=this.gO(this)
for(u=0;t.u();)++u
return u},
gaF:function(a){var u,t=this.gO(this)
if(!t.u())throw H.i(H.k5())
u=t.gE(t)
if(t.u())throw H.i(H.mc())
return u},
D:function(a,b){var u,t,s
P.l1(b,"index")
for(u=this.gO(this),t=0;u.u();){s=u.gE(u)
if(b===t)return s;++t}throw H.i(P.X(b,this,"index",null,t))},
i:function(a){return P.mb(this,"(",")")}}
P.aV.prototype={}
P.b.prototype={$ie:1}
P.G.prototype={}
P.N.prototype={
gG:function(a){return P.P.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.a8.prototype={}
P.P.prototype={constructor:P.P,$iP:1,
q:function(a,b){return this===b},
gG:function(a){return H.cI(this)},
i:function(a){return"Instance of '"+H.c2(this)+"'"},
toString:function(){return this.i(this)}}
P.ao.prototype={}
P.h.prototype={$ikV:1}
P.bj.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.u.prototype={}
W.f9.prototype={
gm:function(a){return a.length}}
W.dd.prototype={
i:function(a){return String(a)},
$idd:1}
W.fa.prototype={
i:function(a){return String(a)}}
W.cl.prototype={$icl:1}
W.df.prototype={}
W.bs.prototype={$ibs:1}
W.bU.prototype={
cr:function(a,b,c){if(c!=null)return a.getContext(b,P.nl(c))
return a.getContext(b)},
e_:function(a,b){return this.cr(a,b,null)},
$ibU:1}
W.cp.prototype={$icp:1}
W.bt.prototype={
gm:function(a){return a.length}}
W.ct.prototype={$ict:1}
W.fn.prototype={
gm:function(a){return a.length}}
W.S.prototype={$iS:1}
W.cu.prototype={
gm:function(a){return a.length}}
W.fo.prototype={}
W.aR.prototype={}
W.aS.prototype={}
W.fp.prototype={
gm:function(a){return a.length}}
W.fq.prototype={
gm:function(a){return a.length}}
W.ft.prototype={
gm:function(a){return a.length}}
W.aC.prototype={$iaC:1}
W.fu.prototype={
i:function(a){return String(a)}}
W.dn.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[[P.an,P.a8]]},
$aw:function(){return[[P.an,P.a8]]},
$ie:1,
$ae:function(){return[[P.an,P.a8]]},
$ib:1,
$ab:function(){return[[P.an,P.a8]]},
$aD:function(){return[[P.an,P.a8]]}}
W.dp.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gaD(a))+" x "+H.j(this.gaw(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$ian)return!1
return a.left===u.gbm(b)&&a.top===u.gbq(b)&&this.gaD(a)===u.gaD(b)&&this.gaw(a)===u.gaw(b)},
gG:function(a){return W.li(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(this.gaD(a)),C.d.gG(this.gaw(a)))},
gdf:function(a){return a.bottom},
gaw:function(a){return a.height},
gbm:function(a){return a.left},
gcm:function(a){return a.right},
gbq:function(a){return a.top},
gaD:function(a){return a.width},
$ian:1,
$aan:function(){return[P.a8]}}
W.fv.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[P.h]},
$aw:function(){return[P.h]},
$ie:1,
$ae:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aD:function(){return[P.h]}}
W.fw.prototype={
gm:function(a){return a.length}}
W.j_.prototype={
gm:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.k(u[b],"$iR")},
h:function(a,b){this.a.appendChild(b)
return b},
gO:function(a){var u=this.it(this)
return new J.ak(u,u.length,[H.y(u,0)])},
$aw:function(){return[W.R]},
$ae:function(){return[W.R]},
$ab:function(){return[W.R]}}
W.R.prototype={
ghB:function(a){return new W.j1(a)},
gdh:function(a){return new W.j_(a,a.children)},
gdj:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.aa()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aa()
if(r<0)r=-r*0
return new P.an(u,t,s,r,[P.a8])},
i:function(a){return a.localName},
ae:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.kL
if(u==null){u=H.c([],[W.av])
t=new W.dK(u)
C.a.h(u,W.lh(null))
C.a.h(u,W.lj())
$.kL=t
d=t}else d=u
u=$.kK
if(u==null){u=new W.eX(d)
$.kK=u
c=u}else{u.a=d
c=u}}if($.bc==null){u=document
t=u.implementation.createHTMLDocument("")
$.bc=t
$.k2=t.createRange()
t=$.bc.createElement("base")
H.k(t,"$icl")
t.href=u.baseURI
$.bc.head.appendChild(t)}u=$.bc
if(u.body==null){t=u.createElement("body")
u.body=H.k(t,"$ibs")}u=$.bc
if(!!this.$ibs)s=u.body
else{s=u.createElement(a.tagName)
$.bc.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.P(C.M,a.tagName)){$.k2.selectNodeContents(s)
r=$.k2.createContextualFragment(b)}else{s.innerHTML=b
r=$.bc.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bc.body
if(s==null?u!=null:s!==u)J.kD(s)
c.cs(r)
document.adoptNode(r)
return r},
hH:function(a,b,c){return this.ae(a,b,c,null)},
e2:function(a,b){a.textContent=null
a.appendChild(this.ae(a,b,null,null))},
$iR:1,
gdS:function(a){return a.tagName}}
W.fA.prototype={
$1:function(a){return!!J.V(H.k(a,"$iE")).$iR},
$S:25}
W.n.prototype={$in:1}
W.f.prototype={
hs:function(a,b,c,d){H.l(c,{func:1,args:[W.n]})
if(c!=null)this.es(a,b,c,!1)},
es:function(a,b,c,d){return a.addEventListener(b,H.ce(H.l(c,{func:1,args:[W.n]}),1),!1)},
$if:1}
W.aT.prototype={$iaT:1}
W.fF.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aT]},
$aw:function(){return[W.aT]},
$ie:1,
$ae:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aD:function(){return[W.aT]}}
W.fG.prototype={
gm:function(a){return a.length}}
W.fK.prototype={
gm:function(a){return a.length}}
W.aU.prototype={$iaU:1}
W.fP.prototype={
gm:function(a){return a.length}}
W.bX.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.E]},
$aw:function(){return[W.E]},
$ie:1,
$ae:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$ibX:1,
$aD:function(){return[W.E]}}
W.bA.prototype={$ibA:1,
gdl:function(a){return a.data}}
W.cz.prototype={$icz:1}
W.aX.prototype={$iaX:1}
W.dB.prototype={
i:function(a){return String(a)},
$idB:1}
W.hj.prototype={
gm:function(a){return a.length}}
W.hk.prototype={
j:function(a,b){return P.bn(a.get(H.I(b)))},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
ga5:function(a){var u=H.c([],[P.h])
this.J(a,new W.hl(u))
return u},
gm:function(a){return a.size},
$aaa:function(){return[P.h,null]},
$iG:1,
$aG:function(){return[P.h,null]}}
W.hl.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.hm.prototype={
j:function(a,b){return P.bn(a.get(H.I(b)))},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
ga5:function(a){var u=H.c([],[P.h])
this.J(a,new W.hn(u))
return u},
gm:function(a){return a.size},
$aaa:function(){return[P.h,null]},
$iG:1,
$aG:function(){return[P.h,null]}}
W.hn.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.b_.prototype={$ib_:1}
W.ho.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b_]},
$aw:function(){return[W.b_]},
$ie:1,
$ae:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aD:function(){return[W.b_]}}
W.ab.prototype={$iab:1}
W.ai.prototype={
gaF:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.i(P.l6("No elements"))
if(t>1)throw H.i(P.l6("More than one element"))
return u.firstChild},
a4:function(a,b){var u,t,s,r
H.m(b,"$ie",[W.E],"$ae")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gO:function(a){var u=this.a.childNodes
return new W.ds(u,u.length,[H.da(C.O,u,"D",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$aw:function(){return[W.E]},
$ae:function(){return[W.E]},
$ab:function(){return[W.E]}}
W.E.prototype={
ij:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i:function(a){var u=a.nodeValue
return u==null?this.e5(a):u},
hw:function(a,b){return a.appendChild(b)},
$iE:1}
W.cG.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.E]},
$aw:function(){return[W.E]},
$ie:1,
$ae:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aD:function(){return[W.E]}}
W.b0.prototype={$ib0:1,
gm:function(a){return a.length}}
W.hE.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b0]},
$aw:function(){return[W.b0]},
$ie:1,
$ae:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aD:function(){return[W.b0]}}
W.hN.prototype={
j:function(a,b){return P.bn(a.get(H.I(b)))},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
ga5:function(a){var u=H.c([],[P.h])
this.J(a,new W.hO(u))
return u},
gm:function(a){return a.size},
$aaa:function(){return[P.h,null]},
$iG:1,
$aG:function(){return[P.h,null]}}
W.hO.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.hQ.prototype={
gm:function(a){return a.length}}
W.b2.prototype={$ib2:1}
W.hZ.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b2]},
$aw:function(){return[W.b2]},
$ie:1,
$ae:function(){return[W.b2]},
$ib:1,
$ab:function(){return[W.b2]},
$aD:function(){return[W.b2]}}
W.b3.prototype={$ib3:1}
W.i_.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b3]},
$aw:function(){return[W.b3]},
$ie:1,
$ae:function(){return[W.b3]},
$ib:1,
$ab:function(){return[W.b3]},
$aD:function(){return[W.b3]}}
W.b4.prototype={$ib4:1,
gm:function(a){return a.length}}
W.i2.prototype={
j:function(a,b){return a.getItem(H.I(b))},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga5:function(a){var u=H.c([],[P.h])
this.J(a,new W.i3(u))
return u},
gm:function(a){return a.length},
$aaa:function(){return[P.h,P.h]},
$iG:1,
$aG:function(){return[P.h,P.h]}}
W.i3.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:46}
W.aK.prototype={$iaK:1}
W.c5.prototype={}
W.dX.prototype={
ae:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bx(a,b,c,d)
u=W.m8("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ai(t).a4(0,new W.ai(u))
return t}}
W.i9.prototype={
ae:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bx(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.u.ae(u.createElement("table"),b,c,d)
u.toString
u=new W.ai(u)
s=u.gaF(u)
s.toString
u=new W.ai(s)
r=u.gaF(u)
t.toString
r.toString
new W.ai(t).a4(0,new W.ai(r))
return t}}
W.ia.prototype={
ae:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bx(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.u.ae(u.createElement("table"),b,c,d)
u.toString
u=new W.ai(u)
s=u.gaF(u)
t.toString
s.toString
new W.ai(t).a4(0,new W.ai(s))
return t}}
W.cP.prototype={$icP:1}
W.b5.prototype={$ib5:1}
W.aL.prototype={$iaL:1}
W.ic.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aL]},
$aw:function(){return[W.aL]},
$ie:1,
$ae:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aD:function(){return[W.aL]}}
W.id.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b5]},
$aw:function(){return[W.b5]},
$ie:1,
$ae:function(){return[W.b5]},
$ib:1,
$ab:function(){return[W.b5]},
$aD:function(){return[W.b5]}}
W.ii.prototype={
gm:function(a){return a.length}}
W.b7.prototype={$ib7:1}
W.aM.prototype={$iaM:1}
W.im.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b7]},
$aw:function(){return[W.b7]},
$ie:1,
$ae:function(){return[W.b7]},
$ib:1,
$ab:function(){return[W.b7]},
$aD:function(){return[W.b7]}}
W.io.prototype={
gm:function(a){return a.length}}
W.bI.prototype={}
W.iD.prototype={
i:function(a){return String(a)}}
W.iS.prototype={
gm:function(a){return a.length}}
W.b9.prototype={
ghK:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.aq("deltaY is not supported"))},
ghJ:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.aq("deltaX is not supported"))},
$ib9:1}
W.cW.prototype={
h1:function(a,b){return a.requestAnimationFrame(H.ce(H.l(b,{func:1,ret:-1,args:[P.a8]}),1))},
eI:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cX.prototype={$icX:1}
W.j0.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.S]},
$aw:function(){return[W.S]},
$ie:1,
$ae:function(){return[W.S]},
$ib:1,
$ab:function(){return[W.S]},
$aD:function(){return[W.S]}}
W.ef.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$ian)return!1
return a.left===u.gbm(b)&&a.top===u.gbq(b)&&a.width===u.gaD(b)&&a.height===u.gaw(b)},
gG:function(a){return W.li(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(a.width),C.d.gG(a.height))},
gaw:function(a){return a.height},
gaD:function(a){return a.width}}
W.je.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aU]},
$aw:function(){return[W.aU]},
$ie:1,
$ae:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aD:function(){return[W.aU]}}
W.ey.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.E]},
$aw:function(){return[W.E]},
$ie:1,
$ae:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aD:function(){return[W.E]}}
W.jr.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b4]},
$aw:function(){return[W.b4]},
$ie:1,
$ae:function(){return[W.b4]},
$ib:1,
$ab:function(){return[W.b4]},
$aD:function(){return[W.b4]}}
W.js.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aK]},
$aw:function(){return[W.aK]},
$ie:1,
$ae:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aD:function(){return[W.aK]}}
W.iZ.prototype={
J:function(a,b){var u,t,s,r,q
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.ga5(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.t)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga5:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=H.k(r[t],"$icX")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aaa:function(){return[P.h,P.h]},
$aG:function(){return[P.h,P.h]}}
W.j1.prototype={
j:function(a,b){return this.a.getAttribute(H.I(b))},
gm:function(a){return this.ga5(this).length}}
W.j2.prototype={}
W.kh.prototype={}
W.j3.prototype={}
W.j4.prototype={
$1:function(a){return this.a.$1(H.k(a,"$in"))},
$S:29}
W.bK.prototype={
eg:function(a){var u
if($.en.a===0){for(u=0;u<262;++u)$.en.n(0,C.L[u],W.nv())
for(u=0;u<12;++u)$.en.n(0,C.m[u],W.nw())}},
aO:function(a){return $.lU().P(0,W.cv(a))},
an:function(a,b,c){var u=$.en.j(0,H.j(W.cv(a))+"::"+b)
if(u==null)u=$.en.j(0,"*::"+b)
if(u==null)return!1
return H.kn(u.$4(a,b,c,this))},
$iav:1}
W.D.prototype={
gO:function(a){return new W.ds(a,this.gm(a),[H.da(this,a,"D",0)])}}
W.dK.prototype={
aO:function(a){return C.a.dd(this.a,new W.hx(a))},
an:function(a,b,c){return C.a.dd(this.a,new W.hw(a,b,c))},
$iav:1}
W.hx.prototype={
$1:function(a){return H.k(a,"$iav").aO(this.a)},
$S:16}
W.hw.prototype={
$1:function(a){return H.k(a,"$iav").an(this.a,this.b,this.c)},
$S:16}
W.eG.prototype={
em:function(a,b,c,d){var u,t,s
this.a.a4(0,c)
u=b.bt(0,new W.jp())
t=b.bt(0,new W.jq())
this.b.a4(0,u)
s=this.c
s.a4(0,C.N)
s.a4(0,t)},
aO:function(a){return this.a.P(0,W.cv(a))},
an:function(a,b,c){var u=this,t=W.cv(a),s=u.c
if(s.P(0,H.j(t)+"::"+b))return u.d.hv(c)
else if(s.P(0,"*::"+b))return u.d.hv(c)
else{s=u.b
if(s.P(0,H.j(t)+"::"+b))return!0
else if(s.P(0,"*::"+b))return!0
else if(s.P(0,H.j(t)+"::*"))return!0
else if(s.P(0,"*::*"))return!0}return!1},
$iav:1}
W.jp.prototype={
$1:function(a){return!C.a.P(C.m,H.I(a))},
$S:15}
W.jq.prototype={
$1:function(a){return C.a.P(C.m,H.I(a))},
$S:15}
W.ju.prototype={
an:function(a,b,c){if(this.e9(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.P(0,b)
return!1}}
W.jv.prototype={
$1:function(a){return"TEMPLATE::"+H.j(H.I(a))},
$S:30}
W.jt.prototype={
aO:function(a){var u=J.V(a)
if(!!u.$icJ)return!1
u=!!u.$io
if(u&&W.cv(a)==="foreignObject")return!1
if(u)return!0
return!1},
an:function(a,b,c){if(b==="is"||C.c.bw(b,"on"))return!1
return this.aO(a)},
$iav:1}
W.ds.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scV(J.f8(u.a,t))
u.c=t
return!0}u.scV(null)
u.c=s
return!1},
gE:function(a){return this.d},
scV:function(a){this.d=H.H(a,H.y(this,0))},
$iaV:1}
W.av.prototype={}
W.jn.prototype={$io9:1}
W.eX.prototype={
cs:function(a){new W.jz(this).$2(a,null)},
b_:function(a,b){if(b==null)J.kD(a)
else b.removeChild(a)},
h6:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.lY(a)
n=o.a.getAttribute("is")
H.k(a,"$iR")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.B(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ay(r)}t="element unprintable"
try{t=J.as(a)}catch(r){H.ay(r)}try{s=W.cv(a)
this.h5(H.k(a,"$iR"),b,p,t,s,H.k(o,"$iG"),H.I(n))}catch(r){if(H.ay(r) instanceof P.aJ)throw r
else{this.b_(a,b)
window
q="Removing corrupted element "+H.j(t)
if(typeof console!="undefined")window.console.warn(q)}}},
h5:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b_(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aO(a)){o.b_(a,b)
window
u="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.an(a,"is",g)){o.b_(a,b)
window
u="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga5(f)
t=H.c(u.slice(0),[H.y(u,0)])
for(s=f.ga5(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
q=o.a
p=J.m_(r)
H.I(r)
if(!q.an(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.j(e)+" "+r+'="'+H.j(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.V(a).$icP)o.cs(a.content)},
$inV:1}
W.jz.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.h6(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b_(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ay(s)
r=H.k(u,"$iE")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.k(t,"$iE")}},
$S:31}
W.ee.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.el.prototype={}
W.em.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.d2.prototype={}
W.d3.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eM.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.d4.prototype={}
W.d5.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f6.prototype={}
P.eW.prototype={$ibA:1,
gdl:function(a){return this.a}}
P.jI.prototype={
$2:function(a,b){this.a[a]=b},
$S:19}
P.fH.prototype={
gbF:function(){var u=this.b,t=H.aj(u,"w",0),s=W.R
return new H.h4(new H.cV(u,H.l(new P.fI(),{func:1,ret:P.O,args:[t]}),[t]),H.l(new P.fJ(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.bR(this.gbF().a)},
j:function(a,b){var u=this.gbF()
return u.b.$1(J.jX(u.a,b))},
gO:function(a){var u=P.kQ(this.gbF(),!1,W.R)
return new J.ak(u,u.length,[H.y(u,0)])},
$aw:function(){return[W.R]},
$ae:function(){return[W.R]},
$ab:function(){return[W.R]}}
P.fI.prototype={
$1:function(a){return!!J.V(H.k(a,"$iE")).$iR},
$S:25}
P.fJ.prototype={
$1:function(a){return H.q(H.k(a,"$iE"),"$iR")},
$S:32}
P.ji.prototype={
gcm:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.F(t)
return H.H(u+t,H.y(this,0))},
gdf:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.F(t)
return H.H(u+t,H.y(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.j(u.a)+", "+H.j(u.b)+") "+H.j(u.c)+" x "+H.j(u.d)},
q:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.V(b)
if(!!u.$ian){t=p.a
if(t==u.gbm(b)){s=p.b
if(s==u.gbq(b)){r=p.c
if(typeof t!=="number")return t.C()
if(typeof r!=="number")return H.F(r)
q=H.y(p,0)
if(H.H(t+r,q)===u.gcm(b)){t=p.d
if(typeof s!=="number")return s.C()
if(typeof t!=="number")return H.F(t)
u=H.H(s+t,q)===u.gdf(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t=this,s=t.a,r=J.bP(s),q=t.b,p=J.bP(q),o=t.c
if(typeof s!=="number")return s.C()
if(typeof o!=="number")return H.F(o)
u=H.y(t,0)
o=C.e.gG(H.H(s+o,u))
s=t.d
if(typeof q!=="number")return q.C()
if(typeof s!=="number")return H.F(s)
u=C.e.gG(H.H(q+s,u))
return P.mL(P.jg(P.jg(P.jg(P.jg(0,r),p),o),u))}}
P.an.prototype={
gbm:function(a){return this.a},
gbq:function(a){return this.b},
gaD:function(a){return this.c},
gaw:function(a){return this.d}}
P.bd.prototype={$ibd:1}
P.fY.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bd]},
$ie:1,
$ae:function(){return[P.bd]},
$ib:1,
$ab:function(){return[P.bd]},
$aD:function(){return[P.bd]}}
P.bg.prototype={$ibg:1}
P.hz.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bg]},
$ie:1,
$ae:function(){return[P.bg]},
$ib:1,
$ab:function(){return[P.bg]},
$aD:function(){return[P.bg]}}
P.hG.prototype={
gm:function(a){return a.length}}
P.cJ.prototype={$icJ:1}
P.i8.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.j(a,b)},
$aw:function(){return[P.h]},
$ie:1,
$ae:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aD:function(){return[P.h]}}
P.o.prototype={
gdh:function(a){return new P.fH(a,new W.ai(a))},
ae:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.av])
C.a.h(p,W.lh(null))
C.a.h(p,W.lj())
C.a.h(p,new W.jt())
c=new W.eX(new W.dK(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.o).hH(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ai(s)
q=p.gaF(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$io:1}
P.bk.prototype={$ibk:1}
P.ip.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bk]},
$ie:1,
$ae:function(){return[P.bk]},
$ib:1,
$ab:function(){return[P.bk]},
$aD:function(){return[P.bk]}}
P.eq.prototype={}
P.er.prototype={}
P.eB.prototype={}
P.eC.prototype={}
P.eN.prototype={}
P.eO.prototype={}
P.eU.prototype={}
P.eV.prototype={}
P.fd.prototype={
gm:function(a){return a.length}}
P.fe.prototype={
j:function(a,b){return P.bn(a.get(H.I(b)))},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
ga5:function(a){var u=H.c([],[P.h])
this.J(a,new P.ff(u))
return u},
gm:function(a){return a.size},
$aaa:function(){return[P.h,null]},
$iG:1,
$aG:function(){return[P.h,null]}}
P.ff.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
P.fg.prototype={
gm:function(a){return a.length}}
P.bS.prototype={}
P.hA.prototype={
gm:function(a){return a.length}}
P.ed.prototype={}
P.dg.prototype={$idg:1}
P.dO.prototype={$idO:1}
P.c4.prototype={
iq:function(a,b,c,d,e,f,g){var u,t=J.V(g)
if(!!t.$ibA)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.nm(g))
return}if(!!t.$icz)t=!0
else t=!1
if(t){this.hh(a,b,c,d,e,f,g)
return}throw H.i(P.m0("Incorrect number or type of arguments"))},
hh:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
Z:function(a,b,c){return a.uniform1f(b,c)},
bs:function(a,b,c){return a.uniform1i(b,c)},
U:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dW:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
dX:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
dY:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic4:1}
P.dQ.prototype={$idQ:1}
P.dY.prototype={$idY:1}
P.e2.prototype={$ie2:1}
P.i0.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return P.bn(a.item(b))},
D:function(a,b){return this.j(a,b)},
$aw:function(){return[[P.G,,,]]},
$ie:1,
$ae:function(){return[[P.G,,,]]},
$ib:1,
$ab:function(){return[[P.G,,,]]},
$aD:function(){return[[P.G,,,]]}}
P.eJ.prototype={}
P.eK.prototype={}
O.a_.prototype={
bc:function(a){var u=this
u.seT(H.c([],[a]))
u.sd_(null)
u.scW(null)
u.sd0(null)},
ct:function(a,b,c){var u=this,t=H.aj(u,"a_",0)
H.l(b,{func:1,ret:P.O,args:[[P.e,t]]})
t={func:1,ret:-1,args:[P.p,[P.e,t]]}
H.l(a,t)
H.l(c,t)
u.sd_(b)
u.scW(a)
u.sd0(c)},
aT:function(a,b){return this.ct(a,null,b)},
cZ:function(a){var u
H.m(a,"$ie",[H.aj(this,"a_",0)],"$ae")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cC:function(a,b){var u
H.m(b,"$ie",[H.aj(this,"a_",0)],"$ae")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gO:function(a){var u=this.a
return new J.ak(u,u.length,[H.y(u,0)])},
D:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aj(s,"a_",0)
H.H(b,r)
r=[r]
if(H.B(s.cZ(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.cC(t,H.c([b],r))}},
a4:function(a,b){var u,t,s=this
H.m(b,"$ie",[H.aj(s,"a_",0)],"$ae")
if(H.B(s.cZ(b))){u=s.a
t=u.length
C.a.a4(u,b)
s.cC(t,b)}},
seT:function(a){this.a=H.m(a,"$ib",[H.aj(this,"a_",0)],"$ab")},
sd_:function(a){this.b=H.l(a,{func:1,ret:P.O,args:[[P.e,H.aj(this,"a_",0)]]})},
scW:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.p,[P.e,H.aj(this,"a_",0)]]})},
sd0:function(a){H.l(a,{func:1,ret:-1,args:[P.p,[P.e,H.aj(this,"a_",0)]]})},
$ie:1}
O.cC.prototype={
gm:function(a){return this.a.length},
gp:function(){var u=this.b
return u==null?this.b=D.L():u},
aG:function(){var u=this.b
if(u!=null)u.w(null)},
ga_:function(a){var u=this.a
if(u.length>0)return C.a.gbl(u)
else return V.c_()},
bp:function(a){var u=this.a
if(a==null)C.a.h(u,V.c_())
else C.a.h(u,a)
this.aG()},
ay:function(){var u=this.a
if(u.length>0){u.pop()
this.aG()}},
sbH:function(a){this.a=H.m(a,"$ib",[V.al],"$ab")}}
E.fh.prototype={}
E.ag.prototype={
sbu:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gp().R(0,s.gdM())
u=s.c
if(u!=null)u.gp().h(0,s.gdM())
t=new D.K("shape",r,s.c,[F.dR])
t.b=!0
s.bn(t)}},
aj:function(a,b){var u
for(u=this.y.a,u=new J.ak(u,u.length,[H.y(u,0)]);u.u();)u.d.aj(0,b)},
a8:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.ga_(s))
s.aG()
a.cl(t.f)
s=a.dy
u=(s&&C.a).gbl(s)
if(u!=null&&t.d!=null)u.dP(a,t)
for(s=t.y.a,s=new J.ak(s,s.length,[H.y(s,0)]);s.u();)s.d.a8(a)
a.ck()
a.dx.ay()},
gp:function(){var u=this.z
return u==null?this.z=D.L():u},
bn:function(a){var u=this.z
if(u!=null)u.w(a)},
a0:function(){return this.bn(null)},
dN:function(a){H.k(a,"$ix")
this.e=null
this.bn(a)},
i7:function(){return this.dN(null)},
dL:function(a){this.bn(H.k(a,"$ix"))},
i4:function(){return this.dL(null)},
i3:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ie",[E.ag],"$ae")
for(u=b.length,t=this.gdK(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.t)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bV()
o.sac(null)
o.saM(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a0()},
i6:function(a,b){var u,t
H.m(b,"$ie",[E.ag],"$ae")
for(u=b.gO(b),t=this.gdK();u.u();)u.gE(u).gp().R(0,t)
this.a0()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sef:function(a,b){this.y=H.m(b,"$ia_",[E.ag],"$aa_")},
$ic0:1}
E.hJ.prototype={
ec:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aA(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cC()
t=[V.al]
u.sbH(H.c([],t))
u.b=null
u.gp().h(0,new E.hK(s))
s.cy=u
u=new O.cC()
u.sbH(H.c([],t))
u.b=null
u.gp().h(0,new E.hL(s))
s.db=u
u=new O.cC()
u.sbH(H.c([],t))
u.b=null
u.gp().h(0,new E.hM(s))
s.dx=u
s.shg(H.c([],[O.bH]))
u=s.dy;(u&&C.a).h(u,null)
s.shb(new H.a0([P.h,A.cK]))},
gii:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga_(s)
u=t.db
u=t.z=s.v(0,u.ga_(u))
s=u}return s},
cl:function(a){var u=this.dy,t=a==null?(u&&C.a).gbl(u):a;(u&&C.a).h(u,t)},
ck:function(){var u=this.dy
if(u.length>1)u.pop()},
dc:function(a){var u=a.b
if(u.length===0)throw H.i(P.z("May not cache a shader with no name."))
if(this.fr.dk(0,u))throw H.i(P.z('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.n(0,u,a)},
shg:function(a){this.dy=H.m(a,"$ib",[O.bH],"$ab")},
shb:function(a){this.fr=H.m(a,"$iG",[P.h,A.cK],"$aG")}}
E.hK.prototype={
$1:function(a){var u
H.k(a,"$ix")
u=this.a
u.ch=u.z=null},
$S:7}
E.hL.prototype={
$1:function(a){var u
H.k(a,"$ix")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:7}
E.hM.prototype={
$1:function(a){var u
H.k(a,"$ix")
u=this.a
u.cx=u.ch=null},
$S:7}
E.dZ.prototype={
cF:function(a){H.k(a,"$ix")
this.dQ()},
cE:function(){return this.cF(null)},
ghU:function(){var u,t=this,s=Date.now(),r=C.e.a3(P.kJ(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aA(s,!1)
return u/r},
d3:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.v()
if(typeof r!=="number")return H.F(r)
u=C.d.c9(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.v()
t=C.d.c9(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.l9(C.j,s.gil())}},
dQ:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.l(new E.ih(this),{func:1,ret:-1,args:[P.a8]})
C.w.eI(u)
C.w.h1(u,W.lq(t,P.a8))}},
ik:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.d3()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aA(r,!1)
s.y=P.kJ(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aG()
r=s.db
C.a.sm(r.a,0)
r.aG()
r=s.dx
C.a.sm(r.a,0)
r.aG()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.a8(p.e)}s=p.z
if(s!=null)s.w(null)}catch(q){u=H.ay(q)
t=H.ch(q)
P.kz("Error: "+H.j(u))
P.kz("Stack: "+H.j(t))
throw H.i(u)}}}
E.ih.prototype={
$1:function(a){var u
H.lz(a)
u=this.a
if(u.ch){u.ch=!1
u.ik()}},
$S:47}
Z.ea.prototype={$inP:1}
Z.dh.prototype={
X:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ay(s)
t=P.z('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.j(u))
throw H.i(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.j(u.e)+"]"}}
Z.eb.prototype={$inQ:1}
Z.co.prototype={
av:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
X:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].X(a)},
aC:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a8:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.as(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(p,", ")+"\nAttrs:   "+C.a.l(r,", ")},
seP:function(a){this.b=H.m(a,"$ib",[Z.bB],"$ab")},
$inX:1}
Z.bB.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c2(this.c)+"'")+"]"}}
Z.bl.prototype={
gcv:function(a){var u=this.a,t=(u&$.aO().a)!==0?3:0
if((u&$.bq().a)!==0)t+=3
if((u&$.bp().a)!==0)t+=3
if((u&$.bO().a)!==0)t+=2
if((u&$.br().a)!==0)t+=3
if((u&$.db().a)!==0)t+=3
if((u&$.dc().a)!==0)t+=4
if((u&$.ck().a)!==0)++t
return(u&$.bo().a)!==0?t+4:t},
hx:function(a){var u,t=$.aO(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bq()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bO()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.br()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.db()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dc()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ck()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bo()
if((s&t.a)!==0)if(u===a)return t
return $.lT()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bl))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.h]),t=this.a
if((t&$.aO().a)!==0)C.a.h(u,"Pos")
if((t&$.bq().a)!==0)C.a.h(u,"Norm")
if((t&$.bp().a)!==0)C.a.h(u,"Binm")
if((t&$.bO().a)!==0)C.a.h(u,"Txt2D")
if((t&$.br().a)!==0)C.a.h(u,"TxtCube")
if((t&$.db().a)!==0)C.a.h(u,"Clr3")
if((t&$.dc().a)!==0)C.a.h(u,"Clr4")
if((t&$.ck().a)!==0)C.a.h(u,"Weight")
if((t&$.bo().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.fk.prototype={}
D.bV.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.x]}
H.l(b,u)
if(this.a==null)this.sac(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
R:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[D.x]})
u=s.a
u=u==null?null:C.a.P(u,b)
if(u===!0){u=s.a
t=(u&&C.a).R(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.P(u,b)
if(u===!0){u=s.b
t=(u&&C.a).R(u,b)||t}return t},
w:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.x()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.J(P.kQ(u,!0,{func:1,ret:-1,args:[D.x]}),new D.fD(q))
u=r.b
if(u!=null){r.saM(H.c([],[{func:1,ret:-1,args:[D.x]}]))
C.a.J(u,new D.fE(q))}return!0},
hP:function(){return this.w(null)},
aA:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.w(u)}}},
sac:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")},
saM:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")}}
D.fD.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:17}
D.fE.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:17}
D.x.prototype={}
D.bC.prototype={}
D.bD.prototype={}
D.K.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.di.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.di))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.dx.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dx))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.fX.prototype={
ic:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
i8:function(a){this.c=a.b
this.d.R(0,a.a)
return!1},
sfY:function(a){this.d=H.m(a,"$il5",[P.p],"$al5")}}
X.dC.prototype={}
X.h1.prototype={
aX:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.v()
u=b.b
t=q.ch
if(typeof u!=="number")return u.v()
s=new V.a5(o.a+n*m,o.b+u*t)
t=q.a.gaP()
r=new X.bf(a,V.bh(),q.x,t,s)
r.b=!0
q.z=new P.aA(p,!1)
q.x=s
return r},
cj:function(a,b){this.r=a.a
return!1},
b7:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.e1()
if(typeof u!=="number")return u.ao()
this.r=(u&~t)>>>0
return!1},
b6:function(a,b){var u=this.d
if(u==null)return!1
u.w(this.aX(a,b))
return!0},
ie:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaP()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.v()
q=a.b
p=o.cy
if(typeof q!=="number")return q.v()
t=new X.cD(new V.T(s*r,q*p),u,t)
t.b=!0
n.w(t)
return!0},
fs:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dC(c,r.a.gaP(),b)
s.b=!0
t.w(s)
r.y=new P.aA(u,!1)
r.x=V.bh()}}
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
u+=H.B(this.b)?"Alt+":""
return u+(H.B(this.c)?"Shift+":"")}}
X.bf.prototype={}
X.hp.prototype={
bD:function(a,b,c){var u=this,t=new P.aA(Date.now(),!1),s=u.a.gaP(),r=new X.bf(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cj:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.w(this.bD(a,b,!0))
return!0},
b7:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.e1()
if(typeof t!=="number")return t.ao()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.w(u.bD(a,b,!0))
return!0},
b6:function(a,b){var u=this.d
if(u==null)return!1
u.w(this.bD(a,b,!1))
return!0},
ig:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaP()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.v()
r=a.b
q=p.ch
if(typeof r!=="number")return r.v()
u=new X.cD(new V.T(t*s,r*q),u,b)
u.b=!0
o.w(u)
return!0},
gdn:function(){var u=this.b
return u==null?this.b=D.L():u},
gcp:function(){var u=this.c
return u==null?this.c=D.L():u},
gdJ:function(){var u=this.d
return u==null?this.d=D.L():u}}
X.cD.prototype={}
X.hF.prototype={}
X.e0.prototype={}
X.il.prototype={
aX:function(a,b){var u,t,s,r,q=this
H.m(a,"$ib",[V.a5],"$ab")
u=new P.aA(Date.now(),!1)
t=a.length>0?a[0]:V.bh()
s=q.a.gaP()
r=new X.e0(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
ib:function(a){var u
H.m(a,"$ib",[V.a5],"$ab")
u=this.b
if(u==null)return!1
u.w(this.aX(a,!0))
return!0},
i9:function(a){var u
H.m(a,"$ib",[V.a5],"$ab")
u=this.c
if(u==null)return!1
u.w(this.aX(a,!0))
return!0},
ia:function(a){var u
H.m(a,"$ib",[V.a5],"$ab")
u=this.d
if(u==null)return!1
u.w(this.aX(a,!1))
return!0}}
X.e5.prototype={
gaP:function(){var u=this.a,t=C.h.gdj(u).c
t.toString
u=C.h.gdj(u).d
u.toString
return V.l3(0,0,t,u)},
cS:function(a){var u=a.keyCode,t=H.B(a.ctrlKey)||H.B(a.metaKey)
return new X.dx(u,new X.au(t,a.altKey,a.shiftKey))},
aN:function(a){var u=this.b,t=H.B(a.ctrlKey)||H.B(a.metaKey)
u.c=new X.au(t,a.altKey,a.shiftKey)},
bW:function(a){var u=this.b,t=H.B(a.ctrlKey)||H.B(a.metaKey)
u.c=new X.au(t,a.altKey,a.shiftKey)},
at:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.H()
u=t.top
if(typeof r!=="number")return r.H()
return new V.a5(s-q,r-u)},
aZ:function(a){return new V.T(a.movementX,a.movementY)},
bS:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a5])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
q=C.d.ai(r.pageX)
C.d.ai(r.pageY)
p=o.left
C.d.ai(r.pageX)
C.a.h(n,new V.a5(q-p,C.d.ai(r.pageY)-o.top))}return n},
ar:function(a){var u=a.buttons,t=H.B(a.ctrlKey)||H.B(a.metaKey)
return new X.di(u,new X.au(t,a.altKey,a.shiftKey))},
bI:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.H()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.H()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fl:function(a){this.f=!0},
f9:function(a){this.f=!1},
ff:function(a){H.k(a,"$iab")
if(H.B(this.f)&&this.bI(a))a.preventDefault()},
fp:function(a){var u
H.k(a,"$iaX")
if(!H.B(this.f))return
u=this.cS(a)
this.b.ic(u)},
fn:function(a){var u
H.k(a,"$iaX")
if(!H.B(this.f))return
u=this.cS(a)
this.b.i8(u)},
fu:function(a){var u,t,s,r,q=this
H.k(a,"$iab")
u=q.a
u.focus()
q.f=!0
q.aN(a)
if(H.B(q.x)){t=q.ar(a)
s=q.aZ(a)
if(q.d.cj(t,s))a.preventDefault()
return}if(H.B(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ar(a)
r=q.at(a)
if(q.c.cj(t,r))a.preventDefault()},
fA:function(a){var u,t,s,r=this
H.k(a,"$iab")
r.aN(a)
u=r.ar(a)
if(H.B(r.x)){t=r.aZ(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.at(a)
if(r.c.b7(u,s))a.preventDefault()},
fj:function(a){var u,t,s,r=this
H.k(a,"$iab")
if(!r.bI(a)){r.aN(a)
u=r.ar(a)
if(H.B(r.x)){t=r.aZ(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.at(a)
if(r.c.b7(u,s))a.preventDefault()}},
fw:function(a){var u,t,s,r=this
H.k(a,"$iab")
r.aN(a)
u=r.ar(a)
if(H.B(r.x)){t=r.aZ(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.at(a)
if(r.c.b6(u,s))a.preventDefault()},
fh:function(a){var u,t,s,r=this
H.k(a,"$iab")
if(!r.bI(a)){r.aN(a)
u=r.ar(a)
if(H.B(r.x)){t=r.aZ(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.at(a)
if(r.c.b6(u,s))a.preventDefault()}},
fC:function(a){var u,t,s=this
H.k(a,"$ib9")
s.aN(a)
u=new V.T((a&&C.v).ghJ(a),C.v.ghK(a)).t(0,180)
if(H.B(s.x)){if(s.d.ie(u))a.preventDefault()
return}if(H.B(s.r))return
t=s.at(a)
if(s.c.ig(u,t))a.preventDefault()},
fE:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ar(s.y)
t=s.at(s.y)
s.d.fs(u,t,r)}},
fU:function(a){var u,t=this
H.k(a,"$iaM")
t.a.focus()
t.f=!0
t.bW(a)
u=t.bS(a)
if(t.e.ib(u))a.preventDefault()},
fQ:function(a){var u
H.k(a,"$iaM")
this.bW(a)
u=this.bS(a)
if(this.e.i9(u))a.preventDefault()},
fS:function(a){var u
H.k(a,"$iaM")
this.bW(a)
u=this.bS(a)
if(this.e.ia(u))a.preventDefault()},
seJ:function(a){this.z=H.m(a,"$ib",[[P.cN,P.P]],"$ab")}}
D.bw.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.L():u},
aq:function(a){var u
H.k(a,"$ix")
u=this.r
if(u!=null)u.w(a)},
ej:function(){return this.aq(null)},
$ia9:1,
$ic0:1}
D.a9.prototype={$ic0:1}
D.dy.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.L():u},
aq:function(a){var u=this.x
if(u!=null)u.w(a)},
cY:function(a){var u
H.k(a,"$ix")
u=this.y
if(u!=null)u.w(a)},
fq:function(){return this.cY(null)},
fG:function(a){var u,t,s
H.m(a,"$ie",[D.a9],"$ae")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.t)(a),++t){s=a[t]
if(s==null||this.eh(s))return!1}return!0},
f3:function(a,b){var u,t,s,r,q,p,o,n=D.a9
H.m(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gcX(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.t)(b),++q){p=H.k(b[q],"$ia9")
if(p instanceof D.bw)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.bV()
o.sac(null)
o.saM(null)
o.c=null
o.d=0
p.r=o}H.l(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bC([n])
n.b=!0
this.aq(n)},
fK:function(a,b){var u,t,s,r=D.a9
H.m(b,"$ie",[r],"$ae")
for(u=b.gO(b),t=this.gcX();u.u();){s=u.gE(u)
C.a.R(this.e,s)
s.gp().R(0,t)}r=new D.bD([r])
r.b=!0
this.aq(r)},
eh:function(a){var u=C.a.P(this.e,a)
return u},
seH:function(a){this.e=H.m(a,"$ib",[D.bw],"$ab")},
sfV:function(a){this.f=H.m(a,"$ib",[D.dN],"$ab")},
she:function(a){this.r=H.m(a,"$ib",[D.dV],"$ab")},
$ae:function(){return[D.a9]},
$aa_:function(){return[D.a9]}}
D.dN.prototype={$ia9:1,$ic0:1}
D.dV.prototype={$ia9:1,$ic0:1}
V.a2.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.az.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.az))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.fC.prototype={}
V.dG.prototype={
a9:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.C])
return t},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dG))return!1
u=b.a
t=$.Q().a
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
i:function(a){var u,t,s,r,q=this,p=[P.C],o=V.cg(H.c([q.a,q.d,q.r],p),3,0),n=V.cg(H.c([q.b,q.e,q.x],p),3,0),m=V.cg(H.c([q.c,q.f,q.y],p),3,0)
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
V.al.prototype={
a9:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.C])
return t},
cb:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.Q().a)return V.c_()
u=1/b1
t=-n
s=-a0
return V.aZ((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
v:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aZ(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
br:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.M(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
co:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.ah(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.al))return!1
u=b.a
t=$.Q().a
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
A:function(a){var u,t,s,r,q,p=this,o=[P.C],n=V.cg(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.cg(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.cg(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.cg(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
K:function(){return this.A("")}}
V.a5.prototype={
H:function(a,b){return new V.a5(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.ah.prototype={
H:function(a,b){return new V.ah(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ah))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.bi.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bi))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.dP.prototype={
ga7:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dP))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.T.prototype={
cc:function(a){return Math.sqrt(this.B(this))},
B:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.F(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.F(t)
return s*r+u*t},
v:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.v()
u=this.b
if(typeof u!=="number")return u.v()
return new V.T(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.Q().a){u=$.ld
return u==null?$.ld=new V.T(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.T(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=this.a
s=$.Q()
s.toString
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.F(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.F(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.M.prototype={
cc:function(a){return Math.sqrt(this.B(this))},
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cd:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.M(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
b3:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.M(u*t-s*r,s*q-p*t,p*r-u*q)},
C:function(a,b){return new V.M(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a){return new V.M(-this.a,-this.b,-this.c)},
t:function(a,b){if(Math.abs(b-0)<$.Q().a)return V.e9()
return new V.M(this.a/b,this.b/b,this.c/b)},
dH:function(){var u=$.Q().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
U.fl.prototype={
by:function(a){var u=V.nO(a,this.c,this.b)
return u},
gp:function(){var u=this.y
return u==null?this.y=D.L():u},
M:function(a){var u=this.y
if(u!=null)u.w(a)},
scq:function(a,b){},
scf:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.Q().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.by(u)}s=new D.K("maximumLocation",s,t.b,[P.C])
s.b=!0
t.M(s)}},
sci:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.Q().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.by(u)}s=new D.K("minimumLocation",s,t.c,[P.C])
s.b=!0
t.M(s)}},
sa6:function(a,b){var u,t=this
b=t.by(b)
u=t.d
if(!(Math.abs(u-b)<$.Q().a)){t.d=b
u=new D.K("location",u,b,[P.C])
u.b=!0
t.M(u)}},
scg:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.Q().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.K("maximumVelocity",r,a,[P.C])
r.b=!0
s.M(r)}},
sS:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.Q().a)){u.f=a
t=new D.K("velocity",t,a,[P.C])
t.b=!0
u.M(t)}},
sc2:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.Q().a)){this.x=a
u=new D.K("dampening",u,a,[P.C])
u.b=!0
this.M(u)}},
aj:function(a,b){var u,t,s,r=this,q=r.f,p=$.Q().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa6(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.Q().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sS(u)}}}
U.dk.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.L():u},
aS:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dk))return!1
return J.a3(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")}}
U.cy.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.L():u},
M:function(a){var u
H.k(a,"$ix")
u=this.e
if(u!=null)u.w(a)},
a1:function(){return this.M(null)},
f1:function(a,b){var u,t,s,r,q,p,o,n=U.ac
H.m(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gaH(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.t)(b),++q){p=b[q]
if(p!=null){o=p.gp()
o.toString
H.l(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bC([n])
n.b=!0
this.M(n)},
fI:function(a,b){var u,t,s=U.ac
H.m(b,"$ie",[s],"$ae")
for(u=b.gO(b),t=this.gaH();u.u();)u.gE(u).gp().R(0,t)
s=new D.bD([s])
s.b=!0
this.M(s)},
aS:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.aa()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ak(r,r.length,[H.y(r,0)]),u=null;r.u();){q=r.d
if(q!=null){t=q.aS(0,b,c)
if(t!=null)u=u==null?t:t.v(0,u)}}s.f=u==null?V.c_():u
r=s.e
if(r!=null)r.aA(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cy))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.a3(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ae:function(){return[U.ac]},
$aa_:function(){return[U.ac]},
$iac:1}
U.ac.prototype={}
U.e6.prototype={
gp:function(){var u=this.cy
return u==null?this.cy=D.L():u},
M:function(a){var u
H.k(a,"$ix")
u=this.cy
if(u!=null)u.w(a)},
a1:function(){return this.M(null)},
b0:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdn().h(0,u.gbJ())
u.a.c.gdJ().h(0,u.gbL())
u.a.c.gcp().h(0,u.gbN())
return!0},
bK:function(a){var u=this
H.k(a,"$ix")
if(!J.a3(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bM:function(a){var u,t,s,r,q,p,o,n=this
a=H.q(H.k(a,"$ix"),"$ibf")
if(!H.B(n.y))return
if(H.B(n.x)){u=a.d.H(0,a.y)
u=new V.T(u.a,u.b)
u=u.B(u)
t=n.r
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.x=!1}if(H.B(n.d)){u=a.c
t=a.d.H(0,a.y)
u=new V.T(t.a,t.b).v(0,2).t(0,u.ga7())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.v()
s=n.e
if(typeof s!=="number")return H.F(s)
t.sS(u*10*s)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=new V.T(s.a,s.b).v(0,2).t(0,u.ga7())
s=n.b
q=r.a
if(typeof q!=="number")return q.N()
p=n.e
if(typeof p!=="number")return H.F(p)
o=n.z
if(typeof o!=="number")return H.F(o)
s.sa6(0,-q*p+o)
n.b.sS(0)
t=t.H(0,a.z)
n.Q=new V.T(t.a,t.b).v(0,2).t(0,u.ga7())}n.a1()},
bO:function(a){var u,t,s,r=this
H.k(a,"$ix")
if(!H.B(r.y))return
r.y=!1
if(H.B(r.x))return
u=r.Q
if(u.B(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.v()
s=r.e
if(typeof s!=="number")return H.F(s)
u.sS(t*10*s)
r.a1()}},
aS:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.aa()
if(q<p){r.ch=p
u=b.y
r.b.aj(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aZ(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iac:1}
U.e7.prototype={
gp:function(){var u=this.fx
return u==null?this.fx=D.L():u},
M:function(a){var u
H.k(a,"$ix")
u=this.fx
if(u!=null)u.w(a)},
a1:function(){return this.M(null)},
b0:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdn().h(0,s.gbJ())
s.a.c.gdJ().h(0,s.gbL())
s.a.c.gcp().h(0,s.gbN())
u=s.a.d
t=u.f
u=t==null?u.f=D.L():t
u.h(0,s.geU())
u=s.a.d
t=u.d
u=t==null?u.d=D.L():t
u.h(0,s.geW())
u=s.a.e
t=u.b
u=t==null?u.b=D.L():t
u.h(0,s.ghn())
u=s.a.e
t=u.d
u=t==null?u.d=D.L():t
u.h(0,s.ghl())
u=s.a.e
t=u.c
u=t==null?u.c=D.L():t
u.h(0,s.ghj())
return!0},
am:function(a){var u=a.a,t=a.b
if(H.B(this.f)){if(typeof u!=="number")return u.N()
u=-u}if(H.B(this.r)){if(typeof t!=="number")return t.N()
t=-t}return new V.T(u,t)},
bK:function(a){var u=this
a=H.q(H.k(a,"$ix"),"$ibf")
if(!J.a3(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bM:function(a){var u,t,s,r,q,p,o,n=this
a=H.q(H.k(a,"$ix"),"$ibf")
if(!H.B(n.cx))return
if(H.B(n.ch)){u=a.d.H(0,a.y)
u=new V.T(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.B(n.e)){u=a.c
t=a.d.H(0,a.y)
u=n.am(new V.T(t.a,t.b).v(0,2).t(0,u.ga7()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sS(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=n.am(new V.T(s.a,s.b).v(0,2).t(0,u.ga7()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa6(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa6(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.H(0,a.z)
n.dx=n.am(new V.T(t.a,t.b).v(0,2).t(0,u.ga7()))}n.a1()},
bO:function(a){var u,t,s,r=this
H.k(a,"$ix")
if(!H.B(r.cx))return
r.cx=!1
if(H.B(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sS(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sS(-t*10*u)
r.a1()}},
eV:function(a){var u=this
if(H.q(H.k(a,"$ix"),"$idC").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eX:function(a){var u,t,s,r,q,p,o,n=this
a=H.q(H.k(a,"$ix"),"$ibf")
if(!J.a3(n.d,a.x.b))return
u=a.c
t=a.d
s=t.H(0,a.y)
r=n.am(new V.T(s.a,s.b).v(0,2).t(0,u.ga7()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa6(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa6(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.H(0,a.z)
n.dx=n.am(new V.T(t.a,t.b).v(0,2).t(0,u.ga7()))
n.a1()},
ho:function(a){var u=this
H.k(a,"$ix")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hm:function(a){var u,t,s,r,q,p,o,n=this
a=H.q(H.k(a,"$ix"),"$ie0")
if(!H.B(n.cx))return
if(H.B(n.ch)){u=a.d.H(0,a.y)
u=new V.T(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.B(n.e)){u=a.c
t=a.d.H(0,a.y)
u=n.am(new V.T(t.a,t.b).v(0,2).t(0,u.ga7()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sS(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=n.am(new V.T(s.a,s.b).v(0,2).t(0,u.ga7()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa6(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa6(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.H(0,a.z)
n.dx=n.am(new V.T(t.a,t.b).v(0,2).t(0,u.ga7()))}n.a1()},
hk:function(a){var u,t,s,r=this
H.k(a,"$ix")
if(!H.B(r.cx))return
r.cx=!1
if(H.B(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sS(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sS(-t*10*u)
r.a1()}},
aS:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.aa()
if(q<p){r.dy=p
u=b.y
r.c.aj(0,u)
r.b.aj(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aZ(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.v(0,V.aZ(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iac:1}
U.e8.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.L():u},
M:function(a){var u=this.r
if(u!=null)u.w(a)},
b0:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.L():t
t=r.geZ()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.L():s).h(0,t)
return!0},
f_:function(a){var u,t,s,r,q=this
H.k(a,"$ix")
if(!J.a3(q.b,q.a.b.c))return
H.q(a,"$icD")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.v()
r=u+t*s
if(u!==r){q.d=r
u=new D.K("zoom",u,r,[P.C])
u.b=!0
q.M(u)}},
aS:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.aZ(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iac:1}
M.dj.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.L():u},
W:function(a){var u
H.k(a,"$ix")
u=this.r
if(u!=null)u.w(a)},
aV:function(){return this.W(null)},
fM:function(a,b){var u,t,s,r,q,p,o,n=M.aw
H.m(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gV(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.t)(b),++q){p=b[q]
if(p!=null){o=p.gp()
o.toString
H.l(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bC([n])
n.b=!0
this.W(n)},
fO:function(a,b){var u,t,s=M.aw
H.m(b,"$ie",[s],"$ae")
for(u=b.gO(b),t=this.gV();u.u();)u.gE(u).gp().R(0,t)
s=new D.bD([s])
s.b=!0
this.W(s)},
a8:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.ak(u,u.length,[H.y(u,0)]);u.u();){t=u.d
if(t!=null)t.a8(a)}s.f=!1},
$ae:function(){return[M.aw]},
$aa_:function(){return[M.aw]},
$iaw:1}
M.dl.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.L():u},
W:function(a){var u
H.k(a,"$ix")
u=this.r
if(u!=null)u.w(a)},
aV:function(){return this.W(null)},
sb1:function(a){var u,t,s=this
if(a==null)a=new X.fS()
u=s.b
if(u!==a){if(u!=null)u.gp().R(0,s.gV())
t=s.b
s.b=a
a.gp().h(0,s.gV())
u=new D.K("camera",t,s.b,[X.bT])
u.b=!0
s.W(u)}},
sb8:function(a,b){var u,t,s=this
if(b==null)b=X.k3(null)
u=s.c
if(u!==b){if(u!=null)u.gp().R(0,s.gV())
t=s.c
s.c=b
b.gp().h(0,s.gV())
u=new D.K("target",t,s.c,[X.cO])
u.b=!0
s.W(u)}},
sb9:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().R(0,t.gV())
u=t.d
t.d=a
if(a!=null)a.gp().h(0,t.gV())
s=new D.K("technique",u,t.d,[O.bH])
s.b=!0
t.W(s)}},
a8:function(a){var u=this
a.cl(u.d)
u.c.X(a)
u.b.X(a)
u.e.aj(0,a)
u.e.a8(a)
u.b.aC(a)
u.c.toString
a.ck()},
$iaw:1}
M.dq.prototype={
W:function(a){var u
H.k(a,"$ix")
u=this.y
if(u!=null)u.w(a)},
aV:function(){return this.W(null)},
fb:function(a,b){var u,t,s,r,q,p,o,n=E.ag
H.m(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gV(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.t)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bV()
o.sac(null)
o.saM(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bC([n])
n.b=!0
this.W(n)},
fd:function(a,b){var u,t,s=E.ag
H.m(b,"$ie",[s],"$ae")
for(u=b.gO(b),t=this.gV();u.u();)u.gE(u).gp().R(0,t)
s=new D.bD([s])
s.b=!0
this.W(s)},
sb1:function(a){var u,t,s=this
if(a==null)a=X.kW(null)
u=s.b
if(u!==a){if(u!=null)u.gp().R(0,s.gV())
t=s.b
s.b=a
a.gp().h(0,s.gV())
u=new D.K("camera",t,s.b,[X.bT])
u.b=!0
s.W(u)}},
sb8:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gp().R(0,t.gV())
u=t.c
t.c=b
b.gp().h(0,t.gV())
s=new D.K("target",u,t.c,[X.cO])
s.b=!0
t.W(s)}},
sb9:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().R(0,t.gV())
u=t.d
t.d=a
if(a!=null)a.gp().h(0,t.gV())
s=new D.K("technique",u,t.d,[O.bH])
s.b=!0
t.W(s)}},
gp:function(){var u=this.y
return u==null?this.y=D.L():u},
a8:function(a){var u,t=this
a.cl(t.d)
t.c.X(a)
t.b.X(a)
u=t.d
if(u!=null)u.aj(0,a)
for(u=t.e.a,u=new J.ak(u,u.length,[H.y(u,0)]);u.u();)u.d.aj(0,a)
for(u=t.e.a,u=new J.ak(u,u.length,[H.y(u,0)]);u.u();)u.d.a8(a)
t.b.toString
a.cy.ay()
a.db.ay()
t.c.toString
a.ck()},
seA:function(a,b){this.e=H.m(b,"$ia_",[E.ag],"$aa_")},
$iaw:1}
M.aw.prototype={}
A.de.prototype={}
A.fc.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hQ:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dm:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ae.prototype={
gak:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
q:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.ae))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.dF.prototype={
eb:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.bj("")
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
A.n4(c0,u)
A.n6(c0,u)
A.n5(c0,u)
A.n8(c0,u)
A.n9(c0,u)
A.n7(c0,u)
A.na(c0,u)
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
b5.dG(0,s.charCodeAt(0)==0?s:s,A.n3(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.q(b5.y.F(0,"invViewMat"),"$iap")
if(t)b5.dy=H.q(b5.y.F(0,"objMat"),"$iap")
if(r)b5.fr=H.q(b5.y.F(0,"viewObjMat"),"$iap")
b5.fy=H.q(b5.y.F(0,"projViewObjMat"),"$iap")
if(c0.ry)b5.k1=H.q(b5.y.F(0,"txt2DMat"),"$icU")
if(c0.x1)b5.k2=H.q(b5.y.F(0,"txtCubeMat"),"$iap")
if(c0.x2)b5.k3=H.q(b5.y.F(0,"colorMat"),"$iap")
b5.sew(H.c([],[A.ap]))
t=c0.y2
if(t>0){b5.k4=H.k(b5.y.F(0,"bendMatCount"),"$iaF")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.A(P.z(b7+q+b8));(s&&C.a).h(s,H.q(m,"$iap"))}}t=c0.a
if(t.a)b5.r2=H.q(b5.y.F(0,"emissionClr"),"$iW")
if(t.c)b5.ry=H.q(b5.y.F(0,"emissionTxt"),"$iad")
t=c0.b
if(t.a)b5.x1=H.q(b5.y.F(0,"ambientClr"),"$iW")
if(t.c)b5.y1=H.q(b5.y.F(0,"ambientTxt"),"$iad")
t=c0.c
if(t.a)b5.y2=H.q(b5.y.F(0,"diffuseClr"),"$iW")
if(t.c)b5.bj=H.q(b5.y.F(0,"diffuseTxt"),"$iad")
t=c0.d
if(t.a)b5.dq=H.q(b5.y.F(0,"invDiffuseClr"),"$iW")
if(t.c)b5.dr=H.q(b5.y.F(0,"invDiffuseTxt"),"$iad")
t=c0.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.du=H.q(b5.y.F(0,"shininess"),"$ia6")
if(s)b5.ds=H.q(b5.y.F(0,"specularClr"),"$iW")
if(t.c)b5.dt=H.q(b5.y.F(0,"specularTxt"),"$iad")}if(c0.f.c)b5.dv=H.q(b5.y.F(0,"bumpTxt"),"$iad")
if(c0.cy){b5.dw=H.q(b5.y.F(0,"envSampler"),"$iad")
t=c0.r
if(t.a)b5.dz=H.q(b5.y.F(0,"reflectClr"),"$iW")
if(t.c)b5.dA=H.q(b5.y.F(0,"reflectTxt"),"$iad")
t=c0.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dB=H.q(b5.y.F(0,"refraction"),"$ia6")
if(s)b5.dC=H.q(b5.y.F(0,"refractClr"),"$iW")
if(t.c)b5.dD=H.q(b5.y.F(0,"refractTxt"),"$iad")}}t=c0.y
if(t.a)b5.dE=H.q(b5.y.F(0,"alpha"),"$ia6")
if(t.c)b5.dF=H.q(b5.y.F(0,"alphaTxt"),"$iad")
t=P.p
s=[t,A.aF]
b5.seG(new H.a0(s))
b5.sek(new H.a0([t,[P.b,A.c7]]))
b5.sfW(new H.a0(s))
b5.sfX(new H.a0([t,[P.b,A.c8]]))
b5.shd(new H.a0(s))
b5.sel(new H.a0([t,[P.b,A.ca]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.c7],l=0;l<t.length;t.length===s||(0,H.t)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.j(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ao()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.A(P.z(b7+g+b8))
H.q(m,"$iW")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.A(P.z(b7+g+b8))
H.q(f,"$iW")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.A(P.z(b7+g+b8))
H.q(e,"$iW")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.A(P.z(b7+g+b8))
H.q(m,"$iW")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.A(P.z(b7+g+b8))
H.q(f,"$iW")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.A(P.z(b7+o+b8))
H.q(e,"$ic9")
a=e}else a=b6
C.a.h(h,new A.c7(b,c,d,m,f,a))}b5.c4.n(0,j,h)
q=b5.c3
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.A(P.z(b7+o+b8))
q.n(0,j,H.k(m,"$iaF"))}for(t=c0.Q,s=t.length,r=[A.c8],l=0;l<t.length;t.length===s||(0,H.t)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.j(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.A(P.z(b7+o+b8))
H.q(m,"$iW")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.A(P.z(b7+o+b8))
H.q(f,"$iW")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.A(P.z(b7+o+b8))
H.q(e,"$iW")
if(typeof j!=="number")return j.ao()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.A(P.z(b7+o+b8))
H.q(a0,"$icU")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.A(P.z(b7+o+b8))
H.q(a0,"$iad")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.A(P.z(b7+o+b8))
H.q(a0,"$iad")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.A(P.z(b7+o+b8))
H.q(a2,"$icT")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.A(P.z(b7+o+b8))
H.q(a0,"$ia6")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.A(P.z(b7+o+b8))
H.q(a2,"$ia6")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.A(P.z(b7+o+b8))
H.q(a5,"$ia6")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.c8(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.c6.n(0,j,h)
q=b5.c5
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.A(P.z(b7+o+b8))
q.n(0,j,H.k(m,"$iaF"))}for(t=c0.ch,s=t.length,r=[A.ca],l=0;l<t.length;t.length===s||(0,H.t)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.j(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.A(P.z(b7+o+b8))
H.q(m,"$iW")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.A(P.z(b7+o+b8))
H.q(f,"$iW")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.A(P.z(b7+o+b8))
H.q(e,"$iW")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.A(P.z(b7+o+b8))
H.q(a0,"$iW")
if(typeof j!=="number")return j.ao()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.A(P.z(b7+o+b8))
H.q(a2,"$iW")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.A(P.z(b7+o+b8))
H.q(a5,"$iW")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.A(P.z(b7+o+b8))
H.q(a9,"$ia6")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.A(P.z(b7+o+b8))
H.q(b0,"$ia6")
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
if(a2==null)H.A(P.z(b7+g+b8))
H.q(a2,"$icT")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.A(P.z(b7+g+b8))
H.q(a2,"$ia6")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.A(P.z(b7+g+b8))
H.q(a5,"$ia6")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.A(P.z(b7+g+b8))
H.q(a2,"$ia6")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.A(P.z(b7+g+b8))
H.q(a5,"$ia6")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.A(P.z(b7+g+b8))
H.q(a9,"$ia6")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.A(P.z(b7+g+b8))
H.q(a2,"$ic9")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.A(P.z(b7+o+b8))
H.q(a2,"$ic9")
a3=a2}else a3=b6
C.a.h(h,new A.ca(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.c8.n(0,j,h)
q=b5.c7
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.A(P.z(b7+o+b8))
q.n(0,j,H.k(m,"$iaF"))}}},
ad:function(a,b){if(b!=null&&b.d>=6)a.cu(b)},
sew:function(a){this.r1=H.m(a,"$ib",[A.ap],"$ab")},
seG:function(a){this.c3=H.m(a,"$iG",[P.p,A.aF],"$aG")},
sek:function(a){this.c4=H.m(a,"$iG",[P.p,[P.b,A.c7]],"$aG")},
sfW:function(a){this.c5=H.m(a,"$iG",[P.p,A.aF],"$aG")},
sfX:function(a){this.c6=H.m(a,"$iG",[P.p,[P.b,A.c8]],"$aG")},
shd:function(a){this.c7=H.m(a,"$iG",[P.p,A.aF],"$aG")},
sel:function(a){this.c8=H.m(a,"$iG",[P.p,[P.b,A.ca]],"$aG")}}
A.aB.prototype={
i:function(a){return"dirLight"+H.j(this.a)}}
A.aD.prototype={
i:function(a){return"pointLight"+H.j(this.a)}}
A.aE.prototype={
i:function(a){return"spotLight"+H.j(this.a)}}
A.h9.prototype={
i:function(a){return this.b4}}
A.c7.prototype={}
A.c8.prototype={}
A.ca.prototype={}
A.cK.prototype={
cB:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dG:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cT(b,35633)
r.f=r.cT(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.B(H.kn(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.A(P.z("Failed to link shader: "+H.j(s)))}r.h8()
r.ha()},
X:function(a){a.a.useProgram(this.r)
this.x.hQ()},
cT:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.B(H.kn(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.i(P.z("Error compiling shader '"+H.j(s)+"': "+H.j(u)))}return s},
h8:function(){var u,t,s,r=this,q=H.c([],[A.de]),p=r.a,o=H.a1(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.de(p,t.name,s))}r.x=new A.fc(q)},
ha:function(){var u,t,s,r=this,q=H.c([],[A.e1]),p=r.a,o=H.a1(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.hI(t.type,t.size,t.name,s))}r.y=new A.iy(q)},
aJ:function(a,b,c){var u=this.a
if(a===1)return new A.aF(u,b,c)
else return A.ke(u,this.r,b,a,c)},
eD:function(a,b,c){var u=this.a
if(a===1)return new A.c9(u,b,c)
else return A.ke(u,this.r,b,a,c)},
eE:function(a,b,c){var u=this.a
if(a===1)return new A.ad(u,b,c)
else return A.ke(u,this.r,b,a,c)},
bg:function(a,b){return new P.ek(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
hI:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aJ(b,c,d)
case 5121:return u.aJ(b,c,d)
case 5122:return u.aJ(b,c,d)
case 5123:return u.aJ(b,c,d)
case 5124:return u.aJ(b,c,d)
case 5125:return u.aJ(b,c,d)
case 5126:return new A.a6(u.a,c,d)
case 35664:return new A.iu(u.a,c,d)
case 35665:return new A.W(u.a,c,d)
case 35666:return new A.cT(u.a,c,d)
case 35667:return new A.iv(u.a,c,d)
case 35668:return new A.iw(u.a,c,d)
case 35669:return new A.ix(u.a,c,d)
case 35674:return new A.iz(u.a,c,d)
case 35675:return new A.cU(u.a,c,d)
case 35676:return new A.ap(u.a,c,d)
case 35678:return u.eD(b,c,d)
case 35680:return u.eE(b,c,d)
case 35670:throw H.i(u.bg("BOOL",c))
case 35671:throw H.i(u.bg("BOOL_VEC2",c))
case 35672:throw H.i(u.bg("BOOL_VEC3",c))
case 35673:throw H.i(u.bg("BOOL_VEC4",c))
default:throw H.i(P.z("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.dT.prototype={}
A.e1.prototype={}
A.iy.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
F:function(a,b){var u=this.j(0,b)
if(u==null)throw H.i(P.z("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.K()},
K:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.t)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aF.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.iv.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.iw.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.ix.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.it.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
shq:function(a){H.m(a,"$ib",[P.p],"$ab")}}
A.a6.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.iu.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.W.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.cT.prototype={
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.iz.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.cU.prototype={
ah:function(a){var u=new Float32Array(H.d7(H.m(a,"$ib",[P.C],"$ab")))
C.b.dX(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.ap.prototype={
ah:function(a){var u=new Float32Array(H.d7(H.m(a,"$ib",[P.C],"$ab")))
C.b.dY(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.c9.prototype={
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.ad.prototype={
cu:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.jB.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cd(s.b,b).cd(s.d.cd(s.c,b),c)
s=new V.ah(r.a,r.b,r.c)
if(!J.a3(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a0()}a.saR(r.t(0,Math.sqrt(r.B(r))))
s=1-b
u=1-c
u=new V.bi(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.a3(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a0()}},
$S:38}
F.a4.prototype={
ev:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.e9()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.dH())return
return s.t(0,Math.sqrt(s.B(s)))},
ez:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.H(0,q)
r=new V.M(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.B(r)))
r=t.H(0,q)
r=new V.M(r.a,r.b,r.c)
r=s.b3(r.t(0,Math.sqrt(r.B(r))))
return r.t(0,Math.sqrt(r.B(r)))},
c_:function(){var u,t=this
if(t.d!=null)return!0
u=t.ev()
if(u==null){u=t.ez()
if(u==null)return!1}t.d=u
t.a.a.a0()
return!0},
eu:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.e9()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.dH())return
return s.t(0,Math.sqrt(s.B(s)))},
ey:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.Q().a){l=d.H(0,g)
l=new V.M(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.B(l)))
if(s.a-t.a<0)q=q.N(0)}else{p=(l-u.b)/r
l=d.H(0,g)
l=new V.ah(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).H(0,j)
l=new V.M(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.B(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.N(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.B(l)))
l=o.b3(q)
l=l.t(0,Math.sqrt(l.B(l))).b3(o)
q=l.t(0,Math.sqrt(l.B(l)))}return q},
bY:function(){var u,t=this
if(t.e!=null)return!0
u=t.eu()
if(u==null){u=t.ey()
if(u==null)return!1}t.e=u
t.a.a.a0()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.c.ag(J.as(s.e),0)+", "+C.c.ag(J.as(t.b.e),0)+", "+C.c.ag(J.as(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
K:function(){return this.A("")}}
F.be.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.c.ag(J.as(u.e),0)+", "+C.c.ag(J.as(this.b.e),0)},
K:function(){return this.A("")}}
F.bG.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.ag(J.as(u.e),0)},
K:function(){return this.A("")}}
F.dR.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.L():u},
i1:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.Y()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.t)(g),++s){r=g[s]
h.a.h(0,r.hG())}h.a.Y()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.t)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.Y()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bG()
if(n.a==null)H.A(P.z("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.w(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.t)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.Y()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.Y()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.mf(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.t)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.Y()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.Y()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.Y()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cw(l,k,i)}g=h.e
if(g!=null)g.aA(0)},
au:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.au()||!1
if(!t.a.au())u=!1
s=t.e
if(s!=null)s.aA(0)
return u},
dg:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aO()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bq().a)!==0)++s
if((t&$.bp().a)!==0)++s
if((t&$.bO().a)!==0)++s
if((t&$.br().a)!==0)++s
if((t&$.db().a)!==0)++s
if((t&$.dc().a)!==0)++s
if((t&$.ck().a)!==0)++s
if((t&$.bo().a)!==0)++s
r=a3.gcv(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.C
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.dh])
for(n=0,m=0;m<s;++m){l=a3.hx(m)
k=l.gcv(l)
C.a.n(o,m,new Z.dh(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.d(u,j)
i=u[j].i_(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.n(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.d7(p)),35044)
u.bindBuffer(a0,null)
e=new Z.co(new Z.ea(a0,f),o,a3)
e.seP(H.c([],[Z.bB]))
if(a.b.b.length!==0){t=P.p
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.Y()
C.a.h(d,c.e)}b=Z.kg(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bB(0,d.length,b))}if(a.c.b.length!==0){t=P.p
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.Y()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.Y()
C.a.h(d,c.e)}b=Z.kg(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bB(1,d.length,b))}if(a.d.b.length!==0){t=P.p
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.Y()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.Y()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].c
c.a.a.Y()
C.a.h(d,c.e)}b=Z.kg(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bB(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.h])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.A(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.A(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.A(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.A(t))}return C.a.l(s,"\n")},
a0:function(){var u=this.e
if(u!=null)u.w(null)},
$inW:1}
F.hS.prototype={
ht:function(a){var u,t,s,r,q,p
H.m(a,"$ib",[F.ax],"$ab")
u=H.c([],[F.a4])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.cw(t,q,p))}return u},
hu:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.ax],"$ab")
u=H.c([],[F.a4])
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
gm:function(a){return this.b.length},
au:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.t)(u),++r)if(!u[r].c_())s=!1
return s},
bZ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.t)(u),++r)if(!u[r].bY())s=!1
return s},
i:function(a){return this.K()},
A:function(a){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].A(a))
return C.a.l(r,"\n")},
K:function(){return this.A("")},
seK:function(a){this.b=H.m(a,"$ib",[F.a4],"$ab")}}
F.hT.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.K()},
A:function(a){var u,t,s=H.c([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
C.a.h(s,t[u].A(a+(""+u+". ")))}return C.a.l(s,"\n")},
K:function(){return this.A("")},
seQ:function(a){this.b=H.m(a,"$ib",[F.be],"$ab")}}
F.hU.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.K()},
A:function(a){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].A(a))
return C.a.l(r,"\n")},
K:function(){return this.A("")},
sbR:function(a){this.b=H.m(a,"$ib",[F.bG],"$ab")}}
F.ax.prototype={
c1:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.iJ(u.cx,r,o,t,s,q,p,a,n)},
hG:function(){return this.c1(null)},
saR:function(a){var u
if(!J.a3(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a0()}},
i_:function(a){var u,t,s=this
if(a.q(0,$.aO())){u=s.f
t=[P.C]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.bq())){u=s.r
t=[P.C]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.bp())){u=s.x
t=[P.C]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.bO())){u=s.y
t=[P.C]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.q(0,$.br())){u=s.z
t=[P.C]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.db())){u=s.Q
t=[P.C]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.dc())){u=s.Q
t=[P.C]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.ck()))return H.c([s.ch],[P.C])
else if(a.q(0,$.bo())){u=s.cx
t=[P.C]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.C])},
c_:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.e9()
t.d.J(0,new F.iR(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.a0()
s=t.a.e
if(s!=null)s.aA(0)}return!0},
bY:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.e9()
t.d.J(0,new F.iQ(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.a0()
s=t.a.e
if(s!=null)s.aA(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var u,t,s=this,r="-",q=H.c([],[P.h])
C.a.h(q,C.c.ag(J.as(s.e),0))
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
t=C.a.l(q,", ")
return a+"{"+t+"}"},
K:function(){return this.A("")}}
F.iR.prototype={
$1:function(a){var u,t
H.k(a,"$ia4")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:8}
F.iQ.prototype={
$1:function(a){var u,t
H.k(a,"$ia4")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:8}
F.iK.prototype={
Y:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.i(P.z("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a0()
return!0},
bh:function(a,b,c,d,e,f){var u=F.iJ(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gm:function(a){return this.c.length},
au:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)u[s].c_()
return!0},
bZ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)u[s].bY()
return!0},
hD:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a3(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.w(null)}}}}return!0},
i:function(a){return this.K()},
A:function(a){var u,t,s,r
this.Y()
u=H.c([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.t)(t),++r)C.a.h(u,t[r].A(a))
return C.a.l(u,"\n")},
K:function(){return this.A("")},
shr:function(a){this.c=H.m(a,"$ib",[F.ax],"$ab")}}
F.iL.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
J:function(a,b){var u=this
H.l(b,{func:1,ret:-1,args:[F.a4]})
C.a.J(u.b,b)
C.a.J(u.c,new F.iM(u,b))
C.a.J(u.d,new F.iN(u,b))},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].A(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].A(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].A(""))
return C.a.l(r,"\n")},
seL:function(a){this.b=H.m(a,"$ib",[F.a4],"$ab")},
seM:function(a){this.c=H.m(a,"$ib",[F.a4],"$ab")},
seN:function(a){this.d=H.m(a,"$ib",[F.a4],"$ab")}}
F.iM.prototype={
$1:function(a){H.k(a,"$ia4")
if(!J.a3(a.a,this.a))this.b.$1(a)},
$S:8}
F.iN.prototype={
$1:function(a){var u
H.k(a,"$ia4")
u=this.a
if(!J.a3(a.a,u)&&!J.a3(a.b,u))this.b.$1(a)},
$S:8}
F.iO.prototype={
gm:function(a){return this.b.length+this.c.length},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].A(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].A(""))
return C.a.l(r,"\n")},
seR:function(a){this.b=H.m(a,"$ib",[F.be],"$ab")},
seS:function(a){this.c=H.m(a,"$ib",[F.be],"$ab")}}
F.iP.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].A(""))
return C.a.l(r,"\n")},
sbR:function(a){this.b=H.m(a,"$ib",[F.bG],"$ab")}}
O.dE.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.L():u},
T:function(a){var u
H.k(a,"$ix")
u=this.fr
if(u!=null)u.w(a)},
aY:function(){return this.T(null)},
d2:function(a){H.k(a,"$ix")
this.a=null
this.T(a)},
h3:function(){return this.d2(null)},
f5:function(a,b){var u=V.al
H.m(b,"$ie",[u],"$ae")
u=new D.bC([u])
u.b=!0
this.T(u)},
f7:function(a,b){var u=V.al
H.m(b,"$ie",[u],"$ae")
u=new D.bD([u])
u.b=!0
this.T(u)},
cQ:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.p,h=new H.a0([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=h.j(0,0)
h.n(0,0,r==null?1:r)}q=H.c([],[A.aB])
h.J(0,new O.hd(j,q))
C.a.bv(q,new O.he())
p=new H.a0([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){o=u[s]
r=o.gb2()
n=p.j(0,o.gb2())
p.n(0,r,n==null?1:n)}m=H.c([],[A.aD])
p.J(0,new O.hf(j,m))
C.a.bv(m,new O.hg())
l=new H.a0([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.t)(i),++s){o=i[s]
t=o.gb2()
r=l.j(0,o.gb2())
l.n(0,t,r==null?1:r)}k=H.c([],[A.aE])
l.J(0,new O.hh(j,k))
C.a.bv(k,new O.hi())
i=C.e.a3(j.e.a.length+3,4)
j.dy.e
return A.mj(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
ab:function(a,b){H.m(a,"$ib",[T.cQ],"$ab")
if(b!=null)if(!C.a.P(a,b)){b.a=a.length
C.a.h(a,b)}},
aj:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.ak(u,u.length,[H.y(u,0)]);u.u();){t=u.d
t.toString
s=$.iI
if(s==null)s=$.iI=new V.M(0,0,1)
t.a=s
r=$.iH
t.d=r==null?$.iH=new V.M(0,1,0):r
r=$.iG
t.e=r==null?$.iG=new V.M(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.br(s)
r=s.a
p=s.b
o=s.c
t.a=s.t(0,Math.sqrt(r*r+p*p+o*o))
o=q.br(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.t(0,Math.sqrt(p*p+r*r+s*s))
s=q.br(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.t(0,Math.sqrt(r*r+p*p+o*o))}}}},
dP:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cQ()
u=H.k(b4.fr.j(0,b3.b4),"$idF")
if(u==null){u=A.mi(b3,b4.a)
b4.dc(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.bj
b3=b5.e
if(!(b3 instanceof Z.co))b3=b5.e=null
if(b3==null||!b3.d.q(0,s)){b3=t.k3
if(b3)b5.d.au()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.bZ()
q.a.bZ()
q=q.e
if(q!=null)q.aA(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.hD()
p=p.e
if(p!=null)p.aA(0)}n=b5.d.dg(new Z.eb(b4.a),s)
n.av($.aO()).e=b2.a.Q.c
if(b3)n.av($.bq()).e=b2.a.cx.c
if(r)n.av($.bp()).e=b2.a.ch.c
if(t.r1)n.av($.bO()).e=b2.a.cy.c
if(q)n.av($.br()).e=b2.a.db.c
if(t.rx)n.av($.bo()).e=b2.a.dx.c
b5.e=n}b3=T.cQ
m=H.c([],[b3])
b2.a.X(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.ga_(q)
r=r.dy
r.toString
r.ah(q.a9(0,!0))}if(t.fr){r=b2.a
q=b4.cx
if(q==null){q=b4.db
q=q.ga_(q)
p=b4.dx
p=b4.cx=q.v(0,p.ga_(p))
q=p}r=r.fr
r.toString
r.ah(q.a9(0,!0))}r=b2.a
q=b4.ch
if(q==null){q=b4.gii()
p=b4.dx
p=b4.ch=q.v(0,p.ga_(p))
q=p}r=r.fy
r.toString
r.ah(q.a9(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.ah(C.k.a9(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.ah(C.k.a9(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.ah(C.k.a9(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.b.bs(r.a,r.d,l)
for(r=[P.C],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.d(p,k)
p=p[k]
q.toString
H.k(p,"$ial")
q=q.r1
if(k>=q.length)return H.d(q,k)
q=q[k]
j=new Float32Array(H.d7(H.m(p.a9(0,!0),"$ib",r,"$ab")))
C.b.dY(q.a,q.d,!1,j)}}r=t.a
if(r.a){q=b2.a
p=b2.f.f
q=q.r2
C.b.U(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.ab(m,b2.f.e)
r=b2.a
q=b2.f.e
r.ad(r.ry,q)}if(t.id){r=t.b
if(r.a){q=b2.a
p=b2.r.f
q=q.x1
C.b.U(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.ab(m,b2.r.e)
r=b2.a
q=b2.r.e
r.ad(r.y1,q)}r=t.c
if(r.a){q=b2.a
p=b2.x.f
q=q.y2
C.b.U(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.ab(m,b2.x.e)
r=b2.a
q=b2.x.e
r.ad(r.bj,q)}r=t.d
if(r.a){q=b2.a
p=b2.y.f
q=q.dq
C.b.U(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.ab(m,b2.y.e)
r=b2.a
q=b2.y.e
r.ad(r.dr,q)}r=t.e
q=r.a
if(!q)p=r.c
else p=!0
if(p){p=b2.a
o=b2.z.ch
p=p.du
C.b.Z(p.a,p.d,o)}if(q){q=b2.a
p=b2.z.f
q=q.ds
C.b.U(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.ab(m,b2.z.e)
r=b2.a
q=b2.z.e
r.ad(r.dt,q)}r=t.z
if(r.length>0){q=b4.db
i=q.ga_(q)
q=P.p
h=new H.a0([q,q])
for(q=b2.dx.e,p=q.length,g=0;g<q.length;q.length===p||(0,H.t)(q),++g){f=q[g]
e=h.j(0,0)
if(e==null)e=0
h.n(0,0,e+1)
d=J.f8(b2.a.c4.j(0,0),e)
o=i.br(f.a)
c=o.a
b=o.b
a=o.c
a=o.t(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
o=a.b
a=a.c
C.b.U(b.a,b.d,c,o,a)
a=f.c
o=d.f
C.b.U(o.a,o.d,a.a,a.b,a.c)}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.t)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.c3.j(0,p)
C.b.bs(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.ga_(q)
q=P.p
a0=new H.a0([q,q])
for(q=b2.dx.f,p=q.length,o=[b3],c=[P.C],g=0;g<q.length;q.length===p||(0,H.t)(q),++g){f=q[g]
a1=f.gb2()
e=a0.j(0,a1)
if(e==null)e=0
a0.n(0,a1,e+1)
d=J.f8(b2.a.c6.j(0,a1),e)
a2=i.v(0,f.ga_(f))
b=f.ga_(f)
a=$.cH
b=b.co(a==null?$.cH=new V.ah(0,0,0):a)
a=d.b
C.b.U(a.a,a.d,b.a,b.b,b.c)
b=$.cH
b=a2.co(b==null?$.cH=new V.ah(0,0,0):b)
a=d.c
C.b.U(a.a,a.d,b.a,b.b,b.c)
b=f.gaQ(f)
a=d.e
C.b.U(a.a,a.d,b.a,b.b,b.c)
f.gaB()
b=a2.cb(0)
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
j=new Float32Array(H.d7(H.m(new V.dG(a,a3,a4,a5,a6,a7,a8,a9,b).a9(0,!0),"$ib",c,"$ab")))
C.b.dX(b0.a,b0.d,!1,j)
f.gaB()
b=f.gaB()
H.m(m,"$ib",o,"$ab")
if(!C.a.P(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gaB()
a=b.gb5(b)
if(a){a=d.f
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}f.gaU()
b=f.ge3()
a=d.x
a.toString
a3=b.ghM(b)
a4=b.ghN(b)
a5=b.ghO()
b=b.ghL()
C.b.dW(a.a,a.d,a3,a4,a5,b)
b=f.gaU()
if(!C.a.P(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gaU()
a=b.gb5(b)
if(a){a=d.r
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}if(f.ghR()){b=f.ghy()
a=d.y
C.b.Z(a.a,a.d,b)
b=f.ghz()
a=d.z
C.b.Z(a.a,a.d,b)
b=f.ghA()
a=d.Q
C.b.Z(a.a,a.d,b)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.t)(r),++g){p=r[g].a
l=a0.j(0,p)
if(l==null)l=0
p=b2.a.c5.j(0,p)
C.b.bs(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.ga_(q)
q=P.p
b1=new H.a0([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.t)(q),++g){f=q[g]
a1=f.gb2()
e=b1.j(0,a1)
if(e==null)e=0
b1.n(0,a1,e+1)
d=J.f8(b2.a.c8.j(0,a1),e)
o=f.gih(f)
c=d.b
C.b.U(c.a,c.d,o.a,o.b,o.c)
o=f.giA(f).iL()
c=d.c
C.b.U(c.a,c.d,o.a,o.b,o.c)
o=i.co(f.gih(f))
c=d.d
C.b.U(c.a,c.d,o.a,o.b,o.c)
o=f.gaQ(f)
c=d.e
C.b.U(c.a,c.d,o.a,o.b,o.c)
f.gaB()
o=f.gcp()
c=d.f
C.b.U(c.a,c.d,o.a,o.b,o.c)
o=f.gcm(f)
c=d.r
C.b.U(c.a,c.d,o.a,o.b,o.c)
o=f.giM()
c=d.x
C.b.Z(c.a,c.d,o)
o=f.giN()
c=d.y
C.b.Z(c.a,c.d,o)
f.gaB()
o=f.gaB()
H.m(m,"$ib",b3,"$ab")
if(!C.a.P(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gaB()
c=o.gb5(o)
if(c){c=d.dx
c.toString
b=o.gb5(o)
if(!b)c.a.uniform1i(c.d,0)
else{o=o.ghW(o)
c.a.uniform1i(c.d,o)}}f.gaU()
o=f.ge3()
c=d.z
c.toString
b=o.ghM(o)
a=o.ghN(o)
a3=o.ghO()
o=o.ghL()
C.b.dW(c.a,c.d,b,a,a3,o)
o=f.gaU()
if(!C.a.P(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gaU()
c=o.gb5(o)
if(c){c=d.dy
c.toString
b=o.gb5(o)
if(!b)c.a.uniform1i(c.d,0)
else{o=o.ghW(o)
c.a.uniform1i(c.d,o)}}if(f.giB()){o=f.giz()
c=d.Q
C.b.Z(c.a,c.d,o)
o=f.giy()
c=d.ch
C.b.Z(c.a,c.d,o)}if(f.ghR()){o=f.ghy()
c=d.cx
C.b.Z(c.a,c.d,o)
o=f.ghz()
c=d.cy
C.b.Z(c.a,c.d,o)
o=f.ghA()
c=d.db
C.b.Z(c.a,c.d,o)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.t)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.c7.j(0,q)
C.b.bs(q.a,q.d,l)}}}if(t.f.c){b2.ab(m,b2.Q.e)
b3=b2.a
r=b2.Q.e
b3.ad(b3.dv,r)}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.ga_(r).cb(0)}b3=b3.id
b3.toString
b3.ah(r.a9(0,!0))}if(t.cy){b2.ab(m,b2.ch)
b3=b2.a
r=b2.ch
b3.ad(b3.dw,r)
b3=t.r
if(b3.a){r=b2.a
q=b2.cx.f
r=r.dz
C.b.U(r.a,r.d,q.a,q.b,q.c)}if(b3.c){b2.ab(m,b2.cx.e)
b3=b2.a
r=b2.cx.e
b3.ad(b3.dA,r)}b3=t.x
r=b3.a
if(!r)q=b3.c
else q=!0
if(q){q=b2.a
p=b2.cy.ch
q=q.dB
C.b.Z(q.a,q.d,p)}if(r){r=b2.a
q=b2.cy.f
r=r.dC
C.b.U(r.a,r.d,q.a,q.b,q.c)}if(b3.c){b2.ab(m,b2.cy.e)
b3=b2.a
r=b2.cy.e
b3.ad(b3.dD,r)}}b3=t.y
r=b3.a
q=!r
if(q)p=b3.c
else p=!0
if(p){if(r){r=b2.a
p=b2.db.f
r=r.dE
C.b.Z(r.a,r.d,p)}if(b3.c){b2.ab(m,b2.db.e)
r=b2.a
p=b2.db.e
r.ad(r.dF,p)}r=b4.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].X(b4)
r=b5.e
r.X(b4)
r.a8(b4)
r.aC(b4)
if(q)b3=b3.c
else b3=!0
if(b3)b4.a.disable(3042)
for(b3=b4.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b3.activeTexture(33984+r.a)
b3.bindTexture(34067,null)}}r=b2.a
r.toString
b3.useProgram(null)
r.x.dm()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cQ().b4},
sex:function(a){this.e=H.m(a,"$ia_",[V.al],"$aa_")}}
O.hd.prototype={
$2:function(a,b){H.a1(a)
H.a1(b)
if(typeof b!=="number")return b.C()
return C.a.h(this.b,new A.aB(a,C.e.a3(b+3,4)*4))},
$S:10}
O.he.prototype={
$2:function(a,b){H.k(a,"$iaB")
H.k(b,"$iaB")
return J.jW(a.a,b.a)},
$S:41}
O.hf.prototype={
$2:function(a,b){H.a1(a)
H.a1(b)
if(typeof b!=="number")return b.C()
return C.a.h(this.b,new A.aD(a,C.e.a3(b+3,4)*4))},
$S:10}
O.hg.prototype={
$2:function(a,b){H.k(a,"$iaD")
H.k(b,"$iaD")
return J.jW(a.a,b.a)},
$S:42}
O.hh.prototype={
$2:function(a,b){H.a1(a)
H.a1(b)
if(typeof b!=="number")return b.C()
return C.a.h(this.b,new A.aE(a,C.e.a3(b+3,4)*4))},
$S:10}
O.hi.prototype={
$2:function(a,b){H.k(a,"$iaE")
H.k(b,"$iaE")
return J.jW(a.a,b.a)},
$S:43}
O.h7.prototype={
as:function(){var u,t=this
t.cz()
u=t.f
if(!(Math.abs(u-1)<$.Q().a)){t.f=1
u=new D.K(t.b,u,1,[P.C])
u.b=!0
t.a.T(u)}}}
O.cB.prototype={
T:function(a){return this.a.T(H.k(a,"$ix"))},
aY:function(){return this.T(null)},
as:function(){},
bU:function(a){var u,t,s=this
if(!s.c.q(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.as()
u=s.a
u.a=null
u.T(null)}},
saR:function(a){var u,t=this,s=t.c
if(!s.c)t.bU(new A.ae(s.a,!1,!0))
s=t.e
if(s!==a){if(s!=null)s.gp().R(0,t.gaL())
u=t.e
t.e=a
a.gp().h(0,t.gaL())
s=new D.K(t.b+".textureCube",u,t.e,[T.c6])
s.b=!0
t.a.T(s)}}}
O.h8.prototype={}
O.aY.prototype={
d4:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.K(s.b+".color",u,a,[V.a2])
t.b=!0
s.a.T(t)}},
as:function(){this.cz()
this.d4(new V.a2(1,1,1))},
saQ:function(a,b){this.bU(new A.ae(!0,!1,this.c.c))
this.d4(b)}}
O.ha.prototype={}
O.hb.prototype={
as:function(){var u,t=this
t.cA()
u=t.ch
if(!(Math.abs(u-1)<$.Q().a)){t.ch=1
u=new D.K(t.b+".refraction",u,1,[P.C])
u.b=!0
t.a.T(u)}}}
O.hc.prototype={
d5:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.Q().a)){u.ch=a
t=new D.K(u.b+".shininess",t,a,[P.C])
t.b=!0
u.a.T(t)}},
as:function(){this.cA()
this.d5(100)}}
O.dS.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.L():u},
T:function(a){var u
H.k(a,"$ix")
u=this.e
if(u!=null)u.w(a)},
aY:function(){return this.T(null)},
dP:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.k(a.fr.j(0,n),"$idT")
if(u==null){t=a.a
u=new A.dT(t,n)
u.cB(t,n)
u.dG(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.q(u.y.j(0,"fov"),"$ia6")
u.ch=H.q(u.y.j(0,"ratio"),"$ia6")
u.cx=H.q(u.y.j(0,"boxClr"),"$iW")
u.cy=H.q(u.y.j(0,"boxTxt"),"$iad")
u.db=H.q(u.y.j(0,"viewMat"),"$iap")
a.dc(u)}o.a=u}if(b.e==null){t=b.d.dg(new Z.eb(a.a),$.aO())
t.av($.aO()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.X(a)}t=a.d
s=a.c
r=o.a
r.X(a)
q=o.b
p=r.Q
C.b.Z(p.a,p.d,q)
q=r.ch
C.b.Z(q.a,q.d,t/s)
s=o.c
r.cy.cu(s)
s=o.d
t=r.cx
C.b.U(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga_(s).cb(0)
r=r.db
r.toString
r.ah(s.a9(0,!0))
t=b.e
if(t instanceof Z.co){t.X(a)
t.a8(a)
t.aC(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.dm()
t=o.c
if(t!=null)t.aC(a)}}
O.bH.prototype={}
T.cQ.prototype={}
T.c6.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.L():u},
X:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
aC:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.ie.prototype={
dI:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.c6()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aK(u,k,r,34069,!1,!1)
t.aK(u,k,o,34070,!1,!1)
t.aK(u,k,q,34071,!1,!1)
t.aK(u,k,n,34072,!1,!1)
t.aK(u,k,p,34073,!1,!1)
t.aK(u,k,m,34074,!1,!1)
return u},
ce:function(a){return this.dI(a,".png")},
aK:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.n
W.a7(t,"load",H.l(new T.ig(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
h4:function(a,b,c){var u,t,s,r
b=V.ky(b)
u=V.ky(a.width)
t=V.ky(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.k_()
s.width=u
s.height=t
r=H.k(C.h.e_(s,"2d"),"$icp")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.nn(r.getImageData(0,0,s.width,s.height))}}}
T.ig.prototype={
$1:function(a){var u=this,t=u.a,s=t.h4(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.iq(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.hP()}++t.e},
$S:28}
V.bb.prototype={
ax:function(a,b){return!0},
i:function(a){return"all"},
$iat:1}
V.at.prototype={}
V.dD.prototype={
ax:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)if(u[s].ax(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.t)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa2:function(a){this.a=H.m(a,"$ib",[V.at],"$ab")},
$iat:1}
V.am.prototype={
ax:function(a,b){return!this.e8(0,b)},
i:function(a){return"!["+this.cw(0)+"]"}}
V.hI.prototype={
ax:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.ka(this.a),t=H.ka(this.b)
return u+".."+t},
$iat:1}
V.hR.prototype={
ed:function(a){var u,t
if(a.a.length<=0)throw H.i(P.z("May not create a SetMatcher with zero characters."))
u=new H.a0([P.p,P.O])
for(t=new H.cA(a,a.gm(a),[H.aj(a,"w",0)]);t.u();)u.n(0,t.d,!0)
this.sh7(u)},
ax:function(a,b){return this.a.dk(0,b)},
i:function(a){var u=this.a
return P.kc(new H.dz(u,[H.y(u,0)]))},
sh7:function(a){this.a=H.m(a,"$iG",[P.p,P.O],"$aG")},
$iat:1}
V.cL.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cS(this.a.k(0,b))
r.sa2(H.c([],[V.at]))
r.c=!1
C.a.h(this.c,r)
return r},
hS:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
if(r.ax(0,a))return r}return},
i:function(a){return this.b},
shp:function(a){this.c=H.m(a,"$ib",[V.cS],"$ab")}}
V.e_.prototype={
i:function(a){var u=H.kA(this.b,"\n","\\n"),t=H.kA(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cR.prototype={
az:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.h],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.t)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
sh0:function(a){var u=P.h
this.c=H.m(a,"$iG",[u,u],"$aG")}}
V.ij.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cL(this,b)
u.shp(H.c([],[V.cS]))
u.d=null
this.a.n(0,b,u)}return u},
L:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cR(a)
u=P.h
t.sh0(new H.a0([u,u]))
this.b.n(0,a,t)}return t},
dV:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.e_]),l=this.c,k=[P.p],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.c.aI(a,s)
q=l.hS(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.kc(j)
throw H.i(P.z("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.kc(j)
o=l.d
n=o.c.j(0,p)
t=new V.e_(n==null?o.b:n,p,s)}++s}}},
shf:function(a){this.a=H.m(a,"$iG",[P.h,V.cL],"$aG")},
shi:function(a){this.b=H.m(a,"$iG",[P.h,V.cR],"$aG")}}
V.cS.prototype={
i:function(a){return this.b.b+": "+this.cw(0)}}
X.bT.prototype={$ic0:1}
X.fM.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.L():u},
al:function(a){var u=this.x
if(u!=null)u.w(a)},
sdi:function(a,b){var u
if(this.b){this.b=!1
u=new D.K("clearColor",!0,!1,[P.O])
u.b=!0
this.al(u)}},
X:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.F(u)
q=C.d.ai(r*u)
r=s.b
if(typeof t!=="number")return H.F(t)
p=C.d.ai(r*t)
r=C.d.ai(s.c*u)
a.c=r
s=C.d.ai(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.fS.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.L():u},
X:function(a){var u
a.cy.bp(V.c_())
u=V.c_()
a.db.bp(u)},
aC:function(a){a.cy.ay()
a.db.ay()},
$ic0:1,
$ibT:1}
X.dM.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.L():u},
al:function(a){var u
H.k(a,"$ix")
u=this.f
if(u!=null)u.w(a)},
eq:function(){return this.al(null)},
X:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.aZ(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bp(k)
r=$.kX
if(r==null){r=V.kZ()
q=V.kf()
p=$.le
r=V.kS(r,q,p==null?$.le=new V.M(0,0,-1):p)
$.kX=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aS(0,a,s)
if(t!=null)u=t.v(0,u)}a.db.bp(u)},
aC:function(a){a.cy.ay()
a.db.ay()},
$ic0:1,
$ibT:1}
X.cO.prototype={}
V.bu.prototype={
bb:function(a){this.b=new P.fQ(C.H)
this.c=null
this.sbG(H.c([],[[P.b,W.aC]]))},
I:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.aC]))
u=a.split("\n")
for(l=u.length,t=[W.aC],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.I(q)
o=m.b.eC(q,0,q.length)
n=o==null?q:o
C.F.e2(p,H.kA(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gbl(m.d),p)}},
dO:function(a,b){var u,t,s,r,q=this
H.m(b,"$ib",[P.h],"$ab")
q.sbG(H.c([],[[P.b,W.aC]]))
u=C.a.l(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bi():t).dV(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.t)(t),++r)q.bo(t[r])},
sbG:function(a){this.d=H.m(a,"$ib",[[P.b,W.aC]],"$ab")}}
V.jT.prototype={
$1:function(a){var u
H.k(a,"$ib6")
u=C.d.dU(this.a.ghU(),2)
if(u!=="0.00")P.kz(u+" fps")},
$S:44}
V.fs.prototype={
bo:function(a){var u=this
switch(a.a){case"Class":u.I(a.b,"#551")
break
case"Comment":u.I(a.b,"#777")
break
case"Id":u.I(a.b,"#111")
break
case"Num":u.I(a.b,"#191")
break
case"Reserved":u.I(a.b,"#119")
break
case"String":u.I(a.b,"#171")
break
case"Symbol":u.I(a.b,"#616")
break
case"Type":u.I(a.b,"#B11")
break
case"Whitespace":u.I(a.b,"#111")
break}},
bi:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.ik()
a1.c=a1.k(0,r)
u=a1.k(0,r).l(0,q)
t=V.v(new H.r("_"))
C.a.h(u.a,t)
t=V.Y("a","z")
C.a.h(u.a,t)
t=V.Y("A","Z")
C.a.h(u.a,t)
t=a1.k(0,q).l(0,q)
u=V.v(new H.r("_"))
C.a.h(t.a,u)
u=V.Y("0","9")
C.a.h(t.a,u)
u=V.Y("a","z")
C.a.h(t.a,u)
u=V.Y("A","Z")
C.a.h(t.a,u)
u=a1.k(0,r).l(0,p)
t=V.Y("0","9")
C.a.h(u.a,t)
t=a1.k(0,p).l(0,p)
u=V.Y("0","9")
C.a.h(t.a,u)
u=a1.k(0,p).l(0,o)
t=V.v(new H.r("."))
C.a.h(u.a,t)
t=a1.k(0,o).l(0,n)
u=V.Y("0","9")
C.a.h(t.a,u)
u=a1.k(0,n).l(0,n)
t=V.Y("0","9")
C.a.h(u.a,t)
t=a1.k(0,r).l(0,m)
u=V.v(new H.r(l))
C.a.h(t.a,u)
u=a1.k(0,m).l(0,m)
t=V.v(new H.r(l))
C.a.h(u.a,t)
t=a1.k(0,r).l(0,k)
u=V.v(new H.r('"'))
C.a.h(t.a,u)
u=a1.k(0,k).l(0,j)
t=V.v(new H.r('"'))
C.a.h(u.a,t)
t=a1.k(0,k).l(0,i)
u=V.v(new H.r("\\"))
C.a.h(t.a,u)
u=a1.k(0,i).l(0,k)
t=V.v(new H.r('"'))
C.a.h(u.a,t)
C.a.h(a1.k(0,k).l(0,k).a,new V.bb())
t=a1.k(0,r).l(0,h)
u=V.v(new H.r("'"))
C.a.h(t.a,u)
u=a1.k(0,h).l(0,g)
t=V.v(new H.r("'"))
C.a.h(u.a,t)
t=a1.k(0,h).l(0,f)
u=V.v(new H.r("\\"))
C.a.h(t.a,u)
u=a1.k(0,f).l(0,h)
t=V.v(new H.r("'"))
C.a.h(u.a,t)
C.a.h(a1.k(0,h).l(0,h).a,new V.bb())
t=a1.k(0,r).l(0,e)
u=V.v(new H.r("/"))
C.a.h(t.a,u)
u=a1.k(0,e).l(0,d)
t=V.v(new H.r("/"))
C.a.h(u.a,t)
t=a1.k(0,d).l(0,c)
u=V.v(new H.r("\n"))
C.a.h(t.a,u)
u=a1.k(0,d).l(0,d)
t=new V.am()
s=[V.at]
t.sa2(H.c([],s))
C.a.h(u.a,t)
u=V.v(new H.r("\n"))
C.a.h(t.a,u)
u=a1.k(0,e).l(0,b)
t=V.v(new H.r("*"))
C.a.h(u.a,t)
t=a1.k(0,b).l(0,a)
u=V.v(new H.r("*"))
C.a.h(t.a,u)
u=a1.k(0,a).l(0,b)
t=new V.am()
t.sa2(H.c([],s))
C.a.h(u.a,t)
u=V.v(new H.r("*"))
C.a.h(t.a,u)
u=a1.k(0,a).l(0,c)
t=V.v(new H.r("/"))
C.a.h(u.a,t)
t=a1.k(0,r).l(0,a0)
u=V.v(new H.r(" \n\t"))
C.a.h(t.a,u)
u=a1.k(0,a0).l(0,a0)
t=V.v(new H.r(" \n\t"))
C.a.h(u.a,t)
t=a1.k(0,p)
t.d=t.a.L("Num")
t=a1.k(0,n)
t.d=t.a.L("Num")
t=a1.k(0,m)
t.d=t.a.L("Symbol")
t=a1.k(0,j)
t.d=t.a.L("String")
t=a1.k(0,g)
t.d=t.a.L("String")
t=a1.k(0,c)
t.d=t.a.L(d)
t=a1.k(0,a0)
t.d=t.a.L(a0)
t=a1.k(0,q)
t=t.d=t.a.L(q)
u=[P.h]
t.az(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.az(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.az(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fN.prototype={
bo:function(a){var u=this
switch(a.a){case"Builtin":u.I(a.b,"#411")
break
case"Comment":u.I(a.b,"#777")
break
case"Id":u.I(a.b,"#111")
break
case"Num":u.I(a.b,"#191")
break
case"Preprocess":u.I(a.b,"#737")
break
case"Reserved":u.I(a.b,"#119")
break
case"Symbol":u.I(a.b,"#611")
break
case"Type":u.I(a.b,"#171")
break
case"Whitespace":u.I(a.b,"#111")
break}},
bi:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.ik()
e.c=e.k(0,r)
u=e.k(0,r).l(0,q)
t=V.v(new H.r("_"))
C.a.h(u.a,t)
t=V.Y("a","z")
C.a.h(u.a,t)
t=V.Y("A","Z")
C.a.h(u.a,t)
t=e.k(0,q).l(0,q)
u=V.v(new H.r("_"))
C.a.h(t.a,u)
u=V.Y("0","9")
C.a.h(t.a,u)
u=V.Y("a","z")
C.a.h(t.a,u)
u=V.Y("A","Z")
C.a.h(t.a,u)
u=e.k(0,r).l(0,p)
t=V.Y("0","9")
C.a.h(u.a,t)
t=e.k(0,p).l(0,p)
u=V.Y("0","9")
C.a.h(t.a,u)
u=e.k(0,p).l(0,o)
t=V.v(new H.r("."))
C.a.h(u.a,t)
t=e.k(0,o).l(0,n)
u=V.Y("0","9")
C.a.h(t.a,u)
u=e.k(0,n).l(0,n)
t=V.Y("0","9")
C.a.h(u.a,t)
t=e.k(0,r).l(0,m)
u=V.v(new H.r(l))
C.a.h(t.a,u)
u=e.k(0,m).l(0,m)
t=V.v(new H.r(l))
C.a.h(u.a,t)
t=e.k(0,r).l(0,k)
u=V.v(new H.r("/"))
C.a.h(t.a,u)
u=e.k(0,k).l(0,j)
t=V.v(new H.r("/"))
C.a.h(u.a,t)
C.a.h(e.k(0,k).l(0,m).a,new V.bb())
t=e.k(0,j).l(0,i)
u=V.v(new H.r("\n"))
C.a.h(t.a,u)
u=e.k(0,j).l(0,j)
t=new V.am()
s=[V.at]
t.sa2(H.c([],s))
C.a.h(u.a,t)
u=V.v(new H.r("\n"))
C.a.h(t.a,u)
u=e.k(0,r).l(0,h)
t=V.v(new H.r("#"))
C.a.h(u.a,t)
t=e.k(0,h).l(0,h)
u=new V.am()
u.sa2(H.c([],s))
C.a.h(t.a,u)
t=V.v(new H.r("\n"))
C.a.h(u.a,t)
t=e.k(0,h).l(0,g)
u=V.v(new H.r("\n"))
C.a.h(t.a,u)
u=e.k(0,r).l(0,f)
t=V.v(new H.r(" \n\t"))
C.a.h(u.a,t)
t=e.k(0,f).l(0,f)
u=V.v(new H.r(" \n\t"))
C.a.h(t.a,u)
u=e.k(0,p)
u.d=u.a.L("Num")
u=e.k(0,n)
u.d=u.a.L("Num")
u=e.k(0,m)
u.d=u.a.L("Symbol")
u=e.k(0,i)
u.d=u.a.L(j)
u=e.k(0,g)
u.d=u.a.L(h)
u=e.k(0,f)
u.d=u.a.L(f)
u=e.k(0,q)
u=u.d=u.a.L(q)
t=[P.h]
u.az(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.az(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.az(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fO.prototype={
bo:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.I(a.b,"#911")
u.I("=",t)
break
case"Id":u.I(a.b,t)
break
case"Other":u.I(a.b,t)
break
case"Reserved":u.I(a.b,"#119")
break
case"String":u.I(a.b,"#171")
break
case"Symbol":u.I(a.b,"#616")
break}},
bi:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.ik()
l.c=l.k(0,s)
u=l.k(0,s).l(0,r)
t=V.v(new H.r("_"))
C.a.h(u.a,t)
t=V.Y("a","z")
C.a.h(u.a,t)
t=V.Y("A","Z")
C.a.h(u.a,t)
t=l.k(0,r).l(0,r)
u=V.v(new H.r("_"))
C.a.h(t.a,u)
u=V.Y("0","9")
C.a.h(t.a,u)
u=V.Y("a","z")
C.a.h(t.a,u)
u=V.Y("A","Z")
C.a.h(t.a,u)
u=l.k(0,r).l(0,q)
t=V.v(new H.r("="))
C.a.h(u.a,t)
u.c=!0
u=l.k(0,s).l(0,p)
t=V.v(new H.r("</\\-!>="))
C.a.h(u.a,t)
t=l.k(0,p).l(0,p)
u=V.v(new H.r("</\\-!>="))
C.a.h(t.a,u)
u=l.k(0,s).l(0,o)
t=V.v(new H.r('"'))
C.a.h(u.a,t)
t=l.k(0,o).l(0,n)
u=V.v(new H.r('"'))
C.a.h(t.a,u)
u=l.k(0,o).l(0,"EscStr")
t=V.v(new H.r("\\"))
C.a.h(u.a,t)
t=l.k(0,"EscStr").l(0,o)
u=V.v(new H.r('"'))
C.a.h(t.a,u)
C.a.h(l.k(0,o).l(0,o).a,new V.bb())
C.a.h(l.k(0,s).l(0,m).a,new V.bb())
u=l.k(0,m).l(0,m)
t=new V.am()
t.sa2(H.c([],[V.at]))
C.a.h(u.a,t)
u=V.v(new H.r('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.Y("a","z")
C.a.h(t.a,u)
u=V.Y("A","Z")
C.a.h(t.a,u)
u=l.k(0,p)
u.d=u.a.L("Symbol")
u=l.k(0,n)
u.d=u.a.L("String")
u=l.k(0,r)
t=u.a.L(r)
u.d=t
t.az(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.k(0,q)
t.d=t.a.L(q)
t=l.k(0,m)
t.d=t.a.L(m)
return l}}
V.hD.prototype={
dO:function(a,b){H.m(b,"$ib",[P.h],"$ab")
this.sbG(H.c([],[[P.b,W.aC]]))
this.I(C.a.l(b,"\n"),"#111")},
bo:function(a){},
bi:function(){return}}
V.hV.prototype={
ee:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a7(q,"scroll",H.l(new V.hX(o),{func:1,ret:-1,args:[r]}),!1,r)},
da:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.h],"$ab")
this.h9()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.dV(C.a.hZ(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q){p=s[q]
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
if(H.nK(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.I(m[1])
l.textContent=H.I(m[0])
t.appendChild(l)}else{k=P.lk(C.r,n,C.i,!1)
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
dZ:function(a){var u,t,s,r=new V.fs("dart")
r.bb("dart")
u=new V.fN("glsl")
u.bb("glsl")
t=new V.fO("html")
t.bb("html")
s=C.a.hT(H.c([r,u,t],[V.bu]),new V.hY(a))
if(s!=null)return s
r=new V.hD("plain")
r.bb("plain")
return r},
d9:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.m(b0,"$ib",[P.h],"$ab")
u=H.c([],[P.p])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.kt(r).bw(r,"+")){C.a.n(b0,s,C.c.ap(r,1))
C.a.h(u,1)
t=!0}else if(C.c.bw(r,"-")){C.a.n(b0,s,C.c.ap(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.dZ(a8)
q.dO(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.lk(C.r,a7,C.i,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.kE()
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.t)(r),++a0)C.P.hw(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.t)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gO(r);a3.u();)c.appendChild(a3.gE(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
h9:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.ik()
u.c=u.k(0,q)
t=u.k(0,q).l(0,p)
s=V.v(new H.r("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).l(0,p)
s=new V.am()
r=[V.at]
s.sa2(H.c([],r))
C.a.h(t.a,s)
t=V.v(new H.r("*"))
C.a.h(s.a,t)
t=u.k(0,p).l(0,"BoldEnd")
s=V.v(new H.r("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,o)
s=V.v(new H.r("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,o).l(0,o)
s=new V.am()
s.sa2(H.c([],r))
C.a.h(t.a,s)
t=V.v(new H.r("_"))
C.a.h(s.a,t)
t=u.k(0,o).l(0,n)
s=V.v(new H.r("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,m)
s=V.v(new H.r("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,m).l(0,m)
s=new V.am()
s.sa2(H.c([],r))
C.a.h(t.a,s)
t=V.v(new H.r("`"))
C.a.h(s.a,t)
t=u.k(0,m).l(0,"CodeEnd")
s=V.v(new H.r("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,l)
s=V.v(new H.r("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,l).l(0,k)
s=V.v(new H.r("|"))
C.a.h(t.a,s)
s=u.k(0,l).l(0,j)
t=V.v(new H.r("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,l).l(0,l)
t=new V.am()
t.sa2(H.c([],r))
C.a.h(s.a,t)
s=V.v(new H.r("|]"))
C.a.h(t.a,s)
s=u.k(0,k).l(0,j)
t=V.v(new H.r("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).l(0,k)
t=new V.am()
t.sa2(H.c([],r))
C.a.h(s.a,t)
s=V.v(new H.r("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).l(0,i).a,new V.bb())
s=u.k(0,i).l(0,i)
t=new V.am()
t.sa2(H.c([],r))
C.a.h(s.a,t)
s=V.v(new H.r("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.L(p)
s=u.k(0,n)
s.d=s.a.L(o)
s=u.k(0,"CodeEnd")
s.d=s.a.L(m)
s=u.k(0,j)
s.d=s.a.L("Link")
s=u.k(0,i)
s.d=s.a.L(i)
this.b=u}}
V.hX.prototype={
$1:function(a){P.l9(C.j,new V.hW(this.a))},
$S:28}
V.hW.prototype={
$0:function(){var u=C.d.ai(document.documentElement.scrollTop),t=this.a.style,s=H.j(-0.01*u)+"px"
t.top=s},
$S:2}
V.hY.prototype={
$1:function(a){return H.k(a,"$ibu").a===this.a},
$S:45}
X.jQ.prototype={
$1:function(a){var u,t,s,r
H.k(a,"$ix")
u=this.a
t=this.b
s=t.a
r=[P.h]
u.d9("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.d9("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:7};(function aliases(){var u=J.a.prototype
u.e5=u.i
u=J.dw.prototype
u.e7=u.i
u=P.e.prototype
u.e6=u.bt
u=W.R.prototype
u.bx=u.ae
u=W.eG.prototype
u.e9=u.an
u=O.cB.prototype
u.cz=u.as
u=O.aY.prototype
u.cA=u.as
u=V.dD.prototype
u.e8=u.ax
u.cw=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"nh","mF",9)
u(P,"ni","mG",9)
u(P,"nj","mH",9)
t(P,"lt","nf",3)
s(W,"nv",4,null,["$4"],["mJ"],22,0)
s(W,"nw",4,null,["$4"],["mK"],22,0)
var m
r(m=E.ag.prototype,"gdM",0,0,null,["$1","$0"],["dN","i7"],0,0)
r(m,"gdK",0,0,null,["$1","$0"],["dL","i4"],0,0)
q(m,"gi2","i3",6)
q(m,"gi5","i6",6)
r(m=E.dZ.prototype,"gcD",0,0,null,["$1","$0"],["cF","cE"],0,0)
p(m,"gil","dQ",3)
o(m=X.e5.prototype,"gfk","fl",11)
o(m,"gf8","f9",11)
o(m,"gfe","ff",4)
o(m,"gfo","fp",20)
o(m,"gfm","fn",20)
o(m,"gft","fu",4)
o(m,"gfz","fA",4)
o(m,"gfi","fj",4)
o(m,"gfv","fw",4)
o(m,"gfg","fh",4)
o(m,"gfB","fC",36)
o(m,"gfD","fE",11)
o(m,"gfT","fU",12)
o(m,"gfP","fQ",12)
o(m,"gfR","fS",12)
r(D.bw.prototype,"gei",0,0,null,["$1","$0"],["aq","ej"],0,0)
r(m=D.dy.prototype,"gcX",0,0,null,["$1","$0"],["cY","fq"],0,0)
o(m,"gfF","fG",37)
q(m,"gf2","f3",13)
q(m,"gfJ","fK",13)
n(V.T.prototype,"gm","cc",23)
n(V.M.prototype,"gm","cc",23)
r(m=U.cy.prototype,"gaH",0,0,null,["$1","$0"],["M","a1"],0,0)
q(m,"gf0","f1",24)
q(m,"gfH","fI",24)
r(m=U.e6.prototype,"gaH",0,0,null,["$1","$0"],["M","a1"],0,0)
o(m,"gbJ","bK",1)
o(m,"gbL","bM",1)
o(m,"gbN","bO",1)
r(m=U.e7.prototype,"gaH",0,0,null,["$1","$0"],["M","a1"],0,0)
o(m,"gbJ","bK",1)
o(m,"gbL","bM",1)
o(m,"gbN","bO",1)
o(m,"geU","eV",1)
o(m,"geW","eX",1)
o(m,"ghn","ho",1)
o(m,"ghl","hm",1)
o(m,"ghj","hk",1)
o(U.e8.prototype,"geZ","f_",1)
r(m=M.dj.prototype,"gV",0,0,null,["$1","$0"],["W","aV"],0,0)
q(m,"gfL","fM",26)
q(m,"gfN","fO",26)
r(M.dl.prototype,"gV",0,0,null,["$1","$0"],["W","aV"],0,0)
r(m=M.dq.prototype,"gV",0,0,null,["$1","$0"],["W","aV"],0,0)
q(m,"gfa","fb",6)
q(m,"gfc","fd",6)
r(m=O.dE.prototype,"gaL",0,0,null,["$1","$0"],["T","aY"],0,0)
r(m,"gh2",0,0,null,["$1","$0"],["d2","h3"],0,0)
q(m,"gf4","f5",27)
q(m,"gf6","f7",27)
r(O.cB.prototype,"gaL",0,0,null,["$1","$0"],["T","aY"],0,0)
r(O.dS.prototype,"gaL",0,0,null,["$1","$0"],["T","aY"],0,0)
r(X.dM.prototype,"gep",0,0,null,["$1","$0"],["al","eq"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.P,null)
s(P.P,[H.k8,J.a,J.ak,P.et,P.e,H.cA,P.aV,H.bW,H.e4,H.iq,P.by,H.cq,H.eL,P.aa,H.fZ,H.h_,H.fV,P.eR,P.ba,P.aH,P.ec,P.i4,P.cN,P.i5,P.b6,P.af,P.jA,P.jo,P.cb,P.es,P.w,P.cr,P.fR,P.jy,P.O,P.aA,P.a8,P.bx,P.hB,P.dW,P.ek,P.fL,P.bz,P.b,P.G,P.N,P.ao,P.h,P.bj,W.fo,W.bK,W.D,W.dK,W.eG,W.jt,W.ds,W.av,W.jn,W.eX,P.eW,P.ji,O.a_,O.cC,E.fh,E.ag,E.hJ,E.dZ,Z.ea,Z.eb,Z.co,Z.bB,Z.bl,D.fk,D.bV,D.x,X.di,X.dx,X.fX,X.h1,X.au,X.hp,X.il,X.e5,D.bw,D.a9,D.dN,D.dV,V.a2,V.az,V.fC,V.dG,V.al,V.a5,V.ah,V.bi,V.dP,V.T,V.M,U.e6,U.e7,U.e8,M.dl,M.dq,M.aw,A.de,A.fc,A.ae,A.aB,A.aD,A.aE,A.h9,A.c7,A.c8,A.ca,A.e1,A.iy,F.a4,F.be,F.bG,F.dR,F.hS,F.hT,F.hU,F.ax,F.iK,F.iL,F.iO,F.iP,O.bH,O.cB,O.ha,T.ie,V.bb,V.at,V.dD,V.hI,V.hR,V.cL,V.e_,V.cR,V.ij,X.bT,X.cO,X.fS,X.dM,V.bu,V.hV])
s(J.a,[J.fU,J.dv,J.dw,J.aW,J.bY,J.bE,H.cF,W.f,W.f9,W.df,W.cp,W.aR,W.aS,W.S,W.ee,W.ft,W.fu,W.eg,W.dp,W.ei,W.fw,W.n,W.el,W.aU,W.fP,W.eo,W.bA,W.dB,W.hj,W.eu,W.ev,W.b_,W.ew,W.ez,W.b0,W.eD,W.eF,W.b3,W.eH,W.b4,W.eM,W.aK,W.eP,W.ii,W.b7,W.eS,W.io,W.iD,W.eY,W.f_,W.f1,W.f3,W.f5,P.bd,P.eq,P.bg,P.eB,P.hG,P.eN,P.bk,P.eU,P.fd,P.ed,P.dg,P.dO,P.c4,P.dQ,P.dY,P.e2,P.eJ])
s(J.dw,[J.hC,J.bJ,J.bF])
t(J.k7,J.aW)
s(J.bY,[J.du,J.dt])
t(P.h0,P.et)
s(P.h0,[H.e3,W.j_,W.ai,P.fH])
t(H.r,H.e3)
s(P.e,[H.fz,H.h4,H.cV])
s(H.fz,[H.bZ,H.dz])
s(P.aV,[H.h5,H.iT])
t(H.h6,H.bZ)
s(P.by,[H.hy,H.fW,H.iB,H.is,H.fj,H.hP,P.fb,P.dL,P.aJ,P.iC,P.iA,P.cM,P.fm,P.fr])
s(H.cq,[H.jV,H.ib,H.jM,H.jN,H.jO,P.iW,P.iV,P.iX,P.iY,P.jx,P.jw,P.j5,P.j9,P.j6,P.j7,P.j8,P.jc,P.jd,P.jb,P.ja,P.i6,P.i7,P.jG,P.jl,P.jk,P.jm,P.h3,P.fx,P.fy,W.fA,W.hl,W.hn,W.hO,W.i3,W.j4,W.hx,W.hw,W.jp,W.jq,W.jv,W.jz,P.jI,P.fI,P.fJ,P.ff,E.hK,E.hL,E.hM,E.ih,D.fD,D.fE,F.jB,F.iR,F.iQ,F.iM,F.iN,O.hd,O.he,O.hf,O.hg,O.hh,O.hi,T.ig,V.jT,V.hX,V.hW,V.hY,X.jQ])
s(H.ib,[H.i1,H.cm])
t(H.iU,P.fb)
t(P.h2,P.aa)
s(P.h2,[H.a0,W.iZ])
t(H.dH,H.cF)
s(H.dH,[H.cZ,H.d0])
t(H.d_,H.cZ)
t(H.cE,H.d_)
t(H.d1,H.d0)
t(H.dI,H.d1)
s(H.dI,[H.hq,H.hr,H.hs,H.ht,H.hu,H.dJ,H.hv])
t(P.jj,P.jA)
t(P.jh,P.jo)
t(P.cs,P.i5)
t(P.fB,P.cr)
s(P.cs,[P.fQ,P.iF])
t(P.iE,P.fB)
s(P.a8,[P.C,P.p])
s(P.aJ,[P.c3,P.fT])
s(W.f,[W.E,W.fG,W.b2,W.d2,W.b5,W.aL,W.d4,W.iS,W.cW,P.fg,P.bS])
s(W.E,[W.R,W.bt,W.cX])
s(W.R,[W.u,P.o])
s(W.u,[W.dd,W.fa,W.cl,W.bs,W.bU,W.aC,W.fK,W.cz,W.hQ,W.c5,W.dX,W.i9,W.ia,W.cP])
s(W.aR,[W.ct,W.fp,W.fq])
t(W.fn,W.aS)
t(W.cu,W.ee)
t(W.eh,W.eg)
t(W.dn,W.eh)
t(W.ej,W.ei)
t(W.fv,W.ej)
t(W.aT,W.df)
t(W.em,W.el)
t(W.fF,W.em)
t(W.ep,W.eo)
t(W.bX,W.ep)
t(W.bI,W.n)
s(W.bI,[W.aX,W.ab,W.aM])
t(W.hk,W.eu)
t(W.hm,W.ev)
t(W.ex,W.ew)
t(W.ho,W.ex)
t(W.eA,W.ez)
t(W.cG,W.eA)
t(W.eE,W.eD)
t(W.hE,W.eE)
t(W.hN,W.eF)
t(W.d3,W.d2)
t(W.hZ,W.d3)
t(W.eI,W.eH)
t(W.i_,W.eI)
t(W.i2,W.eM)
t(W.eQ,W.eP)
t(W.ic,W.eQ)
t(W.d5,W.d4)
t(W.id,W.d5)
t(W.eT,W.eS)
t(W.im,W.eT)
t(W.b9,W.ab)
t(W.eZ,W.eY)
t(W.j0,W.eZ)
t(W.ef,W.dp)
t(W.f0,W.f_)
t(W.je,W.f0)
t(W.f2,W.f1)
t(W.ey,W.f2)
t(W.f4,W.f3)
t(W.jr,W.f4)
t(W.f6,W.f5)
t(W.js,W.f6)
t(W.j1,W.iZ)
t(W.j2,P.i4)
t(W.kh,W.j2)
t(W.j3,P.cN)
t(W.ju,W.eG)
t(P.an,P.ji)
t(P.er,P.eq)
t(P.fY,P.er)
t(P.eC,P.eB)
t(P.hz,P.eC)
t(P.cJ,P.o)
t(P.eO,P.eN)
t(P.i8,P.eO)
t(P.eV,P.eU)
t(P.ip,P.eV)
t(P.fe,P.ed)
t(P.hA,P.bS)
t(P.eK,P.eJ)
t(P.i0,P.eK)
s(E.fh,[Z.dh,A.cK,T.cQ])
s(D.x,[D.bC,D.bD,D.K,X.hF])
s(X.hF,[X.dC,X.bf,X.cD,X.e0])
s(O.a_,[D.dy,U.cy,M.dj])
s(D.fk,[U.fl,U.ac])
t(U.dk,U.ac)
s(A.cK,[A.dF,A.dT])
s(A.e1,[A.aF,A.iv,A.iw,A.ix,A.it,A.a6,A.iu,A.W,A.cT,A.iz,A.cU,A.ap,A.c9,A.ad])
s(O.bH,[O.dE,O.dS])
s(O.cB,[O.h7,O.h8,O.aY])
s(O.aY,[O.hb,O.hc])
t(T.c6,T.cQ)
s(V.dD,[V.am,V.cS])
t(X.fM,X.cO)
s(V.bu,[V.fs,V.fN,V.fO,V.hD])
u(H.e3,H.e4)
u(H.cZ,P.w)
u(H.d_,H.bW)
u(H.d0,P.w)
u(H.d1,H.bW)
u(P.et,P.w)
u(W.ee,W.fo)
u(W.eg,P.w)
u(W.eh,W.D)
u(W.ei,P.w)
u(W.ej,W.D)
u(W.el,P.w)
u(W.em,W.D)
u(W.eo,P.w)
u(W.ep,W.D)
u(W.eu,P.aa)
u(W.ev,P.aa)
u(W.ew,P.w)
u(W.ex,W.D)
u(W.ez,P.w)
u(W.eA,W.D)
u(W.eD,P.w)
u(W.eE,W.D)
u(W.eF,P.aa)
u(W.d2,P.w)
u(W.d3,W.D)
u(W.eH,P.w)
u(W.eI,W.D)
u(W.eM,P.aa)
u(W.eP,P.w)
u(W.eQ,W.D)
u(W.d4,P.w)
u(W.d5,W.D)
u(W.eS,P.w)
u(W.eT,W.D)
u(W.eY,P.w)
u(W.eZ,W.D)
u(W.f_,P.w)
u(W.f0,W.D)
u(W.f1,P.w)
u(W.f2,W.D)
u(W.f3,P.w)
u(W.f4,W.D)
u(W.f5,P.w)
u(W.f6,W.D)
u(P.eq,P.w)
u(P.er,W.D)
u(P.eB,P.w)
u(P.eC,W.D)
u(P.eN,P.w)
u(P.eO,W.D)
u(P.eU,P.w)
u(P.eV,W.D)
u(P.ed,P.aa)
u(P.eJ,P.w)
u(P.eK,W.D)})();(function constants(){var u=hunkHelpers.makeConstList
C.o=W.bs.prototype
C.h=W.bU.prototype
C.F=W.aC.prototype
C.I=J.a.prototype
C.a=J.aW.prototype
C.J=J.dt.prototype
C.e=J.du.prototype
C.k=J.dv.prototype
C.d=J.bY.prototype
C.c=J.bE.prototype
C.K=J.bF.prototype
C.O=W.cG.prototype
C.t=J.hC.prototype
C.b=P.c4.prototype
C.P=W.c5.prototype
C.u=W.dX.prototype
C.n=J.bJ.prototype
C.v=W.b9.prototype
C.w=W.cW.prototype
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.x=function() {
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
C.C=function(getTagFallback) {
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
C.y=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.z=function(hooks) {
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
C.B=function(hooks) {
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
C.A=function(hooks) {
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
C.q=function(hooks) { return hooks; }

C.D=new P.hB()
C.i=new P.iE()
C.E=new P.iF()
C.f=new P.jj()
C.j=new P.bx(0)
C.G=new P.bx(5e6)
C.H=new P.fR("element",!0,!1,!1,!1)
C.L=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.M=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.N=H.c(u([]),[P.h])
C.r=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.p])
C.l=H.c(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.m=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])})()
var v={mangledGlobalNames:{p:"int",C:"double",a8:"num",h:"String",O:"bool",N:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.x]},{func:1,ret:-1,args:[D.x]},{func:1,ret:P.N},{func:1,ret:-1},{func:1,ret:-1,args:[W.ab]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[P.p,[P.e,E.ag]]},{func:1,ret:P.N,args:[D.x]},{func:1,ret:P.N,args:[F.a4]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.p,P.p]},{func:1,ret:-1,args:[W.n]},{func:1,ret:-1,args:[W.aM]},{func:1,ret:-1,args:[P.p,[P.e,D.a9]]},{func:1,args:[,]},{func:1,ret:P.O,args:[P.h]},{func:1,ret:P.O,args:[W.av]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:P.N,args:[,]},{func:1,ret:P.N,args:[,,]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:P.h,args:[P.p]},{func:1,ret:P.O,args:[W.R,P.h,P.h,W.bK]},{func:1,ret:P.C},{func:1,ret:-1,args:[P.p,[P.e,U.ac]]},{func:1,ret:P.O,args:[W.E]},{func:1,ret:-1,args:[P.p,[P.e,M.aw]]},{func:1,ret:-1,args:[P.p,[P.e,V.al]]},{func:1,ret:P.N,args:[W.n]},{func:1,args:[W.n]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[W.E,W.E]},{func:1,ret:W.R,args:[W.E]},{func:1,args:[,P.h]},{func:1,args:[P.h]},{func:1,ret:P.N,args:[,],opt:[P.ao]},{func:1,ret:-1,args:[W.b9]},{func:1,ret:P.O,args:[[P.e,D.a9]]},{func:1,ret:P.N,args:[F.ax,P.C,P.C]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,ret:[P.aH,,],args:[,]},{func:1,ret:P.p,args:[A.aB,A.aB]},{func:1,ret:P.p,args:[A.aD,A.aD]},{func:1,ret:P.p,args:[A.aE,A.aE]},{func:1,ret:P.N,args:[P.b6]},{func:1,ret:P.O,args:[V.bu]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.N,args:[P.a8]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aQ=0
$.cn=null
$.kF=null
$.kj=!1
$.lw=null
$.lr=null
$.lC=null
$.jJ=null
$.jP=null
$.kv=null
$.cc=null
$.d8=null
$.d9=null
$.kk=!1
$.Z=C.f
$.ar=[]
$.bc=null
$.k2=null
$.kL=null
$.kK=null
$.en=P.kO(P.h,P.bz)
$.kT=null
$.kY=null
$.cH=null
$.l4=null
$.ld=null
$.lf=null
$.iG=null
$.iH=null
$.iI=null
$.le=null
$.kX=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nT","lG",function(){return H.lv("_$dart_dartClosure")})
u($,"nU","kB",function(){return H.lv("_$dart_js")})
u($,"nY","lH",function(){return H.b8(H.ir({
toString:function(){return"$receiver$"}}))})
u($,"nZ","lI",function(){return H.b8(H.ir({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"o_","lJ",function(){return H.b8(H.ir(null))})
u($,"o0","lK",function(){return H.b8(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"o3","lN",function(){return H.b8(H.ir(void 0))})
u($,"o4","lO",function(){return H.b8(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"o2","lM",function(){return H.b8(H.lb(null))})
u($,"o1","lL",function(){return H.b8(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"o6","lQ",function(){return H.b8(H.lb(void 0))})
u($,"o5","lP",function(){return H.b8(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"on","kC",function(){return P.mE()})
u($,"op","lV",function(){return P.mt("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"oo","lU",function(){return P.kP(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"og","lT",function(){return Z.aG(0)})
u($,"oa","lR",function(){return Z.aG(511)})
u($,"oi","aO",function(){return Z.aG(1)})
u($,"oh","bq",function(){return Z.aG(2)})
u($,"oc","bp",function(){return Z.aG(4)})
u($,"oj","bO",function(){return Z.aG(8)})
u($,"ok","br",function(){return Z.aG(16)})
u($,"od","db",function(){return Z.aG(32)})
u($,"oe","dc",function(){return Z.aG(64)})
u($,"of","lS",function(){return Z.aG(96)})
u($,"ol","ck",function(){return Z.aG(128)})
u($,"ob","bo",function(){return Z.aG(256)})
u($,"nS","lF",function(){return new V.fC(1e-9)})
u($,"nR","Q",function(){return $.lF()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cF,ArrayBufferView:H.cF,Float32Array:H.cE,Float64Array:H.cE,Int16Array:H.hq,Int32Array:H.hr,Int8Array:H.hs,Uint16Array:H.ht,Uint32Array:H.hu,Uint8ClampedArray:H.dJ,CanvasPixelArray:H.dJ,Uint8Array:H.hv,HTMLAudioElement:W.u,HTMLBRElement:W.u,HTMLButtonElement:W.u,HTMLContentElement:W.u,HTMLDListElement:W.u,HTMLDataElement:W.u,HTMLDataListElement:W.u,HTMLDetailsElement:W.u,HTMLDialogElement:W.u,HTMLEmbedElement:W.u,HTMLFieldSetElement:W.u,HTMLHRElement:W.u,HTMLHeadElement:W.u,HTMLHeadingElement:W.u,HTMLHtmlElement:W.u,HTMLIFrameElement:W.u,HTMLInputElement:W.u,HTMLLIElement:W.u,HTMLLabelElement:W.u,HTMLLegendElement:W.u,HTMLLinkElement:W.u,HTMLMapElement:W.u,HTMLMediaElement:W.u,HTMLMenuElement:W.u,HTMLMetaElement:W.u,HTMLMeterElement:W.u,HTMLModElement:W.u,HTMLOListElement:W.u,HTMLObjectElement:W.u,HTMLOptGroupElement:W.u,HTMLOptionElement:W.u,HTMLOutputElement:W.u,HTMLParagraphElement:W.u,HTMLParamElement:W.u,HTMLPictureElement:W.u,HTMLPreElement:W.u,HTMLProgressElement:W.u,HTMLQuoteElement:W.u,HTMLScriptElement:W.u,HTMLShadowElement:W.u,HTMLSlotElement:W.u,HTMLSourceElement:W.u,HTMLSpanElement:W.u,HTMLStyleElement:W.u,HTMLTableCaptionElement:W.u,HTMLTableColElement:W.u,HTMLTextAreaElement:W.u,HTMLTimeElement:W.u,HTMLTitleElement:W.u,HTMLTrackElement:W.u,HTMLUListElement:W.u,HTMLUnknownElement:W.u,HTMLVideoElement:W.u,HTMLDirectoryElement:W.u,HTMLFontElement:W.u,HTMLFrameElement:W.u,HTMLFrameSetElement:W.u,HTMLMarqueeElement:W.u,HTMLElement:W.u,AccessibleNodeList:W.f9,HTMLAnchorElement:W.dd,HTMLAreaElement:W.fa,HTMLBaseElement:W.cl,Blob:W.df,HTMLBodyElement:W.bs,HTMLCanvasElement:W.bU,CanvasRenderingContext2D:W.cp,CDATASection:W.bt,CharacterData:W.bt,Comment:W.bt,ProcessingInstruction:W.bt,Text:W.bt,CSSNumericValue:W.ct,CSSUnitValue:W.ct,CSSPerspective:W.fn,CSSCharsetRule:W.S,CSSConditionRule:W.S,CSSFontFaceRule:W.S,CSSGroupingRule:W.S,CSSImportRule:W.S,CSSKeyframeRule:W.S,MozCSSKeyframeRule:W.S,WebKitCSSKeyframeRule:W.S,CSSKeyframesRule:W.S,MozCSSKeyframesRule:W.S,WebKitCSSKeyframesRule:W.S,CSSMediaRule:W.S,CSSNamespaceRule:W.S,CSSPageRule:W.S,CSSRule:W.S,CSSStyleRule:W.S,CSSSupportsRule:W.S,CSSViewportRule:W.S,CSSStyleDeclaration:W.cu,MSStyleCSSProperties:W.cu,CSS2Properties:W.cu,CSSImageValue:W.aR,CSSKeywordValue:W.aR,CSSPositionValue:W.aR,CSSResourceValue:W.aR,CSSURLImageValue:W.aR,CSSStyleValue:W.aR,CSSMatrixComponent:W.aS,CSSRotation:W.aS,CSSScale:W.aS,CSSSkew:W.aS,CSSTranslation:W.aS,CSSTransformComponent:W.aS,CSSTransformValue:W.fp,CSSUnparsedValue:W.fq,DataTransferItemList:W.ft,HTMLDivElement:W.aC,DOMException:W.fu,ClientRectList:W.dn,DOMRectList:W.dn,DOMRectReadOnly:W.dp,DOMStringList:W.fv,DOMTokenList:W.fw,Element:W.R,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.aT,FileList:W.fF,FileWriter:W.fG,HTMLFormElement:W.fK,Gamepad:W.aU,History:W.fP,HTMLCollection:W.bX,HTMLFormControlsCollection:W.bX,HTMLOptionsCollection:W.bX,ImageData:W.bA,HTMLImageElement:W.cz,KeyboardEvent:W.aX,Location:W.dB,MediaList:W.hj,MIDIInputMap:W.hk,MIDIOutputMap:W.hm,MimeType:W.b_,MimeTypeArray:W.ho,PointerEvent:W.ab,MouseEvent:W.ab,DragEvent:W.ab,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,DocumentType:W.E,Node:W.E,NodeList:W.cG,RadioNodeList:W.cG,Plugin:W.b0,PluginArray:W.hE,RTCStatsReport:W.hN,HTMLSelectElement:W.hQ,SourceBuffer:W.b2,SourceBufferList:W.hZ,SpeechGrammar:W.b3,SpeechGrammarList:W.i_,SpeechRecognitionResult:W.b4,Storage:W.i2,CSSStyleSheet:W.aK,StyleSheet:W.aK,HTMLTableCellElement:W.c5,HTMLTableDataCellElement:W.c5,HTMLTableHeaderCellElement:W.c5,HTMLTableElement:W.dX,HTMLTableRowElement:W.i9,HTMLTableSectionElement:W.ia,HTMLTemplateElement:W.cP,TextTrack:W.b5,TextTrackCue:W.aL,VTTCue:W.aL,TextTrackCueList:W.ic,TextTrackList:W.id,TimeRanges:W.ii,Touch:W.b7,TouchEvent:W.aM,TouchList:W.im,TrackDefaultList:W.io,CompositionEvent:W.bI,FocusEvent:W.bI,TextEvent:W.bI,UIEvent:W.bI,URL:W.iD,VideoTrackList:W.iS,WheelEvent:W.b9,Window:W.cW,DOMWindow:W.cW,Attr:W.cX,CSSRuleList:W.j0,ClientRect:W.ef,DOMRect:W.ef,GamepadList:W.je,NamedNodeMap:W.ey,MozNamedAttrMap:W.ey,SpeechRecognitionResultList:W.jr,StyleSheetList:W.js,SVGLength:P.bd,SVGLengthList:P.fY,SVGNumber:P.bg,SVGNumberList:P.hz,SVGPointList:P.hG,SVGScriptElement:P.cJ,SVGStringList:P.i8,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,SVGTransform:P.bk,SVGTransformList:P.ip,AudioBuffer:P.fd,AudioParamMap:P.fe,AudioTrackList:P.fg,AudioContext:P.bS,webkitAudioContext:P.bS,BaseAudioContext:P.bS,OfflineAudioContext:P.hA,WebGLBuffer:P.dg,WebGLProgram:P.dO,WebGL2RenderingContext:P.c4,WebGLShader:P.dQ,WebGLTexture:P.dY,WebGLUniformLocation:P.e2,SQLResultSetRowList:P.i0})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dH.$nativeSuperclassTag="ArrayBufferView"
H.cZ.$nativeSuperclassTag="ArrayBufferView"
H.d_.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.d0.$nativeSuperclassTag="ArrayBufferView"
H.d1.$nativeSuperclassTag="ArrayBufferView"
H.dI.$nativeSuperclassTag="ArrayBufferView"
W.d2.$nativeSuperclassTag="EventTarget"
W.d3.$nativeSuperclassTag="EventTarget"
W.d4.$nativeSuperclassTag="EventTarget"
W.d5.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.ly,[])
else X.ly([])})})()
//# sourceMappingURL=test.dart.js.map
