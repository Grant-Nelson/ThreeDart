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
a[c]=function(){a[c]=function(){H.pK(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lx(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={l9:function l9(){},
kK:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
nP:function(){return new P.iH("No element")},
ee:function(a,b,c,d,e){H.h(a,"$ib",[e],"$ab")
H.o(d,{func:1,ret:P.j,args:[e,e]})
if(c-b<=32)H.oi(a,b,c,d,e)
else H.oh(a,b,c,d,e)},
oi:function(a,b,c,d,e){var u,t,s,r,q
H.h(a,"$ib",[e],"$ab")
H.o(d,{func:1,ret:P.j,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.e(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.e(a,r)
r=J.b7(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.e(a,q)
C.a.j(a,s,a[q])
s=q}C.a.j(a,s,t)}},
oh:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.h(a2,"$ib",[a6],"$ab")
H.o(a5,{func:1,ret:P.j,args:[a6,a6]})
u=C.d.a6(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.d.a6(a3+a4,2)
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
if(J.b7(a5.$2(n,m),0)){i=m
m=n
n=i}if(J.b7(a5.$2(k,j),0)){i=j
j=k
k=i}if(J.b7(a5.$2(n,l),0)){i=l
l=n
n=i}if(J.b7(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.b7(a5.$2(n,k),0)){i=k
k=n
n=i}if(J.b7(a5.$2(l,k),0)){i=k
k=l
l=i}if(J.b7(a5.$2(m,j),0)){i=j
j=m
m=i}if(J.b7(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.b7(a5.$2(k,j),0)){i=j
j=k
k=i}C.a.j(a2,t,n)
C.a.j(a2,r,l)
C.a.j(a2,s,j)
if(a3<0||a3>=a2.length)return H.e(a2,a3)
C.a.j(a2,q,a2[a3])
if(a4<0||a4>=a2.length)return H.e(a2,a4)
C.a.j(a2,p,a2[a4])
h=a3+1
g=a4-1
if(J.V(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.e(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.C()
if(d<0){if(f!==h){if(h>=a2.length)return H.e(a2,h)
C.a.j(a2,f,a2[h])
C.a.j(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.ab()
if(d>0){--g
continue}else{c=g-1
o=a2.length
if(d<0){if(h>=o)return H.e(a2,h)
C.a.j(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.e(a2,g)
C.a.j(a2,h,a2[g])
C.a.j(a2,g,e)
g=c
h=b
break}else{if(g>=o)return H.e(a2,g)
C.a.j(a2,f,a2[g])
C.a.j(a2,g,e)
g=c
break}}}}a=!0}else{for(f=h;f<=g;++f){if(f>=a2.length)return H.e(a2,f)
e=a2[f]
a0=a5.$2(e,m)
if(typeof a0!=="number")return a0.C()
if(a0<0){if(f!==h){if(h>=a2.length)return H.e(a2,h)
C.a.j(a2,f,a2[h])
C.a.j(a2,h,e)}++h}else{a1=a5.$2(e,k)
if(typeof a1!=="number")return a1.ab()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.ab()
if(d>0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.C()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.e(a2,h)
C.a.j(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.e(a2,g)
C.a.j(a2,h,a2[g])
C.a.j(a2,g,e)
h=b}else{if(g>=o)return H.e(a2,g)
C.a.j(a2,f,a2[g])
C.a.j(a2,g,e)}g=c
break}}}}a=!1}o=h-1
if(o>=a2.length)return H.e(a2,o)
C.a.j(a2,a3,a2[o])
C.a.j(a2,o,m)
o=g+1
if(o<0||o>=a2.length)return H.e(a2,o)
C.a.j(a2,a4,a2[o])
C.a.j(a2,o,k)
H.ee(a2,a3,h-2,a5,a6)
H.ee(a2,g+2,a4,a5,a6)
if(a)return
if(h<t&&g>s){while(!0){if(h>=a2.length)return H.e(a2,h)
if(!J.V(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.e(a2,g)
if(!J.V(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.e(a2,f)
e=a2[f]
if(a5.$2(e,m)===0){if(f!==h){if(h>=a2.length)return H.e(a2,h)
C.a.j(a2,f,a2[h])
C.a.j(a2,h,e)}++h}else if(a5.$2(e,k)===0)for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
if(a5.$2(a2[g],k)===0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.C()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.e(a2,h)
C.a.j(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.e(a2,g)
C.a.j(a2,h,a2[g])
C.a.j(a2,g,e)
h=b}else{if(g>=o)return H.e(a2,g)
C.a.j(a2,f,a2[g])
C.a.j(a2,g,e)}g=c
break}}}H.ee(a2,h,g,a5,a6)}else H.ee(a2,h,g,a5,a6)},
a8:function a8(a){this.a=a},
h7:function h7(){},
dU:function dU(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hB:function hB(a,b,c){this.a=a
this.b=b
this.$ti=c},
hC:function hC(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
jI:function jI(a,b,c){this.a=a
this.b=b
this.$ti=c},
jJ:function jJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
cf:function cf(){},
de:function de(){},
eo:function eo(){},
nI:function(){throw H.f(P.I("Cannot modify unmodifiable Map"))},
cH:function(a){var u,t=H.N(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
pu:function(a){return v.types[H.a0(a)]},
pz:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.S(a).$iM},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.b8(a)
if(typeof u!=="string")throw H.f(H.ay(a))
return u},
d2:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mb:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.e(p,3)
u=H.N(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.f(P.ak(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.G(s,q)|32)>t)return}return parseInt(a,b)},
co:function(a){return H.o0(a)+H.lu(H.c2(a),0,null)},
o0:function(a){var u,t,s,r,q,p,o,n=J.S(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.P||!!n.$ic0){r=C.r(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cH(t.length>1&&C.b.G(t,0)===36?C.b.av(t,1):t)},
o1:function(){if(!!self.location)return self.location.href
return},
ma:function(a){var u,t,s,r,q
H.fq(a)
u=J.aO(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
o9:function(a){var u,t,s,r=H.c([],[P.j])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.z)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.ay(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.bc(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.f(H.ay(s))}return H.ma(r)},
mc:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.ay(s))
if(s<0)throw H.f(H.ay(s))
if(s>65535)return H.o9(a)}return H.ma(a)},
oa:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
e7:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.bc(u,10))>>>0,56320|u&1023)}}throw H.f(P.ak(a,0,1114111,null,null))},
cn:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o8:function(a){var u=H.cn(a).getFullYear()+0
return u},
o6:function(a){var u=H.cn(a).getMonth()+1
return u},
o2:function(a){var u=H.cn(a).getDate()+0
return u},
o3:function(a){var u=H.cn(a).getHours()+0
return u},
o5:function(a){var u=H.cn(a).getMinutes()+0
return u},
o7:function(a){var u=H.cn(a).getSeconds()+0
return u},
o4:function(a){var u=H.cn(a).getMilliseconds()+0
return u},
d:function(a){throw H.f(H.ay(a))},
e:function(a,b){if(a==null)J.aO(a)
throw H.f(H.bB(a,b))},
bB:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.b9(!0,b,s,null)
u=H.a0(J.aO(a))
if(!(b<0)){if(typeof u!=="number")return H.d(u)
t=b>=u}else t=!0
if(t)return P.W(b,a,s,null,u)
return P.ih(b,s)},
pp:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bW(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bW(a,c,!0,b,"end",u)
return new P.b9(!0,b,"end",null)},
ay:function(a){return new P.b9(!0,a,null,null)},
cA:function(a){if(typeof a!=="number")throw H.f(H.ay(a))
return a},
f:function(a){var u
if(a==null)a=new P.e2()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.n6})
u.name=""}else u.toString=H.n6
return u},
n6:function(){return J.b8(this.dartException)},
B:function(a){throw H.f(a)},
z:function(a){throw H.f(P.cb(a))},
bo:function(a){var u,t,s,r,q,p
a=H.n4(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.l])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.j8(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
j9:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mk:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m6:function(a,b){return new H.i2(a,b==null?null:b.method)},
la:function(a,b){var u=b==null,t=u?null:b.method
return new H.hq(a,t,u?null:b.receiver)},
b3:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kT(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.bc(t,16)&8191)===10)switch(s){case 438:return f.$1(H.la(H.m(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.m6(H.m(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.nd()
q=$.ne()
p=$.nf()
o=$.ng()
n=$.nj()
m=$.nk()
l=$.ni()
$.nh()
k=$.nm()
j=$.nl()
i=r.ar(u)
if(i!=null)return f.$1(H.la(H.N(u),i))
else{i=q.ar(u)
if(i!=null){i.method="call"
return f.$1(H.la(H.N(u),i))}else{i=p.ar(u)
if(i==null){i=o.ar(u)
if(i==null){i=n.ar(u)
if(i==null){i=m.ar(u)
if(i==null){i=l.ar(u)
if(i==null){i=o.ar(u)
if(i==null){i=k.ar(u)
if(i==null){i=j.ar(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.m6(H.N(u),i))}}return f.$1(new H.jk(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.eg()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.b9(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.eg()
return a},
cE:function(a){var u
if(a==null)return new H.f1(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f1(a)},
mV:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.j(0,a[u],a[t])}return b},
py:function(a,b,c,d,e,f){H.i(a,"$il5")
switch(H.a0(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.E("Unsupported number of arguments for wrapped closure"))},
cB:function(a,b){var u
H.a0(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.py)
a.$identity=u
return u},
nH:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.iJ().constructor.prototype):Object.create(new H.cJ(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ba
if(typeof t!=="number")return t.m()
$.ba=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.lU(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.pu,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.lT:H.l2
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.f("Error in reflectionInfo.")
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
nE:function(a,b,c,d){var u=H.l2
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lU:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nG(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nE(t,!r,u,b)
if(t===0){r=$.ba
if(typeof r!=="number")return r.m()
$.ba=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cK
return new Function(r+H.m(q==null?$.cK=H.fO("self"):q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ba
if(typeof r!=="number")return r.m()
$.ba=r+1
o+=r
r="return function("+o+"){return this."
q=$.cK
return new Function(r+H.m(q==null?$.cK=H.fO("self"):q)+"."+H.m(u)+"("+o+");}")()},
nF:function(a,b,c,d){var u=H.l2,t=H.lT
switch(b?-1:a){case 0:throw H.f(H.of("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nG:function(a,b){var u,t,s,r,q,p,o,n=$.cK
if(n==null)n=$.cK=H.fO("self")
u=$.lS
if(u==null)u=$.lS=H.fO("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nF(s,!q,t,b)
if(s===1){n="return function(){return this."+H.m(n)+"."+H.m(t)+"(this."+H.m(u)+");"
u=$.ba
if(typeof u!=="number")return u.m()
$.ba=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.m(n)+"."+H.m(t)+"(this."+H.m(u)+", "+o+");"
u=$.ba
if(typeof u!=="number")return u.m()
$.ba=u+1
return new Function(n+u+"}")()},
lx:function(a,b,c,d,e,f,g){return H.nH(a,b,H.a0(c),d,!!e,!!f,g)},
l2:function(a){return a.a},
lT:function(a){return a.c},
fO:function(a){var u,t,s,r=new H.cJ("self","target","receiver","name"),q=J.l7(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
G:function(a){if(a==null)H.pi("boolean expression must not be null")
return a},
N:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.b1(a,"String"))},
pq:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.b1(a,"double"))},
n0:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.b1(a,"num"))},
mT:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.b1(a,"bool"))},
a0:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.b1(a,"int"))},
n2:function(a,b){throw H.f(H.b1(a,H.cH(H.N(b).substring(2))))},
pF:function(a,b){throw H.f(H.nC(a,H.cH(H.N(b).substring(2))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.S(a)[b])return a
H.n2(a,b)},
t:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.S(a)[b]
else u=!0
if(u)return a
H.pF(a,b)},
fq:function(a){if(a==null)return a
if(!!J.S(a).$ib)return a
throw H.f(H.b1(a,"List<dynamic>"))},
mZ:function(a,b){var u
if(a==null)return a
u=J.S(a)
if(!!u.$ib)return a
if(u[b])return a
H.n2(a,b)},
mU:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a0(u)]
else return a.$S()}return},
fp:function(a,b){var u
if(typeof a=="function")return!0
u=H.mU(J.S(a))
if(u==null)return!1
return H.mI(u,null,b,null)},
o:function(a,b){var u,t
if(a==null)return a
if($.lr)return a
$.lr=!0
try{if(H.fp(a,b))return a
u=H.kQ(b)
t=H.b1(a,u)
throw H.f(t)}finally{$.lr=!1}},
ly:function(a,b){if(a!=null&&!H.lw(a,b))H.B(H.b1(a,H.kQ(b)))
return a},
b1:function(a,b){return new H.ja("TypeError: "+P.dL(a)+": type '"+H.mO(a)+"' is not a subtype of type '"+b+"'")},
nC:function(a,b){return new H.fP("CastError: "+P.dL(a)+": type '"+H.mO(a)+"' is not a subtype of type '"+b+"'")},
mO:function(a){var u,t=J.S(a)
if(!!t.$icN){u=H.mU(t)
if(u!=null)return H.kQ(u)
return"Closure"}return H.co(a)},
pi:function(a){throw H.f(new H.jK(a))},
pK:function(a){throw H.f(new P.h0(H.N(a)))},
of:function(a){return new H.iq(a)},
mW:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
c2:function(a){if(a==null)return
return a.$ti},
qS:function(a,b,c){return H.cG(a["$a"+H.m(c)],H.c2(b))},
cD:function(a,b,c,d){var u
H.N(c)
H.a0(d)
u=H.cG(a["$a"+H.m(c)],H.c2(b))
return u==null?null:u[d]},
aD:function(a,b,c){var u
H.N(b)
H.a0(c)
u=H.cG(a["$a"+H.m(b)],H.c2(a))
return u==null?null:u[c]},
v:function(a,b){var u
H.a0(b)
u=H.c2(a)
return u==null?null:u[b]},
kQ:function(a){return H.c1(a,null)},
c1:function(a,b){var u,t
H.h(b,"$ib",[P.l],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cH(a[0].name)+H.lu(a,1,b)
if(typeof a=="function")return H.cH(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a0(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.m(b[t])}if('func' in a)return H.oR(a,b)
if('futureOr' in a)return"FutureOr<"+H.c1("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oR:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.l]
H.h(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.e(a0,n)
p=C.b.m(p,a0[n])
m=u[q]
if(m!=null&&m!==P.Q)p+=" extends "+H.c1(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.c1(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.c1(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.c1(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.ps(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.N(b[h])
j=j+i+H.c1(e[d],a0)+(" "+H.m(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
lu:function(a,b,c){var u,t,s,r,q,p
H.h(c,"$ib",[P.l],"$ab")
if(a==null)return""
u=new P.aq("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.c1(p,c)}return"<"+u.i(0)+">"},
cG:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lv:function(a,b,c,d){var u,t
H.N(b)
H.fq(c)
H.N(d)
if(a==null)return!1
u=H.c2(a)
t=J.S(a)
if(t[b]==null)return!1
return H.mR(H.cG(t[d],u),null,c,null)},
h:function(a,b,c,d){H.N(b)
H.fq(c)
H.N(d)
if(a==null)return a
if(H.lv(a,b,c,d))return a
throw H.f(H.b1(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cH(b.substring(2))+H.lu(c,0,null),v.mangledGlobalNames)))},
mR:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aN(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aN(a[t],b,c[t],d))return!1
return!0},
qQ:function(a,b,c){return a.apply(b,H.cG(J.S(b)["$a"+H.m(c)],H.c2(b)))},
mY:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="Q"||a.name==="P"||a===-1||a===-2||H.mY(u)}return!1},
lw:function(a,b){var u,t
if(a==null)return b==null||b.name==="Q"||b.name==="P"||b===-1||b===-2||H.mY(b)
if(b==null||b===-1||b.name==="Q"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lw(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fp(a,b)}u=J.S(a).constructor
t=H.c2(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aN(u,null,b,null)},
D:function(a,b){if(a!=null&&!H.lw(a,b))throw H.f(H.b1(a,H.kQ(b)))
return a},
aN:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="Q"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="Q"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aN(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="P")return!0
if('func' in c)return H.mI(a,b,c,d)
if('func' in a)return c.name==="l5"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aN("type" in a?a.type:l,b,s,d)
else if(H.aN(a,b,s,d))return!0
else{if(!('$i'+"cR" in t.prototype))return!1
r=t.prototype["$a"+"cR"]
q=H.cG(r,u?a.slice(1):l)
return H.aN(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mR(H.cG(m,u),b,p,d)},
mI:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aN(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aN(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aN(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aN(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pD(h,b,g,d)},
pD:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aN(c[s],d,a[s],b))return!1}return!0},
qR:function(a,b,c){Object.defineProperty(a,H.N(b),{value:c,enumerable:false,writable:true,configurable:true})},
pA:function(a){var u,t,s,r,q=H.N($.mX.$1(a)),p=$.kG[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kO[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.N($.mQ.$2(a,q))
if(q!=null){p=$.kG[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kO[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kP(u)
$.kG[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kO[q]=u
return u}if(s==="-"){r=H.kP(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.n1(a,u)
if(s==="*")throw H.f(P.jj(q))
if(v.leafTags[q]===true){r=H.kP(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.n1(a,u)},
n1:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lC(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kP:function(a){return J.lC(a,!1,null,!!a.$iM)},
pC:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kP(u)
else return J.lC(u,c,null,null)},
pw:function(){if(!0===$.lB)return
$.lB=!0
H.px()},
px:function(){var u,t,s,r,q,p,o,n
$.kG=Object.create(null)
$.kO=Object.create(null)
H.pv()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.n3.$1(q)
if(p!=null){o=H.pC(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pv:function(){var u,t,s,r,q,p,o=C.C()
o=H.cz(C.D,H.cz(C.E,H.cz(C.t,H.cz(C.t,H.cz(C.F,H.cz(C.G,H.cz(C.H(C.r),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mX=new H.kL(r)
$.mQ=new H.kM(q)
$.n3=new H.kN(p)},
cz:function(a,b){return a(b)||b},
nR:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(P.a7("Illegal RegExp pattern ("+String(r)+")",a,null))},
pI:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
pr:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n4:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
n5:function(a,b,c){var u=H.pJ(a,b,c)
return u},
pJ:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n4(b),'g'),H.pr(c))},
fV:function fV(){},
fW:function fW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j8:function j8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i2:function i2(a,b){this.a=a
this.b=b},
hq:function hq(a,b,c){this.a=a
this.b=b
this.c=c},
jk:function jk(a){this.a=a},
kT:function kT(a){this.a=a},
f1:function f1(a){this.a=a
this.b=null},
cN:function cN(){},
iR:function iR(){},
iJ:function iJ(){},
cJ:function cJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ja:function ja(a){this.a=a},
fP:function fP(a){this.a=a},
iq:function iq(a){this.a=a},
jK:function jK(a){this.a=a},
X:function X(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ht:function ht(a,b){this.a=a
this.b=b
this.c=null},
dT:function dT(a,b){this.a=a
this.$ti=b},
hu:function hu(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kL:function kL(a){this.a=a},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
hp:function hp(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cx:function(a){return a},
nY:function(a){return new Int8Array(a)},
bs:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.bB(b,a))},
oP:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.pp(a,b,c))
return b},
cZ:function cZ(){},
bT:function bT(){},
dZ:function dZ(){},
d_:function d_(){},
e_:function e_(){},
hY:function hY(){},
hZ:function hZ(){},
i_:function i_(){},
i0:function i0(){},
i1:function i1(){},
e0:function e0(){},
cl:function cl(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
dm:function dm(){},
ps:function(a){return J.lX(a?Object.keys(a):[],null)},
pE:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lC:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kJ:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lB==null){H.pw()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.jj("Return interceptor for "+H.m(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lN()]
if(r!=null)return r
r=H.pA(a)
if(r!=null)return r
if(typeof a=="function")return C.Q
u=Object.getPrototypeOf(a)
if(u==null)return C.y
if(u===Object.prototype)return C.y
if(typeof s=="function"){Object.defineProperty(s,$.lN(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
nQ:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.l1(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.ak(a,0,4294967295,"length",null))
return J.lX(new Array(a),b)},
lX:function(a,b){return J.l7(H.c(a,[b]))},
l7:function(a){H.fq(a)
a.fixed$length=Array
return a},
S:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dO.prototype
return J.dN.prototype}if(typeof a=="string")return J.bQ.prototype
if(a==null)return J.dP.prototype
if(typeof a=="boolean")return J.ho.prototype
if(a.constructor==Array)return J.be.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.Q)return a
return J.kJ(a)},
bC:function(a){if(typeof a=="string")return J.bQ.prototype
if(a==null)return a
if(a.constructor==Array)return J.be.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.Q)return a
return J.kJ(a)},
kH:function(a){if(a==null)return a
if(a.constructor==Array)return J.be.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.Q)return a
return J.kJ(a)},
lz:function(a){if(typeof a=="number")return J.ci.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.c0.prototype
return a},
pt:function(a){if(typeof a=="number")return J.ci.prototype
if(typeof a=="string")return J.bQ.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.c0.prototype
return a},
lA:function(a){if(typeof a=="string")return J.bQ.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.c0.prototype
return a},
kI:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.Q)return a
return J.kJ(a)},
V:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.S(a).q(a,b)},
b7:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.lz(a).ab(a,b)},
dy:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pz(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bC(a).l(a,b)},
kX:function(a,b,c){return J.kH(a).j(a,b,c)},
nt:function(a,b){return J.lA(a).G(a,b)},
nu:function(a,b,c){return J.kI(a).iN(a,b,c)},
nv:function(a,b,c,d){return J.kI(a).jo(a,b,c,d)},
nw:function(a,b){return J.lA(a).Y(a,b)},
kY:function(a,b){return J.pt(a).bP(a,b)},
kZ:function(a,b){return J.kH(a).J(a,b)},
nx:function(a,b,c,d){return J.kI(a).el(a,b,c,d)},
l_:function(a){return J.lz(a).bS(a)},
lP:function(a,b){return J.kH(a).K(a,b)},
c4:function(a){return J.S(a).gH(a)},
c5:function(a){return J.kH(a).gZ(a)},
aO:function(a){return J.bC(a).gn(a)},
ny:function(a,b){return J.kI(a).kn(a,b)},
l0:function(a){return J.lz(a).aA(a)},
b8:function(a){return J.S(a).i(a)},
a:function a(){},
ho:function ho(){},
dP:function dP(){},
dQ:function dQ(){},
i7:function i7(){},
c0:function c0(){},
bR:function bR(){},
be:function be(a){this.$ti=a},
l8:function l8(a){this.$ti=a},
av:function av(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ci:function ci(){},
dO:function dO(){},
dN:function dN(){},
bQ:function bQ(){}},P={
ou:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pj()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cB(new P.jM(s),1)).observe(u,{childList:true})
return new P.jL(s,u,t)}else if(self.setImmediate!=null)return P.pk()
return P.pl()},
ov:function(a){self.scheduleImmediate(H.cB(new P.jN(H.o(a,{func:1,ret:-1})),0))},
ow:function(a){self.setImmediate(H.cB(new P.jO(H.o(a,{func:1,ret:-1})),0))},
ox:function(a){P.lh(C.k,H.o(a,{func:1,ret:-1}))},
lh:function(a,b){var u
H.o(b,{func:1,ret:-1})
u=C.d.a6(a.a,1000)
return P.oA(u<0?0:u,b)},
mj:function(a,b){var u
H.o(b,{func:1,ret:-1,args:[P.bm]})
u=C.d.a6(a.a,1000)
return P.oB(u<0?0:u,b)},
oA:function(a,b){var u=new P.f7()
u.fw(a,b)
return u},
oB:function(a,b){var u=new P.f7()
u.fz(a,b)
return u},
oy:function(a,b){var u,t,s
b.a=1
try{a.eR(new P.jX(b),new P.jY(b),null)}catch(s){u=H.b3(s)
t=H.cE(s)
P.pG(new P.jZ(b,u,t))}},
my:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.i(a.c,"$iaM")
if(u>=4){t=b.cn()
b.a=a.a
b.c=a.c
P.dh(b,t)}else{t=H.i(b.c,"$ibr")
b.a=2
b.c=a
a.dL(t)}},
dh:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.i(g.c,"$iat")
g=g.b
r=s.a
q=s.b
g.toString
P.kC(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.dh(h.a,b)}g=h.a
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
if(m){H.i(o,"$iat")
g=g.b
r=o.a
q=o.b
g.toString
P.kC(i,i,g,r,q)
return}l=$.Z
if(l!=n)$.Z=n
else l=i
g=b.c
if(g===8)new P.k2(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.k1(u,b,o).$0()}else if((g&2)!==0)new P.k0(h,u,b).$0()
if(l!=null)$.Z=l
g=u.b
if(!!J.S(g).$icR){if(g.a>=4){k=H.i(q.c,"$ibr")
q.c=null
b=q.bJ(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.my(g,q)
return}}j=b.b
k=H.i(j.c,"$ibr")
j.c=null
b=j.bJ(k)
g=u.a
r=u.b
if(!g){H.D(r,H.v(j,0))
j.a=4
j.c=r}else{H.i(r,"$iat")
j.a=8
j.c=r}h.a=j
g=j}},
pe:function(a,b){if(H.fp(a,{func:1,args:[P.Q,P.aw]}))return H.o(a,{func:1,ret:null,args:[P.Q,P.aw]})
if(H.fp(a,{func:1,args:[P.Q]}))return H.o(a,{func:1,ret:null,args:[P.Q]})
throw H.f(P.l1(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pd:function(){var u,t
for(;u=$.cy,u!=null;){$.dv=null
t=u.b
$.cy=t
if(t==null)$.du=null
u.a.$0()}},
ph:function(){$.ls=!0
try{P.pd()}finally{$.dv=null
$.ls=!1
if($.cy!=null)$.lO().$1(P.mS())}},
mN:function(a){var u=new P.ew(H.o(a,{func:1,ret:-1}))
if($.cy==null){$.cy=$.du=u
if(!$.ls)$.lO().$1(P.mS())}else $.du=$.du.b=u},
pg:function(a){var u,t,s
H.o(a,{func:1,ret:-1})
u=$.cy
if(u==null){P.mN(a)
$.dv=$.du
return}t=new P.ew(a)
s=$.dv
if(s==null){t.b=u
$.cy=$.dv=t}else{t.b=s.b
$.dv=s.b=t
if(t.b==null)$.du=t}},
pG:function(a){var u,t=null,s={func:1,ret:-1}
H.o(a,s)
u=$.Z
if(C.f===u){P.kE(t,t,C.f,a)
return}u.toString
P.kE(t,t,u,H.o(u.cv(a),s))},
lg:function(a,b){var u,t={func:1,ret:-1}
H.o(b,t)
u=$.Z
if(u===C.f){u.toString
return P.lh(a,b)}return P.lh(a,H.o(u.cv(b),t))},
j2:function(a,b){var u,t,s={func:1,ret:-1,args:[P.bm]}
H.o(b,s)
u=$.Z
if(u===C.f){u.toString
return P.mj(a,b)}t=u.dZ(b,P.bm)
$.Z.toString
return P.mj(a,H.o(t,s))},
kC:function(a,b,c,d,e){var u={}
u.a=d
P.pg(new P.kD(u,e))},
mJ:function(a,b,c,d,e){var u,t
H.o(d,{func:1,ret:e})
t=$.Z
if(t===c)return d.$0()
$.Z=c
u=t
try{t=d.$0()
return t}finally{$.Z=u}},
mK:function(a,b,c,d,e,f,g){var u,t
H.o(d,{func:1,ret:f,args:[g]})
H.D(e,g)
t=$.Z
if(t===c)return d.$1(e)
$.Z=c
u=t
try{t=d.$1(e)
return t}finally{$.Z=u}},
pf:function(a,b,c,d,e,f,g,h,i){var u,t
H.o(d,{func:1,ret:g,args:[h,i]})
H.D(e,h)
H.D(f,i)
t=$.Z
if(t===c)return d.$2(e,f)
$.Z=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Z=u}},
kE:function(a,b,c,d){var u
H.o(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.cv(d):c.jw(d,-1)
P.mN(d)},
jM:function jM(a){this.a=a},
jL:function jL(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function jN(a){this.a=a},
jO:function jO(a){this.a=a},
f7:function f7(){this.c=0},
kn:function kn(a,b){this.a=a
this.b=b},
km:function km(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
br:function br(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aM:function aM(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jW:function jW(a,b){this.a=a
this.b=b},
k_:function k_(a,b){this.a=a
this.b=b},
jX:function jX(a){this.a=a},
jY:function jY(a){this.a=a},
jZ:function jZ(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function k2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k3:function k3(a){this.a=a},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
ew:function ew(a){this.a=a
this.b=null},
iM:function iM(){},
iO:function iO(a,b){this.a=a
this.b=b},
iP:function iP(a,b){this.a=a
this.b=b},
d7:function d7(){},
iN:function iN(){},
bm:function bm(){},
at:function at(a,b){this.a=a
this.b=b},
kv:function kv(){},
kD:function kD(a,b){this.a=a
this.b=b},
kb:function kb(){},
kd:function kd(a,b,c){this.a=a
this.b=b
this.c=c},
kc:function kc(a,b){this.a=a
this.b=b},
ke:function ke(a,b,c){this.a=a
this.b=b
this.c=c},
nS:function(a,b,c){H.fq(a)
return H.h(H.mV(a,new H.X([b,c])),"$ilY",[b,c],"$alY")},
lZ:function(a,b){return new H.X([a,b])},
nT:function(a){return H.mV(a,new H.X([null,null]))},
nU:function(a){return new P.k8([a])},
lo:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mA:function(a,b,c){var u=new P.k9(a,b,[c])
u.c=a.e
return u},
nO:function(a,b,c){var u,t
if(P.lt(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.l])
C.a.h($.ax,a)
try{P.oT(a,u)}finally{if(0>=$.ax.length)return H.e($.ax,-1)
$.ax.pop()}t=P.mh(b,H.mZ(u,"$ik"),", ")+c
return t.charCodeAt(0)==0?t:t},
l6:function(a,b,c){var u,t
if(P.lt(a))return b+"..."+c
u=new P.aq(b)
C.a.h($.ax,a)
try{t=u
t.a=P.mh(t.a,a,", ")}finally{if(0>=$.ax.length)return H.e($.ax,-1)
$.ax.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lt:function(a){var u,t
for(u=$.ax.length,t=0;t<u;++t)if(a===$.ax[t])return!0
return!1},
oT:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.h(b,"$ib",[P.l],"$ab")
u=a.gZ(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.A())return
r=H.m(u.gP(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.A()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gP(u);++s
if(!u.A()){if(s<=4){C.a.h(b,H.m(o))
return}q=H.m(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gP(u);++s
for(;u.A();o=n,n=m){m=u.gP(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.m(o)
q=H.m(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
lc:function(a){var u,t={}
if(P.lt(a))return"{...}"
u=new P.aq("")
try{C.a.h($.ax,a)
u.a+="{"
t.a=!0
J.lP(a,new P.hz(t,u))
u.a+="}"}finally{if(0>=$.ax.length)return H.e($.ax,-1)
$.ax.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
k8:function k8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
di:function di(a){this.a=a
this.c=this.b=null},
k9:function k9(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hv:function hv(){},
y:function y(){},
hy:function hy(){},
hz:function hz(a,b){this.a=a
this.b=b},
an:function an(){},
ko:function ko(){},
hA:function hA(){},
ep:function ep(a,b){this.a=a
this.$ti=b},
kf:function kf(){},
eL:function eL(){},
fd:function fd(){},
oo:function(a,b,c,d){H.h(b,"$ib",[P.j],"$ab")
if(b instanceof Uint8Array)return P.op(!1,b,c,d)
return},
op:function(a,b,c,d){var u,t,s=$.nn()
if(s==null)return
u=0===c
if(u&&!0)return P.lk(s,b)
t=b.length
d=P.bX(c,d,t)
if(u&&d===t)return P.lk(s,b)
return P.lk(s,b.subarray(c,d))},
lk:function(a,b){if(P.or(b))return
return P.os(a,b)},
os:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.b3(t)}return},
or:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
oq:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.b3(t)}return},
mM:function(a,b,c){var u,t,s
H.h(a,"$ib",[P.j],"$ab")
for(u=J.bC(a),t=b;t<c;++t){s=u.l(a,t)
if(typeof s!=="number")return s.ak()
if((s&127)!==s)return t-b}return c-b},
lQ:function(a,b,c,d,e,f){if(C.d.b1(f,4)!==0)throw H.f(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.f(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.f(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
fL:function fL(){},
fM:function fM(){},
ca:function ca(){},
cc:function cc(){},
h8:function h8(){},
js:function js(){},
ju:function ju(){},
ku:function ku(a){this.b=0
this.c=a},
jt:function jt(a){this.a=a},
kt:function kt(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
cF:function(a,b,c){var u
H.o(b,{func:1,ret:P.j,args:[P.l]})
u=H.mb(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.f(P.a7(a,null,null))},
nM:function(a){if(a instanceof H.cN)return a.i(0)
return"Instance of '"+H.co(a)+"'"},
nV:function(a,b,c){var u,t
H.D(b,c)
u=J.nQ(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.j(u,t,b)
return H.h(u,"$ib",[c],"$ab")},
lb:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.c5(a);u.A();)C.a.h(s,H.D(u.gP(u),c))
if(b)return s
return H.h(J.l7(s),"$ib",t,"$ab")},
d8:function(a,b,c){var u,t=P.j
H.h(a,"$ik",[t],"$ak")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.h(a,"$ibe",[t],"$abe")
u=a.length
c=P.bX(b,c,u)
return H.mc(b>0||c<u?C.a.f6(a,b,c):a)}if(!!J.S(a).$icl)return H.oa(a,b,P.bX(b,c,a.length))
return P.oj(a,b,c)},
oj:function(a,b,c){var u,t,s,r,q=null
H.h(a,"$ik",[P.j],"$ak")
if(b<0)throw H.f(P.ak(b,0,J.aO(a),q,q))
u=c==null
if(!u&&c<b)throw H.f(P.ak(c,b,J.aO(a),q,q))
t=J.c5(a)
for(s=0;s<b;++s)if(!t.A())throw H.f(P.ak(b,0,s,q,q))
r=[]
if(u)for(;t.A();)r.push(t.gP(t))
else for(s=b;s<c;++s){if(!t.A())throw H.f(P.ak(c,b,s,q,q))
r.push(t.gP(t))}return H.mc(r)},
od:function(a){return new H.hp(a,H.nR(a,!1,!0,!1))},
mh:function(a,b,c){var u=J.c5(b)
if(!u.A())return a
if(c.length===0){do a+=H.m(u.gP(u))
while(u.A())}else{a+=H.m(u.gP(u))
for(;u.A();)a=a+c+H.m(u.gP(u))}return a},
mm:function(){var u=H.o1()
if(u!=null)return P.on(u)
throw H.f(P.I("'Uri.base' is not supported"))},
fe:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.h(a,"$ib",[P.j],"$ab")
if(c===C.h){u=$.nr().b
if(typeof b!=="string")H.B(H.ay(b))
u=u.test(b)}else u=!1
if(u)return b
H.D(b,H.aD(c,"ca",0))
t=c.gjO().cB(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.e7(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nJ:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nK:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dG:function(a){if(a>=10)return""+a
return"0"+a},
lV:function(a,b){return new P.aQ(1e6*b+1000*a)},
dL:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.b8(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nM(a)},
dz:function(a){return new P.b9(!1,null,null,a)},
l1:function(a,b,c){return new P.b9(!0,a,b,c)},
ob:function(a){var u=null
return new P.bW(u,u,!1,u,u,a)},
ih:function(a,b){return new P.bW(null,null,!0,a,b,"Value not in range")},
ak:function(a,b,c,d,e){return new P.bW(b,c,!0,a,d,"Invalid value")},
bX:function(a,b,c){if(0>a||a>c)throw H.f(P.ak(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.ak(b,a,c,"end",null))
return b}return c},
md:function(a,b){if(typeof a!=="number")return a.C()
if(a<0)throw H.f(P.ak(a,0,null,b,null))},
W:function(a,b,c,d,e){var u=H.a0(e==null?J.aO(b):e)
return new P.hm(u,!0,a,c,"Index out of range")},
I:function(a){return new P.jl(a)},
jj:function(a){return new P.ji(a)},
cb:function(a){return new P.fU(a)},
E:function(a){return new P.eE(a)},
a7:function(a,b,c){return new P.hi(a,b,c)},
dV:function(a,b,c){var u,t
H.o(b,{func:1,ret:c,args:[P.j]})
u=H.c([],[c])
C.a.sn(u,a)
for(t=0;t<a;++t)C.a.j(u,t,b.$1(t))
return u},
lE:function(a){H.pE(a)},
on:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.G(a,4)^58)*3|C.b.G(a,0)^100|C.b.G(a,1)^97|C.b.G(a,2)^116|C.b.G(a,3)^97)>>>0
if(u===0)return P.ml(e<e?C.b.w(a,0,e):a,5,f).geW()
else if(u===32)return P.ml(C.b.w(a,5,e),0,f).geW()}t=new Array(8)
t.fixed$length=Array
s=H.c(t,[P.j])
C.a.j(s,0,0)
C.a.j(s,1,-1)
C.a.j(s,2,-1)
C.a.j(s,7,-1)
C.a.j(s,3,0)
C.a.j(s,4,0)
C.a.j(s,5,e)
C.a.j(s,6,e)
if(P.mL(a,0,e,0,s)>=14)C.a.j(s,7,e)
r=s[1]
if(typeof r!=="number")return r.kE()
if(r>=0)if(P.mL(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.m()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.C()
if(typeof n!=="number")return H.d(n)
if(m<n)n=m
if(typeof o!=="number")return o.C()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.C()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.C()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.am(a,"..",o)))j=n>o+2&&C.b.am(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.am(a,"file",0)){if(q<=0){if(!C.b.am(a,"/",o)){i="file:///"
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
a=C.b.bi(a,o,n,"/");++e
n=h}k="file"}else if(C.b.am(a,"http",0)){if(t&&p+3===o&&C.b.am(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.bi(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.am(a,"https",0)){if(t&&p+4===o&&C.b.am(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.bi(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.w(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.kg(a,r,q,p,o,n,m,k)}return P.oC(a,0,e,r,q,p,o,n,m,k)},
mo:function(a){var u=P.l
return C.a.jQ(H.c(a.split("&"),[u]),P.lZ(u,u),new P.jq(C.h),[P.x,P.l,P.l])},
om:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jn(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.Y(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.cF(C.b.w(a,s,t),n,n)
if(typeof p!=="number")return p.ab()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.e(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.cF(C.b.w(a,s,c),n,n)
if(typeof p!=="number")return p.ab()
if(p>255)k.$2(l,s)
if(r>=u)return H.e(j,r)
j[r]=p
return j},
mn:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.jo(a)
t=new P.jp(u,a)
if(a.length<2)u.$1("address is too short")
s=H.c([],[P.j])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.Y(a,r)
if(n===58){if(r===b){++r
if(C.b.Y(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaY(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.om(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.d.bc(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
oC:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oJ(a,b,d)
else{if(d===b)P.ds(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oK(a,u,e-1):""
s=P.oG(a,e,f,!1)
if(typeof f!=="number")return f.m()
r=f+1
if(typeof g!=="number")return H.d(g)
q=r<g?P.oI(P.cF(C.b.w(a,r,g),new P.kp(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oH(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.C()
o=h<i?P.lp(a,h+1,i,n):n
return new P.cw(j,t,s,q,p,o,i<c?P.oF(a,i+1,c):n)},
mB:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
ds:function(a,b,c){throw H.f(P.a7(c,a,b))},
oI:function(a,b){if(a!=null&&a===P.mB(b))return
return a},
oG:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.Y(a,b)===91){if(typeof c!=="number")return c.p()
u=c-1
if(C.b.Y(a,u)!==93)P.ds(a,b,"Missing end `]` to match `[` in host")
P.mn(a,b+1,u)
return C.b.w(a,b,c).toLowerCase()}if(typeof c!=="number")return H.d(c)
t=b
for(;t<c;++t)if(C.b.Y(a,t)===58){P.mn(a,b,c)
return"["+a+"]"}return P.oM(a,b,c)},
oM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.d(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.Y(a,u)
if(q===37){p=P.mH(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.aq("")
n=C.b.w(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.w(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.w,o)
o=(C.w[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.aq("")
if(t<u){s.a+=C.b.w(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.m,o)
o=(C.m[o]&1<<(q&15))!==0}else o=!1
if(o)P.ds(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.Y(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.aq("")
n=C.b.w(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mC(q)
u+=l
t=u}}}}if(s==null)return C.b.w(a,b,c)
if(t<c){n=C.b.w(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oJ:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mE(C.b.G(a,b)))P.ds(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.G(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.o,r)
r=(C.o[r]&1<<(s&15))!==0}else r=!1
if(!r)P.ds(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.w(a,b,c)
return P.oD(t?a.toLowerCase():a)},
oD:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oK:function(a,b,c){return P.dt(a,b,c,C.S,!1)},
oH:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dt(a,b,c,C.x,!0):C.l.kT(d,new P.kq(),P.l).u(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.al(u,"/"))u="/"+u
return P.oL(u,e,f)},
oL:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.al(a,"/"))return P.oN(a,!u||c)
return P.oO(a)},
lp:function(a,b,c,d){var u,t={}
H.h(d,"$ix",[P.l,null],"$ax")
if(a!=null){if(d!=null)throw H.f(P.dz("Both query and queryParameters specified"))
return P.dt(a,b,c,C.n,!0)}if(d==null)return
u=new P.aq("")
t.a=""
d.K(0,new P.kr(new P.ks(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oF:function(a,b,c){return P.dt(a,b,c,C.n,!0)},
mH:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.Y(a,b+1)
t=C.b.Y(a,p)
s=H.kK(u)
r=H.kK(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.bc(q,4)
if(p>=8)return H.e(C.p,p)
p=(C.p[p]&1<<(q&15))!==0}else p=!1
if(p)return H.e7(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.w(a,b,b+3).toUpperCase()
return},
mC:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.c(u,[P.j])
C.a.j(t,0,37)
C.a.j(t,1,C.b.G(o,a>>>4))
C.a.j(t,2,C.b.G(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.c(u,[P.j])
for(q=0;--r,r>=0;s=128){p=C.d.iY(a,6*r)&63|s
C.a.j(t,q,37)
C.a.j(t,q+1,C.b.G(o,p>>>4))
C.a.j(t,q+2,C.b.G(o,p&15))
q+=3}}return P.d8(t,0,null)},
dt:function(a,b,c,d,e){var u=P.mG(a,b,c,H.h(d,"$ib",[P.j],"$ab"),e)
return u==null?C.b.w(a,b,c):u},
mG:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.h(d,"$ib",[P.j],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.C()
if(typeof c!=="number")return H.d(c)
if(!(t<c))break
c$0:{q=C.b.Y(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mH(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.m,p)
p=(C.m[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.ds(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.Y(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mC(q)}}if(r==null)r=new P.aq("")
r.a+=C.b.w(a,s,t)
r.a+=H.m(o)
if(typeof n!=="number")return H.d(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.C()
if(s<c)r.a+=C.b.w(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mF:function(a){if(C.b.al(a,"."))return!0
return C.b.es(a,"/.")!==-1},
oO:function(a){var u,t,s,r,q,p,o
if(!P.mF(a))return a
u=H.c([],[P.l])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.V(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.u(u,"/")},
oN:function(a,b){var u,t,s,r,q,p
if(!P.mF(a))return!b?P.mD(a):a
u=H.c([],[P.l])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaY(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaY(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.j(u,0,P.mD(u[0]))}return C.a.u(u,"/")},
mD:function(a){var u,t,s,r=a.length
if(r>=2&&P.mE(J.nt(a,0)))for(u=1;u<r;++u){t=C.b.G(a,u)
if(t===58)return C.b.w(a,0,u)+"%3A"+C.b.av(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.e(C.o,s)
s=(C.o[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oE:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.G(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.f(P.dz("Invalid URL encoding"))}}return u},
lq:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.G(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.w(a,b,c)
else r=new H.a8(C.b.w(a,b,c))}else{r=H.c([],[P.j])
for(s=a.length,q=b;q<c;++q){t=C.b.G(a,q)
if(t>127)throw H.f(P.dz("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.f(P.dz("Truncated URI"))
C.a.h(r,P.oE(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.h(r,"$ib",[P.j],"$ab")
return new P.jt(!1).cB(r)},
mE:function(a){var u=a|32
return 97<=u&&u<=122},
ml:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.j])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.G(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.f(P.a7(m,a,t))}}if(s<0&&t>b)throw H.f(P.a7(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.G(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaY(l)
if(r!==44||t!==p+7||!C.b.am(a,"base64",p+1))throw H.f(P.a7("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.B.jZ(0,a,o,u)
else{n=P.mG(a,o,u,C.n,!0)
if(n!=null)a=C.b.bi(a,o,u,n)}return new P.jm(a,l,c)},
oQ:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.dV(22,new P.kx(),P.R),n=new P.kw(o),m=new P.ky(),l=new P.kz(),k=H.i(n.$2(0,225),"$iR")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(14,225),"$iR")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(15,225),"$iR")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(1,225),"$iR")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(2,235),"$iR")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(3,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(4,229),"$iR")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(5,229),"$iR")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(6,231),"$iR")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(7,231),"$iR")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.i(n.$2(8,8),"$iR"),"]",5)
k=H.i(n.$2(9,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(16,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(17,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(10,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(18,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(19,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(11,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(12,236),"$iR")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.i(n.$2(13,237),"$iR")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.i(n.$2(20,245),"$iR"),"az",21)
k=H.i(n.$2(21,245),"$iR")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mL:function(a,b,c,d,e){var u,t,s,r,q
H.h(e,"$ib",[P.j],"$ab")
u=$.ns()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.b.G(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.j(e,q>>>5,t)}return d},
a4:function a4(){},
aA:function aA(a,b){this.a=a
this.b=b},
A:function A(){},
aQ:function aQ(a){this.a=a},
h5:function h5(){},
h6:function h6(){},
bN:function bN(){},
fF:function fF(){},
e2:function e2(){},
b9:function b9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bW:function bW(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hm:function hm(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
jl:function jl(a){this.a=a},
ji:function ji(a){this.a=a},
iH:function iH(a){this.a=a},
fU:function fU(a){this.a=a},
i6:function i6(){},
eg:function eg(){},
h0:function h0(a){this.a=a},
eE:function eE(a){this.a=a},
hi:function hi(a,b,c){this.a=a
this.b=b
this.c=c},
j:function j(){},
k:function k(){},
bd:function bd(){},
b:function b(){},
x:function x(){},
P:function P(){},
ab:function ab(){},
Q:function Q(){},
aw:function aw(){},
l:function l(){},
aq:function aq(a){this.a=a},
jq:function jq(a){this.a=a},
jn:function jn(a){this.a=a},
jo:function jo(a){this.a=a},
jp:function jp(a,b){this.a=a
this.b=b},
cw:function cw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
kp:function kp(a,b){this.a=a
this.b=b},
kq:function kq(){},
ks:function ks(a,b){this.a=a
this.b=b},
kr:function kr(a){this.a=a},
jm:function jm(a,b,c){this.a=a
this.b=b
this.c=c},
kx:function kx(){},
kw:function kw(a){this.a=a},
ky:function ky(){},
kz:function kz(){},
kg:function kg(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jS:function jS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
po:function(a){var u,t=J.S(a)
if(!!t.$ibt){u=t.ge4(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fc(a.data,a.height,a.width)},
pn:function(a){if(a instanceof P.fc)return{data:a.a,height:a.b,width:a.c}
return a},
bA:function(a){var u,t,s,r,q
if(a==null)return
u=P.lZ(P.l,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r){q=H.N(t[r])
u.j(0,q,a[q])}return u},
pm:function(a){var u={}
a.K(0,new P.kF(u))
return u},
ki:function ki(){},
kk:function kk(a,b){this.a=a
this.b=b},
fc:function fc(a,b,c){this.a=a
this.b=b
this.c=c},
kF:function kF(a){this.a=a},
kj:function kj(a,b){this.a=a
this.b=b},
he:function he(a,b){this.a=a
this.b=b},
hf:function hf(){},
hg:function hg(){},
k7:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oz:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k5:function k5(){},
ka:function ka(){},
ao:function ao(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bh:function bh(){},
hs:function hs(){},
bk:function bk(){},
i3:function i3(){},
ib:function ib(){},
iQ:function iQ(){},
q:function q(){},
bn:function bn(){},
j7:function j7(){},
eJ:function eJ(){},
eK:function eK(){},
eT:function eT(){},
eU:function eU(){},
f3:function f3(){},
f4:function f4(){},
fa:function fa(){},
fb:function fb(){},
R:function R(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(a){this.a=a},
fK:function fK(){},
c6:function c6(){},
i4:function i4(){},
ex:function ex(){},
dB:function dB(){},
e8:function e8(){},
cp:function cp(){},
ec:function ec(){},
ei:function ei(){},
en:function en(){},
iG:function iG(){},
f_:function f_(){},
f0:function f0(){}},W={
nz:function(){var u=document.createElement("a")
return u},
l3:function(){var u=document.createElement("canvas")
return u},
nL:function(a){H.i(a,"$in")
return"wheel"},
k6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mz:function(a,b,c,d){var u=W.k6(W.k6(W.k6(W.k6(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
af:function(a,b,c,d,e){var u=W.mP(new W.jV(c),W.p)
if(u!=null&&!0)J.nv(a,b,u,!1)
return new W.jU(a,b,u,!1,[e])},
mP:function(a,b){var u
H.o(a,{func:1,ret:-1,args:[b]})
u=$.Z
if(u===C.f)return a
return u.dZ(a,b)},
r:function r(){},
fB:function fB(){},
fD:function fD(){},
fE:function fE(){},
c7:function c7(){},
c8:function c8(){},
cM:function cM(){},
bK:function bK(){},
cO:function cO(){},
fX:function fX(){},
T:function T(){},
cP:function cP(){},
fY:function fY(){},
bb:function bb(){},
bc:function bc(){},
fZ:function fZ(){},
h_:function h_(){},
h1:function h1(){},
dH:function dH(){},
h2:function h2(){},
dI:function dI(){},
dJ:function dJ(){},
h3:function h3(){},
h4:function h4(){},
jQ:function jQ(a,b){this.a=a
this.b=b},
a6:function a6(){},
p:function p(){},
n:function n(){},
aF:function aF(){},
cQ:function cQ(){},
hd:function hd(){},
hh:function hh(){},
aR:function aR(){},
hl:function hl(){},
cg:function cg(){},
bt:function bt(){},
cT:function cT(){},
bg:function bg(){},
hw:function hw(){},
hR:function hR(){},
cX:function cX(){},
hS:function hS(){},
hT:function hT(a){this.a=a},
hU:function hU(){},
hV:function hV(a){this.a=a},
aT:function aT(){},
hW:function hW(){},
aj:function aj(){},
jP:function jP(a){this.a=a},
K:function K(){},
d0:function d0(){},
aU:function aU(){},
i9:function i9(){},
io:function io(){},
ip:function ip(a){this.a=a},
ir:function ir(){},
aW:function aW(){},
iE:function iE(){},
aX:function aX(){},
iF:function iF(){},
aY:function aY(){},
iK:function iK(){},
iL:function iL(a){this.a=a},
aJ:function aJ(){},
aZ:function aZ(){},
aK:function aK(){},
iV:function iV(){},
iW:function iW(){},
j1:function j1(){},
b_:function b_(){},
b0:function b0(){},
j5:function j5(){},
j6:function j6(){},
c_:function c_(){},
jr:function jr(){},
jG:function jG(){},
bq:function bq(){},
dg:function dg(){},
jR:function jR(){},
ez:function ez(){},
k4:function k4(){},
eQ:function eQ(){},
kh:function kh(){},
kl:function kl(){},
jT:function jT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ln:function ln(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jU:function jU(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jV:function jV(a){this.a=a},
F:function F(){},
dM:function dM(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
ey:function ey(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eR:function eR(){},
eS:function eS(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
dn:function dn(){},
dp:function dp(){},
eY:function eY(){},
eZ:function eZ(){},
f2:function f2(){},
f5:function f5(){},
f6:function f6(){},
dq:function dq(){},
dr:function dr(){},
f8:function f8(){},
f9:function f9(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){}},L={
nZ:function(a){var u,t,s,r,q,p,o,n=null,m=new Array(256)
m.fixed$length=Array
u=[P.j]
t=H.c(m,u)
m=new Array(256)
m.fixed$length=Array
s=H.c(m,u)
for(r=0;r<256;++r)C.a.j(s,r,r)
q=P.cF("6364136223846793005",n,n)
p=P.cF("1442695040888963407",n,n)
if(typeof q!=="number")return H.d(q)
if(typeof p!=="number")return H.d(p)
a=C.d.cU(C.d.cU(C.d.cU(a*q+p,64)*q+p,64)*q+p,64)
for(r=255;r>=0;--r){m=a*q+p
a=((m&-1)>>>0)-(m&0)
o=C.d.b1(a+31,r+1)
if(o>=256)return H.e(s,o)
C.a.j(t,r,s[o])
s[o]=s[r]}return new L.i5(t)},
i5:function i5(a){this.a=a}},B={
bl:function(a,b){return new B.aV(a,b)},
ha:function ha(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null},
aV:function aV(a,b){this.a=a
this.b=b},
nB:function(a){switch(a){case 0:return"air"
case 1:return"water"
case 100:return"boundary"
case 101:return"dirt"
case 102:return"turf"
case 103:return"rock"
case 104:return"sand"
case 105:return"dryLeaves"
case 106:return"trunk-ud"
case 107:return"trunk-ns"
case 108:return"trunk-ew"
case 109:return"brick"
case 110:return"redShine"
case 111:return"whiteShine"
case 112:return"yellowShine"
case 113:return"blackShine"
case 114:return"leaves"
case 115:return"wood-ud"
case 116:return"wood-ns"
case 117:return"wood-ew"
case 200:return"grass"
case 201:return"fern"
case 202:return"whiteFlower"
case 203:return"blueFlower"
case 204:return"redFlower"
case 205:return"mushroom"}return"undefined"},
nA:function(a,b){if(a===b)return!1
if(b===0)return!0
if(a===1)return b>=200&&b<=205
if(b===1)return!(a>=200&&a<=205)
return!(a>=200&&a<=205)&&b>=200&&b<=205},
nD:function(a){var u=new B.c9(a)
u.fb(a)
return u},
n_:function(){var u,t=V.og("3Dart Craft"),s=[P.l]
t.a0(H.c(["This example is in development and may still have a few issues and glitches."],s))
u=W.l3()
u.className="pageLargeCanvas"
u.id="targetCanvas"
t.a.appendChild(u)
t.ct(1,"About")
t.a0(H.c(["3Dart Craft is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ","to create a [voxel|https://en.wikipedia.org/wiki/Voxel] environment for browser driven video games. ","This example has no server backing it so none of the changes are persisted. It would take very little ","to turn this into a simple online game."],s))
t.a0(H.c(["\xab[Back to Examples List|../../]"],s))
t.ct(1,"Controls")
t.a0(H.c(["\u2022 _Currently there are no controls for mobile browsers_"],s))
t.a0(H.c(["\u2022 *Esc* to release the mouse capture"],s))
t.a0(H.c(["\u2022 *W* or *Up arrow* to move forward"],s))
t.a0(H.c(["\u2022 *S* or *Down arrow* to move backward"],s))
t.a0(H.c(["\u2022 *A* or *Left arrow* to strife left"],s))
t.a0(H.c(["\u2022 *D* or *Right arror* to strife right"],s))
t.a0(H.c(["\u2022 *Space bar* to jump"],s))
t.a0(H.c(["\u2022 *Tab* cycles the block selected which can be placed"],s))
t.a0(H.c(["\u2022 *Shift-Tab* cycles the selection in the reverse direction"],s))
t.a0(H.c(["\u2022 *Left click* or *Q* removes the currently highlighted block"],s))
t.a0(H.c(["\u2022 *Right click* or *E* places the selected block on the highlighted block"],s))
t.a0(H.c(["\u2022 *O* to return the starting location"],s))
t.ct(1,"Help wanted")
t.a0(H.c(["There is still much to be done, many cool new features, and several little bugs. ","If you would like to contribute to this example, have an idea, find a bug, or just want to learn more about it, ","check out the [project page|https://github.com/Grant-Nelson/ThreeDart/projects/1] or ","[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/craft]."],s))
t.a0(H.c(["There are tons of ways to contribute. You could even start your own example. ","See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."],s))
P.lg(C.k,B.pB())},
pH:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=document.getElementById("targetCanvas")
if(c6==null)H.B(P.E("Failed to find an element with the identifier, targetCanvas."))
u=E.ok(c6,!0,!0,!0,!1)
t=new B.hQ(u)
s=P.j
t.sh2(new H.X([s,B.a_]))
t.shr(new H.X([s,[P.b,P.j]]))
t.shs(H.c([],[O.cj]))
r=new V.a9(1,1,1)
q=V.e6()
p=V.lm()
o=new V.u(0.5,-1,0.2).p(0,q)
o=U.bL(V.m2(q,p,new V.H(o.a,o.b,o.c)))
p=new D.bM()
p.c=new V.a9(1,1,1)
p.a=V.lm()
p.d=V.ll()
p.e=V.mv()
n=p.b
p.b=o
o.gt().h(0,p.ghM())
q=new D.L("mover",n,p.b,[U.aa])
q.b=!0
p.aM(q)
if(!p.c.q(0,r)){n=p.c
p.c=r
q=new D.L("color",n,r,[V.a9])
q.b=!0
p.aM(q)}t.e=p
m=t.I(t.F("boundary"),!1)
l=t.I(t.F("brick"),!1)
k=t.I(t.F("dirt"),!1)
j=t.I(t.F("dryLeavesSide"),!1)
i=t.I(t.F("dryLeavesTop"),!1)
h=t.I(t.F("leaves"),!1)
g=t.I(t.F("rock"),!1)
f=t.I(t.F("sand"),!1)
e=t.I(t.F("trunkEnd"),!1)
d=t.I(t.F("trunkSide"),!1)
c=t.I(t.F("trunkTilted"),!1)
b=t.I(t.F("turfSide"),!1)
a=t.I(t.F("turfTop"),!1)
a0=t.I(t.F("woodEnd"),!1)
a1=t.I(t.F("woodSide"),!1)
a2=t.I(t.F("woodTilted"),!1)
a3=t.I(t.F("blackShine"),!0)
a4=t.I(t.F("redShine"),!0)
a5=t.I(t.F("yellowShine"),!0)
a6=t.I(t.F("whiteShine"),!0)
a7=t.I(t.F("mushroomBottom"),!1)
a8=t.I(t.F("mushroomSide"),!1)
a9=t.I(t.F("mushroomTop"),!1)
b0=t.I(t.F("grass"),!1)
b1=t.I(t.F("fern"),!1)
b2=t.I(t.F("blueFlowers"),!1)
b3=t.I(t.F("redFlowers"),!1)
b4=t.I(t.F("whiteFlowers"),!1)
q=T.bZ
p=P.lb([t.F("water1"),t.F("water2"),t.F("water3")],!0,q)
o=new T.iX()
b5=o.b=o.a=0
o.sj5(H.h(p,"$ib",[q],"$ab"))
o.f=null
t.x=o
b6=t.I(o,!0)
t.b.j(0,100,new B.a_(m,m,m,m,m,m))
t.b.j(0,101,new B.a_(k,k,k,k,k,k))
t.b.j(0,102,new B.a_(a,k,b,b,b,b))
t.b.j(0,103,new B.a_(g,g,g,g,g,g))
t.b.j(0,104,new B.a_(f,f,f,f,f,f))
t.b.j(0,105,new B.a_(i,k,j,j,j,j))
t.b.j(0,106,new B.a_(e,e,d,d,d,d))
t.b.j(0,107,new B.a_(d,d,c,c,e,e))
t.b.j(0,108,new B.a_(c,c,e,e,c,c))
t.b.j(0,109,new B.a_(l,l,l,l,l,l))
t.b.j(0,110,new B.a_(a4,a4,a4,a4,a4,a4))
t.b.j(0,111,new B.a_(a6,a6,a6,a6,a6,a6))
t.b.j(0,112,new B.a_(a5,a5,a5,a5,a5,a5))
t.b.j(0,113,new B.a_(a3,a3,a3,a3,a3,a3))
t.b.j(0,114,new B.a_(h,h,h,h,h,h))
t.b.j(0,115,new B.a_(a0,a0,a1,a1,a1,a1))
t.b.j(0,116,new B.a_(a1,a1,a2,a2,a0,a0))
t.b.j(0,117,new B.a_(a2,a2,a0,a0,a2,a2))
t.b.j(0,1,new B.a_(b6,b6,b6,b6,b6,b6))
s=[s]
q=H.h(H.c([b0],s),"$ib",s,"$ab")
t.c.j(0,200,q)
q=H.h(H.c([b1],s),"$ib",s,"$ab")
t.c.j(0,201,q)
q=H.h(H.c([b4],s),"$ib",s,"$ab")
t.c.j(0,202,q)
q=H.h(H.c([b2],s),"$ib",s,"$ab")
t.c.j(0,203,q)
q=H.h(H.c([b3],s),"$ib",s,"$ab")
t.c.j(0,204,q)
s=H.h(H.c([a9,a7,a8],s),"$ib",s,"$ab")
t.c.j(0,205,s)
t.f=t.dc("selection")
t.r=t.dc("crosshair")
b7=B.ot(t,B.oS())
b8=B.o_(u.r,b7)
b9=new M.dK()
b9.a=!0
b9.sfX(0,O.l4(E.a2))
b9.e.bC(b9.ghO(),b9.ghQ())
b9.y=b9.x=b9.r=b9.f=null
c0=X.nN(new V.aP(0.576,0.784,0.929,1))
c1=new X.e3()
c1.c=1.0471975511965976
c1.d=0.1
c1.e=2000
c1.sew(null)
s=c1.c
if(!(Math.abs(s-1.0471975511965976)<$.C().a)){c1.c=1.0471975511965976
s=new D.L("fov",s,1.0471975511965976,[P.A])
s.b=!0
c1.b5(s)}s=c1.d
if(!(Math.abs(s-0.1)<$.C().a)){c1.d=0.1
s=new D.L("near",s,0.1,[P.A])
s.b=!0
c1.b5(s)}s=c1.e
if(!(Math.abs(s-2000)<$.C().a)){c1.e=2000
s=new D.L("far",s,2000,[P.A])
s.b=!0
c1.b5(s)}s=b9.b
if(s!==c1){if(s!=null)s.gt().U(0,b9.gb3())
n=b9.b
b9.b=c1
c1.gt().h(0,b9.gb3())
s=new D.L("camera",n,b9.b,[X.dD])
s.b=!0
b9.b4(s)}s=b9.c
if(s!==c0){if(s!=null)s.gt().U(0,b9.gb3())
n=b9.c
b9.c=c0
c0.gt().h(0,b9.gb3())
s=new D.L("target",n,b9.c,[X.eh])
s.b=!0
b9.b4(s)}s=b9.f
if(s==null)s=b9.f=D.O()
s.h(0,b7.gky(b7))
b9.b.sew(b8.x)
for(s=b7.e,q=s.length;b5<s.length;s.length===q||(0,H.z)(s),++b5){c2=s[b5]
p=b9.e
o=H.v(p,0)
H.D(c2,o)
c3=[o]
if(H.G(p.bm(H.c([c2],c3)))){c4=p.a
c5=c4.length
C.a.h(c4,c2)
o=H.h(H.c([c2],c3),"$ik",[o],"$ak")
p=p.c
if(p!=null)p.$2(c5,o)}}b9.e.h(0,b8.db)
b7.f=b8
s=u.d
if(s!==b9){if(s!=null)s.gt().U(0,u.gd3())
u.d=b9
b9.gt().h(0,u.gd3())
u.d4()}b8.cZ()
P.j2(C.O,b7.gkB())
P.j2(C.N,b7.geZ())
P.j2(C.L,b7.gjr())
P.j2(C.M,new B.kR(u,b7))},
oS:function(){var u,t,s,r,q=null,p=P.mm().geM().l(0,"seed")
if(p!=null){if(p==="test")return new B.iS()
if(p==="checkers"){u=new B.fR()
u.a=!0
u.b=10
return u}t=H.mb(p,q)
if(t==null)t=-1}else t=-1
if(t<=0){t=C.K.jY(4294967296)
s=P.mm().eN(0,P.nS(["seed",""+t],P.l,q))
u=window.history
r=s.i(0)
u.toString
u.pushState(new P.kj([],[]).cW(q),q,r)}u=new B.ic()
u.a=L.nZ(t)
u.b=new Uint8Array(484)
return u},
o_:function(a,b){var u=new B.e4(b)
u.fd(a,b)
return u},
lf:function(a,b){var u,t,s=new B.iw(a,b)
if(b==null){u=$.ac()
t=$.ag()
s.b=new Z.ae(u.a|t.a|$.as().a)}u=a==null?null:a.d
u=u==null?null:u.length
if(u==null)u=1
u=new Array(u)
u.fixed$length=Array
s.sdQ(H.c(u,[F.d3]))
return s},
ot:function(a,b){var u=new B.ev(a,b)
u.fi(a,b)
return u},
az:function az(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fR:function fR(){this.b=this.a=null},
c9:function c9(a){var _=this
_.b=_.a=null
_.c=a
_.x=_.r=_.f=_.e=_.d=null},
fS:function fS(a){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kR:function kR(a,b){this.a=a
this.b=b},
a_:function a_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hQ:function hQ(a){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
e1:function e1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e4:function e4(a){var _=this
_.b=_.a=null
_.c=a
_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=null},
i8:function i8(a){this.a=a},
ic:function ic(){this.c=this.b=this.a=null},
ie:function ie(a){this.a=a},
id:function id(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ig:function ig(a){this.a=a},
iw:function iw(a,b){this.a=a
this.b=b
this.c=null},
ix:function ix(a){this.a=a},
iy:function iy(a){this.a=a},
iz:function iz(a){this.a=a},
iA:function iA(a){this.a=a},
iS:function iS(){this.a=null},
iT:function iT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iU:function iU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ev:function ev(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.e=_.d=_.c=null}},O={
l4:function(a){var u=new O.a1([a])
u.bD(a)
return u},
a1:function a1(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cW:function cW(){this.b=this.a=null},
m_:function(){var u,t,s=new O.cj()
s.sfR(O.l4(V.au))
s.e.bC(s.ghC(),s.ghE())
u=new O.bi(s,"emission")
u.c=new A.ah(!1,!1,!1)
u.f=new V.a9(0,0,0)
s.f=u
u=new O.bi(s,"ambient")
u.c=new A.ah(!1,!1,!1)
u.f=new V.a9(0,0,0)
s.r=u
u=new O.bi(s,"diffuse")
u.c=new A.ah(!1,!1,!1)
u.f=new V.a9(0,0,0)
s.x=u
u=new O.bi(s,"invDiffuse")
u.c=new A.ah(!1,!1,!1)
u.f=new V.a9(0,0,0)
s.y=u
u=new O.hJ(s,"specular")
u.c=new A.ah(!1,!1,!1)
u.f=new V.a9(0,0,0)
u.ch=100
s.z=u
u=new O.hF(s,"bump")
u.c=new A.ah(!1,!1,!1)
s.Q=u
s.ch=null
u=new O.bi(s,"reflect")
u.c=new A.ah(!1,!1,!1)
u.f=new V.a9(0,0,0)
s.cx=u
u=new O.hI(s,"refract")
u.c=new A.ah(!1,!1,!1)
u.f=new V.a9(0,0,0)
u.ch=1
s.cy=u
u=new O.hE(s,"alpha")
u.c=new A.ah(!1,!1,!1)
u.f=1
s.db=u
u=new D.dS()
u.bD(D.ai)
u.sfq(H.c([],[D.bM]))
u.siB(H.c([],[D.e5]))
u.sfs(H.c([],[D.ef]))
u.y=u.x=null
u.c0(u.ghA(),u.gij(),u.gio())
s.dx=u
t=new O.hH()
t.b=new V.aP(0,0,0,0)
t.c=1
t.d=10
t.e=!1
s.dy=t
t=u.x
u=t==null?u.x=D.O():t
u.h(0,s.giP())
u=s.dx
t=u.y
u=t==null?u.y=D.O():t
u.h(0,s.gbE())
s.fr=null
return s},
cj:function cj(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hK:function hK(a,b){this.a=a
this.b=b},
hL:function hL(){},
hM:function hM(a,b){this.a=a
this.b=b},
hN:function hN(){},
hO:function hO(a,b){this.a=a
this.b=b},
hP:function hP(){},
hE:function hE(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cV:function cV(){},
hF:function hF(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
bi:function bi(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hH:function hH(){var _=this
_.e=_.d=_.c=_.b=null},
hI:function hI(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hJ:function hJ(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cq:function cq(){}},E={
cd:function(a,b,c,d){var u,t,s,r,q,p=new E.a2()
p.a=""
p.b=!0
p.sfj(0,O.l4(E.a2))
p.y.bC(p.gk_(),p.gk6())
p.dy=p.dx=p.db=p.cy=p.cx=p.ch=p.Q=p.z=null
u=p.c
if(u!=c){p.d=p.c=c
p.e=null
if(u!=null)u.gt().U(0,p.gbU())
t=p.c
if(t!=null)t.gt().h(0,p.gbU())
s=new D.L("shape",u,p.c,[F.ed])
s.b=!0
p.as(s)}u=p.f
if(u!=d){if(u!=null)u.gt().U(0,p.geE())
r=p.f
p.f=d
if(d!=null)d.gt().h(0,p.geE())
p.dh()
s=new D.L("technique",r,p.f,[O.cq])
s.b=!0
p.as(s)}if(!J.V(p.r,b)){q=p.r
if(q!=null)q.gt().U(0,p.geB())
if(b!=null)b.gt().h(0,p.geB())
p.r=b
s=new D.L("mover",q,b,[U.aa])
s.b=!0
p.as(s)}if(a!=null)p.y.aP(0,a)
return p},
oe:function(a,b){var u=new E.ij(a)
u.fe(a,b)
return u},
ok:function(a,b,c,d,e){var u,t,s=J.S(a)
if(!!s.$ic8)return E.mi(a,!0,!0,!0,!1)
u=W.l3()
t=u.style
t.width="100%"
t.height="100%"
s.ge1(a).h(0,u)
return E.mi(u,!0,!0,!0,!1)},
mi:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ej(),j=H.i(C.j.cY(a,"webgl2",P.nT(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$icp")
if(j==null)H.B(P.E("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.oe(j,a)
u=new T.iZ(j)
u.b=H.a0(j.getParameter(3379))
H.a0(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.eq(a)
t=new X.hr()
t.siG(P.nU(P.j))
u.b=t
t=new X.hX(u)
t.f=0
t.r=V.bz()
t.x=V.bz()
t.ch=t.Q=1
u.c=t
t=new X.hx(u)
t.r=0
t.x=V.bz()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.j4(u)
t.f=V.bz()
t.r=V.bz()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sh8(H.c([],[[P.d7,P.Q]]))
t=u.z
s=document
r=W.aj
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.af(s,"contextmenu",H.o(u.ghU(),q),!1,r))
t=u.z
p=W.p
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.af(a,"focus",H.o(u.gi_(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.af(a,"blur",H.o(u.ghK(),o),!1,p))
t=u.z
n=W.bg
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.af(s,"keyup",H.o(u.gcj(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.af(s,"keydown",H.o(u.gc2(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.af(a,"mousedown",H.o(u.gi7(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.af(a,"mouseup",H.o(u.gib(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.af(a,l,H.o(u.gi9(),q),!1,r))
n=u.z
m=W.bq;(n&&C.a).h(n,W.af(a,H.N(W.nL(a)),H.o(u.gie(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.af(s,l,H.o(u.ghW(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.af(s,"mouseup",H.o(u.ghY(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.af(s,"pointerlockchange",H.o(u.gih(),o),!1,p))
p=u.z
o=W.b0
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.af(a,"touchstart",H.o(u.giw(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.af(a,"touchend",H.o(u.gis(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.af(a,"touchmove",H.o(u.giu(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aA(Date.now(),!1)
k.cy=0
k.dN()
return k},
fN:function fN(){},
a2:function a2(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ij:function ij(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ik:function ik(a){this.a=a},
il:function il(a){this.a=a},
im:function im(a){this.a=a},
iI:function iI(){this.b=null},
ej:function ej(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
j0:function j0(a){this.a=a}},Z={
mx:function(a,b,c){var u
H.h(c,"$ib",[P.A],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Float32Array(H.cx(c)),35044)
a.bindBuffer(b,null)
return new Z.et(b,u)},
eu:function(a,b,c){var u
H.h(c,"$ib",[P.j],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cx(c)),35044)
a.bindBuffer(b,null)
return new Z.et(b,u)},
b2:function(a){return new Z.ae(a)},
et:function et(a,b){this.a=a
this.b=b},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jH:function jH(a){this.a=a},
cL:function cL(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
aS:function aS(a,b,c){this.a=a
this.b=b
this.c=c},
ae:function ae(a){this.a=a}},D={
O:function(){var u=new D.ce()
u.saw(null)
u.sbn(null)
u.c=null
u.d=0
return u},
fQ:function fQ(){},
ce:function ce(){var _=this
_.d=_.c=_.b=_.a=null},
hb:function hb(a){this.a=a},
hc:function hc(a){this.a=a},
w:function w(){this.b=null},
bO:function bO(a){this.b=null
this.$ti=a},
bP:function bP(a){this.b=null
this.$ti=a},
L:function L(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bM:function bM(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ai:function ai(){},
dS:function dS(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
e5:function e5(){},
ef:function ef(){}},X={
bf:function(){var u=new X.dR()
u.bD(X.am)
u.f=u.e=null
u.r=!1
u.y=u.x=null
u.c0(u.gfk(),u.gfm(),u.gfo())
return u},
dC:function dC(a,b){this.a=a
this.b=b},
am:function am(a,b){this.a=a
this.b=b},
bu:function bu(a){this.c=a
this.b=null},
dR:function dR(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
hr:function hr(){this.d=this.b=this.a=null},
dW:function dW(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},
hx:function hx(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
bw:function bw(a,b,c){this.a=a
this.b=b
this.c=c},
bx:function bx(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},
hX:function hX(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ia:function ia(){},
el:function el(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},
j4:function j4(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},
eq:function eq(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nN:function(a){var u,t=new X.hj()
if(a==null)u=new V.aP(0,0,0,1)
else u=a
t.a=u
t.b=!0
t.c=2000
t.d=!0
t.e=0
t.f=!1
u=$.mf
if(u==null){u=V.le(0,0,1,1)
$.mf=u}t.r=u
return t},
dD:function dD(){},
hj:function hj(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e3:function e3(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
eh:function eh(){}},V={
aB:function(a){return new V.a5(a)},
kU:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.b1(a-b,u)
return(a<0?a+u:a)+b},
J:function(a,b,c){if(a==null)return C.b.aZ("null",c)
return C.b.aZ(C.e.eS(Math.abs(a-0)<$.C().a?0:a,b),c+b+1)},
cC:function(a,b,c){var u,t,s,r,q,p
H.h(a,"$ib",[P.A],"$ab")
u=H.c([],[P.l])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.z)(a),++r){q=V.J(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.j(u,p,C.b.aZ(u[p],s))}return u},
lD:function(a){return C.e.aA(Math.pow(2,C.i.bS(Math.log(H.cA(a))/Math.log(2))))},
m0:function(a){var u=Math.cos(a),t=Math.sin(a)
return new V.aG(u,0,-t,0,1,0,t,0,u)},
ck:function(){var u=$.m5
return u==null?$.m5=V.bj(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bj:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.au(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
dY:function(a,b,c){return V.bj(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
ld:function(a,b,c,d){return V.bj(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
m3:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bj(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
m4:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bj(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
m2:function(a,b,c){var u=c.v(0,Math.sqrt(c.D(c))),t=b.bu(u),s=t.v(0,Math.sqrt(t.D(t))),r=u.bu(s),q=new V.H(a.a,a.b,a.c),p=s.O(0).D(q),o=r.O(0).D(q),n=u.O(0).D(q)
return V.bj(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bz:function(){var u=$.m9
return u==null?$.m9=new V.U(0,0):u},
e6:function(){var u=$.d1
return u==null?$.d1=new V.u(0,0,0):u},
bU:function(a,b,c){return new V.u(a,b,c)},
me:function(a,b){return new V.e9(a.a,a.b,a.c,b.a,b.b,b.c)},
le:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ea(a,b,c,d)},
ii:function(a,b,c,d,e,f){if(d<0){if(typeof a!=="number")return a.m()
a+=d
d=-d}if(e<0){if(typeof b!=="number")return b.m()
b+=e
e=-e}if(f<0){if(typeof c!=="number")return c.m()
c+=f
f=-f}return new V.bY(a,b,c,d,e,f)},
df:function(){var u=$.mu
return u==null?$.mu=new V.H(0,0,0):u},
mv:function(){var u=$.jv
return u==null?$.jv=new V.H(-1,0,0):u},
ll:function(){var u=$.jw
return u==null?$.jw=new V.H(0,1,0):u},
lm:function(){var u=$.jx
return u==null?$.jx=new V.H(0,0,1):u},
mw:function(){var u=$.ms
return u==null?$.ms=new V.H(0,0,-1):u},
mq:function(a,b,c){return new V.H(a,b,c)},
a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h9:function h9(a){this.a=a},
a5:function a5(a){this.a=a},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hn:function hn(a,b){this.a=a
this.b=b},
aG:function aG(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
au:function au(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
U:function U(a,b){this.a=a
this.b=b},
u:function u(a,b,c){this.a=a
this.b=b
this.c=c},
bV:function bV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e9:function e9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ea:function ea(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bY:function bY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a3:function a3(a,b){this.a=a
this.b=b},
H:function H(a,b,c){this.a=a
this.b=b
this.c=c},
ap:function(a){var u=new V.is()
u.ff(a)
return u},
fC:function fC(){},
bv:function bv(){},
dX:function dX(){},
by:function by(){this.a=null},
is:function is(){this.a=null},
d6:function d6(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ek:function ek(a,b,c){this.a=a
this.b=b
this.c=c},
da:function da(a){this.b=a
this.c=null},
j3:function j3(){this.c=this.b=this.a=null},
db:function db(a){this.b=a
this.a=this.c=null},
og:function(a){var u=new V.iB()
u.fh(a,!0)
return u},
iB:function iB(){this.b=this.a=null},
iD:function iD(a){this.a=a},
iC:function iC(a){this.a=a}},U={
dE:function(){var u=new U.fT()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
bL:function(a){var u=new U.dF()
u.a=a
return u},
hk:function(a){var u=new U.cS()
u.bD(U.aa)
u.bC(u.gft(),u.gil())
u.aP(0,a)
u.e=null
u.f=V.ck()
u.r=0
return u},
fT:function fT(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dF:function dF(){this.b=this.a=null},
cS:function cS(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
cU:function cU(){var _=this
_.d=_.c=_.b=_.a=null},
aa:function aa(){},
eb:function eb(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
er:function er(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
es:function es(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dK:function dK(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nW:function(a,b){var u=a.aU,t=new A.hD(b,u)
t.fg(b,u)
t.fc(a,b)
return t},
nX:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.h(a9,"$ib",[A.aE],"$ab")
H.h(b0,"$ib",[A.aH],"$ab")
H.h(b1,"$ib",[A.aI],"$ab")
u="MaterialLight_"+a0.gM(a0)+a1.gM(a1)+a2.gM(a2)+a3.gM(a3)+a4.gM(a4)+a5.gM(a5)+a6.gM(a6)+a7.gM(a7)+a8.gM(a8)+"_"
u+=a?"1":"0"
u+=b?"1":"0"
u+=c?"1":"0"
u=u+"0_"+e
t=a9.length
if(t>0){u+="_Dir"
for(s=0;s<a9.length;a9.length===t||(0,H.z)(a9),++s)u+="_"+H.m(a9[s].a)}t=b0.length
if(t>0){u+="_Point"
for(s=0;s<b0.length;b0.length===t||(0,H.z)(b0),++s)u+="_"+H.m(b0[s].a)}t=b1.length
if(t>0){u+="_Spot"
for(s=0;s<b1.length;b1.length===t||(0,H.z)(b1),++s)u+="_"+H.m(b1[s].a)}for(t=a9.length,r=0,q=!1,s=0;s<t;++s,q=!0)r+=a9[s].b
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
f=$.ac()
if(k){t=$.as()
f=new Z.ae(f.a|t.a)}if(j){t=$.bI()
f=new Z.ae(f.a|t.a)}if(i){t=$.ag()
f=new Z.ae(f.a|t.a)}if(h){t=$.bH()
f=new Z.ae(f.a|t.a)}return new A.hG(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,r,o,l,o,q,g,!0,!1,!1,n,q,m,k,j,i,!1,h,a,!1,c,!1,e,u.charCodeAt(0)==0?u:u,f)},
kA:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kB:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.kA(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.kS(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
oX:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.kA(b,t,"emission")
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
oU:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.kB(b,t,"ambient")
b.a+="\n"},
oV:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.kB(b,t,"diffuse")
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
oY:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.kB(b,t,"invDiffuse")
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
p3:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.kB(b,t,"specular")
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
p_:function(a,b){var u,t,s
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
p1:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.kA(b,t,"reflect")
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
p2:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.kA(b,t,"refract")
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
oW:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.m(u)
s=A.kS(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ak()
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
o=H.c([],r)
n=a.b
if(n.a||n.b||!1)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.c([],r)
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
p0:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.m(u)
s=A.kS(t)
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
if(typeof u!=="number")return u.ak()
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
l=H.c([],r)
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
l=H.c([],r)
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
k=H.c([],r)
r=a.c
if(r.a||r.b||!1)C.a.h(k,"diffuse(norm, normDir)")
r=a.d
if(r.a||r.b||!1)C.a.h(k,"invDiffuse(norm, normDir)")
r=a.e
if(r.a||r.b||!1)C.a.h(k,"specular(norm, normDir)")
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
p4:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.m(u)
s=A.kS(t)
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
if(typeof u!=="number")return u.ak()
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
j=H.c([],u)
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
j=H.c([],u)
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
i=H.c([],u)
u=a.c
if(u.a||u.b||!1)C.a.h(i,"diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)C.a.h(i,"invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)C.a.h(i,"specular(norm, litVec)")
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
oZ:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.l])
u=a.b
if(u.a||u.b||!1)C.a.h(t,"ambientColor")
u=a.c
if(u.a||u.b||!1)C.a.h(t,"diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)C.a.h(t,"invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)C.a.h(t,"specular(norm, litVec)")
u=b.a+="   return "+C.a.u(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
p5:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.aq("")
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
A.oX(a,j)
A.oU(a,j)
A.oV(a,j)
A.oY(a,j)
A.p3(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.p1(a,j)
A.p2(a,j)}A.p_(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.z)(q),++o)A.oW(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.z)(q),++o)A.p0(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.z)(q),++o)A.p4(a,q[o],j)
A.oZ(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.c([],[P.l])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.z)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.av(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.z)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.av(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.z)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.av(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)C.a.h(n,"emissionColor()")
u=a.r
if(u.a||u.b||!1)C.a.h(n,"reflect(refl)")
u=a.x
if(u.a||u.b||!1)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.u(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
p6:function(a,b){var u,t,s
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
p8:function(a,b){var u
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
p7:function(a,b){var u
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
pa:function(a,b){var u,t
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
pb:function(a,b){var u,t
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
p9:function(a,b){var u
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
pc:function(a,b){var u
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
kS:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.av(a,1)},
li:function(a,b,c,d,e){var u=new A.jb(a,c,e)
u.f=d
u.sjn(P.nV(d,0,P.j))
return u},
dA:function dA(a,b,c){this.a=a
this.b=b
this.c=c},
fG:function fG(a){this.a=a},
ah:function ah(a,b,c){this.a=a
this.b=b
this.c=c},
hD:function hD(a,b){var _=this
_.kK=_.e8=_.e7=_.e6=_.aU=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.kS=_.kR=_.kQ=_.cH=_.cG=_.cF=_.cE=_.cD=_.cC=_.kP=_.ek=_.ej=_.kO=_.ei=_.eh=_.eg=_.kN=_.ef=_.ee=_.ed=_.kM=_.ec=_.eb=_.kL=_.ea=_.e9=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aE:function aE(a,b){this.a=a
this.b=b},
aH:function aH(a,b){this.a=a
this.b=b},
aI:function aI(a,b){this.a=a
this.b=b},
hG:function hG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aU=b3
_.e6=b4},
cr:function cr(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cs:function cs(a,b,c,d,e,f,g,h,i,j){var _=this
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
cu:function cu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d4:function d4(){},
em:function em(){},
jg:function jg(a){this.a=a},
aL:function aL(a,b,c){this.a=a
this.c=b
this.d=c},
jd:function jd(a,b,c){this.a=a
this.c=b
this.d=c},
je:function je(a,b,c){this.a=a
this.c=b
this.d=c},
jf:function jf(a,b,c){this.a=a
this.c=b
this.d=c},
jb:function jb(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
al:function al(a,b,c){this.a=a
this.c=b
this.d=c},
jc:function jc(a,b,c){this.a=a
this.c=b
this.d=c},
Y:function Y(a,b,c){this.a=a
this.c=b
this.d=c},
dc:function dc(a,b,c){this.a=a
this.c=b
this.d=c},
jh:function jh(a,b,c){this.a=a
this.c=b
this.d=c},
dd:function dd(a,b,c){this.a=a
this.c=b
this.d=c},
aC:function aC(a,b,c){this.a=a
this.c=b
this.d=c},
ar:function ar(a,b,c){this.a=a
this.c=b
this.d=c},
ct:function ct(a,b,c){this.a=a
this.c=b
this.d=c}},F={
cv:function(a,b,c,d,e,f,g,h,i){var u,t,s=null,r=new F.bp()
new F.jD().sbo(H.c([],[F.cm]))
u=new F.jC()
t=[F.bS]
u.shk(H.c([],t))
u.shl(H.c([],t))
r.c=u
u=new F.jz()
t=[F.ad]
u.sh9(H.c([],t))
u.sha(H.c([],t))
u.shb(H.c([],t))
r.d=u
r.e=0
u=h.a
r.f=(u&$.ac().a)!==0?d:s
r.r=(u&$.as().a)!==0?e:s
r.x=(u&$.bI().a)!==0?b:s
r.y=(u&$.ag().a)!==0?f:s
r.z=(u&$.c3().a)!==0?g:s
r.Q=(u&$.no().a)!==0?c:s
r.ch=(u&$.cI().a)!==0?i:0
r.cx=(u&$.bH().a)!==0?a:s
return r},
ad:function ad(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bS:function bS(){},
cm:function cm(){},
d3:function d3(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ed:function ed(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
d5:function d5(){},
it:function it(a){this.a=a
this.b=null},
iu:function iu(a){this.a=a
this.b=null},
iv:function iv(){this.b=null},
bp:function bp(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.a=null},
jF:function jF(a){this.a=a},
jE:function jE(a){this.a=a},
jy:function jy(a){this.a=a
this.c=this.b=null},
jz:function jz(){this.d=this.c=this.b=null},
jA:function jA(a,b){this.a=a
this.b=b},
jB:function jB(a,b){this.a=a
this.b=b},
jC:function jC(){this.c=this.b=null},
jD:function jD(){this.b=null}},T={d9:function d9(){},bZ:function bZ(){},iX:function iX(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},iY:function iY(){var _=this
_.y=_.d=_.c=_.b=_.a=null},iZ:function iZ(a){var _=this
_.a=a
_.e=_.d=_.b=null},j_:function j_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}}
var w=[C,H,J,P,W,L,B,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l9.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gH:function(a){return H.d2(a)},
i:function(a){return"Instance of '"+H.co(a)+"'"}}
J.ho.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$ia4:1}
J.dP.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0}}
J.dQ.prototype={
gH:function(a){return 0},
i:function(a){return String(a)}}
J.i7.prototype={}
J.c0.prototype={}
J.bR.prototype={
i:function(a){var u=a[$.n8()]
if(u==null)return this.f8(a)
return"JavaScript function for "+H.m(J.b8(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$il5:1}
J.be.prototype={
h:function(a,b){H.D(b,H.v(a,0))
if(!!a.fixed$length)H.B(P.I("add"))
a.push(b)},
U:function(a,b){var u
if(!!a.fixed$length)H.B(P.I("remove"))
for(u=0;u<a.length;++u)if(J.V(a[u],b)){a.splice(u,1)
return!0}return!1},
aP:function(a,b){var u,t
H.h(b,"$ik",[H.v(a,0)],"$ak")
if(!!a.fixed$length)H.B(P.I("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.z)(b),++t)a.push(b[t])},
K:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.cb(a))}},
u:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.j(t,u,H.m(a[u]))
return t.join(b)},
jV:function(a){return this.u(a,"")},
jQ:function(a,b,c,d){var u,t,s
H.D(b,d)
H.o(c,{func:1,ret:d,args:[d,H.v(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.f(P.cb(a))}return t},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
f6:function(a,b,c){if(b<0||b>a.length)throw H.f(P.ak(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.ak(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.v(a,0)])
return H.c(a.slice(b,c),[H.v(a,0)])},
gaY:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.nP())},
c1:function(a,b){var u=H.v(a,0)
H.o(b,{func:1,ret:P.j,args:[u,u]})
if(!!a.immutable$list)H.B(P.I("sort"))
H.ee(a,0,a.length-1,b,u)},
aj:function(a,b){var u
for(u=0;u<a.length;++u)if(J.V(a[u],b))return!0
return!1},
i:function(a){return P.l6(a,"[","]")},
gZ:function(a){return new J.av(a,a.length,[H.v(a,0)])},
gH:function(a){return H.d2(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.B(P.I("set length"))
if(b<0)throw H.f(P.ak(b,0,null,"newLength",null))
a.length=b},
l:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(H.bB(a,b))
if(b>=a.length||b<0)throw H.f(H.bB(a,b))
return a[b]},
j:function(a,b,c){H.D(c,H.v(a,0))
if(!!a.immutable$list)H.B(P.I("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(H.bB(a,b))
if(b>=a.length||b<0)throw H.f(H.bB(a,b))
a[b]=c},
$ik:1,
$ib:1}
J.l8.prototype={}
J.av.prototype={
gP:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.z(s))
u=t.c
if(u>=r){t.sdv(null)
return!1}t.sdv(s[u]);++t.c
return!0},
sdv:function(a){this.d=H.D(a,H.v(this,0))},
$ibd:1}
J.ci.prototype={
bP:function(a,b){var u
H.n0(b)
if(typeof b!=="number")throw H.f(H.ay(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbT(b)
if(this.gbT(a)===u)return 0
if(this.gbT(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbT:function(a){return a===0?1/a<0:a<0},
aA:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.I(""+a+".toInt()"))},
bS:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.I(""+a+".floor()"))},
az:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.I(""+a+".round()"))},
jy:function(a,b,c){if(C.d.bP(b,c)>0)throw H.f(H.ay(b))
if(this.bP(a,b)<0)return b
if(this.bP(a,c)>0)return c
return a},
eS:function(a,b){var u
if(b>20)throw H.f(P.ak(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbT(a))return"-"+u
return u},
bz:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.f(P.ak(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.Y(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.B(P.I("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.k("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
b1:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fa:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dS(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dS(a,b)},
dS:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.I("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
f5:function(a,b){if(b<0)throw H.f(H.ay(b))
return b>31?0:a<<b>>>0},
bc:function(a,b){var u
if(a>0)u=this.dR(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
iY:function(a,b){if(b<0)throw H.f(H.ay(b))
return this.dR(a,b)},
dR:function(a,b){return b>31?0:a>>>b},
ab:function(a,b){if(typeof b!=="number")throw H.f(H.ay(b))
return a>b},
$iA:1,
$iab:1}
J.dO.prototype={
cU:function(a,b){var u=this.f5(1,b-1)
return((a&u-1)>>>0)-((a&u)>>>0)},
$ij:1}
J.dN.prototype={}
J.bQ.prototype={
Y:function(a,b){if(b<0)throw H.f(H.bB(a,b))
if(b>=a.length)H.B(H.bB(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.f(H.bB(a,b))
return a.charCodeAt(b)},
m:function(a,b){if(typeof b!=="string")throw H.f(P.l1(b,null,null))
return a+b},
bi:function(a,b,c,d){var u,t
c=P.bX(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
am:function(a,b,c){var u
if(c<0||c>a.length)throw H.f(P.ak(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
al:function(a,b){return this.am(a,b,0)},
w:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.B(H.ay(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.C()
if(b<0)throw H.f(P.ih(b,null))
if(b>c)throw H.f(P.ih(b,null))
if(c>a.length)throw H.f(P.ih(c,null))
return a.substring(b,c)},
av:function(a,b){return this.w(a,b,null)},
k:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.I)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aZ:function(a,b){var u=b-a.length
if(u<=0)return a
return this.k(" ",u)+a},
eu:function(a,b,c){var u
if(c<0||c>a.length)throw H.f(P.ak(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
es:function(a,b){return this.eu(a,b,0)},
i:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$im7:1,
$il:1}
H.a8.prototype={
gn:function(a){return this.a.length},
l:function(a,b){return C.b.Y(this.a,b)},
$ade:function(){return[P.j]},
$ay:function(){return[P.j]},
$ak:function(){return[P.j]},
$ab:function(){return[P.j]}}
H.h7.prototype={}
H.dU.prototype={
gP:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.bC(s),q=r.gn(s)
if(t.b!==q)throw H.f(P.cb(s))
u=t.c
if(u>=q){t.sbl(null)
return!1}t.sbl(r.J(s,u));++t.c
return!0},
sbl:function(a){this.d=H.D(a,H.v(this,0))},
$ibd:1}
H.hB.prototype={
gZ:function(a){return new H.hC(J.c5(this.a),this.b,this.$ti)},
gn:function(a){return J.aO(this.a)},
J:function(a,b){return this.b.$1(J.kZ(this.a,b))},
$ak:function(a,b){return[b]}}
H.hC.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.sbl(u.c.$1(t.gP(t)))
return!0}u.sbl(null)
return!1},
gP:function(a){return this.a},
sbl:function(a){this.a=H.D(a,H.v(this,1))},
$abd:function(a,b){return[b]}}
H.jI.prototype={
gZ:function(a){return new H.jJ(J.c5(this.a),this.b,this.$ti)}}
H.jJ.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(H.G(t.$1(u.gP(u))))return!0
return!1},
gP:function(a){var u=this.a
return u.gP(u)}}
H.cf.prototype={}
H.de.prototype={
j:function(a,b,c){H.D(c,H.aD(this,"de",0))
throw H.f(P.I("Cannot modify an unmodifiable list"))}}
H.eo.prototype={}
H.fV.prototype={
i:function(a){return P.lc(this)},
j:function(a,b,c){H.D(b,H.v(this,0))
H.D(c,H.v(this,1))
return H.nI()},
$ix:1}
H.fW.prototype={
gn:function(a){return this.a},
bQ:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
l:function(a,b){if(!this.bQ(0,b))return
return this.dw(b)},
dw:function(a){return this.b[H.N(a)]},
K:function(a,b){var u,t,s,r,q=this,p=H.v(q,1)
H.o(b,{func:1,ret:-1,args:[H.v(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.D(q.dw(r),p))}}}
H.j8.prototype={
ar:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.i2.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hq.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.m(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.m(t.a)+")"
return s+r+"' on '"+u+"' ("+H.m(t.a)+")"}}
H.jk.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kT.prototype={
$1:function(a){if(!!J.S(a).$ibN)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:19}
H.f1.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaw:1}
H.cN.prototype={
i:function(a){return"Closure '"+H.co(this).trim()+"'"},
$il5:1,
gkD:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iR.prototype={}
H.iJ.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cH(u)+"'"}}
H.cJ.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cJ))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.d2(this.a)
else u=typeof t!=="object"?J.c4(t):H.d2(t)
return(u^H.d2(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.co(u)+"'")}}
H.ja.prototype={
i:function(a){return this.a}}
H.fP.prototype={
i:function(a){return this.a}}
H.iq.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.jK.prototype={
i:function(a){return"Assertion failed: "+P.dL(this.a)}}
H.X.prototype={
gn:function(a){return this.a},
gaX:function(a){return new H.dT(this,[H.v(this,0)])},
bQ:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.ds(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.ds(t,b)}else return s.jT(b)},
jT:function(a){var u=this.d
if(u==null)return!1
return this.cL(this.cc(u,J.c4(a)&0x3ffffff),a)>=0},
l:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bG(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bG(r,b)
s=t==null?null:t.b
return s}else return q.jU(b)},
jU:function(a){var u,t,s=this.d
if(s==null)return
u=this.cc(s,J.c4(a)&0x3ffffff)
t=this.cL(u,a)
if(t<0)return
return u[t].b},
j:function(a,b,c){var u,t,s,r,q,p,o=this
H.D(b,H.v(o,0))
H.D(c,H.v(o,1))
if(typeof b==="string"){u=o.b
o.dd(u==null?o.b=o.cg():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.dd(t==null?o.c=o.cg():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.cg()
r=J.c4(b)&0x3ffffff
q=o.cc(s,r)
if(q==null)o.co(s,r,[o.ci(b,c)])
else{p=o.cL(q,b)
if(p>=0)q[p].b=c
else q.push(o.ci(b,c))}}},
K:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.v(s,0),H.v(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.f(P.cb(s))
u=u.c}},
dd:function(a,b,c){var u,t=this
H.D(b,H.v(t,0))
H.D(c,H.v(t,1))
u=t.bG(a,b)
if(u==null)t.co(a,b,t.ci(b,c))
else u.b=c},
ci:function(a,b){var u=this,t=new H.ht(H.D(a,H.v(u,0)),H.D(b,H.v(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
cL:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.V(a[t].a,b))return t
return-1},
i:function(a){return P.lc(this)},
bG:function(a,b){return a[b]},
cc:function(a,b){return a[b]},
co:function(a,b,c){a[b]=c},
h4:function(a,b){delete a[b]},
ds:function(a,b){return this.bG(a,b)!=null},
cg:function(){var u="<non-identifier-key>",t=Object.create(null)
this.co(t,u,t)
this.h4(t,u)
return t},
$ilY:1}
H.ht.prototype={}
H.dT.prototype={
gn:function(a){return this.a.a},
gZ:function(a){var u=this.a,t=new H.hu(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hu.prototype={
gP:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.cb(t))
else{t=u.c
if(t==null){u.sd8(null)
return!1}else{u.sd8(t.a)
u.c=u.c.c
return!0}}},
sd8:function(a){this.d=H.D(a,H.v(this,0))},
$ibd:1}
H.kL.prototype={
$1:function(a){return this.a(a)},
$S:19}
H.kM.prototype={
$2:function(a,b){return this.a(a,b)},
$S:52}
H.kN.prototype={
$1:function(a){return this.a(H.N(a))},
$S:51}
H.hp.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$im7:1,
$ioc:1}
H.cZ.prototype={$icZ:1}
H.bT.prototype={$ibT:1,$iol:1}
H.dZ.prototype={
gn:function(a){return a.length},
$iM:1,
$aM:function(){}}
H.d_.prototype={
l:function(a,b){H.bs(b,a,a.length)
return a[b]},
j:function(a,b,c){H.pq(c)
H.bs(b,a,a.length)
a[b]=c},
$acf:function(){return[P.A]},
$ay:function(){return[P.A]},
$ik:1,
$ak:function(){return[P.A]},
$ib:1,
$ab:function(){return[P.A]}}
H.e_.prototype={
j:function(a,b,c){H.a0(c)
H.bs(b,a,a.length)
a[b]=c},
$acf:function(){return[P.j]},
$ay:function(){return[P.j]},
$ik:1,
$ak:function(){return[P.j]},
$ib:1,
$ab:function(){return[P.j]}}
H.hY.prototype={
l:function(a,b){H.bs(b,a,a.length)
return a[b]}}
H.hZ.prototype={
l:function(a,b){H.bs(b,a,a.length)
return a[b]}}
H.i_.prototype={
l:function(a,b){H.bs(b,a,a.length)
return a[b]}}
H.i0.prototype={
l:function(a,b){H.bs(b,a,a.length)
return a[b]}}
H.i1.prototype={
l:function(a,b){H.bs(b,a,a.length)
return a[b]}}
H.e0.prototype={
gn:function(a){return a.length},
l:function(a,b){H.bs(b,a,a.length)
return a[b]},
$iqy:1}
H.cl.prototype={
gn:function(a){return a.length},
l:function(a,b){H.bs(b,a,a.length)
return a[b]},
$icl:1,
$iR:1}
H.dj.prototype={}
H.dk.prototype={}
H.dl.prototype={}
H.dm.prototype={}
P.jM.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:20}
P.jL.prototype={
$1:function(a){var u,t
this.a.a=H.o(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:48}
P.jN.prototype={
$0:function(){this.a.$0()},
$S:2}
P.jO.prototype={
$0:function(){this.a.$0()},
$S:2}
P.f7.prototype={
fw:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cB(new P.kn(this,b),0),a)
else throw H.f(P.I("`setTimeout()` not found."))},
fz:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cB(new P.km(this,a,Date.now(),b),0),a)
else throw H.f(P.I("Periodic timer."))},
$ibm:1}
P.kn.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.km.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.fa(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.br.prototype={
jX:function(a){if(this.c!==6)return!0
return this.b.b.cT(H.o(this.d,{func:1,ret:P.a4,args:[P.Q]}),a.a,P.a4,P.Q)},
jS:function(a){var u=this.e,t=P.Q,s={futureOr:1,type:H.v(this,1)},r=this.b.b
if(H.fp(u,{func:1,args:[P.Q,P.aw]}))return H.ly(r.kp(u,a.a,a.b,null,t,P.aw),s)
else return H.ly(r.cT(H.o(u,{func:1,args:[P.Q]}),a.a,null,t),s)}}
P.aM.prototype={
eR:function(a,b,c){var u,t,s,r=H.v(this,0)
H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.Z
if(u!==C.f){u.toString
H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.pe(b,u)}H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aM($.Z,[c])
s=b==null?1:3
this.de(new P.br(t,s,a,b,[r,c]))
return t},
kt:function(a,b){return this.eR(a,null,b)},
de:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.i(t.c,"$ibr")
t.c=a}else{if(s===2){u=H.i(t.c,"$iaM")
s=u.a
if(s<4){u.de(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.kE(null,null,s,H.o(new P.jW(t,a),{func:1,ret:-1}))}},
dL:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.i(p.c,"$ibr")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.i(p.c,"$iaM")
u=q.a
if(u<4){q.dL(a)
return}p.a=u
p.c=q.c}o.a=p.bJ(a)
u=p.b
u.toString
P.kE(null,null,u,H.o(new P.k_(o,p),{func:1,ret:-1}))}},
cn:function(){var u=H.i(this.c,"$ibr")
this.c=null
return this.bJ(u)},
bJ:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dm:function(a){var u,t,s=this,r=H.v(s,0)
H.ly(a,{futureOr:1,type:r})
u=s.$ti
if(H.lv(a,"$icR",u,"$acR"))if(H.lv(a,"$iaM",u,null))P.my(a,s)
else P.oy(a,s)
else{t=s.cn()
H.D(a,r)
s.a=4
s.c=a
P.dh(s,t)}},
dn:function(a,b){var u,t=this
H.i(b,"$iaw")
u=t.cn()
t.a=8
t.c=new P.at(a,b)
P.dh(t,u)},
$icR:1}
P.jW.prototype={
$0:function(){P.dh(this.a,this.b)},
$S:2}
P.k_.prototype={
$0:function(){P.dh(this.b,this.a.a)},
$S:2}
P.jX.prototype={
$1:function(a){var u=this.a
u.a=0
u.dm(a)},
$S:20}
P.jY.prototype={
$2:function(a,b){H.i(b,"$iaw")
this.a.dn(a,b)},
$1:function(a){return this.$2(a,null)},
$S:44}
P.jZ.prototype={
$0:function(){this.a.dn(this.b,this.c)},
$S:2}
P.k2.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eQ(H.o(s.d,{func:1}),null)}catch(r){u=H.b3(r)
t=H.cE(r)
if(o.d){s=H.i(o.a.a.c,"$iat").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.i(o.a.a.c,"$iat")
else q.b=new P.at(u,t)
q.a=!0
return}if(!!J.S(n).$icR){if(n instanceof P.aM&&n.a>=4){if(n.a===8){s=o.b
s.b=H.i(n.c,"$iat")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.kt(new P.k3(p),null)
s.a=!1}},
$S:3}
P.k3.prototype={
$1:function(a){return this.a},
$S:43}
P.k1.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.v(s,0)
q=H.D(n.c,r)
p=H.v(s,1)
n.a.b=s.b.b.cT(H.o(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.b3(o)
t=H.cE(o)
s=n.a
s.b=new P.at(u,t)
s.a=!0}},
$S:3}
P.k0.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.i(m.a.a.c,"$iat")
r=m.c
if(H.G(r.jX(u))&&r.e!=null){q=m.b
q.b=r.jS(u)
q.a=!1}}catch(p){t=H.b3(p)
s=H.cE(p)
r=H.i(m.a.a.c,"$iat")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.at(t,s)
n.a=!0}},
$S:3}
P.ew.prototype={}
P.iM.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aM($.Z,[P.j])
r.a=0
u=H.v(s,0)
t=H.o(new P.iO(r,s),{func:1,ret:-1,args:[u]})
H.o(new P.iP(r,q),{func:1,ret:-1})
W.af(s.a,s.b,t,!1,u)
return q}}
P.iO.prototype={
$1:function(a){H.D(a,H.v(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.P,args:[H.v(this.b,0)]}}}
P.iP.prototype={
$0:function(){this.b.dm(this.a.a)},
$S:2}
P.d7.prototype={}
P.iN.prototype={}
P.bm.prototype={}
P.at.prototype={
i:function(a){return H.m(this.a)},
$ibN:1}
P.kv.prototype={$iqL:1}
P.kD.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e2():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.i(0)
throw u},
$S:2}
P.kb.prototype={
kq:function(a){var u,t,s,r=null
H.o(a,{func:1,ret:-1})
try{if(C.f===$.Z){a.$0()
return}P.mJ(r,r,this,a,-1)}catch(s){u=H.b3(s)
t=H.cE(s)
P.kC(r,r,this,u,H.i(t,"$iaw"))}},
kr:function(a,b,c){var u,t,s,r=null
H.o(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.f===$.Z){a.$1(b)
return}P.mK(r,r,this,a,b,-1,c)}catch(s){u=H.b3(s)
t=H.cE(s)
P.kC(r,r,this,u,H.i(t,"$iaw"))}},
jw:function(a,b){return new P.kd(this,H.o(a,{func:1,ret:b}),b)},
cv:function(a){return new P.kc(this,H.o(a,{func:1,ret:-1}))},
dZ:function(a,b){return new P.ke(this,H.o(a,{func:1,ret:-1,args:[b]}),b)},
eQ:function(a,b){H.o(a,{func:1,ret:b})
if($.Z===C.f)return a.$0()
return P.mJ(null,null,this,a,b)},
cT:function(a,b,c,d){H.o(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.Z===C.f)return a.$1(b)
return P.mK(null,null,this,a,b,c,d)},
kp:function(a,b,c,d,e,f){H.o(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.Z===C.f)return a.$2(b,c)
return P.pf(null,null,this,a,b,c,d,e,f)}}
P.kd.prototype={
$0:function(){return this.a.eQ(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.kc.prototype={
$0:function(){return this.a.kq(this.b)},
$S:3}
P.ke.prototype={
$1:function(a){var u=this.c
return this.a.kr(this.b,H.D(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.k8.prototype={
gZ:function(a){return P.mA(this,this.r,H.v(this,0))},
gn:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.D(b,H.v(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.dj(u==null?s.b=P.lo():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.dj(t==null?s.c=P.lo():t,b)}else return s.fB(0,b)},
fB:function(a,b){var u,t,s,r=this
H.D(b,H.v(r,0))
u=r.d
if(u==null)u=r.d=P.lo()
t=r.dq(b)
s=u[t]
if(s==null)u[t]=[r.c6(b)]
else{if(r.dz(s,b)>=0)return!1
s.push(r.c6(b))}return!0},
U:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iL(this.c,b)
else return this.iK(0,b)},
iK:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.he(r,b)
t=s.dz(u,b)
if(t<0)return!1
s.dT(u.splice(t,1)[0])
return!0},
dj:function(a,b){H.D(b,H.v(this,0))
if(H.i(a[b],"$idi")!=null)return!1
a[b]=this.c6(b)
return!0},
iL:function(a,b){var u
if(a==null)return!1
u=H.i(a[b],"$idi")
if(u==null)return!1
this.dT(u)
delete a[b]
return!0},
dE:function(){this.r=1073741823&this.r+1},
c6:function(a){var u,t=this,s=new P.di(H.D(a,H.v(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dE()
return s},
dT:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dE()},
dq:function(a){return J.c4(a)&1073741823},
he:function(a,b){return a[this.dq(b)]},
dz:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.V(a[t].a,b))return t
return-1}}
P.di.prototype={}
P.k9.prototype={
gP:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.cb(t))
else{t=u.c
if(t==null){u.sdk(null)
return!1}else{u.sdk(H.D(t.a,H.v(u,0)))
u.c=u.c.b
return!0}}},
sdk:function(a){this.d=H.D(a,H.v(this,0))},
$ibd:1}
P.hv.prototype={$ik:1,$ib:1}
P.y.prototype={
gZ:function(a){return new H.dU(a,this.gn(a),[H.cD(this,a,"y",0)])},
J:function(a,b){return this.l(a,b)},
kv:function(a,b){var u,t=this,s=H.c([],[H.cD(t,a,"y",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.j(s,u,t.l(a,u))
return s},
ku:function(a){return this.kv(a,!0)},
el:function(a,b,c,d){var u
H.D(d,H.cD(this,a,"y",0))
P.bX(b,c,this.gn(a))
for(u=b;u<c;++u)this.j(a,u,d)},
i:function(a){return P.l6(a,"[","]")}}
P.hy.prototype={}
P.hz.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.m(a)
t.a=u+": "
t.a+=H.m(b)},
$S:10}
P.an.prototype={
K:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.cD(s,a,"an",0),H.cD(s,a,"an",1)]})
for(u=J.c5(s.gaX(a));u.A();){t=u.gP(u)
b.$2(t,s.l(a,t))}},
gn:function(a){return J.aO(this.gaX(a))},
i:function(a){return P.lc(a)},
$ix:1}
P.ko.prototype={
j:function(a,b,c){H.D(b,H.v(this,0))
H.D(c,H.v(this,1))
throw H.f(P.I("Cannot modify unmodifiable map"))}}
P.hA.prototype={
l:function(a,b){return J.dy(this.a,b)},
j:function(a,b,c){J.kX(this.a,H.D(b,H.v(this,0)),H.D(c,H.v(this,1)))},
K:function(a,b){J.lP(this.a,H.o(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]}))},
gn:function(a){return J.aO(this.a)},
i:function(a){return J.b8(this.a)},
$ix:1}
P.ep.prototype={}
P.kf.prototype={
i:function(a){return P.l6(this,"{","}")},
J:function(a,b){var u,t,s,r=this
P.md(b,"index")
for(u=P.mA(r,r.r,H.v(r,0)),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.f(P.W(b,r,"index",null,t))},
$ik:1,
$img:1}
P.eL.prototype={}
P.fd.prototype={}
P.fL.prototype={
jZ:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bX(a0,a1,b.length)
u=$.nq()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.G(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kK(C.b.G(b,n))
j=H.kK(C.b.G(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.b.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.aq("")
g=r.a+=C.b.w(b,s,t)
r.a=g+H.e7(m)
s=n
continue}}throw H.f(P.a7("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.w(b,s,a1)
f=g.length
if(q>=0)P.lQ(b,p,a1,q,o,f)
else{e=C.d.b1(f-1,4)+1
if(e===1)throw H.f(P.a7(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.bi(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lQ(b,p,a1,q,o,d)
else{e=C.d.b1(d,4)
if(e===1)throw H.f(P.a7(c,b,a1))
if(e>1)b=C.b.bi(b,a1,a1,e===2?"==":"=")}return b},
$aca:function(){return[[P.b,P.j],P.l]}}
P.fM.prototype={
$acc:function(){return[[P.b,P.j],P.l]}}
P.ca.prototype={}
P.cc.prototype={}
P.h8.prototype={
$aca:function(){return[P.l,[P.b,P.j]]}}
P.js.prototype={
gjO:function(){return C.J}}
P.ju.prototype={
cB:function(a){var u,t,s=P.bX(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.ku(u)
if(t.hc(a,0,s)!==s)t.dV(J.nw(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oP(0,t.b,u.length)))},
$acc:function(){return[P.l,[P.b,P.j]]}}
P.ku.prototype={
dV:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
hc:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.Y(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.G(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dV(r,C.b.G(a,p)))s=p}else if(r<=2047){q=n.b
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
P.jt.prototype={
cB:function(a){var u,t,s,r,q,p,o,n,m
H.h(a,"$ib",[P.j],"$ab")
u=P.oo(!1,a,0,null)
if(u!=null)return u
t=P.bX(0,null,J.aO(a))
s=P.mM(a,0,t)
if(s>0){r=P.d8(a,0,s)
if(s===t)return r
q=new P.aq(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.aq("")
n=new P.kt(!1,q)
n.c=o
n.jB(a,p,t)
if(n.e>0){H.B(P.a7("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.e7(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$acc:function(){return[[P.b,P.j],P.l]}}
P.kt.prototype={
jB:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.h(a,"$ib",[P.j],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.bC(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.l(a,p)
if(typeof o!=="number")return o.ak()
if((o&192)!==128){n=P.a7(h+C.d.bz(o,16),a,p)
throw H.f(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.e(C.u,n)
if(u<=C.u[n]){n=P.a7("Overlong encoding of 0x"+C.d.bz(u,16),a,p-s-1)
throw H.f(n)}if(u>1114111){n=P.a7("Character outside valid Unicode range: 0x"+C.d.bz(u,16),a,p-s-1)
throw H.f(n)}if(!i.c||u!==65279)q.a+=H.e7(u)
i.c=!1}for(n=p<c;n;){m=P.mM(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.d8(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.l(a,l)
if(typeof o!=="number")return o.C()
if(o<0){j=P.a7("Negative UTF-8 code unit: -0x"+C.d.bz(-o,16),a,k-1)
throw H.f(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a7(h+C.d.bz(o,16),a,k-1)
throw H.f(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.a4.prototype={}
P.aA.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.aA&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.d.bc(u,30))&1073741823},
i:function(a){var u=this,t=P.nJ(H.o8(u)),s=P.dG(H.o6(u)),r=P.dG(H.o2(u)),q=P.dG(H.o3(u)),p=P.dG(H.o5(u)),o=P.dG(H.o7(u)),n=P.nK(H.o4(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.A.prototype={}
P.aQ.prototype={
ab:function(a,b){return C.d.ab(this.a,b.gkF())},
q:function(a,b){if(b==null)return!1
return b instanceof P.aQ&&this.a===b.a},
gH:function(a){return C.d.gH(this.a)},
i:function(a){var u,t,s,r=new P.h6(),q=this.a
if(q<0)return"-"+new P.aQ(0-q).i(0)
u=r.$1(C.d.a6(q,6e7)%60)
t=r.$1(C.d.a6(q,1e6)%60)
s=new P.h5().$1(q%1e6)
return""+C.d.a6(q,36e8)+":"+H.m(u)+":"+H.m(t)+"."+H.m(s)}}
P.h5.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:26}
P.h6.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:26}
P.bN.prototype={}
P.fF.prototype={
i:function(a){return"Assertion failed"}}
P.e2.prototype={
i:function(a){return"Throw of null."}}
P.b9.prototype={
gc9:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc8:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gc9()+o+u
if(!q.a)return t
s=q.gc8()
r=P.dL(q.b)
return t+s+": "+r}}
P.bW.prototype={
gc9:function(){return"RangeError"},
gc8:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.m(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.m(s)
else if(t>s)u=": Not in range "+H.m(s)+".."+H.m(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.m(s)}return u}}
P.hm.prototype={
gc9:function(){return"RangeError"},
gc8:function(){var u,t=H.a0(this.b)
if(typeof t!=="number")return t.C()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.m(u)},
gn:function(a){return this.f}}
P.jl.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ji.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.iH.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fU.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dL(u)+"."}}
P.i6.prototype={
i:function(a){return"Out of Memory"},
$ibN:1}
P.eg.prototype={
i:function(a){return"Stack Overflow"},
$ibN:1}
P.h0.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eE.prototype={
i:function(a){return"Exception: "+this.a}}
P.hi.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.w(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.G(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.Y(f,q)
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
return h+l+j+k+"\n"+C.b.k(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.m(g)+")"):h}}
P.j.prototype={}
P.k.prototype={
gn:function(a){var u,t=this.gZ(this)
for(u=0;t.A();)++u
return u},
J:function(a,b){var u,t,s
P.md(b,"index")
for(u=this.gZ(this),t=0;u.A();){s=u.gP(u)
if(b===t)return s;++t}throw H.f(P.W(b,this,"index",null,t))},
i:function(a){return P.nO(this,"(",")")}}
P.bd.prototype={}
P.b.prototype={$ik:1}
P.x.prototype={}
P.P.prototype={
gH:function(a){return P.Q.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.ab.prototype={}
P.Q.prototype={constructor:P.Q,$iQ:1,
q:function(a,b){return this===b},
gH:function(a){return H.d2(this)},
i:function(a){return"Instance of '"+H.co(this)+"'"},
toString:function(){return this.i(this)}}
P.aw.prototype={}
P.l.prototype={$im7:1}
P.aq.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iqm:1}
P.jq.prototype={
$2:function(a,b){var u,t,s,r=P.l
H.h(a,"$ix",[r,r],"$ax")
H.N(b)
u=J.lA(b).es(b,"=")
if(u===-1){if(b!=="")J.kX(a,P.lq(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.w(b,0,u)
s=C.b.av(b,u+1)
r=this.a
J.kX(a,P.lq(t,0,t.length,r,!0),P.lq(s,0,s.length,r,!0))}return a},
$S:42}
P.jn.prototype={
$2:function(a,b){throw H.f(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:41}
P.jo.prototype={
$2:function(a,b){throw H.f(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:40}
P.jp.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.cF(C.b.w(this.b,a,b),null,16)
if(typeof u!=="number")return u.C()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:39}
P.cw.prototype={
geX:function(){return this.b},
gcK:function(a){var u=this.c
if(u==null)return""
if(C.b.al(u,"["))return C.b.w(u,1,u.length-1)
return u},
gbV:function(a){var u=this.d
if(u==null)return P.mB(this.a)
return u},
gcS:function(a){var u=this.f
return u==null?"":u},
gen:function(){var u=this.r
return u==null?"":u},
eN:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.h(b,"$ix",[P.l,null],"$ax")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.al(p,"/"))p="/"+p
n=P.lp(null,0,0,b)
return new P.cw(u,s,q,r,p,n,m.r)},
geM:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.l
s.siI(new P.ep(P.mo(u==null?"":u),[t,t]))}return s.Q},
geo:function(){return this.c!=null},
ger:function(){return this.f!=null},
gep:function(){return this.r!=null},
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
if(!!J.S(b).$ilj)if(s.a==b.gc_())if(s.c!=null===b.geo())if(s.b==b.geX())if(s.gcK(s)==b.gcK(b))if(s.gbV(s)==b.gbV(b))if(s.e===b.geG(b)){u=s.f
t=u==null
if(!t===b.ger()){if(t)u=""
if(u===b.gcS(b)){u=s.r
t=u==null
if(!t===b.gep()){if(t)u=""
u=u===b.gen()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gH:function(a){var u=this.z
return u==null?this.z=C.b.gH(this.i(0)):u},
siI:function(a){var u=P.l
this.Q=H.h(a,"$ix",[u,u],"$ax")},
$ilj:1,
gc_:function(){return this.a},
geG:function(a){return this.e}}
P.kp.prototype={
$1:function(a){throw H.f(P.a7("Invalid port",this.a,this.b+1))},
$S:37}
P.kq.prototype={
$1:function(a){return P.fe(C.T,a,C.h,!1)},
$S:35}
P.ks.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.m(P.fe(C.p,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.m(P.fe(C.p,b,C.h,!0))}},
$S:27}
P.kr.prototype={
$2:function(a,b){var u,t
H.N(a)
if(b==null||typeof b==="string")this.a.$2(a,H.N(b))
else for(u=J.c5(H.mZ(b,"$ik")),t=this.a;u.A();)t.$2(a,H.N(u.gP(u)))},
$S:34}
P.jm.prototype={
geW:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.e(o,0)
u=q.a
o=o[0]+1
t=C.b.eu(u,"?",o)
s=u.length
if(t>=0){r=P.dt(u,t+1,s,C.n,!1)
s=t}else r=p
return q.c=new P.jS("data",p,p,p,P.dt(u,o,s,C.x,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.e(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kx.prototype={
$1:function(a){return new Uint8Array(96)},
$S:33}
P.kw.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.nx(u,0,96,b)
return u},
$S:32}
P.ky.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.G(b,s)^96
if(r>=t)return H.e(a,r)
a[r]=c}}}
P.kz.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.G(b,0),t=C.b.G(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.e(a,r)
a[r]=c}}}
P.kg.prototype={
geo:function(){return this.c>0},
geq:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.m()
t=this.e
if(typeof t!=="number")return H.d(t)
t=u+1<t
u=t}else u=!1
return u},
ger:function(){var u=this.f
if(typeof u!=="number")return u.C()
return u<this.r},
gep:function(){return this.r<this.a.length},
gdC:function(){return this.b===4&&C.b.al(this.a,"http")},
gdD:function(){return this.b===5&&C.b.al(this.a,"https")},
gc_:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdC())q=t.x="http"
else if(t.gdD()){t.x="https"
q="https"}else if(q===4&&C.b.al(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.al(t.a,r)){t.x=r
q=r}else{q=C.b.w(t.a,0,q)
t.x=q}return q},
geX:function(){var u=this.c,t=this.b+3
return u>t?C.b.w(this.a,t,u-1):""},
gcK:function(a){var u=this.c
return u>0?C.b.w(this.a,u,this.d):""},
gbV:function(a){var u,t=this
if(t.geq()){u=t.d
if(typeof u!=="number")return u.m()
return P.cF(C.b.w(t.a,u+1,t.e),null,null)}if(t.gdC())return 80
if(t.gdD())return 443
return 0},
geG:function(a){return C.b.w(this.a,this.e,this.f)},
gcS:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.C()
return u<t?C.b.w(this.a,u+1,t):""},
gen:function(){var u=this.r,t=this.a
return u<t.length?C.b.av(t,u+1):""},
geM:function(){var u=this,t=u.f
if(typeof t!=="number")return t.C()
if(t>=u.r)return C.U
t=P.l
return new P.ep(P.mo(u.gcS(u)),[t,t])},
eN:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.h(b,"$ix",[P.l,null],"$ax")
u=k.gc_()
t=u==="file"
s=k.c
r=s>0?C.b.w(k.a,k.b+3,s):""
q=k.geq()?k.gbV(k):j
s=k.c
if(s>0)p=C.b.w(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.w(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.al(o,"/"))o="/"+o
m=P.lp(j,0,0,b)
n=k.r
l=n<s.length?C.b.av(s,n+1):j
return new P.cw(u,r,p,q,o,m,l)},
gH:function(a){var u=this.y
return u==null?this.y=C.b.gH(this.a):u},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.S(b).$ilj&&this.a===b.i(0)},
i:function(a){return this.a},
$ilj:1}
P.jS.prototype={}
W.r.prototype={}
W.fB.prototype={
gn:function(a){return a.length}}
W.fD.prototype={
i:function(a){return String(a)}}
W.fE.prototype={
i:function(a){return String(a)}}
W.c7.prototype={$ic7:1}
W.c8.prototype={
cY:function(a,b,c){if(c!=null)return a.getContext(b,P.pm(c))
return a.getContext(b)},
f0:function(a,b){return this.cY(a,b,null)},
$ic8:1}
W.cM.prototype={$icM:1}
W.bK.prototype={
gn:function(a){return a.length}}
W.cO.prototype={$icO:1}
W.fX.prototype={
gn:function(a){return a.length}}
W.T.prototype={$iT:1}
W.cP.prototype={
gn:function(a){return a.length}}
W.fY.prototype={}
W.bb.prototype={}
W.bc.prototype={}
W.fZ.prototype={
gn:function(a){return a.length}}
W.h_.prototype={
gn:function(a){return a.length}}
W.h1.prototype={
gn:function(a){return a.length}}
W.dH.prototype={$idH:1}
W.h2.prototype={
i:function(a){return String(a)}}
W.dI.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.h(c,"$iao",[P.ab],"$aao")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[[P.ao,P.ab]]},
$ay:function(){return[[P.ao,P.ab]]},
$ik:1,
$ak:function(){return[[P.ao,P.ab]]},
$ib:1,
$ab:function(){return[[P.ao,P.ab]]},
$aF:function(){return[[P.ao,P.ab]]}}
W.dJ.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gb0(a))+" x "+H.m(this.gaW(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.S(b)
if(!u.$iao)return!1
return a.left===u.gae(b)&&a.top===u.gbW(b)&&this.gb0(a)===u.gb0(b)&&this.gaW(a)===u.gaW(b)},
gH:function(a){return W.mz(C.e.gH(a.left),C.e.gH(a.top),C.e.gH(this.gb0(a)),C.e.gH(this.gaW(a)))},
ge_:function(a){return a.bottom},
gaW:function(a){return a.height},
gae:function(a){return a.left},
gag:function(a){return a.right},
gbW:function(a){return a.top},
gb0:function(a){return a.width},
$iao:1,
$aao:function(){return[P.ab]}}
W.h3.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.N(c)
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[P.l]},
$ay:function(){return[P.l]},
$ik:1,
$ak:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]},
$aF:function(){return[P.l]}}
W.h4.prototype={
gn:function(a){return a.length}}
W.jQ.prototype={
gn:function(a){return this.b.length},
l:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.i(u[b],"$ia6")},
j:function(a,b,c){var u
H.i(c,"$ia6")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gZ:function(a){var u=this.ku(this)
return new J.av(u,u.length,[H.v(u,0)])},
$ay:function(){return[W.a6]},
$ak:function(){return[W.a6]},
$ab:function(){return[W.a6]}}
W.a6.prototype={
ge1:function(a){return new W.jQ(a,a.children)},
ge2:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.C()
if(s<0)s=-s*0
if(typeof r!=="number")return r.C()
if(r<0)r=-r*0
return new P.ao(u,t,s,r,[P.ab])},
i:function(a){return a.localName},
$ia6:1}
W.p.prototype={$ip:1}
W.n.prototype={
jo:function(a,b,c,d){H.o(c,{func:1,args:[W.p]})
if(c!=null)this.fD(a,b,c,!1)},
fD:function(a,b,c,d){return a.addEventListener(b,H.cB(H.o(c,{func:1,args:[W.p]}),1),!1)},
$in:1}
W.aF.prototype={$iaF:1}
W.cQ.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.i(c,"$iaF")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aF]},
$ay:function(){return[W.aF]},
$ik:1,
$ak:function(){return[W.aF]},
$ib:1,
$ab:function(){return[W.aF]},
$icQ:1,
$aF:function(){return[W.aF]}}
W.hd.prototype={
gn:function(a){return a.length}}
W.hh.prototype={
gn:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.hl.prototype={
gn:function(a){return a.length}}
W.cg.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.i(c,"$iK")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.K]},
$ay:function(){return[W.K]},
$ik:1,
$ak:function(){return[W.K]},
$ib:1,
$ab:function(){return[W.K]},
$icg:1,
$aF:function(){return[W.K]}}
W.bt.prototype={$ibt:1,
ge4:function(a){return a.data}}
W.cT.prototype={$icT:1}
W.bg.prototype={$ibg:1}
W.hw.prototype={
i:function(a){return String(a)}}
W.hR.prototype={
gn:function(a){return a.length}}
W.cX.prototype={$icX:1}
W.hS.prototype={
l:function(a,b){return P.bA(a.get(H.N(b)))},
K:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.l,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bA(t.value[1]))}},
gaX:function(a){var u=H.c([],[P.l])
this.K(a,new W.hT(u))
return u},
gn:function(a){return a.size},
j:function(a,b,c){throw H.f(P.I("Not supported"))},
$aan:function(){return[P.l,null]},
$ix:1,
$ax:function(){return[P.l,null]}}
W.hT.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hU.prototype={
l:function(a,b){return P.bA(a.get(H.N(b)))},
K:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.l,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bA(t.value[1]))}},
gaX:function(a){var u=H.c([],[P.l])
this.K(a,new W.hV(u))
return u},
gn:function(a){return a.size},
j:function(a,b,c){throw H.f(P.I("Not supported"))},
$aan:function(){return[P.l,null]},
$ix:1,
$ax:function(){return[P.l,null]}}
W.hV.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aT.prototype={$iaT:1}
W.hW.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.i(c,"$iaT")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aT]},
$ay:function(){return[W.aT]},
$ik:1,
$ak:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aF:function(){return[W.aT]}}
W.aj.prototype={$iaj:1}
W.jP.prototype={
j:function(a,b,c){var u,t
H.i(c,"$iK")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
u.replaceChild(c,t[b])},
gZ:function(a){var u=this.a.childNodes
return new W.dM(u,u.length,[H.cD(C.W,u,"F",0)])},
gn:function(a){return this.a.childNodes.length},
l:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$ay:function(){return[W.K]},
$ak:function(){return[W.K]},
$ab:function(){return[W.K]}}
W.K.prototype={
kn:function(a,b){var u,t
try{u=a.parentNode
J.nu(u,b,a)}catch(t){H.b3(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.f7(a):u},
iN:function(a,b,c){return a.replaceChild(b,c)},
$iK:1}
W.d0.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.i(c,"$iK")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.K]},
$ay:function(){return[W.K]},
$ik:1,
$ak:function(){return[W.K]},
$ib:1,
$ab:function(){return[W.K]},
$aF:function(){return[W.K]}}
W.aU.prototype={$iaU:1,
gn:function(a){return a.length}}
W.i9.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.i(c,"$iaU")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aU]},
$ay:function(){return[W.aU]},
$ik:1,
$ak:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aF:function(){return[W.aU]}}
W.io.prototype={
l:function(a,b){return P.bA(a.get(H.N(b)))},
K:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.l,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bA(t.value[1]))}},
gaX:function(a){var u=H.c([],[P.l])
this.K(a,new W.ip(u))
return u},
gn:function(a){return a.size},
j:function(a,b,c){throw H.f(P.I("Not supported"))},
$aan:function(){return[P.l,null]},
$ix:1,
$ax:function(){return[P.l,null]}}
W.ip.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.ir.prototype={
gn:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.iE.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.i(c,"$iaW")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aW]},
$ay:function(){return[W.aW]},
$ik:1,
$ak:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aF:function(){return[W.aW]}}
W.aX.prototype={$iaX:1}
W.iF.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.i(c,"$iaX")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aX]},
$ay:function(){return[W.aX]},
$ik:1,
$ak:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aF:function(){return[W.aX]}}
W.aY.prototype={$iaY:1,
gn:function(a){return a.length}}
W.iK.prototype={
l:function(a,b){return a.getItem(H.N(b))},
j:function(a,b,c){a.setItem(b,c)},
K:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.l,P.l]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaX:function(a){var u=H.c([],[P.l])
this.K(a,new W.iL(u))
return u},
gn:function(a){return a.length},
$aan:function(){return[P.l,P.l]},
$ix:1,
$ax:function(){return[P.l,P.l]}}
W.iL.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:27}
W.aJ.prototype={$iaJ:1}
W.aZ.prototype={$iaZ:1}
W.aK.prototype={$iaK:1}
W.iV.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.i(c,"$iaK")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aK]},
$ay:function(){return[W.aK]},
$ik:1,
$ak:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aF:function(){return[W.aK]}}
W.iW.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.i(c,"$iaZ")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aZ]},
$ay:function(){return[W.aZ]},
$ik:1,
$ak:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aF:function(){return[W.aZ]}}
W.j1.prototype={
gn:function(a){return a.length}}
W.b_.prototype={$ib_:1}
W.b0.prototype={$ib0:1}
W.j5.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.i(c,"$ib_")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.b_]},
$ay:function(){return[W.b_]},
$ik:1,
$ak:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aF:function(){return[W.b_]}}
W.j6.prototype={
gn:function(a){return a.length}}
W.c_.prototype={}
W.jr.prototype={
i:function(a){return String(a)}}
W.jG.prototype={
gn:function(a){return a.length}}
W.bq.prototype={
gjF:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.I("deltaY is not supported"))},
gjE:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.I("deltaX is not supported"))},
$ibq:1}
W.dg.prototype={
iO:function(a,b){return a.requestAnimationFrame(H.cB(H.o(b,{func:1,ret:-1,args:[P.ab]}),1))},
h7:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jR.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.i(c,"$iT")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.T]},
$ay:function(){return[W.T]},
$ik:1,
$ak:function(){return[W.T]},
$ib:1,
$ab:function(){return[W.T]},
$aF:function(){return[W.T]}}
W.ez.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.S(b)
if(!u.$iao)return!1
return a.left===u.gae(b)&&a.top===u.gbW(b)&&a.width===u.gb0(b)&&a.height===u.gaW(b)},
gH:function(a){return W.mz(C.e.gH(a.left),C.e.gH(a.top),C.e.gH(a.width),C.e.gH(a.height))},
gaW:function(a){return a.height},
gb0:function(a){return a.width}}
W.k4.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.i(c,"$iaR")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aR]},
$ay:function(){return[W.aR]},
$ik:1,
$ak:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aF:function(){return[W.aR]}}
W.eQ.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.i(c,"$iK")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.K]},
$ay:function(){return[W.K]},
$ik:1,
$ak:function(){return[W.K]},
$ib:1,
$ab:function(){return[W.K]},
$aF:function(){return[W.K]}}
W.kh.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.i(c,"$iaY")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aY]},
$ay:function(){return[W.aY]},
$ik:1,
$ak:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aF:function(){return[W.aY]}}
W.kl.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.i(c,"$iaJ")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aJ]},
$ay:function(){return[W.aJ]},
$ik:1,
$ak:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$aF:function(){return[W.aJ]}}
W.jT.prototype={}
W.ln.prototype={}
W.jU.prototype={}
W.jV.prototype={
$1:function(a){return this.a.$1(H.i(a,"$ip"))},
$S:31}
W.F.prototype={
gZ:function(a){return new W.dM(a,this.gn(a),[H.cD(this,a,"F",0)])}}
W.dM.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdA(J.dy(u.a,t))
u.c=t
return!0}u.sdA(null)
u.c=s
return!1},
gP:function(a){return this.d},
sdA:function(a){this.d=H.D(a,H.v(this,0))},
$ibd:1}
W.ey.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f2.prototype={}
W.f5.prototype={}
W.f6.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
P.ki.prototype={
em:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cW:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.S(a)
if(!!u.$iaA)return new Date(a.a)
if(!!u.$ioc)throw H.f(P.jj("structured clone of RegExp"))
if(!!u.$iaF)return a
if(!!u.$ic7)return a
if(!!u.$icQ)return a
if(!!u.$ibt)return a
if(!!u.$icZ||!!u.$ibT||!!u.$icX)return a
if(!!u.$ix){t=q.em(a)
s=q.b
if(t>=s.length)return H.e(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.j(s,t,r)
u.K(a,new P.kk(p,q))
return p.a}if(!!u.$ib){t=q.em(a)
p=q.b
if(t>=p.length)return H.e(p,t)
r=p[t]
if(r!=null)return r
return q.jC(a,t)}throw H.f(P.jj("structured clone of other type"))},
jC:function(a,b){var u,t=J.bC(a),s=t.gn(a),r=new Array(s)
C.a.j(this.b,b,r)
for(u=0;u<s;++u)C.a.j(r,u,this.cW(t.l(a,u)))
return r}}
P.kk.prototype={
$2:function(a,b){this.a.a[a]=this.b.cW(b)},
$S:10}
P.fc.prototype={$ibt:1,
ge4:function(a){return this.a}}
P.kF.prototype={
$2:function(a,b){this.a[a]=b},
$S:10}
P.kj.prototype={}
P.he.prototype={
gbH:function(){var u=this.b,t=H.aD(u,"y",0),s=W.a6
return new H.hB(new H.jI(u,H.o(new P.hf(),{func:1,ret:P.a4,args:[t]}),[t]),H.o(new P.hg(),{func:1,ret:s,args:[t]}),[t,s])},
j:function(a,b,c){var u
H.i(c,"$ia6")
u=this.gbH()
J.ny(u.b.$1(J.kZ(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aO(this.gbH().a)},
l:function(a,b){var u=this.gbH()
return u.b.$1(J.kZ(u.a,b))},
gZ:function(a){var u=P.lb(this.gbH(),!1,W.a6)
return new J.av(u,u.length,[H.v(u,0)])},
$ay:function(){return[W.a6]},
$ak:function(){return[W.a6]},
$ab:function(){return[W.a6]}}
P.hf.prototype={
$1:function(a){return!!J.S(H.i(a,"$iK")).$ia6},
$S:29}
P.hg.prototype={
$1:function(a){return H.t(H.i(a,"$iK"),"$ia6")},
$S:53}
P.k5.prototype={
jY:function(a){if(a<=0||a>4294967296)throw H.f(P.ob("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
P.ka.prototype={
gag:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.d(t)
return H.D(u+t,H.v(this,0))},
ge_:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.d(t)
return H.D(u+t,H.v(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.m(u.a)+", "+H.m(u.b)+") "+H.m(u.c)+" x "+H.m(u.d)},
q:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.S(b)
if(!!u.$iao){t=p.a
if(t==u.gae(b)){s=p.b
if(s==u.gbW(b)){r=p.c
if(typeof t!=="number")return t.m()
if(typeof r!=="number")return H.d(r)
q=H.v(p,0)
if(H.D(t+r,q)===u.gag(b)){t=p.d
if(typeof s!=="number")return s.m()
if(typeof t!=="number")return H.d(t)
u=H.D(s+t,q)===u.ge_(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u,t=this,s=t.a,r=J.c4(s),q=t.b,p=J.c4(q),o=t.c
if(typeof s!=="number")return s.m()
if(typeof o!=="number")return H.d(o)
u=H.v(t,0)
o=C.d.gH(H.D(s+o,u))
s=t.d
if(typeof q!=="number")return q.m()
if(typeof s!=="number")return H.d(s)
u=C.d.gH(H.D(q+s,u))
return P.oz(P.k7(P.k7(P.k7(P.k7(0,r),p),o),u))}}
P.ao.prototype={
gae:function(a){return this.a},
gbW:function(a){return this.b},
gb0:function(a){return this.c},
gaW:function(a){return this.d}}
P.bh.prototype={$ibh:1}
P.hs.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){H.i(c,"$ibh")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.l(a,b)},
$ay:function(){return[P.bh]},
$ik:1,
$ak:function(){return[P.bh]},
$ib:1,
$ab:function(){return[P.bh]},
$aF:function(){return[P.bh]}}
P.bk.prototype={$ibk:1}
P.i3.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){H.i(c,"$ibk")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.l(a,b)},
$ay:function(){return[P.bk]},
$ik:1,
$ak:function(){return[P.bk]},
$ib:1,
$ab:function(){return[P.bk]},
$aF:function(){return[P.bk]}}
P.ib.prototype={
gn:function(a){return a.length}}
P.iQ.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){H.N(c)
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.l(a,b)},
$ay:function(){return[P.l]},
$ik:1,
$ak:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]},
$aF:function(){return[P.l]}}
P.q.prototype={
ge1:function(a){return new P.he(a,new W.jP(a))}}
P.bn.prototype={$ibn:1}
P.j7.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){H.i(c,"$ibn")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.l(a,b)},
$ay:function(){return[P.bn]},
$ik:1,
$ak:function(){return[P.bn]},
$ib:1,
$ab:function(){return[P.bn]},
$aF:function(){return[P.bn]}}
P.eJ.prototype={}
P.eK.prototype={}
P.eT.prototype={}
P.eU.prototype={}
P.f3.prototype={}
P.f4.prototype={}
P.fa.prototype={}
P.fb.prototype={}
P.R.prototype={$ik:1,
$ak:function(){return[P.j]},
$ib:1,
$ab:function(){return[P.j]},
$iol:1}
P.fH.prototype={
gn:function(a){return a.length}}
P.fI.prototype={
l:function(a,b){return P.bA(a.get(H.N(b)))},
K:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.l,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bA(t.value[1]))}},
gaX:function(a){var u=H.c([],[P.l])
this.K(a,new P.fJ(u))
return u},
gn:function(a){return a.size},
j:function(a,b,c){throw H.f(P.I("Not supported"))},
$aan:function(){return[P.l,null]},
$ix:1,
$ax:function(){return[P.l,null]}}
P.fJ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.fK.prototype={
gn:function(a){return a.length}}
P.c6.prototype={}
P.i4.prototype={
gn:function(a){return a.length}}
P.ex.prototype={}
P.dB.prototype={$idB:1}
P.e8.prototype={$ie8:1}
P.cp.prototype={
ks:function(a,b,c,d,e,f,g){var u,t=J.S(g)
if(!!t.$ibt)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.pn(g))
return}if(!!t.$icT)t=!0
else t=!1
if(t){this.j4(a,b,c,d,e,f,g)
return}throw H.f(P.dz("Incorrect number or type of arguments"))},
j4:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aa:function(a,b,c){return a.uniform1f(b,c)},
bY:function(a,b,c){return a.uniform1i(b,c)},
a_:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eT:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eU:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eV:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$icp:1}
P.ec.prototype={$iec:1}
P.ei.prototype={$iei:1}
P.en.prototype={$ien:1}
P.iG.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return P.bA(a.item(b))},
j:function(a,b,c){H.i(c,"$ix")
throw H.f(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.l(a,b)},
$ay:function(){return[[P.x,,,]]},
$ik:1,
$ak:function(){return[[P.x,,,]]},
$ib:1,
$ab:function(){return[[P.x,,,]]},
$aF:function(){return[[P.x,,,]]}}
P.f_.prototype={}
P.f0.prototype={}
L.i5.prototype={}
B.ha.prototype={
ao:function(a,b){var u,t,s,r,q,p,o,n=this,m=new B.aV(a,b),l=n.c.p(0,m).p(0,$.lJ().k(0,a+b)),k=l.a,j=l.b,i=2-k*k-j*j
if(i>0){u=i*i
t=n.e
s=n.b.m(0,m)
r=n.a
q=r[C.e.aA(s.a)&255]
s=C.e.aA(s.b)
if(typeof q!=="number")return q.m()
s=r[q+s&255]
if(typeof s!=="number")return s.ak()
p=(s&14)>>>1
s=$.n9()
if(p>=8)return H.e(s,p)
o=s[p]
n.e=t+u*u*(o.a*k+o.b*j)}}}
B.aV.prototype={
m:function(a,b){return new B.aV(this.a+b.a,this.b+b.b)},
p:function(a,b){return new B.aV(this.a-b.a,this.b-b.b)},
k:function(a,b){return new B.aV(this.a*b,this.b*b)},
i:function(a){return H.m(this.a)+", "+H.m(this.b)}}
O.a1.prototype={
bD:function(a){var u=this
u.shm(H.c([],[a]))
u.sdJ(null)
u.sdG(null)
u.sdK(null)},
c0:function(a,b,c){var u=this,t=H.aD(u,"a1",0)
H.o(b,{func:1,ret:P.a4,args:[[P.k,t]]})
t={func:1,ret:-1,args:[P.j,[P.k,t]]}
H.o(a,t)
H.o(c,t)
u.sdJ(b)
u.sdG(a)
u.sdK(c)},
bC:function(a,b){return this.c0(a,null,b)},
bm:function(a){var u
H.h(a,"$ik",[H.aD(this,"a1",0)],"$ak")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dF:function(a,b){var u
H.h(b,"$ik",[H.aD(this,"a1",0)],"$ak")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gZ:function(a){var u=this.a
return new J.av(u,u.length,[H.v(u,0)])},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aD(s,"a1",0)
H.D(b,r)
r=[r]
if(H.G(s.bm(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.dF(t,H.c([b],r))}},
aP:function(a,b){var u,t,s=this
H.h(b,"$ik",[H.aD(s,"a1",0)],"$ak")
if(H.G(s.bm(b))){u=s.a
t=u.length
C.a.aP(u,b)
s.dF(t,b)}},
shm:function(a){this.a=H.h(a,"$ib",[H.aD(this,"a1",0)],"$ab")},
sdJ:function(a){this.b=H.o(a,{func:1,ret:P.a4,args:[[P.k,H.aD(this,"a1",0)]]})},
sdG:function(a){this.c=H.o(a,{func:1,ret:-1,args:[P.j,[P.k,H.aD(this,"a1",0)]]})},
sdK:function(a){H.o(a,{func:1,ret:-1,args:[P.j,[P.k,H.aD(this,"a1",0)]]})},
$ik:1}
O.cW.prototype={
gn:function(a){return this.a.length},
gt:function(){var u=this.b
return u==null?this.b=D.O():u},
b2:function(){var u=this.b
if(u!=null)u.E(null)},
ga7:function(a){var u=this.a
if(u.length>0)return C.a.gaY(u)
else return V.ck()},
eK:function(a){var u=this.a
if(a==null)C.a.h(u,V.ck())
else C.a.h(u,a)
this.b2()},
cR:function(){var u=this.a
if(u.length>0){u.pop()
this.b2()}},
sce:function(a){this.a=H.h(a,"$ib",[V.au],"$ab")}}
E.fN.prototype={}
E.a2.prototype={
dh:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.av(u,u.length,[H.v(u,0)]);u.A();){t=u.d
if(t.f==null)t.dh()}},
sd_:function(a){var u,t,s=this,r=s.d
if(r!=a){s.c=null
s.d=a
s.e=null
if(r!=null)r.gt().U(0,s.gbU())
u=s.d
if(u!=null)u.gt().h(0,s.gbU())
t=new D.L("shapeBuilder",r,s.d,[F.d5])
t.b=!0
s.as(t)}},
ah:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aB(0,b,s):null
if(!J.V(q,s.x)){u=s.x
s.x=q
t=new D.L("matrix",u,q,[V.au])
t.b=!0
s.as(t)}r=s.f
if(r!=null)r.ah(0,b)
for(r=s.y.a,r=new J.av(r,r.length,[H.v(r,0)]);r.A();)r.d.ah(0,b)},
bh:function(a){var u,t,s,r=this
if(!r.b)return
u=a.dx
t=r.x
u.toString
if(t==null)C.a.h(u.a,u.ga7(u))
else C.a.h(u.a,t.k(0,u.ga7(u)))
u.b2()
a.eL(r.f)
u=a.dy
s=(u&&C.a).gaY(u)
if(s!=null&&r.d!=null)s.km(a,r)
for(u=r.y.a,u=new J.av(u,u.length,[H.v(u,0)]);u.A();)u.d.bh(a)
a.eI()
a.dx.cR()},
gt:function(){var u=this.z
return u==null?this.z=D.O():u},
as:function(a){var u=this.z
if(u!=null)u.E(a)},
af:function(){return this.as(null)},
eD:function(a){H.i(a,"$iw")
this.e=null
this.as(a)},
k9:function(){return this.eD(null)},
eF:function(a){this.as(H.i(a,"$iw"))},
ka:function(){return this.eF(null)},
eC:function(a){this.as(H.i(a,"$iw"))},
k8:function(){return this.eC(null)},
eA:function(a){this.as(H.i(a,"$iw"))},
k5:function(){return this.eA(null)},
k0:function(a,b){var u,t,s,r,q,p,o
H.h(b,"$ik",[E.a2],"$ak")
for(u=b.length,t=this.gez(),s={func:1,ret:-1,args:[D.w]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.ce()
o.saw(null)
o.sbn(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.saw(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.af()},
k7:function(a,b){var u,t
H.h(b,"$ik",[E.a2],"$ak")
for(u=b.gZ(b),t=this.gez();u.A();)u.gP(u).gt().U(0,t)
this.af()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfj:function(a,b){this.y=H.h(b,"$ia1",[E.a2],"$aa1")},
$icY:1}
E.ij.prototype={
fe:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aA(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cW()
t=[V.au]
u.sce(H.c([],t))
u.b=null
u.gt().h(0,new E.ik(s))
s.cy=u
u=new O.cW()
u.sce(H.c([],t))
u.b=null
u.gt().h(0,new E.il(s))
s.db=u
u=new O.cW()
u.sce(H.c([],t))
u.b=null
u.gt().h(0,new E.im(s))
s.dx=u
s.sj3(H.c([],[O.cq]))
u=s.dy;(u&&C.a).h(u,null)
s.siX(new H.X([P.l,A.d4]))},
gkj:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga7(s)
u=t.db
u=t.z=s.k(0,u.ga7(u))
s=u}return s},
eL:function(a){var u=this.dy,t=a==null?(u&&C.a).gaY(u):a;(u&&C.a).h(u,t)},
eI:function(){var u=this.dy
if(u.length>1)u.pop()},
sj3:function(a){this.dy=H.h(a,"$ib",[O.cq],"$ab")},
siX:function(a){this.fr=H.h(a,"$ix",[P.l,A.d4],"$ax")}}
E.ik.prototype={
$1:function(a){var u
H.i(a,"$iw")
u=this.a
u.ch=u.z=null},
$S:9}
E.il.prototype={
$1:function(a){var u
H.i(a,"$iw")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:9}
E.im.prototype={
$1:function(a){var u
H.i(a,"$iw")
u=this.a
u.cx=u.ch=null},
$S:9}
E.iI.prototype={}
E.ej.prototype={
d5:function(a){H.i(a,"$iw")
this.eO()},
d4:function(){return this.d5(null)},
gjR:function(){var u,t=this,s=Date.now(),r=C.d.a6(P.lV(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aA(s,!1)
return u/r},
dN:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.k()
if(typeof r!=="number")return H.d(r)
u=C.e.bS(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.k()
t=C.e.bS(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lg(C.k,s.gko())}},
eO:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.o(new E.j0(this),{func:1,ret:-1,args:[P.ab]})
C.A.h7(u)
C.A.iO(u,W.mP(t,P.ab))}},
kl:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dN()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aA(r,!1)
s.y=P.lV(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.b2()
r=s.db
C.a.sn(r.a,0)
r.b2()
r=s.dx
C.a.sn(r.a,0)
r.b2()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.bh(p.e)}}catch(q){u=H.b3(q)
t=H.cE(q)
P.lE("Error: "+H.m(u))
P.lE("Stack: "+H.m(t))
throw H.f(u)}}}
E.j0.prototype={
$1:function(a){var u
H.n0(a)
u=this.a
if(u.ch){u.ch=!1
u.kl()}},
$S:28}
Z.et.prototype={$ipL:1}
Z.bJ.prototype={
aR:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.b3(s)
t=P.E('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.m(u))
throw H.f(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.m(u.e)+"]"}}
Z.jH.prototype={$ipM:1}
Z.cL.prototype={
bf:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aR:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aR(a)},
bB:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
bh:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.l],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.b8(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.u(p,", ")+"\nAttrs:   "+C.a.u(r,", ")},
sdB:function(a){this.b=H.h(a,"$ib",[Z.aS],"$ab")},
$iqn:1}
Z.aS.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.co(this.c)+"'")+"]"}}
Z.ae.prototype={
ge3:function(a){var u=this.a,t=(u&$.ac().a)!==0?1:0
if((u&$.as().a)!==0)++t
if((u&$.bI().a)!==0)++t
if((u&$.ag().a)!==0)++t
if((u&$.c3().a)!==0)++t
if((u&$.dw().a)!==0)++t
if((u&$.dx().a)!==0)++t
if((u&$.cI().a)!==0)++t
return(u&$.bH().a)!==0?t+1:t},
gbk:function(a){var u=this.a,t=(u&$.ac().a)!==0?3:0
if((u&$.as().a)!==0)t+=3
if((u&$.bI().a)!==0)t+=3
if((u&$.ag().a)!==0)t+=2
if((u&$.c3().a)!==0)t+=3
if((u&$.dw().a)!==0)t+=3
if((u&$.dx().a)!==0)t+=4
if((u&$.cI().a)!==0)++t
return(u&$.bH().a)!==0?t+4:t},
cu:function(a){var u,t=$.ac(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.as()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bI()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ag()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c3()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dx()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cI()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bH()
if((s&t.a)!==0)if(u===a)return t
return $.np()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.ae))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.l]),t=this.a
if((t&$.ac().a)!==0)C.a.h(u,"Pos")
if((t&$.as().a)!==0)C.a.h(u,"Norm")
if((t&$.bI().a)!==0)C.a.h(u,"Binm")
if((t&$.ag().a)!==0)C.a.h(u,"Txt2D")
if((t&$.c3().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dw().a)!==0)C.a.h(u,"Clr3")
if((t&$.dx().a)!==0)C.a.h(u,"Clr4")
if((t&$.cI().a)!==0)C.a.h(u,"Weight")
if((t&$.bH().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.u(u,"|")}}
D.fQ.prototype={}
D.ce.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.w]}
H.o(b,u)
if(this.a==null)this.saw(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
U:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[D.w]})
u=s.a
u=u==null?null:C.a.aj(u,b)
if(u===!0){u=s.a
t=(u&&C.a).U(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.aj(u,b)
if(u===!0){u=s.b
t=(u&&C.a).U(u,b)||t}return t},
E:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.w()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.K(P.lb(u,!0,{func:1,ret:-1,args:[D.w]}),new D.hb(q))
u=r.b
if(u!=null){r.sbn(H.c([],[{func:1,ret:-1,args:[D.w]}]))
C.a.K(u,new D.hc(q))}return!0},
e5:function(){return this.E(null)},
aI:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}},
saw:function(a){this.a=H.h(a,"$ib",[{func:1,ret:-1,args:[D.w]}],"$ab")},
sbn:function(a){this.b=H.h(a,"$ib",[{func:1,ret:-1,args:[D.w]}],"$ab")}}
D.hb.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.w]})
u=this.a.a
u.b
a.$1(u)},
$S:24}
D.hc.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.w]})
u=this.a.a
u.b
a.$1(u)},
$S:24}
D.w.prototype={}
D.bO.prototype={}
D.bP.prototype={}
D.L.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.dC.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dC))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.am.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.am))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.bu.prototype={}
X.dR.prototype={
gaq:function(){var u=this.y
return u==null?this.y=D.O():u},
dX:function(a,b){this.h(0,new X.am(a,new X.bw(!1,!1,b)))},
a4:function(a){return this.dX(a,!1)},
d6:function(a){},
fn:function(a){var u,t,s
H.h(a,"$ik",[X.am],"$ak")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.z)(a),++t){s=a[t]
if(C.a.aj(this.a,s))return!1}return!0},
fl:function(a,b){var u=X.am
H.h(b,"$ik",[u],"$ak")
u=new D.bO([u])
u.b=!0
this.d6(u)},
fp:function(a,b){var u=X.am
H.h(b,"$ik",[u],"$ak")
u=new D.bP([u])
u.b=!0
this.d6(u)},
c3:function(a){var u,t=this
H.i(a,"$iw")
if(!t.r&&a instanceof X.bu){u=a.c
if(C.a.aj(t.a,u)){t.r=!0
u=t.y
if(u!=null)u.E(a)}}},
ck:function(a){var u
H.i(a,"$iw")
if(this.r&&a instanceof X.bu){u=a.c
if(C.a.aj(this.a,u))this.r=!1}},
ad:function(a){var u,t,s=this
if(s.f!=null)return!1
s.f=a
u=a.b
t=u.b
if(t==null)t=u.b=D.O()
t.h(0,s.gc2())
t=u.a
u=t==null?u.a=D.O():t
u.h(0,s.gcj())
return!0},
$ak:function(){return[X.am]},
$aa1:function(){return[X.am]}}
X.hr.prototype={
kf:function(a){var u,t
this.d.h(0,a.a)
u=this.a
if(u==null)return!1
t=new X.bu(a)
t.b=!0
return u.E(t)},
kb:function(a){var u,t
this.d.U(0,a.a)
u=this.b
if(u==null)return!1
t=new X.bu(a)
t.b=!0
return u.E(t)},
siG:function(a){this.d=H.h(a,"$img",[P.j],"$amg")}}
X.dW.prototype={}
X.hx.prototype={
b9:function(a,b){var u,t,s,r,q,p=this,o=Date.now(),n=p.x,m=b.a,l=p.Q
if(typeof m!=="number")return m.k()
u=b.b
t=p.ch
if(typeof u!=="number")return u.k()
s=n.a
if(typeof s!=="number")return s.m()
n=n.b
if(typeof n!=="number")return n.m()
r=new V.U(s+m*l,n+u*t)
t=p.a.gbO()
q=new X.bx(a,V.bz(),p.x,t,r)
q.b=!0
p.z=new P.aA(o,!1)
p.x=r
return q},
cQ:function(a,b){var u
this.r=a.a
u=this.b
if(u==null)return!1
u.E(this.b9(a,b))
return!0},
bx:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.f2()
if(typeof u!=="number")return u.ak()
this.r=(u&~t)>>>0
return!1},
bw:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.b9(a,b))
return!0},
kg:function(a){return!1},
i6:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dW(c,r.a.gbO(),b)
s.b=!0
t.E(s)
r.y=new P.aA(u,!1)
r.x=V.bz()}}
X.bw.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bw))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.G(this.b)?"Alt+":""
return u+(H.G(this.c)?"Shift+":"")}}
X.bx.prototype={}
X.hX.prototype={
cb:function(a,b,c){var u=this,t=new P.aA(Date.now(),!1),s=u.a.gbO(),r=new X.bx(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cQ:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.cb(a,b,!0))
return!0},
bx:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.f2()
if(typeof t!=="number")return t.ak()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.cb(a,b,!0))
return!0},
bw:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.cb(a,b,!1))
return!0},
kh:function(a,b){return!1}}
X.ia.prototype={}
X.el.prototype={}
X.j4.prototype={
b9:function(a,b){var u,t,s,r,q=this
H.h(a,"$ib",[V.U],"$ab")
u=new P.aA(Date.now(),!1)
t=a.length>0?a[0]:V.bz()
s=q.a.gbO()
r=new X.el(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
ke:function(a){var u
H.h(a,"$ib",[V.U],"$ab")
u=this.b
if(u==null)return!1
u.E(this.b9(a,!0))
return!0},
kc:function(a){var u
H.h(a,"$ib",[V.U],"$ab")
u=this.c
if(u==null)return!1
u.E(this.b9(a,!0))
return!0},
kd:function(a){var u
H.h(a,"$ib",[V.U],"$ab")
u=this.d
if(u==null)return!1
u.E(this.b9(a,!1))
return!0}}
X.eq.prototype={
gbO:function(){var u=this.a,t=C.j.ge2(u).c
t.toString
u=C.j.ge2(u).d
u.toString
return V.le(0,0,t,u)},
dt:function(a){var u=a.keyCode,t=H.G(a.ctrlKey)||H.G(a.metaKey)
return new X.am(u,new X.bw(t,a.altKey,a.shiftKey))},
bb:function(a){if(!H.G(a.ctrlKey))H.G(a.metaKey)
a.shiftKey},
cp:function(a){if(!H.G(a.ctrlKey))H.G(a.metaKey)
a.shiftKey},
aO:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.p()
u=t.top
if(typeof r!=="number")return r.p()
return new V.U(s-q,r-u)},
bp:function(a){return new V.a3(a.movementX,a.movementY)},
cm:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.U])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
q=C.e.az(r.pageX)
C.e.az(r.pageY)
p=o.left
C.e.az(r.pageX)
C.a.h(n,new V.U(q-p,C.e.az(r.pageY)-o.top))}return n},
aJ:function(a){var u=a.buttons,t=H.G(a.ctrlKey)||H.G(a.metaKey)
return new X.dC(u,new X.bw(t,a.altKey,a.shiftKey))},
cf:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.p()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.p()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
i0:function(a){this.f=!0},
hL:function(a){this.f=!1},
hV:function(a){H.i(a,"$iaj")
if(H.G(this.f)&&this.cf(a))a.preventDefault()},
ck:function(a){var u
H.i(a,"$ibg")
if(!H.G(this.f))return
u=this.dt(a)
if(this.b.kf(u))a.preventDefault()},
c3:function(a){var u
H.i(a,"$ibg")
if(!H.G(this.f))return
u=this.dt(a)
if(this.b.kb(u))a.preventDefault()},
i8:function(a){var u,t,s,r,q=this
H.i(a,"$iaj")
u=q.a
u.focus()
q.f=!0
q.bb(a)
if(H.G(q.x)){t=q.aJ(a)
s=q.bp(a)
if(q.d.cQ(t,s))a.preventDefault()
return}if(H.G(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aJ(a)
r=q.aO(a)
if(q.c.cQ(t,r))a.preventDefault()},
ic:function(a){var u,t,s,r=this
H.i(a,"$iaj")
r.bb(a)
u=r.aJ(a)
if(H.G(r.x)){t=r.bp(a)
if(r.d.bx(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aO(a)
if(r.c.bx(u,s))a.preventDefault()},
hZ:function(a){var u,t,s,r=this
H.i(a,"$iaj")
if(!r.cf(a)){r.bb(a)
u=r.aJ(a)
if(H.G(r.x)){t=r.bp(a)
if(r.d.bx(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aO(a)
if(r.c.bx(u,s))a.preventDefault()}},
ia:function(a){var u,t,s,r=this
H.i(a,"$iaj")
r.bb(a)
u=r.aJ(a)
if(H.G(r.x)){t=r.bp(a)
if(r.d.bw(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aO(a)
if(r.c.bw(u,s))a.preventDefault()},
hX:function(a){var u,t,s,r=this
H.i(a,"$iaj")
if(!r.cf(a)){r.bb(a)
u=r.aJ(a)
if(H.G(r.x)){t=r.bp(a)
if(r.d.bw(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aO(a)
if(r.c.bw(u,s))a.preventDefault()}},
ig:function(a){var u,t,s=this
H.i(a,"$ibq")
s.bb(a)
u=new V.a3((a&&C.z).gjE(a),C.z.gjF(a)).v(0,180)
if(H.G(s.x)){if(s.d.kg(u))a.preventDefault()
return}if(H.G(s.r))return
t=s.aO(a)
if(s.c.kh(u,t))a.preventDefault()},
ii:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aJ(s.y)
t=s.aO(s.y)
s.d.i6(u,t,r)}},
ix:function(a){var u,t=this
H.i(a,"$ib0")
t.a.focus()
t.f=!0
t.cp(a)
u=t.cm(a)
if(t.e.ke(u))a.preventDefault()},
it:function(a){var u
H.i(a,"$ib0")
this.cp(a)
u=this.cm(a)
if(this.e.kc(u))a.preventDefault()},
iv:function(a){var u
H.i(a,"$ib0")
this.cp(a)
u=this.cm(a)
if(this.e.kd(u))a.preventDefault()},
sh8:function(a){this.z=H.h(a,"$ib",[[P.d7,P.Q]],"$ab")}}
D.bM.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.O():u},
aM:function(a){var u
H.i(a,"$iw")
u=this.r
if(u!=null)u.E(a)},
hN:function(){return this.aM(null)},
$iai:1,
$icY:1}
D.ai.prototype={$icY:1}
D.dS.prototype={
gt:function(){var u=this.x
return u==null?this.x=D.O():u},
aM:function(a){var u=this.x
if(u!=null)u.E(a)},
dI:function(a){var u
H.i(a,"$iw")
u=this.y
if(u!=null)u.E(a)},
i5:function(){return this.dI(null)},
ik:function(a){var u,t,s
H.h(a,"$ik",[D.ai],"$ak")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.z)(a),++t){s=a[t]
if(s==null||this.h_(s))return!1}return!0},
hB:function(a,b){var u,t,s,r,q,p,o,n=D.ai
H.h(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gdH(),s={func:1,ret:-1,args:[D.w]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=H.i(b[q],"$iai")
if(p instanceof D.bM)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.ce()
o.saw(null)
o.sbn(null)
o.c=null
o.d=0
p.r=o}H.o(t,s)
if(o.a==null)o.saw(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bO([n])
n.b=!0
this.aM(n)},
ip:function(a,b){var u,t,s,r=D.ai
H.h(b,"$ik",[r],"$ak")
for(u=b.gZ(b),t=this.gdH();u.A();){s=u.gP(u)
C.a.U(this.e,s)
s.gt().U(0,t)}r=new D.bP([r])
r.b=!0
this.aM(r)},
h_:function(a){var u=C.a.aj(this.e,a)
return u},
sfq:function(a){this.e=H.h(a,"$ib",[D.bM],"$ab")},
siB:function(a){this.f=H.h(a,"$ib",[D.e5],"$ab")},
sfs:function(a){this.r=H.h(a,"$ib",[D.ef],"$ab")},
$ak:function(){return[D.ai]},
$aa1:function(){return[D.ai]}}
D.e5.prototype={$iai:1,$icY:1}
D.ef.prototype={$iai:1,$icY:1}
V.a9.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"}}
V.aP.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aP))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.J(u.a,3,0)+", "+V.J(u.b,3,0)+", "+V.J(u.c,3,0)+", "+V.J(u.d,3,0)+"]"}}
V.h9.prototype={}
V.a5.prototype={
q:function(a,b){if(b==null)return!1
if(!(b instanceof V.a5))return!1
return this.a===b.a},
i:function(a){var u,t,s
$.lK()
$.kW()
u=H.c([],[P.l])
t=this.a
s=$.b5().a
if((t&s)>>>0===s)C.a.h(u,"XPos")
s=$.lL().a
if((t&s)>>>0===s)C.a.h(u,"XCenter")
s=$.b4().a
if((t&s)>>>0===s)C.a.h(u,"XNeg")
s=$.b6().a
if((t&s)>>>0===s)C.a.h(u,"YPos")
s=$.lM().a
if((t&s)>>>0===s)C.a.h(u,"YCenter")
s=$.bE().a
if((t&s)>>>0===s)C.a.h(u,"YNeg")
s=$.bG().a
if((t&s)>>>0===s)C.a.h(u,"ZPos")
s=$.nc().a
if((t&s)>>>0===s)C.a.h(u,"ZCenter")
s=$.bF().a
if((t&s)>>>0===s)C.a.h(u,"ZNeg")
if(u.length<=0)return"None"
return C.a.u(u,"|")}}
V.ch.prototype={
i:function(a){var u=this
return u.a.i(0)+" <"+u.b.i(0)+"> "+H.m(u.c)+" "+H.m(u.d)}}
V.hn.prototype={
i:function(a){return H.m(this.a)+" "+H.m(this.b)}}
V.aG.prototype={
at:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.A])
return t},
bv:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=i.e,f=i.y
if(typeof g!=="number")return g.k()
if(typeof f!=="number")return H.d(f)
u=g*f
t=i.f
s=i.x
if(typeof t!=="number")return t.k()
if(typeof s!=="number")return H.d(s)
if(typeof h!=="number")return h.k()
r=i.d
q=i.b
if(typeof q!=="number")return q.k()
p=q*f
o=i.c
if(typeof o!=="number")return H.d(o)
n=s*o
if(typeof r!=="number")return r.k()
m=i.r
l=q*t-g*o
if(typeof m!=="number")return m.k()
k=h*(u-t*s)-r*(p-n)+m*l
if(Math.abs(k-0)<$.C().a){h=$.m1
return h==null?$.m1=new V.aG(1,0,0,0,1,0,0,0,1):h}j=1/k
return new V.aG((u-s*t)*j,(n-p)*j,l*j,(m*t-r*f)*j,(h*f-m*o)*j,(r*o-h*t)*j,(r*s-m*g)*j,(m*q-h*s)*j,(h*g-r*q)*j)},
au:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.d(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.d(r)
q=k.d
if(typeof q!=="number")return q.k()
p=k.e
if(typeof p!=="number")return p.k()
o=k.f
if(typeof o!=="number")return o.k()
n=k.r
if(typeof n!=="number")return n.k()
m=k.x
if(typeof m!=="number")return m.k()
l=k.y
if(typeof l!=="number")return l.k()
return new V.H(j*i+u*t+s*r,q*i+p*t+o*r,n*i+m*t+l*r)},
V:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.d(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.d(r)
q=k.d
if(typeof q!=="number")return q.k()
p=k.e
if(typeof p!=="number")return p.k()
o=k.f
if(typeof o!=="number")return o.k()
n=k.r
if(typeof n!=="number")return n.k()
m=k.x
if(typeof m!=="number")return m.k()
l=k.y
if(typeof l!=="number")return l.k()
return new V.u(j*i+u*t+s*r,q*i+p*t+o*r,n*i+m*t+l*r)},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aG))return!1
u=b.a
t=r.a
s=$.C()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=r.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.x
t=r.x
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.A],o=V.cC(H.c([q.a,q.d,q.r],p),3,0),n=V.cC(H.c([q.b,q.e,q.x],p),3,0),m=V.cC(H.c([q.c,q.f,q.y],p),3,0)
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
V.au.prototype={
at:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.A])
return t},
bv:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=a9.f
if(typeof b0!=="number")return b0.k()
if(typeof b1!=="number")return H.d(b1)
u=a9.b
t=a9.e
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
s=b0*b1-u*t
r=a9.r
if(typeof r!=="number")return H.d(r)
q=a9.c
if(typeof q!=="number")return q.k()
p=b0*r-q*t
o=a9.x
n=a9.d
m=b0*o-n*t
l=u*r-q*b1
k=u*o-n*b1
j=q*o-n*r
i=a9.y
h=a9.cy
if(typeof i!=="number")return i.k()
g=a9.z
f=a9.cx
if(typeof g!=="number")return g.k()
e=i*h-g*f
d=a9.db
c=a9.Q
if(typeof c!=="number")return c.k()
b=i*d-c*f
a=a9.dx
a0=a9.ch
a1=i*a-a0*f
a2=g*d-c*h
a3=g*a-a0*h
a4=c*a-a0*d
a5=s*a4-p*a3+m*a2+l*a1-k*b+j*e
if(Math.abs(a5-0)<$.C().a)return V.ck()
a6=1/a5
a7=-t
a8=-f
return V.bj((b1*a4-r*a3+o*a2)*a6,(-u*a4+q*a3-n*a2)*a6,(h*j-d*k+a*l)*a6,(-g*j+c*k-a0*l)*a6,(a7*a4+r*a1-o*b)*a6,(b0*a4-q*a1+n*b)*a6,(a8*j+d*m-a*p)*a6,(i*j-c*m+a0*p)*a6,(t*a3-b1*a1+o*e)*a6,(-b0*a3+u*a1-n*e)*a6,(f*k-h*m+a*s)*a6,(-i*k+g*m-a0*s)*a6,(a7*a2+b1*b-r*e)*a6,(b0*a2-u*b+q*e)*a6,(a8*l+h*p-d*s)*a6,(i*l-g*p+c*s)*a6)},
k:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=b3.a
if(typeof b0!=="number")return b0.k()
if(typeof b1!=="number")return H.d(b1)
u=a9.b
t=b3.e
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
s=a9.c
r=b3.y
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.d(r)
q=a9.d
p=b3.cx
o=b3.b
if(typeof o!=="number")return H.d(o)
n=b3.f
if(typeof n!=="number")return H.d(n)
m=b3.z
if(typeof m!=="number")return H.d(m)
l=b3.cy
k=b3.c
if(typeof k!=="number")return H.d(k)
j=b3.r
if(typeof j!=="number")return H.d(j)
i=b3.Q
if(typeof i!=="number")return H.d(i)
h=b3.db
g=b3.d
f=b3.x
e=b3.ch
d=b3.dx
c=a9.e
if(typeof c!=="number")return c.k()
b=a9.f
if(typeof b!=="number")return b.k()
a=a9.r
if(typeof a!=="number")return a.k()
a0=a9.x
a1=a9.y
if(typeof a1!=="number")return a1.k()
a2=a9.z
if(typeof a2!=="number")return a2.k()
a3=a9.Q
if(typeof a3!=="number")return a3.k()
a4=a9.ch
a5=a9.cx
a6=a9.cy
a7=a9.db
a8=a9.dx
return V.bj(b0*b1+u*t+s*r+q*p,b0*o+u*n+s*m+q*l,b0*k+u*j+s*i+q*h,b0*g+u*f+s*e+q*d,c*b1+b*t+a*r+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,c*g+b*f+a*e+a0*d,a1*b1+a2*t+a3*r+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h,a1*g+a2*f+a3*e+a4*d,a5*b1+a6*t+a7*r+a8*p,a5*o+a6*n+a7*m+a8*l,a5*k+a6*j+a7*i+a8*h,a5*g+a6*f+a7*e+a8*d)},
au:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.d(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.d(r)
q=k.e
if(typeof q!=="number")return q.k()
p=k.f
if(typeof p!=="number")return p.k()
o=k.r
if(typeof o!=="number")return o.k()
n=k.y
if(typeof n!=="number")return n.k()
m=k.z
if(typeof m!=="number")return m.k()
l=k.Q
if(typeof l!=="number")return l.k()
return new V.H(j*i+u*t+s*r,q*i+p*t+o*r,n*i+m*t+l*r)},
V:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.d(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.d(r)
q=k.e
if(typeof q!=="number")return q.k()
p=k.f
if(typeof p!=="number")return p.k()
o=k.r
if(typeof o!=="number")return o.k()
n=k.y
if(typeof n!=="number")return n.k()
m=k.z
if(typeof m!=="number")return m.k()
l=k.Q
if(typeof l!=="number")return l.k()
return new V.u(j*i+u*t+s*r+k.d,q*i+p*t+o*r+k.x,n*i+m*t+l*r+k.ch)},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.au))return!1
u=b.a
t=r.a
s=$.C()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.d-r.d)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.x-r.x)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.z
t=r.z
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=r.Q
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-r.ch)<s))return!1
if(!(Math.abs(b.cx-r.cx)<s))return!1
if(!(Math.abs(b.cy-r.cy)<s))return!1
if(!(Math.abs(b.db-r.db)<s))return!1
if(!(Math.abs(b.dx-r.dx)<s))return!1
return!0},
i:function(a){return this.T()},
N:function(a){var u,t,s,r,q,p=this,o=[P.A],n=V.cC(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.cC(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.cC(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.cC(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
T:function(){return this.N("")}}
V.U.prototype={
p:function(a,b){var u,t,s=this.a,r=b.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.d(r)
u=this.b
t=b.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
return new V.U(s-r,u-t)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=this.a
s=$.C()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+"]"}}
V.u.prototype={
m:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.m()
if(typeof p!=="number")return H.d(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.d(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.d(r)
return new V.u(q+p,u+t,s+r)},
p:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.d(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.d(r)
return new V.u(q-p,u-t,s-r)},
k:function(a,b){var u,t,s=this.a
if(typeof s!=="number")return s.k()
u=this.b
if(typeof u!=="number")return u.k()
t=this.c
if(typeof t!=="number")return t.k()
return new V.u(s*b,u*b,t*b)},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.u))return!1
u=b.a
t=r.a
s=$.C()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"}}
V.bV.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bV))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.J(u.a,3,0)+", "+V.J(u.b,3,0)+", "+V.J(u.c,3,0)+", "+V.J(u.d,3,0)+"]"}}
V.e9.prototype={
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.e9))return!1
u=b.a
t=r.a
s=$.C()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=r.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u=this
return"["+V.J(u.a,3,0)+", "+V.J(u.b,3,0)+", "+V.J(u.c,3,0)+", "+V.J(u.d,3,0)+", "+V.J(u.e,3,0)+", "+V.J(u.f,3,0)+"]"}}
V.ea.prototype={
gaH:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
ex:function(a){var u,t,s,r,q=this,p=$.bD(),o=a.a,n=q.a
if(typeof o!=="number")return o.C()
if(o<n){u=$.b4()
p=new V.a5((p.a|u.a)>>>0)}else if(o>=n+q.c){u=$.b5()
p=new V.a5((p.a|u.a)>>>0)}else{u=$.lL()
p=new V.a5((p.a|u.a)>>>0)}u=a.b
t=q.b
if(typeof u!=="number")return u.C()
if(u<t)p=new V.a5((p.a|$.bE().a)>>>0)
else{s=p.a
p=u>=t+q.d?new V.a5((s|$.b6().a)>>>0):new V.a5((s|$.lM().a)>>>0)}s=p.a
r=$.b4().a
if(!((s&r)>>>0===r)){r=$.b5().a
if((s&r)>>>0===r){o=n+q.c
n=o}else n=o}o=$.bE().a
if(!((s&o)>>>0===o)){o=$.b6().a
if((s&o)>>>0===o){o=t+q.d
t=o}else t=u}return new V.U(n,t)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ea))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.J(u.a,3,0)+", "+V.J(u.b,3,0)+", "+V.J(u.c,3,0)+", "+V.J(u.d,3,0)+"]"}}
V.bY.prototype={
kk:function(a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.a
if(typeof a7!=="number")return a7.m()
u=a7+a5.d
t=a5.b
if(typeof t!=="number")return t.m()
s=t+a5.e
r=a5.c
if(typeof r!=="number")return r.m()
q=r+a5.f
p=a8.a
if(typeof p!=="number")return p.C()
if(p<a7){o=a7-p
n=a8.d
if(typeof n!=="number")return H.d(n)
if(o>n)return
o/=n
m=$.b4()
l=a7
k=!1
j=-1}else if(p>u){o=u-p
n=a8.d
if(typeof n!=="number")return H.d(n)
if(o<n)return
o/=n
m=$.b5()
l=u
k=!1
j=1}else{m=a6
l=m
j=l
k=!0
o=-1}n=a8.b
if(typeof n!=="number")return n.C()
if(n<t){i=t-n
h=a8.e
if(typeof h!=="number")return H.d(h)
if(i>h)return
i/=h
g=$.bE()
f=t
k=!1
e=-1}else if(n>s){i=s-n
h=a8.e
if(typeof h!=="number")return H.d(h)
if(i<h)return
i/=h
g=$.b6()
f=s
k=!1
e=1}else{g=a6
f=g
e=f
i=-1}h=a8.c
if(typeof h!=="number")return h.C()
if(h<r){d=r-h
c=a8.f
if(typeof c!=="number")return H.d(c)
if(d>c)return
d/=c
b=$.bF()
a=r
k=!1
a0=-1}else if(h>q){d=q-h
c=a8.f
if(typeof c!=="number")return H.d(c)
if(d<c)return
d/=c
b=$.bG()
a=q
k=!1
a0=1}else{b=a6
a=b
a0=a
d=-1}if(k){a7=new V.H(a8.d,a8.e,a8.f)
return new V.ch(new V.u(p,n,h),a7.v(0,Math.sqrt(a7.D(a7))).O(0),0,$.kW())}if(i>o)a1=d>i?2:1
else a1=d>o?2:0
switch(a1){case 0:a7=a8.e
if(typeof a7!=="number")return a7.k()
a2=n+a7*o
a7=$.C()
p=a7.a
if(t-p<a2){a7.toString
t=a2<s}else t=!1
if(!t)return
t=a8.f
if(typeof t!=="number")return t.k()
a3=h+t*o
if(r-p<a3){a7.toString
a7=a3<q}else a7=!1
if(!a7)return
return new V.ch(new V.u(l,a2,a3),new V.H(j,0,0),o,m)
case 1:t=a8.d
if(typeof t!=="number")return t.k()
a4=p+t*i
t=$.C()
p=t.a
if(a7-p<a4){t.toString
a7=a4<u}else a7=!1
if(!a7)return
a7=a8.f
if(typeof a7!=="number")return a7.k()
a3=h+a7*i
if(r-p<a3){t.toString
a7=a3<q}else a7=!1
if(!a7)return
return new V.ch(new V.u(a4,f,a3),new V.H(0,e,0),i,g)
default:r=a8.d
if(typeof r!=="number")return r.k()
a4=p+r*d
r=$.C()
p=r.a
if(a7-p<a4){r.toString
a7=a4<u}else a7=!1
if(!a7)return
a7=a8.e
if(typeof a7!=="number")return a7.k()
a2=n+a7*d
if(t-p<a2){r.toString
a7=a2<s}else a7=!1
if(!a7)return
return new V.ch(new V.u(a4,a2,a),new V.H(0,0,a0),d,b)}},
jA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=$.bD(),d=b.a
if(d!==0){if(typeof d!=="number")return d.ab()
if(d>0){u=$.b4()
t=u.a
if((c.a&t)>>>0===t){t=a.a
s=g.a
if(typeof s!=="number")return s.m()
r=$.C()
r.toString
if(typeof t!=="number")return t.p()
s=t-(s+g.d)
q=Math.abs(s)<r.a?0:s/d
p=!0}else{u=f
q=u
p=!1}}else{u=$.b5()
t=u.a
if((c.a&t)>>>0===t){t=a.a
if(typeof t!=="number")return t.m()
s=g.a
r=$.C()
r.toString
if(typeof s!=="number")return H.d(s)
s=t+a.d-s
q=Math.abs(s)<r.a?0:s/d
p=!0}else{u=f
q=u
p=!1}}if(p){if(typeof q!=="number")return q.C()
t=q<100&&q>=0&&q<=1}else t=!1
if(t){t=g.b
s=b.b
if(typeof s!=="number")return s.k()
if(typeof q!=="number")return H.d(q)
if(typeof t!=="number")return t.m()
o=t+s*q
t=a.b
if(typeof t!=="number")return t.m()
s=$.C().a
if(o-s<t+a.e&&t-s<o+g.e){t=g.c
r=b.c
if(typeof r!=="number")return r.k()
if(typeof t!=="number")return t.m()
n=t+r*q
t=a.c
if(typeof t!=="number")return t.m()
if(n-s<t+a.f&&t-s<n+g.f){m=u
l=q}else{m=e
l=100}}else{m=e
l=100}}else{m=e
l=100}}else{u=f
m=e
q=u
l=100}t=b.b
if(t!==0){if(typeof t!=="number")return t.ab()
if(t>0){k=$.bE()
s=k.a
if((c.a&s)>>>0===s){s=a.b
r=g.b
if(typeof r!=="number")return r.m()
j=$.C()
j.toString
if(typeof s!=="number")return s.p()
r=s-(r+g.e)
q=Math.abs(r)<j.a?0:r/t
u=k
p=!0}else p=!1}else{k=$.b6()
s=k.a
if((c.a&s)>>>0===s){s=a.b
if(typeof s!=="number")return s.m()
r=g.b
j=$.C()
j.toString
if(typeof r!=="number")return H.d(r)
r=s+a.e-r
q=Math.abs(r)<j.a?0:r/t
u=k
p=!0}else p=!1}if(p){if(typeof q!=="number")return q.C()
s=q<l&&q>=0&&q<=1}else s=!1
if(s){s=g.a
if(typeof d!=="number")return d.k()
if(typeof q!=="number")return H.d(q)
if(typeof s!=="number")return s.m()
i=s+d*q
s=a.a
if(typeof s!=="number")return s.m()
r=$.C().a
if(i-r<s+a.d&&s-r<i+g.d){s=g.c
j=b.c
if(typeof j!=="number")return j.k()
if(typeof s!=="number")return s.m()
n=s+j*q
s=a.c
if(typeof s!=="number")return s.m()
if(n-r<s+a.f&&s-r<n+g.f){m=u
l=q}}}}s=b.c
if(s!==0){if(typeof s!=="number")return s.ab()
if(s>0){k=$.bF()
r=k.a
if((c.a&r)>>>0===r){r=a.c
j=g.c
if(typeof j!=="number")return j.m()
h=$.C()
h.toString
if(typeof r!=="number")return r.p()
j=r-(j+g.f)
q=Math.abs(j)<h.a?0:j/s
u=k
p=!0}else p=!1}else{k=$.bG()
r=k.a
if((c.a&r)>>>0===r){r=a.c
if(typeof r!=="number")return r.m()
j=g.c
h=$.C()
h.toString
if(typeof j!=="number")return H.d(j)
j=r+a.f-j
q=Math.abs(j)<h.a?0:j/s
u=k
p=!0}else p=!1}if(p){if(typeof q!=="number")return q.C()
s=q<l&&q>=0&&q<=1}else s=!1
if(s){s=g.a
if(typeof d!=="number")return d.k()
if(typeof q!=="number")return H.d(q)
if(typeof s!=="number")return s.m()
i=s+d*q
d=a.a
if(typeof d!=="number")return d.m()
s=$.C().a
if(i-s<d+a.d&&d-s<i+g.d){d=g.b
if(typeof t!=="number")return t.k()
if(typeof d!=="number")return d.m()
o=d+t*q
d=a.b
if(typeof d!=="number")return d.m()
if(o-s<d+a.e&&d-s<o+g.e){m=u
l=q}}}}if(J.V(m,e))return
return new V.hn(l,m)},
bX:function(a,b){var u,t,s,r,q=this,p=q.a,o=b.a
if(typeof p!=="number")return p.m()
if(typeof o!=="number")return H.d(o)
u=q.b
t=b.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.d(t)
s=q.c
r=b.c
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.d(r)
return V.ii(p+o,u+t,s+r,q.d,q.e,q.f)},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bY))return!1
u=b.a
t=r.a
s=$.C()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.d-r.d)<s))return!1
if(!(Math.abs(b.e-r.e)<s))return!1
if(!(Math.abs(b.f-r.f)<s))return!1
return!0},
i:function(a){var u=this
return"["+V.J(u.a,3,0)+", "+V.J(u.b,3,0)+", "+V.J(u.c,3,0)+", "+V.J(u.d,3,0)+", "+V.J(u.e,3,0)+", "+V.J(u.f,3,0)+"]"}}
V.a3.prototype={
cN:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.d(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
return s*r+u*t},
k:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.k()
u=this.b
if(typeof u!=="number")return u.k()
return new V.a3(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.C().a){u=$.mp
return u==null?$.mp=new V.a3(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.a3(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=this.a
s=$.C()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+"]"}}
V.H.prototype={
cN:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.d(p)
u=this.b
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
s=this.c
r=a.c
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.d(r)
return q*p+u*t+s*r},
bu:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.d(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
s=a.a
if(typeof s!=="number")return H.d(s)
r=this.a
if(typeof r!=="number")return r.k()
return new V.H(q*p-u*t,u*s-r*p,r*t-q*s)},
m:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.m()
if(typeof p!=="number")return H.d(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.d(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.d(r)
return new V.H(q+p,u+t,s+r)},
O:function(a){var u,t,s=this.a
if(typeof s!=="number")return s.O()
u=this.b
if(typeof u!=="number")return u.O()
t=this.c
if(typeof t!=="number")return t.O()
return new V.H(-s,-u,-t)},
k:function(a,b){var u,t,s=this.a
if(typeof s!=="number")return s.k()
u=this.b
if(typeof u!=="number")return u.k()
t=this.c
if(typeof t!=="number")return t.k()
return new V.H(s*b,u*b,t*b)},
v:function(a,b){var u,t,s
if(Math.abs(b-0)<$.C().a)return V.df()
u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
s=this.c
if(typeof s!=="number")return s.v()
return new V.H(u/b,t/b,s/b)},
cM:function(){var u=this.a,t=$.C()
t.toString
if(typeof u!=="number")return H.d(u)
t=t.a
if(!(Math.abs(0-u)<t))return!1
u=this.b
if(typeof u!=="number")return H.d(u)
if(!(Math.abs(0-u)<t))return!1
u=this.c
if(typeof u!=="number")return H.d(u)
if(!(Math.abs(0-u)<t))return!1
return!0},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.H))return!1
u=b.a
t=r.a
s=$.C()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"}}
U.fT.prototype={
c5:function(a){var u=this.a,t=this.c,s=this.b
if(u)return V.kU(a,t,s)
else{if(a<t)u=t
else u=a>s?s:a
return u}},
gt:function(){var u=this.y
return u==null?this.y=D.O():u},
B:function(a){var u=this.y
if(u!=null)u.E(a)},
scX:function(a,b){var u=this.a
if(u!==b){this.a=b
u=new D.L("wrap",u,b,[P.a4])
u.b=!0
this.B(u)}},
scO:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.C().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.c5(u)}s=new D.L("maximumLocation",s,t.b,[P.A])
s.b=!0
t.B(s)}},
scP:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.C().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.c5(u)}s=new D.L("minimumLocation",s,t.c,[P.A])
s.b=!0
t.B(s)}},
sX:function(a,b){var u,t=this
b=t.c5(b==null?0:b)
u=t.d
if(!(Math.abs(u-b)<$.C().a)){t.d=b
u=new D.L("location",u,b,[P.A])
u.b=!0
t.B(u)}},
saG:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.C().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.L("maximumVelocity",r,a,[P.A])
r.b=!0
s.B(r)}},
sR:function(a){var u=this,t=a==null?0:a,s=u.e
a=-s
if(!(t<a))a=t>s?s:t
t=u.f
if(!(Math.abs(t-a)<$.C().a)){u.f=a
t=new D.L("velocity",t,a,[P.A])
t.b=!0
u.B(t)}},
saT:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.C().a)){this.x=a
u=new D.L("dampening",u,a,[P.A])
u.b=!0
this.B(u)}},
ah:function(a,b){var u,t,s,r=this,q=r.f,p=$.C().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sX(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.C().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.dF.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.O():u},
aB:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dF))return!1
return J.V(this.a,b.a)},
i:function(a){return"Constant: "+this.a.N("          ")}}
U.cS.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.O():u},
B:function(a){var u
H.i(a,"$iw")
u=this.e
if(u!=null)u.E(a)},
ac:function(){return this.B(null)},
fu:function(a,b){var u,t,s,r,q,p,o,n=U.aa
H.h(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gaD(),s={func:1,ret:-1,args:[D.w]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.gt()
o.toString
H.o(t,s)
if(o.a==null)o.saw(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bO([n])
n.b=!0
this.B(n)},
im:function(a,b){var u,t,s=U.aa
H.h(b,"$ik",[s],"$ak")
for(u=b.gZ(b),t=this.gaD();u.A();)u.gP(u).gt().U(0,t)
s=new D.bP([s])
s.b=!0
this.B(s)},
aB:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.C()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.av(r,r.length,[H.v(r,0)]),u=null;r.A();){q=r.d
if(q!=null){t=q.aB(0,b,c)
if(t!=null)u=u==null?t:t.k(0,u)}}s.f=u==null?V.ck():u
r=s.e
if(r!=null)r.aI(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cS))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.V(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ak:function(){return[U.aa]},
$aa1:function(){return[U.aa]},
$iaa:1}
U.cU.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.O():u},
B:function(a){var u
H.i(a,"$iw")
u=this.b
if(u!=null)u.E(a)},
ac:function(){return this.B(null)},
aB:function(a,b,c){var u,t=this,s=t.d,r=b.e
if(s<r){t.d=r
s=t.b
if(s!=null)++s.d
s=t.a
s=s==null?null:s.aB(0,b,c)
u=s==null?null:s.bv(0)
t.c=u==null?V.ck():u
s=t.b
if(s!=null)s.aI(0)}return t.c},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cU))return!1
if(this.a!=b.a)return!1
return!0},
i:function(a){return"Invert"},
$iaa:1}
U.aa.prototype={}
U.eb.prototype={
gt:function(){var u=this.y
return u==null?this.y=D.O():u},
B:function(a){var u=this.y
if(u!=null)u.E(a)},
seY:function(a){var u
a=V.kU(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.C().a)){this.a=a
u=new D.L("yaw",u,a,[P.A])
u.b=!0
this.B(u)}},
seH:function(a,b){var u
b=V.kU(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.C().a)){this.b=b
u=new D.L("pitch",u,b,[P.A])
u.b=!0
this.B(u)}},
seP:function(a){var u
a=V.kU(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.C().a)){this.c=a
u=new D.L("roll",u,a,[P.A])
u.b=!0
this.B(u)}},
aB:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.seY(s.a+s.d*b.y)
s.seH(0,s.b+s.e*b.y)
s.seP(s.c+s.f*b.y)
r=s.c
u=Math.cos(r)
t=Math.sin(r)
s.x=V.bj(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1).k(0,V.m4(s.b)).k(0,V.m3(s.a))
r=s.y
if(r!=null)r.aI(0)}return s.x},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.eb))return!1
u=r.a
t=b.a
s=$.C().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.J(u.a,3,0)+", "+V.J(u.b,3,0)+", "+V.J(u.c,3,0)+"], ["+V.J(u.d,3,0)+", "+V.J(u.e,3,0)+", "+V.J(u.f,3,0)+"]"}}
U.er.prototype={
gt:function(){var u=this.fx
return u==null?this.fx=D.O():u},
B:function(a){var u
H.i(a,"$iw")
u=this.fx
if(u!=null)u.E(a)},
ac:function(){return this.B(null)},
ad:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.O():t
u.h(0,s.ght())
u=s.a.c
t=u.d
u=t==null?u.d=D.O():t
u.h(0,s.ghv())
u=s.a.c
t=u.c
u=t==null?u.c=D.O():t
u.h(0,s.ghx())
u=s.a.d
t=u.f
u=t==null?u.f=D.O():t
u.h(0,s.ghn())
u=s.a.d
t=u.d
u=t==null?u.d=D.O():t
u.h(0,s.ghp())
u=s.a.e
t=u.b
u=t==null?u.b=D.O():t
u.h(0,s.gjb())
u=s.a.e
t=u.d
u=t==null?u.d=D.O():t
u.h(0,s.gj9())
u=s.a.e
t=u.c
u=t==null?u.c=D.O():t
u.h(0,s.gj7())
return!0},
aE:function(a){var u=a.a,t=a.b
if(H.G(this.f)){if(typeof u!=="number")return u.O()
u=-u}if(H.G(this.r)){if(typeof t!=="number")return t.O()
t=-t}return new V.a3(u,t)},
hu:function(a){var u=this
a=H.t(H.i(a,"$iw"),"$ibx")
if(!J.V(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hw:function(a){var u,t,s,r,q,p,o,n=this
a=H.t(H.i(a,"$iw"),"$ibx")
if(!H.G(n.cx))return
if(H.G(n.ch)){u=a.d.p(0,a.y)
u=new V.a3(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.d(t)
if(u<t)return
n.ch=!1}if(H.G(n.e)){u=a.c
t=a.d.p(0,a.y)
u=n.aE(new V.a3(t.a,t.b).k(0,2).v(0,u.gaH()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.d(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.d(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=n.aE(new V.a3(s.a,s.b).k(0,2).v(0,u.gaH()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.d(p)
o=n.cy
if(typeof o!=="number")return H.d(o)
s.sX(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.d(q)
s=n.db
if(typeof s!=="number")return H.d(s)
o.sX(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.p(0,a.z)
n.dx=n.aE(new V.a3(t.a,t.b).k(0,2).v(0,u.gaH()))}n.ac()},
hy:function(a){var u,t,s,r=this
H.i(a,"$iw")
if(!H.G(r.cx))return
r.cx=!1
if(H.G(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.d(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.d(u)
s.sR(-t*10*u)
r.ac()}},
ho:function(a){var u=this
if(H.t(H.i(a,"$iw"),"$idW").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
hq:function(a){var u,t,s,r,q,p,o,n=this
a=H.t(H.i(a,"$iw"),"$ibx")
if(!J.V(n.d,a.x.b))return
u=a.c
t=a.d
s=t.p(0,a.y)
r=n.aE(new V.a3(s.a,s.b).k(0,2).v(0,u.gaH()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.d(p)
o=n.cy
if(typeof o!=="number")return H.d(o)
s.sX(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.d(q)
s=n.db
if(typeof s!=="number")return H.d(s)
o.sX(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.p(0,a.z)
n.dx=n.aE(new V.a3(t.a,t.b).k(0,2).v(0,u.gaH()))
n.ac()},
jc:function(a){var u=this
H.i(a,"$iw")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
ja:function(a){var u,t,s,r,q,p,o,n=this
a=H.t(H.i(a,"$iw"),"$iel")
if(!H.G(n.cx))return
if(H.G(n.ch)){u=a.d.p(0,a.y)
u=new V.a3(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.d(t)
if(u<t)return
n.ch=!1}if(H.G(n.e)){u=a.c
t=a.d.p(0,a.y)
u=n.aE(new V.a3(t.a,t.b).k(0,2).v(0,u.gaH()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.d(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.d(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=n.aE(new V.a3(s.a,s.b).k(0,2).v(0,u.gaH()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.d(p)
o=n.cy
if(typeof o!=="number")return H.d(o)
s.sX(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.d(q)
s=n.db
if(typeof s!=="number")return H.d(s)
o.sX(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.p(0,a.z)
n.dx=n.aE(new V.a3(t.a,t.b).k(0,2).v(0,u.gaH()))}n.ac()},
j8:function(a){var u,t,s,r=this
H.i(a,"$iw")
if(!H.G(r.cx))return
r.cx=!1
if(H.G(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.d(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.d(u)
s.sR(-t*10*u)
r.ac()}},
aB:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.C()
if(s<r){t.dy=r
u=b.y
t.c.ah(0,u)
t.b.ah(0,u)
t.fr=V.m3(t.b.d).k(0,V.m4(t.c.d))}return t.fr},
$iaa:1}
U.es.prototype={
gt:function(){var u=this.dx
return u==null?this.dx=D.O():u},
B:function(a){var u
H.i(a,"$iw")
u=this.dx
if(u!=null)u.E(a)},
ac:function(){return this.B(null)},
sR:function(a){this.r.sR(a.a)
this.x.sR(a.b)
this.y.sR(a.c)},
gX:function(a){return new V.u(this.r.d,this.x.d,this.y.d)},
sX:function(a,b){this.r.sX(0,b.a)
this.x.sX(0,b.b)
this.y.sX(0,b.c)},
i4:function(a){this.B(H.i(a,"$iw"))},
cr:function(a,b,c,d,e){if(a.r){if(typeof e!=="number")return e.m()
e+=d}else if(b.r){if(typeof e!=="number")return e.p()
e-=d}else{if(typeof e!=="number")return e.ab()
e=e>0?e-Math.min(e,c):e+Math.min(-e,c)}return e},
aB:function(a,b,c){var u,t,s,r,q,p=this,o=p.cy,n=b.e
if(typeof o!=="number")return o.C()
if(o<n){p.cy=n
u=p.gX(p)
t=b.y
if(t>0.1)t=0.1
o=p.ch
if(typeof o!=="number")return o.k()
s=o*t
o=p.cx
if(typeof o!=="number")return o.k()
r=o*t
q=new V.H(p.r.f,p.x.f,p.y.f)
o=p.Q
if(o!=null)q=o.au(q)
q=new V.H(p.cr(p.a,p.b,s,r,q.a),p.cr(p.c,p.d,s,r,q.b),p.cr(p.e,p.f,s,r,q.c))
o=p.z
p.sR(o!=null?o.au(q):q)
p.r.ah(0,t)
p.x.ah(0,t)
p.y.ah(0,t)
if(p.dy!=null){o=p.gX(p)
p.sX(0,p.dy.$2(u,o))}p.db=V.dY(p.r.d,-p.x.d,p.y.d)}return p.db},
sdl:function(a){this.dy=H.o(a,{func:1,ret:V.u,args:[V.u,V.u]})},
$iaa:1}
M.dK.prototype={
b4:function(a){var u
H.i(a,"$iw")
u=this.y
if(u!=null)u.E(a)},
fv:function(){return this.b4(null)},
hP:function(a,b){var u,t,s,r,q,p,o,n=E.a2
H.h(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gb3(),s={func:1,ret:-1,args:[D.w]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.ce()
o.saw(null)
o.sbn(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.saw(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bO([n])
n.b=!0
this.b4(n)},
hR:function(a,b){var u,t,s=E.a2
H.h(b,"$ik",[s],"$ak")
for(u=b.gZ(b),t=this.gb3();u.A();)u.gP(u).gt().U(0,t)
s=new D.bP([s])
s.b=!0
this.b4(s)},
gt:function(){var u=this.y
return u==null?this.y=D.O():u},
bh:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=new E.iI()
e.b=!0
u=f.f
if(u!=null)u.E(e)
a.eL(f.d)
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
if(typeof s!=="number")return H.d(s)
o=C.e.az(p*s)
p=q.b
if(typeof r!=="number")return H.d(r)
n=C.e.az(p*r)
p=C.e.az(q.c*s)
a.c=p
q=C.e.az(q.d*r)
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
i=V.bj(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.eK(i)
t=$.m8
if(t==null){t=V.m2(V.e6(),V.ll(),V.mw())
$.m8=t
h=t}else h=t
t=u.b
if(t!=null){g=t.aB(0,a,u)
if(g!=null)h=g.k(0,h)}a.db.eK(h)
for(u=f.e.a,u=new J.av(u,u.length,[H.v(u,0)]);u.A();)u.d.ah(0,a)
for(u=f.e.a,u=new J.av(u,u.length,[H.v(u,0)]);u.A();)u.d.bh(a)
f.b.toString
a.cy.cR()
a.db.cR()
f.c.toString
a.eI()},
sfX:function(a,b){this.e=H.h(b,"$ia1",[E.a2],"$aa1")},
$iql:1}
A.dA.prototype={}
A.fG.prototype={
l:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jM:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
jG:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ah.prototype={
gM:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){return""+this.gM(this)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof A.ah))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.hD.prototype={
fc:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.aq("")
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
A.p6(c3,u)
A.p8(c3,u)
A.p7(c3,u)
A.pa(c3,u)
A.pb(c3,u)
A.p9(c3,u)
A.pc(c3,u)
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
m=A.p5(b8.z)
b8.c=n
b8.d=m
b8.e=b8.du(n,35633)
b8.f=b8.du(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.G(H.mT(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.B(P.E("Failed to link shader: "+H.m(l)))}b8.iU()
b8.iW()
b8.Q=b8.x.l(0,"posAttr")
b8.cx=b8.x.l(0,"normAttr")
b8.ch=b8.x.l(0,"binmAttr")
b8.cy=b8.x.l(0,"txt2DAttr")
b8.db=b8.x.l(0,"txtCubeAttr")
b8.dx=b8.x.l(0,"bendAttr")
if(c3.dx)b8.id=H.t(b8.y.L(0,"invViewMat"),"$iaC")
if(t)b8.dy=H.t(b8.y.L(0,"objMat"),"$iaC")
if(r)b8.fr=H.t(b8.y.L(0,"viewObjMat"),"$iaC")
b8.fy=H.t(b8.y.L(0,"projViewObjMat"),"$iaC")
if(c3.ry)b8.k1=H.t(b8.y.L(0,"txt2DMat"),"$idd")
if(c3.x1)b8.k2=H.t(b8.y.L(0,"txtCubeMat"),"$iaC")
if(c3.x2)b8.k3=H.t(b8.y.L(0,"colorMat"),"$iaC")
b8.sfQ(H.c([],[A.aC]))
t=c3.y2
if(t>0){b8.k4=H.i(b8.y.L(0,"bendMatCount"),"$iaL")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.l(0,q)
if(j==null)H.B(P.E(c0+q+c1));(s&&C.a).h(s,H.t(j,"$iaC"))}}t=c3.a
if(t.a)b8.r2=H.t(b8.y.L(0,"emissionClr"),"$iY")
if(t.b)b8.rx=H.t(b8.y.L(0,"emissionTxt"),"$iar")
t=c3.b
if(t.a)b8.x1=H.t(b8.y.L(0,"ambientClr"),"$iY")
if(t.b)b8.x2=H.t(b8.y.L(0,"ambientTxt"),"$iar")
t=c3.c
if(t.a)b8.y2=H.t(b8.y.L(0,"diffuseClr"),"$iY")
if(t.b)b8.aU=H.t(b8.y.L(0,"diffuseTxt"),"$iar")
t=c3.d
if(t.a)b8.e7=H.t(b8.y.L(0,"invDiffuseClr"),"$iY")
if(t.b)b8.e8=H.t(b8.y.L(0,"invDiffuseTxt"),"$iar")
t=c3.e
s=t.a
if(s||t.b||!1){b8.eb=H.t(b8.y.L(0,"shininess"),"$ial")
if(s)b8.e9=H.t(b8.y.L(0,"specularClr"),"$iY")
if(t.b)b8.ea=H.t(b8.y.L(0,"specularTxt"),"$iar")}if(c3.f.b)b8.ec=H.t(b8.y.L(0,"bumpTxt"),"$iar")
if(c3.cy){b8.ed=H.t(b8.y.L(0,"envSampler"),"$ict")
t=c3.r
if(t.a)b8.ee=H.t(b8.y.L(0,"reflectClr"),"$iY")
if(t.b)b8.ef=H.t(b8.y.L(0,"reflectTxt"),"$iar")
t=c3.x
s=t.a
if(s||t.b||!1){b8.eg=H.t(b8.y.L(0,"refraction"),"$ial")
if(s)b8.eh=H.t(b8.y.L(0,"refractClr"),"$iY")
if(t.b)b8.ei=H.t(b8.y.L(0,"refractTxt"),"$iar")}}t=c3.y
if(t.a)b8.ej=H.t(b8.y.L(0,"alpha"),"$ial")
if(t.b)b8.ek=H.t(b8.y.L(0,"alphaTxt"),"$iar")
t=P.j
s=[t,A.aL]
b8.sh5(new H.X(s))
b8.sh6(new H.X([t,[P.b,A.cr]]))
b8.siC(new H.X(s))
b8.siD(new H.X([t,[P.b,A.cs]]))
b8.sj0(new H.X(s))
b8.sj1(new H.X([t,[P.b,A.cu]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.cr],i=0;i<t.length;t.length===s||(0,H.z)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.m(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ak()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.l(0,d)
if(j==null)H.B(P.E(c0+d+c1))
H.t(j,"$iY")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.l(0,d)
if(c==null)H.B(P.E(c0+d+c1))
H.t(c,"$iY")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.l(0,d)
if(b==null)H.B(P.E(c0+d+c1))
H.t(b,"$iY")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.l(0,d)
if(j==null)H.B(P.E(c0+d+c1))
H.t(j,"$iY")
o=b8.y
d=f+"s["+k+"].color"
c=o.l(0,d)
if(c==null)H.B(P.E(c0+d+c1))
H.t(c,"$iY")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.l(0,o)
if(b==null)H.B(P.E(c0+o+c1))
H.t(b,"$iar")
a2=b}else a2=b9
C.a.h(e,new A.cr(a1,a0,a,j,c,a2))}b8.cD.j(0,g,e)
q=b8.cC
p=b8.y
o=f+"Count"
j=p.l(0,o)
if(j==null)H.B(P.E(c0+o+c1))
q.j(0,g,H.i(j,"$iaL"))}for(t=c3.Q,s=t.length,r=[A.cs],i=0;i<t.length;t.length===s||(0,H.z)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.m(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.l(0,o)
if(j==null)H.B(P.E(c0+o+c1))
H.t(j,"$iY")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.l(0,o)
if(c==null)H.B(P.E(c0+o+c1))
H.t(c,"$iY")
p=b8.y
o=f+"s["+k+"].color"
b=p.l(0,o)
if(b==null)H.B(P.E(c0+o+c1))
H.t(b,"$iY")
if(typeof g!=="number")return g.ak()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.l(0,o)
if(a3==null)H.B(P.E(c0+o+c1))
H.t(a3,"$idd")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.l(0,o)
if(a3==null)H.B(P.E(c0+o+c1))
H.t(a3,"$ict")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.l(0,o)
if(a3==null)H.B(P.E(c0+o+c1))
H.t(a3,"$ict")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.l(0,o)
if(a5==null)H.B(P.E(c0+o+c1))
H.t(a5,"$idc")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.l(0,o)
if(a3==null)H.B(P.E(c0+o+c1))
H.t(a3,"$ial")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.l(0,o)
if(a5==null)H.B(P.E(c0+o+c1))
H.t(a5,"$ial")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.l(0,o)
if(a8==null)H.B(P.E(c0+o+c1))
H.t(a8,"$ial")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}C.a.h(e,new A.cs(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.cF.j(0,g,e)
q=b8.cE
p=b8.y
o=f+"Count"
j=p.l(0,o)
if(j==null)H.B(P.E(c0+o+c1))
q.j(0,g,H.i(j,"$iaL"))}for(t=c3.ch,s=t.length,r=[A.cu],i=0;i<t.length;t.length===s||(0,H.z)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.m(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.l(0,o)
if(j==null)H.B(P.E(c0+o+c1))
H.t(j,"$iY")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.l(0,o)
if(c==null)H.B(P.E(c0+o+c1))
H.t(c,"$iY")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.l(0,o)
if(b==null)H.B(P.E(c0+o+c1))
H.t(b,"$iY")
p=b8.y
o=f+"s["+k+"].color"
a3=p.l(0,o)
if(a3==null)H.B(P.E(c0+o+c1))
H.t(a3,"$iY")
if(typeof g!=="number")return g.ak()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.l(0,o)
if(a5==null)H.B(P.E(c0+o+c1))
H.t(a5,"$iY")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.l(0,o)
if(a8==null)H.B(P.E(c0+o+c1))
H.t(a8,"$iY")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.l(0,o)
if(b2==null)H.B(P.E(c0+o+c1))
H.t(b2,"$ial")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.l(0,o)
if(b3==null)H.B(P.E(c0+o+c1))
H.t(b3,"$ial")
b4=b3
b5=b2
a0=a8
a1=a5}else{b4=b9
b5=b4
a0=b5
a1=a0}p=(g&2)!==0
if(p){o=b8.y
d=f+"s["+k+"].shadowAdj"
a5=o.l(0,d)
if(a5==null)H.B(P.E(c0+d+c1))
H.t(a5,"$idc")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.l(0,d)
if(a5==null)H.B(P.E(c0+d+c1))
H.t(a5,"$ial")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.l(0,d)
if(a8==null)H.B(P.E(c0+d+c1))
H.t(a8,"$ial")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.l(0,d)
if(a5==null)H.B(P.E(c0+d+c1))
H.t(a5,"$ial")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.l(0,d)
if(a8==null)H.B(P.E(c0+d+c1))
H.t(a8,"$ial")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.l(0,d)
if(b2==null)H.B(P.E(c0+d+c1))
H.t(b2,"$ial")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.l(0,d)
if(a5==null)H.B(P.E(c0+d+c1))
H.t(a5,"$iar")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.l(0,o)
if(a5==null)H.B(P.E(c0+o+c1))
H.t(a5,"$iar")
a6=a5}else a6=b9
C.a.h(e,new A.cu(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.cH.j(0,g,e)
q=b8.cG
p=b8.y
o=f+"Count"
j=p.l(0,o)
if(j==null)H.B(P.E(c0+o+c1))
q.j(0,g,H.i(j,"$iaL"))}}},
ay:function(a,b){if(b!=null&&b.ga9(b))a.f3(b)},
iT:function(a,b){},
sfQ:function(a){this.r1=H.h(a,"$ib",[A.aC],"$ab")},
sh5:function(a){this.cC=H.h(a,"$ix",[P.j,A.aL],"$ax")},
sh6:function(a){this.cD=H.h(a,"$ix",[P.j,[P.b,A.cr]],"$ax")},
siC:function(a){this.cE=H.h(a,"$ix",[P.j,A.aL],"$ax")},
siD:function(a){this.cF=H.h(a,"$ix",[P.j,[P.b,A.cs]],"$ax")},
sj0:function(a){this.cG=H.h(a,"$ix",[P.j,A.aL],"$ax")},
sj1:function(a){this.cH=H.h(a,"$ix",[P.j,[P.b,A.cu]],"$ax")}}
A.aE.prototype={
i:function(a){return"dirLight"+H.m(this.a)}}
A.aH.prototype={
i:function(a){return"pointLight"+H.m(this.a)}}
A.aI.prototype={
i:function(a){return"spotLight"+H.m(this.a)}}
A.hG.prototype={
i:function(a){return this.aU}}
A.cr.prototype={}
A.cs.prototype={}
A.cu.prototype={}
A.d4.prototype={
fg:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
du:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.G(H.mT(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.E("Error compiling shader '"+H.m(s)+"': "+H.m(u)))}return s},
iU:function(){var u,t,s,r=this,q=H.c([],[A.dA]),p=r.a,o=H.a0(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.d(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dA(p,t.name,s))}r.x=new A.fG(q)},
iW:function(){var u,t,s,r=this,q=H.c([],[A.em]),p=r.a,o=H.a0(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.d(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.jD(t.type,t.size,t.name,s))}r.y=new A.jg(q)},
b8:function(a,b,c){var u=this.a
if(a===1)return new A.aL(u,b,c)
else return A.li(u,this.r,b,a,c)},
h0:function(a,b,c){var u=this.a
if(a===1)return new A.ar(u,b,c)
else return A.li(u,this.r,b,a,c)},
h1:function(a,b,c){var u=this.a
if(a===1)return new A.ct(u,b,c)
else return A.li(u,this.r,b,a,c)},
bL:function(a,b){return new P.eE(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
jD:function(a,b,c,d){var u=this
switch(a){case 5120:return u.b8(b,c,d)
case 5121:return u.b8(b,c,d)
case 5122:return u.b8(b,c,d)
case 5123:return u.b8(b,c,d)
case 5124:return u.b8(b,c,d)
case 5125:return u.b8(b,c,d)
case 5126:return new A.al(u.a,c,d)
case 35664:return new A.jc(u.a,c,d)
case 35665:return new A.Y(u.a,c,d)
case 35666:return new A.dc(u.a,c,d)
case 35667:return new A.jd(u.a,c,d)
case 35668:return new A.je(u.a,c,d)
case 35669:return new A.jf(u.a,c,d)
case 35674:return new A.jh(u.a,c,d)
case 35675:return new A.dd(u.a,c,d)
case 35676:return new A.aC(u.a,c,d)
case 35678:return u.h0(b,c,d)
case 35680:return u.h1(b,c,d)
case 35670:throw H.f(u.bL("BOOL",c))
case 35671:throw H.f(u.bL("BOOL_VEC2",c))
case 35672:throw H.f(u.bL("BOOL_VEC3",c))
case 35673:throw H.f(u.bL("BOOL_VEC4",c))
default:throw H.f(P.E("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.em.prototype={}
A.jg.prototype={
l:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
L:function(a,b){var u=this.l(0,b)
if(u==null)throw H.f(P.E("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.T()},
T:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aL.prototype={
i:function(a){return"Uniform1i: "+H.m(this.c)}}
A.jd.prototype={
i:function(a){return"Uniform2i: "+H.m(this.c)}}
A.je.prototype={
i:function(a){return"Uniform3i: "+H.m(this.c)}}
A.jf.prototype={
i:function(a){return"Uniform4i: "+H.m(this.c)}}
A.jb.prototype={
i:function(a){return"Uniform1iv: "+H.m(this.c)},
sjn:function(a){H.h(a,"$ib",[P.j],"$ab")}}
A.al.prototype={
i:function(a){return"Uniform1f: "+H.m(this.c)}}
A.jc.prototype={
i:function(a){return"Uniform2f: "+H.m(this.c)}}
A.Y.prototype={
i:function(a){return"Uniform3f: "+H.m(this.c)}}
A.dc.prototype={
i:function(a){return"Uniform4f: "+H.m(this.c)}}
A.jh.prototype={
i:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.dd.prototype={
aC:function(a){var u=new Float32Array(H.cx(H.h(a,"$ib",[P.A],"$ab")))
C.c.eU(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.aC.prototype={
aC:function(a){var u=new Float32Array(H.cx(H.h(a,"$ib",[P.A],"$ab")))
C.c.eV(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.ar.prototype={
f3:function(a){var u=a.ga9(a),t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.ga8(a))},
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.ct.prototype={
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.ad.prototype={
fP:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.df()
if(q!=null)s=s.m(0,q)
if(u!=null)s=s.m(0,u)
if(t!=null)s=s.m(0,t)
if(s.cM())return
return s.v(0,Math.sqrt(s.D(s)))},
fW:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.p(0,q)
r=new V.H(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.D(r)))
r=t.p(0,q)
r=new V.H(r.a,r.b,r.c)
r=s.bu(r.v(0,Math.sqrt(r.D(r))))
return r.v(0,Math.sqrt(r.D(r)))},
cA:function(){var u,t=this
if(t.d!=null)return!0
u=t.fP()
if(u==null){u=t.fW()
if(u==null)return!1}t.d=u
t.a.a.af()
return!0},
fO:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.df()
if(q!=null)s=s.m(0,q)
if(u!=null)s=s.m(0,u)
if(t!=null)s=s.m(0,t)
if(s.cM())return
return s.v(0,Math.sqrt(s.D(s)))},
fV:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
k=s.b
if(typeof l!=="number")return l.p()
if(typeof k!=="number")return H.d(k)
r=l-k
if(Math.abs(r-0)<$.C().a){l=d.p(0,g)
l=new V.H(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.D(l)))
l=s.a
t=t.a
if(typeof l!=="number")return l.p()
if(typeof t!=="number")return H.d(t)
if(l-t<0)q=q.O(0)}else{k=u.b
if(typeof k!=="number")return H.d(k)
p=(l-k)/r
k=d.p(0,g).k(0,p).m(0,g).p(0,j)
k=new V.H(k.a,k.b,k.c)
q=k.v(0,Math.sqrt(k.D(k)))
s=s.a
t=t.a
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.d(t)
u=u.a
if(typeof u!=="number")return H.d(u)
if((s-t)*p+t-u<0)q=q.O(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.D(l)))
l=o.bu(q)
l=l.v(0,Math.sqrt(l.D(l))).bu(o)
q=l.v(0,Math.sqrt(l.D(l)))}return q},
cz:function(){var u,t=this
if(t.e!=null)return!0
u=t.fO()
if(u==null){u=t.fV()
if(u==null)return!1}t.e=u
t.a.a.af()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.T()},
N:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.aZ(J.b8(s.e),0)+", "+C.b.aZ(J.b8(t.b.e),0)+", "+C.b.aZ(J.b8(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
T:function(){return this.N("")}}
F.bS.prototype={}
F.cm.prototype={}
F.d3.prototype={
gt:function(){var u=this.Q
return u==null?this.Q=D.O():u},
br:function(a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
H.h(a0,"$ib",[F.bp],"$ab")
u=a0.length
t=new Array(u*a.c)
t.fixed$length=Array
s=H.c(t,[P.A])
for(t=a.a,r=0,q=0;q<a.b;++q){p=t.cu(q)
for(o=0;o<u;++o){if(o>=a0.length)return H.e(a0,o)
n=a0[o].ev(p)
m=r+o*a.c
for(l=0;l<n.length;++l){C.a.j(s,m,n[l]);++m}}r+=p.gbk(p)}k=$.ac()
if((t.a&k.a)!==0){t=a.z
if(t==null){if(0>=a0.length)return H.e(a0,0)
t=a0[0].f
t=V.ii(t.a,t.b,t.c,0,0,0)
a.z=t}for(q=u-1;q>=0;--q){if(q>=a0.length)return H.e(a0,q)
k=a0[q].f
j=k.a
i=k.b
k=k.c
h=t.d
g=t.a
if(typeof j!=="number")return j.C()
if(typeof g!=="number")return H.d(g)
if(j<g){h+=g-j
f=j}else{if(j>g+h)h=j-g
f=g}e=t.e
j=t.b
if(typeof i!=="number")return i.C()
if(typeof j!=="number")return H.d(j)
if(i<j){e+=j-i
d=i}else{if(i>j+e)e=i-j
d=j}c=t.f
t=t.c
if(typeof k!=="number")return k.C()
if(typeof t!=="number")return H.d(t)
if(k<t){c+=t-k
b=k}else{if(k>t+c)c=k-t
b=t}t=new V.bY(f,d,b,h,e,c)
a.z=t}}m=a.d
a.d=m+u
C.a.aP(a.f,s)
a.af()
return m},
bq:function(a){var u,t,s,r,q,p,o=P.j
H.h(a,"$ib",[o],"$ab")
u=a.length
if(u>=3){t=new Array((u-2)*3)
t.fixed$length=Array
s=H.c(t,[o])
if(0>=a.length)return H.e(a,0)
r=a[0]
for(q=2,p=0;q<u;++q,p+=3){C.a.j(s,p,r)
o=q-1
if(o>=a.length)return H.e(a,o)
C.a.j(s,p+1,a[o])
if(q>=a.length)return H.e(a,q)
C.a.j(s,p+2,a[q])}C.a.aP(this.y,s)
this.af()}},
jq:function(a){var u,t,s,r,q,p,o,n,m,l=P.j
H.h(a,"$ib",[l],"$ab")
u=a.length
if(u>=3){t=new Array((u-2)*3)
t.fixed$length=Array
s=H.c(t,[l])
for(r=!1,q=2,p=0;q<u;++q,p+=3){l=q-2
t=p+1
o=q-1
n=p+2
m=a.length
if(r){if(l>=m)return H.e(a,l)
C.a.j(s,p,a[l])
if(o>=a.length)return H.e(a,o)
C.a.j(s,t,a[o])
if(q>=a.length)return H.e(a,q)
C.a.j(s,n,a[q])
r=!1}else{if(o>=m)return H.e(a,o)
C.a.j(s,p,a[o])
if(l>=a.length)return H.e(a,l)
C.a.j(s,t,a[l])
if(q>=a.length)return H.e(a,q)
C.a.j(s,n,a[q])
r=!0}}C.a.aP(this.y,s)
this.af()}},
af:function(){var u=this.Q
if(u!=null)u.E(null)},
aS:function(){return!1},
be:function(){return!1},
bN:function(){return!1},
e0:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.a
if(!J.V(b,l))throw H.f(P.E("Shape was reduced to "+H.m(l)+" so can not build for "+H.m(b)+"."))
if(m.e==null){u=m.c*4
t=new Array(m.b)
t.fixed$length=Array
m.sfN(H.c(t,[Z.bJ]))
for(s=0,r=0;r<m.b;++r){q=l.cu(r)
p=q.gbk(q)
t=m.e;(t&&C.a).j(t,r,new Z.bJ(q,p,s*4,u))
s+=p}}t=a.a
o=new Z.cL(Z.mx(t,34962,H.h(m.f,"$ib",[P.A],"$ab")),m.e,l)
o.sdB(H.c([],[Z.aS]))
l=m.r
if(l.length!==0){n=Z.eu(t,34963,H.h(l,"$ib",[P.j],"$ab"))
C.a.h(o.b,new Z.aS(0,m.r.length,n))}l=m.x
if(l.length!==0){n=Z.eu(t,34963,H.h(l,"$ib",[P.j],"$ab"))
C.a.h(o.b,new Z.aS(1,m.x.length,n))}l=m.y
if(l.length!==0){n=Z.eu(t,34963,H.h(l,"$ib",[P.j],"$ab"))
C.a.h(o.b,new Z.aS(4,m.y.length,n))}return o},
sfN:function(a){this.e=H.h(a,"$ib",[Z.bJ],"$ab")},
scs:function(a){this.f=H.h(a,"$ib",[P.A],"$ab")},
sbo:function(a){this.r=H.h(a,"$ib",[P.j],"$ab")},
scd:function(a){this.x=H.h(a,"$ib",[P.j],"$ab")},
sca:function(a){this.y=H.h(a,"$ib",[P.j],"$ab")},
$id5:1}
F.ed.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.O():u},
aS:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aS()||!1
if(!t.a.aS())u=!1
s=t.e
if(s!=null)s.aI(0)
return u},
be:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.be()||!1
if(!t.a.be())u=!1
s=t.e
if(s!=null)s.aI(0)
return u},
bN:function(){var u=this.e
if(u!=null)++u.d
this.a.bN()
u=this.e
if(u!=null)u.aI(0)
return!0},
e0:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a.c.length,d=a1.ge3(a1),c=a1.gbk(a1),b=c*4,a=new Array(e*c)
a.fixed$length=Array
u=P.A
t=H.c(a,[u])
a=new Array(d)
a.fixed$length=Array
s=H.c(a,[Z.bJ])
for(r=0,q=0;q<d;++q){p=a1.cu(q)
o=p.gbk(p)
C.a.j(s,q,new Z.bJ(p,o,r*4,b))
for(n=0;n<e;++n){a=f.a.c
if(n>=a.length)return H.e(a,n)
m=a[n].ev(p)
l=r+n*c
for(k=0;k<m.length;++k){C.a.j(t,l,m[k]);++l}}r+=o}a=a0.a
j=new Z.cL(Z.mx(a,34962,H.h(t,"$ib",[u],"$ab")),s,a1)
j.sdB(H.c([],[Z.aS]))
f.b.b
if(f.c.b.length!==0){u=P.j
i=H.c([],[u])
for(q=0;h=f.c.b,q<h.length;++q){h=h[q].a
h.a.a.bd()
C.a.h(i,h.e)
h=f.c.b
if(q>=h.length)return H.e(h,q)
h=h[q].b
h.a.a.bd()
C.a.h(i,h.e)}g=Z.eu(a,34963,H.h(i,"$ib",[u],"$ab"))
C.a.h(j.b,new Z.aS(1,i.length,g))}if(f.d.b.length!==0){u=P.j
i=H.c([],[u])
for(q=0;h=f.d.b,q<h.length;++q){h=h[q].a
h.a.a.bd()
C.a.h(i,h.e)
h=f.d.b
if(q>=h.length)return H.e(h,q)
h=h[q].b
h.a.a.bd()
C.a.h(i,h.e)
h=f.d.b
if(q>=h.length)return H.e(h,q)
h=h[q].c
h.a.a.bd()
C.a.h(i,h.e)}g=Z.eu(a,34963,H.h(i,"$ib",[u],"$ab"))
C.a.h(j.b,new Z.aS(4,i.length,g))}return j},
i:function(a){var u=this,t=H.c([],[P.l])
if(u.a.c.length!==0){C.a.h(t,"Vertices:")
C.a.h(t,u.a.N("   "))}u.b.b
if(u.c.b.length!==0){C.a.h(t,"Lines:")
C.a.h(t,u.c.N("   "))}if(u.d.b.length!==0){C.a.h(t,"Faces:")
C.a.h(t,u.d.N("   "))}return C.a.u(t,"\n")},
af:function(){var u=this.e
if(u!=null)u.E(null)},
$id5:1}
F.d5.prototype={}
F.it.prototype={
jp:function(a){var u,t,s,r,q,p,o,n
H.h(a,"$ib",[F.bp],"$ab")
u=H.c([],[F.ad])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
o=new F.ad()
n=t.a
if(n==null)H.B(P.E("May not create a face with a first vertex which is not attached to a shape."))
if(n!=q.a||n!=p.a)H.B(P.E("May not create a face with vertices attached to different shapes."))
o.a=t
C.a.h(t.d.b,o)
o.b=q
C.a.h(q.d.c,o)
o.c=p
C.a.h(p.d.d,o)
C.a.h(o.a.a.d.b,o)
q=o.a.a.e
if(q!=null)q.E(null)
C.a.h(u,o)}return u},
gn:function(a){return this.b.length},
aS:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].cA())s=!1
return s},
be:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].cz())s=!1
return s},
i:function(a){return this.T()},
N:function(a){var u,t,s,r=H.c([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].N(a))
return C.a.u(r,"\n")},
T:function(){return this.N("")},
sca:function(a){this.b=H.h(a,"$ib",[F.ad],"$ab")}}
F.iu.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.T()},
N:function(a){var u,t,s=H.c([],[P.l]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
C.a.h(s,t[u].N(a+(""+u+". ")))}return C.a.u(s,"\n")},
T:function(){return this.N("")},
scd:function(a){this.b=H.h(a,"$ib",[F.bS],"$ab")}}
F.iv.prototype={
gn:function(a){return 0},
i:function(a){return this.T()},
N:function(a){var u,t,s=H.c([],[P.l])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.e(u,t)
C.a.h(s,u[t].N(a))}return C.a.u(s,"\n")},
T:function(){return this.N("")},
sbo:function(a){this.b=H.h(a,"$ib",[F.cm],"$ab")}}
F.bp.prototype={
ev:function(a){var u,t=this,s=J.S(a)
if(s.q(a,$.ac())){s=t.f
u=[P.A]
if(s==null)return H.c([0,0,0],u)
else return H.c([s.a,s.b,s.c],u)}else if(s.q(a,$.as())){s=t.r
u=[P.A]
if(s==null)return H.c([0,1,0],u)
else return H.c([s.a,s.b,s.c],u)}else if(s.q(a,$.bI())){s=t.x
u=[P.A]
if(s==null)return H.c([0,0,1],u)
else return H.c([s.a,s.b,s.c],u)}else if(s.q(a,$.ag())){s=t.y
u=[P.A]
if(s==null)return H.c([0,0],u)
else return H.c([s.a,s.b],u)}else if(s.q(a,$.c3())){s=t.z
u=[P.A]
if(s==null)return H.c([0,0,0],u)
else return H.c([s.a,s.b,s.c],u)}else if(s.q(a,$.dw())){s=t.Q
u=[P.A]
if(s==null)return H.c([1,1,1],u)
else return H.c([s.a,s.b,s.c],u)}else if(s.q(a,$.dx())){s=t.Q
u=[P.A]
if(s==null)return H.c([1,1,1,1],u)
else return H.c([s.a,s.b,s.c,s.d],u)}else if(s.q(a,$.cI()))return H.c([t.ch],[P.A])
else if(s.q(a,$.bH())){s=t.cx
u=[P.A]
if(s==null)return H.c([-1,-1,-1,-1],u)
else return H.c([s.a,s.b,s.c,s.d],u)}else return H.c([],[P.A])},
cA:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.df()
t.d.K(0,new F.jF(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.af()
s=t.a.e
if(s!=null)s.aI(0)}return!0},
cz:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.df()
t.d.K(0,new F.jE(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.af()
s=t.a.e
if(s!=null)s.aI(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.T()},
N:function(a){var u,t,s=this,r="-",q=H.c([],[P.l])
C.a.h(q,C.b.aZ(J.b8(s.e),0))
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
C.a.h(q,V.J(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.u(q,", ")
return a+"{"+t+"}"},
T:function(){return this.N("")}}
F.jF.prototype={
$1:function(a){var u,t
H.i(a,"$iad")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.m(0,u)}},
$S:7}
F.jE.prototype={
$1:function(a){var u,t
H.i(a,"$iad")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.m(0,u)}},
$S:7}
F.jy.prototype={
bd:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.E("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.af()
return!0},
bM:function(a,b,c,d,e,f){var u=F.cv(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gn:function(a){return this.c.length},
aS:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].cA()
return!0},
be:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].cz()
return!0},
bN:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
if(typeof p!=="number")return p.k()
o=q.b
if(typeof o!=="number")return o.k()
n=q.c
if(typeof n!=="number")return n.k()
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.V(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
i:function(a){return this.T()},
N:function(a){var u,t,s,r
this.bd()
u=H.c([],[P.l])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].N(a))
return C.a.u(u,"\n")},
T:function(){return this.N("")},
scs:function(a){this.c=H.h(a,"$ib",[F.bp],"$ab")}}
F.jz.prototype={
gn:function(a){return this.b.length+this.c.length+this.d.length},
K:function(a,b){var u=this
H.o(b,{func:1,ret:-1,args:[F.ad]})
C.a.K(u.b,b)
C.a.K(u.c,new F.jA(u,b))
C.a.K(u.d,new F.jB(u,b))},
i:function(a){return this.T()},
T:function(){var u,t,s,r=H.c([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].N(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].N(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].N(""))
return C.a.u(r,"\n")},
sh9:function(a){this.b=H.h(a,"$ib",[F.ad],"$ab")},
sha:function(a){this.c=H.h(a,"$ib",[F.ad],"$ab")},
shb:function(a){this.d=H.h(a,"$ib",[F.ad],"$ab")}}
F.jA.prototype={
$1:function(a){H.i(a,"$iad")
if(!J.V(a.a,this.a))this.b.$1(a)},
$S:7}
F.jB.prototype={
$1:function(a){var u
H.i(a,"$iad")
u=this.a
if(!J.V(a.a,u)&&!J.V(a.b,u))this.b.$1(a)},
$S:7}
F.jC.prototype={
gn:function(a){return this.b.length+this.c.length},
i:function(a){return this.T()},
T:function(){var u,t,s,r=H.c([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].N(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].N(""))
return C.a.u(r,"\n")},
shk:function(a){this.b=H.h(a,"$ib",[F.bS],"$ab")},
shl:function(a){this.c=H.h(a,"$ib",[F.bS],"$ab")}}
F.jD.prototype={
gn:function(a){return 0},
i:function(a){return this.T()},
T:function(){var u,t,s=H.c([],[P.l])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.e(u,t)
C.a.h(s,u[t].N(""))}return C.a.u(s,"\n")},
sbo:function(a){this.b=H.h(a,"$ib",[F.cm],"$ab")}}
O.cj.prototype={
gt:function(){var u=this.fr
return u==null?this.fr=D.O():u},
a2:function(a){var u
H.i(a,"$iw")
u=this.fr
if(u!=null)u.E(a)},
c4:function(){return this.a2(null)},
dM:function(a){H.i(a,"$iw")
this.a=null
this.a2(a)},
iQ:function(){return this.dM(null)},
hD:function(a,b){var u=V.au
H.h(b,"$ik",[u],"$ak")
u=new D.bO([u])
u.b=!0
this.a2(u)},
hF:function(a,b){var u=V.au
H.h(b,"$ik",[u],"$ak")
u=new D.bP([u])
u.b=!0
this.a2(u)},
dr:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.j,h=new H.X([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=h.l(0,0)
h.j(0,0,r==null?1:r)}q=H.c([],[A.aE])
h.K(0,new O.hK(j,q))
C.a.c1(q,new O.hL())
p=new H.X([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){o=u[s]
r=o.gbt()
n=p.l(0,o.gbt())
p.j(0,r,n==null?1:n)}m=H.c([],[A.aH])
p.K(0,new O.hM(j,m))
C.a.c1(m,new O.hN())
l=new H.X([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.z)(i),++s){o=i[s]
t=o.gbt()
r=l.l(0,o.gbt())
l.j(0,t,r==null?1:r)}k=H.c([],[A.aI])
l.K(0,new O.hO(j,k))
C.a.c1(k,new O.hP())
i=C.d.a6(j.e.a.length+3,4)
j.dy.e
return A.nX(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
an:function(a,b){H.h(a,"$ib",[T.d9],"$ab")
if(b!=null)if(!C.a.aj(a,b)){b.sa8(0,a.length)
C.a.h(a,b)}},
ah:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.av(u,u.length,[H.v(u,0)]);u.A();){t=u.d
t.toString
s=$.jx
if(s==null)s=$.jx=new V.H(0,0,1)
t.a=s
r=$.jw
t.d=r==null?$.jw=new V.H(0,1,0):r
r=$.jv
t.e=r==null?$.jv=new V.H(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.au(s)
r=s.a
if(typeof r!=="number")return r.k()
p=s.b
if(typeof p!=="number")return p.k()
o=s.c
if(typeof o!=="number")return o.k()
t.a=s.v(0,Math.sqrt(r*r+p*p+o*o))
o=q.au(t.d)
p=o.a
if(typeof p!=="number")return p.k()
r=o.b
if(typeof r!=="number")return r.k()
s=o.c
if(typeof s!=="number")return s.k()
t.d=o.v(0,Math.sqrt(p*p+r*r+s*s))
s=q.au(t.e)
r=s.a
if(typeof r!=="number")return r.k()
p=s.b
if(typeof p!=="number")return p.k()
o=s.c
if(typeof o!=="number")return o.k()
t.e=s.v(0,Math.sqrt(r*r+p*p+o*o))}}}},
km:function(b6,b7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.dr()
u=b6.fr.l(0,b5.aU)
if(u==null){u=A.nW(b5,b6.a)
t=u.b
if(t.length===0)H.B(P.E("May not cache a shader with no name."))
if(b6.fr.bQ(0,t))H.B(P.E('Shader cache already contains a shader by the name "'+t+'".'))
b6.fr.j(0,t,u)}b5=b4.a=u
b7.e=null}s=b5.z
r=s.e6
b5=b7.e
if(!(b5 instanceof Z.cL))b5=b7.e=null
if(b5==null||!J.V(b5.d,r)){b5=s.k3
if(b5)b7.d.aS()
q=s.k4
if(q)b7.d.be()
p=s.r2
if(p)b7.d.bN()
o=b7.d.e0(new Z.jH(b6.a),r)
o.bf($.ac()).e=b4.a.Q.c
if(b5)o.bf($.as()).e=b4.a.cx.c
if(q)o.bf($.bI()).e=b4.a.ch.c
if(s.r1)o.bf($.ag()).e=b4.a.cy.c
if(p)o.bf($.c3()).e=b4.a.db.c
if(s.rx)o.bf($.bH()).e=b4.a.dx.c
b7.e=o}b5=T.d9
n=H.c([],[b5])
q=b4.a
p=b6.a
p.useProgram(q.r)
q.x.jM()
if(s.dy){q=b4.a
m=b6.dx
m=m.ga7(m)
q=q.dy
q.toString
q.aC(m.at(0,!0))}if(s.fr){q=b4.a
m=b6.cx
if(m==null){m=b6.db
m=m.ga7(m)
l=b6.dx
l=b6.cx=m.k(0,l.ga7(l))
m=l}q=q.fr
q.toString
q.aC(m.at(0,!0))}q=b4.a
m=b6.ch
if(m==null){m=b6.gkj()
l=b6.dx
l=b6.ch=m.k(0,l.ga7(l))
m=l}q=q.fy
q.toString
q.aC(m.at(0,!0))
if(s.ry){q=b4.a
m=b4.b
q=q.k1
q.toString
q.aC(C.l.at(m,!0))}if(s.x1){q=b4.a
m=b4.c
q=q.k2
q.toString
q.aC(C.l.at(m,!0))}if(s.x2){q=b4.a
m=b4.d
q=q.k3
q.toString
q.aC(C.l.at(m,!0))}if(s.y2>0){k=b4.e.a.length
q=b4.a.k4
C.c.bY(q.a,q.d,k)
for(q=[P.A],j=0;j<k;++j){m=b4.a
l=b4.e.a
if(j>=l.length)return H.e(l,j)
l=l[j]
m.toString
H.i(l,"$iau")
m=m.r1
if(j>=m.length)return H.e(m,j)
m=m[j]
i=new Float32Array(H.cx(H.h(l.at(0,!0),"$ib",q,"$ab")))
C.c.eV(m.a,m.d,!1,i)}}q=s.a
if(q.a){m=b4.a
l=b4.f.f
m=m.r2
C.c.a_(m.a,m.d,l.a,l.b,l.c)}if(q.b){b4.an(n,b4.f.d)
q=b4.a
m=b4.f.d
q.ay(q.rx,m)}if(s.id){q=s.b
if(q.a){m=b4.a
l=b4.r.f
m=m.x1
C.c.a_(m.a,m.d,l.a,l.b,l.c)}if(q.b){b4.an(n,b4.r.d)
q=b4.a
m=b4.r.d
q.ay(q.x2,m)}q=s.c
if(q.a){m=b4.a
l=b4.x.f
m=m.y2
C.c.a_(m.a,m.d,l.a,l.b,l.c)}if(q.b){b4.an(n,b4.x.d)
q=b4.a
m=b4.x.d
q.ay(q.aU,m)}q=s.d
if(q.a){m=b4.a
l=b4.y.f
m=m.e7
C.c.a_(m.a,m.d,l.a,l.b,l.c)}if(q.b){b4.an(n,b4.y.d)
q=b4.a
m=b4.y.d
q.ay(q.e8,m)}q=s.e
m=q.a
if(m||q.b||!1){l=b4.a
h=b4.z.ch
l=l.eb
C.c.aa(l.a,l.d,h)}if(m){m=b4.a
l=b4.z.f
m=m.e9
C.c.a_(m.a,m.d,l.a,l.b,l.c)}if(q.b){b4.an(n,b4.z.d)
q=b4.a
m=b4.z.d
q.ay(q.ea,m)}q=s.z
if(q.length>0){m=b6.db
g=m.ga7(m)
m=P.j
f=new H.X([m,m])
for(m=b4.dx.e,l=m.length,e=0;e<m.length;m.length===l||(0,H.z)(m),++e){d=m[e]
c=f.l(0,0)
if(c==null)c=0
f.j(0,0,c+1)
b=J.dy(b4.a.cD.l(0,0),c)
h=g.au(d.a)
a=h.a
if(typeof a!=="number")return a.k()
a0=h.b
if(typeof a0!=="number")return a0.k()
a1=h.c
if(typeof a1!=="number")return a1.k()
a1=h.v(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
h=a1.b
a1=a1.c
C.c.a_(a0.a,a0.d,a,h,a1)
a1=d.c
h=b.f
C.c.a_(h.a,h.d,a1.a,a1.b,a1.c)}for(m=q.length,e=0;e<q.length;q.length===m||(0,H.z)(q),++e){l=q[e].a
k=f.l(0,l)
if(k==null)k=0
l=b4.a.cC.l(0,l)
C.c.bY(l.a,l.d,k)}}q=s.Q
if(q.length>0){m=b6.db
g=m.ga7(m)
m=P.j
a2=new H.X([m,m])
for(m=b4.dx.f,l=m.length,h=[b5],a=[P.A],e=0;e<m.length;m.length===l||(0,H.z)(m),++e){d=m[e]
a3=d.gbt()
c=a2.l(0,a3)
if(c==null)c=0
a2.j(0,a3,c+1)
b=J.dy(b4.a.cF.l(0,a3),c)
a4=g.k(0,d.ga7(d))
a0=d.ga7(d)
a1=$.d1
a0=a0.V(a1==null?$.d1=new V.u(0,0,0):a1)
a1=b.b
C.c.a_(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=$.d1
a0=a4.V(a0==null?$.d1=new V.u(0,0,0):a0)
a1=b.c
C.c.a_(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gbs(d)
a1=b.e
C.c.a_(a1.a,a1.d,a0.a,a0.b,a0.c)
d.gb_()
a0=a4.bv(0)
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
i=new Float32Array(H.cx(H.h(new V.aG(a1,a5,a6,a7,a8,a9,b0,b1,a0).at(0,!0),"$ib",a,"$ab")))
C.c.eU(b2.a,b2.d,!1,i)
d.gb_()
a0=d.gb_()
H.h(n,"$ib",h,"$ab")
if(!C.a.aj(n,a0)){a0.sa8(0,n.length)
C.a.h(n,a0)}a0=d.gb_()
a1=a0.ga9(a0)
if(a1){a1=b.f
a1.toString
a5=a0.ga9(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.ga8(a0)
a1.a.uniform1i(a1.d,a0)}}d.gbj()
a0=d.gf4()
a1=b.x
a1.toString
a5=a0.gjJ(a0)
a6=a0.gjK(a0)
a7=a0.gjL()
a0=a0.gjI()
C.c.eT(a1.a,a1.d,a5,a6,a7,a0)
a0=d.gbj()
if(!C.a.aj(n,a0)){a0.sa8(0,n.length)
C.a.h(n,a0)}a0=d.gbj()
a1=a0.ga9(a0)
if(a1){a1=b.r
a1.toString
a5=a0.ga9(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.ga8(a0)
a1.a.uniform1i(a1.d,a0)}}if(d.gjN()){a0=d.gjt()
a1=b.y
C.c.aa(a1.a,a1.d,a0)
a0=d.gju()
a1=b.z
C.c.aa(a1.a,a1.d,a0)
a0=d.gjv()
a1=b.Q
C.c.aa(a1.a,a1.d,a0)}}for(m=q.length,e=0;e<q.length;q.length===m||(0,H.z)(q),++e){l=q[e].a
k=a2.l(0,l)
if(k==null)k=0
l=b4.a.cE.l(0,l)
C.c.bY(l.a,l.d,k)}}q=s.ch
if(q.length>0){m=b6.db
g=m.ga7(m)
m=P.j
b3=new H.X([m,m])
for(m=b4.dx.r,l=m.length,b5=[b5],e=0;e<m.length;m.length===l||(0,H.z)(m),++e){d=m[e]
a3=d.gbt()
c=b3.l(0,a3)
if(c==null)c=0
b3.j(0,a3,c+1)
b=J.dy(b4.a.cH.l(0,a3),c)
h=d.gki(d)
a=b.b
C.c.a_(a.a,a.d,h.a,h.b,h.c)
h=d.gkI(d).kU()
a=b.c
C.c.a_(a.a,a.d,h.a,h.b,h.c)
h=g.V(d.gki(d))
a=b.d
C.c.a_(a.a,a.d,h.a,h.b,h.c)
h=d.gbs(d)
a=b.e
C.c.a_(a.a,a.d,h.a,h.b,h.c)
d.gb_()
h=d.gkX()
a=b.f
C.c.a_(a.a,a.d,h.a,h.b,h.c)
h=d.gag(d)
a=b.r
C.c.a_(a.a,a.d,h.a,h.b,h.c)
h=d.gkV()
a=b.x
C.c.aa(a.a,a.d,h)
h=d.gkW()
a=b.y
C.c.aa(a.a,a.d,h)
d.gb_()
h=d.gb_()
H.h(n,"$ib",b5,"$ab")
if(!C.a.aj(n,h)){h.sa8(0,n.length)
C.a.h(n,h)}h=d.gb_()
a=h.ga9(h)
if(a){a=b.dx
a.toString
a0=h.ga9(h)
if(!a0)a.a.uniform1i(a.d,0)
else{h=h.ga8(h)
a.a.uniform1i(a.d,h)}}d.gbj()
h=d.gf4()
a=b.z
a.toString
a0=h.gjJ(h)
a1=h.gjK(h)
a5=h.gjL()
h=h.gjI()
C.c.eT(a.a,a.d,a0,a1,a5,h)
h=d.gbj()
if(!C.a.aj(n,h)){h.sa8(0,n.length)
C.a.h(n,h)}h=d.gbj()
a=h.ga9(h)
if(a){a=b.dy
a.toString
a0=h.ga9(h)
if(!a0)a.a.uniform1i(a.d,0)
else{h=h.ga8(h)
a.a.uniform1i(a.d,h)}}if(d.gkJ()){h=d.gkH()
a=b.Q
C.c.aa(a.a,a.d,h)
h=d.gkG()
a=b.ch
C.c.aa(a.a,a.d,h)}if(d.gjN()){h=d.gjt()
a=b.cx
C.c.aa(a.a,a.d,h)
h=d.gju()
a=b.cy
C.c.aa(a.a,a.d,h)
h=d.gjv()
a=b.db
C.c.aa(a.a,a.d,h)}}for(b5=q.length,e=0;e<q.length;q.length===b5||(0,H.z)(q),++e){m=q[e].a
k=b3.l(0,m)
if(k==null)k=0
m=b4.a.cG.l(0,m)
C.c.bY(m.a,m.d,k)}}}if(s.f.b){b4.an(n,b4.Q.d)
b5=b4.a
q=b4.Q.d
b5.ay(b5.ec,q)}if(s.dx){b5=b4.a
q=b6.Q
if(q==null){q=b6.db
q=b6.Q=q.ga7(q).bv(0)}b5=b5.id
b5.toString
b5.aC(q.at(0,!0))}if(s.cy){b4.an(n,b4.ch)
b5=b4.a
q=b4.ch
b5.iT(b5.ed,q)
b5=s.r
if(b5.a){q=b4.a
m=b4.cx.f
q=q.ee
C.c.a_(q.a,q.d,m.a,m.b,m.c)}if(b5.b){b4.an(n,b4.cx.d)
b5=b4.a
q=b4.cx.d
b5.ay(b5.ef,q)}b5=s.x
q=b5.a
if(q||b5.b||!1){m=b4.a
l=b4.cy.ch
m=m.eg
C.c.aa(m.a,m.d,l)}if(q){q=b4.a
m=b4.cy.f
q=q.eh
C.c.a_(q.a,q.d,m.a,m.b,m.c)}if(b5.b){b4.an(n,b4.cy.d)
b5=b4.a
q=b4.cy.d
b5.ay(b5.ei,q)}}b5=s.y
q=b5.a
m=!q
if(!m||b5.b||!1){if(q){q=b4.a
l=b4.db.f
q=q.ej
C.c.aa(q.a,q.d,l)}if(b5.b){b4.an(n,b4.db.d)
q=b4.a
l=b4.db.d
q.ay(q.ek,l)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<n.length;++j)n[j].aR(b6)
q=b7.e
q.aR(b6)
q.bh(b6)
q.bB(b6)
if(!m||b5.b||!1)p.disable(3042)
for(j=0;j<n.length;++j)n[j].bB(b6)
b5=b4.a
b5.toString
p.useProgram(null)
b5.x.jG()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dr().aU},
sfR:function(a){this.e=H.h(a,"$ia1",[V.au],"$aa1")}}
O.hK.prototype={
$2:function(a,b){H.a0(a)
H.a0(b)
if(typeof b!=="number")return b.m()
return C.a.h(this.b,new A.aE(a,C.d.a6(b+3,4)*4))},
$S:15}
O.hL.prototype={
$2:function(a,b){H.i(a,"$iaE")
H.i(b,"$iaE")
return J.kY(a.a,b.a)},
$S:45}
O.hM.prototype={
$2:function(a,b){H.a0(a)
H.a0(b)
if(typeof b!=="number")return b.m()
return C.a.h(this.b,new A.aH(a,C.d.a6(b+3,4)*4))},
$S:15}
O.hN.prototype={
$2:function(a,b){H.i(a,"$iaH")
H.i(b,"$iaH")
return J.kY(a.a,b.a)},
$S:46}
O.hO.prototype={
$2:function(a,b){H.a0(a)
H.a0(b)
if(typeof b!=="number")return b.m()
return C.a.h(this.b,new A.aI(a,C.d.a6(b+3,4)*4))},
$S:15}
O.hP.prototype={
$2:function(a,b){H.i(a,"$iaI")
H.i(b,"$iaI")
return J.kY(a.a,b.a)},
$S:47}
O.hE.prototype={
aN:function(){var u,t=this
t.d1()
u=t.f
if(!(Math.abs(u-1)<$.C().a)){t.f=1
u=new D.L(t.b,u,1,[P.A])
u.b=!0
t.a.a2(u)}}}
O.cV.prototype={
a2:function(a){return this.a.a2(H.i(a,"$iw"))},
c4:function(){return this.a2(null)},
aN:function(){},
bK:function(a){var u,t,s=this
if(!s.c.q(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.aN()
u=s.a
u.a=null
u.a2(null)}},
sby:function(a){var u,t,s=this,r=a==null
if(r){u=s.c
s.bK(new A.ah(u.a,!1,!1))}else{u=s.c
if(!u.b)s.bK(new A.ah(u.a,!0,!1))}u=s.d
if(u!=a){if(u!=null)u.gt().U(0,s.gbE())
t=s.d
s.d=a
if(!r)a.gt().h(0,s.gbE())
r=new D.L(s.b+".texture2D",t,s.d,[T.bZ])
r.b=!0
s.a.a2(r)}}}
O.hF.prototype={}
O.bi.prototype={
dO:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.L(s.b+".color",u,a,[V.a9])
t.b=!0
s.a.a2(t)}},
aN:function(){this.d1()
this.dO(new V.a9(1,1,1))},
sbs:function(a,b){this.bK(new A.ah(!0,this.c.b,!1))
this.dO(b)}}
O.hH.prototype={}
O.hI.prototype={
aN:function(){var u,t=this
t.d2()
u=t.ch
if(!(Math.abs(u-1)<$.C().a)){t.ch=1
u=new D.L(t.b+".refraction",u,1,[P.A])
u.b=!0
t.a.a2(u)}}}
O.hJ.prototype={
dP:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.C().a)){u.ch=a
t=new D.L(u.b+".shininess",t,a,[P.A])
t.b=!0
u.a.a2(t)}},
aN:function(){this.d2()
this.dP(100)}}
O.cq.prototype={}
T.d9.prototype={}
T.bZ.prototype={}
T.iX.prototype={
ga8:function(a){return this.a},
sa8:function(a,b){this.a=b},
ga9:function(a){var u=this.d
u=u==null?null:u.ga9(u)
if(u==null){u=this.c
u=u==null?null:u.ga9(u)}return u===!0},
gt:function(){var u=this.f
return u==null?this.f=D.O():u},
aR:function(a){var u
if(this.d==null){u=this.d=this.c
if(u!=null)u.aR(a)}},
bB:function(a){var u=this.d
if(u!=null){u.bB(a)
this.d=null}},
sj5:function(a){this.e=H.h(a,"$ib",[T.bZ],"$ab")}}
T.iY.prototype={
ga8:function(a){return this.a},
sa8:function(a,b){this.a=b},
ga9:function(a){return this.d},
gt:function(){var u=this.y
return u==null?this.y=D.O():u},
aR:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}},
bB:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(3553,null)}}}
T.iZ.prototype={
jW:function(a,b,c,d){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9987)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.iY()
t.a=0
t.b=q
t.d=t.c=!1
r=W.p
W.af(u,"load",H.o(new T.j_(this,t,u,!1,q,!1,!0),{func:1,ret:-1,args:[r]}),!1,r)
return t},
iR:function(a,b,c){var u,t,s,r
b=V.lD(b)
u=V.lD(a.width)
t=V.lD(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.l3()
s.width=u
s.height=t
r=H.i(C.j.f0(s,"2d"),"$icM")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.po(r.getImageData(0,0,s.width,s.height))}}}
T.j_.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.iR(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.c.ks(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.e5()}++s.e},
$S:25}
V.fC.prototype={
bg:function(a,b){return!0},
i:function(a){return"all"},
$ibv:1}
V.bv.prototype={}
V.dX.prototype={
bg:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)if(u[s].bg(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saL:function(a){this.a=H.h(a,"$ib",[V.bv],"$ab")},
$ibv:1}
V.by.prototype={
bg:function(a,b){return!this.f9(0,b)},
i:function(a){return"!["+this.d0(0)+"]"}}
V.is.prototype={
ff:function(a){var u,t
if(a.a.length<=0)throw H.f(P.E("May not create a SetMatcher with zero characters."))
u=new H.X([P.j,P.a4])
for(t=new H.dU(a,a.gn(a),[H.aD(a,"y",0)]);t.A();)u.j(0,t.d,!0)
this.siS(u)},
bg:function(a,b){return this.a.bQ(0,b)},
i:function(a){var u=this.a
return P.d8(new H.dT(u,[H.v(u,0)]),0,null)},
siS:function(a){this.a=H.h(a,"$ix",[P.j,P.a4],"$ax")},
$ibv:1}
V.d6.prototype={
u:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.db(this.a.S(0,b))
r.saL(H.c([],[V.bv]))
r.c=!1
C.a.h(this.c,r)
return r},
jP:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.bg(0,a))return r}return},
i:function(a){return this.b},
sje:function(a){this.c=H.h(a,"$ib",[V.db],"$ab")}}
V.ek.prototype={
i:function(a){var u=H.n5(this.b,"\n","\\n"),t=H.n5(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.da.prototype={
i:function(a){return this.b},
siM:function(a){var u=P.l
this.c=H.h(a,"$ix",[u,u],"$ax")}}
V.j3.prototype={
S:function(a,b){var u=this.a.l(0,b)
if(u==null){u=new V.d6(this,b)
u.sje(H.c([],[V.db]))
u.d=null
this.a.j(0,b,u)}return u},
bA:function(a){var u,t=this.b.l(0,a)
if(t==null){t=new V.da(a)
u=P.l
t.siM(new H.X([u,u]))
this.b.j(0,a,t)}return t},
kw:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.c([],[V.ek]),k=this.c,j=[P.j],i=H.c([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.G(a,s)
q=k.jP(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.d8(i,0,m)
throw H.f(P.E("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.c([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.d8(i,0,m)
o=k.d
n=o.c.l(0,p)
t=new V.ek(n==null?o.b:n,p,s)}++s}}},
sj2:function(a){this.a=H.h(a,"$ix",[P.l,V.d6],"$ax")},
sj6:function(a){this.b=H.h(a,"$ix",[P.l,V.da],"$ax")}}
V.db.prototype={
i:function(a){return this.b.b+": "+this.d0(0)}}
X.dD.prototype={$icY:1}
X.hj.prototype={
gt:function(){var u=this.x
return u==null?this.x=D.O():u}}
X.e3.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.O():u},
b5:function(a){var u
H.i(a,"$iw")
u=this.f
if(u!=null)u.E(a)},
fA:function(){return this.b5(null)},
sew:function(a){var u,t,s=this
if(!J.V(s.b,a)){u=s.b
if(u!=null)u.gt().U(0,s.gd7())
t=s.b
s.b=a
if(a!=null)a.gt().h(0,s.gd7())
u=new D.L("mover",t,s.b,[U.aa])
u.b=!0
s.b5(u)}},
$icY:1,
$idD:1}
X.eh.prototype={}
V.iB.prototype={
fh:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.p
W.af(q,"scroll",H.o(new V.iD(o),{func:1,ret:-1,args:[r]}),!1,r)},
ct:function(a,b){var u,t,s,r,q
a=H.a0(C.d.jy(a,0,4))
u=P.fe(C.v,b,C.h,!1)
t=document.createElement("div")
t.className="textHeader"
t.id=u
s=t.style
r=""+(28-a*3)+"px"
s.fontSize=r
q=W.nz()
q.href="#"+H.m(u)
q.textContent=b
t.appendChild(q)
this.a.appendChild(t)},
a0:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.h(a,"$ib",[P.l],"$ab")
this.iV()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.kw(C.a.jV(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
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
if(H.pI(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.N(m[1])
l.textContent=H.N(m[0])
t.appendChild(l)}else{k=P.fe(C.v,n,C.h,!1)
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
iV:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.j3()
t=P.l
u.sj2(new H.X([t,V.d6]))
u.sj6(new H.X([t,V.da]))
u.c=null
u.c=u.S(0,q)
t=u.S(0,q).u(0,p)
s=V.ap(new H.a8("*"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,p).u(0,p)
s=new V.by()
r=[V.bv]
s.saL(H.c([],r))
C.a.h(t.a,s)
t=V.ap(new H.a8("*"))
C.a.h(s.a,t)
t=u.S(0,p).u(0,"BoldEnd")
s=V.ap(new H.a8("*"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,q).u(0,o)
s=V.ap(new H.a8("_"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,o).u(0,o)
s=new V.by()
s.saL(H.c([],r))
C.a.h(t.a,s)
t=V.ap(new H.a8("_"))
C.a.h(s.a,t)
t=u.S(0,o).u(0,n)
s=V.ap(new H.a8("_"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,q).u(0,m)
s=V.ap(new H.a8("`"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,m).u(0,m)
s=new V.by()
s.saL(H.c([],r))
C.a.h(t.a,s)
t=V.ap(new H.a8("`"))
C.a.h(s.a,t)
t=u.S(0,m).u(0,"CodeEnd")
s=V.ap(new H.a8("`"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,q).u(0,l)
s=V.ap(new H.a8("["))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,l).u(0,k)
s=V.ap(new H.a8("|"))
C.a.h(t.a,s)
s=u.S(0,l).u(0,j)
t=V.ap(new H.a8("]"))
C.a.h(s.a,t)
s.c=!0
s=u.S(0,l).u(0,l)
t=new V.by()
t.saL(H.c([],r))
C.a.h(s.a,t)
s=V.ap(new H.a8("|]"))
C.a.h(t.a,s)
s=u.S(0,k).u(0,j)
t=V.ap(new H.a8("]"))
C.a.h(s.a,t)
s.c=!0
s=u.S(0,k).u(0,k)
t=new V.by()
t.saL(H.c([],r))
C.a.h(s.a,t)
s=V.ap(new H.a8("|]"))
C.a.h(t.a,s)
C.a.h(u.S(0,q).u(0,i).a,new V.fC())
s=u.S(0,i).u(0,i)
t=new V.by()
t.saL(H.c([],r))
C.a.h(s.a,t)
s=V.ap(new H.a8("*_`["))
C.a.h(t.a,s)
s=u.S(0,"BoldEnd")
s.d=s.a.bA(p)
s=u.S(0,n)
s.d=s.a.bA(o)
s=u.S(0,"CodeEnd")
s.d=s.a.bA(m)
s=u.S(0,j)
s.d=s.a.bA("Link")
s=u.S(0,i)
s.d=s.a.bA(i)
this.b=u}}
V.iD.prototype={
$1:function(a){P.lg(C.k,new V.iC(this.a))},
$S:25}
V.iC.prototype={
$0:function(){var u=C.e.az(document.documentElement.scrollTop),t=this.a.style,s=H.m(-0.01*u)+"px"
t.top=s},
$S:2}
B.az.prototype={
gdW:function(){var u=this
return new B.az(u.a,u.b+1,u.c,u.d,u.e,u.f)},
gdY:function(){var u=this
return new B.az(u.a,u.b-1,u.c,u.d,u.e,u.f)},
gag:function(a){var u=this,t=u.a+1,s=u.d,r=u.f
if(t>=16){s+=16
r=r==null?null:r.gag(r)
t=0}return new B.az(t,u.b,u.c,s,u.e,r)},
gae:function(a){var u=this,t=u.a-1,s=u.d,r=u.f
if(t<0){s-=16
r=r==null?null:r.gae(r)
t=15}return new B.az(t,u.b,u.c,s,u.e,r)},
gaF:function(){var u=this,t=u.c+1,s=u.e,r=u.f
if(t>=16){s+=16
r=r==null?null:r.gaF()
t=0}return new B.az(u.a,u.b,t,u.d,s,r)},
gaQ:function(a){var u=this,t=u.c-1,s=u.e,r=u.f
if(t<0){s-=16
r=r==null?null:r.gaQ(r)
t=15}return new B.az(u.a,u.b,t,u.d,s,r)},
ey:function(a){var u=this,t=J.S(a)
if(t.q(a,$.b4()))return u.gae(u)
else if(t.q(a,$.b5()))return u.gag(u)
else if(t.q(a,$.bE()))return u.gdY()
else if(t.q(a,$.b6()))return u.gdW()
else if(t.q(a,$.bF()))return u.gaQ(u)
else if(t.q(a,$.bG()))return u.gaF()
else return},
gcw:function(){var u=this
return V.ii(u.a+u.d,u.b,u.c+u.e,1,1,1)},
i:function(a){var u=this
return H.m(u.f)+".block("+u.a+", "+u.b+", "+u.c+", ("+u.d+", "+u.e+"), "+B.nB(u.gM(u))+")"},
gM:function(a){var u=this,t=u.f
t=t==null?null:t.ai(u.a,u.b,u.c)
if(t==null)t=u.b<0?100:0
return t},
sM:function(a,b){var u=this,t=u.f
if(t!=null)t.W(u.a,u.b,u.c,b)}}
B.fR.prototype={
bR:function(a){var u,t,s
for(u=0;u<16;++u)for(t=0;t<16;++t)for(s=0;s<this.b;++s)a.W(u,s,t,this.hf(u,s,t))
a.cJ()},
hf:function(a,b,c){var u=a===0
if(u||c===0)return u&&c===0?112:110
if(a===1&&c===1)return 110
return C.d.b1(a+b+c,2)===0?113:111},
$ilW:1}
B.c9.prototype={
fb:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
k.d=new Uint8Array(12288)
k.sc7(H.c([],[E.a2]))
for(u=k.c.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
q=E.cd(j,j,j,j)
p=r.y
o=H.v(p,0)
H.D(q,o)
n=[o]
if(H.G(p.bm(H.c([q],n)))){m=p.a
l=m.length
C.a.h(m,q)
o=H.h(H.c([q],n),"$ik",[o],"$ak")
p=p.c
if(p!=null)p.$2(l,o)}p=k.e;(p&&C.a).h(p,q)}k.b=k.a=0
k.f=!1
k.x=k.r=!0},
i:function(a){return"chunk("+this.a+", "+this.b+")"},
cJ:function(){var u,t=this
t.x=!1
t.f=!0
t.saK(!1)
u=t.gae(t)
if(u!=null)u.f=!0
u=t.gag(t)
if(u!=null)u.f=!0
u=t.gaF()
if(u!=null)u.f=!0
u=t.gaQ(t)
if(u!=null)u.f=!0},
ai:function(a,b,c){var u,t
if(b<0)return 100
if(b>=48)return 0
if(a<0)return 0
if(a>=16)return 0
if(c<0)return 0
if(c>=16)return 0
u=this.d
t=(a*48+b)*16+c
if(t<0||t>=12288)return H.e(u,t)
return u[t]},
bI:function(a,b,c,d){var u=a==null?null:a.bZ(b,c,d)
return u==null?0:u},
bZ:function(a,b,c){var u,t,s=this
if(b<0)return 100
if(b>=48)return 0
if(a<0)return s.bI(s.gae(s),a+16,b,c)
if(a>=16)return s.bI(s.gag(s),a-16,b,c)
if(c<0)return s.bI(s.gaQ(s),a,b,c+16)
if(c>=16)return s.bI(s.gaF(),a,b,c-16)
u=s.d
t=(a*48+b)*16+c
if(t<0||t>=12288)return H.e(u,t)
return u[t]},
W:function(a,b,c,d){var u,t
if(b<0)return!1
if(b>=48)return!1
if(a<0)return!1
if(a>=16)return!1
if(c<0)return!1
if(c>=16)return!1
u=this.d
t=(a*48+b)*16+c
if(t<0||t>=12288)return H.e(u,t)
u[t]=d
return!0},
gae:function(a){return this.c.aV(this.a-16,this.b)},
gaF:function(){return this.c.aV(this.a,this.b+16)},
gag:function(a){return this.c.aV(this.a+16,this.b)},
gaQ:function(a){return this.c.aV(this.a,this.b-16)},
cV:function(a,b,c){var u,t
for(u=47;u>=0;--u){t=this.ai(a,u,b)
if(t>=100&&t<=117)return u}return c},
kx:function(a,b){return this.cV(a,b,48)},
kz:function(){var u,t=this
if(t.x||!t.r)return
t.f=t.r=!1
u=B.lf(t.c.a,null)
u.jx(t)
u.cI(0,t.e)},
saK:function(a){var u,t,s
for(u=this.e,t=u.length,s=0;s<t;++s)u[s].b=a},
kA:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=this
if(i.x||i.r){i.saK(!1)
return}u=V.le(i.a,i.b,16,16)
t=u.ex(a)
s=t.a
r=a.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.d(r)
q=s-r
s=t.b
p=a.b
if(typeof s!=="number")return s.p()
if(typeof p!=="number")return H.d(p)
o=s-p
if(q*q+o*o<100){i.saK(!0)
return}n=u.ex(b)
s=b.a
if(typeof s!=="number")return s.p()
m=b.b
if(typeof m!=="number")return m.p()
m=new V.a3(s-r,m-p)
l=m.v(0,Math.sqrt(m.D(m)))
m=n.a
if(typeof m!=="number")return m.p()
s=n.b
if(typeof s!=="number")return s.p()
k=new V.a3(m-r,s-p)
j=k.D(k)
if(j>6400){i.saK(!1)
return}i.saK(l.D(k.v(0,j))>0)},
sc7:function(a){this.e=H.h(a,"$ib",[E.a2],"$ab")}}
B.fS.prototype={
jz:function(a,b,c){var u,t,s=this
s.b=b
s.c=a
s.d=c
s.e=$.bD()
s.fZ()
for(;s.iZ(););u=s.b
t=s.d
s.b=u.m(0,new V.u(t.a,t.b,t.c))
return!0},
fZ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.c,a2=a0.b,a3=a1.bX(0,new V.H(a2.a,a2.b,a2.c))
a2=a3.bX(0,a0.d)
a1=a3.a
u=a2.a
t=Math.min(H.cA(a1),H.cA(u))
if(typeof a1!=="number")return a1.m()
if(typeof u!=="number")return u.m()
s=Math.max(a1+a3.d,u+a2.d)
u=a3.b
a1=a2.b
r=Math.min(H.cA(u),H.cA(a1))
if(typeof u!=="number")return u.m()
if(typeof a1!=="number")return a1.m()
q=Math.max(u+a3.e,a1+a2.e)
a1=a3.c
u=a2.c
p=Math.min(H.cA(a1),H.cA(u))
if(typeof a1!=="number")return a1.m()
if(typeof u!=="number")return u.m()
o=Math.max(a1+a3.f,u+a2.f)
a2=a0.a
n=a2.ai(t,r,p)
m=a2.ai(t+(s-t),r+(q-r),p+(o-p))
l=m.a+m.d
k=m.c+m.e
C.a.sn(a0.f,0)
C.a.sn(a0.r,0)
C.a.sn(a0.x,0)
a1=m.b
j=n
while(!0){if(!(j.a+j.d<=l))break
i=j
while(!0){if(!(i.b<=a1))break
h=i
while(!0){if(!(h.c+h.e<=k))break
a2=h.gM(h)
if(a2>=100&&a2<=117){g=$.bD()
f=h.gae(h)
a2=f.gM(f)
a2=a2>=100&&a2<=117
if(a2){a2=$.b4()
g=new V.a5((g.a|a2.a)>>>0)}f=h.gag(h)
a2=f.gM(f)
a2=a2>=100&&a2<=117
if(a2){a2=$.b5()
g=new V.a5((g.a|a2.a)>>>0)}a2=h.a
u=h.b
e=h.c
d=h.d
c=h.e
b=h.f
f=new B.az(a2,u-1,e,d,c,b)
a=f.gM(f)
a=a>=100&&a<=117
if(a){a=$.bE()
g=new V.a5((g.a|a.a)>>>0)}f=new B.az(a2,u+1,e,d,c,b)
a2=f.gM(f)
a2=a2>=100&&a2<=117
if(a2){a2=$.b6()
g=new V.a5((g.a|a2.a)>>>0)}f=h.gaQ(h)
a2=f.gM(f)
a2=a2>=100&&a2<=117
if(a2){a2=$.bF()
g=new V.a5((g.a|a2.a)>>>0)}f=h.gaF()
a2=f.gM(f)
a2=a2>=100&&a2<=117
if(a2){a2=$.bG()
g=new V.a5((g.a|a2.a)>>>0)}a2=$.nb()
if(!J.V(g,a2)){C.a.h(a0.f,h.gcw())
u=a0.r
g.toString
e=$.lK().a
d=g.a
C.a.h(u,new V.a5((a2.a&e&~d)>>>0))
C.a.h(a0.x,!1)}}h=h.gaF()}i=new B.az(i.a,i.b+1,i.c,i.d,i.e,i.f)}j=j.gag(j)}},
iZ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.d.cM())return!1
u=e.c
t=e.b
s=u.bX(0,new V.H(t.a,t.b,t.c))
r=$.bD()
for(q=0,p=-1,o=0;u=e.f,o<u.length;++o){t=e.x
if(o>=t.length)return H.e(t,o)
if(!t[o]){n=u[o]
u=e.r
if(o>=u.length)return H.e(u,o)
m=u[o]
l=s.jA(n,e.d,m)
if(l!=null)if(J.V(r,$.bD())||q>l.a){r=l.b
q=l.a
p=o}}}u=J.S(r)
if(u.q(r,$.bD()))return!1
C.a.j(e.x,p,!0)
k=e.d.k(0,q)
j=e.d.k(0,1-q)
if(u.q(r,$.b5())||u.q(r,$.b4())){u=e.b
t=u.a
i=k.a
if(typeof t!=="number")return t.m()
if(typeof i!=="number")return H.d(i)
h=u.b
g=k.b
if(typeof h!=="number")return h.m()
if(typeof g!=="number")return H.d(g)
u=u.c
f=k.c
if(typeof u!=="number")return u.m()
if(typeof f!=="number")return H.d(f)
e.b=new V.u(t+i,h+g,u+f)
e.d=new V.H(0,j.b,j.c)}else if(u.q(r,$.b6())||u.q(r,$.bE())){u=e.b
t=u.b
i=k.b
if(typeof t!=="number")return t.m()
if(typeof i!=="number")return H.d(i)
h=u.a
g=k.a
if(typeof h!=="number")return h.m()
if(typeof g!=="number")return H.d(g)
u=u.c
f=k.c
if(typeof u!=="number")return u.m()
if(typeof f!=="number")return H.d(f)
e.b=new V.u(h+g,t+i,u+f)
e.d=new V.H(j.a,0,j.c)}else if(u.q(r,$.bG())||u.q(r,$.bF())){u=e.b
t=u.c
i=k.c
if(typeof t!=="number")return t.m()
if(typeof i!=="number")return H.d(i)
h=u.a
g=k.a
if(typeof h!=="number")return h.m()
if(typeof g!=="number")return H.d(g)
u=u.b
f=k.b
if(typeof u!=="number")return u.m()
if(typeof f!=="number")return H.d(f)
e.b=new V.u(h+g,u+f,t+i)
e.d=new V.H(j.a,j.b,0)}e.e=new V.a5((e.e.a|r.a)>>>0)
return!0},
i:function(a){return"Collider("+H.m(this.b)+", "+H.m(this.e)+")"},
sfU:function(a){this.f=H.h(a,"$ib",[V.bY],"$ab")},
sfT:function(a){this.r=H.h(a,"$ib",[V.a5],"$ab")},
shj:function(a){this.x=H.h(a,"$ib",[P.a4],"$ab")}}
B.kR.prototype={
$1:function(a){var u
H.i(a,"$ibm")
u=this.b
P.lE(C.e.eS(this.a.gjR(),2)+" fps, "+("chunks: "+u.d.length+", graveyard: "+u.c.length+", player: "+H.m(u.gcl())))},
$S:49}
B.a_.prototype={}
B.hQ.prototype={
F:function(a){var u="./textures/"+a+".png"
return this.a.f.jW(u,!0,!1,!1)},
I:function(a,b){var u,t=O.m_()
t.dx.h(0,this.e)
u=t.r
u.sbs(0,new V.a9(0.8,0.8,0.8))
u=t.x
u.sbs(0,new V.a9(0.4,0.4,0.4))
t.r.sby(a)
t.x.sby(a)
t.db.sby(a)
if(b){u=t.z
u.sbs(0,new V.a9(0.5,0.5,0.5))
u.bK(new A.ah(!0,u.c.b,!1))
u.dP(3)}C.a.h(this.d,t)
return this.d.length-1},
dc:function(a){var u=this.F(a),t=O.m_()
t.f.sby(u)
t.db.sby(u)
return t},
sh2:function(a){this.b=H.h(a,"$ix",[P.j,B.a_],"$ax")},
shr:function(a){this.c=H.h(a,"$ix",[P.j,[P.b,P.j]],"$ax")},
shs:function(a){this.d=H.h(a,"$ib",[O.cj],"$ab")}}
B.e1.prototype={
i:function(a){var u=this
return"NeighborBlockInfo("+u.a.i(0)+", "+H.m(u.b)+", "+u.c.i(0)+", "+u.d+")"}}
B.e4.prototype={
fd:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null
a0.r=!0
u=a0.d
u.ch=u.Q=0.4
u=X.bf()
u.a4(32)
u.ad(a0)
u.gaq().h(0,b.gi1())
b.d=!0
u=X.bf()
u.a4(9)
u.dX(9,!0)
u.ad(a0)
u.gaq().h(0,b.ghI())
u=X.bf()
u.a4(69)
u.a4(81)
u.ad(a0)
u.gaq().h(0,b.ghG())
u=a0.d
t=u.b
u=t==null?u.b=D.O():t
u.h(0,b.ghS())
u=X.bf()
u.a4(79)
u.ad(a0)
u.gaq().h(0,b.giq())
u=new U.es()
t=X.bf()
t.a4(39)
t.a4(68)
s=u.gi3()
t.gaq().h(0,s)
u.a=t
t=X.bf()
t.a4(37)
t.a4(65)
t.gaq().h(0,s)
u.b=t
t=X.bf()
t.a4(81)
t.gaq().h(0,s)
u.c=t
t=X.bf()
t.a4(69)
t.gaq().h(0,s)
u.d=t
t=X.bf()
t.a4(40)
t.a4(83)
t.gaq().h(0,s)
u.e=t
t=X.bf()
t.a4(38)
t.a4(87)
t.gaq().h(0,s)
u.f=t
t=U.dE()
t.saG(30)
t.saT(0)
s=u.gaD()
t.gt().h(0,s)
u.r=t
t=U.dE()
t.saG(30)
t.saT(0)
t.gt().h(0,s)
u.x=t
t=U.dE()
t.saG(30)
t.saT(0)
t.gt().h(0,s)
u.y=t
u.Q=u.z=null
u.ch=60
u.cx=15
u.cy=0
u.dx=u.db=null
u.sdl(a)
u.a.ad(a0)
u.b.ad(a0)
u.c.ad(a0)
u.d.ad(a0)
u.e.ad(a0)
u.f.ad(a0)
u.r.saG(6)
u.x.saG(60)
t=u.x
s=t.r
if(!(Math.abs(s- -100)<$.C().a)){t.r=-100
s=new D.L("acceleration",s,-100,[P.A])
s.b=!0
t.B(s)}u.y.saG(6)
u.sdl(H.o(b.ghh(),{func:1,ret:V.u,args:[V.u,V.u]}))
b.a=u
u=new U.er()
t=U.dE()
t.scX(0,!0)
t.scO(6.283185307179586)
t.scP(0)
t.sX(0,0)
t.saG(100)
t.sR(0)
t.saT(0.5)
u.b=t
s=u.gaD()
t.gt().h(0,s)
t=U.dE()
t.scX(0,!0)
t.scO(6.283185307179586)
t.scP(0)
t.sX(0,0)
t.saG(100)
t.sR(0)
t.saT(0.5)
u.c=t
t.gt().h(0,s)
u.d=null
u.r=u.f=u.e=!1
u.y=u.x=2.5
u.Q=4
u.ch=u.cx=!1
u.db=u.cy=0
u.dx=null
u.dy=0
u.fx=u.fr=null
r=new X.bw(!1,!1,!1)
q=u.d
u.d=r
t=new D.L("modifiers",q,r,[X.bw])
t.b=!0
u.B(t)
t=u.f
if(t!==!1){u.f=!1
t=new D.L("invertX",t,!1,[P.a4])
t.b=!0
u.B(t)}t=u.r
if(t!==!1){u.r=!1
t=new D.L("invertY",t,!1,[P.a4])
t.b=!0
u.B(t)}u.ad(a0)
u.b.scO(1.5707963267948966)
u.b.scP(-1.5707963267948966)
u.b.saT(1)
u.c.saT(1)
u.b.scX(0,!1)
b.b=u
u.gt().h(0,new B.i8(b))
u=U.aa
t=[u]
s=U.hk(H.c([b.a,b.b],t))
s.gt().h(0,b.gjj())
b.x=s
s=b.b
p=new U.cU()
p.c=V.ck()
p.d=0
if(null!=s){p.a=s
s.gt().h(0,p.gaD())
u=new D.L("mover",a,p.a,[u])
u.b=!0
p.B(u)}b.y=U.hk(H.c([p,b.a,U.bL(V.ld(1,-1,1,1))],t))
u=U.bL(V.dY(-0.5,-0.5,-0.5))
s=new U.eb()
s.r=s.f=s.e=s.d=s.c=s.b=s.a=0
s.seY(-0.1)
s.seH(0,0)
s.seP(0)
p=s.d
if(!(Math.abs(p-0)<$.C().a)){s.d=0
p=new D.L("deltaYaw",p,0,[P.A])
p.b=!0
s.B(p)}p=s.e
if(!(Math.abs(p-0.1)<$.C().a)){s.e=0.1
p=new D.L("deltaPitch",p,0.1,[P.A])
p.b=!0
s.B(p)}p=s.f
if(!(Math.abs(p-0)<$.C().a)){s.f=0
p=new D.L("deltaRoll",p,0,[P.A])
p.b=!0
s.B(p)}b.z=U.hk(H.c([u,s,U.bL(V.dY(0.5,0.5,0.5)),U.bL(V.ld(0.04,-0.04,0.04,1)),U.bL(V.dY(-0.15,0.06,-0.2)),b.y],t))
u=U.hk(H.c([U.bL(V.ld(0.005,-0.005,0.005,1)),U.bL(V.dY(0,0,-0.2)),b.y],t))
b.Q=u
t=$.ac()
s=$.ag()
s=new Z.ae(t.a|s.a)
o=new F.ed()
t=new F.jy(o)
t.b=!1
p=F.bp
t.scs(H.c([],[p]))
o.a=t
t=new F.iv()
t.sbo(H.c([],[F.cm]))
o.b=t
t=new F.iu(o)
t.scd(H.c([],[F.bS]))
o.c=t
t=new F.it(o)
t.sca(H.c([],[F.ad]))
o.d=t
o.e=null
t=o.a
n=new V.H(-1,-1,1)
n=n.v(0,Math.sqrt(n.D(n)))
m=t.bM(new V.bV(1,2,4,6),new V.aP(1,0,0,1),new V.u(-1,-1,0),new V.U(0,1),n,s)
t=o.a
n=new V.H(1,-1,1)
n=n.v(0,Math.sqrt(n.D(n)))
l=t.bM(new V.bV(0,3,4,6),new V.aP(0,0,1,1),new V.u(1,-1,0),new V.U(1,1),n,s)
t=o.a
n=new V.H(1,1,1)
n=n.v(0,Math.sqrt(n.D(n)))
k=t.bM(new V.bV(0,2,5,6),new V.aP(0,1,0,1),new V.u(1,1,0),new V.U(1,0),n,s)
t=o.a
n=V.bz()
j=new V.H(-1,1,1)
j=j.v(0,Math.sqrt(j.D(j)))
i=t.bM(new V.bV(0,2,4,7),new V.aP(1,1,0,1),new V.u(-1,1,0),n,j,s)
o.d.jp(H.c([m,l,k,i],[p]))
o.aS()
t=b.c
s=t.a
b.ch=E.cd(a,u,o,s.r)
b.cx=E.cd(a,b.z,a,a)
u=E.a2
b.sfS(H.c([],[u]))
for(p=s.d,n=p.length,h=0;h<p.length;p.length===n||(0,H.z)(p),++h){g=E.cd(a,a,a,p[h])
j=b.cx.y
f=H.v(j,0)
H.D(g,f)
e=[f]
if(H.G(j.bm(H.c([g],e)))){d=j.a
c=d.length
C.a.h(d,g)
f=H.h(H.c([g],e),"$ik",[f],"$ak")
j=j.c
if(j!=null)j.$2(c,f)}j=b.dx;(j&&C.a).h(j,g)}b.e=0
t=new B.fS(t)
t.e=$.bD()
t.sfU(H.c([],[V.bY]))
t.sfT(H.c([],[V.a5]))
t.shj(H.c([],[P.a4]))
b.r=t
s=E.cd(a,a,a,s.f)
b.cy=s
b.f=null
b.db=E.cd(H.c([b.ch,b.cx,s],[u]),a,a,a)
b.dU()},
cZ:function(){var u=this.c.aV(C.i.aA(0.5),C.i.aA(0.5)),t=u==null?null:u.kx(C.i.aA(0.5),C.i.aA(0.5))
if(t==null)t=0
this.a.sX(0,new V.u(0.5,t+10,0.5))
this.a.sR(V.df())},
ir:function(a){H.i(a,"$iw")
this.cZ()},
i2:function(a){H.i(a,"$iw")
if(H.G(this.d))this.a.x.sR(30)},
hJ:function(a){var u=this,t=H.G(H.t(H.i(a,"$iw"),"$ibu").c.b.c),s=u.e
if(t){if(typeof s!=="number")return s.p()
t=s-1
u.e=t
if(t<0)u.e=19}else{if(typeof s!=="number")return s.m()
t=s+1
u.e=t
if(t>=20)u.e=0}u.dU()},
hH:function(a){this.di(H.t(H.i(a,"$iw"),"$ibu").c.a===69)},
hT:function(a){this.di(H.t(H.i(a,"$iw"),"$ibx").x.a===2)},
di:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.f
if((i==null?null:i.a)==null)return
u=i.a
if(a){t=C.a.l($.lR,j.e)
i=j.f.a
s=i.gM(i)
r=j.f.b
i=$.b6()
q=r.a
if((q&i.a)>>>0!==0)if(s>=200&&s<=205)return
if(t>=200&&t<=205){i=u.gdY()
i=i.gM(i)
if(!(i>=100&&i<=117))return}if(t===106){i=$.b5()
p=$.b4()
if((q&(i.a|p.a))>>>0!==0)t=108
else{i=$.bG()
p=$.bF()
if((q&(i.a|p.a))>>>0!==0)t=107}}else if(t===115){i=$.b5()
p=$.b4()
if((q&(i.a|p.a))>>>0!==0)t=117
else{i=$.bG()
p=$.bF()
if((q&(i.a|p.a))>>>0!==0)t=116}}i=5&q
o=i!==0?(0|5-i)>>>0:0
i=40&q
if(i!==0)o=(o|40-i)>>>0
i=320&q
u=u.ey(new V.a5(i!==0?(o|320-i)>>>0:o))
i=j.a
i=i.gX(i)
n=$.lH().bX(0,new V.H(i.a,i.b,i.c))
i=u.gcw()
q=n.a
if(typeof q!=="number")return q.m()
p=i.a
if(typeof p!=="number")return p.m()
m=$.C().a
if(p-m<q+n.d&&q-m<p+i.d){q=n.b
if(typeof q!=="number")return q.m()
p=i.b
if(typeof p!=="number")return p.m()
if(p-m<q+n.e&&q-m<p+i.e){q=n.c
if(typeof q!=="number")return q.m()
p=i.c
if(typeof p!=="number")return p.m()
i=p-m<q+n.f&&q-m<p+i.f}else i=!1}else i=!1
if(i)return}else t=0
l=u.f
if(l!=null){u.sM(0,t)
if(t===0){k=u.gdW()
i=k.gM(k)
if(i>=200&&i<=205)k.sM(0,0)}l.r=!0
i=u.a
if(i<=0){q=l.gae(l)
if(q!=null)q.r=!0}q=u.c
if(q<=0){p=l.gaQ(l)
if(p!=null)p.r=!0}if(i>=15){i=l.gag(l)
if(i!=null)i.r=!0}if(q>=15){i=l.gaF()
if(i!=null)i.r=!0}}},
hi:function(a,b){var u,t=this,s=b.p(0,a),r=new V.H(s.a,s.b,s.c)
if(r.D(r)<100){t.r.jz($.lH(),a,r)
s=t.r.e
u=$.b6()
s=s.a
u=u.a
u=(s&u)>>>0===u
t.d=u
if(u)t.a.x.sR(0)}s=t.r.b
return s==null?b:s},
jl:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a==null
if((h?i:a.a)!=null){u=a.a
u=u.gM(u)===0}else u=!1
if(u)return!1
t=h?i:a.a
if(t!=null){a.d
h=t.gM(t)===0||t.gM(t)===100}else h=!1
if(h)a=i
j.f=a
if(a==null)j.cy.b=!1
else{h=$.ac()
u=$.ag()
s=B.lf(i,new Z.ae(h.a|u.a))
r=new V.u(t.d+t.a+0.5,t.b+0.5,t.e+t.c+0.5)
q=s.a1(0)
u=$.ft()
h=$.fy()
p=$.fz()
o=$.fu()
s.a5(q,r,u,h,p,o,$.fA(),!0,1.1)
n=$.fw()
m=$.fr()
l=$.fs()
k=$.fx()
s.a5(q,r,n,m,l,k,$.fv(),!0,1.1)
s.a5(q,r,u,m,n,h,$.lG(),!0,1.1)
s.a5(q,r,p,k,l,o,$.lI(),!0,1.1)
s.a5(q,r,h,n,k,p,$.kV(),!0,1.1)
s.a5(q,r,o,l,m,u,$.lF(),!0,1.1)
s.cI(0,H.c([j.cy],[E.a2]))
j.cy.b=!0}return!0},
jk:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.i(a,"$iw")
u=this.y.f
t=V.me(u.V(V.e6()),u.au(new V.H(0,0,-6)))
s=t.a
r=t.d
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.d(r)
q=t.b
p=t.e
if(typeof q!=="number")return q.m()
if(typeof p!=="number")return H.d(p)
o=t.c
n=t.f
if(typeof o!=="number")return o.m()
if(typeof n!=="number")return H.d(n)
m=V.me(new V.u(s+r,q+p,o+n),new V.H(r,p,n).O(0))
n=this.c
l=new B.e1(n.ai(s,q,o),$.kW(),t,0)
for(k=0;!this.jl(l);){l=n.f1(l.a,t,m,k);++k}},
dU:function(){var u=B.lf(this.c.a,null)
u.d9(null,0,0,0,C.a.l($.lR,this.e),!1,1)
u.cI(0,this.dx)},
sfS:function(a){this.dx=H.h(a,"$ib",[E.a2],"$ab")}}
B.i8.prototype={
$1:function(a){var u,t,s
H.i(a,"$iw")
u=this.a
t=u.a
u=V.m0(-u.b.c.d)
if(!J.V(t.z,u)){s=t.z
t.z=u
t.Q=u.bv(0)
u=new D.L("velocityRotation",s,t.z,[V.aG])
u.b=!0
t.B(u)}},
$S:9}
B.ic.prototype={
bR:function(a){var u=this
u.c=a
u.iF()
C.V.el(u.c.d,0,12288,0)
u.jh()
u.fL()
u.fJ()
u.jf()
u.fF()
u.iz()
u.fC()
u.jd()
a.cJ()},
ap:function(a,b,c){var u,t,s,r,q,p,o,n=this.a,m=this.c,l=(a+m.a)*c
m=(b+m.b)*c
u=new B.aV(l,m)
t=u.m(0,$.na().k(0,l+m))
m=Math.floor(t.a)
l=Math.floor(t.b)
s=new B.aV(m,l)
r=s.m(0,$.lJ().k(0,m+l))
q=t.p(0,s)
u=new B.ha(n.a,s,u.p(0,r),q)
u.e=0
u.ao(1,0)
u.ao(0,1)
n=q.a
l=q.b
p=n+l
if(p<=1){o=1-p
if(o>n||o>l)if(n>l)u.ao(1,-1)
else u.ao(-1,1)
else u.ao(1,1)
u.ao(0,0)}else{o=2-p
if(o<n||o<l)if(n>l)u.ao(2,0)
else u.ao(0,2)
else u.ao(0,0)
u.ao(1,1)}return u.e/47*0.5+0.5},
cq:function(a,b){var u=this.b,t=(a+3)*22+(b+3)
if(t<0||t>=484)return H.e(u,t)
return u[t]},
iF:function(){var u,t,s,r,q,p=this
for(u=0,t=-3;t<19;++t)for(s=-3;s<19;++s){r=C.e.aA(Math.pow(0.6*p.ap(t,s,0.001)+0.3*p.ap(t,s,0.01)+0.1*p.ap(t,s,0.1),2)*48)
if(r>=48)r=47
q=p.b
if(u<0||u>=484)return H.e(q,u)
q[u]=r;++u}},
jh:function(){var u,t
for(u=0;u<16;++u)for(t=0;t<16;++t)this.ji(u,t)},
ji:function(a,b){var u,t,s,r,q=this.cq(a,b)
for(u=q-2,t=q<8,s=0;s<=q;++s){if(t)r=u<=s?104:103
else if(q===s)r=102
else r=u<=s?101:103
this.c.W(a,s,b,r)}},
fL:function(){var u,t
for(u=0;u<16;++u)for(t=0;t<16;++t)this.fM(u,t)},
fM:function(a,b){var u,t=this.c.cV(a,b,0)
if(t<8)for(u=8;u>t;--u)this.c.W(a,u,b,1)},
fJ:function(){var u,t
for(u=-1;u<=16;++u)for(t=-1;t<=16;++t)this.fK(u,t)},
fK:function(a,b){var u,t,s,r,q,p
if(this.cq(a,b)<8)for(u=10;u>6;--u)for(t=-1;t<=1;++t)for(s=a+t,r=-1;r<=1;++r){q=b+r
p=this.c.ai(s,u,q)
if(p===102||p===105)this.c.W(s,u,q,104)}},
jf:function(){var u,t
for(u=-3;u<19;++u)for(t=-3;t<19;++t)if(this.ap(u,t,1.5)<0.1)this.fG(u,t)},
fG:function(a,b){var u,t,s=this,r=s.c,q=a+r.a
if(q>=-30)if(q<30){r=b+r.b
r=r>=-30&&r<30}else r=!1
else r=!1
if(r)return
u=s.cq(a,b)
if(u<10)return
for(t=1;t<8;++t)s.c.W(a,u+t,b,106)
s.fH(a,b)
s.fI(a,u+8,b)},
fH:function(a,b){var u,t,s,r,q,p
for(u=-3;u<=3;++u)for(t=u*u,s=a+u,r=-3;r<=3;++r)if(t+r*r<=10)for(q=b+r,p=47;p>=0;--p)if(this.c.ai(s,p,q)===102){this.c.W(s,p,q,105)
break}},
fI:function(a,b,c){var u,t,s,r,q,p,o,n
for(u=-3;u<=3;++u)for(t=u*u,s=a+u,r=-3;r<=3;++r)for(q=t+r*r,p=b+r,o=-3;o<=3;++o)if(q+o*o<=12){n=c+o
if(this.c.ai(s,p,n)===0)this.c.W(s,p,n,114)}},
iz:function(){var u,t,s,r,q,p=this
for(u=0;u<16;++u)for(t=u-400,s=u+400,r=0;r<16;++r)if(p.ap(u,r,12.5)<0.1)p.b7(u,r,204)
else if(p.ap(s,r,12.5)<0.1)p.b7(u,r,203)
else{q=r+400
if(p.ap(u,q,12.5)<0.1)p.b7(u,r,202)
else if(p.ap(s,q,12.5)<0.15)p.b7(u,r,200)
else if(p.ap(t,r,12.5)<0.1)p.b7(u,r,201)
else if(p.ap(u,r-400,12.5)<0.08)p.b7(u,r,205)}},
b7:function(a,b,c){var u=this.c.cV(a,b,0),t=this.c.ai(a,u,b)
if(t!==102&&t!==105)return
this.c.W(a,u+1,b,c)},
fF:function(){var u,t,s,r,q,p,o,n,m,l,k=this.c,j=k.a
if(j+16>=-30)if(j<=30){k=k.b
k=k+16<-30||k>30}else k=!0
else k=!0
if(k)return
u=new B.ie(this)
for(t=30;t>=0;t-=2){s=30-t+3
for(r=-s,k=t-1,q=r;q<=s;++q)for(p=r;p<=s;++p){u.$4(q,t,p,111)
u.$4(q,k,p,111)}for(j=r-1,o=r-2,n=s+1,m=s+2,l=-2;l<=2;++l){u.$4(j,t,l,109)
u.$4(j,k,l,109)
u.$4(o,k,l,109)
u.$4(n,t,l,109)
u.$4(n,k,l,109)
u.$4(m,k,l,109)
u.$4(l,t,j,109)
u.$4(l,k,j,109)
u.$4(l,k,o,109)
u.$4(l,t,n,109)
u.$4(l,k,n,109)
u.$4(l,k,m,109)}k=t+1
u.$4(j,k,2,109)
u.$4(o,t,2,109)
u.$4(j,k,-2,109)
u.$4(o,t,-2,109)
u.$4(n,k,2,109)
u.$4(m,t,2,109)
u.$4(n,k,-2,109)
u.$4(m,t,-2,109)
u.$4(2,k,j,109)
u.$4(2,t,o,109)
u.$4(-2,k,j,109)
u.$4(-2,t,o,109)
u.$4(2,k,n,109)
u.$4(2,t,m,109)
u.$4(-2,k,n,109)
u.$4(-2,t,m,109)}},
fC:function(){var u,t=this.c,s=t.a
if(s+16>=-36)if(s<=12){t=t.b
t=t+16<-28||t>-22}else t=!0
else t=!0
if(t)return
u=new B.id(this,-12,40,-25)
t=[P.j]
u.$5(110,0,0,H.c([0,1,2,3,4,4,3,2,4,4,3,2,1,0],t),H.c([1,0,0,0,1,2,3,3,4,5,6,6,6,5],t))
u.$5(110,6,0,H.c([0,1,2,3,4,4,4,3,2,1,0,0,0,0,0,0],t),H.c([0,0,0,1,2,3,4,5,6,6,6,5,4,3,2,1],t))
u.$5(113,12,0,H.c([0,0,0,0,0,1,2,1,2,3,3,3,3,3],t),H.c([2,3,4,5,6,1,1,4,4,2,3,4,5,6],t))
u.$5(113,17,0,H.c([0,0,0,0,0,0,1,2,1,2,3,3,3,3],t),H.c([1,2,3,4,5,6,1,1,4,4,2,3,5,6],t))
u.$5(113,22,0,H.c([0,2,1,1,1,1,1,1],t),H.c([1,1,1,2,3,4,5,6],t))},
jd:function(){var u,t,s,r,q=this.c,p=q.a
if(p+16>=-3)if(p<=3){q=q.b
q=q+16<-3||q>3}else q=!0
else q=!0
if(q)return
u=new B.ig(this)
for(t=-3;t<=3;++t)for(s=0;s<=7;++s)for(q=2+s,r=-3;r<=3;++r)u.$4(t,q,r,0)
u.$4(0,2,0,113)
u.$4(0,3,0,112)
u.$4(0,4,0,112)
u.$4(0,5,0,112)
u.$4(0,6,0,112)},
$ilW:1}
B.ie.prototype={
$4:function(a,b,c,d){var u=this.a.c
u.W(a-u.a,b,c-u.b,d)}}
B.id.prototype={
$5:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m=this,l=[P.j]
H.h(d,"$ib",l,"$ab")
H.h(e,"$ib",l,"$ab")
for(u=d.length-1,l=m.a,t=m.b+b,s=m.c+c,r=m.d;u>=0;--u){q=l.c
if(u>=d.length)return H.e(d,u)
p=d[u]
if(typeof p!=="number")return H.d(p)
o=q.a
if(u>=e.length)return H.e(e,u)
n=e[u]
if(typeof n!=="number")return H.d(n)
q.W(t+p-o,s-n,r-q.b,a)}}}
B.ig.prototype={
$4:function(a,b,c,d){var u=this.a.c
u.W(a-u.a,b,c-u.b,d)}}
B.iw.prototype={
jx:function(a){var u,t,s
for(u=15;u>=0;--u)for(t=47;t>=-1;--t)for(s=15;s>=0;--s)this.d9(a,u,t,s,a.bZ(u,t,s),!1,1)},
cI:function(a,b){var u,t,s,r
H.h(b,"$ib",[E.a2],"$ab")
for(u=b.length-1;u>=0;--u){if(u>=b.length)return H.e(b,u)
t=b[u]
s=this.c
if(u>=s.length)return H.e(s,u)
r=s[u]
if(r!=null){t.sd_(r)
t.b=r.f.length!==0}else{t.sd_(null)
t.b=!1}}this.sdQ(null)},
a1:function(a){var u=this.c,t=(u&&C.a).l(u,a)
if(t==null){u=this.b
t=new F.d3(u)
t.b=u.ge3(u)
t.c=u.gbk(u)
t.d=0
t.scs(H.c([],[P.A]))
u=[P.j]
t.sbo(H.c([],u))
t.scd(H.c([],u))
t.sca(H.c([],u))
t.Q=t.z=null
u=this.c;(u&&C.a).j(u,a,t)}return t},
d9:function(a,b,c,d,e,f,g){var u,t,s,r=this,q=new V.u(b,c,d)
if(a!=null){b+=a.a
d+=a.b}u=new V.u(b+0.5,c+0.5,d+0.5)
if(e===0)return
else if(e===1)r.da(a,u,q,e,!1,g)
else if(e>=200&&e<=205)if(e===201){t=r.a.c.l(0,201)
s=J.bC(t)
r.bF(r.a1(s.l(t,0)),u,0.3141592653589793)
r.bF(r.a1(s.l(t,0)),u,1.7278759594743864)
r.bF(r.a1(s.l(t,0)),u,3.6128315516282616)
r.bF(r.a1(s.l(t,0)),u,5.026548245743669)}else if(e===205)r.fE(u)
else{t=r.a.c.l(0,e)
s=J.bC(t)
r.df(r.a1(s.l(t,0)),u,0.39269908169872414,!0)
r.df(r.a1(s.l(t,0)),u,1.9634954084936207,!0)}else if(e>=100&&e<=117)r.da(a,u,q,e,!1,g)},
ba:function(a,b,c,d){var u=null,t=$.ac(),s=$.ag()
return F.cv(u,u,u,a,b,new V.U(c,d),u,new Z.ae(t.a|s.a|$.as().a),0)},
a5:function(a,b,c,d,e,f,g,h,i){var u=this,t=a.br(H.c([u.ba(b.m(0,c.k(0,i)),g,0,0),u.ba(b.m(0,d.k(0,i)),g,0,1),u.ba(b.m(0,e.k(0,i)),g,1,1),u.ba(b.m(0,f.k(0,i)),g,1,0)],[F.bp])),s=t+1,r=t+2,q=t+3,p=[P.j]
a.bq(H.c([t,s,r,q],p))
if(h)a.bq(H.c([r,s,t,q],p))},
da:function(a,b,c,d,e,f){var u=this,t=u.a.b.l(0,d)
if(u.b6(a,d,c,0,1,0))u.a5(u.a1(t.a),b,$.ft(),$.fy(),$.fz(),$.fu(),$.fA(),!1,f)
if(u.b6(a,d,c,0,-1,0))u.a5(u.a1(t.b),b,$.fw(),$.fr(),$.fs(),$.fx(),$.fv(),!1,f)
if(u.b6(a,d,c,-1,0,0))u.a5(u.a1(t.c),b,$.ft(),$.fr(),$.fw(),$.fy(),$.lG(),!1,f)
if(u.b6(a,d,c,1,0,0))u.a5(u.a1(t.d),b,$.fz(),$.fx(),$.fs(),$.fu(),$.lI(),!1,f)
if(u.b6(a,d,c,0,0,1))u.a5(u.a1(t.e),b,$.fy(),$.fw(),$.fx(),$.fz(),$.kV(),!1,f)
if(u.b6(a,d,c,0,0,-1))u.a5(u.a1(t.f),b,$.fu(),$.fs(),$.fr(),$.ft(),$.lF(),!1,f)},
b6:function(a,b,c,d,e,f){if(a==null)return!0
e+=J.l0(c.b)
if(e<0)return!1
if(e>=48)return!0
return B.nA(b,a.bZ(d+J.l0(c.a),e,f+J.l0(c.c)))},
df:function(a,b,c,d){var u=Math.cos(c)*0.5,t=Math.sin(c)*0.5,s=-t,r=-u
this.a5(a,b,new V.u(u,0,s),new V.u(u,-0.5,s),new V.u(r,-0.5,t),new V.u(r,0,t),new V.H(t,0,u),!0,1)},
bF:function(a,b,c){var u=V.m0(c)
this.a5(a,b,u.V(new V.u(0.4,-0.1,-0.4)),u.V(new V.u(0,-0.5,0)),u.V(new V.u(0.4,-0.1,0.4)),u.V(new V.u(0.8,0,0)),$.fA(),!0,1)},
fE:function(b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.a.c.l(0,205),b0=J.bC(a9),b1=a7.a1(b0.l(a9,0)),b2=a7.a1(b0.l(a9,1)),b3=a7.a1(b0.l(a9,2))
a9=[F.bp]
u=H.c([],a9)
t=H.c([],a9)
for(b0=b4.a,s=b4.b,r=b4.c,q=0;q<=2;q+=0.25){p=3.141592653589793*q
o=Math.cos(p)
n=Math.sin(p)
m=new V.aG(o,0,-n,0,1,0,n,0,o)
p=m.V(new V.u(0.07,-0.1,0))
l=p.a
if(typeof b0!=="number")return b0.m()
if(typeof l!=="number")return H.d(l)
k=p.b
if(typeof s!=="number")return s.m()
if(typeof k!=="number")return H.d(k)
p=p.c
if(typeof r!=="number")return r.m()
if(typeof p!=="number")return H.d(p)
j=$.kV()
i=m.au(j)
h=Math.abs(q-1)
g=$.ac()
f=$.ag()
C.a.h(u,F.cv(a8,a8,a8,new V.u(b0+l,s+k,r+p),i,new V.U(h,0),a8,new Z.ae(g.a|f.a|$.as().a),0))
f=m.V(new V.u(0.1,-0.5,0))
g=f.a
if(typeof g!=="number")return H.d(g)
i=f.b
if(typeof i!=="number")return H.d(i)
f=f.c
if(typeof f!=="number")return H.d(f)
j=m.au(j)
p=$.ac()
k=$.ag()
C.a.h(u,F.cv(a8,a8,a8,new V.u(b0+g,s+i,r+f),j,new V.U(h,1),a8,new Z.ae(p.a|k.a|$.as().a),0))
e=m.V(new V.u(0.1,-0.5,0))
d=m.V(new V.u(0.1,0,0))
k=e.a
if(typeof k!=="number")return H.d(k)
p=e.b
if(typeof p!=="number")return H.d(p)
h=e.c
if(typeof h!=="number")return H.d(h)
j=$.fv()
f=d.a
if(typeof f!=="number")return f.m()
i=d.c
if(typeof i!=="number")return i.m()
g=$.ac()
l=$.ag()
C.a.h(t,F.cv(a8,a8,a8,new V.u(b0+k,s+p,r+h),j,new V.U(f+0.5,i+0.5),a8,new Z.ae(g.a|l.a|$.as().a),0))}c=b3.br(u)
b=b2.br(t)
p=P.j
b3.jq(P.dV(u.length,new B.ix(c),p))
b2.bq(P.dV(t.length,new B.iy(b),p))
a=H.c([],a9)
a0=H.c([],a9)
C.a.h(a,a7.ba(b4.m(0,new V.u(0,0.05,0)),$.fA(),0.5,0.5))
C.a.h(a0,a7.ba(b4.m(0,new V.u(0,-0.1,0)),$.fv(),0.5,0.5))
for(q=0;q<=1;q+=0.1){a9=-6.283185307179586*q
o=Math.cos(a9)
n=Math.sin(a9)
a1=new V.aG(o,0,-n,0,1,0,n,0,o)
e=a1.V(new V.u(0.4,-0.15,0))
d=a1.V(new V.u(0.5,0,0))
a9=e.a
if(typeof b0!=="number")return b0.m()
if(typeof a9!=="number")return H.d(a9)
l=e.b
if(typeof s!=="number")return s.m()
if(typeof l!=="number")return H.d(l)
k=e.c
if(typeof r!=="number")return r.m()
if(typeof k!=="number")return H.d(k)
j=d.a
if(typeof j!=="number")return j.m()
i=d.c
if(typeof i!=="number")return i.m()
h=$.ac()
g=$.ag()
C.a.h(a,F.cv(a8,a8,a8,new V.u(b0+a9,s+l,r+k),a8,new V.U(j+0.5,i+0.5),a8,new Z.ae(h.a|g.a|$.as().a),0))
g=6.283185307179586*q
o=Math.cos(g)
n=Math.sin(g)
a2=new V.aG(o,0,-n,0,1,0,n,0,o)
a3=a2.V(new V.u(0.4,-0.15,0))
a4=a2.V(new V.u(0.5,0,0))
g=a3.a
if(typeof g!=="number")return H.d(g)
h=a3.b
if(typeof h!=="number")return H.d(h)
i=a3.c
if(typeof i!=="number")return H.d(i)
j=a4.a
if(typeof j!=="number")return j.m()
k=a4.c
if(typeof k!=="number")return k.m()
l=$.ac()
a9=$.ag()
C.a.h(a0,F.cv(a8,a8,a8,new V.u(b0+g,s+h,r+i),a8,new V.U(j+0.5,k+0.5),a8,new Z.ae(l.a|a9.a|$.as().a),0))}a5=b1.br(a)
a6=b2.br(a0)
b1.bq(P.dV(a.length,new B.iz(a5),p))
b2.bq(P.dV(a0.length,new B.iA(a6),p))},
sdQ:function(a){this.c=H.h(a,"$ib",[F.d3],"$ab")}}
B.ix.prototype={
$1:function(a){return this.a+a},
$S:5}
B.iy.prototype={
$1:function(a){return this.a+a},
$S:5}
B.iz.prototype={
$1:function(a){return this.a+a},
$S:5}
B.iA.prototype={
$1:function(a){return this.a+a},
$S:5}
B.iS.prototype={
bR:function(a){var u=this
u.a=a
u.h3()
if(u.ax(-2,1))u.j_()
if(u.ax(-1,1)){u.a3(5,9,3,7,2,11)
u.dg(6,10,4,5,1,9,1)}if(u.ax(0,1)){u.a3(2,10,6,12,10,1)
u.a3(6,10,2,1,10,12)
u.a3(2,10,10,12,10,1)
u.a3(10,10,2,1,10,12)}if(u.ax(1,1))u.iA()
if(u.ax(1,0))u.iE()
if(u.ax(1,-1))u.iy()
if(u.ax(-2,0))u.jg()
if(u.ax(-2,-1))u.hz()
if(u.ax(-2,-2))u.iH()
a.cJ()},
h3:function(){var u,t,s,r,q,p,o,n=this
for(u=0;u<16;++u)for(t=u===1,s=u!==0,r=0;r<16;++r){for(q=0;q<8;++q)n.a.W(u,q,r,103)
for(q=8;q<9;++q)n.a.W(u,q,r,101)
if(!s||r===0)n.a.W(u,9,r,113)
else{p=t&&r===1
o=n.a
if(p)o.W(u,9,r,110)
else o.W(u,9,r,102)}}},
j_:function(){var u,t,s,r,q,p,o
for(u=-6;u<=6;++u)for(t=u*u,s=8+u,r=-6;r<=6;++r)for(q=t+r*r,p=17+r,o=-6;o<=6;++o)if(q+o*o<=37)this.a.W(s,p,8+o,104)},
iA:function(){var u=new B.iT(this,2,4,10)
u.$3(0,0,0)
u.$3(0,1,1)
u.$3(0,2,2)
u.$3(1,2,3)
u.$3(1,1,4)
u.$3(1,0,5)
u.$3(2,0,0)
u.$3(2,0,2)
u.$3(2,1,1)
u.$3(2,1,3)
u.$3(2,2,2)
u.$3(2,2,4)},
iE:function(){var u=new B.iU(this,2,4,10)
u.$3(0,0,1)
u.$3(0,1,2)
u.$3(0,2,3)
u.$3(0,3,4)
u.$3(1,0,2)
u.$3(1,1,3)
u.$3(1,2,4)
u.$3(1,3,5)
u.$3(2,0,5)
u.$3(2,1,4)
u.$3(2,2,3)
u.$3(2,3,2)
u.$3(3,0,4)
u.$3(3,1,3)
u.$3(3,2,2)
u.$3(3,3,1)},
iy:function(){var u,t,s
for(u=0;u<20;u+=2)for(t=2+u,s=0;s<20;s+=2)this.a3(t,10,2+s,1,8,1)},
iH:function(){var u,t,s
for(u=0;u<6;++u){t=2+u
s=16-t*2+1
this.a3(t,10+u,t,s,1,s)}},
jg:function(){var u,t,s
for(u=0;u<4;++u){t=2+u*3
s=u+2
this.a3(3,10,t,12,s,1)
this.a3(3,10+u+1,t+1,12,1,2)
this.a3(3,10,t+3,12,s,1)}},
hz:function(){var u,t,s
for(u=0;u<6;++u){t=2+u*2
s=u+2
this.a3(3,10,t,12,s,1)
this.a3(3,10+u+1,t+1,12,1,1)
this.a3(3,10,t+2,12,s,1)}},
ax:function(a,b){var u=this.a
return u.a===a*16&&u.b===b*16},
dg:function(a,b,c,d,e,f,g){var u,t,s,r,q
for(u=0;u<d;++u)for(t=a+u,s=0;s<e;++s)for(r=b+s,q=0;q<f;++q)this.a.W(t,r,c+q,g)},
a3:function(a,b,c,d,e,f){return this.dg(a,b,c,d,e,f,109)},
$ilW:1}
B.iT.prototype={
$3:function(a,b,c){var u=this,t=u.b,s=u.c
return u.a.a3(t+s*a,u.d+c,t+s*b,s,1,s)}}
B.iU.prototype={
$3:function(a,b,c){var u=this,t=u.b,s=u.c
return u.a.a3(t+s*a,u.d,t+s*b,1,c,1)}}
B.ev.prototype={
fi:function(a,b){var u,t,s,r,q,p,o=this,n=[B.c9]
o.shg(H.c([],n))
o.sfY(H.c([],n))
o.sc7(H.c([],[E.a2]))
o.r=null
n=o.a
if(n!=null)for(n=n.d,u=n.length,t=0;t<n.length;n.length===u||(0,H.z)(n),++t){s=n[t]
C.a.h(o.e,E.cd(null,null,null,s))}for(r=0;r<140;++r){n=o.c;(n&&C.a).h(n,B.nD(o))}for(n=o.b,q=-32;q<32;q+=16)for(p=-32;p<32;p+=16)n.bR(o.eJ(q,p))},
aV:function(a,b){var u,t,s,r
for(u=this.d,t=u.length,s=0;s<t;++s){r=u[s]
if(r.a===a&&r.b===b)return r}return},
ai:function(a,b,c){var u,t,s,r=J.l_(a),q=J.l_(b),p=J.l_(c),o=r<0?r-16+1:r,n=p<0?p-16+1:p
o=C.d.a6(o,16)*16
n=C.d.a6(n,16)*16
u=this.aV(o,n)
t=r-o
s=p-n
if(t<0)t+=16
return new B.az(t,q,s<0?s+16:s,o,n,u)},
gcl:function(){var u=this.f.y.f.V(V.e6())
return u},
kC:function(a){this.jm(this.gcl())},
f_:function(a){var u=this.gcl()
this.hd(u)
this.iJ(u)},
js:function(a){var u=this.a.x,t=u.b,s=u.e,r=s.length
t=(t+1)%r
if(t<r){u.b=t
u.c=H.i(s[t],"$ibZ")
u=u.f
if(u!=null)u.e5()}},
eJ:function(a,b){var u,t=this.c
if(0>=t.length)return H.e(t,-1)
u=t.pop()
u.a=a
u.b=b
u.x=u.f=!0
u.saK(!1)
C.a.h(this.d,u)
return u},
jH:function(a){var u=C.a.U(this.d,a)
if(u){a.f=!1
a.saK(!1)
a.x=!0
a.r=!1
u=this.c;(u&&C.a).h(u,a)
return!0}return!1},
jm:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.ai(a.a,a.b,a.c),e=f.f
if(g.r!=e){g.r=e
e=f.d
u=e-128
t=e+128
s=f.e
r=s-128
q=s+128
for(p=g.d.length-1;p>=0;--p){o=g.d
if(p>=o.length)return H.e(o,p)
n=o[p]
o=n.a
if(u<=o)if(t>o){o=n.b
o=r>o||q<=o}else o=!0
else o=!0
if(o)g.jH(n)}m=e-64
l=e+64
k=s-64
j=s+64
for(i=m;i<l;i+=16)for(h=k;h<j;h+=16)if(g.aV(i,h)==null)g.eJ(i,h)}},
hd:function(a){var u,t,s,r,q,p,o,n,m,l,k=a.a
if(typeof k!=="number")return k.p()
u=k-8
k=a.c
if(typeof k!=="number")return k.p()
t=k-8
for(k=this.d,s=k.length,r=null,q=1e-9,p=0;p<s;++p){o=k[p]
if(o.x){n=o.a-u
m=o.b-t
l=n*n+m*m
if(r==null||q>l){q=l
r=o}}}if(r!=null)this.b.bR(r)},
iJ:function(a){var u,t,s,r,q,p,o,n,m,l,k=a.a
if(typeof k!=="number")return k.p()
u=k-8
k=a.c
if(typeof k!=="number")return k.p()
t=k-8
for(k=this.d,s=k.length,r=null,q=1e-9,p=0;p<s;++p){o=k[p]
if(o.f&&!o.x){n=o.a-u
m=o.b-t
l=n*n+m*m
if(r==null||q>l){q=l
r=o}}}if(r!=null){r.f=!1
r.r=!0}},
f1:function(a,b,c,d){var u,t=a.gcw().kk(c)
if(t==null)return
else{u=t.d
a=a.ey(u)}if(a==null)return
return new B.e1(a,u,b,d)},
ah:function(a,b){var u,t,s,r,q,p,o,n,m
H.i(b,"$iw")
u=this.f.y.f
t=u.V(V.e6())
s=u.V(new V.u(0,0,-16))
r=new V.U(t.a,t.c)
q=new V.U(s.a,s.c)
for(p=this.d,o=p.length,n=0;n<p.length;p.length===o||(0,H.z)(p),++n){m=p[n]
m.kz()
m.kA(r,q)}},
shg:function(a){this.c=H.h(a,"$ib",[B.c9],"$ab")},
sfY:function(a){this.d=H.h(a,"$ib",[B.c9],"$ab")},
sc7:function(a){this.e=H.h(a,"$ib",[E.a2],"$ab")}};(function aliases(){var u=J.a.prototype
u.f7=u.i
u=J.dQ.prototype
u.f8=u.i
u=O.cV.prototype
u.d1=u.aN
u=O.bi.prototype
u.d2=u.aN
u=V.dX.prototype
u.f9=u.bg
u.d0=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i,n=hunkHelpers._instance_1i
u(P,"pj","ov",13)
u(P,"pk","ow",13)
u(P,"pl","ox",13)
t(P,"mS","ph",3)
var m
s(m=E.a2.prototype,"gbU",0,0,null,["$1","$0"],["eD","k9"],1,0)
s(m,"geE",0,0,null,["$1","$0"],["eF","ka"],1,0)
s(m,"geB",0,0,null,["$1","$0"],["eC","k8"],1,0)
s(m,"gez",0,0,null,["$1","$0"],["eA","k5"],1,0)
r(m,"gk_","k0",6)
r(m,"gk6","k7",6)
s(m=E.ej.prototype,"gd3",0,0,null,["$1","$0"],["d5","d4"],1,0)
q(m,"gko","eO",3)
p(m=X.dR.prototype,"gfm","fn",30)
r(m,"gfk","fl",23)
r(m,"gfo","fp",23)
p(m,"gc2","c3",0)
p(m,"gcj","ck",0)
p(m=X.eq.prototype,"gi_","i0",14)
p(m,"ghK","hL",14)
p(m,"ghU","hV",4)
p(m,"gcj","ck",21)
p(m,"gc2","c3",21)
p(m,"gi7","i8",4)
p(m,"gib","ic",4)
p(m,"ghY","hZ",4)
p(m,"gi9","ia",4)
p(m,"ghW","hX",4)
p(m,"gie","ig",36)
p(m,"gih","ii",14)
p(m,"giw","ix",12)
p(m,"gis","it",12)
p(m,"giu","iv",12)
s(D.bM.prototype,"ghM",0,0,null,["$1","$0"],["aM","hN"],1,0)
s(m=D.dS.prototype,"gdH",0,0,null,["$1","$0"],["dI","i5"],1,0)
p(m,"gij","ik",38)
r(m,"ghA","hB",18)
r(m,"gio","ip",18)
o(V.a3.prototype,"gn","cN",17)
o(V.H.prototype,"gn","cN",17)
s(m=U.cS.prototype,"gaD",0,0,null,["$1","$0"],["B","ac"],1,0)
r(m,"gft","fu",16)
r(m,"gil","im",16)
s(U.cU.prototype,"gaD",0,0,null,["$1","$0"],["B","ac"],1,0)
s(m=U.er.prototype,"gaD",0,0,null,["$1","$0"],["B","ac"],1,0)
p(m,"ght","hu",0)
p(m,"ghv","hw",0)
p(m,"ghx","hy",0)
p(m,"ghn","ho",0)
p(m,"ghp","hq",0)
p(m,"gjb","jc",0)
p(m,"gj9","ja",0)
p(m,"gj7","j8",0)
s(m=U.es.prototype,"gaD",0,0,null,["$1","$0"],["B","ac"],1,0)
p(m,"gi3","i4",0)
s(m=M.dK.prototype,"gb3",0,0,null,["$1","$0"],["b4","fv"],1,0)
r(m,"ghO","hP",6)
r(m,"ghQ","hR",6)
s(m=O.cj.prototype,"gbE",0,0,null,["$1","$0"],["a2","c4"],1,0)
s(m,"giP",0,0,null,["$1","$0"],["dM","iQ"],1,0)
r(m,"ghC","hD",22)
r(m,"ghE","hF",22)
s(O.cV.prototype,"gbE",0,0,null,["$1","$0"],["a2","c4"],1,0)
s(X.e3.prototype,"gd7",0,0,null,["$1","$0"],["b5","fA"],1,0)
t(B,"pB","pH",3)
p(m=B.e4.prototype,"giq","ir",0)
p(m,"gi1","i2",0)
p(m,"ghI","hJ",0)
p(m,"ghG","hH",0)
p(m,"ghS","hT",0)
r(m,"ghh","hi",50)
p(m,"gjj","jk",0)
p(m=B.ev.prototype,"gkB","kC",11)
p(m,"geZ","f_",11)
p(m,"gjr","js",11)
n(m,"gky","ah",0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.Q,null)
s(P.Q,[H.l9,J.a,J.av,P.eL,P.k,H.dU,P.bd,H.cf,H.de,H.fV,H.j8,P.bN,H.cN,H.f1,P.an,H.ht,H.hu,H.hp,P.f7,P.br,P.aM,P.ew,P.iM,P.d7,P.iN,P.bm,P.at,P.kv,P.kf,P.di,P.k9,P.y,P.ko,P.hA,P.ca,P.ku,P.kt,P.a4,P.aA,P.ab,P.aQ,P.i6,P.eg,P.eE,P.hi,P.b,P.x,P.P,P.aw,P.l,P.aq,P.cw,P.jm,P.kg,W.fY,W.F,W.dM,P.ki,P.fc,P.k5,P.ka,P.R,L.i5,B.ha,B.aV,O.a1,O.cW,E.fN,E.a2,E.ij,D.w,E.ej,Z.et,Z.jH,Z.cL,Z.aS,Z.ae,D.fQ,D.ce,X.dC,X.am,X.hr,X.hx,X.bw,X.hX,X.j4,X.eq,D.bM,D.ai,D.e5,D.ef,V.a9,V.aP,V.h9,V.a5,V.ch,V.hn,V.aG,V.au,V.U,V.u,V.bV,V.e9,V.ea,V.bY,V.a3,V.H,U.cU,U.er,U.es,M.dK,A.dA,A.fG,A.ah,A.aE,A.aH,A.aI,A.hG,A.cr,A.cs,A.cu,A.em,A.jg,F.ad,F.bS,F.cm,F.d3,F.ed,F.it,F.iu,F.iv,F.bp,F.jy,F.jz,F.jC,F.jD,O.cq,O.cV,O.hH,T.iZ,V.fC,V.bv,V.dX,V.is,V.d6,V.ek,V.da,V.j3,X.dD,X.eh,X.e3,V.iB,B.az,B.fR,B.c9,B.fS,B.a_,B.hQ,B.e1,B.e4,B.ic,B.iw,B.iS,B.ev])
s(J.a,[J.ho,J.dP,J.dQ,J.be,J.ci,J.bQ,H.cZ,H.bT,W.n,W.fB,W.c7,W.cM,W.bb,W.bc,W.T,W.ey,W.h1,W.h2,W.eA,W.dJ,W.eC,W.h4,W.p,W.eF,W.aR,W.hl,W.eH,W.bt,W.hw,W.hR,W.eM,W.eN,W.aT,W.eO,W.eR,W.aU,W.eV,W.eX,W.aX,W.eY,W.aY,W.f2,W.aJ,W.f5,W.j1,W.b_,W.f8,W.j6,W.jr,W.ff,W.fh,W.fj,W.fl,W.fn,P.bh,P.eJ,P.bk,P.eT,P.ib,P.f3,P.bn,P.fa,P.fH,P.ex,P.dB,P.e8,P.cp,P.ec,P.ei,P.en,P.f_])
s(J.dQ,[J.i7,J.c0,J.bR])
t(J.l8,J.be)
s(J.ci,[J.dO,J.dN])
t(P.hv,P.eL)
s(P.hv,[H.eo,W.jQ,W.jP,P.he])
t(H.a8,H.eo)
s(P.k,[H.h7,H.hB,H.jI])
s(P.bd,[H.hC,H.jJ])
t(H.fW,H.fV)
s(P.bN,[H.i2,H.hq,H.jk,H.ja,H.fP,H.iq,P.fF,P.e2,P.b9,P.jl,P.ji,P.iH,P.fU,P.h0])
s(H.cN,[H.kT,H.iR,H.kL,H.kM,H.kN,P.jM,P.jL,P.jN,P.jO,P.kn,P.km,P.jW,P.k_,P.jX,P.jY,P.jZ,P.k2,P.k3,P.k1,P.k0,P.iO,P.iP,P.kD,P.kd,P.kc,P.ke,P.hz,P.h5,P.h6,P.jq,P.jn,P.jo,P.jp,P.kp,P.kq,P.ks,P.kr,P.kx,P.kw,P.ky,P.kz,W.hT,W.hV,W.ip,W.iL,W.jV,P.kk,P.kF,P.hf,P.hg,P.fJ,E.ik,E.il,E.im,E.j0,D.hb,D.hc,F.jF,F.jE,F.jA,F.jB,O.hK,O.hL,O.hM,O.hN,O.hO,O.hP,T.j_,V.iD,V.iC,B.kR,B.i8,B.ie,B.id,B.ig,B.ix,B.iy,B.iz,B.iA,B.iT,B.iU])
s(H.iR,[H.iJ,H.cJ])
t(H.jK,P.fF)
t(P.hy,P.an)
t(H.X,P.hy)
t(H.dT,H.h7)
t(H.dZ,H.bT)
s(H.dZ,[H.dj,H.dl])
t(H.dk,H.dj)
t(H.d_,H.dk)
t(H.dm,H.dl)
t(H.e_,H.dm)
s(H.e_,[H.hY,H.hZ,H.i_,H.i0,H.i1,H.e0,H.cl])
t(P.kb,P.kv)
t(P.k8,P.kf)
t(P.fd,P.hA)
t(P.ep,P.fd)
s(P.ca,[P.fL,P.h8])
t(P.cc,P.iN)
s(P.cc,[P.fM,P.ju,P.jt])
t(P.js,P.h8)
s(P.ab,[P.A,P.j])
s(P.b9,[P.bW,P.hm])
t(P.jS,P.cw)
s(W.n,[W.K,W.hd,W.cX,W.aW,W.dn,W.aZ,W.aK,W.dq,W.jG,W.dg,P.fK,P.c6])
s(W.K,[W.a6,W.bK])
s(W.a6,[W.r,P.q])
s(W.r,[W.fD,W.fE,W.c8,W.dH,W.hh,W.cT,W.ir])
s(W.bb,[W.cO,W.fZ,W.h_])
t(W.fX,W.bc)
t(W.cP,W.ey)
t(W.eB,W.eA)
t(W.dI,W.eB)
t(W.eD,W.eC)
t(W.h3,W.eD)
t(W.aF,W.c7)
t(W.eG,W.eF)
t(W.cQ,W.eG)
t(W.eI,W.eH)
t(W.cg,W.eI)
t(W.c_,W.p)
s(W.c_,[W.bg,W.aj,W.b0])
t(W.hS,W.eM)
t(W.hU,W.eN)
t(W.eP,W.eO)
t(W.hW,W.eP)
t(W.eS,W.eR)
t(W.d0,W.eS)
t(W.eW,W.eV)
t(W.i9,W.eW)
t(W.io,W.eX)
t(W.dp,W.dn)
t(W.iE,W.dp)
t(W.eZ,W.eY)
t(W.iF,W.eZ)
t(W.iK,W.f2)
t(W.f6,W.f5)
t(W.iV,W.f6)
t(W.dr,W.dq)
t(W.iW,W.dr)
t(W.f9,W.f8)
t(W.j5,W.f9)
t(W.bq,W.aj)
t(W.fg,W.ff)
t(W.jR,W.fg)
t(W.ez,W.dJ)
t(W.fi,W.fh)
t(W.k4,W.fi)
t(W.fk,W.fj)
t(W.eQ,W.fk)
t(W.fm,W.fl)
t(W.kh,W.fm)
t(W.fo,W.fn)
t(W.kl,W.fo)
t(W.jT,P.iM)
t(W.ln,W.jT)
t(W.jU,P.d7)
t(P.kj,P.ki)
t(P.ao,P.ka)
t(P.eK,P.eJ)
t(P.hs,P.eK)
t(P.eU,P.eT)
t(P.i3,P.eU)
t(P.f4,P.f3)
t(P.iQ,P.f4)
t(P.fb,P.fa)
t(P.j7,P.fb)
t(P.fI,P.ex)
t(P.i4,P.c6)
t(P.f0,P.f_)
t(P.iG,P.f0)
s(D.w,[E.iI,D.bO,D.bP,D.L,X.bu,X.ia])
s(E.fN,[Z.bJ,A.d4,T.d9])
s(O.a1,[X.dR,D.dS,U.cS])
s(X.ia,[X.dW,X.bx,X.el])
s(D.fQ,[U.fT,U.aa,F.d5])
s(U.aa,[U.dF,U.eb])
t(A.hD,A.d4)
s(A.em,[A.aL,A.jd,A.je,A.jf,A.jb,A.al,A.jc,A.Y,A.dc,A.jh,A.dd,A.aC,A.ar,A.ct])
t(O.cj,O.cq)
s(O.cV,[O.hE,O.hF,O.bi])
s(O.bi,[O.hI,O.hJ])
t(T.bZ,T.d9)
s(T.bZ,[T.iX,T.iY])
s(V.dX,[V.by,V.db])
t(X.hj,X.eh)
u(H.eo,H.de)
u(H.dj,P.y)
u(H.dk,H.cf)
u(H.dl,P.y)
u(H.dm,H.cf)
u(P.eL,P.y)
u(P.fd,P.ko)
u(W.ey,W.fY)
u(W.eA,P.y)
u(W.eB,W.F)
u(W.eC,P.y)
u(W.eD,W.F)
u(W.eF,P.y)
u(W.eG,W.F)
u(W.eH,P.y)
u(W.eI,W.F)
u(W.eM,P.an)
u(W.eN,P.an)
u(W.eO,P.y)
u(W.eP,W.F)
u(W.eR,P.y)
u(W.eS,W.F)
u(W.eV,P.y)
u(W.eW,W.F)
u(W.eX,P.an)
u(W.dn,P.y)
u(W.dp,W.F)
u(W.eY,P.y)
u(W.eZ,W.F)
u(W.f2,P.an)
u(W.f5,P.y)
u(W.f6,W.F)
u(W.dq,P.y)
u(W.dr,W.F)
u(W.f8,P.y)
u(W.f9,W.F)
u(W.ff,P.y)
u(W.fg,W.F)
u(W.fh,P.y)
u(W.fi,W.F)
u(W.fj,P.y)
u(W.fk,W.F)
u(W.fl,P.y)
u(W.fm,W.F)
u(W.fn,P.y)
u(W.fo,W.F)
u(P.eJ,P.y)
u(P.eK,W.F)
u(P.eT,P.y)
u(P.eU,W.F)
u(P.f3,P.y)
u(P.f4,W.F)
u(P.fa,P.y)
u(P.fb,W.F)
u(P.ex,P.an)
u(P.f_,P.y)
u(P.f0,W.F)})();(function constants(){var u=hunkHelpers.makeConstList
C.j=W.c8.prototype
C.P=J.a.prototype
C.a=J.be.prototype
C.i=J.dN.prototype
C.d=J.dO.prototype
C.l=J.dP.prototype
C.e=J.ci.prototype
C.b=J.bQ.prototype
C.Q=J.bR.prototype
C.V=H.cl.prototype
C.W=W.d0.prototype
C.y=J.i7.prototype
C.c=P.cp.prototype
C.q=J.c0.prototype
C.z=W.bq.prototype
C.A=W.dg.prototype
C.X=new P.fM()
C.B=new P.fL()
C.r=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.C=function() {
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
C.H=function(getTagFallback) {
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
C.D=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.E=function(hooks) {
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
C.G=function(hooks) {
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
C.F=function(hooks) {
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
C.t=function(hooks) { return hooks; }

C.I=new P.i6()
C.h=new P.js()
C.J=new P.ju()
C.K=new P.k5()
C.f=new P.kb()
C.k=new P.aQ(0)
C.L=new P.aQ(25e4)
C.M=new P.aQ(5e6)
C.N=new P.aQ(7e4)
C.O=new P.aQ(75e4)
C.u=H.c(u([127,2047,65535,1114111]),[P.j])
C.m=H.c(u([0,0,32776,33792,1,10240,0,0]),[P.j])
C.n=H.c(u([0,0,65490,45055,65535,34815,65534,18431]),[P.j])
C.o=H.c(u([0,0,26624,1023,65534,2047,65534,2047]),[P.j])
C.S=H.c(u([0,0,32722,12287,65534,34815,65534,18431]),[P.j])
C.v=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.j])
C.p=H.c(u([0,0,24576,1023,65534,34815,65534,18431]),[P.j])
C.w=H.c(u([0,0,32754,11263,65534,34815,65534,18431]),[P.j])
C.T=H.c(u([0,0,32722,12287,65535,34815,65534,18431]),[P.j])
C.x=H.c(u([0,0,65490,12287,65535,34815,65534,18431]),[P.j])
C.R=H.c(u([]),[P.l])
C.U=new H.fW(0,{},C.R,[P.l,P.l])})()
var v={mangledGlobalNames:{j:"int",A:"double",ab:"num",l:"String",a4:"bool",P:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,args:[D.w]},{func:1,ret:-1,opt:[D.w]},{func:1,ret:P.P},{func:1,ret:-1},{func:1,ret:-1,args:[W.aj]},{func:1,ret:P.j,args:[P.j]},{func:1,ret:-1,args:[P.j,[P.k,E.a2]]},{func:1,ret:P.P,args:[F.ad]},{func:1,ret:-1,args:[P.l,,]},{func:1,ret:P.P,args:[D.w]},{func:1,ret:P.P,args:[,,]},{func:1,ret:-1,args:[,]},{func:1,ret:-1,args:[W.b0]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.p]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:-1,args:[P.j,[P.k,U.aa]]},{func:1,ret:P.A},{func:1,ret:-1,args:[P.j,[P.k,D.ai]]},{func:1,args:[,]},{func:1,ret:P.P,args:[,]},{func:1,ret:-1,args:[W.bg]},{func:1,ret:-1,args:[P.j,[P.k,V.au]]},{func:1,ret:-1,args:[P.j,[P.k,X.am]]},{func:1,ret:P.P,args:[{func:1,ret:-1,args:[D.w]}]},{func:1,ret:P.P,args:[W.p]},{func:1,ret:P.l,args:[P.j]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:P.P,args:[P.ab]},{func:1,ret:P.a4,args:[W.K]},{func:1,ret:P.a4,args:[[P.k,X.am]]},{func:1,args:[W.p]},{func:1,ret:P.R,args:[,,]},{func:1,ret:P.R,args:[P.j]},{func:1,ret:P.P,args:[P.l,,]},{func:1,ret:P.l,args:[P.l]},{func:1,ret:-1,args:[W.bq]},{func:1,ret:P.P,args:[P.l]},{func:1,ret:P.a4,args:[[P.k,D.ai]]},{func:1,ret:P.j,args:[P.j,P.j]},{func:1,ret:-1,args:[P.l],opt:[,]},{func:1,ret:-1,args:[P.l,P.j]},{func:1,ret:[P.x,P.l,P.l],args:[[P.x,P.l,P.l],P.l]},{func:1,ret:[P.aM,,],args:[,]},{func:1,ret:P.P,args:[,],opt:[P.aw]},{func:1,ret:P.j,args:[A.aE,A.aE]},{func:1,ret:P.j,args:[A.aH,A.aH]},{func:1,ret:P.j,args:[A.aI,A.aI]},{func:1,ret:P.P,args:[{func:1,ret:-1}]},{func:1,ret:P.P,args:[P.bm]},{func:1,ret:V.u,args:[V.u,V.u]},{func:1,args:[P.l]},{func:1,args:[,P.l]},{func:1,ret:W.a6,args:[W.K]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.ba=0
$.cK=null
$.lS=null
$.lr=!1
$.mX=null
$.mQ=null
$.n3=null
$.kG=null
$.kO=null
$.lB=null
$.cy=null
$.du=null
$.dv=null
$.ls=!1
$.Z=C.f
$.ax=[]
$.m1=null
$.m5=null
$.m9=null
$.d1=null
$.mf=null
$.mp=null
$.mu=null
$.mt=null
$.jv=null
$.jw=null
$.mr=null
$.jx=null
$.ms=null
$.m8=null
$.lR=H.c([101,102,103,104,105,106,115,109,110,111,112,113,1,114,200,201,202,203,204,205],[P.j])})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"q3","n8",function(){return H.mW("_$dart_dartClosure")})
u($,"qk","lN",function(){return H.mW("_$dart_js")})
u($,"qo","nd",function(){return H.bo(H.j9({
toString:function(){return"$receiver$"}}))})
u($,"qp","ne",function(){return H.bo(H.j9({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"qq","nf",function(){return H.bo(H.j9(null))})
u($,"qr","ng",function(){return H.bo(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qu","nj",function(){return H.bo(H.j9(void 0))})
u($,"qv","nk",function(){return H.bo(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qt","ni",function(){return H.bo(H.mk(null))})
u($,"qs","nh",function(){return H.bo(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"qx","nm",function(){return H.bo(H.mk(void 0))})
u($,"qw","nl",function(){return H.bo(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qM","lO",function(){return P.ou()})
u($,"qz","nn",function(){return P.oq()})
u($,"qN","nq",function(){return H.nY(H.cx(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.j])))})
u($,"qO","nr",function(){return P.od("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qP","ns",function(){return P.oQ()})
u($,"q4","n9",function(){return H.c([B.bl(5,2),B.bl(2,5),B.bl(-5,2),B.bl(-2,5),B.bl(5,-2),B.bl(2,-5),B.bl(-5,-2),B.bl(-2,-5)],[B.aV])})
u($,"q6","na",function(){return B.bl(-0.211324865405187,-0.211324865405187)})
u($,"q5","lJ",function(){return B.bl(0.366025403784439,0.366025403784439)})
u($,"qF","np",function(){return Z.b2(0)})
u($,"qH","ac",function(){return Z.b2(1)})
u($,"qG","as",function(){return Z.b2(2)})
u($,"qB","bI",function(){return Z.b2(4)})
u($,"qI","ag",function(){return Z.b2(8)})
u($,"qJ","c3",function(){return Z.b2(16)})
u($,"qC","dw",function(){return Z.b2(32)})
u($,"qD","dx",function(){return Z.b2(64)})
u($,"qE","no",function(){return Z.b2(96)})
u($,"qK","cI",function(){return Z.b2(128)})
u($,"qA","bH",function(){return Z.b2(256)})
u($,"pO","n7",function(){return new V.h9(1e-9)})
u($,"pN","C",function(){return $.n7()})
u($,"qa","bD",function(){return V.aB(0)})
u($,"q7","lK",function(){return V.aB(511)})
u($,"qd","b5",function(){return V.aB(1)})
u($,"qb","lL",function(){return V.aB(2)})
u($,"qc","b4",function(){return V.aB(4)})
u($,"qg","b6",function(){return V.aB(8)})
u($,"qe","lM",function(){return V.aB(16)})
u($,"qf","bE",function(){return V.aB(32)})
u($,"qj","bG",function(){return V.aB(64)})
u($,"qh","nc",function(){return V.aB(128)})
u($,"qi","bF",function(){return V.aB(256)})
u($,"q9","kW",function(){return V.aB(146)})
u($,"q8","nb",function(){return V.aB(365)})
u($,"q0","lH",function(){return V.ii(-0.25,-1.5,-0.25,0.5,1.9,0.5)})
u($,"q2","fA",function(){return V.ll()})
u($,"pU","fv",function(){var t=$.mr
return t==null?$.mr=V.mq(0,-1,0):t})
u($,"q_","lG",function(){var t=$.mt
return t==null?$.mt=V.mq(1,0,0):t})
u($,"q1","lI",function(){return V.mv()})
u($,"pX","kV",function(){return V.lm()})
u($,"pR","lF",function(){return V.mw()})
u($,"pY","fy",function(){return V.bU(-0.5,0.5,0.5)})
u($,"pZ","fz",function(){return V.bU(0.5,0.5,0.5)})
u($,"pV","fw",function(){return V.bU(-0.5,-0.5,0.5)})
u($,"pW","fx",function(){return V.bU(0.5,-0.5,0.5)})
u($,"pS","ft",function(){return V.bU(-0.5,0.5,-0.5)})
u($,"pT","fu",function(){return V.bU(0.5,0.5,-0.5)})
u($,"pP","fr",function(){return V.bU(-0.5,-0.5,-0.5)})
u($,"pQ","fs",function(){return V.bU(0.5,-0.5,-0.5)})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cZ,DataView:H.bT,ArrayBufferView:H.bT,Float32Array:H.d_,Float64Array:H.d_,Int16Array:H.hY,Int32Array:H.hZ,Int8Array:H.i_,Uint16Array:H.i0,Uint32Array:H.i1,Uint8ClampedArray:H.e0,CanvasPixelArray:H.e0,Uint8Array:H.cl,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLBaseElement:W.r,HTMLBodyElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLInputElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableCellElement:W.r,HTMLTableDataCellElement:W.r,HTMLTableHeaderCellElement:W.r,HTMLTableColElement:W.r,HTMLTableElement:W.r,HTMLTableRowElement:W.r,HTMLTableSectionElement:W.r,HTMLTemplateElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.fB,HTMLAnchorElement:W.fD,HTMLAreaElement:W.fE,Blob:W.c7,HTMLCanvasElement:W.c8,CanvasRenderingContext2D:W.cM,CDATASection:W.bK,CharacterData:W.bK,Comment:W.bK,ProcessingInstruction:W.bK,Text:W.bK,CSSNumericValue:W.cO,CSSUnitValue:W.cO,CSSPerspective:W.fX,CSSCharsetRule:W.T,CSSConditionRule:W.T,CSSFontFaceRule:W.T,CSSGroupingRule:W.T,CSSImportRule:W.T,CSSKeyframeRule:W.T,MozCSSKeyframeRule:W.T,WebKitCSSKeyframeRule:W.T,CSSKeyframesRule:W.T,MozCSSKeyframesRule:W.T,WebKitCSSKeyframesRule:W.T,CSSMediaRule:W.T,CSSNamespaceRule:W.T,CSSPageRule:W.T,CSSRule:W.T,CSSStyleRule:W.T,CSSSupportsRule:W.T,CSSViewportRule:W.T,CSSStyleDeclaration:W.cP,MSStyleCSSProperties:W.cP,CSS2Properties:W.cP,CSSImageValue:W.bb,CSSKeywordValue:W.bb,CSSPositionValue:W.bb,CSSResourceValue:W.bb,CSSURLImageValue:W.bb,CSSStyleValue:W.bb,CSSMatrixComponent:W.bc,CSSRotation:W.bc,CSSScale:W.bc,CSSSkew:W.bc,CSSTranslation:W.bc,CSSTransformComponent:W.bc,CSSTransformValue:W.fZ,CSSUnparsedValue:W.h_,DataTransferItemList:W.h1,HTMLDivElement:W.dH,DOMException:W.h2,ClientRectList:W.dI,DOMRectList:W.dI,DOMRectReadOnly:W.dJ,DOMStringList:W.h3,DOMTokenList:W.h4,Element:W.a6,AbortPaymentEvent:W.p,AnimationEvent:W.p,AnimationPlaybackEvent:W.p,ApplicationCacheErrorEvent:W.p,BackgroundFetchClickEvent:W.p,BackgroundFetchEvent:W.p,BackgroundFetchFailEvent:W.p,BackgroundFetchedEvent:W.p,BeforeInstallPromptEvent:W.p,BeforeUnloadEvent:W.p,BlobEvent:W.p,CanMakePaymentEvent:W.p,ClipboardEvent:W.p,CloseEvent:W.p,CustomEvent:W.p,DeviceMotionEvent:W.p,DeviceOrientationEvent:W.p,ErrorEvent:W.p,ExtendableEvent:W.p,ExtendableMessageEvent:W.p,FetchEvent:W.p,FontFaceSetLoadEvent:W.p,ForeignFetchEvent:W.p,GamepadEvent:W.p,HashChangeEvent:W.p,InstallEvent:W.p,MediaEncryptedEvent:W.p,MediaKeyMessageEvent:W.p,MediaQueryListEvent:W.p,MediaStreamEvent:W.p,MediaStreamTrackEvent:W.p,MessageEvent:W.p,MIDIConnectionEvent:W.p,MIDIMessageEvent:W.p,MutationEvent:W.p,NotificationEvent:W.p,PageTransitionEvent:W.p,PaymentRequestEvent:W.p,PaymentRequestUpdateEvent:W.p,PopStateEvent:W.p,PresentationConnectionAvailableEvent:W.p,PresentationConnectionCloseEvent:W.p,ProgressEvent:W.p,PromiseRejectionEvent:W.p,PushEvent:W.p,RTCDataChannelEvent:W.p,RTCDTMFToneChangeEvent:W.p,RTCPeerConnectionIceEvent:W.p,RTCTrackEvent:W.p,SecurityPolicyViolationEvent:W.p,SensorErrorEvent:W.p,SpeechRecognitionError:W.p,SpeechRecognitionEvent:W.p,SpeechSynthesisEvent:W.p,StorageEvent:W.p,SyncEvent:W.p,TrackEvent:W.p,TransitionEvent:W.p,WebKitTransitionEvent:W.p,VRDeviceEvent:W.p,VRDisplayEvent:W.p,VRSessionEvent:W.p,MojoInterfaceRequestEvent:W.p,ResourceProgressEvent:W.p,USBConnectionEvent:W.p,IDBVersionChangeEvent:W.p,AudioProcessingEvent:W.p,OfflineAudioCompletionEvent:W.p,WebGLContextEvent:W.p,Event:W.p,InputEvent:W.p,AbsoluteOrientationSensor:W.n,Accelerometer:W.n,AccessibleNode:W.n,AmbientLightSensor:W.n,Animation:W.n,ApplicationCache:W.n,DOMApplicationCache:W.n,OfflineResourceList:W.n,BackgroundFetchRegistration:W.n,BatteryManager:W.n,BroadcastChannel:W.n,CanvasCaptureMediaStreamTrack:W.n,DedicatedWorkerGlobalScope:W.n,EventSource:W.n,FileReader:W.n,FontFaceSet:W.n,Gyroscope:W.n,XMLHttpRequest:W.n,XMLHttpRequestEventTarget:W.n,XMLHttpRequestUpload:W.n,LinearAccelerationSensor:W.n,Magnetometer:W.n,MediaDevices:W.n,MediaKeySession:W.n,MediaQueryList:W.n,MediaRecorder:W.n,MediaSource:W.n,MediaStream:W.n,MediaStreamTrack:W.n,MIDIAccess:W.n,MIDIInput:W.n,MIDIOutput:W.n,MIDIPort:W.n,NetworkInformation:W.n,Notification:W.n,OffscreenCanvas:W.n,OrientationSensor:W.n,PaymentRequest:W.n,Performance:W.n,PermissionStatus:W.n,PresentationAvailability:W.n,PresentationConnection:W.n,PresentationConnectionList:W.n,PresentationRequest:W.n,RelativeOrientationSensor:W.n,RemotePlayback:W.n,RTCDataChannel:W.n,DataChannel:W.n,RTCDTMFSender:W.n,RTCPeerConnection:W.n,webkitRTCPeerConnection:W.n,mozRTCPeerConnection:W.n,ScreenOrientation:W.n,Sensor:W.n,ServiceWorker:W.n,ServiceWorkerContainer:W.n,ServiceWorkerGlobalScope:W.n,ServiceWorkerRegistration:W.n,SharedWorker:W.n,SharedWorkerGlobalScope:W.n,SpeechRecognition:W.n,SpeechSynthesis:W.n,SpeechSynthesisUtterance:W.n,VR:W.n,VRDevice:W.n,VRDisplay:W.n,VRSession:W.n,VisualViewport:W.n,WebSocket:W.n,Worker:W.n,WorkerGlobalScope:W.n,WorkerPerformance:W.n,BluetoothDevice:W.n,BluetoothRemoteGATTCharacteristic:W.n,Clipboard:W.n,MojoInterfaceInterceptor:W.n,USB:W.n,IDBDatabase:W.n,IDBOpenDBRequest:W.n,IDBVersionChangeRequest:W.n,IDBRequest:W.n,IDBTransaction:W.n,AnalyserNode:W.n,RealtimeAnalyserNode:W.n,AudioBufferSourceNode:W.n,AudioDestinationNode:W.n,AudioNode:W.n,AudioScheduledSourceNode:W.n,AudioWorkletNode:W.n,BiquadFilterNode:W.n,ChannelMergerNode:W.n,AudioChannelMerger:W.n,ChannelSplitterNode:W.n,AudioChannelSplitter:W.n,ConstantSourceNode:W.n,ConvolverNode:W.n,DelayNode:W.n,DynamicsCompressorNode:W.n,GainNode:W.n,AudioGainNode:W.n,IIRFilterNode:W.n,MediaElementAudioSourceNode:W.n,MediaStreamAudioDestinationNode:W.n,MediaStreamAudioSourceNode:W.n,OscillatorNode:W.n,Oscillator:W.n,PannerNode:W.n,AudioPannerNode:W.n,webkitAudioPannerNode:W.n,ScriptProcessorNode:W.n,JavaScriptAudioNode:W.n,StereoPannerNode:W.n,WaveShaperNode:W.n,EventTarget:W.n,File:W.aF,FileList:W.cQ,FileWriter:W.hd,HTMLFormElement:W.hh,Gamepad:W.aR,History:W.hl,HTMLCollection:W.cg,HTMLFormControlsCollection:W.cg,HTMLOptionsCollection:W.cg,ImageData:W.bt,HTMLImageElement:W.cT,KeyboardEvent:W.bg,Location:W.hw,MediaList:W.hR,MessagePort:W.cX,MIDIInputMap:W.hS,MIDIOutputMap:W.hU,MimeType:W.aT,MimeTypeArray:W.hW,PointerEvent:W.aj,MouseEvent:W.aj,DragEvent:W.aj,Document:W.K,DocumentFragment:W.K,HTMLDocument:W.K,ShadowRoot:W.K,XMLDocument:W.K,Attr:W.K,DocumentType:W.K,Node:W.K,NodeList:W.d0,RadioNodeList:W.d0,Plugin:W.aU,PluginArray:W.i9,RTCStatsReport:W.io,HTMLSelectElement:W.ir,SourceBuffer:W.aW,SourceBufferList:W.iE,SpeechGrammar:W.aX,SpeechGrammarList:W.iF,SpeechRecognitionResult:W.aY,Storage:W.iK,CSSStyleSheet:W.aJ,StyleSheet:W.aJ,TextTrack:W.aZ,TextTrackCue:W.aK,VTTCue:W.aK,TextTrackCueList:W.iV,TextTrackList:W.iW,TimeRanges:W.j1,Touch:W.b_,TouchEvent:W.b0,TouchList:W.j5,TrackDefaultList:W.j6,CompositionEvent:W.c_,FocusEvent:W.c_,TextEvent:W.c_,UIEvent:W.c_,URL:W.jr,VideoTrackList:W.jG,WheelEvent:W.bq,Window:W.dg,DOMWindow:W.dg,CSSRuleList:W.jR,ClientRect:W.ez,DOMRect:W.ez,GamepadList:W.k4,NamedNodeMap:W.eQ,MozNamedAttrMap:W.eQ,SpeechRecognitionResultList:W.kh,StyleSheetList:W.kl,SVGLength:P.bh,SVGLengthList:P.hs,SVGNumber:P.bk,SVGNumberList:P.i3,SVGPointList:P.ib,SVGStringList:P.iQ,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGScriptElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGTransform:P.bn,SVGTransformList:P.j7,AudioBuffer:P.fH,AudioParamMap:P.fI,AudioTrackList:P.fK,AudioContext:P.c6,webkitAudioContext:P.c6,BaseAudioContext:P.c6,OfflineAudioContext:P.i4,WebGLBuffer:P.dB,WebGLProgram:P.e8,WebGL2RenderingContext:P.cp,WebGLShader:P.ec,WebGLTexture:P.ei,WebGLUniformLocation:P.en,SQLResultSetRowList:P.iG})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dZ.$nativeSuperclassTag="ArrayBufferView"
H.dj.$nativeSuperclassTag="ArrayBufferView"
H.dk.$nativeSuperclassTag="ArrayBufferView"
H.d_.$nativeSuperclassTag="ArrayBufferView"
H.dl.$nativeSuperclassTag="ArrayBufferView"
H.dm.$nativeSuperclassTag="ArrayBufferView"
H.e_.$nativeSuperclassTag="ArrayBufferView"
W.dn.$nativeSuperclassTag="EventTarget"
W.dp.$nativeSuperclassTag="EventTarget"
W.dq.$nativeSuperclassTag="EventTarget"
W.dr.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.n_,[])
else B.n_([])})})()
//# sourceMappingURL=main.dart.js.map
