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
a[c]=function(){a[c]=function(){H.pZ(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lE"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lE"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lE(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={lh:function lh(){},
kI:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
hh:function(){return new P.cb("No element")},
nW:function(){return new P.cb("Too many elements")},
nV:function(){return new P.cb("Too few elements")},
e9:function(a,b,c,d,e){H.l(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.m,args:[e,e]})
if(c-b<=32)H.oq(a,b,c,d,e)
else H.op(a,b,c,d,e)},
oq:function(a,b,c,d,e){var u,t,s,r,q
H.l(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.m,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.e(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.e(a,r)
r=J.b2(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.e(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
op:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.l(a2,"$ib",[a6],"$ab")
H.n(a5,{func:1,ret:P.m,args:[a6,a6]})
u=C.e.a7(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.e.a7(a3+a4,2)
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
if(J.b2(a5.$2(n,m),0)){i=m
m=n
n=i}if(J.b2(a5.$2(k,j),0)){i=j
j=k
k=i}if(J.b2(a5.$2(n,l),0)){i=l
l=n
n=i}if(J.b2(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.b2(a5.$2(n,k),0)){i=k
k=n
n=i}if(J.b2(a5.$2(l,k),0)){i=k
k=l
l=i}if(J.b2(a5.$2(m,j),0)){i=j
j=m
m=i}if(J.b2(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.b2(a5.$2(k,j),0)){i=j
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
if(typeof d!=="number")return d.S()
if(d<0){if(f!==h){if(h>=a2.length)return H.e(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.as()
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
if(typeof a1!=="number")return a1.as()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.as()
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
H.e9(a2,a3,h-2,a5,a6)
H.e9(a2,g+2,a4,a5,a6)
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
break}}}H.e9(a2,h,g,a5,a6)}else H.e9(a2,h,g,a5,a6)},
u:function u(a){this.a=a},
fY:function fY(){},
c5:function c5(){},
cI:function cI(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hx:function hx(a,b,c){this.a=a
this.b=b
this.$ti=c},
hy:function hy(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hz:function hz(a,b,c){this.a=a
this.b=b
this.$ti=c},
d8:function d8(a,b,c){this.a=a
this.b=b
this.$ti=c},
jx:function jx(a,b,c){this.a=a
this.b=b
this.$ti=c},
c1:function c1(){},
d6:function d6(){},
ek:function ek(){},
nM:function(){throw H.c(P.I("Cannot modify unmodifiable Map"))},
cs:function(a){var u,t=H.J(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
pH:function(a){return v.types[H.a3(a)]},
pO:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.U(a).$iN},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.au(a)
if(typeof u!=="string")throw H.c(H.as(a))
return u},
cU:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
oh:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.e(p,3)
u=H.J(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ag(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.E(s,q)|32)>t)return}return parseInt(a,b)},
c7:function(a){return H.o8(a)+H.lA(H.bV(a),0,null)},
o8:function(a){var u,t,s,r,q,p,o,n=J.U(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ibR){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cs(t.length>1&&C.b.E(t,0)===36?C.b.a9(t,1):t)},
o9:function(){if(!!self.location)return self.location.href
return},
mc:function(a){var u,t,s,r,q
H.kO(a)
u=J.aE(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
oi:function(a){var u,t,s,r=H.d([],[P.m])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.as(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.aR(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.as(s))}return H.mc(r)},
md:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.as(s))
if(s<0)throw H.c(H.as(s))
if(s>65535)return H.oi(a)}return H.mc(a)},
oj:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c8:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aR(u,10))>>>0,56320|u&1023)}}throw H.c(P.ag(a,0,1114111,null,null))},
c6:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
og:function(a){var u=H.c6(a).getFullYear()+0
return u},
oe:function(a){var u=H.c6(a).getMonth()+1
return u},
oa:function(a){var u=H.c6(a).getDate()+0
return u},
ob:function(a){var u=H.c6(a).getHours()+0
return u},
od:function(a){var u=H.c6(a).getMinutes()+0
return u},
of:function(a){var u=H.c6(a).getSeconds()+0
return u},
oc:function(a){var u=H.c6(a).getMilliseconds()+0
return u},
E:function(a){throw H.c(H.as(a))},
e:function(a,b){if(a==null)J.aE(a)
throw H.c(H.cm(a,b))},
cm:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aR(!0,b,s,null)
u=H.a3(J.aE(a))
if(!(b<0)){if(typeof u!=="number")return H.E(u)
t=b>=u}else t=!0
if(t)return P.Z(b,a,s,null,u)
return P.e4(b,s)},
pB:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c9(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c9(a,c,!0,b,"end",u)
return new P.aR(!0,b,"end",null)},
as:function(a){return new P.aR(!0,a,null,null)},
pw:function(a){if(typeof a!=="number")throw H.c(H.as(a))
return a},
c:function(a){var u
if(a==null)a=new P.e1()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.na})
u.name=""}else u.toString=H.na
return u},
na:function(){return J.au(this.dartException)},
A:function(a){throw H.c(a)},
v:function(a){throw H.c(P.bm(a))},
bh:function(a){var u,t,s,r,q,p
a=H.n8(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iX(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iY:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mm:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m8:function(a,b){return new H.i2(a,b==null?null:b.method)},
li:function(a,b){var u=b==null,t=u?null:b.method
return new H.hk(a,t,u?null:b.receiver)},
ak:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.l2(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.aR(t,16)&8191)===10)switch(s){case 438:return f.$1(H.li(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.m8(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.ne()
q=$.nf()
p=$.ng()
o=$.nh()
n=$.nk()
m=$.nl()
l=$.nj()
$.ni()
k=$.nn()
j=$.nm()
i=r.ag(u)
if(i!=null)return f.$1(H.li(H.J(u),i))
else{i=q.ag(u)
if(i!=null){i.method="call"
return f.$1(H.li(H.J(u),i))}else{i=p.ag(u)
if(i==null){i=o.ag(u)
if(i==null){i=n.ag(u)
if(i==null){i=m.ag(u)
if(i==null){i=l.ag(u)
if(i==null){i=o.ag(u)
if(i==null){i=k.ag(u)
if(i==null){i=j.ag(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.m8(H.J(u),i))}}return f.$1(new H.j9(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.eb()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aR(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.eb()
return a},
cq:function(a){var u
if(a==null)return new H.f_(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f_(a)},
pF:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
pN:function(a,b,c,d,e,f){H.h(a,"$ibI")
switch(H.a3(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.D("Unsupported number of arguments for wrapped closure"))},
cl:function(a,b){var u
H.a3(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pN)
a.$identity=u
return u},
nL:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.iA().constructor.prototype):Object.create(new H.cv(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b3
if(typeof t!=="number")return t.p()
$.b3=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.lX(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.pH,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.lW:H.l7
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lX(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
nI:function(a,b,c,d){var u=H.l7
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lX:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nK(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nI(t,!r,u,b)
if(t===0){r=$.b3
if(typeof r!=="number")return r.p()
$.b3=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cw
return new Function(r+H.i(q==null?$.cw=H.fE("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b3
if(typeof r!=="number")return r.p()
$.b3=r+1
o+=r
r="return function("+o+"){return this."
q=$.cw
return new Function(r+H.i(q==null?$.cw=H.fE("self"):q)+"."+H.i(u)+"("+o+");}")()},
nJ:function(a,b,c,d){var u=H.l7,t=H.lW
switch(b?-1:a){case 0:throw H.c(H.on("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nK:function(a,b){var u,t,s,r,q,p,o,n=$.cw
if(n==null)n=$.cw=H.fE("self")
u=$.lV
if(u==null)u=$.lV=H.fE("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nJ(s,!q,t,b)
if(s===1){n="return function(){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+");"
u=$.b3
if(typeof u!=="number")return u.p()
$.b3=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+", "+o+");"
u=$.b3
if(typeof u!=="number")return u.p()
$.b3=u+1
return new Function(n+u+"}")()},
lE:function(a,b,c,d,e,f,g){return H.nL(a,b,H.a3(c),d,!!e,!!f,g)},
l7:function(a){return a.a},
lW:function(a){return a.c},
fE:function(a){var u,t,s,r=new H.cv("self","target","receiver","name"),q=J.lf(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
F:function(a){if(a==null)H.ps("boolean expression must not be null")
return a},
J:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b1(a,"String"))},
pC:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b1(a,"double"))},
n4:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b1(a,"num"))},
lB:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b1(a,"bool"))},
a3:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b1(a,"int"))},
n6:function(a,b){throw H.c(H.b1(a,H.cs(H.J(b).substring(2))))},
pU:function(a,b){throw H.c(H.nH(a,H.cs(H.J(b).substring(2))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.U(a)[b])return a
H.n6(a,b)},
t:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.U(a)[b]
else u=!0
if(u)return a
H.pU(a,b)},
kO:function(a){if(a==null)return a
if(!!J.U(a).$ib)return a
throw H.c(H.b1(a,"List<dynamic>"))},
n2:function(a,b){var u
if(a==null)return a
u=J.U(a)
if(!!u.$ib)return a
if(u[b])return a
H.n6(a,b)},
mX:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a3(u)]
else return a.$S()}return},
fo:function(a,b){var u
if(typeof a=="function")return!0
u=H.mX(J.U(a))
if(u==null)return!1
return H.mJ(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lx)return a
$.lx=!0
try{if(H.fo(a,b))return a
u=H.kX(b)
t=H.b1(a,u)
throw H.c(t)}finally{$.lx=!1}},
lG:function(a,b){if(a!=null&&!H.lD(a,b))H.A(H.b1(a,H.kX(b)))
return a},
b1:function(a,b){return new H.iZ("TypeError: "+P.dK(a)+": type '"+H.mP(a)+"' is not a subtype of type '"+b+"'")},
nH:function(a,b){return new H.fF("CastError: "+P.dK(a)+": type '"+H.mP(a)+"' is not a subtype of type '"+b+"'")},
mP:function(a){var u,t=J.U(a)
if(!!t.$icy){u=H.mX(t)
if(u!=null)return H.kX(u)
return"Closure"}return H.c7(a)},
ps:function(a){throw H.c(new H.jy(a))},
pZ:function(a){throw H.c(new P.fQ(H.J(a)))},
on:function(a){return new H.il(a)},
n_:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bV:function(a){if(a==null)return
return a.$ti},
qH:function(a,b,c){return H.cr(a["$a"+H.i(c)],H.bV(b))},
bU:function(a,b,c,d){var u
H.J(c)
H.a3(d)
u=H.cr(a["$a"+H.i(c)],H.bV(b))
return u==null?null:u[d]},
at:function(a,b,c){var u
H.J(b)
H.a3(c)
u=H.cr(a["$a"+H.i(b)],H.bV(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.a3(b)
u=H.bV(a)
return u==null?null:u[b]},
kX:function(a){return H.bT(a,null)},
bT:function(a,b){var u,t
H.l(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cs(a[0].name)+H.lA(a,1,b)
if(typeof a=="function")return H.cs(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a3(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.i(b[t])}if('func' in a)return H.p1(a,b)
if('futureOr' in a)return"FutureOr<"+H.bT("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
p1:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.f]
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
if(m!=null&&m!==P.R)p+=" extends "+H.bT(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bT(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bT(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bT(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.pE(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.J(b[h])
j=j+i+H.bT(e[d],a0)+(" "+H.i(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
lA:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.ah("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bT(p,c)}return"<"+u.i(0)+">"},
cr:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lC:function(a,b,c,d){var u,t
H.J(b)
H.kO(c)
H.J(d)
if(a==null)return!1
u=H.bV(a)
t=J.U(a)
if(t[b]==null)return!1
return H.mS(H.cr(t[d],u),null,c,null)},
l:function(a,b,c,d){H.J(b)
H.kO(c)
H.J(d)
if(a==null)return a
if(H.lC(a,b,c,d))return a
throw H.c(H.b1(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cs(b.substring(2))+H.lA(c,0,null),v.mangledGlobalNames)))},
mS:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aQ(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aQ(a[t],b,c[t],d))return!1
return!0},
qF:function(a,b,c){return a.apply(b,H.cr(J.U(b)["$a"+H.i(c)],H.bV(b)))},
n1:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="R"||a.name==="P"||a===-1||a===-2||H.n1(u)}return!1},
lD:function(a,b){var u,t
if(a==null)return b==null||b.name==="R"||b.name==="P"||b===-1||b===-2||H.n1(b)
if(b==null||b===-1||b.name==="R"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lD(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fo(a,b)}u=J.U(a).constructor
t=H.bV(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aQ(u,null,b,null)},
C:function(a,b){if(a!=null&&!H.lD(a,b))throw H.c(H.b1(a,H.kX(b)))
return a},
aQ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="R"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="R"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aQ(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="P")return!0
if('func' in c)return H.mJ(a,b,c,d)
if('func' in a)return c.name==="bI"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aQ("type" in a?a.type:l,b,s,d)
else if(H.aQ(a,b,s,d))return!0
else{if(!('$i'+"cE" in t.prototype))return!1
r=t.prototype["$a"+"cE"]
q=H.cr(r,u?a.slice(1):l)
return H.aQ(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mS(H.cr(m,u),b,p,d)},
mJ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.pS(h,b,g,d)},
pS:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aQ(c[s],d,a[s],b))return!1}return!0},
qG:function(a,b,c){Object.defineProperty(a,H.J(b),{value:c,enumerable:false,writable:true,configurable:true})},
pQ:function(a){var u,t,s,r,q=H.J($.n0.$1(a)),p=$.kH[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kM[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.J($.mR.$2(a,q))
if(q!=null){p=$.kH[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kM[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kW(u)
$.kH[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kM[q]=u
return u}if(s==="-"){r=H.kW(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.n5(a,u)
if(s==="*")throw H.c(P.j8(q))
if(v.leafTags[q]===true){r=H.kW(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.n5(a,u)},
n5:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lI(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kW:function(a){return J.lI(a,!1,null,!!a.$iN)},
pR:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kW(u)
else return J.lI(u,c,null,null)},
pL:function(){if(!0===$.lH)return
$.lH=!0
H.pM()},
pM:function(){var u,t,s,r,q,p,o,n
$.kH=Object.create(null)
$.kM=Object.create(null)
H.pK()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.n7.$1(q)
if(p!=null){o=H.pR(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pK:function(){var u,t,s,r,q,p,o=C.G()
o=H.ck(C.H,H.ck(C.I,H.ck(C.v,H.ck(C.v,H.ck(C.J,H.ck(C.K,H.ck(C.L(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.n0=new H.kJ(r)
$.mR=new H.kK(q)
$.n7=new H.kL(p)},
ck:function(a,b){return a(b)||b},
nY:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a7("Illegal RegExp pattern ("+String(r)+")",a,null))},
pX:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
pD:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n8:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lL:function(a,b,c){var u=H.pY(a,b,c)
return u},
pY:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n8(b),'g'),H.pD(c))},
fK:function fK(){},
fL:function fL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iX:function iX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i2:function i2(a,b){this.a=a
this.b=b},
hk:function hk(a,b,c){this.a=a
this.b=b
this.c=c},
j9:function j9(a){this.a=a},
l2:function l2(a){this.a=a},
f_:function f_(a){this.a=a
this.b=null},
cy:function cy(){},
iK:function iK(){},
iA:function iA(){},
cv:function cv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iZ:function iZ(a){this.a=a},
fF:function fF(a){this.a=a},
il:function il(a){this.a=a},
jy:function jy(a){this.a=a},
a2:function a2(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ho:function ho(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hp:function hp(a,b){this.a=a
this.$ti=b},
hq:function hq(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
hj:function hj(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ci:function(a){return a},
o6:function(a){return new Int8Array(a)},
bk:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cm(b,a))},
p_:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.pB(a,b,c))
return b},
cP:function cP(){},
bL:function bL(){},
dY:function dY(){},
cQ:function cQ(){},
dZ:function dZ(){},
hV:function hV(){},
hW:function hW(){},
hX:function hX(){},
hY:function hY(){},
hZ:function hZ(){},
e_:function e_(){},
cR:function cR(){},
dd:function dd(){},
de:function de(){},
df:function df(){},
dg:function dg(){},
pE:function(a){return J.m0(a?Object.keys(a):[],null)},
pT:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lI:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fq:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lH==null){H.pL()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.j8("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lN()]
if(r!=null)return r
r=H.pQ(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.lN(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
nX:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.l6(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ag(a,0,4294967295,"length",null))
return J.m0(new Array(a),b)},
m0:function(a,b){return J.lf(H.d(a,[b]))},
lf:function(a){H.kO(a)
a.fixed$length=Array
return a},
U:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dN.prototype
return J.dM.prototype}if(typeof a=="string")return J.bp.prototype
if(a==null)return J.dO.prototype
if(typeof a=="boolean")return J.hi.prototype
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.R)return a
return J.fq(a)},
pG:function(a){if(typeof a=="number")return J.bK.prototype
if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.R)return a
return J.fq(a)},
co:function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.R)return a
return J.fq(a)},
fp:function(a){if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.R)return a
return J.fq(a)},
mY:function(a){if(typeof a=="number")return J.bK.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bR.prototype
return a},
mZ:function(a){if(typeof a=="number")return J.bK.prototype
if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bR.prototype
return a},
dr:function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bR.prototype
return a},
cp:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.R)return a
return J.fq(a)},
nw:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pG(a).p(a,b)},
Q:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).u(a,b)},
b2:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.mY(a).as(a,b)},
lP:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mZ(a).q(a,b)},
nx:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.mY(a).t(a,b)},
du:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pO(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.co(a).j(a,b)},
l4:function(a,b,c){return J.fp(a).k(a,b,c)},
ny:function(a,b){return J.dr(a).E(a,b)},
nz:function(a,b,c){return J.cp(a).hM(a,b,c)},
nA:function(a,b,c,d){return J.cp(a).ih(a,b,c,d)},
nB:function(a,b){return J.dr(a).Y(a,b)},
l5:function(a,b){return J.mZ(a).iv(a,b)},
fs:function(a,b){return J.fp(a).K(a,b)},
nC:function(a,b,c,d){return J.cp(a).iI(a,b,c,d)},
lQ:function(a,b){return J.fp(a).I(a,b)},
nD:function(a){return J.cp(a).giq(a)},
lR:function(a){return J.cp(a).gck(a)},
dv:function(a){return J.U(a).gJ(a)},
bC:function(a){return J.fp(a).gV(a)},
aE:function(a){return J.co(a).gn(a)},
lS:function(a){return J.fp(a).je(a)},
nE:function(a,b){return J.cp(a).ji(a,b)},
nF:function(a,b,c){return J.dr(a).B(a,b,c)},
nG:function(a){return J.dr(a).js(a)},
au:function(a){return J.U(a).i(a)},
a:function a(){},
hi:function hi(){},
dO:function dO(){},
dP:function dP(){},
i6:function i6(){},
bR:function bR(){},
bq:function bq(){},
aT:function aT(a){this.$ti=a},
lg:function lg(a){this.$ti=a},
av:function av(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bK:function bK(){},
dN:function dN(){},
dM:function dM(){},
bp:function bp(){}},P={
oC:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pt()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cl(new P.jA(s),1)).observe(u,{childList:true})
return new P.jz(s,u,t)}else if(self.setImmediate!=null)return P.pu()
return P.pv()},
oD:function(a){self.scheduleImmediate(H.cl(new P.jB(H.n(a,{func:1,ret:-1})),0))},
oE:function(a){self.setImmediate(H.cl(new P.jC(H.n(a,{func:1,ret:-1})),0))},
oF:function(a){P.lo(C.o,H.n(a,{func:1,ret:-1}))},
lo:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.e.a7(a.a,1000)
return P.oL(u<0?0:u,b)},
ml:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.bf]})
u=C.e.a7(a.a,1000)
return P.oM(u<0?0:u,b)},
oL:function(a,b){var u=new P.f5()
u.fb(a,b)
return u},
oM:function(a,b){var u=new P.f5()
u.fc(a,b)
return u},
oG:function(a,b){var u,t,s
b.a=1
try{a.eD(new P.jM(b),new P.jN(b),null)}catch(s){u=H.ak(s)
t=H.cq(s)
P.pV(new P.jO(b,u,t))}},
my:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.h(a.c,"$iaP")
if(u>=4){t=b.c4()
b.a=a.a
b.c=a.c
P.db(b,t)}else{t=H.h(b.c,"$ibj")
b.a=2
b.c=a
a.du(t)}},
db:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.h(g.c,"$iap")
g=g.b
r=s.a
q=s.b
g.toString
P.ky(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.db(h.a,b)}g=h.a
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
if(m){H.h(o,"$iap")
g=g.b
r=o.a
q=o.b
g.toString
P.ky(i,i,g,r,q)
return}l=$.a1
if(l!=n)$.a1=n
else l=i
g=b.c
if(g===8)new P.jS(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jR(u,b,o).$0()}else if((g&2)!==0)new P.jQ(h,u,b).$0()
if(l!=null)$.a1=l
g=u.b
if(!!J.U(g).$icE){if(g.a>=4){k=H.h(q.c,"$ibj")
q.c=null
b=q.bp(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.my(g,q)
return}}j=b.b
k=H.h(j.c,"$ibj")
j.c=null
b=j.bp(k)
g=u.a
r=u.b
if(!g){H.C(r,H.r(j,0))
j.a=4
j.c=r}else{H.h(r,"$iap")
j.a=8
j.c=r}h.a=j
g=j}},
po:function(a,b){if(H.fo(a,{func:1,args:[P.R,P.ax]}))return H.n(a,{func:1,ret:null,args:[P.R,P.ax]})
if(H.fo(a,{func:1,args:[P.R]}))return H.n(a,{func:1,ret:null,args:[P.R]})
throw H.c(P.l6(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pn:function(){var u,t
for(;u=$.cj,u!=null;){$.dq=null
t=u.b
$.cj=t
if(t==null)$.dp=null
u.a.$0()}},
pr:function(){$.ly=!0
try{P.pn()}finally{$.dq=null
$.ly=!1
if($.cj!=null)$.lO().$1(P.mT())}},
mO:function(a){var u=new P.es(H.n(a,{func:1,ret:-1}))
if($.cj==null){$.cj=$.dp=u
if(!$.ly)$.lO().$1(P.mT())}else $.dp=$.dp.b=u},
pq:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cj
if(u==null){P.mO(a)
$.dq=$.dp
return}t=new P.es(a)
s=$.dq
if(s==null){t.b=u
$.cj=$.dq=t}else{t.b=s.b
$.dq=s.b=t
if(t.b==null)$.dp=t}},
pV:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a1
if(C.f===u){P.kA(t,t,C.f,a)
return}u.toString
P.kA(t,t,u,H.n(u.ce(a),s))},
mk:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a1
if(u===C.f){u.toString
return P.lo(a,b)}return P.lo(a,H.n(u.ce(b),t))},
ot:function(a,b){var u,t,s={func:1,ret:-1,args:[P.bf]}
H.n(b,s)
u=$.a1
if(u===C.f){u.toString
return P.ml(a,b)}t=u.dL(b,P.bf)
$.a1.toString
return P.ml(a,H.n(t,s))},
ky:function(a,b,c,d,e){var u={}
u.a=d
P.pq(new P.kz(u,e))},
mK:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a1
if(t===c)return d.$0()
$.a1=c
u=t
try{t=d.$0()
return t}finally{$.a1=u}},
mL:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.C(e,g)
t=$.a1
if(t===c)return d.$1(e)
$.a1=c
u=t
try{t=d.$1(e)
return t}finally{$.a1=u}},
pp:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
t=$.a1
if(t===c)return d.$2(e,f)
$.a1=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a1=u}},
kA:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.ce(d):c.ir(d,-1)
P.mO(d)},
jA:function jA(a){this.a=a},
jz:function jz(a,b,c){this.a=a
this.b=b
this.c=c},
jB:function jB(a){this.a=a},
jC:function jC(a){this.a=a},
f5:function f5(){this.c=0},
kg:function kg(a,b){this.a=a
this.b=b},
kf:function kf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bj:function bj(a,b,c,d,e){var _=this
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
jL:function jL(a,b){this.a=a
this.b=b},
jP:function jP(a,b){this.a=a
this.b=b},
jM:function jM(a){this.a=a},
jN:function jN(a){this.a=a},
jO:function jO(a,b,c){this.a=a
this.b=b
this.c=c},
jS:function jS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jT:function jT(a){this.a=a},
jR:function jR(a,b,c){this.a=a
this.b=b
this.c=c},
jQ:function jQ(a,b,c){this.a=a
this.b=b
this.c=c},
es:function es(a){this.a=a
this.b=null},
iD:function iD(){},
iF:function iF(a,b){this.a=a
this.b=b},
iG:function iG(a,b){this.a=a
this.b=b},
cY:function cY(){},
iE:function iE(){},
bf:function bf(){},
ap:function ap(a,b){this.a=a
this.b=b},
kp:function kp(){},
kz:function kz(a,b){this.a=a
this.b=b},
jZ:function jZ(){},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(a,b){this.a=a
this.b=b},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
o_:function(a,b){return new H.a2([a,b])},
lj:function(a,b){return new H.a2([a,b])},
o1:function(a){return H.pF(a,new H.a2([null,null]))},
dS:function(a){return new P.jX([a])},
lu:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oK:function(a,b,c){var u=new P.eH(a,b,[c])
u.c=a.e
return u},
nU:function(a,b,c){var u,t
if(P.lz(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.f])
C.a.h($.ay,a)
try{P.p2(a,u)}finally{if(0>=$.ay.length)return H.e($.ay,-1)
$.ay.pop()}t=P.mi(b,H.n2(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
le:function(a,b,c){var u,t
if(P.lz(a))return b+"..."+c
u=new P.ah(b)
C.a.h($.ay,a)
try{t=u
t.a=P.mi(t.a,a,", ")}finally{if(0>=$.ay.length)return H.e($.ay,-1)
$.ay.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lz:function(a){var u,t
for(u=$.ay.length,t=0;t<u;++t)if(a===$.ay[t])return!0
return!1},
p2:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.f],"$ab")
u=a.gV(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.C())return
r=H.i(u.gL(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.C()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gL(u);++s
if(!u.C()){if(s<=4){C.a.h(b,H.i(o))
return}q=H.i(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gL(u);++s
for(;u.C();o=n,n=m){m=u.gL(u);++s
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
o0:function(a,b,c){var u=P.o_(b,c)
a.I(0,new P.hr(u,b,c))
return u},
m1:function(a,b){var u,t,s=P.dS(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t)s.h(0,H.C(a[t],b))
return s},
lk:function(a){var u,t={}
if(P.lz(a))return"{...}"
u=new P.ah("")
try{C.a.h($.ay,a)
u.a+="{"
t.a=!0
J.lQ(a,new P.hv(t,u))
u.a+="}"}finally{if(0>=$.ay.length)return H.e($.ay,-1)
$.ay.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jX:function jX(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cg:function cg(a){this.a=a
this.c=this.b=null},
eH:function eH(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hr:function hr(a,b,c){this.a=a
this.b=b
this.c=c},
hs:function hs(){},
y:function y(){},
hu:function hu(){},
hv:function hv(a,b){this.a=a
this.b=b},
ae:function ae(){},
kh:function kh(){},
hw:function hw(){},
el:function el(a,b){this.a=a
this.$ti=b},
k3:function k3(){},
eI:function eI(){},
fb:function fb(){},
ox:function(a,b,c,d){H.l(b,"$ib",[P.m],"$ab")
if(b instanceof Uint8Array)return P.oy(!1,b,c,d)
return},
oy:function(a,b,c,d){var u,t,s=$.no()
if(s==null)return
u=0===c
if(u&&!0)return P.lr(s,b)
t=b.length
d=P.bt(c,d,t)
if(u&&d===t)return P.lr(s,b)
return P.lr(s,b.subarray(c,d))},
lr:function(a,b){if(P.oA(b))return
return P.oB(a,b)},
oB:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ak(t)}return},
oA:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
oz:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ak(t)}return},
mN:function(a,b,c){var u,t,s
H.l(a,"$ib",[P.m],"$ab")
for(u=J.co(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.ak()
if((s&127)!==s)return t-b}return c-b},
lU:function(a,b,c,d,e,f){if(C.e.bi(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
fB:function fB(){},
fC:function fC(){},
c_:function c_(){},
bG:function bG(){},
h_:function h_(){},
hf:function hf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
he:function he(a){this.a=a},
jh:function jh(){},
jj:function jj(){},
kn:function kn(a){this.b=0
this.c=a},
ji:function ji(a){this.a=a},
km:function km(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fr:function(a,b,c){var u
H.n(b,{func:1,ret:P.m,args:[P.f]})
u=H.oh(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a7(a,null,null))},
nR:function(a){if(a instanceof H.cy)return a.i(0)
return"Instance of '"+H.c7(a)+"'"},
o2:function(a,b,c){var u,t
H.C(b,c)
u=J.nX(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.k(u,t,b)
return H.l(u,"$ib",[c],"$ab")},
m2:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bC(a);u.C();)C.a.h(s,H.C(u.gL(u),c))
if(b)return s
return H.l(J.lf(s),"$ib",t,"$ab")},
cZ:function(a,b,c){var u,t=P.m
H.l(a,"$ij",[t],"$aj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.l(a,"$iaT",[t],"$aaT")
u=a.length
c=P.bt(b,c,u)
return H.md(b>0||c<u?C.a.eQ(a,b,c):a)}if(!!J.U(a).$icR)return H.oj(a,b,P.bt(b,c,a.length))
return P.or(a,b,c)},
or:function(a,b,c){var u,t,s,r,q=null
H.l(a,"$ij",[P.m],"$aj")
if(b<0)throw H.c(P.ag(b,0,J.aE(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.ag(c,b,J.aE(a),q,q))
t=J.bC(a)
for(s=0;s<b;++s)if(!t.C())throw H.c(P.ag(b,0,s,q,q))
r=[]
if(u)for(;t.C();)r.push(t.gL(t))
else for(s=b;s<c;++s){if(!t.C())throw H.c(P.ag(c,b,s,q,q))
r.push(t.gL(t))}return H.md(r)},
ol:function(a){return new H.hj(a,H.nY(a,!1,!0,!1))},
mi:function(a,b,c){var u=J.bC(b)
if(!u.C())return a
if(c.length===0){do a+=H.i(u.gL(u))
while(u.C())}else{a+=H.i(u.gL(u))
for(;u.C();)a=a+c+H.i(u.gL(u))}return a},
mo:function(){var u=H.o9()
if(u!=null)return P.ow(u)
throw H.c(P.I("'Uri.base' is not supported"))},
fc:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.l(a,"$ib",[P.m],"$ab")
if(c===C.h){u=$.nu().b
if(typeof b!=="string")H.A(H.as(b))
u=u.test(b)}else u=!1
if(u)return b
H.C(b,H.at(c,"c_",0))
t=c.giH().cl(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c8(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nN:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nO:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dF:function(a){if(a>=10)return""+a
return"0"+a},
lY:function(a,b){return new P.b6(1e6*b+1000*a)},
dK:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.au(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nR(a)},
dx:function(a){return new P.aR(!1,null,null,a)},
l6:function(a,b,c){return new P.aR(!0,a,b,c)},
e4:function(a,b){return new P.c9(null,null,!0,a,b,"Value not in range")},
ag:function(a,b,c,d,e){return new P.c9(b,c,!0,a,d,"Invalid value")},
bt:function(a,b,c){if(0>a||a>c)throw H.c(P.ag(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ag(b,a,c,"end",null))
return b}return c},
lm:function(a,b){if(typeof a!=="number")return a.S()
if(a<0)throw H.c(P.ag(a,0,null,b,null))},
Z:function(a,b,c,d,e){var u=H.a3(e==null?J.aE(b):e)
return new P.hg(u,!0,a,c,"Index out of range")},
I:function(a){return new P.ja(a)},
j8:function(a){return new P.j7(a)},
mh:function(a){return new P.cb(a)},
bm:function(a){return new P.fI(a)},
D:function(a){return new P.eA(a)},
a7:function(a,b,c){return new P.h9(a,b,c)},
o3:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.m]})
u=H.d([],[c])
C.a.sn(u,a)
for(t=0;t<a;++t)C.a.k(u,t,b.$1(t))
return u},
lK:function(a){H.pT(a)},
ow:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.E(a,4)^58)*3|C.b.E(a,0)^100|C.b.E(a,1)^97|C.b.E(a,2)^116|C.b.E(a,3)^97)>>>0
if(u===0)return P.mn(e<e?C.b.B(a,0,e):a,5,f).geI()
else if(u===32)return P.mn(C.b.B(a,5,e),0,f).geI()}t=new Array(8)
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
if(typeof r!=="number")return r.jA()
if(r>=0)if(P.mM(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.p()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.S()
if(typeof n!=="number")return H.E(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.b.ac(a,"..",o)))j=n>o+2&&C.b.ac(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.ac(a,"file",0)){if(q<=0){if(!C.b.ac(a,"/",o)){i="file:///"
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
n=h}k="file"}else if(C.b.ac(a,"http",0)){if(t&&p+3===o&&C.b.ac(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aZ(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.ac(a,"https",0)){if(t&&p+4===o&&C.b.ac(a,"443",p+1)){g=o-4
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
m-=0}return new P.k6(a,r,q,p,o,n,m,k)}return P.oN(a,0,e,r,q,p,o,n,m,k)},
mq:function(a){var u=P.f
return C.a.iM(H.d(a.split("&"),[u]),P.lj(u,u),new P.jf(C.h),[P.z,P.f,P.f])},
ov:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jc(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.Y(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fr(C.b.B(a,s,t),n,n)
if(typeof p!=="number")return p.as()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.e(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fr(C.b.B(a,s,c),n,n)
if(typeof p!=="number")return p.as()
if(p>255)k.$2(l,s)
if(r>=u)return H.e(j,r)
j[r]=p
return j},
mp:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.jd(a)
t=new P.je(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.m])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.Y(a,r)
if(n===58){if(r===b){++r
if(C.b.Y(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaz(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.ov(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.e.aR(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
oN:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oU(a,b,d)
else{if(d===b)P.dl(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oV(a,u,e-1):""
s=P.oR(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.E(g)
q=r<g?P.oT(P.fr(C.b.B(a,r,g),new P.ki(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oS(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.S()
o=h<i?P.lv(a,h+1,i,n):n
return new P.ch(j,t,s,q,p,o,i<c?P.oQ(a,i+1,c):n)},
mC:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dl:function(a,b,c){throw H.c(P.a7(c,a,b))},
oT:function(a,b){if(a!=null&&a===P.mC(b))return
return a},
oR:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.Y(a,b)===91){if(typeof c!=="number")return c.t()
u=c-1
if(C.b.Y(a,u)!==93)P.dl(a,b,"Missing end `]` to match `[` in host")
P.mp(a,b+1,u)
return C.b.B(a,b,c).toLowerCase()}if(typeof c!=="number")return H.E(c)
t=b
for(;t<c;++t)if(C.b.Y(a,t)===58){P.mp(a,b,c)
return"["+a+"]"}return P.oX(a,b,c)},
oX:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.E(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.Y(a,u)
if(q===37){p=P.mI(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ah("")
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
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ah("")
if(t<u){s.a+=C.b.B(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.dl(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.Y(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ah("")
n=C.b.B(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mD(q)
u+=l
t=u}}}}if(s==null)return C.b.B(a,b,c)
if(t<c){n=C.b.B(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oU:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mF(C.b.E(a,b)))P.dl(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.E(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dl(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.B(a,b,c)
return P.oO(t?a.toLowerCase():a)},
oO:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oV:function(a,b,c){return P.dm(a,b,c,C.W,!1)},
oS:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dm(a,b,c,C.A,!0):C.j.jS(d,new P.kj(),P.f).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a1(u,"/"))u="/"+u
return P.oW(u,e,f)},
oW:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a1(a,"/"))return P.oY(a,!u||c)
return P.oZ(a)},
lv:function(a,b,c,d){var u,t={}
H.l(d,"$iz",[P.f,null],"$az")
if(a!=null){if(d!=null)throw H.c(P.dx("Both query and queryParameters specified"))
return P.dm(a,b,c,C.l,!0)}if(d==null)return
u=new P.ah("")
t.a=""
d.I(0,new P.kk(new P.kl(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oQ:function(a,b,c){return P.dm(a,b,c,C.l,!0)},
mI:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.Y(a,b+1)
t=C.b.Y(a,p)
s=H.kI(u)
r=H.kI(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.e.aR(q,4)
if(p>=8)return H.e(C.n,p)
p=(C.n[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c8(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.B(a,b,b+3).toUpperCase()
return},
mD:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.m])
C.a.k(t,0,37)
C.a.k(t,1,C.b.E(o,a>>>4))
C.a.k(t,2,C.b.E(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.m])
for(q=0;--r,r>=0;s=128){p=C.e.hZ(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.E(o,p>>>4))
C.a.k(t,q+2,C.b.E(o,p&15))
q+=3}}return P.cZ(t,0,null)},
dm:function(a,b,c,d,e){var u=P.mH(a,b,c,H.l(d,"$ib",[P.m],"$ab"),e)
return u==null?C.b.B(a,b,c):u},
mH:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.l(d,"$ib",[P.m],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.S()
if(typeof c!=="number")return H.E(c)
if(!(t<c))break
c$0:{q=C.b.Y(a,t)
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
if(p){P.dl(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.Y(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mD(q)}}if(r==null)r=new P.ah("")
r.a+=C.b.B(a,s,t)
r.a+=H.i(o)
if(typeof n!=="number")return H.E(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.S()
if(s<c)r.a+=C.b.B(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mG:function(a){if(C.b.a1(a,"."))return!0
return C.b.eb(a,"/.")!==-1},
oZ:function(a){var u,t,s,r,q,p,o
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
oY:function(a,b){var u,t,s,r,q,p
if(!P.mG(a))return!b?P.mE(a):a
u=H.d([],[P.f])
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
C.a.k(u,0,P.mE(u[0]))}return C.a.m(u,"/")},
mE:function(a){var u,t,s,r=a.length
if(r>=2&&P.mF(J.ny(a,0)))for(u=1;u<r;++u){t=C.b.E(a,u)
if(t===58)return C.b.B(a,0,u)+"%3A"+C.b.a9(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.e(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oP:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.E(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dx("Invalid URL encoding"))}}return u},
lw:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.E(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.B(a,b,c)
else r=new H.u(C.b.B(a,b,c))}else{r=H.d([],[P.m])
for(s=a.length,q=b;q<c;++q){t=C.b.E(a,q)
if(t>127)throw H.c(P.dx("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.dx("Truncated URI"))
C.a.h(r,P.oP(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.l(r,"$ib",[P.m],"$ab")
return new P.ji(!1).cl(r)},
mF:function(a){var u=a|32
return 97<=u&&u<=122},
mn:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.m])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.E(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a7(m,a,t))}}if(s<0&&t>b)throw H.c(P.a7(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.E(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaz(l)
if(r!==44||t!==p+7||!C.b.ac(a,"base64",p+1))throw H.c(P.a7("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.iX(0,a,o,u)
else{n=P.mH(a,o,u,C.l,!0)
if(n!=null)a=C.b.aZ(a,o,u,n)}return new P.jb(a,l,c)},
p0:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.o3(22,new P.kt(),P.S),n=new P.ks(o),m=new P.ku(),l=new P.kv(),k=H.h(n.$2(0,225),"$iS")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(14,225),"$iS")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(15,225),"$iS")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(1,225),"$iS")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(2,235),"$iS")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(3,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(4,229),"$iS")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(5,229),"$iS")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(6,231),"$iS")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(7,231),"$iS")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.h(n.$2(8,8),"$iS"),"]",5)
k=H.h(n.$2(9,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(16,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(17,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(10,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(18,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(19,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(11,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(12,236),"$iS")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.h(n.$2(13,237),"$iS")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.h(n.$2(20,245),"$iS"),"az",21)
k=H.h(n.$2(21,245),"$iS")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mM:function(a,b,c,d,e){var u,t,s,r,q
H.l(e,"$ib",[P.m],"$ab")
u=$.nv()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.b.E(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.k(e,q>>>5,t)}return d},
T:function T(){},
az:function az(a,b){this.a=a
this.b=b},
p:function p(){},
b6:function b6(a){this.a=a},
fW:function fW(){},
fX:function fX(){},
bH:function bH(){},
fv:function fv(){},
e1:function e1(){},
aR:function aR(a,b,c,d){var _=this
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
hg:function hg(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ja:function ja(a){this.a=a},
j7:function j7(a){this.a=a},
cb:function cb(a){this.a=a},
fI:function fI(a){this.a=a},
i5:function i5(){},
eb:function eb(){},
fQ:function fQ(a){this.a=a},
eA:function eA(a){this.a=a},
h9:function h9(a,b,c){this.a=a
this.b=b
this.c=c},
bI:function bI(){},
m:function m(){},
j:function j(){},
b7:function b7(){},
b:function b(){},
z:function z(){},
P:function P(){},
ab:function ab(){},
R:function R(){},
ax:function ax(){},
f:function f(){},
ah:function ah(a){this.a=a},
jf:function jf(a){this.a=a},
jc:function jc(a){this.a=a},
jd:function jd(a){this.a=a},
je:function je(a,b){this.a=a
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
ki:function ki(a,b){this.a=a
this.b=b},
kj:function kj(){},
kl:function kl(a,b){this.a=a
this.b=b},
kk:function kk(a){this.a=a},
jb:function jb(a,b,c){this.a=a
this.b=b
this.c=c},
kt:function kt(){},
ks:function ks(a){this.a=a},
ku:function ku(){},
kv:function kv(){},
k6:function k6(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jG:function jG(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
pz:function(a){var u,t=J.U(a)
if(!!t.$ibo){u=t.gdO(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fa(a.data,a.height,a.width)},
py:function(a){if(a instanceof P.fa)return{data:a.a,height:a.b,width:a.c}
return a},
bw:function(a){var u,t,s,r,q
if(a==null)return
u=P.lj(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r){q=H.J(t[r])
u.k(0,q,a[q])}return u},
px:function(a){var u={}
a.I(0,new P.kB(u))
return u},
k8:function k8(){},
ka:function ka(a,b){this.a=a
this.b=b},
fa:function fa(a,b,c){this.a=a
this.b=b
this.c=c},
kB:function kB(a){this.a=a},
k9:function k9(a,b){this.a=a
this.b=b},
h5:function h5(a,b){this.a=a
this.b=b},
h6:function h6(){},
h7:function h7(){},
jW:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oJ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jY:function jY(){},
an:function an(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b9:function b9(){},
hm:function hm(){},
bc:function bc(){},
i3:function i3(){},
ia:function ia(){},
cV:function cV(){},
iH:function iH(){},
q:function q(){},
bg:function bg(){},
iW:function iW(){},
eF:function eF(){},
eG:function eG(){},
eQ:function eQ(){},
eR:function eR(){},
f1:function f1(){},
f2:function f2(){},
f8:function f8(){},
f9:function f9(){},
S:function S(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(a){this.a=a},
fA:function fA(){},
bX:function bX(){},
i4:function i4(){},
et:function et(){},
dz:function dz(){},
e3:function e3(){},
ca:function ca(){},
e7:function e7(){},
ee:function ee(){},
ej:function ej(){},
iz:function iz(){},
eY:function eY(){},
eZ:function eZ(){}},W={
lT:function(){var u=document.createElement("a")
return u},
l8:function(){var u=document.createElement("canvas")
return u},
nP:function(a,b,c){var u=document.body,t=(u&&C.t).af(u,a,b,c)
t.toString
u=W.G
u=new H.d8(new W.ar(t),H.n(new W.fZ(),{func:1,ret:P.T,args:[u]}),[u])
return H.h(u.gaJ(u),"$iV")},
nQ:function(a){H.h(a,"$ik")
return"wheel"},
cB:function(a){var u,t,s,r="element tag unavailable"
try{u=J.cp(a)
t=u.geB(a)
if(typeof t==="string")r=u.geB(a)}catch(s){H.ak(s)}return r},
nT:function(a){var u,t=document.createElement("input"),s=H.h(t,"$icH")
try{s.type=a}catch(u){H.ak(u)}return s},
jV:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mA:function(a,b,c,d){var u=W.jV(W.jV(W.jV(W.jV(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
aa:function(a,b,c,d,e){var u=W.mQ(new W.jK(c),W.o)
if(u!=null&&!0)J.nA(a,b,u,!1)
return new W.jJ(a,b,u,!1,[e])},
mz:function(a){var u=W.lT(),t=window.location
u=new W.bS(new W.k2(u,t))
u.f2(a)
return u},
oH:function(a,b,c,d){H.h(a,"$iV")
H.J(b)
H.J(c)
H.h(d,"$ibS")
return!0},
oI:function(a,b,c,d){var u,t,s
H.h(a,"$iV")
H.J(b)
H.J(c)
u=H.h(d,"$ibS").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mB:function(){var u=P.f,t=P.m1(C.p,u),s=H.r(C.p,0),r=H.n(new W.ke(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.kd(t,P.dS(u),P.dS(u),P.dS(u),null)
t.fa(null,new H.hz(C.p,r,[s,u]),q,null)
return t},
mQ:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a1
if(u===C.f)return a
return u.dL(a,b)},
x:function x(){},
ft:function ft(){},
dw:function dw(){},
fu:function fu(){},
cu:function cu(){},
bY:function bY(){},
bD:function bD(){},
bZ:function bZ(){},
cx:function cx(){},
bE:function bE(){},
cz:function cz(){},
fM:function fM(){},
Y:function Y(){},
cA:function cA(){},
fN:function fN(){},
b4:function b4(){},
b5:function b5(){},
fO:function fO(){},
fP:function fP(){},
fS:function fS(){},
aH:function aH(){},
fT:function fT(){},
dH:function dH(){},
dI:function dI(){},
fU:function fU(){},
fV:function fV(){},
jE:function jE(a,b){this.a=a
this.b=b},
V:function V(){},
fZ:function fZ(){},
o:function o(){},
k:function k(){},
aI:function aI(){},
cD:function cD(){},
h4:function h4(){},
h8:function h8(){},
aS:function aS(){},
hd:function hd(){},
c2:function c2(){},
bo:function bo(){},
cG:function cG(){},
cH:function cH(){},
b8:function b8(){},
dT:function dT(){},
hO:function hO(){},
cM:function cM(){},
hP:function hP(){},
hQ:function hQ(a){this.a=a},
hR:function hR(){},
hS:function hS(a){this.a=a},
aU:function aU(){},
hT:function hT(){},
af:function af(){},
ar:function ar(a){this.a=a},
G:function G(){},
cS:function cS(){},
aV:function aV(){},
i8:function i8(){},
ij:function ij(){},
ik:function ik(a){this.a=a},
im:function im(){},
aW:function aW(){},
ix:function ix(){},
aX:function aX(){},
iy:function iy(){},
aY:function aY(){},
iB:function iB(){},
iC:function iC(a){this.a=a},
aL:function aL(){},
be:function be(){},
ec:function ec(){},
iI:function iI(){},
iJ:function iJ(){},
d_:function d_(){},
aZ:function aZ(){},
aM:function aM(){},
iL:function iL(){},
iM:function iM(){},
iQ:function iQ(){},
b_:function b_(){},
b0:function b0(){},
iU:function iU(){},
iV:function iV(){},
bQ:function bQ(){},
jg:function jg(){},
jv:function jv(){},
bi:function bi(){},
d9:function d9(){},
da:function da(){},
jF:function jF(){},
ev:function ev(){},
jU:function jU(){},
eN:function eN(){},
k7:function k7(){},
kb:function kb(){},
jD:function jD(){},
jH:function jH(a){this.a=a},
jI:function jI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lt:function lt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jJ:function jJ(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jK:function jK(a){this.a=a},
bS:function bS(a){this.a=a},
H:function H(){},
e0:function e0(a){this.a=a},
i0:function i0(a){this.a=a},
i_:function i_(a,b,c){this.a=a
this.b=b
this.c=c},
eV:function eV(){},
k4:function k4(){},
k5:function k5(){},
kd:function kd(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ke:function ke(){},
kc:function kc(){},
dL:function dL(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aC:function aC(){},
k2:function k2(a,b){this.a=a
this.b=b},
fd:function fd(a){this.a=a},
ko:function ko(a){this.a=a},
eu:function eu(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eO:function eO(){},
eP:function eP(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
dh:function dh(){},
di:function di(){},
eW:function eW(){},
eX:function eX(){},
f0:function f0(){},
f3:function f3(){},
f4:function f4(){},
dj:function dj(){},
dk:function dk(){},
f6:function f6(){},
f7:function f7(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){}},O={
l9:function(a){var u=new O.a5([a])
u.bI(a)
return u},
a5:function a5(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cK:function cK(){this.b=this.a=null},
m3:function(){var u,t,s=new O.dW()
s.sfj(O.l9(V.am))
s.e.bj(s.gfT(),s.gfV())
u=new O.ba(s,"emission")
u.c=new A.al(!1,!1,!1)
u.f=new V.a6(0,0,0)
s.f=u
u=new O.ba(s,"ambient")
u.c=new A.al(!1,!1,!1)
u.f=new V.a6(0,0,0)
s.r=u
u=new O.ba(s,"diffuse")
u.c=new A.al(!1,!1,!1)
u.f=new V.a6(0,0,0)
s.x=u
u=new O.ba(s,"invDiffuse")
u.c=new A.al(!1,!1,!1)
u.f=new V.a6(0,0,0)
s.y=u
u=new O.hG(s,"specular")
u.c=new A.al(!1,!1,!1)
u.f=new V.a6(0,0,0)
u.ch=100
s.z=u
u=new O.hC(s,"bump")
u.c=new A.al(!1,!1,!1)
s.Q=u
s.ch=null
u=new O.ba(s,"reflect")
u.c=new A.al(!1,!1,!1)
u.f=new V.a6(0,0,0)
s.cx=u
u=new O.hF(s,"refract")
u.c=new A.al(!1,!1,!1)
u.f=new V.a6(0,0,0)
u.ch=1
s.cy=u
u=new O.hB(s,"alpha")
u.c=new A.al(!1,!1,!1)
u.f=1
s.db=u
u=new D.dR()
u.bI(D.ad)
u.sf4(H.d([],[D.dG]))
u.shD(H.d([],[D.bM]))
u.sf6(H.d([],[D.ea]))
u.y=u.x=null
u.cS(u.gfR(),u.ghr(),u.ghv())
s.dx=u
t=new O.hE()
t.b=new V.aF(0,0,0,0)
t.c=1
t.d=10
t.e=!1
s.dy=t
t=u.x
u=t==null?u.x=D.W():t
u.h(0,s.ghO())
u=s.dx
t=u.y
u=t==null?u.y=D.W():t
u.h(0,s.gbm())
s.fr=null
return s},
dW:function dW(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hH:function hH(a,b){this.a=a
this.b=b},
hI:function hI(){},
hJ:function hJ(a,b){this.a=a
this.b=b},
hK:function hK(){},
hL:function hL(a,b){this.a=a
this.b=b},
hM:function hM(){},
hB:function hB(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cJ:function cJ(){},
hC:function hC(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ba:function ba(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hE:function hE(){var _=this
_.e=_.d=_.c=_.b=null},
hF:function hF(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hG:function hG(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bP:function bP(){}},E={
lc:function(){var u=new E.aq()
u.a=""
u.b=!0
u.sf1(0,O.l9(E.aq))
u.y.bj(u.giY(),u.gj0())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sab(0,null)
u.sbg(null)
u.saX(null)
return u},
om:function(a,b){var u=new E.ie(a)
u.eY(a,b)
return u},
os:function(a,b,c,d,e){var u,t,s=J.U(a)
if(!!s.$ibZ)return E.mj(a,!0,!0,!0,!1)
u=W.l8()
t=u.style
t.width="100%"
t.height="100%"
s.gck(a).h(0,u)
return E.mj(u,!0,!0,!0,!1)},
mj:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ef(),j=H.h(C.i.cQ(a,"webgl2",P.o1(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ica")
if(j==null)H.A(P.D("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.om(j,a)
u=new T.iN(j)
H.a3(j.getParameter(3379))
u.c=H.a3(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.em(a)
t=new X.hl()
t.c=new X.aB(!1,!1,!1)
t.shG(P.dS(P.m))
u.b=t
t=new X.hU(u)
t.f=0
t.r=V.bO()
t.x=V.bO()
t.ch=t.Q=1
u.c=t
t=new X.ht(u)
t.r=0
t.x=V.bO()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iT(u)
t.f=V.bO()
t.r=V.bO()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfw(H.d([],[[P.cY,P.R]]))
t=u.z
s=document
r=W.af
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.aa(s,"contextmenu",H.n(u.gh2(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.aa(a,"focus",H.n(u.gh8(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.aa(a,"blur",H.n(u.gfX(),o),!1,p))
t=u.z
n=W.b8
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.aa(s,"keyup",H.n(u.ghc(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.aa(s,"keydown",H.n(u.gha(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.aa(a,"mousedown",H.n(u.ghg(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.aa(a,"mouseup",H.n(u.ghk(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.aa(a,l,H.n(u.ghi(),q),!1,r))
n=u.z
m=W.bi;(n&&C.a).h(n,W.aa(a,H.J(W.nQ(a)),H.n(u.ghm(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.aa(s,l,H.n(u.gh4(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.aa(s,"mouseup",H.n(u.gh6(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.aa(s,"pointerlockchange",H.n(u.gho(),o),!1,p))
p=u.z
o=W.b0
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.aa(a,"touchstart",H.n(u.ghB(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.aa(a,"touchend",H.n(u.ghx(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.aa(a,"touchmove",H.n(u.ghz(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.az(Date.now(),!1)
k.cy=0
k.dw()
return k},
fD:function fD(){},
aq:function aq(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ie:function ie(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ig:function ig(a){this.a=a},
ih:function ih(a){this.a=a},
ii:function ii(a){this.a=a},
ef:function ef(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iP:function iP(a){this.a=a}},Z={
ls:function(a,b,c){var u
H.l(c,"$ib",[P.m],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.ci(c)),35044)
a.bindBuffer(b,null)
return new Z.er(b,u)},
aO:function(a){return new Z.bv(a)},
er:function er(a,b){this.a=a
this.b=b},
dA:function dA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jw:function jw(a){this.a=a},
dB:function dB(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bJ:function bJ(a,b,c){this.a=a
this.b=b
this.c=c},
bv:function bv(a){this.a=a}},D={
W:function(){var u=new D.c0()
u.sal(null)
u.saP(null)
u.c=null
u.d=0
return u},
fG:function fG(){},
c0:function c0(){var _=this
_.d=_.c=_.b=_.a=null},
h1:function h1(a){this.a=a},
h2:function h2(a){this.a=a},
B:function B(){this.b=null},
c3:function c3(a){this.b=null
this.$ti=a},
c4:function c4(a){this.b=null
this.$ti=a},
K:function K(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
dG:function dG(){},
ad:function ad(){},
dR:function dR(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
bM:function bM(){var _=this
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ea:function ea(){}},X={dC:function dC(a,b){this.a=a
this.b=b},dQ:function dQ(a,b){this.a=a
this.b=b},hl:function hl(){var _=this
_.d=_.c=_.b=_.a=null},dU:function dU(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ht:function ht(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aB:function aB(a,b,c){this.a=a
this.b=b
this.c=c},bs:function bs(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hU:function hU(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cN:function cN(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},i9:function i9(){},eh:function eh(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iT:function iT(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},em:function em(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nS:function(a){var u=new X.ha(),t=new V.aF(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.mf
if(t==null){t=V.me(0,0,1,1)
$.mf=t}u.r=t
return u},
dD:function dD(){},
ha:function ha(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e2:function e2(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ed:function ed(){}},V={
l3:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.bi(a-b,u)
return(a<0?a+u:a)+b},
O:function(a,b,c){if(a==null)return C.b.ah("null",c)
return C.b.ah(C.c.eE(Math.abs(a-0)<$.L().a?0:a,b),c+b+1)},
cn:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.p],"$ab")
u=H.d([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.v)(a),++r){q=V.O(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.k(u,p,C.b.ah(u[p],s))}return u},
lJ:function(a){return C.c.jp(Math.pow(2,C.S.cv(Math.log(H.pw(a))/Math.log(2))))},
cL:function(){var u=$.hN
return u==null?$.hN=V.bb(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bb:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.am(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
m7:function(a,b,c){return V.bb(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
ll:function(a,b,c,d){return V.bb(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
m4:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bb(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
m5:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bb(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
m6:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bb(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
bO:function(){var u=$.mb
return u==null?$.mb=new V.a9(0,0):u},
o7:function(){var u=$.cT
return u==null?$.cT=new V.a4(0,0,0):u},
me:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e5(a,b,c,d)},
d7:function(){var u=$.mw
return u==null?$.mw=new V.M(0,0,0):u},
a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h0:function h0(a){this.a=a},
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
am:function am(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
bd:function bd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e5:function e5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
X:function X(a,b){this.a=a
this.b=b},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
bu:function bu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a_:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.D("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.E(a,0)
t=C.b.E(b,0)
s=new V.id()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
w:function(a){var u=new V.io()
u.eZ(a)
return u},
iS:function(){var u=new V.iR(),t=P.f
u.si1(new H.a2([t,V.cX]))
u.si4(new H.a2([t,V.d2]))
u.c=null
return u},
bl:function bl(){},
aA:function aA(){},
dV:function dV(){},
aw:function aw(){this.a=null},
id:function id(){this.b=this.a=null},
io:function io(){this.a=null},
cX:function cX(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eg:function eg(a,b,c){this.a=a
this.b=b
this.c=c},
d2:function d2(a){this.b=a
this.c=null},
iR:function iR(){this.c=this.b=this.a=null},
d3:function d3(a){this.b=a
this.a=this.c=null},
pW:function(a){P.ot(C.P,new V.kY(a))},
oo:function(a){var u=new V.is()
u.f0(a,!0)
return u},
bF:function bF(){},
kY:function kY(a){this.a=a},
fR:function fR(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hb:function hb(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hc:function hc(a){var _=this
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
is:function is(){this.b=this.a=null},
iu:function iu(a){this.a=a},
it:function it(a){this.a=a},
iv:function iv(a){this.a=a}},U={
la:function(){var u=new U.fH()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
fJ:function(a){var u=new U.dE()
u.a=a
return u},
ld:function(){var u=new U.cF()
u.bI(U.ac)
u.bj(u.gf7(),u.ght())
u.e=null
u.f=V.cL()
u.r=0
return u},
fH:function fH(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dE:function dE(){this.b=this.a=null},
cF:function cF(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ac:function ac(){},
e6:function e6(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
en:function en(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
eo:function eo(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ep:function ep(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dJ:function dJ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
o4:function(a,b){var u=a.b9,t=new A.hA(b,u)
t.f_(b,u)
t.eX(a,b)
return t},
o5:function(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
H.l(b0,"$ib",[A.aG],"$ab")
H.l(b1,"$ib",[A.aJ],"$ab")
H.l(b2,"$ib",[A.aK],"$ab")
u="MaterialLight_"+a1.gar(a1)+a2.gar(a2)+a3.gar(a3)+a4.gar(a4)+a5.gar(a5)+a6.gar(a6)+a7.gar(a7)+a8.gar(a8)+a9.gar(a9)+"_"
u+=a?"1":"0"
u+=b?"1":"0"
u+=c?"1":"0"
u=u+"0_"+a0
t=b0.length
if(t>0){u+="_Dir"
for(s=0;s<b0.length;b0.length===t||(0,H.v)(b0),++s)u+="_"+H.i(b0[s].a)}t=b1.length
if(t>0){u+="_Point"
for(s=0;s<b1.length;b1.length===t||(0,H.v)(b1),++s)u+="_"+H.i(b1[s].a)}t=b2.length
if(t>0){u+="_Spot"
for(s=0;s<b2.length;b2.length===t||(0,H.v)(b2),++s)u+="_"+H.i(b2[s].a)}for(t=b0.length,r=0,q=!1,s=0;s<t;++s,q=!0)r+=b0[s].b
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
e=$.bA()
if(j){t=$.bz()
e=new Z.bv(e.a|t.a)}if(i){t=$.by()
e=new Z.bv(e.a|t.a)}if(h){t=$.bB()
e=new Z.bv(e.a|t.a)}if(g){t=$.bx()
e=new Z.bv(e.a|t.a)}return new A.hD(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,r,o,k,o,q,f,!0,!1,!1,n,q,l,j,i,!1,h,g,!1,b,c,!1,a0,u.charCodeAt(0)==0?u:u,e)},
kw:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
kx:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.kw(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.l0(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
p6:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.kw(b,t,"emission")
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
p3:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.kx(b,t,"ambient")
b.a+="\n"},
p4:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.kx(b,t,"diffuse")
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
p7:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.kx(b,t,"invDiffuse")
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
pd:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.kx(b,t,"specular")
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
p9:function(a,b){var u,t,s
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
pb:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.kw(b,t,"reflect")
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
pc:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.kw(b,t,"refract")
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
p5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.i(u)
s=A.l0(t)
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
r=[P.f]
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
pa:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.i(u)
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
pe:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.i(u)
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
p8:function(a,b){var u,t
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
u=b.a+="   return "+C.a.m(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
pf:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.ah("")
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
A.p6(a,i)
A.p3(a,i)
A.p4(a,i)
A.p7(a,i)
A.pd(a,i)
t=a.cy
if(t){r=i.a+="// === Enviromental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.pb(a,i)
A.pc(a,i)}A.p9(a,i)
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
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.v)(q),++n)A.p5(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.v)(q),++n)A.pa(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.v)(q),++n)A.pe(a,q[n],i)
A.p8(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.d([],[P.f])
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
if(0>=r.length)return H.e(r,0)
i.a+=l+(r[0].toUpperCase()+C.b.a9(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.v)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.e(r,0)
i.a+=l+(r[0].toUpperCase()+C.b.a9(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.v)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.e(r,0)
i.a+=l+(r[0].toUpperCase()+C.b.a9(r,1))+"Values(norm);\n"}if(a.cx<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
u=i.a+="   vec4 objClr = vec4("+C.a.m(m," + ")+", alpha);\n"
if(s)u=i.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
pg:function(a,b){var u,t,s
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
pi:function(a,b){var u
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
ph:function(a,b){var u
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
pk:function(a,b){var u,t
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
pl:function(a,b){var u,t
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
pj:function(a,b){var u
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
pm:function(a,b){var u
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
return a[0].toUpperCase()+C.b.a9(a,1)},
lp:function(a,b,c,d,e){var u=new A.j0(a,c,e)
u.f=d
u.sic(P.o2(d,0,P.m))
return u},
dy:function dy(a,b,c){this.a=a
this.b=b
this.c=c},
fw:function fw(a){this.a=a},
al:function al(a,b,c){this.a=a
this.b=b
this.c=c},
hA:function hA(a,b){var _=this
_.dS=_.jJ=_.dR=_.bu=_.b9=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jR=_.jQ=_.jP=_.ct=_.cs=_.cr=_.cq=_.cp=_.co=_.e3=_.jO=_.e2=_.e1=_.jN=_.e0=_.e_=_.dZ=_.jM=_.dY=_.dX=_.dW=_.jL=_.dV=_.dU=_.jK=_.dT=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aG:function aG(a,b){this.a=a
this.b=b},
aJ:function aJ(a,b){this.a=a
this.b=b},
aK:function aK(a,b){this.a=a
this.b=b},
hD:function hD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.b9=b3
_.bu=b4},
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
cW:function cW(){},
ei:function ei(){},
j5:function j5(a){this.a=a},
aN:function aN(a,b,c){this.a=a
this.c=b
this.d=c},
j2:function j2(a,b,c){this.a=a
this.c=b
this.d=c},
j3:function j3(a,b,c){this.a=a
this.c=b
this.d=c},
j4:function j4(a,b,c){this.a=a
this.c=b
this.d=c},
j0:function j0(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ai:function ai(a,b,c){this.a=a
this.c=b
this.d=c},
j1:function j1(a,b,c){this.a=a
this.c=b
this.d=c},
a0:function a0(a,b,c){this.a=a
this.c=b
this.d=c},
d4:function d4(a,b,c){this.a=a
this.c=b
this.d=c},
j6:function j6(a,b,c){this.a=a
this.c=b
this.d=c},
d5:function d5(a,b,c){this.a=a
this.c=b
this.d=c},
aD:function aD(a,b,c){this.a=a
this.c=b
this.d=c},
ce:function ce(a,b,c){this.a=a
this.c=b
this.d=c},
ao:function ao(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lF:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.aj,P.p,P.p]})
u=F.ln()
F.dn(u,b,c,d,a,1,0,0,1)
F.dn(u,b,c,d,a,0,1,0,3)
F.dn(u,b,c,d,a,0,0,1,2)
F.dn(u,b,c,d,a,-1,0,0,0)
F.dn(u,b,c,d,a,0,-1,0,0)
F.dn(u,b,c,d,a,0,0,-1,3)
u.ay()
return u},
kr:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dn:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={}
H.n(c,{func:1,ret:-1,args:[F.aj,P.p,P.p]})
u=a1+a2
t=u+a3
s=a2+a3
r=a3+a1
q=new V.M(t,s+a1,r+a2)
e.a=q
p=a1-a2
o=a2-a3
n=a3-a1
m=e.b=new V.M(p+a3,o+a1,n+a2)
l=new V.M(p-a3,o-a1,n-a2)
e.c=l
k=e.d=new V.M(u-a3,s-a1,r-a2)
if(t>0){e.d=m
e.b=k
t=m
u=k}else{t=k
u=m}for(r=t,t=u,u=q,s=l,j=0;j<a4;++j,i=r,r=u,u=t,t=s,s=i){e.a=t
e.b=s
e.c=r
e.d=u}h=F.kr(u)
g=F.kr(e.b)
f=F.lM(d,a0,new F.kq(e,F.kr(e.c),F.kr(e.d),g,h,c),b)
if(f!=null)a.bd(f)},
mW:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(d,{func:1,ret:P.p,args:[P.p]})
if(e<3)return
u=F.ln()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.aj])
q=u.a
p=new V.M(0,0,t)
p=p.w(0,Math.sqrt(p.D(p)))
C.a.h(r,q.ik(new V.bd(a,-1,-1,-1),new V.aF(1,1,1,1),new V.a4(0,0,c),new V.M(0,0,t),new V.a9(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.E(k)
j=new V.M(m,l,t).w(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.eq(new V.bd(a,-1,-1,-1),null,new V.aF(i,g,h,1),new V.a4(m*k,l*k,c),new V.M(0,0,t),new V.a9(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.ii(r)
return u},
mU:function(a,b,c){return F.pA(!0,a,1,new F.kC(1,c),b)},
pA:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.p,args:[P.p,P.p]})
if(e<3)return
if(c<1)return
u=F.lM(c,e,new F.kE(d),null)
if(u==null)return
u.ay()
u.cc()
if(b)u.bd(F.mW(3,!1,1,new F.kF(d),e))
u.bd(F.mW(1,!0,-1,new F.kG(d),e))
return u},
n9:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kZ()
t=F.lF(a,null,new F.l_(s,1),b)
t.cc()
return t},
nb:function(){return F.mV(15,30,0.5,1,new F.l1())},
pP:function(){return F.mV(12,120,0.3,1,new F.kN(3,2))},
mV:function(a,b,c,d,e){var u=F.lM(a,b,new F.kD(H.n(e,{func:1,ret:V.a4,args:[P.p]}),d,b,c),null)
if(u==null)return
u.ay()
u.cc()
return u},
lM:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.aj,P.p,P.p]})
if(a<1)return
if(b<1)return
u=F.ln()
t=H.d([],[F.aj])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.eq(g,g,new V.aF(p,0,0,1),g,g,new V.a9(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cm(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.eq(g,g,new V.aF(j,i,h,1),g,g,new V.a9(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cm(d))}}u.d.ij(a+1,b+1,t)
return u},
cC:function(a,b,c){var u=new F.a8(),t=a.a
if(t==null)H.A(P.D("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.A(P.D("May not create a face with vertices attached to different shapes."))
u.ca(a)
u.cb(b)
u.hU(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a_()
return u},
nZ:function(a,b){var u=new F.br(),t=a.a
if(t==null)H.A(P.D("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.A(P.D("May not create a line with vertices attached to different shapes."))
u.ca(a)
u.cb(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a_()
return u},
ln:function(){var u=new F.e8(),t=new F.jk(u)
t.b=!1
t.sie(H.d([],[F.aj]))
u.a=t
t=new F.ir(u)
t.sc2(H.d([],[F.bN]))
u.b=t
t=new F.iq(u)
t.sfF(H.d([],[F.br]))
u.c=t
t=new F.ip(u)
t.sfz(H.d([],[F.a8]))
u.d=t
u.e=null
return u},
eq:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aj(),r=new F.js()
r.sc2(H.d([],[F.bN]))
s.b=r
r=new F.jo()
u=[F.br]
r.sfG(H.d([],u))
r.sfH(H.d([],u))
s.c=r
r=new F.jl()
u=[F.a8]
r.sfA(H.d([],u))
r.sfB(H.d([],u))
r.sfC(H.d([],u))
s.d=r
h=$.np()
s.e=0
r=$.bA()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bz().a)!==0?e:t
s.x=(u&$.by().a)!==0?b:t
s.y=(u&$.bW().a)!==0?f:t
s.z=(u&$.bB().a)!==0?g:t
s.Q=(u&$.nq().a)!==0?c:t
s.ch=(u&$.ct().a)!==0?i:0
s.cx=(u&$.bx().a)!==0?a:t
return s},
kq:function kq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kC:function kC(a,b){this.a=a
this.b=b},
kE:function kE(a){this.a=a},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
kZ:function kZ(){},
l_:function l_(a,b){this.a=a
this.b=b},
l1:function l1(){},
kN:function kN(a,b){this.a=a
this.b=b},
kD:function kD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h3:function h3(){},
iw:function iw(){},
br:function br(){this.b=this.a=null},
hn:function hn(){},
j_:function j_(){},
bN:function bN(){this.a=null},
e8:function e8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ip:function ip(a){this.a=a
this.b=null},
iq:function iq(a){this.a=a
this.b=null},
ir:function ir(a){this.a=a
this.b=null},
aj:function aj(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ju:function ju(a){this.a=a},
jt:function jt(a){this.a=a},
jk:function jk(a){this.a=a
this.c=this.b=null},
jl:function jl(){this.d=this.c=this.b=null},
jm:function jm(a,b){this.a=a
this.b=b},
jn:function jn(a,b){this.a=a
this.b=b},
jo:function jo(){this.c=this.b=null},
jq:function jq(){},
jp:function jp(){},
jr:function jr(){},
i1:function i1(){},
js:function js(){this.b=null}},T={d0:function d0(){},d1:function d1(){var _=this
_.e=_.d=_.c=_.b=_.a=null},iN:function iN(a){var _=this
_.a=a
_.e=_.d=_.c=null},iO:function iO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
n3:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="testCanvas",a3=null,a4=34067,a5="modifiers",a6=V.oo("Test 022"),a7=W.l8()
a7.className="pageLargeCanvas"
a7.id=a2
a6.a.appendChild(a7)
u=[P.f]
a6.dI(H.d(["Test of the Material Lighting shader with a textured point light."],u))
a6.ig(H.d(["shapes"],u))
a6.dI(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a2)
if(t==null)H.A(P.D("Failed to find an element with the identifier, testCanvas."))
s=E.os(t,!0,!0,!0,!1)
r=s.f
q=r.a
p=q.createTexture()
q.bindTexture(a4,p)
q.texParameteri(a4,10242,10497)
q.texParameteri(a4,10243,10497)
q.texParameteri(a4,10241,9729)
q.texParameteri(a4,10240,9729)
q.bindTexture(a4,a3)
o=new T.d1()
o.a=0
o.b=p
o.c=!1
o.d=0
r.aN(o,p,"../resources/earthColor/posx.png",34069,!1,!1)
r.aN(o,p,"../resources/earthColor/negx.png",34070,!1,!1)
r.aN(o,p,"../resources/earthColor/posy.png",34071,!1,!1)
r.aN(o,p,"../resources/earthColor/negy.png",34072,!1,!1)
r.aN(o,p,"../resources/earthColor/posz.png",34073,!1,!1)
r.aN(o,p,"../resources/earthColor/negz.png",34074,!1,!1)
n=U.ld()
n.h(0,U.fJ(V.m7(0,0,2)))
r=new U.e6()
r.r=r.f=r.e=r.d=r.c=r.b=r.a=0
r.seK(0)
r.ser(0,0)
r.sez(0)
q=r.d
if(!(Math.abs(q-0.5)<$.L().a)){r.d=0.5
q=new D.K("deltaYaw",q,0.5,[P.p])
q.b=!0
r.H(q)}q=r.e
if(!(Math.abs(q-0.5)<$.L().a)){r.e=0.5
q=new D.K("deltaPitch",q,0.5,[P.p])
q.b=!0
r.H(q)}q=r.f
if(!(Math.abs(q-0)<$.L().a)){r.f=0
q=new D.K("deltaRoll",q,0,[P.p])
q.b=!0
r.H(q)}n.h(0,r)
m=E.lc()
r=U.ld()
r.h(0,U.fJ(V.ll(0.2,0.2,0.2,1)))
r.h(0,n)
m.saX(r)
m.sab(0,F.n9(8,8))
r=O.m3()
q=r.f
l=q.c
if(!l.c)q.c7(new A.al(l.a,!1,!0))
l=q.e
if(l!==o){if(l!=null)l.gv().M(0,q.gbm())
k=q.e
q.e=o
o.gv().h(0,q.gbm())
l=new D.K(q.b+".textureCube",k,q.e,[T.d1])
l.b=!0
q.a.a0(l)}m.sbg(r)
j=new D.bM()
j.c=new V.a6(1,1,1)
j.r=1
j.y=j.x=0
j.z=!0
j.a=V.cL()
k=j.b
j.b=n
n.gv().h(0,j.gbJ())
r=new D.K("mover",k,j.b,[U.ac])
r.b=!0
j.a4(r)
i=new V.a6(1,1,1)
if(!j.c.u(0,i)){k=j.c
j.c=i
r=new D.K("color",k,i,[V.a6])
r.b=!0
j.a4(r)}r=j.d
if(r!==o){if(r!=null)r.gv().M(0,j.gbJ())
k=j.d
j.d=o
o.gv().h(0,j.gbJ())
r=new D.K("texture",k,j.d,[T.d1])
r.b=!0
j.a4(r)}r=$.mx
if(r==null){r=new V.bu(1,0.00390625,0.0000152587890625,0)
$.mx=r
h=r}else h=r
if(!J.Q(j.f,h)){k=j.f
j.f=h
r=new D.K("shadowAdjust",k,h,[V.bu])
r.b=!0
j.a4(r)}r=j.r
if(!(Math.abs(r-1)<$.L().a)){j.r=1
r=new D.K("attenuation0",r,1,[P.p])
r.b=!0
j.a4(r)}r=j.x
if(!(Math.abs(r-0.15)<$.L().a)){j.x=0.15
r=new D.K("attenuation1",r,0.15,[P.p])
r.b=!0
j.a4(r)}r=j.y
if(!(Math.abs(r-0.05)<$.L().a)){j.y=0.05
r=new D.K("attenuation2",r,0.05,[P.p])
r.b=!0
j.a4(r)}g=O.m3()
g.dx.h(0,j)
r=g.r
r.sb6(0,new V.a6(0.1,0.1,0.1))
r=g.x
r.sb6(0,new V.a6(1,1,1))
r=g.z
r.sb6(0,new V.a6(1,1,1))
r=g.z
r.c7(new A.al(!0,!1,r.c.c))
r.dA(100)
f=E.lc()
f.saX(U.fJ(V.ll(3,3,3,1)))
r=F.lF(1,a3,a3,1)
r.cu()
f.sab(0,r)
e=E.lc()
e.sab(0,F.nb())
d=U.ld()
r=s.r
q=new U.eo()
l=U.la()
l.scP(0,!0)
l.scC(6.283185307179586)
l.scE(0)
l.sZ(0,0)
l.scD(100)
l.sX(0)
l.scn(0.5)
q.b=l
c=q.gaO()
l.gv().h(0,c)
l=U.la()
l.scP(0,!0)
l.scC(6.283185307179586)
l.scE(0)
l.sZ(0,0)
l.scD(100)
l.sX(0)
l.scn(0.5)
q.c=l
l.gv().h(0,c)
q.d=null
q.r=q.f=q.e=!1
q.y=q.x=2.5
q.Q=4
q.ch=q.cx=!1
q.db=q.cy=0
q.dx=null
q.dy=0
q.fx=q.fr=null
b=new X.aB(!1,!1,!1)
k=q.d
q.d=b
l=[X.aB]
c=new D.K(a5,k,b,l)
c.b=!0
q.H(c)
c=q.f
if(c!==!1){q.f=!1
c=new D.K("invertX",c,!1,[P.T])
c.b=!0
q.H(c)}c=q.r
if(c!==!1){q.r=!1
c=new D.K("invertY",c,!1,[P.T])
c.b=!0
q.H(c)}q.b5(r)
d.h(0,q)
r=s.r
q=new U.en()
c=U.la()
c.scP(0,!0)
c.scC(6.283185307179586)
c.scE(0)
c.sZ(0,0)
c.scD(100)
c.sX(0)
c.scn(0.2)
q.b=c
c.gv().h(0,q.gaO())
q.c=null
q.d=!1
q.e=2.5
q.r=4
q.x=q.y=!1
q.z=0
q.Q=null
q.ch=0
q.cy=q.cx=null
b=new X.aB(!0,!1,!1)
k=q.c
q.c=b
c=new D.K(a5,k,b,l)
c.b=!0
q.H(c)
q.b5(r)
d.h(0,q)
r=s.r
q=new U.ep()
q.c=0.01
q.e=q.d=0
b=new X.aB(!1,!1,!1)
q.b=b
l=new D.K(a5,a3,b,l)
l.b=!0
q.H(l)
q.b5(r)
d.h(0,q)
d.h(0,U.fJ(V.m7(0,0,5)))
a=new M.dJ()
a.a=!0
a.sfm(0,O.l9(E.aq))
a.e.bj(a.gfZ(),a.gh0())
a.y=a.x=a.r=a.f=null
a0=X.nS(a3)
a1=new X.e2()
a1.c=1.0471975511965976
a1.d=0.1
a1.e=2000
a1.saX(a3)
r=a1.c
if(!(Math.abs(r-1.0471975511965976)<$.L().a)){a1.c=1.0471975511965976
r=new D.K("fov",r,1.0471975511965976,[P.p])
r.b=!0
a1.aL(r)}r=a1.d
if(!(Math.abs(r-0.1)<$.L().a)){a1.d=0.1
r=new D.K("near",r,0.1,[P.p])
r.b=!0
a1.aL(r)}r=a1.e
if(!(Math.abs(r-2000)<$.L().a)){a1.e=2000
r=new D.K("far",r,2000,[P.p])
r.b=!0
a1.aL(r)}r=a.b
if(r!==a1){if(r!=null)r.gv().M(0,a.gau())
k=a.b
a.b=a1
a1.gv().h(0,a.gau())
r=new D.K("camera",k,a.b,[X.dD])
r.b=!0
a.aA(r)}r=a.c
if(r!==a0){if(r!=null)r.gv().M(0,a.gau())
k=a.c
a.c=a0
a0.gv().h(0,a.gau())
r=new D.K("target",k,a.c,[X.ed])
r.b=!0
a.aA(r)}a.sbg(a3)
a.sbg(g)
a.e.h(0,f)
a.e.h(0,e)
a.e.h(0,m)
a.b.saX(d)
r=s.d
if(r!==a){if(r!=null)r.gv().M(0,s.gcY())
s.d=a
a.gv().h(0,s.gcY())
s.cZ()}r=new V.ib("shapes")
u=u.getElementById("shapes")
r.c=u
if(u==null)H.A("Failed to find shapes for RadioGroup")
r.b4(0,"Cube",new T.kP(e))
r.b4(0,"Cylinder",new T.kQ(e))
r.b4(0,"Cone",new T.kR(e))
r.b4(0,"Sphere",new T.kS(e))
r.dG(0,"Toroid",new T.kT(e),!0)
r.b4(0,"Knot",new T.kU(e))
u=s.z
if(u==null)u=s.z=D.W()
r={func:1,ret:-1,args:[D.B]}
q=H.n(new T.kV(a6,g),r)
if(u.b==null)u.saP(H.d([],[r]))
u=u.b;(u&&C.a).h(u,q)
V.pW(s)},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a){this.a=a},
kT:function kT(a){this.a=a},
kU:function kU(a){this.a=a},
kV:function kV(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.lh.prototype={}
J.a.prototype={
u:function(a,b){return a===b},
gJ:function(a){return H.cU(a)},
i:function(a){return"Instance of '"+H.c7(a)+"'"}}
J.hi.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iT:1}
J.dO.prototype={
u:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0}}
J.dP.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.i6.prototype={}
J.bR.prototype={}
J.bq.prototype={
i:function(a){var u=a[$.nd()]
if(u==null)return this.eT(a)
return"JavaScript function for "+H.i(J.au(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibI:1}
J.aT.prototype={
h:function(a,b){H.C(b,H.r(a,0))
if(!!a.fixed$length)H.A(P.I("add"))
a.push(b)},
ew:function(a,b){if(!!a.fixed$length)H.A(P.I("removeAt"))
if(b<0||b>=a.length)throw H.c(P.e4(b,null))
return a.splice(b,1)[0]},
M:function(a,b){var u
if(!!a.fixed$length)H.A(P.I("remove"))
for(u=0;u<a.length;++u)if(J.Q(a[u],b)){a.splice(u,1)
return!0}return!1},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bm(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.i(a[u]))
return t.join(b)},
iT:function(a){return this.m(a,"")},
iM:function(a,b,c,d){var u,t,s
H.C(b,d)
H.n(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bm(a))}return t},
iL:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.T,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.F(b.$1(s)))return s
if(a.length!==u)throw H.c(P.bm(a))}throw H.c(H.hh())},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
eQ:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ag(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ag(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.r(a,0)])
return H.d(a.slice(b,c),[H.r(a,0)])},
giK:function(a){if(a.length>0)return a[0]
throw H.c(H.hh())},
gaz:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hh())},
bk:function(a,b,c,d){var u,t,s=H.r(a,0)
H.l(d,"$ij",[s],"$aj")
if(!!a.immutable$list)H.A(P.I("setRange"))
P.bt(b,c,a.length)
u=c-b
if(u===0)return
P.lm(0,"skipCount")
H.l(d,"$ib",[s],"$ab")
s=J.co(d)
if(u>s.gn(d))throw H.c(H.nV())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
dJ:function(a,b){var u,t
H.n(b,{func:1,ret:P.T,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.F(b.$1(a[t])))return!0
if(a.length!==u)throw H.c(P.bm(a))}return!1},
bG:function(a,b){var u=H.r(a,0)
H.n(b,{func:1,ret:P.m,args:[u,u]})
if(!!a.immutable$list)H.A(P.I("sort"))
H.e9(a,0,a.length-1,b,u)},
U:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Q(a[u],b))return!0
return!1},
i:function(a){return P.le(a,"[","]")},
gV:function(a){return new J.av(a,a.length,[H.r(a,0)])},
gJ:function(a){return H.cU(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.A(P.I("set length"))
if(b<0)throw H.c(P.ag(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cm(a,b))
return a[b]},
k:function(a,b,c){H.C(c,H.r(a,0))
if(!!a.immutable$list)H.A(P.I("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cm(a,b))
a[b]=c},
p:function(a,b){var u,t=[H.r(a,0)]
H.l(b,"$ib",t,"$ab")
u=C.e.p(a.length,b.gn(b))
t=H.d([],t)
this.sn(t,u)
this.bk(t,0,a.length,a)
this.bk(t,a.length,u,b)
return t},
$ij:1,
$ib:1}
J.lg.prototype={}
J.av.prototype={
gL:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.v(s))
u=t.c
if(u>=r){t.sd1(null)
return!1}t.sd1(s[u]);++t.c
return!0},
sd1:function(a){this.d=H.C(a,H.r(this,0))},
$ib7:1}
J.bK.prototype={
iv:function(a,b){var u
H.n4(b)
if(typeof b!=="number")throw H.c(H.as(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbv(b)
if(this.gbv(a)===u)return 0
if(this.gbv(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbv:function(a){return a===0?1/a<0:a<0},
jp:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.I(""+a+".toInt()"))},
cv:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.I(""+a+".floor()"))},
ao:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.I(""+a+".round()"))},
eE:function(a,b){var u
if(b>20)throw H.c(P.ag(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbv(a))return"-"+u
return u},
bh:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ag(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.Y(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.A(P.I("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.q("0",r)},
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
q:function(a,b){if(typeof b!=="number")throw H.c(H.as(b))
return a*b},
bi:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eW:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dC(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.dC(a,b)},
dC:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.I("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aR:function(a,b){var u
if(a>0)u=this.dB(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hZ:function(a,b){if(b<0)throw H.c(H.as(b))
return this.dB(a,b)},
dB:function(a,b){return b>31?0:a>>>b},
as:function(a,b){if(typeof b!=="number")throw H.c(H.as(b))
return a>b},
$ip:1,
$iab:1}
J.dN.prototype={$im:1}
J.dM.prototype={}
J.bp.prototype={
Y:function(a,b){if(b<0)throw H.c(H.cm(a,b))
if(b>=a.length)H.A(H.cm(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(b>=a.length)throw H.c(H.cm(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.l6(b,null,null))
return a+b},
aZ:function(a,b,c,d){var u,t
c=P.bt(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ac:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ag(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a1:function(a,b){return this.ac(a,b,0)},
B:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.A(H.as(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.S()
if(b<0)throw H.c(P.e4(b,null))
if(b>c)throw H.c(P.e4(b,null))
if(c>a.length)throw H.c(P.e4(c,null))
return a.substring(b,c)},
a9:function(a,b){return this.B(a,b,null)},
js:function(a){return a.toLowerCase()},
q:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ah:function(a,b){var u=b-a.length
if(u<=0)return a
return this.q(" ",u)+a},
ec:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ag(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eb:function(a,b){return this.ec(a,b,0)},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$im9:1,
$if:1}
H.u.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.b.Y(this.a,b)},
$ad6:function(){return[P.m]},
$ay:function(){return[P.m]},
$aj:function(){return[P.m]},
$ab:function(){return[P.m]}}
H.fY.prototype={}
H.c5.prototype={
gV:function(a){var u=this
return new H.cI(u,u.gn(u),[H.at(u,"c5",0)])},
bD:function(a,b){return this.eS(0,H.n(b,{func:1,ret:P.T,args:[H.at(this,"c5",0)]}))}}
H.cI.prototype={
gL:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=J.co(s),q=r.gn(s)
if(t.b!==q)throw H.c(P.bm(s))
u=t.c
if(u>=q){t.sb0(null)
return!1}t.sb0(r.K(s,u));++t.c
return!0},
sb0:function(a){this.d=H.C(a,H.r(this,0))},
$ib7:1}
H.hx.prototype={
gV:function(a){return new H.hy(J.bC(this.a),this.b,this.$ti)},
gn:function(a){return J.aE(this.a)},
K:function(a,b){return this.b.$1(J.fs(this.a,b))},
$aj:function(a,b){return[b]}}
H.hy.prototype={
C:function(){var u=this,t=u.b
if(t.C()){u.sb0(u.c.$1(t.gL(t)))
return!0}u.sb0(null)
return!1},
gL:function(a){return this.a},
sb0:function(a){this.a=H.C(a,H.r(this,1))},
$ab7:function(a,b){return[b]}}
H.hz.prototype={
gn:function(a){return J.aE(this.a)},
K:function(a,b){return this.b.$1(J.fs(this.a,b))},
$ac5:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.d8.prototype={
gV:function(a){return new H.jx(J.bC(this.a),this.b,this.$ti)}}
H.jx.prototype={
C:function(){var u,t
for(u=this.a,t=this.b;u.C();)if(H.F(t.$1(u.gL(u))))return!0
return!1},
gL:function(a){var u=this.a
return u.gL(u)}}
H.c1.prototype={}
H.d6.prototype={
k:function(a,b,c){H.C(c,H.at(this,"d6",0))
throw H.c(P.I("Cannot modify an unmodifiable list"))}}
H.ek.prototype={}
H.fK.prototype={
i:function(a){return P.lk(this)},
k:function(a,b,c){H.C(b,H.r(this,0))
H.C(c,H.r(this,1))
return H.nM()},
$iz:1}
H.fL.prototype={
gn:function(a){return this.a},
br:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.br(0,b))return
return this.di(b)},
di:function(a){return this.b[H.J(a)]},
I:function(a,b){var u,t,s,r,q=this,p=H.r(q,1)
H.n(b,{func:1,ret:-1,args:[H.r(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.C(q.di(r),p))}}}
H.iX.prototype={
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
H.i2.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hk.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.j9.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.l2.prototype={
$1:function(a){if(!!J.U(a).$ibH)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:25}
H.f_.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iax:1}
H.cy.prototype={
i:function(a){return"Closure '"+H.c7(this).trim()+"'"},
$ibI:1,
gjz:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iK.prototype={}
H.iA.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cs(u)+"'"}}
H.cv.prototype={
u:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cv))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.cU(this.a)
else u=typeof t!=="object"?J.dv(t):H.cU(t)
return(u^H.cU(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.c7(u)+"'")}}
H.iZ.prototype={
i:function(a){return this.a}}
H.fF.prototype={
i:function(a){return this.a}}
H.il.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.jy.prototype={
i:function(a){return"Assertion failed: "+P.dK(this.a)}}
H.a2.prototype={
gn:function(a){return this.a},
giS:function(a){return this.a===0},
ga2:function(a){return new H.hp(this,[H.r(this,0)])},
br:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.de(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.de(t,b)}else return s.iP(b)},
iP:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cA(u.bR(t,u.cz(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bn(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bn(r,b)
s=t==null?null:t.b
return s}else return q.iQ(b)},
iQ:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bR(r,s.cz(a))
t=s.cA(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.C(b,H.r(s,0))
H.C(c,H.r(s,1))
if(typeof b==="string"){u=s.b
s.d3(u==null?s.b=s.c0():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.d3(t==null?s.c=s.c0():t,b,c)}else s.iR(b,c)},
iR:function(a,b){var u,t,s,r,q=this
H.C(a,H.r(q,0))
H.C(b,H.r(q,1))
u=q.d
if(u==null)u=q.d=q.c0()
t=q.cz(a)
s=q.bR(u,t)
if(s==null)q.c8(u,t,[q.c1(a,b)])
else{r=q.cA(s,a)
if(r>=0)s[r].b=b
else s.push(q.c1(a,b))}},
I:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.r(s,0),H.r(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bm(s))
u=u.c}},
d3:function(a,b,c){var u,t=this
H.C(b,H.r(t,0))
H.C(c,H.r(t,1))
u=t.bn(a,b)
if(u==null)t.c8(a,b,t.c1(b,c))
else u.b=c},
fN:function(){this.r=this.r+1&67108863},
c1:function(a,b){var u,t=this,s=new H.ho(H.C(a,H.r(t,0)),H.C(b,H.r(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fN()
return s},
cz:function(a){return J.dv(a)&0x3ffffff},
cA:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Q(a[t].a,b))return t
return-1},
i:function(a){return P.lk(this)},
bn:function(a,b){return a[b]},
bR:function(a,b){return a[b]},
c8:function(a,b,c){a[b]=c},
fs:function(a,b){delete a[b]},
de:function(a,b){return this.bn(a,b)!=null},
c0:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c8(t,u,t)
this.fs(t,u)
return t}}
H.ho.prototype={}
H.hp.prototype={
gn:function(a){return this.a.a},
gV:function(a){var u=this.a,t=new H.hq(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hq.prototype={
gL:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bm(t))
else{t=u.c
if(t==null){u.sd2(null)
return!1}else{u.sd2(t.a)
u.c=u.c.c
return!0}}},
sd2:function(a){this.d=H.C(a,H.r(this,0))},
$ib7:1}
H.kJ.prototype={
$1:function(a){return this.a(a)},
$S:25}
H.kK.prototype={
$2:function(a,b){return this.a(a,b)},
$S:56}
H.kL.prototype={
$1:function(a){return this.a(H.J(a))},
$S:53}
H.hj.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$im9:1,
$iok:1}
H.cP.prototype={$icP:1}
H.bL.prototype={$ibL:1,$iou:1}
H.dY.prototype={
gn:function(a){return a.length},
$iN:1,
$aN:function(){}}
H.cQ.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]},
k:function(a,b,c){H.pC(c)
H.bk(b,a,a.length)
a[b]=c},
$ac1:function(){return[P.p]},
$ay:function(){return[P.p]},
$ij:1,
$aj:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.dZ.prototype={
k:function(a,b,c){H.a3(c)
H.bk(b,a,a.length)
a[b]=c},
$ac1:function(){return[P.m]},
$ay:function(){return[P.m]},
$ij:1,
$aj:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]}}
H.hV.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.hW.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.hX.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.hY.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.hZ.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.e_.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bk(b,a,a.length)
return a[b]},
$iqk:1}
H.cR.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bk(b,a,a.length)
return a[b]},
$icR:1,
$iS:1}
H.dd.prototype={}
H.de.prototype={}
H.df.prototype={}
H.dg.prototype={}
P.jA.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:18}
P.jz.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:49}
P.jB.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jC.prototype={
$0:function(){this.a.$0()},
$S:0}
P.f5.prototype={
fb:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cl(new P.kg(this,b),0),a)
else throw H.c(P.I("`setTimeout()` not found."))},
fc:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cl(new P.kf(this,a,Date.now(),b),0),a)
else throw H.c(P.I("Periodic timer."))},
$ibf:1}
P.kg.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.kf.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.eW(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bj.prototype={
iV:function(a){if(this.c!==6)return!0
return this.b.b.cM(H.n(this.d,{func:1,ret:P.T,args:[P.R]}),a.a,P.T,P.R)},
iO:function(a){var u=this.e,t=P.R,s={futureOr:1,type:H.r(this,1)},r=this.b.b
if(H.fo(u,{func:1,args:[P.R,P.ax]}))return H.lG(r.jk(u,a.a,a.b,null,t,P.ax),s)
else return H.lG(r.cM(H.n(u,{func:1,args:[P.R]}),a.a,null,t),s)}}
P.aP.prototype={
eD:function(a,b,c){var u,t,s,r=H.r(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a1
if(u!==C.f){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.po(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aP($.a1,[c])
s=b==null?1:3
this.d4(new P.bj(t,s,a,b,[r,c]))
return t},
jo:function(a,b){return this.eD(a,null,b)},
d4:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.h(t.c,"$ibj")
t.c=a}else{if(s===2){u=H.h(t.c,"$iaP")
s=u.a
if(s<4){u.d4(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.kA(null,null,s,H.n(new P.jL(t,a),{func:1,ret:-1}))}},
du:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.h(p.c,"$ibj")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.h(p.c,"$iaP")
u=q.a
if(u<4){q.du(a)
return}p.a=u
p.c=q.c}o.a=p.bp(a)
u=p.b
u.toString
P.kA(null,null,u,H.n(new P.jP(o,p),{func:1,ret:-1}))}},
c4:function(){var u=H.h(this.c,"$ibj")
this.c=null
return this.bp(u)},
bp:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d9:function(a){var u,t,s=this,r=H.r(s,0)
H.lG(a,{futureOr:1,type:r})
u=s.$ti
if(H.lC(a,"$icE",u,"$acE"))if(H.lC(a,"$iaP",u,null))P.my(a,s)
else P.oG(a,s)
else{t=s.c4()
H.C(a,r)
s.a=4
s.c=a
P.db(s,t)}},
da:function(a,b){var u,t=this
H.h(b,"$iax")
u=t.c4()
t.a=8
t.c=new P.ap(a,b)
P.db(t,u)},
$icE:1}
P.jL.prototype={
$0:function(){P.db(this.a,this.b)},
$S:0}
P.jP.prototype={
$0:function(){P.db(this.b,this.a.a)},
$S:0}
P.jM.prototype={
$1:function(a){var u=this.a
u.a=0
u.d9(a)},
$S:18}
P.jN.prototype={
$2:function(a,b){H.h(b,"$iax")
this.a.da(a,b)},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jO.prototype={
$0:function(){this.a.da(this.b,this.c)},
$S:0}
P.jS.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eA(H.n(s.d,{func:1}),null)}catch(r){u=H.ak(r)
t=H.cq(r)
if(o.d){s=H.h(o.a.a.c,"$iap").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.h(o.a.a.c,"$iap")
else q.b=new P.ap(u,t)
q.a=!0
return}if(!!J.U(n).$icE){if(n instanceof P.aP&&n.a>=4){if(n.a===8){s=o.b
s.b=H.h(n.c,"$iap")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jo(new P.jT(p),null)
s.a=!1}},
$S:3}
P.jT.prototype={
$1:function(a){return this.a},
$S:46}
P.jR.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.r(s,0)
q=H.C(n.c,r)
p=H.r(s,1)
n.a.b=s.b.b.cM(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ak(o)
t=H.cq(o)
s=n.a
s.b=new P.ap(u,t)
s.a=!0}},
$S:3}
P.jQ.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.h(m.a.a.c,"$iap")
r=m.c
if(H.F(r.iV(u))&&r.e!=null){q=m.b
q.b=r.iO(u)
q.a=!1}}catch(p){t=H.ak(p)
s=H.cq(p)
r=H.h(m.a.a.c,"$iap")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ap(t,s)
n.a=!0}},
$S:3}
P.es.prototype={}
P.iD.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aP($.a1,[P.m])
r.a=0
u=H.r(s,0)
t=H.n(new P.iF(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.iG(r,q),{func:1,ret:-1})
W.aa(s.a,s.b,t,!1,u)
return q}}
P.iF.prototype={
$1:function(a){H.C(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.P,args:[H.r(this.b,0)]}}}
P.iG.prototype={
$0:function(){this.b.d9(this.a.a)},
$S:0}
P.cY.prototype={}
P.iE.prototype={}
P.bf.prototype={}
P.ap.prototype={
i:function(a){return H.i(this.a)},
$ibH:1}
P.kp.prototype={$iqz:1}
P.kz.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e1():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:0}
P.jZ.prototype={
jl:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.a1){a.$0()
return}P.mK(r,r,this,a,-1)}catch(s){u=H.ak(s)
t=H.cq(s)
P.ky(r,r,this,u,H.h(t,"$iax"))}},
jm:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.f===$.a1){a.$1(b)
return}P.mL(r,r,this,a,b,-1,c)}catch(s){u=H.ak(s)
t=H.cq(s)
P.ky(r,r,this,u,H.h(t,"$iax"))}},
ir:function(a,b){return new P.k0(this,H.n(a,{func:1,ret:b}),b)},
ce:function(a){return new P.k_(this,H.n(a,{func:1,ret:-1}))},
dL:function(a,b){return new P.k1(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eA:function(a,b){H.n(a,{func:1,ret:b})
if($.a1===C.f)return a.$0()
return P.mK(null,null,this,a,b)},
cM:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.a1===C.f)return a.$1(b)
return P.mL(null,null,this,a,b,c,d)},
jk:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.a1===C.f)return a.$2(b,c)
return P.pp(null,null,this,a,b,c,d,e,f)}}
P.k0.prototype={
$0:function(){return this.a.eA(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.k_.prototype={
$0:function(){return this.a.jl(this.b)},
$S:3}
P.k1.prototype={
$1:function(a){var u=this.c
return this.a.jm(this.b,H.C(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jX.prototype={
gV:function(a){var u=this,t=new P.eH(u,u.r,u.$ti)
t.c=u.e
return t},
gn:function(a){return this.a},
U:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.h(u[b],"$icg")!=null}else{t=this.fn(b)
return t}},
fn:function(a){var u=this.d
if(u==null)return!1
return this.bP(this.dj(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.C(b,H.r(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.d6(u==null?s.b=P.lu():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.d6(t==null?s.c=P.lu():t,b)}else return s.fe(0,b)},
fe:function(a,b){var u,t,s,r=this
H.C(b,H.r(r,0))
u=r.d
if(u==null)u=r.d=P.lu()
t=r.dc(b)
s=u[t]
if(s==null)u[t]=[r.bM(b)]
else{if(r.bP(s,b)>=0)return!1
s.push(r.bM(b))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hJ(this.c,b)
else return this.hI(0,b)},
hI:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.dj(r,b)
t=s.bP(u,b)
if(t<0)return!1
s.dD(u.splice(t,1)[0])
return!0},
d6:function(a,b){H.C(b,H.r(this,0))
if(H.h(a[b],"$icg")!=null)return!1
a[b]=this.bM(b)
return!0},
hJ:function(a,b){var u
if(a==null)return!1
u=H.h(a[b],"$icg")
if(u==null)return!1
this.dD(u)
delete a[b]
return!0},
d8:function(){this.r=1073741823&this.r+1},
bM:function(a){var u,t=this,s=new P.cg(H.C(a,H.r(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.d8()
return s},
dD:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.d8()},
dc:function(a){return J.dv(a)&1073741823},
dj:function(a,b){return a[this.dc(b)]},
bP:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Q(a[t].a,b))return t
return-1}}
P.cg.prototype={}
P.eH.prototype={
gL:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bm(t))
else{t=u.c
if(t==null){u.sd7(null)
return!1}else{u.sd7(H.C(t.a,H.r(u,0)))
u.c=u.c.b
return!0}}},
sd7:function(a){this.d=H.C(a,H.r(this,0))},
$ib7:1}
P.hr.prototype={
$2:function(a,b){this.a.k(0,H.C(a,this.b),H.C(b,this.c))},
$S:5}
P.hs.prototype={$ij:1,$ib:1}
P.y.prototype={
gV:function(a){return new H.cI(a,this.gn(a),[H.bU(this,a,"y",0)])},
K:function(a,b){return this.j(a,b)},
jr:function(a,b){var u,t=this,s=H.d([],[H.bU(t,a,"y",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.k(s,u,t.j(a,u))
return s},
jq:function(a){return this.jr(a,!0)},
p:function(a,b){var u,t=this,s=[H.bU(t,a,"y",0)]
H.l(b,"$ib",s,"$ab")
u=H.d([],s)
C.a.sn(u,C.e.p(t.gn(a),b.gn(b)))
C.a.bk(u,0,t.gn(a),a)
C.a.bk(u,t.gn(a),u.length,b)
return u},
iI:function(a,b,c,d){var u
H.C(d,H.bU(this,a,"y",0))
P.bt(b,c,this.gn(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.le(a,"[","]")}}
P.hu.prototype={}
P.hv.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.i(a)
t.a=u+": "
t.a+=H.i(b)},
$S:5}
P.ae.prototype={
I:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bU(s,a,"ae",0),H.bU(s,a,"ae",1)]})
for(u=J.bC(s.ga2(a));u.C();){t=u.gL(u)
b.$2(t,s.j(a,t))}},
gn:function(a){return J.aE(this.ga2(a))},
i:function(a){return P.lk(a)},
$iz:1}
P.kh.prototype={
k:function(a,b,c){H.C(b,H.r(this,0))
H.C(c,H.r(this,1))
throw H.c(P.I("Cannot modify unmodifiable map"))}}
P.hw.prototype={
j:function(a,b){return J.du(this.a,b)},
k:function(a,b,c){J.l4(this.a,H.C(b,H.r(this,0)),H.C(c,H.r(this,1)))},
I:function(a,b){J.lQ(this.a,H.n(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gn:function(a){return J.aE(this.a)},
i:function(a){return J.au(this.a)},
$iz:1}
P.el.prototype={}
P.k3.prototype={
aw:function(a,b){var u
for(u=J.bC(H.l(b,"$ij",this.$ti,"$aj"));u.C();)this.h(0,u.gL(u))},
i:function(a){return P.le(this,"{","}")},
K:function(a,b){var u,t,s,r=this
P.lm(b,"index")
for(u=P.oK(r,r.r,H.r(r,0)),t=0;u.C();){s=u.d
if(b===t)return s;++t}throw H.c(P.Z(b,r,"index",null,t))},
$ij:1,
$img:1}
P.eI.prototype={}
P.fb.prototype={}
P.fB.prototype={
iX:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bt(a0,a1,b.length)
u=$.ns()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.E(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kI(C.b.E(b,n))
j=H.kI(C.b.E(b,n+1))
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
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ah("")
g=r.a+=C.b.B(b,s,t)
r.a=g+H.c8(m)
s=n
continue}}throw H.c(P.a7("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.B(b,s,a1)
f=g.length
if(q>=0)P.lU(b,p,a1,q,o,f)
else{e=C.e.bi(f-1,4)+1
if(e===1)throw H.c(P.a7(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aZ(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lU(b,p,a1,q,o,d)
else{e=C.e.bi(d,4)
if(e===1)throw H.c(P.a7(c,b,a1))
if(e>1)b=C.b.aZ(b,a1,a1,e===2?"==":"=")}return b},
$ac_:function(){return[[P.b,P.m],P.f]}}
P.fC.prototype={
$abG:function(){return[[P.b,P.m],P.f]}}
P.c_.prototype={}
P.bG.prototype={}
P.h_.prototype={
$ac_:function(){return[P.f,[P.b,P.m]]}}
P.hf.prototype={
i:function(a){return this.a}}
P.he.prototype={
fo:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.ah("")
if(r>b)q.a+=C.b.B(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nF(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abG:function(){return[P.f,P.f]}}
P.jh.prototype={
giH:function(){return C.N}}
P.jj.prototype={
cl:function(a){var u,t,s=P.bt(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kn(u)
if(t.fD(a,0,s)!==s)t.dF(J.nB(a,s-1),0)
return new Uint8Array(u.subarray(0,H.p_(0,t.b,u.length)))},
$abG:function(){return[P.f,[P.b,P.m]]}}
P.kn.prototype={
dF:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fD:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.Y(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.E(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dF(r,C.b.E(a,p)))s=p}else if(r<=2047){q=n.b
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
P.ji.prototype={
cl:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ib",[P.m],"$ab")
u=P.ox(!1,a,0,null)
if(u!=null)return u
t=P.bt(0,null,J.aE(a))
s=P.mN(a,0,t)
if(s>0){r=P.cZ(a,0,s)
if(s===t)return r
q=new P.ah(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ah("")
n=new P.km(!1,q)
n.c=o
n.iw(a,p,t)
if(n.e>0){H.A(P.a7("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c8(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abG:function(){return[[P.b,P.m],P.f]}}
P.km.prototype={
iw:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.l(a,"$ib",[P.m],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.co(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.ak()
if((o&192)!==128){n=P.a7(h+C.e.bh(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.e(C.w,n)
if(u<=C.w[n]){n=P.a7("Overlong encoding of 0x"+C.e.bh(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a7("Character outside valid Unicode range: 0x"+C.e.bh(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.c8(u)
i.c=!1}for(n=p<c;n;){m=P.mN(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cZ(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.S()
if(o<0){j=P.a7("Negative UTF-8 code unit: -0x"+C.e.bh(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a7(h+C.e.bh(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.T.prototype={}
P.az.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.az&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.e.aR(u,30))&1073741823},
i:function(a){var u=this,t=P.nN(H.og(u)),s=P.dF(H.oe(u)),r=P.dF(H.oa(u)),q=P.dF(H.ob(u)),p=P.dF(H.od(u)),o=P.dF(H.of(u)),n=P.nO(H.oc(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.p.prototype={}
P.b6.prototype={
p:function(a,b){return new P.b6(C.e.p(this.a,b.gdh()))},
t:function(a,b){return new P.b6(C.e.t(this.a,b.gdh()))},
as:function(a,b){return C.e.as(this.a,b.gdh())},
u:function(a,b){if(b==null)return!1
return b instanceof P.b6&&this.a===b.a},
gJ:function(a){return C.e.gJ(this.a)},
i:function(a){var u,t,s,r=new P.fX(),q=this.a
if(q<0)return"-"+new P.b6(0-q).i(0)
u=r.$1(C.e.a7(q,6e7)%60)
t=r.$1(C.e.a7(q,1e6)%60)
s=new P.fW().$1(q%1e6)
return""+C.e.a7(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.fW.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:19}
P.fX.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:19}
P.bH.prototype={}
P.fv.prototype={
i:function(a){return"Assertion failed"}}
P.e1.prototype={
i:function(a){return"Throw of null."}}
P.aR.prototype={
gbO:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbN:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbO()+o+u
if(!q.a)return t
s=q.gbN()
r=P.dK(q.b)
return t+s+": "+r}}
P.c9.prototype={
gbO:function(){return"RangeError"},
gbN:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.hg.prototype={
gbO:function(){return"RangeError"},
gbN:function(){var u,t=H.a3(this.b)
if(typeof t!=="number")return t.S()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gn:function(a){return this.f}}
P.ja.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.j7.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cb.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fI.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dK(u)+"."}}
P.i5.prototype={
i:function(a){return"Out of Memory"},
$ibH:1}
P.eb.prototype={
i:function(a){return"Stack Overflow"},
$ibH:1}
P.fQ.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eA.prototype={
i:function(a){return"Exception: "+this.a}}
P.h9.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.B(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.E(f,q)
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
k=""}j=C.b.B(f,m,n)
return h+l+j+k+"\n"+C.b.q(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.i(g)+")"):h}}
P.bI.prototype={}
P.m.prototype={}
P.j.prototype={
bD:function(a,b){var u=H.at(this,"j",0)
return new H.d8(this,H.n(b,{func:1,ret:P.T,args:[u]}),[u])},
gn:function(a){var u,t=this.gV(this)
for(u=0;t.C();)++u
return u},
gaJ:function(a){var u,t=this.gV(this)
if(!t.C())throw H.c(H.hh())
u=t.gL(t)
if(t.C())throw H.c(H.nW())
return u},
K:function(a,b){var u,t,s
P.lm(b,"index")
for(u=this.gV(this),t=0;u.C();){s=u.gL(u)
if(b===t)return s;++t}throw H.c(P.Z(b,this,"index",null,t))},
i:function(a){return P.nU(this,"(",")")}}
P.b7.prototype={}
P.b.prototype={$ij:1}
P.z.prototype={}
P.P.prototype={
gJ:function(a){return P.R.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.ab.prototype={}
P.R.prototype={constructor:P.R,$iR:1,
u:function(a,b){return this===b},
gJ:function(a){return H.cU(this)},
i:function(a){return"Instance of '"+H.c7(this)+"'"},
toString:function(){return this.i(this)}}
P.ax.prototype={}
P.f.prototype={$im9:1}
P.ah.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iq8:1}
P.jf.prototype={
$2:function(a,b){var u,t,s,r=P.f
H.l(a,"$iz",[r,r],"$az")
H.J(b)
u=J.dr(b).eb(b,"=")
if(u===-1){if(b!=="")J.l4(a,P.lw(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.B(b,0,u)
s=C.b.a9(b,u+1)
r=this.a
J.l4(a,P.lw(t,0,t.length,r,!0),P.lw(s,0,s.length,r,!0))}return a},
$S:45}
P.jc.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:44}
P.jd.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.je.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fr(C.b.B(this.b,a,b),null,16)
if(typeof u!=="number")return u.S()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:42}
P.ch.prototype={
geJ:function(){return this.b},
gcw:function(a){var u=this.c
if(u==null)return""
if(C.b.a1(u,"["))return C.b.B(u,1,u.length-1)
return u},
gbx:function(a){var u=this.d
if(u==null)return P.mC(this.a)
return u},
gcH:function(a){var u=this.f
return u==null?"":u},
ge5:function(){var u=this.r
return u==null?"":u},
ex:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.l(b,"$iz",[P.f,null],"$az")
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
n=P.lv(null,0,0,b)
return new P.ch(u,s,q,r,p,n,m.r)},
gcI:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.f
s.shH(new P.el(P.mq(u==null?"":u),[t,t]))}return s.Q},
ge6:function(){return this.c!=null},
ge9:function(){return this.f!=null},
ge7:function(){return this.r!=null},
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
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.U(b).$ilq)if(s.a==b.gbF())if(s.c!=null===b.ge6())if(s.b==b.geJ())if(s.gcw(s)==b.gcw(b))if(s.gbx(s)==b.gbx(b))if(s.e===b.geq(b)){u=s.f
t=u==null
if(!t===b.ge9()){if(t)u=""
if(u===b.gcH(b)){u=s.r
t=u==null
if(!t===b.ge7()){if(t)u=""
u=u===b.ge5()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gJ:function(a){var u=this.z
return u==null?this.z=C.b.gJ(this.i(0)):u},
shH:function(a){var u=P.f
this.Q=H.l(a,"$iz",[u,u],"$az")},
$ilq:1,
gbF:function(){return this.a},
geq:function(a){return this.e}}
P.ki.prototype={
$1:function(a){throw H.c(P.a7("Invalid port",this.a,this.b+1))},
$S:41}
P.kj.prototype={
$1:function(a){return P.fc(C.X,a,C.h,!1)},
$S:23}
P.kl.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.fc(C.n,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.fc(C.n,b,C.h,!0))}},
$S:24}
P.kk.prototype={
$2:function(a,b){var u,t
H.J(a)
if(b==null||typeof b==="string")this.a.$2(a,H.J(b))
else for(u=J.bC(H.n2(b,"$ij")),t=this.a;u.C();)t.$2(a,H.J(u.gL(u)))},
$S:40}
P.jb.prototype={
geI:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.e(o,0)
u=q.a
o=o[0]+1
t=C.b.ec(u,"?",o)
s=u.length
if(t>=0){r=P.dm(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jG("data",p,p,p,P.dm(u,o,s,C.A,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.e(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kt.prototype={
$1:function(a){return new Uint8Array(96)},
$S:48}
P.ks.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.nC(u,0,96,b)
return u},
$S:39}
P.ku.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.E(b,s)^96
if(r>=t)return H.e(a,r)
a[r]=c}}}
P.kv.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.E(b,0),t=C.b.E(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.e(a,r)
a[r]=c}}}
P.k6.prototype={
ge6:function(){return this.c>0},
ge8:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.E(t)
t=u+1<t
u=t}else u=!1
return u},
ge9:function(){var u=this.f
if(typeof u!=="number")return u.S()
return u<this.r},
ge7:function(){return this.r<this.a.length},
gdl:function(){return this.b===4&&C.b.a1(this.a,"http")},
gdm:function(){return this.b===5&&C.b.a1(this.a,"https")},
gbF:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdl())q=t.x="http"
else if(t.gdm()){t.x="https"
q="https"}else if(q===4&&C.b.a1(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a1(t.a,r)){t.x=r
q=r}else{q=C.b.B(t.a,0,q)
t.x=q}return q},
geJ:function(){var u=this.c,t=this.b+3
return u>t?C.b.B(this.a,t,u-1):""},
gcw:function(a){var u=this.c
return u>0?C.b.B(this.a,u,this.d):""},
gbx:function(a){var u,t=this
if(t.ge8()){u=t.d
if(typeof u!=="number")return u.p()
return P.fr(C.b.B(t.a,u+1,t.e),null,null)}if(t.gdl())return 80
if(t.gdm())return 443
return 0},
geq:function(a){return C.b.B(this.a,this.e,this.f)},
gcH:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.S()
return u<t?C.b.B(this.a,u+1,t):""},
ge5:function(){var u=this.r,t=this.a
return u<t.length?C.b.a9(t,u+1):""},
gcI:function(){var u=this,t=u.f
if(typeof t!=="number")return t.S()
if(t>=u.r)return C.Y
t=P.f
return new P.el(P.mq(u.gcH(u)),[t,t])},
ex:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.l(b,"$iz",[P.f,null],"$az")
u=k.gbF()
t=u==="file"
s=k.c
r=s>0?C.b.B(k.a,k.b+3,s):""
q=k.ge8()?k.gbx(k):j
s=k.c
if(s>0)p=C.b.B(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.B(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a1(o,"/"))o="/"+o
m=P.lv(j,0,0,b)
n=k.r
l=n<s.length?C.b.a9(s,n+1):j
return new P.ch(u,r,p,q,o,m,l)},
gJ:function(a){var u=this.y
return u==null?this.y=C.b.gJ(this.a):u},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.U(b).$ilq&&this.a===b.i(0)},
i:function(a){return this.a},
$ilq:1}
P.jG.prototype={}
W.x.prototype={}
W.ft.prototype={
gn:function(a){return a.length}}
W.dw.prototype={
i:function(a){return String(a)},
$idw:1}
W.fu.prototype={
i:function(a){return String(a)}}
W.cu.prototype={$icu:1}
W.bY.prototype={$ibY:1}
W.bD.prototype={$ibD:1}
W.bZ.prototype={
cQ:function(a,b,c){if(c!=null)return a.getContext(b,P.px(c))
return a.getContext(b)},
eM:function(a,b){return this.cQ(a,b,null)},
$ibZ:1}
W.cx.prototype={$icx:1}
W.bE.prototype={
gn:function(a){return a.length}}
W.cz.prototype={$icz:1}
W.fM.prototype={
gn:function(a){return a.length}}
W.Y.prototype={$iY:1}
W.cA.prototype={
gn:function(a){return a.length}}
W.fN.prototype={}
W.b4.prototype={}
W.b5.prototype={}
W.fO.prototype={
gn:function(a){return a.length}}
W.fP.prototype={
gn:function(a){return a.length}}
W.fS.prototype={
gn:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.fT.prototype={
i:function(a){return String(a)}}
W.dH.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.l(c,"$ian",[P.ab],"$aan")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[[P.an,P.ab]]},
$ay:function(){return[[P.an,P.ab]]},
$ij:1,
$aj:function(){return[[P.an,P.ab]]},
$ib:1,
$ab:function(){return[[P.an,P.ab]]},
$aH:function(){return[[P.an,P.ab]]}}
W.dI.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gaI(a))+" x "+H.i(this.gaF(a))},
u:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$ian)return!1
return a.left===u.gbw(b)&&a.top===u.gbA(b)&&this.gaI(a)===u.gaI(b)&&this.gaF(a)===u.gaF(b)},
gJ:function(a){return W.mA(C.c.gJ(a.left),C.c.gJ(a.top),C.c.gJ(this.gaI(a)),C.c.gJ(this.gaF(a)))},
gdM:function(a){return a.bottom},
gaF:function(a){return a.height},
gbw:function(a){return a.left},
gbz:function(a){return a.right},
gbA:function(a){return a.top},
gaI:function(a){return a.width},
$ian:1,
$aan:function(){return[P.ab]}}
W.fU.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.J(c)
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[P.f]},
$ay:function(){return[P.f]},
$ij:1,
$aj:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aH:function(){return[P.f]}}
W.fV.prototype={
gn:function(a){return a.length}}
W.jE.prototype={
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
gV:function(a){var u=this.jq(this)
return new J.av(u,u.length,[H.r(u,0)])},
$ay:function(){return[W.V]},
$aj:function(){return[W.V]},
$ab:function(){return[W.V]}}
W.V.prototype={
giq:function(a){return new W.jH(a)},
gck:function(a){return new W.jE(a,a.children)},
gdN:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.S()
if(s<0)s=-s*0
if(typeof r!=="number")return r.S()
if(r<0)r=-r*0
return new P.an(u,t,s,r,[P.ab])},
i:function(a){return a.localName},
af:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.m_
if(u==null){u=H.d([],[W.aC])
t=new W.e0(u)
C.a.h(u,W.mz(null))
C.a.h(u,W.mB())
$.m_=t
d=t}else d=u
u=$.lZ
if(u==null){u=new W.fd(d)
$.lZ=u
c=u}else{u.a=d
c=u}}if($.bn==null){u=document
t=u.implementation.createHTMLDocument("")
$.bn=t
$.lb=t.createRange()
t=$.bn.createElement("base")
H.h(t,"$icu")
t.href=u.baseURI
$.bn.head.appendChild(t)}u=$.bn
if(u.body==null){t=u.createElement("body")
u.body=H.h(t,"$ibD")}u=$.bn
if(!!this.$ibD)s=u.body
else{s=u.createElement(a.tagName)
$.bn.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.U(C.V,a.tagName)){$.lb.selectNodeContents(s)
r=$.lb.createContextualFragment(b)}else{s.innerHTML=b
r=$.bn.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bn.body
if(s==null?u!=null:s!==u)J.lS(s)
c.cR(r)
document.adoptNode(r)
return r},
iz:function(a,b,c){return this.af(a,b,c,null)},
eO:function(a,b){a.textContent=null
a.appendChild(this.af(a,b,null,null))},
$iV:1,
geB:function(a){return a.tagName}}
W.fZ.prototype={
$1:function(a){return!!J.U(H.h(a,"$iG")).$iV},
$S:27}
W.o.prototype={$io:1}
W.k.prototype={
ih:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.ff(a,b,c,!1)},
ff:function(a,b,c,d){return a.addEventListener(b,H.cl(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ik:1}
W.aI.prototype={$iaI:1}
W.cD.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaI")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aI]},
$ay:function(){return[W.aI]},
$ij:1,
$aj:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$icD:1,
$aH:function(){return[W.aI]}}
W.h4.prototype={
gn:function(a){return a.length}}
W.h8.prototype={
gn:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.hd.prototype={
gn:function(a){return a.length}}
W.c2.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iG")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.G]},
$ay:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ic2:1,
$aH:function(){return[W.G]}}
W.bo.prototype={$ibo:1,
gdO:function(a){return a.data}}
W.cG.prototype={$icG:1}
W.cH.prototype={$icH:1}
W.b8.prototype={$ib8:1}
W.dT.prototype={
i:function(a){return String(a)},
$idT:1}
W.hO.prototype={
gn:function(a){return a.length}}
W.cM.prototype={$icM:1}
W.hP.prototype={
j:function(a,b){return P.bw(a.get(H.J(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bw(t.value[1]))}},
ga2:function(a){var u=H.d([],[P.f])
this.I(a,new W.hQ(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.I("Not supported"))},
$aae:function(){return[P.f,null]},
$iz:1,
$az:function(){return[P.f,null]}}
W.hQ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hR.prototype={
j:function(a,b){return P.bw(a.get(H.J(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bw(t.value[1]))}},
ga2:function(a){var u=H.d([],[P.f])
this.I(a,new W.hS(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.I("Not supported"))},
$aae:function(){return[P.f,null]},
$iz:1,
$az:function(){return[P.f,null]}}
W.hS.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aU.prototype={$iaU:1}
W.hT.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaU")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aU]},
$ay:function(){return[W.aU]},
$ij:1,
$aj:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aH:function(){return[W.aU]}}
W.af.prototype={$iaf:1}
W.ar.prototype={
gaJ:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.mh("No elements"))
if(t>1)throw H.c(P.mh("More than one element"))
return u.firstChild},
aw:function(a,b){var u,t,s,r
H.l(b,"$ij",[W.G],"$aj")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
k:function(a,b,c){var u,t
H.h(c,"$iG")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
u.replaceChild(c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.dL(u,u.length,[H.bU(C.Z,u,"H",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$ay:function(){return[W.G]},
$aj:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
je:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
ji:function(a,b){var u,t
try{u=a.parentNode
J.nz(u,b,a)}catch(t){H.ak(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eR(a):u},
io:function(a,b){return a.appendChild(H.h(b,"$iG"))},
hM:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.cS.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iG")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.G]},
$ay:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aH:function(){return[W.G]}}
W.aV.prototype={$iaV:1,
gn:function(a){return a.length}}
W.i8.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaV")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aV]},
$ay:function(){return[W.aV]},
$ij:1,
$aj:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aH:function(){return[W.aV]}}
W.ij.prototype={
j:function(a,b){return P.bw(a.get(H.J(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bw(t.value[1]))}},
ga2:function(a){var u=H.d([],[P.f])
this.I(a,new W.ik(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.I("Not supported"))},
$aae:function(){return[P.f,null]},
$iz:1,
$az:function(){return[P.f,null]}}
W.ik.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.im.prototype={
gn:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.ix.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaW")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aW]},
$ay:function(){return[W.aW]},
$ij:1,
$aj:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aH:function(){return[W.aW]}}
W.aX.prototype={$iaX:1}
W.iy.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaX")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aX]},
$ay:function(){return[W.aX]},
$ij:1,
$aj:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aH:function(){return[W.aX]}}
W.aY.prototype={$iaY:1,
gn:function(a){return a.length}}
W.iB.prototype={
j:function(a,b){return a.getItem(H.J(b))},
k:function(a,b,c){a.setItem(b,c)},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga2:function(a){var u=H.d([],[P.f])
this.I(a,new W.iC(u))
return u},
gn:function(a){return a.length},
$aae:function(){return[P.f,P.f]},
$iz:1,
$az:function(){return[P.f,P.f]}}
W.iC.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:24}
W.aL.prototype={$iaL:1}
W.be.prototype={$ibe:1}
W.ec.prototype={
af:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bH(a,b,c,d)
u=W.nP("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ar(t).aw(0,new W.ar(u))
return t}}
W.iI.prototype={
af:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bH(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.af(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaJ(u)
s.toString
u=new W.ar(s)
r=u.gaJ(u)
t.toString
r.toString
new W.ar(t).aw(0,new W.ar(r))
return t}}
W.iJ.prototype={
af:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bH(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.af(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaJ(u)
t.toString
s.toString
new W.ar(t).aw(0,new W.ar(s))
return t}}
W.d_.prototype={$id_:1}
W.aZ.prototype={$iaZ:1}
W.aM.prototype={$iaM:1}
W.iL.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaM")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aM]},
$ay:function(){return[W.aM]},
$ij:1,
$aj:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aH:function(){return[W.aM]}}
W.iM.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaZ")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aZ]},
$ay:function(){return[W.aZ]},
$ij:1,
$aj:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aH:function(){return[W.aZ]}}
W.iQ.prototype={
gn:function(a){return a.length}}
W.b_.prototype={$ib_:1}
W.b0.prototype={$ib0:1}
W.iU.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$ib_")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.b_]},
$ay:function(){return[W.b_]},
$ij:1,
$aj:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aH:function(){return[W.b_]}}
W.iV.prototype={
gn:function(a){return a.length}}
W.bQ.prototype={}
W.jg.prototype={
i:function(a){return String(a)}}
W.jv.prototype={
gn:function(a){return a.length}}
W.bi.prototype={
giC:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.I("deltaY is not supported"))},
giB:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.I("deltaX is not supported"))},
$ibi:1}
W.d9.prototype={
hN:function(a,b){return a.requestAnimationFrame(H.cl(H.n(b,{func:1,ret:-1,args:[P.ab]}),1))},
fv:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.da.prototype={$ida:1}
W.jF.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iY")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.Y]},
$ay:function(){return[W.Y]},
$ij:1,
$aj:function(){return[W.Y]},
$ib:1,
$ab:function(){return[W.Y]},
$aH:function(){return[W.Y]}}
W.ev.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
u:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$ian)return!1
return a.left===u.gbw(b)&&a.top===u.gbA(b)&&a.width===u.gaI(b)&&a.height===u.gaF(b)},
gJ:function(a){return W.mA(C.c.gJ(a.left),C.c.gJ(a.top),C.c.gJ(a.width),C.c.gJ(a.height))},
gaF:function(a){return a.height},
gaI:function(a){return a.width}}
W.jU.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaS")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aS]},
$ay:function(){return[W.aS]},
$ij:1,
$aj:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aH:function(){return[W.aS]}}
W.eN.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iG")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.G]},
$ay:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aH:function(){return[W.G]}}
W.k7.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaY")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aY]},
$ay:function(){return[W.aY]},
$ij:1,
$aj:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aH:function(){return[W.aY]}}
W.kb.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaL")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aL]},
$ay:function(){return[W.aL]},
$ij:1,
$aj:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aH:function(){return[W.aL]}}
W.jD.prototype={
I:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.ga2(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.v)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga2:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.f])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.e(r,t)
s=H.h(r[t],"$ida")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aae:function(){return[P.f,P.f]},
$az:function(){return[P.f,P.f]}}
W.jH.prototype={
j:function(a,b){return this.a.getAttribute(H.J(b))},
k:function(a,b,c){this.a.setAttribute(b,c)},
gn:function(a){return this.ga2(this).length}}
W.jI.prototype={}
W.lt.prototype={}
W.jJ.prototype={}
W.jK.prototype={
$1:function(a){return this.a.$1(H.h(a,"$io"))},
$S:37}
W.bS.prototype={
f2:function(a){var u
if($.dc.giS($.dc)){for(u=0;u<262;++u)$.dc.k(0,C.U[u],W.pI())
for(u=0;u<12;++u)$.dc.k(0,C.q[u],W.pJ())}},
aS:function(a){return $.nt().U(0,W.cB(a))},
ax:function(a,b,c){var u=$.dc.j(0,H.i(W.cB(a))+"::"+b)
if(u==null)u=$.dc.j(0,"*::"+b)
if(u==null)return!1
return H.lB(u.$4(a,b,c,this))},
$iaC:1}
W.H.prototype={
gV:function(a){return new W.dL(a,this.gn(a),[H.bU(this,a,"H",0)])}}
W.e0.prototype={
aS:function(a){return C.a.dJ(this.a,new W.i0(a))},
ax:function(a,b,c){return C.a.dJ(this.a,new W.i_(a,b,c))},
$iaC:1}
W.i0.prototype={
$1:function(a){return H.h(a,"$iaC").aS(this.a)},
$S:29}
W.i_.prototype={
$1:function(a){return H.h(a,"$iaC").ax(this.a,this.b,this.c)},
$S:29}
W.eV.prototype={
fa:function(a,b,c,d){var u,t,s
this.a.aw(0,c)
u=b.bD(0,new W.k4())
t=b.bD(0,new W.k5())
this.b.aw(0,u)
s=this.c
s.aw(0,C.x)
s.aw(0,t)},
aS:function(a){return this.a.U(0,W.cB(a))},
ax:function(a,b,c){var u=this,t=W.cB(a),s=u.c
if(s.U(0,H.i(t)+"::"+b))return u.d.il(c)
else if(s.U(0,"*::"+b))return u.d.il(c)
else{s=u.b
if(s.U(0,H.i(t)+"::"+b))return!0
else if(s.U(0,"*::"+b))return!0
else if(s.U(0,H.i(t)+"::*"))return!0
else if(s.U(0,"*::*"))return!0}return!1},
$iaC:1}
W.k4.prototype={
$1:function(a){return!C.a.U(C.q,H.J(a))},
$S:30}
W.k5.prototype={
$1:function(a){return C.a.U(C.q,H.J(a))},
$S:30}
W.kd.prototype={
ax:function(a,b,c){if(this.eV(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.U(0,b)
return!1}}
W.ke.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.J(a))},
$S:23}
W.kc.prototype={
aS:function(a){var u=J.U(a)
if(!!u.$icV)return!1
u=!!u.$iq
if(u&&W.cB(a)==="foreignObject")return!1
if(u)return!0
return!1},
ax:function(a,b,c){if(b==="is"||C.b.a1(b,"on"))return!1
return this.aS(a)},
$iaC:1}
W.dL.prototype={
C:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdk(J.du(u.a,t))
u.c=t
return!0}u.sdk(null)
u.c=s
return!1},
gL:function(a){return this.d},
sdk:function(a){this.d=H.C(a,H.r(this,0))},
$ib7:1}
W.aC.prototype={}
W.k2.prototype={$iql:1}
W.fd.prototype={
cR:function(a){new W.ko(this).$2(a,null)},
b3:function(a,b){if(b==null)J.lS(a)
else b.removeChild(a)},
hS:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nD(a)
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
p=H.F(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ak(r)}t="element unprintable"
try{t=J.au(a)}catch(r){H.ak(r)}try{s=W.cB(a)
this.hR(H.h(a,"$iV"),b,p,t,s,H.h(o,"$iz"),H.J(n))}catch(r){if(H.ak(r) instanceof P.aR)throw r
else{this.b3(a,b)
window
q="Removing corrupted element "+H.i(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hR:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b3(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aS(a)){o.b3(a,b)
window
u="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.ax(a,"is",g)){o.b3(a,b)
window
u="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga2(f)
t=H.d(u.slice(0),[H.r(u,0)])
for(s=f.ga2(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.e(t,s)
r=t[s]
q=o.a
p=J.nG(r)
H.J(r)
if(!q.ax(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.i(e)+" "+r+'="'+H.i(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.U(a).$id_)o.cR(a.content)},
$iq5:1}
W.ko.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hS(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b3(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ak(s)
r=H.h(u,"$iG")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.h(t,"$iG")}},
$S:35}
W.eu.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.f0.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
P.k8.prototype={
e4:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cO:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.U(a)
if(!!u.$iaz)return new Date(a.a)
if(!!u.$iok)throw H.c(P.j8("structured clone of RegExp"))
if(!!u.$iaI)return a
if(!!u.$ibY)return a
if(!!u.$icD)return a
if(!!u.$ibo)return a
if(!!u.$icP||!!u.$ibL||!!u.$icM)return a
if(!!u.$iz){t=q.e4(a)
s=q.b
if(t>=s.length)return H.e(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.I(a,new P.ka(p,q))
return p.a}if(!!u.$ib){t=q.e4(a)
p=q.b
if(t>=p.length)return H.e(p,t)
r=p[t]
if(r!=null)return r
return q.iy(a,t)}throw H.c(P.j8("structured clone of other type"))},
iy:function(a,b){var u,t=J.co(a),s=t.gn(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.cO(t.j(a,u)))
return r}}
P.ka.prototype={
$2:function(a,b){this.a.a[a]=this.b.cO(b)},
$S:5}
P.fa.prototype={$ibo:1,
gdO:function(a){return this.a}}
P.kB.prototype={
$2:function(a,b){this.a[a]=b},
$S:5}
P.k9.prototype={}
P.h5.prototype={
gbo:function(){var u=this.b,t=H.at(u,"y",0),s=W.V
return new H.hx(new H.d8(u,H.n(new P.h6(),{func:1,ret:P.T,args:[t]}),[t]),H.n(new P.h7(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.h(c,"$iV")
u=this.gbo()
J.nE(u.b.$1(J.fs(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aE(this.gbo().a)},
j:function(a,b){var u=this.gbo()
return u.b.$1(J.fs(u.a,b))},
gV:function(a){var u=P.m2(this.gbo(),!1,W.V)
return new J.av(u,u.length,[H.r(u,0)])},
$ay:function(){return[W.V]},
$aj:function(){return[W.V]},
$ab:function(){return[W.V]}}
P.h6.prototype={
$1:function(a){return!!J.U(H.h(a,"$iG")).$iV},
$S:27}
P.h7.prototype={
$1:function(a){return H.t(H.h(a,"$iG"),"$iV")},
$S:34}
P.jY.prototype={
gbz:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.E(t)
return H.C(u+t,H.r(this,0))},
gdM:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.E(t)
return H.C(u+t,H.r(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.i(u.a)+", "+H.i(u.b)+") "+H.i(u.c)+" x "+H.i(u.d)},
u:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.U(b)
if(!!u.$ian){t=p.a
if(t==u.gbw(b)){s=p.b
if(s==u.gbA(b)){r=p.c
if(typeof t!=="number")return t.p()
if(typeof r!=="number")return H.E(r)
q=H.r(p,0)
if(H.C(t+r,q)===u.gbz(b)){t=p.d
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.E(t)
u=H.C(s+t,q)===u.gdM(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t=this,s=t.a,r=J.dv(s),q=t.b,p=J.dv(q),o=t.c
if(typeof s!=="number")return s.p()
if(typeof o!=="number")return H.E(o)
u=H.r(t,0)
o=C.e.gJ(H.C(s+o,u))
s=t.d
if(typeof q!=="number")return q.p()
if(typeof s!=="number")return H.E(s)
u=C.e.gJ(H.C(q+s,u))
return P.oJ(P.jW(P.jW(P.jW(P.jW(0,r),p),o),u))}}
P.an.prototype={
gbw:function(a){return this.a},
gbA:function(a){return this.b},
gaI:function(a){return this.c},
gaF:function(a){return this.d}}
P.b9.prototype={$ib9:1}
P.hm.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ib9")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ay:function(){return[P.b9]},
$ij:1,
$aj:function(){return[P.b9]},
$ib:1,
$ab:function(){return[P.b9]},
$aH:function(){return[P.b9]}}
P.bc.prototype={$ibc:1}
P.i3.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ibc")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ay:function(){return[P.bc]},
$ij:1,
$aj:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$aH:function(){return[P.bc]}}
P.ia.prototype={
gn:function(a){return a.length}}
P.cV.prototype={$icV:1}
P.iH.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.J(c)
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ay:function(){return[P.f]},
$ij:1,
$aj:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aH:function(){return[P.f]}}
P.q.prototype={
gck:function(a){return new P.h5(a,new W.ar(a))},
af:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aC])
C.a.h(p,W.mz(null))
C.a.h(p,W.mB())
C.a.h(p,new W.kc())
c=new W.fd(new W.e0(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).iz(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ar(s)
q=p.gaJ(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$iq:1}
P.bg.prototype={$ibg:1}
P.iW.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ibg")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ay:function(){return[P.bg]},
$ij:1,
$aj:function(){return[P.bg]},
$ib:1,
$ab:function(){return[P.bg]},
$aH:function(){return[P.bg]}}
P.eF.prototype={}
P.eG.prototype={}
P.eQ.prototype={}
P.eR.prototype={}
P.f1.prototype={}
P.f2.prototype={}
P.f8.prototype={}
P.f9.prototype={}
P.S.prototype={$ij:1,
$aj:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]},
$iou:1}
P.fx.prototype={
gn:function(a){return a.length}}
P.fy.prototype={
j:function(a,b){return P.bw(a.get(H.J(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bw(t.value[1]))}},
ga2:function(a){var u=H.d([],[P.f])
this.I(a,new P.fz(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.I("Not supported"))},
$aae:function(){return[P.f,null]},
$iz:1,
$az:function(){return[P.f,null]}}
P.fz.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.fA.prototype={
gn:function(a){return a.length}}
P.bX.prototype={}
P.i4.prototype={
gn:function(a){return a.length}}
P.et.prototype={}
P.dz.prototype={$idz:1}
P.e3.prototype={$ie3:1}
P.ca.prototype={
jn:function(a,b,c,d,e,f,g){var u,t=J.U(g)
if(!!t.$ibo)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.py(g))
return}if(!!t.$icG)t=!0
else t=!1
if(t){this.i3(a,b,c,d,e,f,g)
return}throw H.c(P.dx("Incorrect number or type of arguments"))},
i3:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a3:function(a,b,c){return a.uniform1f(b,c)},
bB:function(a,b,c){return a.uniform1i(b,c)},
W:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ju:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eG:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eH:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ica:1}
P.e7.prototype={$ie7:1}
P.ee.prototype={$iee:1}
P.ej.prototype={$iej:1}
P.iz.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return P.bw(a.item(b))},
k:function(a,b,c){H.h(c,"$iz")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ay:function(){return[[P.z,,,]]},
$ij:1,
$aj:function(){return[[P.z,,,]]},
$ib:1,
$ab:function(){return[[P.z,,,]]},
$aH:function(){return[[P.z,,,]]}}
P.eY.prototype={}
P.eZ.prototype={}
O.a5.prototype={
bI:function(a){var u=this
u.sfI(H.d([],[a]))
u.sds(null)
u.sdn(null)
u.sdt(null)},
cS:function(a,b,c){var u=this,t=H.at(u,"a5",0)
H.n(b,{func:1,ret:P.T,args:[[P.j,t]]})
t={func:1,ret:-1,args:[P.m,[P.j,t]]}
H.n(a,t)
H.n(c,t)
u.sds(b)
u.sdn(a)
u.sdt(c)},
bj:function(a,b){return this.cS(a,null,b)},
hq:function(a){var u
H.l(a,"$ij",[H.at(this,"a5",0)],"$aj")
u=this.b
if(u!=null)return u.$1(a)
return!0},
fQ:function(a,b){var u
H.l(b,"$ij",[H.at(this,"a5",0)],"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.av(u,u.length,[H.r(u,0)])},
K:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.at(s,"a5",0)
H.C(b,r)
r=[r]
if(H.F(s.hq(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.fQ(t,H.d([b],r))}},
sfI:function(a){this.a=H.l(a,"$ib",[H.at(this,"a5",0)],"$ab")},
sds:function(a){this.b=H.n(a,{func:1,ret:P.T,args:[[P.j,H.at(this,"a5",0)]]})},
sdn:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.m,[P.j,H.at(this,"a5",0)]]})},
sdt:function(a){H.n(a,{func:1,ret:-1,args:[P.m,[P.j,H.at(this,"a5",0)]]})},
$ij:1}
O.cK.prototype={
gn:function(a){return this.a.length},
gv:function(){var u=this.b
return u==null?this.b=D.W():u},
aK:function(){var u=this.b
if(u!=null)u.F(null)},
ga8:function(a){var u=this.a
if(u.length>0)return C.a.gaz(u)
else return V.cL()},
eu:function(a){var u=this.a
if(a==null)C.a.h(u,V.cL())
else C.a.h(u,a)
this.aK()},
cG:function(){var u=this.a
if(u.length>0){u.pop()
this.aK()}},
sbT:function(a){this.a=H.l(a,"$ib",[V.am],"$ab")}}
E.fD.prototype={}
E.aq.prototype={
d5:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.av(u,u.length,[H.r(u,0)]);u.C();){t=u.d
if(t.f==null)t.d5()}},
sab:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().M(0,s.gel())
u=s.c
if(u!=null)u.gv().h(0,s.gel())
t=new D.K("shape",r,s.c,[F.e8])
t.b=!0
s.an(t)}},
sbg:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gv().M(0,s.gen())
u=s.f
s.f=a
if(a!=null)a.gv().h(0,s.gen())
s.d5()
t=new D.K("technique",u,s.f,[O.bP])
t.b=!0
s.an(t)}},
saX:function(a){var u,t,s=this
if(!J.Q(s.r,a)){u=s.r
if(u!=null)u.gv().M(0,s.gej())
if(a!=null)a.gv().h(0,s.gej())
s.r=a
t=new D.K("mover",u,a,[U.ac])
t.b=!0
s.an(t)}},
ap:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aq(0,b,s):null
if(!J.Q(q,s.x)){u=s.x
s.x=q
t=new D.K("matrix",u,q,[V.am])
t.b=!0
s.an(t)}r=s.f
if(r!=null)r.ap(0,b)
for(r=s.y.a,r=new J.av(r,r.length,[H.r(r,0)]);r.C();)r.d.ap(0,b)},
aY:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga8(s))
else C.a.h(s.a,r.q(0,s.ga8(s)))
s.aK()
a.ev(t.f)
s=a.dy
u=(s&&C.a).gaz(s)
if(u!=null&&t.d!=null)u.jh(a,t)
for(s=t.y.a,s=new J.av(s,s.length,[H.r(s,0)]);s.C();)s.d.aY(a)
a.es()
a.dx.cG()},
gv:function(){var u=this.z
return u==null?this.z=D.W():u},
an:function(a){var u=this.z
if(u!=null)u.F(a)},
a_:function(){return this.an(null)},
em:function(a){H.h(a,"$iB")
this.e=null
this.an(a)},
j3:function(){return this.em(null)},
eo:function(a){this.an(H.h(a,"$iB"))},
j4:function(){return this.eo(null)},
ek:function(a){this.an(H.h(a,"$iB"))},
j2:function(){return this.ek(null)},
ei:function(a){this.an(H.h(a,"$iB"))},
j_:function(){return this.ei(null)},
iZ:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ij",[E.aq],"$aj")
for(u=b.length,t=this.geh(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c0()
o.sal(null)
o.saP(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sal(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a_()},
j1:function(a,b){var u,t
H.l(b,"$ij",[E.aq],"$aj")
for(u=b.gV(b),t=this.geh();u.C();)u.gL(u).gv().M(0,t)
this.a_()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sf1:function(a,b){this.y=H.l(b,"$ia5",[E.aq],"$aa5")},
$icO:1}
E.ie.prototype={
eY:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.az(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cK()
t=[V.am]
u.sbT(H.d([],t))
u.b=null
u.gv().h(0,new E.ig(s))
s.cy=u
u=new O.cK()
u.sbT(H.d([],t))
u.b=null
u.gv().h(0,new E.ih(s))
s.db=u
u=new O.cK()
u.sbT(H.d([],t))
u.b=null
u.gv().h(0,new E.ii(s))
s.dx=u
s.si2(H.d([],[O.bP]))
u=s.dy;(u&&C.a).h(u,null)
s.shY(new H.a2([P.f,A.cW]))},
gjd:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga8(s)
u=t.db
u=t.z=s.q(0,u.ga8(u))
s=u}return s},
ev:function(a){var u=this.dy,t=a==null?(u&&C.a).gaz(u):a;(u&&C.a).h(u,t)},
es:function(){var u=this.dy
if(u.length>1)u.pop()},
si2:function(a){this.dy=H.l(a,"$ib",[O.bP],"$ab")},
shY:function(a){this.fr=H.l(a,"$iz",[P.f,A.cW],"$az")}}
E.ig.prototype={
$1:function(a){var u
H.h(a,"$iB")
u=this.a
u.ch=u.z=null},
$S:10}
E.ih.prototype={
$1:function(a){var u
H.h(a,"$iB")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:10}
E.ii.prototype={
$1:function(a){var u
H.h(a,"$iB")
u=this.a
u.cx=u.ch=null},
$S:10}
E.ef.prototype={
d_:function(a){H.h(a,"$iB")
this.ey()},
cZ:function(){return this.d_(null)},
giN:function(){var u,t=this,s=Date.now(),r=C.e.a7(P.lY(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.az(s,!1)
return u/r},
dw:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.q()
if(typeof r!=="number")return H.E(r)
u=C.c.cv(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.q()
t=C.c.cv(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.mk(C.o,s.gjj())}},
ey:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iP(this),{func:1,ret:-1,args:[P.ab]})
C.E.fv(u)
C.E.hN(u,W.mQ(t,P.ab))}},
jg:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dw()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.az(r,!1)
s.y=P.lY(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aK()
r=s.db
C.a.sn(r.a,0)
r.aK()
r=s.dx
C.a.sn(r.a,0)
r.aK()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aY(p.e)}s=p.z
if(s!=null)s.F(null)}catch(q){u=H.ak(q)
t=H.cq(q)
P.lK("Error: "+H.i(u))
P.lK("Stack: "+H.i(t))
throw H.c(u)}}}
E.iP.prototype={
$1:function(a){var u
H.n4(a)
u=this.a
if(u.ch){u.ch=!1
u.jg()}},
$S:57}
Z.er.prototype={$iq_:1}
Z.dA.prototype={
cd:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ak(s)
t=P.D('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.jw.prototype={$iq0:1}
Z.dB.prototype={
aW:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
cd:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].cd(a)},
jt:function(a){var u,t,s
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
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.au(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sfE:function(a){this.b=H.l(a,"$ib",[Z.bJ],"$ab")},
$iq9:1}
Z.bJ.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c7(this.c)+"'")+"]"}}
Z.bv.prototype={
gcU:function(a){var u=this.a,t=(u&$.bA().a)!==0?3:0
if((u&$.bz().a)!==0)t+=3
if((u&$.by().a)!==0)t+=3
if((u&$.bW().a)!==0)t+=2
if((u&$.bB().a)!==0)t+=3
if((u&$.ds().a)!==0)t+=3
if((u&$.dt().a)!==0)t+=4
if((u&$.ct().a)!==0)++t
return(u&$.bx().a)!==0?t+4:t},
ip:function(a){var u,t=$.bA(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bz()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.by()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bW()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bB()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ds()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dt()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ct()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bx()
if((s&t.a)!==0)if(u===a)return t
return $.nr()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bv))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.f]),t=this.a
if((t&$.bA().a)!==0)C.a.h(u,"Pos")
if((t&$.bz().a)!==0)C.a.h(u,"Norm")
if((t&$.by().a)!==0)C.a.h(u,"Binm")
if((t&$.bW().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bB().a)!==0)C.a.h(u,"TxtCube")
if((t&$.ds().a)!==0)C.a.h(u,"Clr3")
if((t&$.dt().a)!==0)C.a.h(u,"Clr4")
if((t&$.ct().a)!==0)C.a.h(u,"Weight")
if((t&$.bx().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fG.prototype={}
D.c0.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.B]}
H.n(b,u)
if(this.a==null)this.sal(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
M:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.B]})
u=s.a
u=u==null?null:C.a.U(u,b)
if(u===!0){u=s.a
t=(u&&C.a).M(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.U(u,b)
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
if(a==null){a=new D.B()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.I(P.m2(u,!0,{func:1,ret:-1,args:[D.B]}),new D.h1(q))
u=r.b
if(u!=null){r.saP(H.d([],[{func:1,ret:-1,args:[D.B]}]))
C.a.I(u,new D.h2(q))}return!0},
iF:function(){return this.F(null)},
ai:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.F(u)}}},
sal:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")},
saP:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")}}
D.h1.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.h2.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.B.prototype={}
D.c3.prototype={}
D.c4.prototype={}
D.K.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.dC.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dC))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.dQ.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dQ))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.hl.prototype={
j9:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
j5:function(a){this.c=a.b
this.d.M(0,a.a)
return!1},
shG:function(a){this.d=H.l(a,"$img",[P.m],"$amg")}}
X.dU.prototype={}
X.ht.prototype={
b1:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.q()
u=b.b
t=q.ch
if(typeof u!=="number")return u.q()
s=new V.a9(o.a+n*m,o.b+u*t)
t=q.a.gaT()
r=new X.bs(a,V.bO(),q.x,t,s)
r.b=!0
q.z=new P.az(p,!1)
q.x=s
return r},
cF:function(a,b){this.r=a.a
return!1},
bf:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eN()
if(typeof u!=="number")return u.ak()
this.r=(u&~t)>>>0
return!1},
be:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.b1(a,b))
return!0},
ja:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaT()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.q()
q=a.b
p=o.cy
if(typeof q!=="number")return q.q()
t=new X.cN(new V.X(s*r,q*p),u,t)
t.b=!0
n.F(t)
return!0},
hf:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dU(c,r.a.gaT(),b)
s.b=!0
t.F(s)
r.y=new P.az(u,!1)
r.x=V.bO()}}
X.aB.prototype={
u:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aB))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.F(this.b)?"Alt+":""
return u+(H.F(this.c)?"Shift+":"")}}
X.bs.prototype={}
X.hU.prototype={
bQ:function(a,b,c){var u=this,t=new P.az(Date.now(),!1),s=u.a.gaT(),r=new X.bs(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cF:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.F(this.bQ(a,b,!0))
return!0},
bf:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eN()
if(typeof t!=="number")return t.ak()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.F(u.bQ(a,b,!0))
return!0},
be:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.bQ(a,b,!1))
return!0},
jb:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaT()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.q()
r=a.b
q=p.ch
if(typeof r!=="number")return r.q()
u=new X.cN(new V.X(t*s,r*q),u,b)
u.b=!0
o.F(u)
return!0},
gdQ:function(){var u=this.b
return u==null?this.b=D.W():u},
gbC:function(){var u=this.c
return u==null?this.c=D.W():u},
gef:function(){var u=this.d
return u==null?this.d=D.W():u}}
X.cN.prototype={}
X.i9.prototype={}
X.eh.prototype={}
X.iT.prototype={
b1:function(a,b){var u,t,s,r,q=this
H.l(a,"$ib",[V.a9],"$ab")
u=new P.az(Date.now(),!1)
t=a.length>0?a[0]:V.bO()
s=q.a.gaT()
r=new X.eh(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
j8:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.b
if(u==null)return!1
u.F(this.b1(a,!0))
return!0},
j6:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.c
if(u==null)return!1
u.F(this.b1(a,!0))
return!0},
j7:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.d
if(u==null)return!1
u.F(this.b1(a,!1))
return!0}}
X.em.prototype={
gaT:function(){var u=this.a,t=C.i.gdN(u).c
t.toString
u=C.i.gdN(u).d
u.toString
return V.me(0,0,t,u)},
df:function(a){var u=a.keyCode,t=H.F(a.ctrlKey)||H.F(a.metaKey)
return new X.dQ(u,new X.aB(t,a.altKey,a.shiftKey))},
aQ:function(a){var u=this.b,t=H.F(a.ctrlKey)||H.F(a.metaKey)
u.c=new X.aB(t,a.altKey,a.shiftKey)},
c9:function(a){var u=this.b,t=H.F(a.ctrlKey)||H.F(a.metaKey)
u.c=new X.aB(t,a.altKey,a.shiftKey)},
aD:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.t()
u=t.top
if(typeof r!=="number")return r.t()
return new V.a9(s-q,r-u)},
b2:function(a){return new V.X(a.movementX,a.movementY)},
c3:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.a9])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
q=C.c.ao(r.pageX)
C.c.ao(r.pageY)
p=o.left
C.c.ao(r.pageX)
C.a.h(n,new V.a9(q-p,C.c.ao(r.pageY)-o.top))}return n},
aB:function(a){var u=a.buttons,t=H.F(a.ctrlKey)||H.F(a.metaKey)
return new X.dC(u,new X.aB(t,a.altKey,a.shiftKey))},
bU:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.t()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.t()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
h9:function(a){this.f=!0},
fY:function(a){this.f=!1},
h3:function(a){H.h(a,"$iaf")
if(H.F(this.f)&&this.bU(a))a.preventDefault()},
hd:function(a){var u
H.h(a,"$ib8")
if(!H.F(this.f))return
u=this.df(a)
this.b.j9(u)},
hb:function(a){var u
H.h(a,"$ib8")
if(!H.F(this.f))return
u=this.df(a)
this.b.j5(u)},
hh:function(a){var u,t,s,r,q=this
H.h(a,"$iaf")
u=q.a
u.focus()
q.f=!0
q.aQ(a)
if(H.F(q.x)){t=q.aB(a)
s=q.b2(a)
if(q.d.cF(t,s))a.preventDefault()
return}if(H.F(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aB(a)
r=q.aD(a)
if(q.c.cF(t,r))a.preventDefault()},
hl:function(a){var u,t,s,r=this
H.h(a,"$iaf")
r.aQ(a)
u=r.aB(a)
if(H.F(r.x)){t=r.b2(a)
if(r.d.bf(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aD(a)
if(r.c.bf(u,s))a.preventDefault()},
h7:function(a){var u,t,s,r=this
H.h(a,"$iaf")
if(!r.bU(a)){r.aQ(a)
u=r.aB(a)
if(H.F(r.x)){t=r.b2(a)
if(r.d.bf(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aD(a)
if(r.c.bf(u,s))a.preventDefault()}},
hj:function(a){var u,t,s,r=this
H.h(a,"$iaf")
r.aQ(a)
u=r.aB(a)
if(H.F(r.x)){t=r.b2(a)
if(r.d.be(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aD(a)
if(r.c.be(u,s))a.preventDefault()},
h5:function(a){var u,t,s,r=this
H.h(a,"$iaf")
if(!r.bU(a)){r.aQ(a)
u=r.aB(a)
if(H.F(r.x)){t=r.b2(a)
if(r.d.be(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aD(a)
if(r.c.be(u,s))a.preventDefault()}},
hn:function(a){var u,t,s=this
H.h(a,"$ibi")
s.aQ(a)
u=new V.X((a&&C.D).giB(a),C.D.giC(a)).w(0,180)
if(H.F(s.x)){if(s.d.ja(u))a.preventDefault()
return}if(H.F(s.r))return
t=s.aD(a)
if(s.c.jb(u,t))a.preventDefault()},
hp:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aB(s.y)
t=s.aD(s.y)
s.d.hf(u,t,r)}},
hC:function(a){var u,t=this
H.h(a,"$ib0")
t.a.focus()
t.f=!0
t.c9(a)
u=t.c3(a)
if(t.e.j8(u))a.preventDefault()},
hy:function(a){var u
H.h(a,"$ib0")
this.c9(a)
u=this.c3(a)
if(this.e.j6(u))a.preventDefault()},
hA:function(a){var u
H.h(a,"$ib0")
this.c9(a)
u=this.c3(a)
if(this.e.j7(u))a.preventDefault()},
sfw:function(a){this.z=H.l(a,"$ib",[[P.cY,P.R]],"$ab")}}
D.dG.prototype={$iad:1,$icO:1}
D.ad.prototype={$icO:1}
D.dR.prototype={
gv:function(){var u=this.x
return u==null?this.x=D.W():u},
a4:function(a){var u=this.x
if(u!=null)u.F(a)},
dr:function(a){var u
H.h(a,"$iB")
u=this.y
if(u!=null)u.F(a)},
he:function(){return this.dr(null)},
hs:function(a){var u,t,s
H.l(a,"$ij",[D.ad],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(s==null||this.f3(s))return!1}return!0},
fS:function(a,b){var u,t,s,r,q,p,o,n=D.ad
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gdq(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=H.h(b[q],"$iad")
if(p instanceof D.bM)C.a.h(this.f,p)
o=p.Q
if(o==null){o=new D.c0()
o.sal(null)
o.saP(null)
o.c=null
o.d=0
p.Q=o}H.n(t,s)
if(o.a==null)o.sal(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.c3([n])
n.b=!0
this.a4(n)},
hw:function(a,b){var u,t,s,r=D.ad
H.l(b,"$ij",[r],"$aj")
for(u=b.gV(b),t=this.gdq();u.C();){s=u.gL(u)
C.a.M(this.e,s)
s.gv().M(0,t)}r=new D.c4([r])
r.b=!0
this.a4(r)},
f3:function(a){var u=C.a.U(this.f,a)
return u},
sf4:function(a){this.e=H.l(a,"$ib",[D.dG],"$ab")},
shD:function(a){this.f=H.l(a,"$ib",[D.bM],"$ab")},
sf6:function(a){this.r=H.l(a,"$ib",[D.ea],"$ab")},
$aj:function(){return[D.ad]},
$aa5:function(){return[D.ad]}}
D.bM.prototype={
gv:function(){var u=this.Q
return u==null?this.Q=D.W():u},
a4:function(a){var u
H.h(a,"$iB")
u=this.Q
if(u!=null)u.F(a)},
f5:function(){return this.a4(null)},
gam:function(){var u=this.d!=null?1:0
return u+4},
$iad:1,
$icO:1}
D.ea.prototype={$iad:1,$icO:1}
V.a6.prototype={
p:function(a,b){var u=C.c.p(this.a,b.gcJ()),t=C.c.p(this.b,b.gbE()),s=C.c.p(this.c,b.gcf())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a6(u,t,s)},
t:function(a,b){var u=C.c.t(this.a,b.gcJ()),t=C.c.t(this.b,b.gbE()),s=C.c.t(this.c,b.gcf())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a6(u,t,s)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
V.aF.prototype={
p:function(a,b){var u=this,t=C.c.p(u.a,b.gcJ()),s=C.c.p(u.b,b.gbE()),r=C.c.p(u.c,b.gcf()),q=C.c.p(u.d,b.gim(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aF(t,s,r,q)},
t:function(a,b){var u=this,t=C.c.t(u.a,b.gcJ()),s=C.c.t(u.b,b.gbE()),r=C.c.t(u.c,b.gcf()),q=C.c.t(u.d,b.gim(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aF(t,s,r,q)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aF))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.O(u.a,3,0)+", "+V.O(u.b,3,0)+", "+V.O(u.c,3,0)+", "+V.O(u.d,3,0)+"]"}}
V.h0.prototype={}
V.dX.prototype={
aj:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.p])
return t},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dX))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.p],o=V.cn(H.d([q.a,q.d,q.r],p),3,0),n=V.cn(H.d([q.b,q.e,q.x],p),3,0),m=V.cn(H.d([q.c,q.f,q.y],p),3,0)
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
V.am.prototype={
aj:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.p])
return t},
ed:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.L().a)return V.cL()
u=1/b1
t=-n
s=-a0
return V.bb((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
q:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.bb(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
cN:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a4(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.am))return!1
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
i:function(a){return this.P()},
G:function(a){var u,t,s,r,q,p=this,o=[P.p],n=V.cn(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.cn(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.cn(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.cn(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
P:function(){return this.G("")}}
V.a9.prototype={
p:function(a,b){return new V.a9(this.a+b.a,this.b+b.b)},
t:function(a,b){return new V.a9(this.a-b.a,this.b-b.b)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}}
V.a4.prototype={
p:function(a,b){return new V.a4(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.a4(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){return new V.a4(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
V.bd.prototype={
p:function(a,b){var u=this
return new V.bd(C.c.p(u.a,b.gjw(b)),C.c.p(u.b,b.gjx(b)),C.c.p(u.c,b.gjy(b)),C.c.p(u.d,b.gjv(b)))},
t:function(a,b){var u=this
return new V.bd(C.c.t(u.a,b.gjw(b)),C.c.t(u.b,b.gjx(b)),C.c.t(u.c,b.gjy(b)),C.c.t(u.d,b.gjv(b)))},
u:function(a,b){var u,t,s=this
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
return"["+V.O(u.a,3,0)+", "+V.O(u.b,3,0)+", "+V.O(u.c,3,0)+", "+V.O(u.d,3,0)+"]"}}
V.e5.prototype={
gaa:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
u:function(a,b){var u,t,s=this
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
return"["+V.O(u.a,3,0)+", "+V.O(u.b,3,0)+", "+V.O(u.c,3,0)+", "+V.O(u.d,3,0)+"]"}}
V.X.prototype={
ba:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.E(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.E(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a,s=b.gaU(b)
if(typeof t!=="number")return t.p()
s=C.c.p(t,s)
t=this.b
u=b.gaV(b)
if(typeof t!=="number")return t.p()
return new V.X(s,C.c.p(t,u))},
t:function(a,b){var u,t=this.a,s=b.gaU(b)
if(typeof t!=="number")return t.t()
s=C.c.t(t,s)
t=this.b
u=b.gaV(b)
if(typeof t!=="number")return t.t()
return new V.X(s,C.c.t(t,u))},
q:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.q()
u=this.b
if(typeof u!=="number")return u.q()
return new V.X(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.L().a){u=$.mr
return u==null?$.mr=new V.X(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.X(u/b,t/b)},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=this.a
s=$.L()
s.toString
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.E(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.E(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}}
V.M.prototype={
ba:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cB:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.M(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aE:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.M(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.M(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.M(this.a-b.a,this.b-b.b,this.c-b.c)},
T:function(a){return new V.M(-this.a,-this.b,-this.c)},
q:function(a,b){return new V.M(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if(Math.abs(b-0)<$.L().a)return V.d7()
return new V.M(this.a/b,this.b/b,this.c/b)},
ee:function(){var u=$.L().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
V.bu.prototype={
ba:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u=this
return new V.bu(C.e.p(u.a,b.gaU(b)),C.c.p(u.b,b.gaV(b)),C.c.p(u.c,b.gbt()),C.e.p(u.d,b.giE()))},
t:function(a,b){var u=this
return new V.bu(C.e.t(u.a,b.gaU(b)),C.c.t(u.b,b.gaV(b)),C.c.t(u.c,b.gbt()),C.e.t(u.d,b.giE()))},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bu))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.O(u.a,3,0)+", "+V.O(u.b,3,0)+", "+V.O(u.c,3,0)+", "+V.O(u.d,3,0)+"]"}}
U.fH.prototype={
bL:function(a){var u=V.l3(a,this.c,this.b)
return u},
gv:function(){var u=this.y
return u==null?this.y=D.W():u},
H:function(a){var u=this.y
if(u!=null)u.F(a)},
scP:function(a,b){},
scC:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.L().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bL(u)}s=new D.K("maximumLocation",s,t.b,[P.p])
s.b=!0
t.H(s)}},
scE:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.L().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bL(u)}s=new D.K("minimumLocation",s,t.c,[P.p])
s.b=!0
t.H(s)}},
sZ:function(a,b){var u,t=this
b=t.bL(b)
u=t.d
if(!(Math.abs(u-b)<$.L().a)){t.d=b
u=new D.K("location",u,b,[P.p])
u.b=!0
t.H(u)}},
scD:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.L().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.K("maximumVelocity",r,a,[P.p])
r.b=!0
s.H(r)}},
sX:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.L().a)){u.f=a
t=new D.K("velocity",t,a,[P.p])
t.b=!0
u.H(t)}},
scn:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.L().a)){this.x=a
u=new D.K("dampening",u,a,[P.p])
u.b=!0
this.H(u)}},
ap:function(a,b){var u,t,s,r=this,q=r.f,p=$.L().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sZ(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.L().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sX(u)}}}
U.dE.prototype={
gv:function(){var u=this.b
return u==null?this.b=D.W():u},
aq:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dE))return!1
return J.Q(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cF.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.W():u},
H:function(a){var u
H.h(a,"$iB")
u=this.e
if(u!=null)u.F(a)},
a6:function(){return this.H(null)},
f8:function(a,b){var u,t,s,r,q,p,o,n=U.ac
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gaO(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.gv()
o.toString
H.n(t,s)
if(o.a==null)o.sal(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c3([n])
n.b=!0
this.H(n)},
hu:function(a,b){var u,t,s=U.ac
H.l(b,"$ij",[s],"$aj")
for(u=b.gV(b),t=this.gaO();u.C();)u.gL(u).gv().M(0,t)
s=new D.c4([s])
s.b=!0
this.H(s)},
aq:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.S()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.av(r,r.length,[H.r(r,0)]),u=null;r.C();){q=r.d
if(q!=null){t=q.aq(0,b,c)
if(t!=null)u=u==null?t:t.q(0,u)}}s.f=u==null?V.cL():u
r=s.e
if(r!=null)r.ai(0)}return s.f},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cF))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.Q(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.ac]},
$aa5:function(){return[U.ac]},
$iac:1}
U.ac.prototype={}
U.e6.prototype={
gv:function(){var u=this.y
return u==null?this.y=D.W():u},
H:function(a){var u=this.y
if(u!=null)u.F(a)},
seK:function(a){var u
a=V.l3(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.L().a)){this.a=a
u=new D.K("yaw",u,a,[P.p])
u.b=!0
this.H(u)}},
ser:function(a,b){var u
b=V.l3(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.L().a)){this.b=b
u=new D.K("pitch",u,b,[P.p])
u.b=!0
this.H(u)}},
sez:function(a){var u
a=V.l3(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.L().a)){this.c=a
u=new D.K("roll",u,a,[P.p])
u.b=!0
this.H(u)}},
aq:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.seK(u.a+u.d*b.y)
u.ser(0,u.b+u.e*b.y)
u.sez(u.c+u.f*b.y)
u.x=V.m6(u.c).q(0,V.m5(u.b)).q(0,V.m4(u.a))
t=u.y
if(t!=null)t.ai(0)}return u.x},
u:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.e6))return!1
u=r.a
t=b.a
s=$.L().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.O(u.a,3,0)+", "+V.O(u.b,3,0)+", "+V.O(u.c,3,0)+"], ["+V.O(u.d,3,0)+", "+V.O(u.e,3,0)+", "+V.O(u.f,3,0)+"]"}}
U.en.prototype={
gv:function(){var u=this.cy
return u==null?this.cy=D.W():u},
H:function(a){var u
H.h(a,"$iB")
u=this.cy
if(u!=null)u.F(a)},
a6:function(){return this.H(null)},
b5:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdQ().h(0,u.gbV())
u.a.c.gef().h(0,u.gbX())
u.a.c.gbC().h(0,u.gbZ())
return!0},
bW:function(a){var u=this
H.h(a,"$iB")
if(!J.Q(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bY:function(a){var u,t,s,r,q,p,o,n=this
a=H.t(H.h(a,"$iB"),"$ibs")
if(!H.F(n.y))return
if(H.F(n.x)){u=a.d.t(0,a.y)
u=new V.X(u.a,u.b)
u=u.D(u)
t=n.r
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.x=!1}if(H.F(n.d)){u=a.c
t=a.d.t(0,a.y)
u=new V.X(t.a,t.b).q(0,2).w(0,u.gaa())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.q()
s=n.e
if(typeof s!=="number")return H.E(s)
t.sX(u*10*s)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=new V.X(s.a,s.b).q(0,2).w(0,u.gaa())
s=n.b
q=r.a
if(typeof q!=="number")return q.T()
p=n.e
if(typeof p!=="number")return H.E(p)
o=n.z
if(typeof o!=="number")return H.E(o)
s.sZ(0,-q*p+o)
n.b.sX(0)
t=t.t(0,a.z)
n.Q=new V.X(t.a,t.b).q(0,2).w(0,u.gaa())}n.a6()},
c_:function(a){var u,t,s,r=this
H.h(a,"$iB")
if(!H.F(r.y))return
r.y=!1
if(H.F(r.x))return
u=r.Q
if(u.D(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.q()
s=r.e
if(typeof s!=="number")return H.E(s)
u.sX(t*10*s)
r.a6()}},
aq:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.S()
if(s<r){t.ch=r
u=b.y
t.b.ap(0,u)
t.cx=V.m6(t.b.d)}return t.cx},
$iac:1}
U.eo.prototype={
gv:function(){var u=this.fx
return u==null?this.fx=D.W():u},
H:function(a){var u
H.h(a,"$iB")
u=this.fx
if(u!=null)u.F(a)},
a6:function(){return this.H(null)},
b5:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdQ().h(0,s.gbV())
s.a.c.gef().h(0,s.gbX())
s.a.c.gbC().h(0,s.gbZ())
u=s.a.d
t=u.f
u=t==null?u.f=D.W():t
u.h(0,s.gfJ())
u=s.a.d
t=u.d
u=t==null?u.d=D.W():t
u.h(0,s.gfL())
u=s.a.e
t=u.b
u=t==null?u.b=D.W():t
u.h(0,s.gi9())
u=s.a.e
t=u.d
u=t==null?u.d=D.W():t
u.h(0,s.gi7())
u=s.a.e
t=u.c
u=t==null?u.c=D.W():t
u.h(0,s.gi5())
return!0},
av:function(a){var u=a.a,t=a.b
if(H.F(this.f)){if(typeof u!=="number")return u.T()
u=-u}if(H.F(this.r)){if(typeof t!=="number")return t.T()
t=-t}return new V.X(u,t)},
bW:function(a){var u=this
a=H.t(H.h(a,"$iB"),"$ibs")
if(!J.Q(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bY:function(a){var u,t,s,r,q,p,o,n=this
a=H.t(H.h(a,"$iB"),"$ibs")
if(!H.F(n.cx))return
if(H.F(n.ch)){u=a.d.t(0,a.y)
u=new V.X(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.F(n.e)){u=a.c
t=a.d.t(0,a.y)
u=n.av(new V.X(t.a,t.b).q(0,2).w(0,u.gaa()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=n.av(new V.X(s.a,s.b).q(0,2).w(0,u.gaa()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sZ(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.t(0,a.z)
n.dx=n.av(new V.X(t.a,t.b).q(0,2).w(0,u.gaa()))}n.a6()},
c_:function(a){var u,t,s,r=this
H.h(a,"$iB")
if(!H.F(r.cx))return
r.cx=!1
if(H.F(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sX(-t*10*u)
r.a6()}},
fK:function(a){var u=this
if(H.t(H.h(a,"$iB"),"$idU").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fM:function(a){var u,t,s,r,q,p,o,n=this
a=H.t(H.h(a,"$iB"),"$ibs")
if(!J.Q(n.d,a.x.b))return
u=a.c
t=a.d
s=t.t(0,a.y)
r=n.av(new V.X(s.a,s.b).q(0,2).w(0,u.gaa()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sZ(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.t(0,a.z)
n.dx=n.av(new V.X(t.a,t.b).q(0,2).w(0,u.gaa()))
n.a6()},
ia:function(a){var u=this
H.h(a,"$iB")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
i8:function(a){var u,t,s,r,q,p,o,n=this
a=H.t(H.h(a,"$iB"),"$ieh")
if(!H.F(n.cx))return
if(H.F(n.ch)){u=a.d.t(0,a.y)
u=new V.X(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.F(n.e)){u=a.c
t=a.d.t(0,a.y)
u=n.av(new V.X(t.a,t.b).q(0,2).w(0,u.gaa()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=n.av(new V.X(s.a,s.b).q(0,2).w(0,u.gaa()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sZ(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.t(0,a.z)
n.dx=n.av(new V.X(t.a,t.b).q(0,2).w(0,u.gaa()))}n.a6()},
i6:function(a){var u,t,s,r=this
H.h(a,"$iB")
if(!H.F(r.cx))return
r.cx=!1
if(H.F(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sX(-t*10*u)
r.a6()}},
aq:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.S()
if(s<r){t.dy=r
u=b.y
t.c.ap(0,u)
t.b.ap(0,u)
t.fr=V.m4(t.b.d).q(0,V.m5(t.c.d))}return t.fr},
$iac:1}
U.ep.prototype={
gv:function(){var u=this.r
return u==null?this.r=D.W():u},
H:function(a){var u=this.r
if(u!=null)u.F(a)},
b5:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.W():t
t=r.gfO()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.W():s).h(0,t)
return!0},
fP:function(a){var u,t,s,r,q=this
H.h(a,"$iB")
if(!J.Q(q.b,q.a.b.c))return
H.t(a,"$icN")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.q()
r=u+t*s
if(u!==r){q.d=r
u=new D.K("zoom",u,r,[P.p])
u.b=!0
q.H(u)}},
aq:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ll(u,u,u,1)}return t.f},
$iac:1}
M.dJ.prototype={
aA:function(a){var u
H.h(a,"$iB")
u=this.y
if(u!=null)u.F(a)},
f9:function(){return this.aA(null)},
h_:function(a,b){var u,t,s,r,q,p,o,n=E.aq
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gau(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c0()
o.sal(null)
o.saP(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sal(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c3([n])
n.b=!0
this.aA(n)},
h1:function(a,b){var u,t,s=E.aq
H.l(b,"$ij",[s],"$aj")
for(u=b.gV(b),t=this.gau();u.C();)u.gL(u).gv().M(0,t)
s=new D.c4([s])
s.b=!0
this.aA(s)},
sbg:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gv().M(0,t.gau())
u=t.d
t.d=a
if(a!=null)a.gv().h(0,t.gau())
s=new D.K("technique",u,t.d,[O.bP])
s.b=!0
t.aA(s)}},
gv:function(){var u=this.y
return u==null?this.y=D.W():u},
aY:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.ev(a1.d)
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
if(typeof s!=="number")return H.E(s)
o=C.c.ao(p*s)
p=q.b
if(typeof r!=="number")return H.E(r)
n=C.c.ao(p*r)
p=C.c.ao(q.c*s)
a2.c=p
q=C.c.ao(q.d*r)
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
i=V.bb(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.eu(i)
t=$.ma
if(t==null){t=V.o7()
q=$.mu
if(q==null)q=$.mu=new V.M(0,1,0)
p=$.ms
if(p==null)p=$.ms=new V.M(0,0,-1)
h=p.w(0,Math.sqrt(p.D(p)))
q=q.aE(h)
g=q.w(0,Math.sqrt(q.D(q)))
f=h.aE(g)
e=new V.M(t.a,t.b,t.c)
d=g.T(0).D(e)
c=f.T(0).D(e)
b=h.T(0).D(e)
t=V.bb(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.ma=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.aq(0,a2,u)
if(a0!=null)a=a0.q(0,a)}a2.db.eu(a)
u=a1.d
if(u!=null)u.ap(0,a2)
for(u=a1.e.a,u=new J.av(u,u.length,[H.r(u,0)]);u.C();)u.d.ap(0,a2)
for(u=a1.e.a,u=new J.av(u,u.length,[H.r(u,0)]);u.C();)u.d.aY(a2)
a1.b.toString
a2.cy.cG()
a2.db.cG()
a1.c.toString
a2.es()},
sfm:function(a,b){this.e=H.l(b,"$ia5",[E.aq],"$aa5")},
$iq6:1}
A.dy.prototype={}
A.fw.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iG:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
iD:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.al.prototype={
gar:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
u:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.al))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.hA.prototype={
eX:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.ah("")
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
A.pg(c3,u)
A.pi(c3,u)
A.ph(c3,u)
A.pk(c3,u)
A.pl(c3,u)
A.pj(c3,u)
A.pm(c3,u)
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
m=A.pf(b8.z)
b8.c=n
b8.d=m
b8.e=b8.dg(n,35633)
b8.f=b8.dg(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.F(H.lB(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.A(P.D("Failed to link shader: "+H.i(l)))}b8.hV()
b8.hX()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.t(b8.y.N(0,"invViewMat"),"$iaD")
if(t)b8.dy=H.t(b8.y.N(0,"objMat"),"$iaD")
if(r)b8.fr=H.t(b8.y.N(0,"viewObjMat"),"$iaD")
b8.fy=H.t(b8.y.N(0,"projViewObjMat"),"$iaD")
if(c3.ry)b8.k1=H.t(b8.y.N(0,"txt2DMat"),"$id5")
if(c3.x1)b8.k2=H.t(b8.y.N(0,"txtCubeMat"),"$iaD")
if(c3.x2)b8.k3=H.t(b8.y.N(0,"colorMat"),"$iaD")
b8.sfi(H.d([],[A.aD]))
t=c3.y2
if(t>0){b8.k4=H.h(b8.y.N(0,"bendMatCount"),"$iaN")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.A(P.D(c0+q+c1));(s&&C.a).h(s,H.t(j,"$iaD"))}}t=c3.a
if(t.a)b8.r2=H.t(b8.y.N(0,"emissionClr"),"$ia0")
if(t.c)b8.ry=H.t(b8.y.N(0,"emissionTxt"),"$iao")
t=c3.b
if(t.a)b8.x1=H.t(b8.y.N(0,"ambientClr"),"$ia0")
if(t.c)b8.y1=H.t(b8.y.N(0,"ambientTxt"),"$iao")
t=c3.c
if(t.a)b8.y2=H.t(b8.y.N(0,"diffuseClr"),"$ia0")
if(t.c)b8.bu=H.t(b8.y.N(0,"diffuseTxt"),"$iao")
t=c3.d
if(t.a)b8.dR=H.t(b8.y.N(0,"invDiffuseClr"),"$ia0")
if(t.c)b8.dS=H.t(b8.y.N(0,"invDiffuseTxt"),"$iao")
t=c3.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b8.dV=H.t(b8.y.N(0,"shininess"),"$iai")
if(s)b8.dT=H.t(b8.y.N(0,"specularClr"),"$ia0")
if(t.c)b8.dU=H.t(b8.y.N(0,"specularTxt"),"$iao")}if(c3.f.c)b8.dW=H.t(b8.y.N(0,"bumpTxt"),"$iao")
if(c3.cy){b8.dX=H.t(b8.y.N(0,"envSampler"),"$iao")
t=c3.r
if(t.a)b8.dY=H.t(b8.y.N(0,"reflectClr"),"$ia0")
if(t.c)b8.dZ=H.t(b8.y.N(0,"reflectTxt"),"$iao")
t=c3.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b8.e_=H.t(b8.y.N(0,"refraction"),"$iai")
if(s)b8.e0=H.t(b8.y.N(0,"refractClr"),"$ia0")
if(t.c)b8.e1=H.t(b8.y.N(0,"refractTxt"),"$iao")}}t=c3.y
if(t.a)b8.e2=H.t(b8.y.N(0,"alpha"),"$iai")
if(t.c)b8.e3=H.t(b8.y.N(0,"alphaTxt"),"$iao")
t=P.m
s=[t,A.aN]
b8.sft(new H.a2(s))
b8.sfu(new H.a2([t,[P.b,A.cc]]))
b8.shE(new H.a2(s))
b8.shF(new H.a2([t,[P.b,A.cd]]))
b8.si_(new H.a2(s))
b8.si0(new H.a2([t,[P.b,A.cf]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.cc],i=0;i<t.length;t.length===s||(0,H.v)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ak()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.j(0,d)
if(j==null)H.A(P.D(c0+d+c1))
H.t(j,"$ia0")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.j(0,d)
if(c==null)H.A(P.D(c0+d+c1))
H.t(c,"$ia0")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.j(0,d)
if(b==null)H.A(P.D(c0+d+c1))
H.t(b,"$ia0")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.j(0,d)
if(j==null)H.A(P.D(c0+d+c1))
H.t(j,"$ia0")
o=b8.y
d=f+"s["+k+"].color"
c=o.j(0,d)
if(c==null)H.A(P.D(c0+d+c1))
H.t(c,"$ia0")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.j(0,o)
if(b==null)H.A(P.D(c0+o+c1))
H.t(b,"$ice")
a2=b}else a2=b9
C.a.h(e,new A.cc(a1,a0,a,j,c,a2))}b8.cp.k(0,g,e)
q=b8.co
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.A(P.D(c0+o+c1))
q.k(0,g,H.h(j,"$iaN"))}for(t=c3.Q,s=t.length,r=[A.cd],i=0;i<t.length;t.length===s||(0,H.v)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.j(0,o)
if(j==null)H.A(P.D(c0+o+c1))
H.t(j,"$ia0")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.j(0,o)
if(c==null)H.A(P.D(c0+o+c1))
H.t(c,"$ia0")
p=b8.y
o=f+"s["+k+"].color"
b=p.j(0,o)
if(b==null)H.A(P.D(c0+o+c1))
H.t(b,"$ia0")
if(typeof g!=="number")return g.ak()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.A(P.D(c0+o+c1))
H.t(a3,"$id5")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.A(P.D(c0+o+c1))
H.t(a3,"$iao")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.A(P.D(c0+o+c1))
H.t(a3,"$iao")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.A(P.D(c0+o+c1))
H.t(a5,"$id4")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.j(0,o)
if(a3==null)H.A(P.D(c0+o+c1))
H.t(a3,"$iai")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.j(0,o)
if(a5==null)H.A(P.D(c0+o+c1))
H.t(a5,"$iai")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.j(0,o)
if(a8==null)H.A(P.D(c0+o+c1))
H.t(a8,"$iai")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}C.a.h(e,new A.cd(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.cr.k(0,g,e)
q=b8.cq
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.A(P.D(c0+o+c1))
q.k(0,g,H.h(j,"$iaN"))}for(t=c3.ch,s=t.length,r=[A.cf],i=0;i<t.length;t.length===s||(0,H.v)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.j(0,o)
if(j==null)H.A(P.D(c0+o+c1))
H.t(j,"$ia0")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.j(0,o)
if(c==null)H.A(P.D(c0+o+c1))
H.t(c,"$ia0")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.j(0,o)
if(b==null)H.A(P.D(c0+o+c1))
H.t(b,"$ia0")
p=b8.y
o=f+"s["+k+"].color"
a3=p.j(0,o)
if(a3==null)H.A(P.D(c0+o+c1))
H.t(a3,"$ia0")
if(typeof g!=="number")return g.ak()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.j(0,o)
if(a5==null)H.A(P.D(c0+o+c1))
H.t(a5,"$ia0")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.j(0,o)
if(a8==null)H.A(P.D(c0+o+c1))
H.t(a8,"$ia0")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.j(0,o)
if(b2==null)H.A(P.D(c0+o+c1))
H.t(b2,"$iai")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.j(0,o)
if(b3==null)H.A(P.D(c0+o+c1))
H.t(b3,"$iai")
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
if(a5==null)H.A(P.D(c0+d+c1))
H.t(a5,"$id4")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.j(0,d)
if(a5==null)H.A(P.D(c0+d+c1))
H.t(a5,"$iai")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.j(0,d)
if(a8==null)H.A(P.D(c0+d+c1))
H.t(a8,"$iai")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.j(0,d)
if(a5==null)H.A(P.D(c0+d+c1))
H.t(a5,"$iai")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.j(0,d)
if(a8==null)H.A(P.D(c0+d+c1))
H.t(a8,"$iai")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.j(0,d)
if(b2==null)H.A(P.D(c0+d+c1))
H.t(b2,"$iai")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.j(0,d)
if(a5==null)H.A(P.D(c0+d+c1))
H.t(a5,"$ice")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.A(P.D(c0+o+c1))
H.t(a5,"$ice")
a6=a5}else a6=b9
C.a.h(e,new A.cf(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.ct.k(0,g,e)
q=b8.cs
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.A(P.D(c0+o+c1))
q.k(0,g,H.h(j,"$iaN"))}}},
ae:function(a,b){if(b!=null&&b.d>=6)a.eP(b)},
sfi:function(a){this.r1=H.l(a,"$ib",[A.aD],"$ab")},
sft:function(a){this.co=H.l(a,"$iz",[P.m,A.aN],"$az")},
sfu:function(a){this.cp=H.l(a,"$iz",[P.m,[P.b,A.cc]],"$az")},
shE:function(a){this.cq=H.l(a,"$iz",[P.m,A.aN],"$az")},
shF:function(a){this.cr=H.l(a,"$iz",[P.m,[P.b,A.cd]],"$az")},
si_:function(a){this.cs=H.l(a,"$iz",[P.m,A.aN],"$az")},
si0:function(a){this.ct=H.l(a,"$iz",[P.m,[P.b,A.cf]],"$az")}}
A.aG.prototype={
i:function(a){return"dirLight"+H.i(this.a)}}
A.aJ.prototype={
i:function(a){return"pointLight"+H.i(this.a)}}
A.aK.prototype={
i:function(a){return"spotLight"+H.i(this.a)}}
A.hD.prototype={
i:function(a){return this.b9}}
A.cc.prototype={}
A.cd.prototype={}
A.cf.prototype={}
A.cW.prototype={
f_:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dg:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.F(H.lB(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.D("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
hV:function(){var u,t,s,r=this,q=H.d([],[A.dy]),p=r.a,o=H.a3(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dy(p,t.name,s))}r.x=new A.fw(q)},
hX:function(){var u,t,s,r=this,q=H.d([],[A.ei]),p=r.a,o=H.a3(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.iA(t.type,t.size,t.name,s))}r.y=new A.j5(q)},
aM:function(a,b,c){var u=this.a
if(a===1)return new A.aN(u,b,c)
else return A.lp(u,this.r,b,a,c)},
fp:function(a,b,c){var u=this.a
if(a===1)return new A.ce(u,b,c)
else return A.lp(u,this.r,b,a,c)},
fq:function(a,b,c){var u=this.a
if(a===1)return new A.ao(u,b,c)
else return A.lp(u,this.r,b,a,c)},
bq:function(a,b){return new P.eA(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
iA:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aM(b,c,d)
case 5121:return u.aM(b,c,d)
case 5122:return u.aM(b,c,d)
case 5123:return u.aM(b,c,d)
case 5124:return u.aM(b,c,d)
case 5125:return u.aM(b,c,d)
case 5126:return new A.ai(u.a,c,d)
case 35664:return new A.j1(u.a,c,d)
case 35665:return new A.a0(u.a,c,d)
case 35666:return new A.d4(u.a,c,d)
case 35667:return new A.j2(u.a,c,d)
case 35668:return new A.j3(u.a,c,d)
case 35669:return new A.j4(u.a,c,d)
case 35674:return new A.j6(u.a,c,d)
case 35675:return new A.d5(u.a,c,d)
case 35676:return new A.aD(u.a,c,d)
case 35678:return u.fp(b,c,d)
case 35680:return u.fq(b,c,d)
case 35670:throw H.c(u.bq("BOOL",c))
case 35671:throw H.c(u.bq("BOOL_VEC2",c))
case 35672:throw H.c(u.bq("BOOL_VEC3",c))
case 35673:throw H.c(u.bq("BOOL_VEC4",c))
default:throw H.c(P.D("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.ei.prototype={}
A.j5.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
N:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.D("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.P()},
P:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aN.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.j2.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.j3.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.j4.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.j0.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
sic:function(a){H.l(a,"$ib",[P.m],"$ab")}}
A.ai.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.j1.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.a0.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.d4.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.j6.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.d5.prototype={
at:function(a){var u=new Float32Array(H.ci(H.l(a,"$ib",[P.p],"$ab")))
C.d.eG(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.aD.prototype={
at:function(a){var u=new Float32Array(H.ci(H.l(a,"$ib",[P.p],"$ab")))
C.d.eH(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.ce.prototype={
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.ao.prototype={
eP:function(a){var u=a.d,t=this.a,s=this.d
if(u<6)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.kq.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cB(s.b,b).cB(s.d.cB(s.c,b),c)
a.sZ(0,new V.a4(r.a,r.b,r.c))
a.seC(r.w(0,Math.sqrt(r.D(r))))
s=1-b
u=1-c
a.sdK(new V.bd(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:7}
F.kC.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:21}
F.kE.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.E(p)
s=-s*p
u=r*p
a.sZ(0,new V.a4(s,u,q))
u=new V.M(s,u,q)
a.seC(u.w(0,Math.sqrt(u.D(u))))
a.sdK(new V.bd(1-c,2+c,-1,-1))},
$S:7}
F.kF.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:20}
F.kG.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:20}
F.kZ.prototype={
$2:function(a,b){return 0},
$S:21}
F.l_.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.E(s)
u=a.f
t=new V.M(u.a,u.b,u.c)
s=t.w(0,Math.sqrt(t.D(t))).q(0,this.b+s)
a.sZ(0,new V.a4(s.a,s.b,s.c))},
$S:7}
F.l1.prototype={
$1:function(a){return new V.a4(Math.cos(a),Math.sin(a),0)},
$S:17}
F.kN.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.a4(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:17}
F.kD.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lP(n.$1(o),m)
m=J.nx(J.lP(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.M(m.a,m.b,m.c)
u=m.w(0,Math.sqrt(m.D(m)))
n=$.mt
if(n==null){n=new V.M(1,0,0)
$.mt=n
t=n}else t=n
if(!J.Q(u,t)){n=$.mv
if(n==null){n=new V.M(0,0,1)
$.mv=n
t=n}else t=n}n=u.aE(t)
s=n.w(0,Math.sqrt(n.D(n)))
n=s.aE(u)
t=n.w(0,Math.sqrt(n.D(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.q(0,n*m)
m=s.q(0,q*m)
a.sZ(0,J.nw(l,new V.a4(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:7}
F.a8.prototype={
b7:function(){var u=this
if(!u.gb8()){C.a.M(u.a.a.d.b,u)
u.a.a.a_()}u.c5()
u.c6()
u.hK()},
ca:function(a){this.a=a
C.a.h(a.d.b,this)},
cb:function(a){this.b=a
C.a.h(a.d.c,this)},
hU:function(a){this.c=a
C.a.h(a.d.d,this)},
c5:function(){var u=this.a
if(u!=null){C.a.M(u.d.b,this)
this.a=null}},
c6:function(){var u=this.b
if(u!=null){C.a.M(u.d.c,this)
this.b=null}},
hK:function(){var u=this.c
if(u!=null){C.a.M(u.d.d,this)
this.c=null}},
gb8:function(){return this.a==null||this.b==null||this.c==null},
fh:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d7()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.ee())return
return s.w(0,Math.sqrt(s.D(s)))},
fl:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.t(0,q)
r=new V.M(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.D(r)))
r=t.t(0,q)
r=new V.M(r.a,r.b,r.c)
r=s.aE(r.w(0,Math.sqrt(r.D(r))))
return r.w(0,Math.sqrt(r.D(r)))},
cj:function(){var u,t=this
if(t.d!=null)return!0
u=t.fh()
if(u==null){u=t.fl()
if(u==null)return!1}t.d=u
t.a.a.a_()
return!0},
fg:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d7()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.ee())return
return s.w(0,Math.sqrt(s.D(s)))},
fk:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.L().a){l=d.t(0,g)
l=new V.M(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.D(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.t(0,g).q(0,p).p(0,g).t(0,j)
l=new V.M(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.D(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.D(l)))
l=o.aE(q)
l=l.w(0,Math.sqrt(l.D(l))).aE(o)
q=l.w(0,Math.sqrt(l.D(l)))}return q},
cg:function(){var u,t=this
if(t.e!=null)return!0
u=t.fg()
if(u==null){u=t.fk()
if(u==null)return!1}t.e=u
t.a.a.a_()
return!0},
giu:function(a){var u=this
if(J.Q(u.a,u.b))return!0
if(J.Q(u.b,u.c))return!0
if(J.Q(u.c,u.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u,t,s=this
if(s.gb8())return a+"disposed"
u=a+C.b.ah(J.au(s.a.e),0)+", "+C.b.ah(J.au(s.b.e),0)+", "+C.b.ah(J.au(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
P:function(){return this.G("")}}
F.h3.prototype={}
F.iw.prototype={
bc:function(a,b,c){var u,t=b.a
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
F.br.prototype={
b7:function(){var u=this
if(!u.gb8()){C.a.M(u.a.a.c.b,u)
u.a.a.a_()}u.c5()
u.c6()},
ca:function(a){this.a=a
C.a.h(a.c.b,this)},
cb:function(a){this.b=a
C.a.h(a.c.c,this)},
c5:function(){var u=this.a
if(u!=null){C.a.M(u.c.b,this)
this.a=null}},
c6:function(){var u=this.b
if(u!=null){C.a.M(u.c.c,this)
this.b=null}},
gb8:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){if(this.gb8())return a+"disposed"
return a+C.b.ah(J.au(this.a.e),0)+", "+C.b.ah(J.au(this.b.e),0)},
P:function(){return this.G("")}}
F.hn.prototype={}
F.j_.prototype={
bc:function(a,b,c){var u,t=b.a
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
F.bN.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ah(J.au(u.e),0)},
P:function(){return this.G("")}}
F.e8.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.W():u},
bd:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.A()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){r=g[s]
h.a.h(0,r.ix())}h.a.A()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){q=g[s]
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
o=new F.bN()
if(n.a==null)H.A(P.D("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.F(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){m=g[s]
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
F.nZ(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){j=g[s]
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
F.cC(l,k,i)}g=h.e
if(g!=null)g.ai(0)},
ay:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ay()||!1
if(!t.a.ay())u=!1
s=t.e
if(s!=null)s.ai(0)
return u},
iW:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.r(o,0)])
for(o=[F.aj];u.length!==0;){t=C.a.giK(u)
C.a.ew(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.e(u,r)
q=u[r]
if(q!=null&&a.bc(0,t,q)){C.a.h(s,q)
C.a.ew(u,r)}}if(s.length>1)b.bd(s)}}p.a.A()
p.c.cK()
p.d.cK()
p.b.jf()
p.c.cL(new F.j_())
p.d.cL(new F.iw())
o=p.e
if(o!=null)o.ai(0)},
cc:function(){this.iW(new F.jp(),new F.i1())},
cu:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.cu()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.e(o,u)
t=o[u]
o=t.r
if(o!=null)t.seg(new V.M(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.M(s,r,o).w(0,Math.sqrt(s*s+r*r+o*o))
if(!J.Q(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.F(null)}}}}o=p.e
if(o!=null)o.ai(0)},
is:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bA()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bz().a)!==0)++s
if((t&$.by().a)!==0)++s
if((t&$.bW().a)!==0)++s
if((t&$.bB().a)!==0)++s
if((t&$.ds().a)!==0)++s
if((t&$.dt().a)!==0)++s
if((t&$.ct().a)!==0)++s
if((t&$.bx().a)!==0)++s
r=a3.gcU(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.p
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dA])
for(n=0,m=0;m<s;++m){l=a3.ip(m)
k=l.gcU(l)
C.a.k(o,m,new Z.dA(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.e(u,j)
i=u[j].iU(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.l(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.ci(p)),35044)
u.bindBuffer(a0,null)
e=new Z.dB(new Z.er(a0,f),o,a3)
e.sfE(H.d([],[Z.bJ]))
if(a.b.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.A()
C.a.h(d,c.e)}b=Z.ls(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bJ(0,d.length,b))}if(a.c.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.A()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.A()
C.a.h(d,c.e)}b=Z.ls(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bJ(1,d.length,b))}if(a.d.b.length!==0){t=P.m
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
C.a.h(d,c.e)}b=Z.ls(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bJ(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.f])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.G(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.G(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.G(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.G(t))}return C.a.m(s,"\n")},
a_:function(){var u=this.e
if(u!=null)u.F(null)},
$iq7:1}
F.ip.prototype={
ii:function(a){var u,t,s,r,q,p,o
H.l(a,"$ib",[F.aj],"$ab")
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
C.a.h(u,F.cC(s,p,o))}}return u},
ij:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.aj],"$ab")
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
C.a.h(u,F.cC(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cC(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cC(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cC(k,h,l))}o=!o}q=!q}return u},
gn:function(a){return this.b.length},
cL:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.bc(0,p,n)){p.b7()
break}}}}},
cK:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.giu(s)
if(t)s.b7()}},
ay:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].cj())s=!1
return s},
ci:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].cg())s=!1
return s},
cu:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.M(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.M(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.F(null)}},
i:function(a){return this.P()},
G:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].G(a))
return C.a.m(r,"\n")},
P:function(){return this.G("")},
sfz:function(a){this.b=H.l(a,"$ib",[F.a8],"$ab")}}
F.iq.prototype={
gn:function(a){return this.b.length},
cL:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.bc(0,p,n)){p.b7()
break}}}}},
cK:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.Q(s.a,s.b)
if(t)s.b7()}},
i:function(a){return this.P()},
G:function(a){var u,t,s=H.d([],[P.f]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
C.a.h(s,t[u].G(a+(""+u+". ")))}return C.a.m(s,"\n")},
P:function(){return this.G("")},
sfF:function(a){this.b=H.l(a,"$ib",[F.br],"$ab")}}
F.ir.prototype={
gn:function(a){return this.b.length},
jf:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.M(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.F(null)}s=t.a
if(s!=null){C.a.M(s.b.b,t)
t.a=null}}}},
i:function(a){return this.P()},
G:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].G(a))
return C.a.m(r,"\n")},
P:function(){return this.G("")},
sc2:function(a){this.b=H.l(a,"$ib",[F.bN],"$ab")}}
F.aj.prototype={
cm:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.eq(u.cx,r,o,t,s,q,p,a,n)},
ix:function(){return this.cm(null)},
sZ:function(a,b){var u
if(!J.Q(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a_()}},
seg:function(a){var u
a=a==null?null:a.w(0,Math.sqrt(a.D(a)))
if(!J.Q(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a_()}},
seC:function(a){var u
if(!J.Q(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a_()}},
sdK:function(a){var u
if(!J.Q(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a_()}},
iU:function(a){var u,t,s=this
if(a.u(0,$.bA())){u=s.f
t=[P.p]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.bz())){u=s.r
t=[P.p]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.by())){u=s.x
t=[P.p]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.bW())){u=s.y
t=[P.p]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.u(0,$.bB())){u=s.z
t=[P.p]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.ds())){u=s.Q
t=[P.p]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.dt())){u=s.Q
t=[P.p]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.u(0,$.ct()))return H.d([s.ch],[P.p])
else if(a.u(0,$.bx())){u=s.cx
t=[P.p]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.p])},
cj:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d7()
t.d.I(0,new F.ju(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.ai(0)}return!0},
cg:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d7()
t.d.I(0,new F.jt(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.ai(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u,t,s=this,r="-",q=H.d([],[P.f])
C.a.h(q,C.b.ah(J.au(s.e),0))
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
C.a.h(q,V.O(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
P:function(){return this.G("")}}
F.ju.prototype={
$1:function(a){var u,t
H.h(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:6}
F.jt.prototype={
$1:function(a){var u,t
H.h(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:6}
F.jk.prototype={
A:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.D("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a_()
return!0},
ik:function(a,b,c,d,e,f){var u=F.eq(a,null,b,c,d,e,f,null,0)
this.h(0,u)
return u},
gn:function(a){return this.c.length},
ay:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].cj()
return!0},
ci:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].cg()
return!0},
it:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.Q(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.F(null)}}}}return!0},
i:function(a){return this.P()},
G:function(a){var u,t,s,r
this.A()
u=H.d([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
P:function(){return this.G("")},
sie:function(a){this.c=H.l(a,"$ib",[F.aj],"$ab")}}
F.jl.prototype={
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
C.a.I(u.c,new F.jm(u,b))
C.a.I(u.d,new F.jn(u,b))},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].G(""))
return C.a.m(r,"\n")},
sfA:function(a){this.b=H.l(a,"$ib",[F.a8],"$ab")},
sfB:function(a){this.c=H.l(a,"$ib",[F.a8],"$ab")},
sfC:function(a){this.d=H.l(a,"$ib",[F.a8],"$ab")}}
F.jm.prototype={
$1:function(a){H.h(a,"$ia8")
if(!J.Q(a.a,this.a))this.b.$1(a)},
$S:6}
F.jn.prototype={
$1:function(a){var u
H.h(a,"$ia8")
u=this.a
if(!J.Q(a.a,u)&&!J.Q(a.b,u))this.b.$1(a)},
$S:6}
F.jo.prototype={
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.e(t,u)
return t[u]}else{if(b<0)return H.e(t,b)
return t[b]}},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].G(""))
return C.a.m(r,"\n")},
sfG:function(a){this.b=H.l(a,"$ib",[F.br],"$ab")},
sfH:function(a){this.c=H.l(a,"$ib",[F.br],"$ab")}}
F.jq.prototype={}
F.jp.prototype={
bc:function(a,b,c){return J.Q(b.f,c.f)}}
F.jr.prototype={}
F.i1.prototype={
bd:function(a){var u,t,s,r
H.l(a,"$ib",[F.aj],"$ab")
u=V.d7()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.M(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.w(0,Math.sqrt(u.D(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.v)(a),++s)a[s].seg(u)
return}}
F.js.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].G(""))
return C.a.m(r,"\n")},
sc2:function(a){this.b=H.l(a,"$ib",[F.bN],"$ab")}}
O.dW.prototype={
gv:function(){var u=this.fr
return u==null?this.fr=D.W():u},
a0:function(a){var u
H.h(a,"$iB")
u=this.fr
if(u!=null)u.F(a)},
bK:function(){return this.a0(null)},
dv:function(a){H.h(a,"$iB")
this.a=null
this.a0(a)},
hP:function(){return this.dv(null)},
fU:function(a,b){var u=V.am
H.l(b,"$ij",[u],"$aj")
u=new D.c3([u])
u.b=!0
this.a0(u)},
fW:function(a,b){var u=V.am
H.l(b,"$ij",[u],"$aj")
u=new D.c4([u])
u.b=!0
this.a0(u)},
dd:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.m,h=new H.a2([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
q=r.gam()
p=h.j(0,r.gam())
h.k(0,q,p==null?1:p)}o=H.d([],[A.aG])
h.I(0,new O.hH(j,o))
C.a.bG(o,new O.hI())
n=new H.a2([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
q=r.gam()
p=n.j(0,r.gam())
n.k(0,q,p==null?1:p)}m=H.d([],[A.aJ])
n.I(0,new O.hJ(j,m))
C.a.bG(m,new O.hK())
l=new H.a2([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.v)(i),++s){r=i[s]
t=r.gam()
q=l.j(0,r.gam())
l.k(0,t,q==null?1:q)}k=H.d([],[A.aK])
l.I(0,new O.hL(j,k))
C.a.bG(k,new O.hM())
i=C.e.a7(j.e.a.length+3,4)
j.dy.e
return A.o5(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
ad:function(a,b){H.l(a,"$ib",[T.d0],"$ab")
if(b!=null)if(!C.a.U(a,b)){b.a=a.length
C.a.h(a,b)}},
ap:function(a,b){var u,t,s
for(u=this.dx.a,u=new J.av(u,u.length,[H.r(u,0)]);u.C();){t=u.d
t.toString
s=$.hN
t.a=s==null?$.hN=new V.am(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s
s=t.b
if(s!=null)t.a=s.aq(0,b,t)}},
jh:function(b6,b7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.dd()
u=b6.fr.j(0,b5.b9)
if(u==null){u=A.o4(b5,b6.a)
t=u.b
if(t.length===0)H.A(P.D("May not cache a shader with no name."))
if(b6.fr.br(0,t))H.A(P.D('Shader cache already contains a shader by the name "'+t+'".'))
b6.fr.k(0,t,u)}b5=b4.a=u
b7.e=null}s=b5.z
r=s.bu
b5=b7.e
if(!(b5 instanceof Z.dB))b5=b7.e=null
if(b5==null||!b5.d.u(0,r)){b5=s.k3
if(b5)b7.d.ay()
q=s.k4
if(q){p=b7.d
o=p.e
if(o!=null)++o.d
p.d.ci()
p.a.ci()
p=p.e
if(p!=null)p.ai(0)}p=s.r2
if(p){o=b7.d
n=o.e
if(n!=null)++n.d
o.a.it()
o=o.e
if(o!=null)o.ai(0)}m=b7.d.is(new Z.jw(b6.a),r)
m.aW($.bA()).e=b4.a.Q.c
if(b5)m.aW($.bz()).e=b4.a.cx.c
if(q)m.aW($.by()).e=b4.a.ch.c
if(s.r1)m.aW($.bW()).e=b4.a.cy.c
if(p)m.aW($.bB()).e=b4.a.db.c
if(s.rx)m.aW($.bx()).e=b4.a.dx.c
b7.e=m}b5=T.d0
l=H.d([],[b5])
q=b4.a
p=b6.a
p.useProgram(q.r)
q.x.iG()
if(s.dy){q=b4.a
o=b6.dx
o=o.ga8(o)
q=q.dy
q.toString
q.at(o.aj(0,!0))}if(s.fr){q=b4.a
o=b6.cx
if(o==null){o=b6.db
o=o.ga8(o)
n=b6.dx
n=b6.cx=o.q(0,n.ga8(n))
o=n}q=q.fr
q.toString
q.at(o.aj(0,!0))}q=b4.a
o=b6.ch
if(o==null){o=b6.gjd()
n=b6.dx
n=b6.ch=o.q(0,n.ga8(n))
o=n}q=q.fy
q.toString
q.at(o.aj(0,!0))
if(s.ry){q=b4.a
o=b4.b
q=q.k1
q.toString
q.at(C.j.aj(o,!0))}if(s.x1){q=b4.a
o=b4.c
q=q.k2
q.toString
q.at(C.j.aj(o,!0))}if(s.x2){q=b4.a
o=b4.d
q=q.k3
q.toString
q.at(C.j.aj(o,!0))}if(s.y2>0){k=b4.e.a.length
q=b4.a.k4
C.d.bB(q.a,q.d,k)
for(q=[P.p],j=0;j<k;++j){o=b4.a
n=b4.e.a
if(j>=n.length)return H.e(n,j)
n=n[j]
o.toString
H.h(n,"$iam")
o=o.r1
if(j>=o.length)return H.e(o,j)
o=o[j]
i=new Float32Array(H.ci(H.l(n.aj(0,!0),"$ib",q,"$ab")))
C.d.eH(o.a,o.d,!1,i)}}q=s.a
if(q.a){o=b4.a
n=b4.f.f
o=o.r2
C.d.W(o.a,o.d,n.a,n.b,n.c)}if(q.c){b4.ad(l,b4.f.e)
q=b4.a
o=b4.f.e
q.ae(q.ry,o)}if(s.id){q=s.b
if(q.a){o=b4.a
n=b4.r.f
o=o.x1
C.d.W(o.a,o.d,n.a,n.b,n.c)}if(q.c){b4.ad(l,b4.r.e)
q=b4.a
o=b4.r.e
q.ae(q.y1,o)}q=s.c
if(q.a){o=b4.a
n=b4.x.f
o=o.y2
C.d.W(o.a,o.d,n.a,n.b,n.c)}if(q.c){b4.ad(l,b4.x.e)
q=b4.a
o=b4.x.e
q.ae(q.bu,o)}q=s.d
if(q.a){o=b4.a
n=b4.y.f
o=o.dR
C.d.W(o.a,o.d,n.a,n.b,n.c)}if(q.c){b4.ad(l,b4.y.e)
q=b4.a
o=b4.y.e
q.ae(q.dS,o)}q=s.e
o=q.a
if(!o)n=q.c
else n=!0
if(n){n=b4.a
h=b4.z.ch
n=n.dV
C.d.a3(n.a,n.d,h)}if(o){o=b4.a
n=b4.z.f
o=o.dT
C.d.W(o.a,o.d,n.a,n.b,n.c)}if(q.c){b4.ad(l,b4.z.e)
q=b4.a
o=b4.z.e
q.ae(q.dU,o)}q=s.z
if(q.length>0){o=b6.db
g=o.ga8(o)
o=P.m
f=new H.a2([o,o])
for(o=b4.dx.e,n=o.length,h=[b5],e=0;e<o.length;o.length===n||(0,H.v)(o),++e){d=o[e]
c=d.gam()
b=f.j(0,c)
if(b==null)b=0
f.k(0,c,b+1)
a=J.du(b4.a.cp.j(0,c),b)
a0=d.gdP(d)
a1=C.c.q(g.a,a0.gaU(a0))+C.c.q(g.b,a0.gaV(a0))+C.c.q(g.c,a0.gbt())
a2=C.c.q(g.e,a0.gaU(a0))+C.c.q(g.f,a0.gaV(a0))+C.c.q(g.r,a0.gbt())
a0=C.c.q(g.y,a0.gaU(a0))+C.c.q(g.z,a0.gaV(a0))+C.c.q(g.Q,a0.gbt())
a0=new V.M(a1,a2,a0).w(0,Math.sqrt(a1*a1+a2*a2+a0*a0))
a2=a.e
a1=a0.a
a3=a0.b
a0=a0.c
C.d.W(a2.a,a2.d,a1,a3,a0)
a0=d.gb6(d)
a3=a.f
C.d.W(a3.a,a3.d,a0.a,a0.b,a0.c)
d.gb_()
a0=d.gdP(d)
a1=a.d
C.d.W(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gbC()
a1=a.b
C.d.W(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gbz(d)
a1=a.c
C.d.W(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gb_()
H.l(l,"$ib",h,"$ab")
if(!C.a.U(l,a0)){a0.a=l.length
C.a.h(l,a0)}a0=d.gb_()
a1=a0.gbb(a0)
if(a1){a1=a.r
a1.toString
a2=a0.gbb(a0)
if(!a2)a1.a.uniform1i(a1.d,0)
else{a0=a0.gea(a0)
a1.a.uniform1i(a1.d,a0)}}}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.v)(q),++e){n=q[e].a
k=f.j(0,n)
if(k==null)k=0
n=b4.a.co.j(0,n)
C.d.bB(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=b6.db
g=o.ga8(o)
o=P.m
a4=new H.a2([o,o])
for(o=b4.dx.f,n=o.length,h=[P.p],a0=[b5],e=0;e<o.length;o.length===n||(0,H.v)(o),++e){d=o[e]
c=d.gam()
b=a4.j(0,c)
if(b==null)b=0
a4.k(0,c,b+1)
a=J.du(b4.a.cr.j(0,c),b)
a5=g.q(0,d.a)
a1=d.a
a2=$.cT
a1=a1.cN(a2==null?$.cT=new V.a4(0,0,0):a2)
a2=a.b
C.d.W(a2.a,a2.d,a1.a,a1.b,a1.c)
a1=$.cT
a1=a5.cN(a1==null?$.cT=new V.a4(0,0,0):a1)
a2=a.c
C.d.W(a2.a,a2.d,a1.a,a1.b,a1.c)
a1=d.c
a2=a.e
C.d.W(a2.a,a2.d,a1.a,a1.b,a1.c)
if(d.d!=null||!1){a1=a5.ed(0)
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
i=new Float32Array(H.ci(H.l(new V.dX(a2,a3,a6,a7,a8,a9,b0,b1,a1).aj(0,!0),"$ib",h,"$ab")))
C.d.eG(b2.a,b2.d,!1,i)}a1=d.d
a2=a1!=null
if(a2){H.l(l,"$ib",a0,"$ab")
if(a2)if(!C.a.U(l,a1)){a1.a=l.length
C.a.h(l,a1)}a1=d.d
a2=a1!=null
if(a2&&a1.d>=6){a3=a.f
a3.toString
if(!a2||a1.d<6)a3.a.uniform1i(a3.d,0)
else{a1=a1.a
a3.a.uniform1i(a3.d,a1)}}}a1=d.r
a2=a.y
C.d.a3(a2.a,a2.d,a1)
a1=d.x
a2=a.z
C.d.a3(a2.a,a2.d,a1)
a1=d.y
a2=a.Q
C.d.a3(a2.a,a2.d,a1)}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.v)(q),++e){n=q[e].a
k=a4.j(0,n)
if(k==null)k=0
n=b4.a.cq.j(0,n)
C.d.bB(n.a,n.d,k)}}q=s.ch
if(q.length>0){o=b6.db
g=o.ga8(o)
o=P.m
b3=new H.a2([o,o])
for(o=b4.dx.r,n=o.length,b5=[b5],e=0;e<o.length;o.length===n||(0,H.v)(o),++e){d=o[e]
c=d.gam()
b=b3.j(0,c)
if(b==null)b=0
b3.k(0,c,b+1)
a=J.du(b4.a.ct.j(0,c),b)
h=d.gjc(d)
a0=a.b
C.d.W(a0.a,a0.d,h.a,h.b,h.c)
h=d.gdP(d).jT()
a0=a.c
C.d.W(a0.a,a0.d,h.a,h.b,h.c)
h=g.cN(d.gjc(d))
a0=a.d
C.d.W(a0.a,a0.d,h.a,h.b,h.c)
h=d.gb6(d)
a0=a.e
C.d.W(a0.a,a0.d,h.a,h.b,h.c)
d.gb_()
h=d.gbC()
a0=a.f
C.d.W(a0.a,a0.d,h.a,h.b,h.c)
h=d.gbz(d)
a0=a.r
C.d.W(a0.a,a0.d,h.a,h.b,h.c)
h=d.gjU()
a0=a.x
C.d.a3(a0.a,a0.d,h)
h=d.gjV()
a0=a.y
C.d.a3(a0.a,a0.d,h)
d.gb_()
h=d.gb_()
H.l(l,"$ib",b5,"$ab")
if(!C.a.U(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gb_()
a0=h.gbb(h)
if(a0){a0=a.dx
a0.toString
a1=h.gbb(h)
if(!a1)a0.a.uniform1i(a0.d,0)
else{h=h.gea(h)
a0.a.uniform1i(a0.d,h)}}d.gcT()
h=d.gjB()
a0=a.z
C.d.ju(a0.a,a0.d,h.a,h.b,h.c,h.d)
h=d.gcT()
if(!C.a.U(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gcT()
a0=h.gbb(h)
if(a0){a0=a.dy
a0.toString
a1=h.gbb(h)
if(!a1)a0.a.uniform1i(a0.d,0)
else{h=h.gea(h)
a0.a.uniform1i(a0.d,h)}}if(d.gjI()){h=d.gjG()
a0=a.Q
C.d.a3(a0.a,a0.d,h)
h=d.gjF()
a0=a.ch
C.d.a3(a0.a,a0.d,h)}if(d.gjH()){h=d.gjC()
a0=a.cx
C.d.a3(a0.a,a0.d,h)
h=d.gjD()
a0=a.cy
C.d.a3(a0.a,a0.d,h)
h=d.gjE()
a0=a.db
C.d.a3(a0.a,a0.d,h)}}for(b5=q.length,e=0;e<q.length;q.length===b5||(0,H.v)(q),++e){o=q[e].a
k=b3.j(0,o)
if(k==null)k=0
o=b4.a.cs.j(0,o)
C.d.bB(o.a,o.d,k)}}}if(s.f.c){b4.ad(l,b4.Q.e)
b5=b4.a
q=b4.Q.e
b5.ae(b5.dW,q)}if(s.dx){b5=b4.a
q=b6.Q
if(q==null){q=b6.db
q=b6.Q=q.ga8(q).ed(0)}b5=b5.id
b5.toString
b5.at(q.aj(0,!0))}if(s.cy){b4.ad(l,b4.ch)
b5=b4.a
q=b4.ch
b5.ae(b5.dX,q)
b5=s.r
if(b5.a){q=b4.a
o=b4.cx.f
q=q.dY
C.d.W(q.a,q.d,o.a,o.b,o.c)}if(b5.c){b4.ad(l,b4.cx.e)
b5=b4.a
q=b4.cx.e
b5.ae(b5.dZ,q)}b5=s.x
q=b5.a
if(!q)o=b5.c
else o=!0
if(o){o=b4.a
n=b4.cy.ch
o=o.e_
C.d.a3(o.a,o.d,n)}if(q){q=b4.a
o=b4.cy.f
q=q.e0
C.d.W(q.a,q.d,o.a,o.b,o.c)}if(b5.c){b4.ad(l,b4.cy.e)
b5=b4.a
q=b4.cy.e
b5.ae(b5.e1,q)}}b5=s.y
q=b5.a
o=!q
if(o)n=b5.c
else n=!0
if(n){if(q){q=b4.a
n=b4.db.f
q=q.e2
C.d.a3(q.a,q.d,n)}if(b5.c){b4.ad(l,b4.db.e)
q=b4.a
n=b4.db.e
q.ae(q.e3,n)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j){q=l[j]
if(!q.c&&q.d>=6){q.c=!0
p.activeTexture(33984+q.a)
p.bindTexture(34067,q.b)}}q=b7.e
q.cd(b6)
q.aY(b6)
q.jt(b6)
if(o)b5=b5.c
else b5=!0
if(b5)p.disable(3042)
for(j=0;j<l.length;++j){b5=l[j]
if(b5.c){b5.c=!1
p.activeTexture(33984+b5.a)
p.bindTexture(34067,null)}}b5=b4.a
b5.toString
p.useProgram(null)
b5.x.iD()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dd().b9},
sfj:function(a){this.e=H.l(a,"$ia5",[V.am],"$aa5")}}
O.hH.prototype={
$2:function(a,b){H.a3(a)
H.a3(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aG(a,C.e.a7(b+3,4)*4))},
$S:12}
O.hI.prototype={
$2:function(a,b){H.h(a,"$iaG")
H.h(b,"$iaG")
return J.l5(a.a,b.a)},
$S:50}
O.hJ.prototype={
$2:function(a,b){H.a3(a)
H.a3(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aJ(a,C.e.a7(b+3,4)*4))},
$S:12}
O.hK.prototype={
$2:function(a,b){H.h(a,"$iaJ")
H.h(b,"$iaJ")
return J.l5(a.a,b.a)},
$S:51}
O.hL.prototype={
$2:function(a,b){H.a3(a)
H.a3(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aK(a,C.e.a7(b+3,4)*4))},
$S:12}
O.hM.prototype={
$2:function(a,b){H.h(a,"$iaK")
H.h(b,"$iaK")
return J.l5(a.a,b.a)},
$S:52}
O.hB.prototype={
aC:function(){var u,t=this
t.cW()
u=t.f
if(!(Math.abs(u-1)<$.L().a)){t.f=1
u=new D.K(t.b,u,1,[P.p])
u.b=!0
t.a.a0(u)}}}
O.cJ.prototype={
a0:function(a){return this.a.a0(H.h(a,"$iB"))},
bK:function(){return this.a0(null)},
aC:function(){},
c7:function(a){var u,t,s=this
if(!s.c.u(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aC()
u=s.a
u.a=null
u.a0(null)}}}
O.hC.prototype={}
O.ba.prototype={
dz:function(a){var u,t,s=this
if(!s.f.u(0,a)){u=s.f
s.f=a
t=new D.K(s.b+".color",u,a,[V.a6])
t.b=!0
s.a.a0(t)}},
aC:function(){this.cW()
this.dz(new V.a6(1,1,1))},
sb6:function(a,b){this.c7(new A.al(!0,!1,this.c.c))
this.dz(b)}}
O.hE.prototype={}
O.hF.prototype={
aC:function(){var u,t=this
t.cX()
u=t.ch
if(!(Math.abs(u-1)<$.L().a)){t.ch=1
u=new D.K(t.b+".refraction",u,1,[P.p])
u.b=!0
t.a.a0(u)}}}
O.hG.prototype={
dA:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.L().a)){u.ch=a
t=new D.K(u.b+".shininess",t,a,[P.p])
t.b=!0
u.a.a0(t)}},
aC:function(){this.cX()
this.dA(100)}}
O.bP.prototype={}
T.d0.prototype={}
T.d1.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.W():u}}
T.iN.prototype={
aN:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.o
W.aa(t,"load",H.n(new T.iO(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
hQ:function(a,b,c){var u,t,s,r
b=V.lJ(b)
u=V.lJ(a.width)
t=V.lJ(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.l8()
s.width=u
s.height=t
r=H.h(C.i.eM(s,"2d"),"$icx")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.pz(r.getImageData(0,0,s.width,s.height))}}}
T.iO.prototype={
$1:function(a){var u=this,t=u.a,s=t.hQ(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.d.jn(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.iF()}++t.e},
$S:11}
V.bl.prototype={
aG:function(a,b){return!0},
i:function(a){return"all"},
$iaA:1}
V.aA.prototype={}
V.dV.prototype={
aG:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)if(u[s].aG(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa5:function(a){this.a=H.l(a,"$ib",[V.aA],"$ab")},
$iaA:1}
V.aw.prototype={
aG:function(a,b){return!this.eU(0,b)},
i:function(a){return"!["+this.cV(0)+"]"}}
V.id.prototype={
aG:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c8(this.a),t=H.c8(this.b)
return u+".."+t},
$iaA:1}
V.io.prototype={
eZ:function(a){var u,t
if(a.a.length<=0)throw H.c(P.D("May not create a SetMatcher with zero characters."))
u=new H.a2([P.m,P.T])
for(t=new H.cI(a,a.gn(a),[H.at(a,"y",0)]);t.C();)u.k(0,t.d,!0)
this.shT(u)},
aG:function(a,b){return this.a.br(0,b)},
i:function(a){var u=this.a
return P.cZ(u.ga2(u),0,null)},
shT:function(a){this.a=H.l(a,"$iz",[P.m,P.T],"$az")},
$iaA:1}
V.cX.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d3(this.a.l(0,b))
r.sa5(H.d([],[V.aA]))
r.c=!1
C.a.h(this.c,r)
return r},
iJ:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.aG(0,a))return r}return},
i:function(a){return this.b},
sib:function(a){this.c=H.l(a,"$ib",[V.d3],"$ab")}}
V.eg.prototype={
i:function(a){var u=H.lL(this.b,"\n","\\n"),t=H.lL(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d2.prototype={
aH:function(a,b,c){var u,t,s
H.l(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.v)(c),++t){s=c[t]
this.c.k(0,s,b)}},
i:function(a){return this.b},
shL:function(a){var u=P.f
this.c=H.l(a,"$iz",[u,u],"$az")}}
V.iR.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cX(this,b)
u.sib(H.d([],[V.d3]))
u.d=null
this.a.k(0,b,u)}return u},
R:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.d2(a)
u=P.f
t.shL(new H.a2([u,u]))
this.b.k(0,a,t)}return t},
eF:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.eg]),k=this.c,j=[P.m],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.E(a,s)
q=k.iJ(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cZ(i,0,m)
throw H.c(P.D("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cZ(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.eg(n==null?o.b:n,p,s)}++s}}},
si1:function(a){this.a=H.l(a,"$iz",[P.f,V.cX],"$az")},
si4:function(a){this.b=H.l(a,"$iz",[P.f,V.d2],"$az")}}
V.d3.prototype={
i:function(a){return this.b.b+": "+this.cV(0)}}
X.dD.prototype={$icO:1}
X.ha.prototype={
gv:function(){var u=this.x
return u==null?this.x=D.W():u}}
X.e2.prototype={
gv:function(){var u=this.f
return u==null?this.f=D.W():u},
aL:function(a){var u
H.h(a,"$iB")
u=this.f
if(u!=null)u.F(a)},
fd:function(){return this.aL(null)},
saX:function(a){var u,t,s=this
if(!J.Q(s.b,a)){u=s.b
if(u!=null)u.gv().M(0,s.gd0())
t=s.b
s.b=a
if(a!=null)a.gv().h(0,s.gd0())
u=new D.K("mover",t,s.b,[U.ac])
u.b=!0
s.aL(u)}},
$icO:1,
$idD:1}
X.ed.prototype={}
V.bF.prototype={
bl:function(a){this.b=new P.he(C.Q)
this.c=null
this.sbS(H.d([],[[P.b,W.aH]]))},
O:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aH]))
u=a.split("\n")
for(l=u.length,t=[W.aH],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.J(q)
o=m.b.fo(q,0,q.length)
n=o==null?q:o
C.O.eO(p,H.lL(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaz(m.d),p)}},
ep:function(a,b){var u,t,s,r,q=this
H.l(b,"$ib",[P.f],"$ab")
q.sbS(H.d([],[[P.b,W.aH]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bs():t).eF(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)q.by(t[r])},
sbS:function(a){this.d=H.l(a,"$ib",[[P.b,W.aH]],"$ab")}}
V.kY.prototype={
$1:function(a){var u
H.h(a,"$ibf")
u=C.c.eE(this.a.giN(),2)
if(u!=="0.00")P.lK(u+" fps")},
$S:54}
V.fR.prototype={
by:function(a){var u=this
switch(a.a){case"Class":u.O(a.b,"#551")
break
case"Comment":u.O(a.b,"#777")
break
case"Id":u.O(a.b,"#111")
break
case"Num":u.O(a.b,"#191")
break
case"Reserved":u.O(a.b,"#119")
break
case"String":u.O(a.b,"#171")
break
case"Symbol":u.O(a.b,"#616")
break
case"Type":u.O(a.b,"#B11")
break
case"Whitespace":u.O(a.b,"#111")
break}},
bs:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iS()
a1.c=a1.l(0,r)
u=a1.l(0,r).m(0,q)
t=V.w(new H.u("_"))
C.a.h(u.a,t)
t=V.a_("a","z")
C.a.h(u.a,t)
t=V.a_("A","Z")
C.a.h(u.a,t)
t=a1.l(0,q).m(0,q)
u=V.w(new H.u("_"))
C.a.h(t.a,u)
u=V.a_("0","9")
C.a.h(t.a,u)
u=V.a_("a","z")
C.a.h(t.a,u)
u=V.a_("A","Z")
C.a.h(t.a,u)
u=a1.l(0,r).m(0,p)
t=V.a_("0","9")
C.a.h(u.a,t)
t=a1.l(0,p).m(0,p)
u=V.a_("0","9")
C.a.h(t.a,u)
u=a1.l(0,p).m(0,o)
t=V.w(new H.u("."))
C.a.h(u.a,t)
t=a1.l(0,o).m(0,n)
u=V.a_("0","9")
C.a.h(t.a,u)
u=a1.l(0,n).m(0,n)
t=V.a_("0","9")
C.a.h(u.a,t)
t=a1.l(0,r).m(0,m)
u=V.w(new H.u(l))
C.a.h(t.a,u)
u=a1.l(0,m).m(0,m)
t=V.w(new H.u(l))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,k)
u=V.w(new H.u('"'))
C.a.h(t.a,u)
u=a1.l(0,k).m(0,j)
t=V.w(new H.u('"'))
C.a.h(u.a,t)
t=a1.l(0,k).m(0,i)
u=V.w(new H.u("\\"))
C.a.h(t.a,u)
u=a1.l(0,i).m(0,k)
t=V.w(new H.u('"'))
C.a.h(u.a,t)
C.a.h(a1.l(0,k).m(0,k).a,new V.bl())
t=a1.l(0,r).m(0,h)
u=V.w(new H.u("'"))
C.a.h(t.a,u)
u=a1.l(0,h).m(0,g)
t=V.w(new H.u("'"))
C.a.h(u.a,t)
t=a1.l(0,h).m(0,f)
u=V.w(new H.u("\\"))
C.a.h(t.a,u)
u=a1.l(0,f).m(0,h)
t=V.w(new H.u("'"))
C.a.h(u.a,t)
C.a.h(a1.l(0,h).m(0,h).a,new V.bl())
t=a1.l(0,r).m(0,e)
u=V.w(new H.u("/"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,d)
t=V.w(new H.u("/"))
C.a.h(u.a,t)
t=a1.l(0,d).m(0,c)
u=V.w(new H.u("\n"))
C.a.h(t.a,u)
u=a1.l(0,d).m(0,d)
t=new V.aw()
s=[V.aA]
t.sa5(H.d([],s))
C.a.h(u.a,t)
u=V.w(new H.u("\n"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,b)
t=V.w(new H.u("*"))
C.a.h(u.a,t)
t=a1.l(0,b).m(0,a)
u=V.w(new H.u("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,b)
t=new V.aw()
t.sa5(H.d([],s))
C.a.h(u.a,t)
u=V.w(new H.u("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,c)
t=V.w(new H.u("/"))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,a0)
u=V.w(new H.u(" \n\t"))
C.a.h(t.a,u)
u=a1.l(0,a0).m(0,a0)
t=V.w(new H.u(" \n\t"))
C.a.h(u.a,t)
t=a1.l(0,p)
t.d=t.a.R("Num")
t=a1.l(0,n)
t.d=t.a.R("Num")
t=a1.l(0,m)
t.d=t.a.R("Symbol")
t=a1.l(0,j)
t.d=t.a.R("String")
t=a1.l(0,g)
t.d=t.a.R("String")
t=a1.l(0,c)
t.d=t.a.R(d)
t=a1.l(0,a0)
t.d=t.a.R(a0)
t=a1.l(0,q)
t=t.d=t.a.R(q)
u=[P.f]
t.aH(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aH(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aH(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.hb.prototype={
by:function(a){var u=this
switch(a.a){case"Builtin":u.O(a.b,"#411")
break
case"Comment":u.O(a.b,"#777")
break
case"Id":u.O(a.b,"#111")
break
case"Num":u.O(a.b,"#191")
break
case"Preprocess":u.O(a.b,"#737")
break
case"Reserved":u.O(a.b,"#119")
break
case"Symbol":u.O(a.b,"#611")
break
case"Type":u.O(a.b,"#171")
break
case"Whitespace":u.O(a.b,"#111")
break}},
bs:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iS()
e.c=e.l(0,r)
u=e.l(0,r).m(0,q)
t=V.w(new H.u("_"))
C.a.h(u.a,t)
t=V.a_("a","z")
C.a.h(u.a,t)
t=V.a_("A","Z")
C.a.h(u.a,t)
t=e.l(0,q).m(0,q)
u=V.w(new H.u("_"))
C.a.h(t.a,u)
u=V.a_("0","9")
C.a.h(t.a,u)
u=V.a_("a","z")
C.a.h(t.a,u)
u=V.a_("A","Z")
C.a.h(t.a,u)
u=e.l(0,r).m(0,p)
t=V.a_("0","9")
C.a.h(u.a,t)
t=e.l(0,p).m(0,p)
u=V.a_("0","9")
C.a.h(t.a,u)
u=e.l(0,p).m(0,o)
t=V.w(new H.u("."))
C.a.h(u.a,t)
t=e.l(0,o).m(0,n)
u=V.a_("0","9")
C.a.h(t.a,u)
u=e.l(0,n).m(0,n)
t=V.a_("0","9")
C.a.h(u.a,t)
t=e.l(0,r).m(0,m)
u=V.w(new H.u(l))
C.a.h(t.a,u)
u=e.l(0,m).m(0,m)
t=V.w(new H.u(l))
C.a.h(u.a,t)
t=e.l(0,r).m(0,k)
u=V.w(new H.u("/"))
C.a.h(t.a,u)
u=e.l(0,k).m(0,j)
t=V.w(new H.u("/"))
C.a.h(u.a,t)
C.a.h(e.l(0,k).m(0,m).a,new V.bl())
t=e.l(0,j).m(0,i)
u=V.w(new H.u("\n"))
C.a.h(t.a,u)
u=e.l(0,j).m(0,j)
t=new V.aw()
s=[V.aA]
t.sa5(H.d([],s))
C.a.h(u.a,t)
u=V.w(new H.u("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,h)
t=V.w(new H.u("#"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,h)
u=new V.aw()
u.sa5(H.d([],s))
C.a.h(t.a,u)
t=V.w(new H.u("\n"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,g)
u=V.w(new H.u("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,f)
t=V.w(new H.u(" \n\t"))
C.a.h(u.a,t)
t=e.l(0,f).m(0,f)
u=V.w(new H.u(" \n\t"))
C.a.h(t.a,u)
u=e.l(0,p)
u.d=u.a.R("Num")
u=e.l(0,n)
u.d=u.a.R("Num")
u=e.l(0,m)
u.d=u.a.R("Symbol")
u=e.l(0,i)
u.d=u.a.R(j)
u=e.l(0,g)
u.d=u.a.R(h)
u=e.l(0,f)
u.d=u.a.R(f)
u=e.l(0,q)
u=u.d=u.a.R(q)
t=[P.f]
u.aH(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aH(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aH(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.hc.prototype={
by:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.O(a.b,"#911")
u.O("=",t)
break
case"Id":u.O(a.b,t)
break
case"Other":u.O(a.b,t)
break
case"Reserved":u.O(a.b,"#119")
break
case"String":u.O(a.b,"#171")
break
case"Symbol":u.O(a.b,"#616")
break}},
bs:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iS()
l.c=l.l(0,s)
u=l.l(0,s).m(0,r)
t=V.w(new H.u("_"))
C.a.h(u.a,t)
t=V.a_("a","z")
C.a.h(u.a,t)
t=V.a_("A","Z")
C.a.h(u.a,t)
t=l.l(0,r).m(0,r)
u=V.w(new H.u("_"))
C.a.h(t.a,u)
u=V.a_("0","9")
C.a.h(t.a,u)
u=V.a_("a","z")
C.a.h(t.a,u)
u=V.a_("A","Z")
C.a.h(t.a,u)
u=l.l(0,r).m(0,q)
t=V.w(new H.u("="))
C.a.h(u.a,t)
u.c=!0
u=l.l(0,s).m(0,p)
t=V.w(new H.u("</\\-!>="))
C.a.h(u.a,t)
t=l.l(0,p).m(0,p)
u=V.w(new H.u("</\\-!>="))
C.a.h(t.a,u)
u=l.l(0,s).m(0,o)
t=V.w(new H.u('"'))
C.a.h(u.a,t)
t=l.l(0,o).m(0,n)
u=V.w(new H.u('"'))
C.a.h(t.a,u)
u=l.l(0,o).m(0,"EscStr")
t=V.w(new H.u("\\"))
C.a.h(u.a,t)
t=l.l(0,"EscStr").m(0,o)
u=V.w(new H.u('"'))
C.a.h(t.a,u)
C.a.h(l.l(0,o).m(0,o).a,new V.bl())
C.a.h(l.l(0,s).m(0,m).a,new V.bl())
u=l.l(0,m).m(0,m)
t=new V.aw()
t.sa5(H.d([],[V.aA]))
C.a.h(u.a,t)
u=V.w(new H.u('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.a_("a","z")
C.a.h(t.a,u)
u=V.a_("A","Z")
C.a.h(t.a,u)
u=l.l(0,p)
u.d=u.a.R("Symbol")
u=l.l(0,n)
u.d=u.a.R("String")
u=l.l(0,r)
t=u.a.R(r)
u.d=t
t.aH(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
t=l.l(0,q)
t.d=t.a.R(q)
t=l.l(0,m)
t.d=t.a.R(m)
return l}}
V.i7.prototype={
ep:function(a,b){H.l(b,"$ib",[P.f],"$ab")
this.sbS(H.d([],[[P.b,W.aH]]))
this.O(C.a.m(b,"\n"),"#111")},
by:function(a){},
bs:function(){return}}
V.ib.prototype={
dG:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.mo().gcI().j(0,H.i(u))
if(t==null)if(d){c.$0()
m.dE(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lR(m.c).h(0,q)
o=W.nT("radio")
o.checked=s
o.name=u
u=W.o
W.aa(o,"change",H.n(new V.ic(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lR(m.c).h(0,r.createElement("br"))},
b4:function(a,b,c){return this.dG(a,b,c,!1)},
dE:function(a){var u,t,s=P.mo(),r=P.f,q=P.o0(s.gcI(),r,r)
q.k(0,this.a,a)
u=s.ex(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.k9([],[]).cO(""),"",t)}}
V.ic.prototype={
$1:function(a){var u=this
if(H.F(u.b.checked)){u.c.$0()
u.a.dE(u.d)}},
$S:11}
V.is.prototype={
f0:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.aa(q,"scroll",H.n(new V.iu(o),{func:1,ret:-1,args:[r]}),!1,r)},
dI:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.f],"$ab")
this.hW()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eF(C.a.iT(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.v)(s),++q){p=s[q]
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
if(H.pX(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.J(m[1])
l.textContent=H.J(m[0])
t.appendChild(l)}else{k=P.fc(C.y,n,C.h,!1)
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
eL:function(a){var u,t,s,r=new V.fR("dart")
r.bl("dart")
u=new V.hb("glsl")
u.bl("glsl")
t=new V.hc("html")
t.bl("html")
s=C.a.iL(H.d([r,u,t],[V.bF]),new V.iv(a))
if(s!=null)return s
r=new V.i7("plain")
r.bl("plain")
return r},
dH:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.l(b0,"$ib",[P.f],"$ab")
u=H.d([],[P.m])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dr(r).a1(r,"+")){C.a.k(b0,s,C.b.a9(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a1(r,"-")){C.a.k(b0,s,C.b.a9(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eL(a8)
q.ep(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.fc(C.y,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lT()
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
for(a3=C.a.gV(r);a3.C();)c.appendChild(a3.gL(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
ig:function(a){var u,t,s,r,q,p,o,n="auto"
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
s=H.h(r.insertCell(-1),"$ibe").style
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
o=H.h(r.insertCell(-1),"$ibe")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
hW:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iS()
u.c=u.l(0,q)
t=u.l(0,q).m(0,p)
s=V.w(new H.u("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,p).m(0,p)
s=new V.aw()
r=[V.aA]
s.sa5(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.u("*"))
C.a.h(s.a,t)
t=u.l(0,p).m(0,"BoldEnd")
s=V.w(new H.u("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,o)
s=V.w(new H.u("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,o).m(0,o)
s=new V.aw()
s.sa5(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.u("_"))
C.a.h(s.a,t)
t=u.l(0,o).m(0,n)
s=V.w(new H.u("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,m)
s=V.w(new H.u("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,m).m(0,m)
s=new V.aw()
s.sa5(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.u("`"))
C.a.h(s.a,t)
t=u.l(0,m).m(0,"CodeEnd")
s=V.w(new H.u("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,l)
s=V.w(new H.u("["))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,l).m(0,k)
s=V.w(new H.u("|"))
C.a.h(t.a,s)
s=u.l(0,l).m(0,j)
t=V.w(new H.u("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,l).m(0,l)
t=new V.aw()
t.sa5(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.u("|]"))
C.a.h(t.a,s)
s=u.l(0,k).m(0,j)
t=V.w(new H.u("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,k).m(0,k)
t=new V.aw()
t.sa5(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.u("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,q).m(0,i).a,new V.bl())
s=u.l(0,i).m(0,i)
t=new V.aw()
t.sa5(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.u("*_`["))
C.a.h(t.a,s)
s=u.l(0,"BoldEnd")
s.d=s.a.R(p)
s=u.l(0,n)
s.d=s.a.R(o)
s=u.l(0,"CodeEnd")
s.d=s.a.R(m)
s=u.l(0,j)
s.d=s.a.R("Link")
s=u.l(0,i)
s.d=s.a.R(i)
this.b=u}}
V.iu.prototype={
$1:function(a){P.mk(C.o,new V.it(this.a))},
$S:11}
V.it.prototype={
$0:function(){var u=C.c.ao(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:0}
V.iv.prototype={
$1:function(a){return H.h(a,"$ibF").a===this.a},
$S:55}
T.kP.prototype={
$0:function(){this.a.sab(0,F.lF(1,null,null,1))},
$S:0}
T.kQ.prototype={
$0:function(){this.a.sab(0,F.mU(!0,40,1))},
$S:0}
T.kR.prototype={
$0:function(){this.a.sab(0,F.mU(!1,40,0))},
$S:0}
T.kS.prototype={
$0:function(){this.a.sab(0,F.n9(6,6))},
$S:0}
T.kT.prototype={
$0:function(){this.a.sab(0,F.nb())},
$S:0}
T.kU.prototype={
$0:function(){this.a.sab(0,F.pP())},
$S:0}
T.kV.prototype={
$1:function(a){var u,t,s,r
H.h(a,"$iB")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.dH("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dH("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:10};(function aliases(){var u=J.a.prototype
u.eR=u.i
u=J.dP.prototype
u.eT=u.i
u=P.j.prototype
u.eS=u.bD
u=W.V.prototype
u.bH=u.af
u=W.eV.prototype
u.eV=u.ax
u=O.cJ.prototype
u.cW=u.aC
u=O.ba.prototype
u.cX=u.aC
u=V.dV.prototype
u.eU=u.aG
u.cV=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"pt","oD",14)
u(P,"pu","oE",14)
u(P,"pv","oF",14)
t(P,"mT","pr",3)
s(W,"pI",4,null,["$4"],["oH"],28,0)
s(W,"pJ",4,null,["$4"],["oI"],28,0)
var m
r(m=E.aq.prototype,"gel",0,0,null,["$1","$0"],["em","j3"],1,0)
r(m,"gen",0,0,null,["$1","$0"],["eo","j4"],1,0)
r(m,"gej",0,0,null,["$1","$0"],["ek","j2"],1,0)
r(m,"geh",0,0,null,["$1","$0"],["ei","j_"],1,0)
q(m,"giY","iZ",9)
q(m,"gj0","j1",9)
r(m=E.ef.prototype,"gcY",0,0,null,["$1","$0"],["d_","cZ"],1,0)
p(m,"gjj","ey",3)
o(m=X.em.prototype,"gh8","h9",16)
o(m,"gfX","fY",16)
o(m,"gh2","h3",4)
o(m,"ghc","hd",31)
o(m,"gha","hb",31)
o(m,"ghg","hh",4)
o(m,"ghk","hl",4)
o(m,"gh6","h7",4)
o(m,"ghi","hj",4)
o(m,"gh4","h5",4)
o(m,"ghm","hn",36)
o(m,"gho","hp",16)
o(m,"ghB","hC",15)
o(m,"ghx","hy",15)
o(m,"ghz","hA",15)
r(m=D.dR.prototype,"gdq",0,0,null,["$1","$0"],["dr","he"],1,0)
o(m,"ghr","hs",38)
q(m,"gfR","fS",26)
q(m,"ghv","hw",26)
r(D.bM.prototype,"gbJ",0,0,null,["$1","$0"],["a4","f5"],1,0)
n(V.X.prototype,"gn","ba",13)
n(V.M.prototype,"gn","ba",13)
n(V.bu.prototype,"gn","ba",13)
r(m=U.cF.prototype,"gaO",0,0,null,["$1","$0"],["H","a6"],1,0)
q(m,"gf7","f8",22)
q(m,"ght","hu",22)
r(m=U.en.prototype,"gaO",0,0,null,["$1","$0"],["H","a6"],1,0)
o(m,"gbV","bW",2)
o(m,"gbX","bY",2)
o(m,"gbZ","c_",2)
r(m=U.eo.prototype,"gaO",0,0,null,["$1","$0"],["H","a6"],1,0)
o(m,"gbV","bW",2)
o(m,"gbX","bY",2)
o(m,"gbZ","c_",2)
o(m,"gfJ","fK",2)
o(m,"gfL","fM",2)
o(m,"gi9","ia",2)
o(m,"gi7","i8",2)
o(m,"gi5","i6",2)
o(U.ep.prototype,"gfO","fP",2)
r(m=M.dJ.prototype,"gau",0,0,null,["$1","$0"],["aA","f9"],1,0)
q(m,"gfZ","h_",9)
q(m,"gh0","h1",9)
r(m=O.dW.prototype,"gbm",0,0,null,["$1","$0"],["a0","bK"],1,0)
r(m,"ghO",0,0,null,["$1","$0"],["dv","hP"],1,0)
q(m,"gfT","fU",33)
q(m,"gfV","fW",33)
r(O.cJ.prototype,"gbm",0,0,null,["$1","$0"],["a0","bK"],1,0)
r(X.e2.prototype,"gd0",0,0,null,["$1","$0"],["aL","fd"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.R,null)
s(P.R,[H.lh,J.a,J.av,P.eI,P.j,H.cI,P.b7,H.c1,H.d6,H.fK,H.iX,P.bH,H.cy,H.f_,P.ae,H.ho,H.hq,H.hj,P.f5,P.bj,P.aP,P.es,P.iD,P.cY,P.iE,P.bf,P.ap,P.kp,P.k3,P.cg,P.eH,P.y,P.kh,P.hw,P.c_,P.hf,P.kn,P.km,P.T,P.az,P.ab,P.b6,P.i5,P.eb,P.eA,P.h9,P.bI,P.b,P.z,P.P,P.ax,P.f,P.ah,P.ch,P.jb,P.k6,W.fN,W.bS,W.H,W.e0,W.eV,W.kc,W.dL,W.aC,W.k2,W.fd,P.k8,P.fa,P.jY,P.S,O.a5,O.cK,E.fD,E.aq,E.ie,E.ef,Z.er,Z.jw,Z.dB,Z.bJ,Z.bv,D.fG,D.c0,D.B,X.dC,X.dQ,X.hl,X.ht,X.aB,X.hU,X.iT,X.em,D.dG,D.ad,D.bM,D.ea,V.a6,V.aF,V.h0,V.dX,V.am,V.a9,V.a4,V.bd,V.e5,V.X,V.M,V.bu,U.en,U.eo,U.ep,M.dJ,A.dy,A.fw,A.al,A.aG,A.aJ,A.aK,A.hD,A.cc,A.cd,A.cf,A.ei,A.j5,F.a8,F.h3,F.br,F.hn,F.bN,F.e8,F.ip,F.iq,F.ir,F.aj,F.jk,F.jl,F.jo,F.jq,F.jr,F.js,O.bP,O.cJ,O.hE,T.iN,V.bl,V.aA,V.dV,V.id,V.io,V.cX,V.eg,V.d2,V.iR,X.dD,X.ed,X.e2,V.bF,V.ib,V.is])
s(J.a,[J.hi,J.dO,J.dP,J.aT,J.bK,J.bp,H.cP,H.bL,W.k,W.ft,W.bY,W.cx,W.b4,W.b5,W.Y,W.eu,W.fS,W.fT,W.ew,W.dI,W.ey,W.fV,W.o,W.eB,W.aS,W.hd,W.eD,W.bo,W.dT,W.hO,W.eJ,W.eK,W.aU,W.eL,W.eO,W.aV,W.eS,W.eU,W.aX,W.eW,W.aY,W.f0,W.aL,W.f3,W.iQ,W.b_,W.f6,W.iV,W.jg,W.fe,W.fg,W.fi,W.fk,W.fm,P.b9,P.eF,P.bc,P.eQ,P.ia,P.f1,P.bg,P.f8,P.fx,P.et,P.dz,P.e3,P.ca,P.e7,P.ee,P.ej,P.eY])
s(J.dP,[J.i6,J.bR,J.bq])
t(J.lg,J.aT)
s(J.bK,[J.dN,J.dM])
t(P.hs,P.eI)
s(P.hs,[H.ek,W.jE,W.ar,P.h5])
t(H.u,H.ek)
s(P.j,[H.fY,H.hx,H.d8])
s(H.fY,[H.c5,H.hp])
s(P.b7,[H.hy,H.jx])
t(H.hz,H.c5)
t(H.fL,H.fK)
s(P.bH,[H.i2,H.hk,H.j9,H.iZ,H.fF,H.il,P.fv,P.e1,P.aR,P.ja,P.j7,P.cb,P.fI,P.fQ])
s(H.cy,[H.l2,H.iK,H.kJ,H.kK,H.kL,P.jA,P.jz,P.jB,P.jC,P.kg,P.kf,P.jL,P.jP,P.jM,P.jN,P.jO,P.jS,P.jT,P.jR,P.jQ,P.iF,P.iG,P.kz,P.k0,P.k_,P.k1,P.hr,P.hv,P.fW,P.fX,P.jf,P.jc,P.jd,P.je,P.ki,P.kj,P.kl,P.kk,P.kt,P.ks,P.ku,P.kv,W.fZ,W.hQ,W.hS,W.ik,W.iC,W.jK,W.i0,W.i_,W.k4,W.k5,W.ke,W.ko,P.ka,P.kB,P.h6,P.h7,P.fz,E.ig,E.ih,E.ii,E.iP,D.h1,D.h2,F.kq,F.kC,F.kE,F.kF,F.kG,F.kZ,F.l_,F.l1,F.kN,F.kD,F.ju,F.jt,F.jm,F.jn,O.hH,O.hI,O.hJ,O.hK,O.hL,O.hM,T.iO,V.kY,V.ic,V.iu,V.it,V.iv,T.kP,T.kQ,T.kR,T.kS,T.kT,T.kU,T.kV])
s(H.iK,[H.iA,H.cv])
t(H.jy,P.fv)
t(P.hu,P.ae)
s(P.hu,[H.a2,W.jD])
t(H.dY,H.bL)
s(H.dY,[H.dd,H.df])
t(H.de,H.dd)
t(H.cQ,H.de)
t(H.dg,H.df)
t(H.dZ,H.dg)
s(H.dZ,[H.hV,H.hW,H.hX,H.hY,H.hZ,H.e_,H.cR])
t(P.jZ,P.kp)
t(P.jX,P.k3)
t(P.fb,P.hw)
t(P.el,P.fb)
s(P.c_,[P.fB,P.h_])
t(P.bG,P.iE)
s(P.bG,[P.fC,P.he,P.jj,P.ji])
t(P.jh,P.h_)
s(P.ab,[P.p,P.m])
s(P.aR,[P.c9,P.hg])
t(P.jG,P.ch)
s(W.k,[W.G,W.h4,W.cM,W.aW,W.dh,W.aZ,W.aM,W.dj,W.jv,W.d9,P.fA,P.bX])
s(W.G,[W.V,W.bE,W.da])
s(W.V,[W.x,P.q])
s(W.x,[W.dw,W.fu,W.cu,W.bD,W.bZ,W.aH,W.h8,W.cG,W.cH,W.im,W.be,W.ec,W.iI,W.iJ,W.d_])
s(W.b4,[W.cz,W.fO,W.fP])
t(W.fM,W.b5)
t(W.cA,W.eu)
t(W.ex,W.ew)
t(W.dH,W.ex)
t(W.ez,W.ey)
t(W.fU,W.ez)
t(W.aI,W.bY)
t(W.eC,W.eB)
t(W.cD,W.eC)
t(W.eE,W.eD)
t(W.c2,W.eE)
t(W.bQ,W.o)
s(W.bQ,[W.b8,W.af,W.b0])
t(W.hP,W.eJ)
t(W.hR,W.eK)
t(W.eM,W.eL)
t(W.hT,W.eM)
t(W.eP,W.eO)
t(W.cS,W.eP)
t(W.eT,W.eS)
t(W.i8,W.eT)
t(W.ij,W.eU)
t(W.di,W.dh)
t(W.ix,W.di)
t(W.eX,W.eW)
t(W.iy,W.eX)
t(W.iB,W.f0)
t(W.f4,W.f3)
t(W.iL,W.f4)
t(W.dk,W.dj)
t(W.iM,W.dk)
t(W.f7,W.f6)
t(W.iU,W.f7)
t(W.bi,W.af)
t(W.ff,W.fe)
t(W.jF,W.ff)
t(W.ev,W.dI)
t(W.fh,W.fg)
t(W.jU,W.fh)
t(W.fj,W.fi)
t(W.eN,W.fj)
t(W.fl,W.fk)
t(W.k7,W.fl)
t(W.fn,W.fm)
t(W.kb,W.fn)
t(W.jH,W.jD)
t(W.jI,P.iD)
t(W.lt,W.jI)
t(W.jJ,P.cY)
t(W.kd,W.eV)
t(P.k9,P.k8)
t(P.an,P.jY)
t(P.eG,P.eF)
t(P.hm,P.eG)
t(P.eR,P.eQ)
t(P.i3,P.eR)
t(P.cV,P.q)
t(P.f2,P.f1)
t(P.iH,P.f2)
t(P.f9,P.f8)
t(P.iW,P.f9)
t(P.fy,P.et)
t(P.i4,P.bX)
t(P.eZ,P.eY)
t(P.iz,P.eZ)
s(E.fD,[Z.dA,A.cW,T.d0])
s(D.B,[D.c3,D.c4,D.K,X.i9])
s(X.i9,[X.dU,X.bs,X.cN,X.eh])
s(O.a5,[D.dR,U.cF])
s(D.fG,[U.fH,U.ac])
s(U.ac,[U.dE,U.e6])
t(A.hA,A.cW)
s(A.ei,[A.aN,A.j2,A.j3,A.j4,A.j0,A.ai,A.j1,A.a0,A.d4,A.j6,A.d5,A.aD,A.ce,A.ao])
t(F.iw,F.h3)
t(F.j_,F.hn)
t(F.jp,F.jq)
t(F.i1,F.jr)
t(O.dW,O.bP)
s(O.cJ,[O.hB,O.hC,O.ba])
s(O.ba,[O.hF,O.hG])
t(T.d1,T.d0)
s(V.dV,[V.aw,V.d3])
t(X.ha,X.ed)
s(V.bF,[V.fR,V.hb,V.hc,V.i7])
u(H.ek,H.d6)
u(H.dd,P.y)
u(H.de,H.c1)
u(H.df,P.y)
u(H.dg,H.c1)
u(P.eI,P.y)
u(P.fb,P.kh)
u(W.eu,W.fN)
u(W.ew,P.y)
u(W.ex,W.H)
u(W.ey,P.y)
u(W.ez,W.H)
u(W.eB,P.y)
u(W.eC,W.H)
u(W.eD,P.y)
u(W.eE,W.H)
u(W.eJ,P.ae)
u(W.eK,P.ae)
u(W.eL,P.y)
u(W.eM,W.H)
u(W.eO,P.y)
u(W.eP,W.H)
u(W.eS,P.y)
u(W.eT,W.H)
u(W.eU,P.ae)
u(W.dh,P.y)
u(W.di,W.H)
u(W.eW,P.y)
u(W.eX,W.H)
u(W.f0,P.ae)
u(W.f3,P.y)
u(W.f4,W.H)
u(W.dj,P.y)
u(W.dk,W.H)
u(W.f6,P.y)
u(W.f7,W.H)
u(W.fe,P.y)
u(W.ff,W.H)
u(W.fg,P.y)
u(W.fh,W.H)
u(W.fi,P.y)
u(W.fj,W.H)
u(W.fk,P.y)
u(W.fl,W.H)
u(W.fm,P.y)
u(W.fn,W.H)
u(P.eF,P.y)
u(P.eG,W.H)
u(P.eQ,P.y)
u(P.eR,W.H)
u(P.f1,P.y)
u(P.f2,W.H)
u(P.f8,P.y)
u(P.f9,W.H)
u(P.et,P.ae)
u(P.eY,P.y)
u(P.eZ,W.H)})();(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bD.prototype
C.i=W.bZ.prototype
C.O=W.aH.prototype
C.R=J.a.prototype
C.a=J.aT.prototype
C.S=J.dM.prototype
C.e=J.dN.prototype
C.j=J.dO.prototype
C.c=J.bK.prototype
C.b=J.bp.prototype
C.T=J.bq.prototype
C.Z=W.cS.prototype
C.B=J.i6.prototype
C.d=P.ca.prototype
C.a_=W.be.prototype
C.C=W.ec.prototype
C.r=J.bR.prototype
C.D=W.bi.prototype
C.E=W.d9.prototype
C.a0=new P.fC()
C.F=new P.fB()
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

C.M=new P.i5()
C.h=new P.jh()
C.N=new P.jj()
C.f=new P.jZ()
C.o=new P.b6(0)
C.P=new P.b6(5e6)
C.Q=new P.hf("element",!0,!1,!1,!1)
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
C.Y=new H.fL(0,{},C.x,[P.f,P.f])})()
var v={mangledGlobalNames:{m:"int",p:"double",ab:"num",f:"String",T:"bool",P:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.P},{func:1,ret:-1,opt:[D.B]},{func:1,ret:-1,args:[D.B]},{func:1,ret:-1},{func:1,ret:-1,args:[W.af]},{func:1,ret:P.P,args:[,,]},{func:1,ret:P.P,args:[F.a8]},{func:1,ret:P.P,args:[F.aj,P.p,P.p]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[P.m,[P.j,E.aq]]},{func:1,ret:P.P,args:[D.B]},{func:1,ret:P.P,args:[W.o]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.p},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.b0]},{func:1,ret:-1,args:[W.o]},{func:1,ret:V.a4,args:[P.p]},{func:1,ret:P.P,args:[,]},{func:1,ret:P.f,args:[P.m]},{func:1,ret:P.p,args:[P.p]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:-1,args:[P.m,[P.j,U.ac]]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,args:[,]},{func:1,ret:-1,args:[P.m,[P.j,D.ad]]},{func:1,ret:P.T,args:[W.G]},{func:1,ret:P.T,args:[W.V,P.f,P.f,W.bS]},{func:1,ret:P.T,args:[W.aC]},{func:1,ret:P.T,args:[P.f]},{func:1,ret:-1,args:[W.b8]},{func:1,ret:P.P,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:-1,args:[P.m,[P.j,V.am]]},{func:1,ret:W.V,args:[W.G]},{func:1,ret:-1,args:[W.G,W.G]},{func:1,ret:-1,args:[W.bi]},{func:1,args:[W.o]},{func:1,ret:P.T,args:[[P.j,D.ad]]},{func:1,ret:P.S,args:[,,]},{func:1,ret:P.P,args:[P.f,,]},{func:1,ret:P.P,args:[P.f]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.m]},{func:1,ret:[P.z,P.f,P.f],args:[[P.z,P.f,P.f],P.f]},{func:1,ret:[P.aP,,],args:[,]},{func:1,ret:P.P,args:[,],opt:[P.ax]},{func:1,ret:P.S,args:[P.m]},{func:1,ret:P.P,args:[{func:1,ret:-1}]},{func:1,ret:P.m,args:[A.aG,A.aG]},{func:1,ret:P.m,args:[A.aJ,A.aJ]},{func:1,ret:P.m,args:[A.aK,A.aK]},{func:1,args:[P.f]},{func:1,ret:P.P,args:[P.bf]},{func:1,ret:P.T,args:[V.bF]},{func:1,args:[,P.f]},{func:1,ret:P.P,args:[P.ab]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b3=0
$.cw=null
$.lV=null
$.lx=!1
$.n0=null
$.mR=null
$.n7=null
$.kH=null
$.kM=null
$.lH=null
$.cj=null
$.dp=null
$.dq=null
$.ly=!1
$.a1=C.f
$.ay=[]
$.bn=null
$.lb=null
$.m_=null
$.lZ=null
$.dc=P.lj(P.f,P.bI)
$.hN=null
$.mb=null
$.cT=null
$.mf=null
$.mr=null
$.mw=null
$.mt=null
$.mu=null
$.mv=null
$.ms=null
$.mx=null
$.ma=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"q3","nd",function(){return H.n_("_$dart_dartClosure")})
u($,"q4","lN",function(){return H.n_("_$dart_js")})
u($,"qa","ne",function(){return H.bh(H.iY({
toString:function(){return"$receiver$"}}))})
u($,"qb","nf",function(){return H.bh(H.iY({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"qc","ng",function(){return H.bh(H.iY(null))})
u($,"qd","nh",function(){return H.bh(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qg","nk",function(){return H.bh(H.iY(void 0))})
u($,"qh","nl",function(){return H.bh(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qf","nj",function(){return H.bh(H.mm(null))})
u($,"qe","ni",function(){return H.bh(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"qj","nn",function(){return H.bh(H.mm(void 0))})
u($,"qi","nm",function(){return H.bh(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qA","lO",function(){return P.oC()})
u($,"qm","no",function(){return P.oz()})
u($,"qB","ns",function(){return H.o6(H.ci(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))})
u($,"qD","nu",function(){return P.ol("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qE","nv",function(){return P.p0()})
u($,"qC","nt",function(){return P.m1(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"qt","nr",function(){return Z.aO(0)})
u($,"qn","np",function(){return Z.aO(511)})
u($,"qv","bA",function(){return Z.aO(1)})
u($,"qu","bz",function(){return Z.aO(2)})
u($,"qp","by",function(){return Z.aO(4)})
u($,"qw","bW",function(){return Z.aO(8)})
u($,"qx","bB",function(){return Z.aO(16)})
u($,"qq","ds",function(){return Z.aO(32)})
u($,"qr","dt",function(){return Z.aO(64)})
u($,"qs","nq",function(){return Z.aO(96)})
u($,"qy","ct",function(){return Z.aO(128)})
u($,"qo","bx",function(){return Z.aO(256)})
u($,"q2","nc",function(){return new V.h0(1e-9)})
u($,"q1","L",function(){return $.nc()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cP,DataView:H.bL,ArrayBufferView:H.bL,Float32Array:H.cQ,Float64Array:H.cQ,Int16Array:H.hV,Int32Array:H.hW,Int8Array:H.hX,Uint16Array:H.hY,Uint32Array:H.hZ,Uint8ClampedArray:H.e_,CanvasPixelArray:H.e_,Uint8Array:H.cR,HTMLAudioElement:W.x,HTMLBRElement:W.x,HTMLButtonElement:W.x,HTMLContentElement:W.x,HTMLDListElement:W.x,HTMLDataElement:W.x,HTMLDataListElement:W.x,HTMLDetailsElement:W.x,HTMLDialogElement:W.x,HTMLEmbedElement:W.x,HTMLFieldSetElement:W.x,HTMLHRElement:W.x,HTMLHeadElement:W.x,HTMLHeadingElement:W.x,HTMLHtmlElement:W.x,HTMLIFrameElement:W.x,HTMLLIElement:W.x,HTMLLabelElement:W.x,HTMLLegendElement:W.x,HTMLLinkElement:W.x,HTMLMapElement:W.x,HTMLMediaElement:W.x,HTMLMenuElement:W.x,HTMLMetaElement:W.x,HTMLMeterElement:W.x,HTMLModElement:W.x,HTMLOListElement:W.x,HTMLObjectElement:W.x,HTMLOptGroupElement:W.x,HTMLOptionElement:W.x,HTMLOutputElement:W.x,HTMLParagraphElement:W.x,HTMLParamElement:W.x,HTMLPictureElement:W.x,HTMLPreElement:W.x,HTMLProgressElement:W.x,HTMLQuoteElement:W.x,HTMLScriptElement:W.x,HTMLShadowElement:W.x,HTMLSlotElement:W.x,HTMLSourceElement:W.x,HTMLSpanElement:W.x,HTMLStyleElement:W.x,HTMLTableCaptionElement:W.x,HTMLTableColElement:W.x,HTMLTextAreaElement:W.x,HTMLTimeElement:W.x,HTMLTitleElement:W.x,HTMLTrackElement:W.x,HTMLUListElement:W.x,HTMLUnknownElement:W.x,HTMLVideoElement:W.x,HTMLDirectoryElement:W.x,HTMLFontElement:W.x,HTMLFrameElement:W.x,HTMLFrameSetElement:W.x,HTMLMarqueeElement:W.x,HTMLElement:W.x,AccessibleNodeList:W.ft,HTMLAnchorElement:W.dw,HTMLAreaElement:W.fu,HTMLBaseElement:W.cu,Blob:W.bY,HTMLBodyElement:W.bD,HTMLCanvasElement:W.bZ,CanvasRenderingContext2D:W.cx,CDATASection:W.bE,CharacterData:W.bE,Comment:W.bE,ProcessingInstruction:W.bE,Text:W.bE,CSSNumericValue:W.cz,CSSUnitValue:W.cz,CSSPerspective:W.fM,CSSCharsetRule:W.Y,CSSConditionRule:W.Y,CSSFontFaceRule:W.Y,CSSGroupingRule:W.Y,CSSImportRule:W.Y,CSSKeyframeRule:W.Y,MozCSSKeyframeRule:W.Y,WebKitCSSKeyframeRule:W.Y,CSSKeyframesRule:W.Y,MozCSSKeyframesRule:W.Y,WebKitCSSKeyframesRule:W.Y,CSSMediaRule:W.Y,CSSNamespaceRule:W.Y,CSSPageRule:W.Y,CSSRule:W.Y,CSSStyleRule:W.Y,CSSSupportsRule:W.Y,CSSViewportRule:W.Y,CSSStyleDeclaration:W.cA,MSStyleCSSProperties:W.cA,CSS2Properties:W.cA,CSSImageValue:W.b4,CSSKeywordValue:W.b4,CSSPositionValue:W.b4,CSSResourceValue:W.b4,CSSURLImageValue:W.b4,CSSStyleValue:W.b4,CSSMatrixComponent:W.b5,CSSRotation:W.b5,CSSScale:W.b5,CSSSkew:W.b5,CSSTranslation:W.b5,CSSTransformComponent:W.b5,CSSTransformValue:W.fO,CSSUnparsedValue:W.fP,DataTransferItemList:W.fS,HTMLDivElement:W.aH,DOMException:W.fT,ClientRectList:W.dH,DOMRectList:W.dH,DOMRectReadOnly:W.dI,DOMStringList:W.fU,DOMTokenList:W.fV,Element:W.V,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.k,Accelerometer:W.k,AccessibleNode:W.k,AmbientLightSensor:W.k,Animation:W.k,ApplicationCache:W.k,DOMApplicationCache:W.k,OfflineResourceList:W.k,BackgroundFetchRegistration:W.k,BatteryManager:W.k,BroadcastChannel:W.k,CanvasCaptureMediaStreamTrack:W.k,DedicatedWorkerGlobalScope:W.k,EventSource:W.k,FileReader:W.k,FontFaceSet:W.k,Gyroscope:W.k,XMLHttpRequest:W.k,XMLHttpRequestEventTarget:W.k,XMLHttpRequestUpload:W.k,LinearAccelerationSensor:W.k,Magnetometer:W.k,MediaDevices:W.k,MediaKeySession:W.k,MediaQueryList:W.k,MediaRecorder:W.k,MediaSource:W.k,MediaStream:W.k,MediaStreamTrack:W.k,MIDIAccess:W.k,MIDIInput:W.k,MIDIOutput:W.k,MIDIPort:W.k,NetworkInformation:W.k,Notification:W.k,OffscreenCanvas:W.k,OrientationSensor:W.k,PaymentRequest:W.k,Performance:W.k,PermissionStatus:W.k,PresentationAvailability:W.k,PresentationConnection:W.k,PresentationConnectionList:W.k,PresentationRequest:W.k,RelativeOrientationSensor:W.k,RemotePlayback:W.k,RTCDataChannel:W.k,DataChannel:W.k,RTCDTMFSender:W.k,RTCPeerConnection:W.k,webkitRTCPeerConnection:W.k,mozRTCPeerConnection:W.k,ScreenOrientation:W.k,Sensor:W.k,ServiceWorker:W.k,ServiceWorkerContainer:W.k,ServiceWorkerGlobalScope:W.k,ServiceWorkerRegistration:W.k,SharedWorker:W.k,SharedWorkerGlobalScope:W.k,SpeechRecognition:W.k,SpeechSynthesis:W.k,SpeechSynthesisUtterance:W.k,VR:W.k,VRDevice:W.k,VRDisplay:W.k,VRSession:W.k,VisualViewport:W.k,WebSocket:W.k,Worker:W.k,WorkerGlobalScope:W.k,WorkerPerformance:W.k,BluetoothDevice:W.k,BluetoothRemoteGATTCharacteristic:W.k,Clipboard:W.k,MojoInterfaceInterceptor:W.k,USB:W.k,IDBDatabase:W.k,IDBOpenDBRequest:W.k,IDBVersionChangeRequest:W.k,IDBRequest:W.k,IDBTransaction:W.k,AnalyserNode:W.k,RealtimeAnalyserNode:W.k,AudioBufferSourceNode:W.k,AudioDestinationNode:W.k,AudioNode:W.k,AudioScheduledSourceNode:W.k,AudioWorkletNode:W.k,BiquadFilterNode:W.k,ChannelMergerNode:W.k,AudioChannelMerger:W.k,ChannelSplitterNode:W.k,AudioChannelSplitter:W.k,ConstantSourceNode:W.k,ConvolverNode:W.k,DelayNode:W.k,DynamicsCompressorNode:W.k,GainNode:W.k,AudioGainNode:W.k,IIRFilterNode:W.k,MediaElementAudioSourceNode:W.k,MediaStreamAudioDestinationNode:W.k,MediaStreamAudioSourceNode:W.k,OscillatorNode:W.k,Oscillator:W.k,PannerNode:W.k,AudioPannerNode:W.k,webkitAudioPannerNode:W.k,ScriptProcessorNode:W.k,JavaScriptAudioNode:W.k,StereoPannerNode:W.k,WaveShaperNode:W.k,EventTarget:W.k,File:W.aI,FileList:W.cD,FileWriter:W.h4,HTMLFormElement:W.h8,Gamepad:W.aS,History:W.hd,HTMLCollection:W.c2,HTMLFormControlsCollection:W.c2,HTMLOptionsCollection:W.c2,ImageData:W.bo,HTMLImageElement:W.cG,HTMLInputElement:W.cH,KeyboardEvent:W.b8,Location:W.dT,MediaList:W.hO,MessagePort:W.cM,MIDIInputMap:W.hP,MIDIOutputMap:W.hR,MimeType:W.aU,MimeTypeArray:W.hT,PointerEvent:W.af,MouseEvent:W.af,DragEvent:W.af,Document:W.G,DocumentFragment:W.G,HTMLDocument:W.G,ShadowRoot:W.G,XMLDocument:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cS,RadioNodeList:W.cS,Plugin:W.aV,PluginArray:W.i8,RTCStatsReport:W.ij,HTMLSelectElement:W.im,SourceBuffer:W.aW,SourceBufferList:W.ix,SpeechGrammar:W.aX,SpeechGrammarList:W.iy,SpeechRecognitionResult:W.aY,Storage:W.iB,CSSStyleSheet:W.aL,StyleSheet:W.aL,HTMLTableCellElement:W.be,HTMLTableDataCellElement:W.be,HTMLTableHeaderCellElement:W.be,HTMLTableElement:W.ec,HTMLTableRowElement:W.iI,HTMLTableSectionElement:W.iJ,HTMLTemplateElement:W.d_,TextTrack:W.aZ,TextTrackCue:W.aM,VTTCue:W.aM,TextTrackCueList:W.iL,TextTrackList:W.iM,TimeRanges:W.iQ,Touch:W.b_,TouchEvent:W.b0,TouchList:W.iU,TrackDefaultList:W.iV,CompositionEvent:W.bQ,FocusEvent:W.bQ,TextEvent:W.bQ,UIEvent:W.bQ,URL:W.jg,VideoTrackList:W.jv,WheelEvent:W.bi,Window:W.d9,DOMWindow:W.d9,Attr:W.da,CSSRuleList:W.jF,ClientRect:W.ev,DOMRect:W.ev,GamepadList:W.jU,NamedNodeMap:W.eN,MozNamedAttrMap:W.eN,SpeechRecognitionResultList:W.k7,StyleSheetList:W.kb,SVGLength:P.b9,SVGLengthList:P.hm,SVGNumber:P.bc,SVGNumberList:P.i3,SVGPointList:P.ia,SVGScriptElement:P.cV,SVGStringList:P.iH,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.bg,SVGTransformList:P.iW,AudioBuffer:P.fx,AudioParamMap:P.fy,AudioTrackList:P.fA,AudioContext:P.bX,webkitAudioContext:P.bX,BaseAudioContext:P.bX,OfflineAudioContext:P.i4,WebGLBuffer:P.dz,WebGLProgram:P.e3,WebGL2RenderingContext:P.ca,WebGLShader:P.e7,WebGLTexture:P.ee,WebGLUniformLocation:P.ej,SQLResultSetRowList:P.iz})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dY.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.dZ.$nativeSuperclassTag="ArrayBufferView"
W.dh.$nativeSuperclassTag="EventTarget"
W.di.$nativeSuperclassTag="EventTarget"
W.dj.$nativeSuperclassTag="EventTarget"
W.dk.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(T.n3,[])
else T.n3([])})})()
//# sourceMappingURL=test.dart.js.map
