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
a[c]=function(){a[c]=function(){H.ol(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kM"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kM"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kM(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kt:function kt(){},
n3:function(a,b,c,d){P.i_(b,"start")
return new H.it(a,b,c,[d])},
l6:function(){return new P.cd("No element")},
mD:function(){return new P.cd("Too many elements")},
mC:function(){return new P.cd("Too few elements")},
eb:function(a,b,c,d,e){H.i(a,"$ib",[e],"$ab")
H.m(d,{func:1,ret:P.q,args:[e,e]})
if(c-b<=32)H.n1(a,b,c,d,e)
else H.n0(a,b,c,d,e)},
n1:function(a,b,c,d,e){var u,t,s,r,q
H.i(a,"$ib",[e],"$ab")
H.m(d,{func:1,ret:P.q,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.h(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.h(a,r)
r=J.aY(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.h(a,q)
C.a.l(a,s,a[q])
s=q}C.a.l(a,s,t)}},
n0:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.i(a2,"$ib",[a6],"$ab")
H.m(a5,{func:1,ret:P.q,args:[a6,a6]})
u=C.d.a1(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.d.a1(a3+a4,2)
q=r-u
p=r+u
o=a2.length
if(t<0||t>=o)return H.h(a2,t)
n=a2[t]
if(q<0||q>=o)return H.h(a2,q)
m=a2[q]
if(r<0||r>=o)return H.h(a2,r)
l=a2[r]
if(p<0||p>=o)return H.h(a2,p)
k=a2[p]
if(s<0||s>=o)return H.h(a2,s)
j=a2[s]
if(J.aY(a5.$2(n,m),0)){i=m
m=n
n=i}if(J.aY(a5.$2(k,j),0)){i=j
j=k
k=i}if(J.aY(a5.$2(n,l),0)){i=l
l=n
n=i}if(J.aY(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.aY(a5.$2(n,k),0)){i=k
k=n
n=i}if(J.aY(a5.$2(l,k),0)){i=k
k=l
l=i}if(J.aY(a5.$2(m,j),0)){i=j
j=m
m=i}if(J.aY(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.aY(a5.$2(k,j),0)){i=j
j=k
k=i}C.a.l(a2,t,n)
C.a.l(a2,r,l)
C.a.l(a2,s,j)
if(a3<0||a3>=a2.length)return H.h(a2,a3)
C.a.l(a2,q,a2[a3])
if(a4<0||a4>=a2.length)return H.h(a2,a4)
C.a.l(a2,p,a2[a4])
h=a3+1
g=a4-1
if(J.V(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.h(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.af()
if(d<0){if(f!==h){if(h>=a2.length)return H.h(a2,h)
C.a.l(a2,f,a2[h])
C.a.l(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.h(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.aJ()
if(d>0){--g
continue}else{c=g-1
o=a2.length
if(d<0){if(h>=o)return H.h(a2,h)
C.a.l(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.h(a2,g)
C.a.l(a2,h,a2[g])
C.a.l(a2,g,e)
g=c
h=b
break}else{if(g>=o)return H.h(a2,g)
C.a.l(a2,f,a2[g])
C.a.l(a2,g,e)
g=c
break}}}}a=!0}else{for(f=h;f<=g;++f){if(f>=a2.length)return H.h(a2,f)
e=a2[f]
a0=a5.$2(e,m)
if(typeof a0!=="number")return a0.af()
if(a0<0){if(f!==h){if(h>=a2.length)return H.h(a2,h)
C.a.l(a2,f,a2[h])
C.a.l(a2,h,e)}++h}else{a1=a5.$2(e,k)
if(typeof a1!=="number")return a1.aJ()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.h(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.aJ()
if(d>0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.h(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.af()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.h(a2,h)
C.a.l(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.h(a2,g)
C.a.l(a2,h,a2[g])
C.a.l(a2,g,e)
h=b}else{if(g>=o)return H.h(a2,g)
C.a.l(a2,f,a2[g])
C.a.l(a2,g,e)}g=c
break}}}}a=!1}o=h-1
if(o>=a2.length)return H.h(a2,o)
C.a.l(a2,a3,a2[o])
C.a.l(a2,o,m)
o=g+1
if(o<0||o>=a2.length)return H.h(a2,o)
C.a.l(a2,a4,a2[o])
C.a.l(a2,o,k)
H.eb(a2,a3,h-2,a5,a6)
H.eb(a2,g+2,a4,a5,a6)
if(a)return
if(h<t&&g>s){while(!0){if(h>=a2.length)return H.h(a2,h)
if(!J.V(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.h(a2,g)
if(!J.V(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.h(a2,f)
e=a2[f]
if(a5.$2(e,m)===0){if(f!==h){if(h>=a2.length)return H.h(a2,h)
C.a.l(a2,f,a2[h])
C.a.l(a2,h,e)}++h}else if(a5.$2(e,k)===0)for(;!0;){if(g<0||g>=a2.length)return H.h(a2,g)
if(a5.$2(a2[g],k)===0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.h(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.af()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.h(a2,h)
C.a.l(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.h(a2,g)
C.a.l(a2,h,a2[g])
C.a.l(a2,g,e)
h=b}else{if(g>=o)return H.h(a2,g)
C.a.l(a2,f,a2[g])
C.a.l(a2,g,e)}g=c
break}}}H.eb(a2,h,g,a5,a6)}else H.eb(a2,h,g,a5,a6)},
a3:function a3(a){this.a=a},
fV:function fV(){},
c6:function c6(){},
it:function it(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cK:function cK(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hm:function hm(a,b,c){this.a=a
this.b=b
this.$ti=c},
hn:function hn(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ho:function ho(a,b,c){this.a=a
this.b=b
this.$ti=c},
d7:function d7(a,b,c){this.a=a
this.b=b
this.$ti=c},
jb:function jb(a,b,c){this.a=a
this.b=b
this.$ti=c},
c3:function c3(){},
ci:function ci(){},
em:function em(){},
cu:function(a){var u,t=H.K(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
o0:function(a){return v.types[H.a0(a)]},
o7:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.T(a).$iL},
k:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.av(a)
if(typeof u!=="string")throw H.f(H.bp(a))
return u},
cT:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
ca:function(a){return H.mN(a)+H.kJ(H.bX(a),0,null)},
mN:function(a){var u,t,s,r,q,p,o,n=J.T(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.M||!!n.$ibU){r=C.q(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cu(t.length>1&&C.e.bg(t,0)===36?C.e.b_(t,1):t)},
ln:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
mW:function(a){var u,t,s,r=H.d([],[P.q])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.w)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bp(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.bk(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.f(H.bp(s))}return H.ln(r)},
lo:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bp(s))
if(s<0)throw H.f(H.bp(s))
if(s>65535)return H.mW(a)}return H.ln(a)},
mV:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.bk(u,10))>>>0,56320|u&1023)}throw H.f(P.aE(a,0,1114111,null,null))},
c9:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mU:function(a){var u=H.c9(a).getFullYear()+0
return u},
mS:function(a){var u=H.c9(a).getMonth()+1
return u},
mO:function(a){var u=H.c9(a).getDate()+0
return u},
mP:function(a){var u=H.c9(a).getHours()+0
return u},
mR:function(a){var u=H.c9(a).getMinutes()+0
return u},
mT:function(a){var u=H.c9(a).getSeconds()+0
return u},
mQ:function(a){var u=H.c9(a).getMilliseconds()+0
return u},
F:function(a){throw H.f(H.bp(a))},
h:function(a,b){if(a==null)J.aZ(a)
throw H.f(H.cp(a,b))},
cp:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aL(!0,b,s,null)
u=H.a0(J.aZ(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.Y(b,a,s,null,u)
return P.hZ(b,s)},
nT:function(a,b,c){var u="Invalid value"
if(a>c)return new P.cb(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.cb(a,c,!0,b,"end",u)
return new P.aL(!0,b,"end",null)},
bp:function(a){return new P.aL(!0,a,null,null)},
nR:function(a){if(typeof a!=="number")throw H.f(H.bp(a))
return a},
f:function(a){var u
if(a==null)a=new P.e_()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.m0})
u.name=""}else u.toString=H.m0
return u},
m0:function(){return J.av(this.dartException)},
z:function(a){throw H.f(a)},
w:function(a){throw H.f(P.bB(a))},
bb:function(a){var u,t,s,r,q,p
a=H.lZ(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.l])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iK(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iL:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lw:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lh:function(a,b){return new H.hR(a,b==null?null:b.method)},
ku:function(a,b){var u=b==null,t=u?null:b.method
return new H.hd(a,t,u?null:b.receiver)},
au:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kh(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.bk(t,16)&8191)===10)switch(s){case 438:return f.$1(H.ku(H.k(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lh(H.k(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.m3()
q=$.m4()
p=$.m5()
o=$.m6()
n=$.m9()
m=$.ma()
l=$.m8()
$.m7()
k=$.mc()
j=$.mb()
i=r.al(u)
if(i!=null)return f.$1(H.ku(H.K(u),i))
else{i=q.al(u)
if(i!=null){i.method="call"
return f.$1(H.ku(H.K(u),i))}else{i=p.al(u)
if(i==null){i=o.al(u)
if(i==null){i=n.al(u)
if(i==null){i=m.al(u)
if(i==null){i=l.al(u)
if(i==null){i=o.al(u)
if(i==null){i=k.al(u)
if(i==null){i=j.al(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lh(H.K(u),i))}}return f.$1(new H.iU(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ed()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aL(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ed()
return a},
cs:function(a){var u
if(a==null)return new H.f0(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f0(a)},
nX:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.l(0,a[u],a[t])}return b},
o6:function(a,b,c,d,e,f){H.e(a,"$ibG")
switch(H.a0(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.x("Unsupported number of arguments for wrapped closure"))},
co:function(a,b){var u
H.a0(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.o6)
a.$identity=u
return u},
mu:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.ik().constructor.prototype):Object.create(new H.cx(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b_
if(typeof t!=="number")return t.D()
$.b_=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.kZ(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.o0,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.kY:H.kl
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.f("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kZ(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
mr:function(a,b,c,d){var u=H.kl
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kZ:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mt(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mr(t,!r,u,b)
if(t===0){r=$.b_
if(typeof r!=="number")return r.D()
$.b_=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cy
return new Function(r+H.k(q==null?$.cy=H.fB("self"):q)+";return "+p+"."+H.k(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b_
if(typeof r!=="number")return r.D()
$.b_=r+1
o+=r
r="return function("+o+"){return this."
q=$.cy
return new Function(r+H.k(q==null?$.cy=H.fB("self"):q)+"."+H.k(u)+"("+o+");}")()},
ms:function(a,b,c,d){var u=H.kl,t=H.kY
switch(b?-1:a){case 0:throw H.f(H.mZ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mt:function(a,b){var u,t,s,r,q,p,o,n=$.cy
if(n==null)n=$.cy=H.fB("self")
u=$.kX
if(u==null)u=$.kX=H.fB("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.ms(s,!q,t,b)
if(s===1){n="return function(){return this."+H.k(n)+"."+H.k(t)+"(this."+H.k(u)+");"
u=$.b_
if(typeof u!=="number")return u.D()
$.b_=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.k(n)+"."+H.k(t)+"(this."+H.k(u)+", "+o+");"
u=$.b_
if(typeof u!=="number")return u.D()
$.b_=u+1
return new Function(n+u+"}")()},
kM:function(a,b,c,d,e,f,g){return H.mu(a,b,H.a0(c),d,!!e,!!f,g)},
kl:function(a){return a.a},
kY:function(a){return a.c},
fB:function(a){var u,t,s,r=new H.cx("self","target","receiver","name"),q=J.kr(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
B:function(a){if(a==null)H.nN("boolean expression must not be null")
return a},
K:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.aX(a,"String"))},
nU:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aX(a,"double"))},
lV:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aX(a,"num"))},
kK:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.aX(a,"bool"))},
a0:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.aX(a,"int"))},
lX:function(a,b){throw H.f(H.aX(a,H.cu(H.K(b).substring(2))))},
od:function(a,b){throw H.f(H.mq(a,H.cu(H.K(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.T(a)[b])return a
H.lX(a,b)},
o:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.T(a)[b]
else u=!0
if(u)return a
H.od(a,b)},
kP:function(a){if(a==null)return a
if(!!J.T(a).$ib)return a
throw H.f(H.aX(a,"List<dynamic>"))},
o8:function(a,b){var u
if(a==null)return a
u=J.T(a)
if(!!u.$ib)return a
if(u[b])return a
H.lX(a,b)},
lQ:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a0(u)]
else return a.$S()}return},
fn:function(a,b){var u
if(typeof a=="function")return!0
u=H.lQ(J.T(a))
if(u==null)return!1
return H.lF(u,null,b,null)},
m:function(a,b){var u,t
if(a==null)return a
if($.kG)return a
$.kG=!0
try{if(H.fn(a,b))return a
u=H.ke(b)
t=H.aX(a,u)
throw H.f(t)}finally{$.kG=!1}},
kN:function(a,b){if(a!=null&&!H.kL(a,b))H.z(H.aX(a,H.ke(b)))
return a},
aX:function(a,b){return new H.iM("TypeError: "+P.dH(a)+": type '"+H.lJ(a)+"' is not a subtype of type '"+b+"'")},
mq:function(a,b){return new H.fF("CastError: "+P.dH(a)+": type '"+H.lJ(a)+"' is not a subtype of type '"+b+"'")},
lJ:function(a){var u,t=J.T(a)
if(!!t.$icz){u=H.lQ(t)
if(u!=null)return H.ke(u)
return"Closure"}return H.ca(a)},
nN:function(a){throw H.f(new H.jc(a))},
ol:function(a){throw H.f(new P.fO(H.K(a)))},
mZ:function(a){return new H.i6(a)},
lR:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bX:function(a){if(a==null)return
return a.$ti},
p0:function(a,b,c){return H.ct(a["$a"+H.k(c)],H.bX(b))},
bg:function(a,b,c,d){var u
H.K(c)
H.a0(d)
u=H.ct(a["$a"+H.k(c)],H.bX(b))
return u==null?null:u[d]},
ad:function(a,b,c){var u
H.K(b)
H.a0(c)
u=H.ct(a["$a"+H.k(b)],H.bX(a))
return u==null?null:u[c]},
v:function(a,b){var u
H.a0(b)
u=H.bX(a)
return u==null?null:u[b]},
ke:function(a){return H.bW(a,null)},
bW:function(a,b){var u,t
H.i(b,"$ib",[P.l],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cu(a[0].name)+H.kJ(a,1,b)
if(typeof a=="function")return H.cu(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a0(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.k(b[t])}if('func' in a)return H.nm(a,b)
if('futureOr' in a)return"FutureOr<"+H.bW("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nm:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.l]
H.i(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.h(a0,n)
p=C.e.D(p,a0[n])
m=u[q]
if(m!=null&&m!==P.Q)p+=" extends "+H.bW(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bW(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bW(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bW(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.nW(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.K(b[h])
j=j+i+H.bW(e[d],a0)+(" "+H.k(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
kJ:function(a,b,c){var u,t,s,r,q,p
H.i(c,"$ib",[P.l],"$ab")
if(a==null)return""
u=new P.bQ("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bW(p,c)}return"<"+u.i(0)+">"},
ct:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
k1:function(a,b,c,d){var u,t
H.K(b)
H.kP(c)
H.K(d)
if(a==null)return!1
u=H.bX(a)
t=J.T(a)
if(t[b]==null)return!1
return H.lM(H.ct(t[d],u),null,c,null)},
i:function(a,b,c,d){H.K(b)
H.kP(c)
H.K(d)
if(a==null)return a
if(H.k1(a,b,c,d))return a
throw H.f(H.aX(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cu(b.substring(2))+H.kJ(c,0,null),v.mangledGlobalNames)))},
lM:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aK(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aK(a[t],b,c[t],d))return!1
return!0},
oZ:function(a,b,c){return a.apply(b,H.ct(J.T(b)["$a"+H.k(c)],H.bX(b)))},
lT:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="Q"||a.name==="P"||a===-1||a===-2||H.lT(u)}return!1},
kL:function(a,b){var u,t
if(a==null)return b==null||b.name==="Q"||b.name==="P"||b===-1||b===-2||H.lT(b)
if(b==null||b===-1||b.name==="Q"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kL(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fn(a,b)}u=J.T(a).constructor
t=H.bX(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aK(u,null,b,null)},
E:function(a,b){if(a!=null&&!H.kL(a,b))throw H.f(H.aX(a,H.ke(b)))
return a},
aK:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="Q"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="Q"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aK(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="P")return!0
if('func' in c)return H.lF(a,b,c,d)
if('func' in a)return c.name==="bG"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aK("type" in a?a.type:l,b,s,d)
else if(H.aK(a,b,s,d))return!0
else{if(!('$i'+"cH" in t.prototype))return!1
r=t.prototype["$a"+"cH"]
q=H.ct(r,u?a.slice(1):l)
return H.aK(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.lM(H.ct(m,u),b,p,d)},
lF:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.ob(h,b,g,d)},
ob:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aK(c[s],d,a[s],b))return!1}return!0},
p_:function(a,b,c){Object.defineProperty(a,H.K(b),{value:c,enumerable:false,writable:true,configurable:true})},
o9:function(a){var u,t,s,r,q=H.K($.lS.$1(a)),p=$.k3[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k9[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.K($.lL.$2(a,q))
if(q!=null){p=$.k3[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k9[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kd(u)
$.k3[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.k9[q]=u
return u}if(s==="-"){r=H.kd(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lW(a,u)
if(s==="*")throw H.f(P.kB(q))
if(v.leafTags[q]===true){r=H.kd(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lW(a,u)},
lW:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kQ(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kd:function(a){return J.kQ(a,!1,null,!!a.$iL)},
oa:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kd(u)
else return J.kQ(u,c,null,null)},
o4:function(){if(!0===$.kO)return
$.kO=!0
H.o5()},
o5:function(){var u,t,s,r,q,p,o,n
$.k3=Object.create(null)
$.k9=Object.create(null)
H.o3()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lY.$1(q)
if(p!=null){o=H.oa(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
o3:function(){var u,t,s,r,q,p,o=C.B()
o=H.cn(C.C,H.cn(C.D,H.cn(C.r,H.cn(C.r,H.cn(C.E,H.cn(C.F,H.cn(C.G(C.q),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lS=new H.k6(r)
$.lL=new H.k7(q)
$.lY=new H.k8(p)},
cn:function(a,b){return a(b)||b},
mF:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(new P.h6("Illegal RegExp pattern ("+String(r)+")",a))},
og:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
nV:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lZ:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
m_:function(a,b,c){var u=H.oh(a,b,c)
return u},
oh:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lZ(b),'g'),H.nV(c))},
oi:function(a,b,c,d){var u=a.indexOf(b,d)
if(u<0)return a
return H.oj(a,u,u+b.length,c)},
oj:function(a,b,c,d){var u=a.substring(0,b),t=a.substring(c)
return u+d+t},
iK:function iK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hR:function hR(a,b){this.a=a
this.b=b},
hd:function hd(a,b,c){this.a=a
this.b=b
this.c=c},
iU:function iU(a){this.a=a},
kh:function kh(a){this.a=a},
f0:function f0(a){this.a=a
this.b=null},
cz:function cz(){},
iw:function iw(){},
ik:function ik(){},
cx:function cx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iM:function iM(a){this.a=a},
fF:function fF(a){this.a=a},
i6:function i6(a){this.a=a},
jc:function jc(a){this.a=a},
a1:function a1(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hg:function hg(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dQ:function dQ(a,b){this.a=a
this.$ti=b},
hh:function hh(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a},
hc:function hc(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cl:function(a){return a},
bf:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.cp(b,a))},
nl:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.nT(a,b,c))
return b},
cP:function cP(){},
dY:function dY(){},
c8:function c8(){},
cO:function cO(){},
hJ:function hJ(){},
hK:function hK(){},
hL:function hL(){},
hM:function hM(){},
hN:function hN(){},
cQ:function cQ(){},
hO:function hO(){},
db:function db(){},
dc:function dc(){},
dd:function dd(){},
de:function de(){},
nW:function(a){return J.l7(a?Object.keys(a):[],null)},
oc:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kQ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
k5:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kO==null){H.o4()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.kB("Return interceptor for "+H.k(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kS()]
if(r!=null)return r
r=H.o9(a)
if(r!=null)return r
if(typeof a=="function")return C.N
u=Object.getPrototypeOf(a)
if(u==null)return C.w
if(u===Object.prototype)return C.w
if(typeof s=="function"){Object.defineProperty(s,$.kS(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
mE:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.kk(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.aE(a,0,4294967295,"length",null))
return J.l7(new Array(a),b)},
l7:function(a,b){return J.kr(H.d(a,[b]))},
kr:function(a){H.kP(a)
a.fixed$length=Array
return a},
T:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dL.prototype
return J.dK.prototype}if(typeof a=="string")return J.bL.prototype
if(a==null)return J.dM.prototype
if(typeof a=="boolean")return J.hb.prototype
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bM.prototype
return a}if(a instanceof P.Q)return a
return J.k5(a)},
fo:function(a){if(typeof a=="string")return J.bL.prototype
if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bM.prototype
return a}if(a instanceof P.Q)return a
return J.k5(a)},
k4:function(a){if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bM.prototype
return a}if(a instanceof P.Q)return a
return J.k5(a)},
nY:function(a){if(typeof a=="number")return J.c5.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bU.prototype
return a},
nZ:function(a){if(typeof a=="number")return J.c5.prototype
if(typeof a=="string")return J.bL.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bU.prototype
return a},
o_:function(a){if(typeof a=="string")return J.bL.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bU.prototype
return a},
cr:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bM.prototype
return a}if(a instanceof P.Q)return a
return J.k5(a)},
V:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.T(a).n(a,b)},
aY:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.nY(a).aJ(a,b)},
fp:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.o7(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.fo(a).j(a,b)},
mi:function(a,b,c){return J.cr(a).hK(a,b,c)},
mj:function(a,b,c,d){return J.cr(a).ij(a,b,c,d)},
kj:function(a,b){return J.nZ(a).iv(a,b)},
dq:function(a,b){return J.k4(a).B(a,b)},
mk:function(a,b){return J.k4(a).J(a,b)},
ml:function(a){return J.cr(a).gis(a)},
kU:function(a){return J.cr(a).gc4(a)},
mm:function(a){return J.cr(a).gc8(a)},
bZ:function(a){return J.T(a).gI(a)},
c_:function(a){return J.k4(a).gR(a)},
aZ:function(a){return J.fo(a).gk(a)},
kV:function(a){return J.k4(a).j9(a)},
mn:function(a,b){return J.cr(a).jb(a,b)},
mo:function(a){return J.o_(a).jk(a)},
av:function(a){return J.T(a).i(a)},
a:function a(){},
hb:function hb(){},
dM:function dM(){},
dN:function dN(){},
hV:function hV(){},
bU:function bU(){},
bM:function bM(){},
b3:function b3(a){this.$ti=a},
ks:function ks(a){this.$ti=a},
al:function al(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c5:function c5(){},
dL:function dL(){},
dK:function dK(){},
bL:function bL(){}},P={
na:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.nO()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.co(new P.je(s),1)).observe(u,{childList:true})
return new P.jd(s,u,t)}else if(self.setImmediate!=null)return P.nP()
return P.nQ()},
nb:function(a){self.scheduleImmediate(H.co(new P.jf(H.m(a,{func:1,ret:-1})),0))},
nc:function(a){self.setImmediate(H.co(new P.jg(H.m(a,{func:1,ret:-1})),0))},
nd:function(a){P.kz(C.j,H.m(a,{func:1,ret:-1}))},
kz:function(a,b){var u
H.m(b,{func:1,ret:-1})
u=C.d.a1(a.a,1000)
return P.ni(u<0?0:u,b)},
lv:function(a,b){var u
H.m(b,{func:1,ret:-1,args:[P.b9]})
u=C.d.a1(a.a,1000)
return P.nj(u<0?0:u,b)},
ni:function(a,b){var u=new P.f6()
u.eP(a,b)
return u},
nj:function(a,b){var u=new P.f6()
u.eQ(a,b)
return u},
ne:function(a,b){var u,t,s
b.a=1
try{a.ed(new P.jp(b),new P.jq(b),null)}catch(s){u=H.au(s)
t=H.cs(s)
P.oe(new P.jr(b,u,t))}},
lA:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$iaJ")
if(u>=4){t=b.bX()
b.a=a.a
b.c=a.c
P.da(b,t)}else{t=H.e(b.c,"$ibe")
b.a=2
b.c=a
a.dn(t)}},
da:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.e(g.c,"$iam")
g=g.b
r=s.a
q=s.b
g.toString
P.jZ(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.da(h.a,b)}g=h.a
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
if(m){H.e(o,"$iam")
g=g.b
r=o.a
q=o.b
g.toString
P.jZ(i,i,g,r,q)
return}l=$.a_
if(l!=n)$.a_=n
else l=i
g=b.c
if(g===8)new P.jv(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.ju(u,b,o).$0()}else if((g&2)!==0)new P.jt(h,u,b).$0()
if(l!=null)$.a_=l
g=u.b
if(!!J.T(g).$icH){if(g.a>=4){k=H.e(q.c,"$ibe")
q.c=null
b=q.bj(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.lA(g,q)
return}}j=b.b
k=H.e(j.c,"$ibe")
j.c=null
b=j.bj(k)
g=u.a
r=u.b
if(!g){H.E(r,H.v(j,0))
j.a=4
j.c=r}else{H.e(r,"$iam")
j.a=8
j.c=r}h.a=j
g=j}},
nJ:function(a,b){if(H.fn(a,{func:1,args:[P.Q,P.as]}))return H.m(a,{func:1,ret:null,args:[P.Q,P.as]})
if(H.fn(a,{func:1,args:[P.Q]}))return H.m(a,{func:1,ret:null,args:[P.Q]})
throw H.f(P.kk(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
nI:function(){var u,t
for(;u=$.cm,u!=null;){$.dl=null
t=u.b
$.cm=t
if(t==null)$.dk=null
u.a.$0()}},
nM:function(){$.kH=!0
try{P.nI()}finally{$.dl=null
$.kH=!1
if($.cm!=null)$.kT().$1(P.lN())}},
lI:function(a){var u=new P.et(H.m(a,{func:1,ret:-1}))
if($.cm==null){$.cm=$.dk=u
if(!$.kH)$.kT().$1(P.lN())}else $.dk=$.dk.b=u},
nL:function(a){var u,t,s
H.m(a,{func:1,ret:-1})
u=$.cm
if(u==null){P.lI(a)
$.dl=$.dk
return}t=new P.et(a)
s=$.dl
if(s==null){t.b=u
$.cm=$.dl=t}else{t.b=s.b
$.dl=s.b=t
if(t.b==null)$.dk=t}},
oe:function(a){var u,t=null,s={func:1,ret:-1}
H.m(a,s)
u=$.a_
if(C.f===u){P.k0(t,t,C.f,a)
return}u.toString
P.k0(t,t,u,H.m(u.c0(a),s))},
lu:function(a,b){var u,t={func:1,ret:-1}
H.m(b,t)
u=$.a_
if(u===C.f){u.toString
return P.kz(a,b)}return P.kz(a,H.m(u.c0(b),t))},
n7:function(a,b){var u,t,s={func:1,ret:-1,args:[P.b9]}
H.m(b,s)
u=$.a_
if(u===C.f){u.toString
return P.lv(a,b)}t=u.dC(b,P.b9)
$.a_.toString
return P.lv(a,H.m(t,s))},
jZ:function(a,b,c,d,e){var u={}
u.a=d
P.nL(new P.k_(u,e))},
lG:function(a,b,c,d,e){var u,t
H.m(d,{func:1,ret:e})
t=$.a_
if(t===c)return d.$0()
$.a_=c
u=t
try{t=d.$0()
return t}finally{$.a_=u}},
lH:function(a,b,c,d,e,f,g){var u,t
H.m(d,{func:1,ret:f,args:[g]})
H.E(e,g)
t=$.a_
if(t===c)return d.$1(e)
$.a_=c
u=t
try{t=d.$1(e)
return t}finally{$.a_=u}},
nK:function(a,b,c,d,e,f,g,h,i){var u,t
H.m(d,{func:1,ret:g,args:[h,i]})
H.E(e,h)
H.E(f,i)
t=$.a_
if(t===c)return d.$2(e,f)
$.a_=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a_=u}},
k0:function(a,b,c,d){var u
H.m(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.c0(d):c.it(d,-1)
P.lI(d)},
je:function je(a){this.a=a},
jd:function jd(a,b,c){this.a=a
this.b=b
this.c=c},
jf:function jf(a){this.a=a},
jg:function jg(a){this.a=a},
f6:function f6(){this.c=0},
jR:function jR(a,b){this.a=a
this.b=b},
jQ:function jQ(a,b,c,d){var _=this
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
jo:function jo(a,b){this.a=a
this.b=b},
js:function js(a,b){this.a=a
this.b=b},
jp:function jp(a){this.a=a},
jq:function jq(a){this.a=a},
jr:function jr(a,b,c){this.a=a
this.b=b
this.c=c},
jv:function jv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jw:function jw(a){this.a=a},
ju:function ju(a,b,c){this.a=a
this.b=b
this.c=c},
jt:function jt(a,b,c){this.a=a
this.b=b
this.c=c},
et:function et(a){this.a=a
this.b=null},
io:function io(){},
iq:function iq(a,b){this.a=a
this.b=b},
ir:function ir(a,b){this.a=a
this.b=b},
cZ:function cZ(){},
ip:function ip(){},
b9:function b9(){},
am:function am(a,b){this.a=a
this.b=b},
jU:function jU(){},
k_:function k_(a,b){this.a=a
this.b=b},
jD:function jD(){},
jF:function jF(a,b,c){this.a=a
this.b=b
this.c=c},
jE:function jE(a,b){this.a=a
this.b=b},
jG:function jG(a,b,c){this.a=a
this.b=b
this.c=c},
l8:function(a,b){return new H.a1([a,b])},
mH:function(a){return H.nX(a,new H.a1([null,null]))},
dR:function(a){return new P.jA([a])},
kF:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lD:function(a,b,c){var u=new P.jB(a,b,[c])
u.c=a.e
return u},
mB:function(a,b,c){var u,t
if(P.kI(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.l])
C.a.h($.at,a)
try{P.nn(a,u)}finally{if(0>=$.at.length)return H.h($.at,-1)
$.at.pop()}t=P.lq(b,H.o8(u,"$ic"),", ")+c
return t.charCodeAt(0)==0?t:t},
kq:function(a,b,c){var u,t
if(P.kI(a))return b+"..."+c
u=new P.bQ(b)
C.a.h($.at,a)
try{t=u
t.a=P.lq(t.a,a,", ")}finally{if(0>=$.at.length)return H.h($.at,-1)
$.at.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kI:function(a){var u,t
for(u=$.at.length,t=0;t<u;++t)if(a===$.at[t])return!0
return!1},
nn:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.i(b,"$ib",[P.l],"$ab")
u=a.gR(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.t())return
r=H.k(u.gH(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.t()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gH(u);++s
if(!u.t()){if(s<=4){C.a.h(b,H.k(o))
return}q=H.k(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gH(u);++s
for(;u.t();o=n,n=m){m=u.gH(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.k(o)
q=H.k(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
l9:function(a,b){var u,t,s=P.dR(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.w)(a),++t)s.h(0,H.E(a[t],b))
return s},
lb:function(a){var u,t={}
if(P.kI(a))return"{...}"
u=new P.bQ("")
try{C.a.h($.at,a)
u.a+="{"
t.a=!0
J.mk(a,new P.hl(t,u))
u.a+="}"}finally{if(0>=$.at.length)return H.h($.at,-1)
$.at.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jA:function jA(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ck:function ck(a){this.a=a
this.c=this.b=null},
jB:function jB(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hi:function hi(){},
t:function t(){},
hk:function hk(){},
hl:function hl(a,b){this.a=a
this.b=b},
af:function af(){},
jI:function jI(){},
eJ:function eJ(){},
cA:function cA(){},
dA:function dA(){},
fX:function fX(){},
iX:function iX(){},
iY:function iY(){},
jS:function jS(a){this.b=0
this.c=a},
mA:function(a){if(a instanceof H.cz)return a.i(0)
return"Instance of '"+H.ca(a)+"'"},
mI:function(a,b,c){var u,t
H.E(b,c)
u=J.mE(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.l(u,t,b)
return H.i(u,"$ib",[c],"$ab")},
la:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.c_(a);u.t();)C.a.h(s,H.E(u.gH(u),c))
if(b)return s
return H.i(J.kr(s),"$ib",t,"$ab")},
ky:function(a){var u,t,s=P.q
H.i(a,"$ic",[s],"$ac")
if(a.constructor===Array){H.i(a,"$ib3",[s],"$ab3")
u=a.length
t=P.kv(0,null,u)
return H.lo(t<u?C.a.em(a,0,t):a)}return P.n2(a,0,null)},
n2:function(a,b,c){var u,t,s
H.i(a,"$ic",[P.q],"$ac")
u=J.c_(a)
for(t=0;t<b;++t)if(!u.t())throw H.f(P.aE(b,0,t,null,null))
s=[]
for(;u.t();)s.push(u.gH(u))
return H.lo(s)},
mX:function(a){return new H.hc(a,H.mF(a,!1,!0,!1))},
lq:function(a,b,c){var u=J.c_(b)
if(!u.t())return a
if(c.length===0){do a+=H.k(u.gH(u))
while(u.t())}else{a+=H.k(u.gH(u))
for(;u.t();)a=a+c+H.k(u.gH(u))}return a},
nk:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.i(a,"$ib",[P.q],"$ab")
if(c===C.t){u=$.mh().b
u=u.test(b)}else u=!1
if(u)return b
t=C.I.iw(H.E(b,H.ad(c,"cA",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.mV(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mw:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mx:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dC:function(a){if(a>=10)return""+a
return"0"+a},
l1:function(a,b){return new P.bD(1e6*b+1000*a)},
dH:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.av(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mA(a)},
mp:function(a){return new P.aL(!1,null,null,a)},
kk:function(a,b,c){return new P.aL(!0,a,b,c)},
hZ:function(a,b){return new P.cb(null,null,!0,a,b,"Value not in range")},
aE:function(a,b,c,d,e){return new P.cb(b,c,!0,a,d,"Invalid value")},
kv:function(a,b,c){if(0>a||a>c)throw H.f(P.aE(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.aE(b,a,c,"end",null))
return b}return c},
i_:function(a,b){if(typeof a!=="number")return a.af()
if(a<0)throw H.f(P.aE(a,0,null,b,null))},
Y:function(a,b,c,d,e){var u=H.a0(e==null?J.aZ(b):e)
return new P.ha(u,!0,a,c,"Index out of range")},
H:function(a){return new P.iV(a)},
kB:function(a){return new P.iT(a)},
kx:function(a){return new P.cd(a)},
bB:function(a){return new P.fJ(a)},
x:function(a){return new P.eB(a)},
kR:function(a){H.oc(a)},
S:function S(){},
aA:function aA(a,b){this.a=a
this.b=b},
A:function A(){},
bD:function bD(a){this.a=a},
fT:function fT(){},
fU:function fU(){},
bE:function bE(){},
ft:function ft(){},
e_:function e_(){},
aL:function aL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cb:function cb(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ha:function ha(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iV:function iV(a){this.a=a},
iT:function iT(a){this.a=a},
cd:function cd(a){this.a=a},
fJ:function fJ(a){this.a=a},
hU:function hU(){},
ed:function ed(){},
fO:function fO(a){this.a=a},
eB:function eB(a){this.a=a},
h6:function h6(a,b){this.a=a
this.b=b},
bG:function bG(){},
q:function q(){},
c:function c(){},
b2:function b2(){},
b:function b(){},
G:function G(){},
P:function P(){},
aa:function aa(){},
Q:function Q(){},
as:function as(){},
l:function l(){},
bQ:function bQ(a){this.a=a},
lP:function(a){var u,t=J.T(a)
if(!!t.$ibH){u=t.gc8(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fb(a.data,a.height,a.width)},
lO:function(a){if(a instanceof P.fb)return{data:a.a,height:a.b,width:a.c}
return a},
bq:function(a){var u,t,s,r,q
if(a==null)return
u=P.l8(P.l,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r){q=H.K(t[r])
u.l(0,q,a[q])}return u},
nS:function(a){var u={}
a.J(0,new P.k2(u))
return u},
fb:function fb(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function k2(a){this.a=a},
h2:function h2(a,b){this.a=a
this.b=b},
h3:function h3(){},
h4:function h4(){},
jz:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nh:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jC:function jC(){},
ai:function ai(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b5:function b5(){},
hf:function hf(){},
b8:function b8(){},
hS:function hS(){},
hY:function hY(){},
cW:function cW(){},
is:function is(){},
p:function p(){},
ba:function ba(){},
iJ:function iJ(){},
eH:function eH(){},
eI:function eI(){},
eR:function eR(){},
eS:function eS(){},
f2:function f2(){},
f3:function f3(){},
f9:function f9(){},
fa:function fa(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(a){this.a=a},
fy:function fy(){},
c0:function c0(){},
hT:function hT(){},
eu:function eu(){},
du:function du(){},
dJ:function dJ(){},
e2:function e2(){},
e5:function e5(){},
cc:function cc(){},
e6:function e6(){},
ef:function ef(){},
el:function el(){},
ij:function ij(){},
eZ:function eZ(){},
f_:function f_(){}},W={
kW:function(){var u=document.createElement("a")
return u},
fE:function(){var u=document.createElement("canvas")
return u},
my:function(a,b,c){var u=document.body,t=(u&&C.p).aj(u,a,b,c)
t.toString
u=W.D
u=new H.d7(new W.ap(t),H.m(new W.fW(),{func:1,ret:P.S,args:[u]}),[u])
return H.e(u.gaL(u),"$iO")},
mz:function(a){H.e(a,"$ij")
return"wheel"},
cE:function(a){var u,t,s,r="element tag unavailable"
try{u=J.cr(a)
t=u.geb(a)
if(typeof t==="string")r=u.geb(a)}catch(s){H.au(s)}return r},
jy:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lC:function(a,b,c,d){var u=W.jy(W.jy(W.jy(W.jy(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a9:function(a,b,c,d,e){var u=W.lK(new W.jn(c),W.n)
if(u!=null&&!0)J.mj(a,b,u,!1)
return new W.jm(a,b,u,!1,[e])},
lB:function(a){var u=W.kW(),t=window.location
u=new W.bV(new W.jH(u,t))
u.eA(a)
return u},
nf:function(a,b,c,d){H.e(a,"$iO")
H.K(b)
H.K(c)
H.e(d,"$ibV")
return!0},
ng:function(a,b,c,d){var u,t,s
H.e(a,"$iO")
H.K(b)
H.K(c)
u=H.e(d,"$ibV").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
lE:function(){var u=P.l,t=P.l9(C.m,u),s=H.v(C.m,0),r=H.m(new W.jP(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.jO(t,P.dR(u),P.dR(u),P.dR(u),null)
t.eN(null,new H.ho(C.m,r,[s,u]),q,null)
return t},
lK:function(a,b){var u
H.m(a,{func:1,ret:-1,args:[b]})
u=$.a_
if(u===C.f)return a
return u.dC(a,b)},
u:function u(){},
fq:function fq(){},
dr:function dr(){},
fs:function fs(){},
cw:function cw(){},
dt:function dt(){},
bv:function bv(){},
bx:function bx(){},
c2:function c2(){},
by:function by(){},
bz:function bz(){},
cC:function cC(){},
fK:function fK(){},
U:function U(){},
cD:function cD(){},
fL:function fL(){},
b0:function b0(){},
b1:function b1(){},
fM:function fM(){},
fN:function fN(){},
fP:function fP(){},
dD:function dD(){},
fQ:function fQ(){},
dE:function dE(){},
dF:function dF(){},
fR:function fR(){},
fS:function fS(){},
ji:function ji(a,b){this.a=a
this.b=b},
O:function O(){},
fW:function fW(){},
n:function n(){},
j:function j(){},
aM:function aM(){},
h0:function h0(){},
h1:function h1(){},
h5:function h5(){},
aN:function aN(){},
h8:function h8(){},
c4:function c4(){},
bH:function bH(){},
cJ:function cJ(){},
b4:function b4(){},
dS:function dS(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(a){this.a=a},
hF:function hF(){},
hG:function hG(a){this.a=a},
aO:function aO(){},
hH:function hH(){},
a6:function a6(){},
ap:function ap(a){this.a=a},
D:function D(){},
cR:function cR(){},
aP:function aP(){},
hW:function hW(){},
i4:function i4(){},
i5:function i5(a){this.a=a},
i7:function i7(){},
aQ:function aQ(){},
ih:function ih(){},
aR:function aR(){},
ii:function ii(){},
aS:function aS(){},
il:function il(){},
im:function im(a){this.a=a},
aG:function aG(){},
bn:function bn(){},
ee:function ee(){},
iu:function iu(){},
iv:function iv(){},
d0:function d0(){},
aT:function aT(){},
aH:function aH(){},
ix:function ix(){},
iy:function iy(){},
iE:function iE(){},
aV:function aV(){},
aW:function aW(){},
iH:function iH(){},
iI:function iI(){},
bS:function bS(){},
iW:function iW(){},
ja:function ja(){},
bd:function bd(){},
d8:function d8(){},
d9:function d9(){},
jj:function jj(){},
ew:function ew(){},
jx:function jx(){},
eO:function eO(){},
jL:function jL(){},
jM:function jM(){},
jh:function jh(){},
jk:function jk(a){this.a=a},
jl:function jl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kE:function kE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jm:function jm(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jn:function jn(a){this.a=a},
bV:function bV(a){this.a=a},
C:function C(){},
dZ:function dZ(a){this.a=a},
hQ:function hQ(a){this.a=a},
hP:function hP(a,b,c){this.a=a
this.b=b
this.c=c},
eW:function eW(){},
jJ:function jJ(){},
jK:function jK(){},
jO:function jO(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jP:function jP(){},
jN:function jN(){},
dI:function dI(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aw:function aw(){},
jH:function jH(a,b){this.a=a
this.b=b},
fc:function fc(a){this.a=a},
jT:function jT(a){this.a=a},
ev:function ev(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eC:function eC(){},
eD:function eD(){},
eF:function eF(){},
eG:function eG(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eP:function eP(){},
eQ:function eQ(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
df:function df(){},
dg:function dg(){},
eX:function eX(){},
eY:function eY(){},
f1:function f1(){},
f4:function f4(){},
f5:function f5(){},
dh:function dh(){},
di:function di(){},
f7:function f7(){},
f8:function f8(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){}},O={
fH:function(a){var u=new O.X([a])
u.bd(a)
return u},
X:function X(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cM:function cM(){this.b=this.a=null},
dV:function dV(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hv:function hv(a,b){this.a=a
this.b=b},
hw:function hw(){},
hx:function hx(a,b){this.a=a
this.b=b},
hy:function hy(){},
hz:function hz(a,b){this.a=a
this.b=b},
hA:function hA(){},
hp:function hp(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cL:function cL(){},
hq:function hq(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b6:function b6(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hs:function hs(){var _=this
_.e=_.d=_.c=_.b=null},
ht:function ht(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hu:function hu(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
e8:function e8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ig:function ig(){this.c=this.b=this.a=null},
bR:function bR(){},
eg:function eg(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aU:function aU(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
cF:function(a){var u=new E.an()
u.a=""
u.b=!0
u.sez(0,O.fH(E.an))
u.y.aK(u.giS(),u.giV())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.scM(0,a)
u.saI(null)
u.sct(null)
return u},
mY:function(a,b){var u=new E.i0(a)
u.ev(a,b)
return u},
n6:function(a,b,c,d,e){var u,t,s=J.T(a)
if(!!s.$ic2)return E.lt(a,!0,!0,!0,!1)
u=W.fE()
t=u.style
t.width="100%"
t.height="100%"
s.gc4(a).h(0,u)
return E.lt(u,!0,!0,!0,!1)},
lt:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ei(),j=H.e(C.h.cH(a,"webgl2",P.mH(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$icc")
if(j==null)H.z(P.x("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.mY(j,a)
u=new T.iA(j)
H.a0(j.getParameter(3379))
u.c=H.a0(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.en(a)
t=new X.he()
t.c=new X.ar(!1,!1,!1)
t.shG(P.dR(P.q))
u.b=t
t=new X.hI(u)
t.f=0
t.r=V.bl()
t.x=V.bl()
t.ch=t.Q=1
u.c=t
t=new X.hj(u)
t.r=0
t.x=V.bl()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iG(u)
t.f=V.bl()
t.r=V.bl()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sff(H.d([],[[P.cZ,P.Q]]))
t=u.z
s=document
r=W.a6
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a9(s,"contextmenu",H.m(u.gfW(),q),!1,r))
t=u.z
p=W.n
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a9(a,"focus",H.m(u.gh5(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a9(a,"blur",H.m(u.gfQ(),o),!1,p))
t=u.z
n=W.b4
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a9(s,"keyup",H.m(u.gh9(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a9(s,"keydown",H.m(u.gh7(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a9(a,"mousedown",H.m(u.ghd(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a9(a,"mouseup",H.m(u.ghh(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a9(a,l,H.m(u.ghf(),q),!1,r))
n=u.z
m=W.bd;(n&&C.a).h(n,W.a9(a,H.K(W.mz(a)),H.m(u.ghj(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a9(s,l,H.m(u.gfY(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a9(s,"mouseup",H.m(u.gh_(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a9(s,"pointerlockchange",H.m(u.ghl(),o),!1,p))
p=u.z
o=W.aW
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a9(a,"touchstart",H.m(u.ghB(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a9(a,"touchend",H.m(u.ghx(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a9(a,"touchmove",H.m(u.ghz(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aA(Date.now(),!1)
k.cy=0
k.dr()
return k},
fA:function fA(){},
an:function an(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i0:function i0(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i1:function i1(a){this.a=a},
i2:function i2(a){this.a=a},
i3:function i3(a){this.a=a},
ei:function ei(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iD:function iD(a){this.a=a}},Z={
kD:function(a,b,c){var u
H.i(c,"$ib",[P.q],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cl(c)),35044)
a.bindBuffer(b,null)
return new Z.es(b,u)},
aI:function(a){return new Z.bo(a)},
es:function es(a,b){this.a=a
this.b=b},
dv:function dv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
cj:function cj(a){this.a=a},
bw:function bw(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bI:function bI(a,b,c){this.a=a
this.b=b
this.c=c},
bo:function bo(a){this.a=a}},D={
J:function(){var u=new D.bF()
u.sa7(null)
u.saQ(null)
u.c=null
u.d=0
return u},
fG:function fG(){},
bF:function bF(){var _=this
_.d=_.c=_.b=_.a=null},
fZ:function fZ(a){this.a=a},
h_:function h_(a){this.a=a},
r:function r(){this.b=null},
bJ:function bJ(a){this.b=null
this.$ti=a},
bK:function bK(a){this.b=null
this.$ti=a},
y:function y(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
l0:function(a,b){var u,t,s=new D.bC()
s.c=new V.W(1,1,1)
s.a=V.n9()
s.d=V.kC()
s.e=V.n8()
u=s.b
s.b=b
b.gm().h(0,s.geB())
t=new D.y("mover",u,s.b,[U.ab])
t.b=!0
s.az(t)
if(!s.c.n(0,a)){u=s.c
s.c=a
t=new D.y("color",u,a,[V.W])
t.b=!0
s.az(t)}return s},
bC:function bC(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ae:function ae(){},
dP:function dP(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
e1:function e1(){},
ec:function ec(){}},X={dw:function dw(a,b){this.a=a
this.b=b},dO:function dO(a,b){this.a=a
this.b=b},he:function he(){var _=this
_.d=_.c=_.b=_.a=null},dT:function dT(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hj:function hj(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ar:function ar(a,b,c){this.a=a
this.b=b
this.c=c},aC:function aC(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hI:function hI(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cN:function cN(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hX:function hX(){},d4:function d4(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iG:function iG(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},en:function en(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kp:function(a,b){var u=new X.h7(),t=new V.a2(0,0,0,1)
u.a=t
u.b=a
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.e4()
u.r=t
return u},
lj:function(a){var u,t,s=new X.e0()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gm().h(0,s.geR())
t=new D.y("mover",u,s.b,[U.ab])
t.b=!0
s.Z(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.I().a)){s.c=1.0471975511965976
t=new D.y("fov",t,1.0471975511965976,[P.A])
t.b=!0
s.Z(t)}t=s.d
if(!(Math.abs(t-0.1)<$.I().a)){s.d=0.1
t=new D.y("near",t,0.1,[P.A])
t.b=!0
s.Z(t)}t=s.e
if(!(Math.abs(t-2000)<$.I().a)){s.e=2000
t=new D.y("far",t,2000,[P.A])
t.b=!0
s.Z(t)}return s},
fz:function fz(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
c1:function c1(){},
h7:function h7(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h9:function h9(){this.b=this.a=null},
e0:function e0(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
d_:function d_(){}},V={
mv:function(a,b,c){var u,t,s,r,q,p,o,n
a*=6
u=C.c.aV(a)
t=a-u
s=b*(1-c)
r=b*(1-c*t)
q=b*(1-c*(1-t))
switch(u){case 0:p=b>1?1:b
if(q<0)o=0
else o=q>1?1:q
if(s<0)n=0
else n=s>1?1:s
return new V.W(p,o,n)
case 1:if(r<0)p=0
else p=r>1?1:r
o=b>1?1:b
if(s<0)n=0
else n=s>1?1:s
return new V.W(p,o,n)
case 2:if(s<0)p=0
else p=s>1?1:s
o=b>1?1:b
if(q<0)n=0
else n=q>1?1:q
return new V.W(p,o,n)
case 3:if(s<0)p=0
else p=s>1?1:s
if(r<0)o=0
else o=r>1?1:r
n=b>1?1:b
return new V.W(p,o,n)
case 4:if(q<0)p=0
else p=q>1?1:q
if(s<0)o=0
else o=s>1?1:s
n=b>1?1:b
return new V.W(p,o,n)
default:p=b>1?1:b
if(s<0)o=0
else o=s>1?1:s
if(r<0)n=0
else n=r>1?1:r
return new V.W(p,o,n)}},
ki:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.bB(a-b,u)
return(a<0?a+u:a)+b},
N:function(a,b,c){if(a==null)return C.e.am("null",c)
return C.e.am(C.c.ee(Math.abs(a-0)<$.I().a?0:a,b),c+b+1)},
cq:function(a,b,c){var u,t,s,r,q,p
H.i(a,"$ib",[P.A],"$ab")
u=H.d([],[P.l])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.w)(a),++r){q=V.N(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.l(u,p,C.e.am(u[p],s))}return u},
dm:function(a){return C.c.ji(Math.pow(2,C.k.aV(Math.log(H.nR(a))/Math.log(2))))},
bN:function(){var u=$.hB
return u==null?$.hB=V.b7(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b7:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mM:function(a,b,c){return V.b7(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
mL:function(a,b,c){return V.b7(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
ld:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b7(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
le:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b7(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
lf:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b7(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
lg:function(a,b,c,d){d=V.kC()
return V.lc(V.lm(),d,new V.M(a,b,c))},
lc:function(a,b,c){var u=c.u(0,Math.sqrt(c.w(c))),t=b.b7(u),s=t.u(0,Math.sqrt(t.w(t))),r=u.b7(s),q=new V.M(a.a,a.b,a.c),p=s.N(0).w(q),o=r.N(0).w(q),n=u.N(0).w(q)
return V.b7(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bl:function(){var u=$.ll
return u==null?$.ll=new V.a7(0,0):u},
lm:function(){var u=$.cS
return u==null?$.cS=new V.ao(0,0,0):u},
e4:function(){var u=$.cU
return u==null?$.cU=V.e3(0,0,1,1):u},
e3:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.bP(a,b,c,d)},
er:function(){var u=$.lz
return u==null?$.lz=new V.M(0,0,0):u},
n8:function(){var u=$.iZ
return u==null?$.iZ=new V.M(-1,0,0):u},
kC:function(){var u=$.j_
return u==null?$.j_=new V.M(0,1,0):u},
n9:function(){var u=$.j0
return u==null?$.j0=new V.M(0,0,1):u},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
a2:function a2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fY:function fY(a){this.a=a},
dX:function dX(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
a5:function a5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a7:function a7(a,b){this.a=a
this.b=b},
ao:function ao(a,b,c){this.a=a
this.b=b
this.c=c},
bm:function bm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bP:function bP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
R:function R(a,b){this.a=a
this.b=b},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
aj:function(a){var u=new V.i8()
u.ew(a)
return u},
fr:function fr(){},
bj:function bj(){},
dU:function dU(){},
bk:function bk(){this.a=null},
i8:function i8(){this.a=null},
cY:function cY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ej:function ej(a,b,c){this.a=a
this.b=b
this.c=c},
d3:function d3(a){this.b=a
this.c=null},
iF:function iF(){this.c=this.b=this.a=null},
d5:function d5(a){this.b=a
this.a=this.c=null},
of:function(a){P.n7(C.L,new V.kf(a))},
n_:function(a){var u=new V.ic()
u.ex(a,!0)
return u},
fC:function fC(a){this.a=a
this.c=this.b=null},
fD:function fD(a){this.a=a},
kf:function kf(a){this.a=a},
ic:function ic(){this.b=this.a=null},
ie:function ie(a){this.a=a},
id:function id(a){this.a=a}},U={
km:function(){var u=new U.fI()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
kn:function(a){var u=new U.cB()
u.sU(0,a)
return u},
l5:function(){var u=new U.cI()
u.bd(U.ab)
u.aK(u.geD(),u.ghp())
u.e=null
u.f=V.bN()
u.r=0
return u},
fI:function fI(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cB:function cB(){this.b=this.a=null},
cI:function cI(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ab:function ab(){},
cV:function cV(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eo:function eo(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
ep:function ep(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eq:function eq(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
l_:function(){var u,t,s,r,q,p,o,n,m,l=null,k=new M.dB()
k.a=!0
u=E.cF(l)
t=F.kw()
s=t.a
r=new V.M(-1,-1,1)
r=r.u(0,Math.sqrt(r.w(r)))
q=s.bm(new V.bm(1,2,4,6),new V.a2(1,0,0,1),new V.ao(-1,-1,0),new V.a7(0,1),r,l)
s=t.a
r=new V.M(1,-1,1)
r=r.u(0,Math.sqrt(r.w(r)))
p=s.bm(new V.bm(0,3,4,6),new V.a2(0,0,1,1),new V.ao(1,-1,0),new V.a7(1,1),r,l)
s=t.a
r=new V.M(1,1,1)
r=r.u(0,Math.sqrt(r.w(r)))
o=s.bm(new V.bm(0,2,5,6),new V.a2(0,1,0,1),new V.ao(1,1,0),new V.a7(1,0),r,l)
s=t.a
r=V.bl()
n=new V.M(-1,1,1)
n=n.u(0,Math.sqrt(n.w(n)))
m=s.bm(new V.bm(0,2,4,7),new V.a2(1,1,0,1),new V.ao(-1,1,0),r,n,l)
t.d.ik(H.d([q,p,o,m],[F.az]))
t.aF()
u.scM(0,t)
k.e=u
k.saT(l)
k.saH(0,l)
k.saI(l)
return k},
l4:function(){var u,t=new M.dG()
t.a=!0
t.sf1(0,O.fH(E.an))
t.e.aK(t.gfS(),t.gfU())
t.y=t.x=t.r=t.f=null
u=X.kp(!0,null)
t.saT(null)
t.saH(0,u)
return t},
dz:function dz(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
dB:function dB(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dG:function dG(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ax:function ax(){},
lU:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9="testCanvas",c0=null,c1="modifiers",c2=V.n_("Test 043"),c3=W.fE()
c3.className="pageLargeCanvas"
c3.id=b9
c2.a.appendChild(c3)
u=[P.l]
c2.dA(H.d(["Test of the color picker, used to read the color of a pixel from a texture. It uses a back buffer with solid colored entities to pick which one to move. Also testing out the ability to screen shot a back buffer."],u))
c2.ii(H.d(["buttons"],u))
c2.dA(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b9)
if(t==null)H.z(P.x("Failed to find an element with the identifier, testCanvas."))
s=E.n6(t,!0,!0,!0,!1)
r=U.l5()
c2=s.r
q=new U.ep()
p=U.km()
p.scF(0,!0)
p.scq(6.283185307179586)
p.scs(0)
p.sad(0,0)
p.scr(100)
p.sS(0)
p.sc7(0.5)
q.b=p
o=q.gaP()
p.gm().h(0,o)
p=U.km()
p.scF(0,!0)
p.scq(6.283185307179586)
p.scs(0)
p.sad(0,0)
p.scr(100)
p.sS(0)
p.sc7(0.5)
q.c=p
p.gm().h(0,o)
q.d=null
q.r=q.f=q.e=!1
q.y=q.x=2.5
q.Q=4
q.ch=q.cx=!1
q.db=q.cy=0
q.dx=null
q.dy=0
q.fx=q.fr=null
n=new X.ar(!1,!1,!1)
m=q.d
q.d=n
p=[X.ar]
o=new D.y(c1,m,n,p)
o.b=!0
q.E(o)
o=q.f
if(o!==!1){q.f=!1
o=new D.y("invertX",o,!1,[P.S])
o.b=!0
q.E(o)}o=q.r
if(o!==!1){q.r=!1
o=new D.y("invertY",o,!1,[P.S])
o.b=!0
q.E(o)}q.aE(c2)
r.h(0,q)
c2=s.r
q=new U.eo()
o=U.km()
o.scF(0,!0)
o.scq(6.283185307179586)
o.scs(0)
o.sad(0,0)
o.scr(100)
o.sS(0)
o.sc7(0.2)
q.b=o
o.gm().h(0,q.gaP())
q.c=null
q.d=!1
q.e=2.5
q.r=4
q.x=q.y=!1
q.z=0
q.Q=null
q.ch=0
q.cy=q.cx=null
n=new X.ar(!0,!1,!1)
m=q.c
q.c=n
o=new D.y(c1,m,n,p)
o.b=!0
q.E(o)
q.aE(c2)
r.h(0,q)
c2=s.r
q=new U.eq()
q.c=0.01
q.e=q.d=0
n=new X.ar(!1,!1,!1)
q.b=n
o=new D.y(c1,c0,n,p)
o.b=!0
q.E(o)
q.aE(c2)
r.h(0,q)
r.h(0,U.kn(V.mM(0,0,5)))
l=X.lj(r)
k=s.f.dX("../resources/diceColor")
j=new O.dV()
c2=V.a5
j.seY(O.fH(c2))
j.e.aK(j.gfM(),j.gfO())
q=new O.b6(j,"emission")
q.c=new A.ah(!1,!1,!1)
q.f=new V.W(0,0,0)
j.f=q
q=new O.b6(j,"ambient")
q.c=new A.ah(!1,!1,!1)
q.f=new V.W(0,0,0)
j.r=q
q=new O.b6(j,"diffuse")
q.c=new A.ah(!1,!1,!1)
q.f=new V.W(0,0,0)
j.x=q
q=new O.b6(j,"invDiffuse")
q.c=new A.ah(!1,!1,!1)
q.f=new V.W(0,0,0)
j.y=q
q=new O.hu(j,"specular")
q.c=new A.ah(!1,!1,!1)
q.f=new V.W(0,0,0)
q.ch=100
j.z=q
q=new O.hq(j,"bump")
q.c=new A.ah(!1,!1,!1)
j.Q=q
j.ch=null
q=new O.b6(j,"reflect")
q.c=new A.ah(!1,!1,!1)
q.f=new V.W(0,0,0)
j.cx=q
q=new O.ht(j,"refract")
q.c=new A.ah(!1,!1,!1)
q.f=new V.W(0,0,0)
q.ch=1
j.cy=q
q=new O.hp(j,"alpha")
q.c=new A.ah(!1,!1,!1)
q.f=1
j.db=q
q=new D.dP()
q.bd(D.ae)
q.sfb(H.d([],[D.bC]))
q.shD(H.d([],[D.e1]))
q.shY(H.d([],[D.ec]))
q.y=q.x=null
q.cK(q.gfK(),q.ghn(),q.ghr())
j.dx=q
o=new O.hs()
o.b=new V.a2(0,0,0,0)
o.c=1
o.d=10
o.e=!1
j.dy=o
o=q.x
q=o==null?q.x=D.J():o
q.h(0,j.ghM())
q=j.dx
o=q.y
q=o==null?q.y=D.J():o
q.h(0,j.ga6())
j.fr=null
q=j.dx
o=U.kn(V.lg(-1,-1,-1,c0))
q.h(0,D.l0(new V.W(1,0.9,0.9),o))
q=j.dx
o=U.kn(V.lg(1,1,2,c0))
q.h(0,D.l0(new V.W(0.2,0.2,0.35),o))
q=j.r
q.sb5(0,new V.W(0.2,0.2,0.2))
j.r.sbb(k)
q=j.x
q.sb5(0,new V.W(0.8,0.8,0.8))
j.x.sbb(k)
q=j.z
q.sb5(0,new V.W(0.7,0.7,0.7))
q=j.z
q.bY(new A.ah(!0,!1,q.c.c))
q.du(10)
j.Q.sbb(s.f.dX("../resources/diceBumpMap"))
i=H.d([],[U.cV])
q=V.a2
h=H.d([],[q])
g=F.kw()
F.dj(g,c0,c0,1,1,1,0,0,1)
F.dj(g,c0,c0,1,1,0,1,0,3)
F.dj(g,c0,c0,1,1,0,0,1,2)
F.dj(g,c0,c0,1,1,-1,0,0,0)
F.dj(g,c0,c0,1,1,0,-1,0,0)
F.dj(g,c0,c0,1,1,0,0,-1,3)
g.aF()
f=E.cF(g)
e=E.cF(c0)
d=E.cF(c0)
for(o=[P.A],q=[q],c=-1.6;c<=1.7;c+=0.8)for(b=-1.6;b<=1.7;b+=0.8)for(a=-1.6;a<=1.7;a+=0.8){a0=new V.a5(1,0,0,c,0,1,0,b,0,0,1,a,0,0,0,1).p(0,new V.a5(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
r=new U.cV()
r.r=r.f=r.e=r.d=r.c=r.b=r.a=0
r.seg(0)
r.se6(0,0)
r.se9(0)
a1=r.d
if(!(Math.abs(a1-0)<$.I().a)){r.d=0
a1=new D.y("deltaYaw",a1,0,o)
a1.b=!0
a2=r.y
if(a2!=null)a2.v(a1)}r.sc9(0)
r.sca(0)
C.a.h(i,r)
a3=U.l5()
a1=H.ad(a3,"X",0)
H.E(r,a1)
a2=[a1]
if(H.B(a3.au(H.d([r],a2)))){a4=a3.a
a5=a4.length
C.a.h(a4,r)
a4=H.i(H.d([r],a2),"$ic",[a1],"$ac")
a6=a3.c
if(a6!=null)a6.$2(a5,a4)}a4=new U.cB()
a4.sU(0,a0)
H.E(a4,a1)
if(H.B(a3.au(H.d([a4],a2)))){a6=a3.a
a5=a6.length
C.a.h(a6,a4)
a1=H.i(H.d([a4],a2),"$ic",[a1],"$ac")
a2=a3.c
if(a2!=null)a2.$2(a5,a1)}a7=E.cF(c0)
a7.saI(j)
a7.sct(a3)
a1=a7.y
a2=H.v(a1,0)
H.E(f,a2)
a4=[a2]
if(H.B(a1.au(H.d([f],a4)))){a6=a1.a
a5=a6.length
C.a.h(a6,f)
a2=H.i(H.d([f],a4),"$ic",[a2],"$ac")
a1=a1.c
if(a1!=null)a1.$2(a5,a2)}a1=e.y
a2=H.v(a1,0)
H.E(a7,a2)
a4=[a2]
if(H.B(a1.au(H.d([a7],a4)))){a6=a1.a
a5=a6.length
C.a.h(a6,a7)
a2=H.i(H.d([a7],a4),"$ic",[a2],"$ac")
a1=a1.c
if(a1!=null)a1.$2(a5,a2)}a1=V.mv(h.length/125,1,1)
k=new V.a2(Math.floor(a1.a*255)/255,Math.floor(a1.b*255)/255,Math.floor(a1.c*255)/255,Math.floor(255)/255)
C.a.h(h,k)
a8=E.cF(c0)
a1=new O.ig()
a1.b=k
a8.saI(a1)
a8.sct(a3)
a1=a8.y
a2=H.v(a1,0)
H.E(f,a2)
a4=[a2]
if(H.B(a1.au(H.d([f],a4)))){a6=a1.a
a5=a6.length
C.a.h(a6,f)
a2=H.i(H.d([f],a4),"$ic",[a2],"$ac")
a1=a1.c
if(a1!=null)a1.$2(a5,a2)}a1=d.y
a2=H.v(a1,0)
H.E(a8,a2)
a4=[a2]
if(H.B(a1.au(H.d([a8],a4)))){a6=a1.a
a5=a6.length
C.a.h(a6,a8)
a2=H.i(H.d([a8],a4),"$ic",[a2],"$ac")
a1=a1.c
if(a1!=null)a1.$2(a5,a2)}}a9=new X.fz()
a9.d=a9.c=a9.b=a9.a=512
a9.e=!0
a9.f=!1
a9.x=a9.r=1
a9.ch=T.lr(c0)
a9.cx=new V.a2(0,0,0,1)
a9.cy=!0
a9.db=2000
a9.dx=!0
a9.dy=V.e4()
a9.sao(0,512)
a9.sak(0,512)
k=new V.a2(0,0,0,1)
if(!a9.cx.n(0,k)){m=a9.cx
a9.cx=k
a1=new D.y("color",m,k,q)
a1.b=!0
a9.Z(a1)}a1=a9.db
if(!(Math.abs(a1-2000)<$.I().a)){a9.db=2000
a1=new D.y("depth",a1,2000,o)
a1.b=!0
a9.Z(a1)}if(!a9.f){a9.f=!0
a1=new D.y("autoResize",!1,!0,[P.S])
a1.b=!0
a9.Z(a1)}a1=a9.r
if(!(Math.abs(a1-0.5)<$.I().a)){a9.r=0.5
a1=new D.y("autoResizeScalarX",a1,0.5,o)
a1.b=!0
a9.Z(a1)}a1=a9.x
if(!(Math.abs(a1-0.5)<$.I().a)){a9.x=0.5
o=new D.y("autoResizeScalarY",a1,0.5,o)
o.b=!0
a9.Z(o)}b0=V.e4()
if(!J.V(a9.dy,b0)){m=a9.dy
a9.dy=b0
o=new D.y("region",m,b0,[V.bP])
o.b=!0
a9.Z(o)}b1=M.l4()
b1.e.h(0,d)
b1.saH(0,a9)
b1.saT(l)
b2=X.kp(!1,c0)
b3=M.l4()
b3.e.h(0,e)
b3.saH(0,b2)
b3.saT(l)
o=s.f.dY("../resources/maskonaive",".jpg")
b4=M.l_()
a1=new O.e8()
a1.b=1.0471975511965976
a1.d=new V.W(1,1,1)
m=a1.c
a1.c=o
o.gm().h(0,a1.ga6())
o=new D.y("boxTexture",m,a1.c,[T.d2])
o.b=!0
a1.A(o)
b4.saI(a1)
b4.saH(0,b2)
b4.saT(l)
b5=new O.eg()
b5.a=new V.a2(0,0,0,0)
b5.sfe(O.fH(O.aU))
b5.c.aK(b5.gh1(),b5.gh3())
b5.d=0
b5.e=null
b5.r=b5.f=C.i
b6=new V.a2(0,0,0,0)
if(!b5.a.n(0,b6)){m=b5.a
b5.a=b6
q=new D.y("backColor",m,b6,q)
q.b=!0
b5.A(q)}q=b5.f
if(q!==C.i){b5.f=C.i
q=new D.y("blend",q,C.i,[A.bA])
q.b=!0
b5.A(q)}q=b5.c
o=new O.aU()
o.san(c0)
a0=V.bN()
if(!J.V(o.b,a0)){m=o.b
o.b=a0
c2=new D.y("colorMatrix",m,a0,[c2])
c2.b=!0
o.A(c2)}b7=V.e4()
if(!J.V(o.c,b7)){m=o.c
o.c=b7
c2=new D.y("source",m,b7,[V.bP])
c2.b=!0
o.A(c2)}o.sdG(0,c0)
if(o.e!==!1){o.e=!1
c2=new D.y("flip",!0,!1,[P.S])
c2.b=!0
o.A(c2)}o.f=null
o.sdG(0,V.e3(0,0.75,0.25,0.25))
o.san(a9.ch)
q.h(0,o)
b8=M.l_()
b8.saI(b5)
b8.saH(0,b2)
c2=s.y
if(c2==null)c2=s.y=D.J()
c2.h(0,new M.ka(i))
c2=s.f
q=s.r
o=a9.ch
a1=new T.dx()
a1.a=c2
a1.z=4
a1.ch=a1.Q=!1
n=new X.ar(!1,!1,!1)
a1.c=n
c2=new D.y(c1,c0,n,p)
c2.b=!0
a1.bf(c2)
c2=a1.d
if(c2!==o){if(c2!=null)c2.gm().M(0,a1.gcX())
m=a1.d
a1.d=o
o.gm().h(0,a1.gcX())
c2=new D.y("texture",m,a1.d,[T.d1])
c2.b=!0
a1.bf(c2)}a1.aE(q)
c2=a1.x
if(c2==null)c2=a1.x=D.J()
c2.h(0,new M.kb(h,i))
c2=M.ax
q=H.d([b1,b4,b3,b8],[c2])
p=new M.dz()
p.bd(c2)
p.e=!0
p.f=!1
p.r=null
p.aK(p.ght(),p.ghv())
p.a9(0,q)
c2=s.d
if(c2!==p){if(c2!=null)c2.gm().M(0,s.gcU())
s.d=p
p.gm().h(0,s.gcU())
s.cV()}c2=new V.fC("buttons")
u=u.getElementById("buttons")
c2.b=u
if(u==null)H.z("Failed to find buttons for ButtonGroup")
c2.seZ(H.d([],[W.bx]))
c2.ih(0,"Back target snapshot",new M.kc(s,a9))
V.of(s)},
ka:function ka(a){this.a=a},
kb:function kb(a,b){this.a=a
this.b=b},
kc:function kc(a,b){this.a=a
this.b=b}},A={
mJ:function(a,b){var u=a.b8,t=new A.dW(b,u)
t.be(b,u)
t.eu(a,b)
return t},
mK:function(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
H.i(b0,"$ib",[A.aB],"$ab")
H.i(b1,"$ib",[A.aD],"$ab")
H.i(b2,"$ib",[A.aF],"$ab")
u="MaterialLight_"+a1.gar(a1)+a2.gar(a2)+a3.gar(a3)+a4.gar(a4)+a5.gar(a5)+a6.gar(a6)+a7.gar(a7)+a8.gar(a8)+a9.gar(a9)+"_"
u+=a?"1":"0"
u+=b?"1":"0"
u+=c?"1":"0"
u=u+"0_"+a0
t=b0.length
if(t>0){u+="_Dir"
for(s=0;s<b0.length;b0.length===t||(0,H.w)(b0),++s)u+="_"+H.k(b0[s].a)}t=b1.length
if(t>0){u+="_Point"
for(s=0;s<b1.length;b1.length===t||(0,H.w)(b1),++s)u+="_"+H.k(b1[s].a)}t=b2.length
if(t>0){u+="_Spot"
for(s=0;s<b2.length;b2.length===t||(0,H.w)(b2),++s)u+="_"+H.k(b2[s].a)}for(t=b0.length,r=0,q=!1,s=0;s<t;++s,q=!0)r+=b0[s].b
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
e=$.aq()
if(j){t=$.bt()
e=new Z.bo(e.a|t.a)}if(i){t=$.bs()
e=new Z.bo(e.a|t.a)}if(h){t=$.bu()
e=new Z.bo(e.a|t.a)}if(g){t=$.br()
e=new Z.bo(e.a|t.a)}return new A.hr(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,r,o,k,o,q,f,!0,!1,!1,n,q,l,j,i,!1,h,g,!1,b,c,!1,a0,u.charCodeAt(0)==0?u:u,e)},
jX:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
jY:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.jX(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.kg(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
nr:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jX(b,t,"emission")
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
no:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jY(b,t,"ambient")
b.a+="\n"},
np:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jY(b,t,"diffuse")
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
ns:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jY(b,t,"invDiffuse")
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
ny:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jY(b,t,"specular")
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
nu:function(a,b){var u,t,s
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
nw:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jX(b,t,"reflect")
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
nx:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jX(b,t,"refract")
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
nq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.k(u)
s=A.kg(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ay()
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
r=[P.l]
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
nv:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.k(u)
s=A.kg(t)
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
if(typeof u!=="number")return u.ay()
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
c.a=r+"\n"}r=[P.l]
l=H.d([],r)
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
nz:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.k(u)
s=A.kg(t)
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
if(typeof u!=="number")return u.ay()
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
c.a=u+"\n"}u=[P.l]
j=H.d([],u)
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
nt:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.d([],[P.l])
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
u=b.a+="   return "+C.a.q(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
nA:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.bQ("")
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
A.nr(a,i)
A.no(a,i)
A.np(a,i)
A.ns(a,i)
A.ny(a,i)
t=a.cy
if(t){r=i.a+="// === Enviromental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.nw(a,i)
A.nx(a,i)}A.nu(a,i)
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
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.w)(q),++n)A.nq(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.w)(q),++n)A.nv(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.w)(q),++n)A.nz(a,q[n],i)
A.nt(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.d([],[P.l])
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
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.w)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.h(r,0)
i.a+=l+(r[0].toUpperCase()+C.e.b_(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.w)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.h(r,0)
i.a+=l+(r[0].toUpperCase()+C.e.b_(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.w)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.h(r,0)
i.a+=l+(r[0].toUpperCase()+C.e.b_(r,1))+"Values(norm);\n"}if(a.cx<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
u=i.a+="   vec4 objClr = vec4("+C.a.q(m," + ")+", alpha);\n"
if(s)u=i.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
nB:function(a,b){var u,t,s
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
nD:function(a,b){var u
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
nC:function(a,b){var u
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
nF:function(a,b){var u,t
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
nG:function(a,b){var u,t
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
nE:function(a,b){var u
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
nH:function(a,b){var u
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
kg:function(a){if(0>=a.length)return H.h(a,0)
return a[0].toUpperCase()+C.e.b_(a,1)},
n5:function(a,b){var u,t,s,r
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+="\nvec4 clrAccum;\n"
s=b===C.K
t=(s||b===C.v?t+"float colorCount;\n":t)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.J)t+="      clrAccum += color;\n"
else if(b===C.i)t+="      clrAccum = mix(clrAccum, color, color.a);\n"
else t=s?t+"      clrAccum += color;\n      colorCount += 1.0;\n":t+"      clrAccum = color;\n      colorCount = 1.0;\n"
t+="   }\n}\n\nvoid layoutAll()\n{\n"
r=b===C.v
if(r)for(u=a-1;u>=0;--u)t=t+("   if(txtCount > "+u+")\n")+"   {\n"+("     layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return;\n")+("   layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(s)t+="   colorCount = 1.0;\n"
else if(r)t+="   colorCount = 0.0;\n"
t+="   layoutAll();\n"
t=(s?t+"   clrAccum = clrAccum/colorCount;\n":t)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return t.charCodeAt(0)==0?t:t},
n4:function(a,b,c){var u="TextureLayout_"+a+"_"+C.d.i(b.a),t=new A.eh(c,u)
t.be(c,u)
t.ey(a,b,c)
return t},
kA:function(a,b,c,d,e){var u=new A.iN(a,c,e)
u.f=d
u.sie(P.mI(d,0,P.q))
return u},
ds:function ds(a,b,c){this.a=a
this.b=b
this.c=c},
fu:function fu(a){this.a=a},
ah:function ah(a,b,c){this.a=a
this.b=b
this.c=c},
dW:function dW(a,b){var _=this
_.dJ=_.jt=_.dI=_.bq=_.b8=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jB=_.jA=_.jz=_.cj=_.ci=_.cg=_.cf=_.ce=_.cd=_.dV=_.jy=_.dU=_.dT=_.jx=_.dS=_.dR=_.dQ=_.jw=_.dP=_.dO=_.dN=_.jv=_.dM=_.dL=_.ju=_.dK=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aB:function aB(a,b){this.a=a
this.b=b},
aD:function aD(a,b){this.a=a
this.b=b},
aF:function aF(a,b){this.a=a
this.b=b},
hr:function hr(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.b8=b3
_.bq=b4},
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
bA:function bA(a,b){this.a=a
this.b=b},
e9:function e9(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ea:function ea(a,b){var _=this
_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eh:function eh(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ek:function ek(){},
iR:function iR(a){this.a=a},
ak:function ak(a,b,c){this.a=a
this.c=b
this.d=c},
iO:function iO(a,b,c){this.a=a
this.c=b
this.d=c},
iP:function iP(a,b,c){this.a=a
this.c=b
this.d=c},
iQ:function iQ(a,b,c){this.a=a
this.c=b
this.d=c},
iN:function iN(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a8:function a8(a,b,c){this.a=a
this.c=b
this.d=c},
ay:function ay(a,b,c){this.a=a
this.c=b
this.d=c},
Z:function Z(a,b,c){this.a=a
this.c=b
this.d=c},
bT:function bT(a,b,c){this.a=a
this.c=b
this.d=c},
iS:function iS(a,b,c){this.a=a
this.c=b
this.d=c},
d6:function d6(a,b,c){this.a=a
this.c=b
this.d=c},
ac:function ac(a,b,c){this.a=a
this.c=b
this.d=c},
bc:function bc(a,b,c){this.a=a
this.c=b
this.d=c},
ag:function ag(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jW:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dj:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.M(h,g+a1,f+a2)
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
j.d=i}m=F.jW(i)
l=F.jW(j.b)
k=F.ok(d,a0,new F.jV(j,F.jW(j.c),F.jW(j.d),l,m,c),b)
if(k!=null)a.iR(k)},
ok:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.m(c,{func:1,ret:-1,args:[F.az,P.A,P.A]})
if(a<1)return
if(b<1)return
u=F.kw()
t=H.d([],[F.az])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.j1(g,g,new V.a2(p,0,0,1),g,g,new V.a7(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.c6(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.j1(g,g,new V.a2(j,i,h,1),g,g,new V.a7(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.c6(d))}}u.d.il(a+1,b+1,t)
return u},
cG:function(a,b,c){var u=new F.a4(),t=a.a
if(t==null)H.z(P.x("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.z(P.x("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a2()
return u},
mG:function(a,b){var u=new F.bi(),t=a.a
if(t==null)H.z(P.x("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.z(P.x("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a2()
return u},
kw:function(){var u=new F.e7(),t=new F.j2(u)
t.b=!1
t.sig(H.d([],[F.az]))
u.a=t
t=new F.ib(u)
t.sbV(H.d([],[F.bO]))
u.b=t
t=new F.ia(u)
t.sfq(H.d([],[F.bi]))
u.c=t
t=new F.i9(u)
t.sfg(H.d([],[F.a4]))
u.d=t
u.e=null
return u},
j1:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.az(),r=new F.j7()
r.sbV(H.d([],[F.bO]))
s.b=r
r=new F.j6()
u=[F.bi]
r.sfs(H.d([],u))
r.sft(H.d([],u))
s.c=r
r=new F.j3()
u=[F.a4]
r.sfh(H.d([],u))
r.sfi(H.d([],u))
r.sfj(H.d([],u))
s.d=r
h=$.md()
s.e=0
r=$.aq()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bt().a)!==0?e:t
s.x=(u&$.bs().a)!==0?b:t
s.y=(u&$.bY().a)!==0?f:t
s.z=(u&$.bu().a)!==0?g:t
s.Q=(u&$.me().a)!==0?c:t
s.ch=(u&$.cv().a)!==0?i:0
s.cx=(u&$.br().a)!==0?a:t
return s},
jV:function jV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a4:function a4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bi:function bi(){this.b=this.a=null},
bO:function bO(){this.a=null},
e7:function e7(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i9:function i9(a){this.a=a
this.b=null},
ia:function ia(a){this.a=a
this.b=null},
ib:function ib(a){this.a=a
this.b=null},
az:function az(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j9:function j9(a){this.a=a},
j8:function j8(a){this.a=a},
j2:function j2(a){this.a=a
this.c=this.b=null},
j3:function j3(){this.d=this.c=this.b=null},
j4:function j4(a,b){this.a=a
this.b=b},
j5:function j5(a,b){this.a=a
this.b=b},
j6:function j6(){this.c=this.b=null},
j7:function j7(){this.b=null}},T={
lr:function(a){var u=new T.iz()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
ls:function(a,b,c,d,e,f,g){var u,t,s
if(f==null)f=0
if(g==null)g=0
if(e==null)e=b.r
if(d==null)d=b.x
u=b.x
a.bindFramebuffer(36160,a.createFramebuffer())
a.readBuffer(36064)
a.framebufferTexture2D(36160,36064,3553,b.b,0)
t=new Uint8Array(e*d*4)
a.readPixels(f,u-d-g,e,d,6408,5121,t)
a.bindFramebuffer(36160,null)
s=new T.iC(t,e,d)
s.fl()
return s},
dx:function dx(){var _=this
_.ch=_.Q=_.z=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dy:function dy(a,b){this.c=a
this.d=b
this.b=null},
ce:function ce(){},
d1:function d1(){},
iz:function iz(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d2:function d2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iA:function iA(a){var _=this
_.a=a
_.e=_.d=_.c=null},
iB:function iB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iC:function iC(a,b,c){this.a=a
this.b=b
this.c=c}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kt.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gI:function(a){return H.cT(a)},
i:function(a){return"Instance of '"+H.ca(a)+"'"}}
J.hb.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iS:1}
J.dM.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.dN.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.hV.prototype={}
J.bU.prototype={}
J.bM.prototype={
i:function(a){var u=a[$.m2()]
if(u==null)return this.ep(a)
return"JavaScript function for "+H.k(J.av(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibG:1}
J.b3.prototype={
h:function(a,b){H.E(b,H.v(a,0))
if(!!a.fixed$length)H.z(P.H("add"))
a.push(b)},
M:function(a,b){var u
if(!!a.fixed$length)H.z(P.H("remove"))
for(u=0;u<a.length;++u)if(J.V(a[u],b)){a.splice(u,1)
return!0}return!1},
a9:function(a,b){var u,t
H.i(b,"$ic",[H.v(a,0)],"$ac")
if(!!a.fixed$length)H.z(P.H("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.w)(b),++t)a.push(b[t])},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.bB(a))}},
q:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.l(t,u,H.k(a[u]))
return t.join(b)},
iO:function(a){return this.q(a,"")},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
em:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.aE(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.aE(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.v(a,0)])
return H.d(a.slice(b,c),[H.v(a,0)])},
gcm:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.l6())},
dB:function(a,b){var u,t
H.m(b,{func:1,ret:P.S,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.B(b.$1(a[t])))return!0
if(a.length!==u)throw H.f(P.bB(a))}return!1},
bC:function(a,b){var u=H.v(a,0)
H.m(b,{func:1,ret:P.q,args:[u,u]})
if(!!a.immutable$list)H.z(P.H("sort"))
H.eb(a,0,a.length-1,b,u)},
P:function(a,b){var u
for(u=0;u<a.length;++u)if(J.V(a[u],b))return!0
return!1},
i:function(a){return P.kq(a,"[","]")},
gR:function(a){return new J.al(a,a.length,[H.v(a,0)])},
gI:function(a){return H.cT(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.z(P.H("set length"))
if(b<0)throw H.f(P.aE(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.f(H.cp(a,b))
return a[b]},
l:function(a,b,c){H.E(c,H.v(a,0))
if(!!a.immutable$list)H.z(P.H("indexed set"))
if(b>=a.length||b<0)throw H.f(H.cp(a,b))
a[b]=c},
$ic:1,
$ib:1}
J.ks.prototype={}
J.al.prototype={
gH:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.w(s))
u=t.c
if(u>=r){t.sdd(null)
return!1}t.sdd(s[u]);++t.c
return!0},
sdd:function(a){this.d=H.E(a,H.v(this,0))},
$ib2:1}
J.c5.prototype={
iv:function(a,b){var u
H.lV(b)
if(typeof b!=="number")throw H.f(H.bp(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbs(b)
if(this.gbs(a)===u)return 0
if(this.gbs(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbs:function(a){return a===0?1/a<0:a<0},
ji:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.H(""+a+".toInt()"))},
aV:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.H(""+a+".floor()"))},
W:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.H(""+a+".round()"))},
ee:function(a,b){var u
if(b>20)throw H.f(P.aE(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbs(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bB:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
es:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dv(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.dv(a,b)},
dv:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.H("Result of truncating division is "+H.k(u)+": "+H.k(a)+" ~/ "+b))},
bk:function(a,b){var u
if(a>0)u=this.hW(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hW:function(a,b){return b>31?0:a>>>b},
aJ:function(a,b){if(typeof b!=="number")throw H.f(H.bp(b))
return a>b},
$iA:1,
$iaa:1}
J.dL.prototype={$iq:1}
J.dK.prototype={}
J.bL.prototype={
c5:function(a,b){if(b<0)throw H.f(H.cp(a,b))
if(b>=a.length)H.z(H.cp(a,b))
return a.charCodeAt(b)},
bg:function(a,b){if(b>=a.length)throw H.f(H.cp(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(typeof b!=="string")throw H.f(P.kk(b,null,null))
return a+b},
el:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
cP:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.hZ(b,null))
if(b>c)throw H.f(P.hZ(b,null))
if(c>a.length)throw H.f(P.hZ(c,null))
return a.substring(b,c)},
b_:function(a,b){return this.cP(a,b,null)},
jk:function(a){return a.toLowerCase()},
p:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.H)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
am:function(a,b){var u=b-a.length
if(u<=0)return a
return this.p(" ",u)+a},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ili:1,
$il:1}
H.a3.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.e.c5(this.a,b)},
$aci:function(){return[P.q]},
$at:function(){return[P.q]},
$ac:function(){return[P.q]},
$ab:function(){return[P.q]}}
H.fV.prototype={}
H.c6.prototype={
gR:function(a){var u=this
return new H.cK(u,u.gk(u),[H.ad(u,"c6",0)])},
bA:function(a,b){return this.eo(0,H.m(b,{func:1,ret:P.S,args:[H.ad(this,"c6",0)]}))}}
H.it.prototype={
gfc:function(){var u=J.aZ(this.a)
return u},
gi0:function(){var u=J.aZ(this.a),t=this.b
if(t>u)return u
return t},
gk:function(a){var u=J.aZ(this.a),t=this.b
if(t>=u)return 0
return u-t},
B:function(a,b){var u,t=this,s=t.gi0()+b
if(b>=0){u=t.gfc()
if(typeof u!=="number")return H.F(u)
u=s>=u}else u=!0
if(u)throw H.f(P.Y(b,t,"index",null,null))
return J.dq(t.a,s)},
cB:function(a,b){var u,t,s,r=this,q=r.b,p=r.a,o=J.fo(p),n=o.gk(p),m=n-q
if(m<0)m=0
u=new Array(m)
u.fixed$length=Array
t=H.d(u,r.$ti)
for(s=0;s<m;++s){C.a.l(t,s,o.B(p,q+s))
if(o.gk(p)<n)throw H.f(P.bB(r))}return t}}
H.cK.prototype={
gH:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=J.fo(s),q=r.gk(s)
if(t.b!==q)throw H.f(P.bB(s))
u=t.c
if(u>=q){t.sb1(null)
return!1}t.sb1(r.B(s,u));++t.c
return!0},
sb1:function(a){this.d=H.E(a,H.v(this,0))},
$ib2:1}
H.hm.prototype={
gR:function(a){return new H.hn(J.c_(this.a),this.b,this.$ti)},
gk:function(a){return J.aZ(this.a)},
B:function(a,b){return this.b.$1(J.dq(this.a,b))},
$ac:function(a,b){return[b]}}
H.hn.prototype={
t:function(){var u=this,t=u.b
if(t.t()){u.sb1(u.c.$1(t.gH(t)))
return!0}u.sb1(null)
return!1},
gH:function(a){return this.a},
sb1:function(a){this.a=H.E(a,H.v(this,1))},
$ab2:function(a,b){return[b]}}
H.ho.prototype={
gk:function(a){return J.aZ(this.a)},
B:function(a,b){return this.b.$1(J.dq(this.a,b))},
$ac6:function(a,b){return[b]},
$ac:function(a,b){return[b]}}
H.d7.prototype={
gR:function(a){return new H.jb(J.c_(this.a),this.b,this.$ti)}}
H.jb.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(H.B(t.$1(u.gH(u))))return!0
return!1},
gH:function(a){var u=this.a
return u.gH(u)}}
H.c3.prototype={}
H.ci.prototype={
l:function(a,b,c){H.E(c,H.ad(this,"ci",0))
throw H.f(P.H("Cannot modify an unmodifiable list"))},
X:function(a,b,c,d,e){H.i(d,"$ic",[H.ad(this,"ci",0)],"$ac")
throw H.f(P.H("Cannot modify an unmodifiable list"))},
as:function(a,b,c,d){return this.X(a,b,c,d,0)}}
H.em.prototype={}
H.iK.prototype={
al:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hR.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.k(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hd.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.k(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.k(t.a)+")"
return s+r+"' on '"+u+"' ("+H.k(t.a)+")"}}
H.iU.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kh.prototype={
$1:function(a){if(!!J.T(a).$ibE)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:14}
H.f0.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$ias:1}
H.cz.prototype={
i:function(a){return"Closure '"+H.ca(this).trim()+"'"},
$ibG:1,
gjn:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iw.prototype={}
H.ik.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cu(u)+"'"}}
H.cx.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cx))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.cT(this.a)
else u=typeof t!=="object"?J.bZ(t):H.cT(t)
return(u^H.cT(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.ca(u)+"'")}}
H.iM.prototype={
i:function(a){return this.a}}
H.fF.prototype={
i:function(a){return this.a}}
H.i6.prototype={
i:function(a){return"RuntimeError: "+H.k(this.a)}}
H.jc.prototype={
i:function(a){return"Assertion failed: "+P.dH(this.a)}}
H.a1.prototype={
gk:function(a){return this.a},
gaa:function(a){return new H.dQ(this,[H.v(this,0)])},
dF:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.d9(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.d9(t,b)}else return s.iM(b)},
iM:function(a){var u=this.d
if(u==null)return!1
return this.ck(this.bQ(u,J.bZ(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bh(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bh(r,b)
s=t==null?null:t.b
return s}else return q.iN(b)},
iN:function(a){var u,t,s=this.d
if(s==null)return
u=this.bQ(s,J.bZ(a)&0x3ffffff)
t=this.ck(u,a)
if(t<0)return
return u[t].b},
l:function(a,b,c){var u,t,s,r,q,p,o=this
H.E(b,H.v(o,0))
H.E(c,H.v(o,1))
if(typeof b==="string"){u=o.b
o.cZ(u==null?o.b=o.bT():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cZ(t==null?o.c=o.bT():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bT()
r=J.bZ(b)&0x3ffffff
q=o.bQ(s,r)
if(q==null)o.bZ(s,r,[o.bU(b,c)])
else{p=o.ck(q,b)
if(p>=0)q[p].b=c
else q.push(o.bU(b,c))}}},
J:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.v(s,0),H.v(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.f(P.bB(s))
u=u.c}},
cZ:function(a,b,c){var u,t=this
H.E(b,H.v(t,0))
H.E(c,H.v(t,1))
u=t.bh(a,b)
if(u==null)t.bZ(a,b,t.bU(b,c))
else u.b=c},
fB:function(){this.r=this.r+1&67108863},
bU:function(a,b){var u,t=this,s=new H.hg(H.E(a,H.v(t,0)),H.E(b,H.v(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fB()
return s},
ck:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.V(a[t].a,b))return t
return-1},
i:function(a){return P.lb(this)},
bh:function(a,b){return a[b]},
bQ:function(a,b){return a[b]},
bZ:function(a,b,c){a[b]=c},
f7:function(a,b){delete a[b]},
d9:function(a,b){return this.bh(a,b)!=null},
bT:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bZ(t,u,t)
this.f7(t,u)
return t}}
H.hg.prototype={}
H.dQ.prototype={
gk:function(a){return this.a.a},
gR:function(a){var u=this.a,t=new H.hh(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hh.prototype={
gH:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bB(t))
else{t=u.c
if(t==null){u.scY(null)
return!1}else{u.scY(t.a)
u.c=u.c.c
return!0}}},
scY:function(a){this.d=H.E(a,H.v(this,0))},
$ib2:1}
H.k6.prototype={
$1:function(a){return this.a(a)},
$S:14}
H.k7.prototype={
$2:function(a,b){return this.a(a,b)},
$S:34}
H.k8.prototype={
$1:function(a){return this.a(H.K(a))},
$S:35}
H.hc.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ili:1}
H.cP.prototype={
fo:function(a,b,c,d){var u=P.aE(b,0,c,d,null)
throw H.f(u)},
d1:function(a,b,c,d){if(b>>>0!==b||b>c)this.fo(a,b,c,d)},
$ioF:1}
H.dY.prototype={
gk:function(a){return a.length},
dt:function(a,b,c,d,e){var u,t,s=a.length
this.d1(a,b,s,"start")
this.d1(a,c,s,"end")
if(b>c)throw H.f(P.aE(b,0,c,null,null))
u=c-b
t=d.length
if(t-e<u)throw H.f(P.kx("Not enough elements"))
if(e!==0||t!==u)d=d.subarray(e,e+u)
a.set(d,b)},
$iL:1,
$aL:function(){}}
H.c8.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]},
l:function(a,b,c){H.nU(c)
H.bf(b,a,a.length)
a[b]=c},
X:function(a,b,c,d,e){H.i(d,"$ic",[P.A],"$ac")
if(!!J.T(d).$ic8){this.dt(a,b,c,d,e)
return}this.cQ(a,b,c,d,e)},
as:function(a,b,c,d){return this.X(a,b,c,d,0)},
$ac3:function(){return[P.A]},
$at:function(){return[P.A]},
$ic:1,
$ac:function(){return[P.A]},
$ib:1,
$ab:function(){return[P.A]}}
H.cO.prototype={
l:function(a,b,c){H.a0(c)
H.bf(b,a,a.length)
a[b]=c},
X:function(a,b,c,d,e){H.i(d,"$ic",[P.q],"$ac")
if(!!J.T(d).$icO){this.dt(a,b,c,d,e)
return}this.cQ(a,b,c,d,e)},
as:function(a,b,c,d){return this.X(a,b,c,d,0)},
$ac3:function(){return[P.q]},
$at:function(){return[P.q]},
$ic:1,
$ac:function(){return[P.q]},
$ib:1,
$ab:function(){return[P.q]}}
H.hJ.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hK.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hL.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hM.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hN.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.cQ.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bf(b,a,a.length)
return a[b]},
$ioG:1}
H.hO.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bf(b,a,a.length)
return a[b]},
$ioH:1}
H.db.prototype={}
H.dc.prototype={}
H.dd.prototype={}
H.de.prototype={}
P.je.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:18}
P.jd.prototype={
$1:function(a){var u,t
this.a.a=H.m(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:40}
P.jf.prototype={
$0:function(){this.a.$0()},
$S:2}
P.jg.prototype={
$0:function(){this.a.$0()},
$S:2}
P.f6.prototype={
eP:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.co(new P.jR(this,b),0),a)
else throw H.f(P.H("`setTimeout()` not found."))},
eQ:function(a,b){if(self.setTimeout!=null)self.setInterval(H.co(new P.jQ(this,a,Date.now(),b),0),a)
else throw H.f(P.H("Periodic timer."))},
$ib9:1}
P.jR.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jQ.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.es(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.be.prototype={
iQ:function(a){if(this.c!==6)return!0
return this.b.b.cA(H.m(this.d,{func:1,ret:P.S,args:[P.Q]}),a.a,P.S,P.Q)},
iL:function(a){var u=this.e,t=P.Q,s={futureOr:1,type:H.v(this,1)},r=this.b.b
if(H.fn(u,{func:1,args:[P.Q,P.as]}))return H.kN(r.jd(u,a.a,a.b,null,t,P.as),s)
else return H.kN(r.cA(H.m(u,{func:1,args:[P.Q]}),a.a,null,t),s)}}
P.aJ.prototype={
ed:function(a,b,c){var u,t,s,r=H.v(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a_
if(u!==C.f){u.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.nJ(b,u)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aJ($.a_,[c])
s=b==null?1:3
this.d_(new P.be(t,s,a,b,[r,c]))
return t},
jh:function(a,b){return this.ed(a,null,b)},
d_:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.e(t.c,"$ibe")
t.c=a}else{if(s===2){u=H.e(t.c,"$iaJ")
s=u.a
if(s<4){u.d_(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.k0(null,null,s,H.m(new P.jo(t,a),{func:1,ret:-1}))}},
dn:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.e(p.c,"$ibe")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.e(p.c,"$iaJ")
u=q.a
if(u<4){q.dn(a)
return}p.a=u
p.c=q.c}o.a=p.bj(a)
u=p.b
u.toString
P.k0(null,null,u,H.m(new P.js(o,p),{func:1,ret:-1}))}},
bX:function(){var u=H.e(this.c,"$ibe")
this.c=null
return this.bj(u)},
bj:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d5:function(a){var u,t,s=this,r=H.v(s,0)
H.kN(a,{futureOr:1,type:r})
u=s.$ti
if(H.k1(a,"$icH",u,"$acH"))if(H.k1(a,"$iaJ",u,null))P.lA(a,s)
else P.ne(a,s)
else{t=s.bX()
H.E(a,r)
s.a=4
s.c=a
P.da(s,t)}},
d6:function(a,b){var u,t=this
H.e(b,"$ias")
u=t.bX()
t.a=8
t.c=new P.am(a,b)
P.da(t,u)},
$icH:1}
P.jo.prototype={
$0:function(){P.da(this.a,this.b)},
$S:2}
P.js.prototype={
$0:function(){P.da(this.b,this.a.a)},
$S:2}
P.jp.prototype={
$1:function(a){var u=this.a
u.a=0
u.d5(a)},
$S:18}
P.jq.prototype={
$2:function(a,b){H.e(b,"$ias")
this.a.d6(a,b)},
$1:function(a){return this.$2(a,null)},
$S:36}
P.jr.prototype={
$0:function(){this.a.d6(this.b,this.c)},
$S:2}
P.jv.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.ea(H.m(s.d,{func:1}),null)}catch(r){u=H.au(r)
t=H.cs(r)
if(o.d){s=H.e(o.a.a.c,"$iam").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.e(o.a.a.c,"$iam")
else q.b=new P.am(u,t)
q.a=!0
return}if(!!J.T(n).$icH){if(n instanceof P.aJ&&n.a>=4){if(n.a===8){s=o.b
s.b=H.e(n.c,"$iam")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jh(new P.jw(p),null)
s.a=!1}},
$S:3}
P.jw.prototype={
$1:function(a){return this.a},
$S:41}
P.ju.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.v(s,0)
q=H.E(n.c,r)
p=H.v(s,1)
n.a.b=s.b.b.cA(H.m(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.au(o)
t=H.cs(o)
s=n.a
s.b=new P.am(u,t)
s.a=!0}},
$S:3}
P.jt.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.e(m.a.a.c,"$iam")
r=m.c
if(H.B(r.iQ(u))&&r.e!=null){q=m.b
q.b=r.iL(u)
q.a=!1}}catch(p){t=H.au(p)
s=H.cs(p)
r=H.e(m.a.a.c,"$iam")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.am(t,s)
n.a=!0}},
$S:3}
P.et.prototype={}
P.io.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.aJ($.a_,[P.q])
r.a=0
u=H.v(s,0)
t=H.m(new P.iq(r,s),{func:1,ret:-1,args:[u]})
H.m(new P.ir(r,q),{func:1,ret:-1})
W.a9(s.a,s.b,t,!1,u)
return q}}
P.iq.prototype={
$1:function(a){H.E(a,H.v(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.P,args:[H.v(this.b,0)]}}}
P.ir.prototype={
$0:function(){this.b.d5(this.a.a)},
$S:2}
P.cZ.prototype={}
P.ip.prototype={}
P.b9.prototype={}
P.am.prototype={
i:function(a){return H.k(this.a)},
$ibE:1}
P.jU.prototype={$ioV:1}
P.k_.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e_():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.i(0)
throw u},
$S:2}
P.jD.prototype={
je:function(a){var u,t,s,r=null
H.m(a,{func:1,ret:-1})
try{if(C.f===$.a_){a.$0()
return}P.lG(r,r,this,a,-1)}catch(s){u=H.au(s)
t=H.cs(s)
P.jZ(r,r,this,u,H.e(t,"$ias"))}},
jf:function(a,b,c){var u,t,s,r=null
H.m(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.f===$.a_){a.$1(b)
return}P.lH(r,r,this,a,b,-1,c)}catch(s){u=H.au(s)
t=H.cs(s)
P.jZ(r,r,this,u,H.e(t,"$ias"))}},
it:function(a,b){return new P.jF(this,H.m(a,{func:1,ret:b}),b)},
c0:function(a){return new P.jE(this,H.m(a,{func:1,ret:-1}))},
dC:function(a,b){return new P.jG(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
ea:function(a,b){H.m(a,{func:1,ret:b})
if($.a_===C.f)return a.$0()
return P.lG(null,null,this,a,b)},
cA:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.E(b,d)
if($.a_===C.f)return a.$1(b)
return P.lH(null,null,this,a,b,c,d)},
jd:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.E(b,e)
H.E(c,f)
if($.a_===C.f)return a.$2(b,c)
return P.nK(null,null,this,a,b,c,d,e,f)}}
P.jF.prototype={
$0:function(){return this.a.ea(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jE.prototype={
$0:function(){return this.a.je(this.b)},
$S:3}
P.jG.prototype={
$1:function(a){var u=this.c
return this.a.jf(this.b,H.E(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jA.prototype={
gR:function(a){return P.lD(this,this.r,H.v(this,0))},
gk:function(a){return this.a},
P:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.e(u[b],"$ick")!=null}else{t=this.f3(b)
return t}},
f3:function(a){var u=this.d
if(u==null)return!1
return this.bO(this.de(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.E(b,H.v(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.d2(u==null?s.b=P.kF():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.d2(t==null?s.c=P.kF():t,b)}else return s.eT(0,b)},
eT:function(a,b){var u,t,s,r=this
H.E(b,H.v(r,0))
u=r.d
if(u==null)u=r.d=P.kF()
t=r.d7(b)
s=u[t]
if(s==null)u[t]=[r.bL(b)]
else{if(r.bO(s,b)>=0)return!1
s.push(r.bL(b))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hI(this.c,b)
else return this.hH(0,b)},
hH:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.de(r,b)
t=s.bO(u,b)
if(t<0)return!1
s.dw(u.splice(t,1)[0])
return!0},
d2:function(a,b){H.E(b,H.v(this,0))
if(H.e(a[b],"$ick")!=null)return!1
a[b]=this.bL(b)
return!0},
hI:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$ick")
if(u==null)return!1
this.dw(u)
delete a[b]
return!0},
d4:function(){this.r=1073741823&this.r+1},
bL:function(a){var u,t=this,s=new P.ck(H.E(a,H.v(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.d4()
return s},
dw:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.d4()},
d7:function(a){return J.bZ(a)&1073741823},
de:function(a,b){return a[this.d7(b)]},
bO:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.V(a[t].a,b))return t
return-1}}
P.ck.prototype={}
P.jB.prototype={
gH:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bB(t))
else{t=u.c
if(t==null){u.sd3(null)
return!1}else{u.sd3(H.E(t.a,H.v(u,0)))
u.c=u.c.b
return!0}}},
sd3:function(a){this.d=H.E(a,H.v(this,0))},
$ib2:1}
P.hi.prototype={$ic:1,$ib:1}
P.t.prototype={
gR:function(a){return new H.cK(a,this.gk(a),[H.bg(this,a,"t",0)])},
B:function(a,b){return this.j(a,b)},
cB:function(a,b){var u,t=this,s=H.d([],[H.bg(t,a,"t",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.l(s,u,t.j(a,u))
return s},
jj:function(a){return this.cB(a,!0)},
X:function(a,b,c,d,e){var u,t,s,r,q=this,p=H.bg(q,a,"t",0)
H.i(d,"$ic",[p],"$ac")
P.kv(b,c,q.gk(a))
u=c-b
if(u===0)return
P.i_(e,"skipCount")
if(H.k1(d,"$ib",[p],"$ab")){t=e
s=d}else{s=H.n3(d,e,null,H.bg(J.T(d),d,"t",0)).cB(0,!1)
t=0}p=J.fo(s)
if(t+u>p.gk(s))throw H.f(H.mC())
if(t<b)for(r=u-1;r>=0;--r)q.l(a,b+r,p.j(s,t+r))
else for(r=0;r<u;++r)q.l(a,b+r,p.j(s,t+r))},
as:function(a,b,c,d){return this.X(a,b,c,d,0)},
ei:function(a,b,c){H.i(c,"$ic",[H.bg(this,a,"t",0)],"$ac")
this.as(a,b,b+c.length,c)},
i:function(a){return P.kq(a,"[","]")}}
P.hk.prototype={}
P.hl.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.k(a)
t.a=u+": "
t.a+=H.k(b)},
$S:19}
P.af.prototype={
J:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.bg(s,a,"af",0),H.bg(s,a,"af",1)]})
for(u=J.c_(s.gaa(a));u.t();){t=u.gH(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.aZ(this.gaa(a))},
i:function(a){return P.lb(a)},
$iG:1}
P.jI.prototype={
a9:function(a,b){var u
for(u=J.c_(H.i(b,"$ic",this.$ti,"$ac"));u.t();)this.h(0,u.gH(u))},
i:function(a){return P.kq(this,"{","}")},
B:function(a,b){var u,t,s,r=this
P.i_(b,"index")
for(u=P.lD(r,r.r,H.v(r,0)),t=0;u.t();){s=u.d
if(b===t)return s;++t}throw H.f(P.Y(b,r,"index",null,t))},
$ic:1,
$ilp:1}
P.eJ.prototype={}
P.cA.prototype={}
P.dA.prototype={}
P.fX.prototype={
$acA:function(){return[P.l,[P.b,P.q]]}}
P.iX.prototype={}
P.iY.prototype={
iw:function(a){var u,t,s=P.kv(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jS(u)
if(t.fk(a,0,s)!==s)t.dz(C.e.c5(a,s-1),0)
return new Uint8Array(u.subarray(0,H.nl(0,t.b,u.length)))},
$adA:function(){return[P.l,[P.b,P.q]]}}
P.jS.prototype={
dz:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.h(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.h(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.h(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.h(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.h(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.h(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.h(s,r)
s[r]=128|a&63
return!1}},
fk:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.e.c5(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.e.bg(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dz(r,C.e.bg(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.h(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.h(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.h(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.h(u,q)
u[q]=128|r&63}}return s}}
P.S.prototype={}
P.aA.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aA&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.d.bk(u,30))&1073741823},
i:function(a){var u=this,t=P.mw(H.mU(u)),s=P.dC(H.mS(u)),r=P.dC(H.mO(u)),q=P.dC(H.mP(u)),p=P.dC(H.mR(u)),o=P.dC(H.mT(u)),n=P.mx(H.mQ(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.A.prototype={}
P.bD.prototype={
aJ:function(a,b){return C.d.aJ(this.a,b.gjo())},
n:function(a,b){if(b==null)return!1
return b instanceof P.bD&&this.a===b.a},
gI:function(a){return C.d.gI(this.a)},
i:function(a){var u,t,s,r=new P.fU(),q=this.a
if(q<0)return"-"+new P.bD(0-q).i(0)
u=r.$1(C.d.a1(q,6e7)%60)
t=r.$1(C.d.a1(q,1e6)%60)
s=new P.fT().$1(q%1e6)
return""+C.d.a1(q,36e8)+":"+H.k(u)+":"+H.k(t)+"."+H.k(s)}}
P.fT.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:21}
P.fU.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:21}
P.bE.prototype={}
P.ft.prototype={
i:function(a){return"Assertion failed"}}
P.e_.prototype={
i:function(a){return"Throw of null."}}
P.aL.prototype={
gbN:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbM:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+H.k(p)
t=q.gbN()+o+u
if(!q.a)return t
s=q.gbM()
r=P.dH(q.b)
return t+s+": "+r}}
P.cb.prototype={
gbN:function(){return"RangeError"},
gbM:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.k(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.k(s)
else if(t>s)u=": Not in range "+H.k(s)+".."+H.k(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.k(s)}return u}}
P.ha.prototype={
gbN:function(){return"RangeError"},
gbM:function(){var u,t=H.a0(this.b)
if(typeof t!=="number")return t.af()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.k(u)},
gk:function(a){return this.f}}
P.iV.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iT.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cd.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fJ.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dH(u)+"."}}
P.hU.prototype={
i:function(a){return"Out of Memory"},
$ibE:1}
P.ed.prototype={
i:function(a){return"Stack Overflow"},
$ibE:1}
P.fO.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eB.prototype={
i:function(a){return"Exception: "+this.a}}
P.h6.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.e.cP(s,0,75)+"...":s
return t+"\n"+r}}
P.bG.prototype={}
P.q.prototype={}
P.c.prototype={
bA:function(a,b){var u=H.ad(this,"c",0)
return new H.d7(this,H.m(b,{func:1,ret:P.S,args:[u]}),[u])},
gk:function(a){var u,t=this.gR(this)
for(u=0;t.t();)++u
return u},
gaL:function(a){var u,t=this.gR(this)
if(!t.t())throw H.f(H.l6())
u=t.gH(t)
if(t.t())throw H.f(H.mD())
return u},
B:function(a,b){var u,t,s
P.i_(b,"index")
for(u=this.gR(this),t=0;u.t();){s=u.gH(u)
if(b===t)return s;++t}throw H.f(P.Y(b,this,"index",null,t))},
i:function(a){return P.mB(this,"(",")")}}
P.b2.prototype={}
P.b.prototype={$ic:1}
P.G.prototype={}
P.P.prototype={
gI:function(a){return P.Q.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.Q.prototype={constructor:P.Q,$iQ:1,
n:function(a,b){return this===b},
gI:function(a){return H.cT(this)},
i:function(a){return"Instance of '"+H.ca(this)+"'"},
toString:function(){return this.i(this)}}
P.as.prototype={}
P.l.prototype={$ili:1}
P.bQ.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.u.prototype={}
W.fq.prototype={
gk:function(a){return a.length}}
W.dr.prototype={
i:function(a){return String(a)},
$idr:1}
W.fs.prototype={
i:function(a){return String(a)}}
W.cw.prototype={$icw:1}
W.dt.prototype={}
W.bv.prototype={$ibv:1}
W.bx.prototype={$ibx:1}
W.c2.prototype={
cH:function(a,b,c){if(c!=null)return a.getContext(b,P.nS(c))
return a.getContext(b)},
cG:function(a,b){return this.cH(a,b,null)},
$ic2:1}
W.by.prototype={
iz:function(a,b,c){var u=P.lP(a.createImageData(b,c))
return u},
j8:function(a,b,c,d){a.putImageData(P.lO(b),c,d)
return},
$iby:1}
W.bz.prototype={
gk:function(a){return a.length}}
W.cC.prototype={$icC:1}
W.fK.prototype={
gk:function(a){return a.length}}
W.U.prototype={$iU:1}
W.cD.prototype={
gk:function(a){return a.length}}
W.fL.prototype={}
W.b0.prototype={}
W.b1.prototype={}
W.fM.prototype={
gk:function(a){return a.length}}
W.fN.prototype={
gk:function(a){return a.length}}
W.fP.prototype={
gk:function(a){return a.length}}
W.dD.prototype={$idD:1}
W.fQ.prototype={
i:function(a){return String(a)}}
W.dE.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.i(c,"$iai",[P.aa],"$aai")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[[P.ai,P.aa]]},
$at:function(){return[[P.ai,P.aa]]},
$ic:1,
$ac:function(){return[[P.ai,P.aa]]},
$ib:1,
$ab:function(){return[[P.ai,P.aa]]},
$aC:function(){return[[P.ai,P.aa]]}}
W.dF.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gao(a))+" x "+H.k(this.gak(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iai)return!1
return a.left===u.gbt(b)&&a.top===u.gbw(b)&&this.gao(a)===u.gao(b)&&this.gak(a)===u.gak(b)},
gI:function(a){return W.lC(C.c.gI(a.left),C.c.gI(a.top),C.c.gI(this.gao(a)),C.c.gI(this.gak(a)))},
gdD:function(a){return a.bottom},
gak:function(a){return a.height},
gbt:function(a){return a.left},
gcz:function(a){return a.right},
gbw:function(a){return a.top},
gao:function(a){return a.width},
$iai:1,
$aai:function(){return[P.aa]}}
W.fR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.K(c)
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[P.l]},
$at:function(){return[P.l]},
$ic:1,
$ac:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]},
$aC:function(){return[P.l]}}
W.fS.prototype={
gk:function(a){return a.length}}
W.ji.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.e(u[b],"$iO")},
l:function(a,b,c){var u
H.e(c,"$iO")
u=this.b
if(b<0||b>=u.length)return H.h(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gR:function(a){var u=this.jj(this)
return new J.al(u,u.length,[H.v(u,0)])},
X:function(a,b,c,d,e){H.i(d,"$ic",[W.O],"$ac")
throw H.f(P.kB(null))},
as:function(a,b,c,d){return this.X(a,b,c,d,0)},
$at:function(){return[W.O]},
$ac:function(){return[W.O]},
$ab:function(){return[W.O]}}
W.O.prototype={
gis:function(a){return new W.jk(a)},
gc4:function(a){return new W.ji(a,a.children)},
gdE:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.af()
if(s<0)s=-s*0
if(typeof r!=="number")return r.af()
if(r<0)r=-r*0
return new P.ai(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
aj:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.l3
if(u==null){u=H.d([],[W.aw])
t=new W.dZ(u)
C.a.h(u,W.lB(null))
C.a.h(u,W.lE())
$.l3=t
d=t}else d=u
u=$.l2
if(u==null){u=new W.fc(d)
$.l2=u
c=u}else{u.a=d
c=u}}if($.bh==null){u=document
t=u.implementation.createHTMLDocument("")
$.bh=t
$.ko=t.createRange()
t=$.bh.createElement("base")
H.e(t,"$icw")
t.href=u.baseURI
$.bh.head.appendChild(t)}u=$.bh
if(u.body==null){t=u.createElement("body")
u.body=H.e(t,"$ibv")}u=$.bh
if(!!this.$ibv)s=u.body
else{s=u.createElement(a.tagName)
$.bh.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.P(C.P,a.tagName)){$.ko.selectNodeContents(s)
r=$.ko.createContextualFragment(b)}else{s.innerHTML=b
r=$.bh.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bh.body
if(s==null?u!=null:s!==u)J.kV(s)
c.cI(r)
document.adoptNode(r)
return r},
iy:function(a,b,c){return this.aj(a,b,c,null)},
ej:function(a,b){a.textContent=null
a.appendChild(this.aj(a,b,null,null))},
$iO:1,
geb:function(a){return a.tagName}}
W.fW.prototype={
$1:function(a){return!!J.T(H.e(a,"$iD")).$iO},
$S:25}
W.n.prototype={$in:1}
W.j.prototype={
ij:function(a,b,c,d){H.m(c,{func:1,args:[W.n]})
if(c!=null)this.eU(a,b,c,!1)},
eU:function(a,b,c,d){return a.addEventListener(b,H.co(H.m(c,{func:1,args:[W.n]}),1),!1)},
$ij:1}
W.aM.prototype={$iaM:1}
W.h0.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaM")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aM]},
$at:function(){return[W.aM]},
$ic:1,
$ac:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aC:function(){return[W.aM]}}
W.h1.prototype={
gk:function(a){return a.length}}
W.h5.prototype={
gk:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.h8.prototype={
gk:function(a){return a.length}}
W.c4.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iD")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.D]},
$at:function(){return[W.D]},
$ic:1,
$ac:function(){return[W.D]},
$ib:1,
$ab:function(){return[W.D]},
$ic4:1,
$aC:function(){return[W.D]}}
W.bH.prototype={$ibH:1,
gc8:function(a){return a.data}}
W.cJ.prototype={$icJ:1}
W.b4.prototype={$ib4:1}
W.dS.prototype={
i:function(a){return String(a)},
$idS:1}
W.hC.prototype={
gk:function(a){return a.length}}
W.hD.prototype={
j:function(a,b){return P.bq(a.get(H.K(b)))},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.l,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
gaa:function(a){var u=H.d([],[P.l])
this.J(a,new W.hE(u))
return u},
gk:function(a){return a.size},
$aaf:function(){return[P.l,null]},
$iG:1,
$aG:function(){return[P.l,null]}}
W.hE.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hF.prototype={
j:function(a,b){return P.bq(a.get(H.K(b)))},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.l,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
gaa:function(a){var u=H.d([],[P.l])
this.J(a,new W.hG(u))
return u},
gk:function(a){return a.size},
$aaf:function(){return[P.l,null]},
$iG:1,
$aG:function(){return[P.l,null]}}
W.hG.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aO.prototype={$iaO:1}
W.hH.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaO")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aO]},
$at:function(){return[W.aO]},
$ic:1,
$ac:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aC:function(){return[W.aO]}}
W.a6.prototype={$ia6:1}
W.ap.prototype={
gaL:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.f(P.kx("No elements"))
if(t>1)throw H.f(P.kx("More than one element"))
return u.firstChild},
a9:function(a,b){var u,t,s,r
H.i(b,"$ic",[W.D],"$ac")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
l:function(a,b,c){var u,t
H.e(c,"$iD")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.h(t,b)
u.replaceChild(c,t[b])},
gR:function(a){var u=this.a.childNodes
return new W.dI(u,u.length,[H.bg(C.T,u,"C",0)])},
X:function(a,b,c,d,e){H.i(d,"$ic",[W.D],"$ac")
throw H.f(P.H("Cannot setRange on Node list"))},
as:function(a,b,c,d){return this.X(a,b,c,d,0)},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$at:function(){return[W.D]},
$ac:function(){return[W.D]},
$ab:function(){return[W.D]}}
W.D.prototype={
j9:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
jb:function(a,b){var u,t
try{u=a.parentNode
J.mi(u,b,a)}catch(t){H.au(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.en(a):u},
hK:function(a,b,c){return a.replaceChild(b,c)},
$iD:1}
W.cR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iD")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.D]},
$at:function(){return[W.D]},
$ic:1,
$ac:function(){return[W.D]},
$ib:1,
$ab:function(){return[W.D]},
$aC:function(){return[W.D]}}
W.aP.prototype={$iaP:1,
gk:function(a){return a.length}}
W.hW.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaP")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aP]},
$at:function(){return[W.aP]},
$ic:1,
$ac:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aC:function(){return[W.aP]}}
W.i4.prototype={
j:function(a,b){return P.bq(a.get(H.K(b)))},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.l,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
gaa:function(a){var u=H.d([],[P.l])
this.J(a,new W.i5(u))
return u},
gk:function(a){return a.size},
$aaf:function(){return[P.l,null]},
$iG:1,
$aG:function(){return[P.l,null]}}
W.i5.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.i7.prototype={
gk:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.ih.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaQ")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aQ]},
$at:function(){return[W.aQ]},
$ic:1,
$ac:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aC:function(){return[W.aQ]}}
W.aR.prototype={$iaR:1}
W.ii.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaR")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aR]},
$at:function(){return[W.aR]},
$ic:1,
$ac:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aC:function(){return[W.aR]}}
W.aS.prototype={$iaS:1,
gk:function(a){return a.length}}
W.il.prototype={
j:function(a,b){return a.getItem(H.K(b))},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.l,P.l]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaa:function(a){var u=H.d([],[P.l])
this.J(a,new W.im(u))
return u},
gk:function(a){return a.length},
$aaf:function(){return[P.l,P.l]},
$iG:1,
$aG:function(){return[P.l,P.l]}}
W.im.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:46}
W.aG.prototype={$iaG:1}
W.bn.prototype={$ibn:1}
W.ee.prototype={
aj:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
u=W.my("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ap(t).a9(0,new W.ap(u))
return t}}
W.iu.prototype={
aj:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.x.aj(u.createElement("table"),b,c,d)
u.toString
u=new W.ap(u)
s=u.gaL(u)
s.toString
u=new W.ap(s)
r=u.gaL(u)
t.toString
r.toString
new W.ap(t).a9(0,new W.ap(r))
return t}}
W.iv.prototype={
aj:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.x.aj(u.createElement("table"),b,c,d)
u.toString
u=new W.ap(u)
s=u.gaL(u)
t.toString
s.toString
new W.ap(t).a9(0,new W.ap(s))
return t}}
W.d0.prototype={$id0:1}
W.aT.prototype={$iaT:1}
W.aH.prototype={$iaH:1}
W.ix.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaH")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aH]},
$at:function(){return[W.aH]},
$ic:1,
$ac:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aC:function(){return[W.aH]}}
W.iy.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaT")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aT]},
$at:function(){return[W.aT]},
$ic:1,
$ac:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aC:function(){return[W.aT]}}
W.iE.prototype={
gk:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.aW.prototype={$iaW:1}
W.iH.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaV")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aV]},
$at:function(){return[W.aV]},
$ic:1,
$ac:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aC:function(){return[W.aV]}}
W.iI.prototype={
gk:function(a){return a.length}}
W.bS.prototype={}
W.iW.prototype={
i:function(a){return String(a)}}
W.ja.prototype={
gk:function(a){return a.length}}
W.bd.prototype={
giC:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.H("deltaY is not supported"))},
giB:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.H("deltaX is not supported"))},
$ibd:1}
W.d8.prototype={
hL:function(a,b){return a.requestAnimationFrame(H.co(H.m(b,{func:1,ret:-1,args:[P.aa]}),1))},
fd:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d9.prototype={$id9:1}
W.jj.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iU")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.U]},
$at:function(){return[W.U]},
$ic:1,
$ac:function(){return[W.U]},
$ib:1,
$ab:function(){return[W.U]},
$aC:function(){return[W.U]}}
W.ew.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iai)return!1
return a.left===u.gbt(b)&&a.top===u.gbw(b)&&a.width===u.gao(b)&&a.height===u.gak(b)},
gI:function(a){return W.lC(C.c.gI(a.left),C.c.gI(a.top),C.c.gI(a.width),C.c.gI(a.height))},
gak:function(a){return a.height},
gao:function(a){return a.width}}
W.jx.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaN")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aN]},
$at:function(){return[W.aN]},
$ic:1,
$ac:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aC:function(){return[W.aN]}}
W.eO.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iD")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.D]},
$at:function(){return[W.D]},
$ic:1,
$ac:function(){return[W.D]},
$ib:1,
$ab:function(){return[W.D]},
$aC:function(){return[W.D]}}
W.jL.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaS")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aS]},
$at:function(){return[W.aS]},
$ic:1,
$ac:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aC:function(){return[W.aS]}}
W.jM.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaG")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aG]},
$at:function(){return[W.aG]},
$ic:1,
$ac:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$aC:function(){return[W.aG]}}
W.jh.prototype={
J:function(a,b){var u,t,s,r,q
H.m(b,{func:1,ret:-1,args:[P.l,P.l]})
for(u=this.gaa(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.w)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gaa:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.l])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.h(r,t)
s=H.e(r[t],"$id9")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aaf:function(){return[P.l,P.l]},
$aG:function(){return[P.l,P.l]}}
W.jk.prototype={
j:function(a,b){return this.a.getAttribute(H.K(b))},
gk:function(a){return this.gaa(this).length}}
W.jl.prototype={}
W.kE.prototype={}
W.jm.prototype={}
W.jn.prototype={
$1:function(a){return this.a.$1(H.e(a,"$in"))},
$S:30}
W.bV.prototype={
eA:function(a){var u
if($.eE.a===0){for(u=0;u<262;++u)$.eE.l(0,C.O[u],W.o1())
for(u=0;u<12;++u)$.eE.l(0,C.n[u],W.o2())}},
aS:function(a){return $.mg().P(0,W.cE(a))},
av:function(a,b,c){var u=$.eE.j(0,H.k(W.cE(a))+"::"+b)
if(u==null)u=$.eE.j(0,"*::"+b)
if(u==null)return!1
return H.kK(u.$4(a,b,c,this))},
$iaw:1}
W.C.prototype={
gR:function(a){return new W.dI(a,this.gk(a),[H.bg(this,a,"C",0)])},
X:function(a,b,c,d,e){H.i(d,"$ic",[H.bg(this,a,"C",0)],"$ac")
throw H.f(P.H("Cannot setRange on immutable List."))},
as:function(a,b,c,d){return this.X(a,b,c,d,0)}}
W.dZ.prototype={
aS:function(a){return C.a.dB(this.a,new W.hQ(a))},
av:function(a,b,c){return C.a.dB(this.a,new W.hP(a,b,c))},
$iaw:1}
W.hQ.prototype={
$1:function(a){return H.e(a,"$iaw").aS(this.a)},
$S:16}
W.hP.prototype={
$1:function(a){return H.e(a,"$iaw").av(this.a,this.b,this.c)},
$S:16}
W.eW.prototype={
eN:function(a,b,c,d){var u,t,s
this.a.a9(0,c)
u=b.bA(0,new W.jJ())
t=b.bA(0,new W.jK())
this.b.a9(0,u)
s=this.c
s.a9(0,C.Q)
s.a9(0,t)},
aS:function(a){return this.a.P(0,W.cE(a))},
av:function(a,b,c){var u=this,t=W.cE(a),s=u.c
if(s.P(0,H.k(t)+"::"+b))return u.d.im(c)
else if(s.P(0,"*::"+b))return u.d.im(c)
else{s=u.b
if(s.P(0,H.k(t)+"::"+b))return!0
else if(s.P(0,"*::"+b))return!0
else if(s.P(0,H.k(t)+"::*"))return!0
else if(s.P(0,"*::*"))return!0}return!1},
$iaw:1}
W.jJ.prototype={
$1:function(a){return!C.a.P(C.n,H.K(a))},
$S:15}
W.jK.prototype={
$1:function(a){return C.a.P(C.n,H.K(a))},
$S:15}
W.jO.prototype={
av:function(a,b,c){if(this.er(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.P(0,b)
return!1}}
W.jP.prototype={
$1:function(a){return"TEMPLATE::"+H.k(H.K(a))},
$S:31}
W.jN.prototype={
aS:function(a){var u=J.T(a)
if(!!u.$icW)return!1
u=!!u.$ip
if(u&&W.cE(a)==="foreignObject")return!1
if(u)return!0
return!1},
av:function(a,b,c){if(b==="is"||C.e.el(b,"on"))return!1
return this.aS(a)},
$iaw:1}
W.dI.prototype={
t:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdf(J.fp(u.a,t))
u.c=t
return!0}u.sdf(null)
u.c=s
return!1},
gH:function(a){return this.d},
sdf:function(a){this.d=H.E(a,H.v(this,0))},
$ib2:1}
W.aw.prototype={}
W.jH.prototype={$ioI:1}
W.fc.prototype={
cI:function(a){new W.jT(this).$2(a,null)},
b4:function(a,b){if(b==null)J.kV(a)
else b.removeChild(a)},
hQ:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.ml(a)
n=o.a.getAttribute("is")
H.e(a,"$iO")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.B(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.au(r)}t="element unprintable"
try{t=J.av(a)}catch(r){H.au(r)}try{s=W.cE(a)
this.hP(H.e(a,"$iO"),b,p,t,s,H.e(o,"$iG"),H.K(n))}catch(r){if(H.au(r) instanceof P.aL)throw r
else{this.b4(a,b)
window
q="Removing corrupted element "+H.k(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hP:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b4(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aS(a)){o.b4(a,b)
window
u="Removing disallowed element <"+H.k(e)+"> from "+H.k(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.av(a,"is",g)){o.b4(a,b)
window
u="Removing disallowed type extension <"+H.k(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gaa(f)
t=H.d(u.slice(0),[H.v(u,0)])
for(s=f.gaa(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.h(t,s)
r=t[s]
q=o.a
p=J.mo(r)
H.K(r)
if(!q.av(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.k(e)+" "+r+'="'+H.k(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.T(a).$id0)o.cI(a.content)},
$ios:1}
W.jT.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hQ(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b4(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.au(s)
r=H.e(u,"$iD")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.e(t,"$iD")}},
$S:32}
W.ev.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.df.prototype={}
W.dg.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.f1.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
P.fb.prototype={$ibH:1,
gc8:function(a){return this.a}}
P.k2.prototype={
$2:function(a,b){this.a[a]=b},
$S:19}
P.h2.prototype={
gbi:function(){var u=this.b,t=H.ad(u,"t",0),s=W.O
return new H.hm(new H.d7(u,H.m(new P.h3(),{func:1,ret:P.S,args:[t]}),[t]),H.m(new P.h4(),{func:1,ret:s,args:[t]}),[t,s])},
l:function(a,b,c){var u
H.e(c,"$iO")
u=this.gbi()
J.mn(u.b.$1(J.dq(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
X:function(a,b,c,d,e){H.i(d,"$ic",[W.O],"$ac")
throw H.f(P.H("Cannot setRange on filtered list"))},
as:function(a,b,c,d){return this.X(a,b,c,d,0)},
gk:function(a){return J.aZ(this.gbi().a)},
j:function(a,b){var u=this.gbi()
return u.b.$1(J.dq(u.a,b))},
gR:function(a){var u=P.la(this.gbi(),!1,W.O)
return new J.al(u,u.length,[H.v(u,0)])},
$at:function(){return[W.O]},
$ac:function(){return[W.O]},
$ab:function(){return[W.O]}}
P.h3.prototype={
$1:function(a){return!!J.T(H.e(a,"$iD")).$iO},
$S:25}
P.h4.prototype={
$1:function(a){return H.o(H.e(a,"$iD"),"$iO")},
$S:33}
P.jC.prototype={
gcz:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.F(t)
return H.E(u+t,H.v(this,0))},
gdD:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.F(t)
return H.E(u+t,H.v(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.k(u.a)+", "+H.k(u.b)+") "+H.k(u.c)+" x "+H.k(u.d)},
n:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.T(b)
if(!!u.$iai){t=p.a
if(t==u.gbt(b)){s=p.b
if(s==u.gbw(b)){r=p.c
if(typeof t!=="number")return t.D()
if(typeof r!=="number")return H.F(r)
q=H.v(p,0)
if(H.E(t+r,q)===u.gcz(b)){t=p.d
if(typeof s!=="number")return s.D()
if(typeof t!=="number")return H.F(t)
u=H.E(s+t,q)===u.gdD(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t=this,s=t.a,r=J.bZ(s),q=t.b,p=J.bZ(q),o=t.c
if(typeof s!=="number")return s.D()
if(typeof o!=="number")return H.F(o)
u=H.v(t,0)
o=C.d.gI(H.E(s+o,u))
s=t.d
if(typeof q!=="number")return q.D()
if(typeof s!=="number")return H.F(s)
u=C.d.gI(H.E(q+s,u))
return P.nh(P.jz(P.jz(P.jz(P.jz(0,r),p),o),u))}}
P.ai.prototype={
gbt:function(a){return this.a},
gbw:function(a){return this.b},
gao:function(a){return this.c},
gak:function(a){return this.d}}
P.b5.prototype={$ib5:1}
P.hf.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.e(c,"$ib5")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){return this.j(a,b)},
$at:function(){return[P.b5]},
$ic:1,
$ac:function(){return[P.b5]},
$ib:1,
$ab:function(){return[P.b5]},
$aC:function(){return[P.b5]}}
P.b8.prototype={$ib8:1}
P.hS.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.e(c,"$ib8")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){return this.j(a,b)},
$at:function(){return[P.b8]},
$ic:1,
$ac:function(){return[P.b8]},
$ib:1,
$ab:function(){return[P.b8]},
$aC:function(){return[P.b8]}}
P.hY.prototype={
gk:function(a){return a.length}}
P.cW.prototype={$icW:1}
P.is.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.K(c)
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){return this.j(a,b)},
$at:function(){return[P.l]},
$ic:1,
$ac:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]},
$aC:function(){return[P.l]}}
P.p.prototype={
gc4:function(a){return new P.h2(a,new W.ap(a))},
aj:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aw])
C.a.h(p,W.lB(null))
C.a.h(p,W.lE())
C.a.h(p,new W.jN())
c=new W.fc(new W.dZ(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.p).iy(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ap(s)
q=p.gaL(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.ba.prototype={$iba:1}
P.iJ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.e(c,"$iba")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){return this.j(a,b)},
$at:function(){return[P.ba]},
$ic:1,
$ac:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aC:function(){return[P.ba]}}
P.eH.prototype={}
P.eI.prototype={}
P.eR.prototype={}
P.eS.prototype={}
P.f2.prototype={}
P.f3.prototype={}
P.f9.prototype={}
P.fa.prototype={}
P.fv.prototype={
gk:function(a){return a.length}}
P.fw.prototype={
j:function(a,b){return P.bq(a.get(H.K(b)))},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.l,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
gaa:function(a){var u=H.d([],[P.l])
this.J(a,new P.fx(u))
return u},
gk:function(a){return a.size},
$aaf:function(){return[P.l,null]},
$iG:1,
$aG:function(){return[P.l,null]}}
P.fx.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.fy.prototype={
gk:function(a){return a.length}}
P.c0.prototype={}
P.hT.prototype={
gk:function(a){return a.length}}
P.eu.prototype={}
P.du.prototype={$idu:1}
P.dJ.prototype={$idJ:1}
P.e2.prototype={$ie2:1}
P.e5.prototype={$ie5:1}
P.cc.prototype={
ec:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.T(g)
if(!!u.$ibH&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.lO(g))
return}if(!!u.$icJ&&h==null&&t&&!0){this.i3(a,b,c,d,e,f,g)
return}throw H.f(P.mp("Incorrect number or type of arguments"))},
jg:function(a,b,c,d,e,f,g){return this.ec(a,b,c,d,e,f,g,null,null,null)},
i3:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a0:function(a,b,c){return a.uniform1f(b,c)},
aY:function(a,b,c){return a.uniform1i(b,c)},
by:function(a,b,c,d){return a.uniform2f(b,c,d)},
T:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
cD:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
ef:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cE:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$icc:1}
P.e6.prototype={$ie6:1}
P.ef.prototype={$ief:1}
P.el.prototype={$iel:1}
P.ij.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return P.bq(a.item(b))},
l:function(a,b,c){H.e(c,"$iG")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){return this.j(a,b)},
$at:function(){return[[P.G,,,]]},
$ic:1,
$ac:function(){return[[P.G,,,]]},
$ib:1,
$ab:function(){return[[P.G,,,]]},
$aC:function(){return[[P.G,,,]]}}
P.eZ.prototype={}
P.f_.prototype={}
O.X.prototype={
bd:function(a){var u=this
u.sfu(H.d([],[a]))
u.sdk(null)
u.sdh(null)
u.sdl(null)},
cK:function(a,b,c){var u=this,t=H.ad(u,"X",0)
H.m(b,{func:1,ret:P.S,args:[[P.c,t]]})
t={func:1,ret:-1,args:[P.q,[P.c,t]]}
H.m(a,t)
H.m(c,t)
u.sdk(b)
u.sdh(a)
u.sdl(c)},
aK:function(a,b){return this.cK(a,null,b)},
au:function(a){var u
H.i(a,"$ic",[H.ad(this,"X",0)],"$ac")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dg:function(a,b){var u
H.i(b,"$ic",[H.ad(this,"X",0)],"$ac")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gR:function(a){var u=this.a
return new J.al(u,u.length,[H.v(u,0)])},
B:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ad(s,"X",0)
H.E(b,r)
r=[r]
if(H.B(s.au(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.dg(t,H.d([b],r))}},
a9:function(a,b){var u,t,s=this
H.i(b,"$ic",[H.ad(s,"X",0)],"$ac")
if(H.B(s.au(b))){u=s.a
t=u.length
C.a.a9(u,b)
s.dg(t,b)}},
sfu:function(a){this.a=H.i(a,"$ib",[H.ad(this,"X",0)],"$ab")},
sdk:function(a){this.b=H.m(a,{func:1,ret:P.S,args:[[P.c,H.ad(this,"X",0)]]})},
sdh:function(a){this.c=H.m(a,{func:1,ret:-1,args:[P.q,[P.c,H.ad(this,"X",0)]]})},
sdl:function(a){H.m(a,{func:1,ret:-1,args:[P.q,[P.c,H.ad(this,"X",0)]]})},
$ic:1}
O.cM.prototype={
gk:function(a){return this.a.length},
gm:function(){var u=this.b
return u==null?this.b=D.J():u},
aM:function(){var u=this.b
if(u!=null)u.v(null)},
gU:function(a){var u=this.a
if(u.length>0)return C.a.gcm(u)
else return V.bN()},
bu:function(a){var u=this.a
if(a==null)C.a.h(u,V.bN())
else C.a.h(u,a)
this.aM()},
aG:function(){var u=this.a
if(u.length>0){u.pop()
this.aM()}},
sbR:function(a){this.a=H.i(a,"$ib",[V.a5],"$ab")}}
E.fA.prototype={}
E.an.prototype={
d0:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.al(u,u.length,[H.v(u,0)]);u.t();){t=u.d
if(t.f==null)t.d0()}},
scM:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().M(0,s.ge2())
u=s.c
if(u!=null)u.gm().h(0,s.ge2())
t=new D.y("shape",r,s.c,[F.e7])
t.b=!0
s.aq(t)}},
saI:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gm().M(0,s.ge4())
u=s.f
s.f=a
if(a!=null)a.gm().h(0,s.ge4())
s.d0()
t=new D.y("technique",u,s.f,[O.bR])
t.b=!0
s.aq(t)}},
sct:function(a){var u,t,s=this
if(!J.V(s.r,a)){u=s.r
if(u!=null)u.gm().M(0,s.ge0())
if(a!=null)a.gm().h(0,s.ge0())
s.r=a
t=new D.y("mover",u,a,[U.ab])
t.b=!0
s.aq(t)}},
a5:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.ax(0,b,s):null
if(!J.V(q,s.x)){u=s.x
s.x=q
t=new D.y("matrix",u,q,[V.a5])
t.b=!0
s.aq(t)}r=s.f
if(r!=null)r.a5(0,b)
for(r=s.y.a,r=new J.al(r,r.length,[H.v(r,0)]);r.t();)r.d.a5(0,b)},
a3:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gU(s))
else C.a.h(s.a,r.p(0,s.gU(s)))
s.aM()
a.cw(t.f)
s=a.dy
u=(s&&C.a).gcm(s)
if(u!=null&&t.d!=null)u.bv(a,t)
for(s=t.y.a,s=new J.al(s,s.length,[H.v(s,0)]);s.t();)s.d.a3(a)
a.cv()
a.dx.aG()},
gm:function(){var u=this.z
return u==null?this.z=D.J():u},
aq:function(a){var u=this.z
if(u!=null)u.v(a)},
a2:function(){return this.aq(null)},
e3:function(a){H.e(a,"$ir")
this.e=null
this.aq(a)},
iY:function(){return this.e3(null)},
e5:function(a){this.aq(H.e(a,"$ir"))},
iZ:function(){return this.e5(null)},
e1:function(a){this.aq(H.e(a,"$ir"))},
iX:function(){return this.e1(null)},
e_:function(a){this.aq(H.e(a,"$ir"))},
iU:function(){return this.e_(null)},
iT:function(a,b){var u,t,s,r,q,p,o
H.i(b,"$ic",[E.an],"$ac")
for(u=b.length,t=this.gdZ(),s={func:1,ret:-1,args:[D.r]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bF()
o.sa7(null)
o.saQ(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sa7(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a2()},
iW:function(a,b){var u,t
H.i(b,"$ic",[E.an],"$ac")
for(u=b.gR(b),t=this.gdZ();u.t();)u.gH(u).gm().M(0,t)
this.a2()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sez:function(a,b){this.y=H.i(b,"$iX",[E.an],"$aX")},
$ic7:1}
E.i0.prototype={
ev:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aA(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cM()
t=[V.a5]
u.sbR(H.d([],t))
u.b=null
u.gm().h(0,new E.i1(s))
s.cy=u
u=new O.cM()
u.sbR(H.d([],t))
u.b=null
u.gm().h(0,new E.i2(s))
s.db=u
u=new O.cM()
u.sbR(H.d([],t))
u.b=null
u.gm().h(0,new E.i3(s))
s.dx=u
s.si2(H.d([],[O.bR]))
u=s.dy;(u&&C.a).h(u,null)
s.shV(new H.a1([P.l,A.cX]))},
gj7:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gU(s)
u=t.db
u=t.z=s.p(0,u.gU(u))
s=u}return s},
ge7:function(){var u,t=this,s=t.ch
if(s==null){s=t.gj7()
u=t.dx
u=t.ch=s.p(0,u.gU(u))
s=u}return s},
cw:function(a){var u=this.dy,t=a==null?(u&&C.a).gcm(u):a;(u&&C.a).h(u,t)},
cv:function(){var u=this.dy
if(u.length>1)u.pop()},
bn:function(a){var u=a.b
if(u.length===0)throw H.f(P.x("May not cache a shader with no name."))
if(this.fr.dF(0,u))throw H.f(P.x('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.l(0,u,a)},
si2:function(a){this.dy=H.i(a,"$ib",[O.bR],"$ab")},
shV:function(a){this.fr=H.i(a,"$iG",[P.l,A.cX],"$aG")}}
E.i1.prototype={
$1:function(a){var u
H.e(a,"$ir")
u=this.a
u.ch=u.z=null},
$S:5}
E.i2.prototype={
$1:function(a){var u
H.e(a,"$ir")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:5}
E.i3.prototype={
$1:function(a){var u
H.e(a,"$ir")
u=this.a
u.cx=u.ch=null},
$S:5}
E.ei.prototype={
cW:function(a){H.e(a,"$ir")
this.e8()},
cV:function(){return this.cW(null)},
giK:function(){var u,t=this,s=Date.now(),r=C.d.a1(P.l1(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aA(s,!1)
return u/r},
dr:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.p()
if(typeof r!=="number")return H.F(r)
u=C.c.aV(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.p()
t=C.c.aV(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lu(C.j,s.gjc())}},
e8:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.m(new E.iD(this),{func:1,ret:-1,args:[P.aa]})
C.z.fd(u)
C.z.hL(u,W.lK(t,P.aa))}},
ja:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dr()
s=p.y
if(s!=null)s.v(null)
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aA(r,!1)
s.y=P.l1(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aM()
r=s.db
C.a.sk(r.a,0)
r.aM()
r=s.dx
C.a.sk(r.a,0)
r.aM()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.a3(p.e)}}catch(q){u=H.au(q)
t=H.cs(q)
P.kR("Error: "+H.k(u))
P.kR("Stack: "+H.k(t))
throw H.f(u)}}}
E.iD.prototype={
$1:function(a){var u
H.lV(a)
u=this.a
if(u.ch){u.ch=!1
u.ja()}},
$S:47}
Z.es.prototype={$iom:1}
Z.dv.prototype={
O:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.au(s)
t=P.x('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.k(u))
throw H.f(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.k(u.e)+"]"}}
Z.cj.prototype={$ion:1}
Z.bw.prototype={
ap:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
O:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].O(a)},
ab:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a3:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.h(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.l],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.av(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.q(p,", ")+"\nAttrs:   "+C.a.q(r,", ")},
sfn:function(a){this.b=H.i(a,"$ib",[Z.bI],"$ab")},
$iou:1}
Z.bI.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.ca(this.c)+"'")+"]"}}
Z.bo.prototype={
gcN:function(a){var u=this.a,t=(u&$.aq().a)!==0?3:0
if((u&$.bt().a)!==0)t+=3
if((u&$.bs().a)!==0)t+=3
if((u&$.bY().a)!==0)t+=2
if((u&$.bu().a)!==0)t+=3
if((u&$.dn().a)!==0)t+=3
if((u&$.dp().a)!==0)t+=4
if((u&$.cv().a)!==0)++t
return(u&$.br().a)!==0?t+4:t},
io:function(a){var u,t=$.aq(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bt()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bs()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bY()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bu()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.br()
if((s&t.a)!==0)if(u===a)return t
return $.mf()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bo))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.l]),t=this.a
if((t&$.aq().a)!==0)C.a.h(u,"Pos")
if((t&$.bt().a)!==0)C.a.h(u,"Norm")
if((t&$.bs().a)!==0)C.a.h(u,"Binm")
if((t&$.bY().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bu().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dn().a)!==0)C.a.h(u,"Clr3")
if((t&$.dp().a)!==0)C.a.h(u,"Clr4")
if((t&$.cv().a)!==0)C.a.h(u,"Weight")
if((t&$.br().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.q(u,"|")}}
D.fG.prototype={}
D.bF.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.r]}
H.m(b,u)
if(this.a==null)this.sa7(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
M:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[D.r]})
u=s.a
u=u==null?null:C.a.P(u,b)
if(u===!0){u=s.a
t=(u&&C.a).M(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.P(u,b)
if(u===!0){u=s.b
t=(u&&C.a).M(u,b)||t}return t},
v:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.r()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.J(P.la(u,!0,{func:1,ret:-1,args:[D.r]}),new D.fZ(q))
u=r.b
if(u!=null){r.saQ(H.d([],[{func:1,ret:-1,args:[D.r]}]))
C.a.J(u,new D.h_(q))}return!0},
cc:function(){return this.v(null)},
aw:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.v(u)}}},
sa7:function(a){this.a=H.i(a,"$ib",[{func:1,ret:-1,args:[D.r]}],"$ab")},
saQ:function(a){this.b=H.i(a,"$ib",[{func:1,ret:-1,args:[D.r]}],"$ab")}}
D.fZ.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.r]})
u=this.a.a
u.b
a.$1(u)},
$S:17}
D.h_.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.r]})
u=this.a.a
u.b
a.$1(u)},
$S:17}
D.r.prototype={}
D.bJ.prototype={}
D.bK.prototype={}
D.y.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}
X.dw.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dw))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.dO.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dO))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.he.prototype={
j3:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
j_:function(a){this.c=a.b
this.d.M(0,a.a)
return!1},
shG:function(a){this.d=H.i(a,"$ilp",[P.q],"$alp")}}
X.dT.prototype={}
X.hj.prototype={
b2:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.p()
u=b.b
t=q.ch
if(typeof u!=="number")return u.p()
s=new V.a7(o.a+n*m,o.b+u*t)
t=q.a.gaU()
r=new X.aC(a,V.bl(),q.x,t,s)
r.b=!0
q.z=new P.aA(p,!1)
q.x=s
return r},
cu:function(a,b){this.r=a.a
return!1},
ba:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eh()
if(typeof u!=="number")return u.ay()
this.r=(u&~t)>>>0
return!1},
b9:function(a,b){var u=this.d
if(u==null)return!1
u.v(this.b2(a,b))
return!0},
j4:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaU()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.p()
q=a.b
p=o.cy
if(typeof q!=="number")return q.p()
t=new X.cN(new V.R(s*r,q*p),u,t)
t.b=!0
n.v(t)
return!0},
hc:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dT(c,r.a.gaU(),b)
s.b=!0
t.v(s)
r.y=new P.aA(u,!1)
r.x=V.bl()}}
X.ar.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ar))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.B(this.b)?"Alt+":""
return u+(H.B(this.c)?"Shift+":"")}}
X.aC.prototype={}
X.hI.prototype={
bP:function(a,b,c){var u=this,t=new P.aA(Date.now(),!1),s=u.a.gaU(),r=new X.aC(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cu:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.v(this.bP(a,b,!0))
return!0},
ba:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eh()
if(typeof t!=="number")return t.ay()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.v(u.bP(a,b,!0))
return!0},
b9:function(a,b){var u=this.d
if(u==null)return!1
u.v(this.bP(a,b,!1))
return!0},
j5:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaU()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.p()
r=a.b
q=p.ch
if(typeof r!=="number")return r.p()
u=new X.cN(new V.R(t*s,r*q),u,b)
u.b=!0
o.v(u)
return!0},
gcb:function(){var u=this.b
return u==null?this.b=D.J():u},
gbz:function(){var u=this.c
return u==null?this.c=D.J():u},
gaX:function(){var u=this.d
return u==null?this.d=D.J():u}}
X.cN.prototype={}
X.hX.prototype={}
X.d4.prototype={}
X.iG.prototype={
b2:function(a,b){var u,t,s,r,q=this
H.i(a,"$ib",[V.a7],"$ab")
u=new P.aA(Date.now(),!1)
t=a.length>0?a[0]:V.bl()
s=q.a.gaU()
r=new X.d4(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
j2:function(a){var u
H.i(a,"$ib",[V.a7],"$ab")
u=this.b
if(u==null)return!1
u.v(this.b2(a,!0))
return!0},
j0:function(a){var u
H.i(a,"$ib",[V.a7],"$ab")
u=this.c
if(u==null)return!1
u.v(this.b2(a,!0))
return!0},
j1:function(a){var u
H.i(a,"$ib",[V.a7],"$ab")
u=this.d
if(u==null)return!1
u.v(this.b2(a,!1))
return!0},
gcO:function(a){var u=this.b
return u==null?this.b=D.J():u},
gdH:function(a){var u=this.c
return u==null?this.c=D.J():u},
gaX:function(){var u=this.d
return u==null?this.d=D.J():u}}
X.en.prototype={
gaU:function(){var u=this.a,t=C.h.gdE(u).c
t.toString
u=C.h.gdE(u).d
u.toString
return V.e3(0,0,t,u)},
da:function(a){var u=a.keyCode,t=H.B(a.ctrlKey)||H.B(a.metaKey)
return new X.dO(u,new X.ar(t,a.altKey,a.shiftKey))},
aR:function(a){var u=this.b,t=H.B(a.ctrlKey)||H.B(a.metaKey)
u.c=new X.ar(t,a.altKey,a.shiftKey)},
c_:function(a){var u=this.b,t=H.B(a.ctrlKey)||H.B(a.metaKey)
u.c=new X.ar(t,a.altKey,a.shiftKey)},
aD:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.G()
u=t.top
if(typeof r!=="number")return r.G()
return new V.a7(s-q,r-u)},
b3:function(a){return new V.R(a.movementX,a.movementY)},
bW:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.a7])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
q=C.c.W(r.pageX)
C.c.W(r.pageY)
p=o.left
C.c.W(r.pageX)
C.a.h(n,new V.a7(q-p,C.c.W(r.pageY)-o.top))}return n},
aA:function(a){var u=a.buttons,t=H.B(a.ctrlKey)||H.B(a.metaKey)
return new X.dw(u,new X.ar(t,a.altKey,a.shiftKey))},
bS:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.G()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.G()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
h6:function(a){this.f=!0},
fR:function(a){this.f=!1},
fX:function(a){H.e(a,"$ia6")
if(H.B(this.f)&&this.bS(a))a.preventDefault()},
ha:function(a){var u
H.e(a,"$ib4")
if(!H.B(this.f))return
u=this.da(a)
this.b.j3(u)},
h8:function(a){var u
H.e(a,"$ib4")
if(!H.B(this.f))return
u=this.da(a)
this.b.j_(u)},
he:function(a){var u,t,s,r,q=this
H.e(a,"$ia6")
u=q.a
u.focus()
q.f=!0
q.aR(a)
if(H.B(q.x)){t=q.aA(a)
s=q.b3(a)
if(q.d.cu(t,s))a.preventDefault()
return}if(H.B(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aA(a)
r=q.aD(a)
if(q.c.cu(t,r))a.preventDefault()},
hi:function(a){var u,t,s,r=this
H.e(a,"$ia6")
r.aR(a)
u=r.aA(a)
if(H.B(r.x)){t=r.b3(a)
if(r.d.ba(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.aD(a)
if(r.c.ba(u,s))a.preventDefault()},
h0:function(a){var u,t,s,r=this
H.e(a,"$ia6")
if(!r.bS(a)){r.aR(a)
u=r.aA(a)
if(H.B(r.x)){t=r.b3(a)
if(r.d.ba(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.aD(a)
if(r.c.ba(u,s))a.preventDefault()}},
hg:function(a){var u,t,s,r=this
H.e(a,"$ia6")
r.aR(a)
u=r.aA(a)
if(H.B(r.x)){t=r.b3(a)
if(r.d.b9(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.aD(a)
if(r.c.b9(u,s))a.preventDefault()},
fZ:function(a){var u,t,s,r=this
H.e(a,"$ia6")
if(!r.bS(a)){r.aR(a)
u=r.aA(a)
if(H.B(r.x)){t=r.b3(a)
if(r.d.b9(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.aD(a)
if(r.c.b9(u,s))a.preventDefault()}},
hk:function(a){var u,t,s=this
H.e(a,"$ibd")
s.aR(a)
u=new V.R((a&&C.y).giB(a),C.y.giC(a)).u(0,180)
if(H.B(s.x)){if(s.d.j4(u))a.preventDefault()
return}if(H.B(s.r))return
t=s.aD(a)
if(s.c.j5(u,t))a.preventDefault()},
hm:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aA(s.y)
t=s.aD(s.y)
s.d.hc(u,t,r)}},
hC:function(a){var u,t=this
H.e(a,"$iaW")
t.a.focus()
t.f=!0
t.c_(a)
u=t.bW(a)
if(t.e.j2(u))a.preventDefault()},
hy:function(a){var u
H.e(a,"$iaW")
this.c_(a)
u=this.bW(a)
if(this.e.j0(u))a.preventDefault()},
hA:function(a){var u
H.e(a,"$iaW")
this.c_(a)
u=this.bW(a)
if(this.e.j1(u))a.preventDefault()},
sff:function(a){this.z=H.i(a,"$ib",[[P.cZ,P.Q]],"$ab")}}
D.bC.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.J():u},
az:function(a){var u
H.e(a,"$ir")
u=this.r
if(u!=null)u.v(a)},
eC:function(){return this.az(null)},
$iae:1,
$ic7:1}
D.ae.prototype={$ic7:1}
D.dP.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.J():u},
az:function(a){var u=this.x
if(u!=null)u.v(a)},
dj:function(a){var u
H.e(a,"$ir")
u=this.y
if(u!=null)u.v(a)},
hb:function(){return this.dj(null)},
ho:function(a){var u,t,s
H.i(a,"$ic",[D.ae],"$ac")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.w)(a),++t){s=a[t]
if(s==null||this.f4(s))return!1}return!0},
fL:function(a,b){var u,t,s,r,q,p,o,n=D.ae
H.i(b,"$ic",[n],"$ac")
for(u=b.length,t=this.gdi(),s={func:1,ret:-1,args:[D.r]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=H.e(b[q],"$iae")
if(p instanceof D.bC)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.bF()
o.sa7(null)
o.saQ(null)
o.c=null
o.d=0
p.r=o}H.m(t,s)
if(o.a==null)o.sa7(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bJ([n])
n.b=!0
this.az(n)},
hs:function(a,b){var u,t,s,r=D.ae
H.i(b,"$ic",[r],"$ac")
for(u=b.gR(b),t=this.gdi();u.t();){s=u.gH(u)
C.a.M(this.e,s)
s.gm().M(0,t)}r=new D.bK([r])
r.b=!0
this.az(r)},
f4:function(a){var u=C.a.P(this.e,a)
return u},
sfb:function(a){this.e=H.i(a,"$ib",[D.bC],"$ab")},
shD:function(a){this.f=H.i(a,"$ib",[D.e1],"$ab")},
shY:function(a){this.r=H.i(a,"$ib",[D.ec],"$ab")},
$ac:function(){return[D.ae]},
$aX:function(){return[D.ae]}}
D.e1.prototype={$iae:1,$ic7:1}
D.ec.prototype={$iae:1,$ic7:1}
V.W.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.a2.prototype={
jm:function(){var u=this
return new V.a2(Math.floor(u.a*255)/255,Math.floor(u.b*255)/255,Math.floor(u.c*255)/255,Math.floor(u.d*255)/255)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.fY.prototype={}
V.dX.prototype={
a4:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.A])
return t},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dX))return!1
u=b.a
t=$.I().a
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
i:function(a){var u,t,s,r,q=this,p=[P.A],o=V.cq(H.d([q.a,q.d,q.r],p),3,0),n=V.cq(H.d([q.b,q.e,q.x],p),3,0),m=V.cq(H.d([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.h(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.h(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.h(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.h(o,1)
r=" "+o[1]+", "
if(1>=t)return H.h(n,1)
r=r+n[1]+", "
if(1>=s)return H.h(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.h(o,2)
p=" "+o[2]+", "
if(2>=t)return H.h(n,2)
p=p+n[2]+", "
if(2>=s)return H.h(m,2)
return r+(p+m[2]+"]")}}
V.a5.prototype={
a4:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.A])
return t},
cl:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.I().a)return V.bN()
u=1/b1
t=-n
s=-a0
return V.b7((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
p:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.b7(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bx:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.M(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cC:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.ao(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.I().a
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
C:function(a){var u,t,s,r,q,p=this,o=[P.A],n=V.cq(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.cq(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.cq(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.cq(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.h(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.h(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.h(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.h(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.h(n,1)
q=q+n[1]+", "
if(1>=t)return H.h(m,1)
q=q+m[1]+", "
if(1>=s)return H.h(l,1)
q=q+l[1]+", "
if(1>=r)return H.h(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.h(n,2)
u=u+n[2]+", "
if(2>=t)return H.h(m,2)
u=u+m[2]+", "
if(2>=s)return H.h(l,2)
u=u+l[2]+", "
if(2>=r)return H.h(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.h(n,3)
q=q+n[3]+", "
if(3>=t)return H.h(m,3)
q=q+m[3]+", "
if(3>=s)return H.h(l,3)
q=q+l[3]+", "
if(3>=r)return H.h(k,3)
return u+(q+k[3]+"]")},
K:function(){return this.C("")}}
V.a7.prototype={
G:function(a,b){return new V.a7(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.ao.prototype={
G:function(a,b){return new V.ao(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ao))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.bm.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bm))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.bP.prototype={
gae:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bP))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.R.prototype={
cn:function(a){return Math.sqrt(this.w(this))},
w:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.F(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.F(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.p()
u=this.b
if(typeof u!=="number")return u.p()
return new V.R(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.I().a){u=$.lx
return u==null?$.lx=new V.R(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.R(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=this.a
s=$.I()
s.toString
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.F(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.F(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.M.prototype={
cn:function(a){return Math.sqrt(this.w(this))},
w:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
co:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.M(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
b7:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.M(u*t-s*r,s*q-p*t,p*r-u*q)},
D:function(a,b){return new V.M(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a){return new V.M(-this.a,-this.b,-this.c)},
u:function(a,b){if(Math.abs(b-0)<$.I().a)return V.er()
return new V.M(this.a/b,this.b/b,this.c/b)},
dW:function(){var u=$.I().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
U.fI.prototype={
bK:function(a){var u=V.ki(a,this.c,this.b)
return u},
gm:function(){var u=this.y
return u==null?this.y=D.J():u},
E:function(a){var u=this.y
if(u!=null)u.v(a)},
scF:function(a,b){},
scq:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.I().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bK(u)}s=new D.y("maximumLocation",s,t.b,[P.A])
s.b=!0
t.E(s)}},
scs:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.I().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bK(u)}s=new D.y("minimumLocation",s,t.c,[P.A])
s.b=!0
t.E(s)}},
sad:function(a,b){var u,t=this
b=t.bK(b)
u=t.d
if(!(Math.abs(u-b)<$.I().a)){t.d=b
u=new D.y("location",u,b,[P.A])
u.b=!0
t.E(u)}},
scr:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.I().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.y("maximumVelocity",r,a,[P.A])
r.b=!0
s.E(r)}},
sS:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.I().a)){u.f=a
t=new D.y("velocity",t,a,[P.A])
t.b=!0
u.E(t)}},
sc7:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.I().a)){this.x=a
u=new D.y("dampening",u,a,[P.A])
u.b=!0
this.E(u)}},
a5:function(a,b){var u,t,s,r=this,q=r.f,p=$.I().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sad(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.I().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sS(u)}}}
U.cB.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.J():u},
sU:function(a,b){var u,t,s,r=this
if(!J.V(r.a,b)){u=r.a
r.a=b
t=new D.y("matrix",u,b,[V.a5])
t.b=!0
s=r.b
if(s!=null)s.v(t)}},
ax:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cB))return!1
return J.V(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")}}
U.cI.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.J():u},
E:function(a){var u
H.e(a,"$ir")
u=this.e
if(u!=null)u.v(a)},
a8:function(){return this.E(null)},
eE:function(a,b){var u,t,s,r,q,p,o,n=U.ab
H.i(b,"$ic",[n],"$ac")
for(u=b.length,t=this.gaP(),s={func:1,ret:-1,args:[D.r]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=b[q]
if(p!=null){o=p.gm()
o.toString
H.m(t,s)
if(o.a==null)o.sa7(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bJ([n])
n.b=!0
this.E(n)},
hq:function(a,b){var u,t,s=U.ab
H.i(b,"$ic",[s],"$ac")
for(u=b.gR(b),t=this.gaP();u.t();)u.gH(u).gm().M(0,t)
s=new D.bK([s])
s.b=!0
this.E(s)},
ax:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.af()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.al(r,r.length,[H.v(r,0)]),u=null;r.t();){q=r.d
if(q!=null){t=q.ax(0,b,c)
if(t!=null)u=u==null?t:t.p(0,u)}}s.f=u==null?V.bN():u
r=s.e
if(r!=null)r.aw(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cI))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.V(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ac:function(){return[U.ab]},
$aX:function(){return[U.ab]},
$iab:1}
U.ab.prototype={}
U.cV.prototype={
gm:function(){var u=this.y
return u==null?this.y=D.J():u},
E:function(a){var u=this.y
if(u!=null)u.v(a)},
seg:function(a){var u
a=V.ki(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.I().a)){this.a=a
u=new D.y("yaw",u,a,[P.A])
u.b=!0
this.E(u)}},
se6:function(a,b){var u
b=V.ki(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.I().a)){this.b=b
u=new D.y("pitch",u,b,[P.A])
u.b=!0
this.E(u)}},
se9:function(a){var u
a=V.ki(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.I().a)){this.c=a
u=new D.y("roll",u,a,[P.A])
u.b=!0
this.E(u)}},
sc9:function(a){var u=this.e
if(!(Math.abs(u-a)<$.I().a)){this.e=a
u=new D.y("deltaPitch",u,a,[P.A])
u.b=!0
this.E(u)}},
sca:function(a){var u=this.f
if(!(Math.abs(u-a)<$.I().a)){this.f=a
u=new D.y("deltaRoll",u,a,[P.A])
u.b=!0
this.E(u)}},
ax:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.seg(u.a+u.d*b.y)
u.se6(0,u.b+u.e*b.y)
u.se9(u.c+u.f*b.y)
u.x=V.lf(u.c).p(0,V.le(u.b)).p(0,V.ld(u.a))
t=u.y
if(t!=null)t.aw(0)}return u.x},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.cV))return!1
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
U.eo.prototype={
gm:function(){var u=this.cy
return u==null?this.cy=D.J():u},
E:function(a){var u
H.e(a,"$ir")
u=this.cy
if(u!=null)u.v(a)},
a8:function(){return this.E(null)},
aE:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcb().h(0,u.gbE())
u.a.c.gaX().h(0,u.gbG())
u.a.c.gbz().h(0,u.gbI())
return!0},
bF:function(a){var u=this
H.e(a,"$ir")
if(!J.V(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bH:function(a){var u,t,s,r,q,p,o,n=this
a=H.o(H.e(a,"$ir"),"$iaC")
if(!H.B(n.y))return
if(H.B(n.x)){u=a.d.G(0,a.y)
u=new V.R(u.a,u.b)
u=u.w(u)
t=n.r
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.x=!1}if(H.B(n.d)){u=a.c
t=a.d.G(0,a.y)
u=new V.R(t.a,t.b).p(0,2).u(0,u.gae())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.p()
s=n.e
if(typeof s!=="number")return H.F(s)
t.sS(u*10*s)}else{u=a.c
t=a.d
s=t.G(0,a.y)
r=new V.R(s.a,s.b).p(0,2).u(0,u.gae())
s=n.b
q=r.a
if(typeof q!=="number")return q.N()
p=n.e
if(typeof p!=="number")return H.F(p)
o=n.z
if(typeof o!=="number")return H.F(o)
s.sad(0,-q*p+o)
n.b.sS(0)
t=t.G(0,a.z)
n.Q=new V.R(t.a,t.b).p(0,2).u(0,u.gae())}n.a8()},
bJ:function(a){var u,t,s,r=this
H.e(a,"$ir")
if(!H.B(r.y))return
r.y=!1
if(H.B(r.x))return
u=r.Q
if(u.w(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.p()
s=r.e
if(typeof s!=="number")return H.F(s)
u.sS(t*10*s)
r.a8()}},
ax:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.af()
if(s<r){t.ch=r
u=b.y
t.b.a5(0,u)
t.cx=V.lf(t.b.d)}return t.cx},
$iab:1}
U.ep.prototype={
gm:function(){var u=this.fx
return u==null?this.fx=D.J():u},
E:function(a){var u
H.e(a,"$ir")
u=this.fx
if(u!=null)u.v(a)},
a8:function(){return this.E(null)},
aE:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcb().h(0,s.gbE())
s.a.c.gaX().h(0,s.gbG())
s.a.c.gbz().h(0,s.gbI())
u=s.a.d
t=u.f
u=t==null?u.f=D.J():t
u.h(0,s.gfv())
u=s.a.d
t=u.d
u=t==null?u.d=D.J():t
u.h(0,s.gfz())
u=s.a.e
u.gcO(u).h(0,s.geJ())
s.a.e.gaX().h(0,s.geH())
u=s.a.e
u.gdH(u).h(0,s.geF())
return!0},
at:function(a){var u=a.a,t=a.b
if(H.B(this.f)){if(typeof u!=="number")return u.N()
u=-u}if(H.B(this.r)){if(typeof t!=="number")return t.N()
t=-t}return new V.R(u,t)},
bF:function(a){var u=this
a=H.o(H.e(a,"$ir"),"$iaC")
if(!J.V(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bH:function(a){var u,t,s,r,q,p,o,n=this
a=H.o(H.e(a,"$ir"),"$iaC")
if(!H.B(n.cx))return
if(H.B(n.ch)){u=a.d.G(0,a.y)
u=new V.R(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.B(n.e)){u=a.c
t=a.d.G(0,a.y)
u=n.at(new V.R(t.a,t.b).p(0,2).u(0,u.gae()))
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
s=t.G(0,a.y)
r=n.at(new V.R(s.a,s.b).p(0,2).u(0,u.gae()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sad(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sad(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.G(0,a.z)
n.dx=n.at(new V.R(t.a,t.b).p(0,2).u(0,u.gae()))}n.a8()},
bJ:function(a){var u,t,s,r=this
H.e(a,"$ir")
if(!H.B(r.cx))return
r.cx=!1
if(H.B(r.ch))return
u=r.dx
if(u.w(u)>0.0001){u=r.c
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
r.a8()}},
fw:function(a){var u=this
if(H.o(H.e(a,"$ir"),"$idT").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fA:function(a){var u,t,s,r,q,p,o,n=this
a=H.o(H.e(a,"$ir"),"$iaC")
if(!J.V(n.d,a.x.b))return
u=a.c
t=a.d
s=t.G(0,a.y)
r=n.at(new V.R(s.a,s.b).p(0,2).u(0,u.gae()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sad(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sad(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.G(0,a.z)
n.dx=n.at(new V.R(t.a,t.b).p(0,2).u(0,u.gae()))
n.a8()},
eK:function(a){var u=this
H.e(a,"$ir")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
eI:function(a){var u,t,s,r,q,p,o,n=this
a=H.o(H.e(a,"$ir"),"$id4")
if(!H.B(n.cx))return
if(H.B(n.ch)){u=a.d.G(0,a.y)
u=new V.R(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.B(n.e)){u=a.c
t=a.d.G(0,a.y)
u=n.at(new V.R(t.a,t.b).p(0,2).u(0,u.gae()))
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
s=t.G(0,a.y)
r=n.at(new V.R(s.a,s.b).p(0,2).u(0,u.gae()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sad(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sad(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.G(0,a.z)
n.dx=n.at(new V.R(t.a,t.b).p(0,2).u(0,u.gae()))}n.a8()},
eG:function(a){var u,t,s,r=this
H.e(a,"$ir")
if(!H.B(r.cx))return
r.cx=!1
if(H.B(r.ch))return
u=r.dx
if(u.w(u)>0.0001){u=r.c
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
r.a8()}},
ax:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.af()
if(s<r){t.dy=r
u=b.y
t.c.a5(0,u)
t.b.a5(0,u)
t.fr=V.ld(t.b.d).p(0,V.le(t.c.d))}return t.fr},
$iab:1}
U.eq.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.J():u},
E:function(a){var u=this.r
if(u!=null)u.v(a)},
aE:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.J():t
t=r.gfI()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.J():s).h(0,t)
return!0},
fJ:function(a){var u,t,s,r,q=this
H.e(a,"$ir")
if(!J.V(q.b,q.a.b.c))return
H.o(a,"$icN")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.p()
r=u+t*s
if(u!==r){q.d=r
u=new D.y("zoom",u,r,[P.A])
u.b=!0
q.E(u)}},
ax:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.mL(u,u,u)}return t.f},
$iab:1}
M.dz.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.J():u},
V:function(a){var u
H.e(a,"$ir")
u=this.r
if(u!=null)u.v(a)},
b0:function(){return this.V(null)},
hu:function(a,b){var u,t,s,r,q,p,o,n=M.ax
H.i(b,"$ic",[n],"$ac")
for(u=b.length,t=this.gY(),s={func:1,ret:-1,args:[D.r]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=b[q]
if(p!=null){o=p.gm()
o.toString
H.m(t,s)
if(o.a==null)o.sa7(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bJ([n])
n.b=!0
this.V(n)},
hw:function(a,b){var u,t,s=M.ax
H.i(b,"$ic",[s],"$ac")
for(u=b.gR(b),t=this.gY();u.t();)u.gH(u).gm().M(0,t)
s=new D.bK([s])
s.b=!0
this.V(s)},
a3:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.al(u,u.length,[H.v(u,0)]);u.t();){t=u.d
if(t!=null)t.a3(a)}s.f=!1},
$ac:function(){return[M.ax]},
$aX:function(){return[M.ax]},
$iax:1}
M.dB.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.J():u},
V:function(a){var u
H.e(a,"$ir")
u=this.r
if(u!=null)u.v(a)},
b0:function(){return this.V(null)},
saT:function(a){var u,t,s=this
if(a==null)a=new X.h9()
u=s.b
if(u!==a){if(u!=null)u.gm().M(0,s.gY())
t=s.b
s.b=a
a.gm().h(0,s.gY())
u=new D.y("camera",t,s.b,[X.c1])
u.b=!0
s.V(u)}},
saH:function(a,b){var u,t,s=this
if(b==null)b=X.kp(!0,null)
u=s.c
if(u!==b){if(u!=null)u.gm().M(0,s.gY())
t=s.c
s.c=b
b.gm().h(0,s.gY())
u=new D.y("target",t,s.c,[X.d_])
u.b=!0
s.V(u)}},
saI:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().M(0,t.gY())
u=t.d
t.d=a
if(a!=null)a.gm().h(0,t.gY())
s=new D.y("technique",u,t.d,[O.bR])
s.b=!0
t.V(s)}},
a3:function(a){var u,t=this
a.cw(t.d)
t.c.O(a)
t.b.O(a)
u=t.d
if(u!=null)u.a5(0,a)
t.e.a5(0,a)
t.e.a3(a)
t.b.ab(a)
t.c.toString
a.cv()},
$iax:1}
M.dG.prototype={
V:function(a){var u
H.e(a,"$ir")
u=this.y
if(u!=null)u.v(a)},
b0:function(){return this.V(null)},
fT:function(a,b){var u,t,s,r,q,p,o,n=E.an
H.i(b,"$ic",[n],"$ac")
for(u=b.length,t=this.gY(),s={func:1,ret:-1,args:[D.r]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bF()
o.sa7(null)
o.saQ(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sa7(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bJ([n])
n.b=!0
this.V(n)},
fV:function(a,b){var u,t,s=E.an
H.i(b,"$ic",[s],"$ac")
for(u=b.gR(b),t=this.gY();u.t();)u.gH(u).gm().M(0,t)
s=new D.bK([s])
s.b=!0
this.V(s)},
saT:function(a){var u,t,s=this
if(a==null)a=X.lj(null)
u=s.b
if(u!==a){if(u!=null)u.gm().M(0,s.gY())
t=s.b
s.b=a
a.gm().h(0,s.gY())
u=new D.y("camera",t,s.b,[X.c1])
u.b=!0
s.V(u)}},
saH:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gm().M(0,t.gY())
u=t.c
t.c=b
b.gm().h(0,t.gY())
s=new D.y("target",u,t.c,[X.d_])
s.b=!0
t.V(s)}},
gm:function(){var u=this.y
return u==null?this.y=D.J():u},
a3:function(a){var u,t=this
a.cw(t.d)
t.c.O(a)
t.b.O(a)
for(u=t.e.a,u=new J.al(u,u.length,[H.v(u,0)]);u.t();)u.d.a5(0,a)
for(u=t.e.a,u=new J.al(u,u.length,[H.v(u,0)]);u.t();)u.d.a3(a)
t.b.toString
a.cy.aG()
a.db.aG()
t.c.ab(a)
a.cv()},
sf1:function(a,b){this.e=H.i(b,"$iX",[E.an],"$aX")},
$iax:1}
M.ax.prototype={}
A.ds.prototype={}
A.fu.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iH:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
bp:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ah.prototype={
gar:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.ah))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.dW.prototype={
eu:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.bQ("")
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
A.nB(c0,u)
A.nD(c0,u)
A.nC(c0,u)
A.nF(c0,u)
A.nG(c0,u)
A.nE(c0,u)
A.nH(c0,u)
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
b5.br(0,s.charCodeAt(0)==0?s:s,A.nA(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.o(b5.y.F(0,"invViewMat"),"$iac")
if(t)b5.dy=H.o(b5.y.F(0,"objMat"),"$iac")
if(r)b5.fr=H.o(b5.y.F(0,"viewObjMat"),"$iac")
b5.fy=H.o(b5.y.F(0,"projViewObjMat"),"$iac")
if(c0.ry)b5.k1=H.o(b5.y.F(0,"txt2DMat"),"$id6")
if(c0.x1)b5.k2=H.o(b5.y.F(0,"txtCubeMat"),"$iac")
if(c0.x2)b5.k3=H.o(b5.y.F(0,"colorMat"),"$iac")
b5.seX(H.d([],[A.ac]))
t=c0.y2
if(t>0){b5.k4=H.e(b5.y.F(0,"bendMatCount"),"$iak")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.z(P.x(b7+q+b8));(s&&C.a).h(s,H.o(m,"$iac"))}}t=c0.a
if(t.a)b5.r2=H.o(b5.y.F(0,"emissionClr"),"$iZ")
if(t.c)b5.ry=H.o(b5.y.F(0,"emissionTxt"),"$iag")
t=c0.b
if(t.a)b5.x1=H.o(b5.y.F(0,"ambientClr"),"$iZ")
if(t.c)b5.y1=H.o(b5.y.F(0,"ambientTxt"),"$iag")
t=c0.c
if(t.a)b5.y2=H.o(b5.y.F(0,"diffuseClr"),"$iZ")
if(t.c)b5.bq=H.o(b5.y.F(0,"diffuseTxt"),"$iag")
t=c0.d
if(t.a)b5.dI=H.o(b5.y.F(0,"invDiffuseClr"),"$iZ")
if(t.c)b5.dJ=H.o(b5.y.F(0,"invDiffuseTxt"),"$iag")
t=c0.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dM=H.o(b5.y.F(0,"shininess"),"$ia8")
if(s)b5.dK=H.o(b5.y.F(0,"specularClr"),"$iZ")
if(t.c)b5.dL=H.o(b5.y.F(0,"specularTxt"),"$iag")}if(c0.f.c)b5.dN=H.o(b5.y.F(0,"bumpTxt"),"$iag")
if(c0.cy){b5.dO=H.o(b5.y.F(0,"envSampler"),"$iag")
t=c0.r
if(t.a)b5.dP=H.o(b5.y.F(0,"reflectClr"),"$iZ")
if(t.c)b5.dQ=H.o(b5.y.F(0,"reflectTxt"),"$iag")
t=c0.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dR=H.o(b5.y.F(0,"refraction"),"$ia8")
if(s)b5.dS=H.o(b5.y.F(0,"refractClr"),"$iZ")
if(t.c)b5.dT=H.o(b5.y.F(0,"refractTxt"),"$iag")}}t=c0.y
if(t.a)b5.dU=H.o(b5.y.F(0,"alpha"),"$ia8")
if(t.c)b5.dV=H.o(b5.y.F(0,"alphaTxt"),"$iag")
t=P.q
s=[t,A.ak]
b5.sfa(new H.a1(s))
b5.seL(new H.a1([t,[P.b,A.cf]]))
b5.shE(new H.a1(s))
b5.shF(new H.a1([t,[P.b,A.cg]]))
b5.shX(new H.a1(s))
b5.seM(new H.a1([t,[P.b,A.ch]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.cf],l=0;l<t.length;t.length===s||(0,H.w)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.k(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ay()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.z(P.x(b7+g+b8))
H.o(m,"$iZ")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.z(P.x(b7+g+b8))
H.o(f,"$iZ")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.z(P.x(b7+g+b8))
H.o(e,"$iZ")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.z(P.x(b7+g+b8))
H.o(m,"$iZ")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.z(P.x(b7+g+b8))
H.o(f,"$iZ")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.z(P.x(b7+o+b8))
H.o(e,"$ibc")
a=e}else a=b6
C.a.h(h,new A.cf(b,c,d,m,f,a))}b5.ce.l(0,j,h)
q=b5.cd
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.z(P.x(b7+o+b8))
q.l(0,j,H.e(m,"$iak"))}for(t=c0.Q,s=t.length,r=[A.cg],l=0;l<t.length;t.length===s||(0,H.w)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.k(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.z(P.x(b7+o+b8))
H.o(m,"$iZ")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.z(P.x(b7+o+b8))
H.o(f,"$iZ")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.z(P.x(b7+o+b8))
H.o(e,"$iZ")
if(typeof j!=="number")return j.ay()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.z(P.x(b7+o+b8))
H.o(a0,"$id6")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.z(P.x(b7+o+b8))
H.o(a0,"$iag")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.z(P.x(b7+o+b8))
H.o(a0,"$iag")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.z(P.x(b7+o+b8))
H.o(a2,"$ibT")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.z(P.x(b7+o+b8))
H.o(a0,"$ia8")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.z(P.x(b7+o+b8))
H.o(a2,"$ia8")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.z(P.x(b7+o+b8))
H.o(a5,"$ia8")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.cg(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.cg.l(0,j,h)
q=b5.cf
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.z(P.x(b7+o+b8))
q.l(0,j,H.e(m,"$iak"))}for(t=c0.ch,s=t.length,r=[A.ch],l=0;l<t.length;t.length===s||(0,H.w)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.k(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.z(P.x(b7+o+b8))
H.o(m,"$iZ")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.z(P.x(b7+o+b8))
H.o(f,"$iZ")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.z(P.x(b7+o+b8))
H.o(e,"$iZ")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.z(P.x(b7+o+b8))
H.o(a0,"$iZ")
if(typeof j!=="number")return j.ay()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.z(P.x(b7+o+b8))
H.o(a2,"$iZ")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.z(P.x(b7+o+b8))
H.o(a5,"$iZ")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.z(P.x(b7+o+b8))
H.o(a9,"$ia8")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.z(P.x(b7+o+b8))
H.o(b0,"$ia8")
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
if(a2==null)H.z(P.x(b7+g+b8))
H.o(a2,"$ibT")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.z(P.x(b7+g+b8))
H.o(a2,"$ia8")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.z(P.x(b7+g+b8))
H.o(a5,"$ia8")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.z(P.x(b7+g+b8))
H.o(a2,"$ia8")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.z(P.x(b7+g+b8))
H.o(a5,"$ia8")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.z(P.x(b7+g+b8))
H.o(a9,"$ia8")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.z(P.x(b7+g+b8))
H.o(a2,"$ibc")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.z(P.x(b7+o+b8))
H.o(a2,"$ibc")
a3=a2}else a3=b6
C.a.h(h,new A.ch(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.cj.l(0,j,h)
q=b5.ci
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.z(P.x(b7+o+b8))
q.l(0,j,H.e(m,"$iak"))}}},
ai:function(a,b){if(b!=null&&b.d>=6)a.cL(b)},
seX:function(a){this.r1=H.i(a,"$ib",[A.ac],"$ab")},
sfa:function(a){this.cd=H.i(a,"$iG",[P.q,A.ak],"$aG")},
seL:function(a){this.ce=H.i(a,"$iG",[P.q,[P.b,A.cf]],"$aG")},
shE:function(a){this.cf=H.i(a,"$iG",[P.q,A.ak],"$aG")},
shF:function(a){this.cg=H.i(a,"$iG",[P.q,[P.b,A.cg]],"$aG")},
shX:function(a){this.ci=H.i(a,"$iG",[P.q,A.ak],"$aG")},
seM:function(a){this.cj=H.i(a,"$iG",[P.q,[P.b,A.ch]],"$aG")}}
A.aB.prototype={
i:function(a){return"dirLight"+H.k(this.a)}}
A.aD.prototype={
i:function(a){return"pointLight"+H.k(this.a)}}
A.aF.prototype={
i:function(a){return"spotLight"+H.k(this.a)}}
A.hr.prototype={
i:function(a){return this.b8}}
A.cf.prototype={}
A.cg.prototype={}
A.ch.prototype={}
A.cX.prototype={
be:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
br:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.dc(b,35633)
r.f=r.dc(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.B(H.kK(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.z(P.x("Failed to link shader: "+H.k(s)))}r.hS()
r.hU()},
O:function(a){a.a.useProgram(this.r)
this.x.iH()},
dc:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.B(H.kK(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.x("Error compiling shader '"+H.k(s)+"': "+H.k(u)))}return s},
hS:function(){var u,t,s,r=this,q=H.d([],[A.ds]),p=r.a,o=H.a0(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.ds(p,t.name,s))}r.x=new A.fu(q)},
hU:function(){var u,t,s,r=this,q=H.d([],[A.ek]),p=r.a,o=H.a0(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.iA(t.type,t.size,t.name,s))}r.y=new A.iR(q)},
aN:function(a,b,c){var u=this.a
if(a===1)return new A.ak(u,b,c)
else return A.kA(u,this.r,b,a,c)},
f5:function(a,b,c){var u=this.a
if(a===1)return new A.bc(u,b,c)
else return A.kA(u,this.r,b,a,c)},
f6:function(a,b,c){var u=this.a
if(a===1)return new A.ag(u,b,c)
else return A.kA(u,this.r,b,a,c)},
bl:function(a,b){return new P.eB(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
iA:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aN(b,c,d)
case 5121:return u.aN(b,c,d)
case 5122:return u.aN(b,c,d)
case 5123:return u.aN(b,c,d)
case 5124:return u.aN(b,c,d)
case 5125:return u.aN(b,c,d)
case 5126:return new A.a8(u.a,c,d)
case 35664:return new A.ay(u.a,c,d)
case 35665:return new A.Z(u.a,c,d)
case 35666:return new A.bT(u.a,c,d)
case 35667:return new A.iO(u.a,c,d)
case 35668:return new A.iP(u.a,c,d)
case 35669:return new A.iQ(u.a,c,d)
case 35674:return new A.iS(u.a,c,d)
case 35675:return new A.d6(u.a,c,d)
case 35676:return new A.ac(u.a,c,d)
case 35678:return u.f5(b,c,d)
case 35680:return u.f6(b,c,d)
case 35670:throw H.f(u.bl("BOOL",c))
case 35671:throw H.f(u.bl("BOOL_VEC2",c))
case 35672:throw H.f(u.bl("BOOL_VEC3",c))
case 35673:throw H.f(u.bl("BOOL_VEC4",c))
default:throw H.f(P.x("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}}
A.bA.prototype={
i:function(a){return this.b}}
A.e9.prototype={}
A.ea.prototype={}
A.eh.prototype={
ey:function(a,b,c){var u,t,s,r,q,p=this,o="Required uniform value, ",n=", was not defined or used in shader."
p.br(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.n5(a,b))
p.z=p.x.j(0,"posAttr")
p.Q=H.o(p.y.F(0,"txtCount"),"$iak")
p.ch=H.o(p.y.F(0,"backClr"),"$ibT")
p.sic(H.d([],[A.bc]))
p.sf2(H.d([],[A.ac]))
u=[A.ay]
p.shZ(H.d([],u))
p.si_(H.d([],u))
p.sf8(H.d([],u))
p.sf9(H.d([],u))
p.sfm(H.d([],[A.ak]))
for(t=0;t<a;++t){u=p.cx
s=p.y
r="txt"+t
q=s.j(0,r)
if(q==null)H.z(P.x(o+r+n));(u&&C.a).h(u,H.o(q,"$ibc"))
u=p.cy
s=p.y
r="clrMat"+t
q=s.j(0,r)
if(q==null)H.z(P.x(o+r+n));(u&&C.a).h(u,H.o(q,"$iac"))
u=p.db
s=p.y
r="srcLoc"+t
q=s.j(0,r)
if(q==null)H.z(P.x(o+r+n));(u&&C.a).h(u,H.o(q,"$iay"))
u=p.dx
s=p.y
r="srcSize"+t
q=s.j(0,r)
if(q==null)H.z(P.x(o+r+n));(u&&C.a).h(u,H.o(q,"$iay"))
u=p.dy
s=p.y
r="destLoc"+t
q=s.j(0,r)
if(q==null)H.z(P.x(o+r+n));(u&&C.a).h(u,H.o(q,"$iay"))
u=p.fr
s=p.y
r="destSize"+t
q=s.j(0,r)
if(q==null)H.z(P.x(o+r+n));(u&&C.a).h(u,H.o(q,"$iay"))
u=p.fx
s=p.y
r="flip"+t
q=s.j(0,r)
if(q==null)H.z(P.x(o+r+n));(u&&C.a).h(u,H.o(q,"$iak"))}},
sic:function(a){this.cx=H.i(a,"$ib",[A.bc],"$ab")},
sf2:function(a){this.cy=H.i(a,"$ib",[A.ac],"$ab")},
shZ:function(a){this.db=H.i(a,"$ib",[A.ay],"$ab")},
si_:function(a){this.dx=H.i(a,"$ib",[A.ay],"$ab")},
sf8:function(a){this.dy=H.i(a,"$ib",[A.ay],"$ab")},
sf9:function(a){this.fr=H.i(a,"$ib",[A.ay],"$ab")},
sfm:function(a){this.fx=H.i(a,"$ib",[A.ak],"$ab")}}
A.ek.prototype={}
A.iR.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
F:function(a,b){var u=this.j(0,b)
if(u==null)throw H.f(P.x("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.K()},
K:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.w)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.ak.prototype={
i:function(a){return"Uniform1i: "+H.k(this.c)}}
A.iO.prototype={
i:function(a){return"Uniform2i: "+H.k(this.c)}}
A.iP.prototype={
i:function(a){return"Uniform3i: "+H.k(this.c)}}
A.iQ.prototype={
i:function(a){return"Uniform4i: "+H.k(this.c)}}
A.iN.prototype={
i:function(a){return"Uniform1iv: "+H.k(this.c)},
sie:function(a){H.i(a,"$ib",[P.q],"$ab")}}
A.a8.prototype={
i:function(a){return"Uniform1f: "+H.k(this.c)}}
A.ay.prototype={
i:function(a){return"Uniform2f: "+H.k(this.c)}}
A.Z.prototype={
i:function(a){return"Uniform3f: "+H.k(this.c)}}
A.bT.prototype={
cJ:function(a){var u=a.a,t=a.b,s=a.c,r=a.d
return C.b.cD(this.a,this.d,u,t,s,r)},
i:function(a){return"Uniform4f: "+H.k(this.c)}}
A.iS.prototype={
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}}
A.d6.prototype={
ag:function(a){var u=new Float32Array(H.cl(H.i(a,"$ib",[P.A],"$ab")))
C.b.ef(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.k(this.c)}}
A.ac.prototype={
ag:function(a){var u=new Float32Array(H.cl(H.i(a,"$ib",[P.A],"$ab")))
C.b.cE(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.k(this.c)}}
A.bc.prototype={
i:function(a){return"UniformSampler2D: "+H.k(this.c)}}
A.ag.prototype={
cL:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}
F.jV.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.co(s.b,b).co(s.d.co(s.c,b),c)
s=new V.ao(r.a,r.b,r.c)
if(!J.V(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a2()}a.sbb(r.u(0,Math.sqrt(r.w(r))))
s=1-b
u=1-c
u=new V.bm(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.V(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a2()}},
$S:39}
F.a4.prototype={
eW:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.er()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.dW())return
return s.u(0,Math.sqrt(s.w(s)))},
f0:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.G(0,q)
r=new V.M(r.a,r.b,r.c)
s=r.u(0,Math.sqrt(r.w(r)))
r=t.G(0,q)
r=new V.M(r.a,r.b,r.c)
r=s.b7(r.u(0,Math.sqrt(r.w(r))))
return r.u(0,Math.sqrt(r.w(r)))},
c3:function(){var u,t=this
if(t.d!=null)return!0
u=t.eW()
if(u==null){u=t.f0()
if(u==null)return!1}t.d=u
t.a.a.a2()
return!0},
eV:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.er()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.dW())return
return s.u(0,Math.sqrt(s.w(s)))},
f_:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.I().a){l=d.G(0,g)
l=new V.M(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.w(l)))
if(s.a-t.a<0)q=q.N(0)}else{p=(l-u.b)/r
l=d.G(0,g)
l=new V.ao(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).G(0,j)
l=new V.M(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.w(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.N(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.w(l)))
l=o.b7(q)
l=l.u(0,Math.sqrt(l.w(l))).b7(o)
q=l.u(0,Math.sqrt(l.w(l)))}return q},
c1:function(){var u,t=this
if(t.e!=null)return!0
u=t.eV()
if(u==null){u=t.f_()
if(u==null)return!1}t.e=u
t.a.a.a2()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
C:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.e.am(J.av(s.e),0)+", "+C.e.am(J.av(t.b.e),0)+", "+C.e.am(J.av(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
K:function(){return this.C("")}}
F.bi.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
C:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.e.am(J.av(u.e),0)+", "+C.e.am(J.av(this.b.e),0)},
K:function(){return this.C("")}}
F.bO.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
C:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.e.am(J.av(u.e),0)},
K:function(){return this.C("")}}
F.e7.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.J():u},
iR:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.a_()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.w)(g),++s){r=g[s]
h.a.h(0,r.ix())}h.a.a_()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.w)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.a_()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bO()
if(n.a==null)H.z(P.x("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.v(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.w)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.a_()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.a_()
p=p.e
if(typeof p!=="number")return p.D()
p+=u
o=o.c
if(p>=o.length)return H.h(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.mG(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.w)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.a_()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.a_()
p=p.e
if(typeof p!=="number")return p.D()
p+=u
o=o.c
if(p>=o.length)return H.h(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.a_()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cG(l,k,i)}g=h.e
if(g!=null)g.aw(0)},
aF:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aF()||!1
if(!t.a.aF())u=!1
s=t.e
if(s!=null)s.aw(0)
return u},
bo:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aq()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bt().a)!==0)++s
if((t&$.bs().a)!==0)++s
if((t&$.bY().a)!==0)++s
if((t&$.bu().a)!==0)++s
if((t&$.dn().a)!==0)++s
if((t&$.dp().a)!==0)++s
if((t&$.cv().a)!==0)++s
if((t&$.br().a)!==0)++s
r=a3.gcN(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.A
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dv])
for(n=0,m=0;m<s;++m){l=a3.io(m)
k=l.gcN(l)
C.a.l(o,m,new Z.dv(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.h(u,j)
i=u[j].iP(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.l(p,h,i[g]);++h}}n+=k}H.i(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cl(p)),35044)
u.bindBuffer(a0,null)
e=new Z.bw(new Z.es(a0,f),o,a3)
e.sfn(H.d([],[Z.bI]))
if(a.b.b.length!==0){t=P.q
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.a_()
C.a.h(d,c.e)}b=Z.kD(u,34963,H.i(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bI(0,d.length,b))}if(a.c.b.length!==0){t=P.q
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.a_()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.a_()
C.a.h(d,c.e)}b=Z.kD(u,34963,H.i(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bI(1,d.length,b))}if(a.d.b.length!==0){t=P.q
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.a_()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.a_()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.h(c,m)
c=c[m].c
c.a.a.a_()
C.a.h(d,c.e)}b=Z.kD(u,34963,H.i(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bI(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.l])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.C(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.C(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.C(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.C(t))}return C.a.q(s,"\n")},
a2:function(){var u=this.e
if(u!=null)u.v(null)},
$iot:1}
F.i9.prototype={
ik:function(a){var u,t,s,r,q,p
H.i(a,"$ib",[F.az],"$ab")
u=H.d([],[F.a4])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.cG(t,q,p))}return u},
il:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.i(c,"$ib",[F.az],"$ab")
u=H.d([],[F.a4])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.h(c,r)
l=c[r];++r
if(r>=m)return H.h(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.h(c,j)
i=c[j]
if(s<0||s>=m)return H.h(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.cG(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cG(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cG(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cG(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
aF:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.w)(u),++r)if(!u[r].c3())s=!1
return s},
c2:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.w)(u),++r)if(!u[r].c1())s=!1
return s},
i:function(a){return this.K()},
C:function(a){var u,t,s,r=H.d([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].C(a))
return C.a.q(r,"\n")},
K:function(){return this.C("")},
sfg:function(a){this.b=H.i(a,"$ib",[F.a4],"$ab")}}
F.ia.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.K()},
C:function(a){var u,t,s=H.d([],[P.l]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.h(t,u)
C.a.h(s,t[u].C(a+(""+u+". ")))}return C.a.q(s,"\n")},
K:function(){return this.C("")},
sfq:function(a){this.b=H.i(a,"$ib",[F.bi],"$ab")}}
F.ib.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.K()},
C:function(a){var u,t,s,r=H.d([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].C(a))
return C.a.q(r,"\n")},
K:function(){return this.C("")},
sbV:function(a){this.b=H.i(a,"$ib",[F.bO],"$ab")}}
F.az.prototype={
c6:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.j1(u.cx,r,o,t,s,q,p,a,n)},
ix:function(){return this.c6(null)},
sbb:function(a){var u
if(!J.V(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a2()}},
iP:function(a){var u,t,s=this
if(a.n(0,$.aq())){u=s.f
t=[P.A]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.bt())){u=s.r
t=[P.A]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.bs())){u=s.x
t=[P.A]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.bY())){u=s.y
t=[P.A]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.n(0,$.bu())){u=s.z
t=[P.A]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.dn())){u=s.Q
t=[P.A]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.dp())){u=s.Q
t=[P.A]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.cv()))return H.d([s.ch],[P.A])
else if(a.n(0,$.br())){u=s.cx
t=[P.A]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.A])},
c3:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.er()
t.d.J(0,new F.j9(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.a2()
s=t.a.e
if(s!=null)s.aw(0)}return!0},
c1:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.er()
t.d.J(0,new F.j8(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.a2()
s=t.a.e
if(s!=null)s.aw(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
C:function(a){var u,t,s=this,r="-",q=H.d([],[P.l])
C.a.h(q,C.e.am(J.av(s.e),0))
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
K:function(){return this.C("")}}
F.j9.prototype={
$1:function(a){var u,t
H.e(a,"$ia4")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.D(0,u)}},
$S:8}
F.j8.prototype={
$1:function(a){var u,t
H.e(a,"$ia4")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.D(0,u)}},
$S:8}
F.j2.prototype={
a_:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.x("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a2()
return!0},
bm:function(a,b,c,d,e,f){var u=F.j1(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gk:function(a){return this.c.length},
aF:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)u[s].c3()
return!0},
c2:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)u[s].c1()
return!0},
iu:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.V(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.v(null)}}}}return!0},
i:function(a){return this.K()},
C:function(a){var u,t,s,r
this.a_()
u=H.d([],[P.l])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].C(a))
return C.a.q(u,"\n")},
K:function(){return this.C("")},
sig:function(a){this.c=H.i(a,"$ib",[F.az],"$ab")}}
F.j3.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
J:function(a,b){var u=this
H.m(b,{func:1,ret:-1,args:[F.a4]})
C.a.J(u.b,b)
C.a.J(u.c,new F.j4(u,b))
C.a.J(u.d,new F.j5(u,b))},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.d([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].C(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].C(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].C(""))
return C.a.q(r,"\n")},
sfh:function(a){this.b=H.i(a,"$ib",[F.a4],"$ab")},
sfi:function(a){this.c=H.i(a,"$ib",[F.a4],"$ab")},
sfj:function(a){this.d=H.i(a,"$ib",[F.a4],"$ab")}}
F.j4.prototype={
$1:function(a){H.e(a,"$ia4")
if(!J.V(a.a,this.a))this.b.$1(a)},
$S:8}
F.j5.prototype={
$1:function(a){var u
H.e(a,"$ia4")
u=this.a
if(!J.V(a.a,u)&&!J.V(a.b,u))this.b.$1(a)},
$S:8}
F.j6.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.d([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].C(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].C(""))
return C.a.q(r,"\n")},
sfs:function(a){this.b=H.i(a,"$ib",[F.bi],"$ab")},
sft:function(a){this.c=H.i(a,"$ib",[F.bi],"$ab")}}
F.j7.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.d([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].C(""))
return C.a.q(r,"\n")},
sbV:function(a){this.b=H.i(a,"$ib",[F.bO],"$ab")}}
O.dV.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.J():u},
A:function(a){var u
H.e(a,"$ir")
u=this.fr
if(u!=null)u.v(a)},
ac:function(){return this.A(null)},
dq:function(a){H.e(a,"$ir")
this.a=null
this.A(a)},
hN:function(){return this.dq(null)},
fN:function(a,b){var u=V.a5
H.i(b,"$ic",[u],"$ac")
u=new D.bJ([u])
u.b=!0
this.A(u)},
fP:function(a,b){var u=V.a5
H.i(b,"$ic",[u],"$ac")
u=new D.bK([u])
u.b=!0
this.A(u)},
d8:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.q,h=new H.a1([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=h.j(0,0)
h.l(0,0,r==null?1:r)}q=H.d([],[A.aB])
h.J(0,new O.hv(j,q))
C.a.bC(q,new O.hw())
p=new H.a1([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){o=u[s]
r=o.gb6()
n=p.j(0,o.gb6())
p.l(0,r,n==null?1:n)}m=H.d([],[A.aD])
p.J(0,new O.hx(j,m))
C.a.bC(m,new O.hy())
l=new H.a1([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.w)(i),++s){o=i[s]
t=o.gb6()
r=l.j(0,o.gb6())
l.l(0,t,r==null?1:r)}k=H.d([],[A.aF])
l.J(0,new O.hz(j,k))
C.a.bC(k,new O.hA())
i=C.d.a1(j.e.a.length+3,4)
j.dy.e
return A.mK(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
ah:function(a,b){H.i(a,"$ib",[T.ce],"$ab")
if(b!=null)if(!C.a.P(a,b)){b.a=a.length
C.a.h(a,b)}},
a5:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.al(u,u.length,[H.v(u,0)]);u.t();){t=u.d
t.toString
s=$.j0
if(s==null)s=$.j0=new V.M(0,0,1)
t.a=s
r=$.j_
t.d=r==null?$.j_=new V.M(0,1,0):r
r=$.iZ
t.e=r==null?$.iZ=new V.M(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bx(s)
r=s.a
p=s.b
o=s.c
t.a=s.u(0,Math.sqrt(r*r+p*p+o*o))
o=q.bx(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.u(0,Math.sqrt(p*p+r*r+s*s))
s=q.bx(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.u(0,Math.sqrt(r*r+p*p+o*o))}}}},
bv:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.d8()
u=H.e(b4.fr.j(0,b3.b8),"$idW")
if(u==null){u=A.mJ(b3,b4.a)
b4.bn(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.bq
b3=b5.e
if(!(b3 instanceof Z.bw))b3=b5.e=null
if(b3==null||!b3.d.n(0,s)){b3=t.k3
if(b3)b5.d.aF()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.c2()
q.a.c2()
q=q.e
if(q!=null)q.aw(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.iu()
p=p.e
if(p!=null)p.aw(0)}n=b5.d.bo(new Z.cj(b4.a),s)
n.ap($.aq()).e=b2.a.Q.c
if(b3)n.ap($.bt()).e=b2.a.cx.c
if(r)n.ap($.bs()).e=b2.a.ch.c
if(t.r1)n.ap($.bY()).e=b2.a.cy.c
if(q)n.ap($.bu()).e=b2.a.db.c
if(t.rx)n.ap($.br()).e=b2.a.dx.c
b5.e=n}b3=T.ce
m=H.d([],[b3])
b2.a.O(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.gU(q)
r=r.dy
r.toString
r.ag(q.a4(0,!0))}if(t.fr){r=b2.a
q=b4.cx
if(q==null){q=b4.db
q=q.gU(q)
p=b4.dx
p=b4.cx=q.p(0,p.gU(p))
q=p}r=r.fr
r.toString
r.ag(q.a4(0,!0))}r=b2.a
q=b4.ge7()
r=r.fy
r.toString
r.ag(q.a4(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.ag(C.l.a4(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.ag(C.l.a4(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.ag(C.l.a4(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.b.aY(r.a,r.d,l)
for(r=[P.A],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.h(p,k)
p=p[k]
q.toString
H.e(p,"$ia5")
q=q.r1
if(k>=q.length)return H.h(q,k)
q=q[k]
j=new Float32Array(H.cl(H.i(p.a4(0,!0),"$ib",r,"$ab")))
C.b.cE(q.a,q.d,!1,j)}}r=t.a
if(r.a){q=b2.a
p=b2.f.f
q=q.r2
C.b.T(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.ah(m,b2.f.e)
r=b2.a
q=b2.f.e
r.ai(r.ry,q)}if(t.id){r=t.b
if(r.a){q=b2.a
p=b2.r.f
q=q.x1
C.b.T(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.ah(m,b2.r.e)
r=b2.a
q=b2.r.e
r.ai(r.y1,q)}r=t.c
if(r.a){q=b2.a
p=b2.x.f
q=q.y2
C.b.T(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.ah(m,b2.x.e)
r=b2.a
q=b2.x.e
r.ai(r.bq,q)}r=t.d
if(r.a){q=b2.a
p=b2.y.f
q=q.dI
C.b.T(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.ah(m,b2.y.e)
r=b2.a
q=b2.y.e
r.ai(r.dJ,q)}r=t.e
q=r.a
if(!q)p=r.c
else p=!0
if(p){p=b2.a
o=b2.z.ch
p=p.dM
C.b.a0(p.a,p.d,o)}if(q){q=b2.a
p=b2.z.f
q=q.dK
C.b.T(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.ah(m,b2.z.e)
r=b2.a
q=b2.z.e
r.ai(r.dL,q)}r=t.z
if(r.length>0){q=b4.db
i=q.gU(q)
q=P.q
h=new H.a1([q,q])
for(q=b2.dx.e,p=q.length,g=0;g<q.length;q.length===p||(0,H.w)(q),++g){f=q[g]
e=h.j(0,0)
if(e==null)e=0
h.l(0,0,e+1)
d=J.fp(b2.a.ce.j(0,0),e)
o=i.bx(f.a)
c=o.a
b=o.b
a=o.c
a=o.u(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
o=a.b
a=a.c
C.b.T(b.a,b.d,c,o,a)
a=f.c
o=d.f
C.b.T(o.a,o.d,a.a,a.b,a.c)}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.w)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.cd.j(0,p)
C.b.aY(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.gU(q)
q=P.q
a0=new H.a1([q,q])
for(q=b2.dx.f,p=q.length,o=[b3],c=[P.A],g=0;g<q.length;q.length===p||(0,H.w)(q),++g){f=q[g]
a1=f.gb6()
e=a0.j(0,a1)
if(e==null)e=0
a0.l(0,a1,e+1)
d=J.fp(b2.a.cg.j(0,a1),e)
a2=i.p(0,f.gU(f))
b=f.gU(f)
a=$.cS
b=b.cC(a==null?$.cS=new V.ao(0,0,0):a)
a=d.b
C.b.T(a.a,a.d,b.a,b.b,b.c)
b=$.cS
b=a2.cC(b==null?$.cS=new V.ao(0,0,0):b)
a=d.c
C.b.T(a.a,a.d,b.a,b.b,b.c)
b=f.gb5(f)
a=d.e
C.b.T(a.a,a.d,b.a,b.b,b.c)
f.gan()
b=a2.cl(0)
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
j=new Float32Array(H.cl(H.i(new V.dX(a,a3,a4,a5,a6,a7,a8,a9,b).a4(0,!0),"$ib",c,"$ab")))
C.b.ef(b0.a,b0.d,!1,j)
f.gan()
b=f.gan()
H.i(m,"$ib",o,"$ab")
if(!C.a.P(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gan()
a=b.gcp(b)
if(a){a=d.f
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}f.gaZ()
b=f.gek()
a=d.x
a.toString
a3=b.giE(b)
a4=b.giF(b)
a5=b.giG()
b=b.giD()
C.b.cD(a.a,a.d,a3,a4,a5,b)
b=f.gaZ()
if(!C.a.P(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gaZ()
a=b.gcp(b)
if(a){a=d.r
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}if(f.giI()){b=f.gip()
a=d.y
C.b.a0(a.a,a.d,b)
b=f.giq()
a=d.z
C.b.a0(a.a,a.d,b)
b=f.gir()
a=d.Q
C.b.a0(a.a,a.d,b)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.w)(r),++g){p=r[g].a
l=a0.j(0,p)
if(l==null)l=0
p=b2.a.cf.j(0,p)
C.b.aY(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.gU(q)
q=P.q
b1=new H.a1([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.w)(q),++g){f=q[g]
a1=f.gb6()
e=b1.j(0,a1)
if(e==null)e=0
b1.l(0,a1,e+1)
d=J.fp(b2.a.cj.j(0,a1),e)
o=f.gj6(f)
c=d.b
C.b.T(c.a,c.d,o.a,o.b,o.c)
o=f.gjr(f).jC()
c=d.c
C.b.T(c.a,c.d,o.a,o.b,o.c)
o=i.cC(f.gj6(f))
c=d.d
C.b.T(c.a,c.d,o.a,o.b,o.c)
o=f.gb5(f)
c=d.e
C.b.T(c.a,c.d,o.a,o.b,o.c)
f.gan()
o=f.gbz()
c=d.f
C.b.T(c.a,c.d,o.a,o.b,o.c)
o=f.gcz(f)
c=d.r
C.b.T(c.a,c.d,o.a,o.b,o.c)
o=f.gjD()
c=d.x
C.b.a0(c.a,c.d,o)
o=f.gjE()
c=d.y
C.b.a0(c.a,c.d,o)
f.gan()
o=f.gan()
H.i(m,"$ib",b3,"$ab")
if(!C.a.P(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gan()
c=o.gcp(o)
if(c){c=d.dx
c.toString
b=o.d
if(!b)c.a.uniform1i(c.d,0)
else{o=o.a
c.a.uniform1i(c.d,o)}}f.gaZ()
o=f.gek()
c=d.z
c.toString
b=o.giE(o)
a=o.giF(o)
a3=o.giG()
o=o.giD()
C.b.cD(c.a,c.d,b,a,a3,o)
o=f.gaZ()
if(!C.a.P(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gaZ()
c=o.gcp(o)
if(c){c=d.dy
c.toString
b=o.d
if(!b)c.a.uniform1i(c.d,0)
else{o=o.a
c.a.uniform1i(c.d,o)}}if(f.gjs()){o=f.gjq()
c=d.Q
C.b.a0(c.a,c.d,o)
o=f.gjp()
c=d.ch
C.b.a0(c.a,c.d,o)}if(f.giI()){o=f.gip()
c=d.cx
C.b.a0(c.a,c.d,o)
o=f.giq()
c=d.cy
C.b.a0(c.a,c.d,o)
o=f.gir()
c=d.db
C.b.a0(c.a,c.d,o)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.w)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.ci.j(0,q)
C.b.aY(q.a,q.d,l)}}}if(t.f.c){b2.ah(m,b2.Q.e)
b3=b2.a
r=b2.Q.e
b3.ai(b3.dN,r)}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.gU(r).cl(0)}b3=b3.id
b3.toString
b3.ag(r.a4(0,!0))}if(t.cy){b2.ah(m,b2.ch)
b3=b2.a
r=b2.ch
b3.ai(b3.dO,r)
b3=t.r
if(b3.a){r=b2.a
q=b2.cx.f
r=r.dP
C.b.T(r.a,r.d,q.a,q.b,q.c)}if(b3.c){b2.ah(m,b2.cx.e)
b3=b2.a
r=b2.cx.e
b3.ai(b3.dQ,r)}b3=t.x
r=b3.a
if(!r)q=b3.c
else q=!0
if(q){q=b2.a
p=b2.cy.ch
q=q.dR
C.b.a0(q.a,q.d,p)}if(r){r=b2.a
q=b2.cy.f
r=r.dS
C.b.T(r.a,r.d,q.a,q.b,q.c)}if(b3.c){b2.ah(m,b2.cy.e)
b3=b2.a
r=b2.cy.e
b3.ai(b3.dT,r)}}b3=t.y
r=b3.a
q=!r
if(q)p=b3.c
else p=!0
if(p){if(r){r=b2.a
p=b2.db.f
r=r.dU
C.b.a0(r.a,r.d,p)}if(b3.c){b2.ah(m,b2.db.e)
r=b2.a
p=b2.db.e
r.ai(r.dV,p)}r=b4.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].O(b4)
r=b5.e
r.O(b4)
r.a3(b4)
r.ab(b4)
if(q)b3=b3.c
else b3=!0
if(b3)b4.a.disable(3042)
for(b3=b4.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b3.activeTexture(33984+r.a)
b3.bindTexture(34067,null)}}r=b2.a
r.toString
b3.useProgram(null)
r.x.bp()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.d8().b8},
seY:function(a){this.e=H.i(a,"$iX",[V.a5],"$aX")}}
O.hv.prototype={
$2:function(a,b){H.a0(a)
H.a0(b)
if(typeof b!=="number")return b.D()
return C.a.h(this.b,new A.aB(a,C.d.a1(b+3,4)*4))},
$S:10}
O.hw.prototype={
$2:function(a,b){H.e(a,"$iaB")
H.e(b,"$iaB")
return J.kj(a.a,b.a)},
$S:42}
O.hx.prototype={
$2:function(a,b){H.a0(a)
H.a0(b)
if(typeof b!=="number")return b.D()
return C.a.h(this.b,new A.aD(a,C.d.a1(b+3,4)*4))},
$S:10}
O.hy.prototype={
$2:function(a,b){H.e(a,"$iaD")
H.e(b,"$iaD")
return J.kj(a.a,b.a)},
$S:43}
O.hz.prototype={
$2:function(a,b){H.a0(a)
H.a0(b)
if(typeof b!=="number")return b.D()
return C.a.h(this.b,new A.aF(a,C.d.a1(b+3,4)*4))},
$S:10}
O.hA.prototype={
$2:function(a,b){H.e(a,"$iaF")
H.e(b,"$iaF")
return J.kj(a.a,b.a)},
$S:44}
O.hp.prototype={
aC:function(){var u,t=this
t.cS()
u=t.f
if(!(Math.abs(u-1)<$.I().a)){t.f=1
u=new D.y(t.b,u,1,[P.A])
u.b=!0
t.a.A(u)}}}
O.cL.prototype={
A:function(a){return this.a.A(H.e(a,"$ir"))},
ac:function(){return this.A(null)},
aC:function(){},
bY:function(a){var u,t,s=this
if(!s.c.n(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aC()
u=s.a
u.a=null
u.A(null)}},
sbb:function(a){var u,t=this,s=t.c
if(!s.c)t.bY(new A.ah(s.a,!1,!0))
s=t.e
if(s!==a){if(s!=null)s.gm().M(0,t.ga6())
u=t.e
t.e=a
a.gm().h(0,t.ga6())
s=new D.y(t.b+".textureCube",u,t.e,[T.d2])
s.b=!0
t.a.A(s)}}}
O.hq.prototype={}
O.b6.prototype={
ds:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.y(s.b+".color",u,a,[V.W])
t.b=!0
s.a.A(t)}},
aC:function(){this.cS()
this.ds(new V.W(1,1,1))},
sb5:function(a,b){this.bY(new A.ah(!0,!1,this.c.c))
this.ds(b)}}
O.hs.prototype={}
O.ht.prototype={
aC:function(){var u,t=this
t.cT()
u=t.ch
if(!(Math.abs(u-1)<$.I().a)){t.ch=1
u=new D.y(t.b+".refraction",u,1,[P.A])
u.b=!0
t.a.A(u)}}}
O.hu.prototype={
du:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.I().a)){u.ch=a
t=new D.y(u.b+".shininess",t,a,[P.A])
t.b=!0
u.a.A(t)}},
aC:function(){this.cT()
this.du(100)}}
O.e8.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.J():u},
A:function(a){var u
H.e(a,"$ir")
u=this.e
if(u!=null)u.v(a)},
ac:function(){return this.A(null)},
a5:function(a,b){},
bv:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.e(a.fr.j(0,n),"$ie9")
if(u==null){t=a.a
u=new A.e9(t,n)
u.be(t,n)
u.br(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.o(u.y.j(0,"fov"),"$ia8")
u.ch=H.o(u.y.j(0,"ratio"),"$ia8")
u.cx=H.o(u.y.j(0,"boxClr"),"$iZ")
u.cy=H.o(u.y.j(0,"boxTxt"),"$iag")
u.db=H.o(u.y.j(0,"viewMat"),"$iac")
a.bn(u)}o.a=u}if(b.e==null){t=b.d.bo(new Z.cj(a.a),$.aq())
t.ap($.aq()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.O(a)}t=a.d
s=a.c
r=o.a
r.O(a)
q=o.b
p=r.Q
C.b.a0(p.a,p.d,q)
q=r.ch
C.b.a0(q.a,q.d,t/s)
s=o.c
r.cy.cL(s)
s=o.d
t=r.cx
C.b.T(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.gU(s).cl(0)
r=r.db
r.toString
r.ag(s.a4(0,!0))
t=b.e
if(t instanceof Z.bw){t.O(a)
t.a3(a)
t.ab(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.bp()
t=o.c
if(t!=null)t.ab(a)}}
O.ig.prototype={
gm:function(){var u=this.c
return u==null?this.c=D.J():u},
a5:function(a,b){},
bv:function(a,b){var u,t,s,r=this,q="SolidColor",p=r.a
if(p==null){u=H.e(a.fr.j(0,q),"$iea")
if(u==null){p=a.a
u=new A.ea(p,q)
u.be(p,q)
u.br(0,"uniform mat4 projViewObjMat;                       \n                                                   \nattribute vec3 posAttr;                            \n                                                   \nvoid main()                                        \n{                                                  \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0); \n}                                                  \n","precision mediump float; \n                         \nuniform vec4 color;      \n                         \nvoid main()              \n{                        \n   gl_FragColor = color; \n}                        \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.o(u.y.j(0,"color"),"$ibT")
u.ch=H.o(u.y.j(0,"projViewObjMat"),"$iac")
a.bn(u)}r.a=u
p=u}t=b.e
if((!(t instanceof Z.bw)?b.e=null:t)==null){p=b.d.bo(new Z.cj(a.a),$.aq())
t=p.ap($.aq())
s=r.a
t.e=s.z.c
b.e=p
p=s}p.O(a)
t=r.b
p.Q.cJ(t)
t=a.ge7()
p=p.ch
p.toString
p.ag(t.a4(0,!0))
t=b.e
t.O(a)
t.a3(a)
t.ab(a)
t=r.a
t.toString
a.a.useProgram(null)
t.x.bp()}}
O.bR.prototype={}
O.eg.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.J():u},
A:function(a){var u
H.e(a,"$ir")
u=this.e
if(u!=null)u.v(a)},
ac:function(){return this.A(null)},
h2:function(a,b){var u,t,s,r,q,p,o
H.i(b,"$ic",[O.aU],"$ac")
for(u=b.length,t=this.ga6(),s={func:1,ret:-1,args:[D.r]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=b[q]
if(p!=null){o=p.f
if(o==null){o=new D.bF()
o.sa7(null)
o.saQ(null)
o.c=null
o.d=0
p.f=o}H.m(t,s)
if(o.a==null)o.sa7(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.ac()},
h4:function(a,b){var u,t
H.i(b,"$ic",[O.aU],"$ac")
for(u=b.gR(b),t=this.ga6();u.t();)u.gH(u).gm().M(0,t)
this.ac()},
a5:function(a,b){},
fp:function(a){a=C.d.a1(a+3,4)*4
if(a<=0)return 4
return a},
bv:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.fp(h.c.a.length)
if(g!==h.d||h.f!=h.r){h.d=g
h.r=h.f
h.b=null}u=h.b
if(u==null){u=h.f
t="TextureLayout_"+g+"_"+C.d.i(u.a)
s=H.e(a.fr.j(0,t),"$ieh")
if(s==null){s=A.n4(g,u,a.a)
a.bn(s)}h.b=s
u=s}if(b.e==null){u=b.d.bo(new Z.cj(a.a),$.aq())
t=u.ap($.aq())
r=h.b
t.e=r.z.c
b.e=u
u=r}u.O(a)
u=T.ce
q=H.d([],[u])
for(t=[P.A],u=[u],p=0,o=0;r=h.c.a,o<r.length;++o){n=r[o]
if(n!=null&&n.a!=null){r=n.a
H.i(q,"$ib",u,"$ab")
if(r!=null)if(!C.a.P(q,r)){r.a=q.length
C.a.h(q,r)}r=h.b
m=n.a
r=r.cx
if(p>=r.length)return H.h(r,p)
r=r[p]
l=m==null||!m.d
k=r.a
r=r.d
if(l)k.uniform1i(r,0)
else k.uniform1i(r,m.a)
r=h.b
m=n.b
r=r.cy
if(p>=r.length)return H.h(r,p)
r=r[p]
if(m==null){m=$.hB
if(m==null){m=new V.a5(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.hB=m}}j=new Float32Array(H.cl(H.i(m.a4(0,!0),"$ib",t,"$ab")))
C.b.cE(r.a,r.d,!1,j)
r=h.b
i=n.c
r.toString
if(i==null){m=$.cU
if(m==null){m=V.e3(0,0,1,1)
$.cU=m
i=m}else i=m}m=r.db
if(p>=m.length)return H.h(m,p)
m=m[p]
C.b.by(m.a,m.d,i.a,i.b)
r=r.dx
if(p>=r.length)return H.h(r,p)
r=r[p]
C.b.by(r.a,r.d,i.c,i.d)
r=h.b
i=n.d
r.toString
if(i==null){m=$.cU
if(m==null){m=V.e3(0,0,1,1)
$.cU=m
i=m}else i=m}m=r.dy
if(p>=m.length)return H.h(m,p)
m=m[p]
C.b.by(m.a,m.d,i.a,i.b)
r=r.fr
if(p>=r.length)return H.h(r,p)
r=r[p]
C.b.by(r.a,r.d,i.c,i.d)
r=h.b
m=n.e
r=r.fx
if(p>=r.length)return H.h(r,p)
r=r[p]
m=H.B(m)?1:0
C.b.aY(r.a,r.d,m);++p}}u=h.b.Q
C.b.aY(u.a,u.d,p)
u=h.b
t=h.a
u.ch.cJ(t)
for(u=a.a,o=0;o<q.length;++o){t=q[o]
if(!t.c&&t.d){t.c=!0
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}t=b.e
if(t instanceof Z.bw){t.O(a)
t.a3(a)
t.ab(a)}else b.e=null
t=h.b
t.toString
u.useProgram(null)
t.x.bp()
for(o=0;o<q.length;++o){t=q[o]
if(t.c){t.c=!1
u.activeTexture(33984+t.a)
u.bindTexture(3553,null)}}},
sfe:function(a){this.c=H.i(a,"$iX",[O.aU],"$aX")}}
O.aU.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.J():u},
A:function(a){var u
H.e(a,"$ir")
u=this.f
if(u!=null)u.v(a)},
ac:function(){return this.A(null)},
san:function(a){var u,t=this,s=t.a
if(s!=a){if(s!=null)s.gm().M(0,t.ga6())
u=t.a
t.a=a
if(a!=null)a.gm().h(0,t.ga6())
s=new D.y("texture",u,t.a,[T.d1])
s.b=!0
t.A(s)}},
sdG:function(a,b){var u,t,s=this
if(b==null)b=V.e4()
if(!J.V(s.d,b)){u=s.d
s.d=b
t=new D.y("destination",u,b,[V.bP])
t.b=!0
s.A(t)}}}
T.dx.prototype={
bf:function(a){H.e(a,"$ir")},
eO:function(){return this.bf(null)},
aE:function(a){var u,t=this
if(t.b!=null)return!1
t.b=a
a.c.gcb().h(0,t.gfC())
t.b.c.gaX().h(0,t.gfE())
t.b.c.gbz().h(0,t.gfG())
u=t.b.e
u.gcO(u).h(0,t.gi9())
t.b.e.gaX().h(0,t.gi7())
u=t.b.e
u.gdH(u).h(0,t.gi5())
return!0},
fD:function(a){if(!H.o(H.e(a,"$ir"),"$iaC").x.b.n(0,this.c))return
this.ch=this.Q=!0},
fF:function(a){var u,t=this
H.e(a,"$ir")
if(!t.Q)return
if(t.ch){H.o(a,"$iaC")
u=a.d.G(0,a.y)
u=new V.R(u.a,u.b)
if(u.w(u)<t.z)return
t.ch=!1}},
fH:function(a){var u=this
H.e(a,"$ir")
if(!u.Q)return
u.Q=!1
if(!u.ch)return
u.dm(a)},
ia:function(a){H.e(a,"$ir")
this.ch=this.Q=!0},
i8:function(a){var u,t=this
H.e(a,"$ir")
if(!t.Q)return
if(t.ch){H.o(a,"$id4")
u=a.d.G(0,a.y)
u=new V.R(u.a,u.b)
if(u.w(u)<t.z)return
t.ch=!1}},
i6:function(a){var u=this
H.e(a,"$ir")
if(!u.Q)return
u.Q=!1
if(!u.ch)return
u.dm(a)},
dm:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
H.o(a,"$iaC")
u=a.d
t=u.a
s=a.c
r=t/s.c
q=u.b/s.d
s=this.a
u=this.d
p=T.ls(s.a,u,!0,1,1,C.k.aV(r*(u.r-1)),C.k.aV(q*(u.x-1)))
u=p.b
o=C.d.bB(0,u)
n=C.d.bB(0,p.c)
m=(o+n*u)*4
u=p.a
t=u.length
if(m<0||m>=t)return H.h(u,m)
s=u[m]/255
l=m+1
if(l>=t)return H.h(u,l)
l=u[l]/255
k=m+2
if(k>=t)return H.h(u,k)
k=u[k]/255
j=m+3
if(j>=t)return H.h(u,j)
j=u[j]/255
if(s<0)u=0
else u=s>1?1:s
if(l<0)t=0
else t=l>1?1:l
if(k<0)s=0
else s=k>1?1:k
if(j<0)l=0
else l=j>1?1:j
l=new T.dy(new V.R(r,q),new V.a2(u,t,s,l))
l.b=!0
s=this.x
if(s!=null)s.v(l)}}
T.dy.prototype={
i:function(a){return"ColorPicker: "+this.c.i(0)+" => "+this.d.i(0)}}
T.ce.prototype={}
T.d1.prototype={}
T.iz.prototype={
gm:function(){var u=this.y
return u==null?this.y=D.J():u}}
T.d2.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.J():u},
O:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
ab:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.iA.prototype={
dY:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.d2()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aO(u,k,r,34069,!1,!1)
t.aO(u,k,o,34070,!1,!1)
t.aO(u,k,q,34071,!1,!1)
t.aO(u,k,n,34072,!1,!1)
t.aO(u,k,p,34073,!1,!1)
t.aO(u,k,m,34074,!1,!1)
return u},
dX:function(a){return this.dY(a,".png")},
aO:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.n
W.a9(t,"load",H.m(new T.iB(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
hO:function(a,b,c){var u,t,s,r
b=V.dm(b)
u=V.dm(a.width)
t=V.dm(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.fE()
s.width=u
s.height=t
r=H.e(C.h.cG(s,"2d"),"$iby")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.lP(r.getImageData(0,0,s.width,s.height))}}}
T.iB.prototype={
$1:function(a){var u=this,t=u.a,s=t.hO(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.jg(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.cc()}++t.e},
$S:29}
T.iC.prototype={
fl:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
for(u=this.c,t=C.d.a1(u,2),s=this.b,r=this.a,q=r.length,p=s*4,--u;t>=0;--t){o=p*t
n=p*(u-t)
for(m=0;m<s;++m){l=4*m
k=o+l
j=n+l
for(i=0;i<4;++i){h=k+i
g=j+i
if(h<0||h>=q)return H.h(r,h)
f=r[h]
if(g<0||g>=q)return H.h(r,g)
r[h]=r[g]
r[g]=f}}}}}
V.fr.prototype={
aW:function(a,b){return!0},
i:function(a){return"all"},
$ibj:1}
V.bj.prototype={}
V.dU.prototype={
aW:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)if(u[s].aW(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.w)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saB:function(a){this.a=H.i(a,"$ib",[V.bj],"$ab")},
$ibj:1}
V.bk.prototype={
aW:function(a,b){return!this.eq(0,b)},
i:function(a){return"!["+this.cR(0)+"]"}}
V.i8.prototype={
ew:function(a){var u,t
if(a.a.length<=0)throw H.f(P.x("May not create a SetMatcher with zero characters."))
u=new H.a1([P.q,P.S])
for(t=new H.cK(a,a.gk(a),[H.ad(a,"t",0)]);t.t();)u.l(0,t.d,!0)
this.shR(u)},
aW:function(a,b){return this.a.dF(0,b)},
i:function(a){var u=this.a
return P.ky(new H.dQ(u,[H.v(u,0)]))},
shR:function(a){this.a=H.i(a,"$iG",[P.q,P.S],"$aG")},
$ibj:1}
V.cY.prototype={
q:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d5(this.a.L(0,b))
r.saB(H.d([],[V.bj]))
r.c=!1
C.a.h(this.c,r)
return r},
iJ:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
if(r.aW(0,a))return r}return},
i:function(a){return this.b},
sib:function(a){this.c=H.i(a,"$ib",[V.d5],"$ab")}}
V.ej.prototype={
i:function(a){var u=H.m_(this.b,"\n","\\n"),t=H.m_(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d3.prototype={
i:function(a){return this.b},
shJ:function(a){var u=P.l
this.c=H.i(a,"$iG",[u,u],"$aG")}}
V.iF.prototype={
L:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cY(this,b)
u.sib(H.d([],[V.d5]))
u.d=null
this.a.l(0,b,u)}return u},
bc:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.d3(a)
u=P.l
t.shJ(new H.a1([u,u]))
this.b.l(0,a,t)}return t},
jl:function(a){var u,t,s,r,q,p,o,n,m=H.d([],[V.ej]),l=this.c,k=[P.q],j=H.d([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.e.bg(a,s)
q=l.iJ(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.ky(j)
throw H.f(P.x("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.d([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.ky(j)
o=l.d
n=o.c.j(0,p)
t=new V.ej(n==null?o.b:n,p,s)}++s}}},
si1:function(a){this.a=H.i(a,"$iG",[P.l,V.cY],"$aG")},
si4:function(a){this.b=H.i(a,"$iG",[P.l,V.d3],"$aG")}}
V.d5.prototype={
i:function(a){return this.b.b+": "+this.cR(0)}}
X.fz.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.J():u},
Z:function(a){var u=this.fr
if(u!=null)u.v(a)},
sao:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.y("width",u,b,[P.q])
u.b=!0
t.Z(u)}},
sak:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.y("height",u,b,[P.q])
u.b=!0
t.Z(u)}},
O:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=3553,f=36161,e=36160
if(i.f){u=a.a
t=u.drawingBufferWidth
s=i.r
if(typeof t!=="number")return t.p()
i.sao(0,C.c.W(t*s))
u=u.drawingBufferHeight
s=i.x
if(typeof u!=="number")return u.p()
i.sak(0,C.c.W(u*s))}if(i.y==null){u=a.a
t=i.ch
s=i.a
r=i.b
q=H.a0(u.getParameter(3379))
p=V.dm(s)
o=V.dm(r)
q=V.dm(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(g,n)
u.texParameteri(g,10242,33071)
u.texParameteri(g,10243,33071)
u.texParameteri(g,10241,9729)
u.texParameteri(g,10240,9729)
C.b.ec(u,g,0,6408,p,o,0,6408,5121,h)
u.bindTexture(g,h)
m=T.lr(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.cc()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.cc()
t=i.ch
s=t.b
i.z=s
i.c=t.r
i.d=t.x
u.bindTexture(g,s)
t=u.createRenderbuffer()
i.Q=t
u.bindRenderbuffer(f,t)
u.renderbufferStorage(f,33189,i.c,i.d)
t=u.createFramebuffer()
i.y=t
u.bindFramebuffer(e,t)
u.framebufferTexture2D(e,36064,g,i.z,0)
u.framebufferRenderbuffer(e,36096,f,i.Q)
u.bindTexture(g,h)
u.bindRenderbuffer(f,h)
u.bindFramebuffer(e,h)}u=a.a
u.bindFramebuffer(e,i.y)
u.enable(2884)
u.enable(2929)
u.depthFunc(513)
t=i.dy
s=t.c
a.c=C.c.W(s*i.a)
r=t.d
a.d=C.c.W(r*i.b)
l=t.a
k=i.c
j=C.c.W(l*k)
t=t.b
l=i.d
u.viewport(j,C.c.W(t*l),C.c.W(s*k),C.c.W(r*l))
u.clearDepth(i.db)
t=i.cx
u.clearColor(t.a,t.b,t.c,t.d)
u.clear(16640)},
ab:function(a){a.a.bindFramebuffer(36160,null)}}
X.c1.prototype={$ic7:1}
X.h7.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.J():u},
O:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.F(u)
q=C.c.W(r*u)
r=s.b
if(typeof t!=="number")return H.F(t)
p=C.c.W(r*t)
r=C.c.W(s.c*u)
a.c=r
s=C.c.W(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)},
ab:function(a){}}
X.h9.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.J():u},
O:function(a){var u
a.cy.bu(V.bN())
u=V.bN()
a.db.bu(u)},
ab:function(a){a.cy.aG()
a.db.aG()},
$ic7:1,
$ic1:1}
X.e0.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.J():u},
Z:function(a){var u
H.e(a,"$ir")
u=this.f
if(u!=null)u.v(a)},
eS:function(){return this.Z(null)},
O:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.b7(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bu(k)
r=$.lk
if(r==null){r=V.lm()
q=V.kC()
p=$.ly
r=V.lc(r,q,p==null?$.ly=new V.M(0,0,-1):p)
$.lk=r
u=r}else u=r
r=s.b
if(r!=null){t=r.ax(0,a,s)
if(t!=null)u=t.p(0,u)}a.db.bu(u)},
ab:function(a){a.cy.aG()
a.db.aG()},
$ic7:1,
$ic1:1}
X.d_.prototype={}
V.fC.prototype={
ih:function(a,b,c){var u,t,s,r=this
H.m(c,{func:1,ret:-1})
if(r.b==null)return
u=document
t=u.createElement("button")
s=t.style
s.whiteSpace="nowrap"
C.A.ej(t,b)
s=W.a6
W.a9(t,"click",H.m(new V.fD(c),{func:1,ret:-1,args:[s]}),!1,s)
J.kU(r.b).h(0,t)
J.kU(r.b).h(0,u.createElement("br"))
C.a.h(r.c,t)},
seZ:function(a){this.c=H.i(a,"$ib",[W.bx],"$ab")}}
V.fD.prototype={
$1:function(a){H.e(a,"$ia6")
return this.a.$0()},
$S:4}
V.kf.prototype={
$1:function(a){var u
H.e(a,"$ib9")
u=C.c.ee(this.a.giK(),2)
if(u!=="0.00")P.kR(u+" fps")},
$S:45}
V.ic.prototype={
ex:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a9(q,"scroll",H.m(new V.ie(o),{func:1,ret:-1,args:[r]}),!1,r)},
dA:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.i(a,"$ib",[P.l],"$ab")
this.hT()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.jl(C.a.iO(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.w)(s),++q){p=s[q]
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
if(H.og(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.K(m[1])
l.textContent=H.K(m[0])
t.appendChild(l)}else{k=P.nk(C.R,n,C.t,!1)
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
ii:function(a){var u,t,s,r,q,p,o,n="auto"
H.i(a,"$ib",[P.l],"$ab")
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
s=H.e(r.insertCell(-1),"$ibn").style
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
o=H.e(r.insertCell(-1),"$ibn")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
hT:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.iF()
t=P.l
u.si1(new H.a1([t,V.cY]))
u.si4(new H.a1([t,V.d3]))
u.c=null
u.c=u.L(0,q)
t=u.L(0,q).q(0,p)
s=V.aj(new H.a3("*"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,p).q(0,p)
s=new V.bk()
r=[V.bj]
s.saB(H.d([],r))
C.a.h(t.a,s)
t=V.aj(new H.a3("*"))
C.a.h(s.a,t)
t=u.L(0,p).q(0,"BoldEnd")
s=V.aj(new H.a3("*"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,q).q(0,o)
s=V.aj(new H.a3("_"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,o).q(0,o)
s=new V.bk()
s.saB(H.d([],r))
C.a.h(t.a,s)
t=V.aj(new H.a3("_"))
C.a.h(s.a,t)
t=u.L(0,o).q(0,n)
s=V.aj(new H.a3("_"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,q).q(0,m)
s=V.aj(new H.a3("`"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,m).q(0,m)
s=new V.bk()
s.saB(H.d([],r))
C.a.h(t.a,s)
t=V.aj(new H.a3("`"))
C.a.h(s.a,t)
t=u.L(0,m).q(0,"CodeEnd")
s=V.aj(new H.a3("`"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,q).q(0,l)
s=V.aj(new H.a3("["))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,l).q(0,k)
s=V.aj(new H.a3("|"))
C.a.h(t.a,s)
s=u.L(0,l).q(0,j)
t=V.aj(new H.a3("]"))
C.a.h(s.a,t)
s.c=!0
s=u.L(0,l).q(0,l)
t=new V.bk()
t.saB(H.d([],r))
C.a.h(s.a,t)
s=V.aj(new H.a3("|]"))
C.a.h(t.a,s)
s=u.L(0,k).q(0,j)
t=V.aj(new H.a3("]"))
C.a.h(s.a,t)
s.c=!0
s=u.L(0,k).q(0,k)
t=new V.bk()
t.saB(H.d([],r))
C.a.h(s.a,t)
s=V.aj(new H.a3("|]"))
C.a.h(t.a,s)
C.a.h(u.L(0,q).q(0,i).a,new V.fr())
s=u.L(0,i).q(0,i)
t=new V.bk()
t.saB(H.d([],r))
C.a.h(s.a,t)
s=V.aj(new H.a3("*_`["))
C.a.h(t.a,s)
s=u.L(0,"BoldEnd")
s.d=s.a.bc(p)
s=u.L(0,n)
s.d=s.a.bc(o)
s=u.L(0,"CodeEnd")
s.d=s.a.bc(m)
s=u.L(0,j)
s.d=s.a.bc("Link")
s=u.L(0,i)
s.d=s.a.bc(i)
this.b=u}}
V.ie.prototype={
$1:function(a){P.lu(C.j,new V.id(this.a))},
$S:29}
V.id.prototype={
$0:function(){var u=C.c.W(document.documentElement.scrollTop),t=this.a.style,s=H.k(-0.01*u)+"px"
t.top=s},
$S:2}
M.ka.prototype={
$1:function(a){var u,t,s
H.e(a,"$ir")
for(u=this.a,t=0;t<u.length;++t){s=u[t]
s.sc9(0.99*s.e)
s.sca(0.99*s.f)}},
$S:5}
M.kb.prototype={
$1:function(a){var u,t,s,r=H.o(H.e(a,"$ir"),"$idy").d.jm()
for(u=this.a,t=0;t<u.length;++t)if(u[t].n(0,r)){u=this.b
if(t>=u.length)return H.h(u,t)
s=u[t]
s.sc9(1.21)
s.sca(1.31)
break}},
$S:5}
M.kc.prototype={
$0:function(){var u,t,s,r,q,p=null,o="image/png",n=T.ls(this.a.f.a,this.b.ch,!0,p,p,p,p),m=W.fE(),l=n.b
m.width=l
u=n.c
m.height=u
t=H.e(C.h.cG(m,"2d"),"$iby")
s=(t&&C.u).iz(t,l,u)
C.S.ei(J.mm(s),0,n.a)
C.u.j8(t,s,0,0)
n=m.toDataURL(o,100)
n.length
r=H.oi(n,o,"image/octet-stream",0)
q=W.kW()
q.setAttribute("download","backBuffer.png")
q.setAttribute("href",r)
q.click()},
$S:2};(function aliases(){var u=J.a.prototype
u.en=u.i
u=J.dN.prototype
u.ep=u.i
u=P.t.prototype
u.cQ=u.X
u=P.c.prototype
u.eo=u.bA
u=W.O.prototype
u.bD=u.aj
u=W.eW.prototype
u.er=u.av
u=O.cL.prototype
u.cS=u.aC
u=O.b6.prototype
u.cT=u.aC
u=V.dU.prototype
u.eq=u.aW
u.cR=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"nO","nb",9)
u(P,"nP","nc",9)
u(P,"nQ","nd",9)
t(P,"lN","nM",3)
s(W,"o1",4,null,["$4"],["nf"],22,0)
s(W,"o2",4,null,["$4"],["ng"],22,0)
var m
r(m=E.an.prototype,"ge2",0,0,null,["$1","$0"],["e3","iY"],0,0)
r(m,"ge4",0,0,null,["$1","$0"],["e5","iZ"],0,0)
r(m,"ge0",0,0,null,["$1","$0"],["e1","iX"],0,0)
r(m,"gdZ",0,0,null,["$1","$0"],["e_","iU"],0,0)
q(m,"giS","iT",7)
q(m,"giV","iW",7)
r(m=E.ei.prototype,"gcU",0,0,null,["$1","$0"],["cW","cV"],0,0)
p(m,"gjc","e8",3)
o(m=X.en.prototype,"gh5","h6",11)
o(m,"gfQ","fR",11)
o(m,"gfW","fX",4)
o(m,"gh9","ha",20)
o(m,"gh7","h8",20)
o(m,"ghd","he",4)
o(m,"ghh","hi",4)
o(m,"gh_","h0",4)
o(m,"ghf","hg",4)
o(m,"gfY","fZ",4)
o(m,"ghj","hk",37)
o(m,"ghl","hm",11)
o(m,"ghB","hC",12)
o(m,"ghx","hy",12)
o(m,"ghz","hA",12)
r(D.bC.prototype,"geB",0,0,null,["$1","$0"],["az","eC"],0,0)
r(m=D.dP.prototype,"gdi",0,0,null,["$1","$0"],["dj","hb"],0,0)
o(m,"ghn","ho",38)
q(m,"gfK","fL",13)
q(m,"ghr","hs",13)
n(V.R.prototype,"gk","cn",23)
n(V.M.prototype,"gk","cn",23)
r(m=U.cI.prototype,"gaP",0,0,null,["$1","$0"],["E","a8"],0,0)
q(m,"geD","eE",24)
q(m,"ghp","hq",24)
r(m=U.eo.prototype,"gaP",0,0,null,["$1","$0"],["E","a8"],0,0)
o(m,"gbE","bF",1)
o(m,"gbG","bH",1)
o(m,"gbI","bJ",1)
r(m=U.ep.prototype,"gaP",0,0,null,["$1","$0"],["E","a8"],0,0)
o(m,"gbE","bF",1)
o(m,"gbG","bH",1)
o(m,"gbI","bJ",1)
o(m,"gfv","fw",1)
o(m,"gfz","fA",1)
o(m,"geJ","eK",1)
o(m,"geH","eI",1)
o(m,"geF","eG",1)
o(U.eq.prototype,"gfI","fJ",1)
r(m=M.dz.prototype,"gY",0,0,null,["$1","$0"],["V","b0"],0,0)
q(m,"ght","hu",26)
q(m,"ghv","hw",26)
r(M.dB.prototype,"gY",0,0,null,["$1","$0"],["V","b0"],0,0)
r(m=M.dG.prototype,"gY",0,0,null,["$1","$0"],["V","b0"],0,0)
q(m,"gfS","fT",7)
q(m,"gfU","fV",7)
r(m=O.dV.prototype,"ga6",0,0,null,["$1","$0"],["A","ac"],0,0)
r(m,"ghM",0,0,null,["$1","$0"],["dq","hN"],0,0)
q(m,"gfM","fN",27)
q(m,"gfO","fP",27)
r(O.cL.prototype,"ga6",0,0,null,["$1","$0"],["A","ac"],0,0)
r(O.e8.prototype,"ga6",0,0,null,["$1","$0"],["A","ac"],0,0)
r(m=O.eg.prototype,"ga6",0,0,null,["$1","$0"],["A","ac"],0,0)
q(m,"gh1","h2",28)
q(m,"gh3","h4",28)
r(O.aU.prototype,"ga6",0,0,null,["$1","$0"],["A","ac"],0,0)
r(m=T.dx.prototype,"gcX",0,0,null,["$1","$0"],["bf","eO"],0,0)
o(m,"gfC","fD",1)
o(m,"gfE","fF",1)
o(m,"gfG","fH",1)
o(m,"gi9","ia",1)
o(m,"gi7","i8",1)
o(m,"gi5","i6",1)
r(X.e0.prototype,"geR",0,0,null,["$1","$0"],["Z","eS"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.Q,null)
s(P.Q,[H.kt,J.a,J.al,P.eJ,P.c,H.cK,P.b2,H.c3,H.ci,H.iK,P.bE,H.cz,H.f0,P.af,H.hg,H.hh,H.hc,P.f6,P.be,P.aJ,P.et,P.io,P.cZ,P.ip,P.b9,P.am,P.jU,P.jI,P.ck,P.jB,P.t,P.cA,P.jS,P.S,P.aA,P.aa,P.bD,P.hU,P.ed,P.eB,P.h6,P.bG,P.b,P.G,P.P,P.as,P.l,P.bQ,W.fL,W.bV,W.C,W.dZ,W.eW,W.jN,W.dI,W.aw,W.jH,W.fc,P.fb,P.jC,O.X,O.cM,E.fA,E.an,E.i0,E.ei,Z.es,Z.cj,Z.bw,Z.bI,Z.bo,D.fG,D.bF,D.r,X.dw,X.dO,X.he,X.hj,X.ar,X.hI,X.iG,X.en,D.bC,D.ae,D.e1,D.ec,V.W,V.a2,V.fY,V.dX,V.a5,V.a7,V.ao,V.bm,V.bP,V.R,V.M,U.eo,U.ep,U.eq,M.dB,M.dG,M.ax,A.ds,A.fu,A.ah,A.aB,A.aD,A.aF,A.hr,A.cf,A.cg,A.ch,A.bA,A.ek,A.iR,F.a4,F.bi,F.bO,F.e7,F.i9,F.ia,F.ib,F.az,F.j2,F.j3,F.j6,F.j7,O.bR,O.cL,O.hs,O.aU,T.dx,T.iA,T.iC,V.fr,V.bj,V.dU,V.i8,V.cY,V.ej,V.d3,V.iF,X.d_,X.c1,X.h9,X.e0,V.fC,V.ic])
s(J.a,[J.hb,J.dM,J.dN,J.b3,J.c5,J.bL,H.cP,W.j,W.fq,W.dt,W.by,W.b0,W.b1,W.U,W.ev,W.fP,W.fQ,W.ex,W.dF,W.ez,W.fS,W.n,W.eC,W.aN,W.h8,W.eF,W.bH,W.dS,W.hC,W.eK,W.eL,W.aO,W.eM,W.eP,W.aP,W.eT,W.eV,W.aR,W.eX,W.aS,W.f1,W.aG,W.f4,W.iE,W.aV,W.f7,W.iI,W.iW,W.fd,W.ff,W.fh,W.fj,W.fl,P.b5,P.eH,P.b8,P.eR,P.hY,P.f2,P.ba,P.f9,P.fv,P.eu,P.du,P.dJ,P.e2,P.e5,P.cc,P.e6,P.ef,P.el,P.eZ])
s(J.dN,[J.hV,J.bU,J.bM])
t(J.ks,J.b3)
s(J.c5,[J.dL,J.dK])
t(P.hi,P.eJ)
s(P.hi,[H.em,W.ji,W.ap,P.h2])
t(H.a3,H.em)
s(P.c,[H.fV,H.hm,H.d7])
s(H.fV,[H.c6,H.dQ])
s(H.c6,[H.it,H.ho])
s(P.b2,[H.hn,H.jb])
s(P.bE,[H.hR,H.hd,H.iU,H.iM,H.fF,H.i6,P.ft,P.e_,P.aL,P.iV,P.iT,P.cd,P.fJ,P.fO])
s(H.cz,[H.kh,H.iw,H.k6,H.k7,H.k8,P.je,P.jd,P.jf,P.jg,P.jR,P.jQ,P.jo,P.js,P.jp,P.jq,P.jr,P.jv,P.jw,P.ju,P.jt,P.iq,P.ir,P.k_,P.jF,P.jE,P.jG,P.hl,P.fT,P.fU,W.fW,W.hE,W.hG,W.i5,W.im,W.jn,W.hQ,W.hP,W.jJ,W.jK,W.jP,W.jT,P.k2,P.h3,P.h4,P.fx,E.i1,E.i2,E.i3,E.iD,D.fZ,D.h_,F.jV,F.j9,F.j8,F.j4,F.j5,O.hv,O.hw,O.hx,O.hy,O.hz,O.hA,T.iB,V.fD,V.kf,V.ie,V.id,M.ka,M.kb,M.kc])
s(H.iw,[H.ik,H.cx])
t(H.jc,P.ft)
t(P.hk,P.af)
s(P.hk,[H.a1,W.jh])
t(H.dY,H.cP)
s(H.dY,[H.db,H.dd])
t(H.dc,H.db)
t(H.c8,H.dc)
t(H.de,H.dd)
t(H.cO,H.de)
s(H.cO,[H.hJ,H.hK,H.hL,H.hM,H.hN,H.cQ,H.hO])
t(P.jD,P.jU)
t(P.jA,P.jI)
t(P.dA,P.ip)
t(P.fX,P.cA)
t(P.iX,P.fX)
t(P.iY,P.dA)
s(P.aa,[P.A,P.q])
s(P.aL,[P.cb,P.ha])
s(W.j,[W.D,W.h1,W.aQ,W.df,W.aT,W.aH,W.dh,W.ja,W.d8,P.fy,P.c0])
s(W.D,[W.O,W.bz,W.d9])
s(W.O,[W.u,P.p])
s(W.u,[W.dr,W.fs,W.cw,W.bv,W.bx,W.c2,W.dD,W.h5,W.cJ,W.i7,W.bn,W.ee,W.iu,W.iv,W.d0])
s(W.b0,[W.cC,W.fM,W.fN])
t(W.fK,W.b1)
t(W.cD,W.ev)
t(W.ey,W.ex)
t(W.dE,W.ey)
t(W.eA,W.ez)
t(W.fR,W.eA)
t(W.aM,W.dt)
t(W.eD,W.eC)
t(W.h0,W.eD)
t(W.eG,W.eF)
t(W.c4,W.eG)
t(W.bS,W.n)
s(W.bS,[W.b4,W.a6,W.aW])
t(W.hD,W.eK)
t(W.hF,W.eL)
t(W.eN,W.eM)
t(W.hH,W.eN)
t(W.eQ,W.eP)
t(W.cR,W.eQ)
t(W.eU,W.eT)
t(W.hW,W.eU)
t(W.i4,W.eV)
t(W.dg,W.df)
t(W.ih,W.dg)
t(W.eY,W.eX)
t(W.ii,W.eY)
t(W.il,W.f1)
t(W.f5,W.f4)
t(W.ix,W.f5)
t(W.di,W.dh)
t(W.iy,W.di)
t(W.f8,W.f7)
t(W.iH,W.f8)
t(W.bd,W.a6)
t(W.fe,W.fd)
t(W.jj,W.fe)
t(W.ew,W.dF)
t(W.fg,W.ff)
t(W.jx,W.fg)
t(W.fi,W.fh)
t(W.eO,W.fi)
t(W.fk,W.fj)
t(W.jL,W.fk)
t(W.fm,W.fl)
t(W.jM,W.fm)
t(W.jk,W.jh)
t(W.jl,P.io)
t(W.kE,W.jl)
t(W.jm,P.cZ)
t(W.jO,W.eW)
t(P.ai,P.jC)
t(P.eI,P.eH)
t(P.hf,P.eI)
t(P.eS,P.eR)
t(P.hS,P.eS)
t(P.cW,P.p)
t(P.f3,P.f2)
t(P.is,P.f3)
t(P.fa,P.f9)
t(P.iJ,P.fa)
t(P.fw,P.eu)
t(P.hT,P.c0)
t(P.f_,P.eZ)
t(P.ij,P.f_)
s(E.fA,[Z.dv,A.cX,T.ce])
s(D.r,[D.bJ,D.bK,D.y,X.hX,T.dy])
s(X.hX,[X.dT,X.aC,X.cN,X.d4])
s(O.X,[D.dP,U.cI,M.dz])
s(D.fG,[U.fI,U.ab])
s(U.ab,[U.cB,U.cV])
s(A.cX,[A.dW,A.e9,A.ea,A.eh])
s(A.ek,[A.ak,A.iO,A.iP,A.iQ,A.iN,A.a8,A.ay,A.Z,A.bT,A.iS,A.d6,A.ac,A.bc,A.ag])
s(O.bR,[O.dV,O.e8,O.ig,O.eg])
s(O.cL,[O.hp,O.hq,O.b6])
s(O.b6,[O.ht,O.hu])
s(T.ce,[T.d1,T.d2])
t(T.iz,T.d1)
s(V.dU,[V.bk,V.d5])
s(X.d_,[X.fz,X.h7])
u(H.em,H.ci)
u(H.db,P.t)
u(H.dc,H.c3)
u(H.dd,P.t)
u(H.de,H.c3)
u(P.eJ,P.t)
u(W.ev,W.fL)
u(W.ex,P.t)
u(W.ey,W.C)
u(W.ez,P.t)
u(W.eA,W.C)
u(W.eC,P.t)
u(W.eD,W.C)
u(W.eF,P.t)
u(W.eG,W.C)
u(W.eK,P.af)
u(W.eL,P.af)
u(W.eM,P.t)
u(W.eN,W.C)
u(W.eP,P.t)
u(W.eQ,W.C)
u(W.eT,P.t)
u(W.eU,W.C)
u(W.eV,P.af)
u(W.df,P.t)
u(W.dg,W.C)
u(W.eX,P.t)
u(W.eY,W.C)
u(W.f1,P.af)
u(W.f4,P.t)
u(W.f5,W.C)
u(W.dh,P.t)
u(W.di,W.C)
u(W.f7,P.t)
u(W.f8,W.C)
u(W.fd,P.t)
u(W.fe,W.C)
u(W.ff,P.t)
u(W.fg,W.C)
u(W.fh,P.t)
u(W.fi,W.C)
u(W.fj,P.t)
u(W.fk,W.C)
u(W.fl,P.t)
u(W.fm,W.C)
u(P.eH,P.t)
u(P.eI,W.C)
u(P.eR,P.t)
u(P.eS,W.C)
u(P.f2,P.t)
u(P.f3,W.C)
u(P.f9,P.t)
u(P.fa,W.C)
u(P.eu,P.af)
u(P.eZ,P.t)
u(P.f_,W.C)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.bv.prototype
C.A=W.bx.prototype
C.h=W.c2.prototype
C.u=W.by.prototype
C.M=J.a.prototype
C.a=J.b3.prototype
C.k=J.dK.prototype
C.d=J.dL.prototype
C.l=J.dM.prototype
C.c=J.c5.prototype
C.e=J.bL.prototype
C.N=J.bM.prototype
C.S=H.cQ.prototype
C.T=W.cR.prototype
C.w=J.hV.prototype
C.b=P.cc.prototype
C.x=W.ee.prototype
C.o=J.bU.prototype
C.y=W.bd.prototype
C.z=W.d8.prototype
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.B=function() {
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
C.G=function(getTagFallback) {
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
C.C=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.D=function(hooks) {
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
C.F=function(hooks) {
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
C.E=function(hooks) {
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

C.H=new P.hU()
C.t=new P.iX()
C.I=new P.iY()
C.f=new P.jD()
C.v=new A.bA(0,"ColorBlendType.Overwrite")
C.J=new A.bA(1,"ColorBlendType.Additive")
C.K=new A.bA(2,"ColorBlendType.Average")
C.i=new A.bA(3,"ColorBlendType.AlphaBlend")
C.j=new P.bD(0)
C.L=new P.bD(5e6)
C.O=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.l])
C.P=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.l])
C.Q=H.d(u([]),[P.l])
C.R=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.q])
C.m=H.d(u(["bind","if","ref","repeat","syntax"]),[P.l])
C.n=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.l])})()
var v={mangledGlobalNames:{q:"int",A:"double",aa:"num",l:"String",S:"bool",P:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.r]},{func:1,ret:-1,args:[D.r]},{func:1,ret:P.P},{func:1,ret:-1},{func:1,ret:-1,args:[W.a6]},{func:1,ret:P.P,args:[D.r]},{func:1,ret:-1,args:[P.l,,]},{func:1,ret:-1,args:[P.q,[P.c,E.an]]},{func:1,ret:P.P,args:[F.a4]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.q,P.q]},{func:1,ret:-1,args:[W.n]},{func:1,ret:-1,args:[W.aW]},{func:1,ret:-1,args:[P.q,[P.c,D.ae]]},{func:1,args:[,]},{func:1,ret:P.S,args:[P.l]},{func:1,ret:P.S,args:[W.aw]},{func:1,ret:P.P,args:[{func:1,ret:-1,args:[D.r]}]},{func:1,ret:P.P,args:[,]},{func:1,ret:P.P,args:[,,]},{func:1,ret:-1,args:[W.b4]},{func:1,ret:P.l,args:[P.q]},{func:1,ret:P.S,args:[W.O,P.l,P.l,W.bV]},{func:1,ret:P.A},{func:1,ret:-1,args:[P.q,[P.c,U.ab]]},{func:1,ret:P.S,args:[W.D]},{func:1,ret:-1,args:[P.q,[P.c,M.ax]]},{func:1,ret:-1,args:[P.q,[P.c,V.a5]]},{func:1,ret:-1,args:[P.q,[P.c,O.aU]]},{func:1,ret:P.P,args:[W.n]},{func:1,args:[W.n]},{func:1,ret:P.l,args:[P.l]},{func:1,ret:-1,args:[W.D,W.D]},{func:1,ret:W.O,args:[W.D]},{func:1,args:[,P.l]},{func:1,args:[P.l]},{func:1,ret:P.P,args:[,],opt:[P.as]},{func:1,ret:-1,args:[W.bd]},{func:1,ret:P.S,args:[[P.c,D.ae]]},{func:1,ret:P.P,args:[F.az,P.A,P.A]},{func:1,ret:P.P,args:[{func:1,ret:-1}]},{func:1,ret:[P.aJ,,],args:[,]},{func:1,ret:P.q,args:[A.aB,A.aB]},{func:1,ret:P.q,args:[A.aD,A.aD]},{func:1,ret:P.q,args:[A.aF,A.aF]},{func:1,ret:P.P,args:[P.b9]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:P.P,args:[P.aa]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b_=0
$.cy=null
$.kX=null
$.kG=!1
$.lS=null
$.lL=null
$.lY=null
$.k3=null
$.k9=null
$.kO=null
$.cm=null
$.dk=null
$.dl=null
$.kH=!1
$.a_=C.f
$.at=[]
$.bh=null
$.ko=null
$.l3=null
$.l2=null
$.eE=P.l8(P.l,P.bG)
$.hB=null
$.ll=null
$.cS=null
$.cU=null
$.lx=null
$.lz=null
$.iZ=null
$.j_=null
$.j0=null
$.ly=null
$.lk=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oq","m2",function(){return H.lR("_$dart_dartClosure")})
u($,"or","kS",function(){return H.lR("_$dart_js")})
u($,"ov","m3",function(){return H.bb(H.iL({
toString:function(){return"$receiver$"}}))})
u($,"ow","m4",function(){return H.bb(H.iL({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"ox","m5",function(){return H.bb(H.iL(null))})
u($,"oy","m6",function(){return H.bb(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oB","m9",function(){return H.bb(H.iL(void 0))})
u($,"oC","ma",function(){return H.bb(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oA","m8",function(){return H.bb(H.lw(null))})
u($,"oz","m7",function(){return H.bb(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"oE","mc",function(){return H.bb(H.lw(void 0))})
u($,"oD","mb",function(){return H.bb(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"oW","kT",function(){return P.na()})
u($,"oY","mh",function(){return P.mX("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"oX","mg",function(){return P.l9(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.l)})
u($,"oP","mf",function(){return Z.aI(0)})
u($,"oJ","md",function(){return Z.aI(511)})
u($,"oR","aq",function(){return Z.aI(1)})
u($,"oQ","bt",function(){return Z.aI(2)})
u($,"oL","bs",function(){return Z.aI(4)})
u($,"oS","bY",function(){return Z.aI(8)})
u($,"oT","bu",function(){return Z.aI(16)})
u($,"oM","dn",function(){return Z.aI(32)})
u($,"oN","dp",function(){return Z.aI(64)})
u($,"oO","me",function(){return Z.aI(96)})
u($,"oU","cv",function(){return Z.aI(128)})
u($,"oK","br",function(){return Z.aI(256)})
u($,"op","m1",function(){return new V.fY(1e-9)})
u($,"oo","I",function(){return $.m1()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cP,ArrayBufferView:H.cP,Float32Array:H.c8,Float64Array:H.c8,Int16Array:H.hJ,Int32Array:H.hK,Int8Array:H.hL,Uint16Array:H.hM,Uint32Array:H.hN,Uint8ClampedArray:H.cQ,CanvasPixelArray:H.cQ,Uint8Array:H.hO,HTMLAudioElement:W.u,HTMLBRElement:W.u,HTMLContentElement:W.u,HTMLDListElement:W.u,HTMLDataElement:W.u,HTMLDataListElement:W.u,HTMLDetailsElement:W.u,HTMLDialogElement:W.u,HTMLEmbedElement:W.u,HTMLFieldSetElement:W.u,HTMLHRElement:W.u,HTMLHeadElement:W.u,HTMLHeadingElement:W.u,HTMLHtmlElement:W.u,HTMLIFrameElement:W.u,HTMLInputElement:W.u,HTMLLIElement:W.u,HTMLLabelElement:W.u,HTMLLegendElement:W.u,HTMLLinkElement:W.u,HTMLMapElement:W.u,HTMLMediaElement:W.u,HTMLMenuElement:W.u,HTMLMetaElement:W.u,HTMLMeterElement:W.u,HTMLModElement:W.u,HTMLOListElement:W.u,HTMLObjectElement:W.u,HTMLOptGroupElement:W.u,HTMLOptionElement:W.u,HTMLOutputElement:W.u,HTMLParagraphElement:W.u,HTMLParamElement:W.u,HTMLPictureElement:W.u,HTMLPreElement:W.u,HTMLProgressElement:W.u,HTMLQuoteElement:W.u,HTMLScriptElement:W.u,HTMLShadowElement:W.u,HTMLSlotElement:W.u,HTMLSourceElement:W.u,HTMLSpanElement:W.u,HTMLStyleElement:W.u,HTMLTableCaptionElement:W.u,HTMLTableColElement:W.u,HTMLTextAreaElement:W.u,HTMLTimeElement:W.u,HTMLTitleElement:W.u,HTMLTrackElement:W.u,HTMLUListElement:W.u,HTMLUnknownElement:W.u,HTMLVideoElement:W.u,HTMLDirectoryElement:W.u,HTMLFontElement:W.u,HTMLFrameElement:W.u,HTMLFrameSetElement:W.u,HTMLMarqueeElement:W.u,HTMLElement:W.u,AccessibleNodeList:W.fq,HTMLAnchorElement:W.dr,HTMLAreaElement:W.fs,HTMLBaseElement:W.cw,Blob:W.dt,HTMLBodyElement:W.bv,HTMLButtonElement:W.bx,HTMLCanvasElement:W.c2,CanvasRenderingContext2D:W.by,CDATASection:W.bz,CharacterData:W.bz,Comment:W.bz,ProcessingInstruction:W.bz,Text:W.bz,CSSNumericValue:W.cC,CSSUnitValue:W.cC,CSSPerspective:W.fK,CSSCharsetRule:W.U,CSSConditionRule:W.U,CSSFontFaceRule:W.U,CSSGroupingRule:W.U,CSSImportRule:W.U,CSSKeyframeRule:W.U,MozCSSKeyframeRule:W.U,WebKitCSSKeyframeRule:W.U,CSSKeyframesRule:W.U,MozCSSKeyframesRule:W.U,WebKitCSSKeyframesRule:W.U,CSSMediaRule:W.U,CSSNamespaceRule:W.U,CSSPageRule:W.U,CSSRule:W.U,CSSStyleRule:W.U,CSSSupportsRule:W.U,CSSViewportRule:W.U,CSSStyleDeclaration:W.cD,MSStyleCSSProperties:W.cD,CSS2Properties:W.cD,CSSImageValue:W.b0,CSSKeywordValue:W.b0,CSSPositionValue:W.b0,CSSResourceValue:W.b0,CSSURLImageValue:W.b0,CSSStyleValue:W.b0,CSSMatrixComponent:W.b1,CSSRotation:W.b1,CSSScale:W.b1,CSSSkew:W.b1,CSSTranslation:W.b1,CSSTransformComponent:W.b1,CSSTransformValue:W.fM,CSSUnparsedValue:W.fN,DataTransferItemList:W.fP,HTMLDivElement:W.dD,DOMException:W.fQ,ClientRectList:W.dE,DOMRectList:W.dE,DOMRectReadOnly:W.dF,DOMStringList:W.fR,DOMTokenList:W.fS,Element:W.O,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MessagePort:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aM,FileList:W.h0,FileWriter:W.h1,HTMLFormElement:W.h5,Gamepad:W.aN,History:W.h8,HTMLCollection:W.c4,HTMLFormControlsCollection:W.c4,HTMLOptionsCollection:W.c4,ImageData:W.bH,HTMLImageElement:W.cJ,KeyboardEvent:W.b4,Location:W.dS,MediaList:W.hC,MIDIInputMap:W.hD,MIDIOutputMap:W.hF,MimeType:W.aO,MimeTypeArray:W.hH,PointerEvent:W.a6,MouseEvent:W.a6,DragEvent:W.a6,Document:W.D,DocumentFragment:W.D,HTMLDocument:W.D,ShadowRoot:W.D,XMLDocument:W.D,DocumentType:W.D,Node:W.D,NodeList:W.cR,RadioNodeList:W.cR,Plugin:W.aP,PluginArray:W.hW,RTCStatsReport:W.i4,HTMLSelectElement:W.i7,SourceBuffer:W.aQ,SourceBufferList:W.ih,SpeechGrammar:W.aR,SpeechGrammarList:W.ii,SpeechRecognitionResult:W.aS,Storage:W.il,CSSStyleSheet:W.aG,StyleSheet:W.aG,HTMLTableCellElement:W.bn,HTMLTableDataCellElement:W.bn,HTMLTableHeaderCellElement:W.bn,HTMLTableElement:W.ee,HTMLTableRowElement:W.iu,HTMLTableSectionElement:W.iv,HTMLTemplateElement:W.d0,TextTrack:W.aT,TextTrackCue:W.aH,VTTCue:W.aH,TextTrackCueList:W.ix,TextTrackList:W.iy,TimeRanges:W.iE,Touch:W.aV,TouchEvent:W.aW,TouchList:W.iH,TrackDefaultList:W.iI,CompositionEvent:W.bS,FocusEvent:W.bS,TextEvent:W.bS,UIEvent:W.bS,URL:W.iW,VideoTrackList:W.ja,WheelEvent:W.bd,Window:W.d8,DOMWindow:W.d8,Attr:W.d9,CSSRuleList:W.jj,ClientRect:W.ew,DOMRect:W.ew,GamepadList:W.jx,NamedNodeMap:W.eO,MozNamedAttrMap:W.eO,SpeechRecognitionResultList:W.jL,StyleSheetList:W.jM,SVGLength:P.b5,SVGLengthList:P.hf,SVGNumber:P.b8,SVGNumberList:P.hS,SVGPointList:P.hY,SVGScriptElement:P.cW,SVGStringList:P.is,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.ba,SVGTransformList:P.iJ,AudioBuffer:P.fv,AudioParamMap:P.fw,AudioTrackList:P.fy,AudioContext:P.c0,webkitAudioContext:P.c0,BaseAudioContext:P.c0,OfflineAudioContext:P.hT,WebGLBuffer:P.du,WebGLFramebuffer:P.dJ,WebGLProgram:P.e2,WebGLRenderbuffer:P.e5,WebGL2RenderingContext:P.cc,WebGLShader:P.e6,WebGLTexture:P.ef,WebGLUniformLocation:P.el,SQLResultSetRowList:P.ij})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dY.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
H.c8.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
W.df.$nativeSuperclassTag="EventTarget"
W.dg.$nativeSuperclassTag="EventTarget"
W.dh.$nativeSuperclassTag="EventTarget"
W.di.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.lU,[])
else M.lU([])})})()
//# sourceMappingURL=test.dart.js.map
