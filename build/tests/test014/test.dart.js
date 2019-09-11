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
a[c]=function(){a[c]=function(){H.qf(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lW"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lW"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lW(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={lA:function lA(){},
kO:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
hm:function(){return new P.ce("No element")},
od:function(){return new P.ce("Too many elements")},
oc:function(){return new P.ce("Too few elements")},
ee:function(a,b,c,d,e){H.l(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.m,args:[e,e]})
if(c-b<=32)H.oH(a,b,c,d,e)
else H.oG(a,b,c,d,e)},
oH:function(a,b,c,d,e){var u,t,s,r,q
H.l(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.m,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.e(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.e(a,r)
r=J.b4(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.e(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
oG:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.l(a2,"$ib",[a6],"$ab")
H.n(a5,{func:1,ret:P.m,args:[a6,a6]})
u=C.e.ad(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.e.ad(a3+a4,2)
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
if(J.b4(a5.$2(n,m),0)){i=m
m=n
n=i}if(J.b4(a5.$2(k,j),0)){i=j
j=k
k=i}if(J.b4(a5.$2(n,l),0)){i=l
l=n
n=i}if(J.b4(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.b4(a5.$2(n,k),0)){i=k
k=n
n=i}if(J.b4(a5.$2(l,k),0)){i=k
k=l
l=i}if(J.b4(a5.$2(m,j),0)){i=j
j=m
m=i}if(J.b4(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.b4(a5.$2(k,j),0)){i=j
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
if(J.X(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.e(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.S()
if(d<0){if(f!==h){if(h>=a2.length)return H.e(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.au()
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
if(typeof a0!=="number")return a0.S()
if(a0<0){if(f!==h){if(h>=a2.length)return H.e(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else{a1=a5.$2(e,k)
if(typeof a1!=="number")return a1.au()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.au()
if(d>0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.S()
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
if(!J.X(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.e(a2,g)
if(!J.X(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.e(a2,f)
e=a2[f]
if(a5.$2(e,m)===0){if(f!==h){if(h>=a2.length)return H.e(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else if(a5.$2(e,k)===0)for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
if(a5.$2(a2[g],k)===0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.S()
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
u:function u(a){this.a=a},
h1:function h1(){},
c6:function c6(){},
cM:function cM(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hC:function hC(a,b,c){this.a=a
this.b=b
this.$ti=c},
hD:function hD(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hE:function hE(a,b,c){this.a=a
this.b=b
this.$ti=c},
da:function da(a,b,c){this.a=a
this.b=b
this.$ti=c},
jD:function jD(a,b,c){this.a=a
this.b=b
this.$ti=c},
c4:function c4(){},
d8:function d8(){},
eo:function eo(){},
o4:function(){throw H.c(P.J("Cannot modify unmodifiable Map"))},
cv:function(a){var u,t=H.K(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
pY:function(a){return v.types[H.a6(a)]},
q4:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.T(a).$iM},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.at(a)
if(typeof u!=="string")throw H.c(H.as(a))
return u},
cV:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
oy:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.e(p,3)
u=H.K(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.aj(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.G(s,q)|32)>t)return}return parseInt(a,b)},
ca:function(a){return H.op(a)+H.lS(H.bW(a),0,null)},
op:function(a){var u,t,s,r,q,p,o,n=J.T(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ibR){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cv(t.length>1&&C.b.G(t,0)===36?C.b.af(t,1):t)},
oq:function(){if(!!self.location)return self.location.href
return},
mv:function(a){var u,t,s,r,q
H.kU(a)
u=J.aG(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
oz:function(a){var u,t,s,r=H.d([],[P.m])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.as(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.aV(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.as(s))}return H.mv(r)},
mw:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.as(s))
if(s<0)throw H.c(H.as(s))
if(s>65535)return H.oz(a)}return H.mv(a)},
oA:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
cb:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aV(u,10))>>>0,56320|u&1023)}}throw H.c(P.aj(a,0,1114111,null,null))},
c9:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ox:function(a){var u=H.c9(a).getFullYear()+0
return u},
ov:function(a){var u=H.c9(a).getMonth()+1
return u},
or:function(a){var u=H.c9(a).getDate()+0
return u},
os:function(a){var u=H.c9(a).getHours()+0
return u},
ou:function(a){var u=H.c9(a).getMinutes()+0
return u},
ow:function(a){var u=H.c9(a).getSeconds()+0
return u},
ot:function(a){var u=H.c9(a).getMilliseconds()+0
return u},
F:function(a){throw H.c(H.as(a))},
e:function(a,b){if(a==null)J.aG(a)
throw H.c(H.cp(a,b))},
cp:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aS(!0,b,s,null)
u=H.a6(J.aG(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.a1(b,a,s,null,u)
return P.e8(b,s)},
pS:function(a,b,c){var u="Invalid value"
if(a>c)return new P.cc(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.cc(a,c,!0,b,"end",u)
return new P.aS(!0,b,"end",null)},
as:function(a){return new P.aS(!0,a,null,null)},
pO:function(a){if(typeof a!=="number")throw H.c(H.as(a))
return a},
c:function(a){var u
if(a==null)a=new P.e4()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.nt})
u.name=""}else u.toString=H.nt
return u},
nt:function(){return J.at(this.dartException)},
B:function(a){throw H.c(a)},
v:function(a){throw H.c(P.bn(a))},
bi:function(a){var u,t,s,r,q,p
a=H.nr(a.replace(String({}),'$receiver$'))
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
mG:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
mp:function(a,b){return new H.i5(a,b==null?null:b.method)},
lB:function(a,b){var u=b==null,t=u?null:b.method
return new H.hp(a,t,u?null:b.receiver)},
al:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.ln(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.aV(t,16)&8191)===10)switch(s){case 438:return f.$1(H.lB(H.j(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.mp(H.j(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.nx()
q=$.ny()
p=$.nz()
o=$.nA()
n=$.nD()
m=$.nE()
l=$.nC()
$.nB()
k=$.nG()
j=$.nF()
i=r.am(u)
if(i!=null)return f.$1(H.lB(H.K(u),i))
else{i=q.am(u)
if(i!=null){i.method="call"
return f.$1(H.lB(H.K(u),i))}else{i=p.am(u)
if(i==null){i=o.am(u)
if(i==null){i=n.am(u)
if(i==null){i=m.am(u)
if(i==null){i=l.am(u)
if(i==null){i=o.am(u)
if(i==null){i=k.am(u)
if(i==null){i=j.am(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.mp(H.K(u),i))}}return f.$1(new H.jd(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.eg()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aS(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.eg()
return a},
ct:function(a){var u
if(a==null)return new H.f4(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f4(a)},
pW:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
q3:function(a,b,c,d,e,f){H.f(a,"$ibH")
switch(H.a6(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.E("Unsupported number of arguments for wrapped closure"))},
co:function(a,b){var u
H.a6(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.q3)
a.$identity=u
return u},
o3:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.iE().constructor.prototype):Object.create(new H.cy(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b5
if(typeof t!=="number")return t.p()
$.b5=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.me(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.pY,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.md:H.lr
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.me(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
o0:function(a,b,c,d){var u=H.lr
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
me:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.o2(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.o0(t,!r,u,b)
if(t===0){r=$.b5
if(typeof r!=="number")return r.p()
$.b5=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cz
return new Function(r+H.j(q==null?$.cz=H.fJ("self"):q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b5
if(typeof r!=="number")return r.p()
$.b5=r+1
o+=r
r="return function("+o+"){return this."
q=$.cz
return new Function(r+H.j(q==null?$.cz=H.fJ("self"):q)+"."+H.j(u)+"("+o+");}")()},
o1:function(a,b,c,d){var u=H.lr,t=H.md
switch(b?-1:a){case 0:throw H.c(H.oE("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
o2:function(a,b){var u,t,s,r,q,p,o,n=$.cz
if(n==null)n=$.cz=H.fJ("self")
u=$.mc
if(u==null)u=$.mc=H.fJ("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.o1(s,!q,t,b)
if(s===1){n="return function(){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+");"
u=$.b5
if(typeof u!=="number")return u.p()
$.b5=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+", "+o+");"
u=$.b5
if(typeof u!=="number")return u.p()
$.b5=u+1
return new Function(n+u+"}")()},
lW:function(a,b,c,d,e,f,g){return H.o3(a,b,H.a6(c),d,!!e,!!f,g)},
lr:function(a){return a.a},
md:function(a){return a.c},
fJ:function(a){var u,t,s,r=new H.cy("self","target","receiver","name"),q=J.ly(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
G:function(a){if(a==null)H.pK("boolean expression must not be null")
return a},
K:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b2(a,"String"))},
pT:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b2(a,"double"))},
nn:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b2(a,"num"))},
lT:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b2(a,"bool"))},
a6:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b2(a,"int"))},
np:function(a,b){throw H.c(H.b2(a,H.cv(H.K(b).substring(2))))},
qa:function(a,b){throw H.c(H.o_(a,H.cv(H.K(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.T(a)[b])return a
H.np(a,b)},
w:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.T(a)[b]
else u=!0
if(u)return a
H.qa(a,b)},
kU:function(a){if(a==null)return a
if(!!J.T(a).$ib)return a
throw H.c(H.b2(a,"List<dynamic>"))},
nl:function(a,b){var u
if(a==null)return a
u=J.T(a)
if(!!u.$ib)return a
if(u[b])return a
H.np(a,b)},
nf:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a6(u)]
else return a.$S()}return},
ft:function(a,b){var u
if(typeof a=="function")return!0
u=H.nf(J.T(a))
if(u==null)return!1
return H.n0(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lP)return a
$.lP=!0
try{if(H.ft(a,b))return a
u=H.lh(b)
t=H.b2(a,u)
throw H.c(t)}finally{$.lP=!1}},
lY:function(a,b){if(a!=null&&!H.lV(a,b))H.B(H.b2(a,H.lh(b)))
return a},
b2:function(a,b){return new H.j2("TypeError: "+P.dL(a)+": type '"+H.n6(a)+"' is not a subtype of type '"+b+"'")},
o_:function(a,b){return new H.fK("CastError: "+P.dL(a)+": type '"+H.n6(a)+"' is not a subtype of type '"+b+"'")},
n6:function(a){var u,t=J.T(a)
if(!!t.$icC){u=H.nf(t)
if(u!=null)return H.lh(u)
return"Closure"}return H.ca(a)},
pK:function(a){throw H.c(new H.jE(a))},
qf:function(a){throw H.c(new P.fU(H.K(a)))},
oE:function(a){return new H.ip(a)},
ni:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bW:function(a){if(a==null)return
return a.$ti},
qY:function(a,b,c){return H.cu(a["$a"+H.j(c)],H.bW(b))},
bV:function(a,b,c,d){var u
H.K(c)
H.a6(d)
u=H.cu(a["$a"+H.j(c)],H.bW(b))
return u==null?null:u[d]},
ao:function(a,b,c){var u
H.K(b)
H.a6(c)
u=H.cu(a["$a"+H.j(b)],H.bW(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.a6(b)
u=H.bW(a)
return u==null?null:u[b]},
lh:function(a){return H.bU(a,null)},
bU:function(a,b){var u,t
H.l(b,"$ib",[P.h],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cv(a[0].name)+H.lS(a,1,b)
if(typeof a=="function")return H.cv(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a6(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.j(b[t])}if('func' in a)return H.pj(a,b)
if('futureOr' in a)return"FutureOr<"+H.bU("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
pj:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.h]
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
if(m!=null&&m!==P.Q)p+=" extends "+H.bU(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bU(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bU(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bU(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.pV(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.K(b[h])
j=j+i+H.bU(e[d],a0)+(" "+H.j(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
lS:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.h],"$ab")
if(a==null)return""
u=new P.ak("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bU(p,c)}return"<"+u.i(0)+">"},
cu:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lU:function(a,b,c,d){var u,t
H.K(b)
H.kU(c)
H.K(d)
if(a==null)return!1
u=H.bW(a)
t=J.T(a)
if(t[b]==null)return!1
return H.n9(H.cu(t[d],u),null,c,null)},
l:function(a,b,c,d){H.K(b)
H.kU(c)
H.K(d)
if(a==null)return a
if(H.lU(a,b,c,d))return a
throw H.c(H.b2(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cv(b.substring(2))+H.lS(c,0,null),v.mangledGlobalNames)))},
n9:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aR(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aR(a[t],b,c[t],d))return!1
return!0},
qW:function(a,b,c){return a.apply(b,H.cu(J.T(b)["$a"+H.j(c)],H.bW(b)))},
nk:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="Q"||a.name==="N"||a===-1||a===-2||H.nk(u)}return!1},
lV:function(a,b){var u,t
if(a==null)return b==null||b.name==="Q"||b.name==="N"||b===-1||b===-2||H.nk(b)
if(b==null||b===-1||b.name==="Q"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lV(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ft(a,b)}u=J.T(a).constructor
t=H.bW(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aR(u,null,b,null)},
D:function(a,b){if(a!=null&&!H.lV(a,b))throw H.c(H.b2(a,H.lh(b)))
return a},
aR:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="Q"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="Q"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aR(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="N")return!0
if('func' in c)return H.n0(a,b,c,d)
if('func' in a)return c.name==="bH"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aR("type" in a?a.type:l,b,s,d)
else if(H.aR(a,b,s,d))return!0
else{if(!('$i'+"cI" in t.prototype))return!1
r=t.prototype["$a"+"cI"]
q=H.cu(r,u?a.slice(1):l)
return H.aR(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.n9(H.cu(m,u),b,p,d)},
n0:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aR(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aR(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aR(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aR(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.q8(h,b,g,d)},
q8:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aR(c[s],d,a[s],b))return!1}return!0},
qX:function(a,b,c){Object.defineProperty(a,H.K(b),{value:c,enumerable:false,writable:true,configurable:true})},
q6:function(a){var u,t,s,r,q=H.K($.nj.$1(a)),p=$.kN[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kS[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.K($.n8.$2(a,q))
if(q!=null){p=$.kN[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kS[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.lg(u)
$.kN[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kS[q]=u
return u}if(s==="-"){r=H.lg(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.no(a,u)
if(s==="*")throw H.c(P.jc(q))
if(v.leafTags[q]===true){r=H.lg(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.no(a,u)},
no:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.m_(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
lg:function(a){return J.m_(a,!1,null,!!a.$iM)},
q7:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.lg(u)
else return J.m_(u,c,null,null)},
q1:function(){if(!0===$.lZ)return
$.lZ=!0
H.q2()},
q2:function(){var u,t,s,r,q,p,o,n
$.kN=Object.create(null)
$.kS=Object.create(null)
H.q0()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.nq.$1(q)
if(p!=null){o=H.q7(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
q0:function(){var u,t,s,r,q,p,o=C.G()
o=H.cn(C.H,H.cn(C.I,H.cn(C.v,H.cn(C.v,H.cn(C.J,H.cn(C.K,H.cn(C.L(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.nj=new H.kP(r)
$.n8=new H.kQ(q)
$.nq=new H.kR(p)},
cn:function(a,b){return a(b)||b},
of:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a8("Illegal RegExp pattern ("+String(r)+")",a,null))},
qd:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
pU:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nr:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
m2:function(a,b,c){var u=H.qe(a,b,c)
return u},
qe:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nr(b),'g'),H.pU(c))},
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
i5:function i5(a,b){this.a=a
this.b=b},
hp:function hp(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a){this.a=a},
ln:function ln(a){this.a=a},
f4:function f4(a){this.a=a
this.b=null},
cC:function cC(){},
iO:function iO(){},
iE:function iE(){},
cy:function cy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j2:function j2(a){this.a=a},
fK:function fK(a){this.a=a},
ip:function ip(a){this.a=a},
jE:function jE(a){this.a=a},
a5:function a5(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ht:function ht(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hu:function hu(a,b){this.a=a
this.$ti=b},
hv:function hv(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
ho:function ho(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cl:function(a){return a},
oo:function(a){return new Int8Array(a)},
bl:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cp(b,a))},
ph:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.pS(a,b,c))
return b},
cQ:function cQ(){},
bM:function bM(){},
e0:function e0(){},
cR:function cR(){},
e1:function e1(){},
hY:function hY(){},
hZ:function hZ(){},
i_:function i_(){},
i0:function i0(){},
i1:function i1(){},
e2:function e2(){},
cS:function cS(){},
df:function df(){},
dg:function dg(){},
dh:function dh(){},
di:function di(){},
pV:function(a){return J.mk(a?Object.keys(a):[],null)},
q9:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
m_:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fv:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lZ==null){H.q1()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.jc("Return interceptor for "+H.j(u(a,q))))}s=a.constructor
r=s==null?null:s[$.m4()]
if(r!=null)return r
r=H.q6(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.m4(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
oe:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.lq(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.aj(a,0,4294967295,"length",null))
return J.mk(new Array(a),b)},
mk:function(a,b){return J.ly(H.d(a,[b]))},
ly:function(a){H.kU(a)
a.fixed$length=Array
return a},
T:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dO.prototype
return J.dN.prototype}if(typeof a=="string")return J.bq.prototype
if(a==null)return J.dP.prototype
if(typeof a=="boolean")return J.hn.prototype
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.Q)return a
return J.fv(a)},
pX:function(a){if(typeof a=="number")return J.bL.prototype
if(typeof a=="string")return J.bq.prototype
if(a==null)return a
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.Q)return a
return J.fv(a)},
cr:function(a){if(typeof a=="string")return J.bq.prototype
if(a==null)return a
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.Q)return a
return J.fv(a)},
fu:function(a){if(a==null)return a
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.Q)return a
return J.fv(a)},
ng:function(a){if(typeof a=="number")return J.bL.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bR.prototype
return a},
nh:function(a){if(typeof a=="number")return J.bL.prototype
if(typeof a=="string")return J.bq.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bR.prototype
return a},
dt:function(a){if(typeof a=="string")return J.bq.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bR.prototype
return a},
cs:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.Q)return a
return J.fv(a)},
nP:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pX(a).p(a,b)},
X:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.T(a).w(a,b)},
b4:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.ng(a).au(a,b)},
m6:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nh(a).A(a,b)},
nQ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.ng(a).u(a,b)},
dw:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.q4(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cr(a).j(a,b)},
lo:function(a,b,c){return J.fu(a).k(a,b,c)},
nR:function(a,b){return J.dt(a).G(a,b)},
nS:function(a,b,c){return J.cs(a).hM(a,b,c)},
nT:function(a,b,c,d){return J.cs(a).ii(a,b,c,d)},
nU:function(a,b){return J.dt(a).a0(a,b)},
lp:function(a,b){return J.nh(a).ix(a,b)},
fx:function(a,b){return J.fu(a).L(a,b)},
nV:function(a,b,c,d){return J.cs(a).iL(a,b,c,d)},
m7:function(a,b){return J.fu(a).I(a,b)},
nW:function(a){return J.cs(a).git(a)},
m8:function(a){return J.cs(a).gcl(a)},
dx:function(a){return J.T(a).gJ(a)},
bA:function(a){return J.fu(a).gU(a)},
aG:function(a){return J.cr(a).gn(a)},
m9:function(a){return J.fu(a).jg(a)},
nX:function(a,b){return J.cs(a).jj(a,b)},
nY:function(a,b,c){return J.dt(a).C(a,b,c)},
nZ:function(a){return J.dt(a).jt(a)},
at:function(a){return J.T(a).i(a)},
a:function a(){},
hn:function hn(){},
dP:function dP(){},
dQ:function dQ(){},
i9:function i9(){},
bR:function bR(){},
br:function br(){},
aU:function aU(a){this.$ti=a},
lz:function lz(a){this.$ti=a},
au:function au(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bL:function bL(){},
dO:function dO(){},
dN:function dN(){},
bq:function bq(){}},P={
oU:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pL()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.co(new P.jG(s),1)).observe(u,{childList:true})
return new P.jF(s,u,t)}else if(self.setImmediate!=null)return P.pM()
return P.pN()},
oV:function(a){self.scheduleImmediate(H.co(new P.jH(H.n(a,{func:1,ret:-1})),0))},
oW:function(a){self.setImmediate(H.co(new P.jI(H.n(a,{func:1,ret:-1})),0))},
oX:function(a){P.lF(C.o,H.n(a,{func:1,ret:-1}))},
lF:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.e.ad(a.a,1000)
return P.p2(u<0?0:u,b)},
mF:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.bg]})
u=C.e.ad(a.a,1000)
return P.p3(u<0?0:u,b)},
p2:function(a,b){var u=new P.fa()
u.f5(a,b)
return u},
p3:function(a,b){var u=new P.fa()
u.f6(a,b)
return u},
oY:function(a,b){var u,t,s
b.a=1
try{a.eA(new P.jS(b),new P.jT(b),null)}catch(s){u=H.al(s)
t=H.ct(s)
P.qb(new P.jU(b,u,t))}},
mQ:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaQ")
if(u>=4){t=b.c5()
b.a=a.a
b.c=a.c
P.dd(b,t)}else{t=H.f(b.c,"$ibk")
b.a=2
b.c=a
a.dE(t)}},
dd:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$iap")
g=g.b
r=s.a
q=s.b
g.toString
P.kE(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
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
if(m){H.f(o,"$iap")
g=g.b
r=o.a
q=o.b
g.toString
P.kE(i,i,g,r,q)
return}l=$.a3
if(l!=n)$.a3=n
else l=i
g=b.c
if(g===8)new P.jY(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jX(u,b,o).$0()}else if((g&2)!==0)new P.jW(h,u,b).$0()
if(l!=null)$.a3=l
g=u.b
if(!!J.T(g).$icI){if(g.a>=4){k=H.f(q.c,"$ibk")
q.c=null
b=q.bq(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.mQ(g,q)
return}}j=b.b
k=H.f(j.c,"$ibk")
j.c=null
b=j.bq(k)
g=u.a
r=u.b
if(!g){H.D(r,H.r(j,0))
j.a=4
j.c=r}else{H.f(r,"$iap")
j.a=8
j.c=r}h.a=j
g=j}},
pG:function(a,b){if(H.ft(a,{func:1,args:[P.Q,P.ay]}))return H.n(a,{func:1,ret:null,args:[P.Q,P.ay]})
if(H.ft(a,{func:1,args:[P.Q]}))return H.n(a,{func:1,ret:null,args:[P.Q]})
throw H.c(P.lq(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pF:function(){var u,t
for(;u=$.cm,u!=null;){$.ds=null
t=u.b
$.cm=t
if(t==null)$.dr=null
u.a.$0()}},
pJ:function(){$.lQ=!0
try{P.pF()}finally{$.ds=null
$.lQ=!1
if($.cm!=null)$.m5().$1(P.na())}},
n5:function(a){var u=new P.ex(H.n(a,{func:1,ret:-1}))
if($.cm==null){$.cm=$.dr=u
if(!$.lQ)$.m5().$1(P.na())}else $.dr=$.dr.b=u},
pI:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cm
if(u==null){P.n5(a)
$.ds=$.dr
return}t=new P.ex(a)
s=$.ds
if(s==null){t.b=u
$.cm=$.ds=t}else{t.b=s.b
$.ds=s.b=t
if(t.b==null)$.dr=t}},
qb:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a3
if(C.f===u){P.kG(t,t,C.f,a)
return}u.toString
P.kG(t,t,u,H.n(u.cf(a),s))},
mE:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a3
if(u===C.f){u.toString
return P.lF(a,b)}return P.lF(a,H.n(u.cf(b),t))},
oK:function(a,b){var u,t,s={func:1,ret:-1,args:[P.bg]}
H.n(b,s)
u=$.a3
if(u===C.f){u.toString
return P.mF(a,b)}t=u.dV(b,P.bg)
$.a3.toString
return P.mF(a,H.n(t,s))},
kE:function(a,b,c,d,e){var u={}
u.a=d
P.pI(new P.kF(u,e))},
n1:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a3
if(t===c)return d.$0()
$.a3=c
u=t
try{t=d.$0()
return t}finally{$.a3=u}},
n2:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.D(e,g)
t=$.a3
if(t===c)return d.$1(e)
$.a3=c
u=t
try{t=d.$1(e)
return t}finally{$.a3=u}},
pH:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.D(e,h)
H.D(f,i)
t=$.a3
if(t===c)return d.$2(e,f)
$.a3=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a3=u}},
kG:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.cf(d):c.iu(d,-1)
P.n5(d)},
jG:function jG(a){this.a=a},
jF:function jF(a,b,c){this.a=a
this.b=b
this.c=c},
jH:function jH(a){this.a=a},
jI:function jI(a){this.a=a},
fa:function fa(){this.c=0},
km:function km(a,b){this.a=a
this.b=b},
kl:function kl(a,b,c,d){var _=this
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
aQ:function aQ(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jR:function jR(a,b){this.a=a
this.b=b},
jV:function jV(a,b){this.a=a
this.b=b},
jS:function jS(a){this.a=a},
jT:function jT(a){this.a=a},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
jY:function jY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jZ:function jZ(a){this.a=a},
jX:function jX(a,b,c){this.a=a
this.b=b
this.c=c},
jW:function jW(a,b,c){this.a=a
this.b=b
this.c=c},
ex:function ex(a){this.a=a
this.b=null},
iH:function iH(){},
iJ:function iJ(a,b){this.a=a
this.b=b},
iK:function iK(a,b){this.a=a
this.b=b},
cZ:function cZ(){},
iI:function iI(){},
bg:function bg(){},
ap:function ap(a,b){this.a=a
this.b=b},
kv:function kv(){},
kF:function kF(a,b){this.a=a
this.b=b},
k4:function k4(){},
k6:function k6(a,b,c){this.a=a
this.b=b
this.c=c},
k5:function k5(a,b){this.a=a
this.b=b},
k7:function k7(a,b,c){this.a=a
this.b=b
this.c=c},
oh:function(a,b){return new H.a5([a,b])},
lC:function(a,b){return new H.a5([a,b])},
oj:function(a){return H.pW(a,new H.a5([null,null]))},
dT:function(a){return new P.k2([a])},
lM:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
p1:function(a,b,c){var u=new P.eM(a,b,[c])
u.c=a.e
return u},
ob:function(a,b,c){var u,t
if(P.lR(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.h])
C.a.h($.aA,a)
try{P.pk(a,u)}finally{if(0>=$.aA.length)return H.e($.aA,-1)
$.aA.pop()}t=P.mC(b,H.nl(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
lx:function(a,b,c){var u,t
if(P.lR(a))return b+"..."+c
u=new P.ak(b)
C.a.h($.aA,a)
try{t=u
t.a=P.mC(t.a,a,", ")}finally{if(0>=$.aA.length)return H.e($.aA,-1)
$.aA.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lR:function(a){var u,t
for(u=$.aA.length,t=0;t<u;++t)if(a===$.aA[t])return!0
return!1},
pk:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.h],"$ab")
u=a.gU(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.D())return
r=H.j(u.gK(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.D()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gK(u);++s
if(!u.D()){if(s<=4){C.a.h(b,H.j(o))
return}q=H.j(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gK(u);++s
for(;u.D();o=n,n=m){m=u.gK(u);++s
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
oi:function(a,b,c){var u=P.oh(b,c)
a.I(0,new P.hw(u,b,c))
return u},
ml:function(a,b){var u,t,s=P.dT(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t)s.h(0,H.D(a[t],b))
return s},
lD:function(a){var u,t={}
if(P.lR(a))return"{...}"
u=new P.ak("")
try{C.a.h($.aA,a)
u.a+="{"
t.a=!0
J.m7(a,new P.hA(t,u))
u.a+="}"}finally{if(0>=$.aA.length)return H.e($.aA,-1)
$.aA.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
k2:function k2(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cj:function cj(a){this.a=a
this.c=this.b=null},
eM:function eM(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hw:function hw(a,b,c){this.a=a
this.b=b
this.c=c},
hx:function hx(){},
z:function z(){},
hz:function hz(){},
hA:function hA(a,b){this.a=a
this.b=b},
ag:function ag(){},
kn:function kn(){},
hB:function hB(){},
ep:function ep(a,b){this.a=a
this.$ti=b},
k9:function k9(){},
eN:function eN(){},
fg:function fg(){},
oO:function(a,b,c,d){H.l(b,"$ib",[P.m],"$ab")
if(b instanceof Uint8Array)return P.oP(!1,b,c,d)
return},
oP:function(a,b,c,d){var u,t,s=$.nH()
if(s==null)return
u=0===c
if(u&&!0)return P.lI(s,b)
t=b.length
d=P.bv(c,d,t)
if(u&&d===t)return P.lI(s,b)
return P.lI(s,b.subarray(c,d))},
lI:function(a,b){if(P.oR(b))return
return P.oS(a,b)},
oS:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.al(t)}return},
oR:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
oQ:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.al(t)}return},
n4:function(a,b,c){var u,t,s
H.l(a,"$ib",[P.m],"$ab")
for(u=J.cr(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.ao()
if((s&127)!==s)return t-b}return c-b},
mb:function(a,b,c,d,e,f){if(C.e.bk(f,4)!==0)throw H.c(P.a8("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a8("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a8("Invalid base64 padding, more than two '=' characters",a,b))},
fG:function fG(){},
fH:function fH(){},
c2:function c2(){},
bE:function bE(){},
h3:function h3(){},
hj:function hj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hi:function hi(a){this.a=a},
jl:function jl(){},
jn:function jn(){},
kt:function kt(a){this.b=0
this.c=a},
jm:function jm(a){this.a=a},
ks:function ks(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fw:function(a,b,c){var u
H.n(b,{func:1,ret:P.m,args:[P.h]})
u=H.oy(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a8(a,null,null))},
o9:function(a){if(a instanceof H.cC)return a.i(0)
return"Instance of '"+H.ca(a)+"'"},
ok:function(a,b,c){var u,t
H.D(b,c)
u=J.oe(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.k(u,t,b)
return H.l(u,"$ib",[c],"$ab")},
mm:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bA(a);u.D();)C.a.h(s,H.D(u.gK(u),c))
if(b)return s
return H.l(J.ly(s),"$ib",t,"$ab")},
d_:function(a,b,c){var u,t=P.m
H.l(a,"$ii",[t],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.l(a,"$iaU",[t],"$aaU")
u=a.length
c=P.bv(b,c,u)
return H.mw(b>0||c<u?C.a.eN(a,b,c):a)}if(!!J.T(a).$icS)return H.oA(a,b,P.bv(b,c,a.length))
return P.oI(a,b,c)},
oI:function(a,b,c){var u,t,s,r,q=null
H.l(a,"$ii",[P.m],"$ai")
if(b<0)throw H.c(P.aj(b,0,J.aG(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.aj(c,b,J.aG(a),q,q))
t=J.bA(a)
for(s=0;s<b;++s)if(!t.D())throw H.c(P.aj(b,0,s,q,q))
r=[]
if(u)for(;t.D();)r.push(t.gK(t))
else for(s=b;s<c;++s){if(!t.D())throw H.c(P.aj(c,b,s,q,q))
r.push(t.gK(t))}return H.mw(r)},
oC:function(a){return new H.ho(a,H.of(a,!1,!0,!1))},
mC:function(a,b,c){var u=J.bA(b)
if(!u.D())return a
if(c.length===0){do a+=H.j(u.gK(u))
while(u.D())}else{a+=H.j(u.gK(u))
for(;u.D();)a=a+c+H.j(u.gK(u))}return a},
mI:function(){var u=H.oq()
if(u!=null)return P.oN(u)
throw H.c(P.J("'Uri.base' is not supported"))},
fh:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.l(a,"$ib",[P.m],"$ab")
if(c===C.h){u=$.nN().b
if(typeof b!=="string")H.B(H.as(b))
u=u.test(b)}else u=!1
if(u)return b
H.D(b,H.ao(c,"c2",0))
t=c.giK().cm(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.cb(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
o5:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
o6:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dH:function(a){if(a>=10)return""+a
return"0"+a},
mg:function(a,b){return new P.b8(1e6*b+1000*a)},
dL:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.at(a)
if(typeof a==="string")return JSON.stringify(a)
return P.o9(a)},
dz:function(a){return new P.aS(!1,null,null,a)},
lq:function(a,b,c){return new P.aS(!0,a,b,c)},
e8:function(a,b){return new P.cc(null,null,!0,a,b,"Value not in range")},
aj:function(a,b,c,d,e){return new P.cc(b,c,!0,a,d,"Invalid value")},
bv:function(a,b,c){if(0>a||a>c)throw H.c(P.aj(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.aj(b,a,c,"end",null))
return b}return c},
lE:function(a,b){if(typeof a!=="number")return a.S()
if(a<0)throw H.c(P.aj(a,0,null,b,null))},
a1:function(a,b,c,d,e){var u=H.a6(e==null?J.aG(b):e)
return new P.hl(u,!0,a,c,"Index out of range")},
J:function(a){return new P.je(a)},
jc:function(a){return new P.jb(a)},
mB:function(a){return new P.ce(a)},
bn:function(a){return new P.fN(a)},
E:function(a){return new P.eF(a)},
a8:function(a,b,c){return new P.hd(a,b,c)},
ol:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.m]})
u=H.d([],[c])
C.a.sn(u,a)
for(t=0;t<a;++t)C.a.k(u,t,b.$1(t))
return u},
m1:function(a){H.q9(a)},
oN:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.G(a,4)^58)*3|C.b.G(a,0)^100|C.b.G(a,1)^97|C.b.G(a,2)^116|C.b.G(a,3)^97)>>>0
if(u===0)return P.mH(e<e?C.b.C(a,0,e):a,5,f).geG()
else if(u===32)return P.mH(C.b.C(a,5,e),0,f).geG()}t=new Array(8)
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
if(P.n3(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.jz()
if(r>=0)if(P.n3(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.p()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.S()
if(typeof n!=="number")return H.F(n)
if(m<n)n=m
if(typeof o!=="number")return o.S()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.S()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.S()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.aj(a,"..",o)))j=n>o+2&&C.b.aj(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.aj(a,"file",0)){if(q<=0){if(!C.b.aj(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.C(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.aY(a,o,n,"/");++e
n=h}k="file"}else if(C.b.aj(a,"http",0)){if(t&&p+3===o&&C.b.aj(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aY(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.aj(a,"https",0)){if(t&&p+4===o&&C.b.aj(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aY(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.C(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.kc(a,r,q,p,o,n,m,k)}return P.p4(a,0,e,r,q,p,o,n,m,k)},
mK:function(a){var u=P.h
return C.a.iP(H.d(a.split("&"),[u]),P.lC(u,u),new P.jj(C.h),[P.A,P.h,P.h])},
oM:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jg(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.a0(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fw(C.b.C(a,s,t),n,n)
if(typeof p!=="number")return p.au()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.e(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fw(C.b.C(a,s,c),n,n)
if(typeof p!=="number")return p.au()
if(p>255)k.$2(l,s)
if(r>=u)return H.e(j,r)
j[r]=p
return j},
mJ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.jh(a)
t=new P.ji(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.m])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.a0(a,r)
if(n===58){if(r===b){++r
if(C.b.a0(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gay(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.oM(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.e.aV(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
p4:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.pb(a,b,d)
else{if(d===b)P.dn(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.pc(a,u,e-1):""
s=P.p8(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.F(g)
q=r<g?P.pa(P.fw(C.b.C(a,r,g),new P.ko(a,f),n),j):n}else{q=n
s=q
t=""}p=P.p9(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.S()
o=h<i?P.lN(a,h+1,i,n):n
return new P.ck(j,t,s,q,p,o,i<c?P.p7(a,i+1,c):n)},
mU:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dn:function(a,b,c){throw H.c(P.a8(c,a,b))},
pa:function(a,b){if(a!=null&&a===P.mU(b))return
return a},
p8:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.a0(a,b)===91){if(typeof c!=="number")return c.u()
u=c-1
if(C.b.a0(a,u)!==93)P.dn(a,b,"Missing end `]` to match `[` in host")
P.mJ(a,b+1,u)
return C.b.C(a,b,c).toLowerCase()}if(typeof c!=="number")return H.F(c)
t=b
for(;t<c;++t)if(C.b.a0(a,t)===58){P.mJ(a,b,c)
return"["+a+"]"}return P.pe(a,b,c)},
pe:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.F(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.a0(a,u)
if(q===37){p=P.n_(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ak("")
n=C.b.C(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.C(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.z,o)
o=(C.z[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ak("")
if(t<u){s.a+=C.b.C(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.dn(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.a0(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ak("")
n=C.b.C(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mV(q)
u+=l
t=u}}}}if(s==null)return C.b.C(a,b,c)
if(t<c){n=C.b.C(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
pb:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mX(C.b.G(a,b)))P.dn(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.G(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dn(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.C(a,b,c)
return P.p5(t?a.toLowerCase():a)},
p5:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
pc:function(a,b,c){return P.dp(a,b,c,C.W,!1)},
p9:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dp(a,b,c,C.A,!0):C.j.jT(d,new P.kp(),P.h).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a8(u,"/"))u="/"+u
return P.pd(u,e,f)},
pd:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a8(a,"/"))return P.pf(a,!u||c)
return P.pg(a)},
lN:function(a,b,c,d){var u,t={}
H.l(d,"$iA",[P.h,null],"$aA")
if(a!=null){if(d!=null)throw H.c(P.dz("Both query and queryParameters specified"))
return P.dp(a,b,c,C.l,!0)}if(d==null)return
u=new P.ak("")
t.a=""
d.I(0,new P.kq(new P.kr(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
p7:function(a,b,c){return P.dp(a,b,c,C.l,!0)},
n_:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.a0(a,b+1)
t=C.b.a0(a,p)
s=H.kO(u)
r=H.kO(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.e.aV(q,4)
if(p>=8)return H.e(C.n,p)
p=(C.n[p]&1<<(q&15))!==0}else p=!1
if(p)return H.cb(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.C(a,b,b+3).toUpperCase()
return},
mV:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.m])
C.a.k(t,0,37)
C.a.k(t,1,C.b.G(o,a>>>4))
C.a.k(t,2,C.b.G(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.m])
for(q=0;--r,r>=0;s=128){p=C.e.i_(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.G(o,p>>>4))
C.a.k(t,q+2,C.b.G(o,p&15))
q+=3}}return P.d_(t,0,null)},
dp:function(a,b,c,d,e){var u=P.mZ(a,b,c,H.l(d,"$ib",[P.m],"$ab"),e)
return u==null?C.b.C(a,b,c):u},
mZ:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.l(d,"$ib",[P.m],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.S()
if(typeof c!=="number")return H.F(c)
if(!(t<c))break
c$0:{q=C.b.a0(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.n_(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.k,p)
p=(C.k[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dn(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.a0(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mV(q)}}if(r==null)r=new P.ak("")
r.a+=C.b.C(a,s,t)
r.a+=H.j(o)
if(typeof n!=="number")return H.F(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.S()
if(s<c)r.a+=C.b.C(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mY:function(a){if(C.b.a8(a,"."))return!0
return C.b.eh(a,"/.")!==-1},
pg:function(a){var u,t,s,r,q,p,o
if(!P.mY(a))return a
u=H.d([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.X(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
pf:function(a,b){var u,t,s,r,q,p
if(!P.mY(a))return!b?P.mW(a):a
u=H.d([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gay(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gay(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.k(u,0,P.mW(u[0]))}return C.a.m(u,"/")},
mW:function(a){var u,t,s,r=a.length
if(r>=2&&P.mX(J.nR(a,0)))for(u=1;u<r;++u){t=C.b.G(a,u)
if(t===58)return C.b.C(a,0,u)+"%3A"+C.b.af(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.e(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
p6:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.G(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dz("Invalid URL encoding"))}}return u},
lO:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.G(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.C(a,b,c)
else r=new H.u(C.b.C(a,b,c))}else{r=H.d([],[P.m])
for(s=a.length,q=b;q<c;++q){t=C.b.G(a,q)
if(t>127)throw H.c(P.dz("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.dz("Truncated URI"))
C.a.h(r,P.p6(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.l(r,"$ib",[P.m],"$ab")
return new P.jm(!1).cm(r)},
mX:function(a){var u=a|32
return 97<=u&&u<=122},
mH:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.m])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.G(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a8(m,a,t))}}if(s<0&&t>b)throw H.c(P.a8(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.G(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gay(l)
if(r!==44||t!==p+7||!C.b.aj(a,"base64",p+1))throw H.c(P.a8("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.j0(0,a,o,u)
else{n=P.mZ(a,o,u,C.l,!0)
if(n!=null)a=C.b.aY(a,o,u,n)}return new P.jf(a,l,c)},
pi:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.ol(22,new P.kz(),P.S),n=new P.ky(o),m=new P.kA(),l=new P.kB(),k=H.f(n.$2(0,225),"$iS")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(14,225),"$iS")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(15,225),"$iS")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(1,225),"$iS")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(2,235),"$iS")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(3,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(4,229),"$iS")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(5,229),"$iS")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(6,231),"$iS")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(7,231),"$iS")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.f(n.$2(8,8),"$iS"),"]",5)
k=H.f(n.$2(9,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(16,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(17,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(10,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(18,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(19,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(11,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(12,236),"$iS")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.f(n.$2(13,237),"$iS")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.f(n.$2(20,245),"$iS"),"az",21)
k=H.f(n.$2(21,245),"$iS")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
n3:function(a,b,c,d,e){var u,t,s,r,q
H.l(e,"$ib",[P.m],"$ab")
u=$.nO()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.b.G(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.k(e,q>>>5,t)}return d},
R:function R(){},
aB:function aB(a,b){this.a=a
this.b=b},
q:function q(){},
b8:function b8(a){this.a=a},
h_:function h_(){},
h0:function h0(){},
bG:function bG(){},
fA:function fA(){},
e4:function e4(){},
aS:function aS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cc:function cc(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hl:function hl(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
je:function je(a){this.a=a},
jb:function jb(a){this.a=a},
ce:function ce(a){this.a=a},
fN:function fN(a){this.a=a},
i8:function i8(){},
eg:function eg(){},
fU:function fU(a){this.a=a},
eF:function eF(a){this.a=a},
hd:function hd(a,b,c){this.a=a
this.b=b
this.c=c},
bH:function bH(){},
m:function m(){},
i:function i(){},
b9:function b9(){},
b:function b(){},
A:function A(){},
N:function N(){},
ac:function ac(){},
Q:function Q(){},
ay:function ay(){},
h:function h(){},
ak:function ak(a){this.a=a},
jj:function jj(a){this.a=a},
jg:function jg(a){this.a=a},
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
ko:function ko(a,b){this.a=a
this.b=b},
kp:function kp(){},
kr:function kr(a,b){this.a=a
this.b=b},
kq:function kq(a){this.a=a},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
kz:function kz(){},
ky:function ky(a){this.a=a},
kA:function kA(){},
kB:function kB(){},
kc:function kc(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jM:function jM(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
pR:function(a){var u,t=J.T(a)
if(!!t.$ibp){u=t.ge_(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ff(a.data,a.height,a.width)},
pQ:function(a){if(a instanceof P.ff)return{data:a.a,height:a.b,width:a.c}
return a},
bw:function(a){var u,t,s,r,q
if(a==null)return
u=P.lC(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r){q=H.K(t[r])
u.k(0,q,a[q])}return u},
pP:function(a){var u={}
a.I(0,new P.kH(u))
return u},
ke:function ke(){},
kg:function kg(a,b){this.a=a
this.b=b},
ff:function ff(a,b,c){this.a=a
this.b=b
this.c=c},
kH:function kH(a){this.a=a},
kf:function kf(a,b){this.a=a
this.b=b},
h9:function h9(a,b){this.a=a
this.b=b},
ha:function ha(){},
hb:function hb(){},
k1:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
p0:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k3:function k3(){},
an:function an(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bb:function bb(){},
hr:function hr(){},
be:function be(){},
i6:function i6(){},
id:function id(){},
cW:function cW(){},
iL:function iL(){},
p:function p(){},
bh:function bh(){},
j_:function j_(){},
eK:function eK(){},
eL:function eL(){},
eV:function eV(){},
eW:function eW(){},
f6:function f6(){},
f7:function f7(){},
fd:function fd(){},
fe:function fe(){},
S:function S(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(a){this.a=a},
fF:function fF(){},
bZ:function bZ(){},
i7:function i7(){},
ey:function ey(){},
dB:function dB(){},
e7:function e7(){},
cd:function cd(){},
ea:function ea(){},
ei:function ei(){},
en:function en(){},
iD:function iD(){},
f2:function f2(){},
f3:function f3(){}},W={
ma:function(){var u=document.createElement("a")
return u},
ls:function(){var u=document.createElement("canvas")
return u},
o7:function(a,b,c){var u=document.body,t=(u&&C.t).al(u,a,b,c)
t.toString
u=W.H
u=new H.da(new W.ar(t),H.n(new W.h2(),{func:1,ret:P.R,args:[u]}),[u])
return H.f(u.gaO(u),"$iV")},
o8:function(a){H.f(a,"$ik")
return"wheel"},
cF:function(a){var u,t,s,r="element tag unavailable"
try{u=J.cs(a)
t=u.gey(a)
if(typeof t==="string")r=u.gey(a)}catch(s){H.al(s)}return r},
oa:function(a){var u,t=document.createElement("input"),s=H.f(t,"$icL")
try{s.type=a}catch(u){H.al(u)}return s},
k0:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mS:function(a,b,c,d){var u=W.k0(W.k0(W.k0(W.k0(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ab:function(a,b,c,d,e){var u=W.n7(new W.jQ(c),W.o)
if(u!=null&&!0)J.nT(a,b,u,!1)
return new W.jP(a,b,u,!1,[e])},
mR:function(a){var u=W.ma(),t=window.location
u=new W.bT(new W.k8(u,t))
u.eZ(a)
return u},
oZ:function(a,b,c,d){H.f(a,"$iV")
H.K(b)
H.K(c)
H.f(d,"$ibT")
return!0},
p_:function(a,b,c,d){var u,t,s
H.f(a,"$iV")
H.K(b)
H.K(c)
u=H.f(d,"$ibT").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mT:function(){var u=P.h,t=P.ml(C.p,u),s=H.r(C.p,0),r=H.n(new W.kk(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.kj(t,P.dT(u),P.dT(u),P.dT(u),null)
t.f4(null,new H.hE(C.p,r,[s,u]),q,null)
return t},
n7:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a3
if(u===C.f)return a
return u.dV(a,b)},
y:function y(){},
fy:function fy(){},
dy:function dy(){},
fz:function fz(){},
cx:function cx(){},
c_:function c_(){},
bB:function bB(){},
c1:function c1(){},
cB:function cB(){},
bC:function bC(){},
cD:function cD(){},
fQ:function fQ(){},
Y:function Y(){},
cE:function cE(){},
fR:function fR(){},
b6:function b6(){},
b7:function b7(){},
fS:function fS(){},
fT:function fT(){},
fW:function fW(){},
aI:function aI(){},
fX:function fX(){},
dI:function dI(){},
dJ:function dJ(){},
fY:function fY(){},
fZ:function fZ(){},
jK:function jK(a,b){this.a=a
this.b=b},
V:function V(){},
h2:function h2(){},
o:function o(){},
k:function k(){},
aJ:function aJ(){},
cH:function cH(){},
h8:function h8(){},
hc:function hc(){},
aT:function aT(){},
hh:function hh(){},
c5:function c5(){},
bp:function bp(){},
cK:function cK(){},
cL:function cL(){},
ba:function ba(){},
dU:function dU(){},
hR:function hR(){},
cO:function cO(){},
hS:function hS(){},
hT:function hT(a){this.a=a},
hU:function hU(){},
hV:function hV(a){this.a=a},
aV:function aV(){},
hW:function hW(){},
ah:function ah(){},
ar:function ar(a){this.a=a},
H:function H(){},
cT:function cT(){},
aW:function aW(){},
ib:function ib(){},
im:function im(){},
io:function io(a){this.a=a},
iq:function iq(){},
aX:function aX(){},
iB:function iB(){},
aY:function aY(){},
iC:function iC(){},
aZ:function aZ(){},
iF:function iF(){},
iG:function iG(a){this.a=a},
aM:function aM(){},
bf:function bf(){},
eh:function eh(){},
iM:function iM(){},
iN:function iN(){},
d1:function d1(){},
b_:function b_(){},
aN:function aN(){},
iP:function iP(){},
iQ:function iQ(){},
iU:function iU(){},
b0:function b0(){},
b1:function b1(){},
iY:function iY(){},
iZ:function iZ(){},
bP:function bP(){},
jk:function jk(){},
jC:function jC(){},
bj:function bj(){},
db:function db(){},
dc:function dc(){},
jL:function jL(){},
eA:function eA(){},
k_:function k_(){},
eS:function eS(){},
kd:function kd(){},
kh:function kh(){},
jJ:function jJ(){},
jN:function jN(a){this.a=a},
jO:function jO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lL:function lL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jP:function jP(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jQ:function jQ(a){this.a=a},
bT:function bT(a){this.a=a},
I:function I(){},
e3:function e3(a){this.a=a},
i3:function i3(a){this.a=a},
i2:function i2(a,b,c){this.a=a
this.b=b
this.c=c},
f_:function f_(){},
ka:function ka(){},
kb:function kb(){},
kj:function kj(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kk:function kk(){},
ki:function ki(){},
dM:function dM(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aE:function aE(){},
k8:function k8(a,b){this.a=a
this.b=b},
fi:function fi(a){this.a=a},
ku:function ku(a){this.a=a},
ez:function ez(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eT:function eT(){},
eU:function eU(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
dj:function dj(){},
dk:function dk(){},
f0:function f0(){},
f1:function f1(){},
f5:function f5(){},
f8:function f8(){},
f9:function f9(){},
dl:function dl(){},
dm:function dm(){},
fb:function fb(){},
fc:function fc(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){}},O={
lt:function(a){var u=new O.a4([a])
u.bn(a)
return u},
a4:function a4(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cN:function cN(){this.b=this.a=null},
dX:function dX(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hL:function hL(a,b){this.a=a
this.b=b},
hM:function hM(){},
hN:function hN(a,b){this.a=a
this.b=b},
hO:function hO(){},
hP:function hP(a,b){this.a=a
this.b=b},
hQ:function hQ(){},
hF:function hF(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dZ:function dZ(){},
hG:function hG(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
bc:function bc(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hI:function hI(){var _=this
_.e=_.d=_.c=_.b=null},
hJ:function hJ(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hK:function hK(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ec:function ec(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bO:function bO(){}},E={
mj:function(){var u=new E.aq()
u.a=""
u.b=!0
u.seY(0,O.lt(E.aq))
u.y.b_(u.gj1(),u.gj4())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.saa(0,null)
return u},
oD:function(a,b){var u=new E.ii(a)
u.eV(a,b)
return u},
oJ:function(a,b,c,d,e){var u,t,s=J.T(a)
if(!!s.$ic1)return E.mD(a,!0,!0,!0,!1)
u=W.ls()
t=u.style
t.width="100%"
t.height="100%"
s.gcl(a).h(0,u)
return E.mD(u,!0,!0,!0,!1)},
mD:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ej(),j=H.f(C.i.cX(a,"webgl2",P.oj(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$icd")
if(j==null)H.B(P.E("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.oD(j,a)
u=new T.iR(j)
H.a6(j.getParameter(3379))
u.c=H.a6(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.eq(a)
t=new X.hq()
t.c=new X.aD(!1,!1,!1)
t.shG(P.dT(P.m))
u.b=t
t=new X.hX(u)
t.f=0
t.r=V.bu()
t.x=V.bu()
t.ch=t.Q=1
u.c=t
t=new X.hy(u)
t.r=0
t.x=V.bu()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iX(u)
t.f=V.bu()
t.r=V.bu()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfs(H.d([],[[P.cZ,P.Q]]))
t=u.z
s=document
r=W.ah
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ab(s,"contextmenu",H.n(u.gh_(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ab(a,"focus",H.n(u.gh5(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ab(a,"blur",H.n(u.gfU(),o),!1,p))
t=u.z
n=W.ba
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ab(s,"keyup",H.n(u.gh9(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ab(s,"keydown",H.n(u.gh7(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ab(a,"mousedown",H.n(u.ghd(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,"mouseup",H.n(u.ghh(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,l,H.n(u.ghf(),q),!1,r))
n=u.z
m=W.bj;(n&&C.a).h(n,W.ab(a,H.K(W.o8(a)),H.n(u.ghj(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ab(s,l,H.n(u.gh1(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ab(s,"mouseup",H.n(u.gh3(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ab(s,"pointerlockchange",H.n(u.ghl(),o),!1,p))
p=u.z
o=W.b1
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ab(a,"touchstart",H.n(u.ghB(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchend",H.n(u.ghx(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchmove",H.n(u.ghz(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aB(Date.now(),!1)
k.cy=0
k.dG()
return k},
fI:function fI(){},
aq:function aq(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ii:function ii(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ij:function ij(a){this.a=a},
ik:function ik(a){this.a=a},
il:function il(a){this.a=a},
ej:function ej(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iT:function iT(a){this.a=a}},Z={
lK:function(a,b,c){var u
H.l(c,"$ib",[P.m],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cl(c)),35044)
a.bindBuffer(b,null)
return new Z.ev(b,u)},
aP:function(a){return new Z.bS(a)},
ev:function ev(a,b){this.a=a
this.b=b},
dC:function dC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ew:function ew(a){this.a=a},
cA:function cA(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bI:function bI(a,b,c){this.a=a
this.b=b
this.c=c},
bS:function bS(a){this.a=a}},D={
P:function(){var u=new D.c3()
u.sak(null)
u.saT(null)
u.c=null
u.d=0
return u},
fL:function fL(){},
c3:function c3(){var _=this
_.d=_.c=_.b=_.a=null},
h5:function h5(a){this.a=a},
h6:function h6(a){this.a=a},
C:function C(){this.b=null},
bJ:function bJ(a){this.b=null
this.$ti=a},
bK:function bK(a){this.b=null
this.$ti=a},
O:function O(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bF:function bF(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
af:function af(){},
dS:function dS(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
e6:function e6(){},
ef:function ef(){},
nm:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="testCanvas",a5=null,a6=34067,a7="modifiers",a8=V.oF("Test 014"),a9=W.ls()
a9.className="pageLargeCanvas"
a9.id=a4
a8.a.appendChild(a9)
u=[P.h]
a8.dR(H.d(["Test of Material Lighting shader with different reflections and refractions. No alpha is being used. The background cube maps is being painted onto the object."],u))
a8.ih(H.d(["controls","shapes"],u))
a8.dR(H.d(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a4)
if(t==null)H.B(P.E("Failed to find an element with the identifier, testCanvas."))
s=E.oJ(t,!0,!0,!0,!1)
r=X.lw(a5)
r.sdY(0,!1)
q=E.mj()
q.saa(0,F.nu())
u=s.f
p=u.a
o=p.createTexture()
p.bindTexture(a6,o)
p.texParameteri(a6,10242,10497)
p.texParameteri(a6,10243,10497)
p.texParameteri(a6,10241,9729)
p.texParameteri(a6,10240,9729)
p.bindTexture(a6,a5)
n=new T.d3()
n.a=0
n.b=o
n.c=!1
n.d=0
u.aS(n,o,"../resources/maskonaive/posx.jpg",34069,!1,!1)
u.aS(n,o,"../resources/maskonaive/negx.jpg",34070,!1,!1)
u.aS(n,o,"../resources/maskonaive/posy.jpg",34071,!1,!1)
u.aS(n,o,"../resources/maskonaive/negy.jpg",34072,!1,!1)
u.aS(n,o,"../resources/maskonaive/posz.jpg",34073,!1,!1)
u.aS(n,o,"../resources/maskonaive/negz.jpg",34074,!1,!1)
m=new O.dX()
m.sff(O.lt(V.av))
m.e.b_(m.gfQ(),m.gfS())
u=new O.bc(m,"emission")
u.c=new A.ae(!1,!1,!1)
u.f=new V.t(0,0,0)
m.f=u
u=new O.bc(m,"ambient")
u.c=new A.ae(!1,!1,!1)
u.f=new V.t(0,0,0)
m.r=u
u=new O.bc(m,"diffuse")
u.c=new A.ae(!1,!1,!1)
u.f=new V.t(0,0,0)
m.x=u
u=new O.bc(m,"invDiffuse")
u.c=new A.ae(!1,!1,!1)
u.f=new V.t(0,0,0)
m.y=u
u=new O.hK(m,"specular")
u.c=new A.ae(!1,!1,!1)
u.f=new V.t(0,0,0)
u.ch=100
m.z=u
u=new O.hG(m,"bump")
u.c=new A.ae(!1,!1,!1)
m.Q=u
m.ch=null
u=new O.bc(m,"reflect")
u.c=new A.ae(!1,!1,!1)
u.f=new V.t(0,0,0)
m.cx=u
u=new O.hJ(m,"refract")
u.c=new A.ae(!1,!1,!1)
u.f=new V.t(0,0,0)
u.ch=1
m.cy=u
u=new O.hF(m,"alpha")
u.c=new A.ae(!1,!1,!1)
u.f=1
m.db=u
u=new D.dS()
u.bn(D.af)
u.sfp(H.d([],[D.bF]))
u.shD(H.d([],[D.e6]))
u.si1(H.d([],[D.ef]))
u.y=u.x=null
u.cZ(u.gfO(),u.ghn(),u.ghr())
m.dx=u
p=new O.hI()
p.b=new V.am(0,0,0,0)
p.c=1
p.d=10
p.e=!1
m.dy=p
p=u.x
u=p==null?u.x=D.P():p
u.h(0,m.ghO())
u=m.dx
p=u.y
u=p==null?u.y=D.P():p
p=m.gc1()
u.h(0,p)
m.fr=null
u=m.dx
l=V.lJ()
k=U.mf(V.mn(V.mu(),l,new V.L(-1,-1,-1)))
j=new V.t(1,1,1)
i=new D.bF()
i.c=new V.t(1,1,1)
i.a=V.mP()
i.d=V.lJ()
i.e=V.oT()
h=i.b
i.b=k
k.gq().h(0,i.gf0())
k=new D.O("mover",h,i.b,[U.ai])
k.b=!0
i.aA(k)
if(!i.c.w(0,j)){h=i.c
i.c=j
k=new D.O("color",h,j,[V.t])
k.b=!0
i.aA(k)}u.h(0,i)
u=m.r
u.st(0,new V.t(0.1,0.1,0.1))
u=m.x
u.st(0,new V.t(0.1,0.1,0.1))
u=m.z
u.st(0,new V.t(1,1,1))
u=m.z
u.br(new A.ae(!0,!1,!1))
u.dI(10)
u=m.ch
if(u!==n){if(u!=null)u.gq().M(0,p)
h=m.ch
m.ch=n
n.gq().h(0,p)
u=new D.O("environment",h,m.ch,[T.d3])
u.b=!0
m.a4(u)}m.cy.saF(0.6)
u=m.cy
u.st(0,new V.t(0.2,0.3,1))
u=m.cx
u.st(0,new V.t(0.6,0.6,0.6))
g=new U.cJ()
g.bn(U.ai)
g.b_(g.gfM(),g.ghp())
g.e=null
g.f=V.c7()
g.r=0
u=s.r
p=new U.es()
k=U.lu()
k.scW(0,!0)
k.scG(6.283185307179586)
k.scI(0)
k.sa2(0,0)
k.scH(100)
k.sW(0)
k.sco(0.5)
p.b=k
i=p.gaQ()
k.gq().h(0,i)
k=U.lu()
k.scW(0,!0)
k.scG(6.283185307179586)
k.scI(0)
k.sa2(0,0)
k.scH(100)
k.sW(0)
k.sco(0.5)
p.c=k
k.gq().h(0,i)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
f=new X.aD(!1,!1,!1)
h=p.d
p.d=f
k=[X.aD]
i=new D.O(a7,h,f,k)
i.b=!0
p.R(i)
i=p.f
if(i!==!1){p.f=!1
i=new D.O("invertX",i,!1,[P.R])
i.b=!0
p.R(i)}i=p.r
if(i!==!1){p.r=!1
i=new D.O("invertY",i,!1,[P.R])
i.b=!0
p.R(i)}p.b6(u)
g.h(0,p)
u=s.r
p=new U.er()
i=U.lu()
i.scW(0,!0)
i.scG(6.283185307179586)
i.scI(0)
i.sa2(0,0)
i.scH(100)
i.sW(0)
i.sco(0.2)
p.b=i
i.gq().h(0,p.gaQ())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
f=new X.aD(!0,!1,!1)
h=p.c
p.c=f
i=new D.O(a7,h,f,k)
i.b=!0
p.R(i)
p.b6(u)
g.h(0,p)
u=s.r
p=new U.et()
p.c=0.01
p.e=p.d=0
f=new X.aD(!1,!1,!1)
p.b=f
k=new D.O(a7,a5,f,k)
k.b=!0
p.R(k)
p.b6(u)
g.h(0,p)
g.h(0,U.mf(V.bd(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
e=X.mr(g)
d=new M.dG()
d.a=!0
u=E.mj()
c=F.is()
p=c.a
k=new V.L(-1,-1,1)
k=k.v(0,Math.sqrt(k.E(k)))
b=p.bt(new V.ax(1,2,4,6),new V.am(1,0,0,1),new V.Z(-1,-1,0),new V.a7(0,1),k,a5)
p=c.a
k=new V.L(1,-1,1)
k=k.v(0,Math.sqrt(k.E(k)))
a=p.bt(new V.ax(0,3,4,6),new V.am(0,0,1,1),new V.Z(1,-1,0),new V.a7(1,1),k,a5)
p=c.a
k=new V.L(1,1,1)
k=k.v(0,Math.sqrt(k.E(k)))
a0=p.bt(new V.ax(0,2,5,6),new V.am(0,1,0,1),new V.Z(1,1,0),new V.a7(1,0),k,a5)
p=c.a
k=V.bu()
i=new V.L(-1,1,1)
i=i.v(0,Math.sqrt(i.E(i)))
a1=p.bt(new V.ax(0,2,4,7),new V.am(1,1,0,1),new V.Z(-1,1,0),k,i,a5)
c.d.dP(H.d([b,a,a0,a1],[F.ad]))
c.aq()
u.saa(0,c)
d.e=u
d.sb7(a5)
d.sbh(0,a5)
d.sbi(a5)
u=new O.ec()
u.b=1.0471975511965976
u.d=new V.t(1,1,1)
h=u.c
u.c=n
n.gq().h(0,u.gc1())
p=new D.O("boxTexture",h,u.c,[T.d3])
p.b=!0
u.a4(p)
d.sbi(u)
d.sbh(0,r)
d.sb7(e)
a2=new M.dK()
a2.a=!0
a2.sfi(0,O.lt(E.aq))
a2.e.b_(a2.gfW(),a2.gfY())
a2.y=a2.x=a2.r=a2.f=null
a3=X.lw(a5)
a2.sb7(a5)
a2.sbh(0,a3)
a2.sbi(a5)
a2.sb7(e)
a2.sbi(m)
a2.sbh(0,r)
a2.e.h(0,q)
a2.c.sdY(0,!1)
u=M.aF
p=H.d([d,a2],[u])
k=new M.dE()
k.bn(u)
k.e=!0
k.f=!1
k.r=null
k.b_(k.ght(),k.ghv())
k.ae(0,p)
u=s.d
if(u!==k){if(u!=null)u.gq().M(0,s.gd6())
s.d=k
k.gq().h(0,s.gd6())
s.d7()}u=V.mx("controls")
u.cd(0,"Silver",new D.kY(m),!0)
u.a3(0,"Gold",new D.kZ(m))
u.a3(0,"Glass",new D.l_(m))
u.a3(0,"Blue Glass",new D.l8(m))
u.a3(0,"Water Bubble",new D.l9(m))
u.a3(0,"No Reflection",new D.la(m))
u.a3(0,"Pink Distort",new D.lb(m))
u.a3(0,"Cloak",new D.lc(m))
u.a3(0,"White and Shiny",new D.ld(m))
u=V.mx("shapes")
u.a3(0,"Cube",new D.le(q))
u.a3(0,"Cuboid",new D.lf(q))
u.a3(0,"Cylinder",new D.l0(q))
u.a3(0,"Cone",new D.l1(q))
u.a3(0,"Cylindrical",new D.l2(q))
u.a3(0,"Sphere",new D.l3(q))
u.a3(0,"Spherical",new D.l4(q))
u.cd(0,"Toroid",new D.l5(q),!0)
u.a3(0,"Knot",new D.l6(q))
u=s.z
if(u==null)u=s.z=D.P()
p={func:1,ret:-1,args:[D.C]}
k=H.n(new D.l7(a8,m),p)
if(u.b==null)u.saT(H.d([],[p]))
u=u.b;(u&&C.a).h(u,k)
V.qc(s)},
kY:function kY(a){this.a=a},
kZ:function kZ(a){this.a=a},
l_:function l_(a){this.a=a},
l8:function l8(a){this.a=a},
l9:function l9(a){this.a=a},
la:function la(a){this.a=a},
lb:function lb(a){this.a=a},
lc:function lc(a){this.a=a},
ld:function ld(a){this.a=a},
le:function le(a){this.a=a},
lf:function lf(a){this.a=a},
kX:function kX(){},
l0:function l0(a){this.a=a},
l1:function l1(a){this.a=a},
l2:function l2(a){this.a=a},
kW:function kW(){},
l3:function l3(a){this.a=a},
l4:function l4(a){this.a=a},
kV:function kV(){},
l5:function l5(a){this.a=a},
l6:function l6(a){this.a=a},
l7:function l7(a,b){this.a=a
this.b=b}},X={dD:function dD(a,b){this.a=a
this.b=b},dR:function dR(a,b){this.a=a
this.b=b},hq:function hq(){var _=this
_.d=_.c=_.b=_.a=null},dV:function dV(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hy:function hy(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aD:function aD(a,b,c){this.a=a
this.b=b
this.c=c},bt:function bt(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hX:function hX(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cP:function cP(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ic:function ic(){},el:function el(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iX:function iX(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},eq:function eq(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lw:function(a){var u=new X.he(),t=new V.am(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.mz
if(t==null){t=V.my(0,0,1,1)
$.mz=t}u.r=t
return u},
mr:function(a){var u,t,s=new X.e5()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gq().h(0,s.gf7())
t=new D.O("mover",u,s.b,[U.ai])
t.b=!0
s.av(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.U().a)){s.c=1.0471975511965976
t=new D.O("fov",t,1.0471975511965976,[P.q])
t.b=!0
s.av(t)}t=s.d
if(!(Math.abs(t-0.1)<$.U().a)){s.d=0.1
t=new D.O("near",t,0.1,[P.q])
t.b=!0
s.av(t)}t=s.e
if(!(Math.abs(t-2000)<$.U().a)){s.e=2000
t=new D.O("far",t,2000,[P.q])
t.b=!0
s.av(t)}return s},
c0:function c0(){},
he:function he(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hk:function hk(){this.b=this.a=null},
e5:function e5(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
d0:function d0(){}},V={
qg:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.bk(a-b,u)
return(a<0?a+u:a)+b},
a_:function(a,b,c){if(a==null)return C.b.an("null",c)
return C.b.an(C.c.eB(Math.abs(a-0)<$.U().a?0:a,b),c+b+1)},
cq:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.q],"$ab")
u=H.d([],[P.h])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.v)(a),++r){q=V.a_(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.k(u,p,C.b.an(u[p],s))}return u},
m0:function(a){return C.c.jq(Math.pow(2,C.S.cz(Math.log(H.pO(a))/Math.log(2))))},
c7:function(){var u=$.mo
return u==null?$.mo=V.bd(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bd:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mn:function(a,b,c){var u=c.v(0,Math.sqrt(c.E(c))),t=b.aE(u),s=t.v(0,Math.sqrt(t.E(t))),r=u.aE(s),q=new V.L(a.a,a.b,a.c),p=s.T(0).E(q),o=r.T(0).E(q),n=u.T(0).E(q)
return V.bd(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bu:function(){var u=$.mt
return u==null?$.mt=new V.a7(0,0):u},
mu:function(){var u=$.cU
return u==null?$.cU=new V.Z(0,0,0):u},
my:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e9(a,b,c,d)},
d9:function(){var u=$.mO
return u==null?$.mO=new V.L(0,0,0):u},
oT:function(){var u=$.jo
return u==null?$.jo=new V.L(-1,0,0):u},
lJ:function(){var u=$.jp
return u==null?$.jp=new V.L(0,1,0):u},
mP:function(){var u=$.jq
return u==null?$.jq=new V.L(0,0,1):u},
t:function t(a,b,c){this.a=a
this.b=b
this.c=c},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h4:function h4(a){this.a=a},
e_:function e_(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
av:function av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e9:function e9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
W:function W(a,b){this.a=a
this.b=b},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
a2:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.E("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.G(a,0)
t=C.b.G(b,0)
s=new V.ih()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
x:function(a){var u=new V.ir()
u.eW(a)
return u},
iW:function(){var u=new V.iV(),t=P.h
u.si2(new H.a5([t,V.cY]))
u.si5(new H.a5([t,V.d4]))
u.c=null
return u},
bm:function bm(){},
aC:function aC(){},
dW:function dW(){},
aw:function aw(){this.a=null},
ih:function ih(){this.b=this.a=null},
ir:function ir(){this.a=null},
cY:function cY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ek:function ek(a,b,c){this.a=a
this.b=b
this.c=c},
d4:function d4(a){this.b=a
this.c=null},
iV:function iV(){this.c=this.b=this.a=null},
d5:function d5(a){this.b=a
this.a=this.c=null},
qc:function(a){P.oK(C.P,new V.li(a))},
mx:function(a){var u=new V.ie(a),t=document.getElementById(a)
u.c=t
if(t==null)H.B("Failed to find "+a+" for RadioGroup")
return u},
oF:function(a){var u=new V.iw()
u.eX(a,!0)
return u},
bD:function bD(){},
li:function li(a){this.a=a},
fV:function fV(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hf:function hf(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hg:function hg(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ia:function ia(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ie:function ie(a){this.a=a
this.c=null},
ig:function ig(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iw:function iw(){this.b=this.a=null},
iy:function iy(a){this.a=a},
ix:function ix(a){this.a=a},
iz:function iz(a){this.a=a}},U={
lu:function(){var u=new U.fM()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
mf:function(a){var u=new U.dF()
u.a=a
return u},
fM:function fM(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dF:function dF(){this.b=this.a=null},
cJ:function cJ(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ai:function ai(){},
er:function er(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
es:function es(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
et:function et(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dE:function dE(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},dG:function dG(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},dK:function dK(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aF:function aF(){}},A={
om:function(a,b){var u=a.bb,t=new A.dY(b,u)
t.d4(b,u)
t.eU(a,b)
return t},
on:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.l(a9,"$ib",[A.aH],"$ab")
H.l(b0,"$ib",[A.aK],"$ab")
H.l(b1,"$ib",[A.aL],"$ab")
u="MaterialLight_"+a0.gat(a0)+a1.gat(a1)+a2.gat(a2)+a3.gat(a3)+a4.gat(a4)+a5.gat(a5)+a6.gat(a6)+a7.gat(a7)+a8.gat(a8)+"_"
u+=a?"1":"0"
u+=b?"1":"0"
u+=c?"1":"0"
u=u+"0_"+e
t=a9.length
if(t>0){u+="_Dir"
for(s=0;s<a9.length;a9.length===t||(0,H.v)(a9),++s)u+="_"+H.j(a9[s].a)}t=b0.length
if(t>0){u+="_Point"
for(s=0;s<b0.length;b0.length===t||(0,H.v)(b0),++s)u+="_"+H.j(b0[s].a)}t=b1.length
if(t>0){u+="_Spot"
for(s=0;s<b1.length;b1.length===t||(0,H.v)(b1),++s)u+="_"+H.j(b1[s].a)}for(t=a9.length,r=0,q=!1,s=0;s<t;++s,q=!0)r+=a9[s].b
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
f=$.b3()
if(j){t=$.bz()
f=new Z.bS(f.a|t.a)}if(i){t=$.by()
f=new Z.bS(f.a|t.a)}if(h){t=$.bx()
f=new Z.bS(f.a|t.a)}return new A.hH(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,r,o,k,o,q,g,!0,!1,!1,n,q,l,j,i,!1,!1,h,!1,!1,c,!1,e,u.charCodeAt(0)==0?u:u,f)},
kC:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
kD:function(a,b,c){var u
A.kC(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.ll(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
po:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.kC(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
pl:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.kD(b,t,"ambient")
b.a+="\n"},
pm:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.kD(b,t,"diffuse")
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
pp:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.kD(b,t,"invDiffuse")
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
pv:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.kD(b,t,"specular")
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
pr:function(a,b){var u,t,s
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
pt:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.kC(b,t,"reflect")
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
pu:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.kC(b,t,"refract")
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
pn:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.j(u)
s=A.ll(t)
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
ps:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.j(u)
s=A.ll(t)
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
pw:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.j(u)
s=A.ll(t)
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
pq:function(a,b){var u,t
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
px:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.ak("")
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
A.po(a,j)
A.pl(a,j)
A.pm(a,j)
A.pp(a,j)
A.pv(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.pt(a,j)
A.pu(a,j)}A.pr(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.v)(q),++o)A.pn(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.v)(q),++o)A.ps(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.v)(q),++o)A.pw(a,q[o],j)
A.pq(a,j)}q=j.a+="// === Main ===\n"
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.v)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.af(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.v)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.af(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.v)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.af(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
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
py:function(a,b){var u,t,s
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
pA:function(a,b){var u
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
pz:function(a,b){var u
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
pC:function(a,b){var u,t
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
pD:function(a,b){var u,t
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
pB:function(a,b){var u
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
pE:function(a,b){var u
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
ll:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.af(a,1)},
lG:function(a,b,c,d,e){var u=new A.j4(a,c,e)
u.f=d
u.sie(P.ok(d,0,P.m))
return u},
dA:function dA(a,b,c){this.a=a
this.b=b
this.c=c},
fB:function fB(a){this.a=a},
ae:function ae(a,b,c){this.a=a
this.b=b
this.c=c},
dY:function dY(a,b){var _=this
_.jF=_.jE=_.e3=_.e2=_.bb=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jS=_.jR=_.jQ=_.cw=_.cv=_.cu=_.ct=_.cs=_.cr=_.jP=_.jO=_.ea=_.jN=_.jM=_.e9=_.e8=_.jL=_.jK=_.e7=_.e6=_.jJ=_.jI=_.e5=_.jH=_.jG=_.e4=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aH:function aH(a,b){this.a=a
this.b=b},
aK:function aK(a,b){this.a=a
this.b=b},
aL:function aL(a,b){this.a=a
this.b=b},
hH:function hH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.bb=b3
_.e2=b4},
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
em:function em(){},
j9:function j9(a){this.a=a},
aO:function aO(a,b,c){this.a=a
this.c=b
this.d=c},
j6:function j6(a,b,c){this.a=a
this.c=b
this.d=c},
j7:function j7(a,b,c){this.a=a
this.c=b
this.d=c},
j8:function j8(a,b,c){this.a=a
this.c=b
this.d=c},
j4:function j4(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
aa:function aa(a,b,c){this.a=a
this.c=b
this.d=c},
j5:function j5(a,b,c){this.a=a
this.c=b
this.d=c},
a0:function a0(a,b,c){this.a=a
this.c=b
this.d=c},
d6:function d6(a,b,c){this.a=a
this.c=b
this.d=c},
ja:function ja(a,b,c){this.a=a
this.c=b
this.d=c},
d7:function d7(a,b,c){this.a=a
this.c=b
this.d=c},
az:function az(a,b,c){this.a=a
this.c=b
this.d=c},
ch:function ch(a,b,c){this.a=a
this.c=b
this.d=c},
bQ:function bQ(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lX:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.ad,P.q,P.q]})
u=F.is()
F.dq(u,b,c,d,a,1,0,0,1)
F.dq(u,b,c,d,a,0,1,0,3)
F.dq(u,b,c,d,a,0,0,1,2)
F.dq(u,b,c,d,a,-1,0,0,0)
F.dq(u,b,c,d,a,0,-1,0,0)
F.dq(u,b,c,d,a,0,0,-1,3)
u.aq()
return u},
kx:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dq:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={}
H.n(c,{func:1,ret:-1,args:[F.ad,P.q,P.q]})
u=a1+a2
t=u+a3
s=a2+a3
r=a3+a1
q=new V.L(t,s+a1,r+a2)
e.a=q
p=a1-a2
o=a2-a3
n=a3-a1
m=e.b=new V.L(p+a3,o+a1,n+a2)
l=new V.L(p-a3,o-a1,n-a2)
e.c=l
k=e.d=new V.L(u-a3,s-a1,r-a2)
if(t>0){e.d=m
e.b=k
t=m
u=k}else{t=k
u=m}for(r=t,t=u,u=q,s=l,j=0;j<a4;++j,i=r,r=u,u=t,t=s,s=i){e.a=t
e.b=s
e.c=r
e.d=u}h=F.kx(u)
g=F.kx(e.b)
f=F.m3(d,a0,new F.kw(e,F.kx(e.c),F.kx(e.d),g,h,c),b)
if(f!=null)a.be(f)},
ne:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(d,{func:1,ret:P.q,args:[P.q]})
if(e<3)return
u=F.is()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.ad])
q=u.a
p=new V.L(0,0,t)
p=p.v(0,Math.sqrt(p.E(p)))
C.a.h(r,q.ik(new V.ax(a,-1,-1,-1),new V.am(1,1,1,1),new V.Z(0,0,c),new V.L(0,0,t),new V.a7(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.F(k)
j=new V.L(m,l,t).v(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.eu(new V.ax(a,-1,-1,-1),null,new V.am(i,g,h,1),new V.Z(m*k,l*k,c),new V.L(0,0,t),new V.a7(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.dP(r)
return u},
nb:function(a,b,c){return F.nc(!0,a,1,new F.kI(1,c),b)},
nc:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
u=F.m3(c,e,new F.kK(d),null)
if(u==null)return
u.aq()
u.ce()
if(b)u.be(F.ne(3,!1,1,new F.kL(d),e))
u.be(F.ne(1,!0,-1,new F.kM(d),e))
return u},
ns:function(a,b,c){var u,t={}
t.a=b
if(H.n(b,{func:1,ret:P.q,args:[P.q,P.q]})==null)t.a=new F.lj()
u=F.lX(a,null,new F.lk(t,1),c)
u.ce()
return u},
nu:function(){return F.nd(15,30,0.5,1,new F.lm())},
q5:function(){return F.nd(12,120,0.3,1,new F.kT(3,2))},
nd:function(a,b,c,d,e){var u=F.m3(a,b,new F.kJ(H.n(e,{func:1,ret:V.Z,args:[P.q]}),d,b,c),null)
if(u==null)return
u.aq()
u.ce()
return u},
m3:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.ad,P.q,P.q]})
if(a<1)return
if(b<1)return
u=F.is()
t=H.d([],[F.ad])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.eu(g,g,new V.am(p,0,0,1),g,g,new V.a7(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cn(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.eu(g,g,new V.am(j,i,h,1),g,g,new V.a7(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cn(d))}}u.d.ij(a+1,b+1,t)
return u},
cG:function(a,b,c){var u=new F.a9(),t=a.a
if(t==null)H.B(P.E("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.B(P.E("May not create a face with vertices attached to different shapes."))
u.cb(a)
u.cc(b)
u.hV(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a5()
return u},
og:function(a,b){var u=new F.bs(),t=a.a
if(t==null)H.B(P.E("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.B(P.E("May not create a line with vertices attached to different shapes."))
u.cb(a)
u.cc(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a5()
return u},
is:function(){var u=new F.eb(),t=new F.jr(u)
t.b=!1
t.sig(H.d([],[F.ad]))
u.a=t
t=new F.iv(u)
t.sc3(H.d([],[F.bN]))
u.b=t
t=new F.iu(u)
t.sfB(H.d([],[F.bs]))
u.c=t
t=new F.it(u)
t.sft(H.d([],[F.a9]))
u.d=t
u.e=null
return u},
eu:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ad(),r=new F.jz()
r.sc3(H.d([],[F.bN]))
s.b=r
r=new F.jv()
u=[F.bs]
r.sfC(H.d([],u))
r.sfD(H.d([],u))
s.c=r
r=new F.js()
u=[F.a9]
r.sfu(H.d([],u))
r.sfv(H.d([],u))
r.sfw(H.d([],u))
s.d=r
h=$.nI()
s.e=0
r=$.b3()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bz().a)!==0?e:t
s.x=(u&$.by().a)!==0?b:t
s.y=(u&$.bX().a)!==0?f:t
s.z=(u&$.bY().a)!==0?g:t
s.Q=(u&$.nJ().a)!==0?c:t
s.ch=(u&$.cw().a)!==0?i:0
s.cx=(u&$.bx().a)!==0?a:t
return s},
kw:function kw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kI:function kI(a,b){this.a=a
this.b=b},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
kM:function kM(a){this.a=a},
lj:function lj(){},
lk:function lk(a,b){this.a=a
this.b=b},
lm:function lm(){},
kT:function kT(a,b){this.a=a
this.b=b},
kJ:function kJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h7:function h7(){},
iA:function iA(){},
bs:function bs(){this.b=this.a=null},
hs:function hs(){},
j3:function j3(){},
bN:function bN(){this.a=null},
eb:function eb(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
it:function it(a){this.a=a
this.b=null},
iu:function iu(a){this.a=a
this.b=null},
iv:function iv(a){this.a=a
this.b=null},
ad:function ad(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jB:function jB(a){this.a=a},
jA:function jA(a){this.a=a},
jr:function jr(a){this.a=a
this.c=this.b=null},
js:function js(){this.d=this.c=this.b=null},
jt:function jt(a,b){this.a=a
this.b=b},
ju:function ju(a,b){this.a=a
this.b=b},
jv:function jv(){this.c=this.b=null},
jx:function jx(){},
jw:function jw(){},
jy:function jy(){},
i4:function i4(){},
jz:function jz(){this.b=null}},T={d2:function d2(){},d3:function d3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},iR:function iR(a){var _=this
_.a=a
_.e=_.d=_.c=null},iS:function iS(a,b,c,d,e,f,g){var _=this
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
H.lA.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gJ:function(a){return H.cV(a)},
i:function(a){return"Instance of '"+H.ca(a)+"'"}}
J.hn.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iR:1}
J.dP.prototype={
w:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0}}
J.dQ.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.i9.prototype={}
J.bR.prototype={}
J.br.prototype={
i:function(a){var u=a[$.nw()]
if(u==null)return this.eQ(a)
return"JavaScript function for "+H.j(J.at(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibH:1}
J.aU.prototype={
h:function(a,b){H.D(b,H.r(a,0))
if(!!a.fixed$length)H.B(P.J("add"))
a.push(b)},
es:function(a,b){if(!!a.fixed$length)H.B(P.J("removeAt"))
if(b<0||b>=a.length)throw H.c(P.e8(b,null))
return a.splice(b,1)[0]},
M:function(a,b){var u
if(!!a.fixed$length)H.B(P.J("remove"))
for(u=0;u<a.length;++u)if(J.X(a[u],b)){a.splice(u,1)
return!0}return!1},
ae:function(a,b){var u,t
H.l(b,"$ii",[H.r(a,0)],"$ai")
if(!!a.fixed$length)H.B(P.J("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.v)(b),++t)a.push(b[t])},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bn(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.j(a[u]))
return t.join(b)},
iX:function(a){return this.m(a,"")},
iP:function(a,b,c,d){var u,t,s
H.D(b,d)
H.n(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bn(a))}return t},
iO:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.R,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.G(b.$1(s)))return s
if(a.length!==u)throw H.c(P.bn(a))}throw H.c(H.hm())},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
eN:function(a,b,c){if(b<0||b>a.length)throw H.c(P.aj(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.aj(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.r(a,0)])
return H.d(a.slice(b,c),[H.r(a,0)])},
giN:function(a){if(a.length>0)return a[0]
throw H.c(H.hm())},
gay:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hm())},
bl:function(a,b,c,d){var u,t,s=H.r(a,0)
H.l(d,"$ii",[s],"$ai")
if(!!a.immutable$list)H.B(P.J("setRange"))
P.bv(b,c,a.length)
u=c-b
if(u===0)return
P.lE(0,"skipCount")
H.l(d,"$ib",[s],"$ab")
s=J.cr(d)
if(u>s.gn(d))throw H.c(H.oc())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
dT:function(a,b){var u,t
H.n(b,{func:1,ret:P.R,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.G(b.$1(a[t])))return!0
if(a.length!==u)throw H.c(P.bn(a))}return!1},
bI:function(a,b){var u=H.r(a,0)
H.n(b,{func:1,ret:P.m,args:[u,u]})
if(!!a.immutable$list)H.B(P.J("sort"))
H.ee(a,0,a.length-1,b,u)},
V:function(a,b){var u
for(u=0;u<a.length;++u)if(J.X(a[u],b))return!0
return!1},
i:function(a){return P.lx(a,"[","]")},
gU:function(a){return new J.au(a,a.length,[H.r(a,0)])},
gJ:function(a){return H.cV(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.B(P.J("set length"))
if(b<0)throw H.c(P.aj(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cp(a,b))
return a[b]},
k:function(a,b,c){H.D(c,H.r(a,0))
if(!!a.immutable$list)H.B(P.J("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cp(a,b))
a[b]=c},
p:function(a,b){var u,t=[H.r(a,0)]
H.l(b,"$ib",t,"$ab")
u=C.e.p(a.length,b.gn(b))
t=H.d([],t)
this.sn(t,u)
this.bl(t,0,a.length,a)
this.bl(t,a.length,u,b)
return t},
$ii:1,
$ib:1}
J.lz.prototype={}
J.au.prototype={
gK:function(a){return this.d},
D:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.v(s))
u=t.c
if(u>=r){t.sd9(null)
return!1}t.sd9(s[u]);++t.c
return!0},
sd9:function(a){this.d=H.D(a,H.r(this,0))},
$ib9:1}
J.bL.prototype={
ix:function(a,b){var u
H.nn(b)
if(typeof b!=="number")throw H.c(H.as(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbw(b)
if(this.gbw(a)===u)return 0
if(this.gbw(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbw:function(a){return a===0?1/a<0:a<0},
jq:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.J(""+a+".toInt()"))},
cz:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.J(""+a+".floor()"))},
ar:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.J(""+a+".round()"))},
eB:function(a,b){var u
if(b>20)throw H.c(P.aj(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbw(a))return"-"+u
return u},
bj:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.aj(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.a0(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.B(P.J("Unexpected toString result: "+u))
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
gJ:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
p:function(a,b){if(typeof b!=="number")throw H.c(H.as(b))
return a+b},
u:function(a,b){if(typeof b!=="number")throw H.c(H.as(b))
return a-b},
A:function(a,b){if(typeof b!=="number")throw H.c(H.as(b))
return a*b},
bk:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eT:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dK(a,b)},
ad:function(a,b){return(a|0)===a?a/b|0:this.dK(a,b)},
dK:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.J("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
aV:function(a,b){var u
if(a>0)u=this.dJ(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
i_:function(a,b){if(b<0)throw H.c(H.as(b))
return this.dJ(a,b)},
dJ:function(a,b){return b>31?0:a>>>b},
au:function(a,b){if(typeof b!=="number")throw H.c(H.as(b))
return a>b},
$iq:1,
$iac:1}
J.dO.prototype={$im:1}
J.dN.prototype={}
J.bq.prototype={
a0:function(a,b){if(b<0)throw H.c(H.cp(a,b))
if(b>=a.length)H.B(H.cp(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.c(H.cp(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.lq(b,null,null))
return a+b},
aY:function(a,b,c,d){var u,t
c=P.bv(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
aj:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.aj(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a8:function(a,b){return this.aj(a,b,0)},
C:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.B(H.as(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.S()
if(b<0)throw H.c(P.e8(b,null))
if(b>c)throw H.c(P.e8(b,null))
if(c>a.length)throw H.c(P.e8(c,null))
return a.substring(b,c)},
af:function(a,b){return this.C(a,b,null)},
jt:function(a){return a.toLowerCase()},
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
ei:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.aj(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eh:function(a,b){return this.ei(a,b,0)},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$imq:1,
$ih:1}
H.u.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.b.a0(this.a,b)},
$ad8:function(){return[P.m]},
$az:function(){return[P.m]},
$ai:function(){return[P.m]},
$ab:function(){return[P.m]}}
H.h1.prototype={}
H.c6.prototype={
gU:function(a){var u=this
return new H.cM(u,u.gn(u),[H.ao(u,"c6",0)])},
bF:function(a,b){return this.eP(0,H.n(b,{func:1,ret:P.R,args:[H.ao(this,"c6",0)]}))}}
H.cM.prototype={
gK:function(a){return this.d},
D:function(){var u,t=this,s=t.a,r=J.cr(s),q=r.gn(s)
if(t.b!==q)throw H.c(P.bn(s))
u=t.c
if(u>=q){t.sb2(null)
return!1}t.sb2(r.L(s,u));++t.c
return!0},
sb2:function(a){this.d=H.D(a,H.r(this,0))},
$ib9:1}
H.hC.prototype={
gU:function(a){return new H.hD(J.bA(this.a),this.b,this.$ti)},
gn:function(a){return J.aG(this.a)},
L:function(a,b){return this.b.$1(J.fx(this.a,b))},
$ai:function(a,b){return[b]}}
H.hD.prototype={
D:function(){var u=this,t=u.b
if(t.D()){u.sb2(u.c.$1(t.gK(t)))
return!0}u.sb2(null)
return!1},
gK:function(a){return this.a},
sb2:function(a){this.a=H.D(a,H.r(this,1))},
$ab9:function(a,b){return[b]}}
H.hE.prototype={
gn:function(a){return J.aG(this.a)},
L:function(a,b){return this.b.$1(J.fx(this.a,b))},
$ac6:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.da.prototype={
gU:function(a){return new H.jD(J.bA(this.a),this.b,this.$ti)}}
H.jD.prototype={
D:function(){var u,t
for(u=this.a,t=this.b;u.D();)if(H.G(t.$1(u.gK(u))))return!0
return!1},
gK:function(a){var u=this.a
return u.gK(u)}}
H.c4.prototype={}
H.d8.prototype={
k:function(a,b,c){H.D(c,H.ao(this,"d8",0))
throw H.c(P.J("Cannot modify an unmodifiable list"))}}
H.eo.prototype={}
H.fO.prototype={
i:function(a){return P.lD(this)},
k:function(a,b,c){H.D(b,H.r(this,0))
H.D(c,H.r(this,1))
return H.o4()},
$iA:1}
H.fP.prototype={
gn:function(a){return this.a},
bu:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bu(0,b))return
return this.dr(b)},
dr:function(a){return this.b[H.K(a)]},
I:function(a,b){var u,t,s,r,q=this,p=H.r(q,1)
H.n(b,{func:1,ret:-1,args:[H.r(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.D(q.dr(r),p))}}}
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
H.i5.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hp.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.j(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.j(t.a)+")"
return s+r+"' on '"+u+"' ("+H.j(t.a)+")"}}
H.jd.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ln.prototype={
$1:function(a){if(!!J.T(a).$ibG)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:24}
H.f4.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iay:1}
H.cC.prototype={
i:function(a){return"Closure '"+H.ca(this).trim()+"'"},
$ibH:1,
gjy:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iO.prototype={}
H.iE.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cv(u)+"'"}}
H.cy.prototype={
w:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cy))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.cV(this.a)
else u=typeof t!=="object"?J.dx(t):H.cV(t)
return(u^H.cV(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.ca(u)+"'")}}
H.j2.prototype={
i:function(a){return this.a}}
H.fK.prototype={
i:function(a){return this.a}}
H.ip.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.jE.prototype={
i:function(a){return"Assertion failed: "+P.dL(this.a)}}
H.a5.prototype={
gn:function(a){return this.a},
giW:function(a){return this.a===0},
ga9:function(a){return new H.hu(this,[H.r(this,0)])},
bu:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.dl(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.dl(t,b)}else return s.iT(b)},
iT:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cC(u.bQ(t,u.cB(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bo(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bo(r,b)
s=t==null?null:t.b
return s}else return q.iU(b)},
iU:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bQ(r,s.cB(a))
t=s.cC(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.D(b,H.r(s,0))
H.D(c,H.r(s,1))
if(typeof b==="string"){u=s.b
s.dc(u==null?s.b=s.c_():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.dc(t==null?s.c=s.c_():t,b,c)}else s.iV(b,c)},
iV:function(a,b){var u,t,s,r,q=this
H.D(a,H.r(q,0))
H.D(b,H.r(q,1))
u=q.d
if(u==null)u=q.d=q.c_()
t=q.cB(a)
s=q.bQ(u,t)
if(s==null)q.c9(u,t,[q.c0(a,b)])
else{r=q.cC(s,a)
if(r>=0)s[r].b=b
else s.push(q.c0(a,b))}},
I:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.r(s,0),H.r(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bn(s))
u=u.c}},
dc:function(a,b,c){var u,t=this
H.D(b,H.r(t,0))
H.D(c,H.r(t,1))
u=t.bo(a,b)
if(u==null)t.c9(a,b,t.c0(b,c))
else u.b=c},
fJ:function(){this.r=this.r+1&67108863},
c0:function(a,b){var u,t=this,s=new H.ht(H.D(a,H.r(t,0)),H.D(b,H.r(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fJ()
return s},
cB:function(a){return J.dx(a)&0x3ffffff},
cC:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.X(a[t].a,b))return t
return-1},
i:function(a){return P.lD(this)},
bo:function(a,b){return a[b]},
bQ:function(a,b){return a[b]},
c9:function(a,b,c){a[b]=c},
fn:function(a,b){delete a[b]},
dl:function(a,b){return this.bo(a,b)!=null},
c_:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c9(t,u,t)
this.fn(t,u)
return t}}
H.ht.prototype={}
H.hu.prototype={
gn:function(a){return this.a.a},
gU:function(a){var u=this.a,t=new H.hv(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hv.prototype={
gK:function(a){return this.d},
D:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bn(t))
else{t=u.c
if(t==null){u.sda(null)
return!1}else{u.sda(t.a)
u.c=u.c.c
return!0}}},
sda:function(a){this.d=H.D(a,H.r(this,0))},
$ib9:1}
H.kP.prototype={
$1:function(a){return this.a(a)},
$S:24}
H.kQ.prototype={
$2:function(a,b){return this.a(a,b)},
$S:42}
H.kR.prototype={
$1:function(a){return this.a(H.K(a))},
$S:44}
H.ho.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$imq:1,
$ioB:1}
H.cQ.prototype={$icQ:1}
H.bM.prototype={$ibM:1,$ioL:1}
H.e0.prototype={
gn:function(a){return a.length},
$iM:1,
$aM:function(){}}
H.cR.prototype={
j:function(a,b){H.bl(b,a,a.length)
return a[b]},
k:function(a,b,c){H.pT(c)
H.bl(b,a,a.length)
a[b]=c},
$ac4:function(){return[P.q]},
$az:function(){return[P.q]},
$ii:1,
$ai:function(){return[P.q]},
$ib:1,
$ab:function(){return[P.q]}}
H.e1.prototype={
k:function(a,b,c){H.a6(c)
H.bl(b,a,a.length)
a[b]=c},
$ac4:function(){return[P.m]},
$az:function(){return[P.m]},
$ii:1,
$ai:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]}}
H.hY.prototype={
j:function(a,b){H.bl(b,a,a.length)
return a[b]}}
H.hZ.prototype={
j:function(a,b){H.bl(b,a,a.length)
return a[b]}}
H.i_.prototype={
j:function(a,b){H.bl(b,a,a.length)
return a[b]}}
H.i0.prototype={
j:function(a,b){H.bl(b,a,a.length)
return a[b]}}
H.i1.prototype={
j:function(a,b){H.bl(b,a,a.length)
return a[b]}}
H.e2.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bl(b,a,a.length)
return a[b]},
$iqB:1}
H.cS.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bl(b,a,a.length)
return a[b]},
$icS:1,
$iS:1}
H.df.prototype={}
H.dg.prototype={}
H.dh.prototype={}
H.di.prototype={}
P.jG.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:31}
P.jF.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:35}
P.jH.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jI.prototype={
$0:function(){this.a.$0()},
$S:0}
P.fa.prototype={
f5:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.co(new P.km(this,b),0),a)
else throw H.c(P.J("`setTimeout()` not found."))},
f6:function(a,b){if(self.setTimeout!=null)self.setInterval(H.co(new P.kl(this,a,Date.now(),b),0),a)
else throw H.c(P.J("Periodic timer."))},
$ibg:1}
P.km.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.kl.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.eT(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bk.prototype={
iZ:function(a){if(this.c!==6)return!0
return this.b.b.cS(H.n(this.d,{func:1,ret:P.R,args:[P.Q]}),a.a,P.R,P.Q)},
iR:function(a){var u=this.e,t=P.Q,s={futureOr:1,type:H.r(this,1)},r=this.b.b
if(H.ft(u,{func:1,args:[P.Q,P.ay]}))return H.lY(r.jl(u,a.a,a.b,null,t,P.ay),s)
else return H.lY(r.cS(H.n(u,{func:1,args:[P.Q]}),a.a,null,t),s)}}
P.aQ.prototype={
eA:function(a,b,c){var u,t,s,r=H.r(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a3
if(u!==C.f){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.pG(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aQ($.a3,[c])
s=b==null?1:3
this.dd(new P.bk(t,s,a,b,[r,c]))
return t},
jp:function(a,b){return this.eA(a,null,b)},
dd:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ibk")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaQ")
s=u.a
if(s<4){u.dd(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.kG(null,null,s,H.n(new P.jR(t,a),{func:1,ret:-1}))}},
dE:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ibk")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaQ")
u=q.a
if(u<4){q.dE(a)
return}p.a=u
p.c=q.c}o.a=p.bq(a)
u=p.b
u.toString
P.kG(null,null,u,H.n(new P.jV(o,p),{func:1,ret:-1}))}},
c5:function(){var u=H.f(this.c,"$ibk")
this.c=null
return this.bq(u)},
bq:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dh:function(a){var u,t,s=this,r=H.r(s,0)
H.lY(a,{futureOr:1,type:r})
u=s.$ti
if(H.lU(a,"$icI",u,"$acI"))if(H.lU(a,"$iaQ",u,null))P.mQ(a,s)
else P.oY(a,s)
else{t=s.c5()
H.D(a,r)
s.a=4
s.c=a
P.dd(s,t)}},
di:function(a,b){var u,t=this
H.f(b,"$iay")
u=t.c5()
t.a=8
t.c=new P.ap(a,b)
P.dd(t,u)},
$icI:1}
P.jR.prototype={
$0:function(){P.dd(this.a,this.b)},
$S:0}
P.jV.prototype={
$0:function(){P.dd(this.b,this.a.a)},
$S:0}
P.jS.prototype={
$1:function(a){var u=this.a
u.a=0
u.dh(a)},
$S:31}
P.jT.prototype={
$2:function(a,b){H.f(b,"$iay")
this.a.di(a,b)},
$1:function(a){return this.$2(a,null)},
$S:57}
P.jU.prototype={
$0:function(){this.a.di(this.b,this.c)},
$S:0}
P.jY.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.ex(H.n(s.d,{func:1}),null)}catch(r){u=H.al(r)
t=H.ct(r)
if(o.d){s=H.f(o.a.a.c,"$iap").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$iap")
else q.b=new P.ap(u,t)
q.a=!0
return}if(!!J.T(n).$icI){if(n instanceof P.aQ&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$iap")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jp(new P.jZ(p),null)
s.a=!1}},
$S:3}
P.jZ.prototype={
$1:function(a){return this.a},
$S:54}
P.jX.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.r(s,0)
q=H.D(n.c,r)
p=H.r(s,1)
n.a.b=s.b.b.cS(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.al(o)
t=H.ct(o)
s=n.a
s.b=new P.ap(u,t)
s.a=!0}},
$S:3}
P.jW.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$iap")
r=m.c
if(H.G(r.iZ(u))&&r.e!=null){q=m.b
q.b=r.iR(u)
q.a=!1}}catch(p){t=H.al(p)
s=H.ct(p)
r=H.f(m.a.a.c,"$iap")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ap(t,s)
n.a=!0}},
$S:3}
P.ex.prototype={}
P.iH.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aQ($.a3,[P.m])
r.a=0
u=H.r(s,0)
t=H.n(new P.iJ(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.iK(r,q),{func:1,ret:-1})
W.ab(s.a,s.b,t,!1,u)
return q}}
P.iJ.prototype={
$1:function(a){H.D(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.r(this.b,0)]}}}
P.iK.prototype={
$0:function(){this.b.dh(this.a.a)},
$S:0}
P.cZ.prototype={}
P.iI.prototype={}
P.bg.prototype={}
P.ap.prototype={
i:function(a){return H.j(this.a)},
$ibG:1}
P.kv.prototype={$iqQ:1}
P.kF.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e4():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:0}
P.k4.prototype={
jm:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.a3){a.$0()
return}P.n1(r,r,this,a,-1)}catch(s){u=H.al(s)
t=H.ct(s)
P.kE(r,r,this,u,H.f(t,"$iay"))}},
jn:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.f===$.a3){a.$1(b)
return}P.n2(r,r,this,a,b,-1,c)}catch(s){u=H.al(s)
t=H.ct(s)
P.kE(r,r,this,u,H.f(t,"$iay"))}},
iu:function(a,b){return new P.k6(this,H.n(a,{func:1,ret:b}),b)},
cf:function(a){return new P.k5(this,H.n(a,{func:1,ret:-1}))},
dV:function(a,b){return new P.k7(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
ex:function(a,b){H.n(a,{func:1,ret:b})
if($.a3===C.f)return a.$0()
return P.n1(null,null,this,a,b)},
cS:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.a3===C.f)return a.$1(b)
return P.n2(null,null,this,a,b,c,d)},
jl:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.a3===C.f)return a.$2(b,c)
return P.pH(null,null,this,a,b,c,d,e,f)}}
P.k6.prototype={
$0:function(){return this.a.ex(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.k5.prototype={
$0:function(){return this.a.jm(this.b)},
$S:3}
P.k7.prototype={
$1:function(a){var u=this.c
return this.a.jn(this.b,H.D(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.k2.prototype={
gU:function(a){var u=this,t=new P.eM(u,u.r,u.$ti)
t.c=u.e
return t},
gn:function(a){return this.a},
V:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.f(u[b],"$icj")!=null}else{t=this.fj(b)
return t}},
fj:function(a){var u=this.d
if(u==null)return!1
return this.bO(this.ds(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.D(b,H.r(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.de(u==null?s.b=P.lM():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.de(t==null?s.c=P.lM():t,b)}else return s.f9(0,b)},
f9:function(a,b){var u,t,s,r=this
H.D(b,H.r(r,0))
u=r.d
if(u==null)u=r.d=P.lM()
t=r.dj(b)
s=u[t]
if(s==null)u[t]=[r.bL(b)]
else{if(r.bO(s,b)>=0)return!1
s.push(r.bL(b))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hJ(this.c,b)
else return this.hI(0,b)},
hI:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.ds(r,b)
t=s.bO(u,b)
if(t<0)return!1
s.dL(u.splice(t,1)[0])
return!0},
de:function(a,b){H.D(b,H.r(this,0))
if(H.f(a[b],"$icj")!=null)return!1
a[b]=this.bL(b)
return!0},
hJ:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$icj")
if(u==null)return!1
this.dL(u)
delete a[b]
return!0},
dg:function(){this.r=1073741823&this.r+1},
bL:function(a){var u,t=this,s=new P.cj(H.D(a,H.r(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dg()
return s},
dL:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dg()},
dj:function(a){return J.dx(a)&1073741823},
ds:function(a,b){return a[this.dj(b)]},
bO:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.X(a[t].a,b))return t
return-1}}
P.cj.prototype={}
P.eM.prototype={
gK:function(a){return this.d},
D:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bn(t))
else{t=u.c
if(t==null){u.sdf(null)
return!1}else{u.sdf(H.D(t.a,H.r(u,0)))
u.c=u.c.b
return!0}}},
sdf:function(a){this.d=H.D(a,H.r(this,0))},
$ib9:1}
P.hw.prototype={
$2:function(a,b){this.a.k(0,H.D(a,this.b),H.D(b,this.c))},
$S:7}
P.hx.prototype={$ii:1,$ib:1}
P.z.prototype={
gU:function(a){return new H.cM(a,this.gn(a),[H.bV(this,a,"z",0)])},
L:function(a,b){return this.j(a,b)},
js:function(a,b){var u,t=this,s=H.d([],[H.bV(t,a,"z",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.k(s,u,t.j(a,u))
return s},
jr:function(a){return this.js(a,!0)},
p:function(a,b){var u,t=this,s=[H.bV(t,a,"z",0)]
H.l(b,"$ib",s,"$ab")
u=H.d([],s)
C.a.sn(u,C.e.p(t.gn(a),b.gn(b)))
C.a.bl(u,0,t.gn(a),a)
C.a.bl(u,t.gn(a),u.length,b)
return u},
iL:function(a,b,c,d){var u
H.D(d,H.bV(this,a,"z",0))
P.bv(b,c,this.gn(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.lx(a,"[","]")}}
P.hz.prototype={}
P.hA.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.j(a)
t.a=u+": "
t.a+=H.j(b)},
$S:7}
P.ag.prototype={
I:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bV(s,a,"ag",0),H.bV(s,a,"ag",1)]})
for(u=J.bA(s.ga9(a));u.D();){t=u.gK(u)
b.$2(t,s.j(a,t))}},
gn:function(a){return J.aG(this.ga9(a))},
i:function(a){return P.lD(a)},
$iA:1}
P.kn.prototype={
k:function(a,b,c){H.D(b,H.r(this,0))
H.D(c,H.r(this,1))
throw H.c(P.J("Cannot modify unmodifiable map"))}}
P.hB.prototype={
j:function(a,b){return J.dw(this.a,b)},
k:function(a,b,c){J.lo(this.a,H.D(b,H.r(this,0)),H.D(c,H.r(this,1)))},
I:function(a,b){J.m7(this.a,H.n(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gn:function(a){return J.aG(this.a)},
i:function(a){return J.at(this.a)},
$iA:1}
P.ep.prototype={}
P.k9.prototype={
ae:function(a,b){var u
for(u=J.bA(H.l(b,"$ii",this.$ti,"$ai"));u.D();)this.h(0,u.gK(u))},
i:function(a){return P.lx(this,"{","}")},
L:function(a,b){var u,t,s,r=this
P.lE(b,"index")
for(u=P.p1(r,r.r,H.r(r,0)),t=0;u.D();){s=u.d
if(b===t)return s;++t}throw H.c(P.a1(b,r,"index",null,t))},
$ii:1,
$imA:1}
P.eN.prototype={}
P.fg.prototype={}
P.fG.prototype={
j0:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bv(a0,a1,b.length)
u=$.nL()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.G(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kO(C.b.G(b,n))
j=H.kO(C.b.G(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.b.a0("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ak("")
g=r.a+=C.b.C(b,s,t)
r.a=g+H.cb(m)
s=n
continue}}throw H.c(P.a8("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.C(b,s,a1)
f=g.length
if(q>=0)P.mb(b,p,a1,q,o,f)
else{e=C.e.bk(f-1,4)+1
if(e===1)throw H.c(P.a8(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aY(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.mb(b,p,a1,q,o,d)
else{e=C.e.bk(d,4)
if(e===1)throw H.c(P.a8(c,b,a1))
if(e>1)b=C.b.aY(b,a1,a1,e===2?"==":"=")}return b},
$ac2:function(){return[[P.b,P.m],P.h]}}
P.fH.prototype={
$abE:function(){return[[P.b,P.m],P.h]}}
P.c2.prototype={}
P.bE.prototype={}
P.h3.prototype={
$ac2:function(){return[P.h,[P.b,P.m]]}}
P.hj.prototype={
i:function(a){return this.a}}
P.hi.prototype={
fk:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.ak("")
if(r>b)q.a+=C.b.C(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nY(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abE:function(){return[P.h,P.h]}}
P.jl.prototype={
giK:function(){return C.N}}
P.jn.prototype={
cm:function(a){var u,t,s=P.bv(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kt(u)
if(t.fz(a,0,s)!==s)t.dN(J.nU(a,s-1),0)
return new Uint8Array(u.subarray(0,H.ph(0,t.b,u.length)))},
$abE:function(){return[P.h,[P.b,P.m]]}}
P.kt.prototype={
dN:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fz:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.a0(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.G(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dN(r,C.b.G(a,p)))s=p}else if(r<=2047){q=n.b
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
cm:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ib",[P.m],"$ab")
u=P.oO(!1,a,0,null)
if(u!=null)return u
t=P.bv(0,null,J.aG(a))
s=P.n4(a,0,t)
if(s>0){r=P.d_(a,0,s)
if(s===t)return r
q=new P.ak(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ak("")
n=new P.ks(!1,q)
n.c=o
n.iy(a,p,t)
if(n.e>0){H.B(P.a8("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.cb(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abE:function(){return[[P.b,P.m],P.h]}}
P.ks.prototype={
iy:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.l(a,"$ib",[P.m],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.cr(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.ao()
if((o&192)!==128){n=P.a8(h+C.e.bj(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.e(C.w,n)
if(u<=C.w[n]){n=P.a8("Overlong encoding of 0x"+C.e.bj(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a8("Character outside valid Unicode range: 0x"+C.e.bj(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.cb(u)
i.c=!1}for(n=p<c;n;){m=P.n4(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.d_(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.S()
if(o<0){j=P.a8("Negative UTF-8 code unit: -0x"+C.e.bj(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a8(h+C.e.bj(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.R.prototype={}
P.aB.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.aB&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.e.aV(u,30))&1073741823},
i:function(a){var u=this,t=P.o5(H.ox(u)),s=P.dH(H.ov(u)),r=P.dH(H.or(u)),q=P.dH(H.os(u)),p=P.dH(H.ou(u)),o=P.dH(H.ow(u)),n=P.o6(H.ot(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.q.prototype={}
P.b8.prototype={
p:function(a,b){return new P.b8(C.e.p(this.a,b.gdq()))},
u:function(a,b){return new P.b8(C.e.u(this.a,b.gdq()))},
au:function(a,b){return C.e.au(this.a,b.gdq())},
w:function(a,b){if(b==null)return!1
return b instanceof P.b8&&this.a===b.a},
gJ:function(a){return C.e.gJ(this.a)},
i:function(a){var u,t,s,r=new P.h0(),q=this.a
if(q<0)return"-"+new P.b8(0-q).i(0)
u=r.$1(C.e.ad(q,6e7)%60)
t=r.$1(C.e.ad(q,1e6)%60)
s=new P.h_().$1(q%1e6)
return""+C.e.ad(q,36e8)+":"+H.j(u)+":"+H.j(t)+"."+H.j(s)}}
P.h_.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:17}
P.h0.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:17}
P.bG.prototype={}
P.fA.prototype={
i:function(a){return"Assertion failed"}}
P.e4.prototype={
i:function(a){return"Throw of null."}}
P.aS.prototype={
gbN:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbM:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbN()+o+u
if(!q.a)return t
s=q.gbM()
r=P.dL(q.b)
return t+s+": "+r}}
P.cc.prototype={
gbN:function(){return"RangeError"},
gbM:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.j(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.j(s)
else if(t>s)u=": Not in range "+H.j(s)+".."+H.j(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.j(s)}return u}}
P.hl.prototype={
gbN:function(){return"RangeError"},
gbM:function(){var u,t=H.a6(this.b)
if(typeof t!=="number")return t.S()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.j(u)},
gn:function(a){return this.f}}
P.je.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.jb.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ce.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fN.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dL(u)+"."}}
P.i8.prototype={
i:function(a){return"Out of Memory"},
$ibG:1}
P.eg.prototype={
i:function(a){return"Stack Overflow"},
$ibG:1}
P.fU.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eF.prototype={
i:function(a){return"Exception: "+this.a}}
P.hd.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.C(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.G(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.a0(f,q)
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
k=""}j=C.b.C(f,m,n)
return h+l+j+k+"\n"+C.b.A(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.j(g)+")"):h}}
P.bH.prototype={}
P.m.prototype={}
P.i.prototype={
bF:function(a,b){var u=H.ao(this,"i",0)
return new H.da(this,H.n(b,{func:1,ret:P.R,args:[u]}),[u])},
gn:function(a){var u,t=this.gU(this)
for(u=0;t.D();)++u
return u},
gaO:function(a){var u,t=this.gU(this)
if(!t.D())throw H.c(H.hm())
u=t.gK(t)
if(t.D())throw H.c(H.od())
return u},
L:function(a,b){var u,t,s
P.lE(b,"index")
for(u=this.gU(this),t=0;u.D();){s=u.gK(u)
if(b===t)return s;++t}throw H.c(P.a1(b,this,"index",null,t))},
i:function(a){return P.ob(this,"(",")")}}
P.b9.prototype={}
P.b.prototype={$ii:1}
P.A.prototype={}
P.N.prototype={
gJ:function(a){return P.Q.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.ac.prototype={}
P.Q.prototype={constructor:P.Q,$iQ:1,
w:function(a,b){return this===b},
gJ:function(a){return H.cV(this)},
i:function(a){return"Instance of '"+H.ca(this)+"'"},
toString:function(){return this.i(this)}}
P.ay.prototype={}
P.h.prototype={$imq:1}
P.ak.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iqp:1}
P.jj.prototype={
$2:function(a,b){var u,t,s,r=P.h
H.l(a,"$iA",[r,r],"$aA")
H.K(b)
u=J.dt(b).eh(b,"=")
if(u===-1){if(b!=="")J.lo(a,P.lO(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.C(b,0,u)
s=C.b.af(b,u+1)
r=this.a
J.lo(a,P.lO(t,0,t.length,r,!0),P.lO(s,0,s.length,r,!0))}return a},
$S:50}
P.jg.prototype={
$2:function(a,b){throw H.c(P.a8("Illegal IPv4 address, "+a,this.a,b))},
$S:48}
P.jh.prototype={
$2:function(a,b){throw H.c(P.a8("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:47}
P.ji.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fw(C.b.C(this.b,a,b),null,16)
if(typeof u!=="number")return u.S()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:46}
P.ck.prototype={
geH:function(){return this.b},
gcA:function(a){var u=this.c
if(u==null)return""
if(C.b.a8(u,"["))return C.b.C(u,1,u.length-1)
return u},
gbz:function(a){var u=this.d
if(u==null)return P.mU(this.a)
return u},
gcM:function(a){var u=this.f
return u==null?"":u},
gec:function(){var u=this.r
return u==null?"":u},
ev:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.l(b,"$iA",[P.h,null],"$aA")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a8(p,"/"))p="/"+p
n=P.lN(null,0,0,b)
return new P.ck(u,s,q,r,p,n,m.r)},
gcN:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.h
s.shH(new P.ep(P.mK(u==null?"":u),[t,t]))}return s.Q},
ged:function(){return this.c!=null},
geg:function(){return this.f!=null},
gee:function(){return this.r!=null},
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
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.T(b).$ilH)if(s.a==b.gbH())if(s.c!=null===b.ged())if(s.b==b.geH())if(s.gcA(s)==b.gcA(b))if(s.gbz(s)==b.gbz(b))if(s.e===b.ger(b)){u=s.f
t=u==null
if(!t===b.geg()){if(t)u=""
if(u===b.gcM(b)){u=s.r
t=u==null
if(!t===b.gee()){if(t)u=""
u=u===b.gec()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gJ:function(a){var u=this.z
return u==null?this.z=C.b.gJ(this.i(0)):u},
shH:function(a){var u=P.h
this.Q=H.l(a,"$iA",[u,u],"$aA")},
$ilH:1,
gbH:function(){return this.a},
ger:function(a){return this.e}}
P.ko.prototype={
$1:function(a){throw H.c(P.a8("Invalid port",this.a,this.b+1))},
$S:45}
P.kp.prototype={
$1:function(a){return P.fh(C.X,a,C.h,!1)},
$S:20}
P.kr.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.j(P.fh(C.n,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.j(P.fh(C.n,b,C.h,!0))}},
$S:21}
P.kq.prototype={
$2:function(a,b){var u,t
H.K(a)
if(b==null||typeof b==="string")this.a.$2(a,H.K(b))
else for(u=J.bA(H.nl(b,"$ii")),t=this.a;u.D();)t.$2(a,H.K(u.gK(u)))},
$S:43}
P.jf.prototype={
geG:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.e(o,0)
u=q.a
o=o[0]+1
t=C.b.ei(u,"?",o)
s=u.length
if(t>=0){r=P.dp(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jM("data",p,p,p,P.dp(u,o,s,C.A,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.e(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kz.prototype={
$1:function(a){return new Uint8Array(96)},
$S:41}
P.ky.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.nV(u,0,96,b)
return u},
$S:58}
P.kA.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.G(b,s)^96
if(r>=t)return H.e(a,r)
a[r]=c}}}
P.kB.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.G(b,0),t=C.b.G(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.e(a,r)
a[r]=c}}}
P.kc.prototype={
ged:function(){return this.c>0},
gef:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.F(t)
t=u+1<t
u=t}else u=!1
return u},
geg:function(){var u=this.f
if(typeof u!=="number")return u.S()
return u<this.r},
gee:function(){return this.r<this.a.length},
gdu:function(){return this.b===4&&C.b.a8(this.a,"http")},
gdv:function(){return this.b===5&&C.b.a8(this.a,"https")},
gbH:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdu())q=t.x="http"
else if(t.gdv()){t.x="https"
q="https"}else if(q===4&&C.b.a8(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a8(t.a,r)){t.x=r
q=r}else{q=C.b.C(t.a,0,q)
t.x=q}return q},
geH:function(){var u=this.c,t=this.b+3
return u>t?C.b.C(this.a,t,u-1):""},
gcA:function(a){var u=this.c
return u>0?C.b.C(this.a,u,this.d):""},
gbz:function(a){var u,t=this
if(t.gef()){u=t.d
if(typeof u!=="number")return u.p()
return P.fw(C.b.C(t.a,u+1,t.e),null,null)}if(t.gdu())return 80
if(t.gdv())return 443
return 0},
ger:function(a){return C.b.C(this.a,this.e,this.f)},
gcM:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.S()
return u<t?C.b.C(this.a,u+1,t):""},
gec:function(){var u=this.r,t=this.a
return u<t.length?C.b.af(t,u+1):""},
gcN:function(){var u=this,t=u.f
if(typeof t!=="number")return t.S()
if(t>=u.r)return C.Y
t=P.h
return new P.ep(P.mK(u.gcM(u)),[t,t])},
ev:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.l(b,"$iA",[P.h,null],"$aA")
u=k.gbH()
t=u==="file"
s=k.c
r=s>0?C.b.C(k.a,k.b+3,s):""
q=k.gef()?k.gbz(k):j
s=k.c
if(s>0)p=C.b.C(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.C(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a8(o,"/"))o="/"+o
m=P.lN(j,0,0,b)
n=k.r
l=n<s.length?C.b.af(s,n+1):j
return new P.ck(u,r,p,q,o,m,l)},
gJ:function(a){var u=this.y
return u==null?this.y=C.b.gJ(this.a):u},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.T(b).$ilH&&this.a===b.i(0)},
i:function(a){return this.a},
$ilH:1}
P.jM.prototype={}
W.y.prototype={}
W.fy.prototype={
gn:function(a){return a.length}}
W.dy.prototype={
i:function(a){return String(a)},
$idy:1}
W.fz.prototype={
i:function(a){return String(a)}}
W.cx.prototype={$icx:1}
W.c_.prototype={$ic_:1}
W.bB.prototype={$ibB:1}
W.c1.prototype={
cX:function(a,b,c){if(c!=null)return a.getContext(b,P.pP(c))
return a.getContext(b)},
eJ:function(a,b){return this.cX(a,b,null)},
$ic1:1}
W.cB.prototype={$icB:1}
W.bC.prototype={
gn:function(a){return a.length}}
W.cD.prototype={$icD:1}
W.fQ.prototype={
gn:function(a){return a.length}}
W.Y.prototype={$iY:1}
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
W.aI.prototype={$iaI:1}
W.fX.prototype={
i:function(a){return String(a)}}
W.dI.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.l(c,"$ian",[P.ac],"$aan")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[[P.an,P.ac]]},
$az:function(){return[[P.an,P.ac]]},
$ii:1,
$ai:function(){return[[P.an,P.ac]]},
$ib:1,
$ab:function(){return[[P.an,P.ac]]},
$aI:function(){return[[P.an,P.ac]]}}
W.dJ.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gaN(a))+" x "+H.j(this.gaH(a))},
w:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$ian)return!1
return a.left===u.gbx(b)&&a.top===u.gbC(b)&&this.gaN(a)===u.gaN(b)&&this.gaH(a)===u.gaH(b)},
gJ:function(a){return W.mS(C.c.gJ(a.left),C.c.gJ(a.top),C.c.gJ(this.gaN(a)),C.c.gJ(this.gaH(a)))},
gdW:function(a){return a.bottom},
gaH:function(a){return a.height},
gbx:function(a){return a.left},
gcR:function(a){return a.right},
gbC:function(a){return a.top},
gaN:function(a){return a.width},
$ian:1,
$aan:function(){return[P.ac]}}
W.fY.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.K(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[P.h]},
$az:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aI:function(){return[P.h]}}
W.fZ.prototype={
gn:function(a){return a.length}}
W.jK.prototype={
gn:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.f(u[b],"$iV")},
k:function(a,b,c){var u
H.f(c,"$iV")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gU:function(a){var u=this.jr(this)
return new J.au(u,u.length,[H.r(u,0)])},
$az:function(){return[W.V]},
$ai:function(){return[W.V]},
$ab:function(){return[W.V]}}
W.V.prototype={
git:function(a){return new W.jN(a)},
gcl:function(a){return new W.jK(a,a.children)},
gdZ:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.S()
if(s<0)s=-s*0
if(typeof r!=="number")return r.S()
if(r<0)r=-r*0
return new P.an(u,t,s,r,[P.ac])},
i:function(a){return a.localName},
al:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.mi
if(u==null){u=H.d([],[W.aE])
t=new W.e3(u)
C.a.h(u,W.mR(null))
C.a.h(u,W.mT())
$.mi=t
d=t}else d=u
u=$.mh
if(u==null){u=new W.fi(d)
$.mh=u
c=u}else{u.a=d
c=u}}if($.bo==null){u=document
t=u.implementation.createHTMLDocument("")
$.bo=t
$.lv=t.createRange()
t=$.bo.createElement("base")
H.f(t,"$icx")
t.href=u.baseURI
$.bo.head.appendChild(t)}u=$.bo
if(u.body==null){t=u.createElement("body")
u.body=H.f(t,"$ibB")}u=$.bo
if(!!this.$ibB)s=u.body
else{s=u.createElement(a.tagName)
$.bo.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.V(C.V,a.tagName)){$.lv.selectNodeContents(s)
r=$.lv.createContextualFragment(b)}else{s.innerHTML=b
r=$.bo.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bo.body
if(s==null?u!=null:s!==u)J.m9(s)
c.cY(r)
document.adoptNode(r)
return r},
iB:function(a,b,c){return this.al(a,b,c,null)},
eL:function(a,b){a.textContent=null
a.appendChild(this.al(a,b,null,null))},
$iV:1,
gey:function(a){return a.tagName}}
W.h2.prototype={
$1:function(a){return!!J.T(H.f(a,"$iH")).$iV},
$S:25}
W.o.prototype={$io:1}
W.k.prototype={
ii:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.fa(a,b,c,!1)},
fa:function(a,b,c,d){return a.addEventListener(b,H.co(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ik:1}
W.aJ.prototype={$iaJ:1}
W.cH.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaJ")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aJ]},
$az:function(){return[W.aJ]},
$ii:1,
$ai:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$icH:1,
$aI:function(){return[W.aJ]}}
W.h8.prototype={
gn:function(a){return a.length}}
W.hc.prototype={
gn:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.hh.prototype={
gn:function(a){return a.length}}
W.c5.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iH")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.H]},
$az:function(){return[W.H]},
$ii:1,
$ai:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$ic5:1,
$aI:function(){return[W.H]}}
W.bp.prototype={$ibp:1,
ge_:function(a){return a.data}}
W.cK.prototype={$icK:1}
W.cL.prototype={$icL:1}
W.ba.prototype={$iba:1}
W.dU.prototype={
i:function(a){return String(a)},
$idU:1}
W.hR.prototype={
gn:function(a){return a.length}}
W.cO.prototype={$icO:1}
W.hS.prototype={
j:function(a,b){return P.bw(a.get(H.K(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bw(t.value[1]))}},
ga9:function(a){var u=H.d([],[P.h])
this.I(a,new W.hT(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.J("Not supported"))},
$aag:function(){return[P.h,null]},
$iA:1,
$aA:function(){return[P.h,null]}}
W.hT.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hU.prototype={
j:function(a,b){return P.bw(a.get(H.K(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bw(t.value[1]))}},
ga9:function(a){var u=H.d([],[P.h])
this.I(a,new W.hV(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.J("Not supported"))},
$aag:function(){return[P.h,null]},
$iA:1,
$aA:function(){return[P.h,null]}}
W.hV.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aV.prototype={$iaV:1}
W.hW.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaV")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aV]},
$az:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aI:function(){return[W.aV]}}
W.ah.prototype={$iah:1}
W.ar.prototype={
gaO:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.mB("No elements"))
if(t>1)throw H.c(P.mB("More than one element"))
return u.firstChild},
ae:function(a,b){var u,t,s,r
H.l(b,"$ii",[W.H],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
k:function(a,b,c){var u,t
H.f(c,"$iH")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
u.replaceChild(c,t[b])},
gU:function(a){var u=this.a.childNodes
return new W.dM(u,u.length,[H.bV(C.Z,u,"I",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$az:function(){return[W.H]},
$ai:function(){return[W.H]},
$ab:function(){return[W.H]}}
W.H.prototype={
jg:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
jj:function(a,b){var u,t
try{u=a.parentNode
J.nS(u,b,a)}catch(t){H.al(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eO(a):u},
io:function(a,b){return a.appendChild(H.f(b,"$iH"))},
hM:function(a,b,c){return a.replaceChild(b,c)},
$iH:1}
W.cT.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iH")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.H]},
$az:function(){return[W.H]},
$ii:1,
$ai:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aI:function(){return[W.H]}}
W.aW.prototype={$iaW:1,
gn:function(a){return a.length}}
W.ib.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaW")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aW]},
$az:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aI:function(){return[W.aW]}}
W.im.prototype={
j:function(a,b){return P.bw(a.get(H.K(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bw(t.value[1]))}},
ga9:function(a){var u=H.d([],[P.h])
this.I(a,new W.io(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.J("Not supported"))},
$aag:function(){return[P.h,null]},
$iA:1,
$aA:function(){return[P.h,null]}}
W.io.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.iq.prototype={
gn:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.iB.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaX")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aX]},
$az:function(){return[W.aX]},
$ii:1,
$ai:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aI:function(){return[W.aX]}}
W.aY.prototype={$iaY:1}
W.iC.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaY")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aY]},
$az:function(){return[W.aY]},
$ii:1,
$ai:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aI:function(){return[W.aY]}}
W.aZ.prototype={$iaZ:1,
gn:function(a){return a.length}}
W.iF.prototype={
j:function(a,b){return a.getItem(H.K(b))},
k:function(a,b,c){a.setItem(b,c)},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga9:function(a){var u=H.d([],[P.h])
this.I(a,new W.iG(u))
return u},
gn:function(a){return a.length},
$aag:function(){return[P.h,P.h]},
$iA:1,
$aA:function(){return[P.h,P.h]}}
W.iG.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:21}
W.aM.prototype={$iaM:1}
W.bf.prototype={$ibf:1}
W.eh.prototype={
al:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bJ(a,b,c,d)
u=W.o7("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ar(t).ae(0,new W.ar(u))
return t}}
W.iM.prototype={
al:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bJ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.al(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaO(u)
s.toString
u=new W.ar(s)
r=u.gaO(u)
t.toString
r.toString
new W.ar(t).ae(0,new W.ar(r))
return t}}
W.iN.prototype={
al:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bJ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.al(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaO(u)
t.toString
s.toString
new W.ar(t).ae(0,new W.ar(s))
return t}}
W.d1.prototype={$id1:1}
W.b_.prototype={$ib_:1}
W.aN.prototype={$iaN:1}
W.iP.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaN")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aN]},
$az:function(){return[W.aN]},
$ii:1,
$ai:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aI:function(){return[W.aN]}}
W.iQ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$ib_")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.b_]},
$az:function(){return[W.b_]},
$ii:1,
$ai:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aI:function(){return[W.b_]}}
W.iU.prototype={
gn:function(a){return a.length}}
W.b0.prototype={$ib0:1}
W.b1.prototype={$ib1:1}
W.iY.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$ib0")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.b0]},
$az:function(){return[W.b0]},
$ii:1,
$ai:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aI:function(){return[W.b0]}}
W.iZ.prototype={
gn:function(a){return a.length}}
W.bP.prototype={}
W.jk.prototype={
i:function(a){return String(a)}}
W.jC.prototype={
gn:function(a){return a.length}}
W.bj.prototype={
giE:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.J("deltaY is not supported"))},
giD:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.J("deltaX is not supported"))},
$ibj:1}
W.db.prototype={
hN:function(a,b){return a.requestAnimationFrame(H.co(H.n(b,{func:1,ret:-1,args:[P.ac]}),1))},
fq:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.dc.prototype={$idc:1}
W.jL.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iY")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.Y]},
$az:function(){return[W.Y]},
$ii:1,
$ai:function(){return[W.Y]},
$ib:1,
$ab:function(){return[W.Y]},
$aI:function(){return[W.Y]}}
W.eA.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
w:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$ian)return!1
return a.left===u.gbx(b)&&a.top===u.gbC(b)&&a.width===u.gaN(b)&&a.height===u.gaH(b)},
gJ:function(a){return W.mS(C.c.gJ(a.left),C.c.gJ(a.top),C.c.gJ(a.width),C.c.gJ(a.height))},
gaH:function(a){return a.height},
gaN:function(a){return a.width}}
W.k_.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaT")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aT]},
$az:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aI:function(){return[W.aT]}}
W.eS.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iH")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.H]},
$az:function(){return[W.H]},
$ii:1,
$ai:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aI:function(){return[W.H]}}
W.kd.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaZ")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aZ]},
$az:function(){return[W.aZ]},
$ii:1,
$ai:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aI:function(){return[W.aZ]}}
W.kh.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaM")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aM]},
$az:function(){return[W.aM]},
$ii:1,
$ai:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aI:function(){return[W.aM]}}
W.jJ.prototype={
I:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.ga9(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.v)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga9:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.e(r,t)
s=H.f(r[t],"$idc")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aag:function(){return[P.h,P.h]},
$aA:function(){return[P.h,P.h]}}
W.jN.prototype={
j:function(a,b){return this.a.getAttribute(H.K(b))},
k:function(a,b,c){this.a.setAttribute(b,c)},
gn:function(a){return this.ga9(this).length}}
W.jO.prototype={}
W.lL.prototype={}
W.jP.prototype={}
W.jQ.prototype={
$1:function(a){return this.a.$1(H.f(a,"$io"))},
$S:40}
W.bT.prototype={
eZ:function(a){var u
if($.de.giW($.de)){for(u=0;u<262;++u)$.de.k(0,C.U[u],W.pZ())
for(u=0;u<12;++u)$.de.k(0,C.q[u],W.q_())}},
aW:function(a){return $.nM().V(0,W.cF(a))},
ax:function(a,b,c){var u=$.de.j(0,H.j(W.cF(a))+"::"+b)
if(u==null)u=$.de.j(0,"*::"+b)
if(u==null)return!1
return H.lT(u.$4(a,b,c,this))},
$iaE:1}
W.I.prototype={
gU:function(a){return new W.dM(a,this.gn(a),[H.bV(this,a,"I",0)])}}
W.e3.prototype={
aW:function(a){return C.a.dT(this.a,new W.i3(a))},
ax:function(a,b,c){return C.a.dT(this.a,new W.i2(a,b,c))},
$iaE:1}
W.i3.prototype={
$1:function(a){return H.f(a,"$iaE").aW(this.a)},
$S:27}
W.i2.prototype={
$1:function(a){return H.f(a,"$iaE").ax(this.a,this.b,this.c)},
$S:27}
W.f_.prototype={
f4:function(a,b,c,d){var u,t,s
this.a.ae(0,c)
u=b.bF(0,new W.ka())
t=b.bF(0,new W.kb())
this.b.ae(0,u)
s=this.c
s.ae(0,C.x)
s.ae(0,t)},
aW:function(a){return this.a.V(0,W.cF(a))},
ax:function(a,b,c){var u=this,t=W.cF(a),s=u.c
if(s.V(0,H.j(t)+"::"+b))return u.d.il(c)
else if(s.V(0,"*::"+b))return u.d.il(c)
else{s=u.b
if(s.V(0,H.j(t)+"::"+b))return!0
else if(s.V(0,"*::"+b))return!0
else if(s.V(0,H.j(t)+"::*"))return!0
else if(s.V(0,"*::*"))return!0}return!1},
$iaE:1}
W.ka.prototype={
$1:function(a){return!C.a.V(C.q,H.K(a))},
$S:28}
W.kb.prototype={
$1:function(a){return C.a.V(C.q,H.K(a))},
$S:28}
W.kj.prototype={
ax:function(a,b,c){if(this.eS(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.V(0,b)
return!1}}
W.kk.prototype={
$1:function(a){return"TEMPLATE::"+H.j(H.K(a))},
$S:20}
W.ki.prototype={
aW:function(a){var u=J.T(a)
if(!!u.$icW)return!1
u=!!u.$ip
if(u&&W.cF(a)==="foreignObject")return!1
if(u)return!0
return!1},
ax:function(a,b,c){if(b==="is"||C.b.a8(b,"on"))return!1
return this.aW(a)},
$iaE:1}
W.dM.prototype={
D:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdt(J.dw(u.a,t))
u.c=t
return!0}u.sdt(null)
u.c=s
return!1},
gK:function(a){return this.d},
sdt:function(a){this.d=H.D(a,H.r(this,0))},
$ib9:1}
W.aE.prototype={}
W.k8.prototype={$iqC:1}
W.fi.prototype={
cY:function(a){new W.ku(this).$2(a,null)},
b5:function(a,b){if(b==null)J.m9(a)
else b.removeChild(a)},
hS:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nW(a)
n=o.a.getAttribute("is")
H.f(a,"$iV")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.G(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.al(r)}t="element unprintable"
try{t=J.at(a)}catch(r){H.al(r)}try{s=W.cF(a)
this.hR(H.f(a,"$iV"),b,p,t,s,H.f(o,"$iA"),H.K(n))}catch(r){if(H.al(r) instanceof P.aS)throw r
else{this.b5(a,b)
window
q="Removing corrupted element "+H.j(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hR:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b5(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aW(a)){o.b5(a,b)
window
u="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.ax(a,"is",g)){o.b5(a,b)
window
u="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga9(f)
t=H.d(u.slice(0),[H.r(u,0)])
for(s=f.ga9(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.e(t,s)
r=t[s]
q=o.a
p=J.nZ(r)
H.K(r)
if(!q.ax(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.j(e)+" "+r+'="'+H.j(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.T(a).$id1)o.cY(a.content)},
$iqn:1}
W.ku.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hS(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b5(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.al(s)
r=H.f(u,"$iH")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.f(t,"$iH")}},
$S:39}
W.ez.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f5.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
P.ke.prototype={
eb:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cV:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.T(a)
if(!!u.$iaB)return new Date(a.a)
if(!!u.$ioB)throw H.c(P.jc("structured clone of RegExp"))
if(!!u.$iaJ)return a
if(!!u.$ic_)return a
if(!!u.$icH)return a
if(!!u.$ibp)return a
if(!!u.$icQ||!!u.$ibM||!!u.$icO)return a
if(!!u.$iA){t=q.eb(a)
s=q.b
if(t>=s.length)return H.e(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.I(a,new P.kg(p,q))
return p.a}if(!!u.$ib){t=q.eb(a)
p=q.b
if(t>=p.length)return H.e(p,t)
r=p[t]
if(r!=null)return r
return q.iA(a,t)}throw H.c(P.jc("structured clone of other type"))},
iA:function(a,b){var u,t=J.cr(a),s=t.gn(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.cV(t.j(a,u)))
return r}}
P.kg.prototype={
$2:function(a,b){this.a.a[a]=this.b.cV(b)},
$S:7}
P.ff.prototype={$ibp:1,
ge_:function(a){return this.a}}
P.kH.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.kf.prototype={}
P.h9.prototype={
gbp:function(){var u=this.b,t=H.ao(u,"z",0),s=W.V
return new H.hC(new H.da(u,H.n(new P.ha(),{func:1,ret:P.R,args:[t]}),[t]),H.n(new P.hb(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.f(c,"$iV")
u=this.gbp()
J.nX(u.b.$1(J.fx(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aG(this.gbp().a)},
j:function(a,b){var u=this.gbp()
return u.b.$1(J.fx(u.a,b))},
gU:function(a){var u=P.mm(this.gbp(),!1,W.V)
return new J.au(u,u.length,[H.r(u,0)])},
$az:function(){return[W.V]},
$ai:function(){return[W.V]},
$ab:function(){return[W.V]}}
P.ha.prototype={
$1:function(a){return!!J.T(H.f(a,"$iH")).$iV},
$S:25}
P.hb.prototype={
$1:function(a){return H.w(H.f(a,"$iH"),"$iV")},
$S:38}
P.k3.prototype={
gcR:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.F(t)
return H.D(u+t,H.r(this,0))},
gdW:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.F(t)
return H.D(u+t,H.r(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.j(u.a)+", "+H.j(u.b)+") "+H.j(u.c)+" x "+H.j(u.d)},
w:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.T(b)
if(!!u.$ian){t=p.a
if(t==u.gbx(b)){s=p.b
if(s==u.gbC(b)){r=p.c
if(typeof t!=="number")return t.p()
if(typeof r!=="number")return H.F(r)
q=H.r(p,0)
if(H.D(t+r,q)===u.gcR(b)){t=p.d
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.F(t)
u=H.D(s+t,q)===u.gdW(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t=this,s=t.a,r=J.dx(s),q=t.b,p=J.dx(q),o=t.c
if(typeof s!=="number")return s.p()
if(typeof o!=="number")return H.F(o)
u=H.r(t,0)
o=C.e.gJ(H.D(s+o,u))
s=t.d
if(typeof q!=="number")return q.p()
if(typeof s!=="number")return H.F(s)
u=C.e.gJ(H.D(q+s,u))
return P.p0(P.k1(P.k1(P.k1(P.k1(0,r),p),o),u))}}
P.an.prototype={
gbx:function(a){return this.a},
gbC:function(a){return this.b},
gaN:function(a){return this.c},
gaH:function(a){return this.d}}
P.bb.prototype={$ibb:1}
P.hr.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibb")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[P.bb]},
$ii:1,
$ai:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$aI:function(){return[P.bb]}}
P.be.prototype={$ibe:1}
P.i6.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibe")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[P.be]},
$ii:1,
$ai:function(){return[P.be]},
$ib:1,
$ab:function(){return[P.be]},
$aI:function(){return[P.be]}}
P.id.prototype={
gn:function(a){return a.length}}
P.cW.prototype={$icW:1}
P.iL.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.K(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aI:function(){return[P.h]}}
P.p.prototype={
gcl:function(a){return new P.h9(a,new W.ar(a))},
al:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aE])
C.a.h(p,W.mR(null))
C.a.h(p,W.mT())
C.a.h(p,new W.ki())
c=new W.fi(new W.e3(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).iB(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ar(s)
q=p.gaO(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.bh.prototype={$ibh:1}
P.j_.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibh")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[P.bh]},
$ii:1,
$ai:function(){return[P.bh]},
$ib:1,
$ab:function(){return[P.bh]},
$aI:function(){return[P.bh]}}
P.eK.prototype={}
P.eL.prototype={}
P.eV.prototype={}
P.eW.prototype={}
P.f6.prototype={}
P.f7.prototype={}
P.fd.prototype={}
P.fe.prototype={}
P.S.prototype={$ii:1,
$ai:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]},
$ioL:1}
P.fC.prototype={
gn:function(a){return a.length}}
P.fD.prototype={
j:function(a,b){return P.bw(a.get(H.K(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bw(t.value[1]))}},
ga9:function(a){var u=H.d([],[P.h])
this.I(a,new P.fE(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.J("Not supported"))},
$aag:function(){return[P.h,null]},
$iA:1,
$aA:function(){return[P.h,null]}}
P.fE.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.fF.prototype={
gn:function(a){return a.length}}
P.bZ.prototype={}
P.i7.prototype={
gn:function(a){return a.length}}
P.ey.prototype={}
P.dB.prototype={$idB:1}
P.e7.prototype={$ie7:1}
P.cd.prototype={
jo:function(a,b,c,d,e,f,g){var u,t=J.T(g)
if(!!t.$ibp)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.pQ(g))
return}if(!!t.$icK)t=!0
else t=!1
if(t){this.i4(a,b,c,d,e,f,g)
return}throw H.c(P.dz("Incorrect number or type of arguments"))},
i4:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a6:function(a,b,c){return a.uniform1f(b,c)},
bE:function(a,b,c){return a.uniform1i(b,c)},
Y:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eD:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eE:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eF:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$icd:1}
P.ea.prototype={$iea:1}
P.ei.prototype={$iei:1}
P.en.prototype={$ien:1}
P.iD.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return P.bw(a.item(b))},
k:function(a,b,c){H.f(c,"$iA")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[[P.A,,,]]},
$ii:1,
$ai:function(){return[[P.A,,,]]},
$ib:1,
$ab:function(){return[[P.A,,,]]},
$aI:function(){return[[P.A,,,]]}}
P.f2.prototype={}
P.f3.prototype={}
O.a4.prototype={
bn:function(a){var u=this
u.sfE(H.d([],[a]))
u.sdC(null)
u.sdw(null)
u.sdD(null)},
cZ:function(a,b,c){var u=this,t=H.ao(u,"a4",0)
H.n(b,{func:1,ret:P.R,args:[[P.i,t]]})
t={func:1,ret:-1,args:[P.m,[P.i,t]]}
H.n(a,t)
H.n(c,t)
u.sdC(b)
u.sdw(a)
u.sdD(c)},
b_:function(a,b){return this.cZ(a,null,b)},
dB:function(a){var u
H.l(a,"$ii",[H.ao(this,"a4",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
d5:function(a,b){var u
H.l(b,"$ii",[H.ao(this,"a4",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.au(u,u.length,[H.r(u,0)])},
L:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ao(s,"a4",0)
H.D(b,r)
r=[r]
if(H.G(s.dB(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.d5(t,H.d([b],r))}},
ae:function(a,b){var u,t,s=this
H.l(b,"$ii",[H.ao(s,"a4",0)],"$ai")
if(H.G(s.dB(b))){u=s.a
t=u.length
C.a.ae(u,b)
s.d5(t,b)}},
sfE:function(a){this.a=H.l(a,"$ib",[H.ao(this,"a4",0)],"$ab")},
sdC:function(a){this.b=H.n(a,{func:1,ret:P.R,args:[[P.i,H.ao(this,"a4",0)]]})},
sdw:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.m,[P.i,H.ao(this,"a4",0)]]})},
sdD:function(a){H.n(a,{func:1,ret:-1,args:[P.m,[P.i,H.ao(this,"a4",0)]]})},
$ii:1}
O.cN.prototype={
gn:function(a){return this.a.length},
gq:function(){var u=this.b
return u==null?this.b=D.P():u},
aP:function(){var u=this.b
if(u!=null)u.F(null)},
ga7:function(a){var u=this.a
if(u.length>0)return C.a.gay(u)
else return V.c7()},
bB:function(a){var u=this.a
if(a==null)C.a.h(u,V.c7())
else C.a.h(u,a)
this.aP()},
aJ:function(){var u=this.a
if(u.length>0){u.pop()
this.aP()}},
sbS:function(a){this.a=H.l(a,"$ib",[V.av],"$ab")}}
E.fI.prototype={}
E.aq.prototype={
saa:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gq().M(0,s.geo())
u=s.c
if(u!=null)u.gq().h(0,s.geo())
t=new D.O("shape",r,s.c,[F.eb])
t.b=!0
s.by(t)}},
as:function(a,b){var u
for(u=this.y.a,u=new J.au(u,u.length,[H.r(u,0)]);u.D();)u.d.as(0,b)},
ah:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.ga7(s))
s.aP()
a.cL(t.f)
s=a.dy
u=(s&&C.a).gay(s)
if(u!=null&&t.d!=null)u.eu(a,t)
for(s=t.y.a,s=new J.au(s,s.length,[H.r(s,0)]);s.D();)s.d.ah(a)
a.cK()
a.dx.aJ()},
gq:function(){var u=this.z
return u==null?this.z=D.P():u},
by:function(a){var u=this.z
if(u!=null)u.F(a)},
a5:function(){return this.by(null)},
ep:function(a){H.f(a,"$iC")
this.e=null
this.by(a)},
j6:function(){return this.ep(null)},
en:function(a){this.by(H.f(a,"$iC"))},
j3:function(){return this.en(null)},
j2:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ii",[E.aq],"$ai")
for(u=b.length,t=this.gem(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c3()
o.sak(null)
o.saT(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a5()},
j5:function(a,b){var u,t
H.l(b,"$ii",[E.aq],"$ai")
for(u=b.gU(b),t=this.gem();u.D();)u.gK(u).gq().M(0,t)
this.a5()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seY:function(a,b){this.y=H.l(b,"$ia4",[E.aq],"$aa4")},
$ic8:1}
E.ii.prototype={
eV:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aB(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cN()
t=[V.av]
u.sbS(H.d([],t))
u.b=null
u.gq().h(0,new E.ij(s))
s.cy=u
u=new O.cN()
u.sbS(H.d([],t))
u.b=null
u.gq().h(0,new E.ik(s))
s.db=u
u=new O.cN()
u.sbS(H.d([],t))
u.b=null
u.gq().h(0,new E.il(s))
s.dx=u
s.si3(H.d([],[O.bO]))
u=s.dy;(u&&C.a).h(u,null)
s.shZ(new H.a5([P.h,A.cX]))},
gjf:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga7(s)
u=t.db
u=t.z=s.A(0,u.ga7(u))
s=u}return s},
cL:function(a){var u=this.dy,t=a==null?(u&&C.a).gay(u):a;(u&&C.a).h(u,t)},
cK:function(){var u=this.dy
if(u.length>1)u.pop()},
dS:function(a){var u=a.b
if(u.length===0)throw H.c(P.E("May not cache a shader with no name."))
if(this.fr.bu(0,u))throw H.c(P.E('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)},
si3:function(a){this.dy=H.l(a,"$ib",[O.bO],"$ab")},
shZ:function(a){this.fr=H.l(a,"$iA",[P.h,A.cX],"$aA")}}
E.ij.prototype={
$1:function(a){var u
H.f(a,"$iC")
u=this.a
u.ch=u.z=null},
$S:9}
E.ik.prototype={
$1:function(a){var u
H.f(a,"$iC")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:9}
E.il.prototype={
$1:function(a){var u
H.f(a,"$iC")
u=this.a
u.cx=u.ch=null},
$S:9}
E.ej.prototype={
d8:function(a){H.f(a,"$iC")
this.ew()},
d7:function(){return this.d8(null)},
giQ:function(){var u,t=this,s=Date.now(),r=C.e.ad(P.mg(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aB(s,!1)
return u/r},
dG:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.A()
if(typeof r!=="number")return H.F(r)
u=C.c.cz(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.A()
t=C.c.cz(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.mE(C.o,s.gjk())}},
ew:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iT(this),{func:1,ret:-1,args:[P.ac]})
C.E.fq(u)
C.E.hN(u,W.n7(t,P.ac))}},
ji:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dG()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aB(r,!1)
s.y=P.mg(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aP()
r=s.db
C.a.sn(r.a,0)
r.aP()
r=s.dx
C.a.sn(r.a,0)
r.aP()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.ah(p.e)}s=p.z
if(s!=null)s.F(null)}catch(q){u=H.al(q)
t=H.ct(q)
P.m1("Error: "+H.j(u))
P.m1("Stack: "+H.j(t))
throw H.c(u)}}}
E.iT.prototype={
$1:function(a){var u
H.nn(a)
u=this.a
if(u.ch){u.ch=!1
u.ji()}},
$S:37}
Z.ev.prototype={$iqh:1}
Z.dC.prototype={
a1:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.al(s)
t=P.E('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.j(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.j(u.e)+"]"}}
Z.ew.prototype={$iqi:1}
Z.cA.prototype={
aG:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a1:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a1(a)},
aM:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ah:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.at(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sfA:function(a){this.b=H.l(a,"$ib",[Z.bI],"$ab")},
$iqq:1}
Z.bI.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.ca(this.c)+"'")+"]"}}
Z.bS.prototype={
gd0:function(a){var u=this.a,t=(u&$.b3().a)!==0?3:0
if((u&$.bz().a)!==0)t+=3
if((u&$.by().a)!==0)t+=3
if((u&$.bX().a)!==0)t+=2
if((u&$.bY().a)!==0)t+=3
if((u&$.du().a)!==0)t+=3
if((u&$.dv().a)!==0)t+=4
if((u&$.cw().a)!==0)++t
return(u&$.bx().a)!==0?t+4:t},
ip:function(a){var u,t=$.b3(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bz()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.by()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bX()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bY()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.du()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bx()
if((s&t.a)!==0)if(u===a)return t
return $.nK()},
w:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bS))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.h]),t=this.a
if((t&$.b3().a)!==0)C.a.h(u,"Pos")
if((t&$.bz().a)!==0)C.a.h(u,"Norm")
if((t&$.by().a)!==0)C.a.h(u,"Binm")
if((t&$.bX().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bY().a)!==0)C.a.h(u,"TxtCube")
if((t&$.du().a)!==0)C.a.h(u,"Clr3")
if((t&$.dv().a)!==0)C.a.h(u,"Clr4")
if((t&$.cw().a)!==0)C.a.h(u,"Weight")
if((t&$.bx().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fL.prototype={}
D.c3.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.C]}
H.n(b,u)
if(this.a==null)this.sak(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
M:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.C]})
u=s.a
u=u==null?null:C.a.V(u,b)
if(u===!0){u=s.a
t=(u&&C.a).M(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.V(u,b)
if(u===!0){u=s.b
t=(u&&C.a).M(u,b)||t}return t},
F:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.C()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.I(P.mm(u,!0,{func:1,ret:-1,args:[D.C]}),new D.h5(q))
u=r.b
if(u!=null){r.saT(H.d([],[{func:1,ret:-1,args:[D.C]}]))
C.a.I(u,new D.h6(q))}return!0},
iH:function(){return this.F(null)},
az:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.F(u)}}},
sak:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.C]}],"$ab")},
saT:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.C]}],"$ab")}}
D.h5.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.C]})
u=this.a.a
u.b
a.$1(u)},
$S:33}
D.h6.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.C]})
u=this.a.a
u.b
a.$1(u)},
$S:33}
D.C.prototype={}
D.bJ.prototype={}
D.bK.prototype={}
D.O.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.dD.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dD))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.dR.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dR))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.hq.prototype={
jb:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
j7:function(a){this.c=a.b
this.d.M(0,a.a)
return!1},
shG:function(a){this.d=H.l(a,"$imA",[P.m],"$amA")}}
X.dV.prototype={}
X.hy.prototype={
b3:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.A()
u=b.b
t=q.ch
if(typeof u!=="number")return u.A()
s=new V.a7(o.a+n*m,o.b+u*t)
t=q.a.gaX()
r=new X.bt(a,V.bu(),q.x,t,s)
r.b=!0
q.z=new P.aB(p,!1)
q.x=s
return r},
cJ:function(a,b){this.r=a.a
return!1},
bg:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eK()
if(typeof u!=="number")return u.ao()
this.r=(u&~t)>>>0
return!1},
bf:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.b3(a,b))
return!0},
jc:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaX()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.A()
q=a.b
p=o.cy
if(typeof q!=="number")return q.A()
t=new X.cP(new V.W(s*r,q*p),u,t)
t.b=!0
n.F(t)
return!0},
hc:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dV(c,r.a.gaX(),b)
s.b=!0
t.F(s)
r.y=new P.aB(u,!1)
r.x=V.bu()}}
X.aD.prototype={
w:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aD))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.G(this.b)?"Alt+":""
return u+(H.G(this.c)?"Shift+":"")}}
X.bt.prototype={}
X.hX.prototype={
bP:function(a,b,c){var u=this,t=new P.aB(Date.now(),!1),s=u.a.gaX(),r=new X.bt(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cJ:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.F(this.bP(a,b,!0))
return!0},
bg:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eK()
if(typeof t!=="number")return t.ao()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.F(u.bP(a,b,!0))
return!0},
bf:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.bP(a,b,!1))
return!0},
jd:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaX()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.A()
r=a.b
q=p.ch
if(typeof r!=="number")return r.A()
u=new X.cP(new V.W(t*s,r*q),u,b)
u.b=!0
o.F(u)
return!0},
ge1:function(){var u=this.b
return u==null?this.b=D.P():u},
gcU:function(){var u=this.c
return u==null?this.c=D.P():u},
gel:function(){var u=this.d
return u==null?this.d=D.P():u}}
X.cP.prototype={}
X.ic.prototype={}
X.el.prototype={}
X.iX.prototype={
b3:function(a,b){var u,t,s,r,q=this
H.l(a,"$ib",[V.a7],"$ab")
u=new P.aB(Date.now(),!1)
t=a.length>0?a[0]:V.bu()
s=q.a.gaX()
r=new X.el(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
ja:function(a){var u
H.l(a,"$ib",[V.a7],"$ab")
u=this.b
if(u==null)return!1
u.F(this.b3(a,!0))
return!0},
j8:function(a){var u
H.l(a,"$ib",[V.a7],"$ab")
u=this.c
if(u==null)return!1
u.F(this.b3(a,!0))
return!0},
j9:function(a){var u
H.l(a,"$ib",[V.a7],"$ab")
u=this.d
if(u==null)return!1
u.F(this.b3(a,!1))
return!0}}
X.eq.prototype={
gaX:function(){var u=this.a,t=C.i.gdZ(u).c
t.toString
u=C.i.gdZ(u).d
u.toString
return V.my(0,0,t,u)},
dm:function(a){var u=a.keyCode,t=H.G(a.ctrlKey)||H.G(a.metaKey)
return new X.dR(u,new X.aD(t,a.altKey,a.shiftKey))},
aU:function(a){var u=this.b,t=H.G(a.ctrlKey)||H.G(a.metaKey)
u.c=new X.aD(t,a.altKey,a.shiftKey)},
ca:function(a){var u=this.b,t=H.G(a.ctrlKey)||H.G(a.metaKey)
u.c=new X.aD(t,a.altKey,a.shiftKey)},
aD:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.u()
u=t.top
if(typeof r!=="number")return r.u()
return new V.a7(s-q,r-u)},
b4:function(a){return new V.W(a.movementX,a.movementY)},
c4:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.a7])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
q=C.c.ar(r.pageX)
C.c.ar(r.pageY)
p=o.left
C.c.ar(r.pageX)
C.a.h(n,new V.a7(q-p,C.c.ar(r.pageY)-o.top))}return n},
aB:function(a){var u=a.buttons,t=H.G(a.ctrlKey)||H.G(a.metaKey)
return new X.dD(u,new X.aD(t,a.altKey,a.shiftKey))},
bT:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.u()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.u()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
h6:function(a){this.f=!0},
fV:function(a){this.f=!1},
h0:function(a){H.f(a,"$iah")
if(H.G(this.f)&&this.bT(a))a.preventDefault()},
ha:function(a){var u
H.f(a,"$iba")
if(!H.G(this.f))return
u=this.dm(a)
this.b.jb(u)},
h8:function(a){var u
H.f(a,"$iba")
if(!H.G(this.f))return
u=this.dm(a)
this.b.j7(u)},
he:function(a){var u,t,s,r,q=this
H.f(a,"$iah")
u=q.a
u.focus()
q.f=!0
q.aU(a)
if(H.G(q.x)){t=q.aB(a)
s=q.b4(a)
if(q.d.cJ(t,s))a.preventDefault()
return}if(H.G(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aB(a)
r=q.aD(a)
if(q.c.cJ(t,r))a.preventDefault()},
hi:function(a){var u,t,s,r=this
H.f(a,"$iah")
r.aU(a)
u=r.aB(a)
if(H.G(r.x)){t=r.b4(a)
if(r.d.bg(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aD(a)
if(r.c.bg(u,s))a.preventDefault()},
h4:function(a){var u,t,s,r=this
H.f(a,"$iah")
if(!r.bT(a)){r.aU(a)
u=r.aB(a)
if(H.G(r.x)){t=r.b4(a)
if(r.d.bg(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aD(a)
if(r.c.bg(u,s))a.preventDefault()}},
hg:function(a){var u,t,s,r=this
H.f(a,"$iah")
r.aU(a)
u=r.aB(a)
if(H.G(r.x)){t=r.b4(a)
if(r.d.bf(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aD(a)
if(r.c.bf(u,s))a.preventDefault()},
h2:function(a){var u,t,s,r=this
H.f(a,"$iah")
if(!r.bT(a)){r.aU(a)
u=r.aB(a)
if(H.G(r.x)){t=r.b4(a)
if(r.d.bf(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aD(a)
if(r.c.bf(u,s))a.preventDefault()}},
hk:function(a){var u,t,s=this
H.f(a,"$ibj")
s.aU(a)
u=new V.W((a&&C.D).giD(a),C.D.giE(a)).v(0,180)
if(H.G(s.x)){if(s.d.jc(u))a.preventDefault()
return}if(H.G(s.r))return
t=s.aD(a)
if(s.c.jd(u,t))a.preventDefault()},
hm:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aB(s.y)
t=s.aD(s.y)
s.d.hc(u,t,r)}},
hC:function(a){var u,t=this
H.f(a,"$ib1")
t.a.focus()
t.f=!0
t.ca(a)
u=t.c4(a)
if(t.e.ja(u))a.preventDefault()},
hy:function(a){var u
H.f(a,"$ib1")
this.ca(a)
u=this.c4(a)
if(this.e.j8(u))a.preventDefault()},
hA:function(a){var u
H.f(a,"$ib1")
this.ca(a)
u=this.c4(a)
if(this.e.j9(u))a.preventDefault()},
sfs:function(a){this.z=H.l(a,"$ib",[[P.cZ,P.Q]],"$ab")}}
D.bF.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.P():u},
aA:function(a){var u
H.f(a,"$iC")
u=this.r
if(u!=null)u.F(a)},
f1:function(){return this.aA(null)},
$iaf:1,
$ic8:1}
D.af.prototype={$ic8:1}
D.dS.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.P():u},
aA:function(a){var u=this.x
if(u!=null)u.F(a)},
dA:function(a){var u
H.f(a,"$iC")
u=this.y
if(u!=null)u.F(a)},
hb:function(){return this.dA(null)},
ho:function(a){var u,t,s
H.l(a,"$ii",[D.af],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(s==null||this.f_(s))return!1}return!0},
fP:function(a,b){var u,t,s,r,q,p,o,n=D.af
H.l(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gdz(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=H.f(b[q],"$iaf")
if(p instanceof D.bF)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.c3()
o.sak(null)
o.saT(null)
o.c=null
o.d=0
p.r=o}H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bJ([n])
n.b=!0
this.aA(n)},
hs:function(a,b){var u,t,s,r=D.af
H.l(b,"$ii",[r],"$ai")
for(u=b.gU(b),t=this.gdz();u.D();){s=u.gK(u)
C.a.M(this.e,s)
s.gq().M(0,t)}r=new D.bK([r])
r.b=!0
this.aA(r)},
f_:function(a){var u=C.a.V(this.e,a)
return u},
sfp:function(a){this.e=H.l(a,"$ib",[D.bF],"$ab")},
shD:function(a){this.f=H.l(a,"$ib",[D.e6],"$ab")},
si1:function(a){this.r=H.l(a,"$ib",[D.ef],"$ab")},
$ai:function(){return[D.af]},
$aa4:function(){return[D.af]}}
D.e6.prototype={$iaf:1,$ic8:1}
D.ef.prototype={$iaf:1,$ic8:1}
V.t.prototype={
p:function(a,b){var u=C.c.p(this.a,b.gcO()),t=C.c.p(this.b,b.gbG()),s=C.c.p(this.c,b.gcg())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.t(u,t,s)},
u:function(a,b){var u=C.c.u(this.a,b.gcO()),t=C.c.u(this.b,b.gbG()),s=C.c.u(this.c,b.gcg())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.t(u,t,s)},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.t))return!1
u=b.a
t=$.U().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+", "+V.a_(this.c,3,0)+"]"}}
V.am.prototype={
p:function(a,b){var u=this,t=C.c.p(u.a,b.gcO()),s=C.c.p(u.b,b.gbG()),r=C.c.p(u.c,b.gcg()),q=C.c.p(u.d,b.gim(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.am(t,s,r,q)},
u:function(a,b){var u=this,t=C.c.u(u.a,b.gcO()),s=C.c.u(u.b,b.gbG()),r=C.c.u(u.c,b.gcg()),q=C.c.u(u.d,b.gim(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.am(t,s,r,q)},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.am))return!1
u=b.a
t=$.U().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.a_(u.a,3,0)+", "+V.a_(u.b,3,0)+", "+V.a_(u.c,3,0)+", "+V.a_(u.d,3,0)+"]"}}
V.h4.prototype={}
V.e_.prototype={
ai:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.q])
return t},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e_))return!1
u=b.a
t=$.U().a
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
i:function(a){var u,t,s,r,q=this,p=[P.q],o=V.cq(H.d([q.a,q.d,q.r],p),3,0),n=V.cq(H.d([q.b,q.e,q.x],p),3,0),m=V.cq(H.d([q.c,q.f,q.y],p),3,0)
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
V.av.prototype={
ai:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.q])
return t},
cD:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.U().a)return V.c7()
u=1/b1
t=-n
s=-a0
return V.bd((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
A:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.bd(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bD:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.L(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cT:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.Z(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.av))return!1
u=b.a
t=$.U().a
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
i:function(a){return this.O()},
H:function(a){var u,t,s,r,q,p=this,o=[P.q],n=V.cq(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.cq(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.cq(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.cq(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
O:function(){return this.H("")}}
V.a7.prototype={
p:function(a,b){return new V.a7(this.a+b.a,this.b+b.b)},
u:function(a,b){return new V.a7(this.a-b.a,this.b-b.b)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.U().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+"]"}}
V.Z.prototype={
p:function(a,b){return new V.Z(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.Z(this.a-b.a,this.b-b.b,this.c-b.c)},
A:function(a,b){return new V.Z(this.a*b,this.b*b,this.c*b)},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.U().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+", "+V.a_(this.c,3,0)+"]"}}
V.ax.prototype={
p:function(a,b){var u=this
return new V.ax(C.c.p(u.a,b.gjv(b)),C.c.p(u.b,b.gjw(b)),C.c.p(u.c,b.gjx(b)),C.c.p(u.d,b.gju(b)))},
u:function(a,b){var u=this
return new V.ax(C.c.u(u.a,b.gjv(b)),C.c.u(u.b,b.gjw(b)),C.c.u(u.c,b.gjx(b)),C.c.u(u.d,b.gju(b)))},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ax))return!1
u=b.a
t=$.U().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.a_(u.a,3,0)+", "+V.a_(u.b,3,0)+", "+V.a_(u.c,3,0)+", "+V.a_(u.d,3,0)+"]"}}
V.e9.prototype={
gag:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e9))return!1
u=b.a
t=$.U().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.a_(u.a,3,0)+", "+V.a_(u.b,3,0)+", "+V.a_(u.c,3,0)+", "+V.a_(u.d,3,0)+"]"}}
V.W.prototype={
cE:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.F(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.F(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a,s=b.gcp(b)
if(typeof t!=="number")return t.p()
s=C.c.p(t,s)
t=this.b
u=b.gcq(b)
if(typeof t!=="number")return t.p()
return new V.W(s,C.c.p(t,u))},
u:function(a,b){var u,t=this.a,s=b.gcp(b)
if(typeof t!=="number")return t.u()
s=C.c.u(t,s)
t=this.b
u=b.gcq(b)
if(typeof t!=="number")return t.u()
return new V.W(s,C.c.u(t,u))},
A:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.A()
u=this.b
if(typeof u!=="number")return u.A()
return new V.W(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.U().a){u=$.mL
return u==null?$.mL=new V.W(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.W(u/b,t/b)},
w:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=this.a
s=$.U()
s.toString
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.F(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.F(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+"]"}}
V.L.prototype={
cE:function(a){return Math.sqrt(this.E(this))},
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cF:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.L(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aE:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.L(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.L(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.L(this.a-b.a,this.b-b.b,this.c-b.c)},
T:function(a){return new V.L(-this.a,-this.b,-this.c)},
A:function(a,b){return new V.L(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if(Math.abs(b-0)<$.U().a)return V.d9()
return new V.L(this.a/b,this.b/b,this.c/b)},
ek:function(){var u=$.U().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.L))return!1
u=b.a
t=$.U().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+", "+V.a_(this.c,3,0)+"]"}}
U.fM.prototype={
bK:function(a){var u=V.qg(a,this.c,this.b)
return u},
gq:function(){var u=this.y
return u==null?this.y=D.P():u},
R:function(a){var u=this.y
if(u!=null)u.F(a)},
scW:function(a,b){},
scG:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.U().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bK(u)}s=new D.O("maximumLocation",s,t.b,[P.q])
s.b=!0
t.R(s)}},
scI:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.U().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bK(u)}s=new D.O("minimumLocation",s,t.c,[P.q])
s.b=!0
t.R(s)}},
sa2:function(a,b){var u,t=this
b=t.bK(b)
u=t.d
if(!(Math.abs(u-b)<$.U().a)){t.d=b
u=new D.O("location",u,b,[P.q])
u.b=!0
t.R(u)}},
scH:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.U().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.O("maximumVelocity",r,a,[P.q])
r.b=!0
s.R(r)}},
sW:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.U().a)){u.f=a
t=new D.O("velocity",t,a,[P.q])
t.b=!0
u.R(t)}},
sco:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.U().a)){this.x=a
u=new D.O("dampening",u,a,[P.q])
u.b=!0
this.R(u)}},
as:function(a,b){var u,t,s,r=this,q=r.f,p=$.U().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa2(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.U().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sW(u)}}}
U.dF.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.P():u},
aZ:function(a,b,c){return this.a},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dF))return!1
return J.X(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.cJ.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.P():u},
R:function(a){var u
H.f(a,"$iC")
u=this.e
if(u!=null)u.F(a)},
ab:function(){return this.R(null)},
fN:function(a,b){var u,t,s,r,q,p,o,n=U.ai
H.l(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gaQ(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.gq()
o.toString
H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bJ([n])
n.b=!0
this.R(n)},
hq:function(a,b){var u,t,s=U.ai
H.l(b,"$ii",[s],"$ai")
for(u=b.gU(b),t=this.gaQ();u.D();)u.gK(u).gq().M(0,t)
s=new D.bK([s])
s.b=!0
this.R(s)},
aZ:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.S()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.au(r,r.length,[H.r(r,0)]),u=null;r.D();){q=r.d
if(q!=null){t=q.aZ(0,b,c)
if(t!=null)u=u==null?t:t.A(0,u)}}s.f=u==null?V.c7():u
r=s.e
if(r!=null)r.az(0)}return s.f},
w:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cJ))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.X(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ai]},
$aa4:function(){return[U.ai]},
$iai:1}
U.ai.prototype={}
U.er.prototype={
gq:function(){var u=this.cy
return u==null?this.cy=D.P():u},
R:function(a){var u
H.f(a,"$iC")
u=this.cy
if(u!=null)u.F(a)},
ab:function(){return this.R(null)},
b6:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.ge1().h(0,u.gbU())
u.a.c.gel().h(0,u.gbW())
u.a.c.gcU().h(0,u.gbY())
return!0},
bV:function(a){var u=this
H.f(a,"$iC")
if(!J.X(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bX:function(a){var u,t,s,r,q,p,o,n=this
a=H.w(H.f(a,"$iC"),"$ibt")
if(!H.G(n.y))return
if(H.G(n.x)){u=a.d.u(0,a.y)
u=new V.W(u.a,u.b)
u=u.E(u)
t=n.r
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.x=!1}if(H.G(n.d)){u=a.c
t=a.d.u(0,a.y)
u=new V.W(t.a,t.b).A(0,2).v(0,u.gag())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.A()
s=n.e
if(typeof s!=="number")return H.F(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=new V.W(s.a,s.b).A(0,2).v(0,u.gag())
s=n.b
q=r.a
if(typeof q!=="number")return q.T()
p=n.e
if(typeof p!=="number")return H.F(p)
o=n.z
if(typeof o!=="number")return H.F(o)
s.sa2(0,-q*p+o)
n.b.sW(0)
t=t.u(0,a.z)
n.Q=new V.W(t.a,t.b).A(0,2).v(0,u.gag())}n.ab()},
bZ:function(a){var u,t,s,r=this
H.f(a,"$iC")
if(!H.G(r.y))return
r.y=!1
if(H.G(r.x))return
u=r.Q
if(u.E(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.A()
s=r.e
if(typeof s!=="number")return H.F(s)
u.sW(t*10*s)
r.ab()}},
aZ:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.S()
if(q<p){r.ch=p
u=b.y
r.b.as(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.bd(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iai:1}
U.es.prototype={
gq:function(){var u=this.fx
return u==null?this.fx=D.P():u},
R:function(a){var u
H.f(a,"$iC")
u=this.fx
if(u!=null)u.F(a)},
ab:function(){return this.R(null)},
b6:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.ge1().h(0,s.gbU())
s.a.c.gel().h(0,s.gbW())
s.a.c.gcU().h(0,s.gbY())
u=s.a.d
t=u.f
u=t==null?u.f=D.P():t
u.h(0,s.gfF())
u=s.a.d
t=u.d
u=t==null?u.d=D.P():t
u.h(0,s.gfH())
u=s.a.e
t=u.b
u=t==null?u.b=D.P():t
u.h(0,s.gia())
u=s.a.e
t=u.d
u=t==null?u.d=D.P():t
u.h(0,s.gi8())
u=s.a.e
t=u.c
u=t==null?u.c=D.P():t
u.h(0,s.gi6())
return!0},
aw:function(a){var u=a.a,t=a.b
if(H.G(this.f)){if(typeof u!=="number")return u.T()
u=-u}if(H.G(this.r)){if(typeof t!=="number")return t.T()
t=-t}return new V.W(u,t)},
bV:function(a){var u=this
a=H.w(H.f(a,"$iC"),"$ibt")
if(!J.X(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bX:function(a){var u,t,s,r,q,p,o,n=this
a=H.w(H.f(a,"$iC"),"$ibt")
if(!H.G(n.cx))return
if(H.G(n.ch)){u=a.d.u(0,a.y)
u=new V.W(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.G(n.e)){u=a.c
t=a.d.u(0,a.y)
u=n.aw(new V.W(t.a,t.b).A(0,2).v(0,u.gag()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=n.aw(new V.W(s.a,s.b).A(0,2).v(0,u.gag()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa2(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.u(0,a.z)
n.dx=n.aw(new V.W(t.a,t.b).A(0,2).v(0,u.gag()))}n.ab()},
bZ:function(a){var u,t,s,r=this
H.f(a,"$iC")
if(!H.G(r.cx))return
r.cx=!1
if(H.G(r.ch))return
u=r.dx
if(u.E(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sW(-t*10*u)
r.ab()}},
fG:function(a){var u=this
if(H.w(H.f(a,"$iC"),"$idV").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fI:function(a){var u,t,s,r,q,p,o,n=this
a=H.w(H.f(a,"$iC"),"$ibt")
if(!J.X(n.d,a.x.b))return
u=a.c
t=a.d
s=t.u(0,a.y)
r=n.aw(new V.W(s.a,s.b).A(0,2).v(0,u.gag()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa2(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.u(0,a.z)
n.dx=n.aw(new V.W(t.a,t.b).A(0,2).v(0,u.gag()))
n.ab()},
ib:function(a){var u=this
H.f(a,"$iC")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
i9:function(a){var u,t,s,r,q,p,o,n=this
a=H.w(H.f(a,"$iC"),"$iel")
if(!H.G(n.cx))return
if(H.G(n.ch)){u=a.d.u(0,a.y)
u=new V.W(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.G(n.e)){u=a.c
t=a.d.u(0,a.y)
u=n.aw(new V.W(t.a,t.b).A(0,2).v(0,u.gag()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=n.aw(new V.W(s.a,s.b).A(0,2).v(0,u.gag()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa2(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.u(0,a.z)
n.dx=n.aw(new V.W(t.a,t.b).A(0,2).v(0,u.gag()))}n.ab()},
i7:function(a){var u,t,s,r=this
H.f(a,"$iC")
if(!H.G(r.cx))return
r.cx=!1
if(H.G(r.ch))return
u=r.dx
if(u.E(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sW(-t*10*u)
r.ab()}},
aZ:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.S()
if(q<p){r.dy=p
u=b.y
r.c.as(0,u)
r.b.as(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.bd(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.A(0,V.bd(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iai:1}
U.et.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.P():u},
R:function(a){var u=this.r
if(u!=null)u.F(a)},
b6:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.P():t
t=r.gfK()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.P():s).h(0,t)
return!0},
fL:function(a){var u,t,s,r,q=this
H.f(a,"$iC")
if(!J.X(q.b,q.a.b.c))return
H.w(a,"$icP")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.A()
r=u+t*s
if(u!==r){q.d=r
u=new D.O("zoom",u,r,[P.q])
u.b=!0
q.R(u)}},
aZ:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.bd(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iai:1}
M.dE.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.P():u},
a_:function(a){var u
H.f(a,"$iC")
u=this.r
if(u!=null)u.F(a)},
b1:function(){return this.a_(null)},
hu:function(a,b){var u,t,s,r,q,p,o,n=M.aF
H.l(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gZ(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.gq()
o.toString
H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bJ([n])
n.b=!0
this.a_(n)},
hw:function(a,b){var u,t,s=M.aF
H.l(b,"$ii",[s],"$ai")
for(u=b.gU(b),t=this.gZ();u.D();)u.gK(u).gq().M(0,t)
s=new D.bK([s])
s.b=!0
this.a_(s)},
ah:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.au(u,u.length,[H.r(u,0)]);u.D();){t=u.d
if(t!=null)t.ah(a)}s.f=!1},
$ai:function(){return[M.aF]},
$aa4:function(){return[M.aF]},
$iaF:1}
M.dG.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.P():u},
a_:function(a){var u
H.f(a,"$iC")
u=this.r
if(u!=null)u.F(a)},
b1:function(){return this.a_(null)},
sb7:function(a){var u,t,s=this
if(a==null)a=new X.hk()
u=s.b
if(u!==a){if(u!=null)u.gq().M(0,s.gZ())
t=s.b
s.b=a
a.gq().h(0,s.gZ())
u=new D.O("camera",t,s.b,[X.c0])
u.b=!0
s.a_(u)}},
sbh:function(a,b){var u,t,s=this
if(b==null)b=X.lw(null)
u=s.c
if(u!==b){if(u!=null)u.gq().M(0,s.gZ())
t=s.c
s.c=b
b.gq().h(0,s.gZ())
u=new D.O("target",t,s.c,[X.d0])
u.b=!0
s.a_(u)}},
sbi:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().M(0,t.gZ())
u=t.d
t.d=a
if(a!=null)a.gq().h(0,t.gZ())
s=new D.O("technique",u,t.d,[O.bO])
s.b=!0
t.a_(s)}},
ah:function(a){var u=this
a.cL(u.d)
u.c.a1(a)
u.b.a1(a)
u.e.as(0,a)
u.e.ah(a)
u.b.aM(a)
u.c.toString
a.cK()},
$iaF:1}
M.dK.prototype={
a_:function(a){var u
H.f(a,"$iC")
u=this.y
if(u!=null)u.F(a)},
b1:function(){return this.a_(null)},
fX:function(a,b){var u,t,s,r,q,p,o,n=E.aq
H.l(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gZ(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c3()
o.sak(null)
o.saT(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bJ([n])
n.b=!0
this.a_(n)},
fZ:function(a,b){var u,t,s=E.aq
H.l(b,"$ii",[s],"$ai")
for(u=b.gU(b),t=this.gZ();u.D();)u.gK(u).gq().M(0,t)
s=new D.bK([s])
s.b=!0
this.a_(s)},
sb7:function(a){var u,t,s=this
if(a==null)a=X.mr(null)
u=s.b
if(u!==a){if(u!=null)u.gq().M(0,s.gZ())
t=s.b
s.b=a
a.gq().h(0,s.gZ())
u=new D.O("camera",t,s.b,[X.c0])
u.b=!0
s.a_(u)}},
sbh:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gq().M(0,t.gZ())
u=t.c
t.c=b
b.gq().h(0,t.gZ())
s=new D.O("target",u,t.c,[X.d0])
s.b=!0
t.a_(s)}},
sbi:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().M(0,t.gZ())
u=t.d
t.d=a
if(a!=null)a.gq().h(0,t.gZ())
s=new D.O("technique",u,t.d,[O.bO])
s.b=!0
t.a_(s)}},
gq:function(){var u=this.y
return u==null?this.y=D.P():u},
ah:function(a){var u,t=this
a.cL(t.d)
t.c.a1(a)
t.b.a1(a)
u=t.d
if(u!=null)u.as(0,a)
for(u=t.e.a,u=new J.au(u,u.length,[H.r(u,0)]);u.D();)u.d.as(0,a)
for(u=t.e.a,u=new J.au(u,u.length,[H.r(u,0)]);u.D();)u.d.ah(a)
t.b.toString
a.cy.aJ()
a.db.aJ()
t.c.toString
a.cK()},
sfi:function(a,b){this.e=H.l(b,"$ia4",[E.aq],"$aa4")},
$iaF:1}
M.aF.prototype={}
A.dA.prototype={}
A.fB.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iI:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
e0:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ae.prototype={
gat:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
w:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.ae))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.dY.prototype={
eU:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
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
A.py(c0,u)
A.pA(c0,u)
A.pz(c0,u)
A.pC(c0,u)
A.pD(c0,u)
A.pB(c0,u)
A.pE(c0,u)
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
b5.ej(0,s.charCodeAt(0)==0?s:s,A.px(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.w(b5.y.X(0,"invViewMat"),"$iaz")
if(t)b5.dy=H.w(b5.y.X(0,"objMat"),"$iaz")
if(r)b5.fr=H.w(b5.y.X(0,"viewObjMat"),"$iaz")
b5.fy=H.w(b5.y.X(0,"projViewObjMat"),"$iaz")
if(c0.ry)b5.k1=H.w(b5.y.X(0,"txt2DMat"),"$id7")
if(c0.x1)b5.k2=H.w(b5.y.X(0,"txtCubeMat"),"$iaz")
if(c0.x2)b5.k3=H.w(b5.y.X(0,"colorMat"),"$iaz")
b5.sfe(H.d([],[A.az]))
t=c0.y2
if(t>0){b5.k4=H.f(b5.y.X(0,"bendMatCount"),"$iaO")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.B(P.E(b7+q+b8));(s&&C.a).h(s,H.w(m,"$iaz"))}}if(c0.a.a)b5.r2=H.w(b5.y.X(0,"emissionClr"),"$ia0")
if(c0.b.a)b5.x1=H.w(b5.y.X(0,"ambientClr"),"$ia0")
if(c0.c.a)b5.y2=H.w(b5.y.X(0,"diffuseClr"),"$ia0")
if(c0.d.a)b5.e3=H.w(b5.y.X(0,"invDiffuseClr"),"$ia0")
t=c0.e.a
if(!t)s=!1
else s=!0
if(s){b5.e5=H.w(b5.y.X(0,"shininess"),"$iaa")
if(t)b5.e4=H.w(b5.y.X(0,"specularClr"),"$ia0")}if(c0.cy){b5.e6=H.w(b5.y.X(0,"envSampler"),"$ibQ")
if(c0.r.a)b5.e7=H.w(b5.y.X(0,"reflectClr"),"$ia0")
t=c0.x.a
if(!t)s=!1
else s=!0
if(s){b5.e8=H.w(b5.y.X(0,"refraction"),"$iaa")
if(t)b5.e9=H.w(b5.y.X(0,"refractClr"),"$ia0")}}if(c0.y.a)b5.ea=H.w(b5.y.X(0,"alpha"),"$iaa")
t=P.m
s=[t,A.aO]
b5.sfo(new H.a5(s))
b5.sf2(new H.a5([t,[P.b,A.cf]]))
b5.shE(new H.a5(s))
b5.shF(new H.a5([t,[P.b,A.cg]]))
b5.si0(new H.a5(s))
b5.sf3(new H.a5([t,[P.b,A.ci]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.cf],l=0;l<t.length;t.length===s||(0,H.v)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.j(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ao()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.B(P.E(b7+g+b8))
H.w(m,"$ia0")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.B(P.E(b7+g+b8))
H.w(f,"$ia0")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.B(P.E(b7+g+b8))
H.w(e,"$ia0")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.B(P.E(b7+g+b8))
H.w(m,"$ia0")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.B(P.E(b7+g+b8))
H.w(f,"$ia0")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.B(P.E(b7+o+b8))
H.w(e,"$ich")
a=e}else a=b6
C.a.h(h,new A.cf(b,c,d,m,f,a))}b5.cs.k(0,j,h)
q=b5.cr
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.B(P.E(b7+o+b8))
q.k(0,j,H.f(m,"$iaO"))}for(t=c0.Q,s=t.length,r=[A.cg],l=0;l<t.length;t.length===s||(0,H.v)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.j(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.B(P.E(b7+o+b8))
H.w(m,"$ia0")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.B(P.E(b7+o+b8))
H.w(f,"$ia0")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.B(P.E(b7+o+b8))
H.w(e,"$ia0")
if(typeof j!=="number")return j.ao()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.B(P.E(b7+o+b8))
H.w(a0,"$id7")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.B(P.E(b7+o+b8))
H.w(a0,"$ibQ")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.B(P.E(b7+o+b8))
H.w(a0,"$ibQ")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.B(P.E(b7+o+b8))
H.w(a2,"$id6")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.B(P.E(b7+o+b8))
H.w(a0,"$iaa")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.B(P.E(b7+o+b8))
H.w(a2,"$iaa")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.B(P.E(b7+o+b8))
H.w(a5,"$iaa")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.cg(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.cu.k(0,j,h)
q=b5.ct
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.B(P.E(b7+o+b8))
q.k(0,j,H.f(m,"$iaO"))}for(t=c0.ch,s=t.length,r=[A.ci],l=0;l<t.length;t.length===s||(0,H.v)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.j(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.B(P.E(b7+o+b8))
H.w(m,"$ia0")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.B(P.E(b7+o+b8))
H.w(f,"$ia0")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.B(P.E(b7+o+b8))
H.w(e,"$ia0")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.B(P.E(b7+o+b8))
H.w(a0,"$ia0")
if(typeof j!=="number")return j.ao()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.B(P.E(b7+o+b8))
H.w(a2,"$ia0")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.B(P.E(b7+o+b8))
H.w(a5,"$ia0")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.B(P.E(b7+o+b8))
H.w(a9,"$iaa")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.B(P.E(b7+o+b8))
H.w(b0,"$iaa")
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
if(a2==null)H.B(P.E(b7+g+b8))
H.w(a2,"$id6")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.B(P.E(b7+g+b8))
H.w(a2,"$iaa")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.B(P.E(b7+g+b8))
H.w(a5,"$iaa")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.B(P.E(b7+g+b8))
H.w(a2,"$iaa")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.B(P.E(b7+g+b8))
H.w(a5,"$iaa")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.B(P.E(b7+g+b8))
H.w(a9,"$iaa")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.B(P.E(b7+g+b8))
H.w(a2,"$ich")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.B(P.E(b7+o+b8))
H.w(a2,"$ich")
a3=a2}else a3=b6
C.a.h(h,new A.ci(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.cw.k(0,j,h)
q=b5.cv
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.B(P.E(b7+o+b8))
q.k(0,j,H.f(m,"$iaO"))}}},
hU:function(a,b){if(b!=null&&b.d>=6)a.d_(b)},
sfe:function(a){this.r1=H.l(a,"$ib",[A.az],"$ab")},
sfo:function(a){this.cr=H.l(a,"$iA",[P.m,A.aO],"$aA")},
sf2:function(a){this.cs=H.l(a,"$iA",[P.m,[P.b,A.cf]],"$aA")},
shE:function(a){this.ct=H.l(a,"$iA",[P.m,A.aO],"$aA")},
shF:function(a){this.cu=H.l(a,"$iA",[P.m,[P.b,A.cg]],"$aA")},
si0:function(a){this.cv=H.l(a,"$iA",[P.m,A.aO],"$aA")},
sf3:function(a){this.cw=H.l(a,"$iA",[P.m,[P.b,A.ci]],"$aA")}}
A.aH.prototype={
i:function(a){return"dirLight"+H.j(this.a)}}
A.aK.prototype={
i:function(a){return"pointLight"+H.j(this.a)}}
A.aL.prototype={
i:function(a){return"spotLight"+H.j(this.a)}}
A.hH.prototype={
i:function(a){return this.bb}}
A.cf.prototype={}
A.cg.prototype={}
A.ci.prototype={}
A.cX.prototype={
d4:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
ej:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.dn(b,35633)
r.f=r.dn(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.G(H.lT(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.B(P.E("Failed to link shader: "+H.j(s)))}r.hW()
r.hY()},
a1:function(a){a.a.useProgram(this.r)
this.x.iI()},
dn:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.G(H.lT(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.E("Error compiling shader '"+H.j(s)+"': "+H.j(u)))}return s},
hW:function(){var u,t,s,r=this,q=H.d([],[A.dA]),p=r.a,o=H.a6(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dA(p,t.name,s))}r.x=new A.fB(q)},
hY:function(){var u,t,s,r=this,q=H.d([],[A.em]),p=r.a,o=H.a6(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.iC(t.type,t.size,t.name,s))}r.y=new A.j9(q)},
aR:function(a,b,c){var u=this.a
if(a===1)return new A.aO(u,b,c)
else return A.lG(u,this.r,b,a,c)},
fl:function(a,b,c){var u=this.a
if(a===1)return new A.ch(u,b,c)
else return A.lG(u,this.r,b,a,c)},
fm:function(a,b,c){var u=this.a
if(a===1)return new A.bQ(u,b,c)
else return A.lG(u,this.r,b,a,c)},
bs:function(a,b){return new P.eF(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
iC:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aR(b,c,d)
case 5121:return u.aR(b,c,d)
case 5122:return u.aR(b,c,d)
case 5123:return u.aR(b,c,d)
case 5124:return u.aR(b,c,d)
case 5125:return u.aR(b,c,d)
case 5126:return new A.aa(u.a,c,d)
case 35664:return new A.j5(u.a,c,d)
case 35665:return new A.a0(u.a,c,d)
case 35666:return new A.d6(u.a,c,d)
case 35667:return new A.j6(u.a,c,d)
case 35668:return new A.j7(u.a,c,d)
case 35669:return new A.j8(u.a,c,d)
case 35674:return new A.ja(u.a,c,d)
case 35675:return new A.d7(u.a,c,d)
case 35676:return new A.az(u.a,c,d)
case 35678:return u.fl(b,c,d)
case 35680:return u.fm(b,c,d)
case 35670:throw H.c(u.bs("BOOL",c))
case 35671:throw H.c(u.bs("BOOL_VEC2",c))
case 35672:throw H.c(u.bs("BOOL_VEC3",c))
case 35673:throw H.c(u.bs("BOOL_VEC4",c))
default:throw H.c(P.E("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.ed.prototype={}
A.em.prototype={}
A.j9.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
X:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.E("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.O()},
O:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aO.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.j6.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.j7.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.j8.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.j4.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
sie:function(a){H.l(a,"$ib",[P.m],"$ab")}}
A.aa.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.j5.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.a0.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.d6.prototype={
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.ja.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.d7.prototype={
ap:function(a){var u=new Float32Array(H.cl(H.l(a,"$ib",[P.q],"$ab")))
C.d.eE(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.az.prototype={
ap:function(a){var u=new Float32Array(H.cl(H.l(a,"$ib",[P.q],"$ab")))
C.d.eF(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.ch.prototype={
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.bQ.prototype={
d_:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.kw.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cF(s.b,b).cF(s.d.cF(s.c,b),c)
a.sa2(0,new V.Z(r.a,r.b,r.c))
a.sez(r.v(0,Math.sqrt(r.E(r))))
s=1-b
u=1-c
a.sdU(new V.ax(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:5}
F.kI.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:11}
F.kK.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.F(p)
s=-s*p
u=r*p
a.sa2(0,new V.Z(s,u,q))
u=new V.L(s,u,q)
a.sez(u.v(0,Math.sqrt(u.E(u))))
a.sdU(new V.ax(1-c,2+c,-1,-1))},
$S:5}
F.kL.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:19}
F.kM.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:19}
F.lj.prototype={
$2:function(a,b){return 0},
$S:11}
F.lk.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.F(s)
u=a.f
t=new V.L(u.a,u.b,u.c)
s=t.v(0,Math.sqrt(t.E(t))).A(0,this.b+s)
a.sa2(0,new V.Z(s.a,s.b,s.c))},
$S:5}
F.lm.prototype={
$1:function(a){return new V.Z(Math.cos(a),Math.sin(a),0)},
$S:18}
F.kT.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.Z(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:18}
F.kJ.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.m6(n.$1(o),m)
m=J.nQ(J.m6(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.L(m.a,m.b,m.c)
u=m.v(0,Math.sqrt(m.E(m)))
n=$.mN
if(n==null){n=new V.L(1,0,0)
$.mN=n
t=n}else t=n
n=u.aE(!J.X(u,t)?V.mP():t)
s=n.v(0,Math.sqrt(n.E(n)))
n=s.aE(u)
t=n.v(0,Math.sqrt(n.E(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.A(0,n*m)
m=s.A(0,q*m)
a.sa2(0,J.nP(l,new V.Z(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:5}
F.a9.prototype={
b9:function(){var u=this
if(!u.gba()){C.a.M(u.a.a.d.b,u)
u.a.a.a5()}u.c6()
u.c7()
u.hK()},
cb:function(a){this.a=a
C.a.h(a.d.b,this)},
cc:function(a){this.b=a
C.a.h(a.d.c,this)},
hV:function(a){this.c=a
C.a.h(a.d.d,this)},
c6:function(){var u=this.a
if(u!=null){C.a.M(u.d.b,this)
this.a=null}},
c7:function(){var u=this.b
if(u!=null){C.a.M(u.d.c,this)
this.b=null}},
hK:function(){var u=this.c
if(u!=null){C.a.M(u.d.d,this)
this.c=null}},
gba:function(){return this.a==null||this.b==null||this.c==null},
fd:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d9()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.ek())return
return s.v(0,Math.sqrt(s.E(s)))},
fh:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.u(0,q)
r=new V.L(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.E(r)))
r=t.u(0,q)
r=new V.L(r.a,r.b,r.c)
r=s.aE(r.v(0,Math.sqrt(r.E(r))))
return r.v(0,Math.sqrt(r.E(r)))},
ck:function(){var u,t=this
if(t.d!=null)return!0
u=t.fd()
if(u==null){u=t.fh()
if(u==null)return!1}t.d=u
t.a.a.a5()
return!0},
fc:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d9()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.ek())return
return s.v(0,Math.sqrt(s.E(s)))},
fg:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.U().a){l=d.u(0,g)
l=new V.L(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.E(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.u(0,g).A(0,p).p(0,g).u(0,j)
l=new V.L(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.E(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.E(l)))
l=o.aE(q)
l=l.v(0,Math.sqrt(l.E(l))).aE(o)
q=l.v(0,Math.sqrt(l.E(l)))}return q},
ci:function(){var u,t=this
if(t.e!=null)return!0
u=t.fc()
if(u==null){u=t.fg()
if(u==null)return!1}t.e=u
t.a.a.a5()
return!0},
giw:function(a){var u=this
if(J.X(u.a,u.b))return!0
if(J.X(u.b,u.c))return!0
if(J.X(u.c,u.a))return!0
return!1},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){var u,t,s=this
if(s.gba())return a+"disposed"
u=a+C.b.an(J.at(s.a.e),0)+", "+C.b.an(J.at(s.b.e),0)+", "+C.b.an(J.at(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
O:function(){return this.H("")}}
F.h7.prototype={}
F.iA.prototype={
bd:function(a,b,c){var u,t=b.a
t.a.a.B()
t=t.e
u=c.a
u.a.a.B()
if(t==u.e){t=b.b
t.a.a.B()
t=t.e
u=c.b
u.a.a.B()
if(t==u.e){t=b.c
t.a.a.B()
t=t.e
u=c.c
u.a.a.B()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.B()
t=t.e
u=c.b
u.a.a.B()
if(t==u.e){t=b.b
t.a.a.B()
t=t.e
u=c.c
u.a.a.B()
if(t==u.e){t=b.c
t.a.a.B()
t=t.e
u=c.a
u.a.a.B()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.B()
t=t.e
u=c.c
u.a.a.B()
if(t==u.e){t=b.b
t.a.a.B()
t=t.e
u=c.a
u.a.a.B()
if(t==u.e){t=b.c
t.a.a.B()
t=t.e
u=c.b
u.a.a.B()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bs.prototype={
b9:function(){var u=this
if(!u.gba()){C.a.M(u.a.a.c.b,u)
u.a.a.a5()}u.c6()
u.c7()},
cb:function(a){this.a=a
C.a.h(a.c.b,this)},
cc:function(a){this.b=a
C.a.h(a.c.c,this)},
c6:function(){var u=this.a
if(u!=null){C.a.M(u.c.b,this)
this.a=null}},
c7:function(){var u=this.b
if(u!=null){C.a.M(u.c.c,this)
this.b=null}},
gba:function(){return this.a==null||this.b==null},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){if(this.gba())return a+"disposed"
return a+C.b.an(J.at(this.a.e),0)+", "+C.b.an(J.at(this.b.e),0)},
O:function(){return this.H("")}}
F.hs.prototype={}
F.j3.prototype={
bd:function(a,b,c){var u,t=b.a
t.a.a.B()
t=t.e
u=c.a
u.a.a.B()
if(t==u.e){t=b.b
t.a.a.B()
t=t.e
u=c.b
u.a.a.B()
return t==u.e}else{t=b.a
t.a.a.B()
t=t.e
u=c.b
u.a.a.B()
if(t==u.e){t=b.b
t.a.a.B()
t=t.e
u=c.a
u.a.a.B()
return t==u.e}else return!1}}}
F.bN.prototype={
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.an(J.at(u.e),0)},
O:function(){return this.H("")}}
F.eb.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.P():u},
be:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.B()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){r=g[s]
h.a.h(0,r.iz())}h.a.B()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.B()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bN()
if(n.a==null)H.B(P.E("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.F(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.B()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.B()
p=p.e
if(typeof p!=="number")return p.p()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.og(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.B()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.B()
p=p.e
if(typeof p!=="number")return p.p()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.B()
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
F.cG(l,k,i)}g=h.e
if(g!=null)g.az(0)},
aq:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aq()||!1
if(!t.a.aq())u=!1
s=t.e
if(s!=null)s.az(0)
return u},
j_:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.r(o,0)])
for(o=[F.ad];u.length!==0;){t=C.a.giN(u)
C.a.es(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.e(u,r)
q=u[r]
if(q!=null&&a.bd(0,t,q)){C.a.h(s,q)
C.a.es(u,r)}}if(s.length>1)b.be(s)}}p.a.B()
p.c.cP()
p.d.cP()
p.b.jh()
p.c.cQ(new F.j3())
p.d.cQ(new F.iA())
o=p.e
if(o!=null)o.az(0)},
ce:function(){this.j_(new F.jw(),new F.i4())},
dX:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.b3()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bz().a)!==0)++s
if((t&$.by().a)!==0)++s
if((t&$.bX().a)!==0)++s
if((t&$.bY().a)!==0)++s
if((t&$.du().a)!==0)++s
if((t&$.dv().a)!==0)++s
if((t&$.cw().a)!==0)++s
if((t&$.bx().a)!==0)++s
r=a3.gd0(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.q
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dC])
for(n=0,m=0;m<s;++m){l=a3.ip(m)
k=l.gd0(l)
C.a.k(o,m,new Z.dC(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.e(u,j)
i=u[j].iY(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.l(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cl(p)),35044)
u.bindBuffer(a0,null)
e=new Z.cA(new Z.ev(a0,f),o,a3)
e.sfA(H.d([],[Z.bI]))
if(a.b.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.B()
C.a.h(d,c.e)}b=Z.lK(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bI(0,d.length,b))}if(a.c.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.B()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.B()
C.a.h(d,c.e)}b=Z.lK(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bI(1,d.length,b))}if(a.d.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.B()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.B()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].c
c.a.a.B()
C.a.h(d,c.e)}b=Z.lK(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bI(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.h])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.H(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.H(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.H(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.H(t))}return C.a.m(s,"\n")},
a5:function(){var u=this.e
if(u!=null)u.F(null)},
$iqo:1}
F.it.prototype={
dP:function(a){var u,t,s,r,q,p,o
H.l(a,"$ib",[F.ad],"$ab")
u=H.d([],[F.a9])
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
C.a.h(u,F.cG(s,p,o))}}return u},
ij:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.ad],"$ab")
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
cQ:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.bd(0,p,n)){p.b9()
break}}}}},
cP:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.giw(s)
if(t)s.b9()}},
aq:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].ck())s=!1
return s},
cj:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].ci())s=!1
return s},
i:function(a){return this.O()},
H:function(a){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].H(a))
return C.a.m(r,"\n")},
O:function(){return this.H("")},
sft:function(a){this.b=H.l(a,"$ib",[F.a9],"$ab")}}
F.iu.prototype={
gn:function(a){return this.b.length},
cQ:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.bd(0,p,n)){p.b9()
break}}}}},
cP:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.X(s.a,s.b)
if(t)s.b9()}},
i:function(a){return this.O()},
H:function(a){var u,t,s=H.d([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
C.a.h(s,t[u].H(a+(""+u+". ")))}return C.a.m(s,"\n")},
O:function(){return this.H("")},
sfB:function(a){this.b=H.l(a,"$ib",[F.bs],"$ab")}}
F.iv.prototype={
gn:function(a){return this.b.length},
jh:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.M(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.F(null)}s=t.a
if(s!=null){C.a.M(s.b.b,t)
t.a=null}}}},
i:function(a){return this.O()},
H:function(a){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].H(a))
return C.a.m(r,"\n")},
O:function(){return this.H("")},
sc3:function(a){this.b=H.l(a,"$ib",[F.bN],"$ab")}}
F.ad.prototype={
cn:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.eu(u.cx,r,o,t,s,q,p,a,n)},
iz:function(){return this.cn(null)},
sa2:function(a,b){var u
if(!J.X(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a5()}},
sez:function(a){var u
if(!J.X(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a5()}},
sdU:function(a){var u
if(!J.X(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a5()}},
iY:function(a){var u,t,s=this
if(a.w(0,$.b3())){u=s.f
t=[P.q]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.bz())){u=s.r
t=[P.q]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.by())){u=s.x
t=[P.q]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.bX())){u=s.y
t=[P.q]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.w(0,$.bY())){u=s.z
t=[P.q]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.du())){u=s.Q
t=[P.q]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.dv())){u=s.Q
t=[P.q]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.w(0,$.cw()))return H.d([s.ch],[P.q])
else if(a.w(0,$.bx())){u=s.cx
t=[P.q]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.q])},
ck:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d9()
t.d.I(0,new F.jB(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.a5()
s=t.a.e
if(s!=null)s.az(0)}return!0},
ci:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d9()
t.d.I(0,new F.jA(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.a5()
s=t.a.e
if(s!=null)s.az(0)}return!0},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){var u,t,s=this,r="-",q=H.d([],[P.h])
C.a.h(q,C.b.an(J.at(s.e),0))
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
C.a.h(q,V.a_(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
O:function(){return this.H("")}}
F.jB.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:10}
F.jA.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:10}
F.jr.prototype={
B:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.E("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a5()
return!0},
dQ:function(a,b,c,d,e,f,g){var u=F.eu(a,null,b,c,d,e,f,g,0)
this.h(0,u)
return u},
bt:function(a,b,c,d,e,f){return this.dQ(a,b,c,null,d,e,f)},
ik:function(a,b,c,d,e,f){return this.dQ(a,b,c,d,e,f,null)},
gn:function(a){return this.c.length},
aq:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].ck()
return!0},
cj:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].ci()
return!0},
iv:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.X(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.F(null)}}}}return!0},
i:function(a){return this.O()},
H:function(a){var u,t,s,r
this.B()
u=H.d([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].H(a))
return C.a.m(u,"\n")},
O:function(){return this.H("")},
sig:function(a){this.c=H.l(a,"$ib",[F.ad],"$ab")}}
F.js.prototype={
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
I:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a9]})
C.a.I(u.b,b)
C.a.I(u.c,new F.jt(u,b))
C.a.I(u.d,new F.ju(u,b))},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].H(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].H(""))
return C.a.m(r,"\n")},
sfu:function(a){this.b=H.l(a,"$ib",[F.a9],"$ab")},
sfv:function(a){this.c=H.l(a,"$ib",[F.a9],"$ab")},
sfw:function(a){this.d=H.l(a,"$ib",[F.a9],"$ab")}}
F.jt.prototype={
$1:function(a){H.f(a,"$ia9")
if(!J.X(a.a,this.a))this.b.$1(a)},
$S:10}
F.ju.prototype={
$1:function(a){var u
H.f(a,"$ia9")
u=this.a
if(!J.X(a.a,u)&&!J.X(a.b,u))this.b.$1(a)},
$S:10}
F.jv.prototype={
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.e(t,u)
return t[u]}else{if(b<0)return H.e(t,b)
return t[b]}},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].H(""))
return C.a.m(r,"\n")},
sfC:function(a){this.b=H.l(a,"$ib",[F.bs],"$ab")},
sfD:function(a){this.c=H.l(a,"$ib",[F.bs],"$ab")}}
F.jx.prototype={}
F.jw.prototype={
bd:function(a,b,c){return J.X(b.f,c.f)}}
F.jy.prototype={}
F.i4.prototype={
be:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ib",[F.ad],"$ab")
u=V.d9()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.L(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.v(0,Math.sqrt(u.E(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.v)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.v(0,Math.sqrt(o*o+n*n+m*m))}if(!J.X(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.F(null)}}}return}}
F.jz.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].H(""))
return C.a.m(r,"\n")},
sc3:function(a){this.b=H.l(a,"$ib",[F.bN],"$ab")}}
O.dX.prototype={
gq:function(){var u=this.fr
return u==null?this.fr=D.P():u},
a4:function(a){var u
H.f(a,"$iC")
u=this.fr
if(u!=null)u.F(a)},
c2:function(){return this.a4(null)},
dF:function(a){H.f(a,"$iC")
this.a=null
this.a4(a)},
hP:function(){return this.dF(null)},
fR:function(a,b){var u=V.av
H.l(b,"$ii",[u],"$ai")
u=new D.bJ([u])
u.b=!0
this.a4(u)},
fT:function(a,b){var u=V.av
H.l(b,"$ii",[u],"$ai")
u=new D.bK([u])
u.b=!0
this.a4(u)},
dk:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.m,h=new H.a5([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=h.j(0,0)
h.k(0,0,r==null?1:r)}q=H.d([],[A.aH])
h.I(0,new O.hL(j,q))
C.a.bI(q,new O.hM())
p=new H.a5([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){o=u[s]
r=o.gb8()
n=p.j(0,o.gb8())
p.k(0,r,n==null?1:n)}m=H.d([],[A.aK])
p.I(0,new O.hN(j,m))
C.a.bI(m,new O.hO())
l=new H.a5([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.v)(i),++s){o=i[s]
t=o.gb8()
r=l.j(0,o.gb8())
l.k(0,t,r==null?1:r)}k=H.d([],[A.aL])
l.I(0,new O.hP(j,k))
C.a.bI(k,new O.hQ())
i=C.e.ad(j.e.a.length+3,4)
j.dy.e
return A.on(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
fb:function(a,b){H.l(a,"$ib",[T.d2],"$ab")
if(b!=null)if(!C.a.V(a,b)){b.a=a.length
C.a.h(a,b)}},
as:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.au(u,u.length,[H.r(u,0)]);u.D();){t=u.d
t.toString
s=$.jq
if(s==null)s=$.jq=new V.L(0,0,1)
t.a=s
r=$.jp
t.d=r==null?$.jp=new V.L(0,1,0):r
r=$.jo
t.e=r==null?$.jo=new V.L(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bD(s)
r=s.a
p=s.b
o=s.c
t.a=s.v(0,Math.sqrt(r*r+p*p+o*o))
o=q.bD(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.v(0,Math.sqrt(p*p+r*r+s*s))
s=q.bD(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.v(0,Math.sqrt(r*r+p*p+o*o))}}}},
eu:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.dk()
u=H.f(b4.fr.j(0,b3.bb),"$idY")
if(u==null){u=A.om(b3,b4.a)
b4.dS(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.e2
b3=b5.e
if(!(b3 instanceof Z.cA))b3=b5.e=null
if(b3==null||!b3.d.w(0,s)){b3=t.k3
if(b3)b5.d.aq()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.cj()
q.a.cj()
q=q.e
if(q!=null)q.az(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.iv()
p=p.e
if(p!=null)p.az(0)}n=b5.d.dX(new Z.ew(b4.a),s)
n.aG($.b3()).e=b2.a.Q.c
if(b3)n.aG($.bz()).e=b2.a.cx.c
if(r)n.aG($.by()).e=b2.a.ch.c
if(t.r1)n.aG($.bX()).e=b2.a.cy.c
if(q)n.aG($.bY()).e=b2.a.db.c
if(t.rx)n.aG($.bx()).e=b2.a.dx.c
b5.e=n}b3=T.d2
m=H.d([],[b3])
b2.a.a1(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.ga7(q)
r=r.dy
r.toString
r.ap(q.ai(0,!0))}if(t.fr){r=b2.a
q=b4.cx
if(q==null){q=b4.db
q=q.ga7(q)
p=b4.dx
p=b4.cx=q.A(0,p.ga7(p))
q=p}r=r.fr
r.toString
r.ap(q.ai(0,!0))}r=b2.a
q=b4.ch
if(q==null){q=b4.gjf()
p=b4.dx
p=b4.ch=q.A(0,p.ga7(p))
q=p}r=r.fy
r.toString
r.ap(q.ai(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.ap(C.j.ai(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.ap(C.j.ai(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.ap(C.j.ai(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.d.bE(r.a,r.d,l)
for(r=[P.q],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.e(p,k)
p=p[k]
q.toString
H.f(p,"$iav")
q=q.r1
if(k>=q.length)return H.e(q,k)
q=q[k]
j=new Float32Array(H.cl(H.l(p.ai(0,!0),"$ib",r,"$ab")))
C.d.eF(q.a,q.d,!1,j)}}if(t.a.a){r=b2.a
q=b2.f.f
r=r.r2
C.d.Y(r.a,r.d,q.a,q.b,q.c)}if(t.id){if(t.b.a){r=b2.a
q=b2.r.f
r=r.x1
C.d.Y(r.a,r.d,q.a,q.b,q.c)}if(t.c.a){r=b2.a
q=b2.x.f
r=r.y2
C.d.Y(r.a,r.d,q.a,q.b,q.c)}if(t.d.a){r=b2.a
q=b2.y.f
r=r.e3
C.d.Y(r.a,r.d,q.a,q.b,q.c)}r=t.e.a
if(!r)q=!1
else q=!0
if(q){q=b2.a
p=b2.z.ch
q=q.e5
C.d.a6(q.a,q.d,p)}if(r){r=b2.a
q=b2.z.f
r=r.e4
C.d.Y(r.a,r.d,q.a,q.b,q.c)}r=t.z
if(r.length>0){q=b4.db
i=q.ga7(q)
q=P.m
h=new H.a5([q,q])
for(q=b2.dx.e,p=q.length,g=0;g<q.length;q.length===p||(0,H.v)(q),++g){f=q[g]
e=h.j(0,0)
if(e==null)e=0
h.k(0,0,e+1)
d=J.dw(b2.a.cs.j(0,0),e)
o=i.bD(f.a)
c=o.a
b=o.b
a=o.c
a=o.v(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
o=a.b
a=a.c
C.d.Y(b.a,b.d,c,o,a)
a=f.c
o=d.f
C.d.Y(o.a,o.d,a.a,a.b,a.c)}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.v)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.cr.j(0,p)
C.d.bE(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.ga7(q)
q=P.m
a0=new H.a5([q,q])
for(q=b2.dx.f,p=q.length,o=[b3],c=[P.q],g=0;g<q.length;q.length===p||(0,H.v)(q),++g){f=q[g]
a1=f.gb8()
e=a0.j(0,a1)
if(e==null)e=0
a0.k(0,a1,e+1)
d=J.dw(b2.a.cu.j(0,a1),e)
a2=i.A(0,f.ga7(f))
b=f.ga7(f)
a=$.cU
b=b.cT(a==null?$.cU=new V.Z(0,0,0):a)
a=d.b
C.d.Y(a.a,a.d,b.a,b.b,b.c)
b=$.cU
b=a2.cT(b==null?$.cU=new V.Z(0,0,0):b)
a=d.c
C.d.Y(a.a,a.d,b.a,b.b,b.c)
b=f.gt(f)
a=d.e
C.d.Y(a.a,a.d,b.a,b.b,b.c)
f.gaL()
b=a2.cD(0)
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
j=new Float32Array(H.cl(H.l(new V.e_(a,a3,a4,a5,a6,a7,a8,a9,b).ai(0,!0),"$ib",c,"$ab")))
C.d.eE(b0.a,b0.d,!1,j)
f.gaL()
b=f.gaL()
H.l(m,"$ib",o,"$ab")
if(!C.a.V(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gaL()
a=b.gbc(b)
if(a){a=d.f
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}f.gb0()
b=f.geM()
a=d.x
a.toString
a3=b.gcp(b)
a4=b.gcq(b)
a5=b.giG()
b=b.giF()
C.d.eD(a.a,a.d,a3,a4,a5,b)
b=f.gb0()
if(!C.a.V(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gb0()
a=b.gbc(b)
if(a){a=d.r
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}if(f.giJ()){b=f.giq()
a=d.y
C.d.a6(a.a,a.d,b)
b=f.gir()
a=d.z
C.d.a6(a.a,a.d,b)
b=f.gis()
a=d.Q
C.d.a6(a.a,a.d,b)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.v)(r),++g){p=r[g].a
l=a0.j(0,p)
if(l==null)l=0
p=b2.a.ct.j(0,p)
C.d.bE(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.ga7(q)
q=P.m
b1=new H.a5([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.v)(q),++g){f=q[g]
a1=f.gb8()
e=b1.j(0,a1)
if(e==null)e=0
b1.k(0,a1,e+1)
d=J.dw(b2.a.cw.j(0,a1),e)
o=f.gje(f)
c=d.b
C.d.Y(c.a,c.d,o.a,o.b,o.c)
o=f.gjC(f).jU()
c=d.c
C.d.Y(c.a,c.d,o.a,o.b,o.c)
o=i.cT(f.gje(f))
c=d.d
C.d.Y(c.a,c.d,o.a,o.b,o.c)
o=f.gt(f)
c=d.e
C.d.Y(c.a,c.d,o.a,o.b,o.c)
f.gaL()
o=f.gcU()
c=d.f
C.d.Y(c.a,c.d,o.a,o.b,o.c)
o=f.gcR(f)
c=d.r
C.d.Y(c.a,c.d,o.a,o.b,o.c)
o=f.gjV()
c=d.x
C.d.a6(c.a,c.d,o)
o=f.gjW()
c=d.y
C.d.a6(c.a,c.d,o)
f.gaL()
o=f.gaL()
H.l(m,"$ib",b3,"$ab")
if(!C.a.V(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gaL()
c=o.gbc(o)
if(c){c=d.dx
c.toString
b=o.gbc(o)
if(!b)c.a.uniform1i(c.d,0)
else{o=o.giS(o)
c.a.uniform1i(c.d,o)}}f.gb0()
o=f.geM()
c=d.z
c.toString
b=o.gcp(o)
a=o.gcq(o)
a3=o.giG()
o=o.giF()
C.d.eD(c.a,c.d,b,a,a3,o)
o=f.gb0()
if(!C.a.V(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gb0()
c=o.gbc(o)
if(c){c=d.dy
c.toString
b=o.gbc(o)
if(!b)c.a.uniform1i(c.d,0)
else{o=o.giS(o)
c.a.uniform1i(c.d,o)}}if(f.gjD()){o=f.gjB()
c=d.Q
C.d.a6(c.a,c.d,o)
o=f.gjA()
c=d.ch
C.d.a6(c.a,c.d,o)}if(f.giJ()){o=f.giq()
c=d.cx
C.d.a6(c.a,c.d,o)
o=f.gir()
c=d.cy
C.d.a6(c.a,c.d,o)
o=f.gis()
c=d.db
C.d.a6(c.a,c.d,o)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.v)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.cv.j(0,q)
C.d.bE(q.a,q.d,l)}}}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.ga7(r).cD(0)}b3=b3.id
b3.toString
b3.ap(r.ai(0,!0))}if(t.cy){b2.fb(m,b2.ch)
b3=b2.a
r=b2.ch
b3.hU(b3.e6,r)
if(t.r.a){b3=b2.a
r=b2.cx.f
b3=b3.e7
C.d.Y(b3.a,b3.d,r.a,r.b,r.c)}b3=t.x.a
if(!b3)r=!1
else r=!0
if(r){r=b2.a
q=b2.cy.ch
r=r.e8
C.d.a6(r.a,r.d,q)}if(b3){b3=b2.a
r=b2.cy.f
b3=b3.e9
C.d.Y(b3.a,b3.d,r.a,r.b,r.c)}}b3=t.y.a
r=!b3
if(r)q=!1
else q=!0
if(q){if(b3){b3=b2.a
q=b2.db.f
b3=b3.ea
C.d.a6(b3.a,b3.d,q)}b3=b4.a
b3.enable(3042)
b3.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].a1(b4)
b3=b5.e
b3.a1(b4)
b3.ah(b4)
b3.aM(b4)
if(r)b3=!1
else b3=!0
if(b3)b4.a.disable(3042)
for(b3=b4.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b3.activeTexture(33984+r.a)
b3.bindTexture(34067,null)}}r=b2.a
r.toString
b3.useProgram(null)
r.x.e0()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dk().bb},
sff:function(a){this.e=H.l(a,"$ia4",[V.av],"$aa4")}}
O.hL.prototype={
$2:function(a,b){H.a6(a)
H.a6(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aH(a,C.e.ad(b+3,4)*4))},
$S:12}
O.hM.prototype={
$2:function(a,b){H.f(a,"$iaH")
H.f(b,"$iaH")
return J.lp(a.a,b.a)},
$S:51}
O.hN.prototype={
$2:function(a,b){H.a6(a)
H.a6(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aK(a,C.e.ad(b+3,4)*4))},
$S:12}
O.hO.prototype={
$2:function(a,b){H.f(a,"$iaK")
H.f(b,"$iaK")
return J.lp(a.a,b.a)},
$S:52}
O.hP.prototype={
$2:function(a,b){H.a6(a)
H.a6(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aL(a,C.e.ad(b+3,4)*4))},
$S:12}
O.hQ.prototype={
$2:function(a,b){H.f(a,"$iaL")
H.f(b,"$iaL")
return J.lp(a.a,b.a)},
$S:53}
O.hF.prototype={
aC:function(){var u,t=this
t.d2()
u=t.f
if(!(Math.abs(u-1)<$.U().a)){t.f=1
u=new D.O(t.b,u,1,[P.q])
u.b=!0
t.a.a4(u)}}}
O.dZ.prototype={
aC:function(){},
br:function(a){var u,t,s=this
if(!s.c.w(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aC()
u=s.a
u.a=null
u.a4(null)}}}
O.hG.prototype={}
O.bc.prototype={
dH:function(a){var u,t,s=this
if(!s.f.w(0,a)){u=s.f
s.f=a
t=new D.O(s.b+".color",u,a,[V.t])
t.b=!0
s.a.a4(t)}},
aC:function(){this.d2()
this.dH(new V.t(1,1,1))},
st:function(a,b){this.br(new A.ae(!0,!1,!1))
this.dH(b)}}
O.hI.prototype={}
O.hJ.prototype={
c8:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.U().a)){u.ch=a
t=new D.O(u.b+".refraction",t,a,[P.q])
t.b=!0
u.a.a4(t)}},
aC:function(){this.d3()
this.c8(1)},
saF:function(a){var u=this
if(a<=0){u.br(new A.ae(!1,!1,!1))
u.c8(0)}else{u.br(new A.ae(!0,!1,!1))
u.c8(a)}}}
O.hK.prototype={
dI:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.U().a)){u.ch=a
t=new D.O(u.b+".shininess",t,a,[P.q])
t.b=!0
u.a.a4(t)}},
aC:function(){this.d3()
this.dI(100)}}
O.ec.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.P():u},
a4:function(a){var u
H.f(a,"$iC")
u=this.e
if(u!=null)u.F(a)},
c2:function(){return this.a4(null)},
eu:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.f(a.fr.j(0,n),"$ied")
if(u==null){t=a.a
u=new A.ed(t,n)
u.d4(t,n)
u.ej(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.w(u.y.j(0,"fov"),"$iaa")
u.ch=H.w(u.y.j(0,"ratio"),"$iaa")
u.cx=H.w(u.y.j(0,"boxClr"),"$ia0")
u.cy=H.w(u.y.j(0,"boxTxt"),"$ibQ")
u.db=H.w(u.y.j(0,"viewMat"),"$iaz")
a.dS(u)}o.a=u}if(b.e==null){t=b.d.dX(new Z.ew(a.a),$.b3())
t.aG($.b3()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.a1(a)}t=a.d
s=a.c
r=o.a
r.a1(a)
q=o.b
p=r.Q
C.d.a6(p.a,p.d,q)
q=r.ch
C.d.a6(q.a,q.d,t/s)
s=o.c
r.cy.d_(s)
s=o.d
t=r.cx
C.d.Y(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga7(s).cD(0)
r=r.db
r.toString
r.ap(s.ai(0,!0))
t=b.e
if(t instanceof Z.cA){t.a1(a)
t.ah(a)
t.aM(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.e0()
t=o.c
if(t!=null)t.aM(a)}}
O.bO.prototype={}
T.d2.prototype={}
T.d3.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.P():u},
a1:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
aM:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.iR.prototype={
aS:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.o
W.ab(t,"load",H.n(new T.iS(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
hQ:function(a,b,c){var u,t,s,r
b=V.m0(b)
u=V.m0(a.width)
t=V.m0(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.ls()
s.width=u
s.height=t
r=H.f(C.i.eJ(s,"2d"),"$icB")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.pR(r.getImageData(0,0,s.width,s.height))}}}
T.iS.prototype={
$1:function(a){var u=this,t=u.a,s=t.hQ(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.d.jo(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.iH()}++t.e},
$S:13}
V.bm.prototype={
aI:function(a,b){return!0},
i:function(a){return"all"},
$iaC:1}
V.aC.prototype={}
V.dW.prototype={
aI:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)if(u[s].aI(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sac:function(a){this.a=H.l(a,"$ib",[V.aC],"$ab")},
$iaC:1}
V.aw.prototype={
aI:function(a,b){return!this.eR(0,b)},
i:function(a){return"!["+this.d1(0)+"]"}}
V.ih.prototype={
aI:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.cb(this.a),t=H.cb(this.b)
return u+".."+t},
$iaC:1}
V.ir.prototype={
eW:function(a){var u,t
if(a.a.length<=0)throw H.c(P.E("May not create a SetMatcher with zero characters."))
u=new H.a5([P.m,P.R])
for(t=new H.cM(a,a.gn(a),[H.ao(a,"z",0)]);t.D();)u.k(0,t.d,!0)
this.shT(u)},
aI:function(a,b){return this.a.bu(0,b)},
i:function(a){var u=this.a
return P.d_(u.ga9(u),0,null)},
shT:function(a){this.a=H.l(a,"$iA",[P.m,P.R],"$aA")},
$iaC:1}
V.cY.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d5(this.a.l(0,b))
r.sac(H.d([],[V.aC]))
r.c=!1
C.a.h(this.c,r)
return r},
iM:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.aI(0,a))return r}return},
i:function(a){return this.b},
sic:function(a){this.c=H.l(a,"$ib",[V.d5],"$ab")}}
V.ek.prototype={
i:function(a){var u=H.m2(this.b,"\n","\\n"),t=H.m2(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d4.prototype={
aK:function(a,b,c){var u,t,s
H.l(c,"$ib",[P.h],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.v)(c),++t){s=c[t]
this.c.k(0,s,b)}},
i:function(a){return this.b},
shL:function(a){var u=P.h
this.c=H.l(a,"$iA",[u,u],"$aA")}}
V.iV.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cY(this,b)
u.sic(H.d([],[V.d5]))
u.d=null
this.a.k(0,b,u)}return u},
P:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.d4(a)
u=P.h
t.shL(new H.a5([u,u]))
this.b.k(0,a,t)}return t},
eC:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.ek]),k=this.c,j=[P.m],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.G(a,s)
q=k.iM(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.d_(i,0,m)
throw H.c(P.E("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.d_(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.ek(n==null?o.b:n,p,s)}++s}}},
si2:function(a){this.a=H.l(a,"$iA",[P.h,V.cY],"$aA")},
si5:function(a){this.b=H.l(a,"$iA",[P.h,V.d4],"$aA")}}
V.d5.prototype={
i:function(a){return this.b.b+": "+this.d1(0)}}
X.c0.prototype={$ic8:1}
X.he.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.P():u},
av:function(a){var u=this.x
if(u!=null)u.F(a)},
sdY:function(a,b){var u
if(this.b){this.b=!1
u=new D.O("clearColor",!0,!1,[P.R])
u.b=!0
this.av(u)}},
a1:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.F(u)
q=C.c.ar(r*u)
r=s.b
if(typeof t!=="number")return H.F(t)
p=C.c.ar(r*t)
r=C.c.ar(s.c*u)
a.c=r
s=C.c.ar(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.hk.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.P():u},
a1:function(a){var u
a.cy.bB(V.c7())
u=V.c7()
a.db.bB(u)},
aM:function(a){a.cy.aJ()
a.db.aJ()},
$ic8:1,
$ic0:1}
X.e5.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.P():u},
av:function(a){var u
H.f(a,"$iC")
u=this.f
if(u!=null)u.F(a)},
f8:function(){return this.av(null)},
a1:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.bd(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bB(k)
r=$.ms
if(r==null){r=V.mu()
q=V.lJ()
p=$.mM
r=V.mn(r,q,p==null?$.mM=new V.L(0,0,-1):p)
$.ms=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aZ(0,a,s)
if(t!=null)u=t.A(0,u)}a.db.bB(u)},
aM:function(a){a.cy.aJ()
a.db.aJ()},
$ic8:1,
$ic0:1}
X.d0.prototype={}
V.bD.prototype={
bm:function(a){this.b=new P.hi(C.Q)
this.c=null
this.sbR(H.d([],[[P.b,W.aI]]))},
N:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aI]))
u=a.split("\n")
for(l=u.length,t=[W.aI],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.K(q)
o=m.b.fk(q,0,q.length)
n=o==null?q:o
C.O.eL(p,H.m2(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gay(m.d),p)}},
eq:function(a,b){var u,t,s,r,q=this
H.l(b,"$ib",[P.h],"$ab")
q.sbR(H.d([],[[P.b,W.aI]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bv():t).eC(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)q.bA(t[r])},
sbR:function(a){this.d=H.l(a,"$ib",[[P.b,W.aI]],"$ab")}}
V.li.prototype={
$1:function(a){var u
H.f(a,"$ibg")
u=C.c.eB(this.a.giQ(),2)
if(u!=="0.00")P.m1(u+" fps")},
$S:55}
V.fV.prototype={
bA:function(a){var u=this
switch(a.a){case"Class":u.N(a.b,"#551")
break
case"Comment":u.N(a.b,"#777")
break
case"Id":u.N(a.b,"#111")
break
case"Num":u.N(a.b,"#191")
break
case"Reserved":u.N(a.b,"#119")
break
case"String":u.N(a.b,"#171")
break
case"Symbol":u.N(a.b,"#616")
break
case"Type":u.N(a.b,"#B11")
break
case"Whitespace":u.N(a.b,"#111")
break}},
bv:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iW()
a1.c=a1.l(0,r)
u=a1.l(0,r).m(0,q)
t=V.x(new H.u("_"))
C.a.h(u.a,t)
t=V.a2("a","z")
C.a.h(u.a,t)
t=V.a2("A","Z")
C.a.h(u.a,t)
t=a1.l(0,q).m(0,q)
u=V.x(new H.u("_"))
C.a.h(t.a,u)
u=V.a2("0","9")
C.a.h(t.a,u)
u=V.a2("a","z")
C.a.h(t.a,u)
u=V.a2("A","Z")
C.a.h(t.a,u)
u=a1.l(0,r).m(0,p)
t=V.a2("0","9")
C.a.h(u.a,t)
t=a1.l(0,p).m(0,p)
u=V.a2("0","9")
C.a.h(t.a,u)
u=a1.l(0,p).m(0,o)
t=V.x(new H.u("."))
C.a.h(u.a,t)
t=a1.l(0,o).m(0,n)
u=V.a2("0","9")
C.a.h(t.a,u)
u=a1.l(0,n).m(0,n)
t=V.a2("0","9")
C.a.h(u.a,t)
t=a1.l(0,r).m(0,m)
u=V.x(new H.u(l))
C.a.h(t.a,u)
u=a1.l(0,m).m(0,m)
t=V.x(new H.u(l))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,k)
u=V.x(new H.u('"'))
C.a.h(t.a,u)
u=a1.l(0,k).m(0,j)
t=V.x(new H.u('"'))
C.a.h(u.a,t)
t=a1.l(0,k).m(0,i)
u=V.x(new H.u("\\"))
C.a.h(t.a,u)
u=a1.l(0,i).m(0,k)
t=V.x(new H.u('"'))
C.a.h(u.a,t)
C.a.h(a1.l(0,k).m(0,k).a,new V.bm())
t=a1.l(0,r).m(0,h)
u=V.x(new H.u("'"))
C.a.h(t.a,u)
u=a1.l(0,h).m(0,g)
t=V.x(new H.u("'"))
C.a.h(u.a,t)
t=a1.l(0,h).m(0,f)
u=V.x(new H.u("\\"))
C.a.h(t.a,u)
u=a1.l(0,f).m(0,h)
t=V.x(new H.u("'"))
C.a.h(u.a,t)
C.a.h(a1.l(0,h).m(0,h).a,new V.bm())
t=a1.l(0,r).m(0,e)
u=V.x(new H.u("/"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,d)
t=V.x(new H.u("/"))
C.a.h(u.a,t)
t=a1.l(0,d).m(0,c)
u=V.x(new H.u("\n"))
C.a.h(t.a,u)
u=a1.l(0,d).m(0,d)
t=new V.aw()
s=[V.aC]
t.sac(H.d([],s))
C.a.h(u.a,t)
u=V.x(new H.u("\n"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,b)
t=V.x(new H.u("*"))
C.a.h(u.a,t)
t=a1.l(0,b).m(0,a)
u=V.x(new H.u("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,b)
t=new V.aw()
t.sac(H.d([],s))
C.a.h(u.a,t)
u=V.x(new H.u("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,c)
t=V.x(new H.u("/"))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,a0)
u=V.x(new H.u(" \n\t"))
C.a.h(t.a,u)
u=a1.l(0,a0).m(0,a0)
t=V.x(new H.u(" \n\t"))
C.a.h(u.a,t)
t=a1.l(0,p)
t.d=t.a.P("Num")
t=a1.l(0,n)
t.d=t.a.P("Num")
t=a1.l(0,m)
t.d=t.a.P("Symbol")
t=a1.l(0,j)
t.d=t.a.P("String")
t=a1.l(0,g)
t.d=t.a.P("String")
t=a1.l(0,c)
t.d=t.a.P(d)
t=a1.l(0,a0)
t.d=t.a.P(a0)
t=a1.l(0,q)
t=t.d=t.a.P(q)
u=[P.h]
t.aK(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aK(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aK(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.hf.prototype={
bA:function(a){var u=this
switch(a.a){case"Builtin":u.N(a.b,"#411")
break
case"Comment":u.N(a.b,"#777")
break
case"Id":u.N(a.b,"#111")
break
case"Num":u.N(a.b,"#191")
break
case"Preprocess":u.N(a.b,"#737")
break
case"Reserved":u.N(a.b,"#119")
break
case"Symbol":u.N(a.b,"#611")
break
case"Type":u.N(a.b,"#171")
break
case"Whitespace":u.N(a.b,"#111")
break}},
bv:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iW()
e.c=e.l(0,r)
u=e.l(0,r).m(0,q)
t=V.x(new H.u("_"))
C.a.h(u.a,t)
t=V.a2("a","z")
C.a.h(u.a,t)
t=V.a2("A","Z")
C.a.h(u.a,t)
t=e.l(0,q).m(0,q)
u=V.x(new H.u("_"))
C.a.h(t.a,u)
u=V.a2("0","9")
C.a.h(t.a,u)
u=V.a2("a","z")
C.a.h(t.a,u)
u=V.a2("A","Z")
C.a.h(t.a,u)
u=e.l(0,r).m(0,p)
t=V.a2("0","9")
C.a.h(u.a,t)
t=e.l(0,p).m(0,p)
u=V.a2("0","9")
C.a.h(t.a,u)
u=e.l(0,p).m(0,o)
t=V.x(new H.u("."))
C.a.h(u.a,t)
t=e.l(0,o).m(0,n)
u=V.a2("0","9")
C.a.h(t.a,u)
u=e.l(0,n).m(0,n)
t=V.a2("0","9")
C.a.h(u.a,t)
t=e.l(0,r).m(0,m)
u=V.x(new H.u(l))
C.a.h(t.a,u)
u=e.l(0,m).m(0,m)
t=V.x(new H.u(l))
C.a.h(u.a,t)
t=e.l(0,r).m(0,k)
u=V.x(new H.u("/"))
C.a.h(t.a,u)
u=e.l(0,k).m(0,j)
t=V.x(new H.u("/"))
C.a.h(u.a,t)
C.a.h(e.l(0,k).m(0,m).a,new V.bm())
t=e.l(0,j).m(0,i)
u=V.x(new H.u("\n"))
C.a.h(t.a,u)
u=e.l(0,j).m(0,j)
t=new V.aw()
s=[V.aC]
t.sac(H.d([],s))
C.a.h(u.a,t)
u=V.x(new H.u("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,h)
t=V.x(new H.u("#"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,h)
u=new V.aw()
u.sac(H.d([],s))
C.a.h(t.a,u)
t=V.x(new H.u("\n"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,g)
u=V.x(new H.u("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,f)
t=V.x(new H.u(" \n\t"))
C.a.h(u.a,t)
t=e.l(0,f).m(0,f)
u=V.x(new H.u(" \n\t"))
C.a.h(t.a,u)
u=e.l(0,p)
u.d=u.a.P("Num")
u=e.l(0,n)
u.d=u.a.P("Num")
u=e.l(0,m)
u.d=u.a.P("Symbol")
u=e.l(0,i)
u.d=u.a.P(j)
u=e.l(0,g)
u.d=u.a.P(h)
u=e.l(0,f)
u.d=u.a.P(f)
u=e.l(0,q)
u=u.d=u.a.P(q)
t=[P.h]
u.aK(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aK(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aK(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.hg.prototype={
bA:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.N(a.b,"#911")
u.N("=",t)
break
case"Id":u.N(a.b,t)
break
case"Other":u.N(a.b,t)
break
case"Reserved":u.N(a.b,"#119")
break
case"String":u.N(a.b,"#171")
break
case"Symbol":u.N(a.b,"#616")
break}},
bv:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iW()
l.c=l.l(0,s)
u=l.l(0,s).m(0,r)
t=V.x(new H.u("_"))
C.a.h(u.a,t)
t=V.a2("a","z")
C.a.h(u.a,t)
t=V.a2("A","Z")
C.a.h(u.a,t)
t=l.l(0,r).m(0,r)
u=V.x(new H.u("_"))
C.a.h(t.a,u)
u=V.a2("0","9")
C.a.h(t.a,u)
u=V.a2("a","z")
C.a.h(t.a,u)
u=V.a2("A","Z")
C.a.h(t.a,u)
u=l.l(0,r).m(0,q)
t=V.x(new H.u("="))
C.a.h(u.a,t)
u.c=!0
u=l.l(0,s).m(0,p)
t=V.x(new H.u("</\\-!>="))
C.a.h(u.a,t)
t=l.l(0,p).m(0,p)
u=V.x(new H.u("</\\-!>="))
C.a.h(t.a,u)
u=l.l(0,s).m(0,o)
t=V.x(new H.u('"'))
C.a.h(u.a,t)
t=l.l(0,o).m(0,n)
u=V.x(new H.u('"'))
C.a.h(t.a,u)
u=l.l(0,o).m(0,"EscStr")
t=V.x(new H.u("\\"))
C.a.h(u.a,t)
t=l.l(0,"EscStr").m(0,o)
u=V.x(new H.u('"'))
C.a.h(t.a,u)
C.a.h(l.l(0,o).m(0,o).a,new V.bm())
C.a.h(l.l(0,s).m(0,m).a,new V.bm())
u=l.l(0,m).m(0,m)
t=new V.aw()
t.sac(H.d([],[V.aC]))
C.a.h(u.a,t)
u=V.x(new H.u('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.a2("a","z")
C.a.h(t.a,u)
u=V.a2("A","Z")
C.a.h(t.a,u)
u=l.l(0,p)
u.d=u.a.P("Symbol")
u=l.l(0,n)
u.d=u.a.P("String")
u=l.l(0,r)
t=u.a.P(r)
u.d=t
t.aK(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.l(0,q)
t.d=t.a.P(q)
t=l.l(0,m)
t.d=t.a.P(m)
return l}}
V.ia.prototype={
eq:function(a,b){H.l(b,"$ib",[P.h],"$ab")
this.sbR(H.d([],[[P.b,W.aI]]))
this.N(C.a.m(b,"\n"),"#111")},
bA:function(a){},
bv:function(){return}}
V.ie.prototype={
cd:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.mI().gcN().j(0,H.j(u))
if(t==null)if(d){c.$0()
m.dM(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.m8(m.c).h(0,q)
o=W.oa("radio")
o.checked=s
o.name=u
u=W.o
W.ab(o,"change",H.n(new V.ig(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.m8(m.c).h(0,r.createElement("br"))},
a3:function(a,b,c){return this.cd(a,b,c,!1)},
dM:function(a){var u,t,s=P.mI(),r=P.h,q=P.oi(s.gcN(),r,r)
q.k(0,this.a,a)
u=s.ev(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.kf([],[]).cV(""),"",t)}}
V.ig.prototype={
$1:function(a){var u=this
if(H.G(u.b.checked)){u.c.$0()
u.a.dM(u.d)}},
$S:13}
V.iw.prototype={
eX:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.ab(q,"scroll",H.n(new V.iy(o),{func:1,ret:-1,args:[r]}),!1,r)},
dR:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.h],"$ab")
this.hX()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eC(C.a.iX(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.v)(s),++q){p=s[q]
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
if(H.qd(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.K(m[1])
l.textContent=H.K(m[0])
t.appendChild(l)}else{k=P.fh(C.y,n,C.h,!1)
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
eI:function(a){var u,t,s,r=new V.fV("dart")
r.bm("dart")
u=new V.hf("glsl")
u.bm("glsl")
t=new V.hg("html")
t.bm("html")
s=C.a.iO(H.d([r,u,t],[V.bD]),new V.iz(a))
if(s!=null)return s
r=new V.ia("plain")
r.bm("plain")
return r},
dO:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.l(b0,"$ib",[P.h],"$ab")
u=H.d([],[P.m])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dt(r).a8(r,"+")){C.a.k(b0,s,C.b.af(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a8(r,"-")){C.a.k(b0,s,C.b.af(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eI(a8)
q.eq(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.fh(C.y,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.ma()
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.v)(r),++a0)C.a_.io(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.v)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gU(r);a3.D();)c.appendChild(a3.gK(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
ih:function(a){var u,t,s,r,q,p,o,n="auto"
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
hX:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iW()
u.c=u.l(0,q)
t=u.l(0,q).m(0,p)
s=V.x(new H.u("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,p).m(0,p)
s=new V.aw()
r=[V.aC]
s.sac(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.u("*"))
C.a.h(s.a,t)
t=u.l(0,p).m(0,"BoldEnd")
s=V.x(new H.u("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,o)
s=V.x(new H.u("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,o).m(0,o)
s=new V.aw()
s.sac(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.u("_"))
C.a.h(s.a,t)
t=u.l(0,o).m(0,n)
s=V.x(new H.u("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,m)
s=V.x(new H.u("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,m).m(0,m)
s=new V.aw()
s.sac(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.u("`"))
C.a.h(s.a,t)
t=u.l(0,m).m(0,"CodeEnd")
s=V.x(new H.u("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,l)
s=V.x(new H.u("["))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,l).m(0,k)
s=V.x(new H.u("|"))
C.a.h(t.a,s)
s=u.l(0,l).m(0,j)
t=V.x(new H.u("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,l).m(0,l)
t=new V.aw()
t.sac(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.u("|]"))
C.a.h(t.a,s)
s=u.l(0,k).m(0,j)
t=V.x(new H.u("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,k).m(0,k)
t=new V.aw()
t.sac(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.u("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,q).m(0,i).a,new V.bm())
s=u.l(0,i).m(0,i)
t=new V.aw()
t.sac(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.u("*_`["))
C.a.h(t.a,s)
s=u.l(0,"BoldEnd")
s.d=s.a.P(p)
s=u.l(0,n)
s.d=s.a.P(o)
s=u.l(0,"CodeEnd")
s.d=s.a.P(m)
s=u.l(0,j)
s.d=s.a.P("Link")
s=u.l(0,i)
s.d=s.a.P(i)
this.b=u}}
V.iy.prototype={
$1:function(a){P.mE(C.o,new V.ix(this.a))},
$S:13}
V.ix.prototype={
$0:function(){var u=C.c.ar(document.documentElement.scrollTop),t=this.a.style,s=H.j(-0.01*u)+"px"
t.top=s},
$S:0}
V.iz.prototype={
$1:function(a){return H.f(a,"$ibD").a===this.a},
$S:56}
D.kY.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.t(0.1,0.1,0.1))
t=u.x
t.st(0,new V.t(0.2,0.2,0.2))
t=u.z
t.st(0,new V.t(1,1,1))
u.cy.st(0,new V.t(0,0,0))
u=u.cx
u.st(0,new V.t(1,1,1))},
$S:0}
D.kZ.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.t(0.11,0.11,0.1))
t=u.x
t.st(0,new V.t(0.21,0.21,0.2))
t=u.z
t.st(0,new V.t(1,1,1))
u.cy.st(0,new V.t(0,0,0))
u=u.cx
u.st(0,new V.t(1,0.9,0.5))},
$S:0}
D.l_.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.t(0.1,0.1,0.1))
t=u.x
t.st(0,new V.t(0.1,0.1,0.1))
t=u.z
t.st(0,new V.t(1,1,1))
u.cy.saF(0.4)
t=u.cy
t.st(0,new V.t(0.6,0.6,0.6))
u=u.cx
u.st(0,new V.t(0.4,0.4,0.4))},
$S:0}
D.l8.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.t(0.1,0.1,0.1))
t=u.x
t.st(0,new V.t(0.1,0.1,0.1))
t=u.z
t.st(0,new V.t(1,1,1))
u.cy.saF(0.4)
t=u.cy
t.st(0,new V.t(0.2,0.3,1))
u=u.cx
u.st(0,new V.t(0.3,0.3,0.3))},
$S:0}
D.l9.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.t(0.1,0.1,0.1))
t=u.x
t.st(0,new V.t(0.1,0.1,0.1))
t=u.z
t.st(0,new V.t(1,1,1))
u.cy.saF(0.6)
t=u.cy
t.st(0,new V.t(0.8,0.8,0.8))
u=u.cx
u.st(0,new V.t(0.2,0.2,0.2))},
$S:0}
D.la.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.t(0.1,0.1,0.1))
t=u.x
t.st(0,new V.t(0.1,0.1,0.1))
t=u.z
t.st(0,new V.t(1,1,1))
u.cy.saF(0.6)
t=u.cy
t.st(0,new V.t(1,1,1))
u.cx.st(0,new V.t(0,0,0))},
$S:0}
D.lb.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.t(0.1,0.1,0.1))
t=u.x
t.st(0,new V.t(0.1,0.1,0.1))
t=u.z
t.st(0,new V.t(1,1,1))
u.cy.saF(0.9)
t=u.cy
t.st(0,new V.t(1,0.8,0.8))
u.cx.st(0,new V.t(0,0,0))},
$S:0}
D.lc.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.t(0,0,0))
t=u.x
t.st(0,new V.t(0.1,0.1,0.1))
t=u.z
t.st(0,new V.t(0.1,0.1,0.1))
u.cy.saF(0.99)
t=u.cy
t.st(0,new V.t(0.95,0.95,0.95))
u.cx.st(0,new V.t(0,0,0))},
$S:0}
D.ld.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.t(0.3,0.3,0.3))
t=u.x
t.st(0,new V.t(0.5,0.5,0.5))
t=u.z
t.st(0,new V.t(1,1,1))
u.cy.st(0,new V.t(0,0,0))
u=u.cx
u.st(0,new V.t(0.3,0.3,0.3))},
$S:0}
D.le.prototype={
$0:function(){this.a.saa(0,F.lX(1,null,null,1))},
$S:0}
D.lf.prototype={
$0:function(){this.a.saa(0,F.lX(15,null,new D.kX(),15))},
$S:0}
D.kX.prototype={
$3:function(a,b,c){var u,t=Math.cos(c*4*3.141592653589793+3.141592653589793),s=Math.cos(b*4*3.141592653589793+3.141592653589793),r=a.f
r=new V.L(r.a,r.b,r.c)
u=r.v(0,Math.sqrt(r.E(r)))
r=a.f
s=u.A(0,t*0.1+s*0.1)
a.sa2(0,r.p(0,new V.Z(s.a,s.b,s.c)))},
$S:5}
D.l0.prototype={
$0:function(){this.a.saa(0,F.nb(!0,30,1))},
$S:0}
D.l1.prototype={
$0:function(){this.a.saa(0,F.nb(!1,30,0))},
$S:0}
D.l2.prototype={
$0:function(){this.a.saa(0,F.nc(!0,!0,25,new D.kW(),50))},
$S:0}
D.kW.prototype={
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8},
$S:11}
D.l3.prototype={
$0:function(){this.a.saa(0,F.ns(6,null,6))},
$S:0}
D.l4.prototype={
$0:function(){this.a.saa(0,F.ns(10,new D.kV(),10))},
$S:0}
D.kV.prototype={
$2:function(a,b){var u=a-0.5,t=b-0.5
return Math.cos(Math.sqrt(u*u+t*t)*3.141592653589793)*0.3},
$S:11}
D.l5.prototype={
$0:function(){this.a.saa(0,F.nu())},
$S:0}
D.l6.prototype={
$0:function(){this.a.saa(0,F.q5())},
$S:0}
D.l7.prototype={
$1:function(a){var u,t,s,r
H.f(a,"$iC")
u=this.a
t=this.b
s=t.a
r=[P.h]
u.dO("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dO("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:9};(function aliases(){var u=J.a.prototype
u.eO=u.i
u=J.dQ.prototype
u.eQ=u.i
u=P.i.prototype
u.eP=u.bF
u=W.V.prototype
u.bJ=u.al
u=W.f_.prototype
u.eS=u.ax
u=O.dZ.prototype
u.d2=u.aC
u=O.bc.prototype
u.d3=u.aC
u=V.dW.prototype
u.eR=u.aI
u.d1=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"pL","oV",14)
u(P,"pM","oW",14)
u(P,"pN","oX",14)
t(P,"na","pJ",3)
s(W,"pZ",4,null,["$4"],["oZ"],30,0)
s(W,"q_",4,null,["$4"],["p_"],30,0)
var m
r(m=E.aq.prototype,"geo",0,0,null,["$1","$0"],["ep","j6"],1,0)
r(m,"gem",0,0,null,["$1","$0"],["en","j3"],1,0)
q(m,"gj1","j2",6)
q(m,"gj4","j5",6)
r(m=E.ej.prototype,"gd6",0,0,null,["$1","$0"],["d8","d7"],1,0)
p(m,"gjk","ew",3)
o(m=X.eq.prototype,"gh5","h6",16)
o(m,"gfU","fV",16)
o(m,"gh_","h0",4)
o(m,"gh9","ha",34)
o(m,"gh7","h8",34)
o(m,"ghd","he",4)
o(m,"ghh","hi",4)
o(m,"gh3","h4",4)
o(m,"ghf","hg",4)
o(m,"gh1","h2",4)
o(m,"ghj","hk",36)
o(m,"ghl","hm",16)
o(m,"ghB","hC",15)
o(m,"ghx","hy",15)
o(m,"ghz","hA",15)
r(D.bF.prototype,"gf0",0,0,null,["$1","$0"],["aA","f1"],1,0)
r(m=D.dS.prototype,"gdz",0,0,null,["$1","$0"],["dA","hb"],1,0)
o(m,"ghn","ho",49)
q(m,"gfO","fP",29)
q(m,"ghr","hs",29)
n(V.W.prototype,"gn","cE",26)
n(V.L.prototype,"gn","cE",26)
r(m=U.cJ.prototype,"gaQ",0,0,null,["$1","$0"],["R","ab"],1,0)
q(m,"gfM","fN",23)
q(m,"ghp","hq",23)
r(m=U.er.prototype,"gaQ",0,0,null,["$1","$0"],["R","ab"],1,0)
o(m,"gbU","bV",2)
o(m,"gbW","bX",2)
o(m,"gbY","bZ",2)
r(m=U.es.prototype,"gaQ",0,0,null,["$1","$0"],["R","ab"],1,0)
o(m,"gbU","bV",2)
o(m,"gbW","bX",2)
o(m,"gbY","bZ",2)
o(m,"gfF","fG",2)
o(m,"gfH","fI",2)
o(m,"gia","ib",2)
o(m,"gi8","i9",2)
o(m,"gi6","i7",2)
o(U.et.prototype,"gfK","fL",2)
r(m=M.dE.prototype,"gZ",0,0,null,["$1","$0"],["a_","b1"],1,0)
q(m,"ght","hu",22)
q(m,"ghv","hw",22)
r(M.dG.prototype,"gZ",0,0,null,["$1","$0"],["a_","b1"],1,0)
r(m=M.dK.prototype,"gZ",0,0,null,["$1","$0"],["a_","b1"],1,0)
q(m,"gfW","fX",6)
q(m,"gfY","fZ",6)
r(m=O.dX.prototype,"gc1",0,0,null,["$1","$0"],["a4","c2"],1,0)
r(m,"ghO",0,0,null,["$1","$0"],["dF","hP"],1,0)
q(m,"gfQ","fR",32)
q(m,"gfS","fT",32)
r(O.ec.prototype,"gc1",0,0,null,["$1","$0"],["a4","c2"],1,0)
r(X.e5.prototype,"gf7",0,0,null,["$1","$0"],["av","f8"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.Q,null)
s(P.Q,[H.lA,J.a,J.au,P.eN,P.i,H.cM,P.b9,H.c4,H.d8,H.fO,H.j0,P.bG,H.cC,H.f4,P.ag,H.ht,H.hv,H.ho,P.fa,P.bk,P.aQ,P.ex,P.iH,P.cZ,P.iI,P.bg,P.ap,P.kv,P.k9,P.cj,P.eM,P.z,P.kn,P.hB,P.c2,P.hj,P.kt,P.ks,P.R,P.aB,P.ac,P.b8,P.i8,P.eg,P.eF,P.hd,P.bH,P.b,P.A,P.N,P.ay,P.h,P.ak,P.ck,P.jf,P.kc,W.fR,W.bT,W.I,W.e3,W.f_,W.ki,W.dM,W.aE,W.k8,W.fi,P.ke,P.ff,P.k3,P.S,O.a4,O.cN,E.fI,E.aq,E.ii,E.ej,Z.ev,Z.ew,Z.cA,Z.bI,Z.bS,D.fL,D.c3,D.C,X.dD,X.dR,X.hq,X.hy,X.aD,X.hX,X.iX,X.eq,D.bF,D.af,D.e6,D.ef,V.t,V.am,V.h4,V.e_,V.av,V.a7,V.Z,V.ax,V.e9,V.W,V.L,U.er,U.es,U.et,M.dG,M.dK,M.aF,A.dA,A.fB,A.ae,A.aH,A.aK,A.aL,A.hH,A.cf,A.cg,A.ci,A.em,A.j9,F.a9,F.h7,F.bs,F.hs,F.bN,F.eb,F.it,F.iu,F.iv,F.ad,F.jr,F.js,F.jv,F.jx,F.jy,F.jz,O.bO,O.dZ,O.hI,T.iR,V.bm,V.aC,V.dW,V.ih,V.ir,V.cY,V.ek,V.d4,V.iV,X.c0,X.d0,X.hk,X.e5,V.bD,V.ie,V.iw])
s(J.a,[J.hn,J.dP,J.dQ,J.aU,J.bL,J.bq,H.cQ,H.bM,W.k,W.fy,W.c_,W.cB,W.b6,W.b7,W.Y,W.ez,W.fW,W.fX,W.eB,W.dJ,W.eD,W.fZ,W.o,W.eG,W.aT,W.hh,W.eI,W.bp,W.dU,W.hR,W.eO,W.eP,W.aV,W.eQ,W.eT,W.aW,W.eX,W.eZ,W.aY,W.f0,W.aZ,W.f5,W.aM,W.f8,W.iU,W.b0,W.fb,W.iZ,W.jk,W.fj,W.fl,W.fn,W.fp,W.fr,P.bb,P.eK,P.be,P.eV,P.id,P.f6,P.bh,P.fd,P.fC,P.ey,P.dB,P.e7,P.cd,P.ea,P.ei,P.en,P.f2])
s(J.dQ,[J.i9,J.bR,J.br])
t(J.lz,J.aU)
s(J.bL,[J.dO,J.dN])
t(P.hx,P.eN)
s(P.hx,[H.eo,W.jK,W.ar,P.h9])
t(H.u,H.eo)
s(P.i,[H.h1,H.hC,H.da])
s(H.h1,[H.c6,H.hu])
s(P.b9,[H.hD,H.jD])
t(H.hE,H.c6)
t(H.fP,H.fO)
s(P.bG,[H.i5,H.hp,H.jd,H.j2,H.fK,H.ip,P.fA,P.e4,P.aS,P.je,P.jb,P.ce,P.fN,P.fU])
s(H.cC,[H.ln,H.iO,H.kP,H.kQ,H.kR,P.jG,P.jF,P.jH,P.jI,P.km,P.kl,P.jR,P.jV,P.jS,P.jT,P.jU,P.jY,P.jZ,P.jX,P.jW,P.iJ,P.iK,P.kF,P.k6,P.k5,P.k7,P.hw,P.hA,P.h_,P.h0,P.jj,P.jg,P.jh,P.ji,P.ko,P.kp,P.kr,P.kq,P.kz,P.ky,P.kA,P.kB,W.h2,W.hT,W.hV,W.io,W.iG,W.jQ,W.i3,W.i2,W.ka,W.kb,W.kk,W.ku,P.kg,P.kH,P.ha,P.hb,P.fE,E.ij,E.ik,E.il,E.iT,D.h5,D.h6,F.kw,F.kI,F.kK,F.kL,F.kM,F.lj,F.lk,F.lm,F.kT,F.kJ,F.jB,F.jA,F.jt,F.ju,O.hL,O.hM,O.hN,O.hO,O.hP,O.hQ,T.iS,V.li,V.ig,V.iy,V.ix,V.iz,D.kY,D.kZ,D.l_,D.l8,D.l9,D.la,D.lb,D.lc,D.ld,D.le,D.lf,D.kX,D.l0,D.l1,D.l2,D.kW,D.l3,D.l4,D.kV,D.l5,D.l6,D.l7])
s(H.iO,[H.iE,H.cy])
t(H.jE,P.fA)
t(P.hz,P.ag)
s(P.hz,[H.a5,W.jJ])
t(H.e0,H.bM)
s(H.e0,[H.df,H.dh])
t(H.dg,H.df)
t(H.cR,H.dg)
t(H.di,H.dh)
t(H.e1,H.di)
s(H.e1,[H.hY,H.hZ,H.i_,H.i0,H.i1,H.e2,H.cS])
t(P.k4,P.kv)
t(P.k2,P.k9)
t(P.fg,P.hB)
t(P.ep,P.fg)
s(P.c2,[P.fG,P.h3])
t(P.bE,P.iI)
s(P.bE,[P.fH,P.hi,P.jn,P.jm])
t(P.jl,P.h3)
s(P.ac,[P.q,P.m])
s(P.aS,[P.cc,P.hl])
t(P.jM,P.ck)
s(W.k,[W.H,W.h8,W.cO,W.aX,W.dj,W.b_,W.aN,W.dl,W.jC,W.db,P.fF,P.bZ])
s(W.H,[W.V,W.bC,W.dc])
s(W.V,[W.y,P.p])
s(W.y,[W.dy,W.fz,W.cx,W.bB,W.c1,W.aI,W.hc,W.cK,W.cL,W.iq,W.bf,W.eh,W.iM,W.iN,W.d1])
s(W.b6,[W.cD,W.fS,W.fT])
t(W.fQ,W.b7)
t(W.cE,W.ez)
t(W.eC,W.eB)
t(W.dI,W.eC)
t(W.eE,W.eD)
t(W.fY,W.eE)
t(W.aJ,W.c_)
t(W.eH,W.eG)
t(W.cH,W.eH)
t(W.eJ,W.eI)
t(W.c5,W.eJ)
t(W.bP,W.o)
s(W.bP,[W.ba,W.ah,W.b1])
t(W.hS,W.eO)
t(W.hU,W.eP)
t(W.eR,W.eQ)
t(W.hW,W.eR)
t(W.eU,W.eT)
t(W.cT,W.eU)
t(W.eY,W.eX)
t(W.ib,W.eY)
t(W.im,W.eZ)
t(W.dk,W.dj)
t(W.iB,W.dk)
t(W.f1,W.f0)
t(W.iC,W.f1)
t(W.iF,W.f5)
t(W.f9,W.f8)
t(W.iP,W.f9)
t(W.dm,W.dl)
t(W.iQ,W.dm)
t(W.fc,W.fb)
t(W.iY,W.fc)
t(W.bj,W.ah)
t(W.fk,W.fj)
t(W.jL,W.fk)
t(W.eA,W.dJ)
t(W.fm,W.fl)
t(W.k_,W.fm)
t(W.fo,W.fn)
t(W.eS,W.fo)
t(W.fq,W.fp)
t(W.kd,W.fq)
t(W.fs,W.fr)
t(W.kh,W.fs)
t(W.jN,W.jJ)
t(W.jO,P.iH)
t(W.lL,W.jO)
t(W.jP,P.cZ)
t(W.kj,W.f_)
t(P.kf,P.ke)
t(P.an,P.k3)
t(P.eL,P.eK)
t(P.hr,P.eL)
t(P.eW,P.eV)
t(P.i6,P.eW)
t(P.cW,P.p)
t(P.f7,P.f6)
t(P.iL,P.f7)
t(P.fe,P.fd)
t(P.j_,P.fe)
t(P.fD,P.ey)
t(P.i7,P.bZ)
t(P.f3,P.f2)
t(P.iD,P.f3)
s(E.fI,[Z.dC,A.cX,T.d2])
s(D.C,[D.bJ,D.bK,D.O,X.ic])
s(X.ic,[X.dV,X.bt,X.cP,X.el])
s(O.a4,[D.dS,U.cJ,M.dE])
s(D.fL,[U.fM,U.ai])
t(U.dF,U.ai)
s(A.cX,[A.dY,A.ed])
s(A.em,[A.aO,A.j6,A.j7,A.j8,A.j4,A.aa,A.j5,A.a0,A.d6,A.ja,A.d7,A.az,A.ch,A.bQ])
t(F.iA,F.h7)
t(F.j3,F.hs)
t(F.jw,F.jx)
t(F.i4,F.jy)
s(O.bO,[O.dX,O.ec])
s(O.dZ,[O.hF,O.hG,O.bc])
s(O.bc,[O.hJ,O.hK])
t(T.d3,T.d2)
s(V.dW,[V.aw,V.d5])
t(X.he,X.d0)
s(V.bD,[V.fV,V.hf,V.hg,V.ia])
u(H.eo,H.d8)
u(H.df,P.z)
u(H.dg,H.c4)
u(H.dh,P.z)
u(H.di,H.c4)
u(P.eN,P.z)
u(P.fg,P.kn)
u(W.ez,W.fR)
u(W.eB,P.z)
u(W.eC,W.I)
u(W.eD,P.z)
u(W.eE,W.I)
u(W.eG,P.z)
u(W.eH,W.I)
u(W.eI,P.z)
u(W.eJ,W.I)
u(W.eO,P.ag)
u(W.eP,P.ag)
u(W.eQ,P.z)
u(W.eR,W.I)
u(W.eT,P.z)
u(W.eU,W.I)
u(W.eX,P.z)
u(W.eY,W.I)
u(W.eZ,P.ag)
u(W.dj,P.z)
u(W.dk,W.I)
u(W.f0,P.z)
u(W.f1,W.I)
u(W.f5,P.ag)
u(W.f8,P.z)
u(W.f9,W.I)
u(W.dl,P.z)
u(W.dm,W.I)
u(W.fb,P.z)
u(W.fc,W.I)
u(W.fj,P.z)
u(W.fk,W.I)
u(W.fl,P.z)
u(W.fm,W.I)
u(W.fn,P.z)
u(W.fo,W.I)
u(W.fp,P.z)
u(W.fq,W.I)
u(W.fr,P.z)
u(W.fs,W.I)
u(P.eK,P.z)
u(P.eL,W.I)
u(P.eV,P.z)
u(P.eW,W.I)
u(P.f6,P.z)
u(P.f7,W.I)
u(P.fd,P.z)
u(P.fe,W.I)
u(P.ey,P.ag)
u(P.f2,P.z)
u(P.f3,W.I)})();(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bB.prototype
C.i=W.c1.prototype
C.O=W.aI.prototype
C.R=J.a.prototype
C.a=J.aU.prototype
C.S=J.dN.prototype
C.e=J.dO.prototype
C.j=J.dP.prototype
C.c=J.bL.prototype
C.b=J.bq.prototype
C.T=J.br.prototype
C.Z=W.cT.prototype
C.B=J.i9.prototype
C.d=P.cd.prototype
C.a_=W.bf.prototype
C.C=W.eh.prototype
C.r=J.bR.prototype
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

C.M=new P.i8()
C.h=new P.jl()
C.N=new P.jn()
C.f=new P.k4()
C.o=new P.b8(0)
C.P=new P.b8(5e6)
C.Q=new P.hj("element",!0,!1,!1,!1)
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
var v={mangledGlobalNames:{m:"int",q:"double",ac:"num",h:"String",R:"bool",N:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.N},{func:1,ret:-1,opt:[D.C]},{func:1,ret:-1,args:[D.C]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ah]},{func:1,ret:P.N,args:[F.ad,P.q,P.q]},{func:1,ret:-1,args:[P.m,[P.i,E.aq]]},{func:1,ret:P.N,args:[,,]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:P.N,args:[D.C]},{func:1,ret:P.N,args:[F.a9]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.N,args:[W.o]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.b1]},{func:1,ret:-1,args:[W.o]},{func:1,ret:P.h,args:[P.m]},{func:1,ret:V.Z,args:[P.q]},{func:1,ret:P.q,args:[P.q]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:-1,args:[P.m,[P.i,M.aF]]},{func:1,ret:-1,args:[P.m,[P.i,U.ai]]},{func:1,args:[,]},{func:1,ret:P.R,args:[W.H]},{func:1,ret:P.q},{func:1,ret:P.R,args:[W.aE]},{func:1,ret:P.R,args:[P.h]},{func:1,ret:-1,args:[P.m,[P.i,D.af]]},{func:1,ret:P.R,args:[W.V,P.h,P.h,W.bT]},{func:1,ret:P.N,args:[,]},{func:1,ret:-1,args:[P.m,[P.i,V.av]]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.C]}]},{func:1,ret:-1,args:[W.ba]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bj]},{func:1,ret:P.N,args:[P.ac]},{func:1,ret:W.V,args:[W.H]},{func:1,ret:-1,args:[W.H,W.H]},{func:1,args:[W.o]},{func:1,ret:P.S,args:[P.m]},{func:1,args:[,P.h]},{func:1,ret:P.N,args:[P.h,,]},{func:1,args:[P.h]},{func:1,ret:P.N,args:[P.h]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.m]},{func:1,ret:P.R,args:[[P.i,D.af]]},{func:1,ret:[P.A,P.h,P.h],args:[[P.A,P.h,P.h],P.h]},{func:1,ret:P.m,args:[A.aH,A.aH]},{func:1,ret:P.m,args:[A.aK,A.aK]},{func:1,ret:P.m,args:[A.aL,A.aL]},{func:1,ret:[P.aQ,,],args:[,]},{func:1,ret:P.N,args:[P.bg]},{func:1,ret:P.R,args:[V.bD]},{func:1,ret:P.N,args:[,],opt:[P.ay]},{func:1,ret:P.S,args:[,,]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b5=0
$.cz=null
$.mc=null
$.lP=!1
$.nj=null
$.n8=null
$.nq=null
$.kN=null
$.kS=null
$.lZ=null
$.cm=null
$.dr=null
$.ds=null
$.lQ=!1
$.a3=C.f
$.aA=[]
$.bo=null
$.lv=null
$.mi=null
$.mh=null
$.de=P.lC(P.h,P.bH)
$.mo=null
$.mt=null
$.cU=null
$.mz=null
$.mL=null
$.mO=null
$.mN=null
$.jo=null
$.jp=null
$.jq=null
$.mM=null
$.ms=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ql","nw",function(){return H.ni("_$dart_dartClosure")})
u($,"qm","m4",function(){return H.ni("_$dart_js")})
u($,"qr","nx",function(){return H.bi(H.j1({
toString:function(){return"$receiver$"}}))})
u($,"qs","ny",function(){return H.bi(H.j1({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"qt","nz",function(){return H.bi(H.j1(null))})
u($,"qu","nA",function(){return H.bi(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qx","nD",function(){return H.bi(H.j1(void 0))})
u($,"qy","nE",function(){return H.bi(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qw","nC",function(){return H.bi(H.mG(null))})
u($,"qv","nB",function(){return H.bi(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"qA","nG",function(){return H.bi(H.mG(void 0))})
u($,"qz","nF",function(){return H.bi(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qR","m5",function(){return P.oU()})
u($,"qD","nH",function(){return P.oQ()})
u($,"qS","nL",function(){return H.oo(H.cl(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))})
u($,"qU","nN",function(){return P.oC("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qV","nO",function(){return P.pi()})
u($,"qT","nM",function(){return P.ml(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"qK","nK",function(){return Z.aP(0)})
u($,"qE","nI",function(){return Z.aP(511)})
u($,"qM","b3",function(){return Z.aP(1)})
u($,"qL","bz",function(){return Z.aP(2)})
u($,"qG","by",function(){return Z.aP(4)})
u($,"qN","bX",function(){return Z.aP(8)})
u($,"qO","bY",function(){return Z.aP(16)})
u($,"qH","du",function(){return Z.aP(32)})
u($,"qI","dv",function(){return Z.aP(64)})
u($,"qJ","nJ",function(){return Z.aP(96)})
u($,"qP","cw",function(){return Z.aP(128)})
u($,"qF","bx",function(){return Z.aP(256)})
u($,"qk","nv",function(){return new V.h4(1e-9)})
u($,"qj","U",function(){return $.nv()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cQ,DataView:H.bM,ArrayBufferView:H.bM,Float32Array:H.cR,Float64Array:H.cR,Int16Array:H.hY,Int32Array:H.hZ,Int8Array:H.i_,Uint16Array:H.i0,Uint32Array:H.i1,Uint8ClampedArray:H.e2,CanvasPixelArray:H.e2,Uint8Array:H.cS,HTMLAudioElement:W.y,HTMLBRElement:W.y,HTMLButtonElement:W.y,HTMLContentElement:W.y,HTMLDListElement:W.y,HTMLDataElement:W.y,HTMLDataListElement:W.y,HTMLDetailsElement:W.y,HTMLDialogElement:W.y,HTMLEmbedElement:W.y,HTMLFieldSetElement:W.y,HTMLHRElement:W.y,HTMLHeadElement:W.y,HTMLHeadingElement:W.y,HTMLHtmlElement:W.y,HTMLIFrameElement:W.y,HTMLLIElement:W.y,HTMLLabelElement:W.y,HTMLLegendElement:W.y,HTMLLinkElement:W.y,HTMLMapElement:W.y,HTMLMediaElement:W.y,HTMLMenuElement:W.y,HTMLMetaElement:W.y,HTMLMeterElement:W.y,HTMLModElement:W.y,HTMLOListElement:W.y,HTMLObjectElement:W.y,HTMLOptGroupElement:W.y,HTMLOptionElement:W.y,HTMLOutputElement:W.y,HTMLParagraphElement:W.y,HTMLParamElement:W.y,HTMLPictureElement:W.y,HTMLPreElement:W.y,HTMLProgressElement:W.y,HTMLQuoteElement:W.y,HTMLScriptElement:W.y,HTMLShadowElement:W.y,HTMLSlotElement:W.y,HTMLSourceElement:W.y,HTMLSpanElement:W.y,HTMLStyleElement:W.y,HTMLTableCaptionElement:W.y,HTMLTableColElement:W.y,HTMLTextAreaElement:W.y,HTMLTimeElement:W.y,HTMLTitleElement:W.y,HTMLTrackElement:W.y,HTMLUListElement:W.y,HTMLUnknownElement:W.y,HTMLVideoElement:W.y,HTMLDirectoryElement:W.y,HTMLFontElement:W.y,HTMLFrameElement:W.y,HTMLFrameSetElement:W.y,HTMLMarqueeElement:W.y,HTMLElement:W.y,AccessibleNodeList:W.fy,HTMLAnchorElement:W.dy,HTMLAreaElement:W.fz,HTMLBaseElement:W.cx,Blob:W.c_,HTMLBodyElement:W.bB,HTMLCanvasElement:W.c1,CanvasRenderingContext2D:W.cB,CDATASection:W.bC,CharacterData:W.bC,Comment:W.bC,ProcessingInstruction:W.bC,Text:W.bC,CSSNumericValue:W.cD,CSSUnitValue:W.cD,CSSPerspective:W.fQ,CSSCharsetRule:W.Y,CSSConditionRule:W.Y,CSSFontFaceRule:W.Y,CSSGroupingRule:W.Y,CSSImportRule:W.Y,CSSKeyframeRule:W.Y,MozCSSKeyframeRule:W.Y,WebKitCSSKeyframeRule:W.Y,CSSKeyframesRule:W.Y,MozCSSKeyframesRule:W.Y,WebKitCSSKeyframesRule:W.Y,CSSMediaRule:W.Y,CSSNamespaceRule:W.Y,CSSPageRule:W.Y,CSSRule:W.Y,CSSStyleRule:W.Y,CSSSupportsRule:W.Y,CSSViewportRule:W.Y,CSSStyleDeclaration:W.cE,MSStyleCSSProperties:W.cE,CSS2Properties:W.cE,CSSImageValue:W.b6,CSSKeywordValue:W.b6,CSSPositionValue:W.b6,CSSResourceValue:W.b6,CSSURLImageValue:W.b6,CSSStyleValue:W.b6,CSSMatrixComponent:W.b7,CSSRotation:W.b7,CSSScale:W.b7,CSSSkew:W.b7,CSSTranslation:W.b7,CSSTransformComponent:W.b7,CSSTransformValue:W.fS,CSSUnparsedValue:W.fT,DataTransferItemList:W.fW,HTMLDivElement:W.aI,DOMException:W.fX,ClientRectList:W.dI,DOMRectList:W.dI,DOMRectReadOnly:W.dJ,DOMStringList:W.fY,DOMTokenList:W.fZ,Element:W.V,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.k,Accelerometer:W.k,AccessibleNode:W.k,AmbientLightSensor:W.k,Animation:W.k,ApplicationCache:W.k,DOMApplicationCache:W.k,OfflineResourceList:W.k,BackgroundFetchRegistration:W.k,BatteryManager:W.k,BroadcastChannel:W.k,CanvasCaptureMediaStreamTrack:W.k,DedicatedWorkerGlobalScope:W.k,EventSource:W.k,FileReader:W.k,FontFaceSet:W.k,Gyroscope:W.k,XMLHttpRequest:W.k,XMLHttpRequestEventTarget:W.k,XMLHttpRequestUpload:W.k,LinearAccelerationSensor:W.k,Magnetometer:W.k,MediaDevices:W.k,MediaKeySession:W.k,MediaQueryList:W.k,MediaRecorder:W.k,MediaSource:W.k,MediaStream:W.k,MediaStreamTrack:W.k,MIDIAccess:W.k,MIDIInput:W.k,MIDIOutput:W.k,MIDIPort:W.k,NetworkInformation:W.k,Notification:W.k,OffscreenCanvas:W.k,OrientationSensor:W.k,PaymentRequest:W.k,Performance:W.k,PermissionStatus:W.k,PresentationAvailability:W.k,PresentationConnection:W.k,PresentationConnectionList:W.k,PresentationRequest:W.k,RelativeOrientationSensor:W.k,RemotePlayback:W.k,RTCDataChannel:W.k,DataChannel:W.k,RTCDTMFSender:W.k,RTCPeerConnection:W.k,webkitRTCPeerConnection:W.k,mozRTCPeerConnection:W.k,ScreenOrientation:W.k,Sensor:W.k,ServiceWorker:W.k,ServiceWorkerContainer:W.k,ServiceWorkerGlobalScope:W.k,ServiceWorkerRegistration:W.k,SharedWorker:W.k,SharedWorkerGlobalScope:W.k,SpeechRecognition:W.k,SpeechSynthesis:W.k,SpeechSynthesisUtterance:W.k,VR:W.k,VRDevice:W.k,VRDisplay:W.k,VRSession:W.k,VisualViewport:W.k,WebSocket:W.k,Worker:W.k,WorkerGlobalScope:W.k,WorkerPerformance:W.k,BluetoothDevice:W.k,BluetoothRemoteGATTCharacteristic:W.k,Clipboard:W.k,MojoInterfaceInterceptor:W.k,USB:W.k,IDBDatabase:W.k,IDBOpenDBRequest:W.k,IDBVersionChangeRequest:W.k,IDBRequest:W.k,IDBTransaction:W.k,AnalyserNode:W.k,RealtimeAnalyserNode:W.k,AudioBufferSourceNode:W.k,AudioDestinationNode:W.k,AudioNode:W.k,AudioScheduledSourceNode:W.k,AudioWorkletNode:W.k,BiquadFilterNode:W.k,ChannelMergerNode:W.k,AudioChannelMerger:W.k,ChannelSplitterNode:W.k,AudioChannelSplitter:W.k,ConstantSourceNode:W.k,ConvolverNode:W.k,DelayNode:W.k,DynamicsCompressorNode:W.k,GainNode:W.k,AudioGainNode:W.k,IIRFilterNode:W.k,MediaElementAudioSourceNode:W.k,MediaStreamAudioDestinationNode:W.k,MediaStreamAudioSourceNode:W.k,OscillatorNode:W.k,Oscillator:W.k,PannerNode:W.k,AudioPannerNode:W.k,webkitAudioPannerNode:W.k,ScriptProcessorNode:W.k,JavaScriptAudioNode:W.k,StereoPannerNode:W.k,WaveShaperNode:W.k,EventTarget:W.k,File:W.aJ,FileList:W.cH,FileWriter:W.h8,HTMLFormElement:W.hc,Gamepad:W.aT,History:W.hh,HTMLCollection:W.c5,HTMLFormControlsCollection:W.c5,HTMLOptionsCollection:W.c5,ImageData:W.bp,HTMLImageElement:W.cK,HTMLInputElement:W.cL,KeyboardEvent:W.ba,Location:W.dU,MediaList:W.hR,MessagePort:W.cO,MIDIInputMap:W.hS,MIDIOutputMap:W.hU,MimeType:W.aV,MimeTypeArray:W.hW,PointerEvent:W.ah,MouseEvent:W.ah,DragEvent:W.ah,Document:W.H,DocumentFragment:W.H,HTMLDocument:W.H,ShadowRoot:W.H,XMLDocument:W.H,DocumentType:W.H,Node:W.H,NodeList:W.cT,RadioNodeList:W.cT,Plugin:W.aW,PluginArray:W.ib,RTCStatsReport:W.im,HTMLSelectElement:W.iq,SourceBuffer:W.aX,SourceBufferList:W.iB,SpeechGrammar:W.aY,SpeechGrammarList:W.iC,SpeechRecognitionResult:W.aZ,Storage:W.iF,CSSStyleSheet:W.aM,StyleSheet:W.aM,HTMLTableCellElement:W.bf,HTMLTableDataCellElement:W.bf,HTMLTableHeaderCellElement:W.bf,HTMLTableElement:W.eh,HTMLTableRowElement:W.iM,HTMLTableSectionElement:W.iN,HTMLTemplateElement:W.d1,TextTrack:W.b_,TextTrackCue:W.aN,VTTCue:W.aN,TextTrackCueList:W.iP,TextTrackList:W.iQ,TimeRanges:W.iU,Touch:W.b0,TouchEvent:W.b1,TouchList:W.iY,TrackDefaultList:W.iZ,CompositionEvent:W.bP,FocusEvent:W.bP,TextEvent:W.bP,UIEvent:W.bP,URL:W.jk,VideoTrackList:W.jC,WheelEvent:W.bj,Window:W.db,DOMWindow:W.db,Attr:W.dc,CSSRuleList:W.jL,ClientRect:W.eA,DOMRect:W.eA,GamepadList:W.k_,NamedNodeMap:W.eS,MozNamedAttrMap:W.eS,SpeechRecognitionResultList:W.kd,StyleSheetList:W.kh,SVGLength:P.bb,SVGLengthList:P.hr,SVGNumber:P.be,SVGNumberList:P.i6,SVGPointList:P.id,SVGScriptElement:P.cW,SVGStringList:P.iL,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bh,SVGTransformList:P.j_,AudioBuffer:P.fC,AudioParamMap:P.fD,AudioTrackList:P.fF,AudioContext:P.bZ,webkitAudioContext:P.bZ,BaseAudioContext:P.bZ,OfflineAudioContext:P.i7,WebGLBuffer:P.dB,WebGLProgram:P.e7,WebGL2RenderingContext:P.cd,WebGLShader:P.ea,WebGLTexture:P.ei,WebGLUniformLocation:P.en,SQLResultSetRowList:P.iD})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e0.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
H.e1.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(D.nm,[])
else D.nm([])})})()
//# sourceMappingURL=test.dart.js.map
