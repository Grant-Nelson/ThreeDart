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
a[c]=function(){a[c]=function(){H.pf(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lb"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lb"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lb(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kR:function kR(){},
ki:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
lx:function(){return new P.ig("No element")},
e5:function(a,b,c,d,e){H.j(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.l,args:[e,e]})
if(c-b<=32)H.nJ(a,b,c,d,e)
else H.nI(a,b,c,d,e)},
nJ:function(a,b,c,d,e){var u,t,s,r,q
H.j(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.l,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.c(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.c(a,r)
r=J.b1(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.c(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
nI:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.j(a2,"$ib",[a6],"$ab")
H.n(a5,{func:1,ret:P.l,args:[a6,a6]})
u=C.e.a5(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.e.a5(a3+a4,2)
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
if(J.b1(a5.$2(n,m),0)){i=m
m=n
n=i}if(J.b1(a5.$2(k,j),0)){i=j
j=k
k=i}if(J.b1(a5.$2(n,l),0)){i=l
l=n
n=i}if(J.b1(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.b1(a5.$2(n,k),0)){i=k
k=n
n=i}if(J.b1(a5.$2(l,k),0)){i=k
k=l
l=i}if(J.b1(a5.$2(m,j),0)){i=j
j=m
m=i}if(J.b1(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.b1(a5.$2(k,j),0)){i=j
j=k
k=i}C.a.k(a2,t,n)
C.a.k(a2,r,l)
C.a.k(a2,s,j)
if(a3<0||a3>=a2.length)return H.c(a2,a3)
C.a.k(a2,q,a2[a3])
if(a4<0||a4>=a2.length)return H.c(a2,a4)
C.a.k(a2,p,a2[a4])
h=a3+1
g=a4-1
if(J.J(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.c(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.R()
if(d<0){if(f!==h){if(h>=a2.length)return H.c(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.c(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.ar()
if(d>0){--g
continue}else{c=g-1
o=a2.length
if(d<0){if(h>=o)return H.c(a2,h)
C.a.k(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.c(a2,g)
C.a.k(a2,h,a2[g])
C.a.k(a2,g,e)
g=c
h=b
break}else{if(g>=o)return H.c(a2,g)
C.a.k(a2,f,a2[g])
C.a.k(a2,g,e)
g=c
break}}}}a=!0}else{for(f=h;f<=g;++f){if(f>=a2.length)return H.c(a2,f)
e=a2[f]
a0=a5.$2(e,m)
if(typeof a0!=="number")return a0.R()
if(a0<0){if(f!==h){if(h>=a2.length)return H.c(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else{a1=a5.$2(e,k)
if(typeof a1!=="number")return a1.ar()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.c(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.ar()
if(d>0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.c(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.R()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.c(a2,h)
C.a.k(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.c(a2,g)
C.a.k(a2,h,a2[g])
C.a.k(a2,g,e)
h=b}else{if(g>=o)return H.c(a2,g)
C.a.k(a2,f,a2[g])
C.a.k(a2,g,e)}g=c
break}}}}a=!1}o=h-1
if(o>=a2.length)return H.c(a2,o)
C.a.k(a2,a3,a2[o])
C.a.k(a2,o,m)
o=g+1
if(o<0||o>=a2.length)return H.c(a2,o)
C.a.k(a2,a4,a2[o])
C.a.k(a2,o,k)
H.e5(a2,a3,h-2,a5,a6)
H.e5(a2,g+2,a4,a5,a6)
if(a)return
if(h<t&&g>s){while(!0){if(h>=a2.length)return H.c(a2,h)
if(!J.J(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.c(a2,g)
if(!J.J(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.c(a2,f)
e=a2[f]
if(a5.$2(e,m)===0){if(f!==h){if(h>=a2.length)return H.c(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else if(a5.$2(e,k)===0)for(;!0;){if(g<0||g>=a2.length)return H.c(a2,g)
if(a5.$2(a2[g],k)===0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.c(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.R()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.c(a2,h)
C.a.k(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.c(a2,g)
C.a.k(a2,h,a2[g])
C.a.k(a2,g,e)
h=b}else{if(g>=o)return H.c(a2,g)
C.a.k(a2,f,a2[g])
C.a.k(a2,g,e)}g=c
break}}}H.e5(a2,h,g,a5,a6)}else H.e5(a2,h,g,a5,a6)},
a4:function a4(a){this.a=a},
fR:function fR(){},
dP:function dP(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hn:function hn(a,b,c){this.a=a
this.b=b
this.$ti=c},
ho:function ho(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
jd:function jd(a,b,c){this.a=a
this.b=b
this.$ti=c},
je:function je(a,b,c){this.a=a
this.b=b
this.$ti=c},
c3:function c3(){},
d_:function d_(){},
eg:function eg(){},
n7:function(){throw H.e(P.H("Cannot modify unmodifiable Map"))},
cr:function(a){var u,t=H.O(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
oZ:function(a){return v.types[H.a_(a)]},
p4:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.T(a).$iM},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.az(a)
if(typeof u!=="string")throw H.e(H.ay(a))
return u},
cQ:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nA:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.c(p,3)
u=H.O(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.e(P.aj(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.H(s,q)|32)>t)return}return parseInt(a,b)},
c8:function(a){return H.nr(a)+H.l8(H.bU(a),0,null)},
nr:function(a){var u,t,s,r,q,p,o,n=J.T(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.N||!!n.$ibS){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cr(t.length>1&&C.b.H(t,0)===36?C.b.aj(t,1):t)},
ns:function(){if(!!self.location)return self.location.href
return},
lL:function(a){var u,t,s,r,q
H.kn(a)
u=J.aO(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
nB:function(a){var u,t,s,r=H.d([],[P.l])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.A)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.ay(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.aS(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.e(H.ay(s))}return H.lL(r)},
lM:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.ay(s))
if(s<0)throw H.e(H.ay(s))
if(s>65535)return H.nB(a)}return H.lL(a)},
nC:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
dZ:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aS(u,10))>>>0,56320|u&1023)}}throw H.e(P.aj(a,0,1114111,null,null))},
c7:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nz:function(a){var u=H.c7(a).getFullYear()+0
return u},
nx:function(a){var u=H.c7(a).getMonth()+1
return u},
nt:function(a){var u=H.c7(a).getDate()+0
return u},
nu:function(a){var u=H.c7(a).getHours()+0
return u},
nw:function(a){var u=H.c7(a).getMinutes()+0
return u},
ny:function(a){var u=H.c7(a).getSeconds()+0
return u},
nv:function(a){var u=H.c7(a).getMilliseconds()+0
return u},
u:function(a){throw H.e(H.ay(a))},
c:function(a,b){if(a==null)J.aO(a)
throw H.e(H.cm(a,b))},
cm:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.b2(!0,b,s,null)
u=H.a_(J.aO(a))
if(!(b<0)){if(typeof u!=="number")return H.u(u)
t=b>=u}else t=!0
if(t)return P.W(b,a,s,null,u)
return P.e0(b,s)},
oS:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c9(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c9(a,c,!0,b,"end",u)
return new P.b2(!0,b,"end",null)},
ay:function(a){return new P.b2(!0,a,null,null)},
oO:function(a){if(typeof a!=="number")throw H.e(H.ay(a))
return a},
e:function(a){var u
if(a==null)a=new P.dX()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mF})
u.name=""}else u.toString=H.mF
return u},
mF:function(){return J.az(this.dartException)},
x:function(a){throw H.e(a)},
A:function(a){throw H.e(P.c1(a))},
bg:function(a){var u,t,s,r,q,p
a=H.mB(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.i])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iE(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iF:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lU:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lG:function(a,b){return new H.hO(a,b==null?null:b.method)},
kS:function(a,b){var u=b==null,t=u?null:b.method
return new H.h9(a,t,u?null:b.receiver)},
aM:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kB(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.aS(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kS(H.m(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lG(H.m(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mI()
q=$.mJ()
p=$.mK()
o=$.mL()
n=$.mO()
m=$.mP()
l=$.mN()
$.mM()
k=$.mR()
j=$.mQ()
i=r.am(u)
if(i!=null)return f.$1(H.kS(H.O(u),i))
else{i=q.am(u)
if(i!=null){i.method="call"
return f.$1(H.kS(H.O(u),i))}else{i=p.am(u)
if(i==null){i=o.am(u)
if(i==null){i=n.am(u)
if(i==null){i=m.am(u)
if(i==null){i=l.am(u)
if(i==null){i=o.am(u)
if(i==null){i=k.am(u)
if(i==null){i=j.am(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lG(H.O(u),i))}}return f.$1(new H.iQ(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.e7()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.b2(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.e7()
return a},
cp:function(a){var u
if(a==null)return new H.eS(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eS(a)},
oW:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
p3:function(a,b,c,d,e,f){H.f(a,"$ikN")
switch(H.a_(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.y("Unsupported number of arguments for wrapped closure"))},
cl:function(a,b){var u
H.a_(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.p3)
a.$identity=u
return u},
n6:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.ih().constructor.prototype):Object.create(new H.cs(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b3
if(typeof t!=="number")return t.v()
$.b3=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.lq(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.oZ,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.lp:H.kI
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.e("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lq(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
n3:function(a,b,c,d){var u=H.kI
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lq:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.n5(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.n3(t,!r,u,b)
if(t===0){r=$.b3
if(typeof r!=="number")return r.v()
$.b3=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ct
return new Function(r+H.m(q==null?$.ct=H.fv("self"):q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b3
if(typeof r!=="number")return r.v()
$.b3=r+1
o+=r
r="return function("+o+"){return this."
q=$.ct
return new Function(r+H.m(q==null?$.ct=H.fv("self"):q)+"."+H.m(u)+"("+o+");}")()},
n4:function(a,b,c,d){var u=H.kI,t=H.lp
switch(b?-1:a){case 0:throw H.e(H.nG("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
n5:function(a,b){var u,t,s,r,q,p,o,n=$.ct
if(n==null)n=$.ct=H.fv("self")
u=$.lo
if(u==null)u=$.lo=H.fv("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.n4(s,!q,t,b)
if(s===1){n="return function(){return this."+H.m(n)+"."+H.m(t)+"(this."+H.m(u)+");"
u=$.b3
if(typeof u!=="number")return u.v()
$.b3=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.m(n)+"."+H.m(t)+"(this."+H.m(u)+", "+o+");"
u=$.b3
if(typeof u!=="number")return u.v()
$.b3=u+1
return new Function(n+u+"}")()},
lb:function(a,b,c,d,e,f,g){return H.n6(a,b,H.a_(c),d,!!e,!!f,g)},
kI:function(a){return a.a},
lp:function(a){return a.c},
fv:function(a){var u,t,s,r=new H.cs("self","target","receiver","name"),q=J.kP(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
E:function(a){if(a==null)H.oK("boolean expression must not be null")
return a},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aZ(a,"String"))},
oT:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aZ(a,"double"))},
mx:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aZ(a,"num"))},
mq:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aZ(a,"bool"))},
a_:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aZ(a,"int"))},
mz:function(a,b){throw H.e(H.aZ(a,H.cr(H.O(b).substring(2))))},
p9:function(a,b){throw H.e(H.n2(a,H.cr(H.O(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.T(a)[b])return a
H.mz(a,b)},
p:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.T(a)[b]
else u=!0
if(u)return a
H.p9(a,b)},
kn:function(a){if(a==null)return a
if(!!J.T(a).$ib)return a
throw H.e(H.aZ(a,"List<dynamic>"))},
mv:function(a,b){var u
if(a==null)return a
u=J.T(a)
if(!!u.$ib)return a
if(u[b])return a
H.mz(a,b)},
mr:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a_(u)]
else return a.$S()}return},
fe:function(a,b){var u
if(typeof a=="function")return!0
u=H.mr(J.T(a))
if(u==null)return!1
return H.mf(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.l5)return a
$.l5=!0
try{if(H.fe(a,b))return a
u=H.kw(b)
t=H.aZ(a,u)
throw H.e(t)}finally{$.l5=!1}},
lc:function(a,b){if(a!=null&&!H.la(a,b))H.x(H.aZ(a,H.kw(b)))
return a},
aZ:function(a,b){return new H.iG("TypeError: "+P.dD(a)+": type '"+H.ml(a)+"' is not a subtype of type '"+b+"'")},
n2:function(a,b){return new H.fw("CastError: "+P.dD(a)+": type '"+H.ml(a)+"' is not a subtype of type '"+b+"'")},
ml:function(a){var u,t=J.T(a)
if(!!t.$icw){u=H.mr(t)
if(u!=null)return H.kw(u)
return"Closure"}return H.c8(a)},
oK:function(a){throw H.e(new H.jf(a))},
pf:function(a){throw H.e(new P.fJ(H.O(a)))},
nG:function(a){return new H.i2(a)},
ms:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bU:function(a){if(a==null)return
return a.$ti},
pU:function(a,b,c){return H.cq(a["$a"+H.m(c)],H.bU(b))},
co:function(a,b,c,d){var u
H.O(c)
H.a_(d)
u=H.cq(a["$a"+H.m(c)],H.bU(b))
return u==null?null:u[d]},
aB:function(a,b,c){var u
H.O(b)
H.a_(c)
u=H.cq(a["$a"+H.m(b)],H.bU(a))
return u==null?null:u[c]},
w:function(a,b){var u
H.a_(b)
u=H.bU(a)
return u==null?null:u[b]},
kw:function(a){return H.bT(a,null)},
bT:function(a,b){var u,t
H.j(b,"$ib",[P.i],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cr(a[0].name)+H.l8(a,1,b)
if(typeof a=="function")return H.cr(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a_(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.m(b[t])}if('func' in a)return H.oj(a,b)
if('futureOr' in a)return"FutureOr<"+H.bT("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oj:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.i]
H.j(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.c(a0,n)
p=C.b.v(p,a0[n])
m=u[q]
if(m!=null&&m!==P.P)p+=" extends "+H.bT(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bT(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bT(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bT(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.oV(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.O(b[h])
j=j+i+H.bT(e[d],a0)+(" "+H.m(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
l8:function(a,b,c){var u,t,s,r,q,p
H.j(c,"$ib",[P.i],"$ab")
if(a==null)return""
u=new P.ak("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bT(p,c)}return"<"+u.i(0)+">"},
cq:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
l9:function(a,b,c,d){var u,t
H.O(b)
H.kn(c)
H.O(d)
if(a==null)return!1
u=H.bU(a)
t=J.T(a)
if(t[b]==null)return!1
return H.mo(H.cq(t[d],u),null,c,null)},
j:function(a,b,c,d){H.O(b)
H.kn(c)
H.O(d)
if(a==null)return a
if(H.l9(a,b,c,d))return a
throw H.e(H.aZ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cr(b.substring(2))+H.l8(c,0,null),v.mangledGlobalNames)))},
mo:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aL(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aL(a[t],b,c[t],d))return!1
return!0},
pS:function(a,b,c){return a.apply(b,H.cq(J.T(b)["$a"+H.m(c)],H.bU(b)))},
mu:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="P"||a.name==="K"||a===-1||a===-2||H.mu(u)}return!1},
la:function(a,b){var u,t
if(a==null)return b==null||b.name==="P"||b.name==="K"||b===-1||b===-2||H.mu(b)
if(b==null||b===-1||b.name==="P"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.la(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fe(a,b)}u=J.T(a).constructor
t=H.bU(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aL(u,null,b,null)},
D:function(a,b){if(a!=null&&!H.la(a,b))throw H.e(H.aZ(a,H.kw(b)))
return a},
aL:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="P"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="P"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aL(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="K")return!0
if('func' in c)return H.mf(a,b,c,d)
if('func' in a)return c.name==="kN"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aL("type" in a?a.type:l,b,s,d)
else if(H.aL(a,b,s,d))return!0
else{if(!('$i'+"cB" in t.prototype))return!1
r=t.prototype["$a"+"cB"]
q=H.cq(r,u?a.slice(1):l)
return H.aL(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mo(H.cq(m,u),b,p,d)},
mf:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aL(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aL(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aL(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aL(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.p7(h,b,g,d)},
p7:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aL(c[s],d,a[s],b))return!1}return!0},
pT:function(a,b,c){Object.defineProperty(a,H.O(b),{value:c,enumerable:false,writable:true,configurable:true})},
p5:function(a){var u,t,s,r,q=H.O($.mt.$1(a)),p=$.kd[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.km[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.O($.mn.$2(a,q))
if(q!=null){p=$.kd[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.km[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kv(u)
$.kd[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.km[q]=u
return u}if(s==="-"){r=H.kv(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.my(a,u)
if(s==="*")throw H.e(P.iP(q))
if(v.leafTags[q]===true){r=H.kv(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.my(a,u)},
my:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lf(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kv:function(a){return J.lf(a,!1,null,!!a.$iM)},
p6:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kv(u)
else return J.lf(u,c,null,null)},
p1:function(){if(!0===$.le)return
$.le=!0
H.p2()},
p2:function(){var u,t,s,r,q,p,o,n
$.kd=Object.create(null)
$.km=Object.create(null)
H.p0()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mA.$1(q)
if(p!=null){o=H.p6(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
p0:function(){var u,t,s,r,q,p,o=C.C()
o=H.ck(C.D,H.ck(C.E,H.ck(C.u,H.ck(C.u,H.ck(C.F,H.ck(C.G,H.ck(C.H(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mt=new H.kj(r)
$.mn=new H.kk(q)
$.mA=new H.kl(p)},
ck:function(a,b){return a(b)||b},
nf:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.e(P.a2("Illegal RegExp pattern ("+String(r)+")",a,null))},
pd:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oU:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mB:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
mD:function(a,b,c){var u=H.pe(a,b,c)
return u},
pe:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mB(b),'g'),H.oU(c))},
fD:function fD(){},
fE:function fE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iE:function iE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hO:function hO(a,b){this.a=a
this.b=b},
h9:function h9(a,b,c){this.a=a
this.b=b
this.c=c},
iQ:function iQ(a){this.a=a},
kB:function kB(a){this.a=a},
eS:function eS(a){this.a=a
this.b=null},
cw:function cw(){},
iq:function iq(){},
ih:function ih(){},
cs:function cs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iG:function iG(a){this.a=a},
fw:function fw(a){this.a=a},
i2:function i2(a){this.a=a},
jf:function jf(a){this.a=a},
a0:function a0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hd:function hd(a,b){this.a=a
this.b=b
this.c=null},
he:function he(a,b){this.a=a
this.$ti=b},
hf:function hf(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kj:function kj(a){this.a=a},
kk:function kk(a){this.a=a},
kl:function kl(a){this.a=a},
h8:function h8(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ci:function(a){return a},
np:function(a){return new Int8Array(a)},
bj:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.cm(b,a))},
oh:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.e(H.oS(a,b,c))
return b},
cL:function cL(){},
bK:function bK(){},
dU:function dU(){},
cM:function cM(){},
dV:function dV(){},
hI:function hI(){},
hJ:function hJ(){},
hK:function hK(){},
hL:function hL(){},
hM:function hM(){},
dW:function dW(){},
cN:function cN(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
oV:function(a){return J.ly(a?Object.keys(a):[],null)},
p8:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lf:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kf:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.le==null){H.p1()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.e(P.iP("Return interceptor for "+H.m(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lh()]
if(r!=null)return r
r=H.p5(a)
if(r!=null)return r
if(typeof a=="function")return C.P
u=Object.getPrototypeOf(a)
if(u==null)return C.y
if(u===Object.prototype)return C.y
if(typeof s=="function"){Object.defineProperty(s,$.lh(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
ne:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.kG(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.aj(a,0,4294967295,"length",null))
return J.ly(new Array(a),b)},
ly:function(a,b){return J.kP(H.d(a,[b]))},
kP:function(a){H.kn(a)
a.fixed$length=Array
return a},
T:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dK.prototype
return J.dJ.prototype}if(typeof a=="string")return J.bH.prototype
if(a==null)return J.dL.prototype
if(typeof a=="boolean")return J.h7.prototype
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
return a}if(a instanceof P.P)return a
return J.kf(a)},
dh:function(a){if(typeof a=="string")return J.bH.prototype
if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
return a}if(a instanceof P.P)return a
return J.kf(a)},
ke:function(a){if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
return a}if(a instanceof P.P)return a
return J.kf(a)},
oX:function(a){if(typeof a=="number")return J.c5.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bS.prototype
return a},
oY:function(a){if(typeof a=="number")return J.c5.prototype
if(typeof a=="string")return J.bH.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bS.prototype
return a},
ld:function(a){if(typeof a=="string")return J.bH.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bS.prototype
return a},
ff:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
return a}if(a instanceof P.P)return a
return J.kf(a)},
J:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.T(a).p(a,b)},
b1:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.oX(a).ar(a,b)},
dl:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.p4(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dh(a).j(a,b)},
kD:function(a,b,c){return J.ke(a).k(a,b,c)},
mX:function(a,b){return J.ld(a).H(a,b)},
mY:function(a,b,c){return J.ff(a).hO(a,b,c)},
mZ:function(a,b,c,d){return J.ff(a).il(a,b,c,d)},
n_:function(a,b){return J.ld(a).Y(a,b)},
kE:function(a,b){return J.oY(a).iu(a,b)},
kF:function(a,b){return J.ke(a).L(a,b)},
n0:function(a,b,c,d){return J.ff(a).iD(a,b,c,d)},
ll:function(a,b){return J.ke(a).J(a,b)},
lm:function(a){return J.ff(a).gc8(a)},
dm:function(a){return J.T(a).gI(a)},
bW:function(a){return J.ke(a).gV(a)},
aO:function(a){return J.dh(a).gl(a)},
n1:function(a,b){return J.ff(a).jb(a,b)},
az:function(a){return J.T(a).i(a)},
a:function a(){},
h7:function h7(){},
dL:function dL(){},
dM:function dM(){},
hS:function hS(){},
bS:function bS(){},
bI:function bI(){},
b7:function b7(a){this.$ti=a},
kQ:function kQ(a){this.$ti=a},
as:function as(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c5:function c5(){},
dK:function dK(){},
dJ:function dJ(){},
bH:function bH(){}},P={
nX:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oL()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cl(new P.jh(s),1)).observe(u,{childList:true})
return new P.jg(s,u,t)}else if(self.setImmediate!=null)return P.oM()
return P.oN()},
nY:function(a){self.scheduleImmediate(H.cl(new P.ji(H.n(a,{func:1,ret:-1})),0))},
nZ:function(a){self.setImmediate(H.cl(new P.jj(H.n(a,{func:1,ret:-1})),0))},
o_:function(a){P.kW(C.q,H.n(a,{func:1,ret:-1}))},
kW:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.e.a5(a.a,1000)
return P.o2(u<0?0:u,b)},
lT:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.be]})
u=C.e.a5(a.a,1000)
return P.o3(u<0?0:u,b)},
o2:function(a,b){var u=new P.eY()
u.eV(a,b)
return u},
o3:function(a,b){var u=new P.eY()
u.eW(a,b)
return u},
o0:function(a,b){var u,t,s
b.a=1
try{a.ev(new P.js(b),new P.jt(b),null)}catch(s){u=H.aM(s)
t=H.cp(s)
P.pa(new P.ju(b,u,t))}},
m5:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaK")
if(u>=4){t=b.bU()
b.a=a.a
b.c=a.c
P.d2(b,t)}else{t=H.f(b.c,"$ibi")
b.a=2
b.c=a
a.dh(t)}},
d2:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$iat")
g=g.b
r=s.a
q=s.b
g.toString
P.k9(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.d2(h.a,b)}g=h.a
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
if(m){H.f(o,"$iat")
g=g.b
r=o.a
q=o.b
g.toString
P.k9(i,i,g,r,q)
return}l=$.Y
if(l!=n)$.Y=n
else l=i
g=b.c
if(g===8)new P.jy(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jx(u,b,o).$0()}else if((g&2)!==0)new P.jw(h,u,b).$0()
if(l!=null)$.Y=l
g=u.b
if(!!J.T(g).$icB){if(g.a>=4){k=H.f(q.c,"$ibi")
q.c=null
b=q.bm(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.m5(g,q)
return}}j=b.b
k=H.f(j.c,"$ibi")
j.c=null
b=j.bm(k)
g=u.a
r=u.b
if(!g){H.D(r,H.w(j,0))
j.a=4
j.c=r}else{H.f(r,"$iat")
j.a=8
j.c=r}h.a=j
g=j}},
oG:function(a,b){if(H.fe(a,{func:1,args:[P.P,P.av]}))return H.n(a,{func:1,ret:null,args:[P.P,P.av]})
if(H.fe(a,{func:1,args:[P.P]}))return H.n(a,{func:1,ret:null,args:[P.P]})
throw H.e(P.kG(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oF:function(){var u,t
for(;u=$.cj,u!=null;){$.dg=null
t=u.b
$.cj=t
if(t==null)$.df=null
u.a.$0()}},
oJ:function(){$.l6=!0
try{P.oF()}finally{$.dg=null
$.l6=!1
if($.cj!=null)$.lk().$1(P.mp())}},
mk:function(a){var u=new P.em(H.n(a,{func:1,ret:-1}))
if($.cj==null){$.cj=$.df=u
if(!$.l6)$.lk().$1(P.mp())}else $.df=$.df.b=u},
oI:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cj
if(u==null){P.mk(a)
$.dg=$.df
return}t=new P.em(a)
s=$.dg
if(s==null){t.b=u
$.cj=$.dg=t}else{t.b=s.b
$.dg=s.b=t
if(t.b==null)$.df=t}},
pa:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.Y
if(C.f===u){P.kb(t,t,C.f,a)
return}u.toString
P.kb(t,t,u,H.n(u.c1(a),s))},
lS:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.Y
if(u===C.f){u.toString
return P.kW(a,b)}return P.kW(a,H.n(u.c1(b),t))},
nO:function(a,b){var u,t,s={func:1,ret:-1,args:[P.be]}
H.n(b,s)
u=$.Y
if(u===C.f){u.toString
return P.lT(a,b)}t=u.dz(b,P.be)
$.Y.toString
return P.lT(a,H.n(t,s))},
k9:function(a,b,c,d,e){var u={}
u.a=d
P.oI(new P.ka(u,e))},
mg:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.Y
if(t===c)return d.$0()
$.Y=c
u=t
try{t=d.$0()
return t}finally{$.Y=u}},
mh:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.D(e,g)
t=$.Y
if(t===c)return d.$1(e)
$.Y=c
u=t
try{t=d.$1(e)
return t}finally{$.Y=u}},
oH:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.D(e,h)
H.D(f,i)
t=$.Y
if(t===c)return d.$2(e,f)
$.Y=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Y=u}},
kb:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.c1(d):c.ir(d,-1)
P.mk(d)},
jh:function jh(a){this.a=a},
jg:function jg(a,b,c){this.a=a
this.b=b
this.c=c},
ji:function ji(a){this.a=a},
jj:function jj(a){this.a=a},
eY:function eY(){this.c=0},
jS:function jS(a,b){this.a=a
this.b=b},
jR:function jR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bi:function bi(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aK:function aK(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jr:function jr(a,b){this.a=a
this.b=b},
jv:function jv(a,b){this.a=a
this.b=b},
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
ju:function ju(a,b,c){this.a=a
this.b=b
this.c=c},
jy:function jy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jz:function jz(a){this.a=a},
jx:function jx(a,b,c){this.a=a
this.b=b
this.c=c},
jw:function jw(a,b,c){this.a=a
this.b=b
this.c=c},
em:function em(a){this.a=a
this.b=null},
ik:function ik(){},
im:function im(a,b){this.a=a
this.b=b},
io:function io(a,b){this.a=a
this.b=b},
cV:function cV(){},
il:function il(){},
be:function be(){},
at:function at(a,b){this.a=a
this.b=b},
k0:function k0(){},
ka:function ka(a,b){this.a=a
this.b=b},
jG:function jG(){},
jI:function jI(a,b,c){this.a=a
this.b=b
this.c=c},
jH:function jH(a,b){this.a=a
this.b=b},
jJ:function jJ(a,b,c){this.a=a
this.b=b
this.c=c},
nh:function(a,b){return new H.a0([a,b])},
lz:function(a,b){return new H.a0([a,b])},
nj:function(a){return H.oW(a,new H.a0([null,null]))},
nk:function(a){return new P.jD([a])},
l2:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
m7:function(a,b,c){var u=new P.jE(a,b,[c])
u.c=a.e
return u},
nd:function(a,b,c){var u,t
if(P.l7(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.i])
C.a.h($.ax,a)
try{P.ok(a,u)}finally{if(0>=$.ax.length)return H.c($.ax,-1)
$.ax.pop()}t=P.lP(b,H.mv(u,"$ih"),", ")+c
return t.charCodeAt(0)==0?t:t},
kO:function(a,b,c){var u,t
if(P.l7(a))return b+"..."+c
u=new P.ak(b)
C.a.h($.ax,a)
try{t=u
t.a=P.lP(t.a,a,", ")}finally{if(0>=$.ax.length)return H.c($.ax,-1)
$.ax.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
l7:function(a){var u,t
for(u=$.ax.length,t=0;t<u;++t)if(a===$.ax[t])return!0
return!1},
ok:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.j(b,"$ib",[P.i],"$ab")
u=a.gV(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.C())return
r=H.m(u.gM(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.C()){if(s<=5)return
if(0>=b.length)return H.c(b,-1)
q=b.pop()
if(0>=b.length)return H.c(b,-1)
p=b.pop()}else{o=u.gM(u);++s
if(!u.C()){if(s<=4){C.a.h(b,H.m(o))
return}q=H.m(o)
if(0>=b.length)return H.c(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gM(u);++s
for(;u.C();o=n,n=m){m=u.gM(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.c(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.m(o)
q=H.m(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
ni:function(a,b,c){var u=P.nh(b,c)
a.J(0,new P.hg(u,b,c))
return u},
kT:function(a){var u,t={}
if(P.l7(a))return"{...}"
u=new P.ak("")
try{C.a.h($.ax,a)
u.a+="{"
t.a=!0
J.ll(a,new P.hl(t,u))
u.a+="}"}finally{if(0>=$.ax.length)return H.c($.ax,-1)
$.ax.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jD:function jD(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d3:function d3(a){this.a=a
this.c=this.b=null},
jE:function jE(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hg:function hg(a,b,c){this.a=a
this.b=b
this.c=c},
hh:function hh(){},
z:function z(){},
hk:function hk(){},
hl:function hl(a,b){this.a=a
this.b=b},
am:function am(){},
jT:function jT(){},
hm:function hm(){},
eh:function eh(a,b){this.a=a
this.$ti=b},
jK:function jK(){},
eB:function eB(){},
f3:function f3(){},
nS:function(a,b,c,d){H.j(b,"$ib",[P.l],"$ab")
if(b instanceof Uint8Array)return P.nT(!1,b,c,d)
return},
nT:function(a,b,c,d){var u,t,s=$.mS()
if(s==null)return
u=0===c
if(u&&!0)return P.l_(s,b)
t=b.length
d=P.bN(c,d,t)
if(u&&d===t)return P.l_(s,b)
return P.l_(s,b.subarray(c,d))},
l_:function(a,b){if(P.nV(b))return
return P.nW(a,b)},
nW:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aM(t)}return},
nV:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nU:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aM(t)}return},
mj:function(a,b,c){var u,t,s
H.j(a,"$ib",[P.l],"$ab")
for(u=J.dh(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.aq()
if((s&127)!==s)return t-b}return c-b},
ln:function(a,b,c,d,e,f){if(C.e.ax(f,4)!==0)throw H.e(P.a2("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.e(P.a2("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.e(P.a2("Invalid base64 padding, more than two '=' characters",a,b))},
fs:function fs(){},
ft:function ft(){},
c0:function c0(){},
c2:function c2(){},
fS:function fS(){},
iY:function iY(){},
j_:function j_(){},
k_:function k_(a){this.b=0
this.c=a},
iZ:function iZ(a){this.a=a},
jZ:function jZ(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fg:function(a,b,c){var u
H.n(b,{func:1,ret:P.l,args:[P.i]})
u=H.nA(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.e(P.a2(a,null,null))},
nb:function(a){if(a instanceof H.cw)return a.i(0)
return"Instance of '"+H.c8(a)+"'"},
nl:function(a,b,c){var u,t
H.D(b,c)
u=J.ne(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.k(u,t,b)
return H.j(u,"$ib",[c],"$ab")},
lA:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bW(a);u.C();)C.a.h(s,H.D(u.gM(u),c))
if(b)return s
return H.j(J.kP(s),"$ib",t,"$ab")},
cW:function(a,b,c){var u,t=P.l
H.j(a,"$ih",[t],"$ah")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.j(a,"$ib7",[t],"$ab7")
u=a.length
c=P.bN(b,c,u)
return H.lM(b>0||c<u?C.a.cH(a,b,c):a)}if(!!J.T(a).$icN)return H.nC(a,b,P.bN(b,c,a.length))
return P.nK(a,b,c)},
nK:function(a,b,c){var u,t,s,r,q=null
H.j(a,"$ih",[P.l],"$ah")
if(b<0)throw H.e(P.aj(b,0,J.aO(a),q,q))
u=c==null
if(!u&&c<b)throw H.e(P.aj(c,b,J.aO(a),q,q))
t=J.bW(a)
for(s=0;s<b;++s)if(!t.C())throw H.e(P.aj(b,0,s,q,q))
r=[]
if(u)for(;t.C();)r.push(t.gM(t))
else for(s=b;s<c;++s){if(!t.C())throw H.e(P.aj(c,b,s,q,q))
r.push(t.gM(t))}return H.lM(r)},
nE:function(a){return new H.h8(a,H.nf(a,!1,!0,!1))},
lP:function(a,b,c){var u=J.bW(b)
if(!u.C())return a
if(c.length===0){do a+=H.m(u.gM(u))
while(u.C())}else{a+=H.m(u.gM(u))
for(;u.C();)a=a+c+H.m(u.gM(u))}return a},
kZ:function(){var u=H.ns()
if(u!=null)return P.nR(u)
throw H.e(P.H("'Uri.base' is not supported"))},
jY:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.j(a,"$ib",[P.l],"$ab")
if(c===C.h){u=$.mV().b
if(typeof b!=="string")H.x(H.ay(b))
u=u.test(b)}else u=!1
if(u)return b
H.D(b,H.aB(c,"c0",0))
t=c.giC().c9(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dZ(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
n8:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
n9:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dw:function(a){if(a>=10)return""+a
return"0"+a},
lt:function(a,b){return new P.bB(1e6*b+1000*a)},
dD:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.az(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nb(a)},
dn:function(a){return new P.b2(!1,null,null,a)},
kG:function(a,b,c){return new P.b2(!0,a,b,c)},
e0:function(a,b){return new P.c9(null,null,!0,a,b,"Value not in range")},
aj:function(a,b,c,d,e){return new P.c9(b,c,!0,a,d,"Invalid value")},
bN:function(a,b,c){if(0>a||a>c)throw H.e(P.aj(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.e(P.aj(b,a,c,"end",null))
return b}return c},
lN:function(a,b){if(typeof a!=="number")return a.R()
if(a<0)throw H.e(P.aj(a,0,null,b,null))},
W:function(a,b,c,d,e){var u=H.a_(e==null?J.aO(b):e)
return new P.h6(u,!0,a,c,"Index out of range")},
H:function(a){return new P.iR(a)},
iP:function(a){return new P.iO(a)},
c1:function(a){return new P.fC(a)},
y:function(a){return new P.eu(a)},
a2:function(a,b,c){return new P.h1(a,b,c)},
nm:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.l]})
u=H.d([],[c])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.k(u,t,b.$1(t))
return u},
lg:function(a){H.p8(a)},
nR:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.H(a,4)^58)*3|C.b.H(a,0)^100|C.b.H(a,1)^97|C.b.H(a,2)^116|C.b.H(a,3)^97)>>>0
if(u===0)return P.lV(e<e?C.b.A(a,0,e):a,5,f).gex()
else if(u===32)return P.lV(C.b.A(a,5,e),0,f).gex()}t=new Array(8)
t.fixed$length=Array
s=H.d(t,[P.l])
C.a.k(s,0,0)
C.a.k(s,1,-1)
C.a.k(s,2,-1)
C.a.k(s,7,-1)
C.a.k(s,3,0)
C.a.k(s,4,0)
C.a.k(s,5,e)
C.a.k(s,6,e)
if(P.mi(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.jr()
if(r>=0)if(P.mi(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.v()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.R()
if(typeof n!=="number")return H.u(n)
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
u=2}a=i+C.b.A(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.aV(a,o,n,"/");++e
n=h}k="file"}else if(C.b.ai(a,"http",0)){if(t&&p+3===o&&C.b.ai(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aV(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.ai(a,"https",0)){if(t&&p+4===o&&C.b.ai(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aV(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.A(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jL(a,r,q,p,o,n,m,k)}return P.o4(a,0,e,r,q,p,o,n,m,k)},
lX:function(a){var u=P.i
return C.a.iG(H.d(a.split("&"),[u]),P.lz(u,u),new P.iW(C.h),[P.C,P.i,P.i])},
nQ:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iT(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.Y(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fg(C.b.A(a,s,t),n,n)
if(typeof p!=="number")return p.ar()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.c(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fg(C.b.A(a,s,c),n,n)
if(typeof p!=="number")return p.ar()
if(p>255)k.$2(l,s)
if(r>=u)return H.c(j,r)
j[r]=p
return j},
lW:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.iU(a)
t=new P.iV(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.l])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.Y(a,r)
if(n===58){if(r===b){++r
if(C.b.Y(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaK(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.nQ(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.c(j,g)
j[g]=0
d=g+1
if(d>=i)return H.c(j,d)
j[d]=0
g+=2}else{d=C.e.aS(f,8)
if(g<0||g>=i)return H.c(j,g)
j[g]=d
d=g+1
if(d>=i)return H.c(j,d)
j[d]=f&255
g+=2}}return j},
o4:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.ob(a,b,d)
else{if(d===b)P.dc(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oc(a,u,e-1):""
s=P.o8(a,e,f,!1)
if(typeof f!=="number")return f.v()
r=f+1
if(typeof g!=="number")return H.u(g)
q=r<g?P.oa(P.fg(C.b.A(a,r,g),new P.jU(a,f),n),j):n}else{q=n
s=q
t=""}p=P.o9(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.R()
o=h<i?P.l3(a,h+1,i,n):n
return new P.ch(j,t,s,q,p,o,i<c?P.o7(a,i+1,c):n)},
m8:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dc:function(a,b,c){throw H.e(P.a2(c,a,b))},
oa:function(a,b){if(a!=null&&a===P.m8(b))return
return a},
o8:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.Y(a,b)===91){if(typeof c!=="number")return c.D()
u=c-1
if(C.b.Y(a,u)!==93)P.dc(a,b,"Missing end `]` to match `[` in host")
P.lW(a,b+1,u)
return C.b.A(a,b,c).toLowerCase()}if(typeof c!=="number")return H.u(c)
t=b
for(;t<c;++t)if(C.b.Y(a,t)===58){P.lW(a,b,c)
return"["+a+"]"}return P.oe(a,b,c)},
oe:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.u(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.Y(a,u)
if(q===37){p=P.me(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ak("")
n=C.b.A(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.A(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.c(C.w,o)
o=(C.w[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ak("")
if(t<u){s.a+=C.b.A(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.c(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.dc(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.Y(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ak("")
n=C.b.A(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.m9(q)
u+=l
t=u}}}}if(s==null)return C.b.A(a,b,c)
if(t<c){n=C.b.A(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
ob:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mb(C.b.H(a,b)))P.dc(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.H(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.c(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dc(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.A(a,b,c)
return P.o5(t?a.toLowerCase():a)},
o5:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oc:function(a,b,c){return P.dd(a,b,c,C.R,!1)},
o9:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dd(a,b,c,C.x,!0):C.j.jK(d,new P.jV(),P.i).q(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.ah(u,"/"))u="/"+u
return P.od(u,e,f)},
od:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.ah(a,"/"))return P.of(a,!u||c)
return P.og(a)},
l3:function(a,b,c,d){var u,t={}
H.j(d,"$iC",[P.i,null],"$aC")
if(a!=null){if(d!=null)throw H.e(P.dn("Both query and queryParameters specified"))
return P.dd(a,b,c,C.l,!0)}if(d==null)return
u=new P.ak("")
t.a=""
d.J(0,new P.jW(new P.jX(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
o7:function(a,b,c){return P.dd(a,b,c,C.l,!0)},
me:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.Y(a,b+1)
t=C.b.Y(a,p)
s=H.ki(u)
r=H.ki(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.e.aS(q,4)
if(p>=8)return H.c(C.n,p)
p=(C.n[p]&1<<(q&15))!==0}else p=!1
if(p)return H.dZ(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.A(a,b,b+3).toUpperCase()
return},
m9:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.l])
C.a.k(t,0,37)
C.a.k(t,1,C.b.H(o,a>>>4))
C.a.k(t,2,C.b.H(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.l])
for(q=0;--r,r>=0;s=128){p=C.e.i_(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.H(o,p>>>4))
C.a.k(t,q+2,C.b.H(o,p&15))
q+=3}}return P.cW(t,0,null)},
dd:function(a,b,c,d,e){var u=P.md(a,b,c,H.j(d,"$ib",[P.l],"$ab"),e)
return u==null?C.b.A(a,b,c):u},
md:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.j(d,"$ib",[P.l],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.R()
if(typeof c!=="number")return H.u(c)
if(!(t<c))break
c$0:{q=C.b.Y(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.c(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.me(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.c(C.k,p)
p=(C.k[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dc(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.Y(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.m9(q)}}if(r==null)r=new P.ak("")
r.a+=C.b.A(a,s,t)
r.a+=H.m(o)
if(typeof n!=="number")return H.u(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.R()
if(s<c)r.a+=C.b.A(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mc:function(a){if(C.b.ah(a,"."))return!0
return C.b.e5(a,"/.")!==-1},
og:function(a){var u,t,s,r,q,p,o
if(!P.mc(a))return a
u=H.d([],[P.i])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.J(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.c(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.q(u,"/")},
of:function(a,b){var u,t,s,r,q,p
if(!P.mc(a))return!b?P.ma(a):a
u=H.d([],[P.i])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaK(u)!==".."){if(0>=u.length)return H.c(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.c(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaK(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.c(u,0)
C.a.k(u,0,P.ma(u[0]))}return C.a.q(u,"/")},
ma:function(a){var u,t,s,r=a.length
if(r>=2&&P.mb(J.mX(a,0)))for(u=1;u<r;++u){t=C.b.H(a,u)
if(t===58)return C.b.A(a,0,u)+"%3A"+C.b.aj(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.c(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
o6:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.H(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.e(P.dn("Invalid URL encoding"))}}return u},
l4:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.H(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.A(a,b,c)
else r=new H.a4(C.b.A(a,b,c))}else{r=H.d([],[P.l])
for(s=a.length,q=b;q<c;++q){t=C.b.H(a,q)
if(t>127)throw H.e(P.dn("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.e(P.dn("Truncated URI"))
C.a.h(r,P.o6(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.j(r,"$ib",[P.l],"$ab")
return new P.iZ(!1).c9(r)},
mb:function(a){var u=a|32
return 97<=u&&u<=122},
lV:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.l])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.H(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.e(P.a2(m,a,t))}}if(s<0&&t>b)throw H.e(P.a2(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.H(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaK(l)
if(r!==44||t!==p+7||!C.b.ai(a,"base64",p+1))throw H.e(P.a2("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.B.iR(0,a,o,u)
else{n=P.md(a,o,u,C.l,!0)
if(n!=null)a=C.b.aV(a,o,u,n)}return new P.iS(a,l,c)},
oi:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nm(22,new P.k4(),P.Q),n=new P.k3(o),m=new P.k5(),l=new P.k6(),k=H.f(n.$2(0,225),"$iQ")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(14,225),"$iQ")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(15,225),"$iQ")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(1,225),"$iQ")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(2,235),"$iQ")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(3,235),"$iQ")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(4,229),"$iQ")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(5,229),"$iQ")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(6,231),"$iQ")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(7,231),"$iQ")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.f(n.$2(8,8),"$iQ"),"]",5)
k=H.f(n.$2(9,235),"$iQ")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(16,235),"$iQ")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(17,235),"$iQ")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(10,235),"$iQ")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(18,235),"$iQ")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(19,235),"$iQ")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(11,235),"$iQ")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(12,236),"$iQ")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.f(n.$2(13,237),"$iQ")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.f(n.$2(20,245),"$iQ"),"az",21)
k=H.f(n.$2(21,245),"$iQ")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mi:function(a,b,c,d,e){var u,t,s,r,q
H.j(e,"$ib",[P.l],"$ab")
u=$.mW()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.c(u,d)
s=u[d]
r=C.b.H(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.c(s,r)
q=s[r]
d=q&31
C.a.k(e,q>>>5,t)}return d},
Z:function Z(){},
aA:function aA(a,b){this.a=a
this.b=b},
r:function r(){},
bB:function bB(a){this.a=a},
fP:function fP(){},
fQ:function fQ(){},
bC:function bC(){},
fl:function fl(){},
dX:function dX(){},
b2:function b2(a,b,c,d){var _=this
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
h6:function h6(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iR:function iR(a){this.a=a},
iO:function iO(a){this.a=a},
ig:function ig(a){this.a=a},
fC:function fC(a){this.a=a},
hR:function hR(){},
e7:function e7(){},
fJ:function fJ(a){this.a=a},
eu:function eu(a){this.a=a},
h1:function h1(a,b,c){this.a=a
this.b=b
this.c=c},
l:function l(){},
h:function h(){},
b6:function b6(){},
b:function b(){},
C:function C(){},
K:function K(){},
ac:function ac(){},
P:function P(){},
av:function av(){},
i:function i(){},
ak:function ak(a){this.a=a},
iW:function iW(a){this.a=a},
iT:function iT(a){this.a=a},
iU:function iU(a){this.a=a},
iV:function iV(a,b){this.a=a
this.b=b},
ch:function ch(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jU:function jU(a,b){this.a=a
this.b=b},
jV:function jV(){},
jX:function jX(a,b){this.a=a
this.b=b},
jW:function jW(a){this.a=a},
iS:function iS(a,b,c){this.a=a
this.b=b
this.c=c},
k4:function k4(){},
k3:function k3(a){this.a=a},
k5:function k5(){},
k6:function k6(){},
jL:function jL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jn:function jn(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oR:function(a){var u,t=J.T(a)
if(!!t.$ibn){u=t.gdF(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.f2(a.data,a.height,a.width)},
oQ:function(a){if(a instanceof P.f2)return{data:a.a,height:a.b,width:a.c}
return a},
bx:function(a){var u,t,s,r,q
if(a==null)return
u=P.lz(P.i,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r){q=H.O(t[r])
u.k(0,q,a[q])}return u},
oP:function(a){var u={}
a.J(0,new P.kc(u))
return u},
jN:function jN(){},
jP:function jP(a,b){this.a=a
this.b=b},
f2:function f2(a,b,c){this.a=a
this.b=b
this.c=c},
kc:function kc(a){this.a=a},
jO:function jO(a,b){this.a=a
this.b=b},
fY:function fY(a,b){this.a=a
this.b=b},
fZ:function fZ(){},
h_:function h_(){},
jC:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
o1:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jF:function jF(){},
an:function an(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b9:function b9(){},
hb:function hb(){},
bc:function bc(){},
hP:function hP(){},
hV:function hV(){},
ip:function ip(){},
q:function q(){},
bf:function bf(){},
iD:function iD(){},
ez:function ez(){},
eA:function eA(){},
eJ:function eJ(){},
eK:function eK(){},
eU:function eU(){},
eV:function eV(){},
f0:function f0(){},
f1:function f1(){},
Q:function Q(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(a){this.a=a},
fq:function fq(){},
bX:function bX(){},
hQ:function hQ(){},
en:function en(){},
dq:function dq(){},
dF:function dF(){},
e_:function e_(){},
e1:function e1(){},
ca:function ca(){},
e3:function e3(){},
e8:function e8(){},
ef:function ef(){},
ie:function ie(){},
eQ:function eQ(){},
eR:function eR(){}},W={
kJ:function(){var u=document.createElement("canvas")
return u},
na:function(a){H.f(a,"$ik")
return"wheel"},
nc:function(a){var u,t=document.createElement("input"),s=H.f(t,"$icE")
try{s.type=a}catch(u){H.aM(u)}return s},
jB:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m6:function(a,b,c,d){var u=W.jB(W.jB(W.jB(W.jB(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ab:function(a,b,c,d,e){var u=W.mm(new W.jq(c),W.o)
if(u!=null&&!0)J.mZ(a,b,u,!1)
return new W.jp(a,b,u,!1,[e])},
mm:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.Y
if(u===C.f)return a
return u.dz(a,b)},
v:function v(){},
fh:function fh(){},
fj:function fj(){},
fk:function fk(){},
bY:function bY(){},
c_:function c_(){},
cu:function cu(){},
bz:function bz(){},
cx:function cx(){},
fF:function fF(){},
S:function S(){},
cy:function cy(){},
fG:function fG(){},
b4:function b4(){},
b5:function b5(){},
fH:function fH(){},
fI:function fI(){},
fK:function fK(){},
dz:function dz(){},
fM:function fM(){},
dA:function dA(){},
dB:function dB(){},
fN:function fN(){},
fO:function fO(){},
jl:function jl(a,b){this.a=a
this.b=b},
a1:function a1(){},
o:function o(){},
k:function k(){},
aD:function aD(){},
cA:function cA(){},
fX:function fX(){},
h0:function h0(){},
aP:function aP(){},
h4:function h4(){},
c4:function c4(){},
bn:function bn(){},
cD:function cD(){},
cE:function cE(){},
cv:function cv(){},
b8:function b8(){},
hi:function hi(){},
hB:function hB(){},
cJ:function cJ(){},
hC:function hC(){},
hD:function hD(a){this.a=a},
hE:function hE(){},
hF:function hF(a){this.a=a},
aQ:function aQ(){},
hG:function hG(){},
ah:function ah(){},
jk:function jk(a){this.a=a},
I:function I(){},
cO:function cO(){},
aR:function aR(){},
hT:function hT(){},
i0:function i0(){},
i1:function i1(a){this.a=a},
i3:function i3(){},
aS:function aS(){},
ic:function ic(){},
aT:function aT(){},
id:function id(){},
aU:function aU(){},
ii:function ii(){},
ij:function ij(a){this.a=a},
aH:function aH(){},
bt:function bt(){},
aV:function aV(){},
aI:function aI(){},
ir:function ir(){},
is:function is(){},
iy:function iy(){},
aX:function aX(){},
aY:function aY(){},
iB:function iB(){},
iC:function iC(){},
bQ:function bQ(){},
iX:function iX(){},
jc:function jc(){},
bh:function bh(){},
d1:function d1(){},
jm:function jm(){},
ep:function ep(){},
jA:function jA(){},
eG:function eG(){},
jM:function jM(){},
jQ:function jQ(){},
jo:function jo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
l1:function l1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jp:function jp(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jq:function jq(a){this.a=a},
F:function F(){},
dE:function dE(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
eo:function eo(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eH:function eH(){},
eI:function eI(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
d8:function d8(){},
d9:function d9(){},
eO:function eO(){},
eP:function eP(){},
eT:function eT(){},
eW:function eW(){},
eX:function eX(){},
da:function da(){},
db:function db(){},
eZ:function eZ(){},
f_:function f_(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){}},O={
fA:function(a){var u=new O.V([a])
u.bh(a)
return u},
V:function V(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cH:function cH(){this.b=this.a=null},
lv:function(a,b){var u,t,s,r=new O.dI()
r.r=0
r.scu(null)
r.sc2(null)
if(a==null){u=$.lY
if(u==null){u=new V.U(1,0)
$.lY=u
t=u}else t=u}else t=a
if(!J.J(r.d,t)){s=r.d
r.d=t
u=new D.t("blurDirection",s,t,[V.U])
u.b=!0
r.u(u)}r.sdD(b)
r.sb2(null)
r.sc3(0)
return r},
lB:function(){var u,t,s=new O.dT()
s.sf2(O.fA(V.ae))
s.e.aM(s.gfO(),s.gfQ())
u=new O.ba(s,"emission")
u.c=new A.af(!1,!1,!1)
u.f=new V.a6(0,0,0)
s.f=u
u=new O.ba(s,"ambient")
u.c=new A.af(!1,!1,!1)
u.f=new V.a6(0,0,0)
s.r=u
u=new O.ba(s,"diffuse")
u.c=new A.af(!1,!1,!1)
u.f=new V.a6(0,0,0)
s.x=u
u=new O.ba(s,"invDiffuse")
u.c=new A.af(!1,!1,!1)
u.f=new V.a6(0,0,0)
s.y=u
u=new O.hu(s,"specular")
u.c=new A.af(!1,!1,!1)
u.f=new V.a6(0,0,0)
u.ch=100
s.z=u
u=new O.hq(s,"bump")
u.c=new A.af(!1,!1,!1)
s.Q=u
s.ch=null
u=new O.ba(s,"reflect")
u.c=new A.af(!1,!1,!1)
u.f=new V.a6(0,0,0)
s.cx=u
u=new O.ht(s,"refract")
u.c=new A.af(!1,!1,!1)
u.f=new V.a6(0,0,0)
u.ch=1
s.cy=u
u=new O.hp(s,"alpha")
u.c=new A.af(!1,!1,!1)
u.f=1
s.db=u
u=new D.dO()
u.bh(D.ag)
u.seP(H.d([],[D.dy]))
u.shF(H.d([],[D.bL]))
u.seS(H.d([],[D.e6]))
u.y=u.x=null
u.cC(u.gfM(),u.ghp(),u.ght())
s.dx=u
t=new O.hs()
t.b=new V.ad(0,0,0,0)
t.c=1
t.d=10
t.e=!1
s.dy=t
t=u.x
u=t==null?u.x=D.L():t
u.h(0,s.ghQ())
u=s.dx
t=u.y
u=t==null?u.y=D.L():t
u.h(0,s.ga4())
s.fr=null
return s},
lQ:function(a,b){var u,t,s,r=new O.aW(),q=r.a
r.a=b
b.gn().h(0,r.ga4())
u=new D.t("texture",q,r.a,[T.bP])
u.b=!0
r.u(u)
t=V.bq()
if(!J.J(r.b,t)){q=r.b
r.b=t
u=new D.t("colorMatrix",q,t,[V.ae])
u.b=!0
r.u(u)}s=V.hW()
if(!J.J(r.c,s)){q=r.c
r.c=s
u=new D.t("source",q,s,[V.bO])
u.b=!0
r.u(u)}if(!J.J(r.d,a)){q=r.d
r.d=a
u=new D.t("destination",q,a,[V.bO])
u.b=!0
r.u(u)}if(r.e!==!1){r.e=!1
u=new D.t("flip",!0,!1,[P.Z])
u.b=!0
r.u(u)}r.f=null
return r},
fL:function fL(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dI:function dI(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dT:function dT(){var _=this
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
cF:function cF(){},
hq:function hq(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ba:function ba(a,b){var _=this
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
bu:function bu(){},
e9:function e9(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aW:function aW(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
kL:function(a){var u=new E.al()
u.a=""
u.b=!0
u.seO(0,O.fA(E.al))
u.y.aM(u.giS(),u.giV())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sbG(0,a)
u.sao(null)
u.sba(null)
return u},
nF:function(a,b){var u=new E.hX(a)
u.eK(a,b)
return u},
nN:function(a,b,c,d,e){var u,t,s=J.T(a)
if(!!s.$ic_)return E.lR(a,!0,!0,!0,!1)
u=W.kJ()
t=u.style
t.width="100%"
t.height="100%"
s.gc8(a).h(0,u)
return E.lR(u,!0,!0,!0,!1)},
lR:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.eb(),j=H.f(C.i.cB(a,"webgl2",P.nj(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ica")
if(j==null)H.x(P.y("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.nF(j,a)
u=new T.iu(j)
u.b=H.a_(j.getParameter(3379))
H.a_(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.ei(a)
t=new X.ha()
t.c=new X.aE(!1,!1,!1)
t.shI(P.nk(P.l))
u.b=t
t=new X.hH(u)
t.f=0
t.r=V.bs()
t.x=V.bs()
t.ch=t.Q=1
u.c=t
t=new X.hj(u)
t.r=0
t.x=V.bs()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iA(u)
t.f=V.bs()
t.r=V.bs()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfi(H.d([],[[P.cV,P.P]]))
t=u.z
s=document
r=W.ah
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ab(s,"contextmenu",H.n(u.gfY(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ab(a,"focus",H.n(u.gh7(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ab(a,"blur",H.n(u.gfS(),o),!1,p))
t=u.z
n=W.b8
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ab(s,"keyup",H.n(u.ghb(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ab(s,"keydown",H.n(u.gh9(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ab(a,"mousedown",H.n(u.ghf(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,"mouseup",H.n(u.ghj(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,l,H.n(u.ghh(),q),!1,r))
n=u.z
m=W.bh;(n&&C.a).h(n,W.ab(a,H.O(W.na(a)),H.n(u.ghl(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ab(s,l,H.n(u.gh_(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ab(s,"mouseup",H.n(u.gh1(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ab(s,"pointerlockchange",H.n(u.ghn(),o),!1,p))
p=u.z
o=W.aY
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ab(a,"touchstart",H.n(u.ghD(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchend",H.n(u.ghz(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchmove",H.n(u.ghB(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aA(Date.now(),!1)
k.cy=0
k.dj()
return k},
fu:function fu(){},
al:function al(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hX:function hX(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hY:function hY(a){this.a=a},
hZ:function hZ(a){this.a=a},
i_:function i_(a){this.a=a},
eb:function eb(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ix:function ix(a){this.a=a}},Z={
l0:function(a,b,c){var u
H.j(c,"$ib",[P.l],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.ci(c)),35044)
a.bindBuffer(b,null)
return new Z.el(b,u)},
aJ:function(a){return new Z.b_(a)},
el:function el(a,b){this.a=a
this.b=b},
dr:function dr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
cg:function cg(a){this.a=a},
bm:function bm(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bE:function bE(a,b,c){this.a=a
this.b=b
this.c=c},
b_:function b_(a){this.a=a}},D={
L:function(){var u=new D.bD()
u.sac(null)
u.saQ(null)
u.c=null
u.d=0
return u},
fx:function fx(){},
bD:function bD(){var _=this
_.d=_.c=_.b=_.a=null},
fU:function fU(a){this.a=a},
fV:function fV(a){this.a=a},
B:function B(){this.b=null},
bF:function bF(a){this.b=null
this.$ti=a},
bG:function bG(a){this.b=null
this.$ti=a},
t:function t(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
dy:function dy(){},
ag:function ag(){},
dO:function dO(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
bL:function bL(){var _=this
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e6:function e6(){}},X={ds:function ds(a,b){this.a=a
this.b=b},dN:function dN(a,b){this.a=a
this.b=b},ha:function ha(){var _=this
_.d=_.c=_.b=_.a=null},dQ:function dQ(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hj:function hj(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aE:function aE(a,b,c){this.a=a
this.b=b
this.c=c},bJ:function bJ(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hH:function hH(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cK:function cK(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hU:function hU(){},ed:function ed(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iA:function iA(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ei:function ei(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kH:function(a,b,c,d){var u,t,s,r,q=new X.fr()
q.d=q.c=q.b=q.a=512
q.e=!0
q.f=!1
q.x=q.r=1
q.ch=T.kV(null)
q.cx=new V.ad(0,0,0,1)
q.cy=!0
q.db=2000
q.dx=!0
q.dy=V.hW()
q.sap(0,512)
q.sal(0,512)
u=new V.ad(0,0,0,1)
if(!q.cx.p(0,u)){t=q.cx
q.cx=u
s=new D.t("color",t,u,[V.ad])
s.b=!0
q.a0(s)}if(q.cy!==d){q.cy=d
s=new D.t("clearColor",!d,d,[P.Z])
s.b=!0
q.a0(s)}s=q.db
if(!(Math.abs(s-2000)<$.G().a)){q.db=2000
s=new D.t("depth",s,2000,[P.r])
s.b=!0
q.a0(s)}if(!q.f){q.f=!0
s=new D.t("autoResize",!1,!0,[P.Z])
s.b=!0
q.a0(s)}s=q.r
if(!(Math.abs(s-b)<$.G().a)){q.r=b
s=new D.t("autoResizeScalarX",s,b,[P.r])
s.b=!0
q.a0(s)}s=q.x
if(!(Math.abs(s-c)<$.G().a)){q.x=c
s=new D.t("autoResizeScalarY",s,c,[P.r])
s.b=!0
q.a0(s)}r=V.hW()
if(!J.J(q.dy,r)){t=q.dy
q.dy=r
s=new D.t("region",t,r,[V.bO])
s.b=!0
q.a0(s)}return q},
kM:function(a,b){var u=new X.h2(),t=new V.ad(0,0,0,1)
u.a=t
u.b=a
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.hW()
u.r=t
return u},
lI:function(){var u,t=new X.dY()
t.c=1.0471975511965976
t.d=0.1
t.e=2000
t.sba(null)
u=t.c
if(!(Math.abs(u-1.0471975511965976)<$.G().a)){t.c=1.0471975511965976
u=new D.t("fov",u,1.0471975511965976,[P.r])
u.b=!0
t.a0(u)}u=t.d
if(!(Math.abs(u-0.1)<$.G().a)){t.d=0.1
u=new D.t("near",u,0.1,[P.r])
u.b=!0
t.a0(u)}u=t.e
if(!(Math.abs(u-2000)<$.G().a)){t.e=2000
u=new D.t("far",u,2000,[P.r])
u.b=!0
t.a0(u)}return t},
fr:function fr(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bZ:function bZ(){},
h2:function h2(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h5:function h5(){this.b=this.a=null},
dY:function dY(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cX:function cX(){}},V={
kC:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.ax(a-b,u)
return(a<0?a+u:a)+b},
N:function(a,b,c){if(a==null)return C.b.an("null",c)
return C.b.an(C.d.ew(Math.abs(a-0)<$.G().a?0:a,b),c+b+1)},
cn:function(a,b,c){var u,t,s,r,q,p
H.j(a,"$ib",[P.r],"$ab")
u=H.d([],[P.i])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.A)(a),++r){q=V.N(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.c(u,p)
C.a.k(u,p,C.b.an(u[p],s))}return u},
di:function(a){return C.d.ji(Math.pow(2,C.O.b7(Math.log(H.oO(a))/Math.log(2))))},
bq:function(){var u=$.cI
return u==null?$.cI=V.bb(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bb:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ae(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lF:function(a,b,c){return V.bb(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lD:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bb(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
lE:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bb(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
bs:function(){var u=$.lK
return u==null?$.lK=new V.a8(0,0):u},
nq:function(){var u=$.cP
return u==null?$.cP=new V.a9(0,0,0):u},
hW:function(){var u=$.cS
return u==null?$.cS=V.cR(0,0,1,1):u},
cR:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.bO(a,b,c,d)},
d0:function(){var u=$.m2
return u==null?$.m2=new V.R(0,0,0):u},
m4:function(){var u=$.m3
return u==null?$.m3=new V.bw(1,0.00390625,0.0000152587890625,0):u},
a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fT:function fT(a){this.a=a},
cG:function cG(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ae:function ae(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a8:function a8(a,b){this.a=a
this.b=b},
a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},
bd:function bd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bO:function bO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
U:function U(a,b){this.a=a
this.b=b},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
bw:function bw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ao:function(a){var u=new V.i4()
u.eL(a)
return u},
fi:function fi(){},
bp:function bp(){},
dR:function dR(){},
br:function br(){this.a=null},
i4:function i4(){this.a=null},
cU:function cU(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ec:function ec(a,b,c){this.a=a
this.b=b
this.c=c},
cY:function cY(a){this.b=a
this.c=null},
iz:function iz(){this.c=this.b=this.a=null},
cZ:function cZ(a){this.b=a
this.a=this.c=null},
pb:function(a){P.nO(C.M,new V.kx(a))},
nH:function(a){var u=new V.i8()
u.eM(a,!0)
return u},
fy:function fy(a){this.a=a
this.d=this.c=null},
fz:function fz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kx:function kx(a){this.a=a},
i8:function i8(){this.b=this.a=null},
ia:function ia(a){this.a=a},
i9:function i9(a){this.a=a}},U={
lr:function(){var u=new U.fB()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
ls:function(a){var u=new U.du()
u.a=a
return u},
lw:function(a){var u=new U.cC()
u.bh(U.ai)
u.aM(u.geT(),u.ghr())
u.b1(0,a)
u.e=null
u.f=V.bq()
u.r=0
return u},
fB:function fB(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
du:function du(){this.b=this.a=null},
cC:function cC(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ai:function ai(){},
e2:function e2(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ej:function ej(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ek:function ek(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
kK:function(a,b){var u,t,s,r=new M.dv()
r.a=!0
u=E.kL(null)
u.sbG(0,F.mC())
r.e=u
t=new X.h5()
s=r.b
r.b=t
t.gn().h(0,r.gW())
u=new D.t("camera",s,r.b,[X.bZ])
u.b=!0
r.T(u)
r.saL(0,a)
r.sao(b)
return r},
lu:function(a){var u,t=new M.dC()
t.a=!0
t.sf6(0,O.fA(E.al))
t.e.aM(t.gfU(),t.gfW())
t.y=t.x=t.r=t.f=null
u=X.kM(!0,null)
t.sc7(null)
t.saL(0,u)
t.sao(null)
t.e.b1(0,a)
return t},
dt:function dt(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
dv:function dv(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dC:function dC(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dG:function dG(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
au:function au(){}},A={
nn:function(a,b){var u=a.aJ,t=new A.dS(b,u)
t.bi(b,u)
t.eJ(a,b)
return t},
no:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.j(a9,"$ib",[A.aC],"$ab")
H.j(b0,"$ib",[A.aF],"$ab")
H.j(b1,"$ib",[A.aG],"$ab")
u="MaterialLight_"+a0.gaw(a0)+a1.gaw(a1)+a2.gaw(a2)+a3.gaw(a3)+a4.gaw(a4)+a5.gaw(a5)+a6.gaw(a6)+a7.gaw(a7)+a8.gaw(a8)+"_"
u+=a?"1":"0"
u+=b?"1":"0"
u+=c?"1":"0"
u=u+"0_"+e
t=a9.length
if(t>0){u+="_Dir"
for(s=0;s<a9.length;a9.length===t||(0,H.A)(a9),++s)u+="_"+H.m(a9[s].a)}t=b0.length
if(t>0){u+="_Point"
for(s=0;s<b0.length;b0.length===t||(0,H.A)(b0),++s)u+="_"+H.m(b0[s].a)}t=b1.length
if(t>0){u+="_Spot"
for(s=0;s<b1.length;b1.length===t||(0,H.A)(b1),++s)u+="_"+H.m(b1[s].a)}for(t=a9.length,r=0,q=!1,s=0;s<t;++s,q=!0)r+=a9[s].b
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
f=$.ar()
if(k){t=$.b0()
f=new Z.b_(f.a|t.a)}if(j){t=$.bl()
f=new Z.b_(f.a|t.a)}if(i){t=$.aN()
f=new Z.b_(f.a|t.a)}if(h){t=$.bk()
f=new Z.b_(f.a|t.a)}return new A.hr(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,r,o,l,o,q,g,!0,!1,!1,n,q,m,k,j,i,!1,h,a,!1,c,!1,e,u.charCodeAt(0)==0?u:u,f)},
k7:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
k8:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.k7(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.kA(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
oo:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.k7(b,t,"emission")
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
ol:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.k8(b,t,"ambient")
b.a+="\n"},
om:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.k8(b,t,"diffuse")
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
op:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.k8(b,t,"invDiffuse")
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
ov:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.k8(b,t,"specular")
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
or:function(a,b){var u,t,s
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
ot:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.k7(b,t,"reflect")
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
ou:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.k7(b,t,"refract")
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
on:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.m(u)
s=A.kA(t)
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
r=[P.i]
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
os:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.m(u)
s=A.kA(t)
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
c.a=r+"\n"}r=[P.i]
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
ow:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.m(u)
s=A.kA(t)
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
c.a=u+"\n"}u=[P.i]
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
oq:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.d([],[P.i])
u=a.b
if(u.a||u.b||!1)C.a.h(t,"ambientColor")
u=a.c
if(u.a||u.b||!1)C.a.h(t,"diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)C.a.h(t,"invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)C.a.h(t,"specular(norm, litVec)")
u=b.a+="   return "+C.a.q(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
ox:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.ak("")
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
A.oo(a,j)
A.ol(a,j)
A.om(a,j)
A.op(a,j)
A.ov(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.ot(a,j)
A.ou(a,j)}A.or(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.A)(q),++o)A.on(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.A)(q),++o)A.os(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.A)(q),++o)A.ow(a,q[o],j)
A.oq(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.d([],[P.i])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.A)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aj(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.A)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aj(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.A)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aj(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)C.a.h(n,"emissionColor()")
u=a.r
if(u.a||u.b||!1)C.a.h(n,"reflect(refl)")
u=a.x
if(u.a||u.b||!1)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.q(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
oy:function(a,b){var u,t,s
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
oA:function(a,b){var u
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
oz:function(a,b){var u
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
oC:function(a,b){var u,t
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
oD:function(a,b){var u,t
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
oB:function(a,b){var u
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
oE:function(a,b){var u
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
kA:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.b.aj(a,1)},
nM:function(a,b){var u,t,s,r
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+="\nvec4 clrAccum;\n"
s=b===C.L
t=(s||b===C.o?t+"float colorCount;\n":t)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.K)t+="      clrAccum += color;\n"
else if(b===C.p)t+="      clrAccum = mix(clrAccum, color, color.a);\n"
else t=s?t+"      clrAccum += color;\n      colorCount += 1.0;\n":t+"      clrAccum = color;\n      colorCount = 1.0;\n"
t+="   }\n}\n\nvoid layoutAll()\n{\n"
r=b===C.o
if(r)for(u=a-1;u>=0;--u)t=t+("   if(txtCount > "+u+")\n")+"   {\n"+("     layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return;\n")+("   layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(s)t+="   colorCount = 1.0;\n"
else if(r)t+="   colorCount = 0.0;\n"
t+="   layoutAll();\n"
t=(s?t+"   clrAccum = clrAccum/colorCount;\n":t)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return t.charCodeAt(0)==0?t:t},
nL:function(a,b,c){var u="TextureLayout_"+a+"_"+C.e.i(b.a),t=new A.ea(c,u)
t.bi(c,u)
t.eN(a,b,c)
return t},
kX:function(a,b,c,d,e){var u=new A.iI(a,c,e)
u.f=d
u.sii(P.nl(d,0,P.l))
return u},
dp:function dp(a,b,c){this.a=a
this.b=b
this.c=c},
fm:function fm(a){this.a=a},
af:function af(a,b,c){this.a=a
this.b=b
this.c=c},
dx:function dx(a,b){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dH:function dH(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h3:function h3(a,b){this.a=a
this.b=b},
dS:function dS(a,b){var _=this
_.jB=_.dN=_.dM=_.dL=_.aJ=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jJ=_.jI=_.jH=_.cg=_.cf=_.ce=_.cd=_.cc=_.cb=_.jG=_.dZ=_.dY=_.jF=_.dX=_.dW=_.dV=_.jE=_.dU=_.dT=_.dS=_.jD=_.dR=_.dQ=_.jC=_.dP=_.dO=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aC:function aC(a,b){this.a=a
this.b=b},
aF:function aF(a,b){this.a=a
this.b=b},
aG:function aG(a,b){this.a=a
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
_.aJ=b3
_.dL=b4},
cb:function cb(a,b,c,d,e,f){var _=this
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
cf:function cf(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bA:function bA(a,b){this.a=a
this.b=b},
ea:function ea(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ee:function ee(){},
iM:function iM(a){this.a=a},
ap:function ap(a,b,c){this.a=a
this.c=b
this.d=c},
iJ:function iJ(a,b,c){this.a=a
this.c=b
this.d=c},
iK:function iK(a,b,c){this.a=a
this.c=b
this.d=c},
iL:function iL(a,b,c){this.a=a
this.c=b
this.d=c},
iI:function iI(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a5:function a5(a,b,c){this.a=a
this.c=b
this.d=c},
aw:function aw(a,b,c){this.a=a
this.c=b
this.d=c},
X:function X(a,b,c){this.a=a
this.c=b
this.d=c},
bR:function bR(a,b,c){this.a=a
this.c=b
this.d=c},
iN:function iN(a,b,c){this.a=a
this.c=b
this.d=c},
cc:function cc(a,b,c){this.a=a
this.c=b
this.d=c},
aa:function aa(a,b,c){this.a=a
this.c=b
this.d=c},
a3:function a3(a,b,c){this.a=a
this.c=b
this.d=c},
ce:function ce(a,b,c){this.a=a
this.c=b
this.d=c}},F={
mC:function(){var u,t,s,r,q,p=null,o=F.kU(),n=o.a,m=new V.R(-1,-1,1)
m=m.w(0,Math.sqrt(m.F(m)))
u=n.bp(new V.bd(1,2,4,6),new V.ad(1,0,0,1),new V.a9(-1,-1,0),new V.a8(0,1),m,p)
n=o.a
m=new V.R(1,-1,1)
m=m.w(0,Math.sqrt(m.F(m)))
t=n.bp(new V.bd(0,3,4,6),new V.ad(0,0,1,1),new V.a9(1,-1,0),new V.a8(1,1),m,p)
n=o.a
m=new V.R(1,1,1)
m=m.w(0,Math.sqrt(m.F(m)))
s=n.bp(new V.bd(0,2,5,6),new V.ad(0,1,0,1),new V.a9(1,1,0),new V.a8(1,0),m,p)
n=o.a
m=V.bs()
r=new V.R(-1,1,1)
r=r.w(0,Math.sqrt(r.F(r)))
q=n.bp(new V.bd(0,2,4,7),new V.ad(1,1,0,1),new V.a9(-1,1,0),m,r,p)
o.d.im(H.d([u,t,s,q],[F.aq]))
o.as()
return o},
k2:function(a){var u,t=a.a>0?1:0
if(a.b>0)t+=2
u=a.c
if(typeof u!=="number")return u.ar()
return(u>0?t+4:t)*2},
de:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={}
H.n(c,{func:1,ret:-1,args:[F.aq,P.r,P.r]})
u=a1+a2
t=u+a3
s=a2+a3
r=a3+a1
q=new V.R(t,s+a1,r+a2)
e.a=q
p=a1-a2
o=a2-a3
n=a3-a1
m=e.b=new V.R(p+a3,o+a1,n+a2)
l=new V.R(p-a3,o-a1,n-a2)
e.c=l
k=e.d=new V.R(u-a3,s-a1,r-a2)
if(t>0){e.d=m
e.b=k
t=m
u=k}else{t=k
u=m}for(r=t,t=u,u=q,s=l,j=0;j<a4;++j,i=r,r=u,u=t,t=s,s=i){e.a=t
e.b=s
e.c=r
e.d=u}h=F.k2(u)
g=F.k2(e.b)
f=F.mE(d,a0,new F.k1(e,F.k2(e.c),F.k2(e.d),g,h,c),b)
if(f!=null)a.cm(f)},
pc:function(a){var u,t,s=null,r={}
r.a=u
r.a=null
r.a=new F.ky()
r=new F.kz(r,a)
t=F.kU()
F.de(t,s,r,8,8,1,0,0,1)
F.de(t,s,r,8,8,0,1,0,3)
F.de(t,s,r,8,8,0,0,1,2)
F.de(t,s,r,8,8,-1,0,0,0)
F.de(t,s,r,8,8,0,-1,0,0)
F.de(t,s,r,8,8,0,0,-1,3)
t.as()
t.iQ(new F.j6(),new F.hN())
return t},
p_:function(a,b){var u,t={}
t.a=u
t.a=null
t.a=new F.kg()
return F.mE(b,a,new F.kh(t),null)},
mE:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.aq,P.r,P.r]})
if(a<1)return
if(b<1)return
u=F.kU()
t=H.d([],[F.aq])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.j0(g,g,new V.ad(p,0,0,1),g,g,new V.a8(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.ca(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.j0(g,g,new V.ad(j,i,h,1),g,g,new V.a8(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.ca(d))}}u.d.io(a+1,b+1,t)
return u},
cz:function(a,b,c){var u=new F.a7(),t=a.a
if(t==null)H.x(P.y("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.x(P.y("May not create a face with vertices attached to different shapes."))
u.bZ(a)
u.c_(b)
u.hV(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a3()
return u},
ng:function(a,b){var u=new F.bo(),t=a.a
if(t==null)H.x(P.y("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.x(P.y("May not create a line with vertices attached to different shapes."))
u.bZ(a)
u.c_(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a3()
return u},
kU:function(){var u=new F.e4(),t=new F.j1(u)
t.b=!1
t.sij(H.d([],[F.aq]))
u.a=t
t=new F.i7(u)
t.sbS(H.d([],[F.bM]))
u.b=t
t=new F.i6(u)
t.sfu(H.d([],[F.bo]))
u.c=t
t=new F.i5(u)
t.sfj(H.d([],[F.a7]))
u.d=t
u.e=null
return u},
j0:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aq(),r=new F.j9()
r.sbS(H.d([],[F.bM]))
s.b=r
r=new F.j5()
u=[F.bo]
r.sfv(H.d([],u))
r.sfw(H.d([],u))
s.c=r
r=new F.j2()
u=[F.a7]
r.sfk(H.d([],u))
r.sfl(H.d([],u))
r.sfm(H.d([],u))
s.d=r
h=$.li()
s.e=0
r=$.ar()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.b0().a)!==0?e:t
s.x=(u&$.bl().a)!==0?b:t
s.y=(u&$.aN().a)!==0?f:t
s.z=(u&$.by().a)!==0?g:t
s.Q=(u&$.lj().a)!==0?c:t
s.ch=(u&$.bV().a)!==0?i:0
s.cx=(u&$.bk().a)!==0?a:t
return s},
k1:function k1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ky:function ky(){},
kz:function kz(a,b){this.a=a
this.b=b},
kg:function kg(){},
kh:function kh(a){this.a=a},
a7:function a7(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fW:function fW(){},
ib:function ib(){},
bo:function bo(){this.b=this.a=null},
hc:function hc(){},
iH:function iH(){},
bM:function bM(){this.a=null},
e4:function e4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i5:function i5(a){this.a=a
this.b=null},
i6:function i6(a){this.a=a
this.b=null},
i7:function i7(a){this.a=a
this.b=null},
aq:function aq(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jb:function jb(a){this.a=a},
ja:function ja(a){this.a=a},
j1:function j1(a){this.a=a
this.c=this.b=null},
j2:function j2(){this.d=this.c=this.b=null},
j3:function j3(a,b){this.a=a
this.b=b},
j4:function j4(a,b){this.a=a
this.b=b},
j5:function j5(){this.c=this.b=null},
j7:function j7(){},
j6:function j6(){},
j8:function j8(){},
hN:function hN(){},
j9:function j9(){this.b=null}},T={
kV:function(a){var u=new T.it()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
bv:function bv(){},
bP:function bP(){},
it:function it(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iu:function iu(a){var _=this
_.a=a
_.e=_.d=_.b=null},
iv:function iv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iw:function iw(a,b,c){this.a=a
this.b=b
this.c=c}},K={
mw:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="testCanvas",b1=null,b2="controls",b3="modifiers",b4={},b5=V.nH("Test 040"),b6=W.kJ()
b6.className="pageLargeCanvas"
b6.id=b0
b5.a.appendChild(b6)
u=[P.i]
b5.dv(H.d(["A combination of bump mapping with height map and specular map."],u))
b5.ik(H.d(["controls"],u))
b5.dv(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b0)
if(t==null)H.x(P.y("Failed to find an element with the identifier, testCanvas."))
s=E.nN(t,!0,!0,!0,!1)
r=s.f.bx("../resources/gravel/colorLarge.png")
q=s.f.bx("../resources/gravel/bumpLarge.png")
p=s.f.bx("../resources/gravel/specularSmall.png")
o=s.f.bx("../resources/gravel/heightSmall.png")
b5=U.ls(V.lF(0,0,2))
n=new U.e2()
n.r=n.f=n.e=n.d=n.c=n.b=n.a=0
n.seB(0)
n.sel(0,0)
n.seq(0)
m=n.d
if(!(Math.abs(m-0.6)<$.G().a)){n.d=0.6
m=new D.t("deltaYaw",m,0.6,[P.r])
m.b=!0
n.N(m)}m=n.e
if(!(Math.abs(m-0.1)<$.G().a)){n.e=0.1
m=new D.t("deltaPitch",m,0.1,[P.r])
m.b=!0
n.N(m)}m=n.f
if(!(Math.abs(m-0)<$.G().a)){n.f=0
m=new D.t("deltaRoll",m,0,[P.r])
m.b=!0
n.N(m)}m=U.ai
l=[m]
k=U.lw(H.d([b5,n],l))
j=E.kL(F.pc(0.03))
j.sba(k)
n=O.lB()
b5=n.f
b5.sb3(0,new V.a6(1,1,1))
j.sao(n)
i=new V.a6(1,1,1)
h=new D.bL()
h.c=new V.a6(1,1,1)
h.r=1
h.y=h.x=0
h.z=!0
h.a=V.bq()
g=h.b
h.b=k
k.gn().h(0,h.geQ())
b5=new D.t("mover",g,h.b,[m])
b5.b=!0
h.af(b5)
if(!h.c.p(0,i)){g=h.c
h.c=i
b5=new D.t("color",g,i,[V.a6])
b5.b=!0
h.af(b5)}f=V.m4()
if(!J.J(h.f,f)){g=h.f
h.f=f
b5=new D.t("shadowAdjust",g,f,[V.bw])
b5.b=!0
h.af(b5)}b5=h.r
if(!(Math.abs(b5-0.5)<$.G().a)){h.r=0.5
b5=new D.t("attenuation0",b5,0.5,[P.r])
b5.b=!0
h.af(b5)}b5=h.x
if(!(Math.abs(b5-0.1)<$.G().a)){h.x=0.1
b5=new D.t("attenuation1",b5,0.1,[P.r])
b5.b=!0
h.af(b5)}b5=h.y
if(!(Math.abs(b5-0)<$.G().a)){h.y=0
b5=new D.t("attenuation2",b5,0,[P.r])
b5.b=!0
h.af(b5)}e=F.mC()
d=E.kL(e)
b4.a=null
o.gn().h(0,new K.ko(b4,s,o))
c=X.lI()
b5=s.r
n=new U.ej()
m=U.lr()
m.seA(0,!0)
m.se9(6.283185307179586)
m.seb(0)
m.sa8(0,0)
m.sea(100)
m.sa_(0)
m.sdE(0.5)
n.b=m
b=n.gbl()
m.gn().h(0,b)
m=U.lr()
m.seA(0,!0)
m.se9(6.283185307179586)
m.seb(0)
m.sa8(0,0)
m.sea(100)
m.sa_(0)
m.sdE(0.5)
n.c=m
m.gn().h(0,b)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
a=new X.aE(!1,!1,!1)
g=n.d
n.d=a
m=[X.aE]
b=new D.t(b3,g,a,m)
b.b=!0
n.N(b)
b=n.f
if(b!==!1){n.f=!1
b=new D.t("invertX",b,!1,[P.Z])
b.b=!0
n.N(b)}b=n.r
if(b!==!1){n.r=!1
b=new D.t("invertY",b,!1,[P.Z])
b.b=!0
n.N(b)}n.c0(b5)
b5=s.r
b=new U.ek()
b.c=0.01
b.e=b.d=0
a=new X.aE(!1,!1,!1)
b.b=a
m=new D.t(b3,b1,a,m)
m.b=!0
b.N(m)
b.c0(b5)
c.sba(U.lw(H.d([n,b,U.ls(V.lF(0,0,5))],l)))
a0=O.lB()
a0.dx.h(0,h)
b5=a0.r
b5.sb3(0,new V.a6(0.3,0.3,0.3))
a0.x.sb3(0,new V.a6(1,1,1))
b5=a0.z
b5.bn(new A.af(!0,b5.c.b,!1))
b5.dm(40)
a1=X.kH(!0,1,1,!0)
b5=[E.al]
a2=M.lu(H.d([d,j],b5))
a2.sao(a0)
a2.sc7(c)
a2.saL(0,a1)
a3=X.kH(!0,0.5,0.5,!0)
a4=M.lu(H.d([d,j],b5))
a4.sc7(c)
a4.saL(0,a3)
b5=new O.fL()
b5.b=1
b5.c=10
b5.f=b5.e=b5.d=!1
if(!(Math.abs(0.5)<$.G().a)){b5.b=0.5
n=new D.t("start",1,0.5,[P.r])
n.b=!0
b5.u(n)}n=b5.c
if(!(Math.abs(n-5.5)<$.G().a)){b5.c=5.5
n=new D.t("stop",n,5.5,[P.r])
n.b=!0
b5.u(n)}a4.sao(b5)
b5=new V.bw(-1,0,0,1)
n=a1.ch
m=a3.ch
a5=new M.dG()
a5.a=!0
a5.c=X.kH(!0,1,1,!1)
l=O.lv(b1,b1)
b=a5.gW()
l.gn().h(0,b)
a5.d=l
a5.e=M.kK(a5.c,l)
l=a5.c.ch
a6=$.lZ
l=O.lv(a6==null?$.lZ=new V.U(0,1):a6,l)
l.gn().h(0,b)
a5.f=l
a5.r=M.kK(b1,l)
a5.d.sc3(0)
a5.f.sc3(0)
a5.d.sdD(n)
a5.d.sb2(m)
a5.f.sb2(m)
a5.d.scu(b1)
a5.f.scu(b1)
a5.d.sc2(b5)
a5.f.sc2(b5)
a5.r.saL(0,b1)
a7=new O.e9()
a7.a=new V.ad(0,0,0,0)
a7.sfh(O.fA(O.aW))
a7.c.aM(a7.gh3(),a7.gh5())
a7.d=0
a7.e=null
a7.r=a7.f=C.p
a8=new V.ad(0,0,0,0)
if(!a7.a.p(0,a8)){g=a7.a
a7.a=a8
b5=new D.t("backColor",g,a8,[V.ad])
b5.b=!0
a7.u(b5)}a7.sdA(C.p)
a7.sdA(C.o)
b5=a7.c
n=a3.ch
b5.h(0,O.lQ(V.cR(0,0.8,0.2,0.2),n))
n=a7.c
b5=a1.ch
n.h(0,O.lQ(V.cR(0,0.6,0.2,0.2),b5))
a9=M.kK(b1,b1)
a9.saL(0,X.kM(!1,b1))
a9.sao(a7)
b5=M.au
n=H.d([a2,a4,a5,a9],[b5])
m=new M.dt()
m.bh(b5)
m.e=!0
m.f=!1
m.r=null
m.aM(m.ghv(),m.ghx())
m.b1(0,n)
b5=s.d
if(b5!==m){if(b5!=null)b5.gn().E(0,s.gcM())
s.d=m
m.gn().h(0,s.gcM())
s.cN()}b5=new V.fy(b2)
u=u.getElementById(b2)
b5.c=u
if(u==null)H.x("Failed to find controls for CheckGroup")
b5.sf5(H.d([],[W.cv]))
b5.du(0,"Color",new K.kp(a0,r),!0)
b5.b0(0,"Specular",new K.kq(a0,p))
b5.b0(0,"Bump",new K.kr(a0,q))
b5.b0(0,"Height",new K.ks(b4,d,e))
b5.b0(0,"Blur",new K.kt(a5,a3))
b5.b0(0,"Passes",new K.ku(a9,a7))
V.pb(s)},
ko:function ko(a,b,c){this.a=a
this.b=b
this.c=c},
kp:function kp(a,b){this.a=a
this.b=b},
kq:function kq(a,b){this.a=a
this.b=b},
kr:function kr(a,b){this.a=a
this.b=b},
ks:function ks(a,b,c){this.a=a
this.b=b
this.c=c},
kt:function kt(a,b){this.a=a
this.b=b},
ku:function ku(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kR.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gI:function(a){return H.cQ(a)},
i:function(a){return"Instance of '"+H.c8(a)+"'"}}
J.h7.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iZ:1}
J.dL.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.dM.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.hS.prototype={}
J.bS.prototype={}
J.bI.prototype={
i:function(a){var u=a[$.mH()]
if(u==null)return this.eH(a)
return"JavaScript function for "+H.m(J.az(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ikN:1}
J.b7.prototype={
h:function(a,b){H.D(b,H.w(a,0))
if(!!a.fixed$length)H.x(P.H("add"))
a.push(b)},
en:function(a,b){if(!!a.fixed$length)H.x(P.H("removeAt"))
if(b<0||b>=a.length)throw H.e(P.e0(b,null))
return a.splice(b,1)[0]},
E:function(a,b){var u
if(!!a.fixed$length)H.x(P.H("remove"))
for(u=0;u<a.length;++u)if(J.J(a[u],b)){a.splice(u,1)
return!0}return!1},
b1:function(a,b){var u,t
H.j(b,"$ih",[H.w(a,0)],"$ah")
if(!!a.fixed$length)H.x(P.H("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.A)(b),++t)a.push(b[t])},
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.w(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.e(P.c1(a))}},
q:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.m(a[u]))
return t.join(b)},
iN:function(a){return this.q(a,"")},
iG:function(a,b,c,d){var u,t,s
H.D(b,d)
H.n(c,{func:1,ret:d,args:[d,H.w(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.e(P.c1(a))}return t},
L:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
cH:function(a,b,c){if(b<0||b>a.length)throw H.e(P.aj(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.e(P.aj(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.w(a,0)])
return H.d(a.slice(b,c),[H.w(a,0)])},
cG:function(a,b){return this.cH(a,b,null)},
giF:function(a){if(a.length>0)return a[0]
throw H.e(H.lx())},
gaK:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.e(H.lx())},
bH:function(a,b){var u=H.w(a,0)
H.n(b,{func:1,ret:P.l,args:[u,u]})
if(!!a.immutable$list)H.x(P.H("sort"))
H.e5(a,0,a.length-1,b,u)},
au:function(a,b){var u
for(u=0;u<a.length;++u)if(J.J(a[u],b))return!0
return!1},
i:function(a){return P.kO(a,"[","]")},
gV:function(a){return new J.as(a,a.length,[H.w(a,0)])},
gI:function(a){return H.cQ(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.x(P.H("set length"))
if(b<0)throw H.e(P.aj(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.e(H.cm(a,b))
return a[b]},
k:function(a,b,c){H.D(c,H.w(a,0))
if(!!a.immutable$list)H.x(P.H("indexed set"))
if(b>=a.length||b<0)throw H.e(H.cm(a,b))
a[b]=c},
$ih:1,
$ib:1}
J.kQ.prototype={}
J.as.prototype={
gM:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(H.A(s))
u=t.c
if(u>=r){t.sd2(null)
return!1}t.sd2(s[u]);++t.c
return!0},
sd2:function(a){this.d=H.D(a,H.w(this,0))},
$ib6:1}
J.c5.prototype={
iu:function(a,b){var u
H.mx(b)
if(typeof b!=="number")throw H.e(H.ay(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbv(b)
if(this.gbv(a)===u)return 0
if(this.gbv(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbv:function(a){return a===0?1/a<0:a<0},
ji:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.e(P.H(""+a+".toInt()"))},
b7:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.e(P.H(""+a+".floor()"))},
Z:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.H(""+a+".round()"))},
ew:function(a,b){var u
if(b>20)throw H.e(P.aj(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbv(a))return"-"+u
return u},
be:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.e(P.aj(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.Y(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.x(P.H("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.c(t,1)
u=t[1]
if(3>=s)return H.c(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.m("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
m:function(a,b){if(typeof b!=="number")throw H.e(H.ay(b))
return a*b},
ax:function(a,b){var u
if(typeof b!=="number")throw H.e(H.ay(b))
u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
cL:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dq(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.dq(a,b)},
dq:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.H("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
aS:function(a,b){var u
if(a>0)u=this.dn(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
i_:function(a,b){if(b<0)throw H.e(H.ay(b))
return this.dn(a,b)},
dn:function(a,b){return b>31?0:a>>>b},
ar:function(a,b){if(typeof b!=="number")throw H.e(H.ay(b))
return a>b},
$ir:1,
$iac:1}
J.dK.prototype={$il:1}
J.dJ.prototype={}
J.bH.prototype={
Y:function(a,b){if(b<0)throw H.e(H.cm(a,b))
if(b>=a.length)H.x(H.cm(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.e(H.cm(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(typeof b!=="string")throw H.e(P.kG(b,null,null))
return a+b},
aV:function(a,b,c,d){var u,t
c=P.bN(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ai:function(a,b,c){var u
if(c<0||c>a.length)throw H.e(P.aj(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
ah:function(a,b){return this.ai(a,b,0)},
A:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.x(H.ay(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.R()
if(b<0)throw H.e(P.e0(b,null))
if(b>c)throw H.e(P.e0(b,null))
if(c>a.length)throw H.e(P.e0(c,null))
return a.substring(b,c)},
aj:function(a,b){return this.A(a,b,null)},
m:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.I)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
an:function(a,b){var u=b-a.length
if(u<=0)return a
return this.m(" ",u)+a},
j_:function(a,b,c){var u=b-a.length
if(u<=0)return a
return a+this.m(c,u)},
e6:function(a,b,c){var u
if(c<0||c>a.length)throw H.e(P.aj(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
e5:function(a,b){return this.e6(a,b,0)},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ilH:1,
$ii:1}
H.a4.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.b.Y(this.a,b)},
$ad_:function(){return[P.l]},
$az:function(){return[P.l]},
$ah:function(){return[P.l]},
$ab:function(){return[P.l]}}
H.fR.prototype={}
H.dP.prototype={
gM:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=J.dh(s),q=r.gl(s)
if(t.b!==q)throw H.e(P.c1(s))
u=t.c
if(u>=q){t.saY(null)
return!1}t.saY(r.L(s,u));++t.c
return!0},
saY:function(a){this.d=H.D(a,H.w(this,0))},
$ib6:1}
H.hn.prototype={
gV:function(a){return new H.ho(J.bW(this.a),this.b,this.$ti)},
gl:function(a){return J.aO(this.a)},
L:function(a,b){return this.b.$1(J.kF(this.a,b))},
$ah:function(a,b){return[b]}}
H.ho.prototype={
C:function(){var u=this,t=u.b
if(t.C()){u.saY(u.c.$1(t.gM(t)))
return!0}u.saY(null)
return!1},
gM:function(a){return this.a},
saY:function(a){this.a=H.D(a,H.w(this,1))},
$ab6:function(a,b){return[b]}}
H.jd.prototype={
gV:function(a){return new H.je(J.bW(this.a),this.b,this.$ti)}}
H.je.prototype={
C:function(){var u,t
for(u=this.a,t=this.b;u.C();)if(H.E(t.$1(u.gM(u))))return!0
return!1},
gM:function(a){var u=this.a
return u.gM(u)}}
H.c3.prototype={}
H.d_.prototype={
k:function(a,b,c){H.D(c,H.aB(this,"d_",0))
throw H.e(P.H("Cannot modify an unmodifiable list"))}}
H.eg.prototype={}
H.fD.prototype={
i:function(a){return P.kT(this)},
k:function(a,b,c){H.D(b,H.w(this,0))
H.D(c,H.w(this,1))
return H.n7()},
$iC:1}
H.fE.prototype={
gl:function(a){return this.a},
bs:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bs(0,b))return
return this.d3(b)},
d3:function(a){return this.b[H.O(a)]},
J:function(a,b){var u,t,s,r,q=this,p=H.w(q,1)
H.n(b,{func:1,ret:-1,args:[H.w(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.D(q.d3(r),p))}}}
H.iE.prototype={
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
H.hO.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.h9.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.m(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.m(t.a)+")"
return s+r+"' on '"+u+"' ("+H.m(t.a)+")"}}
H.iQ.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kB.prototype={
$1:function(a){if(!!J.T(a).$ibC)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:23}
H.eS.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iav:1}
H.cw.prototype={
i:function(a){return"Closure '"+H.c8(this).trim()+"'"},
$ikN:1,
gjq:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iq.prototype={}
H.ih.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cr(u)+"'"}}
H.cs.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cs))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.cQ(this.a)
else u=typeof t!=="object"?J.dm(t):H.cQ(t)
return(u^H.cQ(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.c8(u)+"'")}}
H.iG.prototype={
i:function(a){return this.a}}
H.fw.prototype={
i:function(a){return this.a}}
H.i2.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.jf.prototype={
i:function(a){return"Assertion failed: "+P.dD(this.a)}}
H.a0.prototype={
gl:function(a){return this.a},
gaA:function(a){return new H.he(this,[H.w(this,0)])},
bs:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.d_(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.d_(t,b)}else return s.iJ(b)},
iJ:function(a){var u=this,t=u.d
if(t==null)return!1
return u.ck(u.bN(t,u.cj(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bj(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bj(r,b)
s=t==null?null:t.b
return s}else return q.iK(b)},
iK:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bN(r,s.cj(a))
t=s.ck(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.D(b,H.w(s,0))
H.D(c,H.w(s,1))
if(typeof b==="string"){u=s.b
s.cR(u==null?s.b=s.bQ():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cR(t==null?s.c=s.bQ():t,b,c)}else s.iL(b,c)},
iL:function(a,b){var u,t,s,r,q=this
H.D(a,H.w(q,0))
H.D(b,H.w(q,1))
u=q.d
if(u==null)u=q.d=q.bQ()
t=q.cj(a)
s=q.bN(u,t)
if(s==null)q.bX(u,t,[q.bR(a,b)])
else{r=q.ck(s,a)
if(r>=0)s[r].b=b
else s.push(q.bR(a,b))}},
J:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.w(s,0),H.w(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.e(P.c1(s))
u=u.c}},
cR:function(a,b,c){var u,t=this
H.D(b,H.w(t,0))
H.D(c,H.w(t,1))
u=t.bj(a,b)
if(u==null)t.bX(a,b,t.bR(b,c))
else u.b=c},
bR:function(a,b){var u=this,t=new H.hd(H.D(a,H.w(u,0)),H.D(b,H.w(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
cj:function(a){return J.dm(a)&0x3ffffff},
ck:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.J(a[t].a,b))return t
return-1},
i:function(a){return P.kT(this)},
bj:function(a,b){return a[b]},
bN:function(a,b){return a[b]},
bX:function(a,b,c){a[b]=c},
fb:function(a,b){delete a[b]},
d_:function(a,b){return this.bj(a,b)!=null},
bQ:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bX(t,u,t)
this.fb(t,u)
return t}}
H.hd.prototype={}
H.he.prototype={
gl:function(a){return this.a.a},
gV:function(a){var u=this.a,t=new H.hf(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hf.prototype={
gM:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.c1(t))
else{t=u.c
if(t==null){u.scQ(null)
return!1}else{u.scQ(t.a)
u.c=u.c.c
return!0}}},
scQ:function(a){this.d=H.D(a,H.w(this,0))},
$ib6:1}
H.kj.prototype={
$1:function(a){return this.a(a)},
$S:23}
H.kk.prototype={
$2:function(a,b){return this.a(a,b)},
$S:52}
H.kl.prototype={
$1:function(a){return this.a(H.O(a))},
$S:50}
H.h8.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ilH:1,
$inD:1}
H.cL.prototype={$icL:1}
H.bK.prototype={$ibK:1,$inP:1}
H.dU.prototype={
gl:function(a){return a.length},
$iM:1,
$aM:function(){}}
H.cM.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]},
k:function(a,b,c){H.oT(c)
H.bj(b,a,a.length)
a[b]=c},
$ac3:function(){return[P.r]},
$az:function(){return[P.r]},
$ih:1,
$ah:function(){return[P.r]},
$ib:1,
$ab:function(){return[P.r]}}
H.dV.prototype={
k:function(a,b,c){H.a_(c)
H.bj(b,a,a.length)
a[b]=c},
$ac3:function(){return[P.l]},
$az:function(){return[P.l]},
$ih:1,
$ah:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]}}
H.hI.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.hJ.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.hK.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.hL.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.hM.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.dW.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bj(b,a,a.length)
return a[b]},
$ipz:1}
H.cN.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bj(b,a,a.length)
return a[b]},
$icN:1,
$iQ:1}
H.d4.prototype={}
H.d5.prototype={}
H.d6.prototype={}
H.d7.prototype={}
P.jh.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:26}
P.jg.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:49}
P.ji.prototype={
$0:function(){this.a.$0()},
$S:1}
P.jj.prototype={
$0:function(){this.a.$0()},
$S:1}
P.eY.prototype={
eV:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cl(new P.jS(this,b),0),a)
else throw H.e(P.H("`setTimeout()` not found."))},
eW:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cl(new P.jR(this,a,Date.now(),b),0),a)
else throw H.e(P.H("Periodic timer."))},
$ibe:1}
P.jS.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jR.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.cL(u,q)}s.c=r
t.d.$1(s)},
$S:1}
P.bi.prototype={
iP:function(a){if(this.c!==6)return!0
return this.b.b.ct(H.n(this.d,{func:1,ret:P.Z,args:[P.P]}),a.a,P.Z,P.P)},
iI:function(a){var u=this.e,t=P.P,s={futureOr:1,type:H.w(this,1)},r=this.b.b
if(H.fe(u,{func:1,args:[P.P,P.av]}))return H.lc(r.jd(u,a.a,a.b,null,t,P.av),s)
else return H.lc(r.ct(H.n(u,{func:1,args:[P.P]}),a.a,null,t),s)}}
P.aK.prototype={
ev:function(a,b,c){var u,t,s,r=H.w(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.Y
if(u!==C.f){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.oG(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aK($.Y,[c])
s=b==null?1:3
this.cS(new P.bi(t,s,a,b,[r,c]))
return t},
jh:function(a,b){return this.ev(a,null,b)},
cS:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ibi")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaK")
s=u.a
if(s<4){u.cS(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.kb(null,null,s,H.n(new P.jr(t,a),{func:1,ret:-1}))}},
dh:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ibi")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaK")
u=q.a
if(u<4){q.dh(a)
return}p.a=u
p.c=q.c}o.a=p.bm(a)
u=p.b
u.toString
P.kb(null,null,u,H.n(new P.jv(o,p),{func:1,ret:-1}))}},
bU:function(){var u=H.f(this.c,"$ibi")
this.c=null
return this.bm(u)},
bm:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cW:function(a){var u,t,s=this,r=H.w(s,0)
H.lc(a,{futureOr:1,type:r})
u=s.$ti
if(H.l9(a,"$icB",u,"$acB"))if(H.l9(a,"$iaK",u,null))P.m5(a,s)
else P.o0(a,s)
else{t=s.bU()
H.D(a,r)
s.a=4
s.c=a
P.d2(s,t)}},
cX:function(a,b){var u,t=this
H.f(b,"$iav")
u=t.bU()
t.a=8
t.c=new P.at(a,b)
P.d2(t,u)},
$icB:1}
P.jr.prototype={
$0:function(){P.d2(this.a,this.b)},
$S:1}
P.jv.prototype={
$0:function(){P.d2(this.b,this.a.a)},
$S:1}
P.js.prototype={
$1:function(a){var u=this.a
u.a=0
u.cW(a)},
$S:26}
P.jt.prototype={
$2:function(a,b){H.f(b,"$iav")
this.a.cX(a,b)},
$1:function(a){return this.$2(a,null)},
$S:45}
P.ju.prototype={
$0:function(){this.a.cX(this.b,this.c)},
$S:1}
P.jy.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.er(H.n(s.d,{func:1}),null)}catch(r){u=H.aM(r)
t=H.cp(r)
if(o.d){s=H.f(o.a.a.c,"$iat").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$iat")
else q.b=new P.at(u,t)
q.a=!0
return}if(!!J.T(n).$icB){if(n instanceof P.aK&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$iat")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jh(new P.jz(p),null)
s.a=!1}},
$S:3}
P.jz.prototype={
$1:function(a){return this.a},
$S:43}
P.jx.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.w(s,0)
q=H.D(n.c,r)
p=H.w(s,1)
n.a.b=s.b.b.ct(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aM(o)
t=H.cp(o)
s=n.a
s.b=new P.at(u,t)
s.a=!0}},
$S:3}
P.jw.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$iat")
r=m.c
if(H.E(r.iP(u))&&r.e!=null){q=m.b
q.b=r.iI(u)
q.a=!1}}catch(p){t=H.aM(p)
s=H.cp(p)
r=H.f(m.a.a.c,"$iat")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.at(t,s)
n.a=!0}},
$S:3}
P.em.prototype={}
P.ik.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.aK($.Y,[P.l])
r.a=0
u=H.w(s,0)
t=H.n(new P.im(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.io(r,q),{func:1,ret:-1})
W.ab(s.a,s.b,t,!1,u)
return q}}
P.im.prototype={
$1:function(a){H.D(a,H.w(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.K,args:[H.w(this.b,0)]}}}
P.io.prototype={
$0:function(){this.b.cW(this.a.a)},
$S:1}
P.cV.prototype={}
P.il.prototype={}
P.be.prototype={}
P.at.prototype={
i:function(a){return H.m(this.a)},
$ibC:1}
P.k0.prototype={$ipN:1}
P.ka.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dX():s
s=this.b
if(s==null)throw H.e(t)
u=H.e(t)
u.stack=s.i(0)
throw u},
$S:1}
P.jG.prototype={
je:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.Y){a.$0()
return}P.mg(r,r,this,a,-1)}catch(s){u=H.aM(s)
t=H.cp(s)
P.k9(r,r,this,u,H.f(t,"$iav"))}},
jf:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.f===$.Y){a.$1(b)
return}P.mh(r,r,this,a,b,-1,c)}catch(s){u=H.aM(s)
t=H.cp(s)
P.k9(r,r,this,u,H.f(t,"$iav"))}},
ir:function(a,b){return new P.jI(this,H.n(a,{func:1,ret:b}),b)},
c1:function(a){return new P.jH(this,H.n(a,{func:1,ret:-1}))},
dz:function(a,b){return new P.jJ(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
er:function(a,b){H.n(a,{func:1,ret:b})
if($.Y===C.f)return a.$0()
return P.mg(null,null,this,a,b)},
ct:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.Y===C.f)return a.$1(b)
return P.mh(null,null,this,a,b,c,d)},
jd:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.Y===C.f)return a.$2(b,c)
return P.oH(null,null,this,a,b,c,d,e,f)}}
P.jI.prototype={
$0:function(){return this.a.er(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jH.prototype={
$0:function(){return this.a.je(this.b)},
$S:3}
P.jJ.prototype={
$1:function(a){var u=this.c
return this.a.jf(this.b,H.D(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jD.prototype={
gV:function(a){return P.m7(this,this.r,H.w(this,0))},
gl:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.D(b,H.w(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cU(u==null?s.b=P.l2():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cU(t==null?s.c=P.l2():t,b)}else return s.eY(0,b)},
eY:function(a,b){var u,t,s,r=this
H.D(b,H.w(r,0))
u=r.d
if(u==null)u=r.d=P.l2()
t=r.cY(b)
s=u[t]
if(s==null)u[t]=[r.bJ(b)]
else{if(r.d4(s,b)>=0)return!1
s.push(r.bJ(b))}return!0},
E:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hL(this.c,b)
else return this.hK(0,b)},
hK:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.fq(r,b)
t=s.d4(u,b)
if(t<0)return!1
s.dr(u.splice(t,1)[0])
return!0},
cU:function(a,b){H.D(b,H.w(this,0))
if(H.f(a[b],"$id3")!=null)return!1
a[b]=this.bJ(b)
return!0},
hL:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$id3")
if(u==null)return!1
this.dr(u)
delete a[b]
return!0},
d8:function(){this.r=1073741823&this.r+1},
bJ:function(a){var u,t=this,s=new P.d3(H.D(a,H.w(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.d8()
return s},
dr:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.d8()},
cY:function(a){return J.dm(a)&1073741823},
fq:function(a,b){return a[this.cY(b)]},
d4:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.J(a[t].a,b))return t
return-1}}
P.d3.prototype={}
P.jE.prototype={
gM:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.c1(t))
else{t=u.c
if(t==null){u.scV(null)
return!1}else{u.scV(H.D(t.a,H.w(u,0)))
u.c=u.c.b
return!0}}},
scV:function(a){this.d=H.D(a,H.w(this,0))},
$ib6:1}
P.hg.prototype={
$2:function(a,b){this.a.k(0,H.D(a,this.b),H.D(b,this.c))},
$S:8}
P.hh.prototype={$ih:1,$ib:1}
P.z.prototype={
gV:function(a){return new H.dP(a,this.gl(a),[H.co(this,a,"z",0)])},
L:function(a,b){return this.j(a,b)},
jk:function(a,b){var u,t=this,s=H.d([],[H.co(t,a,"z",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.k(s,u,t.j(a,u))
return s},
jj:function(a){return this.jk(a,!0)},
iD:function(a,b,c,d){var u
H.D(d,H.co(this,a,"z",0))
P.bN(b,c,this.gl(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.kO(a,"[","]")}}
P.hk.prototype={}
P.hl.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.m(a)
t.a=u+": "
t.a+=H.m(b)},
$S:8}
P.am.prototype={
J:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.co(s,a,"am",0),H.co(s,a,"am",1)]})
for(u=J.bW(s.gaA(a));u.C();){t=u.gM(u)
b.$2(t,s.j(a,t))}},
gl:function(a){return J.aO(this.gaA(a))},
i:function(a){return P.kT(a)},
$iC:1}
P.jT.prototype={
k:function(a,b,c){H.D(b,H.w(this,0))
H.D(c,H.w(this,1))
throw H.e(P.H("Cannot modify unmodifiable map"))}}
P.hm.prototype={
j:function(a,b){return J.dl(this.a,b)},
k:function(a,b,c){J.kD(this.a,H.D(b,H.w(this,0)),H.D(c,H.w(this,1)))},
J:function(a,b){J.ll(this.a,H.n(b,{func:1,ret:-1,args:[H.w(this,0),H.w(this,1)]}))},
gl:function(a){return J.aO(this.a)},
i:function(a){return J.az(this.a)},
$iC:1}
P.eh.prototype={}
P.jK.prototype={
i:function(a){return P.kO(this,"{","}")},
L:function(a,b){var u,t,s,r=this
P.lN(b,"index")
for(u=P.m7(r,r.r,H.w(r,0)),t=0;u.C();){s=u.d
if(b===t)return s;++t}throw H.e(P.W(b,r,"index",null,t))},
$ih:1,
$ilO:1}
P.eB.prototype={}
P.f3.prototype={}
P.fs.prototype={
iR:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bN(a0,a1,b.length)
u=$.mU()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.H(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.ki(C.b.H(b,n))
j=H.ki(C.b.H(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.c(u,i)
h=u[i]
if(h>=0){i=C.b.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ak("")
g=r.a+=C.b.A(b,s,t)
r.a=g+H.dZ(m)
s=n
continue}}throw H.e(P.a2("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.A(b,s,a1)
f=g.length
if(q>=0)P.ln(b,p,a1,q,o,f)
else{e=C.e.ax(f-1,4)+1
if(e===1)throw H.e(P.a2(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aV(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.ln(b,p,a1,q,o,d)
else{e=C.e.ax(d,4)
if(e===1)throw H.e(P.a2(c,b,a1))
if(e>1)b=C.b.aV(b,a1,a1,e===2?"==":"=")}return b},
$ac0:function(){return[[P.b,P.l],P.i]}}
P.ft.prototype={
$ac2:function(){return[[P.b,P.l],P.i]}}
P.c0.prototype={}
P.c2.prototype={}
P.fS.prototype={
$ac0:function(){return[P.i,[P.b,P.l]]}}
P.iY.prototype={
giC:function(){return C.J}}
P.j_.prototype={
c9:function(a){var u,t,s=P.bN(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.k_(u)
if(t.fn(a,0,s)!==s)t.dt(J.n_(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oh(0,t.b,u.length)))},
$ac2:function(){return[P.i,[P.b,P.l]]}}
P.k_.prototype={
dt:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fn:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.Y(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.H(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dt(r,C.b.H(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iZ.prototype={
c9:function(a){var u,t,s,r,q,p,o,n,m
H.j(a,"$ib",[P.l],"$ab")
u=P.nS(!1,a,0,null)
if(u!=null)return u
t=P.bN(0,null,J.aO(a))
s=P.mj(a,0,t)
if(s>0){r=P.cW(a,0,s)
if(s===t)return r
q=new P.ak(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ak("")
n=new P.jZ(!1,q)
n.c=o
n.iv(a,p,t)
if(n.e>0){H.x(P.a2("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.dZ(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$ac2:function(){return[[P.b,P.l],P.i]}}
P.jZ.prototype={
iv:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.j(a,"$ib",[P.l],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.dh(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.aq()
if((o&192)!==128){n=P.a2(h+C.e.be(o,16),a,p)
throw H.e(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.c(C.v,n)
if(u<=C.v[n]){n=P.a2("Overlong encoding of 0x"+C.e.be(u,16),a,p-s-1)
throw H.e(n)}if(u>1114111){n=P.a2("Character outside valid Unicode range: 0x"+C.e.be(u,16),a,p-s-1)
throw H.e(n)}if(!i.c||u!==65279)q.a+=H.dZ(u)
i.c=!1}for(n=p<c;n;){m=P.mj(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cW(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.R()
if(o<0){j=P.a2("Negative UTF-8 code unit: -0x"+C.e.be(-o,16),a,k-1)
throw H.e(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a2(h+C.e.be(o,16),a,k-1)
throw H.e(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.Z.prototype={}
P.aA.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aA&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.e.aS(u,30))&1073741823},
i:function(a){var u=this,t=P.n8(H.nz(u)),s=P.dw(H.nx(u)),r=P.dw(H.nt(u)),q=P.dw(H.nu(u)),p=P.dw(H.nw(u)),o=P.dw(H.ny(u)),n=P.n9(H.nv(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.r.prototype={}
P.bB.prototype={
ar:function(a,b){return C.e.ar(this.a,b.gjt())},
p:function(a,b){if(b==null)return!1
return b instanceof P.bB&&this.a===b.a},
gI:function(a){return C.e.gI(this.a)},
i:function(a){var u,t,s,r=new P.fQ(),q=this.a
if(q<0)return"-"+new P.bB(0-q).i(0)
u=r.$1(C.e.a5(q,6e7)%60)
t=r.$1(C.e.a5(q,1e6)%60)
s=new P.fP().$1(q%1e6)
return""+C.e.a5(q,36e8)+":"+H.m(u)+":"+H.m(t)+"."+H.m(s)}}
P.fP.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:18}
P.fQ.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:18}
P.bC.prototype={}
P.fl.prototype={
i:function(a){return"Assertion failed"}}
P.dX.prototype={
i:function(a){return"Throw of null."}}
P.b2.prototype={
gbL:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbK:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbL()+o+u
if(!q.a)return t
s=q.gbK()
r=P.dD(q.b)
return t+s+": "+r}}
P.c9.prototype={
gbL:function(){return"RangeError"},
gbK:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.m(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.m(s)
else if(t>s)u=": Not in range "+H.m(s)+".."+H.m(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.m(s)}return u}}
P.h6.prototype={
gbL:function(){return"RangeError"},
gbK:function(){var u,t=H.a_(this.b)
if(typeof t!=="number")return t.R()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.m(u)},
gl:function(a){return this.f}}
P.iR.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iO.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ig.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fC.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dD(u)+"."}}
P.hR.prototype={
i:function(a){return"Out of Memory"},
$ibC:1}
P.e7.prototype={
i:function(a){return"Stack Overflow"},
$ibC:1}
P.fJ.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eu.prototype={
i:function(a){return"Exception: "+this.a}}
P.h1.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.A(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.H(f,q)
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
k=""}j=C.b.A(f,m,n)
return h+l+j+k+"\n"+C.b.m(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.m(g)+")"):h}}
P.l.prototype={}
P.h.prototype={
gl:function(a){var u,t=this.gV(this)
for(u=0;t.C();)++u
return u},
L:function(a,b){var u,t,s
P.lN(b,"index")
for(u=this.gV(this),t=0;u.C();){s=u.gM(u)
if(b===t)return s;++t}throw H.e(P.W(b,this,"index",null,t))},
i:function(a){return P.nd(this,"(",")")}}
P.b6.prototype={}
P.b.prototype={$ih:1}
P.C.prototype={}
P.K.prototype={
gI:function(a){return P.P.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.ac.prototype={}
P.P.prototype={constructor:P.P,$iP:1,
p:function(a,b){return this===b},
gI:function(a){return H.cQ(this)},
i:function(a){return"Instance of '"+H.c8(this)+"'"},
toString:function(){return this.i(this)}}
P.av.prototype={}
P.i.prototype={$ilH:1}
P.ak.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipn:1}
P.iW.prototype={
$2:function(a,b){var u,t,s,r=P.i
H.j(a,"$iC",[r,r],"$aC")
H.O(b)
u=J.ld(b).e5(b,"=")
if(u===-1){if(b!=="")J.kD(a,P.l4(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.A(b,0,u)
s=C.b.aj(b,u+1)
r=this.a
J.kD(a,P.l4(t,0,t.length,r,!0),P.l4(s,0,s.length,r,!0))}return a},
$S:42}
P.iT.prototype={
$2:function(a,b){throw H.e(P.a2("Illegal IPv4 address, "+a,this.a,b))},
$S:41}
P.iU.prototype={
$2:function(a,b){throw H.e(P.a2("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:40}
P.iV.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fg(C.b.A(this.b,a,b),null,16)
if(typeof u!=="number")return u.R()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:39}
P.ch.prototype={
gey:function(){return this.b},
gci:function(a){var u=this.c
if(u==null)return""
if(C.b.ah(u,"["))return C.b.A(u,1,u.length-1)
return u},
gby:function(a){var u=this.d
if(u==null)return P.m8(this.a)
return u},
gcq:function(a){var u=this.f
return u==null?"":u},
ge0:function(){var u=this.r
return u==null?"":u},
eo:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.j(b,"$iC",[P.i,null],"$aC")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.ah(p,"/"))p="/"+p
n=P.l3(null,0,0,b)
return new P.ch(u,s,q,r,p,n,m.r)},
gbA:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.i
s.shJ(new P.eh(P.lX(u==null?"":u),[t,t]))}return s.Q},
ge1:function(){return this.c!=null},
ge4:function(){return this.f!=null},
ge2:function(){return this.r!=null},
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
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.T(b).$ikY)if(s.a==b.gbF())if(s.c!=null===b.ge1())if(s.b==b.gey())if(s.gci(s)==b.gci(b))if(s.gby(s)==b.gby(b))if(s.e===b.gek(b)){u=s.f
t=u==null
if(!t===b.ge4()){if(t)u=""
if(u===b.gcq(b)){u=s.r
t=u==null
if(!t===b.ge2()){if(t)u=""
u=u===b.ge0()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
return u==null?this.z=C.b.gI(this.i(0)):u},
shJ:function(a){var u=P.i
this.Q=H.j(a,"$iC",[u,u],"$aC")},
$ikY:1,
gbF:function(){return this.a},
gek:function(a){return this.e}}
P.jU.prototype={
$1:function(a){throw H.e(P.a2("Invalid port",this.a,this.b+1))},
$S:38}
P.jV.prototype={
$1:function(a){return P.jY(C.T,a,C.h,!1)},
$S:37}
P.jX.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.m(P.jY(C.n,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.m(P.jY(C.n,b,C.h,!0))}},
$S:27}
P.jW.prototype={
$2:function(a,b){var u,t
H.O(a)
if(b==null||typeof b==="string")this.a.$2(a,H.O(b))
else for(u=J.bW(H.mv(b,"$ih")),t=this.a;u.C();)t.$2(a,H.O(u.gM(u)))},
$S:36}
P.iS.prototype={
gex:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.c(o,0)
u=q.a
o=o[0]+1
t=C.b.e6(u,"?",o)
s=u.length
if(t>=0){r=P.dd(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jn("data",p,p,p,P.dd(u,o,s,C.x,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.c(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.k4.prototype={
$1:function(a){return new Uint8Array(96)},
$S:35}
P.k3.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.c(u,a)
u=u[a]
J.n0(u,0,96,b)
return u},
$S:34}
P.k5.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.H(b,s)^96
if(r>=t)return H.c(a,r)
a[r]=c}}}
P.k6.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.H(b,0),t=C.b.H(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.c(a,r)
a[r]=c}}}
P.jL.prototype={
ge1:function(){return this.c>0},
ge3:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.v()
t=this.e
if(typeof t!=="number")return H.u(t)
t=u+1<t
u=t}else u=!1
return u},
ge4:function(){var u=this.f
if(typeof u!=="number")return u.R()
return u<this.r},
ge2:function(){return this.r<this.a.length},
gd6:function(){return this.b===4&&C.b.ah(this.a,"http")},
gd7:function(){return this.b===5&&C.b.ah(this.a,"https")},
gbF:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gd6())q=t.x="http"
else if(t.gd7()){t.x="https"
q="https"}else if(q===4&&C.b.ah(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.ah(t.a,r)){t.x=r
q=r}else{q=C.b.A(t.a,0,q)
t.x=q}return q},
gey:function(){var u=this.c,t=this.b+3
return u>t?C.b.A(this.a,t,u-1):""},
gci:function(a){var u=this.c
return u>0?C.b.A(this.a,u,this.d):""},
gby:function(a){var u,t=this
if(t.ge3()){u=t.d
if(typeof u!=="number")return u.v()
return P.fg(C.b.A(t.a,u+1,t.e),null,null)}if(t.gd6())return 80
if(t.gd7())return 443
return 0},
gek:function(a){return C.b.A(this.a,this.e,this.f)},
gcq:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.R()
return u<t?C.b.A(this.a,u+1,t):""},
ge0:function(){var u=this.r,t=this.a
return u<t.length?C.b.aj(t,u+1):""},
gbA:function(){var u=this,t=u.f
if(typeof t!=="number")return t.R()
if(t>=u.r)return C.U
t=P.i
return new P.eh(P.lX(u.gcq(u)),[t,t])},
eo:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.j(b,"$iC",[P.i,null],"$aC")
u=k.gbF()
t=u==="file"
s=k.c
r=s>0?C.b.A(k.a,k.b+3,s):""
q=k.ge3()?k.gby(k):j
s=k.c
if(s>0)p=C.b.A(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.A(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.ah(o,"/"))o="/"+o
m=P.l3(j,0,0,b)
n=k.r
l=n<s.length?C.b.aj(s,n+1):j
return new P.ch(u,r,p,q,o,m,l)},
gI:function(a){var u=this.y
return u==null?this.y=C.b.gI(this.a):u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.T(b).$ikY&&this.a===b.i(0)},
i:function(a){return this.a},
$ikY:1}
P.jn.prototype={}
W.v.prototype={}
W.fh.prototype={
gl:function(a){return a.length}}
W.fj.prototype={
i:function(a){return String(a)}}
W.fk.prototype={
i:function(a){return String(a)}}
W.bY.prototype={$ibY:1}
W.c_.prototype={
cB:function(a,b,c){if(c!=null)return a.getContext(b,P.oP(c))
return a.getContext(b)},
eC:function(a,b){return this.cB(a,b,null)},
$ic_:1}
W.cu.prototype={$icu:1}
W.bz.prototype={
gl:function(a){return a.length}}
W.cx.prototype={$icx:1}
W.fF.prototype={
gl:function(a){return a.length}}
W.S.prototype={$iS:1}
W.cy.prototype={
gl:function(a){return a.length}}
W.fG.prototype={}
W.b4.prototype={}
W.b5.prototype={}
W.fH.prototype={
gl:function(a){return a.length}}
W.fI.prototype={
gl:function(a){return a.length}}
W.fK.prototype={
gl:function(a){return a.length}}
W.dz.prototype={$idz:1}
W.fM.prototype={
i:function(a){return String(a)}}
W.dA.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.j(c,"$ian",[P.ac],"$aan")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[[P.an,P.ac]]},
$az:function(){return[[P.an,P.ac]]},
$ih:1,
$ah:function(){return[[P.an,P.ac]]},
$ib:1,
$ab:function(){return[[P.an,P.ac]]},
$aF:function(){return[[P.an,P.ac]]}}
W.dB.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gap(a))+" x "+H.m(this.gal(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$ian)return!1
return a.left===u.gbw(b)&&a.top===u.gbE(b)&&this.gap(a)===u.gap(b)&&this.gal(a)===u.gal(b)},
gI:function(a){return W.m6(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(this.gap(a)),C.d.gI(this.gal(a)))},
gdB:function(a){return a.bottom},
gal:function(a){return a.height},
gbw:function(a){return a.left},
gbC:function(a){return a.right},
gbE:function(a){return a.top},
gap:function(a){return a.width},
$ian:1,
$aan:function(){return[P.ac]}}
W.fN.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.O(c)
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[P.i]},
$az:function(){return[P.i]},
$ih:1,
$ah:function(){return[P.i]},
$ib:1,
$ab:function(){return[P.i]},
$aF:function(){return[P.i]}}
W.fO.prototype={
gl:function(a){return a.length}}
W.jl.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return H.f(u[b],"$ia1")},
k:function(a,b,c){var u
H.f(c,"$ia1")
u=this.b
if(b<0||b>=u.length)return H.c(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var u=this.jj(this)
return new J.as(u,u.length,[H.w(u,0)])},
$az:function(){return[W.a1]},
$ah:function(){return[W.a1]},
$ab:function(){return[W.a1]}}
W.a1.prototype={
gc8:function(a){return new W.jl(a,a.children)},
gdC:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.R()
if(s<0)s=-s*0
if(typeof r!=="number")return r.R()
if(r<0)r=-r*0
return new P.an(u,t,s,r,[P.ac])},
i:function(a){return a.localName},
$ia1:1}
W.o.prototype={$io:1}
W.k.prototype={
il:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.eZ(a,b,c,!1)},
eZ:function(a,b,c,d){return a.addEventListener(b,H.cl(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ik:1}
W.aD.prototype={$iaD:1}
W.cA.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaD")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aD]},
$az:function(){return[W.aD]},
$ih:1,
$ah:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$icA:1,
$aF:function(){return[W.aD]}}
W.fX.prototype={
gl:function(a){return a.length}}
W.h0.prototype={
gl:function(a){return a.length}}
W.aP.prototype={$iaP:1}
W.h4.prototype={
gl:function(a){return a.length}}
W.c4.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iI")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.I]},
$az:function(){return[W.I]},
$ih:1,
$ah:function(){return[W.I]},
$ib:1,
$ab:function(){return[W.I]},
$ic4:1,
$aF:function(){return[W.I]}}
W.bn.prototype={$ibn:1,
gdF:function(a){return a.data}}
W.cD.prototype={$icD:1}
W.cE.prototype={$icE:1,$icv:1}
W.cv.prototype={$ia1:1,$ik:1,$iI:1}
W.b8.prototype={$ib8:1}
W.hi.prototype={
i:function(a){return String(a)}}
W.hB.prototype={
gl:function(a){return a.length}}
W.cJ.prototype={$icJ:1}
W.hC.prototype={
j:function(a,b){return P.bx(a.get(H.O(b)))},
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bx(t.value[1]))}},
gaA:function(a){var u=H.d([],[P.i])
this.J(a,new W.hD(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.e(P.H("Not supported"))},
$aam:function(){return[P.i,null]},
$iC:1,
$aC:function(){return[P.i,null]}}
W.hD.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.hE.prototype={
j:function(a,b){return P.bx(a.get(H.O(b)))},
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bx(t.value[1]))}},
gaA:function(a){var u=H.d([],[P.i])
this.J(a,new W.hF(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.e(P.H("Not supported"))},
$aam:function(){return[P.i,null]},
$iC:1,
$aC:function(){return[P.i,null]}}
W.hF.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.aQ.prototype={$iaQ:1}
W.hG.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaQ")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aQ]},
$az:function(){return[W.aQ]},
$ih:1,
$ah:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aF:function(){return[W.aQ]}}
W.ah.prototype={$iah:1}
W.jk.prototype={
k:function(a,b,c){var u,t
H.f(c,"$iI")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.c(t,b)
u.replaceChild(c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.dE(u,u.length,[H.co(C.V,u,"F",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$az:function(){return[W.I]},
$ah:function(){return[W.I]},
$ab:function(){return[W.I]}}
W.I.prototype={
jb:function(a,b){var u,t
try{u=a.parentNode
J.mY(u,b,a)}catch(t){H.aM(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eG(a):u},
hO:function(a,b,c){return a.replaceChild(b,c)},
$iI:1}
W.cO.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iI")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.I]},
$az:function(){return[W.I]},
$ih:1,
$ah:function(){return[W.I]},
$ib:1,
$ab:function(){return[W.I]},
$aF:function(){return[W.I]}}
W.aR.prototype={$iaR:1,
gl:function(a){return a.length}}
W.hT.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaR")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aR]},
$az:function(){return[W.aR]},
$ih:1,
$ah:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aF:function(){return[W.aR]}}
W.i0.prototype={
j:function(a,b){return P.bx(a.get(H.O(b)))},
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bx(t.value[1]))}},
gaA:function(a){var u=H.d([],[P.i])
this.J(a,new W.i1(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.e(P.H("Not supported"))},
$aam:function(){return[P.i,null]},
$iC:1,
$aC:function(){return[P.i,null]}}
W.i1.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.i3.prototype={
gl:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.ic.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaS")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aS]},
$az:function(){return[W.aS]},
$ih:1,
$ah:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aF:function(){return[W.aS]}}
W.aT.prototype={$iaT:1}
W.id.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaT")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aT]},
$az:function(){return[W.aT]},
$ih:1,
$ah:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aF:function(){return[W.aT]}}
W.aU.prototype={$iaU:1,
gl:function(a){return a.length}}
W.ii.prototype={
j:function(a,b){return a.getItem(H.O(b))},
k:function(a,b,c){a.setItem(b,c)},
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,P.i]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaA:function(a){var u=H.d([],[P.i])
this.J(a,new W.ij(u))
return u},
gl:function(a){return a.length},
$aam:function(){return[P.i,P.i]},
$iC:1,
$aC:function(){return[P.i,P.i]}}
W.ij.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:27}
W.aH.prototype={$iaH:1}
W.bt.prototype={$ibt:1}
W.aV.prototype={$iaV:1}
W.aI.prototype={$iaI:1}
W.ir.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaI")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aI]},
$az:function(){return[W.aI]},
$ih:1,
$ah:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$aF:function(){return[W.aI]}}
W.is.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaV")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aV]},
$az:function(){return[W.aV]},
$ih:1,
$ah:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aF:function(){return[W.aV]}}
W.iy.prototype={
gl:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.aY.prototype={$iaY:1}
W.iB.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaX")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aX]},
$az:function(){return[W.aX]},
$ih:1,
$ah:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aF:function(){return[W.aX]}}
W.iC.prototype={
gl:function(a){return a.length}}
W.bQ.prototype={}
W.iX.prototype={
i:function(a){return String(a)}}
W.jc.prototype={
gl:function(a){return a.length}}
W.bh.prototype={
giA:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.H("deltaY is not supported"))},
giz:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.H("deltaX is not supported"))},
$ibh:1}
W.d1.prototype={
hP:function(a,b){return a.requestAnimationFrame(H.cl(H.n(b,{func:1,ret:-1,args:[P.ac]}),1))},
fg:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jm.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iS")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.S]},
$az:function(){return[W.S]},
$ih:1,
$ah:function(){return[W.S]},
$ib:1,
$ab:function(){return[W.S]},
$aF:function(){return[W.S]}}
W.ep.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$ian)return!1
return a.left===u.gbw(b)&&a.top===u.gbE(b)&&a.width===u.gap(b)&&a.height===u.gal(b)},
gI:function(a){return W.m6(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(a.width),C.d.gI(a.height))},
gal:function(a){return a.height},
gap:function(a){return a.width}}
W.jA.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaP")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aP]},
$az:function(){return[W.aP]},
$ih:1,
$ah:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aF:function(){return[W.aP]}}
W.eG.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iI")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.I]},
$az:function(){return[W.I]},
$ih:1,
$ah:function(){return[W.I]},
$ib:1,
$ab:function(){return[W.I]},
$aF:function(){return[W.I]}}
W.jM.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaU")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aU]},
$az:function(){return[W.aU]},
$ih:1,
$ah:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aF:function(){return[W.aU]}}
W.jQ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaH")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aH]},
$az:function(){return[W.aH]},
$ih:1,
$ah:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aF:function(){return[W.aH]}}
W.jo.prototype={}
W.l1.prototype={}
W.jp.prototype={}
W.jq.prototype={
$1:function(a){return this.a.$1(H.f(a,"$io"))},
$S:32}
W.F.prototype={
gV:function(a){return new W.dE(a,this.gl(a),[H.co(this,a,"F",0)])}}
W.dE.prototype={
C:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sd5(J.dl(u.a,t))
u.c=t
return!0}u.sd5(null)
u.c=s
return!1},
gM:function(a){return this.d},
sd5:function(a){this.d=H.D(a,H.w(this,0))},
$ib6:1}
W.eo.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.d8.prototype={}
W.d9.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eT.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.da.prototype={}
W.db.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
P.jN.prototype={
e_:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cA:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.T(a)
if(!!u.$iaA)return new Date(a.a)
if(!!u.$inD)throw H.e(P.iP("structured clone of RegExp"))
if(!!u.$iaD)return a
if(!!u.$ibY)return a
if(!!u.$icA)return a
if(!!u.$ibn)return a
if(!!u.$icL||!!u.$ibK||!!u.$icJ)return a
if(!!u.$iC){t=q.e_(a)
s=q.b
if(t>=s.length)return H.c(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.J(a,new P.jP(p,q))
return p.a}if(!!u.$ib){t=q.e_(a)
p=q.b
if(t>=p.length)return H.c(p,t)
r=p[t]
if(r!=null)return r
return q.ix(a,t)}throw H.e(P.iP("structured clone of other type"))},
ix:function(a,b){var u,t=J.dh(a),s=t.gl(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.cA(t.j(a,u)))
return r}}
P.jP.prototype={
$2:function(a,b){this.a.a[a]=this.b.cA(b)},
$S:8}
P.f2.prototype={$ibn:1,
gdF:function(a){return this.a}}
P.kc.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.jO.prototype={}
P.fY.prototype={
gbk:function(){var u=this.b,t=H.aB(u,"z",0),s=W.a1
return new H.hn(new H.jd(u,H.n(new P.fZ(),{func:1,ret:P.Z,args:[t]}),[t]),H.n(new P.h_(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.f(c,"$ia1")
u=this.gbk()
J.n1(u.b.$1(J.kF(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aO(this.gbk().a)},
j:function(a,b){var u=this.gbk()
return u.b.$1(J.kF(u.a,b))},
gV:function(a){var u=P.lA(this.gbk(),!1,W.a1)
return new J.as(u,u.length,[H.w(u,0)])},
$az:function(){return[W.a1]},
$ah:function(){return[W.a1]},
$ab:function(){return[W.a1]}}
P.fZ.prototype={
$1:function(a){return!!J.T(H.f(a,"$iI")).$ia1},
$S:31}
P.h_.prototype={
$1:function(a){return H.p(H.f(a,"$iI"),"$ia1")},
$S:30}
P.jF.prototype={
gbC:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.u(t)
return H.D(u+t,H.w(this,0))},
gdB:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.u(t)
return H.D(u+t,H.w(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.m(u.a)+", "+H.m(u.b)+") "+H.m(u.c)+" x "+H.m(u.d)},
p:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.T(b)
if(!!u.$ian){t=p.a
if(t==u.gbw(b)){s=p.b
if(s==u.gbE(b)){r=p.c
if(typeof t!=="number")return t.v()
if(typeof r!=="number")return H.u(r)
q=H.w(p,0)
if(H.D(t+r,q)===u.gbC(b)){t=p.d
if(typeof s!=="number")return s.v()
if(typeof t!=="number")return H.u(t)
u=H.D(s+t,q)===u.gdB(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t=this,s=t.a,r=J.dm(s),q=t.b,p=J.dm(q),o=t.c
if(typeof s!=="number")return s.v()
if(typeof o!=="number")return H.u(o)
u=H.w(t,0)
o=C.e.gI(H.D(s+o,u))
s=t.d
if(typeof q!=="number")return q.v()
if(typeof s!=="number")return H.u(s)
u=C.e.gI(H.D(q+s,u))
return P.o1(P.jC(P.jC(P.jC(P.jC(0,r),p),o),u))}}
P.an.prototype={
gbw:function(a){return this.a},
gbE:function(a){return this.b},
gap:function(a){return this.c},
gal:function(a){return this.d}}
P.b9.prototype={$ib9:1}
P.hb.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib9")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[P.b9]},
$ih:1,
$ah:function(){return[P.b9]},
$ib:1,
$ab:function(){return[P.b9]},
$aF:function(){return[P.b9]}}
P.bc.prototype={$ibc:1}
P.hP.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibc")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[P.bc]},
$ih:1,
$ah:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$aF:function(){return[P.bc]}}
P.hV.prototype={
gl:function(a){return a.length}}
P.ip.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.O(c)
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[P.i]},
$ih:1,
$ah:function(){return[P.i]},
$ib:1,
$ab:function(){return[P.i]},
$aF:function(){return[P.i]}}
P.q.prototype={
gc8:function(a){return new P.fY(a,new W.jk(a))}}
P.bf.prototype={$ibf:1}
P.iD.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibf")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[P.bf]},
$ih:1,
$ah:function(){return[P.bf]},
$ib:1,
$ab:function(){return[P.bf]},
$aF:function(){return[P.bf]}}
P.ez.prototype={}
P.eA.prototype={}
P.eJ.prototype={}
P.eK.prototype={}
P.eU.prototype={}
P.eV.prototype={}
P.f0.prototype={}
P.f1.prototype={}
P.Q.prototype={$ih:1,
$ah:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]},
$inP:1}
P.fn.prototype={
gl:function(a){return a.length}}
P.fo.prototype={
j:function(a,b){return P.bx(a.get(H.O(b)))},
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bx(t.value[1]))}},
gaA:function(a){var u=H.d([],[P.i])
this.J(a,new P.fp(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.e(P.H("Not supported"))},
$aam:function(){return[P.i,null]},
$iC:1,
$aC:function(){return[P.i,null]}}
P.fp.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
P.fq.prototype={
gl:function(a){return a.length}}
P.bX.prototype={}
P.hQ.prototype={
gl:function(a){return a.length}}
P.en.prototype={}
P.dq.prototype={$idq:1}
P.dF.prototype={$idF:1}
P.e_.prototype={$ie_:1}
P.e1.prototype={$ie1:1}
P.ca.prototype={
es:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.T(g)
if(!!u.$ibn&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.oQ(g))
return}if(!!u.$icD&&h==null&&t&&!0){this.i6(a,b,c,d,e,f,g)
return}throw H.e(P.dn("Incorrect number or type of arguments"))},
jg:function(a,b,c,d,e,f,g){return this.es(a,b,c,d,e,f,g,null,null,null)},
i6:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a2:function(a,b,c){return a.uniform1f(b,c)},
aX:function(a,b,c){return a.uniform1i(b,c)},
bg:function(a,b,c,d){return a.uniform2f(b,c,d)},
U:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
cw:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
jo:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cz:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ica:1}
P.e3.prototype={$ie3:1}
P.e8.prototype={$ie8:1}
P.ef.prototype={$ief:1}
P.ie.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return P.bx(a.item(b))},
k:function(a,b,c){H.f(c,"$iC")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[[P.C,,,]]},
$ih:1,
$ah:function(){return[[P.C,,,]]},
$ib:1,
$ab:function(){return[[P.C,,,]]},
$aF:function(){return[[P.C,,,]]}}
P.eQ.prototype={}
P.eR.prototype={}
O.V.prototype={
bh:function(a){var u=this
u.sfz(H.d([],[a]))
u.sdf(null)
u.sda(null)
u.sdg(null)},
cC:function(a,b,c){var u=this,t=H.aB(u,"V",0)
H.n(b,{func:1,ret:P.Z,args:[[P.h,t]]})
t={func:1,ret:-1,args:[P.l,[P.h,t]]}
H.n(a,t)
H.n(c,t)
u.sdf(b)
u.sda(a)
u.sdg(c)},
aM:function(a,b){return this.cC(a,null,b)},
de:function(a){var u
H.j(a,"$ih",[H.aB(this,"V",0)],"$ah")
u=this.b
if(u!=null)return u.$1(a)
return!0},
d9:function(a,b){var u
H.j(b,"$ih",[H.aB(this,"V",0)],"$ah")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.as(u,u.length,[H.w(u,0)])},
L:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aB(s,"V",0)
H.D(b,r)
r=[r]
if(H.E(s.de(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.d9(t,H.d([b],r))}},
b1:function(a,b){var u,t,s=this
H.j(b,"$ih",[H.aB(s,"V",0)],"$ah")
if(H.E(s.de(b))){u=s.a
t=u.length
C.a.b1(u,b)
s.d9(t,b)}},
sfz:function(a){this.a=H.j(a,"$ib",[H.aB(this,"V",0)],"$ab")},
sdf:function(a){this.b=H.n(a,{func:1,ret:P.Z,args:[[P.h,H.aB(this,"V",0)]]})},
sda:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.l,[P.h,H.aB(this,"V",0)]]})},
sdg:function(a){H.n(a,{func:1,ret:-1,args:[P.l,[P.h,H.aB(this,"V",0)]]})},
$ih:1}
O.cH.prototype={
gl:function(a){return this.a.length},
gn:function(){var u=this.b
return u==null?this.b=D.L():u},
aN:function(){var u=this.b
if(u!=null)u.B(null)},
ga9:function(a){var u=this.a
if(u.length>0)return C.a.gaK(u)
else return V.bq()},
bz:function(a){var u=this.a
if(a==null)C.a.h(u,V.bq())
else C.a.h(u,a)
this.aN()},
bd:function(){var u=this.a
if(u.length>0){u.pop()
this.aN()}},
sbO:function(a){this.a=H.j(a,"$ib",[V.ae],"$ab")}}
E.fu.prototype={}
E.al.prototype={
cT:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.as(u,u.length,[H.w(u,0)]);u.C();){t=u.d
if(t.f==null)t.cT()}},
sbG:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gn().E(0,s.geg())
u=s.c
if(u!=null)u.gn().h(0,s.geg())
t=new D.t("shape",r,s.c,[F.e4])
t.b=!0
s.av(t)}},
sao:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gn().E(0,s.gei())
u=s.f
s.f=a
if(a!=null)a.gn().h(0,s.gei())
s.cT()
t=new D.t("technique",u,s.f,[O.bu])
t.b=!0
s.av(t)}},
sba:function(a){var u,t,s=this
if(!J.J(s.r,a)){u=s.r
if(u!=null)u.gn().E(0,s.gee())
if(a!=null)a.gn().h(0,s.gee())
s.r=a
t=new D.t("mover",u,a,[U.ai])
t.b=!0
s.av(t)}},
aa:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aD(0,b,s):null
if(!J.J(q,s.x)){u=s.x
s.x=q
t=new D.t("matrix",u,q,[V.ae])
t.b=!0
s.av(t)}r=s.f
if(r!=null)r.aa(0,b)
for(r=s.y.a,r=new J.as(r,r.length,[H.w(r,0)]);r.C();)r.d.aa(0,b)},
a1:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga9(s))
else C.a.h(s.a,r.m(0,s.ga9(s)))
s.aN()
a.cp(t.f)
s=a.dy
u=(s&&C.a).gaK(s)
if(u!=null&&t.d!=null)u.bB(a,t)
for(s=t.y.a,s=new J.as(s,s.length,[H.w(s,0)]);s.C();)s.d.a1(a)
a.co()
a.dx.bd()},
gn:function(){var u=this.z
return u==null?this.z=D.L():u},
av:function(a){var u=this.z
if(u!=null)u.B(a)},
a3:function(){return this.av(null)},
eh:function(a){H.f(a,"$iB")
this.e=null
this.av(a)},
iY:function(){return this.eh(null)},
ej:function(a){this.av(H.f(a,"$iB"))},
iZ:function(){return this.ej(null)},
ef:function(a){this.av(H.f(a,"$iB"))},
iX:function(){return this.ef(null)},
ed:function(a){this.av(H.f(a,"$iB"))},
iU:function(){return this.ed(null)},
iT:function(a,b){var u,t,s,r,q,p,o
H.j(b,"$ih",[E.al],"$ah")
for(u=b.length,t=this.gec(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bD()
o.sac(null)
o.saQ(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sac(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a3()},
iW:function(a,b){var u,t
H.j(b,"$ih",[E.al],"$ah")
for(u=b.gV(b),t=this.gec();u.C();)u.gM(u).gn().E(0,t)
this.a3()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seO:function(a,b){this.y=H.j(b,"$iV",[E.al],"$aV")},
$ic6:1}
E.hX.prototype={
eK:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aA(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cH()
t=[V.ae]
u.sbO(H.d([],t))
u.b=null
u.gn().h(0,new E.hY(s))
s.cy=u
u=new O.cH()
u.sbO(H.d([],t))
u.b=null
u.gn().h(0,new E.hZ(s))
s.db=u
u=new O.cH()
u.sbO(H.d([],t))
u.b=null
u.gn().h(0,new E.i_(s))
s.dx=u
s.si5(H.d([],[O.bu]))
u=s.dy;(u&&C.a).h(u,null)
s.shZ(new H.a0([P.i,A.cT]))},
gj8:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga9(s)
u=t.db
u=t.z=s.m(0,u.ga9(u))
s=u}return s},
gem:function(){var u,t=this,s=t.ch
if(s==null){s=t.gj8()
u=t.dx
u=t.ch=s.m(0,u.ga9(u))
s=u}return s},
gez:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.ga9(s)
u=t.dx
u=t.cx=s.m(0,u.ga9(u))
s=u}return s},
cp:function(a){var u=this.dy,t=a==null?(u&&C.a).gaK(u):a;(u&&C.a).h(u,t)},
co:function(){var u=this.dy
if(u.length>1)u.pop()},
bq:function(a){var u=a.b
if(u.length===0)throw H.e(P.y("May not cache a shader with no name."))
if(this.fr.bs(0,u))throw H.e(P.y('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)},
si5:function(a){this.dy=H.j(a,"$ib",[O.bu],"$ab")},
shZ:function(a){this.fr=H.j(a,"$iC",[P.i,A.cT],"$aC")}}
E.hY.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.ch=u.z=null},
$S:10}
E.hZ.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:10}
E.i_.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.cx=u.ch=null},
$S:10}
E.eb.prototype={
cO:function(a){H.f(a,"$iB")
this.ep()},
cN:function(){return this.cO(null)},
giH:function(){var u,t=this,s=Date.now(),r=C.e.a5(P.lt(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aA(s,!1)
return u/r},
dj:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.m()
if(typeof r!=="number")return H.u(r)
u=C.d.b7(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.m()
t=C.d.b7(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lS(C.q,s.gjc())}},
ep:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.ix(this),{func:1,ret:-1,args:[P.ac]})
C.A.fg(u)
C.A.hP(u,W.mm(t,P.ac))}},
ja:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dj()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aA(r,!1)
s.y=P.lt(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aN()
r=s.db
C.a.sl(r.a,0)
r.aN()
r=s.dx
C.a.sl(r.a,0)
r.aN()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.a1(p.e)}}catch(q){u=H.aM(q)
t=H.cp(q)
P.lg("Error: "+H.m(u))
P.lg("Stack: "+H.m(t))
throw H.e(u)}}}
E.ix.prototype={
$1:function(a){var u
H.mx(a)
u=this.a
if(u.ch){u.ch=!1
u.ja()}},
$S:53}
Z.el.prototype={$ipg:1}
Z.dr.prototype={
X:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aM(s)
t=P.y('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.m(u))
throw H.e(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.m(u.e)+"]"}}
Z.cg.prototype={$iph:1}
Z.bm.prototype={
ak:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
X:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].X(a)},
aC:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a1:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.i],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.az(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.q(p,", ")+"\nAttrs:   "+C.a.q(r,", ")},
sfs:function(a){this.b=H.j(a,"$ib",[Z.bE],"$ab")},
$ipo:1}
Z.bE.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c8(this.c)+"'")+"]"}}
Z.b_.prototype={
gcF:function(a){var u=this.a,t=(u&$.ar().a)!==0?3:0
if((u&$.b0().a)!==0)t+=3
if((u&$.bl().a)!==0)t+=3
if((u&$.aN().a)!==0)t+=2
if((u&$.by().a)!==0)t+=3
if((u&$.dj().a)!==0)t+=3
if((u&$.dk().a)!==0)t+=4
if((u&$.bV().a)!==0)++t
return(u&$.bk().a)!==0?t+4:t},
iq:function(a){var u,t=$.ar(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.b0()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aN()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.by()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bV()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0)if(u===a)return t
return $.mT()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b_))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.i]),t=this.a
if((t&$.ar().a)!==0)C.a.h(u,"Pos")
if((t&$.b0().a)!==0)C.a.h(u,"Norm")
if((t&$.bl().a)!==0)C.a.h(u,"Binm")
if((t&$.aN().a)!==0)C.a.h(u,"Txt2D")
if((t&$.by().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dj().a)!==0)C.a.h(u,"Clr3")
if((t&$.dk().a)!==0)C.a.h(u,"Clr4")
if((t&$.bV().a)!==0)C.a.h(u,"Weight")
if((t&$.bk().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.q(u,"|")}}
D.fx.prototype={}
D.bD.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.B]}
H.n(b,u)
if(this.a==null)this.sac(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
E:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.B]})
u=s.a
u=u==null?null:C.a.au(u,b)
if(u===!0){u=s.a
t=(u&&C.a).E(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.au(u,b)
if(u===!0){u=s.b
t=(u&&C.a).E(u,b)||t}return t},
B:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.B()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.J(P.lA(u,!0,{func:1,ret:-1,args:[D.B]}),new D.fU(q))
u=r.b
if(u!=null){r.saQ(H.d([],[{func:1,ret:-1,args:[D.B]}]))
C.a.J(u,new D.fV(q))}return!0},
dK:function(){return this.B(null)},
ae:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.B(u)}}},
sac:function(a){this.a=H.j(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")},
saQ:function(a){this.b=H.j(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")}}
D.fU.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:28}
D.fV.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:28}
D.B.prototype={}
D.bF.prototype={}
D.bG.prototype={}
D.t.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.ds.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ds))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.dN.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dN))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.ha.prototype={
j4:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
j0:function(a){this.c=a.b
this.d.E(0,a.a)
return!1},
shI:function(a){this.d=H.j(a,"$ilO",[P.l],"$alO")}}
X.dQ.prototype={}
X.hj.prototype={
aZ:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.m()
u=b.b
t=q.ch
if(typeof u!=="number")return u.m()
s=new V.a8(o.a+n*m,o.b+u*t)
t=q.a.gaT()
r=new X.bJ(a,V.bs(),q.x,t,s)
r.b=!0
q.z=new P.aA(p,!1)
q.x=s
return r},
cn:function(a,b){this.r=a.a
return!1},
bc:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eD()
if(typeof u!=="number")return u.aq()
this.r=(u&~t)>>>0
return!1},
bb:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.aZ(a,b))
return!0},
j5:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaT()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.m()
q=a.b
p=o.cy
if(typeof q!=="number")return q.m()
t=new X.cK(new V.U(s*r,q*p),u,t)
t.b=!0
n.B(t)
return!0},
he:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dQ(c,r.a.gaT(),b)
s.b=!0
t.B(s)
r.y=new P.aA(u,!1)
r.x=V.bs()}}
X.aE.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aE))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.E(this.b)?"Alt+":""
return u+(H.E(this.c)?"Shift+":"")}}
X.bJ.prototype={}
X.hH.prototype={
bM:function(a,b,c){var u=this,t=new P.aA(Date.now(),!1),s=u.a.gaT(),r=new X.bJ(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cn:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.B(this.bM(a,b,!0))
return!0},
bc:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eD()
if(typeof t!=="number")return t.aq()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.B(u.bM(a,b,!0))
return!0},
bb:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.bM(a,b,!1))
return!0},
j6:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaT()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.m()
r=a.b
q=p.ch
if(typeof r!=="number")return r.m()
u=new X.cK(new V.U(t*s,r*q),u,b)
u.b=!0
o.B(u)
return!0}}
X.cK.prototype={}
X.hU.prototype={}
X.ed.prototype={}
X.iA.prototype={
aZ:function(a,b){var u,t,s,r,q=this
H.j(a,"$ib",[V.a8],"$ab")
u=new P.aA(Date.now(),!1)
t=a.length>0?a[0]:V.bs()
s=q.a.gaT()
r=new X.ed(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
j3:function(a){var u
H.j(a,"$ib",[V.a8],"$ab")
u=this.b
if(u==null)return!1
u.B(this.aZ(a,!0))
return!0},
j1:function(a){var u
H.j(a,"$ib",[V.a8],"$ab")
u=this.c
if(u==null)return!1
u.B(this.aZ(a,!0))
return!0},
j2:function(a){var u
H.j(a,"$ib",[V.a8],"$ab")
u=this.d
if(u==null)return!1
u.B(this.aZ(a,!1))
return!0}}
X.ei.prototype={
gaT:function(){var u=this.a,t=C.i.gdC(u).c
t.toString
u=C.i.gdC(u).d
u.toString
return V.cR(0,0,t,u)},
d0:function(a){var u=a.keyCode,t=H.E(a.ctrlKey)||H.E(a.metaKey)
return new X.dN(u,new X.aE(t,a.altKey,a.shiftKey))},
aR:function(a){var u=this.b,t=H.E(a.ctrlKey)||H.E(a.metaKey)
u.c=new X.aE(t,a.altKey,a.shiftKey)},
bY:function(a){var u=this.b,t=H.E(a.ctrlKey)||H.E(a.metaKey)
u.c=new X.aE(t,a.altKey,a.shiftKey)},
aI:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.D()
u=t.top
if(typeof r!=="number")return r.D()
return new V.a8(s-q,r-u)},
b_:function(a){return new V.U(a.movementX,a.movementY)},
bT:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.a8])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
q=C.d.Z(r.pageX)
C.d.Z(r.pageY)
p=o.left
C.d.Z(r.pageX)
C.a.h(n,new V.a8(q-p,C.d.Z(r.pageY)-o.top))}return n},
aF:function(a){var u=a.buttons,t=H.E(a.ctrlKey)||H.E(a.metaKey)
return new X.ds(u,new X.aE(t,a.altKey,a.shiftKey))},
bP:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.D()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.D()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
h8:function(a){this.f=!0},
fT:function(a){this.f=!1},
fZ:function(a){H.f(a,"$iah")
if(H.E(this.f)&&this.bP(a))a.preventDefault()},
hc:function(a){var u
H.f(a,"$ib8")
if(!H.E(this.f))return
u=this.d0(a)
this.b.j4(u)},
ha:function(a){var u
H.f(a,"$ib8")
if(!H.E(this.f))return
u=this.d0(a)
this.b.j0(u)},
hg:function(a){var u,t,s,r,q=this
H.f(a,"$iah")
u=q.a
u.focus()
q.f=!0
q.aR(a)
if(H.E(q.x)){t=q.aF(a)
s=q.b_(a)
if(q.d.cn(t,s))a.preventDefault()
return}if(H.E(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aF(a)
r=q.aI(a)
if(q.c.cn(t,r))a.preventDefault()},
hk:function(a){var u,t,s,r=this
H.f(a,"$iah")
r.aR(a)
u=r.aF(a)
if(H.E(r.x)){t=r.b_(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.aI(a)
if(r.c.bc(u,s))a.preventDefault()},
h2:function(a){var u,t,s,r=this
H.f(a,"$iah")
if(!r.bP(a)){r.aR(a)
u=r.aF(a)
if(H.E(r.x)){t=r.b_(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.aI(a)
if(r.c.bc(u,s))a.preventDefault()}},
hi:function(a){var u,t,s,r=this
H.f(a,"$iah")
r.aR(a)
u=r.aF(a)
if(H.E(r.x)){t=r.b_(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.aI(a)
if(r.c.bb(u,s))a.preventDefault()},
h0:function(a){var u,t,s,r=this
H.f(a,"$iah")
if(!r.bP(a)){r.aR(a)
u=r.aF(a)
if(H.E(r.x)){t=r.b_(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.aI(a)
if(r.c.bb(u,s))a.preventDefault()}},
hm:function(a){var u,t,s=this
H.f(a,"$ibh")
s.aR(a)
u=new V.U((a&&C.z).giz(a),C.z.giA(a)).w(0,180)
if(H.E(s.x)){if(s.d.j5(u))a.preventDefault()
return}if(H.E(s.r))return
t=s.aI(a)
if(s.c.j6(u,t))a.preventDefault()},
ho:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aF(s.y)
t=s.aI(s.y)
s.d.he(u,t,r)}},
hE:function(a){var u,t=this
H.f(a,"$iaY")
t.a.focus()
t.f=!0
t.bY(a)
u=t.bT(a)
if(t.e.j3(u))a.preventDefault()},
hA:function(a){var u
H.f(a,"$iaY")
this.bY(a)
u=this.bT(a)
if(this.e.j1(u))a.preventDefault()},
hC:function(a){var u
H.f(a,"$iaY")
this.bY(a)
u=this.bT(a)
if(this.e.j2(u))a.preventDefault()},
sfi:function(a){this.z=H.j(a,"$ib",[[P.cV,P.P]],"$ab")}}
D.dy.prototype={$iag:1,$ic6:1}
D.ag.prototype={$ic6:1}
D.dO.prototype={
gn:function(){var u=this.x
return u==null?this.x=D.L():u},
af:function(a){var u=this.x
if(u!=null)u.B(a)},
dd:function(a){var u
H.f(a,"$iB")
u=this.y
if(u!=null)u.B(a)},
hd:function(){return this.dd(null)},
hq:function(a){var u,t,s
H.j(a,"$ih",[D.ag],"$ah")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.A)(a),++t){s=a[t]
if(s==null||this.f8(s))return!1}return!0},
fN:function(a,b){var u,t,s,r,q,p,o,n=D.ag
H.j(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gdc(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=H.f(b[q],"$iag")
if(p instanceof D.bL)C.a.h(this.f,p)
o=p.Q
if(o==null){o=new D.bD()
o.sac(null)
o.saQ(null)
o.c=null
o.d=0
p.Q=o}H.n(t,s)
if(o.a==null)o.sac(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bF([n])
n.b=!0
this.af(n)},
hu:function(a,b){var u,t,s,r=D.ag
H.j(b,"$ih",[r],"$ah")
for(u=b.gV(b),t=this.gdc();u.C();){s=u.gM(u)
C.a.E(this.e,s)
s.gn().E(0,t)}r=new D.bG([r])
r.b=!0
this.af(r)},
f8:function(a){var u=C.a.au(this.f,a)
return u},
seP:function(a){this.e=H.j(a,"$ib",[D.dy],"$ab")},
shF:function(a){this.f=H.j(a,"$ib",[D.bL],"$ab")},
seS:function(a){this.r=H.j(a,"$ib",[D.e6],"$ab")},
$ah:function(){return[D.ag]},
$aV:function(){return[D.ag]}}
D.bL.prototype={
gn:function(){var u=this.Q
return u==null?this.Q=D.L():u},
af:function(a){var u
H.f(a,"$iB")
u=this.Q
if(u!=null)u.B(a)},
eR:function(){return this.af(null)},
gat:function(){return 4},
$iag:1,
$ic6:1}
D.e6.prototype={$iag:1,$ic6:1}
V.a6.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.ad.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ad))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.fT.prototype={}
V.cG.prototype={
a6:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.r])
return t},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.cG))return!1
u=b.a
t=$.G()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
if(!(Math.abs(b.c-q.c)<s))return!1
if(!(Math.abs(b.d-q.d)<s))return!1
if(!(Math.abs(b.e-q.e)<s))return!1
if(!(Math.abs(b.f-q.f)<s))return!1
u=b.r
r=q.r
t.toString
if(typeof u!=="number")return u.D()
if(typeof r!=="number")return H.u(r)
if(!(Math.abs(u-r)<s))return!1
u=b.x
t=q.x
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=q.y
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.r],o=V.cn(H.d([q.a,q.d,q.r],p),3,0),n=V.cn(H.d([q.b,q.e,q.x],p),3,0),m=V.cn(H.d([q.c,q.f,q.y],p),3,0)
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
V.ae.prototype={
a6:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.r])
return t},
iM:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a,c=e.f,b=e.b,a=e.e,a0=d*c-b*a,a1=e.r,a2=e.c,a3=d*a1-a2*a,a4=e.x,a5=e.d,a6=d*a4-a5*a,a7=b*a1-a2*c,a8=b*a4-a5*c,a9=a2*a4-a5*a1,b0=e.y,b1=e.cy
if(typeof b0!=="number")return b0.m()
u=e.z
t=e.cx
if(typeof u!=="number")return u.m()
s=b0*b1-u*t
r=e.db
q=e.Q
if(typeof q!=="number")return q.m()
p=b0*r-q*t
o=e.dx
n=e.ch
m=b0*o-n*t
l=u*r-q*b1
k=u*o-n*b1
j=q*o-n*r
i=a0*j-a3*k+a6*l+a7*m-a8*p+a9*s
if(Math.abs(i-0)<$.G().a)return V.bq()
h=1/i
g=-a
f=-t
return V.bb((c*j-a1*k+a4*l)*h,(-b*j+a2*k-a5*l)*h,(b1*a9-r*a8+o*a7)*h,(-u*a9+q*a8-n*a7)*h,(g*j+a1*m-a4*p)*h,(d*j-a2*m+a5*p)*h,(f*a9+r*a6-o*a3)*h,(b0*a9-q*a6+n*a3)*h,(a*k-c*m+a4*s)*h,(-d*k+b*m-a5*s)*h,(t*a8-b1*a6+o*a0)*h,(-b0*a8+u*a6-n*a0)*h,(g*l+c*p-a1*s)*h,(d*l-b*p+a2*s)*h,(f*a7+b1*a3-r*a0)*h,(b0*a7-u*a3+q*a0)*h)},
m:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.a,a7=b3.a,a8=a5.b,a9=b3.e,b0=a5.c,b1=b3.y
if(typeof b1!=="number")return H.u(b1)
u=a5.d
t=b3.cx
s=b3.b
r=b3.f
q=b3.z
if(typeof q!=="number")return H.u(q)
p=b3.cy
o=b3.c
n=b3.r
m=b3.Q
if(typeof m!=="number")return H.u(m)
l=b3.db
k=b3.d
j=b3.x
i=b3.ch
h=b3.dx
g=a5.e
f=a5.f
e=a5.r
d=a5.x
c=a5.y
if(typeof c!=="number")return c.m()
b=a5.z
if(typeof b!=="number")return b.m()
a=a5.Q
if(typeof a!=="number")return a.m()
a0=a5.ch
a1=a5.cx
a2=a5.cy
a3=a5.db
a4=a5.dx
return V.bb(a6*a7+a8*a9+b0*b1+u*t,a6*s+a8*r+b0*q+u*p,a6*o+a8*n+b0*m+u*l,a6*k+a8*j+b0*i+u*h,g*a7+f*a9+e*b1+d*t,g*s+f*r+e*q+d*p,g*o+f*n+e*m+d*l,g*k+f*j+e*i+d*h,c*a7+b*a9+a*b1+a0*t,c*s+b*r+a*q+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,a1*a7+a2*a9+a3*b1+a4*t,a1*s+a2*r+a3*q+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h)},
cv:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.u(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.a9(r.a*q+r.b*p+r.c*o+r.d,r.e*q+r.f*p+r.r*o+r.x,u*q+t*p+s*o+r.ch)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.ae))return!1
u=b.a
t=$.G()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
if(!(Math.abs(b.c-q.c)<s))return!1
if(!(Math.abs(b.d-q.d)<s))return!1
if(!(Math.abs(b.e-q.e)<s))return!1
if(!(Math.abs(b.f-q.f)<s))return!1
if(!(Math.abs(b.r-q.r)<s))return!1
if(!(Math.abs(b.x-q.x)<s))return!1
u=b.y
r=q.y
t.toString
if(typeof u!=="number")return u.D()
if(typeof r!=="number")return H.u(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=q.z
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=q.Q
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-q.ch)<s))return!1
if(!(Math.abs(b.cx-q.cx)<s))return!1
if(!(Math.abs(b.cy-q.cy)<s))return!1
if(!(Math.abs(b.db-q.db)<s))return!1
if(!(Math.abs(b.dx-q.dx)<s))return!1
return!0},
i:function(a){return this.O()},
G:function(a){var u,t,s,r,q,p=this,o=[P.r],n=V.cn(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.cn(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.cn(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.cn(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
O:function(){return this.G("")}}
V.a8.prototype={
D:function(a,b){return new V.a8(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a8))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.a9.prototype={
v:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.u(t)
return new V.a9(this.a+b.a,this.b+b.b,u+t)},
D:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.u(t)
return new V.a9(this.a-b.a,this.b-b.b,u-t)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.G()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.D()
if(typeof r!=="number")return H.u(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.bd.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bd))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.bO.prototype={
gaB:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bO))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.U.prototype={
b8:function(a){return Math.sqrt(this.F(this))},
F:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.u(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.u(t)
return s*r+u*t},
m:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.m()
u=this.b
if(typeof u!=="number")return u.m()
return new V.U(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.G().a){u=$.m_
return u==null?$.m_=new V.U(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.U(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=this.a
s=$.G()
s.toString
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.u(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.R.prototype={
b8:function(a){return Math.sqrt(this.F(this))},
F:function(a){var u=this.c,t=a.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.u(t)
return this.a*a.a+this.b*a.b+u*t},
cl:function(a,b){var u=this.a,t=this.b,s=this.c,r=a.c
if(typeof r!=="number")return r.D()
if(typeof s!=="number")return H.u(s)
return new V.R(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
b4:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof p!=="number")return H.u(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.m()
s=a.a
r=this.a
return new V.R(q*p-u*t,u*s-r*p,r*t-q*s)},
v:function(a,b){var u=b.a,t=b.b,s=this.c,r=b.c
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.u(r)
return new V.R(this.a+u,this.b+t,s+r)},
S:function(a){var u=this.c
if(typeof u!=="number")return u.S()
return new V.R(-this.a,-this.b,-u)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.R(this.a*b,this.b*b,u*b)},
w:function(a,b){var u
if(Math.abs(b-0)<$.G().a)return V.d0()
u=this.c
if(typeof u!=="number")return u.w()
return new V.R(this.a/b,this.b/b,u/b)},
e7:function(){var u,t=$.G(),s=t.a
if(!(Math.abs(0-this.a)<s))return!1
if(!(Math.abs(0-this.b)<s))return!1
u=this.c
t.toString
if(typeof u!=="number")return H.u(u)
if(!(Math.abs(0-u)<s))return!1
return!0},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.G()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.D()
if(typeof r!=="number")return H.u(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.bw.prototype={
b8:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bw))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
U.fB.prototype={
bI:function(a){var u=V.kC(a,this.c,this.b)
return u},
gn:function(){var u=this.y
return u==null?this.y=D.L():u},
N:function(a){var u=this.y
if(u!=null)u.B(a)},
seA:function(a,b){},
se9:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.G().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bI(u)}s=new D.t("maximumLocation",s,t.b,[P.r])
s.b=!0
t.N(s)}},
seb:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.G().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bI(u)}s=new D.t("minimumLocation",s,t.c,[P.r])
s.b=!0
t.N(s)}},
sa8:function(a,b){var u,t=this
b=t.bI(b)
u=t.d
if(!(Math.abs(u-b)<$.G().a)){t.d=b
u=new D.t("location",u,b,[P.r])
u.b=!0
t.N(u)}},
sea:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.G().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.t("maximumVelocity",r,a,[P.r])
r.b=!0
s.N(r)}},
sa_:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.G().a)){u.f=a
t=new D.t("velocity",t,a,[P.r])
t.b=!0
u.N(t)}},
sdE:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.G().a)){this.x=a
u=new D.t("dampening",u,a,[P.r])
u.b=!0
this.N(u)}},
aa:function(a,b){var u,t,s,r=this,q=r.f,p=$.G().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa8(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.G().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sa_(u)}}}
U.du.prototype={
gn:function(){var u=this.b
return u==null?this.b=D.L():u},
aD:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.du))return!1
return J.J(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cC.prototype={
gn:function(){var u=this.e
return u==null?this.e=D.L():u},
N:function(a){var u
H.f(a,"$iB")
u=this.e
if(u!=null)u.B(a)},
az:function(){return this.N(null)},
eU:function(a,b){var u,t,s,r,q,p,o,n=U.ai
H.j(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gbl(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=b[q]
if(p!=null){o=p.gn()
o.toString
H.n(t,s)
if(o.a==null)o.sac(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bF([n])
n.b=!0
this.N(n)},
hs:function(a,b){var u,t,s=U.ai
H.j(b,"$ih",[s],"$ah")
for(u=b.gV(b),t=this.gbl();u.C();)u.gM(u).gn().E(0,t)
s=new D.bG([s])
s.b=!0
this.N(s)},
aD:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.R()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.as(r,r.length,[H.w(r,0)]),u=null;r.C();){q=r.d
if(q!=null){t=q.aD(0,b,c)
if(t!=null)u=u==null?t:t.m(0,u)}}s.f=u==null?V.bq():u
r=s.e
if(r!=null)r.ae(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cC))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.J(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ah:function(){return[U.ai]},
$aV:function(){return[U.ai]},
$iai:1}
U.ai.prototype={}
U.e2.prototype={
gn:function(){var u=this.y
return u==null?this.y=D.L():u},
N:function(a){var u=this.y
if(u!=null)u.B(a)},
seB:function(a){var u
a=V.kC(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.G().a)){this.a=a
u=new D.t("yaw",u,a,[P.r])
u.b=!0
this.N(u)}},
sel:function(a,b){var u
b=V.kC(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.G().a)){this.b=b
u=new D.t("pitch",u,b,[P.r])
u.b=!0
this.N(u)}},
seq:function(a){var u
a=V.kC(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.G().a)){this.c=a
u=new D.t("roll",u,a,[P.r])
u.b=!0
this.N(u)}},
aD:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.seB(s.a+s.d*b.y)
s.sel(0,s.b+s.e*b.y)
s.seq(s.c+s.f*b.y)
r=s.c
u=Math.cos(r)
t=Math.sin(r)
s.x=V.bb(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1).m(0,V.lE(s.b)).m(0,V.lD(s.a))
r=s.y
if(r!=null)r.ae(0)}return s.x},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.e2))return!1
u=r.a
t=b.a
s=$.G().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+"], ["+V.N(u.d,3,0)+", "+V.N(u.e,3,0)+", "+V.N(u.f,3,0)+"]"}}
U.ej.prototype={
gn:function(){var u=this.fx
return u==null?this.fx=D.L():u},
N:function(a){var u
H.f(a,"$iB")
u=this.fx
if(u!=null)u.B(a)},
az:function(){return this.N(null)},
c0:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.L():t
u.h(0,s.gfE())
u=s.a.c
t=u.d
u=t==null?u.d=D.L():t
u.h(0,s.gfG())
u=s.a.c
t=u.c
u=t==null?u.c=D.L():t
u.h(0,s.gfI())
u=s.a.d
t=u.f
u=t==null?u.f=D.L():t
u.h(0,s.gfA())
u=s.a.d
t=u.d
u=t==null?u.d=D.L():t
u.h(0,s.gfC())
u=s.a.e
t=u.b
u=t==null?u.b=D.L():t
u.h(0,s.gic())
u=s.a.e
t=u.d
u=t==null?u.d=D.L():t
u.h(0,s.gia())
u=s.a.e
t=u.c
u=t==null?u.c=D.L():t
u.h(0,s.gi8())
return!0},
ay:function(a){var u=a.a,t=a.b
if(H.E(this.f)){if(typeof u!=="number")return u.S()
u=-u}if(H.E(this.r)){if(typeof t!=="number")return t.S()
t=-t}return new V.U(u,t)},
fF:function(a){var u=this
a=H.p(H.f(a,"$iB"),"$ibJ")
if(!J.J(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fH:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.f(a,"$iB"),"$ibJ")
if(!H.E(n.cx))return
if(H.E(n.ch)){u=a.d.D(0,a.y)
u=new V.U(u.a,u.b)
u=u.F(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(H.E(n.e)){u=a.c
t=a.d.D(0,a.y)
u=n.ay(new V.U(t.a,t.b).m(0,2).w(0,u.gaB()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sa_(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sa_(-u*10*t)}else{u=a.c
t=a.d
s=t.D(0,a.y)
r=n.ay(new V.U(s.a,s.b).m(0,2).w(0,u.gaB()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa8(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa8(0,-p*q+s)
n.b.sa_(0)
n.c.sa_(0)
t=t.D(0,a.z)
n.dx=n.ay(new V.U(t.a,t.b).m(0,2).w(0,u.gaB()))}n.az()},
fJ:function(a){var u,t,s,r=this
H.f(a,"$iB")
if(!H.E(r.cx))return
r.cx=!1
if(H.E(r.ch))return
u=r.dx
if(u.F(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sa_(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sa_(-t*10*u)
r.az()}},
fB:function(a){var u=this
if(H.p(H.f(a,"$iB"),"$idQ").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fD:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.f(a,"$iB"),"$ibJ")
if(!J.J(n.d,a.x.b))return
u=a.c
t=a.d
s=t.D(0,a.y)
r=n.ay(new V.U(s.a,s.b).m(0,2).w(0,u.gaB()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa8(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa8(0,-p*q+s)
n.b.sa_(0)
n.c.sa_(0)
t=t.D(0,a.z)
n.dx=n.ay(new V.U(t.a,t.b).m(0,2).w(0,u.gaB()))
n.az()},
ie:function(a){var u=this
H.f(a,"$iB")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
ib:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.f(a,"$iB"),"$ied")
if(!H.E(n.cx))return
if(H.E(n.ch)){u=a.d.D(0,a.y)
u=new V.U(u.a,u.b)
u=u.F(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(H.E(n.e)){u=a.c
t=a.d.D(0,a.y)
u=n.ay(new V.U(t.a,t.b).m(0,2).w(0,u.gaB()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sa_(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sa_(-u*10*t)}else{u=a.c
t=a.d
s=t.D(0,a.y)
r=n.ay(new V.U(s.a,s.b).m(0,2).w(0,u.gaB()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa8(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa8(0,-p*q+s)
n.b.sa_(0)
n.c.sa_(0)
t=t.D(0,a.z)
n.dx=n.ay(new V.U(t.a,t.b).m(0,2).w(0,u.gaB()))}n.az()},
i9:function(a){var u,t,s,r=this
H.f(a,"$iB")
if(!H.E(r.cx))return
r.cx=!1
if(H.E(r.ch))return
u=r.dx
if(u.F(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sa_(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sa_(-t*10*u)
r.az()}},
aD:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.R()
if(s<r){t.dy=r
u=b.y
t.c.aa(0,u)
t.b.aa(0,u)
t.fr=V.lD(t.b.d).m(0,V.lE(t.c.d))}return t.fr},
$iai:1}
U.ek.prototype={
gn:function(){var u=this.r
return u==null?this.r=D.L():u},
N:function(a){var u=this.r
if(u!=null)u.B(a)},
c0:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.L():t
t=r.gfK()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.L():s).h(0,t)
return!0},
fL:function(a){var u,t,s,r,q=this
H.f(a,"$iB")
if(!J.J(q.b,q.a.b.c))return
H.p(a,"$icK")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.m()
r=u+t*s
if(u!==r){q.d=r
u=new D.t("zoom",u,r,[P.r])
u.b=!0
q.N(u)}},
aD:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.bb(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iai:1}
M.dt.prototype={
gn:function(){var u=this.r
return u==null?this.r=D.L():u},
T:function(a){var u
H.f(a,"$iB")
u=this.r
if(u!=null)u.B(a)},
aE:function(){return this.T(null)},
hw:function(a,b){var u,t,s,r,q,p,o,n=M.au
H.j(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gW(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=b[q]
if(p!=null){o=p.gn()
o.toString
H.n(t,s)
if(o.a==null)o.sac(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bF([n])
n.b=!0
this.T(n)},
hy:function(a,b){var u,t,s=M.au
H.j(b,"$ih",[s],"$ah")
for(u=b.gV(b),t=this.gW();u.C();)u.gM(u).gn().E(0,t)
s=new D.bG([s])
s.b=!0
this.T(s)},
a1:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.as(u,u.length,[H.w(u,0)]);u.C();){t=u.d
if(t!=null)t.a1(a)}s.f=!1},
$ah:function(){return[M.au]},
$aV:function(){return[M.au]},
$iau:1}
M.dv.prototype={
gn:function(){var u=this.r
return u==null?this.r=D.L():u},
T:function(a){var u
H.f(a,"$iB")
u=this.r
if(u!=null)u.B(a)},
aE:function(){return this.T(null)},
saL:function(a,b){var u,t,s=this
if(b==null)b=X.kM(!0,null)
u=s.c
if(u!==b){if(u!=null)u.gn().E(0,s.gW())
t=s.c
s.c=b
b.gn().h(0,s.gW())
u=new D.t("target",t,s.c,[X.cX])
u.b=!0
s.T(u)}},
sao:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gn().E(0,t.gW())
u=t.d
t.d=a
if(a!=null)a.gn().h(0,t.gW())
s=new D.t("technique",u,t.d,[O.bu])
s.b=!0
t.T(s)}},
a1:function(a){var u,t,s=this
a.cp(s.d)
s.c.X(a)
u=s.b
u.toString
a.cy.bz(V.bq())
t=V.bq()
u.a
a.db.bz(t)
u=s.d
if(u!=null)u.aa(0,a)
s.e.aa(0,a)
s.e.a1(a)
s.b.toString
a.cy.bd()
a.db.bd()
s.c.aC(a)
a.co()},
$iau:1}
M.dC.prototype={
T:function(a){var u
H.f(a,"$iB")
u=this.y
if(u!=null)u.B(a)},
aE:function(){return this.T(null)},
fV:function(a,b){var u,t,s,r,q,p,o,n=E.al
H.j(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gW(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bD()
o.sac(null)
o.saQ(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sac(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bF([n])
n.b=!0
this.T(n)},
fX:function(a,b){var u,t,s=E.al
H.j(b,"$ih",[s],"$ah")
for(u=b.gV(b),t=this.gW();u.C();)u.gM(u).gn().E(0,t)
s=new D.bG([s])
s.b=!0
this.T(s)},
sc7:function(a){var u,t,s=this
if(a==null)a=X.lI()
u=s.b
if(u!==a){if(u!=null)u.gn().E(0,s.gW())
t=s.b
s.b=a
a.gn().h(0,s.gW())
u=new D.t("camera",t,s.b,[X.bZ])
u.b=!0
s.T(u)}},
saL:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gn().E(0,t.gW())
u=t.c
t.c=b
b.gn().h(0,t.gW())
s=new D.t("target",u,t.c,[X.cX])
s.b=!0
t.T(s)}},
sao:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gn().E(0,t.gW())
u=t.d
t.d=a
if(a!=null)a.gn().h(0,t.gW())
s=new D.t("technique",u,t.d,[O.bu])
s.b=!0
t.T(s)}},
gn:function(){var u=this.y
return u==null?this.y=D.L():u},
a1:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
a.cp(c.d)
c.c.X(a)
u=c.b
t=a.c
s=a.d
r=u.c
q=u.d
p=u.e
o=p-q
n=1/Math.tan(r*0.5)
m=V.bb(-n/(t/s),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
u.a
a.cy.bz(m)
t=$.lJ
if(t==null){t=V.nq()
s=$.m1
if(s==null)s=$.m1=new V.R(0,1,0)
r=$.m0
if(r==null)r=$.m0=new V.R(0,0,-1)
l=r.w(0,Math.sqrt(r.F(r)))
s=s.b4(l)
k=s.w(0,Math.sqrt(s.F(s)))
j=l.b4(k)
i=new V.R(t.a,t.b,t.c)
h=k.S(0).F(i)
g=j.S(0).F(i)
f=l.S(0).F(i)
t=V.bb(k.a,j.a,l.a,h,k.b,j.b,l.b,g,k.c,j.c,l.c,f,0,0,0,1)
$.lJ=t
e=t}else e=t
t=u.b
if(t!=null){d=t.aD(0,a,u)
if(d!=null)e=d.m(0,e)}a.db.bz(e)
u=c.d
if(u!=null)u.aa(0,a)
for(u=c.e.a,u=new J.as(u,u.length,[H.w(u,0)]);u.C();)u.d.aa(0,a)
for(u=c.e.a,u=new J.as(u,u.length,[H.w(u,0)]);u.C();)u.d.a1(a)
c.b.toString
a.cy.bd()
a.db.bd()
c.c.aC(a)
a.co()},
sf6:function(a,b){this.e=H.j(b,"$iV",[E.al],"$aV")},
$iau:1}
M.dG.prototype={
gn:function(){var u=this.b
return u==null?this.b=D.L():u},
T:function(a){var u
H.f(a,"$iB")
u=this.b
if(u!=null)u.B(a)},
aE:function(){return this.T(null)},
a1:function(a){var u=this.e
if(u!=null)u.a1(a)
u=this.r
if(u!=null)u.a1(a)},
$iau:1}
M.au.prototype={}
A.dp.prototype={}
A.fm.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iB:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
bt:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.af.prototype={
gaw:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof A.af))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.dx.prototype={}
A.dH.prototype={
ad:function(a,b){if(b!=null&&b.d)a.cD(b)}}
A.h3.prototype={
aO:function(a,b,c,d){var u,t,s,r,q=[P.r]
H.j(c,"$ib",q,"$ab")
H.j(d,"$ib",q,"$ab")
u=c.length
if(0>=u)return H.c(c,0)
t=Math.abs(c[0]-0)<$.G().a
if(t){if(0>=d.length)return H.c(d,0)
s=d[0]
d=C.a.cG(d,1)
c=C.a.cG(c,1);--u}else s=0
q=a.a+="vec4 blur"+b+"()\n"
q+="{\n"
a.a=q
if(t)q=a.a+="  vec4 color = texture2D(colorTxt, txt2D)*"+H.m(s)+";\n"
else q=a.a=q+"  vec4 color = vec4(0.0);\n"
q=a.a=q+"  vec2 offset;\n"
for(r=0;r<u;++r){if(r>=c.length)return H.c(c,r)
a.a+="  offset = blurScale * "+H.m(c[r])+";\n"
if(r>=d.length)return H.c(d,r)
a.a+="  color += texture2D(colorTxt, txt2D + offset) * "+H.m(d[r])+";\n"
if(r>=d.length)return H.c(d,r)
q=a.a+="  color += texture2D(colorTxt, txt2D - offset) * "+H.m(d[r])+";\n"}q+="  return color; \n"
a.a=q
q+="}\n"
a.a=q
a.a=q+"\n"},
i:function(a){return this.b}}
A.dS.prototype={
eJ:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
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
A.oy(c0,u)
A.oA(c0,u)
A.oz(c0,u)
A.oC(c0,u)
A.oD(c0,u)
A.oB(c0,u)
A.oE(c0,u)
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
b5.bu(0,s.charCodeAt(0)==0?s:s,A.ox(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.p(b5.y.K(0,"invViewMat"),"$iaa")
if(t)b5.dy=H.p(b5.y.K(0,"objMat"),"$iaa")
if(r)b5.fr=H.p(b5.y.K(0,"viewObjMat"),"$iaa")
b5.fy=H.p(b5.y.K(0,"projViewObjMat"),"$iaa")
if(c0.ry)b5.k1=H.p(b5.y.K(0,"txt2DMat"),"$icc")
if(c0.x1)b5.k2=H.p(b5.y.K(0,"txtCubeMat"),"$iaa")
if(c0.x2)b5.k3=H.p(b5.y.K(0,"colorMat"),"$iaa")
b5.sf1(H.d([],[A.aa]))
t=c0.y2
if(t>0){b5.k4=H.f(b5.y.K(0,"bendMatCount"),"$iap")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.x(P.y(b7+q+b8));(s&&C.a).h(s,H.p(m,"$iaa"))}}t=c0.a
if(t.a)b5.r2=H.p(b5.y.K(0,"emissionClr"),"$iX")
if(t.b)b5.rx=H.p(b5.y.K(0,"emissionTxt"),"$ia3")
t=c0.b
if(t.a)b5.x1=H.p(b5.y.K(0,"ambientClr"),"$iX")
if(t.b)b5.x2=H.p(b5.y.K(0,"ambientTxt"),"$ia3")
t=c0.c
if(t.a)b5.y2=H.p(b5.y.K(0,"diffuseClr"),"$iX")
if(t.b)b5.aJ=H.p(b5.y.K(0,"diffuseTxt"),"$ia3")
t=c0.d
if(t.a)b5.dM=H.p(b5.y.K(0,"invDiffuseClr"),"$iX")
if(t.b)b5.dN=H.p(b5.y.K(0,"invDiffuseTxt"),"$ia3")
t=c0.e
s=t.a
if(s||t.b||!1){b5.dQ=H.p(b5.y.K(0,"shininess"),"$ia5")
if(s)b5.dO=H.p(b5.y.K(0,"specularClr"),"$iX")
if(t.b)b5.dP=H.p(b5.y.K(0,"specularTxt"),"$ia3")}if(c0.f.b)b5.dR=H.p(b5.y.K(0,"bumpTxt"),"$ia3")
if(c0.cy){b5.dS=H.p(b5.y.K(0,"envSampler"),"$ice")
t=c0.r
if(t.a)b5.dT=H.p(b5.y.K(0,"reflectClr"),"$iX")
if(t.b)b5.dU=H.p(b5.y.K(0,"reflectTxt"),"$ia3")
t=c0.x
s=t.a
if(s||t.b||!1){b5.dV=H.p(b5.y.K(0,"refraction"),"$ia5")
if(s)b5.dW=H.p(b5.y.K(0,"refractClr"),"$iX")
if(t.b)b5.dX=H.p(b5.y.K(0,"refractTxt"),"$ia3")}}t=c0.y
if(t.a)b5.dY=H.p(b5.y.K(0,"alpha"),"$ia5")
if(t.b)b5.dZ=H.p(b5.y.K(0,"alphaTxt"),"$ia3")
t=P.l
s=[t,A.ap]
b5.sfe(new H.a0(s))
b5.sff(new H.a0([t,[P.b,A.cb]]))
b5.shG(new H.a0(s))
b5.shH(new H.a0([t,[P.b,A.cd]]))
b5.si0(new H.a0(s))
b5.si1(new H.a0([t,[P.b,A.cf]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.cb],l=0;l<t.length;t.length===s||(0,H.A)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.m(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.aq()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.x(P.y(b7+g+b8))
H.p(m,"$iX")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.x(P.y(b7+g+b8))
H.p(f,"$iX")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.x(P.y(b7+g+b8))
H.p(e,"$iX")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.x(P.y(b7+g+b8))
H.p(m,"$iX")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.x(P.y(b7+g+b8))
H.p(f,"$iX")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.x(P.y(b7+o+b8))
H.p(e,"$ia3")
a=e}else a=b6
C.a.h(h,new A.cb(b,c,d,m,f,a))}b5.cc.k(0,j,h)
q=b5.cb
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.x(P.y(b7+o+b8))
q.k(0,j,H.f(m,"$iap"))}for(t=c0.Q,s=t.length,r=[A.cd],l=0;l<t.length;t.length===s||(0,H.A)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.m(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.x(P.y(b7+o+b8))
H.p(m,"$iX")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.x(P.y(b7+o+b8))
H.p(f,"$iX")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.x(P.y(b7+o+b8))
H.p(e,"$iX")
if(typeof j!=="number")return j.aq()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.x(P.y(b7+o+b8))
H.p(a0,"$icc")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.x(P.y(b7+o+b8))
H.p(a0,"$ice")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.x(P.y(b7+o+b8))
H.p(a0,"$ice")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.x(P.y(b7+o+b8))
H.p(a2,"$ibR")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.x(P.y(b7+o+b8))
H.p(a0,"$ia5")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.x(P.y(b7+o+b8))
H.p(a2,"$ia5")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.x(P.y(b7+o+b8))
H.p(a5,"$ia5")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.cd(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.ce.k(0,j,h)
q=b5.cd
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.x(P.y(b7+o+b8))
q.k(0,j,H.f(m,"$iap"))}for(t=c0.ch,s=t.length,r=[A.cf],l=0;l<t.length;t.length===s||(0,H.A)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.m(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.x(P.y(b7+o+b8))
H.p(m,"$iX")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.x(P.y(b7+o+b8))
H.p(f,"$iX")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.x(P.y(b7+o+b8))
H.p(e,"$iX")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.x(P.y(b7+o+b8))
H.p(a0,"$iX")
if(typeof j!=="number")return j.aq()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.x(P.y(b7+o+b8))
H.p(a2,"$iX")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.x(P.y(b7+o+b8))
H.p(a5,"$iX")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.x(P.y(b7+o+b8))
H.p(a9,"$ia5")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.x(P.y(b7+o+b8))
H.p(b0,"$ia5")
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
if(a2==null)H.x(P.y(b7+g+b8))
H.p(a2,"$ibR")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.x(P.y(b7+g+b8))
H.p(a2,"$ia5")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.x(P.y(b7+g+b8))
H.p(a5,"$ia5")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.x(P.y(b7+g+b8))
H.p(a2,"$ia5")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.x(P.y(b7+g+b8))
H.p(a5,"$ia5")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.x(P.y(b7+g+b8))
H.p(a9,"$ia5")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.x(P.y(b7+g+b8))
H.p(a2,"$ia3")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.x(P.y(b7+o+b8))
H.p(a2,"$ia3")
a3=a2}else a3=b6
C.a.h(h,new A.cf(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.cg.k(0,j,h)
q=b5.cf
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.x(P.y(b7+o+b8))
q.k(0,j,H.f(m,"$iap"))}}},
ad:function(a,b){if(b!=null&&b.d)a.cD(b)},
hU:function(a,b){},
sf1:function(a){this.r1=H.j(a,"$ib",[A.aa],"$ab")},
sfe:function(a){this.cb=H.j(a,"$iC",[P.l,A.ap],"$aC")},
sff:function(a){this.cc=H.j(a,"$iC",[P.l,[P.b,A.cb]],"$aC")},
shG:function(a){this.cd=H.j(a,"$iC",[P.l,A.ap],"$aC")},
shH:function(a){this.ce=H.j(a,"$iC",[P.l,[P.b,A.cd]],"$aC")},
si0:function(a){this.cf=H.j(a,"$iC",[P.l,A.ap],"$aC")},
si1:function(a){this.cg=H.j(a,"$iC",[P.l,[P.b,A.cf]],"$aC")}}
A.aC.prototype={
i:function(a){return"dirLight"+H.m(this.a)}}
A.aF.prototype={
i:function(a){return"pointLight"+H.m(this.a)}}
A.aG.prototype={
i:function(a){return"spotLight"+H.m(this.a)}}
A.hr.prototype={
i:function(a){return this.aJ}}
A.cb.prototype={}
A.cd.prototype={}
A.cf.prototype={}
A.cT.prototype={
bi:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
bu:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.d1(b,35633)
r.f=r.d1(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.E(H.mq(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.x(P.y("Failed to link shader: "+H.m(s)))}r.hW()
r.hY()},
X:function(a){a.a.useProgram(this.r)
this.x.iB()},
d1:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.E(H.mq(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.e(P.y("Error compiling shader '"+H.m(s)+"': "+H.m(u)))}return s},
hW:function(){var u,t,s,r=this,q=H.d([],[A.dp]),p=r.a,o=H.a_(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dp(p,t.name,s))}r.x=new A.fm(q)},
hY:function(){var u,t,s,r=this,q=H.d([],[A.ee]),p=r.a,o=H.a_(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.iy(t.type,t.size,t.name,s))}r.y=new A.iM(q)},
aP:function(a,b,c){var u=this.a
if(a===1)return new A.ap(u,b,c)
else return A.kX(u,this.r,b,a,c)},
f9:function(a,b,c){var u=this.a
if(a===1)return new A.a3(u,b,c)
else return A.kX(u,this.r,b,a,c)},
fa:function(a,b,c){var u=this.a
if(a===1)return new A.ce(u,b,c)
else return A.kX(u,this.r,b,a,c)},
bo:function(a,b){return new P.eu(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
iy:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aP(b,c,d)
case 5121:return u.aP(b,c,d)
case 5122:return u.aP(b,c,d)
case 5123:return u.aP(b,c,d)
case 5124:return u.aP(b,c,d)
case 5125:return u.aP(b,c,d)
case 5126:return new A.a5(u.a,c,d)
case 35664:return new A.aw(u.a,c,d)
case 35665:return new A.X(u.a,c,d)
case 35666:return new A.bR(u.a,c,d)
case 35667:return new A.iJ(u.a,c,d)
case 35668:return new A.iK(u.a,c,d)
case 35669:return new A.iL(u.a,c,d)
case 35674:return new A.iN(u.a,c,d)
case 35675:return new A.cc(u.a,c,d)
case 35676:return new A.aa(u.a,c,d)
case 35678:return u.f9(b,c,d)
case 35680:return u.fa(b,c,d)
case 35670:throw H.e(u.bo("BOOL",c))
case 35671:throw H.e(u.bo("BOOL_VEC2",c))
case 35672:throw H.e(u.bo("BOOL_VEC3",c))
case 35673:throw H.e(u.bo("BOOL_VEC4",c))
default:throw H.e(P.y("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.bA.prototype={
i:function(a){return this.b}}
A.ea.prototype={
eN:function(a,b,c){var u,t,s,r,q,p=this,o="Required uniform value, ",n=", was not defined or used in shader."
p.bu(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.nM(a,b))
p.z=p.x.j(0,"posAttr")
p.Q=H.p(p.y.K(0,"txtCount"),"$iap")
p.ch=H.p(p.y.K(0,"backClr"),"$ibR")
p.sih(H.d([],[A.a3]))
p.sf7(H.d([],[A.aa]))
u=[A.aw]
p.si2(H.d([],u))
p.si3(H.d([],u))
p.sfc(H.d([],u))
p.sfd(H.d([],u))
p.sfp(H.d([],[A.ap]))
for(t=0;t<a;++t){u=p.cx
s=p.y
r="txt"+t
q=s.j(0,r)
if(q==null)H.x(P.y(o+r+n));(u&&C.a).h(u,H.p(q,"$ia3"))
u=p.cy
s=p.y
r="clrMat"+t
q=s.j(0,r)
if(q==null)H.x(P.y(o+r+n));(u&&C.a).h(u,H.p(q,"$iaa"))
u=p.db
s=p.y
r="srcLoc"+t
q=s.j(0,r)
if(q==null)H.x(P.y(o+r+n));(u&&C.a).h(u,H.p(q,"$iaw"))
u=p.dx
s=p.y
r="srcSize"+t
q=s.j(0,r)
if(q==null)H.x(P.y(o+r+n));(u&&C.a).h(u,H.p(q,"$iaw"))
u=p.dy
s=p.y
r="destLoc"+t
q=s.j(0,r)
if(q==null)H.x(P.y(o+r+n));(u&&C.a).h(u,H.p(q,"$iaw"))
u=p.fr
s=p.y
r="destSize"+t
q=s.j(0,r)
if(q==null)H.x(P.y(o+r+n));(u&&C.a).h(u,H.p(q,"$iaw"))
u=p.fx
s=p.y
r="flip"+t
q=s.j(0,r)
if(q==null)H.x(P.y(o+r+n));(u&&C.a).h(u,H.p(q,"$iap"))}},
sih:function(a){this.cx=H.j(a,"$ib",[A.a3],"$ab")},
sf7:function(a){this.cy=H.j(a,"$ib",[A.aa],"$ab")},
si2:function(a){this.db=H.j(a,"$ib",[A.aw],"$ab")},
si3:function(a){this.dx=H.j(a,"$ib",[A.aw],"$ab")},
sfc:function(a){this.dy=H.j(a,"$ib",[A.aw],"$ab")},
sfd:function(a){this.fr=H.j(a,"$ib",[A.aw],"$ab")},
sfp:function(a){this.fx=H.j(a,"$ib",[A.ap],"$ab")}}
A.ee.prototype={}
A.iM.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
K:function(a,b){var u=this.j(0,b)
if(u==null)throw H.e(P.y("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.O()},
O:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.ap.prototype={
i:function(a){return"Uniform1i: "+H.m(this.c)}}
A.iJ.prototype={
i:function(a){return"Uniform2i: "+H.m(this.c)}}
A.iK.prototype={
i:function(a){return"Uniform3i: "+H.m(this.c)}}
A.iL.prototype={
i:function(a){return"Uniform4i: "+H.m(this.c)}}
A.iI.prototype={
i:function(a){return"Uniform1iv: "+H.m(this.c)},
sii:function(a){H.j(a,"$ib",[P.l],"$ab")}}
A.a5.prototype={
i:function(a){return"Uniform1f: "+H.m(this.c)}}
A.aw.prototype={
i:function(a){return"Uniform2f: "+H.m(this.c)}}
A.X.prototype={
i:function(a){return"Uniform3f: "+H.m(this.c)}}
A.bR.prototype={
eF:function(a){var u=a.a,t=a.b,s=a.c,r=a.d
return C.c.cw(this.a,this.d,u,t,s,r)},
eE:function(a){return C.c.cw(this.a,this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.m(this.c)}}
A.iN.prototype={
i:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.cc.prototype={
ab:function(a){var u=new Float32Array(H.ci(H.j(a,"$ib",[P.r],"$ab")))
C.c.jo(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.aa.prototype={
ab:function(a){var u=new Float32Array(H.ci(H.j(a,"$ib",[P.r],"$ab")))
C.c.cz(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.a3.prototype={
cD:function(a){var u=a==null||!a.d,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.ce.prototype={
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.k1.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cl(s.b,b).cl(s.d.cl(s.c,b),c)
a.sa8(0,new V.a9(r.a,r.b,r.c))
a.seu(r.w(0,Math.sqrt(r.F(r))))
s=1-b
u=1-c
a.sdw(new V.bd(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
t.f.$3(a,b,c)},
$S:12}
F.ky.prototype={
$2:function(a,b){return 0},
$S:19}
F.kz.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.u(s)
u=a.f
t=new V.R(u.a,u.b,u.c)
s=t.w(0,Math.sqrt(t.F(t))).m(0,this.b+s)
a.sa8(0,new V.a9(s.a,s.b,s.c))},
$S:12}
F.kg.prototype={
$2:function(a,b){return 0},
$S:19}
F.kh.prototype={
$3:function(a,b,c){var u,t,s=b*2-1,r=c*2-1
a.sa8(0,new V.a9(s,r,this.a.a.$2(b,c)))
u=new V.R(s,r,1)
a.seu(u.w(0,Math.sqrt(u.F(u))))
u=1-b
t=1-c
a.sdw(new V.bd(b*c,2+u*c,4+b*t,6+u*t))},
$S:12}
F.a7.prototype={
b5:function(){var u=this
if(!u.gb6()){C.a.E(u.a.a.d.b,u)
u.a.a.a3()}u.bV()
u.bW()
u.hM()},
bZ:function(a){this.a=a
C.a.h(a.d.b,this)},
c_:function(a){this.b=a
C.a.h(a.d.c,this)},
hV:function(a){this.c=a
C.a.h(a.d.d,this)},
bV:function(){var u=this.a
if(u!=null){C.a.E(u.d.b,this)
this.a=null}},
bW:function(){var u=this.b
if(u!=null){C.a.E(u.d.c,this)
this.b=null}},
hM:function(){var u=this.c
if(u!=null){C.a.E(u.d.d,this)
this.c=null}},
gb6:function(){return this.a==null||this.b==null||this.c==null},
f0:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d0()
if(q!=null)s=s.v(0,q)
if(u!=null)s=s.v(0,u)
if(t!=null)s=s.v(0,t)
if(s.e7())return
return s.w(0,Math.sqrt(s.F(s)))},
f4:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.D(0,q)
r=new V.R(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.F(r)))
r=t.D(0,q)
r=new V.R(r.a,r.b,r.c)
r=s.b4(r.w(0,Math.sqrt(r.F(r))))
return r.w(0,Math.sqrt(r.F(r)))},
c6:function(){var u,t=this
if(t.d!=null)return!0
u=t.f0()
if(u==null){u=t.f4()
if(u==null)return!1}t.d=u
t.a.a.a3()
return!0},
f_:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d0()
if(q!=null)s=s.v(0,q)
if(u!=null)s=s.v(0,u)
if(t!=null)s=s.v(0,t)
if(s.e7())return
return s.w(0,Math.sqrt(s.F(s)))},
f3:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.G().a){l=d.D(0,g)
l=new V.R(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.F(l)))
if(s.a-t.a<0)q=q.S(0)}else{p=(l-u.b)/r
l=d.D(0,g)
k=l.c
if(typeof k!=="number")return k.m()
k=new V.a9(l.a*p,l.b*p,k*p).v(0,g).D(0,j)
k=new V.R(k.a,k.b,k.c)
q=k.w(0,Math.sqrt(k.F(k)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.S(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.F(l)))
l=o.b4(q)
l=l.w(0,Math.sqrt(l.F(l))).b4(o)
q=l.w(0,Math.sqrt(l.F(l)))}return q},
c4:function(){var u,t=this
if(t.e!=null)return!0
u=t.f_()
if(u==null){u=t.f3()
if(u==null)return!1}t.e=u
t.a.a.a3()
return!0},
git:function(a){var u=this
if(J.J(u.a,u.b))return!0
if(J.J(u.b,u.c))return!0
if(J.J(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u,t,s=this
if(s.gb6())return a+"disposed"
u=a+C.b.an(J.az(s.a.e),0)+", "+C.b.an(J.az(s.b.e),0)+", "+C.b.an(J.az(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
O:function(){return this.G("")}}
F.fW.prototype={}
F.ib.prototype={
b9:function(a,b,c){var u,t=b.a
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
F.bo.prototype={
b5:function(){var u=this
if(!u.gb6()){C.a.E(u.a.a.c.b,u)
u.a.a.a3()}u.bV()
u.bW()},
bZ:function(a){this.a=a
C.a.h(a.c.b,this)},
c_:function(a){this.b=a
C.a.h(a.c.c,this)},
bV:function(){var u=this.a
if(u!=null){C.a.E(u.c.b,this)
this.a=null}},
bW:function(){var u=this.b
if(u!=null){C.a.E(u.c.c,this)
this.b=null}},
gb6:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){if(this.gb6())return a+"disposed"
return a+C.b.an(J.az(this.a.e),0)+", "+C.b.an(J.az(this.b.e),0)},
O:function(){return this.G("")}}
F.hc.prototype={}
F.iH.prototype={
b9:function(a,b,c){var u,t=b.a
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
F.bM.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.an(J.az(u.e),0)},
O:function(){return this.G("")}}
F.e4.prototype={
gn:function(){var u=this.e
return u==null?this.e=D.L():u},
cm:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.t()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.A)(g),++s){r=g[s]
h.a.h(0,r.iw())}h.a.t()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.A)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.t()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bM()
if(n.a==null)H.x(P.y("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.B(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.A)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.t()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.t()
p=p.e
if(typeof p!=="number")return p.v()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.ng(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.A)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.t()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.t()
p=p.e
if(typeof p!=="number")return p.v()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.t()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cz(l,k,i)}g=h.e
if(g!=null)g.ae(0)},
as:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.as()||!1
if(!t.a.as())u=!1
s=t.e
if(s!=null)s.ae(0)
return u},
ip:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.e
if(c!=null)++c.d
for(u=d.a.c.length-1,c=a.b,t=a.a,s=t.length,r=a.c,q=c-1;u>=0;--u){p=d.a.c
if(u>=p.length)return H.c(p,u)
o=p[u]
p=o.y
n=C.d.b7(p.a*q)
p=p.b
if(typeof r!=="number")return r.D()
m=C.d.b7(p*(r-1))
n=n>=0?C.e.ax(n,c):c+C.e.ax(n,c)
l=(n+(m>=0?C.e.ax(m,r):r+C.e.ax(m,r))*c)*4
if(l<0||l>=s)return H.c(t,l)
p=t[l]/255
k=l+1
if(k>=s)return H.c(t,k)
k=t[k]/255
j=l+2
if(j>=s)return H.c(t,j)
j=t[j]/255
i=l+3
if(i>=s)return H.c(t,i)
i=t[i]/255
if(p<0)p=0
else if(p>1)p=1
if(k<0)k=0
else if(k>1)k=1
if(j<0)j=0
else if(j>1)j=1
if(!(i<0))if(i>1)i=1
h=(p+k+j)*b/3
p=o.f
k=o.r
j=k.a
i=k.b
k=k.c
if(typeof k!=="number")return k.m()
g=p.a
f=p.b
e=p.c
if(typeof e!=="number")return e.v()
k=new V.a9(g+j*h,f+i*h,e+k*h)
if(!J.J(p,k)){o.f=k
p=o.a
if(p!=null){p=p.e
if(p!=null)p.B(null)}}}c=d.e
if(c!=null)c.ae(0)},
jn:function(a){var u,t,s,r,q=this.e
if(q!=null)++q.d
for(q=this.a,u=q.c.length-1,t=a.a;u>=0;--u){s=q.c
if(u>=s.length)return H.c(s,u)
r=s[u]
if((t&$.ar().a)===0)r.f=null
if((t&$.b0().a)===0)r.r=null
if((t&$.bl().a)===0)r.x=null
if((t&$.aN().a)===0)r.y=null
if((t&$.by().a)===0)r.z=null
if((t&$.lj().a)===0)r.Q=null
if((t&$.bV().a)===0)r.ch=0
if((t&$.bk().a)===0)r.cx=null}q=this.e
if(q!=null)q.ae(0)},
jm:function(a){var u,t,s,r=this.e
if(r!=null)++r.d
for(r=this.d,u=r.b.length-1;u>=0;--u){t=r.b
if(u>=t.length)return H.c(t,u)
s=t[u]
s.d=null}r=this.e
if(r!=null)r.ae(0)},
iQ:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.w(o,0)])
for(o=[F.aq];u.length!==0;){t=C.a.giF(u)
C.a.en(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.c(u,r)
q=u[r]
if(q!=null&&a.b9(0,t,q)){C.a.h(s,q)
C.a.en(u,r)}}if(s.length>1)b.cm(s)}}p.a.t()
p.c.cr()
p.d.cr()
p.b.j9()
p.c.cs(new F.iH())
p.d.cs(new F.ib())
o=p.e
if(o!=null)o.ae(0)},
br:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.ar()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.b0().a)!==0)++s
if((t&$.bl().a)!==0)++s
if((t&$.aN().a)!==0)++s
if((t&$.by().a)!==0)++s
if((t&$.dj().a)!==0)++s
if((t&$.dk().a)!==0)++s
if((t&$.bV().a)!==0)++s
if((t&$.bk().a)!==0)++s
r=a3.gcF(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.r
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dr])
for(n=0,m=0;m<s;++m){l=a3.iq(m)
k=l.gcF(l)
C.a.k(o,m,new Z.dr(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.c(u,j)
i=u[j].iO(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.j(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.ci(p)),35044)
u.bindBuffer(a0,null)
e=new Z.bm(new Z.el(a0,f),o,a3)
e.sfs(H.d([],[Z.bE]))
if(a.b.b.length!==0){t=P.l
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.t()
C.a.h(d,c.e)}b=Z.l0(u,34963,H.j(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bE(0,d.length,b))}if(a.c.b.length!==0){t=P.l
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.t()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.t()
C.a.h(d,c.e)}b=Z.l0(u,34963,H.j(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bE(1,d.length,b))}if(a.d.b.length!==0){t=P.l
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
C.a.h(d,c.e)}b=Z.l0(u,34963,H.j(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bE(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.i])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.G(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.G(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.G(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.G(t))}return C.a.q(s,"\n")},
a3:function(){var u=this.e
if(u!=null)u.B(null)},
$ipm:1}
F.i5.prototype={
im:function(a){var u,t,s,r,q,p
H.j(a,"$ib",[F.aq],"$ab")
u=H.d([],[F.a7])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.cz(t,q,p))}return u},
io:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.j(c,"$ib",[F.aq],"$ab")
u=H.d([],[F.a7])
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
C.a.h(u,F.cz(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cz(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cz(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cz(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
cs:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b9(0,p,n)){p.b5()
break}}}}},
cr:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=s.git(s)
if(t)s.b5()}},
as:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].c6())s=!1
return s},
c5:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].c4())s=!1
return s},
i:function(a){return this.O()},
G:function(a){var u,t,s,r=H.d([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].G(a))
return C.a.q(r,"\n")},
O:function(){return this.G("")},
sfj:function(a){this.b=H.j(a,"$ib",[F.a7],"$ab")}}
F.i6.prototype={
gl:function(a){return this.b.length},
cs:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b9(0,p,n)){p.b5()
break}}}}},
cr:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=J.J(s.a,s.b)
if(t)s.b5()}},
i:function(a){return this.O()},
G:function(a){var u,t,s=H.d([],[P.i]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
C.a.h(s,t[u].G(a+(""+u+". ")))}return C.a.q(s,"\n")},
O:function(){return this.G("")},
sfu:function(a){this.b=H.j(a,"$ib",[F.bo],"$ab")}}
F.i7.prototype={
gl:function(a){return this.b.length},
j9:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.E(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.B(null)}s=t.a
if(s!=null){C.a.E(s.b.b,t)
t.a=null}}}},
i:function(a){return this.O()},
G:function(a){var u,t,s,r=H.d([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].G(a))
return C.a.q(r,"\n")},
O:function(){return this.G("")},
sbS:function(a){this.b=H.j(a,"$ib",[F.bM],"$ab")}}
F.aq.prototype={
ca:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.j0(u.cx,r,o,t,s,q,p,a,n)},
iw:function(){return this.ca(null)},
sa8:function(a,b){var u
if(!J.J(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a3()}},
seu:function(a){var u
if(!J.J(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a3()}},
sdw:function(a){var u
if(!J.J(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a3()}},
iO:function(a){var u,t,s=this
if(a.p(0,$.ar())){u=s.f
t=[P.r]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.b0())){u=s.r
t=[P.r]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.bl())){u=s.x
t=[P.r]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.aN())){u=s.y
t=[P.r]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.p(0,$.by())){u=s.z
t=[P.r]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.dj())){u=s.Q
t=[P.r]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.dk())){u=s.Q
t=[P.r]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bV()))return H.d([s.ch],[P.r])
else if(a.p(0,$.bk())){u=s.cx
t=[P.r]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.r])},
c6:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d0()
t.d.J(0,new F.jb(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.F(s)))
s=t.a
if(s!=null){s.a3()
s=t.a.e
if(s!=null)s.ae(0)}return!0},
c4:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d0()
t.d.J(0,new F.ja(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.F(s)))
s=t.a
if(s!=null){s.a3()
s=t.a.e
if(s!=null)s.ae(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u,t,s=this,r="-",q=H.d([],[P.i])
C.a.h(q,C.b.an(J.az(s.e),0))
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
O:function(){return this.G("")}}
F.jb.prototype={
$1:function(a){var u,t
H.f(a,"$ia7")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.v(0,u)}},
$S:7}
F.ja.prototype={
$1:function(a){var u,t
H.f(a,"$ia7")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.v(0,u)}},
$S:7}
F.j1.prototype={
t:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.c(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.e(P.y("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a3()
return!0},
bp:function(a,b,c,d,e,f){var u=F.j0(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gl:function(a){return this.c.length},
as:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].c6()
return!0},
c5:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].c4()
return!0},
is:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.m()
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.J(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.B(null)}}}}return!0},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
this.t()
u=H.d([],[P.i])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].G(a))
return C.a.q(u,"\n")},
O:function(){return this.G("")},
sij:function(a){this.c=H.j(a,"$ib",[F.aq],"$ab")}}
F.j2.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
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
J:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a7]})
C.a.J(u.b,b)
C.a.J(u.c,new F.j3(u,b))
C.a.J(u.d,new F.j4(u,b))},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.d([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].G(""))
return C.a.q(r,"\n")},
sfk:function(a){this.b=H.j(a,"$ib",[F.a7],"$ab")},
sfl:function(a){this.c=H.j(a,"$ib",[F.a7],"$ab")},
sfm:function(a){this.d=H.j(a,"$ib",[F.a7],"$ab")}}
F.j3.prototype={
$1:function(a){H.f(a,"$ia7")
if(!J.J(a.a,this.a))this.b.$1(a)},
$S:7}
F.j4.prototype={
$1:function(a){var u
H.f(a,"$ia7")
u=this.a
if(!J.J(a.a,u)&&!J.J(a.b,u))this.b.$1(a)},
$S:7}
F.j5.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.c(t,u)
return t[u]}else{if(b<0)return H.c(t,b)
return t[b]}},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.d([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].G(""))
return C.a.q(r,"\n")},
sfv:function(a){this.b=H.j(a,"$ib",[F.bo],"$ab")},
sfw:function(a){this.c=H.j(a,"$ib",[F.bo],"$ab")}}
F.j7.prototype={}
F.j6.prototype={
b9:function(a,b,c){return J.J(b.f,c.f)}}
F.j8.prototype={}
F.hN.prototype={
cm:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.j(a,"$ib",[F.aq],"$ab")
u=V.d0()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null){q=u.a
p=r.a
o=u.b
n=r.b
m=u.c
r=r.c
if(typeof m!=="number")return m.v()
if(typeof r!=="number")return H.u(r)
u=new V.R(q+p,o+n,m+r)}}u=u.w(0,Math.sqrt(u.F(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.A)(a),++s){l=a[s]
if(r)k=null
else{q=u.a
p=u.b
o=u.c
if(typeof o!=="number")return o.m()
k=u.w(0,Math.sqrt(q*q+p*p+o*o))}if(!J.J(l.r,k)){l.r=k
q=l.a
if(q!=null){q=q.e
if(q!=null)q.B(null)}}}return}}
F.j9.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.d([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].G(""))
return C.a.q(r,"\n")},
sbS:function(a){this.b=H.j(a,"$ib",[F.bM],"$ab")}}
O.fL.prototype={
gn:function(){var u=this.r
return u==null?this.r=D.L():u},
u:function(a){var u=this.r
if(u!=null)u.B(a)},
aa:function(a,b){},
bB:function(a,b){var u,t,s,r,q=this,p="GreyViewDepth",o=q.a
if(o==null){u=H.f(a.fr.j(0,p),"$idx")
if(u==null){o=a.a
u=new A.dx(o,p)
u.bi(o,p)
u.bu(0,"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n".charCodeAt(0)==0?"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n":"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n","precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n}\n".charCodeAt(0)==0?"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n}\n":"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n}\n")
u.z=u.x.j(0,"posAttr")
u.Q=H.p(u.y.j(0,"width"),"$ia5")
u.ch=H.p(u.y.j(0,"stop"),"$ia5")
u.cx=H.p(u.y.j(0,"viewObjMat"),"$iaa")
u.cy=H.p(u.y.j(0,"projMat"),"$iaa")
a.bq(u)}q.a=u
o=u}t=b.e
if((!(t instanceof Z.bm)?b.e=null:t)==null){o=b.d.br(new Z.cg(a.a),$.ar())
t=o.ak($.ar())
s=q.a
t.e=s.z.c
b.e=o
o=s}o.X(a)
t=q.b
s=q.c
r=o.Q
C.c.a2(r.a,r.d,t-s)
s=q.c
t=o.ch
C.c.a2(t.a,t.d,s)
s=a.cy
s=s.ga9(s)
t=o.cy
t.toString
t.ab(s.a6(0,!0))
s=a.gez()
o=o.cx
o.toString
o.ab(s.a6(0,!0))
o=b.e
o.X(a)
o.a1(a)
o.aC(a)
o=q.a
o.toString
a.a.useProgram(null)
o.x.bt()}}
O.dI.prototype={
gn:function(){var u=this.x
return u==null?this.x=D.L():u},
u:function(a){var u
H.f(a,"$iB")
u=this.x
if(u!=null)u.B(a)},
ag:function(){return this.u(null)},
sc3:function(a){var u=this.r
if(!(Math.abs(u-a)<$.G().a)){this.r=a
u=new D.t("blurValue",u,a,[P.r])
u.b=!0
this.u(u)}},
sdD:function(a){var u,t=this,s=t.e
if(s!=a){if(s!=null)s.gn().E(0,t.ga4())
u=t.e
t.e=a
if(a!=null)a.gn().h(0,t.ga4())
s=new D.t("colorTexture",u,t.e,[T.bP])
s.b=!0
t.u(s)}},
sb2:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gn().E(0,s.ga4())
u=s.f
s.f=a
if(a!=null)a.gn().h(0,s.ga4())
r=new D.t("blurTexture",u,s.f,[T.bP])
t=r.b=!0
s.u(r)
r=s.f==null
if(!(r&&u!=null))r=!r&&u==null
else r=t
if(r){s.a=null
s.u(null)}}},
scu:function(a){var u,t=this,s=$.lC
if(s==null){s=new V.cG(1,0,0,0,1,0,0,0,1)
$.lC=s
a=s}else a=s
if(!J.J(t.b,a)){u=t.b
t.b=a
s=new D.t("textureMatrix",u,a,[V.cG])
s.b=!0
t.u(s)}},
sc2:function(a){var u,t,s=this
if(a==null)a=V.m4()
if(!J.J(s.c,a)){u=s.c
s.c=a
t=new D.t("blurAdjust",u,a,[V.bw])
t.b=!0
s.u(t)}},
aa:function(a,b){},
a7:function(a,b){H.j(a,"$ib",[T.bv],"$ab")
if(b!=null)if(!C.a.au(a,b)){b.a=a.length
C.a.h(a,b)}},
bB:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a
if(g==null){u=h.f!=null
g="GaussianBlur_"+(u?"1":"0")
t=g.charCodeAt(0)==0?g:g
s=H.f(a.fr.j(0,t),"$idH")
if(s==null){g=a.a
s=new A.dH(g,t)
s.bi(g,t)
r=s.z=new A.h3(u,t)
q=new P.ak("")
q.a="precision mediump float;\n"
q.a="precision mediump float;\n\n"
q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\n"
if(u){q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform sampler2D blurTxt;\n"
g=q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform sampler2D blurTxt;\nuniform vec4 blurAdj;\n"}else g=q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform float blurValue;\n"
g+="uniform vec2 blurScale;\n"
q.a=g
g+="\n"
q.a=g
g+="varying vec2 txt2D;\n"
q.a=g
q.a=g+"\n"
g=[P.r]
r.aO(q,3,H.d([0.75],g),H.d([0.5],g))
r.aO(q,6,H.d([0.42857,2.14286],g),H.d([0.41667,0.08333],g))
r.aO(q,9,H.d([0,1.8],g),H.d([0.5122,0.2439],g))
r.aO(q,12,H.d([0,1.38462,3.23077],g),H.d([0.22703,0.31622,0.07027],g))
r.aO(q,15,H.d([0.9375,2.8125],g),H.d([0.36184,0.13816],g))
r.aO(q,18,H.d([0.47368,2.36842,4.26316],g),H.d([0.29916,0.16318,0.03766],g))
g=q.a+="void main()\n"
g=q.a=g+"{\n"
g=(u?q.a=g+"   float blurValue = dot(texture2D(blurTxt, txt2D), blurAdj);\n":g)+"   float blurOffset = abs(blurValue);\n"
q.a=g
g+="\n"
q.a=g
g+="   if     (blurOffset < 0.15) gl_FragColor = texture2D(colorTxt, txt2D);\n"
q.a=g
g+="   else if(blurOffset < 0.3)  gl_FragColor = blur3();\n"
q.a=g
g+="   else if(blurOffset < 0.45) gl_FragColor = blur6();\n"
q.a=g
g+="   else if(blurOffset < 0.6)  gl_FragColor = blur9();\n"
q.a=g
g+="   else if(blurOffset < 0.75) gl_FragColor = blur12();\n"
q.a=g
g+="   else if(blurOffset < 0.9)  gl_FragColor = blur15();\n"
q.a=g
g+="   else                       gl_FragColor = blur18();\n"
q.a=g
g=q.a=g+"}\n"
s.bu(0,"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n":"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n",g.charCodeAt(0)==0?g:g)
s.Q=s.x.j(0,"posAttr")
s.ch=s.x.j(0,"txtAttr")
s.cx=H.p(s.y.j(0,"projViewObjMat"),"$iaa")
s.cy=H.p(s.y.j(0,"txt2DMat"),"$icc")
s.dy=H.p(s.y.j(0,"colorTxt"),"$ia3")
s.dx=H.p(s.y.j(0,"blurScale"),"$iaw")
g=s.y
if(u){s.fr=H.p(g.j(0,"blurTxt"),"$ia3")
s.db=H.p(s.y.j(0,"blurAdj"),"$ibR")}else s.fx=H.p(g.j(0,"blurValue"),"$ia5")
a.bq(s)}g=h.a=s
b.e=null}r=g.z
g=b.e
if((!(g instanceof Z.bm)?b.e=null:g)==null){g=b.d
p=$.ar()
o=$.aN()
o=g.br(new Z.cg(a.a),new Z.b_(p.a|o.a))
o.ak($.ar()).e=h.a.Q.c
o.ak($.aN()).e=h.a.ch.c
b.e=o}n=H.d([],[T.bv])
h.a7(n,h.e)
g=r.a
if(g)h.a7(n,h.f)
for(m=0;m<n.length;++m)n[m].X(a)
p=h.a
p.X(a)
o=h.e
p.ad(p.dy,o)
o=h.b
l=p.cy
l.toString
l.ab(o.a6(0,!0))
o=h.d
l=o.a
k=a.c
if(typeof l!=="number")return l.w()
o=o.b
j=a.d
if(typeof o!=="number")return o.w()
i=p.dx
C.c.bg(i.a,i.d,l/k,o/j)
j=a.gem()
p=p.cx
p.toString
p.ab(j.a6(0,!0))
p=h.a
if(g){g=h.f
p.ad(p.fr,g)
g=h.c
p.db.eF(g)}else{g=h.r
p=p.fx
C.c.a2(p.a,p.d,g)}g=b.e
if(g instanceof Z.bm){g.X(a)
g.a1(a)
g.aC(a)}else b.e=null
g=h.a
g.toString
p=a.a
p.useProgram(null)
g.x.bt()
for(m=0;m<n.length;++m){g=n[m]
if(g.c){g.c=!1
p.activeTexture(33984+g.a)
p.bindTexture(3553,null)}}}}
O.dT.prototype={
gn:function(){var u=this.fr
return u==null?this.fr=D.L():u},
u:function(a){var u
H.f(a,"$iB")
u=this.fr
if(u!=null)u.B(a)},
ag:function(){return this.u(null)},
di:function(a){H.f(a,"$iB")
this.a=null
this.u(a)},
hR:function(){return this.di(null)},
fP:function(a,b){var u=V.ae
H.j(b,"$ih",[u],"$ah")
u=new D.bF([u])
u.b=!0
this.u(u)},
fR:function(a,b){var u=V.ae
H.j(b,"$ih",[u],"$ah")
u=new D.bG([u])
u.b=!0
this.u(u)},
cZ:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.l,h=new H.a0([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
q=r.gat()
p=h.j(0,r.gat())
h.k(0,q,p==null?1:p)}o=H.d([],[A.aC])
h.J(0,new O.hv(j,o))
C.a.bH(o,new O.hw())
n=new H.a0([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
q=r.gat()
p=n.j(0,r.gat())
n.k(0,q,p==null?1:p)}m=H.d([],[A.aF])
n.J(0,new O.hx(j,m))
C.a.bH(m,new O.hy())
l=new H.a0([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.A)(i),++s){r=i[s]
t=r.gat()
q=l.j(0,r.gat())
l.k(0,t,q==null?1:q)}k=H.d([],[A.aG])
l.J(0,new O.hz(j,k))
C.a.bH(k,new O.hA())
i=C.e.a5(j.e.a.length+3,4)
j.dy.e
return A.no(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
a7:function(a,b){H.j(a,"$ib",[T.bv],"$ab")
if(b!=null)if(!C.a.au(a,b)){b.a=a.length
C.a.h(a,b)}},
aa:function(a,b){var u,t,s
for(u=this.dx.a,u=new J.as(u,u.length,[H.w(u,0)]);u.C();){t=u.d
t.toString
s=$.cI
t.a=s==null?$.cI=new V.ae(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s
s=t.b
if(s!=null)t.a=s.aD(0,b,t)}},
bB:function(a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
if(a8==null){a8=a7.cZ()
u=H.f(a9.fr.j(0,a8.aJ),"$idS")
if(u==null){u=A.nn(a8,a9.a)
a9.bq(u)}a8=a7.a=u
b0.e=null}t=a8.z
s=t.dL
a8=b0.e
if(!(a8 instanceof Z.bm))a8=b0.e=null
if(a8==null||!a8.d.p(0,s)){a8=t.k3
if(a8)b0.d.as()
r=t.k4
if(r){q=b0.d
p=q.e
if(p!=null)++p.d
q.d.c5()
q.a.c5()
q=q.e
if(q!=null)q.ae(0)}q=t.r2
if(q){p=b0.d
o=p.e
if(o!=null)++o.d
p.a.is()
p=p.e
if(p!=null)p.ae(0)}n=b0.d.br(new Z.cg(a9.a),s)
n.ak($.ar()).e=a7.a.Q.c
if(a8)n.ak($.b0()).e=a7.a.cx.c
if(r)n.ak($.bl()).e=a7.a.ch.c
if(t.r1)n.ak($.aN()).e=a7.a.cy.c
if(q)n.ak($.by()).e=a7.a.db.c
if(t.rx)n.ak($.bk()).e=a7.a.dx.c
b0.e=n}a8=T.bv
m=H.d([],[a8])
a7.a.X(a9)
if(t.dy){r=a7.a
q=a9.dx
q=q.ga9(q)
r=r.dy
r.toString
r.ab(q.a6(0,!0))}if(t.fr){r=a7.a
q=a9.gez()
r=r.fr
r.toString
r.ab(q.a6(0,!0))}r=a7.a
q=a9.gem()
r=r.fy
r.toString
r.ab(q.a6(0,!0))
if(t.ry){r=a7.a
q=a7.b
r=r.k1
r.toString
r.ab(C.j.a6(q,!0))}if(t.x1){r=a7.a
q=a7.c
r=r.k2
r.toString
r.ab(C.j.a6(q,!0))}if(t.x2){r=a7.a
q=a7.d
r=r.k3
r.toString
r.ab(C.j.a6(q,!0))}if(t.y2>0){l=a7.e.a.length
r=a7.a.k4
C.c.aX(r.a,r.d,l)
for(r=[P.r],k=0;k<l;++k){q=a7.a
p=a7.e.a
if(k>=p.length)return H.c(p,k)
p=p[k]
q.toString
H.f(p,"$iae")
q=q.r1
if(k>=q.length)return H.c(q,k)
q=q[k]
j=new Float32Array(H.ci(H.j(p.a6(0,!0),"$ib",r,"$ab")))
C.c.cz(q.a,q.d,!1,j)}}r=t.a
if(r.a){q=a7.a
p=a7.f.f
q=q.r2
C.c.U(q.a,q.d,p.a,p.b,p.c)}if(r.b){a7.a7(m,a7.f.d)
r=a7.a
q=a7.f.d
r.ad(r.rx,q)}if(t.id){r=t.b
if(r.a){q=a7.a
p=a7.r.f
q=q.x1
C.c.U(q.a,q.d,p.a,p.b,p.c)}if(r.b){a7.a7(m,a7.r.d)
r=a7.a
q=a7.r.d
r.ad(r.x2,q)}r=t.c
if(r.a){q=a7.a
p=a7.x.f
q=q.y2
C.c.U(q.a,q.d,p.a,p.b,p.c)}if(r.b){a7.a7(m,a7.x.d)
r=a7.a
q=a7.x.d
r.ad(r.aJ,q)}r=t.d
if(r.a){q=a7.a
p=a7.y.f
q=q.dM
C.c.U(q.a,q.d,p.a,p.b,p.c)}if(r.b){a7.a7(m,a7.y.d)
r=a7.a
q=a7.y.d
r.ad(r.dN,q)}r=t.e
q=r.a
if(q||r.b||!1){p=a7.a
o=a7.z.ch
p=p.dQ
C.c.a2(p.a,p.d,o)}if(q){q=a7.a
p=a7.z.f
q=q.dO
C.c.U(q.a,q.d,p.a,p.b,p.c)}if(r.b){a7.a7(m,a7.z.d)
r=a7.a
q=a7.z.d
r.ad(r.dP,q)}r=t.z
if(r.length>0){q=a9.db
i=q.ga9(q)
q=P.l
h=new H.a0([q,q])
for(q=a7.dx.e,p=q.length,o=[a8],g=0;g<q.length;q.length===p||(0,H.A)(q),++g){f=q[g]
e=f.gat()
d=h.j(0,e)
if(d==null)d=0
h.k(0,e,d+1)
c=J.dl(a7.a.cc.j(0,e),d)
b=f.gdG(f)
a=C.d.m(i.a,b.gdH(b))+C.d.m(i.b,b.gdI(b))+C.d.m(i.c,b.gdJ())
a0=C.d.m(i.e,b.gdH(b))+C.d.m(i.f,b.gdI(b))+C.d.m(i.r,b.gdJ())
a1=i.y
a2=b.gdH(b)
if(typeof a1!=="number")return a1.m()
a2=C.d.m(a1,a2)
a1=i.z
a3=b.gdI(b)
if(typeof a1!=="number")return a1.m()
a3=C.d.m(a1,a3)
a1=i.Q
b=b.gdJ()
if(typeof a1!=="number")return a1.m()
b=a2+a3+C.d.m(a1,b)
b=new V.R(a,a0,b).w(0,Math.sqrt(a*a+a0*a0+b*b))
a0=c.e
a=b.a
a1=b.b
b=b.c
C.c.U(a0.a,a0.d,a,a1,b)
b=f.gb3(f)
a1=c.f
C.c.U(a1.a,a1.d,b.a,b.b,b.c)
f.gaW()
b=f.gdG(f)
a=c.d
C.c.U(a.a,a.d,b.a,b.b,b.c)
b=f.gjp()
a=c.b
C.c.U(a.a,a.d,b.a,b.b,b.c)
b=f.gbC(f)
a=c.c
C.c.U(a.a,a.d,b.a,b.b,b.c)
b=f.gaW()
H.j(m,"$ib",o,"$ab")
if(!C.a.au(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gaW()
a=b.ge8(b)
if(a){a=c.r
a.toString
a0=b.d
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.A)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=a7.a.cb.j(0,p)
C.c.aX(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=a9.db
i=q.ga9(q)
q=P.l
a4=new H.a0([q,q])
for(q=a7.dx.f,p=q.length,g=0;g<q.length;q.length===p||(0,H.A)(q),++g){f=q[g]
e=f.gat()
d=a4.j(0,e)
if(d==null)d=0
a4.k(0,e,d+1)
c=J.dl(a7.a.ce.j(0,e),d)
a5=i.m(0,f.a)
o=f.a
b=$.cP
o=o.cv(b==null?$.cP=new V.a9(0,0,0):b)
b=c.b
C.c.U(b.a,b.d,o.a,o.b,o.c)
o=$.cP
o=a5.cv(o==null?$.cP=new V.a9(0,0,0):o)
b=c.c
C.c.U(b.a,b.d,o.a,o.b,o.c)
o=f.c
b=c.e
C.c.U(b.a,b.d,o.a,o.b,o.c)
o=f.r
b=c.y
C.c.a2(b.a,b.d,o)
o=f.x
b=c.z
C.c.a2(b.a,b.d,o)
o=f.y
b=c.Q
C.c.a2(b.a,b.d,o)}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.A)(r),++g){p=r[g].a
l=a4.j(0,p)
if(l==null)l=0
p=a7.a.cd.j(0,p)
C.c.aX(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=a9.db
i=q.ga9(q)
q=P.l
a6=new H.a0([q,q])
for(q=a7.dx.r,p=q.length,a8=[a8],g=0;g<q.length;q.length===p||(0,H.A)(q),++g){f=q[g]
e=f.gat()
d=a6.j(0,e)
if(d==null)d=0
a6.k(0,e,d+1)
c=J.dl(a7.a.cg.j(0,e),d)
o=f.gj7(f)
b=c.b
C.c.U(b.a,b.d,o.a,o.b,o.c)
o=f.gdG(f).jL()
b=c.c
C.c.U(b.a,b.d,o.a,o.b,o.c)
o=i.cv(f.gj7(f))
b=c.d
C.c.U(b.a,b.d,o.a,o.b,o.c)
o=f.gb3(f)
b=c.e
C.c.U(b.a,b.d,o.a,o.b,o.c)
f.gaW()
o=f.gjp()
b=c.f
C.c.U(b.a,b.d,o.a,o.b,o.c)
o=f.gbC(f)
b=c.r
C.c.U(b.a,b.d,o.a,o.b,o.c)
o=f.gjM()
b=c.x
C.c.a2(b.a,b.d,o)
o=f.gjN()
b=c.y
C.c.a2(b.a,b.d,o)
f.gaW()
o=f.gaW()
H.j(m,"$ib",a8,"$ab")
if(!C.a.au(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gaW()
b=o.ge8(o)
if(b){b=c.dx
b.toString
a=o.d
if(!a)b.a.uniform1i(b.d,0)
else{o=o.a
b.a.uniform1i(b.d,o)}}f.gcE()
o=f.gjs()
b=c.z
C.c.cw(b.a,b.d,o.a,o.b,o.c,o.d)
o=f.gcE()
if(!C.a.au(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gcE()
b=o.ge8(o)
if(b){b=c.dy
b.toString
a=o.d
if(!a)b.a.uniform1i(b.d,0)
else{o=o.a
b.a.uniform1i(b.d,o)}}if(f.gjA()){o=f.gjy()
b=c.Q
C.c.a2(b.a,b.d,o)
o=f.gjx()
b=c.ch
C.c.a2(b.a,b.d,o)}if(f.gjz()){o=f.gju()
b=c.cx
C.c.a2(b.a,b.d,o)
o=f.gjv()
b=c.cy
C.c.a2(b.a,b.d,o)
o=f.gjw()
b=c.db
C.c.a2(b.a,b.d,o)}}for(a8=r.length,g=0;g<r.length;r.length===a8||(0,H.A)(r),++g){q=r[g].a
l=a6.j(0,q)
if(l==null)l=0
q=a7.a.cf.j(0,q)
C.c.aX(q.a,q.d,l)}}}if(t.f.b){a7.a7(m,a7.Q.d)
a8=a7.a
r=a7.Q.d
a8.ad(a8.dR,r)}if(t.dx){a8=a7.a
r=a9.Q
if(r==null){r=a9.db
r=a9.Q=r.ga9(r).iM(0)}a8=a8.id
a8.toString
a8.ab(r.a6(0,!0))}if(t.cy){a7.a7(m,a7.ch)
a8=a7.a
r=a7.ch
a8.hU(a8.dS,r)
a8=t.r
if(a8.a){r=a7.a
q=a7.cx.f
r=r.dT
C.c.U(r.a,r.d,q.a,q.b,q.c)}if(a8.b){a7.a7(m,a7.cx.d)
a8=a7.a
r=a7.cx.d
a8.ad(a8.dU,r)}a8=t.x
r=a8.a
if(r||a8.b||!1){q=a7.a
p=a7.cy.ch
q=q.dV
C.c.a2(q.a,q.d,p)}if(r){r=a7.a
q=a7.cy.f
r=r.dW
C.c.U(r.a,r.d,q.a,q.b,q.c)}if(a8.b){a7.a7(m,a7.cy.d)
a8=a7.a
r=a7.cy.d
a8.ad(a8.dX,r)}}a8=t.y
r=a8.a
q=!r
if(!q||a8.b||!1){if(r){r=a7.a
p=a7.db.f
r=r.dY
C.c.a2(r.a,r.d,p)}if(a8.b){a7.a7(m,a7.db.d)
r=a7.a
p=a7.db.d
r.ad(r.dZ,p)}r=a9.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].X(a9)
r=b0.e
r.X(a9)
r.a1(a9)
r.aC(a9)
if(!q||a8.b||!1)a9.a.disable(3042)
for(a8=a9.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
a8.activeTexture(33984+r.a)
a8.bindTexture(3553,null)}}r=a7.a
r.toString
a8.useProgram(null)
r.x.bt()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cZ().aJ},
sf2:function(a){this.e=H.j(a,"$iV",[V.ae],"$aV")}}
O.hv.prototype={
$2:function(a,b){H.a_(a)
H.a_(b)
if(typeof b!=="number")return b.v()
return C.a.h(this.b,new A.aC(a,C.e.a5(b+3,4)*4))},
$S:11}
O.hw.prototype={
$2:function(a,b){H.f(a,"$iaC")
H.f(b,"$iaC")
return J.kE(a.a,b.a)},
$S:46}
O.hx.prototype={
$2:function(a,b){H.a_(a)
H.a_(b)
if(typeof b!=="number")return b.v()
return C.a.h(this.b,new A.aF(a,C.e.a5(b+3,4)*4))},
$S:11}
O.hy.prototype={
$2:function(a,b){H.f(a,"$iaF")
H.f(b,"$iaF")
return J.kE(a.a,b.a)},
$S:47}
O.hz.prototype={
$2:function(a,b){H.a_(a)
H.a_(b)
if(typeof b!=="number")return b.v()
return C.a.h(this.b,new A.aG(a,C.e.a5(b+3,4)*4))},
$S:11}
O.hA.prototype={
$2:function(a,b){H.f(a,"$iaG")
H.f(b,"$iaG")
return J.kE(a.a,b.a)},
$S:48}
O.hp.prototype={
aH:function(){var u,t=this
t.cJ()
u=t.f
if(!(Math.abs(u-1)<$.G().a)){t.f=1
u=new D.t(t.b,u,1,[P.r])
u.b=!0
t.a.u(u)}}}
O.cF.prototype={
u:function(a){return this.a.u(H.f(a,"$iB"))},
ag:function(){return this.u(null)},
aH:function(){},
bn:function(a){var u,t,s=this
if(!s.c.p(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.aH()
u=s.a
u.a=null
u.u(null)}},
sbD:function(a){var u,t,s=this,r=a==null
if(r){u=s.c
s.bn(new A.af(u.a,!1,!1))}else{u=s.c
if(!u.b)s.bn(new A.af(u.a,!0,!1))}u=s.d
if(u!=a){if(u!=null)u.gn().E(0,s.ga4())
t=s.d
s.d=a
if(!r)a.gn().h(0,s.ga4())
r=new D.t(s.b+".texture2D",t,s.d,[T.bP])
r.b=!0
s.a.u(r)}}}
O.hq.prototype={}
O.ba.prototype={
dk:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.t(s.b+".color",u,a,[V.a6])
t.b=!0
s.a.u(t)}},
aH:function(){this.cJ()
this.dk(new V.a6(1,1,1))},
sb3:function(a,b){this.bn(new A.af(!0,this.c.b,!1))
this.dk(b)}}
O.hs.prototype={}
O.ht.prototype={
aH:function(){var u,t=this
t.cK()
u=t.ch
if(!(Math.abs(u-1)<$.G().a)){t.ch=1
u=new D.t(t.b+".refraction",u,1,[P.r])
u.b=!0
t.a.u(u)}}}
O.hu.prototype={
dm:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.G().a)){u.ch=a
t=new D.t(u.b+".shininess",t,a,[P.r])
t.b=!0
u.a.u(t)}},
aH:function(){this.cK()
this.dm(100)}}
O.bu.prototype={}
O.e9.prototype={
gn:function(){var u=this.e
return u==null?this.e=D.L():u},
u:function(a){var u
H.f(a,"$iB")
u=this.e
if(u!=null)u.B(a)},
ag:function(){return this.u(null)},
h4:function(a,b){var u,t,s,r,q,p,o
H.j(b,"$ih",[O.aW],"$ah")
for(u=b.length,t=this.ga4(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=b[q]
if(p!=null){o=p.f
if(o==null){o=new D.bD()
o.sac(null)
o.saQ(null)
o.c=null
o.d=0
p.f=o}H.n(t,s)
if(o.a==null)o.sac(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.ag()},
h6:function(a,b){var u,t
H.j(b,"$ih",[O.aW],"$ah")
for(u=b.gV(b),t=this.ga4();u.C();)u.gM(u).gn().E(0,t)
this.ag()},
sdA:function(a){var u=this.f
if(u!==a){this.f=a
u=new D.t("blend",u,a,[A.bA])
u.b=!0
this.u(u)}},
aa:function(a,b){},
ft:function(a){a=C.e.a5(a+3,4)*4
if(a<=0)return 4
return a},
bB:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.ft(h.c.a.length)
if(g!==h.d||h.f!=h.r){h.d=g
h.r=h.f
h.b=null}u=h.b
if(u==null){u=h.f
t="TextureLayout_"+g+"_"+C.e.i(u.a)
s=H.f(a.fr.j(0,t),"$iea")
if(s==null){s=A.nL(g,u,a.a)
a.bq(s)}h.b=s
u=s}if(b.e==null){u=b.d.br(new Z.cg(a.a),$.ar())
t=u.ak($.ar())
r=h.b
t.e=r.z.c
b.e=u
u=r}u.X(a)
u=T.bv
q=H.d([],[u])
for(t=[P.r],u=[u],p=0,o=0;r=h.c.a,o<r.length;++o){n=r[o]
if(n!=null&&n.a!=null){r=n.a
H.j(q,"$ib",u,"$ab")
if(r!=null)if(!C.a.au(q,r)){r.a=q.length
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
if(m==null){m=$.cI
if(m==null){m=new V.ae(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.cI=m}}j=new Float32Array(H.ci(H.j(m.a6(0,!0),"$ib",t,"$ab")))
C.c.cz(r.a,r.d,!1,j)
r=h.b
i=n.c
r.toString
if(i==null){m=$.cS
if(m==null){m=V.cR(0,0,1,1)
$.cS=m
i=m}else i=m}m=r.db
if(p>=m.length)return H.c(m,p)
m=m[p]
C.c.bg(m.a,m.d,i.a,i.b)
r=r.dx
if(p>=r.length)return H.c(r,p)
r=r[p]
C.c.bg(r.a,r.d,i.c,i.d)
r=h.b
i=n.d
r.toString
if(i==null){m=$.cS
if(m==null){m=V.cR(0,0,1,1)
$.cS=m
i=m}else i=m}m=r.dy
if(p>=m.length)return H.c(m,p)
m=m[p]
C.c.bg(m.a,m.d,i.a,i.b)
r=r.fr
if(p>=r.length)return H.c(r,p)
r=r[p]
C.c.bg(r.a,r.d,i.c,i.d)
r=h.b
m=n.e
r=r.fx
if(p>=r.length)return H.c(r,p)
r=r[p]
m=H.E(m)?1:0
C.c.aX(r.a,r.d,m);++p}}u=h.b.Q
C.c.aX(u.a,u.d,p)
u=h.b
t=h.a
u.ch.eE(t)
for(o=0;o<q.length;++o)q[o].X(a)
u=b.e
if(u instanceof Z.bm){u.X(a)
u.a1(a)
u.aC(a)}else b.e=null
u=h.b
u.toString
t=a.a
t.useProgram(null)
u.x.bt()
for(o=0;o<q.length;++o){u=q[o]
if(u.c){u.c=!1
t.activeTexture(33984+u.a)
t.bindTexture(3553,null)}}},
sfh:function(a){this.c=H.j(a,"$iV",[O.aW],"$aV")}}
O.aW.prototype={
gn:function(){var u=this.f
return u==null?this.f=D.L():u},
u:function(a){var u
H.f(a,"$iB")
u=this.f
if(u!=null)u.B(a)},
ag:function(){return this.u(null)}}
T.bv.prototype={}
T.bP.prototype={}
T.it.prototype={
dl:function(){if(!this.d){this.d=!0
var u=this.y
if(u!=null)u.dK()}},
gn:function(){var u=this.y
return u==null?this.y=D.L():u},
X:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}}
T.iu.prototype={
bx:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=T.kV(q)
r=W.o
W.ab(u,"load",H.n(new T.iv(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
hS:function(a,b,c){var u,t,s,r
b=V.di(b)
u=V.di(a.width)
t=V.di(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kJ()
s.width=u
s.height=t
r=H.f(C.i.eC(s,"2d"),"$icu")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oR(r.getImageData(0,0,s.width,s.height))}}}
T.iv.prototype={
$1:function(a){var u,t,s=this,r=3553,q=s.b,p=s.c
q.e=p.width
q.f=p.height
u=s.a
t=u.hS(p,u.b,s.d)
q.r=p.width
q.x=p.height
p=u.a
p.bindTexture(r,s.e)
p.pixelStorei(37440,s.f?1:0)
C.c.jg(p,r,0,6408,6408,5121,t)
if(s.r)p.generateMipmap(r)
p.bindTexture(r,null)
q.dl();++u.e},
$S:16}
T.iw.prototype={
fo:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.c
if(typeof f!=="number")return f.cL()
u=C.e.a5(f,2)
t=this.b
s=this.a
r=s.length
q=t*4
for(;u>=0;--u){p=q*u
o=q*(f-1-u)
for(n=0;n<t;++n){m=4*n
l=p+m
k=o+m
for(j=0;j<4;++j){i=l+j
h=k+j
if(i<0||i>=r)return H.c(s,i)
g=s[i]
if(h<0||h>=r)return H.c(s,h)
s[i]=s[h]
s[h]=g}}}}}
V.fi.prototype={
aU:function(a,b){return!0},
i:function(a){return"all"},
$ibp:1}
V.bp.prototype={}
V.dR.prototype={
aU:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)if(u[s].aU(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saG:function(a){this.a=H.j(a,"$ib",[V.bp],"$ab")},
$ibp:1}
V.br.prototype={
aU:function(a,b){return!this.eI(0,b)},
i:function(a){return"!["+this.cI(0)+"]"}}
V.i4.prototype={
eL:function(a){var u,t
if(a.a.length<=0)throw H.e(P.y("May not create a SetMatcher with zero characters."))
u=new H.a0([P.l,P.Z])
for(t=new H.dP(a,a.gl(a),[H.aB(a,"z",0)]);t.C();)u.k(0,t.d,!0)
this.shT(u)},
aU:function(a,b){return this.a.bs(0,b)},
i:function(a){var u=this.a
return P.cW(u.gaA(u),0,null)},
shT:function(a){this.a=H.j(a,"$iC",[P.l,P.Z],"$aC")},
$ibp:1}
V.cU.prototype={
q:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cZ(this.a.P(0,b))
r.saG(H.d([],[V.bp]))
r.c=!1
C.a.h(this.c,r)
return r},
iE:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.aU(0,a))return r}return},
i:function(a){return this.b},
sig:function(a){this.c=H.j(a,"$ib",[V.cZ],"$ab")}}
V.ec.prototype={
i:function(a){var u=H.mD(this.b,"\n","\\n"),t=H.mD(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cY.prototype={
i:function(a){return this.b},
shN:function(a){var u=P.i
this.c=H.j(a,"$iC",[u,u],"$aC")}}
V.iz.prototype={
P:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cU(this,b)
u.sig(H.d([],[V.cZ]))
u.d=null
this.a.k(0,b,u)}return u},
bf:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cY(a)
u=P.i
t.shN(new H.a0([u,u]))
this.b.k(0,a,t)}return t},
jl:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.ec]),k=this.c,j=[P.l],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.H(a,s)
q=k.iE(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cW(i,0,m)
throw H.e(P.y("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cW(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.ec(n==null?o.b:n,p,s)}++s}}},
si4:function(a){this.a=H.j(a,"$iC",[P.i,V.cU],"$aC")},
si7:function(a){this.b=H.j(a,"$iC",[P.i,V.cY],"$aC")}}
V.cZ.prototype={
i:function(a){return this.b.b+": "+this.cI(0)}}
X.fr.prototype={
gn:function(){var u=this.fr
return u==null?this.fr=D.L():u},
a0:function(a){var u=this.fr
if(u!=null)u.B(a)},
sap:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.t("width",u,b,[P.l])
u.b=!0
t.a0(u)}},
sal:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.t("height",u,b,[P.l])
u.b=!0
t.a0(u)}},
X:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){u=a.a
t=u.drawingBufferWidth
s=h.r
if(typeof t!=="number")return t.m()
h.sap(0,C.d.Z(t*s))
u=u.drawingBufferHeight
s=h.x
if(typeof u!=="number")return u.m()
h.sal(0,C.d.Z(u*s))}if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=H.a_(u.getParameter(3379))
p=V.di(s)
o=V.di(r)
q=V.di(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.c.es(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.kV(n)
m.e=s
m.f=r
m.r=p
m.x=o
m.dl()
t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.dK()
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
a.c=C.d.Z(s*h.a)
r=t.d
a.d=C.d.Z(r*h.b)
l=t.a
k=h.c
if(typeof k!=="number")return H.u(k)
j=C.d.Z(l*k)
t=t.b
l=h.d
if(typeof l!=="number")return H.u(l)
u.viewport(j,C.d.Z(t*l),C.d.Z(s*k),C.d.Z(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
aC:function(a){a.a.bindFramebuffer(36160,null)}}
X.bZ.prototype={$ic6:1}
X.h2.prototype={
gn:function(){var u=this.x
return u==null?this.x=D.L():u},
X:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.u(u)
q=C.d.Z(r*u)
r=s.b
if(typeof t!=="number")return H.u(t)
p=C.d.Z(r*t)
r=C.d.Z(s.c*u)
a.c=r
s=C.d.Z(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)},
aC:function(a){}}
X.h5.prototype={
gn:function(){var u=this.b
return u==null?this.b=D.L():u},
$ic6:1,
$ibZ:1}
X.dY.prototype={
gn:function(){var u=this.f
return u==null?this.f=D.L():u},
a0:function(a){var u
H.f(a,"$iB")
u=this.f
if(u!=null)u.B(a)},
eX:function(){return this.a0(null)},
sba:function(a){var u,t,s=this
if(!J.J(s.b,a)){u=s.b
if(u!=null)u.gn().E(0,s.gcP())
t=s.b
s.b=a
if(a!=null)a.gn().h(0,s.gcP())
u=new D.t("mover",t,s.b,[U.ai])
u.b=!0
s.a0(u)}},
$ic6:1,
$ibZ:1}
X.cX.prototype={}
V.fy.prototype={
du:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=this
H.n(c,{func:1,ret:-1,args:[P.Z]})
if(l.c==null)return
u=l.d.length
t=P.kZ().gbA().j(0,l.a)
if(t==null||t.length<=u){s=d
r=!0}else{if(u>=t.length)return H.c(t,u)
s=t[u]==="1"
r=!1}c.$1(s)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
J.lm(l.c).h(0,p)
n=W.nc("checkbox")
n.checked=s
o=W.o
W.ab(n,"change",H.n(new V.fz(l,c,n,u),{func:1,ret:-1,args:[o]}),!1,o)
p.appendChild(n)
m=q.createElement("span")
m.textContent=b
p.appendChild(m)
J.lm(l.c).h(0,q.createElement("br"))
C.a.h(l.d,n)
if(r)l.ds(u,s)},
b0:function(a,b,c){return this.du(a,b,c,!1)},
ds:function(a,b){var u,t,s,r,q,p=this.a,o=P.kZ().gbA().j(0,p)
if(o==null)o=""
u=o.length
if(u<a)o=C.b.j_(o,a-u+1,"0")
t=a>0?C.b.A(o,0,a):""
t+=H.E(b)?"1":"0"
u=a+1
if(u<o.length)t+=C.b.aj(o,u)
s=P.kZ()
u=P.i
r=P.ni(s.gbA(),u,u)
r.k(0,p,t)
q=s.eo(0,r)
p=window.history
u=q.i(0)
p.toString
p.replaceState(new P.jO([],[]).cA(""),"",u)},
sf5:function(a){this.d=H.j(a,"$ib",[W.cv],"$ab")}}
V.fz.prototype={
$1:function(a){var u=this,t=u.c
u.b.$1(t.checked)
u.a.ds(u.d,t.checked)},
$S:16}
V.kx.prototype={
$1:function(a){var u
H.f(a,"$ibe")
u=C.d.ew(this.a.giH(),2)
if(u!=="0.00")P.lg(u+" fps")},
$S:51}
V.i8.prototype={
eM:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.ab(q,"scroll",H.n(new V.ia(o),{func:1,ret:-1,args:[r]}),!1,r)},
dv:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.j(a,"$ib",[P.i],"$ab")
this.hX()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.jl(C.a.iN(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
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
if(H.pd(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=H.O(m[1])
l.textContent=H.O(m[0])
t.appendChild(l)}else{k=P.jY(C.S,n,C.h,!1)
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
ik:function(a){var u,t,s,r,q,p,o,n="auto"
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
s=H.f(r.insertCell(-1),"$ibt").style
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
o=H.f(r.insertCell(-1),"$ibt")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
hX:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.iz()
t=P.i
u.si4(new H.a0([t,V.cU]))
u.si7(new H.a0([t,V.cY]))
u.c=null
u.c=u.P(0,q)
t=u.P(0,q).q(0,p)
s=V.ao(new H.a4("*"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,p).q(0,p)
s=new V.br()
r=[V.bp]
s.saG(H.d([],r))
C.a.h(t.a,s)
t=V.ao(new H.a4("*"))
C.a.h(s.a,t)
t=u.P(0,p).q(0,"BoldEnd")
s=V.ao(new H.a4("*"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,q).q(0,o)
s=V.ao(new H.a4("_"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,o).q(0,o)
s=new V.br()
s.saG(H.d([],r))
C.a.h(t.a,s)
t=V.ao(new H.a4("_"))
C.a.h(s.a,t)
t=u.P(0,o).q(0,n)
s=V.ao(new H.a4("_"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,q).q(0,m)
s=V.ao(new H.a4("`"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,m).q(0,m)
s=new V.br()
s.saG(H.d([],r))
C.a.h(t.a,s)
t=V.ao(new H.a4("`"))
C.a.h(s.a,t)
t=u.P(0,m).q(0,"CodeEnd")
s=V.ao(new H.a4("`"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,q).q(0,l)
s=V.ao(new H.a4("["))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,l).q(0,k)
s=V.ao(new H.a4("|"))
C.a.h(t.a,s)
s=u.P(0,l).q(0,j)
t=V.ao(new H.a4("]"))
C.a.h(s.a,t)
s.c=!0
s=u.P(0,l).q(0,l)
t=new V.br()
t.saG(H.d([],r))
C.a.h(s.a,t)
s=V.ao(new H.a4("|]"))
C.a.h(t.a,s)
s=u.P(0,k).q(0,j)
t=V.ao(new H.a4("]"))
C.a.h(s.a,t)
s.c=!0
s=u.P(0,k).q(0,k)
t=new V.br()
t.saG(H.d([],r))
C.a.h(s.a,t)
s=V.ao(new H.a4("|]"))
C.a.h(t.a,s)
C.a.h(u.P(0,q).q(0,i).a,new V.fi())
s=u.P(0,i).q(0,i)
t=new V.br()
t.saG(H.d([],r))
C.a.h(s.a,t)
s=V.ao(new H.a4("*_`["))
C.a.h(t.a,s)
s=u.P(0,"BoldEnd")
s.d=s.a.bf(p)
s=u.P(0,n)
s.d=s.a.bf(o)
s=u.P(0,"CodeEnd")
s.d=s.a.bf(m)
s=u.P(0,j)
s.d=s.a.bf("Link")
s=u.P(0,i)
s.d=s.a.bf(i)
this.b=u}}
V.ia.prototype={
$1:function(a){P.lS(C.q,new V.i9(this.a))},
$S:16}
V.i9.prototype={
$0:function(){var u=C.d.Z(document.documentElement.scrollTop),t=this.a.style,s=H.m(-0.01*u)+"px"
t.top=s},
$S:1}
K.ko.prototype={
$1:function(a){var u,t,s,r,q,p,o,n,m
H.f(a,"$iB")
u=this.c
t=this.b.f.a
s=u.r
r=u.x
if(typeof r!=="number")return r.D()
q=r-r-0
t.bindFramebuffer(36160,t.createFramebuffer())
t.readBuffer(36064)
t.framebufferTexture2D(36160,36064,3553,u.b,0)
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.u(r)
p=new Uint8Array(s*r*4)
t.readPixels(0,q,s,r,6408,5121,p)
t.bindFramebuffer(36160,null)
o=new T.iw(p,s,r)
o.fo()
n=F.p_(150,150)
u=this.a
u.a=n
n.as()
u.a.ip(o,0.05)
t=u.a
m=$.b0()
m.toString
t.jn(new Z.b_($.li().a&~m.a))
u.a.jm(!1)
u.a.as()},
$S:10}
K.kp.prototype={
$1:function(a){var u=this.a,t=u.r
H.E(a)
t.sbD(a?this.b:null)
u=u.x
u.sbD(a?this.b:null)},
$S:4}
K.kq.prototype={
$1:function(a){var u=this.a.z
u.sbD(H.E(a)?this.b:null)},
$S:4}
K.kr.prototype={
$1:function(a){var u=this.a.Q
u.sbD(H.E(a)?this.b:null)},
$S:4}
K.ks.prototype={
$1:function(a){var u=H.E(a)?this.a.a:this.c
this.b.sbG(0,u)},
$S:4}
K.kt.prototype={
$1:function(a){var u=this.a,t=H.E(a)?this.b.ch:null
u.d.sb2(t)
u.f.sb2(t)},
$S:4}
K.ku.prototype={
$1:function(a){var u=H.E(a)?this.b:null
this.a.sao(u)},
$S:4};(function aliases(){var u=J.a.prototype
u.eG=u.i
u=J.dM.prototype
u.eH=u.i
u=O.cF.prototype
u.cJ=u.aH
u=O.ba.prototype
u.cK=u.aH
u=V.dR.prototype
u.eI=u.aU
u.cI=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"oL","nY",14)
u(P,"oM","nZ",14)
u(P,"oN","o_",14)
t(P,"mp","oJ",3)
var n
s(n=E.al.prototype,"geg",0,0,null,["$1","$0"],["eh","iY"],0,0)
s(n,"gei",0,0,null,["$1","$0"],["ej","iZ"],0,0)
s(n,"gee",0,0,null,["$1","$0"],["ef","iX"],0,0)
s(n,"gec",0,0,null,["$1","$0"],["ed","iU"],0,0)
r(n,"giS","iT",6)
r(n,"giV","iW",6)
s(n=E.eb.prototype,"gcM",0,0,null,["$1","$0"],["cO","cN"],0,0)
q(n,"gjc","ep",3)
p(n=X.ei.prototype,"gh7","h8",17)
p(n,"gfS","fT",17)
p(n,"gfY","fZ",5)
p(n,"ghb","hc",25)
p(n,"gh9","ha",25)
p(n,"ghf","hg",5)
p(n,"ghj","hk",5)
p(n,"gh1","h2",5)
p(n,"ghh","hi",5)
p(n,"gh_","h0",5)
p(n,"ghl","hm",33)
p(n,"ghn","ho",17)
p(n,"ghD","hE",15)
p(n,"ghz","hA",15)
p(n,"ghB","hC",15)
s(n=D.dO.prototype,"gdc",0,0,null,["$1","$0"],["dd","hd"],0,0)
p(n,"ghp","hq",44)
r(n,"gfM","fN",24)
r(n,"ght","hu",24)
s(D.bL.prototype,"geQ",0,0,null,["$1","$0"],["af","eR"],0,0)
o(V.U.prototype,"gl","b8",13)
o(V.R.prototype,"gl","b8",13)
o(V.bw.prototype,"gl","b8",13)
s(n=U.cC.prototype,"gbl",0,0,null,["$1","$0"],["N","az"],0,0)
r(n,"geT","eU",22)
r(n,"ghr","hs",22)
s(n=U.ej.prototype,"gbl",0,0,null,["$1","$0"],["N","az"],0,0)
p(n,"gfE","fF",2)
p(n,"gfG","fH",2)
p(n,"gfI","fJ",2)
p(n,"gfA","fB",2)
p(n,"gfC","fD",2)
p(n,"gic","ie",2)
p(n,"gia","ib",2)
p(n,"gi8","i9",2)
p(U.ek.prototype,"gfK","fL",2)
s(n=M.dt.prototype,"gW",0,0,null,["$1","$0"],["T","aE"],0,0)
r(n,"ghv","hw",20)
r(n,"ghx","hy",20)
s(M.dv.prototype,"gW",0,0,null,["$1","$0"],["T","aE"],0,0)
s(n=M.dC.prototype,"gW",0,0,null,["$1","$0"],["T","aE"],0,0)
r(n,"gfU","fV",6)
r(n,"gfW","fX",6)
s(M.dG.prototype,"gW",0,0,null,["$1","$0"],["T","aE"],0,0)
s(O.dI.prototype,"ga4",0,0,null,["$1","$0"],["u","ag"],0,0)
s(n=O.dT.prototype,"ga4",0,0,null,["$1","$0"],["u","ag"],0,0)
s(n,"ghQ",0,0,null,["$1","$0"],["di","hR"],0,0)
r(n,"gfO","fP",29)
r(n,"gfQ","fR",29)
s(O.cF.prototype,"ga4",0,0,null,["$1","$0"],["u","ag"],0,0)
s(n=O.e9.prototype,"ga4",0,0,null,["$1","$0"],["u","ag"],0,0)
r(n,"gh3","h4",21)
r(n,"gh5","h6",21)
s(O.aW.prototype,"ga4",0,0,null,["$1","$0"],["u","ag"],0,0)
s(X.dY.prototype,"gcP",0,0,null,["$1","$0"],["a0","eX"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.P,null)
s(P.P,[H.kR,J.a,J.as,P.eB,P.h,H.dP,P.b6,H.c3,H.d_,H.fD,H.iE,P.bC,H.cw,H.eS,P.am,H.hd,H.hf,H.h8,P.eY,P.bi,P.aK,P.em,P.ik,P.cV,P.il,P.be,P.at,P.k0,P.jK,P.d3,P.jE,P.z,P.jT,P.hm,P.c0,P.k_,P.jZ,P.Z,P.aA,P.ac,P.bB,P.hR,P.e7,P.eu,P.h1,P.b,P.C,P.K,P.av,P.i,P.ak,P.ch,P.iS,P.jL,W.fG,W.cv,W.F,W.dE,P.jN,P.f2,P.jF,P.Q,O.V,O.cH,E.fu,E.al,E.hX,E.eb,Z.el,Z.cg,Z.bm,Z.bE,Z.b_,D.fx,D.bD,D.B,X.ds,X.dN,X.ha,X.hj,X.aE,X.hH,X.iA,X.ei,D.dy,D.ag,D.bL,D.e6,V.a6,V.ad,V.fT,V.cG,V.ae,V.a8,V.a9,V.bd,V.bO,V.U,V.R,V.bw,U.ej,U.ek,M.dv,M.dC,M.dG,M.au,A.dp,A.fm,A.af,A.h3,A.aC,A.aF,A.aG,A.hr,A.cb,A.cd,A.cf,A.bA,A.ee,A.iM,F.a7,F.fW,F.bo,F.hc,F.bM,F.e4,F.i5,F.i6,F.i7,F.aq,F.j1,F.j2,F.j5,F.j7,F.j8,F.j9,O.bu,O.cF,O.hs,O.aW,T.iu,T.iw,V.fi,V.bp,V.dR,V.i4,V.cU,V.ec,V.cY,V.iz,X.cX,X.bZ,X.h5,X.dY,V.fy,V.i8])
s(J.a,[J.h7,J.dL,J.dM,J.b7,J.c5,J.bH,H.cL,H.bK,W.k,W.fh,W.bY,W.cu,W.b4,W.b5,W.S,W.eo,W.fK,W.fM,W.eq,W.dB,W.es,W.fO,W.o,W.ev,W.aP,W.h4,W.ex,W.bn,W.hi,W.hB,W.eC,W.eD,W.aQ,W.eE,W.eH,W.aR,W.eL,W.eN,W.aT,W.eO,W.aU,W.eT,W.aH,W.eW,W.iy,W.aX,W.eZ,W.iC,W.iX,W.f4,W.f6,W.f8,W.fa,W.fc,P.b9,P.ez,P.bc,P.eJ,P.hV,P.eU,P.bf,P.f0,P.fn,P.en,P.dq,P.dF,P.e_,P.e1,P.ca,P.e3,P.e8,P.ef,P.eQ])
s(J.dM,[J.hS,J.bS,J.bI])
t(J.kQ,J.b7)
s(J.c5,[J.dK,J.dJ])
t(P.hh,P.eB)
s(P.hh,[H.eg,W.jl,W.jk,P.fY])
t(H.a4,H.eg)
s(P.h,[H.fR,H.hn,H.jd])
s(P.b6,[H.ho,H.je])
t(H.fE,H.fD)
s(P.bC,[H.hO,H.h9,H.iQ,H.iG,H.fw,H.i2,P.fl,P.dX,P.b2,P.iR,P.iO,P.ig,P.fC,P.fJ])
s(H.cw,[H.kB,H.iq,H.kj,H.kk,H.kl,P.jh,P.jg,P.ji,P.jj,P.jS,P.jR,P.jr,P.jv,P.js,P.jt,P.ju,P.jy,P.jz,P.jx,P.jw,P.im,P.io,P.ka,P.jI,P.jH,P.jJ,P.hg,P.hl,P.fP,P.fQ,P.iW,P.iT,P.iU,P.iV,P.jU,P.jV,P.jX,P.jW,P.k4,P.k3,P.k5,P.k6,W.hD,W.hF,W.i1,W.ij,W.jq,P.jP,P.kc,P.fZ,P.h_,P.fp,E.hY,E.hZ,E.i_,E.ix,D.fU,D.fV,F.k1,F.ky,F.kz,F.kg,F.kh,F.jb,F.ja,F.j3,F.j4,O.hv,O.hw,O.hx,O.hy,O.hz,O.hA,T.iv,V.fz,V.kx,V.ia,V.i9,K.ko,K.kp,K.kq,K.kr,K.ks,K.kt,K.ku])
s(H.iq,[H.ih,H.cs])
t(H.jf,P.fl)
t(P.hk,P.am)
t(H.a0,P.hk)
t(H.he,H.fR)
t(H.dU,H.bK)
s(H.dU,[H.d4,H.d6])
t(H.d5,H.d4)
t(H.cM,H.d5)
t(H.d7,H.d6)
t(H.dV,H.d7)
s(H.dV,[H.hI,H.hJ,H.hK,H.hL,H.hM,H.dW,H.cN])
t(P.jG,P.k0)
t(P.jD,P.jK)
t(P.f3,P.hm)
t(P.eh,P.f3)
s(P.c0,[P.fs,P.fS])
t(P.c2,P.il)
s(P.c2,[P.ft,P.j_,P.iZ])
t(P.iY,P.fS)
s(P.ac,[P.r,P.l])
s(P.b2,[P.c9,P.h6])
t(P.jn,P.ch)
s(W.k,[W.I,W.fX,W.cJ,W.aS,W.d8,W.aV,W.aI,W.da,W.jc,W.d1,P.fq,P.bX])
s(W.I,[W.a1,W.bz])
s(W.a1,[W.v,P.q])
s(W.v,[W.fj,W.fk,W.c_,W.dz,W.h0,W.cD,W.cE,W.i3,W.bt])
s(W.b4,[W.cx,W.fH,W.fI])
t(W.fF,W.b5)
t(W.cy,W.eo)
t(W.er,W.eq)
t(W.dA,W.er)
t(W.et,W.es)
t(W.fN,W.et)
t(W.aD,W.bY)
t(W.ew,W.ev)
t(W.cA,W.ew)
t(W.ey,W.ex)
t(W.c4,W.ey)
t(W.bQ,W.o)
s(W.bQ,[W.b8,W.ah,W.aY])
t(W.hC,W.eC)
t(W.hE,W.eD)
t(W.eF,W.eE)
t(W.hG,W.eF)
t(W.eI,W.eH)
t(W.cO,W.eI)
t(W.eM,W.eL)
t(W.hT,W.eM)
t(W.i0,W.eN)
t(W.d9,W.d8)
t(W.ic,W.d9)
t(W.eP,W.eO)
t(W.id,W.eP)
t(W.ii,W.eT)
t(W.eX,W.eW)
t(W.ir,W.eX)
t(W.db,W.da)
t(W.is,W.db)
t(W.f_,W.eZ)
t(W.iB,W.f_)
t(W.bh,W.ah)
t(W.f5,W.f4)
t(W.jm,W.f5)
t(W.ep,W.dB)
t(W.f7,W.f6)
t(W.jA,W.f7)
t(W.f9,W.f8)
t(W.eG,W.f9)
t(W.fb,W.fa)
t(W.jM,W.fb)
t(W.fd,W.fc)
t(W.jQ,W.fd)
t(W.jo,P.ik)
t(W.l1,W.jo)
t(W.jp,P.cV)
t(P.jO,P.jN)
t(P.an,P.jF)
t(P.eA,P.ez)
t(P.hb,P.eA)
t(P.eK,P.eJ)
t(P.hP,P.eK)
t(P.eV,P.eU)
t(P.ip,P.eV)
t(P.f1,P.f0)
t(P.iD,P.f1)
t(P.fo,P.en)
t(P.hQ,P.bX)
t(P.eR,P.eQ)
t(P.ie,P.eR)
s(E.fu,[Z.dr,A.cT,T.bv])
s(D.B,[D.bF,D.bG,D.t,X.hU])
s(X.hU,[X.dQ,X.bJ,X.cK,X.ed])
s(O.V,[D.dO,U.cC,M.dt])
s(D.fx,[U.fB,U.ai])
s(U.ai,[U.du,U.e2])
s(A.cT,[A.dx,A.dH,A.dS,A.ea])
s(A.ee,[A.ap,A.iJ,A.iK,A.iL,A.iI,A.a5,A.aw,A.X,A.bR,A.iN,A.cc,A.aa,A.a3,A.ce])
t(F.ib,F.fW)
t(F.iH,F.hc)
t(F.j6,F.j7)
t(F.hN,F.j8)
s(O.bu,[O.fL,O.dI,O.dT,O.e9])
s(O.cF,[O.hp,O.hq,O.ba])
s(O.ba,[O.ht,O.hu])
t(T.bP,T.bv)
t(T.it,T.bP)
s(V.dR,[V.br,V.cZ])
s(X.cX,[X.fr,X.h2])
u(H.eg,H.d_)
u(H.d4,P.z)
u(H.d5,H.c3)
u(H.d6,P.z)
u(H.d7,H.c3)
u(P.eB,P.z)
u(P.f3,P.jT)
u(W.eo,W.fG)
u(W.eq,P.z)
u(W.er,W.F)
u(W.es,P.z)
u(W.et,W.F)
u(W.ev,P.z)
u(W.ew,W.F)
u(W.ex,P.z)
u(W.ey,W.F)
u(W.eC,P.am)
u(W.eD,P.am)
u(W.eE,P.z)
u(W.eF,W.F)
u(W.eH,P.z)
u(W.eI,W.F)
u(W.eL,P.z)
u(W.eM,W.F)
u(W.eN,P.am)
u(W.d8,P.z)
u(W.d9,W.F)
u(W.eO,P.z)
u(W.eP,W.F)
u(W.eT,P.am)
u(W.eW,P.z)
u(W.eX,W.F)
u(W.da,P.z)
u(W.db,W.F)
u(W.eZ,P.z)
u(W.f_,W.F)
u(W.f4,P.z)
u(W.f5,W.F)
u(W.f6,P.z)
u(W.f7,W.F)
u(W.f8,P.z)
u(W.f9,W.F)
u(W.fa,P.z)
u(W.fb,W.F)
u(W.fc,P.z)
u(W.fd,W.F)
u(P.ez,P.z)
u(P.eA,W.F)
u(P.eJ,P.z)
u(P.eK,W.F)
u(P.eU,P.z)
u(P.eV,W.F)
u(P.f0,P.z)
u(P.f1,W.F)
u(P.en,P.am)
u(P.eQ,P.z)
u(P.eR,W.F)})();(function constants(){var u=hunkHelpers.makeConstList
C.i=W.c_.prototype
C.N=J.a.prototype
C.a=J.b7.prototype
C.O=J.dJ.prototype
C.e=J.dK.prototype
C.j=J.dL.prototype
C.d=J.c5.prototype
C.b=J.bH.prototype
C.P=J.bI.prototype
C.V=W.cO.prototype
C.y=J.hS.prototype
C.c=P.ca.prototype
C.r=J.bS.prototype
C.z=W.bh.prototype
C.A=W.d1.prototype
C.W=new P.ft()
C.B=new P.fs()
C.t=function getTagFallback(o) {
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
C.u=function(hooks) { return hooks; }

C.I=new P.hR()
C.h=new P.iY()
C.J=new P.j_()
C.f=new P.jG()
C.o=new A.bA(0,"ColorBlendType.Overwrite")
C.K=new A.bA(1,"ColorBlendType.Additive")
C.L=new A.bA(2,"ColorBlendType.Average")
C.p=new A.bA(3,"ColorBlendType.AlphaBlend")
C.q=new P.bB(0)
C.M=new P.bB(5e6)
C.v=H.d(u([127,2047,65535,1114111]),[P.l])
C.k=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.l])
C.l=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.m=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.R=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.S=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.n=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.w=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.T=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.x=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.Q=H.d(u([]),[P.i])
C.U=new H.fE(0,{},C.Q,[P.i,P.i])})()
var v={mangledGlobalNames:{l:"int",r:"double",ac:"num",i:"String",Z:"bool",K:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.B]},{func:1,ret:P.K},{func:1,ret:-1,args:[D.B]},{func:1,ret:-1},{func:1,ret:P.K,args:[P.Z]},{func:1,ret:-1,args:[W.ah]},{func:1,ret:-1,args:[P.l,[P.h,E.al]]},{func:1,ret:P.K,args:[F.a7]},{func:1,ret:P.K,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:P.K,args:[D.B]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:P.K,args:[F.aq,P.r,P.r]},{func:1,ret:P.r},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aY]},{func:1,ret:P.K,args:[W.o]},{func:1,ret:-1,args:[W.o]},{func:1,ret:P.i,args:[P.l]},{func:1,ret:P.r,args:[P.r,P.r]},{func:1,ret:-1,args:[P.l,[P.h,M.au]]},{func:1,ret:-1,args:[P.l,[P.h,O.aW]]},{func:1,ret:-1,args:[P.l,[P.h,U.ai]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.l,[P.h,D.ag]]},{func:1,ret:-1,args:[W.b8]},{func:1,ret:P.K,args:[,]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:P.K,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:-1,args:[P.l,[P.h,V.ae]]},{func:1,ret:W.a1,args:[W.I]},{func:1,ret:P.Z,args:[W.I]},{func:1,args:[W.o]},{func:1,ret:-1,args:[W.bh]},{func:1,ret:P.Q,args:[,,]},{func:1,ret:P.Q,args:[P.l]},{func:1,ret:P.K,args:[P.i,,]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:P.K,args:[P.i]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:-1,args:[P.i,P.l]},{func:1,ret:[P.C,P.i,P.i],args:[[P.C,P.i,P.i],P.i]},{func:1,ret:[P.aK,,],args:[,]},{func:1,ret:P.Z,args:[[P.h,D.ag]]},{func:1,ret:P.K,args:[,],opt:[P.av]},{func:1,ret:P.l,args:[A.aC,A.aC]},{func:1,ret:P.l,args:[A.aF,A.aF]},{func:1,ret:P.l,args:[A.aG,A.aG]},{func:1,ret:P.K,args:[{func:1,ret:-1}]},{func:1,args:[P.i]},{func:1,ret:P.K,args:[P.be]},{func:1,args:[,P.i]},{func:1,ret:P.K,args:[P.ac]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b3=0
$.ct=null
$.lo=null
$.l5=!1
$.mt=null
$.mn=null
$.mA=null
$.kd=null
$.km=null
$.le=null
$.cj=null
$.df=null
$.dg=null
$.l6=!1
$.Y=C.f
$.ax=[]
$.lC=null
$.cI=null
$.lK=null
$.cP=null
$.cS=null
$.m_=null
$.lY=null
$.lZ=null
$.m2=null
$.m1=null
$.m0=null
$.m3=null
$.lJ=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pk","mH",function(){return H.ms("_$dart_dartClosure")})
u($,"pl","lh",function(){return H.ms("_$dart_js")})
u($,"pp","mI",function(){return H.bg(H.iF({
toString:function(){return"$receiver$"}}))})
u($,"pq","mJ",function(){return H.bg(H.iF({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pr","mK",function(){return H.bg(H.iF(null))})
u($,"ps","mL",function(){return H.bg(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pv","mO",function(){return H.bg(H.iF(void 0))})
u($,"pw","mP",function(){return H.bg(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pu","mN",function(){return H.bg(H.lU(null))})
u($,"pt","mM",function(){return H.bg(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"py","mR",function(){return H.bg(H.lU(void 0))})
u($,"px","mQ",function(){return H.bg(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pO","lk",function(){return P.nX()})
u($,"pA","mS",function(){return P.nU()})
u($,"pP","mU",function(){return H.np(H.ci(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"pQ","mV",function(){return P.nE("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pR","mW",function(){return P.oi()})
u($,"pH","mT",function(){return Z.aJ(0)})
u($,"pB","li",function(){return Z.aJ(511)})
u($,"pJ","ar",function(){return Z.aJ(1)})
u($,"pI","b0",function(){return Z.aJ(2)})
u($,"pD","bl",function(){return Z.aJ(4)})
u($,"pK","aN",function(){return Z.aJ(8)})
u($,"pL","by",function(){return Z.aJ(16)})
u($,"pE","dj",function(){return Z.aJ(32)})
u($,"pF","dk",function(){return Z.aJ(64)})
u($,"pG","lj",function(){return Z.aJ(96)})
u($,"pM","bV",function(){return Z.aJ(128)})
u($,"pC","bk",function(){return Z.aJ(256)})
u($,"pj","mG",function(){return new V.fT(1e-9)})
u($,"pi","G",function(){return $.mG()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cL,DataView:H.bK,ArrayBufferView:H.bK,Float32Array:H.cM,Float64Array:H.cM,Int16Array:H.hI,Int32Array:H.hJ,Int8Array:H.hK,Uint16Array:H.hL,Uint32Array:H.hM,Uint8ClampedArray:H.dW,CanvasPixelArray:H.dW,Uint8Array:H.cN,HTMLAudioElement:W.v,HTMLBRElement:W.v,HTMLBaseElement:W.v,HTMLBodyElement:W.v,HTMLButtonElement:W.v,HTMLContentElement:W.v,HTMLDListElement:W.v,HTMLDataElement:W.v,HTMLDataListElement:W.v,HTMLDetailsElement:W.v,HTMLDialogElement:W.v,HTMLEmbedElement:W.v,HTMLFieldSetElement:W.v,HTMLHRElement:W.v,HTMLHeadElement:W.v,HTMLHeadingElement:W.v,HTMLHtmlElement:W.v,HTMLIFrameElement:W.v,HTMLLIElement:W.v,HTMLLabelElement:W.v,HTMLLegendElement:W.v,HTMLLinkElement:W.v,HTMLMapElement:W.v,HTMLMediaElement:W.v,HTMLMenuElement:W.v,HTMLMetaElement:W.v,HTMLMeterElement:W.v,HTMLModElement:W.v,HTMLOListElement:W.v,HTMLObjectElement:W.v,HTMLOptGroupElement:W.v,HTMLOptionElement:W.v,HTMLOutputElement:W.v,HTMLParagraphElement:W.v,HTMLParamElement:W.v,HTMLPictureElement:W.v,HTMLPreElement:W.v,HTMLProgressElement:W.v,HTMLQuoteElement:W.v,HTMLScriptElement:W.v,HTMLShadowElement:W.v,HTMLSlotElement:W.v,HTMLSourceElement:W.v,HTMLSpanElement:W.v,HTMLStyleElement:W.v,HTMLTableCaptionElement:W.v,HTMLTableColElement:W.v,HTMLTableElement:W.v,HTMLTableRowElement:W.v,HTMLTableSectionElement:W.v,HTMLTemplateElement:W.v,HTMLTextAreaElement:W.v,HTMLTimeElement:W.v,HTMLTitleElement:W.v,HTMLTrackElement:W.v,HTMLUListElement:W.v,HTMLUnknownElement:W.v,HTMLVideoElement:W.v,HTMLDirectoryElement:W.v,HTMLFontElement:W.v,HTMLFrameElement:W.v,HTMLFrameSetElement:W.v,HTMLMarqueeElement:W.v,HTMLElement:W.v,AccessibleNodeList:W.fh,HTMLAnchorElement:W.fj,HTMLAreaElement:W.fk,Blob:W.bY,HTMLCanvasElement:W.c_,CanvasRenderingContext2D:W.cu,CDATASection:W.bz,CharacterData:W.bz,Comment:W.bz,ProcessingInstruction:W.bz,Text:W.bz,CSSNumericValue:W.cx,CSSUnitValue:W.cx,CSSPerspective:W.fF,CSSCharsetRule:W.S,CSSConditionRule:W.S,CSSFontFaceRule:W.S,CSSGroupingRule:W.S,CSSImportRule:W.S,CSSKeyframeRule:W.S,MozCSSKeyframeRule:W.S,WebKitCSSKeyframeRule:W.S,CSSKeyframesRule:W.S,MozCSSKeyframesRule:W.S,WebKitCSSKeyframesRule:W.S,CSSMediaRule:W.S,CSSNamespaceRule:W.S,CSSPageRule:W.S,CSSRule:W.S,CSSStyleRule:W.S,CSSSupportsRule:W.S,CSSViewportRule:W.S,CSSStyleDeclaration:W.cy,MSStyleCSSProperties:W.cy,CSS2Properties:W.cy,CSSImageValue:W.b4,CSSKeywordValue:W.b4,CSSPositionValue:W.b4,CSSResourceValue:W.b4,CSSURLImageValue:W.b4,CSSStyleValue:W.b4,CSSMatrixComponent:W.b5,CSSRotation:W.b5,CSSScale:W.b5,CSSSkew:W.b5,CSSTranslation:W.b5,CSSTransformComponent:W.b5,CSSTransformValue:W.fH,CSSUnparsedValue:W.fI,DataTransferItemList:W.fK,HTMLDivElement:W.dz,DOMException:W.fM,ClientRectList:W.dA,DOMRectList:W.dA,DOMRectReadOnly:W.dB,DOMStringList:W.fN,DOMTokenList:W.fO,Element:W.a1,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.k,Accelerometer:W.k,AccessibleNode:W.k,AmbientLightSensor:W.k,Animation:W.k,ApplicationCache:W.k,DOMApplicationCache:W.k,OfflineResourceList:W.k,BackgroundFetchRegistration:W.k,BatteryManager:W.k,BroadcastChannel:W.k,CanvasCaptureMediaStreamTrack:W.k,DedicatedWorkerGlobalScope:W.k,EventSource:W.k,FileReader:W.k,FontFaceSet:W.k,Gyroscope:W.k,XMLHttpRequest:W.k,XMLHttpRequestEventTarget:W.k,XMLHttpRequestUpload:W.k,LinearAccelerationSensor:W.k,Magnetometer:W.k,MediaDevices:W.k,MediaKeySession:W.k,MediaQueryList:W.k,MediaRecorder:W.k,MediaSource:W.k,MediaStream:W.k,MediaStreamTrack:W.k,MIDIAccess:W.k,MIDIInput:W.k,MIDIOutput:W.k,MIDIPort:W.k,NetworkInformation:W.k,Notification:W.k,OffscreenCanvas:W.k,OrientationSensor:W.k,PaymentRequest:W.k,Performance:W.k,PermissionStatus:W.k,PresentationAvailability:W.k,PresentationConnection:W.k,PresentationConnectionList:W.k,PresentationRequest:W.k,RelativeOrientationSensor:W.k,RemotePlayback:W.k,RTCDataChannel:W.k,DataChannel:W.k,RTCDTMFSender:W.k,RTCPeerConnection:W.k,webkitRTCPeerConnection:W.k,mozRTCPeerConnection:W.k,ScreenOrientation:W.k,Sensor:W.k,ServiceWorker:W.k,ServiceWorkerContainer:W.k,ServiceWorkerGlobalScope:W.k,ServiceWorkerRegistration:W.k,SharedWorker:W.k,SharedWorkerGlobalScope:W.k,SpeechRecognition:W.k,SpeechSynthesis:W.k,SpeechSynthesisUtterance:W.k,VR:W.k,VRDevice:W.k,VRDisplay:W.k,VRSession:W.k,VisualViewport:W.k,WebSocket:W.k,Worker:W.k,WorkerGlobalScope:W.k,WorkerPerformance:W.k,BluetoothDevice:W.k,BluetoothRemoteGATTCharacteristic:W.k,Clipboard:W.k,MojoInterfaceInterceptor:W.k,USB:W.k,IDBDatabase:W.k,IDBOpenDBRequest:W.k,IDBVersionChangeRequest:W.k,IDBRequest:W.k,IDBTransaction:W.k,AnalyserNode:W.k,RealtimeAnalyserNode:W.k,AudioBufferSourceNode:W.k,AudioDestinationNode:W.k,AudioNode:W.k,AudioScheduledSourceNode:W.k,AudioWorkletNode:W.k,BiquadFilterNode:W.k,ChannelMergerNode:W.k,AudioChannelMerger:W.k,ChannelSplitterNode:W.k,AudioChannelSplitter:W.k,ConstantSourceNode:W.k,ConvolverNode:W.k,DelayNode:W.k,DynamicsCompressorNode:W.k,GainNode:W.k,AudioGainNode:W.k,IIRFilterNode:W.k,MediaElementAudioSourceNode:W.k,MediaStreamAudioDestinationNode:W.k,MediaStreamAudioSourceNode:W.k,OscillatorNode:W.k,Oscillator:W.k,PannerNode:W.k,AudioPannerNode:W.k,webkitAudioPannerNode:W.k,ScriptProcessorNode:W.k,JavaScriptAudioNode:W.k,StereoPannerNode:W.k,WaveShaperNode:W.k,EventTarget:W.k,File:W.aD,FileList:W.cA,FileWriter:W.fX,HTMLFormElement:W.h0,Gamepad:W.aP,History:W.h4,HTMLCollection:W.c4,HTMLFormControlsCollection:W.c4,HTMLOptionsCollection:W.c4,ImageData:W.bn,HTMLImageElement:W.cD,HTMLInputElement:W.cE,KeyboardEvent:W.b8,Location:W.hi,MediaList:W.hB,MessagePort:W.cJ,MIDIInputMap:W.hC,MIDIOutputMap:W.hE,MimeType:W.aQ,MimeTypeArray:W.hG,PointerEvent:W.ah,MouseEvent:W.ah,DragEvent:W.ah,Document:W.I,DocumentFragment:W.I,HTMLDocument:W.I,ShadowRoot:W.I,XMLDocument:W.I,Attr:W.I,DocumentType:W.I,Node:W.I,NodeList:W.cO,RadioNodeList:W.cO,Plugin:W.aR,PluginArray:W.hT,RTCStatsReport:W.i0,HTMLSelectElement:W.i3,SourceBuffer:W.aS,SourceBufferList:W.ic,SpeechGrammar:W.aT,SpeechGrammarList:W.id,SpeechRecognitionResult:W.aU,Storage:W.ii,CSSStyleSheet:W.aH,StyleSheet:W.aH,HTMLTableCellElement:W.bt,HTMLTableDataCellElement:W.bt,HTMLTableHeaderCellElement:W.bt,TextTrack:W.aV,TextTrackCue:W.aI,VTTCue:W.aI,TextTrackCueList:W.ir,TextTrackList:W.is,TimeRanges:W.iy,Touch:W.aX,TouchEvent:W.aY,TouchList:W.iB,TrackDefaultList:W.iC,CompositionEvent:W.bQ,FocusEvent:W.bQ,TextEvent:W.bQ,UIEvent:W.bQ,URL:W.iX,VideoTrackList:W.jc,WheelEvent:W.bh,Window:W.d1,DOMWindow:W.d1,CSSRuleList:W.jm,ClientRect:W.ep,DOMRect:W.ep,GamepadList:W.jA,NamedNodeMap:W.eG,MozNamedAttrMap:W.eG,SpeechRecognitionResultList:W.jM,StyleSheetList:W.jQ,SVGLength:P.b9,SVGLengthList:P.hb,SVGNumber:P.bc,SVGNumberList:P.hP,SVGPointList:P.hV,SVGStringList:P.ip,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGScriptElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGTransform:P.bf,SVGTransformList:P.iD,AudioBuffer:P.fn,AudioParamMap:P.fo,AudioTrackList:P.fq,AudioContext:P.bX,webkitAudioContext:P.bX,BaseAudioContext:P.bX,OfflineAudioContext:P.hQ,WebGLBuffer:P.dq,WebGLFramebuffer:P.dF,WebGLProgram:P.e_,WebGLRenderbuffer:P.e1,WebGL2RenderingContext:P.ca,WebGLShader:P.e3,WebGLTexture:P.e8,WebGLUniformLocation:P.ef,SQLResultSetRowList:P.ie})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dU.$nativeSuperclassTag="ArrayBufferView"
H.d4.$nativeSuperclassTag="ArrayBufferView"
H.d5.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.d6.$nativeSuperclassTag="ArrayBufferView"
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.dV.$nativeSuperclassTag="ArrayBufferView"
W.d8.$nativeSuperclassTag="EventTarget"
W.d9.$nativeSuperclassTag="EventTarget"
W.da.$nativeSuperclassTag="EventTarget"
W.db.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.mw,[])
else K.mw([])})})()
//# sourceMappingURL=test.dart.js.map
