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
a[c]=function(){a[c]=function(){H.oM(b)}
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
k2:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
l5:function(){return new P.dV("No element")},
mO:function(){return new P.dV("Too few elements")},
dS:function(a,b,c,d,e){H.j(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.l,args:[e,e]})
if(c-b<=32)H.nh(a,b,c,d,e)
else H.ng(a,b,c,d,e)},
nh:function(a,b,c,d,e){var u,t,s,r,q
H.j(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.l,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.d(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.d(a,r)
r=J.aZ(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.d(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
ng:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.j(a2,"$ib",[a6],"$ab")
H.n(a5,{func:1,ret:P.l,args:[a6,a6]})
u=C.d.a0(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.d.a0(a3+a4,2)
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
if(J.aZ(a5.$2(n,m),0)){i=m
m=n
n=i}if(J.aZ(a5.$2(k,j),0)){i=j
j=k
k=i}if(J.aZ(a5.$2(n,l),0)){i=l
l=n
n=i}if(J.aZ(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.aZ(a5.$2(n,k),0)){i=k
k=n
n=i}if(J.aZ(a5.$2(l,k),0)){i=k
k=l
l=i}if(J.aZ(a5.$2(m,j),0)){i=j
j=m
m=i}if(J.aZ(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.aZ(a5.$2(k,j),0)){i=j
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
if(J.Q(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.N()
if(d<0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.ai()
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
if(typeof a1!=="number")return a1.ai()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.ai()
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
H.dS(a2,a3,h-2,a5,a6)
H.dS(a2,g+2,a4,a5,a6)
if(a)return
if(h<t&&g>s){while(!0){if(h>=a2.length)return H.d(a2,h)
if(!J.Q(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.d(a2,g)
if(!J.Q(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
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
break}}}H.dS(a2,h,g,a5,a6)}else H.dS(a2,h,g,a5,a6)},
a5:function a5(a){this.a=a},
fF:function fF(){},
dx:function dx(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ha:function ha(a,b,c){this.a=a
this.b=b
this.$ti=c},
hb:function hb(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
j1:function j1(a,b,c){this.a=a
this.b=b
this.$ti=c},
j2:function j2(a,b,c){this.a=a
this.b=b
this.$ti=c},
bY:function bY(){},
cQ:function cQ(){},
e4:function e4(){},
mH:function(){throw H.c(P.F("Cannot modify unmodifiable Map"))},
cl:function(a){var u,t=H.K(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
ow:function(a){return v.types[H.Z(a)]},
oB:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.U(a).$iI},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.b_(a)
if(typeof u!=="string")throw H.c(H.ar(a))
return u},
cG:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
n8:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.d(p,3)
u=H.K(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ad(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.E(s,q)|32)>t)return}return parseInt(a,b)},
c3:function(a){return H.n_(a)+H.kJ(H.bN(a),0,null)},
n_:function(a){var u,t,s,r,q,p,o,n=J.U(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.N||!!n.$ibI){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cl(t.length>1&&C.b.E(t,0)===36?C.b.aj(t,1):t)},
n0:function(){if(!!self.location)return self.location.href
return},
lg:function(a){var u,t,s,r,q
H.k7(a)
u=J.aK(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
n9:function(a){var u,t,s,r=H.e([],[P.l])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.B)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ar(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.aJ(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.ar(s))}return H.lg(r)},
lh:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ar(s))
if(s<0)throw H.c(H.ar(s))
if(s>65535)return H.n9(a)}return H.lg(a)},
na:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
dK:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aJ(u,10))>>>0,56320|u&1023)}}throw H.c(P.ad(a,0,1114111,null,null))},
c2:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
n7:function(a){var u=H.c2(a).getFullYear()+0
return u},
n5:function(a){var u=H.c2(a).getMonth()+1
return u},
n1:function(a){var u=H.c2(a).getDate()+0
return u},
n2:function(a){var u=H.c2(a).getHours()+0
return u},
n4:function(a){var u=H.c2(a).getMinutes()+0
return u},
n6:function(a){var u=H.c2(a).getSeconds()+0
return u},
n3:function(a){var u=H.c2(a).getMilliseconds()+0
return u},
D:function(a){throw H.c(H.ar(a))},
d:function(a,b){if(a==null)J.aK(a)
throw H.c(H.cg(a,b))},
cg:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.b0(!0,b,s,null)
u=H.Z(J.aK(a))
if(!(b<0)){if(typeof u!=="number")return H.D(u)
t=b>=u}else t=!0
if(t)return P.W(b,a,s,null,u)
return P.dM(b,s)},
oq:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c4(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c4(a,c,!0,b,"end",u)
return new P.b0(!0,b,"end",null)},
ar:function(a){return new P.b0(!0,a,null,null)},
on:function(a){if(typeof a!=="number")throw H.c(H.ar(a))
return a},
c:function(a){var u
if(a==null)a=new P.dH()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.ma})
u.name=""}else u.toString=H.ma
return u},
ma:function(){return J.b_(this.dartException)},
u:function(a){throw H.c(a)},
B:function(a){throw H.c(P.bW(a))},
bd:function(a){var u,t,s,r,q,p
a=H.m8(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.e([],[P.i])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ip(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iq:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lq:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
la:function(a,b){return new H.hC(a,b==null?null:b.method)},
ku:function(a,b){var u=b==null,t=u?null:b.method
return new H.fX(a,t,u?null:b.receiver)},
aJ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kh(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aJ(t,16)&8191)===10)switch(s){case 438:return f.$1(H.ku(H.m(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.la(H.m(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.md()
q=$.me()
p=$.mf()
o=$.mg()
n=$.mj()
m=$.mk()
l=$.mi()
$.mh()
k=$.mm()
j=$.ml()
i=r.ae(u)
if(i!=null)return f.$1(H.ku(H.K(u),i))
else{i=q.ae(u)
if(i!=null){i.method="call"
return f.$1(H.ku(H.K(u),i))}else{i=p.ae(u)
if(i==null){i=o.ae(u)
if(i==null){i=n.ae(u)
if(i==null){i=m.ae(u)
if(i==null){i=l.ae(u)
if(i==null){i=o.ae(u)
if(i==null){i=k.ae(u)
if(i==null){i=j.ae(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.la(H.K(u),i))}}return f.$1(new H.iB(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dU()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.b0(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dU()
return a},
cj:function(a){var u
if(a==null)return new H.eI(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eI(a)},
ou:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
oA:function(a,b,c,d,e,f){H.f(a,"$ikp")
switch(H.Z(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.y("Unsupported number of arguments for wrapped closure"))},
cf:function(a,b){var u
H.Z(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oA)
a.$identity=u
return u},
mG:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.i4().constructor.prototype):Object.create(new H.cn(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b1
if(typeof t!=="number")return t.m()
$.b1=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.l1(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.ow,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.l_:H.km
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.l1(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
mD:function(a,b,c,d){var u=H.km
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
l1:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mF(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mD(t,!r,u,b)
if(t===0){r=$.b1
if(typeof r!=="number")return r.m()
$.b1=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.co
return new Function(r+H.m(q==null?$.co=H.fm("self"):q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b1
if(typeof r!=="number")return r.m()
$.b1=r+1
o+=r
r="return function("+o+"){return this."
q=$.co
return new Function(r+H.m(q==null?$.co=H.fm("self"):q)+"."+H.m(u)+"("+o+");}")()},
mE:function(a,b,c,d){var u=H.km,t=H.l_
switch(b?-1:a){case 0:throw H.c(H.ne("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mF:function(a,b){var u,t,s,r,q,p,o,n=$.co
if(n==null)n=$.co=H.fm("self")
u=$.kZ
if(u==null)u=$.kZ=H.fm("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mE(s,!q,t,b)
if(s===1){n="return function(){return this."+H.m(n)+"."+H.m(t)+"(this."+H.m(u)+");"
u=$.b1
if(typeof u!=="number")return u.m()
$.b1=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.m(n)+"."+H.m(t)+"(this."+H.m(u)+", "+o+");"
u=$.b1
if(typeof u!=="number")return u.m()
$.b1=u+1
return new Function(n+u+"}")()},
kM:function(a,b,c,d,e,f,g){return H.mG(a,b,H.Z(c),d,!!e,!!f,g)},
km:function(a){return a.a},
l_:function(a){return a.c},
fm:function(a){var u,t,s,r=new H.cn("self","target","receiver","name"),q=J.kr(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
C:function(a){if(a==null)H.oj("boolean expression must not be null")
return a},
K:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aX(a,"String"))},
or:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aX(a,"double"))},
m4:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aX(a,"num"))},
lW:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aX(a,"bool"))},
Z:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aX(a,"int"))},
m6:function(a,b){throw H.c(H.aX(a,H.cl(H.K(b).substring(2))))},
oG:function(a,b){throw H.c(H.mC(a,H.cl(H.K(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.U(a)[b])return a
H.m6(a,b)},
t:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.U(a)[b]
else u=!0
if(u)return a
H.oG(a,b)},
k7:function(a){if(a==null)return a
if(!!J.U(a).$ib)return a
throw H.c(H.aX(a,"List<dynamic>"))},
m2:function(a,b){var u
if(a==null)return a
u=J.U(a)
if(!!u.$ib)return a
if(u[b])return a
H.m6(a,b)},
lX:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.Z(u)]
else return a.$S()}return},
f3:function(a,b){var u
if(typeof a=="function")return!0
u=H.lX(J.U(a))
if(u==null)return!1
return H.lL(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.kG)return a
$.kG=!0
try{if(H.f3(a,b))return a
u=H.kd(b)
t=H.aX(a,u)
throw H.c(t)}finally{$.kG=!1}},
kN:function(a,b){if(a!=null&&!H.kL(a,b))H.u(H.aX(a,H.kd(b)))
return a},
aX:function(a,b){return new H.ir("TypeError: "+P.dm(a)+": type '"+H.lR(a)+"' is not a subtype of type '"+b+"'")},
mC:function(a,b){return new H.fn("CastError: "+P.dm(a)+": type '"+H.lR(a)+"' is not a subtype of type '"+b+"'")},
lR:function(a){var u,t=J.U(a)
if(!!t.$icq){u=H.lX(t)
if(u!=null)return H.kd(u)
return"Closure"}return H.c3(a)},
oj:function(a){throw H.c(new H.j3(a))},
oM:function(a){throw H.c(new P.fy(H.K(a)))},
ne:function(a){return new H.hS(a)},
m_:function(a){return v.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
bN:function(a){if(a==null)return
return a.$ti},
pr:function(a,b,c){return H.ck(a["$a"+H.m(c)],H.bN(b))},
bM:function(a,b,c,d){var u
H.K(c)
H.Z(d)
u=H.ck(a["$a"+H.m(c)],H.bN(b))
return u==null?null:u[d]},
az:function(a,b,c){var u
H.K(b)
H.Z(c)
u=H.ck(a["$a"+H.m(b)],H.bN(a))
return u==null?null:u[c]},
q:function(a,b){var u
H.Z(b)
u=H.bN(a)
return u==null?null:u[b]},
kd:function(a){return H.bL(a,null)},
bL:function(a,b){var u,t
H.j(b,"$ib",[P.i],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cl(a[0].name)+H.kJ(a,1,b)
if(typeof a=="function")return H.cl(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Z(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.m(b[t])}if('func' in a)return H.nT(a,b)
if('futureOr' in a)return"FutureOr<"+H.bL("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nT:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.i]
H.j(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.e([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.d(a0,n)
p=C.b.m(p,a0[n])
m=u[q]
if(m!=null&&m!==P.O)p+=" extends "+H.bL(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bL(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bL(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bL(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.ot(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.K(b[h])
j=j+i+H.bL(e[d],a0)+(" "+H.m(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
kJ:function(a,b,c){var u,t,s,r,q,p
H.j(c,"$ib",[P.i],"$ab")
if(a==null)return""
u=new P.ak("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bL(p,c)}return"<"+u.i(0)+">"},
ck:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
kK:function(a,b,c,d){var u,t
H.K(b)
H.k7(c)
H.K(d)
if(a==null)return!1
u=H.bN(a)
t=J.U(a)
if(t[b]==null)return!1
return H.lU(H.ck(t[d],u),null,c,null)},
j:function(a,b,c,d){H.K(b)
H.k7(c)
H.K(d)
if(a==null)return a
if(H.kK(a,b,c,d))return a
throw H.c(H.aX(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cl(b.substring(2))+H.kJ(c,0,null),v.mangledGlobalNames)))},
lU:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aI(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aI(a[t],b,c[t],d))return!1
return!0},
pp:function(a,b,c){return a.apply(b,H.ck(J.U(b)["$a"+H.m(c)],H.bN(b)))},
m1:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="O"||a.name==="J"||a===-1||a===-2||H.m1(u)}return!1},
kL:function(a,b){var u,t
if(a==null)return b==null||b.name==="O"||b.name==="J"||b===-1||b===-2||H.m1(b)
if(b==null||b===-1||b.name==="O"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kL(a,"type" in b?b.type:null))return!0
if('func' in b)return H.f3(a,b)}u=J.U(a).constructor
t=H.bN(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aI(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.kL(a,b))throw H.c(H.aX(a,H.kd(b)))
return a},
aI:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="O"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="O"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aI(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="J")return!0
if('func' in c)return H.lL(a,b,c,d)
if('func' in a)return c.name==="kp"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aI("type" in a?a.type:l,b,s,d)
else if(H.aI(a,b,s,d))return!0
else{if(!('$i'+"cu" in t.prototype))return!1
r=t.prototype["$a"+"cu"]
q=H.ck(r,u?a.slice(1):l)
return H.aI(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.lU(H.ck(m,u),b,p,d)},
lL:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.oE(h,b,g,d)},
oE:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aI(c[s],d,a[s],b))return!1}return!0},
pq:function(a,b,c){Object.defineProperty(a,H.K(b),{value:c,enumerable:false,writable:true,configurable:true})},
oC:function(a){var u,t,s,r,q=H.K($.m0.$1(a)),p=$.k0[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k6[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.K($.lT.$2(a,q))
if(q!=null){p=$.k0[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k6[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kc(u)
$.k0[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.k6[q]=u
return u}if(s==="-"){r=H.kc(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.m5(a,u)
if(s==="*")throw H.c(P.iA(q))
if(v.leafTags[q]===true){r=H.kc(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.m5(a,u)},
m5:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kQ(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kc:function(a){return J.kQ(a,!1,null,!!a.$iI)},
oD:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kc(u)
else return J.kQ(u,c,null,null)},
oy:function(){if(!0===$.kP)return
$.kP=!0
H.oz()},
oz:function(){var u,t,s,r,q,p,o,n
$.k0=Object.create(null)
$.k6=Object.create(null)
H.ox()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.m7.$1(q)
if(p!=null){o=H.oD(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
ox:function(){var u,t,s,r,q,p,o=C.E()
o=H.ce(C.F,H.ce(C.G,H.ce(C.u,H.ce(C.u,H.ce(C.H,H.ce(C.I,H.ce(C.J(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.m0=new H.k3(r)
$.lT=new H.k4(q)
$.m7=new H.k5(p)},
ce:function(a,b){return a(b)||b},
mQ:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a3("Illegal RegExp pattern ("+String(r)+")",a,null))},
oJ:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
os:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
m8:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
m9:function(a,b,c){var u=H.oK(a,b,c)
return u},
oK:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.m8(b),'g'),H.os(c))},
fs:function fs(){},
ft:function ft(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ip:function ip(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hC:function hC(a,b){this.a=a
this.b=b},
fX:function fX(a,b,c){this.a=a
this.b=b
this.c=c},
iB:function iB(a){this.a=a},
kh:function kh(a){this.a=a},
eI:function eI(a){this.a=a
this.b=null},
cq:function cq(){},
ic:function ic(){},
i4:function i4(){},
cn:function cn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ir:function ir(a){this.a=a},
fn:function fn(a){this.a=a},
hS:function hS(a){this.a=a},
j3:function j3(a){this.a=a},
a_:function a_(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
h0:function h0(a,b){this.a=a
this.b=b
this.c=null},
h1:function h1(a,b){this.a=a
this.$ti=b},
h2:function h2(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
k3:function k3(a){this.a=a},
k4:function k4(a){this.a=a},
k5:function k5(a){this.a=a},
fW:function fW(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bK:function(a){return a},
mZ:function(a){return new Int8Array(a)},
bh:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cg(b,a))},
nR:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oq(a,b,c))
return b},
cB:function cB(){},
bE:function bE(){},
dE:function dE(){},
cC:function cC(){},
dF:function dF(){},
hw:function hw(){},
hx:function hx(){},
hy:function hy(){},
hz:function hz(){},
hA:function hA(){},
dG:function dG(){},
cD:function cD(){},
cV:function cV(){},
cW:function cW(){},
cX:function cX(){},
cY:function cY(){},
ot:function(a){return J.l6(a?Object.keys(a):[],null)},
oF:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kQ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
f5:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kP==null){H.oy()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.iA("Return interceptor for "+H.m(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kT()]
if(r!=null)return r
r=H.oC(a)
if(r!=null)return r
if(typeof a=="function")return C.P
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.kT(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
mP:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kl(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ad(a,0,4294967295,"length",null))
return J.l6(new Array(a),b)},
l6:function(a,b){return J.kr(H.e(a,[b]))},
kr:function(a){H.k7(a)
a.fixed$length=Array
return a},
U:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ds.prototype
return J.dr.prototype}if(typeof a=="string")return J.bi.prototype
if(a==null)return J.dt.prototype
if(typeof a=="boolean")return J.fV.prototype
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof P.O)return a
return J.f5(a)},
ov:function(a){if(typeof a=="number")return J.bB.prototype
if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof P.O)return a
return J.f5(a)},
ci:function(a){if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof P.O)return a
return J.f5(a)},
k1:function(a){if(a==null)return a
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof P.O)return a
return J.f5(a)},
lY:function(a){if(typeof a=="number")return J.bB.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.bI.prototype
return a},
lZ:function(a){if(typeof a=="number")return J.bB.prototype
if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.bI.prototype
return a},
kO:function(a){if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.bI.prototype
return a},
f4:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof P.O)return a
return J.f5(a)},
mu:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ov(a).m(a,b)},
Q:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).q(a,b)},
aZ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.lY(a).ai(a,b)},
kV:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lZ(a).t(a,b)},
mv:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.lY(a).p(a,b)},
d8:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.oB(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ci(a).j(a,b)},
ki:function(a,b,c){return J.k1(a).k(a,b,c)},
mw:function(a,b){return J.kO(a).E(a,b)},
mx:function(a,b,c){return J.f4(a).hl(a,b,c)},
my:function(a,b,c,d){return J.f4(a).hR(a,b,c,d)},
mz:function(a,b){return J.kO(a).W(a,b)},
kj:function(a,b){return J.lZ(a).i1(a,b)},
kk:function(a,b){return J.k1(a).H(a,b)},
mA:function(a,b,c,d){return J.f4(a).ic(a,b,c,d)},
kW:function(a,b){return J.k1(a).G(a,b)},
kX:function(a){return J.f4(a).gbY(a)},
d9:function(a){return J.U(a).gF(a)},
bQ:function(a){return J.k1(a).gU(a)},
aK:function(a){return J.ci(a).gl(a)},
mB:function(a,b){return J.f4(a).iL(a,b)},
b_:function(a){return J.U(a).i(a)},
a:function a(){},
fV:function fV(){},
dt:function dt(){},
du:function du(){},
hG:function hG(){},
bI:function bI(){},
bj:function bj(){},
aM:function aM(a){this.$ti=a},
ks:function ks(a){this.$ti=a},
as:function as(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bB:function bB(){},
ds:function ds(){},
dr:function dr(){},
bi:function bi(){}},P={
nw:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.ok()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cf(new P.j5(s),1)).observe(u,{childList:true})
return new P.j4(s,u,t)}else if(self.setImmediate!=null)return P.ol()
return P.om()},
nx:function(a){self.scheduleImmediate(H.cf(new P.j6(H.n(a,{func:1,ret:-1})),0))},
ny:function(a){self.setImmediate(H.cf(new P.j7(H.n(a,{func:1,ret:-1})),0))},
nz:function(a){P.kx(C.q,H.n(a,{func:1,ret:-1}))},
kx:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.d.a0(a.a,1000)
return P.nC(u<0?0:u,b)},
lp:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.bb]})
u=C.d.a0(a.a,1000)
return P.nD(u<0?0:u,b)},
nC:function(a,b){var u=new P.eO()
u.eu(a,b)
return u},
nD:function(a,b){var u=new P.eO()
u.ev(a,b)
return u},
nA:function(a,b){var u,t,s
b.a=1
try{a.e5(new P.jg(b),new P.jh(b),null)}catch(s){u=H.aJ(s)
t=H.cj(s)
P.oH(new P.ji(b,u,t))}},
lB:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaH")
if(u>=4){t=b.bO()
b.a=a.a
b.c=a.c
P.cT(b,t)}else{t=H.f(b.c,"$ibg")
b.a=2
b.c=a
a.d7(t)}},
cT:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$ian")
g=g.b
r=s.a
q=s.b
g.toString
P.jW(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cT(h.a,b)}g=h.a
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
P.jW(i,i,g,r,q)
return}l=$.Y
if(l!=n)$.Y=n
else l=i
g=b.c
if(g===8)new P.jm(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jl(u,b,o).$0()}else if((g&2)!==0)new P.jk(h,u,b).$0()
if(l!=null)$.Y=l
g=u.b
if(!!J.U(g).$icu){if(g.a>=4){k=H.f(q.c,"$ibg")
q.c=null
b=q.bf(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.lB(g,q)
return}}j=b.b
k=H.f(j.c,"$ibg")
j.c=null
b=j.bf(k)
g=u.a
r=u.b
if(!g){H.A(r,H.q(j,0))
j.a=4
j.c=r}else{H.f(r,"$ian")
j.a=8
j.c=r}h.a=j
g=j}},
of:function(a,b){if(H.f3(a,{func:1,args:[P.O,P.at]}))return H.n(a,{func:1,ret:null,args:[P.O,P.at]})
if(H.f3(a,{func:1,args:[P.O]}))return H.n(a,{func:1,ret:null,args:[P.O]})
throw H.c(P.kl(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oe:function(){var u,t
for(;u=$.cd,u!=null;){$.d5=null
t=u.b
$.cd=t
if(t==null)$.d4=null
u.a.$0()}},
oi:function(){$.kH=!0
try{P.oe()}finally{$.d5=null
$.kH=!1
if($.cd!=null)$.kU().$1(P.lV())}},
lQ:function(a){var u=new P.ec(H.n(a,{func:1,ret:-1}))
if($.cd==null){$.cd=$.d4=u
if(!$.kH)$.kU().$1(P.lV())}else $.d4=$.d4.b=u},
oh:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cd
if(u==null){P.lQ(a)
$.d5=$.d4
return}t=new P.ec(a)
s=$.d5
if(s==null){t.b=u
$.cd=$.d5=t}else{t.b=s.b
$.d5=s.b=t
if(t.b==null)$.d4=t}},
oH:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.Y
if(C.f===u){P.jY(t,t,C.f,a)
return}u.toString
P.jY(t,t,u,H.n(u.bT(a),s))},
lo:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.Y
if(u===C.f){u.toString
return P.kx(a,b)}return P.kx(a,H.n(u.bT(b),t))},
nm:function(a,b){var u,t,s={func:1,ret:-1,args:[P.bb]}
H.n(b,s)
u=$.Y
if(u===C.f){u.toString
return P.lp(a,b)}t=u.dm(b,P.bb)
$.Y.toString
return P.lp(a,H.n(t,s))},
jW:function(a,b,c,d,e){var u={}
u.a=d
P.oh(new P.jX(u,e))},
lM:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.Y
if(t===c)return d.$0()
$.Y=c
u=t
try{t=d.$0()
return t}finally{$.Y=u}},
lN:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.A(e,g)
t=$.Y
if(t===c)return d.$1(e)
$.Y=c
u=t
try{t=d.$1(e)
return t}finally{$.Y=u}},
og:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
t=$.Y
if(t===c)return d.$2(e,f)
$.Y=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Y=u}},
jY:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bT(d):c.hZ(d,-1)
P.lQ(d)},
j5:function j5(a){this.a=a},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
eO:function eO(){this.c=0},
jG:function jG(a,b){this.a=a
this.b=b},
jF:function jF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bg:function bg(a,b,c,d,e){var _=this
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
jf:function jf(a,b){this.a=a
this.b=b},
jj:function jj(a,b){this.a=a
this.b=b},
jg:function jg(a){this.a=a},
jh:function jh(a){this.a=a},
ji:function ji(a,b,c){this.a=a
this.b=b
this.c=c},
jm:function jm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jn:function jn(a){this.a=a},
jl:function jl(a,b,c){this.a=a
this.b=b
this.c=c},
jk:function jk(a,b,c){this.a=a
this.b=b
this.c=c},
ec:function ec(a){this.a=a
this.b=null},
i7:function i7(){},
i9:function i9(a,b){this.a=a
this.b=b},
ia:function ia(a,b){this.a=a
this.b=b},
cK:function cK(){},
i8:function i8(){},
bb:function bb(){},
an:function an(a,b){this.a=a
this.b=b},
jP:function jP(){},
jX:function jX(a,b){this.a=a
this.b=b},
ju:function ju(){},
jw:function jw(a,b,c){this.a=a
this.b=b
this.c=c},
jv:function jv(a,b){this.a=a
this.b=b},
jx:function jx(a,b,c){this.a=a
this.b=b
this.c=c},
mR:function(a,b){return new H.a_([a,b])},
l7:function(a,b){return new H.a_([a,b])},
mT:function(a){return H.ou(a,new H.a_([null,null]))},
mU:function(a){return new P.jr([a])},
kD:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lD:function(a,b,c){var u=new P.js(a,b,[c])
u.c=a.e
return u},
mN:function(a,b,c){var u,t
if(P.kI(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.e([],[P.i])
C.a.h($.au,a)
try{P.nU(a,u)}finally{if(0>=$.au.length)return H.d($.au,-1)
$.au.pop()}t=P.lk(b,H.m2(u,"$ih"),", ")+c
return t.charCodeAt(0)==0?t:t},
kq:function(a,b,c){var u,t
if(P.kI(a))return b+"..."+c
u=new P.ak(b)
C.a.h($.au,a)
try{t=u
t.a=P.lk(t.a,a,", ")}finally{if(0>=$.au.length)return H.d($.au,-1)
$.au.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kI:function(a){var u,t
for(u=$.au.length,t=0;t<u;++t)if(a===$.au[t])return!0
return!1},
nU:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.j(b,"$ib",[P.i],"$ab")
u=a.gU(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.A())return
r=H.m(u.gI(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.A()){if(s<=5)return
if(0>=b.length)return H.d(b,-1)
q=b.pop()
if(0>=b.length)return H.d(b,-1)
p=b.pop()}else{o=u.gI(u);++s
if(!u.A()){if(s<=4){C.a.h(b,H.m(o))
return}q=H.m(o)
if(0>=b.length)return H.d(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gI(u);++s
for(;u.A();o=n,n=m){m=u.gI(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.m(o)
q=H.m(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
mS:function(a,b,c){var u=P.mR(b,c)
a.G(0,new P.h3(u,b,c))
return u},
kv:function(a){var u,t={}
if(P.kI(a))return"{...}"
u=new P.ak("")
try{C.a.h($.au,a)
u.a+="{"
t.a=!0
J.kW(a,new P.h8(t,u))
u.a+="}"}finally{if(0>=$.au.length)return H.d($.au,-1)
$.au.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jr:function jr(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cU:function cU(a){this.a=a
this.c=this.b=null},
js:function js(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
h3:function h3(a,b,c){this.a=a
this.b=b
this.c=c},
h4:function h4(){},
v:function v(){},
h7:function h7(){},
h8:function h8(a,b){this.a=a
this.b=b},
af:function af(){},
jH:function jH(){},
h9:function h9(){},
e5:function e5(a,b){this.a=a
this.$ti=b},
jy:function jy(){},
er:function er(){},
eT:function eT(){},
nq:function(a,b,c,d){H.j(b,"$ib",[P.l],"$ab")
if(b instanceof Uint8Array)return P.nr(!1,b,c,d)
return},
nr:function(a,b,c,d){var u,t,s=$.mn()
if(s==null)return
u=0===c
if(u&&!0)return P.kA(s,b)
t=b.length
d=P.bo(c,d,t)
if(u&&d===t)return P.kA(s,b)
return P.kA(s,b.subarray(c,d))},
kA:function(a,b){if(P.nt(b))return
return P.nu(a,b)},
nu:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aJ(t)}return},
nt:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
ns:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aJ(t)}return},
lP:function(a,b,c){var u,t,s
H.j(a,"$ib",[P.l],"$ab")
for(u=J.ci(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.ah()
if((s&127)!==s)return t-b}return c-b},
kY:function(a,b,c,d,e,f){if(C.d.ba(f,4)!==0)throw H.c(P.a3("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a3("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a3("Invalid base64 padding, more than two '=' characters",a,b))},
fj:function fj(){},
fk:function fk(){},
bV:function bV(){},
bX:function bX(){},
fG:function fG(){},
iJ:function iJ(){},
iL:function iL(){},
jO:function jO(a){this.b=0
this.c=a},
iK:function iK(a){this.a=a},
jN:function jN(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
f6:function(a,b,c){var u
H.n(b,{func:1,ret:P.l,args:[P.i]})
u=H.n8(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a3(a,null,null))},
mL:function(a){if(a instanceof H.cq)return a.i(0)
return"Instance of '"+H.c3(a)+"'"},
mV:function(a,b,c){var u,t
H.A(b,c)
u=J.mP(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.k(u,t,b)
return H.j(u,"$ib",[c],"$ab")},
l8:function(a,b,c){var u,t=[c],s=H.e([],t)
for(u=J.bQ(a);u.A();)C.a.h(s,H.A(u.gI(u),c))
if(b)return s
return H.j(J.kr(s),"$ib",t,"$ab")},
cL:function(a,b,c){var u,t=P.l
H.j(a,"$ih",[t],"$ah")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.j(a,"$iaM",[t],"$aaM")
u=a.length
c=P.bo(b,c,u)
return H.lh(b>0||c<u?C.a.ee(a,b,c):a)}if(!!J.U(a).$icD)return H.na(a,b,P.bo(b,c,a.length))
return P.ni(a,b,c)},
ni:function(a,b,c){var u,t,s,r,q=null
H.j(a,"$ih",[P.l],"$ah")
if(b<0)throw H.c(P.ad(b,0,J.aK(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.ad(c,b,J.aK(a),q,q))
t=J.bQ(a)
for(s=0;s<b;++s)if(!t.A())throw H.c(P.ad(b,0,s,q,q))
r=[]
if(u)for(;t.A();)r.push(t.gI(t))
else for(s=b;s<c;++s){if(!t.A())throw H.c(P.ad(c,b,s,q,q))
r.push(t.gI(t))}return H.lh(r)},
nc:function(a){return new H.fW(a,H.mQ(a,!1,!0,!1))},
lk:function(a,b,c){var u=J.bQ(b)
if(!u.A())return a
if(c.length===0){do a+=H.m(u.gI(u))
while(u.A())}else{a+=H.m(u.gI(u))
for(;u.A();)a=a+c+H.m(u.gI(u))}return a},
ls:function(){var u=H.n0()
if(u!=null)return P.np(u)
throw H.c(P.F("'Uri.base' is not supported"))},
jM:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.j(a,"$ib",[P.l],"$ab")
if(c===C.h){u=$.ms().b
if(typeof b!=="string")H.u(H.ar(b))
u=u.test(b)}else u=!1
if(u)return b
H.A(b,H.az(c,"bV",0))
t=c.gib().bZ(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dK(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mI:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mJ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dh:function(a){if(a>=10)return""+a
return"0"+a},
l3:function(a,b){return new P.b4(1e6*b+1000*a)},
dm:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.b_(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mL(a)},
fb:function(a){return new P.b0(!1,null,null,a)},
kl:function(a,b,c){return new P.b0(!0,a,b,c)},
dM:function(a,b){return new P.c4(null,null,!0,a,b,"Value not in range")},
ad:function(a,b,c,d,e){return new P.c4(b,c,!0,a,d,"Invalid value")},
bo:function(a,b,c){if(0>a||a>c)throw H.c(P.ad(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ad(b,a,c,"end",null))
return b}return c},
kw:function(a,b){if(typeof a!=="number")return a.N()
if(a<0)throw H.c(P.ad(a,0,null,b,null))},
W:function(a,b,c,d,e){var u=H.Z(e==null?J.aK(b):e)
return new P.fU(u,!0,a,c,"Index out of range")},
F:function(a){return new P.iC(a)},
iA:function(a){return new P.iz(a)},
bW:function(a){return new P.fr(a)},
y:function(a){return new P.ek(a)},
a3:function(a,b,c){return new P.fQ(a,b,c)},
mW:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.l]})
u=H.e([],[c])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.k(u,t,b.$1(t))
return u},
kS:function(a){H.oF(a)},
np:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.E(a,4)^58)*3|C.b.E(a,0)^100|C.b.E(a,1)^97|C.b.E(a,2)^116|C.b.E(a,3)^97)>>>0
if(u===0)return P.lr(e<e?C.b.w(a,0,e):a,5,f).ge8()
else if(u===32)return P.lr(C.b.w(a,5,e),0,f).ge8()}t=new Array(8)
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
if(P.lO(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.j0()
if(r>=0)if(P.lO(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.m()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.N()
if(typeof n!=="number")return H.D(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.b.ac(a,"..",o)))j=n>o+2&&C.b.ac(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.ac(a,"file",0)){if(q<=0){if(!C.b.ac(a,"/",o)){i="file:///"
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
a=C.b.aM(a,o,n,"/");++e
n=h}k="file"}else if(C.b.ac(a,"http",0)){if(t&&p+3===o&&C.b.ac(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aM(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.ac(a,"https",0)){if(t&&p+4===o&&C.b.ac(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aM(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.w(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jz(a,r,q,p,o,n,m,k)}return P.nE(a,0,e,r,q,p,o,n,m,k)},
lu:function(a){var u=P.i
return C.a.ih(H.e(a.split("&"),[u]),P.l7(u,u),new P.iH(C.h),[P.w,P.i,P.i])},
no:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iE(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.W(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.f6(C.b.w(a,s,t),n,n)
if(typeof p!=="number")return p.ai()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.f6(C.b.w(a,s,c),n,n)
if(typeof p!=="number")return p.ai()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
lt:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.iF(a)
t=new P.iG(u,a)
if(a.length<2)u.$1("address is too short")
s=H.e([],[P.l])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.W(a,r)
if(n===58){if(r===b){++r
if(C.b.W(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaA(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.no(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.d(j,g)
j[g]=0
d=g+1
if(d>=i)return H.d(j,d)
j[d]=0
g+=2}else{d=C.d.aJ(f,8)
if(g<0||g>=i)return H.d(j,g)
j[g]=d
d=g+1
if(d>=i)return H.d(j,d)
j[d]=f&255
g+=2}}return j},
nE:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nL(a,b,d)
else{if(d===b)P.d2(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nM(a,u,e-1):""
s=P.nI(a,e,f,!1)
if(typeof f!=="number")return f.m()
r=f+1
if(typeof g!=="number")return H.D(g)
q=r<g?P.nK(P.f6(C.b.w(a,r,g),new P.jI(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nJ(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.N()
o=h<i?P.kE(a,h+1,i,n):n
return new P.cc(j,t,s,q,p,o,i<c?P.nH(a,i+1,c):n)},
lE:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
d2:function(a,b,c){throw H.c(P.a3(c,a,b))},
nK:function(a,b){if(a!=null&&a===P.lE(b))return
return a},
nI:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.W(a,b)===91){if(typeof c!=="number")return c.p()
u=c-1
if(C.b.W(a,u)!==93)P.d2(a,b,"Missing end `]` to match `[` in host")
P.lt(a,b+1,u)
return C.b.w(a,b,c).toLowerCase()}if(typeof c!=="number")return H.D(c)
t=b
for(;t<c;++t)if(C.b.W(a,t)===58){P.lt(a,b,c)
return"["+a+"]"}return P.nO(a,b,c)},
nO:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.D(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.W(a,u)
if(q===37){p=P.lK(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ak("")
n=C.b.w(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.w(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.d(C.y,o)
o=(C.y[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ak("")
if(t<u){s.a+=C.b.w(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.d2(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.W(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ak("")
n=C.b.w(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.lF(q)
u+=l
t=u}}}}if(s==null)return C.b.w(a,b,c)
if(t<c){n=C.b.w(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nL:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lH(C.b.E(a,b)))P.d2(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.E(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.d2(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.w(a,b,c)
return P.nF(t?a.toLowerCase():a)},
nF:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nM:function(a,b,c){return P.d3(a,b,c,C.R,!1)},
nJ:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.d3(a,b,c,C.z,!0):C.j.jk(d,new P.jJ(),P.i).u(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.ab(u,"/"))u="/"+u
return P.nN(u,e,f)},
nN:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.ab(a,"/"))return P.nP(a,!u||c)
return P.nQ(a)},
kE:function(a,b,c,d){var u,t={}
H.j(d,"$iw",[P.i,null],"$aw")
if(a!=null){if(d!=null)throw H.c(P.fb("Both query and queryParameters specified"))
return P.d3(a,b,c,C.l,!0)}if(d==null)return
u=new P.ak("")
t.a=""
d.G(0,new P.jK(new P.jL(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nH:function(a,b,c){return P.d3(a,b,c,C.l,!0)},
lK:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.W(a,b+1)
t=C.b.W(a,p)
s=H.k2(u)
r=H.k2(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.aJ(q,4)
if(p>=8)return H.d(C.n,p)
p=(C.n[p]&1<<(q&15))!==0}else p=!1
if(p)return H.dK(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.w(a,b,b+3).toUpperCase()
return},
lF:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
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
for(q=0;--r,r>=0;s=128){p=C.d.hy(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.E(o,p>>>4))
C.a.k(t,q+2,C.b.E(o,p&15))
q+=3}}return P.cL(t,0,null)},
d3:function(a,b,c,d,e){var u=P.lJ(a,b,c,H.j(d,"$ib",[P.l],"$ab"),e)
return u==null?C.b.w(a,b,c):u},
lJ:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.j(d,"$ib",[P.l],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.N()
if(typeof c!=="number")return H.D(c)
if(!(t<c))break
c$0:{q=C.b.W(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.d(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.lK(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.d(C.k,p)
p=(C.k[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.d2(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.W(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.lF(q)}}if(r==null)r=new P.ak("")
r.a+=C.b.w(a,s,t)
r.a+=H.m(o)
if(typeof n!=="number")return H.D(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.N()
if(s<c)r.a+=C.b.w(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
lI:function(a){if(C.b.ab(a,"."))return!0
return C.b.dQ(a,"/.")!==-1},
nQ:function(a){var u,t,s,r,q,p,o
if(!P.lI(a))return a
u=H.e([],[P.i])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.Q(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.u(u,"/")},
nP:function(a,b){var u,t,s,r,q,p
if(!P.lI(a))return!b?P.lG(a):a
u=H.e([],[P.i])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaA(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaA(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.d(u,0)
C.a.k(u,0,P.lG(u[0]))}return C.a.u(u,"/")},
lG:function(a){var u,t,s,r=a.length
if(r>=2&&P.lH(J.mw(a,0)))for(u=1;u<r;++u){t=C.b.E(a,u)
if(t===58)return C.b.w(a,0,u)+"%3A"+C.b.aj(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nG:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.E(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.fb("Invalid URL encoding"))}}return u},
kF:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.E(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.w(a,b,c)
else r=new H.a5(C.b.w(a,b,c))}else{r=H.e([],[P.l])
for(s=a.length,q=b;q<c;++q){t=C.b.E(a,q)
if(t>127)throw H.c(P.fb("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.fb("Truncated URI"))
C.a.h(r,P.nG(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.j(r,"$ib",[P.l],"$ab")
return new P.iK(!1).bZ(r)},
lH:function(a){var u=a|32
return 97<=u&&u<=122},
lr:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.e([b-1],[P.l])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.E(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a3(m,a,t))}}if(s<0&&t>b)throw H.c(P.a3(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.E(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaA(l)
if(r!==44||t!==p+7||!C.b.ac(a,"base64",p+1))throw H.c(P.a3("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.D.it(0,a,o,u)
else{n=P.lJ(a,o,u,C.l,!0)
if(n!=null)a=C.b.aM(a,o,u,n)}return new P.iD(a,l,c)},
nS:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.mW(22,new P.jR(),P.P),n=new P.jQ(o),m=new P.jS(),l=new P.jT(),k=H.f(n.$2(0,225),"$iP")
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
lO:function(a,b,c,d,e){var u,t,s,r,q
H.j(e,"$ib",[P.l],"$ab")
u=$.mt()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.d(u,d)
s=u[d]
r=C.b.E(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.d(s,r)
q=s[r]
d=q&31
C.a.k(e,q>>>5,t)}return d},
a7:function a7(){},
av:function av(a,b){this.a=a
this.b=b},
z:function z(){},
b4:function b4(a){this.a=a},
fD:function fD(){},
fE:function fE(){},
bx:function bx(){},
fc:function fc(){},
dH:function dH(){},
b0:function b0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c4:function c4(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fU:function fU(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iC:function iC(a){this.a=a},
iz:function iz(a){this.a=a},
dV:function dV(a){this.a=a},
fr:function fr(a){this.a=a},
hF:function hF(){},
dU:function dU(){},
fy:function fy(a){this.a=a},
ek:function ek(a){this.a=a},
fQ:function fQ(a,b,c){this.a=a
this.b=b
this.c=c},
l:function l(){},
h:function h(){},
b5:function b5(){},
b:function b(){},
w:function w(){},
J:function J(){},
a9:function a9(){},
O:function O(){},
at:function at(){},
i:function i(){},
ak:function ak(a){this.a=a},
iH:function iH(a){this.a=a},
iE:function iE(a){this.a=a},
iF:function iF(a){this.a=a},
iG:function iG(a,b){this.a=a
this.b=b},
cc:function cc(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jI:function jI(a,b){this.a=a
this.b=b},
jJ:function jJ(){},
jL:function jL(a,b){this.a=a
this.b=b},
jK:function jK(a){this.a=a},
iD:function iD(a,b,c){this.a=a
this.b=b
this.c=c},
jR:function jR(){},
jQ:function jQ(a){this.a=a},
jS:function jS(){},
jT:function jT(){},
jz:function jz(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jb:function jb(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
bq:function(a){var u,t,s,r,q
if(a==null)return
u=P.l7(P.i,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r){q=H.K(t[r])
u.k(0,q,a[q])}return u},
oo:function(a){var u={}
a.G(0,new P.jZ(u))
return u},
jB:function jB(){},
jD:function jD(a,b){this.a=a
this.b=b},
jZ:function jZ(a){this.a=a},
jC:function jC(a,b){this.a=a
this.b=b},
fM:function fM(a,b){this.a=a
this.b=b},
fN:function fN(){},
fO:function fO(){},
jq:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nB:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jt:function jt(){},
ai:function ai(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b7:function b7(){},
fZ:function fZ(){},
b9:function b9(){},
hD:function hD(){},
hJ:function hJ(){},
ib:function ib(){},
p:function p(){},
bc:function bc(){},
io:function io(){},
ep:function ep(){},
eq:function eq(){},
ez:function ez(){},
eA:function eA(){},
eK:function eK(){},
eL:function eL(){},
eR:function eR(){},
eS:function eS(){},
P:function P(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(a){this.a=a},
fh:function fh(){},
bR:function bR(){},
hE:function hE(){},
ed:function ed(){},
db:function db(){},
dq:function dq(){},
dL:function dL(){},
dP:function dP(){},
c5:function c5(){},
dQ:function dQ(){},
dW:function dW(){},
e3:function e3(){},
i3:function i3(){},
eG:function eG(){},
eH:function eH(){}},W={
l0:function(){var u=document.createElement("canvas")
return u},
mK:function(a){H.f(a,"$ik")
return"wheel"},
mM:function(a){var u,t=document.createElement("input"),s=H.f(t,"$icx")
try{s.type=a}catch(u){H.aJ(u)}return s},
jp:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lC:function(a,b,c,d){var u=W.jp(W.jp(W.jp(W.jp(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
aa:function(a,b,c,d,e){var u=W.lS(new W.je(c),W.o)
if(u!=null&&!0)J.my(a,b,u,!1)
return new W.jd(a,b,u,!1,[e])},
lS:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.Y
if(u===C.f)return a
return u.dm(a,b)},
r:function r(){},
f7:function f7(){},
f9:function f9(){},
fa:function fa(){},
bS:function bS(){},
bU:function bU(){},
bu:function bu(){},
cr:function cr(){},
fu:function fu(){},
S:function S(){},
cs:function cs(){},
fv:function fv(){},
b2:function b2(){},
b3:function b3(){},
fw:function fw(){},
fx:function fx(){},
fz:function fz(){},
di:function di(){},
fA:function fA(){},
dj:function dj(){},
dk:function dk(){},
fB:function fB(){},
fC:function fC(){},
j9:function j9(a,b){this.a=a
this.b=b},
a2:function a2(){},
o:function o(){},
k:function k(){},
aB:function aB(){},
ct:function ct(){},
fL:function fL(){},
fP:function fP(){},
aL:function aL(){},
fS:function fS(){},
bZ:function bZ(){},
cw:function cw(){},
cx:function cx(){},
b6:function b6(){},
h5:function h5(){},
hp:function hp(){},
cz:function cz(){},
hq:function hq(){},
hr:function hr(a){this.a=a},
hs:function hs(){},
ht:function ht(a){this.a=a},
aO:function aO(){},
hu:function hu(){},
ac:function ac(){},
j8:function j8(a){this.a=a},
H:function H(){},
cE:function cE(){},
aP:function aP(){},
hH:function hH(){},
hQ:function hQ(){},
hR:function hR(a){this.a=a},
hT:function hT(){},
aQ:function aQ(){},
i1:function i1(){},
aR:function aR(){},
i2:function i2(){},
aS:function aS(){},
i5:function i5(){},
i6:function i6(a){this.a=a},
aE:function aE(){},
bp:function bp(){},
aT:function aT(){},
aF:function aF(){},
id:function id(){},
ie:function ie(){},
ii:function ii(){},
aV:function aV(){},
aW:function aW(){},
il:function il(){},
im:function im(){},
bH:function bH(){},
iI:function iI(){},
j0:function j0(){},
bf:function bf(){},
cS:function cS(){},
ja:function ja(){},
ef:function ef(){},
jo:function jo(){},
ew:function ew(){},
jA:function jA(){},
jE:function jE(){},
jc:function jc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kC:function kC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jd:function jd(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
je:function je(a){this.a=a},
E:function E(){},
dp:function dp(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
ee:function ee(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
el:function el(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ex:function ex(){},
ey:function ey(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
cZ:function cZ(){},
d_:function d_(){},
eE:function eE(){},
eF:function eF(){},
eJ:function eJ(){},
eM:function eM(){},
eN:function eN(){},
d0:function d0(){},
d1:function d1(){},
eP:function eP(){},
eQ:function eQ(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){}},O={
fp:function(a){var u=new O.V([a])
u.bc(a)
return u},
V:function V(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cy:function cy(){this.b=this.a=null},
lm:function(a,b){var u,t,s,r,q=new O.aU()
q.saf(b)
q.sdt(null)
u=V.dO()
if(!J.Q(q.c,u)){t=q.c
q.c=u
s=new D.G("source",t,u,[V.bF])
s.b=!0
q.O(s)}r=a==null?V.dO():a
if(!J.Q(q.d,r)){t=q.d
q.d=r
s=new D.G("destination",t,r,[V.bF])
s.b=!0
q.O(s)}if(q.e!==!1){q.e=!1
s=new D.G("flip",!0,!1,[P.a7])
s.b=!0
q.O(s)}q.f=null
return q},
dA:function dA(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hi:function hi(a,b){this.a=a
this.b=b},
hj:function hj(){},
hk:function hk(a,b){this.a=a
this.b=b},
hl:function hl(){},
hm:function hm(a,b){this.a=a
this.b=b},
hn:function hn(){},
hc:function hc(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dC:function dC(){},
hd:function hd(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b8:function b8(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hf:function hf(){var _=this
_.e=_.d=_.c=_.b=null},
hg:function hg(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hh:function hh(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bG:function bG(){},
dY:function dY(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aU:function aU(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
l4:function(){var u=new E.ap()
u.a=""
u.b=!0
u.seo(0,O.fp(E.ap))
u.y.aD(u.giu(),u.gix())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sbt(0,null)
return u},
nd:function(a,b){var u=new E.hM(a)
u.ek(a,b)
return u},
nl:function(a,b,c,d,e){var u,t,s=J.U(a)
if(!!s.$ibU)return E.ln(a,!0,!0,!0,!1)
u=W.l0()
t=u.style
t.width="100%"
t.height="100%"
s.gbY(a).h(0,u)
return E.ln(u,!0,!0,!0,!1)},
ln:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.e_(),j=H.f(C.o.ea(a,"webgl2",P.mT(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic5")
if(j==null)H.u(P.y("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.nd(j,a)
H.Z(j.getParameter(3379))
H.Z(j.getParameter(34076))
u=new X.e6(a)
t=new X.fY()
t.c=new X.aw(!1,!1,!1)
t.shd(P.mU(P.l))
u.b=t
t=new X.hv(u)
t.f=0
t.r=V.bn()
t.x=V.bn()
t.ch=t.Q=1
u.c=t
t=new X.h6(u)
t.r=0
t.x=V.bn()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ik(u)
t.f=V.bn()
t.r=V.bn()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seT(H.e([],[[P.cK,P.O]]))
t=u.z
s=document
r=W.ac
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.aa(s,"contextmenu",H.n(u.gfq(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.aa(a,"focus",H.n(u.gfD(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.aa(a,"blur",H.n(u.gfk(),o),!1,p))
t=u.z
n=W.b6
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.aa(s,"keyup",H.n(u.gfH(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.aa(s,"keydown",H.n(u.gfF(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.aa(a,"mousedown",H.n(u.gfL(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.aa(a,"mouseup",H.n(u.gfP(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.aa(a,l,H.n(u.gfN(),q),!1,r))
n=u.z
m=W.bf;(n&&C.a).h(n,W.aa(a,H.K(W.mK(a)),H.n(u.gfR(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.aa(s,l,H.n(u.gft(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.aa(s,"mouseup",H.n(u.gfv(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.aa(s,"pointerlockchange",H.n(u.gfT(),o),!1,p))
p=u.z
o=W.aW
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.aa(a,"touchstart",H.n(u.gh8(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.aa(a,"touchend",H.n(u.gh4(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.aa(a,"touchmove",H.n(u.gh6(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.av(Date.now(),!1)
k.cy=0
k.d9()
return k},
fl:function fl(){},
ap:function ap(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hM:function hM(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hN:function hN(a){this.a=a},
hO:function hO(a){this.a=a},
hP:function hP(a){this.a=a},
e_:function e_(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=null},
ih:function ih(a){this.a=a}},Z={
lA:function(a,b,c){var u
H.j(c,"$ib",[P.l],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bK(c)),35044)
a.bindBuffer(b,null)
return new Z.ea(b,u)},
aG:function(a){return new Z.bJ(a)},
ea:function ea(a,b){this.a=a
this.b=b},
dc:function dc(a,b,c,d){var _=this
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
c_:function c_(a,b,c){this.a=a
this.b=b
this.c=c},
bJ:function bJ(a){this.a=a}},D={
L:function(){var u=new D.by()
u.sa3(null)
u.saH(null)
u.c=null
u.d=0
return u},
fo:function fo(){},
by:function by(){var _=this
_.d=_.c=_.b=_.a=null},
fI:function fI(a){this.a=a},
fJ:function fJ(a){this.a=a},
x:function x(){this.b=null},
bz:function bz(a){this.b=null
this.$ti=a},
bA:function bA(a){this.b=null
this.$ti=a},
G:function G(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bw:function bw(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ab:function ab(){},
dw:function dw(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dJ:function dJ(){},
dT:function dT(){}},X={dd:function dd(a,b){this.a=a
this.b=b},dv:function dv(a,b){this.a=a
this.b=b},fY:function fY(){var _=this
_.d=_.c=_.b=_.a=null},dy:function dy(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h6:function h6(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aw:function aw(a,b,c){this.a=a
this.b=b
this.c=c},bl:function bl(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hv:function hv(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cA:function cA(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hI:function hI(){},e1:function e1(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ik:function ik(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},e6:function e6(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ko:function(a){var u,t=new X.fR()
if(a==null)u=new V.a1(0,0,0,1)
else u=a
t.a=u
t.b=!0
t.c=2000
t.d=!0
t.e=0
t.f=!1
u=V.dO()
t.r=u
return t},
lc:function(a){var u,t,s=new X.dI()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gn().h(0,s.gew())
t=new D.G("mover",u,s.b,[U.ah])
t.b=!0
s.a_(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.M().a)){s.c=1.0471975511965976
t=new D.G("fov",t,1.0471975511965976,[P.z])
t.b=!0
s.a_(t)}t=s.d
if(!(Math.abs(t-0.1)<$.M().a)){s.d=0.1
t=new D.G("near",t,0.1,[P.z])
t.b=!0
s.a_(t)}t=s.e
if(!(Math.abs(t-2000)<$.M().a)){s.e=2000
t=new D.G("far",t,2000,[P.z])
t.b=!0
s.a_(t)}return s},
fi:function fi(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bT:function bT(){},
fR:function fR(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fT:function fT(){this.b=this.a=null},
dI:function dI(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cM:function cM(){}},V={
oO:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.ba(a-b,u)
return(a<0?a+u:a)+b},
T:function(a,b,c){if(a==null)return C.b.aB("null",c)
return C.b.aB(C.e.e6(Math.abs(a-0)<$.M().a?0:a,b),c+b+1)},
ch:function(a,b,c){var u,t,s,r,q,p
H.j(a,"$ib",[P.z],"$ab")
u=H.e([],[P.i])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.B)(a),++r){q=V.T(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.d(u,p)
C.a.k(u,p,C.b.aB(u[p],s))}return u},
kR:function(a){return C.e.iS(Math.pow(2,C.O.c8(Math.log(H.on(a))/Math.log(2))))},
bD:function(){var u=$.ho
return u==null?$.ho=V.aN(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aN:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ag(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
l9:function(a,b,c){var u=c.v(0,Math.sqrt(c.B(c))),t=b.ay(u),s=t.v(0,Math.sqrt(t.B(t))),r=u.ay(s),q=new V.N(a.a,a.b,a.c),p=s.P(0).B(q),o=r.P(0).B(q),n=u.P(0).B(q)
return V.aN(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bn:function(){var u=$.le
return u==null?$.le=new V.a6(0,0):u},
lf:function(){var u=$.cF
return u==null?$.cF=new V.a4(0,0,0):u},
dO:function(){var u=$.cH
return u==null?$.cH=V.dN(0,0,1,1):u},
dN:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.bF(a,b,c,d)},
cR:function(){var u=$.ly
return u==null?$.ly=new V.N(0,0,0):u},
nv:function(){var u=$.iM
return u==null?$.iM=new V.N(-1,0,0):u},
kB:function(){var u=$.iN
return u==null?$.iN=new V.N(0,1,0):u},
lz:function(){var u=$.iO
return u==null?$.iO=new V.N(0,0,1):u},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
a1:function a1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fH:function fH(a){this.a=a},
dD:function dD(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ag:function ag(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
ba:function ba(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bF:function bF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
R:function R(a,b){this.a=a
this.b=b},
N:function N(a,b,c){this.a=a
this.b=b
this.c=c},
aj:function(a){var u=new V.hU()
u.el(a)
return u},
f8:function f8(){},
bk:function bk(){},
dz:function dz(){},
bm:function bm(){this.a=null},
hU:function hU(){this.a=null},
cJ:function cJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e0:function e0(a,b,c){this.a=a
this.b=b
this.c=c},
cN:function cN(a){this.b=a
this.c=null},
ij:function ij(){this.c=this.b=this.a=null},
cO:function cO(a){this.b=a
this.a=this.c=null},
oI:function(a){P.nm(C.M,new V.ke(a))},
nf:function(a){var u=new V.hY()
u.em(a,!0)
return u},
ke:function ke(a){this.a=a},
hK:function hK(a){this.a=a
this.c=null},
hL:function hL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hY:function hY(){this.b=this.a=null},
i_:function i_(a){this.a=a},
hZ:function hZ(a){this.a=a}},U={
kn:function(){var u=new U.fq()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
l2:function(a){var u=new U.df()
u.a=a
return u},
fq:function fq(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
df:function df(){this.b=this.a=null},
cv:function cv(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ah:function ah(){},
e7:function e7(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
e8:function e8(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e9:function e9(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={de:function de(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},dg:function dg(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},dl:function dl(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ax:function ax(){}},A={
mX:function(a,b){var u=a.b_,t=new A.dB(b,u)
t.cE(b,u)
t.ej(a,b)
return t},
mY:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.j(a9,"$ib",[A.aA],"$ab")
H.j(b0,"$ib",[A.aC],"$ab")
H.j(b1,"$ib",[A.aD],"$ab")
u="MaterialLight_"+a0.gal(a0)+a1.gal(a1)+a2.gal(a2)+a3.gal(a3)+a4.gal(a4)+a5.gal(a5)+a6.gal(a6)+a7.gal(a7)+a8.gal(a8)+"_"
u+=a?"1":"0"
u+=b?"1":"0"
u+=c?"1":"0"
u=u+"0_"+e
t=a9.length
if(t>0){u+="_Dir"
for(s=0;s<a9.length;a9.length===t||(0,H.B)(a9),++s)u+="_"+H.m(a9[s].a)}t=b0.length
if(t>0){u+="_Point"
for(s=0;s<b0.length;b0.length===t||(0,H.B)(b0),++s)u+="_"+H.m(b0[s].a)}t=b1.length
if(t>0){u+="_Spot"
for(s=0;s<b1.length;b1.length===t||(0,H.B)(b1),++s)u+="_"+H.m(b1[s].a)}for(t=a9.length,r=0,q=!1,s=0;s<t;++s,q=!0)r+=a9[s].b
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
f=$.aY()
if(j){t=$.bt()
f=new Z.bJ(f.a|t.a)}if(i){t=$.bs()
f=new Z.bJ(f.a|t.a)}if(h){t=$.br()
f=new Z.bJ(f.a|t.a)}return new A.he(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,r,o,k,o,q,g,!0,!1,!1,n,q,l,j,i,!1,!1,h,!1,!1,c,!1,e,u.charCodeAt(0)==0?u:u,f)},
jU:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jV:function(a,b,c){var u
A.jU(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.kf(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
nY:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jU(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
nV:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jV(b,t,"ambient")
b.a+="\n"},
nW:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jV(b,t,"diffuse")
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
nZ:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jV(b,t,"invDiffuse")
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
o4:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jV(b,t,"specular")
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
o0:function(a,b){var u,t,s
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
o2:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jU(b,t,"reflect")
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
o3:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jU(b,t,"refract")
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
nX:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.m(u)
s=A.kf(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ah()
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
o1:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.m(u)
s=A.kf(t)
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
if(typeof u!=="number")return u.ah()
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
o5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.m(u)
s=A.kf(t)
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
if(typeof u!=="number")return u.ah()
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
o_:function(a,b){var u,t
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
o6:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.ak("")
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
A.nY(a,j)
A.nV(a,j)
A.nW(a,j)
A.nZ(a,j)
A.o4(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.o2(a,j)
A.o3(a,j)}A.o0(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.B)(q),++o)A.nX(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.B)(q),++o)A.o1(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.B)(q),++o)A.o5(a,q[o],j)
A.o_(a,j)}q=j.a+="// === Main ===\n"
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.B)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aj(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.B)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aj(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.B)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aj(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
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
o7:function(a,b){var u,t,s
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
o9:function(a,b){var u
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
o8:function(a,b){var u
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
ob:function(a,b){var u,t
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
oc:function(a,b){var u,t
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
oa:function(a,b){var u
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
od:function(a,b){var u
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
kf:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.b.aj(a,1)},
nk:function(a,b){var u,t,s,r
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+="\nvec4 clrAccum;\n"
s=b===C.w
t=(s||b===C.p?t+"float colorCount;\n":t)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.v)t+="      clrAccum += color;\n"
else if(b===C.i)t+="      clrAccum = mix(clrAccum, color, color.a);\n"
else t=s?t+"      clrAccum += color;\n      colorCount += 1.0;\n":t+"      clrAccum = color;\n      colorCount = 1.0;\n"
t+="   }\n}\n\nvoid layoutAll()\n{\n"
r=b===C.p
if(r)for(u=a-1;u>=0;--u)t=t+("   if(txtCount > "+u+")\n")+"   {\n"+("     layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return;\n")+("   layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(s)t+="   colorCount = 1.0;\n"
else if(r)t+="   colorCount = 0.0;\n"
t+="   layoutAll();\n"
t=(s?t+"   clrAccum = clrAccum/colorCount;\n":t)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return t.charCodeAt(0)==0?t:t},
nj:function(a,b,c){var u="TextureLayout_"+a+"_"+C.d.i(b.a),t=new A.dZ(c,u)
t.cE(c,u)
t.en(a,b,c)
return t},
ky:function(a,b,c,d,e){var u=new A.it(a,c,e)
u.f=d
u.shO(P.mV(d,0,P.l))
return u},
da:function da(a,b,c){this.a=a
this.b=b
this.c=c},
fd:function fd(a){this.a=a},
ao:function ao(a,b,c){this.a=a
this.b=b
this.c=c},
dB:function dB(a,b){var _=this
_.j6=_.j5=_.dC=_.dB=_.b_=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jj=_.ji=_.jh=_.c7=_.c6=_.c5=_.c4=_.c3=_.c2=_.jg=_.jf=_.dJ=_.je=_.jd=_.dI=_.dH=_.jc=_.jb=_.dG=_.dF=_.ja=_.j9=_.dE=_.j8=_.j7=_.dD=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aA:function aA(a,b){this.a=a
this.b=b},
aC:function aC(a,b){this.a=a
this.b=b},
aD:function aD(a,b){this.a=a
this.b=b},
he:function he(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.dB=b4},
c8:function c8(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c9:function c9(a,b,c,d,e,f,g,h,i,j){var _=this
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
cb:function cb(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cI:function cI(){},
bv:function bv(a,b){this.a=a
this.b=b},
dZ:function dZ(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
e2:function e2(){},
ix:function ix(a){this.a=a},
al:function al(a,b,c){this.a=a
this.c=b
this.d=c},
iu:function iu(a,b,c){this.a=a
this.c=b
this.d=c},
iv:function iv(a,b,c){this.a=a
this.c=b
this.d=c},
iw:function iw(a,b,c){this.a=a
this.c=b
this.d=c},
it:function it(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ae:function ae(a,b,c){this.a=a
this.c=b
this.d=c},
ay:function ay(a,b,c){this.a=a
this.c=b
this.d=c},
X:function X(a,b,c){this.a=a
this.c=b
this.d=c},
c7:function c7(a,b,c){this.a=a
this.c=b
this.d=c},
iy:function iy(a,b,c){this.a=a
this.c=b
this.d=c},
cP:function cP(a,b,c){this.a=a
this.c=b
this.d=c},
am:function am(a,b,c){this.a=a
this.c=b
this.d=c},
be:function be(a,b,c){this.a=a
this.c=b
this.d=c},
ca:function ca(a,b,c){this.a=a
this.c=b
this.d=c}},F={
oN:function(){return F.op(15,30,0.5,1,new F.kg())},
op:function(a,b,c,d,e){var u=F.oL(a,b,new F.k_(H.n(e,{func:1,ret:V.a4,args:[P.z]}),d,b,c))
if(u==null)return
u.ax()
u.is(new F.iV(),new F.hB())
return u},
oL:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.aq,P.z,P.z]})
if(a<1)return
if(b<1)return
u=F.lj()
t=H.e([],[F.aq])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.iP(g,g,new V.a1(p,0,0,1),g,g,new V.a6(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.du(g))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.iP(g,g,new V.a1(j,i,h,1),g,g,new V.a6(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.du(g))}}u.d.hT(a+1,b+1,t)
return u},
dn:function(a,b,c){var u=new F.a8(),t=a.a
if(t==null)H.u(P.y("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.u(P.y("May not create a face with vertices attached to different shapes."))
u.hr(a)
u.hs(b)
u.ht(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a8()
return u},
lj:function(){var u=new F.dR(),t=new F.iQ(u)
t.b=!1
t.shP(H.e([],[F.aq]))
u.a=t
t=new F.hX()
t.sbM(H.e([],[F.c1]))
u.b=t
t=new F.hW(u)
t.sf2(H.e([],[F.bC]))
u.c=t
t=new F.hV(u)
t.seU(H.e([],[F.a8]))
u.d=t
u.e=null
return u},
iP:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aq(),r=new F.iY()
r.sbM(H.e([],[F.c1]))
s.b=r
r=new F.iU()
u=[F.bC]
r.sf3(H.e([],u))
r.sf4(H.e([],u))
s.c=r
r=new F.iR()
u=[F.a8]
r.seV(H.e([],u))
r.seW(H.e([],u))
r.seX(H.e([],u))
s.d=r
h=$.mo()
s.e=0
r=$.aY()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bt().a)!==0?e:t
s.x=(u&$.bs().a)!==0?b:t
s.y=(u&$.bO().a)!==0?f:t
s.z=(u&$.bP().a)!==0?g:t
s.Q=(u&$.mp().a)!==0?c:t
s.ch=(u&$.cm().a)!==0?i:0
s.cx=(u&$.br().a)!==0?a:t
return s},
kg:function kg(){},
k_:function k_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fK:function fK(){},
i0:function i0(){},
bC:function bC(){},
h_:function h_(){},
is:function is(){},
c1:function c1(){},
dR:function dR(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hV:function hV(a){this.a=a
this.b=null},
hW:function hW(a){this.a=a
this.b=null},
hX:function hX(){this.b=null},
aq:function aq(){var _=this
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
hB:function hB(){},
iY:function iY(){this.b=null}},T={
ll:function(a){var u=new T.ig()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
c6:function c6(){},
dX:function dX(){},
ig:function ig(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},S={
m3:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2="testCanvas",b3=null,b4="modifiers",b5=V.nf("Test 036"),b6=W.l0()
b6.className="pageLargeCanvas"
b6.id=b2
b5.a.appendChild(b6)
u=[P.i]
b5.dk(H.e(["Test of the texture layout cover technique."],u))
b5.hQ(H.e(["blends"],u))
b5.dk(H.e(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b2)
if(t==null)H.u(P.y("Failed to find an element with the identifier, testCanvas."))
s=E.nl(t,!0,!0,!0,!1)
r=new U.cv()
b5=U.ah
r.bc(b5)
r.aD(r.gfc(),r.gfX())
r.e=null
r.f=V.bD()
r.r=0
q=s.r
p=new U.e8()
o=U.kn()
o.scw(0,!0)
o.scd(6.283185307179586)
o.scf(0)
o.sa6(0,0)
o.sce(100)
o.sT(0)
o.sc_(0.5)
p.b=o
n=p.gaG()
o.gn().h(0,n)
o=U.kn()
o.scw(0,!0)
o.scd(6.283185307179586)
o.scf(0)
o.sa6(0,0)
o.sce(100)
o.sT(0)
o.sc_(0.5)
p.c=o
o.gn().h(0,n)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
m=new X.aw(!1,!1,!1)
l=p.d
p.d=m
o=[X.aw]
n=new D.G(b4,l,m,o)
n.b=!0
p.L(n)
n=p.f
if(n!==!1){p.f=!1
n=new D.G("invertX",n,!1,[P.a7])
n.b=!0
p.L(n)}n=p.r
if(n!==!1){p.r=!1
n=new D.G("invertY",n,!1,[P.a7])
n.b=!0
p.L(n)}p.aV(q)
r.h(0,p)
q=s.r
p=new U.e7()
n=U.kn()
n.scw(0,!0)
n.scd(6.283185307179586)
n.scf(0)
n.sa6(0,0)
n.sce(100)
n.sT(0)
n.sc_(0.2)
p.b=n
n.gn().h(0,p.gaG())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
m=new X.aw(!0,!1,!1)
l=p.c
p.c=m
n=new D.G(b4,l,m,o)
n.b=!0
p.L(n)
p.aV(q)
r.h(0,p)
q=s.r
p=new U.e9()
p.c=0.01
p.e=p.d=0
m=new X.aw(!1,!1,!1)
p.b=m
o=new D.G(b4,b3,m,o)
o.b=!0
p.L(o)
p.aV(q)
r.h(0,p)
r.h(0,U.l2(V.aN(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
k=X.lc(r)
j=new V.a1(0,0,0,0)
i=new X.fi()
i.d=i.c=i.b=i.a=512
i.e=!0
i.f=!1
i.x=i.r=1
i.ch=T.ll(b3)
i.cx=new V.a1(0,0,0,1)
i.cy=!0
i.db=2000
i.dx=!0
i.dy=V.dO()
i.sag(0,512)
i.sad(0,512)
if(!i.cx.q(0,j)){l=i.cx
i.cx=j
q=new D.G("color",l,j,[V.a1])
q.b=!0
i.a_(q)}q=i.db
if(!(Math.abs(q-2000)<$.M().a)){i.db=2000
q=new D.G("depth",q,2000,[P.z])
q.b=!0
i.a_(q)}if(!i.f){i.f=!0
q=new D.G("autoResize",!1,!0,[P.a7])
q.b=!0
i.a_(q)}q=i.r
if(!(Math.abs(q-1)<$.M().a)){i.r=1
q=new D.G("autoResizeScalarX",q,1,[P.z])
q.b=!0
i.a_(q)}q=i.x
if(!(Math.abs(q-1)<$.M().a)){i.x=1
q=new D.G("autoResizeScalarY",q,1,[P.z])
q.b=!0
i.a_(q)}h=V.dO()
if(!J.Q(i.dy,h)){l=i.dy
i.dy=h
q=new D.G("region",l,h,[V.bF])
q.b=!0
i.a_(q)}g=E.l4()
g.sbt(0,F.oN())
f=new O.dA()
f.seE(O.fp(V.ag))
f.e.aD(f.gfg(),f.gfi())
q=new O.b8(f,"emission")
q.c=new A.ao(!1,!1,!1)
q.f=new V.a0(0,0,0)
f.f=q
q=new O.b8(f,"ambient")
q.c=new A.ao(!1,!1,!1)
q.f=new V.a0(0,0,0)
f.r=q
q=new O.b8(f,"diffuse")
q.c=new A.ao(!1,!1,!1)
q.f=new V.a0(0,0,0)
f.x=q
q=new O.b8(f,"invDiffuse")
q.c=new A.ao(!1,!1,!1)
q.f=new V.a0(0,0,0)
f.y=q
q=new O.hh(f,"specular")
q.c=new A.ao(!1,!1,!1)
q.f=new V.a0(0,0,0)
q.ch=100
f.z=q
q=new O.hd(f,"bump")
q.c=new A.ao(!1,!1,!1)
f.Q=q
f.ch=null
q=new O.b8(f,"reflect")
q.c=new A.ao(!1,!1,!1)
q.f=new V.a0(0,0,0)
f.cx=q
q=new O.hg(f,"refract")
q.c=new A.ao(!1,!1,!1)
q.f=new V.a0(0,0,0)
q.ch=1
f.cy=q
q=new O.hc(f,"alpha")
q.c=new A.ao(!1,!1,!1)
q.f=1
f.db=q
q=new D.dw()
q.bc(D.ab)
q.seQ(H.e([],[D.bw]))
q.sha(H.e([],[D.dJ]))
q.shA(H.e([],[D.dT]))
q.y=q.x=null
q.cz(q.gfe(),q.gfV(),q.gfZ())
f.dx=q
p=new O.hf()
p.b=new V.a1(0,0,0,0)
p.c=1
p.d=10
p.e=!1
f.dy=p
p=q.x
q=p==null?q.x=D.L():p
q.h(0,f.ghn())
q=f.dx
p=q.y
q=p==null?q.y=D.L():p
q.h(0,f.gar())
f.fr=null
q=f.dx
e=V.kB()
p=U.l2(V.l9(V.lf(),e,new V.N(0,-1,-1)))
j=new V.a0(1,1,1)
o=new D.bw()
o.c=new V.a0(1,1,1)
o.a=V.lz()
o.d=V.kB()
o.e=V.nv()
l=o.b
o.b=p
p.gn().h(0,o.gep())
b5=new D.G("mover",l,o.b,[b5])
b5.b=!0
o.aq(b5)
if(!o.c.q(0,j)){l=o.c
o.c=j
b5=new D.G("color",l,j,[V.a0])
b5.b=!0
o.aq(b5)}q.h(0,o)
b5=f.r
b5.saX(0,new V.a0(0,0,1))
b5=f.x
b5.saX(0,new V.a0(0,1,0))
b5=f.z
b5.saX(0,new V.a0(1,0,0))
b5=f.z
b5.dc(new A.ao(!0,!1,!1))
b5.dd(10)
d=new M.dl()
d.a=!0
d.seH(0,O.fp(E.ap))
d.e.aD(d.gfm(),d.gfo())
d.y=d.x=d.r=d.f=null
c=X.ko(b3)
d.sdr(b3)
d.sb6(0,c)
d.sb7(b3)
d.sdr(k)
d.sb7(f)
d.sb6(0,i)
d.e.h(0,g)
b=new V.a1(0,0,0,1)
a=new O.dY()
a.a=new V.a1(0,0,0,0)
a.seS(O.fp(O.aU))
a.c.aD(a.gfz(),a.gfB())
a.d=0
a.e=null
a.r=a.f=C.i
if(!a.a.q(0,b)){l=a.a
a.a=b
b5=new D.G("backColor",l,b,[V.a1])
b5.b=!0
a.O(b5)}a.saW(C.i)
for(a0=0;a0<3;++a0){a1=a0*0.3333333333333333
for(a2=0;a2<3;++a2){b5=a.c
q=i.ch
p=H.q(b5,0)
q=H.A(O.lm(V.dN(a1,a2*0.3333333333333333,0.3333333333333333,0.3333333333333333),q),p)
o=[p]
if(H.C(b5.bL(H.e([q],o)))){n=b5.a
a3=n.length
C.a.h(n,q)
p=H.j(H.e([q],o),"$ih",[p],"$ah")
b5=b5.c
if(b5!=null)b5.$2(a3,p)}}}b5=a.c
q=O.lm(b3,b3)
q.saf(i.ch)
q.sdt(V.aN(0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1))
b5.h(0,q)
a4=X.ko(new V.a1(0,0,0,1))
a5=new M.dg()
a5.a=!0
b5=E.l4()
a6=F.lj()
q=a6.a
p=new V.N(-1,-1,1)
p=p.v(0,Math.sqrt(p.B(p)))
a7=q.bh(new V.ba(1,2,4,6),new V.a1(1,0,0,1),new V.a4(-1,-1,0),new V.a6(0,1),p,b3)
q=a6.a
p=new V.N(1,-1,1)
p=p.v(0,Math.sqrt(p.B(p)))
a8=q.bh(new V.ba(0,3,4,6),new V.a1(0,0,1,1),new V.a4(1,-1,0),new V.a6(1,1),p,b3)
q=a6.a
p=new V.N(1,1,1)
p=p.v(0,Math.sqrt(p.B(p)))
a9=q.bh(new V.ba(0,2,5,6),new V.a1(0,1,0,1),new V.a4(1,1,0),new V.a6(1,0),p,b3)
q=a6.a
p=V.bn()
o=new V.N(-1,1,1)
o=o.v(0,Math.sqrt(o.B(o)))
b0=q.bh(new V.ba(0,2,4,7),new V.a1(1,1,0,1),new V.a4(-1,1,0),p,o,b3)
a6.d.hS(H.e([a7,a8,a9,b0],[F.aq]))
a6.ax()
b5.sbt(0,a6)
a5.e=b5
b1=new X.fT()
l=a5.b
a5.b=b1
b1.gn().h(0,a5.gY())
b5=new D.G("camera",l,a5.b,[X.bT])
b5.b=!0
a5.V(b5)
a5.sb6(0,b3)
a5.sb7(b3)
a5.sb7(a)
a5.sb6(0,a4)
b5=M.ax
q=H.e([d,a5],[b5])
p=new M.de()
p.bc(b5)
p.e=!0
p.f=!1
p.r=null
p.aD(p.gh0(),p.gh2())
p.bS(0,q)
b5=s.d
if(b5!==p){if(b5!=null)b5.gn().M(0,s.gcG())
s.d=p
p.gn().h(0,s.gcG())
s.cH()}b5=new V.hK("blends")
u=u.getElementById("blends")
b5.c=u
if(u==null)H.u("Failed to find blends for RadioGroup")
b5.bR(0,"Additive",new S.k8(a))
b5.dj(0,"AlphaBlend",new S.k9(a),!0)
b5.bR(0,"Average",new S.ka(a))
b5.bR(0,"Overwrite",new S.kb(a))
V.oI(s)},
k8:function k8(a){this.a=a},
k9:function k9(a){this.a=a},
ka:function ka(a){this.a=a},
kb:function kb(a){this.a=a}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,S]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kt.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gF:function(a){return H.cG(a)},
i:function(a){return"Instance of '"+H.c3(a)+"'"}}
J.fV.prototype={
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$ia7:1}
J.dt.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0}}
J.du.prototype={
gF:function(a){return 0},
i:function(a){return String(a)}}
J.hG.prototype={}
J.bI.prototype={}
J.bj.prototype={
i:function(a){var u=a[$.mc()]
if(u==null)return this.eg(a)
return"JavaScript function for "+H.m(J.b_(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ikp:1}
J.aM.prototype={
h:function(a,b){H.A(b,H.q(a,0))
if(!!a.fixed$length)H.u(P.F("add"))
a.push(b)},
e0:function(a,b){if(!!a.fixed$length)H.u(P.F("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dM(b,null))
return a.splice(b,1)[0]},
M:function(a,b){var u
if(!!a.fixed$length)H.u(P.F("remove"))
for(u=0;u<a.length;++u)if(J.Q(a[u],b)){a.splice(u,1)
return!0}return!1},
bS:function(a,b){var u,t
H.j(b,"$ih",[H.q(a,0)],"$ah")
if(!!a.fixed$length)H.u(P.F("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.B)(b),++t)a.push(b[t])},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bW(a))}},
u:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.m(a[u]))
return t.join(b)},
io:function(a){return this.u(a,"")},
ih:function(a,b,c,d){var u,t,s
H.A(b,d)
H.n(c,{func:1,ret:d,args:[d,H.q(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bW(a))}return t},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
ee:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ad(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ad(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.q(a,0)])
return H.e(a.slice(b,c),[H.q(a,0)])},
gig:function(a){if(a.length>0)return a[0]
throw H.c(H.l5())},
gaA:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.l5())},
bb:function(a,b,c,d){var u,t,s=H.q(a,0)
H.j(d,"$ih",[s],"$ah")
if(!!a.immutable$list)H.u(P.F("setRange"))
P.bo(b,c,a.length)
u=c-b
if(u===0)return
P.kw(0,"skipCount")
H.j(d,"$ib",[s],"$ab")
s=J.ci(d)
if(u>s.gl(d))throw H.c(H.mO())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
bu:function(a,b){var u=H.q(a,0)
H.n(b,{func:1,ret:P.l,args:[u,u]})
if(!!a.immutable$list)H.u(P.F("sort"))
H.dS(a,0,a.length-1,b,u)},
ao:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Q(a[u],b))return!0
return!1},
i:function(a){return P.kq(a,"[","]")},
gU:function(a){return new J.as(a,a.length,[H.q(a,0)])},
gF:function(a){return H.cG(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.u(P.F("set length"))
if(b<0)throw H.c(P.ad(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cg(a,b))
return a[b]},
k:function(a,b,c){H.A(c,H.q(a,0))
if(!!a.immutable$list)H.u(P.F("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cg(a,b))
a[b]=c},
m:function(a,b){var u,t=[H.q(a,0)]
H.j(b,"$ib",t,"$ab")
u=C.d.m(a.length,b.gl(b))
t=H.e([],t)
this.sl(t,u)
this.bb(t,0,a.length,a)
this.bb(t,a.length,u,b)
return t},
$ih:1,
$ib:1}
J.ks.prototype={}
J.as.prototype={
gI:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.B(s))
u=t.c
if(u>=r){t.scV(null)
return!1}t.scV(s[u]);++t.c
return!0},
scV:function(a){this.d=H.A(a,H.q(this,0))},
$ib5:1}
J.bB.prototype={
i1:function(a,b){var u
H.m4(b)
if(typeof b!=="number")throw H.c(H.ar(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbj(b)
if(this.gbj(a)===u)return 0
if(this.gbj(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbj:function(a){return a===0?1/a<0:a<0},
iS:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.F(""+a+".toInt()"))},
c8:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.F(""+a+".floor()"))},
Z:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.F(""+a+".round()"))},
e6:function(a,b){var u
if(b>20)throw H.c(P.ad(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbj(a))return"-"+u
return u},
b8:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ad(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.W(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.u(P.F("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.t("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
m:function(a,b){if(typeof b!=="number")throw H.c(H.ar(b))
return a+b},
p:function(a,b){if(typeof b!=="number")throw H.c(H.ar(b))
return a-b},
t:function(a,b){if(typeof b!=="number")throw H.c(H.ar(b))
return a*b},
ba:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ei:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.df(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.df(a,b)},
df:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.F("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
aJ:function(a,b){var u
if(a>0)u=this.de(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hy:function(a,b){if(b<0)throw H.c(H.ar(b))
return this.de(a,b)},
de:function(a,b){return b>31?0:a>>>b},
ai:function(a,b){if(typeof b!=="number")throw H.c(H.ar(b))
return a>b},
$iz:1,
$ia9:1}
J.ds.prototype={$il:1}
J.dr.prototype={}
J.bi.prototype={
W:function(a,b){if(b<0)throw H.c(H.cg(a,b))
if(b>=a.length)H.u(H.cg(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(b>=a.length)throw H.c(H.cg(a,b))
return a.charCodeAt(b)},
m:function(a,b){if(typeof b!=="string")throw H.c(P.kl(b,null,null))
return a+b},
aM:function(a,b,c,d){var u,t
c=P.bo(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ac:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ad(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
ab:function(a,b){return this.ac(a,b,0)},
w:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.u(H.ar(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.N()
if(b<0)throw H.c(P.dM(b,null))
if(b>c)throw H.c(P.dM(b,null))
if(c>a.length)throw H.c(P.dM(c,null))
return a.substring(b,c)},
aj:function(a,b){return this.w(a,b,null)},
t:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.K)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aB:function(a,b){var u=b-a.length
if(u<=0)return a
return this.t(" ",u)+a},
dR:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ad(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dQ:function(a,b){return this.dR(a,b,0)},
i:function(a){return a},
gF:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ilb:1,
$ii:1}
H.a5.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.b.W(this.a,b)},
$acQ:function(){return[P.l]},
$av:function(){return[P.l]},
$ah:function(){return[P.l]},
$ab:function(){return[P.l]}}
H.fF.prototype={}
H.dx.prototype={
gI:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.ci(s),q=r.gl(s)
if(t.b!==q)throw H.c(P.bW(s))
u=t.c
if(u>=q){t.saS(null)
return!1}t.saS(r.H(s,u));++t.c
return!0},
saS:function(a){this.d=H.A(a,H.q(this,0))},
$ib5:1}
H.ha.prototype={
gU:function(a){return new H.hb(J.bQ(this.a),this.b,this.$ti)},
gl:function(a){return J.aK(this.a)},
H:function(a,b){return this.b.$1(J.kk(this.a,b))},
$ah:function(a,b){return[b]}}
H.hb.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.saS(u.c.$1(t.gI(t)))
return!0}u.saS(null)
return!1},
gI:function(a){return this.a},
saS:function(a){this.a=H.A(a,H.q(this,1))},
$ab5:function(a,b){return[b]}}
H.j1.prototype={
gU:function(a){return new H.j2(J.bQ(this.a),this.b,this.$ti)}}
H.j2.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(H.C(t.$1(u.gI(u))))return!0
return!1},
gI:function(a){var u=this.a
return u.gI(u)}}
H.bY.prototype={}
H.cQ.prototype={
k:function(a,b,c){H.A(c,H.az(this,"cQ",0))
throw H.c(P.F("Cannot modify an unmodifiable list"))}}
H.e4.prototype={}
H.fs.prototype={
i:function(a){return P.kv(this)},
k:function(a,b,c){H.A(b,H.q(this,0))
H.A(c,H.q(this,1))
return H.mH()},
$iw:1}
H.ft.prototype={
gl:function(a){return this.a},
bi:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bi(0,b))return
return this.cX(b)},
cX:function(a){return this.b[H.K(a)]},
G:function(a,b){var u,t,s,r,q=this,p=H.q(q,1)
H.n(b,{func:1,ret:-1,args:[H.q(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.A(q.cX(r),p))}}}
H.ip.prototype={
ae:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hC.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fX.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.m(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.m(t.a)+")"
return s+r+"' on '"+u+"' ("+H.m(t.a)+")"}}
H.iB.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kh.prototype={
$1:function(a){if(!!J.U(a).$ibx)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.eI.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iat:1}
H.cq.prototype={
i:function(a){return"Closure '"+H.c3(this).trim()+"'"},
$ikp:1,
gj_:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ic.prototype={}
H.i4.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cl(u)+"'"}}
H.cn.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cn))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gF:function(a){var u,t=this.c
if(t==null)u=H.cG(this.a)
else u=typeof t!=="object"?J.d9(t):H.cG(t)
return(u^H.cG(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.c3(u)+"'")}}
H.ir.prototype={
i:function(a){return this.a}}
H.fn.prototype={
i:function(a){return this.a}}
H.hS.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.j3.prototype={
i:function(a){return"Assertion failed: "+P.dm(this.a)}}
H.a_.prototype={
gl:function(a){return this.a},
gap:function(a){return new H.h1(this,[H.q(this,0)])},
bi:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cS(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cS(t,b)}else return s.ik(b)},
ik:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cb(u.bA(t,u.ca(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bd(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bd(r,b)
s=t==null?null:t.b
return s}else return q.il(b)},
il:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bA(r,s.ca(a))
t=s.cb(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.A(b,H.q(s,0))
H.A(c,H.q(s,1))
if(typeof b==="string"){u=s.b
s.cK(u==null?s.b=s.bJ():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cK(t==null?s.c=s.bJ():t,b,c)}else s.im(b,c)},
im:function(a,b){var u,t,s,r,q=this
H.A(a,H.q(q,0))
H.A(b,H.q(q,1))
u=q.d
if(u==null)u=q.d=q.bJ()
t=q.ca(a)
s=q.bA(u,t)
if(s==null)q.bP(u,t,[q.bK(a,b)])
else{r=q.cb(s,a)
if(r>=0)s[r].b=b
else s.push(q.bK(a,b))}},
G:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.q(s,0),H.q(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bW(s))
u=u.c}},
cK:function(a,b,c){var u,t=this
H.A(b,H.q(t,0))
H.A(c,H.q(t,1))
u=t.bd(a,b)
if(u==null)t.bP(a,b,t.bK(b,c))
else u.b=c},
bK:function(a,b){var u=this,t=new H.h0(H.A(a,H.q(u,0)),H.A(b,H.q(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
ca:function(a){return J.d9(a)&0x3ffffff},
cb:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Q(a[t].a,b))return t
return-1},
i:function(a){return P.kv(this)},
bd:function(a,b){return a[b]},
bA:function(a,b){return a[b]},
bP:function(a,b,c){a[b]=c},
eM:function(a,b){delete a[b]},
cS:function(a,b){return this.bd(a,b)!=null},
bJ:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bP(t,u,t)
this.eM(t,u)
return t}}
H.h0.prototype={}
H.h1.prototype={
gl:function(a){return this.a.a},
gU:function(a){var u=this.a,t=new H.h2(u,u.r,this.$ti)
t.c=u.e
return t}}
H.h2.prototype={
gI:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bW(t))
else{t=u.c
if(t==null){u.scJ(null)
return!1}else{u.scJ(t.a)
u.c=u.c.c
return!0}}},
scJ:function(a){this.d=H.A(a,H.q(this,0))},
$ib5:1}
H.k3.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.k4.prototype={
$2:function(a,b){return this.a(a,b)},
$S:36}
H.k5.prototype={
$1:function(a){return this.a(H.K(a))},
$S:29}
H.fW.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ilb:1,
$inb:1}
H.cB.prototype={$icB:1}
H.bE.prototype={$ibE:1,$inn:1}
H.dE.prototype={
gl:function(a){return a.length},
$iI:1,
$aI:function(){}}
H.cC.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
k:function(a,b,c){H.or(c)
H.bh(b,a,a.length)
a[b]=c},
$abY:function(){return[P.z]},
$av:function(){return[P.z]},
$ih:1,
$ah:function(){return[P.z]},
$ib:1,
$ab:function(){return[P.z]}}
H.dF.prototype={
k:function(a,b,c){H.Z(c)
H.bh(b,a,a.length)
a[b]=c},
$abY:function(){return[P.l]},
$av:function(){return[P.l]},
$ih:1,
$ah:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]}}
H.hw.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hx.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hy.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hz.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hA.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.dG.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.cD.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
$icD:1,
$iP:1}
H.cV.prototype={}
H.cW.prototype={}
H.cX.prototype={}
H.cY.prototype={}
P.j5.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:26}
P.j4.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:43}
P.j6.prototype={
$0:function(){this.a.$0()},
$S:1}
P.j7.prototype={
$0:function(){this.a.$0()},
$S:1}
P.eO.prototype={
eu:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cf(new P.jG(this,b),0),a)
else throw H.c(P.F("`setTimeout()` not found."))},
ev:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cf(new P.jF(this,a,Date.now(),b),0),a)
else throw H.c(P.F("Periodic timer."))},
$ibb:1}
P.jG.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jF.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.ei(u,q)}s.c=r
t.d.$1(s)},
$S:1}
P.bg.prototype={
iq:function(a){if(this.c!==6)return!0
return this.b.b.cq(H.n(this.d,{func:1,ret:P.a7,args:[P.O]}),a.a,P.a7,P.O)},
ij:function(a){var u=this.e,t=P.O,s={futureOr:1,type:H.q(this,1)},r=this.b.b
if(H.f3(u,{func:1,args:[P.O,P.at]}))return H.kN(r.iN(u,a.a,a.b,null,t,P.at),s)
else return H.kN(r.cq(H.n(u,{func:1,args:[P.O]}),a.a,null,t),s)}}
P.aH.prototype={
e5:function(a,b,c){var u,t,s,r=H.q(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.Y
if(u!==C.f){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.of(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aH($.Y,[c])
s=b==null?1:3
this.cL(new P.bg(t,s,a,b,[r,c]))
return t},
iR:function(a,b){return this.e5(a,null,b)},
cL:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ibg")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaH")
s=u.a
if(s<4){u.cL(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.jY(null,null,s,H.n(new P.jf(t,a),{func:1,ret:-1}))}},
d7:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ibg")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaH")
u=q.a
if(u<4){q.d7(a)
return}p.a=u
p.c=q.c}o.a=p.bf(a)
u=p.b
u.toString
P.jY(null,null,u,H.n(new P.jj(o,p),{func:1,ret:-1}))}},
bO:function(){var u=H.f(this.c,"$ibg")
this.c=null
return this.bf(u)},
bf:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cO:function(a){var u,t,s=this,r=H.q(s,0)
H.kN(a,{futureOr:1,type:r})
u=s.$ti
if(H.kK(a,"$icu",u,"$acu"))if(H.kK(a,"$iaH",u,null))P.lB(a,s)
else P.nA(a,s)
else{t=s.bO()
H.A(a,r)
s.a=4
s.c=a
P.cT(s,t)}},
cP:function(a,b){var u,t=this
H.f(b,"$iat")
u=t.bO()
t.a=8
t.c=new P.an(a,b)
P.cT(t,u)},
$icu:1}
P.jf.prototype={
$0:function(){P.cT(this.a,this.b)},
$S:1}
P.jj.prototype={
$0:function(){P.cT(this.b,this.a.a)},
$S:1}
P.jg.prototype={
$1:function(a){var u=this.a
u.a=0
u.cO(a)},
$S:26}
P.jh.prototype={
$2:function(a,b){H.f(b,"$iat")
this.a.cP(a,b)},
$1:function(a){return this.$2(a,null)},
$S:31}
P.ji.prototype={
$0:function(){this.a.cP(this.b,this.c)},
$S:1}
P.jm.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.e4(H.n(s.d,{func:1}),null)}catch(r){u=H.aJ(r)
t=H.cj(r)
if(o.d){s=H.f(o.a.a.c,"$ian").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$ian")
else q.b=new P.an(u,t)
q.a=!0
return}if(!!J.U(n).$icu){if(n instanceof P.aH&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$ian")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.iR(new P.jn(p),null)
s.a=!1}},
$S:3}
P.jn.prototype={
$1:function(a){return this.a},
$S:52}
P.jl.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.q(s,0)
q=H.A(n.c,r)
p=H.q(s,1)
n.a.b=s.b.b.cq(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aJ(o)
t=H.cj(o)
s=n.a
s.b=new P.an(u,t)
s.a=!0}},
$S:3}
P.jk.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$ian")
r=m.c
if(H.C(r.iq(u))&&r.e!=null){q=m.b
q.b=r.ij(u)
q.a=!1}}catch(p){t=H.aJ(p)
s=H.cj(p)
r=H.f(m.a.a.c,"$ian")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.an(t,s)
n.a=!0}},
$S:3}
P.ec.prototype={}
P.i7.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.aH($.Y,[P.l])
r.a=0
u=H.q(s,0)
t=H.n(new P.i9(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.ia(r,q),{func:1,ret:-1})
W.aa(s.a,s.b,t,!1,u)
return q}}
P.i9.prototype={
$1:function(a){H.A(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.q(this.b,0)]}}}
P.ia.prototype={
$0:function(){this.b.cO(this.a.a)},
$S:1}
P.cK.prototype={}
P.i8.prototype={}
P.bb.prototype={}
P.an.prototype={
i:function(a){return H.m(this.a)},
$ibx:1}
P.jP.prototype={$ipk:1}
P.jX.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dH():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:1}
P.ju.prototype={
iO:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.Y){a.$0()
return}P.lM(r,r,this,a,-1)}catch(s){u=H.aJ(s)
t=H.cj(s)
P.jW(r,r,this,u,H.f(t,"$iat"))}},
iP:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.f===$.Y){a.$1(b)
return}P.lN(r,r,this,a,b,-1,c)}catch(s){u=H.aJ(s)
t=H.cj(s)
P.jW(r,r,this,u,H.f(t,"$iat"))}},
hZ:function(a,b){return new P.jw(this,H.n(a,{func:1,ret:b}),b)},
bT:function(a){return new P.jv(this,H.n(a,{func:1,ret:-1}))},
dm:function(a,b){return new P.jx(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
e4:function(a,b){H.n(a,{func:1,ret:b})
if($.Y===C.f)return a.$0()
return P.lM(null,null,this,a,b)},
cq:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.Y===C.f)return a.$1(b)
return P.lN(null,null,this,a,b,c,d)},
iN:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.Y===C.f)return a.$2(b,c)
return P.og(null,null,this,a,b,c,d,e,f)}}
P.jw.prototype={
$0:function(){return this.a.e4(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jv.prototype={
$0:function(){return this.a.iO(this.b)},
$S:3}
P.jx.prototype={
$1:function(a){var u=this.c
return this.a.iP(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jr.prototype={
gU:function(a){return P.lD(this,this.r,H.q(this,0))},
gl:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.A(b,H.q(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cM(u==null?s.b=P.kD():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cM(t==null?s.c=P.kD():t,b)}else return s.ey(0,b)},
ey:function(a,b){var u,t,s,r=this
H.A(b,H.q(r,0))
u=r.d
if(u==null)u=r.d=P.kD()
t=r.cQ(b)
s=u[t]
if(s==null)u[t]=[r.bw(b)]
else{if(r.cY(s,b)>=0)return!1
s.push(r.bw(b))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hg(this.c,b)
else return this.hf(0,b)},
hf:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.f_(r,b)
t=s.cY(u,b)
if(t<0)return!1
s.dg(u.splice(t,1)[0])
return!0},
cM:function(a,b){H.A(b,H.q(this,0))
if(H.f(a[b],"$icU")!=null)return!1
a[b]=this.bw(b)
return!0},
hg:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$icU")
if(u==null)return!1
this.dg(u)
delete a[b]
return!0},
d1:function(){this.r=1073741823&this.r+1},
bw:function(a){var u,t=this,s=new P.cU(H.A(a,H.q(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.d1()
return s},
dg:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.d1()},
cQ:function(a){return J.d9(a)&1073741823},
f_:function(a,b){return a[this.cQ(b)]},
cY:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Q(a[t].a,b))return t
return-1}}
P.cU.prototype={}
P.js.prototype={
gI:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bW(t))
else{t=u.c
if(t==null){u.scN(null)
return!1}else{u.scN(H.A(t.a,H.q(u,0)))
u.c=u.c.b
return!0}}},
scN:function(a){this.d=H.A(a,H.q(this,0))},
$ib5:1}
P.h3.prototype={
$2:function(a,b){this.a.k(0,H.A(a,this.b),H.A(b,this.c))},
$S:7}
P.h4.prototype={$ih:1,$ib:1}
P.v.prototype={
gU:function(a){return new H.dx(a,this.gl(a),[H.bM(this,a,"v",0)])},
H:function(a,b){return this.j(a,b)},
iU:function(a,b){var u,t=this,s=H.e([],[H.bM(t,a,"v",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.k(s,u,t.j(a,u))
return s},
iT:function(a){return this.iU(a,!0)},
m:function(a,b){var u,t=this,s=[H.bM(t,a,"v",0)]
H.j(b,"$ib",s,"$ab")
u=H.e([],s)
C.a.sl(u,C.d.m(t.gl(a),b.gl(b)))
C.a.bb(u,0,t.gl(a),a)
C.a.bb(u,t.gl(a),u.length,b)
return u},
ic:function(a,b,c,d){var u
H.A(d,H.bM(this,a,"v",0))
P.bo(b,c,this.gl(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.kq(a,"[","]")}}
P.h7.prototype={}
P.h8.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.m(a)
t.a=u+": "
t.a+=H.m(b)},
$S:7}
P.af.prototype={
G:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bM(s,a,"af",0),H.bM(s,a,"af",1)]})
for(u=J.bQ(s.gap(a));u.A();){t=u.gI(u)
b.$2(t,s.j(a,t))}},
gl:function(a){return J.aK(this.gap(a))},
i:function(a){return P.kv(a)},
$iw:1}
P.jH.prototype={
k:function(a,b,c){H.A(b,H.q(this,0))
H.A(c,H.q(this,1))
throw H.c(P.F("Cannot modify unmodifiable map"))}}
P.h9.prototype={
j:function(a,b){return J.d8(this.a,b)},
k:function(a,b,c){J.ki(this.a,H.A(b,H.q(this,0)),H.A(c,H.q(this,1)))},
G:function(a,b){J.kW(this.a,H.n(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]}))},
gl:function(a){return J.aK(this.a)},
i:function(a){return J.b_(this.a)},
$iw:1}
P.e5.prototype={}
P.jy.prototype={
i:function(a){return P.kq(this,"{","}")},
H:function(a,b){var u,t,s,r=this
P.kw(b,"index")
for(u=P.lD(r,r.r,H.q(r,0)),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.c(P.W(b,r,"index",null,t))},
$ih:1,
$ili:1}
P.er.prototype={}
P.eT.prototype={}
P.fj.prototype={
it:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bo(a0,a1,b.length)
u=$.mr()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.E(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.k2(C.b.E(b,n))
j=H.k2(C.b.E(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.b.W("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ak("")
g=r.a+=C.b.w(b,s,t)
r.a=g+H.dK(m)
s=n
continue}}throw H.c(P.a3("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.w(b,s,a1)
f=g.length
if(q>=0)P.kY(b,p,a1,q,o,f)
else{e=C.d.ba(f-1,4)+1
if(e===1)throw H.c(P.a3(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aM(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.kY(b,p,a1,q,o,d)
else{e=C.d.ba(d,4)
if(e===1)throw H.c(P.a3(c,b,a1))
if(e>1)b=C.b.aM(b,a1,a1,e===2?"==":"=")}return b},
$abV:function(){return[[P.b,P.l],P.i]}}
P.fk.prototype={
$abX:function(){return[[P.b,P.l],P.i]}}
P.bV.prototype={}
P.bX.prototype={}
P.fG.prototype={
$abV:function(){return[P.i,[P.b,P.l]]}}
P.iJ.prototype={
gib:function(){return C.L}}
P.iL.prototype={
bZ:function(a){var u,t,s=P.bo(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jO(u)
if(t.eY(a,0,s)!==s)t.di(J.mz(a,s-1),0)
return new Uint8Array(u.subarray(0,H.nR(0,t.b,u.length)))},
$abX:function(){return[P.i,[P.b,P.l]]}}
P.jO.prototype={
di:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eY:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.W(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.E(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.di(r,C.b.E(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iK.prototype={
bZ:function(a){var u,t,s,r,q,p,o,n,m
H.j(a,"$ib",[P.l],"$ab")
u=P.nq(!1,a,0,null)
if(u!=null)return u
t=P.bo(0,null,J.aK(a))
s=P.lP(a,0,t)
if(s>0){r=P.cL(a,0,s)
if(s===t)return r
q=new P.ak(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ak("")
n=new P.jN(!1,q)
n.c=o
n.i2(a,p,t)
if(n.e>0){H.u(P.a3("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.dK(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abX:function(){return[[P.b,P.l],P.i]}}
P.jN.prototype={
i2:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.j(a,"$ib",[P.l],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.ci(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.ah()
if((o&192)!==128){n=P.a3(h+C.d.b8(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.d(C.x,n)
if(u<=C.x[n]){n=P.a3("Overlong encoding of 0x"+C.d.b8(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a3("Character outside valid Unicode range: 0x"+C.d.b8(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.dK(u)
i.c=!1}for(n=p<c;n;){m=P.lP(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cL(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.N()
if(o<0){j=P.a3("Negative UTF-8 code unit: -0x"+C.d.b8(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a3(h+C.d.b8(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.a7.prototype={}
P.av.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.av&&this.a===b.a&&!0},
gF:function(a){var u=this.a
return(u^C.d.aJ(u,30))&1073741823},
i:function(a){var u=this,t=P.mI(H.n7(u)),s=P.dh(H.n5(u)),r=P.dh(H.n1(u)),q=P.dh(H.n2(u)),p=P.dh(H.n4(u)),o=P.dh(H.n6(u)),n=P.mJ(H.n3(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.z.prototype={}
P.b4.prototype={
m:function(a,b){return new P.b4(C.d.m(this.a,b.gcW()))},
p:function(a,b){return new P.b4(C.d.p(this.a,b.gcW()))},
ai:function(a,b){return C.d.ai(this.a,b.gcW())},
q:function(a,b){if(b==null)return!1
return b instanceof P.b4&&this.a===b.a},
gF:function(a){return C.d.gF(this.a)},
i:function(a){var u,t,s,r=new P.fE(),q=this.a
if(q<0)return"-"+new P.b4(0-q).i(0)
u=r.$1(C.d.a0(q,6e7)%60)
t=r.$1(C.d.a0(q,1e6)%60)
s=new P.fD().$1(q%1e6)
return""+C.d.a0(q,36e8)+":"+H.m(u)+":"+H.m(t)+"."+H.m(s)}}
P.fD.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:16}
P.fE.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:16}
P.bx.prototype={}
P.fc.prototype={
i:function(a){return"Assertion failed"}}
P.dH.prototype={
i:function(a){return"Throw of null."}}
P.b0.prototype={
gby:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbx:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gby()+o+u
if(!q.a)return t
s=q.gbx()
r=P.dm(q.b)
return t+s+": "+r}}
P.c4.prototype={
gby:function(){return"RangeError"},
gbx:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.m(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.m(s)
else if(t>s)u=": Not in range "+H.m(s)+".."+H.m(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.m(s)}return u}}
P.fU.prototype={
gby:function(){return"RangeError"},
gbx:function(){var u,t=H.Z(this.b)
if(typeof t!=="number")return t.N()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.m(u)},
gl:function(a){return this.f}}
P.iC.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iz.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.dV.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fr.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dm(u)+"."}}
P.hF.prototype={
i:function(a){return"Out of Memory"},
$ibx:1}
P.dU.prototype={
i:function(a){return"Stack Overflow"},
$ibx:1}
P.fy.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ek.prototype={
i:function(a){return"Exception: "+this.a}}
P.fQ.prototype={
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
for(q=g;q<o;++q){p=C.b.W(f,q)
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
return h+l+j+k+"\n"+C.b.t(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.m(g)+")"):h}}
P.l.prototype={}
P.h.prototype={
gl:function(a){var u,t=this.gU(this)
for(u=0;t.A();)++u
return u},
H:function(a,b){var u,t,s
P.kw(b,"index")
for(u=this.gU(this),t=0;u.A();){s=u.gI(u)
if(b===t)return s;++t}throw H.c(P.W(b,this,"index",null,t))},
i:function(a){return P.mN(this,"(",")")}}
P.b5.prototype={}
P.b.prototype={$ih:1}
P.w.prototype={}
P.J.prototype={
gF:function(a){return P.O.prototype.gF.call(this,this)},
i:function(a){return"null"}}
P.a9.prototype={}
P.O.prototype={constructor:P.O,$iO:1,
q:function(a,b){return this===b},
gF:function(a){return H.cG(this)},
i:function(a){return"Instance of '"+H.c3(this)+"'"},
toString:function(){return this.i(this)}}
P.at.prototype={}
P.i.prototype={$ilb:1}
P.ak.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ioW:1}
P.iH.prototype={
$2:function(a,b){var u,t,s,r=P.i
H.j(a,"$iw",[r,r],"$aw")
H.K(b)
u=J.kO(b).dQ(b,"=")
if(u===-1){if(b!=="")J.ki(a,P.kF(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.w(b,0,u)
s=C.b.aj(b,u+1)
r=this.a
J.ki(a,P.kF(t,0,t.length,r,!0),P.kF(s,0,s.length,r,!0))}return a},
$S:39}
P.iE.prototype={
$2:function(a,b){throw H.c(P.a3("Illegal IPv4 address, "+a,this.a,b))},
$S:27}
P.iF.prototype={
$2:function(a,b){throw H.c(P.a3("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:34}
P.iG.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.f6(C.b.w(this.b,a,b),null,16)
if(typeof u!=="number")return u.N()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:45}
P.cc.prototype={
ge9:function(){return this.b},
gc9:function(a){var u=this.c
if(u==null)return""
if(C.b.ab(u,"["))return C.b.w(u,1,u.length-1)
return u},
gbm:function(a){var u=this.d
if(u==null)return P.lE(this.a)
return u},
gck:function(a){var u=this.f
return u==null?"":u},
gdL:function(){var u=this.r
return u==null?"":u},
e2:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.j(b,"$iw",[P.i,null],"$aw")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.ab(p,"/"))p="/"+p
n=P.kE(null,0,0,b)
return new P.cc(u,s,q,r,p,n,m.r)},
gcl:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.i
s.she(new P.e5(P.lu(u==null?"":u),[t,t]))}return s.Q},
gdM:function(){return this.c!=null},
gdP:function(){return this.f!=null},
gdN:function(){return this.r!=null},
i:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.m(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.m(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.m(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.U(b).$ikz)if(s.a==b.gbs())if(s.c!=null===b.gdM())if(s.b==b.ge9())if(s.gc9(s)==b.gc9(b))if(s.gbm(s)==b.gbm(b))if(s.e===b.ge_(b)){u=s.f
t=u==null
if(!t===b.gdP()){if(t)u=""
if(u===b.gck(b)){u=s.r
t=u==null
if(!t===b.gdN()){if(t)u=""
u=u===b.gdL()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gF:function(a){var u=this.z
return u==null?this.z=C.b.gF(this.i(0)):u},
she:function(a){var u=P.i
this.Q=H.j(a,"$iw",[u,u],"$aw")},
$ikz:1,
gbs:function(){return this.a},
ge_:function(a){return this.e}}
P.jI.prototype={
$1:function(a){throw H.c(P.a3("Invalid port",this.a,this.b+1))},
$S:49}
P.jJ.prototype={
$1:function(a){return P.jM(C.T,a,C.h,!1)},
$S:40}
P.jL.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.m(P.jM(C.n,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.m(P.jM(C.n,b,C.h,!0))}},
$S:14}
P.jK.prototype={
$2:function(a,b){var u,t
H.K(a)
if(b==null||typeof b==="string")this.a.$2(a,H.K(b))
else for(u=J.bQ(H.m2(b,"$ih")),t=this.a;u.A();)t.$2(a,H.K(u.gI(u)))},
$S:44}
P.iD.prototype={
ge8:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.b.dR(u,"?",o)
s=u.length
if(t>=0){r=P.d3(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jb("data",p,p,p,P.d3(u,o,s,C.z,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jR.prototype={
$1:function(a){return new Uint8Array(96)},
$S:38}
P.jQ.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.mA(u,0,96,b)
return u},
$S:37}
P.jS.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.E(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.jT.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.E(b,0),t=C.b.E(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.jz.prototype={
gdM:function(){return this.c>0},
gdO:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.m()
t=this.e
if(typeof t!=="number")return H.D(t)
t=u+1<t
u=t}else u=!1
return u},
gdP:function(){var u=this.f
if(typeof u!=="number")return u.N()
return u<this.r},
gdN:function(){return this.r<this.a.length},
gd_:function(){return this.b===4&&C.b.ab(this.a,"http")},
gd0:function(){return this.b===5&&C.b.ab(this.a,"https")},
gbs:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gd_())q=t.x="http"
else if(t.gd0()){t.x="https"
q="https"}else if(q===4&&C.b.ab(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.ab(t.a,r)){t.x=r
q=r}else{q=C.b.w(t.a,0,q)
t.x=q}return q},
ge9:function(){var u=this.c,t=this.b+3
return u>t?C.b.w(this.a,t,u-1):""},
gc9:function(a){var u=this.c
return u>0?C.b.w(this.a,u,this.d):""},
gbm:function(a){var u,t=this
if(t.gdO()){u=t.d
if(typeof u!=="number")return u.m()
return P.f6(C.b.w(t.a,u+1,t.e),null,null)}if(t.gd_())return 80
if(t.gd0())return 443
return 0},
ge_:function(a){return C.b.w(this.a,this.e,this.f)},
gck:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.N()
return u<t?C.b.w(this.a,u+1,t):""},
gdL:function(){var u=this.r,t=this.a
return u<t.length?C.b.aj(t,u+1):""},
gcl:function(){var u=this,t=u.f
if(typeof t!=="number")return t.N()
if(t>=u.r)return C.U
t=P.i
return new P.e5(P.lu(u.gck(u)),[t,t])},
e2:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.j(b,"$iw",[P.i,null],"$aw")
u=k.gbs()
t=u==="file"
s=k.c
r=s>0?C.b.w(k.a,k.b+3,s):""
q=k.gdO()?k.gbm(k):j
s=k.c
if(s>0)p=C.b.w(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.w(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.ab(o,"/"))o="/"+o
m=P.kE(j,0,0,b)
n=k.r
l=n<s.length?C.b.aj(s,n+1):j
return new P.cc(u,r,p,q,o,m,l)},
gF:function(a){var u=this.y
return u==null?this.y=C.b.gF(this.a):u},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.U(b).$ikz&&this.a===b.i(0)},
i:function(a){return this.a},
$ikz:1}
P.jb.prototype={}
W.r.prototype={}
W.f7.prototype={
gl:function(a){return a.length}}
W.f9.prototype={
i:function(a){return String(a)}}
W.fa.prototype={
i:function(a){return String(a)}}
W.bS.prototype={$ibS:1}
W.bU.prototype={
ea:function(a,b,c){var u=a.getContext(b,P.oo(c))
return u},
$ibU:1}
W.bu.prototype={
gl:function(a){return a.length}}
W.cr.prototype={$icr:1}
W.fu.prototype={
gl:function(a){return a.length}}
W.S.prototype={$iS:1}
W.cs.prototype={
gl:function(a){return a.length}}
W.fv.prototype={}
W.b2.prototype={}
W.b3.prototype={}
W.fw.prototype={
gl:function(a){return a.length}}
W.fx.prototype={
gl:function(a){return a.length}}
W.fz.prototype={
gl:function(a){return a.length}}
W.di.prototype={$idi:1}
W.fA.prototype={
i:function(a){return String(a)}}
W.dj.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.j(c,"$iai",[P.a9],"$aai")
throw H.c(P.F("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[[P.ai,P.a9]]},
$av:function(){return[[P.ai,P.a9]]},
$ih:1,
$ah:function(){return[[P.ai,P.a9]]},
$ib:1,
$ab:function(){return[[P.ai,P.a9]]},
$aE:function(){return[[P.ai,P.a9]]}}
W.dk.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gag(a))+" x "+H.m(this.gad(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$iai)return!1
return a.left===u.gbk(b)&&a.top===u.gbo(b)&&this.gag(a)===u.gag(b)&&this.gad(a)===u.gad(b)},
gF:function(a){return W.lC(C.e.gF(a.left),C.e.gF(a.top),C.e.gF(this.gag(a)),C.e.gF(this.gad(a)))},
gdn:function(a){return a.bottom},
gad:function(a){return a.height},
gbk:function(a){return a.left},
gcp:function(a){return a.right},
gbo:function(a){return a.top},
gag:function(a){return a.width},
$iai:1,
$aai:function(){return[P.a9]}}
W.fB.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.K(c)
throw H.c(P.F("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[P.i]},
$av:function(){return[P.i]},
$ih:1,
$ah:function(){return[P.i]},
$ib:1,
$ab:function(){return[P.i]},
$aE:function(){return[P.i]}}
W.fC.prototype={
gl:function(a){return a.length}}
W.j9.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.f(u[b],"$ia2")},
k:function(a,b,c){var u
H.f(c,"$ia2")
u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gU:function(a){var u=this.iT(this)
return new J.as(u,u.length,[H.q(u,0)])},
$av:function(){return[W.a2]},
$ah:function(){return[W.a2]},
$ab:function(){return[W.a2]}}
W.a2.prototype={
gbY:function(a){return new W.j9(a,a.children)},
gds:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.N()
if(s<0)s=-s*0
if(typeof r!=="number")return r.N()
if(r<0)r=-r*0
return new P.ai(u,t,s,r,[P.a9])},
i:function(a){return a.localName},
$ia2:1}
W.o.prototype={$io:1}
W.k.prototype={
hR:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.ez(a,b,c,!1)},
ez:function(a,b,c,d){return a.addEventListener(b,H.cf(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ik:1}
W.aB.prototype={$iaB:1}
W.ct.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaB")
throw H.c(P.F("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aB]},
$av:function(){return[W.aB]},
$ih:1,
$ah:function(){return[W.aB]},
$ib:1,
$ab:function(){return[W.aB]},
$ict:1,
$aE:function(){return[W.aB]}}
W.fL.prototype={
gl:function(a){return a.length}}
W.fP.prototype={
gl:function(a){return a.length}}
W.aL.prototype={$iaL:1}
W.fS.prototype={
gl:function(a){return a.length}}
W.bZ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iH")
throw H.c(P.F("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.H]},
$av:function(){return[W.H]},
$ih:1,
$ah:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$ibZ:1,
$aE:function(){return[W.H]}}
W.cw.prototype={$icw:1}
W.cx.prototype={$icx:1}
W.b6.prototype={$ib6:1}
W.h5.prototype={
i:function(a){return String(a)}}
W.hp.prototype={
gl:function(a){return a.length}}
W.cz.prototype={$icz:1}
W.hq.prototype={
j:function(a,b){return P.bq(a.get(H.K(b)))},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
gap:function(a){var u=H.e([],[P.i])
this.G(a,new W.hr(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.c(P.F("Not supported"))},
$aaf:function(){return[P.i,null]},
$iw:1,
$aw:function(){return[P.i,null]}}
W.hr.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hs.prototype={
j:function(a,b){return P.bq(a.get(H.K(b)))},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
gap:function(a){var u=H.e([],[P.i])
this.G(a,new W.ht(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.c(P.F("Not supported"))},
$aaf:function(){return[P.i,null]},
$iw:1,
$aw:function(){return[P.i,null]}}
W.ht.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aO.prototype={$iaO:1}
W.hu.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaO")
throw H.c(P.F("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aO]},
$av:function(){return[W.aO]},
$ih:1,
$ah:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aE:function(){return[W.aO]}}
W.ac.prototype={$iac:1}
W.j8.prototype={
k:function(a,b,c){var u,t
H.f(c,"$iH")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gU:function(a){var u=this.a.childNodes
return new W.dp(u,u.length,[H.bM(C.V,u,"E",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$av:function(){return[W.H]},
$ah:function(){return[W.H]},
$ab:function(){return[W.H]}}
W.H.prototype={
iL:function(a,b){var u,t
try{u=a.parentNode
J.mx(u,b,a)}catch(t){H.aJ(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.ef(a):u},
hl:function(a,b,c){return a.replaceChild(b,c)},
$iH:1}
W.cE.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iH")
throw H.c(P.F("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.H]},
$av:function(){return[W.H]},
$ih:1,
$ah:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aE:function(){return[W.H]}}
W.aP.prototype={$iaP:1,
gl:function(a){return a.length}}
W.hH.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaP")
throw H.c(P.F("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aP]},
$av:function(){return[W.aP]},
$ih:1,
$ah:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aE:function(){return[W.aP]}}
W.hQ.prototype={
j:function(a,b){return P.bq(a.get(H.K(b)))},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
gap:function(a){var u=H.e([],[P.i])
this.G(a,new W.hR(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.c(P.F("Not supported"))},
$aaf:function(){return[P.i,null]},
$iw:1,
$aw:function(){return[P.i,null]}}
W.hR.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hT.prototype={
gl:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.i1.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaQ")
throw H.c(P.F("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aQ]},
$av:function(){return[W.aQ]},
$ih:1,
$ah:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aE:function(){return[W.aQ]}}
W.aR.prototype={$iaR:1}
W.i2.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaR")
throw H.c(P.F("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aR]},
$av:function(){return[W.aR]},
$ih:1,
$ah:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aE:function(){return[W.aR]}}
W.aS.prototype={$iaS:1,
gl:function(a){return a.length}}
W.i5.prototype={
j:function(a,b){return a.getItem(H.K(b))},
k:function(a,b,c){a.setItem(b,c)},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,P.i]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gap:function(a){var u=H.e([],[P.i])
this.G(a,new W.i6(u))
return u},
gl:function(a){return a.length},
$aaf:function(){return[P.i,P.i]},
$iw:1,
$aw:function(){return[P.i,P.i]}}
W.i6.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:14}
W.aE.prototype={$iaE:1}
W.bp.prototype={$ibp:1}
W.aT.prototype={$iaT:1}
W.aF.prototype={$iaF:1}
W.id.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaF")
throw H.c(P.F("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aF]},
$av:function(){return[W.aF]},
$ih:1,
$ah:function(){return[W.aF]},
$ib:1,
$ab:function(){return[W.aF]},
$aE:function(){return[W.aF]}}
W.ie.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaT")
throw H.c(P.F("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aT]},
$av:function(){return[W.aT]},
$ih:1,
$ah:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aE:function(){return[W.aT]}}
W.ii.prototype={
gl:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.aW.prototype={$iaW:1}
W.il.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaV")
throw H.c(P.F("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aV]},
$av:function(){return[W.aV]},
$ih:1,
$ah:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aE:function(){return[W.aV]}}
W.im.prototype={
gl:function(a){return a.length}}
W.bH.prototype={}
W.iI.prototype={
i:function(a){return String(a)}}
W.j0.prototype={
gl:function(a){return a.length}}
W.bf.prototype={
gi6:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.F("deltaY is not supported"))},
gi5:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.F("deltaX is not supported"))},
$ibf:1}
W.cS.prototype={
hm:function(a,b){return a.requestAnimationFrame(H.cf(H.n(b,{func:1,ret:-1,args:[P.a9]}),1))},
eR:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ja.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iS")
throw H.c(P.F("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.S]},
$av:function(){return[W.S]},
$ih:1,
$ah:function(){return[W.S]},
$ib:1,
$ab:function(){return[W.S]},
$aE:function(){return[W.S]}}
W.ef.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$iai)return!1
return a.left===u.gbk(b)&&a.top===u.gbo(b)&&a.width===u.gag(b)&&a.height===u.gad(b)},
gF:function(a){return W.lC(C.e.gF(a.left),C.e.gF(a.top),C.e.gF(a.width),C.e.gF(a.height))},
gad:function(a){return a.height},
gag:function(a){return a.width}}
W.jo.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaL")
throw H.c(P.F("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aL]},
$av:function(){return[W.aL]},
$ih:1,
$ah:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aE:function(){return[W.aL]}}
W.ew.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iH")
throw H.c(P.F("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.H]},
$av:function(){return[W.H]},
$ih:1,
$ah:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aE:function(){return[W.H]}}
W.jA.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaS")
throw H.c(P.F("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aS]},
$av:function(){return[W.aS]},
$ih:1,
$ah:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aE:function(){return[W.aS]}}
W.jE.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaE")
throw H.c(P.F("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aE]},
$av:function(){return[W.aE]},
$ih:1,
$ah:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$aE:function(){return[W.aE]}}
W.jc.prototype={}
W.kC.prototype={}
W.jd.prototype={}
W.je.prototype={
$1:function(a){return this.a.$1(H.f(a,"$io"))},
$S:32}
W.E.prototype={
gU:function(a){return new W.dp(a,this.gl(a),[H.bM(this,a,"E",0)])}}
W.dp.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scZ(J.d8(u.a,t))
u.c=t
return!0}u.scZ(null)
u.c=s
return!1},
gI:function(a){return this.d},
scZ:function(a){this.d=H.A(a,H.q(this,0))},
$ib5:1}
W.ee.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.el.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.cZ.prototype={}
W.d_.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eJ.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.d0.prototype={}
W.d1.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f2.prototype={}
P.jB.prototype={
dK:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cv:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.U(a)
if(!!u.$iav)return new Date(a.a)
if(!!u.$inb)throw H.c(P.iA("structured clone of RegExp"))
if(!!u.$iaB)return a
if(!!u.$ibS)return a
if(!!u.$ict)return a
if(!!u.$icw)return a
if(!!u.$icB||!!u.$ibE||!!u.$icz)return a
if(!!u.$iw){t=q.dK(a)
s=q.b
if(t>=s.length)return H.d(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.G(a,new P.jD(p,q))
return p.a}if(!!u.$ib){t=q.dK(a)
p=q.b
if(t>=p.length)return H.d(p,t)
r=p[t]
if(r!=null)return r
return q.i3(a,t)}throw H.c(P.iA("structured clone of other type"))},
i3:function(a,b){var u,t=J.ci(a),s=t.gl(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.cv(t.j(a,u)))
return r}}
P.jD.prototype={
$2:function(a,b){this.a.a[a]=this.b.cv(b)},
$S:7}
P.jZ.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.jC.prototype={}
P.fM.prototype={
gbe:function(){var u=this.b,t=H.az(u,"v",0),s=W.a2
return new H.ha(new H.j1(u,H.n(new P.fN(),{func:1,ret:P.a7,args:[t]}),[t]),H.n(new P.fO(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.f(c,"$ia2")
u=this.gbe()
J.mB(u.b.$1(J.kk(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aK(this.gbe().a)},
j:function(a,b){var u=this.gbe()
return u.b.$1(J.kk(u.a,b))},
gU:function(a){var u=P.l8(this.gbe(),!1,W.a2)
return new J.as(u,u.length,[H.q(u,0)])},
$av:function(){return[W.a2]},
$ah:function(){return[W.a2]},
$ab:function(){return[W.a2]}}
P.fN.prototype={
$1:function(a){return!!J.U(H.f(a,"$iH")).$ia2},
$S:51}
P.fO.prototype={
$1:function(a){return H.t(H.f(a,"$iH"),"$ia2")},
$S:30}
P.jt.prototype={
gcp:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.D(t)
return H.A(u+t,H.q(this,0))},
gdn:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.D(t)
return H.A(u+t,H.q(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.m(u.a)+", "+H.m(u.b)+") "+H.m(u.c)+" x "+H.m(u.d)},
q:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.U(b)
if(!!u.$iai){t=p.a
if(t==u.gbk(b)){s=p.b
if(s==u.gbo(b)){r=p.c
if(typeof t!=="number")return t.m()
if(typeof r!=="number")return H.D(r)
q=H.q(p,0)
if(H.A(t+r,q)===u.gcp(b)){t=p.d
if(typeof s!=="number")return s.m()
if(typeof t!=="number")return H.D(t)
u=H.A(s+t,q)===u.gdn(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gF:function(a){var u,t=this,s=t.a,r=J.d9(s),q=t.b,p=J.d9(q),o=t.c
if(typeof s!=="number")return s.m()
if(typeof o!=="number")return H.D(o)
u=H.q(t,0)
o=C.d.gF(H.A(s+o,u))
s=t.d
if(typeof q!=="number")return q.m()
if(typeof s!=="number")return H.D(s)
u=C.d.gF(H.A(q+s,u))
return P.nB(P.jq(P.jq(P.jq(P.jq(0,r),p),o),u))}}
P.ai.prototype={
gbk:function(a){return this.a},
gbo:function(a){return this.b},
gag:function(a){return this.c},
gad:function(a){return this.d}}
P.b7.prototype={$ib7:1}
P.fZ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib7")
throw H.c(P.F("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$av:function(){return[P.b7]},
$ih:1,
$ah:function(){return[P.b7]},
$ib:1,
$ab:function(){return[P.b7]},
$aE:function(){return[P.b7]}}
P.b9.prototype={$ib9:1}
P.hD.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib9")
throw H.c(P.F("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$av:function(){return[P.b9]},
$ih:1,
$ah:function(){return[P.b9]},
$ib:1,
$ab:function(){return[P.b9]},
$aE:function(){return[P.b9]}}
P.hJ.prototype={
gl:function(a){return a.length}}
P.ib.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.K(c)
throw H.c(P.F("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$av:function(){return[P.i]},
$ih:1,
$ah:function(){return[P.i]},
$ib:1,
$ab:function(){return[P.i]},
$aE:function(){return[P.i]}}
P.p.prototype={
gbY:function(a){return new P.fM(a,new W.j8(a))}}
P.bc.prototype={$ibc:1}
P.io.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibc")
throw H.c(P.F("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$av:function(){return[P.bc]},
$ih:1,
$ah:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$aE:function(){return[P.bc]}}
P.ep.prototype={}
P.eq.prototype={}
P.ez.prototype={}
P.eA.prototype={}
P.eK.prototype={}
P.eL.prototype={}
P.eR.prototype={}
P.eS.prototype={}
P.P.prototype={$ih:1,
$ah:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]},
$inn:1}
P.fe.prototype={
gl:function(a){return a.length}}
P.ff.prototype={
j:function(a,b){return P.bq(a.get(H.K(b)))},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
gap:function(a){var u=H.e([],[P.i])
this.G(a,new P.fg(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.c(P.F("Not supported"))},
$aaf:function(){return[P.i,null]},
$iw:1,
$aw:function(){return[P.i,null]}}
P.fg.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.fh.prototype={
gl:function(a){return a.length}}
P.bR.prototype={}
P.hE.prototype={
gl:function(a){return a.length}}
P.ed.prototype={}
P.db.prototype={$idb:1}
P.dq.prototype={$idq:1}
P.dL.prototype={$idL:1}
P.dP.prototype={$idP:1}
P.c5.prototype={
iQ:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g,h,i,j)
return},
a2:function(a,b,c){return a.uniform1f(b,c)},
aO:function(a,b,c){return a.uniform1i(b,c)},
bq:function(a,b,c,d){return a.uniform2f(b,c,d)},
X:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
cs:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
e7:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ct:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic5:1}
P.dQ.prototype={$idQ:1}
P.dW.prototype={$idW:1}
P.e3.prototype={$ie3:1}
P.i3.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return P.bq(a.item(b))},
k:function(a,b,c){H.f(c,"$iw")
throw H.c(P.F("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$av:function(){return[[P.w,,,]]},
$ih:1,
$ah:function(){return[[P.w,,,]]},
$ib:1,
$ab:function(){return[[P.w,,,]]},
$aE:function(){return[[P.w,,,]]}}
P.eG.prototype={}
P.eH.prototype={}
O.V.prototype={
bc:function(a){var u=this
u.sf5(H.e([],[a]))
u.sd5(null)
u.sd2(null)
u.sd6(null)},
cz:function(a,b,c){var u=this,t=H.az(u,"V",0)
H.n(b,{func:1,ret:P.a7,args:[[P.h,t]]})
t={func:1,ret:-1,args:[P.l,[P.h,t]]}
H.n(a,t)
H.n(c,t)
u.sd5(b)
u.sd2(a)
u.sd6(c)},
aD:function(a,b){return this.cz(a,null,b)},
bL:function(a){var u
H.j(a,"$ih",[H.az(this,"V",0)],"$ah")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cF:function(a,b){var u
H.j(b,"$ih",[H.az(this,"V",0)],"$ah")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.as(u,u.length,[H.q(u,0)])},
H:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.az(s,"V",0)
H.A(b,r)
r=[r]
if(H.C(s.bL(H.e([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.cF(t,H.e([b],r))}},
bS:function(a,b){var u,t,s=this
H.j(b,"$ih",[H.az(s,"V",0)],"$ah")
if(H.C(s.bL(b))){u=s.a
t=u.length
C.a.bS(u,b)
s.cF(t,b)}},
sf5:function(a){this.a=H.j(a,"$ib",[H.az(this,"V",0)],"$ab")},
sd5:function(a){this.b=H.n(a,{func:1,ret:P.a7,args:[[P.h,H.az(this,"V",0)]]})},
sd2:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.l,[P.h,H.az(this,"V",0)]]})},
sd6:function(a){H.n(a,{func:1,ret:-1,args:[P.l,[P.h,H.az(this,"V",0)]]})},
$ih:1}
O.cy.prototype={
gl:function(a){return this.a.length},
gn:function(){var u=this.b
return u==null?this.b=D.L():u},
aE:function(){var u=this.b
if(u!=null)u.D(null)},
ga1:function(a){var u=this.a
if(u.length>0)return C.a.gaA(u)
else return V.bD()},
bn:function(a){var u=this.a
if(a==null)C.a.h(u,V.bD())
else C.a.h(u,a)
this.aE()},
b5:function(){var u=this.a
if(u.length>0){u.pop()
this.aE()}},
sbB:function(a){this.a=H.j(a,"$ib",[V.ag],"$ab")}}
E.fl.prototype={}
E.ap.prototype={
sbt:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gn().M(0,s.gdY())
u=s.c
if(u!=null)u.gn().h(0,s.gdY())
t=new D.G("shape",r,s.c,[F.dR])
t.b=!0
s.bl(t)}},
ak:function(a,b){var u
for(u=this.y.a,u=new J.as(u,u.length,[H.q(u,0)]);u.A();)u.d.ak(0,b)},
a9:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.ga1(s))
s.aE()
a.cj(t.f)
s=a.dy
u=(s&&C.a).gaA(s)
if(u!=null&&t.d!=null)u.e1(a,t)
for(s=t.y.a,s=new J.as(s,s.length,[H.q(s,0)]);s.A();)s.d.a9(a)
a.ci()
a.dx.b5()},
gn:function(){var u=this.z
return u==null?this.z=D.L():u},
bl:function(a){var u=this.z
if(u!=null)u.D(a)},
a8:function(){return this.bl(null)},
dZ:function(a){H.f(a,"$ix")
this.e=null
this.bl(a)},
iz:function(){return this.dZ(null)},
dX:function(a){this.bl(H.f(a,"$ix"))},
iw:function(){return this.dX(null)},
iv:function(a,b){var u,t,s,r,q,p,o
H.j(b,"$ih",[E.ap],"$ah")
for(u=b.length,t=this.gdW(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.by()
o.sa3(null)
o.saH(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sa3(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a8()},
iy:function(a,b){var u,t
H.j(b,"$ih",[E.ap],"$ah")
for(u=b.gU(b),t=this.gdW();u.A();)u.gI(u).gn().M(0,t)
this.a8()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seo:function(a,b){this.y=H.j(b,"$iV",[E.ap],"$aV")},
$ic0:1}
E.hM.prototype={
ek:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.av(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cy()
t=[V.ag]
u.sbB(H.e([],t))
u.b=null
u.gn().h(0,new E.hN(s))
s.cy=u
u=new O.cy()
u.sbB(H.e([],t))
u.b=null
u.gn().h(0,new E.hO(s))
s.db=u
u=new O.cy()
u.sbB(H.e([],t))
u.b=null
u.gn().h(0,new E.hP(s))
s.dx=u
s.shE(H.e([],[O.bG]))
u=s.dy;(u&&C.a).h(u,null)
s.shx(new H.a_([P.i,A.cI]))},
giI:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga1(s)
u=t.db
u=t.z=s.t(0,u.ga1(u))
s=u}return s},
cj:function(a){var u=this.dy,t=a==null?(u&&C.a).gaA(u):a;(u&&C.a).h(u,t)},
ci:function(){var u=this.dy
if(u.length>1)u.pop()},
dl:function(a){var u=a.b
if(u.length===0)throw H.c(P.y("May not cache a shader with no name."))
if(this.fr.bi(0,u))throw H.c(P.y('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)},
shE:function(a){this.dy=H.j(a,"$ib",[O.bG],"$ab")},
shx:function(a){this.fr=H.j(a,"$iw",[P.i,A.cI],"$aw")}}
E.hN.prototype={
$1:function(a){var u
H.f(a,"$ix")
u=this.a
u.ch=u.z=null},
$S:12}
E.hO.prototype={
$1:function(a){var u
H.f(a,"$ix")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:12}
E.hP.prototype={
$1:function(a){var u
H.f(a,"$ix")
u=this.a
u.cx=u.ch=null},
$S:12}
E.e_.prototype={
cI:function(a){H.f(a,"$ix")
this.e3()},
cH:function(){return this.cI(null)},
gii:function(){var u,t=this,s=Date.now(),r=C.d.a0(P.l3(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.av(s,!1)
return u/r},
d9:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.t()
if(typeof r!=="number")return H.D(r)
u=C.e.c8(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.t()
t=C.e.c8(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lo(C.q,s.giM())}},
e3:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.ih(this),{func:1,ret:-1,args:[P.a9]})
C.C.eR(u)
C.C.hm(u,W.lS(t,P.a9))}},
iK:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.d9()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.av(r,!1)
s.y=P.l3(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aE()
r=s.db
C.a.sl(r.a,0)
r.aE()
r=s.dx
C.a.sl(r.a,0)
r.aE()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.a9(p.e)}}catch(q){u=H.aJ(q)
t=H.cj(q)
P.kS("Error: "+H.m(u))
P.kS("Stack: "+H.m(t))
throw H.c(u)}}}
E.ih.prototype={
$1:function(a){var u
H.m4(a)
u=this.a
if(u.ch){u.ch=!1
u.iK()}},
$S:28}
Z.ea.prototype={$ioP:1}
Z.dc.prototype={
a5:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aJ(s)
t=P.y('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.m(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.m(u.e)+"]"}}
Z.eb.prototype={$ioQ:1}
Z.cp.prototype={
az:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a5:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a5(a)},
aN:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a9:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.i],p=H.e([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(p,u[s].i(0))
r=H.e([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.b_(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.u(p,", ")+"\nAttrs:   "+C.a.u(r,", ")},
sf0:function(a){this.b=H.j(a,"$ib",[Z.c_],"$ab")},
$ioX:1}
Z.c_.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c3(this.c)+"'")+"]"}}
Z.bJ.prototype={
gcA:function(a){var u=this.a,t=(u&$.aY().a)!==0?3:0
if((u&$.bt().a)!==0)t+=3
if((u&$.bs().a)!==0)t+=3
if((u&$.bO().a)!==0)t+=2
if((u&$.bP().a)!==0)t+=3
if((u&$.d6().a)!==0)t+=3
if((u&$.d7().a)!==0)t+=4
if((u&$.cm().a)!==0)++t
return(u&$.br().a)!==0?t+4:t},
hV:function(a){var u,t=$.aY(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bt()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bs()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bO()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bP()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d6()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d7()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.br()
if((s&t.a)!==0)if(u===a)return t
return $.mq()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bJ))return!1
return this.a===b.a},
i:function(a){var u=H.e([],[P.i]),t=this.a
if((t&$.aY().a)!==0)C.a.h(u,"Pos")
if((t&$.bt().a)!==0)C.a.h(u,"Norm")
if((t&$.bs().a)!==0)C.a.h(u,"Binm")
if((t&$.bO().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bP().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d6().a)!==0)C.a.h(u,"Clr3")
if((t&$.d7().a)!==0)C.a.h(u,"Clr4")
if((t&$.cm().a)!==0)C.a.h(u,"Weight")
if((t&$.br().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.u(u,"|")}}
D.fo.prototype={}
D.by.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.x]}
H.n(b,u)
if(this.a==null)this.sa3(H.e([],[u]))
u=this.a;(u&&C.a).h(u,b)},
M:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.x]})
u=s.a
u=u==null?null:C.a.ao(u,b)
if(u===!0){u=s.a
t=(u&&C.a).M(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.ao(u,b)
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
if(a==null){a=new D.x()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.G(P.l8(u,!0,{func:1,ret:-1,args:[D.x]}),new D.fI(q))
u=r.b
if(u!=null){r.saH(H.e([],[{func:1,ret:-1,args:[D.x]}]))
C.a.G(u,new D.fJ(q))}return!0},
dA:function(){return this.D(null)},
aC:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.D(u)}}},
sa3:function(a){this.a=H.j(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")},
saH:function(a){this.b=H.j(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")}}
D.fI.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:25}
D.fJ.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:25}
D.x.prototype={}
D.bz.prototype={}
D.bA.prototype={}
D.G.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.dd.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dd))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.dv.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dv))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.fY.prototype={
iE:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
iA:function(a){this.c=a.b
this.d.M(0,a.a)
return!1},
shd:function(a){this.d=H.j(a,"$ili",[P.l],"$ali")}}
X.dy.prototype={}
X.h6.prototype={
aT:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.t()
u=b.b
t=q.ch
if(typeof u!=="number")return u.t()
s=new V.a6(o.a+n*m,o.b+u*t)
t=q.a.gaK()
r=new X.bl(a,V.bn(),q.x,t,s)
r.b=!0
q.z=new P.av(p,!1)
q.x=s
return r},
cg:function(a,b){this.r=a.a
return!1},
b4:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eb()
if(typeof u!=="number")return u.ah()
this.r=(u&~t)>>>0
return!1},
b3:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.aT(a,b))
return!0},
iF:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaK()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.t()
q=a.b
p=o.cy
if(typeof q!=="number")return q.t()
t=new X.cA(new V.R(s*r,q*p),u,t)
t.b=!0
n.D(t)
return!0},
fK:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dy(c,r.a.gaK(),b)
s.b=!0
t.D(s)
r.y=new P.av(u,!1)
r.x=V.bn()}}
X.aw.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aw))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.C(this.b)?"Alt+":""
return u+(H.C(this.c)?"Shift+":"")}}
X.bl.prototype={}
X.hv.prototype={
bz:function(a,b,c){var u=this,t=new P.av(Date.now(),!1),s=u.a.gaK(),r=new X.bl(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cg:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.D(this.bz(a,b,!0))
return!0},
b4:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eb()
if(typeof t!=="number")return t.ah()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.D(u.bz(a,b,!0))
return!0},
b3:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.bz(a,b,!1))
return!0},
iG:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaK()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.t()
r=a.b
q=p.ch
if(typeof r!=="number")return r.t()
u=new X.cA(new V.R(t*s,r*q),u,b)
u.b=!0
o.D(u)
return!0},
gdz:function(){var u=this.b
return u==null?this.b=D.L():u},
gcu:function(){var u=this.c
return u==null?this.c=D.L():u},
gdV:function(){var u=this.d
return u==null?this.d=D.L():u}}
X.cA.prototype={}
X.hI.prototype={}
X.e1.prototype={}
X.ik.prototype={
aT:function(a,b){var u,t,s,r,q=this
H.j(a,"$ib",[V.a6],"$ab")
u=new P.av(Date.now(),!1)
t=a.length>0?a[0]:V.bn()
s=q.a.gaK()
r=new X.e1(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
iD:function(a){var u
H.j(a,"$ib",[V.a6],"$ab")
u=this.b
if(u==null)return!1
u.D(this.aT(a,!0))
return!0},
iB:function(a){var u
H.j(a,"$ib",[V.a6],"$ab")
u=this.c
if(u==null)return!1
u.D(this.aT(a,!0))
return!0},
iC:function(a){var u
H.j(a,"$ib",[V.a6],"$ab")
u=this.d
if(u==null)return!1
u.D(this.aT(a,!1))
return!0}}
X.e6.prototype={
gaK:function(){var u=this.a,t=C.o.gds(u).c
t.toString
u=C.o.gds(u).d
u.toString
return V.dN(0,0,t,u)},
cT:function(a){var u=a.keyCode,t=H.C(a.ctrlKey)||H.C(a.metaKey)
return new X.dv(u,new X.aw(t,a.altKey,a.shiftKey))},
aI:function(a){var u=this.b,t=H.C(a.ctrlKey)||H.C(a.metaKey)
u.c=new X.aw(t,a.altKey,a.shiftKey)},
bQ:function(a){var u=this.b,t=H.C(a.ctrlKey)||H.C(a.metaKey)
u.c=new X.aw(t,a.altKey,a.shiftKey)},
aw:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.p()
u=t.top
if(typeof r!=="number")return r.p()
return new V.a6(s-q,r-u)},
aU:function(a){return new V.R(a.movementX,a.movementY)},
bN:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.e([],[V.a6])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
q=C.e.Z(r.pageX)
C.e.Z(r.pageY)
p=o.left
C.e.Z(r.pageX)
C.a.h(n,new V.a6(q-p,C.e.Z(r.pageY)-o.top))}return n},
at:function(a){var u=a.buttons,t=H.C(a.ctrlKey)||H.C(a.metaKey)
return new X.dd(u,new X.aw(t,a.altKey,a.shiftKey))},
bC:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.p()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.p()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fE:function(a){this.f=!0},
fl:function(a){this.f=!1},
fs:function(a){H.f(a,"$iac")
if(H.C(this.f)&&this.bC(a))a.preventDefault()},
fI:function(a){var u
H.f(a,"$ib6")
if(!H.C(this.f))return
u=this.cT(a)
this.b.iE(u)},
fG:function(a){var u
H.f(a,"$ib6")
if(!H.C(this.f))return
u=this.cT(a)
this.b.iA(u)},
fM:function(a){var u,t,s,r,q=this
H.f(a,"$iac")
u=q.a
u.focus()
q.f=!0
q.aI(a)
if(H.C(q.x)){t=q.at(a)
s=q.aU(a)
if(q.d.cg(t,s))a.preventDefault()
return}if(H.C(q.r)){q.y=a
u.requestPointerLock()
return}t=q.at(a)
r=q.aw(a)
if(q.c.cg(t,r))a.preventDefault()},
fQ:function(a){var u,t,s,r=this
H.f(a,"$iac")
r.aI(a)
u=r.at(a)
if(H.C(r.x)){t=r.aU(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.aw(a)
if(r.c.b4(u,s))a.preventDefault()},
fw:function(a){var u,t,s,r=this
H.f(a,"$iac")
if(!r.bC(a)){r.aI(a)
u=r.at(a)
if(H.C(r.x)){t=r.aU(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.aw(a)
if(r.c.b4(u,s))a.preventDefault()}},
fO:function(a){var u,t,s,r=this
H.f(a,"$iac")
r.aI(a)
u=r.at(a)
if(H.C(r.x)){t=r.aU(a)
if(r.d.b3(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.aw(a)
if(r.c.b3(u,s))a.preventDefault()},
fu:function(a){var u,t,s,r=this
H.f(a,"$iac")
if(!r.bC(a)){r.aI(a)
u=r.at(a)
if(H.C(r.x)){t=r.aU(a)
if(r.d.b3(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.aw(a)
if(r.c.b3(u,s))a.preventDefault()}},
fS:function(a){var u,t,s=this
H.f(a,"$ibf")
s.aI(a)
u=new V.R((a&&C.B).gi5(a),C.B.gi6(a)).v(0,180)
if(H.C(s.x)){if(s.d.iF(u))a.preventDefault()
return}if(H.C(s.r))return
t=s.aw(a)
if(s.c.iG(u,t))a.preventDefault()},
fU:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.at(s.y)
t=s.aw(s.y)
s.d.fK(u,t,r)}},
h9:function(a){var u,t=this
H.f(a,"$iaW")
t.a.focus()
t.f=!0
t.bQ(a)
u=t.bN(a)
if(t.e.iD(u))a.preventDefault()},
h5:function(a){var u
H.f(a,"$iaW")
this.bQ(a)
u=this.bN(a)
if(this.e.iB(u))a.preventDefault()},
h7:function(a){var u
H.f(a,"$iaW")
this.bQ(a)
u=this.bN(a)
if(this.e.iC(u))a.preventDefault()},
seT:function(a){this.z=H.j(a,"$ib",[[P.cK,P.O]],"$ab")}}
D.bw.prototype={
gn:function(){var u=this.r
return u==null?this.r=D.L():u},
aq:function(a){var u
H.f(a,"$ix")
u=this.r
if(u!=null)u.D(a)},
eq:function(){return this.aq(null)},
$iab:1,
$ic0:1}
D.ab.prototype={$ic0:1}
D.dw.prototype={
gn:function(){var u=this.x
return u==null?this.x=D.L():u},
aq:function(a){var u=this.x
if(u!=null)u.D(a)},
d4:function(a){var u
H.f(a,"$ix")
u=this.y
if(u!=null)u.D(a)},
fJ:function(){return this.d4(null)},
fW:function(a){var u,t,s
H.j(a,"$ih",[D.ab],"$ah")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.B)(a),++t){s=a[t]
if(s==null||this.eJ(s))return!1}return!0},
ff:function(a,b){var u,t,s,r,q,p,o,n=D.ab
H.j(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gd3(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=H.f(b[q],"$iab")
if(p instanceof D.bw)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.by()
o.sa3(null)
o.saH(null)
o.c=null
o.d=0
p.r=o}H.n(t,s)
if(o.a==null)o.sa3(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bz([n])
n.b=!0
this.aq(n)},
h_:function(a,b){var u,t,s,r=D.ab
H.j(b,"$ih",[r],"$ah")
for(u=b.gU(b),t=this.gd3();u.A();){s=u.gI(u)
C.a.M(this.e,s)
s.gn().M(0,t)}r=new D.bA([r])
r.b=!0
this.aq(r)},
eJ:function(a){var u=C.a.ao(this.e,a)
return u},
seQ:function(a){this.e=H.j(a,"$ib",[D.bw],"$ab")},
sha:function(a){this.f=H.j(a,"$ib",[D.dJ],"$ab")},
shA:function(a){this.r=H.j(a,"$ib",[D.dT],"$ab")},
$ah:function(){return[D.ab]},
$aV:function(){return[D.ab]}}
D.dJ.prototype={$iab:1,$ic0:1}
D.dT.prototype={$iab:1,$ic0:1}
V.a0.prototype={
m:function(a,b){var u=C.e.m(this.a,b.gcm()),t=C.e.m(this.b,b.gbr()),s=C.e.m(this.c,b.gbU())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a0(u,t,s)},
p:function(a,b){var u=C.e.p(this.a,b.gcm()),t=C.e.p(this.b,b.gbr()),s=C.e.p(this.c,b.gbU())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a0(u,t,s)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
V.a1.prototype={
m:function(a,b){var u=this,t=C.e.m(u.a,b.gcm()),s=C.e.m(u.b,b.gbr()),r=C.e.m(u.c,b.gbU()),q=C.e.m(u.d,b.ghU(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.a1(t,s,r,q)},
p:function(a,b){var u=this,t=C.e.p(u.a,b.gcm()),s=C.e.p(u.b,b.gbr()),r=C.e.p(u.c,b.gbU()),q=C.e.p(u.d,b.ghU(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.a1(t,s,r,q)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.T(u.a,3,0)+", "+V.T(u.b,3,0)+", "+V.T(u.c,3,0)+", "+V.T(u.d,3,0)+"]"}}
V.fH.prototype={}
V.dD.prototype={
aa:function(a,b){var u=this,t=H.e([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.z])
return t},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dD))return!1
u=b.a
t=$.M().a
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
i:function(a){var u,t,s,r,q=this,p=[P.z],o=V.ch(H.e([q.a,q.d,q.r],p),3,0),n=V.ch(H.e([q.b,q.e,q.x],p),3,0),m=V.ch(H.e([q.c,q.f,q.y],p),3,0)
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
V.ag.prototype={
aa:function(a,b){var u=this,t=H.e([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.z])
return t},
dT:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.M().a)return V.bD()
u=1/b1
t=-n
s=-a0
return V.aN((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
t:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aN(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bp:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.N(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cr:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a4(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ag))return!1
u=b.a
t=$.M().a
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
i:function(a){return this.R()},
J:function(a){var u,t,s,r,q,p=this,o=[P.z],n=V.ch(H.e([p.a,p.e,p.y,p.cx],o),3,0),m=V.ch(H.e([p.b,p.f,p.z,p.cy],o),3,0),l=V.ch(H.e([p.c,p.r,p.Q,p.db],o),3,0),k=V.ch(H.e([p.d,p.x,p.ch,p.dx],o),3,0)
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
R:function(){return this.J("")}}
V.a6.prototype={
m:function(a,b){return new V.a6(this.a+b.a,this.b+b.b)},
p:function(a,b){return new V.a6(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+"]"}}
V.a4.prototype={
m:function(a,b){return new V.a4(this.a+b.a,this.b+b.b,this.c+b.c)},
p:function(a,b){return new V.a4(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){return new V.a4(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
V.ba.prototype={
m:function(a,b){var u=this
return new V.ba(C.d.m(u.a,b.giX(b)),C.d.m(u.b,b.giY(b)),C.d.m(u.c,b.giZ(b)),C.d.m(u.d,b.giW(b)))},
p:function(a,b){var u=this
return new V.ba(C.d.p(u.a,b.giX(b)),C.d.p(u.b,b.giY(b)),C.d.p(u.c,b.giZ(b)),C.d.p(u.d,b.giW(b)))},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ba))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.T(u.a,3,0)+", "+V.T(u.b,3,0)+", "+V.T(u.c,3,0)+", "+V.T(u.d,3,0)+"]"}}
V.bF.prototype={
ga7:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bF))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.T(u.a,3,0)+", "+V.T(u.b,3,0)+", "+V.T(u.c,3,0)+", "+V.T(u.d,3,0)+"]"}}
V.R.prototype={
cc:function(a){return Math.sqrt(this.B(this))},
B:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.D(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.D(t)
return s*r+u*t},
m:function(a,b){var u,t=this.a,s=b.gc0(b)
if(typeof t!=="number")return t.m()
s=C.e.m(t,s)
t=this.b
u=b.gc1(b)
if(typeof t!=="number")return t.m()
return new V.R(s,C.e.m(t,u))},
p:function(a,b){var u,t=this.a,s=b.gc0(b)
if(typeof t!=="number")return t.p()
s=C.e.p(t,s)
t=this.b
u=b.gc1(b)
if(typeof t!=="number")return t.p()
return new V.R(s,C.e.p(t,u))},
t:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.t()
u=this.b
if(typeof u!=="number")return u.t()
return new V.R(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.M().a){u=$.lv
return u==null?$.lv=new V.R(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.R(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=this.a
s=$.M()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.D(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.D(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+"]"}}
V.N.prototype={
cc:function(a){return Math.sqrt(this.B(this))},
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ay:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.N(u*t-s*r,s*q-p*t,p*r-u*q)},
m:function(a,b){return new V.N(this.a+b.a,this.b+b.b,this.c+b.c)},
p:function(a,b){return new V.N(this.a-b.a,this.b-b.b,this.c-b.c)},
P:function(a){return new V.N(-this.a,-this.b,-this.c)},
t:function(a,b){return new V.N(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if(Math.abs(b-0)<$.M().a)return V.cR()
return new V.N(this.a/b,this.b/b,this.c/b)},
dU:function(){var u=$.M().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.N))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
U.fq.prototype={
bv:function(a){var u=V.oO(a,this.c,this.b)
return u},
gn:function(){var u=this.y
return u==null?this.y=D.L():u},
L:function(a){var u=this.y
if(u!=null)u.D(a)},
scw:function(a,b){},
scd:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.M().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bv(u)}s=new D.G("maximumLocation",s,t.b,[P.z])
s.b=!0
t.L(s)}},
scf:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.M().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bv(u)}s=new D.G("minimumLocation",s,t.c,[P.z])
s.b=!0
t.L(s)}},
sa6:function(a,b){var u,t=this
b=t.bv(b)
u=t.d
if(!(Math.abs(u-b)<$.M().a)){t.d=b
u=new D.G("location",u,b,[P.z])
u.b=!0
t.L(u)}},
sce:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.M().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.G("maximumVelocity",r,a,[P.z])
r.b=!0
s.L(r)}},
sT:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.M().a)){u.f=a
t=new D.G("velocity",t,a,[P.z])
t.b=!0
u.L(t)}},
sc_:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.M().a)){this.x=a
u=new D.G("dampening",u,a,[P.z])
u.b=!0
this.L(u)}},
ak:function(a,b){var u,t,s,r=this,q=r.f,p=$.M().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa6(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.M().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sT(u)}}}
U.df.prototype={
gn:function(){var u=this.b
return u==null?this.b=D.L():u},
aP:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.df))return!1
return J.Q(this.a,b.a)},
i:function(a){return"Constant: "+this.a.J("          ")}}
U.cv.prototype={
gn:function(){var u=this.e
return u==null?this.e=D.L():u},
L:function(a){var u
H.f(a,"$ix")
u=this.e
if(u!=null)u.D(a)},
a4:function(){return this.L(null)},
fd:function(a,b){var u,t,s,r,q,p,o,n=U.ah
H.j(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gaG(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=b[q]
if(p!=null){o=p.gn()
o.toString
H.n(t,s)
if(o.a==null)o.sa3(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bz([n])
n.b=!0
this.L(n)},
fY:function(a,b){var u,t,s=U.ah
H.j(b,"$ih",[s],"$ah")
for(u=b.gU(b),t=this.gaG();u.A();)u.gI(u).gn().M(0,t)
s=new D.bA([s])
s.b=!0
this.L(s)},
aP:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.N()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.as(r,r.length,[H.q(r,0)]),u=null;r.A();){q=r.d
if(q!=null){t=q.aP(0,b,c)
if(t!=null)u=u==null?t:t.t(0,u)}}s.f=u==null?V.bD():u
r=s.e
if(r!=null)r.aC(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cv))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.Q(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ah:function(){return[U.ah]},
$aV:function(){return[U.ah]},
$iah:1}
U.ah.prototype={}
U.e7.prototype={
gn:function(){var u=this.cy
return u==null?this.cy=D.L():u},
L:function(a){var u
H.f(a,"$ix")
u=this.cy
if(u!=null)u.D(a)},
a4:function(){return this.L(null)},
aV:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdz().h(0,u.gbD())
u.a.c.gdV().h(0,u.gbF())
u.a.c.gcu().h(0,u.gbH())
return!0},
bE:function(a){var u=this
H.f(a,"$ix")
if(!J.Q(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bG:function(a){var u,t,s,r,q,p,o,n=this
a=H.t(H.f(a,"$ix"),"$ibl")
if(!H.C(n.y))return
if(H.C(n.x)){u=a.d.p(0,a.y)
u=new V.R(u.a,u.b)
u=u.B(u)
t=n.r
if(typeof t!=="number")return H.D(t)
if(u<t)return
n.x=!1}if(H.C(n.d)){u=a.c
t=a.d.p(0,a.y)
u=new V.R(t.a,t.b).t(0,2).v(0,u.ga7())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.t()
s=n.e
if(typeof s!=="number")return H.D(s)
t.sT(u*10*s)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=new V.R(s.a,s.b).t(0,2).v(0,u.ga7())
s=n.b
q=r.a
if(typeof q!=="number")return q.P()
p=n.e
if(typeof p!=="number")return H.D(p)
o=n.z
if(typeof o!=="number")return H.D(o)
s.sa6(0,-q*p+o)
n.b.sT(0)
t=t.p(0,a.z)
n.Q=new V.R(t.a,t.b).t(0,2).v(0,u.ga7())}n.a4()},
bI:function(a){var u,t,s,r=this
H.f(a,"$ix")
if(!H.C(r.y))return
r.y=!1
if(H.C(r.x))return
u=r.Q
if(u.B(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.t()
s=r.e
if(typeof s!=="number")return H.D(s)
u.sT(t*10*s)
r.a4()}},
aP:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.N()
if(q<p){r.ch=p
u=b.y
r.b.ak(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aN(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iah:1}
U.e8.prototype={
gn:function(){var u=this.fx
return u==null?this.fx=D.L():u},
L:function(a){var u
H.f(a,"$ix")
u=this.fx
if(u!=null)u.D(a)},
a4:function(){return this.L(null)},
aV:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdz().h(0,s.gbD())
s.a.c.gdV().h(0,s.gbF())
s.a.c.gcu().h(0,s.gbH())
u=s.a.d
t=u.f
u=t==null?u.f=D.L():t
u.h(0,s.gf6())
u=s.a.d
t=u.d
u=t==null?u.d=D.L():t
u.h(0,s.gf8())
u=s.a.e
t=u.b
u=t==null?u.b=D.L():t
u.h(0,s.ghK())
u=s.a.e
t=u.d
u=t==null?u.d=D.L():t
u.h(0,s.ghI())
u=s.a.e
t=u.c
u=t==null?u.c=D.L():t
u.h(0,s.ghG())
return!0},
an:function(a){var u=a.a,t=a.b
if(H.C(this.f)){if(typeof u!=="number")return u.P()
u=-u}if(H.C(this.r)){if(typeof t!=="number")return t.P()
t=-t}return new V.R(u,t)},
bE:function(a){var u=this
a=H.t(H.f(a,"$ix"),"$ibl")
if(!J.Q(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bG:function(a){var u,t,s,r,q,p,o,n=this
a=H.t(H.f(a,"$ix"),"$ibl")
if(!H.C(n.cx))return
if(H.C(n.ch)){u=a.d.p(0,a.y)
u=new V.R(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.D(t)
if(u<t)return
n.ch=!1}if(H.C(n.e)){u=a.c
t=a.d.p(0,a.y)
u=n.an(new V.R(t.a,t.b).t(0,2).v(0,u.ga7()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.P()
s=n.y
if(typeof s!=="number")return H.D(s)
t.sT(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.P()
t=n.x
if(typeof t!=="number")return H.D(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=n.an(new V.R(s.a,s.b).t(0,2).v(0,u.ga7()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.D(p)
o=n.cy
if(typeof o!=="number")return H.D(o)
s.sa6(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.D(q)
s=n.db
if(typeof s!=="number")return H.D(s)
o.sa6(0,-p*q+s)
n.b.sT(0)
n.c.sT(0)
t=t.p(0,a.z)
n.dx=n.an(new V.R(t.a,t.b).t(0,2).v(0,u.ga7()))}n.a4()},
bI:function(a){var u,t,s,r=this
H.f(a,"$ix")
if(!H.C(r.cx))return
r.cx=!1
if(H.C(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.P()
s=r.y
if(typeof s!=="number")return H.D(s)
u.sT(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.P()
u=r.x
if(typeof u!=="number")return H.D(u)
s.sT(-t*10*u)
r.a4()}},
f7:function(a){var u=this
if(H.t(H.f(a,"$ix"),"$idy").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
f9:function(a){var u,t,s,r,q,p,o,n=this
a=H.t(H.f(a,"$ix"),"$ibl")
if(!J.Q(n.d,a.x.b))return
u=a.c
t=a.d
s=t.p(0,a.y)
r=n.an(new V.R(s.a,s.b).t(0,2).v(0,u.ga7()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.D(p)
o=n.cy
if(typeof o!=="number")return H.D(o)
s.sa6(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.D(q)
s=n.db
if(typeof s!=="number")return H.D(s)
o.sa6(0,-p*q+s)
n.b.sT(0)
n.c.sT(0)
t=t.p(0,a.z)
n.dx=n.an(new V.R(t.a,t.b).t(0,2).v(0,u.ga7()))
n.a4()},
hL:function(a){var u=this
H.f(a,"$ix")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hJ:function(a){var u,t,s,r,q,p,o,n=this
a=H.t(H.f(a,"$ix"),"$ie1")
if(!H.C(n.cx))return
if(H.C(n.ch)){u=a.d.p(0,a.y)
u=new V.R(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.D(t)
if(u<t)return
n.ch=!1}if(H.C(n.e)){u=a.c
t=a.d.p(0,a.y)
u=n.an(new V.R(t.a,t.b).t(0,2).v(0,u.ga7()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.P()
s=n.y
if(typeof s!=="number")return H.D(s)
t.sT(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.P()
t=n.x
if(typeof t!=="number")return H.D(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=n.an(new V.R(s.a,s.b).t(0,2).v(0,u.ga7()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.D(p)
o=n.cy
if(typeof o!=="number")return H.D(o)
s.sa6(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.D(q)
s=n.db
if(typeof s!=="number")return H.D(s)
o.sa6(0,-p*q+s)
n.b.sT(0)
n.c.sT(0)
t=t.p(0,a.z)
n.dx=n.an(new V.R(t.a,t.b).t(0,2).v(0,u.ga7()))}n.a4()},
hH:function(a){var u,t,s,r=this
H.f(a,"$ix")
if(!H.C(r.cx))return
r.cx=!1
if(H.C(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.P()
s=r.y
if(typeof s!=="number")return H.D(s)
u.sT(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.P()
u=r.x
if(typeof u!=="number")return H.D(u)
s.sT(-t*10*u)
r.a4()}},
aP:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.N()
if(q<p){r.dy=p
u=b.y
r.c.ak(0,u)
r.b.ak(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aN(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.t(0,V.aN(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iah:1}
U.e9.prototype={
gn:function(){var u=this.r
return u==null?this.r=D.L():u},
L:function(a){var u=this.r
if(u!=null)u.D(a)},
aV:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.L():t
t=r.gfa()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.L():s).h(0,t)
return!0},
fb:function(a){var u,t,s,r,q=this
H.f(a,"$ix")
if(!J.Q(q.b,q.a.b.c))return
H.t(a,"$icA")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.t()
r=u+t*s
if(u!==r){q.d=r
u=new D.G("zoom",u,r,[P.z])
u.b=!0
q.L(u)}},
aP:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.aN(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iah:1}
M.de.prototype={
gn:function(){var u=this.r
return u==null?this.r=D.L():u},
V:function(a){var u
H.f(a,"$ix")
u=this.r
if(u!=null)u.D(a)},
aR:function(){return this.V(null)},
h1:function(a,b){var u,t,s,r,q,p,o,n=M.ax
H.j(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gY(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=b[q]
if(p!=null){o=p.gn()
o.toString
H.n(t,s)
if(o.a==null)o.sa3(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bz([n])
n.b=!0
this.V(n)},
h3:function(a,b){var u,t,s=M.ax
H.j(b,"$ih",[s],"$ah")
for(u=b.gU(b),t=this.gY();u.A();)u.gI(u).gn().M(0,t)
s=new D.bA([s])
s.b=!0
this.V(s)},
a9:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.as(u,u.length,[H.q(u,0)]);u.A();){t=u.d
if(t!=null)t.a9(a)}s.f=!1},
$ah:function(){return[M.ax]},
$aV:function(){return[M.ax]},
$iax:1}
M.dg.prototype={
gn:function(){var u=this.r
return u==null?this.r=D.L():u},
V:function(a){var u
H.f(a,"$ix")
u=this.r
if(u!=null)u.D(a)},
aR:function(){return this.V(null)},
sb6:function(a,b){var u,t,s=this
if(b==null)b=X.ko(null)
u=s.c
if(u!==b){if(u!=null)u.gn().M(0,s.gY())
t=s.c
s.c=b
b.gn().h(0,s.gY())
u=new D.G("target",t,s.c,[X.cM])
u.b=!0
s.V(u)}},
sb7:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gn().M(0,t.gY())
u=t.d
t.d=a
if(a!=null)a.gn().h(0,t.gY())
s=new D.G("technique",u,t.d,[O.bG])
s.b=!0
t.V(s)}},
a9:function(a){var u,t,s=this
a.cj(s.d)
s.c.a5(a)
u=s.b
u.toString
a.cy.bn(V.bD())
t=V.bD()
u.a
a.db.bn(t)
s.e.ak(0,a)
s.e.a9(a)
s.b.toString
a.cy.b5()
a.db.b5()
s.c.toString
a.ci()},
$iax:1}
M.dl.prototype={
V:function(a){var u
H.f(a,"$ix")
u=this.y
if(u!=null)u.D(a)},
aR:function(){return this.V(null)},
fn:function(a,b){var u,t,s,r,q,p,o,n=E.ap
H.j(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gY(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.by()
o.sa3(null)
o.saH(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sa3(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bz([n])
n.b=!0
this.V(n)},
fp:function(a,b){var u,t,s=E.ap
H.j(b,"$ih",[s],"$ah")
for(u=b.gU(b),t=this.gY();u.A();)u.gI(u).gn().M(0,t)
s=new D.bA([s])
s.b=!0
this.V(s)},
sdr:function(a){var u,t,s=this
if(a==null)a=X.lc(null)
u=s.b
if(u!==a){if(u!=null)u.gn().M(0,s.gY())
t=s.b
s.b=a
a.gn().h(0,s.gY())
u=new D.G("camera",t,s.b,[X.bT])
u.b=!0
s.V(u)}},
sb6:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gn().M(0,t.gY())
u=t.c
t.c=b
b.gn().h(0,t.gY())
s=new D.G("target",u,t.c,[X.cM])
s.b=!0
t.V(s)}},
sb7:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gn().M(0,t.gY())
u=t.d
t.d=a
if(a!=null)a.gn().h(0,t.gY())
s=new D.G("technique",u,t.d,[O.bG])
s.b=!0
t.V(s)}},
gn:function(){var u=this.y
return u==null?this.y=D.L():u},
a9:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=this
a.cj(j.d)
j.c.a5(a)
u=j.b
t=a.c
s=a.d
r=u.c
q=u.d
p=u.e
o=p-q
n=1/Math.tan(r*0.5)
m=V.aN(-n/(t/s),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
u.a
a.cy.bn(m)
t=$.ld
if(t==null){t=V.lf()
s=V.kB()
r=$.lw
t=V.l9(t,s,r==null?$.lw=new V.N(0,0,-1):r)
$.ld=t
l=t}else l=t
t=u.b
if(t!=null){k=t.aP(0,a,u)
if(k!=null)l=k.t(0,l)}a.db.bn(l)
u=j.d
if(u!=null)u.ak(0,a)
for(u=j.e.a,u=new J.as(u,u.length,[H.q(u,0)]);u.A();)u.d.ak(0,a)
for(u=j.e.a,u=new J.as(u,u.length,[H.q(u,0)]);u.A();)u.d.a9(a)
j.b.toString
a.cy.b5()
a.db.b5()
j.c.aN(a)
a.ci()},
seH:function(a,b){this.e=H.j(b,"$iV",[E.ap],"$aV")},
$iax:1}
M.ax.prototype={}
A.da.prototype={}
A.fd.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
i9:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dv:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ao.prototype={
gal:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
q:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.ao))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.dB.prototype={
ej:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.ak("")
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
A.o7(c0,u)
A.o9(c0,u)
A.o8(c0,u)
A.ob(c0,u)
A.oc(c0,u)
A.oa(c0,u)
A.od(c0,u)
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
b5.dS(0,s.charCodeAt(0)==0?s:s,A.o6(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.t(b5.y.S(0,"invViewMat"),"$iam")
if(t)b5.dy=H.t(b5.y.S(0,"objMat"),"$iam")
if(r)b5.fr=H.t(b5.y.S(0,"viewObjMat"),"$iam")
b5.fy=H.t(b5.y.S(0,"projViewObjMat"),"$iam")
if(c0.ry)b5.k1=H.t(b5.y.S(0,"txt2DMat"),"$icP")
if(c0.x1)b5.k2=H.t(b5.y.S(0,"txtCubeMat"),"$iam")
if(c0.x2)b5.k3=H.t(b5.y.S(0,"colorMat"),"$iam")
b5.seD(H.e([],[A.am]))
t=c0.y2
if(t>0){b5.k4=H.f(b5.y.S(0,"bendMatCount"),"$ial")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.u(P.y(b7+q+b8));(s&&C.a).h(s,H.t(m,"$iam"))}}if(c0.a.a)b5.r2=H.t(b5.y.S(0,"emissionClr"),"$iX")
if(c0.b.a)b5.x1=H.t(b5.y.S(0,"ambientClr"),"$iX")
if(c0.c.a)b5.y2=H.t(b5.y.S(0,"diffuseClr"),"$iX")
if(c0.d.a)b5.dC=H.t(b5.y.S(0,"invDiffuseClr"),"$iX")
t=c0.e.a
if(!t)s=!1
else s=!0
if(s){b5.dE=H.t(b5.y.S(0,"shininess"),"$iae")
if(t)b5.dD=H.t(b5.y.S(0,"specularClr"),"$iX")}if(c0.cy){b5.dF=H.t(b5.y.S(0,"envSampler"),"$ica")
if(c0.r.a)b5.dG=H.t(b5.y.S(0,"reflectClr"),"$iX")
t=c0.x.a
if(!t)s=!1
else s=!0
if(s){b5.dH=H.t(b5.y.S(0,"refraction"),"$iae")
if(t)b5.dI=H.t(b5.y.S(0,"refractClr"),"$iX")}}if(c0.y.a)b5.dJ=H.t(b5.y.S(0,"alpha"),"$iae")
t=P.l
s=[t,A.al]
b5.seP(new H.a_(s))
b5.ser(new H.a_([t,[P.b,A.c8]]))
b5.shb(new H.a_(s))
b5.shc(new H.a_([t,[P.b,A.c9]]))
b5.shz(new H.a_(s))
b5.ses(new H.a_([t,[P.b,A.cb]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.c8],l=0;l<t.length;t.length===s||(0,H.B)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.m(j)
h=H.e([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ah()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.u(P.y(b7+g+b8))
H.t(m,"$iX")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.u(P.y(b7+g+b8))
H.t(f,"$iX")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.u(P.y(b7+g+b8))
H.t(e,"$iX")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.u(P.y(b7+g+b8))
H.t(m,"$iX")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.u(P.y(b7+g+b8))
H.t(f,"$iX")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.u(P.y(b7+o+b8))
H.t(e,"$ibe")
a=e}else a=b6
C.a.h(h,new A.c8(b,c,d,m,f,a))}b5.c3.k(0,j,h)
q=b5.c2
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.u(P.y(b7+o+b8))
q.k(0,j,H.f(m,"$ial"))}for(t=c0.Q,s=t.length,r=[A.c9],l=0;l<t.length;t.length===s||(0,H.B)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.m(j)
h=H.e([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.u(P.y(b7+o+b8))
H.t(m,"$iX")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.u(P.y(b7+o+b8))
H.t(f,"$iX")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.u(P.y(b7+o+b8))
H.t(e,"$iX")
if(typeof j!=="number")return j.ah()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.u(P.y(b7+o+b8))
H.t(a0,"$icP")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.u(P.y(b7+o+b8))
H.t(a0,"$ica")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.u(P.y(b7+o+b8))
H.t(a0,"$ica")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.u(P.y(b7+o+b8))
H.t(a2,"$ic7")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.u(P.y(b7+o+b8))
H.t(a0,"$iae")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.u(P.y(b7+o+b8))
H.t(a2,"$iae")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.u(P.y(b7+o+b8))
H.t(a5,"$iae")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.c9(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.c5.k(0,j,h)
q=b5.c4
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.u(P.y(b7+o+b8))
q.k(0,j,H.f(m,"$ial"))}for(t=c0.ch,s=t.length,r=[A.cb],l=0;l<t.length;t.length===s||(0,H.B)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.m(j)
h=H.e([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.u(P.y(b7+o+b8))
H.t(m,"$iX")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.u(P.y(b7+o+b8))
H.t(f,"$iX")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.u(P.y(b7+o+b8))
H.t(e,"$iX")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.u(P.y(b7+o+b8))
H.t(a0,"$iX")
if(typeof j!=="number")return j.ah()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.u(P.y(b7+o+b8))
H.t(a2,"$iX")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.u(P.y(b7+o+b8))
H.t(a5,"$iX")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.u(P.y(b7+o+b8))
H.t(a9,"$iae")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.u(P.y(b7+o+b8))
H.t(b0,"$iae")
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
if(a2==null)H.u(P.y(b7+g+b8))
H.t(a2,"$ic7")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.u(P.y(b7+g+b8))
H.t(a2,"$iae")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.u(P.y(b7+g+b8))
H.t(a5,"$iae")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.u(P.y(b7+g+b8))
H.t(a2,"$iae")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.u(P.y(b7+g+b8))
H.t(a5,"$iae")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.u(P.y(b7+g+b8))
H.t(a9,"$iae")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.u(P.y(b7+g+b8))
H.t(a2,"$ibe")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.u(P.y(b7+o+b8))
H.t(a2,"$ibe")
a3=a2}else a3=b6
C.a.h(h,new A.cb(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.c7.k(0,j,h)
q=b5.c6
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.u(P.y(b7+o+b8))
q.k(0,j,H.f(m,"$ial"))}}},
hq:function(a,b){},
seD:function(a){this.r1=H.j(a,"$ib",[A.am],"$ab")},
seP:function(a){this.c2=H.j(a,"$iw",[P.l,A.al],"$aw")},
ser:function(a){this.c3=H.j(a,"$iw",[P.l,[P.b,A.c8]],"$aw")},
shb:function(a){this.c4=H.j(a,"$iw",[P.l,A.al],"$aw")},
shc:function(a){this.c5=H.j(a,"$iw",[P.l,[P.b,A.c9]],"$aw")},
shz:function(a){this.c6=H.j(a,"$iw",[P.l,A.al],"$aw")},
ses:function(a){this.c7=H.j(a,"$iw",[P.l,[P.b,A.cb]],"$aw")}}
A.aA.prototype={
i:function(a){return"dirLight"+H.m(this.a)}}
A.aC.prototype={
i:function(a){return"pointLight"+H.m(this.a)}}
A.aD.prototype={
i:function(a){return"spotLight"+H.m(this.a)}}
A.he.prototype={
i:function(a){return this.b_}}
A.c8.prototype={}
A.c9.prototype={}
A.cb.prototype={}
A.cI.prototype={
cE:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dS:function(a,b,c){var u,t,s,r=this
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
if(!H.C(H.lW(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.u(P.y("Failed to link shader: "+H.m(s)))}r.hu()
r.hw()},
a5:function(a){a.a.useProgram(this.r)
this.x.i9()},
cU:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.C(H.lW(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.y("Error compiling shader '"+H.m(s)+"': "+H.m(u)))}return s},
hu:function(){var u,t,s,r=this,q=H.e([],[A.da]),p=r.a,o=H.Z(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.D(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.da(p,t.name,s))}r.x=new A.fd(q)},
hw:function(){var u,t,s,r=this,q=H.e([],[A.e2]),p=r.a,o=H.Z(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.D(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.i4(t.type,t.size,t.name,s))}r.y=new A.ix(q)},
aF:function(a,b,c){var u=this.a
if(a===1)return new A.al(u,b,c)
else return A.ky(u,this.r,b,a,c)},
eK:function(a,b,c){var u=this.a
if(a===1)return new A.be(u,b,c)
else return A.ky(u,this.r,b,a,c)},
eL:function(a,b,c){var u=this.a
if(a===1)return new A.ca(u,b,c)
else return A.ky(u,this.r,b,a,c)},
bg:function(a,b){return new P.ek(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
i4:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aF(b,c,d)
case 5121:return u.aF(b,c,d)
case 5122:return u.aF(b,c,d)
case 5123:return u.aF(b,c,d)
case 5124:return u.aF(b,c,d)
case 5125:return u.aF(b,c,d)
case 5126:return new A.ae(u.a,c,d)
case 35664:return new A.ay(u.a,c,d)
case 35665:return new A.X(u.a,c,d)
case 35666:return new A.c7(u.a,c,d)
case 35667:return new A.iu(u.a,c,d)
case 35668:return new A.iv(u.a,c,d)
case 35669:return new A.iw(u.a,c,d)
case 35674:return new A.iy(u.a,c,d)
case 35675:return new A.cP(u.a,c,d)
case 35676:return new A.am(u.a,c,d)
case 35678:return u.eK(b,c,d)
case 35680:return u.eL(b,c,d)
case 35670:throw H.c(u.bg("BOOL",c))
case 35671:throw H.c(u.bg("BOOL_VEC2",c))
case 35672:throw H.c(u.bg("BOOL_VEC3",c))
case 35673:throw H.c(u.bg("BOOL_VEC4",c))
default:throw H.c(P.y("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.bv.prototype={
i:function(a){return this.b}}
A.dZ.prototype={
en:function(a,b,c){var u,t,s,r,q,p=this,o="Required uniform value, ",n=", was not defined or used in shader."
p.dS(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.nk(a,b))
p.z=p.x.j(0,"posAttr")
p.Q=H.t(p.y.S(0,"txtCount"),"$ial")
p.ch=H.t(p.y.S(0,"backClr"),"$ic7")
p.shN(H.e([],[A.be]))
p.seI(H.e([],[A.am]))
u=[A.ay]
p.shB(H.e([],u))
p.shC(H.e([],u))
p.seN(H.e([],u))
p.seO(H.e([],u))
p.seZ(H.e([],[A.al]))
for(t=0;t<a;++t){u=p.cx
s=p.y
r="txt"+t
q=s.j(0,r)
if(q==null)H.u(P.y(o+r+n));(u&&C.a).h(u,H.t(q,"$ibe"))
u=p.cy
s=p.y
r="clrMat"+t
q=s.j(0,r)
if(q==null)H.u(P.y(o+r+n));(u&&C.a).h(u,H.t(q,"$iam"))
u=p.db
s=p.y
r="srcLoc"+t
q=s.j(0,r)
if(q==null)H.u(P.y(o+r+n));(u&&C.a).h(u,H.t(q,"$iay"))
u=p.dx
s=p.y
r="srcSize"+t
q=s.j(0,r)
if(q==null)H.u(P.y(o+r+n));(u&&C.a).h(u,H.t(q,"$iay"))
u=p.dy
s=p.y
r="destLoc"+t
q=s.j(0,r)
if(q==null)H.u(P.y(o+r+n));(u&&C.a).h(u,H.t(q,"$iay"))
u=p.fr
s=p.y
r="destSize"+t
q=s.j(0,r)
if(q==null)H.u(P.y(o+r+n));(u&&C.a).h(u,H.t(q,"$iay"))
u=p.fx
s=p.y
r="flip"+t
q=s.j(0,r)
if(q==null)H.u(P.y(o+r+n));(u&&C.a).h(u,H.t(q,"$ial"))}},
shN:function(a){this.cx=H.j(a,"$ib",[A.be],"$ab")},
seI:function(a){this.cy=H.j(a,"$ib",[A.am],"$ab")},
shB:function(a){this.db=H.j(a,"$ib",[A.ay],"$ab")},
shC:function(a){this.dx=H.j(a,"$ib",[A.ay],"$ab")},
seN:function(a){this.dy=H.j(a,"$ib",[A.ay],"$ab")},
seO:function(a){this.fr=H.j(a,"$ib",[A.ay],"$ab")},
seZ:function(a){this.fx=H.j(a,"$ib",[A.al],"$ab")}}
A.e2.prototype={}
A.ix.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
S:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.y("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.R()},
R:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.B)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.al.prototype={
i:function(a){return"Uniform1i: "+H.m(this.c)}}
A.iu.prototype={
i:function(a){return"Uniform2i: "+H.m(this.c)}}
A.iv.prototype={
i:function(a){return"Uniform3i: "+H.m(this.c)}}
A.iw.prototype={
i:function(a){return"Uniform4i: "+H.m(this.c)}}
A.it.prototype={
i:function(a){return"Uniform1iv: "+H.m(this.c)},
shO:function(a){H.j(a,"$ib",[P.l],"$ab")}}
A.ae.prototype={
i:function(a){return"Uniform1f: "+H.m(this.c)}}
A.ay.prototype={
i:function(a){return"Uniform2f: "+H.m(this.c)}}
A.X.prototype={
i:function(a){return"Uniform3f: "+H.m(this.c)}}
A.c7.prototype={
ec:function(a){return C.c.cs(this.a,this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.m(this.c)}}
A.iy.prototype={
i:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.cP.prototype={
am:function(a){var u=new Float32Array(H.bK(H.j(a,"$ib",[P.z],"$ab")))
C.c.e7(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.am.prototype={
am:function(a){var u=new Float32Array(H.bK(H.j(a,"$ib",[P.z],"$ab")))
C.c.ct(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.be.prototype={
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.ca.prototype={
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.kg.prototype={
$1:function(a){return new V.a4(Math.cos(a),Math.sin(a),0)},
$S:41}
F.k_.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.kV(n.$1(o),m)
m=J.mv(J.kV(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.N(m.a,m.b,m.c)
u=m.v(0,Math.sqrt(m.B(m)))
n=$.lx
if(n==null){n=new V.N(1,0,0)
$.lx=n
t=n}else t=n
n=u.ay(!J.Q(u,t)?V.lz():t)
s=n.v(0,Math.sqrt(n.B(n)))
n=s.ay(u)
t=n.v(0,Math.sqrt(n.B(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.t(0,n*m)
m=s.t(0,q*m)
m=J.mu(l,new V.a4(n.a-m.a,n.b-m.b,n.c-m.c))
if(!J.Q(a.f,m)){a.f=H.f(m,"$ia4")
n=a.a
if(n!=null)n.a8()}},
$S:42}
F.a8.prototype={
aZ:function(){var u=this
if(!u.gdw()){C.a.M(u.a.a.d.b,u)
u.a.a.a8()}u.hh()
u.hi()
u.hj()},
hr:function(a){this.a=a
C.a.h(a.d.b,this)},
hs:function(a){this.b=a
C.a.h(a.d.c,this)},
ht:function(a){this.c=a
C.a.h(a.d.d,this)},
hh:function(){var u=this.a
if(u!=null){C.a.M(u.d.b,this)
this.a=null}},
hi:function(){var u=this.b
if(u!=null){C.a.M(u.d.c,this)
this.b=null}},
hj:function(){var u=this.c
if(u!=null){C.a.M(u.d.d,this)
this.c=null}},
gdw:function(){return this.a==null||this.b==null||this.c==null},
eC:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cR()
if(q!=null)s=s.m(0,q)
if(u!=null)s=s.m(0,u)
if(t!=null)s=s.m(0,t)
if(s.dU())return
return s.v(0,Math.sqrt(s.B(s)))},
eG:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.p(0,q)
r=new V.N(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.B(r)))
r=t.p(0,q)
r=new V.N(r.a,r.b,r.c)
r=s.ay(r.v(0,Math.sqrt(r.B(r))))
return r.v(0,Math.sqrt(r.B(r)))},
bX:function(){var u,t=this
if(t.d!=null)return!0
u=t.eC()
if(u==null){u=t.eG()
if(u==null)return!1}t.d=u
t.a.a.a8()
return!0},
eB:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cR()
if(q!=null)s=s.m(0,q)
if(u!=null)s=s.m(0,u)
if(t!=null)s=s.m(0,t)
if(s.dU())return
return s.v(0,Math.sqrt(s.B(s)))},
eF:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.M().a){l=d.p(0,g)
l=new V.N(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.B(l)))
if(s.a-t.a<0)q=q.P(0)}else{p=(l-u.b)/r
l=d.p(0,g).t(0,p).m(0,g).p(0,j)
l=new V.N(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.B(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.P(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.B(l)))
l=o.ay(q)
l=l.v(0,Math.sqrt(l.B(l))).ay(o)
q=l.v(0,Math.sqrt(l.B(l)))}return q},
bV:function(){var u,t=this
if(t.e!=null)return!0
u=t.eB()
if(u==null){u=t.eF()
if(u==null)return!1}t.e=u
t.a.a.a8()
return!0},
gi0:function(a){var u=this
if(J.Q(u.a,u.b))return!0
if(J.Q(u.b,u.c))return!0
if(J.Q(u.c,u.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
J:function(a){var u,t,s=this
if(s.gdw())return a+"disposed"
u=a+C.b.aB(J.b_(s.a.e),0)+", "+C.b.aB(J.b_(s.b.e),0)+", "+C.b.aB(J.b_(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
R:function(){return this.J("")}}
F.fK.prototype={}
F.i0.prototype={
b2:function(a,b,c){var u,t=b.a
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
F.h_.prototype={}
F.is.prototype={
b2:function(a,b,c){var u,t=b.a
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
F.c1.prototype={}
F.dR.prototype={
gn:function(){var u=this.e
return u==null?this.e=D.L():u},
ax:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ax()||!1
if(!t.a.ax())u=!1
s=t.e
if(s!=null)s.aC(0)
return u},
is:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.e(o.slice(0),[H.q(o,0)])
for(o=[F.aq];u.length!==0;){t=C.a.gig(u)
C.a.e0(u,0)
if(t!=null){s=H.e([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.b2(0,t,q)){C.a.h(s,q)
C.a.e0(u,r)}}if(s.length>1)b.ir(s)}}p.a.C()
p.c.cn()
p.d.cn()
p.b.iJ()
p.c.co(new F.is())
p.d.co(new F.i0())
o=p.e
if(o!=null)o.aC(0)},
dq:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aY()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bt().a)!==0)++s
if((t&$.bs().a)!==0)++s
if((t&$.bO().a)!==0)++s
if((t&$.bP().a)!==0)++s
if((t&$.d6().a)!==0)++s
if((t&$.d7().a)!==0)++s
if((t&$.cm().a)!==0)++s
if((t&$.br().a)!==0)++s
r=a3.gcA(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.z
p=H.e(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.e(u,[Z.dc])
for(n=0,m=0;m<s;++m){l=a3.hV(m)
k=l.gcA(l)
C.a.k(o,m,new Z.dc(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.d(u,j)
i=u[j].ip(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.j(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.bK(p)),35044)
u.bindBuffer(a0,null)
e=new Z.cp(new Z.ea(a0,f),o,a3)
e.sf0(H.e([],[Z.c_]))
a.b.b
if(a.c.b.length!==0){t=P.l
d=H.e([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.C()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.C()
C.a.h(d,c.e)}b=Z.lA(u,34963,H.j(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.c_(1,d.length,b))}if(a.d.b.length!==0){t=P.l
d=H.e([],[t])
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
C.a.h(d,c.e)}b=Z.lA(u,34963,H.j(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.c_(4,d.length,b))}return e},
i:function(a){var u=this,t=H.e([],[P.i])
if(u.a.c.length!==0){C.a.h(t,"Vertices:")
C.a.h(t,u.a.J("   "))}u.b.b
if(u.c.b.length!==0){C.a.h(t,"Lines:")
C.a.h(t,u.c.J("   "))}if(u.d.b.length!==0){C.a.h(t,"Faces:")
C.a.h(t,u.d.J("   "))}return C.a.u(t,"\n")},
a8:function(){var u=this.e
if(u!=null)u.D(null)},
$ioV:1}
F.hV.prototype={
hS:function(a){var u,t,s,r,q,p
H.j(a,"$ib",[F.aq],"$ab")
u=H.e([],[F.a8])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.dn(t,q,p))}return u},
hT:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.j(c,"$ib",[F.aq],"$ab")
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
C.a.h(u,F.dn(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dn(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dn(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dn(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
co:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b2(0,p,n)){p.aZ()
break}}}}},
cn:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.gi0(s)
if(t)s.aZ()}},
ax:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.B)(u),++r)if(!u[r].bX())s=!1
return s},
bW:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.B)(u),++r)if(!u[r].bV())s=!1
return s},
i:function(a){return this.R()},
J:function(a){var u,t,s,r=H.e([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].J(a))
return C.a.u(r,"\n")},
R:function(){return this.J("")},
seU:function(a){this.b=H.j(a,"$ib",[F.a8],"$ab")}}
F.hW.prototype={
gl:function(a){return this.b.length},
co:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b2(0,p,n)){p.aZ()
break}}}}},
cn:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.Q(s.a,s.b)
if(t)s.aZ()}},
i:function(a){return this.R()},
J:function(a){var u,t,s=H.e([],[P.i]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
C.a.h(s,t[u].J(a+(""+u+". ")))}return C.a.u(s,"\n")},
R:function(){return this.J("")},
sf2:function(a){this.b=H.j(a,"$ib",[F.bC],"$ab")}}
F.hX.prototype={
gl:function(a){return 0},
iJ:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.d(t,u)
t=t[u].gjp()
t=t.gjm(t)
if(t.gl(t).ai(0,1)){t=this.b
return H.d(t,u)
t[u].aZ()}}},
i:function(a){return this.R()},
J:function(a){var u,t,s=H.e([],[P.i])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.d(u,t)
C.a.h(s,u[t].J(a))}return C.a.u(s,"\n")},
R:function(){return this.J("")},
sbM:function(a){this.b=H.j(a,"$ib",[F.c1],"$ab")}}
F.aq.prototype={
du:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.iP(u.cx,r,o,t,s,q,p,a,n)},
ip:function(a){var u,t,s=this
if(a.q(0,$.aY())){u=s.f
t=[P.z]
if(u==null)return H.e([0,0,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.q(0,$.bt())){u=s.r
t=[P.z]
if(u==null)return H.e([0,1,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.q(0,$.bs())){u=s.x
t=[P.z]
if(u==null)return H.e([0,0,1],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.q(0,$.bO())){u=s.y
t=[P.z]
if(u==null)return H.e([0,0],t)
else return H.e([u.a,u.b],t)}else if(a.q(0,$.bP())){u=s.z
t=[P.z]
if(u==null)return H.e([0,0,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.q(0,$.d6())){u=s.Q
t=[P.z]
if(u==null)return H.e([1,1,1],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.q(0,$.d7())){u=s.Q
t=[P.z]
if(u==null)return H.e([1,1,1,1],t)
else return H.e([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.cm()))return H.e([s.ch],[P.z])
else if(a.q(0,$.br())){u=s.cx
t=[P.z]
if(u==null)return H.e([-1,-1,-1,-1],t)
else return H.e([u.a,u.b,u.c,u.d],t)}else return H.e([],[P.z])},
bX:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cR()
t.d.G(0,new F.j_(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.a8()
s=t.a.e
if(s!=null)s.aC(0)}return!0},
bV:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cR()
t.d.G(0,new F.iZ(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.a8()
s=t.a.e
if(s!=null)s.aC(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
J:function(a){var u,t,s=this,r="-",q=H.e([],[P.i])
C.a.h(q,C.b.aB(J.b_(s.e),0))
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
C.a.h(q,V.T(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.u(q,", ")
return a+"{"+t+"}"},
R:function(){return this.J("")}}
F.j_.prototype={
$1:function(a){var u,t
H.f(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.m(0,u)}},
$S:5}
F.iZ.prototype={
$1:function(a){var u,t
H.f(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.m(0,u)}},
$S:5}
F.iQ.prototype={
C:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.y("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a8()
return!0},
bh:function(a,b,c,d,e,f){var u=F.iP(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gl:function(a){return this.c.length},
ax:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)u[s].bX()
return!0},
bW:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)u[s].bV()
return!0},
i_:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.Q(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.D(null)}}}}return!0},
i:function(a){return this.R()},
J:function(a){var u,t,s,r
this.C()
u=H.e([],[P.i])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].J(a))
return C.a.u(u,"\n")},
R:function(){return this.J("")},
shP:function(a){this.c=H.j(a,"$ib",[F.aq],"$ab")}}
F.iR.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
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
G:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a8]})
C.a.G(u.b,b)
C.a.G(u.c,new F.iS(u,b))
C.a.G(u.d,new F.iT(u,b))},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.e([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].J(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].J(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].J(""))
return C.a.u(r,"\n")},
seV:function(a){this.b=H.j(a,"$ib",[F.a8],"$ab")},
seW:function(a){this.c=H.j(a,"$ib",[F.a8],"$ab")},
seX:function(a){this.d=H.j(a,"$ib",[F.a8],"$ab")}}
F.iS.prototype={
$1:function(a){H.f(a,"$ia8")
if(!J.Q(a.a,this.a))this.b.$1(a)},
$S:5}
F.iT.prototype={
$1:function(a){var u
H.f(a,"$ia8")
u=this.a
if(!J.Q(a.a,u)&&!J.Q(a.b,u))this.b.$1(a)},
$S:5}
F.iU.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.d(t,u)
return t[u]}else{if(b<0)return H.d(t,b)
return t[b]}},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.e([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].J(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].J(""))
return C.a.u(r,"\n")},
sf3:function(a){this.b=H.j(a,"$ib",[F.bC],"$ab")},
sf4:function(a){this.c=H.j(a,"$ib",[F.bC],"$ab")}}
F.iW.prototype={}
F.iV.prototype={
b2:function(a,b,c){return J.Q(b.f,c.f)}}
F.iX.prototype={}
F.hB.prototype={
ir:function(a){var u,t,s,r,q,p,o,n,m
H.j(a,"$ib",[F.aq],"$ab")
u=V.cR()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.N(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.v(0,Math.sqrt(u.B(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.B)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.v(0,Math.sqrt(o*o+n*n+m*m))}if(!J.Q(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.D(null)}}}return}}
F.iY.prototype={
gl:function(a){return 0},
i:function(a){return this.R()},
R:function(){var u,t,s=H.e([],[P.i])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.d(u,t)
C.a.h(s,u[t].J(""))}return C.a.u(s,"\n")},
sbM:function(a){this.b=H.j(a,"$ib",[F.c1],"$ab")}}
O.dA.prototype={
gn:function(){var u=this.fr
return u==null?this.fr=D.L():u},
O:function(a){var u
H.f(a,"$ix")
u=this.fr
if(u!=null)u.D(a)},
as:function(){return this.O(null)},
d8:function(a){H.f(a,"$ix")
this.a=null
this.O(a)},
ho:function(){return this.d8(null)},
fh:function(a,b){var u=V.ag
H.j(b,"$ih",[u],"$ah")
u=new D.bz([u])
u.b=!0
this.O(u)},
fj:function(a,b){var u=V.ag
H.j(b,"$ih",[u],"$ah")
u=new D.bA([u])
u.b=!0
this.O(u)},
cR:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.l,h=new H.a_([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=h.j(0,0)
h.k(0,0,r==null?1:r)}q=H.e([],[A.aA])
h.G(0,new O.hi(j,q))
C.a.bu(q,new O.hj())
p=new H.a_([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){o=u[s]
r=o.gaY()
n=p.j(0,o.gaY())
p.k(0,r,n==null?1:n)}m=H.e([],[A.aC])
p.G(0,new O.hk(j,m))
C.a.bu(m,new O.hl())
l=new H.a_([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.B)(i),++s){o=i[s]
t=o.gaY()
r=l.j(0,o.gaY())
l.k(0,t,r==null?1:r)}k=H.e([],[A.aD])
l.G(0,new O.hm(j,k))
C.a.bu(k,new O.hn())
i=C.d.a0(j.e.a.length+3,4)
j.dy.e
return A.mY(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
eA:function(a,b){H.j(a,"$ib",[T.c6],"$ab")},
ak:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.as(u,u.length,[H.q(u,0)]);u.A();){t=u.d
t.toString
s=$.iO
if(s==null)s=$.iO=new V.N(0,0,1)
t.a=s
r=$.iN
t.d=r==null?$.iN=new V.N(0,1,0):r
r=$.iM
t.e=r==null?$.iM=new V.N(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bp(s)
r=s.a
p=s.b
o=s.c
t.a=s.v(0,Math.sqrt(r*r+p*p+o*o))
o=q.bp(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.v(0,Math.sqrt(p*p+r*r+s*s))
s=q.bp(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.v(0,Math.sqrt(r*r+p*p+o*o))}}}},
e1:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cR()
u=H.f(b4.fr.j(0,b3.b_),"$idB")
if(u==null){u=A.mX(b3,b4.a)
b4.dl(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.dB
b3=b5.e
if(!(b3 instanceof Z.cp))b3=b5.e=null
if(b3==null||!b3.d.q(0,s)){b3=t.k3
if(b3)b5.d.ax()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.bW()
q.a.bW()
q=q.e
if(q!=null)q.aC(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.i_()
p=p.e
if(p!=null)p.aC(0)}n=b5.d.dq(new Z.eb(b4.a),s)
n.az($.aY()).e=b2.a.Q.c
if(b3)n.az($.bt()).e=b2.a.cx.c
if(r)n.az($.bs()).e=b2.a.ch.c
if(t.r1)n.az($.bO()).e=b2.a.cy.c
if(q)n.az($.bP()).e=b2.a.db.c
if(t.rx)n.az($.br()).e=b2.a.dx.c
b5.e=n}b3=T.c6
m=H.e([],[b3])
b2.a.a5(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.ga1(q)
r=r.dy
r.toString
r.am(q.aa(0,!0))}if(t.fr){r=b2.a
q=b4.cx
if(q==null){q=b4.db
q=q.ga1(q)
p=b4.dx
p=b4.cx=q.t(0,p.ga1(p))
q=p}r=r.fr
r.toString
r.am(q.aa(0,!0))}r=b2.a
q=b4.ch
if(q==null){q=b4.giI()
p=b4.dx
p=b4.ch=q.t(0,p.ga1(p))
q=p}r=r.fy
r.toString
r.am(q.aa(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.am(C.j.aa(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.am(C.j.aa(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.am(C.j.aa(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.c.aO(r.a,r.d,l)
for(r=[P.z],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.d(p,k)
p=p[k]
q.toString
H.f(p,"$iag")
q=q.r1
if(k>=q.length)return H.d(q,k)
q=q[k]
j=new Float32Array(H.bK(H.j(p.aa(0,!0),"$ib",r,"$ab")))
C.c.ct(q.a,q.d,!1,j)}}if(t.a.a){r=b2.a
q=b2.f.f
r=r.r2
C.c.X(r.a,r.d,q.a,q.b,q.c)}if(t.id){if(t.b.a){r=b2.a
q=b2.r.f
r=r.x1
C.c.X(r.a,r.d,q.a,q.b,q.c)}if(t.c.a){r=b2.a
q=b2.x.f
r=r.y2
C.c.X(r.a,r.d,q.a,q.b,q.c)}if(t.d.a){r=b2.a
q=b2.y.f
r=r.dC
C.c.X(r.a,r.d,q.a,q.b,q.c)}r=t.e.a
if(!r)q=!1
else q=!0
if(q){q=b2.a
p=b2.z.ch
q=q.dE
C.c.a2(q.a,q.d,p)}if(r){r=b2.a
q=b2.z.f
r=r.dD
C.c.X(r.a,r.d,q.a,q.b,q.c)}r=t.z
if(r.length>0){q=b4.db
i=q.ga1(q)
q=P.l
h=new H.a_([q,q])
for(q=b2.dx.e,p=q.length,g=0;g<q.length;q.length===p||(0,H.B)(q),++g){f=q[g]
e=h.j(0,0)
if(e==null)e=0
h.k(0,0,e+1)
d=J.d8(b2.a.c3.j(0,0),e)
o=i.bp(f.a)
c=o.a
b=o.b
a=o.c
a=o.v(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
o=a.b
a=a.c
C.c.X(b.a,b.d,c,o,a)
a=f.c
o=d.f
C.c.X(o.a,o.d,a.a,a.b,a.c)}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.B)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.c2.j(0,p)
C.c.aO(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.ga1(q)
q=P.l
a0=new H.a_([q,q])
for(q=b2.dx.f,p=q.length,o=[b3],c=[P.z],g=0;g<q.length;q.length===p||(0,H.B)(q),++g){f=q[g]
a1=f.gaY()
e=a0.j(0,a1)
if(e==null)e=0
a0.k(0,a1,e+1)
d=J.d8(b2.a.c5.j(0,a1),e)
a2=i.t(0,f.ga1(f))
b=f.ga1(f)
a=$.cF
b=b.cr(a==null?$.cF=new V.a4(0,0,0):a)
a=d.b
C.c.X(a.a,a.d,b.a,b.b,b.c)
b=$.cF
b=a2.cr(b==null?$.cF=new V.a4(0,0,0):b)
a=d.c
C.c.X(a.a,a.d,b.a,b.b,b.c)
b=f.gaX(f)
a=d.e
C.c.X(a.a,a.d,b.a,b.b,b.c)
f.gaf()
b=a2.dT(0)
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
j=new Float32Array(H.bK(H.j(new V.dD(a,a3,a4,a5,a6,a7,a8,a9,b).aa(0,!0),"$ib",c,"$ab")))
C.c.e7(b0.a,b0.d,!1,j)
f.gaf()
b=f.gaf()
H.j(m,"$ib",o,"$ab")
if(!C.a.ao(m,b)){b.sb0(0,m.length)
C.a.h(m,b)}b=f.gaf()
a=b.gb1(b)
if(a){a=d.f
a.toString
a3=b.gb1(b)
if(!a3)a.a.uniform1i(a.d,0)
else{b=b.gb0(b)
a.a.uniform1i(a.d,b)}}f.gaQ()
b=f.ged()
a=d.x
a.toString
a3=b.gc0(b)
a4=b.gc1(b)
a5=b.gi8()
b=b.gi7()
C.c.cs(a.a,a.d,a3,a4,a5,b)
b=f.gaQ()
if(!C.a.ao(m,b)){b.sb0(0,m.length)
C.a.h(m,b)}b=f.gaQ()
a=b.gb1(b)
if(a){a=d.r
a.toString
a3=b.gb1(b)
if(!a3)a.a.uniform1i(a.d,0)
else{b=b.gb0(b)
a.a.uniform1i(a.d,b)}}if(f.gia()){b=f.ghW()
a=d.y
C.c.a2(a.a,a.d,b)
b=f.ghX()
a=d.z
C.c.a2(a.a,a.d,b)
b=f.ghY()
a=d.Q
C.c.a2(a.a,a.d,b)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.B)(r),++g){p=r[g].a
l=a0.j(0,p)
if(l==null)l=0
p=b2.a.c4.j(0,p)
C.c.aO(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.ga1(q)
q=P.l
b1=new H.a_([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.B)(q),++g){f=q[g]
a1=f.gaY()
e=b1.j(0,a1)
if(e==null)e=0
b1.k(0,a1,e+1)
d=J.d8(b2.a.c7.j(0,a1),e)
o=f.giH(f)
c=d.b
C.c.X(c.a,c.d,o.a,o.b,o.c)
o=f.gj3(f).jl()
c=d.c
C.c.X(c.a,c.d,o.a,o.b,o.c)
o=i.cr(f.giH(f))
c=d.d
C.c.X(c.a,c.d,o.a,o.b,o.c)
o=f.gaX(f)
c=d.e
C.c.X(c.a,c.d,o.a,o.b,o.c)
f.gaf()
o=f.gcu()
c=d.f
C.c.X(c.a,c.d,o.a,o.b,o.c)
o=f.gcp(f)
c=d.r
C.c.X(c.a,c.d,o.a,o.b,o.c)
o=f.gjn()
c=d.x
C.c.a2(c.a,c.d,o)
o=f.gjo()
c=d.y
C.c.a2(c.a,c.d,o)
f.gaf()
o=f.gaf()
H.j(m,"$ib",b3,"$ab")
if(!C.a.ao(m,o)){o.sb0(0,m.length)
C.a.h(m,o)}o=f.gaf()
c=o.gb1(o)
if(c){c=d.dx
c.toString
b=o.d
if(!b)c.a.uniform1i(c.d,0)
else{o=o.a
c.a.uniform1i(c.d,o)}}f.gaQ()
o=f.ged()
c=d.z
c.toString
b=o.gc0(o)
a=o.gc1(o)
a3=o.gi8()
o=o.gi7()
C.c.cs(c.a,c.d,b,a,a3,o)
o=f.gaQ()
if(!C.a.ao(m,o)){o.sb0(0,m.length)
C.a.h(m,o)}o=f.gaQ()
c=o.gb1(o)
if(c){c=d.dy
c.toString
b=o.d
if(!b)c.a.uniform1i(c.d,0)
else{o=o.a
c.a.uniform1i(c.d,o)}}if(f.gj4()){o=f.gj2()
c=d.Q
C.c.a2(c.a,c.d,o)
o=f.gj1()
c=d.ch
C.c.a2(c.a,c.d,o)}if(f.gia()){o=f.ghW()
c=d.cx
C.c.a2(c.a,c.d,o)
o=f.ghX()
c=d.cy
C.c.a2(c.a,c.d,o)
o=f.ghY()
c=d.db
C.c.a2(c.a,c.d,o)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.B)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.c6.j(0,q)
C.c.aO(q.a,q.d,l)}}}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.ga1(r).dT(0)}b3=b3.id
b3.toString
b3.am(r.aa(0,!0))}if(t.cy){b2.eA(m,b2.ch)
b3=b2.a
r=b2.ch
b3.hq(b3.dF,r)
if(t.r.a){b3=b2.a
r=b2.cx.f
b3=b3.dG
C.c.X(b3.a,b3.d,r.a,r.b,r.c)}b3=t.x.a
if(!b3)r=!1
else r=!0
if(r){r=b2.a
q=b2.cy.ch
r=r.dH
C.c.a2(r.a,r.d,q)}if(b3){b3=b2.a
r=b2.cy.f
b3=b3.dI
C.c.X(b3.a,b3.d,r.a,r.b,r.c)}}b3=t.y.a
r=!b3
if(r)q=!1
else q=!0
if(q){if(b3){b3=b2.a
q=b2.db.f
b3=b3.dJ
C.c.a2(b3.a,b3.d,q)}b3=b4.a
b3.enable(3042)
b3.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].a5(b4)
b3=b5.e
b3.a5(b4)
b3.a9(b4)
b3.aN(b4)
if(r)b3=!1
else b3=!0
if(b3)b4.a.disable(3042)
for(k=0;k<m.length;++k)m[k].aN(b4)
b3=b2.a
b3.toString
b4.a.useProgram(null)
b3.x.dv()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cR().b_},
seE:function(a){this.e=H.j(a,"$iV",[V.ag],"$aV")}}
O.hi.prototype={
$2:function(a,b){H.Z(a)
H.Z(b)
if(typeof b!=="number")return b.m()
return C.a.h(this.b,new A.aA(a,C.d.a0(b+3,4)*4))},
$S:10}
O.hj.prototype={
$2:function(a,b){H.f(a,"$iaA")
H.f(b,"$iaA")
return J.kj(a.a,b.a)},
$S:46}
O.hk.prototype={
$2:function(a,b){H.Z(a)
H.Z(b)
if(typeof b!=="number")return b.m()
return C.a.h(this.b,new A.aC(a,C.d.a0(b+3,4)*4))},
$S:10}
O.hl.prototype={
$2:function(a,b){H.f(a,"$iaC")
H.f(b,"$iaC")
return J.kj(a.a,b.a)},
$S:47}
O.hm.prototype={
$2:function(a,b){H.Z(a)
H.Z(b)
if(typeof b!=="number")return b.m()
return C.a.h(this.b,new A.aD(a,C.d.a0(b+3,4)*4))},
$S:10}
O.hn.prototype={
$2:function(a,b){H.f(a,"$iaD")
H.f(b,"$iaD")
return J.kj(a.a,b.a)},
$S:48}
O.hc.prototype={
av:function(){var u,t=this
t.cC()
u=t.f
if(!(Math.abs(u-1)<$.M().a)){t.f=1
u=new D.G(t.b,u,1,[P.z])
u.b=!0
t.a.O(u)}}}
O.dC.prototype={
av:function(){},
dc:function(a){var u,t,s=this
if(!s.c.q(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.av()
u=s.a
u.a=null
u.O(null)}}}
O.hd.prototype={}
O.b8.prototype={
da:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.G(s.b+".color",u,a,[V.a0])
t.b=!0
s.a.O(t)}},
av:function(){this.cC()
this.da(new V.a0(1,1,1))},
saX:function(a,b){this.dc(new A.ao(!0,!1,!1))
this.da(b)}}
O.hf.prototype={}
O.hg.prototype={
av:function(){var u,t=this
t.cD()
u=t.ch
if(!(Math.abs(u-1)<$.M().a)){t.ch=1
u=new D.G(t.b+".refraction",u,1,[P.z])
u.b=!0
t.a.O(u)}}}
O.hh.prototype={
dd:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.M().a)){u.ch=a
t=new D.G(u.b+".shininess",t,a,[P.z])
t.b=!0
u.a.O(t)}},
av:function(){this.cD()
this.dd(100)}}
O.bG.prototype={}
O.dY.prototype={
gn:function(){var u=this.e
return u==null?this.e=D.L():u},
O:function(a){var u
H.f(a,"$ix")
u=this.e
if(u!=null)u.D(a)},
as:function(){return this.O(null)},
fA:function(a,b){var u,t,s,r,q,p,o
H.j(b,"$ih",[O.aU],"$ah")
for(u=b.length,t=this.gar(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=b[q]
if(p!=null){o=p.f
if(o==null){o=new D.by()
o.sa3(null)
o.saH(null)
o.c=null
o.d=0
p.f=o}H.n(t,s)
if(o.a==null)o.sa3(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}this.as()},
fC:function(a,b){var u,t
H.j(b,"$ih",[O.aU],"$ah")
for(u=b.gU(b),t=this.gar();u.A();)u.gI(u).gn().M(0,t)
this.as()},
saW:function(a){var u=this.f
if(u!==a){this.f=a
u=new D.G("blend",u,a,[A.bv])
u.b=!0
this.O(u)}},
f1:function(a){a=C.d.a0(a+3,4)*4
if(a<=0)return 4
return a},
e1:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.f1(h.c.a.length)
if(g!==h.d||h.f!=h.r){h.d=g
h.r=h.f
h.b=null}u=h.b
if(u==null){u=h.f
t="TextureLayout_"+g+"_"+C.d.i(u.a)
s=H.f(a.fr.j(0,t),"$idZ")
if(s==null){s=A.nj(g,u,a.a)
a.dl(s)}h.b=s
u=s}if(b.e==null){u=b.d.dq(new Z.eb(a.a),$.aY())
t=u.az($.aY())
r=h.b
t.e=r.z.c
b.e=u
u=r}u.a5(a)
u=T.c6
q=H.e([],[u])
for(t=[P.z],u=[u],p=0,o=0;r=h.c.a,o<r.length;++o){n=r[o]
if(n!=null&&n.a!=null){r=n.a
H.j(q,"$ib",u,"$ab")
if(r!=null)if(!C.a.ao(q,r)){r.a=q.length
C.a.h(q,r)}r=h.b
m=n.a
r=r.cx
if(p>=r.length)return H.d(r,p)
r=r[p]
l=m==null||!m.d
k=r.a
r=r.d
if(l)k.uniform1i(r,0)
else k.uniform1i(r,m.a)
r=h.b
m=n.b
r=r.cy
if(p>=r.length)return H.d(r,p)
r=r[p]
if(m==null){m=$.ho
if(m==null){m=new V.ag(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.ho=m}}j=new Float32Array(H.bK(H.j(m.aa(0,!0),"$ib",t,"$ab")))
C.c.ct(r.a,r.d,!1,j)
r=h.b
i=n.c
r.toString
if(i==null){m=$.cH
if(m==null){m=V.dN(0,0,1,1)
$.cH=m
i=m}else i=m}m=r.db
if(p>=m.length)return H.d(m,p)
m=m[p]
C.c.bq(m.a,m.d,i.a,i.b)
r=r.dx
if(p>=r.length)return H.d(r,p)
r=r[p]
C.c.bq(r.a,r.d,i.c,i.d)
r=h.b
i=n.d
r.toString
if(i==null){m=$.cH
if(m==null){m=V.dN(0,0,1,1)
$.cH=m
i=m}else i=m}m=r.dy
if(p>=m.length)return H.d(m,p)
m=m[p]
C.c.bq(m.a,m.d,i.a,i.b)
r=r.fr
if(p>=r.length)return H.d(r,p)
r=r[p]
C.c.bq(r.a,r.d,i.c,i.d)
r=h.b
m=n.e
r=r.fx
if(p>=r.length)return H.d(r,p)
r=r[p]
m=H.C(m)?1:0
C.c.aO(r.a,r.d,m);++p}}u=h.b.Q
C.c.aO(u.a,u.d,p)
u=h.b
t=h.a
u.ch.ec(t)
for(u=a.a,o=0;o<q.length;++o){t=q[o]
if(!t.c&&t.d){t.c=!0
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}t=b.e
if(t instanceof Z.cp){t.a5(a)
t.a9(a)
t.aN(a)}else b.e=null
t=h.b
t.toString
u.useProgram(null)
t.x.dv()
for(o=0;o<q.length;++o){t=q[o]
if(t.c){t.c=!1
u.activeTexture(33984+t.a)
u.bindTexture(3553,null)}}},
seS:function(a){this.c=H.j(a,"$iV",[O.aU],"$aV")}}
O.aU.prototype={
gn:function(){var u=this.f
return u==null?this.f=D.L():u},
O:function(a){var u
H.f(a,"$ix")
u=this.f
if(u!=null)u.D(a)},
as:function(){return this.O(null)},
saf:function(a){var u,t=this,s=t.a
if(s!=a){if(s!=null)s.gn().M(0,t.gar())
u=t.a
t.a=a
if(a!=null)a.gn().h(0,t.gar())
s=new D.G("texture",u,t.a,[T.dX])
s.b=!0
t.O(s)}},
sdt:function(a){var u,t,s=this
if(a==null)a=V.bD()
if(!J.Q(s.b,a)){u=s.b
s.b=a
t=new D.G("colorMatrix",u,a,[V.ag])
t.b=!0
s.O(t)}}}
T.c6.prototype={}
T.dX.prototype={}
T.ig.prototype={
gn:function(){var u=this.y
return u==null?this.y=D.L():u}}
V.f8.prototype={
aL:function(a,b){return!0},
i:function(a){return"all"},
$ibk:1}
V.bk.prototype={}
V.dz.prototype={
aL:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)if(u[s].aL(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.B)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sau:function(a){this.a=H.j(a,"$ib",[V.bk],"$ab")},
$ibk:1}
V.bm.prototype={
aL:function(a,b){return!this.eh(0,b)},
i:function(a){return"!["+this.cB(0)+"]"}}
V.hU.prototype={
el:function(a){var u,t
if(a.a.length<=0)throw H.c(P.y("May not create a SetMatcher with zero characters."))
u=new H.a_([P.l,P.a7])
for(t=new H.dx(a,a.gl(a),[H.az(a,"v",0)]);t.A();)u.k(0,t.d,!0)
this.shp(u)},
aL:function(a,b){return this.a.bi(0,b)},
i:function(a){var u=this.a
return P.cL(u.gap(u),0,null)},
shp:function(a){this.a=H.j(a,"$iw",[P.l,P.a7],"$aw")},
$ibk:1}
V.cJ.prototype={
u:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cO(this.a.K(0,b))
r.sau(H.e([],[V.bk]))
r.c=!1
C.a.h(this.c,r)
return r},
ie:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
if(r.aL(0,a))return r}return},
i:function(a){return this.b},
shM:function(a){this.c=H.j(a,"$ib",[V.cO],"$ab")}}
V.e0.prototype={
i:function(a){var u=H.m9(this.b,"\n","\\n"),t=H.m9(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cN.prototype={
i:function(a){return this.b},
shk:function(a){var u=P.i
this.c=H.j(a,"$iw",[u,u],"$aw")}}
V.ij.prototype={
K:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cJ(this,b)
u.shM(H.e([],[V.cO]))
u.d=null
this.a.k(0,b,u)}return u},
b9:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cN(a)
u=P.i
t.shk(new H.a_([u,u]))
this.b.k(0,a,t)}return t},
iV:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.e([],[V.e0]),k=this.c,j=[P.l],i=H.e([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.E(a,s)
q=k.ie(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cL(i,0,m)
throw H.c(P.y("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.e([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cL(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.e0(n==null?o.b:n,p,s)}++s}}},
shD:function(a){this.a=H.j(a,"$iw",[P.i,V.cJ],"$aw")},
shF:function(a){this.b=H.j(a,"$iw",[P.i,V.cN],"$aw")}}
V.cO.prototype={
i:function(a){return this.b.b+": "+this.cB(0)}}
X.fi.prototype={
gn:function(){var u=this.fr
return u==null?this.fr=D.L():u},
a_:function(a){var u=this.fr
if(u!=null)u.D(a)},
sag:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.G("width",u,b,[P.l])
u.b=!0
t.a_(u)}},
sad:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.G("height",u,b,[P.l])
u.b=!0
t.a_(u)}},
a5:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=3553,f=36161,e=36160
if(i.f){u=a.a
t=u.drawingBufferWidth
s=i.r
if(typeof t!=="number")return t.t()
i.sag(0,C.d.Z(t*s))
u=u.drawingBufferHeight
s=i.x
if(typeof u!=="number")return u.t()
i.sad(0,C.d.Z(u*s))}if(i.y==null){u=a.a
t=i.ch
s=i.a
r=i.b
q=H.Z(u.getParameter(3379))
p=V.kR(s)
o=V.kR(r)
q=V.kR(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(g,n)
u.texParameteri(g,10242,33071)
u.texParameteri(g,10243,33071)
u.texParameteri(g,10241,9729)
u.texParameteri(g,10240,9729)
C.c.iQ(u,g,0,6408,p,o,0,6408,5121,h)
u.bindTexture(g,h)
m=T.ll(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.dA()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.dA()
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
a.c=C.e.Z(s*i.a)
r=t.d
a.d=C.e.Z(r*i.b)
l=t.a
k=i.c
j=C.e.Z(l*k)
t=t.b
l=i.d
u.viewport(j,C.e.Z(t*l),C.e.Z(s*k),C.e.Z(r*l))
u.clearDepth(i.db)
t=i.cx
u.clearColor(t.a,t.b,t.c,t.d)
u.clear(16640)},
aN:function(a){a.a.bindFramebuffer(36160,null)}}
X.bT.prototype={$ic0:1}
X.fR.prototype={
gn:function(){var u=this.x
return u==null?this.x=D.L():u},
a5:function(a){var u,t,s,r,q,p,o=a.a
o.bindFramebuffer(36160,null)
o.enable(2884)
o.enable(2929)
o.depthFunc(513)
u=o.drawingBufferWidth
t=o.drawingBufferHeight
s=this.r
r=s.a
if(typeof u!=="number")return H.D(u)
q=C.e.Z(r*u)
r=s.b
if(typeof t!=="number")return H.D(t)
p=C.e.Z(r*t)
r=C.e.Z(s.c*u)
a.c=r
s=C.e.Z(s.d*t)
a.d=s
o.viewport(q,p,r,s)
o.clearDepth(this.c)
s=this.a
o.clearColor(s.a,s.b,s.c,s.d)
o.clear(16640)},
aN:function(a){}}
X.fT.prototype={
gn:function(){var u=this.b
return u==null?this.b=D.L():u},
$ic0:1,
$ibT:1}
X.dI.prototype={
gn:function(){var u=this.f
return u==null?this.f=D.L():u},
a_:function(a){var u
H.f(a,"$ix")
u=this.f
if(u!=null)u.D(a)},
ex:function(){return this.a_(null)},
$ic0:1,
$ibT:1}
X.cM.prototype={}
V.ke.prototype={
$1:function(a){var u
H.f(a,"$ibb")
u=C.e.e6(this.a.gii(),2)
if(u!=="0.00")P.kS(u+" fps")},
$S:50}
V.hK.prototype={
dj:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.ls().gcl().j(0,H.m(u))
if(t==null)if(d){c.$0()
m.dh(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.kX(m.c).h(0,q)
o=W.mM("radio")
o.checked=s
o.name=u
u=W.o
W.aa(o,"change",H.n(new V.hL(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.kX(m.c).h(0,r.createElement("br"))},
bR:function(a,b,c){return this.dj(a,b,c,!1)},
dh:function(a){var u,t,s=P.ls(),r=P.i,q=P.mS(s.gcl(),r,r)
q.k(0,this.a,a)
u=s.e2(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.jC([],[]).cv(""),"",t)}}
V.hL.prototype={
$1:function(a){var u=this
if(H.C(u.b.checked)){u.c.$0()
u.a.dh(u.d)}},
$S:20}
V.hY.prototype={
em:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.aa(q,"scroll",H.n(new V.i_(o),{func:1,ret:-1,args:[r]}),!1,r)},
dk:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.j(a,"$ib",[P.i],"$ab")
this.hv()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.iV(C.a.io(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.B)(s),++q){p=s[q]
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
if(H.oJ(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.K(m[1])
l.textContent=H.K(m[0])
t.appendChild(l)}else{k=P.jM(C.S,n,C.h,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.m(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
hQ:function(a){var u,t,s,r,q,p,o,n="auto"
H.j(a,"$ib",[P.i],"$ab")
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
for(q=0;q<1;++q){p=u.createElement("div")
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
hv:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.ij()
t=P.i
u.shD(new H.a_([t,V.cJ]))
u.shF(new H.a_([t,V.cN]))
u.c=null
u.c=u.K(0,q)
t=u.K(0,q).u(0,p)
s=V.aj(new H.a5("*"))
C.a.h(t.a,s)
t.c=!0
t=u.K(0,p).u(0,p)
s=new V.bm()
r=[V.bk]
s.sau(H.e([],r))
C.a.h(t.a,s)
t=V.aj(new H.a5("*"))
C.a.h(s.a,t)
t=u.K(0,p).u(0,"BoldEnd")
s=V.aj(new H.a5("*"))
C.a.h(t.a,s)
t.c=!0
t=u.K(0,q).u(0,o)
s=V.aj(new H.a5("_"))
C.a.h(t.a,s)
t.c=!0
t=u.K(0,o).u(0,o)
s=new V.bm()
s.sau(H.e([],r))
C.a.h(t.a,s)
t=V.aj(new H.a5("_"))
C.a.h(s.a,t)
t=u.K(0,o).u(0,n)
s=V.aj(new H.a5("_"))
C.a.h(t.a,s)
t.c=!0
t=u.K(0,q).u(0,m)
s=V.aj(new H.a5("`"))
C.a.h(t.a,s)
t.c=!0
t=u.K(0,m).u(0,m)
s=new V.bm()
s.sau(H.e([],r))
C.a.h(t.a,s)
t=V.aj(new H.a5("`"))
C.a.h(s.a,t)
t=u.K(0,m).u(0,"CodeEnd")
s=V.aj(new H.a5("`"))
C.a.h(t.a,s)
t.c=!0
t=u.K(0,q).u(0,l)
s=V.aj(new H.a5("["))
C.a.h(t.a,s)
t.c=!0
t=u.K(0,l).u(0,k)
s=V.aj(new H.a5("|"))
C.a.h(t.a,s)
s=u.K(0,l).u(0,j)
t=V.aj(new H.a5("]"))
C.a.h(s.a,t)
s.c=!0
s=u.K(0,l).u(0,l)
t=new V.bm()
t.sau(H.e([],r))
C.a.h(s.a,t)
s=V.aj(new H.a5("|]"))
C.a.h(t.a,s)
s=u.K(0,k).u(0,j)
t=V.aj(new H.a5("]"))
C.a.h(s.a,t)
s.c=!0
s=u.K(0,k).u(0,k)
t=new V.bm()
t.sau(H.e([],r))
C.a.h(s.a,t)
s=V.aj(new H.a5("|]"))
C.a.h(t.a,s)
C.a.h(u.K(0,q).u(0,i).a,new V.f8())
s=u.K(0,i).u(0,i)
t=new V.bm()
t.sau(H.e([],r))
C.a.h(s.a,t)
s=V.aj(new H.a5("*_`["))
C.a.h(t.a,s)
s=u.K(0,"BoldEnd")
s.d=s.a.b9(p)
s=u.K(0,n)
s.d=s.a.b9(o)
s=u.K(0,"CodeEnd")
s.d=s.a.b9(m)
s=u.K(0,j)
s.d=s.a.b9("Link")
s=u.K(0,i)
s.d=s.a.b9(i)
this.b=u}}
V.i_.prototype={
$1:function(a){P.lo(C.q,new V.hZ(this.a))},
$S:20}
V.hZ.prototype={
$0:function(){var u=C.e.Z(document.documentElement.scrollTop),t=this.a.style,s=H.m(-0.01*u)+"px"
t.top=s},
$S:1}
S.k8.prototype={
$0:function(){this.a.saW(C.v)},
$S:1}
S.k9.prototype={
$0:function(){this.a.saW(C.i)},
$S:1}
S.ka.prototype={
$0:function(){this.a.saW(C.w)},
$S:1}
S.kb.prototype={
$0:function(){this.a.saW(C.p)},
$S:1};(function aliases(){var u=J.a.prototype
u.ef=u.i
u=J.du.prototype
u.eg=u.i
u=O.dC.prototype
u.cC=u.av
u=O.b8.prototype
u.cD=u.av
u=V.dz.prototype
u.eh=u.aL
u.cB=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"ok","nx",13)
u(P,"ol","ny",13)
u(P,"om","nz",13)
t(P,"lV","oi",3)
var n
s(n=E.ap.prototype,"gdY",0,0,null,["$1","$0"],["dZ","iz"],0,0)
s(n,"gdW",0,0,null,["$1","$0"],["dX","iw"],0,0)
r(n,"giu","iv",6)
r(n,"gix","iy",6)
s(n=E.e_.prototype,"gcG",0,0,null,["$1","$0"],["cI","cH"],0,0)
q(n,"giM","e3",3)
p(n=X.e6.prototype,"gfD","fE",11)
p(n,"gfk","fl",11)
p(n,"gfq","fs",4)
p(n,"gfH","fI",22)
p(n,"gfF","fG",22)
p(n,"gfL","fM",4)
p(n,"gfP","fQ",4)
p(n,"gfv","fw",4)
p(n,"gfN","fO",4)
p(n,"gft","fu",4)
p(n,"gfR","fS",33)
p(n,"gfT","fU",11)
p(n,"gh8","h9",9)
p(n,"gh4","h5",9)
p(n,"gh6","h7",9)
s(D.bw.prototype,"gep",0,0,null,["$1","$0"],["aq","eq"],0,0)
s(n=D.dw.prototype,"gd3",0,0,null,["$1","$0"],["d4","fJ"],0,0)
p(n,"gfV","fW",35)
r(n,"gfe","ff",21)
r(n,"gfZ","h_",21)
o(V.R.prototype,"gl","cc",24)
o(V.N.prototype,"gl","cc",24)
s(n=U.cv.prototype,"gaG",0,0,null,["$1","$0"],["L","a4"],0,0)
r(n,"gfc","fd",19)
r(n,"gfX","fY",19)
s(n=U.e7.prototype,"gaG",0,0,null,["$1","$0"],["L","a4"],0,0)
p(n,"gbD","bE",2)
p(n,"gbF","bG",2)
p(n,"gbH","bI",2)
s(n=U.e8.prototype,"gaG",0,0,null,["$1","$0"],["L","a4"],0,0)
p(n,"gbD","bE",2)
p(n,"gbF","bG",2)
p(n,"gbH","bI",2)
p(n,"gf6","f7",2)
p(n,"gf8","f9",2)
p(n,"ghK","hL",2)
p(n,"ghI","hJ",2)
p(n,"ghG","hH",2)
p(U.e9.prototype,"gfa","fb",2)
s(n=M.de.prototype,"gY",0,0,null,["$1","$0"],["V","aR"],0,0)
r(n,"gh0","h1",23)
r(n,"gh2","h3",23)
s(M.dg.prototype,"gY",0,0,null,["$1","$0"],["V","aR"],0,0)
s(n=M.dl.prototype,"gY",0,0,null,["$1","$0"],["V","aR"],0,0)
r(n,"gfm","fn",6)
r(n,"gfo","fp",6)
s(n=O.dA.prototype,"gar",0,0,null,["$1","$0"],["O","as"],0,0)
s(n,"ghn",0,0,null,["$1","$0"],["d8","ho"],0,0)
r(n,"gfg","fh",17)
r(n,"gfi","fj",17)
s(n=O.dY.prototype,"gar",0,0,null,["$1","$0"],["O","as"],0,0)
r(n,"gfz","fA",18)
r(n,"gfB","fC",18)
s(O.aU.prototype,"gar",0,0,null,["$1","$0"],["O","as"],0,0)
s(X.dI.prototype,"gew",0,0,null,["$1","$0"],["a_","ex"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.O,null)
s(P.O,[H.kt,J.a,J.as,P.er,P.h,H.dx,P.b5,H.bY,H.cQ,H.fs,H.ip,P.bx,H.cq,H.eI,P.af,H.h0,H.h2,H.fW,P.eO,P.bg,P.aH,P.ec,P.i7,P.cK,P.i8,P.bb,P.an,P.jP,P.jy,P.cU,P.js,P.v,P.jH,P.h9,P.bV,P.jO,P.jN,P.a7,P.av,P.a9,P.b4,P.hF,P.dU,P.ek,P.fQ,P.b,P.w,P.J,P.at,P.i,P.ak,P.cc,P.iD,P.jz,W.fv,W.E,W.dp,P.jB,P.jt,P.P,O.V,O.cy,E.fl,E.ap,E.hM,E.e_,Z.ea,Z.eb,Z.cp,Z.c_,Z.bJ,D.fo,D.by,D.x,X.dd,X.dv,X.fY,X.h6,X.aw,X.hv,X.ik,X.e6,D.bw,D.ab,D.dJ,D.dT,V.a0,V.a1,V.fH,V.dD,V.ag,V.a6,V.a4,V.ba,V.bF,V.R,V.N,U.e7,U.e8,U.e9,M.dg,M.dl,M.ax,A.da,A.fd,A.ao,A.aA,A.aC,A.aD,A.he,A.c8,A.c9,A.cb,A.bv,A.e2,A.ix,F.a8,F.fK,F.bC,F.h_,F.c1,F.dR,F.hV,F.hW,F.hX,F.aq,F.iQ,F.iR,F.iU,F.iW,F.iX,F.iY,O.bG,O.dC,O.hf,O.aU,V.f8,V.bk,V.dz,V.hU,V.cJ,V.e0,V.cN,V.ij,X.cM,X.bT,X.fT,X.dI,V.hK,V.hY])
s(J.a,[J.fV,J.dt,J.du,J.aM,J.bB,J.bi,H.cB,H.bE,W.k,W.f7,W.bS,W.b2,W.b3,W.S,W.ee,W.fz,W.fA,W.eg,W.dk,W.ei,W.fC,W.o,W.el,W.aL,W.fS,W.en,W.cw,W.h5,W.hp,W.es,W.et,W.aO,W.eu,W.ex,W.aP,W.eB,W.eD,W.aR,W.eE,W.aS,W.eJ,W.aE,W.eM,W.ii,W.aV,W.eP,W.im,W.iI,W.eU,W.eW,W.eY,W.f_,W.f1,P.b7,P.ep,P.b9,P.ez,P.hJ,P.eK,P.bc,P.eR,P.fe,P.ed,P.db,P.dq,P.dL,P.dP,P.c5,P.dQ,P.dW,P.e3,P.eG])
s(J.du,[J.hG,J.bI,J.bj])
t(J.ks,J.aM)
s(J.bB,[J.ds,J.dr])
t(P.h4,P.er)
s(P.h4,[H.e4,W.j9,W.j8,P.fM])
t(H.a5,H.e4)
s(P.h,[H.fF,H.ha,H.j1])
s(P.b5,[H.hb,H.j2])
t(H.ft,H.fs)
s(P.bx,[H.hC,H.fX,H.iB,H.ir,H.fn,H.hS,P.fc,P.dH,P.b0,P.iC,P.iz,P.dV,P.fr,P.fy])
s(H.cq,[H.kh,H.ic,H.k3,H.k4,H.k5,P.j5,P.j4,P.j6,P.j7,P.jG,P.jF,P.jf,P.jj,P.jg,P.jh,P.ji,P.jm,P.jn,P.jl,P.jk,P.i9,P.ia,P.jX,P.jw,P.jv,P.jx,P.h3,P.h8,P.fD,P.fE,P.iH,P.iE,P.iF,P.iG,P.jI,P.jJ,P.jL,P.jK,P.jR,P.jQ,P.jS,P.jT,W.hr,W.ht,W.hR,W.i6,W.je,P.jD,P.jZ,P.fN,P.fO,P.fg,E.hN,E.hO,E.hP,E.ih,D.fI,D.fJ,F.kg,F.k_,F.j_,F.iZ,F.iS,F.iT,O.hi,O.hj,O.hk,O.hl,O.hm,O.hn,V.ke,V.hL,V.i_,V.hZ,S.k8,S.k9,S.ka,S.kb])
s(H.ic,[H.i4,H.cn])
t(H.j3,P.fc)
t(P.h7,P.af)
t(H.a_,P.h7)
t(H.h1,H.fF)
t(H.dE,H.bE)
s(H.dE,[H.cV,H.cX])
t(H.cW,H.cV)
t(H.cC,H.cW)
t(H.cY,H.cX)
t(H.dF,H.cY)
s(H.dF,[H.hw,H.hx,H.hy,H.hz,H.hA,H.dG,H.cD])
t(P.ju,P.jP)
t(P.jr,P.jy)
t(P.eT,P.h9)
t(P.e5,P.eT)
s(P.bV,[P.fj,P.fG])
t(P.bX,P.i8)
s(P.bX,[P.fk,P.iL,P.iK])
t(P.iJ,P.fG)
s(P.a9,[P.z,P.l])
s(P.b0,[P.c4,P.fU])
t(P.jb,P.cc)
s(W.k,[W.H,W.fL,W.cz,W.aQ,W.cZ,W.aT,W.aF,W.d0,W.j0,W.cS,P.fh,P.bR])
s(W.H,[W.a2,W.bu])
s(W.a2,[W.r,P.p])
s(W.r,[W.f9,W.fa,W.bU,W.di,W.fP,W.cx,W.hT,W.bp])
s(W.b2,[W.cr,W.fw,W.fx])
t(W.fu,W.b3)
t(W.cs,W.ee)
t(W.eh,W.eg)
t(W.dj,W.eh)
t(W.ej,W.ei)
t(W.fB,W.ej)
t(W.aB,W.bS)
t(W.em,W.el)
t(W.ct,W.em)
t(W.eo,W.en)
t(W.bZ,W.eo)
t(W.bH,W.o)
s(W.bH,[W.b6,W.ac,W.aW])
t(W.hq,W.es)
t(W.hs,W.et)
t(W.ev,W.eu)
t(W.hu,W.ev)
t(W.ey,W.ex)
t(W.cE,W.ey)
t(W.eC,W.eB)
t(W.hH,W.eC)
t(W.hQ,W.eD)
t(W.d_,W.cZ)
t(W.i1,W.d_)
t(W.eF,W.eE)
t(W.i2,W.eF)
t(W.i5,W.eJ)
t(W.eN,W.eM)
t(W.id,W.eN)
t(W.d1,W.d0)
t(W.ie,W.d1)
t(W.eQ,W.eP)
t(W.il,W.eQ)
t(W.bf,W.ac)
t(W.eV,W.eU)
t(W.ja,W.eV)
t(W.ef,W.dk)
t(W.eX,W.eW)
t(W.jo,W.eX)
t(W.eZ,W.eY)
t(W.ew,W.eZ)
t(W.f0,W.f_)
t(W.jA,W.f0)
t(W.f2,W.f1)
t(W.jE,W.f2)
t(W.jc,P.i7)
t(W.kC,W.jc)
t(W.jd,P.cK)
t(P.jC,P.jB)
t(P.ai,P.jt)
t(P.eq,P.ep)
t(P.fZ,P.eq)
t(P.eA,P.ez)
t(P.hD,P.eA)
t(P.eL,P.eK)
t(P.ib,P.eL)
t(P.eS,P.eR)
t(P.io,P.eS)
t(P.ff,P.ed)
t(P.hE,P.bR)
t(P.eH,P.eG)
t(P.i3,P.eH)
s(E.fl,[Z.dc,A.cI,T.c6])
s(D.x,[D.bz,D.bA,D.G,X.hI])
s(X.hI,[X.dy,X.bl,X.cA,X.e1])
s(O.V,[D.dw,U.cv,M.de])
s(D.fo,[U.fq,U.ah])
t(U.df,U.ah)
s(A.cI,[A.dB,A.dZ])
s(A.e2,[A.al,A.iu,A.iv,A.iw,A.it,A.ae,A.ay,A.X,A.c7,A.iy,A.cP,A.am,A.be,A.ca])
t(F.i0,F.fK)
t(F.is,F.h_)
t(F.iV,F.iW)
t(F.hB,F.iX)
s(O.bG,[O.dA,O.dY])
s(O.dC,[O.hc,O.hd,O.b8])
s(O.b8,[O.hg,O.hh])
t(T.dX,T.c6)
t(T.ig,T.dX)
s(V.dz,[V.bm,V.cO])
s(X.cM,[X.fi,X.fR])
u(H.e4,H.cQ)
u(H.cV,P.v)
u(H.cW,H.bY)
u(H.cX,P.v)
u(H.cY,H.bY)
u(P.er,P.v)
u(P.eT,P.jH)
u(W.ee,W.fv)
u(W.eg,P.v)
u(W.eh,W.E)
u(W.ei,P.v)
u(W.ej,W.E)
u(W.el,P.v)
u(W.em,W.E)
u(W.en,P.v)
u(W.eo,W.E)
u(W.es,P.af)
u(W.et,P.af)
u(W.eu,P.v)
u(W.ev,W.E)
u(W.ex,P.v)
u(W.ey,W.E)
u(W.eB,P.v)
u(W.eC,W.E)
u(W.eD,P.af)
u(W.cZ,P.v)
u(W.d_,W.E)
u(W.eE,P.v)
u(W.eF,W.E)
u(W.eJ,P.af)
u(W.eM,P.v)
u(W.eN,W.E)
u(W.d0,P.v)
u(W.d1,W.E)
u(W.eP,P.v)
u(W.eQ,W.E)
u(W.eU,P.v)
u(W.eV,W.E)
u(W.eW,P.v)
u(W.eX,W.E)
u(W.eY,P.v)
u(W.eZ,W.E)
u(W.f_,P.v)
u(W.f0,W.E)
u(W.f1,P.v)
u(W.f2,W.E)
u(P.ep,P.v)
u(P.eq,W.E)
u(P.ez,P.v)
u(P.eA,W.E)
u(P.eK,P.v)
u(P.eL,W.E)
u(P.eR,P.v)
u(P.eS,W.E)
u(P.ed,P.af)
u(P.eG,P.v)
u(P.eH,W.E)})();(function constants(){var u=hunkHelpers.makeConstList
C.o=W.bU.prototype
C.N=J.a.prototype
C.a=J.aM.prototype
C.O=J.dr.prototype
C.d=J.ds.prototype
C.j=J.dt.prototype
C.e=J.bB.prototype
C.b=J.bi.prototype
C.P=J.bj.prototype
C.V=W.cE.prototype
C.A=J.hG.prototype
C.c=P.c5.prototype
C.r=J.bI.prototype
C.B=W.bf.prototype
C.C=W.cS.prototype
C.W=new P.fk()
C.D=new P.fj()
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.E=function() {
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
C.J=function(getTagFallback) {
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
C.F=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.G=function(hooks) {
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
C.I=function(hooks) {
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
C.H=function(hooks) {
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
C.u=function(hooks) { return hooks; }

C.K=new P.hF()
C.h=new P.iJ()
C.L=new P.iL()
C.f=new P.ju()
C.p=new A.bv(0,"ColorBlendType.Overwrite")
C.v=new A.bv(1,"ColorBlendType.Additive")
C.w=new A.bv(2,"ColorBlendType.Average")
C.i=new A.bv(3,"ColorBlendType.AlphaBlend")
C.q=new P.b4(0)
C.M=new P.b4(5e6)
C.x=H.e(u([127,2047,65535,1114111]),[P.l])
C.k=H.e(u([0,0,32776,33792,1,10240,0,0]),[P.l])
C.l=H.e(u([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.m=H.e(u([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.R=H.e(u([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.S=H.e(u([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.n=H.e(u([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.y=H.e(u([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.T=H.e(u([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.z=H.e(u([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.Q=H.e(u([]),[P.i])
C.U=new H.ft(0,{},C.Q,[P.i,P.i])})()
var v={mangledGlobalNames:{l:"int",z:"double",a9:"num",i:"String",a7:"bool",J:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.x]},{func:1,ret:P.J},{func:1,ret:-1,args:[D.x]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ac]},{func:1,ret:P.J,args:[F.a8]},{func:1,ret:-1,args:[P.l,[P.h,E.ap]]},{func:1,ret:P.J,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:-1,args:[W.aW]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:-1,args:[W.o]},{func:1,ret:P.J,args:[D.x]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,args:[,]},{func:1,ret:P.i,args:[P.l]},{func:1,ret:-1,args:[P.l,[P.h,V.ag]]},{func:1,ret:-1,args:[P.l,[P.h,O.aU]]},{func:1,ret:-1,args:[P.l,[P.h,U.ah]]},{func:1,ret:P.J,args:[W.o]},{func:1,ret:-1,args:[P.l,[P.h,D.ab]]},{func:1,ret:-1,args:[W.b6]},{func:1,ret:-1,args:[P.l,[P.h,M.ax]]},{func:1,ret:P.z},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:P.J,args:[,]},{func:1,ret:-1,args:[P.i,P.l]},{func:1,ret:P.J,args:[P.a9]},{func:1,args:[P.i]},{func:1,ret:W.a2,args:[W.H]},{func:1,ret:P.J,args:[,],opt:[P.at]},{func:1,args:[W.o]},{func:1,ret:-1,args:[W.bf]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:P.a7,args:[[P.h,D.ab]]},{func:1,args:[,P.i]},{func:1,ret:P.P,args:[,,]},{func:1,ret:P.P,args:[P.l]},{func:1,ret:[P.w,P.i,P.i],args:[[P.w,P.i,P.i],P.i]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:V.a4,args:[P.z]},{func:1,ret:P.J,args:[F.aq,P.z,P.z]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,ret:P.J,args:[P.i,,]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:P.l,args:[A.aA,A.aA]},{func:1,ret:P.l,args:[A.aC,A.aC]},{func:1,ret:P.l,args:[A.aD,A.aD]},{func:1,ret:P.J,args:[P.i]},{func:1,ret:P.J,args:[P.bb]},{func:1,ret:P.a7,args:[W.H]},{func:1,ret:[P.aH,,],args:[,]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b1=0
$.co=null
$.kZ=null
$.kG=!1
$.m0=null
$.lT=null
$.m7=null
$.k0=null
$.k6=null
$.kP=null
$.cd=null
$.d4=null
$.d5=null
$.kH=!1
$.Y=C.f
$.au=[]
$.ho=null
$.le=null
$.cF=null
$.cH=null
$.lv=null
$.ly=null
$.lx=null
$.iM=null
$.iN=null
$.iO=null
$.lw=null
$.ld=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oT","mc",function(){return H.m_("_$dart_dartClosure")})
u($,"oU","kT",function(){return H.m_("_$dart_js")})
u($,"oY","md",function(){return H.bd(H.iq({
toString:function(){return"$receiver$"}}))})
u($,"oZ","me",function(){return H.bd(H.iq({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"p_","mf",function(){return H.bd(H.iq(null))})
u($,"p0","mg",function(){return H.bd(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"p3","mj",function(){return H.bd(H.iq(void 0))})
u($,"p4","mk",function(){return H.bd(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"p2","mi",function(){return H.bd(H.lq(null))})
u($,"p1","mh",function(){return H.bd(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"p6","mm",function(){return H.bd(H.lq(void 0))})
u($,"p5","ml",function(){return H.bd(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pl","kU",function(){return P.nw()})
u($,"p7","mn",function(){return P.ns()})
u($,"pm","mr",function(){return H.mZ(H.bK(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"pn","ms",function(){return P.nc("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"po","mt",function(){return P.nS()})
u($,"pe","mq",function(){return Z.aG(0)})
u($,"p8","mo",function(){return Z.aG(511)})
u($,"pg","aY",function(){return Z.aG(1)})
u($,"pf","bt",function(){return Z.aG(2)})
u($,"pa","bs",function(){return Z.aG(4)})
u($,"ph","bO",function(){return Z.aG(8)})
u($,"pi","bP",function(){return Z.aG(16)})
u($,"pb","d6",function(){return Z.aG(32)})
u($,"pc","d7",function(){return Z.aG(64)})
u($,"pd","mp",function(){return Z.aG(96)})
u($,"pj","cm",function(){return Z.aG(128)})
u($,"p9","br",function(){return Z.aG(256)})
u($,"oS","mb",function(){return new V.fH(1e-9)})
u($,"oR","M",function(){return $.mb()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cB,DataView:H.bE,ArrayBufferView:H.bE,Float32Array:H.cC,Float64Array:H.cC,Int16Array:H.hw,Int32Array:H.hx,Int8Array:H.hy,Uint16Array:H.hz,Uint32Array:H.hA,Uint8ClampedArray:H.dG,CanvasPixelArray:H.dG,Uint8Array:H.cD,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLBaseElement:W.r,HTMLBodyElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLImageElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableColElement:W.r,HTMLTableElement:W.r,HTMLTableRowElement:W.r,HTMLTableSectionElement:W.r,HTMLTemplateElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.f7,HTMLAnchorElement:W.f9,HTMLAreaElement:W.fa,Blob:W.bS,HTMLCanvasElement:W.bU,CDATASection:W.bu,CharacterData:W.bu,Comment:W.bu,ProcessingInstruction:W.bu,Text:W.bu,CSSNumericValue:W.cr,CSSUnitValue:W.cr,CSSPerspective:W.fu,CSSCharsetRule:W.S,CSSConditionRule:W.S,CSSFontFaceRule:W.S,CSSGroupingRule:W.S,CSSImportRule:W.S,CSSKeyframeRule:W.S,MozCSSKeyframeRule:W.S,WebKitCSSKeyframeRule:W.S,CSSKeyframesRule:W.S,MozCSSKeyframesRule:W.S,WebKitCSSKeyframesRule:W.S,CSSMediaRule:W.S,CSSNamespaceRule:W.S,CSSPageRule:W.S,CSSRule:W.S,CSSStyleRule:W.S,CSSSupportsRule:W.S,CSSViewportRule:W.S,CSSStyleDeclaration:W.cs,MSStyleCSSProperties:W.cs,CSS2Properties:W.cs,CSSImageValue:W.b2,CSSKeywordValue:W.b2,CSSPositionValue:W.b2,CSSResourceValue:W.b2,CSSURLImageValue:W.b2,CSSStyleValue:W.b2,CSSMatrixComponent:W.b3,CSSRotation:W.b3,CSSScale:W.b3,CSSSkew:W.b3,CSSTranslation:W.b3,CSSTransformComponent:W.b3,CSSTransformValue:W.fw,CSSUnparsedValue:W.fx,DataTransferItemList:W.fz,HTMLDivElement:W.di,DOMException:W.fA,ClientRectList:W.dj,DOMRectList:W.dj,DOMRectReadOnly:W.dk,DOMStringList:W.fB,DOMTokenList:W.fC,Element:W.a2,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.k,Accelerometer:W.k,AccessibleNode:W.k,AmbientLightSensor:W.k,Animation:W.k,ApplicationCache:W.k,DOMApplicationCache:W.k,OfflineResourceList:W.k,BackgroundFetchRegistration:W.k,BatteryManager:W.k,BroadcastChannel:W.k,CanvasCaptureMediaStreamTrack:W.k,DedicatedWorkerGlobalScope:W.k,EventSource:W.k,FileReader:W.k,FontFaceSet:W.k,Gyroscope:W.k,XMLHttpRequest:W.k,XMLHttpRequestEventTarget:W.k,XMLHttpRequestUpload:W.k,LinearAccelerationSensor:W.k,Magnetometer:W.k,MediaDevices:W.k,MediaKeySession:W.k,MediaQueryList:W.k,MediaRecorder:W.k,MediaSource:W.k,MediaStream:W.k,MediaStreamTrack:W.k,MIDIAccess:W.k,MIDIInput:W.k,MIDIOutput:W.k,MIDIPort:W.k,NetworkInformation:W.k,Notification:W.k,OffscreenCanvas:W.k,OrientationSensor:W.k,PaymentRequest:W.k,Performance:W.k,PermissionStatus:W.k,PresentationAvailability:W.k,PresentationConnection:W.k,PresentationConnectionList:W.k,PresentationRequest:W.k,RelativeOrientationSensor:W.k,RemotePlayback:W.k,RTCDataChannel:W.k,DataChannel:W.k,RTCDTMFSender:W.k,RTCPeerConnection:W.k,webkitRTCPeerConnection:W.k,mozRTCPeerConnection:W.k,ScreenOrientation:W.k,Sensor:W.k,ServiceWorker:W.k,ServiceWorkerContainer:W.k,ServiceWorkerGlobalScope:W.k,ServiceWorkerRegistration:W.k,SharedWorker:W.k,SharedWorkerGlobalScope:W.k,SpeechRecognition:W.k,SpeechSynthesis:W.k,SpeechSynthesisUtterance:W.k,VR:W.k,VRDevice:W.k,VRDisplay:W.k,VRSession:W.k,VisualViewport:W.k,WebSocket:W.k,Worker:W.k,WorkerGlobalScope:W.k,WorkerPerformance:W.k,BluetoothDevice:W.k,BluetoothRemoteGATTCharacteristic:W.k,Clipboard:W.k,MojoInterfaceInterceptor:W.k,USB:W.k,IDBDatabase:W.k,IDBOpenDBRequest:W.k,IDBVersionChangeRequest:W.k,IDBRequest:W.k,IDBTransaction:W.k,AnalyserNode:W.k,RealtimeAnalyserNode:W.k,AudioBufferSourceNode:W.k,AudioDestinationNode:W.k,AudioNode:W.k,AudioScheduledSourceNode:W.k,AudioWorkletNode:W.k,BiquadFilterNode:W.k,ChannelMergerNode:W.k,AudioChannelMerger:W.k,ChannelSplitterNode:W.k,AudioChannelSplitter:W.k,ConstantSourceNode:W.k,ConvolverNode:W.k,DelayNode:W.k,DynamicsCompressorNode:W.k,GainNode:W.k,AudioGainNode:W.k,IIRFilterNode:W.k,MediaElementAudioSourceNode:W.k,MediaStreamAudioDestinationNode:W.k,MediaStreamAudioSourceNode:W.k,OscillatorNode:W.k,Oscillator:W.k,PannerNode:W.k,AudioPannerNode:W.k,webkitAudioPannerNode:W.k,ScriptProcessorNode:W.k,JavaScriptAudioNode:W.k,StereoPannerNode:W.k,WaveShaperNode:W.k,EventTarget:W.k,File:W.aB,FileList:W.ct,FileWriter:W.fL,HTMLFormElement:W.fP,Gamepad:W.aL,History:W.fS,HTMLCollection:W.bZ,HTMLFormControlsCollection:W.bZ,HTMLOptionsCollection:W.bZ,ImageData:W.cw,HTMLInputElement:W.cx,KeyboardEvent:W.b6,Location:W.h5,MediaList:W.hp,MessagePort:W.cz,MIDIInputMap:W.hq,MIDIOutputMap:W.hs,MimeType:W.aO,MimeTypeArray:W.hu,PointerEvent:W.ac,MouseEvent:W.ac,DragEvent:W.ac,Document:W.H,DocumentFragment:W.H,HTMLDocument:W.H,ShadowRoot:W.H,XMLDocument:W.H,Attr:W.H,DocumentType:W.H,Node:W.H,NodeList:W.cE,RadioNodeList:W.cE,Plugin:W.aP,PluginArray:W.hH,RTCStatsReport:W.hQ,HTMLSelectElement:W.hT,SourceBuffer:W.aQ,SourceBufferList:W.i1,SpeechGrammar:W.aR,SpeechGrammarList:W.i2,SpeechRecognitionResult:W.aS,Storage:W.i5,CSSStyleSheet:W.aE,StyleSheet:W.aE,HTMLTableCellElement:W.bp,HTMLTableDataCellElement:W.bp,HTMLTableHeaderCellElement:W.bp,TextTrack:W.aT,TextTrackCue:W.aF,VTTCue:W.aF,TextTrackCueList:W.id,TextTrackList:W.ie,TimeRanges:W.ii,Touch:W.aV,TouchEvent:W.aW,TouchList:W.il,TrackDefaultList:W.im,CompositionEvent:W.bH,FocusEvent:W.bH,TextEvent:W.bH,UIEvent:W.bH,URL:W.iI,VideoTrackList:W.j0,WheelEvent:W.bf,Window:W.cS,DOMWindow:W.cS,CSSRuleList:W.ja,ClientRect:W.ef,DOMRect:W.ef,GamepadList:W.jo,NamedNodeMap:W.ew,MozNamedAttrMap:W.ew,SpeechRecognitionResultList:W.jA,StyleSheetList:W.jE,SVGLength:P.b7,SVGLengthList:P.fZ,SVGNumber:P.b9,SVGNumberList:P.hD,SVGPointList:P.hJ,SVGStringList:P.ib,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGScriptElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGTransform:P.bc,SVGTransformList:P.io,AudioBuffer:P.fe,AudioParamMap:P.ff,AudioTrackList:P.fh,AudioContext:P.bR,webkitAudioContext:P.bR,BaseAudioContext:P.bR,OfflineAudioContext:P.hE,WebGLBuffer:P.db,WebGLFramebuffer:P.dq,WebGLProgram:P.dL,WebGLRenderbuffer:P.dP,WebGL2RenderingContext:P.c5,WebGLShader:P.dQ,WebGLTexture:P.dW,WebGLUniformLocation:P.e3,SQLResultSetRowList:P.i3})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dE.$nativeSuperclassTag="ArrayBufferView"
H.cV.$nativeSuperclassTag="ArrayBufferView"
H.cW.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.cX.$nativeSuperclassTag="ArrayBufferView"
H.cY.$nativeSuperclassTag="ArrayBufferView"
H.dF.$nativeSuperclassTag="ArrayBufferView"
W.cZ.$nativeSuperclassTag="EventTarget"
W.d_.$nativeSuperclassTag="EventTarget"
W.d0.$nativeSuperclassTag="EventTarget"
W.d1.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(S.m3,[])
else S.m3([])})})()
//# sourceMappingURL=test.dart.js.map
