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
a[c]=function(){a[c]=function(){H.pG(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lD(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={lg:function lg(){},
kH:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
ld:function(){return new P.cZ("No element")},
nD:function(){return new P.cZ("Too many elements")},
ee:function(a,b,c,d,e){H.l(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.m,args:[e,e]})
if(c-b<=32)H.o5(a,b,c,d,e)
else H.o4(a,b,c,d,e)},
o5:function(a,b,c,d,e){var u,t,s,r,q
H.l(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.m,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.e(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.e(a,r)
r=J.b3(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.e(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
o4:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.l(a2,"$ib",[a6],"$ab")
H.n(a5,{func:1,ret:P.m,args:[a6,a6]})
u=C.d.aa(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.d.aa(a3+a4,2)
q=r-u
p=r+u
o=a2.length
if(t<0||t>=o)return H.e(a2,t)
n=a2[t]
if(q<0||q>=o)return H.e(a2,q)
m=a2[q]
if(r<0||r>=o)return H.e(a2,r)
l=a2[r]
if(p<0||p>=o)return H.e(a2,p)
k=a2[p]
if(s<0||s>=o)return H.e(a2,s)
j=a2[s]
if(J.b3(a5.$2(n,m),0)){i=m
m=n
n=i}if(J.b3(a5.$2(k,j),0)){i=j
j=k
k=i}if(J.b3(a5.$2(n,l),0)){i=l
l=n
n=i}if(J.b3(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.b3(a5.$2(n,k),0)){i=k
k=n
n=i}if(J.b3(a5.$2(l,k),0)){i=k
k=l
l=i}if(J.b3(a5.$2(m,j),0)){i=j
j=m
m=i}if(J.b3(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.b3(a5.$2(k,j),0)){i=j
j=k
k=i}C.a.k(a2,t,n)
C.a.k(a2,r,l)
C.a.k(a2,s,j)
if(a3<0||a3>=a2.length)return H.e(a2,a3)
C.a.k(a2,q,a2[a3])
if(a4<0||a4>=a2.length)return H.e(a2,a4)
C.a.k(a2,p,a2[a4])
h=a3+1
g=a4-1
if(J.a5(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.e(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.R()
if(d<0){if(f!==h){if(h>=a2.length)return H.e(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.av()
if(d>0){--g
continue}else{c=g-1
o=a2.length
if(d<0){if(h>=o)return H.e(a2,h)
C.a.k(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.e(a2,g)
C.a.k(a2,h,a2[g])
C.a.k(a2,g,e)
g=c
h=b
break}else{if(g>=o)return H.e(a2,g)
C.a.k(a2,f,a2[g])
C.a.k(a2,g,e)
g=c
break}}}}a=!0}else{for(f=h;f<=g;++f){if(f>=a2.length)return H.e(a2,f)
e=a2[f]
a0=a5.$2(e,m)
if(typeof a0!=="number")return a0.R()
if(a0<0){if(f!==h){if(h>=a2.length)return H.e(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else{a1=a5.$2(e,k)
if(typeof a1!=="number")return a1.av()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.av()
if(d>0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.R()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.e(a2,h)
C.a.k(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.e(a2,g)
C.a.k(a2,h,a2[g])
C.a.k(a2,g,e)
h=b}else{if(g>=o)return H.e(a2,g)
C.a.k(a2,f,a2[g])
C.a.k(a2,g,e)}g=c
break}}}}a=!1}o=h-1
if(o>=a2.length)return H.e(a2,o)
C.a.k(a2,a3,a2[o])
C.a.k(a2,o,m)
o=g+1
if(o<0||o>=a2.length)return H.e(a2,o)
C.a.k(a2,a4,a2[o])
C.a.k(a2,o,k)
H.ee(a2,a3,h-2,a5,a6)
H.ee(a2,g+2,a4,a5,a6)
if(a)return
if(h<t&&g>s){while(!0){if(h>=a2.length)return H.e(a2,h)
if(!J.a5(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.e(a2,g)
if(!J.a5(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.e(a2,f)
e=a2[f]
if(a5.$2(e,m)===0){if(f!==h){if(h>=a2.length)return H.e(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else if(a5.$2(e,k)===0)for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
if(a5.$2(a2[g],k)===0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.R()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.e(a2,h)
C.a.k(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.e(a2,g)
C.a.k(a2,h,a2[g])
C.a.k(a2,g,e)
h=b}else{if(g>=o)return H.e(a2,g)
C.a.k(a2,f,a2[g])
C.a.k(a2,g,e)}g=c
break}}}H.ee(a2,h,g,a5,a6)}else H.ee(a2,h,g,a5,a6)},
t:function t(a){this.a=a},
h1:function h1(){},
c8:function c8(){},
cL:function cL(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hz:function hz(a,b,c){this.a=a
this.b=b
this.$ti=c},
hA:function hA(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hB:function hB(a,b,c){this.a=a
this.b=b
this.$ti=c},
da:function da(a,b,c){this.a=a
this.b=b
this.$ti=c},
jB:function jB(a,b,c){this.a=a
this.b=b
this.$ti=c},
c4:function c4(){},
d9:function d9(){},
ep:function ep(){},
nv:function(){throw H.c(P.K("Cannot modify unmodifiable Map"))},
cu:function(a){var u,t=H.J(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
po:function(a){return v.types[H.a4(a)]},
pv:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.S(a).$iM},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ar(a)
if(typeof u!=="string")throw H.c(H.aR(a))
return u},
cV:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nX:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.e(p,3)
u=H.J(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ah(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.D(s,q)|32)>t)return}return parseInt(a,b)},
cc:function(a){return H.nO(a)+H.lz(H.bX(a),0,null)},
nO:function(a){var u,t,s,r,q,p,o,n=J.S(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ibT){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cu(t.length>1&&C.b.D(t,0)===36?C.b.ac(t,1):t)},
nP:function(){if(!!self.location)return self.location.href
return},
m8:function(a){var u,t,s,r,q
H.kM(a)
u=J.aE(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
nY:function(a){var u,t,s,r=H.d([],[P.m])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aR(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.aX(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.aR(s))}return H.m8(r)},
m9:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aR(s))
if(s<0)throw H.c(H.aR(s))
if(s>65535)return H.nY(a)}return H.m8(a)},
nZ:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
cd:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aX(u,10))>>>0,56320|u&1023)}}throw H.c(P.ah(a,0,1114111,null,null))},
cb:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nW:function(a){var u=H.cb(a).getFullYear()+0
return u},
nU:function(a){var u=H.cb(a).getMonth()+1
return u},
nQ:function(a){var u=H.cb(a).getDate()+0
return u},
nR:function(a){var u=H.cb(a).getHours()+0
return u},
nT:function(a){var u=H.cb(a).getMinutes()+0
return u},
nV:function(a){var u=H.cb(a).getSeconds()+0
return u},
nS:function(a){var u=H.cb(a).getMilliseconds()+0
return u},
H:function(a){throw H.c(H.aR(a))},
e:function(a,b){if(a==null)J.aE(a)
throw H.c(H.cp(a,b))},
cp:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aS(!0,b,s,null)
u=H.a4(J.aE(a))
if(!(b<0)){if(typeof u!=="number")return H.H(u)
t=b>=u}else t=!0
if(t)return P.a_(b,a,s,null,u)
return P.ic(b,s)},
ph:function(a,b,c){var u="Invalid value"
if(a>c)return new P.ce(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.ce(a,c,!0,b,"end",u)
return new P.aS(!0,b,"end",null)},
aR:function(a){return new P.aS(!0,a,null,null)},
pd:function(a){if(typeof a!=="number")throw H.c(H.aR(a))
return a},
c:function(a){var u
if(a==null)a=new P.e5()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mX})
u.name=""}else u.toString=H.mX
return u},
mX:function(){return J.ar(this.dartException)},
B:function(a){throw H.c(a)},
u:function(a){throw H.c(P.b5(a))},
bi:function(a){var u,t,s,r,q,p
a=H.mW(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.j0(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
j1:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mj:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m2:function(a,b){return new H.i1(a,b==null?null:b.method)},
lh:function(a,b){var u=b==null,t=u?null:b.method
return new H.hn(a,t,u?null:b.receiver)},
aj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.l1(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aX(t,16)&8191)===10)switch(s){case 438:return f.$1(H.lh(H.j(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.m2(H.j(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.n_()
q=$.n0()
p=$.n1()
o=$.n2()
n=$.n5()
m=$.n6()
l=$.n4()
$.n3()
k=$.n8()
j=$.n7()
i=r.am(u)
if(i!=null)return f.$1(H.lh(H.J(u),i))
else{i=q.am(u)
if(i!=null){i.method="call"
return f.$1(H.lh(H.J(u),i))}else{i=p.am(u)
if(i==null){i=o.am(u)
if(i==null){i=n.am(u)
if(i==null){i=m.am(u)
if(i==null){i=l.am(u)
if(i==null){i=o.am(u)
if(i==null){i=k.am(u)
if(i==null){i=j.am(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.m2(H.J(u),i))}}return f.$1(new H.jc(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.eg()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aS(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.eg()
return a},
cs:function(a){var u
if(a==null)return new H.f5(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f5(a)},
pl:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
pu:function(a,b,c,d,e,f){H.f(a,"$ibH")
switch(H.a4(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.D("Unsupported number of arguments for wrapped closure"))},
co:function(a,b){var u
H.a4(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pu)
a.$identity=u
return u},
nu:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.iz().constructor.prototype):Object.create(new H.cy(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b4
if(typeof t!=="number")return t.C()
$.b4=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.lS(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.po,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.lR:H.l5
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lS(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
nr:function(a,b,c,d){var u=H.l5
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lS:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nt(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nr(t,!r,u,b)
if(t===0){r=$.b4
if(typeof r!=="number")return r.C()
$.b4=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cz
return new Function(r+H.j(q==null?$.cz=H.fJ("self"):q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b4
if(typeof r!=="number")return r.C()
$.b4=r+1
o+=r
r="return function("+o+"){return this."
q=$.cz
return new Function(r+H.j(q==null?$.cz=H.fJ("self"):q)+"."+H.j(u)+"("+o+");}")()},
ns:function(a,b,c,d){var u=H.l5,t=H.lR
switch(b?-1:a){case 0:throw H.c(H.o2("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nt:function(a,b){var u,t,s,r,q,p,o,n=$.cz
if(n==null)n=$.cz=H.fJ("self")
u=$.lQ
if(u==null)u=$.lQ=H.fJ("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.ns(s,!q,t,b)
if(s===1){n="return function(){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+");"
u=$.b4
if(typeof u!=="number")return u.C()
$.b4=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+", "+o+");"
u=$.b4
if(typeof u!=="number")return u.C()
$.b4=u+1
return new Function(n+u+"}")()},
lD:function(a,b,c,d,e,f,g){return H.nu(a,b,H.a4(c),d,!!e,!!f,g)},
l5:function(a){return a.a},
lR:function(a){return a.c},
fJ:function(a){var u,t,s,r=new H.cy("self","target","receiver","name"),q=J.le(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
E:function(a){if(a==null)H.p9("boolean expression must not be null")
return a},
J:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b1(a,"String"))},
pi:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b1(a,"double"))},
mS:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b1(a,"num"))},
lA:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b1(a,"bool"))},
a4:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b1(a,"int"))},
mU:function(a,b){throw H.c(H.b1(a,H.cu(H.J(b).substring(2))))},
pA:function(a,b){throw H.c(H.nq(a,H.cu(H.J(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.S(a)[b])return a
H.mU(a,b)},
q:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.S(a)[b]
else u=!0
if(u)return a
H.pA(a,b)},
kM:function(a){if(a==null)return a
if(!!J.S(a).$ib)return a
throw H.c(H.b1(a,"List<dynamic>"))},
mQ:function(a,b){var u
if(a==null)return a
u=J.S(a)
if(!!u.$ib)return a
if(u[b])return a
H.mU(a,b)},
mM:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a4(u)]
else return a.$S()}return},
fv:function(a,b){var u
if(typeof a=="function")return!0
u=H.mM(J.S(a))
if(u==null)return!1
return H.mB(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lw)return a
$.lw=!0
try{if(H.fv(a,b))return a
u=H.kZ(b)
t=H.b1(a,u)
throw H.c(t)}finally{$.lw=!1}},
lE:function(a,b){if(a!=null&&!H.lC(a,b))H.B(H.b1(a,H.kZ(b)))
return a},
b1:function(a,b){return new H.j2("TypeError: "+P.dN(a)+": type '"+H.mH(a)+"' is not a subtype of type '"+b+"'")},
nq:function(a,b){return new H.fK("CastError: "+P.dN(a)+": type '"+H.mH(a)+"' is not a subtype of type '"+b+"'")},
mH:function(a){var u,t=J.S(a)
if(!!t.$icC){u=H.mM(t)
if(u!=null)return H.kZ(u)
return"Closure"}return H.cc(a)},
p9:function(a){throw H.c(new H.jC(a))},
pG:function(a){throw H.c(new P.fU(H.J(a)))},
o2:function(a){return new H.il(a)},
mN:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bX:function(a){if(a==null)return
return a.$ti},
qo:function(a,b,c){return H.ct(a["$a"+H.j(c)],H.bX(b))},
bW:function(a,b,c,d){var u
H.J(c)
H.a4(d)
u=H.ct(a["$a"+H.j(c)],H.bX(b))
return u==null?null:u[d]},
am:function(a,b,c){var u
H.J(b)
H.a4(c)
u=H.ct(a["$a"+H.j(b)],H.bX(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.a4(b)
u=H.bX(a)
return u==null?null:u[b]},
kZ:function(a){return H.bV(a,null)},
bV:function(a,b){var u,t
H.l(b,"$ib",[P.h],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cu(a[0].name)+H.lz(a,1,b)
if(typeof a=="function")return H.cu(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a4(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.j(b[t])}if('func' in a)return H.oJ(a,b)
if('futureOr' in a)return"FutureOr<"+H.bV("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oJ:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.h]
H.l(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.e(a0,n)
p=C.b.C(p,a0[n])
m=u[q]
if(m!=null&&m!==P.T)p+=" extends "+H.bV(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bV(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bV(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bV(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.pk(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.J(b[h])
j=j+i+H.bV(e[d],a0)+(" "+H.j(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
lz:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.h],"$ab")
if(a==null)return""
u=new P.ai("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bV(p,c)}return"<"+u.i(0)+">"},
ct:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lB:function(a,b,c,d){var u,t
H.J(b)
H.kM(c)
H.J(d)
if(a==null)return!1
u=H.bX(a)
t=J.S(a)
if(t[b]==null)return!1
return H.mK(H.ct(t[d],u),null,c,null)},
l:function(a,b,c,d){H.J(b)
H.kM(c)
H.J(d)
if(a==null)return a
if(H.lB(a,b,c,d))return a
throw H.c(H.b1(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cu(b.substring(2))+H.lz(c,0,null),v.mangledGlobalNames)))},
mK:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aQ(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aQ(a[t],b,c[t],d))return!1
return!0},
qm:function(a,b,c){return a.apply(b,H.ct(J.S(b)["$a"+H.j(c)],H.bX(b)))},
mP:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="T"||a.name==="L"||a===-1||a===-2||H.mP(u)}return!1},
lC:function(a,b){var u,t
if(a==null)return b==null||b.name==="T"||b.name==="L"||b===-1||b===-2||H.mP(b)
if(b==null||b===-1||b.name==="T"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lC(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fv(a,b)}u=J.S(a).constructor
t=H.bX(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aQ(u,null,b,null)},
C:function(a,b){if(a!=null&&!H.lC(a,b))throw H.c(H.b1(a,H.kZ(b)))
return a},
aQ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="T"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="T"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aQ(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="L")return!0
if('func' in c)return H.mB(a,b,c,d)
if('func' in a)return c.name==="bH"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aQ("type" in a?a.type:l,b,s,d)
else if(H.aQ(a,b,s,d))return!0
else{if(!('$i'+"cI" in t.prototype))return!1
r=t.prototype["$a"+"cI"]
q=H.ct(r,u?a.slice(1):l)
return H.aQ(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mK(H.ct(m,u),b,p,d)},
mB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aQ(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aQ(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aQ(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aQ(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.py(h,b,g,d)},
py:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aQ(c[s],d,a[s],b))return!1}return!0},
qn:function(a,b,c){Object.defineProperty(a,H.J(b),{value:c,enumerable:false,writable:true,configurable:true})},
pw:function(a){var u,t,s,r,q=H.J($.mO.$1(a)),p=$.kF[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kL[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.J($.mJ.$2(a,q))
if(q!=null){p=$.kF[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kL[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kY(u)
$.kF[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kL[q]=u
return u}if(s==="-"){r=H.kY(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mT(a,u)
if(s==="*")throw H.c(P.jb(q))
if(v.leafTags[q]===true){r=H.kY(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mT(a,u)},
mT:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lG(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kY:function(a){return J.lG(a,!1,null,!!a.$iM)},
px:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kY(u)
else return J.lG(u,c,null,null)},
ps:function(){if(!0===$.lF)return
$.lF=!0
H.pt()},
pt:function(){var u,t,s,r,q,p,o,n
$.kF=Object.create(null)
$.kL=Object.create(null)
H.pr()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mV.$1(q)
if(p!=null){o=H.px(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pr:function(){var u,t,s,r,q,p,o=C.G()
o=H.cn(C.H,H.cn(C.I,H.cn(C.v,H.cn(C.v,H.cn(C.J,H.cn(C.K,H.cn(C.L(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mO=new H.kI(r)
$.mJ=new H.kJ(q)
$.mV=new H.kK(p)},
cn:function(a,b){return a(b)||b},
nF:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a6("Illegal RegExp pattern ("+String(r)+")",a,null))},
pD:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
pj:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mW:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lJ:function(a,b,c){var u=H.pE(a,b,c)
return u},
pE:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mW(b),'g'),H.pj(c))},
fO:function fO(){},
fP:function fP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j0:function j0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i1:function i1(a,b){this.a=a
this.b=b},
hn:function hn(a,b,c){this.a=a
this.b=b
this.c=c},
jc:function jc(a){this.a=a},
l1:function l1(a){this.a=a},
f5:function f5(a){this.a=a
this.b=null},
cC:function cC(){},
iJ:function iJ(){},
iz:function iz(){},
cy:function cy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j2:function j2(a){this.a=a},
fK:function fK(a){this.a=a},
il:function il(a){this.a=a},
jC:function jC(a){this.a=a},
a3:function a3(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hq:function hq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hr:function hr(a,b){this.a=a
this.$ti=b},
hs:function hs(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
hm:function hm(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cl:function(a){return a},
nN:function(a){return new Int8Array(a)},
bl:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cp(b,a))},
oH:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.ph(a,b,c))
return b},
cQ:function cQ(){},
bN:function bN(){},
e1:function e1(){},
cR:function cR(){},
e2:function e2(){},
hV:function hV(){},
hW:function hW(){},
hX:function hX(){},
hY:function hY(){},
hZ:function hZ(){},
e3:function e3(){},
cS:function cS(){},
df:function df(){},
dg:function dg(){},
dh:function dh(){},
di:function di(){},
pk:function(a){return J.lY(a?Object.keys(a):[],null)},
pz:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lG:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kG:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lF==null){H.ps()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.jb("Return interceptor for "+H.j(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lK()]
if(r!=null)return r
r=H.pw(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.lK(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
nE:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.l4(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ah(a,0,4294967295,"length",null))
return J.lY(new Array(a),b)},
lY:function(a,b){return J.le(H.d(a,[b]))},
le:function(a){H.kM(a)
a.fixed$length=Array
return a},
S:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dQ.prototype
return J.dP.prototype}if(typeof a=="string")return J.bL.prototype
if(a==null)return J.dR.prototype
if(typeof a=="boolean")return J.hl.prototype
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bM.prototype
return a}if(a instanceof P.T)return a
return J.kG(a)},
dt:function(a){if(typeof a=="string")return J.bL.prototype
if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bM.prototype
return a}if(a instanceof P.T)return a
return J.kG(a)},
fw:function(a){if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bM.prototype
return a}if(a instanceof P.T)return a
return J.kG(a)},
pm:function(a){if(typeof a=="number")return J.c7.prototype
if(a==null)return a
if(!(a instanceof P.T))return J.bT.prototype
return a},
pn:function(a){if(typeof a=="number")return J.c7.prototype
if(typeof a=="string")return J.bL.prototype
if(a==null)return a
if(!(a instanceof P.T))return J.bT.prototype
return a},
du:function(a){if(typeof a=="string")return J.bL.prototype
if(a==null)return a
if(!(a instanceof P.T))return J.bT.prototype
return a},
cr:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bM.prototype
return a}if(a instanceof P.T)return a
return J.kG(a)},
a5:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.S(a).q(a,b)},
b3:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.pm(a).av(a,b)},
dy:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pv(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dt(a).j(a,b)},
l2:function(a,b,c){return J.fw(a).k(a,b,c)},
nh:function(a,b){return J.du(a).D(a,b)},
ni:function(a,b,c){return J.cr(a).hA(a,b,c)},
nj:function(a,b,c,d){return J.cr(a).i2(a,b,c,d)},
nk:function(a,b){return J.du(a).a1(a,b)},
l3:function(a,b){return J.pn(a).ig(a,b)},
fx:function(a,b){return J.fw(a).J(a,b)},
nl:function(a,b,c,d){return J.cr(a).iw(a,b,c,d)},
lM:function(a,b){return J.fw(a).B(a,b)},
nm:function(a){return J.cr(a).gib(a)},
cw:function(a){return J.cr(a).gcc(a)},
dz:function(a){return J.S(a).gH(a)},
bz:function(a){return J.fw(a).gT(a)},
aE:function(a){return J.dt(a).gn(a)},
lN:function(a){return J.fw(a).j0(a)},
nn:function(a,b){return J.cr(a).j2(a,b)},
no:function(a,b,c){return J.du(a).u(a,b,c)},
np:function(a){return J.du(a).jc(a)},
ar:function(a){return J.S(a).i(a)},
a:function a(){},
hl:function hl(){},
dR:function dR(){},
dS:function dS(){},
i5:function i5(){},
bT:function bT(){},
bM:function bM(){},
b9:function b9(a){this.$ti=a},
lf:function lf(a){this.$ti=a},
as:function as(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c7:function c7(){},
dQ:function dQ(){},
dP:function dP(){},
bL:function bL(){}},P={
oj:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pa()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.co(new P.jE(s),1)).observe(u,{childList:true})
return new P.jD(s,u,t)}else if(self.setImmediate!=null)return P.pb()
return P.pc()},
ok:function(a){self.scheduleImmediate(H.co(new P.jF(H.n(a,{func:1,ret:-1})),0))},
ol:function(a){self.setImmediate(H.co(new P.jG(H.n(a,{func:1,ret:-1})),0))},
om:function(a){P.lm(C.o,H.n(a,{func:1,ret:-1}))},
lm:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.d.aa(a.a,1000)
return P.os(u<0?0:u,b)},
mi:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.bg]})
u=C.d.aa(a.a,1000)
return P.ot(u<0?0:u,b)},
os:function(a,b){var u=new P.fc()
u.eW(a,b)
return u},
ot:function(a,b){var u=new P.fc()
u.eX(a,b)
return u},
on:function(a,b){var u,t,s
b.a=1
try{a.eo(new P.jQ(b),new P.jR(b),null)}catch(s){u=H.aj(s)
t=H.cs(s)
P.pB(new P.jS(b,u,t))}},
mq:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaP")
if(u>=4){t=b.c4()
b.a=a.a
b.c=a.c
P.dd(b,t)}else{t=H.f(b.c,"$ibk")
b.a=2
b.c=a
a.dm(t)}},
dd:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$ian")
g=g.b
r=s.a
q=s.b
g.toString
P.kB(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.dd(h.a,b)}g=h.a
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
P.kB(i,i,g,r,q)
return}l=$.a1
if(l!=n)$.a1=n
else l=i
g=b.c
if(g===8)new P.jW(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jV(u,b,o).$0()}else if((g&2)!==0)new P.jU(h,u,b).$0()
if(l!=null)$.a1=l
g=u.b
if(!!J.S(g).$icI){if(g.a>=4){k=H.f(q.c,"$ibk")
q.c=null
b=q.br(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.mq(g,q)
return}}j=b.b
k=H.f(j.c,"$ibk")
j.c=null
b=j.br(k)
g=u.a
r=u.b
if(!g){H.C(r,H.r(j,0))
j.a=4
j.c=r}else{H.f(r,"$ian")
j.a=8
j.c=r}h.a=j
g=j}},
p5:function(a,b){if(H.fv(a,{func:1,args:[P.T,P.av]}))return H.n(a,{func:1,ret:null,args:[P.T,P.av]})
if(H.fv(a,{func:1,args:[P.T]}))return H.n(a,{func:1,ret:null,args:[P.T]})
throw H.c(P.l4(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
p4:function(){var u,t
for(;u=$.cm,u!=null;){$.ds=null
t=u.b
$.cm=t
if(t==null)$.dr=null
u.a.$0()}},
p8:function(){$.lx=!0
try{P.p4()}finally{$.ds=null
$.lx=!1
if($.cm!=null)$.lL().$1(P.mL())}},
mG:function(a){var u=new P.ey(H.n(a,{func:1,ret:-1}))
if($.cm==null){$.cm=$.dr=u
if(!$.lx)$.lL().$1(P.mL())}else $.dr=$.dr.b=u},
p7:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cm
if(u==null){P.mG(a)
$.ds=$.dr
return}t=new P.ey(a)
s=$.ds
if(s==null){t.b=u
$.cm=$.ds=t}else{t.b=s.b
$.ds=s.b=t
if(t.b==null)$.dr=t}},
pB:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a1
if(C.f===u){P.kD(t,t,C.f,a)
return}u.toString
P.kD(t,t,u,H.n(u.c8(a),s))},
mh:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a1
if(u===C.f){u.toString
return P.lm(a,b)}return P.lm(a,H.n(u.c8(b),t))},
o8:function(a,b){var u,t,s={func:1,ret:-1,args:[P.bg]}
H.n(b,s)
u=$.a1
if(u===C.f){u.toString
return P.mi(a,b)}t=u.dF(b,P.bg)
$.a1.toString
return P.mi(a,H.n(t,s))},
kB:function(a,b,c,d,e){var u={}
u.a=d
P.p7(new P.kC(u,e))},
mC:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a1
if(t===c)return d.$0()
$.a1=c
u=t
try{t=d.$0()
return t}finally{$.a1=u}},
mD:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.C(e,g)
t=$.a1
if(t===c)return d.$1(e)
$.a1=c
u=t
try{t=d.$1(e)
return t}finally{$.a1=u}},
p6:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
t=$.a1
if(t===c)return d.$2(e,f)
$.a1=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a1=u}},
kD:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.c8(d):c.ic(d,-1)
P.mG(d)},
jE:function jE(a){this.a=a},
jD:function jD(a,b,c){this.a=a
this.b=b
this.c=c},
jF:function jF(a){this.a=a},
jG:function jG(a){this.a=a},
fc:function fc(){this.c=0},
kj:function kj(a,b){this.a=a
this.b=b},
ki:function ki(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bk:function bk(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aP:function aP(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jP:function jP(a,b){this.a=a
this.b=b},
jT:function jT(a,b){this.a=a
this.b=b},
jQ:function jQ(a){this.a=a},
jR:function jR(a){this.a=a},
jS:function jS(a,b,c){this.a=a
this.b=b
this.c=c},
jW:function jW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jX:function jX(a){this.a=a},
jV:function jV(a,b,c){this.a=a
this.b=b
this.c=c},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
ey:function ey(a){this.a=a
this.b=null},
iC:function iC(){},
iE:function iE(a,b){this.a=a
this.b=b},
iF:function iF(a,b){this.a=a
this.b=b},
d_:function d_(){},
iD:function iD(){},
bg:function bg(){},
an:function an(a,b){this.a=a
this.b=b},
ks:function ks(){},
kC:function kC(a,b){this.a=a
this.b=b},
k2:function k2(){},
k4:function k4(a,b,c){this.a=a
this.b=b
this.c=c},
k3:function k3(a,b){this.a=a
this.b=b},
k5:function k5(a,b,c){this.a=a
this.b=b
this.c=c},
nH:function(a,b){return new H.a3([a,b])},
li:function(a,b){return new H.a3([a,b])},
nI:function(a){return H.pl(a,new H.a3([null,null]))},
dV:function(a){return new P.k0([a])},
lt:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
or:function(a,b,c){var u=new P.eN(a,b,[c])
u.c=a.e
return u},
nC:function(a,b,c){var u,t
if(P.ly(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.h])
C.a.h($.ax,a)
try{P.oK(a,u)}finally{if(0>=$.ax.length)return H.e($.ax,-1)
$.ax.pop()}t=P.mf(b,H.mQ(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
lc:function(a,b,c){var u,t
if(P.ly(a))return b+"..."+c
u=new P.ai(b)
C.a.h($.ax,a)
try{t=u
t.a=P.mf(t.a,a,", ")}finally{if(0>=$.ax.length)return H.e($.ax,-1)
$.ax.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ly:function(a){var u,t
for(u=$.ax.length,t=0;t<u;++t)if(a===$.ax[t])return!0
return!1},
oK:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.h],"$ab")
u=a.gT(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.v())return
r=H.j(u.gI(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.v()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gI(u);++s
if(!u.v()){if(s<=4){C.a.h(b,H.j(o))
return}q=H.j(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gI(u);++s
for(;u.v();o=n,n=m){m=u.gI(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.j(o)
q=H.j(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
lZ:function(a,b,c){var u=P.nH(b,c)
a.B(0,new P.ht(u,b,c))
return u},
m_:function(a,b){var u,t,s=P.dV(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t)s.h(0,H.C(a[t],b))
return s},
lk:function(a){var u,t={}
if(P.ly(a))return"{...}"
u=new P.ai("")
try{C.a.h($.ax,a)
u.a+="{"
t.a=!0
J.lM(a,new P.hx(t,u))
u.a+="}"}finally{if(0>=$.ax.length)return H.e($.ax,-1)
$.ax.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
k0:function k0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cj:function cj(a){this.a=a
this.c=this.b=null},
eN:function eN(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ht:function ht(a,b,c){this.a=a
this.b=b
this.c=c},
hu:function hu(){},
x:function x(){},
hw:function hw(){},
hx:function hx(a,b){this.a=a
this.b=b},
af:function af(){},
kk:function kk(){},
hy:function hy(){},
eq:function eq(a,b){this.a=a
this.$ti=b},
k7:function k7(){},
eO:function eO(){},
fi:function fi(){},
oc:function(a,b,c,d){H.l(b,"$ib",[P.m],"$ab")
if(b instanceof Uint8Array)return P.od(!1,b,c,d)
return},
od:function(a,b,c,d){var u,t,s=$.n9()
if(s==null)return
u=0===c
if(u&&!0)return P.lp(s,b)
t=b.length
d=P.bP(c,d,t)
if(u&&d===t)return P.lp(s,b)
return P.lp(s,b.subarray(c,d))},
lp:function(a,b){if(P.of(b))return
return P.og(a,b)},
og:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aj(t)}return},
of:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
oe:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aj(t)}return},
mF:function(a,b,c){var u,t,s
H.l(a,"$ib",[P.m],"$ab")
for(u=J.dt(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.ao()
if((s&127)!==s)return t-b}return c-b},
lP:function(a,b,c,d,e,f){if(C.d.bn(f,4)!==0)throw H.c(P.a6("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a6("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a6("Invalid base64 padding, more than two '=' characters",a,b))},
fG:function fG(){},
fH:function fH(){},
c2:function c2(){},
bD:function bD(){},
h3:function h3(){},
hi:function hi(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hh:function hh(a){this.a=a},
jl:function jl(){},
jn:function jn(){},
kq:function kq(a){this.b=0
this.c=a},
jm:function jm(a){this.a=a},
kp:function kp(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
dv:function(a,b,c){var u
H.n(b,{func:1,ret:P.m,args:[P.h]})
u=H.nX(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a6(a,null,null))},
nA:function(a){if(a instanceof H.cC)return a.i(0)
return"Instance of '"+H.cc(a)+"'"},
nJ:function(a,b,c){var u,t
H.C(b,c)
u=J.nE(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.k(u,t,b)
return H.l(u,"$ib",[c],"$ab")},
lj:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bz(a);u.v();)C.a.h(s,H.C(u.gI(u),c))
if(b)return s
return H.l(J.le(s),"$ib",t,"$ab")},
d0:function(a,b,c){var u,t=P.m
H.l(a,"$ii",[t],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.l(a,"$ib9",[t],"$ab9")
u=a.length
c=P.bP(b,c,u)
return H.m9(b>0||c<u?C.a.eD(a,b,c):a)}if(!!J.S(a).$icS)return H.nZ(a,b,P.bP(b,c,a.length))
return P.o6(a,b,c)},
o6:function(a,b,c){var u,t,s,r,q=null
H.l(a,"$ii",[P.m],"$ai")
if(b<0)throw H.c(P.ah(b,0,J.aE(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.ah(c,b,J.aE(a),q,q))
t=J.bz(a)
for(s=0;s<b;++s)if(!t.v())throw H.c(P.ah(b,0,s,q,q))
r=[]
if(u)for(;t.v();)r.push(t.gI(t))
else for(s=b;s<c;++s){if(!t.v())throw H.c(P.ah(c,b,s,q,q))
r.push(t.gI(t))}return H.m9(r)},
o0:function(a){return new H.hm(a,H.nF(a,!1,!0,!1))},
mf:function(a,b,c){var u=J.bz(b)
if(!u.v())return a
if(c.length===0){do a+=H.j(u.gI(u))
while(u.v())}else{a+=H.j(u.gI(u))
for(;u.v();)a=a+c+H.j(u.gI(u))}return a},
jg:function(){var u=H.nP()
if(u!=null)return P.ob(u)
throw H.c(P.K("'Uri.base' is not supported"))},
fj:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.l(a,"$ib",[P.m],"$ab")
if(c===C.h){u=$.nf().b
if(typeof b!=="string")H.B(H.aR(b))
u=u.test(b)}else u=!1
if(u)return b
H.C(b,H.am(c,"c2",0))
t=c.giv().cd(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.cd(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nw:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nx:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dJ:function(a){if(a>=10)return""+a
return"0"+a},
lU:function(a,b){return new P.bF(1e6*b+1000*a)},
dN:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ar(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nA(a)},
dB:function(a){return new P.aS(!1,null,null,a)},
l4:function(a,b,c){return new P.aS(!0,a,b,c)},
ic:function(a,b){return new P.ce(null,null,!0,a,b,"Value not in range")},
ah:function(a,b,c,d,e){return new P.ce(b,c,!0,a,d,"Invalid value")},
bP:function(a,b,c){if(0>a||a>c)throw H.c(P.ah(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ah(b,a,c,"end",null))
return b}return c},
ma:function(a,b){if(typeof a!=="number")return a.R()
if(a<0)throw H.c(P.ah(a,0,null,b,null))},
a_:function(a,b,c,d,e){var u=H.a4(e==null?J.aE(b):e)
return new P.hk(u,!0,a,c,"Index out of range")},
K:function(a){return new P.jd(a)},
jb:function(a){return new P.ja(a)},
me:function(a){return new P.cZ(a)},
b5:function(a){return new P.fN(a)},
D:function(a){return new P.eG(a)},
a6:function(a,b,c){return new P.hc(a,b,c)},
nK:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.m]})
u=H.d([],[c])
C.a.sn(u,a)
for(t=0;t<a;++t)C.a.k(u,t,b.$1(t))
return u},
lI:function(a){H.pz(a)},
ob:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.D(a,4)^58)*3|C.b.D(a,0)^100|C.b.D(a,1)^97|C.b.D(a,2)^116|C.b.D(a,3)^97)>>>0
if(u===0)return P.mk(e<e?C.b.u(a,0,e):a,5,f).gev()
else if(u===32)return P.mk(C.b.u(a,5,e),0,f).gev()}t=new Array(8)
t.fixed$length=Array
s=H.d(t,[P.m])
C.a.k(s,0,0)
C.a.k(s,1,-1)
C.a.k(s,2,-1)
C.a.k(s,7,-1)
C.a.k(s,3,0)
C.a.k(s,4,0)
C.a.k(s,5,e)
C.a.k(s,6,e)
if(P.mE(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.je()
if(r>=0)if(P.mE(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.C()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.R()
if(typeof n!=="number")return H.H(n)
if(m<n)n=m
if(typeof o!=="number")return o.R()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.R()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.R()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.ai(a,"..",o)))j=n>o+2&&C.b.ai(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.ai(a,"file",0)){if(q<=0){if(!C.b.ai(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.u(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.b0(a,o,n,"/");++e
n=h}k="file"}else if(C.b.ai(a,"http",0)){if(t&&p+3===o&&C.b.ai(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.b0(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.ai(a,"https",0)){if(t&&p+4===o&&C.b.ai(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.b0(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.u(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.ka(a,r,q,p,o,n,m,k)}return P.ou(a,0,e,r,q,p,o,n,m,k)},
mm:function(a){var u=P.h
return C.a.iz(H.d(a.split("&"),[u]),P.li(u,u),new P.jj(C.h),[P.y,P.h,P.h])},
oa:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jf(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.a1(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.dv(C.b.u(a,s,t),n,n)
if(typeof p!=="number")return p.av()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.e(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.dv(C.b.u(a,s,c),n,n)
if(typeof p!=="number")return p.av()
if(p>255)k.$2(l,s)
if(r>=u)return H.e(j,r)
j[r]=p
return j},
ml:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.jh(a)
t=new P.ji(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.m])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.a1(a,r)
if(n===58){if(r===b){++r
if(C.b.a1(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaz(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.oa(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.d.aX(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
ou:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oB(a,b,d)
else{if(d===b)P.dn(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oC(a,u,e-1):""
s=P.oy(a,e,f,!1)
if(typeof f!=="number")return f.C()
r=f+1
if(typeof g!=="number")return H.H(g)
q=r<g?P.oA(P.dv(C.b.u(a,r,g),new P.kl(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oz(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.R()
o=h<i?P.lu(a,h+1,i,n):n
return new P.ck(j,t,s,q,p,o,i<c?P.ox(a,i+1,c):n)},
mu:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dn:function(a,b,c){throw H.c(P.a6(c,a,b))},
oA:function(a,b){if(a!=null&&a===P.mu(b))return
return a},
oy:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.a1(a,b)===91){if(typeof c!=="number")return c.L()
u=c-1
if(C.b.a1(a,u)!==93)P.dn(a,b,"Missing end `]` to match `[` in host")
P.ml(a,b+1,u)
return C.b.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.H(c)
t=b
for(;t<c;++t)if(C.b.a1(a,t)===58){P.ml(a,b,c)
return"["+a+"]"}return P.oE(a,b,c)},
oE:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.H(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.a1(a,u)
if(q===37){p=P.mA(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ai("")
n=C.b.u(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.u(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.z,o)
o=(C.z[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ai("")
if(t<u){s.a+=C.b.u(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.dn(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.a1(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ai("")
n=C.b.u(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mv(q)
u+=l
t=u}}}}if(s==null)return C.b.u(a,b,c)
if(t<c){n=C.b.u(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oB:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mx(C.b.D(a,b)))P.dn(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.D(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dn(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.u(a,b,c)
return P.ov(t?a.toLowerCase():a)},
ov:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oC:function(a,b,c){return P.dp(a,b,c,C.W,!1)},
oz:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dp(a,b,c,C.A,!0):C.j.jt(d,new P.km(),P.h).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a5(u,"/"))u="/"+u
return P.oD(u,e,f)},
oD:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a5(a,"/"))return P.oF(a,!u||c)
return P.oG(a)},
lu:function(a,b,c,d){var u,t={}
H.l(d,"$iy",[P.h,null],"$ay")
if(a!=null){if(d!=null)throw H.c(P.dB("Both query and queryParameters specified"))
return P.dp(a,b,c,C.l,!0)}if(d==null)return
u=new P.ai("")
t.a=""
d.B(0,new P.kn(new P.ko(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
ox:function(a,b,c){return P.dp(a,b,c,C.l,!0)},
mA:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.a1(a,b+1)
t=C.b.a1(a,p)
s=H.kH(u)
r=H.kH(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.aX(q,4)
if(p>=8)return H.e(C.n,p)
p=(C.n[p]&1<<(q&15))!==0}else p=!1
if(p)return H.cd(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.u(a,b,b+3).toUpperCase()
return},
mv:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.m])
C.a.k(t,0,37)
C.a.k(t,1,C.b.D(o,a>>>4))
C.a.k(t,2,C.b.D(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.m])
for(q=0;--r,r>=0;s=128){p=C.d.hM(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.D(o,p>>>4))
C.a.k(t,q+2,C.b.D(o,p&15))
q+=3}}return P.d0(t,0,null)},
dp:function(a,b,c,d,e){var u=P.mz(a,b,c,H.l(d,"$ib",[P.m],"$ab"),e)
return u==null?C.b.u(a,b,c):u},
mz:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.l(d,"$ib",[P.m],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.R()
if(typeof c!=="number")return H.H(c)
if(!(t<c))break
c$0:{q=C.b.a1(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mA(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.k,p)
p=(C.k[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dn(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.a1(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mv(q)}}if(r==null)r=new P.ai("")
r.a+=C.b.u(a,s,t)
r.a+=H.j(o)
if(typeof n!=="number")return H.H(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.R()
if(s<c)r.a+=C.b.u(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
my:function(a){if(C.b.a5(a,"."))return!0
return C.b.e8(a,"/.")!==-1},
oG:function(a){var u,t,s,r,q,p,o
if(!P.my(a))return a
u=H.d([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.a5(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oF:function(a,b){var u,t,s,r,q,p
if(!P.my(a))return!b?P.mw(a):a
u=H.d([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaz(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaz(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.k(u,0,P.mw(u[0]))}return C.a.m(u,"/")},
mw:function(a){var u,t,s,r=a.length
if(r>=2&&P.mx(J.nh(a,0)))for(u=1;u<r;++u){t=C.b.D(a,u)
if(t===58)return C.b.u(a,0,u)+"%3A"+C.b.ac(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.e(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
ow:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.D(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dB("Invalid URL encoding"))}}return u},
lv:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.D(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.u(a,b,c)
else r=new H.t(C.b.u(a,b,c))}else{r=H.d([],[P.m])
for(s=a.length,q=b;q<c;++q){t=C.b.D(a,q)
if(t>127)throw H.c(P.dB("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.dB("Truncated URI"))
C.a.h(r,P.ow(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.l(r,"$ib",[P.m],"$ab")
return new P.jm(!1).cd(r)},
mx:function(a){var u=a|32
return 97<=u&&u<=122},
mk:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.m])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.D(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a6(m,a,t))}}if(s<0&&t>b)throw H.c(P.a6(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.D(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaz(l)
if(r!==44||t!==p+7||!C.b.ai(a,"base64",p+1))throw H.c(P.a6("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.iL(0,a,o,u)
else{n=P.mz(a,o,u,C.l,!0)
if(n!=null)a=C.b.b0(a,o,u,n)}return new P.je(a,l,c)},
oI:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nK(22,new P.kw(),P.U),n=new P.kv(o),m=new P.kx(),l=new P.ky(),k=H.f(n.$2(0,225),"$iU")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(14,225),"$iU")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(15,225),"$iU")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(1,225),"$iU")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(2,235),"$iU")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(3,235),"$iU")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(4,229),"$iU")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(5,229),"$iU")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(6,231),"$iU")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(7,231),"$iU")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.f(n.$2(8,8),"$iU"),"]",5)
k=H.f(n.$2(9,235),"$iU")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(16,235),"$iU")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(17,235),"$iU")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(10,235),"$iU")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(18,235),"$iU")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(19,235),"$iU")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(11,235),"$iU")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(12,236),"$iU")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.f(n.$2(13,237),"$iU")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.f(n.$2(20,245),"$iU"),"az",21)
k=H.f(n.$2(21,245),"$iU")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mE:function(a,b,c,d,e){var u,t,s,r,q
H.l(e,"$ib",[P.m],"$ab")
u=$.ng()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.b.D(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.k(e,q>>>5,t)}return d},
R:function R(){},
ay:function ay(a,b){this.a=a
this.b=b},
G:function G(){},
bF:function bF(a){this.a=a},
h_:function h_(){},
h0:function h0(){},
bG:function bG(){},
fA:function fA(){},
e5:function e5(){},
aS:function aS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ce:function ce(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hk:function hk(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
jd:function jd(a){this.a=a},
ja:function ja(a){this.a=a},
cZ:function cZ(a){this.a=a},
fN:function fN(a){this.a=a},
i4:function i4(){},
eg:function eg(){},
fU:function fU(a){this.a=a},
eG:function eG(a){this.a=a},
hc:function hc(a,b,c){this.a=a
this.b=b
this.c=c},
bH:function bH(){},
m:function m(){},
i:function i(){},
b8:function b8(){},
b:function b(){},
y:function y(){},
L:function L(){},
ac:function ac(){},
T:function T(){},
av:function av(){},
h:function h(){},
ai:function ai(a){this.a=a},
jj:function jj(a){this.a=a},
jf:function jf(a){this.a=a},
jh:function jh(a){this.a=a},
ji:function ji(a,b){this.a=a
this.b=b},
ck:function ck(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
kl:function kl(a,b){this.a=a
this.b=b},
km:function km(){},
ko:function ko(a,b){this.a=a
this.b=b},
kn:function kn(a){this.a=a},
je:function je(a,b,c){this.a=a
this.b=b
this.c=c},
kw:function kw(){},
kv:function kv(a){this.a=a},
kx:function kx(){},
ky:function ky(){},
ka:function ka(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jK:function jK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
pg:function(a){var u,t=J.S(a)
if(!!t.$ibo){u=t.gdK(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fh(a.data,a.height,a.width)},
pf:function(a){if(a instanceof P.fh)return{data:a.a,height:a.b,width:a.c}
return a},
bu:function(a){var u,t,s,r,q
if(a==null)return
u=P.li(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r){q=H.J(t[r])
u.k(0,q,a[q])}return u},
pe:function(a){var u={}
a.B(0,new P.kE(u))
return u},
kc:function kc(){},
kd:function kd(a,b){this.a=a
this.b=b},
fh:function fh(a,b,c){this.a=a
this.b=b
this.c=c},
kE:function kE(a){this.a=a},
f9:function f9(a,b){this.a=a
this.b=b},
h8:function h8(a,b){this.a=a
this.b=b},
h9:function h9(){},
ha:function ha(){},
k_:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oq:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k1:function k1(){},
ak:function ak(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bb:function bb(){},
hp:function hp(){},
be:function be(){},
i2:function i2(){},
i9:function i9(){},
cW:function cW(){},
iG:function iG(){},
p:function p(){},
bh:function bh(){},
j_:function j_(){},
eL:function eL(){},
eM:function eM(){},
eW:function eW(){},
eX:function eX(){},
f7:function f7(){},
f8:function f8(){},
ff:function ff(){},
fg:function fg(){},
U:function U(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(a){this.a=a},
fF:function fF(){},
bZ:function bZ(){},
i3:function i3(){},
ez:function ez(){},
dD:function dD(){},
e8:function e8(){},
cf:function cf(){},
ea:function ea(){},
ei:function ei(){},
eo:function eo(){},
iy:function iy(){},
f3:function f3(){},
f4:function f4(){}},W={
lO:function(){var u=document.createElement("a")
return u},
l6:function(){var u=document.createElement("canvas")
return u},
ny:function(a,b,c){var u=document.body,t=(u&&C.t).al(u,a,b,c)
t.toString
u=W.F
u=new H.da(new W.aq(t),H.n(new W.h2(),{func:1,ret:P.R,args:[u]}),[u])
return H.f(u.gaP(u),"$iO")},
nz:function(a){H.f(a,"$ik")
return"wheel"},
cF:function(a){var u,t,s,r="element tag unavailable"
try{u=J.cr(a)
t=u.gem(a)
if(typeof t==="string")r=u.gem(a)}catch(s){H.aj(s)}return r},
lb:function(a){var u=document.createElement("img")
if(a!=null)u.src=a
return u},
nB:function(a){var u,t=document.createElement("input"),s=H.f(t,"$icK")
try{s.type=a}catch(u){H.aj(u)}return s},
jZ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ms:function(a,b,c,d){var u=W.jZ(W.jZ(W.jZ(W.jZ(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a8:function(a,b,c,d,e){var u=W.mI(new W.jO(c),W.o)
if(u!=null&&!0)J.nj(a,b,u,!1)
return new W.jN(a,b,u,!1,[e])},
mr:function(a){var u=W.lO(),t=window.location
u=new W.bU(new W.k6(u,t))
u.eP(a)
return u},
oo:function(a,b,c,d){H.f(a,"$iO")
H.J(b)
H.J(c)
H.f(d,"$ibU")
return!0},
op:function(a,b,c,d){var u,t,s
H.f(a,"$iO")
H.J(b)
H.J(c)
u=H.f(d,"$ibU").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mt:function(){var u=P.h,t=P.m_(C.p,u),s=H.r(C.p,0),r=H.n(new W.kh(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.kg(t,P.dV(u),P.dV(u),P.dV(u),null)
t.eV(null,new H.hB(C.p,r,[s,u]),q,null)
return t},
mI:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a1
if(u===C.f)return a
return u.dF(a,b)},
w:function w(){},
fy:function fy(){},
dA:function dA(){},
fz:function fz(){},
cx:function cx(){},
c_:function c_(){},
bA:function bA(){},
c1:function c1(){},
cB:function cB(){},
bB:function bB(){},
cD:function cD(){},
fQ:function fQ(){},
W:function W(){},
cE:function cE(){},
fR:function fR(){},
b6:function b6(){},
b7:function b7(){},
fS:function fS(){},
fT:function fT(){},
fW:function fW(){},
aH:function aH(){},
fX:function fX(){},
dK:function dK(){},
dL:function dL(){},
fY:function fY(){},
fZ:function fZ(){},
jI:function jI(a,b){this.a=a
this.b=b},
O:function O(){},
h2:function h2(){},
o:function o(){},
k:function k(){},
aI:function aI(){},
cH:function cH(){},
h7:function h7(){},
hb:function hb(){},
aT:function aT(){},
hg:function hg(){},
c5:function c5(){},
bo:function bo(){},
c6:function c6(){},
cK:function cK(){},
ba:function ba(){},
dW:function dW(){},
hO:function hO(){},
cO:function cO(){},
hP:function hP(){},
hQ:function hQ(a){this.a=a},
hR:function hR(){},
hS:function hS(a){this.a=a},
aU:function aU(){},
hT:function hT(){},
a7:function a7(){},
aq:function aq(a){this.a=a},
F:function F(){},
cT:function cT(){},
aV:function aV(){},
i7:function i7(){},
ij:function ij(){},
ik:function ik(a){this.a=a},
im:function im(){},
aW:function aW(){},
iw:function iw(){},
aX:function aX(){},
ix:function ix(){},
aY:function aY(){},
iA:function iA(){},
iB:function iB(a){this.a=a},
aL:function aL(){},
bf:function bf(){},
eh:function eh(){},
iH:function iH(){},
iI:function iI(){},
d2:function d2(){},
aZ:function aZ(){},
aM:function aM(){},
iK:function iK(){},
iL:function iL(){},
iU:function iU(){},
b_:function b_(){},
b0:function b0(){},
iY:function iY(){},
iZ:function iZ(){},
bR:function bR(){},
jk:function jk(){},
jA:function jA(){},
bj:function bj(){},
db:function db(){},
dc:function dc(){},
jJ:function jJ(){},
eB:function eB(){},
jY:function jY(){},
eT:function eT(){},
kb:function kb(){},
ke:function ke(){},
jH:function jH(){},
jL:function jL(a){this.a=a},
jM:function jM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ls:function ls(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jN:function jN(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jO:function jO(a){this.a=a},
bU:function bU(a){this.a=a},
I:function I(){},
e4:function e4(a){this.a=a},
i0:function i0(a){this.a=a},
i_:function i_(a,b,c){this.a=a
this.b=b
this.c=c},
f0:function f0(){},
k8:function k8(){},
k9:function k9(){},
kg:function kg(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kh:function kh(){},
kf:function kf(){},
dO:function dO(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aB:function aB(){},
k6:function k6(a,b){this.a=a
this.b=b},
fk:function fk(a){this.a=a},
kr:function kr(a){this.a=a},
eA:function eA(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eU:function eU(){},
eV:function eV(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
dj:function dj(){},
dk:function dk(){},
f1:function f1(){},
f2:function f2(){},
f6:function f6(){},
fa:function fa(){},
fb:function fb(){},
dl:function dl(){},
dm:function dm(){},
fd:function fd(){},
fe:function fe(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){}},O={
l7:function(a){var u=new O.a2([a])
u.bp(a)
return u},
a2:function a2(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cN:function cN(){this.b=this.a=null},
dZ:function dZ(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hI:function hI(a,b){this.a=a
this.b=b},
hJ:function hJ(){},
hK:function hK(a,b){this.a=a
this.b=b},
hL:function hL(){},
hM:function hM(a,b){this.a=a
this.b=b},
hN:function hN(){},
hC:function hC(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cM:function cM(){},
hD:function hD(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
bc:function bc(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hF:function hF(){var _=this
_.e=_.d=_.c=_.b=null},
hG:function hG(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hH:function hH(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ec:function ec(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bQ:function bQ(){}},E={
lX:function(){var u=new E.ao()
u.a=""
u.b=!0
u.seO(0,O.l7(E.ao))
u.y.b2(u.giM(),u.giP())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sbI(0,null)
return u},
o1:function(a,b){var u=new E.ie(a)
u.eL(a,b)
return u},
o7:function(a,b,c,d,e){var u,t,s=J.S(a)
if(!!s.$ic1)return E.mg(a,!0,!0,!0,!1)
u=W.l6()
t=u.style
t.width="100%"
t.height="100%"
s.gcc(a).h(0,u)
return E.mg(u,!0,!0,!0,!1)},
mg:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ek(),j=H.f(C.i.cK(a,"webgl2",P.nI(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$icf")
if(j==null)H.B(P.D("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.o1(j,a)
u=new T.iQ(j)
u.b=H.a4(j.getParameter(3379))
u.c=H.a4(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.er(a)
t=new X.ho()
t.c=new X.aA(!1,!1,!1)
t.shv(P.dV(P.m))
u.b=t
t=new X.hU(u)
t.f=0
t.r=V.br()
t.x=V.br()
t.ch=t.Q=1
u.c=t
t=new X.hv(u)
t.r=0
t.x=V.br()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iX(u)
t.f=V.br()
t.r=V.br()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfg(H.d([],[[P.d_,P.T]]))
t=u.z
s=document
r=W.a7
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a8(s,"contextmenu",H.n(u.gfP(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a8(a,"focus",H.n(u.gfV(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a8(a,"blur",H.n(u.gfJ(),o),!1,p))
t=u.z
n=W.ba
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a8(s,"keyup",H.n(u.gfZ(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a8(s,"keydown",H.n(u.gfX(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a8(a,"mousedown",H.n(u.gh2(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a8(a,"mouseup",H.n(u.gh6(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a8(a,l,H.n(u.gh4(),q),!1,r))
n=u.z
m=W.bj;(n&&C.a).h(n,W.a8(a,H.J(W.nz(a)),H.n(u.gh8(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a8(s,l,H.n(u.gfR(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a8(s,"mouseup",H.n(u.gfT(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a8(s,"pointerlockchange",H.n(u.gha(),o),!1,p))
p=u.z
o=W.b0
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a8(a,"touchstart",H.n(u.ghq(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a8(a,"touchend",H.n(u.ghm(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a8(a,"touchmove",H.n(u.gho(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.ay(Date.now(),!1)
k.cy=0
k.dq()
return k},
fI:function fI(){},
ao:function ao(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ie:function ie(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ig:function ig(a){this.a=a},
ih:function ih(a){this.a=a},
ii:function ii(a){this.a=a},
ek:function ek(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iT:function iT(a){this.a=a}},Z={
lr:function(a,b,c){var u
H.l(c,"$ib",[P.m],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cl(c)),35044)
a.bindBuffer(b,null)
return new Z.ew(b,u)},
aO:function(a){return new Z.bt(a)},
ew:function ew(a,b){this.a=a
this.b=b},
dE:function dE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ex:function ex(a){this.a=a},
cA:function cA(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bI:function bI(a,b,c){this.a=a
this.b=b
this.c=c},
bt:function bt(a){this.a=a}},D={
P:function(){var u=new D.c3()
u.sak(null)
u.saV(null)
u.c=null
u.d=0
return u},
fL:function fL(){},
c3:function c3(){var _=this
_.d=_.c=_.b=_.a=null},
h5:function h5(a){this.a=a},
h6:function h6(a){this.a=a},
z:function z(){this.b=null},
bJ:function bJ(a){this.b=null
this.$ti=a},
bK:function bK(a){this.b=null
this.$ti=a},
N:function N(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bE:function bE(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ae:function ae(){},
dU:function dU(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
e7:function e7(){},
ef:function ef(){}},X={dF:function dF(a,b){this.a=a
this.b=b},dT:function dT(a,b){this.a=a
this.b=b},ho:function ho(){var _=this
_.d=_.c=_.b=_.a=null},dX:function dX(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hv:function hv(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aA:function aA(a,b,c){this.a=a
this.b=b
this.c=c},bq:function bq(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hU:function hU(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cP:function cP(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},i8:function i8(){},em:function em(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iX:function iX(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},er:function er(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
la:function(a){var u=new X.hd(),t=new V.aF(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.mc
if(t==null){t=V.mb(0,0,1,1)
$.mc=t}u.r=t
return u},
m4:function(a){var u,t,s=new X.e6()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gp().h(0,s.geY())
t=new D.N("mover",u,s.b,[U.ag])
t.b=!0
s.aw(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.V().a)){s.c=1.0471975511965976
t=new D.N("fov",t,1.0471975511965976,[P.G])
t.b=!0
s.aw(t)}t=s.d
if(!(Math.abs(t-0.1)<$.V().a)){s.d=0.1
t=new D.N("near",t,0.1,[P.G])
t.b=!0
s.aw(t)}t=s.e
if(!(Math.abs(t-2000)<$.V().a)){s.e=2000
t=new D.N("far",t,2000,[P.G])
t.b=!0
s.aw(t)}return s},
c0:function c0(){},
hd:function hd(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hj:function hj(){this.b=this.a=null},
e6:function e6(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
d1:function d1(){}},V={
pH:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bn(a-b,u)
return(a<0?a+u:a)+b},
Y:function(a,b,c){if(a==null)return C.b.an("null",c)
return C.b.an(C.e.ep(Math.abs(a-0)<$.V().a?0:a,b),c+b+1)},
cq:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.G],"$ab")
u=H.d([],[P.h])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.u)(a),++r){q=V.Y(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.k(u,p,C.b.an(u[p],s))}return u},
lH:function(a){return C.e.j9(Math.pow(2,C.S.cn(Math.log(H.pd(a))/Math.log(2))))},
c9:function(){var u=$.m1
return u==null?$.m1=V.bd(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bd:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.at(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
m0:function(a,b,c){var u=c.w(0,Math.sqrt(c.G(c))),t=b.bg(u),s=t.w(0,Math.sqrt(t.G(t))),r=u.bg(s),q=new V.Q(a.a,a.b,a.c),p=s.S(0).G(q),o=r.S(0).G(q),n=u.S(0).G(q)
return V.bd(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
br:function(){var u=$.m6
return u==null?$.m6=new V.aa(0,0):u},
m7:function(){var u=$.cU
return u==null?$.cU=new V.ap(0,0,0):u},
mb:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e9(a,b,c,d)},
ev:function(){var u=$.mp
return u==null?$.mp=new V.Q(0,0,0):u},
oh:function(){var u=$.jo
return u==null?$.jo=new V.Q(-1,0,0):u},
lq:function(){var u=$.jp
return u==null?$.jp=new V.Q(0,1,0):u},
oi:function(){var u=$.jq
return u==null?$.jq=new V.Q(0,0,1):u},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h4:function h4(a){this.a=a},
e0:function e0(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
at:function at(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aa:function aa(a,b){this.a=a
this.b=b},
ap:function ap(a,b,c){this.a=a
this.b=b
this.c=c},
bs:function bs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e9:function e9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
X:function X(a,b){this.a=a
this.b=b},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
a0:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.D("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.D(a,0)
t=C.b.D(b,0)
s=new V.id()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
v:function(a){var u=new V.io()
u.eM(a)
return u},
iW:function(){var u=new V.iV(),t=P.h
u.shP(new H.a3([t,V.cY]))
u.shS(new H.a3([t,V.d5]))
u.c=null
return u},
bm:function bm(){},
az:function az(){},
dY:function dY(){},
au:function au(){this.a=null},
id:function id(){this.b=this.a=null},
io:function io(){this.a=null},
cY:function cY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
el:function el(a,b,c){this.a=a
this.b=b
this.c=c},
d5:function d5(a){this.b=a
this.c=null},
iV:function iV(){this.c=this.b=this.a=null},
d6:function d6(a){this.b=a
this.a=this.c=null},
pC:function(a){P.o8(C.P,new V.l_(a))},
o3:function(a){var u=new V.is()
u.eN(a,!0)
return u},
bC:function bC(){},
l_:function l_(a){this.a=a},
fV:function fV(a){var _=this
_.a=a
_.d=_.c=_.b=null},
he:function he(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hf:function hf(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i6:function i6(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ia:function ia(a){this.a=a
this.c=null},
ib:function ib(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
is:function is(){this.b=this.a=null},
iu:function iu(a){this.a=a},
it:function it(a){this.a=a},
iv:function iv(a){this.a=a},
iM:function iM(a,b){this.a=a
this.c=null
this.d=b},
iO:function iO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iN:function iN(){}},U={
l8:function(){var u=new U.fM()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
lT:function(a){var u=new U.dH()
u.a=a
return u},
fM:function fM(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dH:function dH(){this.b=this.a=null},
cJ:function cJ(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ag:function ag(){},
es:function es(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
et:function et(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eu:function eu(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dG:function dG(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},dI:function dI(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},dM:function dM(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aC:function aC(){}},A={
nL:function(a,b){var u=a.aG,t=new A.e_(b,u)
t.cS(b,u)
t.eK(a,b)
return t},
nM:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.l(a9,"$ib",[A.aG],"$ab")
H.l(b0,"$ib",[A.aJ],"$ab")
H.l(b1,"$ib",[A.aK],"$ab")
u="MaterialLight_"+a0.gau(a0)+a1.gau(a1)+a2.gau(a2)+a3.gau(a3)+a4.gau(a4)+a5.gau(a5)+a6.gau(a6)+a7.gau(a7)+a8.gau(a8)+"_"
u+=a?"1":"0"
u+=b?"1":"0"
u+=c?"1":"0"
u=u+"0_"+e
t=a9.length
if(t>0){u+="_Dir"
for(s=0;s<a9.length;a9.length===t||(0,H.u)(a9),++s)u+="_"+H.j(a9[s].a)}t=b0.length
if(t>0){u+="_Point"
for(s=0;s<b0.length;b0.length===t||(0,H.u)(b0),++s)u+="_"+H.j(b0[s].a)}t=b1.length
if(t>0){u+="_Spot"
for(s=0;s<b1.length;b1.length===t||(0,H.u)(b1),++s)u+="_"+H.j(b1[s].a)}for(t=a9.length,r=0,q=!1,s=0;s<t;++s,q=!0)r+=a9[s].b
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
f=$.b2()
if(k){t=$.bx()
f=new Z.bt(f.a|t.a)}if(j){t=$.bw()
f=new Z.bt(f.a|t.a)}if(i){t=$.by()
f=new Z.bt(f.a|t.a)}if(h){t=$.bv()
f=new Z.bt(f.a|t.a)}return new A.hE(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,r,o,l,o,q,g,!0,!1,!1,n,q,m,k,j,i,!1,h,a,!1,c,!1,e,u.charCodeAt(0)==0?u:u,f)},
kz:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kA:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.kz(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.l0(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
oO:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.kz(b,t,"emission")
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
oL:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.kA(b,t,"ambient")
b.a+="\n"},
oM:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.kA(b,t,"diffuse")
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
oP:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.kA(b,t,"invDiffuse")
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
oV:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.kA(b,t,"specular")
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
oR:function(a,b){var u,t,s
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
oT:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.kz(b,t,"reflect")
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
oU:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.kz(b,t,"refract")
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
oN:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.j(u)
s=A.l0(t)
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
o=H.d([],r)
n=a.b
if(n.a||n.b||!1)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.d([],r)
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
c.a+="      highLight = intensity*("+C.a.m(m," + ")+");\n"}else c.a+="   highLight = "+C.a.m(m," + ")+";\n"
C.a.h(o,"highLight")}r=c.a+="   return lit.color*("+C.a.m(o," + ")+");\n"
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
oS:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.j(u)
s=A.l0(t)
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
l=H.d([],r)
C.a.h(l,"lit.color")
if(o)C.a.h(l,"attenuation")
if(u)C.a.h(l,"textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.m(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.d([],r)
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
k=H.d([],r)
r=a.c
if(r.a||r.b||!1)C.a.h(k,"diffuse(norm, normDir)")
r=a.d
if(r.a||r.b||!1)C.a.h(k,"invDiffuse(norm, normDir)")
r=a.e
if(r.a||r.b||!1)C.a.h(k,"specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.a.m(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.m(l," + ")+");\n"
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
oW:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.j(u)
s=A.l0(t)
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
j=H.d([],u)
if(n)C.a.h(j,"attenuation")
if(o)C.a.h(j,"scale")
if(m)C.a.h(j,"texture2D(txt2D, txtLoc).rgb")
else C.a.h(j,"vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.m(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.d([],u)
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
i=H.d([],u)
u=a.c
if(u.a||u.b||!1)C.a.h(i,"diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)C.a.h(i,"invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)C.a.h(i,"specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.a.m(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.m(j," + ")+");\n"
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
oQ:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.d([],[P.h])
u=a.b
if(u.a||u.b||!1)C.a.h(t,"ambientColor")
u=a.c
if(u.a||u.b||!1)C.a.h(t,"diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)C.a.h(t,"invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)C.a.h(t,"specular(norm, litVec)")
u=b.a+="   return "+C.a.m(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
oX:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.ai("")
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
A.oO(a,j)
A.oL(a,j)
A.oM(a,j)
A.oP(a,j)
A.oV(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.oT(a,j)
A.oU(a,j)}A.oR(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.oN(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.oS(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.oW(a,q[o],j)
A.oQ(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.d([],[P.h])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ac(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ac(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ac(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)C.a.h(n,"emissionColor()")
u=a.r
if(u.a||u.b||!1)C.a.h(n,"reflect(refl)")
u=a.x
if(u.a||u.b||!1)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.m(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
oY:function(a,b){var u,t,s
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
p_:function(a,b){var u
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
oZ:function(a,b){var u
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
p1:function(a,b){var u,t
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
p2:function(a,b){var u,t
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
p0:function(a,b){var u
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
p3:function(a,b){var u
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
l0:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.ac(a,1)},
ln:function(a,b,c,d,e){var u=new A.j3(a,c,e)
u.f=d
u.si_(P.nJ(d,0,P.m))
return u},
dC:function dC(a,b,c){this.a=a
this.b=b
this.c=c},
fB:function fB(a){this.a=a},
ad:function ad(a,b,c){this.a=a
this.b=b
this.c=c},
e_:function e_(a,b){var _=this
_.jk=_.dQ=_.dP=_.dO=_.aG=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.js=_.jr=_.jq=_.cm=_.cl=_.ck=_.cj=_.ci=_.cg=_.jp=_.e1=_.e0=_.jo=_.e_=_.dZ=_.dY=_.jn=_.dX=_.dW=_.dV=_.jm=_.dU=_.dT=_.jl=_.dS=_.dR=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aG:function aG(a,b){this.a=a
this.b=b},
aJ:function aJ(a,b){this.a=a
this.b=b},
aK:function aK(a,b){this.a=a
this.b=b},
hE:function hE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aG=b3
_.dO=b4},
cg:function cg(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ch:function ch(a,b,c,d,e,f,g,h,i,j){var _=this
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
ci:function ci(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ed:function ed(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
en:function en(){},
j8:function j8(a){this.a=a},
aN:function aN(a,b,c){this.a=a
this.c=b
this.d=c},
j5:function j5(a,b,c){this.a=a
this.c=b
this.d=c},
j6:function j6(a,b,c){this.a=a
this.c=b
this.d=c},
j7:function j7(a,b,c){this.a=a
this.c=b
this.d=c},
j3:function j3(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ab:function ab(a,b,c){this.a=a
this.c=b
this.d=c},
j4:function j4(a,b,c){this.a=a
this.c=b
this.d=c},
Z:function Z(a,b,c){this.a=a
this.c=b
this.d=c},
d7:function d7(a,b,c){this.a=a
this.c=b
this.d=c},
j9:function j9(a,b,c){this.a=a
this.c=b
this.d=c},
d8:function d8(a,b,c){this.a=a
this.c=b
this.d=c},
aw:function aw(a,b,c){this.a=a
this.c=b
this.d=c},
al:function al(a,b,c){this.a=a
this.c=b
this.d=c},
bS:function bS(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ku:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dq:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.Q(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.Q(u+a3,t+a1,s+a2)
q=new V.Q(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.Q(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.ku(i)
l=F.ku(j.b)
k=F.pF(d,a0,new F.kt(j,F.ku(j.c),F.ku(j.d),l,m,c),b)
if(k!=null)a.iK(k)},
pF:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.aD,P.G,P.G]})
if(a<1)return
if(b<1)return
u=F.ll()
t=H.d([],[F.aD])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.jr(g,g,new V.aF(p,0,0,1),g,g,new V.aa(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.ce(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.jr(g,g,new V.aF(j,i,h,1),g,g,new V.aa(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.ce(d))}}u.d.i4(a+1,b+1,t)
return u},
cG:function(a,b,c){var u=new F.a9(),t=a.a
if(t==null)H.B(P.D("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.B(P.D("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a7()
return u},
nG:function(a,b){var u=new F.bp(),t=a.a
if(t==null)H.B(P.D("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.B(P.D("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a7()
return u},
ll:function(){var u=new F.eb(),t=new F.js(u)
t.b=!1
t.si0(H.d([],[F.aD]))
u.a=t
t=new F.ir(u)
t.sc2(H.d([],[F.bO]))
u.b=t
t=new F.iq(u)
t.sfn(H.d([],[F.bp]))
u.c=t
t=new F.ip(u)
t.sfh(H.d([],[F.a9]))
u.d=t
u.e=null
return u},
jr:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aD(),r=new F.jx()
r.sc2(H.d([],[F.bO]))
s.b=r
r=new F.jw()
u=[F.bp]
r.sfo(H.d([],u))
r.sfp(H.d([],u))
s.c=r
r=new F.jt()
u=[F.a9]
r.sfi(H.d([],u))
r.sfj(H.d([],u))
r.sfk(H.d([],u))
s.d=r
h=$.na()
s.e=0
r=$.b2()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bx().a)!==0?e:t
s.x=(u&$.bw().a)!==0?b:t
s.y=(u&$.by().a)!==0?f:t
s.z=(u&$.bY().a)!==0?g:t
s.Q=(u&$.nb().a)!==0?c:t
s.ch=(u&$.cv().a)!==0?i:0
s.cx=(u&$.bv().a)!==0?a:t
return s},
kt:function kt(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a9:function a9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bp:function bp(){this.b=this.a=null},
bO:function bO(){this.a=null},
eb:function eb(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ip:function ip(a){this.a=a
this.b=null},
iq:function iq(a){this.a=a
this.b=null},
ir:function ir(a){this.a=a
this.b=null},
aD:function aD(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jz:function jz(a){this.a=a},
jy:function jy(a){this.a=a},
js:function js(a){this.a=a
this.c=this.b=null},
jt:function jt(){this.d=this.c=this.b=null},
ju:function ju(a,b){this.a=a
this.b=b},
jv:function jv(a,b){this.a=a
this.b=b},
jw:function jw(){this.c=this.b=null},
jx:function jx(){this.b=null}},T={d3:function d3(){},ej:function ej(){},iP:function iP(){var _=this
_.y=_.d=_.c=_.b=_.a=null},d4:function d4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},iQ:function iQ(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},iS:function iS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},iR:function iR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},B={
mR:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="testCanvas",a6=null,a7="bumpMaps",a8="controls",a9=34067,b0="modifiers",b1=V.o3("Test 015"),b2=W.l6()
b2.className="pageLargeCanvas"
b2.id=a5
b1.a.appendChild(b2)
u=[P.h]
b1.dC(H.d(["Test of Material Lighting shader with bump mapping, reflections, refractions."],u))
b1.i1(H.d(["bumpMaps","controls"],u))
b1.dC(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a5)
if(t==null)H.B(P.D("Failed to find an element with the identifier, testCanvas."))
s=E.o7(t,!0,!0,!0,!1)
r=X.la(a6)
r.sdI(0,!1)
q=E.lX()
p=F.ll()
F.dq(p,a6,a6,1,1,1,0,0,1)
F.dq(p,a6,a6,1,1,0,1,0,3)
F.dq(p,a6,a6,1,1,0,0,1,2)
F.dq(p,a6,a6,1,1,-1,0,0,0)
F.dq(p,a6,a6,1,1,0,-1,0,0)
F.dq(p,a6,a6,1,1,0,0,-1,3)
p.aE()
q.sbI(0,p)
o=s.f
n=o.a
m=n.createTexture()
n.bindTexture(a9,m)
n.texParameteri(a9,10242,10497)
n.texParameteri(a9,10243,10497)
n.texParameteri(a9,10241,9729)
n.texParameteri(a9,10240,9729)
n.bindTexture(a9,a6)
l=new T.d4()
l.a=0
l.b=m
l.c=!1
l.d=0
o.aT(l,m,"../resources/maskonaive/posx.jpg",34069,!1,!1)
o.aT(l,m,"../resources/maskonaive/negx.jpg",34070,!1,!1)
o.aT(l,m,"../resources/maskonaive/posy.jpg",34071,!1,!1)
o.aT(l,m,"../resources/maskonaive/negy.jpg",34072,!1,!1)
o.aT(l,m,"../resources/maskonaive/posz.jpg",34073,!1,!1)
o.aT(l,m,"../resources/maskonaive/negz.jpg",34074,!1,!1)
k=new O.dZ()
k.sf4(O.l7(V.at))
k.e.b2(k.gfF(),k.gfH())
o=new O.bc(k,"emission")
o.c=new A.ad(!1,!1,!1)
o.f=new V.A(0,0,0)
k.f=o
o=new O.bc(k,"ambient")
o.c=new A.ad(!1,!1,!1)
o.f=new V.A(0,0,0)
k.r=o
o=new O.bc(k,"diffuse")
o.c=new A.ad(!1,!1,!1)
o.f=new V.A(0,0,0)
k.x=o
o=new O.bc(k,"invDiffuse")
o.c=new A.ad(!1,!1,!1)
o.f=new V.A(0,0,0)
k.y=o
o=new O.hH(k,"specular")
o.c=new A.ad(!1,!1,!1)
o.f=new V.A(0,0,0)
o.ch=100
k.z=o
o=new O.hD(k,"bump")
o.c=new A.ad(!1,!1,!1)
k.Q=o
k.ch=null
o=new O.bc(k,"reflect")
o.c=new A.ad(!1,!1,!1)
o.f=new V.A(0,0,0)
k.cx=o
o=new O.hG(k,"refract")
o.c=new A.ad(!1,!1,!1)
o.f=new V.A(0,0,0)
o.ch=1
k.cy=o
o=new O.hC(k,"alpha")
o.c=new A.ad(!1,!1,!1)
o.f=1
k.db=o
o=new D.dU()
o.bp(D.ae)
o.sfe(H.d([],[D.bE]))
o.shs(H.d([],[D.e7]))
o.shO(H.d([],[D.ef]))
o.y=o.x=null
o.cM(o.gfD(),o.ghc(),o.ghg())
k.dx=o
n=new O.hF()
n.b=new V.aF(0,0,0,0)
n.c=1
n.d=10
n.e=!1
k.dy=n
n=o.x
o=n==null?o.x=D.P():n
o.h(0,k.ghC())
o=k.dx
n=o.y
o=n==null?o.y=D.P():n
n=k.gaU()
o.h(0,n)
k.fr=null
o=k.dx
j=V.lq()
i=U.lT(V.m0(V.m7(),j,new V.Q(-1,-1,-1)))
h=new D.bE()
h.c=new V.A(1,1,1)
h.a=V.oi()
h.d=V.lq()
h.e=V.oh()
g=h.b
h.b=i
i.gp().h(0,h.geR())
i=new D.N("mover",g,h.b,[U.ag])
i.b=!0
h.aA(i)
f=new V.A(1,1,1)
if(!h.c.q(0,f)){g=h.c
h.c=f
i=new D.N("color",g,f,[V.A])
i.b=!0
h.aA(i)}o.h(0,h)
o=k.r
o.st(0,new V.A(0.1,0.1,0.1))
o=k.x
o.st(0,new V.A(0.1,0.1,0.1))
k.z.st(0,new V.A(0,0,0))
o=k.z
o.bb(new A.ad(!0,o.c.b,!1))
o.dt(10)
o=k.ch
if(o!==l){if(o!=null)o.gp().V(0,n)
g=k.ch
k.ch=l
l.gp().h(0,n)
o=new D.N("environment",g,k.ch,[T.d4])
o.b=!0
k.X(o)}k.cy.saF(0.6)
o=k.cy
o.st(0,new V.A(0.2,0.3,1))
o=k.cx
o.st(0,new V.A(0.6,0.6,0.6))
e=new U.cJ()
e.bp(U.ag)
e.b2(e.gfB(),e.ghe())
e.e=null
e.f=V.c9()
e.r=0
o=s.r
n=new U.et()
i=U.l8()
i.scJ(0,!0)
i.scv(6.283185307179586)
i.scz(0)
i.sae(0,0)
i.scw(100)
i.sW(0)
i.scf(0.5)
n.b=i
h=n.gaR()
i.gp().h(0,h)
i=U.l8()
i.scJ(0,!0)
i.scv(6.283185307179586)
i.scz(0)
i.sae(0,0)
i.scw(100)
i.sW(0)
i.scf(0.5)
n.c=i
i.gp().h(0,h)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
d=new X.aA(!1,!1,!1)
g=n.d
n.d=d
i=[X.aA]
h=new D.N(b0,g,d,i)
h.b=!0
n.P(h)
h=n.f
if(h!==!1){n.f=!1
h=new D.N("invertX",h,!1,[P.R])
h.b=!0
n.P(h)}h=n.r
if(h!==!1){n.r=!1
h=new D.N("invertY",h,!1,[P.R])
h.b=!0
n.P(h)}n.bd(o)
e.h(0,n)
o=s.r
n=new U.es()
h=U.l8()
h.scJ(0,!0)
h.scv(6.283185307179586)
h.scz(0)
h.sae(0,0)
h.scw(100)
h.sW(0)
h.scf(0.2)
n.b=h
h.gp().h(0,n.gaR())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
d=new X.aA(!0,!1,!1)
g=n.c
n.c=d
h=new D.N(b0,g,d,i)
h.b=!0
n.P(h)
n.bd(o)
e.h(0,n)
o=s.r
n=new U.eu()
n.c=0.01
n.e=n.d=0
d=new X.aA(!1,!1,!1)
n.b=d
i=new D.N(b0,a6,d,i)
i.b=!0
n.P(i)
n.bd(o)
e.h(0,n)
e.h(0,U.lT(V.bd(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=X.m4(e)
b=new M.dI()
b.a=!0
o=E.lX()
p=F.ll()
n=p.a
i=new V.Q(-1,-1,1)
i=i.w(0,Math.sqrt(i.G(i)))
a=n.bt(new V.bs(1,2,4,6),new V.aF(1,0,0,1),new V.ap(-1,-1,0),new V.aa(0,1),i,a6)
n=p.a
i=new V.Q(1,-1,1)
i=i.w(0,Math.sqrt(i.G(i)))
a0=n.bt(new V.bs(0,3,4,6),new V.aF(0,0,1,1),new V.ap(1,-1,0),new V.aa(1,1),i,a6)
n=p.a
i=new V.Q(1,1,1)
i=i.w(0,Math.sqrt(i.G(i)))
a1=n.bt(new V.bs(0,2,5,6),new V.aF(0,1,0,1),new V.ap(1,1,0),new V.aa(1,0),i,a6)
n=p.a
i=V.br()
h=new V.Q(-1,1,1)
h=h.w(0,Math.sqrt(h.G(h)))
a2=n.bt(new V.bs(0,2,4,7),new V.aF(1,1,0,1),new V.ap(-1,1,0),i,h,a6)
p.d.i3(H.d([a,a0,a1,a2],[F.aD]))
p.aE()
o.sbI(0,p)
b.e=o
b.sbe(a6)
b.sbk(0,a6)
b.sbl(a6)
o=new O.ec()
o.b=1.0471975511965976
o.d=new V.A(1,1,1)
g=o.c
o.c=l
l.gp().h(0,o.gaU())
n=new D.N("boxTexture",g,o.c,[T.d4])
n.b=!0
o.X(n)
b.sbl(o)
b.sbk(0,r)
b.sbe(c)
a3=new M.dM()
a3.a=!0
a3.sf7(0,O.l7(E.ao))
a3.e.b2(a3.gfL(),a3.gfN())
a3.y=a3.x=a3.r=a3.f=null
a4=X.la(a6)
a3.sbe(a6)
a3.sbk(0,a4)
a3.sbl(a6)
a3.sbe(c)
a3.sbl(k)
a3.sbk(0,r)
a3.e.h(0,q)
a3.c.sdI(0,!1)
o=M.aC
n=H.d([b,a3],[o])
i=new M.dG()
i.bp(o)
i.e=!0
i.f=!1
i.r=null
i.b2(i.ghi(),i.ghk())
i.ab(0,n)
o=s.d
if(o!==i){if(o!=null)o.gp().V(0,s.gcU())
s.d=i
i.gp().h(0,s.gcU())
s.cV()}o=new V.ia(a8)
n=u.getElementById(a8)
o.c=n
if(n==null)H.B("Failed to find controls for RadioGroup")
o.dA(0,"Silver",new B.kN(k),!0)
o.ad(0,"Gold",new B.kO(k))
o.ad(0,"Glass",new B.kP(k))
o.ad(0,"Blue Glass",new B.kQ(k))
o.ad(0,"Water Bubble",new B.kR(k))
o.ad(0,"No Reflection",new B.kS(k))
o.ad(0,"Pink Distort",new B.kT(k))
o.ad(0,"Cloak",new B.kU(k))
o.ad(0,"White and Shiny",new B.kV(k))
o=new V.iM(a7,new B.kW(k,s))
u=u.getElementById(a7)
o.c=u
if(u==null)H.B("Failed to find bumpMaps for Texture2DGroup")
o.ad(0,"../resources/BumpMap1.png",!0)
o.h(0,"../resources/BumpMap2.png")
o.h(0,"../resources/BumpMap3.png")
o.h(0,"../resources/BumpMap4.png")
o.h(0,"../resources/BumpMap5.png")
o.h(0,"../resources/ScrewBumpMap.png")
o.h(0,"../resources/CtrlPnlBumpMap.png")
u=s.z
if(u==null)u=s.z=D.P()
o={func:1,ret:-1,args:[D.z]}
n=H.n(new B.kX(b1,k),o)
if(u.b==null)u.saV(H.d([],[o]))
u=u.b;(u&&C.a).h(u,n)
V.pC(s)},
kN:function kN(a){this.a=a},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a){this.a=a},
kT:function kT(a){this.a=a},
kU:function kU(a){this.a=a},
kV:function kV(a){this.a=a},
kW:function kW(a,b){this.a=a
this.b=b},
kX:function kX(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.lg.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gH:function(a){return H.cV(a)},
i:function(a){return"Instance of '"+H.cc(a)+"'"}}
J.hl.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iR:1}
J.dR.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0}}
J.dS.prototype={
gH:function(a){return 0},
i:function(a){return String(a)}}
J.i5.prototype={}
J.bT.prototype={}
J.bM.prototype={
i:function(a){var u=a[$.mZ()]
if(u==null)return this.eG(a)
return"JavaScript function for "+H.j(J.ar(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibH:1}
J.b9.prototype={
h:function(a,b){H.C(b,H.r(a,0))
if(!!a.fixed$length)H.B(P.K("add"))
a.push(b)},
V:function(a,b){var u
if(!!a.fixed$length)H.B(P.K("remove"))
for(u=0;u<a.length;++u)if(J.a5(a[u],b)){a.splice(u,1)
return!0}return!1},
ab:function(a,b){var u,t
H.l(b,"$ii",[H.r(a,0)],"$ai")
if(!!a.fixed$length)H.B(P.K("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.u)(b),++t)a.push(b[t])},
B:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.b5(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.j(a[u]))
return t.join(b)},
iG:function(a){return this.m(a,"")},
iz:function(a,b,c,d){var u,t,s
H.C(b,d)
H.n(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.b5(a))}return t},
iy:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.R,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.E(b.$1(s)))return s
if(a.length!==u)throw H.c(P.b5(a))}throw H.c(H.ld())},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
eD:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ah(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ah(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.r(a,0)])
return H.d(a.slice(b,c),[H.r(a,0)])},
gaz:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.ld())},
dE:function(a,b){var u,t
H.n(b,{func:1,ret:P.R,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.E(b.$1(a[t])))return!0
if(a.length!==u)throw H.c(P.b5(a))}return!1},
bJ:function(a,b){var u=H.r(a,0)
H.n(b,{func:1,ret:P.m,args:[u,u]})
if(!!a.immutable$list)H.B(P.K("sort"))
H.ee(a,0,a.length-1,b,u)},
U:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a5(a[u],b))return!0
return!1},
i:function(a){return P.lc(a,"[","]")},
gT:function(a){return new J.as(a,a.length,[H.r(a,0)])},
gH:function(a){return H.cV(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.B(P.K("set length"))
if(b<0)throw H.c(P.ah(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cp(a,b))
return a[b]},
k:function(a,b,c){H.C(c,H.r(a,0))
if(!!a.immutable$list)H.B(P.K("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cp(a,b))
a[b]=c},
$ii:1,
$ib:1}
J.lf.prototype={}
J.as.prototype={
gI:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.u(s))
u=t.c
if(u>=r){t.scX(null)
return!1}t.scX(s[u]);++t.c
return!0},
scX:function(a){this.d=H.C(a,H.r(this,0))},
$ib8:1}
J.c7.prototype={
ig:function(a,b){var u
H.mS(b)
if(typeof b!=="number")throw H.c(H.aR(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbw(b)
if(this.gbw(a)===u)return 0
if(this.gbw(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbw:function(a){return a===0?1/a<0:a<0},
j9:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.K(""+a+".toInt()"))},
cn:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.K(""+a+".floor()"))},
ar:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.K(""+a+".round()"))},
ep:function(a,b){var u
if(b>20)throw H.c(P.ah(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbw(a))return"-"+u
return u},
bm:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ah(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.a1(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.B(P.K("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.A("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bn:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eJ:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dv(a,b)},
aa:function(a,b){return(a|0)===a?a/b|0:this.dv(a,b)},
dv:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.K("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
aX:function(a,b){var u
if(a>0)u=this.du(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hM:function(a,b){if(b<0)throw H.c(H.aR(b))
return this.du(a,b)},
du:function(a,b){return b>31?0:a>>>b},
av:function(a,b){if(typeof b!=="number")throw H.c(H.aR(b))
return a>b},
$iG:1,
$iac:1}
J.dQ.prototype={$im:1}
J.dP.prototype={}
J.bL.prototype={
a1:function(a,b){if(b<0)throw H.c(H.cp(a,b))
if(b>=a.length)H.B(H.cp(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.c(H.cp(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!=="string")throw H.c(P.l4(b,null,null))
return a+b},
b0:function(a,b,c,d){var u,t
c=P.bP(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ai:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ah(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a5:function(a,b){return this.ai(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.B(H.aR(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.R()
if(b<0)throw H.c(P.ic(b,null))
if(b>c)throw H.c(P.ic(b,null))
if(c>a.length)throw H.c(P.ic(c,null))
return a.substring(b,c)},
ac:function(a,b){return this.u(a,b,null)},
jc:function(a){return a.toLowerCase()},
A:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
an:function(a,b){var u=b-a.length
if(u<=0)return a
return this.A(" ",u)+a},
e9:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ah(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
e8:function(a,b){return this.e9(a,b,0)},
i:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$im3:1,
$ih:1}
H.t.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.b.a1(this.a,b)},
$ad9:function(){return[P.m]},
$ax:function(){return[P.m]},
$ai:function(){return[P.m]},
$ab:function(){return[P.m]}}
H.h1.prototype={}
H.c8.prototype={
gT:function(a){var u=this
return new H.cL(u,u.gn(u),[H.am(u,"c8",0)])},
bG:function(a,b){return this.eF(0,H.n(b,{func:1,ret:P.R,args:[H.am(this,"c8",0)]}))}}
H.cL.prototype={
gI:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.dt(s),q=r.gn(s)
if(t.b!==q)throw H.c(P.b5(s))
u=t.c
if(u>=q){t.sb5(null)
return!1}t.sb5(r.J(s,u));++t.c
return!0},
sb5:function(a){this.d=H.C(a,H.r(this,0))},
$ib8:1}
H.hz.prototype={
gT:function(a){return new H.hA(J.bz(this.a),this.b,this.$ti)},
gn:function(a){return J.aE(this.a)},
J:function(a,b){return this.b.$1(J.fx(this.a,b))},
$ai:function(a,b){return[b]}}
H.hA.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.sb5(u.c.$1(t.gI(t)))
return!0}u.sb5(null)
return!1},
gI:function(a){return this.a},
sb5:function(a){this.a=H.C(a,H.r(this,1))},
$ab8:function(a,b){return[b]}}
H.hB.prototype={
gn:function(a){return J.aE(this.a)},
J:function(a,b){return this.b.$1(J.fx(this.a,b))},
$ac8:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.da.prototype={
gT:function(a){return new H.jB(J.bz(this.a),this.b,this.$ti)}}
H.jB.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(H.E(t.$1(u.gI(u))))return!0
return!1},
gI:function(a){var u=this.a
return u.gI(u)}}
H.c4.prototype={}
H.d9.prototype={
k:function(a,b,c){H.C(c,H.am(this,"d9",0))
throw H.c(P.K("Cannot modify an unmodifiable list"))}}
H.ep.prototype={}
H.fO.prototype={
i:function(a){return P.lk(this)},
k:function(a,b,c){H.C(b,H.r(this,0))
H.C(c,H.r(this,1))
return H.nv()},
$iy:1}
H.fP.prototype={
gn:function(a){return this.a},
bu:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bu(0,b))return
return this.da(b)},
da:function(a){return this.b[H.J(a)]},
B:function(a,b){var u,t,s,r,q=this,p=H.r(q,1)
H.n(b,{func:1,ret:-1,args:[H.r(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.C(q.da(r),p))}}}
H.j0.prototype={
am:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.i1.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hn.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.j(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.j(t.a)+")"
return s+r+"' on '"+u+"' ("+H.j(t.a)+")"}}
H.jc.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.l1.prototype={
$1:function(a){if(!!J.S(a).$ibG)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:24}
H.f5.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iav:1}
H.cC.prototype={
i:function(a){return"Closure '"+H.cc(this).trim()+"'"},
$ibH:1,
gjd:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iJ.prototype={}
H.iz.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cu(u)+"'"}}
H.cy.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cy))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.cV(this.a)
else u=typeof t!=="object"?J.dz(t):H.cV(t)
return(u^H.cV(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.cc(u)+"'")}}
H.j2.prototype={
i:function(a){return this.a}}
H.fK.prototype={
i:function(a){return this.a}}
H.il.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.jC.prototype={
i:function(a){return"Assertion failed: "+P.dN(this.a)}}
H.a3.prototype={
gn:function(a){return this.a},
giF:function(a){return this.a===0},
ga6:function(a){return new H.hr(this,[H.r(this,0)])},
bu:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.d7(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.d7(t,b)}else return s.iC(b)},
iC:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cq(u.bR(t,u.cp(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bq(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bq(r,b)
s=t==null?null:t.b
return s}else return q.iD(b)},
iD:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bR(r,s.cp(a))
t=s.cq(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.C(b,H.r(s,0))
H.C(c,H.r(s,1))
if(typeof b==="string"){u=s.b
s.cZ(u==null?s.b=s.c0():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cZ(t==null?s.c=s.c0():t,b,c)}else s.iE(b,c)},
iE:function(a,b){var u,t,s,r,q=this
H.C(a,H.r(q,0))
H.C(b,H.r(q,1))
u=q.d
if(u==null)u=q.d=q.c0()
t=q.cp(a)
s=q.bR(u,t)
if(s==null)q.c6(u,t,[q.c1(a,b)])
else{r=q.cq(s,a)
if(r>=0)s[r].b=b
else s.push(q.c1(a,b))}},
B:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.r(s,0),H.r(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.b5(s))
u=u.c}},
cZ:function(a,b,c){var u,t=this
H.C(b,H.r(t,0))
H.C(c,H.r(t,1))
u=t.bq(a,b)
if(u==null)t.c6(a,b,t.c1(b,c))
else u.b=c},
fw:function(){this.r=this.r+1&67108863},
c1:function(a,b){var u,t=this,s=new H.hq(H.C(a,H.r(t,0)),H.C(b,H.r(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fw()
return s},
cp:function(a){return J.dz(a)&0x3ffffff},
cq:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a5(a[t].a,b))return t
return-1},
i:function(a){return P.lk(this)},
bq:function(a,b){return a[b]},
bR:function(a,b){return a[b]},
c6:function(a,b,c){a[b]=c},
fc:function(a,b){delete a[b]},
d7:function(a,b){return this.bq(a,b)!=null},
c0:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c6(t,u,t)
this.fc(t,u)
return t}}
H.hq.prototype={}
H.hr.prototype={
gn:function(a){return this.a.a},
gT:function(a){var u=this.a,t=new H.hs(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hs.prototype={
gI:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.b5(t))
else{t=u.c
if(t==null){u.scY(null)
return!1}else{u.scY(t.a)
u.c=u.c.c
return!0}}},
scY:function(a){this.d=H.C(a,H.r(this,0))},
$ib8:1}
H.kI.prototype={
$1:function(a){return this.a(a)},
$S:24}
H.kJ.prototype={
$2:function(a,b){return this.a(a,b)},
$S:42}
H.kK.prototype={
$1:function(a){return this.a(H.J(a))},
$S:56}
H.hm.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$im3:1,
$io_:1}
H.cQ.prototype={$icQ:1}
H.bN.prototype={$ibN:1,$io9:1}
H.e1.prototype={
gn:function(a){return a.length},
$iM:1,
$aM:function(){}}
H.cR.prototype={
j:function(a,b){H.bl(b,a,a.length)
return a[b]},
k:function(a,b,c){H.pi(c)
H.bl(b,a,a.length)
a[b]=c},
$ac4:function(){return[P.G]},
$ax:function(){return[P.G]},
$ii:1,
$ai:function(){return[P.G]},
$ib:1,
$ab:function(){return[P.G]}}
H.e2.prototype={
k:function(a,b,c){H.a4(c)
H.bl(b,a,a.length)
a[b]=c},
$ac4:function(){return[P.m]},
$ax:function(){return[P.m]},
$ii:1,
$ai:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]}}
H.hV.prototype={
j:function(a,b){H.bl(b,a,a.length)
return a[b]}}
H.hW.prototype={
j:function(a,b){H.bl(b,a,a.length)
return a[b]}}
H.hX.prototype={
j:function(a,b){H.bl(b,a,a.length)
return a[b]}}
H.hY.prototype={
j:function(a,b){H.bl(b,a,a.length)
return a[b]}}
H.hZ.prototype={
j:function(a,b){H.bl(b,a,a.length)
return a[b]}}
H.e3.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bl(b,a,a.length)
return a[b]},
$iq1:1}
H.cS.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bl(b,a,a.length)
return a[b]},
$icS:1,
$iU:1}
H.df.prototype={}
H.dg.prototype={}
H.dh.prototype={}
H.di.prototype={}
P.jE.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:15}
P.jD.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:34}
P.jF.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jG.prototype={
$0:function(){this.a.$0()},
$S:0}
P.fc.prototype={
eW:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.co(new P.kj(this,b),0),a)
else throw H.c(P.K("`setTimeout()` not found."))},
eX:function(a,b){if(self.setTimeout!=null)self.setInterval(H.co(new P.ki(this,a,Date.now(),b),0),a)
else throw H.c(P.K("Periodic timer."))},
$ibg:1}
P.kj.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.ki.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.eJ(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bk.prototype={
iJ:function(a){if(this.c!==6)return!0
return this.b.b.cG(H.n(this.d,{func:1,ret:P.R,args:[P.T]}),a.a,P.R,P.T)},
iB:function(a){var u=this.e,t=P.T,s={futureOr:1,type:H.r(this,1)},r=this.b.b
if(H.fv(u,{func:1,args:[P.T,P.av]}))return H.lE(r.j4(u,a.a,a.b,null,t,P.av),s)
else return H.lE(r.cG(H.n(u,{func:1,args:[P.T]}),a.a,null,t),s)}}
P.aP.prototype={
eo:function(a,b,c){var u,t,s,r=H.r(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a1
if(u!==C.f){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.p5(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aP($.a1,[c])
s=b==null?1:3
this.d_(new P.bk(t,s,a,b,[r,c]))
return t},
j8:function(a,b){return this.eo(a,null,b)},
d_:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ibk")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaP")
s=u.a
if(s<4){u.d_(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.kD(null,null,s,H.n(new P.jP(t,a),{func:1,ret:-1}))}},
dm:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ibk")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaP")
u=q.a
if(u<4){q.dm(a)
return}p.a=u
p.c=q.c}o.a=p.br(a)
u=p.b
u.toString
P.kD(null,null,u,H.n(new P.jT(o,p),{func:1,ret:-1}))}},
c4:function(){var u=H.f(this.c,"$ibk")
this.c=null
return this.br(u)},
br:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d3:function(a){var u,t,s=this,r=H.r(s,0)
H.lE(a,{futureOr:1,type:r})
u=s.$ti
if(H.lB(a,"$icI",u,"$acI"))if(H.lB(a,"$iaP",u,null))P.mq(a,s)
else P.on(a,s)
else{t=s.c4()
H.C(a,r)
s.a=4
s.c=a
P.dd(s,t)}},
d4:function(a,b){var u,t=this
H.f(b,"$iav")
u=t.c4()
t.a=8
t.c=new P.an(a,b)
P.dd(t,u)},
$icI:1}
P.jP.prototype={
$0:function(){P.dd(this.a,this.b)},
$S:0}
P.jT.prototype={
$0:function(){P.dd(this.b,this.a.a)},
$S:0}
P.jQ.prototype={
$1:function(a){var u=this.a
u.a=0
u.d3(a)},
$S:15}
P.jR.prototype={
$2:function(a,b){H.f(b,"$iav")
this.a.d4(a,b)},
$1:function(a){return this.$2(a,null)},
$S:51}
P.jS.prototype={
$0:function(){this.a.d4(this.b,this.c)},
$S:0}
P.jW.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.el(H.n(s.d,{func:1}),null)}catch(r){u=H.aj(r)
t=H.cs(r)
if(o.d){s=H.f(o.a.a.c,"$ian").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$ian")
else q.b=new P.an(u,t)
q.a=!0
return}if(!!J.S(n).$icI){if(n instanceof P.aP&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$ian")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.j8(new P.jX(p),null)
s.a=!1}},
$S:3}
P.jX.prototype={
$1:function(a){return this.a},
$S:47}
P.jV.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.r(s,0)
q=H.C(n.c,r)
p=H.r(s,1)
n.a.b=s.b.b.cG(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aj(o)
t=H.cs(o)
s=n.a
s.b=new P.an(u,t)
s.a=!0}},
$S:3}
P.jU.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$ian")
r=m.c
if(H.E(r.iJ(u))&&r.e!=null){q=m.b
q.b=r.iB(u)
q.a=!1}}catch(p){t=H.aj(p)
s=H.cs(p)
r=H.f(m.a.a.c,"$ian")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.an(t,s)
n.a=!0}},
$S:3}
P.ey.prototype={}
P.iC.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aP($.a1,[P.m])
r.a=0
u=H.r(s,0)
t=H.n(new P.iE(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.iF(r,q),{func:1,ret:-1})
W.a8(s.a,s.b,t,!1,u)
return q}}
P.iE.prototype={
$1:function(a){H.C(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.r(this.b,0)]}}}
P.iF.prototype={
$0:function(){this.b.d3(this.a.a)},
$S:0}
P.d_.prototype={}
P.iD.prototype={}
P.bg.prototype={}
P.an.prototype={
i:function(a){return H.j(this.a)},
$ibG:1}
P.ks.prototype={$iqg:1}
P.kC.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e5():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:0}
P.k2.prototype={
j5:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.a1){a.$0()
return}P.mC(r,r,this,a,-1)}catch(s){u=H.aj(s)
t=H.cs(s)
P.kB(r,r,this,u,H.f(t,"$iav"))}},
j6:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.f===$.a1){a.$1(b)
return}P.mD(r,r,this,a,b,-1,c)}catch(s){u=H.aj(s)
t=H.cs(s)
P.kB(r,r,this,u,H.f(t,"$iav"))}},
ic:function(a,b){return new P.k4(this,H.n(a,{func:1,ret:b}),b)},
c8:function(a){return new P.k3(this,H.n(a,{func:1,ret:-1}))},
dF:function(a,b){return new P.k5(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
el:function(a,b){H.n(a,{func:1,ret:b})
if($.a1===C.f)return a.$0()
return P.mC(null,null,this,a,b)},
cG:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.a1===C.f)return a.$1(b)
return P.mD(null,null,this,a,b,c,d)},
j4:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.a1===C.f)return a.$2(b,c)
return P.p6(null,null,this,a,b,c,d,e,f)}}
P.k4.prototype={
$0:function(){return this.a.el(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.k3.prototype={
$0:function(){return this.a.j5(this.b)},
$S:3}
P.k5.prototype={
$1:function(a){var u=this.c
return this.a.j6(this.b,H.C(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.k0.prototype={
gT:function(a){var u=this,t=new P.eN(u,u.r,u.$ti)
t.c=u.e
return t},
gn:function(a){return this.a},
U:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.f(u[b],"$icj")!=null}else{t=this.f8(b)
return t}},
f8:function(a){var u=this.d
if(u==null)return!1
return this.bP(this.dc(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.C(b,H.r(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.d0(u==null?s.b=P.lt():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.d0(t==null?s.c=P.lt():t,b)}else return s.f_(0,b)},
f_:function(a,b){var u,t,s,r=this
H.C(b,H.r(r,0))
u=r.d
if(u==null)u=r.d=P.lt()
t=r.d5(b)
s=u[t]
if(s==null)u[t]=[r.bM(b)]
else{if(r.bP(s,b)>=0)return!1
s.push(r.bM(b))}return!0},
V:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hy(this.c,b)
else return this.hx(0,b)},
hx:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.dc(r,b)
t=s.bP(u,b)
if(t<0)return!1
s.dw(u.splice(t,1)[0])
return!0},
d0:function(a,b){H.C(b,H.r(this,0))
if(H.f(a[b],"$icj")!=null)return!1
a[b]=this.bM(b)
return!0},
hy:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$icj")
if(u==null)return!1
this.dw(u)
delete a[b]
return!0},
d2:function(){this.r=1073741823&this.r+1},
bM:function(a){var u,t=this,s=new P.cj(H.C(a,H.r(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.d2()
return s},
dw:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.d2()},
d5:function(a){return J.dz(a)&1073741823},
dc:function(a,b){return a[this.d5(b)]},
bP:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a5(a[t].a,b))return t
return-1}}
P.cj.prototype={}
P.eN.prototype={
gI:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.b5(t))
else{t=u.c
if(t==null){u.sd1(null)
return!1}else{u.sd1(H.C(t.a,H.r(u,0)))
u.c=u.c.b
return!0}}},
sd1:function(a){this.d=H.C(a,H.r(this,0))},
$ib8:1}
P.ht.prototype={
$2:function(a,b){this.a.k(0,H.C(a,this.b),H.C(b,this.c))},
$S:5}
P.hu.prototype={$ii:1,$ib:1}
P.x.prototype={
gT:function(a){return new H.cL(a,this.gn(a),[H.bW(this,a,"x",0)])},
J:function(a,b){return this.j(a,b)},
B:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bW(s,a,"x",0)]})
u=s.gn(a)
for(t=0;t<u;++t){b.$1(s.j(a,t))
if(u!==s.gn(a))throw H.c(P.b5(a))}},
jb:function(a,b){var u,t=this,s=H.d([],[H.bW(t,a,"x",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.k(s,u,t.j(a,u))
return s},
ja:function(a){return this.jb(a,!0)},
iw:function(a,b,c,d){var u
H.C(d,H.bW(this,a,"x",0))
P.bP(b,c,this.gn(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.lc(a,"[","]")}}
P.hw.prototype={}
P.hx.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.j(a)
t.a=u+": "
t.a+=H.j(b)},
$S:5}
P.af.prototype={
B:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bW(s,a,"af",0),H.bW(s,a,"af",1)]})
for(u=J.bz(s.ga6(a));u.v();){t=u.gI(u)
b.$2(t,s.j(a,t))}},
gn:function(a){return J.aE(this.ga6(a))},
i:function(a){return P.lk(a)},
$iy:1}
P.kk.prototype={
k:function(a,b,c){H.C(b,H.r(this,0))
H.C(c,H.r(this,1))
throw H.c(P.K("Cannot modify unmodifiable map"))}}
P.hy.prototype={
j:function(a,b){return J.dy(this.a,b)},
k:function(a,b,c){J.l2(this.a,H.C(b,H.r(this,0)),H.C(c,H.r(this,1)))},
B:function(a,b){J.lM(this.a,H.n(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gn:function(a){return J.aE(this.a)},
i:function(a){return J.ar(this.a)},
$iy:1}
P.eq.prototype={}
P.k7.prototype={
ab:function(a,b){var u
for(u=J.bz(H.l(b,"$ii",this.$ti,"$ai"));u.v();)this.h(0,u.gI(u))},
i:function(a){return P.lc(this,"{","}")},
J:function(a,b){var u,t,s,r=this
P.ma(b,"index")
for(u=P.or(r,r.r,H.r(r,0)),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.c(P.a_(b,r,"index",null,t))},
$ii:1,
$imd:1}
P.eO.prototype={}
P.fi.prototype={}
P.fG.prototype={
iL:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bP(a0,a1,b.length)
u=$.nd()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.D(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kH(C.b.D(b,n))
j=H.kH(C.b.D(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.b.a1("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ai("")
g=r.a+=C.b.u(b,s,t)
r.a=g+H.cd(m)
s=n
continue}}throw H.c(P.a6("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.u(b,s,a1)
f=g.length
if(q>=0)P.lP(b,p,a1,q,o,f)
else{e=C.d.bn(f-1,4)+1
if(e===1)throw H.c(P.a6(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.b0(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lP(b,p,a1,q,o,d)
else{e=C.d.bn(d,4)
if(e===1)throw H.c(P.a6(c,b,a1))
if(e>1)b=C.b.b0(b,a1,a1,e===2?"==":"=")}return b},
$ac2:function(){return[[P.b,P.m],P.h]}}
P.fH.prototype={
$abD:function(){return[[P.b,P.m],P.h]}}
P.c2.prototype={}
P.bD.prototype={}
P.h3.prototype={
$ac2:function(){return[P.h,[P.b,P.m]]}}
P.hi.prototype={
i:function(a){return this.a}}
P.hh.prototype={
f9:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.e(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.ai("")
if(r>b)q.a+=C.b.u(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.no(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abD:function(){return[P.h,P.h]}}
P.jl.prototype={
giv:function(){return C.N}}
P.jn.prototype={
cd:function(a){var u,t,s=P.bP(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kq(u)
if(t.fl(a,0,s)!==s)t.dz(J.nk(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oH(0,t.b,u.length)))},
$abD:function(){return[P.h,[P.b,P.m]]}}
P.kq.prototype={
dz:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.e(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.e(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.e(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.e(s,r)
s[r]=128|a&63
return!1}},
fl:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.a1(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.D(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dz(r,C.b.D(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.e(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.e(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.e(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.e(u,q)
u[q]=128|r&63}}return s}}
P.jm.prototype={
cd:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ib",[P.m],"$ab")
u=P.oc(!1,a,0,null)
if(u!=null)return u
t=P.bP(0,null,J.aE(a))
s=P.mF(a,0,t)
if(s>0){r=P.d0(a,0,s)
if(s===t)return r
q=new P.ai(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ai("")
n=new P.kp(!1,q)
n.c=o
n.ih(a,p,t)
if(n.e>0){H.B(P.a6("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.cd(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abD:function(){return[[P.b,P.m],P.h]}}
P.kp.prototype={
ih:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.l(a,"$ib",[P.m],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.dt(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.ao()
if((o&192)!==128){n=P.a6(h+C.d.bm(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.e(C.w,n)
if(u<=C.w[n]){n=P.a6("Overlong encoding of 0x"+C.d.bm(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a6("Character outside valid Unicode range: 0x"+C.d.bm(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.cd(u)
i.c=!1}for(n=p<c;n;){m=P.mF(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.d0(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.R()
if(o<0){j=P.a6("Negative UTF-8 code unit: -0x"+C.d.bm(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a6(h+C.d.bm(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.R.prototype={}
P.ay.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.ay&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.d.aX(u,30))&1073741823},
i:function(a){var u=this,t=P.nw(H.nW(u)),s=P.dJ(H.nU(u)),r=P.dJ(H.nQ(u)),q=P.dJ(H.nR(u)),p=P.dJ(H.nT(u)),o=P.dJ(H.nV(u)),n=P.nx(H.nS(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.G.prototype={}
P.bF.prototype={
av:function(a,b){return C.d.av(this.a,b.gjf())},
q:function(a,b){if(b==null)return!1
return b instanceof P.bF&&this.a===b.a},
gH:function(a){return C.d.gH(this.a)},
i:function(a){var u,t,s,r=new P.h0(),q=this.a
if(q<0)return"-"+new P.bF(0-q).i(0)
u=r.$1(C.d.aa(q,6e7)%60)
t=r.$1(C.d.aa(q,1e6)%60)
s=new P.h_().$1(q%1e6)
return""+C.d.aa(q,36e8)+":"+H.j(u)+":"+H.j(t)+"."+H.j(s)}}
P.h_.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:16}
P.h0.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:16}
P.bG.prototype={}
P.fA.prototype={
i:function(a){return"Assertion failed"}}
P.e5.prototype={
i:function(a){return"Throw of null."}}
P.aS.prototype={
gbO:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbN:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbO()+o+u
if(!q.a)return t
s=q.gbN()
r=P.dN(q.b)
return t+s+": "+r}}
P.ce.prototype={
gbO:function(){return"RangeError"},
gbN:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.j(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.j(s)
else if(t>s)u=": Not in range "+H.j(s)+".."+H.j(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.j(s)}return u}}
P.hk.prototype={
gbO:function(){return"RangeError"},
gbN:function(){var u,t=H.a4(this.b)
if(typeof t!=="number")return t.R()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.j(u)},
gn:function(a){return this.f}}
P.jd.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ja.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cZ.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fN.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dN(u)+"."}}
P.i4.prototype={
i:function(a){return"Out of Memory"},
$ibG:1}
P.eg.prototype={
i:function(a){return"Stack Overflow"},
$ibG:1}
P.fU.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eG.prototype={
i:function(a){return"Exception: "+this.a}}
P.hc.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.u(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.D(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.a1(f,q)
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
k=""}j=C.b.u(f,m,n)
return h+l+j+k+"\n"+C.b.A(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.j(g)+")"):h}}
P.bH.prototype={}
P.m.prototype={}
P.i.prototype={
bG:function(a,b){var u=H.am(this,"i",0)
return new H.da(this,H.n(b,{func:1,ret:P.R,args:[u]}),[u])},
gn:function(a){var u,t=this.gT(this)
for(u=0;t.v();)++u
return u},
gaP:function(a){var u,t=this.gT(this)
if(!t.v())throw H.c(H.ld())
u=t.gI(t)
if(t.v())throw H.c(H.nD())
return u},
J:function(a,b){var u,t,s
P.ma(b,"index")
for(u=this.gT(this),t=0;u.v();){s=u.gI(u)
if(b===t)return s;++t}throw H.c(P.a_(b,this,"index",null,t))},
i:function(a){return P.nC(this,"(",")")}}
P.b8.prototype={}
P.b.prototype={$ii:1}
P.y.prototype={}
P.L.prototype={
gH:function(a){return P.T.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.ac.prototype={}
P.T.prototype={constructor:P.T,$iT:1,
q:function(a,b){return this===b},
gH:function(a){return H.cV(this)},
i:function(a){return"Instance of '"+H.cc(this)+"'"},
toString:function(){return this.i(this)}}
P.av.prototype={}
P.h.prototype={$im3:1}
P.ai.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipQ:1}
P.jj.prototype={
$2:function(a,b){var u,t,s,r=P.h
H.l(a,"$iy",[r,r],"$ay")
H.J(b)
u=J.du(b).e8(b,"=")
if(u===-1){if(b!=="")J.l2(a,P.lv(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.u(b,0,u)
s=C.b.ac(b,u+1)
r=this.a
J.l2(a,P.lv(t,0,t.length,r,!0),P.lv(s,0,s.length,r,!0))}return a},
$S:46}
P.jf.prototype={
$2:function(a,b){throw H.c(P.a6("Illegal IPv4 address, "+a,this.a,b))},
$S:45}
P.jh.prototype={
$2:function(a,b){throw H.c(P.a6("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.ji.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.dv(C.b.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.R()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:41}
P.ck.prototype={
gew:function(){return this.b},
gco:function(a){var u=this.c
if(u==null)return""
if(C.b.a5(u,"["))return C.b.u(u,1,u.length-1)
return u},
gbz:function(a){var u=this.d
if(u==null)return P.mu(this.a)
return u},
gcD:function(a){var u=this.f
return u==null?"":u},
ge3:function(){var u=this.r
return u==null?"":u},
cE:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.l(b,"$iy",[P.h,null],"$ay")
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
n=P.lu(null,0,0,b)
return new P.ck(u,s,q,r,p,n,m.r)},
gbj:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.h
s.shw(new P.eq(P.mm(u==null?"":u),[t,t]))}return s.Q},
ge4:function(){return this.c!=null},
ge7:function(){return this.f!=null},
ge5:function(){return this.r!=null},
i:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.j(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.j(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.j(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.S(b).$ilo)if(s.a==b.gbH())if(s.c!=null===b.ge4())if(s.b==b.gew())if(s.gco(s)==b.gco(b))if(s.gbz(s)==b.gbz(b))if(s.e===b.gei(b)){u=s.f
t=u==null
if(!t===b.ge7()){if(t)u=""
if(u===b.gcD(b)){u=s.r
t=u==null
if(!t===b.ge5()){if(t)u=""
u=u===b.ge3()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gH:function(a){var u=this.z
return u==null?this.z=C.b.gH(this.i(0)):u},
shw:function(a){var u=P.h
this.Q=H.l(a,"$iy",[u,u],"$ay")},
$ilo:1,
gbH:function(){return this.a},
gei:function(a){return this.e}}
P.kl.prototype={
$1:function(a){throw H.c(P.a6("Invalid port",this.a,this.b+1))},
$S:20}
P.km.prototype={
$1:function(a){return P.fj(C.X,a,C.h,!1)},
$S:21}
P.ko.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.j(P.fj(C.n,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.j(P.fj(C.n,b,C.h,!0))}},
$S:22}
P.kn.prototype={
$2:function(a,b){var u,t
H.J(a)
if(b==null||typeof b==="string")this.a.$2(a,H.J(b))
else for(u=J.bz(H.mQ(b,"$ii")),t=this.a;u.v();)t.$2(a,H.J(u.gI(u)))},
$S:40}
P.je.prototype={
gev:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.e(o,0)
u=q.a
o=o[0]+1
t=C.b.e9(u,"?",o)
s=u.length
if(t>=0){r=P.dp(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jK("data",p,p,p,P.dp(u,o,s,C.A,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.e(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kw.prototype={
$1:function(a){return new Uint8Array(96)},
$S:57}
P.kv.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.nl(u,0,96,b)
return u},
$S:39}
P.kx.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.D(b,s)^96
if(r>=t)return H.e(a,r)
a[r]=c}}}
P.ky.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.D(b,0),t=C.b.D(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.e(a,r)
a[r]=c}}}
P.ka.prototype={
ge4:function(){return this.c>0},
ge6:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.C()
t=this.e
if(typeof t!=="number")return H.H(t)
t=u+1<t
u=t}else u=!1
return u},
ge7:function(){var u=this.f
if(typeof u!=="number")return u.R()
return u<this.r},
ge5:function(){return this.r<this.a.length},
gde:function(){return this.b===4&&C.b.a5(this.a,"http")},
gdf:function(){return this.b===5&&C.b.a5(this.a,"https")},
gbH:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gde())q=t.x="http"
else if(t.gdf()){t.x="https"
q="https"}else if(q===4&&C.b.a5(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a5(t.a,r)){t.x=r
q=r}else{q=C.b.u(t.a,0,q)
t.x=q}return q},
gew:function(){var u=this.c,t=this.b+3
return u>t?C.b.u(this.a,t,u-1):""},
gco:function(a){var u=this.c
return u>0?C.b.u(this.a,u,this.d):""},
gbz:function(a){var u,t=this
if(t.ge6()){u=t.d
if(typeof u!=="number")return u.C()
return P.dv(C.b.u(t.a,u+1,t.e),null,null)}if(t.gde())return 80
if(t.gdf())return 443
return 0},
gei:function(a){return C.b.u(this.a,this.e,this.f)},
gcD:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.R()
return u<t?C.b.u(this.a,u+1,t):""},
ge3:function(){var u=this.r,t=this.a
return u<t.length?C.b.ac(t,u+1):""},
gbj:function(){var u=this,t=u.f
if(typeof t!=="number")return t.R()
if(t>=u.r)return C.Y
t=P.h
return new P.eq(P.mm(u.gcD(u)),[t,t])},
cE:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.l(b,"$iy",[P.h,null],"$ay")
u=k.gbH()
t=u==="file"
s=k.c
r=s>0?C.b.u(k.a,k.b+3,s):""
q=k.ge6()?k.gbz(k):j
s=k.c
if(s>0)p=C.b.u(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.u(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a5(o,"/"))o="/"+o
m=P.lu(j,0,0,b)
n=k.r
l=n<s.length?C.b.ac(s,n+1):j
return new P.ck(u,r,p,q,o,m,l)},
gH:function(a){var u=this.y
return u==null?this.y=C.b.gH(this.a):u},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.S(b).$ilo&&this.a===b.i(0)},
i:function(a){return this.a},
$ilo:1}
P.jK.prototype={}
W.w.prototype={}
W.fy.prototype={
gn:function(a){return a.length}}
W.dA.prototype={
i:function(a){return String(a)},
$idA:1}
W.fz.prototype={
i:function(a){return String(a)}}
W.cx.prototype={$icx:1}
W.c_.prototype={$ic_:1}
W.bA.prototype={$ibA:1}
W.c1.prototype={
cK:function(a,b,c){if(c!=null)return a.getContext(b,P.pe(c))
return a.getContext(b)},
ey:function(a,b){return this.cK(a,b,null)},
$ic1:1}
W.cB.prototype={$icB:1}
W.bB.prototype={
gn:function(a){return a.length}}
W.cD.prototype={$icD:1}
W.fQ.prototype={
gn:function(a){return a.length}}
W.W.prototype={$iW:1}
W.cE.prototype={
gn:function(a){return a.length}}
W.fR.prototype={}
W.b6.prototype={}
W.b7.prototype={}
W.fS.prototype={
gn:function(a){return a.length}}
W.fT.prototype={
gn:function(a){return a.length}}
W.fW.prototype={
gn:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.fX.prototype={
i:function(a){return String(a)}}
W.dK.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.l(c,"$iak",[P.ac],"$aak")
throw H.c(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[[P.ak,P.ac]]},
$ax:function(){return[[P.ak,P.ac]]},
$ii:1,
$ai:function(){return[[P.ak,P.ac]]},
$ib:1,
$ab:function(){return[[P.ak,P.ac]]},
$aI:function(){return[[P.ak,P.ac]]}}
W.dL.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gaO(a))+" x "+H.j(this.gaI(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.S(b)
if(!u.$iak)return!1
return a.left===u.gbx(b)&&a.top===u.gbC(b)&&this.gaO(a)===u.gaO(b)&&this.gaI(a)===u.gaI(b)},
gH:function(a){return W.ms(C.e.gH(a.left),C.e.gH(a.top),C.e.gH(this.gaO(a)),C.e.gH(this.gaI(a)))},
gdG:function(a){return a.bottom},
gaI:function(a){return a.height},
gbx:function(a){return a.left},
gcF:function(a){return a.right},
gbC:function(a){return a.top},
gaO:function(a){return a.width},
$iak:1,
$aak:function(){return[P.ac]}}
W.fY.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.J(c)
throw H.c(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[P.h]},
$ax:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aI:function(){return[P.h]}}
W.fZ.prototype={
gn:function(a){return a.length}}
W.jI.prototype={
gn:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.f(u[b],"$iO")},
k:function(a,b,c){var u
H.f(c,"$iO")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gT:function(a){var u=this.ja(this)
return new J.as(u,u.length,[H.r(u,0)])},
$ax:function(){return[W.O]},
$ai:function(){return[W.O]},
$ab:function(){return[W.O]}}
W.O.prototype={
gib:function(a){return new W.jL(a)},
gcc:function(a){return new W.jI(a,a.children)},
gdJ:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.R()
if(s<0)s=-s*0
if(typeof r!=="number")return r.R()
if(r<0)r=-r*0
return new P.ak(u,t,s,r,[P.ac])},
i:function(a){return a.localName},
al:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lW
if(u==null){u=H.d([],[W.aB])
t=new W.e4(u)
C.a.h(u,W.mr(null))
C.a.h(u,W.mt())
$.lW=t
d=t}else d=u
u=$.lV
if(u==null){u=new W.fk(d)
$.lV=u
c=u}else{u.a=d
c=u}}if($.bn==null){u=document
t=u.implementation.createHTMLDocument("")
$.bn=t
$.l9=t.createRange()
t=$.bn.createElement("base")
H.f(t,"$icx")
t.href=u.baseURI
$.bn.head.appendChild(t)}u=$.bn
if(u.body==null){t=u.createElement("body")
u.body=H.f(t,"$ibA")}u=$.bn
if(!!this.$ibA)s=u.body
else{s=u.createElement(a.tagName)
$.bn.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.U(C.V,a.tagName)){$.l9.selectNodeContents(s)
r=$.l9.createContextualFragment(b)}else{s.innerHTML=b
r=$.bn.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bn.body
if(s==null?u!=null:s!==u)J.lN(s)
c.cL(r)
document.adoptNode(r)
return r},
ik:function(a,b,c){return this.al(a,b,c,null)},
eA:function(a,b){a.textContent=null
a.appendChild(this.al(a,b,null,null))},
$iO:1,
gem:function(a){return a.tagName}}
W.h2.prototype={
$1:function(a){return!!J.S(H.f(a,"$iF")).$iO},
$S:26}
W.o.prototype={$io:1}
W.k.prototype={
i2:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.f0(a,b,c,!1)},
f0:function(a,b,c,d){return a.addEventListener(b,H.co(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ik:1}
W.aI.prototype={$iaI:1}
W.cH.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaI")
throw H.c(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aI]},
$ax:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$icH:1,
$aI:function(){return[W.aI]}}
W.h7.prototype={
gn:function(a){return a.length}}
W.hb.prototype={
gn:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.hg.prototype={
gn:function(a){return a.length}}
W.c5.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iF")
throw H.c(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.F]},
$ax:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$ic5:1,
$aI:function(){return[W.F]}}
W.bo.prototype={$ibo:1,
gdK:function(a){return a.data}}
W.c6.prototype={$ic6:1}
W.cK.prototype={$icK:1}
W.ba.prototype={$iba:1}
W.dW.prototype={
i:function(a){return String(a)},
$idW:1}
W.hO.prototype={
gn:function(a){return a.length}}
W.cO.prototype={$icO:1}
W.hP.prototype={
j:function(a,b){return P.bu(a.get(H.J(b)))},
B:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bu(t.value[1]))}},
ga6:function(a){var u=H.d([],[P.h])
this.B(a,new W.hQ(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.K("Not supported"))},
$aaf:function(){return[P.h,null]},
$iy:1,
$ay:function(){return[P.h,null]}}
W.hQ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hR.prototype={
j:function(a,b){return P.bu(a.get(H.J(b)))},
B:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bu(t.value[1]))}},
ga6:function(a){var u=H.d([],[P.h])
this.B(a,new W.hS(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.K("Not supported"))},
$aaf:function(){return[P.h,null]},
$iy:1,
$ay:function(){return[P.h,null]}}
W.hS.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aU.prototype={$iaU:1}
W.hT.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaU")
throw H.c(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aU]},
$ax:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aI:function(){return[W.aU]}}
W.a7.prototype={$ia7:1}
W.aq.prototype={
gaP:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.me("No elements"))
if(t>1)throw H.c(P.me("More than one element"))
return u.firstChild},
ab:function(a,b){var u,t,s,r
H.l(b,"$ii",[W.F],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
k:function(a,b,c){var u,t
H.f(c,"$iF")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
u.replaceChild(c,t[b])},
gT:function(a){var u=this.a.childNodes
return new W.dO(u,u.length,[H.bW(C.Z,u,"I",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$ax:function(){return[W.F]},
$ai:function(){return[W.F]},
$ab:function(){return[W.F]}}
W.F.prototype={
j0:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
j2:function(a,b){var u,t
try{u=a.parentNode
J.ni(u,b,a)}catch(t){H.aj(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eE(a):u},
i6:function(a,b){return a.appendChild(H.f(b,"$iF"))},
hA:function(a,b,c){return a.replaceChild(b,c)},
$iF:1}
W.cT.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iF")
throw H.c(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.F]},
$ax:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$aI:function(){return[W.F]}}
W.aV.prototype={$iaV:1,
gn:function(a){return a.length}}
W.i7.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaV")
throw H.c(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aV]},
$ax:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aI:function(){return[W.aV]}}
W.ij.prototype={
j:function(a,b){return P.bu(a.get(H.J(b)))},
B:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bu(t.value[1]))}},
ga6:function(a){var u=H.d([],[P.h])
this.B(a,new W.ik(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.K("Not supported"))},
$aaf:function(){return[P.h,null]},
$iy:1,
$ay:function(){return[P.h,null]}}
W.ik.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.im.prototype={
gn:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.iw.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaW")
throw H.c(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aW]},
$ax:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aI:function(){return[W.aW]}}
W.aX.prototype={$iaX:1}
W.ix.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaX")
throw H.c(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aX]},
$ax:function(){return[W.aX]},
$ii:1,
$ai:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aI:function(){return[W.aX]}}
W.aY.prototype={$iaY:1,
gn:function(a){return a.length}}
W.iA.prototype={
j:function(a,b){return a.getItem(H.J(b))},
k:function(a,b,c){a.setItem(b,c)},
B:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga6:function(a){var u=H.d([],[P.h])
this.B(a,new W.iB(u))
return u},
gn:function(a){return a.length},
$aaf:function(){return[P.h,P.h]},
$iy:1,
$ay:function(){return[P.h,P.h]}}
W.iB.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:22}
W.aL.prototype={$iaL:1}
W.bf.prototype={$ibf:1}
W.eh.prototype={
al:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bK(a,b,c,d)
u=W.ny("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.aq(t).ab(0,new W.aq(u))
return t}}
W.iH.prototype={
al:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bK(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.al(u.createElement("table"),b,c,d)
u.toString
u=new W.aq(u)
s=u.gaP(u)
s.toString
u=new W.aq(s)
r=u.gaP(u)
t.toString
r.toString
new W.aq(t).ab(0,new W.aq(r))
return t}}
W.iI.prototype={
al:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bK(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.al(u.createElement("table"),b,c,d)
u.toString
u=new W.aq(u)
s=u.gaP(u)
t.toString
s.toString
new W.aq(t).ab(0,new W.aq(s))
return t}}
W.d2.prototype={$id2:1}
W.aZ.prototype={$iaZ:1}
W.aM.prototype={$iaM:1}
W.iK.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaM")
throw H.c(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aM]},
$ax:function(){return[W.aM]},
$ii:1,
$ai:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aI:function(){return[W.aM]}}
W.iL.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaZ")
throw H.c(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aZ]},
$ax:function(){return[W.aZ]},
$ii:1,
$ai:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aI:function(){return[W.aZ]}}
W.iU.prototype={
gn:function(a){return a.length}}
W.b_.prototype={$ib_:1}
W.b0.prototype={$ib0:1}
W.iY.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$ib_")
throw H.c(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.b_]},
$ax:function(){return[W.b_]},
$ii:1,
$ai:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aI:function(){return[W.b_]}}
W.iZ.prototype={
gn:function(a){return a.length}}
W.bR.prototype={}
W.jk.prototype={
i:function(a){return String(a)}}
W.jA.prototype={
gn:function(a){return a.length}}
W.bj.prototype={
gio:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.K("deltaY is not supported"))},
gim:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.K("deltaX is not supported"))},
$ibj:1}
W.db.prototype={
hB:function(a,b){return a.requestAnimationFrame(H.co(H.n(b,{func:1,ret:-1,args:[P.ac]}),1))},
ff:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.dc.prototype={$idc:1}
W.jJ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iW")
throw H.c(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.W]},
$ax:function(){return[W.W]},
$ii:1,
$ai:function(){return[W.W]},
$ib:1,
$ab:function(){return[W.W]},
$aI:function(){return[W.W]}}
W.eB.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.S(b)
if(!u.$iak)return!1
return a.left===u.gbx(b)&&a.top===u.gbC(b)&&a.width===u.gaO(b)&&a.height===u.gaI(b)},
gH:function(a){return W.ms(C.e.gH(a.left),C.e.gH(a.top),C.e.gH(a.width),C.e.gH(a.height))},
gaI:function(a){return a.height},
gaO:function(a){return a.width}}
W.jY.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaT")
throw H.c(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aT]},
$ax:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aI:function(){return[W.aT]}}
W.eT.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iF")
throw H.c(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.F]},
$ax:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$aI:function(){return[W.F]}}
W.kb.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaY")
throw H.c(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aY]},
$ax:function(){return[W.aY]},
$ii:1,
$ai:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aI:function(){return[W.aY]}}
W.ke.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaL")
throw H.c(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aL]},
$ax:function(){return[W.aL]},
$ii:1,
$ai:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aI:function(){return[W.aL]}}
W.jH.prototype={
B:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.ga6(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga6:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.e(r,t)
s=H.f(r[t],"$idc")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aaf:function(){return[P.h,P.h]},
$ay:function(){return[P.h,P.h]}}
W.jL.prototype={
j:function(a,b){return this.a.getAttribute(H.J(b))},
k:function(a,b,c){this.a.setAttribute(b,c)},
gn:function(a){return this.ga6(this).length}}
W.jM.prototype={}
W.ls.prototype={}
W.jN.prototype={}
W.jO.prototype={
$1:function(a){return this.a.$1(H.f(a,"$io"))},
$S:37}
W.bU.prototype={
eP:function(a){var u
if($.de.giF($.de)){for(u=0;u<262;++u)$.de.k(0,C.U[u],W.pp())
for(u=0;u<12;++u)$.de.k(0,C.q[u],W.pq())}},
aY:function(a){return $.ne().U(0,W.cF(a))},
ay:function(a,b,c){var u=$.de.j(0,H.j(W.cF(a))+"::"+b)
if(u==null)u=$.de.j(0,"*::"+b)
if(u==null)return!1
return H.lA(u.$4(a,b,c,this))},
$iaB:1}
W.I.prototype={
gT:function(a){return new W.dO(a,this.gn(a),[H.bW(this,a,"I",0)])}}
W.e4.prototype={
aY:function(a){return C.a.dE(this.a,new W.i0(a))},
ay:function(a,b,c){return C.a.dE(this.a,new W.i_(a,b,c))},
$iaB:1}
W.i0.prototype={
$1:function(a){return H.f(a,"$iaB").aY(this.a)},
$S:28}
W.i_.prototype={
$1:function(a){return H.f(a,"$iaB").ay(this.a,this.b,this.c)},
$S:28}
W.f0.prototype={
eV:function(a,b,c,d){var u,t,s
this.a.ab(0,c)
u=b.bG(0,new W.k8())
t=b.bG(0,new W.k9())
this.b.ab(0,u)
s=this.c
s.ab(0,C.x)
s.ab(0,t)},
aY:function(a){return this.a.U(0,W.cF(a))},
ay:function(a,b,c){var u=this,t=W.cF(a),s=u.c
if(s.U(0,H.j(t)+"::"+b))return u.d.i5(c)
else if(s.U(0,"*::"+b))return u.d.i5(c)
else{s=u.b
if(s.U(0,H.j(t)+"::"+b))return!0
else if(s.U(0,"*::"+b))return!0
else if(s.U(0,H.j(t)+"::*"))return!0
else if(s.U(0,"*::*"))return!0}return!1},
$iaB:1}
W.k8.prototype={
$1:function(a){return!C.a.U(C.q,H.J(a))},
$S:29}
W.k9.prototype={
$1:function(a){return C.a.U(C.q,H.J(a))},
$S:29}
W.kg.prototype={
ay:function(a,b,c){if(this.eI(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.U(0,b)
return!1}}
W.kh.prototype={
$1:function(a){return"TEMPLATE::"+H.j(H.J(a))},
$S:21}
W.kf.prototype={
aY:function(a){var u=J.S(a)
if(!!u.$icW)return!1
u=!!u.$ip
if(u&&W.cF(a)==="foreignObject")return!1
if(u)return!0
return!1},
ay:function(a,b,c){if(b==="is"||C.b.a5(b,"on"))return!1
return this.aY(a)},
$iaB:1}
W.dO.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdd(J.dy(u.a,t))
u.c=t
return!0}u.sdd(null)
u.c=s
return!1},
gI:function(a){return this.d},
sdd:function(a){this.d=H.C(a,H.r(this,0))},
$ib8:1}
W.aB.prototype={}
W.k6.prototype={$iq2:1}
W.fk.prototype={
cL:function(a){new W.kr(this).$2(a,null)},
ba:function(a,b){if(b==null)J.lN(a)
else b.removeChild(a)},
hF:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nm(a)
n=o.a.getAttribute("is")
H.f(a,"$iO")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.E(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.aj(r)}t="element unprintable"
try{t=J.ar(a)}catch(r){H.aj(r)}try{s=W.cF(a)
this.hE(H.f(a,"$iO"),b,p,t,s,H.f(o,"$iy"),H.J(n))}catch(r){if(H.aj(r) instanceof P.aS)throw r
else{this.ba(a,b)
window
q="Removing corrupted element "+H.j(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hE:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.ba(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aY(a)){o.ba(a,b)
window
u="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.ay(a,"is",g)){o.ba(a,b)
window
u="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga6(f)
t=H.d(u.slice(0),[H.r(u,0)])
for(s=f.ga6(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.e(t,s)
r=t[s]
q=o.a
p=J.np(r)
H.J(r)
if(!q.ay(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.j(e)+" "+r+'="'+H.j(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.S(a).$id2)o.cL(a.content)},
$ipO:1}
W.kr.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hF(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.ba(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.aj(s)
r=H.f(u,"$iF")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.f(t,"$iF")}},
$S:35}
W.eA.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.f6.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.fu.prototype={}
P.kc.prototype={
e2:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
bF:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.S(a)
if(!!u.$iay)return new Date(a.a)
if(!!u.$io_)throw H.c(P.jb("structured clone of RegExp"))
if(!!u.$iaI)return a
if(!!u.$ic_)return a
if(!!u.$icH)return a
if(!!u.$ibo)return a
if(!!u.$icQ||!!u.$ibN||!!u.$icO)return a
if(!!u.$iy){t=q.e2(a)
s=q.b
if(t>=s.length)return H.e(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.B(a,new P.kd(p,q))
return p.a}if(!!u.$ib){t=q.e2(a)
p=q.b
if(t>=p.length)return H.e(p,t)
r=p[t]
if(r!=null)return r
return q.ij(a,t)}throw H.c(P.jb("structured clone of other type"))},
ij:function(a,b){var u,t=J.dt(a),s=t.gn(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.bF(t.j(a,u)))
return r}}
P.kd.prototype={
$2:function(a,b){this.a.a[a]=this.b.bF(b)},
$S:5}
P.fh.prototype={$ibo:1,
gdK:function(a){return this.a}}
P.kE.prototype={
$2:function(a,b){this.a[a]=b},
$S:5}
P.f9.prototype={}
P.h8.prototype={
gb7:function(){var u=this.b,t=H.am(u,"x",0),s=W.O
return new H.hz(new H.da(u,H.n(new P.h9(),{func:1,ret:P.R,args:[t]}),[t]),H.n(new P.ha(),{func:1,ret:s,args:[t]}),[t,s])},
B:function(a,b){H.n(b,{func:1,ret:-1,args:[W.O]})
C.a.B(P.lj(this.gb7(),!1,W.O),b)},
k:function(a,b,c){var u
H.f(c,"$iO")
u=this.gb7()
J.nn(u.b.$1(J.fx(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aE(this.gb7().a)},
j:function(a,b){var u=this.gb7()
return u.b.$1(J.fx(u.a,b))},
gT:function(a){var u=P.lj(this.gb7(),!1,W.O)
return new J.as(u,u.length,[H.r(u,0)])},
$ax:function(){return[W.O]},
$ai:function(){return[W.O]},
$ab:function(){return[W.O]}}
P.h9.prototype={
$1:function(a){return!!J.S(H.f(a,"$iF")).$iO},
$S:26}
P.ha.prototype={
$1:function(a){return H.q(H.f(a,"$iF"),"$iO")},
$S:33}
P.k1.prototype={
gcF:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.H(t)
return H.C(u+t,H.r(this,0))},
gdG:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.H(t)
return H.C(u+t,H.r(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.j(u.a)+", "+H.j(u.b)+") "+H.j(u.c)+" x "+H.j(u.d)},
q:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.S(b)
if(!!u.$iak){t=p.a
if(t==u.gbx(b)){s=p.b
if(s==u.gbC(b)){r=p.c
if(typeof t!=="number")return t.C()
if(typeof r!=="number")return H.H(r)
q=H.r(p,0)
if(H.C(t+r,q)===u.gcF(b)){t=p.d
if(typeof s!=="number")return s.C()
if(typeof t!=="number")return H.H(t)
u=H.C(s+t,q)===u.gdG(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u,t=this,s=t.a,r=J.dz(s),q=t.b,p=J.dz(q),o=t.c
if(typeof s!=="number")return s.C()
if(typeof o!=="number")return H.H(o)
u=H.r(t,0)
o=C.d.gH(H.C(s+o,u))
s=t.d
if(typeof q!=="number")return q.C()
if(typeof s!=="number")return H.H(s)
u=C.d.gH(H.C(q+s,u))
return P.oq(P.k_(P.k_(P.k_(P.k_(0,r),p),o),u))}}
P.ak.prototype={
gbx:function(a){return this.a},
gbC:function(a){return this.b},
gaO:function(a){return this.c},
gaI:function(a){return this.d}}
P.bb.prototype={$ibb:1}
P.hp.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibb")
throw H.c(P.K("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ax:function(){return[P.bb]},
$ii:1,
$ai:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$aI:function(){return[P.bb]}}
P.be.prototype={$ibe:1}
P.i2.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibe")
throw H.c(P.K("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ax:function(){return[P.be]},
$ii:1,
$ai:function(){return[P.be]},
$ib:1,
$ab:function(){return[P.be]},
$aI:function(){return[P.be]}}
P.i9.prototype={
gn:function(a){return a.length}}
P.cW.prototype={$icW:1}
P.iG.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.J(c)
throw H.c(P.K("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ax:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aI:function(){return[P.h]}}
P.p.prototype={
gcc:function(a){return new P.h8(a,new W.aq(a))},
al:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aB])
C.a.h(p,W.mr(null))
C.a.h(p,W.mt())
C.a.h(p,new W.kf())
c=new W.fk(new W.e4(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).ik(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.aq(s)
q=p.gaP(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.bh.prototype={$ibh:1}
P.j_.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibh")
throw H.c(P.K("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ax:function(){return[P.bh]},
$ii:1,
$ai:function(){return[P.bh]},
$ib:1,
$ab:function(){return[P.bh]},
$aI:function(){return[P.bh]}}
P.eL.prototype={}
P.eM.prototype={}
P.eW.prototype={}
P.eX.prototype={}
P.f7.prototype={}
P.f8.prototype={}
P.ff.prototype={}
P.fg.prototype={}
P.U.prototype={$ii:1,
$ai:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]},
$io9:1}
P.fC.prototype={
gn:function(a){return a.length}}
P.fD.prototype={
j:function(a,b){return P.bu(a.get(H.J(b)))},
B:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bu(t.value[1]))}},
ga6:function(a){var u=H.d([],[P.h])
this.B(a,new P.fE(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.K("Not supported"))},
$aaf:function(){return[P.h,null]},
$iy:1,
$ay:function(){return[P.h,null]}}
P.fE.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.fF.prototype={
gn:function(a){return a.length}}
P.bZ.prototype={}
P.i3.prototype={
gn:function(a){return a.length}}
P.ez.prototype={}
P.dD.prototype={$idD:1}
P.e8.prototype={$ie8:1}
P.cf.prototype={
en:function(a,b,c,d,e,f,g){var u,t=J.S(g)
if(!!t.$ibo)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.pf(g))
return}if(!!t.$ic6)t=!0
else t=!1
if(t){this.hR(a,b,c,d,e,f,g)
return}throw H.c(P.dB("Incorrect number or type of arguments"))},
hR:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a3:function(a,b,c){return a.uniform1f(b,c)},
bE:function(a,b,c){return a.uniform1i(b,c)},
Y:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
er:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
es:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eu:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$icf:1}
P.ea.prototype={$iea:1}
P.ei.prototype={$iei:1}
P.eo.prototype={$ieo:1}
P.iy.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return P.bu(a.item(b))},
k:function(a,b,c){H.f(c,"$iy")
throw H.c(P.K("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ax:function(){return[[P.y,,,]]},
$ii:1,
$ai:function(){return[[P.y,,,]]},
$ib:1,
$ab:function(){return[[P.y,,,]]},
$aI:function(){return[[P.y,,,]]}}
P.f3.prototype={}
P.f4.prototype={}
O.a2.prototype={
bp:function(a){var u=this
u.sfq(H.d([],[a]))
u.sdk(null)
u.sdg(null)
u.sdl(null)},
cM:function(a,b,c){var u=this,t=H.am(u,"a2",0)
H.n(b,{func:1,ret:P.R,args:[[P.i,t]]})
t={func:1,ret:-1,args:[P.m,[P.i,t]]}
H.n(a,t)
H.n(c,t)
u.sdk(b)
u.sdg(a)
u.sdl(c)},
b2:function(a,b){return this.cM(a,null,b)},
dj:function(a){var u
H.l(a,"$ii",[H.am(this,"a2",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cT:function(a,b){var u
H.l(b,"$ii",[H.am(this,"a2",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.as(u,u.length,[H.r(u,0)])},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.am(s,"a2",0)
H.C(b,r)
r=[r]
if(H.E(s.dj(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.cT(t,H.d([b],r))}},
ab:function(a,b){var u,t,s=this
H.l(b,"$ii",[H.am(s,"a2",0)],"$ai")
if(H.E(s.dj(b))){u=s.a
t=u.length
C.a.ab(u,b)
s.cT(t,b)}},
sfq:function(a){this.a=H.l(a,"$ib",[H.am(this,"a2",0)],"$ab")},
sdk:function(a){this.b=H.n(a,{func:1,ret:P.R,args:[[P.i,H.am(this,"a2",0)]]})},
sdg:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.m,[P.i,H.am(this,"a2",0)]]})},
sdl:function(a){H.n(a,{func:1,ret:-1,args:[P.m,[P.i,H.am(this,"a2",0)]]})},
$ii:1}
O.cN.prototype={
gn:function(a){return this.a.length},
gp:function(){var u=this.b
return u==null?this.b=D.P():u},
aQ:function(){var u=this.b
if(u!=null)u.E(null)},
ga4:function(a){var u=this.a
if(u.length>0)return C.a.gaz(u)
else return V.c9()},
bB:function(a){var u=this.a
if(a==null)C.a.h(u,V.c9())
else C.a.h(u,a)
this.aQ()},
aK:function(){var u=this.a
if(u.length>0){u.pop()
this.aQ()}},
sbT:function(a){this.a=H.l(a,"$ib",[V.at],"$ab")}}
E.fI.prototype={}
E.ao.prototype={
sbI:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gp().V(0,s.gef())
u=s.c
if(u!=null)u.gp().h(0,s.gef())
t=new D.N("shape",r,s.c,[F.eb])
t.b=!0
s.by(t)}},
at:function(a,b){var u
for(u=this.y.a,u=new J.as(u,u.length,[H.r(u,0)]);u.v();)u.d.at(0,b)},
ag:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.ga4(s))
s.aQ()
a.cC(t.f)
s=a.dy
u=(s&&C.a).gaz(s)
if(u!=null&&t.d!=null)u.ej(a,t)
for(s=t.y.a,s=new J.as(s,s.length,[H.r(s,0)]);s.v();)s.d.ag(a)
a.cB()
a.dx.aK()},
gp:function(){var u=this.z
return u==null?this.z=D.P():u},
by:function(a){var u=this.z
if(u!=null)u.E(a)},
a7:function(){return this.by(null)},
eg:function(a){H.f(a,"$iz")
this.e=null
this.by(a)},
iR:function(){return this.eg(null)},
ee:function(a){this.by(H.f(a,"$iz"))},
iO:function(){return this.ee(null)},
iN:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ii",[E.ao],"$ai")
for(u=b.length,t=this.ged(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c3()
o.sak(null)
o.saV(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a7()},
iQ:function(a,b){var u,t
H.l(b,"$ii",[E.ao],"$ai")
for(u=b.gT(b),t=this.ged();u.v();)u.gI(u).gp().V(0,t)
this.a7()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seO:function(a,b){this.y=H.l(b,"$ia2",[E.ao],"$aa2")},
$ica:1}
E.ie.prototype={
eL:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ay(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cN()
t=[V.at]
u.sbT(H.d([],t))
u.b=null
u.gp().h(0,new E.ig(s))
s.cy=u
u=new O.cN()
u.sbT(H.d([],t))
u.b=null
u.gp().h(0,new E.ih(s))
s.db=u
u=new O.cN()
u.sbT(H.d([],t))
u.b=null
u.gp().h(0,new E.ii(s))
s.dx=u
s.shQ(H.d([],[O.bQ]))
u=s.dy;(u&&C.a).h(u,null)
s.shL(new H.a3([P.h,A.cX]))},
gj_:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga4(s)
u=t.db
u=t.z=s.A(0,u.ga4(u))
s=u}return s},
cC:function(a){var u=this.dy,t=a==null?(u&&C.a).gaz(u):a;(u&&C.a).h(u,t)},
cB:function(){var u=this.dy
if(u.length>1)u.pop()},
dD:function(a){var u=a.b
if(u.length===0)throw H.c(P.D("May not cache a shader with no name."))
if(this.fr.bu(0,u))throw H.c(P.D('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)},
shQ:function(a){this.dy=H.l(a,"$ib",[O.bQ],"$ab")},
shL:function(a){this.fr=H.l(a,"$iy",[P.h,A.cX],"$ay")}}
E.ig.prototype={
$1:function(a){var u
H.f(a,"$iz")
u=this.a
u.ch=u.z=null},
$S:8}
E.ih.prototype={
$1:function(a){var u
H.f(a,"$iz")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:8}
E.ii.prototype={
$1:function(a){var u
H.f(a,"$iz")
u=this.a
u.cx=u.ch=null},
$S:8}
E.ek.prototype={
cW:function(a){H.f(a,"$iz")
this.ek()},
cV:function(){return this.cW(null)},
giA:function(){var u,t=this,s=Date.now(),r=C.d.aa(P.lU(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ay(s,!1)
return u/r},
dq:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.A()
if(typeof r!=="number")return H.H(r)
u=C.e.cn(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.A()
t=C.e.cn(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.mh(C.o,s.gj3())}},
ek:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iT(this),{func:1,ret:-1,args:[P.ac]})
C.E.ff(u)
C.E.hB(u,W.mI(t,P.ac))}},
j1:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dq()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ay(r,!1)
s.y=P.lU(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aQ()
r=s.db
C.a.sn(r.a,0)
r.aQ()
r=s.dx
C.a.sn(r.a,0)
r.aQ()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.ag(p.e)}s=p.z
if(s!=null)s.E(null)}catch(q){u=H.aj(q)
t=H.cs(q)
P.lI("Error: "+H.j(u))
P.lI("Stack: "+H.j(t))
throw H.c(u)}}}
E.iT.prototype={
$1:function(a){var u
H.mS(a)
u=this.a
if(u.ch){u.ch=!1
u.j1()}},
$S:32}
Z.ew.prototype={$ipI:1}
Z.dE.prototype={
a0:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aj(s)
t=P.D('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.j(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.j(u.e)+"]"}}
Z.ex.prototype={$ipJ:1}
Z.cA.prototype={
aH:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a0:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a0(a)},
as:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ag:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.ar(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sfm:function(a){this.b=H.l(a,"$ib",[Z.bI],"$ab")},
$ipR:1}
Z.bI.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cc(this.c)+"'")+"]"}}
Z.bt.prototype={
gcO:function(a){var u=this.a,t=(u&$.b2().a)!==0?3:0
if((u&$.bx().a)!==0)t+=3
if((u&$.bw().a)!==0)t+=3
if((u&$.by().a)!==0)t+=2
if((u&$.bY().a)!==0)t+=3
if((u&$.dw().a)!==0)t+=3
if((u&$.dx().a)!==0)t+=4
if((u&$.cv().a)!==0)++t
return(u&$.bv().a)!==0?t+4:t},
i7:function(a){var u,t=$.b2(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bx()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.by()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bY()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dx()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bv()
if((s&t.a)!==0)if(u===a)return t
return $.nc()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bt))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.h]),t=this.a
if((t&$.b2().a)!==0)C.a.h(u,"Pos")
if((t&$.bx().a)!==0)C.a.h(u,"Norm")
if((t&$.bw().a)!==0)C.a.h(u,"Binm")
if((t&$.by().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bY().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dw().a)!==0)C.a.h(u,"Clr3")
if((t&$.dx().a)!==0)C.a.h(u,"Clr4")
if((t&$.cv().a)!==0)C.a.h(u,"Weight")
if((t&$.bv().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fL.prototype={}
D.c3.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.z]}
H.n(b,u)
if(this.a==null)this.sak(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
V:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.z]})
u=s.a
u=u==null?null:C.a.U(u,b)
if(u===!0){u=s.a
t=(u&&C.a).V(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.U(u,b)
if(u===!0){u=s.b
t=(u&&C.a).V(u,b)||t}return t},
E:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.z()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.B(P.lj(u,!0,{func:1,ret:-1,args:[D.z]}),new D.h5(q))
u=r.b
if(u!=null){r.saV(H.d([],[{func:1,ret:-1,args:[D.z]}]))
C.a.B(u,new D.h6(q))}return!0},
dN:function(){return this.E(null)},
aM:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}},
sak:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")},
saV:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")}}
D.h5.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:31}
D.h6.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:31}
D.z.prototype={}
D.bJ.prototype={}
D.bK.prototype={}
D.N.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.dF.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dF))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.dT.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dT))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.ho.prototype={
iW:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
iS:function(a){this.c=a.b
this.d.V(0,a.a)
return!1},
shv:function(a){this.d=H.l(a,"$imd",[P.m],"$amd")}}
X.dX.prototype={}
X.hv.prototype={
b6:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.A()
u=b.b
t=q.ch
if(typeof u!=="number")return u.A()
s=new V.aa(o.a+n*m,o.b+u*t)
t=q.a.gaZ()
r=new X.bq(a,V.br(),q.x,t,s)
r.b=!0
q.z=new P.ay(p,!1)
q.x=s
return r},
cA:function(a,b){this.r=a.a
return!1},
bi:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.ez()
if(typeof u!=="number")return u.ao()
this.r=(u&~t)>>>0
return!1},
bh:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.b6(a,b))
return!0},
iX:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaZ()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.A()
q=a.b
p=o.cy
if(typeof q!=="number")return q.A()
t=new X.cP(new V.X(s*r,q*p),u,t)
t.b=!0
n.E(t)
return!0},
h1:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dX(c,r.a.gaZ(),b)
s.b=!0
t.E(s)
r.y=new P.ay(u,!1)
r.x=V.br()}}
X.aA.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aA))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.E(this.b)?"Alt+":""
return u+(H.E(this.c)?"Shift+":"")}}
X.bq.prototype={}
X.hU.prototype={
bQ:function(a,b,c){var u=this,t=new P.ay(Date.now(),!1),s=u.a.gaZ(),r=new X.bq(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cA:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.bQ(a,b,!0))
return!0},
bi:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.ez()
if(typeof t!=="number")return t.ao()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.bQ(a,b,!0))
return!0},
bh:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.bQ(a,b,!1))
return!0},
iY:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaZ()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.A()
r=a.b
q=p.ch
if(typeof r!=="number")return r.A()
u=new X.cP(new V.X(t*s,r*q),u,b)
u.b=!0
o.E(u)
return!0},
gdM:function(){var u=this.b
return u==null?this.b=D.P():u},
gcI:function(){var u=this.c
return u==null?this.c=D.P():u},
gec:function(){var u=this.d
return u==null?this.d=D.P():u}}
X.cP.prototype={}
X.i8.prototype={}
X.em.prototype={}
X.iX.prototype={
b6:function(a,b){var u,t,s,r,q=this
H.l(a,"$ib",[V.aa],"$ab")
u=new P.ay(Date.now(),!1)
t=a.length>0?a[0]:V.br()
s=q.a.gaZ()
r=new X.em(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
iV:function(a){var u
H.l(a,"$ib",[V.aa],"$ab")
u=this.b
if(u==null)return!1
u.E(this.b6(a,!0))
return!0},
iT:function(a){var u
H.l(a,"$ib",[V.aa],"$ab")
u=this.c
if(u==null)return!1
u.E(this.b6(a,!0))
return!0},
iU:function(a){var u
H.l(a,"$ib",[V.aa],"$ab")
u=this.d
if(u==null)return!1
u.E(this.b6(a,!1))
return!0}}
X.er.prototype={
gaZ:function(){var u=this.a,t=C.i.gdJ(u).c
t.toString
u=C.i.gdJ(u).d
u.toString
return V.mb(0,0,t,u)},
d8:function(a){var u=a.keyCode,t=H.E(a.ctrlKey)||H.E(a.metaKey)
return new X.dT(u,new X.aA(t,a.altKey,a.shiftKey))},
aW:function(a){var u=this.b,t=H.E(a.ctrlKey)||H.E(a.metaKey)
u.c=new X.aA(t,a.altKey,a.shiftKey)},
c7:function(a){var u=this.b,t=H.E(a.ctrlKey)||H.E(a.metaKey)
u.c=new X.aA(t,a.altKey,a.shiftKey)},
aD:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.L()
u=t.top
if(typeof r!=="number")return r.L()
return new V.aa(s-q,r-u)},
b9:function(a){return new V.X(a.movementX,a.movementY)},
c3:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.aa])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=C.e.ar(r.pageX)
C.e.ar(r.pageY)
p=o.left
C.e.ar(r.pageX)
C.a.h(n,new V.aa(q-p,C.e.ar(r.pageY)-o.top))}return n},
aB:function(a){var u=a.buttons,t=H.E(a.ctrlKey)||H.E(a.metaKey)
return new X.dF(u,new X.aA(t,a.altKey,a.shiftKey))},
bU:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.L()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.L()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fW:function(a){this.f=!0},
fK:function(a){this.f=!1},
fQ:function(a){H.f(a,"$ia7")
if(H.E(this.f)&&this.bU(a))a.preventDefault()},
h_:function(a){var u
H.f(a,"$iba")
if(!H.E(this.f))return
u=this.d8(a)
this.b.iW(u)},
fY:function(a){var u
H.f(a,"$iba")
if(!H.E(this.f))return
u=this.d8(a)
this.b.iS(u)},
h3:function(a){var u,t,s,r,q=this
H.f(a,"$ia7")
u=q.a
u.focus()
q.f=!0
q.aW(a)
if(H.E(q.x)){t=q.aB(a)
s=q.b9(a)
if(q.d.cA(t,s))a.preventDefault()
return}if(H.E(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aB(a)
r=q.aD(a)
if(q.c.cA(t,r))a.preventDefault()},
h7:function(a){var u,t,s,r=this
H.f(a,"$ia7")
r.aW(a)
u=r.aB(a)
if(H.E(r.x)){t=r.b9(a)
if(r.d.bi(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.aD(a)
if(r.c.bi(u,s))a.preventDefault()},
fU:function(a){var u,t,s,r=this
H.f(a,"$ia7")
if(!r.bU(a)){r.aW(a)
u=r.aB(a)
if(H.E(r.x)){t=r.b9(a)
if(r.d.bi(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.aD(a)
if(r.c.bi(u,s))a.preventDefault()}},
h5:function(a){var u,t,s,r=this
H.f(a,"$ia7")
r.aW(a)
u=r.aB(a)
if(H.E(r.x)){t=r.b9(a)
if(r.d.bh(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.aD(a)
if(r.c.bh(u,s))a.preventDefault()},
fS:function(a){var u,t,s,r=this
H.f(a,"$ia7")
if(!r.bU(a)){r.aW(a)
u=r.aB(a)
if(H.E(r.x)){t=r.b9(a)
if(r.d.bh(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.aD(a)
if(r.c.bh(u,s))a.preventDefault()}},
h9:function(a){var u,t,s=this
H.f(a,"$ibj")
s.aW(a)
u=new V.X((a&&C.D).gim(a),C.D.gio(a)).w(0,180)
if(H.E(s.x)){if(s.d.iX(u))a.preventDefault()
return}if(H.E(s.r))return
t=s.aD(a)
if(s.c.iY(u,t))a.preventDefault()},
hb:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aB(s.y)
t=s.aD(s.y)
s.d.h1(u,t,r)}},
hr:function(a){var u,t=this
H.f(a,"$ib0")
t.a.focus()
t.f=!0
t.c7(a)
u=t.c3(a)
if(t.e.iV(u))a.preventDefault()},
hn:function(a){var u
H.f(a,"$ib0")
this.c7(a)
u=this.c3(a)
if(this.e.iT(u))a.preventDefault()},
hp:function(a){var u
H.f(a,"$ib0")
this.c7(a)
u=this.c3(a)
if(this.e.iU(u))a.preventDefault()},
sfg:function(a){this.z=H.l(a,"$ib",[[P.d_,P.T]],"$ab")}}
D.bE.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.P():u},
aA:function(a){var u
H.f(a,"$iz")
u=this.r
if(u!=null)u.E(a)},
eS:function(){return this.aA(null)},
$iae:1,
$ica:1}
D.ae.prototype={$ica:1}
D.dU.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.P():u},
aA:function(a){var u=this.x
if(u!=null)u.E(a)},
di:function(a){var u
H.f(a,"$iz")
u=this.y
if(u!=null)u.E(a)},
h0:function(){return this.di(null)},
hd:function(a){var u,t,s
H.l(a,"$ii",[D.ae],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(s==null||this.eQ(s))return!1}return!0},
fE:function(a,b){var u,t,s,r,q,p,o,n=D.ae
H.l(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gdh(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=H.f(b[q],"$iae")
if(p instanceof D.bE)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.c3()
o.sak(null)
o.saV(null)
o.c=null
o.d=0
p.r=o}H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bJ([n])
n.b=!0
this.aA(n)},
hh:function(a,b){var u,t,s,r=D.ae
H.l(b,"$ii",[r],"$ai")
for(u=b.gT(b),t=this.gdh();u.v();){s=u.gI(u)
C.a.V(this.e,s)
s.gp().V(0,t)}r=new D.bK([r])
r.b=!0
this.aA(r)},
eQ:function(a){var u=C.a.U(this.e,a)
return u},
sfe:function(a){this.e=H.l(a,"$ib",[D.bE],"$ab")},
shs:function(a){this.f=H.l(a,"$ib",[D.e7],"$ab")},
shO:function(a){this.r=H.l(a,"$ib",[D.ef],"$ab")},
$ai:function(){return[D.ae]},
$aa2:function(){return[D.ae]}}
D.e7.prototype={$iae:1,$ica:1}
D.ef.prototype={$iae:1,$ica:1}
V.A.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.A))return!1
u=b.a
t=$.V().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+", "+V.Y(this.c,3,0)+"]"}}
V.aF.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aF))return!1
u=b.a
t=$.V().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Y(u.a,3,0)+", "+V.Y(u.b,3,0)+", "+V.Y(u.c,3,0)+", "+V.Y(u.d,3,0)+"]"}}
V.h4.prototype={}
V.e0.prototype={
ah:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.G])
return t},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e0))return!1
u=b.a
t=$.V().a
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
i:function(a){var u,t,s,r,q=this,p=[P.G],o=V.cq(H.d([q.a,q.d,q.r],p),3,0),n=V.cq(H.d([q.b,q.e,q.x],p),3,0),m=V.cq(H.d([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.e(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.e(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.e(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.e(o,1)
r=" "+o[1]+", "
if(1>=t)return H.e(n,1)
r=r+n[1]+", "
if(1>=s)return H.e(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.e(o,2)
p=" "+o[2]+", "
if(2>=t)return H.e(n,2)
p=p+n[2]+", "
if(2>=s)return H.e(m,2)
return r+(p+m[2]+"]")}}
V.at.prototype={
ah:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.G])
return t},
cr:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.V().a)return V.c9()
u=1/b1
t=-n
s=-a0
return V.bd((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
A:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.bd(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bD:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.Q(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cH:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.ap(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.at))return!1
u=b.a
t=$.V().a
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
i:function(a){return this.N()},
F:function(a){var u,t,s,r,q,p=this,o=[P.G],n=V.cq(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.cq(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.cq(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.cq(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.e(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.e(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.e(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.e(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.e(n,1)
q=q+n[1]+", "
if(1>=t)return H.e(m,1)
q=q+m[1]+", "
if(1>=s)return H.e(l,1)
q=q+l[1]+", "
if(1>=r)return H.e(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.e(n,2)
u=u+n[2]+", "
if(2>=t)return H.e(m,2)
u=u+m[2]+", "
if(2>=s)return H.e(l,2)
u=u+l[2]+", "
if(2>=r)return H.e(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.e(n,3)
q=q+n[3]+", "
if(3>=t)return H.e(m,3)
q=q+m[3]+", "
if(3>=s)return H.e(l,3)
q=q+l[3]+", "
if(3>=r)return H.e(k,3)
return u+(q+k[3]+"]")},
N:function(){return this.F("")}}
V.aa.prototype={
L:function(a,b){return new V.aa(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.V().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+"]"}}
V.ap.prototype={
L:function(a,b){return new V.ap(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ap))return!1
u=b.a
t=$.V().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+", "+V.Y(this.c,3,0)+"]"}}
V.bs.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bs))return!1
u=b.a
t=$.V().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Y(u.a,3,0)+", "+V.Y(u.b,3,0)+", "+V.Y(u.c,3,0)+", "+V.Y(u.d,3,0)+"]"}}
V.e9.prototype={
gaf:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e9))return!1
u=b.a
t=$.V().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Y(u.a,3,0)+", "+V.Y(u.b,3,0)+", "+V.Y(u.c,3,0)+", "+V.Y(u.d,3,0)+"]"}}
V.X.prototype={
cs:function(a){return Math.sqrt(this.G(this))},
G:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.H(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.H(t)
return s*r+u*t},
A:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.A()
u=this.b
if(typeof u!=="number")return u.A()
return new V.X(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.V().a){u=$.mn
return u==null?$.mn=new V.X(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.X(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=this.a
s=$.V()
s.toString
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.H(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.H(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+"]"}}
V.Q.prototype={
cs:function(a){return Math.sqrt(this.G(this))},
G:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ct:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.Q(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
bg:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.Q(u*t-s*r,s*q-p*t,p*r-u*q)},
C:function(a,b){return new V.Q(this.a+b.a,this.b+b.b,this.c+b.c)},
S:function(a){return new V.Q(-this.a,-this.b,-this.c)},
w:function(a,b){if(Math.abs(b-0)<$.V().a)return V.ev()
return new V.Q(this.a/b,this.b/b,this.c/b)},
eb:function(){var u=$.V().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=$.V().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+", "+V.Y(this.c,3,0)+"]"}}
U.fM.prototype={
bL:function(a){var u=V.pH(a,this.c,this.b)
return u},
gp:function(){var u=this.y
return u==null?this.y=D.P():u},
P:function(a){var u=this.y
if(u!=null)u.E(a)},
scJ:function(a,b){},
scv:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.V().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bL(u)}s=new D.N("maximumLocation",s,t.b,[P.G])
s.b=!0
t.P(s)}},
scz:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.V().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bL(u)}s=new D.N("minimumLocation",s,t.c,[P.G])
s.b=!0
t.P(s)}},
sae:function(a,b){var u,t=this
b=t.bL(b)
u=t.d
if(!(Math.abs(u-b)<$.V().a)){t.d=b
u=new D.N("location",u,b,[P.G])
u.b=!0
t.P(u)}},
scw:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.V().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.N("maximumVelocity",r,a,[P.G])
r.b=!0
s.P(r)}},
sW:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.V().a)){u.f=a
t=new D.N("velocity",t,a,[P.G])
t.b=!0
u.P(t)}},
scf:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.V().a)){this.x=a
u=new D.N("dampening",u,a,[P.G])
u.b=!0
this.P(u)}},
at:function(a,b){var u,t,s,r=this,q=r.f,p=$.V().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sae(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.V().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sW(u)}}}
U.dH.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.P():u},
b1:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dH))return!1
return J.a5(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")}}
U.cJ.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.P():u},
P:function(a){var u
H.f(a,"$iz")
u=this.e
if(u!=null)u.E(a)},
a8:function(){return this.P(null)},
fC:function(a,b){var u,t,s,r,q,p,o,n=U.ag
H.l(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gaR(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gp()
o.toString
H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bJ([n])
n.b=!0
this.P(n)},
hf:function(a,b){var u,t,s=U.ag
H.l(b,"$ii",[s],"$ai")
for(u=b.gT(b),t=this.gaR();u.v();)u.gI(u).gp().V(0,t)
s=new D.bK([s])
s.b=!0
this.P(s)},
b1:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.R()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.as(r,r.length,[H.r(r,0)]),u=null;r.v();){q=r.d
if(q!=null){t=q.b1(0,b,c)
if(t!=null)u=u==null?t:t.A(0,u)}}s.f=u==null?V.c9():u
r=s.e
if(r!=null)r.aM(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cJ))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.a5(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ag]},
$aa2:function(){return[U.ag]},
$iag:1}
U.ag.prototype={}
U.es.prototype={
gp:function(){var u=this.cy
return u==null?this.cy=D.P():u},
P:function(a){var u
H.f(a,"$iz")
u=this.cy
if(u!=null)u.E(a)},
a8:function(){return this.P(null)},
bd:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdM().h(0,u.gbV())
u.a.c.gec().h(0,u.gbX())
u.a.c.gcI().h(0,u.gbZ())
return!0},
bW:function(a){var u=this
H.f(a,"$iz")
if(!J.a5(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bY:function(a){var u,t,s,r,q,p,o,n=this
a=H.q(H.f(a,"$iz"),"$ibq")
if(!H.E(n.y))return
if(H.E(n.x)){u=a.d.L(0,a.y)
u=new V.X(u.a,u.b)
u=u.G(u)
t=n.r
if(typeof t!=="number")return H.H(t)
if(u<t)return
n.x=!1}if(H.E(n.d)){u=a.c
t=a.d.L(0,a.y)
u=new V.X(t.a,t.b).A(0,2).w(0,u.gaf())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.A()
s=n.e
if(typeof s!=="number")return H.H(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=new V.X(s.a,s.b).A(0,2).w(0,u.gaf())
s=n.b
q=r.a
if(typeof q!=="number")return q.S()
p=n.e
if(typeof p!=="number")return H.H(p)
o=n.z
if(typeof o!=="number")return H.H(o)
s.sae(0,-q*p+o)
n.b.sW(0)
t=t.L(0,a.z)
n.Q=new V.X(t.a,t.b).A(0,2).w(0,u.gaf())}n.a8()},
c_:function(a){var u,t,s,r=this
H.f(a,"$iz")
if(!H.E(r.y))return
r.y=!1
if(H.E(r.x))return
u=r.Q
if(u.G(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.A()
s=r.e
if(typeof s!=="number")return H.H(s)
u.sW(t*10*s)
r.a8()}},
b1:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.R()
if(q<p){r.ch=p
u=b.y
r.b.at(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.bd(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iag:1}
U.et.prototype={
gp:function(){var u=this.fx
return u==null?this.fx=D.P():u},
P:function(a){var u
H.f(a,"$iz")
u=this.fx
if(u!=null)u.E(a)},
a8:function(){return this.P(null)},
bd:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdM().h(0,s.gbV())
s.a.c.gec().h(0,s.gbX())
s.a.c.gcI().h(0,s.gbZ())
u=s.a.d
t=u.f
u=t==null?u.f=D.P():t
u.h(0,s.gfs())
u=s.a.d
t=u.d
u=t==null?u.d=D.P():t
u.h(0,s.gfu())
u=s.a.e
t=u.b
u=t==null?u.b=D.P():t
u.h(0,s.ghX())
u=s.a.e
t=u.d
u=t==null?u.d=D.P():t
u.h(0,s.ghV())
u=s.a.e
t=u.c
u=t==null?u.c=D.P():t
u.h(0,s.ghT())
return!0},
ax:function(a){var u=a.a,t=a.b
if(H.E(this.f)){if(typeof u!=="number")return u.S()
u=-u}if(H.E(this.r)){if(typeof t!=="number")return t.S()
t=-t}return new V.X(u,t)},
bW:function(a){var u=this
a=H.q(H.f(a,"$iz"),"$ibq")
if(!J.a5(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bY:function(a){var u,t,s,r,q,p,o,n=this
a=H.q(H.f(a,"$iz"),"$ibq")
if(!H.E(n.cx))return
if(H.E(n.ch)){u=a.d.L(0,a.y)
u=new V.X(u.a,u.b)
u=u.G(u)
t=n.Q
if(typeof t!=="number")return H.H(t)
if(u<t)return
n.ch=!1}if(H.E(n.e)){u=a.c
t=a.d.L(0,a.y)
u=n.ax(new V.X(t.a,t.b).A(0,2).w(0,u.gaf()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.H(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.H(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.ax(new V.X(s.a,s.b).A(0,2).w(0,u.gaf()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.H(p)
o=n.cy
if(typeof o!=="number")return H.H(o)
s.sae(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.H(q)
s=n.db
if(typeof s!=="number")return H.H(s)
o.sae(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.L(0,a.z)
n.dx=n.ax(new V.X(t.a,t.b).A(0,2).w(0,u.gaf()))}n.a8()},
c_:function(a){var u,t,s,r=this
H.f(a,"$iz")
if(!H.E(r.cx))return
r.cx=!1
if(H.E(r.ch))return
u=r.dx
if(u.G(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.H(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.H(u)
s.sW(-t*10*u)
r.a8()}},
ft:function(a){var u=this
if(H.q(H.f(a,"$iz"),"$idX").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fv:function(a){var u,t,s,r,q,p,o,n=this
a=H.q(H.f(a,"$iz"),"$ibq")
if(!J.a5(n.d,a.x.b))return
u=a.c
t=a.d
s=t.L(0,a.y)
r=n.ax(new V.X(s.a,s.b).A(0,2).w(0,u.gaf()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.H(p)
o=n.cy
if(typeof o!=="number")return H.H(o)
s.sae(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.H(q)
s=n.db
if(typeof s!=="number")return H.H(s)
o.sae(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.L(0,a.z)
n.dx=n.ax(new V.X(t.a,t.b).A(0,2).w(0,u.gaf()))
n.a8()},
hY:function(a){var u=this
H.f(a,"$iz")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hW:function(a){var u,t,s,r,q,p,o,n=this
a=H.q(H.f(a,"$iz"),"$iem")
if(!H.E(n.cx))return
if(H.E(n.ch)){u=a.d.L(0,a.y)
u=new V.X(u.a,u.b)
u=u.G(u)
t=n.Q
if(typeof t!=="number")return H.H(t)
if(u<t)return
n.ch=!1}if(H.E(n.e)){u=a.c
t=a.d.L(0,a.y)
u=n.ax(new V.X(t.a,t.b).A(0,2).w(0,u.gaf()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.H(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.H(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.ax(new V.X(s.a,s.b).A(0,2).w(0,u.gaf()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.H(p)
o=n.cy
if(typeof o!=="number")return H.H(o)
s.sae(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.H(q)
s=n.db
if(typeof s!=="number")return H.H(s)
o.sae(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.L(0,a.z)
n.dx=n.ax(new V.X(t.a,t.b).A(0,2).w(0,u.gaf()))}n.a8()},
hU:function(a){var u,t,s,r=this
H.f(a,"$iz")
if(!H.E(r.cx))return
r.cx=!1
if(H.E(r.ch))return
u=r.dx
if(u.G(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.H(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.H(u)
s.sW(-t*10*u)
r.a8()}},
b1:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.R()
if(q<p){r.dy=p
u=b.y
r.c.at(0,u)
r.b.at(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.bd(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.A(0,V.bd(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iag:1}
U.eu.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.P():u},
P:function(a){var u=this.r
if(u!=null)u.E(a)},
bd:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.P():t
t=r.gfz()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.P():s).h(0,t)
return!0},
fA:function(a){var u,t,s,r,q=this
H.f(a,"$iz")
if(!J.a5(q.b,q.a.b.c))return
H.q(a,"$icP")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.A()
r=u+t*s
if(u!==r){q.d=r
u=new D.N("zoom",u,r,[P.G])
u.b=!0
q.P(u)}},
b1:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.bd(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iag:1}
M.dG.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.P():u},
a_:function(a){var u
H.f(a,"$iz")
u=this.r
if(u!=null)u.E(a)},
b4:function(){return this.a_(null)},
hj:function(a,b){var u,t,s,r,q,p,o,n=M.aC
H.l(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gZ(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gp()
o.toString
H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bJ([n])
n.b=!0
this.a_(n)},
hl:function(a,b){var u,t,s=M.aC
H.l(b,"$ii",[s],"$ai")
for(u=b.gT(b),t=this.gZ();u.v();)u.gI(u).gp().V(0,t)
s=new D.bK([s])
s.b=!0
this.a_(s)},
ag:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.as(u,u.length,[H.r(u,0)]);u.v();){t=u.d
if(t!=null)t.ag(a)}s.f=!1},
$ai:function(){return[M.aC]},
$aa2:function(){return[M.aC]},
$iaC:1}
M.dI.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.P():u},
a_:function(a){var u
H.f(a,"$iz")
u=this.r
if(u!=null)u.E(a)},
b4:function(){return this.a_(null)},
sbe:function(a){var u,t,s=this
if(a==null)a=new X.hj()
u=s.b
if(u!==a){if(u!=null)u.gp().V(0,s.gZ())
t=s.b
s.b=a
a.gp().h(0,s.gZ())
u=new D.N("camera",t,s.b,[X.c0])
u.b=!0
s.a_(u)}},
sbk:function(a,b){var u,t,s=this
if(b==null)b=X.la(null)
u=s.c
if(u!==b){if(u!=null)u.gp().V(0,s.gZ())
t=s.c
s.c=b
b.gp().h(0,s.gZ())
u=new D.N("target",t,s.c,[X.d1])
u.b=!0
s.a_(u)}},
sbl:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().V(0,t.gZ())
u=t.d
t.d=a
if(a!=null)a.gp().h(0,t.gZ())
s=new D.N("technique",u,t.d,[O.bQ])
s.b=!0
t.a_(s)}},
ag:function(a){var u=this
a.cC(u.d)
u.c.a0(a)
u.b.a0(a)
u.e.at(0,a)
u.e.ag(a)
u.b.as(a)
u.c.toString
a.cB()},
$iaC:1}
M.dM.prototype={
a_:function(a){var u
H.f(a,"$iz")
u=this.y
if(u!=null)u.E(a)},
b4:function(){return this.a_(null)},
fM:function(a,b){var u,t,s,r,q,p,o,n=E.ao
H.l(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gZ(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c3()
o.sak(null)
o.saV(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bJ([n])
n.b=!0
this.a_(n)},
fO:function(a,b){var u,t,s=E.ao
H.l(b,"$ii",[s],"$ai")
for(u=b.gT(b),t=this.gZ();u.v();)u.gI(u).gp().V(0,t)
s=new D.bK([s])
s.b=!0
this.a_(s)},
sbe:function(a){var u,t,s=this
if(a==null)a=X.m4(null)
u=s.b
if(u!==a){if(u!=null)u.gp().V(0,s.gZ())
t=s.b
s.b=a
a.gp().h(0,s.gZ())
u=new D.N("camera",t,s.b,[X.c0])
u.b=!0
s.a_(u)}},
sbk:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gp().V(0,t.gZ())
u=t.c
t.c=b
b.gp().h(0,t.gZ())
s=new D.N("target",u,t.c,[X.d1])
s.b=!0
t.a_(s)}},
sbl:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().V(0,t.gZ())
u=t.d
t.d=a
if(a!=null)a.gp().h(0,t.gZ())
s=new D.N("technique",u,t.d,[O.bQ])
s.b=!0
t.a_(s)}},
gp:function(){var u=this.y
return u==null?this.y=D.P():u},
ag:function(a){var u,t=this
a.cC(t.d)
t.c.a0(a)
t.b.a0(a)
u=t.d
if(u!=null)u.at(0,a)
for(u=t.e.a,u=new J.as(u,u.length,[H.r(u,0)]);u.v();)u.d.at(0,a)
for(u=t.e.a,u=new J.as(u,u.length,[H.r(u,0)]);u.v();)u.d.ag(a)
t.b.toString
a.cy.aK()
a.db.aK()
t.c.toString
a.cB()},
sf7:function(a,b){this.e=H.l(b,"$ia2",[E.ao],"$aa2")},
$iaC:1}
M.aC.prototype={}
A.dC.prototype={}
A.fB.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
it:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dL:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ad.prototype={
gau:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof A.ad))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.e_.prototype={
eK:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.ai("")
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
A.oY(c0,u)
A.p_(c0,u)
A.oZ(c0,u)
A.p1(c0,u)
A.p2(c0,u)
A.p0(c0,u)
A.p3(c0,u)
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
b5.ea(0,s.charCodeAt(0)==0?s:s,A.oX(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.q(b5.y.K(0,"invViewMat"),"$iaw")
if(t)b5.dy=H.q(b5.y.K(0,"objMat"),"$iaw")
if(r)b5.fr=H.q(b5.y.K(0,"viewObjMat"),"$iaw")
b5.fy=H.q(b5.y.K(0,"projViewObjMat"),"$iaw")
if(c0.ry)b5.k1=H.q(b5.y.K(0,"txt2DMat"),"$id8")
if(c0.x1)b5.k2=H.q(b5.y.K(0,"txtCubeMat"),"$iaw")
if(c0.x2)b5.k3=H.q(b5.y.K(0,"colorMat"),"$iaw")
b5.sf3(H.d([],[A.aw]))
t=c0.y2
if(t>0){b5.k4=H.f(b5.y.K(0,"bendMatCount"),"$iaN")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.B(P.D(b7+q+b8));(s&&C.a).h(s,H.q(m,"$iaw"))}}t=c0.a
if(t.a)b5.r2=H.q(b5.y.K(0,"emissionClr"),"$iZ")
if(t.b)b5.rx=H.q(b5.y.K(0,"emissionTxt"),"$ial")
t=c0.b
if(t.a)b5.x1=H.q(b5.y.K(0,"ambientClr"),"$iZ")
if(t.b)b5.x2=H.q(b5.y.K(0,"ambientTxt"),"$ial")
t=c0.c
if(t.a)b5.y2=H.q(b5.y.K(0,"diffuseClr"),"$iZ")
if(t.b)b5.aG=H.q(b5.y.K(0,"diffuseTxt"),"$ial")
t=c0.d
if(t.a)b5.dP=H.q(b5.y.K(0,"invDiffuseClr"),"$iZ")
if(t.b)b5.dQ=H.q(b5.y.K(0,"invDiffuseTxt"),"$ial")
t=c0.e
s=t.a
if(s||t.b||!1){b5.dT=H.q(b5.y.K(0,"shininess"),"$iab")
if(s)b5.dR=H.q(b5.y.K(0,"specularClr"),"$iZ")
if(t.b)b5.dS=H.q(b5.y.K(0,"specularTxt"),"$ial")}if(c0.f.b)b5.dU=H.q(b5.y.K(0,"bumpTxt"),"$ial")
if(c0.cy){b5.dV=H.q(b5.y.K(0,"envSampler"),"$ibS")
t=c0.r
if(t.a)b5.dW=H.q(b5.y.K(0,"reflectClr"),"$iZ")
if(t.b)b5.dX=H.q(b5.y.K(0,"reflectTxt"),"$ial")
t=c0.x
s=t.a
if(s||t.b||!1){b5.dY=H.q(b5.y.K(0,"refraction"),"$iab")
if(s)b5.dZ=H.q(b5.y.K(0,"refractClr"),"$iZ")
if(t.b)b5.e_=H.q(b5.y.K(0,"refractTxt"),"$ial")}}t=c0.y
if(t.a)b5.e0=H.q(b5.y.K(0,"alpha"),"$iab")
if(t.b)b5.e1=H.q(b5.y.K(0,"alphaTxt"),"$ial")
t=P.m
s=[t,A.aN]
b5.sfd(new H.a3(s))
b5.seT(new H.a3([t,[P.b,A.cg]]))
b5.sht(new H.a3(s))
b5.shu(new H.a3([t,[P.b,A.ch]]))
b5.shN(new H.a3(s))
b5.seU(new H.a3([t,[P.b,A.ci]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.cg],l=0;l<t.length;t.length===s||(0,H.u)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.j(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ao()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.B(P.D(b7+g+b8))
H.q(m,"$iZ")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.B(P.D(b7+g+b8))
H.q(f,"$iZ")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.B(P.D(b7+g+b8))
H.q(e,"$iZ")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.B(P.D(b7+g+b8))
H.q(m,"$iZ")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.B(P.D(b7+g+b8))
H.q(f,"$iZ")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.B(P.D(b7+o+b8))
H.q(e,"$ial")
a=e}else a=b6
C.a.h(h,new A.cg(b,c,d,m,f,a))}b5.ci.k(0,j,h)
q=b5.cg
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.B(P.D(b7+o+b8))
q.k(0,j,H.f(m,"$iaN"))}for(t=c0.Q,s=t.length,r=[A.ch],l=0;l<t.length;t.length===s||(0,H.u)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.j(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.B(P.D(b7+o+b8))
H.q(m,"$iZ")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.B(P.D(b7+o+b8))
H.q(f,"$iZ")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.B(P.D(b7+o+b8))
H.q(e,"$iZ")
if(typeof j!=="number")return j.ao()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.B(P.D(b7+o+b8))
H.q(a0,"$id8")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.B(P.D(b7+o+b8))
H.q(a0,"$ibS")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.B(P.D(b7+o+b8))
H.q(a0,"$ibS")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.B(P.D(b7+o+b8))
H.q(a2,"$id7")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.B(P.D(b7+o+b8))
H.q(a0,"$iab")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.B(P.D(b7+o+b8))
H.q(a2,"$iab")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.B(P.D(b7+o+b8))
H.q(a5,"$iab")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.ch(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.ck.k(0,j,h)
q=b5.cj
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.B(P.D(b7+o+b8))
q.k(0,j,H.f(m,"$iaN"))}for(t=c0.ch,s=t.length,r=[A.ci],l=0;l<t.length;t.length===s||(0,H.u)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.j(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.B(P.D(b7+o+b8))
H.q(m,"$iZ")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.B(P.D(b7+o+b8))
H.q(f,"$iZ")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.B(P.D(b7+o+b8))
H.q(e,"$iZ")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.B(P.D(b7+o+b8))
H.q(a0,"$iZ")
if(typeof j!=="number")return j.ao()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.B(P.D(b7+o+b8))
H.q(a2,"$iZ")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.B(P.D(b7+o+b8))
H.q(a5,"$iZ")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.B(P.D(b7+o+b8))
H.q(a9,"$iab")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.B(P.D(b7+o+b8))
H.q(b0,"$iab")
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
if(a2==null)H.B(P.D(b7+g+b8))
H.q(a2,"$id7")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.B(P.D(b7+g+b8))
H.q(a2,"$iab")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.B(P.D(b7+g+b8))
H.q(a5,"$iab")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.B(P.D(b7+g+b8))
H.q(a2,"$iab")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.B(P.D(b7+g+b8))
H.q(a5,"$iab")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.B(P.D(b7+g+b8))
H.q(a9,"$iab")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.B(P.D(b7+g+b8))
H.q(a2,"$ial")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.B(P.D(b7+o+b8))
H.q(a2,"$ial")
a3=a2}else a3=b6
C.a.h(h,new A.ci(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.cm.k(0,j,h)
q=b5.cl
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.B(P.D(b7+o+b8))
q.k(0,j,H.f(m,"$iaN"))}}},
aq:function(a,b){if(b!=null&&b.d)a.eB(b)},
hH:function(a,b){if(b!=null&&b.d>=6)a.cN(b)},
sf3:function(a){this.r1=H.l(a,"$ib",[A.aw],"$ab")},
sfd:function(a){this.cg=H.l(a,"$iy",[P.m,A.aN],"$ay")},
seT:function(a){this.ci=H.l(a,"$iy",[P.m,[P.b,A.cg]],"$ay")},
sht:function(a){this.cj=H.l(a,"$iy",[P.m,A.aN],"$ay")},
shu:function(a){this.ck=H.l(a,"$iy",[P.m,[P.b,A.ch]],"$ay")},
shN:function(a){this.cl=H.l(a,"$iy",[P.m,A.aN],"$ay")},
seU:function(a){this.cm=H.l(a,"$iy",[P.m,[P.b,A.ci]],"$ay")}}
A.aG.prototype={
i:function(a){return"dirLight"+H.j(this.a)}}
A.aJ.prototype={
i:function(a){return"pointLight"+H.j(this.a)}}
A.aK.prototype={
i:function(a){return"spotLight"+H.j(this.a)}}
A.hE.prototype={
i:function(a){return this.aG}}
A.cg.prototype={}
A.ch.prototype={}
A.ci.prototype={}
A.cX.prototype={
cS:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
ea:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.d9(b,35633)
r.f=r.d9(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.E(H.lA(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.B(P.D("Failed to link shader: "+H.j(s)))}r.hI()
r.hK()},
a0:function(a){a.a.useProgram(this.r)
this.x.it()},
d9:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.E(H.lA(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.D("Error compiling shader '"+H.j(s)+"': "+H.j(u)))}return s},
hI:function(){var u,t,s,r=this,q=H.d([],[A.dC]),p=r.a,o=H.a4(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.H(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dC(p,t.name,s))}r.x=new A.fB(q)},
hK:function(){var u,t,s,r=this,q=H.d([],[A.en]),p=r.a,o=H.a4(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.H(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.il(t.type,t.size,t.name,s))}r.y=new A.j8(q)},
aS:function(a,b,c){var u=this.a
if(a===1)return new A.aN(u,b,c)
else return A.ln(u,this.r,b,a,c)},
fa:function(a,b,c){var u=this.a
if(a===1)return new A.al(u,b,c)
else return A.ln(u,this.r,b,a,c)},
fb:function(a,b,c){var u=this.a
if(a===1)return new A.bS(u,b,c)
else return A.ln(u,this.r,b,a,c)},
bs:function(a,b){return new P.eG(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
il:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aS(b,c,d)
case 5121:return u.aS(b,c,d)
case 5122:return u.aS(b,c,d)
case 5123:return u.aS(b,c,d)
case 5124:return u.aS(b,c,d)
case 5125:return u.aS(b,c,d)
case 5126:return new A.ab(u.a,c,d)
case 35664:return new A.j4(u.a,c,d)
case 35665:return new A.Z(u.a,c,d)
case 35666:return new A.d7(u.a,c,d)
case 35667:return new A.j5(u.a,c,d)
case 35668:return new A.j6(u.a,c,d)
case 35669:return new A.j7(u.a,c,d)
case 35674:return new A.j9(u.a,c,d)
case 35675:return new A.d8(u.a,c,d)
case 35676:return new A.aw(u.a,c,d)
case 35678:return u.fa(b,c,d)
case 35680:return u.fb(b,c,d)
case 35670:throw H.c(u.bs("BOOL",c))
case 35671:throw H.c(u.bs("BOOL_VEC2",c))
case 35672:throw H.c(u.bs("BOOL_VEC3",c))
case 35673:throw H.c(u.bs("BOOL_VEC4",c))
default:throw H.c(P.D("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.ed.prototype={}
A.en.prototype={}
A.j8.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
K:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.D("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.N()},
N:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aN.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.j5.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.j6.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.j7.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.j3.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
si_:function(a){H.l(a,"$ib",[P.m],"$ab")}}
A.ab.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.j4.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.Z.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.d7.prototype={
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.j9.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.d8.prototype={
ap:function(a){var u=new Float32Array(H.cl(H.l(a,"$ib",[P.G],"$ab")))
C.c.es(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.aw.prototype={
ap:function(a){var u=new Float32Array(H.cl(H.l(a,"$ib",[P.G],"$ab")))
C.c.eu(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.al.prototype={
eB:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.bS.prototype={
cN:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.kt.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.ct(s.b,b).ct(s.d.ct(s.c,b),c)
s=new V.ap(r.a,r.b,r.c)
if(!J.a5(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a7()}a.sj7(r.w(0,Math.sqrt(r.G(r))))
s=1-b
u=1-c
u=new V.bs(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.a5(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a7()}},
$S:44}
F.a9.prototype={
f2:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.ev()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.eb())return
return s.w(0,Math.sqrt(s.G(s)))},
f6:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.L(0,q)
r=new V.Q(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.G(r)))
r=t.L(0,q)
r=new V.Q(r.a,r.b,r.c)
r=s.bg(r.w(0,Math.sqrt(r.G(r))))
return r.w(0,Math.sqrt(r.G(r)))},
cb:function(){var u,t=this
if(t.d!=null)return!0
u=t.f2()
if(u==null){u=t.f6()
if(u==null)return!1}t.d=u
t.a.a.a7()
return!0},
f1:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.ev()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.eb())return
return s.w(0,Math.sqrt(s.G(s)))},
f5:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.V().a){l=d.L(0,g)
l=new V.Q(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.G(l)))
if(s.a-t.a<0)q=q.S(0)}else{p=(l-u.b)/r
l=d.L(0,g)
l=new V.ap(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).L(0,j)
l=new V.Q(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.G(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.S(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.G(l)))
l=o.bg(q)
l=l.w(0,Math.sqrt(l.G(l))).bg(o)
q=l.w(0,Math.sqrt(l.G(l)))}return q},
c9:function(){var u,t=this
if(t.e!=null)return!0
u=t.f1()
if(u==null){u=t.f5()
if(u==null)return!1}t.e=u
t.a.a.a7()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.an(J.ar(s.e),0)+", "+C.b.an(J.ar(t.b.e),0)+", "+C.b.an(J.ar(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
N:function(){return this.F("")}}
F.bp.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.an(J.ar(u.e),0)+", "+C.b.an(J.ar(this.b.e),0)},
N:function(){return this.F("")}}
F.bO.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.an(J.ar(u.e),0)},
N:function(){return this.F("")}}
F.eb.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.P():u},
iK:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.a2()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){r=g[s]
h.a.h(0,r.ii())}h.a.a2()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.a2()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bO()
if(n.a==null)H.B(P.D("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.E(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.a2()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.a2()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.nG(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.a2()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.a2()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.a2()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cG(l,k,i)}g=h.e
if(g!=null)g.aM(0)},
aE:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aE()||!1
if(!t.a.aE())u=!1
s=t.e
if(s!=null)s.aM(0)
return u},
dH:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.b2()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bx().a)!==0)++s
if((t&$.bw().a)!==0)++s
if((t&$.by().a)!==0)++s
if((t&$.bY().a)!==0)++s
if((t&$.dw().a)!==0)++s
if((t&$.dx().a)!==0)++s
if((t&$.cv().a)!==0)++s
if((t&$.bv().a)!==0)++s
r=a3.gcO(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.G
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dE])
for(n=0,m=0;m<s;++m){l=a3.i7(m)
k=l.gcO(l)
C.a.k(o,m,new Z.dE(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.e(u,j)
i=u[j].iH(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.l(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cl(p)),35044)
u.bindBuffer(a0,null)
e=new Z.cA(new Z.ew(a0,f),o,a3)
e.sfm(H.d([],[Z.bI]))
if(a.b.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.a2()
C.a.h(d,c.e)}b=Z.lr(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bI(0,d.length,b))}if(a.c.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.a2()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.a2()
C.a.h(d,c.e)}b=Z.lr(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bI(1,d.length,b))}if(a.d.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.a2()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.a2()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].c
c.a.a.a2()
C.a.h(d,c.e)}b=Z.lr(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bI(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.h])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.F(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.F(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.F(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.F(t))}return C.a.m(s,"\n")},
a7:function(){var u=this.e
if(u!=null)u.E(null)},
$ipP:1}
F.ip.prototype={
i3:function(a){var u,t,s,r,q,p
H.l(a,"$ib",[F.aD],"$ab")
u=H.d([],[F.a9])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.cG(t,q,p))}return u},
i4:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.aD],"$ab")
u=H.d([],[F.a9])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.e(c,r)
l=c[r];++r
if(r>=m)return H.e(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.e(c,j)
i=c[j]
if(s<0||s>=m)return H.e(c,s)
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
gn:function(a){return this.b.length},
aE:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].cb())s=!1
return s},
ca:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].c9())s=!1
return s},
i:function(a){return this.N()},
F:function(a){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(a))
return C.a.m(r,"\n")},
N:function(){return this.F("")},
sfh:function(a){this.b=H.l(a,"$ib",[F.a9],"$ab")}}
F.iq.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.N()},
F:function(a){var u,t,s=H.d([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
C.a.h(s,t[u].F(a+(""+u+". ")))}return C.a.m(s,"\n")},
N:function(){return this.F("")},
sfn:function(a){this.b=H.l(a,"$ib",[F.bp],"$ab")}}
F.ir.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.N()},
F:function(a){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(a))
return C.a.m(r,"\n")},
N:function(){return this.F("")},
sc2:function(a){this.b=H.l(a,"$ib",[F.bO],"$ab")}}
F.aD.prototype={
ce:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.jr(u.cx,r,o,t,s,q,p,a,n)},
ii:function(){return this.ce(null)},
sj7:function(a){var u
if(!J.a5(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a7()}},
iH:function(a){var u,t,s=this
if(a.q(0,$.b2())){u=s.f
t=[P.G]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.bx())){u=s.r
t=[P.G]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.bw())){u=s.x
t=[P.G]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.by())){u=s.y
t=[P.G]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.q(0,$.bY())){u=s.z
t=[P.G]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.dw())){u=s.Q
t=[P.G]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.dx())){u=s.Q
t=[P.G]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.cv()))return H.d([s.ch],[P.G])
else if(a.q(0,$.bv())){u=s.cx
t=[P.G]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.G])},
cb:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.ev()
t.d.B(0,new F.jz(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.G(s)))
s=t.a
if(s!=null){s.a7()
s=t.a.e
if(s!=null)s.aM(0)}return!0},
c9:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.ev()
t.d.B(0,new F.jy(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.G(s)))
s=t.a
if(s!=null){s.a7()
s=t.a.e
if(s!=null)s.aM(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){var u,t,s=this,r="-",q=H.d([],[P.h])
C.a.h(q,C.b.an(J.ar(s.e),0))
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
C.a.h(q,V.Y(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
N:function(){return this.F("")}}
F.jz.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:9}
F.jy.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:9}
F.js.prototype={
a2:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.D("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a7()
return!0},
bt:function(a,b,c,d,e,f){var u=F.jr(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gn:function(a){return this.c.length},
aE:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].cb()
return!0},
ca:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].c9()
return!0},
ie:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a5(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
i:function(a){return this.N()},
F:function(a){var u,t,s,r
this.a2()
u=H.d([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].F(a))
return C.a.m(u,"\n")},
N:function(){return this.F("")},
si0:function(a){this.c=H.l(a,"$ib",[F.aD],"$ab")}}
F.jt.prototype={
gn:function(a){return this.b.length+this.c.length+this.d.length},
B:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a9]})
C.a.B(u.b,b)
C.a.B(u.c,new F.ju(u,b))
C.a.B(u.d,new F.jv(u,b))},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
return C.a.m(r,"\n")},
sfi:function(a){this.b=H.l(a,"$ib",[F.a9],"$ab")},
sfj:function(a){this.c=H.l(a,"$ib",[F.a9],"$ab")},
sfk:function(a){this.d=H.l(a,"$ib",[F.a9],"$ab")}}
F.ju.prototype={
$1:function(a){H.f(a,"$ia9")
if(!J.a5(a.a,this.a))this.b.$1(a)},
$S:9}
F.jv.prototype={
$1:function(a){var u
H.f(a,"$ia9")
u=this.a
if(!J.a5(a.a,u)&&!J.a5(a.b,u))this.b.$1(a)},
$S:9}
F.jw.prototype={
gn:function(a){return this.b.length+this.c.length},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
return C.a.m(r,"\n")},
sfo:function(a){this.b=H.l(a,"$ib",[F.bp],"$ab")},
sfp:function(a){this.c=H.l(a,"$ib",[F.bp],"$ab")}}
F.jx.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
return C.a.m(r,"\n")},
sc2:function(a){this.b=H.l(a,"$ib",[F.bO],"$ab")}}
O.dZ.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.P():u},
X:function(a){var u
H.f(a,"$iz")
u=this.fr
if(u!=null)u.E(a)},
b8:function(){return this.X(null)},
dn:function(a){H.f(a,"$iz")
this.a=null
this.X(a)},
hD:function(){return this.dn(null)},
fG:function(a,b){var u=V.at
H.l(b,"$ii",[u],"$ai")
u=new D.bJ([u])
u.b=!0
this.X(u)},
fI:function(a,b){var u=V.at
H.l(b,"$ii",[u],"$ai")
u=new D.bK([u])
u.b=!0
this.X(u)},
d6:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.m,h=new H.a3([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=h.j(0,0)
h.k(0,0,r==null?1:r)}q=H.d([],[A.aG])
h.B(0,new O.hI(j,q))
C.a.bJ(q,new O.hJ())
p=new H.a3([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){o=u[s]
r=o.gbf()
n=p.j(0,o.gbf())
p.k(0,r,n==null?1:n)}m=H.d([],[A.aJ])
p.B(0,new O.hK(j,m))
C.a.bJ(m,new O.hL())
l=new H.a3([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.u)(i),++s){o=i[s]
t=o.gbf()
r=l.j(0,o.gbf())
l.k(0,t,r==null?1:r)}k=H.d([],[A.aK])
l.B(0,new O.hM(j,k))
C.a.bJ(k,new O.hN())
i=C.d.aa(j.e.a.length+3,4)
j.dy.e
return A.nM(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
aj:function(a,b){H.l(a,"$ib",[T.d3],"$ab")
if(b!=null)if(!C.a.U(a,b)){b.sb_(0,a.length)
C.a.h(a,b)}},
at:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.as(u,u.length,[H.r(u,0)]);u.v();){t=u.d
t.toString
s=$.jq
if(s==null)s=$.jq=new V.Q(0,0,1)
t.a=s
r=$.jp
t.d=r==null?$.jp=new V.Q(0,1,0):r
r=$.jo
t.e=r==null?$.jo=new V.Q(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bD(s)
r=s.a
p=s.b
o=s.c
t.a=s.w(0,Math.sqrt(r*r+p*p+o*o))
o=q.bD(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.w(0,Math.sqrt(p*p+r*r+s*s))
s=q.bD(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.w(0,Math.sqrt(r*r+p*p+o*o))}}}},
ej:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.d6()
u=H.f(b4.fr.j(0,b3.aG),"$ie_")
if(u==null){u=A.nL(b3,b4.a)
b4.dD(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.dO
b3=b5.e
if(!(b3 instanceof Z.cA))b3=b5.e=null
if(b3==null||!b3.d.q(0,s)){b3=t.k3
if(b3)b5.d.aE()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.ca()
q.a.ca()
q=q.e
if(q!=null)q.aM(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.ie()
p=p.e
if(p!=null)p.aM(0)}n=b5.d.dH(new Z.ex(b4.a),s)
n.aH($.b2()).e=b2.a.Q.c
if(b3)n.aH($.bx()).e=b2.a.cx.c
if(r)n.aH($.bw()).e=b2.a.ch.c
if(t.r1)n.aH($.by()).e=b2.a.cy.c
if(q)n.aH($.bY()).e=b2.a.db.c
if(t.rx)n.aH($.bv()).e=b2.a.dx.c
b5.e=n}b3=T.d3
m=H.d([],[b3])
b2.a.a0(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.ga4(q)
r=r.dy
r.toString
r.ap(q.ah(0,!0))}if(t.fr){r=b2.a
q=b4.cx
if(q==null){q=b4.db
q=q.ga4(q)
p=b4.dx
p=b4.cx=q.A(0,p.ga4(p))
q=p}r=r.fr
r.toString
r.ap(q.ah(0,!0))}r=b2.a
q=b4.ch
if(q==null){q=b4.gj_()
p=b4.dx
p=b4.ch=q.A(0,p.ga4(p))
q=p}r=r.fy
r.toString
r.ap(q.ah(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.ap(C.j.ah(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.ap(C.j.ah(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.ap(C.j.ah(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.c.bE(r.a,r.d,l)
for(r=[P.G],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.e(p,k)
p=p[k]
q.toString
H.f(p,"$iat")
q=q.r1
if(k>=q.length)return H.e(q,k)
q=q[k]
j=new Float32Array(H.cl(H.l(p.ah(0,!0),"$ib",r,"$ab")))
C.c.eu(q.a,q.d,!1,j)}}r=t.a
if(r.a){q=b2.a
p=b2.f.f
q=q.r2
C.c.Y(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.aj(m,b2.f.d)
r=b2.a
q=b2.f.d
r.aq(r.rx,q)}if(t.id){r=t.b
if(r.a){q=b2.a
p=b2.r.f
q=q.x1
C.c.Y(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.aj(m,b2.r.d)
r=b2.a
q=b2.r.d
r.aq(r.x2,q)}r=t.c
if(r.a){q=b2.a
p=b2.x.f
q=q.y2
C.c.Y(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.aj(m,b2.x.d)
r=b2.a
q=b2.x.d
r.aq(r.aG,q)}r=t.d
if(r.a){q=b2.a
p=b2.y.f
q=q.dP
C.c.Y(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.aj(m,b2.y.d)
r=b2.a
q=b2.y.d
r.aq(r.dQ,q)}r=t.e
q=r.a
if(q||r.b||!1){p=b2.a
o=b2.z.ch
p=p.dT
C.c.a3(p.a,p.d,o)}if(q){q=b2.a
p=b2.z.f
q=q.dR
C.c.Y(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.aj(m,b2.z.d)
r=b2.a
q=b2.z.d
r.aq(r.dS,q)}r=t.z
if(r.length>0){q=b4.db
i=q.ga4(q)
q=P.m
h=new H.a3([q,q])
for(q=b2.dx.e,p=q.length,g=0;g<q.length;q.length===p||(0,H.u)(q),++g){f=q[g]
e=h.j(0,0)
if(e==null)e=0
h.k(0,0,e+1)
d=J.dy(b2.a.ci.j(0,0),e)
o=i.bD(f.a)
c=o.a
b=o.b
a=o.c
a=o.w(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
o=a.b
a=a.c
C.c.Y(b.a,b.d,c,o,a)
a=f.c
o=d.f
C.c.Y(o.a,o.d,a.a,a.b,a.c)}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.u)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.cg.j(0,p)
C.c.bE(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.ga4(q)
q=P.m
a0=new H.a3([q,q])
for(q=b2.dx.f,p=q.length,o=[b3],c=[P.G],g=0;g<q.length;q.length===p||(0,H.u)(q),++g){f=q[g]
a1=f.gbf()
e=a0.j(0,a1)
if(e==null)e=0
a0.k(0,a1,e+1)
d=J.dy(b2.a.ck.j(0,a1),e)
a2=i.A(0,f.ga4(f))
b=f.ga4(f)
a=$.cU
b=b.cH(a==null?$.cU=new V.ap(0,0,0):a)
a=d.b
C.c.Y(a.a,a.d,b.a,b.b,b.c)
b=$.cU
b=a2.cH(b==null?$.cU=new V.ap(0,0,0):b)
a=d.c
C.c.Y(a.a,a.d,b.a,b.b,b.c)
b=f.gt(f)
a=d.e
C.c.Y(a.a,a.d,b.a,b.b,b.c)
f.gaN()
b=a2.cr(0)
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
j=new Float32Array(H.cl(H.l(new V.e0(a,a3,a4,a5,a6,a7,a8,a9,b).ah(0,!0),"$ib",c,"$ab")))
C.c.es(b0.a,b0.d,!1,j)
f.gaN()
b=f.gaN()
H.l(m,"$ib",o,"$ab")
if(!C.a.U(m,b)){b.sb_(0,m.length)
C.a.h(m,b)}b=f.gaN()
a=b.gcu(b)
if(a){a=d.f
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}f.gb3()
b=f.geC()
a=d.x
a.toString
a3=b.giq(b)
a4=b.gir(b)
a5=b.gis()
b=b.gip()
C.c.er(a.a,a.d,a3,a4,a5,b)
b=f.gb3()
if(!C.a.U(m,b)){b.sb_(0,m.length)
C.a.h(m,b)}b=f.gb3()
a=b.gcu(b)
if(a){a=d.r
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}if(f.giu()){b=f.gi8()
a=d.y
C.c.a3(a.a,a.d,b)
b=f.gi9()
a=d.z
C.c.a3(a.a,a.d,b)
b=f.gia()
a=d.Q
C.c.a3(a.a,a.d,b)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.u)(r),++g){p=r[g].a
l=a0.j(0,p)
if(l==null)l=0
p=b2.a.cj.j(0,p)
C.c.bE(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.ga4(q)
q=P.m
b1=new H.a3([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.u)(q),++g){f=q[g]
a1=f.gbf()
e=b1.j(0,a1)
if(e==null)e=0
b1.k(0,a1,e+1)
d=J.dy(b2.a.cm.j(0,a1),e)
o=f.giZ(f)
c=d.b
C.c.Y(c.a,c.d,o.a,o.b,o.c)
o=f.gji(f).ju()
c=d.c
C.c.Y(c.a,c.d,o.a,o.b,o.c)
o=i.cH(f.giZ(f))
c=d.d
C.c.Y(c.a,c.d,o.a,o.b,o.c)
o=f.gt(f)
c=d.e
C.c.Y(c.a,c.d,o.a,o.b,o.c)
f.gaN()
o=f.gcI()
c=d.f
C.c.Y(c.a,c.d,o.a,o.b,o.c)
o=f.gcF(f)
c=d.r
C.c.Y(c.a,c.d,o.a,o.b,o.c)
o=f.gjv()
c=d.x
C.c.a3(c.a,c.d,o)
o=f.gjw()
c=d.y
C.c.a3(c.a,c.d,o)
f.gaN()
o=f.gaN()
H.l(m,"$ib",b3,"$ab")
if(!C.a.U(m,o)){o.sb_(0,m.length)
C.a.h(m,o)}o=f.gaN()
c=o.gcu(o)
if(c){c=d.dx
c.toString
b=o.d
if(!b)c.a.uniform1i(c.d,0)
else{o=o.a
c.a.uniform1i(c.d,o)}}f.gb3()
o=f.geC()
c=d.z
c.toString
b=o.giq(o)
a=o.gir(o)
a3=o.gis()
o=o.gip()
C.c.er(c.a,c.d,b,a,a3,o)
o=f.gb3()
if(!C.a.U(m,o)){o.sb_(0,m.length)
C.a.h(m,o)}o=f.gb3()
c=o.gcu(o)
if(c){c=d.dy
c.toString
b=o.d
if(!b)c.a.uniform1i(c.d,0)
else{o=o.a
c.a.uniform1i(c.d,o)}}if(f.gjj()){o=f.gjh()
c=d.Q
C.c.a3(c.a,c.d,o)
o=f.gjg()
c=d.ch
C.c.a3(c.a,c.d,o)}if(f.giu()){o=f.gi8()
c=d.cx
C.c.a3(c.a,c.d,o)
o=f.gi9()
c=d.cy
C.c.a3(c.a,c.d,o)
o=f.gia()
c=d.db
C.c.a3(c.a,c.d,o)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.u)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.cl.j(0,q)
C.c.bE(q.a,q.d,l)}}}if(t.f.b){b2.aj(m,b2.Q.d)
b3=b2.a
r=b2.Q.d
b3.aq(b3.dU,r)}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.ga4(r).cr(0)}b3=b3.id
b3.toString
b3.ap(r.ah(0,!0))}if(t.cy){b2.aj(m,b2.ch)
b3=b2.a
r=b2.ch
b3.hH(b3.dV,r)
b3=t.r
if(b3.a){r=b2.a
q=b2.cx.f
r=r.dW
C.c.Y(r.a,r.d,q.a,q.b,q.c)}if(b3.b){b2.aj(m,b2.cx.d)
b3=b2.a
r=b2.cx.d
b3.aq(b3.dX,r)}b3=t.x
r=b3.a
if(r||b3.b||!1){q=b2.a
p=b2.cy.ch
q=q.dY
C.c.a3(q.a,q.d,p)}if(r){r=b2.a
q=b2.cy.f
r=r.dZ
C.c.Y(r.a,r.d,q.a,q.b,q.c)}if(b3.b){b2.aj(m,b2.cy.d)
b3=b2.a
r=b2.cy.d
b3.aq(b3.e_,r)}}b3=t.y
r=b3.a
q=!r
if(!q||b3.b||!1){if(r){r=b2.a
p=b2.db.f
r=r.e0
C.c.a3(r.a,r.d,p)}if(b3.b){b2.aj(m,b2.db.d)
r=b2.a
p=b2.db.d
r.aq(r.e1,p)}r=b4.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].a0(b4)
r=b5.e
r.a0(b4)
r.ag(b4)
r.as(b4)
if(!q||b3.b||!1)b4.a.disable(3042)
for(k=0;k<m.length;++k)m[k].as(b4)
b3=b2.a
b3.toString
b4.a.useProgram(null)
b3.x.dL()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.d6().aG},
sf4:function(a){this.e=H.l(a,"$ia2",[V.at],"$aa2")}}
O.hI.prototype={
$2:function(a,b){H.a4(a)
H.a4(b)
if(typeof b!=="number")return b.C()
return C.a.h(this.b,new A.aG(a,C.d.aa(b+3,4)*4))},
$S:14}
O.hJ.prototype={
$2:function(a,b){H.f(a,"$iaG")
H.f(b,"$iaG")
return J.l3(a.a,b.a)},
$S:48}
O.hK.prototype={
$2:function(a,b){H.a4(a)
H.a4(b)
if(typeof b!=="number")return b.C()
return C.a.h(this.b,new A.aJ(a,C.d.aa(b+3,4)*4))},
$S:14}
O.hL.prototype={
$2:function(a,b){H.f(a,"$iaJ")
H.f(b,"$iaJ")
return J.l3(a.a,b.a)},
$S:49}
O.hM.prototype={
$2:function(a,b){H.a4(a)
H.a4(b)
if(typeof b!=="number")return b.C()
return C.a.h(this.b,new A.aK(a,C.d.aa(b+3,4)*4))},
$S:14}
O.hN.prototype={
$2:function(a,b){H.f(a,"$iaK")
H.f(b,"$iaK")
return J.l3(a.a,b.a)},
$S:50}
O.hC.prototype={
aC:function(){var u,t=this
t.cQ()
u=t.f
if(!(Math.abs(u-1)<$.V().a)){t.f=1
u=new D.N(t.b,u,1,[P.G])
u.b=!0
t.a.X(u)}}}
O.cM.prototype={
X:function(a){return this.a.X(H.f(a,"$iz"))},
b8:function(){return this.X(null)},
aC:function(){},
bb:function(a){var u,t,s=this
if(!s.c.q(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.aC()
u=s.a
u.a=null
u.X(null)}}}
O.hD.prototype={}
O.bc.prototype={
ds:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.N(s.b+".color",u,a,[V.A])
t.b=!0
s.a.X(t)}},
aC:function(){this.cQ()
this.ds(new V.A(1,1,1))},
st:function(a,b){this.bb(new A.ad(!0,this.c.b,!1))
this.ds(b)}}
O.hF.prototype={}
O.hG.prototype={
c5:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.V().a)){u.ch=a
t=new D.N(u.b+".refraction",t,a,[P.G])
t.b=!0
u.a.X(t)}},
aC:function(){this.cR()
this.c5(1)},
saF:function(a){var u=this,t=u.c.b
if(a<=0){u.bb(new A.ad(!1,t,!1))
u.c5(0)}else{u.bb(new A.ad(!0,t,!1))
u.c5(a)}}}
O.hH.prototype={
dt:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.V().a)){u.ch=a
t=new D.N(u.b+".shininess",t,a,[P.G])
t.b=!0
u.a.X(t)}},
aC:function(){this.cR()
this.dt(100)}}
O.ec.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.P():u},
X:function(a){var u
H.f(a,"$iz")
u=this.e
if(u!=null)u.E(a)},
b8:function(){return this.X(null)},
ej:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.f(a.fr.j(0,n),"$ied")
if(u==null){t=a.a
u=new A.ed(t,n)
u.cS(t,n)
u.ea(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.q(u.y.j(0,"fov"),"$iab")
u.ch=H.q(u.y.j(0,"ratio"),"$iab")
u.cx=H.q(u.y.j(0,"boxClr"),"$iZ")
u.cy=H.q(u.y.j(0,"boxTxt"),"$ibS")
u.db=H.q(u.y.j(0,"viewMat"),"$iaw")
a.dD(u)}o.a=u}if(b.e==null){t=b.d.dH(new Z.ex(a.a),$.b2())
t.aH($.b2()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.a0(a)}t=a.d
s=a.c
r=o.a
r.a0(a)
q=o.b
p=r.Q
C.c.a3(p.a,p.d,q)
q=r.ch
C.c.a3(q.a,q.d,t/s)
s=o.c
r.cy.cN(s)
s=o.d
t=r.cx
C.c.Y(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga4(s).cr(0)
r=r.db
r.toString
r.ap(s.ah(0,!0))
t=b.e
if(t instanceof Z.cA){t.a0(a)
t.ag(a)
t.as(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.dL()
t=o.c
if(t!=null)t.as(a)}}
O.bQ.prototype={}
T.d3.prototype={}
T.ej.prototype={}
T.iP.prototype={
sb_:function(a,b){this.a=b},
gp:function(){var u=this.y
return u==null?this.y=D.P():u},
a0:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}},
as:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(3553,null)}}}
T.d4.prototype={
sb_:function(a,b){this.a=b},
gp:function(){var u=this.e
return u==null?this.e=D.P():u},
a0:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
as:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.iQ.prototype={
iI:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.lb(a)
t=new T.iP()
t.a=0
t.b=q
t.d=t.c=!1
r=W.o
W.a8(u,"load",H.n(new T.iS(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
aT:function(a,b,c,d,e,f){var u,t=W.lb(c);++this.d
u=W.o
W.a8(t,"load",H.n(new T.iR(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
dr:function(a,b,c){var u,t,s,r
b=V.lH(b)
u=V.lH(a.width)
t=V.lH(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.l6()
s.width=u
s.height=t
r=H.f(C.i.ey(s,"2d"),"$icB")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.pg(r.getImageData(0,0,s.width,s.height))}}}
T.iS.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.dr(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.c.en(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.dN()}++s.e},
$S:10}
T.iR.prototype={
$1:function(a){var u=this,t=u.a,s=t.dr(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.c.en(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.dN()}++t.e},
$S:10}
V.bm.prototype={
aJ:function(a,b){return!0},
i:function(a){return"all"},
$iaz:1}
V.az.prototype={}
V.dY.prototype={
aJ:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)if(u[s].aJ(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa9:function(a){this.a=H.l(a,"$ib",[V.az],"$ab")},
$iaz:1}
V.au.prototype={
aJ:function(a,b){return!this.eH(0,b)},
i:function(a){return"!["+this.cP(0)+"]"}}
V.id.prototype={
aJ:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.cd(this.a),t=H.cd(this.b)
return u+".."+t},
$iaz:1}
V.io.prototype={
eM:function(a){var u,t
if(a.a.length<=0)throw H.c(P.D("May not create a SetMatcher with zero characters."))
u=new H.a3([P.m,P.R])
for(t=new H.cL(a,a.gn(a),[H.am(a,"x",0)]);t.v();)u.k(0,t.d,!0)
this.shG(u)},
aJ:function(a,b){return this.a.bu(0,b)},
i:function(a){var u=this.a
return P.d0(u.ga6(u),0,null)},
shG:function(a){this.a=H.l(a,"$iy",[P.m,P.R],"$ay")},
$iaz:1}
V.cY.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d6(this.a.l(0,b))
r.sa9(H.d([],[V.az]))
r.c=!1
C.a.h(this.c,r)
return r},
ix:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.aJ(0,a))return r}return},
i:function(a){return this.b},
shZ:function(a){this.c=H.l(a,"$ib",[V.d6],"$ab")}}
V.el.prototype={
i:function(a){var u=H.lJ(this.b,"\n","\\n"),t=H.lJ(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d5.prototype={
aL:function(a,b,c){var u,t,s
H.l(c,"$ib",[P.h],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.u)(c),++t){s=c[t]
this.c.k(0,s,b)}},
i:function(a){return this.b},
shz:function(a){var u=P.h
this.c=H.l(a,"$iy",[u,u],"$ay")}}
V.iV.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cY(this,b)
u.shZ(H.d([],[V.d6]))
u.d=null
this.a.k(0,b,u)}return u},
O:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.d5(a)
u=P.h
t.shz(new H.a3([u,u]))
this.b.k(0,a,t)}return t},
eq:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.el]),k=this.c,j=[P.m],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.D(a,s)
q=k.ix(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.d0(i,0,m)
throw H.c(P.D("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.d0(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.el(n==null?o.b:n,p,s)}++s}}},
shP:function(a){this.a=H.l(a,"$iy",[P.h,V.cY],"$ay")},
shS:function(a){this.b=H.l(a,"$iy",[P.h,V.d5],"$ay")}}
V.d6.prototype={
i:function(a){return this.b.b+": "+this.cP(0)}}
X.c0.prototype={$ica:1}
X.hd.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.P():u},
aw:function(a){var u=this.x
if(u!=null)u.E(a)},
sdI:function(a,b){var u
if(this.b){this.b=!1
u=new D.N("clearColor",!0,!1,[P.R])
u.b=!0
this.aw(u)}},
a0:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.H(u)
q=C.e.ar(r*u)
r=s.b
if(typeof t!=="number")return H.H(t)
p=C.e.ar(r*t)
r=C.e.ar(s.c*u)
a.c=r
s=C.e.ar(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.hj.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.P():u},
a0:function(a){var u
a.cy.bB(V.c9())
u=V.c9()
a.db.bB(u)},
as:function(a){a.cy.aK()
a.db.aK()},
$ica:1,
$ic0:1}
X.e6.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.P():u},
aw:function(a){var u
H.f(a,"$iz")
u=this.f
if(u!=null)u.E(a)},
eZ:function(){return this.aw(null)},
a0:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.bd(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bB(k)
r=$.m5
if(r==null){r=V.m7()
q=V.lq()
p=$.mo
r=V.m0(r,q,p==null?$.mo=new V.Q(0,0,-1):p)
$.m5=r
u=r}else u=r
r=s.b
if(r!=null){t=r.b1(0,a,s)
if(t!=null)u=t.A(0,u)}a.db.bB(u)},
as:function(a){a.cy.aK()
a.db.aK()},
$ica:1,
$ic0:1}
X.d1.prototype={}
V.bC.prototype={
bo:function(a){this.b=new P.hh(C.Q)
this.c=null
this.sbS(H.d([],[[P.b,W.aH]]))},
M:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aH]))
u=a.split("\n")
for(l=u.length,t=[W.aH],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.J(q)
o=m.b.f9(q,0,q.length)
n=o==null?q:o
C.O.eA(p,H.lJ(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaz(m.d),p)}},
eh:function(a,b){var u,t,s,r,q=this
H.l(b,"$ib",[P.h],"$ab")
q.sbS(H.d([],[[P.b,W.aH]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bv():t).eq(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)q.bA(t[r])},
sbS:function(a){this.d=H.l(a,"$ib",[[P.b,W.aH]],"$ab")}}
V.l_.prototype={
$1:function(a){var u
H.f(a,"$ibg")
u=C.e.ep(this.a.giA(),2)
if(u!=="0.00")P.lI(u+" fps")},
$S:52}
V.fV.prototype={
bA:function(a){var u=this
switch(a.a){case"Class":u.M(a.b,"#551")
break
case"Comment":u.M(a.b,"#777")
break
case"Id":u.M(a.b,"#111")
break
case"Num":u.M(a.b,"#191")
break
case"Reserved":u.M(a.b,"#119")
break
case"String":u.M(a.b,"#171")
break
case"Symbol":u.M(a.b,"#616")
break
case"Type":u.M(a.b,"#B11")
break
case"Whitespace":u.M(a.b,"#111")
break}},
bv:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iW()
a1.c=a1.l(0,r)
u=a1.l(0,r).m(0,q)
t=V.v(new H.t("_"))
C.a.h(u.a,t)
t=V.a0("a","z")
C.a.h(u.a,t)
t=V.a0("A","Z")
C.a.h(u.a,t)
t=a1.l(0,q).m(0,q)
u=V.v(new H.t("_"))
C.a.h(t.a,u)
u=V.a0("0","9")
C.a.h(t.a,u)
u=V.a0("a","z")
C.a.h(t.a,u)
u=V.a0("A","Z")
C.a.h(t.a,u)
u=a1.l(0,r).m(0,p)
t=V.a0("0","9")
C.a.h(u.a,t)
t=a1.l(0,p).m(0,p)
u=V.a0("0","9")
C.a.h(t.a,u)
u=a1.l(0,p).m(0,o)
t=V.v(new H.t("."))
C.a.h(u.a,t)
t=a1.l(0,o).m(0,n)
u=V.a0("0","9")
C.a.h(t.a,u)
u=a1.l(0,n).m(0,n)
t=V.a0("0","9")
C.a.h(u.a,t)
t=a1.l(0,r).m(0,m)
u=V.v(new H.t(l))
C.a.h(t.a,u)
u=a1.l(0,m).m(0,m)
t=V.v(new H.t(l))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,k)
u=V.v(new H.t('"'))
C.a.h(t.a,u)
u=a1.l(0,k).m(0,j)
t=V.v(new H.t('"'))
C.a.h(u.a,t)
t=a1.l(0,k).m(0,i)
u=V.v(new H.t("\\"))
C.a.h(t.a,u)
u=a1.l(0,i).m(0,k)
t=V.v(new H.t('"'))
C.a.h(u.a,t)
C.a.h(a1.l(0,k).m(0,k).a,new V.bm())
t=a1.l(0,r).m(0,h)
u=V.v(new H.t("'"))
C.a.h(t.a,u)
u=a1.l(0,h).m(0,g)
t=V.v(new H.t("'"))
C.a.h(u.a,t)
t=a1.l(0,h).m(0,f)
u=V.v(new H.t("\\"))
C.a.h(t.a,u)
u=a1.l(0,f).m(0,h)
t=V.v(new H.t("'"))
C.a.h(u.a,t)
C.a.h(a1.l(0,h).m(0,h).a,new V.bm())
t=a1.l(0,r).m(0,e)
u=V.v(new H.t("/"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,d)
t=V.v(new H.t("/"))
C.a.h(u.a,t)
t=a1.l(0,d).m(0,c)
u=V.v(new H.t("\n"))
C.a.h(t.a,u)
u=a1.l(0,d).m(0,d)
t=new V.au()
s=[V.az]
t.sa9(H.d([],s))
C.a.h(u.a,t)
u=V.v(new H.t("\n"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,b)
t=V.v(new H.t("*"))
C.a.h(u.a,t)
t=a1.l(0,b).m(0,a)
u=V.v(new H.t("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,b)
t=new V.au()
t.sa9(H.d([],s))
C.a.h(u.a,t)
u=V.v(new H.t("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,c)
t=V.v(new H.t("/"))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,a0)
u=V.v(new H.t(" \n\t"))
C.a.h(t.a,u)
u=a1.l(0,a0).m(0,a0)
t=V.v(new H.t(" \n\t"))
C.a.h(u.a,t)
t=a1.l(0,p)
t.d=t.a.O("Num")
t=a1.l(0,n)
t.d=t.a.O("Num")
t=a1.l(0,m)
t.d=t.a.O("Symbol")
t=a1.l(0,j)
t.d=t.a.O("String")
t=a1.l(0,g)
t.d=t.a.O("String")
t=a1.l(0,c)
t.d=t.a.O(d)
t=a1.l(0,a0)
t.d=t.a.O(a0)
t=a1.l(0,q)
t=t.d=t.a.O(q)
u=[P.h]
t.aL(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aL(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aL(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.he.prototype={
bA:function(a){var u=this
switch(a.a){case"Builtin":u.M(a.b,"#411")
break
case"Comment":u.M(a.b,"#777")
break
case"Id":u.M(a.b,"#111")
break
case"Num":u.M(a.b,"#191")
break
case"Preprocess":u.M(a.b,"#737")
break
case"Reserved":u.M(a.b,"#119")
break
case"Symbol":u.M(a.b,"#611")
break
case"Type":u.M(a.b,"#171")
break
case"Whitespace":u.M(a.b,"#111")
break}},
bv:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iW()
e.c=e.l(0,r)
u=e.l(0,r).m(0,q)
t=V.v(new H.t("_"))
C.a.h(u.a,t)
t=V.a0("a","z")
C.a.h(u.a,t)
t=V.a0("A","Z")
C.a.h(u.a,t)
t=e.l(0,q).m(0,q)
u=V.v(new H.t("_"))
C.a.h(t.a,u)
u=V.a0("0","9")
C.a.h(t.a,u)
u=V.a0("a","z")
C.a.h(t.a,u)
u=V.a0("A","Z")
C.a.h(t.a,u)
u=e.l(0,r).m(0,p)
t=V.a0("0","9")
C.a.h(u.a,t)
t=e.l(0,p).m(0,p)
u=V.a0("0","9")
C.a.h(t.a,u)
u=e.l(0,p).m(0,o)
t=V.v(new H.t("."))
C.a.h(u.a,t)
t=e.l(0,o).m(0,n)
u=V.a0("0","9")
C.a.h(t.a,u)
u=e.l(0,n).m(0,n)
t=V.a0("0","9")
C.a.h(u.a,t)
t=e.l(0,r).m(0,m)
u=V.v(new H.t(l))
C.a.h(t.a,u)
u=e.l(0,m).m(0,m)
t=V.v(new H.t(l))
C.a.h(u.a,t)
t=e.l(0,r).m(0,k)
u=V.v(new H.t("/"))
C.a.h(t.a,u)
u=e.l(0,k).m(0,j)
t=V.v(new H.t("/"))
C.a.h(u.a,t)
C.a.h(e.l(0,k).m(0,m).a,new V.bm())
t=e.l(0,j).m(0,i)
u=V.v(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,j).m(0,j)
t=new V.au()
s=[V.az]
t.sa9(H.d([],s))
C.a.h(u.a,t)
u=V.v(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,h)
t=V.v(new H.t("#"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,h)
u=new V.au()
u.sa9(H.d([],s))
C.a.h(t.a,u)
t=V.v(new H.t("\n"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,g)
u=V.v(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,f)
t=V.v(new H.t(" \n\t"))
C.a.h(u.a,t)
t=e.l(0,f).m(0,f)
u=V.v(new H.t(" \n\t"))
C.a.h(t.a,u)
u=e.l(0,p)
u.d=u.a.O("Num")
u=e.l(0,n)
u.d=u.a.O("Num")
u=e.l(0,m)
u.d=u.a.O("Symbol")
u=e.l(0,i)
u.d=u.a.O(j)
u=e.l(0,g)
u.d=u.a.O(h)
u=e.l(0,f)
u.d=u.a.O(f)
u=e.l(0,q)
u=u.d=u.a.O(q)
t=[P.h]
u.aL(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aL(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aL(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.hf.prototype={
bA:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.M(a.b,"#911")
u.M("=",t)
break
case"Id":u.M(a.b,t)
break
case"Other":u.M(a.b,t)
break
case"Reserved":u.M(a.b,"#119")
break
case"String":u.M(a.b,"#171")
break
case"Symbol":u.M(a.b,"#616")
break}},
bv:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iW()
l.c=l.l(0,s)
u=l.l(0,s).m(0,r)
t=V.v(new H.t("_"))
C.a.h(u.a,t)
t=V.a0("a","z")
C.a.h(u.a,t)
t=V.a0("A","Z")
C.a.h(u.a,t)
t=l.l(0,r).m(0,r)
u=V.v(new H.t("_"))
C.a.h(t.a,u)
u=V.a0("0","9")
C.a.h(t.a,u)
u=V.a0("a","z")
C.a.h(t.a,u)
u=V.a0("A","Z")
C.a.h(t.a,u)
u=l.l(0,r).m(0,q)
t=V.v(new H.t("="))
C.a.h(u.a,t)
u.c=!0
u=l.l(0,s).m(0,p)
t=V.v(new H.t("</\\-!>="))
C.a.h(u.a,t)
t=l.l(0,p).m(0,p)
u=V.v(new H.t("</\\-!>="))
C.a.h(t.a,u)
u=l.l(0,s).m(0,o)
t=V.v(new H.t('"'))
C.a.h(u.a,t)
t=l.l(0,o).m(0,n)
u=V.v(new H.t('"'))
C.a.h(t.a,u)
u=l.l(0,o).m(0,"EscStr")
t=V.v(new H.t("\\"))
C.a.h(u.a,t)
t=l.l(0,"EscStr").m(0,o)
u=V.v(new H.t('"'))
C.a.h(t.a,u)
C.a.h(l.l(0,o).m(0,o).a,new V.bm())
C.a.h(l.l(0,s).m(0,m).a,new V.bm())
u=l.l(0,m).m(0,m)
t=new V.au()
t.sa9(H.d([],[V.az]))
C.a.h(u.a,t)
u=V.v(new H.t('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.a0("a","z")
C.a.h(t.a,u)
u=V.a0("A","Z")
C.a.h(t.a,u)
u=l.l(0,p)
u.d=u.a.O("Symbol")
u=l.l(0,n)
u.d=u.a.O("String")
u=l.l(0,r)
t=u.a.O(r)
u.d=t
t.aL(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.l(0,q)
t.d=t.a.O(q)
t=l.l(0,m)
t.d=t.a.O(m)
return l}}
V.i6.prototype={
eh:function(a,b){H.l(b,"$ib",[P.h],"$ab")
this.sbS(H.d([],[[P.b,W.aH]]))
this.M(C.a.m(b,"\n"),"#111")},
bA:function(a){},
bv:function(){return}}
V.ia.prototype={
dA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.jg().gbj().j(0,H.j(u))
if(t==null)if(d){c.$0()
m.bc(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.cw(m.c).h(0,q)
o=W.nB("radio")
o.checked=s
o.name=u
u=W.o
W.a8(o,"change",H.n(new V.ib(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.cw(m.c).h(0,r.createElement("br"))},
ad:function(a,b,c){return this.dA(a,b,c,!1)},
bc:function(a){var u,t,s=P.jg(),r=P.h,q=P.lZ(s.gbj(),r,r)
q.k(0,this.a,a)
u=s.cE(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.f9([],[]).bF(""),"",t)}}
V.ib.prototype={
$1:function(a){var u=this
if(H.E(u.b.checked)){u.c.$0()
u.a.bc(u.d)}},
$S:10}
V.is.prototype={
eN:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a8(q,"scroll",H.n(new V.iu(o),{func:1,ret:-1,args:[r]}),!1,r)},
dC:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.h],"$ab")
this.hJ()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eq(C.a.iG(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
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
if(H.pD(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.J(m[1])
l.textContent=H.J(m[0])
t.appendChild(l)}else{k=P.fj(C.y,n,C.h,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.j(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
ex:function(a){var u,t,s,r=new V.fV("dart")
r.bo("dart")
u=new V.he("glsl")
u.bo("glsl")
t=new V.hf("html")
t.bo("html")
s=C.a.iy(H.d([r,u,t],[V.bC]),new V.iv(a))
if(s!=null)return s
r=new V.i6("plain")
r.bo("plain")
return r},
dB:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.l(b0,"$ib",[P.h],"$ab")
u=H.d([],[P.m])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.du(r).a5(r,"+")){C.a.k(b0,s,C.b.ac(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a5(r,"-")){C.a.k(b0,s,C.b.ac(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.ex(a8)
q.eh(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.fj(C.y,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lO()
i.href="#"+H.j(m)
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
if(s>=u.length)return H.e(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.u)(r),++a0)C.a_.i6(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.u)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gT(r);a3.v();)c.appendChild(a3.gI(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
i1:function(a){var u,t,s,r,q,p,o,n="auto"
H.l(a,"$ib",[P.h],"$ab")
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
s=H.f(r.insertCell(-1),"$ibf").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
for(q=0;q<2;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.f(r.insertCell(-1),"$ibf")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
hJ:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iW()
u.c=u.l(0,q)
t=u.l(0,q).m(0,p)
s=V.v(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,p).m(0,p)
s=new V.au()
r=[V.az]
s.sa9(H.d([],r))
C.a.h(t.a,s)
t=V.v(new H.t("*"))
C.a.h(s.a,t)
t=u.l(0,p).m(0,"BoldEnd")
s=V.v(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,o)
s=V.v(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,o).m(0,o)
s=new V.au()
s.sa9(H.d([],r))
C.a.h(t.a,s)
t=V.v(new H.t("_"))
C.a.h(s.a,t)
t=u.l(0,o).m(0,n)
s=V.v(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,m)
s=V.v(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,m).m(0,m)
s=new V.au()
s.sa9(H.d([],r))
C.a.h(t.a,s)
t=V.v(new H.t("`"))
C.a.h(s.a,t)
t=u.l(0,m).m(0,"CodeEnd")
s=V.v(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,l)
s=V.v(new H.t("["))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,l).m(0,k)
s=V.v(new H.t("|"))
C.a.h(t.a,s)
s=u.l(0,l).m(0,j)
t=V.v(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,l).m(0,l)
t=new V.au()
t.sa9(H.d([],r))
C.a.h(s.a,t)
s=V.v(new H.t("|]"))
C.a.h(t.a,s)
s=u.l(0,k).m(0,j)
t=V.v(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,k).m(0,k)
t=new V.au()
t.sa9(H.d([],r))
C.a.h(s.a,t)
s=V.v(new H.t("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,q).m(0,i).a,new V.bm())
s=u.l(0,i).m(0,i)
t=new V.au()
t.sa9(H.d([],r))
C.a.h(s.a,t)
s=V.v(new H.t("*_`["))
C.a.h(t.a,s)
s=u.l(0,"BoldEnd")
s.d=s.a.O(p)
s=u.l(0,n)
s.d=s.a.O(o)
s=u.l(0,"CodeEnd")
s.d=s.a.O(m)
s=u.l(0,j)
s.d=s.a.O("Link")
s=u.l(0,i)
s.d=s.a.O(i)
this.b=u}}
V.iu.prototype={
$1:function(a){P.mh(C.o,new V.it(this.a))},
$S:10}
V.it.prototype={
$0:function(){var u=C.e.ar(document.documentElement.scrollTop),t=this.a.style,s=H.j(-0.01*u)+"px"
t.top=s},
$S:0}
V.iv.prototype={
$1:function(a){return H.f(a,"$ibC").a===this.a},
$S:53}
V.iM.prototype={
ad:function(a,b,c){var u,t,s,r,q=this,p=W.lb(null)
p.src=b
p.height=p.width=64
u=p.style
u.border="solid 2px white"
u=J.cw(q.c)
t=u.gn(u)
u=W.a7
W.a8(p,"click",H.n(new V.iO(q,p,b,t),{func:1,ret:-1,args:[u]}),!1,u)
J.cw(q.c).h(0,p)
J.cw(q.c).h(0,document.createElement("br"))
s=P.jg().gbj().j(0,H.j(q.a))
if(s==null){q.bc(t)
r=c}else r=P.dv(s,null,null)===t
if(r)p.click()},
h:function(a,b){return this.ad(a,b,!1)},
bc:function(a){var u,t,s=P.jg(),r=P.h,q=P.lZ(s.gbj(),r,r)
q.k(0,this.a,""+a)
u=s.cE(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.f9([],[]).bF(""),"",t)}}
V.iO.prototype={
$1:function(a){var u,t,s=this
H.f(a,"$ia7")
u=s.a
t=J.cw(u.c)
t.B(t,new V.iN())
t=s.b.style
t.border="solid 2px black"
u.d.$1(s.c)
u.bc(s.d)},
$S:54}
V.iN.prototype={
$1:function(a){var u
H.f(a,"$iO")
if(!!J.S(a).$ic6){u=a.style
u.border="solid 2px white"}},
$S:55}
B.kN.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.A(0.1,0.1,0.1))
t=u.x
t.st(0,new V.A(0.2,0.2,0.2))
u.cy.st(0,new V.A(0,0,0))
u.cx.st(0,new V.A(1,1,1))},
$S:0}
B.kO.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.A(0.11,0.11,0.1))
t=u.x
t.st(0,new V.A(0.21,0.21,0.2))
u.cy.st(0,new V.A(0,0,0))
u=u.cx
u.st(0,new V.A(1,0.9,0.5))},
$S:0}
B.kP.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.A(0.1,0.1,0.1))
t=u.x
t.st(0,new V.A(0.1,0.1,0.1))
u.cy.saF(0.4)
t=u.cy
t.st(0,new V.A(0.6,0.6,0.6))
u=u.cx
u.st(0,new V.A(0.4,0.4,0.4))},
$S:0}
B.kQ.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.A(0.1,0.1,0.1))
t=u.x
t.st(0,new V.A(0.1,0.1,0.1))
u.cy.saF(0.4)
t=u.cy
t.st(0,new V.A(0.2,0.3,1))
u=u.cx
u.st(0,new V.A(0.3,0.3,0.3))},
$S:0}
B.kR.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.A(0.1,0.1,0.1))
t=u.x
t.st(0,new V.A(0.1,0.1,0.1))
u.cy.saF(0.6)
t=u.cy
t.st(0,new V.A(0.8,0.8,0.8))
u=u.cx
u.st(0,new V.A(0.2,0.2,0.2))},
$S:0}
B.kS.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.A(0.1,0.1,0.1))
t=u.x
t.st(0,new V.A(0.1,0.1,0.1))
u.cy.saF(0.6)
u.cy.st(0,new V.A(1,1,1))
u.cx.st(0,new V.A(0,0,0))},
$S:0}
B.kT.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.A(0.1,0.1,0.1))
t=u.x
t.st(0,new V.A(0.1,0.1,0.1))
u.cy.saF(0.9)
t=u.cy
t.st(0,new V.A(1,0.8,0.8))
u.cx.st(0,new V.A(0,0,0))},
$S:0}
B.kU.prototype={
$0:function(){var u,t=this.a
t.r.st(0,new V.A(0,0,0))
u=t.x
u.st(0,new V.A(0.1,0.1,0.1))
t.cy.saF(0.99)
u=t.cy
u.st(0,new V.A(0.95,0.95,0.95))
t.cx.st(0,new V.A(0,0,0))},
$S:0}
B.kV.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.A(0.3,0.3,0.3))
t=u.x
t.st(0,new V.A(0.5,0.5,0.5))
u.cy.st(0,new V.A(0,0,0))
u=u.cx
u.st(0,new V.A(0.3,0.3,0.3))},
$S:0}
B.kW.prototype={
$1:function(a){var u,t=this.a.Q,s=this.b.f.iI(a),r=t.c
if(!r.b)t.bb(new A.ad(r.a,!0,!1))
r=t.d
if(r!==s){if(r!=null)r.gp().V(0,t.gaU())
u=t.d
t.d=s
s.gp().h(0,t.gaU())
s=new D.N(t.b+".texture2D",u,t.d,[T.ej])
s.b=!0
t.a.X(s)}},
$S:20}
B.kX.prototype={
$1:function(a){var u,t,s,r
H.f(a,"$iz")
u=this.a
t=this.b
s=t.a
r=[P.h]
u.dB("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dB("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:8};(function aliases(){var u=J.a.prototype
u.eE=u.i
u=J.dS.prototype
u.eG=u.i
u=P.i.prototype
u.eF=u.bG
u=W.O.prototype
u.bK=u.al
u=W.f0.prototype
u.eI=u.ay
u=O.cM.prototype
u.cQ=u.aC
u=O.bc.prototype
u.cR=u.aC
u=V.dY.prototype
u.eH=u.aJ
u.cP=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"pa","ok",11)
u(P,"pb","ol",11)
u(P,"pc","om",11)
t(P,"mL","p8",3)
s(W,"pp",4,null,["$4"],["oo"],27,0)
s(W,"pq",4,null,["$4"],["op"],27,0)
var m
r(m=E.ao.prototype,"gef",0,0,null,["$1","$0"],["eg","iR"],1,0)
r(m,"ged",0,0,null,["$1","$0"],["ee","iO"],1,0)
q(m,"giM","iN",7)
q(m,"giP","iQ",7)
r(m=E.ek.prototype,"gcU",0,0,null,["$1","$0"],["cW","cV"],1,0)
p(m,"gj3","ek",3)
o(m=X.er.prototype,"gfV","fW",12)
o(m,"gfJ","fK",12)
o(m,"gfP","fQ",4)
o(m,"gfZ","h_",30)
o(m,"gfX","fY",30)
o(m,"gh2","h3",4)
o(m,"gh6","h7",4)
o(m,"gfT","fU",4)
o(m,"gh4","h5",4)
o(m,"gfR","fS",4)
o(m,"gh8","h9",36)
o(m,"gha","hb",12)
o(m,"ghq","hr",13)
o(m,"ghm","hn",13)
o(m,"gho","hp",13)
r(D.bE.prototype,"geR",0,0,null,["$1","$0"],["aA","eS"],1,0)
r(m=D.dU.prototype,"gdh",0,0,null,["$1","$0"],["di","h0"],1,0)
o(m,"ghc","hd",38)
q(m,"gfD","fE",25)
q(m,"ghg","hh",25)
n(V.X.prototype,"gn","cs",23)
n(V.Q.prototype,"gn","cs",23)
r(m=U.cJ.prototype,"gaR",0,0,null,["$1","$0"],["P","a8"],1,0)
q(m,"gfB","fC",19)
q(m,"ghe","hf",19)
r(m=U.es.prototype,"gaR",0,0,null,["$1","$0"],["P","a8"],1,0)
o(m,"gbV","bW",2)
o(m,"gbX","bY",2)
o(m,"gbZ","c_",2)
r(m=U.et.prototype,"gaR",0,0,null,["$1","$0"],["P","a8"],1,0)
o(m,"gbV","bW",2)
o(m,"gbX","bY",2)
o(m,"gbZ","c_",2)
o(m,"gfs","ft",2)
o(m,"gfu","fv",2)
o(m,"ghX","hY",2)
o(m,"ghV","hW",2)
o(m,"ghT","hU",2)
o(U.eu.prototype,"gfz","fA",2)
r(m=M.dG.prototype,"gZ",0,0,null,["$1","$0"],["a_","b4"],1,0)
q(m,"ghi","hj",18)
q(m,"ghk","hl",18)
r(M.dI.prototype,"gZ",0,0,null,["$1","$0"],["a_","b4"],1,0)
r(m=M.dM.prototype,"gZ",0,0,null,["$1","$0"],["a_","b4"],1,0)
q(m,"gfL","fM",7)
q(m,"gfN","fO",7)
r(m=O.dZ.prototype,"gaU",0,0,null,["$1","$0"],["X","b8"],1,0)
r(m,"ghC",0,0,null,["$1","$0"],["dn","hD"],1,0)
q(m,"gfF","fG",17)
q(m,"gfH","fI",17)
r(O.cM.prototype,"gaU",0,0,null,["$1","$0"],["X","b8"],1,0)
r(O.ec.prototype,"gaU",0,0,null,["$1","$0"],["X","b8"],1,0)
r(X.e6.prototype,"geY",0,0,null,["$1","$0"],["aw","eZ"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.T,null)
s(P.T,[H.lg,J.a,J.as,P.eO,P.i,H.cL,P.b8,H.c4,H.d9,H.fO,H.j0,P.bG,H.cC,H.f5,P.af,H.hq,H.hs,H.hm,P.fc,P.bk,P.aP,P.ey,P.iC,P.d_,P.iD,P.bg,P.an,P.ks,P.k7,P.cj,P.eN,P.x,P.kk,P.hy,P.c2,P.hi,P.kq,P.kp,P.R,P.ay,P.ac,P.bF,P.i4,P.eg,P.eG,P.hc,P.bH,P.b,P.y,P.L,P.av,P.h,P.ai,P.ck,P.je,P.ka,W.fR,W.bU,W.I,W.e4,W.f0,W.kf,W.dO,W.aB,W.k6,W.fk,P.kc,P.fh,P.k1,P.U,O.a2,O.cN,E.fI,E.ao,E.ie,E.ek,Z.ew,Z.ex,Z.cA,Z.bI,Z.bt,D.fL,D.c3,D.z,X.dF,X.dT,X.ho,X.hv,X.aA,X.hU,X.iX,X.er,D.bE,D.ae,D.e7,D.ef,V.A,V.aF,V.h4,V.e0,V.at,V.aa,V.ap,V.bs,V.e9,V.X,V.Q,U.es,U.et,U.eu,M.dI,M.dM,M.aC,A.dC,A.fB,A.ad,A.aG,A.aJ,A.aK,A.hE,A.cg,A.ch,A.ci,A.en,A.j8,F.a9,F.bp,F.bO,F.eb,F.ip,F.iq,F.ir,F.aD,F.js,F.jt,F.jw,F.jx,O.bQ,O.cM,O.hF,T.iQ,V.bm,V.az,V.dY,V.id,V.io,V.cY,V.el,V.d5,V.iV,X.c0,X.d1,X.hj,X.e6,V.bC,V.ia,V.is,V.iM])
s(J.a,[J.hl,J.dR,J.dS,J.b9,J.c7,J.bL,H.cQ,H.bN,W.k,W.fy,W.c_,W.cB,W.b6,W.b7,W.W,W.eA,W.fW,W.fX,W.eC,W.dL,W.eE,W.fZ,W.o,W.eH,W.aT,W.hg,W.eJ,W.bo,W.dW,W.hO,W.eP,W.eQ,W.aU,W.eR,W.eU,W.aV,W.eY,W.f_,W.aX,W.f1,W.aY,W.f6,W.aL,W.fa,W.iU,W.b_,W.fd,W.iZ,W.jk,W.fl,W.fn,W.fp,W.fr,W.ft,P.bb,P.eL,P.be,P.eW,P.i9,P.f7,P.bh,P.ff,P.fC,P.ez,P.dD,P.e8,P.cf,P.ea,P.ei,P.eo,P.f3])
s(J.dS,[J.i5,J.bT,J.bM])
t(J.lf,J.b9)
s(J.c7,[J.dQ,J.dP])
t(P.hu,P.eO)
s(P.hu,[H.ep,W.jI,W.aq,P.h8])
t(H.t,H.ep)
s(P.i,[H.h1,H.hz,H.da])
s(H.h1,[H.c8,H.hr])
s(P.b8,[H.hA,H.jB])
t(H.hB,H.c8)
t(H.fP,H.fO)
s(P.bG,[H.i1,H.hn,H.jc,H.j2,H.fK,H.il,P.fA,P.e5,P.aS,P.jd,P.ja,P.cZ,P.fN,P.fU])
s(H.cC,[H.l1,H.iJ,H.kI,H.kJ,H.kK,P.jE,P.jD,P.jF,P.jG,P.kj,P.ki,P.jP,P.jT,P.jQ,P.jR,P.jS,P.jW,P.jX,P.jV,P.jU,P.iE,P.iF,P.kC,P.k4,P.k3,P.k5,P.ht,P.hx,P.h_,P.h0,P.jj,P.jf,P.jh,P.ji,P.kl,P.km,P.ko,P.kn,P.kw,P.kv,P.kx,P.ky,W.h2,W.hQ,W.hS,W.ik,W.iB,W.jO,W.i0,W.i_,W.k8,W.k9,W.kh,W.kr,P.kd,P.kE,P.h9,P.ha,P.fE,E.ig,E.ih,E.ii,E.iT,D.h5,D.h6,F.kt,F.jz,F.jy,F.ju,F.jv,O.hI,O.hJ,O.hK,O.hL,O.hM,O.hN,T.iS,T.iR,V.l_,V.ib,V.iu,V.it,V.iv,V.iO,V.iN,B.kN,B.kO,B.kP,B.kQ,B.kR,B.kS,B.kT,B.kU,B.kV,B.kW,B.kX])
s(H.iJ,[H.iz,H.cy])
t(H.jC,P.fA)
t(P.hw,P.af)
s(P.hw,[H.a3,W.jH])
t(H.e1,H.bN)
s(H.e1,[H.df,H.dh])
t(H.dg,H.df)
t(H.cR,H.dg)
t(H.di,H.dh)
t(H.e2,H.di)
s(H.e2,[H.hV,H.hW,H.hX,H.hY,H.hZ,H.e3,H.cS])
t(P.k2,P.ks)
t(P.k0,P.k7)
t(P.fi,P.hy)
t(P.eq,P.fi)
s(P.c2,[P.fG,P.h3])
t(P.bD,P.iD)
s(P.bD,[P.fH,P.hh,P.jn,P.jm])
t(P.jl,P.h3)
s(P.ac,[P.G,P.m])
s(P.aS,[P.ce,P.hk])
t(P.jK,P.ck)
s(W.k,[W.F,W.h7,W.cO,W.aW,W.dj,W.aZ,W.aM,W.dl,W.jA,W.db,P.fF,P.bZ])
s(W.F,[W.O,W.bB,W.dc])
s(W.O,[W.w,P.p])
s(W.w,[W.dA,W.fz,W.cx,W.bA,W.c1,W.aH,W.hb,W.c6,W.cK,W.im,W.bf,W.eh,W.iH,W.iI,W.d2])
s(W.b6,[W.cD,W.fS,W.fT])
t(W.fQ,W.b7)
t(W.cE,W.eA)
t(W.eD,W.eC)
t(W.dK,W.eD)
t(W.eF,W.eE)
t(W.fY,W.eF)
t(W.aI,W.c_)
t(W.eI,W.eH)
t(W.cH,W.eI)
t(W.eK,W.eJ)
t(W.c5,W.eK)
t(W.bR,W.o)
s(W.bR,[W.ba,W.a7,W.b0])
t(W.hP,W.eP)
t(W.hR,W.eQ)
t(W.eS,W.eR)
t(W.hT,W.eS)
t(W.eV,W.eU)
t(W.cT,W.eV)
t(W.eZ,W.eY)
t(W.i7,W.eZ)
t(W.ij,W.f_)
t(W.dk,W.dj)
t(W.iw,W.dk)
t(W.f2,W.f1)
t(W.ix,W.f2)
t(W.iA,W.f6)
t(W.fb,W.fa)
t(W.iK,W.fb)
t(W.dm,W.dl)
t(W.iL,W.dm)
t(W.fe,W.fd)
t(W.iY,W.fe)
t(W.bj,W.a7)
t(W.fm,W.fl)
t(W.jJ,W.fm)
t(W.eB,W.dL)
t(W.fo,W.fn)
t(W.jY,W.fo)
t(W.fq,W.fp)
t(W.eT,W.fq)
t(W.fs,W.fr)
t(W.kb,W.fs)
t(W.fu,W.ft)
t(W.ke,W.fu)
t(W.jL,W.jH)
t(W.jM,P.iC)
t(W.ls,W.jM)
t(W.jN,P.d_)
t(W.kg,W.f0)
t(P.f9,P.kc)
t(P.ak,P.k1)
t(P.eM,P.eL)
t(P.hp,P.eM)
t(P.eX,P.eW)
t(P.i2,P.eX)
t(P.cW,P.p)
t(P.f8,P.f7)
t(P.iG,P.f8)
t(P.fg,P.ff)
t(P.j_,P.fg)
t(P.fD,P.ez)
t(P.i3,P.bZ)
t(P.f4,P.f3)
t(P.iy,P.f4)
s(E.fI,[Z.dE,A.cX,T.d3])
s(D.z,[D.bJ,D.bK,D.N,X.i8])
s(X.i8,[X.dX,X.bq,X.cP,X.em])
s(O.a2,[D.dU,U.cJ,M.dG])
s(D.fL,[U.fM,U.ag])
t(U.dH,U.ag)
s(A.cX,[A.e_,A.ed])
s(A.en,[A.aN,A.j5,A.j6,A.j7,A.j3,A.ab,A.j4,A.Z,A.d7,A.j9,A.d8,A.aw,A.al,A.bS])
s(O.bQ,[O.dZ,O.ec])
s(O.cM,[O.hC,O.hD,O.bc])
s(O.bc,[O.hG,O.hH])
s(T.d3,[T.ej,T.d4])
t(T.iP,T.ej)
s(V.dY,[V.au,V.d6])
t(X.hd,X.d1)
s(V.bC,[V.fV,V.he,V.hf,V.i6])
u(H.ep,H.d9)
u(H.df,P.x)
u(H.dg,H.c4)
u(H.dh,P.x)
u(H.di,H.c4)
u(P.eO,P.x)
u(P.fi,P.kk)
u(W.eA,W.fR)
u(W.eC,P.x)
u(W.eD,W.I)
u(W.eE,P.x)
u(W.eF,W.I)
u(W.eH,P.x)
u(W.eI,W.I)
u(W.eJ,P.x)
u(W.eK,W.I)
u(W.eP,P.af)
u(W.eQ,P.af)
u(W.eR,P.x)
u(W.eS,W.I)
u(W.eU,P.x)
u(W.eV,W.I)
u(W.eY,P.x)
u(W.eZ,W.I)
u(W.f_,P.af)
u(W.dj,P.x)
u(W.dk,W.I)
u(W.f1,P.x)
u(W.f2,W.I)
u(W.f6,P.af)
u(W.fa,P.x)
u(W.fb,W.I)
u(W.dl,P.x)
u(W.dm,W.I)
u(W.fd,P.x)
u(W.fe,W.I)
u(W.fl,P.x)
u(W.fm,W.I)
u(W.fn,P.x)
u(W.fo,W.I)
u(W.fp,P.x)
u(W.fq,W.I)
u(W.fr,P.x)
u(W.fs,W.I)
u(W.ft,P.x)
u(W.fu,W.I)
u(P.eL,P.x)
u(P.eM,W.I)
u(P.eW,P.x)
u(P.eX,W.I)
u(P.f7,P.x)
u(P.f8,W.I)
u(P.ff,P.x)
u(P.fg,W.I)
u(P.ez,P.af)
u(P.f3,P.x)
u(P.f4,W.I)})();(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bA.prototype
C.i=W.c1.prototype
C.O=W.aH.prototype
C.R=J.a.prototype
C.a=J.b9.prototype
C.S=J.dP.prototype
C.d=J.dQ.prototype
C.j=J.dR.prototype
C.e=J.c7.prototype
C.b=J.bL.prototype
C.T=J.bM.prototype
C.Z=W.cT.prototype
C.B=J.i5.prototype
C.c=P.cf.prototype
C.a_=W.bf.prototype
C.C=W.eh.prototype
C.r=J.bT.prototype
C.D=W.bj.prototype
C.E=W.db.prototype
C.a0=new P.fH()
C.F=new P.fG()
C.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.G=function() {
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
C.L=function(getTagFallback) {
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
C.H=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.I=function(hooks) {
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
C.K=function(hooks) {
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
C.J=function(hooks) {
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
C.v=function(hooks) { return hooks; }

C.M=new P.i4()
C.h=new P.jl()
C.N=new P.jn()
C.f=new P.k2()
C.o=new P.bF(0)
C.P=new P.bF(5e6)
C.Q=new P.hi("element",!0,!1,!1,!1)
C.w=H.d(u([127,2047,65535,1114111]),[P.m])
C.k=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.m])
C.U=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.l=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.m=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.V=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.x=H.d(u([]),[P.h])
C.W=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.y=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.n=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.z=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.X=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.A=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.p=H.d(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.q=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.Y=new H.fP(0,{},C.x,[P.h,P.h])})()
var v={mangledGlobalNames:{m:"int",G:"double",ac:"num",h:"String",R:"bool",L:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.L},{func:1,ret:-1,opt:[D.z]},{func:1,ret:-1,args:[D.z]},{func:1,ret:-1},{func:1,ret:-1,args:[W.a7]},{func:1,ret:P.L,args:[,,]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[P.m,[P.i,E.ao]]},{func:1,ret:P.L,args:[D.z]},{func:1,ret:P.L,args:[F.a9]},{func:1,ret:P.L,args:[W.o]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[W.b0]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.L,args:[,]},{func:1,ret:P.h,args:[P.m]},{func:1,ret:-1,args:[P.m,[P.i,V.at]]},{func:1,ret:-1,args:[P.m,[P.i,M.aC]]},{func:1,ret:-1,args:[P.m,[P.i,U.ag]]},{func:1,ret:P.L,args:[P.h]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.G},{func:1,args:[,]},{func:1,ret:-1,args:[P.m,[P.i,D.ae]]},{func:1,ret:P.R,args:[W.F]},{func:1,ret:P.R,args:[W.O,P.h,P.h,W.bU]},{func:1,ret:P.R,args:[W.aB]},{func:1,ret:P.R,args:[P.h]},{func:1,ret:-1,args:[W.ba]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.z]}]},{func:1,ret:P.L,args:[P.ac]},{func:1,ret:W.O,args:[W.F]},{func:1,ret:P.L,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.F,W.F]},{func:1,ret:-1,args:[W.bj]},{func:1,args:[W.o]},{func:1,ret:P.R,args:[[P.i,D.ae]]},{func:1,ret:P.U,args:[,,]},{func:1,ret:P.L,args:[P.h,,]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,args:[,P.h]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:P.L,args:[F.aD,P.G,P.G]},{func:1,ret:-1,args:[P.h,P.m]},{func:1,ret:[P.y,P.h,P.h],args:[[P.y,P.h,P.h],P.h]},{func:1,ret:[P.aP,,],args:[,]},{func:1,ret:P.m,args:[A.aG,A.aG]},{func:1,ret:P.m,args:[A.aJ,A.aJ]},{func:1,ret:P.m,args:[A.aK,A.aK]},{func:1,ret:P.L,args:[,],opt:[P.av]},{func:1,ret:P.L,args:[P.bg]},{func:1,ret:P.R,args:[V.bC]},{func:1,ret:P.L,args:[W.a7]},{func:1,ret:P.L,args:[W.O]},{func:1,args:[P.h]},{func:1,ret:P.U,args:[P.m]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b4=0
$.cz=null
$.lQ=null
$.lw=!1
$.mO=null
$.mJ=null
$.mV=null
$.kF=null
$.kL=null
$.lF=null
$.cm=null
$.dr=null
$.ds=null
$.lx=!1
$.a1=C.f
$.ax=[]
$.bn=null
$.l9=null
$.lW=null
$.lV=null
$.de=P.li(P.h,P.bH)
$.m1=null
$.m6=null
$.cU=null
$.mc=null
$.mn=null
$.mp=null
$.jo=null
$.jp=null
$.jq=null
$.mo=null
$.m5=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pM","mZ",function(){return H.mN("_$dart_dartClosure")})
u($,"pN","lK",function(){return H.mN("_$dart_js")})
u($,"pS","n_",function(){return H.bi(H.j1({
toString:function(){return"$receiver$"}}))})
u($,"pT","n0",function(){return H.bi(H.j1({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pU","n1",function(){return H.bi(H.j1(null))})
u($,"pV","n2",function(){return H.bi(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pY","n5",function(){return H.bi(H.j1(void 0))})
u($,"pZ","n6",function(){return H.bi(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pX","n4",function(){return H.bi(H.mj(null))})
u($,"pW","n3",function(){return H.bi(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"q0","n8",function(){return H.bi(H.mj(void 0))})
u($,"q_","n7",function(){return H.bi(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qh","lL",function(){return P.oj()})
u($,"q3","n9",function(){return P.oe()})
u($,"qi","nd",function(){return H.nN(H.cl(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))})
u($,"qk","nf",function(){return P.o0("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"ql","ng",function(){return P.oI()})
u($,"qj","ne",function(){return P.m_(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"qa","nc",function(){return Z.aO(0)})
u($,"q4","na",function(){return Z.aO(511)})
u($,"qc","b2",function(){return Z.aO(1)})
u($,"qb","bx",function(){return Z.aO(2)})
u($,"q6","bw",function(){return Z.aO(4)})
u($,"qd","by",function(){return Z.aO(8)})
u($,"qe","bY",function(){return Z.aO(16)})
u($,"q7","dw",function(){return Z.aO(32)})
u($,"q8","dx",function(){return Z.aO(64)})
u($,"q9","nb",function(){return Z.aO(96)})
u($,"qf","cv",function(){return Z.aO(128)})
u($,"q5","bv",function(){return Z.aO(256)})
u($,"pL","mY",function(){return new V.h4(1e-9)})
u($,"pK","V",function(){return $.mY()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cQ,DataView:H.bN,ArrayBufferView:H.bN,Float32Array:H.cR,Float64Array:H.cR,Int16Array:H.hV,Int32Array:H.hW,Int8Array:H.hX,Uint16Array:H.hY,Uint32Array:H.hZ,Uint8ClampedArray:H.e3,CanvasPixelArray:H.e3,Uint8Array:H.cS,HTMLAudioElement:W.w,HTMLBRElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLLIElement:W.w,HTMLLabelElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMediaElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableColElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLVideoElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,AccessibleNodeList:W.fy,HTMLAnchorElement:W.dA,HTMLAreaElement:W.fz,HTMLBaseElement:W.cx,Blob:W.c_,HTMLBodyElement:W.bA,HTMLCanvasElement:W.c1,CanvasRenderingContext2D:W.cB,CDATASection:W.bB,CharacterData:W.bB,Comment:W.bB,ProcessingInstruction:W.bB,Text:W.bB,CSSNumericValue:W.cD,CSSUnitValue:W.cD,CSSPerspective:W.fQ,CSSCharsetRule:W.W,CSSConditionRule:W.W,CSSFontFaceRule:W.W,CSSGroupingRule:W.W,CSSImportRule:W.W,CSSKeyframeRule:W.W,MozCSSKeyframeRule:W.W,WebKitCSSKeyframeRule:W.W,CSSKeyframesRule:W.W,MozCSSKeyframesRule:W.W,WebKitCSSKeyframesRule:W.W,CSSMediaRule:W.W,CSSNamespaceRule:W.W,CSSPageRule:W.W,CSSRule:W.W,CSSStyleRule:W.W,CSSSupportsRule:W.W,CSSViewportRule:W.W,CSSStyleDeclaration:W.cE,MSStyleCSSProperties:W.cE,CSS2Properties:W.cE,CSSImageValue:W.b6,CSSKeywordValue:W.b6,CSSPositionValue:W.b6,CSSResourceValue:W.b6,CSSURLImageValue:W.b6,CSSStyleValue:W.b6,CSSMatrixComponent:W.b7,CSSRotation:W.b7,CSSScale:W.b7,CSSSkew:W.b7,CSSTranslation:W.b7,CSSTransformComponent:W.b7,CSSTransformValue:W.fS,CSSUnparsedValue:W.fT,DataTransferItemList:W.fW,HTMLDivElement:W.aH,DOMException:W.fX,ClientRectList:W.dK,DOMRectList:W.dK,DOMRectReadOnly:W.dL,DOMStringList:W.fY,DOMTokenList:W.fZ,Element:W.O,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.k,Accelerometer:W.k,AccessibleNode:W.k,AmbientLightSensor:W.k,Animation:W.k,ApplicationCache:W.k,DOMApplicationCache:W.k,OfflineResourceList:W.k,BackgroundFetchRegistration:W.k,BatteryManager:W.k,BroadcastChannel:W.k,CanvasCaptureMediaStreamTrack:W.k,DedicatedWorkerGlobalScope:W.k,EventSource:W.k,FileReader:W.k,FontFaceSet:W.k,Gyroscope:W.k,XMLHttpRequest:W.k,XMLHttpRequestEventTarget:W.k,XMLHttpRequestUpload:W.k,LinearAccelerationSensor:W.k,Magnetometer:W.k,MediaDevices:W.k,MediaKeySession:W.k,MediaQueryList:W.k,MediaRecorder:W.k,MediaSource:W.k,MediaStream:W.k,MediaStreamTrack:W.k,MIDIAccess:W.k,MIDIInput:W.k,MIDIOutput:W.k,MIDIPort:W.k,NetworkInformation:W.k,Notification:W.k,OffscreenCanvas:W.k,OrientationSensor:W.k,PaymentRequest:W.k,Performance:W.k,PermissionStatus:W.k,PresentationAvailability:W.k,PresentationConnection:W.k,PresentationConnectionList:W.k,PresentationRequest:W.k,RelativeOrientationSensor:W.k,RemotePlayback:W.k,RTCDataChannel:W.k,DataChannel:W.k,RTCDTMFSender:W.k,RTCPeerConnection:W.k,webkitRTCPeerConnection:W.k,mozRTCPeerConnection:W.k,ScreenOrientation:W.k,Sensor:W.k,ServiceWorker:W.k,ServiceWorkerContainer:W.k,ServiceWorkerGlobalScope:W.k,ServiceWorkerRegistration:W.k,SharedWorker:W.k,SharedWorkerGlobalScope:W.k,SpeechRecognition:W.k,SpeechSynthesis:W.k,SpeechSynthesisUtterance:W.k,VR:W.k,VRDevice:W.k,VRDisplay:W.k,VRSession:W.k,VisualViewport:W.k,WebSocket:W.k,Worker:W.k,WorkerGlobalScope:W.k,WorkerPerformance:W.k,BluetoothDevice:W.k,BluetoothRemoteGATTCharacteristic:W.k,Clipboard:W.k,MojoInterfaceInterceptor:W.k,USB:W.k,IDBDatabase:W.k,IDBOpenDBRequest:W.k,IDBVersionChangeRequest:W.k,IDBRequest:W.k,IDBTransaction:W.k,AnalyserNode:W.k,RealtimeAnalyserNode:W.k,AudioBufferSourceNode:W.k,AudioDestinationNode:W.k,AudioNode:W.k,AudioScheduledSourceNode:W.k,AudioWorkletNode:W.k,BiquadFilterNode:W.k,ChannelMergerNode:W.k,AudioChannelMerger:W.k,ChannelSplitterNode:W.k,AudioChannelSplitter:W.k,ConstantSourceNode:W.k,ConvolverNode:W.k,DelayNode:W.k,DynamicsCompressorNode:W.k,GainNode:W.k,AudioGainNode:W.k,IIRFilterNode:W.k,MediaElementAudioSourceNode:W.k,MediaStreamAudioDestinationNode:W.k,MediaStreamAudioSourceNode:W.k,OscillatorNode:W.k,Oscillator:W.k,PannerNode:W.k,AudioPannerNode:W.k,webkitAudioPannerNode:W.k,ScriptProcessorNode:W.k,JavaScriptAudioNode:W.k,StereoPannerNode:W.k,WaveShaperNode:W.k,EventTarget:W.k,File:W.aI,FileList:W.cH,FileWriter:W.h7,HTMLFormElement:W.hb,Gamepad:W.aT,History:W.hg,HTMLCollection:W.c5,HTMLFormControlsCollection:W.c5,HTMLOptionsCollection:W.c5,ImageData:W.bo,HTMLImageElement:W.c6,HTMLInputElement:W.cK,KeyboardEvent:W.ba,Location:W.dW,MediaList:W.hO,MessagePort:W.cO,MIDIInputMap:W.hP,MIDIOutputMap:W.hR,MimeType:W.aU,MimeTypeArray:W.hT,PointerEvent:W.a7,MouseEvent:W.a7,DragEvent:W.a7,Document:W.F,DocumentFragment:W.F,HTMLDocument:W.F,ShadowRoot:W.F,XMLDocument:W.F,DocumentType:W.F,Node:W.F,NodeList:W.cT,RadioNodeList:W.cT,Plugin:W.aV,PluginArray:W.i7,RTCStatsReport:W.ij,HTMLSelectElement:W.im,SourceBuffer:W.aW,SourceBufferList:W.iw,SpeechGrammar:W.aX,SpeechGrammarList:W.ix,SpeechRecognitionResult:W.aY,Storage:W.iA,CSSStyleSheet:W.aL,StyleSheet:W.aL,HTMLTableCellElement:W.bf,HTMLTableDataCellElement:W.bf,HTMLTableHeaderCellElement:W.bf,HTMLTableElement:W.eh,HTMLTableRowElement:W.iH,HTMLTableSectionElement:W.iI,HTMLTemplateElement:W.d2,TextTrack:W.aZ,TextTrackCue:W.aM,VTTCue:W.aM,TextTrackCueList:W.iK,TextTrackList:W.iL,TimeRanges:W.iU,Touch:W.b_,TouchEvent:W.b0,TouchList:W.iY,TrackDefaultList:W.iZ,CompositionEvent:W.bR,FocusEvent:W.bR,TextEvent:W.bR,UIEvent:W.bR,URL:W.jk,VideoTrackList:W.jA,WheelEvent:W.bj,Window:W.db,DOMWindow:W.db,Attr:W.dc,CSSRuleList:W.jJ,ClientRect:W.eB,DOMRect:W.eB,GamepadList:W.jY,NamedNodeMap:W.eT,MozNamedAttrMap:W.eT,SpeechRecognitionResultList:W.kb,StyleSheetList:W.ke,SVGLength:P.bb,SVGLengthList:P.hp,SVGNumber:P.be,SVGNumberList:P.i2,SVGPointList:P.i9,SVGScriptElement:P.cW,SVGStringList:P.iG,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bh,SVGTransformList:P.j_,AudioBuffer:P.fC,AudioParamMap:P.fD,AudioTrackList:P.fF,AudioContext:P.bZ,webkitAudioContext:P.bZ,BaseAudioContext:P.bZ,OfflineAudioContext:P.i3,WebGLBuffer:P.dD,WebGLProgram:P.e8,WebGL2RenderingContext:P.cf,WebGLShader:P.ea,WebGLTexture:P.ei,WebGLUniformLocation:P.eo,SQLResultSetRowList:P.iy})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e1.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
H.e2.$nativeSuperclassTag="ArrayBufferView"
W.dj.$nativeSuperclassTag="EventTarget"
W.dk.$nativeSuperclassTag="EventTarget"
W.dl.$nativeSuperclassTag="EventTarget"
W.dm.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.mR,[])
else B.mR([])})})()
//# sourceMappingURL=test.dart.js.map
