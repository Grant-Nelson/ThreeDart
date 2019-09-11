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
a[c]=function(){a[c]=function(){H.o_(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ky"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ky"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ky(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kg:function kg(){},
fW:function(){return new P.c5("No element")},
mr:function(){return new P.c5("Too many elements")},
mq:function(){return new P.c5("Too few elements")},
dU:function(a,b,c,d,e){H.l(a,"$ib",[e],"$ab")
H.m(d,{func:1,ret:P.p,args:[e,e]})
if(c-b<=32)H.mM(a,b,c,d,e)
else H.mL(a,b,c,d,e)},
mM:function(a,b,c,d,e){var u,t,s,r,q
H.l(a,"$ib",[e],"$ab")
H.m(d,{func:1,ret:P.p,args:[e,e]})
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
mL:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.l(a2,"$ib",[a6],"$ab")
H.m(a5,{func:1,ret:P.p,args:[a6,a6]})
u=C.d.a2(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.d.a2(a3+a4,2)
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
if(J.X(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.aa()
if(d<0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.n(a2,f,a2[h])
C.a.n(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.am()
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
if(typeof a1!=="number")return a1.am()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.am()
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
if(!J.X(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.d(a2,g)
if(!J.X(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
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
q:function q(a){this.a=a},
fA:function fA(){},
bY:function bY(){},
cA:function cA(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
h8:function h8(a,b,c){this.a=a
this.b=b
this.$ti=c},
h9:function h9(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ha:function ha(a,b,c){this.a=a
this.b=b
this.$ti=c},
cU:function cU(a,b,c){this.a=a
this.b=b
this.$ti=c},
j1:function j1(a,b,c){this.a=a
this.b=b
this.$ti=c},
bV:function bV(){},
e5:function e5(){},
e4:function e4(){},
ck:function(a){var u,t=H.I(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
nH:function(a){return v.types[H.a3(a)]},
nO:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.V(a).$iJ},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aQ(a)
if(typeof u!=="string")throw H.f(H.aH(a))
return u},
cH:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
c2:function(a){return H.my(a)+H.ku(H.bL(a),0,null)},
my:function(a){var u,t,s,r,q,p,o,n=J.V(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.I||!!n.$ibG){r=C.p(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.ck(t.length>1&&C.e.aF(t,0)===36?C.e.an(t,1):t)},
l7:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
mG:function(a){var u,t,s,r=H.c([],[P.p])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.aH(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.be(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.f(H.aH(s))}return H.l7(r)},
l8:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.aH(s))
if(s<0)throw H.f(H.aH(s))
if(s>65535)return H.mG(a)}return H.l7(a)},
ki:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.be(u,10))>>>0,56320|u&1023)}throw H.f(P.b3(a,0,1114111,null,null))},
c1:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mF:function(a){var u=H.c1(a).getFullYear()+0
return u},
mD:function(a){var u=H.c1(a).getMonth()+1
return u},
mz:function(a){var u=H.c1(a).getDate()+0
return u},
mA:function(a){var u=H.c1(a).getHours()+0
return u},
mC:function(a){var u=H.c1(a).getMinutes()+0
return u},
mE:function(a){var u=H.c1(a).getSeconds()+0
return u},
mB:function(a){var u=H.c1(a).getMilliseconds()+0
return u},
F:function(a){throw H.f(H.aH(a))},
d:function(a,b){if(a==null)J.bQ(a)
throw H.f(H.cf(a,b))},
cf:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aI(!0,b,s,null)
u=H.a3(J.bQ(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.Y(b,a,s,null,u)
return P.dO(b,s)},
nC:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c3(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c3(a,c,!0,b,"end",u)
return new P.aI(!0,b,"end",null)},
aH:function(a){return new P.aI(!0,a,null,null)},
nx:function(a){if(typeof a!=="number")throw H.f(H.aH(a))
return a},
f:function(a){var u
if(a==null)a=new P.dK()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lQ})
u.name=""}else u.toString=H.lQ
return u},
lQ:function(){return J.aQ(this.dartException)},
C:function(a){throw H.f(a)},
x:function(a){throw H.f(P.bu(a))},
ba:function(a){var u,t,s,r,q,p
a=H.lP(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.i])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iv(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iw:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
li:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
l1:function(a,b){return new H.hD(a,b==null?null:b.method)},
kh:function(a,b){var u=b==null,t=u?null:b.method
return new H.fZ(a,t,u?null:b.receiver)},
ax:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.k3(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.be(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kh(H.j(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.l1(H.j(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.lT()
q=$.lU()
p=$.lV()
o=$.lW()
n=$.lZ()
m=$.m_()
l=$.lY()
$.lX()
k=$.m1()
j=$.m0()
i=r.ad(u)
if(i!=null)return f.$1(H.kh(H.I(u),i))
else{i=q.ad(u)
if(i!=null){i.method="call"
return f.$1(H.kh(H.I(u),i))}else{i=p.ad(u)
if(i==null){i=o.ad(u)
if(i==null){i=n.ad(u)
if(i==null){i=m.ad(u)
if(i==null){i=l.ad(u)
if(i==null){i=o.ad(u)
if(i==null){i=k.ad(u)
if(i==null){i=j.ad(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.l1(H.I(u),i))}}return f.$1(new H.iH(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dW()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aI(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dW()
return a},
ci:function(a){var u
if(a==null)return new H.eL(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eL(a)},
nF:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
nN:function(a,b,c,d,e,f){H.k(a,"$ibx")
switch(H.a3(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.A("Unsupported number of arguments for wrapped closure"))},
ce:function(a,b){var u
H.a3(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nN)
a.$identity=u
return u},
mj:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.i6().constructor.prototype):Object.create(new H.cn(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aR
if(typeof t!=="number")return t.p()
$.aR=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.kP(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.nH,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.kO:H.k7
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.f("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kP(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
mg:function(a,b,c,d){var u=H.k7
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kP:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mi(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mg(t,!r,u,b)
if(t===0){r=$.aR
if(typeof r!=="number")return r.p()
$.aR=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.co
return new Function(r+H.j(q==null?$.co=H.fj("self"):q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aR
if(typeof r!=="number")return r.p()
$.aR=r+1
o+=r
r="return function("+o+"){return this."
q=$.co
return new Function(r+H.j(q==null?$.co=H.fj("self"):q)+"."+H.j(u)+"("+o+");}")()},
mh:function(a,b,c,d){var u=H.k7,t=H.kO
switch(b?-1:a){case 0:throw H.f(H.mJ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mi:function(a,b){var u,t,s,r,q,p,o,n=$.co
if(n==null)n=$.co=H.fj("self")
u=$.kN
if(u==null)u=$.kN=H.fj("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mh(s,!q,t,b)
if(s===1){n="return function(){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+");"
u=$.aR
if(typeof u!=="number")return u.p()
$.aR=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+", "+o+");"
u=$.aR
if(typeof u!=="number")return u.p()
$.aR=u+1
return new Function(n+u+"}")()},
ky:function(a,b,c,d,e,f,g){return H.mj(a,b,H.a3(c),d,!!e,!!f,g)},
k7:function(a){return a.a},
kO:function(a){return a.c},
fj:function(a){var u,t,s,r=new H.cn("self","target","receiver","name"),q=J.ke(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
B:function(a){if(a==null)H.nt("boolean expression must not be null")
return a},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.aN(a,"String"))},
oG:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aN(a,"double"))},
lL:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aN(a,"num"))},
kv:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.aN(a,"bool"))},
a3:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.aN(a,"int"))},
lN:function(a,b){throw H.f(H.aN(a,H.ck(H.I(b).substring(2))))},
nU:function(a,b){throw H.f(H.mf(a,H.ck(H.I(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.V(a)[b])return a
H.lN(a,b)},
r:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.V(a)[b]
else u=!0
if(u)return a
H.nU(a,b)},
kD:function(a){if(a==null)return a
if(!!J.V(a).$ib)return a
throw H.f(H.aN(a,"List<dynamic>"))},
nP:function(a,b){var u
if(a==null)return a
u=J.V(a)
if(!!u.$ib)return a
if(u[b])return a
H.lN(a,b)},
lE:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a3(u)]
else return a.$S()}return},
f7:function(a,b){var u
if(typeof a=="function")return!0
u=H.lE(J.V(a))
if(u==null)return!1
return H.lv(u,null,b,null)},
m:function(a,b){var u,t
if(a==null)return a
if($.kr)return a
$.kr=!0
try{if(H.f7(a,b))return a
u=H.k_(b)
t=H.aN(a,u)
throw H.f(t)}finally{$.kr=!1}},
kz:function(a,b){if(a!=null&&!H.kx(a,b))H.C(H.aN(a,H.k_(b)))
return a},
aN:function(a,b){return new H.ix("TypeError: "+P.dn(a)+": type '"+H.lz(a)+"' is not a subtype of type '"+b+"'")},
mf:function(a,b){return new H.fk("CastError: "+P.dn(a)+": type '"+H.lz(a)+"' is not a subtype of type '"+b+"'")},
lz:function(a){var u,t=J.V(a)
if(!!t.$icr){u=H.lE(t)
if(u!=null)return H.k_(u)
return"Closure"}return H.c2(a)},
nt:function(a){throw H.f(new H.j2(a))},
o_:function(a){throw H.f(new P.fs(H.I(a)))},
mJ:function(a){return new H.hT(a)},
lH:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bL:function(a){if(a==null)return
return a.$ti},
oH:function(a,b,c){return H.cj(a["$a"+H.j(c)],H.bL(b))},
ch:function(a,b,c,d){var u
H.I(c)
H.a3(d)
u=H.cj(a["$a"+H.j(c)],H.bL(b))
return u==null?null:u[d]},
ak:function(a,b,c){var u
H.I(b)
H.a3(c)
u=H.cj(a["$a"+H.j(b)],H.bL(a))
return u==null?null:u[c]},
w:function(a,b){var u
H.a3(b)
u=H.bL(a)
return u==null?null:u[b]},
k_:function(a){return H.bK(a,null)},
bK:function(a,b){var u,t
H.l(b,"$ib",[P.i],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ck(a[0].name)+H.ku(a,1,b)
if(typeof a=="function")return H.ck(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a3(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.j(b[t])}if('func' in a)return H.n2(a,b)
if('futureOr' in a)return"FutureOr<"+H.bK("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
n2:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.i]
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
p=C.e.p(p,a0[n])
m=u[q]
if(m!=null&&m!==P.O)p+=" extends "+H.bK(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bK(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bK(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bK(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.nE(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.I(b[h])
j=j+i+H.bK(e[d],a0)+(" "+H.j(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
ku:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.i],"$ab")
if(a==null)return""
u=new P.bl("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bK(p,c)}return"<"+u.i(0)+">"},
cj:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
kw:function(a,b,c,d){var u,t
H.I(b)
H.kD(c)
H.I(d)
if(a==null)return!1
u=H.bL(a)
t=J.V(a)
if(t[b]==null)return!1
return H.lC(H.cj(t[d],u),null,c,null)},
l:function(a,b,c,d){H.I(b)
H.kD(c)
H.I(d)
if(a==null)return a
if(H.kw(a,b,c,d))return a
throw H.f(H.aN(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.ck(b.substring(2))+H.ku(c,0,null),v.mangledGlobalNames)))},
lC:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aG(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aG(a[t],b,c[t],d))return!1
return!0},
oE:function(a,b,c){return a.apply(b,H.cj(J.V(b)["$a"+H.j(c)],H.bL(b)))},
lJ:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="O"||a.name==="N"||a===-1||a===-2||H.lJ(u)}return!1},
kx:function(a,b){var u,t
if(a==null)return b==null||b.name==="O"||b.name==="N"||b===-1||b===-2||H.lJ(b)
if(b==null||b===-1||b.name==="O"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kx(a,"type" in b?b.type:null))return!0
if('func' in b)return H.f7(a,b)}u=J.V(a).constructor
t=H.bL(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aG(u,null,b,null)},
H:function(a,b){if(a!=null&&!H.kx(a,b))throw H.f(H.aN(a,H.k_(b)))
return a},
aG:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="O"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="O"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aG(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="N")return!0
if('func' in c)return H.lv(a,b,c,d)
if('func' in a)return c.name==="bx"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aG("type" in a?a.type:l,b,s,d)
else if(H.aG(a,b,s,d))return!0
else{if(!('$i'+"cx" in t.prototype))return!1
r=t.prototype["$a"+"cx"]
q=H.cj(r,u?a.slice(1):l)
return H.aG(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.lC(H.cj(m,u),b,p,d)},
lv:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aG(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aG(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aG(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aG(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.nS(h,b,g,d)},
nS:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aG(c[s],d,a[s],b))return!1}return!0},
oF:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
nQ:function(a){var u,t,s,r,q=H.I($.lI.$1(a)),p=$.jR[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jX[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.I($.lB.$2(a,q))
if(q!=null){p=$.jR[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jX[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jZ(u)
$.jR[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jX[q]=u
return u}if(s==="-"){r=H.jZ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lM(a,u)
if(s==="*")throw H.f(P.lj(q))
if(v.leafTags[q]===true){r=H.jZ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lM(a,u)},
lM:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kE(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jZ:function(a){return J.kE(a,!1,null,!!a.$iJ)},
nR:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jZ(u)
else return J.kE(u,c,null,null)},
nL:function(){if(!0===$.kC)return
$.kC=!0
H.nM()},
nM:function(){var u,t,s,r,q,p,o,n
$.jR=Object.create(null)
$.jX=Object.create(null)
H.nK()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lO.$1(q)
if(p!=null){o=H.nR(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nK:function(){var u,t,s,r,q,p,o=C.x()
o=H.cd(C.y,H.cd(C.z,H.cd(C.q,H.cd(C.q,H.cd(C.A,H.cd(C.B,H.cd(C.C(C.p),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lI=new H.jU(r)
$.lB=new H.jV(q)
$.lO=new H.jW(p)},
cd:function(a,b){return a(b)||b},
mt:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(new P.fN("Illegal RegExp pattern ("+String(r)+")",a))},
nX:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
nD:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lP:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kH:function(a,b,c){var u=H.nY(a,b,c)
return u},
nY:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lP(b),'g'),H.nD(c))},
iv:function iv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hD:function hD(a,b){this.a=a
this.b=b},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.c=c},
iH:function iH(a){this.a=a},
k3:function k3(a){this.a=a},
eL:function eL(a){this.a=a
this.b=null},
cr:function cr(){},
ih:function ih(){},
i6:function i6(){},
cn:function cn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ix:function ix(a){this.a=a},
fk:function fk(a){this.a=a},
hT:function hT(a){this.a=a},
j2:function j2(a){this.a=a},
a2:function a2(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
h2:function h2(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dx:function dx(a,b){this.a=a
this.$ti=b},
h3:function h3(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jU:function jU(a){this.a=a},
jV:function jV(a){this.a=a},
jW:function jW(a){this.a=a},
fY:function fY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d5:function(a){return a},
bJ:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.cf(b,a))},
n1:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.nC(a,b,c))
return b},
cE:function cE(){},
dG:function dG(){},
cD:function cD(){},
dH:function dH(){},
hu:function hu(){},
hv:function hv(){},
hw:function hw(){},
hx:function hx(){},
hy:function hy(){},
dI:function dI(){},
hz:function hz(){},
cY:function cY(){},
cZ:function cZ(){},
d_:function d_(){},
d0:function d0(){},
nE:function(a){return J.kV(a?Object.keys(a):[],null)},
nT:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kE:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
f8:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kC==null){H.nL()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.lj("Return interceptor for "+H.j(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kI()]
if(r!=null)return r
r=H.nQ(a)
if(r!=null)return r
if(typeof a=="function")return C.K
u=Object.getPrototypeOf(a)
if(u==null)return C.t
if(u===Object.prototype)return C.t
if(typeof s=="function"){Object.defineProperty(s,$.kI(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
ms:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.k6(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.b3(a,0,4294967295,"length",null))
return J.kV(new Array(a),b)},
kV:function(a,b){return J.ke(H.c(a,[b]))},
ke:function(a){H.kD(a)
a.fixed$length=Array
return a},
V:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ds.prototype
return J.dr.prototype}if(typeof a=="string")return J.bf.prototype
if(a==null)return J.dt.prototype
if(typeof a=="boolean")return J.fX.prototype
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.O)return a
return J.f8(a)},
nG:function(a){if(typeof a=="number")return J.bB.prototype
if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.O)return a
return J.f8(a)},
jS:function(a){if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.O)return a
return J.f8(a)},
jT:function(a){if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.O)return a
return J.f8(a)},
lF:function(a){if(typeof a=="number")return J.bB.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.bG.prototype
return a},
lG:function(a){if(typeof a=="number")return J.bB.prototype
if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.bG.prototype
return a},
kA:function(a){if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.bG.prototype
return a},
kB:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.O)return a
return J.f8(a)},
m7:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.nG(a).p(a,b)},
X:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.V(a).v(a,b)},
aP:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.lF(a).am(a,b)},
kK:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lG(a).w(a,b)},
m8:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.lF(a).t(a,b)},
f9:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nO(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jS(a).j(a,b)},
m9:function(a,b,c,d){return J.kB(a).hB(a,b,c,d)},
k4:function(a,b){return J.lG(a).hP(a,b)},
k5:function(a,b){return J.jT(a).E(a,b)},
ma:function(a,b){return J.jT(a).J(a,b)},
mb:function(a){return J.kB(a).ghL(a)},
bO:function(a){return J.V(a).gH(a)},
bP:function(a){return J.jT(a).gO(a)},
bQ:function(a){return J.jS(a).gm(a)},
kL:function(a){return J.jT(a).it(a)},
mc:function(a,b,c){return J.kA(a).b9(a,b,c)},
md:function(a){return J.kA(a).iF(a)},
aQ:function(a){return J.V(a).i(a)},
a:function a(){},
fX:function fX(){},
dt:function dt(){},
du:function du(){},
hH:function hH(){},
bG:function bG(){},
bg:function bg(){},
aJ:function aJ(a){this.$ti=a},
kf:function kf(a){this.$ti=a},
al:function al(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bB:function bB(){},
ds:function ds(){},
dr:function dr(){},
bf:function bf(){}},P={
mR:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.nu()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.ce(new P.j4(s),1)).observe(u,{childList:true})
return new P.j3(s,u,t)}else if(self.setImmediate!=null)return P.nv()
return P.nw()},
mS:function(a){self.scheduleImmediate(H.ce(new P.j5(H.m(a,{func:1,ret:-1})),0))},
mT:function(a){self.setImmediate(H.ce(new P.j6(H.m(a,{func:1,ret:-1})),0))},
mU:function(a){P.km(C.j,H.m(a,{func:1,ret:-1}))},
km:function(a,b){var u
H.m(b,{func:1,ret:-1})
u=C.d.a2(a.a,1000)
return P.n_(u<0?0:u,b)},
lh:function(a,b){var u
H.m(b,{func:1,ret:-1,args:[P.b8]})
u=C.d.a2(a.a,1000)
return P.n0(u<0?0:u,b)},
n_:function(a,b){var u=new P.eR()
u.eo(a,b)
return u},
n0:function(a,b){var u=new P.eR()
u.ep(a,b)
return u},
mV:function(a,b){var u,t,s
b.a=1
try{a.dT(new P.jf(b),new P.jg(b),null)}catch(s){u=H.ax(s)
t=H.ci(s)
P.nV(new P.jh(b,u,t))}},
lq:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iaF")
if(u>=4){t=b.bU()
b.a=a.a
b.c=a.c
P.cX(b,t)}else{t=H.k(b.c,"$ibc")
b.a=2
b.c=a
a.d4(t)}},
cX:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iaf")
g=g.b
r=s.a
q=s.b
g.toString
P.jM(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cX(h.a,b)}g=h.a
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
P.jM(i,i,g,r,q)
return}l=$.a_
if(l!=n)$.a_=n
else l=i
g=b.c
if(g===8)new P.jl(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jk(u,b,o).$0()}else if((g&2)!==0)new P.jj(h,u,b).$0()
if(l!=null)$.a_=l
g=u.b
if(!!J.V(g).$icx){if(g.a>=4){k=H.k(q.c,"$ibc")
q.c=null
b=q.bd(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.lq(g,q)
return}}j=b.b
k=H.k(j.c,"$ibc")
j.c=null
b=j.bd(k)
g=u.a
r=u.b
if(!g){H.H(r,H.w(j,0))
j.a=4
j.c=r}else{H.k(r,"$iaf")
j.a=8
j.c=r}h.a=j
g=j}},
np:function(a,b){if(H.f7(a,{func:1,args:[P.O,P.aq]}))return H.m(a,{func:1,ret:null,args:[P.O,P.aq]})
if(H.f7(a,{func:1,args:[P.O]}))return H.m(a,{func:1,ret:null,args:[P.O]})
throw H.f(P.k6(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
no:function(){var u,t
for(;u=$.cc,u!=null;){$.d7=null
t=u.b
$.cc=t
if(t==null)$.d6=null
u.a.$0()}},
ns:function(){$.ks=!0
try{P.no()}finally{$.d7=null
$.ks=!1
if($.cc!=null)$.kJ().$1(P.lD())}},
ly:function(a){var u=new P.ec(H.m(a,{func:1,ret:-1}))
if($.cc==null){$.cc=$.d6=u
if(!$.ks)$.kJ().$1(P.lD())}else $.d6=$.d6.b=u},
nr:function(a){var u,t,s
H.m(a,{func:1,ret:-1})
u=$.cc
if(u==null){P.ly(a)
$.d7=$.d6
return}t=new P.ec(a)
s=$.d7
if(s==null){t.b=u
$.cc=$.d7=t}else{t.b=s.b
$.d7=s.b=t
if(t.b==null)$.d6=t}},
nV:function(a){var u,t=null,s={func:1,ret:-1}
H.m(a,s)
u=$.a_
if(C.f===u){P.jO(t,t,C.f,a)
return}u.toString
P.jO(t,t,u,H.m(u.bX(a),s))},
lg:function(a,b){var u,t={func:1,ret:-1}
H.m(b,t)
u=$.a_
if(u===C.f){u.toString
return P.km(a,b)}return P.km(a,H.m(u.bX(b),t))},
mP:function(a,b){var u,t,s={func:1,ret:-1,args:[P.b8]}
H.m(b,s)
u=$.a_
if(u===C.f){u.toString
return P.lh(a,b)}t=u.di(b,P.b8)
$.a_.toString
return P.lh(a,H.m(t,s))},
jM:function(a,b,c,d,e){var u={}
u.a=d
P.nr(new P.jN(u,e))},
lw:function(a,b,c,d,e){var u,t
H.m(d,{func:1,ret:e})
t=$.a_
if(t===c)return d.$0()
$.a_=c
u=t
try{t=d.$0()
return t}finally{$.a_=u}},
lx:function(a,b,c,d,e,f,g){var u,t
H.m(d,{func:1,ret:f,args:[g]})
H.H(e,g)
t=$.a_
if(t===c)return d.$1(e)
$.a_=c
u=t
try{t=d.$1(e)
return t}finally{$.a_=u}},
nq:function(a,b,c,d,e,f,g,h,i){var u,t
H.m(d,{func:1,ret:g,args:[h,i]})
H.H(e,h)
H.H(f,i)
t=$.a_
if(t===c)return d.$2(e,f)
$.a_=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a_=u}},
jO:function(a,b,c,d){var u
H.m(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bX(d):c.hM(d,-1)
P.ly(d)},
j4:function j4(a){this.a=a},
j3:function j3(a,b,c){this.a=a
this.b=b
this.c=c},
j5:function j5(a){this.a=a},
j6:function j6(a){this.a=a},
eR:function eR(){this.c=0},
jG:function jG(a,b){this.a=a
this.b=b},
jF:function jF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bc:function bc(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aF:function aF(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
je:function je(a,b){this.a=a
this.b=b},
ji:function ji(a,b){this.a=a
this.b=b},
jf:function jf(a){this.a=a},
jg:function jg(a){this.a=a},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
jl:function jl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jm:function jm(a){this.a=a},
jk:function jk(a,b,c){this.a=a
this.b=b
this.c=c},
jj:function jj(a,b,c){this.a=a
this.b=b
this.c=c},
ec:function ec(a){this.a=a
this.b=null},
i9:function i9(){},
ib:function ib(a,b){this.a=a
this.b=b},
ic:function ic(a,b){this.a=a
this.b=b},
cL:function cL(){},
ia:function ia(){},
b8:function b8(){},
af:function af(a,b){this.a=a
this.b=b},
jJ:function jJ(){},
jN:function jN(a,b){this.a=a
this.b=b},
js:function js(){},
ju:function ju(a,b,c){this.a=a
this.b=b
this.c=c},
jt:function jt(a,b){this.a=a
this.b=b},
jv:function jv(a,b,c){this.a=a
this.b=b
this.c=c},
kW:function(a,b){return new H.a2([a,b])},
mu:function(a){return H.nF(a,new H.a2([null,null]))},
dy:function(a){return new P.jq([a])},
kq:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mZ:function(a,b,c){var u=new P.es(a,b,[c])
u.c=a.e
return u},
mp:function(a,b,c){var u,t
if(P.kt(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.i])
C.a.h($.as,a)
try{P.n3(a,u)}finally{if(0>=$.as.length)return H.d($.as,-1)
$.as.pop()}t=P.le(b,H.nP(u,"$ie"),", ")+c
return t.charCodeAt(0)==0?t:t},
kd:function(a,b,c){var u,t
if(P.kt(a))return b+"..."+c
u=new P.bl(b)
C.a.h($.as,a)
try{t=u
t.a=P.le(t.a,a,", ")}finally{if(0>=$.as.length)return H.d($.as,-1)
$.as.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kt:function(a){var u,t
for(u=$.as.length,t=0;t<u;++t)if(a===$.as[t])return!0
return!1},
n3:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.i],"$ab")
u=a.gO(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.A())return
r=H.j(u.gF(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.A()){if(s<=5)return
if(0>=b.length)return H.d(b,-1)
q=b.pop()
if(0>=b.length)return H.d(b,-1)
p=b.pop()}else{o=u.gF(u);++s
if(!u.A()){if(s<=4){C.a.h(b,H.j(o))
return}q=H.j(o)
if(0>=b.length)return H.d(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gF(u);++s
for(;u.A();o=n,n=m){m=u.gF(u);++s
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
kX:function(a,b){var u,t,s=P.dy(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t)s.h(0,H.H(a[t],b))
return s},
kZ:function(a){var u,t={}
if(P.kt(a))return"{...}"
u=new P.bl("")
try{C.a.h($.as,a)
u.a+="{"
t.a=!0
J.ma(a,new P.h7(t,u))
u.a+="}"}finally{if(0>=$.as.length)return H.d($.as,-1)
$.as.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jq:function jq(a){var _=this
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
h4:function h4(){},
v:function v(){},
h6:function h6(){},
h7:function h7(a,b){this.a=a
this.b=b},
ab:function ab(){},
jx:function jx(){},
et:function et(){},
cs:function cs(){},
ct:function ct(){},
fC:function fC(){},
fT:function fT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fS:function fS(a){this.a=a},
iK:function iK(){},
iL:function iL(){},
jH:function jH(a){this.b=0
this.c=a},
mo:function(a){if(a instanceof H.cr)return a.i(0)
return"Instance of '"+H.c2(a)+"'"},
mv:function(a,b,c){var u,t
H.H(b,c)
u=J.ms(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.l(u,"$ib",[c],"$ab")},
kY:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bP(a);u.A();)C.a.h(s,H.H(u.gF(u),c))
if(b)return s
return H.l(J.ke(s),"$ib",t,"$ab")},
kl:function(a){var u,t,s=P.p
H.l(a,"$ie",[s],"$ae")
if(a.constructor===Array){H.l(a,"$iaJ",[s],"$aaJ")
u=a.length
t=P.kk(0,null,u)
return H.l8(t<u?C.a.e5(a,0,t):a)}return P.mN(a,0,null)},
mN:function(a,b,c){var u,t,s
H.l(a,"$ie",[P.p],"$ae")
u=J.bP(a)
for(t=0;t<b;++t)if(!u.A())throw H.f(P.b3(b,0,t,null,null))
s=[]
for(;u.A();)s.push(u.gF(u))
return H.l8(s)},
mH:function(a){return new H.fY(a,H.mt(a,!1,!0,!1))},
le:function(a,b,c){var u=J.bP(b)
if(!u.A())return a
if(c.length===0){do a+=H.j(u.gF(u))
while(u.A())}else{a+=H.j(u.gF(u))
for(;u.A();)a=a+c+H.j(u.gF(u))}return a},
lu:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.l(a,"$ib",[P.p],"$ab")
if(c===C.i){u=$.m6().b
u=u.test(b)}else u=!1
if(u)return b
t=C.E.hQ(H.H(b,H.ak(c,"cs",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.ki(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mk:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
ml:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dj:function(a){if(a>=10)return""+a
return"0"+a},
kR:function(a,b){return new P.aU(1e6*b+1000*a)},
dn:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aQ(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mo(a)},
me:function(a){return new P.aI(!1,null,null,a)},
k6:function(a,b,c){return new P.aI(!0,a,b,c)},
dO:function(a,b){return new P.c3(null,null,!0,a,b,"Value not in range")},
b3:function(a,b,c,d,e){return new P.c3(b,c,!0,a,d,"Invalid value")},
kk:function(a,b,c){if(0>a||a>c)throw H.f(P.b3(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.b3(b,a,c,"end",null))
return b}return c},
kj:function(a,b){if(typeof a!=="number")return a.aa()
if(a<0)throw H.f(P.b3(a,0,null,b,null))},
Y:function(a,b,c,d,e){var u=H.a3(e==null?J.bQ(b):e)
return new P.fV(u,!0,a,c,"Index out of range")},
ae:function(a){return new P.iI(a)},
lj:function(a){return new P.iG(a)},
ld:function(a){return new P.c5(a)},
bu:function(a){return new P.fn(a)},
A:function(a){return new P.ek(a)},
kG:function(a){H.nT(a)},
P:function P(){},
ay:function ay(a,b){this.a=a
this.b=b},
z:function z(){},
aU:function aU(a){this.a=a},
fy:function fy(){},
fz:function fz(){},
bw:function bw(){},
fc:function fc(){},
dK:function dK(){},
aI:function aI(a,b,c,d){var _=this
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
fV:function fV(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iI:function iI(a){this.a=a},
iG:function iG(a){this.a=a},
c5:function c5(a){this.a=a},
fn:function fn(a){this.a=a},
hG:function hG(){},
dW:function dW(){},
fs:function fs(a){this.a=a},
ek:function ek(a){this.a=a},
fN:function fN(a,b){this.a=a
this.b=b},
bx:function bx(){},
p:function p(){},
e:function e(){},
aX:function aX(){},
b:function b(){},
G:function G(){},
N:function N(){},
a9:function a9(){},
O:function O(){},
aq:function aq(){},
i:function i(){},
bl:function bl(a){this.a=a},
nA:function(a){var u,t=J.V(a)
if(!!t.$iby){u=t.gdr(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eW(a.data,a.height,a.width)},
nz:function(a){if(a instanceof P.eW)return{data:a.a,height:a.b,width:a.c}
return a},
bn:function(a){var u,t,s,r,q
if(a==null)return
u=P.kW(P.i,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r){q=H.I(t[r])
u.n(0,q,a[q])}return u},
ny:function(a){var u={}
a.J(0,new P.jP(u))
return u},
eW:function eW(a,b,c){this.a=a
this.b=b
this.c=c},
jP:function jP(a){this.a=a},
fJ:function fJ(a,b){this.a=a
this.b=b},
fK:function fK(){},
fL:function fL(){},
jp:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mY:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jr:function jr(){},
ap:function ap(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bh:function bh(){},
h0:function h0(){},
bj:function bj(){},
hE:function hE(){},
hL:function hL(){},
cI:function cI(){},
id:function id(){},
o:function o(){},
bm:function bm(){},
iu:function iu(){},
eq:function eq(){},
er:function er(){},
eB:function eB(){},
eC:function eC(){},
eN:function eN(){},
eO:function eO(){},
eU:function eU(){},
eV:function eV(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(a){this.a=a},
fh:function fh(){},
bR:function bR(){},
hF:function hF(){},
ed:function ed(){},
dd:function dd(){},
dN:function dN(){},
c4:function c4(){},
dQ:function dQ(){},
dY:function dY(){},
e3:function e3(){},
i5:function i5(){},
eJ:function eJ(){},
eK:function eK(){}},W={
kM:function(){var u=document.createElement("a")
return u},
k8:function(){var u=document.createElement("canvas")
return u},
mm:function(a,b,c){var u=document.body,t=(u&&C.o).ac(u,a,b,c)
t.toString
u=W.E
u=new H.cU(new W.aj(t),H.m(new W.fB(),{func:1,ret:P.P,args:[u]}),[u])
return H.k(u.gaD(u),"$iS")},
mn:function(a){H.k(a,"$ih")
return"wheel"},
cw:function(a){var u,t,s,r="element tag unavailable"
try{u=J.kB(a)
t=u.gdS(a)
if(typeof t==="string")r=u.gdS(a)}catch(s){H.ax(s)}return r},
jo:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ls:function(a,b,c,d){var u=W.jo(W.jo(W.jo(W.jo(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a8:function(a,b,c,d,e){var u=W.lA(new W.jd(c),W.n)
if(u!=null&&!0)J.m9(a,b,u,!1)
return new W.jc(a,b,u,!1,[e])},
lr:function(a){var u=W.kM(),t=window.location
u=new W.bI(new W.jw(u,t))
u.eh(a)
return u},
mW:function(a,b,c,d){H.k(a,"$iS")
H.I(b)
H.I(c)
H.k(d,"$ibI")
return!0},
mX:function(a,b,c,d){var u,t,s
H.k(a,"$iS")
H.I(b)
H.I(c)
u=H.k(d,"$ibI").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
lt:function(){var u=P.i,t=P.kX(C.l,u),s=H.w(C.l,0),r=H.m(new W.jE(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.jD(t,P.dy(u),P.dy(u),P.dy(u),null)
t.en(null,new H.ha(C.l,r,[s,u]),q,null)
return t},
lA:function(a,b){var u
H.m(a,{func:1,ret:-1,args:[b]})
u=$.a_
if(u===C.f)return a
return u.di(a,b)},
t:function t(){},
fa:function fa(){},
da:function da(){},
fb:function fb(){},
cm:function cm(){},
dc:function dc(){},
br:function br(){},
bT:function bT(){},
cq:function cq(){},
bs:function bs(){},
cu:function cu(){},
fo:function fo(){},
T:function T(){},
cv:function cv(){},
fp:function fp(){},
aS:function aS(){},
aT:function aT(){},
fq:function fq(){},
fr:function fr(){},
fu:function fu(){},
aA:function aA(){},
fv:function fv(){},
dk:function dk(){},
dl:function dl(){},
fw:function fw(){},
fx:function fx(){},
j8:function j8(a,b){this.a=a
this.b=b},
S:function S(){},
fB:function fB(){},
n:function n(){},
h:function h(){},
aV:function aV(){},
fH:function fH(){},
fI:function fI(){},
fM:function fM(){},
aW:function aW(){},
fR:function fR(){},
bW:function bW(){},
by:function by(){},
cz:function cz(){},
aY:function aY(){},
dz:function dz(){},
hn:function hn(){},
ho:function ho(){},
hp:function hp(a){this.a=a},
hq:function hq(){},
hr:function hr(a){this.a=a},
b0:function b0(){},
hs:function hs(){},
ac:function ac(){},
aj:function aj(a){this.a=a},
E:function E(){},
cF:function cF(){},
b1:function b1(){},
hJ:function hJ(){},
hR:function hR(){},
hS:function hS(a){this.a=a},
hU:function hU(){},
b4:function b4(){},
i3:function i3(){},
b5:function b5(){},
i4:function i4(){},
b6:function b6(){},
i7:function i7(){},
i8:function i8(a){this.a=a},
aK:function aK(){},
c6:function c6(){},
dX:function dX(){},
ie:function ie(){},
ig:function ig(){},
cN:function cN(){},
b7:function b7(){},
aL:function aL(){},
ii:function ii(){},
ij:function ij(){},
io:function io(){},
b9:function b9(){},
aM:function aM(){},
is:function is(){},
it:function it(){},
bE:function bE(){},
iJ:function iJ(){},
j0:function j0(){},
bb:function bb(){},
cV:function cV(){},
cW:function cW(){},
j9:function j9(){},
ef:function ef(){},
jn:function jn(){},
ey:function ey(){},
jA:function jA(){},
jB:function jB(){},
j7:function j7(){},
ja:function ja(a){this.a=a},
jb:function jb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kp:function kp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jc:function jc(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jd:function jd(a){this.a=a},
bI:function bI(a){this.a=a},
D:function D(){},
dJ:function dJ(a){this.a=a},
hB:function hB(a){this.a=a},
hA:function hA(a,b,c){this.a=a
this.b=b
this.c=c},
eG:function eG(){},
jy:function jy(){},
jz:function jz(){},
jD:function jD(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jE:function jE(){},
jC:function jC(){},
dq:function dq(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
av:function av(){},
jw:function jw(a,b){this.a=a
this.b=b},
eX:function eX(a){this.a=a},
jI:function jI(a){this.a=a},
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
d1:function d1(){},
d2:function d2(){},
eH:function eH(){},
eI:function eI(){},
eM:function eM(){},
eP:function eP(){},
eQ:function eQ(){},
d3:function d3(){},
d4:function d4(){},
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
k9:function(a){var u=new O.a0([a])
u.bb(a)
return u},
a0:function a0(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cB:function cB(){this.b=this.a=null},
dC:function dC(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hh:function hh(a,b){this.a=a
this.b=b},
hi:function hi(){},
hj:function hj(a,b){this.a=a
this.b=b},
hk:function hk(){},
hl:function hl(a,b){this.a=a
this.b=b},
hm:function hm(){},
hb:function hb(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dE:function dE(){},
hc:function hc(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aZ:function aZ(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
he:function he(){var _=this
_.e=_.d=_.c=_.b=null},
hf:function hf(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hg:function hg(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dS:function dS(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bD:function bD(){}},E={
kU:function(){var u=new E.ah()
u.a=""
u.b=!0
u.seg(0,O.k9(E.ah))
u.y.aP(u.gib(),u.gig())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sbt(0,null)
return u},
mI:function(a,b){var u=new E.hN(a)
u.ed(a,b)
return u},
mO:function(a,b,c,d,e){var u,t,s=J.V(a)
if(!!s.$ibT)return E.lf(a,!0,!0,!0,!1)
u=W.k8()
t=u.style
t.width="100%"
t.height="100%"
s.gdl(a).h(0,u)
return E.lf(u,!0,!0,!0,!1)},
lf:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.e_(),j=H.k(C.h.cu(a,"webgl2",P.mu(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic4")
if(j==null)H.C(P.A("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.mI(j,a)
u=new T.ik(j)
H.a3(j.getParameter(3379))
u.c=H.a3(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.e6(a)
t=new X.h_()
t.c=new X.au(!1,!1,!1)
t.sh_(P.dy(P.p))
u.b=t
t=new X.ht(u)
t.f=0
t.r=V.bk()
t.x=V.bk()
t.ch=t.Q=1
u.c=t
t=new X.h5(u)
t.r=0
t.x=V.bk()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ir(u)
t.f=V.bk()
t.r=V.bk()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seL(H.c([],[[P.cL,P.O]]))
t=u.z
s=document
r=W.ac
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a8(s,"contextmenu",H.m(u.gfg(),q),!1,r))
t=u.z
p=W.n
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a8(a,"focus",H.m(u.gfm(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a8(a,"blur",H.m(u.gfa(),o),!1,p))
t=u.z
n=W.aY
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a8(s,"keyup",H.m(u.gfq(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a8(s,"keydown",H.m(u.gfo(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a8(a,"mousedown",H.m(u.gfv(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a8(a,"mouseup",H.m(u.gfB(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a8(a,l,H.m(u.gfz(),q),!1,r))
n=u.z
m=W.bb;(n&&C.a).h(n,W.a8(a,H.I(W.mn(a)),H.m(u.gfD(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a8(s,l,H.m(u.gfi(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a8(s,"mouseup",H.m(u.gfk(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a8(s,"pointerlockchange",H.m(u.gfF(),o),!1,p))
p=u.z
o=W.aM
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a8(a,"touchstart",H.m(u.gfV(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a8(a,"touchend",H.m(u.gfR(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a8(a,"touchmove",H.m(u.gfT(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.ay(Date.now(),!1)
k.cy=0
k.d6()
return k},
fi:function fi(){},
ah:function ah(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hN:function hN(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hO:function hO(a){this.a=a},
hP:function hP(a){this.a=a},
hQ:function hQ(a){this.a=a},
e_:function e_(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
im:function im(a){this.a=a}},Z={
lp:function(a,b,c){var u
H.l(c,"$ib",[P.p],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.d5(c)),35044)
a.bindBuffer(b,null)
return new Z.ea(b,u)},
aE:function(a){return new Z.bH(a)},
ea:function ea(a,b){this.a=a
this.b=b},
de:function de(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
eb:function eb(a){this.a=a},
cp:function cp(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bX:function bX(a,b,c){this.a=a
this.b=b
this.c=c},
bH:function bH(a){this.a=a}},D={
L:function(){var u=new D.bU()
u.sab(null)
u.saJ(null)
u.c=null
u.d=0
return u},
fl:function fl(){},
bU:function bU(){var _=this
_.d=_.c=_.b=_.a=null},
fE:function fE(a){this.a=a},
fF:function fF(a){this.a=a},
y:function y(){this.b=null},
bz:function bz(a){this.b=null
this.$ti=a},
bA:function bA(a){this.b=null
this.$ti=a},
K:function K(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bv:function bv(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aa:function aa(){},
dw:function dw(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dM:function dM(){},
dV:function dV(){}},X={df:function df(a,b){this.a=a
this.b=b},dv:function dv(a,b){this.a=a
this.b=b},h_:function h_(){var _=this
_.d=_.c=_.b=_.a=null},dA:function dA(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h5:function h5(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},au:function au(a,b,c){this.a=a
this.b=b
this.c=c},bi:function bi(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},ht:function ht(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cC:function cC(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hK:function hK(){},e1:function e1(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ir:function ir(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},e6:function e6(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kc:function(a){var u=new X.fO(),t=new V.am(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.la
if(t==null){t=V.l9(0,0,1,1)
$.la=t}u.r=t
return u},
l3:function(a){var u,t,s=new X.dL()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gq().h(0,s.geq())
t=new D.K("mover",u,s.b,[U.ad])
t.b=!0
s.ai(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.Q().a)){s.c=1.0471975511965976
t=new D.K("fov",t,1.0471975511965976,[P.z])
t.b=!0
s.ai(t)}t=s.d
if(!(Math.abs(t-0.1)<$.Q().a)){s.d=0.1
t=new D.K("near",t,0.1,[P.z])
t.b=!0
s.ai(t)}t=s.e
if(!(Math.abs(t-2000)<$.Q().a)){s.e=2000
t=new D.K("far",t,2000,[P.z])
t.b=!0
s.ai(t)}return s},
bS:function bS(){},
fO:function fO(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fU:function fU(){this.b=this.a=null},
dL:function dL(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cM:function cM(){}},V={
o1:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.e0(a-b,u)
return(a<0?a+u:a)+b},
U:function(a,b,c){if(a==null)return C.e.ax("null",c)
return C.e.ax(C.c.dU(Math.abs(a-0)<$.Q().a?0:a,b),c+b+1)},
cg:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.z],"$ab")
u=H.c([],[P.i])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.x)(a),++r){q=V.U(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.d(u,p)
C.a.n(u,p,C.e.ax(u[p],s))}return u},
kF:function(a){return C.c.iC(Math.pow(2,C.J.cb(Math.log(H.nx(a))/Math.log(2))))},
bZ:function(){var u=$.l0
return u==null?$.l0=V.b_(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b_:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.an(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
l_:function(a,b,c){var u=c.u(0,Math.sqrt(c.B(c))),t=b.at(u),s=t.u(0,Math.sqrt(t.B(t))),r=u.at(s),q=new V.M(a.a,a.b,a.c),p=s.N(0).B(q),o=r.N(0).B(q),n=u.N(0).B(q)
return V.b_(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bk:function(){var u=$.l5
return u==null?$.l5=new V.a5(0,0):u},
l6:function(){var u=$.cG
return u==null?$.cG=new V.a4(0,0,0):u},
l9:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dP(a,b,c,d)},
cT:function(){var u=$.ln
return u==null?$.ln=new V.M(0,0,0):u},
mQ:function(){var u=$.iM
return u==null?$.iM=new V.M(-1,0,0):u},
ko:function(){var u=$.iN
return u==null?$.iN=new V.M(0,1,0):u},
lo:function(){var u=$.iO
return u==null?$.iO=new V.M(0,0,1):u},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fD:function fD(a){this.a=a},
dF:function dF(a,b,c,d,e,f,g,h,i){var _=this
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
a5:function a5(a,b){this.a=a
this.b=b},
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
b2:function b2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dP:function dP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
R:function R(a,b){this.a=a
this.b=b},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
Z:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.f(P.A("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.e.aF(a,0)
t=C.e.aF(b,0)
s=new V.hM()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
u:function(a){var u=new V.hV()
u.ee(a)
return u},
iq:function(){var u=new V.ip(),t=P.i
u.sho(new H.a2([t,V.cK]))
u.shr(new H.a2([t,V.cP]))
u.c=null
return u},
bd:function bd(){},
at:function at(){},
dB:function dB(){},
ao:function ao(){this.a=null},
hM:function hM(){this.b=this.a=null},
hV:function hV(){this.a=null},
cK:function cK(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e0:function e0(a,b,c){this.a=a
this.b=b
this.c=c},
cP:function cP(a){this.b=a
this.c=null},
ip:function ip(){this.c=this.b=this.a=null},
cQ:function cQ(a){this.b=a
this.a=this.c=null},
nW:function(a){P.mP(C.G,new V.k0(a))},
mK:function(a){var u=new V.hZ()
u.ef(a,!0)
return u},
bt:function bt(){},
k0:function k0(a){this.a=a},
ft:function ft(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fP:function fP(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fQ:function fQ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hI:function hI(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hZ:function hZ(){this.b=this.a=null},
i0:function i0(a){this.a=a},
i_:function i_(a){this.a=a},
i1:function i1(a){this.a=a}},U={
ka:function(){var u=new U.fm()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
kQ:function(a){var u=new U.dh()
u.a=a
return u},
fm:function fm(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dh:function dh(){this.b=this.a=null},
cy:function cy(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ad:function ad(){},
e7:function e7(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
e8:function e8(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e9:function e9(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dg:function dg(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},di:function di(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},dm:function dm(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aw:function aw(){}},A={
mw:function(a,b){var u=a.b0,t=new A.dD(b,u)
t.cD(b,u)
t.ec(a,b)
return t},
mx:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.l(a9,"$ib",[A.az],"$ab")
H.l(b0,"$ib",[A.aB],"$ab")
H.l(b1,"$ib",[A.aC],"$ab")
u="MaterialLight_"+a0.gah(a0)+a1.gah(a1)+a2.gah(a2)+a3.gah(a3)+a4.gah(a4)+a5.gah(a5)+a6.gah(a6)+a7.gah(a7)+a8.gah(a8)+"_"
u+=a?"1":"0"
u+=b?"1":"0"
u+=c?"1":"0"
u=u+"0_"+e
t=a9.length
if(t>0){u+="_Dir"
for(s=0;s<a9.length;a9.length===t||(0,H.x)(a9),++s)u+="_"+H.j(a9[s].a)}t=b0.length
if(t>0){u+="_Point"
for(s=0;s<b0.length;b0.length===t||(0,H.x)(b0),++s)u+="_"+H.j(b0[s].a)}t=b1.length
if(t>0){u+="_Spot"
for(s=0;s<b1.length;b1.length===t||(0,H.x)(b1),++s)u+="_"+H.j(b1[s].a)}for(t=a9.length,r=0,q=!1,s=0;s<t;++s,q=!0)r+=a9[s].b
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
f=$.aO()
if(j){t=$.bq()
f=new Z.bH(f.a|t.a)}if(i){t=$.bp()
f=new Z.bH(f.a|t.a)}if(h){t=$.bo()
f=new Z.bH(f.a|t.a)}return new A.hd(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,r,o,k,o,q,g,!0,!1,!1,n,q,l,j,i,!1,!1,h,!1,!1,c,!1,e,u.charCodeAt(0)==0?u:u,f)},
jK:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jL:function(a,b,c){var u
A.jK(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.k1(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
n7:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jK(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
n4:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jL(b,t,"ambient")
b.a+="\n"},
n5:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
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
n8:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
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
ne:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
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
na:function(a,b){var u,t,s
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
nc:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jK(b,t,"reflect")
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
nd:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jK(b,t,"refract")
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
n6:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.j(u)
s=A.k1(t)
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
r=[P.i]
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
nb:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.j(u)
s=A.k1(t)
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
c.a=r+"\n"}r=[P.i]
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
nf:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.j(u)
s=A.k1(t)
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
c.a=u+"\n"}u=[P.i]
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
n9:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.i])
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
ng:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.bl("")
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
A.n7(a,j)
A.n4(a,j)
A.n5(a,j)
A.n8(a,j)
A.ne(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.nc(a,j)
A.nd(a,j)}A.na(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.x)(q),++o)A.n6(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.x)(q),++o)A.nb(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.x)(q),++o)A.nf(a,q[o],j)
A.n9(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.c([],[P.i])
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
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.e.an(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.x)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.e.an(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.x)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.e.an(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
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
nh:function(a,b){var u,t,s
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
nj:function(a,b){var u
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
ni:function(a,b){var u
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
nl:function(a,b){var u,t
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
nm:function(a,b){var u,t
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
nk:function(a,b){var u
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
nn:function(a,b){var u
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
k1:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.e.an(a,1)},
kn:function(a,b,c,d,e){var u=new A.iz(a,c,e)
u.f=d
u.shz(P.mv(d,0,P.p))
return u},
db:function db(a,b,c){this.a=a
this.b=b
this.c=c},
fd:function fd(a){this.a=a},
ag:function ag(a,b,c){this.a=a
this.b=b
this.c=c},
dD:function dD(a,b){var _=this
_.iQ=_.iP=_.dw=_.dv=_.b0=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.j2=_.j1=_.j0=_.ca=_.c9=_.c8=_.c7=_.c6=_.c5=_.j_=_.iZ=_.dF=_.iY=_.iX=_.dE=_.dD=_.iW=_.iV=_.dC=_.dB=_.iU=_.iT=_.dA=_.iS=_.iR=_.dz=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
az:function az(a,b){this.a=a
this.b=b},
aB:function aB(a,b){this.a=a
this.b=b},
aC:function aC(a,b){this.a=a
this.b=b},
hd:function hd(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.b0=b3
_.dv=b4},
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
cJ:function cJ(){},
dT:function dT(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
e2:function e2(){},
iE:function iE(a){this.a=a},
aD:function aD(a,b,c){this.a=a
this.c=b
this.d=c},
iB:function iB(a,b,c){this.a=a
this.c=b
this.d=c},
iC:function iC(a,b,c){this.a=a
this.c=b
this.d=c},
iD:function iD(a,b,c){this.a=a
this.c=b
this.d=c},
iz:function iz(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a7:function a7(a,b,c){this.a=a
this.c=b
this.d=c},
iA:function iA(a,b,c){this.a=a
this.c=b
this.d=c},
W:function W(a,b,c){this.a=a
this.c=b
this.d=c},
cR:function cR(a,b,c){this.a=a
this.c=b
this.d=c},
iF:function iF(a,b,c){this.a=a
this.c=b
this.d=c},
cS:function cS(a,b,c){this.a=a
this.c=b
this.d=c},
ar:function ar(a,b,c){this.a=a
this.c=b
this.d=c},
c9:function c9(a,b,c){this.a=a
this.c=b
this.d=c},
bF:function bF(a,b,c){this.a=a
this.c=b
this.d=c}},F={
o0:function(){return F.nB(15,30,0.5,1,new F.k2())},
nB:function(a,b,c,d,e){var u=F.nZ(a,b,new F.jQ(H.m(e,{func:1,ret:V.a4,args:[P.z]}),d,b,c))
if(u==null)return
u.as()
u.ia(new F.iV(),new F.hC())
return u},
nZ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.m(c,{func:1,ret:-1,args:[F.ai,P.z,P.z]})
if(a<1)return
if(b<1)return
u=F.lc()
t=H.c([],[F.ai])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.iP(g,g,new V.am(p,0,0,1),g,g,new V.a5(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.dq(g))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.iP(g,g,new V.am(j,i,h,1),g,g,new V.a5(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.dq(g))}}u.d.hD(a+1,b+1,t)
return u},
dp:function(a,b,c){var u=new F.a6(),t=a.a
if(t==null)H.C(P.A("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.C(P.A("May not create a face with vertices attached to different shapes."))
u.he(a)
u.hf(b)
u.hg(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a7()
return u},
lc:function(){var u=new F.dR(),t=new F.iQ(u)
t.b=!1
t.shA(H.c([],[F.ai]))
u.a=t
t=new F.hY()
t.sbS(H.c([],[F.c0]))
u.b=t
t=new F.hX(u)
t.seS(H.c([],[F.bC]))
u.c=t
t=new F.hW(u)
t.seM(H.c([],[F.a6]))
u.d=t
u.e=null
return u},
iP:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ai(),r=new F.iY()
r.sbS(H.c([],[F.c0]))
s.b=r
r=new F.iU()
u=[F.bC]
r.seT(H.c([],u))
r.seU(H.c([],u))
s.c=r
r=new F.iR()
u=[F.a6]
r.seN(H.c([],u))
r.seO(H.c([],u))
r.seP(H.c([],u))
s.d=r
h=$.m2()
s.e=0
r=$.aO()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bq().a)!==0?e:t
s.x=(u&$.bp().a)!==0?b:t
s.y=(u&$.bM().a)!==0?f:t
s.z=(u&$.bN().a)!==0?g:t
s.Q=(u&$.m3().a)!==0?c:t
s.ch=(u&$.cl().a)!==0?i:0
s.cx=(u&$.bo().a)!==0?a:t
return s},
k2:function k2(){},
jQ:function jQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a6:function a6(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fG:function fG(){},
i2:function i2(){},
bC:function bC(){},
h1:function h1(){},
iy:function iy(){},
c0:function c0(){},
dR:function dR(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hW:function hW(a){this.a=a
this.b=null},
hX:function hX(a){this.a=a
this.b=null},
hY:function hY(){this.b=null},
ai:function ai(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j_:function j_(a){this.a=a},
iZ:function iZ(a){this.a=a},
iQ:function iQ(a){this.a=a
this.c=this.b=null},
iR:function iR(){this.d=this.c=this.b=null},
iS:function iS(a,b){this.a=a
this.b=b},
iT:function iT(a,b){this.a=a
this.b=b},
iU:function iU(){this.c=this.b=null},
iW:function iW(){},
iV:function iV(){},
iX:function iX(){},
hC:function hC(){},
iY:function iY(){this.b=null}},T={cO:function cO(){},dZ:function dZ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},ik:function ik(a){var _=this
_.a=a
_.e=_.d=_.c=null},il:function il(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},B={
lK:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="testCanvas",a6=null,a7="modifiers",a8=34067,a9=V.mK("Test 013"),b0=W.k8()
b0.className="pageLargeCanvas"
b0.id=a5
a9.a.appendChild(b0)
u=[P.i]
a9.df(H.c(["Test of sky box and cover pass."],u))
a9.df(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a5)
if(t==null)H.C(P.A("Failed to find an element with the identifier, testCanvas."))
s=E.mO(t,!0,!0,!0,!1)
r=new U.cy()
u=U.ad
r.bb(u)
r.aP(r.gf2(),r.gfJ())
r.e=null
r.f=V.bZ()
r.r=0
q=s.r
p=new U.e8()
o=U.ka()
o.sct(0,!0)
o.scf(6.283185307179586)
o.sci(0)
o.sa5(0,0)
o.scg(100)
o.sR(0)
o.sc2(0.5)
p.b=o
n=p.gaI()
o.gq().h(0,n)
o=U.ka()
o.sct(0,!0)
o.scf(6.283185307179586)
o.sci(0)
o.sa5(0,0)
o.scg(100)
o.sR(0)
o.sc2(0.5)
p.c=o
o.gq().h(0,n)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
m=new X.au(!1,!1,!1)
l=p.d
p.d=m
o=[X.au]
n=new D.K(a7,l,m,o)
n.b=!0
p.L(n)
n=p.f
if(n!==!1){p.f=!1
n=new D.K("invertX",n,!1,[P.P])
n.b=!0
p.L(n)}n=p.r
if(n!==!1){p.r=!1
n=new D.K("invertY",n,!1,[P.P])
n.b=!0
p.L(n)}p.aW(q)
r.h(0,p)
q=s.r
p=new U.e7()
n=U.ka()
n.sct(0,!0)
n.scf(6.283185307179586)
n.sci(0)
n.sa5(0,0)
n.scg(100)
n.sR(0)
n.sc2(0.2)
p.b=n
n.gq().h(0,p.gaI())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
m=new X.au(!0,!1,!1)
l=p.c
p.c=m
n=new D.K(a7,l,m,o)
n.b=!0
p.L(n)
p.aW(q)
r.h(0,p)
q=s.r
p=new U.e9()
p.c=0.01
p.e=p.d=0
m=new X.au(!1,!1,!1)
p.b=m
o=new D.K(a7,a6,m,o)
o.b=!0
p.L(o)
p.aW(q)
r.h(0,p)
r.h(0,U.kQ(V.b_(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
k=X.l3(r)
j=X.kc(a6)
if(j.b){j.b=!1
q=new D.K("clearColor",!0,!1,[P.P])
q.b=!0
j.ai(q)}i=E.kU()
i.sbt(0,F.o0())
h=new O.dC()
h.sez(O.k9(V.an))
h.e.aP(h.gf6(),h.gf8())
q=new O.aZ(h,"emission")
q.c=new A.ag(!1,!1,!1)
q.f=new V.a1(0,0,0)
h.f=q
q=new O.aZ(h,"ambient")
q.c=new A.ag(!1,!1,!1)
q.f=new V.a1(0,0,0)
h.r=q
q=new O.aZ(h,"diffuse")
q.c=new A.ag(!1,!1,!1)
q.f=new V.a1(0,0,0)
h.x=q
q=new O.aZ(h,"invDiffuse")
q.c=new A.ag(!1,!1,!1)
q.f=new V.a1(0,0,0)
h.y=q
q=new O.hg(h,"specular")
q.c=new A.ag(!1,!1,!1)
q.f=new V.a1(0,0,0)
q.ch=100
h.z=q
q=new O.hc(h,"bump")
q.c=new A.ag(!1,!1,!1)
h.Q=q
h.ch=null
q=new O.aZ(h,"reflect")
q.c=new A.ag(!1,!1,!1)
q.f=new V.a1(0,0,0)
h.cx=q
q=new O.hf(h,"refract")
q.c=new A.ag(!1,!1,!1)
q.f=new V.a1(0,0,0)
q.ch=1
h.cy=q
q=new O.hb(h,"alpha")
q.c=new A.ag(!1,!1,!1)
q.f=1
h.db=q
q=new D.dw()
q.bb(D.aa)
q.seJ(H.c([],[D.bv]))
q.sfX(H.c([],[D.dM]))
q.shn(H.c([],[D.dV]))
q.y=q.x=null
q.cw(q.gf4(),q.gfH(),q.gfL())
h.dx=q
p=new O.he()
p.b=new V.am(0,0,0,0)
p.c=1
p.d=10
p.e=!1
h.dy=p
p=q.x
q=p==null?q.x=D.L():p
q.h(0,h.gh7())
q=h.dx
p=q.y
q=p==null?q.y=D.L():p
q.h(0,h.gbx())
h.fr=null
q=h.dx
g=V.ko()
p=U.kQ(V.l_(V.l6(),g,new V.M(0,-1,-1)))
f=new V.a1(1,1,1)
o=new D.bv()
o.c=new V.a1(1,1,1)
o.a=V.lo()
o.d=V.ko()
o.e=V.mQ()
l=o.b
o.b=p
p.gq().h(0,o.gej())
u=new D.K("mover",l,o.b,[u])
u.b=!0
o.ao(u)
if(!o.c.v(0,f)){l=o.c
o.c=f
u=new D.K("color",l,f,[V.a1])
u.b=!0
o.ao(u)}q.h(0,o)
u=h.r
u.saY(0,new V.a1(0,0,1))
u=h.x
u.saY(0,new V.a1(0,1,0))
u=h.z
u.saY(0,new V.a1(1,0,0))
u=h.z
u.d8(new A.ag(!0,!1,!1))
u.d9(10)
u=s.f
q=u.a
e=q.createTexture()
q.bindTexture(a8,e)
q.texParameteri(a8,10242,10497)
q.texParameteri(a8,10243,10497)
q.texParameteri(a8,10241,9729)
q.texParameteri(a8,10240,9729)
q.bindTexture(a8,a6)
d=new T.dZ()
d.a=0
d.b=e
d.c=!1
d.d=0
u.aH(d,e,"../resources/maskonaive/posx.jpg",34069,!1,!1)
u.aH(d,e,"../resources/maskonaive/negx.jpg",34070,!1,!1)
u.aH(d,e,"../resources/maskonaive/posy.jpg",34071,!1,!1)
u.aH(d,e,"../resources/maskonaive/negy.jpg",34072,!1,!1)
u.aH(d,e,"../resources/maskonaive/posz.jpg",34073,!1,!1)
u.aH(d,e,"../resources/maskonaive/negz.jpg",34074,!1,!1)
c=new M.di()
c.a=!0
u=E.kU()
b=F.lc()
q=b.a
p=new V.M(-1,-1,1)
p=p.u(0,Math.sqrt(p.B(p)))
a=q.bg(new V.b2(1,2,4,6),new V.am(1,0,0,1),new V.a4(-1,-1,0),new V.a5(0,1),p,a6)
q=b.a
p=new V.M(1,-1,1)
p=p.u(0,Math.sqrt(p.B(p)))
a0=q.bg(new V.b2(0,3,4,6),new V.am(0,0,1,1),new V.a4(1,-1,0),new V.a5(1,1),p,a6)
q=b.a
p=new V.M(1,1,1)
p=p.u(0,Math.sqrt(p.B(p)))
a1=q.bg(new V.b2(0,2,5,6),new V.am(0,1,0,1),new V.a4(1,1,0),new V.a5(1,0),p,a6)
q=b.a
p=V.bk()
o=new V.M(-1,1,1)
o=o.u(0,Math.sqrt(o.B(o)))
a2=q.bg(new V.b2(0,2,4,7),new V.am(1,1,0,1),new V.a4(-1,1,0),p,o,a6)
b.d.hC(H.c([a,a0,a1,a2],[F.ai]))
b.as()
u.sbt(0,b)
c.e=u
c.saX(a6)
c.sb6(0,a6)
c.sb7(a6)
u=new O.dS()
u.b=1.0471975511965976
u.d=new V.a1(1,1,1)
l=u.c
u.c=d
d.gq().h(0,u.gbx())
q=new D.K("boxTexture",l,u.c,[T.dZ])
q.b=!0
u.Z(q)
c.sb7(u)
c.sb6(0,j)
c.saX(k)
a3=new M.dm()
a3.a=!0
a3.seC(0,O.k9(E.ah))
a3.e.aP(a3.gfc(),a3.gfe())
a3.y=a3.x=a3.r=a3.f=null
a4=X.kc(a6)
a3.saX(a6)
a3.sb6(0,a4)
a3.sb7(a6)
a3.saX(k)
a3.sb7(h)
a3.sb6(0,j)
a3.e.h(0,i)
u=M.aw
q=H.c([c,a3],[u])
p=new M.dg()
p.bb(u)
p.e=!0
p.f=!1
p.r=null
p.aP(p.gfN(),p.gfP())
p.a3(0,q)
u=s.d
if(u!==p){if(u!=null)u.gq().M(0,s.gcF())
s.d=p
p.gq().h(0,s.gcF())
s.cG()}u=s.z
if(u==null)u=s.z=D.L()
q={func:1,ret:-1,args:[D.y]}
p=H.m(new B.jY(c,a9),q)
if(u.b==null)u.saJ(H.c([],[q]))
u=u.b;(u&&C.a).h(u,p)
V.nW(s)},
jY:function jY(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kg.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gH:function(a){return H.cH(a)},
i:function(a){return"Instance of '"+H.c2(a)+"'"}}
J.fX.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iP:1}
J.dt.prototype={
v:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0}}
J.du.prototype={
gH:function(a){return 0},
i:function(a){return String(a)}}
J.hH.prototype={}
J.bG.prototype={}
J.bg.prototype={
i:function(a){var u=a[$.lS()]
if(u==null)return this.e8(a)
return"JavaScript function for "+H.j(J.aQ(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibx:1}
J.aJ.prototype={
h:function(a,b){H.H(b,H.w(a,0))
if(!!a.fixed$length)H.C(P.ae("add"))
a.push(b)},
dO:function(a,b){if(!!a.fixed$length)H.C(P.ae("removeAt"))
if(b<0||b>=a.length)throw H.f(P.dO(b,null))
return a.splice(b,1)[0]},
M:function(a,b){var u
if(!!a.fixed$length)H.C(P.ae("remove"))
for(u=0;u<a.length;++u)if(J.X(a[u],b)){a.splice(u,1)
return!0}return!1},
a3:function(a,b){var u,t
H.l(b,"$ie",[H.w(a,0)],"$ae")
if(!!a.fixed$length)H.C(P.ae("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.x)(b),++t)a.push(b[t])},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.w(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.bu(a))}},
l:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.n(t,u,H.j(a[u]))
return t.join(b)},
i6:function(a){return this.l(a,"")},
i1:function(a,b){var u,t,s
H.m(b,{func:1,ret:P.P,args:[H.w(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.B(b.$1(s)))return s
if(a.length!==u)throw H.f(P.bu(a))}throw H.f(H.fW())},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
e5:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.b3(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.b3(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.w(a,0)])
return H.c(a.slice(b,c),[H.w(a,0)])},
gi0:function(a){if(a.length>0)return a[0]
throw H.f(H.fW())},
gbj:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.fW())},
b8:function(a,b,c,d){var u,t,s=H.w(a,0)
H.l(d,"$ie",[s],"$ae")
if(!!a.immutable$list)H.C(P.ae("setRange"))
P.kk(b,c,a.length)
u=c-b
if(u===0)return
P.kj(0,"skipCount")
H.l(d,"$ib",[s],"$ab")
s=J.jS(d)
if(u>s.gm(d))throw H.f(H.mq())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
dh:function(a,b){var u,t
H.m(b,{func:1,ret:P.P,args:[H.w(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.B(b.$1(a[t])))return!0
if(a.length!==u)throw H.f(P.bu(a))}return!1},
bu:function(a,b){var u=H.w(a,0)
H.m(b,{func:1,ret:P.p,args:[u,u]})
if(!!a.immutable$list)H.C(P.ae("sort"))
H.dU(a,0,a.length-1,b,u)},
S:function(a,b){var u
for(u=0;u<a.length;++u)if(J.X(a[u],b))return!0
return!1},
i:function(a){return P.kd(a,"[","]")},
gO:function(a){return new J.al(a,a.length,[H.w(a,0)])},
gH:function(a){return H.cH(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.C(P.ae("set length"))
if(b<0)throw H.f(P.b3(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.f(H.cf(a,b))
return a[b]},
n:function(a,b,c){H.H(c,H.w(a,0))
if(!!a.immutable$list)H.C(P.ae("indexed set"))
if(b>=a.length||b<0)throw H.f(H.cf(a,b))
a[b]=c},
p:function(a,b){var u,t=[H.w(a,0)]
H.l(b,"$ib",t,"$ab")
u=C.d.p(a.length,b.gm(b))
t=H.c([],t)
this.sm(t,u)
this.b8(t,0,a.length,a)
this.b8(t,a.length,u,b)
return t},
$ie:1,
$ib:1}
J.kf.prototype={}
J.al.prototype={
gF:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.x(s))
u=t.c
if(u>=r){t.scV(null)
return!1}t.scV(s[u]);++t.c
return!0},
scV:function(a){this.d=H.H(a,H.w(this,0))},
$iaX:1}
J.bB.prototype={
hP:function(a,b){var u
H.lL(b)
if(typeof b!=="number")throw H.f(H.aH(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbi(b)
if(this.gbi(a)===u)return 0
if(this.gbi(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbi:function(a){return a===0?1/a<0:a<0},
iC:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.ae(""+a+".toInt()"))},
cb:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.ae(""+a+".floor()"))},
af:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.ae(""+a+".round()"))},
dU:function(a,b){var u
if(b>20)throw H.f(P.b3(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbi(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
p:function(a,b){if(typeof b!=="number")throw H.f(H.aH(b))
return a+b},
t:function(a,b){if(typeof b!=="number")throw H.f(H.aH(b))
return a-b},
w:function(a,b){if(typeof b!=="number")throw H.f(H.aH(b))
return a*b},
e0:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eb:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.da(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.da(a,b)},
da:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.ae("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
be:function(a,b){var u
if(a>0)u=this.hl(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hl:function(a,b){return b>31?0:a>>>b},
am:function(a,b){if(typeof b!=="number")throw H.f(H.aH(b))
return a>b},
$iz:1,
$ia9:1}
J.ds.prototype={$ip:1}
J.dr.prototype={}
J.bf.prototype={
c1:function(a,b){if(b<0)throw H.f(H.cf(a,b))
if(b>=a.length)H.C(H.cf(a,b))
return a.charCodeAt(b)},
aF:function(a,b){if(b>=a.length)throw H.f(H.cf(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.f(P.k6(b,null,null))
return a+b},
bv:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
b9:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.dO(b,null))
if(b>c)throw H.f(P.dO(b,null))
if(c>a.length)throw H.f(P.dO(c,null))
return a.substring(b,c)},
an:function(a,b){return this.b9(a,b,null)},
iF:function(a){return a.toLowerCase()},
w:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.D)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ax:function(a,b){var u=b-a.length
if(u<=0)return a
return this.w(" ",u)+a},
i:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$il2:1,
$ii:1}
H.q.prototype={
gm:function(a){return this.a.length},
j:function(a,b){return C.e.c1(this.a,b)},
$ae5:function(){return[P.p]},
$av:function(){return[P.p]},
$ae:function(){return[P.p]},
$ab:function(){return[P.p]}}
H.fA.prototype={}
H.bY.prototype={
gO:function(a){var u=this
return new H.cA(u,u.gm(u),[H.ak(u,"bY",0)])},
br:function(a,b){return this.e7(0,H.m(b,{func:1,ret:P.P,args:[H.ak(this,"bY",0)]}))}}
H.cA.prototype={
gF:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.jS(s),q=r.gm(s)
if(t.b!==q)throw H.f(P.bu(s))
u=t.c
if(u>=q){t.saS(null)
return!1}t.saS(r.E(s,u));++t.c
return!0},
saS:function(a){this.d=H.H(a,H.w(this,0))},
$iaX:1}
H.h8.prototype={
gO:function(a){return new H.h9(J.bP(this.a),this.b,this.$ti)},
gm:function(a){return J.bQ(this.a)},
E:function(a,b){return this.b.$1(J.k5(this.a,b))},
$ae:function(a,b){return[b]}}
H.h9.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.saS(u.c.$1(t.gF(t)))
return!0}u.saS(null)
return!1},
gF:function(a){return this.a},
saS:function(a){this.a=H.H(a,H.w(this,1))},
$aaX:function(a,b){return[b]}}
H.ha.prototype={
gm:function(a){return J.bQ(this.a)},
E:function(a,b){return this.b.$1(J.k5(this.a,b))},
$abY:function(a,b){return[b]},
$ae:function(a,b){return[b]}}
H.cU.prototype={
gO:function(a){return new H.j1(J.bP(this.a),this.b,this.$ti)}}
H.j1.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(H.B(t.$1(u.gF(u))))return!0
return!1},
gF:function(a){var u=this.a
return u.gF(u)}}
H.bV.prototype={}
H.e5.prototype={}
H.e4.prototype={}
H.iv.prototype={
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
H.hD.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fZ.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.j(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.j(t.a)+")"
return s+r+"' on '"+u+"' ("+H.j(t.a)+")"}}
H.iH.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.k3.prototype={
$1:function(a){if(!!J.V(a).$ibw)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.eL.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaq:1}
H.cr.prototype={
i:function(a){return"Closure '"+H.c2(this).trim()+"'"},
$ibx:1,
giK:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ih.prototype={}
H.i6.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ck(u)+"'"}}
H.cn.prototype={
v:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cn))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.cH(this.a)
else u=typeof t!=="object"?J.bO(t):H.cH(t)
return(u^H.cH(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.c2(u)+"'")}}
H.ix.prototype={
i:function(a){return this.a}}
H.fk.prototype={
i:function(a){return this.a}}
H.hT.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.j2.prototype={
i:function(a){return"Assertion failed: "+P.dn(this.a)}}
H.a2.prototype={
gm:function(a){return this.a},
ga4:function(a){return new H.dx(this,[H.w(this,0)])},
dn:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cS(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cS(t,b)}else return s.i4(b)},
i4:function(a){var u=this.d
if(u==null)return!1
return this.cc(this.bF(u,J.bO(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bc(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bc(r,b)
s=t==null?null:t.b
return s}else return q.i5(b)},
i5:function(a){var u,t,s=this.d
if(s==null)return
u=this.bF(s,J.bO(a)&0x3ffffff)
t=this.cc(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s,r,q,p,o=this
H.H(b,H.w(o,0))
H.H(c,H.w(o,1))
if(typeof b==="string"){u=o.b
o.cJ(u==null?o.b=o.bQ():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cJ(t==null?o.c=o.bQ():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bQ()
r=J.bO(b)&0x3ffffff
q=o.bF(s,r)
if(q==null)o.bV(s,r,[o.bR(b,c)])
else{p=o.cc(q,b)
if(p>=0)q[p].b=c
else q.push(o.bR(b,c))}}},
J:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.w(s,0),H.w(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.f(P.bu(s))
u=u.c}},
cJ:function(a,b,c){var u,t=this
H.H(b,H.w(t,0))
H.H(c,H.w(t,1))
u=t.bc(a,b)
if(u==null)t.bV(a,b,t.bR(b,c))
else u.b=c},
f_:function(){this.r=this.r+1&67108863},
bR:function(a,b){var u,t=this,s=new H.h2(H.H(a,H.w(t,0)),H.H(b,H.w(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.f_()
return s},
cc:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.X(a[t].a,b))return t
return-1},
i:function(a){return P.kZ(this)},
bc:function(a,b){return a[b]},
bF:function(a,b){return a[b]},
bV:function(a,b,c){a[b]=c},
eH:function(a,b){delete a[b]},
cS:function(a,b){return this.bc(a,b)!=null},
bQ:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bV(t,u,t)
this.eH(t,u)
return t}}
H.h2.prototype={}
H.dx.prototype={
gm:function(a){return this.a.a},
gO:function(a){var u=this.a,t=new H.h3(u,u.r,this.$ti)
t.c=u.e
return t}}
H.h3.prototype={
gF:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bu(t))
else{t=u.c
if(t==null){u.scI(null)
return!1}else{u.scI(t.a)
u.c=u.c.c
return!0}}},
scI:function(a){this.d=H.H(a,H.w(this,0))},
$iaX:1}
H.jU.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.jV.prototype={
$2:function(a,b){return this.a(a,b)},
$S:47}
H.jW.prototype={
$1:function(a){return this.a(H.I(a))},
$S:44}
H.fY.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$il2:1}
H.cE.prototype={$iol:1}
H.dG.prototype={
gm:function(a){return a.length},
$iJ:1,
$aJ:function(){}}
H.cD.prototype={
j:function(a,b){H.bJ(b,a,a.length)
return a[b]},
$abV:function(){return[P.z]},
$av:function(){return[P.z]},
$ie:1,
$ae:function(){return[P.z]},
$ib:1,
$ab:function(){return[P.z]}}
H.dH.prototype={
$abV:function(){return[P.p]},
$av:function(){return[P.p]},
$ie:1,
$ae:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.hu.prototype={
j:function(a,b){H.bJ(b,a,a.length)
return a[b]}}
H.hv.prototype={
j:function(a,b){H.bJ(b,a,a.length)
return a[b]}}
H.hw.prototype={
j:function(a,b){H.bJ(b,a,a.length)
return a[b]}}
H.hx.prototype={
j:function(a,b){H.bJ(b,a,a.length)
return a[b]}}
H.hy.prototype={
j:function(a,b){H.bJ(b,a,a.length)
return a[b]}}
H.dI.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bJ(b,a,a.length)
return a[b]},
$iom:1}
H.hz.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bJ(b,a,a.length)
return a[b]}}
H.cY.prototype={}
H.cZ.prototype={}
H.d_.prototype={}
H.d0.prototype={}
P.j4.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:25}
P.j3.prototype={
$1:function(a){var u,t
this.a.a=H.m(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:39}
P.j5.prototype={
$0:function(){this.a.$0()},
$S:2}
P.j6.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eR.prototype={
eo:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ce(new P.jG(this,b),0),a)
else throw H.f(P.ae("`setTimeout()` not found."))},
ep:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ce(new P.jF(this,a,Date.now(),b),0),a)
else throw H.f(P.ae("Periodic timer."))},
$ib8:1}
P.jG.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jF.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.eb(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.bc.prototype={
i8:function(a){if(this.c!==6)return!0
return this.b.b.cq(H.m(this.d,{func:1,ret:P.P,args:[P.O]}),a.a,P.P,P.O)},
i3:function(a){var u=this.e,t=P.O,s={futureOr:1,type:H.w(this,1)},r=this.b.b
if(H.f7(u,{func:1,args:[P.O,P.aq]}))return H.kz(r.ix(u,a.a,a.b,null,t,P.aq),s)
else return H.kz(r.cq(H.m(u,{func:1,args:[P.O]}),a.a,null,t),s)}}
P.aF.prototype={
dT:function(a,b,c){var u,t,s,r=H.w(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a_
if(u!==C.f){u.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.np(b,u)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aF($.a_,[c])
s=b==null?1:3
this.cK(new P.bc(t,s,a,b,[r,c]))
return t},
iB:function(a,b){return this.dT(a,null,b)},
cK:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$ibc")
t.c=a}else{if(s===2){u=H.k(t.c,"$iaF")
s=u.a
if(s<4){u.cK(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.jO(null,null,s,H.m(new P.je(t,a),{func:1,ret:-1}))}},
d4:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$ibc")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iaF")
u=q.a
if(u<4){q.d4(a)
return}p.a=u
p.c=q.c}o.a=p.bd(a)
u=p.b
u.toString
P.jO(null,null,u,H.m(new P.ji(o,p),{func:1,ret:-1}))}},
bU:function(){var u=H.k(this.c,"$ibc")
this.c=null
return this.bd(u)},
bd:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cO:function(a){var u,t,s=this,r=H.w(s,0)
H.kz(a,{futureOr:1,type:r})
u=s.$ti
if(H.kw(a,"$icx",u,"$acx"))if(H.kw(a,"$iaF",u,null))P.lq(a,s)
else P.mV(a,s)
else{t=s.bU()
H.H(a,r)
s.a=4
s.c=a
P.cX(s,t)}},
cP:function(a,b){var u,t=this
H.k(b,"$iaq")
u=t.bU()
t.a=8
t.c=new P.af(a,b)
P.cX(t,u)},
$icx:1}
P.je.prototype={
$0:function(){P.cX(this.a,this.b)},
$S:2}
P.ji.prototype={
$0:function(){P.cX(this.b,this.a.a)},
$S:2}
P.jf.prototype={
$1:function(a){var u=this.a
u.a=0
u.cO(a)},
$S:25}
P.jg.prototype={
$2:function(a,b){H.k(b,"$iaq")
this.a.cP(a,b)},
$1:function(a){return this.$2(a,null)},
$S:38}
P.jh.prototype={
$0:function(){this.a.cP(this.b,this.c)},
$S:2}
P.jl.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dR(H.m(s.d,{func:1}),null)}catch(r){u=H.ax(r)
t=H.ci(r)
if(o.d){s=H.k(o.a.a.c,"$iaf").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iaf")
else q.b=new P.af(u,t)
q.a=!0
return}if(!!J.V(n).$icx){if(n instanceof P.aF&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iaf")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.iB(new P.jm(p),null)
s.a=!1}},
$S:3}
P.jm.prototype={
$1:function(a){return this.a},
$S:40}
P.jk.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.w(s,0)
q=H.H(n.c,r)
p=H.w(s,1)
n.a.b=s.b.b.cq(H.m(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ax(o)
t=H.ci(o)
s=n.a
s.b=new P.af(u,t)
s.a=!0}},
$S:3}
P.jj.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iaf")
r=m.c
if(H.B(r.i8(u))&&r.e!=null){q=m.b
q.b=r.i3(u)
q.a=!1}}catch(p){t=H.ax(p)
s=H.ci(p)
r=H.k(m.a.a.c,"$iaf")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.af(t,s)
n.a=!0}},
$S:3}
P.ec.prototype={}
P.i9.prototype={
gm:function(a){var u,t,s=this,r={},q=new P.aF($.a_,[P.p])
r.a=0
u=H.w(s,0)
t=H.m(new P.ib(r,s),{func:1,ret:-1,args:[u]})
H.m(new P.ic(r,q),{func:1,ret:-1})
W.a8(s.a,s.b,t,!1,u)
return q}}
P.ib.prototype={
$1:function(a){H.H(a,H.w(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.w(this.b,0)]}}}
P.ic.prototype={
$0:function(){this.b.cO(this.a.a)},
$S:2}
P.cL.prototype={}
P.ia.prototype={}
P.b8.prototype={}
P.af.prototype={
i:function(a){return H.j(this.a)},
$ibw:1}
P.jJ.prototype={$ioA:1}
P.jN.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dK():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.i(0)
throw u},
$S:2}
P.js.prototype={
iy:function(a){var u,t,s,r=null
H.m(a,{func:1,ret:-1})
try{if(C.f===$.a_){a.$0()
return}P.lw(r,r,this,a,-1)}catch(s){u=H.ax(s)
t=H.ci(s)
P.jM(r,r,this,u,H.k(t,"$iaq"))}},
iz:function(a,b,c){var u,t,s,r=null
H.m(a,{func:1,ret:-1,args:[c]})
H.H(b,c)
try{if(C.f===$.a_){a.$1(b)
return}P.lx(r,r,this,a,b,-1,c)}catch(s){u=H.ax(s)
t=H.ci(s)
P.jM(r,r,this,u,H.k(t,"$iaq"))}},
hM:function(a,b){return new P.ju(this,H.m(a,{func:1,ret:b}),b)},
bX:function(a){return new P.jt(this,H.m(a,{func:1,ret:-1}))},
di:function(a,b){return new P.jv(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
dR:function(a,b){H.m(a,{func:1,ret:b})
if($.a_===C.f)return a.$0()
return P.lw(null,null,this,a,b)},
cq:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.H(b,d)
if($.a_===C.f)return a.$1(b)
return P.lx(null,null,this,a,b,c,d)},
ix:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.H(b,e)
H.H(c,f)
if($.a_===C.f)return a.$2(b,c)
return P.nq(null,null,this,a,b,c,d,e,f)}}
P.ju.prototype={
$0:function(){return this.a.dR(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jt.prototype={
$0:function(){return this.a.iy(this.b)},
$S:3}
P.jv.prototype={
$1:function(a){var u=this.c
return this.a.iz(this.b,H.H(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jq.prototype={
gO:function(a){var u=this,t=new P.es(u,u.r,u.$ti)
t.c=u.e
return t},
gm:function(a){return this.a},
S:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.k(u[b],"$icb")!=null}else{t=this.eD(b)
return t}},
eD:function(a){var u=this.d
if(u==null)return!1
return this.bD(this.cX(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.H(b,H.w(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cL(u==null?s.b=P.kq():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cL(t==null?s.c=P.kq():t,b)}else return s.es(0,b)},
es:function(a,b){var u,t,s,r=this
H.H(b,H.w(r,0))
u=r.d
if(u==null)u=r.d=P.kq()
t=r.cQ(b)
s=u[t]
if(s==null)u[t]=[r.bA(b)]
else{if(r.bD(s,b)>=0)return!1
s.push(r.bA(b))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.h1(this.c,b)
else return this.h0(0,b)},
h0:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cX(r,b)
t=s.bD(u,b)
if(t<0)return!1
s.dc(u.splice(t,1)[0])
return!0},
cL:function(a,b){H.H(b,H.w(this,0))
if(H.k(a[b],"$icb")!=null)return!1
a[b]=this.bA(b)
return!0},
h1:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$icb")
if(u==null)return!1
this.dc(u)
delete a[b]
return!0},
cN:function(){this.r=1073741823&this.r+1},
bA:function(a){var u,t=this,s=new P.cb(H.H(a,H.w(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cN()
return s},
dc:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cN()},
cQ:function(a){return J.bO(a)&1073741823},
cX:function(a,b){return a[this.cQ(b)]},
bD:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.X(a[t].a,b))return t
return-1}}
P.cb.prototype={}
P.es.prototype={
gF:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bu(t))
else{t=u.c
if(t==null){u.scM(null)
return!1}else{u.scM(H.H(t.a,H.w(u,0)))
u.c=u.c.b
return!0}}},
scM:function(a){this.d=H.H(a,H.w(this,0))},
$iaX:1}
P.h4.prototype={$ie:1,$ib:1}
P.v.prototype={
gO:function(a){return new H.cA(a,this.gm(a),[H.ch(this,a,"v",0)])},
E:function(a,b){return this.j(a,b)},
iE:function(a,b){var u,t=this,s=H.c([],[H.ch(t,a,"v",0)])
C.a.sm(s,t.gm(a))
for(u=0;u<t.gm(a);++u)C.a.n(s,u,t.j(a,u))
return s},
iD:function(a){return this.iE(a,!0)},
p:function(a,b){var u,t=this,s=[H.ch(t,a,"v",0)]
H.l(b,"$ib",s,"$ab")
u=H.c([],s)
C.a.sm(u,C.d.p(t.gm(a),b.gm(b)))
C.a.b8(u,0,t.gm(a),a)
C.a.b8(u,t.gm(a),u.length,b)
return u},
i:function(a){return P.kd(a,"[","]")}}
P.h6.prototype={}
P.h7.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.j(a)
t.a=u+": "
t.a+=H.j(b)},
$S:21}
P.ab.prototype={
J:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.ch(s,a,"ab",0),H.ch(s,a,"ab",1)]})
for(u=J.bP(s.ga4(a));u.A();){t=u.gF(u)
b.$2(t,s.j(a,t))}},
gm:function(a){return J.bQ(this.ga4(a))},
i:function(a){return P.kZ(a)},
$iG:1}
P.jx.prototype={
a3:function(a,b){var u
for(u=J.bP(H.l(b,"$ie",this.$ti,"$ae"));u.A();)this.h(0,u.gF(u))},
i:function(a){return P.kd(this,"{","}")},
E:function(a,b){var u,t,s,r=this
P.kj(b,"index")
for(u=P.mZ(r,r.r,H.w(r,0)),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.f(P.Y(b,r,"index",null,t))},
$ie:1,
$ilb:1}
P.et.prototype={}
P.cs.prototype={}
P.ct.prototype={}
P.fC.prototype={
$acs:function(){return[P.i,[P.b,P.p]]}}
P.fT.prototype={
i:function(a){return this.a}}
P.fS.prototype={
eE:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.bl("")
if(r>b)q.a+=C.e.b9(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.mc(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$act:function(){return[P.i,P.i]}}
P.iK.prototype={}
P.iL.prototype={
hQ:function(a){var u,t,s=P.kk(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jH(u)
if(t.eQ(a,0,s)!==s)t.dd(C.e.c1(a,s-1),0)
return new Uint8Array(u.subarray(0,H.n1(0,t.b,u.length)))},
$act:function(){return[P.i,[P.b,P.p]]}}
P.jH.prototype={
dd:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eQ:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.e.c1(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.e.aF(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dd(r,C.e.aF(a,p)))s=p}else if(r<=2047){q=n.b
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
P.P.prototype={}
P.ay.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.ay&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.d.be(u,30))&1073741823},
i:function(a){var u=this,t=P.mk(H.mF(u)),s=P.dj(H.mD(u)),r=P.dj(H.mz(u)),q=P.dj(H.mA(u)),p=P.dj(H.mC(u)),o=P.dj(H.mE(u)),n=P.ml(H.mB(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.z.prototype={}
P.aU.prototype={
p:function(a,b){return new P.aU(C.d.p(this.a,b.gcW()))},
t:function(a,b){return new P.aU(C.d.t(this.a,b.gcW()))},
am:function(a,b){return C.d.am(this.a,b.gcW())},
v:function(a,b){if(b==null)return!1
return b instanceof P.aU&&this.a===b.a},
gH:function(a){return C.d.gH(this.a)},
i:function(a){var u,t,s,r=new P.fz(),q=this.a
if(q<0)return"-"+new P.aU(0-q).i(0)
u=r.$1(C.d.a2(q,6e7)%60)
t=r.$1(C.d.a2(q,1e6)%60)
s=new P.fy().$1(q%1e6)
return""+C.d.a2(q,36e8)+":"+H.j(u)+":"+H.j(t)+"."+H.j(s)}}
P.fy.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:22}
P.fz.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:22}
P.bw.prototype={}
P.fc.prototype={
i:function(a){return"Assertion failed"}}
P.dK.prototype={
i:function(a){return"Throw of null."}}
P.aI.prototype={
gbC:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbB:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbC()+o+u
if(!q.a)return t
s=q.gbB()
r=P.dn(q.b)
return t+s+": "+r}}
P.c3.prototype={
gbC:function(){return"RangeError"},
gbB:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.j(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.j(s)
else if(t>s)u=": Not in range "+H.j(s)+".."+H.j(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.j(s)}return u}}
P.fV.prototype={
gbC:function(){return"RangeError"},
gbB:function(){var u,t=H.a3(this.b)
if(typeof t!=="number")return t.aa()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.j(u)},
gm:function(a){return this.f}}
P.iI.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iG.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c5.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fn.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dn(u)+"."}}
P.hG.prototype={
i:function(a){return"Out of Memory"},
$ibw:1}
P.dW.prototype={
i:function(a){return"Stack Overflow"},
$ibw:1}
P.fs.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ek.prototype={
i:function(a){return"Exception: "+this.a}}
P.fN.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.e.b9(s,0,75)+"...":s
return t+"\n"+r}}
P.bx.prototype={}
P.p.prototype={}
P.e.prototype={
br:function(a,b){var u=H.ak(this,"e",0)
return new H.cU(this,H.m(b,{func:1,ret:P.P,args:[u]}),[u])},
gm:function(a){var u,t=this.gO(this)
for(u=0;t.A();)++u
return u},
gaD:function(a){var u,t=this.gO(this)
if(!t.A())throw H.f(H.fW())
u=t.gF(t)
if(t.A())throw H.f(H.mr())
return u},
E:function(a,b){var u,t,s
P.kj(b,"index")
for(u=this.gO(this),t=0;u.A();){s=u.gF(u)
if(b===t)return s;++t}throw H.f(P.Y(b,this,"index",null,t))},
i:function(a){return P.mp(this,"(",")")}}
P.aX.prototype={}
P.b.prototype={$ie:1}
P.G.prototype={}
P.N.prototype={
gH:function(a){return P.O.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.a9.prototype={}
P.O.prototype={constructor:P.O,$iO:1,
v:function(a,b){return this===b},
gH:function(a){return H.cH(this)},
i:function(a){return"Instance of '"+H.c2(this)+"'"},
toString:function(){return this.i(this)}}
P.aq.prototype={}
P.i.prototype={$il2:1}
P.bl.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.t.prototype={}
W.fa.prototype={
gm:function(a){return a.length}}
W.da.prototype={
i:function(a){return String(a)},
$ida:1}
W.fb.prototype={
i:function(a){return String(a)}}
W.cm.prototype={$icm:1}
W.dc.prototype={}
W.br.prototype={$ibr:1}
W.bT.prototype={
cu:function(a,b,c){if(c!=null)return a.getContext(b,P.ny(c))
return a.getContext(b)},
e_:function(a,b){return this.cu(a,b,null)},
$ibT:1}
W.cq.prototype={$icq:1}
W.bs.prototype={
gm:function(a){return a.length}}
W.cu.prototype={$icu:1}
W.fo.prototype={
gm:function(a){return a.length}}
W.T.prototype={$iT:1}
W.cv.prototype={
gm:function(a){return a.length}}
W.fp.prototype={}
W.aS.prototype={}
W.aT.prototype={}
W.fq.prototype={
gm:function(a){return a.length}}
W.fr.prototype={
gm:function(a){return a.length}}
W.fu.prototype={
gm:function(a){return a.length}}
W.aA.prototype={$iaA:1}
W.fv.prototype={
i:function(a){return String(a)}}
W.dk.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[[P.ap,P.a9]]},
$av:function(){return[[P.ap,P.a9]]},
$ie:1,
$ae:function(){return[[P.ap,P.a9]]},
$ib:1,
$ab:function(){return[[P.ap,P.a9]]},
$aD:function(){return[[P.ap,P.a9]]}}
W.dl.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gaC(a))+" x "+H.j(this.gav(a))},
v:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$iap)return!1
return a.left===u.gbk(b)&&a.top===u.gbo(b)&&this.gaC(a)===u.gaC(b)&&this.gav(a)===u.gav(b)},
gH:function(a){return W.ls(C.c.gH(a.left),C.c.gH(a.top),C.c.gH(this.gaC(a)),C.c.gH(this.gav(a)))},
gdj:function(a){return a.bottom},
gav:function(a){return a.height},
gbk:function(a){return a.left},
gcp:function(a){return a.right},
gbo:function(a){return a.top},
gaC:function(a){return a.width},
$iap:1,
$aap:function(){return[P.a9]}}
W.fw.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[P.i]},
$av:function(){return[P.i]},
$ie:1,
$ae:function(){return[P.i]},
$ib:1,
$ab:function(){return[P.i]},
$aD:function(){return[P.i]}}
W.fx.prototype={
gm:function(a){return a.length}}
W.j8.prototype={
gm:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.k(u[b],"$iS")},
h:function(a,b){this.a.appendChild(b)
return b},
gO:function(a){var u=this.iD(this)
return new J.al(u,u.length,[H.w(u,0)])},
$av:function(){return[W.S]},
$ae:function(){return[W.S]},
$ab:function(){return[W.S]}}
W.S.prototype={
ghL:function(a){return new W.ja(a)},
gdl:function(a){return new W.j8(a,a.children)},
gdm:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.aa()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aa()
if(r<0)r=-r*0
return new P.ap(u,t,s,r,[P.a9])},
i:function(a){return a.localName},
ac:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.kT
if(u==null){u=H.c([],[W.av])
t=new W.dJ(u)
C.a.h(u,W.lr(null))
C.a.h(u,W.lt())
$.kT=t
d=t}else d=u
u=$.kS
if(u==null){u=new W.eX(d)
$.kS=u
c=u}else{u.a=d
c=u}}if($.be==null){u=document
t=u.implementation.createHTMLDocument("")
$.be=t
$.kb=t.createRange()
t=$.be.createElement("base")
H.k(t,"$icm")
t.href=u.baseURI
$.be.head.appendChild(t)}u=$.be
if(u.body==null){t=u.createElement("body")
u.body=H.k(t,"$ibr")}u=$.be
if(!!this.$ibr)s=u.body
else{s=u.createElement(a.tagName)
$.be.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.S(C.M,a.tagName)){$.kb.selectNodeContents(s)
r=$.kb.createContextualFragment(b)}else{s.innerHTML=b
r=$.be.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.be.body
if(s==null?u!=null:s!==u)J.kL(s)
c.cv(r)
document.adoptNode(r)
return r},
hR:function(a,b,c){return this.ac(a,b,c,null)},
e2:function(a,b){a.textContent=null
a.appendChild(this.ac(a,b,null,null))},
$iS:1,
gdS:function(a){return a.tagName}}
W.fB.prototype={
$1:function(a){return!!J.V(H.k(a,"$iE")).$iS},
$S:23}
W.n.prototype={$in:1}
W.h.prototype={
hB:function(a,b,c,d){H.m(c,{func:1,args:[W.n]})
if(c!=null)this.eu(a,b,c,!1)},
eu:function(a,b,c,d){return a.addEventListener(b,H.ce(H.m(c,{func:1,args:[W.n]}),1),!1)},
$ih:1}
W.aV.prototype={$iaV:1}
W.fH.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aV]},
$av:function(){return[W.aV]},
$ie:1,
$ae:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aD:function(){return[W.aV]}}
W.fI.prototype={
gm:function(a){return a.length}}
W.fM.prototype={
gm:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.fR.prototype={
gm:function(a){return a.length}}
W.bW.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.E]},
$av:function(){return[W.E]},
$ie:1,
$ae:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$ibW:1,
$aD:function(){return[W.E]}}
W.by.prototype={$iby:1,
gdr:function(a){return a.data}}
W.cz.prototype={$icz:1}
W.aY.prototype={$iaY:1}
W.dz.prototype={
i:function(a){return String(a)},
$idz:1}
W.hn.prototype={
gm:function(a){return a.length}}
W.ho.prototype={
j:function(a,b){return P.bn(a.get(H.I(b)))},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
ga4:function(a){var u=H.c([],[P.i])
this.J(a,new W.hp(u))
return u},
gm:function(a){return a.size},
$aab:function(){return[P.i,null]},
$iG:1,
$aG:function(){return[P.i,null]}}
W.hp.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hq.prototype={
j:function(a,b){return P.bn(a.get(H.I(b)))},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
ga4:function(a){var u=H.c([],[P.i])
this.J(a,new W.hr(u))
return u},
gm:function(a){return a.size},
$aab:function(){return[P.i,null]},
$iG:1,
$aG:function(){return[P.i,null]}}
W.hr.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.b0.prototype={$ib0:1}
W.hs.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b0]},
$av:function(){return[W.b0]},
$ie:1,
$ae:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aD:function(){return[W.b0]}}
W.ac.prototype={$iac:1}
W.aj.prototype={
gaD:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.f(P.ld("No elements"))
if(t>1)throw H.f(P.ld("More than one element"))
return u.firstChild},
a3:function(a,b){var u,t,s,r
H.l(b,"$ie",[W.E],"$ae")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gO:function(a){var u=this.a.childNodes
return new W.dq(u,u.length,[H.ch(C.O,u,"D",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$av:function(){return[W.E]},
$ae:function(){return[W.E]},
$ab:function(){return[W.E]}}
W.E.prototype={
it:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i:function(a){var u=a.nodeValue
return u==null?this.e6(a):u},
hG:function(a,b){return a.appendChild(b)},
$iE:1}
W.cF.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.E]},
$av:function(){return[W.E]},
$ie:1,
$ae:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aD:function(){return[W.E]}}
W.b1.prototype={$ib1:1,
gm:function(a){return a.length}}
W.hJ.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b1]},
$av:function(){return[W.b1]},
$ie:1,
$ae:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aD:function(){return[W.b1]}}
W.hR.prototype={
j:function(a,b){return P.bn(a.get(H.I(b)))},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
ga4:function(a){var u=H.c([],[P.i])
this.J(a,new W.hS(u))
return u},
gm:function(a){return a.size},
$aab:function(){return[P.i,null]},
$iG:1,
$aG:function(){return[P.i,null]}}
W.hS.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hU.prototype={
gm:function(a){return a.length}}
W.b4.prototype={$ib4:1}
W.i3.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b4]},
$av:function(){return[W.b4]},
$ie:1,
$ae:function(){return[W.b4]},
$ib:1,
$ab:function(){return[W.b4]},
$aD:function(){return[W.b4]}}
W.b5.prototype={$ib5:1}
W.i4.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b5]},
$av:function(){return[W.b5]},
$ie:1,
$ae:function(){return[W.b5]},
$ib:1,
$ab:function(){return[W.b5]},
$aD:function(){return[W.b5]}}
W.b6.prototype={$ib6:1,
gm:function(a){return a.length}}
W.i7.prototype={
j:function(a,b){return a.getItem(H.I(b))},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.i,P.i]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga4:function(a){var u=H.c([],[P.i])
this.J(a,new W.i8(u))
return u},
gm:function(a){return a.length},
$aab:function(){return[P.i,P.i]},
$iG:1,
$aG:function(){return[P.i,P.i]}}
W.i8.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:35}
W.aK.prototype={$iaK:1}
W.c6.prototype={}
W.dX.prototype={
ac:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bw(a,b,c,d)
u=W.mm("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.aj(t).a3(0,new W.aj(u))
return t}}
W.ie.prototype={
ac:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bw(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.u.ac(u.createElement("table"),b,c,d)
u.toString
u=new W.aj(u)
s=u.gaD(u)
s.toString
u=new W.aj(s)
r=u.gaD(u)
t.toString
r.toString
new W.aj(t).a3(0,new W.aj(r))
return t}}
W.ig.prototype={
ac:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bw(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.u.ac(u.createElement("table"),b,c,d)
u.toString
u=new W.aj(u)
s=u.gaD(u)
t.toString
s.toString
new W.aj(t).a3(0,new W.aj(s))
return t}}
W.cN.prototype={$icN:1}
W.b7.prototype={$ib7:1}
W.aL.prototype={$iaL:1}
W.ii.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aL]},
$av:function(){return[W.aL]},
$ie:1,
$ae:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aD:function(){return[W.aL]}}
W.ij.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b7]},
$av:function(){return[W.b7]},
$ie:1,
$ae:function(){return[W.b7]},
$ib:1,
$ab:function(){return[W.b7]},
$aD:function(){return[W.b7]}}
W.io.prototype={
gm:function(a){return a.length}}
W.b9.prototype={$ib9:1}
W.aM.prototype={$iaM:1}
W.is.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b9]},
$av:function(){return[W.b9]},
$ie:1,
$ae:function(){return[W.b9]},
$ib:1,
$ab:function(){return[W.b9]},
$aD:function(){return[W.b9]}}
W.it.prototype={
gm:function(a){return a.length}}
W.bE.prototype={}
W.iJ.prototype={
i:function(a){return String(a)}}
W.j0.prototype={
gm:function(a){return a.length}}
W.bb.prototype={
ghU:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.ae("deltaY is not supported"))},
ghT:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.ae("deltaX is not supported"))},
$ibb:1}
W.cV.prototype={
h6:function(a,b){return a.requestAnimationFrame(H.ce(H.m(b,{func:1,ret:-1,args:[P.a9]}),1))},
eK:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cW.prototype={$icW:1}
W.j9.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.T]},
$av:function(){return[W.T]},
$ie:1,
$ae:function(){return[W.T]},
$ib:1,
$ab:function(){return[W.T]},
$aD:function(){return[W.T]}}
W.ef.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
v:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$iap)return!1
return a.left===u.gbk(b)&&a.top===u.gbo(b)&&a.width===u.gaC(b)&&a.height===u.gav(b)},
gH:function(a){return W.ls(C.c.gH(a.left),C.c.gH(a.top),C.c.gH(a.width),C.c.gH(a.height))},
gav:function(a){return a.height},
gaC:function(a){return a.width}}
W.jn.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aW]},
$av:function(){return[W.aW]},
$ie:1,
$ae:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aD:function(){return[W.aW]}}
W.ey.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.E]},
$av:function(){return[W.E]},
$ie:1,
$ae:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aD:function(){return[W.E]}}
W.jA.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b6]},
$av:function(){return[W.b6]},
$ie:1,
$ae:function(){return[W.b6]},
$ib:1,
$ab:function(){return[W.b6]},
$aD:function(){return[W.b6]}}
W.jB.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aK]},
$av:function(){return[W.aK]},
$ie:1,
$ae:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aD:function(){return[W.aK]}}
W.j7.prototype={
J:function(a,b){var u,t,s,r,q
H.m(b,{func:1,ret:-1,args:[P.i,P.i]})
for(u=this.ga4(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.x)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga4:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.i])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=H.k(r[t],"$icW")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aab:function(){return[P.i,P.i]},
$aG:function(){return[P.i,P.i]}}
W.ja.prototype={
j:function(a,b){return this.a.getAttribute(H.I(b))},
gm:function(a){return this.ga4(this).length}}
W.jb.prototype={}
W.kp.prototype={}
W.jc.prototype={}
W.jd.prototype={
$1:function(a){return this.a.$1(H.k(a,"$in"))},
$S:34}
W.bI.prototype={
eh:function(a){var u
if($.en.a===0){for(u=0;u<262;++u)$.en.n(0,C.L[u],W.nI())
for(u=0;u<12;++u)$.en.n(0,C.m[u],W.nJ())}},
aL:function(a){return $.m5().S(0,W.cw(a))},
ak:function(a,b,c){var u=$.en.j(0,H.j(W.cw(a))+"::"+b)
if(u==null)u=$.en.j(0,"*::"+b)
if(u==null)return!1
return H.kv(u.$4(a,b,c,this))},
$iav:1}
W.D.prototype={
gO:function(a){return new W.dq(a,this.gm(a),[H.ch(this,a,"D",0)])}}
W.dJ.prototype={
aL:function(a){return C.a.dh(this.a,new W.hB(a))},
ak:function(a,b,c){return C.a.dh(this.a,new W.hA(a,b,c))},
$iav:1}
W.hB.prototype={
$1:function(a){return H.k(a,"$iav").aL(this.a)},
$S:15}
W.hA.prototype={
$1:function(a){return H.k(a,"$iav").ak(this.a,this.b,this.c)},
$S:15}
W.eG.prototype={
en:function(a,b,c,d){var u,t,s
this.a.a3(0,c)
u=b.br(0,new W.jy())
t=b.br(0,new W.jz())
this.b.a3(0,u)
s=this.c
s.a3(0,C.N)
s.a3(0,t)},
aL:function(a){return this.a.S(0,W.cw(a))},
ak:function(a,b,c){var u=this,t=W.cw(a),s=u.c
if(s.S(0,H.j(t)+"::"+b))return u.d.hE(c)
else if(s.S(0,"*::"+b))return u.d.hE(c)
else{s=u.b
if(s.S(0,H.j(t)+"::"+b))return!0
else if(s.S(0,"*::"+b))return!0
else if(s.S(0,H.j(t)+"::*"))return!0
else if(s.S(0,"*::*"))return!0}return!1},
$iav:1}
W.jy.prototype={
$1:function(a){return!C.a.S(C.m,H.I(a))},
$S:24}
W.jz.prototype={
$1:function(a){return C.a.S(C.m,H.I(a))},
$S:24}
W.jD.prototype={
ak:function(a,b,c){if(this.ea(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.S(0,b)
return!1}}
W.jE.prototype={
$1:function(a){return"TEMPLATE::"+H.j(H.I(a))},
$S:33}
W.jC.prototype={
aL:function(a){var u=J.V(a)
if(!!u.$icI)return!1
u=!!u.$io
if(u&&W.cw(a)==="foreignObject")return!1
if(u)return!0
return!1},
ak:function(a,b,c){if(b==="is"||C.e.bv(b,"on"))return!1
return this.aL(a)},
$iav:1}
W.dq.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scY(J.f9(u.a,t))
u.c=t
return!0}u.scY(null)
u.c=s
return!1},
gF:function(a){return this.d},
scY:function(a){this.d=H.H(a,H.w(this,0))},
$iaX:1}
W.av.prototype={}
W.jw.prototype={$ion:1}
W.eX.prototype={
cv:function(a){new W.jI(this).$2(a,null)},
aV:function(a,b){if(b==null)J.kL(a)
else b.removeChild(a)},
hb:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mb(a)
n=o.a.getAttribute("is")
H.k(a,"$iS")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.B(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ax(r)}t="element unprintable"
try{t=J.aQ(a)}catch(r){H.ax(r)}try{s=W.cw(a)
this.ha(H.k(a,"$iS"),b,p,t,s,H.k(o,"$iG"),H.I(n))}catch(r){if(H.ax(r) instanceof P.aI)throw r
else{this.aV(a,b)
window
q="Removing corrupted element "+H.j(t)
if(typeof console!="undefined")window.console.warn(q)}}},
ha:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.aV(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aL(a)){o.aV(a,b)
window
u="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.ak(a,"is",g)){o.aV(a,b)
window
u="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga4(f)
t=H.c(u.slice(0),[H.w(u,0)])
for(s=f.ga4(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
q=o.a
p=J.md(r)
H.I(r)
if(!q.ak(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.j(e)+" "+r+'="'+H.j(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.V(a).$icN)o.cv(a.content)},
$io8:1}
W.jI.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hb(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aV(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ax(s)
r=H.k(u,"$iE")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.k(t,"$iE")}},
$S:32}
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
W.d1.prototype={}
W.d2.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eM.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.d3.prototype={}
W.d4.prototype={}
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
P.eW.prototype={$iby:1,
gdr:function(a){return this.a}}
P.jP.prototype={
$2:function(a,b){this.a[a]=b},
$S:21}
P.fJ.prototype={
gbG:function(){var u=this.b,t=H.ak(u,"v",0),s=W.S
return new H.h8(new H.cU(u,H.m(new P.fK(),{func:1,ret:P.P,args:[t]}),[t]),H.m(new P.fL(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.bQ(this.gbG().a)},
j:function(a,b){var u=this.gbG()
return u.b.$1(J.k5(u.a,b))},
gO:function(a){var u=P.kY(this.gbG(),!1,W.S)
return new J.al(u,u.length,[H.w(u,0)])},
$av:function(){return[W.S]},
$ae:function(){return[W.S]},
$ab:function(){return[W.S]}}
P.fK.prototype={
$1:function(a){return!!J.V(H.k(a,"$iE")).$iS},
$S:23}
P.fL.prototype={
$1:function(a){return H.r(H.k(a,"$iE"),"$iS")},
$S:31}
P.jr.prototype={
gcp:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.F(t)
return H.H(u+t,H.w(this,0))},
gdj:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.F(t)
return H.H(u+t,H.w(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.j(u.a)+", "+H.j(u.b)+") "+H.j(u.c)+" x "+H.j(u.d)},
v:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.V(b)
if(!!u.$iap){t=p.a
if(t==u.gbk(b)){s=p.b
if(s==u.gbo(b)){r=p.c
if(typeof t!=="number")return t.p()
if(typeof r!=="number")return H.F(r)
q=H.w(p,0)
if(H.H(t+r,q)===u.gcp(b)){t=p.d
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.F(t)
u=H.H(s+t,q)===u.gdj(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u,t=this,s=t.a,r=J.bO(s),q=t.b,p=J.bO(q),o=t.c
if(typeof s!=="number")return s.p()
if(typeof o!=="number")return H.F(o)
u=H.w(t,0)
o=C.d.gH(H.H(s+o,u))
s=t.d
if(typeof q!=="number")return q.p()
if(typeof s!=="number")return H.F(s)
u=C.d.gH(H.H(q+s,u))
return P.mY(P.jp(P.jp(P.jp(P.jp(0,r),p),o),u))}}
P.ap.prototype={
gbk:function(a){return this.a},
gbo:function(a){return this.b},
gaC:function(a){return this.c},
gav:function(a){return this.d}}
P.bh.prototype={$ibh:1}
P.h0.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$av:function(){return[P.bh]},
$ie:1,
$ae:function(){return[P.bh]},
$ib:1,
$ab:function(){return[P.bh]},
$aD:function(){return[P.bh]}}
P.bj.prototype={$ibj:1}
P.hE.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$av:function(){return[P.bj]},
$ie:1,
$ae:function(){return[P.bj]},
$ib:1,
$ab:function(){return[P.bj]},
$aD:function(){return[P.bj]}}
P.hL.prototype={
gm:function(a){return a.length}}
P.cI.prototype={$icI:1}
P.id.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$av:function(){return[P.i]},
$ie:1,
$ae:function(){return[P.i]},
$ib:1,
$ab:function(){return[P.i]},
$aD:function(){return[P.i]}}
P.o.prototype={
gdl:function(a){return new P.fJ(a,new W.aj(a))},
ac:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.av])
C.a.h(p,W.lr(null))
C.a.h(p,W.lt())
C.a.h(p,new W.jC())
c=new W.eX(new W.dJ(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.o).hR(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.aj(s)
q=p.gaD(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$io:1}
P.bm.prototype={$ibm:1}
P.iu.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$av:function(){return[P.bm]},
$ie:1,
$ae:function(){return[P.bm]},
$ib:1,
$ab:function(){return[P.bm]},
$aD:function(){return[P.bm]}}
P.eq.prototype={}
P.er.prototype={}
P.eB.prototype={}
P.eC.prototype={}
P.eN.prototype={}
P.eO.prototype={}
P.eU.prototype={}
P.eV.prototype={}
P.fe.prototype={
gm:function(a){return a.length}}
P.ff.prototype={
j:function(a,b){return P.bn(a.get(H.I(b)))},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
ga4:function(a){var u=H.c([],[P.i])
this.J(a,new P.fg(u))
return u},
gm:function(a){return a.size},
$aab:function(){return[P.i,null]},
$iG:1,
$aG:function(){return[P.i,null]}}
P.fg.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.fh.prototype={
gm:function(a){return a.length}}
P.bR.prototype={}
P.hF.prototype={
gm:function(a){return a.length}}
P.ed.prototype={}
P.dd.prototype={$idd:1}
P.dN.prototype={$idN:1}
P.c4.prototype={
iA:function(a,b,c,d,e,f,g){var u,t=J.V(g)
if(!!t.$iby)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.nz(g))
return}if(!!t.$icz)t=!0
else t=!1
if(t){this.hq(a,b,c,d,e,f,g)
return}throw H.f(P.me("Incorrect number or type of arguments"))},
hq:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
Y:function(a,b,c){return a.uniform1f(b,c)},
bq:function(a,b,c){return a.uniform1i(b,c)},
U:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dW:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
dX:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
dY:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic4:1}
P.dQ.prototype={$idQ:1}
P.dY.prototype={$idY:1}
P.e3.prototype={$ie3:1}
P.i5.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return P.bn(a.item(b))},
E:function(a,b){return this.j(a,b)},
$av:function(){return[[P.G,,,]]},
$ie:1,
$ae:function(){return[[P.G,,,]]},
$ib:1,
$ab:function(){return[[P.G,,,]]},
$aD:function(){return[[P.G,,,]]}}
P.eJ.prototype={}
P.eK.prototype={}
O.a0.prototype={
bb:function(a){var u=this
u.seV(H.c([],[a]))
u.sd2(null)
u.scZ(null)
u.sd3(null)},
cw:function(a,b,c){var u=this,t=H.ak(u,"a0",0)
H.m(b,{func:1,ret:P.P,args:[[P.e,t]]})
t={func:1,ret:-1,args:[P.p,[P.e,t]]}
H.m(a,t)
H.m(c,t)
u.sd2(b)
u.scZ(a)
u.sd3(c)},
aP:function(a,b){return this.cw(a,null,b)},
d1:function(a){var u
H.l(a,"$ie",[H.ak(this,"a0",0)],"$ae")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cE:function(a,b){var u
H.l(b,"$ie",[H.ak(this,"a0",0)],"$ae")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gO:function(a){var u=this.a
return new J.al(u,u.length,[H.w(u,0)])},
E:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ak(s,"a0",0)
H.H(b,r)
r=[r]
if(H.B(s.d1(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.cE(t,H.c([b],r))}},
a3:function(a,b){var u,t,s=this
H.l(b,"$ie",[H.ak(s,"a0",0)],"$ae")
if(H.B(s.d1(b))){u=s.a
t=u.length
C.a.a3(u,b)
s.cE(t,b)}},
seV:function(a){this.a=H.l(a,"$ib",[H.ak(this,"a0",0)],"$ab")},
sd2:function(a){this.b=H.m(a,{func:1,ret:P.P,args:[[P.e,H.ak(this,"a0",0)]]})},
scZ:function(a){this.c=H.m(a,{func:1,ret:-1,args:[P.p,[P.e,H.ak(this,"a0",0)]]})},
sd3:function(a){H.m(a,{func:1,ret:-1,args:[P.p,[P.e,H.ak(this,"a0",0)]]})},
$ie:1}
O.cB.prototype={
gm:function(a){return this.a.length},
gq:function(){var u=this.b
return u==null?this.b=D.L():u},
aE:function(){var u=this.b
if(u!=null)u.D(null)},
ga_:function(a){var u=this.a
if(u.length>0)return C.a.gbj(u)
else return V.bZ()},
bn:function(a){var u=this.a
if(a==null)C.a.h(u,V.bZ())
else C.a.h(u,a)
this.aE()},
ay:function(){var u=this.a
if(u.length>0){u.pop()
this.aE()}},
sbI:function(a){this.a=H.l(a,"$ib",[V.an],"$ab")}}
E.fi.prototype={}
E.ah.prototype={
sbt:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gq().M(0,s.gdL())
u=s.c
if(u!=null)u.gq().h(0,s.gdL())
t=new D.K("shape",r,s.c,[F.dR])
t.b=!0
s.bl(t)}},
ag:function(a,b){var u
for(u=this.y.a,u=new J.al(u,u.length,[H.w(u,0)]);u.A();)u.d.ag(0,b)},
a8:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.ga_(s))
s.aE()
a.cl(t.f)
s=a.dy
u=(s&&C.a).gbj(s)
if(u!=null&&t.d!=null)u.dP(a,t)
for(s=t.y.a,s=new J.al(s,s.length,[H.w(s,0)]);s.A();)s.d.a8(a)
a.ck()
a.dx.ay()},
gq:function(){var u=this.z
return u==null?this.z=D.L():u},
bl:function(a){var u=this.z
if(u!=null)u.D(a)},
a7:function(){return this.bl(null)},
dM:function(a){H.k(a,"$iy")
this.e=null
this.bl(a)},
ii:function(){return this.dM(null)},
dK:function(a){this.bl(H.k(a,"$iy"))},
ie:function(){return this.dK(null)},
ic:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ie",[E.ah],"$ae")
for(u=b.length,t=this.gdJ(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bU()
o.sab(null)
o.saJ(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sab(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a7()},
ih:function(a,b){var u,t
H.l(b,"$ie",[E.ah],"$ae")
for(u=b.gO(b),t=this.gdJ();u.A();)u.gF(u).gq().M(0,t)
this.a7()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seg:function(a,b){this.y=H.l(b,"$ia0",[E.ah],"$aa0")},
$ic_:1}
E.hN.prototype={
ed:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ay(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cB()
t=[V.an]
u.sbI(H.c([],t))
u.b=null
u.gq().h(0,new E.hO(s))
s.cy=u
u=new O.cB()
u.sbI(H.c([],t))
u.b=null
u.gq().h(0,new E.hP(s))
s.db=u
u=new O.cB()
u.sbI(H.c([],t))
u.b=null
u.gq().h(0,new E.hQ(s))
s.dx=u
s.shp(H.c([],[O.bD]))
u=s.dy;(u&&C.a).h(u,null)
s.shk(new H.a2([P.i,A.cJ]))},
gis:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga_(s)
u=t.db
u=t.z=s.w(0,u.ga_(u))
s=u}return s},
cl:function(a){var u=this.dy,t=a==null?(u&&C.a).gbj(u):a;(u&&C.a).h(u,t)},
ck:function(){var u=this.dy
if(u.length>1)u.pop()},
dg:function(a){var u=a.b
if(u.length===0)throw H.f(P.A("May not cache a shader with no name."))
if(this.fr.dn(0,u))throw H.f(P.A('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.n(0,u,a)},
shp:function(a){this.dy=H.l(a,"$ib",[O.bD],"$ab")},
shk:function(a){this.fr=H.l(a,"$iG",[P.i,A.cJ],"$aG")}}
E.hO.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.ch=u.z=null},
$S:8}
E.hP.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:8}
E.hQ.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.cx=u.ch=null},
$S:8}
E.e_.prototype={
cH:function(a){H.k(a,"$iy")
this.dQ()},
cG:function(){return this.cH(null)},
gi2:function(){var u,t=this,s=Date.now(),r=C.d.a2(P.kR(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ay(s,!1)
return u/r},
d6:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.w()
if(typeof r!=="number")return H.F(r)
u=C.c.cb(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.w()
t=C.c.cb(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lg(C.j,s.giw())}},
dQ:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.m(new E.im(this),{func:1,ret:-1,args:[P.a9]})
C.w.eK(u)
C.w.h6(u,W.lA(t,P.a9))}},
iv:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.d6()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ay(r,!1)
s.y=P.kR(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aE()
r=s.db
C.a.sm(r.a,0)
r.aE()
r=s.dx
C.a.sm(r.a,0)
r.aE()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.a8(p.e)}s=p.z
if(s!=null)s.D(null)}catch(q){u=H.ax(q)
t=H.ci(q)
P.kG("Error: "+H.j(u))
P.kG("Stack: "+H.j(t))
throw H.f(u)}}}
E.im.prototype={
$1:function(a){var u
H.lL(a)
u=this.a
if(u.ch){u.ch=!1
u.iv()}},
$S:29}
Z.ea.prototype={$io2:1}
Z.de.prototype={
X:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ax(s)
t=P.A('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.j(u))
throw H.f(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.j(u.e)+"]"}}
Z.eb.prototype={$io3:1}
Z.cp.prototype={
au:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
X:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].X(a)},
aN:function(a){var u,t,s
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
i:function(a){var u,t,s,r,q=[P.i],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aQ(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(p,", ")+"\nAttrs:   "+C.a.l(r,", ")},
seR:function(a){this.b=H.l(a,"$ib",[Z.bX],"$ab")},
$ioa:1}
Z.bX.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c2(this.c)+"'")+"]"}}
Z.bH.prototype={
gcz:function(a){var u=this.a,t=(u&$.aO().a)!==0?3:0
if((u&$.bq().a)!==0)t+=3
if((u&$.bp().a)!==0)t+=3
if((u&$.bM().a)!==0)t+=2
if((u&$.bN().a)!==0)t+=3
if((u&$.d8().a)!==0)t+=3
if((u&$.d9().a)!==0)t+=4
if((u&$.cl().a)!==0)++t
return(u&$.bo().a)!==0?t+4:t},
hH:function(a){var u,t=$.aO(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bq()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bM()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bN()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d8()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d9()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bo()
if((s&t.a)!==0)if(u===a)return t
return $.m4()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bH))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.i]),t=this.a
if((t&$.aO().a)!==0)C.a.h(u,"Pos")
if((t&$.bq().a)!==0)C.a.h(u,"Norm")
if((t&$.bp().a)!==0)C.a.h(u,"Binm")
if((t&$.bM().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bN().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d8().a)!==0)C.a.h(u,"Clr3")
if((t&$.d9().a)!==0)C.a.h(u,"Clr4")
if((t&$.cl().a)!==0)C.a.h(u,"Weight")
if((t&$.bo().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.fl.prototype={}
D.bU.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.y]}
H.m(b,u)
if(this.a==null)this.sab(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
M:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[D.y]})
u=s.a
u=u==null?null:C.a.S(u,b)
if(u===!0){u=s.a
t=(u&&C.a).M(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.S(u,b)
if(u===!0){u=s.b
t=(u&&C.a).M(u,b)||t}return t},
D:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.y()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.J(P.kY(u,!0,{func:1,ret:-1,args:[D.y]}),new D.fE(q))
u=r.b
if(u!=null){r.saJ(H.c([],[{func:1,ret:-1,args:[D.y]}]))
C.a.J(u,new D.fF(q))}return!0},
hX:function(){return this.D(null)},
aA:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.D(u)}}},
sab:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.y]}],"$ab")},
saJ:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.y]}],"$ab")}}
D.fE.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:13}
D.fF.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:13}
D.y.prototype={}
D.bz.prototype={}
D.bA.prototype={}
D.K.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.df.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.df))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.dv.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dv))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.h_.prototype={
io:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
ij:function(a){this.c=a.b
this.d.M(0,a.a)
return!1},
sh_:function(a){this.d=H.l(a,"$ilb",[P.p],"$alb")}}
X.dA.prototype={}
X.h5.prototype={
aT:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.w()
u=b.b
t=q.ch
if(typeof u!=="number")return u.w()
s=new V.a5(o.a+n*m,o.b+u*t)
t=q.a.gaM()
r=new X.bi(a,V.bk(),q.x,t,s)
r.b=!0
q.z=new P.ay(p,!1)
q.x=s
return r},
cj:function(a,b){this.r=a.a
return!1},
b5:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.e1()
if(typeof u!=="number")return u.al()
this.r=(u&~t)>>>0
return!1},
b4:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.aT(a,b))
return!0},
ip:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaM()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.w()
q=a.b
p=o.cy
if(typeof q!=="number")return q.w()
t=new X.cC(new V.R(s*r,q*p),u,t)
t.b=!0
n.D(t)
return!0},
fu:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dA(c,r.a.gaM(),b)
s.b=!0
t.D(s)
r.y=new P.ay(u,!1)
r.x=V.bk()}}
X.au.prototype={
v:function(a,b){var u=this
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
X.bi.prototype={}
X.ht.prototype={
bE:function(a,b,c){var u=this,t=new P.ay(Date.now(),!1),s=u.a.gaM(),r=new X.bi(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cj:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.D(this.bE(a,b,!0))
return!0},
b5:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.e1()
if(typeof t!=="number")return t.al()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.D(u.bE(a,b,!0))
return!0},
b4:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.bE(a,b,!1))
return!0},
iq:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaM()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.w()
r=a.b
q=p.ch
if(typeof r!=="number")return r.w()
u=new X.cC(new V.R(t*s,r*q),u,b)
u.b=!0
o.D(u)
return!0},
gdu:function(){var u=this.b
return u==null?this.b=D.L():u},
gcs:function(){var u=this.c
return u==null?this.c=D.L():u},
gdI:function(){var u=this.d
return u==null?this.d=D.L():u}}
X.cC.prototype={}
X.hK.prototype={}
X.e1.prototype={}
X.ir.prototype={
aT:function(a,b){var u,t,s,r,q=this
H.l(a,"$ib",[V.a5],"$ab")
u=new P.ay(Date.now(),!1)
t=a.length>0?a[0]:V.bk()
s=q.a.gaM()
r=new X.e1(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
im:function(a){var u
H.l(a,"$ib",[V.a5],"$ab")
u=this.b
if(u==null)return!1
u.D(this.aT(a,!0))
return!0},
ik:function(a){var u
H.l(a,"$ib",[V.a5],"$ab")
u=this.c
if(u==null)return!1
u.D(this.aT(a,!0))
return!0},
il:function(a){var u
H.l(a,"$ib",[V.a5],"$ab")
u=this.d
if(u==null)return!1
u.D(this.aT(a,!1))
return!0}}
X.e6.prototype={
gaM:function(){var u=this.a,t=C.h.gdm(u).c
t.toString
u=C.h.gdm(u).d
u.toString
return V.l9(0,0,t,u)},
cT:function(a){var u=a.keyCode,t=H.B(a.ctrlKey)||H.B(a.metaKey)
return new X.dv(u,new X.au(t,a.altKey,a.shiftKey))},
aK:function(a){var u=this.b,t=H.B(a.ctrlKey)||H.B(a.metaKey)
u.c=new X.au(t,a.altKey,a.shiftKey)},
bW:function(a){var u=this.b,t=H.B(a.ctrlKey)||H.B(a.metaKey)
u.c=new X.au(t,a.altKey,a.shiftKey)},
ar:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.t()
u=t.top
if(typeof r!=="number")return r.t()
return new V.a5(s-q,r-u)},
aU:function(a){return new V.R(a.movementX,a.movementY)},
bT:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a5])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
q=C.c.af(r.pageX)
C.c.af(r.pageY)
p=o.left
C.c.af(r.pageX)
C.a.h(n,new V.a5(q-p,C.c.af(r.pageY)-o.top))}return n},
ap:function(a){var u=a.buttons,t=H.B(a.ctrlKey)||H.B(a.metaKey)
return new X.df(u,new X.au(t,a.altKey,a.shiftKey))},
bJ:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.t()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.t()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fn:function(a){this.f=!0},
fb:function(a){this.f=!1},
fh:function(a){H.k(a,"$iac")
if(H.B(this.f)&&this.bJ(a))a.preventDefault()},
fs:function(a){var u
H.k(a,"$iaY")
if(!H.B(this.f))return
u=this.cT(a)
this.b.io(u)},
fp:function(a){var u
H.k(a,"$iaY")
if(!H.B(this.f))return
u=this.cT(a)
this.b.ij(u)},
fw:function(a){var u,t,s,r,q=this
H.k(a,"$iac")
u=q.a
u.focus()
q.f=!0
q.aK(a)
if(H.B(q.x)){t=q.ap(a)
s=q.aU(a)
if(q.d.cj(t,s))a.preventDefault()
return}if(H.B(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ap(a)
r=q.ar(a)
if(q.c.cj(t,r))a.preventDefault()},
fC:function(a){var u,t,s,r=this
H.k(a,"$iac")
r.aK(a)
u=r.ap(a)
if(H.B(r.x)){t=r.aU(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.ar(a)
if(r.c.b5(u,s))a.preventDefault()},
fl:function(a){var u,t,s,r=this
H.k(a,"$iac")
if(!r.bJ(a)){r.aK(a)
u=r.ap(a)
if(H.B(r.x)){t=r.aU(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.ar(a)
if(r.c.b5(u,s))a.preventDefault()}},
fA:function(a){var u,t,s,r=this
H.k(a,"$iac")
r.aK(a)
u=r.ap(a)
if(H.B(r.x)){t=r.aU(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.ar(a)
if(r.c.b4(u,s))a.preventDefault()},
fj:function(a){var u,t,s,r=this
H.k(a,"$iac")
if(!r.bJ(a)){r.aK(a)
u=r.ap(a)
if(H.B(r.x)){t=r.aU(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.ar(a)
if(r.c.b4(u,s))a.preventDefault()}},
fE:function(a){var u,t,s=this
H.k(a,"$ibb")
s.aK(a)
u=new V.R((a&&C.v).ghT(a),C.v.ghU(a)).u(0,180)
if(H.B(s.x)){if(s.d.ip(u))a.preventDefault()
return}if(H.B(s.r))return
t=s.ar(a)
if(s.c.iq(u,t))a.preventDefault()},
fG:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ap(s.y)
t=s.ar(s.y)
s.d.fu(u,t,r)}},
fW:function(a){var u,t=this
H.k(a,"$iaM")
t.a.focus()
t.f=!0
t.bW(a)
u=t.bT(a)
if(t.e.im(u))a.preventDefault()},
fS:function(a){var u
H.k(a,"$iaM")
this.bW(a)
u=this.bT(a)
if(this.e.ik(u))a.preventDefault()},
fU:function(a){var u
H.k(a,"$iaM")
this.bW(a)
u=this.bT(a)
if(this.e.il(u))a.preventDefault()},
seL:function(a){this.z=H.l(a,"$ib",[[P.cL,P.O]],"$ab")}}
D.bv.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.L():u},
ao:function(a){var u
H.k(a,"$iy")
u=this.r
if(u!=null)u.D(a)},
ek:function(){return this.ao(null)},
$iaa:1,
$ic_:1}
D.aa.prototype={$ic_:1}
D.dw.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.L():u},
ao:function(a){var u=this.x
if(u!=null)u.D(a)},
d0:function(a){var u
H.k(a,"$iy")
u=this.y
if(u!=null)u.D(a)},
ft:function(){return this.d0(null)},
fI:function(a){var u,t,s
H.l(a,"$ie",[D.aa],"$ae")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t){s=a[t]
if(s==null||this.ei(s))return!1}return!0},
f5:function(a,b){var u,t,s,r,q,p,o,n=D.aa
H.l(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gd_(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=H.k(b[q],"$iaa")
if(p instanceof D.bv)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.bU()
o.sab(null)
o.saJ(null)
o.c=null
o.d=0
p.r=o}H.m(t,s)
if(o.a==null)o.sab(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bz([n])
n.b=!0
this.ao(n)},
fM:function(a,b){var u,t,s,r=D.aa
H.l(b,"$ie",[r],"$ae")
for(u=b.gO(b),t=this.gd_();u.A();){s=u.gF(u)
C.a.M(this.e,s)
s.gq().M(0,t)}r=new D.bA([r])
r.b=!0
this.ao(r)},
ei:function(a){var u=C.a.S(this.e,a)
return u},
seJ:function(a){this.e=H.l(a,"$ib",[D.bv],"$ab")},
sfX:function(a){this.f=H.l(a,"$ib",[D.dM],"$ab")},
shn:function(a){this.r=H.l(a,"$ib",[D.dV],"$ab")},
$ae:function(){return[D.aa]},
$aa0:function(){return[D.aa]}}
D.dM.prototype={$iaa:1,$ic_:1}
D.dV.prototype={$iaa:1,$ic_:1}
V.a1.prototype={
p:function(a,b){var u=C.c.p(this.a,b.gcm()),t=C.c.p(this.b,b.gbs()),s=C.c.p(this.c,b.gbY())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a1(u,t,s)},
t:function(a,b){var u=C.c.t(this.a,b.gcm()),t=C.c.t(this.b,b.gbs()),s=C.c.t(this.c,b.gbY())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a1(u,t,s)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.am.prototype={
p:function(a,b){var u=this,t=C.c.p(u.a,b.gcm()),s=C.c.p(u.b,b.gbs()),r=C.c.p(u.c,b.gbY()),q=C.c.p(u.d,b.ghF(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.am(t,s,r,q)},
t:function(a,b){var u=this,t=C.c.t(u.a,b.gcm()),s=C.c.t(u.b,b.gbs()),r=C.c.t(u.c,b.gbY()),q=C.c.t(u.d,b.ghF(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.am(t,s,r,q)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.am))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.fD.prototype={}
V.dF.prototype={
a9:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.z])
return t},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dF))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.z],o=V.cg(H.c([q.a,q.d,q.r],p),3,0),n=V.cg(H.c([q.b,q.e,q.x],p),3,0),m=V.cg(H.c([q.c,q.f,q.y],p),3,0)
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
V.an.prototype={
a9:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.z])
return t},
cd:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.Q().a)return V.bZ()
u=1/b1
t=-n
s=-a0
return V.b_((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
w:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.b_(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bp:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.M(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cr:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a4(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.an))return!1
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
i:function(a){return this.P()},
G:function(a){var u,t,s,r,q,p=this,o=[P.z],n=V.cg(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.cg(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.cg(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.cg(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
P:function(){return this.G("")}}
V.a5.prototype={
p:function(a,b){return new V.a5(this.a+b.a,this.b+b.b)},
t:function(a,b){return new V.a5(this.a-b.a,this.b-b.b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.a4.prototype={
p:function(a,b){return new V.a4(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.a4(this.a-b.a,this.b-b.b,this.c-b.c)},
w:function(a,b){return new V.a4(this.a*b,this.b*b,this.c*b)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.b2.prototype={
p:function(a,b){var u=this
return new V.b2(C.d.p(u.a,b.giH(b)),C.d.p(u.b,b.giI(b)),C.d.p(u.c,b.giJ(b)),C.d.p(u.d,b.giG(b)))},
t:function(a,b){var u=this
return new V.b2(C.d.t(u.a,b.giH(b)),C.d.t(u.b,b.giI(b)),C.d.t(u.c,b.giJ(b)),C.d.t(u.d,b.giG(b)))},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b2))return!1
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
ga6:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
v:function(a,b){var u,t,s=this
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
V.R.prototype={
ce:function(a){return Math.sqrt(this.B(this))},
B:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.F(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.F(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a,s=b.gc3(b)
if(typeof t!=="number")return t.p()
s=C.c.p(t,s)
t=this.b
u=b.gc4(b)
if(typeof t!=="number")return t.p()
return new V.R(s,C.c.p(t,u))},
t:function(a,b){var u,t=this.a,s=b.gc3(b)
if(typeof t!=="number")return t.t()
s=C.c.t(t,s)
t=this.b
u=b.gc4(b)
if(typeof t!=="number")return t.t()
return new V.R(s,C.c.t(t,u))},
w:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.w()
u=this.b
if(typeof u!=="number")return u.w()
return new V.R(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.Q().a){u=$.lk
return u==null?$.lk=new V.R(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.R(u/b,t/b)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=this.a
s=$.Q()
s.toString
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.F(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.F(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.M.prototype={
ce:function(a){return Math.sqrt(this.B(this))},
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
at:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.M(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.M(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.M(this.a-b.a,this.b-b.b,this.c-b.c)},
N:function(a){return new V.M(-this.a,-this.b,-this.c)},
w:function(a,b){return new V.M(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if(Math.abs(b-0)<$.Q().a)return V.cT()
return new V.M(this.a/b,this.b/b,this.c/b)},
dH:function(){var u=$.Q().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
v:function(a,b){var u,t,s=this
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
U.fm.prototype={
bz:function(a){var u=V.o1(a,this.c,this.b)
return u},
gq:function(){var u=this.y
return u==null?this.y=D.L():u},
L:function(a){var u=this.y
if(u!=null)u.D(a)},
sct:function(a,b){},
scf:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.Q().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bz(u)}s=new D.K("maximumLocation",s,t.b,[P.z])
s.b=!0
t.L(s)}},
sci:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.Q().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bz(u)}s=new D.K("minimumLocation",s,t.c,[P.z])
s.b=!0
t.L(s)}},
sa5:function(a,b){var u,t=this
b=t.bz(b)
u=t.d
if(!(Math.abs(u-b)<$.Q().a)){t.d=b
u=new D.K("location",u,b,[P.z])
u.b=!0
t.L(u)}},
scg:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.Q().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.K("maximumVelocity",r,a,[P.z])
r.b=!0
s.L(r)}},
sR:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.Q().a)){u.f=a
t=new D.K("velocity",t,a,[P.z])
t.b=!0
u.L(t)}},
sc2:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.Q().a)){this.x=a
u=new D.K("dampening",u,a,[P.z])
u.b=!0
this.L(u)}},
ag:function(a,b){var u,t,s,r=this,q=r.f,p=$.Q().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa5(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.Q().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.dh.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.L():u},
aO:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dh))return!1
return J.X(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cy.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.L():u},
L:function(a){var u
H.k(a,"$iy")
u=this.e
if(u!=null)u.D(a)},
a1:function(){return this.L(null)},
f3:function(a,b){var u,t,s,r,q,p,o,n=U.ad
H.l(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gaI(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.gq()
o.toString
H.m(t,s)
if(o.a==null)o.sab(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bz([n])
n.b=!0
this.L(n)},
fK:function(a,b){var u,t,s=U.ad
H.l(b,"$ie",[s],"$ae")
for(u=b.gO(b),t=this.gaI();u.A();)u.gF(u).gq().M(0,t)
s=new D.bA([s])
s.b=!0
this.L(s)},
aO:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.aa()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.al(r,r.length,[H.w(r,0)]),u=null;r.A();){q=r.d
if(q!=null){t=q.aO(0,b,c)
if(t!=null)u=u==null?t:t.w(0,u)}}s.f=u==null?V.bZ():u
r=s.e
if(r!=null)r.aA(0)}return s.f},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cy))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.X(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ae:function(){return[U.ad]},
$aa0:function(){return[U.ad]},
$iad:1}
U.ad.prototype={}
U.e7.prototype={
gq:function(){var u=this.cy
return u==null?this.cy=D.L():u},
L:function(a){var u
H.k(a,"$iy")
u=this.cy
if(u!=null)u.D(a)},
a1:function(){return this.L(null)},
aW:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdu().h(0,u.gbK())
u.a.c.gdI().h(0,u.gbM())
u.a.c.gcs().h(0,u.gbO())
return!0},
bL:function(a){var u=this
H.k(a,"$iy")
if(!J.X(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bN:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.k(a,"$iy"),"$ibi")
if(!H.B(n.y))return
if(H.B(n.x)){u=a.d.t(0,a.y)
u=new V.R(u.a,u.b)
u=u.B(u)
t=n.r
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.x=!1}if(H.B(n.d)){u=a.c
t=a.d.t(0,a.y)
u=new V.R(t.a,t.b).w(0,2).u(0,u.ga6())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.w()
s=n.e
if(typeof s!=="number")return H.F(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=new V.R(s.a,s.b).w(0,2).u(0,u.ga6())
s=n.b
q=r.a
if(typeof q!=="number")return q.N()
p=n.e
if(typeof p!=="number")return H.F(p)
o=n.z
if(typeof o!=="number")return H.F(o)
s.sa5(0,-q*p+o)
n.b.sR(0)
t=t.t(0,a.z)
n.Q=new V.R(t.a,t.b).w(0,2).u(0,u.ga6())}n.a1()},
bP:function(a){var u,t,s,r=this
H.k(a,"$iy")
if(!H.B(r.y))return
r.y=!1
if(H.B(r.x))return
u=r.Q
if(u.B(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.w()
s=r.e
if(typeof s!=="number")return H.F(s)
u.sR(t*10*s)
r.a1()}},
aO:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.aa()
if(q<p){r.ch=p
u=b.y
r.b.ag(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.b_(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iad:1}
U.e8.prototype={
gq:function(){var u=this.fx
return u==null?this.fx=D.L():u},
L:function(a){var u
H.k(a,"$iy")
u=this.fx
if(u!=null)u.D(a)},
a1:function(){return this.L(null)},
aW:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdu().h(0,s.gbK())
s.a.c.gdI().h(0,s.gbM())
s.a.c.gcs().h(0,s.gbO())
u=s.a.d
t=u.f
u=t==null?u.f=D.L():t
u.h(0,s.geW())
u=s.a.d
t=u.d
u=t==null?u.d=D.L():t
u.h(0,s.geY())
u=s.a.e
t=u.b
u=t==null?u.b=D.L():t
u.h(0,s.ghw())
u=s.a.e
t=u.d
u=t==null?u.d=D.L():t
u.h(0,s.ghu())
u=s.a.e
t=u.c
u=t==null?u.c=D.L():t
u.h(0,s.ghs())
return!0},
aj:function(a){var u=a.a,t=a.b
if(H.B(this.f)){if(typeof u!=="number")return u.N()
u=-u}if(H.B(this.r)){if(typeof t!=="number")return t.N()
t=-t}return new V.R(u,t)},
bL:function(a){var u=this
a=H.r(H.k(a,"$iy"),"$ibi")
if(!J.X(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bN:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.k(a,"$iy"),"$ibi")
if(!H.B(n.cx))return
if(H.B(n.ch)){u=a.d.t(0,a.y)
u=new V.R(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.B(n.e)){u=a.c
t=a.d.t(0,a.y)
u=n.aj(new V.R(t.a,t.b).w(0,2).u(0,u.ga6()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=n.aj(new V.R(s.a,s.b).w(0,2).u(0,u.ga6()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa5(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa5(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.t(0,a.z)
n.dx=n.aj(new V.R(t.a,t.b).w(0,2).u(0,u.ga6()))}n.a1()},
bP:function(a){var u,t,s,r=this
H.k(a,"$iy")
if(!H.B(r.cx))return
r.cx=!1
if(H.B(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sR(-t*10*u)
r.a1()}},
eX:function(a){var u=this
if(H.r(H.k(a,"$iy"),"$idA").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eZ:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.k(a,"$iy"),"$ibi")
if(!J.X(n.d,a.x.b))return
u=a.c
t=a.d
s=t.t(0,a.y)
r=n.aj(new V.R(s.a,s.b).w(0,2).u(0,u.ga6()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa5(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa5(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.t(0,a.z)
n.dx=n.aj(new V.R(t.a,t.b).w(0,2).u(0,u.ga6()))
n.a1()},
hx:function(a){var u=this
H.k(a,"$iy")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hv:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.k(a,"$iy"),"$ie1")
if(!H.B(n.cx))return
if(H.B(n.ch)){u=a.d.t(0,a.y)
u=new V.R(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.B(n.e)){u=a.c
t=a.d.t(0,a.y)
u=n.aj(new V.R(t.a,t.b).w(0,2).u(0,u.ga6()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=n.aj(new V.R(s.a,s.b).w(0,2).u(0,u.ga6()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa5(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa5(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.t(0,a.z)
n.dx=n.aj(new V.R(t.a,t.b).w(0,2).u(0,u.ga6()))}n.a1()},
ht:function(a){var u,t,s,r=this
H.k(a,"$iy")
if(!H.B(r.cx))return
r.cx=!1
if(H.B(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sR(-t*10*u)
r.a1()}},
aO:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.aa()
if(q<p){r.dy=p
u=b.y
r.c.ag(0,u)
r.b.ag(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.b_(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.w(0,V.b_(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iad:1}
U.e9.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.L():u},
L:function(a){var u=this.r
if(u!=null)u.D(a)},
aW:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.L():t
t=r.gf0()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.L():s).h(0,t)
return!0},
f1:function(a){var u,t,s,r,q=this
H.k(a,"$iy")
if(!J.X(q.b,q.a.b.c))return
H.r(a,"$icC")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.w()
r=u+t*s
if(u!==r){q.d=r
u=new D.K("zoom",u,r,[P.z])
u.b=!0
q.L(u)}},
aO:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.b_(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iad:1}
M.dg.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.L():u},
W:function(a){var u
H.k(a,"$iy")
u=this.r
if(u!=null)u.D(a)},
aR:function(){return this.W(null)},
fO:function(a,b){var u,t,s,r,q,p,o,n=M.aw
H.l(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gV(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.gq()
o.toString
H.m(t,s)
if(o.a==null)o.sab(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bz([n])
n.b=!0
this.W(n)},
fQ:function(a,b){var u,t,s=M.aw
H.l(b,"$ie",[s],"$ae")
for(u=b.gO(b),t=this.gV();u.A();)u.gF(u).gq().M(0,t)
s=new D.bA([s])
s.b=!0
this.W(s)},
a8:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.al(u,u.length,[H.w(u,0)]);u.A();){t=u.d
if(t!=null)t.a8(a)}s.f=!1},
$ae:function(){return[M.aw]},
$aa0:function(){return[M.aw]},
$iaw:1}
M.di.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.L():u},
W:function(a){var u
H.k(a,"$iy")
u=this.r
if(u!=null)u.D(a)},
aR:function(){return this.W(null)},
saX:function(a){var u,t,s=this
if(a==null)a=new X.fU()
u=s.b
if(u!==a){if(u!=null)u.gq().M(0,s.gV())
t=s.b
s.b=a
a.gq().h(0,s.gV())
u=new D.K("camera",t,s.b,[X.bS])
u.b=!0
s.W(u)}},
sb6:function(a,b){var u,t,s=this
if(b==null)b=X.kc(null)
u=s.c
if(u!==b){if(u!=null)u.gq().M(0,s.gV())
t=s.c
s.c=b
b.gq().h(0,s.gV())
u=new D.K("target",t,s.c,[X.cM])
u.b=!0
s.W(u)}},
sb7:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().M(0,t.gV())
u=t.d
t.d=a
if(a!=null)a.gq().h(0,t.gV())
s=new D.K("technique",u,t.d,[O.bD])
s.b=!0
t.W(s)}},
a8:function(a){var u=this
a.cl(u.d)
u.c.X(a)
u.b.X(a)
u.e.ag(0,a)
u.e.a8(a)
u.b.aN(a)
u.c.toString
a.ck()},
$iaw:1}
M.dm.prototype={
W:function(a){var u
H.k(a,"$iy")
u=this.y
if(u!=null)u.D(a)},
aR:function(){return this.W(null)},
fd:function(a,b){var u,t,s,r,q,p,o,n=E.ah
H.l(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gV(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bU()
o.sab(null)
o.saJ(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sab(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bz([n])
n.b=!0
this.W(n)},
ff:function(a,b){var u,t,s=E.ah
H.l(b,"$ie",[s],"$ae")
for(u=b.gO(b),t=this.gV();u.A();)u.gF(u).gq().M(0,t)
s=new D.bA([s])
s.b=!0
this.W(s)},
saX:function(a){var u,t,s=this
if(a==null)a=X.l3(null)
u=s.b
if(u!==a){if(u!=null)u.gq().M(0,s.gV())
t=s.b
s.b=a
a.gq().h(0,s.gV())
u=new D.K("camera",t,s.b,[X.bS])
u.b=!0
s.W(u)}},
sb6:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gq().M(0,t.gV())
u=t.c
t.c=b
b.gq().h(0,t.gV())
s=new D.K("target",u,t.c,[X.cM])
s.b=!0
t.W(s)}},
sb7:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().M(0,t.gV())
u=t.d
t.d=a
if(a!=null)a.gq().h(0,t.gV())
s=new D.K("technique",u,t.d,[O.bD])
s.b=!0
t.W(s)}},
gq:function(){var u=this.y
return u==null?this.y=D.L():u},
a8:function(a){var u,t=this
a.cl(t.d)
t.c.X(a)
t.b.X(a)
u=t.d
if(u!=null)u.ag(0,a)
for(u=t.e.a,u=new J.al(u,u.length,[H.w(u,0)]);u.A();)u.d.ag(0,a)
for(u=t.e.a,u=new J.al(u,u.length,[H.w(u,0)]);u.A();)u.d.a8(a)
t.b.toString
a.cy.ay()
a.db.ay()
t.c.toString
a.ck()},
seC:function(a,b){this.e=H.l(b,"$ia0",[E.ah],"$aa0")},
$iaw:1}
M.aw.prototype={}
A.db.prototype={}
A.fd.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hY:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
ds:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ag.prototype={
gah:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
v:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.ag))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.dD.prototype={
ec:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.bl("")
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
A.nh(c0,u)
A.nj(c0,u)
A.ni(c0,u)
A.nl(c0,u)
A.nm(c0,u)
A.nk(c0,u)
A.nn(c0,u)
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
b5.dG(0,s.charCodeAt(0)==0?s:s,A.ng(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.r(b5.y.T(0,"invViewMat"),"$iar")
if(t)b5.dy=H.r(b5.y.T(0,"objMat"),"$iar")
if(r)b5.fr=H.r(b5.y.T(0,"viewObjMat"),"$iar")
b5.fy=H.r(b5.y.T(0,"projViewObjMat"),"$iar")
if(c0.ry)b5.k1=H.r(b5.y.T(0,"txt2DMat"),"$icS")
if(c0.x1)b5.k2=H.r(b5.y.T(0,"txtCubeMat"),"$iar")
if(c0.x2)b5.k3=H.r(b5.y.T(0,"colorMat"),"$iar")
b5.sey(H.c([],[A.ar]))
t=c0.y2
if(t>0){b5.k4=H.k(b5.y.T(0,"bendMatCount"),"$iaD")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.C(P.A(b7+q+b8));(s&&C.a).h(s,H.r(m,"$iar"))}}if(c0.a.a)b5.r2=H.r(b5.y.T(0,"emissionClr"),"$iW")
if(c0.b.a)b5.x1=H.r(b5.y.T(0,"ambientClr"),"$iW")
if(c0.c.a)b5.y2=H.r(b5.y.T(0,"diffuseClr"),"$iW")
if(c0.d.a)b5.dw=H.r(b5.y.T(0,"invDiffuseClr"),"$iW")
t=c0.e.a
if(!t)s=!1
else s=!0
if(s){b5.dA=H.r(b5.y.T(0,"shininess"),"$ia7")
if(t)b5.dz=H.r(b5.y.T(0,"specularClr"),"$iW")}if(c0.cy){b5.dB=H.r(b5.y.T(0,"envSampler"),"$ibF")
if(c0.r.a)b5.dC=H.r(b5.y.T(0,"reflectClr"),"$iW")
t=c0.x.a
if(!t)s=!1
else s=!0
if(s){b5.dD=H.r(b5.y.T(0,"refraction"),"$ia7")
if(t)b5.dE=H.r(b5.y.T(0,"refractClr"),"$iW")}}if(c0.y.a)b5.dF=H.r(b5.y.T(0,"alpha"),"$ia7")
t=P.p
s=[t,A.aD]
b5.seI(new H.a2(s))
b5.sel(new H.a2([t,[P.b,A.c7]]))
b5.sfY(new H.a2(s))
b5.sfZ(new H.a2([t,[P.b,A.c8]]))
b5.shm(new H.a2(s))
b5.sem(new H.a2([t,[P.b,A.ca]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.c7],l=0;l<t.length;t.length===s||(0,H.x)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.j(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.al()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.C(P.A(b7+g+b8))
H.r(m,"$iW")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.C(P.A(b7+g+b8))
H.r(f,"$iW")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.C(P.A(b7+g+b8))
H.r(e,"$iW")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.C(P.A(b7+g+b8))
H.r(m,"$iW")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.C(P.A(b7+g+b8))
H.r(f,"$iW")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.C(P.A(b7+o+b8))
H.r(e,"$ic9")
a=e}else a=b6
C.a.h(h,new A.c7(b,c,d,m,f,a))}b5.c6.n(0,j,h)
q=b5.c5
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.C(P.A(b7+o+b8))
q.n(0,j,H.k(m,"$iaD"))}for(t=c0.Q,s=t.length,r=[A.c8],l=0;l<t.length;t.length===s||(0,H.x)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.j(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.C(P.A(b7+o+b8))
H.r(m,"$iW")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.C(P.A(b7+o+b8))
H.r(f,"$iW")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.C(P.A(b7+o+b8))
H.r(e,"$iW")
if(typeof j!=="number")return j.al()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.C(P.A(b7+o+b8))
H.r(a0,"$icS")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.C(P.A(b7+o+b8))
H.r(a0,"$ibF")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.C(P.A(b7+o+b8))
H.r(a0,"$ibF")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.C(P.A(b7+o+b8))
H.r(a2,"$icR")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.C(P.A(b7+o+b8))
H.r(a0,"$ia7")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.C(P.A(b7+o+b8))
H.r(a2,"$ia7")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.C(P.A(b7+o+b8))
H.r(a5,"$ia7")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.c8(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.c8.n(0,j,h)
q=b5.c7
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.C(P.A(b7+o+b8))
q.n(0,j,H.k(m,"$iaD"))}for(t=c0.ch,s=t.length,r=[A.ca],l=0;l<t.length;t.length===s||(0,H.x)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.j(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.C(P.A(b7+o+b8))
H.r(m,"$iW")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.C(P.A(b7+o+b8))
H.r(f,"$iW")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.C(P.A(b7+o+b8))
H.r(e,"$iW")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.C(P.A(b7+o+b8))
H.r(a0,"$iW")
if(typeof j!=="number")return j.al()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.C(P.A(b7+o+b8))
H.r(a2,"$iW")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.C(P.A(b7+o+b8))
H.r(a5,"$iW")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.C(P.A(b7+o+b8))
H.r(a9,"$ia7")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.C(P.A(b7+o+b8))
H.r(b0,"$ia7")
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
if(a2==null)H.C(P.A(b7+g+b8))
H.r(a2,"$icR")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.C(P.A(b7+g+b8))
H.r(a2,"$ia7")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.C(P.A(b7+g+b8))
H.r(a5,"$ia7")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.C(P.A(b7+g+b8))
H.r(a2,"$ia7")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.C(P.A(b7+g+b8))
H.r(a5,"$ia7")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.C(P.A(b7+g+b8))
H.r(a9,"$ia7")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.C(P.A(b7+g+b8))
H.r(a2,"$ic9")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.C(P.A(b7+o+b8))
H.r(a2,"$ic9")
a3=a2}else a3=b6
C.a.h(h,new A.ca(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.ca.n(0,j,h)
q=b5.c9
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.C(P.A(b7+o+b8))
q.n(0,j,H.k(m,"$iaD"))}}},
hd:function(a,b){},
sey:function(a){this.r1=H.l(a,"$ib",[A.ar],"$ab")},
seI:function(a){this.c5=H.l(a,"$iG",[P.p,A.aD],"$aG")},
sel:function(a){this.c6=H.l(a,"$iG",[P.p,[P.b,A.c7]],"$aG")},
sfY:function(a){this.c7=H.l(a,"$iG",[P.p,A.aD],"$aG")},
sfZ:function(a){this.c8=H.l(a,"$iG",[P.p,[P.b,A.c8]],"$aG")},
shm:function(a){this.c9=H.l(a,"$iG",[P.p,A.aD],"$aG")},
sem:function(a){this.ca=H.l(a,"$iG",[P.p,[P.b,A.ca]],"$aG")}}
A.az.prototype={
i:function(a){return"dirLight"+H.j(this.a)}}
A.aB.prototype={
i:function(a){return"pointLight"+H.j(this.a)}}
A.aC.prototype={
i:function(a){return"spotLight"+H.j(this.a)}}
A.hd.prototype={
i:function(a){return this.b0}}
A.c7.prototype={}
A.c8.prototype={}
A.ca.prototype={}
A.cJ.prototype={
cD:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dG:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cU(b,35633)
r.f=r.cU(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.B(H.kv(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.C(P.A("Failed to link shader: "+H.j(s)))}r.hh()
r.hj()},
X:function(a){a.a.useProgram(this.r)
this.x.hY()},
cU:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.B(H.kv(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.A("Error compiling shader '"+H.j(s)+"': "+H.j(u)))}return s},
hh:function(){var u,t,s,r=this,q=H.c([],[A.db]),p=r.a,o=H.a3(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.db(p,t.name,s))}r.x=new A.fd(q)},
hj:function(){var u,t,s,r=this,q=H.c([],[A.e2]),p=r.a,o=H.a3(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.hS(t.type,t.size,t.name,s))}r.y=new A.iE(q)},
aG:function(a,b,c){var u=this.a
if(a===1)return new A.aD(u,b,c)
else return A.kn(u,this.r,b,a,c)},
eF:function(a,b,c){var u=this.a
if(a===1)return new A.c9(u,b,c)
else return A.kn(u,this.r,b,a,c)},
eG:function(a,b,c){var u=this.a
if(a===1)return new A.bF(u,b,c)
else return A.kn(u,this.r,b,a,c)},
bf:function(a,b){return new P.ek(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
hS:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aG(b,c,d)
case 5121:return u.aG(b,c,d)
case 5122:return u.aG(b,c,d)
case 5123:return u.aG(b,c,d)
case 5124:return u.aG(b,c,d)
case 5125:return u.aG(b,c,d)
case 5126:return new A.a7(u.a,c,d)
case 35664:return new A.iA(u.a,c,d)
case 35665:return new A.W(u.a,c,d)
case 35666:return new A.cR(u.a,c,d)
case 35667:return new A.iB(u.a,c,d)
case 35668:return new A.iC(u.a,c,d)
case 35669:return new A.iD(u.a,c,d)
case 35674:return new A.iF(u.a,c,d)
case 35675:return new A.cS(u.a,c,d)
case 35676:return new A.ar(u.a,c,d)
case 35678:return u.eF(b,c,d)
case 35680:return u.eG(b,c,d)
case 35670:throw H.f(u.bf("BOOL",c))
case 35671:throw H.f(u.bf("BOOL_VEC2",c))
case 35672:throw H.f(u.bf("BOOL_VEC3",c))
case 35673:throw H.f(u.bf("BOOL_VEC4",c))
default:throw H.f(P.A("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.dT.prototype={}
A.e2.prototype={}
A.iE.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
T:function(a,b){var u=this.j(0,b)
if(u==null)throw H.f(P.A("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.P()},
P:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aD.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.iB.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.iC.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.iD.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.iz.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
shz:function(a){H.l(a,"$ib",[P.p],"$ab")}}
A.a7.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.iA.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.W.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.cR.prototype={
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.iF.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.cS.prototype={
ae:function(a){var u=new Float32Array(H.d5(H.l(a,"$ib",[P.z],"$ab")))
C.b.dX(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.ar.prototype={
ae:function(a){var u=new Float32Array(H.d5(H.l(a,"$ib",[P.z],"$ab")))
C.b.dY(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.c9.prototype={
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.bF.prototype={
e3:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.k2.prototype={
$1:function(a){return new V.a4(Math.cos(a),Math.sin(a),0)},
$S:36}
F.jQ.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.kK(n.$1(o),m)
m=J.m8(J.kK(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.M(m.a,m.b,m.c)
u=m.u(0,Math.sqrt(m.B(m)))
n=$.lm
if(n==null){n=new V.M(1,0,0)
$.lm=n
t=n}else t=n
n=u.at(!J.X(u,t)?V.lo():t)
s=n.u(0,Math.sqrt(n.B(n)))
n=s.at(u)
t=n.u(0,Math.sqrt(n.B(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.w(0,n*m)
m=s.w(0,q*m)
m=J.m7(l,new V.a4(n.a-m.a,n.b-m.b,n.c-m.c))
if(!J.X(a.f,m)){a.f=H.k(m,"$ia4")
n=a.a
if(n!=null)n.a7()}},
$S:37}
F.a6.prototype={
b_:function(){var u=this
if(!u.gdt()){C.a.M(u.a.a.d.b,u)
u.a.a.a7()}u.h2()
u.h3()
u.h4()},
he:function(a){this.a=a
C.a.h(a.d.b,this)},
hf:function(a){this.b=a
C.a.h(a.d.c,this)},
hg:function(a){this.c=a
C.a.h(a.d.d,this)},
h2:function(){var u=this.a
if(u!=null){C.a.M(u.d.b,this)
this.a=null}},
h3:function(){var u=this.b
if(u!=null){C.a.M(u.d.c,this)
this.b=null}},
h4:function(){var u=this.c
if(u!=null){C.a.M(u.d.d,this)
this.c=null}},
gdt:function(){return this.a==null||this.b==null||this.c==null},
ex:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cT()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.dH())return
return s.u(0,Math.sqrt(s.B(s)))},
eB:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.t(0,q)
r=new V.M(r.a,r.b,r.c)
s=r.u(0,Math.sqrt(r.B(r)))
r=t.t(0,q)
r=new V.M(r.a,r.b,r.c)
r=s.at(r.u(0,Math.sqrt(r.B(r))))
return r.u(0,Math.sqrt(r.B(r)))},
c0:function(){var u,t=this
if(t.d!=null)return!0
u=t.ex()
if(u==null){u=t.eB()
if(u==null)return!1}t.d=u
t.a.a.a7()
return!0},
ew:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cT()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.dH())return
return s.u(0,Math.sqrt(s.B(s)))},
eA:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.Q().a){l=d.t(0,g)
l=new V.M(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.B(l)))
if(s.a-t.a<0)q=q.N(0)}else{p=(l-u.b)/r
l=d.t(0,g).w(0,p).p(0,g).t(0,j)
l=new V.M(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.B(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.N(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.B(l)))
l=o.at(q)
l=l.u(0,Math.sqrt(l.B(l))).at(o)
q=l.u(0,Math.sqrt(l.B(l)))}return q},
bZ:function(){var u,t=this
if(t.e!=null)return!0
u=t.ew()
if(u==null){u=t.eA()
if(u==null)return!1}t.e=u
t.a.a.a7()
return!0},
ghO:function(a){var u=this
if(J.X(u.a,u.b))return!0
if(J.X(u.b,u.c))return!0
if(J.X(u.c,u.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u,t,s=this
if(s.gdt())return a+"disposed"
u=a+C.e.ax(J.aQ(s.a.e),0)+", "+C.e.ax(J.aQ(s.b.e),0)+", "+C.e.ax(J.aQ(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
P:function(){return this.G("")}}
F.fG.prototype={}
F.i2.prototype={
b3:function(a,b,c){var u,t=b.a
t.a.a.C()
t=t.e
u=c.a
u.a.a.C()
if(t==u.e){t=b.b
t.a.a.C()
t=t.e
u=c.b
u.a.a.C()
if(t==u.e){t=b.c
t.a.a.C()
t=t.e
u=c.c
u.a.a.C()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.C()
t=t.e
u=c.b
u.a.a.C()
if(t==u.e){t=b.b
t.a.a.C()
t=t.e
u=c.c
u.a.a.C()
if(t==u.e){t=b.c
t.a.a.C()
t=t.e
u=c.a
u.a.a.C()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.C()
t=t.e
u=c.c
u.a.a.C()
if(t==u.e){t=b.b
t.a.a.C()
t=t.e
u=c.a
u.a.a.C()
if(t==u.e){t=b.c
t.a.a.C()
t=t.e
u=c.b
u.a.a.C()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bC.prototype={}
F.h1.prototype={}
F.iy.prototype={
b3:function(a,b,c){var u,t=b.a
t.a.a.C()
t=t.e
u=c.a
u.a.a.C()
if(t==u.e){t=b.b
t.a.a.C()
t=t.e
u=c.b
u.a.a.C()
return t==u.e}else{t=b.a
t.a.a.C()
t=t.e
u=c.b
u.a.a.C()
if(t==u.e){t=b.b
t.a.a.C()
t=t.e
u=c.a
u.a.a.C()
return t==u.e}else return!1}}}
F.c0.prototype={}
F.dR.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.L():u},
as:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.as()||!1
if(!t.a.as())u=!1
s=t.e
if(s!=null)s.aA(0)
return u},
ia:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.w(o,0)])
for(o=[F.ai];u.length!==0;){t=C.a.gi0(u)
C.a.dO(u,0)
if(t!=null){s=H.c([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.b3(0,t,q)){C.a.h(s,q)
C.a.dO(u,r)}}if(s.length>1)b.i9(s)}}p.a.C()
p.c.cn()
p.d.cn()
p.b.iu()
p.c.co(new F.iy())
p.d.co(new F.i2())
o=p.e
if(o!=null)o.aA(0)},
dk:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aO()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bq().a)!==0)++s
if((t&$.bp().a)!==0)++s
if((t&$.bM().a)!==0)++s
if((t&$.bN().a)!==0)++s
if((t&$.d8().a)!==0)++s
if((t&$.d9().a)!==0)++s
if((t&$.cl().a)!==0)++s
if((t&$.bo().a)!==0)++s
r=a3.gcz(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.z
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.de])
for(n=0,m=0;m<s;++m){l=a3.hH(m)
k=l.gcz(l)
C.a.n(o,m,new Z.de(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.d(u,j)
i=u[j].i7(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.n(p,h,i[g]);++h}}n+=k}H.l(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.d5(p)),35044)
u.bindBuffer(a0,null)
e=new Z.cp(new Z.ea(a0,f),o,a3)
e.seR(H.c([],[Z.bX]))
a.b.b
if(a.c.b.length!==0){t=P.p
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.C()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.C()
C.a.h(d,c.e)}b=Z.lp(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bX(1,d.length,b))}if(a.d.b.length!==0){t=P.p
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.C()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.C()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].c
c.a.a.C()
C.a.h(d,c.e)}b=Z.lp(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bX(4,d.length,b))}return e},
i:function(a){var u=this,t=H.c([],[P.i])
if(u.a.c.length!==0){C.a.h(t,"Vertices:")
C.a.h(t,u.a.G("   "))}u.b.b
if(u.c.b.length!==0){C.a.h(t,"Lines:")
C.a.h(t,u.c.G("   "))}if(u.d.b.length!==0){C.a.h(t,"Faces:")
C.a.h(t,u.d.G("   "))}return C.a.l(t,"\n")},
a7:function(){var u=this.e
if(u!=null)u.D(null)},
$io9:1}
F.hW.prototype={
hC:function(a){var u,t,s,r,q,p
H.l(a,"$ib",[F.ai],"$ab")
u=H.c([],[F.a6])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.dp(t,q,p))}return u},
hD:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.ai],"$ab")
u=H.c([],[F.a6])
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
C.a.h(u,F.dp(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dp(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dp(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dp(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
co:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b3(0,p,n)){p.b_()
break}}}}},
cn:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.ghO(s)
if(t)s.b_()}},
as:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].c0())s=!1
return s},
c_:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].bZ())s=!1
return s},
i:function(a){return this.P()},
G:function(a){var u,t,s,r=H.c([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].G(a))
return C.a.l(r,"\n")},
P:function(){return this.G("")},
seM:function(a){this.b=H.l(a,"$ib",[F.a6],"$ab")}}
F.hX.prototype={
gm:function(a){return this.b.length},
co:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b3(0,p,n)){p.b_()
break}}}}},
cn:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.X(s.a,s.b)
if(t)s.b_()}},
i:function(a){return this.P()},
G:function(a){var u,t,s=H.c([],[P.i]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
C.a.h(s,t[u].G(a+(""+u+". ")))}return C.a.l(s,"\n")},
P:function(){return this.G("")},
seS:function(a){this.b=H.l(a,"$ib",[F.bC],"$ab")}}
F.hY.prototype={
gm:function(a){return 0},
iu:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.d(t,u)
t=t[u].gj7()
t=t.gj4(t)
if(t.gm(t).am(0,1)){t=this.b
return H.d(t,u)
t[u].b_()}}},
i:function(a){return this.P()},
G:function(a){var u,t,s=H.c([],[P.i])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.d(u,t)
C.a.h(s,u[t].G(a))}return C.a.l(s,"\n")},
P:function(){return this.G("")},
sbS:function(a){this.b=H.l(a,"$ib",[F.c0],"$ab")}}
F.ai.prototype={
dq:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.iP(u.cx,r,o,t,s,q,p,a,n)},
i7:function(a){var u,t,s=this
if(a.v(0,$.aO())){u=s.f
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.bq())){u=s.r
t=[P.z]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.bp())){u=s.x
t=[P.z]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.bM())){u=s.y
t=[P.z]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.v(0,$.bN())){u=s.z
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.d8())){u=s.Q
t=[P.z]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.d9())){u=s.Q
t=[P.z]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.v(0,$.cl()))return H.c([s.ch],[P.z])
else if(a.v(0,$.bo())){u=s.cx
t=[P.z]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.z])},
c0:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cT()
t.d.J(0,new F.j_(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.a7()
s=t.a.e
if(s!=null)s.aA(0)}return!0},
bZ:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cT()
t.d.J(0,new F.iZ(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.a7()
s=t.a.e
if(s!=null)s.aA(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u,t,s=this,r="-",q=H.c([],[P.i])
C.a.h(q,C.e.ax(J.aQ(s.e),0))
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
P:function(){return this.G("")}}
F.j_.prototype={
$1:function(a){var u,t
H.k(a,"$ia6")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:5}
F.iZ.prototype={
$1:function(a){var u,t
H.k(a,"$ia6")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:5}
F.iQ.prototype={
C:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.A("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a7()
return!0},
bg:function(a,b,c,d,e,f){var u=F.iP(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gm:function(a){return this.c.length},
as:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].c0()
return!0},
c_:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].bZ()
return!0},
hN:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.X(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.D(null)}}}}return!0},
i:function(a){return this.P()},
G:function(a){var u,t,s,r
this.C()
u=H.c([],[P.i])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
P:function(){return this.G("")},
shA:function(a){this.c=H.l(a,"$ib",[F.ai],"$ab")}}
F.iR.prototype={
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
J:function(a,b){var u=this
H.m(b,{func:1,ret:-1,args:[F.a6]})
C.a.J(u.b,b)
C.a.J(u.c,new F.iS(u,b))
C.a.J(u.d,new F.iT(u,b))},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.c([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].G(""))
return C.a.l(r,"\n")},
seN:function(a){this.b=H.l(a,"$ib",[F.a6],"$ab")},
seO:function(a){this.c=H.l(a,"$ib",[F.a6],"$ab")},
seP:function(a){this.d=H.l(a,"$ib",[F.a6],"$ab")}}
F.iS.prototype={
$1:function(a){H.k(a,"$ia6")
if(!J.X(a.a,this.a))this.b.$1(a)},
$S:5}
F.iT.prototype={
$1:function(a){var u
H.k(a,"$ia6")
u=this.a
if(!J.X(a.a,u)&&!J.X(a.b,u))this.b.$1(a)},
$S:5}
F.iU.prototype={
gm:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.d(t,u)
return t[u]}else{if(b<0)return H.d(t,b)
return t[b]}},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.c([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].G(""))
return C.a.l(r,"\n")},
seT:function(a){this.b=H.l(a,"$ib",[F.bC],"$ab")},
seU:function(a){this.c=H.l(a,"$ib",[F.bC],"$ab")}}
F.iW.prototype={}
F.iV.prototype={
b3:function(a,b,c){return J.X(b.f,c.f)}}
F.iX.prototype={}
F.hC.prototype={
i9:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ib",[F.ai],"$ab")
u=V.cT()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.M(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.u(0,Math.sqrt(u.B(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.x)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.u(0,Math.sqrt(o*o+n*n+m*m))}if(!J.X(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.D(null)}}}return}}
F.iY.prototype={
gm:function(a){return 0},
i:function(a){return this.P()},
P:function(){var u,t,s=H.c([],[P.i])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.d(u,t)
C.a.h(s,u[t].G(""))}return C.a.l(s,"\n")},
sbS:function(a){this.b=H.l(a,"$ib",[F.c0],"$ab")}}
O.dC.prototype={
gq:function(){var u=this.fr
return u==null?this.fr=D.L():u},
Z:function(a){var u
H.k(a,"$iy")
u=this.fr
if(u!=null)u.D(a)},
by:function(){return this.Z(null)},
d5:function(a){H.k(a,"$iy")
this.a=null
this.Z(a)},
h8:function(){return this.d5(null)},
f7:function(a,b){var u=V.an
H.l(b,"$ie",[u],"$ae")
u=new D.bz([u])
u.b=!0
this.Z(u)},
f9:function(a,b){var u=V.an
H.l(b,"$ie",[u],"$ae")
u=new D.bA([u])
u.b=!0
this.Z(u)},
cR:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.p,h=new H.a2([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=h.j(0,0)
h.n(0,0,r==null?1:r)}q=H.c([],[A.az])
h.J(0,new O.hh(j,q))
C.a.bu(q,new O.hi())
p=new H.a2([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){o=u[s]
r=o.gaZ()
n=p.j(0,o.gaZ())
p.n(0,r,n==null?1:n)}m=H.c([],[A.aB])
p.J(0,new O.hj(j,m))
C.a.bu(m,new O.hk())
l=new H.a2([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.x)(i),++s){o=i[s]
t=o.gaZ()
r=l.j(0,o.gaZ())
l.n(0,t,r==null?1:r)}k=H.c([],[A.aC])
l.J(0,new O.hl(j,k))
C.a.bu(k,new O.hm())
i=C.d.a2(j.e.a.length+3,4)
j.dy.e
return A.mx(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
ev:function(a,b){H.l(a,"$ib",[T.cO],"$ab")},
ag:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.al(u,u.length,[H.w(u,0)]);u.A();){t=u.d
t.toString
s=$.iO
if(s==null)s=$.iO=new V.M(0,0,1)
t.a=s
r=$.iN
t.d=r==null?$.iN=new V.M(0,1,0):r
r=$.iM
t.e=r==null?$.iM=new V.M(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bp(s)
r=s.a
p=s.b
o=s.c
t.a=s.u(0,Math.sqrt(r*r+p*p+o*o))
o=q.bp(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.u(0,Math.sqrt(p*p+r*r+s*s))
s=q.bp(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.u(0,Math.sqrt(r*r+p*p+o*o))}}}},
dP:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cR()
u=H.k(b4.fr.j(0,b3.b0),"$idD")
if(u==null){u=A.mw(b3,b4.a)
b4.dg(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.dv
b3=b5.e
if(!(b3 instanceof Z.cp))b3=b5.e=null
if(b3==null||!b3.d.v(0,s)){b3=t.k3
if(b3)b5.d.as()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.c_()
q.a.c_()
q=q.e
if(q!=null)q.aA(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.hN()
p=p.e
if(p!=null)p.aA(0)}n=b5.d.dk(new Z.eb(b4.a),s)
n.au($.aO()).e=b2.a.Q.c
if(b3)n.au($.bq()).e=b2.a.cx.c
if(r)n.au($.bp()).e=b2.a.ch.c
if(t.r1)n.au($.bM()).e=b2.a.cy.c
if(q)n.au($.bN()).e=b2.a.db.c
if(t.rx)n.au($.bo()).e=b2.a.dx.c
b5.e=n}b3=T.cO
m=H.c([],[b3])
b2.a.X(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.ga_(q)
r=r.dy
r.toString
r.ae(q.a9(0,!0))}if(t.fr){r=b2.a
q=b4.cx
if(q==null){q=b4.db
q=q.ga_(q)
p=b4.dx
p=b4.cx=q.w(0,p.ga_(p))
q=p}r=r.fr
r.toString
r.ae(q.a9(0,!0))}r=b2.a
q=b4.ch
if(q==null){q=b4.gis()
p=b4.dx
p=b4.ch=q.w(0,p.ga_(p))
q=p}r=r.fy
r.toString
r.ae(q.a9(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.ae(C.k.a9(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.ae(C.k.a9(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.ae(C.k.a9(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.b.bq(r.a,r.d,l)
for(r=[P.z],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.d(p,k)
p=p[k]
q.toString
H.k(p,"$ian")
q=q.r1
if(k>=q.length)return H.d(q,k)
q=q[k]
j=new Float32Array(H.d5(H.l(p.a9(0,!0),"$ib",r,"$ab")))
C.b.dY(q.a,q.d,!1,j)}}if(t.a.a){r=b2.a
q=b2.f.f
r=r.r2
C.b.U(r.a,r.d,q.a,q.b,q.c)}if(t.id){if(t.b.a){r=b2.a
q=b2.r.f
r=r.x1
C.b.U(r.a,r.d,q.a,q.b,q.c)}if(t.c.a){r=b2.a
q=b2.x.f
r=r.y2
C.b.U(r.a,r.d,q.a,q.b,q.c)}if(t.d.a){r=b2.a
q=b2.y.f
r=r.dw
C.b.U(r.a,r.d,q.a,q.b,q.c)}r=t.e.a
if(!r)q=!1
else q=!0
if(q){q=b2.a
p=b2.z.ch
q=q.dA
C.b.Y(q.a,q.d,p)}if(r){r=b2.a
q=b2.z.f
r=r.dz
C.b.U(r.a,r.d,q.a,q.b,q.c)}r=t.z
if(r.length>0){q=b4.db
i=q.ga_(q)
q=P.p
h=new H.a2([q,q])
for(q=b2.dx.e,p=q.length,g=0;g<q.length;q.length===p||(0,H.x)(q),++g){f=q[g]
e=h.j(0,0)
if(e==null)e=0
h.n(0,0,e+1)
d=J.f9(b2.a.c6.j(0,0),e)
o=i.bp(f.a)
c=o.a
b=o.b
a=o.c
a=o.u(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
o=a.b
a=a.c
C.b.U(b.a,b.d,c,o,a)
a=f.c
o=d.f
C.b.U(o.a,o.d,a.a,a.b,a.c)}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.x)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.c5.j(0,p)
C.b.bq(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.ga_(q)
q=P.p
a0=new H.a2([q,q])
for(q=b2.dx.f,p=q.length,o=[b3],c=[P.z],g=0;g<q.length;q.length===p||(0,H.x)(q),++g){f=q[g]
a1=f.gaZ()
e=a0.j(0,a1)
if(e==null)e=0
a0.n(0,a1,e+1)
d=J.f9(b2.a.c8.j(0,a1),e)
a2=i.w(0,f.ga_(f))
b=f.ga_(f)
a=$.cG
b=b.cr(a==null?$.cG=new V.a4(0,0,0):a)
a=d.b
C.b.U(a.a,a.d,b.a,b.b,b.c)
b=$.cG
b=a2.cr(b==null?$.cG=new V.a4(0,0,0):b)
a=d.c
C.b.U(a.a,a.d,b.a,b.b,b.c)
b=f.gaY(f)
a=d.e
C.b.U(a.a,a.d,b.a,b.b,b.c)
f.gaB()
b=a2.cd(0)
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
j=new Float32Array(H.d5(H.l(new V.dF(a,a3,a4,a5,a6,a7,a8,a9,b).a9(0,!0),"$ib",c,"$ab")))
C.b.dX(b0.a,b0.d,!1,j)
f.gaB()
b=f.gaB()
H.l(m,"$ib",o,"$ab")
if(!C.a.S(m,b)){b.sb1(0,m.length)
C.a.h(m,b)}b=f.gaB()
a=b.gb2(b)
if(a){a=d.f
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}f.gaQ()
b=f.ge4()
a=d.x
a.toString
a3=b.gc3(b)
a4=b.gc4(b)
a5=b.ghW()
b=b.ghV()
C.b.dW(a.a,a.d,a3,a4,a5,b)
b=f.gaQ()
if(!C.a.S(m,b)){b.sb1(0,m.length)
C.a.h(m,b)}b=f.gaQ()
a=b.gb2(b)
if(a){a=d.r
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}if(f.ghZ()){b=f.ghI()
a=d.y
C.b.Y(a.a,a.d,b)
b=f.ghJ()
a=d.z
C.b.Y(a.a,a.d,b)
b=f.ghK()
a=d.Q
C.b.Y(a.a,a.d,b)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.x)(r),++g){p=r[g].a
l=a0.j(0,p)
if(l==null)l=0
p=b2.a.c7.j(0,p)
C.b.bq(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.ga_(q)
q=P.p
b1=new H.a2([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.x)(q),++g){f=q[g]
a1=f.gaZ()
e=b1.j(0,a1)
if(e==null)e=0
b1.n(0,a1,e+1)
d=J.f9(b2.a.ca.j(0,a1),e)
o=f.gir(f)
c=d.b
C.b.U(c.a,c.d,o.a,o.b,o.c)
o=f.giN(f).j3()
c=d.c
C.b.U(c.a,c.d,o.a,o.b,o.c)
o=i.cr(f.gir(f))
c=d.d
C.b.U(c.a,c.d,o.a,o.b,o.c)
o=f.gaY(f)
c=d.e
C.b.U(c.a,c.d,o.a,o.b,o.c)
f.gaB()
o=f.gcs()
c=d.f
C.b.U(c.a,c.d,o.a,o.b,o.c)
o=f.gcp(f)
c=d.r
C.b.U(c.a,c.d,o.a,o.b,o.c)
o=f.gj5()
c=d.x
C.b.Y(c.a,c.d,o)
o=f.gj6()
c=d.y
C.b.Y(c.a,c.d,o)
f.gaB()
o=f.gaB()
H.l(m,"$ib",b3,"$ab")
if(!C.a.S(m,o)){o.sb1(0,m.length)
C.a.h(m,o)}o=f.gaB()
c=o.gb2(o)
if(c){c=d.dx
c.toString
b=o.gb2(o)
if(!b)c.a.uniform1i(c.d,0)
else{o=o.gb1(o)
c.a.uniform1i(c.d,o)}}f.gaQ()
o=f.ge4()
c=d.z
c.toString
b=o.gc3(o)
a=o.gc4(o)
a3=o.ghW()
o=o.ghV()
C.b.dW(c.a,c.d,b,a,a3,o)
o=f.gaQ()
if(!C.a.S(m,o)){o.sb1(0,m.length)
C.a.h(m,o)}o=f.gaQ()
c=o.gb2(o)
if(c){c=d.dy
c.toString
b=o.gb2(o)
if(!b)c.a.uniform1i(c.d,0)
else{o=o.gb1(o)
c.a.uniform1i(c.d,o)}}if(f.giO()){o=f.giM()
c=d.Q
C.b.Y(c.a,c.d,o)
o=f.giL()
c=d.ch
C.b.Y(c.a,c.d,o)}if(f.ghZ()){o=f.ghI()
c=d.cx
C.b.Y(c.a,c.d,o)
o=f.ghJ()
c=d.cy
C.b.Y(c.a,c.d,o)
o=f.ghK()
c=d.db
C.b.Y(c.a,c.d,o)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.x)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.c9.j(0,q)
C.b.bq(q.a,q.d,l)}}}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.ga_(r).cd(0)}b3=b3.id
b3.toString
b3.ae(r.a9(0,!0))}if(t.cy){b2.ev(m,b2.ch)
b3=b2.a
r=b2.ch
b3.hd(b3.dB,r)
if(t.r.a){b3=b2.a
r=b2.cx.f
b3=b3.dC
C.b.U(b3.a,b3.d,r.a,r.b,r.c)}b3=t.x.a
if(!b3)r=!1
else r=!0
if(r){r=b2.a
q=b2.cy.ch
r=r.dD
C.b.Y(r.a,r.d,q)}if(b3){b3=b2.a
r=b2.cy.f
b3=b3.dE
C.b.U(b3.a,b3.d,r.a,r.b,r.c)}}b3=t.y.a
r=!b3
if(r)q=!1
else q=!0
if(q){if(b3){b3=b2.a
q=b2.db.f
b3=b3.dF
C.b.Y(b3.a,b3.d,q)}b3=b4.a
b3.enable(3042)
b3.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].X(b4)
b3=b5.e
b3.X(b4)
b3.a8(b4)
b3.aN(b4)
if(r)b3=!1
else b3=!0
if(b3)b4.a.disable(3042)
for(k=0;k<m.length;++k)m[k].aN(b4)
b3=b2.a
b3.toString
b4.a.useProgram(null)
b3.x.ds()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cR().b0},
sez:function(a){this.e=H.l(a,"$ia0",[V.an],"$aa0")}}
O.hh.prototype={
$2:function(a,b){H.a3(a)
H.a3(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.az(a,C.d.a2(b+3,4)*4))},
$S:10}
O.hi.prototype={
$2:function(a,b){H.k(a,"$iaz")
H.k(b,"$iaz")
return J.k4(a.a,b.a)},
$S:41}
O.hj.prototype={
$2:function(a,b){H.a3(a)
H.a3(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aB(a,C.d.a2(b+3,4)*4))},
$S:10}
O.hk.prototype={
$2:function(a,b){H.k(a,"$iaB")
H.k(b,"$iaB")
return J.k4(a.a,b.a)},
$S:42}
O.hl.prototype={
$2:function(a,b){H.a3(a)
H.a3(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aC(a,C.d.a2(b+3,4)*4))},
$S:10}
O.hm.prototype={
$2:function(a,b){H.k(a,"$iaC")
H.k(b,"$iaC")
return J.k4(a.a,b.a)},
$S:43}
O.hb.prototype={
aq:function(){var u,t=this
t.cB()
u=t.f
if(!(Math.abs(u-1)<$.Q().a)){t.f=1
u=new D.K(t.b,u,1,[P.z])
u.b=!0
t.a.Z(u)}}}
O.dE.prototype={
aq:function(){},
d8:function(a){var u,t,s=this
if(!s.c.v(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aq()
u=s.a
u.a=null
u.Z(null)}}}
O.hc.prototype={}
O.aZ.prototype={
d7:function(a){var u,t,s=this
if(!s.f.v(0,a)){u=s.f
s.f=a
t=new D.K(s.b+".color",u,a,[V.a1])
t.b=!0
s.a.Z(t)}},
aq:function(){this.cB()
this.d7(new V.a1(1,1,1))},
saY:function(a,b){this.d8(new A.ag(!0,!1,!1))
this.d7(b)}}
O.he.prototype={}
O.hf.prototype={
aq:function(){var u,t=this
t.cC()
u=t.ch
if(!(Math.abs(u-1)<$.Q().a)){t.ch=1
u=new D.K(t.b+".refraction",u,1,[P.z])
u.b=!0
t.a.Z(u)}}}
O.hg.prototype={
d9:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.Q().a)){u.ch=a
t=new D.K(u.b+".shininess",t,a,[P.z])
t.b=!0
u.a.Z(t)}},
aq:function(){this.cC()
this.d9(100)}}
O.dS.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.L():u},
Z:function(a){var u
H.k(a,"$iy")
u=this.e
if(u!=null)u.D(a)},
by:function(){return this.Z(null)},
dP:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.k(a.fr.j(0,n),"$idT")
if(u==null){t=a.a
u=new A.dT(t,n)
u.cD(t,n)
u.dG(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.r(u.y.j(0,"fov"),"$ia7")
u.ch=H.r(u.y.j(0,"ratio"),"$ia7")
u.cx=H.r(u.y.j(0,"boxClr"),"$iW")
u.cy=H.r(u.y.j(0,"boxTxt"),"$ibF")
u.db=H.r(u.y.j(0,"viewMat"),"$iar")
a.dg(u)}o.a=u}if(b.e==null){t=b.d.dk(new Z.eb(a.a),$.aO())
t.au($.aO()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
s.activeTexture(33985)
s.bindTexture(34067,t.b)}}t=a.d
s=a.c
r=o.a
r.X(a)
q=o.b
p=r.Q
C.b.Y(p.a,p.d,q)
q=r.ch
C.b.Y(q.a,q.d,t/s)
s=o.c
r.cy.e3(s)
s=o.d
t=r.cx
C.b.U(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga_(s).cd(0)
r=r.db
r.toString
r.ae(s.a9(0,!0))
t=b.e
if(t instanceof Z.cp){t.X(a)
t.a8(a)
t.aN(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.ds()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.bD.prototype={}
T.cO.prototype={}
T.dZ.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.L():u}}
T.ik.prototype={
aH:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.n
W.a8(t,"load",H.m(new T.il(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
h9:function(a,b,c){var u,t,s,r
b=V.kF(b)
u=V.kF(a.width)
t=V.kF(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.k8()
s.width=u
s.height=t
r=H.k(C.h.e_(s,"2d"),"$icq")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.nA(r.getImageData(0,0,s.width,s.height))}}}
T.il.prototype={
$1:function(a){var u=this,t=u.a,s=t.h9(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.iA(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.hX()}++t.e},
$S:20}
V.bd.prototype={
aw:function(a,b){return!0},
i:function(a){return"all"},
$iat:1}
V.at.prototype={}
V.dB.prototype={
aw:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)if(u[s].aw(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa0:function(a){this.a=H.l(a,"$ib",[V.at],"$ab")},
$iat:1}
V.ao.prototype={
aw:function(a,b){return!this.e9(0,b)},
i:function(a){return"!["+this.cA(0)+"]"}}
V.hM.prototype={
aw:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.ki(this.a),t=H.ki(this.b)
return u+".."+t},
$iat:1}
V.hV.prototype={
ee:function(a){var u,t
if(a.a.length<=0)throw H.f(P.A("May not create a SetMatcher with zero characters."))
u=new H.a2([P.p,P.P])
for(t=new H.cA(a,a.gm(a),[H.ak(a,"v",0)]);t.A();)u.n(0,t.d,!0)
this.shc(u)},
aw:function(a,b){return this.a.dn(0,b)},
i:function(a){var u=this.a
return P.kl(new H.dx(u,[H.w(u,0)]))},
shc:function(a){this.a=H.l(a,"$iG",[P.p,P.P],"$aG")},
$iat:1}
V.cK.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cQ(this.a.k(0,b))
r.sa0(H.c([],[V.at]))
r.c=!1
C.a.h(this.c,r)
return r},
i_:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.aw(0,a))return r}return},
i:function(a){return this.b},
shy:function(a){this.c=H.l(a,"$ib",[V.cQ],"$ab")}}
V.e0.prototype={
i:function(a){var u=H.kH(this.b,"\n","\\n"),t=H.kH(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cP.prototype={
az:function(a,b,c){var u,t,s
H.l(c,"$ib",[P.i],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.x)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
sh5:function(a){var u=P.i
this.c=H.l(a,"$iG",[u,u],"$aG")}}
V.ip.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cK(this,b)
u.shy(H.c([],[V.cQ]))
u.d=null
this.a.n(0,b,u)}return u},
K:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cP(a)
u=P.i
t.sh5(new H.a2([u,u]))
this.b.n(0,a,t)}return t},
dV:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.e0]),l=this.c,k=[P.p],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.e.aF(a,s)
q=l.i_(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.kl(j)
throw H.f(P.A("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.kl(j)
o=l.d
n=o.c.j(0,p)
t=new V.e0(n==null?o.b:n,p,s)}++s}}},
sho:function(a){this.a=H.l(a,"$iG",[P.i,V.cK],"$aG")},
shr:function(a){this.b=H.l(a,"$iG",[P.i,V.cP],"$aG")}}
V.cQ.prototype={
i:function(a){return this.b.b+": "+this.cA(0)}}
X.bS.prototype={$ic_:1}
X.fO.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.L():u},
ai:function(a){var u=this.x
if(u!=null)u.D(a)},
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
q=C.c.af(r*u)
r=s.b
if(typeof t!=="number")return H.F(t)
p=C.c.af(r*t)
r=C.c.af(s.c*u)
a.c=r
s=C.c.af(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.fU.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.L():u},
X:function(a){var u
a.cy.bn(V.bZ())
u=V.bZ()
a.db.bn(u)},
aN:function(a){a.cy.ay()
a.db.ay()},
$ic_:1,
$ibS:1}
X.dL.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.L():u},
ai:function(a){var u
H.k(a,"$iy")
u=this.f
if(u!=null)u.D(a)},
er:function(){return this.ai(null)},
X:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.b_(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bn(k)
r=$.l4
if(r==null){r=V.l6()
q=V.ko()
p=$.ll
r=V.l_(r,q,p==null?$.ll=new V.M(0,0,-1):p)
$.l4=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aO(0,a,s)
if(t!=null)u=t.w(0,u)}a.db.bn(u)},
aN:function(a){a.cy.ay()
a.db.ay()},
$ic_:1,
$ibS:1}
X.cM.prototype={}
V.bt.prototype={
ba:function(a){this.b=new P.fS(C.H)
this.c=null
this.sbH(H.c([],[[P.b,W.aA]]))},
I:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.aA]))
u=a.split("\n")
for(l=u.length,t=[W.aA],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.I(q)
o=m.b.eE(q,0,q.length)
n=o==null?q:o
C.F.e2(p,H.kH(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gbj(m.d),p)}},
dN:function(a,b){var u,t,s,r,q=this
H.l(b,"$ib",[P.i],"$ab")
q.sbH(H.c([],[[P.b,W.aA]]))
u=C.a.l(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bh():t).dV(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)q.bm(t[r])},
sbH:function(a){this.d=H.l(a,"$ib",[[P.b,W.aA]],"$ab")}}
V.k0.prototype={
$1:function(a){var u
H.k(a,"$ib8")
u=C.c.dU(this.a.gi2(),2)
if(u!=="0.00")P.kG(u+" fps")},
$S:45}
V.ft.prototype={
bm:function(a){var u=this
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
bh:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iq()
a1.c=a1.k(0,r)
u=a1.k(0,r).l(0,q)
t=V.u(new H.q("_"))
C.a.h(u.a,t)
t=V.Z("a","z")
C.a.h(u.a,t)
t=V.Z("A","Z")
C.a.h(u.a,t)
t=a1.k(0,q).l(0,q)
u=V.u(new H.q("_"))
C.a.h(t.a,u)
u=V.Z("0","9")
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=a1.k(0,r).l(0,p)
t=V.Z("0","9")
C.a.h(u.a,t)
t=a1.k(0,p).l(0,p)
u=V.Z("0","9")
C.a.h(t.a,u)
u=a1.k(0,p).l(0,o)
t=V.u(new H.q("."))
C.a.h(u.a,t)
t=a1.k(0,o).l(0,n)
u=V.Z("0","9")
C.a.h(t.a,u)
u=a1.k(0,n).l(0,n)
t=V.Z("0","9")
C.a.h(u.a,t)
t=a1.k(0,r).l(0,m)
u=V.u(new H.q(l))
C.a.h(t.a,u)
u=a1.k(0,m).l(0,m)
t=V.u(new H.q(l))
C.a.h(u.a,t)
t=a1.k(0,r).l(0,k)
u=V.u(new H.q('"'))
C.a.h(t.a,u)
u=a1.k(0,k).l(0,j)
t=V.u(new H.q('"'))
C.a.h(u.a,t)
t=a1.k(0,k).l(0,i)
u=V.u(new H.q("\\"))
C.a.h(t.a,u)
u=a1.k(0,i).l(0,k)
t=V.u(new H.q('"'))
C.a.h(u.a,t)
C.a.h(a1.k(0,k).l(0,k).a,new V.bd())
t=a1.k(0,r).l(0,h)
u=V.u(new H.q("'"))
C.a.h(t.a,u)
u=a1.k(0,h).l(0,g)
t=V.u(new H.q("'"))
C.a.h(u.a,t)
t=a1.k(0,h).l(0,f)
u=V.u(new H.q("\\"))
C.a.h(t.a,u)
u=a1.k(0,f).l(0,h)
t=V.u(new H.q("'"))
C.a.h(u.a,t)
C.a.h(a1.k(0,h).l(0,h).a,new V.bd())
t=a1.k(0,r).l(0,e)
u=V.u(new H.q("/"))
C.a.h(t.a,u)
u=a1.k(0,e).l(0,d)
t=V.u(new H.q("/"))
C.a.h(u.a,t)
t=a1.k(0,d).l(0,c)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=a1.k(0,d).l(0,d)
t=new V.ao()
s=[V.at]
t.sa0(H.c([],s))
C.a.h(u.a,t)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=a1.k(0,e).l(0,b)
t=V.u(new H.q("*"))
C.a.h(u.a,t)
t=a1.k(0,b).l(0,a)
u=V.u(new H.q("*"))
C.a.h(t.a,u)
u=a1.k(0,a).l(0,b)
t=new V.ao()
t.sa0(H.c([],s))
C.a.h(u.a,t)
u=V.u(new H.q("*"))
C.a.h(t.a,u)
u=a1.k(0,a).l(0,c)
t=V.u(new H.q("/"))
C.a.h(u.a,t)
t=a1.k(0,r).l(0,a0)
u=V.u(new H.q(" \n\t"))
C.a.h(t.a,u)
u=a1.k(0,a0).l(0,a0)
t=V.u(new H.q(" \n\t"))
C.a.h(u.a,t)
t=a1.k(0,p)
t.d=t.a.K("Num")
t=a1.k(0,n)
t.d=t.a.K("Num")
t=a1.k(0,m)
t.d=t.a.K("Symbol")
t=a1.k(0,j)
t.d=t.a.K("String")
t=a1.k(0,g)
t.d=t.a.K("String")
t=a1.k(0,c)
t.d=t.a.K(d)
t=a1.k(0,a0)
t.d=t.a.K(a0)
t=a1.k(0,q)
t=t.d=t.a.K(q)
u=[P.i]
t.az(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.az(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.az(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fP.prototype={
bm:function(a){var u=this
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
bh:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iq()
e.c=e.k(0,r)
u=e.k(0,r).l(0,q)
t=V.u(new H.q("_"))
C.a.h(u.a,t)
t=V.Z("a","z")
C.a.h(u.a,t)
t=V.Z("A","Z")
C.a.h(u.a,t)
t=e.k(0,q).l(0,q)
u=V.u(new H.q("_"))
C.a.h(t.a,u)
u=V.Z("0","9")
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=e.k(0,r).l(0,p)
t=V.Z("0","9")
C.a.h(u.a,t)
t=e.k(0,p).l(0,p)
u=V.Z("0","9")
C.a.h(t.a,u)
u=e.k(0,p).l(0,o)
t=V.u(new H.q("."))
C.a.h(u.a,t)
t=e.k(0,o).l(0,n)
u=V.Z("0","9")
C.a.h(t.a,u)
u=e.k(0,n).l(0,n)
t=V.Z("0","9")
C.a.h(u.a,t)
t=e.k(0,r).l(0,m)
u=V.u(new H.q(l))
C.a.h(t.a,u)
u=e.k(0,m).l(0,m)
t=V.u(new H.q(l))
C.a.h(u.a,t)
t=e.k(0,r).l(0,k)
u=V.u(new H.q("/"))
C.a.h(t.a,u)
u=e.k(0,k).l(0,j)
t=V.u(new H.q("/"))
C.a.h(u.a,t)
C.a.h(e.k(0,k).l(0,m).a,new V.bd())
t=e.k(0,j).l(0,i)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,j).l(0,j)
t=new V.ao()
s=[V.at]
t.sa0(H.c([],s))
C.a.h(u.a,t)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,r).l(0,h)
t=V.u(new H.q("#"))
C.a.h(u.a,t)
t=e.k(0,h).l(0,h)
u=new V.ao()
u.sa0(H.c([],s))
C.a.h(t.a,u)
t=V.u(new H.q("\n"))
C.a.h(u.a,t)
t=e.k(0,h).l(0,g)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,r).l(0,f)
t=V.u(new H.q(" \n\t"))
C.a.h(u.a,t)
t=e.k(0,f).l(0,f)
u=V.u(new H.q(" \n\t"))
C.a.h(t.a,u)
u=e.k(0,p)
u.d=u.a.K("Num")
u=e.k(0,n)
u.d=u.a.K("Num")
u=e.k(0,m)
u.d=u.a.K("Symbol")
u=e.k(0,i)
u.d=u.a.K(j)
u=e.k(0,g)
u.d=u.a.K(h)
u=e.k(0,f)
u.d=u.a.K(f)
u=e.k(0,q)
u=u.d=u.a.K(q)
t=[P.i]
u.az(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.az(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.az(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fQ.prototype={
bm:function(a){var u=this,t="#111"
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
bh:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iq()
l.c=l.k(0,s)
u=l.k(0,s).l(0,r)
t=V.u(new H.q("_"))
C.a.h(u.a,t)
t=V.Z("a","z")
C.a.h(u.a,t)
t=V.Z("A","Z")
C.a.h(u.a,t)
t=l.k(0,r).l(0,r)
u=V.u(new H.q("_"))
C.a.h(t.a,u)
u=V.Z("0","9")
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=l.k(0,r).l(0,q)
t=V.u(new H.q("="))
C.a.h(u.a,t)
u.c=!0
u=l.k(0,s).l(0,p)
t=V.u(new H.q("</\\-!>="))
C.a.h(u.a,t)
t=l.k(0,p).l(0,p)
u=V.u(new H.q("</\\-!>="))
C.a.h(t.a,u)
u=l.k(0,s).l(0,o)
t=V.u(new H.q('"'))
C.a.h(u.a,t)
t=l.k(0,o).l(0,n)
u=V.u(new H.q('"'))
C.a.h(t.a,u)
u=l.k(0,o).l(0,"EscStr")
t=V.u(new H.q("\\"))
C.a.h(u.a,t)
t=l.k(0,"EscStr").l(0,o)
u=V.u(new H.q('"'))
C.a.h(t.a,u)
C.a.h(l.k(0,o).l(0,o).a,new V.bd())
C.a.h(l.k(0,s).l(0,m).a,new V.bd())
u=l.k(0,m).l(0,m)
t=new V.ao()
t.sa0(H.c([],[V.at]))
C.a.h(u.a,t)
u=V.u(new H.q('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=l.k(0,p)
u.d=u.a.K("Symbol")
u=l.k(0,n)
u.d=u.a.K("String")
u=l.k(0,r)
t=u.a.K(r)
u.d=t
t.az(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.i]))
t=l.k(0,q)
t.d=t.a.K(q)
t=l.k(0,m)
t.d=t.a.K(m)
return l}}
V.hI.prototype={
dN:function(a,b){H.l(b,"$ib",[P.i],"$ab")
this.sbH(H.c([],[[P.b,W.aA]]))
this.I(C.a.l(b,"\n"),"#111")},
bm:function(a){},
bh:function(){return}}
V.hZ.prototype={
ef:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a8(q,"scroll",H.m(new V.i0(o),{func:1,ret:-1,args:[r]}),!1,r)},
df:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.i],"$ab")
this.hi()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.dV(C.a.i6(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){p=s[q]
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
if(H.nX(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.I(m[1])
l.textContent=H.I(m[0])
t.appendChild(l)}else{k=P.lu(C.r,n,C.i,!1)
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
dZ:function(a){var u,t,s,r=new V.ft("dart")
r.ba("dart")
u=new V.fP("glsl")
u.ba("glsl")
t=new V.fQ("html")
t.ba("html")
s=C.a.i1(H.c([r,u,t],[V.bt]),new V.i1(a))
if(s!=null)return s
r=new V.hI("plain")
r.ba("plain")
return r},
de:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.l(b0,"$ib",[P.i],"$ab")
u=H.c([],[P.p])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.kA(r).bv(r,"+")){C.a.n(b0,s,C.e.an(r,1))
C.a.h(u,1)
t=!0}else if(C.e.bv(r,"-")){C.a.n(b0,s,C.e.an(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.dZ(a8)
q.dN(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.lu(C.r,a7,C.i,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.kM()
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.x)(r),++a0)C.P.hG(a,r[a0])
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
for(a3=C.a.gO(r);a3.A();)c.appendChild(a3.gF(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
hi:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iq()
u.c=u.k(0,q)
t=u.k(0,q).l(0,p)
s=V.u(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).l(0,p)
s=new V.ao()
r=[V.at]
s.sa0(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("*"))
C.a.h(s.a,t)
t=u.k(0,p).l(0,"BoldEnd")
s=V.u(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,o)
s=V.u(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,o).l(0,o)
s=new V.ao()
s.sa0(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("_"))
C.a.h(s.a,t)
t=u.k(0,o).l(0,n)
s=V.u(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,m)
s=V.u(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,m).l(0,m)
s=new V.ao()
s.sa0(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("`"))
C.a.h(s.a,t)
t=u.k(0,m).l(0,"CodeEnd")
s=V.u(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,l)
s=V.u(new H.q("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,l).l(0,k)
s=V.u(new H.q("|"))
C.a.h(t.a,s)
s=u.k(0,l).l(0,j)
t=V.u(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,l).l(0,l)
t=new V.ao()
t.sa0(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("|]"))
C.a.h(t.a,s)
s=u.k(0,k).l(0,j)
t=V.u(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).l(0,k)
t=new V.ao()
t.sa0(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).l(0,i).a,new V.bd())
s=u.k(0,i).l(0,i)
t=new V.ao()
t.sa0(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.K(p)
s=u.k(0,n)
s.d=s.a.K(o)
s=u.k(0,"CodeEnd")
s.d=s.a.K(m)
s=u.k(0,j)
s.d=s.a.K("Link")
s=u.k(0,i)
s.d=s.a.K(i)
this.b=u}}
V.i0.prototype={
$1:function(a){P.lg(C.j,new V.i_(this.a))},
$S:20}
V.i_.prototype={
$0:function(){var u=C.c.af(document.documentElement.scrollTop),t=this.a.style,s=H.j(-0.01*u)+"px"
t.top=s},
$S:2}
V.i1.prototype={
$1:function(a){return H.k(a,"$ibt").a===this.a},
$S:46}
B.jY.prototype={
$1:function(a){var u,t,s,r
H.k(a,"$iy")
u=this.a.d
t=this.b
s=u.a
r=[P.i]
t.de("Vertex Shader for Skybox","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
s=u.a
t.de("Fragment Shader for Skybox","glsl",0,H.c((s==null?null:s.d).split("\n"),r))},
$S:8};(function aliases(){var u=J.a.prototype
u.e6=u.i
u=J.du.prototype
u.e8=u.i
u=P.e.prototype
u.e7=u.br
u=W.S.prototype
u.bw=u.ac
u=W.eG.prototype
u.ea=u.ak
u=O.dE.prototype
u.cB=u.aq
u=O.aZ.prototype
u.cC=u.aq
u=V.dB.prototype
u.e9=u.aw
u.cA=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"nu","mS",9)
u(P,"nv","mT",9)
u(P,"nw","mU",9)
t(P,"lD","ns",3)
s(W,"nI",4,null,["$4"],["mW"],18,0)
s(W,"nJ",4,null,["$4"],["mX"],18,0)
var m
r(m=E.ah.prototype,"gdL",0,0,null,["$1","$0"],["dM","ii"],0,0)
r(m,"gdJ",0,0,null,["$1","$0"],["dK","ie"],0,0)
q(m,"gib","ic",7)
q(m,"gig","ih",7)
r(m=E.e_.prototype,"gcF",0,0,null,["$1","$0"],["cH","cG"],0,0)
p(m,"giw","dQ",3)
o(m=X.e6.prototype,"gfm","fn",12)
o(m,"gfa","fb",12)
o(m,"gfg","fh",4)
o(m,"gfq","fs",28)
o(m,"gfo","fp",28)
o(m,"gfv","fw",4)
o(m,"gfB","fC",4)
o(m,"gfk","fl",4)
o(m,"gfz","fA",4)
o(m,"gfi","fj",4)
o(m,"gfD","fE",48)
o(m,"gfF","fG",12)
o(m,"gfV","fW",11)
o(m,"gfR","fS",11)
o(m,"gfT","fU",11)
r(D.bv.prototype,"gej",0,0,null,["$1","$0"],["ao","ek"],0,0)
r(m=D.dw.prototype,"gd_",0,0,null,["$1","$0"],["d0","ft"],0,0)
o(m,"gfH","fI",30)
q(m,"gf4","f5",19)
q(m,"gfL","fM",19)
n(V.R.prototype,"gm","ce",27)
n(V.M.prototype,"gm","ce",27)
r(m=U.cy.prototype,"gaI",0,0,null,["$1","$0"],["L","a1"],0,0)
q(m,"gf2","f3",17)
q(m,"gfJ","fK",17)
r(m=U.e7.prototype,"gaI",0,0,null,["$1","$0"],["L","a1"],0,0)
o(m,"gbK","bL",1)
o(m,"gbM","bN",1)
o(m,"gbO","bP",1)
r(m=U.e8.prototype,"gaI",0,0,null,["$1","$0"],["L","a1"],0,0)
o(m,"gbK","bL",1)
o(m,"gbM","bN",1)
o(m,"gbO","bP",1)
o(m,"geW","eX",1)
o(m,"geY","eZ",1)
o(m,"ghw","hx",1)
o(m,"ghu","hv",1)
o(m,"ghs","ht",1)
o(U.e9.prototype,"gf0","f1",1)
r(m=M.dg.prototype,"gV",0,0,null,["$1","$0"],["W","aR"],0,0)
q(m,"gfN","fO",26)
q(m,"gfP","fQ",26)
r(M.di.prototype,"gV",0,0,null,["$1","$0"],["W","aR"],0,0)
r(m=M.dm.prototype,"gV",0,0,null,["$1","$0"],["W","aR"],0,0)
q(m,"gfc","fd",7)
q(m,"gfe","ff",7)
r(m=O.dC.prototype,"gbx",0,0,null,["$1","$0"],["Z","by"],0,0)
r(m,"gh7",0,0,null,["$1","$0"],["d5","h8"],0,0)
q(m,"gf6","f7",14)
q(m,"gf8","f9",14)
r(O.dS.prototype,"gbx",0,0,null,["$1","$0"],["Z","by"],0,0)
r(X.dL.prototype,"geq",0,0,null,["$1","$0"],["ai","er"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.O,null)
s(P.O,[H.kg,J.a,J.al,P.et,P.e,H.cA,P.aX,H.bV,H.e5,H.iv,P.bw,H.cr,H.eL,P.ab,H.h2,H.h3,H.fY,P.eR,P.bc,P.aF,P.ec,P.i9,P.cL,P.ia,P.b8,P.af,P.jJ,P.jx,P.cb,P.es,P.v,P.cs,P.fT,P.jH,P.P,P.ay,P.a9,P.aU,P.hG,P.dW,P.ek,P.fN,P.bx,P.b,P.G,P.N,P.aq,P.i,P.bl,W.fp,W.bI,W.D,W.dJ,W.eG,W.jC,W.dq,W.av,W.jw,W.eX,P.eW,P.jr,O.a0,O.cB,E.fi,E.ah,E.hN,E.e_,Z.ea,Z.eb,Z.cp,Z.bX,Z.bH,D.fl,D.bU,D.y,X.df,X.dv,X.h_,X.h5,X.au,X.ht,X.ir,X.e6,D.bv,D.aa,D.dM,D.dV,V.a1,V.am,V.fD,V.dF,V.an,V.a5,V.a4,V.b2,V.dP,V.R,V.M,U.e7,U.e8,U.e9,M.di,M.dm,M.aw,A.db,A.fd,A.ag,A.az,A.aB,A.aC,A.hd,A.c7,A.c8,A.ca,A.e2,A.iE,F.a6,F.fG,F.bC,F.h1,F.c0,F.dR,F.hW,F.hX,F.hY,F.ai,F.iQ,F.iR,F.iU,F.iW,F.iX,F.iY,O.bD,O.dE,O.he,T.ik,V.bd,V.at,V.dB,V.hM,V.hV,V.cK,V.e0,V.cP,V.ip,X.bS,X.cM,X.fU,X.dL,V.bt,V.hZ])
s(J.a,[J.fX,J.dt,J.du,J.aJ,J.bB,J.bf,H.cE,W.h,W.fa,W.dc,W.cq,W.aS,W.aT,W.T,W.ee,W.fu,W.fv,W.eg,W.dl,W.ei,W.fx,W.n,W.el,W.aW,W.fR,W.eo,W.by,W.dz,W.hn,W.eu,W.ev,W.b0,W.ew,W.ez,W.b1,W.eD,W.eF,W.b5,W.eH,W.b6,W.eM,W.aK,W.eP,W.io,W.b9,W.eS,W.it,W.iJ,W.eY,W.f_,W.f1,W.f3,W.f5,P.bh,P.eq,P.bj,P.eB,P.hL,P.eN,P.bm,P.eU,P.fe,P.ed,P.dd,P.dN,P.c4,P.dQ,P.dY,P.e3,P.eJ])
s(J.du,[J.hH,J.bG,J.bg])
t(J.kf,J.aJ)
s(J.bB,[J.ds,J.dr])
t(P.h4,P.et)
s(P.h4,[H.e4,W.j8,W.aj,P.fJ])
t(H.q,H.e4)
s(P.e,[H.fA,H.h8,H.cU])
s(H.fA,[H.bY,H.dx])
s(P.aX,[H.h9,H.j1])
t(H.ha,H.bY)
s(P.bw,[H.hD,H.fZ,H.iH,H.ix,H.fk,H.hT,P.fc,P.dK,P.aI,P.iI,P.iG,P.c5,P.fn,P.fs])
s(H.cr,[H.k3,H.ih,H.jU,H.jV,H.jW,P.j4,P.j3,P.j5,P.j6,P.jG,P.jF,P.je,P.ji,P.jf,P.jg,P.jh,P.jl,P.jm,P.jk,P.jj,P.ib,P.ic,P.jN,P.ju,P.jt,P.jv,P.h7,P.fy,P.fz,W.fB,W.hp,W.hr,W.hS,W.i8,W.jd,W.hB,W.hA,W.jy,W.jz,W.jE,W.jI,P.jP,P.fK,P.fL,P.fg,E.hO,E.hP,E.hQ,E.im,D.fE,D.fF,F.k2,F.jQ,F.j_,F.iZ,F.iS,F.iT,O.hh,O.hi,O.hj,O.hk,O.hl,O.hm,T.il,V.k0,V.i0,V.i_,V.i1,B.jY])
s(H.ih,[H.i6,H.cn])
t(H.j2,P.fc)
t(P.h6,P.ab)
s(P.h6,[H.a2,W.j7])
t(H.dG,H.cE)
s(H.dG,[H.cY,H.d_])
t(H.cZ,H.cY)
t(H.cD,H.cZ)
t(H.d0,H.d_)
t(H.dH,H.d0)
s(H.dH,[H.hu,H.hv,H.hw,H.hx,H.hy,H.dI,H.hz])
t(P.js,P.jJ)
t(P.jq,P.jx)
t(P.ct,P.ia)
t(P.fC,P.cs)
s(P.ct,[P.fS,P.iL])
t(P.iK,P.fC)
s(P.a9,[P.z,P.p])
s(P.aI,[P.c3,P.fV])
s(W.h,[W.E,W.fI,W.b4,W.d1,W.b7,W.aL,W.d3,W.j0,W.cV,P.fh,P.bR])
s(W.E,[W.S,W.bs,W.cW])
s(W.S,[W.t,P.o])
s(W.t,[W.da,W.fb,W.cm,W.br,W.bT,W.aA,W.fM,W.cz,W.hU,W.c6,W.dX,W.ie,W.ig,W.cN])
s(W.aS,[W.cu,W.fq,W.fr])
t(W.fo,W.aT)
t(W.cv,W.ee)
t(W.eh,W.eg)
t(W.dk,W.eh)
t(W.ej,W.ei)
t(W.fw,W.ej)
t(W.aV,W.dc)
t(W.em,W.el)
t(W.fH,W.em)
t(W.ep,W.eo)
t(W.bW,W.ep)
t(W.bE,W.n)
s(W.bE,[W.aY,W.ac,W.aM])
t(W.ho,W.eu)
t(W.hq,W.ev)
t(W.ex,W.ew)
t(W.hs,W.ex)
t(W.eA,W.ez)
t(W.cF,W.eA)
t(W.eE,W.eD)
t(W.hJ,W.eE)
t(W.hR,W.eF)
t(W.d2,W.d1)
t(W.i3,W.d2)
t(W.eI,W.eH)
t(W.i4,W.eI)
t(W.i7,W.eM)
t(W.eQ,W.eP)
t(W.ii,W.eQ)
t(W.d4,W.d3)
t(W.ij,W.d4)
t(W.eT,W.eS)
t(W.is,W.eT)
t(W.bb,W.ac)
t(W.eZ,W.eY)
t(W.j9,W.eZ)
t(W.ef,W.dl)
t(W.f0,W.f_)
t(W.jn,W.f0)
t(W.f2,W.f1)
t(W.ey,W.f2)
t(W.f4,W.f3)
t(W.jA,W.f4)
t(W.f6,W.f5)
t(W.jB,W.f6)
t(W.ja,W.j7)
t(W.jb,P.i9)
t(W.kp,W.jb)
t(W.jc,P.cL)
t(W.jD,W.eG)
t(P.ap,P.jr)
t(P.er,P.eq)
t(P.h0,P.er)
t(P.eC,P.eB)
t(P.hE,P.eC)
t(P.cI,P.o)
t(P.eO,P.eN)
t(P.id,P.eO)
t(P.eV,P.eU)
t(P.iu,P.eV)
t(P.ff,P.ed)
t(P.hF,P.bR)
t(P.eK,P.eJ)
t(P.i5,P.eK)
s(E.fi,[Z.de,A.cJ,T.cO])
s(D.y,[D.bz,D.bA,D.K,X.hK])
s(X.hK,[X.dA,X.bi,X.cC,X.e1])
s(O.a0,[D.dw,U.cy,M.dg])
s(D.fl,[U.fm,U.ad])
t(U.dh,U.ad)
s(A.cJ,[A.dD,A.dT])
s(A.e2,[A.aD,A.iB,A.iC,A.iD,A.iz,A.a7,A.iA,A.W,A.cR,A.iF,A.cS,A.ar,A.c9,A.bF])
t(F.i2,F.fG)
t(F.iy,F.h1)
t(F.iV,F.iW)
t(F.hC,F.iX)
s(O.bD,[O.dC,O.dS])
s(O.dE,[O.hb,O.hc,O.aZ])
s(O.aZ,[O.hf,O.hg])
t(T.dZ,T.cO)
s(V.dB,[V.ao,V.cQ])
t(X.fO,X.cM)
s(V.bt,[V.ft,V.fP,V.fQ,V.hI])
u(H.e4,H.e5)
u(H.cY,P.v)
u(H.cZ,H.bV)
u(H.d_,P.v)
u(H.d0,H.bV)
u(P.et,P.v)
u(W.ee,W.fp)
u(W.eg,P.v)
u(W.eh,W.D)
u(W.ei,P.v)
u(W.ej,W.D)
u(W.el,P.v)
u(W.em,W.D)
u(W.eo,P.v)
u(W.ep,W.D)
u(W.eu,P.ab)
u(W.ev,P.ab)
u(W.ew,P.v)
u(W.ex,W.D)
u(W.ez,P.v)
u(W.eA,W.D)
u(W.eD,P.v)
u(W.eE,W.D)
u(W.eF,P.ab)
u(W.d1,P.v)
u(W.d2,W.D)
u(W.eH,P.v)
u(W.eI,W.D)
u(W.eM,P.ab)
u(W.eP,P.v)
u(W.eQ,W.D)
u(W.d3,P.v)
u(W.d4,W.D)
u(W.eS,P.v)
u(W.eT,W.D)
u(W.eY,P.v)
u(W.eZ,W.D)
u(W.f_,P.v)
u(W.f0,W.D)
u(W.f1,P.v)
u(W.f2,W.D)
u(W.f3,P.v)
u(W.f4,W.D)
u(W.f5,P.v)
u(W.f6,W.D)
u(P.eq,P.v)
u(P.er,W.D)
u(P.eB,P.v)
u(P.eC,W.D)
u(P.eN,P.v)
u(P.eO,W.D)
u(P.eU,P.v)
u(P.eV,W.D)
u(P.ed,P.ab)
u(P.eJ,P.v)
u(P.eK,W.D)})();(function constants(){var u=hunkHelpers.makeConstList
C.o=W.br.prototype
C.h=W.bT.prototype
C.F=W.aA.prototype
C.I=J.a.prototype
C.a=J.aJ.prototype
C.J=J.dr.prototype
C.d=J.ds.prototype
C.k=J.dt.prototype
C.c=J.bB.prototype
C.e=J.bf.prototype
C.K=J.bg.prototype
C.O=W.cF.prototype
C.t=J.hH.prototype
C.b=P.c4.prototype
C.P=W.c6.prototype
C.u=W.dX.prototype
C.n=J.bG.prototype
C.v=W.bb.prototype
C.w=W.cV.prototype
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

C.D=new P.hG()
C.i=new P.iK()
C.E=new P.iL()
C.f=new P.js()
C.j=new P.aU(0)
C.G=new P.aU(5e6)
C.H=new P.fT("element",!0,!1,!1,!1)
C.L=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.i])
C.M=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.i])
C.N=H.c(u([]),[P.i])
C.r=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.p])
C.l=H.c(u(["bind","if","ref","repeat","syntax"]),[P.i])
C.m=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.i])})()
var v={mangledGlobalNames:{p:"int",z:"double",a9:"num",i:"String",P:"bool",N:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.y]},{func:1,ret:-1,args:[D.y]},{func:1,ret:P.N},{func:1,ret:-1},{func:1,ret:-1,args:[W.ac]},{func:1,ret:P.N,args:[F.a6]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:-1,args:[P.p,[P.e,E.ah]]},{func:1,ret:P.N,args:[D.y]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.p,P.p]},{func:1,ret:-1,args:[W.aM]},{func:1,ret:-1,args:[W.n]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.y]}]},{func:1,ret:-1,args:[P.p,[P.e,V.an]]},{func:1,ret:P.P,args:[W.av]},{func:1,args:[,]},{func:1,ret:-1,args:[P.p,[P.e,U.ad]]},{func:1,ret:P.P,args:[W.S,P.i,P.i,W.bI]},{func:1,ret:-1,args:[P.p,[P.e,D.aa]]},{func:1,ret:P.N,args:[W.n]},{func:1,ret:P.N,args:[,,]},{func:1,ret:P.i,args:[P.p]},{func:1,ret:P.P,args:[W.E]},{func:1,ret:P.P,args:[P.i]},{func:1,ret:P.N,args:[,]},{func:1,ret:-1,args:[P.p,[P.e,M.aw]]},{func:1,ret:P.z},{func:1,ret:-1,args:[W.aY]},{func:1,ret:P.N,args:[P.a9]},{func:1,ret:P.P,args:[[P.e,D.aa]]},{func:1,ret:W.S,args:[W.E]},{func:1,ret:-1,args:[W.E,W.E]},{func:1,ret:P.i,args:[P.i]},{func:1,args:[W.n]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:V.a4,args:[P.z]},{func:1,ret:P.N,args:[F.ai,P.z,P.z]},{func:1,ret:P.N,args:[,],opt:[P.aq]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,ret:[P.aF,,],args:[,]},{func:1,ret:P.p,args:[A.az,A.az]},{func:1,ret:P.p,args:[A.aB,A.aB]},{func:1,ret:P.p,args:[A.aC,A.aC]},{func:1,args:[P.i]},{func:1,ret:P.N,args:[P.b8]},{func:1,ret:P.P,args:[V.bt]},{func:1,args:[,P.i]},{func:1,ret:-1,args:[W.bb]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aR=0
$.co=null
$.kN=null
$.kr=!1
$.lI=null
$.lB=null
$.lO=null
$.jR=null
$.jX=null
$.kC=null
$.cc=null
$.d6=null
$.d7=null
$.ks=!1
$.a_=C.f
$.as=[]
$.be=null
$.kb=null
$.kT=null
$.kS=null
$.en=P.kW(P.i,P.bx)
$.l0=null
$.l5=null
$.cG=null
$.la=null
$.lk=null
$.ln=null
$.lm=null
$.iM=null
$.iN=null
$.iO=null
$.ll=null
$.l4=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"o6","lS",function(){return H.lH("_$dart_dartClosure")})
u($,"o7","kI",function(){return H.lH("_$dart_js")})
u($,"ob","lT",function(){return H.ba(H.iw({
toString:function(){return"$receiver$"}}))})
u($,"oc","lU",function(){return H.ba(H.iw({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"od","lV",function(){return H.ba(H.iw(null))})
u($,"oe","lW",function(){return H.ba(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oh","lZ",function(){return H.ba(H.iw(void 0))})
u($,"oi","m_",function(){return H.ba(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"og","lY",function(){return H.ba(H.li(null))})
u($,"of","lX",function(){return H.ba(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"ok","m1",function(){return H.ba(H.li(void 0))})
u($,"oj","m0",function(){return H.ba(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"oB","kJ",function(){return P.mR()})
u($,"oD","m6",function(){return P.mH("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"oC","m5",function(){return P.kX(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.i)})
u($,"ou","m4",function(){return Z.aE(0)})
u($,"oo","m2",function(){return Z.aE(511)})
u($,"ow","aO",function(){return Z.aE(1)})
u($,"ov","bq",function(){return Z.aE(2)})
u($,"oq","bp",function(){return Z.aE(4)})
u($,"ox","bM",function(){return Z.aE(8)})
u($,"oy","bN",function(){return Z.aE(16)})
u($,"or","d8",function(){return Z.aE(32)})
u($,"os","d9",function(){return Z.aE(64)})
u($,"ot","m3",function(){return Z.aE(96)})
u($,"oz","cl",function(){return Z.aE(128)})
u($,"op","bo",function(){return Z.aE(256)})
u($,"o5","lR",function(){return new V.fD(1e-9)})
u($,"o4","Q",function(){return $.lR()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cE,ArrayBufferView:H.cE,Float32Array:H.cD,Float64Array:H.cD,Int16Array:H.hu,Int32Array:H.hv,Int8Array:H.hw,Uint16Array:H.hx,Uint32Array:H.hy,Uint8ClampedArray:H.dI,CanvasPixelArray:H.dI,Uint8Array:H.hz,HTMLAudioElement:W.t,HTMLBRElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLInputElement:W.t,HTMLLIElement:W.t,HTMLLabelElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMediaElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableColElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLVideoElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,AccessibleNodeList:W.fa,HTMLAnchorElement:W.da,HTMLAreaElement:W.fb,HTMLBaseElement:W.cm,Blob:W.dc,HTMLBodyElement:W.br,HTMLCanvasElement:W.bT,CanvasRenderingContext2D:W.cq,CDATASection:W.bs,CharacterData:W.bs,Comment:W.bs,ProcessingInstruction:W.bs,Text:W.bs,CSSNumericValue:W.cu,CSSUnitValue:W.cu,CSSPerspective:W.fo,CSSCharsetRule:W.T,CSSConditionRule:W.T,CSSFontFaceRule:W.T,CSSGroupingRule:W.T,CSSImportRule:W.T,CSSKeyframeRule:W.T,MozCSSKeyframeRule:W.T,WebKitCSSKeyframeRule:W.T,CSSKeyframesRule:W.T,MozCSSKeyframesRule:W.T,WebKitCSSKeyframesRule:W.T,CSSMediaRule:W.T,CSSNamespaceRule:W.T,CSSPageRule:W.T,CSSRule:W.T,CSSStyleRule:W.T,CSSSupportsRule:W.T,CSSViewportRule:W.T,CSSStyleDeclaration:W.cv,MSStyleCSSProperties:W.cv,CSS2Properties:W.cv,CSSImageValue:W.aS,CSSKeywordValue:W.aS,CSSPositionValue:W.aS,CSSResourceValue:W.aS,CSSURLImageValue:W.aS,CSSStyleValue:W.aS,CSSMatrixComponent:W.aT,CSSRotation:W.aT,CSSScale:W.aT,CSSSkew:W.aT,CSSTranslation:W.aT,CSSTransformComponent:W.aT,CSSTransformValue:W.fq,CSSUnparsedValue:W.fr,DataTransferItemList:W.fu,HTMLDivElement:W.aA,DOMException:W.fv,ClientRectList:W.dk,DOMRectList:W.dk,DOMRectReadOnly:W.dl,DOMStringList:W.fw,DOMTokenList:W.fx,Element:W.S,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,AbsoluteOrientationSensor:W.h,Accelerometer:W.h,AccessibleNode:W.h,AmbientLightSensor:W.h,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BackgroundFetchRegistration:W.h,BatteryManager:W.h,BroadcastChannel:W.h,CanvasCaptureMediaStreamTrack:W.h,DedicatedWorkerGlobalScope:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,Gyroscope:W.h,XMLHttpRequest:W.h,XMLHttpRequestEventTarget:W.h,XMLHttpRequestUpload:W.h,LinearAccelerationSensor:W.h,Magnetometer:W.h,MediaDevices:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,MIDIInput:W.h,MIDIOutput:W.h,MIDIPort:W.h,NetworkInformation:W.h,Notification:W.h,OffscreenCanvas:W.h,OrientationSensor:W.h,PaymentRequest:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationConnection:W.h,PresentationConnectionList:W.h,PresentationRequest:W.h,RelativeOrientationSensor:W.h,RemotePlayback:W.h,RTCDataChannel:W.h,DataChannel:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,Sensor:W.h,ServiceWorker:W.h,ServiceWorkerContainer:W.h,ServiceWorkerGlobalScope:W.h,ServiceWorkerRegistration:W.h,SharedWorker:W.h,SharedWorkerGlobalScope:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,VR:W.h,VRDevice:W.h,VRDisplay:W.h,VRSession:W.h,VisualViewport:W.h,WebSocket:W.h,Worker:W.h,WorkerGlobalScope:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,Clipboard:W.h,MojoInterfaceInterceptor:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioScheduledSourceNode:W.h,AudioWorkletNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConstantSourceNode:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.aV,FileList:W.fH,FileWriter:W.fI,HTMLFormElement:W.fM,Gamepad:W.aW,History:W.fR,HTMLCollection:W.bW,HTMLFormControlsCollection:W.bW,HTMLOptionsCollection:W.bW,ImageData:W.by,HTMLImageElement:W.cz,KeyboardEvent:W.aY,Location:W.dz,MediaList:W.hn,MIDIInputMap:W.ho,MIDIOutputMap:W.hq,MimeType:W.b0,MimeTypeArray:W.hs,PointerEvent:W.ac,MouseEvent:W.ac,DragEvent:W.ac,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,DocumentType:W.E,Node:W.E,NodeList:W.cF,RadioNodeList:W.cF,Plugin:W.b1,PluginArray:W.hJ,RTCStatsReport:W.hR,HTMLSelectElement:W.hU,SourceBuffer:W.b4,SourceBufferList:W.i3,SpeechGrammar:W.b5,SpeechGrammarList:W.i4,SpeechRecognitionResult:W.b6,Storage:W.i7,CSSStyleSheet:W.aK,StyleSheet:W.aK,HTMLTableCellElement:W.c6,HTMLTableDataCellElement:W.c6,HTMLTableHeaderCellElement:W.c6,HTMLTableElement:W.dX,HTMLTableRowElement:W.ie,HTMLTableSectionElement:W.ig,HTMLTemplateElement:W.cN,TextTrack:W.b7,TextTrackCue:W.aL,VTTCue:W.aL,TextTrackCueList:W.ii,TextTrackList:W.ij,TimeRanges:W.io,Touch:W.b9,TouchEvent:W.aM,TouchList:W.is,TrackDefaultList:W.it,CompositionEvent:W.bE,FocusEvent:W.bE,TextEvent:W.bE,UIEvent:W.bE,URL:W.iJ,VideoTrackList:W.j0,WheelEvent:W.bb,Window:W.cV,DOMWindow:W.cV,Attr:W.cW,CSSRuleList:W.j9,ClientRect:W.ef,DOMRect:W.ef,GamepadList:W.jn,NamedNodeMap:W.ey,MozNamedAttrMap:W.ey,SpeechRecognitionResultList:W.jA,StyleSheetList:W.jB,SVGLength:P.bh,SVGLengthList:P.h0,SVGNumber:P.bj,SVGNumberList:P.hE,SVGPointList:P.hL,SVGScriptElement:P.cI,SVGStringList:P.id,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,SVGTransform:P.bm,SVGTransformList:P.iu,AudioBuffer:P.fe,AudioParamMap:P.ff,AudioTrackList:P.fh,AudioContext:P.bR,webkitAudioContext:P.bR,BaseAudioContext:P.bR,OfflineAudioContext:P.hF,WebGLBuffer:P.dd,WebGLProgram:P.dN,WebGL2RenderingContext:P.c4,WebGLShader:P.dQ,WebGLTexture:P.dY,WebGLUniformLocation:P.e3,SQLResultSetRowList:P.i5})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dG.$nativeSuperclassTag="ArrayBufferView"
H.cY.$nativeSuperclassTag="ArrayBufferView"
H.cZ.$nativeSuperclassTag="ArrayBufferView"
H.cD.$nativeSuperclassTag="ArrayBufferView"
H.d_.$nativeSuperclassTag="ArrayBufferView"
H.d0.$nativeSuperclassTag="ArrayBufferView"
H.dH.$nativeSuperclassTag="ArrayBufferView"
W.d1.$nativeSuperclassTag="EventTarget"
W.d2.$nativeSuperclassTag="EventTarget"
W.d3.$nativeSuperclassTag="EventTarget"
W.d4.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.lK,[])
else B.lK([])})})()
//# sourceMappingURL=test.dart.js.map
