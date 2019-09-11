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
a[c]=function(){a[c]=function(){H.mV(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jL"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jL"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jL(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={js:function js(){},
li:function(){return new P.hy("No element")},
dz:function(a,b,c,d,e){H.j(a,"$ib",[e],"$ab")
H.l(d,{func:1,ret:P.r,args:[e,e]})
if(c-b<=32)H.lJ(a,b,c,d,e)
else H.lI(a,b,c,d,e)},
lJ:function(a,b,c,d,e){var u,t,s,r,q
H.j(a,"$ib",[e],"$ab")
H.l(d,{func:1,ret:P.r,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.d(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.d(a,r)
r=J.aH(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.d(a,q)
C.a.l(a,s,a[q])
s=q}C.a.l(a,s,t)}},
lI:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.j(a2,"$ib",[a6],"$ab")
H.l(a5,{func:1,ret:P.r,args:[a6,a6]})
u=C.e.a0(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.e.a0(a3+a4,2)
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
if(J.aH(a5.$2(n,m),0)){i=m
m=n
n=i}if(J.aH(a5.$2(k,j),0)){i=j
j=k
k=i}if(J.aH(a5.$2(n,l),0)){i=l
l=n
n=i}if(J.aH(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.aH(a5.$2(n,k),0)){i=k
k=n
n=i}if(J.aH(a5.$2(l,k),0)){i=k
k=l
l=i}if(J.aH(a5.$2(m,j),0)){i=j
j=m
m=i}if(J.aH(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.aH(a5.$2(k,j),0)){i=j
j=k
k=i}C.a.l(a2,t,n)
C.a.l(a2,r,l)
C.a.l(a2,s,j)
if(a3<0||a3>=a2.length)return H.d(a2,a3)
C.a.l(a2,q,a2[a3])
if(a4<0||a4>=a2.length)return H.d(a2,a4)
C.a.l(a2,p,a2[a4])
h=a3+1
g=a4-1
if(J.R(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.a5()
if(d<0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.l(a2,f,a2[h])
C.a.l(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.ay()
if(d>0){--g
continue}else{c=g-1
o=a2.length
if(d<0){if(h>=o)return H.d(a2,h)
C.a.l(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.d(a2,g)
C.a.l(a2,h,a2[g])
C.a.l(a2,g,e)
g=c
h=b
break}else{if(g>=o)return H.d(a2,g)
C.a.l(a2,f,a2[g])
C.a.l(a2,g,e)
g=c
break}}}}a=!0}else{for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
a0=a5.$2(e,m)
if(typeof a0!=="number")return a0.a5()
if(a0<0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.l(a2,f,a2[h])
C.a.l(a2,h,e)}++h}else{a1=a5.$2(e,k)
if(typeof a1!=="number")return a1.ay()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.ay()
if(d>0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.a5()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.d(a2,h)
C.a.l(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.d(a2,g)
C.a.l(a2,h,a2[g])
C.a.l(a2,g,e)
h=b}else{if(g>=o)return H.d(a2,g)
C.a.l(a2,f,a2[g])
C.a.l(a2,g,e)}g=c
break}}}}a=!1}o=h-1
if(o>=a2.length)return H.d(a2,o)
C.a.l(a2,a3,a2[o])
C.a.l(a2,o,m)
o=g+1
if(o<0||o>=a2.length)return H.d(a2,o)
C.a.l(a2,a4,a2[o])
C.a.l(a2,o,k)
H.dz(a2,a3,h-2,a5,a6)
H.dz(a2,g+2,a4,a5,a6)
if(a)return
if(h<t&&g>s){while(!0){if(h>=a2.length)return H.d(a2,h)
if(!J.R(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.d(a2,g)
if(!J.R(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
if(a5.$2(e,m)===0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.l(a2,f,a2[h])
C.a.l(a2,h,e)}++h}else if(a5.$2(e,k)===0)for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
if(a5.$2(a2[g],k)===0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.a5()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.d(a2,h)
C.a.l(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.d(a2,g)
C.a.l(a2,h,a2[g])
C.a.l(a2,g,e)
h=b}else{if(g>=o)return H.d(a2,g)
C.a.l(a2,f,a2[g])
C.a.l(a2,g,e)}g=c
break}}}H.dz(a2,h,g,a5,a6)}else H.dz(a2,h,g,a5,a6)},
a_:function a_(a){this.a=a},
fc:function fc(){},
dh:function dh(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fG:function fG(a,b,c){this.a=a
this.b=b
this.$ti=c},
fH:function fH(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
im:function im(a,b,c){this.a=a
this.b=b
this.$ti=c},
io:function io(a,b,c){this.a=a
this.b=b
this.$ti=c},
bI:function bI(){},
dK:function dK(){},
dJ:function dJ(){},
c4:function(a){var u,t=H.Q(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
mE:function(a){return v.types[H.Y(a)]},
mJ:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.W(a).$iG},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ar(a)
if(typeof u!=="string")throw H.h(H.bg(a))
return u},
ct:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bO:function(a){return H.lt(a)+H.jI(H.bB(a),0,null)},
lt:function(a){var u,t,s,r,q,p,o,n=J.W(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.B||!!n.$ibX){r=C.l(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.c4(t.length>1&&C.c.b4(t,0)===36?C.c.aK(t,1):t)},
kc:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lC:function(a){var u,t,s,r=H.c([],[P.r])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.t)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.bg(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.b7(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.h(H.bg(s))}return H.kc(r)},
kd:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.bg(s))
if(s<0)throw H.h(H.bg(s))
if(s>65535)return H.lC(a)}return H.kc(a)},
lB:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.b7(u,10))>>>0,56320|u&1023)}throw H.h(P.aW(a,0,1114111,null,null))},
bN:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lA:function(a){var u=H.bN(a).getFullYear()+0
return u},
ly:function(a){var u=H.bN(a).getMonth()+1
return u},
lu:function(a){var u=H.bN(a).getDate()+0
return u},
lv:function(a){var u=H.bN(a).getHours()+0
return u},
lx:function(a){var u=H.bN(a).getMinutes()+0
return u},
lz:function(a){var u=H.bN(a).getSeconds()+0
return u},
lw:function(a){var u=H.bN(a).getMilliseconds()+0
return u},
C:function(a){throw H.h(H.bg(a))},
d:function(a,b){if(a==null)J.c7(a)
throw H.h(H.c0(a,b))},
c0:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aI(!0,b,s,null)
u=H.Y(J.c7(a))
if(!(b<0)){if(typeof u!=="number")return H.C(u)
t=b>=u}else t=!0
if(t)return P.U(b,a,s,null,u)
return P.he(b,s)},
mx:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bP(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bP(a,c,!0,b,"end",u)
return new P.aI(!0,b,"end",null)},
bg:function(a){return new P.aI(!0,a,null,null)},
mt:function(a){if(typeof a!=="number")throw H.h(H.bg(a))
return a},
h:function(a){var u
if(a==null)a=new P.dr()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kP})
u.name=""}else u.toString=H.kP
return u},
kP:function(){return J.ar(this.dartException)},
y:function(a){throw H.h(a)},
t:function(a){throw H.h(P.ce(a))},
b2:function(a){var u,t,s,r,q,p
a=H.kN(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.n])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hT(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hU:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
km:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
k7:function(a,b){return new H.h6(a,b==null?null:b.method)},
jt:function(a,b){var u=b==null,t=u?null:b.method
return new H.fw(a,t,u?null:b.receiver)},
bC:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jh(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.b7(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jt(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.k7(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kS()
q=$.kT()
p=$.kU()
o=$.kV()
n=$.kY()
m=$.kZ()
l=$.kX()
$.kW()
k=$.l0()
j=$.l_()
i=r.a8(u)
if(i!=null)return f.$1(H.jt(H.Q(u),i))
else{i=q.a8(u)
if(i!=null){i.method="call"
return f.$1(H.jt(H.Q(u),i))}else{i=p.a8(u)
if(i==null){i=o.a8(u)
if(i==null){i=n.a8(u)
if(i==null){i=m.a8(u)
if(i==null){i=l.a8(u)
if(i==null){i=o.a8(u)
if(i==null){i=k.a8(u)
if(i==null){i=j.a8(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.k7(H.Q(u),i))}}return f.$1(new H.i3(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dB()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aI(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dB()
return a},
c2:function(a){var u
if(a==null)return new H.en(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.en(a)},
mA:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.l(0,a[u],a[t])}return b},
mI:function(a,b,c,d,e,f){H.k(a,"$ijn")
switch(H.Y(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.x("Unsupported number of arguments for wrapped closure"))},
c_:function(a,b){var u
H.Y(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mI)
a.$identity=u
return u},
lc:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hz().constructor.prototype):Object.create(new H.c8(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aJ
if(typeof t!=="number")return t.B()
$.aJ=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.jZ(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.mE,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.jY:H.jk
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.h("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.jZ(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
l9:function(a,b,c,d){var u=H.jk
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jZ:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lb(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.l9(t,!r,u,b)
if(t===0){r=$.aJ
if(typeof r!=="number")return r.B()
$.aJ=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c9
return new Function(r+H.i(q==null?$.c9=H.eW("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aJ
if(typeof r!=="number")return r.B()
$.aJ=r+1
o+=r
r="return function("+o+"){return this."
q=$.c9
return new Function(r+H.i(q==null?$.c9=H.eW("self"):q)+"."+H.i(u)+"("+o+");}")()},
la:function(a,b,c,d){var u=H.jk,t=H.jY
switch(b?-1:a){case 0:throw H.h(H.lG("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lb:function(a,b){var u,t,s,r,q,p,o,n=$.c9
if(n==null)n=$.c9=H.eW("self")
u=$.jX
if(u==null)u=$.jX=H.eW("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.la(s,!q,t,b)
if(s===1){n="return function(){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+");"
u=$.aJ
if(typeof u!=="number")return u.B()
$.aJ=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+", "+o+");"
u=$.aJ
if(typeof u!=="number")return u.B()
$.aJ=u+1
return new Function(n+u+"}")()},
jL:function(a,b,c,d,e,f,g){return H.lc(a,b,H.Y(c),d,!!e,!!f,g)},
jk:function(a){return a.a},
jY:function(a){return a.c},
eW:function(a){var u,t,s,r=new H.c8("self","target","receiver","name"),q=J.jq(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
z:function(a){if(a==null)H.mp("boolean expression must not be null")
return a},
Q:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aF(a,"String"))},
nx:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aF(a,"double"))},
kJ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aF(a,"num"))},
kD:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aF(a,"bool"))},
Y:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aF(a,"int"))},
kL:function(a,b){throw H.h(H.aF(a,H.c4(H.Q(b).substring(2))))},
mP:function(a,b){throw H.h(H.l8(a,H.c4(H.Q(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.W(a)[b])return a
H.kL(a,b)},
p:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.W(a)[b]
else u=!0
if(u)return a
H.mP(a,b)},
jQ:function(a){if(a==null)return a
if(!!J.W(a).$ib)return a
throw H.h(H.aF(a,"List<dynamic>"))},
mK:function(a,b){var u
if(a==null)return a
u=J.W(a)
if(!!u.$ib)return a
if(u[b])return a
H.kL(a,b)},
kE:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.Y(u)]
else return a.$S()}return},
eJ:function(a,b){var u
if(typeof a=="function")return!0
u=H.kE(J.W(a))
if(u==null)return!1
return H.ku(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.jF)return a
$.jF=!0
try{if(H.eJ(a,b))return a
u=H.je(b)
t=H.aF(a,u)
throw H.h(t)}finally{$.jF=!1}},
jM:function(a,b){if(a!=null&&!H.jK(a,b))H.y(H.aF(a,H.je(b)))
return a},
aF:function(a,b){return new H.hV("TypeError: "+P.d8(a)+": type '"+H.ky(a)+"' is not a subtype of type '"+b+"'")},
l8:function(a,b){return new H.eX("CastError: "+P.d8(a)+": type '"+H.ky(a)+"' is not a subtype of type '"+b+"'")},
ky:function(a){var u,t=J.W(a)
if(!!t.$icc){u=H.kE(t)
if(u!=null)return H.je(u)
return"Closure"}return H.bO(a)},
mp:function(a){throw H.h(new H.ip(a))},
mV:function(a){throw H.h(new P.f5(H.Q(a)))},
lG:function(a){return new H.hm(a)},
kF:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bB:function(a){if(a==null)return
return a.$ti},
ny:function(a,b,c){return H.c3(a["$a"+H.i(c)],H.bB(b))},
cT:function(a,b,c,d){var u
H.Q(c)
H.Y(d)
u=H.c3(a["$a"+H.i(c)],H.bB(b))
return u==null?null:u[d]},
aq:function(a,b,c){var u
H.Q(b)
H.Y(c)
u=H.c3(a["$a"+H.i(b)],H.bB(a))
return u==null?null:u[c]},
w:function(a,b){var u
H.Y(b)
u=H.bB(a)
return u==null?null:u[b]},
je:function(a){return H.bA(a,null)},
bA:function(a,b){var u,t
H.j(b,"$ib",[P.n],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c4(a[0].name)+H.jI(a,1,b)
if(typeof a=="function")return H.c4(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Y(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.i(b[t])}if('func' in a)return H.lZ(a,b)
if('futureOr' in a)return"FutureOr<"+H.bA("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lZ:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.n]
H.j(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.d(a0,n)
p=C.c.B(p,a0[n])
m=u[q]
if(m!=null&&m!==P.M)p+=" extends "+H.bA(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bA(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bA(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bA(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.mz(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.Q(b[h])
j=j+i+H.bA(e[d],a0)+(" "+H.i(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
jI:function(a,b,c){var u,t,s,r,q,p
H.j(c,"$ib",[P.n],"$ab")
if(a==null)return""
u=new P.bw("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bA(p,c)}return"<"+u.i(0)+">"},
c3:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
jJ:function(a,b,c,d){var u,t
H.Q(b)
H.jQ(c)
H.Q(d)
if(a==null)return!1
u=H.bB(a)
t=J.W(a)
if(t[b]==null)return!1
return H.kB(H.c3(t[d],u),null,c,null)},
j:function(a,b,c,d){H.Q(b)
H.jQ(c)
H.Q(d)
if(a==null)return a
if(H.jJ(a,b,c,d))return a
throw H.h(H.aF(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c4(b.substring(2))+H.jI(c,0,null),v.mangledGlobalNames)))},
kB:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aA(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aA(a[t],b,c[t],d))return!1
return!0},
nv:function(a,b,c){return a.apply(b,H.c3(J.W(b)["$a"+H.i(c)],H.bB(b)))},
kH:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="M"||a.name==="K"||a===-1||a===-2||H.kH(u)}return!1},
jK:function(a,b){var u,t
if(a==null)return b==null||b.name==="M"||b.name==="K"||b===-1||b===-2||H.kH(b)
if(b==null||b===-1||b.name==="M"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jK(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eJ(a,b)}u=J.W(a).constructor
t=H.bB(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aA(u,null,b,null)},
D:function(a,b){if(a!=null&&!H.jK(a,b))throw H.h(H.aF(a,H.je(b)))
return a},
aA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="M"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="M"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aA(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="K")return!0
if('func' in c)return H.ku(a,b,c,d)
if('func' in a)return c.name==="jn"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aA("type" in a?a.type:l,b,s,d)
else if(H.aA(a,b,s,d))return!0
else{if(!('$i'+"cj" in t.prototype))return!1
r=t.prototype["$a"+"cj"]
q=H.c3(r,u?a.slice(1):l)
return H.aA(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.kB(H.c3(m,u),b,p,d)},
ku:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aA(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aA(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aA(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aA(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.mN(h,b,g,d)},
mN:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aA(c[s],d,a[s],b))return!1}return!0},
nw:function(a,b,c){Object.defineProperty(a,H.Q(b),{value:c,enumerable:false,writable:true,configurable:true})},
mL:function(a){var u,t,s,r,q=H.Q($.kG.$1(a)),p=$.j7[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jc[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.Q($.kA.$2(a,q))
if(q!=null){p=$.j7[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jc[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jd(u)
$.j7[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jc[q]=u
return u}if(s==="-"){r=H.jd(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kK(a,u)
if(s==="*")throw H.h(P.kn(q))
if(v.leafTags[q]===true){r=H.jd(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kK(a,u)},
kK:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jR(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jd:function(a){return J.jR(a,!1,null,!!a.$iG)},
mM:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jd(u)
else return J.jR(u,c,null,null)},
mG:function(){if(!0===$.jP)return
$.jP=!0
H.mH()},
mH:function(){var u,t,s,r,q,p,o,n
$.j7=Object.create(null)
$.jc=Object.create(null)
H.mF()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kM.$1(q)
if(p!=null){o=H.mM(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mF:function(){var u,t,s,r,q,p,o=C.r()
o=H.bZ(C.t,H.bZ(C.u,H.bZ(C.m,H.bZ(C.m,H.bZ(C.v,H.bZ(C.w,H.bZ(C.x(C.l),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kG=new H.j9(r)
$.kA=new H.ja(q)
$.kM=new H.jb(p)},
bZ:function(a,b){return a(b)||b},
lk:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.h(new P.fo("Illegal RegExp pattern ("+String(r)+")",a))},
mS:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
my:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kN:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kO:function(a,b,c){var u=H.mT(a,b,c)
return u},
mT:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kN(b),'g'),H.my(c))},
hT:function hT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h6:function h6(a,b){this.a=a
this.b=b},
fw:function fw(a,b,c){this.a=a
this.b=b
this.c=c},
i3:function i3(a){this.a=a},
jh:function jh(a){this.a=a},
en:function en(a){this.a=a
this.b=null},
cc:function cc(){},
hH:function hH(){},
hz:function hz(){},
c8:function c8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hV:function hV(a){this.a=a},
eX:function eX(a){this.a=a},
hm:function hm(a){this.a=a},
ip:function ip(a){this.a=a},
X:function X(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fz:function fz(a,b){this.a=a
this.b=b
this.c=null},
dg:function dg(a,b){this.a=a
this.$ti=b},
fA:function fA(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
j9:function j9(a){this.a=a},
ja:function ja(a){this.a=a},
jb:function jb(a){this.a=a},
fv:function fv(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cQ:function(a){return a},
bz:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.c0(b,a))},
lY:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.mx(a,b,c))
return b},
cq:function cq(){},
dn:function dn(){},
cp:function cp(){},
dp:function dp(){},
h0:function h0(){},
h1:function h1(){},
h2:function h2(){},
h3:function h3(){},
h4:function h4(){},
dq:function dq(){},
h5:function h5(){},
cH:function cH(){},
cI:function cI(){},
cJ:function cJ(){},
cK:function cK(){},
mz:function(a){return J.k1(a?Object.keys(a):[],null)},
mO:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jR:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
j8:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jP==null){H.mG()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.kn("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jU()]
if(r!=null)return r
r=H.mL(a)
if(r!=null)return r
if(typeof a=="function")return C.D
u=Object.getPrototypeOf(a)
if(u==null)return C.o
if(u===Object.prototype)return C.o
if(typeof s=="function"){Object.defineProperty(s,$.jU(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
lj:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.jj(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.aW(a,0,4294967295,"length",null))
return J.k1(new Array(a),b)},
k1:function(a,b){return J.jq(H.c(a,[b]))},
jq:function(a){H.jQ(a)
a.fixed$length=Array
return a},
W:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.db.prototype
return J.da.prototype}if(typeof a=="string")return J.bL.prototype
if(a==null)return J.dc.prototype
if(typeof a=="boolean")return J.fu.prototype
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.M)return a
return J.j8(a)},
jN:function(a){if(typeof a=="string")return J.bL.prototype
if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.M)return a
return J.j8(a)},
jO:function(a){if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.M)return a
return J.j8(a)},
mB:function(a){if(typeof a=="number")return J.bK.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bX.prototype
return a},
mC:function(a){if(typeof a=="number")return J.bK.prototype
if(typeof a=="string")return J.bL.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bX.prototype
return a},
mD:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.M)return a
return J.j8(a)},
R:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.W(a).n(a,b)},
aH:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.mB(a).ay(a,b)},
eK:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mJ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jN(a).j(a,b)},
l5:function(a,b,c,d){return J.mD(a).h1(a,b,c,d)},
ji:function(a,b){return J.mC(a).ha(a,b)},
jW:function(a,b){return J.jO(a).C(a,b)},
l6:function(a,b){return J.jO(a).G(a,b)},
bE:function(a){return J.W(a).gF(a)},
c6:function(a){return J.jO(a).gX(a)},
c7:function(a){return J.jN(a).gk(a)},
ar:function(a){return J.W(a).i(a)},
a:function a(){},
fu:function fu(){},
dc:function dc(){},
dd:function dd(){},
ha:function ha(){},
bX:function bX(){},
bt:function bt(){},
aQ:function aQ(a){this.$ti=a},
jr:function jr(a){this.$ti=a},
af:function af(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bK:function bK(){},
db:function db(){},
da:function da(){},
bL:function bL(){}},P={
lP:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mq()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c_(new P.ir(s),1)).observe(u,{childList:true})
return new P.iq(s,u,t)}else if(self.setImmediate!=null)return P.mr()
return P.ms()},
lQ:function(a){self.scheduleImmediate(H.c_(new P.is(H.l(a,{func:1,ret:-1})),0))},
lR:function(a){self.setImmediate(H.c_(new P.it(H.l(a,{func:1,ret:-1})),0))},
lS:function(a){P.jz(C.i,H.l(a,{func:1,ret:-1}))},
jz:function(a,b){var u
H.l(b,{func:1,ret:-1})
u=C.e.a0(a.a,1000)
return P.lV(u<0?0:u,b)},
kl:function(a,b){var u
H.l(b,{func:1,ret:-1,args:[P.b0]})
u=C.e.a0(a.a,1000)
return P.lW(u<0?0:u,b)},
lV:function(a,b){var u=new P.et()
u.e0(a,b)
return u},
lW:function(a,b){var u=new P.et()
u.e1(a,b)
return u},
lT:function(a,b){var u,t,s
b.a=1
try{a.dC(new P.iB(b),new P.iC(b),null)}catch(s){u=H.bC(s)
t=H.c2(s)
P.mQ(new P.iD(b,u,t))}},
kr:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iaz")
if(u>=4){t=b.bD()
b.a=a.a
b.c=a.c
P.cF(b,t)}else{t=H.k(b.c,"$ib4")
b.a=2
b.c=a
a.cL(t)}},
cF:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iag")
g=g.b
r=s.a
q=s.b
g.toString
P.j3(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cF(h.a,b)}g=h.a
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
if(m){H.k(o,"$iag")
g=g.b
r=o.a
q=o.b
g.toString
P.j3(i,i,g,r,q)
return}l=$.V
if(l!=n)$.V=n
else l=i
g=b.c
if(g===8)new P.iH(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.iG(u,b,o).$0()}else if((g&2)!==0)new P.iF(h,u,b).$0()
if(l!=null)$.V=l
g=u.b
if(!!J.W(g).$icj){if(g.a>=4){k=H.k(q.c,"$ib4")
q.c=null
b=q.b6(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.kr(g,q)
return}}j=b.b
k=H.k(j.c,"$ib4")
j.c=null
b=j.b6(k)
g=u.a
r=u.b
if(!g){H.D(r,H.w(j,0))
j.a=4
j.c=r}else{H.k(r,"$iag")
j.a=8
j.c=r}h.a=j
g=j}},
ml:function(a,b){if(H.eJ(a,{func:1,args:[P.M,P.ak]}))return H.l(a,{func:1,ret:null,args:[P.M,P.ak]})
if(H.eJ(a,{func:1,args:[P.M]}))return H.l(a,{func:1,ret:null,args:[P.M]})
throw H.h(P.jj(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mk:function(){var u,t
for(;u=$.bY,u!=null;){$.cS=null
t=u.b
$.bY=t
if(t==null)$.cR=null
u.a.$0()}},
mo:function(){$.jG=!0
try{P.mk()}finally{$.cS=null
$.jG=!1
if($.bY!=null)$.jV().$1(P.kC())}},
kx:function(a){var u=new P.dS(H.l(a,{func:1,ret:-1}))
if($.bY==null){$.bY=$.cR=u
if(!$.jG)$.jV().$1(P.kC())}else $.cR=$.cR.b=u},
mn:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
u=$.bY
if(u==null){P.kx(a)
$.cS=$.cR
return}t=new P.dS(a)
s=$.cS
if(s==null){t.b=u
$.bY=$.cS=t}else{t.b=s.b
$.cS=s.b=t
if(t.b==null)$.cR=t}},
mQ:function(a){var u,t=null,s={func:1,ret:-1}
H.l(a,s)
u=$.V
if(C.f===u){P.j5(t,t,C.f,a)
return}u.toString
P.j5(t,t,u,H.l(u.bH(a),s))},
kk:function(a,b){var u,t={func:1,ret:-1}
H.l(b,t)
u=$.V
if(u===C.f){u.toString
return P.jz(a,b)}return P.jz(a,H.l(u.bH(b),t))},
lM:function(a,b){var u,t,s={func:1,ret:-1,args:[P.b0]}
H.l(b,s)
u=$.V
if(u===C.f){u.toString
return P.kl(a,b)}t=u.cV(b,P.b0)
$.V.toString
return P.kl(a,H.l(t,s))},
j3:function(a,b,c,d,e){var u={}
u.a=d
P.mn(new P.j4(u,e))},
kv:function(a,b,c,d,e){var u,t
H.l(d,{func:1,ret:e})
t=$.V
if(t===c)return d.$0()
$.V=c
u=t
try{t=d.$0()
return t}finally{$.V=u}},
kw:function(a,b,c,d,e,f,g){var u,t
H.l(d,{func:1,ret:f,args:[g]})
H.D(e,g)
t=$.V
if(t===c)return d.$1(e)
$.V=c
u=t
try{t=d.$1(e)
return t}finally{$.V=u}},
mm:function(a,b,c,d,e,f,g,h,i){var u,t
H.l(d,{func:1,ret:g,args:[h,i]})
H.D(e,h)
H.D(f,i)
t=$.V
if(t===c)return d.$2(e,f)
$.V=c
u=t
try{t=d.$2(e,f)
return t}finally{$.V=u}},
j5:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bH(d):c.h8(d,-1)
P.kx(d)},
ir:function ir(a){this.a=a},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
is:function is(a){this.a=a},
it:function it(a){this.a=a},
et:function et(){this.c=0},
iX:function iX(a,b){this.a=a
this.b=b},
iW:function iW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b4:function b4(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
az:function az(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
iA:function iA(a,b){this.a=a
this.b=b},
iE:function iE(a,b){this.a=a
this.b=b},
iB:function iB(a){this.a=a},
iC:function iC(a){this.a=a},
iD:function iD(a,b,c){this.a=a
this.b=b
this.c=c},
iH:function iH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iI:function iI(a){this.a=a},
iG:function iG(a,b,c){this.a=a
this.b=b
this.c=c},
iF:function iF(a,b,c){this.a=a
this.b=b
this.c=c},
dS:function dS(a){this.a=a
this.b=null},
hC:function hC(){},
hE:function hE(a,b){this.a=a
this.b=b},
hF:function hF(a,b){this.a=a
this.b=b},
cx:function cx(){},
hD:function hD(){},
b0:function b0(){},
ag:function ag(a,b){this.a=a
this.b=b},
iZ:function iZ(){},
j4:function j4(a,b){this.a=a
this.b=b},
iP:function iP(){},
iR:function iR(a,b,c){this.a=a
this.b=b
this.c=c},
iQ:function iQ(a,b){this.a=a
this.b=b},
iS:function iS(a,b,c){this.a=a
this.b=b
this.c=c},
lm:function(a,b){return new H.X([a,b])},
ln:function(a){return H.mA(a,new H.X([null,null]))},
lo:function(a){return new P.iM([a])},
jE:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kt:function(a,b,c){var u=new P.iN(a,b,[c])
u.c=a.e
return u},
lh:function(a,b,c){var u,t
if(P.jH(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.n])
C.a.h($.an,a)
try{P.m_(a,u)}finally{if(0>=$.an.length)return H.d($.an,-1)
$.an.pop()}t=P.ki(b,H.mK(u,"$ie"),", ")+c
return t.charCodeAt(0)==0?t:t},
jp:function(a,b,c){var u,t
if(P.jH(a))return b+"..."+c
u=new P.bw(b)
C.a.h($.an,a)
try{t=u
t.a=P.ki(t.a,a,", ")}finally{if(0>=$.an.length)return H.d($.an,-1)
$.an.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jH:function(a){var u,t
for(u=$.an.length,t=0;t<u;++t)if(a===$.an[t])return!0
return!1},
m_:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.j(b,"$ib",[P.n],"$ab")
u=a.gX(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.A())return
r=H.i(u.gP(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.A()){if(s<=5)return
if(0>=b.length)return H.d(b,-1)
q=b.pop()
if(0>=b.length)return H.d(b,-1)
p=b.pop()}else{o=u.gP(u);++s
if(!u.A()){if(s<=4){C.a.h(b,H.i(o))
return}q=H.i(o)
if(0>=b.length)return H.d(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gP(u);++s
for(;u.A();o=n,n=m){m=u.gP(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.i(o)
q=H.i(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
k3:function(a){var u,t={}
if(P.jH(a))return"{...}"
u=new P.bw("")
try{C.a.h($.an,a)
u.a+="{"
t.a=!0
J.l6(a,new P.fF(t,u))
u.a+="}"}finally{if(0>=$.an.length)return H.d($.an,-1)
$.an.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iM:function iM(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cG:function cG(a){this.a=a
this.c=this.b=null},
iN:function iN(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fB:function fB(){},
u:function u(){},
fE:function fE(){},
fF:function fF(a,b){this.a=a
this.b=b},
ad:function ad(){},
iT:function iT(){},
e6:function e6(){},
cd:function cd(){},
d1:function d1(){},
fd:function fd(){},
i6:function i6(){},
i7:function i7(){},
iY:function iY(a){this.b=0
this.c=a},
lg:function(a){if(a instanceof H.cc)return a.i(0)
return"Instance of '"+H.bO(a)+"'"},
lp:function(a,b,c){var u,t
H.D(b,c)
u=J.lj(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.l(u,t,b)
return H.j(u,"$ib",[c],"$ab")},
k2:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.c6(a);u.A();)C.a.h(s,H.D(u.gP(u),c))
if(b)return s
return H.j(J.jq(s),"$ib",t,"$ab")},
jy:function(a){var u,t,s=P.r
H.j(a,"$ie",[s],"$ae")
if(a.constructor===Array){H.j(a,"$iaQ",[s],"$aaQ")
u=a.length
t=P.kf(0,null,u)
return H.kd(t<u?C.a.dL(a,0,t):a)}return P.lK(a,0,null)},
lK:function(a,b,c){var u,t,s
H.j(a,"$ie",[P.r],"$ae")
u=J.c6(a)
for(t=0;t<b;++t)if(!u.A())throw H.h(P.aW(b,0,t,null,null))
s=[]
for(;u.A();)s.push(u.gP(u))
return H.kd(s)},
lD:function(a){return new H.fv(a,H.lk(a,!1,!0,!1))},
ki:function(a,b,c){var u=J.c6(b)
if(!u.A())return a
if(c.length===0){do a+=H.i(u.gP(u))
while(u.A())}else{a+=H.i(u.gP(u))
for(;u.A();)a=a+c+H.i(u.gP(u))}return a},
lX:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.j(a,"$ib",[P.r],"$ab")
if(c===C.n){u=$.l4().b
u=u.test(b)}else u=!1
if(u)return b
t=C.z.hb(H.D(b,H.aq(c,"cd",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.lB(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
ld:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
le:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d3:function(a){if(a>=10)return""+a
return"0"+a},
k0:function(a,b){return new P.bn(1e6*b+1000*a)},
d8:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ar(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lg(a)},
l7:function(a){return new P.aI(!1,null,null,a)},
jj:function(a,b,c){return new P.aI(!0,a,b,c)},
he:function(a,b){return new P.bP(null,null,!0,a,b,"Value not in range")},
aW:function(a,b,c,d,e){return new P.bP(b,c,!0,a,d,"Invalid value")},
kf:function(a,b,c){if(0>a||a>c)throw H.h(P.aW(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.h(P.aW(b,a,c,"end",null))
return b}return c},
ke:function(a,b){if(typeof a!=="number")return a.a5()
if(a<0)throw H.h(P.aW(a,0,null,b,null))},
U:function(a,b,c,d,e){var u=H.Y(e==null?J.c7(b):e)
return new P.ft(u,!0,a,c,"Index out of range")},
am:function(a){return new P.i4(a)},
kn:function(a){return new P.i2(a)},
ce:function(a){return new P.f0(a)},
x:function(a){return new P.e_(a)},
jT:function(a){H.mO(a)},
a5:function a5(){},
at:function at(a,b){this.a=a
this.b=b},
A:function A(){},
bn:function bn(a){this.a=a},
fa:function fa(){},
fb:function fb(){},
bo:function bo(){},
eP:function eP(){},
dr:function dr(){},
aI:function aI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bP:function bP(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ft:function ft(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
i4:function i4(a){this.a=a},
i2:function i2(a){this.a=a},
hy:function hy(a){this.a=a},
f0:function f0(a){this.a=a},
h9:function h9(){},
dB:function dB(){},
f5:function f5(a){this.a=a},
e_:function e_(a){this.a=a},
fo:function fo(a,b){this.a=a
this.b=b},
r:function r(){},
e:function e(){},
aP:function aP(){},
b:function b(){},
F:function F(){},
K:function K(){},
a9:function a9(){},
M:function M(){},
ak:function ak(){},
n:function n(){},
bw:function bw(a){this.a=a},
mw:function(a){var u,t=J.W(a)
if(!!t.$ibp){u=t.gd0(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ey(a.data,a.height,a.width)},
mv:function(a){if(a instanceof P.ey)return{data:a.a,height:a.b,width:a.c}
return a},
bh:function(a){var u,t,s,r,q
if(a==null)return
u=P.lm(P.n,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.t)(t),++r){q=H.Q(t[r])
u.l(0,q,a[q])}return u},
mu:function(a){var u={}
a.G(0,new P.j6(u))
return u},
ey:function ey(a,b,c){this.a=a
this.b=b
this.c=c},
j6:function j6(a){this.a=a},
fk:function fk(a,b){this.a=a
this.b=b},
fl:function fl(){},
fm:function fm(){},
iL:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lU:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iO:function iO(){},
aj:function aj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b6:function b6(){},
fy:function fy(){},
bb:function bb(){},
h7:function h7(){},
hd:function hd(){},
hG:function hG(){},
o:function o(){},
be:function be(){},
hS:function hS(){},
e4:function e4(){},
e5:function e5(){},
ee:function ee(){},
ef:function ef(){},
ep:function ep(){},
eq:function eq(){},
ew:function ew(){},
ex:function ex(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(a){this.a=a},
eU:function eU(){},
bF:function bF(){},
h8:function h8(){},
dT:function dT(){},
cY:function cY(){},
du:function du(){},
bQ:function bQ(){},
dv:function dv(){},
dD:function dD(){},
dI:function dI(){},
hx:function hx(){},
el:function el(){},
em:function em(){}},W={
jl:function(){var u=document.createElement("canvas")
return u},
lf:function(a){H.k(a,"$if")
return"wheel"},
iK:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ks:function(a,b,c,d){var u=W.iK(W.iK(W.iK(W.iK(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a8:function(a,b,c,d,e){var u=W.kz(new W.iz(c),W.m)
if(u!=null&&!0)J.l5(a,b,u,!1)
return new W.iy(a,b,u,!1,[e])},
kz:function(a,b){var u
H.l(a,{func:1,ret:-1,args:[b]})
u=$.V
if(u===C.f)return a
return u.cV(a,b)},
q:function q(){},
eL:function eL(){},
eN:function eN(){},
eO:function eO(){},
cX:function cX(){},
bH:function bH(){},
cb:function cb(){},
bm:function bm(){},
cg:function cg(){},
f1:function f1(){},
N:function N(){},
ch:function ch(){},
f2:function f2(){},
aK:function aK(){},
aL:function aL(){},
f3:function f3(){},
f4:function f4(){},
f6:function f6(){},
d4:function d4(){},
f7:function f7(){},
d5:function d5(){},
d6:function d6(){},
f8:function f8(){},
f9:function f9(){},
iv:function iv(a,b){this.a=a
this.b=b},
a0:function a0(){},
m:function m(){},
f:function f(){},
aN:function aN(){},
fi:function fi(){},
fj:function fj(){},
fn:function fn(){},
aO:function aO(){},
fr:function fr(){},
bJ:function bJ(){},
bp:function bp(){},
cl:function cl(){},
aR:function aR(){},
fC:function fC(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(a){this.a=a},
fX:function fX(){},
fY:function fY(a){this.a=a},
aU:function aU(){},
fZ:function fZ(){},
aa:function aa(){},
iu:function iu(a){this.a=a},
H:function H(){},
cr:function cr(){},
aV:function aV(){},
hb:function hb(){},
hk:function hk(){},
hl:function hl(a){this.a=a},
hn:function hn(){},
aX:function aX(){},
hv:function hv(){},
aY:function aY(){},
hw:function hw(){},
aZ:function aZ(){},
hA:function hA(){},
hB:function hB(a){this.a=a},
aC:function aC(){},
b_:function b_(){},
aD:function aD(){},
hI:function hI(){},
hJ:function hJ(){},
hN:function hN(){},
b1:function b1(){},
aE:function aE(){},
hQ:function hQ(){},
hR:function hR(){},
by:function by(){},
i5:function i5(){},
il:function il(){},
b3:function b3(){},
cE:function cE(){},
iw:function iw(){},
dV:function dV(){},
iJ:function iJ(){},
eb:function eb(){},
iU:function iU(){},
iV:function iV(){},
ix:function ix(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jD:function jD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iy:function iy(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iz:function iz(a){this.a=a},
B:function B(){},
d9:function d9(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
dU:function dU(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
ec:function ec(){},
ed:function ed(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
cL:function cL(){},
cM:function cM(){},
ej:function ej(){},
ek:function ek(){},
eo:function eo(){},
er:function er(){},
es:function es(){},
cN:function cN(){},
cO:function cO(){},
eu:function eu(){},
ev:function ev(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){}},O={
eZ:function(a){var u=new O.T([a])
u.bi(a)
return u},
T:function T(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cn:function cn(){this.b=this.a=null},
dk:function dk(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fO:function fO(a,b){this.a=a
this.b=b},
fP:function fP(){},
fQ:function fQ(a,b){this.a=a
this.b=b},
fR:function fR(){},
fS:function fS(a,b){this.a=a
this.b=b},
fT:function fT(){},
fI:function fI(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cm:function cm(){},
fJ:function fJ(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aS:function aS(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fL:function fL(){var _=this
_.e=_.d=_.c=_.b=null},
fM:function fM(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fN:function fN(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dx:function dx(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bx:function bx(){}},E={
fe:function(a){var u=new E.ah()
u.a=""
u.b=!0
u.sdU(0,O.eZ(E.ah))
u.y.aI(u.ghx(),u.ghA())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.scd(0,a)
u.sdn(null)
return u},
lF:function(a,b){var u=new E.hg(a)
u.dR(a,b)
return u},
lL:function(a,b,c,d,e){var u,t,s=J.W(a)
if(!!s.$ibH)return E.kj(a,!0,!0,!0,!1)
u=W.jl()
t=u.style
t.width="100%"
t.height="100%"
s.gcY(a).h(0,u)
return E.kj(u,!0,!0,!0,!1)},
kj:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dE(),j=H.k(C.h.ca(a,"webgl2",P.ln(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibQ")
if(j==null)H.y(P.x("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.lF(j,a)
u=new T.hK(j)
H.Y(j.getParameter(3379))
u.c=H.Y(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.dL(a)
t=new X.fx()
t.c=new X.ao(!1,!1,!1)
t.sfz(P.lo(P.r))
u.b=t
t=new X.h_(u)
t.f=0
t.r=V.bc()
t.x=V.bc()
t.ch=t.Q=1
u.c=t
t=new X.fD(u)
t.r=0
t.x=V.bc()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hP(u)
t.f=V.bc()
t.r=V.bc()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sek(H.c([],[[P.cx,P.M]]))
t=u.z
s=document
r=W.aa
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a8(s,"contextmenu",H.l(u.geR(),q),!1,r))
t=u.z
p=W.m
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a8(a,"focus",H.l(u.geX(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a8(a,"blur",H.l(u.geL(),o),!1,p))
t=u.z
n=W.aR
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a8(s,"keyup",H.l(u.gf0(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a8(s,"keydown",H.l(u.geZ(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a8(a,"mousedown",H.l(u.gf4(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a8(a,"mouseup",H.l(u.gf8(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a8(a,l,H.l(u.gf6(),q),!1,r))
n=u.z
m=W.b3;(n&&C.a).h(n,W.a8(a,H.Q(W.lf(a)),H.l(u.gfa(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a8(s,l,H.l(u.geT(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a8(s,"mouseup",H.l(u.geV(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a8(s,"pointerlockchange",H.l(u.gfc(),o),!1,p))
p=u.z
o=W.aE
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a8(a,"touchstart",H.l(u.gfq(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a8(a,"touchend",H.l(u.gfm(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a8(a,"touchmove",H.l(u.gfo(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.at(Date.now(),!1)
k.cy=0
k.cN()
return k},
eV:function eV(){},
ah:function ah(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hg:function hg(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hh:function hh(a){this.a=a},
hi:function hi(a){this.a=a},
hj:function hj(a){this.a=a},
dE:function dE(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hM:function hM(a){this.a=a}},Z={
jC:function(a,b,c){var u
H.j(c,"$ib",[P.r],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cQ(c)),35044)
a.bindBuffer(b,null)
return new Z.dQ(b,u)},
ay:function(a){return new Z.bf(a)},
dQ:function dQ(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dR:function dR(a){this.a=a},
ca:function ca(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bq:function bq(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a){this.a=a}},D={
J:function(){var u=new D.aM()
u.sY(null)
u.sag(null)
u.c=null
u.d=0
return u},
eY:function eY(){},
aM:function aM(){var _=this
_.d=_.c=_.b=_.a=null},
fg:function fg(a){this.a=a},
fh:function fh(a){this.a=a},
v:function v(){this.b=null},
br:function br(a){this.b=null
this.$ti=a},
bs:function bs(a){this.b=null
this.$ti=a},
E:function E(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
k_:function(a,b){var u,t,s=new D.b5()
s.c=new V.Z(1,1,1)
s.a=V.lO()
s.d=V.jB()
s.e=V.lN()
u=s.b
s.b=b
b.gm().h(0,s.gdV())
t=new D.E("mover",u,s.b,[U.a2])
t.b=!0
s.aj(t)
if(!s.c.n(0,a)){u=s.c
s.c=a
t=new D.E("color",u,a,[V.Z])
t.b=!0
s.aj(t)}return s},
b5:function b5(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a6:function a6(){},
df:function df(){var _=this
_.d=_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dt:function dt(){},
dA:function dA(){}},X={d_:function d_(a,b){this.a=a
this.b=b},de:function de(a,b){this.a=a
this.b=b},fx:function fx(){var _=this
_.d=_.c=_.b=_.a=null},di:function di(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fD:function fD(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ao:function ao(a,b,c){this.a=a
this.b=b
this.c=c},b9:function b9(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},h_:function h_(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},co:function co(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hc:function hc(){},dG:function dG(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hP:function hP(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dL:function dL(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
fq:function(a){var u=new X.fp(),t=new V.as(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.lE()
u.r=t
return u},
jw:function(a){var u,t,s=new X.ds()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gm().h(0,s.ge2())
t=new D.E("mover",u,s.b,[U.a2])
t.b=!0
s.ab(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.L().a)){s.c=1.0471975511965976
t=new D.E("fov",t,1.0471975511965976,[P.A])
t.b=!0
s.ab(t)}t=s.d
if(!(Math.abs(t-0.1)<$.L().a)){s.d=0.1
t=new D.E("near",t,0.1,[P.A])
t.b=!0
s.ab(t)}t=s.e
if(!(Math.abs(t-2000)<$.L().a)){s.e=2000
t=new D.E("far",t,2000,[P.A])
t.b=!0
s.ab(t)}return s},
bG:function bG(){},
fp:function fp(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fs:function fs(){this.b=this.a=null},
ds:function ds(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
bS:function bS(){}},V={
mW:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.dI(a-b,u)
return(a<0?a+u:a)+b},
P:function(a,b,c){if(a==null)return C.c.a9("null",c)
return C.c.a9(C.d.dD(Math.abs(a-0)<$.L().a?0:a,b),c+b+1)},
c1:function(a,b,c){var u,t,s,r,q,p
H.j(a,"$ib",[P.A],"$ab")
u=H.c([],[P.n])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.t)(a),++r){q=V.P(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.d(u,p)
C.a.l(u,p,C.c.a9(u[p],s))}return u},
jS:function(a){return C.d.hU(Math.pow(2,C.C.bU(Math.log(H.mt(a))/Math.log(2))))},
bu:function(){var u=$.k6
return u==null?$.k6=V.aT(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aT:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
jv:function(a,b,c){return V.aT(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
ls:function(a,b,c){return V.aT(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
ju:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aT(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
k5:function(a,b,c,d){d=V.jB()
return V.k4(V.kb(),d,new V.I(a,b,c))},
k4:function(a,b,c){var u=c.t(0,Math.sqrt(c.w(c))),t=b.aW(u),s=t.t(0,Math.sqrt(t.w(t))),r=u.aW(s),q=new V.I(a.a,a.b,a.c),p=s.K(0).w(q),o=r.K(0).w(q),n=u.K(0).w(q)
return V.aT(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bc:function(){var u=$.ka
return u==null?$.ka=new V.a3(0,0):u},
kb:function(){var u=$.cs
return u==null?$.cs=new V.ai(0,0,0):u},
lE:function(){var u=$.kg
return u==null?$.kg=V.hf(0,0,1,1):u},
hf:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cu(a,b,c,d)},
dP:function(){var u=$.kq
return u==null?$.kq=new V.I(0,0,0):u},
lN:function(){var u=$.i8
return u==null?$.i8=new V.I(-1,0,0):u},
jB:function(){var u=$.i9
return u==null?$.i9=new V.I(0,1,0):u},
lO:function(){var u=$.ia
return u==null?$.ia=new V.I(0,0,1):u},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ff:function ff(a){this.a=a},
dm:function dm(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
a7:function a7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ai:function ai(a,b,c){this.a=a
this.b=b
this.c=c},
bd:function bd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cu:function cu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
O:function O(a,b){this.a=a
this.b=b},
I:function I(a,b,c){this.a=a
this.b=b
this.c=c},
ae:function(a){var u=new V.ho()
u.dS(a)
return u},
eM:function eM(){},
b8:function b8(){},
dj:function dj(){},
ba:function ba(){this.a=null},
ho:function ho(){this.a=null},
cw:function cw(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dF:function dF(a,b,c){this.a=a
this.b=b
this.c=c},
cA:function cA(a){this.b=a
this.c=null},
hO:function hO(){this.c=this.b=this.a=null},
cB:function cB(a){this.b=a
this.a=this.c=null},
mR:function(a){P.lM(C.A,new V.jf(a))},
lH:function(a){var u=new V.hs()
u.dT(a,!0)
return u},
jf:function jf(a){this.a=a},
hs:function hs(){this.b=this.a=null},
hu:function hu(a){this.a=a},
ht:function ht(a){this.a=a}},U={
jm:function(){var u=new U.f_()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
d0:function(a){var u=new U.cf()
u.sR(0,a)
return u},
jo:function(a){var u=new U.ck()
u.bi(U.a2)
u.aI(u.gdX(),u.gfg())
if(a!=null)u.aR(0,a)
u.e=null
u.f=V.bu()
u.r=0
return u},
f_:function f_(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cf:function cf(){this.b=this.a=null},
ck:function ck(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a2:function a2(){},
dM:function dM(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dN:function dN(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dO:function dO(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={d2:function d2(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},d7:function d7(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aB:function aB(){},bR:function bR(){},dC:function dC(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
lq:function(a,b){var u=a.aX,t=new A.dl(b,u)
t.ck(b,u)
t.dQ(a,b)
return t},
lr:function(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
H.j(b0,"$ib",[A.au],"$ab")
H.j(b1,"$ib",[A.av],"$ab")
H.j(b2,"$ib",[A.aw],"$ab")
u="MaterialLight_"+a1.gae(a1)+a2.gae(a2)+a3.gae(a3)+a4.gae(a4)+a5.gae(a5)+a6.gae(a6)+a7.gae(a7)+a8.gae(a8)+a9.gae(a9)+"_"
u+=a?"1":"0"
u+=b?"1":"0"
u+=c?"1":"0"
u=u+"0_"+a0
t=b0.length
if(t>0){u+="_Dir"
for(s=0;s<b0.length;b0.length===t||(0,H.t)(b0),++s)u+="_"+H.i(b0[s].a)}t=b1.length
if(t>0){u+="_Point"
for(s=0;s<b1.length;b1.length===t||(0,H.t)(b1),++s)u+="_"+H.i(b1[s].a)}t=b2.length
if(t>0){u+="_Spot"
for(s=0;s<b2.length;b2.length===t||(0,H.t)(b2),++s)u+="_"+H.i(b2[s].a)}for(t=b0.length,r=0,q=!1,s=0;s<t;++s,q=!0)r+=b0[s].b
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
e=$.aG()
if(j){t=$.bk()
e=new Z.bf(e.a|t.a)}if(i){t=$.bj()
e=new Z.bf(e.a|t.a)}if(h){t=$.bl()
e=new Z.bf(e.a|t.a)}if(g){t=$.bi()
e=new Z.bf(e.a|t.a)}return new A.fK(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,r,o,k,o,q,f,!0,!1,!1,n,q,l,j,i,!1,h,g,!1,b,c,!1,a0,u.charCodeAt(0)==0?u:u,e)},
j1:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
j2:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.j1(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.jg(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
m3:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.j1(b,t,"emission")
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
m0:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.j2(b,t,"ambient")
b.a+="\n"},
m1:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.j2(b,t,"diffuse")
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
m4:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.j2(b,t,"invDiffuse")
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
ma:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.j2(b,t,"specular")
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
m6:function(a,b){var u,t,s
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
m8:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.j1(b,t,"reflect")
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
m9:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.j1(b,t,"refract")
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
m2:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.i(u)
s=A.jg(t)
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
r=[P.n]
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
m7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.i(u)
s=A.jg(t)
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
c.a=r+"\n"}r=[P.n]
l=H.c([],r)
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
mb:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.i(u)
s=A.jg(t)
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
c.a=u+"\n"}u=[P.n]
j=H.c([],u)
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
m5:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.n])
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
mc:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.bw("")
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
A.m3(a,i)
A.m0(a,i)
A.m1(a,i)
A.m4(a,i)
A.ma(a,i)
t=a.cy
if(t){r=i.a+="// === Enviromental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.m8(a,i)
A.m9(a,i)}A.m6(a,i)
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
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.t)(q),++n)A.m2(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.t)(q),++n)A.m7(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.t)(q),++n)A.mb(a,q[n],i)
A.m5(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.c([],[P.n])
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
i.a+=l+(r[0].toUpperCase()+C.c.aK(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.t)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.c.aK(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.t)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.c.aK(r,1))+"Values(norm);\n"}if(a.cx<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
md:function(a,b){var u,t,s
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
mf:function(a,b){var u
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
me:function(a,b){var u
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
mh:function(a,b){var u,t
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
mi:function(a,b){var u,t
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
mg:function(a,b){var u
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
mj:function(a,b){var u
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
jg:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.c.aK(a,1)},
jA:function(a,b,c,d,e){var u=new A.hW(a,c,e)
u.f=d
u.sh_(P.lp(d,0,P.r))
return u},
cW:function cW(a,b,c){this.a=a
this.b=b
this.c=c},
eQ:function eQ(a){this.a=a},
ac:function ac(a,b,c){this.a=a
this.b=b
this.c=c},
dl:function dl(a,b){var _=this
_.d4=_.i3=_.d3=_.ba=_.aX=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ib=_.ia=_.i9=_.bT=_.bS=_.bR=_.bQ=_.bP=_.bO=_.dh=_.i8=_.dg=_.df=_.i7=_.de=_.dd=_.dc=_.i6=_.da=_.d9=_.d8=_.i5=_.d7=_.d6=_.i4=_.d5=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
au:function au(a,b){this.a=a
this.b=b},
av:function av(a,b){this.a=a
this.b=b},
aw:function aw(a,b){this.a=a
this.b=b},
fK:function fK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.ba=b4},
bT:function bT(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bU:function bU(a,b,c,d,e,f,g,h,i,j){var _=this
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
bW:function bW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cv:function cv(){},
dy:function dy(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dH:function dH(){},
i0:function i0(a){this.a=a},
ax:function ax(a,b,c){this.a=a
this.c=b
this.d=c},
hY:function hY(a,b,c){this.a=a
this.c=b
this.d=c},
hZ:function hZ(a,b,c){this.a=a
this.c=b
this.d=c},
i_:function i_(a,b,c){this.a=a
this.c=b
this.d=c},
hW:function hW(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a4:function a4(a,b,c){this.a=a
this.c=b
this.d=c},
hX:function hX(a,b,c){this.a=a
this.c=b
this.d=c},
S:function S(a,b,c){this.a=a
this.c=b
this.d=c},
cC:function cC(a,b,c){this.a=a
this.c=b
this.d=c},
i1:function i1(a,b,c){this.a=a
this.c=b
this.d=c},
cD:function cD(a,b,c){this.a=a
this.c=b
this.d=c},
al:function al(a,b,c){this.a=a
this.c=b
this.d=c},
bV:function bV(a,b,c){this.a=a
this.c=b
this.d=c},
ab:function ab(a,b,c){this.a=a
this.c=b
this.d=c}},F={
j0:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cP:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.I(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.I(u+a3,t+a1,s+a2)
q=new V.I(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.I(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.j0(i)
l=F.j0(j.b)
k=F.mU(d,a0,new F.j_(j,F.j0(j.c),F.j0(j.d),l,m,c),b)
if(k!=null)a.hw(k)},
mU:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.l(c,{func:1,ret:-1,args:[F.ap,P.A,P.A]})
if(a<1)return
if(b<1)return
u=F.jx()
t=H.c([],[F.ap])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.ib(g,g,new V.as(p,0,0,1),g,g,new V.a3(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.bM(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.ib(g,g,new V.as(j,i,h,1),g,g,new V.a3(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.bM(d))}}u.d.h3(a+1,b+1,t)
return u},
ci:function(a,b,c){var u=new F.a1(),t=a.a
if(t==null)H.y(P.x("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.y(P.x("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.Z()
return u},
ll:function(a,b){var u=new F.b7(),t=a.a
if(t==null)H.y(P.x("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.y(P.x("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.Z()
return u},
jx:function(){var u=new F.dw(),t=new F.ic(u)
t.b=!1
t.sh0(H.c([],[F.ap]))
u.a=t
t=new F.hr(u)
t.sbB(H.c([],[F.bv]))
u.b=t
t=new F.hq(u)
t.ses(H.c([],[F.b7]))
u.c=t
t=new F.hp(u)
t.sel(H.c([],[F.a1]))
u.d=t
u.e=null
return u},
ib:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ap(),r=new F.ii()
r.sbB(H.c([],[F.bv]))
s.b=r
r=new F.ih()
u=[F.b7]
r.seu(H.c([],u))
r.sev(H.c([],u))
s.c=r
r=new F.id()
u=[F.a1]
r.sem(H.c([],u))
r.sen(H.c([],u))
r.seo(H.c([],u))
s.d=r
h=$.l1()
s.e=0
r=$.aG()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bk().a)!==0?e:t
s.x=(u&$.bj().a)!==0?b:t
s.y=(u&$.bD().a)!==0?f:t
s.z=(u&$.bl().a)!==0?g:t
s.Q=(u&$.l2().a)!==0?c:t
s.ch=(u&$.c5().a)!==0?i:0
s.cx=(u&$.bi().a)!==0?a:t
return s},
j_:function j_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a1:function a1(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
b7:function b7(){this.b=this.a=null},
bv:function bv(){this.a=null},
dw:function dw(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hp:function hp(a){this.a=a
this.b=null},
hq:function hq(a){this.a=a
this.b=null},
hr:function hr(a){this.a=a
this.b=null},
ap:function ap(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ik:function ik(a){this.a=a},
ij:function ij(a){this.a=a},
ic:function ic(a){this.a=a
this.c=this.b=null},
id:function id(){this.d=this.c=this.b=null},
ie:function ie(a,b){this.a=a
this.b=b},
ig:function ig(a,b){this.a=a
this.b=b},
ih:function ih(){this.c=this.b=null},
ii:function ii(){this.b=null}},T={cy:function cy(){},cz:function cz(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hK:function hK(a){var _=this
_.a=a
_.e=_.d=_.c=null},hL:function hL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},K={
kI:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="testCanvas",b1=null,b2="modifiers",b3=V.lH("Test 033"),b4=W.jl()
b4.className="pageLargeCanvas"
b4.id=b0
b3.a.appendChild(b4)
u=[P.n]
b3.cT(H.c(["Test of a sterioscopic scene."],u))
b3.cT(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(b0)
if(t==null)H.y(P.x("Failed to find an element with the identifier, testCanvas."))
s=E.lL(t,!0,!0,!0,!1)
r=F.jx()
F.cP(r,b1,b1,1,1,1,0,0,1)
F.cP(r,b1,b1,1,1,0,1,0,3)
F.cP(r,b1,b1,1,1,0,0,1,2)
F.cP(r,b1,b1,1,1,-1,0,0,0)
F.cP(r,b1,b1,1,1,0,-1,0,0)
F.cP(r,b1,b1,1,1,0,0,-1,3)
r.ao()
q=E.fe(r)
p=E.fe(b1)
for(o=-1.6;o<=1.7;o+=0.8)for(n=-1.6;n<=1.7;n+=0.8)for(m=-1.6;m<=1.7;m+=0.8){l=new V.a7(1,0,0,o,0,1,0,n,0,0,1,m,0,0,0,1).p(0,new V.a7(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
k=E.fe(b1)
b3=new U.cf()
b3.sR(0,l)
k.sdn(b3)
b3=k.y
u=H.w(b3,0)
H.D(q,u)
j=[u]
if(H.z(b3.aP(H.c([q],j)))){i=b3.a
h=i.length
C.a.h(i,q)
u=H.j(H.c([q],j),"$ie",[u],"$ae")
b3=b3.c
if(b3!=null)b3.$2(h,u)}b3=p.y
u=H.w(b3,0)
H.D(k,u)
j=[u]
if(H.z(b3.aP(H.c([k],j)))){i=b3.a
h=i.length
C.a.h(i,k)
u=H.j(H.c([k],j),"$ie",[u],"$ae")
b3=b3.c
if(b3!=null)b3.$2(h,u)}}g=s.f.dk("../resources/diceColor")
f=new O.dk()
f.se9(O.eZ(V.a7))
f.e.aI(f.geH(),f.geJ())
b3=new O.aS(f,"emission")
b3.c=new A.ac(!1,!1,!1)
b3.f=new V.Z(0,0,0)
f.f=b3
b3=new O.aS(f,"ambient")
b3.c=new A.ac(!1,!1,!1)
b3.f=new V.Z(0,0,0)
f.r=b3
b3=new O.aS(f,"diffuse")
b3.c=new A.ac(!1,!1,!1)
b3.f=new V.Z(0,0,0)
f.x=b3
b3=new O.aS(f,"invDiffuse")
b3.c=new A.ac(!1,!1,!1)
b3.f=new V.Z(0,0,0)
f.y=b3
b3=new O.fN(f,"specular")
b3.c=new A.ac(!1,!1,!1)
b3.f=new V.Z(0,0,0)
b3.ch=100
f.z=b3
b3=new O.fJ(f,"bump")
b3.c=new A.ac(!1,!1,!1)
f.Q=b3
f.ch=null
b3=new O.aS(f,"reflect")
b3.c=new A.ac(!1,!1,!1)
b3.f=new V.Z(0,0,0)
f.cx=b3
b3=new O.fM(f,"refract")
b3.c=new A.ac(!1,!1,!1)
b3.f=new V.Z(0,0,0)
b3.ch=1
f.cy=b3
b3=new O.fI(f,"alpha")
b3.c=new A.ac(!1,!1,!1)
b3.f=1
f.db=b3
b3=new D.df()
b3.bi(D.a6)
b3.sei(H.c([],[D.b5]))
b3.sfu(H.c([],[D.dt]))
b3.sfO(H.c([],[D.dA]))
b3.y=b3.x=null
b3.cb(b3.geD(),b3.gfe(),b3.gfi())
f.dx=b3
u=new O.fL()
u.b=new V.as(0,0,0,0)
u.c=1
u.d=10
u.e=!1
f.dy=u
u=b3.x
b3=u==null?b3.x=D.J():u
b3.h(0,f.gfE())
b3=f.dx
u=b3.y
b3=u==null?b3.y=D.J():u
b3.h(0,f.gaD())
f.fr=null
b3=f.dx
u=U.d0(V.k5(-1,-1,-1,b1))
b3.h(0,D.k_(new V.Z(1,0.9,0.9),u))
b3=f.dx
u=U.d0(V.k5(1,1,2,b1))
b3.h(0,D.k_(new V.Z(0.2,0.2,0.35),u))
b3=f.r
b3.saU(0,new V.Z(0.2,0.2,0.2))
f.r.sb2(g)
b3=f.x
b3.saU(0,new V.Z(0.8,0.8,0.8))
f.x.sb2(g)
b3=f.z
b3.saU(0,new V.Z(0.7,0.7,0.7))
b3=f.z
b3.bE(new A.ac(!0,!1,b3.c.c))
b3.cP(10)
f.Q.sb2(s.f.dk("../resources/diceBumpMap"))
e=U.jo(b1)
b3=s.r
u=new U.dN()
j=U.jm()
j.sc9(0,!0)
j.sc_(6.283185307179586)
j.sc1(0)
j.sa2(0,0)
j.sc0(100)
j.sM(0)
j.sbN(0.5)
u.b=j
i=u.gaA()
j.gm().h(0,i)
j=U.jm()
j.sc9(0,!0)
j.sc_(6.283185307179586)
j.sc1(0)
j.sa2(0,0)
j.sc0(100)
j.sM(0)
j.sbN(0.5)
u.c=j
j.gm().h(0,i)
u.d=null
u.r=u.f=u.e=!1
u.y=u.x=2.5
u.Q=4
u.ch=u.cx=!1
u.db=u.cy=0
u.dx=null
u.dy=0
u.fx=u.fr=null
d=new X.ao(!1,!1,!1)
c=u.d
u.d=d
j=[X.ao]
i=new D.E(b2,c,d,j)
i.b=!0
u.J(i)
i=u.f
if(i!==!1){u.f=!1
i=new D.E("invertX",i,!1,[P.a5])
i.b=!0
u.J(i)}i=u.r
if(i!==!1){u.r=!1
i=new D.E("invertY",i,!1,[P.a5])
i.b=!0
u.J(i)}u.aS(b3)
e.h(0,u)
b3=s.r
u=new U.dM()
i=U.jm()
i.sc9(0,!0)
i.sc_(6.283185307179586)
i.sc1(0)
i.sa2(0,0)
i.sc0(100)
i.sM(0)
i.sbN(0.2)
u.b=i
i.gm().h(0,u.gaA())
u.c=null
u.d=!1
u.e=2.5
u.r=4
u.x=u.y=!1
u.z=0
u.Q=null
u.ch=0
u.cy=u.cx=null
d=new X.ao(!0,!1,!1)
c=u.c
u.c=d
i=new D.E(b2,c,d,j)
i.b=!0
u.J(i)
u.aS(b3)
e.h(0,u)
b3=s.r
u=new U.dO()
u.c=0.01
u.e=u.d=0
d=new X.ao(!1,!1,!1)
u.b=d
j=new D.E(b2,b1,d,j)
j.b=!0
u.J(j)
u.aS(b3)
e.h(0,u)
e.h(0,U.d0(V.jv(0,0,6)))
b=X.fq(b1)
if(b.b){b.b=!1
b3=new D.E("clearColor",!0,!1,[P.a5])
b3.b=!0
b.ab(b3)}b3=s.f.dl("../resources/maskonaive",".jpg")
a=new M.d2()
a.a=!0
u=E.fe(b1)
r=F.jx()
j=r.a
i=new V.I(-1,-1,1)
i=i.t(0,Math.sqrt(i.w(i)))
a0=j.b9(new V.bd(1,2,4,6),new V.as(1,0,0,1),new V.ai(-1,-1,0),new V.a3(0,1),i,b1)
j=r.a
i=new V.I(1,-1,1)
i=i.t(0,Math.sqrt(i.w(i)))
a1=j.b9(new V.bd(0,3,4,6),new V.as(0,0,1,1),new V.ai(1,-1,0),new V.a3(1,1),i,b1)
j=r.a
i=new V.I(1,1,1)
i=i.t(0,Math.sqrt(i.w(i)))
a2=j.b9(new V.bd(0,2,5,6),new V.as(0,1,0,1),new V.ai(1,1,0),new V.a3(1,0),i,b1)
j=r.a
i=V.bc()
a3=new V.I(-1,1,1)
a3=a3.t(0,Math.sqrt(a3.w(a3)))
a4=j.b9(new V.bd(0,2,4,7),new V.as(1,1,0,1),new V.ai(-1,1,0),i,a3,b1)
r.d.h2(H.c([a0,a1,a2,a4],[F.ap]))
r.ao()
u.scd(0,r)
a.e=u
a.saT(b1)
a.sb0(0,b1)
a.sb1(b1)
u=new O.dx()
u.b=1.0471975511965976
u.d=new V.Z(1,1,1)
c=u.c
u.c=b3
b3.gm().h(0,u.gaD())
b3=new D.E("boxTexture",c,u.c,[T.cz])
b3.b=!0
u.S(b3)
a.sb1(u)
a5=new M.d7()
a5.a=!0
a5.sec(0,O.eZ(E.ah))
a5.e.aI(a5.geN(),a5.geP())
a5.y=a5.x=a5.r=a5.f=null
a6=X.fq(b1)
a5.saT(b1)
a5.sb0(0,a6)
a5.sb1(b1)
a5.sb1(f)
a5.e.h(0,p)
b3=M.aB
u=H.c([a,a5],[b3])
j=new M.dC()
j.a=!0
i=U.d0(b1)
j.b=i
a3=U.d0(b1)
j.c=a3
a7=U.a2
a8=[a7]
i=U.jo(H.c([null,i],a8))
j.d=i
a8=U.jo(H.c([null,a3],a8))
j.e=a8
j.f=X.jw(i)
j.r=X.jw(a8)
j.x=V.hf(0,0,0.5,1)
j.y=V.hf(0.5,0,0.5,1)
j.sft(O.eZ(b3))
j.Q.aI(j.geF(),j.gfk())
j.Q.aR(0,u)
j.ch=0.1
j.cx=12
j.db=j.cy=null
b3=j.d.a
if(0>=b3.length)return H.d(b3,0)
if(!J.R(b3[0],e)){b3=j.d
i=b3.a
if(0>=i.length)return H.d(i,0)
c=i[0]
b3.l(0,0,e)
j.e.l(0,0,e)
a7=new D.E("cameraMover",c,e,[a7])
a7.b=!0
j.O(a7)}b3=j.z
if(b3!==b){if(b3!=null)b3.gm().L(0,j.gN())
c=j.z
j.z=b
b.gm().h(0,j.gN())
b3=new D.E("target",c,j.z,[X.bS])
b3.b=!0
j.O(b3)}j.Q.aR(0,u)
j.ch=0.1
j.cx=12
a9=Math.atan2(0.1,12)
b3=j.b
u=j.ch
if(typeof u!=="number")return u.K()
b3.sR(0,V.jv(-u,0,0).p(0,V.ju(a9)))
j.c.sR(0,V.jv(j.ch,0,0).p(0,V.ju(-a9)))
b3=s.d
if(b3!==j){if(b3!=null)b3.gm().L(0,s.gcl())
s.d=j
j.gm().h(0,s.gcl())
s.cm()}V.mR(s)}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.js.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gF:function(a){return H.ct(a)},
i:function(a){return"Instance of '"+H.bO(a)+"'"}}
J.fu.prototype={
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$ia5:1}
J.dc.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0}}
J.dd.prototype={
gF:function(a){return 0},
i:function(a){return String(a)}}
J.ha.prototype={}
J.bX.prototype={}
J.bt.prototype={
i:function(a){var u=a[$.kR()]
if(u==null)return this.dN(a)
return"JavaScript function for "+H.i(J.ar(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ijn:1}
J.aQ.prototype={
h:function(a,b){H.D(b,H.w(a,0))
if(!!a.fixed$length)H.y(P.am("add"))
a.push(b)},
L:function(a,b){var u
if(!!a.fixed$length)H.y(P.am("remove"))
for(u=0;u<a.length;++u)if(J.R(a[u],b)){a.splice(u,1)
return!0}return!1},
aR:function(a,b){var u,t
H.j(b,"$ie",[H.w(a,0)],"$ae")
if(!!a.fixed$length)H.y(P.am("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.t)(b),++t)a.push(b[t])},
G:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.w(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.ce(a))}},
q:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.l(t,u,H.i(a[u]))
return t.join(b)},
ht:function(a){return this.q(a,"")},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
dL:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.aW(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.aW(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.w(a,0)])
return H.c(a.slice(b,c),[H.w(a,0)])},
gbX:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.li())},
bh:function(a,b){var u=H.w(a,0)
H.l(b,{func:1,ret:P.r,args:[u,u]})
if(!!a.immutable$list)H.y(P.am("sort"))
H.dz(a,0,a.length-1,b,u)},
ah:function(a,b){var u
for(u=0;u<a.length;++u)if(J.R(a[u],b))return!0
return!1},
i:function(a){return P.jp(a,"[","]")},
gX:function(a){return new J.af(a,a.length,[H.w(a,0)])},
gF:function(a){return H.ct(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.y(P.am("set length"))
if(b<0)throw H.h(P.aW(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.h(H.c0(a,b))
return a[b]},
l:function(a,b,c){H.D(c,H.w(a,0))
if(!!a.immutable$list)H.y(P.am("indexed set"))
if(b>=a.length||b<0)throw H.h(H.c0(a,b))
a[b]=c},
$ie:1,
$ib:1}
J.jr.prototype={}
J.af.prototype={
gP:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.h(H.t(s))
u=t.c
if(u>=r){t.scC(null)
return!1}t.scC(s[u]);++t.c
return!0},
scC:function(a){this.d=H.D(a,H.w(this,0))},
$iaP:1}
J.bK.prototype={
ha:function(a,b){var u
H.kJ(b)
if(typeof b!=="number")throw H.h(H.bg(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbb(b)
if(this.gbb(a)===u)return 0
if(this.gbb(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbb:function(a){return a===0?1/a<0:a<0},
hU:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.h(P.am(""+a+".toInt()"))},
bU:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.am(""+a+".floor()"))},
ac:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.am(""+a+".round()"))},
dD:function(a,b){var u
if(b>20)throw H.h(P.aW(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbb(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
dI:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dP:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cQ(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.cQ(a,b)},
cQ:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.am("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
b7:function(a,b){var u
if(a>0)u=this.fM(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fM:function(a,b){return b>31?0:a>>>b},
ay:function(a,b){if(typeof b!=="number")throw H.h(H.bg(b))
return a>b},
$iA:1,
$ia9:1}
J.db.prototype={$ir:1}
J.da.prototype={}
J.bL.prototype={
bL:function(a,b){if(b<0)throw H.h(H.c0(a,b))
if(b>=a.length)H.y(H.c0(a,b))
return a.charCodeAt(b)},
b4:function(a,b){if(b>=a.length)throw H.h(H.c0(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.h(P.jj(b,null,null))
return a+b},
cf:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.he(b,null))
if(b>c)throw H.h(P.he(b,null))
if(c>a.length)throw H.h(P.he(c,null))
return a.substring(b,c)},
aK:function(a,b){return this.cf(a,b,null)},
p:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.y)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a9:function(a,b){var u=b-a.length
if(u<=0)return a
return this.p(" ",u)+a},
i:function(a){return a},
gF:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ik8:1,
$in:1}
H.a_.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.c.bL(this.a,b)},
$adK:function(){return[P.r]},
$au:function(){return[P.r]},
$ae:function(){return[P.r]},
$ab:function(){return[P.r]}}
H.fc.prototype={}
H.dh.prototype={
gP:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.jN(s),q=r.gk(s)
if(t.b!==q)throw H.h(P.ce(s))
u=t.c
if(u>=q){t.saM(null)
return!1}t.saM(r.C(s,u));++t.c
return!0},
saM:function(a){this.d=H.D(a,H.w(this,0))},
$iaP:1}
H.fG.prototype={
gX:function(a){return new H.fH(J.c6(this.a),this.b,this.$ti)},
gk:function(a){return J.c7(this.a)},
C:function(a,b){return this.b.$1(J.jW(this.a,b))},
$ae:function(a,b){return[b]}}
H.fH.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.saM(u.c.$1(t.gP(t)))
return!0}u.saM(null)
return!1},
gP:function(a){return this.a},
saM:function(a){this.a=H.D(a,H.w(this,1))},
$aaP:function(a,b){return[b]}}
H.im.prototype={
gX:function(a){return new H.io(J.c6(this.a),this.b,this.$ti)}}
H.io.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(H.z(t.$1(u.gP(u))))return!0
return!1},
gP:function(a){var u=this.a
return u.gP(u)}}
H.bI.prototype={}
H.dK.prototype={}
H.dJ.prototype={}
H.hT.prototype={
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
H.h6.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fw.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.i3.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jh.prototype={
$1:function(a){if(!!J.W(a).$ibo)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:23}
H.en.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iak:1}
H.cc.prototype={
i:function(a){return"Closure '"+H.bO(this).trim()+"'"},
$ijn:1,
ghY:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hH.prototype={}
H.hz.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c4(u)+"'"}}
H.c8.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.c8))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gF:function(a){var u,t=this.c
if(t==null)u=H.ct(this.a)
else u=typeof t!=="object"?J.bE(t):H.ct(t)
return(u^H.ct(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.bO(u)+"'")}}
H.hV.prototype={
i:function(a){return this.a}}
H.eX.prototype={
i:function(a){return this.a}}
H.hm.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.ip.prototype={
i:function(a){return"Assertion failed: "+P.d8(this.a)}}
H.X.prototype={
gk:function(a){return this.a},
gar:function(a){return new H.dg(this,[H.w(this,0)])},
d_:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cz(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cz(t,b)}else return s.hr(b)},
hr:function(a){var u=this.d
if(u==null)return!1
return this.bV(this.bo(u,J.bE(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b5(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b5(r,b)
s=t==null?null:t.b
return s}else return q.hs(b)},
hs:function(a){var u,t,s=this.d
if(s==null)return
u=this.bo(s,J.bE(a)&0x3ffffff)
t=this.bV(u,a)
if(t<0)return
return u[t].b},
l:function(a,b,c){var u,t,s,r,q,p,o=this
H.D(b,H.w(o,0))
H.D(c,H.w(o,1))
if(typeof b==="string"){u=o.b
o.cp(u==null?o.b=o.by():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cp(t==null?o.c=o.by():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.by()
r=J.bE(b)&0x3ffffff
q=o.bo(s,r)
if(q==null)o.bF(s,r,[o.bz(b,c)])
else{p=o.bV(q,b)
if(p>=0)q[p].b=c
else q.push(o.bz(b,c))}}},
G:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.w(s,0),H.w(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.h(P.ce(s))
u=u.c}},
cp:function(a,b,c){var u,t=this
H.D(b,H.w(t,0))
H.D(c,H.w(t,1))
u=t.b5(a,b)
if(u==null)t.bF(a,b,t.bz(b,c))
else u.b=c},
bz:function(a,b){var u=this,t=new H.fz(H.D(a,H.w(u,0)),H.D(b,H.w(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
bV:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.R(a[t].a,b))return t
return-1},
i:function(a){return P.k3(this)},
b5:function(a,b){return a[b]},
bo:function(a,b){return a[b]},
bF:function(a,b,c){a[b]=c},
eg:function(a,b){delete a[b]},
cz:function(a,b){return this.b5(a,b)!=null},
by:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bF(t,u,t)
this.eg(t,u)
return t}}
H.fz.prototype={}
H.dg.prototype={
gk:function(a){return this.a.a},
gX:function(a){var u=this.a,t=new H.fA(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fA.prototype={
gP:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.ce(t))
else{t=u.c
if(t==null){u.sco(null)
return!1}else{u.sco(t.a)
u.c=u.c.c
return!0}}},
sco:function(a){this.d=H.D(a,H.w(this,0))},
$iaP:1}
H.j9.prototype={
$1:function(a){return this.a(a)},
$S:23}
H.ja.prototype={
$2:function(a,b){return this.a(a,b)},
$S:28}
H.jb.prototype={
$1:function(a){return this.a(H.Q(a))},
$S:29}
H.fv.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ik8:1}
H.cq.prototype={$ine:1}
H.dn.prototype={
gk:function(a){return a.length},
$iG:1,
$aG:function(){}}
H.cp.prototype={
j:function(a,b){H.bz(b,a,a.length)
return a[b]},
$abI:function(){return[P.A]},
$au:function(){return[P.A]},
$ie:1,
$ae:function(){return[P.A]},
$ib:1,
$ab:function(){return[P.A]}}
H.dp.prototype={
$abI:function(){return[P.r]},
$au:function(){return[P.r]},
$ie:1,
$ae:function(){return[P.r]},
$ib:1,
$ab:function(){return[P.r]}}
H.h0.prototype={
j:function(a,b){H.bz(b,a,a.length)
return a[b]}}
H.h1.prototype={
j:function(a,b){H.bz(b,a,a.length)
return a[b]}}
H.h2.prototype={
j:function(a,b){H.bz(b,a,a.length)
return a[b]}}
H.h3.prototype={
j:function(a,b){H.bz(b,a,a.length)
return a[b]}}
H.h4.prototype={
j:function(a,b){H.bz(b,a,a.length)
return a[b]}}
H.dq.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bz(b,a,a.length)
return a[b]},
$inf:1}
H.h5.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bz(b,a,a.length)
return a[b]}}
H.cH.prototype={}
H.cI.prototype={}
H.cJ.prototype={}
H.cK.prototype={}
P.ir.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:21}
P.iq.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:27}
P.is.prototype={
$0:function(){this.a.$0()},
$S:2}
P.it.prototype={
$0:function(){this.a.$0()},
$S:2}
P.et.prototype={
e0:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c_(new P.iX(this,b),0),a)
else throw H.h(P.am("`setTimeout()` not found."))},
e1:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c_(new P.iW(this,a,Date.now(),b),0),a)
else throw H.h(P.am("Periodic timer."))},
$ib0:1}
P.iX.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.iW.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.dP(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.b4.prototype={
hv:function(a){if(this.c!==6)return!0
return this.b.b.c6(H.l(this.d,{func:1,ret:P.a5,args:[P.M]}),a.a,P.a5,P.M)},
hp:function(a){var u=this.e,t=P.M,s={futureOr:1,type:H.w(this,1)},r=this.b.b
if(H.eJ(u,{func:1,args:[P.M,P.ak]}))return H.jM(r.hP(u,a.a,a.b,null,t,P.ak),s)
else return H.jM(r.c6(H.l(u,{func:1,args:[P.M]}),a.a,null,t),s)}}
P.az.prototype={
dC:function(a,b,c){var u,t,s,r=H.w(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.V
if(u!==C.f){u.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.ml(b,u)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.az($.V,[c])
s=b==null?1:3
this.cq(new P.b4(t,s,a,b,[r,c]))
return t},
hT:function(a,b){return this.dC(a,null,b)},
cq:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$ib4")
t.c=a}else{if(s===2){u=H.k(t.c,"$iaz")
s=u.a
if(s<4){u.cq(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.j5(null,null,s,H.l(new P.iA(t,a),{func:1,ret:-1}))}},
cL:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$ib4")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iaz")
u=q.a
if(u<4){q.cL(a)
return}p.a=u
p.c=q.c}o.a=p.b6(a)
u=p.b
u.toString
P.j5(null,null,u,H.l(new P.iE(o,p),{func:1,ret:-1}))}},
bD:function(){var u=H.k(this.c,"$ib4")
this.c=null
return this.b6(u)},
b6:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
ct:function(a){var u,t,s=this,r=H.w(s,0)
H.jM(a,{futureOr:1,type:r})
u=s.$ti
if(H.jJ(a,"$icj",u,"$acj"))if(H.jJ(a,"$iaz",u,null))P.kr(a,s)
else P.lT(a,s)
else{t=s.bD()
H.D(a,r)
s.a=4
s.c=a
P.cF(s,t)}},
cu:function(a,b){var u,t=this
H.k(b,"$iak")
u=t.bD()
t.a=8
t.c=new P.ag(a,b)
P.cF(t,u)},
$icj:1}
P.iA.prototype={
$0:function(){P.cF(this.a,this.b)},
$S:2}
P.iE.prototype={
$0:function(){P.cF(this.b,this.a.a)},
$S:2}
P.iB.prototype={
$1:function(a){var u=this.a
u.a=0
u.ct(a)},
$S:21}
P.iC.prototype={
$2:function(a,b){H.k(b,"$iak")
this.a.cu(a,b)},
$1:function(a){return this.$2(a,null)},
$S:41}
P.iD.prototype={
$0:function(){this.a.cu(this.b,this.c)},
$S:2}
P.iH.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dB(H.l(s.d,{func:1}),null)}catch(r){u=H.bC(r)
t=H.c2(r)
if(o.d){s=H.k(o.a.a.c,"$iag").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iag")
else q.b=new P.ag(u,t)
q.a=!0
return}if(!!J.W(n).$icj){if(n instanceof P.az&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iag")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.hT(new P.iI(p),null)
s.a=!1}},
$S:3}
P.iI.prototype={
$1:function(a){return this.a},
$S:31}
P.iG.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.w(s,0)
q=H.D(n.c,r)
p=H.w(s,1)
n.a.b=s.b.b.c6(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.bC(o)
t=H.c2(o)
s=n.a
s.b=new P.ag(u,t)
s.a=!0}},
$S:3}
P.iF.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iag")
r=m.c
if(H.z(r.hv(u))&&r.e!=null){q=m.b
q.b=r.hp(u)
q.a=!1}}catch(p){t=H.bC(p)
s=H.c2(p)
r=H.k(m.a.a.c,"$iag")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ag(t,s)
n.a=!0}},
$S:3}
P.dS.prototype={}
P.hC.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.az($.V,[P.r])
r.a=0
u=H.w(s,0)
t=H.l(new P.hE(r,s),{func:1,ret:-1,args:[u]})
H.l(new P.hF(r,q),{func:1,ret:-1})
W.a8(s.a,s.b,t,!1,u)
return q}}
P.hE.prototype={
$1:function(a){H.D(a,H.w(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.K,args:[H.w(this.b,0)]}}}
P.hF.prototype={
$0:function(){this.b.ct(this.a.a)},
$S:2}
P.cx.prototype={}
P.hD.prototype={}
P.b0.prototype={}
P.ag.prototype={
i:function(a){return H.i(this.a)},
$ibo:1}
P.iZ.prototype={$ins:1}
P.j4.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dr():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.i(0)
throw u},
$S:2}
P.iP.prototype={
hQ:function(a){var u,t,s,r=null
H.l(a,{func:1,ret:-1})
try{if(C.f===$.V){a.$0()
return}P.kv(r,r,this,a,-1)}catch(s){u=H.bC(s)
t=H.c2(s)
P.j3(r,r,this,u,H.k(t,"$iak"))}},
hR:function(a,b,c){var u,t,s,r=null
H.l(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.f===$.V){a.$1(b)
return}P.kw(r,r,this,a,b,-1,c)}catch(s){u=H.bC(s)
t=H.c2(s)
P.j3(r,r,this,u,H.k(t,"$iak"))}},
h8:function(a,b){return new P.iR(this,H.l(a,{func:1,ret:b}),b)},
bH:function(a){return new P.iQ(this,H.l(a,{func:1,ret:-1}))},
cV:function(a,b){return new P.iS(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
dB:function(a,b){H.l(a,{func:1,ret:b})
if($.V===C.f)return a.$0()
return P.kv(null,null,this,a,b)},
c6:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.V===C.f)return a.$1(b)
return P.kw(null,null,this,a,b,c,d)},
hP:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.V===C.f)return a.$2(b,c)
return P.mm(null,null,this,a,b,c,d,e,f)}}
P.iR.prototype={
$0:function(){return this.a.dB(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.iQ.prototype={
$0:function(){return this.a.hQ(this.b)},
$S:3}
P.iS.prototype={
$1:function(a){var u=this.c
return this.a.hR(this.b,H.D(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iM.prototype={
gX:function(a){return P.kt(this,this.r,H.w(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.D(b,H.w(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cr(u==null?s.b=P.jE():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cr(t==null?s.c=P.jE():t,b)}else return s.e4(0,b)},
e4:function(a,b){var u,t,s,r=this
H.D(b,H.w(r,0))
u=r.d
if(u==null)u=r.d=P.jE()
t=r.cv(b)
s=u[t]
if(s==null)u[t]=[r.bk(b)]
else{if(r.cD(s,b)>=0)return!1
s.push(r.bk(b))}return!0},
L:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fB(this.c,b)
else return this.fA(0,b)},
fA:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.eq(r,b)
t=s.cD(u,b)
if(t<0)return!1
s.cR(u.splice(t,1)[0])
return!0},
cr:function(a,b){H.D(b,H.w(this,0))
if(H.k(a[b],"$icG")!=null)return!1
a[b]=this.bk(b)
return!0},
fB:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$icG")
if(u==null)return!1
this.cR(u)
delete a[b]
return!0},
cF:function(){this.r=1073741823&this.r+1},
bk:function(a){var u,t=this,s=new P.cG(H.D(a,H.w(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cF()
return s},
cR:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cF()},
cv:function(a){return J.bE(a)&1073741823},
eq:function(a,b){return a[this.cv(b)]},
cD:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.R(a[t].a,b))return t
return-1}}
P.cG.prototype={}
P.iN.prototype={
gP:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.ce(t))
else{t=u.c
if(t==null){u.scs(null)
return!1}else{u.scs(H.D(t.a,H.w(u,0)))
u.c=u.c.b
return!0}}},
scs:function(a){this.d=H.D(a,H.w(this,0))},
$iaP:1}
P.fB.prototype={$ie:1,$ib:1}
P.u.prototype={
gX:function(a){return new H.dh(a,this.gk(a),[H.cT(this,a,"u",0)])},
C:function(a,b){return this.j(a,b)},
hW:function(a,b){var u,t=this,s=H.c([],[H.cT(t,a,"u",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.l(s,u,t.j(a,u))
return s},
hV:function(a){return this.hW(a,!0)},
i:function(a){return P.jp(a,"[","]")}}
P.fE.prototype={}
P.fF.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.i(a)
t.a=u+": "
t.a+=H.i(b)},
$S:17}
P.ad.prototype={
G:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.cT(s,a,"ad",0),H.cT(s,a,"ad",1)]})
for(u=J.c6(s.gar(a));u.A();){t=u.gP(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.c7(this.gar(a))},
i:function(a){return P.k3(a)},
$iF:1}
P.iT.prototype={
i:function(a){return P.jp(this,"{","}")},
C:function(a,b){var u,t,s,r=this
P.ke(b,"index")
for(u=P.kt(r,r.r,H.w(r,0)),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.h(P.U(b,r,"index",null,t))},
$ie:1,
$ikh:1}
P.e6.prototype={}
P.cd.prototype={}
P.d1.prototype={}
P.fd.prototype={
$acd:function(){return[P.n,[P.b,P.r]]}}
P.i6.prototype={}
P.i7.prototype={
hb:function(a){var u,t,s=P.kf(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iY(u)
if(t.ep(a,0,s)!==s)t.cS(C.c.bL(a,s-1),0)
return new Uint8Array(u.subarray(0,H.lY(0,t.b,u.length)))},
$ad1:function(){return[P.n,[P.b,P.r]]}}
P.iY.prototype={
cS:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
ep:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.c.bL(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.c.b4(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cS(r,C.c.b4(a,p)))s=p}else if(r<=2047){q=n.b
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
P.a5.prototype={}
P.at.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.at&&this.a===b.a&&!0},
gF:function(a){var u=this.a
return(u^C.e.b7(u,30))&1073741823},
i:function(a){var u=this,t=P.ld(H.lA(u)),s=P.d3(H.ly(u)),r=P.d3(H.lu(u)),q=P.d3(H.lv(u)),p=P.d3(H.lx(u)),o=P.d3(H.lz(u)),n=P.le(H.lw(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.A.prototype={}
P.bn.prototype={
ay:function(a,b){return C.e.ay(this.a,b.ghZ())},
n:function(a,b){if(b==null)return!1
return b instanceof P.bn&&this.a===b.a},
gF:function(a){return C.e.gF(this.a)},
i:function(a){var u,t,s,r=new P.fb(),q=this.a
if(q<0)return"-"+new P.bn(0-q).i(0)
u=r.$1(C.e.a0(q,6e7)%60)
t=r.$1(C.e.a0(q,1e6)%60)
s=new P.fa().$1(q%1e6)
return""+C.e.a0(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.fa.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:18}
P.fb.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:18}
P.bo.prototype={}
P.eP.prototype={
i:function(a){return"Assertion failed"}}
P.dr.prototype={
i:function(a){return"Throw of null."}}
P.aI.prototype={
gbm:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbl:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbm()+o+u
if(!q.a)return t
s=q.gbl()
r=P.d8(q.b)
return t+s+": "+r}}
P.bP.prototype={
gbm:function(){return"RangeError"},
gbl:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.ft.prototype={
gbm:function(){return"RangeError"},
gbl:function(){var u,t=H.Y(this.b)
if(typeof t!=="number")return t.a5()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gk:function(a){return this.f}}
P.i4.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.i2.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hy.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f0.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.d8(u)+"."}}
P.h9.prototype={
i:function(a){return"Out of Memory"},
$ibo:1}
P.dB.prototype={
i:function(a){return"Stack Overflow"},
$ibo:1}
P.f5.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e_.prototype={
i:function(a){return"Exception: "+this.a}}
P.fo.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.c.cf(s,0,75)+"...":s
return t+"\n"+r}}
P.r.prototype={}
P.e.prototype={
gk:function(a){var u,t=this.gX(this)
for(u=0;t.A();)++u
return u},
C:function(a,b){var u,t,s
P.ke(b,"index")
for(u=this.gX(this),t=0;u.A();){s=u.gP(u)
if(b===t)return s;++t}throw H.h(P.U(b,this,"index",null,t))},
i:function(a){return P.lh(this,"(",")")}}
P.aP.prototype={}
P.b.prototype={$ie:1}
P.F.prototype={}
P.K.prototype={
gF:function(a){return P.M.prototype.gF.call(this,this)},
i:function(a){return"null"}}
P.a9.prototype={}
P.M.prototype={constructor:P.M,$iM:1,
n:function(a,b){return this===b},
gF:function(a){return H.ct(this)},
i:function(a){return"Instance of '"+H.bO(this)+"'"},
toString:function(){return this.i(this)}}
P.ak.prototype={}
P.n.prototype={$ik8:1}
P.bw.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.q.prototype={}
W.eL.prototype={
gk:function(a){return a.length}}
W.eN.prototype={
i:function(a){return String(a)}}
W.eO.prototype={
i:function(a){return String(a)}}
W.cX.prototype={}
W.bH.prototype={
ca:function(a,b,c){if(c!=null)return a.getContext(b,P.mu(c))
return a.getContext(b)},
dH:function(a,b){return this.ca(a,b,null)},
$ibH:1}
W.cb.prototype={$icb:1}
W.bm.prototype={
gk:function(a){return a.length}}
W.cg.prototype={$icg:1}
W.f1.prototype={
gk:function(a){return a.length}}
W.N.prototype={$iN:1}
W.ch.prototype={
gk:function(a){return a.length}}
W.f2.prototype={}
W.aK.prototype={}
W.aL.prototype={}
W.f3.prototype={
gk:function(a){return a.length}}
W.f4.prototype={
gk:function(a){return a.length}}
W.f6.prototype={
gk:function(a){return a.length}}
W.d4.prototype={$id4:1}
W.f7.prototype={
i:function(a){return String(a)}}
W.d5.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[[P.aj,P.a9]]},
$au:function(){return[[P.aj,P.a9]]},
$ie:1,
$ae:function(){return[[P.aj,P.a9]]},
$ib:1,
$ab:function(){return[[P.aj,P.a9]]},
$aB:function(){return[[P.aj,P.a9]]}}
W.d6.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gax(a))+" x "+H.i(this.gaq(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.W(b)
if(!u.$iaj)return!1
return a.left===u.gbc(b)&&a.top===u.gbe(b)&&this.gax(a)===u.gax(b)&&this.gaq(a)===u.gaq(b)},
gF:function(a){return W.ks(C.d.gF(a.left),C.d.gF(a.top),C.d.gF(this.gax(a)),C.d.gF(this.gaq(a)))},
gcW:function(a){return a.bottom},
gaq:function(a){return a.height},
gbc:function(a){return a.left},
gc5:function(a){return a.right},
gbe:function(a){return a.top},
gax:function(a){return a.width},
$iaj:1,
$aaj:function(){return[P.a9]}}
W.f8.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[P.n]},
$au:function(){return[P.n]},
$ie:1,
$ae:function(){return[P.n]},
$ib:1,
$ab:function(){return[P.n]},
$aB:function(){return[P.n]}}
W.f9.prototype={
gk:function(a){return a.length}}
W.iv.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.k(u[b],"$ia0")},
h:function(a,b){this.a.appendChild(b)
return b},
gX:function(a){var u=this.hV(this)
return new J.af(u,u.length,[H.w(u,0)])},
$au:function(){return[W.a0]},
$ae:function(){return[W.a0]},
$ab:function(){return[W.a0]}}
W.a0.prototype={
gcY:function(a){return new W.iv(a,a.children)},
gcZ:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a5()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a5()
if(r<0)r=-r*0
return new P.aj(u,t,s,r,[P.a9])},
i:function(a){return a.localName},
$ia0:1}
W.m.prototype={$im:1}
W.f.prototype={
h1:function(a,b,c,d){H.l(c,{func:1,args:[W.m]})
if(c!=null)this.e5(a,b,c,!1)},
e5:function(a,b,c,d){return a.addEventListener(b,H.c_(H.l(c,{func:1,args:[W.m]}),1),!1)},
$if:1}
W.aN.prototype={$iaN:1}
W.fi.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aN]},
$au:function(){return[W.aN]},
$ie:1,
$ae:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aB:function(){return[W.aN]}}
W.fj.prototype={
gk:function(a){return a.length}}
W.fn.prototype={
gk:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.fr.prototype={
gk:function(a){return a.length}}
W.bJ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.H]},
$au:function(){return[W.H]},
$ie:1,
$ae:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$ibJ:1,
$aB:function(){return[W.H]}}
W.bp.prototype={$ibp:1,
gd0:function(a){return a.data}}
W.cl.prototype={$icl:1}
W.aR.prototype={$iaR:1}
W.fC.prototype={
i:function(a){return String(a)}}
W.fU.prototype={
gk:function(a){return a.length}}
W.fV.prototype={
j:function(a,b){return P.bh(a.get(H.Q(b)))},
G:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bh(t.value[1]))}},
gar:function(a){var u=H.c([],[P.n])
this.G(a,new W.fW(u))
return u},
gk:function(a){return a.size},
$aad:function(){return[P.n,null]},
$iF:1,
$aF:function(){return[P.n,null]}}
W.fW.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.fX.prototype={
j:function(a,b){return P.bh(a.get(H.Q(b)))},
G:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bh(t.value[1]))}},
gar:function(a){var u=H.c([],[P.n])
this.G(a,new W.fY(u))
return u},
gk:function(a){return a.size},
$aad:function(){return[P.n,null]},
$iF:1,
$aF:function(){return[P.n,null]}}
W.fY.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.aU.prototype={$iaU:1}
W.fZ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aU]},
$au:function(){return[W.aU]},
$ie:1,
$ae:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aB:function(){return[W.aU]}}
W.aa.prototype={$iaa:1}
W.iu.prototype={
gX:function(a){var u=this.a.childNodes
return new W.d9(u,u.length,[H.cT(C.F,u,"B",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$au:function(){return[W.H]},
$ae:function(){return[W.H]},
$ab:function(){return[W.H]}}
W.H.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.dM(a):u},
$iH:1}
W.cr.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.H]},
$au:function(){return[W.H]},
$ie:1,
$ae:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aB:function(){return[W.H]}}
W.aV.prototype={$iaV:1,
gk:function(a){return a.length}}
W.hb.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aV]},
$au:function(){return[W.aV]},
$ie:1,
$ae:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aB:function(){return[W.aV]}}
W.hk.prototype={
j:function(a,b){return P.bh(a.get(H.Q(b)))},
G:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bh(t.value[1]))}},
gar:function(a){var u=H.c([],[P.n])
this.G(a,new W.hl(u))
return u},
gk:function(a){return a.size},
$aad:function(){return[P.n,null]},
$iF:1,
$aF:function(){return[P.n,null]}}
W.hl.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.hn.prototype={
gk:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.hv.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aX]},
$au:function(){return[W.aX]},
$ie:1,
$ae:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aB:function(){return[W.aX]}}
W.aY.prototype={$iaY:1}
W.hw.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aY]},
$au:function(){return[W.aY]},
$ie:1,
$ae:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aB:function(){return[W.aY]}}
W.aZ.prototype={$iaZ:1,
gk:function(a){return a.length}}
W.hA.prototype={
j:function(a,b){return a.getItem(H.Q(b))},
G:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.n,P.n]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gar:function(a){var u=H.c([],[P.n])
this.G(a,new W.hB(u))
return u},
gk:function(a){return a.length},
$aad:function(){return[P.n,P.n]},
$iF:1,
$aF:function(){return[P.n,P.n]}}
W.hB.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:35}
W.aC.prototype={$iaC:1}
W.b_.prototype={$ib_:1}
W.aD.prototype={$iaD:1}
W.hI.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aD]},
$au:function(){return[W.aD]},
$ie:1,
$ae:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$aB:function(){return[W.aD]}}
W.hJ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b_]},
$au:function(){return[W.b_]},
$ie:1,
$ae:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aB:function(){return[W.b_]}}
W.hN.prototype={
gk:function(a){return a.length}}
W.b1.prototype={$ib1:1}
W.aE.prototype={$iaE:1}
W.hQ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b1]},
$au:function(){return[W.b1]},
$ie:1,
$ae:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aB:function(){return[W.b1]}}
W.hR.prototype={
gk:function(a){return a.length}}
W.by.prototype={}
W.i5.prototype={
i:function(a){return String(a)}}
W.il.prototype={
gk:function(a){return a.length}}
W.b3.prototype={
ghf:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.am("deltaY is not supported"))},
ghe:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.am("deltaX is not supported"))},
$ib3:1}
W.cE.prototype={
fD:function(a,b){return a.requestAnimationFrame(H.c_(H.l(b,{func:1,ret:-1,args:[P.a9]}),1))},
ej:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iw.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.N]},
$au:function(){return[W.N]},
$ie:1,
$ae:function(){return[W.N]},
$ib:1,
$ab:function(){return[W.N]},
$aB:function(){return[W.N]}}
W.dV.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.W(b)
if(!u.$iaj)return!1
return a.left===u.gbc(b)&&a.top===u.gbe(b)&&a.width===u.gax(b)&&a.height===u.gaq(b)},
gF:function(a){return W.ks(C.d.gF(a.left),C.d.gF(a.top),C.d.gF(a.width),C.d.gF(a.height))},
gaq:function(a){return a.height},
gax:function(a){return a.width}}
W.iJ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aO]},
$au:function(){return[W.aO]},
$ie:1,
$ae:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aB:function(){return[W.aO]}}
W.eb.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.H]},
$au:function(){return[W.H]},
$ie:1,
$ae:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aB:function(){return[W.H]}}
W.iU.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aZ]},
$au:function(){return[W.aZ]},
$ie:1,
$ae:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aB:function(){return[W.aZ]}}
W.iV.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aC]},
$au:function(){return[W.aC]},
$ie:1,
$ae:function(){return[W.aC]},
$ib:1,
$ab:function(){return[W.aC]},
$aB:function(){return[W.aC]}}
W.ix.prototype={}
W.jD.prototype={}
W.iy.prototype={}
W.iz.prototype={
$1:function(a){return this.a.$1(H.k(a,"$im"))},
$S:36}
W.B.prototype={
gX:function(a){return new W.d9(a,this.gk(a),[H.cT(this,a,"B",0)])}}
W.d9.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scE(J.eK(u.a,t))
u.c=t
return!0}u.scE(null)
u.c=s
return!1},
gP:function(a){return this.d},
scE:function(a){this.d=H.D(a,H.w(this,0))},
$iaP:1}
W.dU.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.cL.prototype={}
W.cM.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.eo.prototype={}
W.er.prototype={}
W.es.prototype={}
W.cN.prototype={}
W.cO.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
P.ey.prototype={$ibp:1,
gd0:function(a){return this.a}}
P.j6.prototype={
$2:function(a,b){this.a[a]=b},
$S:17}
P.fk.prototype={
gbp:function(){var u=this.b,t=H.aq(u,"u",0),s=W.a0
return new H.fG(new H.im(u,H.l(new P.fl(),{func:1,ret:P.a5,args:[t]}),[t]),H.l(new P.fm(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.c7(this.gbp().a)},
j:function(a,b){var u=this.gbp()
return u.b.$1(J.jW(u.a,b))},
gX:function(a){var u=P.k2(this.gbp(),!1,W.a0)
return new J.af(u,u.length,[H.w(u,0)])},
$au:function(){return[W.a0]},
$ae:function(){return[W.a0]},
$ab:function(){return[W.a0]}}
P.fl.prototype={
$1:function(a){return!!J.W(H.k(a,"$iH")).$ia0},
$S:25}
P.fm.prototype={
$1:function(a){return H.p(H.k(a,"$iH"),"$ia0")},
$S:26}
P.iO.prototype={
gc5:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.C(t)
return H.D(u+t,H.w(this,0))},
gcW:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.C(t)
return H.D(u+t,H.w(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.i(u.a)+", "+H.i(u.b)+") "+H.i(u.c)+" x "+H.i(u.d)},
n:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.W(b)
if(!!u.$iaj){t=p.a
if(t==u.gbc(b)){s=p.b
if(s==u.gbe(b)){r=p.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.C(r)
q=H.w(p,0)
if(H.D(t+r,q)===u.gc5(b)){t=p.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.C(t)
u=H.D(s+t,q)===u.gcW(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gF:function(a){var u,t=this,s=t.a,r=J.bE(s),q=t.b,p=J.bE(q),o=t.c
if(typeof s!=="number")return s.B()
if(typeof o!=="number")return H.C(o)
u=H.w(t,0)
o=C.e.gF(H.D(s+o,u))
s=t.d
if(typeof q!=="number")return q.B()
if(typeof s!=="number")return H.C(s)
u=C.e.gF(H.D(q+s,u))
return P.lU(P.iL(P.iL(P.iL(P.iL(0,r),p),o),u))}}
P.aj.prototype={
gbc:function(a){return this.a},
gbe:function(a){return this.b},
gax:function(a){return this.c},
gaq:function(a){return this.d}}
P.b6.prototype={$ib6:1}
P.fy.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$au:function(){return[P.b6]},
$ie:1,
$ae:function(){return[P.b6]},
$ib:1,
$ab:function(){return[P.b6]},
$aB:function(){return[P.b6]}}
P.bb.prototype={$ibb:1}
P.h7.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$au:function(){return[P.bb]},
$ie:1,
$ae:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$aB:function(){return[P.bb]}}
P.hd.prototype={
gk:function(a){return a.length}}
P.hG.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$au:function(){return[P.n]},
$ie:1,
$ae:function(){return[P.n]},
$ib:1,
$ab:function(){return[P.n]},
$aB:function(){return[P.n]}}
P.o.prototype={
gcY:function(a){return new P.fk(a,new W.iu(a))}}
P.be.prototype={$ibe:1}
P.hS.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$au:function(){return[P.be]},
$ie:1,
$ae:function(){return[P.be]},
$ib:1,
$ab:function(){return[P.be]},
$aB:function(){return[P.be]}}
P.e4.prototype={}
P.e5.prototype={}
P.ee.prototype={}
P.ef.prototype={}
P.ep.prototype={}
P.eq.prototype={}
P.ew.prototype={}
P.ex.prototype={}
P.eR.prototype={
gk:function(a){return a.length}}
P.eS.prototype={
j:function(a,b){return P.bh(a.get(H.Q(b)))},
G:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bh(t.value[1]))}},
gar:function(a){var u=H.c([],[P.n])
this.G(a,new P.eT(u))
return u},
gk:function(a){return a.size},
$aad:function(){return[P.n,null]},
$iF:1,
$aF:function(){return[P.n,null]}}
P.eT.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
P.eU.prototype={
gk:function(a){return a.length}}
P.bF.prototype={}
P.h8.prototype={
gk:function(a){return a.length}}
P.dT.prototype={}
P.cY.prototype={$icY:1}
P.du.prototype={$idu:1}
P.bQ.prototype={
hS:function(a,b,c,d,e,f,g){var u,t=J.W(g)
if(!!t.$ibp)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.mv(g))
return}if(!!t.$icl)t=!0
else t=!1
if(t){this.fR(a,b,c,d,e,f,g)
return}throw H.h(P.l7("Incorrect number or type of arguments"))},
fR:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
W:function(a,b,c){return a.uniform1f(b,c)},
bg:function(a,b,c){return a.uniform1i(b,c)},
T:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dE:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
dF:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
dG:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibQ:1}
P.dv.prototype={$idv:1}
P.dD.prototype={$idD:1}
P.dI.prototype={$idI:1}
P.hx.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return P.bh(a.item(b))},
C:function(a,b){return this.j(a,b)},
$au:function(){return[[P.F,,,]]},
$ie:1,
$ae:function(){return[[P.F,,,]]},
$ib:1,
$ab:function(){return[[P.F,,,]]},
$aB:function(){return[[P.F,,,]]}}
P.el.prototype={}
P.em.prototype={}
O.T.prototype={
bi:function(a){var u=this
u.sew(H.c([],[a]))
u.scJ(null)
u.scG(null)
u.scK(null)},
cb:function(a,b,c){var u=this,t=H.aq(u,"T",0)
H.l(b,{func:1,ret:P.a5,args:[[P.e,t]]})
t={func:1,ret:-1,args:[P.r,[P.e,t]]}
H.l(a,t)
H.l(c,t)
u.scJ(b)
u.scG(a)
u.scK(c)},
aI:function(a,b){return this.cb(a,null,b)},
aP:function(a){var u
H.j(a,"$ie",[H.aq(this,"T",0)],"$ae")
u=this.b
if(u!=null)return u.$1(a)
return!0},
bA:function(a,b){var u
H.j(b,"$ie",[H.aq(this,"T",0)],"$ae")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gX:function(a){var u=this.a
return new J.af(u,u.length,[H.w(u,0)])},
C:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aq(s,"T",0)
H.D(b,r)
r=[r]
if(H.z(s.aP(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.bA(t,H.c([b],r))}},
aR:function(a,b){var u,t,s=this
H.j(b,"$ie",[H.aq(s,"T",0)],"$ae")
if(H.z(s.aP(b))){u=s.a
t=u.length
C.a.aR(u,b)
s.bA(t,b)}},
l:function(a,b,c){var u,t,s,r=this,q=H.aq(r,"T",0)
H.D(c,q)
u=r.a
if(b>=u.length)return H.d(u,b)
t=u[b]
if(!J.R(t,c)&&H.z(r.aP(H.c([c],[q])))){C.a.l(r.a,b,c)
u=[q]
q=H.j(H.c([t],u),"$ie",[q],"$ae")
s=r.d
if(s!=null)s.$2(b,q)
r.bA(b,H.c([c],u))}},
sew:function(a){this.a=H.j(a,"$ib",[H.aq(this,"T",0)],"$ab")},
scJ:function(a){this.b=H.l(a,{func:1,ret:P.a5,args:[[P.e,H.aq(this,"T",0)]]})},
scG:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.r,[P.e,H.aq(this,"T",0)]]})},
scK:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.r,[P.e,H.aq(this,"T",0)]]})},
$ie:1}
O.cn.prototype={
gk:function(a){return this.a.length},
gm:function(){var u=this.b
return u==null?this.b=D.J():u},
az:function(){var u=this.b
if(u!=null)u.u(null)},
gR:function(a){var u=this.a
if(u.length>0)return C.a.gbX(u)
else return V.bu()},
bd:function(a){var u=this.a
if(a==null)C.a.h(u,V.bu())
else C.a.h(u,a)
this.az()},
at:function(){var u=this.a
if(u.length>0){u.pop()
this.az()}},
sbq:function(a){this.a=H.j(a,"$ib",[V.a7],"$ab")}}
E.eV.prototype={}
E.ah.prototype={
scd:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().L(0,s.gdu())
u=s.c
if(u!=null)u.gm().h(0,s.gdu())
t=new D.E("shape",r,s.c,[F.dw])
t.b=!0
s.as(t)}},
sdn:function(a){var u,t,s=this
if(!J.R(s.r,a)){u=s.r
if(u!=null)u.gm().L(0,s.gds())
if(a!=null)a.gm().h(0,s.gds())
s.r=a
t=new D.E("mover",u,a,[U.a2])
t.b=!0
s.as(t)}},
ad:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.a:null
if(!J.R(q,s.x)){u=s.x
s.x=q
t=new D.E("matrix",u,q,[V.a7])
t.b=!0
s.as(t)}for(r=s.y.a,r=new J.af(r,r.length,[H.w(r,0)]);r.A();)r.d.ad(0,b)},
a1:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gR(s))
else C.a.h(s.a,r.p(0,s.gR(s)))
s.az()
a.c4(t.f)
s=a.dy
u=(s&&C.a).gbX(s)
if(u!=null&&t.d!=null)u.dz(a,t)
for(s=t.y.a,s=new J.af(s,s.length,[H.w(s,0)]);s.A();)s.d.a1(a)
a.c3()
a.dx.at()},
gm:function(){var u=this.z
return u==null?this.z=D.J():u},
as:function(a){var u=this.z
if(u!=null)u.u(a)},
Z:function(){return this.as(null)},
dv:function(a){H.k(a,"$iv")
this.e=null
this.as(a)},
hD:function(){return this.dv(null)},
dt:function(a){this.as(H.k(a,"$iv"))},
hC:function(){return this.dt(null)},
dr:function(a){this.as(H.k(a,"$iv"))},
hz:function(){return this.dr(null)},
hy:function(a,b){var u,t,s,r,q,p,o
H.j(b,"$ie",[E.ah],"$ae")
for(u=b.length,t=this.gdq(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.t)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.aM()
o.sY(null)
o.sag(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sY(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.Z()},
hB:function(a,b){var u,t,s,r,q
H.j(b,"$ie",[E.ah],"$ae")
for(u=b.length,t=this.gdq(),s=0;s<b.length;b.length===u||(0,H.t)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.aM()
q.sY(null)
q.sag(null)
q.c=null
q.d=0
r.z=q}q.L(0,t)}}this.Z()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sdU:function(a,b){this.y=H.j(b,"$iT",[E.ah],"$aT")},
$ibM:1}
E.hg.prototype={
dR:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.at(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cn()
t=[V.a7]
u.sbq(H.c([],t))
u.b=null
u.gm().h(0,new E.hh(s))
s.cy=u
u=new O.cn()
u.sbq(H.c([],t))
u.b=null
u.gm().h(0,new E.hi(s))
s.db=u
u=new O.cn()
u.sbq(H.c([],t))
u.b=null
u.gm().h(0,new E.hj(s))
s.dx=u
s.sfQ(H.c([],[O.bx]))
u=s.dy;(u&&C.a).h(u,null)
s.sfL(new H.X([P.n,A.cv]))},
ghM:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gR(s)
u=t.db
u=t.z=s.p(0,u.gR(u))
s=u}return s},
c4:function(a){var u=this.dy,t=a==null?(u&&C.a).gbX(u):a;(u&&C.a).h(u,t)},
c3:function(){var u=this.dy
if(u.length>1)u.pop()},
cU:function(a){var u=a.b
if(u.length===0)throw H.h(P.x("May not cache a shader with no name."))
if(this.fr.d_(0,u))throw H.h(P.x('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.l(0,u,a)},
sfQ:function(a){this.dy=H.j(a,"$ib",[O.bx],"$ab")},
sfL:function(a){this.fr=H.j(a,"$iF",[P.n,A.cv],"$aF")}}
E.hh.prototype={
$1:function(a){var u
H.k(a,"$iv")
u=this.a
u.ch=u.z=null},
$S:9}
E.hi.prototype={
$1:function(a){var u
H.k(a,"$iv")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:9}
E.hj.prototype={
$1:function(a){var u
H.k(a,"$iv")
u=this.a
u.cx=u.ch=null},
$S:9}
E.dE.prototype={
cn:function(a){H.k(a,"$iv")
this.dA()},
cm:function(){return this.cn(null)},
gho:function(){var u,t=this,s=Date.now(),r=C.e.a0(P.k0(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.at(s,!1)
return u/r},
cN:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.p()
if(typeof r!=="number")return H.C(r)
u=C.d.bU(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.p()
t=C.d.bU(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kk(C.i,s.ghO())}},
dA:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.l(new E.hM(this),{func:1,ret:-1,args:[P.a9]})
C.q.ej(u)
C.q.fD(u,W.kz(t,P.a9))}},
hN:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.cN()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.at(r,!1)
s.y=P.k0(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.az()
r=s.db
C.a.sk(r.a,0)
r.az()
r=s.dx
C.a.sk(r.a,0)
r.az()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.a1(p.e)}}catch(q){u=H.bC(q)
t=H.c2(q)
P.jT("Error: "+H.i(u))
P.jT("Stack: "+H.i(t))
throw H.h(u)}}}
E.hM.prototype={
$1:function(a){var u
H.kJ(a)
u=this.a
if(u.ch){u.ch=!1
u.hN()}},
$S:30}
Z.dQ.prototype={$imX:1}
Z.cZ.prototype={
U:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.bC(s)
t=P.x('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.h(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.dR.prototype={$imY:1}
Z.ca.prototype={
ap:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
U:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].U(a)},
aw:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a1:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.n],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.ar(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.q(p,", ")+"\nAttrs:   "+C.a.q(r,", ")},
ser:function(a){this.b=H.j(a,"$ib",[Z.bq],"$ab")},
$in3:1}
Z.bq.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bO(this.c)+"'")+"]"}}
Z.bf.prototype={
gce:function(a){var u=this.a,t=(u&$.aG().a)!==0?3:0
if((u&$.bk().a)!==0)t+=3
if((u&$.bj().a)!==0)t+=3
if((u&$.bD().a)!==0)t+=2
if((u&$.bl().a)!==0)t+=3
if((u&$.cU().a)!==0)t+=3
if((u&$.cV().a)!==0)t+=4
if((u&$.c5().a)!==0)++t
return(u&$.bi().a)!==0?t+4:t},
h4:function(a){var u,t=$.aG(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bD()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cU()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cV()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c5()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bi()
if((s&t.a)!==0)if(u===a)return t
return $.l3()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bf))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.n]),t=this.a
if((t&$.aG().a)!==0)C.a.h(u,"Pos")
if((t&$.bk().a)!==0)C.a.h(u,"Norm")
if((t&$.bj().a)!==0)C.a.h(u,"Binm")
if((t&$.bD().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bl().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cU().a)!==0)C.a.h(u,"Clr3")
if((t&$.cV().a)!==0)C.a.h(u,"Clr4")
if((t&$.c5().a)!==0)C.a.h(u,"Weight")
if((t&$.bi().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.q(u,"|")}}
D.eY.prototype={}
D.aM.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.v]}
H.l(b,u)
if(this.a==null)this.sY(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
L:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[D.v]})
u=s.a
u=u==null?null:C.a.ah(u,b)
if(u===!0){u=s.a
t=(u&&C.a).L(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.ah(u,b)
if(u===!0){u=s.b
t=(u&&C.a).L(u,b)||t}return t},
u:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.v()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.G(P.k2(u,!0,{func:1,ret:-1,args:[D.v]}),new D.fg(q))
u=r.b
if(u!=null){r.sag(H.c([],[{func:1,ret:-1,args:[D.v]}]))
C.a.G(u,new D.fh(q))}return!0},
hk:function(){return this.u(null)},
au:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.u(u)}}},
sY:function(a){this.a=H.j(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")},
sag:function(a){this.b=H.j(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")}}
D.fg.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:15}
D.fh.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:15}
D.v.prototype={}
D.br.prototype={}
D.bs.prototype={}
D.E.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.d_.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d_))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.de.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.de))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.fx.prototype={
hI:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
hE:function(a){this.c=a.b
this.d.L(0,a.a)
return!1},
sfz:function(a){this.d=H.j(a,"$ikh",[P.r],"$akh")}}
X.di.prototype={}
X.fD.prototype={
aN:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.p()
u=b.b
t=q.ch
if(typeof u!=="number")return u.p()
s=new V.a3(o.a+n*m,o.b+u*t)
t=q.a.gaF()
r=new X.b9(a,V.bc(),q.x,t,s)
r.b=!0
q.z=new P.at(p,!1)
q.x=s
return r},
c2:function(a,b){this.r=a.a
return!1},
b_:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dJ()
if(typeof u!=="number")return u.ai()
this.r=(u&~t)>>>0
return!1},
aZ:function(a,b){var u=this.d
if(u==null)return!1
u.u(this.aN(a,b))
return!0},
hJ:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaF()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.p()
q=a.b
p=o.cy
if(typeof q!=="number")return q.p()
t=new X.co(new V.O(s*r,q*p),u,t)
t.b=!0
n.u(t)
return!0},
f3:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.di(c,r.a.gaF(),b)
s.b=!0
t.u(s)
r.y=new P.at(u,!1)
r.x=V.bc()}}
X.ao.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ao))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.z(this.b)?"Alt+":""
return u+(H.z(this.c)?"Shift+":"")}}
X.b9.prototype={}
X.h_.prototype={
bn:function(a,b,c){var u=this,t=new P.at(Date.now(),!1),s=u.a.gaF(),r=new X.b9(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c2:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.u(this.bn(a,b,!0))
return!0},
b_:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dJ()
if(typeof t!=="number")return t.ai()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.u(u.bn(a,b,!0))
return!0},
aZ:function(a,b){var u=this.d
if(u==null)return!1
u.u(this.bn(a,b,!1))
return!0},
hK:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaF()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.p()
r=a.b
q=p.ch
if(typeof r!=="number")return r.p()
u=new X.co(new V.O(t*s,r*q),u,b)
u.b=!0
o.u(u)
return!0},
gd2:function(){var u=this.b
return u==null?this.b=D.J():u},
gc8:function(){var u=this.c
return u==null?this.c=D.J():u},
gdm:function(){var u=this.d
return u==null?this.d=D.J():u}}
X.co.prototype={}
X.hc.prototype={}
X.dG.prototype={}
X.hP.prototype={
aN:function(a,b){var u,t,s,r,q=this
H.j(a,"$ib",[V.a3],"$ab")
u=new P.at(Date.now(),!1)
t=a.length>0?a[0]:V.bc()
s=q.a.gaF()
r=new X.dG(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
hH:function(a){var u
H.j(a,"$ib",[V.a3],"$ab")
u=this.b
if(u==null)return!1
u.u(this.aN(a,!0))
return!0},
hF:function(a){var u
H.j(a,"$ib",[V.a3],"$ab")
u=this.c
if(u==null)return!1
u.u(this.aN(a,!0))
return!0},
hG:function(a){var u
H.j(a,"$ib",[V.a3],"$ab")
u=this.d
if(u==null)return!1
u.u(this.aN(a,!1))
return!0}}
X.dL.prototype={
gaF:function(){var u=this.a,t=C.h.gcZ(u).c
t.toString
u=C.h.gcZ(u).d
u.toString
return V.hf(0,0,t,u)},
cA:function(a){var u=a.keyCode,t=H.z(a.ctrlKey)||H.z(a.metaKey)
return new X.de(u,new X.ao(t,a.altKey,a.shiftKey))},
aE:function(a){var u=this.b,t=H.z(a.ctrlKey)||H.z(a.metaKey)
u.c=new X.ao(t,a.altKey,a.shiftKey)},
bG:function(a){var u=this.b,t=H.z(a.ctrlKey)||H.z(a.metaKey)
u.c=new X.ao(t,a.altKey,a.shiftKey)},
an:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.E()
u=t.top
if(typeof r!=="number")return r.E()
return new V.a3(s-q,r-u)},
aQ:function(a){return new V.O(a.movementX,a.movementY)},
bC:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a3])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
q=C.d.ac(r.pageX)
C.d.ac(r.pageY)
p=o.left
C.d.ac(r.pageX)
C.a.h(n,new V.a3(q-p,C.d.ac(r.pageY)-o.top))}return n},
ak:function(a){var u=a.buttons,t=H.z(a.ctrlKey)||H.z(a.metaKey)
return new X.d_(u,new X.ao(t,a.altKey,a.shiftKey))},
br:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.E()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.E()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eY:function(a){this.f=!0},
eM:function(a){this.f=!1},
eS:function(a){H.k(a,"$iaa")
if(H.z(this.f)&&this.br(a))a.preventDefault()},
f1:function(a){var u
H.k(a,"$iaR")
if(!H.z(this.f))return
u=this.cA(a)
this.b.hI(u)},
f_:function(a){var u
H.k(a,"$iaR")
if(!H.z(this.f))return
u=this.cA(a)
this.b.hE(u)},
f5:function(a){var u,t,s,r,q=this
H.k(a,"$iaa")
u=q.a
u.focus()
q.f=!0
q.aE(a)
if(H.z(q.x)){t=q.ak(a)
s=q.aQ(a)
if(q.d.c2(t,s))a.preventDefault()
return}if(H.z(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ak(a)
r=q.an(a)
if(q.c.c2(t,r))a.preventDefault()},
f9:function(a){var u,t,s,r=this
H.k(a,"$iaa")
r.aE(a)
u=r.ak(a)
if(H.z(r.x)){t=r.aQ(a)
if(r.d.b_(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.an(a)
if(r.c.b_(u,s))a.preventDefault()},
eW:function(a){var u,t,s,r=this
H.k(a,"$iaa")
if(!r.br(a)){r.aE(a)
u=r.ak(a)
if(H.z(r.x)){t=r.aQ(a)
if(r.d.b_(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.an(a)
if(r.c.b_(u,s))a.preventDefault()}},
f7:function(a){var u,t,s,r=this
H.k(a,"$iaa")
r.aE(a)
u=r.ak(a)
if(H.z(r.x)){t=r.aQ(a)
if(r.d.aZ(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.an(a)
if(r.c.aZ(u,s))a.preventDefault()},
eU:function(a){var u,t,s,r=this
H.k(a,"$iaa")
if(!r.br(a)){r.aE(a)
u=r.ak(a)
if(H.z(r.x)){t=r.aQ(a)
if(r.d.aZ(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.an(a)
if(r.c.aZ(u,s))a.preventDefault()}},
fb:function(a){var u,t,s=this
H.k(a,"$ib3")
s.aE(a)
u=new V.O((a&&C.p).ghe(a),C.p.ghf(a)).t(0,180)
if(H.z(s.x)){if(s.d.hJ(u))a.preventDefault()
return}if(H.z(s.r))return
t=s.an(a)
if(s.c.hK(u,t))a.preventDefault()},
fd:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ak(s.y)
t=s.an(s.y)
s.d.f3(u,t,r)}},
fs:function(a){var u,t=this
H.k(a,"$iaE")
t.a.focus()
t.f=!0
t.bG(a)
u=t.bC(a)
if(t.e.hH(u))a.preventDefault()},
fn:function(a){var u
H.k(a,"$iaE")
this.bG(a)
u=this.bC(a)
if(this.e.hF(u))a.preventDefault()},
fp:function(a){var u
H.k(a,"$iaE")
this.bG(a)
u=this.bC(a)
if(this.e.hG(u))a.preventDefault()},
sek:function(a){this.z=H.j(a,"$ib",[[P.cx,P.M]],"$ab")}}
D.b5.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.J():u},
aj:function(a){var u
H.k(a,"$iv")
u=this.r
if(u!=null)u.u(a)},
dW:function(){return this.aj(null)},
$ia6:1,
$ibM:1}
D.a6.prototype={$ibM:1}
D.df.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.J():u},
aj:function(a){var u=this.x
if(u!=null)u.u(a)},
cI:function(a){var u
H.k(a,"$iv")
u=this.y
if(u!=null)u.u(a)},
f2:function(){return this.cI(null)},
ff:function(a){var u,t,s
H.j(a,"$ie",[D.a6],"$ae")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.t)(a),++t){s=a[t]
if(s==null||this.ed(s))return!1}return!0},
eE:function(a,b){var u,t,s,r,q,p,o,n=D.a6
H.j(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gcH(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.t)(b),++q){p=H.k(b[q],"$ia6")
if(p instanceof D.b5)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.aM()
o.sY(null)
o.sag(null)
o.c=null
o.d=0
p.r=o}H.l(t,s)
if(o.a==null)o.sY(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.br([n])
n.b=!0
this.aj(n)},
fj:function(a,b){var u,t,s,r,q,p=D.a6
H.j(b,"$ie",[p],"$ae")
for(u=b.length,t=this.gcH(),s=0;s<b.length;b.length===u||(0,H.t)(b),++s){r=H.k(b[s],"$ia6")
if(r instanceof D.b5)C.a.L(this.e,r)
q=r.r
if(q==null){q=new D.aM()
q.sY(null)
q.sag(null)
q.c=null
q.d=0
r.r=q}q.L(0,t)}p=new D.bs([p])
p.b=!0
this.aj(p)},
ed:function(a){var u=C.a.ah(this.e,a)
return u},
sei:function(a){this.e=H.j(a,"$ib",[D.b5],"$ab")},
sfu:function(a){this.f=H.j(a,"$ib",[D.dt],"$ab")},
sfO:function(a){this.r=H.j(a,"$ib",[D.dA],"$ab")},
$ae:function(){return[D.a6]},
$aT:function(){return[D.a6]}}
D.dt.prototype={$ia6:1,$ibM:1}
D.dA.prototype={$ia6:1,$ibM:1}
V.Z.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
V.as.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.as))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+", "+V.P(u.d,3,0)+"]"}}
V.ff.prototype={}
V.dm.prototype={
a4:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.A])
return t},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dm))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.A],o=V.c1(H.c([q.a,q.d,q.r],p),3,0),n=V.c1(H.c([q.b,q.e,q.x],p),3,0),m=V.c1(H.c([q.c,q.f,q.y],p),3,0)
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
V.a7.prototype={
a4:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.A])
return t},
bW:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a1.f,a4=a1.b,a5=a1.e,a6=a2*a3-a4*a5,a7=a1.r,a8=a1.c,a9=a2*a7-a8*a5,b0=a1.x,b1=a1.d
if(typeof b1!=="number")return b1.p()
u=a2*b0-b1*a5
t=a4*a7-a8*a3
s=a4*b0-b1*a3
r=a8*b0-b1*a7
q=a1.y
p=a1.cy
o=a1.z
n=a1.cx
m=q*p-o*n
l=a1.db
k=a1.Q
j=q*l-k*n
i=a1.dx
h=a1.ch
g=q*i-h*n
f=o*l-k*p
e=o*i-h*p
d=k*i-h*l
c=a6*d-a9*e+u*f+t*g-s*j+r*m
if(Math.abs(c-0)<$.L().a)return V.bu()
b=1/c
a=-a5
a0=-n
return V.aT((a3*d-a7*e+b0*f)*b,(-a4*d+a8*e-b1*f)*b,(p*r-l*s+i*t)*b,(-o*r+k*s-h*t)*b,(a*d+a7*g-b0*j)*b,(a2*d-a8*g+b1*j)*b,(a0*r+l*u-i*a9)*b,(q*r-k*u+h*a9)*b,(a5*e-a3*g+b0*m)*b,(-a2*e+a4*g-b1*m)*b,(n*s-p*u+i*a6)*b,(-q*s+o*u-h*a6)*b,(a*f+a3*j-a7*m)*b,(a2*f-a4*j+a8*m)*b,(a0*t+p*a9-l*a6)*b,(q*t-o*a9+k*a6)*b)},
p:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.a,a5=b3.a,a6=a3.b,a7=b3.e,a8=a3.c,a9=b3.y,b0=a3.d,b1=b3.cx
if(typeof b0!=="number")return b0.p()
u=b3.b
t=b3.f
s=b3.z
r=b3.cy
q=b3.c
p=b3.r
o=b3.Q
n=b3.db
m=b3.d
if(typeof m!=="number")return H.C(m)
l=b3.x
k=b3.ch
j=b3.dx
i=a3.e
h=a3.f
g=a3.r
f=a3.x
e=a3.y
d=a3.z
c=a3.Q
b=a3.ch
a=a3.cx
a0=a3.cy
a1=a3.db
a2=a3.dx
return V.aT(a4*a5+a6*a7+a8*a9+b0*b1,a4*u+a6*t+a8*s+b0*r,a4*q+a6*p+a8*o+b0*n,a4*m+a6*l+a8*k+b0*j,i*a5+h*a7+g*a9+f*b1,i*u+h*t+g*s+f*r,i*q+h*p+g*o+f*n,i*m+h*l+g*k+f*j,e*a5+d*a7+c*a9+b*b1,e*u+d*t+c*s+b*r,e*q+d*p+c*o+b*n,e*m+d*l+c*k+b*j,a*a5+a0*a7+a1*a9+a2*b1,a*u+a0*t+a1*s+a2*r,a*q+a0*p+a1*o+a2*n,a*m+a0*l+a1*k+a2*j)},
bf:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.I(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
c7:function(a){var u=this,t=a.a,s=a.b,r=a.c,q=u.d
if(typeof q!=="number")return H.C(q)
return new V.ai(u.a*t+u.b*s+u.c*r+q,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.L()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
if(!(Math.abs(b.c-q.c)<s))return!1
u=b.d
r=q.d
t.toString
if(typeof u!=="number")return u.E()
if(typeof r!=="number")return H.C(r)
if(!(Math.abs(u-r)<s))return!1
if(!(Math.abs(b.e-q.e)<s))return!1
if(!(Math.abs(b.f-q.f)<s))return!1
if(!(Math.abs(b.r-q.r)<s))return!1
if(!(Math.abs(b.x-q.x)<s))return!1
if(!(Math.abs(b.y-q.y)<s))return!1
if(!(Math.abs(b.z-q.z)<s))return!1
if(!(Math.abs(b.Q-q.Q)<s))return!1
if(!(Math.abs(b.ch-q.ch)<s))return!1
if(!(Math.abs(b.cx-q.cx)<s))return!1
if(!(Math.abs(b.cy-q.cy)<s))return!1
if(!(Math.abs(b.db-q.db)<s))return!1
if(!(Math.abs(b.dx-q.dx)<s))return!1
return!0},
i:function(a){return this.H()},
v:function(a){var u,t,s,r,q,p=this,o=[P.A],n=V.c1(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.c1(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.c1(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.c1(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
H:function(){return this.v("")}}
V.a3.prototype={
E:function(a,b){return new V.a3(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}}
V.ai.prototype={
E:function(a,b){return new V.ai(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ai))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
V.bd.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bd))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+", "+V.P(u.d,3,0)+"]"}}
V.cu.prototype={
ga3:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cu))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+", "+V.P(u.d,3,0)+"]"}}
V.O.prototype={
bY:function(a){return Math.sqrt(this.w(this))},
w:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.C(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.C(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.p()
u=this.b
if(typeof u!=="number")return u.p()
return new V.O(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.L().a){u=$.ko
return u==null?$.ko=new V.O(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.O(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=this.a
s=$.L()
s.toString
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.C(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.C(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}}
V.I.prototype={
bY:function(a){return Math.sqrt(this.w(this))},
w:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bZ:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.I(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aW:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.I(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.I(this.a+b.a,this.b+b.b,this.c+b.c)},
K:function(a){return new V.I(-this.a,-this.b,-this.c)},
t:function(a,b){if(Math.abs(b-0)<$.L().a)return V.dP()
return new V.I(this.a/b,this.b/b,this.c/b)},
dj:function(){var u=$.L().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.I))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
U.f_.prototype={
bj:function(a){var u=V.mW(a,this.c,this.b)
return u},
gm:function(){var u=this.y
return u==null?this.y=D.J():u},
J:function(a){var u=this.y
if(u!=null)u.u(a)},
sc9:function(a,b){},
sc_:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.L().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bj(u)}s=new D.E("maximumLocation",s,t.b,[P.A])
s.b=!0
t.J(s)}},
sc1:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.L().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bj(u)}s=new D.E("minimumLocation",s,t.c,[P.A])
s.b=!0
t.J(s)}},
sa2:function(a,b){var u,t=this
b=t.bj(b)
u=t.d
if(!(Math.abs(u-b)<$.L().a)){t.d=b
u=new D.E("location",u,b,[P.A])
u.b=!0
t.J(u)}},
sc0:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.L().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.E("maximumVelocity",r,a,[P.A])
r.b=!0
s.J(r)}},
sM:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.L().a)){u.f=a
t=new D.E("velocity",t,a,[P.A])
t.b=!0
u.J(t)}},
sbN:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.L().a)){this.x=a
u=new D.E("dampening",u,a,[P.A])
u.b=!0
this.J(u)}},
ad:function(a,b){var u,t,s,r=this,q=r.f,p=$.L().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa2(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.L().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sM(u)}}}
U.cf.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.J():u},
sR:function(a,b){var u,t,s,r=this
if(b==null)b=V.bu()
if(!J.R(r.a,b)){u=r.a
r.a=b
t=new D.E("matrix",u,b,[V.a7])
t.b=!0
s=r.b
if(s!=null)s.u(t)}},
aH:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cf))return!1
return J.R(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")}}
U.ck.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.J():u},
J:function(a){var u
H.k(a,"$iv")
u=this.e
if(u!=null)u.u(a)},
a_:function(){return this.J(null)},
dY:function(a,b){var u,t,s,r,q,p,o,n=U.a2
H.j(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gaA(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.t)(b),++q){p=b[q]
if(p!=null){o=p.gm()
o.toString
H.l(t,s)
if(o.a==null)o.sY(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.br([n])
n.b=!0
this.J(n)},
fh:function(a,b){var u,t,s,r,q=U.a2
H.j(b,"$ie",[q],"$ae")
for(u=b.length,t=this.gaA(),s=0;s<b.length;b.length===u||(0,H.t)(b),++s){r=b[s]
if(r!=null)r.gm().L(0,t)}q=new D.bs([q])
q.b=!0
this.J(q)},
aH:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a5()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.af(r,r.length,[H.w(r,0)]),u=null;r.A();){q=r.d
if(q!=null){t=q.aH(0,b,c)
if(t!=null)u=u==null?t:t.p(0,u)}}s.f=u==null?V.bu():u
r=s.e
if(r!=null)r.au(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ck))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.R(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ae:function(){return[U.a2]},
$aT:function(){return[U.a2]},
$ia2:1}
U.a2.prototype={}
U.dM.prototype={
gm:function(){var u=this.cy
return u==null?this.cy=D.J():u},
J:function(a){var u
H.k(a,"$iv")
u=this.cy
if(u!=null)u.u(a)},
a_:function(){return this.J(null)},
aS:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gd2().h(0,u.gbs())
u.a.c.gdm().h(0,u.gbu())
u.a.c.gc8().h(0,u.gbw())
return!0},
bt:function(a){var u=this
H.k(a,"$iv")
if(!J.R(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bv:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.k(a,"$iv"),"$ib9")
if(!H.z(n.y))return
if(H.z(n.x)){u=a.d.E(0,a.y)
u=new V.O(u.a,u.b)
u=u.w(u)
t=n.r
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.x=!1}if(H.z(n.d)){u=a.c
t=a.d.E(0,a.y)
u=new V.O(t.a,t.b).p(0,2).t(0,u.ga3())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.p()
s=n.e
if(typeof s!=="number")return H.C(s)
t.sM(u*10*s)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=new V.O(s.a,s.b).p(0,2).t(0,u.ga3())
s=n.b
q=r.a
if(typeof q!=="number")return q.K()
p=n.e
if(typeof p!=="number")return H.C(p)
o=n.z
if(typeof o!=="number")return H.C(o)
s.sa2(0,-q*p+o)
n.b.sM(0)
t=t.E(0,a.z)
n.Q=new V.O(t.a,t.b).p(0,2).t(0,u.ga3())}n.a_()},
bx:function(a){var u,t,s,r=this
H.k(a,"$iv")
if(!H.z(r.y))return
r.y=!1
if(H.z(r.x))return
u=r.Q
if(u.w(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.p()
s=r.e
if(typeof s!=="number")return H.C(s)
u.sM(t*10*s)
r.a_()}},
aH:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a5()
if(q<p){r.ch=p
u=b.y
r.b.ad(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aT(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia2:1}
U.dN.prototype={
gm:function(){var u=this.fx
return u==null?this.fx=D.J():u},
J:function(a){var u
H.k(a,"$iv")
u=this.fx
if(u!=null)u.u(a)},
a_:function(){return this.J(null)},
aS:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gd2().h(0,s.gbs())
s.a.c.gdm().h(0,s.gbu())
s.a.c.gc8().h(0,s.gbw())
u=s.a.d
t=u.f
u=t==null?u.f=D.J():t
u.h(0,s.gex())
u=s.a.d
t=u.d
u=t==null?u.d=D.J():t
u.h(0,s.gez())
u=s.a.e
t=u.b
u=t==null?u.b=D.J():t
u.h(0,s.gfX())
u=s.a.e
t=u.d
u=t==null?u.d=D.J():t
u.h(0,s.gfV())
u=s.a.e
t=u.c
u=t==null?u.c=D.J():t
u.h(0,s.gfT())
return!0},
af:function(a){var u=a.a,t=a.b
if(H.z(this.f)){if(typeof u!=="number")return u.K()
u=-u}if(H.z(this.r)){if(typeof t!=="number")return t.K()
t=-t}return new V.O(u,t)},
bt:function(a){var u=this
a=H.p(H.k(a,"$iv"),"$ib9")
if(!J.R(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bv:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.k(a,"$iv"),"$ib9")
if(!H.z(n.cx))return
if(H.z(n.ch)){u=a.d.E(0,a.y)
u=new V.O(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.ch=!1}if(H.z(n.e)){u=a.c
t=a.d.E(0,a.y)
u=n.af(new V.O(t.a,t.b).p(0,2).t(0,u.ga3()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.K()
s=n.y
if(typeof s!=="number")return H.C(s)
t.sM(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.K()
t=n.x
if(typeof t!=="number")return H.C(t)
s.sM(-u*10*t)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=n.af(new V.O(s.a,s.b).p(0,2).t(0,u.ga3()))
s=n.c
q=r.a
if(typeof q!=="number")return q.K()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.K()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa2(0,-p*q+s)
n.b.sM(0)
n.c.sM(0)
t=t.E(0,a.z)
n.dx=n.af(new V.O(t.a,t.b).p(0,2).t(0,u.ga3()))}n.a_()},
bx:function(a){var u,t,s,r=this
H.k(a,"$iv")
if(!H.z(r.cx))return
r.cx=!1
if(H.z(r.ch))return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.K()
s=r.y
if(typeof s!=="number")return H.C(s)
u.sM(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.K()
u=r.x
if(typeof u!=="number")return H.C(u)
s.sM(-t*10*u)
r.a_()}},
ey:function(a){var u=this
if(H.p(H.k(a,"$iv"),"$idi").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eA:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.k(a,"$iv"),"$ib9")
if(!J.R(n.d,a.x.b))return
u=a.c
t=a.d
s=t.E(0,a.y)
r=n.af(new V.O(s.a,s.b).p(0,2).t(0,u.ga3()))
s=n.c
q=r.a
if(typeof q!=="number")return q.K()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.K()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa2(0,-p*q+s)
n.b.sM(0)
n.c.sM(0)
t=t.E(0,a.z)
n.dx=n.af(new V.O(t.a,t.b).p(0,2).t(0,u.ga3()))
n.a_()},
fY:function(a){var u=this
H.k(a,"$iv")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fW:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.k(a,"$iv"),"$idG")
if(!H.z(n.cx))return
if(H.z(n.ch)){u=a.d.E(0,a.y)
u=new V.O(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.ch=!1}if(H.z(n.e)){u=a.c
t=a.d.E(0,a.y)
u=n.af(new V.O(t.a,t.b).p(0,2).t(0,u.ga3()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.K()
s=n.y
if(typeof s!=="number")return H.C(s)
t.sM(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.K()
t=n.x
if(typeof t!=="number")return H.C(t)
s.sM(-u*10*t)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=n.af(new V.O(s.a,s.b).p(0,2).t(0,u.ga3()))
s=n.c
q=r.a
if(typeof q!=="number")return q.K()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.K()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa2(0,-p*q+s)
n.b.sM(0)
n.c.sM(0)
t=t.E(0,a.z)
n.dx=n.af(new V.O(t.a,t.b).p(0,2).t(0,u.ga3()))}n.a_()},
fU:function(a){var u,t,s,r=this
H.k(a,"$iv")
if(!H.z(r.cx))return
r.cx=!1
if(H.z(r.ch))return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.K()
s=r.y
if(typeof s!=="number")return H.C(s)
u.sM(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.K()
u=r.x
if(typeof u!=="number")return H.C(u)
s.sM(-t*10*u)
r.a_()}},
aH:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a5()
if(q<p){r.dy=p
u=b.y
r.c.ad(0,u)
r.b.ad(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.fr=V.aT(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1).p(0,V.ju(r.c.d))}return r.fr},
$ia2:1}
U.dO.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.J():u},
J:function(a){var u=this.r
if(u!=null)u.u(a)},
aS:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.J():t
t=r.geB()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.J():s).h(0,t)
return!0},
eC:function(a){var u,t,s,r,q=this
H.k(a,"$iv")
if(!J.R(q.b,q.a.b.c))return
H.p(a,"$ico")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.p()
r=u+t*s
if(u!==r){q.d=r
u=new D.E("zoom",u,r,[P.A])
u.b=!0
q.J(u)}},
aH:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ls(u,u,u)}return t.f},
$ia2:1}
M.d2.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.J():u},
O:function(a){var u
H.k(a,"$iv")
u=this.r
if(u!=null)u.u(a)},
aL:function(){return this.O(null)},
saT:function(a){var u,t,s=this
if(a==null)a=new X.fs()
u=s.b
if(u!==a){if(u!=null)u.gm().L(0,s.gN())
t=s.b
s.b=a
a.gm().h(0,s.gN())
u=new D.E("camera",t,s.b,[X.bG])
u.b=!0
s.O(u)}},
sb0:function(a,b){var u,t,s=this
if(b==null)b=X.fq(null)
u=s.c
if(u!==b){if(u!=null)u.gm().L(0,s.gN())
t=s.c
s.c=b
b.gm().h(0,s.gN())
u=new D.E("target",t,s.c,[X.bS])
u.b=!0
s.O(u)}},
sb1:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().L(0,t.gN())
u=t.d
t.d=a
if(a!=null)a.gm().h(0,t.gN())
s=new D.E("technique",u,t.d,[O.bx])
s.b=!0
t.O(s)}},
a1:function(a){var u=this
a.c4(u.d)
u.c.U(a)
u.b.U(a)
u.e.ad(0,a)
u.e.a1(a)
u.b.aw(a)
u.c.toString
a.c3()},
$iaB:1,
$ibR:1}
M.d7.prototype={
O:function(a){var u
H.k(a,"$iv")
u=this.y
if(u!=null)u.u(a)},
aL:function(){return this.O(null)},
eO:function(a,b){var u,t,s,r,q,p,o,n=E.ah
H.j(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gN(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.t)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.aM()
o.sY(null)
o.sag(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sY(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.br([n])
n.b=!0
this.O(n)},
eQ:function(a,b){var u,t,s,r,q,p=E.ah
H.j(b,"$ie",[p],"$ae")
for(u=b.length,t=this.gN(),s=0;s<b.length;b.length===u||(0,H.t)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.aM()
q.sY(null)
q.sag(null)
q.c=null
q.d=0
r.z=q}q.L(0,t)}}p=new D.bs([p])
p.b=!0
this.O(p)},
saT:function(a){var u,t,s=this
if(a==null)a=X.jw(null)
u=s.b
if(u!==a){if(u!=null)u.gm().L(0,s.gN())
t=s.b
s.b=a
a.gm().h(0,s.gN())
u=new D.E("camera",t,s.b,[X.bG])
u.b=!0
s.O(u)}},
sb0:function(a,b){var u,t,s=this
if(b==null)b=X.fq(null)
u=s.c
if(u!==b){if(u!=null)u.gm().L(0,s.gN())
t=s.c
s.c=b
b.gm().h(0,s.gN())
u=new D.E("target",t,s.c,[X.bS])
u.b=!0
s.O(u)}},
sb1:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().L(0,t.gN())
u=t.d
t.d=a
if(a!=null)a.gm().h(0,t.gN())
s=new D.E("technique",u,t.d,[O.bx])
s.b=!0
t.O(s)}},
gm:function(){var u=this.y
return u==null?this.y=D.J():u},
a1:function(a){var u,t=this
a.c4(t.d)
t.c.U(a)
t.b.U(a)
u=t.d
if(u!=null)u.ad(0,a)
for(u=t.e.a,u=new J.af(u,u.length,[H.w(u,0)]);u.A();)u.d.ad(0,a)
for(u=t.e.a,u=new J.af(u,u.length,[H.w(u,0)]);u.A();)u.d.a1(a)
t.b.toString
a.cy.at()
a.db.at()
t.c.toString
a.c3()},
sec:function(a,b){this.e=H.j(b,"$iT",[E.ah],"$aT")},
$iaB:1,
$ibR:1}
M.aB.prototype={}
M.bR.prototype={}
M.dC.prototype={
gm:function(){var u=this.db
return u==null?this.db=D.J():u},
O:function(a){var u
H.k(a,"$iv")
u=this.db
if(u!=null)u.u(a)},
aL:function(){return this.O(null)},
eG:function(a,b){var u,t,s,r,q,p,o,n=M.aB
H.j(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gN(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.t)(b),++q){p=b[q]
if(p!=null){o=p.gm()
o.toString
H.l(t,s)
if(o.a==null)o.sY(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.br([n])
n.b=!0
this.O(n)},
fl:function(a,b){var u,t,s,r,q=M.aB
H.j(b,"$ie",[q],"$ae")
for(u=b.length,t=this.gN(),s=0;s<b.length;b.length===u||(0,H.t)(b),++s){r=b[s]
if(r!=null)r.gm().L(0,t)}q=new D.bs([q])
q.b=!0
this.O(q)},
a1:function(a){var u,t,s=this
s.z.sdw(0,s.x)
for(u=s.Q.a,u=new J.af(u,u.length,[H.w(u,0)]);u.A();){t=u.d
t.sb0(0,s.z)
t.saT(s.f)
t.a1(a)}s.z.sdw(0,s.y)
for(u=s.Q.a,u=new J.af(u,u.length,[H.w(u,0)]);u.A();){t=u.d
t.sb0(0,s.z)
t.saT(s.r)
t.a1(a)}},
sft:function(a){this.Q=H.j(a,"$iT",[M.aB],"$aT")},
$ibR:1}
A.cW.prototype={}
A.eQ.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hl:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
d1:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ac.prototype={
gae:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.ac))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.dl.prototype={
dQ:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.bw("")
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
A.md(c0,u)
A.mf(c0,u)
A.me(c0,u)
A.mh(c0,u)
A.mi(c0,u)
A.mg(c0,u)
A.mj(c0,u)
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
b5.di(0,s.charCodeAt(0)==0?s:s,A.mc(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.p(b5.y.D(0,"invViewMat"),"$ial")
if(t)b5.dy=H.p(b5.y.D(0,"objMat"),"$ial")
if(r)b5.fr=H.p(b5.y.D(0,"viewObjMat"),"$ial")
b5.fy=H.p(b5.y.D(0,"projViewObjMat"),"$ial")
if(c0.ry)b5.k1=H.p(b5.y.D(0,"txt2DMat"),"$icD")
if(c0.x1)b5.k2=H.p(b5.y.D(0,"txtCubeMat"),"$ial")
if(c0.x2)b5.k3=H.p(b5.y.D(0,"colorMat"),"$ial")
b5.se8(H.c([],[A.al]))
t=c0.y2
if(t>0){b5.k4=H.k(b5.y.D(0,"bendMatCount"),"$iax")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.y(P.x(b7+q+b8));(s&&C.a).h(s,H.p(m,"$ial"))}}t=c0.a
if(t.a)b5.r2=H.p(b5.y.D(0,"emissionClr"),"$iS")
if(t.c)b5.ry=H.p(b5.y.D(0,"emissionTxt"),"$iab")
t=c0.b
if(t.a)b5.x1=H.p(b5.y.D(0,"ambientClr"),"$iS")
if(t.c)b5.y1=H.p(b5.y.D(0,"ambientTxt"),"$iab")
t=c0.c
if(t.a)b5.y2=H.p(b5.y.D(0,"diffuseClr"),"$iS")
if(t.c)b5.ba=H.p(b5.y.D(0,"diffuseTxt"),"$iab")
t=c0.d
if(t.a)b5.d3=H.p(b5.y.D(0,"invDiffuseClr"),"$iS")
if(t.c)b5.d4=H.p(b5.y.D(0,"invDiffuseTxt"),"$iab")
t=c0.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.d7=H.p(b5.y.D(0,"shininess"),"$ia4")
if(s)b5.d5=H.p(b5.y.D(0,"specularClr"),"$iS")
if(t.c)b5.d6=H.p(b5.y.D(0,"specularTxt"),"$iab")}if(c0.f.c)b5.d8=H.p(b5.y.D(0,"bumpTxt"),"$iab")
if(c0.cy){b5.d9=H.p(b5.y.D(0,"envSampler"),"$iab")
t=c0.r
if(t.a)b5.da=H.p(b5.y.D(0,"reflectClr"),"$iS")
if(t.c)b5.dc=H.p(b5.y.D(0,"reflectTxt"),"$iab")
t=c0.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dd=H.p(b5.y.D(0,"refraction"),"$ia4")
if(s)b5.de=H.p(b5.y.D(0,"refractClr"),"$iS")
if(t.c)b5.df=H.p(b5.y.D(0,"refractTxt"),"$iab")}}t=c0.y
if(t.a)b5.dg=H.p(b5.y.D(0,"alpha"),"$ia4")
if(t.c)b5.dh=H.p(b5.y.D(0,"alphaTxt"),"$iab")
t=P.r
s=[t,A.ax]
b5.seh(new H.X(s))
b5.sdZ(new H.X([t,[P.b,A.bT]]))
b5.sfv(new H.X(s))
b5.sfw(new H.X([t,[P.b,A.bU]]))
b5.sfN(new H.X(s))
b5.se_(new H.X([t,[P.b,A.bW]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.bT],l=0;l<t.length;t.length===s||(0,H.t)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.i(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ai()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.y(P.x(b7+g+b8))
H.p(m,"$iS")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.y(P.x(b7+g+b8))
H.p(f,"$iS")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.y(P.x(b7+g+b8))
H.p(e,"$iS")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.y(P.x(b7+g+b8))
H.p(m,"$iS")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.y(P.x(b7+g+b8))
H.p(f,"$iS")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.y(P.x(b7+o+b8))
H.p(e,"$ibV")
a=e}else a=b6
C.a.h(h,new A.bT(b,c,d,m,f,a))}b5.bP.l(0,j,h)
q=b5.bO
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.y(P.x(b7+o+b8))
q.l(0,j,H.k(m,"$iax"))}for(t=c0.Q,s=t.length,r=[A.bU],l=0;l<t.length;t.length===s||(0,H.t)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.i(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.y(P.x(b7+o+b8))
H.p(m,"$iS")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.y(P.x(b7+o+b8))
H.p(f,"$iS")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.y(P.x(b7+o+b8))
H.p(e,"$iS")
if(typeof j!=="number")return j.ai()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.y(P.x(b7+o+b8))
H.p(a0,"$icD")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.y(P.x(b7+o+b8))
H.p(a0,"$iab")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.y(P.x(b7+o+b8))
H.p(a0,"$iab")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.y(P.x(b7+o+b8))
H.p(a2,"$icC")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.y(P.x(b7+o+b8))
H.p(a0,"$ia4")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.y(P.x(b7+o+b8))
H.p(a2,"$ia4")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.y(P.x(b7+o+b8))
H.p(a5,"$ia4")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.bU(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.bR.l(0,j,h)
q=b5.bQ
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.y(P.x(b7+o+b8))
q.l(0,j,H.k(m,"$iax"))}for(t=c0.ch,s=t.length,r=[A.bW],l=0;l<t.length;t.length===s||(0,H.t)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.i(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.y(P.x(b7+o+b8))
H.p(m,"$iS")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.y(P.x(b7+o+b8))
H.p(f,"$iS")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.y(P.x(b7+o+b8))
H.p(e,"$iS")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.y(P.x(b7+o+b8))
H.p(a0,"$iS")
if(typeof j!=="number")return j.ai()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.y(P.x(b7+o+b8))
H.p(a2,"$iS")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.y(P.x(b7+o+b8))
H.p(a5,"$iS")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.y(P.x(b7+o+b8))
H.p(a9,"$ia4")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.y(P.x(b7+o+b8))
H.p(b0,"$ia4")
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
if(a2==null)H.y(P.x(b7+g+b8))
H.p(a2,"$icC")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.y(P.x(b7+g+b8))
H.p(a2,"$ia4")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.y(P.x(b7+g+b8))
H.p(a5,"$ia4")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.y(P.x(b7+g+b8))
H.p(a2,"$ia4")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.y(P.x(b7+g+b8))
H.p(a5,"$ia4")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.y(P.x(b7+g+b8))
H.p(a9,"$ia4")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.y(P.x(b7+g+b8))
H.p(a2,"$ibV")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.y(P.x(b7+o+b8))
H.p(a2,"$ibV")
a3=a2}else a3=b6
C.a.h(h,new A.bW(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.bT.l(0,j,h)
q=b5.bS
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.y(P.x(b7+o+b8))
q.l(0,j,H.k(m,"$iax"))}}},
a7:function(a,b){if(b!=null&&b.d>=6)a.cc(b)},
se8:function(a){this.r1=H.j(a,"$ib",[A.al],"$ab")},
seh:function(a){this.bO=H.j(a,"$iF",[P.r,A.ax],"$aF")},
sdZ:function(a){this.bP=H.j(a,"$iF",[P.r,[P.b,A.bT]],"$aF")},
sfv:function(a){this.bQ=H.j(a,"$iF",[P.r,A.ax],"$aF")},
sfw:function(a){this.bR=H.j(a,"$iF",[P.r,[P.b,A.bU]],"$aF")},
sfN:function(a){this.bS=H.j(a,"$iF",[P.r,A.ax],"$aF")},
se_:function(a){this.bT=H.j(a,"$iF",[P.r,[P.b,A.bW]],"$aF")}}
A.au.prototype={
i:function(a){return"dirLight"+H.i(this.a)}}
A.av.prototype={
i:function(a){return"pointLight"+H.i(this.a)}}
A.aw.prototype={
i:function(a){return"spotLight"+H.i(this.a)}}
A.fK.prototype={
i:function(a){return this.aX}}
A.bT.prototype={}
A.bU.prototype={}
A.bW.prototype={}
A.cv.prototype={
ck:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
di:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cB(b,35633)
r.f=r.cB(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.z(H.kD(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.y(P.x("Failed to link shader: "+H.i(s)))}r.fI()
r.fK()},
U:function(a){a.a.useProgram(this.r)
this.x.hl()},
cB:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.z(H.kD(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.h(P.x("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
fI:function(){var u,t,s,r=this,q=H.c([],[A.cW]),p=r.a,o=H.Y(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.C(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.cW(p,t.name,s))}r.x=new A.eQ(q)},
fK:function(){var u,t,s,r=this,q=H.c([],[A.dH]),p=r.a,o=H.Y(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.C(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.hd(t.type,t.size,t.name,s))}r.y=new A.i0(q)},
aB:function(a,b,c){var u=this.a
if(a===1)return new A.ax(u,b,c)
else return A.jA(u,this.r,b,a,c)},
ee:function(a,b,c){var u=this.a
if(a===1)return new A.bV(u,b,c)
else return A.jA(u,this.r,b,a,c)},
ef:function(a,b,c){var u=this.a
if(a===1)return new A.ab(u,b,c)
else return A.jA(u,this.r,b,a,c)},
b8:function(a,b){return new P.e_(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
hd:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aB(b,c,d)
case 5121:return u.aB(b,c,d)
case 5122:return u.aB(b,c,d)
case 5123:return u.aB(b,c,d)
case 5124:return u.aB(b,c,d)
case 5125:return u.aB(b,c,d)
case 5126:return new A.a4(u.a,c,d)
case 35664:return new A.hX(u.a,c,d)
case 35665:return new A.S(u.a,c,d)
case 35666:return new A.cC(u.a,c,d)
case 35667:return new A.hY(u.a,c,d)
case 35668:return new A.hZ(u.a,c,d)
case 35669:return new A.i_(u.a,c,d)
case 35674:return new A.i1(u.a,c,d)
case 35675:return new A.cD(u.a,c,d)
case 35676:return new A.al(u.a,c,d)
case 35678:return u.ee(b,c,d)
case 35680:return u.ef(b,c,d)
case 35670:throw H.h(u.b8("BOOL",c))
case 35671:throw H.h(u.b8("BOOL_VEC2",c))
case 35672:throw H.h(u.b8("BOOL_VEC3",c))
case 35673:throw H.h(u.b8("BOOL_VEC4",c))
default:throw H.h(P.x("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.dy.prototype={}
A.dH.prototype={}
A.i0.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
D:function(a,b){var u=this.j(0,b)
if(u==null)throw H.h(P.x("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.H()},
H:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.t)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.ax.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.hY.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.hZ.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.i_.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.hW.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
sh_:function(a){H.j(a,"$ib",[P.r],"$ab")}}
A.a4.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.hX.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.S.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.cC.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.i1.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.cD.prototype={
aa:function(a){var u=new Float32Array(H.cQ(H.j(a,"$ib",[P.A],"$ab")))
C.b.dF(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.al.prototype={
aa:function(a){var u=new Float32Array(H.cQ(H.j(a,"$ib",[P.A],"$ab")))
C.b.dG(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.bV.prototype={
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.ab.prototype={
cc:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.j_.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bZ(s.b,b).bZ(s.d.bZ(s.c,b),c)
s=new V.ai(r.a,r.b,r.c)
if(!J.R(a.f,s)){a.f=s
s=a.a
if(s!=null)s.Z()}a.sb2(r.t(0,Math.sqrt(r.w(r))))
s=1-b
u=1-c
u=new V.bd(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.R(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.Z()}},
$S:34}
F.a1.prototype={
e7:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.dP()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dj())return
return s.t(0,Math.sqrt(s.w(s)))},
eb:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.E(0,q)
r=new V.I(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.w(r)))
r=t.E(0,q)
r=new V.I(r.a,r.b,r.c)
r=s.aW(r.t(0,Math.sqrt(r.w(r))))
return r.t(0,Math.sqrt(r.w(r)))},
bK:function(){var u,t=this
if(t.d!=null)return!0
u=t.e7()
if(u==null){u=t.eb()
if(u==null)return!1}t.d=u
t.a.a.Z()
return!0},
e6:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.dP()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dj())return
return s.t(0,Math.sqrt(s.w(s)))},
ea:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.L().a){l=d.E(0,g)
l=new V.I(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.w(l)))
if(s.a-t.a<0)q=q.K(0)}else{p=(l-u.b)/r
l=d.E(0,g)
l=new V.ai(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).E(0,j)
l=new V.I(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.w(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.K(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.w(l)))
l=o.aW(q)
l=l.t(0,Math.sqrt(l.w(l))).aW(o)
q=l.t(0,Math.sqrt(l.w(l)))}return q},
bI:function(){var u,t=this
if(t.e!=null)return!0
u=t.e6()
if(u==null){u=t.ea()
if(u==null)return!1}t.e=u
t.a.a.Z()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
v:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.c.a9(J.ar(s.e),0)+", "+C.c.a9(J.ar(t.b.e),0)+", "+C.c.a9(J.ar(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
H:function(){return this.v("")}}
F.b7.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
v:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.c.a9(J.ar(u.e),0)+", "+C.c.a9(J.ar(this.b.e),0)},
H:function(){return this.v("")}}
F.bv.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
v:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.a9(J.ar(u.e),0)},
H:function(){return this.v("")}}
F.dw.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.J():u},
hw:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.V()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.t)(g),++s){r=g[s]
h.a.h(0,r.hc())}h.a.V()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.t)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.V()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bv()
if(n.a==null)H.y(P.x("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.u(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.t)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.V()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.V()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.ll(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.t)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.V()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.V()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.V()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.ci(l,k,i)}g=h.e
if(g!=null)g.au(0)},
ao:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ao()||!1
if(!t.a.ao())u=!1
s=t.e
if(s!=null)s.au(0)
return u},
cX:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aG()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bk().a)!==0)++s
if((t&$.bj().a)!==0)++s
if((t&$.bD().a)!==0)++s
if((t&$.bl().a)!==0)++s
if((t&$.cU().a)!==0)++s
if((t&$.cV().a)!==0)++s
if((t&$.c5().a)!==0)++s
if((t&$.bi().a)!==0)++s
r=a3.gce(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.A
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.cZ])
for(n=0,m=0;m<s;++m){l=a3.h4(m)
k=l.gce(l)
C.a.l(o,m,new Z.cZ(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.d(u,j)
i=u[j].hu(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.l(p,h,i[g]);++h}}n+=k}H.j(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cQ(p)),35044)
u.bindBuffer(a0,null)
e=new Z.ca(new Z.dQ(a0,f),o,a3)
e.ser(H.c([],[Z.bq]))
if(a.b.b.length!==0){t=P.r
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.V()
C.a.h(d,c.e)}b=Z.jC(u,34963,H.j(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bq(0,d.length,b))}if(a.c.b.length!==0){t=P.r
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.V()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.V()
C.a.h(d,c.e)}b=Z.jC(u,34963,H.j(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bq(1,d.length,b))}if(a.d.b.length!==0){t=P.r
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.V()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.V()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].c
c.a.a.V()
C.a.h(d,c.e)}b=Z.jC(u,34963,H.j(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bq(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.n])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.v(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.v(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.v(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.v(t))}return C.a.q(s,"\n")},
Z:function(){var u=this.e
if(u!=null)u.u(null)},
$in2:1}
F.hp.prototype={
h2:function(a){var u,t,s,r,q,p
H.j(a,"$ib",[F.ap],"$ab")
u=H.c([],[F.a1])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.ci(t,q,p))}return u},
h3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.j(c,"$ib",[F.ap],"$ab")
u=H.c([],[F.a1])
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
C.a.h(u,F.ci(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ci(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ci(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.ci(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
ao:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.t)(u),++r)if(!u[r].bK())s=!1
return s},
bJ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.t)(u),++r)if(!u[r].bI())s=!1
return s},
i:function(a){return this.H()},
v:function(a){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].v(a))
return C.a.q(r,"\n")},
H:function(){return this.v("")},
sel:function(a){this.b=H.j(a,"$ib",[F.a1],"$ab")}}
F.hq.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.H()},
v:function(a){var u,t,s=H.c([],[P.n]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
C.a.h(s,t[u].v(a+(""+u+". ")))}return C.a.q(s,"\n")},
H:function(){return this.v("")},
ses:function(a){this.b=H.j(a,"$ib",[F.b7],"$ab")}}
F.hr.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.H()},
v:function(a){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].v(a))
return C.a.q(r,"\n")},
H:function(){return this.v("")},
sbB:function(a){this.b=H.j(a,"$ib",[F.bv],"$ab")}}
F.ap.prototype={
bM:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.ib(u.cx,r,o,t,s,q,p,a,n)},
hc:function(){return this.bM(null)},
sb2:function(a){var u
if(!J.R(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Z()}},
hu:function(a){var u,t,s=this
if(a.n(0,$.aG())){u=s.f
t=[P.A]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.bk())){u=s.r
t=[P.A]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.bj())){u=s.x
t=[P.A]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.bD())){u=s.y
t=[P.A]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.n(0,$.bl())){u=s.z
t=[P.A]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.cU())){u=s.Q
t=[P.A]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.cV())){u=s.Q
t=[P.A]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.c5()))return H.c([s.ch],[P.A])
else if(a.n(0,$.bi())){u=s.cx
t=[P.A]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.A])},
bK:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dP()
t.d.G(0,new F.ik(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.au(0)}return!0},
bI:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dP()
t.d.G(0,new F.ij(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.au(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
v:function(a){var u,t,s=this,r="-",q=H.c([],[P.n])
C.a.h(q,C.c.a9(J.ar(s.e),0))
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
t=C.a.q(q,", ")
return a+"{"+t+"}"},
H:function(){return this.v("")}}
F.ik.prototype={
$1:function(a){var u,t
H.k(a,"$ia1")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:7}
F.ij.prototype={
$1:function(a){var u,t
H.k(a,"$ia1")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:7}
F.ic.prototype={
V:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.h(P.x("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.Z()
return!0},
b9:function(a,b,c,d,e,f){var u=F.ib(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gk:function(a){return this.c.length},
ao:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)u[s].bK()
return!0},
bJ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)u[s].bI()
return!0},
h9:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.R(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.u(null)}}}}return!0},
i:function(a){return this.H()},
v:function(a){var u,t,s,r
this.V()
u=H.c([],[P.n])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.t)(t),++r)C.a.h(u,t[r].v(a))
return C.a.q(u,"\n")},
H:function(){return this.v("")},
sh0:function(a){this.c=H.j(a,"$ib",[F.ap],"$ab")}}
F.id.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
G:function(a,b){var u=this
H.l(b,{func:1,ret:-1,args:[F.a1]})
C.a.G(u.b,b)
C.a.G(u.c,new F.ie(u,b))
C.a.G(u.d,new F.ig(u,b))},
i:function(a){return this.H()},
H:function(){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].v(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].v(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].v(""))
return C.a.q(r,"\n")},
sem:function(a){this.b=H.j(a,"$ib",[F.a1],"$ab")},
sen:function(a){this.c=H.j(a,"$ib",[F.a1],"$ab")},
seo:function(a){this.d=H.j(a,"$ib",[F.a1],"$ab")}}
F.ie.prototype={
$1:function(a){H.k(a,"$ia1")
if(!J.R(a.a,this.a))this.b.$1(a)},
$S:7}
F.ig.prototype={
$1:function(a){var u
H.k(a,"$ia1")
u=this.a
if(!J.R(a.a,u)&&!J.R(a.b,u))this.b.$1(a)},
$S:7}
F.ih.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.H()},
H:function(){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].v(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].v(""))
return C.a.q(r,"\n")},
seu:function(a){this.b=H.j(a,"$ib",[F.b7],"$ab")},
sev:function(a){this.c=H.j(a,"$ib",[F.b7],"$ab")}}
F.ii.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.H()},
H:function(){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].v(""))
return C.a.q(r,"\n")},
sbB:function(a){this.b=H.j(a,"$ib",[F.bv],"$ab")}}
O.dk.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.J():u},
S:function(a){var u
H.k(a,"$iv")
u=this.fr
if(u!=null)u.u(a)},
aO:function(){return this.S(null)},
cM:function(a){H.k(a,"$iv")
this.a=null
this.S(a)},
fF:function(){return this.cM(null)},
eI:function(a,b){var u=V.a7
H.j(b,"$ie",[u],"$ae")
u=new D.br([u])
u.b=!0
this.S(u)},
eK:function(a,b){var u=V.a7
H.j(b,"$ie",[u],"$ae")
u=new D.bs([u])
u.b=!0
this.S(u)},
cw:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.r,h=new H.X([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=h.j(0,0)
h.l(0,0,r==null?1:r)}q=H.c([],[A.au])
h.G(0,new O.fO(j,q))
C.a.bh(q,new O.fP())
p=new H.X([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){o=u[s]
r=o.gaV()
n=p.j(0,o.gaV())
p.l(0,r,n==null?1:n)}m=H.c([],[A.av])
p.G(0,new O.fQ(j,m))
C.a.bh(m,new O.fR())
l=new H.X([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.t)(i),++s){o=i[s]
t=o.gaV()
r=l.j(0,o.gaV())
l.l(0,t,r==null?1:r)}k=H.c([],[A.aw])
l.G(0,new O.fS(j,k))
C.a.bh(k,new O.fT())
i=C.e.a0(j.e.a.length+3,4)
j.dy.e
return A.lr(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
a6:function(a,b){H.j(a,"$ib",[T.cy],"$ab")
if(b!=null)if(!C.a.ah(a,b)){b.a=a.length
C.a.h(a,b)}},
ad:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.af(u,u.length,[H.w(u,0)]);u.A();){t=u.d
t.toString
s=$.ia
if(s==null)s=$.ia=new V.I(0,0,1)
t.a=s
r=$.i9
t.d=r==null?$.i9=new V.I(0,1,0):r
r=$.i8
t.e=r==null?$.i8=new V.I(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bf(s)
r=s.a
p=s.b
o=s.c
t.a=s.t(0,Math.sqrt(r*r+p*p+o*o))
o=q.bf(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.t(0,Math.sqrt(p*p+r*r+s*s))
s=q.bf(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.t(0,Math.sqrt(r*r+p*p+o*o))}}}},
dz:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cw()
u=H.k(b4.fr.j(0,b3.aX),"$idl")
if(u==null){u=A.lq(b3,b4.a)
b4.cU(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.ba
b3=b5.e
if(!(b3 instanceof Z.ca))b3=b5.e=null
if(b3==null||!b3.d.n(0,s)){b3=t.k3
if(b3)b5.d.ao()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.bJ()
q.a.bJ()
q=q.e
if(q!=null)q.au(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.h9()
p=p.e
if(p!=null)p.au(0)}n=b5.d.cX(new Z.dR(b4.a),s)
n.ap($.aG()).e=b2.a.Q.c
if(b3)n.ap($.bk()).e=b2.a.cx.c
if(r)n.ap($.bj()).e=b2.a.ch.c
if(t.r1)n.ap($.bD()).e=b2.a.cy.c
if(q)n.ap($.bl()).e=b2.a.db.c
if(t.rx)n.ap($.bi()).e=b2.a.dx.c
b5.e=n}b3=T.cy
m=H.c([],[b3])
b2.a.U(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.gR(q)
r=r.dy
r.toString
r.aa(q.a4(0,!0))}if(t.fr){r=b2.a
q=b4.cx
if(q==null){q=b4.db
q=q.gR(q)
p=b4.dx
p=b4.cx=q.p(0,p.gR(p))
q=p}r=r.fr
r.toString
r.aa(q.a4(0,!0))}r=b2.a
q=b4.ch
if(q==null){q=b4.ghM()
p=b4.dx
p=b4.ch=q.p(0,p.gR(p))
q=p}r=r.fy
r.toString
r.aa(q.a4(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.aa(C.j.a4(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.aa(C.j.a4(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.aa(C.j.a4(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.b.bg(r.a,r.d,l)
for(r=[P.A],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.d(p,k)
p=p[k]
q.toString
H.k(p,"$ia7")
q=q.r1
if(k>=q.length)return H.d(q,k)
q=q[k]
j=new Float32Array(H.cQ(H.j(p.a4(0,!0),"$ib",r,"$ab")))
C.b.dG(q.a,q.d,!1,j)}}r=t.a
if(r.a){q=b2.a
p=b2.f.f
q=q.r2
C.b.T(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.a6(m,b2.f.e)
r=b2.a
q=b2.f.e
r.a7(r.ry,q)}if(t.id){r=t.b
if(r.a){q=b2.a
p=b2.r.f
q=q.x1
C.b.T(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.a6(m,b2.r.e)
r=b2.a
q=b2.r.e
r.a7(r.y1,q)}r=t.c
if(r.a){q=b2.a
p=b2.x.f
q=q.y2
C.b.T(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.a6(m,b2.x.e)
r=b2.a
q=b2.x.e
r.a7(r.ba,q)}r=t.d
if(r.a){q=b2.a
p=b2.y.f
q=q.d3
C.b.T(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.a6(m,b2.y.e)
r=b2.a
q=b2.y.e
r.a7(r.d4,q)}r=t.e
q=r.a
if(!q)p=r.c
else p=!0
if(p){p=b2.a
o=b2.z.ch
p=p.d7
C.b.W(p.a,p.d,o)}if(q){q=b2.a
p=b2.z.f
q=q.d5
C.b.T(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.a6(m,b2.z.e)
r=b2.a
q=b2.z.e
r.a7(r.d6,q)}r=t.z
if(r.length>0){q=b4.db
i=q.gR(q)
q=P.r
h=new H.X([q,q])
for(q=b2.dx.e,p=q.length,g=0;g<q.length;q.length===p||(0,H.t)(q),++g){f=q[g]
e=h.j(0,0)
if(e==null)e=0
h.l(0,0,e+1)
d=J.eK(b2.a.bP.j(0,0),e)
o=i.bf(f.a)
c=o.a
b=o.b
a=o.c
a=o.t(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
o=a.b
a=a.c
C.b.T(b.a,b.d,c,o,a)
a=f.c
o=d.f
C.b.T(o.a,o.d,a.a,a.b,a.c)}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.t)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.bO.j(0,p)
C.b.bg(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.gR(q)
q=P.r
a0=new H.X([q,q])
for(q=b2.dx.f,p=q.length,o=[b3],c=[P.A],g=0;g<q.length;q.length===p||(0,H.t)(q),++g){f=q[g]
a1=f.gaV()
e=a0.j(0,a1)
if(e==null)e=0
a0.l(0,a1,e+1)
d=J.eK(b2.a.bR.j(0,a1),e)
a2=i.p(0,f.gR(f))
b=f.gR(f)
a=$.cs
b=b.c7(a==null?$.cs=new V.ai(0,0,0):a)
a=d.b
C.b.T(a.a,a.d,b.a,b.b,b.c)
b=$.cs
b=a2.c7(b==null?$.cs=new V.ai(0,0,0):b)
a=d.c
C.b.T(a.a,a.d,b.a,b.b,b.c)
b=f.gaU(f)
a=d.e
C.b.T(a.a,a.d,b.a,b.b,b.c)
f.gav()
b=a2.bW(0)
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
j=new Float32Array(H.cQ(H.j(new V.dm(a,a3,a4,a5,a6,a7,a8,a9,b).a4(0,!0),"$ib",c,"$ab")))
C.b.dF(b0.a,b0.d,!1,j)
f.gav()
b=f.gav()
H.j(m,"$ib",o,"$ab")
if(!C.a.ah(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gav()
a=b.gaY(b)
if(a){a=d.f
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}f.gaJ()
b=f.gdK()
a=d.x
a.toString
a3=b.ghh(b)
a4=b.ghi(b)
a5=b.ghj()
b=b.ghg()
C.b.dE(a.a,a.d,a3,a4,a5,b)
b=f.gaJ()
if(!C.a.ah(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gaJ()
a=b.gaY(b)
if(a){a=d.r
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}if(f.ghm()){b=f.gh5()
a=d.y
C.b.W(a.a,a.d,b)
b=f.gh6()
a=d.z
C.b.W(a.a,a.d,b)
b=f.gh7()
a=d.Q
C.b.W(a.a,a.d,b)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.t)(r),++g){p=r[g].a
l=a0.j(0,p)
if(l==null)l=0
p=b2.a.bQ.j(0,p)
C.b.bg(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.gR(q)
q=P.r
b1=new H.X([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.t)(q),++g){f=q[g]
a1=f.gaV()
e=b1.j(0,a1)
if(e==null)e=0
b1.l(0,a1,e+1)
d=J.eK(b2.a.bT.j(0,a1),e)
o=f.ghL(f)
c=d.b
C.b.T(c.a,c.d,o.a,o.b,o.c)
o=f.gi1(f).ic()
c=d.c
C.b.T(c.a,c.d,o.a,o.b,o.c)
o=i.c7(f.ghL(f))
c=d.d
C.b.T(c.a,c.d,o.a,o.b,o.c)
o=f.gaU(f)
c=d.e
C.b.T(c.a,c.d,o.a,o.b,o.c)
f.gav()
o=f.gc8()
c=d.f
C.b.T(c.a,c.d,o.a,o.b,o.c)
o=f.gc5(f)
c=d.r
C.b.T(c.a,c.d,o.a,o.b,o.c)
o=f.gie()
c=d.x
C.b.W(c.a,c.d,o)
o=f.gig()
c=d.y
C.b.W(c.a,c.d,o)
f.gav()
o=f.gav()
H.j(m,"$ib",b3,"$ab")
if(!C.a.ah(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gav()
c=o.gaY(o)
if(c){c=d.dx
c.toString
b=o.gaY(o)
if(!b)c.a.uniform1i(c.d,0)
else{o=o.ghq(o)
c.a.uniform1i(c.d,o)}}f.gaJ()
o=f.gdK()
c=d.z
c.toString
b=o.ghh(o)
a=o.ghi(o)
a3=o.ghj()
o=o.ghg()
C.b.dE(c.a,c.d,b,a,a3,o)
o=f.gaJ()
if(!C.a.ah(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gaJ()
c=o.gaY(o)
if(c){c=d.dy
c.toString
b=o.gaY(o)
if(!b)c.a.uniform1i(c.d,0)
else{o=o.ghq(o)
c.a.uniform1i(c.d,o)}}if(f.gi2()){o=f.gi0()
c=d.Q
C.b.W(c.a,c.d,o)
o=f.gi_()
c=d.ch
C.b.W(c.a,c.d,o)}if(f.ghm()){o=f.gh5()
c=d.cx
C.b.W(c.a,c.d,o)
o=f.gh6()
c=d.cy
C.b.W(c.a,c.d,o)
o=f.gh7()
c=d.db
C.b.W(c.a,c.d,o)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.t)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.bS.j(0,q)
C.b.bg(q.a,q.d,l)}}}if(t.f.c){b2.a6(m,b2.Q.e)
b3=b2.a
r=b2.Q.e
b3.a7(b3.d8,r)}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.gR(r).bW(0)}b3=b3.id
b3.toString
b3.aa(r.a4(0,!0))}if(t.cy){b2.a6(m,b2.ch)
b3=b2.a
r=b2.ch
b3.a7(b3.d9,r)
b3=t.r
if(b3.a){r=b2.a
q=b2.cx.f
r=r.da
C.b.T(r.a,r.d,q.a,q.b,q.c)}if(b3.c){b2.a6(m,b2.cx.e)
b3=b2.a
r=b2.cx.e
b3.a7(b3.dc,r)}b3=t.x
r=b3.a
if(!r)q=b3.c
else q=!0
if(q){q=b2.a
p=b2.cy.ch
q=q.dd
C.b.W(q.a,q.d,p)}if(r){r=b2.a
q=b2.cy.f
r=r.de
C.b.T(r.a,r.d,q.a,q.b,q.c)}if(b3.c){b2.a6(m,b2.cy.e)
b3=b2.a
r=b2.cy.e
b3.a7(b3.df,r)}}b3=t.y
r=b3.a
q=!r
if(q)p=b3.c
else p=!0
if(p){if(r){r=b2.a
p=b2.db.f
r=r.dg
C.b.W(r.a,r.d,p)}if(b3.c){b2.a6(m,b2.db.e)
r=b2.a
p=b2.db.e
r.a7(r.dh,p)}r=b4.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].U(b4)
r=b5.e
r.U(b4)
r.a1(b4)
r.aw(b4)
if(q)b3=b3.c
else b3=!0
if(b3)b4.a.disable(3042)
for(b3=b4.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b3.activeTexture(33984+r.a)
b3.bindTexture(34067,null)}}r=b2.a
r.toString
b3.useProgram(null)
r.x.d1()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cw().aX},
se9:function(a){this.e=H.j(a,"$iT",[V.a7],"$aT")}}
O.fO.prototype={
$2:function(a,b){H.Y(a)
H.Y(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.au(a,C.e.a0(b+3,4)*4))},
$S:8}
O.fP.prototype={
$2:function(a,b){H.k(a,"$iau")
H.k(b,"$iau")
return J.ji(a.a,b.a)},
$S:37}
O.fQ.prototype={
$2:function(a,b){H.Y(a)
H.Y(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.av(a,C.e.a0(b+3,4)*4))},
$S:8}
O.fR.prototype={
$2:function(a,b){H.k(a,"$iav")
H.k(b,"$iav")
return J.ji(a.a,b.a)},
$S:38}
O.fS.prototype={
$2:function(a,b){H.Y(a)
H.Y(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.aw(a,C.e.a0(b+3,4)*4))},
$S:8}
O.fT.prototype={
$2:function(a,b){H.k(a,"$iaw")
H.k(b,"$iaw")
return J.ji(a.a,b.a)},
$S:39}
O.fI.prototype={
am:function(){var u,t=this
t.ci()
u=t.f
if(!(Math.abs(u-1)<$.L().a)){t.f=1
u=new D.E(t.b,u,1,[P.A])
u.b=!0
t.a.S(u)}}}
O.cm.prototype={
S:function(a){return this.a.S(H.k(a,"$iv"))},
aO:function(){return this.S(null)},
am:function(){},
bE:function(a){var u,t,s=this
if(!s.c.n(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.am()
u=s.a
u.a=null
u.S(null)}},
sb2:function(a){var u,t=this,s=t.c
if(!s.c)t.bE(new A.ac(s.a,!1,!0))
s=t.e
if(s!==a){if(s!=null)s.gm().L(0,t.gaD())
u=t.e
t.e=a
a.gm().h(0,t.gaD())
s=new D.E(t.b+".textureCube",u,t.e,[T.cz])
s.b=!0
t.a.S(s)}}}
O.fJ.prototype={}
O.aS.prototype={
cO:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.E(s.b+".color",u,a,[V.Z])
t.b=!0
s.a.S(t)}},
am:function(){this.ci()
this.cO(new V.Z(1,1,1))},
saU:function(a,b){this.bE(new A.ac(!0,!1,this.c.c))
this.cO(b)}}
O.fL.prototype={}
O.fM.prototype={
am:function(){var u,t=this
t.cj()
u=t.ch
if(!(Math.abs(u-1)<$.L().a)){t.ch=1
u=new D.E(t.b+".refraction",u,1,[P.A])
u.b=!0
t.a.S(u)}}}
O.fN.prototype={
cP:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.L().a)){u.ch=a
t=new D.E(u.b+".shininess",t,a,[P.A])
t.b=!0
u.a.S(t)}},
am:function(){this.cj()
this.cP(100)}}
O.dx.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.J():u},
S:function(a){var u
H.k(a,"$iv")
u=this.e
if(u!=null)u.u(a)},
aO:function(){return this.S(null)},
dz:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.k(a.fr.j(0,n),"$idy")
if(u==null){t=a.a
u=new A.dy(t,n)
u.ck(t,n)
u.di(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.p(u.y.j(0,"fov"),"$ia4")
u.ch=H.p(u.y.j(0,"ratio"),"$ia4")
u.cx=H.p(u.y.j(0,"boxClr"),"$iS")
u.cy=H.p(u.y.j(0,"boxTxt"),"$iab")
u.db=H.p(u.y.j(0,"viewMat"),"$ial")
a.cU(u)}o.a=u}if(b.e==null){t=b.d.cX(new Z.dR(a.a),$.aG())
t.ap($.aG()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.U(a)}t=a.d
s=a.c
r=o.a
r.U(a)
q=o.b
p=r.Q
C.b.W(p.a,p.d,q)
q=r.ch
C.b.W(q.a,q.d,t/s)
s=o.c
r.cy.cc(s)
s=o.d
t=r.cx
C.b.T(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.gR(s).bW(0)
r=r.db
r.toString
r.aa(s.a4(0,!0))
t=b.e
if(t instanceof Z.ca){t.U(a)
t.a1(a)
t.aw(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.d1()
t=o.c
if(t!=null)t.aw(a)}}
O.bx.prototype={}
T.cy.prototype={}
T.cz.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.J():u},
U:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
aw:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.hK.prototype={
dl:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.cz()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aC(u,k,r,34069,!1,!1)
t.aC(u,k,o,34070,!1,!1)
t.aC(u,k,q,34071,!1,!1)
t.aC(u,k,n,34072,!1,!1)
t.aC(u,k,p,34073,!1,!1)
t.aC(u,k,m,34074,!1,!1)
return u},
dk:function(a){return this.dl(a,".png")},
aC:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.m
W.a8(t,"load",H.l(new T.hL(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
fG:function(a,b,c){var u,t,s,r
b=V.jS(b)
u=V.jS(a.width)
t=V.jS(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jl()
s.width=u
s.height=t
r=H.k(C.h.dH(s,"2d"),"$icb")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.mw(r.getImageData(0,0,s.width,s.height))}}}
T.hL.prototype={
$1:function(a){var u=this,t=u.a,s=t.fG(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.hS(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.hk()}++t.e},
$S:24}
V.eM.prototype={
aG:function(a,b){return!0},
i:function(a){return"all"},
$ib8:1}
V.b8.prototype={}
V.dj.prototype={
aG:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)if(u[s].aG(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.t)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sal:function(a){this.a=H.j(a,"$ib",[V.b8],"$ab")},
$ib8:1}
V.ba.prototype={
aG:function(a,b){return!this.dO(0,b)},
i:function(a){return"!["+this.cg(0)+"]"}}
V.ho.prototype={
dS:function(a){var u,t
if(a.a.length<=0)throw H.h(P.x("May not create a SetMatcher with zero characters."))
u=new H.X([P.r,P.a5])
for(t=new H.dh(a,a.gk(a),[H.aq(a,"u",0)]);t.A();)u.l(0,t.d,!0)
this.sfH(u)},
aG:function(a,b){return this.a.d_(0,b)},
i:function(a){var u=this.a
return P.jy(new H.dg(u,[H.w(u,0)]))},
sfH:function(a){this.a=H.j(a,"$iF",[P.r,P.a5],"$aF")},
$ib8:1}
V.cw.prototype={
q:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cB(this.a.I(0,b))
r.sal(H.c([],[V.b8]))
r.c=!1
C.a.h(this.c,r)
return r},
hn:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
if(r.aG(0,a))return r}return},
i:function(a){return this.b},
sfZ:function(a){this.c=H.j(a,"$ib",[V.cB],"$ab")}}
V.dF.prototype={
i:function(a){var u=H.kO(this.b,"\n","\\n"),t=H.kO(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cA.prototype={
i:function(a){return this.b},
sfC:function(a){var u=P.n
this.c=H.j(a,"$iF",[u,u],"$aF")}}
V.hO.prototype={
I:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cw(this,b)
u.sfZ(H.c([],[V.cB]))
u.d=null
this.a.l(0,b,u)}return u},
b3:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cA(a)
u=P.n
t.sfC(new H.X([u,u]))
this.b.l(0,a,t)}return t},
hX:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.dF]),l=this.c,k=[P.r],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.c.b4(a,s)
q=l.hn(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.jy(j)
throw H.h(P.x("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.jy(j)
o=l.d
n=o.c.j(0,p)
t=new V.dF(n==null?o.b:n,p,s)}++s}}},
sfP:function(a){this.a=H.j(a,"$iF",[P.n,V.cw],"$aF")},
sfS:function(a){this.b=H.j(a,"$iF",[P.n,V.cA],"$aF")}}
V.cB.prototype={
i:function(a){return this.b.b+": "+this.cg(0)}}
X.bG.prototype={$ibM:1}
X.fp.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.J():u},
ab:function(a){var u=this.x
if(u!=null)u.u(a)},
sdw:function(a,b){var u,t,s=this
if(!J.R(s.r,b)){u=s.r
s.r=b
t=new D.E("region",u,b,[V.cu])
t.b=!0
s.ab(t)}},
U:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.C(u)
q=C.d.ac(r*u)
r=s.b
if(typeof t!=="number")return H.C(t)
p=C.d.ac(r*t)
r=C.d.ac(s.c*u)
a.c=r
s=C.d.ac(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.fs.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.J():u},
U:function(a){var u
a.cy.bd(V.bu())
u=V.bu()
a.db.bd(u)},
aw:function(a){a.cy.at()
a.db.at()},
$ibM:1,
$ibG:1}
X.ds.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.J():u},
ab:function(a){var u
H.k(a,"$iv")
u=this.f
if(u!=null)u.u(a)},
e3:function(){return this.ab(null)},
U:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.aT(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bd(k)
r=$.k9
if(r==null){r=V.kb()
q=V.jB()
p=$.kp
r=V.k4(r,q,p==null?$.kp=new V.I(0,0,-1):p)
$.k9=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aH(0,a,s)
if(t!=null)u=t.p(0,u)}a.db.bd(u)},
aw:function(a){a.cy.at()
a.db.at()},
$ibM:1,
$ibG:1}
X.bS.prototype={}
V.jf.prototype={
$1:function(a){var u
H.k(a,"$ib0")
u=C.d.dD(this.a.gho(),2)
if(u!=="0.00")P.jT(u+" fps")},
$S:40}
V.hs.prototype={
dT:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a8(q,"scroll",H.l(new V.hu(o),{func:1,ret:-1,args:[r]}),!1,r)},
cT:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.j(a,"$ib",[P.n],"$ab")
this.fJ()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.hX(C.a.ht(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q){p=s[q]
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
if(H.mS(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.Q(m[1])
l.textContent=H.Q(m[0])
t.appendChild(l)}else{k=P.lX(C.E,n,C.n,!1)
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
fJ:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.hO()
t=P.n
u.sfP(new H.X([t,V.cw]))
u.sfS(new H.X([t,V.cA]))
u.c=null
u.c=u.I(0,q)
t=u.I(0,q).q(0,p)
s=V.ae(new H.a_("*"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,p).q(0,p)
s=new V.ba()
r=[V.b8]
s.sal(H.c([],r))
C.a.h(t.a,s)
t=V.ae(new H.a_("*"))
C.a.h(s.a,t)
t=u.I(0,p).q(0,"BoldEnd")
s=V.ae(new H.a_("*"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,q).q(0,o)
s=V.ae(new H.a_("_"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,o).q(0,o)
s=new V.ba()
s.sal(H.c([],r))
C.a.h(t.a,s)
t=V.ae(new H.a_("_"))
C.a.h(s.a,t)
t=u.I(0,o).q(0,n)
s=V.ae(new H.a_("_"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,q).q(0,m)
s=V.ae(new H.a_("`"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,m).q(0,m)
s=new V.ba()
s.sal(H.c([],r))
C.a.h(t.a,s)
t=V.ae(new H.a_("`"))
C.a.h(s.a,t)
t=u.I(0,m).q(0,"CodeEnd")
s=V.ae(new H.a_("`"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,q).q(0,l)
s=V.ae(new H.a_("["))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,l).q(0,k)
s=V.ae(new H.a_("|"))
C.a.h(t.a,s)
s=u.I(0,l).q(0,j)
t=V.ae(new H.a_("]"))
C.a.h(s.a,t)
s.c=!0
s=u.I(0,l).q(0,l)
t=new V.ba()
t.sal(H.c([],r))
C.a.h(s.a,t)
s=V.ae(new H.a_("|]"))
C.a.h(t.a,s)
s=u.I(0,k).q(0,j)
t=V.ae(new H.a_("]"))
C.a.h(s.a,t)
s.c=!0
s=u.I(0,k).q(0,k)
t=new V.ba()
t.sal(H.c([],r))
C.a.h(s.a,t)
s=V.ae(new H.a_("|]"))
C.a.h(t.a,s)
C.a.h(u.I(0,q).q(0,i).a,new V.eM())
s=u.I(0,i).q(0,i)
t=new V.ba()
t.sal(H.c([],r))
C.a.h(s.a,t)
s=V.ae(new H.a_("*_`["))
C.a.h(t.a,s)
s=u.I(0,"BoldEnd")
s.d=s.a.b3(p)
s=u.I(0,n)
s.d=s.a.b3(o)
s=u.I(0,"CodeEnd")
s.d=s.a.b3(m)
s=u.I(0,j)
s.d=s.a.b3("Link")
s=u.I(0,i)
s.d=s.a.b3(i)
this.b=u}}
V.hu.prototype={
$1:function(a){P.kk(C.i,new V.ht(this.a))},
$S:24}
V.ht.prototype={
$0:function(){var u=C.d.ac(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:2};(function aliases(){var u=J.a.prototype
u.dM=u.i
u=J.dd.prototype
u.dN=u.i
u=O.cm.prototype
u.ci=u.am
u=O.aS.prototype
u.cj=u.am
u=V.dj.prototype
u.dO=u.aG
u.cg=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"mq","lQ",12)
u(P,"mr","lR",12)
u(P,"ms","lS",12)
t(P,"kC","mo",3)
var n
s(n=E.ah.prototype,"gdu",0,0,null,["$1","$0"],["dv","hD"],0,0)
s(n,"gds",0,0,null,["$1","$0"],["dt","hC"],0,0)
s(n,"gdq",0,0,null,["$1","$0"],["dr","hz"],0,0)
r(n,"ghx","hy",6)
r(n,"ghA","hB",6)
s(n=E.dE.prototype,"gcl",0,0,null,["$1","$0"],["cn","cm"],0,0)
q(n,"ghO","dA",3)
p(n=X.dL.prototype,"geX","eY",10)
p(n,"geL","eM",10)
p(n,"geR","eS",4)
p(n,"gf0","f1",16)
p(n,"geZ","f_",16)
p(n,"gf4","f5",4)
p(n,"gf8","f9",4)
p(n,"geV","eW",4)
p(n,"gf6","f7",4)
p(n,"geT","eU",4)
p(n,"gfa","fb",32)
p(n,"gfc","fd",10)
p(n,"gfq","fs",11)
p(n,"gfm","fn",11)
p(n,"gfo","fp",11)
s(D.b5.prototype,"gdV",0,0,null,["$1","$0"],["aj","dW"],0,0)
s(n=D.df.prototype,"gcH",0,0,null,["$1","$0"],["cI","f2"],0,0)
p(n,"gfe","ff",33)
r(n,"geD","eE",14)
r(n,"gfi","fj",14)
o(V.O.prototype,"gk","bY",19)
o(V.I.prototype,"gk","bY",19)
s(n=U.ck.prototype,"gaA",0,0,null,["$1","$0"],["J","a_"],0,0)
r(n,"gdX","dY",20)
r(n,"gfg","fh",20)
s(n=U.dM.prototype,"gaA",0,0,null,["$1","$0"],["J","a_"],0,0)
p(n,"gbs","bt",1)
p(n,"gbu","bv",1)
p(n,"gbw","bx",1)
s(n=U.dN.prototype,"gaA",0,0,null,["$1","$0"],["J","a_"],0,0)
p(n,"gbs","bt",1)
p(n,"gbu","bv",1)
p(n,"gbw","bx",1)
p(n,"gex","ey",1)
p(n,"gez","eA",1)
p(n,"gfX","fY",1)
p(n,"gfV","fW",1)
p(n,"gfT","fU",1)
p(U.dO.prototype,"geB","eC",1)
s(M.d2.prototype,"gN",0,0,null,["$1","$0"],["O","aL"],0,0)
s(n=M.d7.prototype,"gN",0,0,null,["$1","$0"],["O","aL"],0,0)
r(n,"geN","eO",6)
r(n,"geP","eQ",6)
s(n=M.dC.prototype,"gN",0,0,null,["$1","$0"],["O","aL"],0,0)
r(n,"geF","eG",22)
r(n,"gfk","fl",22)
s(n=O.dk.prototype,"gaD",0,0,null,["$1","$0"],["S","aO"],0,0)
s(n,"gfE",0,0,null,["$1","$0"],["cM","fF"],0,0)
r(n,"geH","eI",13)
r(n,"geJ","eK",13)
s(O.cm.prototype,"gaD",0,0,null,["$1","$0"],["S","aO"],0,0)
s(O.dx.prototype,"gaD",0,0,null,["$1","$0"],["S","aO"],0,0)
s(X.ds.prototype,"ge2",0,0,null,["$1","$0"],["ab","e3"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.M,null)
s(P.M,[H.js,J.a,J.af,P.e6,P.e,H.dh,P.aP,H.bI,H.dK,H.hT,P.bo,H.cc,H.en,P.ad,H.fz,H.fA,H.fv,P.et,P.b4,P.az,P.dS,P.hC,P.cx,P.hD,P.b0,P.ag,P.iZ,P.iT,P.cG,P.iN,P.u,P.cd,P.iY,P.a5,P.at,P.a9,P.bn,P.h9,P.dB,P.e_,P.fo,P.b,P.F,P.K,P.ak,P.n,P.bw,W.f2,W.B,W.d9,P.ey,P.iO,O.T,O.cn,E.eV,E.ah,E.hg,E.dE,Z.dQ,Z.dR,Z.ca,Z.bq,Z.bf,D.eY,D.aM,D.v,X.d_,X.de,X.fx,X.fD,X.ao,X.h_,X.hP,X.dL,D.b5,D.a6,D.dt,D.dA,V.Z,V.as,V.ff,V.dm,V.a7,V.a3,V.ai,V.bd,V.cu,V.O,V.I,U.dM,U.dN,U.dO,M.d2,M.d7,M.bR,M.dC,A.cW,A.eQ,A.ac,A.au,A.av,A.aw,A.fK,A.bT,A.bU,A.bW,A.dH,A.i0,F.a1,F.b7,F.bv,F.dw,F.hp,F.hq,F.hr,F.ap,F.ic,F.id,F.ih,F.ii,O.bx,O.cm,O.fL,T.hK,V.eM,V.b8,V.dj,V.ho,V.cw,V.dF,V.cA,V.hO,X.bG,X.bS,X.fs,X.ds,V.hs])
s(J.a,[J.fu,J.dc,J.dd,J.aQ,J.bK,J.bL,H.cq,W.f,W.eL,W.cX,W.cb,W.aK,W.aL,W.N,W.dU,W.f6,W.f7,W.dW,W.d6,W.dY,W.f9,W.m,W.e0,W.aO,W.fr,W.e2,W.bp,W.fC,W.fU,W.e7,W.e8,W.aU,W.e9,W.ec,W.aV,W.eg,W.ei,W.aY,W.ej,W.aZ,W.eo,W.aC,W.er,W.hN,W.b1,W.eu,W.hR,W.i5,W.ez,W.eB,W.eD,W.eF,W.eH,P.b6,P.e4,P.bb,P.ee,P.hd,P.ep,P.be,P.ew,P.eR,P.dT,P.cY,P.du,P.bQ,P.dv,P.dD,P.dI,P.el])
s(J.dd,[J.ha,J.bX,J.bt])
t(J.jr,J.aQ)
s(J.bK,[J.db,J.da])
t(P.fB,P.e6)
s(P.fB,[H.dJ,W.iv,W.iu,P.fk])
t(H.a_,H.dJ)
s(P.e,[H.fc,H.fG,H.im])
s(P.aP,[H.fH,H.io])
s(P.bo,[H.h6,H.fw,H.i3,H.hV,H.eX,H.hm,P.eP,P.dr,P.aI,P.i4,P.i2,P.hy,P.f0,P.f5])
s(H.cc,[H.jh,H.hH,H.j9,H.ja,H.jb,P.ir,P.iq,P.is,P.it,P.iX,P.iW,P.iA,P.iE,P.iB,P.iC,P.iD,P.iH,P.iI,P.iG,P.iF,P.hE,P.hF,P.j4,P.iR,P.iQ,P.iS,P.fF,P.fa,P.fb,W.fW,W.fY,W.hl,W.hB,W.iz,P.j6,P.fl,P.fm,P.eT,E.hh,E.hi,E.hj,E.hM,D.fg,D.fh,F.j_,F.ik,F.ij,F.ie,F.ig,O.fO,O.fP,O.fQ,O.fR,O.fS,O.fT,T.hL,V.jf,V.hu,V.ht])
s(H.hH,[H.hz,H.c8])
t(H.ip,P.eP)
t(P.fE,P.ad)
t(H.X,P.fE)
t(H.dg,H.fc)
t(H.dn,H.cq)
s(H.dn,[H.cH,H.cJ])
t(H.cI,H.cH)
t(H.cp,H.cI)
t(H.cK,H.cJ)
t(H.dp,H.cK)
s(H.dp,[H.h0,H.h1,H.h2,H.h3,H.h4,H.dq,H.h5])
t(P.iP,P.iZ)
t(P.iM,P.iT)
t(P.d1,P.hD)
t(P.fd,P.cd)
t(P.i6,P.fd)
t(P.i7,P.d1)
s(P.a9,[P.A,P.r])
s(P.aI,[P.bP,P.ft])
s(W.f,[W.H,W.fj,W.aX,W.cL,W.b_,W.aD,W.cN,W.il,W.cE,P.eU,P.bF])
s(W.H,[W.a0,W.bm])
s(W.a0,[W.q,P.o])
s(W.q,[W.eN,W.eO,W.bH,W.d4,W.fn,W.cl,W.hn])
s(W.aK,[W.cg,W.f3,W.f4])
t(W.f1,W.aL)
t(W.ch,W.dU)
t(W.dX,W.dW)
t(W.d5,W.dX)
t(W.dZ,W.dY)
t(W.f8,W.dZ)
t(W.aN,W.cX)
t(W.e1,W.e0)
t(W.fi,W.e1)
t(W.e3,W.e2)
t(W.bJ,W.e3)
t(W.by,W.m)
s(W.by,[W.aR,W.aa,W.aE])
t(W.fV,W.e7)
t(W.fX,W.e8)
t(W.ea,W.e9)
t(W.fZ,W.ea)
t(W.ed,W.ec)
t(W.cr,W.ed)
t(W.eh,W.eg)
t(W.hb,W.eh)
t(W.hk,W.ei)
t(W.cM,W.cL)
t(W.hv,W.cM)
t(W.ek,W.ej)
t(W.hw,W.ek)
t(W.hA,W.eo)
t(W.es,W.er)
t(W.hI,W.es)
t(W.cO,W.cN)
t(W.hJ,W.cO)
t(W.ev,W.eu)
t(W.hQ,W.ev)
t(W.b3,W.aa)
t(W.eA,W.ez)
t(W.iw,W.eA)
t(W.dV,W.d6)
t(W.eC,W.eB)
t(W.iJ,W.eC)
t(W.eE,W.eD)
t(W.eb,W.eE)
t(W.eG,W.eF)
t(W.iU,W.eG)
t(W.eI,W.eH)
t(W.iV,W.eI)
t(W.ix,P.hC)
t(W.jD,W.ix)
t(W.iy,P.cx)
t(P.aj,P.iO)
t(P.e5,P.e4)
t(P.fy,P.e5)
t(P.ef,P.ee)
t(P.h7,P.ef)
t(P.eq,P.ep)
t(P.hG,P.eq)
t(P.ex,P.ew)
t(P.hS,P.ex)
t(P.eS,P.dT)
t(P.h8,P.bF)
t(P.em,P.el)
t(P.hx,P.em)
s(E.eV,[Z.cZ,A.cv,T.cy])
s(D.v,[D.br,D.bs,D.E,X.hc])
s(X.hc,[X.di,X.b9,X.co,X.dG])
s(O.T,[D.df,U.ck])
s(D.eY,[U.f_,U.a2])
t(U.cf,U.a2)
t(M.aB,M.bR)
s(A.cv,[A.dl,A.dy])
s(A.dH,[A.ax,A.hY,A.hZ,A.i_,A.hW,A.a4,A.hX,A.S,A.cC,A.i1,A.cD,A.al,A.bV,A.ab])
s(O.bx,[O.dk,O.dx])
s(O.cm,[O.fI,O.fJ,O.aS])
s(O.aS,[O.fM,O.fN])
t(T.cz,T.cy)
s(V.dj,[V.ba,V.cB])
t(X.fp,X.bS)
u(H.dJ,H.dK)
u(H.cH,P.u)
u(H.cI,H.bI)
u(H.cJ,P.u)
u(H.cK,H.bI)
u(P.e6,P.u)
u(W.dU,W.f2)
u(W.dW,P.u)
u(W.dX,W.B)
u(W.dY,P.u)
u(W.dZ,W.B)
u(W.e0,P.u)
u(W.e1,W.B)
u(W.e2,P.u)
u(W.e3,W.B)
u(W.e7,P.ad)
u(W.e8,P.ad)
u(W.e9,P.u)
u(W.ea,W.B)
u(W.ec,P.u)
u(W.ed,W.B)
u(W.eg,P.u)
u(W.eh,W.B)
u(W.ei,P.ad)
u(W.cL,P.u)
u(W.cM,W.B)
u(W.ej,P.u)
u(W.ek,W.B)
u(W.eo,P.ad)
u(W.er,P.u)
u(W.es,W.B)
u(W.cN,P.u)
u(W.cO,W.B)
u(W.eu,P.u)
u(W.ev,W.B)
u(W.ez,P.u)
u(W.eA,W.B)
u(W.eB,P.u)
u(W.eC,W.B)
u(W.eD,P.u)
u(W.eE,W.B)
u(W.eF,P.u)
u(W.eG,W.B)
u(W.eH,P.u)
u(W.eI,W.B)
u(P.e4,P.u)
u(P.e5,W.B)
u(P.ee,P.u)
u(P.ef,W.B)
u(P.ep,P.u)
u(P.eq,W.B)
u(P.ew,P.u)
u(P.ex,W.B)
u(P.dT,P.ad)
u(P.el,P.u)
u(P.em,W.B)})();(function constants(){var u=hunkHelpers.makeConstList
C.h=W.bH.prototype
C.B=J.a.prototype
C.a=J.aQ.prototype
C.C=J.da.prototype
C.e=J.db.prototype
C.j=J.dc.prototype
C.d=J.bK.prototype
C.c=J.bL.prototype
C.D=J.bt.prototype
C.F=W.cr.prototype
C.o=J.ha.prototype
C.b=P.bQ.prototype
C.k=J.bX.prototype
C.p=W.b3.prototype
C.q=W.cE.prototype
C.l=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.r=function() {
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
C.x=function(getTagFallback) {
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
C.t=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.u=function(hooks) {
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
C.w=function(hooks) {
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
C.v=function(hooks) {
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
C.m=function(hooks) { return hooks; }

C.y=new P.h9()
C.n=new P.i6()
C.z=new P.i7()
C.f=new P.iP()
C.i=new P.bn(0)
C.A=new P.bn(5e6)
C.E=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.r])})()
var v={mangledGlobalNames:{r:"int",A:"double",a9:"num",n:"String",a5:"bool",K:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.v]},{func:1,ret:-1,args:[D.v]},{func:1,ret:P.K},{func:1,ret:-1},{func:1,ret:-1,args:[W.aa]},{func:1,ret:-1,args:[P.n,,]},{func:1,ret:-1,args:[P.r,[P.e,E.ah]]},{func:1,ret:P.K,args:[F.a1]},{func:1,ret:-1,args:[P.r,P.r]},{func:1,ret:P.K,args:[D.v]},{func:1,ret:-1,args:[W.m]},{func:1,ret:-1,args:[W.aE]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.r,[P.e,V.a7]]},{func:1,ret:-1,args:[P.r,[P.e,D.a6]]},{func:1,ret:P.K,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:-1,args:[W.aR]},{func:1,ret:P.K,args:[,,]},{func:1,ret:P.n,args:[P.r]},{func:1,ret:P.A},{func:1,ret:-1,args:[P.r,[P.e,U.a2]]},{func:1,ret:P.K,args:[,]},{func:1,ret:-1,args:[P.r,[P.e,M.aB]]},{func:1,args:[,]},{func:1,ret:P.K,args:[W.m]},{func:1,ret:P.a5,args:[W.H]},{func:1,ret:W.a0,args:[W.H]},{func:1,ret:P.K,args:[{func:1,ret:-1}]},{func:1,args:[,P.n]},{func:1,args:[P.n]},{func:1,ret:P.K,args:[P.a9]},{func:1,ret:[P.az,,],args:[,]},{func:1,ret:-1,args:[W.b3]},{func:1,ret:P.a5,args:[[P.e,D.a6]]},{func:1,ret:P.K,args:[F.ap,P.A,P.A]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,args:[W.m]},{func:1,ret:P.r,args:[A.au,A.au]},{func:1,ret:P.r,args:[A.av,A.av]},{func:1,ret:P.r,args:[A.aw,A.aw]},{func:1,ret:P.K,args:[P.b0]},{func:1,ret:P.K,args:[,],opt:[P.ak]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aJ=0
$.c9=null
$.jX=null
$.jF=!1
$.kG=null
$.kA=null
$.kM=null
$.j7=null
$.jc=null
$.jP=null
$.bY=null
$.cR=null
$.cS=null
$.jG=!1
$.V=C.f
$.an=[]
$.k6=null
$.ka=null
$.cs=null
$.kg=null
$.ko=null
$.kq=null
$.i8=null
$.i9=null
$.ia=null
$.kp=null
$.k9=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"n0","kR",function(){return H.kF("_$dart_dartClosure")})
u($,"n1","jU",function(){return H.kF("_$dart_js")})
u($,"n4","kS",function(){return H.b2(H.hU({
toString:function(){return"$receiver$"}}))})
u($,"n5","kT",function(){return H.b2(H.hU({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"n6","kU",function(){return H.b2(H.hU(null))})
u($,"n7","kV",function(){return H.b2(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"na","kY",function(){return H.b2(H.hU(void 0))})
u($,"nb","kZ",function(){return H.b2(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"n9","kX",function(){return H.b2(H.km(null))})
u($,"n8","kW",function(){return H.b2(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nd","l0",function(){return H.b2(H.km(void 0))})
u($,"nc","l_",function(){return H.b2(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nt","jV",function(){return P.lP()})
u($,"nu","l4",function(){return P.lD("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nm","l3",function(){return Z.ay(0)})
u($,"ng","l1",function(){return Z.ay(511)})
u($,"no","aG",function(){return Z.ay(1)})
u($,"nn","bk",function(){return Z.ay(2)})
u($,"ni","bj",function(){return Z.ay(4)})
u($,"np","bD",function(){return Z.ay(8)})
u($,"nq","bl",function(){return Z.ay(16)})
u($,"nj","cU",function(){return Z.ay(32)})
u($,"nk","cV",function(){return Z.ay(64)})
u($,"nl","l2",function(){return Z.ay(96)})
u($,"nr","c5",function(){return Z.ay(128)})
u($,"nh","bi",function(){return Z.ay(256)})
u($,"n_","kQ",function(){return new V.ff(1e-9)})
u($,"mZ","L",function(){return $.kQ()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cq,ArrayBufferView:H.cq,Float32Array:H.cp,Float64Array:H.cp,Int16Array:H.h0,Int32Array:H.h1,Int8Array:H.h2,Uint16Array:H.h3,Uint32Array:H.h4,Uint8ClampedArray:H.dq,CanvasPixelArray:H.dq,Uint8Array:H.h5,HTMLAudioElement:W.q,HTMLBRElement:W.q,HTMLBaseElement:W.q,HTMLBodyElement:W.q,HTMLButtonElement:W.q,HTMLContentElement:W.q,HTMLDListElement:W.q,HTMLDataElement:W.q,HTMLDataListElement:W.q,HTMLDetailsElement:W.q,HTMLDialogElement:W.q,HTMLEmbedElement:W.q,HTMLFieldSetElement:W.q,HTMLHRElement:W.q,HTMLHeadElement:W.q,HTMLHeadingElement:W.q,HTMLHtmlElement:W.q,HTMLIFrameElement:W.q,HTMLInputElement:W.q,HTMLLIElement:W.q,HTMLLabelElement:W.q,HTMLLegendElement:W.q,HTMLLinkElement:W.q,HTMLMapElement:W.q,HTMLMediaElement:W.q,HTMLMenuElement:W.q,HTMLMetaElement:W.q,HTMLMeterElement:W.q,HTMLModElement:W.q,HTMLOListElement:W.q,HTMLObjectElement:W.q,HTMLOptGroupElement:W.q,HTMLOptionElement:W.q,HTMLOutputElement:W.q,HTMLParagraphElement:W.q,HTMLParamElement:W.q,HTMLPictureElement:W.q,HTMLPreElement:W.q,HTMLProgressElement:W.q,HTMLQuoteElement:W.q,HTMLScriptElement:W.q,HTMLShadowElement:W.q,HTMLSlotElement:W.q,HTMLSourceElement:W.q,HTMLSpanElement:W.q,HTMLStyleElement:W.q,HTMLTableCaptionElement:W.q,HTMLTableCellElement:W.q,HTMLTableDataCellElement:W.q,HTMLTableHeaderCellElement:W.q,HTMLTableColElement:W.q,HTMLTableElement:W.q,HTMLTableRowElement:W.q,HTMLTableSectionElement:W.q,HTMLTemplateElement:W.q,HTMLTextAreaElement:W.q,HTMLTimeElement:W.q,HTMLTitleElement:W.q,HTMLTrackElement:W.q,HTMLUListElement:W.q,HTMLUnknownElement:W.q,HTMLVideoElement:W.q,HTMLDirectoryElement:W.q,HTMLFontElement:W.q,HTMLFrameElement:W.q,HTMLFrameSetElement:W.q,HTMLMarqueeElement:W.q,HTMLElement:W.q,AccessibleNodeList:W.eL,HTMLAnchorElement:W.eN,HTMLAreaElement:W.eO,Blob:W.cX,HTMLCanvasElement:W.bH,CanvasRenderingContext2D:W.cb,CDATASection:W.bm,CharacterData:W.bm,Comment:W.bm,ProcessingInstruction:W.bm,Text:W.bm,CSSNumericValue:W.cg,CSSUnitValue:W.cg,CSSPerspective:W.f1,CSSCharsetRule:W.N,CSSConditionRule:W.N,CSSFontFaceRule:W.N,CSSGroupingRule:W.N,CSSImportRule:W.N,CSSKeyframeRule:W.N,MozCSSKeyframeRule:W.N,WebKitCSSKeyframeRule:W.N,CSSKeyframesRule:W.N,MozCSSKeyframesRule:W.N,WebKitCSSKeyframesRule:W.N,CSSMediaRule:W.N,CSSNamespaceRule:W.N,CSSPageRule:W.N,CSSRule:W.N,CSSStyleRule:W.N,CSSSupportsRule:W.N,CSSViewportRule:W.N,CSSStyleDeclaration:W.ch,MSStyleCSSProperties:W.ch,CSS2Properties:W.ch,CSSImageValue:W.aK,CSSKeywordValue:W.aK,CSSPositionValue:W.aK,CSSResourceValue:W.aK,CSSURLImageValue:W.aK,CSSStyleValue:W.aK,CSSMatrixComponent:W.aL,CSSRotation:W.aL,CSSScale:W.aL,CSSSkew:W.aL,CSSTranslation:W.aL,CSSTransformComponent:W.aL,CSSTransformValue:W.f3,CSSUnparsedValue:W.f4,DataTransferItemList:W.f6,HTMLDivElement:W.d4,DOMException:W.f7,ClientRectList:W.d5,DOMRectList:W.d5,DOMRectReadOnly:W.d6,DOMStringList:W.f8,DOMTokenList:W.f9,Element:W.a0,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.aN,FileList:W.fi,FileWriter:W.fj,HTMLFormElement:W.fn,Gamepad:W.aO,History:W.fr,HTMLCollection:W.bJ,HTMLFormControlsCollection:W.bJ,HTMLOptionsCollection:W.bJ,ImageData:W.bp,HTMLImageElement:W.cl,KeyboardEvent:W.aR,Location:W.fC,MediaList:W.fU,MIDIInputMap:W.fV,MIDIOutputMap:W.fX,MimeType:W.aU,MimeTypeArray:W.fZ,PointerEvent:W.aa,MouseEvent:W.aa,DragEvent:W.aa,Document:W.H,DocumentFragment:W.H,HTMLDocument:W.H,ShadowRoot:W.H,XMLDocument:W.H,Attr:W.H,DocumentType:W.H,Node:W.H,NodeList:W.cr,RadioNodeList:W.cr,Plugin:W.aV,PluginArray:W.hb,RTCStatsReport:W.hk,HTMLSelectElement:W.hn,SourceBuffer:W.aX,SourceBufferList:W.hv,SpeechGrammar:W.aY,SpeechGrammarList:W.hw,SpeechRecognitionResult:W.aZ,Storage:W.hA,CSSStyleSheet:W.aC,StyleSheet:W.aC,TextTrack:W.b_,TextTrackCue:W.aD,VTTCue:W.aD,TextTrackCueList:W.hI,TextTrackList:W.hJ,TimeRanges:W.hN,Touch:W.b1,TouchEvent:W.aE,TouchList:W.hQ,TrackDefaultList:W.hR,CompositionEvent:W.by,FocusEvent:W.by,TextEvent:W.by,UIEvent:W.by,URL:W.i5,VideoTrackList:W.il,WheelEvent:W.b3,Window:W.cE,DOMWindow:W.cE,CSSRuleList:W.iw,ClientRect:W.dV,DOMRect:W.dV,GamepadList:W.iJ,NamedNodeMap:W.eb,MozNamedAttrMap:W.eb,SpeechRecognitionResultList:W.iU,StyleSheetList:W.iV,SVGLength:P.b6,SVGLengthList:P.fy,SVGNumber:P.bb,SVGNumberList:P.h7,SVGPointList:P.hd,SVGStringList:P.hG,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGScriptElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGTransform:P.be,SVGTransformList:P.hS,AudioBuffer:P.eR,AudioParamMap:P.eS,AudioTrackList:P.eU,AudioContext:P.bF,webkitAudioContext:P.bF,BaseAudioContext:P.bF,OfflineAudioContext:P.h8,WebGLBuffer:P.cY,WebGLProgram:P.du,WebGL2RenderingContext:P.bQ,WebGLShader:P.dv,WebGLTexture:P.dD,WebGLUniformLocation:P.dI,SQLResultSetRowList:P.hx})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dn.$nativeSuperclassTag="ArrayBufferView"
H.cH.$nativeSuperclassTag="ArrayBufferView"
H.cI.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.cJ.$nativeSuperclassTag="ArrayBufferView"
H.cK.$nativeSuperclassTag="ArrayBufferView"
H.dp.$nativeSuperclassTag="ArrayBufferView"
W.cL.$nativeSuperclassTag="EventTarget"
W.cM.$nativeSuperclassTag="EventTarget"
W.cN.$nativeSuperclassTag="EventTarget"
W.cO.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.kI,[])
else K.kI([])})})()
//# sourceMappingURL=test.dart.js.map
