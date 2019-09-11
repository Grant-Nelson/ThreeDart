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
a[c]=function(){a[c]=function(){H.pY(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lA(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={le:function le(){},
kH:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
hd:function(){return new P.cb("No element")},
nU:function(){return new P.cb("Too many elements")},
nT:function(){return new P.cb("Too few elements")},
e8:function(a,b,c,d,e){H.l(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.m,args:[e,e]})
if(c-b<=32)H.on(a,b,c,d,e)
else H.om(a,b,c,d,e)},
on:function(a,b,c,d,e){var u,t,s,r,q
H.l(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.m,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.e(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.e(a,r)
r=J.b0(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.e(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
om:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.l(a2,"$ib",[a6],"$ab")
H.n(a5,{func:1,ret:P.m,args:[a6,a6]})
u=C.e.a6(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.e.a6(a3+a4,2)
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
if(J.b0(a5.$2(n,m),0)){i=m
m=n
n=i}if(J.b0(a5.$2(k,j),0)){i=j
j=k
k=i}if(J.b0(a5.$2(n,l),0)){i=l
l=n
n=i}if(J.b0(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.b0(a5.$2(n,k),0)){i=k
k=n
n=i}if(J.b0(a5.$2(l,k),0)){i=k
k=l
l=i}if(J.b0(a5.$2(m,j),0)){i=j
j=m
m=i}if(J.b0(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.b0(a5.$2(k,j),0)){i=j
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
if(J.Q(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.e(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.P()
if(d<0){if(f!==h){if(h>=a2.length)return H.e(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.am()
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
if(typeof a0!=="number")return a0.P()
if(a0<0){if(f!==h){if(h>=a2.length)return H.e(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else{a1=a5.$2(e,k)
if(typeof a1!=="number")return a1.am()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.am()
if(d>0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.P()
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
H.e8(a2,a3,h-2,a5,a6)
H.e8(a2,g+2,a4,a5,a6)
if(a)return
if(h<t&&g>s){while(!0){if(h>=a2.length)return H.e(a2,h)
if(!J.Q(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.e(a2,g)
if(!J.Q(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.e(a2,f)
e=a2[f]
if(a5.$2(e,m)===0){if(f!==h){if(h>=a2.length)return H.e(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else if(a5.$2(e,k)===0)for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
if(a5.$2(a2[g],k)===0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.P()
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
break}}}H.e8(a2,h,g,a5,a6)}else H.e8(a2,h,g,a5,a6)},
t:function t(a){this.a=a},
fU:function fU(){},
c5:function c5(){},
cJ:function cJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ht:function ht(a,b,c){this.a=a
this.b=b
this.$ti=c},
hu:function hu(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hv:function hv(a,b,c){this.a=a
this.b=b
this.$ti=c},
d4:function d4(a,b,c){this.a=a
this.b=b
this.$ti=c},
jw:function jw(a,b,c){this.a=a
this.b=b
this.$ti=c},
c1:function c1(){},
d2:function d2(){},
ej:function ej(){},
nK:function(){throw H.c(P.H("Cannot modify unmodifiable Map"))},
ct:function(a){var u,t=H.J(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
pF:function(a){return v.types[H.a4(a)]},
pM:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.U(a).$iN},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.at(a)
if(typeof u!=="string")throw H.c(H.ar(a))
return u},
cR:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
oe:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.e(p,3)
u=H.J(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.af(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.D(s,q)|32)>t)return}return parseInt(a,b)},
c7:function(a){return H.o5(a)+H.lw(H.bU(a),0,null)},
o5:function(a){var u,t,s,r,q,p,o,n=J.U(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ibP){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.ct(t.length>1&&C.b.D(t,0)===36?C.b.a7(t,1):t)},
o6:function(){if(!!self.location)return self.location.href
return},
mb:function(a){var u,t,s,r,q
H.kN(a)
u=J.aC(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
of:function(a){var u,t,s,r=H.d([],[P.m])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ar(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.aM(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.ar(s))}return H.mb(r)},
mc:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ar(s))
if(s<0)throw H.c(H.ar(s))
if(s>65535)return H.of(a)}return H.mb(a)},
og:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c8:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aM(u,10))>>>0,56320|u&1023)}}throw H.c(P.af(a,0,1114111,null,null))},
c6:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
od:function(a){var u=H.c6(a).getFullYear()+0
return u},
ob:function(a){var u=H.c6(a).getMonth()+1
return u},
o7:function(a){var u=H.c6(a).getDate()+0
return u},
o8:function(a){var u=H.c6(a).getHours()+0
return u},
oa:function(a){var u=H.c6(a).getMinutes()+0
return u},
oc:function(a){var u=H.c6(a).getSeconds()+0
return u},
o9:function(a){var u=H.c6(a).getMilliseconds()+0
return u},
G:function(a){throw H.c(H.ar(a))},
e:function(a,b){if(a==null)J.aC(a)
throw H.c(H.cn(a,b))},
cn:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aP(!0,b,s,null)
u=H.a4(J.aC(a))
if(!(b<0)){if(typeof u!=="number")return H.G(u)
t=b>=u}else t=!0
if(t)return P.Y(b,a,s,null,u)
return P.e4(b,s)},
pz:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c9(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c9(a,c,!0,b,"end",u)
return new P.aP(!0,b,"end",null)},
ar:function(a){return new P.aP(!0,a,null,null)},
pu:function(a){if(typeof a!=="number")throw H.c(H.ar(a))
return a},
c:function(a){var u
if(a==null)a=new P.e0()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.n8})
u.name=""}else u.toString=H.n8
return u},
n8:function(){return J.at(this.dartException)},
z:function(a){throw H.c(a)},
u:function(a){throw H.c(P.bj(a))},
be:function(a){var u,t,s,r,q,p
a=H.n7(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iT(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iU:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ml:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m6:function(a,b){return new H.hY(a,b==null?null:b.method)},
lf:function(a,b){var u=b==null,t=u?null:b.method
return new H.hg(a,t,u?null:b.receiver)},
aj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.l1(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.aM(t,16)&8191)===10)switch(s){case 438:return f.$1(H.lf(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.m6(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.nc()
q=$.nd()
p=$.ne()
o=$.nf()
n=$.ni()
m=$.nj()
l=$.nh()
$.ng()
k=$.nl()
j=$.nk()
i=r.ac(u)
if(i!=null)return f.$1(H.lf(H.J(u),i))
else{i=q.ac(u)
if(i!=null){i.method="call"
return f.$1(H.lf(H.J(u),i))}else{i=p.ac(u)
if(i==null){i=o.ac(u)
if(i==null){i=n.ac(u)
if(i==null){i=m.ac(u)
if(i==null){i=l.ac(u)
if(i==null){i=o.ac(u)
if(i==null){i=k.ac(u)
if(i==null){i=j.ac(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.m6(H.J(u),i))}}return f.$1(new H.j5(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.e9()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aP(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.e9()
return a},
cr:function(a){var u
if(a==null)return new H.eX(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eX(a)},
pD:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
pL:function(a,b,c,d,e,f){H.h(a,"$ibD")
switch(H.a4(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.C("Unsupported number of arguments for wrapped closure"))},
cm:function(a,b){var u
H.a4(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pL)
a.$identity=u
return u},
nJ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.iv().constructor.prototype):Object.create(new H.cw(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b1
if(typeof t!=="number")return t.p()
$.b1=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.lU(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.pF,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.lT:H.l5
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lU(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
nG:function(a,b,c,d){var u=H.l5
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lU:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nI(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nG(t,!r,u,b)
if(t===0){r=$.b1
if(typeof r!=="number")return r.p()
$.b1=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cx
return new Function(r+H.i(q==null?$.cx=H.fB("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b1
if(typeof r!=="number")return r.p()
$.b1=r+1
o+=r
r="return function("+o+"){return this."
q=$.cx
return new Function(r+H.i(q==null?$.cx=H.fB("self"):q)+"."+H.i(u)+"("+o+");}")()},
nH:function(a,b,c,d){var u=H.l5,t=H.lT
switch(b?-1:a){case 0:throw H.c(H.ok("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nI:function(a,b){var u,t,s,r,q,p,o,n=$.cx
if(n==null)n=$.cx=H.fB("self")
u=$.lS
if(u==null)u=$.lS=H.fB("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nH(s,!q,t,b)
if(s===1){n="return function(){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+");"
u=$.b1
if(typeof u!=="number")return u.p()
$.b1=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+", "+o+");"
u=$.b1
if(typeof u!=="number")return u.p()
$.b1=u+1
return new Function(n+u+"}")()},
lA:function(a,b,c,d,e,f,g){return H.nJ(a,b,H.a4(c),d,!!e,!!f,g)},
l5:function(a){return a.a},
lT:function(a){return a.c},
fB:function(a){var u,t,s,r=new H.cw("self","target","receiver","name"),q=J.lc(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
I:function(a){if(a==null)H.pq("boolean expression must not be null")
return a},
J:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b_(a,"String"))},
pA:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b_(a,"double"))},
n3:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b_(a,"num"))},
lx:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b_(a,"bool"))},
a4:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b_(a,"int"))},
n5:function(a,b){throw H.c(H.b_(a,H.ct(H.J(b).substring(2))))},
pS:function(a,b){throw H.c(H.nF(a,H.ct(H.J(b).substring(2))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.U(a)[b])return a
H.n5(a,b)},
A:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.U(a)[b]
else u=!0
if(u)return a
H.pS(a,b)},
kN:function(a){if(a==null)return a
if(!!J.U(a).$ib)return a
throw H.c(H.b_(a,"List<dynamic>"))},
n1:function(a,b){var u
if(a==null)return a
u=J.U(a)
if(!!u.$ib)return a
if(u[b])return a
H.n5(a,b)},
mW:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a4(u)]
else return a.$S()}return},
fl:function(a,b){var u
if(typeof a=="function")return!0
u=H.mW(J.U(a))
if(u==null)return!1
return H.mJ(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lt)return a
$.lt=!0
try{if(H.fl(a,b))return a
u=H.kW(b)
t=H.b_(a,u)
throw H.c(t)}finally{$.lt=!1}},
lD:function(a,b){if(a!=null&&!H.lz(a,b))H.z(H.b_(a,H.kW(b)))
return a},
b_:function(a,b){return new H.iV("TypeError: "+P.dH(a)+": type '"+H.mP(a)+"' is not a subtype of type '"+b+"'")},
nF:function(a,b){return new H.fC("CastError: "+P.dH(a)+": type '"+H.mP(a)+"' is not a subtype of type '"+b+"'")},
mP:function(a){var u,t=J.U(a)
if(!!t.$icz){u=H.mW(t)
if(u!=null)return H.kW(u)
return"Closure"}return H.c7(a)},
pq:function(a){throw H.c(new H.jx(a))},
pY:function(a){throw H.c(new P.fM(H.J(a)))},
ok:function(a){return new H.ig(a)},
mZ:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bU:function(a){if(a==null)return
return a.$ti},
qH:function(a,b,c){return H.cs(a["$a"+H.i(c)],H.bU(b))},
bT:function(a,b,c,d){var u
H.J(c)
H.a4(d)
u=H.cs(a["$a"+H.i(c)],H.bU(b))
return u==null?null:u[d]},
as:function(a,b,c){var u
H.J(b)
H.a4(c)
u=H.cs(a["$a"+H.i(b)],H.bU(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.a4(b)
u=H.bU(a)
return u==null?null:u[b]},
kW:function(a){return H.bS(a,null)},
bS:function(a,b){var u,t
H.l(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ct(a[0].name)+H.lw(a,1,b)
if(typeof a=="function")return H.ct(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a4(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.i(b[t])}if('func' in a)return H.p_(a,b)
if('futureOr' in a)return"FutureOr<"+H.bS("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
p_:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.f]
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
p=C.b.p(p,a0[n])
m=u[q]
if(m!=null&&m!==P.P)p+=" extends "+H.bS(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bS(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bS(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bS(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.pC(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.J(b[h])
j=j+i+H.bS(e[d],a0)+(" "+H.i(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
lw:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.ag("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bS(p,c)}return"<"+u.i(0)+">"},
cs:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ly:function(a,b,c,d){var u,t
H.J(b)
H.kN(c)
H.J(d)
if(a==null)return!1
u=H.bU(a)
t=J.U(a)
if(t[b]==null)return!1
return H.mS(H.cs(t[d],u),null,c,null)},
l:function(a,b,c,d){H.J(b)
H.kN(c)
H.J(d)
if(a==null)return a
if(H.ly(a,b,c,d))return a
throw H.c(H.b_(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.ct(b.substring(2))+H.lw(c,0,null),v.mangledGlobalNames)))},
mS:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aO(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aO(a[t],b,c[t],d))return!1
return!0},
qF:function(a,b,c){return a.apply(b,H.cs(J.U(b)["$a"+H.i(c)],H.bU(b)))},
n0:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="P"||a.name==="O"||a===-1||a===-2||H.n0(u)}return!1},
lz:function(a,b){var u,t
if(a==null)return b==null||b.name==="P"||b.name==="O"||b===-1||b===-2||H.n0(b)
if(b==null||b===-1||b.name==="P"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lz(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fl(a,b)}u=J.U(a).constructor
t=H.bU(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aO(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.lz(a,b))throw H.c(H.b_(a,H.kW(b)))
return a},
aO:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="P"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="P"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aO(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="O")return!0
if('func' in c)return H.mJ(a,b,c,d)
if('func' in a)return c.name==="bD"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aO("type" in a?a.type:l,b,s,d)
else if(H.aO(a,b,s,d))return!0
else{if(!('$i'+"cF" in t.prototype))return!1
r=t.prototype["$a"+"cF"]
q=H.cs(r,u?a.slice(1):l)
return H.aO(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mS(H.cs(m,u),b,p,d)},
mJ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aO(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aO(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aO(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aO(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pQ(h,b,g,d)},
pQ:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aO(c[s],d,a[s],b))return!1}return!0},
qG:function(a,b,c){Object.defineProperty(a,H.J(b),{value:c,enumerable:false,writable:true,configurable:true})},
pO:function(a){var u,t,s,r,q=H.J($.n_.$1(a)),p=$.kG[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kL[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.J($.mR.$2(a,q))
if(q!=null){p=$.kG[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kL[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kV(u)
$.kG[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kL[q]=u
return u}if(s==="-"){r=H.kV(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.n4(a,u)
if(s==="*")throw H.c(P.j4(q))
if(v.leafTags[q]===true){r=H.kV(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.n4(a,u)},
n4:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lF(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kV:function(a){return J.lF(a,!1,null,!!a.$iN)},
pP:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kV(u)
else return J.lF(u,c,null,null)},
pJ:function(){if(!0===$.lE)return
$.lE=!0
H.pK()},
pK:function(){var u,t,s,r,q,p,o,n
$.kG=Object.create(null)
$.kL=Object.create(null)
H.pI()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.n6.$1(q)
if(p!=null){o=H.pP(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pI:function(){var u,t,s,r,q,p,o=C.G()
o=H.cl(C.H,H.cl(C.I,H.cl(C.v,H.cl(C.v,H.cl(C.J,H.cl(C.K,H.cl(C.L(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.n_=new H.kI(r)
$.mR=new H.kJ(q)
$.n6=new H.kK(p)},
cl:function(a,b){return a(b)||b},
nW:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a7("Illegal RegExp pattern ("+String(r)+")",a,null))},
pW:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
pB:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n7:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lI:function(a,b,c){var u=H.pX(a,b,c)
return u},
pX:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n7(b),'g'),H.pB(c))},
fG:function fG(){},
fH:function fH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iT:function iT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hY:function hY(a,b){this.a=a
this.b=b},
hg:function hg(a,b,c){this.a=a
this.b=b
this.c=c},
j5:function j5(a){this.a=a},
l1:function l1(a){this.a=a},
eX:function eX(a){this.a=a
this.b=null},
cz:function cz(){},
iF:function iF(){},
iv:function iv(){},
cw:function cw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iV:function iV(a){this.a=a},
fC:function fC(a){this.a=a},
ig:function ig(a){this.a=a},
jx:function jx(a){this.a=a},
a1:function a1(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hk:function hk(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hl:function hl(a,b){this.a=a
this.$ti=b},
hm:function hm(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
hf:function hf(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cj:function(a){return a},
o4:function(a){return new Int8Array(a)},
bh:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cn(b,a))},
oY:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.pz(a,b,c))
return b},
cN:function cN(){},
bI:function bI(){},
dX:function dX(){},
cO:function cO(){},
dY:function dY(){},
hQ:function hQ(){},
hR:function hR(){},
hS:function hS(){},
hT:function hT(){},
hU:function hU(){},
dZ:function dZ(){},
cP:function cP(){},
d9:function d9(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
pC:function(a){return J.lZ(a?Object.keys(a):[],null)},
pR:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lF:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fn:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lE==null){H.pJ()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.j4("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lK()]
if(r!=null)return r
r=H.pO(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.lK(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
nV:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.l4(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.af(a,0,4294967295,"length",null))
return J.lZ(new Array(a),b)},
lZ:function(a,b){return J.lc(H.d(a,[b]))},
lc:function(a){H.kN(a)
a.fixed$length=Array
return a},
U:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dK.prototype
return J.dJ.prototype}if(typeof a=="string")return J.bm.prototype
if(a==null)return J.dL.prototype
if(typeof a=="boolean")return J.he.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.P)return a
return J.fn(a)},
pE:function(a){if(typeof a=="number")return J.bF.prototype
if(typeof a=="string")return J.bm.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.P)return a
return J.fn(a)},
cp:function(a){if(typeof a=="string")return J.bm.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.P)return a
return J.fn(a)},
fm:function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.P)return a
return J.fn(a)},
mX:function(a){if(typeof a=="number")return J.bF.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bP.prototype
return a},
mY:function(a){if(typeof a=="number")return J.bF.prototype
if(typeof a=="string")return J.bm.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bP.prototype
return a},
dm:function(a){if(typeof a=="string")return J.bm.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bP.prototype
return a},
cq:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.P)return a
return J.fn(a)},
nu:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pE(a).p(a,b)},
Q:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).t(a,b)},
b0:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.mX(a).am(a,b)},
lM:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mY(a).C(a,b)},
nv:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.mX(a).q(a,b)},
dq:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pM(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cp(a).j(a,b)},
l2:function(a,b,c){return J.fm(a).k(a,b,c)},
nw:function(a,b){return J.dm(a).D(a,b)},
nx:function(a,b,c){return J.cq(a).hs(a,b,c)},
ny:function(a,b,c,d){return J.cq(a).hX(a,b,c,d)},
nz:function(a,b){return J.dm(a).W(a,b)},
l3:function(a,b){return J.mY(a).ia(a,b)},
fp:function(a,b){return J.fm(a).I(a,b)},
nA:function(a,b,c,d){return J.cq(a).is(a,b,c,d)},
lN:function(a,b){return J.fm(a).G(a,b)},
nB:function(a){return J.cq(a).gi5(a)},
lO:function(a){return J.cq(a).gc2(a)},
dr:function(a){return J.U(a).gH(a)},
bx:function(a){return J.fm(a).gT(a)},
aC:function(a){return J.cp(a).gn(a)},
lP:function(a){return J.fm(a).j_(a)},
nC:function(a,b){return J.cq(a).j3(a,b)},
nD:function(a,b,c){return J.dm(a).A(a,b,c)},
nE:function(a){return J.dm(a).jd(a)},
at:function(a){return J.U(a).i(a)},
a:function a(){},
he:function he(){},
dL:function dL(){},
dM:function dM(){},
i1:function i1(){},
bP:function bP(){},
bn:function bn(){},
aR:function aR(a){this.$ti=a},
ld:function ld(a){this.$ti=a},
au:function au(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bF:function bF(){},
dK:function dK(){},
dJ:function dJ(){},
bm:function bm(){}},P={
oA:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pr()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cm(new P.jz(s),1)).observe(u,{childList:true})
return new P.jy(s,u,t)}else if(self.setImmediate!=null)return P.ps()
return P.pt()},
oB:function(a){self.scheduleImmediate(H.cm(new P.jA(H.n(a,{func:1,ret:-1})),0))},
oC:function(a){self.setImmediate(H.cm(new P.jB(H.n(a,{func:1,ret:-1})),0))},
oD:function(a){P.lk(C.o,H.n(a,{func:1,ret:-1}))},
lk:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.e.a6(a.a,1000)
return P.oJ(u<0?0:u,b)},
mk:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.bc]})
u=C.e.a6(a.a,1000)
return P.oK(u<0?0:u,b)},
oJ:function(a,b){var u=new P.f2()
u.eM(a,b)
return u},
oK:function(a,b){var u=new P.f2()
u.eN(a,b)
return u},
oE:function(a,b){var u,t,s
b.a=1
try{a.ec(new P.jL(b),new P.jM(b),null)}catch(s){u=H.aj(s)
t=H.cr(s)
P.pT(new P.jN(b,u,t))}},
my:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.h(a.c,"$iaN")
if(u>=4){t=b.bP()
b.a=a.a
b.c=a.c
P.d7(b,t)}else{t=H.h(b.c,"$ibg")
b.a=2
b.c=a
a.d7(t)}},
d7:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.h(g.c,"$iam")
g=g.b
r=s.a
q=s.b
g.toString
P.kx(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.d7(h.a,b)}g=h.a
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
if(m){H.h(o,"$iam")
g=g.b
r=o.a
q=o.b
g.toString
P.kx(i,i,g,r,q)
return}l=$.a0
if(l!=n)$.a0=n
else l=i
g=b.c
if(g===8)new P.jR(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jQ(u,b,o).$0()}else if((g&2)!==0)new P.jP(h,u,b).$0()
if(l!=null)$.a0=l
g=u.b
if(!!J.U(g).$icF){if(g.a>=4){k=H.h(q.c,"$ibg")
q.c=null
b=q.bg(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.my(g,q)
return}}j=b.b
k=H.h(j.c,"$ibg")
j.c=null
b=j.bg(k)
g=u.a
r=u.b
if(!g){H.B(r,H.r(j,0))
j.a=4
j.c=r}else{H.h(r,"$iam")
j.a=8
j.c=r}h.a=j
g=j}},
pm:function(a,b){if(H.fl(a,{func:1,args:[P.P,P.aw]}))return H.n(a,{func:1,ret:null,args:[P.P,P.aw]})
if(H.fl(a,{func:1,args:[P.P]}))return H.n(a,{func:1,ret:null,args:[P.P]})
throw H.c(P.l4(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pl:function(){var u,t
for(;u=$.ck,u!=null;){$.dl=null
t=u.b
$.ck=t
if(t==null)$.dk=null
u.a.$0()}},
pp:function(){$.lu=!0
try{P.pl()}finally{$.dl=null
$.lu=!1
if($.ck!=null)$.lL().$1(P.mT())}},
mO:function(a){var u=new P.ep(H.n(a,{func:1,ret:-1}))
if($.ck==null){$.ck=$.dk=u
if(!$.lu)$.lL().$1(P.mT())}else $.dk=$.dk.b=u},
po:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.ck
if(u==null){P.mO(a)
$.dl=$.dk
return}t=new P.ep(a)
s=$.dl
if(s==null){t.b=u
$.ck=$.dl=t}else{t.b=s.b
$.dl=s.b=t
if(t.b==null)$.dk=t}},
pT:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a0
if(C.f===u){P.kz(t,t,C.f,a)
return}u.toString
P.kz(t,t,u,H.n(u.bY(a),s))},
mj:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a0
if(u===C.f){u.toString
return P.lk(a,b)}return P.lk(a,H.n(u.bY(b),t))},
oq:function(a,b){var u,t,s={func:1,ret:-1,args:[P.bc]}
H.n(b,s)
u=$.a0
if(u===C.f){u.toString
return P.mk(a,b)}t=u.dq(b,P.bc)
$.a0.toString
return P.mk(a,H.n(t,s))},
kx:function(a,b,c,d,e){var u={}
u.a=d
P.po(new P.ky(u,e))},
mK:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a0
if(t===c)return d.$0()
$.a0=c
u=t
try{t=d.$0()
return t}finally{$.a0=u}},
mL:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.a0
if(t===c)return d.$1(e)
$.a0=c
u=t
try{t=d.$1(e)
return t}finally{$.a0=u}},
pn:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.a0
if(t===c)return d.$2(e,f)
$.a0=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a0=u}},
kz:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bY(d):c.i6(d,-1)
P.mO(d)},
jz:function jz(a){this.a=a},
jy:function jy(a,b,c){this.a=a
this.b=b
this.c=c},
jA:function jA(a){this.a=a},
jB:function jB(a){this.a=a},
f2:function f2(){this.c=0},
kf:function kf(a,b){this.a=a
this.b=b},
ke:function ke(a,b,c,d){var _=this
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
aN:function aN(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jK:function jK(a,b){this.a=a
this.b=b},
jO:function jO(a,b){this.a=a
this.b=b},
jL:function jL(a){this.a=a},
jM:function jM(a){this.a=a},
jN:function jN(a,b,c){this.a=a
this.b=b
this.c=c},
jR:function jR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jS:function jS(a){this.a=a},
jQ:function jQ(a,b,c){this.a=a
this.b=b
this.c=c},
jP:function jP(a,b,c){this.a=a
this.b=b
this.c=c},
ep:function ep(a){this.a=a
this.b=null},
iy:function iy(){},
iA:function iA(a,b){this.a=a
this.b=b},
iB:function iB(a,b){this.a=a
this.b=b},
cV:function cV(){},
iz:function iz(){},
bc:function bc(){},
am:function am(a,b){this.a=a
this.b=b},
ko:function ko(){},
ky:function ky(a,b){this.a=a
this.b=b},
jY:function jY(){},
k_:function k_(a,b,c){this.a=a
this.b=b
this.c=c},
jZ:function jZ(a,b){this.a=a
this.b=b},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
nY:function(a,b){return new H.a1([a,b])},
lg:function(a,b){return new H.a1([a,b])},
o_:function(a){return H.pD(a,new H.a1([null,null]))},
dP:function(a){return new P.jW([a])},
lq:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oI:function(a,b,c){var u=new P.eE(a,b,[c])
u.c=a.e
return u},
nS:function(a,b,c){var u,t
if(P.lv(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.f])
C.a.h($.ax,a)
try{P.p0(a,u)}finally{if(0>=$.ax.length)return H.e($.ax,-1)
$.ax.pop()}t=P.mh(b,H.n1(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
lb:function(a,b,c){var u,t
if(P.lv(a))return b+"..."+c
u=new P.ag(b)
C.a.h($.ax,a)
try{t=u
t.a=P.mh(t.a,a,", ")}finally{if(0>=$.ax.length)return H.e($.ax,-1)
$.ax.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lv:function(a){var u,t
for(u=$.ax.length,t=0;t<u;++t)if(a===$.ax[t])return!0
return!1},
p0:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.f],"$ab")
u=a.gT(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.B())return
r=H.i(u.gJ(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.B()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gJ(u);++s
if(!u.B()){if(s<=4){C.a.h(b,H.i(o))
return}q=H.i(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gJ(u);++s
for(;u.B();o=n,n=m){m=u.gJ(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.i(o)
q=H.i(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
nZ:function(a,b,c){var u=P.nY(b,c)
a.G(0,new P.hn(u,b,c))
return u},
m_:function(a,b){var u,t,s=P.dP(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t)s.h(0,H.B(a[t],b))
return s},
lh:function(a){var u,t={}
if(P.lv(a))return"{...}"
u=new P.ag("")
try{C.a.h($.ax,a)
u.a+="{"
t.a=!0
J.lN(a,new P.hr(t,u))
u.a+="}"}finally{if(0>=$.ax.length)return H.e($.ax,-1)
$.ax.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jW:function jW(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ch:function ch(a){this.a=a
this.c=this.b=null},
eE:function eE(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hn:function hn(a,b,c){this.a=a
this.b=b
this.c=c},
ho:function ho(){},
x:function x(){},
hq:function hq(){},
hr:function hr(a,b){this.a=a
this.b=b},
ad:function ad(){},
kg:function kg(){},
hs:function hs(){},
ek:function ek(a,b){this.a=a
this.$ti=b},
k2:function k2(){},
eF:function eF(){},
f8:function f8(){},
ou:function(a,b,c,d){H.l(b,"$ib",[P.m],"$ab")
if(b instanceof Uint8Array)return P.ov(!1,b,c,d)
return},
ov:function(a,b,c,d){var u,t,s=$.nm()
if(s==null)return
u=0===c
if(u&&!0)return P.ln(s,b)
t=b.length
d=P.bq(c,d,t)
if(u&&d===t)return P.ln(s,b)
return P.ln(s,b.subarray(c,d))},
ln:function(a,b){if(P.ox(b))return
return P.oy(a,b)},
oy:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aj(t)}return},
ox:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
ow:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aj(t)}return},
mN:function(a,b,c){var u,t,s
H.l(a,"$ib",[P.m],"$ab")
for(u=J.cp(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.af()
if((s&127)!==s)return t-b}return c-b},
lR:function(a,b,c,d,e,f){if(C.e.b9(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
fy:function fy(){},
fz:function fz(){},
c_:function c_(){},
bB:function bB(){},
fW:function fW(){},
hb:function hb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ha:function ha(a){this.a=a},
jd:function jd(){},
jf:function jf(){},
km:function km(a){this.b=0
this.c=a},
je:function je(a){this.a=a},
kl:function kl(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fo:function(a,b,c){var u
H.n(b,{func:1,ret:P.m,args:[P.f]})
u=H.oe(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a7(a,null,null))},
nP:function(a){if(a instanceof H.cz)return a.i(0)
return"Instance of '"+H.c7(a)+"'"},
o0:function(a,b,c){var u,t
H.B(b,c)
u=J.nV(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.k(u,t,b)
return H.l(u,"$ib",[c],"$ab")},
m0:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bx(a);u.B();)C.a.h(s,H.B(u.gJ(u),c))
if(b)return s
return H.l(J.lc(s),"$ib",t,"$ab")},
cW:function(a,b,c){var u,t=P.m
H.l(a,"$ij",[t],"$aj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.l(a,"$iaR",[t],"$aaR")
u=a.length
c=P.bq(b,c,u)
return H.mc(b>0||c<u?C.a.eo(a,b,c):a)}if(!!J.U(a).$icP)return H.og(a,b,P.bq(b,c,a.length))
return P.oo(a,b,c)},
oo:function(a,b,c){var u,t,s,r,q=null
H.l(a,"$ij",[P.m],"$aj")
if(b<0)throw H.c(P.af(b,0,J.aC(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.af(c,b,J.aC(a),q,q))
t=J.bx(a)
for(s=0;s<b;++s)if(!t.B())throw H.c(P.af(b,0,s,q,q))
r=[]
if(u)for(;t.B();)r.push(t.gJ(t))
else for(s=b;s<c;++s){if(!t.B())throw H.c(P.af(c,b,s,q,q))
r.push(t.gJ(t))}return H.mc(r)},
oi:function(a){return new H.hf(a,H.nW(a,!1,!0,!1))},
mh:function(a,b,c){var u=J.bx(b)
if(!u.B())return a
if(c.length===0){do a+=H.i(u.gJ(u))
while(u.B())}else{a+=H.i(u.gJ(u))
for(;u.B();)a=a+c+H.i(u.gJ(u))}return a},
mn:function(){var u=H.o6()
if(u!=null)return P.ot(u)
throw H.c(P.H("'Uri.base' is not supported"))},
f9:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.l(a,"$ib",[P.m],"$ab")
if(c===C.h){u=$.ns().b
if(typeof b!=="string")H.z(H.ar(b))
u=u.test(b)}else u=!1
if(u)return b
H.B(b,H.as(c,"c_",0))
t=c.gir().c3(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c8(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nL:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nM:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dC:function(a){if(a>=10)return""+a
return"0"+a},
lW:function(a,b){return new P.b4(1e6*b+1000*a)},
dH:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.at(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nP(a)},
dt:function(a){return new P.aP(!1,null,null,a)},
l4:function(a,b,c){return new P.aP(!0,a,b,c)},
e4:function(a,b){return new P.c9(null,null,!0,a,b,"Value not in range")},
af:function(a,b,c,d,e){return new P.c9(b,c,!0,a,d,"Invalid value")},
bq:function(a,b,c){if(0>a||a>c)throw H.c(P.af(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.af(b,a,c,"end",null))
return b}return c},
li:function(a,b){if(typeof a!=="number")return a.P()
if(a<0)throw H.c(P.af(a,0,null,b,null))},
Y:function(a,b,c,d,e){var u=H.a4(e==null?J.aC(b):e)
return new P.hc(u,!0,a,c,"Index out of range")},
H:function(a){return new P.j6(a)},
j4:function(a){return new P.j3(a)},
mg:function(a){return new P.cb(a)},
bj:function(a){return new P.fF(a)},
C:function(a){return new P.ex(a)},
a7:function(a,b,c){return new P.h5(a,b,c)},
o1:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.m]})
u=H.d([],[c])
C.a.sn(u,a)
for(t=0;t<a;++t)C.a.k(u,t,b.$1(t))
return u},
lH:function(a){H.pR(a)},
ot:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.D(a,4)^58)*3|C.b.D(a,0)^100|C.b.D(a,1)^97|C.b.D(a,2)^116|C.b.D(a,3)^97)>>>0
if(u===0)return P.mm(e<e?C.b.A(a,0,e):a,5,f).geh()
else if(u===32)return P.mm(C.b.A(a,5,e),0,f).geh()}t=new Array(8)
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
if(P.mM(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.jl()
if(r>=0)if(P.mM(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.p()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.P()
if(typeof n!=="number")return H.G(n)
if(m<n)n=m
if(typeof o!=="number")return o.P()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.P()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.P()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.a9(a,"..",o)))j=n>o+2&&C.b.a9(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.a9(a,"file",0)){if(q<=0){if(!C.b.a9(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.A(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.aS(a,o,n,"/");++e
n=h}k="file"}else if(C.b.a9(a,"http",0)){if(t&&p+3===o&&C.b.a9(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aS(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.a9(a,"https",0)){if(t&&p+4===o&&C.b.a9(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aS(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.A(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.k5(a,r,q,p,o,n,m,k)}return P.oL(a,0,e,r,q,p,o,n,m,k)},
mp:function(a){var u=P.f
return C.a.iw(H.d(a.split("&"),[u]),P.lg(u,u),new P.jb(C.h),[P.y,P.f,P.f])},
os:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.j8(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.W(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fo(C.b.A(a,s,t),n,n)
if(typeof p!=="number")return p.am()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.e(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fo(C.b.A(a,s,c),n,n)
if(typeof p!=="number")return p.am()
if(p>255)k.$2(l,s)
if(r>=u)return H.e(j,r)
j[r]=p
return j},
mo:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.j9(a)
t=new P.ja(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.m])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.W(a,r)
if(n===58){if(r===b){++r
if(C.b.W(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gau(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.os(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.e.aM(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
oL:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oS(a,b,d)
else{if(d===b)P.dh(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oT(a,u,e-1):""
s=P.oP(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.G(g)
q=r<g?P.oR(P.fo(C.b.A(a,r,g),new P.kh(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oQ(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.P()
o=h<i?P.lr(a,h+1,i,n):n
return new P.ci(j,t,s,q,p,o,i<c?P.oO(a,i+1,c):n)},
mC:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dh:function(a,b,c){throw H.c(P.a7(c,a,b))},
oR:function(a,b){if(a!=null&&a===P.mC(b))return
return a},
oP:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.W(a,b)===91){if(typeof c!=="number")return c.q()
u=c-1
if(C.b.W(a,u)!==93)P.dh(a,b,"Missing end `]` to match `[` in host")
P.mo(a,b+1,u)
return C.b.A(a,b,c).toLowerCase()}if(typeof c!=="number")return H.G(c)
t=b
for(;t<c;++t)if(C.b.W(a,t)===58){P.mo(a,b,c)
return"["+a+"]"}return P.oV(a,b,c)},
oV:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.G(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.W(a,u)
if(q===37){p=P.mI(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ag("")
n=C.b.A(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.A(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.z,o)
o=(C.z[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ag("")
if(t<u){s.a+=C.b.A(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.dh(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.W(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ag("")
n=C.b.A(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mD(q)
u+=l
t=u}}}}if(s==null)return C.b.A(a,b,c)
if(t<c){n=C.b.A(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oS:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mF(C.b.D(a,b)))P.dh(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.D(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dh(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.A(a,b,c)
return P.oM(t?a.toLowerCase():a)},
oM:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oT:function(a,b,c){return P.di(a,b,c,C.W,!1)},
oQ:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.di(a,b,c,C.A,!0):C.j.jG(d,new P.ki(),P.f).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a2(u,"/"))u="/"+u
return P.oU(u,e,f)},
oU:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a2(a,"/"))return P.oW(a,!u||c)
return P.oX(a)},
lr:function(a,b,c,d){var u,t={}
H.l(d,"$iy",[P.f,null],"$ay")
if(a!=null){if(d!=null)throw H.c(P.dt("Both query and queryParameters specified"))
return P.di(a,b,c,C.l,!0)}if(d==null)return
u=new P.ag("")
t.a=""
d.G(0,new P.kj(new P.kk(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oO:function(a,b,c){return P.di(a,b,c,C.l,!0)},
mI:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.W(a,b+1)
t=C.b.W(a,p)
s=H.kH(u)
r=H.kH(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.e.aM(q,4)
if(p>=8)return H.e(C.n,p)
p=(C.n[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c8(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.A(a,b,b+3).toUpperCase()
return},
mD:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
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
for(q=0;--r,r>=0;s=128){p=C.e.hG(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.D(o,p>>>4))
C.a.k(t,q+2,C.b.D(o,p&15))
q+=3}}return P.cW(t,0,null)},
di:function(a,b,c,d,e){var u=P.mH(a,b,c,H.l(d,"$ib",[P.m],"$ab"),e)
return u==null?C.b.A(a,b,c):u},
mH:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.l(d,"$ib",[P.m],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.P()
if(typeof c!=="number")return H.G(c)
if(!(t<c))break
c$0:{q=C.b.W(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mI(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.k,p)
p=(C.k[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dh(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.W(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mD(q)}}if(r==null)r=new P.ag("")
r.a+=C.b.A(a,s,t)
r.a+=H.i(o)
if(typeof n!=="number")return H.G(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.P()
if(s<c)r.a+=C.b.A(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mG:function(a){if(C.b.a2(a,"."))return!0
return C.b.dM(a,"/.")!==-1},
oX:function(a){var u,t,s,r,q,p,o
if(!P.mG(a))return a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.Q(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oW:function(a,b){var u,t,s,r,q,p
if(!P.mG(a))return!b?P.mE(a):a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gau(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gau(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.k(u,0,P.mE(u[0]))}return C.a.m(u,"/")},
mE:function(a){var u,t,s,r=a.length
if(r>=2&&P.mF(J.nw(a,0)))for(u=1;u<r;++u){t=C.b.D(a,u)
if(t===58)return C.b.A(a,0,u)+"%3A"+C.b.a7(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.e(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oN:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.D(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dt("Invalid URL encoding"))}}return u},
ls:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.D(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.A(a,b,c)
else r=new H.t(C.b.A(a,b,c))}else{r=H.d([],[P.m])
for(s=a.length,q=b;q<c;++q){t=C.b.D(a,q)
if(t>127)throw H.c(P.dt("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.dt("Truncated URI"))
C.a.h(r,P.oN(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.l(r,"$ib",[P.m],"$ab")
return new P.je(!1).c3(r)},
mF:function(a){var u=a|32
return 97<=u&&u<=122},
mm:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.m])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.D(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a7(m,a,t))}}if(s<0&&t>b)throw H.c(P.a7(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.D(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gau(l)
if(r!==44||t!==p+7||!C.b.a9(a,"base64",p+1))throw H.c(P.a7("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.iJ(0,a,o,u)
else{n=P.mH(a,o,u,C.l,!0)
if(n!=null)a=C.b.aS(a,o,u,n)}return new P.j7(a,l,c)},
oZ:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.o1(22,new P.ks(),P.R),n=new P.kr(o),m=new P.kt(),l=new P.ku(),k=H.h(n.$2(0,225),"$iR")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(14,225),"$iR")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(15,225),"$iR")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(1,225),"$iR")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(2,235),"$iR")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(3,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(4,229),"$iR")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(5,229),"$iR")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(6,231),"$iR")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(7,231),"$iR")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.h(n.$2(8,8),"$iR"),"]",5)
k=H.h(n.$2(9,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(16,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(17,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(10,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(18,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(19,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(11,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(12,236),"$iR")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.h(n.$2(13,237),"$iR")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.h(n.$2(20,245),"$iR"),"az",21)
k=H.h(n.$2(21,245),"$iR")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mM:function(a,b,c,d,e){var u,t,s,r,q
H.l(e,"$ib",[P.m],"$ab")
u=$.nt()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.b.D(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.k(e,q>>>5,t)}return d},
S:function S(){},
ay:function ay(a,b){this.a=a
this.b=b},
p:function p(){},
b4:function b4(a){this.a=a},
fS:function fS(){},
fT:function fT(){},
bC:function bC(){},
fs:function fs(){},
e0:function e0(){},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c9:function c9(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hc:function hc(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
j6:function j6(a){this.a=a},
j3:function j3(a){this.a=a},
cb:function cb(a){this.a=a},
fF:function fF(a){this.a=a},
i0:function i0(){},
e9:function e9(){},
fM:function fM(a){this.a=a},
ex:function ex(a){this.a=a},
h5:function h5(a,b,c){this.a=a
this.b=b
this.c=c},
bD:function bD(){},
m:function m(){},
j:function j(){},
b5:function b5(){},
b:function b(){},
y:function y(){},
O:function O(){},
ab:function ab(){},
P:function P(){},
aw:function aw(){},
f:function f(){},
ag:function ag(a){this.a=a},
jb:function jb(a){this.a=a},
j8:function j8(a){this.a=a},
j9:function j9(a){this.a=a},
ja:function ja(a,b){this.a=a
this.b=b},
ci:function ci(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
kh:function kh(a,b){this.a=a
this.b=b},
ki:function ki(){},
kk:function kk(a,b){this.a=a
this.b=b},
kj:function kj(a){this.a=a},
j7:function j7(a,b,c){this.a=a
this.b=b
this.c=c},
ks:function ks(){},
kr:function kr(a){this.a=a},
kt:function kt(){},
ku:function ku(){},
k5:function k5(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jF:function jF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
px:function(a){var u,t=J.U(a)
if(!!t.$ibl){u=t.gdu(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.f7(a.data,a.height,a.width)},
pw:function(a){if(a instanceof P.f7)return{data:a.a,height:a.b,width:a.c}
return a},
bs:function(a){var u,t,s,r,q
if(a==null)return
u=P.lg(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r){q=H.J(t[r])
u.k(0,q,a[q])}return u},
pv:function(a){var u={}
a.G(0,new P.kA(u))
return u},
k7:function k7(){},
k9:function k9(a,b){this.a=a
this.b=b},
f7:function f7(a,b,c){this.a=a
this.b=b
this.c=c},
kA:function kA(a){this.a=a},
k8:function k8(a,b){this.a=a
this.b=b},
h1:function h1(a,b){this.a=a
this.b=b},
h2:function h2(){},
h3:function h3(){},
jV:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oH:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jX:function jX(){},
al:function al(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b7:function b7(){},
hi:function hi(){},
b9:function b9(){},
hZ:function hZ(){},
i5:function i5(){},
cS:function cS(){},
iC:function iC(){},
q:function q(){},
bd:function bd(){},
iS:function iS(){},
eC:function eC(){},
eD:function eD(){},
eN:function eN(){},
eO:function eO(){},
eZ:function eZ(){},
f_:function f_(){},
f5:function f5(){},
f6:function f6(){},
R:function R(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(a){this.a=a},
fx:function fx(){},
bX:function bX(){},
i_:function i_(){},
eq:function eq(){},
dv:function dv(){},
e3:function e3(){},
ca:function ca(){},
e6:function e6(){},
ec:function ec(){},
ei:function ei(){},
iu:function iu(){},
eV:function eV(){},
eW:function eW(){}},W={
lQ:function(){var u=document.createElement("a")
return u},
l6:function(){var u=document.createElement("canvas")
return u},
nN:function(a,b,c){var u=document.body,t=(u&&C.t).ab(u,a,b,c)
t.toString
u=W.E
u=new H.d4(new W.aq(t),H.n(new W.fV(),{func:1,ret:P.S,args:[u]}),[u])
return H.h(u.gaG(u),"$iV")},
nO:function(a){H.h(a,"$ik")
return"wheel"},
cC:function(a){var u,t,s,r="element tag unavailable"
try{u=J.cq(a)
t=u.gea(a)
if(typeof t==="string")r=u.gea(a)}catch(s){H.aj(s)}return r},
nR:function(a){var u,t=document.createElement("input"),s=H.h(t,"$icI")
try{s.type=a}catch(u){H.aj(u)}return s},
jU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mA:function(a,b,c,d){var u=W.jU(W.jU(W.jU(W.jU(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
aa:function(a,b,c,d,e){var u=W.mQ(new W.jJ(c),W.o)
if(u!=null&&!0)J.ny(a,b,u,!1)
return new W.jI(a,b,u,!1,[e])},
mz:function(a){var u=W.lQ(),t=window.location
u=new W.bR(new W.k1(u,t))
u.eC(a)
return u},
oF:function(a,b,c,d){H.h(a,"$iV")
H.J(b)
H.J(c)
H.h(d,"$ibR")
return!0},
oG:function(a,b,c,d){var u,t,s
H.h(a,"$iV")
H.J(b)
H.J(c)
u=H.h(d,"$ibR").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mB:function(){var u=P.f,t=P.m_(C.p,u),s=H.r(C.p,0),r=H.n(new W.kd(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.kc(t,P.dP(u),P.dP(u),P.dP(u),null)
t.eJ(null,new H.hv(C.p,r,[s,u]),q,null)
return t},
mQ:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a0
if(u===C.f)return a
return u.dq(a,b)},
w:function w(){},
fq:function fq(){},
ds:function ds(){},
fr:function fr(){},
cv:function cv(){},
bY:function bY(){},
by:function by(){},
bZ:function bZ(){},
cy:function cy(){},
bz:function bz(){},
cA:function cA(){},
fI:function fI(){},
W:function W(){},
cB:function cB(){},
fJ:function fJ(){},
b2:function b2(){},
b3:function b3(){},
fK:function fK(){},
fL:function fL(){},
fO:function fO(){},
aF:function aF(){},
fP:function fP(){},
dE:function dE(){},
dF:function dF(){},
fQ:function fQ(){},
fR:function fR(){},
jD:function jD(a,b){this.a=a
this.b=b},
V:function V(){},
fV:function fV(){},
o:function o(){},
k:function k(){},
aG:function aG(){},
cE:function cE(){},
h0:function h0(){},
h4:function h4(){},
aQ:function aQ(){},
h9:function h9(){},
c2:function c2(){},
bl:function bl(){},
cH:function cH(){},
cI:function cI(){},
b6:function b6(){},
dQ:function dQ(){},
hJ:function hJ(){},
cL:function cL(){},
hK:function hK(){},
hL:function hL(a){this.a=a},
hM:function hM(){},
hN:function hN(a){this.a=a},
aS:function aS(){},
hO:function hO(){},
ae:function ae(){},
aq:function aq(a){this.a=a},
E:function E(){},
cQ:function cQ(){},
aT:function aT(){},
i3:function i3(){},
id:function id(){},
ie:function ie(a){this.a=a},
ih:function ih(){},
aU:function aU(){},
is:function is(){},
aV:function aV(){},
it:function it(){},
aW:function aW(){},
iw:function iw(){},
ix:function ix(a){this.a=a},
aJ:function aJ(){},
bb:function bb(){},
ea:function ea(){},
iD:function iD(){},
iE:function iE(){},
cX:function cX(){},
aX:function aX(){},
aK:function aK(){},
iG:function iG(){},
iH:function iH(){},
iM:function iM(){},
aY:function aY(){},
aZ:function aZ(){},
iQ:function iQ(){},
iR:function iR(){},
bO:function bO(){},
jc:function jc(){},
ju:function ju(){},
bf:function bf(){},
d5:function d5(){},
d6:function d6(){},
jE:function jE(){},
es:function es(){},
jT:function jT(){},
eK:function eK(){},
k6:function k6(){},
ka:function ka(){},
jC:function jC(){},
jG:function jG(a){this.a=a},
jH:function jH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lp:function lp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jI:function jI(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jJ:function jJ(a){this.a=a},
bR:function bR(a){this.a=a},
F:function F(){},
e_:function e_(a){this.a=a},
hW:function hW(a){this.a=a},
hV:function hV(a,b,c){this.a=a
this.b=b
this.c=c},
eS:function eS(){},
k3:function k3(){},
k4:function k4(){},
kc:function kc(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kd:function kd(){},
kb:function kb(){},
dI:function dI(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aA:function aA(){},
k1:function k1(a,b){this.a=a
this.b=b},
fa:function fa(a){this.a=a},
kn:function kn(a){this.a=a},
er:function er(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eL:function eL(){},
eM:function eM(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
dd:function dd(){},
de:function de(){},
eT:function eT(){},
eU:function eU(){},
eY:function eY(){},
f0:function f0(){},
f1:function f1(){},
df:function df(){},
dg:function dg(){},
f3:function f3(){},
f4:function f4(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){}},O={
l7:function(a){var u=new O.a6([a])
u.bz(a)
return u},
a6:function a6(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cK:function cK(){this.b=this.a=null},
m1:function(){var u,t,s=new O.dT()
s.seV(O.l7(V.ap))
s.e.ba(s.gfw(),s.gfA())
u=new O.b8(s,"emission")
u.c=new A.an(!1,!1,!1)
u.f=new V.a5(0,0,0)
s.f=u
u=new O.b8(s,"ambient")
u.c=new A.an(!1,!1,!1)
u.f=new V.a5(0,0,0)
s.r=u
u=new O.b8(s,"diffuse")
u.c=new A.an(!1,!1,!1)
u.f=new V.a5(0,0,0)
s.x=u
u=new O.b8(s,"invDiffuse")
u.c=new A.an(!1,!1,!1)
u.f=new V.a5(0,0,0)
s.y=u
u=new O.hC(s,"specular")
u.c=new A.an(!1,!1,!1)
u.f=new V.a5(0,0,0)
u.ch=100
s.z=u
u=new O.hy(s,"bump")
u.c=new A.an(!1,!1,!1)
s.Q=u
s.ch=null
u=new O.b8(s,"reflect")
u.c=new A.an(!1,!1,!1)
u.f=new V.a5(0,0,0)
s.cx=u
u=new O.hB(s,"refract")
u.c=new A.an(!1,!1,!1)
u.f=new V.a5(0,0,0)
u.ch=1
s.cy=u
u=new O.hx(s,"alpha")
u.c=new A.an(!1,!1,!1)
u.f=1
s.db=u
u=new D.dO()
u.bz(D.ac)
u.seE(H.d([],[D.dD]))
u.shj(H.d([],[D.e2]))
u.seF(H.d([],[D.bM]))
u.y=u.x=null
u.cw(u.gfu(),u.gh7(),u.ghb())
s.dx=u
t=new O.hA()
t.b=new V.aD(0,0,0,0)
t.c=1
t.d=10
t.e=!1
s.dy=t
t=u.x
u=t==null?u.x=D.X():t
u.h(0,s.ghu())
u=s.dx
t=u.y
u=t==null?u.y=D.X():t
u.h(0,s.geK())
s.fr=null
return s},
dT:function dT(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hD:function hD(a,b){this.a=a
this.b=b},
hE:function hE(){},
hF:function hF(a,b){this.a=a
this.b=b},
hG:function hG(){},
hH:function hH(a,b){this.a=a
this.b=b},
hI:function hI(){},
hx:function hx(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dU:function dU(){},
hy:function hy(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b8:function b8(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hA:function hA(){var _=this
_.e=_.d=_.c=_.b=null},
hB:function hB(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hC:function hC(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bN:function bN(){}},E={
l9:function(){var u=new E.ao()
u.a=""
u.b=!0
u.seB(0,O.l7(E.ao))
u.y.ba(u.giK(),u.giN())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sa8(0,null)
u.sb7(null)
u.saQ(null)
return u},
oj:function(a,b){var u=new E.i9(a)
u.ex(a,b)
return u},
op:function(a,b,c,d,e){var u,t,s=J.U(a)
if(!!s.$ibZ)return E.mi(a,!0,!0,!0,!1)
u=W.l6()
t=u.style
t.width="100%"
t.height="100%"
s.gc2(a).h(0,u)
return E.mi(u,!0,!0,!0,!1)},
mi:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ee(),j=H.h(C.i.cu(a,"webgl2",P.o_(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ica")
if(j==null)H.z(P.C("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.oj(j,a)
u=new T.iJ(j)
u.b=H.a4(j.getParameter(3379))
H.a4(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.el(a)
t=new X.hh()
t.shm(P.dP(P.m))
u.b=t
t=new X.hP(u)
t.f=0
t.r=V.bK()
t.x=V.bK()
t.ch=t.Q=1
u.c=t
t=new X.hp(u)
t.r=0
t.x=V.bK()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iP(u)
t.f=V.bK()
t.r=V.bK()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sf6(H.d([],[[P.cV,P.P]]))
t=u.z
s=document
r=W.ae
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.aa(s,"contextmenu",H.n(u.gfJ(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.aa(a,"focus",H.n(u.gfP(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.aa(a,"blur",H.n(u.gfC(),o),!1,p))
t=u.z
n=W.b6
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.aa(s,"keyup",H.n(u.gfT(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.aa(s,"keydown",H.n(u.gfR(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.aa(a,"mousedown",H.n(u.gfX(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.aa(a,"mouseup",H.n(u.gh0(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.aa(a,l,H.n(u.gfZ(),q),!1,r))
n=u.z
m=W.bf;(n&&C.a).h(n,W.aa(a,H.J(W.nO(a)),H.n(u.gh2(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.aa(s,l,H.n(u.gfL(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.aa(s,"mouseup",H.n(u.gfN(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.aa(s,"pointerlockchange",H.n(u.gh4(),o),!1,p))
p=u.z
o=W.aZ
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.aa(a,"touchstart",H.n(u.ghh(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.aa(a,"touchend",H.n(u.ghd(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.aa(a,"touchmove",H.n(u.ghf(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.ay(Date.now(),!1)
k.cy=0
k.d9()
return k},
fA:function fA(){},
ao:function ao(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i9:function i9(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ia:function ia(a){this.a=a},
ib:function ib(a){this.a=a},
ic:function ic(a){this.a=a},
ee:function ee(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iL:function iL(a){this.a=a}},Z={
lo:function(a,b,c){var u
H.l(c,"$ib",[P.m],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cj(c)),35044)
a.bindBuffer(b,null)
return new Z.eo(b,u)},
aM:function(a){return new Z.bQ(a)},
eo:function eo(a,b){this.a=a
this.b=b},
dw:function dw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jv:function jv(a){this.a=a},
dx:function dx(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bE:function bE(a,b,c){this.a=a
this.b=b
this.c=c},
bQ:function bQ(a){this.a=a}},D={
X:function(){var u=new D.c0()
u.sag(null)
u.saK(null)
u.c=null
u.d=0
return u},
fD:function fD(){},
c0:function c0(){var _=this
_.d=_.c=_.b=_.a=null},
fY:function fY(a){this.a=a},
fZ:function fZ(a){this.a=a},
D:function D(){this.b=null},
c3:function c3(a){this.b=null
this.$ti=a},
c4:function c4(a){this.b=null
this.$ti=a},
M:function M(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
dD:function dD(){},
ac:function ac(){},
dO:function dO(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
e2:function e2(){},
bM:function bM(){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},X={dy:function dy(a,b){this.a=a
this.b=b},dN:function dN(a,b){this.a=a
this.b=b},hh:function hh(){this.d=this.b=this.a=null},dR:function dR(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hp:function hp(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bG:function bG(a,b,c){this.a=a
this.b=b
this.c=c},bH:function bH(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hP:function hP(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},i4:function i4(){},eg:function eg(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iP:function iP(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},el:function el(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nQ:function(a){var u=new X.h6(),t=new V.aD(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.me
if(t==null){t=V.md(0,0,1,1)
$.me=t}u.r=t
return u},
dz:function dz(){},
h6:function h6(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e1:function e1(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
eb:function eb(){}},V={
pZ:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.b9(a-b,u)
return(a<0?a+u:a)+b},
T:function(a,b,c){if(a==null)return C.b.ad("null",c)
return C.b.ad(C.c.ed(Math.abs(a-0)<$.L().a?0:a,b),c+b+1)},
co:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.p],"$ab")
u=H.d([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.u)(a),++r){q=V.T(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.k(u,p,C.b.ad(u[p],s))}return u},
lG:function(a){return C.c.ja(Math.pow(2,C.S.ce(Math.log(H.pu(a))/Math.log(2))))},
dW:function(){var u=$.m5
return u==null?$.m5=V.bp(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bp:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ap(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
m4:function(a,b,c){return V.bp(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
m3:function(a,b,c,d){return V.bp(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
m2:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bp(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
bK:function(){var u=$.m9
return u==null?$.m9=new V.a9(0,0):u},
ma:function(){var u=$.bL
return u==null?$.bL=new V.a2(0,0,0):u},
md:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e5(a,b,c,d)},
d3:function(){var u=$.mu
return u==null?$.mu=new V.K(0,0,0):u},
oz:function(){var u=$.jg
return u==null?$.jg=new V.K(-1,0,0):u},
mv:function(){var u=$.jh
return u==null?$.jh=new V.K(0,1,0):u},
mw:function(){var u=$.ji
return u==null?$.ji=new V.K(0,0,1):u},
a5:function a5(a,b,c){this.a=a
this.b=b
this.c=c},
aD:function aD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fX:function fX(a){this.a=a},
dV:function dV(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ap:function ap(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a9:function a9(a,b){this.a=a
this.b=b},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
ba:function ba(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e5:function e5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a3:function a3(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
br:function br(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Z:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.C("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.D(a,0)
t=C.b.D(b,0)
s=new V.i8()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
v:function(a){var u=new V.ii()
u.ey(a)
return u},
iO:function(){var u=new V.iN(),t=P.f
u.shJ(new H.a1([t,V.cU]))
u.shM(new H.a1([t,V.cZ]))
u.c=null
return u},
bi:function bi(){},
az:function az(){},
dS:function dS(){},
av:function av(){this.a=null},
i8:function i8(){this.b=this.a=null},
ii:function ii(){this.a=null},
cU:function cU(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ef:function ef(a,b,c){this.a=a
this.b=b
this.c=c},
cZ:function cZ(a){this.b=a
this.c=null},
iN:function iN(){this.c=this.b=this.a=null},
d_:function d_(a){this.b=a
this.a=this.c=null},
pU:function(a){P.oq(C.P,new V.kX(a))},
ol:function(a){var u=new V.im()
u.eA(a,!0)
return u},
bA:function bA(){},
kX:function kX(a){this.a=a},
fN:function fN(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h7:function h7(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h8:function h8(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i2:function i2(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i6:function i6(a){this.a=a
this.c=null},
i7:function i7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
im:function im(){this.b=this.a=null},
ip:function ip(a){this.a=a},
io:function io(a){this.a=a},
iq:function iq(a){this.a=a}},U={
lV:function(){var u=new U.fE()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
dB:function(a){var u=new U.dA()
u.a=a
return u},
la:function(){var u=new U.cG()
u.bz(U.ak)
u.ba(u.geG(),u.gh9())
u.e=null
u.f=V.dW()
u.r=0
return u},
mq:function(a,b){var u,t,s,r=new U.em(),q=U.lV()
q.sej(0,!0)
q.sdQ(6.283185307179586)
q.sdS(0)
q.sa0(0,0)
q.sdR(100)
q.sY(0)
q.sdt(0.5)
r.b=q
u=r.gbd()
q.gw().h(0,u)
q=U.lV()
q.sej(0,!0)
q.sdQ(6.283185307179586)
q.sdS(0)
q.sa0(0,0)
q.sdR(100)
q.sY(0)
q.sdt(0.5)
r.c=q
q.gw().h(0,u)
r.d=null
r.r=r.f=r.e=!1
r.y=r.x=2.5
r.Q=4
r.ch=r.cx=!1
r.db=r.cy=0
r.dx=null
r.dy=0
r.fx=r.fr=null
t=new X.bG(a,!1,!1)
s=r.d
r.d=t
q=new D.M("modifiers",s,t,[X.bG])
q.b=!0
r.X(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.M("invertX",q,!1,[P.S])
q.b=!0
r.X(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.M("invertY",q,!1,[P.S])
q.b=!0
r.X(q)}r.i4(b)
return r},
fE:function fE(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dA:function dA(){this.b=this.a=null},
cG:function cG(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ak:function ak(){},
em:function em(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dG:function dG(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
o2:function(a,b){var u=a.b1,t=new A.hw(b,u)
t.ez(b,u)
t.ew(a,b)
return t},
o3:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.l(a9,"$ib",[A.aE],"$ab")
H.l(b0,"$ib",[A.aH],"$ab")
H.l(b1,"$ib",[A.aI],"$ab")
u="MaterialLight_"+a0.gal(a0)+a1.gal(a1)+a2.gal(a2)+a3.gal(a3)+a4.gal(a4)+a5.gal(a5)+a6.gal(a6)+a7.gal(a7)+a8.gal(a8)+"_"
u+=a?"1":"0"
u+=b?"1":"0"
u+=c?"1":"0"
u=u+"0_"+e
t=a9.length
if(t>0){u+="_Dir"
for(s=0;s<a9.length;a9.length===t||(0,H.u)(a9),++s)u+="_"+H.i(a9[s].a)}t=b0.length
if(t>0){u+="_Point"
for(s=0;s<b0.length;b0.length===t||(0,H.u)(b0),++s)u+="_"+H.i(b0[s].a)}t=b1.length
if(t>0){u+="_Spot"
for(s=0;s<b1.length;b1.length===t||(0,H.u)(b1),++s)u+="_"+H.i(b1[s].a)}for(t=a9.length,r=0,q=!1,s=0;s<t;++s,q=!0)r+=a9[s].b
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
f=$.bw()
if(j){t=$.bv()
f=new Z.bQ(f.a|t.a)}if(i){t=$.bu()
f=new Z.bQ(f.a|t.a)}if(h){t=$.bt()
f=new Z.bQ(f.a|t.a)}return new A.hz(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,r,o,k,o,q,g,!0,!1,!1,n,q,l,j,i,!1,!1,h,!1,!1,c,!1,e,u.charCodeAt(0)==0?u:u,f)},
kv:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
kw:function(a,b,c){var u
A.kv(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.l_(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
p4:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.kv(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
p1:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.kw(b,t,"ambient")
b.a+="\n"},
p2:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.kw(b,t,"diffuse")
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
p5:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.kw(b,t,"invDiffuse")
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
pb:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.kw(b,t,"specular")
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
p7:function(a,b){var u,t,s
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
p9:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.kv(b,t,"reflect")
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
pa:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.kv(b,t,"refract")
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
p3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.i(u)
s=A.l_(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.af()
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
o=H.d([],r)
if(!a.b.a)n=!1
else n=!0
if(n)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.d([],r)
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
p8:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.i(u)
s=A.l_(t)
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
if(typeof u!=="number")return u.af()
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
k=H.d([],r)
if(!a.c.a)r=!1
else r=!0
if(r)C.a.h(k,"diffuse(norm, normDir)")
if(!a.d.a)r=!1
else r=!0
if(r)C.a.h(k,"invDiffuse(norm, normDir)")
if(!a.e.a)r=!1
else r=!0
if(r)C.a.h(k,"specular(norm, normDir)")
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
pc:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.i(u)
s=A.l_(t)
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
if(typeof u!=="number")return u.af()
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
i=H.d([],u)
if(!a.c.a)u=!1
else u=!0
if(u)C.a.h(i,"diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)C.a.h(i,"invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)C.a.h(i,"specular(norm, litVec)")
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
p6:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.d([],[P.f])
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
u=b.a+="   return "+C.a.m(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
pd:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.ag("")
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
A.p4(a,j)
A.p1(a,j)
A.p2(a,j)
A.p5(a,j)
A.pb(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.p9(a,j)
A.pa(a,j)}A.p7(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.p3(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.p8(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.pc(a,q[o],j)
A.p6(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.d([],[P.f])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a7(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a7(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a7(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)C.a.h(n,"emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)C.a.h(n,"reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.m(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
pe:function(a,b){var u,t,s
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
pg:function(a,b){var u
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
pf:function(a,b){var u
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
pi:function(a,b){var u,t
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
pj:function(a,b){var u,t
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
ph:function(a,b){var u
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
pk:function(a,b){var u
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
l_:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.a7(a,1)},
ll:function(a,b,c,d,e){var u=new A.iX(a,c,e)
u.f=d
u.shU(P.o0(d,0,P.m))
return u},
du:function du(a,b,c){this.a=a
this.b=b
this.c=c},
ft:function ft(a){this.a=a},
an:function an(a,b,c){this.a=a
this.b=b
this.c=c},
hw:function hw(a,b){var _=this
_.js=_.jr=_.dw=_.dv=_.b1=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jF=_.jE=_.jD=_.cc=_.cb=_.ca=_.c9=_.c8=_.c7=_.jC=_.jB=_.dF=_.jA=_.jz=_.dE=_.dD=_.jy=_.jx=_.dC=_.dB=_.jw=_.jv=_.dA=_.ju=_.jt=_.dz=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aE:function aE(a,b){this.a=a
this.b=b},
aH:function aH(a,b){this.a=a
this.b=b},
aI:function aI(a,b){this.a=a
this.b=b},
hz:function hz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.b1=b3
_.dv=b4},
cc:function cc(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cd:function cd(a,b,c,d,e,f,g,h,i,j){var _=this
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
cg:function cg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cT:function cT(){},
eh:function eh(){},
j1:function j1(a){this.a=a},
aL:function aL(a,b,c){this.a=a
this.c=b
this.d=c},
iZ:function iZ(a,b,c){this.a=a
this.c=b
this.d=c},
j_:function j_(a,b,c){this.a=a
this.c=b
this.d=c},
j0:function j0(a,b,c){this.a=a
this.c=b
this.d=c},
iX:function iX(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ah:function ah(a,b,c){this.a=a
this.c=b
this.d=c},
iY:function iY(a,b,c){this.a=a
this.c=b
this.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
d0:function d0(a,b,c){this.a=a
this.c=b
this.d=c},
j2:function j2(a,b,c){this.a=a
this.c=b
this.d=c},
d1:function d1(a,b,c){this.a=a
this.c=b
this.d=c},
aB:function aB(a,b,c){this.a=a
this.c=b
this.d=c},
ce:function ce(a,b,c){this.a=a
this.c=b
this.d=c},
cf:function cf(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lB:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.ai,P.p,P.p]})
u=F.lj()
F.dj(u,b,c,d,a,1,0,0,1)
F.dj(u,b,c,d,a,0,1,0,3)
F.dj(u,b,c,d,a,0,0,1,2)
F.dj(u,b,c,d,a,-1,0,0,0)
F.dj(u,b,c,d,a,0,-1,0,0)
F.dj(u,b,c,d,a,0,0,-1,3)
u.at()
return u},
kq:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dj:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={}
H.n(c,{func:1,ret:-1,args:[F.ai,P.p,P.p]})
u=a1+a2
t=u+a3
s=a2+a3
r=a3+a1
q=new V.K(t,s+a1,r+a2)
e.a=q
p=a1-a2
o=a2-a3
n=a3-a1
m=e.b=new V.K(p+a3,o+a1,n+a2)
l=new V.K(p-a3,o-a1,n-a2)
e.c=l
k=e.d=new V.K(u-a3,s-a1,r-a2)
if(t>0){e.d=m
e.b=k
t=m
u=k}else{t=k
u=m}for(r=t,t=u,u=q,s=l,j=0;j<a4;++j,i=r,r=u,u=t,t=s,s=i){e.a=t
e.b=s
e.c=r
e.d=u}h=F.kq(u)
g=F.kq(e.b)
f=F.lJ(d,a0,new F.kp(e,F.kq(e.c),F.kq(e.d),g,h,c),b)
if(f!=null)a.b4(f)},
mV:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(d,{func:1,ret:P.p,args:[P.p]})
if(e<3)return
u=F.lj()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.ai])
q=u.a
p=new V.K(0,0,t)
p=p.u(0,Math.sqrt(p.E(p)))
C.a.h(r,q.i_(new V.ba(a,-1,-1,-1),new V.aD(1,1,1,1),new V.a2(0,0,c),new V.K(0,0,t),new V.a9(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.G(k)
j=new V.K(m,l,t).u(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.en(new V.ba(a,-1,-1,-1),null,new V.aD(i,g,h,1),new V.a2(m*k,l*k,c),new V.K(0,0,t),new V.a9(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.hY(r)
return u},
lC:function(a,b,c,d,e){return F.py(b,c,1,new F.kB(a,e),d)},
py:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.p,args:[P.p,P.p]})
if(e<3)return
if(c<1)return
u=F.lJ(c,e,new F.kD(d),null)
if(u==null)return
u.at()
u.bW()
if(b)u.b4(F.mV(3,!1,1,new F.kE(d),e))
if(a)u.b4(F.mV(1,!0,-1,new F.kF(d),e))
return u},
pV:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kY()
t=F.lB(a,null,new F.kZ(s,1),b)
t.bW()
return t},
n9:function(){return F.mU(15,30,0.5,1,new F.l0())},
pN:function(){return F.mU(12,120,0.3,1,new F.kM(3,2))},
mU:function(a,b,c,d,e){var u=F.lJ(a,b,new F.kC(H.n(e,{func:1,ret:V.a2,args:[P.p]}),d,b,c),null)
if(u==null)return
u.at()
u.bW()
return u},
lJ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.ai,P.p,P.p]})
if(a<1)return
if(b<1)return
u=F.lj()
t=H.d([],[F.ai])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.en(g,g,new V.aD(p,0,0,1),g,g,new V.a9(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.c4(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.en(g,g,new V.aD(j,i,h,1),g,g,new V.a9(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.c4(d))}}u.d.hZ(a+1,b+1,t)
return u},
cD:function(a,b,c){var u=new F.a8(),t=a.a
if(t==null)H.z(P.C("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.z(P.C("May not create a face with vertices attached to different shapes."))
u.bU(a)
u.bV(b)
u.hB(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a_()
return u},
nX:function(a,b){var u=new F.bo(),t=a.a
if(t==null)H.z(P.C("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.z(P.C("May not create a line with vertices attached to different shapes."))
u.bU(a)
u.bV(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a_()
return u},
lj:function(){var u=new F.e7(),t=new F.jj(u)
t.b=!1
t.shV(H.d([],[F.ai]))
u.a=t
t=new F.il(u)
t.sbN(H.d([],[F.bJ]))
u.b=t
t=new F.ik(u)
t.sfd(H.d([],[F.bo]))
u.c=t
t=new F.ij(u)
t.sf7(H.d([],[F.a8]))
u.d=t
u.e=null
return u},
en:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ai(),r=new F.jr()
r.sbN(H.d([],[F.bJ]))
s.b=r
r=new F.jn()
u=[F.bo]
r.sfe(H.d([],u))
r.sff(H.d([],u))
s.c=r
r=new F.jk()
u=[F.a8]
r.sf8(H.d([],u))
r.sf9(H.d([],u))
r.sfa(H.d([],u))
s.d=r
h=$.nn()
s.e=0
r=$.bw()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bv().a)!==0?e:t
s.x=(u&$.bu().a)!==0?b:t
s.y=(u&$.bV().a)!==0?f:t
s.z=(u&$.bW().a)!==0?g:t
s.Q=(u&$.no().a)!==0?c:t
s.ch=(u&$.cu().a)!==0?i:0
s.cx=(u&$.bt().a)!==0?a:t
return s},
kp:function kp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kB:function kB(a,b){this.a=a
this.b=b},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
kF:function kF(a){this.a=a},
kY:function kY(){},
kZ:function kZ(a,b){this.a=a
this.b=b},
l0:function l0(){},
kM:function kM(a,b){this.a=a
this.b=b},
kC:function kC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h_:function h_(){},
ir:function ir(){},
bo:function bo(){this.b=this.a=null},
hj:function hj(){},
iW:function iW(){},
bJ:function bJ(){this.a=null},
e7:function e7(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ij:function ij(a){this.a=a
this.b=null},
ik:function ik(a){this.a=a
this.b=null},
il:function il(a){this.a=a
this.b=null},
ai:function ai(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jt:function jt(a){this.a=a},
js:function js(a){this.a=a},
jj:function jj(a){this.a=a
this.c=this.b=null},
jk:function jk(){this.d=this.c=this.b=null},
jl:function jl(a,b){this.a=a
this.b=b},
jm:function jm(a,b){this.a=a
this.b=b},
jn:function jn(){this.c=this.b=null},
jp:function jp(){},
jo:function jo(){},
jq:function jq(){},
hX:function hX(){},
jr:function jr(){this.b=null}},T={cY:function cY(){},ed:function ed(){},iI:function iI(){var _=this
_.y=_.d=_.c=_.b=_.a=null},iJ:function iJ(a){var _=this
_.a=a
_.e=_.d=_.b=null},iK:function iK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},L={
n2:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="testCanvas",c=null,b=V.ol("Test 025"),a=W.l6()
a.className="pageLargeCanvas"
a.id=d
b.a.appendChild(a)
u=[P.f]
b.dl(H.d(["Test of the Material Lighting shader with a textured spot light. ","Use Ctrl plus the mouse to move the light."],u))
b.hW(H.d(["shapes"],u))
b.dl(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(d)
if(t==null)H.z(P.C("Failed to find an element with the identifier, testCanvas."))
s=E.op(t,!0,!0,!0,!1)
r=U.la()
r.h(0,U.dB(V.m4(0,0,-2.5)))
r.h(0,U.mq(!0,s.r))
q=new V.a5(1,1,1)
p=s.f.iG("../resources/Test.png")
o=new D.bM()
o.r=new V.a5(1,1,1)
o.ch=1.0471975511965976
o.cx=1
o.dx=o.cy=1.5707963267948966
o.db=!0
o.dy=1
o.fx=o.fr=0
o.fy=!0
o.a=V.ma()
o.b=V.mw()
o.c=V.mv()
o.d=V.oz()
n=o.f
o.f=r
r.gw().h(0,o.gbM())
m=new D.M("mover",n,o.f,[U.ak])
m.b=!0
o.Z(m)
if(!o.r.t(0,q)){n=o.r
o.r=q
m=new D.M("color",n,q,[V.a5])
m.b=!0
o.Z(m)}m=o.x
if(m!==p){if(m!=null)m.gw().L(0,o.gbM())
n=o.x
o.x=p
p.gw().h(0,o.gbM())
p=new D.M("texture",n,o.x,[T.ed])
p.b=!0
o.Z(p)}p=o.ch
if(!(Math.abs(p-0.5)<$.L().a)){o.ch=0.5
m=1/(Math.sqrt(2)*Math.tan(o.ch))
o.z=m
o.Q=m*o.cx
p=new D.M("fov",p,o.ch,[P.p])
p.b=!0
o.Z(p)}p=o.cx
if(!(Math.abs(p-1)<$.L().a)){o.cx=1
m=o.z
if(typeof m!=="number")return m.C()
o.Q=m
p=new D.M("ratio",p,1,[P.p])
p.b=!0
o.Z(p)}p=o.cy
if(!(Math.abs(p-1.5707963267948966)<$.L().a)){o.cy=1.5707963267948966
p=new D.M("cutoff",p,1.5707963267948966,[P.p])
p.b=!0
o.Z(p)}p=o.dx
if(!(Math.abs(p-1.5707963267948966)<$.L().a)){o.dx=1.5707963267948966
p=new D.M("coneAngle",p,1.5707963267948966,[P.p])
p.b=!0
o.Z(p)}p=$.mx
if(p==null){p=new V.br(1,0.00390625,0.0000152587890625,0)
$.mx=p
l=p}else l=p
if(!J.Q(o.e,l)){n=o.e
o.e=l
p=new D.M("shadowAdjust",n,l,[V.br])
p.b=!0
o.Z(p)}p=o.dy
if(!(Math.abs(p-0.5)<$.L().a)){o.dy=0.5
p=new D.M("attenuation0",p,0.5,[P.p])
p.b=!0
o.Z(p)}p=o.fr
if(!(Math.abs(p-0.05)<$.L().a)){o.fr=0.05
p=new D.M("attenuation1",p,0.05,[P.p])
p.b=!0
o.Z(p)}p=o.fx
if(!(Math.abs(p-0.05)<$.L().a)){o.fx=0.05
p=new D.M("attenuation2",p,0.05,[P.p])
p.b=!0
o.Z(p)}k=O.m1()
k.dx.h(0,o)
p=k.r
p.saO(0,new V.a5(0.05,0.05,0.05))
p=k.x
p.saO(0,new V.a5(0.7,0.7,0.7))
p=k.z
p.saO(0,new V.a5(0.3,0.3,0.3))
p=k.z
p.dc(new A.an(!0,!1,!1))
p.dd(100)
j=E.l9()
j.sa8(0,F.n9())
i=E.l9()
i.saQ(U.dB(V.m3(3,3,3,1)))
p=F.lB(1,c,c,1)
p.cd()
i.sa8(0,p)
h=U.la()
h.h(0,U.mq(!1,s.r))
h.h(0,U.dB(V.m2(3.141592653589793)))
h.h(0,U.dB(V.m4(0,0,5)))
g=E.l9()
p=U.la()
p.h(0,U.dB(V.m3(0.1,0.1,0.1,1)))
p.h(0,r)
g.saQ(p)
g.sa8(0,F.lC(0,!1,!0,40,1))
p=O.m1()
m=p.f
m.saO(0,new V.a5(1,1,1))
g.sb7(p)
p=new M.dG()
p.a=!0
p.seY(0,O.l7(E.ao))
p.e.ba(p.gfF(),p.gfH())
p.y=p.x=p.r=p.f=null
f=X.nQ(c)
e=new X.e1()
e.c=1.0471975511965976
e.d=0.1
e.e=2000
e.saQ(c)
m=e.c
if(!(Math.abs(m-1.0471975511965976)<$.L().a)){e.c=1.0471975511965976
m=new D.M("fov",m,1.0471975511965976,[P.p])
m.b=!0
e.aI(m)}m=e.d
if(!(Math.abs(m-0.1)<$.L().a)){e.d=0.1
m=new D.M("near",m,0.1,[P.p])
m.b=!0
e.aI(m)}m=e.e
if(!(Math.abs(m-2000)<$.L().a)){e.e=2000
m=new D.M("far",m,2000,[P.p])
m.b=!0
e.aI(m)}m=p.b
if(m!==e){if(m!=null)m.gw().L(0,p.gap())
n=p.b
p.b=e
e.gw().h(0,p.gap())
m=new D.M("camera",n,p.b,[X.dz])
m.b=!0
p.ax(m)}m=p.c
if(m!==f){if(m!=null)m.gw().L(0,p.gap())
n=p.c
p.c=f
f.gw().h(0,p.gap())
m=new D.M("target",n,p.c,[X.eb])
m.b=!0
p.ax(m)}p.sb7(c)
p.sb7(k)
p.e.h(0,j)
p.e.h(0,i)
p.e.h(0,g)
p.b.saQ(h)
m=s.d
if(m!==p){if(m!=null)m.gw().L(0,s.gcE())
s.d=p
p.gw().h(0,s.gcE())
s.cF()}p=new V.i6("shapes")
u=u.getElementById("shapes")
p.c=u
if(u==null)H.z("Failed to find shapes for RadioGroup")
p.aZ(0,"Cube",new L.kO(j))
p.aZ(0,"Cylinder",new L.kP(j))
p.aZ(0,"Cone",new L.kQ(j))
p.aZ(0,"Sphere",new L.kR(j))
p.dj(0,"Toroid",new L.kS(j),!0)
p.aZ(0,"Knot",new L.kT(j))
u=s.z
if(u==null)u=s.z=D.X()
p={func:1,ret:-1,args:[D.D]}
m=H.n(new L.kU(b,k),p)
if(u.b==null)u.saK(H.d([],[p]))
u=u.b;(u&&C.a).h(u,m)
V.pU(s)},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a){this.a=a},
kT:function kT(a){this.a=a},
kU:function kU(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,L]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.le.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gH:function(a){return H.cR(a)},
i:function(a){return"Instance of '"+H.c7(a)+"'"}}
J.he.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iS:1}
J.dL.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0}}
J.dM.prototype={
gH:function(a){return 0},
i:function(a){return String(a)}}
J.i1.prototype={}
J.bP.prototype={}
J.bn.prototype={
i:function(a){var u=a[$.nb()]
if(u==null)return this.er(a)
return"JavaScript function for "+H.i(J.at(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibD:1}
J.aR.prototype={
h:function(a,b){H.B(b,H.r(a,0))
if(!!a.fixed$length)H.z(P.H("add"))
a.push(b)},
e6:function(a,b){if(!!a.fixed$length)H.z(P.H("removeAt"))
if(b<0||b>=a.length)throw H.c(P.e4(b,null))
return a.splice(b,1)[0]},
L:function(a,b){var u
if(!!a.fixed$length)H.z(P.H("remove"))
for(u=0;u<a.length;++u)if(J.Q(a[u],b)){a.splice(u,1)
return!0}return!1},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bj(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.i(a[u]))
return t.join(b)},
iE:function(a){return this.m(a,"")},
iw:function(a,b,c,d){var u,t,s
H.B(b,d)
H.n(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bj(a))}return t},
iv:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.S,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.I(b.$1(s)))return s
if(a.length!==u)throw H.c(P.bj(a))}throw H.c(H.hd())},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
eo:function(a,b,c){if(b<0||b>a.length)throw H.c(P.af(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.af(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.r(a,0)])
return H.d(a.slice(b,c),[H.r(a,0)])},
giu:function(a){if(a.length>0)return a[0]
throw H.c(H.hd())},
gau:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hd())},
bb:function(a,b,c,d){var u,t,s=H.r(a,0)
H.l(d,"$ij",[s],"$aj")
if(!!a.immutable$list)H.z(P.H("setRange"))
P.bq(b,c,a.length)
u=c-b
if(u===0)return
P.li(0,"skipCount")
H.l(d,"$ib",[s],"$ab")
s=J.cp(d)
if(u>s.gn(d))throw H.c(H.nT())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
dm:function(a,b){var u,t
H.n(b,{func:1,ret:P.S,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.I(b.$1(a[t])))return!0
if(a.length!==u)throw H.c(P.bj(a))}return!1},
bx:function(a,b){var u=H.r(a,0)
H.n(b,{func:1,ret:P.m,args:[u,u]})
if(!!a.immutable$list)H.z(P.H("sort"))
H.e8(a,0,a.length-1,b,u)},
S:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Q(a[u],b))return!0
return!1},
i:function(a){return P.lb(a,"[","]")},
gT:function(a){return new J.au(a,a.length,[H.r(a,0)])},
gH:function(a){return H.cR(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.z(P.H("set length"))
if(b<0)throw H.c(P.af(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cn(a,b))
return a[b]},
k:function(a,b,c){H.B(c,H.r(a,0))
if(!!a.immutable$list)H.z(P.H("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cn(a,b))
a[b]=c},
p:function(a,b){var u,t=[H.r(a,0)]
H.l(b,"$ib",t,"$ab")
u=C.e.p(a.length,b.gn(b))
t=H.d([],t)
this.sn(t,u)
this.bb(t,0,a.length,a)
this.bb(t,a.length,u,b)
return t},
$ij:1,
$ib:1}
J.ld.prototype={}
J.au.prototype={
gJ:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.u(s))
u=t.c
if(u>=r){t.scI(null)
return!1}t.scI(s[u]);++t.c
return!0},
scI:function(a){this.d=H.B(a,H.r(this,0))},
$ib5:1}
J.bF.prototype={
ia:function(a,b){var u
H.n3(b)
if(typeof b!=="number")throw H.c(H.ar(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbl(b)
if(this.gbl(a)===u)return 0
if(this.gbl(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbl:function(a){return a===0?1/a<0:a<0},
ja:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.H(""+a+".toInt()"))},
ce:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.H(""+a+".floor()"))},
ak:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.H(""+a+".round()"))},
ed:function(a,b){var u
if(b>20)throw H.c(P.af(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbl(a))return"-"+u
return u},
b8:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.af(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.W(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.z(P.H("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.C("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
p:function(a,b){if(typeof b!=="number")throw H.c(H.ar(b))
return a+b},
q:function(a,b){if(typeof b!=="number")throw H.c(H.ar(b))
return a-b},
C:function(a,b){if(typeof b!=="number")throw H.c(H.ar(b))
return a*b},
b9:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ev:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.df(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.df(a,b)},
df:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.H("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aM:function(a,b){var u
if(a>0)u=this.de(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hG:function(a,b){if(b<0)throw H.c(H.ar(b))
return this.de(a,b)},
de:function(a,b){return b>31?0:a>>>b},
am:function(a,b){if(typeof b!=="number")throw H.c(H.ar(b))
return a>b},
$ip:1,
$iab:1}
J.dK.prototype={$im:1}
J.dJ.prototype={}
J.bm.prototype={
W:function(a,b){if(b<0)throw H.c(H.cn(a,b))
if(b>=a.length)H.z(H.cn(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.c(H.cn(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.l4(b,null,null))
return a+b},
aS:function(a,b,c,d){var u,t
c=P.bq(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a9:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.af(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a2:function(a,b){return this.a9(a,b,0)},
A:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.z(H.ar(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.c(P.e4(b,null))
if(b>c)throw H.c(P.e4(b,null))
if(c>a.length)throw H.c(P.e4(c,null))
return a.substring(b,c)},
a7:function(a,b){return this.A(a,b,null)},
jd:function(a){return a.toLowerCase()},
C:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ad:function(a,b){var u=b-a.length
if(u<=0)return a
return this.C(" ",u)+a},
dN:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.af(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dM:function(a,b){return this.dN(a,b,0)},
i:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$im7:1,
$if:1}
H.t.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.b.W(this.a,b)},
$ad2:function(){return[P.m]},
$ax:function(){return[P.m]},
$aj:function(){return[P.m]},
$ab:function(){return[P.m]}}
H.fU.prototype={}
H.c5.prototype={
gT:function(a){var u=this
return new H.cJ(u,u.gn(u),[H.as(u,"c5",0)])},
bu:function(a,b){return this.eq(0,H.n(b,{func:1,ret:P.S,args:[H.as(this,"c5",0)]}))}}
H.cJ.prototype={
gJ:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=J.cp(s),q=r.gn(s)
if(t.b!==q)throw H.c(P.bj(s))
u=t.c
if(u>=q){t.saV(null)
return!1}t.saV(r.I(s,u));++t.c
return!0},
saV:function(a){this.d=H.B(a,H.r(this,0))},
$ib5:1}
H.ht.prototype={
gT:function(a){return new H.hu(J.bx(this.a),this.b,this.$ti)},
gn:function(a){return J.aC(this.a)},
I:function(a,b){return this.b.$1(J.fp(this.a,b))},
$aj:function(a,b){return[b]}}
H.hu.prototype={
B:function(){var u=this,t=u.b
if(t.B()){u.saV(u.c.$1(t.gJ(t)))
return!0}u.saV(null)
return!1},
gJ:function(a){return this.a},
saV:function(a){this.a=H.B(a,H.r(this,1))},
$ab5:function(a,b){return[b]}}
H.hv.prototype={
gn:function(a){return J.aC(this.a)},
I:function(a,b){return this.b.$1(J.fp(this.a,b))},
$ac5:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.d4.prototype={
gT:function(a){return new H.jw(J.bx(this.a),this.b,this.$ti)}}
H.jw.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(H.I(t.$1(u.gJ(u))))return!0
return!1},
gJ:function(a){var u=this.a
return u.gJ(u)}}
H.c1.prototype={}
H.d2.prototype={
k:function(a,b,c){H.B(c,H.as(this,"d2",0))
throw H.c(P.H("Cannot modify an unmodifiable list"))}}
H.ej.prototype={}
H.fG.prototype={
i:function(a){return P.lh(this)},
k:function(a,b,c){H.B(b,H.r(this,0))
H.B(c,H.r(this,1))
return H.nK()},
$iy:1}
H.fH.prototype={
gn:function(a){return this.a},
bj:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bj(0,b))return
return this.cY(b)},
cY:function(a){return this.b[H.J(a)]},
G:function(a,b){var u,t,s,r,q=this,p=H.r(q,1)
H.n(b,{func:1,ret:-1,args:[H.r(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.B(q.cY(r),p))}}}
H.iT.prototype={
ac:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hY.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hg.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.j5.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.l1.prototype={
$1:function(a){if(!!J.U(a).$ibC)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:25}
H.eX.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaw:1}
H.cz.prototype={
i:function(a){return"Closure '"+H.c7(this).trim()+"'"},
$ibD:1,
gjk:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iF.prototype={}
H.iv.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ct(u)+"'"}}
H.cw.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cw))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.cR(this.a)
else u=typeof t!=="object"?J.dr(t):H.cR(t)
return(u^H.cR(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.c7(u)+"'")}}
H.iV.prototype={
i:function(a){return this.a}}
H.fC.prototype={
i:function(a){return this.a}}
H.ig.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.jx.prototype={
i:function(a){return"Assertion failed: "+P.dH(this.a)}}
H.a1.prototype={
gn:function(a){return this.a},
giD:function(a){return this.a===0},
ga3:function(a){return new H.hl(this,[H.r(this,0)])},
bj:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cU(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cU(t,b)}else return s.iA(b)},
iA:function(a){var u=this,t=u.d
if(t==null)return!1
return u.ci(u.bG(t,u.cg(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.be(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.be(r,b)
s=t==null?null:t.b
return s}else return q.iB(b)},
iB:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bG(r,s.cg(a))
t=s.ci(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.B(b,H.r(s,0))
H.B(c,H.r(s,1))
if(typeof b==="string"){u=s.b
s.cK(u==null?s.b=s.bK():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cK(t==null?s.c=s.bK():t,b,c)}else s.iC(b,c)},
iC:function(a,b){var u,t,s,r,q=this
H.B(a,H.r(q,0))
H.B(b,H.r(q,1))
u=q.d
if(u==null)u=q.d=q.bK()
t=q.cg(a)
s=q.bG(u,t)
if(s==null)q.bS(u,t,[q.bL(a,b)])
else{r=q.ci(s,a)
if(r>=0)s[r].b=b
else s.push(q.bL(a,b))}},
G:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.r(s,0),H.r(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bj(s))
u=u.c}},
cK:function(a,b,c){var u,t=this
H.B(b,H.r(t,0))
H.B(c,H.r(t,1))
u=t.be(a,b)
if(u==null)t.bS(a,b,t.bL(b,c))
else u.b=c},
fl:function(){this.r=this.r+1&67108863},
bL:function(a,b){var u,t=this,s=new H.hk(H.B(a,H.r(t,0)),H.B(b,H.r(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fl()
return s},
cg:function(a){return J.dr(a)&0x3ffffff},
ci:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Q(a[t].a,b))return t
return-1},
i:function(a){return P.lh(this)},
be:function(a,b){return a[b]},
bG:function(a,b){return a[b]},
bS:function(a,b,c){a[b]=c},
f2:function(a,b){delete a[b]},
cU:function(a,b){return this.be(a,b)!=null},
bK:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bS(t,u,t)
this.f2(t,u)
return t}}
H.hk.prototype={}
H.hl.prototype={
gn:function(a){return this.a.a},
gT:function(a){var u=this.a,t=new H.hm(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hm.prototype={
gJ:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bj(t))
else{t=u.c
if(t==null){u.scJ(null)
return!1}else{u.scJ(t.a)
u.c=u.c.c
return!0}}},
scJ:function(a){this.d=H.B(a,H.r(this,0))},
$ib5:1}
H.kI.prototype={
$1:function(a){return this.a(a)},
$S:25}
H.kJ.prototype={
$2:function(a,b){return this.a(a,b)},
$S:56}
H.kK.prototype={
$1:function(a){return this.a(H.J(a))},
$S:53}
H.hf.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$im7:1,
$ioh:1}
H.cN.prototype={$icN:1}
H.bI.prototype={$ibI:1,$ior:1}
H.dX.prototype={
gn:function(a){return a.length},
$iN:1,
$aN:function(){}}
H.cO.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
k:function(a,b,c){H.pA(c)
H.bh(b,a,a.length)
a[b]=c},
$ac1:function(){return[P.p]},
$ax:function(){return[P.p]},
$ij:1,
$aj:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.dY.prototype={
k:function(a,b,c){H.a4(c)
H.bh(b,a,a.length)
a[b]=c},
$ac1:function(){return[P.m]},
$ax:function(){return[P.m]},
$ij:1,
$aj:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]}}
H.hQ.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hR.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hS.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hT.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hU.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.dZ.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
$iqk:1}
H.cP.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
$icP:1,
$iR:1}
H.d9.prototype={}
H.da.prototype={}
H.db.prototype={}
H.dc.prototype={}
P.jz.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:18}
P.jy.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:49}
P.jA.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jB.prototype={
$0:function(){this.a.$0()},
$S:0}
P.f2.prototype={
eM:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cm(new P.kf(this,b),0),a)
else throw H.c(P.H("`setTimeout()` not found."))},
eN:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cm(new P.ke(this,a,Date.now(),b),0),a)
else throw H.c(P.H("Periodic timer."))},
$ibc:1}
P.kf.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.ke.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.ev(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bg.prototype={
iH:function(a){if(this.c!==6)return!0
return this.b.b.cs(H.n(this.d,{func:1,ret:P.S,args:[P.P]}),a.a,P.S,P.P)},
iy:function(a){var u=this.e,t=P.P,s={futureOr:1,type:H.r(this,1)},r=this.b.b
if(H.fl(u,{func:1,args:[P.P,P.aw]}))return H.lD(r.j5(u,a.a,a.b,null,t,P.aw),s)
else return H.lD(r.cs(H.n(u,{func:1,args:[P.P]}),a.a,null,t),s)}}
P.aN.prototype={
ec:function(a,b,c){var u,t,s,r=H.r(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a0
if(u!==C.f){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.pm(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aN($.a0,[c])
s=b==null?1:3
this.cL(new P.bg(t,s,a,b,[r,c]))
return t},
j9:function(a,b){return this.ec(a,null,b)},
cL:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.h(t.c,"$ibg")
t.c=a}else{if(s===2){u=H.h(t.c,"$iaN")
s=u.a
if(s<4){u.cL(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.kz(null,null,s,H.n(new P.jK(t,a),{func:1,ret:-1}))}},
d7:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.h(p.c,"$ibg")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.h(p.c,"$iaN")
u=q.a
if(u<4){q.d7(a)
return}p.a=u
p.c=q.c}o.a=p.bg(a)
u=p.b
u.toString
P.kz(null,null,u,H.n(new P.jO(o,p),{func:1,ret:-1}))}},
bP:function(){var u=H.h(this.c,"$ibg")
this.c=null
return this.bg(u)},
bg:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cQ:function(a){var u,t,s=this,r=H.r(s,0)
H.lD(a,{futureOr:1,type:r})
u=s.$ti
if(H.ly(a,"$icF",u,"$acF"))if(H.ly(a,"$iaN",u,null))P.my(a,s)
else P.oE(a,s)
else{t=s.bP()
H.B(a,r)
s.a=4
s.c=a
P.d7(s,t)}},
cR:function(a,b){var u,t=this
H.h(b,"$iaw")
u=t.bP()
t.a=8
t.c=new P.am(a,b)
P.d7(t,u)},
$icF:1}
P.jK.prototype={
$0:function(){P.d7(this.a,this.b)},
$S:0}
P.jO.prototype={
$0:function(){P.d7(this.b,this.a.a)},
$S:0}
P.jL.prototype={
$1:function(a){var u=this.a
u.a=0
u.cQ(a)},
$S:18}
P.jM.prototype={
$2:function(a,b){H.h(b,"$iaw")
this.a.cR(a,b)},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jN.prototype={
$0:function(){this.a.cR(this.b,this.c)},
$S:0}
P.jR.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.e9(H.n(s.d,{func:1}),null)}catch(r){u=H.aj(r)
t=H.cr(r)
if(o.d){s=H.h(o.a.a.c,"$iam").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.h(o.a.a.c,"$iam")
else q.b=new P.am(u,t)
q.a=!0
return}if(!!J.U(n).$icF){if(n instanceof P.aN&&n.a>=4){if(n.a===8){s=o.b
s.b=H.h(n.c,"$iam")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.j9(new P.jS(p),null)
s.a=!1}},
$S:3}
P.jS.prototype={
$1:function(a){return this.a},
$S:46}
P.jQ.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.r(s,0)
q=H.B(n.c,r)
p=H.r(s,1)
n.a.b=s.b.b.cs(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aj(o)
t=H.cr(o)
s=n.a
s.b=new P.am(u,t)
s.a=!0}},
$S:3}
P.jP.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.h(m.a.a.c,"$iam")
r=m.c
if(H.I(r.iH(u))&&r.e!=null){q=m.b
q.b=r.iy(u)
q.a=!1}}catch(p){t=H.aj(p)
s=H.cr(p)
r=H.h(m.a.a.c,"$iam")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.am(t,s)
n.a=!0}},
$S:3}
P.ep.prototype={}
P.iy.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aN($.a0,[P.m])
r.a=0
u=H.r(s,0)
t=H.n(new P.iA(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.iB(r,q),{func:1,ret:-1})
W.aa(s.a,s.b,t,!1,u)
return q}}
P.iA.prototype={
$1:function(a){H.B(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.O,args:[H.r(this.b,0)]}}}
P.iB.prototype={
$0:function(){this.b.cQ(this.a.a)},
$S:0}
P.cV.prototype={}
P.iz.prototype={}
P.bc.prototype={}
P.am.prototype={
i:function(a){return H.i(this.a)},
$ibC:1}
P.ko.prototype={$iqz:1}
P.ky.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e0():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:0}
P.jY.prototype={
j6:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.a0){a.$0()
return}P.mK(r,r,this,a,-1)}catch(s){u=H.aj(s)
t=H.cr(s)
P.kx(r,r,this,u,H.h(t,"$iaw"))}},
j7:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.f===$.a0){a.$1(b)
return}P.mL(r,r,this,a,b,-1,c)}catch(s){u=H.aj(s)
t=H.cr(s)
P.kx(r,r,this,u,H.h(t,"$iaw"))}},
i6:function(a,b){return new P.k_(this,H.n(a,{func:1,ret:b}),b)},
bY:function(a){return new P.jZ(this,H.n(a,{func:1,ret:-1}))},
dq:function(a,b){return new P.k0(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
e9:function(a,b){H.n(a,{func:1,ret:b})
if($.a0===C.f)return a.$0()
return P.mK(null,null,this,a,b)},
cs:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.a0===C.f)return a.$1(b)
return P.mL(null,null,this,a,b,c,d)},
j5:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.a0===C.f)return a.$2(b,c)
return P.pn(null,null,this,a,b,c,d,e,f)}}
P.k_.prototype={
$0:function(){return this.a.e9(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jZ.prototype={
$0:function(){return this.a.j6(this.b)},
$S:3}
P.k0.prototype={
$1:function(a){var u=this.c
return this.a.j7(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jW.prototype={
gT:function(a){var u=this,t=new P.eE(u,u.r,u.$ti)
t.c=u.e
return t},
gn:function(a){return this.a},
S:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.h(u[b],"$ich")!=null}else{t=this.eZ(b)
return t}},
eZ:function(a){var u=this.d
if(u==null)return!1
return this.bE(this.cZ(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.B(b,H.r(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cN(u==null?s.b=P.lq():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cN(t==null?s.c=P.lq():t,b)}else return s.eP(0,b)},
eP:function(a,b){var u,t,s,r=this
H.B(b,H.r(r,0))
u=r.d
if(u==null)u=r.d=P.lq()
t=r.cS(b)
s=u[t]
if(s==null)u[t]=[r.bB(b)]
else{if(r.bE(s,b)>=0)return!1
s.push(r.bB(b))}return!0},
L:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hp(this.c,b)
else return this.ho(0,b)},
ho:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cZ(r,b)
t=s.bE(u,b)
if(t<0)return!1
s.dg(u.splice(t,1)[0])
return!0},
cN:function(a,b){H.B(b,H.r(this,0))
if(H.h(a[b],"$ich")!=null)return!1
a[b]=this.bB(b)
return!0},
hp:function(a,b){var u
if(a==null)return!1
u=H.h(a[b],"$ich")
if(u==null)return!1
this.dg(u)
delete a[b]
return!0},
cP:function(){this.r=1073741823&this.r+1},
bB:function(a){var u,t=this,s=new P.ch(H.B(a,H.r(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cP()
return s},
dg:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cP()},
cS:function(a){return J.dr(a)&1073741823},
cZ:function(a,b){return a[this.cS(b)]},
bE:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Q(a[t].a,b))return t
return-1}}
P.ch.prototype={}
P.eE.prototype={
gJ:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bj(t))
else{t=u.c
if(t==null){u.scO(null)
return!1}else{u.scO(H.B(t.a,H.r(u,0)))
u.c=u.c.b
return!0}}},
scO:function(a){this.d=H.B(a,H.r(this,0))},
$ib5:1}
P.hn.prototype={
$2:function(a,b){this.a.k(0,H.B(a,this.b),H.B(b,this.c))},
$S:5}
P.ho.prototype={$ij:1,$ib:1}
P.x.prototype={
gT:function(a){return new H.cJ(a,this.gn(a),[H.bT(this,a,"x",0)])},
I:function(a,b){return this.j(a,b)},
jc:function(a,b){var u,t=this,s=H.d([],[H.bT(t,a,"x",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.k(s,u,t.j(a,u))
return s},
jb:function(a){return this.jc(a,!0)},
p:function(a,b){var u,t=this,s=[H.bT(t,a,"x",0)]
H.l(b,"$ib",s,"$ab")
u=H.d([],s)
C.a.sn(u,C.e.p(t.gn(a),b.gn(b)))
C.a.bb(u,0,t.gn(a),a)
C.a.bb(u,t.gn(a),u.length,b)
return u},
is:function(a,b,c,d){var u
H.B(d,H.bT(this,a,"x",0))
P.bq(b,c,this.gn(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.lb(a,"[","]")}}
P.hq.prototype={}
P.hr.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.i(a)
t.a=u+": "
t.a+=H.i(b)},
$S:5}
P.ad.prototype={
G:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bT(s,a,"ad",0),H.bT(s,a,"ad",1)]})
for(u=J.bx(s.ga3(a));u.B();){t=u.gJ(u)
b.$2(t,s.j(a,t))}},
gn:function(a){return J.aC(this.ga3(a))},
i:function(a){return P.lh(a)},
$iy:1}
P.kg.prototype={
k:function(a,b,c){H.B(b,H.r(this,0))
H.B(c,H.r(this,1))
throw H.c(P.H("Cannot modify unmodifiable map"))}}
P.hs.prototype={
j:function(a,b){return J.dq(this.a,b)},
k:function(a,b,c){J.l2(this.a,H.B(b,H.r(this,0)),H.B(c,H.r(this,1)))},
G:function(a,b){J.lN(this.a,H.n(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gn:function(a){return J.aC(this.a)},
i:function(a){return J.at(this.a)},
$iy:1}
P.ek.prototype={}
P.k2.prototype={
ar:function(a,b){var u
for(u=J.bx(H.l(b,"$ij",this.$ti,"$aj"));u.B();)this.h(0,u.gJ(u))},
i:function(a){return P.lb(this,"{","}")},
I:function(a,b){var u,t,s,r=this
P.li(b,"index")
for(u=P.oI(r,r.r,H.r(r,0)),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.c(P.Y(b,r,"index",null,t))},
$ij:1,
$imf:1}
P.eF.prototype={}
P.f8.prototype={}
P.fy.prototype={
iJ:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bq(a0,a1,b.length)
u=$.nq()
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
if(h>=0){i=C.b.W("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ag("")
g=r.a+=C.b.A(b,s,t)
r.a=g+H.c8(m)
s=n
continue}}throw H.c(P.a7("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.A(b,s,a1)
f=g.length
if(q>=0)P.lR(b,p,a1,q,o,f)
else{e=C.e.b9(f-1,4)+1
if(e===1)throw H.c(P.a7(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aS(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lR(b,p,a1,q,o,d)
else{e=C.e.b9(d,4)
if(e===1)throw H.c(P.a7(c,b,a1))
if(e>1)b=C.b.aS(b,a1,a1,e===2?"==":"=")}return b},
$ac_:function(){return[[P.b,P.m],P.f]}}
P.fz.prototype={
$abB:function(){return[[P.b,P.m],P.f]}}
P.c_.prototype={}
P.bB.prototype={}
P.fW.prototype={
$ac_:function(){return[P.f,[P.b,P.m]]}}
P.hb.prototype={
i:function(a){return this.a}}
P.ha.prototype={
f_:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.ag("")
if(r>b)q.a+=C.b.A(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nD(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abB:function(){return[P.f,P.f]}}
P.jd.prototype={
gir:function(){return C.N}}
P.jf.prototype={
c3:function(a){var u,t,s=P.bq(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.km(u)
if(t.fb(a,0,s)!==s)t.di(J.nz(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oY(0,t.b,u.length)))},
$abB:function(){return[P.f,[P.b,P.m]]}}
P.km.prototype={
di:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fb:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.W(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.D(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.di(r,C.b.D(a,p)))s=p}else if(r<=2047){q=n.b
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
P.je.prototype={
c3:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ib",[P.m],"$ab")
u=P.ou(!1,a,0,null)
if(u!=null)return u
t=P.bq(0,null,J.aC(a))
s=P.mN(a,0,t)
if(s>0){r=P.cW(a,0,s)
if(s===t)return r
q=new P.ag(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ag("")
n=new P.kl(!1,q)
n.c=o
n.ib(a,p,t)
if(n.e>0){H.z(P.a7("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c8(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abB:function(){return[[P.b,P.m],P.f]}}
P.kl.prototype={
ib:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.l(a,"$ib",[P.m],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.cp(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.af()
if((o&192)!==128){n=P.a7(h+C.e.b8(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.e(C.w,n)
if(u<=C.w[n]){n=P.a7("Overlong encoding of 0x"+C.e.b8(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a7("Character outside valid Unicode range: 0x"+C.e.b8(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.c8(u)
i.c=!1}for(n=p<c;n;){m=P.mN(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cW(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.P()
if(o<0){j=P.a7("Negative UTF-8 code unit: -0x"+C.e.b8(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a7(h+C.e.b8(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.S.prototype={}
P.ay.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.ay&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.e.aM(u,30))&1073741823},
i:function(a){var u=this,t=P.nL(H.od(u)),s=P.dC(H.ob(u)),r=P.dC(H.o7(u)),q=P.dC(H.o8(u)),p=P.dC(H.oa(u)),o=P.dC(H.oc(u)),n=P.nM(H.o9(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.p.prototype={}
P.b4.prototype={
p:function(a,b){return new P.b4(C.e.p(this.a,b.gcX()))},
q:function(a,b){return new P.b4(C.e.q(this.a,b.gcX()))},
am:function(a,b){return C.e.am(this.a,b.gcX())},
t:function(a,b){if(b==null)return!1
return b instanceof P.b4&&this.a===b.a},
gH:function(a){return C.e.gH(this.a)},
i:function(a){var u,t,s,r=new P.fT(),q=this.a
if(q<0)return"-"+new P.b4(0-q).i(0)
u=r.$1(C.e.a6(q,6e7)%60)
t=r.$1(C.e.a6(q,1e6)%60)
s=new P.fS().$1(q%1e6)
return""+C.e.a6(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.fS.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:19}
P.fT.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:19}
P.bC.prototype={}
P.fs.prototype={
i:function(a){return"Assertion failed"}}
P.e0.prototype={
i:function(a){return"Throw of null."}}
P.aP.prototype={
gbD:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbC:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbD()+o+u
if(!q.a)return t
s=q.gbC()
r=P.dH(q.b)
return t+s+": "+r}}
P.c9.prototype={
gbD:function(){return"RangeError"},
gbC:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.hc.prototype={
gbD:function(){return"RangeError"},
gbC:function(){var u,t=H.a4(this.b)
if(typeof t!=="number")return t.P()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gn:function(a){return this.f}}
P.j6.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.j3.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cb.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fF.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dH(u)+"."}}
P.i0.prototype={
i:function(a){return"Out of Memory"},
$ibC:1}
P.e9.prototype={
i:function(a){return"Stack Overflow"},
$ibC:1}
P.fM.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ex.prototype={
i:function(a){return"Exception: "+this.a}}
P.h5.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.A(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.D(f,q)
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
k=""}j=C.b.A(f,m,n)
return h+l+j+k+"\n"+C.b.C(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.i(g)+")"):h}}
P.bD.prototype={}
P.m.prototype={}
P.j.prototype={
bu:function(a,b){var u=H.as(this,"j",0)
return new H.d4(this,H.n(b,{func:1,ret:P.S,args:[u]}),[u])},
gn:function(a){var u,t=this.gT(this)
for(u=0;t.B();)++u
return u},
gaG:function(a){var u,t=this.gT(this)
if(!t.B())throw H.c(H.hd())
u=t.gJ(t)
if(t.B())throw H.c(H.nU())
return u},
I:function(a,b){var u,t,s
P.li(b,"index")
for(u=this.gT(this),t=0;u.B();){s=u.gJ(u)
if(b===t)return s;++t}throw H.c(P.Y(b,this,"index",null,t))},
i:function(a){return P.nS(this,"(",")")}}
P.b5.prototype={}
P.b.prototype={$ij:1}
P.y.prototype={}
P.O.prototype={
gH:function(a){return P.P.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.ab.prototype={}
P.P.prototype={constructor:P.P,$iP:1,
t:function(a,b){return this===b},
gH:function(a){return H.cR(this)},
i:function(a){return"Instance of '"+H.c7(this)+"'"},
toString:function(){return this.i(this)}}
P.aw.prototype={}
P.f.prototype={$im7:1}
P.ag.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iq8:1}
P.jb.prototype={
$2:function(a,b){var u,t,s,r=P.f
H.l(a,"$iy",[r,r],"$ay")
H.J(b)
u=J.dm(b).dM(b,"=")
if(u===-1){if(b!=="")J.l2(a,P.ls(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.A(b,0,u)
s=C.b.a7(b,u+1)
r=this.a
J.l2(a,P.ls(t,0,t.length,r,!0),P.ls(s,0,s.length,r,!0))}return a},
$S:45}
P.j8.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:44}
P.j9.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.ja.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fo(C.b.A(this.b,a,b),null,16)
if(typeof u!=="number")return u.P()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:42}
P.ci.prototype={
gei:function(){return this.b},
gcf:function(a){var u=this.c
if(u==null)return""
if(C.b.a2(u,"["))return C.b.A(u,1,u.length-1)
return u},
gbo:function(a){var u=this.d
if(u==null)return P.mC(this.a)
return u},
gcm:function(a){var u=this.f
return u==null?"":u},
gdH:function(){var u=this.r
return u==null?"":u},
e7:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.l(b,"$iy",[P.f,null],"$ay")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a2(p,"/"))p="/"+p
n=P.lr(null,0,0,b)
return new P.ci(u,s,q,r,p,n,m.r)},
gcn:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.f
s.shn(new P.ek(P.mp(u==null?"":u),[t,t]))}return s.Q},
gdI:function(){return this.c!=null},
gdL:function(){return this.f!=null},
gdJ:function(){return this.r!=null},
i:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.i(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.i(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.i(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.U(b).$ilm)if(s.a==b.gbw())if(s.c!=null===b.gdI())if(s.b==b.gei())if(s.gcf(s)==b.gcf(b))if(s.gbo(s)==b.gbo(b))if(s.e===b.ge2(b)){u=s.f
t=u==null
if(!t===b.gdL()){if(t)u=""
if(u===b.gcm(b)){u=s.r
t=u==null
if(!t===b.gdJ()){if(t)u=""
u=u===b.gdH()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gH:function(a){var u=this.z
return u==null?this.z=C.b.gH(this.i(0)):u},
shn:function(a){var u=P.f
this.Q=H.l(a,"$iy",[u,u],"$ay")},
$ilm:1,
gbw:function(){return this.a},
ge2:function(a){return this.e}}
P.kh.prototype={
$1:function(a){throw H.c(P.a7("Invalid port",this.a,this.b+1))},
$S:41}
P.ki.prototype={
$1:function(a){return P.f9(C.X,a,C.h,!1)},
$S:23}
P.kk.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.f9(C.n,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.f9(C.n,b,C.h,!0))}},
$S:24}
P.kj.prototype={
$2:function(a,b){var u,t
H.J(a)
if(b==null||typeof b==="string")this.a.$2(a,H.J(b))
else for(u=J.bx(H.n1(b,"$ij")),t=this.a;u.B();)t.$2(a,H.J(u.gJ(u)))},
$S:40}
P.j7.prototype={
geh:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.e(o,0)
u=q.a
o=o[0]+1
t=C.b.dN(u,"?",o)
s=u.length
if(t>=0){r=P.di(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jF("data",p,p,p,P.di(u,o,s,C.A,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.e(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.ks.prototype={
$1:function(a){return new Uint8Array(96)},
$S:48}
P.kr.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.nA(u,0,96,b)
return u},
$S:39}
P.kt.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.D(b,s)^96
if(r>=t)return H.e(a,r)
a[r]=c}}}
P.ku.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.D(b,0),t=C.b.D(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.e(a,r)
a[r]=c}}}
P.k5.prototype={
gdI:function(){return this.c>0},
gdK:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.G(t)
t=u+1<t
u=t}else u=!1
return u},
gdL:function(){var u=this.f
if(typeof u!=="number")return u.P()
return u<this.r},
gdJ:function(){return this.r<this.a.length},
gd0:function(){return this.b===4&&C.b.a2(this.a,"http")},
gd1:function(){return this.b===5&&C.b.a2(this.a,"https")},
gbw:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gd0())q=t.x="http"
else if(t.gd1()){t.x="https"
q="https"}else if(q===4&&C.b.a2(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a2(t.a,r)){t.x=r
q=r}else{q=C.b.A(t.a,0,q)
t.x=q}return q},
gei:function(){var u=this.c,t=this.b+3
return u>t?C.b.A(this.a,t,u-1):""},
gcf:function(a){var u=this.c
return u>0?C.b.A(this.a,u,this.d):""},
gbo:function(a){var u,t=this
if(t.gdK()){u=t.d
if(typeof u!=="number")return u.p()
return P.fo(C.b.A(t.a,u+1,t.e),null,null)}if(t.gd0())return 80
if(t.gd1())return 443
return 0},
ge2:function(a){return C.b.A(this.a,this.e,this.f)},
gcm:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.P()
return u<t?C.b.A(this.a,u+1,t):""},
gdH:function(){var u=this.r,t=this.a
return u<t.length?C.b.a7(t,u+1):""},
gcn:function(){var u=this,t=u.f
if(typeof t!=="number")return t.P()
if(t>=u.r)return C.Y
t=P.f
return new P.ek(P.mp(u.gcm(u)),[t,t])},
e7:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.l(b,"$iy",[P.f,null],"$ay")
u=k.gbw()
t=u==="file"
s=k.c
r=s>0?C.b.A(k.a,k.b+3,s):""
q=k.gdK()?k.gbo(k):j
s=k.c
if(s>0)p=C.b.A(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.A(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a2(o,"/"))o="/"+o
m=P.lr(j,0,0,b)
n=k.r
l=n<s.length?C.b.a7(s,n+1):j
return new P.ci(u,r,p,q,o,m,l)},
gH:function(a){var u=this.y
return u==null?this.y=C.b.gH(this.a):u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.U(b).$ilm&&this.a===b.i(0)},
i:function(a){return this.a},
$ilm:1}
P.jF.prototype={}
W.w.prototype={}
W.fq.prototype={
gn:function(a){return a.length}}
W.ds.prototype={
i:function(a){return String(a)},
$ids:1}
W.fr.prototype={
i:function(a){return String(a)}}
W.cv.prototype={$icv:1}
W.bY.prototype={$ibY:1}
W.by.prototype={$iby:1}
W.bZ.prototype={
cu:function(a,b,c){if(c!=null)return a.getContext(b,P.pv(c))
return a.getContext(b)},
el:function(a,b){return this.cu(a,b,null)},
$ibZ:1}
W.cy.prototype={$icy:1}
W.bz.prototype={
gn:function(a){return a.length}}
W.cA.prototype={$icA:1}
W.fI.prototype={
gn:function(a){return a.length}}
W.W.prototype={$iW:1}
W.cB.prototype={
gn:function(a){return a.length}}
W.fJ.prototype={}
W.b2.prototype={}
W.b3.prototype={}
W.fK.prototype={
gn:function(a){return a.length}}
W.fL.prototype={
gn:function(a){return a.length}}
W.fO.prototype={
gn:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.fP.prototype={
i:function(a){return String(a)}}
W.dE.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.l(c,"$ial",[P.ab],"$aal")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[[P.al,P.ab]]},
$ax:function(){return[[P.al,P.ab]]},
$ij:1,
$aj:function(){return[[P.al,P.ab]]},
$ib:1,
$ab:function(){return[[P.al,P.ab]]},
$aF:function(){return[[P.al,P.ab]]}}
W.dF.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gaF(a))+" x "+H.i(this.gaC(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$ial)return!1
return a.left===u.gbm(b)&&a.top===u.gbq(b)&&this.gaF(a)===u.gaF(b)&&this.gaC(a)===u.gaC(b)},
gH:function(a){return W.mA(C.c.gH(a.left),C.c.gH(a.top),C.c.gH(this.gaF(a)),C.c.gH(this.gaC(a)))},
gdr:function(a){return a.bottom},
gaC:function(a){return a.height},
gbm:function(a){return a.left},
gcr:function(a){return a.right},
gbq:function(a){return a.top},
gaF:function(a){return a.width},
$ial:1,
$aal:function(){return[P.ab]}}
W.fQ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.J(c)
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[P.f]},
$ax:function(){return[P.f]},
$ij:1,
$aj:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aF:function(){return[P.f]}}
W.fR.prototype={
gn:function(a){return a.length}}
W.jD.prototype={
gn:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.h(u[b],"$iV")},
k:function(a,b,c){var u
H.h(c,"$iV")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gT:function(a){var u=this.jb(this)
return new J.au(u,u.length,[H.r(u,0)])},
$ax:function(){return[W.V]},
$aj:function(){return[W.V]},
$ab:function(){return[W.V]}}
W.V.prototype={
gi5:function(a){return new W.jG(a)},
gc2:function(a){return new W.jD(a,a.children)},
gds:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.P()
if(s<0)s=-s*0
if(typeof r!=="number")return r.P()
if(r<0)r=-r*0
return new P.al(u,t,s,r,[P.ab])},
i:function(a){return a.localName},
ab:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lY
if(u==null){u=H.d([],[W.aA])
t=new W.e_(u)
C.a.h(u,W.mz(null))
C.a.h(u,W.mB())
$.lY=t
d=t}else d=u
u=$.lX
if(u==null){u=new W.fa(d)
$.lX=u
c=u}else{u.a=d
c=u}}if($.bk==null){u=document
t=u.implementation.createHTMLDocument("")
$.bk=t
$.l8=t.createRange()
t=$.bk.createElement("base")
H.h(t,"$icv")
t.href=u.baseURI
$.bk.head.appendChild(t)}u=$.bk
if(u.body==null){t=u.createElement("body")
u.body=H.h(t,"$iby")}u=$.bk
if(!!this.$iby)s=u.body
else{s=u.createElement(a.tagName)
$.bk.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.S(C.V,a.tagName)){$.l8.selectNodeContents(s)
r=$.l8.createContextualFragment(b)}else{s.innerHTML=b
r=$.bk.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bk.body
if(s==null?u!=null:s!==u)J.lP(s)
c.cv(r)
document.adoptNode(r)
return r},
ig:function(a,b,c){return this.ab(a,b,c,null)},
en:function(a,b){a.textContent=null
a.appendChild(this.ab(a,b,null,null))},
$iV:1,
gea:function(a){return a.tagName}}
W.fV.prototype={
$1:function(a){return!!J.U(H.h(a,"$iE")).$iV},
$S:27}
W.o.prototype={$io:1}
W.k.prototype={
hX:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.eQ(a,b,c,!1)},
eQ:function(a,b,c,d){return a.addEventListener(b,H.cm(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ik:1}
W.aG.prototype={$iaG:1}
W.cE.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaG")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aG]},
$ax:function(){return[W.aG]},
$ij:1,
$aj:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$icE:1,
$aF:function(){return[W.aG]}}
W.h0.prototype={
gn:function(a){return a.length}}
W.h4.prototype={
gn:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.h9.prototype={
gn:function(a){return a.length}}
W.c2.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iE")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.E]},
$ax:function(){return[W.E]},
$ij:1,
$aj:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$ic2:1,
$aF:function(){return[W.E]}}
W.bl.prototype={$ibl:1,
gdu:function(a){return a.data}}
W.cH.prototype={$icH:1}
W.cI.prototype={$icI:1}
W.b6.prototype={$ib6:1}
W.dQ.prototype={
i:function(a){return String(a)},
$idQ:1}
W.hJ.prototype={
gn:function(a){return a.length}}
W.cL.prototype={$icL:1}
W.hK.prototype={
j:function(a,b){return P.bs(a.get(H.J(b)))},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bs(t.value[1]))}},
ga3:function(a){var u=H.d([],[P.f])
this.G(a,new W.hL(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.H("Not supported"))},
$aad:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
W.hL.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hM.prototype={
j:function(a,b){return P.bs(a.get(H.J(b)))},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bs(t.value[1]))}},
ga3:function(a){var u=H.d([],[P.f])
this.G(a,new W.hN(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.H("Not supported"))},
$aad:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
W.hN.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aS.prototype={$iaS:1}
W.hO.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaS")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aS]},
$ax:function(){return[W.aS]},
$ij:1,
$aj:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aF:function(){return[W.aS]}}
W.ae.prototype={$iae:1}
W.aq.prototype={
gaG:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.mg("No elements"))
if(t>1)throw H.c(P.mg("More than one element"))
return u.firstChild},
ar:function(a,b){var u,t,s,r
H.l(b,"$ij",[W.E],"$aj")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
k:function(a,b,c){var u,t
H.h(c,"$iE")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
u.replaceChild(c,t[b])},
gT:function(a){var u=this.a.childNodes
return new W.dI(u,u.length,[H.bT(C.Z,u,"F",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$ax:function(){return[W.E]},
$aj:function(){return[W.E]},
$ab:function(){return[W.E]}}
W.E.prototype={
j_:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
j3:function(a,b){var u,t
try{u=a.parentNode
J.nx(u,b,a)}catch(t){H.aj(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.ep(a):u},
i2:function(a,b){return a.appendChild(H.h(b,"$iE"))},
hs:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.cQ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iE")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.E]},
$ax:function(){return[W.E]},
$ij:1,
$aj:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aF:function(){return[W.E]}}
W.aT.prototype={$iaT:1,
gn:function(a){return a.length}}
W.i3.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaT")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aT]},
$ax:function(){return[W.aT]},
$ij:1,
$aj:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aF:function(){return[W.aT]}}
W.id.prototype={
j:function(a,b){return P.bs(a.get(H.J(b)))},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bs(t.value[1]))}},
ga3:function(a){var u=H.d([],[P.f])
this.G(a,new W.ie(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.H("Not supported"))},
$aad:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
W.ie.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.ih.prototype={
gn:function(a){return a.length}}
W.aU.prototype={$iaU:1}
W.is.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaU")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aU]},
$ax:function(){return[W.aU]},
$ij:1,
$aj:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aF:function(){return[W.aU]}}
W.aV.prototype={$iaV:1}
W.it.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaV")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aV]},
$ax:function(){return[W.aV]},
$ij:1,
$aj:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aF:function(){return[W.aV]}}
W.aW.prototype={$iaW:1,
gn:function(a){return a.length}}
W.iw.prototype={
j:function(a,b){return a.getItem(H.J(b))},
k:function(a,b,c){a.setItem(b,c)},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga3:function(a){var u=H.d([],[P.f])
this.G(a,new W.ix(u))
return u},
gn:function(a){return a.length},
$aad:function(){return[P.f,P.f]},
$iy:1,
$ay:function(){return[P.f,P.f]}}
W.ix.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:24}
W.aJ.prototype={$iaJ:1}
W.bb.prototype={$ibb:1}
W.ea.prototype={
ab:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.by(a,b,c,d)
u=W.nN("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.aq(t).ar(0,new W.aq(u))
return t}}
W.iD.prototype={
ab:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.by(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ab(u.createElement("table"),b,c,d)
u.toString
u=new W.aq(u)
s=u.gaG(u)
s.toString
u=new W.aq(s)
r=u.gaG(u)
t.toString
r.toString
new W.aq(t).ar(0,new W.aq(r))
return t}}
W.iE.prototype={
ab:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.by(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ab(u.createElement("table"),b,c,d)
u.toString
u=new W.aq(u)
s=u.gaG(u)
t.toString
s.toString
new W.aq(t).ar(0,new W.aq(s))
return t}}
W.cX.prototype={$icX:1}
W.aX.prototype={$iaX:1}
W.aK.prototype={$iaK:1}
W.iG.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaK")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aK]},
$ax:function(){return[W.aK]},
$ij:1,
$aj:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aF:function(){return[W.aK]}}
W.iH.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaX")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aX]},
$ax:function(){return[W.aX]},
$ij:1,
$aj:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aF:function(){return[W.aX]}}
W.iM.prototype={
gn:function(a){return a.length}}
W.aY.prototype={$iaY:1}
W.aZ.prototype={$iaZ:1}
W.iQ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaY")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aY]},
$ax:function(){return[W.aY]},
$ij:1,
$aj:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aF:function(){return[W.aY]}}
W.iR.prototype={
gn:function(a){return a.length}}
W.bO.prototype={}
W.jc.prototype={
i:function(a){return String(a)}}
W.ju.prototype={
gn:function(a){return a.length}}
W.bf.prototype={
gij:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.H("deltaY is not supported"))},
gii:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.H("deltaX is not supported"))},
$ibf:1}
W.d5.prototype={
ht:function(a,b){return a.requestAnimationFrame(H.cm(H.n(b,{func:1,ret:-1,args:[P.ab]}),1))},
f5:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d6.prototype={$id6:1}
W.jE.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iW")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.W]},
$ax:function(){return[W.W]},
$ij:1,
$aj:function(){return[W.W]},
$ib:1,
$ab:function(){return[W.W]},
$aF:function(){return[W.W]}}
W.es.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$ial)return!1
return a.left===u.gbm(b)&&a.top===u.gbq(b)&&a.width===u.gaF(b)&&a.height===u.gaC(b)},
gH:function(a){return W.mA(C.c.gH(a.left),C.c.gH(a.top),C.c.gH(a.width),C.c.gH(a.height))},
gaC:function(a){return a.height},
gaF:function(a){return a.width}}
W.jT.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaQ")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aQ]},
$ax:function(){return[W.aQ]},
$ij:1,
$aj:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aF:function(){return[W.aQ]}}
W.eK.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iE")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.E]},
$ax:function(){return[W.E]},
$ij:1,
$aj:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aF:function(){return[W.E]}}
W.k6.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaW")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aW]},
$ax:function(){return[W.aW]},
$ij:1,
$aj:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aF:function(){return[W.aW]}}
W.ka.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaJ")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aJ]},
$ax:function(){return[W.aJ]},
$ij:1,
$aj:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$aF:function(){return[W.aJ]}}
W.jC.prototype={
G:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.ga3(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga3:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.f])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.e(r,t)
s=H.h(r[t],"$id6")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aad:function(){return[P.f,P.f]},
$ay:function(){return[P.f,P.f]}}
W.jG.prototype={
j:function(a,b){return this.a.getAttribute(H.J(b))},
k:function(a,b,c){this.a.setAttribute(b,c)},
gn:function(a){return this.ga3(this).length}}
W.jH.prototype={}
W.lp.prototype={}
W.jI.prototype={}
W.jJ.prototype={
$1:function(a){return this.a.$1(H.h(a,"$io"))},
$S:37}
W.bR.prototype={
eC:function(a){var u
if($.d8.giD($.d8)){for(u=0;u<262;++u)$.d8.k(0,C.U[u],W.pG())
for(u=0;u<12;++u)$.d8.k(0,C.q[u],W.pH())}},
aN:function(a){return $.nr().S(0,W.cC(a))},
as:function(a,b,c){var u=$.d8.j(0,H.i(W.cC(a))+"::"+b)
if(u==null)u=$.d8.j(0,"*::"+b)
if(u==null)return!1
return H.lx(u.$4(a,b,c,this))},
$iaA:1}
W.F.prototype={
gT:function(a){return new W.dI(a,this.gn(a),[H.bT(this,a,"F",0)])}}
W.e_.prototype={
aN:function(a){return C.a.dm(this.a,new W.hW(a))},
as:function(a,b,c){return C.a.dm(this.a,new W.hV(a,b,c))},
$iaA:1}
W.hW.prototype={
$1:function(a){return H.h(a,"$iaA").aN(this.a)},
$S:29}
W.hV.prototype={
$1:function(a){return H.h(a,"$iaA").as(this.a,this.b,this.c)},
$S:29}
W.eS.prototype={
eJ:function(a,b,c,d){var u,t,s
this.a.ar(0,c)
u=b.bu(0,new W.k3())
t=b.bu(0,new W.k4())
this.b.ar(0,u)
s=this.c
s.ar(0,C.x)
s.ar(0,t)},
aN:function(a){return this.a.S(0,W.cC(a))},
as:function(a,b,c){var u=this,t=W.cC(a),s=u.c
if(s.S(0,H.i(t)+"::"+b))return u.d.i0(c)
else if(s.S(0,"*::"+b))return u.d.i0(c)
else{s=u.b
if(s.S(0,H.i(t)+"::"+b))return!0
else if(s.S(0,"*::"+b))return!0
else if(s.S(0,H.i(t)+"::*"))return!0
else if(s.S(0,"*::*"))return!0}return!1},
$iaA:1}
W.k3.prototype={
$1:function(a){return!C.a.S(C.q,H.J(a))},
$S:30}
W.k4.prototype={
$1:function(a){return C.a.S(C.q,H.J(a))},
$S:30}
W.kc.prototype={
as:function(a,b,c){if(this.eu(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.S(0,b)
return!1}}
W.kd.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.J(a))},
$S:23}
W.kb.prototype={
aN:function(a){var u=J.U(a)
if(!!u.$icS)return!1
u=!!u.$iq
if(u&&W.cC(a)==="foreignObject")return!1
if(u)return!0
return!1},
as:function(a,b,c){if(b==="is"||C.b.a2(b,"on"))return!1
return this.aN(a)},
$iaA:1}
W.dI.prototype={
B:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sd_(J.dq(u.a,t))
u.c=t
return!0}u.sd_(null)
u.c=s
return!1},
gJ:function(a){return this.d},
sd_:function(a){this.d=H.B(a,H.r(this,0))},
$ib5:1}
W.aA.prototype={}
W.k1.prototype={$iql:1}
W.fa.prototype={
cv:function(a){new W.kn(this).$2(a,null)},
aY:function(a,b){if(b==null)J.lP(a)
else b.removeChild(a)},
hy:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nB(a)
n=o.a.getAttribute("is")
H.h(a,"$iV")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.I(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.aj(r)}t="element unprintable"
try{t=J.at(a)}catch(r){H.aj(r)}try{s=W.cC(a)
this.hx(H.h(a,"$iV"),b,p,t,s,H.h(o,"$iy"),H.J(n))}catch(r){if(H.aj(r) instanceof P.aP)throw r
else{this.aY(a,b)
window
q="Removing corrupted element "+H.i(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hx:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.aY(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aN(a)){o.aY(a,b)
window
u="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.as(a,"is",g)){o.aY(a,b)
window
u="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga3(f)
t=H.d(u.slice(0),[H.r(u,0)])
for(s=f.ga3(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.e(t,s)
r=t[s]
q=o.a
p=J.nE(r)
H.J(r)
if(!q.as(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.i(e)+" "+r+'="'+H.i(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.U(a).$icX)o.cv(a.content)},
$iq5:1}
W.kn.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hy(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aY(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.aj(s)
r=H.h(u,"$iE")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.h(t,"$iE")}},
$S:35}
W.er.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.dd.prototype={}
W.de.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eY.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.df.prototype={}
W.dg.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fk.prototype={}
P.k7.prototype={
dG:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
ct:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.U(a)
if(!!u.$iay)return new Date(a.a)
if(!!u.$ioh)throw H.c(P.j4("structured clone of RegExp"))
if(!!u.$iaG)return a
if(!!u.$ibY)return a
if(!!u.$icE)return a
if(!!u.$ibl)return a
if(!!u.$icN||!!u.$ibI||!!u.$icL)return a
if(!!u.$iy){t=q.dG(a)
s=q.b
if(t>=s.length)return H.e(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.G(a,new P.k9(p,q))
return p.a}if(!!u.$ib){t=q.dG(a)
p=q.b
if(t>=p.length)return H.e(p,t)
r=p[t]
if(r!=null)return r
return q.ie(a,t)}throw H.c(P.j4("structured clone of other type"))},
ie:function(a,b){var u,t=J.cp(a),s=t.gn(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.ct(t.j(a,u)))
return r}}
P.k9.prototype={
$2:function(a,b){this.a.a[a]=this.b.ct(b)},
$S:5}
P.f7.prototype={$ibl:1,
gdu:function(a){return this.a}}
P.kA.prototype={
$2:function(a,b){this.a[a]=b},
$S:5}
P.k8.prototype={}
P.h1.prototype={
gbf:function(){var u=this.b,t=H.as(u,"x",0),s=W.V
return new H.ht(new H.d4(u,H.n(new P.h2(),{func:1,ret:P.S,args:[t]}),[t]),H.n(new P.h3(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.h(c,"$iV")
u=this.gbf()
J.nC(u.b.$1(J.fp(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aC(this.gbf().a)},
j:function(a,b){var u=this.gbf()
return u.b.$1(J.fp(u.a,b))},
gT:function(a){var u=P.m0(this.gbf(),!1,W.V)
return new J.au(u,u.length,[H.r(u,0)])},
$ax:function(){return[W.V]},
$aj:function(){return[W.V]},
$ab:function(){return[W.V]}}
P.h2.prototype={
$1:function(a){return!!J.U(H.h(a,"$iE")).$iV},
$S:27}
P.h3.prototype={
$1:function(a){return H.A(H.h(a,"$iE"),"$iV")},
$S:34}
P.jX.prototype={
gcr:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.G(t)
return H.B(u+t,H.r(this,0))},
gdr:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.G(t)
return H.B(u+t,H.r(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.i(u.a)+", "+H.i(u.b)+") "+H.i(u.c)+" x "+H.i(u.d)},
t:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.U(b)
if(!!u.$ial){t=p.a
if(t==u.gbm(b)){s=p.b
if(s==u.gbq(b)){r=p.c
if(typeof t!=="number")return t.p()
if(typeof r!=="number")return H.G(r)
q=H.r(p,0)
if(H.B(t+r,q)===u.gcr(b)){t=p.d
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.G(t)
u=H.B(s+t,q)===u.gdr(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u,t=this,s=t.a,r=J.dr(s),q=t.b,p=J.dr(q),o=t.c
if(typeof s!=="number")return s.p()
if(typeof o!=="number")return H.G(o)
u=H.r(t,0)
o=C.e.gH(H.B(s+o,u))
s=t.d
if(typeof q!=="number")return q.p()
if(typeof s!=="number")return H.G(s)
u=C.e.gH(H.B(q+s,u))
return P.oH(P.jV(P.jV(P.jV(P.jV(0,r),p),o),u))}}
P.al.prototype={
gbm:function(a){return this.a},
gbq:function(a){return this.b},
gaF:function(a){return this.c},
gaC:function(a){return this.d}}
P.b7.prototype={$ib7:1}
P.hi.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ib7")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$ax:function(){return[P.b7]},
$ij:1,
$aj:function(){return[P.b7]},
$ib:1,
$ab:function(){return[P.b7]},
$aF:function(){return[P.b7]}}
P.b9.prototype={$ib9:1}
P.hZ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ib9")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$ax:function(){return[P.b9]},
$ij:1,
$aj:function(){return[P.b9]},
$ib:1,
$ab:function(){return[P.b9]},
$aF:function(){return[P.b9]}}
P.i5.prototype={
gn:function(a){return a.length}}
P.cS.prototype={$icS:1}
P.iC.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.J(c)
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$ax:function(){return[P.f]},
$ij:1,
$aj:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aF:function(){return[P.f]}}
P.q.prototype={
gc2:function(a){return new P.h1(a,new W.aq(a))},
ab:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aA])
C.a.h(p,W.mz(null))
C.a.h(p,W.mB())
C.a.h(p,new W.kb())
c=new W.fa(new W.e_(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).ig(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.aq(s)
q=p.gaG(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$iq:1}
P.bd.prototype={$ibd:1}
P.iS.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ibd")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$ax:function(){return[P.bd]},
$ij:1,
$aj:function(){return[P.bd]},
$ib:1,
$ab:function(){return[P.bd]},
$aF:function(){return[P.bd]}}
P.eC.prototype={}
P.eD.prototype={}
P.eN.prototype={}
P.eO.prototype={}
P.eZ.prototype={}
P.f_.prototype={}
P.f5.prototype={}
P.f6.prototype={}
P.R.prototype={$ij:1,
$aj:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]},
$ior:1}
P.fu.prototype={
gn:function(a){return a.length}}
P.fv.prototype={
j:function(a,b){return P.bs(a.get(H.J(b)))},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bs(t.value[1]))}},
ga3:function(a){var u=H.d([],[P.f])
this.G(a,new P.fw(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.H("Not supported"))},
$aad:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
P.fw.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.fx.prototype={
gn:function(a){return a.length}}
P.bX.prototype={}
P.i_.prototype={
gn:function(a){return a.length}}
P.eq.prototype={}
P.dv.prototype={$idv:1}
P.e3.prototype={$ie3:1}
P.ca.prototype={
j8:function(a,b,c,d,e,f,g){var u,t=J.U(g)
if(!!t.$ibl)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.pw(g))
return}if(!!t.$icH)t=!0
else t=!1
if(t){this.hL(a,b,c,d,e,f,g)
return}throw H.c(P.dt("Incorrect number or type of arguments"))},
hL:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a4:function(a,b,c){return a.uniform1f(b,c)},
bt:function(a,b,c){return a.uniform1i(b,c)},
U:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
jf:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
ef:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eg:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ica:1}
P.e6.prototype={$ie6:1}
P.ec.prototype={$iec:1}
P.ei.prototype={$iei:1}
P.iu.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return P.bs(a.item(b))},
k:function(a,b,c){H.h(c,"$iy")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$ax:function(){return[[P.y,,,]]},
$ij:1,
$aj:function(){return[[P.y,,,]]},
$ib:1,
$ab:function(){return[[P.y,,,]]},
$aF:function(){return[[P.y,,,]]}}
P.eV.prototype={}
P.eW.prototype={}
O.a6.prototype={
bz:function(a){var u=this
u.sfg(H.d([],[a]))
u.sd5(null)
u.sd2(null)
u.sd6(null)},
cw:function(a,b,c){var u=this,t=H.as(u,"a6",0)
H.n(b,{func:1,ret:P.S,args:[[P.j,t]]})
t={func:1,ret:-1,args:[P.m,[P.j,t]]}
H.n(a,t)
H.n(c,t)
u.sd5(b)
u.sd2(a)
u.sd6(c)},
ba:function(a,b){return this.cw(a,null,b)},
h6:function(a){var u
H.l(a,"$ij",[H.as(this,"a6",0)],"$aj")
u=this.b
if(u!=null)return u.$1(a)
return!0},
ft:function(a,b){var u
H.l(b,"$ij",[H.as(this,"a6",0)],"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.au(u,u.length,[H.r(u,0)])},
I:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.as(s,"a6",0)
H.B(b,r)
r=[r]
if(H.I(s.h6(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.ft(t,H.d([b],r))}},
sfg:function(a){this.a=H.l(a,"$ib",[H.as(this,"a6",0)],"$ab")},
sd5:function(a){this.b=H.n(a,{func:1,ret:P.S,args:[[P.j,H.as(this,"a6",0)]]})},
sd2:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.m,[P.j,H.as(this,"a6",0)]]})},
sd6:function(a){H.n(a,{func:1,ret:-1,args:[P.m,[P.j,H.as(this,"a6",0)]]})},
$ij:1}
O.cK.prototype={
gn:function(a){return this.a.length},
gw:function(){var u=this.b
return u==null?this.b=D.X():u},
aH:function(){var u=this.b
if(u!=null)u.K(null)},
ga1:function(a){var u=this.a
if(u.length>0)return C.a.gau(u)
else return V.dW()},
e4:function(a){var u=this.a
if(a==null)C.a.h(u,V.dW())
else C.a.h(u,a)
this.aH()},
cl:function(){var u=this.a
if(u.length>0){u.pop()
this.aH()}},
sbI:function(a){this.a=H.l(a,"$ib",[V.ap],"$ab")}}
E.fA.prototype={}
E.ao.prototype={
cM:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.au(u,u.length,[H.r(u,0)]);u.B();){t=u.d
if(t.f==null)t.cM()}},
sa8:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gw().L(0,s.gdY())
u=s.c
if(u!=null)u.gw().h(0,s.gdY())
t=new D.M("shape",r,s.c,[F.e7])
t.b=!0
s.ai(t)}},
sb7:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gw().L(0,s.ge_())
u=s.f
s.f=a
if(a!=null)a.gw().h(0,s.ge_())
s.cM()
t=new D.M("technique",u,s.f,[O.bN])
t.b=!0
s.ai(t)}},
saQ:function(a){var u,t,s=this
if(!J.Q(s.r,a)){u=s.r
if(u!=null)u.gw().L(0,s.gdW())
if(a!=null)a.gw().h(0,s.gdW())
s.r=a
t=new D.M("mover",u,a,[U.ak])
t.b=!0
s.ai(t)}},
aw:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aU(0,b,s):null
if(!J.Q(q,s.x)){u=s.x
s.x=q
t=new D.M("matrix",u,q,[V.ap])
t.b=!0
s.ai(t)}r=s.f
if(r!=null)r.aw(0,b)
for(r=s.y.a,r=new J.au(r,r.length,[H.r(r,0)]);r.B();)r.d.aw(0,b)},
aR:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga1(s))
else C.a.h(s.a,r.C(0,s.ga1(s)))
s.aH()
a.e5(t.f)
s=a.dy
u=(s&&C.a).gau(s)
if(u!=null&&t.d!=null)u.j2(a,t)
for(s=t.y.a,s=new J.au(s,s.length,[H.r(s,0)]);s.B();)s.d.aR(a)
a.e3()
a.dx.cl()},
gw:function(){var u=this.z
return u==null?this.z=D.X():u},
ai:function(a){var u=this.z
if(u!=null)u.K(a)},
a_:function(){return this.ai(null)},
dZ:function(a){H.h(a,"$iD")
this.e=null
this.ai(a)},
iQ:function(){return this.dZ(null)},
e0:function(a){this.ai(H.h(a,"$iD"))},
iR:function(){return this.e0(null)},
dX:function(a){this.ai(H.h(a,"$iD"))},
iP:function(){return this.dX(null)},
dV:function(a){this.ai(H.h(a,"$iD"))},
iM:function(){return this.dV(null)},
iL:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ij",[E.ao],"$aj")
for(u=b.length,t=this.gdU(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c0()
o.sag(null)
o.saK(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sag(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a_()},
iO:function(a,b){var u,t
H.l(b,"$ij",[E.ao],"$aj")
for(u=b.gT(b),t=this.gdU();u.B();)u.gJ(u).gw().L(0,t)
this.a_()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seB:function(a,b){this.y=H.l(b,"$ia6",[E.ao],"$aa6")},
$icM:1}
E.i9.prototype={
ex:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ay(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cK()
t=[V.ap]
u.sbI(H.d([],t))
u.b=null
u.gw().h(0,new E.ia(s))
s.cy=u
u=new O.cK()
u.sbI(H.d([],t))
u.b=null
u.gw().h(0,new E.ib(s))
s.db=u
u=new O.cK()
u.sbI(H.d([],t))
u.b=null
u.gw().h(0,new E.ic(s))
s.dx=u
s.shK(H.d([],[O.bN]))
u=s.dy;(u&&C.a).h(u,null)
s.shF(new H.a1([P.f,A.cT]))},
giZ:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga1(s)
u=t.db
u=t.z=s.C(0,u.ga1(u))
s=u}return s},
e5:function(a){var u=this.dy,t=a==null?(u&&C.a).gau(u):a;(u&&C.a).h(u,t)},
e3:function(){var u=this.dy
if(u.length>1)u.pop()},
shK:function(a){this.dy=H.l(a,"$ib",[O.bN],"$ab")},
shF:function(a){this.fr=H.l(a,"$iy",[P.f,A.cT],"$ay")}}
E.ia.prototype={
$1:function(a){var u
H.h(a,"$iD")
u=this.a
u.ch=u.z=null},
$S:10}
E.ib.prototype={
$1:function(a){var u
H.h(a,"$iD")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:10}
E.ic.prototype={
$1:function(a){var u
H.h(a,"$iD")
u=this.a
u.cx=u.ch=null},
$S:10}
E.ee.prototype={
cG:function(a){H.h(a,"$iD")
this.e8()},
cF:function(){return this.cG(null)},
gix:function(){var u,t=this,s=Date.now(),r=C.e.a6(P.lW(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ay(s,!1)
return u/r},
d9:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.C()
if(typeof r!=="number")return H.G(r)
u=C.c.ce(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.C()
t=C.c.ce(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.mj(C.o,s.gj4())}},
e8:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iL(this),{func:1,ret:-1,args:[P.ab]})
C.E.f5(u)
C.E.ht(u,W.mQ(t,P.ab))}},
j1:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.d9()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ay(r,!1)
s.y=P.lW(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aH()
r=s.db
C.a.sn(r.a,0)
r.aH()
r=s.dx
C.a.sn(r.a,0)
r.aH()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aR(p.e)}s=p.z
if(s!=null)s.K(null)}catch(q){u=H.aj(q)
t=H.cr(q)
P.lH("Error: "+H.i(u))
P.lH("Stack: "+H.i(t))
throw H.c(u)}}}
E.iL.prototype={
$1:function(a){var u
H.n3(a)
u=this.a
if(u.ch){u.ch=!1
u.j1()}},
$S:57}
Z.eo.prototype={$iq_:1}
Z.dw.prototype={
bX:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aj(s)
t=P.C('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.jv.prototype={$iq0:1}
Z.dx.prototype={
aP:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bX:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bX(a)},
je:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aR:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.f],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.at(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sfc:function(a){this.b=H.l(a,"$ib",[Z.bE],"$ab")},
$iq9:1}
Z.bE.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c7(this.c)+"'")+"]"}}
Z.bQ.prototype={
gcA:function(a){var u=this.a,t=(u&$.bw().a)!==0?3:0
if((u&$.bv().a)!==0)t+=3
if((u&$.bu().a)!==0)t+=3
if((u&$.bV().a)!==0)t+=2
if((u&$.bW().a)!==0)t+=3
if((u&$.dn().a)!==0)t+=3
if((u&$.dp().a)!==0)t+=4
if((u&$.cu().a)!==0)++t
return(u&$.bt().a)!==0?t+4:t},
i3:function(a){var u,t=$.bw(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bu()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bV()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bW()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cu()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bt()
if((s&t.a)!==0)if(u===a)return t
return $.np()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bQ))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.f]),t=this.a
if((t&$.bw().a)!==0)C.a.h(u,"Pos")
if((t&$.bv().a)!==0)C.a.h(u,"Norm")
if((t&$.bu().a)!==0)C.a.h(u,"Binm")
if((t&$.bV().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bW().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dn().a)!==0)C.a.h(u,"Clr3")
if((t&$.dp().a)!==0)C.a.h(u,"Clr4")
if((t&$.cu().a)!==0)C.a.h(u,"Weight")
if((t&$.bt().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fD.prototype={}
D.c0.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.D]}
H.n(b,u)
if(this.a==null)this.sag(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
L:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.D]})
u=s.a
u=u==null?null:C.a.S(u,b)
if(u===!0){u=s.a
t=(u&&C.a).L(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.S(u,b)
if(u===!0){u=s.b
t=(u&&C.a).L(u,b)||t}return t},
K:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.D()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.G(P.m0(u,!0,{func:1,ret:-1,args:[D.D]}),new D.fY(q))
u=r.b
if(u!=null){r.saK(H.d([],[{func:1,ret:-1,args:[D.D]}]))
C.a.G(u,new D.fZ(q))}return!0},
ip:function(){return this.K(null)},
aj:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.K(u)}}},
sag:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.D]}],"$ab")},
saK:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.D]}],"$ab")}}
D.fY.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.D]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.fZ.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.D]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.D.prototype={}
D.c3.prototype={}
D.c4.prototype={}
D.M.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.dy.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dy))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.dN.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dN))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.hh.prototype={
iW:function(a){this.d.h(0,a.a)
return!1},
iS:function(a){this.d.L(0,a.a)
return!1},
shm:function(a){this.d=H.l(a,"$imf",[P.m],"$amf")}}
X.dR.prototype={}
X.hp.prototype={
aW:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.C()
u=b.b
t=q.ch
if(typeof u!=="number")return u.C()
s=new V.a9(o.a+n*m,o.b+u*t)
t=q.a.gbi()
r=new X.bH(a,V.bK(),q.x,t,s)
r.b=!0
q.z=new P.ay(p,!1)
q.x=s
return r},
ck:function(a,b){this.r=a.a
return!1},
b6:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.em()
if(typeof u!=="number")return u.af()
this.r=(u&~t)>>>0
return!1},
b5:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.aW(a,b))
return!0},
iX:function(a){return!1},
fW:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dR(c,r.a.gbi(),b)
s.b=!0
t.K(s)
r.y=new P.ay(u,!1)
r.x=V.bK()}}
X.bG.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bG))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.I(this.b)?"Alt+":""
return u+(H.I(this.c)?"Shift+":"")}}
X.bH.prototype={}
X.hP.prototype={
bF:function(a,b,c){var u=this,t=new P.ay(Date.now(),!1),s=u.a.gbi(),r=new X.bH(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
ck:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.K(this.bF(a,b,!0))
return!0},
b6:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.em()
if(typeof t!=="number")return t.af()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.K(u.bF(a,b,!0))
return!0},
b5:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.bF(a,b,!1))
return!0},
iY:function(a,b){return!1}}
X.i4.prototype={}
X.eg.prototype={}
X.iP.prototype={
aW:function(a,b){var u,t,s,r,q=this
H.l(a,"$ib",[V.a9],"$ab")
u=new P.ay(Date.now(),!1)
t=a.length>0?a[0]:V.bK()
s=q.a.gbi()
r=new X.eg(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
iV:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.b
if(u==null)return!1
u.K(this.aW(a,!0))
return!0},
iT:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.c
if(u==null)return!1
u.K(this.aW(a,!0))
return!0},
iU:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.d
if(u==null)return!1
u.K(this.aW(a,!1))
return!0}}
X.el.prototype={
gbi:function(){var u=this.a,t=C.i.gds(u).c
t.toString
u=C.i.gds(u).d
u.toString
return V.md(0,0,t,u)},
cV:function(a){var u=a.keyCode,t=H.I(a.ctrlKey)||H.I(a.metaKey)
return new X.dN(u,new X.bG(t,a.altKey,a.shiftKey))},
aL:function(a){if(!H.I(a.ctrlKey))H.I(a.metaKey)
a.shiftKey},
bT:function(a){if(!H.I(a.ctrlKey))H.I(a.metaKey)
a.shiftKey},
aA:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.q()
u=t.top
if(typeof r!=="number")return r.q()
return new V.a9(s-q,r-u)},
aX:function(a){return new V.a3(a.movementX,a.movementY)},
bO:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.a9])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=C.c.ak(r.pageX)
C.c.ak(r.pageY)
p=o.left
C.c.ak(r.pageX)
C.a.h(n,new V.a9(q-p,C.c.ak(r.pageY)-o.top))}return n},
ay:function(a){var u=a.buttons,t=H.I(a.ctrlKey)||H.I(a.metaKey)
return new X.dy(u,new X.bG(t,a.altKey,a.shiftKey))},
bJ:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.q()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.q()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fQ:function(a){this.f=!0},
fD:function(a){this.f=!1},
fK:function(a){H.h(a,"$iae")
if(H.I(this.f)&&this.bJ(a))a.preventDefault()},
fU:function(a){var u
H.h(a,"$ib6")
if(!H.I(this.f))return
u=this.cV(a)
this.b.iW(u)},
fS:function(a){var u
H.h(a,"$ib6")
if(!H.I(this.f))return
u=this.cV(a)
this.b.iS(u)},
fY:function(a){var u,t,s,r,q=this
H.h(a,"$iae")
u=q.a
u.focus()
q.f=!0
q.aL(a)
if(H.I(q.x)){t=q.ay(a)
s=q.aX(a)
if(q.d.ck(t,s))a.preventDefault()
return}if(H.I(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ay(a)
r=q.aA(a)
if(q.c.ck(t,r))a.preventDefault()},
h1:function(a){var u,t,s,r=this
H.h(a,"$iae")
r.aL(a)
u=r.ay(a)
if(H.I(r.x)){t=r.aX(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(H.I(r.r))return
s=r.aA(a)
if(r.c.b6(u,s))a.preventDefault()},
fO:function(a){var u,t,s,r=this
H.h(a,"$iae")
if(!r.bJ(a)){r.aL(a)
u=r.ay(a)
if(H.I(r.x)){t=r.aX(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(H.I(r.r))return
s=r.aA(a)
if(r.c.b6(u,s))a.preventDefault()}},
h_:function(a){var u,t,s,r=this
H.h(a,"$iae")
r.aL(a)
u=r.ay(a)
if(H.I(r.x)){t=r.aX(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(H.I(r.r))return
s=r.aA(a)
if(r.c.b5(u,s))a.preventDefault()},
fM:function(a){var u,t,s,r=this
H.h(a,"$iae")
if(!r.bJ(a)){r.aL(a)
u=r.ay(a)
if(H.I(r.x)){t=r.aX(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(H.I(r.r))return
s=r.aA(a)
if(r.c.b5(u,s))a.preventDefault()}},
h3:function(a){var u,t,s=this
H.h(a,"$ibf")
s.aL(a)
u=new V.a3((a&&C.D).gii(a),C.D.gij(a)).u(0,180)
if(H.I(s.x)){if(s.d.iX(u))a.preventDefault()
return}if(H.I(s.r))return
t=s.aA(a)
if(s.c.iY(u,t))a.preventDefault()},
h5:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ay(s.y)
t=s.aA(s.y)
s.d.fW(u,t,r)}},
hi:function(a){var u,t=this
H.h(a,"$iaZ")
t.a.focus()
t.f=!0
t.bT(a)
u=t.bO(a)
if(t.e.iV(u))a.preventDefault()},
he:function(a){var u
H.h(a,"$iaZ")
this.bT(a)
u=this.bO(a)
if(this.e.iT(u))a.preventDefault()},
hg:function(a){var u
H.h(a,"$iaZ")
this.bT(a)
u=this.bO(a)
if(this.e.iU(u))a.preventDefault()},
sf6:function(a){this.z=H.l(a,"$ib",[[P.cV,P.P]],"$ab")}}
D.dD.prototype={$iac:1,$icM:1}
D.ac.prototype={$icM:1}
D.dO.prototype={
gw:function(){var u=this.x
return u==null?this.x=D.X():u},
Z:function(a){var u=this.x
if(u!=null)u.K(a)},
d4:function(a){var u
H.h(a,"$iD")
u=this.y
if(u!=null)u.K(a)},
fV:function(){return this.d4(null)},
h8:function(a){var u,t,s
H.l(a,"$ij",[D.ac],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(s==null||this.eD(s))return!1}return!0},
fv:function(a,b){var u,t,s,r,q,p,o,n=D.ac
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gd3(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=H.h(b[q],"$iac")
if(p instanceof D.bM)C.a.h(this.r,p)
o=p.go
if(o==null){o=new D.c0()
o.sag(null)
o.saK(null)
o.c=null
o.d=0
p.go=o}H.n(t,s)
if(o.a==null)o.sag(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.c3([n])
n.b=!0
this.Z(n)},
hc:function(a,b){var u,t,s,r=D.ac
H.l(b,"$ij",[r],"$aj")
for(u=b.gT(b),t=this.gd3();u.B();){s=u.gJ(u)
C.a.L(this.e,s)
s.gw().L(0,t)}r=new D.c4([r])
r.b=!0
this.Z(r)},
eD:function(a){var u=C.a.S(this.r,a)
return u},
seE:function(a){this.e=H.l(a,"$ib",[D.dD],"$ab")},
shj:function(a){this.f=H.l(a,"$ib",[D.e2],"$ab")},
seF:function(a){this.r=H.l(a,"$ib",[D.bM],"$ab")},
$aj:function(){return[D.ac]},
$aa6:function(){return[D.ac]}}
D.e2.prototype={$iac:1,$icM:1}
D.bM.prototype={
gw:function(){var u=this.go
return u==null?this.go=D.X():u},
Z:function(a){var u
H.h(a,"$iD")
u=this.go
if(u!=null)u.K(a)},
fE:function(){return this.Z(null)},
gah:function(){var u=this.x!=null?1:0
return u+4+8},
$iac:1,
$icM:1}
V.a5.prototype={
p:function(a,b){var u=C.c.p(this.a,b.gco()),t=C.c.p(this.b,b.gbv()),s=C.c.p(this.c,b.gbZ())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a5(u,t,s)},
q:function(a,b){var u=C.c.q(this.a,b.gco()),t=C.c.q(this.b,b.gbv()),s=C.c.q(this.c,b.gbZ())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a5(u,t,s)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
V.aD.prototype={
p:function(a,b){var u=this,t=C.c.p(u.a,b.gco()),s=C.c.p(u.b,b.gbv()),r=C.c.p(u.c,b.gbZ()),q=C.c.p(u.d,b.gi1(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aD(t,s,r,q)},
q:function(a,b){var u=this,t=C.c.q(u.a,b.gco()),s=C.c.q(u.b,b.gbv()),r=C.c.q(u.c,b.gbZ()),q=C.c.q(u.d,b.gi1(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aD(t,s,r,q)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aD))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.T(u.a,3,0)+", "+V.T(u.b,3,0)+", "+V.T(u.c,3,0)+", "+V.T(u.d,3,0)+"]"}}
V.fX.prototype={}
V.dV.prototype={
ae:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.p])
return t},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dV))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.p],o=V.co(H.d([q.a,q.d,q.r],p),3,0),n=V.co(H.d([q.b,q.e,q.x],p),3,0),m=V.co(H.d([q.c,q.f,q.y],p),3,0)
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
V.ap.prototype={
ae:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.p])
return t},
dO:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.L().a)return V.dW()
u=1/b1
t=-n
s=-a0
return V.bp((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
C:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.bp(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bs:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.K(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
br:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a2(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ap))return!1
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
i:function(a){return this.N()},
F:function(a){var u,t,s,r,q,p=this,o=[P.p],n=V.co(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.co(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.co(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.co(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
V.a9.prototype={
p:function(a,b){return new V.a9(this.a+b.a,this.b+b.b)},
q:function(a,b){return new V.a9(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+"]"}}
V.a2.prototype={
p:function(a,b){return new V.a2(this.a+b.a,this.b+b.b,this.c+b.c)},
q:function(a,b){return new V.a2(this.a-b.a,this.b-b.b,this.c-b.c)},
C:function(a,b){return new V.a2(this.a*b,this.b*b,this.c*b)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
V.ba.prototype={
p:function(a,b){var u=this
return new V.ba(C.c.p(u.a,b.gjh(b)),C.c.p(u.b,b.gji(b)),C.c.p(u.c,b.gjj(b)),C.c.p(u.d,b.gjg(b)))},
q:function(a,b){var u=this
return new V.ba(C.c.q(u.a,b.gjh(b)),C.c.q(u.b,b.gji(b)),C.c.q(u.c,b.gjj(b)),C.c.q(u.d,b.gjg(b)))},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ba))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.T(u.a,3,0)+", "+V.T(u.b,3,0)+", "+V.T(u.c,3,0)+", "+V.T(u.d,3,0)+"]"}}
V.e5.prototype={
gav:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e5))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.T(u.a,3,0)+", "+V.T(u.b,3,0)+", "+V.T(u.c,3,0)+", "+V.T(u.d,3,0)+"]"}}
V.a3.prototype={
b2:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.C()
if(typeof r!=="number")return H.G(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.G(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a,s=b.gc5(b)
if(typeof t!=="number")return t.p()
s=C.c.p(t,s)
t=this.b
u=b.gc6(b)
if(typeof t!=="number")return t.p()
return new V.a3(s,C.c.p(t,u))},
q:function(a,b){var u,t=this.a,s=b.gc5(b)
if(typeof t!=="number")return t.q()
s=C.c.q(t,s)
t=this.b
u=b.gc6(b)
if(typeof t!=="number")return t.q()
return new V.a3(s,C.c.q(t,u))},
C:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.C()
u=this.b
if(typeof u!=="number")return u.C()
return new V.a3(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.L().a){u=$.mr
return u==null?$.mr=new V.a3(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.a3(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
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
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+"]"}}
V.K.prototype={
b2:function(a){return Math.sqrt(this.E(this))},
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cj:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.K(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aB:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.K(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
q:function(a,b){return new V.K(this.a-b.a,this.b-b.b,this.c-b.c)},
R:function(a){return new V.K(-this.a,-this.b,-this.c)},
C:function(a,b){return new V.K(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if(Math.abs(b-0)<$.L().a)return V.d3()
return new V.K(this.a/b,this.b/b,this.c/b)},
dP:function(){var u=$.L().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
V.br.prototype={
b2:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u=this
return new V.br(C.e.p(u.a,b.gc5(b)),C.c.p(u.b,b.gc6(b)),C.c.p(u.c,b.gio()),C.e.p(u.d,b.gim()))},
q:function(a,b){var u=this
return new V.br(C.e.q(u.a,b.gc5(b)),C.c.q(u.b,b.gc6(b)),C.c.q(u.c,b.gio()),C.e.q(u.d,b.gim()))},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.br))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.T(u.a,3,0)+", "+V.T(u.b,3,0)+", "+V.T(u.c,3,0)+", "+V.T(u.d,3,0)+"]"}}
U.fE.prototype={
bA:function(a){var u=V.pZ(a,this.c,this.b)
return u},
gw:function(){var u=this.y
return u==null?this.y=D.X():u},
X:function(a){var u=this.y
if(u!=null)u.K(a)},
sej:function(a,b){},
sdQ:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.L().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bA(u)}s=new D.M("maximumLocation",s,t.b,[P.p])
s.b=!0
t.X(s)}},
sdS:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.L().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bA(u)}s=new D.M("minimumLocation",s,t.c,[P.p])
s.b=!0
t.X(s)}},
sa0:function(a,b){var u,t=this
b=t.bA(b)
u=t.d
if(!(Math.abs(u-b)<$.L().a)){t.d=b
u=new D.M("location",u,b,[P.p])
u.b=!0
t.X(u)}},
sdR:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.L().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.M("maximumVelocity",r,a,[P.p])
r.b=!0
s.X(r)}},
sY:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.L().a)){u.f=a
t=new D.M("velocity",t,a,[P.p])
t.b=!0
u.X(t)}},
sdt:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.L().a)){this.x=a
u=new D.M("dampening",u,a,[P.p])
u.b=!0
this.X(u)}},
aw:function(a,b){var u,t,s,r=this,q=r.f,p=$.L().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa0(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.L().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sY(u)}}}
U.dA.prototype={
gw:function(){var u=this.b
return u==null?this.b=D.X():u},
aU:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dA))return!1
return J.Q(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")}}
U.cG.prototype={
gw:function(){var u=this.e
return u==null?this.e=D.X():u},
X:function(a){var u
H.h(a,"$iD")
u=this.e
if(u!=null)u.K(a)},
ao:function(){return this.X(null)},
eH:function(a,b){var u,t,s,r,q,p,o,n=U.ak
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gbd(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gw()
o.toString
H.n(t,s)
if(o.a==null)o.sag(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c3([n])
n.b=!0
this.X(n)},
ha:function(a,b){var u,t,s=U.ak
H.l(b,"$ij",[s],"$aj")
for(u=b.gT(b),t=this.gbd();u.B();)u.gJ(u).gw().L(0,t)
s=new D.c4([s])
s.b=!0
this.X(s)},
aU:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.P()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.au(r,r.length,[H.r(r,0)]),u=null;r.B();){q=r.d
if(q!=null){t=q.aU(0,b,c)
if(t!=null)u=u==null?t:t.C(0,u)}}s.f=u==null?V.dW():u
r=s.e
if(r!=null)r.aj(0)}return s.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cG))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.Q(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.ak]},
$aa6:function(){return[U.ak]},
$iak:1}
U.ak.prototype={}
U.em.prototype={
gw:function(){var u=this.fx
return u==null?this.fx=D.X():u},
X:function(a){var u
H.h(a,"$iD")
u=this.fx
if(u!=null)u.K(a)},
ao:function(){return this.X(null)},
i4:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.X():t
u.h(0,s.gfm())
u=s.a.c
t=u.d
u=t==null?u.d=D.X():t
u.h(0,s.gfo())
u=s.a.c
t=u.c
u=t==null?u.c=D.X():t
u.h(0,s.gfq())
u=s.a.d
t=u.f
u=t==null?u.f=D.X():t
u.h(0,s.gfh())
u=s.a.d
t=u.d
u=t==null?u.d=D.X():t
u.h(0,s.gfj())
u=s.a.e
t=u.b
u=t==null?u.b=D.X():t
u.h(0,s.ghR())
u=s.a.e
t=u.d
u=t==null?u.d=D.X():t
u.h(0,s.ghP())
u=s.a.e
t=u.c
u=t==null?u.c=D.X():t
u.h(0,s.ghN())
return!0},
aq:function(a){var u=a.a,t=a.b
if(H.I(this.f)){if(typeof u!=="number")return u.R()
u=-u}if(H.I(this.r)){if(typeof t!=="number")return t.R()
t=-t}return new V.a3(u,t)},
fn:function(a){var u=this
a=H.A(H.h(a,"$iD"),"$ibH")
if(!J.Q(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fp:function(a){var u,t,s,r,q,p,o,n=this
a=H.A(H.h(a,"$iD"),"$ibH")
if(!H.I(n.cx))return
if(H.I(n.ch)){u=a.d.q(0,a.y)
u=new V.a3(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
n.ch=!1}if(H.I(n.e)){u=a.c
t=a.d.q(0,a.y)
u=n.aq(new V.a3(t.a,t.b).C(0,2).u(0,u.gav()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.R()
s=n.y
if(typeof s!=="number")return H.G(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.R()
t=n.x
if(typeof t!=="number")return H.G(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.q(0,a.y)
r=n.aq(new V.a3(s.a,s.b).C(0,2).u(0,u.gav()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.G(p)
o=n.cy
if(typeof o!=="number")return H.G(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.G(q)
s=n.db
if(typeof s!=="number")return H.G(s)
o.sa0(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.q(0,a.z)
n.dx=n.aq(new V.a3(t.a,t.b).C(0,2).u(0,u.gav()))}n.ao()},
fs:function(a){var u,t,s,r=this
H.h(a,"$iD")
if(!H.I(r.cx))return
r.cx=!1
if(H.I(r.ch))return
u=r.dx
if(u.E(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.R()
s=r.y
if(typeof s!=="number")return H.G(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.R()
u=r.x
if(typeof u!=="number")return H.G(u)
s.sY(-t*10*u)
r.ao()}},
fi:function(a){var u=this
if(H.A(H.h(a,"$iD"),"$idR").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fk:function(a){var u,t,s,r,q,p,o,n=this
a=H.A(H.h(a,"$iD"),"$ibH")
if(!J.Q(n.d,a.x.b))return
u=a.c
t=a.d
s=t.q(0,a.y)
r=n.aq(new V.a3(s.a,s.b).C(0,2).u(0,u.gav()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.G(p)
o=n.cy
if(typeof o!=="number")return H.G(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.G(q)
s=n.db
if(typeof s!=="number")return H.G(s)
o.sa0(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.q(0,a.z)
n.dx=n.aq(new V.a3(t.a,t.b).C(0,2).u(0,u.gav()))
n.ao()},
hS:function(a){var u=this
H.h(a,"$iD")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hQ:function(a){var u,t,s,r,q,p,o,n=this
a=H.A(H.h(a,"$iD"),"$ieg")
if(!H.I(n.cx))return
if(H.I(n.ch)){u=a.d.q(0,a.y)
u=new V.a3(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
n.ch=!1}if(H.I(n.e)){u=a.c
t=a.d.q(0,a.y)
u=n.aq(new V.a3(t.a,t.b).C(0,2).u(0,u.gav()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.R()
s=n.y
if(typeof s!=="number")return H.G(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.R()
t=n.x
if(typeof t!=="number")return H.G(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.q(0,a.y)
r=n.aq(new V.a3(s.a,s.b).C(0,2).u(0,u.gav()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.G(p)
o=n.cy
if(typeof o!=="number")return H.G(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.G(q)
s=n.db
if(typeof s!=="number")return H.G(s)
o.sa0(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.q(0,a.z)
n.dx=n.aq(new V.a3(t.a,t.b).C(0,2).u(0,u.gav()))}n.ao()},
hO:function(a){var u,t,s,r=this
H.h(a,"$iD")
if(!H.I(r.cx))return
r.cx=!1
if(H.I(r.ch))return
u=r.dx
if(u.E(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.R()
s=r.y
if(typeof s!=="number")return H.G(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.R()
u=r.x
if(typeof u!=="number")return H.G(u)
s.sY(-t*10*u)
r.ao()}},
aU:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.P()
if(q<p){r.dy=p
u=b.y
r.c.aw(0,u)
r.b.aw(0,u)
q=V.m2(r.b.d)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.C(0,V.bp(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iak:1}
M.dG.prototype={
ax:function(a){var u
H.h(a,"$iD")
u=this.y
if(u!=null)u.K(a)},
eI:function(){return this.ax(null)},
fG:function(a,b){var u,t,s,r,q,p,o,n=E.ao
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gap(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c0()
o.sag(null)
o.saK(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sag(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c3([n])
n.b=!0
this.ax(n)},
fI:function(a,b){var u,t,s=E.ao
H.l(b,"$ij",[s],"$aj")
for(u=b.gT(b),t=this.gap();u.B();)u.gJ(u).gw().L(0,t)
s=new D.c4([s])
s.b=!0
this.ax(s)},
sb7:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gw().L(0,t.gap())
u=t.d
t.d=a
if(a!=null)a.gw().h(0,t.gap())
s=new D.M("technique",u,t.d,[O.bN])
s.b=!0
t.ax(s)}},
gw:function(){var u=this.y
return u==null?this.y=D.X():u},
aR:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.e5(a1.d)
u=a1.c
u.toString
t=a2.a
t.bindFramebuffer(36160,null)
t.enable(2884)
t.enable(2929)
t.depthFunc(513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.G(s)
o=C.c.ak(p*s)
p=q.b
if(typeof r!=="number")return H.G(r)
n=C.c.ak(p*r)
p=C.c.ak(q.c*s)
a2.c=p
q=C.c.ak(q.d*r)
a2.d=q
t.viewport(o,n,p,q)
t.clearDepth(u.c)
u=u.a
t.clearColor(u.a,u.b,u.c,u.d)
t.clear(16640)
u=a1.b
t=a2.c
q=a2.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.bp(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.e4(i)
t=$.m8
if(t==null){t=V.ma()
q=V.mv()
p=$.ms
if(p==null)p=$.ms=new V.K(0,0,-1)
h=p.u(0,Math.sqrt(p.E(p)))
q=q.aB(h)
g=q.u(0,Math.sqrt(q.E(q)))
f=h.aB(g)
e=new V.K(t.a,t.b,t.c)
d=g.R(0).E(e)
c=f.R(0).E(e)
b=h.R(0).E(e)
t=V.bp(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.m8=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.aU(0,a2,u)
if(a0!=null)a=a0.C(0,a)}a2.db.e4(a)
u=a1.d
if(u!=null)u.aw(0,a2)
for(u=a1.e.a,u=new J.au(u,u.length,[H.r(u,0)]);u.B();)u.d.aw(0,a2)
for(u=a1.e.a,u=new J.au(u,u.length,[H.r(u,0)]);u.B();)u.d.aR(a2)
a1.b.toString
a2.cy.cl()
a2.db.cl()
a1.c.toString
a2.e3()},
seY:function(a,b){this.e=H.l(b,"$ia6",[E.ao],"$aa6")},
$iq6:1}
A.du.prototype={}
A.ft.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iq:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
il:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.an.prototype={
gal:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
t:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.an))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.hw.prototype={
ew:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.ag("")
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
A.pe(c3,u)
A.pg(c3,u)
A.pf(c3,u)
A.pi(c3,u)
A.pj(c3,u)
A.ph(c3,u)
A.pk(c3,u)
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
m=A.pd(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cW(n,35633)
b8.f=b8.cW(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.I(H.lx(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.z(P.C("Failed to link shader: "+H.i(l)))}b8.hC()
b8.hE()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.A(b8.y.V(0,"invViewMat"),"$iaB")
if(t)b8.dy=H.A(b8.y.V(0,"objMat"),"$iaB")
if(r)b8.fr=H.A(b8.y.V(0,"viewObjMat"),"$iaB")
b8.fy=H.A(b8.y.V(0,"projViewObjMat"),"$iaB")
if(c3.ry)b8.k1=H.A(b8.y.V(0,"txt2DMat"),"$id1")
if(c3.x1)b8.k2=H.A(b8.y.V(0,"txtCubeMat"),"$iaB")
if(c3.x2)b8.k3=H.A(b8.y.V(0,"colorMat"),"$iaB")
b8.seU(H.d([],[A.aB]))
t=c3.y2
if(t>0){b8.k4=H.h(b8.y.V(0,"bendMatCount"),"$iaL")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.z(P.C(c0+q+c1));(s&&C.a).h(s,H.A(j,"$iaB"))}}if(c3.a.a)b8.r2=H.A(b8.y.V(0,"emissionClr"),"$ia_")
if(c3.b.a)b8.x1=H.A(b8.y.V(0,"ambientClr"),"$ia_")
if(c3.c.a)b8.y2=H.A(b8.y.V(0,"diffuseClr"),"$ia_")
if(c3.d.a)b8.dw=H.A(b8.y.V(0,"invDiffuseClr"),"$ia_")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.dA=H.A(b8.y.V(0,"shininess"),"$iah")
if(t)b8.dz=H.A(b8.y.V(0,"specularClr"),"$ia_")}if(c3.cy){b8.dB=H.A(b8.y.V(0,"envSampler"),"$icf")
if(c3.r.a)b8.dC=H.A(b8.y.V(0,"reflectClr"),"$ia_")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.dD=H.A(b8.y.V(0,"refraction"),"$iah")
if(t)b8.dE=H.A(b8.y.V(0,"refractClr"),"$ia_")}}if(c3.y.a)b8.dF=H.A(b8.y.V(0,"alpha"),"$iah")
t=P.m
s=[t,A.aL]
b8.sf3(new H.a1(s))
b8.sf4(new H.a1([t,[P.b,A.cc]]))
b8.shk(new H.a1(s))
b8.shl(new H.a1([t,[P.b,A.cd]]))
b8.shH(new H.a1(s))
b8.shI(new H.a1([t,[P.b,A.cg]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.cc],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.af()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.j(0,d)
if(j==null)H.z(P.C(c0+d+c1))
H.A(j,"$ia_")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.j(0,d)
if(c==null)H.z(P.C(c0+d+c1))
H.A(c,"$ia_")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.j(0,d)
if(b==null)H.z(P.C(c0+d+c1))
H.A(b,"$ia_")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.j(0,d)
if(j==null)H.z(P.C(c0+d+c1))
H.A(j,"$ia_")
o=b8.y
d=f+"s["+k+"].color"
c=o.j(0,d)
if(c==null)H.z(P.C(c0+d+c1))
H.A(c,"$ia_")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.j(0,o)
if(b==null)H.z(P.C(c0+o+c1))
H.A(b,"$ice")
a2=b}else a2=b9
C.a.h(e,new A.cc(a1,a0,a,j,c,a2))}b8.c8.k(0,g,e)
q=b8.c7
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.z(P.C(c0+o+c1))
q.k(0,g,H.h(j,"$iaL"))}for(t=c3.Q,s=t.length,r=[A.cd],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.j(0,o)
if(j==null)H.z(P.C(c0+o+c1))
H.A(j,"$ia_")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.j(0,o)
if(c==null)H.z(P.C(c0+o+c1))
H.A(c,"$ia_")
p=b8.y
o=f+"s["+k+"].color"
b=p.j(0,o)
if(b==null)H.z(P.C(c0+o+c1))
H.A(b,"$ia_")
if(typeof g!=="number")return g.af()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.z(P.C(c0+o+c1))
H.A(a3,"$id1")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.z(P.C(c0+o+c1))
H.A(a3,"$icf")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.z(P.C(c0+o+c1))
H.A(a3,"$icf")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.z(P.C(c0+o+c1))
H.A(a5,"$id0")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.j(0,o)
if(a3==null)H.z(P.C(c0+o+c1))
H.A(a3,"$iah")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.j(0,o)
if(a5==null)H.z(P.C(c0+o+c1))
H.A(a5,"$iah")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.j(0,o)
if(a8==null)H.z(P.C(c0+o+c1))
H.A(a8,"$iah")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}C.a.h(e,new A.cd(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.ca.k(0,g,e)
q=b8.c9
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.z(P.C(c0+o+c1))
q.k(0,g,H.h(j,"$iaL"))}for(t=c3.ch,s=t.length,r=[A.cg],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.j(0,o)
if(j==null)H.z(P.C(c0+o+c1))
H.A(j,"$ia_")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.j(0,o)
if(c==null)H.z(P.C(c0+o+c1))
H.A(c,"$ia_")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.j(0,o)
if(b==null)H.z(P.C(c0+o+c1))
H.A(b,"$ia_")
p=b8.y
o=f+"s["+k+"].color"
a3=p.j(0,o)
if(a3==null)H.z(P.C(c0+o+c1))
H.A(a3,"$ia_")
if(typeof g!=="number")return g.af()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.j(0,o)
if(a5==null)H.z(P.C(c0+o+c1))
H.A(a5,"$ia_")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.j(0,o)
if(a8==null)H.z(P.C(c0+o+c1))
H.A(a8,"$ia_")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.j(0,o)
if(b2==null)H.z(P.C(c0+o+c1))
H.A(b2,"$iah")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.j(0,o)
if(b3==null)H.z(P.C(c0+o+c1))
H.A(b3,"$iah")
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
H.A(a5,"$id0")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.j(0,d)
if(a5==null)H.z(P.C(c0+d+c1))
H.A(a5,"$iah")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.j(0,d)
if(a8==null)H.z(P.C(c0+d+c1))
H.A(a8,"$iah")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.j(0,d)
if(a5==null)H.z(P.C(c0+d+c1))
H.A(a5,"$iah")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.j(0,d)
if(a8==null)H.z(P.C(c0+d+c1))
H.A(a8,"$iah")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.j(0,d)
if(b2==null)H.z(P.C(c0+d+c1))
H.A(b2,"$iah")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.j(0,d)
if(a5==null)H.z(P.C(c0+d+c1))
H.A(a5,"$ice")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.z(P.C(c0+o+c1))
H.A(a5,"$ice")
a6=a5}else a6=b9
C.a.h(e,new A.cg(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.cc.k(0,g,e)
q=b8.cb
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.z(P.C(c0+o+c1))
q.k(0,g,H.h(j,"$iaL"))}}},
hA:function(a,b){},
seU:function(a){this.r1=H.l(a,"$ib",[A.aB],"$ab")},
sf3:function(a){this.c7=H.l(a,"$iy",[P.m,A.aL],"$ay")},
sf4:function(a){this.c8=H.l(a,"$iy",[P.m,[P.b,A.cc]],"$ay")},
shk:function(a){this.c9=H.l(a,"$iy",[P.m,A.aL],"$ay")},
shl:function(a){this.ca=H.l(a,"$iy",[P.m,[P.b,A.cd]],"$ay")},
shH:function(a){this.cb=H.l(a,"$iy",[P.m,A.aL],"$ay")},
shI:function(a){this.cc=H.l(a,"$iy",[P.m,[P.b,A.cg]],"$ay")}}
A.aE.prototype={
i:function(a){return"dirLight"+H.i(this.a)}}
A.aH.prototype={
i:function(a){return"pointLight"+H.i(this.a)}}
A.aI.prototype={
i:function(a){return"spotLight"+H.i(this.a)}}
A.hz.prototype={
i:function(a){return this.b1}}
A.cc.prototype={}
A.cd.prototype={}
A.cg.prototype={}
A.cT.prototype={
ez:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cW:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.I(H.lx(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.C("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
hC:function(){var u,t,s,r=this,q=H.d([],[A.du]),p=r.a,o=H.a4(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.G(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.du(p,t.name,s))}r.x=new A.ft(q)},
hE:function(){var u,t,s,r=this,q=H.d([],[A.eh]),p=r.a,o=H.a4(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.G(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.ih(t.type,t.size,t.name,s))}r.y=new A.j1(q)},
aJ:function(a,b,c){var u=this.a
if(a===1)return new A.aL(u,b,c)
else return A.ll(u,this.r,b,a,c)},
f0:function(a,b,c){var u=this.a
if(a===1)return new A.ce(u,b,c)
else return A.ll(u,this.r,b,a,c)},
f1:function(a,b,c){var u=this.a
if(a===1)return new A.cf(u,b,c)
else return A.ll(u,this.r,b,a,c)},
bh:function(a,b){return new P.ex(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
ih:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aJ(b,c,d)
case 5121:return u.aJ(b,c,d)
case 5122:return u.aJ(b,c,d)
case 5123:return u.aJ(b,c,d)
case 5124:return u.aJ(b,c,d)
case 5125:return u.aJ(b,c,d)
case 5126:return new A.ah(u.a,c,d)
case 35664:return new A.iY(u.a,c,d)
case 35665:return new A.a_(u.a,c,d)
case 35666:return new A.d0(u.a,c,d)
case 35667:return new A.iZ(u.a,c,d)
case 35668:return new A.j_(u.a,c,d)
case 35669:return new A.j0(u.a,c,d)
case 35674:return new A.j2(u.a,c,d)
case 35675:return new A.d1(u.a,c,d)
case 35676:return new A.aB(u.a,c,d)
case 35678:return u.f0(b,c,d)
case 35680:return u.f1(b,c,d)
case 35670:throw H.c(u.bh("BOOL",c))
case 35671:throw H.c(u.bh("BOOL_VEC2",c))
case 35672:throw H.c(u.bh("BOOL_VEC3",c))
case 35673:throw H.c(u.bh("BOOL_VEC4",c))
default:throw H.c(P.C("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.eh.prototype={}
A.j1.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
V:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.C("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.N()},
N:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aL.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.iZ.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.j_.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.j0.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.iX.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
shU:function(a){H.l(a,"$ib",[P.m],"$ab")}}
A.ah.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.iY.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.a_.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.d0.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.j2.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.d1.prototype={
an:function(a){var u=new Float32Array(H.cj(H.l(a,"$ib",[P.p],"$ab")))
C.d.ef(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.aB.prototype={
an:function(a){var u=new Float32Array(H.cj(H.l(a,"$ib",[P.p],"$ab")))
C.d.eg(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.ce.prototype={
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.cf.prototype={
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.kp.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cj(s.b,b).cj(s.d.cj(s.c,b),c)
a.sa0(0,new V.a2(r.a,r.b,r.c))
a.seb(r.u(0,Math.sqrt(r.E(r))))
s=1-b
u=1-c
a.sdn(new V.ba(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:7}
F.kB.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:21}
F.kD.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.G(p)
s=-s*p
u=r*p
a.sa0(0,new V.a2(s,u,q))
u=new V.K(s,u,q)
a.seb(u.u(0,Math.sqrt(u.E(u))))
a.sdn(new V.ba(1-c,2+c,-1,-1))},
$S:7}
F.kE.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:20}
F.kF.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:20}
F.kY.prototype={
$2:function(a,b){return 0},
$S:21}
F.kZ.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.G(s)
u=a.f
t=new V.K(u.a,u.b,u.c)
s=t.u(0,Math.sqrt(t.E(t))).C(0,this.b+s)
a.sa0(0,new V.a2(s.a,s.b,s.c))},
$S:7}
F.l0.prototype={
$1:function(a){return new V.a2(Math.cos(a),Math.sin(a),0)},
$S:17}
F.kM.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.a2(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:17}
F.kC.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lM(n.$1(o),m)
m=J.nv(J.lM(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.K(m.a,m.b,m.c)
u=m.u(0,Math.sqrt(m.E(m)))
n=$.mt
if(n==null){n=new V.K(1,0,0)
$.mt=n
t=n}else t=n
n=u.aB(!J.Q(u,t)?V.mw():t)
s=n.u(0,Math.sqrt(n.E(n)))
n=s.aB(u)
t=n.u(0,Math.sqrt(n.E(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.C(0,n*m)
m=s.C(0,q*m)
a.sa0(0,J.nu(l,new V.a2(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:7}
F.a8.prototype={
b_:function(){var u=this
if(!u.gb0()){C.a.L(u.a.a.d.b,u)
u.a.a.a_()}u.bQ()
u.bR()
u.hq()},
bU:function(a){this.a=a
C.a.h(a.d.b,this)},
bV:function(a){this.b=a
C.a.h(a.d.c,this)},
hB:function(a){this.c=a
C.a.h(a.d.d,this)},
bQ:function(){var u=this.a
if(u!=null){C.a.L(u.d.b,this)
this.a=null}},
bR:function(){var u=this.b
if(u!=null){C.a.L(u.d.c,this)
this.b=null}},
hq:function(){var u=this.c
if(u!=null){C.a.L(u.d.d,this)
this.c=null}},
gb0:function(){return this.a==null||this.b==null||this.c==null},
eT:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d3()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.dP())return
return s.u(0,Math.sqrt(s.E(s)))},
eX:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.q(0,q)
r=new V.K(r.a,r.b,r.c)
s=r.u(0,Math.sqrt(r.E(r)))
r=t.q(0,q)
r=new V.K(r.a,r.b,r.c)
r=s.aB(r.u(0,Math.sqrt(r.E(r))))
return r.u(0,Math.sqrt(r.E(r)))},
c1:function(){var u,t=this
if(t.d!=null)return!0
u=t.eT()
if(u==null){u=t.eX()
if(u==null)return!1}t.d=u
t.a.a.a_()
return!0},
eS:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d3()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.dP())return
return s.u(0,Math.sqrt(s.E(s)))},
eW:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.L().a){l=d.q(0,g)
l=new V.K(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.E(l)))
if(s.a-t.a<0)q=q.R(0)}else{p=(l-u.b)/r
l=d.q(0,g).C(0,p).p(0,g).q(0,j)
l=new V.K(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.E(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.R(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.E(l)))
l=o.aB(q)
l=l.u(0,Math.sqrt(l.E(l))).aB(o)
q=l.u(0,Math.sqrt(l.E(l)))}return q},
c_:function(){var u,t=this
if(t.e!=null)return!0
u=t.eS()
if(u==null){u=t.eW()
if(u==null)return!1}t.e=u
t.a.a.a_()
return!0},
gi9:function(a){var u=this
if(J.Q(u.a,u.b))return!0
if(J.Q(u.b,u.c))return!0
if(J.Q(u.c,u.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){var u,t,s=this
if(s.gb0())return a+"disposed"
u=a+C.b.ad(J.at(s.a.e),0)+", "+C.b.ad(J.at(s.b.e),0)+", "+C.b.ad(J.at(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
N:function(){return this.F("")}}
F.h_.prototype={}
F.ir.prototype={
b3:function(a,b,c){var u,t=b.a
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
F.bo.prototype={
b_:function(){var u=this
if(!u.gb0()){C.a.L(u.a.a.c.b,u)
u.a.a.a_()}u.bQ()
u.bR()},
bU:function(a){this.a=a
C.a.h(a.c.b,this)},
bV:function(a){this.b=a
C.a.h(a.c.c,this)},
bQ:function(){var u=this.a
if(u!=null){C.a.L(u.c.b,this)
this.a=null}},
bR:function(){var u=this.b
if(u!=null){C.a.L(u.c.c,this)
this.b=null}},
gb0:function(){return this.a==null||this.b==null},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){if(this.gb0())return a+"disposed"
return a+C.b.ad(J.at(this.a.e),0)+", "+C.b.ad(J.at(this.b.e),0)},
N:function(){return this.F("")}}
F.hj.prototype={}
F.iW.prototype={
b3:function(a,b,c){var u,t=b.a
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
F.bJ.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ad(J.at(u.e),0)},
N:function(){return this.F("")}}
F.e7.prototype={
gw:function(){var u=this.e
return u==null?this.e=D.X():u},
b4:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.v()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){r=g[s]
h.a.h(0,r.ic())}h.a.v()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bJ()
if(n.a==null)H.z(P.C("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.K(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.v()
p=p.e
if(typeof p!=="number")return p.p()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.nX(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.v()
p=p.e
if(typeof p!=="number")return p.p()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cD(l,k,i)}g=h.e
if(g!=null)g.aj(0)},
at:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.at()||!1
if(!t.a.at())u=!1
s=t.e
if(s!=null)s.aj(0)
return u},
iI:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.r(o,0)])
for(o=[F.ai];u.length!==0;){t=C.a.giu(u)
C.a.e6(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.e(u,r)
q=u[r]
if(q!=null&&a.b3(0,t,q)){C.a.h(s,q)
C.a.e6(u,r)}}if(s.length>1)b.b4(s)}}p.a.v()
p.c.cp()
p.d.cp()
p.b.j0()
p.c.cq(new F.iW())
p.d.cq(new F.ir())
o=p.e
if(o!=null)o.aj(0)},
bW:function(){this.iI(new F.jo(),new F.hX())},
cd:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.cd()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.e(o,u)
t=o[u]
o=t.r
if(o!=null)t.sdT(new V.K(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.K(s,r,o).u(0,Math.sqrt(s*s+r*r+o*o))
if(!J.Q(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.K(null)}}}}o=p.e
if(o!=null)o.aj(0)},
i7:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bw()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bv().a)!==0)++s
if((t&$.bu().a)!==0)++s
if((t&$.bV().a)!==0)++s
if((t&$.bW().a)!==0)++s
if((t&$.dn().a)!==0)++s
if((t&$.dp().a)!==0)++s
if((t&$.cu().a)!==0)++s
if((t&$.bt().a)!==0)++s
r=a3.gcA(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.p
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dw])
for(n=0,m=0;m<s;++m){l=a3.i3(m)
k=l.gcA(l)
C.a.k(o,m,new Z.dw(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.e(u,j)
i=u[j].iF(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.l(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cj(p)),35044)
u.bindBuffer(a0,null)
e=new Z.dx(new Z.eo(a0,f),o,a3)
e.sfc(H.d([],[Z.bE]))
if(a.b.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.v()
C.a.h(d,c.e)}b=Z.lo(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bE(0,d.length,b))}if(a.c.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.v()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.v()
C.a.h(d,c.e)}b=Z.lo(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bE(1,d.length,b))}if(a.d.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.v()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.v()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].c
c.a.a.v()
C.a.h(d,c.e)}b=Z.lo(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bE(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.f])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.F(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.F(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.F(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.F(t))}return C.a.m(s,"\n")},
a_:function(){var u=this.e
if(u!=null)u.K(null)},
$iq7:1}
F.ij.prototype={
hY:function(a){var u,t,s,r,q,p,o
H.l(a,"$ib",[F.ai],"$ab")
u=H.d([],[F.a8])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.e(a,p)
p=a[p]
if(q>=o)return H.e(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.cD(s,p,o))}}return u},
hZ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.ai],"$ab")
u=H.d([],[F.a8])
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
C.a.h(u,F.cD(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cD(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cD(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cD(k,h,l))}o=!o}q=!q}return u},
gn:function(a){return this.b.length},
cq:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b3(0,p,n)){p.b_()
break}}}}},
cp:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.gi9(s)
if(t)s.b_()}},
at:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].c1())s=!1
return s},
c0:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].c_())s=!1
return s},
cd:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.K(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.K(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.K(null)}},
i:function(a){return this.N()},
F:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(a))
return C.a.m(r,"\n")},
N:function(){return this.F("")},
sf7:function(a){this.b=H.l(a,"$ib",[F.a8],"$ab")}}
F.ik.prototype={
gn:function(a){return this.b.length},
cq:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b3(0,p,n)){p.b_()
break}}}}},
cp:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.Q(s.a,s.b)
if(t)s.b_()}},
i:function(a){return this.N()},
F:function(a){var u,t,s=H.d([],[P.f]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
C.a.h(s,t[u].F(a+(""+u+". ")))}return C.a.m(s,"\n")},
N:function(){return this.F("")},
sfd:function(a){this.b=H.l(a,"$ib",[F.bo],"$ab")}}
F.il.prototype={
gn:function(a){return this.b.length},
j0:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.L(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.K(null)}s=t.a
if(s!=null){C.a.L(s.b.b,t)
t.a=null}}}},
i:function(a){return this.N()},
F:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(a))
return C.a.m(r,"\n")},
N:function(){return this.F("")},
sbN:function(a){this.b=H.l(a,"$ib",[F.bJ],"$ab")}}
F.ai.prototype={
c4:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.en(u.cx,r,o,t,s,q,p,a,n)},
ic:function(){return this.c4(null)},
sa0:function(a,b){var u
if(!J.Q(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a_()}},
sdT:function(a){var u
a=a==null?null:a.u(0,Math.sqrt(a.E(a)))
if(!J.Q(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a_()}},
seb:function(a){var u
if(!J.Q(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a_()}},
sdn:function(a){var u
if(!J.Q(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a_()}},
iF:function(a){var u,t,s=this
if(a.t(0,$.bw())){u=s.f
t=[P.p]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.bv())){u=s.r
t=[P.p]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.bu())){u=s.x
t=[P.p]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.bV())){u=s.y
t=[P.p]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.t(0,$.bW())){u=s.z
t=[P.p]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.dn())){u=s.Q
t=[P.p]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.dp())){u=s.Q
t=[P.p]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.cu()))return H.d([s.ch],[P.p])
else if(a.t(0,$.bt())){u=s.cx
t=[P.p]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.p])},
c1:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d3()
t.d.G(0,new F.jt(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.aj(0)}return!0},
c_:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d3()
t.d.G(0,new F.js(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.aj(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){var u,t,s=this,r="-",q=H.d([],[P.f])
C.a.h(q,C.b.ad(J.at(s.e),0))
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
t=C.a.m(q,", ")
return a+"{"+t+"}"},
N:function(){return this.F("")}}
F.jt.prototype={
$1:function(a){var u,t
H.h(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:6}
F.js.prototype={
$1:function(a){var u,t
H.h(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:6}
F.jj.prototype={
v:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.C("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a_()
return!0},
i_:function(a,b,c,d,e,f){var u=F.en(a,null,b,c,d,e,f,null,0)
this.h(0,u)
return u},
gn:function(a){return this.c.length},
at:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].c1()
return!0},
c0:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].c_()
return!0},
i8:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.Q(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.K(null)}}}}return!0},
i:function(a){return this.N()},
F:function(a){var u,t,s,r
this.v()
u=H.d([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].F(a))
return C.a.m(u,"\n")},
N:function(){return this.F("")},
shV:function(a){this.c=H.l(a,"$ib",[F.ai],"$ab")}}
F.jk.prototype={
gn:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.e(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.e(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.e(t,b)
return t[b]},
G:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a8]})
C.a.G(u.b,b)
C.a.G(u.c,new F.jl(u,b))
C.a.G(u.d,new F.jm(u,b))},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
return C.a.m(r,"\n")},
sf8:function(a){this.b=H.l(a,"$ib",[F.a8],"$ab")},
sf9:function(a){this.c=H.l(a,"$ib",[F.a8],"$ab")},
sfa:function(a){this.d=H.l(a,"$ib",[F.a8],"$ab")}}
F.jl.prototype={
$1:function(a){H.h(a,"$ia8")
if(!J.Q(a.a,this.a))this.b.$1(a)},
$S:6}
F.jm.prototype={
$1:function(a){var u
H.h(a,"$ia8")
u=this.a
if(!J.Q(a.a,u)&&!J.Q(a.b,u))this.b.$1(a)},
$S:6}
F.jn.prototype={
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.e(t,u)
return t[u]}else{if(b<0)return H.e(t,b)
return t[b]}},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
return C.a.m(r,"\n")},
sfe:function(a){this.b=H.l(a,"$ib",[F.bo],"$ab")},
sff:function(a){this.c=H.l(a,"$ib",[F.bo],"$ab")}}
F.jp.prototype={}
F.jo.prototype={
b3:function(a,b,c){return J.Q(b.f,c.f)}}
F.jq.prototype={}
F.hX.prototype={
b4:function(a){var u,t,s,r
H.l(a,"$ib",[F.ai],"$ab")
u=V.d3()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.K(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.u(0,Math.sqrt(u.E(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.u)(a),++s)a[s].sdT(u)
return}}
F.jr.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
return C.a.m(r,"\n")},
sbN:function(a){this.b=H.l(a,"$ib",[F.bJ],"$ab")}}
O.dT.prototype={
gw:function(){var u=this.fr
return u==null?this.fr=D.X():u},
aa:function(a){var u
H.h(a,"$iD")
u=this.fr
if(u!=null)u.K(a)},
eL:function(){return this.aa(null)},
d8:function(a){H.h(a,"$iD")
this.a=null
this.aa(a)},
hv:function(){return this.d8(null)},
fz:function(a,b){var u=V.ap
H.l(b,"$ij",[u],"$aj")
u=new D.c3([u])
u.b=!0
this.aa(u)},
fB:function(a,b){var u=V.ap
H.l(b,"$ij",[u],"$aj")
u=new D.c4([u])
u.b=!0
this.aa(u)},
cT:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.m,h=new H.a1([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.gah()
p=h.j(0,r.gah())
h.k(0,q,p==null?1:p)}o=H.d([],[A.aE])
h.G(0,new O.hD(j,o))
C.a.bx(o,new O.hE())
n=new H.a1([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.gah()
p=n.j(0,r.gah())
n.k(0,q,p==null?1:p)}m=H.d([],[A.aH])
n.G(0,new O.hF(j,m))
C.a.bx(m,new O.hG())
l=new H.a1([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.u)(i),++s){r=i[s]
t=r.gah()
q=l.j(0,r.gah())
l.k(0,t,q==null?1:q)}k=H.d([],[A.aI])
l.G(0,new O.hH(j,k))
C.a.bx(k,new O.hI())
i=C.e.a6(j.e.a.length+3,4)
j.dy.e
return A.o3(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
eR:function(a,b){H.l(a,"$ib",[T.cY],"$ab")
if(b!=null)if(!C.a.S(a,b)){b.a=a.length
C.a.h(a,b)}},
aw:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.au(u,u.length,[H.r(u,0)]);u.B();){t=u.d
t.toString
s=$.bL
t.a=s==null?$.bL=new V.a2(0,0,0):s
s=$.ji
t.b=s==null?$.ji=new V.K(0,0,1):s
s=$.jh
t.c=s==null?$.jh=new V.K(0,1,0):s
s=$.jg
t.d=s==null?$.jg=new V.K(-1,0,0):s
s=t.f
if(s!=null){r=s.aU(0,b,t)
if(r!=null){t.a=r.br(t.a)
s=r.bs(t.b)
q=s.a
p=s.b
o=s.c
t.b=s.u(0,Math.sqrt(q*q+p*p+o*o))
o=r.bs(t.c)
p=o.a
q=o.b
s=o.c
t.c=o.u(0,Math.sqrt(p*p+q*q+s*s))
s=r.bs(t.d)
q=s.a
p=s.b
o=s.c
t.d=s.u(0,Math.sqrt(q*q+p*p+o*o))}}}},
j2:function(b6,b7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.cT()
u=b6.fr.j(0,b5.b1)
if(u==null){u=A.o2(b5,b6.a)
t=u.b
if(t.length===0)H.z(P.C("May not cache a shader with no name."))
if(b6.fr.bj(0,t))H.z(P.C('Shader cache already contains a shader by the name "'+t+'".'))
b6.fr.k(0,t,u)}b5=b4.a=u
b7.e=null}s=b5.z
r=s.dv
b5=b7.e
if(!(b5 instanceof Z.dx))b5=b7.e=null
if(b5==null||!b5.d.t(0,r)){b5=s.k3
if(b5)b7.d.at()
q=s.k4
if(q){p=b7.d
o=p.e
if(o!=null)++o.d
p.d.c0()
p.a.c0()
p=p.e
if(p!=null)p.aj(0)}p=s.r2
if(p){o=b7.d
n=o.e
if(n!=null)++n.d
o.a.i8()
o=o.e
if(o!=null)o.aj(0)}m=b7.d.i7(new Z.jv(b6.a),r)
m.aP($.bw()).e=b4.a.Q.c
if(b5)m.aP($.bv()).e=b4.a.cx.c
if(q)m.aP($.bu()).e=b4.a.ch.c
if(s.r1)m.aP($.bV()).e=b4.a.cy.c
if(p)m.aP($.bW()).e=b4.a.db.c
if(s.rx)m.aP($.bt()).e=b4.a.dx.c
b7.e=m}b5=T.cY
l=H.d([],[b5])
q=b4.a
p=b6.a
p.useProgram(q.r)
q.x.iq()
if(s.dy){q=b4.a
o=b6.dx
o=o.ga1(o)
q=q.dy
q.toString
q.an(o.ae(0,!0))}if(s.fr){q=b4.a
o=b6.cx
if(o==null){o=b6.db
o=o.ga1(o)
n=b6.dx
n=b6.cx=o.C(0,n.ga1(n))
o=n}q=q.fr
q.toString
q.an(o.ae(0,!0))}q=b4.a
o=b6.ch
if(o==null){o=b6.giZ()
n=b6.dx
n=b6.ch=o.C(0,n.ga1(n))
o=n}q=q.fy
q.toString
q.an(o.ae(0,!0))
if(s.ry){q=b4.a
o=b4.b
q=q.k1
q.toString
q.an(C.j.ae(o,!0))}if(s.x1){q=b4.a
o=b4.c
q=q.k2
q.toString
q.an(C.j.ae(o,!0))}if(s.x2){q=b4.a
o=b4.d
q=q.k3
q.toString
q.an(C.j.ae(o,!0))}if(s.y2>0){k=b4.e.a.length
q=b4.a.k4
C.d.bt(q.a,q.d,k)
for(q=[P.p],j=0;j<k;++j){o=b4.a
n=b4.e.a
if(j>=n.length)return H.e(n,j)
n=n[j]
o.toString
H.h(n,"$iap")
o=o.r1
if(j>=o.length)return H.e(o,j)
o=o[j]
i=new Float32Array(H.cj(H.l(n.ae(0,!0),"$ib",q,"$ab")))
C.d.eg(o.a,o.d,!1,i)}}if(s.a.a){q=b4.a
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
q=q.dw
C.d.U(q.a,q.d,o.a,o.b,o.c)}q=s.e.a
if(!q)o=!1
else o=!0
if(o){o=b4.a
n=b4.z.ch
o=o.dA
C.d.a4(o.a,o.d,n)}if(q){q=b4.a
o=b4.z.f
q=q.dz
C.d.U(q.a,q.d,o.a,o.b,o.c)}q=s.z
if(q.length>0){o=b6.db
h=o.ga1(o)
o=P.m
g=new H.a1([o,o])
for(o=b4.dx.e,n=o.length,f=[b5],e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
c=d.gah()
b=g.j(0,c)
if(b==null)b=0
g.k(0,c,b+1)
a=J.dq(b4.a.c8.j(0,c),b)
a0=h.bs(d.gik(d))
a1=a0.a
a2=a0.b
a3=a0.c
a3=a0.u(0,Math.sqrt(a1*a1+a2*a2+a3*a3))
a2=a.e
a1=a3.a
a0=a3.b
a3=a3.c
C.d.U(a2.a,a2.d,a1,a0,a3)
a3=d.gaO(d)
a0=a.f
C.d.U(a0.a,a0.d,a3.a,a3.b,a3.c)
d.gaT()
a0=d.gik(d)
a1=a.d
C.d.U(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gjH()
a1=a.b
C.d.U(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gcr(d)
a1=a.c
C.d.U(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gaT()
H.l(l,"$ib",f,"$ab")
if(!C.a.S(l,a0)){a0.a=l.length
C.a.h(l,a0)}a0=d.gaT()
a1=a0.gbn(a0)
if(a1){a1=a.r
a1.toString
a2=a0.d
if(!a2)a1.a.uniform1i(a1.d,0)
else{a0=a0.a
a1.a.uniform1i(a1.d,a0)}}}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.u)(q),++e){n=q[e].a
k=g.j(0,n)
if(k==null)k=0
n=b4.a.c7.j(0,n)
C.d.bt(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=b6.db
h=o.ga1(o)
o=P.m
a4=new H.a1([o,o])
for(o=b4.dx.f,n=o.length,f=[b5],a0=[P.p],e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
c=d.gah()
b=a4.j(0,c)
if(b==null)b=0
a4.k(0,c,b+1)
a=J.dq(b4.a.ca.j(0,c),b)
a5=h.C(0,d.ga1(d))
a1=d.ga1(d)
a2=$.bL
a1=a1.br(a2==null?$.bL=new V.a2(0,0,0):a2)
a2=a.b
C.d.U(a2.a,a2.d,a1.a,a1.b,a1.c)
a1=$.bL
a1=a5.br(a1==null?$.bL=new V.a2(0,0,0):a1)
a2=a.c
C.d.U(a2.a,a2.d,a1.a,a1.b,a1.c)
a1=d.gaO(d)
a2=a.e
C.d.U(a2.a,a2.d,a1.a,a1.b,a1.c)
d.gaT()
a1=a5.dO(0)
a2=a1.a
a3=a1.b
a6=a1.c
a7=a1.e
a8=a1.f
a9=a1.r
b0=a1.y
b1=a1.z
a1=a1.Q
b2=a.d
b2.toString
i=new Float32Array(H.cj(H.l(new V.dV(a2,a3,a6,a7,a8,a9,b0,b1,a1).ae(0,!0),"$ib",a0,"$ab")))
C.d.ef(b2.a,b2.d,!1,i)
d.gaT()
a1=d.gaT()
H.l(l,"$ib",f,"$ab")
if(!C.a.S(l,a1)){a1.a=l.length
C.a.h(l,a1)}a1=d.gaT()
a2=a1.gbn(a1)
if(a2){a2=a.f
a2.toString
a3=a1.gbn(a1)
if(!a3)a2.a.uniform1i(a2.d,0)
else{a1=a1.giz(a1)
a2.a.uniform1i(a2.d,a1)}}d.gcz()
a1=d.gjm()
a2=a.x
C.d.jf(a2.a,a2.d,a1.a,a1.b,a1.c,a1.d)
a1=d.gcz()
if(!C.a.S(l,a1)){a1.a=l.length
C.a.h(l,a1)}a1=d.gcz()
a2=a1.gbn(a1)
if(a2){a2=a.r
a2.toString
a3=a1.gbn(a1)
if(!a3)a2.a.uniform1i(a2.d,0)
else{a1=a1.giz(a1)
a2.a.uniform1i(a2.d,a1)}}if(d.gjq()){a1=d.gjn()
a2=a.y
C.d.a4(a2.a,a2.d,a1)
a1=d.gjo()
a2=a.z
C.d.a4(a2.a,a2.d,a1)
a1=d.gjp()
a2=a.Q
C.d.a4(a2.a,a2.d,a1)}}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.u)(q),++e){n=q[e].a
k=a4.j(0,n)
if(k==null)k=0
n=b4.a.c9.j(0,n)
C.d.bt(n.a,n.d,k)}}q=s.ch
if(q.length>0){o=b6.db
h=o.ga1(o)
o=P.m
b3=new H.a1([o,o])
for(o=b4.dx.r,n=o.length,b5=[b5],e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
c=d.gah()
b=b3.j(0,c)
if(b==null)b=0
b3.k(0,c,b+1)
a=J.dq(b4.a.cc.j(0,c),b)
f=d.a
a0=a.b
a1=f.a
a2=f.b
f=f.c
C.d.U(a0.a,a0.d,a1,a2,f)
f=d.b
a2=f.a
a1=f.b
a0=f.c
a0=f.u(0,Math.sqrt(a2*a2+a1*a1+a0*a0))
a1=a.c
a2=a0.a
f=a0.b
a0=a0.c
C.d.U(a1.a,a1.d,a2,f,a0)
a0=h.br(d.a)
f=a.d
C.d.U(f.a,f.d,a0.a,a0.b,a0.c)
a0=d.r
f=a.e
C.d.U(f.a,f.d,a0.a,a0.b,a0.c)
if(d.x!=null||!1){f=d.c
a0=a.f
a0.toString
a1=f.a
a2=f.b
f=f.c
C.d.U(a0.a,a0.d,a1,a2,f)
f=d.d
a2=a.r
a2.toString
a1=f.a
a0=f.b
f=f.c
C.d.U(a2.a,a2.d,a1,a0,f)
f=d.z
a0=a.x
C.d.a4(a0.a,a0.d,f)
f=d.Q
a0=a.y
C.d.a4(a0.a,a0.d,f)}f=d.x
a0=f!=null
if(a0){H.l(l,"$ib",b5,"$ab")
if(a0)if(!C.a.S(l,f)){f.a=l.length
C.a.h(l,f)}f=d.x
a0=f!=null
if(a0&&f.d){a1=a.dx
a1.toString
if(!a0||!f.d)a1.a.uniform1i(a1.d,0)
else{f=f.a
a1.a.uniform1i(a1.d,f)}}}f=d.cy
a0=a.Q
C.d.a4(a0.a,a0.d,f)
f=d.dx
a0=a.ch
C.d.a4(a0.a,a0.d,f)
f=d.dy
a0=a.cx
C.d.a4(a0.a,a0.d,f)
f=d.fr
a0=a.cy
C.d.a4(a0.a,a0.d,f)
f=d.fx
a0=a.db
C.d.a4(a0.a,a0.d,f)}for(b5=q.length,e=0;e<q.length;q.length===b5||(0,H.u)(q),++e){o=q[e].a
k=b3.j(0,o)
if(k==null)k=0
o=b4.a.cb.j(0,o)
C.d.bt(o.a,o.d,k)}}}if(s.dx){b5=b4.a
q=b6.Q
if(q==null){q=b6.db
q=b6.Q=q.ga1(q).dO(0)}b5=b5.id
b5.toString
b5.an(q.ae(0,!0))}if(s.cy){b4.eR(l,b4.ch)
b5=b4.a
q=b4.ch
b5.hA(b5.dB,q)
if(s.r.a){b5=b4.a
q=b4.cx.f
b5=b5.dC
C.d.U(b5.a,b5.d,q.a,q.b,q.c)}b5=s.x.a
if(!b5)q=!1
else q=!0
if(q){q=b4.a
o=b4.cy.ch
q=q.dD
C.d.a4(q.a,q.d,o)}if(b5){b5=b4.a
q=b4.cy.f
b5=b5.dE
C.d.U(b5.a,b5.d,q.a,q.b,q.c)}}b5=s.y.a
q=!b5
if(q)o=!1
else o=!0
if(o){if(b5){b5=b4.a
o=b4.db.f
b5=b5.dF
C.d.a4(b5.a,b5.d,o)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j){b5=l[j]
if(!b5.c&&b5.d){b5.c=!0
p.activeTexture(33984+b5.a)
p.bindTexture(3553,b5.b)}}b5=b7.e
b5.bX(b6)
b5.aR(b6)
b5.je(b6)
if(q)b5=!1
else b5=!0
if(b5)p.disable(3042)
for(j=0;j<l.length;++j){b5=l[j]
if(b5.c){b5.c=!1
p.activeTexture(33984+b5.a)
p.bindTexture(3553,null)}}b5=b4.a
b5.toString
p.useProgram(null)
b5.x.il()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cT().b1},
seV:function(a){this.e=H.l(a,"$ia6",[V.ap],"$aa6")}}
O.hD.prototype={
$2:function(a,b){H.a4(a)
H.a4(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aE(a,C.e.a6(b+3,4)*4))},
$S:12}
O.hE.prototype={
$2:function(a,b){H.h(a,"$iaE")
H.h(b,"$iaE")
return J.l3(a.a,b.a)},
$S:50}
O.hF.prototype={
$2:function(a,b){H.a4(a)
H.a4(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aH(a,C.e.a6(b+3,4)*4))},
$S:12}
O.hG.prototype={
$2:function(a,b){H.h(a,"$iaH")
H.h(b,"$iaH")
return J.l3(a.a,b.a)},
$S:51}
O.hH.prototype={
$2:function(a,b){H.a4(a)
H.a4(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aI(a,C.e.a6(b+3,4)*4))},
$S:12}
O.hI.prototype={
$2:function(a,b){H.h(a,"$iaI")
H.h(b,"$iaI")
return J.l3(a.a,b.a)},
$S:52}
O.hx.prototype={
az:function(){var u,t=this
t.cC()
u=t.f
if(!(Math.abs(u-1)<$.L().a)){t.f=1
u=new D.M(t.b,u,1,[P.p])
u.b=!0
t.a.aa(u)}}}
O.dU.prototype={
az:function(){},
dc:function(a){var u,t,s=this
if(!s.c.t(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.az()
u=s.a
u.a=null
u.aa(null)}}}
O.hy.prototype={}
O.b8.prototype={
da:function(a){var u,t,s=this
if(!s.f.t(0,a)){u=s.f
s.f=a
t=new D.M(s.b+".color",u,a,[V.a5])
t.b=!0
s.a.aa(t)}},
az:function(){this.cC()
this.da(new V.a5(1,1,1))},
saO:function(a,b){this.dc(new A.an(!0,!1,!1))
this.da(b)}}
O.hA.prototype={}
O.hB.prototype={
az:function(){var u,t=this
t.cD()
u=t.ch
if(!(Math.abs(u-1)<$.L().a)){t.ch=1
u=new D.M(t.b+".refraction",u,1,[P.p])
u.b=!0
t.a.aa(u)}}}
O.hC.prototype={
dd:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.L().a)){u.ch=a
t=new D.M(u.b+".shininess",t,a,[P.p])
t.b=!0
u.a.aa(t)}},
az:function(){this.cD()
this.dd(100)}}
O.bN.prototype={}
T.cY.prototype={}
T.ed.prototype={}
T.iI.prototype={
gw:function(){var u=this.y
return u==null?this.y=D.X():u}}
T.iJ.prototype={
iG:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.iI()
t.a=0
t.b=q
t.d=t.c=!1
r=W.o
W.aa(u,"load",H.n(new T.iK(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
hw:function(a,b,c){var u,t,s,r
b=V.lG(b)
u=V.lG(a.width)
t=V.lG(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.l6()
s.width=u
s.height=t
r=H.h(C.i.el(s,"2d"),"$icy")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.px(r.getImageData(0,0,s.width,s.height))}}}
T.iK.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.hw(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.d.j8(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.ip()}++s.e},
$S:11}
V.bi.prototype={
aD:function(a,b){return!0},
i:function(a){return"all"},
$iaz:1}
V.az.prototype={}
V.dS.prototype={
aD:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)if(u[s].aD(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa5:function(a){this.a=H.l(a,"$ib",[V.az],"$ab")},
$iaz:1}
V.av.prototype={
aD:function(a,b){return!this.es(0,b)},
i:function(a){return"!["+this.cB(0)+"]"}}
V.i8.prototype={
aD:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c8(this.a),t=H.c8(this.b)
return u+".."+t},
$iaz:1}
V.ii.prototype={
ey:function(a){var u,t
if(a.a.length<=0)throw H.c(P.C("May not create a SetMatcher with zero characters."))
u=new H.a1([P.m,P.S])
for(t=new H.cJ(a,a.gn(a),[H.as(a,"x",0)]);t.B();)u.k(0,t.d,!0)
this.shz(u)},
aD:function(a,b){return this.a.bj(0,b)},
i:function(a){var u=this.a
return P.cW(u.ga3(u),0,null)},
shz:function(a){this.a=H.l(a,"$iy",[P.m,P.S],"$ay")},
$iaz:1}
V.cU.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d_(this.a.l(0,b))
r.sa5(H.d([],[V.az]))
r.c=!1
C.a.h(this.c,r)
return r},
it:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.aD(0,a))return r}return},
i:function(a){return this.b},
shT:function(a){this.c=H.l(a,"$ib",[V.d_],"$ab")}}
V.ef.prototype={
i:function(a){var u=H.lI(this.b,"\n","\\n"),t=H.lI(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cZ.prototype={
aE:function(a,b,c){var u,t,s
H.l(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.u)(c),++t){s=c[t]
this.c.k(0,s,b)}},
i:function(a){return this.b},
shr:function(a){var u=P.f
this.c=H.l(a,"$iy",[u,u],"$ay")}}
V.iN.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cU(this,b)
u.shT(H.d([],[V.d_]))
u.d=null
this.a.k(0,b,u)}return u},
O:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cZ(a)
u=P.f
t.shr(new H.a1([u,u]))
this.b.k(0,a,t)}return t},
ee:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.ef]),k=this.c,j=[P.m],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.D(a,s)
q=k.it(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cW(i,0,m)
throw H.c(P.C("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cW(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.ef(n==null?o.b:n,p,s)}++s}}},
shJ:function(a){this.a=H.l(a,"$iy",[P.f,V.cU],"$ay")},
shM:function(a){this.b=H.l(a,"$iy",[P.f,V.cZ],"$ay")}}
V.d_.prototype={
i:function(a){return this.b.b+": "+this.cB(0)}}
X.dz.prototype={$icM:1}
X.h6.prototype={
gw:function(){var u=this.x
return u==null?this.x=D.X():u}}
X.e1.prototype={
gw:function(){var u=this.f
return u==null?this.f=D.X():u},
aI:function(a){var u
H.h(a,"$iD")
u=this.f
if(u!=null)u.K(a)},
eO:function(){return this.aI(null)},
saQ:function(a){var u,t,s=this
if(!J.Q(s.b,a)){u=s.b
if(u!=null)u.gw().L(0,s.gcH())
t=s.b
s.b=a
if(a!=null)a.gw().h(0,s.gcH())
u=new D.M("mover",t,s.b,[U.ak])
u.b=!0
s.aI(u)}},
$icM:1,
$idz:1}
X.eb.prototype={}
V.bA.prototype={
bc:function(a){this.b=new P.ha(C.Q)
this.c=null
this.sbH(H.d([],[[P.b,W.aF]]))},
M:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aF]))
u=a.split("\n")
for(l=u.length,t=[W.aF],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.J(q)
o=m.b.f_(q,0,q.length)
n=o==null?q:o
C.O.en(p,H.lI(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gau(m.d),p)}},
e1:function(a,b){var u,t,s,r,q=this
H.l(b,"$ib",[P.f],"$ab")
q.sbH(H.d([],[[P.b,W.aF]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bk():t).ee(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)q.bp(t[r])},
sbH:function(a){this.d=H.l(a,"$ib",[[P.b,W.aF]],"$ab")}}
V.kX.prototype={
$1:function(a){var u
H.h(a,"$ibc")
u=C.c.ed(this.a.gix(),2)
if(u!=="0.00")P.lH(u+" fps")},
$S:54}
V.fN.prototype={
bp:function(a){var u=this
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
bk:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iO()
a1.c=a1.l(0,r)
u=a1.l(0,r).m(0,q)
t=V.v(new H.t("_"))
C.a.h(u.a,t)
t=V.Z("a","z")
C.a.h(u.a,t)
t=V.Z("A","Z")
C.a.h(u.a,t)
t=a1.l(0,q).m(0,q)
u=V.v(new H.t("_"))
C.a.h(t.a,u)
u=V.Z("0","9")
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=a1.l(0,r).m(0,p)
t=V.Z("0","9")
C.a.h(u.a,t)
t=a1.l(0,p).m(0,p)
u=V.Z("0","9")
C.a.h(t.a,u)
u=a1.l(0,p).m(0,o)
t=V.v(new H.t("."))
C.a.h(u.a,t)
t=a1.l(0,o).m(0,n)
u=V.Z("0","9")
C.a.h(t.a,u)
u=a1.l(0,n).m(0,n)
t=V.Z("0","9")
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
C.a.h(a1.l(0,k).m(0,k).a,new V.bi())
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
C.a.h(a1.l(0,h).m(0,h).a,new V.bi())
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
t=new V.av()
s=[V.az]
t.sa5(H.d([],s))
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
t=new V.av()
t.sa5(H.d([],s))
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
u=[P.f]
t.aE(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aE(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aE(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.h7.prototype={
bp:function(a){var u=this
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
bk:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iO()
e.c=e.l(0,r)
u=e.l(0,r).m(0,q)
t=V.v(new H.t("_"))
C.a.h(u.a,t)
t=V.Z("a","z")
C.a.h(u.a,t)
t=V.Z("A","Z")
C.a.h(u.a,t)
t=e.l(0,q).m(0,q)
u=V.v(new H.t("_"))
C.a.h(t.a,u)
u=V.Z("0","9")
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=e.l(0,r).m(0,p)
t=V.Z("0","9")
C.a.h(u.a,t)
t=e.l(0,p).m(0,p)
u=V.Z("0","9")
C.a.h(t.a,u)
u=e.l(0,p).m(0,o)
t=V.v(new H.t("."))
C.a.h(u.a,t)
t=e.l(0,o).m(0,n)
u=V.Z("0","9")
C.a.h(t.a,u)
u=e.l(0,n).m(0,n)
t=V.Z("0","9")
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
C.a.h(e.l(0,k).m(0,m).a,new V.bi())
t=e.l(0,j).m(0,i)
u=V.v(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,j).m(0,j)
t=new V.av()
s=[V.az]
t.sa5(H.d([],s))
C.a.h(u.a,t)
u=V.v(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,h)
t=V.v(new H.t("#"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,h)
u=new V.av()
u.sa5(H.d([],s))
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
t=[P.f]
u.aE(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aE(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aE(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.h8.prototype={
bp:function(a){var u=this,t="#111"
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
bk:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iO()
l.c=l.l(0,s)
u=l.l(0,s).m(0,r)
t=V.v(new H.t("_"))
C.a.h(u.a,t)
t=V.Z("a","z")
C.a.h(u.a,t)
t=V.Z("A","Z")
C.a.h(u.a,t)
t=l.l(0,r).m(0,r)
u=V.v(new H.t("_"))
C.a.h(t.a,u)
u=V.Z("0","9")
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
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
C.a.h(l.l(0,o).m(0,o).a,new V.bi())
C.a.h(l.l(0,s).m(0,m).a,new V.bi())
u=l.l(0,m).m(0,m)
t=new V.av()
t.sa5(H.d([],[V.az]))
C.a.h(u.a,t)
u=V.v(new H.t('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=l.l(0,p)
u.d=u.a.O("Symbol")
u=l.l(0,n)
u.d=u.a.O("String")
u=l.l(0,r)
t=u.a.O(r)
u.d=t
t.aE(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
t=l.l(0,q)
t.d=t.a.O(q)
t=l.l(0,m)
t.d=t.a.O(m)
return l}}
V.i2.prototype={
e1:function(a,b){H.l(b,"$ib",[P.f],"$ab")
this.sbH(H.d([],[[P.b,W.aF]]))
this.M(C.a.m(b,"\n"),"#111")},
bp:function(a){},
bk:function(){return}}
V.i6.prototype={
dj:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.mn().gcn().j(0,H.i(u))
if(t==null)if(d){c.$0()
m.dh(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lO(m.c).h(0,q)
o=W.nR("radio")
o.checked=s
o.name=u
u=W.o
W.aa(o,"change",H.n(new V.i7(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lO(m.c).h(0,r.createElement("br"))},
aZ:function(a,b,c){return this.dj(a,b,c,!1)},
dh:function(a){var u,t,s=P.mn(),r=P.f,q=P.nZ(s.gcn(),r,r)
q.k(0,this.a,a)
u=s.e7(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.k8([],[]).ct(""),"",t)}}
V.i7.prototype={
$1:function(a){var u=this
if(H.I(u.b.checked)){u.c.$0()
u.a.dh(u.d)}},
$S:11}
V.im.prototype={
eA:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.aa(q,"scroll",H.n(new V.ip(o),{func:1,ret:-1,args:[r]}),!1,r)},
dl:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.f],"$ab")
this.hD()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.ee(C.a.iE(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
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
if(H.pW(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.J(m[1])
l.textContent=H.J(m[0])
t.appendChild(l)}else{k=P.f9(C.y,n,C.h,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.i(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
ek:function(a){var u,t,s,r=new V.fN("dart")
r.bc("dart")
u=new V.h7("glsl")
u.bc("glsl")
t=new V.h8("html")
t.bc("html")
s=C.a.iv(H.d([r,u,t],[V.bA]),new V.iq(a))
if(s!=null)return s
r=new V.i2("plain")
r.bc("plain")
return r},
dk:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.l(b0,"$ib",[P.f],"$ab")
u=H.d([],[P.m])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dm(r).a2(r,"+")){C.a.k(b0,s,C.b.a7(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a2(r,"-")){C.a.k(b0,s,C.b.a7(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.ek(a8)
q.e1(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.f9(C.y,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lQ()
i.href="#"+H.i(m)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.u)(r),++a0)C.a_.i2(a,r[a0])
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
for(a3=C.a.gT(r);a3.B();)c.appendChild(a3.gJ(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
hW:function(a){var u,t,s,r,q,p,o,n="auto"
H.l(a,"$ib",[P.f],"$ab")
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
s=H.h(r.insertCell(-1),"$ibb").style
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
o=H.h(r.insertCell(-1),"$ibb")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
hD:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iO()
u.c=u.l(0,q)
t=u.l(0,q).m(0,p)
s=V.v(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,p).m(0,p)
s=new V.av()
r=[V.az]
s.sa5(H.d([],r))
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
s=new V.av()
s.sa5(H.d([],r))
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
s=new V.av()
s.sa5(H.d([],r))
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
t=new V.av()
t.sa5(H.d([],r))
C.a.h(s.a,t)
s=V.v(new H.t("|]"))
C.a.h(t.a,s)
s=u.l(0,k).m(0,j)
t=V.v(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,k).m(0,k)
t=new V.av()
t.sa5(H.d([],r))
C.a.h(s.a,t)
s=V.v(new H.t("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,q).m(0,i).a,new V.bi())
s=u.l(0,i).m(0,i)
t=new V.av()
t.sa5(H.d([],r))
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
V.ip.prototype={
$1:function(a){P.mj(C.o,new V.io(this.a))},
$S:11}
V.io.prototype={
$0:function(){var u=C.c.ak(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:0}
V.iq.prototype={
$1:function(a){return H.h(a,"$ibA").a===this.a},
$S:55}
L.kO.prototype={
$0:function(){this.a.sa8(0,F.lB(1,null,null,1))},
$S:0}
L.kP.prototype={
$0:function(){this.a.sa8(0,F.lC(1,!0,!0,40,1))},
$S:0}
L.kQ.prototype={
$0:function(){this.a.sa8(0,F.lC(1,!0,!1,40,0))},
$S:0}
L.kR.prototype={
$0:function(){this.a.sa8(0,F.pV(6,6))},
$S:0}
L.kS.prototype={
$0:function(){this.a.sa8(0,F.n9())},
$S:0}
L.kT.prototype={
$0:function(){this.a.sa8(0,F.pN())},
$S:0}
L.kU.prototype={
$1:function(a){var u,t,s,r
H.h(a,"$iD")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.dk("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dk("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:10};(function aliases(){var u=J.a.prototype
u.ep=u.i
u=J.dM.prototype
u.er=u.i
u=P.j.prototype
u.eq=u.bu
u=W.V.prototype
u.by=u.ab
u=W.eS.prototype
u.eu=u.as
u=O.dU.prototype
u.cC=u.az
u=O.b8.prototype
u.cD=u.az
u=V.dS.prototype
u.es=u.aD
u.cB=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"pr","oB",14)
u(P,"ps","oC",14)
u(P,"pt","oD",14)
t(P,"mT","pp",3)
s(W,"pG",4,null,["$4"],["oF"],28,0)
s(W,"pH",4,null,["$4"],["oG"],28,0)
var m
r(m=E.ao.prototype,"gdY",0,0,null,["$1","$0"],["dZ","iQ"],1,0)
r(m,"ge_",0,0,null,["$1","$0"],["e0","iR"],1,0)
r(m,"gdW",0,0,null,["$1","$0"],["dX","iP"],1,0)
r(m,"gdU",0,0,null,["$1","$0"],["dV","iM"],1,0)
q(m,"giK","iL",9)
q(m,"giN","iO",9)
r(m=E.ee.prototype,"gcE",0,0,null,["$1","$0"],["cG","cF"],1,0)
p(m,"gj4","e8",3)
o(m=X.el.prototype,"gfP","fQ",16)
o(m,"gfC","fD",16)
o(m,"gfJ","fK",4)
o(m,"gfT","fU",31)
o(m,"gfR","fS",31)
o(m,"gfX","fY",4)
o(m,"gh0","h1",4)
o(m,"gfN","fO",4)
o(m,"gfZ","h_",4)
o(m,"gfL","fM",4)
o(m,"gh2","h3",36)
o(m,"gh4","h5",16)
o(m,"ghh","hi",15)
o(m,"ghd","he",15)
o(m,"ghf","hg",15)
r(m=D.dO.prototype,"gd3",0,0,null,["$1","$0"],["d4","fV"],1,0)
o(m,"gh7","h8",38)
q(m,"gfu","fv",26)
q(m,"ghb","hc",26)
r(D.bM.prototype,"gbM",0,0,null,["$1","$0"],["Z","fE"],1,0)
n(V.a3.prototype,"gn","b2",13)
n(V.K.prototype,"gn","b2",13)
n(V.br.prototype,"gn","b2",13)
r(m=U.cG.prototype,"gbd",0,0,null,["$1","$0"],["X","ao"],1,0)
q(m,"geG","eH",22)
q(m,"gh9","ha",22)
r(m=U.em.prototype,"gbd",0,0,null,["$1","$0"],["X","ao"],1,0)
o(m,"gfm","fn",2)
o(m,"gfo","fp",2)
o(m,"gfq","fs",2)
o(m,"gfh","fi",2)
o(m,"gfj","fk",2)
o(m,"ghR","hS",2)
o(m,"ghP","hQ",2)
o(m,"ghN","hO",2)
r(m=M.dG.prototype,"gap",0,0,null,["$1","$0"],["ax","eI"],1,0)
q(m,"gfF","fG",9)
q(m,"gfH","fI",9)
r(m=O.dT.prototype,"geK",0,0,null,["$1","$0"],["aa","eL"],1,0)
r(m,"ghu",0,0,null,["$1","$0"],["d8","hv"],1,0)
q(m,"gfw","fz",33)
q(m,"gfA","fB",33)
r(X.e1.prototype,"gcH",0,0,null,["$1","$0"],["aI","eO"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.P,null)
s(P.P,[H.le,J.a,J.au,P.eF,P.j,H.cJ,P.b5,H.c1,H.d2,H.fG,H.iT,P.bC,H.cz,H.eX,P.ad,H.hk,H.hm,H.hf,P.f2,P.bg,P.aN,P.ep,P.iy,P.cV,P.iz,P.bc,P.am,P.ko,P.k2,P.ch,P.eE,P.x,P.kg,P.hs,P.c_,P.hb,P.km,P.kl,P.S,P.ay,P.ab,P.b4,P.i0,P.e9,P.ex,P.h5,P.bD,P.b,P.y,P.O,P.aw,P.f,P.ag,P.ci,P.j7,P.k5,W.fJ,W.bR,W.F,W.e_,W.eS,W.kb,W.dI,W.aA,W.k1,W.fa,P.k7,P.f7,P.jX,P.R,O.a6,O.cK,E.fA,E.ao,E.i9,E.ee,Z.eo,Z.jv,Z.dx,Z.bE,Z.bQ,D.fD,D.c0,D.D,X.dy,X.dN,X.hh,X.hp,X.bG,X.hP,X.iP,X.el,D.dD,D.ac,D.e2,D.bM,V.a5,V.aD,V.fX,V.dV,V.ap,V.a9,V.a2,V.ba,V.e5,V.a3,V.K,V.br,U.em,M.dG,A.du,A.ft,A.an,A.aE,A.aH,A.aI,A.hz,A.cc,A.cd,A.cg,A.eh,A.j1,F.a8,F.h_,F.bo,F.hj,F.bJ,F.e7,F.ij,F.ik,F.il,F.ai,F.jj,F.jk,F.jn,F.jp,F.jq,F.jr,O.bN,O.dU,O.hA,T.iJ,V.bi,V.az,V.dS,V.i8,V.ii,V.cU,V.ef,V.cZ,V.iN,X.dz,X.eb,X.e1,V.bA,V.i6,V.im])
s(J.a,[J.he,J.dL,J.dM,J.aR,J.bF,J.bm,H.cN,H.bI,W.k,W.fq,W.bY,W.cy,W.b2,W.b3,W.W,W.er,W.fO,W.fP,W.et,W.dF,W.ev,W.fR,W.o,W.ey,W.aQ,W.h9,W.eA,W.bl,W.dQ,W.hJ,W.eG,W.eH,W.aS,W.eI,W.eL,W.aT,W.eP,W.eR,W.aV,W.eT,W.aW,W.eY,W.aJ,W.f0,W.iM,W.aY,W.f3,W.iR,W.jc,W.fb,W.fd,W.ff,W.fh,W.fj,P.b7,P.eC,P.b9,P.eN,P.i5,P.eZ,P.bd,P.f5,P.fu,P.eq,P.dv,P.e3,P.ca,P.e6,P.ec,P.ei,P.eV])
s(J.dM,[J.i1,J.bP,J.bn])
t(J.ld,J.aR)
s(J.bF,[J.dK,J.dJ])
t(P.ho,P.eF)
s(P.ho,[H.ej,W.jD,W.aq,P.h1])
t(H.t,H.ej)
s(P.j,[H.fU,H.ht,H.d4])
s(H.fU,[H.c5,H.hl])
s(P.b5,[H.hu,H.jw])
t(H.hv,H.c5)
t(H.fH,H.fG)
s(P.bC,[H.hY,H.hg,H.j5,H.iV,H.fC,H.ig,P.fs,P.e0,P.aP,P.j6,P.j3,P.cb,P.fF,P.fM])
s(H.cz,[H.l1,H.iF,H.kI,H.kJ,H.kK,P.jz,P.jy,P.jA,P.jB,P.kf,P.ke,P.jK,P.jO,P.jL,P.jM,P.jN,P.jR,P.jS,P.jQ,P.jP,P.iA,P.iB,P.ky,P.k_,P.jZ,P.k0,P.hn,P.hr,P.fS,P.fT,P.jb,P.j8,P.j9,P.ja,P.kh,P.ki,P.kk,P.kj,P.ks,P.kr,P.kt,P.ku,W.fV,W.hL,W.hN,W.ie,W.ix,W.jJ,W.hW,W.hV,W.k3,W.k4,W.kd,W.kn,P.k9,P.kA,P.h2,P.h3,P.fw,E.ia,E.ib,E.ic,E.iL,D.fY,D.fZ,F.kp,F.kB,F.kD,F.kE,F.kF,F.kY,F.kZ,F.l0,F.kM,F.kC,F.jt,F.js,F.jl,F.jm,O.hD,O.hE,O.hF,O.hG,O.hH,O.hI,T.iK,V.kX,V.i7,V.ip,V.io,V.iq,L.kO,L.kP,L.kQ,L.kR,L.kS,L.kT,L.kU])
s(H.iF,[H.iv,H.cw])
t(H.jx,P.fs)
t(P.hq,P.ad)
s(P.hq,[H.a1,W.jC])
t(H.dX,H.bI)
s(H.dX,[H.d9,H.db])
t(H.da,H.d9)
t(H.cO,H.da)
t(H.dc,H.db)
t(H.dY,H.dc)
s(H.dY,[H.hQ,H.hR,H.hS,H.hT,H.hU,H.dZ,H.cP])
t(P.jY,P.ko)
t(P.jW,P.k2)
t(P.f8,P.hs)
t(P.ek,P.f8)
s(P.c_,[P.fy,P.fW])
t(P.bB,P.iz)
s(P.bB,[P.fz,P.ha,P.jf,P.je])
t(P.jd,P.fW)
s(P.ab,[P.p,P.m])
s(P.aP,[P.c9,P.hc])
t(P.jF,P.ci)
s(W.k,[W.E,W.h0,W.cL,W.aU,W.dd,W.aX,W.aK,W.df,W.ju,W.d5,P.fx,P.bX])
s(W.E,[W.V,W.bz,W.d6])
s(W.V,[W.w,P.q])
s(W.w,[W.ds,W.fr,W.cv,W.by,W.bZ,W.aF,W.h4,W.cH,W.cI,W.ih,W.bb,W.ea,W.iD,W.iE,W.cX])
s(W.b2,[W.cA,W.fK,W.fL])
t(W.fI,W.b3)
t(W.cB,W.er)
t(W.eu,W.et)
t(W.dE,W.eu)
t(W.ew,W.ev)
t(W.fQ,W.ew)
t(W.aG,W.bY)
t(W.ez,W.ey)
t(W.cE,W.ez)
t(W.eB,W.eA)
t(W.c2,W.eB)
t(W.bO,W.o)
s(W.bO,[W.b6,W.ae,W.aZ])
t(W.hK,W.eG)
t(W.hM,W.eH)
t(W.eJ,W.eI)
t(W.hO,W.eJ)
t(W.eM,W.eL)
t(W.cQ,W.eM)
t(W.eQ,W.eP)
t(W.i3,W.eQ)
t(W.id,W.eR)
t(W.de,W.dd)
t(W.is,W.de)
t(W.eU,W.eT)
t(W.it,W.eU)
t(W.iw,W.eY)
t(W.f1,W.f0)
t(W.iG,W.f1)
t(W.dg,W.df)
t(W.iH,W.dg)
t(W.f4,W.f3)
t(W.iQ,W.f4)
t(W.bf,W.ae)
t(W.fc,W.fb)
t(W.jE,W.fc)
t(W.es,W.dF)
t(W.fe,W.fd)
t(W.jT,W.fe)
t(W.fg,W.ff)
t(W.eK,W.fg)
t(W.fi,W.fh)
t(W.k6,W.fi)
t(W.fk,W.fj)
t(W.ka,W.fk)
t(W.jG,W.jC)
t(W.jH,P.iy)
t(W.lp,W.jH)
t(W.jI,P.cV)
t(W.kc,W.eS)
t(P.k8,P.k7)
t(P.al,P.jX)
t(P.eD,P.eC)
t(P.hi,P.eD)
t(P.eO,P.eN)
t(P.hZ,P.eO)
t(P.cS,P.q)
t(P.f_,P.eZ)
t(P.iC,P.f_)
t(P.f6,P.f5)
t(P.iS,P.f6)
t(P.fv,P.eq)
t(P.i_,P.bX)
t(P.eW,P.eV)
t(P.iu,P.eW)
s(E.fA,[Z.dw,A.cT,T.cY])
s(D.D,[D.c3,D.c4,D.M,X.i4])
s(X.i4,[X.dR,X.bH,X.eg])
s(O.a6,[D.dO,U.cG])
s(D.fD,[U.fE,U.ak])
t(U.dA,U.ak)
t(A.hw,A.cT)
s(A.eh,[A.aL,A.iZ,A.j_,A.j0,A.iX,A.ah,A.iY,A.a_,A.d0,A.j2,A.d1,A.aB,A.ce,A.cf])
t(F.ir,F.h_)
t(F.iW,F.hj)
t(F.jo,F.jp)
t(F.hX,F.jq)
t(O.dT,O.bN)
s(O.dU,[O.hx,O.hy,O.b8])
s(O.b8,[O.hB,O.hC])
t(T.ed,T.cY)
t(T.iI,T.ed)
s(V.dS,[V.av,V.d_])
t(X.h6,X.eb)
s(V.bA,[V.fN,V.h7,V.h8,V.i2])
u(H.ej,H.d2)
u(H.d9,P.x)
u(H.da,H.c1)
u(H.db,P.x)
u(H.dc,H.c1)
u(P.eF,P.x)
u(P.f8,P.kg)
u(W.er,W.fJ)
u(W.et,P.x)
u(W.eu,W.F)
u(W.ev,P.x)
u(W.ew,W.F)
u(W.ey,P.x)
u(W.ez,W.F)
u(W.eA,P.x)
u(W.eB,W.F)
u(W.eG,P.ad)
u(W.eH,P.ad)
u(W.eI,P.x)
u(W.eJ,W.F)
u(W.eL,P.x)
u(W.eM,W.F)
u(W.eP,P.x)
u(W.eQ,W.F)
u(W.eR,P.ad)
u(W.dd,P.x)
u(W.de,W.F)
u(W.eT,P.x)
u(W.eU,W.F)
u(W.eY,P.ad)
u(W.f0,P.x)
u(W.f1,W.F)
u(W.df,P.x)
u(W.dg,W.F)
u(W.f3,P.x)
u(W.f4,W.F)
u(W.fb,P.x)
u(W.fc,W.F)
u(W.fd,P.x)
u(W.fe,W.F)
u(W.ff,P.x)
u(W.fg,W.F)
u(W.fh,P.x)
u(W.fi,W.F)
u(W.fj,P.x)
u(W.fk,W.F)
u(P.eC,P.x)
u(P.eD,W.F)
u(P.eN,P.x)
u(P.eO,W.F)
u(P.eZ,P.x)
u(P.f_,W.F)
u(P.f5,P.x)
u(P.f6,W.F)
u(P.eq,P.ad)
u(P.eV,P.x)
u(P.eW,W.F)})();(function constants(){var u=hunkHelpers.makeConstList
C.t=W.by.prototype
C.i=W.bZ.prototype
C.O=W.aF.prototype
C.R=J.a.prototype
C.a=J.aR.prototype
C.S=J.dJ.prototype
C.e=J.dK.prototype
C.j=J.dL.prototype
C.c=J.bF.prototype
C.b=J.bm.prototype
C.T=J.bn.prototype
C.Z=W.cQ.prototype
C.B=J.i1.prototype
C.d=P.ca.prototype
C.a_=W.bb.prototype
C.C=W.ea.prototype
C.r=J.bP.prototype
C.D=W.bf.prototype
C.E=W.d5.prototype
C.a0=new P.fz()
C.F=new P.fy()
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

C.M=new P.i0()
C.h=new P.jd()
C.N=new P.jf()
C.f=new P.jY()
C.o=new P.b4(0)
C.P=new P.b4(5e6)
C.Q=new P.hb("element",!0,!1,!1,!1)
C.w=H.d(u([127,2047,65535,1114111]),[P.m])
C.k=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.m])
C.U=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.l=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.m=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.V=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.x=H.d(u([]),[P.f])
C.W=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.y=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.n=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.z=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.X=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.A=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.p=H.d(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.q=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.Y=new H.fH(0,{},C.x,[P.f,P.f])})()
var v={mangledGlobalNames:{m:"int",p:"double",ab:"num",f:"String",S:"bool",O:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.O},{func:1,ret:-1,opt:[D.D]},{func:1,ret:-1,args:[D.D]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ae]},{func:1,ret:P.O,args:[,,]},{func:1,ret:P.O,args:[F.a8]},{func:1,ret:P.O,args:[F.ai,P.p,P.p]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[P.m,[P.j,E.ao]]},{func:1,ret:P.O,args:[D.D]},{func:1,ret:P.O,args:[W.o]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.p},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aZ]},{func:1,ret:-1,args:[W.o]},{func:1,ret:V.a2,args:[P.p]},{func:1,ret:P.O,args:[,]},{func:1,ret:P.f,args:[P.m]},{func:1,ret:P.p,args:[P.p]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:-1,args:[P.m,[P.j,U.ak]]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,args:[,]},{func:1,ret:-1,args:[P.m,[P.j,D.ac]]},{func:1,ret:P.S,args:[W.E]},{func:1,ret:P.S,args:[W.V,P.f,P.f,W.bR]},{func:1,ret:P.S,args:[W.aA]},{func:1,ret:P.S,args:[P.f]},{func:1,ret:-1,args:[W.b6]},{func:1,ret:P.O,args:[{func:1,ret:-1,args:[D.D]}]},{func:1,ret:-1,args:[P.m,[P.j,V.ap]]},{func:1,ret:W.V,args:[W.E]},{func:1,ret:-1,args:[W.E,W.E]},{func:1,ret:-1,args:[W.bf]},{func:1,args:[W.o]},{func:1,ret:P.S,args:[[P.j,D.ac]]},{func:1,ret:P.R,args:[,,]},{func:1,ret:P.O,args:[P.f,,]},{func:1,ret:P.O,args:[P.f]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.m]},{func:1,ret:[P.y,P.f,P.f],args:[[P.y,P.f,P.f],P.f]},{func:1,ret:[P.aN,,],args:[,]},{func:1,ret:P.O,args:[,],opt:[P.aw]},{func:1,ret:P.R,args:[P.m]},{func:1,ret:P.O,args:[{func:1,ret:-1}]},{func:1,ret:P.m,args:[A.aE,A.aE]},{func:1,ret:P.m,args:[A.aH,A.aH]},{func:1,ret:P.m,args:[A.aI,A.aI]},{func:1,args:[P.f]},{func:1,ret:P.O,args:[P.bc]},{func:1,ret:P.S,args:[V.bA]},{func:1,args:[,P.f]},{func:1,ret:P.O,args:[P.ab]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b1=0
$.cx=null
$.lS=null
$.lt=!1
$.n_=null
$.mR=null
$.n6=null
$.kG=null
$.kL=null
$.lE=null
$.ck=null
$.dk=null
$.dl=null
$.lu=!1
$.a0=C.f
$.ax=[]
$.bk=null
$.l8=null
$.lY=null
$.lX=null
$.d8=P.lg(P.f,P.bD)
$.m5=null
$.m9=null
$.bL=null
$.me=null
$.mr=null
$.mu=null
$.mt=null
$.jg=null
$.jh=null
$.ji=null
$.ms=null
$.mx=null
$.m8=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"q3","nb",function(){return H.mZ("_$dart_dartClosure")})
u($,"q4","lK",function(){return H.mZ("_$dart_js")})
u($,"qa","nc",function(){return H.be(H.iU({
toString:function(){return"$receiver$"}}))})
u($,"qb","nd",function(){return H.be(H.iU({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"qc","ne",function(){return H.be(H.iU(null))})
u($,"qd","nf",function(){return H.be(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qg","ni",function(){return H.be(H.iU(void 0))})
u($,"qh","nj",function(){return H.be(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qf","nh",function(){return H.be(H.ml(null))})
u($,"qe","ng",function(){return H.be(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"qj","nl",function(){return H.be(H.ml(void 0))})
u($,"qi","nk",function(){return H.be(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qA","lL",function(){return P.oA()})
u($,"qm","nm",function(){return P.ow()})
u($,"qB","nq",function(){return H.o4(H.cj(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))})
u($,"qD","ns",function(){return P.oi("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qE","nt",function(){return P.oZ()})
u($,"qC","nr",function(){return P.m_(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"qt","np",function(){return Z.aM(0)})
u($,"qn","nn",function(){return Z.aM(511)})
u($,"qv","bw",function(){return Z.aM(1)})
u($,"qu","bv",function(){return Z.aM(2)})
u($,"qp","bu",function(){return Z.aM(4)})
u($,"qw","bV",function(){return Z.aM(8)})
u($,"qx","bW",function(){return Z.aM(16)})
u($,"qq","dn",function(){return Z.aM(32)})
u($,"qr","dp",function(){return Z.aM(64)})
u($,"qs","no",function(){return Z.aM(96)})
u($,"qy","cu",function(){return Z.aM(128)})
u($,"qo","bt",function(){return Z.aM(256)})
u($,"q2","na",function(){return new V.fX(1e-9)})
u($,"q1","L",function(){return $.na()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cN,DataView:H.bI,ArrayBufferView:H.bI,Float32Array:H.cO,Float64Array:H.cO,Int16Array:H.hQ,Int32Array:H.hR,Int8Array:H.hS,Uint16Array:H.hT,Uint32Array:H.hU,Uint8ClampedArray:H.dZ,CanvasPixelArray:H.dZ,Uint8Array:H.cP,HTMLAudioElement:W.w,HTMLBRElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLLIElement:W.w,HTMLLabelElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMediaElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableColElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLVideoElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,AccessibleNodeList:W.fq,HTMLAnchorElement:W.ds,HTMLAreaElement:W.fr,HTMLBaseElement:W.cv,Blob:W.bY,HTMLBodyElement:W.by,HTMLCanvasElement:W.bZ,CanvasRenderingContext2D:W.cy,CDATASection:W.bz,CharacterData:W.bz,Comment:W.bz,ProcessingInstruction:W.bz,Text:W.bz,CSSNumericValue:W.cA,CSSUnitValue:W.cA,CSSPerspective:W.fI,CSSCharsetRule:W.W,CSSConditionRule:W.W,CSSFontFaceRule:W.W,CSSGroupingRule:W.W,CSSImportRule:W.W,CSSKeyframeRule:W.W,MozCSSKeyframeRule:W.W,WebKitCSSKeyframeRule:W.W,CSSKeyframesRule:W.W,MozCSSKeyframesRule:W.W,WebKitCSSKeyframesRule:W.W,CSSMediaRule:W.W,CSSNamespaceRule:W.W,CSSPageRule:W.W,CSSRule:W.W,CSSStyleRule:W.W,CSSSupportsRule:W.W,CSSViewportRule:W.W,CSSStyleDeclaration:W.cB,MSStyleCSSProperties:W.cB,CSS2Properties:W.cB,CSSImageValue:W.b2,CSSKeywordValue:W.b2,CSSPositionValue:W.b2,CSSResourceValue:W.b2,CSSURLImageValue:W.b2,CSSStyleValue:W.b2,CSSMatrixComponent:W.b3,CSSRotation:W.b3,CSSScale:W.b3,CSSSkew:W.b3,CSSTranslation:W.b3,CSSTransformComponent:W.b3,CSSTransformValue:W.fK,CSSUnparsedValue:W.fL,DataTransferItemList:W.fO,HTMLDivElement:W.aF,DOMException:W.fP,ClientRectList:W.dE,DOMRectList:W.dE,DOMRectReadOnly:W.dF,DOMStringList:W.fQ,DOMTokenList:W.fR,Element:W.V,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.k,Accelerometer:W.k,AccessibleNode:W.k,AmbientLightSensor:W.k,Animation:W.k,ApplicationCache:W.k,DOMApplicationCache:W.k,OfflineResourceList:W.k,BackgroundFetchRegistration:W.k,BatteryManager:W.k,BroadcastChannel:W.k,CanvasCaptureMediaStreamTrack:W.k,DedicatedWorkerGlobalScope:W.k,EventSource:W.k,FileReader:W.k,FontFaceSet:W.k,Gyroscope:W.k,XMLHttpRequest:W.k,XMLHttpRequestEventTarget:W.k,XMLHttpRequestUpload:W.k,LinearAccelerationSensor:W.k,Magnetometer:W.k,MediaDevices:W.k,MediaKeySession:W.k,MediaQueryList:W.k,MediaRecorder:W.k,MediaSource:W.k,MediaStream:W.k,MediaStreamTrack:W.k,MIDIAccess:W.k,MIDIInput:W.k,MIDIOutput:W.k,MIDIPort:W.k,NetworkInformation:W.k,Notification:W.k,OffscreenCanvas:W.k,OrientationSensor:W.k,PaymentRequest:W.k,Performance:W.k,PermissionStatus:W.k,PresentationAvailability:W.k,PresentationConnection:W.k,PresentationConnectionList:W.k,PresentationRequest:W.k,RelativeOrientationSensor:W.k,RemotePlayback:W.k,RTCDataChannel:W.k,DataChannel:W.k,RTCDTMFSender:W.k,RTCPeerConnection:W.k,webkitRTCPeerConnection:W.k,mozRTCPeerConnection:W.k,ScreenOrientation:W.k,Sensor:W.k,ServiceWorker:W.k,ServiceWorkerContainer:W.k,ServiceWorkerGlobalScope:W.k,ServiceWorkerRegistration:W.k,SharedWorker:W.k,SharedWorkerGlobalScope:W.k,SpeechRecognition:W.k,SpeechSynthesis:W.k,SpeechSynthesisUtterance:W.k,VR:W.k,VRDevice:W.k,VRDisplay:W.k,VRSession:W.k,VisualViewport:W.k,WebSocket:W.k,Worker:W.k,WorkerGlobalScope:W.k,WorkerPerformance:W.k,BluetoothDevice:W.k,BluetoothRemoteGATTCharacteristic:W.k,Clipboard:W.k,MojoInterfaceInterceptor:W.k,USB:W.k,IDBDatabase:W.k,IDBOpenDBRequest:W.k,IDBVersionChangeRequest:W.k,IDBRequest:W.k,IDBTransaction:W.k,AnalyserNode:W.k,RealtimeAnalyserNode:W.k,AudioBufferSourceNode:W.k,AudioDestinationNode:W.k,AudioNode:W.k,AudioScheduledSourceNode:W.k,AudioWorkletNode:W.k,BiquadFilterNode:W.k,ChannelMergerNode:W.k,AudioChannelMerger:W.k,ChannelSplitterNode:W.k,AudioChannelSplitter:W.k,ConstantSourceNode:W.k,ConvolverNode:W.k,DelayNode:W.k,DynamicsCompressorNode:W.k,GainNode:W.k,AudioGainNode:W.k,IIRFilterNode:W.k,MediaElementAudioSourceNode:W.k,MediaStreamAudioDestinationNode:W.k,MediaStreamAudioSourceNode:W.k,OscillatorNode:W.k,Oscillator:W.k,PannerNode:W.k,AudioPannerNode:W.k,webkitAudioPannerNode:W.k,ScriptProcessorNode:W.k,JavaScriptAudioNode:W.k,StereoPannerNode:W.k,WaveShaperNode:W.k,EventTarget:W.k,File:W.aG,FileList:W.cE,FileWriter:W.h0,HTMLFormElement:W.h4,Gamepad:W.aQ,History:W.h9,HTMLCollection:W.c2,HTMLFormControlsCollection:W.c2,HTMLOptionsCollection:W.c2,ImageData:W.bl,HTMLImageElement:W.cH,HTMLInputElement:W.cI,KeyboardEvent:W.b6,Location:W.dQ,MediaList:W.hJ,MessagePort:W.cL,MIDIInputMap:W.hK,MIDIOutputMap:W.hM,MimeType:W.aS,MimeTypeArray:W.hO,PointerEvent:W.ae,MouseEvent:W.ae,DragEvent:W.ae,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,DocumentType:W.E,Node:W.E,NodeList:W.cQ,RadioNodeList:W.cQ,Plugin:W.aT,PluginArray:W.i3,RTCStatsReport:W.id,HTMLSelectElement:W.ih,SourceBuffer:W.aU,SourceBufferList:W.is,SpeechGrammar:W.aV,SpeechGrammarList:W.it,SpeechRecognitionResult:W.aW,Storage:W.iw,CSSStyleSheet:W.aJ,StyleSheet:W.aJ,HTMLTableCellElement:W.bb,HTMLTableDataCellElement:W.bb,HTMLTableHeaderCellElement:W.bb,HTMLTableElement:W.ea,HTMLTableRowElement:W.iD,HTMLTableSectionElement:W.iE,HTMLTemplateElement:W.cX,TextTrack:W.aX,TextTrackCue:W.aK,VTTCue:W.aK,TextTrackCueList:W.iG,TextTrackList:W.iH,TimeRanges:W.iM,Touch:W.aY,TouchEvent:W.aZ,TouchList:W.iQ,TrackDefaultList:W.iR,CompositionEvent:W.bO,FocusEvent:W.bO,TextEvent:W.bO,UIEvent:W.bO,URL:W.jc,VideoTrackList:W.ju,WheelEvent:W.bf,Window:W.d5,DOMWindow:W.d5,Attr:W.d6,CSSRuleList:W.jE,ClientRect:W.es,DOMRect:W.es,GamepadList:W.jT,NamedNodeMap:W.eK,MozNamedAttrMap:W.eK,SpeechRecognitionResultList:W.k6,StyleSheetList:W.ka,SVGLength:P.b7,SVGLengthList:P.hi,SVGNumber:P.b9,SVGNumberList:P.hZ,SVGPointList:P.i5,SVGScriptElement:P.cS,SVGStringList:P.iC,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.bd,SVGTransformList:P.iS,AudioBuffer:P.fu,AudioParamMap:P.fv,AudioTrackList:P.fx,AudioContext:P.bX,webkitAudioContext:P.bX,BaseAudioContext:P.bX,OfflineAudioContext:P.i_,WebGLBuffer:P.dv,WebGLProgram:P.e3,WebGL2RenderingContext:P.ca,WebGLShader:P.e6,WebGLTexture:P.ec,WebGLUniformLocation:P.ei,SQLResultSetRowList:P.iu})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dX.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
H.da.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
H.dY.$nativeSuperclassTag="ArrayBufferView"
W.dd.$nativeSuperclassTag="EventTarget"
W.de.$nativeSuperclassTag="EventTarget"
W.df.$nativeSuperclassTag="EventTarget"
W.dg.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(L.n2,[])
else L.n2([])})})()
//# sourceMappingURL=test.dart.js.map
