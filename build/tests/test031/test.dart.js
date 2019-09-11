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
a[c]=function(){a[c]=function(){H.nw(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ka"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ka"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ka(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jS:function jS(){},
kt:function(){return new P.dP("No element")},
lW:function(){return new P.dP("Too few elements")},
dM:function(a,b,c,d,e){H.i(a,"$ib",[e],"$ab")
H.l(d,{func:1,ret:P.p,args:[e,e]})
if(c-b<=32)H.mk(a,b,c,d,e)
else H.mj(a,b,c,d,e)},
mk:function(a,b,c,d,e){var u,t,s,r,q
H.i(a,"$ib",[e],"$ab")
H.l(d,{func:1,ret:P.p,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.c(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.c(a,r)
r=J.aS(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.c(a,q)
C.a.n(a,s,a[q])
s=q}C.a.n(a,s,t)}},
mj:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.i(a2,"$ib",[a6],"$ab")
H.l(a5,{func:1,ret:P.p,args:[a6,a6]})
u=C.d.a7(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.d.a7(a3+a4,2)
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
if(J.aS(a5.$2(n,m),0)){i=m
m=n
n=i}if(J.aS(a5.$2(k,j),0)){i=j
j=k
k=i}if(J.aS(a5.$2(n,l),0)){i=l
l=n
n=i}if(J.aS(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.aS(a5.$2(n,k),0)){i=k
k=n
n=i}if(J.aS(a5.$2(l,k),0)){i=k
k=l
l=i}if(J.aS(a5.$2(m,j),0)){i=j
j=m
m=i}if(J.aS(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.aS(a5.$2(k,j),0)){i=j
j=k
k=i}C.a.n(a2,t,n)
C.a.n(a2,r,l)
C.a.n(a2,s,j)
if(a3<0||a3>=a2.length)return H.c(a2,a3)
C.a.n(a2,q,a2[a3])
if(a4<0||a4>=a2.length)return H.c(a2,a4)
C.a.n(a2,p,a2[a4])
h=a3+1
g=a4-1
if(J.K(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.c(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.aj()
if(d<0){if(f!==h){if(h>=a2.length)return H.c(a2,h)
C.a.n(a2,f,a2[h])
C.a.n(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.c(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.aC()
if(d>0){--g
continue}else{c=g-1
o=a2.length
if(d<0){if(h>=o)return H.c(a2,h)
C.a.n(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.c(a2,g)
C.a.n(a2,h,a2[g])
C.a.n(a2,g,e)
g=c
h=b
break}else{if(g>=o)return H.c(a2,g)
C.a.n(a2,f,a2[g])
C.a.n(a2,g,e)
g=c
break}}}}a=!0}else{for(f=h;f<=g;++f){if(f>=a2.length)return H.c(a2,f)
e=a2[f]
a0=a5.$2(e,m)
if(typeof a0!=="number")return a0.aj()
if(a0<0){if(f!==h){if(h>=a2.length)return H.c(a2,h)
C.a.n(a2,f,a2[h])
C.a.n(a2,h,e)}++h}else{a1=a5.$2(e,k)
if(typeof a1!=="number")return a1.aC()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.c(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.aC()
if(d>0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.c(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.aj()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.c(a2,h)
C.a.n(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.c(a2,g)
C.a.n(a2,h,a2[g])
C.a.n(a2,g,e)
h=b}else{if(g>=o)return H.c(a2,g)
C.a.n(a2,f,a2[g])
C.a.n(a2,g,e)}g=c
break}}}}a=!1}o=h-1
if(o>=a2.length)return H.c(a2,o)
C.a.n(a2,a3,a2[o])
C.a.n(a2,o,m)
o=g+1
if(o<0||o>=a2.length)return H.c(a2,o)
C.a.n(a2,a4,a2[o])
C.a.n(a2,o,k)
H.dM(a2,a3,h-2,a5,a6)
H.dM(a2,g+2,a4,a5,a6)
if(a)return
if(h<t&&g>s){while(!0){if(h>=a2.length)return H.c(a2,h)
if(!J.K(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.c(a2,g)
if(!J.K(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.c(a2,f)
e=a2[f]
if(a5.$2(e,m)===0){if(f!==h){if(h>=a2.length)return H.c(a2,h)
C.a.n(a2,f,a2[h])
C.a.n(a2,h,e)}++h}else if(a5.$2(e,k)===0)for(;!0;){if(g<0||g>=a2.length)return H.c(a2,g)
if(a5.$2(a2[g],k)===0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.c(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.aj()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.c(a2,h)
C.a.n(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.c(a2,g)
C.a.n(a2,h,a2[g])
C.a.n(a2,g,e)
h=b}else{if(g>=o)return H.c(a2,g)
C.a.n(a2,f,a2[g])
C.a.n(a2,g,e)}g=c
break}}}H.dM(a2,h,g,a5,a6)}else H.dM(a2,h,g,a5,a6)},
a4:function a4(a){this.a=a},
fs:function fs(){},
dr:function dr(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fW:function fW(a,b,c){this.a=a
this.b=b
this.$ti=c},
fX:function fX(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
iJ:function iJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
iK:function iK(a,b,c){this.a=a
this.b=b
this.$ti=c},
bT:function bT(){},
e_:function e_(){},
dZ:function dZ(){},
cd:function(a){var u,t=H.Q(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
ng:function(a){return v.types[H.X(a)]},
nl:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.W(a).$iI},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aw(a)
if(typeof u!=="string")throw H.h(H.aF(a))
return u},
cA:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bX:function(a){return H.m5(a)+H.k7(H.bN(a),0,null)},
m5:function(a){var u,t,s,r,q,p,o,n=J.W(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.F||!!n.$ic3){r=C.n(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cd(t.length>1&&C.e.be(t,0)===36?C.e.aP(t,1):t)},
kI:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
me:function(a){var u,t,s,r=H.d([],[P.p])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.aF(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.bh(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.h(H.aF(s))}return H.kI(r)},
kJ:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.aF(s))
if(s<0)throw H.h(H.aF(s))
if(s>65535)return H.me(a)}return H.kI(a)},
md:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.bh(u,10))>>>0,56320|u&1023)}throw H.h(P.b5(a,0,1114111,null,null))},
bW:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mc:function(a){var u=H.bW(a).getFullYear()+0
return u},
ma:function(a){var u=H.bW(a).getMonth()+1
return u},
m6:function(a){var u=H.bW(a).getDate()+0
return u},
m7:function(a){var u=H.bW(a).getHours()+0
return u},
m9:function(a){var u=H.bW(a).getMinutes()+0
return u},
mb:function(a){var u=H.bW(a).getSeconds()+0
return u},
m8:function(a){var u=H.bW(a).getMilliseconds()+0
return u},
G:function(a){throw H.h(H.aF(a))},
c:function(a,b){if(a==null)J.cg(a)
throw H.h(H.c8(a,b))},
c8:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aT(!0,b,s,null)
u=H.X(J.cg(a))
if(!(b<0)){if(typeof u!=="number")return H.G(u)
t=b>=u}else t=!0
if(t)return P.T(b,a,s,null,u)
return P.dG(b,s)},
na:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bY(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bY(a,c,!0,b,"end",u)
return new P.aT(!0,b,"end",null)},
aF:function(a){return new P.aT(!0,a,null,null)},
n5:function(a){if(typeof a!=="number")throw H.h(H.aF(a))
return a},
h:function(a){var u
if(a==null)a=new P.dC()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lq})
u.name=""}else u.toString=H.lq
return u},
lq:function(){return J.aw(this.dartException)},
w:function(a){throw H.h(a)},
v:function(a){throw H.h(P.cm(a))},
bc:function(a){var u,t,s,r,q,p
a=H.ln(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.o])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ib(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ic:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kR:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kC:function(a,b){return new H.hp(a,b==null?null:b.method)},
jT:function(a,b){var u=b==null,t=u?null:b.method
return new H.fL(a,t,u?null:b.receiver)},
bO:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jF(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.bh(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jT(H.j(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kC(H.j(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.lt()
q=$.lu()
p=$.lv()
o=$.lw()
n=$.lz()
m=$.lA()
l=$.ly()
$.lx()
k=$.lC()
j=$.lB()
i=r.ag(u)
if(i!=null)return f.$1(H.jT(H.Q(u),i))
else{i=q.ag(u)
if(i!=null){i.method="call"
return f.$1(H.jT(H.Q(u),i))}else{i=p.ag(u)
if(i==null){i=o.ag(u)
if(i==null){i=n.ag(u)
if(i==null){i=m.ag(u)
if(i==null){i=l.ag(u)
if(i==null){i=o.ag(u)
if(i==null){i=k.ag(u)
if(i==null){i=j.ag(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kC(H.Q(u),i))}}return f.$1(new H.io(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dO()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aT(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dO()
return a},
cb:function(a){var u
if(a==null)return new H.eA(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eA(a)},
nd:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
nk:function(a,b,c,d,e,f){H.k(a,"$ijO")
switch(H.X(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.t("Unsupported number of arguments for wrapped closure"))},
c7:function(a,b){var u
H.X(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nk)
a.$identity=u
return u},
lQ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hR().constructor.prototype):Object.create(new H.ch(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aU
if(typeof t!=="number")return t.m()
$.aU=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.ko(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.ng,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.kn:H.jI
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
lN:function(a,b,c,d){var u=H.jI
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ko:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lP(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lN(t,!r,u,b)
if(t===0){r=$.aU
if(typeof r!=="number")return r.m()
$.aU=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ci
return new Function(r+H.j(q==null?$.ci=H.fa("self"):q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aU
if(typeof r!=="number")return r.m()
$.aU=r+1
o+=r
r="return function("+o+"){return this."
q=$.ci
return new Function(r+H.j(q==null?$.ci=H.fa("self"):q)+"."+H.j(u)+"("+o+");}")()},
lO:function(a,b,c,d){var u=H.jI,t=H.kn
switch(b?-1:a){case 0:throw H.h(H.mh("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lP:function(a,b){var u,t,s,r,q,p,o,n=$.ci
if(n==null)n=$.ci=H.fa("self")
u=$.km
if(u==null)u=$.km=H.fa("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lO(s,!q,t,b)
if(s===1){n="return function(){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+");"
u=$.aU
if(typeof u!=="number")return u.m()
$.aU=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+", "+o+");"
u=$.aU
if(typeof u!=="number")return u.m()
$.aU=u+1
return new Function(n+u+"}")()},
ka:function(a,b,c,d,e,f,g){return H.lQ(a,b,H.X(c),d,!!e,!!f,g)},
jI:function(a){return a.a},
kn:function(a){return a.c},
fa:function(a){var u,t,s,r=new H.ch("self","target","receiver","name"),q=J.jQ(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
C:function(a){if(a==null)H.n1("boolean expression must not be null")
return a},
Q:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aO(a,"String"))},
o9:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aO(a,"double"))},
lj:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aO(a,"num"))},
lb:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aO(a,"bool"))},
X:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aO(a,"int"))},
ll:function(a,b){throw H.h(H.aO(a,H.cd(H.Q(b).substring(2))))},
nr:function(a,b){throw H.h(H.lM(a,H.cd(H.Q(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.W(a)[b])return a
H.ll(a,b)},
m:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.W(a)[b]
else u=!0
if(u)return a
H.nr(a,b)},
ke:function(a){if(a==null)return a
if(!!J.W(a).$ib)return a
throw H.h(H.aO(a,"List<dynamic>"))},
nm:function(a,b){var u
if(a==null)return a
u=J.W(a)
if(!!u.$ib)return a
if(u[b])return a
H.ll(a,b)},
lc:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.X(u)]
else return a.$S()}return},
eW:function(a,b){var u
if(typeof a=="function")return!0
u=H.lc(J.W(a))
if(u==null)return!1
return H.l2(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.k4)return a
$.k4=!0
try{if(H.eW(a,b))return a
u=H.jB(b)
t=H.aO(a,u)
throw H.h(t)}finally{$.k4=!1}},
kb:function(a,b){if(a!=null&&!H.k9(a,b))H.w(H.aO(a,H.jB(b)))
return a},
aO:function(a,b){return new H.id("TypeError: "+P.dg(a)+": type '"+H.l6(a)+"' is not a subtype of type '"+b+"'")},
lM:function(a,b){return new H.fb("CastError: "+P.dg(a)+": type '"+H.l6(a)+"' is not a subtype of type '"+b+"'")},
l6:function(a){var u,t=J.W(a)
if(!!t.$ick){u=H.lc(t)
if(u!=null)return H.jB(u)
return"Closure"}return H.bX(a)},
n1:function(a){throw H.h(new H.iL(a))},
nw:function(a){throw H.h(new P.fk(H.Q(a)))},
mh:function(a){return new H.hE(a)},
lf:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bN:function(a){if(a==null)return
return a.$ti},
oa:function(a,b,c){return H.cc(a["$a"+H.j(c)],H.bN(b))},
ca:function(a,b,c,d){var u
H.Q(c)
H.X(d)
u=H.cc(a["$a"+H.j(c)],H.bN(b))
return u==null?null:u[d]},
aG:function(a,b,c){var u
H.Q(b)
H.X(c)
u=H.cc(a["$a"+H.j(b)],H.bN(a))
return u==null?null:u[c]},
z:function(a,b){var u
H.X(b)
u=H.bN(a)
return u==null?null:u[b]},
jB:function(a){return H.bM(a,null)},
bM:function(a,b){var u,t
H.i(b,"$ib",[P.o],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cd(a[0].name)+H.k7(a,1,b)
if(typeof a=="function")return H.cd(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.X(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.j(b[t])}if('func' in a)return H.mB(a,b)
if('futureOr' in a)return"FutureOr<"+H.bM("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mB:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.o]
H.i(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.c(a0,n)
p=C.e.m(p,a0[n])
m=u[q]
if(m!=null&&m!==P.N)p+=" extends "+H.bM(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bM(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bM(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bM(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.nc(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.Q(b[h])
j=j+i+H.bM(e[d],a0)+(" "+H.j(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
k7:function(a,b,c){var u,t,s,r,q,p
H.i(c,"$ib",[P.o],"$ab")
if(a==null)return""
u=new P.bG("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bM(p,c)}return"<"+u.i(0)+">"},
cc:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
k8:function(a,b,c,d){var u,t
H.Q(b)
H.ke(c)
H.Q(d)
if(a==null)return!1
u=H.bN(a)
t=J.W(a)
if(t[b]==null)return!1
return H.l9(H.cc(t[d],u),null,c,null)},
i:function(a,b,c,d){H.Q(b)
H.ke(c)
H.Q(d)
if(a==null)return a
if(H.k8(a,b,c,d))return a
throw H.h(H.aO(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cd(b.substring(2))+H.k7(c,0,null),v.mangledGlobalNames)))},
l9:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aE(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aE(a[t],b,c[t],d))return!1
return!0},
o7:function(a,b,c){return a.apply(b,H.cc(J.W(b)["$a"+H.j(c)],H.bN(b)))},
lh:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="N"||a.name==="M"||a===-1||a===-2||H.lh(u)}return!1},
k9:function(a,b){var u,t
if(a==null)return b==null||b.name==="N"||b.name==="M"||b===-1||b===-2||H.lh(b)
if(b==null||b===-1||b.name==="N"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.k9(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eW(a,b)}u=J.W(a).constructor
t=H.bN(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aE(u,null,b,null)},
D:function(a,b){if(a!=null&&!H.k9(a,b))throw H.h(H.aO(a,H.jB(b)))
return a},
aE:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="N"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="N"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aE(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="M")return!0
if('func' in c)return H.l2(a,b,c,d)
if('func' in a)return c.name==="jO"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aE("type" in a?a.type:l,b,s,d)
else if(H.aE(a,b,s,d))return!0
else{if(!('$i'+"cq" in t.prototype))return!1
r=t.prototype["$a"+"cq"]
q=H.cc(r,u?a.slice(1):l)
return H.aE(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.l9(H.cc(m,u),b,p,d)},
l2:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aE(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aE(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aE(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aE(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.np(h,b,g,d)},
np:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aE(c[s],d,a[s],b))return!1}return!0},
o8:function(a,b,c){Object.defineProperty(a,H.Q(b),{value:c,enumerable:false,writable:true,configurable:true})},
nn:function(a){var u,t,s,r,q=H.Q($.lg.$1(a)),p=$.ju[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jz[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.Q($.l8.$2(a,q))
if(q!=null){p=$.ju[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jz[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jA(u)
$.ju[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jz[q]=u
return u}if(s==="-"){r=H.jA(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lk(a,u)
if(s==="*")throw H.h(P.kS(q))
if(v.leafTags[q]===true){r=H.jA(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lk(a,u)},
lk:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kf(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jA:function(a){return J.kf(a,!1,null,!!a.$iI)},
no:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jA(u)
else return J.kf(u,c,null,null)},
ni:function(){if(!0===$.kd)return
$.kd=!0
H.nj()},
nj:function(){var u,t,s,r,q,p,o,n
$.ju=Object.create(null)
$.jz=Object.create(null)
H.nh()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lm.$1(q)
if(p!=null){o=H.no(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nh:function(){var u,t,s,r,q,p,o=C.u()
o=H.c6(C.v,H.c6(C.w,H.c6(C.o,H.c6(C.o,H.c6(C.x,H.c6(C.y,H.c6(C.z(C.n),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lg=new H.jw(r)
$.l8=new H.jx(q)
$.lm=new H.jy(p)},
c6:function(a,b){return a(b)||b},
lY:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.h(new P.fE("Illegal RegExp pattern ("+String(r)+")",a))},
nu:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
nb:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
ln:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lo:function(a,b,c){var u=H.nv(a,b,c)
return u},
nv:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.ln(b),'g'),H.nb(c))},
ib:function ib(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hp:function hp(a,b){this.a=a
this.b=b},
fL:function fL(a,b,c){this.a=a
this.b=b
this.c=c},
io:function io(a){this.a=a},
jF:function jF(a){this.a=a},
eA:function eA(a){this.a=a
this.b=null},
ck:function ck(){},
hZ:function hZ(){},
hR:function hR(){},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
id:function id(a){this.a=a},
fb:function fb(a){this.a=a},
hE:function hE(a){this.a=a},
iL:function iL(a){this.a=a},
Z:function Z(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fP:function fP(a,b){this.a=a
this.b=b
this.c=null},
dq:function dq(a,b){this.a=a
this.$ti=b},
fQ:function fQ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jw:function jw(a){this.a=a},
jx:function jx(a){this.a=a},
jy:function jy(a){this.a=a},
fK:function fK(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c4:function(a){return a},
bL:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.c8(b,a))},
mA:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.na(a,b,c))
return b},
cx:function cx(){},
dx:function dx(){},
cw:function cw(){},
dy:function dy(){},
hh:function hh(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
dz:function dz(){},
hm:function hm(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
nc:function(a){return J.ku(a?Object.keys(a):[],null)},
nq:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kf:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eX:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kd==null){H.ni()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.kS("Return interceptor for "+H.j(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kh()]
if(r!=null)return r
r=H.nn(a)
if(r!=null)return r
if(typeof a=="function")return C.H
u=Object.getPrototypeOf(a)
if(u==null)return C.q
if(u===Object.prototype)return C.q
if(typeof s=="function"){Object.defineProperty(s,$.kh(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
lX:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.jH(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.b5(a,0,4294967295,"length",null))
return J.ku(new Array(a),b)},
ku:function(a,b){return J.jQ(H.d(a,[b]))},
jQ:function(a){H.ke(a)
a.fixed$length=Array
return a},
W:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dk.prototype
return J.dj.prototype}if(typeof a=="string")return J.bC.prototype
if(a==null)return J.dl.prototype
if(typeof a=="boolean")return J.fJ.prototype
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.N)return a
return J.eX(a)},
ne:function(a){if(typeof a=="number")return J.bB.prototype
if(typeof a=="string")return J.bC.prototype
if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.N)return a
return J.eX(a)},
jv:function(a){if(typeof a=="string")return J.bC.prototype
if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.N)return a
return J.eX(a)},
kc:function(a){if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.N)return a
return J.eX(a)},
ld:function(a){if(typeof a=="number")return J.bB.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.c3.prototype
return a},
le:function(a){if(typeof a=="number")return J.bB.prototype
if(typeof a=="string")return J.bC.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.c3.prototype
return a},
nf:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.N)return a
return J.eX(a)},
lH:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ne(a).m(a,b)},
K:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.W(a).p(a,b)},
aS:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.ld(a).aC(a,b)},
kj:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.le(a).w(a,b)},
lI:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.ld(a).q(a,b)},
eY:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nl(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jv(a).j(a,b)},
lJ:function(a,b,c,d){return J.nf(a).hI(a,b,c,d)},
jG:function(a,b){return J.le(a).hS(a,b)},
kk:function(a,b){return J.kc(a).H(a,b)},
lK:function(a,b){return J.kc(a).L(a,b)},
bP:function(a){return J.W(a).gJ(a)},
cf:function(a){return J.kc(a).gR(a)},
cg:function(a){return J.jv(a).gk(a)},
aw:function(a){return J.W(a).i(a)},
a:function a(){},
fJ:function fJ(){},
dl:function dl(){},
dm:function dm(){},
ht:function ht(){},
c3:function c3(){},
bh:function bh(){},
aH:function aH(a){this.$ti=a},
jR:function jR(a){this.$ti=a},
ao:function ao(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bB:function bB(){},
dk:function dk(){},
dj:function dj(){},
bC:function bC(){}},P={
mr:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.n2()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c7(new P.iN(s),1)).observe(u,{childList:true})
return new P.iM(s,u,t)}else if(self.setImmediate!=null)return P.n3()
return P.n4()},
ms:function(a){self.scheduleImmediate(H.c7(new P.iO(H.l(a,{func:1,ret:-1})),0))},
mt:function(a){self.setImmediate(H.c7(new P.iP(H.l(a,{func:1,ret:-1})),0))},
mu:function(a){P.jZ(C.k,H.l(a,{func:1,ret:-1}))},
jZ:function(a,b){var u
H.l(b,{func:1,ret:-1})
u=C.d.a7(a.a,1000)
return P.mx(u<0?0:u,b)},
kQ:function(a,b){var u
H.l(b,{func:1,ret:-1,args:[P.ba]})
u=C.d.a7(a.a,1000)
return P.my(u<0?0:u,b)},
mx:function(a,b){var u=new P.eG()
u.eo(a,b)
return u},
my:function(a,b){var u=new P.eG()
u.ep(a,b)
return u},
mv:function(a,b){var u,t,s
b.a=1
try{a.dX(new P.iX(b),new P.iY(b),null)}catch(s){u=H.bO(s)
t=H.cb(s)
P.ns(new P.iZ(b,u,t))}},
l_:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iaD")
if(u>=4){t=b.bH()
b.a=a.a
b.c=a.c
P.cM(b,t)}else{t=H.k(b.c,"$ibe")
b.a=2
b.c=a
a.d1(t)}},
cM:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$ial")
g=g.b
r=s.a
q=s.b
g.toString
P.jp(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cM(h.a,b)}g=h.a
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
if(m){H.k(o,"$ial")
g=g.b
r=o.a
q=o.b
g.toString
P.jp(i,i,g,r,q)
return}l=$.V
if(l!=n)$.V=n
else l=i
g=b.c
if(g===8)new P.j2(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.j1(u,b,o).$0()}else if((g&2)!==0)new P.j0(h,u,b).$0()
if(l!=null)$.V=l
g=u.b
if(!!J.W(g).$icq){if(g.a>=4){k=H.k(q.c,"$ibe")
q.c=null
b=q.bg(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.l_(g,q)
return}}j=b.b
k=H.k(j.c,"$ibe")
j.c=null
b=j.bg(k)
g=u.a
r=u.b
if(!g){H.D(r,H.z(j,0))
j.a=4
j.c=r}else{H.k(r,"$ial")
j.a=8
j.c=r}h.a=j
g=j}},
mY:function(a,b){if(H.eW(a,{func:1,args:[P.N,P.aq]}))return H.l(a,{func:1,ret:null,args:[P.N,P.aq]})
if(H.eW(a,{func:1,args:[P.N]}))return H.l(a,{func:1,ret:null,args:[P.N]})
throw H.h(P.jH(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mX:function(){var u,t
for(;u=$.c5,u!=null;){$.cY=null
t=u.b
$.c5=t
if(t==null)$.cX=null
u.a.$0()}},
n0:function(){$.k5=!0
try{P.mX()}finally{$.cY=null
$.k5=!1
if($.c5!=null)$.ki().$1(P.la())}},
l5:function(a){var u=new P.e4(H.l(a,{func:1,ret:-1}))
if($.c5==null){$.c5=$.cX=u
if(!$.k5)$.ki().$1(P.la())}else $.cX=$.cX.b=u},
n_:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
u=$.c5
if(u==null){P.l5(a)
$.cY=$.cX
return}t=new P.e4(a)
s=$.cY
if(s==null){t.b=u
$.c5=$.cY=t}else{t.b=s.b
$.cY=s.b=t
if(t.b==null)$.cX=t}},
ns:function(a){var u,t=null,s={func:1,ret:-1}
H.l(a,s)
u=$.V
if(C.f===u){P.jr(t,t,C.f,a)
return}u.toString
P.jr(t,t,u,H.l(u.bQ(a),s))},
kP:function(a,b){var u,t={func:1,ret:-1}
H.l(b,t)
u=$.V
if(u===C.f){u.toString
return P.jZ(a,b)}return P.jZ(a,H.l(u.bQ(b),t))},
mp:function(a,b){var u,t,s={func:1,ret:-1,args:[P.ba]}
H.l(b,s)
u=$.V
if(u===C.f){u.toString
return P.kQ(a,b)}t=u.df(b,P.ba)
$.V.toString
return P.kQ(a,H.l(t,s))},
jp:function(a,b,c,d,e){var u={}
u.a=d
P.n_(new P.jq(u,e))},
l3:function(a,b,c,d,e){var u,t
H.l(d,{func:1,ret:e})
t=$.V
if(t===c)return d.$0()
$.V=c
u=t
try{t=d.$0()
return t}finally{$.V=u}},
l4:function(a,b,c,d,e,f,g){var u,t
H.l(d,{func:1,ret:f,args:[g]})
H.D(e,g)
t=$.V
if(t===c)return d.$1(e)
$.V=c
u=t
try{t=d.$1(e)
return t}finally{$.V=u}},
mZ:function(a,b,c,d,e,f,g,h,i){var u,t
H.l(d,{func:1,ret:g,args:[h,i]})
H.D(e,h)
H.D(f,i)
t=$.V
if(t===c)return d.$2(e,f)
$.V=c
u=t
try{t=d.$2(e,f)
return t}finally{$.V=u}},
jr:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bQ(d):c.hQ(d,-1)
P.l5(d)},
iN:function iN(a){this.a=a},
iM:function iM(a,b,c){this.a=a
this.b=b
this.c=c},
iO:function iO(a){this.a=a},
iP:function iP(a){this.a=a},
eG:function eG(){this.c=0},
ji:function ji(a,b){this.a=a
this.b=b},
jh:function jh(a,b,c,d){var _=this
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
aD:function aD(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
iW:function iW(a,b){this.a=a
this.b=b},
j_:function j_(a,b){this.a=a
this.b=b},
iX:function iX(a){this.a=a},
iY:function iY(a){this.a=a},
iZ:function iZ(a,b,c){this.a=a
this.b=b
this.c=c},
j2:function j2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j3:function j3(a){this.a=a},
j1:function j1(a,b,c){this.a=a
this.b=b
this.c=c},
j0:function j0(a,b,c){this.a=a
this.b=b
this.c=c},
e4:function e4(a){this.a=a
this.b=null},
hU:function hU(){},
hW:function hW(a,b){this.a=a
this.b=b},
hX:function hX(a,b){this.a=a
this.b=b},
cF:function cF(){},
hV:function hV(){},
ba:function ba(){},
al:function al(a,b){this.a=a
this.b=b},
jk:function jk(){},
jq:function jq(a,b){this.a=a
this.b=b},
ja:function ja(){},
jc:function jc(a,b,c){this.a=a
this.b=b
this.c=c},
jb:function jb(a,b){this.a=a
this.b=b},
jd:function jd(a,b,c){this.a=a
this.b=b
this.c=c},
m_:function(a,b){return new H.Z([a,b])},
m0:function(a){return H.nd(a,new H.Z([null,null]))},
m1:function(a){return new P.j7([a])},
k3:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
l1:function(a,b,c){var u=new P.j8(a,b,[c])
u.c=a.e
return u},
lV:function(a,b,c){var u,t
if(P.k6(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.o])
C.a.h($.ar,a)
try{P.mC(a,u)}finally{if(0>=$.ar.length)return H.c($.ar,-1)
$.ar.pop()}t=P.kL(b,H.nm(u,"$ie"),", ")+c
return t.charCodeAt(0)==0?t:t},
jP:function(a,b,c){var u,t
if(P.k6(a))return b+"..."+c
u=new P.bG(b)
C.a.h($.ar,a)
try{t=u
t.a=P.kL(t.a,a,", ")}finally{if(0>=$.ar.length)return H.c($.ar,-1)
$.ar.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
k6:function(a){var u,t
for(u=$.ar.length,t=0;t<u;++t)if(a===$.ar[t])return!0
return!1},
mC:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.i(b,"$ib",[P.o],"$ab")
u=a.gR(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.C())return
r=H.j(u.gK(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.C()){if(s<=5)return
if(0>=b.length)return H.c(b,-1)
q=b.pop()
if(0>=b.length)return H.c(b,-1)
p=b.pop()}else{o=u.gK(u);++s
if(!u.C()){if(s<=4){C.a.h(b,H.j(o))
return}q=H.j(o)
if(0>=b.length)return H.c(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gK(u);++s
for(;u.C();o=n,n=m){m=u.gK(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.c(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.j(o)
q=H.j(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
kw:function(a){var u,t={}
if(P.k6(a))return"{...}"
u=new P.bG("")
try{C.a.h($.ar,a)
u.a+="{"
t.a=!0
J.lK(a,new P.fV(t,u))
u.a+="}"}finally{if(0>=$.ar.length)return H.c($.ar,-1)
$.ar.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
j7:function j7(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cN:function cN(a){this.a=a
this.c=this.b=null},
j8:function j8(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fR:function fR(){},
u:function u(){},
fU:function fU(){},
fV:function fV(a,b){this.a=a
this.b=b},
ah:function ah(){},
je:function je(){},
ej:function ej(){},
cl:function cl(){},
d8:function d8(){},
ft:function ft(){},
ir:function ir(){},
is:function is(){},
jj:function jj(a){this.b=0
this.c=a},
lU:function(a){if(a instanceof H.ck)return a.i(0)
return"Instance of '"+H.bX(a)+"'"},
m2:function(a,b,c){var u,t
H.D(b,c)
u=J.lX(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.i(u,"$ib",[c],"$ab")},
kv:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.cf(a);u.C();)C.a.h(s,H.D(u.gK(u),c))
if(b)return s
return H.i(J.jQ(s),"$ib",t,"$ab")},
jY:function(a){var u,t,s=P.p
H.i(a,"$ie",[s],"$ae")
if(a.constructor===Array){H.i(a,"$iaH",[s],"$aaH")
u=a.length
t=P.jW(0,null,u)
return H.kJ(t<u?C.a.e7(a,0,t):a)}return P.ml(a,0,null)},
ml:function(a,b,c){var u,t,s
H.i(a,"$ie",[P.p],"$ae")
u=J.cf(a)
for(t=0;t<b;++t)if(!u.C())throw H.h(P.b5(b,0,t,null,null))
s=[]
for(;u.C();)s.push(u.gK(u))
return H.kJ(s)},
mf:function(a){return new H.fK(a,H.lY(a,!1,!0,!1))},
kL:function(a,b,c){var u=J.cf(b)
if(!u.C())return a
if(c.length===0){do a+=H.j(u.gK(u))
while(u.C())}else{a+=H.j(u.gK(u))
for(;u.C();)a=a+c+H.j(u.gK(u))}return a},
mz:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.i(a,"$ib",[P.p],"$ab")
if(c===C.p){u=$.lG().b
u=u.test(b)}else u=!1
if(u)return b
t=C.B.hT(H.D(b,H.aG(c,"cl",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.md(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lR:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lS:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
da:function(a){if(a>=10)return""+a
return"0"+a},
kq:function(a,b){return new P.aX(1e6*b+1000*a)},
dg:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aw(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lU(a)},
lL:function(a){return new P.aT(!1,null,null,a)},
jH:function(a,b,c){return new P.aT(!0,a,b,c)},
dG:function(a,b){return new P.bY(null,null,!0,a,b,"Value not in range")},
b5:function(a,b,c,d,e){return new P.bY(b,c,!0,a,d,"Invalid value")},
jW:function(a,b,c){if(0>a||a>c)throw H.h(P.b5(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.h(P.b5(b,a,c,"end",null))
return b}return c},
jV:function(a,b){if(typeof a!=="number")return a.aj()
if(a<0)throw H.h(P.b5(a,0,null,b,null))},
T:function(a,b,c,d,e){var u=H.X(e==null?J.cg(b):e)
return new P.fI(u,!0,a,c,"Index out of range")},
ak:function(a){return new P.ip(a)},
kS:function(a){return new P.im(a)},
cm:function(a){return new P.ff(a)},
t:function(a){return new P.ec(a)},
kg:function(a){H.nq(a)},
a2:function a2(){},
ax:function ax(a,b){this.a=a
this.b=b},
y:function y(){},
aX:function aX(a){this.a=a},
fq:function fq(){},
fr:function fr(){},
bv:function bv(){},
f2:function f2(){},
dC:function dC(){},
aT:function aT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bY:function bY(a,b,c,d,e,f){var _=this
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
ip:function ip(a){this.a=a},
im:function im(a){this.a=a},
dP:function dP(a){this.a=a},
ff:function ff(a){this.a=a},
hs:function hs(){},
dO:function dO(){},
fk:function fk(a){this.a=a},
ec:function ec(a){this.a=a},
fE:function fE(a,b){this.a=a
this.b=b},
p:function p(){},
e:function e(){},
b_:function b_(){},
b:function b(){},
E:function E(){},
M:function M(){},
aa:function aa(){},
N:function N(){},
aq:function aq(){},
o:function o(){},
bG:function bG(a){this.a=a},
n8:function(a){var u,t=J.W(a)
if(!!t.$ibx){u=t.gdr(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eL(a.data,a.height,a.width)},
n7:function(a){if(a instanceof P.eL)return{data:a.a,height:a.b,width:a.c}
return a},
bq:function(a){var u,t,s,r,q
if(a==null)return
u=P.m_(P.o,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r){q=H.Q(t[r])
u.n(0,q,a[q])}return u},
n6:function(a){var u={}
a.L(0,new P.js(u))
return u},
eL:function eL(a,b,c){this.a=a
this.b=b
this.c=c},
js:function js(a){this.a=a},
fA:function fA(a,b){this.a=a
this.b=b},
fB:function fB(){},
fC:function fC(){},
j6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mw:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
j9:function j9(){},
ap:function ap(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bi:function bi(){},
fN:function fN(){},
bn:function bn(){},
hq:function hq(){},
hw:function hw(){},
hY:function hY(){},
q:function q(){},
bp:function bp(){},
ia:function ia(){},
eh:function eh(){},
ei:function ei(){},
er:function er(){},
es:function es(){},
eC:function eC(){},
eD:function eD(){},
eJ:function eJ(){},
eK:function eK(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(a){this.a=a},
f7:function f7(){},
bQ:function bQ(){},
hr:function hr(){},
e5:function e5(){},
d3:function d3(){},
di:function di(){},
dF:function dF(){},
dH:function dH(){},
bZ:function bZ(){},
dI:function dI(){},
dQ:function dQ(){},
dY:function dY(){},
hQ:function hQ(){},
ey:function ey(){},
ez:function ez(){}},W={
jJ:function(){var u=document.createElement("canvas")
return u},
lT:function(a){H.k(a,"$if")
return"wheel"},
j5:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l0:function(a,b,c,d){var u=W.j5(W.j5(W.j5(W.j5(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a9:function(a,b,c,d,e){var u=W.l7(new W.iV(c),W.n)
if(u!=null&&!0)J.lJ(a,b,u,!1)
return new W.iU(a,b,u,!1,[e])},
l7:function(a,b){var u
H.l(a,{func:1,ret:-1,args:[b]})
u=$.V
if(u===C.f)return a
return u.df(a,b)},
r:function r(){},
eZ:function eZ(){},
f0:function f0(){},
f1:function f1(){},
d2:function d2(){},
bS:function bS(){},
cj:function cj(){},
bs:function bs(){},
cn:function cn(){},
fg:function fg(){},
O:function O(){},
co:function co(){},
fh:function fh(){},
aV:function aV(){},
aW:function aW(){},
fi:function fi(){},
fj:function fj(){},
fl:function fl(){},
dc:function dc(){},
fn:function fn(){},
dd:function dd(){},
de:function de(){},
fo:function fo(){},
fp:function fp(){},
iR:function iR(a,b){this.a=a
this.b=b},
a5:function a5(){},
n:function n(){},
f:function f(){},
aY:function aY(){},
fy:function fy(){},
fz:function fz(){},
fD:function fD(){},
aZ:function aZ(){},
fG:function fG(){},
bU:function bU(){},
bx:function bx(){},
cs:function cs(){},
b0:function b0(){},
fS:function fS(){},
ha:function ha(){},
hb:function hb(){},
hc:function hc(a){this.a=a},
hd:function hd(){},
he:function he(a){this.a=a},
b3:function b3(){},
hf:function hf(){},
ae:function ae(){},
iQ:function iQ(a){this.a=a},
J:function J(){},
cy:function cy(){},
b4:function b4(){},
hu:function hu(){},
hC:function hC(){},
hD:function hD(a){this.a=a},
hF:function hF(){},
b6:function b6(){},
hO:function hO(){},
b7:function b7(){},
hP:function hP(){},
b8:function b8(){},
hS:function hS(){},
hT:function hT(a){this.a=a},
aJ:function aJ(){},
b9:function b9(){},
aK:function aK(){},
i_:function i_(){},
i0:function i0(){},
i5:function i5(){},
bb:function bb(){},
aN:function aN(){},
i8:function i8(){},
i9:function i9(){},
bI:function bI(){},
iq:function iq(){},
iI:function iI(){},
bd:function bd(){},
cL:function cL(){},
iS:function iS(){},
e7:function e7(){},
j4:function j4(){},
eo:function eo(){},
jf:function jf(){},
jg:function jg(){},
iT:function iT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
k2:function k2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iU:function iU(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iV:function iV(a){this.a=a},
B:function B(){},
dh:function dh(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
e6:function e6(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
ek:function ek(){},
el:function el(){},
em:function em(){},
en:function en(){},
ep:function ep(){},
eq:function eq(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
cS:function cS(){},
cT:function cT(){},
ew:function ew(){},
ex:function ex(){},
eB:function eB(){},
eE:function eE(){},
eF:function eF(){},
cU:function cU(){},
cV:function cV(){},
eH:function eH(){},
eI:function eI(){},
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
fd:function(a){var u=new O.S([a])
u.bc(a)
return u},
S:function S(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cu:function cu(){this.b=this.a=null},
kN:function(a,b,c){var u,t,s,r=new O.aM(),q=r.a
r.a=c
c.gl().h(0,r.gab())
u=new D.A("texture",q,r.a,[T.dR])
u.b=!0
r.G(u)
t=V.b2()
if(!J.K(r.b,t)){q=r.b
r.b=t
u=new D.A("colorMatrix",q,t,[V.ad])
u.b=!0
r.G(u)}s=V.hx()
if(!J.K(r.c,s)){q=r.c
r.c=s
u=new D.A("source",q,s,[V.bF])
u.b=!0
r.G(u)}if(!J.K(r.d,a)){q=r.d
r.d=a
u=new D.A("destination",q,a,[V.bF])
u.b=!0
r.G(u)}if(r.e!==b){r.e=b
u=new D.A("flip",!b,b,[P.a2])
u.b=!0
r.G(u)}r.f=null
return r},
fm:function fm(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
du:function du(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h3:function h3(a,b){this.a=a
this.b=b},
h4:function h4(){},
h5:function h5(a,b){this.a=a
this.b=b},
h6:function h6(){},
h7:function h7(a,b){this.a=a
this.b=b},
h8:function h8(){},
fY:function fY(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dw:function dw(){},
fZ:function fZ(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b1:function b1(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h0:function h0(){var _=this
_.e=_.d=_.c=_.b=null},
h1:function h1(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h2:function h2(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dA:function dA(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dK:function dK(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bH:function bH(){},
dS:function dS(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aM:function aM(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
jM:function(){var u=new E.am()
u.a=""
u.b=!0
u.seh(0,O.fd(E.am))
u.y.aD(u.gic(),u.gih())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sbb(0,null)
u.sb5(null)
return u},
mg:function(a,b){var u=new E.hy(a)
u.ed(a,b)
return u},
mo:function(a,b,c,d,e){var u,t,s=J.W(a)
if(!!s.$ibS)return E.kO(a,!0,!0,!0,!1)
u=W.jJ()
t=u.style
t.width="100%"
t.height="100%"
s.gdk(a).h(0,u)
return E.kO(u,!0,!0,!0,!1)},
kO:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dU(),j=H.k(C.h.cq(a,"webgl2",P.m0(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibZ")
if(j==null)H.w(P.t("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.mg(j,a)
u=new T.i2(j)
H.X(j.getParameter(3379))
u.c=H.X(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.e0(a)
t=new X.fM()
t.c=new X.as(!1,!1,!1)
t.sha(P.m1(P.p))
u.b=t
t=new X.hg(u)
t.f=0
t.r=V.bo()
t.x=V.bo()
t.ch=t.Q=1
u.c=t
t=new X.fT(u)
t.r=0
t.x=V.bo()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.i7(u)
t.f=V.bo()
t.r=V.bo()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seM(H.d([],[[P.cF,P.N]]))
t=u.z
s=document
r=W.ae
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a9(s,"contextmenu",H.l(u.gfn(),q),!1,r))
t=u.z
p=W.n
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a9(a,"focus",H.l(u.gfA(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a9(a,"blur",H.l(u.gfh(),o),!1,p))
t=u.z
n=W.b0
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a9(s,"keyup",H.l(u.gfE(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a9(s,"keydown",H.l(u.gfC(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a9(a,"mousedown",H.l(u.gfI(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a9(a,"mouseup",H.l(u.gfM(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a9(a,l,H.l(u.gfK(),q),!1,r))
n=u.z
m=W.bd;(n&&C.a).h(n,W.a9(a,H.Q(W.lT(a)),H.l(u.gfO(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a9(s,l,H.l(u.gfp(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a9(s,"mouseup",H.l(u.gfs(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a9(s,"pointerlockchange",H.l(u.gfQ(),o),!1,p))
p=u.z
o=W.aN
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a9(a,"touchstart",H.l(u.gh5(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a9(a,"touchend",H.l(u.gh1(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a9(a,"touchmove",H.l(u.gh3(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.ax(Date.now(),!1)
k.cy=0
k.d3()
return k},
f9:function f9(){},
am:function am(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hy:function hy(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hz:function hz(a){this.a=a},
hA:function hA(a){this.a=a},
hB:function hB(a){this.a=a},
dU:function dU(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
i4:function i4(a){this.a=a}},Z={
k1:function(a,b,c){var u
H.i(c,"$ib",[P.p],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.c4(c)),35044)
a.bindBuffer(b,null)
return new Z.e3(b,u)},
aC:function(a){return new Z.av(a)},
e3:function e3(a,b){this.a=a
this.b=b},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
bK:function bK(a){this.a=a},
bg:function bg(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
by:function by(a,b,c){this.a=a
this.b=b
this.c=c},
av:function av(a){this.a=a}},D={
H:function(){var u=new D.bw()
u.sa9(null)
u.saH(null)
u.c=null
u.d=0
return u},
fc:function fc(){},
bw:function bw(){var _=this
_.d=_.c=_.b=_.a=null},
fv:function fv(a){this.a=a},
fw:function fw(a){this.a=a},
x:function x(){this.b=null},
bz:function bz(a){this.b=null
this.$ti=a},
bA:function bA(a){this.b=null
this.$ti=a},
A:function A(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bu:function bu(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ac:function ac(){},
dp:function dp(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dE:function dE(){},
dN:function dN(){}},X={d5:function d5(a,b){this.a=a
this.b=b},dn:function dn(a,b){this.a=a
this.b=b},fM:function fM(){var _=this
_.d=_.c=_.b=_.a=null},ds:function ds(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fT:function fT(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},as:function as(a,b,c){this.a=a
this.b=b
this.c=c},bD:function bD(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hg:function hg(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cv:function cv(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hv:function hv(){},dW:function dW(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},i7:function i7(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},e0:function e0(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kl:function(a,b,c){var u,t,s,r=new X.f8()
r.d=r.c=r.b=r.a=512
r.e=!0
r.f=!1
r.x=r.r=1
r.ch=T.kM(null)
r.cx=new V.a0(0,0,0,1)
r.cy=!0
r.db=2000
r.dx=!0
r.dy=V.hx()
r.sai(0,512)
r.saf(0,512)
if(c==null)c=new V.a0(0,0,0,1)
if(!r.cx.p(0,c)){u=r.cx
r.cx=c
t=new D.A("color",u,c,[V.a0])
t.b=!0
r.a_(t)}if(r.cy!==b){r.cy=b
t=new D.A("clearColor",!b,b,[P.a2])
t.b=!0
r.a_(t)}t=r.db
if(!(Math.abs(t-2000)<$.L().a)){r.db=2000
t=new D.A("depth",t,2000,[P.y])
t.b=!0
r.a_(t)}if(!r.f){r.f=!0
t=new D.A("autoResize",!1,!0,[P.a2])
t.b=!0
r.a_(t)}t=r.r
if(!(Math.abs(t-1)<$.L().a)){r.r=1
t=new D.A("autoResizeScalarX",t,1,[P.y])
t.b=!0
r.a_(t)}t=r.x
if(!(Math.abs(t-1)<$.L().a)){r.x=1
t=new D.A("autoResizeScalarY",t,1,[P.y])
t.b=!0
r.a_(t)}s=V.hx()
if(!J.K(r.dy,s)){u=r.dy
r.dy=s
t=new D.A("region",u,s,[V.bF])
t.b=!0
r.a_(t)}return r},
jN:function(a,b){var u=new X.fF(),t=new V.a0(0,0,0,1)
u.a=t
u.b=a
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.hx()
u.r=t
return u},
kE:function(a){var u,t=new X.dD()
t.c=1.0471975511965976
t.d=0.1
t.e=2000
t.sb5(a)
u=t.c
if(!(Math.abs(u-1.0471975511965976)<$.L().a)){t.c=1.0471975511965976
u=new D.A("fov",u,1.0471975511965976,[P.y])
u.b=!0
t.a_(u)}u=t.d
if(!(Math.abs(u-0.1)<$.L().a)){t.d=0.1
u=new D.A("near",u,0.1,[P.y])
u.b=!0
t.a_(u)}u=t.e
if(!(Math.abs(u-2000)<$.L().a)){t.e=2000
u=new D.A("far",u,2000,[P.y])
u.b=!0
t.a_(u)}return t},
f8:function f8(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bR:function bR(){},
fF:function fF(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fH:function fH(){this.b=this.a=null},
dD:function dD(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cG:function cG(){}},V={
ny:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.b.e2(a-b,u)
return(a<0?a+u:a)+b},
P:function(a,b,c){if(a==null)return C.e.ah("null",c)
return C.e.ah(C.b.dY(Math.abs(a-0)<$.L().a?0:a,b),c+b+1)},
c9:function(a,b,c){var u,t,s,r,q,p
H.i(a,"$ib",[P.y],"$ab")
u=H.d([],[P.o])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.v)(a),++r){q=V.P(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.c(u,p)
C.a.n(u,p,C.e.ah(u[p],s))}return u},
cZ:function(a){return C.b.iE(Math.pow(2,C.G.c4(Math.log(H.n5(a))/Math.log(2))))},
jU:function(){var u=$.kx
return u==null?$.kx=new V.ct(1,0,0,0,1,0,0,0,1):u},
b2:function(){var u=$.h9
return u==null?$.h9=V.bl(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bl:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ad(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kA:function(a,b,c){return V.bl(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kz:function(a,b,c){return V.bl(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
ky:function(a,b,c){var u=c.v(0,Math.sqrt(c.D(c))),t=b.aw(u),s=t.v(0,Math.sqrt(t.D(t))),r=u.aw(s),q=new V.F(a.a,a.b,a.c),p=s.O(0).D(q),o=r.O(0).D(q),n=u.O(0).D(q)
return V.bl(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bo:function(){var u=$.kG
return u==null?$.kG=new V.a3(0,0):u},
kH:function(){var u=$.cz
return u==null?$.cz=new V.a1(0,0,0):u},
hx:function(){var u=$.cC
return u==null?$.cC=V.cB(0,0,1,1):u},
cB:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.bF(a,b,c,d)},
cK:function(){var u=$.kY
return u==null?$.kY=new V.F(0,0,0):u},
mq:function(){var u=$.it
return u==null?$.it=new V.F(-1,0,0):u},
k0:function(){var u=$.iu
return u==null?$.iu=new V.F(0,1,0):u},
kZ:function(){var u=$.iv
return u==null?$.iv=new V.F(0,0,1):u},
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
a0:function a0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fu:function fu(a){this.a=a},
ct:function ct(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ad:function ad(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a3:function a3(a,b){this.a=a
this.b=b},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
aI:function aI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bF:function bF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
U:function U(a,b){this.a=a
this.b=b},
F:function F(a,b,c){this.a=a
this.b=b
this.c=c},
ai:function(a){var u=new V.hG()
u.ee(a)
return u},
f_:function f_(){},
bk:function bk(){},
dt:function dt(){},
bm:function bm(){this.a=null},
hG:function hG(){this.a=null},
cE:function cE(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dV:function dV(a,b,c){this.a=a
this.b=b
this.c=c},
cI:function cI(a){this.b=a
this.c=null},
i6:function i6(){this.c=this.b=this.a=null},
cJ:function cJ(a){this.b=a
this.a=this.c=null},
nt:function(a){P.mp(C.E,new V.jC(a))},
mi:function(a){var u=new V.hK()
u.ef(a,!0)
return u},
jC:function jC(a){this.a=a},
hK:function hK(){this.b=this.a=null},
hM:function hM(a){this.a=a},
hL:function hL(a){this.a=a}},U={
kp:function(){var u=new U.fe()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
jK:function(a){var u=new U.d7()
u.a=a
return u},
ks:function(){var u=new U.cr()
u.bc(U.af)
u.aD(u.gek(),u.gfU())
u.e=null
u.f=V.b2()
u.r=0
return u},
kT:function(a,b){var u,t,s,r=new U.e1(),q=U.kp()
q.se0(0,!0)
q.sdK(6.283185307179586)
q.sdM(0)
q.saa(0,0)
q.sdL(100)
q.sY(0)
q.sdq(0.5)
r.b=q
u=r.gbd()
q.gl().h(0,u)
q=U.kp()
q.se0(0,!0)
q.sdK(6.283185307179586)
q.sdM(0)
q.saa(0,0)
q.sdL(100)
q.sY(0)
q.sdq(0.5)
r.c=q
q.gl().h(0,u)
r.d=null
r.r=r.f=r.e=!1
r.y=r.x=2.5
r.Q=4
r.ch=r.cx=!1
r.db=r.cy=0
r.dx=null
r.dy=0
r.fx=r.fr=null
t=new X.as(a,!1,!1)
s=r.d
r.d=t
q=new D.A("modifiers",s,t,[X.as])
q.b=!0
r.P(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.A("invertX",q,!1,[P.a2])
q.b=!0
r.P(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.A("invertY",q,!1,[P.a2])
q.b=!0
r.P(q)}r.bP(b)
return r},
kU:function(a,b){var u,t,s=new U.e2()
s.c=0.01
s.e=s.d=0
u=new X.as(a,!1,!1)
s.b=u
t=new D.A("modifiers",null,u,[X.as])
t.b=!0
s.P(t)
s.bP(b)
return s},
fe:function fe(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d7:function d7(){this.b=this.a=null},
cr:function cr(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
af:function af(){},
e1:function e1(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e2:function e2(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
jL:function(){var u,t,s,r,q,p,o,n,m,l=null,k=new M.d9()
k.a=!0
u=E.jM()
t=F.jX()
s=t.a
r=new V.F(-1,-1,1)
r=r.v(0,Math.sqrt(r.D(r)))
q=s.bj(new V.aI(1,2,4,6),new V.a0(1,0,0,1),new V.a1(-1,-1,0),new V.a3(0,1),r,l)
s=t.a
r=new V.F(1,-1,1)
r=r.v(0,Math.sqrt(r.D(r)))
p=s.bj(new V.aI(0,3,4,6),new V.a0(0,0,1,1),new V.a1(1,-1,0),new V.a3(1,1),r,l)
s=t.a
r=new V.F(1,1,1)
r=r.v(0,Math.sqrt(r.D(r)))
o=s.bj(new V.aI(0,2,5,6),new V.a0(0,1,0,1),new V.a1(1,1,0),new V.a3(1,0),r,l)
s=t.a
r=V.bo()
n=new V.F(-1,1,1)
n=n.v(0,Math.sqrt(n.D(n)))
m=s.bj(new V.aI(0,2,4,7),new V.a0(1,1,0,1),new V.a1(-1,1,0),r,n,l)
t.d.hJ(H.d([q,p,o,m],[F.an]))
t.ak()
u.sbb(0,t)
k.e=u
k.saX(l)
k.saA(0,l)
k.sap(l)
return k},
kr:function(){var u,t=new M.df()
t.a=!0
t.seA(0,O.fd(E.am))
t.e.aD(t.gfj(),t.gfl())
t.y=t.x=t.r=t.f=null
u=X.jN(!0,null)
t.saX(null)
t.saA(0,u)
t.sap(null)
return t},
d6:function d6(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
d9:function d9(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
df:function df(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
at:function at(){}},A={
m3:function(a,b){var u=a.b2,t=new A.dv(b,u)
t.aQ(b,u)
t.ec(a,b)
return t},
m4:function(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
H.i(b0,"$ib",[A.ay],"$ab")
H.i(b1,"$ib",[A.az],"$ab")
H.i(b2,"$ib",[A.aA],"$ab")
u="MaterialLight_"+a1.gac(a1)+a2.gac(a2)+a3.gac(a3)+a4.gac(a4)+a5.gac(a5)+a6.gac(a6)+a7.gac(a7)+a8.gac(a8)+a9.gac(a9)+"_"
u+=a?"1":"0"
u+=b?"1":"0"
u+=c?"1":"0"
u=u+"0_"+a0
t=b0.length
if(t>0){u+="_Dir"
for(s=0;s<b0.length;b0.length===t||(0,H.v)(b0),++s)u+="_"+H.j(b0[s].a)}t=b1.length
if(t>0){u+="_Point"
for(s=0;s<b1.length;b1.length===t||(0,H.v)(b1),++s)u+="_"+H.j(b1[s].a)}t=b2.length
if(t>0){u+="_Spot"
for(s=0;s<b2.length;b2.length===t||(0,H.v)(b2),++s)u+="_"+H.j(b2[s].a)}for(t=b0.length,r=0,q=!1,s=0;s<t;++s,q=!0)r+=b0[s].b
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
e=$.ag()
if(j){t=$.aQ()
e=new Z.av(e.a|t.a)}if(i){t=$.aP()
e=new Z.av(e.a|t.a)}if(h){t=$.aR()
e=new Z.av(e.a|t.a)}if(g){t=$.br()
e=new Z.av(e.a|t.a)}return new A.h_(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,r,o,k,o,q,f,!0,!1,!1,n,q,l,j,i,!1,h,g,!1,b,c,!1,a0,u.charCodeAt(0)==0?u:u,e)},
jn:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
jo:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.jn(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.jD(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
mG:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jn(b,t,"emission")
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
mD:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jo(b,t,"ambient")
b.a+="\n"},
mE:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jo(b,t,"diffuse")
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
mH:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jo(b,t,"invDiffuse")
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
mN:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jo(b,t,"specular")
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
mJ:function(a,b){var u,t,s
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
mL:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jn(b,t,"reflect")
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
mM:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jn(b,t,"refract")
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
mF:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.j(u)
s=A.jD(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.aq()
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
r=[P.o]
o=H.d([],r)
n=a.b
if(!n.a)n=n.c
else n=!0
if(n)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.d([],r)
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
mK:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.j(u)
s=A.jD(t)
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
if(typeof u!=="number")return u.aq()
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
c.a=r+"\n"}r=[P.o]
l=H.d([],r)
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
l=H.d([],r)
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
k=H.d([],r)
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
mO:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.j(u)
s=A.jD(t)
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
if(typeof u!=="number")return u.aq()
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
c.a=u+"\n"}u=[P.o]
j=H.d([],u)
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
j=H.d([],u)
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
i=H.d([],u)
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
mI:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.d([],[P.o])
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
u=b.a+="   return "+C.a.u(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
mP:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.bG("")
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
A.mG(a,i)
A.mD(a,i)
A.mE(a,i)
A.mH(a,i)
A.mN(a,i)
t=a.cy
if(t){r=i.a+="// === Enviromental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.mL(a,i)
A.mM(a,i)}A.mJ(a,i)
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
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.v)(q),++n)A.mF(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.v)(q),++n)A.mK(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.v)(q),++n)A.mO(a,q[n],i)
A.mI(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.d([],[P.o])
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
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.v)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.c(r,0)
i.a+=l+(r[0].toUpperCase()+C.e.aP(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.v)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.c(r,0)
i.a+=l+(r[0].toUpperCase()+C.e.aP(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.v)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.c(r,0)
i.a+=l+(r[0].toUpperCase()+C.e.aP(r,1))+"Values(norm);\n"}if(a.cx<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
u=i.a+="   vec4 objClr = vec4("+C.a.u(m," + ")+", alpha);\n"
if(s)u=i.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
mQ:function(a,b){var u,t,s
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
mS:function(a,b){var u
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
mR:function(a,b){var u
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
mU:function(a,b){var u,t
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
mV:function(a,b){var u,t
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
mT:function(a,b){var u
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
mW:function(a,b){var u
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
kB:function(a){var u,t,s,r,q,p
if(!a.a)u=a.c
else u=!0
t=a.c
s="Normal_"+a.gac(a)
r=$.ag()
q=$.aQ()
q=r.a|q.a
p=new Z.av(q)
if(u)p=new Z.av(q|$.aP().a)
return new A.ho(a,u,!1,t,s,t?new Z.av(p.a|$.aR().a):p)},
jD:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.e.aP(a,1)},
mn:function(a,b){var u,t,s,r
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+="\nvec4 clrAccum;\n"
s=b===C.D
t=(s||b===C.i?t+"float colorCount;\n":t)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.C)t+="      clrAccum += color;\n"
else if(b===C.j)t+="      clrAccum = mix(clrAccum, color, color.a);\n"
else t=s?t+"      clrAccum += color;\n      colorCount += 1.0;\n":t+"      clrAccum = color;\n      colorCount = 1.0;\n"
t+="   }\n}\n\nvoid layoutAll()\n{\n"
r=b===C.i
if(r)for(u=a-1;u>=0;--u)t=t+("   if(txtCount > "+u+")\n")+"   {\n"+("     layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return;\n")+("   layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(s)t+="   colorCount = 1.0;\n"
else if(r)t+="   colorCount = 0.0;\n"
t+="   layoutAll();\n"
t=(s?t+"   clrAccum = clrAccum/colorCount;\n":t)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return t.charCodeAt(0)==0?t:t},
mm:function(a,b,c){var u="TextureLayout_"+a+"_"+C.d.i(b.a),t=new A.dT(c,u)
t.aQ(c,u)
t.eg(a,b,c)
return t},
k_:function(a,b,c,d,e){var u=new A.ig(a,c,e)
u.f=d
u.shG(P.m2(d,0,P.p))
return u},
d1:function d1(a,b,c){this.a=a
this.b=b
this.c=c},
f3:function f3(a){this.a=a},
ab:function ab(a,b,c){this.a=a
this.b=b
this.c=c},
db:function db(a,b){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dv:function dv(a,b){var _=this
_.dt=_.iR=_.ds=_.bl=_.b2=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iZ=_.iY=_.iX=_.c3=_.c2=_.c1=_.c0=_.c_=_.bZ=_.dH=_.iW=_.dG=_.dF=_.iV=_.dE=_.dD=_.dC=_.iU=_.dB=_.dA=_.dz=_.iT=_.dw=_.dv=_.iS=_.du=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ay:function ay(a,b){this.a=a
this.b=b},
az:function az(a,b){this.a=a
this.b=b},
aA:function aA(a,b){this.a=a
this.b=b},
h_:function h_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.b2=b3
_.bl=b4},
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
dB:function dB(a,b){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ho:function ho(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cD:function cD(){},
bt:function bt(a,b){this.a=a
this.b=b},
dL:function dL(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dT:function dT(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dX:function dX(){},
ik:function ik(a){this.a=a},
aj:function aj(a,b,c){this.a=a
this.c=b
this.d=c},
ih:function ih(a,b,c){this.a=a
this.c=b
this.d=c},
ii:function ii(a,b,c){this.a=a
this.c=b
this.d=c},
ij:function ij(a,b,c){this.a=a
this.c=b
this.d=c},
ig:function ig(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a7:function a7(a,b,c){this.a=a
this.c=b
this.d=c},
au:function au(a,b,c){this.a=a
this.c=b
this.d=c},
R:function R(a,b,c){this.a=a
this.c=b
this.d=c},
c_:function c_(a,b,c){this.a=a
this.c=b
this.d=c},
il:function il(a,b,c){this.a=a
this.c=b
this.d=c},
bJ:function bJ(a,b,c){this.a=a
this.c=b
this.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
aB:function aB(a,b,c){this.a=a
this.c=b
this.d=c},
a8:function a8(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jm:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cW:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.F(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.F(u+a3,t+a1,s+a2)
q=new V.F(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.F(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jm(i)
l=F.jm(j.b)
k=F.lp(d,a0,new F.jl(j,F.jm(j.c),F.jm(j.d),l,m,c),b)
if(k!=null)a.cc(k)},
nx:function(){return F.n9(15,30,0.5,1,new F.jE())},
n9:function(a,b,c,d,e){var u=F.lp(a,b,new F.jt(H.l(e,{func:1,ret:V.a1,args:[P.y]}),d,b,c),null)
if(u==null)return
u.ak()
u.ib(new F.iC(),new F.hn())
return u},
lp:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.l(c,{func:1,ret:-1,args:[F.an,P.y,P.y]})
if(a<1)return
if(b<1)return
u=F.jX()
t=H.d([],[F.an])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.iw(g,g,new V.a0(p,0,0,1),g,g,new V.a3(r,1),g,g,0)
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
o=F.iw(g,g,new V.a0(j,i,h,1),g,g,new V.a3(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.bV(d))}}u.d.hK(a+1,b+1,t)
return u},
cp:function(a,b,c){var u=new F.a6(),t=a.a
if(t==null)H.w(P.t("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.w(P.t("May not create a face with vertices attached to different shapes."))
u.bM(a)
u.bN(b)
u.hk(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a2()
return u},
lZ:function(a,b){var u=new F.bj(),t=a.a
if(t==null)H.w(P.t("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.w(P.t("May not create a line with vertices attached to different shapes."))
u.bM(a)
u.bN(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a2()
return u},
jX:function(){var u=new F.dJ(),t=new F.ix(u)
t.b=!1
t.shH(H.d([],[F.an]))
u.a=t
t=new F.hJ(u)
t.sbF(H.d([],[F.bE]))
u.b=t
t=new F.hI(u)
t.seW(H.d([],[F.bj]))
u.c=t
t=new F.hH(u)
t.seN(H.d([],[F.a6]))
u.d=t
u.e=null
return u},
iw:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.an(),r=new F.iF()
r.sbF(H.d([],[F.bE]))
s.b=r
r=new F.iB()
u=[F.bj]
r.seX(H.d([],u))
r.seY(H.d([],u))
s.c=r
r=new F.iy()
u=[F.a6]
r.seO(H.d([],u))
r.seP(H.d([],u))
r.seQ(H.d([],u))
s.d=r
h=$.lD()
s.e=0
r=$.ag()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aQ().a)!==0?e:t
s.x=(u&$.aP().a)!==0?b:t
s.y=(u&$.bf().a)!==0?f:t
s.z=(u&$.aR().a)!==0?g:t
s.Q=(u&$.lE().a)!==0?c:t
s.ch=(u&$.ce().a)!==0?i:0
s.cx=(u&$.br().a)!==0?a:t
return s},
jl:function jl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jE:function jE(){},
jt:function jt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a6:function a6(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fx:function fx(){},
hN:function hN(){},
bj:function bj(){this.b=this.a=null},
fO:function fO(){},
ie:function ie(){},
bE:function bE(){this.a=null},
dJ:function dJ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hH:function hH(a){this.a=a
this.b=null},
hI:function hI(a){this.a=a
this.b=null},
hJ:function hJ(a){this.a=a
this.b=null},
an:function an(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iH:function iH(a){this.a=a},
iG:function iG(a){this.a=a},
ix:function ix(a){this.a=a
this.c=this.b=null},
iy:function iy(){this.d=this.c=this.b=null},
iz:function iz(a,b){this.a=a
this.b=b},
iA:function iA(a,b){this.a=a
this.b=b},
iB:function iB(){this.c=this.b=null},
iD:function iD(){},
iC:function iC(){},
iE:function iE(){},
hn:function hn(){},
iF:function iF(){this.b=null}},T={
kM:function(a){var u=new T.i1()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
aL:function aL(){},
dR:function dR(){},
i1:function i1(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cH:function cH(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i2:function i2(a){var _=this
_.a=a
_.e=_.d=_.c=null},
i3:function i3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},S={
li:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="testCanvas",a5=null,a6=V.mi("Test 031"),a7=W.jJ()
a7.className="pageLargeCanvas"
a7.id=a4
a6.a.appendChild(a7)
u=[P.o]
a6.de(H.d(["A test of the Distortion cover with a dynamic normal map. ","The distortion map is generated into one back buffer. ","The scene is generated into another back buffer. ","The two parts are combined with a Distortion cover. ","Use mouse to rotate cube in normal map and Ctrl plus mouse ","to rotate scene."],u))
a6.de(H.d(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a4)
if(t==null)H.w(P.t("Failed to find an element with the identifier, testCanvas."))
s=E.mo(t,!0,!0,!0,!1)
r=E.jM()
q=F.jX()
F.cW(q,a5,a5,1,1,1,0,0,1)
F.cW(q,a5,a5,1,1,0,1,0,3)
F.cW(q,a5,a5,1,1,0,0,1,2)
F.cW(q,a5,a5,1,1,-1,0,0,0)
F.cW(q,a5,a5,1,1,0,-1,0,0)
F.cW(q,a5,a5,1,1,0,0,-1,3)
q.ak()
r.sbb(0,q)
a6=U.ks()
a6.h(0,U.kT(!1,s.r))
a6.h(0,U.kU(!1,s.r))
r.sb5(a6)
p=new O.dA()
p.b=V.jU()
p.c=V.b2()
p.d=new A.ab(!1,!1,!1)
p.d4(a5)
p.d5(a5)
p.W()
p.r=null
a6=s.f.i9("../resources/diceBumpMap")
u=p.d
if(!u.c){p.d=new A.ab(u.a,!1,!0)
p.d4(a5)
p.a=null}p.d5(a6)
o=X.kl(!0,!0,new V.a0(0.5,0.5,1,1))
n=M.kr()
n.sap(p)
n.saA(0,o)
n.e.h(0,r)
n.b.sb5(U.jK(V.kA(0,0,5)))
m=U.ks()
m.h(0,U.kT(!0,s.r))
m.h(0,U.kU(!0,s.r))
m.h(0,U.jK(V.kA(0,0,5)))
l=X.kE(m)
k=X.kl(!0,!1,a5)
j=E.jM()
j.sbb(0,F.nx())
i=new O.du()
i.sex(O.fd(V.ad))
i.e.aD(i.gfd(),i.gff())
a6=new O.b1(i,"emission")
a6.c=new A.ab(!1,!1,!1)
a6.f=new V.Y(0,0,0)
i.f=a6
a6=new O.b1(i,"ambient")
a6.c=new A.ab(!1,!1,!1)
a6.f=new V.Y(0,0,0)
i.r=a6
a6=new O.b1(i,"diffuse")
a6.c=new A.ab(!1,!1,!1)
a6.f=new V.Y(0,0,0)
i.x=a6
a6=new O.b1(i,"invDiffuse")
a6.c=new A.ab(!1,!1,!1)
a6.f=new V.Y(0,0,0)
i.y=a6
a6=new O.h2(i,"specular")
a6.c=new A.ab(!1,!1,!1)
a6.f=new V.Y(0,0,0)
a6.ch=100
i.z=a6
a6=new O.fZ(i,"bump")
a6.c=new A.ab(!1,!1,!1)
i.Q=a6
i.ch=null
a6=new O.b1(i,"reflect")
a6.c=new A.ab(!1,!1,!1)
a6.f=new V.Y(0,0,0)
i.cx=a6
a6=new O.h1(i,"refract")
a6.c=new A.ab(!1,!1,!1)
a6.f=new V.Y(0,0,0)
a6.ch=1
i.cy=a6
a6=new O.fY(i,"alpha")
a6.c=new A.ab(!1,!1,!1)
a6.f=1
i.db=a6
a6=new D.dp()
a6.bc(D.ac)
a6.seJ(H.d([],[D.bu]))
a6.sh7(H.d([],[D.dE]))
a6.shr(H.d([],[D.dN]))
a6.y=a6.x=null
a6.cr(a6.gfb(),a6.gfS(),a6.gfW())
i.dx=a6
u=new O.h0()
u.b=new V.a0(0,0,0,0)
u.c=1
u.d=10
u.e=!1
i.dy=u
u=a6.x
a6=u==null?a6.x=D.H():u
a6.h(0,i.ghg())
a6=i.dx
u=a6.y
a6=u==null?a6.y=D.H():u
a6.h(0,i.gab())
i.fr=null
a6=i.dx
h=V.k0()
u=U.jK(V.ky(V.kH(),h,new V.F(0,-1,-1)))
g=new V.Y(1,1,1)
f=new D.bu()
f.c=new V.Y(1,1,1)
f.a=V.kZ()
f.d=V.k0()
f.e=V.mq()
e=f.b
f.b=u
u.gl().h(0,f.gei())
u=new D.A("mover",e,f.b,[U.af])
u.b=!0
f.ar(u)
if(!f.c.p(0,g)){e=f.c
f.c=g
u=new D.A("color",e,g,[V.Y])
u.b=!0
f.ar(u)}a6.h(0,f)
a6=i.r
a6.saY(0,new V.Y(0,0,1))
a6=i.x
a6.saY(0,new V.Y(0,1,0))
a6=i.z
a6.saY(0,new V.Y(1,0,0))
a6=i.z
a6.d7(new A.ab(!0,!1,a6.c.c))
a6.d8(10)
a6=s.f.dJ("../resources/maskonaive",".jpg")
d=M.jL()
u=new O.dK()
u.b=1.0471975511965976
u.d=new V.Y(1,1,1)
e=u.c
u.c=a6
a6.gl().h(0,u.gab())
a6=new D.A("boxTexture",e,u.c,[T.cH])
a6.b=!0
u.G(a6)
d.sap(u)
d.saA(0,k)
d.saX(l)
c=M.kr()
c.saX(l)
c.sap(i)
c.saA(0,k)
c.e.h(0,j)
b=new O.fm()
b.sdm(a5)
b.sdj(a5)
a=V.jU()
if(!J.K(b.d,a)){b.d=a
b.W()}a=V.jU()
if(!J.K(b.e,a)){b.e=a
b.W()}b.sdi(a5)
b.sdm(k.ch)
b.sdj(o.ch)
b.sdi(V.kz(0.05,0.05,0.05))
a0=M.jL()
a0.sap(b)
a1=new O.dS()
a1.a=new V.a0(0,0,0,0)
a1.seL(O.fd(O.aM))
a1.c.aD(a1.gfu(),a1.gfw())
a1.d=0
a1.e=null
a1.r=a1.f=C.j
a2=new V.a0(0,0,0,0)
if(!a1.a.p(0,a2)){e=a1.a
a1.a=a2
a6=new D.A("backColor",e,a2,[V.a0])
a6.b=!0
a1.G(a6)}a1.sdg(C.j)
a1.sdg(C.i)
a6=a1.c
u=o.ch
a6.h(0,O.kN(V.cB(0,0.8,0.2,0.2),!0,u))
u=a1.c
a6=k.ch
u.h(0,O.kN(V.cB(0,0.6,0.2,0.2),!1,a6))
a3=M.jL()
a3.saA(0,X.jN(!1,a5))
a3.sap(a1)
a6=M.at
u=H.d([d,c,n,a0,a3],[a6])
f=new M.d6()
f.bc(a6)
f.e=!0
f.f=!1
f.r=null
f.aD(f.gfY(),f.gh_())
f.bO(0,u)
a6=s.d
if(a6!==f){if(a6!=null)a6.gl().F(0,s.gcA())
s.d=f
f.gl().h(0,s.gcA())
s.cB()}V.nt(s)}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,S]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jS.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gJ:function(a){return H.cA(a)},
i:function(a){return"Instance of '"+H.bX(a)+"'"}}
J.fJ.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$ia2:1}
J.dl.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0}}
J.dm.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.ht.prototype={}
J.c3.prototype={}
J.bh.prototype={
i:function(a){var u=a[$.ls()]
if(u==null)return this.e9(a)
return"JavaScript function for "+H.j(J.aw(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ijO:1}
J.aH.prototype={
h:function(a,b){H.D(b,H.z(a,0))
if(!!a.fixed$length)H.w(P.ak("add"))
a.push(b)},
dT:function(a,b){if(!!a.fixed$length)H.w(P.ak("removeAt"))
if(b<0||b>=a.length)throw H.h(P.dG(b,null))
return a.splice(b,1)[0]},
F:function(a,b){var u
if(!!a.fixed$length)H.w(P.ak("remove"))
for(u=0;u<a.length;++u)if(J.K(a[u],b)){a.splice(u,1)
return!0}return!1},
bO:function(a,b){var u,t
H.i(b,"$ie",[H.z(a,0)],"$ae")
if(!!a.fixed$length)H.w(P.ak("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.v)(b),++t)a.push(b[t])},
L:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.z(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.cm(a))}},
u:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.n(t,u,H.j(a[u]))
return t.join(b)},
i7:function(a){return this.u(a,"")},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
e7:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.b5(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.b5(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.z(a,0)])
return H.d(a.slice(b,c),[H.z(a,0)])},
gi2:function(a){if(a.length>0)return a[0]
throw H.h(H.kt())},
gc8:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.kt())},
ba:function(a,b,c,d){var u,t,s=H.z(a,0)
H.i(d,"$ie",[s],"$ae")
if(!!a.immutable$list)H.w(P.ak("setRange"))
P.jW(b,c,a.length)
u=c-b
if(u===0)return
P.jV(0,"skipCount")
H.i(d,"$ib",[s],"$ab")
s=J.jv(d)
if(u>s.gk(d))throw H.h(H.lW())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
bt:function(a,b){var u=H.z(a,0)
H.l(b,{func:1,ret:P.p,args:[u,u]})
if(!!a.immutable$list)H.w(P.ak("sort"))
H.dM(a,0,a.length-1,b,u)},
ae:function(a,b){var u
for(u=0;u<a.length;++u)if(J.K(a[u],b))return!0
return!1},
i:function(a){return P.jP(a,"[","]")},
gR:function(a){return new J.ao(a,a.length,[H.z(a,0)])},
gJ:function(a){return H.cA(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.w(P.ak("set length"))
if(b<0)throw H.h(P.b5(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.h(H.c8(a,b))
return a[b]},
n:function(a,b,c){H.D(c,H.z(a,0))
if(!!a.immutable$list)H.w(P.ak("indexed set"))
if(b>=a.length||b<0)throw H.h(H.c8(a,b))
a[b]=c},
m:function(a,b){var u,t=[H.z(a,0)]
H.i(b,"$ib",t,"$ab")
u=C.d.m(a.length,b.gk(b))
t=H.d([],t)
this.sk(t,u)
this.ba(t,0,a.length,a)
this.ba(t,a.length,u,b)
return t},
$ie:1,
$ib:1}
J.jR.prototype={}
J.ao.prototype={
gK:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.h(H.v(s))
u=t.c
if(u>=r){t.scQ(null)
return!1}t.scQ(s[u]);++t.c
return!0},
scQ:function(a){this.d=H.D(a,H.z(this,0))},
$ib_:1}
J.bB.prototype={
hS:function(a,b){var u
H.lj(b)
if(typeof b!=="number")throw H.h(H.aF(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbm(b)
if(this.gbm(a)===u)return 0
if(this.gbm(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbm:function(a){return a===0?1/a<0:a<0},
iE:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.h(P.ak(""+a+".toInt()"))},
c4:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.ak(""+a+".floor()"))},
X:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ak(""+a+".round()"))},
dY:function(a,b){var u
if(b>20)throw H.h(P.b5(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbm(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
m:function(a,b){if(typeof b!=="number")throw H.h(H.aF(b))
return a+b},
q:function(a,b){if(typeof b!=="number")throw H.h(H.aF(b))
return a-b},
w:function(a,b){if(typeof b!=="number")throw H.h(H.aF(b))
return a*b},
e2:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eb:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.da(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.da(a,b)},
da:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.ak("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
bh:function(a,b){var u
if(a>0)u=this.hp(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hp:function(a,b){return b>31?0:a>>>b},
aC:function(a,b){if(typeof b!=="number")throw H.h(H.aF(b))
return a>b},
$iy:1,
$iaa:1}
J.dk.prototype={$ip:1}
J.dj.prototype={}
J.bC.prototype={
bU:function(a,b){if(b<0)throw H.h(H.c8(a,b))
if(b>=a.length)H.w(H.c8(a,b))
return a.charCodeAt(b)},
be:function(a,b){if(b>=a.length)throw H.h(H.c8(a,b))
return a.charCodeAt(b)},
m:function(a,b){if(typeof b!=="string")throw H.h(P.jH(b,null,null))
return a+b},
cu:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.dG(b,null))
if(b>c)throw H.h(P.dG(b,null))
if(c>a.length)throw H.h(P.dG(c,null))
return a.substring(b,c)},
aP:function(a,b){return this.cu(a,b,null)},
w:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.A)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ah:function(a,b){var u=b-a.length
if(u<=0)return a
return this.w(" ",u)+a},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ikD:1,
$io:1}
H.a4.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.e.bU(this.a,b)},
$ae_:function(){return[P.p]},
$au:function(){return[P.p]},
$ae:function(){return[P.p]},
$ab:function(){return[P.p]}}
H.fs.prototype={}
H.dr.prototype={
gK:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=J.jv(s),q=r.gk(s)
if(t.b!==q)throw H.h(P.cm(s))
u=t.c
if(u>=q){t.saS(null)
return!1}t.saS(r.H(s,u));++t.c
return!0},
saS:function(a){this.d=H.D(a,H.z(this,0))},
$ib_:1}
H.fW.prototype={
gR:function(a){return new H.fX(J.cf(this.a),this.b,this.$ti)},
gk:function(a){return J.cg(this.a)},
H:function(a,b){return this.b.$1(J.kk(this.a,b))},
$ae:function(a,b){return[b]}}
H.fX.prototype={
C:function(){var u=this,t=u.b
if(t.C()){u.saS(u.c.$1(t.gK(t)))
return!0}u.saS(null)
return!1},
gK:function(a){return this.a},
saS:function(a){this.a=H.D(a,H.z(this,1))},
$ab_:function(a,b){return[b]}}
H.iJ.prototype={
gR:function(a){return new H.iK(J.cf(this.a),this.b,this.$ti)}}
H.iK.prototype={
C:function(){var u,t
for(u=this.a,t=this.b;u.C();)if(H.C(t.$1(u.gK(u))))return!0
return!1},
gK:function(a){var u=this.a
return u.gK(u)}}
H.bT.prototype={}
H.e_.prototype={}
H.dZ.prototype={}
H.ib.prototype={
ag:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fL.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.j(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.j(t.a)+")"
return s+r+"' on '"+u+"' ("+H.j(t.a)+")"}}
H.io.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jF.prototype={
$1:function(a){if(!!J.W(a).$ibv)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:26}
H.eA.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaq:1}
H.ck.prototype={
i:function(a){return"Closure '"+H.bX(this).trim()+"'"},
$ijO:1,
giM:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hZ.prototype={}
H.hR.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cd(u)+"'"}}
H.ch.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.ch))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.cA(this.a)
else u=typeof t!=="object"?J.bP(t):H.cA(t)
return(u^H.cA(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bX(u)+"'")}}
H.id.prototype={
i:function(a){return this.a}}
H.fb.prototype={
i:function(a){return this.a}}
H.hE.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.iL.prototype={
i:function(a){return"Assertion failed: "+P.dg(this.a)}}
H.Z.prototype={
gk:function(a){return this.a},
gax:function(a){return new H.dq(this,[H.z(this,0)])},
dn:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cN(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cN(t,b)}else return s.i5(b)},
i5:function(a){var u=this.d
if(u==null)return!1
return this.c6(this.bz(u,J.bP(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bf(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bf(r,b)
s=t==null?null:t.b
return s}else return q.i6(b)},
i6:function(a){var u,t,s=this.d
if(s==null)return
u=this.bz(s,J.bP(a)&0x3ffffff)
t=this.c6(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s,r,q,p,o=this
H.D(b,H.z(o,0))
H.D(c,H.z(o,1))
if(typeof b==="string"){u=o.b
o.cF(u==null?o.b=o.bD():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cF(t==null?o.c=o.bD():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bD()
r=J.bP(b)&0x3ffffff
q=o.bz(s,r)
if(q==null)o.bK(s,r,[o.bE(b,c)])
else{p=o.c6(q,b)
if(p>=0)q[p].b=c
else q.push(o.bE(b,c))}}},
L:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.z(s,0),H.z(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.h(P.cm(s))
u=u.c}},
cF:function(a,b,c){var u,t=this
H.D(b,H.z(t,0))
H.D(c,H.z(t,1))
u=t.bf(a,b)
if(u==null)t.bK(a,b,t.bE(b,c))
else u.b=c},
bE:function(a,b){var u=this,t=new H.fP(H.D(a,H.z(u,0)),H.D(b,H.z(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
c6:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.K(a[t].a,b))return t
return-1},
i:function(a){return P.kw(this)},
bf:function(a,b){return a[b]},
bz:function(a,b){return a[b]},
bK:function(a,b,c){a[b]=c},
eF:function(a,b){delete a[b]},
cN:function(a,b){return this.bf(a,b)!=null},
bD:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bK(t,u,t)
this.eF(t,u)
return t}}
H.fP.prototype={}
H.dq.prototype={
gk:function(a){return this.a.a},
gR:function(a){var u=this.a,t=new H.fQ(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fQ.prototype={
gK:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.cm(t))
else{t=u.c
if(t==null){u.scE(null)
return!1}else{u.scE(t.a)
u.c=u.c.c
return!0}}},
scE:function(a){this.d=H.D(a,H.z(this,0))},
$ib_:1}
H.jw.prototype={
$1:function(a){return this.a(a)},
$S:26}
H.jx.prototype={
$2:function(a,b){return this.a(a,b)},
$S:31}
H.jy.prototype={
$1:function(a){return this.a(H.Q(a))},
$S:28}
H.fK.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikD:1}
H.cx.prototype={$inR:1}
H.dx.prototype={
gk:function(a){return a.length},
$iI:1,
$aI:function(){}}
H.cw.prototype={
j:function(a,b){H.bL(b,a,a.length)
return a[b]},
$abT:function(){return[P.y]},
$au:function(){return[P.y]},
$ie:1,
$ae:function(){return[P.y]},
$ib:1,
$ab:function(){return[P.y]}}
H.dy.prototype={
$abT:function(){return[P.p]},
$au:function(){return[P.p]},
$ie:1,
$ae:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.hh.prototype={
j:function(a,b){H.bL(b,a,a.length)
return a[b]}}
H.hi.prototype={
j:function(a,b){H.bL(b,a,a.length)
return a[b]}}
H.hj.prototype={
j:function(a,b){H.bL(b,a,a.length)
return a[b]}}
H.hk.prototype={
j:function(a,b){H.bL(b,a,a.length)
return a[b]}}
H.hl.prototype={
j:function(a,b){H.bL(b,a,a.length)
return a[b]}}
H.dz.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bL(b,a,a.length)
return a[b]},
$inS:1}
H.hm.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bL(b,a,a.length)
return a[b]}}
H.cO.prototype={}
H.cP.prototype={}
H.cQ.prototype={}
H.cR.prototype={}
P.iN.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:14}
P.iM.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:32}
P.iO.prototype={
$0:function(){this.a.$0()},
$S:1}
P.iP.prototype={
$0:function(){this.a.$0()},
$S:1}
P.eG.prototype={
eo:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c7(new P.ji(this,b),0),a)
else throw H.h(P.ak("`setTimeout()` not found."))},
ep:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c7(new P.jh(this,a,Date.now(),b),0),a)
else throw H.h(P.ak("Periodic timer."))},
$iba:1}
P.ji.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jh.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.eb(u,q)}s.c=r
t.d.$1(s)},
$S:1}
P.be.prototype={
ia:function(a){if(this.c!==6)return!0
return this.b.b.cm(H.l(this.d,{func:1,ret:P.a2,args:[P.N]}),a.a,P.a2,P.N)},
i4:function(a){var u=this.e,t=P.N,s={futureOr:1,type:H.z(this,1)},r=this.b.b
if(H.eW(u,{func:1,args:[P.N,P.aq]}))return H.kb(r.iy(u,a.a,a.b,null,t,P.aq),s)
else return H.kb(r.cm(H.l(u,{func:1,args:[P.N]}),a.a,null,t),s)}}
P.aD.prototype={
dX:function(a,b,c){var u,t,s,r=H.z(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.V
if(u!==C.f){u.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.mY(b,u)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aD($.V,[c])
s=b==null?1:3
this.cG(new P.be(t,s,a,b,[r,c]))
return t},
iD:function(a,b){return this.dX(a,null,b)},
cG:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$ibe")
t.c=a}else{if(s===2){u=H.k(t.c,"$iaD")
s=u.a
if(s<4){u.cG(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.jr(null,null,s,H.l(new P.iW(t,a),{func:1,ret:-1}))}},
d1:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$ibe")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iaD")
u=q.a
if(u<4){q.d1(a)
return}p.a=u
p.c=q.c}o.a=p.bg(a)
u=p.b
u.toString
P.jr(null,null,u,H.l(new P.j_(o,p),{func:1,ret:-1}))}},
bH:function(){var u=H.k(this.c,"$ibe")
this.c=null
return this.bg(u)},
bg:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cJ:function(a){var u,t,s=this,r=H.z(s,0)
H.kb(a,{futureOr:1,type:r})
u=s.$ti
if(H.k8(a,"$icq",u,"$acq"))if(H.k8(a,"$iaD",u,null))P.l_(a,s)
else P.mv(a,s)
else{t=s.bH()
H.D(a,r)
s.a=4
s.c=a
P.cM(s,t)}},
cK:function(a,b){var u,t=this
H.k(b,"$iaq")
u=t.bH()
t.a=8
t.c=new P.al(a,b)
P.cM(t,u)},
$icq:1}
P.iW.prototype={
$0:function(){P.cM(this.a,this.b)},
$S:1}
P.j_.prototype={
$0:function(){P.cM(this.b,this.a.a)},
$S:1}
P.iX.prototype={
$1:function(a){var u=this.a
u.a=0
u.cJ(a)},
$S:14}
P.iY.prototype={
$2:function(a,b){H.k(b,"$iaq")
this.a.cK(a,b)},
$1:function(a){return this.$2(a,null)},
$S:43}
P.iZ.prototype={
$0:function(){this.a.cK(this.b,this.c)},
$S:1}
P.j2.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dV(H.l(s.d,{func:1}),null)}catch(r){u=H.bO(r)
t=H.cb(r)
if(o.d){s=H.k(o.a.a.c,"$ial").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$ial")
else q.b=new P.al(u,t)
q.a=!0
return}if(!!J.W(n).$icq){if(n instanceof P.aD&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$ial")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.iD(new P.j3(p),null)
s.a=!1}},
$S:3}
P.j3.prototype={
$1:function(a){return this.a},
$S:34}
P.j1.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.z(s,0)
q=H.D(n.c,r)
p=H.z(s,1)
n.a.b=s.b.b.cm(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.bO(o)
t=H.cb(o)
s=n.a
s.b=new P.al(u,t)
s.a=!0}},
$S:3}
P.j0.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$ial")
r=m.c
if(H.C(r.ia(u))&&r.e!=null){q=m.b
q.b=r.i4(u)
q.a=!1}}catch(p){t=H.bO(p)
s=H.cb(p)
r=H.k(m.a.a.c,"$ial")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.al(t,s)
n.a=!0}},
$S:3}
P.e4.prototype={}
P.hU.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.aD($.V,[P.p])
r.a=0
u=H.z(s,0)
t=H.l(new P.hW(r,s),{func:1,ret:-1,args:[u]})
H.l(new P.hX(r,q),{func:1,ret:-1})
W.a9(s.a,s.b,t,!1,u)
return q}}
P.hW.prototype={
$1:function(a){H.D(a,H.z(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.M,args:[H.z(this.b,0)]}}}
P.hX.prototype={
$0:function(){this.b.cJ(this.a.a)},
$S:1}
P.cF.prototype={}
P.hV.prototype={}
P.ba.prototype={}
P.al.prototype={
i:function(a){return H.j(this.a)},
$ibv:1}
P.jk.prototype={$io4:1}
P.jq.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dC():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.i(0)
throw u},
$S:1}
P.ja.prototype={
iz:function(a){var u,t,s,r=null
H.l(a,{func:1,ret:-1})
try{if(C.f===$.V){a.$0()
return}P.l3(r,r,this,a,-1)}catch(s){u=H.bO(s)
t=H.cb(s)
P.jp(r,r,this,u,H.k(t,"$iaq"))}},
iA:function(a,b,c){var u,t,s,r=null
H.l(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.f===$.V){a.$1(b)
return}P.l4(r,r,this,a,b,-1,c)}catch(s){u=H.bO(s)
t=H.cb(s)
P.jp(r,r,this,u,H.k(t,"$iaq"))}},
hQ:function(a,b){return new P.jc(this,H.l(a,{func:1,ret:b}),b)},
bQ:function(a){return new P.jb(this,H.l(a,{func:1,ret:-1}))},
df:function(a,b){return new P.jd(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
dV:function(a,b){H.l(a,{func:1,ret:b})
if($.V===C.f)return a.$0()
return P.l3(null,null,this,a,b)},
cm:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.V===C.f)return a.$1(b)
return P.l4(null,null,this,a,b,c,d)},
iy:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.V===C.f)return a.$2(b,c)
return P.mZ(null,null,this,a,b,c,d,e,f)}}
P.jc.prototype={
$0:function(){return this.a.dV(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jb.prototype={
$0:function(){return this.a.iz(this.b)},
$S:3}
P.jd.prototype={
$1:function(a){var u=this.c
return this.a.iA(this.b,H.D(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.j7.prototype={
gR:function(a){return P.l1(this,this.r,H.z(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.D(b,H.z(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cH(u==null?s.b=P.k3():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cH(t==null?s.c=P.k3():t,b)}else return s.er(0,b)},
er:function(a,b){var u,t,s,r=this
H.D(b,H.z(r,0))
u=r.d
if(u==null)u=r.d=P.k3()
t=r.cL(b)
s=u[t]
if(s==null)u[t]=[r.bv(b)]
else{if(r.cS(s,b)>=0)return!1
s.push(r.bv(b))}return!0},
F:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hc(this.c,b)
else return this.hb(0,b)},
hb:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.eT(r,b)
t=s.cS(u,b)
if(t<0)return!1
s.dc(u.splice(t,1)[0])
return!0},
cH:function(a,b){H.D(b,H.z(this,0))
if(H.k(a[b],"$icN")!=null)return!1
a[b]=this.bv(b)
return!0},
hc:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$icN")
if(u==null)return!1
this.dc(u)
delete a[b]
return!0},
cU:function(){this.r=1073741823&this.r+1},
bv:function(a){var u,t=this,s=new P.cN(H.D(a,H.z(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cU()
return s},
dc:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cU()},
cL:function(a){return J.bP(a)&1073741823},
eT:function(a,b){return a[this.cL(b)]},
cS:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.K(a[t].a,b))return t
return-1}}
P.cN.prototype={}
P.j8.prototype={
gK:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.cm(t))
else{t=u.c
if(t==null){u.scI(null)
return!1}else{u.scI(H.D(t.a,H.z(u,0)))
u.c=u.c.b
return!0}}},
scI:function(a){this.d=H.D(a,H.z(this,0))},
$ib_:1}
P.fR.prototype={$ie:1,$ib:1}
P.u.prototype={
gR:function(a){return new H.dr(a,this.gk(a),[H.ca(this,a,"u",0)])},
H:function(a,b){return this.j(a,b)},
iG:function(a,b){var u,t=this,s=H.d([],[H.ca(t,a,"u",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.n(s,u,t.j(a,u))
return s},
iF:function(a){return this.iG(a,!0)},
m:function(a,b){var u,t=this,s=[H.ca(t,a,"u",0)]
H.i(b,"$ib",s,"$ab")
u=H.d([],s)
C.a.sk(u,C.d.m(t.gk(a),b.gk(b)))
C.a.ba(u,0,t.gk(a),a)
C.a.ba(u,t.gk(a),u.length,b)
return u},
i:function(a){return P.jP(a,"[","]")}}
P.fU.prototype={}
P.fV.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.j(a)
t.a=u+": "
t.a+=H.j(b)},
$S:21}
P.ah.prototype={
L:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.ca(s,a,"ah",0),H.ca(s,a,"ah",1)]})
for(u=J.cf(s.gax(a));u.C();){t=u.gK(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.cg(this.gax(a))},
i:function(a){return P.kw(a)},
$iE:1}
P.je.prototype={
i:function(a){return P.jP(this,"{","}")},
H:function(a,b){var u,t,s,r=this
P.jV(b,"index")
for(u=P.l1(r,r.r,H.z(r,0)),t=0;u.C();){s=u.d
if(b===t)return s;++t}throw H.h(P.T(b,r,"index",null,t))},
$ie:1,
$ikK:1}
P.ej.prototype={}
P.cl.prototype={}
P.d8.prototype={}
P.ft.prototype={
$acl:function(){return[P.o,[P.b,P.p]]}}
P.ir.prototype={}
P.is.prototype={
hT:function(a){var u,t,s=P.jW(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jj(u)
if(t.eR(a,0,s)!==s)t.dd(C.e.bU(a,s-1),0)
return new Uint8Array(u.subarray(0,H.mA(0,t.b,u.length)))},
$ad8:function(){return[P.o,[P.b,P.p]]}}
P.jj.prototype={
dd:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eR:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.e.bU(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.e.be(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dd(r,C.e.be(a,p)))s=p}else if(r<=2047){q=n.b
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
P.a2.prototype={}
P.ax.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.ax&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.d.bh(u,30))&1073741823},
i:function(a){var u=this,t=P.lR(H.mc(u)),s=P.da(H.ma(u)),r=P.da(H.m6(u)),q=P.da(H.m7(u)),p=P.da(H.m9(u)),o=P.da(H.mb(u)),n=P.lS(H.m8(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.y.prototype={}
P.aX.prototype={
m:function(a,b){return new P.aX(C.d.m(this.a,b.gcR()))},
q:function(a,b){return new P.aX(C.d.q(this.a,b.gcR()))},
aC:function(a,b){return C.d.aC(this.a,b.gcR())},
p:function(a,b){if(b==null)return!1
return b instanceof P.aX&&this.a===b.a},
gJ:function(a){return C.d.gJ(this.a)},
i:function(a){var u,t,s,r=new P.fr(),q=this.a
if(q<0)return"-"+new P.aX(0-q).i(0)
u=r.$1(C.d.a7(q,6e7)%60)
t=r.$1(C.d.a7(q,1e6)%60)
s=new P.fq().$1(q%1e6)
return""+C.d.a7(q,36e8)+":"+H.j(u)+":"+H.j(t)+"."+H.j(s)}}
P.fq.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:13}
P.fr.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:13}
P.bv.prototype={}
P.f2.prototype={
i:function(a){return"Assertion failed"}}
P.dC.prototype={
i:function(a){return"Throw of null."}}
P.aT.prototype={
gbx:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbw:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbx()+o+u
if(!q.a)return t
s=q.gbw()
r=P.dg(q.b)
return t+s+": "+r}}
P.bY.prototype={
gbx:function(){return"RangeError"},
gbw:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.j(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.j(s)
else if(t>s)u=": Not in range "+H.j(s)+".."+H.j(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.j(s)}return u}}
P.fI.prototype={
gbx:function(){return"RangeError"},
gbw:function(){var u,t=H.X(this.b)
if(typeof t!=="number")return t.aj()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.j(u)},
gk:function(a){return this.f}}
P.ip.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.im.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.dP.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ff.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dg(u)+"."}}
P.hs.prototype={
i:function(a){return"Out of Memory"},
$ibv:1}
P.dO.prototype={
i:function(a){return"Stack Overflow"},
$ibv:1}
P.fk.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ec.prototype={
i:function(a){return"Exception: "+this.a}}
P.fE.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.e.cu(s,0,75)+"...":s
return t+"\n"+r}}
P.p.prototype={}
P.e.prototype={
gk:function(a){var u,t=this.gR(this)
for(u=0;t.C();)++u
return u},
H:function(a,b){var u,t,s
P.jV(b,"index")
for(u=this.gR(this),t=0;u.C();){s=u.gK(u)
if(b===t)return s;++t}throw H.h(P.T(b,this,"index",null,t))},
i:function(a){return P.lV(this,"(",")")}}
P.b_.prototype={}
P.b.prototype={$ie:1}
P.E.prototype={}
P.M.prototype={
gJ:function(a){return P.N.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.N.prototype={constructor:P.N,$iN:1,
p:function(a,b){return this===b},
gJ:function(a){return H.cA(this)},
i:function(a){return"Instance of '"+H.bX(this)+"'"},
toString:function(){return this.i(this)}}
P.aq.prototype={}
P.o.prototype={$ikD:1}
P.bG.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.r.prototype={}
W.eZ.prototype={
gk:function(a){return a.length}}
W.f0.prototype={
i:function(a){return String(a)}}
W.f1.prototype={
i:function(a){return String(a)}}
W.d2.prototype={}
W.bS.prototype={
cq:function(a,b,c){if(c!=null)return a.getContext(b,P.n6(c))
return a.getContext(b)},
e1:function(a,b){return this.cq(a,b,null)},
$ibS:1}
W.cj.prototype={$icj:1}
W.bs.prototype={
gk:function(a){return a.length}}
W.cn.prototype={$icn:1}
W.fg.prototype={
gk:function(a){return a.length}}
W.O.prototype={$iO:1}
W.co.prototype={
gk:function(a){return a.length}}
W.fh.prototype={}
W.aV.prototype={}
W.aW.prototype={}
W.fi.prototype={
gk:function(a){return a.length}}
W.fj.prototype={
gk:function(a){return a.length}}
W.fl.prototype={
gk:function(a){return a.length}}
W.dc.prototype={$idc:1}
W.fn.prototype={
i:function(a){return String(a)}}
W.dd.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[[P.ap,P.aa]]},
$au:function(){return[[P.ap,P.aa]]},
$ie:1,
$ae:function(){return[[P.ap,P.aa]]},
$ib:1,
$ab:function(){return[[P.ap,P.aa]]},
$aB:function(){return[[P.ap,P.aa]]}}
W.de.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gai(a))+" x "+H.j(this.gaf(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.W(b)
if(!u.$iap)return!1
return a.left===u.gbn(b)&&a.top===u.gbp(b)&&this.gai(a)===u.gai(b)&&this.gaf(a)===u.gaf(b)},
gJ:function(a){return W.l0(C.b.gJ(a.left),C.b.gJ(a.top),C.b.gJ(this.gai(a)),C.b.gJ(this.gaf(a)))},
gdh:function(a){return a.bottom},
gaf:function(a){return a.height},
gbn:function(a){return a.left},
gcl:function(a){return a.right},
gbp:function(a){return a.top},
gai:function(a){return a.width},
$iap:1,
$aap:function(){return[P.aa]}}
W.fo.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[P.o]},
$au:function(){return[P.o]},
$ie:1,
$ae:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$aB:function(){return[P.o]}}
W.fp.prototype={
gk:function(a){return a.length}}
W.iR.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return H.k(u[b],"$ia5")},
h:function(a,b){this.a.appendChild(b)
return b},
gR:function(a){var u=this.iF(this)
return new J.ao(u,u.length,[H.z(u,0)])},
$au:function(){return[W.a5]},
$ae:function(){return[W.a5]},
$ab:function(){return[W.a5]}}
W.a5.prototype={
gdk:function(a){return new W.iR(a,a.children)},
gdl:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.aj()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aj()
if(r<0)r=-r*0
return new P.ap(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
$ia5:1}
W.n.prototype={$in:1}
W.f.prototype={
hI:function(a,b,c,d){H.l(c,{func:1,args:[W.n]})
if(c!=null)this.es(a,b,c,!1)},
es:function(a,b,c,d){return a.addEventListener(b,H.c7(H.l(c,{func:1,args:[W.n]}),1),!1)},
$if:1}
W.aY.prototype={$iaY:1}
W.fy.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aY]},
$au:function(){return[W.aY]},
$ie:1,
$ae:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aB:function(){return[W.aY]}}
W.fz.prototype={
gk:function(a){return a.length}}
W.fD.prototype={
gk:function(a){return a.length}}
W.aZ.prototype={$iaZ:1}
W.fG.prototype={
gk:function(a){return a.length}}
W.bU.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.J]},
$au:function(){return[W.J]},
$ie:1,
$ae:function(){return[W.J]},
$ib:1,
$ab:function(){return[W.J]},
$ibU:1,
$aB:function(){return[W.J]}}
W.bx.prototype={$ibx:1,
gdr:function(a){return a.data}}
W.cs.prototype={$ics:1}
W.b0.prototype={$ib0:1}
W.fS.prototype={
i:function(a){return String(a)}}
W.ha.prototype={
gk:function(a){return a.length}}
W.hb.prototype={
j:function(a,b){return P.bq(a.get(H.Q(b)))},
L:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
gax:function(a){var u=H.d([],[P.o])
this.L(a,new W.hc(u))
return u},
gk:function(a){return a.size},
$aah:function(){return[P.o,null]},
$iE:1,
$aE:function(){return[P.o,null]}}
W.hc.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hd.prototype={
j:function(a,b){return P.bq(a.get(H.Q(b)))},
L:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
gax:function(a){var u=H.d([],[P.o])
this.L(a,new W.he(u))
return u},
gk:function(a){return a.size},
$aah:function(){return[P.o,null]},
$iE:1,
$aE:function(){return[P.o,null]}}
W.he.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.b3.prototype={$ib3:1}
W.hf.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b3]},
$au:function(){return[W.b3]},
$ie:1,
$ae:function(){return[W.b3]},
$ib:1,
$ab:function(){return[W.b3]},
$aB:function(){return[W.b3]}}
W.ae.prototype={$iae:1}
W.iQ.prototype={
gR:function(a){var u=this.a.childNodes
return new W.dh(u,u.length,[H.ca(C.J,u,"B",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$au:function(){return[W.J]},
$ae:function(){return[W.J]},
$ab:function(){return[W.J]}}
W.J.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.e8(a):u},
$iJ:1}
W.cy.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.J]},
$au:function(){return[W.J]},
$ie:1,
$ae:function(){return[W.J]},
$ib:1,
$ab:function(){return[W.J]},
$aB:function(){return[W.J]}}
W.b4.prototype={$ib4:1,
gk:function(a){return a.length}}
W.hu.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b4]},
$au:function(){return[W.b4]},
$ie:1,
$ae:function(){return[W.b4]},
$ib:1,
$ab:function(){return[W.b4]},
$aB:function(){return[W.b4]}}
W.hC.prototype={
j:function(a,b){return P.bq(a.get(H.Q(b)))},
L:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
gax:function(a){var u=H.d([],[P.o])
this.L(a,new W.hD(u))
return u},
gk:function(a){return a.size},
$aah:function(){return[P.o,null]},
$iE:1,
$aE:function(){return[P.o,null]}}
W.hD.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hF.prototype={
gk:function(a){return a.length}}
W.b6.prototype={$ib6:1}
W.hO.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b6]},
$au:function(){return[W.b6]},
$ie:1,
$ae:function(){return[W.b6]},
$ib:1,
$ab:function(){return[W.b6]},
$aB:function(){return[W.b6]}}
W.b7.prototype={$ib7:1}
W.hP.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b7]},
$au:function(){return[W.b7]},
$ie:1,
$ae:function(){return[W.b7]},
$ib:1,
$ab:function(){return[W.b7]},
$aB:function(){return[W.b7]}}
W.b8.prototype={$ib8:1,
gk:function(a){return a.length}}
W.hS.prototype={
j:function(a,b){return a.getItem(H.Q(b))},
L:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,P.o]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gax:function(a){var u=H.d([],[P.o])
this.L(a,new W.hT(u))
return u},
gk:function(a){return a.length},
$aah:function(){return[P.o,P.o]},
$iE:1,
$aE:function(){return[P.o,P.o]}}
W.hT.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:41}
W.aJ.prototype={$iaJ:1}
W.b9.prototype={$ib9:1}
W.aK.prototype={$iaK:1}
W.i_.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aK]},
$au:function(){return[W.aK]},
$ie:1,
$ae:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aB:function(){return[W.aK]}}
W.i0.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b9]},
$au:function(){return[W.b9]},
$ie:1,
$ae:function(){return[W.b9]},
$ib:1,
$ab:function(){return[W.b9]},
$aB:function(){return[W.b9]}}
W.i5.prototype={
gk:function(a){return a.length}}
W.bb.prototype={$ibb:1}
W.aN.prototype={$iaN:1}
W.i8.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.bb]},
$au:function(){return[W.bb]},
$ie:1,
$ae:function(){return[W.bb]},
$ib:1,
$ab:function(){return[W.bb]},
$aB:function(){return[W.bb]}}
W.i9.prototype={
gk:function(a){return a.length}}
W.bI.prototype={}
W.iq.prototype={
i:function(a){return String(a)}}
W.iI.prototype={
gk:function(a){return a.length}}
W.bd.prototype={
ghX:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ak("deltaY is not supported"))},
ghW:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ak("deltaX is not supported"))},
$ibd:1}
W.cL.prototype={
hf:function(a,b){return a.requestAnimationFrame(H.c7(H.l(b,{func:1,ret:-1,args:[P.aa]}),1))},
eK:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iS.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.O]},
$au:function(){return[W.O]},
$ie:1,
$ae:function(){return[W.O]},
$ib:1,
$ab:function(){return[W.O]},
$aB:function(){return[W.O]}}
W.e7.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.W(b)
if(!u.$iap)return!1
return a.left===u.gbn(b)&&a.top===u.gbp(b)&&a.width===u.gai(b)&&a.height===u.gaf(b)},
gJ:function(a){return W.l0(C.b.gJ(a.left),C.b.gJ(a.top),C.b.gJ(a.width),C.b.gJ(a.height))},
gaf:function(a){return a.height},
gai:function(a){return a.width}}
W.j4.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aZ]},
$au:function(){return[W.aZ]},
$ie:1,
$ae:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aB:function(){return[W.aZ]}}
W.eo.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.J]},
$au:function(){return[W.J]},
$ie:1,
$ae:function(){return[W.J]},
$ib:1,
$ab:function(){return[W.J]},
$aB:function(){return[W.J]}}
W.jf.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b8]},
$au:function(){return[W.b8]},
$ie:1,
$ae:function(){return[W.b8]},
$ib:1,
$ab:function(){return[W.b8]},
$aB:function(){return[W.b8]}}
W.jg.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aJ]},
$au:function(){return[W.aJ]},
$ie:1,
$ae:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$aB:function(){return[W.aJ]}}
W.iT.prototype={}
W.k2.prototype={}
W.iU.prototype={}
W.iV.prototype={
$1:function(a){return this.a.$1(H.k(a,"$in"))},
$S:40}
W.B.prototype={
gR:function(a){return new W.dh(a,this.gk(a),[H.ca(this,a,"B",0)])}}
W.dh.prototype={
C:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scT(J.eY(u.a,t))
u.c=t
return!0}u.scT(null)
u.c=s
return!1},
gK:function(a){return this.d},
scT:function(a){this.d=H.D(a,H.z(this,0))},
$ib_:1}
W.e6.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.em.prototype={}
W.en.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.cS.prototype={}
W.cT.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.eB.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.cU.prototype={}
W.cV.prototype={}
W.eH.prototype={}
W.eI.prototype={}
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
P.eL.prototype={$ibx:1,
gdr:function(a){return this.a}}
P.js.prototype={
$2:function(a,b){this.a[a]=b},
$S:21}
P.fA.prototype={
gbA:function(){var u=this.b,t=H.aG(u,"u",0),s=W.a5
return new H.fW(new H.iJ(u,H.l(new P.fB(),{func:1,ret:P.a2,args:[t]}),[t]),H.l(new P.fC(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.cg(this.gbA().a)},
j:function(a,b){var u=this.gbA()
return u.b.$1(J.kk(u.a,b))},
gR:function(a){var u=P.kv(this.gbA(),!1,W.a5)
return new J.ao(u,u.length,[H.z(u,0)])},
$au:function(){return[W.a5]},
$ae:function(){return[W.a5]},
$ab:function(){return[W.a5]}}
P.fB.prototype={
$1:function(a){return!!J.W(H.k(a,"$iJ")).$ia5},
$S:36}
P.fC.prototype={
$1:function(a){return H.m(H.k(a,"$iJ"),"$ia5")},
$S:35}
P.j9.prototype={
gcl:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.G(t)
return H.D(u+t,H.z(this,0))},
gdh:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.G(t)
return H.D(u+t,H.z(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.j(u.a)+", "+H.j(u.b)+") "+H.j(u.c)+" x "+H.j(u.d)},
p:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.W(b)
if(!!u.$iap){t=p.a
if(t==u.gbn(b)){s=p.b
if(s==u.gbp(b)){r=p.c
if(typeof t!=="number")return t.m()
if(typeof r!=="number")return H.G(r)
q=H.z(p,0)
if(H.D(t+r,q)===u.gcl(b)){t=p.d
if(typeof s!=="number")return s.m()
if(typeof t!=="number")return H.G(t)
u=H.D(s+t,q)===u.gdh(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t=this,s=t.a,r=J.bP(s),q=t.b,p=J.bP(q),o=t.c
if(typeof s!=="number")return s.m()
if(typeof o!=="number")return H.G(o)
u=H.z(t,0)
o=C.d.gJ(H.D(s+o,u))
s=t.d
if(typeof q!=="number")return q.m()
if(typeof s!=="number")return H.G(s)
u=C.d.gJ(H.D(q+s,u))
return P.mw(P.j6(P.j6(P.j6(P.j6(0,r),p),o),u))}}
P.ap.prototype={
gbn:function(a){return this.a},
gbp:function(a){return this.b},
gai:function(a){return this.c},
gaf:function(a){return this.d}}
P.bi.prototype={$ibi:1}
P.fN.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.j(a,b)},
$au:function(){return[P.bi]},
$ie:1,
$ae:function(){return[P.bi]},
$ib:1,
$ab:function(){return[P.bi]},
$aB:function(){return[P.bi]}}
P.bn.prototype={$ibn:1}
P.hq.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.j(a,b)},
$au:function(){return[P.bn]},
$ie:1,
$ae:function(){return[P.bn]},
$ib:1,
$ab:function(){return[P.bn]},
$aB:function(){return[P.bn]}}
P.hw.prototype={
gk:function(a){return a.length}}
P.hY.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.j(a,b)},
$au:function(){return[P.o]},
$ie:1,
$ae:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$aB:function(){return[P.o]}}
P.q.prototype={
gdk:function(a){return new P.fA(a,new W.iQ(a))}}
P.bp.prototype={$ibp:1}
P.ia.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.j(a,b)},
$au:function(){return[P.bp]},
$ie:1,
$ae:function(){return[P.bp]},
$ib:1,
$ab:function(){return[P.bp]},
$aB:function(){return[P.bp]}}
P.eh.prototype={}
P.ei.prototype={}
P.er.prototype={}
P.es.prototype={}
P.eC.prototype={}
P.eD.prototype={}
P.eJ.prototype={}
P.eK.prototype={}
P.f4.prototype={
gk:function(a){return a.length}}
P.f5.prototype={
j:function(a,b){return P.bq(a.get(H.Q(b)))},
L:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
gax:function(a){var u=H.d([],[P.o])
this.L(a,new P.f6(u))
return u},
gk:function(a){return a.size},
$aah:function(){return[P.o,null]},
$iE:1,
$aE:function(){return[P.o,null]}}
P.f6.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.f7.prototype={
gk:function(a){return a.length}}
P.bQ.prototype={}
P.hr.prototype={
gk:function(a){return a.length}}
P.e5.prototype={}
P.d3.prototype={$id3:1}
P.di.prototype={$idi:1}
P.dF.prototype={$idF:1}
P.dH.prototype={$idH:1}
P.bZ.prototype={
dW:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.W(g)
if(!!u.$ibx&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.n7(g))
return}if(!!u.$ics&&h==null&&t&&!0){this.hw(a,b,c,d,e,f,g)
return}throw H.h(P.lL("Incorrect number or type of arguments"))},
iB:function(a,b,c,d,e,f,g){return this.dW(a,b,c,d,e,f,g,null,null,null)},
hw:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a4:function(a,b,c){return a.uniform1f(b,c)},
aM:function(a,b,c){return a.uniform1i(b,c)},
br:function(a,b,c,d){return a.uniform2f(b,c,d)},
T:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
co:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
dZ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cp:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibZ:1}
P.dI.prototype={$idI:1}
P.dQ.prototype={$idQ:1}
P.dY.prototype={$idY:1}
P.hQ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return P.bq(a.item(b))},
H:function(a,b){return this.j(a,b)},
$au:function(){return[[P.E,,,]]},
$ie:1,
$ae:function(){return[[P.E,,,]]},
$ib:1,
$ab:function(){return[[P.E,,,]]},
$aB:function(){return[[P.E,,,]]}}
P.ey.prototype={}
P.ez.prototype={}
O.S.prototype={
bc:function(a){var u=this
u.seZ(H.d([],[a]))
u.sd_(null)
u.scW(null)
u.sd0(null)},
cr:function(a,b,c){var u=this,t=H.aG(u,"S",0)
H.l(b,{func:1,ret:P.a2,args:[[P.e,t]]})
t={func:1,ret:-1,args:[P.p,[P.e,t]]}
H.l(a,t)
H.l(c,t)
u.sd_(b)
u.scW(a)
u.sd0(c)},
aD:function(a,b){return this.cr(a,null,b)},
cZ:function(a){var u
H.i(a,"$ie",[H.aG(this,"S",0)],"$ae")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cV:function(a,b){var u
H.i(b,"$ie",[H.aG(this,"S",0)],"$ae")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gR:function(a){var u=this.a
return new J.ao(u,u.length,[H.z(u,0)])},
H:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aG(s,"S",0)
H.D(b,r)
r=[r]
if(H.C(s.cZ(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.cV(t,H.d([b],r))}},
bO:function(a,b){var u,t,s=this
H.i(b,"$ie",[H.aG(s,"S",0)],"$ae")
if(H.C(s.cZ(b))){u=s.a
t=u.length
C.a.bO(u,b)
s.cV(t,b)}},
seZ:function(a){this.a=H.i(a,"$ib",[H.aG(this,"S",0)],"$ab")},
sd_:function(a){this.b=H.l(a,{func:1,ret:P.a2,args:[[P.e,H.aG(this,"S",0)]]})},
scW:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.p,[P.e,H.aG(this,"S",0)]]})},
sd0:function(a){H.l(a,{func:1,ret:-1,args:[P.p,[P.e,H.aG(this,"S",0)]]})},
$ie:1}
O.cu.prototype={
gk:function(a){return this.a.length},
gl:function(){var u=this.b
return u==null?this.b=D.H():u},
aE:function(){var u=this.b
if(u!=null)u.B(null)},
ga1:function(a){var u=this.a
if(u.length>0)return C.a.gc8(u)
else return V.b2()},
bo:function(a){var u=this.a
if(a==null)C.a.h(u,V.b2())
else C.a.h(u,a)
this.aE()},
az:function(){var u=this.a
if(u.length>0){u.pop()
this.aE()}},
sbB:function(a){this.a=H.i(a,"$ib",[V.ad],"$ab")}}
E.f9.prototype={}
E.am.prototype={
sbb:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gl().F(0,s.gdR())
u=s.c
if(u!=null)u.gl().h(0,s.gdR())
t=new D.A("shape",r,s.c,[F.dJ])
t.b=!0
s.ay(t)}},
sb5:function(a){var u,t,s=this
if(!J.K(s.r,a)){u=s.r
if(u!=null)u.gl().F(0,s.gdP())
if(a!=null)a.gl().h(0,s.gdP())
s.r=a
t=new D.A("mover",u,a,[U.af])
t.b=!0
s.ay(t)}},
a8:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aN(0,b,s):null
if(!J.K(q,s.x)){u=s.x
s.x=q
t=new D.A("matrix",u,q,[V.ad])
t.b=!0
s.ay(t)}for(r=s.y.a,r=new J.ao(r,r.length,[H.z(r,0)]);r.C();)r.d.a8(0,b)},
a6:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga1(s))
else C.a.h(s.a,r.w(0,s.ga1(s)))
s.aE()
a.cg(t.f)
s=a.dy
u=(s&&C.a).gc8(s)
if(u!=null&&t.d!=null)u.b8(a,t)
for(s=t.y.a,s=new J.ao(s,s.length,[H.z(s,0)]);s.C();)s.d.a6(a)
a.ce()
a.dx.az()},
gl:function(){var u=this.z
return u==null?this.z=D.H():u},
ay:function(a){var u=this.z
if(u!=null)u.B(a)},
a2:function(){return this.ay(null)},
dS:function(a){H.k(a,"$ix")
this.e=null
this.ay(a)},
ik:function(){return this.dS(null)},
dQ:function(a){this.ay(H.k(a,"$ix"))},
ij:function(){return this.dQ(null)},
dO:function(a){this.ay(H.k(a,"$ix"))},
ig:function(){return this.dO(null)},
ie:function(a,b){var u,t,s,r,q,p,o
H.i(b,"$ie",[E.am],"$ae")
for(u=b.length,t=this.gdN(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bw()
o.sa9(null)
o.saH(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sa9(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a2()},
ii:function(a,b){var u,t
H.i(b,"$ie",[E.am],"$ae")
for(u=b.gR(b),t=this.gdN();u.C();)u.gK(u).gl().F(0,t)
this.a2()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seh:function(a,b){this.y=H.i(b,"$iS",[E.am],"$aS")},
$ibV:1}
E.hy.prototype={
ed:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ax(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cu()
t=[V.ad]
u.sbB(H.d([],t))
u.b=null
u.gl().h(0,new E.hz(s))
s.cy=u
u=new O.cu()
u.sbB(H.d([],t))
u.b=null
u.gl().h(0,new E.hA(s))
s.db=u
u=new O.cu()
u.sbB(H.d([],t))
u.b=null
u.gl().h(0,new E.hB(s))
s.dx=u
s.shv(H.d([],[O.bH]))
u=s.dy;(u&&C.a).h(u,null)
s.sho(new H.Z([P.o,A.cD]))},
giu:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga1(s)
u=t.db
u=t.z=s.w(0,u.ga1(u))
s=u}return s},
gcf:function(){var u,t=this,s=t.ch
if(s==null){s=t.giu()
u=t.dx
u=t.ch=s.w(0,u.ga1(u))
s=u}return s},
ge_:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.ga1(s)
u=t.dx
u=t.cx=s.w(0,u.ga1(u))
s=u}return s},
cg:function(a){var u=this.dy,t=a==null?(u&&C.a).gc8(u):a;(u&&C.a).h(u,t)},
ce:function(){var u=this.dy
if(u.length>1)u.pop()},
aV:function(a){var u=a.b
if(u.length===0)throw H.h(P.t("May not cache a shader with no name."))
if(this.fr.dn(0,u))throw H.h(P.t('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.n(0,u,a)},
shv:function(a){this.dy=H.i(a,"$ib",[O.bH],"$ab")},
sho:function(a){this.fr=H.i(a,"$iE",[P.o,A.cD],"$aE")}}
E.hz.prototype={
$1:function(a){var u
H.k(a,"$ix")
u=this.a
u.ch=u.z=null},
$S:11}
E.hA.prototype={
$1:function(a){var u
H.k(a,"$ix")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:11}
E.hB.prototype={
$1:function(a){var u
H.k(a,"$ix")
u=this.a
u.cx=u.ch=null},
$S:11}
E.dU.prototype={
cC:function(a){H.k(a,"$ix")
this.dU()},
cB:function(){return this.cC(null)},
gi3:function(){var u,t=this,s=Date.now(),r=C.d.a7(P.kq(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ax(s,!1)
return u/r},
d3:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.w()
if(typeof r!=="number")return H.G(r)
u=C.b.c4(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.w()
t=C.b.c4(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kP(C.k,s.gix())}},
dU:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.l(new E.i4(this),{func:1,ret:-1,args:[P.aa]})
C.t.eK(u)
C.t.hf(u,W.l7(t,P.aa))}},
iw:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.d3()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ax(r,!1)
s.y=P.kq(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aE()
r=s.db
C.a.sk(r.a,0)
r.aE()
r=s.dx
C.a.sk(r.a,0)
r.aE()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.a6(p.e)}}catch(q){u=H.bO(q)
t=H.cb(q)
P.kg("Error: "+H.j(u))
P.kg("Stack: "+H.j(t))
throw H.h(u)}}}
E.i4.prototype={
$1:function(a){var u
H.lj(a)
u=this.a
if(u.ch){u.ch=!1
u.iw()}},
$S:29}
Z.e3.prototype={$inz:1}
Z.d4.prototype={
I:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.bO(s)
t=P.t('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.j(u))
throw H.h(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.j(u.e)+"]"}}
Z.bK.prototype={$inA:1}
Z.bg.prototype={
a5:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
I:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].I(a)},
a3:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a6:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.o],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aw(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.u(p,", ")+"\nAttrs:   "+C.a.u(r,", ")},
seU:function(a){this.b=H.i(a,"$ib",[Z.by],"$ab")},
$inG:1}
Z.by.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bX(this.c)+"'")+"]"}}
Z.av.prototype={
gct:function(a){var u=this.a,t=(u&$.ag().a)!==0?3:0
if((u&$.aQ().a)!==0)t+=3
if((u&$.aP().a)!==0)t+=3
if((u&$.bf().a)!==0)t+=2
if((u&$.aR().a)!==0)t+=3
if((u&$.d_().a)!==0)t+=3
if((u&$.d0().a)!==0)t+=4
if((u&$.ce().a)!==0)++t
return(u&$.br().a)!==0?t+4:t},
hM:function(a){var u,t=$.ag(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aQ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aP()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bf()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aR()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d_()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d0()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ce()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.br()
if((s&t.a)!==0)if(u===a)return t
return $.lF()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.av))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.o]),t=this.a
if((t&$.ag().a)!==0)C.a.h(u,"Pos")
if((t&$.aQ().a)!==0)C.a.h(u,"Norm")
if((t&$.aP().a)!==0)C.a.h(u,"Binm")
if((t&$.bf().a)!==0)C.a.h(u,"Txt2D")
if((t&$.aR().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d_().a)!==0)C.a.h(u,"Clr3")
if((t&$.d0().a)!==0)C.a.h(u,"Clr4")
if((t&$.ce().a)!==0)C.a.h(u,"Weight")
if((t&$.br().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.u(u,"|")}}
D.fc.prototype={}
D.bw.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.x]}
H.l(b,u)
if(this.a==null)this.sa9(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
F:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[D.x]})
u=s.a
u=u==null?null:C.a.ae(u,b)
if(u===!0){u=s.a
t=(u&&C.a).F(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.ae(u,b)
if(u===!0){u=s.b
t=(u&&C.a).F(u,b)||t}return t},
B:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.L(P.kv(u,!0,{func:1,ret:-1,args:[D.x]}),new D.fv(q))
u=r.b
if(u!=null){r.saH(H.d([],[{func:1,ret:-1,args:[D.x]}]))
C.a.L(u,new D.fw(q))}return!0},
bY:function(){return this.B(null)},
ao:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.B(u)}}},
sa9:function(a){this.a=H.i(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")},
saH:function(a){this.b=H.i(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")}}
D.fv.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:25}
D.fw.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:25}
D.x.prototype={}
D.bz.prototype={}
D.bA.prototype={}
D.A.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.d5.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d5))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.dn.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dn))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.fM.prototype={
iq:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
il:function(a){this.c=a.b
this.d.F(0,a.a)
return!1},
sha:function(a){this.d=H.i(a,"$ikK",[P.p],"$akK")}}
X.ds.prototype={}
X.fT.prototype={
aT:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.w()
u=b.b
t=q.ch
if(typeof u!=="number")return u.w()
s=new V.a3(o.a+n*m,o.b+u*t)
t=q.a.gaK()
r=new X.bD(a,V.bo(),q.x,t,s)
r.b=!0
q.z=new P.ax(p,!1)
q.x=s
return r},
cd:function(a,b){this.r=a.a
return!1},
b7:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.e3()
if(typeof u!=="number")return u.aq()
this.r=(u&~t)>>>0
return!1},
b6:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.aT(a,b))
return!0},
ir:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaK()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.w()
q=a.b
p=o.cy
if(typeof q!=="number")return q.w()
t=new X.cv(new V.U(s*r,q*p),u,t)
t.b=!0
n.B(t)
return!0},
fH:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.ds(c,r.a.gaK(),b)
s.b=!0
t.B(s)
r.y=new P.ax(u,!1)
r.x=V.bo()}}
X.as.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.as))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.C(this.b)?"Alt+":""
return u+(H.C(this.c)?"Shift+":"")}}
X.bD.prototype={}
X.hg.prototype={
by:function(a,b,c){var u=this,t=new P.ax(Date.now(),!1),s=u.a.gaK(),r=new X.bD(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cd:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.B(this.by(a,b,!0))
return!0},
b7:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.e3()
if(typeof t!=="number")return t.aq()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.B(u.by(a,b,!0))
return!0},
b6:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.by(a,b,!1))
return!0},
is:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaK()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.w()
r=a.b
q=p.ch
if(typeof r!=="number")return r.w()
u=new X.cv(new V.U(t*s,r*q),u,b)
u.b=!0
o.B(u)
return!0}}
X.cv.prototype={}
X.hv.prototype={}
X.dW.prototype={}
X.i7.prototype={
aT:function(a,b){var u,t,s,r,q=this
H.i(a,"$ib",[V.a3],"$ab")
u=new P.ax(Date.now(),!1)
t=a.length>0?a[0]:V.bo()
s=q.a.gaK()
r=new X.dW(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
ip:function(a){var u
H.i(a,"$ib",[V.a3],"$ab")
u=this.b
if(u==null)return!1
u.B(this.aT(a,!0))
return!0},
im:function(a){var u
H.i(a,"$ib",[V.a3],"$ab")
u=this.c
if(u==null)return!1
u.B(this.aT(a,!0))
return!0},
io:function(a){var u
H.i(a,"$ib",[V.a3],"$ab")
u=this.d
if(u==null)return!1
u.B(this.aT(a,!1))
return!0}}
X.e0.prototype={
gaK:function(){var u=this.a,t=C.h.gdl(u).c
t.toString
u=C.h.gdl(u).d
u.toString
return V.cB(0,0,t,u)},
cO:function(a){var u=a.keyCode,t=H.C(a.ctrlKey)||H.C(a.metaKey)
return new X.dn(u,new X.as(t,a.altKey,a.shiftKey))},
aI:function(a){var u=this.b,t=H.C(a.ctrlKey)||H.C(a.metaKey)
u.c=new X.as(t,a.altKey,a.shiftKey)},
bL:function(a){var u=this.b,t=H.C(a.ctrlKey)||H.C(a.metaKey)
u.c=new X.as(t,a.altKey,a.shiftKey)},
av:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.q()
u=t.top
if(typeof r!=="number")return r.q()
return new V.a3(s-q,r-u)},
aU:function(a){return new V.U(a.movementX,a.movementY)},
bG:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.a3])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
q=C.b.X(r.pageX)
C.b.X(r.pageY)
p=o.left
C.b.X(r.pageX)
C.a.h(n,new V.a3(q-p,C.b.X(r.pageY)-o.top))}return n},
as:function(a){var u=a.buttons,t=H.C(a.ctrlKey)||H.C(a.metaKey)
return new X.d5(u,new X.as(t,a.altKey,a.shiftKey))},
bC:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.q()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.q()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fB:function(a){this.f=!0},
fi:function(a){this.f=!1},
fo:function(a){H.k(a,"$iae")
if(H.C(this.f)&&this.bC(a))a.preventDefault()},
fF:function(a){var u
H.k(a,"$ib0")
if(!H.C(this.f))return
u=this.cO(a)
this.b.iq(u)},
fD:function(a){var u
H.k(a,"$ib0")
if(!H.C(this.f))return
u=this.cO(a)
this.b.il(u)},
fJ:function(a){var u,t,s,r,q=this
H.k(a,"$iae")
u=q.a
u.focus()
q.f=!0
q.aI(a)
if(H.C(q.x)){t=q.as(a)
s=q.aU(a)
if(q.d.cd(t,s))a.preventDefault()
return}if(H.C(q.r)){q.y=a
u.requestPointerLock()
return}t=q.as(a)
r=q.av(a)
if(q.c.cd(t,r))a.preventDefault()},
fN:function(a){var u,t,s,r=this
H.k(a,"$iae")
r.aI(a)
u=r.as(a)
if(H.C(r.x)){t=r.aU(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.av(a)
if(r.c.b7(u,s))a.preventDefault()},
ft:function(a){var u,t,s,r=this
H.k(a,"$iae")
if(!r.bC(a)){r.aI(a)
u=r.as(a)
if(H.C(r.x)){t=r.aU(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.av(a)
if(r.c.b7(u,s))a.preventDefault()}},
fL:function(a){var u,t,s,r=this
H.k(a,"$iae")
r.aI(a)
u=r.as(a)
if(H.C(r.x)){t=r.aU(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.av(a)
if(r.c.b6(u,s))a.preventDefault()},
fq:function(a){var u,t,s,r=this
H.k(a,"$iae")
if(!r.bC(a)){r.aI(a)
u=r.as(a)
if(H.C(r.x)){t=r.aU(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.av(a)
if(r.c.b6(u,s))a.preventDefault()}},
fP:function(a){var u,t,s=this
H.k(a,"$ibd")
s.aI(a)
u=new V.U((a&&C.r).ghW(a),C.r.ghX(a)).v(0,180)
if(H.C(s.x)){if(s.d.ir(u))a.preventDefault()
return}if(H.C(s.r))return
t=s.av(a)
if(s.c.is(u,t))a.preventDefault()},
fR:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.as(s.y)
t=s.av(s.y)
s.d.fH(u,t,r)}},
h6:function(a){var u,t=this
H.k(a,"$iaN")
t.a.focus()
t.f=!0
t.bL(a)
u=t.bG(a)
if(t.e.ip(u))a.preventDefault()},
h2:function(a){var u
H.k(a,"$iaN")
this.bL(a)
u=this.bG(a)
if(this.e.im(u))a.preventDefault()},
h4:function(a){var u
H.k(a,"$iaN")
this.bL(a)
u=this.bG(a)
if(this.e.io(u))a.preventDefault()},
seM:function(a){this.z=H.i(a,"$ib",[[P.cF,P.N]],"$ab")}}
D.bu.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.H():u},
ar:function(a){var u
H.k(a,"$ix")
u=this.r
if(u!=null)u.B(a)},
ej:function(){return this.ar(null)},
$iac:1,
$ibV:1}
D.ac.prototype={$ibV:1}
D.dp.prototype={
gl:function(){var u=this.x
return u==null?this.x=D.H():u},
ar:function(a){var u=this.x
if(u!=null)u.B(a)},
cY:function(a){var u
H.k(a,"$ix")
u=this.y
if(u!=null)u.B(a)},
fG:function(){return this.cY(null)},
fT:function(a){var u,t,s
H.i(a,"$ie",[D.ac],"$ae")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(s==null||this.eC(s))return!1}return!0},
fc:function(a,b){var u,t,s,r,q,p,o,n=D.ac
H.i(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gcX(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=H.k(b[q],"$iac")
if(p instanceof D.bu)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.bw()
o.sa9(null)
o.saH(null)
o.c=null
o.d=0
p.r=o}H.l(t,s)
if(o.a==null)o.sa9(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bz([n])
n.b=!0
this.ar(n)},
fX:function(a,b){var u,t,s,r=D.ac
H.i(b,"$ie",[r],"$ae")
for(u=b.gR(b),t=this.gcX();u.C();){s=u.gK(u)
C.a.F(this.e,s)
s.gl().F(0,t)}r=new D.bA([r])
r.b=!0
this.ar(r)},
eC:function(a){var u=C.a.ae(this.e,a)
return u},
seJ:function(a){this.e=H.i(a,"$ib",[D.bu],"$ab")},
sh7:function(a){this.f=H.i(a,"$ib",[D.dE],"$ab")},
shr:function(a){this.r=H.i(a,"$ib",[D.dN],"$ab")},
$ae:function(){return[D.ac]},
$aS:function(){return[D.ac]}}
D.dE.prototype={$iac:1,$ibV:1}
D.dN.prototype={$iac:1,$ibV:1}
V.Y.prototype={
m:function(a,b){var u=C.b.m(this.a,b.gci()),t=C.b.m(this.b,b.gbs()),s=C.b.m(this.c,b.gbR())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.Y(u,t,s)},
q:function(a,b){var u=C.b.q(this.a,b.gci()),t=C.b.q(this.b,b.gbs()),s=C.b.q(this.c,b.gbR())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.Y(u,t,s)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
V.a0.prototype={
m:function(a,b){var u=this,t=C.b.m(u.a,b.gci()),s=C.b.m(u.b,b.gbs()),r=C.b.m(u.c,b.gbR()),q=C.b.m(u.d,b.ghL(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.a0(t,s,r,q)},
q:function(a,b){var u=this,t=C.b.q(u.a,b.gci()),s=C.b.q(u.b,b.gbs()),r=C.b.q(u.c,b.gbR()),q=C.b.q(u.d,b.ghL(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.a0(t,s,r,q)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+", "+V.P(u.d,3,0)+"]"}}
V.fu.prototype={}
V.ct.prototype={
S:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.y])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ct))return!1
u=b.a
t=$.L().a
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
i:function(a){var u,t,s,r,q=this,p=[P.y],o=V.c9(H.d([q.a,q.d,q.r],p),3,0),n=V.c9(H.d([q.b,q.e,q.x],p),3,0),m=V.c9(H.d([q.c,q.f,q.y],p),3,0)
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
V.ad.prototype={
S:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.y])
return t},
c7:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.L().a)return V.b2()
u=1/b1
t=-n
s=-a0
return V.bl((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
w:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.bl(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bq:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.F(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cn:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a1(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ad))return!1
u=b.a
t=$.L().a
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
i:function(a){return this.M()},
E:function(a){var u,t,s,r,q,p=this,o=[P.y],n=V.c9(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.c9(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.c9(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.c9(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
M:function(){return this.E("")}}
V.a3.prototype={
m:function(a,b){return new V.a3(this.a+b.a,this.b+b.b)},
q:function(a,b){return new V.a3(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}}
V.a1.prototype={
m:function(a,b){return new V.a1(this.a+b.a,this.b+b.b,this.c+b.c)},
q:function(a,b){return new V.a1(this.a-b.a,this.b-b.b,this.c-b.c)},
w:function(a,b){return new V.a1(this.a*b,this.b*b,this.c*b)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
V.aI.prototype={
m:function(a,b){var u=this
return new V.aI(C.b.m(u.a,b.giJ(b)),C.b.m(u.b,b.giK(b)),C.b.m(u.c,b.giL(b)),C.b.m(u.d,b.giI(b)))},
q:function(a,b){var u=this
return new V.aI(C.b.q(u.a,b.giJ(b)),C.b.q(u.b,b.giK(b)),C.b.q(u.c,b.giL(b)),C.b.q(u.d,b.giI(b)))},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aI))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+", "+V.P(u.d,3,0)+"]"}}
V.bF.prototype={
gan:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bF))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+", "+V.P(u.d,3,0)+"]"}}
V.U.prototype={
c9:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.G(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.G(t)
return s*r+u*t},
m:function(a,b){var u,t=this.a,s=b.gbW(b)
if(typeof t!=="number")return t.m()
s=C.b.m(t,s)
t=this.b
u=b.gbX(b)
if(typeof t!=="number")return t.m()
return new V.U(s,C.b.m(t,u))},
q:function(a,b){var u,t=this.a,s=b.gbW(b)
if(typeof t!=="number")return t.q()
s=C.b.q(t,s)
t=this.b
u=b.gbX(b)
if(typeof t!=="number")return t.q()
return new V.U(s,C.b.q(t,u))},
w:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.w()
u=this.b
if(typeof u!=="number")return u.w()
return new V.U(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.L().a){u=$.kV
return u==null?$.kV=new V.U(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.U(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=this.a
s=$.L()
s.toString
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.G(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.G(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}}
V.F.prototype={
c9:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ca:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.F(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aw:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.F(u*t-s*r,s*q-p*t,p*r-u*q)},
m:function(a,b){return new V.F(this.a+b.a,this.b+b.b,this.c+b.c)},
q:function(a,b){return new V.F(this.a-b.a,this.b-b.b,this.c-b.c)},
O:function(a){return new V.F(-this.a,-this.b,-this.c)},
w:function(a,b){return new V.F(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if(Math.abs(b-0)<$.L().a)return V.cK()
return new V.F(this.a/b,this.b/b,this.c/b)},
dI:function(){var u=$.L().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.F))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
U.fe.prototype={
bu:function(a){var u=V.ny(a,this.c,this.b)
return u},
gl:function(){var u=this.y
return u==null?this.y=D.H():u},
P:function(a){var u=this.y
if(u!=null)u.B(a)},
se0:function(a,b){},
sdK:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.L().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bu(u)}s=new D.A("maximumLocation",s,t.b,[P.y])
s.b=!0
t.P(s)}},
sdM:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.L().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bu(u)}s=new D.A("minimumLocation",s,t.c,[P.y])
s.b=!0
t.P(s)}},
saa:function(a,b){var u,t=this
b=t.bu(b)
u=t.d
if(!(Math.abs(u-b)<$.L().a)){t.d=b
u=new D.A("location",u,b,[P.y])
u.b=!0
t.P(u)}},
sdL:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.L().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.A("maximumVelocity",r,a,[P.y])
r.b=!0
s.P(r)}},
sY:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.L().a)){u.f=a
t=new D.A("velocity",t,a,[P.y])
t.b=!0
u.P(t)}},
sdq:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.L().a)){this.x=a
u=new D.A("dampening",u,a,[P.y])
u.b=!0
this.P(u)}},
a8:function(a,b){var u,t,s,r=this,q=r.f,p=$.L().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.saa(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.L().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sY(u)}}}
U.d7.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.H():u},
aN:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d7))return!1
return J.K(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.cr.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.H():u},
P:function(a){var u
H.k(a,"$ix")
u=this.e
if(u!=null)u.B(a)},
al:function(){return this.P(null)},
el:function(a,b){var u,t,s,r,q,p,o,n=U.af
H.i(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gbd(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.gl()
o.toString
H.l(t,s)
if(o.a==null)o.sa9(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bz([n])
n.b=!0
this.P(n)},
fV:function(a,b){var u,t,s=U.af
H.i(b,"$ie",[s],"$ae")
for(u=b.gR(b),t=this.gbd();u.C();)u.gK(u).gl().F(0,t)
s=new D.bA([s])
s.b=!0
this.P(s)},
aN:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.aj()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ao(r,r.length,[H.z(r,0)]),u=null;r.C();){q=r.d
if(q!=null){t=q.aN(0,b,c)
if(t!=null)u=u==null?t:t.w(0,u)}}s.f=u==null?V.b2():u
r=s.e
if(r!=null)r.ao(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cr))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.K(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ae:function(){return[U.af]},
$aS:function(){return[U.af]},
$iaf:1}
U.af.prototype={}
U.e1.prototype={
gl:function(){var u=this.fx
return u==null?this.fx=D.H():u},
P:function(a){var u
H.k(a,"$ix")
u=this.fx
if(u!=null)u.B(a)},
al:function(){return this.P(null)},
bP:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.H():t
u.h(0,s.gf3())
u=s.a.c
t=u.d
u=t==null?u.d=D.H():t
u.h(0,s.gf5())
u=s.a.c
t=u.c
u=t==null?u.c=D.H():t
u.h(0,s.gf7())
u=s.a.d
t=u.f
u=t==null?u.f=D.H():t
u.h(0,s.gf_())
u=s.a.d
t=u.d
u=t==null?u.d=D.H():t
u.h(0,s.gf1())
u=s.a.e
t=u.b
u=t==null?u.b=D.H():t
u.h(0,s.ghC())
u=s.a.e
t=u.d
u=t==null?u.d=D.H():t
u.h(0,s.ghA())
u=s.a.e
t=u.c
u=t==null?u.c=D.H():t
u.h(0,s.ghy())
return!0},
am:function(a){var u=a.a,t=a.b
if(H.C(this.f)){if(typeof u!=="number")return u.O()
u=-u}if(H.C(this.r)){if(typeof t!=="number")return t.O()
t=-t}return new V.U(u,t)},
f4:function(a){var u=this
a=H.m(H.k(a,"$ix"),"$ibD")
if(!J.K(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
f6:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.k(a,"$ix"),"$ibD")
if(!H.C(n.cx))return
if(H.C(n.ch)){u=a.d.q(0,a.y)
u=new V.U(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
n.ch=!1}if(H.C(n.e)){u=a.c
t=a.d.q(0,a.y)
u=n.am(new V.U(t.a,t.b).w(0,2).v(0,u.gan()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.G(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.G(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.q(0,a.y)
r=n.am(new V.U(s.a,s.b).w(0,2).v(0,u.gan()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.G(p)
o=n.cy
if(typeof o!=="number")return H.G(o)
s.saa(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.G(q)
s=n.db
if(typeof s!=="number")return H.G(s)
o.saa(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.q(0,a.z)
n.dx=n.am(new V.U(t.a,t.b).w(0,2).v(0,u.gan()))}n.al()},
f8:function(a){var u,t,s,r=this
H.k(a,"$ix")
if(!H.C(r.cx))return
r.cx=!1
if(H.C(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.G(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.G(u)
s.sY(-t*10*u)
r.al()}},
f0:function(a){var u=this
if(H.m(H.k(a,"$ix"),"$ids").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
f2:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.k(a,"$ix"),"$ibD")
if(!J.K(n.d,a.x.b))return
u=a.c
t=a.d
s=t.q(0,a.y)
r=n.am(new V.U(s.a,s.b).w(0,2).v(0,u.gan()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.G(p)
o=n.cy
if(typeof o!=="number")return H.G(o)
s.saa(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.G(q)
s=n.db
if(typeof s!=="number")return H.G(s)
o.saa(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.q(0,a.z)
n.dx=n.am(new V.U(t.a,t.b).w(0,2).v(0,u.gan()))
n.al()},
hD:function(a){var u=this
H.k(a,"$ix")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hB:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.k(a,"$ix"),"$idW")
if(!H.C(n.cx))return
if(H.C(n.ch)){u=a.d.q(0,a.y)
u=new V.U(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
n.ch=!1}if(H.C(n.e)){u=a.c
t=a.d.q(0,a.y)
u=n.am(new V.U(t.a,t.b).w(0,2).v(0,u.gan()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.G(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.G(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.q(0,a.y)
r=n.am(new V.U(s.a,s.b).w(0,2).v(0,u.gan()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.G(p)
o=n.cy
if(typeof o!=="number")return H.G(o)
s.saa(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.G(q)
s=n.db
if(typeof s!=="number")return H.G(s)
o.saa(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.q(0,a.z)
n.dx=n.am(new V.U(t.a,t.b).w(0,2).v(0,u.gan()))}n.al()},
hz:function(a){var u,t,s,r=this
H.k(a,"$ix")
if(!H.C(r.cx))return
r.cx=!1
if(H.C(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.G(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.G(u)
s.sY(-t*10*u)
r.al()}},
aN:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.aj()
if(q<p){r.dy=p
u=b.y
r.c.a8(0,u)
r.b.a8(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.bl(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.w(0,V.bl(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iaf:1}
U.e2.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.H():u},
P:function(a){var u=this.r
if(u!=null)u.B(a)},
bP:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.H():t
t=r.gf9()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.H():s).h(0,t)
return!0},
fa:function(a){var u,t,s,r,q=this
H.k(a,"$ix")
if(!J.K(q.b,q.a.b.c))return
H.m(a,"$icv")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.w()
r=u+t*s
if(u!==r){q.d=r
u=new D.A("zoom",u,r,[P.y])
u.b=!0
q.P(u)}},
aN:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.kz(u,u,u)}return t.f},
$iaf:1}
M.d6.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.H():u},
V:function(a){var u
H.k(a,"$ix")
u=this.r
if(u!=null)u.B(a)},
aR:function(){return this.V(null)},
fZ:function(a,b){var u,t,s,r,q,p,o,n=M.at
H.i(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gU(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.gl()
o.toString
H.l(t,s)
if(o.a==null)o.sa9(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bz([n])
n.b=!0
this.V(n)},
h0:function(a,b){var u,t,s=M.at
H.i(b,"$ie",[s],"$ae")
for(u=b.gR(b),t=this.gU();u.C();)u.gK(u).gl().F(0,t)
s=new D.bA([s])
s.b=!0
this.V(s)},
a6:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.ao(u,u.length,[H.z(u,0)]);u.C();){t=u.d
if(t!=null)t.a6(a)}s.f=!1},
$ae:function(){return[M.at]},
$aS:function(){return[M.at]},
$iat:1}
M.d9.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.H():u},
V:function(a){var u
H.k(a,"$ix")
u=this.r
if(u!=null)u.B(a)},
aR:function(){return this.V(null)},
saX:function(a){var u,t,s=this
if(a==null)a=new X.fH()
u=s.b
if(u!==a){if(u!=null)u.gl().F(0,s.gU())
t=s.b
s.b=a
a.gl().h(0,s.gU())
u=new D.A("camera",t,s.b,[X.bR])
u.b=!0
s.V(u)}},
saA:function(a,b){var u,t,s=this
if(b==null)b=X.jN(!0,null)
u=s.c
if(u!==b){if(u!=null)u.gl().F(0,s.gU())
t=s.c
s.c=b
b.gl().h(0,s.gU())
u=new D.A("target",t,s.c,[X.cG])
u.b=!0
s.V(u)}},
sap:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gl().F(0,t.gU())
u=t.d
t.d=a
if(a!=null)a.gl().h(0,t.gU())
s=new D.A("technique",u,t.d,[O.bH])
s.b=!0
t.V(s)}},
a6:function(a){var u,t=this
a.cg(t.d)
t.c.I(a)
t.b.I(a)
u=t.d
if(u!=null)u.a8(0,a)
t.e.a8(0,a)
t.e.a6(a)
t.b.a3(a)
t.c.a3(a)
a.ce()},
$iat:1}
M.df.prototype={
V:function(a){var u
H.k(a,"$ix")
u=this.y
if(u!=null)u.B(a)},
aR:function(){return this.V(null)},
fk:function(a,b){var u,t,s,r,q,p,o,n=E.am
H.i(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gU(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bw()
o.sa9(null)
o.saH(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sa9(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bz([n])
n.b=!0
this.V(n)},
fm:function(a,b){var u,t,s=E.am
H.i(b,"$ie",[s],"$ae")
for(u=b.gR(b),t=this.gU();u.C();)u.gK(u).gl().F(0,t)
s=new D.bA([s])
s.b=!0
this.V(s)},
saX:function(a){var u,t,s=this
if(a==null)a=X.kE(null)
u=s.b
if(u!==a){if(u!=null)u.gl().F(0,s.gU())
t=s.b
s.b=a
a.gl().h(0,s.gU())
u=new D.A("camera",t,s.b,[X.bR])
u.b=!0
s.V(u)}},
saA:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gl().F(0,t.gU())
u=t.c
t.c=b
b.gl().h(0,t.gU())
s=new D.A("target",u,t.c,[X.cG])
s.b=!0
t.V(s)}},
sap:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gl().F(0,t.gU())
u=t.d
t.d=a
if(a!=null)a.gl().h(0,t.gU())
s=new D.A("technique",u,t.d,[O.bH])
s.b=!0
t.V(s)}},
gl:function(){var u=this.y
return u==null?this.y=D.H():u},
a6:function(a){var u,t=this
a.cg(t.d)
t.c.I(a)
t.b.I(a)
u=t.d
if(u!=null)u.a8(0,a)
for(u=t.e.a,u=new J.ao(u,u.length,[H.z(u,0)]);u.C();)u.d.a8(0,a)
for(u=t.e.a,u=new J.ao(u,u.length,[H.z(u,0)]);u.C();)u.d.a6(a)
t.b.toString
a.cy.az()
a.db.az()
t.c.a3(a)
a.ce()},
seA:function(a,b){this.e=H.i(b,"$iS",[E.am],"$aS")},
$iat:1}
M.at.prototype={}
A.d1.prototype={}
A.f3.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
i_:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
b_:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ab.prototype={
gac:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){return""+this.gac(this)},
p:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.ab))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.db.prototype={
d9:function(a,b){if(b!=null&&b.d)a.e5(b)}}
A.dv.prototype={
ec:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.bG("")
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
A.mQ(c0,u)
A.mS(c0,u)
A.mR(c0,u)
A.mU(c0,u)
A.mV(c0,u)
A.mT(c0,u)
A.mW(c0,u)
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
b5.b3(0,s.charCodeAt(0)==0?s:s,A.mP(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.m(b5.y.A(0,"invViewMat"),"$ia_")
if(t)b5.dy=H.m(b5.y.A(0,"objMat"),"$ia_")
if(r)b5.fr=H.m(b5.y.A(0,"viewObjMat"),"$ia_")
b5.fy=H.m(b5.y.A(0,"projViewObjMat"),"$ia_")
if(c0.ry)b5.k1=H.m(b5.y.A(0,"txt2DMat"),"$ibJ")
if(c0.x1)b5.k2=H.m(b5.y.A(0,"txtCubeMat"),"$ia_")
if(c0.x2)b5.k3=H.m(b5.y.A(0,"colorMat"),"$ia_")
b5.sew(H.d([],[A.a_]))
t=c0.y2
if(t>0){b5.k4=H.k(b5.y.A(0,"bendMatCount"),"$iaj")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.w(P.t(b7+q+b8));(s&&C.a).h(s,H.m(m,"$ia_"))}}t=c0.a
if(t.a)b5.r2=H.m(b5.y.A(0,"emissionClr"),"$iR")
if(t.c)b5.ry=H.m(b5.y.A(0,"emissionTxt"),"$ia8")
t=c0.b
if(t.a)b5.x1=H.m(b5.y.A(0,"ambientClr"),"$iR")
if(t.c)b5.y1=H.m(b5.y.A(0,"ambientTxt"),"$ia8")
t=c0.c
if(t.a)b5.y2=H.m(b5.y.A(0,"diffuseClr"),"$iR")
if(t.c)b5.bl=H.m(b5.y.A(0,"diffuseTxt"),"$ia8")
t=c0.d
if(t.a)b5.ds=H.m(b5.y.A(0,"invDiffuseClr"),"$iR")
if(t.c)b5.dt=H.m(b5.y.A(0,"invDiffuseTxt"),"$ia8")
t=c0.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dw=H.m(b5.y.A(0,"shininess"),"$ia7")
if(s)b5.du=H.m(b5.y.A(0,"specularClr"),"$iR")
if(t.c)b5.dv=H.m(b5.y.A(0,"specularTxt"),"$ia8")}if(c0.f.c)b5.dz=H.m(b5.y.A(0,"bumpTxt"),"$ia8")
if(c0.cy){b5.dA=H.m(b5.y.A(0,"envSampler"),"$ia8")
t=c0.r
if(t.a)b5.dB=H.m(b5.y.A(0,"reflectClr"),"$iR")
if(t.c)b5.dC=H.m(b5.y.A(0,"reflectTxt"),"$ia8")
t=c0.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dD=H.m(b5.y.A(0,"refraction"),"$ia7")
if(s)b5.dE=H.m(b5.y.A(0,"refractClr"),"$iR")
if(t.c)b5.dF=H.m(b5.y.A(0,"refractTxt"),"$ia8")}}t=c0.y
if(t.a)b5.dG=H.m(b5.y.A(0,"alpha"),"$ia7")
if(t.c)b5.dH=H.m(b5.y.A(0,"alphaTxt"),"$ia8")
t=P.p
s=[t,A.aj]
b5.seI(new H.Z(s))
b5.sem(new H.Z([t,[P.b,A.c0]]))
b5.sh8(new H.Z(s))
b5.sh9(new H.Z([t,[P.b,A.c1]]))
b5.shq(new H.Z(s))
b5.sen(new H.Z([t,[P.b,A.c2]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.c0],l=0;l<t.length;t.length===s||(0,H.v)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.j(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.aq()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.w(P.t(b7+g+b8))
H.m(m,"$iR")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.w(P.t(b7+g+b8))
H.m(f,"$iR")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.w(P.t(b7+g+b8))
H.m(e,"$iR")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.w(P.t(b7+g+b8))
H.m(m,"$iR")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.w(P.t(b7+g+b8))
H.m(f,"$iR")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.w(P.t(b7+o+b8))
H.m(e,"$iaB")
a=e}else a=b6
C.a.h(h,new A.c0(b,c,d,m,f,a))}b5.c_.n(0,j,h)
q=b5.bZ
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.w(P.t(b7+o+b8))
q.n(0,j,H.k(m,"$iaj"))}for(t=c0.Q,s=t.length,r=[A.c1],l=0;l<t.length;t.length===s||(0,H.v)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.j(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.w(P.t(b7+o+b8))
H.m(m,"$iR")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.w(P.t(b7+o+b8))
H.m(f,"$iR")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.w(P.t(b7+o+b8))
H.m(e,"$iR")
if(typeof j!=="number")return j.aq()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.w(P.t(b7+o+b8))
H.m(a0,"$ibJ")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.w(P.t(b7+o+b8))
H.m(a0,"$ia8")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.w(P.t(b7+o+b8))
H.m(a0,"$ia8")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.w(P.t(b7+o+b8))
H.m(a2,"$ic_")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.w(P.t(b7+o+b8))
H.m(a0,"$ia7")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.w(P.t(b7+o+b8))
H.m(a2,"$ia7")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.w(P.t(b7+o+b8))
H.m(a5,"$ia7")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.c1(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.c1.n(0,j,h)
q=b5.c0
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.w(P.t(b7+o+b8))
q.n(0,j,H.k(m,"$iaj"))}for(t=c0.ch,s=t.length,r=[A.c2],l=0;l<t.length;t.length===s||(0,H.v)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.j(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.w(P.t(b7+o+b8))
H.m(m,"$iR")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.w(P.t(b7+o+b8))
H.m(f,"$iR")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.w(P.t(b7+o+b8))
H.m(e,"$iR")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.w(P.t(b7+o+b8))
H.m(a0,"$iR")
if(typeof j!=="number")return j.aq()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.w(P.t(b7+o+b8))
H.m(a2,"$iR")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.w(P.t(b7+o+b8))
H.m(a5,"$iR")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.w(P.t(b7+o+b8))
H.m(a9,"$ia7")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.w(P.t(b7+o+b8))
H.m(b0,"$ia7")
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
if(a2==null)H.w(P.t(b7+g+b8))
H.m(a2,"$ic_")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.w(P.t(b7+g+b8))
H.m(a2,"$ia7")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.w(P.t(b7+g+b8))
H.m(a5,"$ia7")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.w(P.t(b7+g+b8))
H.m(a2,"$ia7")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.w(P.t(b7+g+b8))
H.m(a5,"$ia7")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.w(P.t(b7+g+b8))
H.m(a9,"$ia7")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.w(P.t(b7+g+b8))
H.m(a2,"$iaB")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.w(P.t(b7+o+b8))
H.m(a2,"$iaB")
a3=a2}else a3=b6
C.a.h(h,new A.c2(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.c3.n(0,j,h)
q=b5.c2
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.w(P.t(b7+o+b8))
q.n(0,j,H.k(m,"$iaj"))}}},
ad:function(a,b){},
sew:function(a){this.r1=H.i(a,"$ib",[A.a_],"$ab")},
seI:function(a){this.bZ=H.i(a,"$iE",[P.p,A.aj],"$aE")},
sem:function(a){this.c_=H.i(a,"$iE",[P.p,[P.b,A.c0]],"$aE")},
sh8:function(a){this.c0=H.i(a,"$iE",[P.p,A.aj],"$aE")},
sh9:function(a){this.c1=H.i(a,"$iE",[P.p,[P.b,A.c1]],"$aE")},
shq:function(a){this.c2=H.i(a,"$iE",[P.p,A.aj],"$aE")},
sen:function(a){this.c3=H.i(a,"$iE",[P.p,[P.b,A.c2]],"$aE")}}
A.ay.prototype={
i:function(a){return"dirLight"+H.j(this.a)}}
A.az.prototype={
i:function(a){return"pointLight"+H.j(this.a)}}
A.aA.prototype={
i:function(a){return"spotLight"+H.j(this.a)}}
A.h_.prototype={
i:function(a){return this.b2}}
A.c0.prototype={}
A.c1.prototype={}
A.c2.prototype={}
A.dB.prototype={}
A.ho.prototype={
i:function(a){return this.e}}
A.cD.prototype={
aQ:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
b3:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cP(b,35633)
r.f=r.cP(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.C(H.lb(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.w(P.t("Failed to link shader: "+H.j(s)))}r.hl()
r.hn()},
I:function(a){a.a.useProgram(this.r)
this.x.i_()},
cP:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.C(H.lb(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.h(P.t("Error compiling shader '"+H.j(s)+"': "+H.j(u)))}return s},
hl:function(){var u,t,s,r=this,q=H.d([],[A.d1]),p=r.a,o=H.X(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.G(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d1(p,t.name,s))}r.x=new A.f3(q)},
hn:function(){var u,t,s,r=this,q=H.d([],[A.dX]),p=r.a,o=H.X(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.G(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.hV(t.type,t.size,t.name,s))}r.y=new A.ik(q)},
aF:function(a,b,c){var u=this.a
if(a===1)return new A.aj(u,b,c)
else return A.k_(u,this.r,b,a,c)},
eD:function(a,b,c){var u=this.a
if(a===1)return new A.aB(u,b,c)
else return A.k_(u,this.r,b,a,c)},
eE:function(a,b,c){var u=this.a
if(a===1)return new A.a8(u,b,c)
else return A.k_(u,this.r,b,a,c)},
bi:function(a,b){return new P.ec(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
hV:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aF(b,c,d)
case 5121:return u.aF(b,c,d)
case 5122:return u.aF(b,c,d)
case 5123:return u.aF(b,c,d)
case 5124:return u.aF(b,c,d)
case 5125:return u.aF(b,c,d)
case 5126:return new A.a7(u.a,c,d)
case 35664:return new A.au(u.a,c,d)
case 35665:return new A.R(u.a,c,d)
case 35666:return new A.c_(u.a,c,d)
case 35667:return new A.ih(u.a,c,d)
case 35668:return new A.ii(u.a,c,d)
case 35669:return new A.ij(u.a,c,d)
case 35674:return new A.il(u.a,c,d)
case 35675:return new A.bJ(u.a,c,d)
case 35676:return new A.a_(u.a,c,d)
case 35678:return u.eD(b,c,d)
case 35680:return u.eE(b,c,d)
case 35670:throw H.h(u.bi("BOOL",c))
case 35671:throw H.h(u.bi("BOOL_VEC2",c))
case 35672:throw H.h(u.bi("BOOL_VEC3",c))
case 35673:throw H.h(u.bi("BOOL_VEC4",c))
default:throw H.h(P.t("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.bt.prototype={
i:function(a){return this.b}}
A.dL.prototype={}
A.dT.prototype={
eg:function(a,b,c){var u,t,s,r,q,p=this,o="Required uniform value, ",n=", was not defined or used in shader."
p.b3(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.mn(a,b))
p.z=p.x.j(0,"posAttr")
p.Q=H.m(p.y.A(0,"txtCount"),"$iaj")
p.ch=H.m(p.y.A(0,"backClr"),"$ic_")
p.shF(H.d([],[A.aB]))
p.seB(H.d([],[A.a_]))
u=[A.au]
p.shs(H.d([],u))
p.sht(H.d([],u))
p.seG(H.d([],u))
p.seH(H.d([],u))
p.seS(H.d([],[A.aj]))
for(t=0;t<a;++t){u=p.cx
s=p.y
r="txt"+t
q=s.j(0,r)
if(q==null)H.w(P.t(o+r+n));(u&&C.a).h(u,H.m(q,"$iaB"))
u=p.cy
s=p.y
r="clrMat"+t
q=s.j(0,r)
if(q==null)H.w(P.t(o+r+n));(u&&C.a).h(u,H.m(q,"$ia_"))
u=p.db
s=p.y
r="srcLoc"+t
q=s.j(0,r)
if(q==null)H.w(P.t(o+r+n));(u&&C.a).h(u,H.m(q,"$iau"))
u=p.dx
s=p.y
r="srcSize"+t
q=s.j(0,r)
if(q==null)H.w(P.t(o+r+n));(u&&C.a).h(u,H.m(q,"$iau"))
u=p.dy
s=p.y
r="destLoc"+t
q=s.j(0,r)
if(q==null)H.w(P.t(o+r+n));(u&&C.a).h(u,H.m(q,"$iau"))
u=p.fr
s=p.y
r="destSize"+t
q=s.j(0,r)
if(q==null)H.w(P.t(o+r+n));(u&&C.a).h(u,H.m(q,"$iau"))
u=p.fx
s=p.y
r="flip"+t
q=s.j(0,r)
if(q==null)H.w(P.t(o+r+n));(u&&C.a).h(u,H.m(q,"$iaj"))}},
shF:function(a){this.cx=H.i(a,"$ib",[A.aB],"$ab")},
seB:function(a){this.cy=H.i(a,"$ib",[A.a_],"$ab")},
shs:function(a){this.db=H.i(a,"$ib",[A.au],"$ab")},
sht:function(a){this.dx=H.i(a,"$ib",[A.au],"$ab")},
seG:function(a){this.dy=H.i(a,"$ib",[A.au],"$ab")},
seH:function(a){this.fr=H.i(a,"$ib",[A.au],"$ab")},
seS:function(a){this.fx=H.i(a,"$ib",[A.aj],"$ab")}}
A.dX.prototype={}
A.ik.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
A:function(a,b){var u=this.j(0,b)
if(u==null)throw H.h(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.M()},
M:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aj.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.ih.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.ii.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.ij.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.ig.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
shG:function(a){H.i(a,"$ib",[P.p],"$ab")}}
A.a7.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.au.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.R.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.c_.prototype={
e4:function(a){return C.c.co(this.a,this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.il.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.bJ.prototype={
Z:function(a){var u=new Float32Array(H.c4(H.i(a,"$ib",[P.y],"$ab")))
C.c.dZ(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.a_.prototype={
Z:function(a){var u=new Float32Array(H.c4(H.i(a,"$ib",[P.y],"$ab")))
C.c.cp(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.aB.prototype={
e5:function(a){var u=a==null||!a.d,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.a8.prototype={
cs:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.jl.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.ca(s.b,b).ca(s.d.ca(s.c,b),c)
a.saa(0,new V.a1(r.a,r.b,r.c))
a.siC(r.v(0,Math.sqrt(r.D(r))))
s=1-b
u=1-c
u=new V.aI(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.K(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a2()}},
$S:18}
F.jE.prototype={
$1:function(a){return new V.a1(Math.cos(a),Math.sin(a),0)},
$S:33}
F.jt.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.kj(n.$1(o),m)
m=J.lI(J.kj(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.F(m.a,m.b,m.c)
u=m.v(0,Math.sqrt(m.D(m)))
n=$.kX
if(n==null){n=new V.F(1,0,0)
$.kX=n
t=n}else t=n
n=u.aw(!J.K(u,t)?V.kZ():t)
s=n.v(0,Math.sqrt(n.D(n)))
n=s.aw(u)
t=n.v(0,Math.sqrt(n.D(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.w(0,n*m)
m=s.w(0,q*m)
a.saa(0,J.lH(l,new V.a1(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:18}
F.a6.prototype={
b0:function(){var u=this
if(!u.gb1()){C.a.F(u.a.a.d.b,u)
u.a.a.a2()}u.bI()
u.bJ()
u.hd()},
bM:function(a){this.a=a
C.a.h(a.d.b,this)},
bN:function(a){this.b=a
C.a.h(a.d.c,this)},
hk:function(a){this.c=a
C.a.h(a.d.d,this)},
bI:function(){var u=this.a
if(u!=null){C.a.F(u.d.b,this)
this.a=null}},
bJ:function(){var u=this.b
if(u!=null){C.a.F(u.d.c,this)
this.b=null}},
hd:function(){var u=this.c
if(u!=null){C.a.F(u.d.d,this)
this.c=null}},
gb1:function(){return this.a==null||this.b==null||this.c==null},
ev:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cK()
if(q!=null)s=s.m(0,q)
if(u!=null)s=s.m(0,u)
if(t!=null)s=s.m(0,t)
if(s.dI())return
return s.v(0,Math.sqrt(s.D(s)))},
ez:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.q(0,q)
r=new V.F(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.D(r)))
r=t.q(0,q)
r=new V.F(r.a,r.b,r.c)
r=s.aw(r.v(0,Math.sqrt(r.D(r))))
return r.v(0,Math.sqrt(r.D(r)))},
bT:function(){var u,t=this
if(t.d!=null)return!0
u=t.ev()
if(u==null){u=t.ez()
if(u==null)return!1}t.d=u
t.a.a.a2()
return!0},
eu:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cK()
if(q!=null)s=s.m(0,q)
if(u!=null)s=s.m(0,u)
if(t!=null)s=s.m(0,t)
if(s.dI())return
return s.v(0,Math.sqrt(s.D(s)))},
ey:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.L().a){l=d.q(0,g)
l=new V.F(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.D(l)))
if(s.a-t.a<0)q=q.O(0)}else{p=(l-u.b)/r
l=d.q(0,g).w(0,p).m(0,g).q(0,j)
l=new V.F(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.D(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.O(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.D(l)))
l=o.aw(q)
l=l.v(0,Math.sqrt(l.D(l))).aw(o)
q=l.v(0,Math.sqrt(l.D(l)))}return q},
bS:function(){var u,t=this
if(t.e!=null)return!0
u=t.eu()
if(u==null){u=t.ey()
if(u==null)return!1}t.e=u
t.a.a.a2()
return!0},
ghR:function(a){var u=this
if(J.K(u.a,u.b))return!0
if(J.K(u.b,u.c))return!0
if(J.K(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var u,t,s=this
if(s.gb1())return a+"disposed"
u=a+C.e.ah(J.aw(s.a.e),0)+", "+C.e.ah(J.aw(s.b.e),0)+", "+C.e.ah(J.aw(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
M:function(){return this.E("")}}
F.fx.prototype={}
F.hN.prototype={
b4:function(a,b,c){var u,t=b.a
t.a.a.t()
t=t.e
u=c.a
u.a.a.t()
if(t==u.e){t=b.b
t.a.a.t()
t=t.e
u=c.b
u.a.a.t()
if(t==u.e){t=b.c
t.a.a.t()
t=t.e
u=c.c
u.a.a.t()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.t()
t=t.e
u=c.b
u.a.a.t()
if(t==u.e){t=b.b
t.a.a.t()
t=t.e
u=c.c
u.a.a.t()
if(t==u.e){t=b.c
t.a.a.t()
t=t.e
u=c.a
u.a.a.t()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.t()
t=t.e
u=c.c
u.a.a.t()
if(t==u.e){t=b.b
t.a.a.t()
t=t.e
u=c.a
u.a.a.t()
if(t==u.e){t=b.c
t.a.a.t()
t=t.e
u=c.b
u.a.a.t()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bj.prototype={
b0:function(){var u=this
if(!u.gb1()){C.a.F(u.a.a.c.b,u)
u.a.a.a2()}u.bI()
u.bJ()},
bM:function(a){this.a=a
C.a.h(a.c.b,this)},
bN:function(a){this.b=a
C.a.h(a.c.c,this)},
bI:function(){var u=this.a
if(u!=null){C.a.F(u.c.b,this)
this.a=null}},
bJ:function(){var u=this.b
if(u!=null){C.a.F(u.c.c,this)
this.b=null}},
gb1:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){if(this.gb1())return a+"disposed"
return a+C.e.ah(J.aw(this.a.e),0)+", "+C.e.ah(J.aw(this.b.e),0)},
M:function(){return this.E("")}}
F.fO.prototype={}
F.ie.prototype={
b4:function(a,b,c){var u,t=b.a
t.a.a.t()
t=t.e
u=c.a
u.a.a.t()
if(t==u.e){t=b.b
t.a.a.t()
t=t.e
u=c.b
u.a.a.t()
return t==u.e}else{t=b.a
t.a.a.t()
t=t.e
u=c.b
u.a.a.t()
if(t==u.e){t=b.b
t.a.a.t()
t=t.e
u=c.a
u.a.a.t()
return t==u.e}else return!1}}}
F.bE.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.e.ah(J.aw(u.e),0)},
M:function(){return this.E("")}}
F.dJ.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.H():u},
cc:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.t()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){r=g[s]
h.a.h(0,r.hU())}h.a.t()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.t()
o=o.e
if(typeof o!=="number")return o.m()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bE()
if(n.a==null)H.w(P.t("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.B(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.t()
o=o.e
if(typeof o!=="number")return o.m()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.t()
p=p.e
if(typeof p!=="number")return p.m()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.lZ(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.t()
o=o.e
if(typeof o!=="number")return o.m()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.t()
p=p.e
if(typeof p!=="number")return p.m()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.t()
o=o.e
if(typeof o!=="number")return o.m()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cp(l,k,i)}g=h.e
if(g!=null)g.ao(0)},
ak:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ak()||!1
if(!t.a.ak())u=!1
s=t.e
if(s!=null)s.ao(0)
return u},
aJ:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aJ()||!1
if(!t.a.aJ())u=!1
s=t.e
if(s!=null)s.ao(0)
return u},
bk:function(){var u=this.e
if(u!=null)++u.d
this.a.bk()
u=this.e
if(u!=null)u.ao(0)
return!0},
ib:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.z(o,0)])
for(o=[F.an];u.length!==0;){t=C.a.gi2(u)
C.a.dT(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.c(u,r)
q=u[r]
if(q!=null&&a.b4(0,t,q)){C.a.h(s,q)
C.a.dT(u,r)}}if(s.length>1)b.cc(s)}}p.a.t()
p.c.cj()
p.d.cj()
p.b.iv()
p.c.ck(new F.ie())
p.d.ck(new F.hN())
o=p.e
if(o!=null)o.ao(0)},
aW:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.ag()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.aQ().a)!==0)++s
if((t&$.aP().a)!==0)++s
if((t&$.bf().a)!==0)++s
if((t&$.aR().a)!==0)++s
if((t&$.d_().a)!==0)++s
if((t&$.d0().a)!==0)++s
if((t&$.ce().a)!==0)++s
if((t&$.br().a)!==0)++s
r=a3.gct(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.y
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.d4])
for(n=0,m=0;m<s;++m){l=a3.hM(m)
k=l.gct(l)
C.a.n(o,m,new Z.d4(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.c(u,j)
i=u[j].i8(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.n(p,h,i[g]);++h}}n+=k}H.i(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.c4(p)),35044)
u.bindBuffer(a0,null)
e=new Z.bg(new Z.e3(a0,f),o,a3)
e.seU(H.d([],[Z.by]))
if(a.b.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.t()
C.a.h(d,c.e)}b=Z.k1(u,34963,H.i(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.by(0,d.length,b))}if(a.c.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.t()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.t()
C.a.h(d,c.e)}b=Z.k1(u,34963,H.i(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.by(1,d.length,b))}if(a.d.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.t()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.t()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.c(c,m)
c=c[m].c
c.a.a.t()
C.a.h(d,c.e)}b=Z.k1(u,34963,H.i(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.by(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.o])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.E(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.E(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.E(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.E(t))}return C.a.u(s,"\n")},
a2:function(){var u=this.e
if(u!=null)u.B(null)},
$inF:1}
F.hH.prototype={
hJ:function(a){var u,t,s,r,q,p
H.i(a,"$ib",[F.an],"$ab")
u=H.d([],[F.a6])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.cp(t,q,p))}return u},
hK:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.i(c,"$ib",[F.an],"$ab")
u=H.d([],[F.a6])
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
C.a.h(u,F.cp(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cp(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cp(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cp(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
ck:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b4(0,p,n)){p.b0()
break}}}}},
cj:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=s.ghR(s)
if(t)s.b0()}},
ak:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].bT())s=!1
return s},
aJ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].bS())s=!1
return s},
i:function(a){return this.M()},
E:function(a){var u,t,s,r=H.d([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].E(a))
return C.a.u(r,"\n")},
M:function(){return this.E("")},
seN:function(a){this.b=H.i(a,"$ib",[F.a6],"$ab")}}
F.hI.prototype={
gk:function(a){return this.b.length},
ck:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b4(0,p,n)){p.b0()
break}}}}},
cj:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=J.K(s.a,s.b)
if(t)s.b0()}},
i:function(a){return this.M()},
E:function(a){var u,t,s=H.d([],[P.o]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
C.a.h(s,t[u].E(a+(""+u+". ")))}return C.a.u(s,"\n")},
M:function(){return this.E("")},
seW:function(a){this.b=H.i(a,"$ib",[F.bj],"$ab")}}
F.hJ.prototype={
gk:function(a){return this.b.length},
iv:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.F(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.B(null)}s=t.a
if(s!=null){C.a.F(s.b.b,t)
t.a=null}}}},
i:function(a){return this.M()},
E:function(a){var u,t,s,r=H.d([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].E(a))
return C.a.u(r,"\n")},
M:function(){return this.E("")},
sbF:function(a){this.b=H.i(a,"$ib",[F.bE],"$ab")}}
F.an.prototype={
bV:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.iw(u.cx,r,o,t,s,q,p,a,n)},
hU:function(){return this.bV(null)},
saa:function(a,b){var u
if(!J.K(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a2()}},
siC:function(a){var u
if(!J.K(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a2()}},
i8:function(a){var u,t,s=this
if(a.p(0,$.ag())){u=s.f
t=[P.y]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.aQ())){u=s.r
t=[P.y]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.aP())){u=s.x
t=[P.y]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.bf())){u=s.y
t=[P.y]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.p(0,$.aR())){u=s.z
t=[P.y]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.d_())){u=s.Q
t=[P.y]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.d0())){u=s.Q
t=[P.y]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.ce()))return H.d([s.ch],[P.y])
else if(a.p(0,$.br())){u=s.cx
t=[P.y]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.y])},
bT:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cK()
t.d.L(0,new F.iH(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.a2()
s=t.a.e
if(s!=null)s.ao(0)}return!0},
bS:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cK()
t.d.L(0,new F.iG(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.a2()
s=t.a.e
if(s!=null)s.ao(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var u,t,s=this,r="-",q=H.d([],[P.o])
C.a.h(q,C.e.ah(J.aw(s.e),0))
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
t=C.a.u(q,", ")
return a+"{"+t+"}"},
M:function(){return this.E("")}}
F.iH.prototype={
$1:function(a){var u,t
H.k(a,"$ia6")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.m(0,u)}},
$S:5}
F.iG.prototype={
$1:function(a){var u,t
H.k(a,"$ia6")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.m(0,u)}},
$S:5}
F.ix.prototype={
t:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.c(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.h(P.t("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a2()
return!0},
bj:function(a,b,c,d,e,f){var u=F.iw(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gk:function(a){return this.c.length},
ak:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].bT()
return!0},
aJ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].bS()
return!0},
bk:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.K(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.B(null)}}}}return!0},
i:function(a){return this.M()},
E:function(a){var u,t,s,r
this.t()
u=H.d([],[P.o])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].E(a))
return C.a.u(u,"\n")},
M:function(){return this.E("")},
shH:function(a){this.c=H.i(a,"$ib",[F.an],"$ab")}}
F.iy.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
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
L:function(a,b){var u=this
H.l(b,{func:1,ret:-1,args:[F.a6]})
C.a.L(u.b,b)
C.a.L(u.c,new F.iz(u,b))
C.a.L(u.d,new F.iA(u,b))},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.d([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].E(""))
return C.a.u(r,"\n")},
seO:function(a){this.b=H.i(a,"$ib",[F.a6],"$ab")},
seP:function(a){this.c=H.i(a,"$ib",[F.a6],"$ab")},
seQ:function(a){this.d=H.i(a,"$ib",[F.a6],"$ab")}}
F.iz.prototype={
$1:function(a){H.k(a,"$ia6")
if(!J.K(a.a,this.a))this.b.$1(a)},
$S:5}
F.iA.prototype={
$1:function(a){var u
H.k(a,"$ia6")
u=this.a
if(!J.K(a.a,u)&&!J.K(a.b,u))this.b.$1(a)},
$S:5}
F.iB.prototype={
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.c(t,u)
return t[u]}else{if(b<0)return H.c(t,b)
return t[b]}},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.d([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].E(""))
return C.a.u(r,"\n")},
seX:function(a){this.b=H.i(a,"$ib",[F.bj],"$ab")},
seY:function(a){this.c=H.i(a,"$ib",[F.bj],"$ab")}}
F.iD.prototype={}
F.iC.prototype={
b4:function(a,b,c){return J.K(b.f,c.f)}}
F.iE.prototype={}
F.hn.prototype={
cc:function(a){var u,t,s,r,q,p,o,n,m
H.i(a,"$ib",[F.an],"$ab")
u=V.cK()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.F(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.v(0,Math.sqrt(u.D(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.v)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.v(0,Math.sqrt(o*o+n*n+m*m))}if(!J.K(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.B(null)}}}return}}
F.iF.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.d([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].E(""))
return C.a.u(r,"\n")},
sbF:function(a){this.b=H.i(a,"$ib",[F.bE],"$ab")}}
O.fm.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.H():u},
W:function(){var u=this.r
if(u!=null)u.B(null)},
sdm:function(a){if(this.b!=a){this.b=a
this.W()}},
sdj:function(a){if(this.c!=a){this.c=a
this.W()}},
sdi:function(a){var u=a==null?V.b2():a
this.f=u
if(!J.K(u,a)){this.f=a
this.W()}},
a8:function(a,b){},
a0:function(a,b){H.i(a,"$ib",[T.aL],"$ab")
if(b!=null)if(!C.a.ae(a,b)){b.a=a.length
C.a.h(a,b)}},
b8:function(a,b){var u,t,s,r,q,p,o=this,n="Distort"
if(o.a==null){u=H.k(a.fr.j(0,n),"$idb")
if(u==null){t=a.a
u=new A.db(t,n)
u.aQ(t,n)
u.b3(0,"uniform mat4 projViewObjMat;                             \nuniform mat3 colorTxt2DMat;                              \nuniform mat3 bumpTxt2DMat;                               \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec2 txt2DAttr;                                \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvoid main()                                              \n{                                                        \n   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n}                                                        \n","precision mediump float;                           \n                                                   \nuniform sampler2D colorTxt;                        \nuniform sampler2D bumpTxt;                         \nuniform mat4 bumpMat;                              \n                                                   \nvarying vec2 colorTxt2D;                           \nvarying vec2 bumpTxt2D;                            \n                                                   \nvec2 offset()                                      \n{                                                  \n   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb; \n   txt2D = normalize(txt2D*2.0 - 1.0);             \n   return (bumpMat * vec4(txt2D, 1.0)).xy;         \n}                                                  \n                                                   \nvoid main()                                        \n{                                                  \n   vec2 txt2D = colorTxt2D + offset();             \n   gl_FragColor = texture2D(colorTxt, txt2D);      \n}                                                  \n")
u.z=u.x.j(0,"posAttr")
u.Q=u.x.j(0,"txt2DAttr")
u.ch=H.m(u.y.A(0,"projViewObjMat"),"$ia_")
u.cx=H.m(u.y.A(0,"colorTxt2DMat"),"$ibJ")
u.cy=H.m(u.y.A(0,"bumpTxt2DMat"),"$ibJ")
u.db=H.m(u.y.A(0,"colorTxt"),"$iaB")
u.dx=H.m(u.y.A(0,"bumpTxt"),"$iaB")
u.dy=H.m(u.y.A(0,"bumpMat"),"$ia_")
a.aV(u)}o.a=u}if(b.e==null){t=b.d
s=$.ag()
r=$.bf()
r=t.aW(new Z.bK(a.a),new Z.av(s.a|r.a))
r.a5($.ag()).e=o.a.z.c
r.a5($.bf()).e=o.a.Q.c
b.e=r}q=H.d([],[T.aL])
o.a0(q,o.b)
o.a0(q,o.c)
for(p=0;p<q.length;++p)q[p].I(a)
t=o.a
t.I(a)
s=o.b
t.d9(t.db,s)
s=o.c
t.d9(t.dx,s)
s=a.gcf()
r=t.ch
r.toString
r.Z(s.S(0,!0))
s=o.d
r=t.cx
r.toString
r.Z(s.S(0,!0))
s=o.e
r=t.cy
r.toString
r.Z(s.S(0,!0))
s=o.f
t=t.dy
t.toString
t.Z(s.S(0,!0))
t=b.e
if(t instanceof Z.bg){t.I(a)
t.a6(a)
t.a3(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.b_()
for(p=0;p<q.length;++p){t=q[p]
if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(3553,null)}}}}
O.du.prototype={
gl:function(){var u=this.fr
return u==null?this.fr=D.H():u},
G:function(a){var u
H.k(a,"$ix")
u=this.fr
if(u!=null)u.B(a)},
W:function(){return this.G(null)},
d2:function(a){H.k(a,"$ix")
this.a=null
this.G(a)},
hh:function(){return this.d2(null)},
fe:function(a,b){var u=V.ad
H.i(b,"$ie",[u],"$ae")
u=new D.bz([u])
u.b=!0
this.G(u)},
fg:function(a,b){var u=V.ad
H.i(b,"$ie",[u],"$ae")
u=new D.bA([u])
u.b=!0
this.G(u)},
cM:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.p,h=new H.Z([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=h.j(0,0)
h.n(0,0,r==null?1:r)}q=H.d([],[A.ay])
h.L(0,new O.h3(j,q))
C.a.bt(q,new O.h4())
p=new H.Z([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){o=u[s]
r=o.gaZ()
n=p.j(0,o.gaZ())
p.n(0,r,n==null?1:n)}m=H.d([],[A.az])
p.L(0,new O.h5(j,m))
C.a.bt(m,new O.h6())
l=new H.Z([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.v)(i),++s){o=i[s]
t=o.gaZ()
r=l.j(0,o.gaZ())
l.n(0,t,r==null?1:r)}k=H.d([],[A.aA])
l.L(0,new O.h7(j,k))
C.a.bt(k,new O.h8())
i=C.d.a7(j.e.a.length+3,4)
j.dy.e
return A.m4(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
a0:function(a,b){H.i(a,"$ib",[T.aL],"$ab")},
a8:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.ao(u,u.length,[H.z(u,0)]);u.C();){t=u.d
t.toString
s=$.iv
if(s==null)s=$.iv=new V.F(0,0,1)
t.a=s
r=$.iu
t.d=r==null?$.iu=new V.F(0,1,0):r
r=$.it
t.e=r==null?$.it=new V.F(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bq(s)
r=s.a
p=s.b
o=s.c
t.a=s.v(0,Math.sqrt(r*r+p*p+o*o))
o=q.bq(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.v(0,Math.sqrt(p*p+r*r+s*s))
s=q.bq(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.v(0,Math.sqrt(r*r+p*p+o*o))}}}},
b8:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cM()
u=H.k(b4.fr.j(0,b3.b2),"$idv")
if(u==null){u=A.m3(b3,b4.a)
b4.aV(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.bl
b3=b5.e
if(!(b3 instanceof Z.bg))b3=b5.e=null
if(b3==null||!b3.d.p(0,s)){b3=t.k3
if(b3)b5.d.ak()
r=t.k4
if(r)b5.d.aJ()
q=t.r2
if(q)b5.d.bk()
p=b5.d.aW(new Z.bK(b4.a),s)
p.a5($.ag()).e=b2.a.Q.c
if(b3)p.a5($.aQ()).e=b2.a.cx.c
if(r)p.a5($.aP()).e=b2.a.ch.c
if(t.r1)p.a5($.bf()).e=b2.a.cy.c
if(q)p.a5($.aR()).e=b2.a.db.c
if(t.rx)p.a5($.br()).e=b2.a.dx.c
b5.e=p}b3=T.aL
o=H.d([],[b3])
b2.a.I(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.ga1(q)
r=r.dy
r.toString
r.Z(q.S(0,!0))}if(t.fr){r=b2.a
q=b4.ge_()
r=r.fr
r.toString
r.Z(q.S(0,!0))}r=b2.a
q=b4.gcf()
r=r.fy
r.toString
r.Z(q.S(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.Z(C.l.S(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.Z(C.l.S(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.Z(C.l.S(q,!0))}if(t.y2>0){n=b2.e.a.length
r=b2.a.k4
C.c.aM(r.a,r.d,n)
for(r=[P.y],m=0;m<n;++m){q=b2.a
l=b2.e.a
if(m>=l.length)return H.c(l,m)
l=l[m]
q.toString
H.k(l,"$iad")
q=q.r1
if(m>=q.length)return H.c(q,m)
q=q[m]
k=new Float32Array(H.c4(H.i(l.S(0,!0),"$ib",r,"$ab")))
C.c.cp(q.a,q.d,!1,k)}}r=t.a
if(r.a){q=b2.a
l=b2.f.f
q=q.r2
C.c.T(q.a,q.d,l.a,l.b,l.c)}if(r.c){b2.a0(o,b2.f.e)
r=b2.a
q=b2.f.e
r.ad(r.ry,q)}if(t.id){r=t.b
if(r.a){q=b2.a
l=b2.r.f
q=q.x1
C.c.T(q.a,q.d,l.a,l.b,l.c)}if(r.c){b2.a0(o,b2.r.e)
r=b2.a
q=b2.r.e
r.ad(r.y1,q)}r=t.c
if(r.a){q=b2.a
l=b2.x.f
q=q.y2
C.c.T(q.a,q.d,l.a,l.b,l.c)}if(r.c){b2.a0(o,b2.x.e)
r=b2.a
q=b2.x.e
r.ad(r.bl,q)}r=t.d
if(r.a){q=b2.a
l=b2.y.f
q=q.ds
C.c.T(q.a,q.d,l.a,l.b,l.c)}if(r.c){b2.a0(o,b2.y.e)
r=b2.a
q=b2.y.e
r.ad(r.dt,q)}r=t.e
q=r.a
if(!q)l=r.c
else l=!0
if(l){l=b2.a
j=b2.z.ch
l=l.dw
C.c.a4(l.a,l.d,j)}if(q){q=b2.a
l=b2.z.f
q=q.du
C.c.T(q.a,q.d,l.a,l.b,l.c)}if(r.c){b2.a0(o,b2.z.e)
r=b2.a
q=b2.z.e
r.ad(r.dv,q)}r=t.z
if(r.length>0){q=b4.db
i=q.ga1(q)
q=P.p
h=new H.Z([q,q])
for(q=b2.dx.e,l=q.length,g=0;g<q.length;q.length===l||(0,H.v)(q),++g){f=q[g]
e=h.j(0,0)
if(e==null)e=0
h.n(0,0,e+1)
d=J.eY(b2.a.c_.j(0,0),e)
j=i.bq(f.a)
c=j.a
b=j.b
a=j.c
a=j.v(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
j=a.b
a=a.c
C.c.T(b.a,b.d,c,j,a)
a=f.c
j=d.f
C.c.T(j.a,j.d,a.a,a.b,a.c)}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.v)(r),++g){l=r[g].a
n=h.j(0,l)
if(n==null)n=0
l=b2.a.bZ.j(0,l)
C.c.aM(l.a,l.d,n)}}r=t.Q
if(r.length>0){q=b4.db
i=q.ga1(q)
q=P.p
a0=new H.Z([q,q])
for(q=b2.dx.f,l=q.length,j=[b3],c=[P.y],g=0;g<q.length;q.length===l||(0,H.v)(q),++g){f=q[g]
a1=f.gaZ()
e=a0.j(0,a1)
if(e==null)e=0
a0.n(0,a1,e+1)
d=J.eY(b2.a.c1.j(0,a1),e)
a2=i.w(0,f.ga1(f))
b=f.ga1(f)
a=$.cz
b=b.cn(a==null?$.cz=new V.a1(0,0,0):a)
a=d.b
C.c.T(a.a,a.d,b.a,b.b,b.c)
b=$.cz
b=a2.cn(b==null?$.cz=new V.a1(0,0,0):b)
a=d.c
C.c.T(a.a,a.d,b.a,b.b,b.c)
b=f.gaY(f)
a=d.e
C.c.T(a.a,a.d,b.a,b.b,b.c)
f.gaB()
b=a2.c7(0)
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
k=new Float32Array(H.c4(H.i(new V.ct(a,a3,a4,a5,a6,a7,a8,a9,b).S(0,!0),"$ib",c,"$ab")))
C.c.dZ(b0.a,b0.d,!1,k)
f.gaB()
b=f.gaB()
H.i(o,"$ib",j,"$ab")
if(!C.a.ae(o,b)){b.sc5(0,o.length)
C.a.h(o,b)}b=f.gaB()
a=b.gcb(b)
if(a){a=d.f
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}f.gaO()
b=f.ge6()
a=d.x
a.toString
a3=b.gbW(b)
a4=b.gbX(b)
a5=b.ghZ()
b=b.ghY()
C.c.co(a.a,a.d,a3,a4,a5,b)
b=f.gaO()
if(!C.a.ae(o,b)){b.sc5(0,o.length)
C.a.h(o,b)}b=f.gaO()
a=b.gcb(b)
if(a){a=d.r
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}if(f.gi0()){b=f.ghN()
a=d.y
C.c.a4(a.a,a.d,b)
b=f.ghO()
a=d.z
C.c.a4(a.a,a.d,b)
b=f.ghP()
a=d.Q
C.c.a4(a.a,a.d,b)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.v)(r),++g){l=r[g].a
n=a0.j(0,l)
if(n==null)n=0
l=b2.a.c0.j(0,l)
C.c.aM(l.a,l.d,n)}}r=t.ch
if(r.length>0){q=b4.db
i=q.ga1(q)
q=P.p
b1=new H.Z([q,q])
for(q=b2.dx.r,l=q.length,b3=[b3],g=0;g<q.length;q.length===l||(0,H.v)(q),++g){f=q[g]
a1=f.gaZ()
e=b1.j(0,a1)
if(e==null)e=0
b1.n(0,a1,e+1)
d=J.eY(b2.a.c3.j(0,a1),e)
j=f.git(f)
c=d.b
C.c.T(c.a,c.d,j.a,j.b,j.c)
j=f.giP(f).j_()
c=d.c
C.c.T(c.a,c.d,j.a,j.b,j.c)
j=i.cn(f.git(f))
c=d.d
C.c.T(c.a,c.d,j.a,j.b,j.c)
j=f.gaY(f)
c=d.e
C.c.T(c.a,c.d,j.a,j.b,j.c)
f.gaB()
j=f.gj2()
c=d.f
C.c.T(c.a,c.d,j.a,j.b,j.c)
j=f.gcl(f)
c=d.r
C.c.T(c.a,c.d,j.a,j.b,j.c)
j=f.gj0()
c=d.x
C.c.a4(c.a,c.d,j)
j=f.gj1()
c=d.y
C.c.a4(c.a,c.d,j)
f.gaB()
j=f.gaB()
H.i(o,"$ib",b3,"$ab")
if(!C.a.ae(o,j)){j.sc5(0,o.length)
C.a.h(o,j)}j=f.gaB()
c=j.gcb(j)
if(c){c=d.dx
c.toString
b=j.d
if(!b)c.a.uniform1i(c.d,0)
else{j=j.a
c.a.uniform1i(c.d,j)}}f.gaO()
j=f.ge6()
c=d.z
c.toString
b=j.gbW(j)
a=j.gbX(j)
a3=j.ghZ()
j=j.ghY()
C.c.co(c.a,c.d,b,a,a3,j)
j=f.gaO()
if(!C.a.ae(o,j)){j.sc5(0,o.length)
C.a.h(o,j)}j=f.gaO()
c=j.gcb(j)
if(c){c=d.dy
c.toString
b=j.d
if(!b)c.a.uniform1i(c.d,0)
else{j=j.a
c.a.uniform1i(c.d,j)}}if(f.giQ()){j=f.giO()
c=d.Q
C.c.a4(c.a,c.d,j)
j=f.giN()
c=d.ch
C.c.a4(c.a,c.d,j)}if(f.gi0()){j=f.ghN()
c=d.cx
C.c.a4(c.a,c.d,j)
j=f.ghO()
c=d.cy
C.c.a4(c.a,c.d,j)
j=f.ghP()
c=d.db
C.c.a4(c.a,c.d,j)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.v)(r),++g){q=r[g].a
n=b1.j(0,q)
if(n==null)n=0
q=b2.a.c2.j(0,q)
C.c.aM(q.a,q.d,n)}}}if(t.f.c){b2.a0(o,b2.Q.e)
b3=b2.a
r=b2.Q.e
b3.ad(b3.dz,r)}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.ga1(r).c7(0)}b3=b3.id
b3.toString
b3.Z(r.S(0,!0))}if(t.cy){b2.a0(o,b2.ch)
b3=b2.a
r=b2.ch
b3.ad(b3.dA,r)
b3=t.r
if(b3.a){r=b2.a
q=b2.cx.f
r=r.dB
C.c.T(r.a,r.d,q.a,q.b,q.c)}if(b3.c){b2.a0(o,b2.cx.e)
b3=b2.a
r=b2.cx.e
b3.ad(b3.dC,r)}b3=t.x
r=b3.a
if(!r)q=b3.c
else q=!0
if(q){q=b2.a
l=b2.cy.ch
q=q.dD
C.c.a4(q.a,q.d,l)}if(r){r=b2.a
q=b2.cy.f
r=r.dE
C.c.T(r.a,r.d,q.a,q.b,q.c)}if(b3.c){b2.a0(o,b2.cy.e)
b3=b2.a
r=b2.cy.e
b3.ad(b3.dF,r)}}b3=t.y
r=b3.a
q=!r
if(q)l=b3.c
else l=!0
if(l){if(r){r=b2.a
l=b2.db.f
r=r.dG
C.c.a4(r.a,r.d,l)}if(b3.c){b2.a0(o,b2.db.e)
r=b2.a
l=b2.db.e
r.ad(r.dH,l)}r=b4.a
r.enable(3042)
r.blendFunc(770,771)}for(m=0;m<o.length;++m)o[m].I(b4)
r=b5.e
r.I(b4)
r.a6(b4)
r.a3(b4)
if(q)b3=b3.c
else b3=!0
if(b3)b4.a.disable(3042)
for(m=0;m<o.length;++m)o[m].a3(b4)
b3=b2.a
b3.toString
b4.a.useProgram(null)
b3.x.b_()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cM().b2},
sex:function(a){this.e=H.i(a,"$iS",[V.ad],"$aS")}}
O.h3.prototype={
$2:function(a,b){H.X(a)
H.X(b)
if(typeof b!=="number")return b.m()
return C.a.h(this.b,new A.ay(a,C.d.a7(b+3,4)*4))},
$S:8}
O.h4.prototype={
$2:function(a,b){H.k(a,"$iay")
H.k(b,"$iay")
return J.jG(a.a,b.a)},
$S:37}
O.h5.prototype={
$2:function(a,b){H.X(a)
H.X(b)
if(typeof b!=="number")return b.m()
return C.a.h(this.b,new A.az(a,C.d.a7(b+3,4)*4))},
$S:8}
O.h6.prototype={
$2:function(a,b){H.k(a,"$iaz")
H.k(b,"$iaz")
return J.jG(a.a,b.a)},
$S:38}
O.h7.prototype={
$2:function(a,b){H.X(a)
H.X(b)
if(typeof b!=="number")return b.m()
return C.a.h(this.b,new A.aA(a,C.d.a7(b+3,4)*4))},
$S:8}
O.h8.prototype={
$2:function(a,b){H.k(a,"$iaA")
H.k(b,"$iaA")
return J.jG(a.a,b.a)},
$S:39}
O.fY.prototype={
au:function(){var u,t=this
t.cw()
u=t.f
if(!(Math.abs(u-1)<$.L().a)){t.f=1
u=new D.A(t.b,u,1,[P.y])
u.b=!0
t.a.G(u)}}}
O.dw.prototype={
au:function(){},
d7:function(a){var u,t,s=this
if(!s.c.p(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.au()
u=s.a
u.a=null
u.G(null)}}}
O.fZ.prototype={}
O.b1.prototype={
d6:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.A(s.b+".color",u,a,[V.Y])
t.b=!0
s.a.G(t)}},
au:function(){this.cw()
this.d6(new V.Y(1,1,1))},
saY:function(a,b){this.d7(new A.ab(!0,!1,this.c.c))
this.d6(b)}}
O.h0.prototype={}
O.h1.prototype={
au:function(){var u,t=this
t.cz()
u=t.ch
if(!(Math.abs(u-1)<$.L().a)){t.ch=1
u=new D.A(t.b+".refraction",u,1,[P.y])
u.b=!0
t.a.G(u)}}}
O.h2.prototype={
d8:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.L().a)){u.ch=a
t=new D.A(u.b+".shininess",t,a,[P.y])
t.b=!0
u.a.G(t)}},
au:function(){this.cz()
this.d8(100)}}
O.dA.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.H():u},
G:function(a){var u
H.k(a,"$ix")
u=this.r
if(u!=null)u.B(a)},
W:function(){return this.G(null)},
d4:function(a){},
d5:function(a){var u,t=this,s=t.f
if(s!=a){if(s!=null)s.gl().F(0,t.gab())
u=t.f
t.f=a
if(a!=null)a.gl().h(0,t.gab())
s=new D.A("bumpyTextureCube",u,t.f,[T.cH])
s.b=!0
t.G(s)}},
a0:function(a,b){H.i(a,"$ib",[T.aL],"$ab")
if(b!=null)if(!C.a.ae(a,b)){b.a=a.length
C.a.h(a,b)}},
a8:function(a,b){},
b8:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=this,i="varying vec3 txtCube;\n",h=j.a
if(h==null){h=A.kB(j.d)
u=h.e
t=H.k(a.fr.j(0,u),"$idB")
if(t==null){s=a.a
t=new A.dB(s,u)
t.aQ(s,u)
t.z=h
u=h.d
s=(u?"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\nuniform mat4 txtCubeMat;\n":"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\n")+"\nattribute vec3 posAttr;\nattribute vec3 normAttr;\n"
r=h.b
if(r)s+="attribute vec3 binmAttr;\n"
s=(u?s+"attribute vec3 txtCubeAttr;\n":s)+"\nvarying vec3 normalVec;\n"
if(r)s+="varying vec3 binormalVec;\n"
s=(u?s+i:s)+"\nvoid main()\n{\n   normalVec = normalize(viewObjMat*vec4(normAttr, 0.0)).xyz;\n"
if(r)s+="   binormalVec = normalize(viewObjMat*vec4(binmAttr, 0.0)).xyz;\n"
s=(u?s+"   txtCube = (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":s)+"   gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n"
r=r?"precision mediump float;\n\nvarying vec3 normalVec;\nvarying vec3 binormalVec;\n":"precision mediump float;\n\nvarying vec3 normalVec;\n"
r=(u?r+i:r)+"\n"
if(h.a.c)r+="uniform samplerCube bumpTxt;\n"
r+="\nvec3 normal()\n{\n"
h=h.a
q=h.a
if(!q)p=h.c
else p=!0
if(!p||q)r+="   return normalize(normalVec);\n"
else r+="   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n   vec3 n = normalize(normalVec);\n   vec3 b = normalize(binormalVec);\n   vec3 c = normalize(cross(b, n));\n   b = cross(n, c);\n   mat3 mat = mat3( b.x,  b.y,  b.z,\n                   -c.x, -c.y, -c.z,\n                    n.x,  n.y,  n.z);\n   return mat * normalize(2.0*color - 1.0);\n"
r+="}\n\nvoid main()\n{\n   vec3 norm = normal();\n   norm = -norm*0.5 + 0.5;\n   gl_FragColor = vec4(norm.x, 1.0-norm.y, norm.z, 1.0);\n}\n"
t.b3(0,s.charCodeAt(0)==0?s:s,r.charCodeAt(0)==0?r:r)
t.Q=t.x.j(0,"posAttr")
t.cx=t.x.j(0,"normAttr")
t.ch=t.x.j(0,"binmAttr")
t.cy=t.x.j(0,"txt2DAttr")
t.db=t.x.j(0,"txtCubeAttr")
t.dx=H.m(t.y.A(0,"viewObjMat"),"$ia_")
t.dy=H.m(t.y.A(0,"projViewObjMat"),"$ia_")
if(u)t.fx=H.m(t.y.A(0,"txtCubeMat"),"$ia_")
if(h.c)t.go=H.m(t.y.A(0,"bumpTxt"),"$ia8")
a.aV(t)}h=j.a=t
b.e=null}o=h.z
n=o.f
h=b.e
if(!(h instanceof Z.bg))h=b.e=null
if(h==null||!h.d.p(0,n)){b.d.ak()
h=o.b
if(h)b.d.aJ()
u=o.d
if(u)b.d.bk()
m=b.d.aW(new Z.bK(a.a),n)
m.a5($.ag()).e=j.a.Q.c
m.a5($.aQ()).e=j.a.cx.c
if(h)m.a5($.aP()).e=j.a.ch.c
if(u)m.a5($.aR()).e=j.a.db.c
b.e=m}l=H.d([],[T.aL])
j.a.I(a)
h=j.a
u=a.ge_()
h=h.dx
h.toString
h.Z(u.S(0,!0))
u=j.a
h=a.gcf()
u=u.dy
u.toString
u.Z(h.S(0,!0))
if(o.d){h=j.a
u=j.c
h=h.fx
h.toString
h.Z(u.S(0,!0))}if(o.a.c){j.a0(l,j.f)
h=j.a
u=j.f
h=h.go
if(u!=null&&u.d>=6)h.cs(u)}for(k=0;k<l.length;++k)l[k].I(a)
h=b.e
h.I(a)
h.a6(a)
h.a3(a)
for(h=a.a,k=0;k<l.length;++k){u=l[k]
if(u.c){u.c=!1
h.activeTexture(33984+u.a)
h.bindTexture(34067,null)}}u=j.a
u.toString
h.useProgram(null)
u.x.b_()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return A.kB(this.d).e}}
O.dK.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.H():u},
G:function(a){var u
H.k(a,"$ix")
u=this.e
if(u!=null)u.B(a)},
W:function(){return this.G(null)},
a8:function(a,b){},
b8:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.k(a.fr.j(0,n),"$idL")
if(u==null){t=a.a
u=new A.dL(t,n)
u.aQ(t,n)
u.b3(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.m(u.y.j(0,"fov"),"$ia7")
u.ch=H.m(u.y.j(0,"ratio"),"$ia7")
u.cx=H.m(u.y.j(0,"boxClr"),"$iR")
u.cy=H.m(u.y.j(0,"boxTxt"),"$ia8")
u.db=H.m(u.y.j(0,"viewMat"),"$ia_")
a.aV(u)}o.a=u}if(b.e==null){t=b.d.aW(new Z.bK(a.a),$.ag())
t.a5($.ag()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.I(a)}t=a.d
s=a.c
r=o.a
r.I(a)
q=o.b
p=r.Q
C.c.a4(p.a,p.d,q)
q=r.ch
C.c.a4(q.a,q.d,t/s)
s=o.c
r.cy.cs(s)
s=o.d
t=r.cx
C.c.T(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga1(s).c7(0)
r=r.db
r.toString
r.Z(s.S(0,!0))
t=b.e
if(t instanceof Z.bg){t.I(a)
t.a6(a)
t.a3(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.b_()
t=o.c
if(t!=null)t.a3(a)}}
O.bH.prototype={}
O.dS.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.H():u},
G:function(a){var u
H.k(a,"$ix")
u=this.e
if(u!=null)u.B(a)},
W:function(){return this.G(null)},
fv:function(a,b){var u,t,s,r,q,p,o
H.i(b,"$ie",[O.aM],"$ae")
for(u=b.length,t=this.gab(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.f
if(o==null){o=new D.bw()
o.sa9(null)
o.saH(null)
o.c=null
o.d=0
p.f=o}H.l(t,s)
if(o.a==null)o.sa9(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.W()},
fz:function(a,b){var u,t
H.i(b,"$ie",[O.aM],"$ae")
for(u=b.gR(b),t=this.gab();u.C();)u.gK(u).gl().F(0,t)
this.W()},
sdg:function(a){var u=this.f
if(u!==a){this.f=a
u=new D.A("blend",u,a,[A.bt])
u.b=!0
this.G(u)}},
a8:function(a,b){},
eV:function(a){a=C.d.a7(a+3,4)*4
if(a<=0)return 4
return a},
b8:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.eV(h.c.a.length)
if(g!==h.d||h.f!=h.r){h.d=g
h.r=h.f
h.b=null}u=h.b
if(u==null){u=h.f
t="TextureLayout_"+g+"_"+C.d.i(u.a)
s=H.k(a.fr.j(0,t),"$idT")
if(s==null){s=A.mm(g,u,a.a)
a.aV(s)}h.b=s
u=s}if(b.e==null){u=b.d.aW(new Z.bK(a.a),$.ag())
t=u.a5($.ag())
r=h.b
t.e=r.z.c
b.e=u
u=r}u.I(a)
u=T.aL
q=H.d([],[u])
for(t=[P.y],u=[u],p=0,o=0;r=h.c.a,o<r.length;++o){n=r[o]
if(n!=null&&n.a!=null){r=n.a
H.i(q,"$ib",u,"$ab")
if(r!=null)if(!C.a.ae(q,r)){r.a=q.length
C.a.h(q,r)}r=h.b
m=n.a
r=r.cx
if(p>=r.length)return H.c(r,p)
r=r[p]
l=m==null||!m.d
k=r.a
r=r.d
if(l)k.uniform1i(r,0)
else k.uniform1i(r,m.a)
r=h.b
m=n.b
r=r.cy
if(p>=r.length)return H.c(r,p)
r=r[p]
if(m==null){m=$.h9
if(m==null){m=new V.ad(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.h9=m}}j=new Float32Array(H.c4(H.i(m.S(0,!0),"$ib",t,"$ab")))
C.c.cp(r.a,r.d,!1,j)
r=h.b
i=n.c
r.toString
if(i==null){m=$.cC
if(m==null){m=V.cB(0,0,1,1)
$.cC=m
i=m}else i=m}m=r.db
if(p>=m.length)return H.c(m,p)
m=m[p]
C.c.br(m.a,m.d,i.a,i.b)
r=r.dx
if(p>=r.length)return H.c(r,p)
r=r[p]
C.c.br(r.a,r.d,i.c,i.d)
r=h.b
i=n.d
r.toString
if(i==null){m=$.cC
if(m==null){m=V.cB(0,0,1,1)
$.cC=m
i=m}else i=m}m=r.dy
if(p>=m.length)return H.c(m,p)
m=m[p]
C.c.br(m.a,m.d,i.a,i.b)
r=r.fr
if(p>=r.length)return H.c(r,p)
r=r[p]
C.c.br(r.a,r.d,i.c,i.d)
r=h.b
m=n.e
r=r.fx
if(p>=r.length)return H.c(r,p)
r=r[p]
m=H.C(m)?1:0
C.c.aM(r.a,r.d,m);++p}}u=h.b.Q
C.c.aM(u.a,u.d,p)
u=h.b
t=h.a
u.ch.e4(t)
for(o=0;o<q.length;++o)q[o].I(a)
u=b.e
if(u instanceof Z.bg){u.I(a)
u.a6(a)
u.a3(a)}else b.e=null
u=h.b
u.toString
t=a.a
t.useProgram(null)
u.x.b_()
for(o=0;o<q.length;++o){u=q[o]
if(u.c){u.c=!1
t.activeTexture(33984+u.a)
t.bindTexture(3553,null)}}},
seL:function(a){this.c=H.i(a,"$iS",[O.aM],"$aS")}}
O.aM.prototype={
gl:function(){var u=this.f
return u==null?this.f=D.H():u},
G:function(a){var u
H.k(a,"$ix")
u=this.f
if(u!=null)u.B(a)},
W:function(){return this.G(null)}}
T.aL.prototype={}
T.dR.prototype={}
T.i1.prototype={
gl:function(){var u=this.y
return u==null?this.y=D.H():u},
I:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}}
T.cH.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.H():u},
I:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
a3:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.i2.prototype={
dJ:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.cH()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aG(u,k,r,34069,!1,!1)
t.aG(u,k,o,34070,!1,!1)
t.aG(u,k,q,34071,!1,!1)
t.aG(u,k,n,34072,!1,!1)
t.aG(u,k,p,34073,!1,!1)
t.aG(u,k,m,34074,!1,!1)
return u},
i9:function(a){return this.dJ(a,".png")},
aG:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.n
W.a9(t,"load",H.l(new T.i3(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
hi:function(a,b,c){var u,t,s,r
b=V.cZ(b)
u=V.cZ(a.width)
t=V.cZ(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jJ()
s.width=u
s.height=t
r=H.k(C.h.e1(s,"2d"),"$icj")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.n8(r.getImageData(0,0,s.width,s.height))}}}
T.i3.prototype={
$1:function(a){var u=this,t=u.a,s=t.hi(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.c.iB(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.bY()}++t.e},
$S:15}
V.f_.prototype={
aL:function(a,b){return!0},
i:function(a){return"all"},
$ibk:1}
V.bk.prototype={}
V.dt.prototype={
aL:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)if(u[s].aL(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sat:function(a){this.a=H.i(a,"$ib",[V.bk],"$ab")},
$ibk:1}
V.bm.prototype={
aL:function(a,b){return!this.ea(0,b)},
i:function(a){return"!["+this.cv(0)+"]"}}
V.hG.prototype={
ee:function(a){var u,t
if(a.a.length<=0)throw H.h(P.t("May not create a SetMatcher with zero characters."))
u=new H.Z([P.p,P.a2])
for(t=new H.dr(a,a.gk(a),[H.aG(a,"u",0)]);t.C();)u.n(0,t.d,!0)
this.shj(u)},
aL:function(a,b){return this.a.dn(0,b)},
i:function(a){var u=this.a
return P.jY(new H.dq(u,[H.z(u,0)]))},
shj:function(a){this.a=H.i(a,"$iE",[P.p,P.a2],"$aE")},
$ibk:1}
V.cE.prototype={
u:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cJ(this.a.N(0,b))
r.sat(H.d([],[V.bk]))
r.c=!1
C.a.h(this.c,r)
return r},
i1:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.aL(0,a))return r}return},
i:function(a){return this.b},
shE:function(a){this.c=H.i(a,"$ib",[V.cJ],"$ab")}}
V.dV.prototype={
i:function(a){var u=H.lo(this.b,"\n","\\n"),t=H.lo(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cI.prototype={
i:function(a){return this.b},
she:function(a){var u=P.o
this.c=H.i(a,"$iE",[u,u],"$aE")}}
V.i6.prototype={
N:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cE(this,b)
u.shE(H.d([],[V.cJ]))
u.d=null
this.a.n(0,b,u)}return u},
b9:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cI(a)
u=P.o
t.she(new H.Z([u,u]))
this.b.n(0,a,t)}return t},
iH:function(a){var u,t,s,r,q,p,o,n,m=H.d([],[V.dV]),l=this.c,k=[P.p],j=H.d([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.e.be(a,s)
q=l.i1(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.jY(j)
throw H.h(P.t("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.d([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.jY(j)
o=l.d
n=o.c.j(0,p)
t=new V.dV(n==null?o.b:n,p,s)}++s}}},
shu:function(a){this.a=H.i(a,"$iE",[P.o,V.cE],"$aE")},
shx:function(a){this.b=H.i(a,"$iE",[P.o,V.cI],"$aE")}}
V.cJ.prototype={
i:function(a){return this.b.b+": "+this.cv(0)}}
X.f8.prototype={
gl:function(){var u=this.fr
return u==null?this.fr=D.H():u},
a_:function(a){var u=this.fr
if(u!=null)u.B(a)},
sai:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.A("width",u,b,[P.p])
u.b=!0
t.a_(u)}},
saf:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.A("height",u,b,[P.p])
u.b=!0
t.a_(u)}},
I:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){u=a.a
t=u.drawingBufferWidth
s=h.r
if(typeof t!=="number")return t.w()
h.sai(0,C.d.X(t*s))
u=u.drawingBufferHeight
s=h.x
if(typeof u!=="number")return u.w()
h.saf(0,C.d.X(u*s))}if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=H.X(u.getParameter(3379))
p=V.cZ(s)
o=V.cZ(r)
q=V.cZ(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.c.dW(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.kM(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.bY()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.bY()
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
a.c=C.b.X(s*h.a)
r=t.d
a.d=C.b.X(r*h.b)
l=t.a
k=h.c
j=C.b.X(l*k)
t=t.b
l=h.d
u.viewport(j,C.b.X(t*l),C.b.X(s*k),C.b.X(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
a3:function(a){a.a.bindFramebuffer(36160,null)}}
X.bR.prototype={$ibV:1}
X.fF.prototype={
gl:function(){var u=this.x
return u==null?this.x=D.H():u},
I:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.G(u)
q=C.b.X(r*u)
r=s.b
if(typeof t!=="number")return H.G(t)
p=C.b.X(r*t)
r=C.b.X(s.c*u)
a.c=r
s=C.b.X(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)},
a3:function(a){}}
X.fH.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.H():u},
I:function(a){var u
a.cy.bo(V.b2())
u=V.b2()
a.db.bo(u)},
a3:function(a){a.cy.az()
a.db.az()},
$ibV:1,
$ibR:1}
X.dD.prototype={
gl:function(){var u=this.f
return u==null?this.f=D.H():u},
a_:function(a){var u
H.k(a,"$ix")
u=this.f
if(u!=null)u.B(a)},
eq:function(){return this.a_(null)},
sb5:function(a){var u,t,s=this
if(!J.K(s.b,a)){u=s.b
if(u!=null)u.gl().F(0,s.gcD())
t=s.b
s.b=a
if(a!=null)a.gl().h(0,s.gcD())
u=new D.A("mover",t,s.b,[U.af])
u.b=!0
s.a_(u)}},
I:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.bl(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bo(k)
r=$.kF
if(r==null){r=V.kH()
q=V.k0()
p=$.kW
r=V.ky(r,q,p==null?$.kW=new V.F(0,0,-1):p)
$.kF=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aN(0,a,s)
if(t!=null)u=t.w(0,u)}a.db.bo(u)},
a3:function(a){a.cy.az()
a.db.az()},
$ibV:1,
$ibR:1}
X.cG.prototype={}
V.jC.prototype={
$1:function(a){var u
H.k(a,"$iba")
u=C.b.dY(this.a.gi3(),2)
if(u!=="0.00")P.kg(u+" fps")},
$S:30}
V.hK.prototype={
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
W.a9(q,"scroll",H.l(new V.hM(o),{func:1,ret:-1,args:[r]}),!1,r)},
de:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.i(a,"$ib",[P.o],"$ab")
this.hm()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.iH(C.a.i7(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.v)(s),++q){p=s[q]
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
if(H.nu(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=H.Q(m[1])
l.textContent=H.Q(m[0])
t.appendChild(l)}else{k=P.mz(C.I,n,C.p,!1)
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
hm:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.i6()
t=P.o
u.shu(new H.Z([t,V.cE]))
u.shx(new H.Z([t,V.cI]))
u.c=null
u.c=u.N(0,q)
t=u.N(0,q).u(0,p)
s=V.ai(new H.a4("*"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,p).u(0,p)
s=new V.bm()
r=[V.bk]
s.sat(H.d([],r))
C.a.h(t.a,s)
t=V.ai(new H.a4("*"))
C.a.h(s.a,t)
t=u.N(0,p).u(0,"BoldEnd")
s=V.ai(new H.a4("*"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,q).u(0,o)
s=V.ai(new H.a4("_"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,o).u(0,o)
s=new V.bm()
s.sat(H.d([],r))
C.a.h(t.a,s)
t=V.ai(new H.a4("_"))
C.a.h(s.a,t)
t=u.N(0,o).u(0,n)
s=V.ai(new H.a4("_"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,q).u(0,m)
s=V.ai(new H.a4("`"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,m).u(0,m)
s=new V.bm()
s.sat(H.d([],r))
C.a.h(t.a,s)
t=V.ai(new H.a4("`"))
C.a.h(s.a,t)
t=u.N(0,m).u(0,"CodeEnd")
s=V.ai(new H.a4("`"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,q).u(0,l)
s=V.ai(new H.a4("["))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,l).u(0,k)
s=V.ai(new H.a4("|"))
C.a.h(t.a,s)
s=u.N(0,l).u(0,j)
t=V.ai(new H.a4("]"))
C.a.h(s.a,t)
s.c=!0
s=u.N(0,l).u(0,l)
t=new V.bm()
t.sat(H.d([],r))
C.a.h(s.a,t)
s=V.ai(new H.a4("|]"))
C.a.h(t.a,s)
s=u.N(0,k).u(0,j)
t=V.ai(new H.a4("]"))
C.a.h(s.a,t)
s.c=!0
s=u.N(0,k).u(0,k)
t=new V.bm()
t.sat(H.d([],r))
C.a.h(s.a,t)
s=V.ai(new H.a4("|]"))
C.a.h(t.a,s)
C.a.h(u.N(0,q).u(0,i).a,new V.f_())
s=u.N(0,i).u(0,i)
t=new V.bm()
t.sat(H.d([],r))
C.a.h(s.a,t)
s=V.ai(new H.a4("*_`["))
C.a.h(t.a,s)
s=u.N(0,"BoldEnd")
s.d=s.a.b9(p)
s=u.N(0,n)
s.d=s.a.b9(o)
s=u.N(0,"CodeEnd")
s.d=s.a.b9(m)
s=u.N(0,j)
s.d=s.a.b9("Link")
s=u.N(0,i)
s.d=s.a.b9(i)
this.b=u}}
V.hM.prototype={
$1:function(a){P.kP(C.k,new V.hL(this.a))},
$S:15}
V.hL.prototype={
$0:function(){var u=C.b.X(document.documentElement.scrollTop),t=this.a.style,s=H.j(-0.01*u)+"px"
t.top=s},
$S:1};(function aliases(){var u=J.a.prototype
u.e8=u.i
u=J.dm.prototype
u.e9=u.i
u=O.dw.prototype
u.cw=u.au
u=O.b1.prototype
u.cz=u.au
u=V.dt.prototype
u.ea=u.aL
u.cv=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"n2","ms",12)
u(P,"n3","mt",12)
u(P,"n4","mu",12)
t(P,"la","n0",3)
var n
s(n=E.am.prototype,"gdR",0,0,null,["$1","$0"],["dS","ik"],0,0)
s(n,"gdP",0,0,null,["$1","$0"],["dQ","ij"],0,0)
s(n,"gdN",0,0,null,["$1","$0"],["dO","ig"],0,0)
r(n,"gic","ie",7)
r(n,"gih","ii",7)
s(n=E.dU.prototype,"gcA",0,0,null,["$1","$0"],["cC","cB"],0,0)
q(n,"gix","dU",3)
p(n=X.e0.prototype,"gfA","fB",9)
p(n,"gfh","fi",9)
p(n,"gfn","fo",4)
p(n,"gfE","fF",23)
p(n,"gfC","fD",23)
p(n,"gfI","fJ",4)
p(n,"gfM","fN",4)
p(n,"gfs","ft",4)
p(n,"gfK","fL",4)
p(n,"gfp","fq",4)
p(n,"gfO","fP",27)
p(n,"gfQ","fR",9)
p(n,"gh5","h6",10)
p(n,"gh1","h2",10)
p(n,"gh3","h4",10)
s(D.bu.prototype,"gei",0,0,null,["$1","$0"],["ar","ej"],0,0)
s(n=D.dp.prototype,"gcX",0,0,null,["$1","$0"],["cY","fG"],0,0)
p(n,"gfS","fT",42)
r(n,"gfb","fc",24)
r(n,"gfW","fX",24)
o(V.U.prototype,"gk","c9",22)
o(V.F.prototype,"gk","c9",22)
s(n=U.cr.prototype,"gbd",0,0,null,["$1","$0"],["P","al"],0,0)
r(n,"gek","el",20)
r(n,"gfU","fV",20)
s(n=U.e1.prototype,"gbd",0,0,null,["$1","$0"],["P","al"],0,0)
p(n,"gf3","f4",2)
p(n,"gf5","f6",2)
p(n,"gf7","f8",2)
p(n,"gf_","f0",2)
p(n,"gf1","f2",2)
p(n,"ghC","hD",2)
p(n,"ghA","hB",2)
p(n,"ghy","hz",2)
p(U.e2.prototype,"gf9","fa",2)
s(n=M.d6.prototype,"gU",0,0,null,["$1","$0"],["V","aR"],0,0)
r(n,"gfY","fZ",19)
r(n,"gh_","h0",19)
s(M.d9.prototype,"gU",0,0,null,["$1","$0"],["V","aR"],0,0)
s(n=M.df.prototype,"gU",0,0,null,["$1","$0"],["V","aR"],0,0)
r(n,"gfj","fk",7)
r(n,"gfl","fm",7)
s(n=O.du.prototype,"gab",0,0,null,["$1","$0"],["G","W"],0,0)
s(n,"ghg",0,0,null,["$1","$0"],["d2","hh"],0,0)
r(n,"gfd","fe",17)
r(n,"gff","fg",17)
s(O.dA.prototype,"gab",0,0,null,["$1","$0"],["G","W"],0,0)
s(O.dK.prototype,"gab",0,0,null,["$1","$0"],["G","W"],0,0)
s(n=O.dS.prototype,"gab",0,0,null,["$1","$0"],["G","W"],0,0)
r(n,"gfu","fv",16)
r(n,"gfw","fz",16)
s(O.aM.prototype,"gab",0,0,null,["$1","$0"],["G","W"],0,0)
s(X.dD.prototype,"gcD",0,0,null,["$1","$0"],["a_","eq"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.N,null)
s(P.N,[H.jS,J.a,J.ao,P.ej,P.e,H.dr,P.b_,H.bT,H.e_,H.ib,P.bv,H.ck,H.eA,P.ah,H.fP,H.fQ,H.fK,P.eG,P.be,P.aD,P.e4,P.hU,P.cF,P.hV,P.ba,P.al,P.jk,P.je,P.cN,P.j8,P.u,P.cl,P.jj,P.a2,P.ax,P.aa,P.aX,P.hs,P.dO,P.ec,P.fE,P.b,P.E,P.M,P.aq,P.o,P.bG,W.fh,W.B,W.dh,P.eL,P.j9,O.S,O.cu,E.f9,E.am,E.hy,E.dU,Z.e3,Z.bK,Z.bg,Z.by,Z.av,D.fc,D.bw,D.x,X.d5,X.dn,X.fM,X.fT,X.as,X.hg,X.i7,X.e0,D.bu,D.ac,D.dE,D.dN,V.Y,V.a0,V.fu,V.ct,V.ad,V.a3,V.a1,V.aI,V.bF,V.U,V.F,U.e1,U.e2,M.d9,M.df,M.at,A.d1,A.f3,A.ab,A.ay,A.az,A.aA,A.h_,A.c0,A.c1,A.c2,A.ho,A.bt,A.dX,A.ik,F.a6,F.fx,F.bj,F.fO,F.bE,F.dJ,F.hH,F.hI,F.hJ,F.an,F.ix,F.iy,F.iB,F.iD,F.iE,F.iF,O.bH,O.dw,O.h0,O.aM,T.i2,V.f_,V.bk,V.dt,V.hG,V.cE,V.dV,V.cI,V.i6,X.cG,X.bR,X.fH,X.dD,V.hK])
s(J.a,[J.fJ,J.dl,J.dm,J.aH,J.bB,J.bC,H.cx,W.f,W.eZ,W.d2,W.cj,W.aV,W.aW,W.O,W.e6,W.fl,W.fn,W.e8,W.de,W.ea,W.fp,W.n,W.ed,W.aZ,W.fG,W.ef,W.bx,W.fS,W.ha,W.ek,W.el,W.b3,W.em,W.ep,W.b4,W.et,W.ev,W.b7,W.ew,W.b8,W.eB,W.aJ,W.eE,W.i5,W.bb,W.eH,W.i9,W.iq,W.eM,W.eO,W.eQ,W.eS,W.eU,P.bi,P.eh,P.bn,P.er,P.hw,P.eC,P.bp,P.eJ,P.f4,P.e5,P.d3,P.di,P.dF,P.dH,P.bZ,P.dI,P.dQ,P.dY,P.ey])
s(J.dm,[J.ht,J.c3,J.bh])
t(J.jR,J.aH)
s(J.bB,[J.dk,J.dj])
t(P.fR,P.ej)
s(P.fR,[H.dZ,W.iR,W.iQ,P.fA])
t(H.a4,H.dZ)
s(P.e,[H.fs,H.fW,H.iJ])
s(P.b_,[H.fX,H.iK])
s(P.bv,[H.hp,H.fL,H.io,H.id,H.fb,H.hE,P.f2,P.dC,P.aT,P.ip,P.im,P.dP,P.ff,P.fk])
s(H.ck,[H.jF,H.hZ,H.jw,H.jx,H.jy,P.iN,P.iM,P.iO,P.iP,P.ji,P.jh,P.iW,P.j_,P.iX,P.iY,P.iZ,P.j2,P.j3,P.j1,P.j0,P.hW,P.hX,P.jq,P.jc,P.jb,P.jd,P.fV,P.fq,P.fr,W.hc,W.he,W.hD,W.hT,W.iV,P.js,P.fB,P.fC,P.f6,E.hz,E.hA,E.hB,E.i4,D.fv,D.fw,F.jl,F.jE,F.jt,F.iH,F.iG,F.iz,F.iA,O.h3,O.h4,O.h5,O.h6,O.h7,O.h8,T.i3,V.jC,V.hM,V.hL])
s(H.hZ,[H.hR,H.ch])
t(H.iL,P.f2)
t(P.fU,P.ah)
t(H.Z,P.fU)
t(H.dq,H.fs)
t(H.dx,H.cx)
s(H.dx,[H.cO,H.cQ])
t(H.cP,H.cO)
t(H.cw,H.cP)
t(H.cR,H.cQ)
t(H.dy,H.cR)
s(H.dy,[H.hh,H.hi,H.hj,H.hk,H.hl,H.dz,H.hm])
t(P.ja,P.jk)
t(P.j7,P.je)
t(P.d8,P.hV)
t(P.ft,P.cl)
t(P.ir,P.ft)
t(P.is,P.d8)
s(P.aa,[P.y,P.p])
s(P.aT,[P.bY,P.fI])
s(W.f,[W.J,W.fz,W.b6,W.cS,W.b9,W.aK,W.cU,W.iI,W.cL,P.f7,P.bQ])
s(W.J,[W.a5,W.bs])
s(W.a5,[W.r,P.q])
s(W.r,[W.f0,W.f1,W.bS,W.dc,W.fD,W.cs,W.hF])
s(W.aV,[W.cn,W.fi,W.fj])
t(W.fg,W.aW)
t(W.co,W.e6)
t(W.e9,W.e8)
t(W.dd,W.e9)
t(W.eb,W.ea)
t(W.fo,W.eb)
t(W.aY,W.d2)
t(W.ee,W.ed)
t(W.fy,W.ee)
t(W.eg,W.ef)
t(W.bU,W.eg)
t(W.bI,W.n)
s(W.bI,[W.b0,W.ae,W.aN])
t(W.hb,W.ek)
t(W.hd,W.el)
t(W.en,W.em)
t(W.hf,W.en)
t(W.eq,W.ep)
t(W.cy,W.eq)
t(W.eu,W.et)
t(W.hu,W.eu)
t(W.hC,W.ev)
t(W.cT,W.cS)
t(W.hO,W.cT)
t(W.ex,W.ew)
t(W.hP,W.ex)
t(W.hS,W.eB)
t(W.eF,W.eE)
t(W.i_,W.eF)
t(W.cV,W.cU)
t(W.i0,W.cV)
t(W.eI,W.eH)
t(W.i8,W.eI)
t(W.bd,W.ae)
t(W.eN,W.eM)
t(W.iS,W.eN)
t(W.e7,W.de)
t(W.eP,W.eO)
t(W.j4,W.eP)
t(W.eR,W.eQ)
t(W.eo,W.eR)
t(W.eT,W.eS)
t(W.jf,W.eT)
t(W.eV,W.eU)
t(W.jg,W.eV)
t(W.iT,P.hU)
t(W.k2,W.iT)
t(W.iU,P.cF)
t(P.ap,P.j9)
t(P.ei,P.eh)
t(P.fN,P.ei)
t(P.es,P.er)
t(P.hq,P.es)
t(P.eD,P.eC)
t(P.hY,P.eD)
t(P.eK,P.eJ)
t(P.ia,P.eK)
t(P.f5,P.e5)
t(P.hr,P.bQ)
t(P.ez,P.ey)
t(P.hQ,P.ez)
s(E.f9,[Z.d4,A.cD,T.aL])
s(D.x,[D.bz,D.bA,D.A,X.hv])
s(X.hv,[X.ds,X.bD,X.cv,X.dW])
s(O.S,[D.dp,U.cr,M.d6])
s(D.fc,[U.fe,U.af])
t(U.d7,U.af)
s(A.cD,[A.db,A.dv,A.dB,A.dL,A.dT])
s(A.dX,[A.aj,A.ih,A.ii,A.ij,A.ig,A.a7,A.au,A.R,A.c_,A.il,A.bJ,A.a_,A.aB,A.a8])
t(F.hN,F.fx)
t(F.ie,F.fO)
t(F.iC,F.iD)
t(F.hn,F.iE)
s(O.bH,[O.fm,O.du,O.dA,O.dK,O.dS])
s(O.dw,[O.fY,O.fZ,O.b1])
s(O.b1,[O.h1,O.h2])
s(T.aL,[T.dR,T.cH])
t(T.i1,T.dR)
s(V.dt,[V.bm,V.cJ])
s(X.cG,[X.f8,X.fF])
u(H.dZ,H.e_)
u(H.cO,P.u)
u(H.cP,H.bT)
u(H.cQ,P.u)
u(H.cR,H.bT)
u(P.ej,P.u)
u(W.e6,W.fh)
u(W.e8,P.u)
u(W.e9,W.B)
u(W.ea,P.u)
u(W.eb,W.B)
u(W.ed,P.u)
u(W.ee,W.B)
u(W.ef,P.u)
u(W.eg,W.B)
u(W.ek,P.ah)
u(W.el,P.ah)
u(W.em,P.u)
u(W.en,W.B)
u(W.ep,P.u)
u(W.eq,W.B)
u(W.et,P.u)
u(W.eu,W.B)
u(W.ev,P.ah)
u(W.cS,P.u)
u(W.cT,W.B)
u(W.ew,P.u)
u(W.ex,W.B)
u(W.eB,P.ah)
u(W.eE,P.u)
u(W.eF,W.B)
u(W.cU,P.u)
u(W.cV,W.B)
u(W.eH,P.u)
u(W.eI,W.B)
u(W.eM,P.u)
u(W.eN,W.B)
u(W.eO,P.u)
u(W.eP,W.B)
u(W.eQ,P.u)
u(W.eR,W.B)
u(W.eS,P.u)
u(W.eT,W.B)
u(W.eU,P.u)
u(W.eV,W.B)
u(P.eh,P.u)
u(P.ei,W.B)
u(P.er,P.u)
u(P.es,W.B)
u(P.eC,P.u)
u(P.eD,W.B)
u(P.eJ,P.u)
u(P.eK,W.B)
u(P.e5,P.ah)
u(P.ey,P.u)
u(P.ez,W.B)})();(function constants(){var u=hunkHelpers.makeConstList
C.h=W.bS.prototype
C.F=J.a.prototype
C.a=J.aH.prototype
C.G=J.dj.prototype
C.d=J.dk.prototype
C.l=J.dl.prototype
C.b=J.bB.prototype
C.e=J.bC.prototype
C.H=J.bh.prototype
C.J=W.cy.prototype
C.q=J.ht.prototype
C.c=P.bZ.prototype
C.m=J.c3.prototype
C.r=W.bd.prototype
C.t=W.cL.prototype
C.n=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.u=function() {
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
C.z=function(getTagFallback) {
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
C.v=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.w=function(hooks) {
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
C.y=function(hooks) {
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
C.x=function(hooks) {
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

C.A=new P.hs()
C.p=new P.ir()
C.B=new P.is()
C.f=new P.ja()
C.i=new A.bt(0,"ColorBlendType.Overwrite")
C.C=new A.bt(1,"ColorBlendType.Additive")
C.D=new A.bt(2,"ColorBlendType.Average")
C.j=new A.bt(3,"ColorBlendType.AlphaBlend")
C.k=new P.aX(0)
C.E=new P.aX(5e6)
C.I=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.p])})()
var v={mangledGlobalNames:{p:"int",y:"double",aa:"num",o:"String",a2:"bool",M:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.x]},{func:1,ret:P.M},{func:1,ret:-1,args:[D.x]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ae]},{func:1,ret:P.M,args:[F.a6]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.p,[P.e,E.am]]},{func:1,ret:-1,args:[P.p,P.p]},{func:1,ret:-1,args:[W.n]},{func:1,ret:-1,args:[W.aN]},{func:1,ret:P.M,args:[D.x]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.o,args:[P.p]},{func:1,ret:P.M,args:[,]},{func:1,ret:P.M,args:[W.n]},{func:1,ret:-1,args:[P.p,[P.e,O.aM]]},{func:1,ret:-1,args:[P.p,[P.e,V.ad]]},{func:1,ret:P.M,args:[F.an,P.y,P.y]},{func:1,ret:-1,args:[P.p,[P.e,M.at]]},{func:1,ret:-1,args:[P.p,[P.e,U.af]]},{func:1,ret:P.M,args:[,,]},{func:1,ret:P.y},{func:1,ret:-1,args:[W.b0]},{func:1,ret:-1,args:[P.p,[P.e,D.ac]]},{func:1,ret:P.M,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bd]},{func:1,args:[P.o]},{func:1,ret:P.M,args:[P.aa]},{func:1,ret:P.M,args:[P.ba]},{func:1,args:[,P.o]},{func:1,ret:P.M,args:[{func:1,ret:-1}]},{func:1,ret:V.a1,args:[P.y]},{func:1,ret:[P.aD,,],args:[,]},{func:1,ret:W.a5,args:[W.J]},{func:1,ret:P.a2,args:[W.J]},{func:1,ret:P.p,args:[A.ay,A.ay]},{func:1,ret:P.p,args:[A.az,A.az]},{func:1,ret:P.p,args:[A.aA,A.aA]},{func:1,args:[W.n]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:P.a2,args:[[P.e,D.ac]]},{func:1,ret:P.M,args:[,],opt:[P.aq]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aU=0
$.ci=null
$.km=null
$.k4=!1
$.lg=null
$.l8=null
$.lm=null
$.ju=null
$.jz=null
$.kd=null
$.c5=null
$.cX=null
$.cY=null
$.k5=!1
$.V=C.f
$.ar=[]
$.kx=null
$.h9=null
$.kG=null
$.cz=null
$.cC=null
$.kV=null
$.kY=null
$.kX=null
$.it=null
$.iu=null
$.iv=null
$.kW=null
$.kF=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nD","ls",function(){return H.lf("_$dart_dartClosure")})
u($,"nE","kh",function(){return H.lf("_$dart_js")})
u($,"nH","lt",function(){return H.bc(H.ic({
toString:function(){return"$receiver$"}}))})
u($,"nI","lu",function(){return H.bc(H.ic({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nJ","lv",function(){return H.bc(H.ic(null))})
u($,"nK","lw",function(){return H.bc(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nN","lz",function(){return H.bc(H.ic(void 0))})
u($,"nO","lA",function(){return H.bc(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nM","ly",function(){return H.bc(H.kR(null))})
u($,"nL","lx",function(){return H.bc(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nQ","lC",function(){return H.bc(H.kR(void 0))})
u($,"nP","lB",function(){return H.bc(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"o5","ki",function(){return P.mr()})
u($,"o6","lG",function(){return P.mf("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nZ","lF",function(){return Z.aC(0)})
u($,"nT","lD",function(){return Z.aC(511)})
u($,"o0","ag",function(){return Z.aC(1)})
u($,"o_","aQ",function(){return Z.aC(2)})
u($,"nV","aP",function(){return Z.aC(4)})
u($,"o1","bf",function(){return Z.aC(8)})
u($,"o2","aR",function(){return Z.aC(16)})
u($,"nW","d_",function(){return Z.aC(32)})
u($,"nX","d0",function(){return Z.aC(64)})
u($,"nY","lE",function(){return Z.aC(96)})
u($,"o3","ce",function(){return Z.aC(128)})
u($,"nU","br",function(){return Z.aC(256)})
u($,"nC","lr",function(){return new V.fu(1e-9)})
u($,"nB","L",function(){return $.lr()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cx,ArrayBufferView:H.cx,Float32Array:H.cw,Float64Array:H.cw,Int16Array:H.hh,Int32Array:H.hi,Int8Array:H.hj,Uint16Array:H.hk,Uint32Array:H.hl,Uint8ClampedArray:H.dz,CanvasPixelArray:H.dz,Uint8Array:H.hm,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLBaseElement:W.r,HTMLBodyElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLInputElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableCellElement:W.r,HTMLTableDataCellElement:W.r,HTMLTableHeaderCellElement:W.r,HTMLTableColElement:W.r,HTMLTableElement:W.r,HTMLTableRowElement:W.r,HTMLTableSectionElement:W.r,HTMLTemplateElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.eZ,HTMLAnchorElement:W.f0,HTMLAreaElement:W.f1,Blob:W.d2,HTMLCanvasElement:W.bS,CanvasRenderingContext2D:W.cj,CDATASection:W.bs,CharacterData:W.bs,Comment:W.bs,ProcessingInstruction:W.bs,Text:W.bs,CSSNumericValue:W.cn,CSSUnitValue:W.cn,CSSPerspective:W.fg,CSSCharsetRule:W.O,CSSConditionRule:W.O,CSSFontFaceRule:W.O,CSSGroupingRule:W.O,CSSImportRule:W.O,CSSKeyframeRule:W.O,MozCSSKeyframeRule:W.O,WebKitCSSKeyframeRule:W.O,CSSKeyframesRule:W.O,MozCSSKeyframesRule:W.O,WebKitCSSKeyframesRule:W.O,CSSMediaRule:W.O,CSSNamespaceRule:W.O,CSSPageRule:W.O,CSSRule:W.O,CSSStyleRule:W.O,CSSSupportsRule:W.O,CSSViewportRule:W.O,CSSStyleDeclaration:W.co,MSStyleCSSProperties:W.co,CSS2Properties:W.co,CSSImageValue:W.aV,CSSKeywordValue:W.aV,CSSPositionValue:W.aV,CSSResourceValue:W.aV,CSSURLImageValue:W.aV,CSSStyleValue:W.aV,CSSMatrixComponent:W.aW,CSSRotation:W.aW,CSSScale:W.aW,CSSSkew:W.aW,CSSTranslation:W.aW,CSSTransformComponent:W.aW,CSSTransformValue:W.fi,CSSUnparsedValue:W.fj,DataTransferItemList:W.fl,HTMLDivElement:W.dc,DOMException:W.fn,ClientRectList:W.dd,DOMRectList:W.dd,DOMRectReadOnly:W.de,DOMStringList:W.fo,DOMTokenList:W.fp,Element:W.a5,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.aY,FileList:W.fy,FileWriter:W.fz,HTMLFormElement:W.fD,Gamepad:W.aZ,History:W.fG,HTMLCollection:W.bU,HTMLFormControlsCollection:W.bU,HTMLOptionsCollection:W.bU,ImageData:W.bx,HTMLImageElement:W.cs,KeyboardEvent:W.b0,Location:W.fS,MediaList:W.ha,MIDIInputMap:W.hb,MIDIOutputMap:W.hd,MimeType:W.b3,MimeTypeArray:W.hf,PointerEvent:W.ae,MouseEvent:W.ae,DragEvent:W.ae,Document:W.J,DocumentFragment:W.J,HTMLDocument:W.J,ShadowRoot:W.J,XMLDocument:W.J,Attr:W.J,DocumentType:W.J,Node:W.J,NodeList:W.cy,RadioNodeList:W.cy,Plugin:W.b4,PluginArray:W.hu,RTCStatsReport:W.hC,HTMLSelectElement:W.hF,SourceBuffer:W.b6,SourceBufferList:W.hO,SpeechGrammar:W.b7,SpeechGrammarList:W.hP,SpeechRecognitionResult:W.b8,Storage:W.hS,CSSStyleSheet:W.aJ,StyleSheet:W.aJ,TextTrack:W.b9,TextTrackCue:W.aK,VTTCue:W.aK,TextTrackCueList:W.i_,TextTrackList:W.i0,TimeRanges:W.i5,Touch:W.bb,TouchEvent:W.aN,TouchList:W.i8,TrackDefaultList:W.i9,CompositionEvent:W.bI,FocusEvent:W.bI,TextEvent:W.bI,UIEvent:W.bI,URL:W.iq,VideoTrackList:W.iI,WheelEvent:W.bd,Window:W.cL,DOMWindow:W.cL,CSSRuleList:W.iS,ClientRect:W.e7,DOMRect:W.e7,GamepadList:W.j4,NamedNodeMap:W.eo,MozNamedAttrMap:W.eo,SpeechRecognitionResultList:W.jf,StyleSheetList:W.jg,SVGLength:P.bi,SVGLengthList:P.fN,SVGNumber:P.bn,SVGNumberList:P.hq,SVGPointList:P.hw,SVGStringList:P.hY,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGScriptElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGTransform:P.bp,SVGTransformList:P.ia,AudioBuffer:P.f4,AudioParamMap:P.f5,AudioTrackList:P.f7,AudioContext:P.bQ,webkitAudioContext:P.bQ,BaseAudioContext:P.bQ,OfflineAudioContext:P.hr,WebGLBuffer:P.d3,WebGLFramebuffer:P.di,WebGLProgram:P.dF,WebGLRenderbuffer:P.dH,WebGL2RenderingContext:P.bZ,WebGLShader:P.dI,WebGLTexture:P.dQ,WebGLUniformLocation:P.dY,SQLResultSetRowList:P.hQ})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dx.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
H.dy.$nativeSuperclassTag="ArrayBufferView"
W.cS.$nativeSuperclassTag="EventTarget"
W.cT.$nativeSuperclassTag="EventTarget"
W.cU.$nativeSuperclassTag="EventTarget"
W.cV.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(S.li,[])
else S.li([])})})()
//# sourceMappingURL=test.dart.js.map
