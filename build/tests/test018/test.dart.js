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
a[c]=function(){a[c]=function(){H.q1(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lL"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lL"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lL(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={lo:function lo(){},
kN:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
hi:function(){return new P.cd("No element")},
nY:function(){return new P.cd("Too many elements")},
nX:function(){return new P.cd("Too few elements")},
eb:function(a,b,c,d,e){H.l(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.m,args:[e,e]})
if(c-b<=32)H.or(a,b,c,d,e)
else H.oq(a,b,c,d,e)},
or:function(a,b,c,d,e){var u,t,s,r,q
H.l(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.m,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.e(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.e(a,r)
r=J.b5(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.e(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
oq:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.l(a2,"$ib",[a6],"$ab")
H.n(a5,{func:1,ret:P.m,args:[a6,a6]})
u=C.d.a5(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.d.a5(a3+a4,2)
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
if(J.b5(a5.$2(n,m),0)){i=m
m=n
n=i}if(J.b5(a5.$2(k,j),0)){i=j
j=k
k=i}if(J.b5(a5.$2(n,l),0)){i=l
l=n
n=i}if(J.b5(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.b5(a5.$2(n,k),0)){i=k
k=n
n=i}if(J.b5(a5.$2(l,k),0)){i=k
k=l
l=i}if(J.b5(a5.$2(m,j),0)){i=j
j=m
m=i}if(J.b5(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.b5(a5.$2(k,j),0)){i=j
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
if(J.L(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.e(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.R()
if(d<0){if(f!==h){if(h>=a2.length)return H.e(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.an()
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
if(typeof a1!=="number")return a1.an()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.an()
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
H.eb(a2,a3,h-2,a5,a6)
H.eb(a2,g+2,a4,a5,a6)
if(a)return
if(h<t&&g>s){while(!0){if(h>=a2.length)return H.e(a2,h)
if(!J.L(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.e(a2,g)
if(!J.L(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.e(a2,f)
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
break}}}H.eb(a2,h,g,a5,a6)}else H.eb(a2,h,g,a5,a6)},
t:function t(a){this.a=a},
fZ:function fZ(){},
c7:function c7(){},
cL:function cL(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hy:function hy(a,b,c){this.a=a
this.b=b
this.$ti=c},
hz:function hz(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hA:function hA(a,b,c){this.a=a
this.b=b
this.$ti=c},
da:function da(a,b,c){this.a=a
this.b=b
this.$ti=c},
jC:function jC(a,b,c){this.a=a
this.b=b
this.$ti=c},
c3:function c3(){},
d7:function d7(){},
en:function en(){},
nO:function(){throw H.c(P.J("Cannot modify unmodifiable Map"))},
cw:function(a){var u,t=H.K(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
pJ:function(a){return v.types[H.a4(a)]},
pQ:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.U(a).$iM},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.au(a)
if(typeof u!=="string")throw H.c(H.as(a))
return u},
cW:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
oi:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.e(p,3)
u=H.K(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ai(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.F(s,q)|32)>t)return}return parseInt(a,b)},
c9:function(a){return H.o9(a)+H.lH(H.bW(a),0,null)},
o9:function(a){var u,t,s,r,q,p,o,n=J.U(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ibS){r=C.v(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cw(t.length>1&&C.b.F(t,0)===36?C.b.a8(t,1):t)},
oa:function(){if(!!self.location)return self.location.href
return},
mg:function(a){var u,t,s,r,q
H.kU(a)
u=J.aH(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
oj:function(a){var u,t,s,r=H.d([],[P.m])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.as(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.aS(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.as(s))}return H.mg(r)},
mh:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.as(s))
if(s<0)throw H.c(H.as(s))
if(s>65535)return H.oj(a)}return H.mg(a)},
ok:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
ca:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aS(u,10))>>>0,56320|u&1023)}}throw H.c(P.ai(a,0,1114111,null,null))},
c8:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oh:function(a){var u=H.c8(a).getFullYear()+0
return u},
of:function(a){var u=H.c8(a).getMonth()+1
return u},
ob:function(a){var u=H.c8(a).getDate()+0
return u},
oc:function(a){var u=H.c8(a).getHours()+0
return u},
oe:function(a){var u=H.c8(a).getMinutes()+0
return u},
og:function(a){var u=H.c8(a).getSeconds()+0
return u},
od:function(a){var u=H.c8(a).getMilliseconds()+0
return u},
F:function(a){throw H.c(H.as(a))},
e:function(a,b){if(a==null)J.aH(a)
throw H.c(H.cq(a,b))},
cq:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aT(!0,b,s,null)
u=H.a4(J.aH(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.a_(b,a,s,null,u)
return P.e7(b,s)},
pD:function(a,b,c){var u="Invalid value"
if(a>c)return new P.cb(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.cb(a,c,!0,b,"end",u)
return new P.aT(!0,b,"end",null)},
as:function(a){return new P.aT(!0,a,null,null)},
py:function(a){if(typeof a!=="number")throw H.c(H.as(a))
return a},
c:function(a){var u
if(a==null)a=new P.e3()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.nd})
u.name=""}else u.toString=H.nd
return u},
nd:function(){return J.au(this.dartException)},
w:function(a){throw H.c(a)},
u:function(a){throw H.c(P.bp(a))},
bk:function(a){var u,t,s,r,q,p
a=H.nb(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iZ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
j_:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mq:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
mc:function(a,b){return new H.i2(a,b==null?null:b.method)},
lp:function(a,b){var u=b==null,t=u?null:b.method
return new H.hl(a,t,u?null:b.receiver)},
ak:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.lc(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aS(t,16)&8191)===10)switch(s){case 438:return f.$1(H.lp(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.mc(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.ng()
q=$.nh()
p=$.ni()
o=$.nj()
n=$.nm()
m=$.nn()
l=$.nl()
$.nk()
k=$.np()
j=$.no()
i=r.ae(u)
if(i!=null)return f.$1(H.lp(H.K(u),i))
else{i=q.ae(u)
if(i!=null){i.method="call"
return f.$1(H.lp(H.K(u),i))}else{i=p.ae(u)
if(i==null){i=o.ae(u)
if(i==null){i=n.ae(u)
if(i==null){i=m.ae(u)
if(i==null){i=l.ae(u)
if(i==null){i=o.ae(u)
if(i==null){i=k.ae(u)
if(i==null){i=j.ae(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.mc(H.K(u),i))}}return f.$1(new H.jb(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ed()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aT(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ed()
return a},
cu:function(a){var u
if(a==null)return new H.f1(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f1(a)},
pH:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
pP:function(a,b,c,d,e,f){H.h(a,"$ibM")
switch(H.a4(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.v("Unsupported number of arguments for wrapped closure"))},
cp:function(a,b){var u
H.a4(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pP)
a.$identity=u
return u},
nN:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.iB().constructor.prototype):Object.create(new H.cz(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b6
if(typeof t!=="number")return t.p()
$.b6=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.m2(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.pJ,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.m1:H.lg
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.m2(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
nK:function(a,b,c,d){var u=H.lg
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
m2:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nM(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nK(t,!r,u,b)
if(t===0){r=$.b6
if(typeof r!=="number")return r.p()
$.b6=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cA
return new Function(r+H.i(q==null?$.cA=H.fG("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b6
if(typeof r!=="number")return r.p()
$.b6=r+1
o+=r
r="return function("+o+"){return this."
q=$.cA
return new Function(r+H.i(q==null?$.cA=H.fG("self"):q)+"."+H.i(u)+"("+o+");}")()},
nL:function(a,b,c,d){var u=H.lg,t=H.m1
switch(b?-1:a){case 0:throw H.c(H.oo("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nM:function(a,b){var u,t,s,r,q,p,o,n=$.cA
if(n==null)n=$.cA=H.fG("self")
u=$.m0
if(u==null)u=$.m0=H.fG("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nL(s,!q,t,b)
if(s===1){n="return function(){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+");"
u=$.b6
if(typeof u!=="number")return u.p()
$.b6=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+", "+o+");"
u=$.b6
if(typeof u!=="number")return u.p()
$.b6=u+1
return new Function(n+u+"}")()},
lL:function(a,b,c,d,e,f,g){return H.nN(a,b,H.a4(c),d,!!e,!!f,g)},
lg:function(a){return a.a},
m1:function(a){return a.c},
fG:function(a){var u,t,s,r=new H.cz("self","target","receiver","name"),q=J.lm(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
G:function(a){if(a==null)H.pu("boolean expression must not be null")
return a},
K:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b3(a,"String"))},
pE:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b3(a,"double"))},
n7:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b3(a,"num"))},
lI:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b3(a,"bool"))},
a4:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b3(a,"int"))},
n9:function(a,b){throw H.c(H.b3(a,H.cw(H.K(b).substring(2))))},
pX:function(a,b){throw H.c(H.nJ(a,H.cw(H.K(b).substring(2))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.U(a)[b])return a
H.n9(a,b)},
B:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.U(a)[b]
else u=!0
if(u)return a
H.pX(a,b)},
kU:function(a){if(a==null)return a
if(!!J.U(a).$ib)return a
throw H.c(H.b3(a,"List<dynamic>"))},
n5:function(a,b){var u
if(a==null)return a
u=J.U(a)
if(!!u.$ib)return a
if(u[b])return a
H.n9(a,b)},
n_:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a4(u)]
else return a.$S()}return},
fq:function(a,b){var u
if(typeof a=="function")return!0
u=H.n_(J.U(a))
if(u==null)return!1
return H.mM(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lE)return a
$.lE=!0
try{if(H.fq(a,b))return a
u=H.l5(b)
t=H.b3(a,u)
throw H.c(t)}finally{$.lE=!1}},
lN:function(a,b){if(a!=null&&!H.lK(a,b))H.w(H.b3(a,H.l5(b)))
return a},
b3:function(a,b){return new H.j0("TypeError: "+P.dL(a)+": type '"+H.mS(a)+"' is not a subtype of type '"+b+"'")},
nJ:function(a,b){return new H.fH("CastError: "+P.dL(a)+": type '"+H.mS(a)+"' is not a subtype of type '"+b+"'")},
mS:function(a){var u,t=J.U(a)
if(!!t.$icC){u=H.n_(t)
if(u!=null)return H.l5(u)
return"Closure"}return H.c9(a)},
pu:function(a){throw H.c(new H.jD(a))},
q1:function(a){throw H.c(new P.fR(H.K(a)))},
oo:function(a){return new H.il(a)},
n2:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bW:function(a){if(a==null)return
return a.$ti},
qM:function(a,b,c){return H.cv(a["$a"+H.i(c)],H.bW(b))},
bV:function(a,b,c,d){var u
H.K(c)
H.a4(d)
u=H.cv(a["$a"+H.i(c)],H.bW(b))
return u==null?null:u[d]},
at:function(a,b,c){var u
H.K(b)
H.a4(c)
u=H.cv(a["$a"+H.i(b)],H.bW(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.a4(b)
u=H.bW(a)
return u==null?null:u[b]},
l5:function(a){return H.bU(a,null)},
bU:function(a,b){var u,t
H.l(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cw(a[0].name)+H.lH(a,1,b)
if(typeof a=="function")return H.cw(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a4(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.i(b[t])}if('func' in a)return H.p3(a,b)
if('futureOr' in a)return"FutureOr<"+H.bU("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
p3:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.f]
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
if(m!=null&&m!==P.P)p+=" extends "+H.bU(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bU(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bU(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bU(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.pG(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.K(b[h])
j=j+i+H.bU(e[d],a0)+(" "+H.i(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
lH:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.aj("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bU(p,c)}return"<"+u.i(0)+">"},
cv:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lJ:function(a,b,c,d){var u,t
H.K(b)
H.kU(c)
H.K(d)
if(a==null)return!1
u=H.bW(a)
t=J.U(a)
if(t[b]==null)return!1
return H.mV(H.cv(t[d],u),null,c,null)},
l:function(a,b,c,d){H.K(b)
H.kU(c)
H.K(d)
if(a==null)return a
if(H.lJ(a,b,c,d))return a
throw H.c(H.b3(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cw(b.substring(2))+H.lH(c,0,null),v.mangledGlobalNames)))},
mV:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aS(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aS(a[t],b,c[t],d))return!1
return!0},
qK:function(a,b,c){return a.apply(b,H.cv(J.U(b)["$a"+H.i(c)],H.bW(b)))},
n4:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="P"||a.name==="N"||a===-1||a===-2||H.n4(u)}return!1},
lK:function(a,b){var u,t
if(a==null)return b==null||b.name==="P"||b.name==="N"||b===-1||b===-2||H.n4(b)
if(b==null||b===-1||b.name==="P"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lK(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fq(a,b)}u=J.U(a).constructor
t=H.bW(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aS(u,null,b,null)},
E:function(a,b){if(a!=null&&!H.lK(a,b))throw H.c(H.b3(a,H.l5(b)))
return a},
aS:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="P"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="P"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aS(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="N")return!0
if('func' in c)return H.mM(a,b,c,d)
if('func' in a)return c.name==="bM"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aS("type" in a?a.type:l,b,s,d)
else if(H.aS(a,b,s,d))return!0
else{if(!('$i'+"cH" in t.prototype))return!1
r=t.prototype["$a"+"cH"]
q=H.cv(r,u?a.slice(1):l)
return H.aS(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mV(H.cv(m,u),b,p,d)},
mM:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aS(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aS(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aS(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aS(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pV(h,b,g,d)},
pV:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aS(c[s],d,a[s],b))return!1}return!0},
qL:function(a,b,c){Object.defineProperty(a,H.K(b),{value:c,enumerable:false,writable:true,configurable:true})},
pT:function(a){var u,t,s,r,q=H.K($.n3.$1(a)),p=$.kM[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kR[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.K($.mU.$2(a,q))
if(q!=null){p=$.kM[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kR[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.l4(u)
$.kM[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kR[q]=u
return u}if(s==="-"){r=H.l4(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.n8(a,u)
if(s==="*")throw H.c(P.ja(q))
if(v.leafTags[q]===true){r=H.l4(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.n8(a,u)},
n8:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lP(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
l4:function(a){return J.lP(a,!1,null,!!a.$iM)},
pU:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.l4(u)
else return J.lP(u,c,null,null)},
pN:function(){if(!0===$.lO)return
$.lO=!0
H.pO()},
pO:function(){var u,t,s,r,q,p,o,n
$.kM=Object.create(null)
$.kR=Object.create(null)
H.pM()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.na.$1(q)
if(p!=null){o=H.pU(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pM:function(){var u,t,s,r,q,p,o=C.G()
o=H.co(C.H,H.co(C.I,H.co(C.u,H.co(C.u,H.co(C.J,H.co(C.K,H.co(C.L(C.v),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.n3=new H.kO(r)
$.mU=new H.kP(q)
$.na=new H.kQ(p)},
co:function(a,b){return a(b)||b},
o_:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a7("Illegal RegExp pattern ("+String(r)+")",a,null))},
q_:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
pF:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nb:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lS:function(a,b,c){var u=H.q0(a,b,c)
return u},
q0:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nb(b),'g'),H.pF(c))},
fL:function fL(){},
fM:function fM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iZ:function iZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i2:function i2(a,b){this.a=a
this.b=b},
hl:function hl(a,b,c){this.a=a
this.b=b
this.c=c},
jb:function jb(a){this.a=a},
lc:function lc(a){this.a=a},
f1:function f1(a){this.a=a
this.b=null},
cC:function cC(){},
iL:function iL(){},
iB:function iB(){},
cz:function cz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j0:function j0(a){this.a=a},
fH:function fH(a){this.a=a},
il:function il(a){this.a=a},
jD:function jD(a){this.a=a},
a3:function a3(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hp:function hp(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hq:function hq(a,b){this.a=a
this.$ti=b},
hr:function hr(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
hk:function hk(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cm:function(a){return a},
o8:function(a){return new Int8Array(a)},
bn:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cq(b,a))},
p1:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.pD(a,b,c))
return b},
cR:function cR(){},
bP:function bP(){},
e_:function e_(){},
cS:function cS(){},
e0:function e0(){},
hV:function hV(){},
hW:function hW(){},
hX:function hX(){},
hY:function hY(){},
hZ:function hZ(){},
e1:function e1(){},
cT:function cT(){},
df:function df(){},
dg:function dg(){},
dh:function dh(){},
di:function di(){},
pG:function(a){return J.m7(a?Object.keys(a):[],null)},
pW:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lP:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fs:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lO==null){H.pN()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.ja("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lT()]
if(r!=null)return r
r=H.pT(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.lT(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
nZ:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.lf(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ai(a,0,4294967295,"length",null))
return J.m7(new Array(a),b)},
m7:function(a,b){return J.lm(H.d(a,[b]))},
lm:function(a){H.kU(a)
a.fixed$length=Array
return a},
U:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dO.prototype
return J.dN.prototype}if(typeof a=="string")return J.bs.prototype
if(a==null)return J.dP.prototype
if(typeof a=="boolean")return J.hj.prototype
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.P)return a
return J.fs(a)},
pI:function(a){if(typeof a=="number")return J.bO.prototype
if(typeof a=="string")return J.bs.prototype
if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.P)return a
return J.fs(a)},
cs:function(a){if(typeof a=="string")return J.bs.prototype
if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.P)return a
return J.fs(a)},
fr:function(a){if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.P)return a
return J.fs(a)},
n0:function(a){if(typeof a=="number")return J.bO.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bS.prototype
return a},
n1:function(a){if(typeof a=="number")return J.bO.prototype
if(typeof a=="string")return J.bs.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bS.prototype
return a},
dt:function(a){if(typeof a=="string")return J.bs.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bS.prototype
return a},
ct:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.P)return a
return J.fs(a)},
ny:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pI(a).p(a,b)},
L:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).v(a,b)},
b5:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.n0(a).an(a,b)},
lV:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.n1(a).u(a,b)},
nz:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.n0(a).t(a,b)},
dw:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pQ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cs(a).j(a,b)},
ld:function(a,b,c){return J.fr(a).k(a,b,c)},
nA:function(a,b){return J.dt(a).F(a,b)},
nB:function(a,b,c){return J.ct(a).hF(a,b,c)},
nC:function(a,b,c,d){return J.ct(a).ib(a,b,c,d)},
nD:function(a,b){return J.dt(a).Z(a,b)},
le:function(a,b){return J.n1(a).iu(a,b)},
fu:function(a,b){return J.fr(a).K(a,b)},
nE:function(a,b,c,d){return J.ct(a).iH(a,b,c,d)},
lW:function(a,b){return J.fr(a).I(a,b)},
nF:function(a){return J.ct(a).gip(a)},
lX:function(a){return J.ct(a).gcj(a)},
dx:function(a){return J.U(a).gJ(a)},
bF:function(a){return J.fr(a).gU(a)},
aH:function(a){return J.cs(a).gn(a)},
lY:function(a){return J.fr(a).jd(a)},
nG:function(a,b){return J.ct(a).jh(a,b)},
nH:function(a,b,c){return J.dt(a).B(a,b,c)},
nI:function(a){return J.dt(a).jq(a)},
au:function(a){return J.U(a).i(a)},
a:function a(){},
hj:function hj(){},
dP:function dP(){},
dQ:function dQ(){},
i6:function i6(){},
bS:function bS(){},
bt:function bt(){},
aV:function aV(a){this.$ti=a},
ln:function ln(a){this.$ti=a},
aB:function aB(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bO:function bO(){},
dO:function dO(){},
dN:function dN(){},
bs:function bs(){}},P={
oE:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pv()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cp(new P.jF(s),1)).observe(u,{childList:true})
return new P.jE(s,u,t)}else if(self.setImmediate!=null)return P.pw()
return P.px()},
oF:function(a){self.scheduleImmediate(H.cp(new P.jG(H.n(a,{func:1,ret:-1})),0))},
oG:function(a){self.setImmediate(H.cp(new P.jH(H.n(a,{func:1,ret:-1})),0))},
oH:function(a){P.lu(C.o,H.n(a,{func:1,ret:-1}))},
lu:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.d.a5(a.a,1000)
return P.oN(u<0?0:u,b)},
mp:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.bi]})
u=C.d.a5(a.a,1000)
return P.oO(u<0?0:u,b)},
oN:function(a,b){var u=new P.f7()
u.f3(a,b)
return u},
oO:function(a,b){var u=new P.f7()
u.f4(a,b)
return u},
oI:function(a,b){var u,t,s
b.a=1
try{a.es(new P.jR(b),new P.jS(b),null)}catch(s){u=H.ak(s)
t=H.cu(s)
P.pY(new P.jT(b,u,t))}},
mB:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.h(a.c,"$iaR")
if(u>=4){t=b.c5()
b.a=a.a
b.c=a.c
P.dd(b,t)}else{t=H.h(b.c,"$ibm")
b.a=2
b.c=a
a.dt(t)}},
dd:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.h(g.c,"$iao")
g=g.b
r=s.a
q=s.b
g.toString
P.kD(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
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
if(m){H.h(o,"$iao")
g=g.b
r=o.a
q=o.b
g.toString
P.kD(i,i,g,r,q)
return}l=$.a1
if(l!=n)$.a1=n
else l=i
g=b.c
if(g===8)new P.jX(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jW(u,b,o).$0()}else if((g&2)!==0)new P.jV(h,u,b).$0()
if(l!=null)$.a1=l
g=u.b
if(!!J.U(g).$icH){if(g.a>=4){k=H.h(q.c,"$ibm")
q.c=null
b=q.bo(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.mB(g,q)
return}}j=b.b
k=H.h(j.c,"$ibm")
j.c=null
b=j.bo(k)
g=u.a
r=u.b
if(!g){H.E(r,H.r(j,0))
j.a=4
j.c=r}else{H.h(r,"$iao")
j.a=8
j.c=r}h.a=j
g=j}},
pq:function(a,b){if(H.fq(a,{func:1,args:[P.P,P.az]}))return H.n(a,{func:1,ret:null,args:[P.P,P.az]})
if(H.fq(a,{func:1,args:[P.P]}))return H.n(a,{func:1,ret:null,args:[P.P]})
throw H.c(P.lf(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pp:function(){var u,t
for(;u=$.cn,u!=null;){$.ds=null
t=u.b
$.cn=t
if(t==null)$.dr=null
u.a.$0()}},
pt:function(){$.lF=!0
try{P.pp()}finally{$.ds=null
$.lF=!1
if($.cn!=null)$.lU().$1(P.mW())}},
mR:function(a){var u=new P.eu(H.n(a,{func:1,ret:-1}))
if($.cn==null){$.cn=$.dr=u
if(!$.lF)$.lU().$1(P.mW())}else $.dr=$.dr.b=u},
ps:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cn
if(u==null){P.mR(a)
$.ds=$.dr
return}t=new P.eu(a)
s=$.ds
if(s==null){t.b=u
$.cn=$.ds=t}else{t.b=s.b
$.ds=s.b=t
if(t.b==null)$.dr=t}},
pY:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a1
if(C.f===u){P.kF(t,t,C.f,a)
return}u.toString
P.kF(t,t,u,H.n(u.cd(a),s))},
mo:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a1
if(u===C.f){u.toString
return P.lu(a,b)}return P.lu(a,H.n(u.cd(b),t))},
ou:function(a,b){var u,t,s={func:1,ret:-1,args:[P.bi]}
H.n(b,s)
u=$.a1
if(u===C.f){u.toString
return P.mp(a,b)}t=u.dH(b,P.bi)
$.a1.toString
return P.mp(a,H.n(t,s))},
kD:function(a,b,c,d,e){var u={}
u.a=d
P.ps(new P.kE(u,e))},
mN:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a1
if(t===c)return d.$0()
$.a1=c
u=t
try{t=d.$0()
return t}finally{$.a1=u}},
mO:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.E(e,g)
t=$.a1
if(t===c)return d.$1(e)
$.a1=c
u=t
try{t=d.$1(e)
return t}finally{$.a1=u}},
pr:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.E(e,h)
H.E(f,i)
t=$.a1
if(t===c)return d.$2(e,f)
$.a1=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a1=u}},
kF:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.cd(d):c.iq(d,-1)
P.mR(d)},
jF:function jF(a){this.a=a},
jE:function jE(a,b,c){this.a=a
this.b=b
this.c=c},
jG:function jG(a){this.a=a},
jH:function jH(a){this.a=a},
f7:function f7(){this.c=0},
kl:function kl(a,b){this.a=a
this.b=b},
kk:function kk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bm:function bm(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aR:function aR(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jQ:function jQ(a,b){this.a=a
this.b=b},
jU:function jU(a,b){this.a=a
this.b=b},
jR:function jR(a){this.a=a},
jS:function jS(a){this.a=a},
jT:function jT(a,b,c){this.a=a
this.b=b
this.c=c},
jX:function jX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jY:function jY(a){this.a=a},
jW:function jW(a,b,c){this.a=a
this.b=b
this.c=c},
jV:function jV(a,b,c){this.a=a
this.b=b
this.c=c},
eu:function eu(a){this.a=a
this.b=null},
iE:function iE(){},
iG:function iG(a,b){this.a=a
this.b=b},
iH:function iH(a,b){this.a=a
this.b=b},
d_:function d_(){},
iF:function iF(){},
bi:function bi(){},
ao:function ao(a,b){this.a=a
this.b=b},
ku:function ku(){},
kE:function kE(a,b){this.a=a
this.b=b},
k3:function k3(){},
k5:function k5(a,b,c){this.a=a
this.b=b
this.c=c},
k4:function k4(a,b){this.a=a
this.b=b},
k6:function k6(a,b,c){this.a=a
this.b=b
this.c=c},
o1:function(a,b){return new H.a3([a,b])},
lq:function(a,b){return new H.a3([a,b])},
o3:function(a){return H.pH(a,new H.a3([null,null]))},
dT:function(a){return new P.k1([a])},
lB:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oM:function(a,b,c){var u=new P.eJ(a,b,[c])
u.c=a.e
return u},
nW:function(a,b,c){var u,t
if(P.lG(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.f])
C.a.h($.aA,a)
try{P.p4(a,u)}finally{if(0>=$.aA.length)return H.e($.aA,-1)
$.aA.pop()}t=P.mm(b,H.n5(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
ll:function(a,b,c){var u,t
if(P.lG(a))return b+"..."+c
u=new P.aj(b)
C.a.h($.aA,a)
try{t=u
t.a=P.mm(t.a,a,", ")}finally{if(0>=$.aA.length)return H.e($.aA,-1)
$.aA.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lG:function(a){var u,t
for(u=$.aA.length,t=0;t<u;++t)if(a===$.aA[t])return!0
return!1},
p4:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.f],"$ab")
u=a.gU(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.D())return
r=H.i(u.gL(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.D()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gL(u);++s
if(!u.D()){if(s<=4){C.a.h(b,H.i(o))
return}q=H.i(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gL(u);++s
for(;u.D();o=n,n=m){m=u.gL(u);++s
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
o2:function(a,b,c){var u=P.o1(b,c)
a.I(0,new P.hs(u,b,c))
return u},
m8:function(a,b){var u,t,s=P.dT(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t)s.h(0,H.E(a[t],b))
return s},
lr:function(a){var u,t={}
if(P.lG(a))return"{...}"
u=new P.aj("")
try{C.a.h($.aA,a)
u.a+="{"
t.a=!0
J.lW(a,new P.hw(t,u))
u.a+="}"}finally{if(0>=$.aA.length)return H.e($.aA,-1)
$.aA.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
k1:function k1(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ck:function ck(a){this.a=a
this.c=this.b=null},
eJ:function eJ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hs:function hs(a,b,c){this.a=a
this.b=b
this.c=c},
ht:function ht(){},
z:function z(){},
hv:function hv(){},
hw:function hw(a,b){this.a=a
this.b=b},
af:function af(){},
km:function km(){},
hx:function hx(){},
eo:function eo(a,b){this.a=a
this.$ti=b},
k8:function k8(){},
eK:function eK(){},
fd:function fd(){},
oy:function(a,b,c,d){H.l(b,"$ib",[P.m],"$ab")
if(b instanceof Uint8Array)return P.oz(!1,b,c,d)
return},
oz:function(a,b,c,d){var u,t,s=$.nq()
if(s==null)return
u=0===c
if(u&&!0)return P.lx(s,b)
t=b.length
d=P.bx(c,d,t)
if(u&&d===t)return P.lx(s,b)
return P.lx(s,b.subarray(c,d))},
lx:function(a,b){if(P.oB(b))return
return P.oC(a,b)},
oC:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ak(t)}return},
oB:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
oA:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ak(t)}return},
mQ:function(a,b,c){var u,t,s
H.l(a,"$ib",[P.m],"$ab")
for(u=J.cs(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.ah()
if((s&127)!==s)return t-b}return c-b},
m_:function(a,b,c,d,e,f){if(C.d.bh(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
fD:function fD(){},
fE:function fE(){},
c0:function c0(){},
bJ:function bJ(){},
h0:function h0(){},
hg:function hg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hf:function hf(a){this.a=a},
jj:function jj(){},
jl:function jl(){},
ks:function ks(a){this.b=0
this.c=a},
jk:function jk(a){this.a=a},
kr:function kr(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
ft:function(a,b,c){var u
H.n(b,{func:1,ret:P.m,args:[P.f]})
u=H.oi(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a7(a,null,null))},
nT:function(a){if(a instanceof H.cC)return a.i(0)
return"Instance of '"+H.c9(a)+"'"},
o4:function(a,b,c){var u,t
H.E(b,c)
u=J.nZ(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.k(u,t,b)
return H.l(u,"$ib",[c],"$ab")},
m9:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bF(a);u.D();)C.a.h(s,H.E(u.gL(u),c))
if(b)return s
return H.l(J.lm(s),"$ib",t,"$ab")},
d0:function(a,b,c){var u,t=P.m
H.l(a,"$ij",[t],"$aj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.l(a,"$iaV",[t],"$aaV")
u=a.length
c=P.bx(b,c,u)
return H.mh(b>0||c<u?C.a.eI(a,b,c):a)}if(!!J.U(a).$icT)return H.ok(a,b,P.bx(b,c,a.length))
return P.os(a,b,c)},
os:function(a,b,c){var u,t,s,r,q=null
H.l(a,"$ij",[P.m],"$aj")
if(b<0)throw H.c(P.ai(b,0,J.aH(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.ai(c,b,J.aH(a),q,q))
t=J.bF(a)
for(s=0;s<b;++s)if(!t.D())throw H.c(P.ai(b,0,s,q,q))
r=[]
if(u)for(;t.D();)r.push(t.gL(t))
else for(s=b;s<c;++s){if(!t.D())throw H.c(P.ai(c,b,s,q,q))
r.push(t.gL(t))}return H.mh(r)},
om:function(a){return new H.hk(a,H.o_(a,!1,!0,!1))},
mm:function(a,b,c){var u=J.bF(b)
if(!u.D())return a
if(c.length===0){do a+=H.i(u.gL(u))
while(u.D())}else{a+=H.i(u.gL(u))
for(;u.D();)a=a+c+H.i(u.gL(u))}return a},
ms:function(){var u=H.oa()
if(u!=null)return P.ox(u)
throw H.c(P.J("'Uri.base' is not supported"))},
fe:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.l(a,"$ib",[P.m],"$ab")
if(c===C.h){u=$.nw().b
if(typeof b!=="string")H.w(H.as(b))
u=u.test(b)}else u=!1
if(u)return b
H.E(b,H.at(c,"c0",0))
t=c.giG().ck(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.ca(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nP:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nQ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dH:function(a){if(a>=10)return""+a
return"0"+a},
m4:function(a,b){return new P.b9(1e6*b+1000*a)},
dL:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.au(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nT(a)},
dz:function(a){return new P.aT(!1,null,null,a)},
lf:function(a,b,c){return new P.aT(!0,a,b,c)},
e7:function(a,b){return new P.cb(null,null,!0,a,b,"Value not in range")},
ai:function(a,b,c,d,e){return new P.cb(b,c,!0,a,d,"Invalid value")},
bx:function(a,b,c){if(0>a||a>c)throw H.c(P.ai(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ai(b,a,c,"end",null))
return b}return c},
lt:function(a,b){if(typeof a!=="number")return a.R()
if(a<0)throw H.c(P.ai(a,0,null,b,null))},
a_:function(a,b,c,d,e){var u=H.a4(e==null?J.aH(b):e)
return new P.hh(u,!0,a,c,"Index out of range")},
J:function(a){return new P.jc(a)},
ja:function(a){return new P.j9(a)},
ml:function(a){return new P.cd(a)},
bp:function(a){return new P.fK(a)},
v:function(a){return new P.eC(a)},
a7:function(a,b,c){return new P.ha(a,b,c)},
o5:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.m]})
u=H.d([],[c])
C.a.sn(u,a)
for(t=0;t<a;++t)C.a.k(u,t,b.$1(t))
return u},
lR:function(a){H.pW(a)},
ox:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.F(a,4)^58)*3|C.b.F(a,0)^100|C.b.F(a,1)^97|C.b.F(a,2)^116|C.b.F(a,3)^97)>>>0
if(u===0)return P.mr(e<e?C.b.B(a,0,e):a,5,f).gez()
else if(u===32)return P.mr(C.b.B(a,5,e),0,f).gez()}t=new Array(8)
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
if(P.mP(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.jx()
if(r>=0)if(P.mP(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.p()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.R()
if(typeof n!=="number")return H.F(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.b.ab(a,"..",o)))j=n>o+2&&C.b.ab(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.ab(a,"file",0)){if(q<=0){if(!C.b.ab(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.B(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.aZ(a,o,n,"/");++e
n=h}k="file"}else if(C.b.ab(a,"http",0)){if(t&&p+3===o&&C.b.ab(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aZ(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.ab(a,"https",0)){if(t&&p+4===o&&C.b.ab(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aZ(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.B(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.kb(a,r,q,p,o,n,m,k)}return P.oP(a,0,e,r,q,p,o,n,m,k)},
mu:function(a){var u=P.f
return C.a.iM(H.d(a.split("&"),[u]),P.lq(u,u),new P.jh(C.h),[P.A,P.f,P.f])},
ow:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.je(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.Z(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.ft(C.b.B(a,s,t),n,n)
if(typeof p!=="number")return p.an()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.e(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.ft(C.b.B(a,s,c),n,n)
if(typeof p!=="number")return p.an()
if(p>255)k.$2(l,s)
if(r>=u)return H.e(j,r)
j[r]=p
return j},
mt:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.jf(a)
t=new P.jg(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.m])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.Z(a,r)
if(n===58){if(r===b){++r
if(C.b.Z(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gau(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.ow(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.d.aS(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
oP:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oW(a,b,d)
else{if(d===b)P.dn(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oX(a,u,e-1):""
s=P.oT(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.F(g)
q=r<g?P.oV(P.ft(C.b.B(a,r,g),new P.kn(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oU(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.R()
o=h<i?P.lC(a,h+1,i,n):n
return new P.cl(j,t,s,q,p,o,i<c?P.oS(a,i+1,c):n)},
mF:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dn:function(a,b,c){throw H.c(P.a7(c,a,b))},
oV:function(a,b){if(a!=null&&a===P.mF(b))return
return a},
oT:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.Z(a,b)===91){if(typeof c!=="number")return c.t()
u=c-1
if(C.b.Z(a,u)!==93)P.dn(a,b,"Missing end `]` to match `[` in host")
P.mt(a,b+1,u)
return C.b.B(a,b,c).toLowerCase()}if(typeof c!=="number")return H.F(c)
t=b
for(;t<c;++t)if(C.b.Z(a,t)===58){P.mt(a,b,c)
return"["+a+"]"}return P.oZ(a,b,c)},
oZ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.F(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.Z(a,u)
if(q===37){p=P.mL(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.aj("")
n=C.b.B(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.B(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.z,o)
o=(C.z[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.aj("")
if(t<u){s.a+=C.b.B(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.dn(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.Z(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.aj("")
n=C.b.B(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mG(q)
u+=l
t=u}}}}if(s==null)return C.b.B(a,b,c)
if(t<c){n=C.b.B(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oW:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mI(C.b.F(a,b)))P.dn(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dn(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.B(a,b,c)
return P.oQ(t?a.toLowerCase():a)},
oQ:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oX:function(a,b,c){return P.dp(a,b,c,C.W,!1)},
oU:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dp(a,b,c,C.A,!0):C.j.jQ(d,new P.ko(),P.f).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a1(u,"/"))u="/"+u
return P.oY(u,e,f)},
oY:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a1(a,"/"))return P.p_(a,!u||c)
return P.p0(a)},
lC:function(a,b,c,d){var u,t={}
H.l(d,"$iA",[P.f,null],"$aA")
if(a!=null){if(d!=null)throw H.c(P.dz("Both query and queryParameters specified"))
return P.dp(a,b,c,C.l,!0)}if(d==null)return
u=new P.aj("")
t.a=""
d.I(0,new P.kp(new P.kq(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oS:function(a,b,c){return P.dp(a,b,c,C.l,!0)},
mL:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.Z(a,b+1)
t=C.b.Z(a,p)
s=H.kN(u)
r=H.kN(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.aS(q,4)
if(p>=8)return H.e(C.n,p)
p=(C.n[p]&1<<(q&15))!==0}else p=!1
if(p)return H.ca(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.B(a,b,b+3).toUpperCase()
return},
mG:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.m])
C.a.k(t,0,37)
C.a.k(t,1,C.b.F(o,a>>>4))
C.a.k(t,2,C.b.F(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.m])
for(q=0;--r,r>=0;s=128){p=C.d.hV(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.F(o,p>>>4))
C.a.k(t,q+2,C.b.F(o,p&15))
q+=3}}return P.d0(t,0,null)},
dp:function(a,b,c,d,e){var u=P.mK(a,b,c,H.l(d,"$ib",[P.m],"$ab"),e)
return u==null?C.b.B(a,b,c):u},
mK:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.l(d,"$ib",[P.m],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.R()
if(typeof c!=="number")return H.F(c)
if(!(t<c))break
c$0:{q=C.b.Z(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mL(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.k,p)
p=(C.k[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dn(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.Z(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mG(q)}}if(r==null)r=new P.aj("")
r.a+=C.b.B(a,s,t)
r.a+=H.i(o)
if(typeof n!=="number")return H.F(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.R()
if(s<c)r.a+=C.b.B(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mJ:function(a){if(C.b.a1(a,"."))return!0
return C.b.e4(a,"/.")!==-1},
p0:function(a){var u,t,s,r,q,p,o
if(!P.mJ(a))return a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.L(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
p_:function(a,b){var u,t,s,r,q,p
if(!P.mJ(a))return!b?P.mH(a):a
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
C.a.k(u,0,P.mH(u[0]))}return C.a.m(u,"/")},
mH:function(a){var u,t,s,r=a.length
if(r>=2&&P.mI(J.nA(a,0)))for(u=1;u<r;++u){t=C.b.F(a,u)
if(t===58)return C.b.B(a,0,u)+"%3A"+C.b.a8(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.e(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oR:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dz("Invalid URL encoding"))}}return u},
lD:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.F(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.B(a,b,c)
else r=new H.t(C.b.B(a,b,c))}else{r=H.d([],[P.m])
for(s=a.length,q=b;q<c;++q){t=C.b.F(a,q)
if(t>127)throw H.c(P.dz("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.dz("Truncated URI"))
C.a.h(r,P.oR(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.l(r,"$ib",[P.m],"$ab")
return new P.jk(!1).ck(r)},
mI:function(a){var u=a|32
return 97<=u&&u<=122},
mr:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.m])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.F(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a7(m,a,t))}}if(s<0&&t>b)throw H.c(P.a7(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.F(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gau(l)
if(r!==44||t!==p+7||!C.b.ab(a,"base64",p+1))throw H.c(P.a7("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.iX(0,a,o,u)
else{n=P.mK(a,o,u,C.l,!0)
if(n!=null)a=C.b.aZ(a,o,u,n)}return new P.jd(a,l,c)},
p2:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.o5(22,new P.ky(),P.R),n=new P.kx(o),m=new P.kz(),l=new P.kA(),k=H.h(n.$2(0,225),"$iR")
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
mP:function(a,b,c,d,e){var u,t,s,r,q
H.l(e,"$ib",[P.m],"$ab")
u=$.nx()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.b.F(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.k(e,q>>>5,t)}return d},
S:function S(){},
aC:function aC(a,b){this.a=a
this.b=b},
q:function q(){},
b9:function b9(a){this.a=a},
fX:function fX(){},
fY:function fY(){},
bL:function bL(){},
fx:function fx(){},
e3:function e3(){},
aT:function aT(a,b,c,d){var _=this
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
hh:function hh(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
jc:function jc(a){this.a=a},
j9:function j9(a){this.a=a},
cd:function cd(a){this.a=a},
fK:function fK(a){this.a=a},
i5:function i5(){},
ed:function ed(){},
fR:function fR(a){this.a=a},
eC:function eC(a){this.a=a},
ha:function ha(a,b,c){this.a=a
this.b=b
this.c=c},
bM:function bM(){},
m:function m(){},
j:function j(){},
ba:function ba(){},
b:function b(){},
A:function A(){},
N:function N(){},
ab:function ab(){},
P:function P(){},
az:function az(){},
f:function f(){},
aj:function aj(a){this.a=a},
jh:function jh(a){this.a=a},
je:function je(a){this.a=a},
jf:function jf(a){this.a=a},
jg:function jg(a,b){this.a=a
this.b=b},
cl:function cl(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
kn:function kn(a,b){this.a=a
this.b=b},
ko:function ko(){},
kq:function kq(a,b){this.a=a
this.b=b},
kp:function kp(a){this.a=a},
jd:function jd(a,b,c){this.a=a
this.b=b
this.c=c},
ky:function ky(){},
kx:function kx(a){this.a=a},
kz:function kz(){},
kA:function kA(){},
kb:function kb(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jL:function jL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
pB:function(a){var u,t=J.U(a)
if(!!t.$ibr){u=t.gdL(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fc(a.data,a.height,a.width)},
pA:function(a){if(a instanceof P.fc)return{data:a.a,height:a.b,width:a.c}
return a},
bz:function(a){var u,t,s,r,q
if(a==null)return
u=P.lq(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r){q=H.K(t[r])
u.k(0,q,a[q])}return u},
pz:function(a){var u={}
a.I(0,new P.kG(u))
return u},
kd:function kd(){},
kf:function kf(a,b){this.a=a
this.b=b},
fc:function fc(a,b,c){this.a=a
this.b=b
this.c=c},
kG:function kG(a){this.a=a},
ke:function ke(a,b){this.a=a
this.b=b},
h6:function h6(a,b){this.a=a
this.b=b},
h7:function h7(){},
h8:function h8(){},
k0:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oL:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k2:function k2(){},
al:function al(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bc:function bc(){},
hn:function hn(){},
bf:function bf(){},
i3:function i3(){},
ia:function ia(){},
cX:function cX(){},
iI:function iI(){},
p:function p(){},
bj:function bj(){},
iY:function iY(){},
eH:function eH(){},
eI:function eI(){},
eS:function eS(){},
eT:function eT(){},
f3:function f3(){},
f4:function f4(){},
fa:function fa(){},
fb:function fb(){},
R:function R(){},
fz:function fz(){},
fA:function fA(){},
fB:function fB(a){this.a=a},
fC:function fC(){},
bY:function bY(){},
i4:function i4(){},
ev:function ev(){},
dB:function dB(){},
e6:function e6(){},
cc:function cc(){},
e9:function e9(){},
eg:function eg(){},
em:function em(){},
iA:function iA(){},
f_:function f_(){},
f0:function f0(){}},W={
lZ:function(){var u=document.createElement("a")
return u},
lh:function(){var u=document.createElement("canvas")
return u},
nR:function(a,b,c){var u=document.body,t=(u&&C.t).ad(u,a,b,c)
t.toString
u=W.H
u=new H.da(new W.aq(t),H.n(new W.h_(),{func:1,ret:P.S,args:[u]}),[u])
return H.h(u.gaK(u),"$iV")},
nS:function(a){H.h(a,"$ik")
return"wheel"},
cF:function(a){var u,t,s,r="element tag unavailable"
try{u=J.ct(a)
t=u.geq(a)
if(typeof t==="string")r=u.geq(a)}catch(s){H.ak(s)}return r},
nV:function(a){var u,t=document.createElement("input"),s=H.h(t,"$icK")
try{s.type=a}catch(u){H.ak(u)}return s},
k_:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mD:function(a,b,c,d){var u=W.k_(W.k_(W.k_(W.k_(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
aa:function(a,b,c,d,e){var u=W.mT(new W.jP(c),W.o)
if(u!=null&&!0)J.nC(a,b,u,!1)
return new W.jO(a,b,u,!1,[e])},
mC:function(a){var u=W.lZ(),t=window.location
u=new W.bT(new W.k7(u,t))
u.eV(a)
return u},
oJ:function(a,b,c,d){H.h(a,"$iV")
H.K(b)
H.K(c)
H.h(d,"$ibT")
return!0},
oK:function(a,b,c,d){var u,t,s
H.h(a,"$iV")
H.K(b)
H.K(c)
u=H.h(d,"$ibT").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mE:function(){var u=P.f,t=P.m8(C.p,u),s=H.r(C.p,0),r=H.n(new W.kj(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.ki(t,P.dT(u),P.dT(u),P.dT(u),null)
t.f2(null,new H.hA(C.p,r,[s,u]),q,null)
return t},
mT:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a1
if(u===C.f)return a
return u.dH(a,b)},
y:function y(){},
fv:function fv(){},
dy:function dy(){},
fw:function fw(){},
cy:function cy(){},
bZ:function bZ(){},
bG:function bG(){},
c_:function c_(){},
cB:function cB(){},
bH:function bH(){},
cD:function cD(){},
fN:function fN(){},
Y:function Y(){},
cE:function cE(){},
fO:function fO(){},
b7:function b7(){},
b8:function b8(){},
fP:function fP(){},
fQ:function fQ(){},
fT:function fT(){},
aJ:function aJ(){},
fU:function fU(){},
dI:function dI(){},
dJ:function dJ(){},
fV:function fV(){},
fW:function fW(){},
jJ:function jJ(a,b){this.a=a
this.b=b},
V:function V(){},
h_:function h_(){},
o:function o(){},
k:function k(){},
aK:function aK(){},
cG:function cG(){},
h5:function h5(){},
h9:function h9(){},
aU:function aU(){},
he:function he(){},
c4:function c4(){},
br:function br(){},
cJ:function cJ(){},
cK:function cK(){},
bb:function bb(){},
dU:function dU(){},
hO:function hO(){},
cO:function cO(){},
hP:function hP(){},
hQ:function hQ(a){this.a=a},
hR:function hR(){},
hS:function hS(a){this.a=a},
aW:function aW(){},
hT:function hT(){},
ag:function ag(){},
aq:function aq(a){this.a=a},
H:function H(){},
cU:function cU(){},
aX:function aX(){},
i8:function i8(){},
ij:function ij(){},
ik:function ik(a){this.a=a},
im:function im(){},
aY:function aY(){},
iy:function iy(){},
aZ:function aZ(){},
iz:function iz(){},
b_:function b_(){},
iC:function iC(){},
iD:function iD(a){this.a=a},
aN:function aN(){},
bh:function bh(){},
ee:function ee(){},
iJ:function iJ(){},
iK:function iK(){},
d1:function d1(){},
b0:function b0(){},
aO:function aO(){},
iM:function iM(){},
iN:function iN(){},
iS:function iS(){},
b1:function b1(){},
b2:function b2(){},
iW:function iW(){},
iX:function iX(){},
bR:function bR(){},
ji:function ji(){},
jA:function jA(){},
bl:function bl(){},
db:function db(){},
dc:function dc(){},
jK:function jK(){},
ex:function ex(){},
jZ:function jZ(){},
eP:function eP(){},
kc:function kc(){},
kg:function kg(){},
jI:function jI(){},
jM:function jM(a){this.a=a},
jN:function jN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lA:function lA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jO:function jO(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jP:function jP(a){this.a=a},
bT:function bT(a){this.a=a},
I:function I(){},
e2:function e2(a){this.a=a},
i0:function i0(a){this.a=a},
i_:function i_(a,b,c){this.a=a
this.b=b
this.c=c},
eX:function eX(){},
k9:function k9(){},
ka:function ka(){},
ki:function ki(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kj:function kj(){},
kh:function kh(){},
dM:function dM(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aF:function aF(){},
k7:function k7(a,b){this.a=a
this.b=b},
ff:function ff(a){this.a=a},
kt:function kt(a){this.a=a},
ew:function ew(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eQ:function eQ(){},
eR:function eR(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
dj:function dj(){},
dk:function dk(){},
eY:function eY(){},
eZ:function eZ(){},
f2:function f2(){},
f5:function f5(){},
f6:function f6(){},
dl:function dl(){},
dm:function dm(){},
f8:function f8(){},
f9:function f9(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){}},O={
li:function(a){var u=new O.a6([a])
u.bK(a)
return u},
a6:function a6(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cN:function cN(){this.b=this.a=null},
dX:function dX(){var _=this
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
bd:function bd(a,b){var _=this
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
ce:function ce(){}},E={
on:function(a,b){var u=new E.ie(a)
u.eQ(a,b)
return u},
ot:function(a,b,c,d,e){var u,t,s=J.U(a)
if(!!s.$ic_)return E.mn(a,!0,!0,!0,!1)
u=W.lh()
t=u.style
t.width="100%"
t.height="100%"
s.gcj(a).h(0,u)
return E.mn(u,!0,!0,!0,!1)},
mn:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ei(),j=H.h(C.i.cR(a,"webgl2",P.o3(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$icc")
if(j==null)H.w(P.v("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.on(j,a)
u=new T.iP(j)
u.b=H.a4(j.getParameter(3379))
H.a4(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.ep(a)
t=new X.hm()
t.c=new X.aE(!1,!1,!1)
t.shz(P.dT(P.m))
u.b=t
t=new X.hU(u)
t.f=0
t.r=V.bw()
t.x=V.bw()
t.ch=t.Q=1
u.c=t
t=new X.hu(u)
t.r=0
t.x=V.bw()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iV(u)
t.f=V.bw()
t.r=V.bw()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfn(H.d([],[[P.d_,P.P]]))
t=u.z
s=document
r=W.ag
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.aa(s,"contextmenu",H.n(u.gfW(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.aa(a,"focus",H.n(u.gh1(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.aa(a,"blur",H.n(u.gfQ(),o),!1,p))
t=u.z
n=W.bb
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.aa(s,"keyup",H.n(u.gh5(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.aa(s,"keydown",H.n(u.gh3(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.aa(a,"mousedown",H.n(u.gh9(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.aa(a,"mouseup",H.n(u.ghd(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.aa(a,l,H.n(u.ghb(),q),!1,r))
n=u.z
m=W.bl;(n&&C.a).h(n,W.aa(a,H.K(W.nS(a)),H.n(u.ghf(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.aa(s,l,H.n(u.gfY(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.aa(s,"mouseup",H.n(u.gh_(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.aa(s,"pointerlockchange",H.n(u.ghh(),o),!1,p))
p=u.z
o=W.b2
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.aa(a,"touchstart",H.n(u.ghu(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.aa(a,"touchend",H.n(u.ghq(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.aa(a,"touchmove",H.n(u.ghs(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aC(Date.now(),!1)
k.cy=0
k.dv()
return k},
fF:function fF(){},
ax:function ax(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ie:function ie(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ig:function ig(a){this.a=a},
ih:function ih(a){this.a=a},
ii:function ii(a){this.a=a},
ei:function ei(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iR:function iR(a){this.a=a}},Z={
lz:function(a,b,c){var u
H.l(c,"$ib",[P.m],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cm(c)),35044)
a.bindBuffer(b,null)
return new Z.et(b,u)},
aQ:function(a){return new Z.by(a)},
et:function et(a,b){this.a=a
this.b=b},
dC:function dC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jB:function jB(a){this.a=a},
dD:function dD(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bN:function bN(a,b,c){this.a=a
this.b=b
this.c=c},
by:function by(a){this.a=a}},D={
W:function(){var u=new D.c1()
u.sai(null)
u.saQ(null)
u.c=null
u.d=0
return u},
fI:function fI(){},
c1:function c1(){var _=this
_.d=_.c=_.b=_.a=null},
h2:function h2(a){this.a=a},
h3:function h3(a){this.a=a},
C:function C(){this.b=null},
c5:function c5(a){this.b=null
this.$ti=a},
c6:function c6(a){this.b=null
this.$ti=a},
Q:function Q(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bK:function bK(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ae:function ae(){},
dS:function dS(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
e5:function e5(){},
ec:function ec(){}},X={dE:function dE(a,b){this.a=a
this.b=b},dR:function dR(a,b){this.a=a
this.b=b},hm:function hm(){var _=this
_.d=_.c=_.b=_.a=null},dV:function dV(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hu:function hu(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aE:function aE(a,b,c){this.a=a
this.b=b
this.c=c},bv:function bv(a,b,c,d,e){var _=this
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
_.b=null},i9:function i9(){},ek:function ek(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iV:function iV(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ep:function ep(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nU:function(a){var u=new X.hb(),t=new V.av(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.mj
if(t==null){t=V.mi(0,0,1,1)
$.mj=t}u.r=t
return u},
dF:function dF(){},
hb:function hb(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e4:function e4(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ef:function ef(){}},V={
q3:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.bh(a-b,u)
return(a<0?a+u:a)+b},
T:function(a,b,c){if(a==null)return C.b.af("null",c)
return C.b.af(C.c.eu(Math.abs(a-0)<$.O().a?0:a,b),c+b+1)},
cr:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.q],"$ab")
u=H.d([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.u)(a),++r){q=V.T(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.k(u,p,C.b.af(u[p],s))}return u},
lQ:function(a){return C.c.jo(Math.pow(2,C.S.ct(Math.log(H.py(a))/Math.log(2))))},
dZ:function(){var u=$.mb
return u==null?$.mb=V.be(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
be:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ap(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ma:function(a,b,c){var u=c.q(0,Math.sqrt(c.C(c))),t=b.aC(u),s=t.q(0,Math.sqrt(t.C(t))),r=u.aC(s),q=new V.D(a.a,a.b,a.c),p=s.S(0).C(q),o=r.S(0).C(q),n=u.S(0).C(q)
return V.be(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bw:function(){var u=$.mf
return u==null?$.mf=new V.a5(0,0):u},
ls:function(){var u=$.cV
return u==null?$.cV=new V.Z(0,0,0):u},
mi:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e8(a,b,c,d)},
d8:function(){var u=$.my
return u==null?$.my=new V.D(0,0,0):u},
oD:function(){var u=$.jm
return u==null?$.jm=new V.D(-1,0,0):u},
ly:function(){var u=$.jn
return u==null?$.jn=new V.D(0,1,0):u},
mz:function(){var u=$.jo
return u==null?$.jo=new V.D(0,0,1):u},
ac:function ac(a,b,c){this.a=a
this.b=b
this.c=c},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h1:function h1(a){this.a=a},
dY:function dY(a,b,c,d,e,f,g,h,i){var _=this
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
a5:function a5(a,b){this.a=a
this.b=b},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
bg:function bg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e8:function e8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
X:function X(a,b){this.a=a
this.b=b},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
b4:function b4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a0:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.v("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.F(a,0)
t=C.b.F(b,0)
s=new V.id()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
x:function(a){var u=new V.io()
u.eR(a)
return u},
iU:function(){var u=new V.iT(),t=P.f
u.shY(new H.a3([t,V.cZ]))
u.si0(new H.a3([t,V.d3]))
u.c=null
return u},
bo:function bo(){},
aD:function aD(){},
dW:function dW(){},
ay:function ay(){this.a=null},
id:function id(){this.b=this.a=null},
io:function io(){this.a=null},
cZ:function cZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ej:function ej(a,b,c){this.a=a
this.b=b
this.c=c},
d3:function d3(a){this.b=a
this.c=null},
iT:function iT(){this.c=this.b=this.a=null},
d4:function d4(a){this.b=a
this.a=this.c=null},
pZ:function(a){P.ou(C.P,new V.l6(a))},
op:function(a){var u=new V.it()
u.eT(a,!0)
return u},
bI:function bI(){},
l6:function l6(a){this.a=a},
fS:function fS(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hc:function hc(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hd:function hd(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i7:function i7(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ib:function ib(a){this.a=a
this.c=null},
ic:function ic(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
it:function it(){this.b=this.a=null},
iv:function iv(a){this.a=a},
iu:function iu(a){this.a=a},
iw:function iw(a){this.a=a}},U={
lj:function(){var u=new U.fJ()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
m3:function(a){var u=new U.dG()
u.a=a
return u},
fJ:function fJ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dG:function dG(){this.b=this.a=null},
cI:function cI(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ah:function ah(){},
eq:function eq(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
er:function er(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
es:function es(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dK:function dK(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
n6:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="testCanvas",a0=null,a1="modifiers",a2=V.op("Test 018"),a3=W.lh()
a3.className="pageLargeCanvas"
a3.id=a
a2.a.appendChild(a3)
u=[P.f]
a2.dE(H.d(["A test of the Material Lighting shader where a diffuse textue and ","inverse diffuse texture are used. Grass is only shown in the dark. ","Dirt is shown where the directional light is shining."],u))
a2.ia(H.d(["shapes"],u))
a2.dE(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a)
if(t==null)H.w(P.v("Failed to find an element with the identifier, testCanvas."))
s=E.ot(t,!0,!0,!0,!1)
r=new E.ax()
r.a=""
r.b=!0
q=E.ax
r.sfe(0,O.li(q))
r.y.bi(r.giY(),r.gj0())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sa7(0,a0)
r.sbd(a0)
r.sa7(0,F.nc(8,8))
p=new U.cI()
o=U.ah
p.bK(o)
p.bi(p.gfI(),p.ghm())
p.e=null
p.f=V.dZ()
p.r=0
n=s.r
m=new U.er()
l=U.lj()
l.scQ(0,!0)
l.scA(6.283185307179586)
l.scC(0)
l.sY(0,0)
l.scB(100)
l.sW(0)
l.scm(0.5)
m.b=l
k=m.gaP()
l.gw().h(0,k)
l=U.lj()
l.scQ(0,!0)
l.scA(6.283185307179586)
l.scC(0)
l.sY(0,0)
l.scB(100)
l.sW(0)
l.scm(0.5)
m.c=l
l.gw().h(0,k)
m.d=null
m.r=m.f=m.e=!1
m.y=m.x=2.5
m.Q=4
m.ch=m.cx=!1
m.db=m.cy=0
m.dx=null
m.dy=0
m.fx=m.fr=null
j=new X.aE(!1,!1,!1)
i=m.d
m.d=j
l=[X.aE]
k=new D.Q(a1,i,j,l)
k.b=!0
m.P(k)
k=m.f
if(k!==!1){m.f=!1
k=new D.Q("invertX",k,!1,[P.S])
k.b=!0
m.P(k)}k=m.r
if(k!==!1){m.r=!1
k=new D.Q("invertY",k,!1,[P.S])
k.b=!0
m.P(k)}m.b6(n)
p.h(0,m)
n=s.r
m=new U.eq()
k=U.lj()
k.scQ(0,!0)
k.scA(6.283185307179586)
k.scC(0)
k.sY(0,0)
k.scB(100)
k.sW(0)
k.scm(0.2)
m.b=k
k.gw().h(0,m.gaP())
m.c=null
m.d=!1
m.e=2.5
m.r=4
m.x=m.y=!1
m.z=0
m.Q=null
m.ch=0
m.cy=m.cx=null
j=new X.aE(!0,!1,!1)
i=m.c
m.c=j
k=new D.Q(a1,i,j,l)
k.b=!0
m.P(k)
m.b6(n)
p.h(0,m)
n=s.r
m=new U.es()
m.c=0.01
m.e=m.d=0
j=new X.aE(!1,!1,!1)
m.b=j
l=new D.Q(a1,a0,j,l)
l.b=!0
m.P(l)
m.b6(n)
p.h(0,m)
r.sbd(p)
h=s.f.e8("../resources/Dirt.png")
g=s.f.e8("../resources/Grass.png")
f=new O.dX()
f.sfb(O.li(V.ap))
f.e.bi(f.gfM(),f.gfO())
p=new O.bd(f,"emission")
p.c=new A.aw(!1,!1,!1)
p.f=new V.ac(0,0,0)
f.f=p
p=new O.bd(f,"ambient")
p.c=new A.aw(!1,!1,!1)
p.f=new V.ac(0,0,0)
f.r=p
p=new O.bd(f,"diffuse")
p.c=new A.aw(!1,!1,!1)
p.f=new V.ac(0,0,0)
f.x=p
p=new O.bd(f,"invDiffuse")
p.c=new A.aw(!1,!1,!1)
p.f=new V.ac(0,0,0)
f.y=p
p=new O.hH(f,"specular")
p.c=new A.aw(!1,!1,!1)
p.f=new V.ac(0,0,0)
p.ch=100
f.z=p
p=new O.hD(f,"bump")
p.c=new A.aw(!1,!1,!1)
f.Q=p
f.ch=null
p=new O.bd(f,"reflect")
p.c=new A.aw(!1,!1,!1)
p.f=new V.ac(0,0,0)
f.cx=p
p=new O.hG(f,"refract")
p.c=new A.aw(!1,!1,!1)
p.f=new V.ac(0,0,0)
p.ch=1
f.cy=p
p=new O.hC(f,"alpha")
p.c=new A.aw(!1,!1,!1)
p.f=1
f.db=p
p=new D.dS()
p.bK(D.ae)
p.sfl(H.d([],[D.bK]))
p.shw(H.d([],[D.e5]))
p.shX(H.d([],[D.ec]))
p.y=p.x=null
p.cT(p.gfK(),p.ghk(),p.gho())
f.dx=p
n=new O.hF()
n.b=new V.av(0,0,0,0)
n.c=1
n.d=10
n.e=!1
f.dy=n
n=p.x
p=n==null?p.x=D.W():n
p.h(0,f.ghI())
p=f.dx
n=p.y
p=n==null?p.y=D.W():n
p.h(0,f.gbl())
f.fr=null
p=f.dx
e=V.ly()
n=U.m3(V.ma(V.ls(),e,new V.D(-1,-1,-1)))
d=new V.ac(1,1,1)
m=new D.bK()
m.c=new V.ac(1,1,1)
m.a=V.mz()
m.d=V.ly()
m.e=V.oD()
i=m.b
m.b=n
n.gw().h(0,m.geX())
o=new D.Q("mover",i,m.b,[o])
o.b=!0
m.ax(o)
if(!m.c.v(0,d)){i=m.c
m.c=d
o=new D.Q("color",i,d,[V.ac])
o.b=!0
m.ax(o)}p.h(0,m)
f.x.sb_(h)
f.y.sb_(g)
p=new M.dK()
p.a=!0
p.seZ(0,O.li(q))
p.e.bi(p.gfS(),p.gfU())
p.y=p.x=p.r=p.f=null
c=X.nU(a0)
b=new X.e4()
b.c=1.0471975511965976
b.d=0.1
b.e=2000
b.sbd(a0)
q=b.c
if(!(Math.abs(q-1.0471975511965976)<$.O().a)){b.c=1.0471975511965976
q=new D.Q("fov",q,1.0471975511965976,[P.q])
q.b=!0
b.aM(q)}q=b.d
if(!(Math.abs(q-0.1)<$.O().a)){b.d=0.1
q=new D.Q("near",q,0.1,[P.q])
q.b=!0
b.aM(q)}q=b.e
if(!(Math.abs(q-2000)<$.O().a)){b.e=2000
q=new D.Q("far",q,2000,[P.q])
q.b=!0
b.aM(q)}q=p.b
if(q!==b){if(q!=null)q.gw().E(0,p.gap())
i=p.b
p.b=b
b.gw().h(0,p.gap())
q=new D.Q("camera",i,p.b,[X.dF])
q.b=!0
p.ay(q)}q=p.c
if(q!==c){if(q!=null)q.gw().E(0,p.gap())
i=p.c
p.c=c
c.gw().h(0,p.gap())
q=new D.Q("target",i,p.c,[X.ef])
q.b=!0
p.ay(q)}p.ser(a0)
p.ser(f)
p.e.h(0,r)
p.b.sbd(U.m3(V.be(1,0,0,0,0,1,0,0,0,0,1,3,0,0,0,1)))
q=s.d
if(q!==p){if(q!=null)q.gw().E(0,s.gcY())
s.d=p
p.gw().h(0,s.gcY())
s.cZ()}q=new V.ib("shapes")
u=u.getElementById("shapes")
q.c=u
if(u==null)H.w("Failed to find shapes for RadioGroup")
q.ar(0,"Cube",new M.kV(r))
q.ar(0,"Cuboid",new M.kW(r))
q.ar(0,"Cylinder",new M.kX(r))
q.ar(0,"Cone",new M.kY(r))
q.ar(0,"LatLonSphere",new M.kZ(r))
q.ar(0,"IsoSphere",new M.l_(r))
q.bq(0,"Sphere",new M.l0(r),!0)
q.ar(0,"Toroid",new M.l1(r))
q.ar(0,"Knot",new M.l2(r))
u=s.z
if(u==null)u=s.z=D.W()
q={func:1,ret:-1,args:[D.C]}
p=H.n(new M.l3(a2,f),q)
if(u.b==null)u.saQ(H.d([],[q]))
u=u.b;(u&&C.a).h(u,p)
V.pZ(s)},
kV:function kV(a){this.a=a},
kW:function kW(a){this.a=a},
kX:function kX(a){this.a=a},
kY:function kY(a){this.a=a},
kZ:function kZ(a){this.a=a},
l_:function l_(a){this.a=a},
l0:function l0(a){this.a=a},
l1:function l1(a){this.a=a},
l2:function l2(a){this.a=a},
l3:function l3(a,b){this.a=a
this.b=b}},A={
o6:function(a,b){var u=a.aD,t=new A.hB(b,u)
t.eS(b,u)
t.eP(a,b)
return t},
o7:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.l(a9,"$ib",[A.aI],"$ab")
H.l(b0,"$ib",[A.aL],"$ab")
H.l(b1,"$ib",[A.aM],"$ab")
u="MaterialLight_"+a0.gam(a0)+a1.gam(a1)+a2.gam(a2)+a3.gam(a3)+a4.gam(a4)+a5.gam(a5)+a6.gam(a6)+a7.gam(a7)+a8.gam(a8)+"_"
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
p=a6.b||!1
if(!p){p=a7.b||!1
o=p}else o=!0
p=a1.b||!1
if(!p){p=a2.b||!1
if(!p){p=a3.b||!1
if(!p)p=a4.b||!1
else p=!0
n=p}else n=!0}else n=!0
p=a4.b||!1
m=p||t>0||o
t=a2.b||!1
if(!t){t=a3.b||!1
if(!t){t=a4.b||!1
l=t}else l=!0}else l=!0
if(!l){t=a5.b||!1
k=t||o}else k=!0
j=a5.b||!1
i=a0.b||a1.b||a2.b||a3.b||a4.b||a5.b||a6.b||a7.b||a8.b
h=e>0
g=k||j||m||!1
a=a&&i
f=$.bD()
if(k){t=$.bC()
f=new Z.by(f.a|t.a)}if(j){t=$.bB()
f=new Z.by(f.a|t.a)}if(i){t=$.bE()
f=new Z.by(f.a|t.a)}if(h){t=$.bA()
f=new Z.by(f.a|t.a)}return new A.hE(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,r,o,l,o,q,g,!0,!1,!1,n,q,m,k,j,i,!1,h,a,!1,c,!1,e,u.charCodeAt(0)==0?u:u,f)},
kB:function(a,b,c){if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kC:function(a,b,c){var u
A.kB(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.la(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.b){u+="   "+c+"Color = texture2D("+c+"Txt, txt2D).rgb;\n"
a.a=u}a.a=u+"}\n"},
p8:function(a,b){var u=a.a,t=u.b||!1
if(!t)return
t=b.a+="// === Emission ===\n"
b.a=t+"\n"
A.kB(b,u,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(u.b){u=t+"   return texture2D(emissionTxt, txt2D).rgb;\n"
b.a=u}else u=t
u+="}\n"
b.a=u
b.a=u+"\n"},
p5:function(a,b){var u=a.b,t=u.b||!1
if(!t)return
t=b.a+="// === Ambient ===\n"
b.a=t+"\n"
A.kC(b,u,"ambient")
b.a+="\n"},
p6:function(a,b){var u=a.c,t=u.b||!1
if(!t)return
t=b.a+="// === Diffuse ===\n"
b.a=t+"\n"
A.kC(b,u,"diffuse")
u=b.a+="\n"
u+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
b.a=u
u+="{\n"
b.a=u
u+="   float scalar = dot(norm, -litVec);\n"
b.a=u
u+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=u
u+="   return diffuseColor*scalar;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
p9:function(a,b){var u=a.d,t=u.b||!1
if(!t)return
t=b.a+="// === Inverse Diffuse ===\n"
b.a=t+"\n"
A.kC(b,u,"invDiffuse")
u=b.a+="\n"
u+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
b.a=u
u+="{\n"
b.a=u
u+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
b.a=u
u+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=u
u+="   return invDiffuseColor*scalar;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
pf:function(a,b){var u=a.e,t=u.b||!1
if(!t)return
t=b.a+="// === Specular ===\n"
t+="\n"
b.a=t
b.a=t+"uniform float shininess;\n"
A.kC(b,u,"specular")
u=b.a+="\n"
u+="vec3 specular(vec3 norm, vec3 litVec)\n"
b.a=u
u+="{\n"
b.a=u
u+="   if(dot(norm, -litVec) < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=u
u+="   vec3 lightRef = normalize(reflect(litVec, norm));\n"
b.a=u
u+="   float scalar = dot(lightRef, -normalize(viewPos));\n"
b.a=u
u+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=u
u+="   return specularColor*pow(scalar, shininess);\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
pb:function(a,b){var u,t,s
if(!a.k3)return
u=b.a+="// === Normal ===\n"
u=b.a=u+"\n"
t=a.f.b
if(t){u+="uniform sampler2D bumpTxt;\n"
b.a=u
u=b.a=u+"\n"}u+="vec3 normal()\n"
b.a=u
u=b.a=u+"{\n"
s=t||!1
if(!s||!1)u=b.a=u+"   return normalize(normalVec);\n"
else{u=(t?b.a=u+"   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n":b.a=u+"   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n")+"   vec3 n = normalize(normalVec);\n"
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
pd:function(a,b){var u=a.r,t=u.b||!1
if(!t)return
t=b.a+="// === Reflection ===\n"
b.a=t+"\n"
A.kB(b,u,"reflect")
t=b.a+="\n"
t+="vec3 reflect(vec3 refl)\n"
b.a=t
t=b.a=t+"{\n"
if(u.b){u=t+"   vec3 scalar = texture2D(reflectTxt, txt2D).rgb;\n"
b.a=u}else u=t
u+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=u
u+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
pe:function(a,b){var u=a.x,t=u.b||!1
if(!t)return
t=b.a+="// === Refraction ===\n"
b.a=t+"\n"
A.kB(b,u,"refract")
t=b.a+="uniform float refraction;\n"
t+="\n"
b.a=t
t+="vec3 refract(vec3 refl)\n"
b.a=t
t=b.a=t+"{\n"
if(u.b){u=t+"   vec3 scalar = texture2D(refractTxt, txt2D).rgb;\n"
b.a=u}else u=t
u+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
b.a=u
u+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
b.a=u
u+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
p7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.i(u)
s=A.la(t)
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
r=[P.f]
o=H.d([],r)
n=a.b.b||!1
if(n)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.d([],r)
r=a.c.b||!1
if(r)C.a.h(m,"diffuse(norm, lit.viewDir)")
r=a.d.b||!1
if(r)C.a.h(m,"invDiffuse(norm, lit.viewDir)")
r=a.e.b||!1
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
pc:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.i(u)
s=A.la(t)
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
o=a.b.b||!1
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
r=a.c.b||!1
if(r)C.a.h(k,"diffuse(norm, normDir)")
r=a.d.b||!1
if(r)C.a.h(k,"invDiffuse(norm, normDir)")
r=a.e.b||!1
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
pg:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.i(u)
s=A.la(t)
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
r=a.b.b||!1
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
u=a.c.b||!1
if(u)C.a.h(i,"diffuse(norm, litVec)")
u=a.d.b||!1
if(u)C.a.h(i,"invDiffuse(norm, litVec)")
u=a.e.b||!1
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
pa:function(a,b){var u,t
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
u=a.b.b||!1
if(u)C.a.h(t,"ambientColor")
u=a.c.b||!1
if(u)C.a.h(t,"diffuse(norm, litVec)")
u=a.d.b||!1
if(u)C.a.h(t,"invDiffuse(norm, litVec)")
u=a.e.b||!1
if(u)C.a.h(t,"specular(norm, litVec)")
u=b.a+="   return "+C.a.m(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
ph:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.aj("")
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
A.p8(a,j)
A.p5(a,j)
A.p6(a,j)
A.p9(a,j)
A.pf(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.pd(a,j)
A.pe(a,j)}A.pb(a,j)
r=j.a+="// === Alpha ===\n"
r=j.a=r+"\n"
q=a.y.b
if(q)r=j.a=r+"uniform sampler2D alphaTxt;\n"
r+="float alphaValue()\n"
j.a=r
r=j.a=r+"{\n"
p=q||!1
if(!p)r=j.a=r+"   return 1.0;\n"
else if(q||!1){if(q){r+="   float a = texture2D(alphaTxt, txt2D).a;\n"
j.a=r}r+="   if (a <= 0.000001) discard;\n"
j.a=r
r+="   return a;\n"
j.a=r}r+="}\n"
j.a=r
j.a=r+"\n"
r=a.id
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.p7(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.pc(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.pg(a,q[o],j)
A.pa(a,j)}q=j.a+="// === Main ===\n"
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
u=a.b.b||!1
if(u)j.a+="   setAmbientColor();\n"
u=a.c.b||!1
if(u)j.a+="   setDiffuseColor();\n"
u=a.d.b||!1
if(u)j.a+="   setInvDiffuseColor();\n"
u=a.e.b||!1
if(u)j.a+="   setSpecularColor();\n"
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a8(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a8(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a8(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a.b||!1
if(u)C.a.h(n,"emissionColor()")
u=a.r.b||!1
if(u)C.a.h(n,"reflect(refl)")
u=a.x.b||!1
if(u)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.m(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
pi:function(a,b){var u,t,s
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
pk:function(a,b){var u
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
pj:function(a,b){var u
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
pm:function(a,b){var u,t
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
pn:function(a,b){var u,t
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
pl:function(a,b){var u
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
po:function(a,b){var u
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
la:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.a8(a,1)},
lv:function(a,b,c,d,e){var u=new A.j2(a,c,e)
u.f=d
u.si8(P.o4(d,0,P.m))
return u},
dA:function dA(a,b,c){this.a=a
this.b=b
this.c=c},
fy:function fy(a){this.a=a},
aw:function aw(a,b,c){this.a=a
this.b=b
this.c=c},
hB:function hB(a,b){var _=this
_.jD=_.dQ=_.jC=_.dP=_.aD=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jP=_.jO=_.jN=_.cs=_.cr=_.cq=_.cp=_.co=_.cn=_.jM=_.dY=_.jL=_.jK=_.dX=_.jJ=_.dW=_.jI=_.dV=_.jH=_.dU=_.jG=_.dT=_.dS=_.jF=_.dR=_.jE=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aI:function aI(a,b){this.a=a
this.b=b},
aL:function aL(a,b){this.a=a
this.b=b},
aM:function aM(a,b){this.a=a
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
_.aD=b3
_.dP=b4},
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
cY:function cY(){},
el:function el(){},
j7:function j7(a){this.a=a},
aP:function aP(a,b,c){this.a=a
this.c=b
this.d=c},
j4:function j4(a,b,c){this.a=a
this.c=b
this.d=c},
j5:function j5(a,b,c){this.a=a
this.c=b
this.d=c},
j6:function j6(a,b,c){this.a=a
this.c=b
this.d=c},
j2:function j2(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
am:function am(a,b,c){this.a=a
this.c=b
this.d=c},
j3:function j3(a,b,c){this.a=a
this.c=b
this.d=c},
ad:function ad(a,b,c){this.a=a
this.c=b
this.d=c},
d5:function d5(a,b,c){this.a=a
this.c=b
this.d=c},
j8:function j8(a,b,c){this.a=a
this.c=b
this.d=c},
d6:function d6(a,b,c){this.a=a
this.c=b
this.d=c},
aG:function aG(a,b,c){this.a=a
this.c=b
this.d=c},
an:function an(a,b,c){this.a=a
this.c=b
this.d=c},
ch:function ch(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lM:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.a9,P.q,P.q]})
u=F.ip()
F.dq(u,b,c,d,a,1,0,0,1)
F.dq(u,b,c,d,a,0,1,0,3)
F.dq(u,b,c,d,a,0,0,1,2)
F.dq(u,b,c,d,a,-1,0,0,0)
F.dq(u,b,c,d,a,0,-1,0,0)
F.dq(u,b,c,d,a,0,0,-1,3)
u.ak()
return u},
kw:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dq:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={}
H.n(c,{func:1,ret:-1,args:[F.a9,P.q,P.q]})
u=a1+a2
t=u+a3
s=a2+a3
r=a3+a1
q=new V.D(t,s+a1,r+a2)
e.a=q
p=a1-a2
o=a2-a3
n=a3-a1
m=e.b=new V.D(p+a3,o+a1,n+a2)
l=new V.D(p-a3,o-a1,n-a2)
e.c=l
k=e.d=new V.D(u-a3,s-a1,r-a2)
if(t>0){e.d=m
e.b=k
t=m
u=k}else{t=k
u=m}for(r=t,t=u,u=q,s=l,j=0;j<a4;++j,i=r,r=u,u=t,t=s,s=i){e.a=t
e.b=s
e.c=r
e.d=u}h=F.kw(u)
g=F.kw(e.b)
f=F.l9(d,a0,new F.kv(e,F.kw(e.c),F.kw(e.d),g,h,c),b)
if(f!=null)a.aX(f)},
mZ:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(d,{func:1,ret:P.q,args:[P.q]})
if(e<3)return
u=F.ip()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.a9])
q=u.a
p=new V.D(0,0,t)
p=p.q(0,Math.sqrt(p.C(p)))
C.a.h(r,q.ig(new V.bg(a,-1,-1,-1),new V.av(1,1,1,1),new V.Z(0,0,c),new V.D(0,0,t),new V.a5(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.F(k)
j=new V.D(m,l,t).q(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.cj(new V.bg(a,-1,-1,-1),null,new V.av(i,g,h,1),new V.Z(m*k,l*k,c),new V.D(0,0,t),new V.a5(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.ic(r)
return u},
mX:function(a,b,c){return F.pC(!0,a,1,new F.kH(1,c),b)},
pC:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
u=F.l9(c,e,new F.kJ(d),null)
if(u==null)return
u.ak()
u.br()
if(b)u.aX(F.mZ(3,!1,1,new F.kK(d),e))
u.aX(F.mZ(1,!0,-1,new F.kL(d),e))
return u},
pS:function(a,b){var u=F.l9(a,b,new F.kT(),null)
u.d.bA()
u.ak()
u.br()
return u},
ar:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null
b=b.q(0,Math.sqrt(b.C(b)))
u=b.a
t=b.b
s=b.c
r=F.cj(j,j,j,new V.Z(u,t,s),b,j,j,j,0)
q=a.iI(r,new F.d9())
if(q!=null)return q
p=u*0.5+0.5
o=t*0.5+0.5
n=s*0.5+0.5
if(p<0)p=0
else if(p>1)p=1
if(o<0)o=0
else if(o>1)o=1
if(n<0)n=0
else if(n>1)n=1
r.sb7(0,new V.av(p,o,n,1))
m=Math.sqrt(u*u+t*t)
l=Math.atan2(t,u)/1.5707963267948966
if(l<0)l=-l
k=Math.atan2(m,s)/3.141592653589793
r.sb_(new V.a5(l,k<0?-k:k))
a.a.h(0,r)
return r},
a2:function(a,b,c,d,e){var u,t,s,r
if(e<=0)a.d.bq(0,b,d,c)
else{u=F.ar(a,b.r.p(0,c.r).u(0,0.5))
t=F.ar(a,c.r.p(0,d.r).u(0,0.5))
s=F.ar(a,d.r.p(0,b.r).u(0,0.5))
r=e-1
F.a2(a,b,u,s,r)
F.a2(a,u,c,t,r)
F.a2(a,t,s,u,r)
F.a2(a,s,t,d,r)}},
nc:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.l7()
t=F.lM(a,null,new F.l8(s,1),b)
t.br()
return t},
q2:function(){return F.mY(15,30,0.5,1,new F.lb())},
pR:function(){return F.mY(12,120,0.3,1,new F.kS(3,2))},
mY:function(a,b,c,d,e){var u=F.l9(a,b,new F.kI(H.n(e,{func:1,ret:V.Z,args:[P.q]}),d,b,c),null)
if(u==null)return
u.ak()
u.br()
return u},
l9:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.a9,P.q,P.q]})
if(a<1)return
if(b<1)return
u=F.ip()
t=H.d([],[F.a9])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.cj(g,g,new V.av(p,0,0,1),g,g,new V.a5(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cl(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.cj(g,g,new V.av(j,i,h,1),g,g,new V.a5(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cl(d))}}u.d.ie(a+1,b+1,t)
return u},
c2:function(a,b,c){var u=new F.a8(),t=a.a
if(t==null)H.w(P.v("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.w(P.v("May not create a face with vertices attached to different shapes."))
u.ca(a)
u.cb(b)
u.hQ(c)
C.a.h(u.a.a.d.b,u)
u.a.a.V()
return u},
o0:function(a,b){var u=new F.bu(),t=a.a
if(t==null)H.w(P.v("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.w(P.v("May not create a line with vertices attached to different shapes."))
u.ca(a)
u.cb(b)
C.a.h(u.a.a.c.b,u)
u.a.a.V()
return u},
ip:function(){var u=new F.ea(),t=new F.jp(u)
t.b=!1
t.si9(H.d([],[F.a9]))
u.a=t
t=new F.is(u)
t.sc3(H.d([],[F.bQ]))
u.b=t
t=new F.ir(u)
t.sfv(H.d([],[F.bu]))
u.c=t
t=new F.iq(u)
t.sfo(H.d([],[F.a8]))
u.d=t
u.e=null
return u},
cj:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.a9(),r=new F.jx()
r.sc3(H.d([],[F.bQ]))
s.b=r
r=new F.ju()
u=[F.bu]
r.sfw(H.d([],u))
r.sfz(H.d([],u))
s.c=r
r=new F.jq()
u=[F.a8]
r.sfp(H.d([],u))
r.sfq(H.d([],u))
r.sfs(H.d([],u))
s.d=r
h=$.nr()
s.e=0
r=$.bD()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bC().a)!==0?e:t
s.x=(u&$.bB().a)!==0?b:t
s.y=(u&$.bE().a)!==0?f:t
s.z=(u&$.bX().a)!==0?g:t
s.Q=(u&$.ns().a)!==0?c:t
s.ch=(u&$.cx().a)!==0?i:0
s.cx=(u&$.bA().a)!==0?a:t
return s},
kv:function kv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kH:function kH(a,b){this.a=a
this.b=b},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
kT:function kT(){},
l7:function l7(){},
l8:function l8(a,b){this.a=a
this.b=b},
lb:function lb(){},
kS:function kS(a,b){this.a=a
this.b=b},
kI:function kI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h4:function h4(){},
ix:function ix(){},
bu:function bu(){this.b=this.a=null},
ho:function ho(){},
j1:function j1(){},
bQ:function bQ(){this.a=null},
ea:function ea(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iq:function iq(a){this.a=a
this.b=null},
ir:function ir(a){this.a=a
this.b=null},
is:function is(a){this.a=a
this.b=null},
a9:function a9(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jz:function jz(a){this.a=a},
jy:function jy(a){this.a=a},
jp:function jp(a){this.a=a
this.c=this.b=null},
jq:function jq(){this.d=this.c=this.b=null},
jr:function jr(a,b){this.a=a
this.b=b},
js:function js(a,b){this.a=a
this.b=b},
ju:function ju(){this.c=this.b=null},
jv:function jv(){},
d9:function d9(){},
jw:function jw(){},
jt:function jt(){},
i1:function i1(){},
jx:function jx(){this.b=null}},T={d2:function d2(){},eh:function eh(){},iO:function iO(){var _=this
_.y=_.d=_.c=_.b=_.a=null},iP:function iP(a){var _=this
_.a=a
_.e=_.d=_.b=null},iQ:function iQ(a,b,c,d,e,f,g){var _=this
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
H.lo.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gJ:function(a){return H.cW(a)},
i:function(a){return"Instance of '"+H.c9(a)+"'"}}
J.hj.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iS:1}
J.dP.prototype={
v:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0}}
J.dQ.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.i6.prototype={}
J.bS.prototype={}
J.bt.prototype={
i:function(a){var u=a[$.nf()]
if(u==null)return this.eL(a)
return"JavaScript function for "+H.i(J.au(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibM:1}
J.aV.prototype={
h:function(a,b){H.E(b,H.r(a,0))
if(!!a.fixed$length)H.w(P.J("add"))
a.push(b)},
em:function(a,b){if(!!a.fixed$length)H.w(P.J("removeAt"))
if(b<0||b>=a.length)throw H.c(P.e7(b,null))
return a.splice(b,1)[0]},
E:function(a,b){var u
if(!!a.fixed$length)H.w(P.J("remove"))
for(u=0;u<a.length;++u)if(J.L(a[u],b)){a.splice(u,1)
return!0}return!1},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bp(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.i(a[u]))
return t.join(b)},
iU:function(a){return this.m(a,"")},
iM:function(a,b,c,d){var u,t,s
H.E(b,d)
H.n(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bp(a))}return t},
iL:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.S,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.G(b.$1(s)))return s
if(a.length!==u)throw H.c(P.bp(a))}throw H.c(H.hi())},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
eI:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ai(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ai(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.r(a,0)])
return H.d(a.slice(b,c),[H.r(a,0)])},
giK:function(a){if(a.length>0)return a[0]
throw H.c(H.hi())},
gau:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hi())},
bj:function(a,b,c,d){var u,t,s=H.r(a,0)
H.l(d,"$ij",[s],"$aj")
if(!!a.immutable$list)H.w(P.J("setRange"))
P.bx(b,c,a.length)
u=c-b
if(u===0)return
P.lt(0,"skipCount")
H.l(d,"$ib",[s],"$ab")
s=J.cs(d)
if(u>s.gn(d))throw H.c(H.nX())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
dF:function(a,b){var u,t
H.n(b,{func:1,ret:P.S,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.G(b.$1(a[t])))return!0
if(a.length!==u)throw H.c(P.bp(a))}return!1},
bI:function(a,b){var u=H.r(a,0)
H.n(b,{func:1,ret:P.m,args:[u,u]})
if(!!a.immutable$list)H.w(P.J("sort"))
H.eb(a,0,a.length-1,b,u)},
T:function(a,b){var u
for(u=0;u<a.length;++u)if(J.L(a[u],b))return!0
return!1},
i:function(a){return P.ll(a,"[","]")},
gU:function(a){return new J.aB(a,a.length,[H.r(a,0)])},
gJ:function(a){return H.cW(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.w(P.J("set length"))
if(b<0)throw H.c(P.ai(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cq(a,b))
return a[b]},
k:function(a,b,c){H.E(c,H.r(a,0))
if(!!a.immutable$list)H.w(P.J("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cq(a,b))
a[b]=c},
p:function(a,b){var u,t=[H.r(a,0)]
H.l(b,"$ib",t,"$ab")
u=C.d.p(a.length,b.gn(b))
t=H.d([],t)
this.sn(t,u)
this.bj(t,0,a.length,a)
this.bj(t,a.length,u,b)
return t},
$ij:1,
$ib:1}
J.ln.prototype={}
J.aB.prototype={
gL:function(a){return this.d},
D:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.u(s))
u=t.c
if(u>=r){t.sdf(null)
return!1}t.sdf(s[u]);++t.c
return!0},
sdf:function(a){this.d=H.E(a,H.r(this,0))},
$iba:1}
J.bO.prototype={
iu:function(a,b){var u
H.n7(b)
if(typeof b!=="number")throw H.c(H.as(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbw(b)
if(this.gbw(a)===u)return 0
if(this.gbw(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbw:function(a){return a===0?1/a<0:a<0},
jo:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.J(""+a+".toInt()"))},
ct:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.J(""+a+".floor()"))},
al:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.J(""+a+".round()"))},
eu:function(a,b){var u
if(b>20)throw H.c(P.ai(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbw(a))return"-"+u
return u},
bg:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ai(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.Z(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.w(P.J("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.u("0",r)},
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
t:function(a,b){if(typeof b!=="number")throw H.c(H.as(b))
return a-b},
u:function(a,b){if(typeof b!=="number")throw H.c(H.as(b))
return a*b},
bh:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eO:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dz(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.dz(a,b)},
dz:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.J("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aS:function(a,b){var u
if(a>0)u=this.dw(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hV:function(a,b){if(b<0)throw H.c(H.as(b))
return this.dw(a,b)},
dw:function(a,b){return b>31?0:a>>>b},
an:function(a,b){if(typeof b!=="number")throw H.c(H.as(b))
return a>b},
$iq:1,
$iab:1}
J.dO.prototype={$im:1}
J.dN.prototype={}
J.bs.prototype={
Z:function(a,b){if(b<0)throw H.c(H.cq(a,b))
if(b>=a.length)H.w(H.cq(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.c(H.cq(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.lf(b,null,null))
return a+b},
aZ:function(a,b,c,d){var u,t
c=P.bx(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ab:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ai(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a1:function(a,b){return this.ab(a,b,0)},
B:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.w(H.as(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.R()
if(b<0)throw H.c(P.e7(b,null))
if(b>c)throw H.c(P.e7(b,null))
if(c>a.length)throw H.c(P.e7(c,null))
return a.substring(b,c)},
a8:function(a,b){return this.B(a,b,null)},
jq:function(a){return a.toLowerCase()},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
af:function(a,b){var u=b-a.length
if(u<=0)return a
return this.u(" ",u)+a},
e5:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ai(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
e4:function(a,b){return this.e5(a,b,0)},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$imd:1,
$if:1}
H.t.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.b.Z(this.a,b)},
$ad7:function(){return[P.m]},
$az:function(){return[P.m]},
$aj:function(){return[P.m]},
$ab:function(){return[P.m]}}
H.fZ.prototype={}
H.c7.prototype={
gU:function(a){var u=this
return new H.cL(u,u.gn(u),[H.at(u,"c7",0)])},
bF:function(a,b){return this.eK(0,H.n(b,{func:1,ret:P.S,args:[H.at(this,"c7",0)]}))}}
H.cL.prototype={
gL:function(a){return this.d},
D:function(){var u,t=this,s=t.a,r=J.cs(s),q=r.gn(s)
if(t.b!==q)throw H.c(P.bp(s))
u=t.c
if(u>=q){t.sb2(null)
return!1}t.sb2(r.K(s,u));++t.c
return!0},
sb2:function(a){this.d=H.E(a,H.r(this,0))},
$iba:1}
H.hy.prototype={
gU:function(a){return new H.hz(J.bF(this.a),this.b,this.$ti)},
gn:function(a){return J.aH(this.a)},
K:function(a,b){return this.b.$1(J.fu(this.a,b))},
$aj:function(a,b){return[b]}}
H.hz.prototype={
D:function(){var u=this,t=u.b
if(t.D()){u.sb2(u.c.$1(t.gL(t)))
return!0}u.sb2(null)
return!1},
gL:function(a){return this.a},
sb2:function(a){this.a=H.E(a,H.r(this,1))},
$aba:function(a,b){return[b]}}
H.hA.prototype={
gn:function(a){return J.aH(this.a)},
K:function(a,b){return this.b.$1(J.fu(this.a,b))},
$ac7:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.da.prototype={
gU:function(a){return new H.jC(J.bF(this.a),this.b,this.$ti)}}
H.jC.prototype={
D:function(){var u,t
for(u=this.a,t=this.b;u.D();)if(H.G(t.$1(u.gL(u))))return!0
return!1},
gL:function(a){var u=this.a
return u.gL(u)}}
H.c3.prototype={}
H.d7.prototype={
k:function(a,b,c){H.E(c,H.at(this,"d7",0))
throw H.c(P.J("Cannot modify an unmodifiable list"))}}
H.en.prototype={}
H.fL.prototype={
i:function(a){return P.lr(this)},
k:function(a,b,c){H.E(b,H.r(this,0))
H.E(c,H.r(this,1))
return H.nO()},
$iA:1}
H.fM.prototype={
gn:function(a){return this.a},
bs:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bs(0,b))return
return this.dh(b)},
dh:function(a){return this.b[H.K(a)]},
I:function(a,b){var u,t,s,r,q=this,p=H.r(q,1)
H.n(b,{func:1,ret:-1,args:[H.r(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.E(q.dh(r),p))}}}
H.iZ.prototype={
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
H.i2.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hl.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.jb.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.lc.prototype={
$1:function(a){if(!!J.U(a).$ibL)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:25}
H.f1.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaz:1}
H.cC.prototype={
i:function(a){return"Closure '"+H.c9(this).trim()+"'"},
$ibM:1,
gjw:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iL.prototype={}
H.iB.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cw(u)+"'"}}
H.cz.prototype={
v:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cz))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.cW(this.a)
else u=typeof t!=="object"?J.dx(t):H.cW(t)
return(u^H.cW(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.c9(u)+"'")}}
H.j0.prototype={
i:function(a){return this.a}}
H.fH.prototype={
i:function(a){return this.a}}
H.il.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.jD.prototype={
i:function(a){return"Assertion failed: "+P.dL(this.a)}}
H.a3.prototype={
gn:function(a){return this.a},
giT:function(a){return this.a===0},
ga2:function(a){return new H.hq(this,[H.r(this,0)])},
bs:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.dc(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.dc(t,b)}else return s.iQ(b)},
iQ:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cw(u.bS(t,u.cv(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bm(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bm(r,b)
s=t==null?null:t.b
return s}else return q.iR(b)},
iR:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bS(r,s.cv(a))
t=s.cw(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.E(b,H.r(s,0))
H.E(c,H.r(s,1))
if(typeof b==="string"){u=s.b
s.d2(u==null?s.b=s.c1():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.d2(t==null?s.c=s.c1():t,b,c)}else s.iS(b,c)},
iS:function(a,b){var u,t,s,r,q=this
H.E(a,H.r(q,0))
H.E(b,H.r(q,1))
u=q.d
if(u==null)u=q.d=q.c1()
t=q.cv(a)
s=q.bS(u,t)
if(s==null)q.c8(u,t,[q.c2(a,b)])
else{r=q.cw(s,a)
if(r>=0)s[r].b=b
else s.push(q.c2(a,b))}},
I:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.r(s,0),H.r(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bp(s))
u=u.c}},
d2:function(a,b,c){var u,t=this
H.E(b,H.r(t,0))
H.E(c,H.r(t,1))
u=t.bm(a,b)
if(u==null)t.c8(a,b,t.c2(b,c))
else u.b=c},
fF:function(){this.r=this.r+1&67108863},
c2:function(a,b){var u,t=this,s=new H.hp(H.E(a,H.r(t,0)),H.E(b,H.r(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fF()
return s},
cv:function(a){return J.dx(a)&0x3ffffff},
cw:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.L(a[t].a,b))return t
return-1},
i:function(a){return P.lr(this)},
bm:function(a,b){return a[b]},
bS:function(a,b){return a[b]},
c8:function(a,b,c){a[b]=c},
fj:function(a,b){delete a[b]},
dc:function(a,b){return this.bm(a,b)!=null},
c1:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c8(t,u,t)
this.fj(t,u)
return t}}
H.hp.prototype={}
H.hq.prototype={
gn:function(a){return this.a.a},
gU:function(a){var u=this.a,t=new H.hr(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hr.prototype={
gL:function(a){return this.d},
D:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bp(t))
else{t=u.c
if(t==null){u.sd1(null)
return!1}else{u.sd1(t.a)
u.c=u.c.c
return!0}}},
sd1:function(a){this.d=H.E(a,H.r(this,0))},
$iba:1}
H.kO.prototype={
$1:function(a){return this.a(a)},
$S:25}
H.kP.prototype={
$2:function(a,b){return this.a(a,b)},
$S:56}
H.kQ.prototype={
$1:function(a){return this.a(H.K(a))},
$S:53}
H.hk.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$imd:1,
$iol:1}
H.cR.prototype={$icR:1}
H.bP.prototype={$ibP:1,$iov:1}
H.e_.prototype={
gn:function(a){return a.length},
$iM:1,
$aM:function(){}}
H.cS.prototype={
j:function(a,b){H.bn(b,a,a.length)
return a[b]},
k:function(a,b,c){H.pE(c)
H.bn(b,a,a.length)
a[b]=c},
$ac3:function(){return[P.q]},
$az:function(){return[P.q]},
$ij:1,
$aj:function(){return[P.q]},
$ib:1,
$ab:function(){return[P.q]}}
H.e0.prototype={
k:function(a,b,c){H.a4(c)
H.bn(b,a,a.length)
a[b]=c},
$ac3:function(){return[P.m]},
$az:function(){return[P.m]},
$ij:1,
$aj:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]}}
H.hV.prototype={
j:function(a,b){H.bn(b,a,a.length)
return a[b]}}
H.hW.prototype={
j:function(a,b){H.bn(b,a,a.length)
return a[b]}}
H.hX.prototype={
j:function(a,b){H.bn(b,a,a.length)
return a[b]}}
H.hY.prototype={
j:function(a,b){H.bn(b,a,a.length)
return a[b]}}
H.hZ.prototype={
j:function(a,b){H.bn(b,a,a.length)
return a[b]}}
H.e1.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bn(b,a,a.length)
return a[b]},
$iqp:1}
H.cT.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bn(b,a,a.length)
return a[b]},
$icT:1,
$iR:1}
H.df.prototype={}
H.dg.prototype={}
H.dh.prototype={}
H.di.prototype={}
P.jF.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:18}
P.jE.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:49}
P.jG.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jH.prototype={
$0:function(){this.a.$0()},
$S:0}
P.f7.prototype={
f3:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cp(new P.kl(this,b),0),a)
else throw H.c(P.J("`setTimeout()` not found."))},
f4:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cp(new P.kk(this,a,Date.now(),b),0),a)
else throw H.c(P.J("Periodic timer."))},
$ibi:1}
P.kl.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.kk.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.eO(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bm.prototype={
iW:function(a){if(this.c!==6)return!0
return this.b.b.cL(H.n(this.d,{func:1,ret:P.S,args:[P.P]}),a.a,P.S,P.P)},
iO:function(a){var u=this.e,t=P.P,s={futureOr:1,type:H.r(this,1)},r=this.b.b
if(H.fq(u,{func:1,args:[P.P,P.az]}))return H.lN(r.jj(u,a.a,a.b,null,t,P.az),s)
else return H.lN(r.cL(H.n(u,{func:1,args:[P.P]}),a.a,null,t),s)}}
P.aR.prototype={
es:function(a,b,c){var u,t,s,r=H.r(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a1
if(u!==C.f){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.pq(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aR($.a1,[c])
s=b==null?1:3
this.d3(new P.bm(t,s,a,b,[r,c]))
return t},
jn:function(a,b){return this.es(a,null,b)},
d3:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.h(t.c,"$ibm")
t.c=a}else{if(s===2){u=H.h(t.c,"$iaR")
s=u.a
if(s<4){u.d3(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.kF(null,null,s,H.n(new P.jQ(t,a),{func:1,ret:-1}))}},
dt:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.h(p.c,"$ibm")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.h(p.c,"$iaR")
u=q.a
if(u<4){q.dt(a)
return}p.a=u
p.c=q.c}o.a=p.bo(a)
u=p.b
u.toString
P.kF(null,null,u,H.n(new P.jU(o,p),{func:1,ret:-1}))}},
c5:function(){var u=H.h(this.c,"$ibm")
this.c=null
return this.bo(u)},
bo:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d7:function(a){var u,t,s=this,r=H.r(s,0)
H.lN(a,{futureOr:1,type:r})
u=s.$ti
if(H.lJ(a,"$icH",u,"$acH"))if(H.lJ(a,"$iaR",u,null))P.mB(a,s)
else P.oI(a,s)
else{t=s.c5()
H.E(a,r)
s.a=4
s.c=a
P.dd(s,t)}},
d8:function(a,b){var u,t=this
H.h(b,"$iaz")
u=t.c5()
t.a=8
t.c=new P.ao(a,b)
P.dd(t,u)},
$icH:1}
P.jQ.prototype={
$0:function(){P.dd(this.a,this.b)},
$S:0}
P.jU.prototype={
$0:function(){P.dd(this.b,this.a.a)},
$S:0}
P.jR.prototype={
$1:function(a){var u=this.a
u.a=0
u.d7(a)},
$S:18}
P.jS.prototype={
$2:function(a,b){H.h(b,"$iaz")
this.a.d8(a,b)},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jT.prototype={
$0:function(){this.a.d8(this.b,this.c)},
$S:0}
P.jX.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.ep(H.n(s.d,{func:1}),null)}catch(r){u=H.ak(r)
t=H.cu(r)
if(o.d){s=H.h(o.a.a.c,"$iao").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.h(o.a.a.c,"$iao")
else q.b=new P.ao(u,t)
q.a=!0
return}if(!!J.U(n).$icH){if(n instanceof P.aR&&n.a>=4){if(n.a===8){s=o.b
s.b=H.h(n.c,"$iao")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jn(new P.jY(p),null)
s.a=!1}},
$S:3}
P.jY.prototype={
$1:function(a){return this.a},
$S:46}
P.jW.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.r(s,0)
q=H.E(n.c,r)
p=H.r(s,1)
n.a.b=s.b.b.cL(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ak(o)
t=H.cu(o)
s=n.a
s.b=new P.ao(u,t)
s.a=!0}},
$S:3}
P.jV.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.h(m.a.a.c,"$iao")
r=m.c
if(H.G(r.iW(u))&&r.e!=null){q=m.b
q.b=r.iO(u)
q.a=!1}}catch(p){t=H.ak(p)
s=H.cu(p)
r=H.h(m.a.a.c,"$iao")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ao(t,s)
n.a=!0}},
$S:3}
P.eu.prototype={}
P.iE.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aR($.a1,[P.m])
r.a=0
u=H.r(s,0)
t=H.n(new P.iG(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.iH(r,q),{func:1,ret:-1})
W.aa(s.a,s.b,t,!1,u)
return q}}
P.iG.prototype={
$1:function(a){H.E(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.r(this.b,0)]}}}
P.iH.prototype={
$0:function(){this.b.d7(this.a.a)},
$S:0}
P.d_.prototype={}
P.iF.prototype={}
P.bi.prototype={}
P.ao.prototype={
i:function(a){return H.i(this.a)},
$ibL:1}
P.ku.prototype={$iqE:1}
P.kE.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e3():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:0}
P.k3.prototype={
jk:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.a1){a.$0()
return}P.mN(r,r,this,a,-1)}catch(s){u=H.ak(s)
t=H.cu(s)
P.kD(r,r,this,u,H.h(t,"$iaz"))}},
jl:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.f===$.a1){a.$1(b)
return}P.mO(r,r,this,a,b,-1,c)}catch(s){u=H.ak(s)
t=H.cu(s)
P.kD(r,r,this,u,H.h(t,"$iaz"))}},
iq:function(a,b){return new P.k5(this,H.n(a,{func:1,ret:b}),b)},
cd:function(a){return new P.k4(this,H.n(a,{func:1,ret:-1}))},
dH:function(a,b){return new P.k6(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
ep:function(a,b){H.n(a,{func:1,ret:b})
if($.a1===C.f)return a.$0()
return P.mN(null,null,this,a,b)},
cL:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.E(b,d)
if($.a1===C.f)return a.$1(b)
return P.mO(null,null,this,a,b,c,d)},
jj:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.E(b,e)
H.E(c,f)
if($.a1===C.f)return a.$2(b,c)
return P.pr(null,null,this,a,b,c,d,e,f)}}
P.k5.prototype={
$0:function(){return this.a.ep(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.k4.prototype={
$0:function(){return this.a.jk(this.b)},
$S:3}
P.k6.prototype={
$1:function(a){var u=this.c
return this.a.jl(this.b,H.E(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.k1.prototype={
gU:function(a){var u=this,t=new P.eJ(u,u.r,u.$ti)
t.c=u.e
return t},
gn:function(a){return this.a},
T:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.h(u[b],"$ick")!=null}else{t=this.ff(b)
return t}},
ff:function(a){var u=this.d
if(u==null)return!1
return this.bQ(this.di(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.E(b,H.r(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.d4(u==null?s.b=P.lB():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.d4(t==null?s.c=P.lB():t,b)}else return s.f6(0,b)},
f6:function(a,b){var u,t,s,r=this
H.E(b,H.r(r,0))
u=r.d
if(u==null)u=r.d=P.lB()
t=r.d9(b)
s=u[t]
if(s==null)u[t]=[r.bN(b)]
else{if(r.bQ(s,b)>=0)return!1
s.push(r.bN(b))}return!0},
E:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hC(this.c,b)
else return this.hB(0,b)},
hB:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.di(r,b)
t=s.bQ(u,b)
if(t<0)return!1
s.dA(u.splice(t,1)[0])
return!0},
d4:function(a,b){H.E(b,H.r(this,0))
if(H.h(a[b],"$ick")!=null)return!1
a[b]=this.bN(b)
return!0},
hC:function(a,b){var u
if(a==null)return!1
u=H.h(a[b],"$ick")
if(u==null)return!1
this.dA(u)
delete a[b]
return!0},
d6:function(){this.r=1073741823&this.r+1},
bN:function(a){var u,t=this,s=new P.ck(H.E(a,H.r(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.d6()
return s},
dA:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.d6()},
d9:function(a){return J.dx(a)&1073741823},
di:function(a,b){return a[this.d9(b)]},
bQ:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.L(a[t].a,b))return t
return-1}}
P.ck.prototype={}
P.eJ.prototype={
gL:function(a){return this.d},
D:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bp(t))
else{t=u.c
if(t==null){u.sd5(null)
return!1}else{u.sd5(H.E(t.a,H.r(u,0)))
u.c=u.c.b
return!0}}},
sd5:function(a){this.d=H.E(a,H.r(this,0))},
$iba:1}
P.hs.prototype={
$2:function(a,b){this.a.k(0,H.E(a,this.b),H.E(b,this.c))},
$S:6}
P.ht.prototype={$ij:1,$ib:1}
P.z.prototype={
gU:function(a){return new H.cL(a,this.gn(a),[H.bV(this,a,"z",0)])},
K:function(a,b){return this.j(a,b)},
jp:function(a,b){var u,t=this,s=H.d([],[H.bV(t,a,"z",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.k(s,u,t.j(a,u))
return s},
cM:function(a){return this.jp(a,!0)},
p:function(a,b){var u,t=this,s=[H.bV(t,a,"z",0)]
H.l(b,"$ib",s,"$ab")
u=H.d([],s)
C.a.sn(u,C.d.p(t.gn(a),b.gn(b)))
C.a.bj(u,0,t.gn(a),a)
C.a.bj(u,t.gn(a),u.length,b)
return u},
iH:function(a,b,c,d){var u
H.E(d,H.bV(this,a,"z",0))
P.bx(b,c,this.gn(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.ll(a,"[","]")}}
P.hv.prototype={}
P.hw.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.i(a)
t.a=u+": "
t.a+=H.i(b)},
$S:6}
P.af.prototype={
I:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bV(s,a,"af",0),H.bV(s,a,"af",1)]})
for(u=J.bF(s.ga2(a));u.D();){t=u.gL(u)
b.$2(t,s.j(a,t))}},
gn:function(a){return J.aH(this.ga2(a))},
i:function(a){return P.lr(a)},
$iA:1}
P.km.prototype={
k:function(a,b,c){H.E(b,H.r(this,0))
H.E(c,H.r(this,1))
throw H.c(P.J("Cannot modify unmodifiable map"))}}
P.hx.prototype={
j:function(a,b){return J.dw(this.a,b)},
k:function(a,b,c){J.ld(this.a,H.E(b,H.r(this,0)),H.E(c,H.r(this,1)))},
I:function(a,b){J.lW(this.a,H.n(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gn:function(a){return J.aH(this.a)},
i:function(a){return J.au(this.a)},
$iA:1}
P.eo.prototype={}
P.k8.prototype={
as:function(a,b){var u
for(u=J.bF(H.l(b,"$ij",this.$ti,"$aj"));u.D();)this.h(0,u.gL(u))},
i:function(a){return P.ll(this,"{","}")},
K:function(a,b){var u,t,s,r=this
P.lt(b,"index")
for(u=P.oM(r,r.r,H.r(r,0)),t=0;u.D();){s=u.d
if(b===t)return s;++t}throw H.c(P.a_(b,r,"index",null,t))},
$ij:1,
$imk:1}
P.eK.prototype={}
P.fd.prototype={}
P.fD.prototype={
iX:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bx(a0,a1,b.length)
u=$.nu()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.F(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kN(C.b.F(b,n))
j=H.kN(C.b.F(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.b.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.aj("")
g=r.a+=C.b.B(b,s,t)
r.a=g+H.ca(m)
s=n
continue}}throw H.c(P.a7("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.B(b,s,a1)
f=g.length
if(q>=0)P.m_(b,p,a1,q,o,f)
else{e=C.d.bh(f-1,4)+1
if(e===1)throw H.c(P.a7(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aZ(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.m_(b,p,a1,q,o,d)
else{e=C.d.bh(d,4)
if(e===1)throw H.c(P.a7(c,b,a1))
if(e>1)b=C.b.aZ(b,a1,a1,e===2?"==":"=")}return b},
$ac0:function(){return[[P.b,P.m],P.f]}}
P.fE.prototype={
$abJ:function(){return[[P.b,P.m],P.f]}}
P.c0.prototype={}
P.bJ.prototype={}
P.h0.prototype={
$ac0:function(){return[P.f,[P.b,P.m]]}}
P.hg.prototype={
i:function(a){return this.a}}
P.hf.prototype={
fg:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.aj("")
if(r>b)q.a+=C.b.B(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nH(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abJ:function(){return[P.f,P.f]}}
P.jj.prototype={
giG:function(){return C.N}}
P.jl.prototype={
ck:function(a){var u,t,s=P.bx(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.ks(u)
if(t.ft(a,0,s)!==s)t.dC(J.nD(a,s-1),0)
return new Uint8Array(u.subarray(0,H.p1(0,t.b,u.length)))},
$abJ:function(){return[P.f,[P.b,P.m]]}}
P.ks.prototype={
dC:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
ft:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.Z(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.F(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dC(r,C.b.F(a,p)))s=p}else if(r<=2047){q=n.b
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
P.jk.prototype={
ck:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ib",[P.m],"$ab")
u=P.oy(!1,a,0,null)
if(u!=null)return u
t=P.bx(0,null,J.aH(a))
s=P.mQ(a,0,t)
if(s>0){r=P.d0(a,0,s)
if(s===t)return r
q=new P.aj(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.aj("")
n=new P.kr(!1,q)
n.c=o
n.iv(a,p,t)
if(n.e>0){H.w(P.a7("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.ca(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abJ:function(){return[[P.b,P.m],P.f]}}
P.kr.prototype={
iv:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.l(a,"$ib",[P.m],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.cs(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.ah()
if((o&192)!==128){n=P.a7(h+C.d.bg(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.e(C.w,n)
if(u<=C.w[n]){n=P.a7("Overlong encoding of 0x"+C.d.bg(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a7("Character outside valid Unicode range: 0x"+C.d.bg(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.ca(u)
i.c=!1}for(n=p<c;n;){m=P.mQ(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.d0(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.R()
if(o<0){j=P.a7("Negative UTF-8 code unit: -0x"+C.d.bg(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a7(h+C.d.bg(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.S.prototype={}
P.aC.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.aC&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.d.aS(u,30))&1073741823},
i:function(a){var u=this,t=P.nP(H.oh(u)),s=P.dH(H.of(u)),r=P.dH(H.ob(u)),q=P.dH(H.oc(u)),p=P.dH(H.oe(u)),o=P.dH(H.og(u)),n=P.nQ(H.od(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.q.prototype={}
P.b9.prototype={
p:function(a,b){return new P.b9(C.d.p(this.a,b.gdg()))},
t:function(a,b){return new P.b9(C.d.t(this.a,b.gdg()))},
an:function(a,b){return C.d.an(this.a,b.gdg())},
v:function(a,b){if(b==null)return!1
return b instanceof P.b9&&this.a===b.a},
gJ:function(a){return C.d.gJ(this.a)},
i:function(a){var u,t,s,r=new P.fY(),q=this.a
if(q<0)return"-"+new P.b9(0-q).i(0)
u=r.$1(C.d.a5(q,6e7)%60)
t=r.$1(C.d.a5(q,1e6)%60)
s=new P.fX().$1(q%1e6)
return""+C.d.a5(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.fX.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:19}
P.fY.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:19}
P.bL.prototype={}
P.fx.prototype={
i:function(a){return"Assertion failed"}}
P.e3.prototype={
i:function(a){return"Throw of null."}}
P.aT.prototype={
gbP:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbO:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbP()+o+u
if(!q.a)return t
s=q.gbO()
r=P.dL(q.b)
return t+s+": "+r}}
P.cb.prototype={
gbP:function(){return"RangeError"},
gbO:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.hh.prototype={
gbP:function(){return"RangeError"},
gbO:function(){var u,t=H.a4(this.b)
if(typeof t!=="number")return t.R()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gn:function(a){return this.f}}
P.jc.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.j9.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cd.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fK.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dL(u)+"."}}
P.i5.prototype={
i:function(a){return"Out of Memory"},
$ibL:1}
P.ed.prototype={
i:function(a){return"Stack Overflow"},
$ibL:1}
P.fR.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eC.prototype={
i:function(a){return"Exception: "+this.a}}
P.ha.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.B(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.F(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.Z(f,q)
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
k=""}j=C.b.B(f,m,n)
return h+l+j+k+"\n"+C.b.u(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.i(g)+")"):h}}
P.bM.prototype={}
P.m.prototype={}
P.j.prototype={
bF:function(a,b){var u=H.at(this,"j",0)
return new H.da(this,H.n(b,{func:1,ret:P.S,args:[u]}),[u])},
gn:function(a){var u,t=this.gU(this)
for(u=0;t.D();)++u
return u},
gaK:function(a){var u,t=this.gU(this)
if(!t.D())throw H.c(H.hi())
u=t.gL(t)
if(t.D())throw H.c(H.nY())
return u},
K:function(a,b){var u,t,s
P.lt(b,"index")
for(u=this.gU(this),t=0;u.D();){s=u.gL(u)
if(b===t)return s;++t}throw H.c(P.a_(b,this,"index",null,t))},
i:function(a){return P.nW(this,"(",")")}}
P.ba.prototype={}
P.b.prototype={$ij:1}
P.A.prototype={}
P.N.prototype={
gJ:function(a){return P.P.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.ab.prototype={}
P.P.prototype={constructor:P.P,$iP:1,
v:function(a,b){return this===b},
gJ:function(a){return H.cW(this)},
i:function(a){return"Instance of '"+H.c9(this)+"'"},
toString:function(){return this.i(this)}}
P.az.prototype={}
P.f.prototype={$imd:1}
P.aj.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iqd:1}
P.jh.prototype={
$2:function(a,b){var u,t,s,r=P.f
H.l(a,"$iA",[r,r],"$aA")
H.K(b)
u=J.dt(b).e4(b,"=")
if(u===-1){if(b!=="")J.ld(a,P.lD(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.B(b,0,u)
s=C.b.a8(b,u+1)
r=this.a
J.ld(a,P.lD(t,0,t.length,r,!0),P.lD(s,0,s.length,r,!0))}return a},
$S:45}
P.je.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:44}
P.jf.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.jg.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.ft(C.b.B(this.b,a,b),null,16)
if(typeof u!=="number")return u.R()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:42}
P.cl.prototype={
geA:function(){return this.b},
gcu:function(a){var u=this.c
if(u==null)return""
if(C.b.a1(u,"["))return C.b.B(u,1,u.length-1)
return u},
gby:function(a){var u=this.d
if(u==null)return P.mF(this.a)
return u},
gcG:function(a){var u=this.f
return u==null?"":u},
ge_:function(){var u=this.r
return u==null?"":u},
en:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.l(b,"$iA",[P.f,null],"$aA")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a1(p,"/"))p="/"+p
n=P.lC(null,0,0,b)
return new P.cl(u,s,q,r,p,n,m.r)},
gcH:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.f
s.shA(new P.eo(P.mu(u==null?"":u),[t,t]))}return s.Q},
ge0:function(){return this.c!=null},
ge3:function(){return this.f!=null},
ge1:function(){return this.r!=null},
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
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.U(b).$ilw)if(s.a==b.gbH())if(s.c!=null===b.ge0())if(s.b==b.geA())if(s.gcu(s)==b.gcu(b))if(s.gby(s)==b.gby(b))if(s.e===b.gei(b)){u=s.f
t=u==null
if(!t===b.ge3()){if(t)u=""
if(u===b.gcG(b)){u=s.r
t=u==null
if(!t===b.ge1()){if(t)u=""
u=u===b.ge_()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gJ:function(a){var u=this.z
return u==null?this.z=C.b.gJ(this.i(0)):u},
shA:function(a){var u=P.f
this.Q=H.l(a,"$iA",[u,u],"$aA")},
$ilw:1,
gbH:function(){return this.a},
gei:function(a){return this.e}}
P.kn.prototype={
$1:function(a){throw H.c(P.a7("Invalid port",this.a,this.b+1))},
$S:41}
P.ko.prototype={
$1:function(a){return P.fe(C.X,a,C.h,!1)},
$S:23}
P.kq.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.fe(C.n,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.fe(C.n,b,C.h,!0))}},
$S:24}
P.kp.prototype={
$2:function(a,b){var u,t
H.K(a)
if(b==null||typeof b==="string")this.a.$2(a,H.K(b))
else for(u=J.bF(H.n5(b,"$ij")),t=this.a;u.D();)t.$2(a,H.K(u.gL(u)))},
$S:40}
P.jd.prototype={
gez:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.e(o,0)
u=q.a
o=o[0]+1
t=C.b.e5(u,"?",o)
s=u.length
if(t>=0){r=P.dp(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jL("data",p,p,p,P.dp(u,o,s,C.A,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.e(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.ky.prototype={
$1:function(a){return new Uint8Array(96)},
$S:48}
P.kx.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.nE(u,0,96,b)
return u},
$S:39}
P.kz.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.F(b,s)^96
if(r>=t)return H.e(a,r)
a[r]=c}}}
P.kA.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.F(b,0),t=C.b.F(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.e(a,r)
a[r]=c}}}
P.kb.prototype={
ge0:function(){return this.c>0},
ge2:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.F(t)
t=u+1<t
u=t}else u=!1
return u},
ge3:function(){var u=this.f
if(typeof u!=="number")return u.R()
return u<this.r},
ge1:function(){return this.r<this.a.length},
gdk:function(){return this.b===4&&C.b.a1(this.a,"http")},
gdl:function(){return this.b===5&&C.b.a1(this.a,"https")},
gbH:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdk())q=t.x="http"
else if(t.gdl()){t.x="https"
q="https"}else if(q===4&&C.b.a1(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a1(t.a,r)){t.x=r
q=r}else{q=C.b.B(t.a,0,q)
t.x=q}return q},
geA:function(){var u=this.c,t=this.b+3
return u>t?C.b.B(this.a,t,u-1):""},
gcu:function(a){var u=this.c
return u>0?C.b.B(this.a,u,this.d):""},
gby:function(a){var u,t=this
if(t.ge2()){u=t.d
if(typeof u!=="number")return u.p()
return P.ft(C.b.B(t.a,u+1,t.e),null,null)}if(t.gdk())return 80
if(t.gdl())return 443
return 0},
gei:function(a){return C.b.B(this.a,this.e,this.f)},
gcG:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.R()
return u<t?C.b.B(this.a,u+1,t):""},
ge_:function(){var u=this.r,t=this.a
return u<t.length?C.b.a8(t,u+1):""},
gcH:function(){var u=this,t=u.f
if(typeof t!=="number")return t.R()
if(t>=u.r)return C.Y
t=P.f
return new P.eo(P.mu(u.gcG(u)),[t,t])},
en:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.l(b,"$iA",[P.f,null],"$aA")
u=k.gbH()
t=u==="file"
s=k.c
r=s>0?C.b.B(k.a,k.b+3,s):""
q=k.ge2()?k.gby(k):j
s=k.c
if(s>0)p=C.b.B(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.B(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a1(o,"/"))o="/"+o
m=P.lC(j,0,0,b)
n=k.r
l=n<s.length?C.b.a8(s,n+1):j
return new P.cl(u,r,p,q,o,m,l)},
gJ:function(a){var u=this.y
return u==null?this.y=C.b.gJ(this.a):u},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.U(b).$ilw&&this.a===b.i(0)},
i:function(a){return this.a},
$ilw:1}
P.jL.prototype={}
W.y.prototype={}
W.fv.prototype={
gn:function(a){return a.length}}
W.dy.prototype={
i:function(a){return String(a)},
$idy:1}
W.fw.prototype={
i:function(a){return String(a)}}
W.cy.prototype={$icy:1}
W.bZ.prototype={$ibZ:1}
W.bG.prototype={$ibG:1}
W.c_.prototype={
cR:function(a,b,c){if(c!=null)return a.getContext(b,P.pz(c))
return a.getContext(b)},
eD:function(a,b){return this.cR(a,b,null)},
$ic_:1}
W.cB.prototype={$icB:1}
W.bH.prototype={
gn:function(a){return a.length}}
W.cD.prototype={$icD:1}
W.fN.prototype={
gn:function(a){return a.length}}
W.Y.prototype={$iY:1}
W.cE.prototype={
gn:function(a){return a.length}}
W.fO.prototype={}
W.b7.prototype={}
W.b8.prototype={}
W.fP.prototype={
gn:function(a){return a.length}}
W.fQ.prototype={
gn:function(a){return a.length}}
W.fT.prototype={
gn:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.fU.prototype={
i:function(a){return String(a)}}
W.dI.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.l(c,"$ial",[P.ab],"$aal")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[[P.al,P.ab]]},
$az:function(){return[[P.al,P.ab]]},
$ij:1,
$aj:function(){return[[P.al,P.ab]]},
$ib:1,
$ab:function(){return[[P.al,P.ab]]},
$aI:function(){return[[P.al,P.ab]]}}
W.dJ.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gaJ(a))+" x "+H.i(this.gaE(a))},
v:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$ial)return!1
return a.left===u.gbx(b)&&a.top===u.gbC(b)&&this.gaJ(a)===u.gaJ(b)&&this.gaE(a)===u.gaE(b)},
gJ:function(a){return W.mD(C.c.gJ(a.left),C.c.gJ(a.top),C.c.gJ(this.gaJ(a)),C.c.gJ(this.gaE(a)))},
gdJ:function(a){return a.bottom},
gaE:function(a){return a.height},
gbx:function(a){return a.left},
gcK:function(a){return a.right},
gbC:function(a){return a.top},
gaJ:function(a){return a.width},
$ial:1,
$aal:function(){return[P.ab]}}
W.fV.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.K(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[P.f]},
$az:function(){return[P.f]},
$ij:1,
$aj:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aI:function(){return[P.f]}}
W.fW.prototype={
gn:function(a){return a.length}}
W.jJ.prototype={
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
gU:function(a){var u=this.cM(this)
return new J.aB(u,u.length,[H.r(u,0)])},
$az:function(){return[W.V]},
$aj:function(){return[W.V]},
$ab:function(){return[W.V]}}
W.V.prototype={
gip:function(a){return new W.jM(a)},
gcj:function(a){return new W.jJ(a,a.children)},
gdK:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.R()
if(s<0)s=-s*0
if(typeof r!=="number")return r.R()
if(r<0)r=-r*0
return new P.al(u,t,s,r,[P.ab])},
i:function(a){return a.localName},
ad:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.m6
if(u==null){u=H.d([],[W.aF])
t=new W.e2(u)
C.a.h(u,W.mC(null))
C.a.h(u,W.mE())
$.m6=t
d=t}else d=u
u=$.m5
if(u==null){u=new W.ff(d)
$.m5=u
c=u}else{u.a=d
c=u}}if($.bq==null){u=document
t=u.implementation.createHTMLDocument("")
$.bq=t
$.lk=t.createRange()
t=$.bq.createElement("base")
H.h(t,"$icy")
t.href=u.baseURI
$.bq.head.appendChild(t)}u=$.bq
if(u.body==null){t=u.createElement("body")
u.body=H.h(t,"$ibG")}u=$.bq
if(!!this.$ibG)s=u.body
else{s=u.createElement(a.tagName)
$.bq.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.T(C.V,a.tagName)){$.lk.selectNodeContents(s)
r=$.lk.createContextualFragment(b)}else{s.innerHTML=b
r=$.bq.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bq.body
if(s==null?u!=null:s!==u)J.lY(s)
c.cS(r)
document.adoptNode(r)
return r},
iy:function(a,b,c){return this.ad(a,b,c,null)},
eF:function(a,b){a.textContent=null
a.appendChild(this.ad(a,b,null,null))},
$iV:1,
geq:function(a){return a.tagName}}
W.h_.prototype={
$1:function(a){return!!J.U(H.h(a,"$iH")).$iV},
$S:27}
W.o.prototype={$io:1}
W.k.prototype={
ib:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.f7(a,b,c,!1)},
f7:function(a,b,c,d){return a.addEventListener(b,H.cp(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ik:1}
W.aK.prototype={$iaK:1}
W.cG.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaK")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aK]},
$az:function(){return[W.aK]},
$ij:1,
$aj:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$icG:1,
$aI:function(){return[W.aK]}}
W.h5.prototype={
gn:function(a){return a.length}}
W.h9.prototype={
gn:function(a){return a.length}}
W.aU.prototype={$iaU:1}
W.he.prototype={
gn:function(a){return a.length}}
W.c4.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iH")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.H]},
$az:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$ic4:1,
$aI:function(){return[W.H]}}
W.br.prototype={$ibr:1,
gdL:function(a){return a.data}}
W.cJ.prototype={$icJ:1}
W.cK.prototype={$icK:1}
W.bb.prototype={$ibb:1}
W.dU.prototype={
i:function(a){return String(a)},
$idU:1}
W.hO.prototype={
gn:function(a){return a.length}}
W.cO.prototype={$icO:1}
W.hP.prototype={
j:function(a,b){return P.bz(a.get(H.K(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bz(t.value[1]))}},
ga2:function(a){var u=H.d([],[P.f])
this.I(a,new W.hQ(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.J("Not supported"))},
$aaf:function(){return[P.f,null]},
$iA:1,
$aA:function(){return[P.f,null]}}
W.hQ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hR.prototype={
j:function(a,b){return P.bz(a.get(H.K(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bz(t.value[1]))}},
ga2:function(a){var u=H.d([],[P.f])
this.I(a,new W.hS(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.J("Not supported"))},
$aaf:function(){return[P.f,null]},
$iA:1,
$aA:function(){return[P.f,null]}}
W.hS.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aW.prototype={$iaW:1}
W.hT.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaW")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aW]},
$az:function(){return[W.aW]},
$ij:1,
$aj:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aI:function(){return[W.aW]}}
W.ag.prototype={$iag:1}
W.aq.prototype={
gaK:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.ml("No elements"))
if(t>1)throw H.c(P.ml("More than one element"))
return u.firstChild},
as:function(a,b){var u,t,s,r
H.l(b,"$ij",[W.H],"$aj")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
k:function(a,b,c){var u,t
H.h(c,"$iH")
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
$aj:function(){return[W.H]},
$ab:function(){return[W.H]}}
W.H.prototype={
jd:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
jh:function(a,b){var u,t
try{u=a.parentNode
J.nB(u,b,a)}catch(t){H.ak(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eJ(a):u},
ij:function(a,b){return a.appendChild(H.h(b,"$iH"))},
hF:function(a,b,c){return a.replaceChild(b,c)},
$iH:1}
W.cU.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iH")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.H]},
$az:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aI:function(){return[W.H]}}
W.aX.prototype={$iaX:1,
gn:function(a){return a.length}}
W.i8.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaX")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aX]},
$az:function(){return[W.aX]},
$ij:1,
$aj:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aI:function(){return[W.aX]}}
W.ij.prototype={
j:function(a,b){return P.bz(a.get(H.K(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bz(t.value[1]))}},
ga2:function(a){var u=H.d([],[P.f])
this.I(a,new W.ik(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.J("Not supported"))},
$aaf:function(){return[P.f,null]},
$iA:1,
$aA:function(){return[P.f,null]}}
W.ik.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.im.prototype={
gn:function(a){return a.length}}
W.aY.prototype={$iaY:1}
W.iy.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaY")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aY]},
$az:function(){return[W.aY]},
$ij:1,
$aj:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aI:function(){return[W.aY]}}
W.aZ.prototype={$iaZ:1}
W.iz.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaZ")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aZ]},
$az:function(){return[W.aZ]},
$ij:1,
$aj:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aI:function(){return[W.aZ]}}
W.b_.prototype={$ib_:1,
gn:function(a){return a.length}}
W.iC.prototype={
j:function(a,b){return a.getItem(H.K(b))},
k:function(a,b,c){a.setItem(b,c)},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga2:function(a){var u=H.d([],[P.f])
this.I(a,new W.iD(u))
return u},
gn:function(a){return a.length},
$aaf:function(){return[P.f,P.f]},
$iA:1,
$aA:function(){return[P.f,P.f]}}
W.iD.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:24}
W.aN.prototype={$iaN:1}
W.bh.prototype={$ibh:1}
W.ee.prototype={
ad:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bJ(a,b,c,d)
u=W.nR("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.aq(t).as(0,new W.aq(u))
return t}}
W.iJ.prototype={
ad:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bJ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ad(u.createElement("table"),b,c,d)
u.toString
u=new W.aq(u)
s=u.gaK(u)
s.toString
u=new W.aq(s)
r=u.gaK(u)
t.toString
r.toString
new W.aq(t).as(0,new W.aq(r))
return t}}
W.iK.prototype={
ad:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bJ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ad(u.createElement("table"),b,c,d)
u.toString
u=new W.aq(u)
s=u.gaK(u)
t.toString
s.toString
new W.aq(t).as(0,new W.aq(s))
return t}}
W.d1.prototype={$id1:1}
W.b0.prototype={$ib0:1}
W.aO.prototype={$iaO:1}
W.iM.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaO")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aO]},
$az:function(){return[W.aO]},
$ij:1,
$aj:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aI:function(){return[W.aO]}}
W.iN.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$ib0")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.b0]},
$az:function(){return[W.b0]},
$ij:1,
$aj:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aI:function(){return[W.b0]}}
W.iS.prototype={
gn:function(a){return a.length}}
W.b1.prototype={$ib1:1}
W.b2.prototype={$ib2:1}
W.iW.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$ib1")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.b1]},
$az:function(){return[W.b1]},
$ij:1,
$aj:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aI:function(){return[W.b1]}}
W.iX.prototype={
gn:function(a){return a.length}}
W.bR.prototype={}
W.ji.prototype={
i:function(a){return String(a)}}
W.jA.prototype={
gn:function(a){return a.length}}
W.bl.prototype={
giB:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.J("deltaY is not supported"))},
giA:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.J("deltaX is not supported"))},
$ibl:1}
W.db.prototype={
hH:function(a,b){return a.requestAnimationFrame(H.cp(H.n(b,{func:1,ret:-1,args:[P.ab]}),1))},
fm:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.dc.prototype={$idc:1}
W.jK.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iY")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.Y]},
$az:function(){return[W.Y]},
$ij:1,
$aj:function(){return[W.Y]},
$ib:1,
$ab:function(){return[W.Y]},
$aI:function(){return[W.Y]}}
W.ex.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
v:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$ial)return!1
return a.left===u.gbx(b)&&a.top===u.gbC(b)&&a.width===u.gaJ(b)&&a.height===u.gaE(b)},
gJ:function(a){return W.mD(C.c.gJ(a.left),C.c.gJ(a.top),C.c.gJ(a.width),C.c.gJ(a.height))},
gaE:function(a){return a.height},
gaJ:function(a){return a.width}}
W.jZ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaU")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aU]},
$az:function(){return[W.aU]},
$ij:1,
$aj:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aI:function(){return[W.aU]}}
W.eP.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iH")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.H]},
$az:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aI:function(){return[W.H]}}
W.kc.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$ib_")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.b_]},
$az:function(){return[W.b_]},
$ij:1,
$aj:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aI:function(){return[W.b_]}}
W.kg.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaN")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aN]},
$az:function(){return[W.aN]},
$ij:1,
$aj:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aI:function(){return[W.aN]}}
W.jI.prototype={
I:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.ga2(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga2:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.f])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.e(r,t)
s=H.h(r[t],"$idc")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aaf:function(){return[P.f,P.f]},
$aA:function(){return[P.f,P.f]}}
W.jM.prototype={
j:function(a,b){return this.a.getAttribute(H.K(b))},
k:function(a,b,c){this.a.setAttribute(b,c)},
gn:function(a){return this.ga2(this).length}}
W.jN.prototype={}
W.lA.prototype={}
W.jO.prototype={}
W.jP.prototype={
$1:function(a){return this.a.$1(H.h(a,"$io"))},
$S:37}
W.bT.prototype={
eV:function(a){var u
if($.de.giT($.de)){for(u=0;u<262;++u)$.de.k(0,C.U[u],W.pK())
for(u=0;u<12;++u)$.de.k(0,C.q[u],W.pL())}},
aT:function(a){return $.nv().T(0,W.cF(a))},
at:function(a,b,c){var u=$.de.j(0,H.i(W.cF(a))+"::"+b)
if(u==null)u=$.de.j(0,"*::"+b)
if(u==null)return!1
return H.lI(u.$4(a,b,c,this))},
$iaF:1}
W.I.prototype={
gU:function(a){return new W.dM(a,this.gn(a),[H.bV(this,a,"I",0)])}}
W.e2.prototype={
aT:function(a){return C.a.dF(this.a,new W.i0(a))},
at:function(a,b,c){return C.a.dF(this.a,new W.i_(a,b,c))},
$iaF:1}
W.i0.prototype={
$1:function(a){return H.h(a,"$iaF").aT(this.a)},
$S:29}
W.i_.prototype={
$1:function(a){return H.h(a,"$iaF").at(this.a,this.b,this.c)},
$S:29}
W.eX.prototype={
f2:function(a,b,c,d){var u,t,s
this.a.as(0,c)
u=b.bF(0,new W.k9())
t=b.bF(0,new W.ka())
this.b.as(0,u)
s=this.c
s.as(0,C.x)
s.as(0,t)},
aT:function(a){return this.a.T(0,W.cF(a))},
at:function(a,b,c){var u=this,t=W.cF(a),s=u.c
if(s.T(0,H.i(t)+"::"+b))return u.d.ih(c)
else if(s.T(0,"*::"+b))return u.d.ih(c)
else{s=u.b
if(s.T(0,H.i(t)+"::"+b))return!0
else if(s.T(0,"*::"+b))return!0
else if(s.T(0,H.i(t)+"::*"))return!0
else if(s.T(0,"*::*"))return!0}return!1},
$iaF:1}
W.k9.prototype={
$1:function(a){return!C.a.T(C.q,H.K(a))},
$S:30}
W.ka.prototype={
$1:function(a){return C.a.T(C.q,H.K(a))},
$S:30}
W.ki.prototype={
at:function(a,b,c){if(this.eN(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.T(0,b)
return!1}}
W.kj.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.K(a))},
$S:23}
W.kh.prototype={
aT:function(a){var u=J.U(a)
if(!!u.$icX)return!1
u=!!u.$ip
if(u&&W.cF(a)==="foreignObject")return!1
if(u)return!0
return!1},
at:function(a,b,c){if(b==="is"||C.b.a1(b,"on"))return!1
return this.aT(a)},
$iaF:1}
W.dM.prototype={
D:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdj(J.dw(u.a,t))
u.c=t
return!0}u.sdj(null)
u.c=s
return!1},
gL:function(a){return this.d},
sdj:function(a){this.d=H.E(a,H.r(this,0))},
$iba:1}
W.aF.prototype={}
W.k7.prototype={$iqq:1}
W.ff.prototype={
cS:function(a){new W.kt(this).$2(a,null)},
b5:function(a,b){if(b==null)J.lY(a)
else b.removeChild(a)},
hM:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nF(a)
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
p=H.G(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ak(r)}t="element unprintable"
try{t=J.au(a)}catch(r){H.ak(r)}try{s=W.cF(a)
this.hL(H.h(a,"$iV"),b,p,t,s,H.h(o,"$iA"),H.K(n))}catch(r){if(H.ak(r) instanceof P.aT)throw r
else{this.b5(a,b)
window
q="Removing corrupted element "+H.i(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hL:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b5(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aT(a)){o.b5(a,b)
window
u="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.at(a,"is",g)){o.b5(a,b)
window
u="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga2(f)
t=H.d(u.slice(0),[H.r(u,0)])
for(s=f.ga2(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.e(t,s)
r=t[s]
q=o.a
p=J.nI(r)
H.K(r)
if(!q.at(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.i(e)+" "+r+'="'+H.i(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.U(a).$id1)o.cS(a.content)},
$iqa:1}
W.kt.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hM(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b5(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ak(s)
r=H.h(u,"$iH")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.h(t,"$iH")}},
$S:35}
W.ew.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f2.prototype={}
W.f5.prototype={}
W.f6.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
P.kd.prototype={
dZ:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cP:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.U(a)
if(!!u.$iaC)return new Date(a.a)
if(!!u.$iol)throw H.c(P.ja("structured clone of RegExp"))
if(!!u.$iaK)return a
if(!!u.$ibZ)return a
if(!!u.$icG)return a
if(!!u.$ibr)return a
if(!!u.$icR||!!u.$ibP||!!u.$icO)return a
if(!!u.$iA){t=q.dZ(a)
s=q.b
if(t>=s.length)return H.e(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.I(a,new P.kf(p,q))
return p.a}if(!!u.$ib){t=q.dZ(a)
p=q.b
if(t>=p.length)return H.e(p,t)
r=p[t]
if(r!=null)return r
return q.ix(a,t)}throw H.c(P.ja("structured clone of other type"))},
ix:function(a,b){var u,t=J.cs(a),s=t.gn(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.cP(t.j(a,u)))
return r}}
P.kf.prototype={
$2:function(a,b){this.a.a[a]=this.b.cP(b)},
$S:6}
P.fc.prototype={$ibr:1,
gdL:function(a){return this.a}}
P.kG.prototype={
$2:function(a,b){this.a[a]=b},
$S:6}
P.ke.prototype={}
P.h6.prototype={
gbn:function(){var u=this.b,t=H.at(u,"z",0),s=W.V
return new H.hy(new H.da(u,H.n(new P.h7(),{func:1,ret:P.S,args:[t]}),[t]),H.n(new P.h8(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.h(c,"$iV")
u=this.gbn()
J.nG(u.b.$1(J.fu(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aH(this.gbn().a)},
j:function(a,b){var u=this.gbn()
return u.b.$1(J.fu(u.a,b))},
gU:function(a){var u=P.m9(this.gbn(),!1,W.V)
return new J.aB(u,u.length,[H.r(u,0)])},
$az:function(){return[W.V]},
$aj:function(){return[W.V]},
$ab:function(){return[W.V]}}
P.h7.prototype={
$1:function(a){return!!J.U(H.h(a,"$iH")).$iV},
$S:27}
P.h8.prototype={
$1:function(a){return H.B(H.h(a,"$iH"),"$iV")},
$S:34}
P.k2.prototype={
gcK:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.F(t)
return H.E(u+t,H.r(this,0))},
gdJ:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.F(t)
return H.E(u+t,H.r(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.i(u.a)+", "+H.i(u.b)+") "+H.i(u.c)+" x "+H.i(u.d)},
v:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.U(b)
if(!!u.$ial){t=p.a
if(t==u.gbx(b)){s=p.b
if(s==u.gbC(b)){r=p.c
if(typeof t!=="number")return t.p()
if(typeof r!=="number")return H.F(r)
q=H.r(p,0)
if(H.E(t+r,q)===u.gcK(b)){t=p.d
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.F(t)
u=H.E(s+t,q)===u.gdJ(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t=this,s=t.a,r=J.dx(s),q=t.b,p=J.dx(q),o=t.c
if(typeof s!=="number")return s.p()
if(typeof o!=="number")return H.F(o)
u=H.r(t,0)
o=C.d.gJ(H.E(s+o,u))
s=t.d
if(typeof q!=="number")return q.p()
if(typeof s!=="number")return H.F(s)
u=C.d.gJ(H.E(q+s,u))
return P.oL(P.k0(P.k0(P.k0(P.k0(0,r),p),o),u))}}
P.al.prototype={
gbx:function(a){return this.a},
gbC:function(a){return this.b},
gaJ:function(a){return this.c},
gaE:function(a){return this.d}}
P.bc.prototype={$ibc:1}
P.hn.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ibc")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$az:function(){return[P.bc]},
$ij:1,
$aj:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$aI:function(){return[P.bc]}}
P.bf.prototype={$ibf:1}
P.i3.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ibf")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$az:function(){return[P.bf]},
$ij:1,
$aj:function(){return[P.bf]},
$ib:1,
$ab:function(){return[P.bf]},
$aI:function(){return[P.bf]}}
P.ia.prototype={
gn:function(a){return a.length}}
P.cX.prototype={$icX:1}
P.iI.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.K(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$az:function(){return[P.f]},
$ij:1,
$aj:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aI:function(){return[P.f]}}
P.p.prototype={
gcj:function(a){return new P.h6(a,new W.aq(a))},
ad:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aF])
C.a.h(p,W.mC(null))
C.a.h(p,W.mE())
C.a.h(p,new W.kh())
c=new W.ff(new W.e2(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).iy(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.aq(s)
q=p.gaK(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.bj.prototype={$ibj:1}
P.iY.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ibj")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$az:function(){return[P.bj]},
$ij:1,
$aj:function(){return[P.bj]},
$ib:1,
$ab:function(){return[P.bj]},
$aI:function(){return[P.bj]}}
P.eH.prototype={}
P.eI.prototype={}
P.eS.prototype={}
P.eT.prototype={}
P.f3.prototype={}
P.f4.prototype={}
P.fa.prototype={}
P.fb.prototype={}
P.R.prototype={$ij:1,
$aj:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]},
$iov:1}
P.fz.prototype={
gn:function(a){return a.length}}
P.fA.prototype={
j:function(a,b){return P.bz(a.get(H.K(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bz(t.value[1]))}},
ga2:function(a){var u=H.d([],[P.f])
this.I(a,new P.fB(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.J("Not supported"))},
$aaf:function(){return[P.f,null]},
$iA:1,
$aA:function(){return[P.f,null]}}
P.fB.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.fC.prototype={
gn:function(a){return a.length}}
P.bY.prototype={}
P.i4.prototype={
gn:function(a){return a.length}}
P.ev.prototype={}
P.dB.prototype={$idB:1}
P.e6.prototype={$ie6:1}
P.cc.prototype={
jm:function(a,b,c,d,e,f,g){var u,t=J.U(g)
if(!!t.$ibr)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.pA(g))
return}if(!!t.$icJ)t=!0
else t=!1
if(t){this.i_(a,b,c,d,e,f,g)
return}throw H.c(P.dz("Incorrect number or type of arguments"))},
i_:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a6:function(a,b,c){return a.uniform1f(b,c)},
bE:function(a,b,c){return a.uniform1i(b,c)},
aa:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ew:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
ex:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ey:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$icc:1}
P.e9.prototype={$ie9:1}
P.eg.prototype={$ieg:1}
P.em.prototype={$iem:1}
P.iA.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return P.bz(a.item(b))},
k:function(a,b,c){H.h(c,"$iA")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$az:function(){return[[P.A,,,]]},
$ij:1,
$aj:function(){return[[P.A,,,]]},
$ib:1,
$ab:function(){return[[P.A,,,]]},
$aI:function(){return[[P.A,,,]]}}
P.f_.prototype={}
P.f0.prototype={}
O.a6.prototype={
bK:function(a){var u=this
u.sfA(H.d([],[a]))
u.sdr(null)
u.sdm(null)
u.sds(null)},
cT:function(a,b,c){var u=this,t=H.at(u,"a6",0)
H.n(b,{func:1,ret:P.S,args:[[P.j,t]]})
t={func:1,ret:-1,args:[P.m,[P.j,t]]}
H.n(a,t)
H.n(c,t)
u.sdr(b)
u.sdm(a)
u.sds(c)},
bi:function(a,b){return this.cT(a,null,b)},
hj:function(a){var u
H.l(a,"$ij",[H.at(this,"a6",0)],"$aj")
u=this.b
if(u!=null)return u.$1(a)
return!0},
eU:function(a,b){var u
H.l(b,"$ij",[H.at(this,"a6",0)],"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.aB(u,u.length,[H.r(u,0)])},
K:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.at(s,"a6",0)
H.E(b,r)
r=[r]
if(H.G(s.hj(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.eU(t,H.d([b],r))}},
sfA:function(a){this.a=H.l(a,"$ib",[H.at(this,"a6",0)],"$ab")},
sdr:function(a){this.b=H.n(a,{func:1,ret:P.S,args:[[P.j,H.at(this,"a6",0)]]})},
sdm:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.m,[P.j,H.at(this,"a6",0)]]})},
sds:function(a){H.n(a,{func:1,ret:-1,args:[P.m,[P.j,H.at(this,"a6",0)]]})},
$ij:1}
O.cN.prototype={
gn:function(a){return this.a.length},
gw:function(){var u=this.b
return u==null?this.b=D.W():u},
aL:function(){var u=this.b
if(u!=null)u.G(null)},
ga0:function(a){var u=this.a
if(u.length>0)return C.a.gau(u)
else return V.dZ()},
ek:function(a){var u=this.a
if(a==null)C.a.h(u,V.dZ())
else C.a.h(u,a)
this.aL()},
cF:function(){var u=this.a
if(u.length>0){u.pop()
this.aL()}},
sbU:function(a){this.a=H.l(a,"$ib",[V.ap],"$ab")}}
E.fF.prototype={}
E.ax.prototype={
sa7:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gw().E(0,s.gef())
u=s.c
if(u!=null)u.gw().h(0,s.gef())
t=new D.Q("shape",r,s.c,[F.ea])
t.b=!0
s.aG(t)}},
sbd:function(a){var u,t,s=this
if(!J.L(s.r,a)){u=s.r
if(u!=null)u.gw().E(0,s.ged())
if(a!=null)a.gw().h(0,s.ged())
s.r=a
t=new D.Q("mover",u,a,[U.ah])
t.b=!0
s.aG(t)}},
aw:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.b0(0,b,s):null
if(!J.L(q,s.x)){u=s.x
s.x=q
t=new D.Q("matrix",u,q,[V.ap])
t.b=!0
s.aG(t)}for(r=s.y.a,r=new J.aB(r,r.length,[H.r(r,0)]);r.D();)r.d.aw(0,b)},
aY:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga0(s))
else C.a.h(s.a,r.u(0,s.ga0(s)))
s.aL()
a.el(t.f)
s=a.dy
u=(s&&C.a).gau(s)
if(u!=null&&t.d!=null)u.jg(a,t)
for(s=t.y.a,s=new J.aB(s,s.length,[H.r(s,0)]);s.D();)s.d.aY(a)
a.ej()
a.dx.cF()},
gw:function(){var u=this.z
return u==null?this.z=D.W():u},
aG:function(a){var u=this.z
if(u!=null)u.G(a)},
V:function(){return this.aG(null)},
eg:function(a){H.h(a,"$iC")
this.e=null
this.aG(a)},
j3:function(){return this.eg(null)},
ee:function(a){this.aG(H.h(a,"$iC"))},
j2:function(){return this.ee(null)},
ec:function(a){this.aG(H.h(a,"$iC"))},
j_:function(){return this.ec(null)},
iZ:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ij",[E.ax],"$aj")
for(u=b.length,t=this.geb(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c1()
o.sai(null)
o.saQ(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sai(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.V()},
j1:function(a,b){var u,t
H.l(b,"$ij",[E.ax],"$aj")
for(u=b.gU(b),t=this.geb();u.D();)u.gL(u).gw().E(0,t)
this.V()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfe:function(a,b){this.y=H.l(b,"$ia6",[E.ax],"$aa6")},
$icQ:1}
E.ie.prototype={
eQ:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aC(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cN()
t=[V.ap]
u.sbU(H.d([],t))
u.b=null
u.gw().h(0,new E.ig(s))
s.cy=u
u=new O.cN()
u.sbU(H.d([],t))
u.b=null
u.gw().h(0,new E.ih(s))
s.db=u
u=new O.cN()
u.sbU(H.d([],t))
u.b=null
u.gw().h(0,new E.ii(s))
s.dx=u
s.shZ(H.d([],[O.ce]))
u=s.dy;(u&&C.a).h(u,null)
s.shU(new H.a3([P.f,A.cY]))},
gjc:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga0(s)
u=t.db
u=t.z=s.u(0,u.ga0(u))
s=u}return s},
el:function(a){var u=this.dy,t=a==null?(u&&C.a).gau(u):a;(u&&C.a).h(u,t)},
ej:function(){var u=this.dy
if(u.length>1)u.pop()},
shZ:function(a){this.dy=H.l(a,"$ib",[O.ce],"$ab")},
shU:function(a){this.fr=H.l(a,"$iA",[P.f,A.cY],"$aA")}}
E.ig.prototype={
$1:function(a){var u
H.h(a,"$iC")
u=this.a
u.ch=u.z=null},
$S:10}
E.ih.prototype={
$1:function(a){var u
H.h(a,"$iC")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:10}
E.ii.prototype={
$1:function(a){var u
H.h(a,"$iC")
u=this.a
u.cx=u.ch=null},
$S:10}
E.ei.prototype={
d_:function(a){H.h(a,"$iC")
this.eo()},
cZ:function(){return this.d_(null)},
giN:function(){var u,t=this,s=Date.now(),r=C.d.a5(P.m4(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aC(s,!1)
return u/r},
dv:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.u()
if(typeof r!=="number")return H.F(r)
u=C.c.ct(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.u()
t=C.c.ct(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.mo(C.o,s.gji())}},
eo:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iR(this),{func:1,ret:-1,args:[P.ab]})
C.E.fm(u)
C.E.hH(u,W.mT(t,P.ab))}},
jf:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dv()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aC(r,!1)
s.y=P.m4(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aL()
r=s.db
C.a.sn(r.a,0)
r.aL()
r=s.dx
C.a.sn(r.a,0)
r.aL()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aY(p.e)}s=p.z
if(s!=null)s.G(null)}catch(q){u=H.ak(q)
t=H.cu(q)
P.lR("Error: "+H.i(u))
P.lR("Stack: "+H.i(t))
throw H.c(u)}}}
E.iR.prototype={
$1:function(a){var u
H.n7(a)
u=this.a
if(u.ch){u.ch=!1
u.jf()}},
$S:57}
Z.et.prototype={$iq4:1}
Z.dC.prototype={
cc:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ak(s)
t=P.v('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.jB.prototype={$iq5:1}
Z.dD.prototype={
aV:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
cc:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].cc(a)},
jr:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aY:function(a){var u,t,s,r,q,p=this.b.length
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
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.au(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sfu:function(a){this.b=H.l(a,"$ib",[Z.bN],"$ab")},
$iqe:1}
Z.bN.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c9(this.c)+"'")+"]"}}
Z.by.prototype={
gcU:function(a){var u=this.a,t=(u&$.bD().a)!==0?3:0
if((u&$.bC().a)!==0)t+=3
if((u&$.bB().a)!==0)t+=3
if((u&$.bE().a)!==0)t+=2
if((u&$.bX().a)!==0)t+=3
if((u&$.du().a)!==0)t+=3
if((u&$.dv().a)!==0)t+=4
if((u&$.cx().a)!==0)++t
return(u&$.bA().a)!==0?t+4:t},
ik:function(a){var u,t=$.bD(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bC()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bB()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bE()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bX()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.du()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cx()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bA()
if((s&t.a)!==0)if(u===a)return t
return $.nt()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.by))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.f]),t=this.a
if((t&$.bD().a)!==0)C.a.h(u,"Pos")
if((t&$.bC().a)!==0)C.a.h(u,"Norm")
if((t&$.bB().a)!==0)C.a.h(u,"Binm")
if((t&$.bE().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bX().a)!==0)C.a.h(u,"TxtCube")
if((t&$.du().a)!==0)C.a.h(u,"Clr3")
if((t&$.dv().a)!==0)C.a.h(u,"Clr4")
if((t&$.cx().a)!==0)C.a.h(u,"Weight")
if((t&$.bA().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fI.prototype={}
D.c1.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.C]}
H.n(b,u)
if(this.a==null)this.sai(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
E:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.C]})
u=s.a
u=u==null?null:C.a.T(u,b)
if(u===!0){u=s.a
t=(u&&C.a).E(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.T(u,b)
if(u===!0){u=s.b
t=(u&&C.a).E(u,b)||t}return t},
G:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.I(P.m9(u,!0,{func:1,ret:-1,args:[D.C]}),new D.h2(q))
u=r.b
if(u!=null){r.saQ(H.d([],[{func:1,ret:-1,args:[D.C]}]))
C.a.I(u,new D.h3(q))}return!0},
iD:function(){return this.G(null)},
av:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.G(u)}}},
sai:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.C]}],"$ab")},
saQ:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.C]}],"$ab")}}
D.h2.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.C]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.h3.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.C]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.C.prototype={}
D.c5.prototype={}
D.c6.prototype={}
D.Q.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.dE.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dE))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.dR.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dR))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.hm.prototype={
j8:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
j4:function(a){this.c=a.b
this.d.E(0,a.a)
return!1},
shz:function(a){this.d=H.l(a,"$imk",[P.m],"$amk")}}
X.dV.prototype={}
X.hu.prototype={
b3:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.u()
u=b.b
t=q.ch
if(typeof u!=="number")return u.u()
s=o.p(0,new V.a5(n*m,u*t))
t=q.a.gaU()
r=new X.bv(a,V.bw(),q.x,t,s)
r.b=!0
q.z=new P.aC(p,!1)
q.x=s
return r},
cE:function(a,b){this.r=a.a
return!1},
bf:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eE()
if(typeof u!=="number")return u.ah()
this.r=(u&~t)>>>0
return!1},
be:function(a,b){var u=this.d
if(u==null)return!1
u.G(this.b3(a,b))
return!0},
j9:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaU()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.u()
q=a.b
p=o.cy
if(typeof q!=="number")return q.u()
t=new X.cP(new V.X(s*r,q*p),u,t)
t.b=!0
n.G(t)
return!0},
h8:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dV(c,r.a.gaU(),b)
s.b=!0
t.G(s)
r.y=new P.aC(u,!1)
r.x=V.bw()}}
X.aE.prototype={
v:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aE))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.G(this.b)?"Alt+":""
return u+(H.G(this.c)?"Shift+":"")}}
X.bv.prototype={}
X.hU.prototype={
bR:function(a,b,c){var u=this,t=new P.aC(Date.now(),!1),s=u.a.gaU(),r=new X.bv(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cE:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.G(this.bR(a,b,!0))
return!0},
bf:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eE()
if(typeof t!=="number")return t.ah()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.G(u.bR(a,b,!0))
return!0},
be:function(a,b){var u=this.d
if(u==null)return!1
u.G(this.bR(a,b,!1))
return!0},
ja:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaU()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.u()
r=a.b
q=p.ch
if(typeof r!=="number")return r.u()
u=new X.cP(new V.X(t*s,r*q),u,b)
u.b=!0
o.G(u)
return!0},
gdM:function(){var u=this.b
return u==null?this.b=D.W():u},
gcO:function(){var u=this.c
return u==null?this.c=D.W():u},
gea:function(){var u=this.d
return u==null?this.d=D.W():u}}
X.cP.prototype={}
X.i9.prototype={}
X.ek.prototype={}
X.iV.prototype={
b3:function(a,b){var u,t,s,r,q=this
H.l(a,"$ib",[V.a5],"$ab")
u=new P.aC(Date.now(),!1)
t=a.length>0?a[0]:V.bw()
s=q.a.gaU()
r=new X.ek(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
j7:function(a){var u
H.l(a,"$ib",[V.a5],"$ab")
u=this.b
if(u==null)return!1
u.G(this.b3(a,!0))
return!0},
j5:function(a){var u
H.l(a,"$ib",[V.a5],"$ab")
u=this.c
if(u==null)return!1
u.G(this.b3(a,!0))
return!0},
j6:function(a){var u
H.l(a,"$ib",[V.a5],"$ab")
u=this.d
if(u==null)return!1
u.G(this.b3(a,!1))
return!0}}
X.ep.prototype={
gaU:function(){var u=this.a,t=C.i.gdK(u).c
t.toString
u=C.i.gdK(u).d
u.toString
return V.mi(0,0,t,u)},
dd:function(a){var u=a.keyCode,t=H.G(a.ctrlKey)||H.G(a.metaKey)
return new X.dR(u,new X.aE(t,a.altKey,a.shiftKey))},
aR:function(a){var u=this.b,t=H.G(a.ctrlKey)||H.G(a.metaKey)
u.c=new X.aE(t,a.altKey,a.shiftKey)},
c9:function(a){var u=this.b,t=H.G(a.ctrlKey)||H.G(a.metaKey)
u.c=new X.aE(t,a.altKey,a.shiftKey)},
aB:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.t()
u=t.top
if(typeof r!=="number")return r.t()
return new V.a5(s-q,r-u)},
b4:function(a){return new V.X(a.movementX,a.movementY)},
c4:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.a5])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=C.c.al(r.pageX)
C.c.al(r.pageY)
p=o.left
C.c.al(r.pageX)
C.a.h(n,new V.a5(q-p,C.c.al(r.pageY)-o.top))}return n},
az:function(a){var u=a.buttons,t=H.G(a.ctrlKey)||H.G(a.metaKey)
return new X.dE(u,new X.aE(t,a.altKey,a.shiftKey))},
bV:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.t()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.t()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
h2:function(a){this.f=!0},
fR:function(a){this.f=!1},
fX:function(a){H.h(a,"$iag")
if(H.G(this.f)&&this.bV(a))a.preventDefault()},
h6:function(a){var u
H.h(a,"$ibb")
if(!H.G(this.f))return
u=this.dd(a)
this.b.j8(u)},
h4:function(a){var u
H.h(a,"$ibb")
if(!H.G(this.f))return
u=this.dd(a)
this.b.j4(u)},
ha:function(a){var u,t,s,r,q=this
H.h(a,"$iag")
u=q.a
u.focus()
q.f=!0
q.aR(a)
if(H.G(q.x)){t=q.az(a)
s=q.b4(a)
if(q.d.cE(t,s))a.preventDefault()
return}if(H.G(q.r)){q.y=a
u.requestPointerLock()
return}t=q.az(a)
r=q.aB(a)
if(q.c.cE(t,r))a.preventDefault()},
he:function(a){var u,t,s,r=this
H.h(a,"$iag")
r.aR(a)
u=r.az(a)
if(H.G(r.x)){t=r.b4(a)
if(r.d.bf(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aB(a)
if(r.c.bf(u,s))a.preventDefault()},
h0:function(a){var u,t,s,r=this
H.h(a,"$iag")
if(!r.bV(a)){r.aR(a)
u=r.az(a)
if(H.G(r.x)){t=r.b4(a)
if(r.d.bf(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aB(a)
if(r.c.bf(u,s))a.preventDefault()}},
hc:function(a){var u,t,s,r=this
H.h(a,"$iag")
r.aR(a)
u=r.az(a)
if(H.G(r.x)){t=r.b4(a)
if(r.d.be(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aB(a)
if(r.c.be(u,s))a.preventDefault()},
fZ:function(a){var u,t,s,r=this
H.h(a,"$iag")
if(!r.bV(a)){r.aR(a)
u=r.az(a)
if(H.G(r.x)){t=r.b4(a)
if(r.d.be(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aB(a)
if(r.c.be(u,s))a.preventDefault()}},
hg:function(a){var u,t,s=this
H.h(a,"$ibl")
s.aR(a)
u=new V.X((a&&C.D).giA(a),C.D.giB(a)).q(0,180)
if(H.G(s.x)){if(s.d.j9(u))a.preventDefault()
return}if(H.G(s.r))return
t=s.aB(a)
if(s.c.ja(u,t))a.preventDefault()},
hi:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.az(s.y)
t=s.aB(s.y)
s.d.h8(u,t,r)}},
hv:function(a){var u,t=this
H.h(a,"$ib2")
t.a.focus()
t.f=!0
t.c9(a)
u=t.c4(a)
if(t.e.j7(u))a.preventDefault()},
hr:function(a){var u
H.h(a,"$ib2")
this.c9(a)
u=this.c4(a)
if(this.e.j5(u))a.preventDefault()},
ht:function(a){var u
H.h(a,"$ib2")
this.c9(a)
u=this.c4(a)
if(this.e.j6(u))a.preventDefault()},
sfn:function(a){this.z=H.l(a,"$ib",[[P.d_,P.P]],"$ab")}}
D.bK.prototype={
gw:function(){var u=this.r
return u==null?this.r=D.W():u},
ax:function(a){var u
H.h(a,"$iC")
u=this.r
if(u!=null)u.G(a)},
eY:function(){return this.ax(null)},
$iae:1,
$icQ:1}
D.ae.prototype={$icQ:1}
D.dS.prototype={
gw:function(){var u=this.x
return u==null?this.x=D.W():u},
ax:function(a){var u=this.x
if(u!=null)u.G(a)},
dq:function(a){var u
H.h(a,"$iC")
u=this.y
if(u!=null)u.G(a)},
h7:function(){return this.dq(null)},
hl:function(a){var u,t,s
H.l(a,"$ij",[D.ae],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(s==null||this.eW(s))return!1}return!0},
fL:function(a,b){var u,t,s,r,q,p,o,n=D.ae
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gdn(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=H.h(b[q],"$iae")
if(p instanceof D.bK)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.c1()
o.sai(null)
o.saQ(null)
o.c=null
o.d=0
p.r=o}H.n(t,s)
if(o.a==null)o.sai(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.c5([n])
n.b=!0
this.ax(n)},
hp:function(a,b){var u,t,s,r=D.ae
H.l(b,"$ij",[r],"$aj")
for(u=b.gU(b),t=this.gdn();u.D();){s=u.gL(u)
C.a.E(this.e,s)
s.gw().E(0,t)}r=new D.c6([r])
r.b=!0
this.ax(r)},
eW:function(a){var u=C.a.T(this.e,a)
return u},
sfl:function(a){this.e=H.l(a,"$ib",[D.bK],"$ab")},
shw:function(a){this.f=H.l(a,"$ib",[D.e5],"$ab")},
shX:function(a){this.r=H.l(a,"$ib",[D.ec],"$ab")},
$aj:function(){return[D.ae]},
$aa6:function(){return[D.ae]}}
D.e5.prototype={$iae:1,$icQ:1}
D.ec.prototype={$iae:1,$icQ:1}
V.ac.prototype={
p:function(a,b){var u=C.c.p(this.a,b.gcI()),t=C.c.p(this.b,b.gbG()),s=C.c.p(this.c,b.gce())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.ac(u,t,s)},
t:function(a,b){var u=C.c.t(this.a,b.gcI()),t=C.c.t(this.b,b.gbG()),s=C.c.t(this.c,b.gce())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.ac(u,t,s)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ac))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
V.av.prototype={
cM:function(a){var u=this
return H.d([u.a,u.b,u.c,u.d],[P.q])},
p:function(a,b){var u=this,t=C.c.p(u.a,b.gcI()),s=C.c.p(u.b,b.gbG()),r=C.c.p(u.c,b.gce()),q=C.c.p(u.d,b.gii(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.av(t,s,r,q)},
t:function(a,b){var u=this,t=C.c.t(u.a,b.gcI()),s=C.c.t(u.b,b.gbG()),r=C.c.t(u.c,b.gce()),q=C.c.t(u.d,b.gii(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.av(t,s,r,q)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.av))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.T(u.a,3,0)+", "+V.T(u.b,3,0)+", "+V.T(u.c,3,0)+", "+V.T(u.d,3,0)+"]"}}
V.h1.prototype={}
V.dY.prototype={
ag:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.q])
return t},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dY))return!1
u=b.a
t=$.O().a
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
i:function(a){var u,t,s,r,q=this,p=[P.q],o=V.cr(H.d([q.a,q.d,q.r],p),3,0),n=V.cr(H.d([q.b,q.e,q.x],p),3,0),m=V.cr(H.d([q.c,q.f,q.y],p),3,0)
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
ag:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.q])
return t},
e6:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.O().a)return V.dZ()
u=1/b1
t=-n
s=-a0
return V.be((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
u:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.be(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bD:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.D(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cN:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.Z(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ap))return!1
u=b.a
t=$.O().a
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
H:function(a){var u,t,s,r,q,p=this,o=[P.q],n=V.cr(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.cr(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.cr(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.cr(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
N:function(){return this.H("")}}
V.a5.prototype={
p:function(a,b){return new V.a5(this.a+b.a,this.b+b.b)},
t:function(a,b){return new V.a5(this.a-b.a,this.b-b.b)},
q:function(a,b){if(Math.abs(b-0)<$.O().a)return V.bw()
return new V.a5(this.a/b,this.b/b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+"]"}}
V.Z.prototype={
p:function(a,b){return new V.Z(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.Z(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){return new V.Z(this.a*b,this.b*b,this.c*b)},
q:function(a,b){if(Math.abs(b-0)<$.O().a)return V.ls()
return new V.Z(this.a/b,this.b/b,this.c/b)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
V.bg.prototype={
p:function(a,b){var u=this
return new V.bg(C.c.p(u.a,b.gjt(b)),C.c.p(u.b,b.gju(b)),C.c.p(u.c,b.gjv(b)),C.c.p(u.d,b.gjs(b)))},
t:function(a,b){var u=this
return new V.bg(C.c.t(u.a,b.gjt(b)),C.c.t(u.b,b.gju(b)),C.c.t(u.c,b.gjv(b)),C.c.t(u.d,b.gjs(b)))},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bg))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.T(u.a,3,0)+", "+V.T(u.b,3,0)+", "+V.T(u.c,3,0)+", "+V.T(u.d,3,0)+"]"}}
V.e8.prototype={
ga9:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e8))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.T(u.a,3,0)+", "+V.T(u.b,3,0)+", "+V.T(u.c,3,0)+", "+V.T(u.d,3,0)+"]"}}
V.X.prototype={
bb:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.F(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.F(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a,s=b.gbu(b)
if(typeof t!=="number")return t.p()
s=C.c.p(t,s)
t=this.b
u=b.gbv(b)
if(typeof t!=="number")return t.p()
return new V.X(s,C.c.p(t,u))},
t:function(a,b){var u,t=this.a,s=b.gbu(b)
if(typeof t!=="number")return t.t()
s=C.c.t(t,s)
t=this.b
u=b.gbv(b)
if(typeof t!=="number")return t.t()
return new V.X(s,C.c.t(t,u))},
u:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.u()
u=this.b
if(typeof u!=="number")return u.u()
return new V.X(t*b,u*b)},
q:function(a,b){var u,t
if(Math.abs(b-0)<$.O().a){u=$.mv
return u==null?$.mv=new V.X(0,0):u}u=this.a
if(typeof u!=="number")return u.q()
t=this.b
if(typeof t!=="number")return t.q()
return new V.X(u/b,t/b)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=this.a
s=$.O()
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
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+"]"}}
V.D.prototype={
bb:function(a){return Math.sqrt(this.C(this))},
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cz:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.D(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aC:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.D(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.D(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.D(this.a-b.a,this.b-b.b,this.c-b.c)},
S:function(a){return new V.D(-this.a,-this.b,-this.c)},
u:function(a,b){return new V.D(this.a*b,this.b*b,this.c*b)},
q:function(a,b){if(Math.abs(b-0)<$.O().a)return V.d8()
return new V.D(this.a/b,this.b/b,this.c/b)},
e7:function(){var u=$.O().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.D))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
V.b4.prototype={
bb:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u=this
return new V.b4(u.a+b.a,u.b+b.b,u.c+b.c,u.d+b.d)},
t:function(a,b){var u=this
return new V.b4(C.c.t(u.a,b.gbu(b)),C.c.t(u.b,b.gbv(b)),C.c.t(u.c,b.gdO()),C.c.t(u.d,b.gdN()))},
q:function(a,b){var u,t=this
if(Math.abs(b-0)<$.O().a){u=$.mA
return u==null?$.mA=new V.b4(0,0,0,0):u}return new V.b4(t.a/b,t.b/b,t.c/b,t.d/b)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b4))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.T(u.a,3,0)+", "+V.T(u.b,3,0)+", "+V.T(u.c,3,0)+", "+V.T(u.d,3,0)+"]"}}
U.fJ.prototype={
bM:function(a){var u=V.q3(a,this.c,this.b)
return u},
gw:function(){var u=this.y
return u==null?this.y=D.W():u},
P:function(a){var u=this.y
if(u!=null)u.G(a)},
scQ:function(a,b){},
scA:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.O().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bM(u)}s=new D.Q("maximumLocation",s,t.b,[P.q])
s.b=!0
t.P(s)}},
scC:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.O().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bM(u)}s=new D.Q("minimumLocation",s,t.c,[P.q])
s.b=!0
t.P(s)}},
sY:function(a,b){var u,t=this
b=t.bM(b)
u=t.d
if(!(Math.abs(u-b)<$.O().a)){t.d=b
u=new D.Q("location",u,b,[P.q])
u.b=!0
t.P(u)}},
scB:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.O().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.Q("maximumVelocity",r,a,[P.q])
r.b=!0
s.P(r)}},
sW:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.O().a)){u.f=a
t=new D.Q("velocity",t,a,[P.q])
t.b=!0
u.P(t)}},
scm:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.O().a)){this.x=a
u=new D.Q("dampening",u,a,[P.q])
u.b=!0
this.P(u)}},
aw:function(a,b){var u,t,s,r=this,q=r.f,p=$.O().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sY(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.O().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sW(u)}}}
U.dG.prototype={
gw:function(){var u=this.b
return u==null?this.b=D.W():u},
b0:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dG))return!1
return J.L(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.cI.prototype={
gw:function(){var u=this.e
return u==null?this.e=D.W():u},
P:function(a){var u
H.h(a,"$iC")
u=this.e
if(u!=null)u.G(a)},
a4:function(){return this.P(null)},
fJ:function(a,b){var u,t,s,r,q,p,o,n=U.ah
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gaP(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gw()
o.toString
H.n(t,s)
if(o.a==null)o.sai(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c5([n])
n.b=!0
this.P(n)},
hn:function(a,b){var u,t,s=U.ah
H.l(b,"$ij",[s],"$aj")
for(u=b.gU(b),t=this.gaP();u.D();)u.gL(u).gw().E(0,t)
s=new D.c6([s])
s.b=!0
this.P(s)},
b0:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.R()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.aB(r,r.length,[H.r(r,0)]),u=null;r.D();){q=r.d
if(q!=null){t=q.b0(0,b,c)
if(t!=null)u=u==null?t:t.u(0,u)}}s.f=u==null?V.dZ():u
r=s.e
if(r!=null)r.av(0)}return s.f},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cI))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.L(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.ah]},
$aa6:function(){return[U.ah]},
$iah:1}
U.ah.prototype={}
U.eq.prototype={
gw:function(){var u=this.cy
return u==null?this.cy=D.W():u},
P:function(a){var u
H.h(a,"$iC")
u=this.cy
if(u!=null)u.G(a)},
a4:function(){return this.P(null)},
b6:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdM().h(0,u.gbW())
u.a.c.gea().h(0,u.gbY())
u.a.c.gcO().h(0,u.gc_())
return!0},
bX:function(a){var u=this
H.h(a,"$iC")
if(!J.L(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bZ:function(a){var u,t,s,r,q,p,o,n=this
a=H.B(H.h(a,"$iC"),"$ibv")
if(!H.G(n.y))return
if(H.G(n.x)){u=a.d.t(0,a.y)
u=new V.X(u.a,u.b)
u=u.C(u)
t=n.r
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.x=!1}if(H.G(n.d)){u=a.c
t=a.d.t(0,a.y)
u=new V.X(t.a,t.b).u(0,2).q(0,u.ga9())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.u()
s=n.e
if(typeof s!=="number")return H.F(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=new V.X(s.a,s.b).u(0,2).q(0,u.ga9())
s=n.b
q=r.a
if(typeof q!=="number")return q.S()
p=n.e
if(typeof p!=="number")return H.F(p)
o=n.z
if(typeof o!=="number")return H.F(o)
s.sY(0,-q*p+o)
n.b.sW(0)
t=t.t(0,a.z)
n.Q=new V.X(t.a,t.b).u(0,2).q(0,u.ga9())}n.a4()},
c0:function(a){var u,t,s,r=this
H.h(a,"$iC")
if(!H.G(r.y))return
r.y=!1
if(H.G(r.x))return
u=r.Q
if(u.C(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.u()
s=r.e
if(typeof s!=="number")return H.F(s)
u.sW(t*10*s)
r.a4()}},
b0:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.R()
if(q<p){r.ch=p
u=b.y
r.b.aw(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.be(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iah:1}
U.er.prototype={
gw:function(){var u=this.fx
return u==null?this.fx=D.W():u},
P:function(a){var u
H.h(a,"$iC")
u=this.fx
if(u!=null)u.G(a)},
a4:function(){return this.P(null)},
b6:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdM().h(0,s.gbW())
s.a.c.gea().h(0,s.gbY())
s.a.c.gcO().h(0,s.gc_())
u=s.a.d
t=u.f
u=t==null?u.f=D.W():t
u.h(0,s.gfB())
u=s.a.d
t=u.d
u=t==null?u.d=D.W():t
u.h(0,s.gfD())
u=s.a.e
t=u.b
u=t==null?u.b=D.W():t
u.h(0,s.gi5())
u=s.a.e
t=u.d
u=t==null?u.d=D.W():t
u.h(0,s.gi3())
u=s.a.e
t=u.c
u=t==null?u.c=D.W():t
u.h(0,s.gi1())
return!0},
aq:function(a){var u=a.a,t=a.b
if(H.G(this.f)){if(typeof u!=="number")return u.S()
u=-u}if(H.G(this.r)){if(typeof t!=="number")return t.S()
t=-t}return new V.X(u,t)},
bX:function(a){var u=this
a=H.B(H.h(a,"$iC"),"$ibv")
if(!J.L(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bZ:function(a){var u,t,s,r,q,p,o,n=this
a=H.B(H.h(a,"$iC"),"$ibv")
if(!H.G(n.cx))return
if(H.G(n.ch)){u=a.d.t(0,a.y)
u=new V.X(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.G(n.e)){u=a.c
t=a.d.t(0,a.y)
u=n.aq(new V.X(t.a,t.b).u(0,2).q(0,u.ga9()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=n.aq(new V.X(s.a,s.b).u(0,2).q(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sY(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.t(0,a.z)
n.dx=n.aq(new V.X(t.a,t.b).u(0,2).q(0,u.ga9()))}n.a4()},
c0:function(a){var u,t,s,r=this
H.h(a,"$iC")
if(!H.G(r.cx))return
r.cx=!1
if(H.G(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sW(-t*10*u)
r.a4()}},
fC:function(a){var u=this
if(H.B(H.h(a,"$iC"),"$idV").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fE:function(a){var u,t,s,r,q,p,o,n=this
a=H.B(H.h(a,"$iC"),"$ibv")
if(!J.L(n.d,a.x.b))return
u=a.c
t=a.d
s=t.t(0,a.y)
r=n.aq(new V.X(s.a,s.b).u(0,2).q(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sY(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.t(0,a.z)
n.dx=n.aq(new V.X(t.a,t.b).u(0,2).q(0,u.ga9()))
n.a4()},
i6:function(a){var u=this
H.h(a,"$iC")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
i4:function(a){var u,t,s,r,q,p,o,n=this
a=H.B(H.h(a,"$iC"),"$iek")
if(!H.G(n.cx))return
if(H.G(n.ch)){u=a.d.t(0,a.y)
u=new V.X(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.G(n.e)){u=a.c
t=a.d.t(0,a.y)
u=n.aq(new V.X(t.a,t.b).u(0,2).q(0,u.ga9()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=n.aq(new V.X(s.a,s.b).u(0,2).q(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sY(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.t(0,a.z)
n.dx=n.aq(new V.X(t.a,t.b).u(0,2).q(0,u.ga9()))}n.a4()},
i2:function(a){var u,t,s,r=this
H.h(a,"$iC")
if(!H.G(r.cx))return
r.cx=!1
if(H.G(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sW(-t*10*u)
r.a4()}},
b0:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.R()
if(q<p){r.dy=p
u=b.y
r.c.aw(0,u)
r.b.aw(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.be(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.u(0,V.be(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iah:1}
U.es.prototype={
gw:function(){var u=this.r
return u==null?this.r=D.W():u},
P:function(a){var u=this.r
if(u!=null)u.G(a)},
b6:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.W():t
t=r.gfG()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.W():s).h(0,t)
return!0},
fH:function(a){var u,t,s,r,q=this
H.h(a,"$iC")
if(!J.L(q.b,q.a.b.c))return
H.B(a,"$icP")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){q.d=r
u=new D.Q("zoom",u,r,[P.q])
u.b=!0
q.P(u)}},
b0:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.be(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iah:1}
M.dK.prototype={
ay:function(a){var u
H.h(a,"$iC")
u=this.y
if(u!=null)u.G(a)},
f_:function(){return this.ay(null)},
fT:function(a,b){var u,t,s,r,q,p,o,n=E.ax
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gap(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c1()
o.sai(null)
o.saQ(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sai(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c5([n])
n.b=!0
this.ay(n)},
fV:function(a,b){var u,t,s=E.ax
H.l(b,"$ij",[s],"$aj")
for(u=b.gU(b),t=this.gap();u.D();)u.gL(u).gw().E(0,t)
s=new D.c6([s])
s.b=!0
this.ay(s)},
ser:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gw().E(0,t.gap())
u=t.d
t.d=a
if(a!=null)a.gw().h(0,t.gap())
s=new D.Q("technique",u,t.d,[O.ce])
s.b=!0
t.ay(s)}},
gw:function(){var u=this.y
return u==null?this.y=D.W():u},
aY:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.el(f.d)
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
if(typeof s!=="number")return H.F(s)
o=C.c.al(p*s)
p=q.b
if(typeof r!=="number")return H.F(r)
n=C.c.al(p*r)
p=C.c.al(q.c*s)
a.c=p
q=C.c.al(q.d*r)
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
i=V.be(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.ek(i)
t=$.me
if(t==null){t=V.ls()
q=V.ly()
p=$.mw
t=V.ma(t,q,p==null?$.mw=new V.D(0,0,-1):p)
$.me=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.u(0,h)}a.db.ek(h)
u=f.d
if(u!=null)u.aw(0,a)
for(u=f.e.a,u=new J.aB(u,u.length,[H.r(u,0)]);u.D();)u.d.aw(0,a)
for(u=f.e.a,u=new J.aB(u,u.length,[H.r(u,0)]);u.D();)u.d.aY(a)
f.b.toString
a.cy.cF()
a.db.cF()
f.c.toString
a.ej()},
seZ:function(a,b){this.e=H.l(b,"$ia6",[E.ax],"$aa6")},
$iqb:1}
A.dA.prototype={}
A.fy.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iE:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
iC:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.aw.prototype={
gam:function(a){var u=this.b?2:0
return 0|u|0},
i:function(a){var u=this.b?2:0
return""+(0|u|0)},
v:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.aw))return!1
u=this.b===b.b&&!0
return u}}
A.hB.prototype={
eP:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.aj("")
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
A.pi(c3,u)
A.pk(c3,u)
A.pj(c3,u)
A.pm(c3,u)
A.pn(c3,u)
A.pl(c3,u)
A.po(c3,u)
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
m=A.ph(b8.z)
b8.c=n
b8.d=m
b8.e=b8.de(n,35633)
b8.f=b8.de(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.G(H.lI(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.w(P.v("Failed to link shader: "+H.i(l)))}b8.hR()
b8.hT()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.B(b8.y.X(0,"invViewMat"),"$iaG")
if(t)b8.dy=H.B(b8.y.X(0,"objMat"),"$iaG")
if(r)b8.fr=H.B(b8.y.X(0,"viewObjMat"),"$iaG")
b8.fy=H.B(b8.y.X(0,"projViewObjMat"),"$iaG")
if(c3.ry)b8.k1=H.B(b8.y.X(0,"txt2DMat"),"$id6")
if(c3.x1)b8.k2=H.B(b8.y.X(0,"txtCubeMat"),"$iaG")
if(c3.x2)b8.k3=H.B(b8.y.X(0,"colorMat"),"$iaG")
b8.sfa(H.d([],[A.aG]))
t=c3.y2
if(t>0){b8.k4=H.h(b8.y.X(0,"bendMatCount"),"$iaP")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.w(P.v(c0+q+c1));(s&&C.a).h(s,H.B(j,"$iaG"))}}if(c3.a.b)b8.rx=H.B(b8.y.X(0,"emissionTxt"),"$ian")
if(c3.b.b)b8.x2=H.B(b8.y.X(0,"ambientTxt"),"$ian")
if(c3.c.b)b8.aD=H.B(b8.y.X(0,"diffuseTxt"),"$ian")
if(c3.d.b)b8.dQ=H.B(b8.y.X(0,"invDiffuseTxt"),"$ian")
t=c3.e
s=t.b||!1
if(s){b8.dS=H.B(b8.y.X(0,"shininess"),"$iam")
if(t.b)b8.dR=H.B(b8.y.X(0,"specularTxt"),"$ian")}if(c3.f.b)b8.dT=H.B(b8.y.X(0,"bumpTxt"),"$ian")
if(c3.cy){b8.dU=H.B(b8.y.X(0,"envSampler"),"$ich")
if(c3.r.b)b8.dV=H.B(b8.y.X(0,"reflectTxt"),"$ian")
t=c3.x
s=t.b||!1
if(s){b8.dW=H.B(b8.y.X(0,"refraction"),"$iam")
if(t.b)b8.dX=H.B(b8.y.X(0,"refractTxt"),"$ian")}}if(c3.y.b)b8.dY=H.B(b8.y.X(0,"alphaTxt"),"$ian")
t=P.m
s=[t,A.aP]
b8.sfk(new H.a3(s))
b8.sf0(new H.a3([t,[P.b,A.cf]]))
b8.shx(new H.a3(s))
b8.shy(new H.a3([t,[P.b,A.cg]]))
b8.shW(new H.a3(s))
b8.sf1(new H.a3([t,[P.b,A.ci]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.cf],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ah()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.j(0,d)
if(j==null)H.w(P.v(c0+d+c1))
H.B(j,"$iad")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.j(0,d)
if(c==null)H.w(P.v(c0+d+c1))
H.B(c,"$iad")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.j(0,d)
if(b==null)H.w(P.v(c0+d+c1))
H.B(b,"$iad")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.j(0,d)
if(j==null)H.w(P.v(c0+d+c1))
H.B(j,"$iad")
o=b8.y
d=f+"s["+k+"].color"
c=o.j(0,d)
if(c==null)H.w(P.v(c0+d+c1))
H.B(c,"$iad")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.j(0,o)
if(b==null)H.w(P.v(c0+o+c1))
H.B(b,"$ian")
a2=b}else a2=b9
C.a.h(e,new A.cf(a1,a0,a,j,c,a2))}b8.co.k(0,g,e)
q=b8.cn
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.w(P.v(c0+o+c1))
q.k(0,g,H.h(j,"$iaP"))}for(t=c3.Q,s=t.length,r=[A.cg],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.j(0,o)
if(j==null)H.w(P.v(c0+o+c1))
H.B(j,"$iad")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.j(0,o)
if(c==null)H.w(P.v(c0+o+c1))
H.B(c,"$iad")
p=b8.y
o=f+"s["+k+"].color"
b=p.j(0,o)
if(b==null)H.w(P.v(c0+o+c1))
H.B(b,"$iad")
if(typeof g!=="number")return g.ah()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.w(P.v(c0+o+c1))
H.B(a3,"$id6")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.w(P.v(c0+o+c1))
H.B(a3,"$ich")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.w(P.v(c0+o+c1))
H.B(a3,"$ich")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.w(P.v(c0+o+c1))
H.B(a5,"$id5")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.j(0,o)
if(a3==null)H.w(P.v(c0+o+c1))
H.B(a3,"$iam")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.j(0,o)
if(a5==null)H.w(P.v(c0+o+c1))
H.B(a5,"$iam")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.j(0,o)
if(a8==null)H.w(P.v(c0+o+c1))
H.B(a8,"$iam")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}C.a.h(e,new A.cg(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.cq.k(0,g,e)
q=b8.cp
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.w(P.v(c0+o+c1))
q.k(0,g,H.h(j,"$iaP"))}for(t=c3.ch,s=t.length,r=[A.ci],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.j(0,o)
if(j==null)H.w(P.v(c0+o+c1))
H.B(j,"$iad")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.j(0,o)
if(c==null)H.w(P.v(c0+o+c1))
H.B(c,"$iad")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.j(0,o)
if(b==null)H.w(P.v(c0+o+c1))
H.B(b,"$iad")
p=b8.y
o=f+"s["+k+"].color"
a3=p.j(0,o)
if(a3==null)H.w(P.v(c0+o+c1))
H.B(a3,"$iad")
if(typeof g!=="number")return g.ah()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.j(0,o)
if(a5==null)H.w(P.v(c0+o+c1))
H.B(a5,"$iad")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.j(0,o)
if(a8==null)H.w(P.v(c0+o+c1))
H.B(a8,"$iad")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.j(0,o)
if(b2==null)H.w(P.v(c0+o+c1))
H.B(b2,"$iam")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.j(0,o)
if(b3==null)H.w(P.v(c0+o+c1))
H.B(b3,"$iam")
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
if(a5==null)H.w(P.v(c0+d+c1))
H.B(a5,"$id5")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.j(0,d)
if(a5==null)H.w(P.v(c0+d+c1))
H.B(a5,"$iam")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.j(0,d)
if(a8==null)H.w(P.v(c0+d+c1))
H.B(a8,"$iam")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.j(0,d)
if(a5==null)H.w(P.v(c0+d+c1))
H.B(a5,"$iam")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.j(0,d)
if(a8==null)H.w(P.v(c0+d+c1))
H.B(a8,"$iam")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.j(0,d)
if(b2==null)H.w(P.v(c0+d+c1))
H.B(b2,"$iam")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.j(0,d)
if(a5==null)H.w(P.v(c0+d+c1))
H.B(a5,"$ian")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.w(P.v(c0+o+c1))
H.B(a5,"$ian")
a6=a5}else a6=b9
C.a.h(e,new A.ci(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.cs.k(0,g,e)
q=b8.cr
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.w(P.v(c0+o+c1))
q.k(0,g,H.h(j,"$iaP"))}}},
aj:function(a,b){if(b!=null&&b.d)a.eG(b)},
hP:function(a,b){},
sfa:function(a){this.r1=H.l(a,"$ib",[A.aG],"$ab")},
sfk:function(a){this.cn=H.l(a,"$iA",[P.m,A.aP],"$aA")},
sf0:function(a){this.co=H.l(a,"$iA",[P.m,[P.b,A.cf]],"$aA")},
shx:function(a){this.cp=H.l(a,"$iA",[P.m,A.aP],"$aA")},
shy:function(a){this.cq=H.l(a,"$iA",[P.m,[P.b,A.cg]],"$aA")},
shW:function(a){this.cr=H.l(a,"$iA",[P.m,A.aP],"$aA")},
sf1:function(a){this.cs=H.l(a,"$iA",[P.m,[P.b,A.ci]],"$aA")}}
A.aI.prototype={
i:function(a){return"dirLight"+H.i(this.a)}}
A.aL.prototype={
i:function(a){return"pointLight"+H.i(this.a)}}
A.aM.prototype={
i:function(a){return"spotLight"+H.i(this.a)}}
A.hE.prototype={
i:function(a){return this.aD}}
A.cf.prototype={}
A.cg.prototype={}
A.ci.prototype={}
A.cY.prototype={
eS:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
de:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.G(H.lI(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.v("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
hR:function(){var u,t,s,r=this,q=H.d([],[A.dA]),p=r.a,o=H.a4(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dA(p,t.name,s))}r.x=new A.fy(q)},
hT:function(){var u,t,s,r=this,q=H.d([],[A.el]),p=r.a,o=H.a4(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.iz(t.type,t.size,t.name,s))}r.y=new A.j7(q)},
aO:function(a,b,c){var u=this.a
if(a===1)return new A.aP(u,b,c)
else return A.lv(u,this.r,b,a,c)},
fh:function(a,b,c){var u=this.a
if(a===1)return new A.an(u,b,c)
else return A.lv(u,this.r,b,a,c)},
fi:function(a,b,c){var u=this.a
if(a===1)return new A.ch(u,b,c)
else return A.lv(u,this.r,b,a,c)},
bp:function(a,b){return new P.eC(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
iz:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aO(b,c,d)
case 5121:return u.aO(b,c,d)
case 5122:return u.aO(b,c,d)
case 5123:return u.aO(b,c,d)
case 5124:return u.aO(b,c,d)
case 5125:return u.aO(b,c,d)
case 5126:return new A.am(u.a,c,d)
case 35664:return new A.j3(u.a,c,d)
case 35665:return new A.ad(u.a,c,d)
case 35666:return new A.d5(u.a,c,d)
case 35667:return new A.j4(u.a,c,d)
case 35668:return new A.j5(u.a,c,d)
case 35669:return new A.j6(u.a,c,d)
case 35674:return new A.j8(u.a,c,d)
case 35675:return new A.d6(u.a,c,d)
case 35676:return new A.aG(u.a,c,d)
case 35678:return u.fh(b,c,d)
case 35680:return u.fi(b,c,d)
case 35670:throw H.c(u.bp("BOOL",c))
case 35671:throw H.c(u.bp("BOOL_VEC2",c))
case 35672:throw H.c(u.bp("BOOL_VEC3",c))
case 35673:throw H.c(u.bp("BOOL_VEC4",c))
default:throw H.c(P.v("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.el.prototype={}
A.j7.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
X:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.N()},
N:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aP.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.j4.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.j5.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.j6.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.j2.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
si8:function(a){H.l(a,"$ib",[P.m],"$ab")}}
A.am.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.j3.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.ad.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.d5.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.j8.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.d6.prototype={
ao:function(a){var u=new Float32Array(H.cm(H.l(a,"$ib",[P.q],"$ab")))
C.e.ex(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.aG.prototype={
ao:function(a){var u=new Float32Array(H.cm(H.l(a,"$ib",[P.q],"$ab")))
C.e.ey(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.an.prototype={
eG:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.ch.prototype={
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.kv.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cz(s.b,b).cz(s.d.cz(s.c,b),c)
a.sY(0,new V.Z(r.a,r.b,r.c))
a.sbB(r.q(0,Math.sqrt(r.C(r))))
s=1-b
u=1-c
a.sdG(new V.bg(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:5}
F.kH.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:21}
F.kJ.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.F(p)
s=-s*p
u=r*p
a.sY(0,new V.Z(s,u,q))
u=new V.D(s,u,q)
a.sbB(u.q(0,Math.sqrt(u.C(u))))
a.sdG(new V.bg(1-c,2+c,-1,-1))},
$S:5}
F.kK.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:20}
F.kL.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:20}
F.kT.prototype={
$3:function(a,b,c){var u=c*3.141592653589793,t=Math.sin(u),s=b*6.283185307179586,r=new V.D(Math.cos(s)*t,Math.cos(u),Math.sin(s)*t)
s=r.q(0,Math.sqrt(r.C(r)))
a.sY(0,new V.Z(s.a,s.b,s.c))},
$S:5}
F.l7.prototype={
$2:function(a,b){return 0},
$S:21}
F.l8.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.F(s)
u=a.f
t=new V.D(u.a,u.b,u.c)
s=t.q(0,Math.sqrt(t.C(t))).u(0,this.b+s)
a.sY(0,new V.Z(s.a,s.b,s.c))},
$S:5}
F.lb.prototype={
$1:function(a){return new V.Z(Math.cos(a),Math.sin(a),0)},
$S:17}
F.kS.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.Z(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:17}
F.kI.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lV(n.$1(o),m)
m=J.nz(J.lV(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.D(m.a,m.b,m.c)
u=m.q(0,Math.sqrt(m.C(m)))
n=$.mx
if(n==null){n=new V.D(1,0,0)
$.mx=n
t=n}else t=n
n=u.aC(!J.L(u,t)?V.mz():t)
s=n.q(0,Math.sqrt(n.C(n)))
n=s.aC(u)
t=n.q(0,Math.sqrt(n.C(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.u(0,n*m)
m=s.u(0,q*m)
a.sY(0,J.ny(l,new V.Z(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:5}
F.a8.prototype={
b9:function(){var u=this
if(!u.gba()){C.a.E(u.a.a.d.b,u)
u.a.a.V()}u.c6()
u.c7()
u.hD()},
ca:function(a){this.a=a
C.a.h(a.d.b,this)},
cb:function(a){this.b=a
C.a.h(a.d.c,this)},
hQ:function(a){this.c=a
C.a.h(a.d.d,this)},
c6:function(){var u=this.a
if(u!=null){C.a.E(u.d.b,this)
this.a=null}},
c7:function(){var u=this.b
if(u!=null){C.a.E(u.d.c,this)
this.b=null}},
hD:function(){var u=this.c
if(u!=null){C.a.E(u.d.d,this)
this.c=null}},
gba:function(){return this.a==null||this.b==null||this.c==null},
f9:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d8()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.e7())return
return s.q(0,Math.sqrt(s.C(s)))},
fd:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.t(0,q)
r=new V.D(r.a,r.b,r.c)
s=r.q(0,Math.sqrt(r.C(r)))
r=t.t(0,q)
r=new V.D(r.a,r.b,r.c)
r=s.aC(r.q(0,Math.sqrt(r.C(r))))
return r.q(0,Math.sqrt(r.C(r)))},
ci:function(){var u,t=this
if(t.d!=null)return!0
u=t.f9()
if(u==null){u=t.fd()
if(u==null)return!1}t.d=u
t.a.a.V()
return!0},
f8:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d8()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.e7())return
return s.q(0,Math.sqrt(s.C(s)))},
fc:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.O().a){l=d.t(0,g)
l=new V.D(l.a,l.b,l.c)
q=l.q(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.S(0)}else{p=(l-u.b)/r
l=d.t(0,g).u(0,p).p(0,g).t(0,j)
l=new V.D(l.a,l.b,l.c)
q=l.q(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.S(0)}l=n.d
if(l!=null){o=l.q(0,Math.sqrt(l.C(l)))
l=o.aC(q)
l=l.q(0,Math.sqrt(l.C(l))).aC(o)
q=l.q(0,Math.sqrt(l.C(l)))}return q},
cf:function(){var u,t=this
if(t.e!=null)return!0
u=t.f8()
if(u==null){u=t.fc()
if(u==null)return!1}t.e=u
t.a.a.V()
return!0},
aN:function(a,b){var u=b.a
if(u==null)throw H.c(P.v("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.v("May not replace a face's vertex with a vertex attached to a different shape."))},
git:function(a){var u=this
if(J.L(u.a,u.b))return!0
if(J.L(u.b,u.c))return!0
if(J.L(u.c,u.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
H:function(a){var u,t,s=this
if(s.gba())return a+"disposed"
u=a+C.b.af(J.au(s.a.e),0)+", "+C.b.af(J.au(s.b.e),0)+", "+C.b.af(J.au(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
N:function(){return this.H("")}}
F.h4.prototype={}
F.ix.prototype={
aW:function(a,b,c){var u,t=b.a
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
if(t==u.e){t=b.c
t.a.a.A()
t=t.e
u=c.c
u.a.a.A()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.c
u.a.a.A()
if(t==u.e){t=b.c
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.A()
t=t.e
u=c.c
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
if(t==u.e){t=b.c
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bu.prototype={
b9:function(){var u=this
if(!u.gba()){C.a.E(u.a.a.c.b,u)
u.a.a.V()}u.c6()
u.c7()},
ca:function(a){this.a=a
C.a.h(a.c.b,this)},
cb:function(a){this.b=a
C.a.h(a.c.c,this)},
c6:function(){var u=this.a
if(u!=null){C.a.E(u.c.b,this)
this.a=null}},
c7:function(){var u=this.b
if(u!=null){C.a.E(u.c.c,this)
this.b=null}},
gba:function(){return this.a==null||this.b==null},
aN:function(a,b){var u=b.a
if(u==null)throw H.c(P.v("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.v("May not replace a line's vertex with a vertex attached to a different shape."))},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
H:function(a){if(this.gba())return a+"disposed"
return a+C.b.af(J.au(this.a.e),0)+", "+C.b.af(J.au(this.b.e),0)},
N:function(){return this.H("")}}
F.ho.prototype={}
F.j1.prototype={
aW:function(a,b,c){var u,t=b.a
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
return t==u.e}else{t=b.a
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
return t==u.e}else return!1}}}
F.bQ.prototype={
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
H:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.af(J.au(u.e),0)},
N:function(){return this.H("")}}
F.ea.prototype={
gw:function(){var u=this.e
return u==null?this.e=D.W():u},
aX:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.A()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){r=g[s]
h.a.h(0,r.iw())}h.a.A()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bQ()
if(n.a==null)H.w(P.v("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.G(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.A()
p=p.e
if(typeof p!=="number")return p.p()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.o0(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.A()
p=p.e
if(typeof p!=="number")return p.p()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.A()
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
F.c2(l,k,i)}g=h.e
if(g!=null)g.av(0)},
ak:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ak()||!1
if(!t.a.ak())u=!1
s=t.e
if(s!=null)s.av(0)
return u},
iI:function(a,b){var u,t,s,r=this.a.c.length
for(u=0;u<r;++u){t=this.a.c
if(u>=t.length)return H.e(t,u)
s=t[u]
if(b.aW(0,a,s))return s}return},
hG:function(a,b){var u,t,s,r,q,p
H.l(b,"$ib",[F.a9],"$ab")
this.a.h(0,a)
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.u)(b),++t){s=b[t]
for(;r=s.d,r.b.length+r.c.length+r.d.length>0;){r=r.j(0,0)
q=r.a
if(q==null||r.b==null||r.c==null)H.w(P.v("May not replace a face's vertex when the point has been disposed."))
if(J.L(q,s)){r.aN(s,a)
q=r.a
if(q!=null){C.a.E(q.d.b,r)
r.a=null}r.a=a
C.a.h(a.d.b,r)
p=1}else p=0
if(J.L(r.b,s)){r.aN(s,a)
q=r.b
if(q!=null){C.a.E(q.d.c,r)
r.b=null}r.b=a
C.a.h(a.d.c,r);++p}if(J.L(r.c,s)){r.aN(s,a)
q=r.c
if(q!=null){C.a.E(q.d.d,r)
r.c=null}r.c=a
C.a.h(a.d.d,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.G(null)}}for(;r=s.c,r.b.length+r.c.length>0;){r=r.j(0,0)
q=r.a
if(q==null||r.b==null)H.w(P.v("May not replace a line's vertex when the point has been disposed."))
if(J.L(q,s)){r.aN(s,a)
q=r.a
if(q!=null){C.a.E(q.c.b,r)
r.a=null}r.a=a
C.a.h(a.c.b,r)
p=1}else p=0
if(J.L(r.b,s)){r.aN(s,a)
q=r.b
if(q!=null){C.a.E(q.c.c,r)
r.b=null}r.b=a
C.a.h(a.c.c,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.G(null)}}for(;r=s.b.b,r.length>0;){r=r[0]
q=r.a
if(q==null)H.w(P.v("May not replace a point's vertex when the point has been disposed."))
if(J.L(q,s)){if(a.a==null)H.w(P.v("May not replace a point's vertex with a vertex which is not attached to a shape."))
q=r.a
if(q!=null){C.a.E(q.b.b,r)
r.a=null}r.a=a
C.a.h(a.b.b,r)
p=1}else p=0
if(p>0){r=r.a.a.e
if(r!=null)r.G(null)}}this.a.E(0,s)}},
e9:function(a,b){var u,t,s,r,q,p,o=this,n=o.e
if(n!=null)++n.d
n=o.a.c
u=H.d(n.slice(0),[H.r(n,0)])
for(n=[F.a9];u.length!==0;){t=C.a.giK(u)
C.a.em(u,0)
if(t!=null){s=H.d([],n)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.e(u,r)
q=u[r]
if(q!=null&&a.aW(0,t,q)){C.a.h(s,q)
C.a.em(u,r)}}if(s.length>1){p=b.aX(s)
if(p!=null){o.hG(p,s)
C.a.h(u,p)}}}}o.a.A()
o.c.bA()
o.d.bA()
o.b.je()
o.c.cJ(new F.j1())
o.d.cJ(new F.ix())
n=o.e
if(n!=null)n.av(0)},
br:function(){this.e9(new F.d9(),new F.i1())},
ir:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bD()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bC().a)!==0)++s
if((t&$.bB().a)!==0)++s
if((t&$.bE().a)!==0)++s
if((t&$.bX().a)!==0)++s
if((t&$.du().a)!==0)++s
if((t&$.dv().a)!==0)++s
if((t&$.cx().a)!==0)++s
if((t&$.bA().a)!==0)++s
r=a3.gcU(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.q
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dC])
for(n=0,m=0;m<s;++m){l=a3.ik(m)
k=l.gcU(l)
C.a.k(o,m,new Z.dC(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.e(u,j)
i=u[j].iV(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.l(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cm(p)),35044)
u.bindBuffer(a0,null)
e=new Z.dD(new Z.et(a0,f),o,a3)
e.sfu(H.d([],[Z.bN]))
if(a.b.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.A()
C.a.h(d,c.e)}b=Z.lz(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bN(0,d.length,b))}if(a.c.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.A()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.A()
C.a.h(d,c.e)}b=Z.lz(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bN(1,d.length,b))}if(a.d.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.A()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.A()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].c
c.a.a.A()
C.a.h(d,c.e)}b=Z.lz(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bN(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.f])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.H(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.H(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.H(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.H(t))}return C.a.m(s,"\n")},
V:function(){var u=this.e
if(u!=null)u.G(null)},
$iqc:1}
F.iq.prototype={
bq:function(a,b,c,d){var u=this.a
u.a.h(0,b)
u.a.h(0,c)
u.a.h(0,d)
return F.c2(b,c,d)},
ic:function(a){var u,t,s,r,q,p,o
H.l(a,"$ib",[F.a9],"$ab")
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
C.a.h(u,F.c2(s,p,o))}}return u},
ie:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.a9],"$ab")
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
C.a.h(u,F.c2(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c2(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c2(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.c2(k,h,l))}o=!o}q=!q}return u},
gn:function(a){return this.b.length},
cJ:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.aW(0,p,n)){p.b9()
break}}}}},
bA:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.git(s)
if(t)s.b9()}},
ak:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].ci())s=!1
return s},
cg:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].cf())s=!1
return s},
i:function(a){return this.N()},
H:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].H(a))
return C.a.m(r,"\n")},
N:function(){return this.H("")},
sfo:function(a){this.b=H.l(a,"$ib",[F.a8],"$ab")}}
F.ir.prototype={
gn:function(a){return this.b.length},
cJ:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.aW(0,p,n)){p.b9()
break}}}}},
bA:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.L(s.a,s.b)
if(t)s.b9()}},
i:function(a){return this.N()},
H:function(a){var u,t,s=H.d([],[P.f]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
C.a.h(s,t[u].H(a+(""+u+". ")))}return C.a.m(s,"\n")},
N:function(){return this.H("")},
sfv:function(a){this.b=H.l(a,"$ib",[F.bu],"$ab")}}
F.is.prototype={
gn:function(a){return this.b.length},
je:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.E(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.G(null)}s=t.a
if(s!=null){C.a.E(s.b.b,t)
t.a=null}}}},
i:function(a){return this.N()},
H:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].H(a))
return C.a.m(r,"\n")},
N:function(){return this.H("")},
sc3:function(a){this.b=H.l(a,"$ib",[F.bQ],"$ab")}}
F.a9.prototype={
cl:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.cj(u.cx,r,o,t,s,q,p,a,n)},
iw:function(){return this.cl(null)},
sY:function(a,b){var u
if(!J.L(this.f,b)){this.f=b
u=this.a
if(u!=null)u.V()}},
scD:function(a){var u
a=a==null?null:a.q(0,Math.sqrt(a.C(a)))
if(!J.L(this.r,a)){this.r=a
u=this.a
if(u!=null)u.V()}},
sdI:function(a){var u
a=a==null?null:a.q(0,Math.sqrt(a.C(a)))
if(!J.L(this.x,a)){this.x=a
u=this.a
if(u!=null)u.V()}},
sb_:function(a){var u
if(!J.L(this.y,a)){this.y=a
u=this.a
if(u!=null)u.V()}},
sbB:function(a){var u
if(!J.L(this.z,a)){this.z=a
u=this.a
if(u!=null)u.V()}},
sb7:function(a,b){var u
if(!J.L(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.V()}},
seB:function(a,b){var u
if(this.ch!==b){this.ch=b
u=this.a
if(u!=null)u.V()}},
sdG:function(a){var u
if(!J.L(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.V()}},
iV:function(a){var u,t,s=this
if(a.v(0,$.bD())){u=s.f
t=[P.q]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bC())){u=s.r
t=[P.q]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bB())){u=s.x
t=[P.q]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bE())){u=s.y
t=[P.q]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.v(0,$.bX())){u=s.z
t=[P.q]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.du())){u=s.Q
t=[P.q]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.dv())){u=s.Q
if(u==null)return H.d([1,1,1,1],[P.q])
else return u.cM(0)}else if(a.v(0,$.cx()))return H.d([s.ch],[P.q])
else if(a.v(0,$.bA())){u=s.cx
t=[P.q]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.q])},
ci:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d8()
t.d.I(0,new F.jz(s))
s=s.a
t.r=s.q(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.V()
s=t.a.e
if(s!=null)s.av(0)}return!0},
cf:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d8()
t.d.I(0,new F.jy(s))
s=s.a
t.x=s.q(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.V()
s=t.a.e
if(s!=null)s.av(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
H:function(a){var u,t,s=this,r="-",q=H.d([],[P.f])
C.a.h(q,C.b.af(J.au(s.e),0))
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
N:function(){return this.H("")}}
F.jz.prototype={
$1:function(a){var u,t
H.h(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:7}
F.jy.prototype={
$1:function(a){var u,t
H.h(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:7}
F.jp.prototype={
A:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.v("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.V()
return!0},
ig:function(a,b,c,d,e,f){var u=F.cj(a,null,b,c,d,e,f,null,0)
this.h(0,u)
return u},
gn:function(a){return this.c.length},
E:function(a,b){var u,t
if(b==null)return!1
u=this.a
if(b.a!==u)return!1
if(b.b.b.length===0){t=b.c
if(t.b.length===0&&t.c.length===0){t=b.d
t=t.b.length===0&&t.c.length===0&&t.d.length===0}else t=!1}else t=!1
if(!t)throw H.c(P.v("May not remove a vertex without first making it empty."))
b.a=null
C.a.E(this.c,b)
u.V()
return this.b=!0},
ak:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].ci()
return!0},
cg:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].cf()
return!0},
is:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.q(0,Math.sqrt(p*p+o*o+n*n))
if(!J.L(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.G(null)}}}}return!0},
i:function(a){return this.N()},
H:function(a){var u,t,s,r
this.A()
u=H.d([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].H(a))
return C.a.m(u,"\n")},
N:function(){return this.H("")},
si9:function(a){this.c=H.l(a,"$ib",[F.a9],"$ab")}}
F.jq.prototype={
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
H.n(b,{func:1,ret:-1,args:[F.a8]})
C.a.I(u.b,b)
C.a.I(u.c,new F.jr(u,b))
C.a.I(u.d,new F.js(u,b))},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].H(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].H(""))
return C.a.m(r,"\n")},
sfp:function(a){this.b=H.l(a,"$ib",[F.a8],"$ab")},
sfq:function(a){this.c=H.l(a,"$ib",[F.a8],"$ab")},
sfs:function(a){this.d=H.l(a,"$ib",[F.a8],"$ab")}}
F.jr.prototype={
$1:function(a){H.h(a,"$ia8")
if(!J.L(a.a,this.a))this.b.$1(a)},
$S:7}
F.js.prototype={
$1:function(a){var u
H.h(a,"$ia8")
u=this.a
if(!J.L(a.a,u)&&!J.L(a.b,u))this.b.$1(a)},
$S:7}
F.ju.prototype={
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.e(t,u)
return t[u]}else{if(b<0)return H.e(t,b)
return t[b]}},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].H(""))
return C.a.m(r,"\n")},
sfw:function(a){this.b=H.l(a,"$ib",[F.bu],"$ab")},
sfz:function(a){this.c=H.l(a,"$ib",[F.bu],"$ab")}}
F.jv.prototype={}
F.d9.prototype={
aW:function(a,b,c){return J.L(b.f,c.f)}}
F.jw.prototype={}
F.jt.prototype={
aX:function(a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null
H.l(a5,"$ib",[F.a9],"$ab")
for(u=a5.length,t=a4,s=t,r=s,q=r,p=q,o=p,n=0,m=0,l=0,k=0,j=0,i=0,h=0;h<u;++h){g=a5[h]
f=g.f
if(f!=null){o=o==null?f:new V.Z(o.a+f.a,o.b+f.b,o.c+f.c);++n}e=g.r
if(e!=null)p=p==null?e:new V.D(p.a+e.a,p.b+e.b,p.c+e.c)
d=g.x
if(d!=null)q=q==null?d:new V.D(q.a+d.a,q.b+d.b,q.c+d.c)
c=g.y
if(c!=null){s=s==null?c:new V.a5(s.a+c.a,s.b+c.b);++l}b=g.z
if(b!=null){t=t==null?b:new V.D(t.a+b.a,t.b+b.b,t.c+b.c);++k}a=g.Q
if(a!=null){a0=a.a
a1=a.b
a2=a.c
a=a.d
if(r==null){a=[a0,a1,a2,a]
r=new V.b4(a[0],a[1],a[2],a[3])}else{a=[a0,a1,a2,a]
a0=a[0]
a1=a[1]
a2=a[2]
a=a[3]
r=new V.b4(r.a+a0,r.b+a1,r.c+a2,r.d+a)}++m}a=g.ch
if(typeof a!=="number")return H.F(a)
i+=a;++j}a3=F.cj(a4,a4,a4,a4,a4,a4,a4,a4,0)
if(n<=0||o==null)a3.sY(0,a4)
else a3.sY(0,o.q(0,n))
if(p==null)a3.scD(a4)
else a3.scD(p.q(0,Math.sqrt(p.C(p))))
if(q==null)a3.sdI(a4)
else a3.sdI(q.q(0,Math.sqrt(q.C(q))))
if(l<=0||s==null)a3.sb_(a4)
else a3.sb_(s.q(0,l))
if(k<=0||t==null)a3.sbB(a4)
else a3.sbB(t.q(0,k))
if(m<=0||r==null)a3.sb7(0,a4)
else{u=r.q(0,m)
u=[u.a,u.b,u.c,u.d]
a=u[0]
a0=u[1]
a1=u[2]
u=u[3]
if(a<0)a=0
else if(a>1)a=1
if(a0<0)a0=0
else if(a0>1)a0=1
if(a1<0)a1=0
else if(a1>1)a1=1
if(u<0)u=0
else if(u>1)u=1
a3.sb7(0,new V.av(a,a0,a1,u))}if(j<=0)a3.seB(0,0)
else a3.seB(0,i/j)
return a3}}
F.i1.prototype={
aX:function(a){var u,t,s,r
H.l(a,"$ib",[F.a9],"$ab")
u=V.d8()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.D(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.q(0,Math.sqrt(u.C(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.u)(a),++s)a[s].scD(u)
return}}
F.jx.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].H(""))
return C.a.m(r,"\n")},
sc3:function(a){this.b=H.l(a,"$ib",[F.bQ],"$ab")}}
O.dX.prototype={
gw:function(){var u=this.fr
return u==null?this.fr=D.W():u},
a_:function(a){var u
H.h(a,"$iC")
u=this.fr
if(u!=null)u.G(a)},
bL:function(){return this.a_(null)},
du:function(a){H.h(a,"$iC")
this.a=null
this.a_(a)},
hJ:function(){return this.du(null)},
fN:function(a,b){var u=V.ap
H.l(b,"$ij",[u],"$aj")
u=new D.c5([u])
u.b=!0
this.a_(u)},
fP:function(a,b){var u=V.ap
H.l(b,"$ij",[u],"$aj")
u=new D.c6([u])
u.b=!0
this.a_(u)},
da:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.m,h=new H.a3([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=h.j(0,0)
h.k(0,0,r==null?1:r)}q=H.d([],[A.aI])
h.I(0,new O.hI(j,q))
C.a.bI(q,new O.hJ())
p=new H.a3([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){o=u[s]
r=o.gb8()
n=p.j(0,o.gb8())
p.k(0,r,n==null?1:n)}m=H.d([],[A.aL])
p.I(0,new O.hK(j,m))
C.a.bI(m,new O.hL())
l=new H.a3([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.u)(i),++s){o=i[s]
t=o.gb8()
r=l.j(0,o.gb8())
l.k(0,t,r==null?1:r)}k=H.d([],[A.aM])
l.I(0,new O.hM(j,k))
C.a.bI(k,new O.hN())
i=C.d.a5(j.e.a.length+3,4)
j.dy.e
return A.o7(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
ac:function(a,b){H.l(a,"$ib",[T.d2],"$ab")
if(b!=null)if(!C.a.T(a,b)){b.a=a.length
C.a.h(a,b)}},
aw:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.aB(u,u.length,[H.r(u,0)]);u.D();){t=u.d
t.toString
s=$.jo
if(s==null)s=$.jo=new V.D(0,0,1)
t.a=s
r=$.jn
t.d=r==null?$.jn=new V.D(0,1,0):r
r=$.jm
t.e=r==null?$.jm=new V.D(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bD(s)
r=s.a
p=s.b
o=s.c
t.a=s.q(0,Math.sqrt(r*r+p*p+o*o))
o=q.bD(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.q(0,Math.sqrt(p*p+r*r+s*s))
s=q.bD(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.q(0,Math.sqrt(r*r+p*p+o*o))}}}},
jg:function(b6,b7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.da()
u=b6.fr.j(0,b5.aD)
if(u==null){u=A.o6(b5,b6.a)
t=u.b
if(t.length===0)H.w(P.v("May not cache a shader with no name."))
if(b6.fr.bs(0,t))H.w(P.v('Shader cache already contains a shader by the name "'+t+'".'))
b6.fr.k(0,t,u)}b5=b4.a=u
b7.e=null}s=b5.z
r=s.dP
b5=b7.e
if(!(b5 instanceof Z.dD))b5=b7.e=null
if(b5==null||!b5.d.v(0,r)){b5=s.k3
if(b5)b7.d.ak()
q=s.k4
if(q){p=b7.d
o=p.e
if(o!=null)++o.d
p.d.cg()
p.a.cg()
p=p.e
if(p!=null)p.av(0)}p=s.r2
if(p){o=b7.d
n=o.e
if(n!=null)++n.d
o.a.is()
o=o.e
if(o!=null)o.av(0)}m=b7.d.ir(new Z.jB(b6.a),r)
m.aV($.bD()).e=b4.a.Q.c
if(b5)m.aV($.bC()).e=b4.a.cx.c
if(q)m.aV($.bB()).e=b4.a.ch.c
if(s.r1)m.aV($.bE()).e=b4.a.cy.c
if(p)m.aV($.bX()).e=b4.a.db.c
if(s.rx)m.aV($.bA()).e=b4.a.dx.c
b7.e=m}b5=T.d2
l=H.d([],[b5])
q=b4.a
p=b6.a
p.useProgram(q.r)
q.x.iE()
if(s.dy){q=b4.a
o=b6.dx
o=o.ga0(o)
q=q.dy
q.toString
q.ao(o.ag(0,!0))}if(s.fr){q=b4.a
o=b6.cx
if(o==null){o=b6.db
o=o.ga0(o)
n=b6.dx
n=b6.cx=o.u(0,n.ga0(n))
o=n}q=q.fr
q.toString
q.ao(o.ag(0,!0))}q=b4.a
o=b6.ch
if(o==null){o=b6.gjc()
n=b6.dx
n=b6.ch=o.u(0,n.ga0(n))
o=n}q=q.fy
q.toString
q.ao(o.ag(0,!0))
if(s.ry){q=b4.a
o=b4.b
q=q.k1
q.toString
q.ao(C.j.ag(o,!0))}if(s.x1){q=b4.a
o=b4.c
q=q.k2
q.toString
q.ao(C.j.ag(o,!0))}if(s.x2){q=b4.a
o=b4.d
q=q.k3
q.toString
q.ao(C.j.ag(o,!0))}if(s.y2>0){k=b4.e.a.length
q=b4.a.k4
C.e.bE(q.a,q.d,k)
for(q=[P.q],j=0;j<k;++j){o=b4.a
n=b4.e.a
if(j>=n.length)return H.e(n,j)
n=n[j]
o.toString
H.h(n,"$iap")
o=o.r1
if(j>=o.length)return H.e(o,j)
o=o[j]
i=new Float32Array(H.cm(H.l(n.ag(0,!0),"$ib",q,"$ab")))
C.e.ey(o.a,o.d,!1,i)}}if(s.a.b){b4.ac(l,b4.f.d)
q=b4.a
o=b4.f.d
q.aj(q.rx,o)}if(s.id){if(s.b.b){b4.ac(l,b4.r.d)
q=b4.a
o=b4.r.d
q.aj(q.x2,o)}if(s.c.b){b4.ac(l,b4.x.d)
q=b4.a
o=b4.x.d
q.aj(q.aD,o)}if(s.d.b){b4.ac(l,b4.y.d)
q=b4.a
o=b4.y.d
q.aj(q.dQ,o)}q=s.e
o=q.b||!1
if(o){o=b4.a
n=b4.z.ch
o=o.dS
C.e.a6(o.a,o.d,n)}if(q.b){b4.ac(l,b4.z.d)
q=b4.a
o=b4.z.d
q.aj(q.dR,o)}q=s.z
if(q.length>0){o=b6.db
h=o.ga0(o)
o=P.m
g=new H.a3([o,o])
for(o=b4.dx.e,n=o.length,f=0;f<o.length;o.length===n||(0,H.u)(o),++f){e=o[f]
d=g.j(0,0)
if(d==null)d=0
g.k(0,0,d+1)
c=J.dw(b4.a.co.j(0,0),d)
b=h.bD(e.a)
a=b.a
a0=b.b
a1=b.c
a1=b.q(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=c.e
a=a1.a
b=a1.b
a1=a1.c
C.e.aa(a0.a,a0.d,a,b,a1)
a1=e.c
b=c.f
C.e.aa(b.a,b.d,a1.a,a1.b,a1.c)}for(o=q.length,f=0;f<q.length;q.length===o||(0,H.u)(q),++f){n=q[f].a
k=g.j(0,n)
if(k==null)k=0
n=b4.a.cn.j(0,n)
C.e.bE(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=b6.db
h=o.ga0(o)
o=P.m
a2=new H.a3([o,o])
for(o=b4.dx.f,n=o.length,b=[b5],a=[P.q],f=0;f<o.length;o.length===n||(0,H.u)(o),++f){e=o[f]
a3=e.gb8()
d=a2.j(0,a3)
if(d==null)d=0
a2.k(0,a3,d+1)
c=J.dw(b4.a.cq.j(0,a3),d)
a4=h.u(0,e.ga0(e))
a0=e.ga0(e)
a1=$.cV
a0=a0.cN(a1==null?$.cV=new V.Z(0,0,0):a1)
a1=c.b
C.e.aa(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=$.cV
a0=a4.cN(a0==null?$.cV=new V.Z(0,0,0):a0)
a1=c.c
C.e.aa(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=e.gb7(e)
a1=c.e
C.e.aa(a1.a,a1.d,a0.a,a0.b,a0.c)
e.gaI()
a0=a4.e6(0)
a1=a0.a
a5=a0.b
a6=a0.c
a7=a0.e
a8=a0.f
a9=a0.r
b0=a0.y
b1=a0.z
a0=a0.Q
b2=c.d
b2.toString
i=new Float32Array(H.cm(H.l(new V.dY(a1,a5,a6,a7,a8,a9,b0,b1,a0).ag(0,!0),"$ib",a,"$ab")))
C.e.ex(b2.a,b2.d,!1,i)
e.gaI()
a0=e.gaI()
H.l(l,"$ib",b,"$ab")
if(!C.a.T(l,a0)){a0.a=l.length
C.a.h(l,a0)}a0=e.gaI()
a1=a0.gbc(a0)
if(a1){a1=c.f
a1.toString
a5=a0.gbc(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.giP(a0)
a1.a.uniform1i(a1.d,a0)}}e.gb1()
a0=e.geH()
a1=c.x
a1.toString
a5=a0.gbu(a0)
a6=a0.gbv(a0)
a7=a0.gdO()
a0=a0.gdN()
C.e.ew(a1.a,a1.d,a5,a6,a7,a0)
a0=e.gb1()
if(!C.a.T(l,a0)){a0.a=l.length
C.a.h(l,a0)}a0=e.gb1()
a1=a0.gbc(a0)
if(a1){a1=c.r
a1.toString
a5=a0.gbc(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.giP(a0)
a1.a.uniform1i(a1.d,a0)}}if(e.giF()){a0=e.gil()
a1=c.y
C.e.a6(a1.a,a1.d,a0)
a0=e.gim()
a1=c.z
C.e.a6(a1.a,a1.d,a0)
a0=e.gio()
a1=c.Q
C.e.a6(a1.a,a1.d,a0)}}for(o=q.length,f=0;f<q.length;q.length===o||(0,H.u)(q),++f){n=q[f].a
k=a2.j(0,n)
if(k==null)k=0
n=b4.a.cp.j(0,n)
C.e.bE(n.a,n.d,k)}}q=s.ch
if(q.length>0){o=b6.db
h=o.ga0(o)
o=P.m
b3=new H.a3([o,o])
for(o=b4.dx.r,n=o.length,b5=[b5],f=0;f<o.length;o.length===n||(0,H.u)(o),++f){e=o[f]
a3=e.gb8()
d=b3.j(0,a3)
if(d==null)d=0
b3.k(0,a3,d+1)
c=J.dw(b4.a.cs.j(0,a3),d)
b=e.gjb(e)
a=c.b
C.e.aa(a.a,a.d,b.a,b.b,b.c)
b=e.gjA(e).jR()
a=c.c
C.e.aa(a.a,a.d,b.a,b.b,b.c)
b=h.cN(e.gjb(e))
a=c.d
C.e.aa(a.a,a.d,b.a,b.b,b.c)
b=e.gb7(e)
a=c.e
C.e.aa(a.a,a.d,b.a,b.b,b.c)
e.gaI()
b=e.gcO()
a=c.f
C.e.aa(a.a,a.d,b.a,b.b,b.c)
b=e.gcK(e)
a=c.r
C.e.aa(a.a,a.d,b.a,b.b,b.c)
b=e.gjS()
a=c.x
C.e.a6(a.a,a.d,b)
b=e.gjT()
a=c.y
C.e.a6(a.a,a.d,b)
e.gaI()
b=e.gaI()
H.l(l,"$ib",b5,"$ab")
if(!C.a.T(l,b)){b.a=l.length
C.a.h(l,b)}b=e.gaI()
a=b.gbc(b)
if(a){a=c.dx
a.toString
a0=b.d
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}e.gb1()
b=e.geH()
a=c.z
a.toString
a0=b.gbu(b)
a1=b.gbv(b)
a5=b.gdO()
b=b.gdN()
C.e.ew(a.a,a.d,a0,a1,a5,b)
b=e.gb1()
if(!C.a.T(l,b)){b.a=l.length
C.a.h(l,b)}b=e.gb1()
a=b.gbc(b)
if(a){a=c.dy
a.toString
a0=b.d
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}if(e.gjB()){b=e.gjz()
a=c.Q
C.e.a6(a.a,a.d,b)
b=e.gjy()
a=c.ch
C.e.a6(a.a,a.d,b)}if(e.giF()){b=e.gil()
a=c.cx
C.e.a6(a.a,a.d,b)
b=e.gim()
a=c.cy
C.e.a6(a.a,a.d,b)
b=e.gio()
a=c.db
C.e.a6(a.a,a.d,b)}}for(b5=q.length,f=0;f<q.length;q.length===b5||(0,H.u)(q),++f){o=q[f].a
k=b3.j(0,o)
if(k==null)k=0
o=b4.a.cr.j(0,o)
C.e.bE(o.a,o.d,k)}}}if(s.f.b){b4.ac(l,b4.Q.d)
b5=b4.a
q=b4.Q.d
b5.aj(b5.dT,q)}if(s.dx){b5=b4.a
q=b6.Q
if(q==null){q=b6.db
q=b6.Q=q.ga0(q).e6(0)}b5=b5.id
b5.toString
b5.ao(q.ag(0,!0))}if(s.cy){b4.ac(l,b4.ch)
b5=b4.a
q=b4.ch
b5.hP(b5.dU,q)
if(s.r.b){b4.ac(l,b4.cx.d)
b5=b4.a
q=b4.cx.d
b5.aj(b5.dV,q)}b5=s.x
q=b5.b||!1
if(q){q=b4.a
o=b4.cy.ch
q=q.dW
C.e.a6(q.a,q.d,o)}if(b5.b){b4.ac(l,b4.cy.d)
b5=b4.a
q=b4.cy.d
b5.aj(b5.dX,q)}}b5=s.y
q=b5.b||!1
if(q){if(b5.b){b4.ac(l,b4.db.d)
q=b4.a
o=b4.db.d
q.aj(q.dY,o)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j){q=l[j]
if(!q.c&&q.d){q.c=!0
p.activeTexture(33984+q.a)
p.bindTexture(3553,q.b)}}q=b7.e
q.cc(b6)
q.aY(b6)
q.jr(b6)
b5=b5.b||!1
if(b5)p.disable(3042)
for(j=0;j<l.length;++j){b5=l[j]
if(b5.c){b5.c=!1
p.activeTexture(33984+b5.a)
p.bindTexture(3553,null)}}b5=b4.a
b5.toString
p.useProgram(null)
b5.x.iC()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.da().aD},
sfb:function(a){this.e=H.l(a,"$ia6",[V.ap],"$aa6")}}
O.hI.prototype={
$2:function(a,b){H.a4(a)
H.a4(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aI(a,C.d.a5(b+3,4)*4))},
$S:11}
O.hJ.prototype={
$2:function(a,b){H.h(a,"$iaI")
H.h(b,"$iaI")
return J.le(a.a,b.a)},
$S:50}
O.hK.prototype={
$2:function(a,b){H.a4(a)
H.a4(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aL(a,C.d.a5(b+3,4)*4))},
$S:11}
O.hL.prototype={
$2:function(a,b){H.h(a,"$iaL")
H.h(b,"$iaL")
return J.le(a.a,b.a)},
$S:51}
O.hM.prototype={
$2:function(a,b){H.a4(a)
H.a4(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aM(a,C.d.a5(b+3,4)*4))},
$S:11}
O.hN.prototype={
$2:function(a,b){H.h(a,"$iaM")
H.h(b,"$iaM")
return J.le(a.a,b.a)},
$S:52}
O.hC.prototype={
aA:function(){var u,t=this
t.cW()
u=t.f
if(!(Math.abs(u-1)<$.O().a)){t.f=1
u=new D.Q(t.b,u,1,[P.q])
u.b=!0
t.a.a_(u)}}}
O.cM.prototype={
a_:function(a){return this.a.a_(H.h(a,"$iC"))},
bL:function(){return this.a_(null)},
aA:function(){},
hO:function(a){var u,t,s=this
if(!s.c.v(0,a)){u=s.c
u=u.b||!1
if(u){u=a.b||!1
t=!u}else t=!0
s.c=a
if(t)s.aA()
u=s.a
u.a=null
u.a_(null)}},
sb_:function(a){var u,t,s=this
if(!s.c.b)s.hO(new A.aw(!1,!0,!1))
u=s.d
if(u!==a){if(u!=null)u.gw().E(0,s.gbl())
t=s.d
s.d=a
a.gw().h(0,s.gbl())
u=new D.Q(s.b+".texture2D",t,s.d,[T.eh])
u.b=!0
s.a.a_(u)}}}
O.hD.prototype={}
O.bd.prototype={
aA:function(){var u,t,s=this
s.cW()
u=new V.ac(1,1,1)
if(!s.f.v(0,u)){t=s.f
s.f=u
u=new D.Q(s.b+".color",t,u,[V.ac])
u.b=!0
s.a.a_(u)}}}
O.hF.prototype={}
O.hG.prototype={
aA:function(){var u,t=this
t.cX()
u=t.ch
if(!(Math.abs(u-1)<$.O().a)){t.ch=1
u=new D.Q(t.b+".refraction",u,1,[P.q])
u.b=!0
t.a.a_(u)}}}
O.hH.prototype={
aA:function(){var u,t=this
t.cX()
u=t.ch
if(!(Math.abs(u-100)<$.O().a)){t.ch=100
u=new D.Q(t.b+".shininess",u,100,[P.q])
u.b=!0
t.a.a_(u)}}}
O.ce.prototype={}
T.d2.prototype={}
T.eh.prototype={}
T.iO.prototype={
gw:function(){var u=this.y
return u==null?this.y=D.W():u}}
T.iP.prototype={
e8:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.iO()
t.a=0
t.b=q
t.d=t.c=!1
r=W.o
W.aa(u,"load",H.n(new T.iQ(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
hK:function(a,b,c){var u,t,s,r
b=V.lQ(b)
u=V.lQ(a.width)
t=V.lQ(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.lh()
s.width=u
s.height=t
r=H.h(C.i.eD(s,"2d"),"$icB")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.pB(r.getImageData(0,0,s.width,s.height))}}}
T.iQ.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.hK(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.e.jm(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.iD()}++s.e},
$S:14}
V.bo.prototype={
aF:function(a,b){return!0},
i:function(a){return"all"},
$iaD:1}
V.aD.prototype={}
V.dW.prototype={
aF:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)if(u[s].aF(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa3:function(a){this.a=H.l(a,"$ib",[V.aD],"$ab")},
$iaD:1}
V.ay.prototype={
aF:function(a,b){return!this.eM(0,b)},
i:function(a){return"!["+this.cV(0)+"]"}}
V.id.prototype={
aF:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.ca(this.a),t=H.ca(this.b)
return u+".."+t},
$iaD:1}
V.io.prototype={
eR:function(a){var u,t
if(a.a.length<=0)throw H.c(P.v("May not create a SetMatcher with zero characters."))
u=new H.a3([P.m,P.S])
for(t=new H.cL(a,a.gn(a),[H.at(a,"z",0)]);t.D();)u.k(0,t.d,!0)
this.shN(u)},
aF:function(a,b){return this.a.bs(0,b)},
i:function(a){var u=this.a
return P.d0(u.ga2(u),0,null)},
shN:function(a){this.a=H.l(a,"$iA",[P.m,P.S],"$aA")},
$iaD:1}
V.cZ.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d4(this.a.l(0,b))
r.sa3(H.d([],[V.aD]))
r.c=!1
C.a.h(this.c,r)
return r},
iJ:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.aF(0,a))return r}return},
i:function(a){return this.b},
si7:function(a){this.c=H.l(a,"$ib",[V.d4],"$ab")}}
V.ej.prototype={
i:function(a){var u=H.lS(this.b,"\n","\\n"),t=H.lS(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d3.prototype={
aH:function(a,b,c){var u,t,s
H.l(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.u)(c),++t){s=c[t]
this.c.k(0,s,b)}},
i:function(a){return this.b},
shE:function(a){var u=P.f
this.c=H.l(a,"$iA",[u,u],"$aA")}}
V.iT.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cZ(this,b)
u.si7(H.d([],[V.d4]))
u.d=null
this.a.k(0,b,u)}return u},
O:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.d3(a)
u=P.f
t.shE(new H.a3([u,u]))
this.b.k(0,a,t)}return t},
ev:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.ej]),k=this.c,j=[P.m],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.F(a,s)
q=k.iJ(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.d0(i,0,m)
throw H.c(P.v("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.d0(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.ej(n==null?o.b:n,p,s)}++s}}},
shY:function(a){this.a=H.l(a,"$iA",[P.f,V.cZ],"$aA")},
si0:function(a){this.b=H.l(a,"$iA",[P.f,V.d3],"$aA")}}
V.d4.prototype={
i:function(a){return this.b.b+": "+this.cV(0)}}
X.dF.prototype={$icQ:1}
X.hb.prototype={
gw:function(){var u=this.x
return u==null?this.x=D.W():u}}
X.e4.prototype={
gw:function(){var u=this.f
return u==null?this.f=D.W():u},
aM:function(a){var u
H.h(a,"$iC")
u=this.f
if(u!=null)u.G(a)},
f5:function(){return this.aM(null)},
sbd:function(a){var u,t,s=this
if(!J.L(s.b,a)){u=s.b
if(u!=null)u.gw().E(0,s.gd0())
t=s.b
s.b=a
if(a!=null)a.gw().h(0,s.gd0())
u=new D.Q("mover",t,s.b,[U.ah])
u.b=!0
s.aM(u)}},
$icQ:1,
$idF:1}
X.ef.prototype={}
V.bI.prototype={
bk:function(a){this.b=new P.hf(C.Q)
this.c=null
this.sbT(H.d([],[[P.b,W.aJ]]))},
M:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aJ]))
u=a.split("\n")
for(l=u.length,t=[W.aJ],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.K(q)
o=m.b.fg(q,0,q.length)
n=o==null?q:o
C.O.eF(p,H.lS(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gau(m.d),p)}},
eh:function(a,b){var u,t,s,r,q=this
H.l(b,"$ib",[P.f],"$ab")
q.sbT(H.d([],[[P.b,W.aJ]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bt():t).ev(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)q.bz(t[r])},
sbT:function(a){this.d=H.l(a,"$ib",[[P.b,W.aJ]],"$ab")}}
V.l6.prototype={
$1:function(a){var u
H.h(a,"$ibi")
u=C.c.eu(this.a.giN(),2)
if(u!=="0.00")P.lR(u+" fps")},
$S:54}
V.fS.prototype={
bz:function(a){var u=this
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
bt:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iU()
a1.c=a1.l(0,r)
u=a1.l(0,r).m(0,q)
t=V.x(new H.t("_"))
C.a.h(u.a,t)
t=V.a0("a","z")
C.a.h(u.a,t)
t=V.a0("A","Z")
C.a.h(u.a,t)
t=a1.l(0,q).m(0,q)
u=V.x(new H.t("_"))
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
t=V.x(new H.t("."))
C.a.h(u.a,t)
t=a1.l(0,o).m(0,n)
u=V.a0("0","9")
C.a.h(t.a,u)
u=a1.l(0,n).m(0,n)
t=V.a0("0","9")
C.a.h(u.a,t)
t=a1.l(0,r).m(0,m)
u=V.x(new H.t(l))
C.a.h(t.a,u)
u=a1.l(0,m).m(0,m)
t=V.x(new H.t(l))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,k)
u=V.x(new H.t('"'))
C.a.h(t.a,u)
u=a1.l(0,k).m(0,j)
t=V.x(new H.t('"'))
C.a.h(u.a,t)
t=a1.l(0,k).m(0,i)
u=V.x(new H.t("\\"))
C.a.h(t.a,u)
u=a1.l(0,i).m(0,k)
t=V.x(new H.t('"'))
C.a.h(u.a,t)
C.a.h(a1.l(0,k).m(0,k).a,new V.bo())
t=a1.l(0,r).m(0,h)
u=V.x(new H.t("'"))
C.a.h(t.a,u)
u=a1.l(0,h).m(0,g)
t=V.x(new H.t("'"))
C.a.h(u.a,t)
t=a1.l(0,h).m(0,f)
u=V.x(new H.t("\\"))
C.a.h(t.a,u)
u=a1.l(0,f).m(0,h)
t=V.x(new H.t("'"))
C.a.h(u.a,t)
C.a.h(a1.l(0,h).m(0,h).a,new V.bo())
t=a1.l(0,r).m(0,e)
u=V.x(new H.t("/"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,d)
t=V.x(new H.t("/"))
C.a.h(u.a,t)
t=a1.l(0,d).m(0,c)
u=V.x(new H.t("\n"))
C.a.h(t.a,u)
u=a1.l(0,d).m(0,d)
t=new V.ay()
s=[V.aD]
t.sa3(H.d([],s))
C.a.h(u.a,t)
u=V.x(new H.t("\n"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,b)
t=V.x(new H.t("*"))
C.a.h(u.a,t)
t=a1.l(0,b).m(0,a)
u=V.x(new H.t("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,b)
t=new V.ay()
t.sa3(H.d([],s))
C.a.h(u.a,t)
u=V.x(new H.t("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,c)
t=V.x(new H.t("/"))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,a0)
u=V.x(new H.t(" \n\t"))
C.a.h(t.a,u)
u=a1.l(0,a0).m(0,a0)
t=V.x(new H.t(" \n\t"))
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
t.aH(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aH(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aH(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.hc.prototype={
bz:function(a){var u=this
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
bt:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iU()
e.c=e.l(0,r)
u=e.l(0,r).m(0,q)
t=V.x(new H.t("_"))
C.a.h(u.a,t)
t=V.a0("a","z")
C.a.h(u.a,t)
t=V.a0("A","Z")
C.a.h(u.a,t)
t=e.l(0,q).m(0,q)
u=V.x(new H.t("_"))
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
t=V.x(new H.t("."))
C.a.h(u.a,t)
t=e.l(0,o).m(0,n)
u=V.a0("0","9")
C.a.h(t.a,u)
u=e.l(0,n).m(0,n)
t=V.a0("0","9")
C.a.h(u.a,t)
t=e.l(0,r).m(0,m)
u=V.x(new H.t(l))
C.a.h(t.a,u)
u=e.l(0,m).m(0,m)
t=V.x(new H.t(l))
C.a.h(u.a,t)
t=e.l(0,r).m(0,k)
u=V.x(new H.t("/"))
C.a.h(t.a,u)
u=e.l(0,k).m(0,j)
t=V.x(new H.t("/"))
C.a.h(u.a,t)
C.a.h(e.l(0,k).m(0,m).a,new V.bo())
t=e.l(0,j).m(0,i)
u=V.x(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,j).m(0,j)
t=new V.ay()
s=[V.aD]
t.sa3(H.d([],s))
C.a.h(u.a,t)
u=V.x(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,h)
t=V.x(new H.t("#"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,h)
u=new V.ay()
u.sa3(H.d([],s))
C.a.h(t.a,u)
t=V.x(new H.t("\n"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,g)
u=V.x(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,f)
t=V.x(new H.t(" \n\t"))
C.a.h(u.a,t)
t=e.l(0,f).m(0,f)
u=V.x(new H.t(" \n\t"))
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
u.aH(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aH(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aH(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.hd.prototype={
bz:function(a){var u=this,t="#111"
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
bt:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iU()
l.c=l.l(0,s)
u=l.l(0,s).m(0,r)
t=V.x(new H.t("_"))
C.a.h(u.a,t)
t=V.a0("a","z")
C.a.h(u.a,t)
t=V.a0("A","Z")
C.a.h(u.a,t)
t=l.l(0,r).m(0,r)
u=V.x(new H.t("_"))
C.a.h(t.a,u)
u=V.a0("0","9")
C.a.h(t.a,u)
u=V.a0("a","z")
C.a.h(t.a,u)
u=V.a0("A","Z")
C.a.h(t.a,u)
u=l.l(0,r).m(0,q)
t=V.x(new H.t("="))
C.a.h(u.a,t)
u.c=!0
u=l.l(0,s).m(0,p)
t=V.x(new H.t("</\\-!>="))
C.a.h(u.a,t)
t=l.l(0,p).m(0,p)
u=V.x(new H.t("</\\-!>="))
C.a.h(t.a,u)
u=l.l(0,s).m(0,o)
t=V.x(new H.t('"'))
C.a.h(u.a,t)
t=l.l(0,o).m(0,n)
u=V.x(new H.t('"'))
C.a.h(t.a,u)
u=l.l(0,o).m(0,"EscStr")
t=V.x(new H.t("\\"))
C.a.h(u.a,t)
t=l.l(0,"EscStr").m(0,o)
u=V.x(new H.t('"'))
C.a.h(t.a,u)
C.a.h(l.l(0,o).m(0,o).a,new V.bo())
C.a.h(l.l(0,s).m(0,m).a,new V.bo())
u=l.l(0,m).m(0,m)
t=new V.ay()
t.sa3(H.d([],[V.aD]))
C.a.h(u.a,t)
u=V.x(new H.t('</\\-!>=_"'))
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
t.aH(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
t=l.l(0,q)
t.d=t.a.O(q)
t=l.l(0,m)
t.d=t.a.O(m)
return l}}
V.i7.prototype={
eh:function(a,b){H.l(b,"$ib",[P.f],"$ab")
this.sbT(H.d([],[[P.b,W.aJ]]))
this.M(C.a.m(b,"\n"),"#111")},
bz:function(a){},
bt:function(){return}}
V.ib.prototype={
bq:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.ms().gcH().j(0,H.i(u))
if(t==null)if(d){c.$0()
m.dB(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lX(m.c).h(0,q)
o=W.nV("radio")
o.checked=s
o.name=u
u=W.o
W.aa(o,"change",H.n(new V.ic(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lX(m.c).h(0,r.createElement("br"))},
ar:function(a,b,c){return this.bq(a,b,c,!1)},
dB:function(a){var u,t,s=P.ms(),r=P.f,q=P.o2(s.gcH(),r,r)
q.k(0,this.a,a)
u=s.en(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.ke([],[]).cP(""),"",t)}}
V.ic.prototype={
$1:function(a){var u=this
if(H.G(u.b.checked)){u.c.$0()
u.a.dB(u.d)}},
$S:14}
V.it.prototype={
eT:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.aa(q,"scroll",H.n(new V.iv(o),{func:1,ret:-1,args:[r]}),!1,r)},
dE:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.f],"$ab")
this.hS()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.ev(C.a.iU(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
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
if(H.q_(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.K(m[1])
l.textContent=H.K(m[0])
t.appendChild(l)}else{k=P.fe(C.y,n,C.h,!1)
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
eC:function(a){var u,t,s,r=new V.fS("dart")
r.bk("dart")
u=new V.hc("glsl")
u.bk("glsl")
t=new V.hd("html")
t.bk("html")
s=C.a.iL(H.d([r,u,t],[V.bI]),new V.iw(a))
if(s!=null)return s
r=new V.i7("plain")
r.bk("plain")
return r},
dD:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.l(b0,"$ib",[P.f],"$ab")
u=H.d([],[P.m])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dt(r).a1(r,"+")){C.a.k(b0,s,C.b.a8(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a1(r,"-")){C.a.k(b0,s,C.b.a8(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eC(a8)
q.eh(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.fe(C.y,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lZ()
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.u)(r),++a0)C.a_.ij(a,r[a0])
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
for(a3=C.a.gU(r);a3.D();)c.appendChild(a3.gL(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
ia:function(a){var u,t,s,r,q,p,o,n="auto"
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
s=H.h(r.insertCell(-1),"$ibh").style
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
o=H.h(r.insertCell(-1),"$ibh")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
hS:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iU()
u.c=u.l(0,q)
t=u.l(0,q).m(0,p)
s=V.x(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,p).m(0,p)
s=new V.ay()
r=[V.aD]
s.sa3(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.t("*"))
C.a.h(s.a,t)
t=u.l(0,p).m(0,"BoldEnd")
s=V.x(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,o)
s=V.x(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,o).m(0,o)
s=new V.ay()
s.sa3(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.t("_"))
C.a.h(s.a,t)
t=u.l(0,o).m(0,n)
s=V.x(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,m)
s=V.x(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,m).m(0,m)
s=new V.ay()
s.sa3(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.t("`"))
C.a.h(s.a,t)
t=u.l(0,m).m(0,"CodeEnd")
s=V.x(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,l)
s=V.x(new H.t("["))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,l).m(0,k)
s=V.x(new H.t("|"))
C.a.h(t.a,s)
s=u.l(0,l).m(0,j)
t=V.x(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,l).m(0,l)
t=new V.ay()
t.sa3(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.t("|]"))
C.a.h(t.a,s)
s=u.l(0,k).m(0,j)
t=V.x(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,k).m(0,k)
t=new V.ay()
t.sa3(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.t("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,q).m(0,i).a,new V.bo())
s=u.l(0,i).m(0,i)
t=new V.ay()
t.sa3(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.t("*_`["))
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
V.iv.prototype={
$1:function(a){P.mo(C.o,new V.iu(this.a))},
$S:14}
V.iu.prototype={
$0:function(){var u=C.c.al(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:0}
V.iw.prototype={
$1:function(a){return H.h(a,"$ibI").a===this.a},
$S:55}
M.kV.prototype={
$0:function(){this.a.sa7(0,F.lM(1,null,null,1))},
$S:0}
M.kW.prototype={
$0:function(){this.a.sa7(0,F.lM(8,null,null,8))},
$S:0}
M.kX.prototype={
$0:function(){this.a.sa7(0,F.mX(!0,40,1))},
$S:0}
M.kY.prototype={
$0:function(){this.a.sa7(0,F.mX(!1,40,0))},
$S:0}
M.kZ.prototype={
$0:function(){this.a.sa7(0,F.pS(10,20))},
$S:0}
M.l_.prototype={
$0:function(){var u=F.ip(),t=Math.sqrt(5)/2+0.5,s=F.ar(u,new V.D(-1,t,0)),r=F.ar(u,new V.D(1,t,0)),q=-t,p=F.ar(u,new V.D(-1,q,0)),o=F.ar(u,new V.D(1,q,0)),n=F.ar(u,new V.D(0,-1,q)),m=F.ar(u,new V.D(0,1,q)),l=F.ar(u,new V.D(0,-1,t)),k=F.ar(u,new V.D(0,1,t)),j=F.ar(u,new V.D(t,0,1)),i=F.ar(u,new V.D(t,0,-1)),h=F.ar(u,new V.D(q,0,1)),g=F.ar(u,new V.D(q,0,-1))
F.a2(u,s,g,m,2)
F.a2(u,s,m,r,2)
F.a2(u,s,r,k,2)
F.a2(u,s,k,h,2)
F.a2(u,s,h,g,2)
F.a2(u,r,m,i,2)
F.a2(u,m,g,n,2)
F.a2(u,g,h,p,2)
F.a2(u,h,k,l,2)
F.a2(u,k,r,j,2)
F.a2(u,o,i,n,2)
F.a2(u,o,n,p,2)
F.a2(u,o,p,l,2)
F.a2(u,o,l,j,2)
F.a2(u,o,j,i,2)
F.a2(u,n,i,m,2)
F.a2(u,p,n,g,2)
F.a2(u,l,p,h,2)
F.a2(u,j,l,k,2)
F.a2(u,i,j,r,2)
u.e9(new F.d9(),new F.jt())
this.a.sa7(0,u)},
$S:0}
M.l0.prototype={
$0:function(){this.a.sa7(0,F.nc(6,6))},
$S:0}
M.l1.prototype={
$0:function(){this.a.sa7(0,F.q2())},
$S:0}
M.l2.prototype={
$0:function(){this.a.sa7(0,F.pR())},
$S:0}
M.l3.prototype={
$1:function(a){var u,t,s,r
H.h(a,"$iC")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.dD("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dD("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:10};(function aliases(){var u=J.a.prototype
u.eJ=u.i
u=J.dQ.prototype
u.eL=u.i
u=P.j.prototype
u.eK=u.bF
u=W.V.prototype
u.bJ=u.ad
u=W.eX.prototype
u.eN=u.at
u=O.cM.prototype
u.cW=u.aA
u=O.bd.prototype
u.cX=u.aA
u=V.dW.prototype
u.eM=u.aF
u.cV=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"pv","oF",12)
u(P,"pw","oG",12)
u(P,"px","oH",12)
t(P,"mW","pt",3)
s(W,"pK",4,null,["$4"],["oJ"],28,0)
s(W,"pL",4,null,["$4"],["oK"],28,0)
var m
r(m=E.ax.prototype,"gef",0,0,null,["$1","$0"],["eg","j3"],1,0)
r(m,"ged",0,0,null,["$1","$0"],["ee","j2"],1,0)
r(m,"geb",0,0,null,["$1","$0"],["ec","j_"],1,0)
q(m,"giY","iZ",9)
q(m,"gj0","j1",9)
r(m=E.ei.prototype,"gcY",0,0,null,["$1","$0"],["d_","cZ"],1,0)
p(m,"gji","eo",3)
o(m=X.ep.prototype,"gh1","h2",16)
o(m,"gfQ","fR",16)
o(m,"gfW","fX",4)
o(m,"gh5","h6",31)
o(m,"gh3","h4",31)
o(m,"gh9","ha",4)
o(m,"ghd","he",4)
o(m,"gh_","h0",4)
o(m,"ghb","hc",4)
o(m,"gfY","fZ",4)
o(m,"ghf","hg",36)
o(m,"ghh","hi",16)
o(m,"ghu","hv",15)
o(m,"ghq","hr",15)
o(m,"ghs","ht",15)
r(D.bK.prototype,"geX",0,0,null,["$1","$0"],["ax","eY"],1,0)
r(m=D.dS.prototype,"gdn",0,0,null,["$1","$0"],["dq","h7"],1,0)
o(m,"ghk","hl",38)
q(m,"gfK","fL",26)
q(m,"gho","hp",26)
n(V.X.prototype,"gn","bb",13)
n(V.D.prototype,"gn","bb",13)
n(V.b4.prototype,"gn","bb",13)
r(m=U.cI.prototype,"gaP",0,0,null,["$1","$0"],["P","a4"],1,0)
q(m,"gfI","fJ",22)
q(m,"ghm","hn",22)
r(m=U.eq.prototype,"gaP",0,0,null,["$1","$0"],["P","a4"],1,0)
o(m,"gbW","bX",2)
o(m,"gbY","bZ",2)
o(m,"gc_","c0",2)
r(m=U.er.prototype,"gaP",0,0,null,["$1","$0"],["P","a4"],1,0)
o(m,"gbW","bX",2)
o(m,"gbY","bZ",2)
o(m,"gc_","c0",2)
o(m,"gfB","fC",2)
o(m,"gfD","fE",2)
o(m,"gi5","i6",2)
o(m,"gi3","i4",2)
o(m,"gi1","i2",2)
o(U.es.prototype,"gfG","fH",2)
r(m=M.dK.prototype,"gap",0,0,null,["$1","$0"],["ay","f_"],1,0)
q(m,"gfS","fT",9)
q(m,"gfU","fV",9)
r(m=O.dX.prototype,"gbl",0,0,null,["$1","$0"],["a_","bL"],1,0)
r(m,"ghI",0,0,null,["$1","$0"],["du","hJ"],1,0)
q(m,"gfM","fN",33)
q(m,"gfO","fP",33)
r(O.cM.prototype,"gbl",0,0,null,["$1","$0"],["a_","bL"],1,0)
r(X.e4.prototype,"gd0",0,0,null,["$1","$0"],["aM","f5"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.P,null)
s(P.P,[H.lo,J.a,J.aB,P.eK,P.j,H.cL,P.ba,H.c3,H.d7,H.fL,H.iZ,P.bL,H.cC,H.f1,P.af,H.hp,H.hr,H.hk,P.f7,P.bm,P.aR,P.eu,P.iE,P.d_,P.iF,P.bi,P.ao,P.ku,P.k8,P.ck,P.eJ,P.z,P.km,P.hx,P.c0,P.hg,P.ks,P.kr,P.S,P.aC,P.ab,P.b9,P.i5,P.ed,P.eC,P.ha,P.bM,P.b,P.A,P.N,P.az,P.f,P.aj,P.cl,P.jd,P.kb,W.fO,W.bT,W.I,W.e2,W.eX,W.kh,W.dM,W.aF,W.k7,W.ff,P.kd,P.fc,P.k2,P.R,O.a6,O.cN,E.fF,E.ax,E.ie,E.ei,Z.et,Z.jB,Z.dD,Z.bN,Z.by,D.fI,D.c1,D.C,X.dE,X.dR,X.hm,X.hu,X.aE,X.hU,X.iV,X.ep,D.bK,D.ae,D.e5,D.ec,V.ac,V.av,V.h1,V.dY,V.ap,V.a5,V.Z,V.bg,V.e8,V.X,V.D,V.b4,U.eq,U.er,U.es,M.dK,A.dA,A.fy,A.aw,A.aI,A.aL,A.aM,A.hE,A.cf,A.cg,A.ci,A.el,A.j7,F.a8,F.h4,F.bu,F.ho,F.bQ,F.ea,F.iq,F.ir,F.is,F.a9,F.jp,F.jq,F.ju,F.jv,F.jw,F.jx,O.ce,O.cM,O.hF,T.iP,V.bo,V.aD,V.dW,V.id,V.io,V.cZ,V.ej,V.d3,V.iT,X.dF,X.ef,X.e4,V.bI,V.ib,V.it])
s(J.a,[J.hj,J.dP,J.dQ,J.aV,J.bO,J.bs,H.cR,H.bP,W.k,W.fv,W.bZ,W.cB,W.b7,W.b8,W.Y,W.ew,W.fT,W.fU,W.ey,W.dJ,W.eA,W.fW,W.o,W.eD,W.aU,W.he,W.eF,W.br,W.dU,W.hO,W.eL,W.eM,W.aW,W.eN,W.eQ,W.aX,W.eU,W.eW,W.aZ,W.eY,W.b_,W.f2,W.aN,W.f5,W.iS,W.b1,W.f8,W.iX,W.ji,W.fg,W.fi,W.fk,W.fm,W.fo,P.bc,P.eH,P.bf,P.eS,P.ia,P.f3,P.bj,P.fa,P.fz,P.ev,P.dB,P.e6,P.cc,P.e9,P.eg,P.em,P.f_])
s(J.dQ,[J.i6,J.bS,J.bt])
t(J.ln,J.aV)
s(J.bO,[J.dO,J.dN])
t(P.ht,P.eK)
s(P.ht,[H.en,W.jJ,W.aq,P.h6])
t(H.t,H.en)
s(P.j,[H.fZ,H.hy,H.da])
s(H.fZ,[H.c7,H.hq])
s(P.ba,[H.hz,H.jC])
t(H.hA,H.c7)
t(H.fM,H.fL)
s(P.bL,[H.i2,H.hl,H.jb,H.j0,H.fH,H.il,P.fx,P.e3,P.aT,P.jc,P.j9,P.cd,P.fK,P.fR])
s(H.cC,[H.lc,H.iL,H.kO,H.kP,H.kQ,P.jF,P.jE,P.jG,P.jH,P.kl,P.kk,P.jQ,P.jU,P.jR,P.jS,P.jT,P.jX,P.jY,P.jW,P.jV,P.iG,P.iH,P.kE,P.k5,P.k4,P.k6,P.hs,P.hw,P.fX,P.fY,P.jh,P.je,P.jf,P.jg,P.kn,P.ko,P.kq,P.kp,P.ky,P.kx,P.kz,P.kA,W.h_,W.hQ,W.hS,W.ik,W.iD,W.jP,W.i0,W.i_,W.k9,W.ka,W.kj,W.kt,P.kf,P.kG,P.h7,P.h8,P.fB,E.ig,E.ih,E.ii,E.iR,D.h2,D.h3,F.kv,F.kH,F.kJ,F.kK,F.kL,F.kT,F.l7,F.l8,F.lb,F.kS,F.kI,F.jz,F.jy,F.jr,F.js,O.hI,O.hJ,O.hK,O.hL,O.hM,O.hN,T.iQ,V.l6,V.ic,V.iv,V.iu,V.iw,M.kV,M.kW,M.kX,M.kY,M.kZ,M.l_,M.l0,M.l1,M.l2,M.l3])
s(H.iL,[H.iB,H.cz])
t(H.jD,P.fx)
t(P.hv,P.af)
s(P.hv,[H.a3,W.jI])
t(H.e_,H.bP)
s(H.e_,[H.df,H.dh])
t(H.dg,H.df)
t(H.cS,H.dg)
t(H.di,H.dh)
t(H.e0,H.di)
s(H.e0,[H.hV,H.hW,H.hX,H.hY,H.hZ,H.e1,H.cT])
t(P.k3,P.ku)
t(P.k1,P.k8)
t(P.fd,P.hx)
t(P.eo,P.fd)
s(P.c0,[P.fD,P.h0])
t(P.bJ,P.iF)
s(P.bJ,[P.fE,P.hf,P.jl,P.jk])
t(P.jj,P.h0)
s(P.ab,[P.q,P.m])
s(P.aT,[P.cb,P.hh])
t(P.jL,P.cl)
s(W.k,[W.H,W.h5,W.cO,W.aY,W.dj,W.b0,W.aO,W.dl,W.jA,W.db,P.fC,P.bY])
s(W.H,[W.V,W.bH,W.dc])
s(W.V,[W.y,P.p])
s(W.y,[W.dy,W.fw,W.cy,W.bG,W.c_,W.aJ,W.h9,W.cJ,W.cK,W.im,W.bh,W.ee,W.iJ,W.iK,W.d1])
s(W.b7,[W.cD,W.fP,W.fQ])
t(W.fN,W.b8)
t(W.cE,W.ew)
t(W.ez,W.ey)
t(W.dI,W.ez)
t(W.eB,W.eA)
t(W.fV,W.eB)
t(W.aK,W.bZ)
t(W.eE,W.eD)
t(W.cG,W.eE)
t(W.eG,W.eF)
t(W.c4,W.eG)
t(W.bR,W.o)
s(W.bR,[W.bb,W.ag,W.b2])
t(W.hP,W.eL)
t(W.hR,W.eM)
t(W.eO,W.eN)
t(W.hT,W.eO)
t(W.eR,W.eQ)
t(W.cU,W.eR)
t(W.eV,W.eU)
t(W.i8,W.eV)
t(W.ij,W.eW)
t(W.dk,W.dj)
t(W.iy,W.dk)
t(W.eZ,W.eY)
t(W.iz,W.eZ)
t(W.iC,W.f2)
t(W.f6,W.f5)
t(W.iM,W.f6)
t(W.dm,W.dl)
t(W.iN,W.dm)
t(W.f9,W.f8)
t(W.iW,W.f9)
t(W.bl,W.ag)
t(W.fh,W.fg)
t(W.jK,W.fh)
t(W.ex,W.dJ)
t(W.fj,W.fi)
t(W.jZ,W.fj)
t(W.fl,W.fk)
t(W.eP,W.fl)
t(W.fn,W.fm)
t(W.kc,W.fn)
t(W.fp,W.fo)
t(W.kg,W.fp)
t(W.jM,W.jI)
t(W.jN,P.iE)
t(W.lA,W.jN)
t(W.jO,P.d_)
t(W.ki,W.eX)
t(P.ke,P.kd)
t(P.al,P.k2)
t(P.eI,P.eH)
t(P.hn,P.eI)
t(P.eT,P.eS)
t(P.i3,P.eT)
t(P.cX,P.p)
t(P.f4,P.f3)
t(P.iI,P.f4)
t(P.fb,P.fa)
t(P.iY,P.fb)
t(P.fA,P.ev)
t(P.i4,P.bY)
t(P.f0,P.f_)
t(P.iA,P.f0)
s(E.fF,[Z.dC,A.cY,T.d2])
s(D.C,[D.c5,D.c6,D.Q,X.i9])
s(X.i9,[X.dV,X.bv,X.cP,X.ek])
s(O.a6,[D.dS,U.cI])
s(D.fI,[U.fJ,U.ah])
t(U.dG,U.ah)
t(A.hB,A.cY)
s(A.el,[A.aP,A.j4,A.j5,A.j6,A.j2,A.am,A.j3,A.ad,A.d5,A.j8,A.d6,A.aG,A.an,A.ch])
t(F.ix,F.h4)
t(F.j1,F.ho)
t(F.d9,F.jv)
s(F.jw,[F.jt,F.i1])
t(O.dX,O.ce)
s(O.cM,[O.hC,O.hD,O.bd])
s(O.bd,[O.hG,O.hH])
t(T.eh,T.d2)
t(T.iO,T.eh)
s(V.dW,[V.ay,V.d4])
t(X.hb,X.ef)
s(V.bI,[V.fS,V.hc,V.hd,V.i7])
u(H.en,H.d7)
u(H.df,P.z)
u(H.dg,H.c3)
u(H.dh,P.z)
u(H.di,H.c3)
u(P.eK,P.z)
u(P.fd,P.km)
u(W.ew,W.fO)
u(W.ey,P.z)
u(W.ez,W.I)
u(W.eA,P.z)
u(W.eB,W.I)
u(W.eD,P.z)
u(W.eE,W.I)
u(W.eF,P.z)
u(W.eG,W.I)
u(W.eL,P.af)
u(W.eM,P.af)
u(W.eN,P.z)
u(W.eO,W.I)
u(W.eQ,P.z)
u(W.eR,W.I)
u(W.eU,P.z)
u(W.eV,W.I)
u(W.eW,P.af)
u(W.dj,P.z)
u(W.dk,W.I)
u(W.eY,P.z)
u(W.eZ,W.I)
u(W.f2,P.af)
u(W.f5,P.z)
u(W.f6,W.I)
u(W.dl,P.z)
u(W.dm,W.I)
u(W.f8,P.z)
u(W.f9,W.I)
u(W.fg,P.z)
u(W.fh,W.I)
u(W.fi,P.z)
u(W.fj,W.I)
u(W.fk,P.z)
u(W.fl,W.I)
u(W.fm,P.z)
u(W.fn,W.I)
u(W.fo,P.z)
u(W.fp,W.I)
u(P.eH,P.z)
u(P.eI,W.I)
u(P.eS,P.z)
u(P.eT,W.I)
u(P.f3,P.z)
u(P.f4,W.I)
u(P.fa,P.z)
u(P.fb,W.I)
u(P.ev,P.af)
u(P.f_,P.z)
u(P.f0,W.I)})();(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bG.prototype
C.i=W.c_.prototype
C.O=W.aJ.prototype
C.R=J.a.prototype
C.a=J.aV.prototype
C.S=J.dN.prototype
C.d=J.dO.prototype
C.j=J.dP.prototype
C.c=J.bO.prototype
C.b=J.bs.prototype
C.T=J.bt.prototype
C.Z=W.cU.prototype
C.B=J.i6.prototype
C.e=P.cc.prototype
C.a_=W.bh.prototype
C.C=W.ee.prototype
C.r=J.bS.prototype
C.D=W.bl.prototype
C.E=W.db.prototype
C.a0=new P.fE()
C.F=new P.fD()
C.v=function getTagFallback(o) {
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
C.u=function(hooks) { return hooks; }

C.M=new P.i5()
C.h=new P.jj()
C.N=new P.jl()
C.f=new P.k3()
C.o=new P.b9(0)
C.P=new P.b9(5e6)
C.Q=new P.hg("element",!0,!1,!1,!1)
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
C.Y=new H.fM(0,{},C.x,[P.f,P.f])})()
var v={mangledGlobalNames:{m:"int",q:"double",ab:"num",f:"String",S:"bool",N:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.N},{func:1,ret:-1,opt:[D.C]},{func:1,ret:-1,args:[D.C]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ag]},{func:1,ret:P.N,args:[F.a9,P.q,P.q]},{func:1,ret:P.N,args:[,,]},{func:1,ret:P.N,args:[F.a8]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[P.m,[P.j,E.ax]]},{func:1,ret:P.N,args:[D.C]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.q},{func:1,ret:P.N,args:[W.o]},{func:1,ret:-1,args:[W.b2]},{func:1,ret:-1,args:[W.o]},{func:1,ret:V.Z,args:[P.q]},{func:1,ret:P.N,args:[,]},{func:1,ret:P.f,args:[P.m]},{func:1,ret:P.q,args:[P.q]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:-1,args:[P.m,[P.j,U.ah]]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,args:[,]},{func:1,ret:-1,args:[P.m,[P.j,D.ae]]},{func:1,ret:P.S,args:[W.H]},{func:1,ret:P.S,args:[W.V,P.f,P.f,W.bT]},{func:1,ret:P.S,args:[W.aF]},{func:1,ret:P.S,args:[P.f]},{func:1,ret:-1,args:[W.bb]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.C]}]},{func:1,ret:-1,args:[P.m,[P.j,V.ap]]},{func:1,ret:W.V,args:[W.H]},{func:1,ret:-1,args:[W.H,W.H]},{func:1,ret:-1,args:[W.bl]},{func:1,args:[W.o]},{func:1,ret:P.S,args:[[P.j,D.ae]]},{func:1,ret:P.R,args:[,,]},{func:1,ret:P.N,args:[P.f,,]},{func:1,ret:P.N,args:[P.f]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.m]},{func:1,ret:[P.A,P.f,P.f],args:[[P.A,P.f,P.f],P.f]},{func:1,ret:[P.aR,,],args:[,]},{func:1,ret:P.N,args:[,],opt:[P.az]},{func:1,ret:P.R,args:[P.m]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,ret:P.m,args:[A.aI,A.aI]},{func:1,ret:P.m,args:[A.aL,A.aL]},{func:1,ret:P.m,args:[A.aM,A.aM]},{func:1,args:[P.f]},{func:1,ret:P.N,args:[P.bi]},{func:1,ret:P.S,args:[V.bI]},{func:1,args:[,P.f]},{func:1,ret:P.N,args:[P.ab]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b6=0
$.cA=null
$.m0=null
$.lE=!1
$.n3=null
$.mU=null
$.na=null
$.kM=null
$.kR=null
$.lO=null
$.cn=null
$.dr=null
$.ds=null
$.lF=!1
$.a1=C.f
$.aA=[]
$.bq=null
$.lk=null
$.m6=null
$.m5=null
$.de=P.lq(P.f,P.bM)
$.mb=null
$.mf=null
$.cV=null
$.mj=null
$.mv=null
$.my=null
$.mx=null
$.jm=null
$.jn=null
$.jo=null
$.mw=null
$.mA=null
$.me=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"q8","nf",function(){return H.n2("_$dart_dartClosure")})
u($,"q9","lT",function(){return H.n2("_$dart_js")})
u($,"qf","ng",function(){return H.bk(H.j_({
toString:function(){return"$receiver$"}}))})
u($,"qg","nh",function(){return H.bk(H.j_({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"qh","ni",function(){return H.bk(H.j_(null))})
u($,"qi","nj",function(){return H.bk(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ql","nm",function(){return H.bk(H.j_(void 0))})
u($,"qm","nn",function(){return H.bk(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qk","nl",function(){return H.bk(H.mq(null))})
u($,"qj","nk",function(){return H.bk(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"qo","np",function(){return H.bk(H.mq(void 0))})
u($,"qn","no",function(){return H.bk(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qF","lU",function(){return P.oE()})
u($,"qr","nq",function(){return P.oA()})
u($,"qG","nu",function(){return H.o8(H.cm(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))})
u($,"qI","nw",function(){return P.om("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qJ","nx",function(){return P.p2()})
u($,"qH","nv",function(){return P.m8(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"qy","nt",function(){return Z.aQ(0)})
u($,"qs","nr",function(){return Z.aQ(511)})
u($,"qA","bD",function(){return Z.aQ(1)})
u($,"qz","bC",function(){return Z.aQ(2)})
u($,"qu","bB",function(){return Z.aQ(4)})
u($,"qB","bE",function(){return Z.aQ(8)})
u($,"qC","bX",function(){return Z.aQ(16)})
u($,"qv","du",function(){return Z.aQ(32)})
u($,"qw","dv",function(){return Z.aQ(64)})
u($,"qx","ns",function(){return Z.aQ(96)})
u($,"qD","cx",function(){return Z.aQ(128)})
u($,"qt","bA",function(){return Z.aQ(256)})
u($,"q7","ne",function(){return new V.h1(1e-9)})
u($,"q6","O",function(){return $.ne()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cR,DataView:H.bP,ArrayBufferView:H.bP,Float32Array:H.cS,Float64Array:H.cS,Int16Array:H.hV,Int32Array:H.hW,Int8Array:H.hX,Uint16Array:H.hY,Uint32Array:H.hZ,Uint8ClampedArray:H.e1,CanvasPixelArray:H.e1,Uint8Array:H.cT,HTMLAudioElement:W.y,HTMLBRElement:W.y,HTMLButtonElement:W.y,HTMLContentElement:W.y,HTMLDListElement:W.y,HTMLDataElement:W.y,HTMLDataListElement:W.y,HTMLDetailsElement:W.y,HTMLDialogElement:W.y,HTMLEmbedElement:W.y,HTMLFieldSetElement:W.y,HTMLHRElement:W.y,HTMLHeadElement:W.y,HTMLHeadingElement:W.y,HTMLHtmlElement:W.y,HTMLIFrameElement:W.y,HTMLLIElement:W.y,HTMLLabelElement:W.y,HTMLLegendElement:W.y,HTMLLinkElement:W.y,HTMLMapElement:W.y,HTMLMediaElement:W.y,HTMLMenuElement:W.y,HTMLMetaElement:W.y,HTMLMeterElement:W.y,HTMLModElement:W.y,HTMLOListElement:W.y,HTMLObjectElement:W.y,HTMLOptGroupElement:W.y,HTMLOptionElement:W.y,HTMLOutputElement:W.y,HTMLParagraphElement:W.y,HTMLParamElement:W.y,HTMLPictureElement:W.y,HTMLPreElement:W.y,HTMLProgressElement:W.y,HTMLQuoteElement:W.y,HTMLScriptElement:W.y,HTMLShadowElement:W.y,HTMLSlotElement:W.y,HTMLSourceElement:W.y,HTMLSpanElement:W.y,HTMLStyleElement:W.y,HTMLTableCaptionElement:W.y,HTMLTableColElement:W.y,HTMLTextAreaElement:W.y,HTMLTimeElement:W.y,HTMLTitleElement:W.y,HTMLTrackElement:W.y,HTMLUListElement:W.y,HTMLUnknownElement:W.y,HTMLVideoElement:W.y,HTMLDirectoryElement:W.y,HTMLFontElement:W.y,HTMLFrameElement:W.y,HTMLFrameSetElement:W.y,HTMLMarqueeElement:W.y,HTMLElement:W.y,AccessibleNodeList:W.fv,HTMLAnchorElement:W.dy,HTMLAreaElement:W.fw,HTMLBaseElement:W.cy,Blob:W.bZ,HTMLBodyElement:W.bG,HTMLCanvasElement:W.c_,CanvasRenderingContext2D:W.cB,CDATASection:W.bH,CharacterData:W.bH,Comment:W.bH,ProcessingInstruction:W.bH,Text:W.bH,CSSNumericValue:W.cD,CSSUnitValue:W.cD,CSSPerspective:W.fN,CSSCharsetRule:W.Y,CSSConditionRule:W.Y,CSSFontFaceRule:W.Y,CSSGroupingRule:W.Y,CSSImportRule:W.Y,CSSKeyframeRule:W.Y,MozCSSKeyframeRule:W.Y,WebKitCSSKeyframeRule:W.Y,CSSKeyframesRule:W.Y,MozCSSKeyframesRule:W.Y,WebKitCSSKeyframesRule:W.Y,CSSMediaRule:W.Y,CSSNamespaceRule:W.Y,CSSPageRule:W.Y,CSSRule:W.Y,CSSStyleRule:W.Y,CSSSupportsRule:W.Y,CSSViewportRule:W.Y,CSSStyleDeclaration:W.cE,MSStyleCSSProperties:W.cE,CSS2Properties:W.cE,CSSImageValue:W.b7,CSSKeywordValue:W.b7,CSSPositionValue:W.b7,CSSResourceValue:W.b7,CSSURLImageValue:W.b7,CSSStyleValue:W.b7,CSSMatrixComponent:W.b8,CSSRotation:W.b8,CSSScale:W.b8,CSSSkew:W.b8,CSSTranslation:W.b8,CSSTransformComponent:W.b8,CSSTransformValue:W.fP,CSSUnparsedValue:W.fQ,DataTransferItemList:W.fT,HTMLDivElement:W.aJ,DOMException:W.fU,ClientRectList:W.dI,DOMRectList:W.dI,DOMRectReadOnly:W.dJ,DOMStringList:W.fV,DOMTokenList:W.fW,Element:W.V,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.k,Accelerometer:W.k,AccessibleNode:W.k,AmbientLightSensor:W.k,Animation:W.k,ApplicationCache:W.k,DOMApplicationCache:W.k,OfflineResourceList:W.k,BackgroundFetchRegistration:W.k,BatteryManager:W.k,BroadcastChannel:W.k,CanvasCaptureMediaStreamTrack:W.k,DedicatedWorkerGlobalScope:W.k,EventSource:W.k,FileReader:W.k,FontFaceSet:W.k,Gyroscope:W.k,XMLHttpRequest:W.k,XMLHttpRequestEventTarget:W.k,XMLHttpRequestUpload:W.k,LinearAccelerationSensor:W.k,Magnetometer:W.k,MediaDevices:W.k,MediaKeySession:W.k,MediaQueryList:W.k,MediaRecorder:W.k,MediaSource:W.k,MediaStream:W.k,MediaStreamTrack:W.k,MIDIAccess:W.k,MIDIInput:W.k,MIDIOutput:W.k,MIDIPort:W.k,NetworkInformation:W.k,Notification:W.k,OffscreenCanvas:W.k,OrientationSensor:W.k,PaymentRequest:W.k,Performance:W.k,PermissionStatus:W.k,PresentationAvailability:W.k,PresentationConnection:W.k,PresentationConnectionList:W.k,PresentationRequest:W.k,RelativeOrientationSensor:W.k,RemotePlayback:W.k,RTCDataChannel:W.k,DataChannel:W.k,RTCDTMFSender:W.k,RTCPeerConnection:W.k,webkitRTCPeerConnection:W.k,mozRTCPeerConnection:W.k,ScreenOrientation:W.k,Sensor:W.k,ServiceWorker:W.k,ServiceWorkerContainer:W.k,ServiceWorkerGlobalScope:W.k,ServiceWorkerRegistration:W.k,SharedWorker:W.k,SharedWorkerGlobalScope:W.k,SpeechRecognition:W.k,SpeechSynthesis:W.k,SpeechSynthesisUtterance:W.k,VR:W.k,VRDevice:W.k,VRDisplay:W.k,VRSession:W.k,VisualViewport:W.k,WebSocket:W.k,Worker:W.k,WorkerGlobalScope:W.k,WorkerPerformance:W.k,BluetoothDevice:W.k,BluetoothRemoteGATTCharacteristic:W.k,Clipboard:W.k,MojoInterfaceInterceptor:W.k,USB:W.k,IDBDatabase:W.k,IDBOpenDBRequest:W.k,IDBVersionChangeRequest:W.k,IDBRequest:W.k,IDBTransaction:W.k,AnalyserNode:W.k,RealtimeAnalyserNode:W.k,AudioBufferSourceNode:W.k,AudioDestinationNode:W.k,AudioNode:W.k,AudioScheduledSourceNode:W.k,AudioWorkletNode:W.k,BiquadFilterNode:W.k,ChannelMergerNode:W.k,AudioChannelMerger:W.k,ChannelSplitterNode:W.k,AudioChannelSplitter:W.k,ConstantSourceNode:W.k,ConvolverNode:W.k,DelayNode:W.k,DynamicsCompressorNode:W.k,GainNode:W.k,AudioGainNode:W.k,IIRFilterNode:W.k,MediaElementAudioSourceNode:W.k,MediaStreamAudioDestinationNode:W.k,MediaStreamAudioSourceNode:W.k,OscillatorNode:W.k,Oscillator:W.k,PannerNode:W.k,AudioPannerNode:W.k,webkitAudioPannerNode:W.k,ScriptProcessorNode:W.k,JavaScriptAudioNode:W.k,StereoPannerNode:W.k,WaveShaperNode:W.k,EventTarget:W.k,File:W.aK,FileList:W.cG,FileWriter:W.h5,HTMLFormElement:W.h9,Gamepad:W.aU,History:W.he,HTMLCollection:W.c4,HTMLFormControlsCollection:W.c4,HTMLOptionsCollection:W.c4,ImageData:W.br,HTMLImageElement:W.cJ,HTMLInputElement:W.cK,KeyboardEvent:W.bb,Location:W.dU,MediaList:W.hO,MessagePort:W.cO,MIDIInputMap:W.hP,MIDIOutputMap:W.hR,MimeType:W.aW,MimeTypeArray:W.hT,PointerEvent:W.ag,MouseEvent:W.ag,DragEvent:W.ag,Document:W.H,DocumentFragment:W.H,HTMLDocument:W.H,ShadowRoot:W.H,XMLDocument:W.H,DocumentType:W.H,Node:W.H,NodeList:W.cU,RadioNodeList:W.cU,Plugin:W.aX,PluginArray:W.i8,RTCStatsReport:W.ij,HTMLSelectElement:W.im,SourceBuffer:W.aY,SourceBufferList:W.iy,SpeechGrammar:W.aZ,SpeechGrammarList:W.iz,SpeechRecognitionResult:W.b_,Storage:W.iC,CSSStyleSheet:W.aN,StyleSheet:W.aN,HTMLTableCellElement:W.bh,HTMLTableDataCellElement:W.bh,HTMLTableHeaderCellElement:W.bh,HTMLTableElement:W.ee,HTMLTableRowElement:W.iJ,HTMLTableSectionElement:W.iK,HTMLTemplateElement:W.d1,TextTrack:W.b0,TextTrackCue:W.aO,VTTCue:W.aO,TextTrackCueList:W.iM,TextTrackList:W.iN,TimeRanges:W.iS,Touch:W.b1,TouchEvent:W.b2,TouchList:W.iW,TrackDefaultList:W.iX,CompositionEvent:W.bR,FocusEvent:W.bR,TextEvent:W.bR,UIEvent:W.bR,URL:W.ji,VideoTrackList:W.jA,WheelEvent:W.bl,Window:W.db,DOMWindow:W.db,Attr:W.dc,CSSRuleList:W.jK,ClientRect:W.ex,DOMRect:W.ex,GamepadList:W.jZ,NamedNodeMap:W.eP,MozNamedAttrMap:W.eP,SpeechRecognitionResultList:W.kc,StyleSheetList:W.kg,SVGLength:P.bc,SVGLengthList:P.hn,SVGNumber:P.bf,SVGNumberList:P.i3,SVGPointList:P.ia,SVGScriptElement:P.cX,SVGStringList:P.iI,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bj,SVGTransformList:P.iY,AudioBuffer:P.fz,AudioParamMap:P.fA,AudioTrackList:P.fC,AudioContext:P.bY,webkitAudioContext:P.bY,BaseAudioContext:P.bY,OfflineAudioContext:P.i4,WebGLBuffer:P.dB,WebGLProgram:P.e6,WebGL2RenderingContext:P.cc,WebGLShader:P.e9,WebGLTexture:P.eg,WebGLUniformLocation:P.em,SQLResultSetRowList:P.iA})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e_.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.cS.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
H.e0.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(M.n6,[])
else M.n6([])})})()
//# sourceMappingURL=test.dart.js.map
