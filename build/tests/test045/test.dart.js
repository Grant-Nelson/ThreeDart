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
a[c]=function(){a[c]=function(){H.qa(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lP"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lP"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lP(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={lp:function lp(){},
kS:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
hp:function(){return new P.ce("No element")},
o6:function(){return new P.ce("Too many elements")},
o5:function(){return new P.ce("Too few elements")},
eh:function(a,b,c,d,e){H.k(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.m,args:[e,e]})
if(c-b<=32)H.oA(a,b,c,d,e)
else H.oz(a,b,c,d,e)},
oA:function(a,b,c,d,e){var u,t,s,r,q
H.k(a,"$ib",[e],"$ab")
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
oz:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.k(a2,"$ib",[a6],"$ab")
H.n(a5,{func:1,ret:P.m,args:[a6,a6]})
u=C.e.aa(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.e.aa(a3+a4,2)
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
if(J.P(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.e(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.P()
if(d<0){if(f!==h){if(h>=a2.length)return H.e(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.ax()
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
if(typeof a1!=="number")return a1.ax()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.ax()
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
H.eh(a2,a3,h-2,a5,a6)
H.eh(a2,g+2,a4,a5,a6)
if(a)return
if(h<t&&g>s){while(!0){if(h>=a2.length)return H.e(a2,h)
if(!J.P(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.e(a2,g)
if(!J.P(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.e(a2,f)
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
break}}}H.eh(a2,h,g,a5,a6)}else H.eh(a2,h,g,a5,a6)},
t:function t(a){this.a=a},
h4:function h4(){},
c7:function c7(){},
cO:function cO(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hF:function hF(a,b,c){this.a=a
this.b=b
this.$ti=c},
hG:function hG(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hH:function hH(a,b,c){this.a=a
this.b=b
this.$ti=c},
db:function db(a,b,c){this.a=a
this.b=b
this.$ti=c},
jG:function jG(a,b,c){this.a=a
this.b=b
this.$ti=c},
c5:function c5(){},
d9:function d9(){},
er:function er(){},
nX:function(){throw H.c(P.I("Cannot modify unmodifiable Map"))},
cw:function(a){var u,t=H.K(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
pS:function(a){return v.types[H.a1(a)]},
pZ:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.U(a).$iN},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aw(a)
if(typeof u!=="string")throw H.c(H.av(a))
return u},
cW:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
or:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.e(p,3)
u=H.K(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ah(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.D(s,q)|32)>t)return}return parseInt(a,b)},
ca:function(a){return H.oi(a)+H.lL(H.bY(a),0,null)},
oi:function(a){var u,t,s,r,q,p,o,n=J.U(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ibT){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cw(t.length>1&&C.b.D(t,0)===36?C.b.ae(t,1):t)},
oj:function(){if(!!self.location)return self.location.href
return},
mo:function(a){var u,t,s,r,q
H.kY(a)
u=J.aD(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
os:function(a){var u,t,s,r=H.d([],[P.m])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.av(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.aR(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.av(s))}return H.mo(r)},
mp:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.av(s))
if(s<0)throw H.c(H.av(s))
if(s>65535)return H.os(a)}return H.mo(a)},
ot:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
cb:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aR(u,10))>>>0,56320|u&1023)}}throw H.c(P.ah(a,0,1114111,null,null))},
c9:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oq:function(a){var u=H.c9(a).getFullYear()+0
return u},
oo:function(a){var u=H.c9(a).getMonth()+1
return u},
ok:function(a){var u=H.c9(a).getDate()+0
return u},
ol:function(a){var u=H.c9(a).getHours()+0
return u},
on:function(a){var u=H.c9(a).getMinutes()+0
return u},
op:function(a){var u=H.c9(a).getSeconds()+0
return u},
om:function(a){var u=H.c9(a).getMilliseconds()+0
return u},
G:function(a){throw H.c(H.av(a))},
e:function(a,b){if(a==null)J.aD(a)
throw H.c(H.cq(a,b))},
cq:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aQ(!0,b,s,null)
u=H.a1(J.aD(a))
if(!(b<0)){if(typeof u!=="number")return H.G(u)
t=b>=u}else t=!0
if(t)return P.Y(b,a,s,null,u)
return P.ed(b,s)},
pM:function(a,b,c){var u="Invalid value"
if(a>c)return new P.cc(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.cc(a,c,!0,b,"end",u)
return new P.aQ(!0,b,"end",null)},
av:function(a){return new P.aQ(!0,a,null,null)},
pH:function(a){if(typeof a!=="number")throw H.c(H.av(a))
return a},
c:function(a){var u
if(a==null)a=new P.e9()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.nl})
u.name=""}else u.toString=H.nl
return u},
nl:function(){return J.aw(this.dartException)},
A:function(a){throw H.c(a)},
u:function(a){throw H.c(P.bm(a))},
bh:function(a){var u,t,s,r,q,p
a=H.nk(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.j3(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
j4:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
my:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
mi:function(a,b){return new H.i8(a,b==null?null:b.method)},
lq:function(a,b){var u=b==null,t=u?null:b.method
return new H.hs(a,t,u?null:b.receiver)},
ak:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.ld(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.aR(t,16)&8191)===10)switch(s){case 438:return f.$1(H.lq(H.j(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.mi(H.j(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.np()
q=$.nq()
p=$.nr()
o=$.ns()
n=$.nv()
m=$.nw()
l=$.nu()
$.nt()
k=$.ny()
j=$.nx()
i=r.am(u)
if(i!=null)return f.$1(H.lq(H.K(u),i))
else{i=q.am(u)
if(i!=null){i.method="call"
return f.$1(H.lq(H.K(u),i))}else{i=p.am(u)
if(i==null){i=o.am(u)
if(i==null){i=n.am(u)
if(i==null){i=m.am(u)
if(i==null){i=l.am(u)
if(i==null){i=o.am(u)
if(i==null){i=k.am(u)
if(i==null){i=j.am(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.mi(H.K(u),i))}}return f.$1(new H.jg(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ei()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aQ(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ei()
return a},
cu:function(a){var u
if(a==null)return new H.f5(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f5(a)},
pQ:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
pY:function(a,b,c,d,e,f){H.h(a,"$ibF")
switch(H.a1(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.C("Unsupported number of arguments for wrapped closure"))},
cp:function(a,b){var u
H.a1(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pY)
a.$identity=u
return u},
nW:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.iG().constructor.prototype):Object.create(new H.cz(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b3
if(typeof t!=="number")return t.p()
$.b3=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.m6(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.pS,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.m5:H.lh
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.m6(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
nT:function(a,b,c,d){var u=H.lh
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
m6:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nV(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nT(t,!r,u,b)
if(t===0){r=$.b3
if(typeof r!=="number")return r.p()
$.b3=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cA
return new Function(r+H.j(q==null?$.cA=H.fL("self"):q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b3
if(typeof r!=="number")return r.p()
$.b3=r+1
o+=r
r="return function("+o+"){return this."
q=$.cA
return new Function(r+H.j(q==null?$.cA=H.fL("self"):q)+"."+H.j(u)+"("+o+");}")()},
nU:function(a,b,c,d){var u=H.lh,t=H.m5
switch(b?-1:a){case 0:throw H.c(H.ox("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nV:function(a,b){var u,t,s,r,q,p,o,n=$.cA
if(n==null)n=$.cA=H.fL("self")
u=$.m4
if(u==null)u=$.m4=H.fL("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nU(s,!q,t,b)
if(s===1){n="return function(){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+");"
u=$.b3
if(typeof u!=="number")return u.p()
$.b3=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+", "+o+");"
u=$.b3
if(typeof u!=="number")return u.p()
$.b3=u+1
return new Function(n+u+"}")()},
lP:function(a,b,c,d,e,f,g){return H.nW(a,b,H.a1(c),d,!!e,!!f,g)},
lh:function(a){return a.a},
m5:function(a){return a.c},
fL:function(a){var u,t,s,r=new H.cz("self","target","receiver","name"),q=J.ln(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
J:function(a){if(a==null)H.pD("boolean expression must not be null")
return a},
K:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b0(a,"String"))},
pN:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b0(a,"double"))},
ng:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b0(a,"num"))},
lM:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b0(a,"bool"))},
a1:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b0(a,"int"))},
ni:function(a,b){throw H.c(H.b0(a,H.cw(H.K(b).substring(2))))},
q4:function(a,b){throw H.c(H.nS(a,H.cw(H.K(b).substring(2))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.U(a)[b])return a
H.ni(a,b)},
z:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.U(a)[b]
else u=!0
if(u)return a
H.q4(a,b)},
kY:function(a){if(a==null)return a
if(!!J.U(a).$ib)return a
throw H.c(H.b0(a,"List<dynamic>"))},
ne:function(a,b){var u
if(a==null)return a
u=J.U(a)
if(!!u.$ib)return a
if(u[b])return a
H.ni(a,b)},
n8:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a1(u)]
else return a.$S()}return},
fu:function(a,b){var u
if(typeof a=="function")return!0
u=H.n8(J.U(a))
if(u==null)return!1
return H.mW(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lI)return a
$.lI=!0
try{if(H.fu(a,b))return a
u=H.l7(b)
t=H.b0(a,u)
throw H.c(t)}finally{$.lI=!1}},
lR:function(a,b){if(a!=null&&!H.lO(a,b))H.A(H.b0(a,H.l7(b)))
return a},
b0:function(a,b){return new H.j5("TypeError: "+P.dP(a)+": type '"+H.n1(a)+"' is not a subtype of type '"+b+"'")},
nS:function(a,b){return new H.fM("CastError: "+P.dP(a)+": type '"+H.n1(a)+"' is not a subtype of type '"+b+"'")},
n1:function(a){var u,t=J.U(a)
if(!!t.$icD){u=H.n8(t)
if(u!=null)return H.l7(u)
return"Closure"}return H.ca(a)},
pD:function(a){throw H.c(new H.jH(a))},
qa:function(a){throw H.c(new P.fW(H.K(a)))},
ox:function(a){return new H.is(a)},
nb:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bY:function(a){if(a==null)return
return a.$ti},
qT:function(a,b,c){return H.cv(a["$a"+H.j(c)],H.bY(b))},
bX:function(a,b,c,d){var u
H.K(c)
H.a1(d)
u=H.cv(a["$a"+H.j(c)],H.bY(b))
return u==null?null:u[d]},
am:function(a,b,c){var u
H.K(b)
H.a1(c)
u=H.cv(a["$a"+H.j(b)],H.bY(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.a1(b)
u=H.bY(a)
return u==null?null:u[b]},
l7:function(a){return H.bW(a,null)},
bW:function(a,b){var u,t
H.k(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cw(a[0].name)+H.lL(a,1,b)
if(typeof a=="function")return H.cw(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a1(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.j(b[t])}if('func' in a)return H.pc(a,b)
if('futureOr' in a)return"FutureOr<"+H.bW("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
pc:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.f]
H.k(a0,"$ib",b,"$ab")
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
if(m!=null&&m!==P.R)p+=" extends "+H.bW(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bW(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bW(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bW(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.pP(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.K(b[h])
j=j+i+H.bW(e[d],a0)+(" "+H.j(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
lL:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.ai("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bW(p,c)}return"<"+u.i(0)+">"},
cv:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lN:function(a,b,c,d){var u,t
H.K(b)
H.kY(c)
H.K(d)
if(a==null)return!1
u=H.bY(a)
t=J.U(a)
if(t[b]==null)return!1
return H.n4(H.cv(t[d],u),null,c,null)},
k:function(a,b,c,d){H.K(b)
H.kY(c)
H.K(d)
if(a==null)return a
if(H.lN(a,b,c,d))return a
throw H.c(H.b0(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cw(b.substring(2))+H.lL(c,0,null),v.mangledGlobalNames)))},
n4:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aP(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aP(a[t],b,c[t],d))return!1
return!0},
qR:function(a,b,c){return a.apply(b,H.cv(J.U(b)["$a"+H.j(c)],H.bY(b)))},
nd:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="R"||a.name==="O"||a===-1||a===-2||H.nd(u)}return!1},
lO:function(a,b){var u,t
if(a==null)return b==null||b.name==="R"||b.name==="O"||b===-1||b===-2||H.nd(b)
if(b==null||b===-1||b.name==="R"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lO(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fu(a,b)}u=J.U(a).constructor
t=H.bY(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aP(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.lO(a,b))throw H.c(H.b0(a,H.l7(b)))
return a},
aP:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="R"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="R"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aP(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="O")return!0
if('func' in c)return H.mW(a,b,c,d)
if('func' in a)return c.name==="bF"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aP("type" in a?a.type:l,b,s,d)
else if(H.aP(a,b,s,d))return!0
else{if(!('$i'+"cJ" in t.prototype))return!1
r=t.prototype["$a"+"cJ"]
q=H.cv(r,u?a.slice(1):l)
return H.aP(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.n4(H.cv(m,u),b,p,d)},
mW:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aP(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aP(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aP(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aP(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.q2(h,b,g,d)},
q2:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aP(c[s],d,a[s],b))return!1}return!0},
qS:function(a,b,c){Object.defineProperty(a,H.K(b),{value:c,enumerable:false,writable:true,configurable:true})},
q0:function(a){var u,t,s,r,q=H.K($.nc.$1(a)),p=$.kR[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kW[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.K($.n3.$2(a,q))
if(q!=null){p=$.kR[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kW[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.l6(u)
$.kR[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kW[q]=u
return u}if(s==="-"){r=H.l6(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.nh(a,u)
if(s==="*")throw H.c(P.jf(q))
if(v.leafTags[q]===true){r=H.l6(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.nh(a,u)},
nh:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lT(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
l6:function(a){return J.lT(a,!1,null,!!a.$iN)},
q1:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.l6(u)
else return J.lT(u,c,null,null)},
pW:function(){if(!0===$.lS)return
$.lS=!0
H.pX()},
pX:function(){var u,t,s,r,q,p,o,n
$.kR=Object.create(null)
$.kW=Object.create(null)
H.pV()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.nj.$1(q)
if(p!=null){o=H.q1(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pV:function(){var u,t,s,r,q,p,o=C.G()
o=H.co(C.H,H.co(C.I,H.co(C.v,H.co(C.v,H.co(C.J,H.co(C.K,H.co(C.L(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.nc=new H.kT(r)
$.n3=new H.kU(q)
$.nj=new H.kV(p)},
co:function(a,b){return a(b)||b},
o8:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a7("Illegal RegExp pattern ("+String(r)+")",a,null))},
q8:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
pO:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nk:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lV:function(a,b,c){var u=H.q9(a,b,c)
return u},
q9:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nk(b),'g'),H.pO(c))},
fQ:function fQ(){},
fR:function fR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j3:function j3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i8:function i8(a,b){this.a=a
this.b=b},
hs:function hs(a,b,c){this.a=a
this.b=b
this.c=c},
jg:function jg(a){this.a=a},
ld:function ld(a){this.a=a},
f5:function f5(a){this.a=a
this.b=null},
cD:function cD(){},
iQ:function iQ(){},
iG:function iG(){},
cz:function cz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j5:function j5(a){this.a=a},
fM:function fM(a){this.a=a},
is:function is(a){this.a=a},
jH:function jH(a){this.a=a},
a3:function a3(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hw:function hw(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hx:function hx(a,b){this.a=a
this.$ti=b},
hy:function hy(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kT:function kT(a){this.a=a},
kU:function kU(a){this.a=a},
kV:function kV(a){this.a=a},
hr:function hr(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cm:function(a){return a},
oh:function(a){return new Int8Array(a)},
bk:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cq(b,a))},
pa:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.pM(a,b,c))
return b},
cS:function cS(){},
bM:function bM(){},
e5:function e5(){},
cT:function cT(){},
e6:function e6(){},
i0:function i0(){},
i1:function i1(){},
i2:function i2(){},
i3:function i3(){},
i4:function i4(){},
e7:function e7(){},
cU:function cU(){},
dg:function dg(){},
dh:function dh(){},
di:function di(){},
dj:function dj(){},
pP:function(a){return J.mc(a?Object.keys(a):[],null)},
q3:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lT:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fw:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lS==null){H.pW()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.jf("Return interceptor for "+H.j(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lX()]
if(r!=null)return r
r=H.q0(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.lX(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
o7:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.lg(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ah(a,0,4294967295,"length",null))
return J.mc(new Array(a),b)},
mc:function(a,b){return J.ln(H.d(a,[b]))},
ln:function(a){H.kY(a)
a.fixed$length=Array
return a},
U:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dT.prototype
return J.dS.prototype}if(typeof a=="string")return J.bp.prototype
if(a==null)return J.dU.prototype
if(typeof a=="boolean")return J.hq.prototype
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.R)return a
return J.fw(a)},
pR:function(a){if(typeof a=="number")return J.bJ.prototype
if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.R)return a
return J.fw(a)},
cs:function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.R)return a
return J.fw(a)},
fv:function(a){if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.R)return a
return J.fw(a)},
n9:function(a){if(typeof a=="number")return J.bJ.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bT.prototype
return a},
na:function(a){if(typeof a=="number")return J.bJ.prototype
if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bT.prototype
return a},
du:function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bT.prototype
return a},
ct:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.R)return a
return J.fw(a)},
nH:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pR(a).p(a,b)},
P:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).u(a,b)},
b2:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.n9(a).ax(a,b)},
lZ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.na(a).C(a,b)},
nI:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.n9(a).q(a,b)},
dy:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pZ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cs(a).j(a,b)},
le:function(a,b,c){return J.fv(a).k(a,b,c)},
nJ:function(a,b){return J.du(a).D(a,b)},
nK:function(a,b,c){return J.ct(a).hJ(a,b,c)},
nL:function(a,b,c,d){return J.ct(a).ie(a,b,c,d)},
nM:function(a,b){return J.du(a).Y(a,b)},
lf:function(a,b){return J.na(a).it(a,b)},
fy:function(a,b){return J.fv(a).K(a,b)},
nN:function(a,b,c,d){return J.ct(a).iG(a,b,c,d)},
m_:function(a,b){return J.fv(a).H(a,b)},
nO:function(a){return J.ct(a).gip(a)},
m0:function(a){return J.ct(a).gc4(a)},
dz:function(a){return J.U(a).gI(a)},
by:function(a){return J.fv(a).gS(a)},
aD:function(a){return J.cs(a).gn(a)},
m1:function(a){return J.fv(a).jd(a)},
nP:function(a,b){return J.ct(a).jg(a,b)},
nQ:function(a,b,c){return J.du(a).B(a,b,c)},
nR:function(a){return J.du(a).jq(a)},
aw:function(a){return J.U(a).i(a)},
a:function a(){},
hq:function hq(){},
dU:function dU(){},
dV:function dV(){},
ic:function ic(){},
bT:function bT(){},
bq:function bq(){},
aS:function aS(a){this.$ti=a},
lo:function lo(a){this.$ti=a},
an:function an(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bJ:function bJ(){},
dT:function dT(){},
dS:function dS(){},
bp:function bp(){}},P={
oN:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pE()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cp(new P.jJ(s),1)).observe(u,{childList:true})
return new P.jI(s,u,t)}else if(self.setImmediate!=null)return P.pF()
return P.pG()},
oO:function(a){self.scheduleImmediate(H.cp(new P.jK(H.n(a,{func:1,ret:-1})),0))},
oP:function(a){self.setImmediate(H.cp(new P.jL(H.n(a,{func:1,ret:-1})),0))},
oQ:function(a){P.lz(C.o,H.n(a,{func:1,ret:-1}))},
lz:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.e.aa(a.a,1000)
return P.oW(u<0?0:u,b)},
mx:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.bf]})
u=C.e.aa(a.a,1000)
return P.oX(u<0?0:u,b)},
oW:function(a,b){var u=new P.fb()
u.f1(a,b)
return u},
oX:function(a,b){var u=new P.fb()
u.f2(a,b)
return u},
oR:function(a,b){var u,t,s
b.a=1
try{a.er(new P.jV(b),new P.jW(b),null)}catch(s){u=H.ak(s)
t=H.cu(s)
P.q5(new P.jX(b,u,t))}},
mL:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.h(a.c,"$iaO")
if(u>=4){t=b.bS()
b.a=a.a
b.c=a.c
P.de(b,t)}else{t=H.h(b.c,"$ibj")
b.a=2
b.c=a
a.de(t)}},
de:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.h(g.c,"$iao")
g=g.b
r=s.a
q=s.b
g.toString
P.kH(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.de(h.a,b)}g=h.a
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
P.kH(i,i,g,r,q)
return}l=$.a0
if(l!=n)$.a0=n
else l=i
g=b.c
if(g===8)new P.k0(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.k_(u,b,o).$0()}else if((g&2)!==0)new P.jZ(h,u,b).$0()
if(l!=null)$.a0=l
g=u.b
if(!!J.U(g).$icJ){if(g.a>=4){k=H.h(q.c,"$ibj")
q.c=null
b=q.bk(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.mL(g,q)
return}}j=b.b
k=H.h(j.c,"$ibj")
j.c=null
b=j.bk(k)
g=u.a
r=u.b
if(!g){H.B(r,H.r(j,0))
j.a=4
j.c=r}else{H.h(r,"$iao")
j.a=8
j.c=r}h.a=j
g=j}},
pz:function(a,b){if(H.fu(a,{func:1,args:[P.R,P.ay]}))return H.n(a,{func:1,ret:null,args:[P.R,P.ay]})
if(H.fu(a,{func:1,args:[P.R]}))return H.n(a,{func:1,ret:null,args:[P.R]})
throw H.c(P.lg(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
py:function(){var u,t
for(;u=$.cn,u!=null;){$.dt=null
t=u.b
$.cn=t
if(t==null)$.ds=null
u.a.$0()}},
pC:function(){$.lJ=!0
try{P.py()}finally{$.dt=null
$.lJ=!1
if($.cn!=null)$.lY().$1(P.n5())}},
n0:function(a){var u=new P.ey(H.n(a,{func:1,ret:-1}))
if($.cn==null){$.cn=$.ds=u
if(!$.lJ)$.lY().$1(P.n5())}else $.ds=$.ds.b=u},
pB:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cn
if(u==null){P.n0(a)
$.dt=$.ds
return}t=new P.ey(a)
s=$.dt
if(s==null){t.b=u
$.cn=$.dt=t}else{t.b=s.b
$.dt=s.b=t
if(t.b==null)$.ds=t}},
q5:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a0
if(C.f===u){P.kJ(t,t,C.f,a)
return}u.toString
P.kJ(t,t,u,H.n(u.c_(a),s))},
mw:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a0
if(u===C.f){u.toString
return P.lz(a,b)}return P.lz(a,H.n(u.c_(b),t))},
oD:function(a,b){var u,t,s={func:1,ret:-1,args:[P.bf]}
H.n(b,s)
u=$.a0
if(u===C.f){u.toString
return P.mx(a,b)}t=u.dA(b,P.bf)
$.a0.toString
return P.mx(a,H.n(t,s))},
kH:function(a,b,c,d,e){var u={}
u.a=d
P.pB(new P.kI(u,e))},
mX:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a0
if(t===c)return d.$0()
$.a0=c
u=t
try{t=d.$0()
return t}finally{$.a0=u}},
mY:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.a0
if(t===c)return d.$1(e)
$.a0=c
u=t
try{t=d.$1(e)
return t}finally{$.a0=u}},
pA:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.a0
if(t===c)return d.$2(e,f)
$.a0=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a0=u}},
kJ:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.c_(d):c.iq(d,-1)
P.n0(d)},
jJ:function jJ(a){this.a=a},
jI:function jI(a,b,c){this.a=a
this.b=b
this.c=c},
jK:function jK(a){this.a=a},
jL:function jL(a){this.a=a},
fb:function fb(){this.c=0},
kp:function kp(a,b){this.a=a
this.b=b},
ko:function ko(a,b,c,d){var _=this
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
aO:function aO(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jU:function jU(a,b){this.a=a
this.b=b},
jY:function jY(a,b){this.a=a
this.b=b},
jV:function jV(a){this.a=a},
jW:function jW(a){this.a=a},
jX:function jX(a,b,c){this.a=a
this.b=b
this.c=c},
k0:function k0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k1:function k1(a){this.a=a},
k_:function k_(a,b,c){this.a=a
this.b=b
this.c=c},
jZ:function jZ(a,b,c){this.a=a
this.b=b
this.c=c},
ey:function ey(a){this.a=a
this.b=null},
iJ:function iJ(){},
iL:function iL(a,b){this.a=a
this.b=b},
iM:function iM(a,b){this.a=a
this.b=b},
d0:function d0(){},
iK:function iK(){},
bf:function bf(){},
ao:function ao(a,b){this.a=a
this.b=b},
ky:function ky(){},
kI:function kI(a,b){this.a=a
this.b=b},
k7:function k7(){},
k9:function k9(a,b,c){this.a=a
this.b=b
this.c=c},
k8:function k8(a,b){this.a=a
this.b=b},
ka:function ka(a,b,c){this.a=a
this.b=b
this.c=c},
oa:function(a,b){return new H.a3([a,b])},
lr:function(a,b){return new H.a3([a,b])},
oc:function(a){return H.pQ(a,new H.a3([null,null]))},
dY:function(a){return new P.k5([a])},
lF:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oV:function(a,b,c){var u=new P.eN(a,b,[c])
u.c=a.e
return u},
o4:function(a,b,c){var u,t
if(P.lK(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.f])
C.a.h($.az,a)
try{P.pd(a,u)}finally{if(0>=$.az.length)return H.e($.az,-1)
$.az.pop()}t=P.mu(b,H.ne(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
lm:function(a,b,c){var u,t
if(P.lK(a))return b+"..."+c
u=new P.ai(b)
C.a.h($.az,a)
try{t=u
t.a=P.mu(t.a,a,", ")}finally{if(0>=$.az.length)return H.e($.az,-1)
$.az.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lK:function(a){var u,t
for(u=$.az.length,t=0;t<u;++t)if(a===$.az[t])return!0
return!1},
pd:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$ib",[P.f],"$ab")
u=a.gS(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.A())return
r=H.j(u.gJ(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.A()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gJ(u);++s
if(!u.A()){if(s<=4){C.a.h(b,H.j(o))
return}q=H.j(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gJ(u);++s
for(;u.A();o=n,n=m){m=u.gJ(u);++s
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
ob:function(a,b,c){var u=P.oa(b,c)
a.H(0,new P.hz(u,b,c))
return u},
md:function(a,b){var u,t,s=P.dY(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t)s.h(0,H.B(a[t],b))
return s},
ls:function(a){var u,t={}
if(P.lK(a))return"{...}"
u=new P.ai("")
try{C.a.h($.az,a)
u.a+="{"
t.a=!0
J.m_(a,new P.hD(t,u))
u.a+="}"}finally{if(0>=$.az.length)return H.e($.az,-1)
$.az.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
k5:function k5(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ck:function ck(a){this.a=a
this.c=this.b=null},
eN:function eN(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hz:function hz(a,b,c){this.a=a
this.b=b
this.c=c},
hA:function hA(){},
x:function x(){},
hC:function hC(){},
hD:function hD(a,b){this.a=a
this.b=b},
af:function af(){},
kq:function kq(){},
hE:function hE(){},
es:function es(a,b){this.a=a
this.$ti=b},
kc:function kc(){},
eO:function eO(){},
fh:function fh(){},
oH:function(a,b,c,d){H.k(b,"$ib",[P.m],"$ab")
if(b instanceof Uint8Array)return P.oI(!1,b,c,d)
return},
oI:function(a,b,c,d){var u,t,s=$.nz()
if(s==null)return
u=0===c
if(u&&!0)return P.lC(s,b)
t=b.length
d=P.bs(c,d,t)
if(u&&d===t)return P.lC(s,b)
return P.lC(s,b.subarray(c,d))},
lC:function(a,b){if(P.oK(b))return
return P.oL(a,b)},
oL:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ak(t)}return},
oK:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
oJ:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ak(t)}return},
n_:function(a,b,c){var u,t,s
H.k(a,"$ib",[P.m],"$ab")
for(u=J.cs(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.ap()
if((s&127)!==s)return t-b}return c-b},
m3:function(a,b,c,d,e,f){if(C.e.be(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
fI:function fI(){},
fJ:function fJ(){},
c3:function c3(){},
bD:function bD(){},
h6:function h6(){},
hn:function hn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hm:function hm(a){this.a=a},
jo:function jo(){},
jq:function jq(){},
kw:function kw(a){this.b=0
this.c=a},
jp:function jp(a){this.a=a},
kv:function kv(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fx:function(a,b,c){var u
H.n(b,{func:1,ret:P.m,args:[P.f]})
u=H.or(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a7(a,null,null))},
o1:function(a){if(a instanceof H.cD)return a.i(0)
return"Instance of '"+H.ca(a)+"'"},
od:function(a,b,c){var u,t
H.B(b,c)
u=J.o7(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.k(u,t,b)
return H.k(u,"$ib",[c],"$ab")},
me:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.by(a);u.A();)C.a.h(s,H.B(u.gJ(u),c))
if(b)return s
return H.k(J.ln(s),"$ib",t,"$ab")},
d1:function(a,b,c){var u,t=P.m
H.k(a,"$ii",[t],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$iaS",[t],"$aaS")
u=a.length
c=P.bs(b,c,u)
return H.mp(b>0||c<u?C.a.eG(a,b,c):a)}if(!!J.U(a).$icU)return H.ot(a,b,P.bs(b,c,a.length))
return P.oB(a,b,c)},
oB:function(a,b,c){var u,t,s,r,q=null
H.k(a,"$ii",[P.m],"$ai")
if(b<0)throw H.c(P.ah(b,0,J.aD(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.ah(c,b,J.aD(a),q,q))
t=J.by(a)
for(s=0;s<b;++s)if(!t.A())throw H.c(P.ah(b,0,s,q,q))
r=[]
if(u)for(;t.A();)r.push(t.gJ(t))
else for(s=b;s<c;++s){if(!t.A())throw H.c(P.ah(c,b,s,q,q))
r.push(t.gJ(t))}return H.mp(r)},
ov:function(a){return new H.hr(a,H.o8(a,!1,!0,!1))},
mu:function(a,b,c){var u=J.by(b)
if(!u.A())return a
if(c.length===0){do a+=H.j(u.gJ(u))
while(u.A())}else{a+=H.j(u.gJ(u))
for(;u.A();)a=a+c+H.j(u.gJ(u))}return a},
mA:function(){var u=H.oj()
if(u!=null)return P.oG(u)
throw H.c(P.I("'Uri.base' is not supported"))},
fi:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.k(a,"$ib",[P.m],"$ab")
if(c===C.h){u=$.nF().b
if(typeof b!=="string")H.A(H.av(b))
u=u.test(b)}else u=!1
if(u)return b
H.B(b,H.am(c,"c3",0))
t=c.giF().c5(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.cb(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nY:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nZ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dJ:function(a){if(a>=10)return""+a
return"0"+a},
m8:function(a,b){return new P.b6(1e6*b+1000*a)},
dP:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aw(a)
if(typeof a==="string")return JSON.stringify(a)
return P.o1(a)},
dB:function(a){return new P.aQ(!1,null,null,a)},
lg:function(a,b,c){return new P.aQ(!0,a,b,c)},
ed:function(a,b){return new P.cc(null,null,!0,a,b,"Value not in range")},
ah:function(a,b,c,d,e){return new P.cc(b,c,!0,a,d,"Invalid value")},
bs:function(a,b,c){if(0>a||a>c)throw H.c(P.ah(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ah(b,a,c,"end",null))
return b}return c},
lv:function(a,b){if(typeof a!=="number")return a.P()
if(a<0)throw H.c(P.ah(a,0,null,b,null))},
Y:function(a,b,c,d,e){var u=H.a1(e==null?J.aD(b):e)
return new P.ho(u,!0,a,c,"Index out of range")},
I:function(a){return new P.jh(a)},
jf:function(a){return new P.je(a)},
mt:function(a){return new P.ce(a)},
bm:function(a){return new P.fP(a)},
C:function(a){return new P.eG(a)},
a7:function(a,b,c){return new P.hg(a,b,c)},
oe:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.m]})
u=H.d([],[c])
C.a.sn(u,a)
for(t=0;t<a;++t)C.a.k(u,t,b.$1(t))
return u},
lU:function(a){H.q3(a)},
oG:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.D(a,4)^58)*3|C.b.D(a,0)^100|C.b.D(a,1)^97|C.b.D(a,2)^116|C.b.D(a,3)^97)>>>0
if(u===0)return P.mz(e<e?C.b.B(a,0,e):a,5,f).gey()
else if(u===32)return P.mz(C.b.B(a,5,e),0,f).gey()}t=new Array(8)
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
if(P.mZ(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.jw()
if(r>=0)if(P.mZ(a,0,r,20,s)===20)s[7]=r
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
l=!1}else{if(!(n<e&&n===o+2&&C.b.ah(a,"..",o)))j=n>o+2&&C.b.ah(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.ah(a,"file",0)){if(q<=0){if(!C.b.ah(a,"/",o)){i="file:///"
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
a=C.b.aW(a,o,n,"/");++e
n=h}k="file"}else if(C.b.ah(a,"http",0)){if(t&&p+3===o&&C.b.ah(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aW(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.ah(a,"https",0)){if(t&&p+4===o&&C.b.ah(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aW(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.B(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.kf(a,r,q,p,o,n,m,k)}return P.oY(a,0,e,r,q,p,o,n,m,k)},
mC:function(a){var u=P.f
return C.a.iK(H.d(a.split("&"),[u]),P.lr(u,u),new P.jm(C.h),[P.y,P.f,P.f])},
oF:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jj(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.Y(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fx(C.b.B(a,s,t),n,n)
if(typeof p!=="number")return p.ax()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.e(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fx(C.b.B(a,s,c),n,n)
if(typeof p!=="number")return p.ax()
if(p>255)k.$2(l,s)
if(r>=u)return H.e(j,r)
j[r]=p
return j},
mB:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.jk(a)
t=new P.jl(u,a)
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
l=C.a.gaB(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.oF(a,q,c)
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
oY:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.p4(a,b,d)
else{if(d===b)P.dp(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.p5(a,u,e-1):""
s=P.p1(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.G(g)
q=r<g?P.p3(P.fx(C.b.B(a,r,g),new P.kr(a,f),n),j):n}else{q=n
s=q
t=""}p=P.p2(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.P()
o=h<i?P.lG(a,h+1,i,n):n
return new P.cl(j,t,s,q,p,o,i<c?P.p0(a,i+1,c):n)},
mP:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dp:function(a,b,c){throw H.c(P.a7(c,a,b))},
p3:function(a,b){if(a!=null&&a===P.mP(b))return
return a},
p1:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.Y(a,b)===91){if(typeof c!=="number")return c.q()
u=c-1
if(C.b.Y(a,u)!==93)P.dp(a,b,"Missing end `]` to match `[` in host")
P.mB(a,b+1,u)
return C.b.B(a,b,c).toLowerCase()}if(typeof c!=="number")return H.G(c)
t=b
for(;t<c;++t)if(C.b.Y(a,t)===58){P.mB(a,b,c)
return"["+a+"]"}return P.p7(a,b,c)},
p7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.G(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.Y(a,u)
if(q===37){p=P.mV(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ai("")
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
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ai("")
if(t<u){s.a+=C.b.B(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.dp(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.Y(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ai("")
n=C.b.B(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mQ(q)
u+=l
t=u}}}}if(s==null)return C.b.B(a,b,c)
if(t<c){n=C.b.B(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
p4:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mS(C.b.D(a,b)))P.dp(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.D(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dp(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.B(a,b,c)
return P.oZ(t?a.toLowerCase():a)},
oZ:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
p5:function(a,b,c){return P.dq(a,b,c,C.W,!1)},
p2:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dq(a,b,c,C.A,!0):C.j.jR(d,new P.ks(),P.f).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a6(u,"/"))u="/"+u
return P.p6(u,e,f)},
p6:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a6(a,"/"))return P.p8(a,!u||c)
return P.p9(a)},
lG:function(a,b,c,d){var u,t={}
H.k(d,"$iy",[P.f,null],"$ay")
if(a!=null){if(d!=null)throw H.c(P.dB("Both query and queryParameters specified"))
return P.dq(a,b,c,C.l,!0)}if(d==null)return
u=new P.ai("")
t.a=""
d.H(0,new P.kt(new P.ku(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
p0:function(a,b,c){return P.dq(a,b,c,C.l,!0)},
mV:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.Y(a,b+1)
t=C.b.Y(a,p)
s=H.kS(u)
r=H.kS(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.e.aR(q,4)
if(p>=8)return H.e(C.n,p)
p=(C.n[p]&1<<(q&15))!==0}else p=!1
if(p)return H.cb(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.B(a,b,b+3).toUpperCase()
return},
mQ:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
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
for(q=0;--r,r>=0;s=128){p=C.e.hX(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.D(o,p>>>4))
C.a.k(t,q+2,C.b.D(o,p&15))
q+=3}}return P.d1(t,0,null)},
dq:function(a,b,c,d,e){var u=P.mU(a,b,c,H.k(d,"$ib",[P.m],"$ab"),e)
return u==null?C.b.B(a,b,c):u},
mU:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.k(d,"$ib",[P.m],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.P()
if(typeof c!=="number")return H.G(c)
if(!(t<c))break
c$0:{q=C.b.Y(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mV(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.k,p)
p=(C.k[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dp(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.Y(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mQ(q)}}if(r==null)r=new P.ai("")
r.a+=C.b.B(a,s,t)
r.a+=H.j(o)
if(typeof n!=="number")return H.G(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.P()
if(s<c)r.a+=C.b.B(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mT:function(a){if(C.b.a6(a,"."))return!0
return C.b.dY(a,"/.")!==-1},
p9:function(a){var u,t,s,r,q,p,o
if(!P.mT(a))return a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.P(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
p8:function(a,b){var u,t,s,r,q,p
if(!P.mT(a))return!b?P.mR(a):a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaB(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaB(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.k(u,0,P.mR(u[0]))}return C.a.m(u,"/")},
mR:function(a){var u,t,s,r=a.length
if(r>=2&&P.mS(J.nJ(a,0)))for(u=1;u<r;++u){t=C.b.D(a,u)
if(t===58)return C.b.B(a,0,u)+"%3A"+C.b.ae(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.e(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
p_:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.D(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dB("Invalid URL encoding"))}}return u},
lH:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.D(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.B(a,b,c)
else r=new H.t(C.b.B(a,b,c))}else{r=H.d([],[P.m])
for(s=a.length,q=b;q<c;++q){t=C.b.D(a,q)
if(t>127)throw H.c(P.dB("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.dB("Truncated URI"))
C.a.h(r,P.p_(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.k(r,"$ib",[P.m],"$ab")
return new P.jp(!1).c5(r)},
mS:function(a){var u=a|32
return 97<=u&&u<=122},
mz:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.m])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.D(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a7(m,a,t))}}if(s<0&&t>b)throw H.c(P.a7(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.D(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaB(l)
if(r!==44||t!==p+7||!C.b.ah(a,"base64",p+1))throw H.c(P.a7("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.iX(0,a,o,u)
else{n=P.mU(a,o,u,C.l,!0)
if(n!=null)a=C.b.aW(a,o,u,n)}return new P.ji(a,l,c)},
pb:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.oe(22,new P.kC(),P.S),n=new P.kB(o),m=new P.kD(),l=new P.kE(),k=H.h(n.$2(0,225),"$iS")
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
mZ:function(a,b,c,d,e){var u,t,s,r,q
H.k(e,"$ib",[P.m],"$ab")
u=$.nG()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.b.D(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.k(e,q>>>5,t)}return d},
Q:function Q(){},
aA:function aA(a,b){this.a=a
this.b=b},
p:function p(){},
b6:function b6(a){this.a=a},
h2:function h2(){},
h3:function h3(){},
bE:function bE(){},
fB:function fB(){},
e9:function e9(){},
aQ:function aQ(a,b,c,d){var _=this
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
ho:function ho(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
jh:function jh(a){this.a=a},
je:function je(a){this.a=a},
ce:function ce(a){this.a=a},
fP:function fP(a){this.a=a},
ib:function ib(){},
ei:function ei(){},
fW:function fW(a){this.a=a},
eG:function eG(a){this.a=a},
hg:function hg(a,b,c){this.a=a
this.b=b
this.c=c},
bF:function bF(){},
m:function m(){},
i:function i(){},
b7:function b7(){},
b:function b(){},
y:function y(){},
O:function O(){},
ac:function ac(){},
R:function R(){},
ay:function ay(){},
f:function f(){},
ai:function ai(a){this.a=a},
jm:function jm(a){this.a=a},
jj:function jj(a){this.a=a},
jk:function jk(a){this.a=a},
jl:function jl(a,b){this.a=a
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
kr:function kr(a,b){this.a=a
this.b=b},
ks:function ks(){},
ku:function ku(a,b){this.a=a
this.b=b},
kt:function kt(a){this.a=a},
ji:function ji(a,b,c){this.a=a
this.b=b
this.c=c},
kC:function kC(){},
kB:function kB(a){this.a=a},
kD:function kD(){},
kE:function kE(){},
kf:function kf(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jP:function jP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
pK:function(a){var u,t=J.U(a)
if(!!t.$ibo){u=t.gdG(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fg(a.data,a.height,a.width)},
pJ:function(a){if(a instanceof P.fg)return{data:a.a,height:a.b,width:a.c}
return a},
bu:function(a){var u,t,s,r,q
if(a==null)return
u=P.lr(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r){q=H.K(t[r])
u.k(0,q,a[q])}return u},
pI:function(a){var u={}
a.H(0,new P.kK(u))
return u},
kh:function kh(){},
kj:function kj(a,b){this.a=a
this.b=b},
fg:function fg(a,b,c){this.a=a
this.b=b
this.c=c},
kK:function kK(a){this.a=a},
ki:function ki(a,b){this.a=a
this.b=b},
hc:function hc(a,b){this.a=a
this.b=b},
hd:function hd(){},
he:function he(){},
k4:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oU:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k6:function k6(){},
al:function al(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b9:function b9(){},
hu:function hu(){},
bc:function bc(){},
i9:function i9(){},
ih:function ih(){},
cY:function cY(){},
iN:function iN(){},
q:function q(){},
bg:function bg(){},
j2:function j2(){},
eL:function eL(){},
eM:function eM(){},
eW:function eW(){},
eX:function eX(){},
f7:function f7(){},
f8:function f8(){},
fe:function fe(){},
ff:function ff(){},
S:function S(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(a){this.a=a},
fG:function fG(){},
c0:function c0(){},
ia:function ia(){},
ez:function ez(){},
dD:function dD(){},
dR:function dR(){},
ec:function ec(){},
ee:function ee(){},
cd:function cd(){},
ef:function ef(){},
el:function el(){},
eq:function eq(){},
iF:function iF(){},
f3:function f3(){},
f4:function f4(){}},W={
m2:function(){var u=document.createElement("a")
return u},
li:function(){var u=document.createElement("canvas")
return u},
o_:function(a,b,c){var u=document.body,t=(u&&C.t).al(u,a,b,c)
t.toString
u=W.F
u=new H.db(new W.au(t),H.n(new W.h5(),{func:1,ret:P.Q,args:[u]}),[u])
return H.h(u.gaL(u),"$iV")},
o0:function(a){H.h(a,"$il")
return"wheel"},
cG:function(a){var u,t,s,r="element tag unavailable"
try{u=J.ct(a)
t=u.gen(a)
if(typeof t==="string")r=u.gen(a)}catch(s){H.ak(s)}return r},
o3:function(a){var u,t=document.createElement("input"),s=H.h(t,"$icM")
try{s.type=a}catch(u){H.ak(u)}return s},
k3:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mN:function(a,b,c,d){var u=W.k3(W.k3(W.k3(W.k3(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ab:function(a,b,c,d,e){var u=W.n2(new W.jT(c),W.o)
if(u!=null&&!0)J.nL(a,b,u,!1)
return new W.jS(a,b,u,!1,[e])},
mM:function(a){var u=W.m2(),t=window.location
u=new W.bV(new W.kb(u,t))
u.eS(a)
return u},
oS:function(a,b,c,d){H.h(a,"$iV")
H.K(b)
H.K(c)
H.h(d,"$ibV")
return!0},
oT:function(a,b,c,d){var u,t,s
H.h(a,"$iV")
H.K(b)
H.K(c)
u=H.h(d,"$ibV").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mO:function(){var u=P.f,t=P.md(C.p,u),s=H.r(C.p,0),r=H.n(new W.kn(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.km(t,P.dY(u),P.dY(u),P.dY(u),null)
t.eZ(null,new H.hH(C.p,r,[s,u]),q,null)
return t},
n2:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a0
if(u===C.f)return a
return u.dA(a,b)},
w:function w(){},
fz:function fz(){},
dA:function dA(){},
fA:function fA(){},
cy:function cy(){},
c1:function c1(){},
bz:function bz(){},
c2:function c2(){},
cC:function cC(){},
bA:function bA(){},
cE:function cE(){},
fS:function fS(){},
X:function X(){},
cF:function cF(){},
fT:function fT(){},
b4:function b4(){},
b5:function b5(){},
fU:function fU(){},
fV:function fV(){},
fY:function fY(){},
aF:function aF(){},
h_:function h_(){},
dM:function dM(){},
dN:function dN(){},
h0:function h0(){},
h1:function h1(){},
jN:function jN(a,b){this.a=a
this.b=b},
V:function V(){},
h5:function h5(){},
o:function o(){},
l:function l(){},
aG:function aG(){},
cI:function cI(){},
hb:function hb(){},
hf:function hf(){},
aR:function aR(){},
hl:function hl(){},
c6:function c6(){},
bo:function bo(){},
cL:function cL(){},
cM:function cM(){},
b8:function b8(){},
dZ:function dZ(){},
hU:function hU(){},
cQ:function cQ(){},
hV:function hV(){},
hW:function hW(a){this.a=a},
hX:function hX(){},
hY:function hY(a){this.a=a},
aT:function aT(){},
hZ:function hZ(){},
ag:function ag(){},
au:function au(a){this.a=a},
F:function F(){},
cV:function cV(){},
aU:function aU(){},
ie:function ie(){},
iq:function iq(){},
ir:function ir(a){this.a=a},
it:function it(){},
aV:function aV(){},
iD:function iD(){},
aW:function aW(){},
iE:function iE(){},
aX:function aX(){},
iH:function iH(){},
iI:function iI(a){this.a=a},
aK:function aK(){},
be:function be(){},
ej:function ej(){},
iO:function iO(){},
iP:function iP(){},
d2:function d2(){},
aY:function aY(){},
aL:function aL(){},
iR:function iR(){},
iS:function iS(){},
iX:function iX(){},
aZ:function aZ(){},
b_:function b_(){},
j0:function j0(){},
j1:function j1(){},
bS:function bS(){},
jn:function jn(){},
jF:function jF(){},
bi:function bi(){},
dc:function dc(){},
dd:function dd(){},
jO:function jO(){},
eB:function eB(){},
k2:function k2(){},
eT:function eT(){},
kg:function kg(){},
kk:function kk(){},
jM:function jM(){},
jQ:function jQ(a){this.a=a},
jR:function jR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lE:function lE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jS:function jS(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jT:function jT(a){this.a=a},
bV:function bV(a){this.a=a},
H:function H(){},
e8:function e8(a){this.a=a},
i6:function i6(a){this.a=a},
i5:function i5(a,b,c){this.a=a
this.b=b
this.c=c},
f0:function f0(){},
kd:function kd(){},
ke:function ke(){},
km:function km(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kn:function kn(){},
kl:function kl(){},
dQ:function dQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aC:function aC(){},
kb:function kb(a,b){this.a=a
this.b=b},
fj:function fj(a){this.a=a},
kx:function kx(a){this.a=a},
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
dk:function dk(){},
dl:function dl(){},
f1:function f1(){},
f2:function f2(){},
f6:function f6(){},
f9:function f9(){},
fa:function fa(){},
dm:function dm(){},
dn:function dn(){},
fc:function fc(){},
fd:function fd(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){}},O={
lj:function(a){var u=new O.a2([a])
u.bh(a)
return u},
a2:function a2(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cP:function cP(){this.b=this.a=null},
mf:function(){var u,t,s=new O.e2()
s.sf9(O.lj(V.as))
s.e.aZ(s.gfM(),s.gfO())
u=new O.ba(s,"emission")
u.c=new A.aq(!1,!1,!1)
u.f=new V.a6(0,0,0)
s.f=u
u=new O.ba(s,"ambient")
u.c=new A.aq(!1,!1,!1)
u.f=new V.a6(0,0,0)
s.r=u
u=new O.ba(s,"diffuse")
u.c=new A.aq(!1,!1,!1)
u.f=new V.a6(0,0,0)
s.x=u
u=new O.ba(s,"invDiffuse")
u.c=new A.aq(!1,!1,!1)
u.f=new V.a6(0,0,0)
s.y=u
u=new O.hN(s,"specular")
u.c=new A.aq(!1,!1,!1)
u.f=new V.a6(0,0,0)
u.ch=100
s.z=u
u=new O.hJ(s,"bump")
u.c=new A.aq(!1,!1,!1)
s.Q=u
s.ch=null
u=new O.ba(s,"reflect")
u.c=new A.aq(!1,!1,!1)
u.f=new V.a6(0,0,0)
s.cx=u
u=new O.hM(s,"refract")
u.c=new A.aq(!1,!1,!1)
u.f=new V.a6(0,0,0)
u.ch=1
s.cy=u
u=new O.hI(s,"alpha")
u.c=new A.aq(!1,!1,!1)
u.f=1
s.db=u
u=new D.dX()
u.bh(D.ae)
u.seU(H.d([],[D.dL]))
u.shA(H.d([],[D.eb]))
u.seW(H.d([],[D.bQ]))
u.y=u.x=null
u.cB(u.gfK(),u.ghk(),u.gho())
s.dx=u
t=new O.hL()
t.b=new V.ap(0,0,0,0)
t.c=1
t.d=10
t.e=!1
s.dy=t
t=u.x
u=t==null?u.x=D.W():t
u.h(0,s.ghL())
u=s.dx
t=u.y
u=t==null?u.y=D.W():t
u.h(0,s.gf_())
s.fr=null
return s},
fZ:function fZ(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e2:function e2(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hO:function hO(a,b){this.a=a
this.b=b},
hP:function hP(){},
hQ:function hQ(a,b){this.a=a
this.b=b},
hR:function hR(){},
hS:function hS(a,b){this.a=a
this.b=b},
hT:function hT(){},
hI:function hI(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
e3:function e3(){},
hJ:function hJ(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ba:function ba(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hL:function hL(){var _=this
_.e=_.d=_.c=_.b=null},
hM:function hM(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hN:function hN(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bR:function bR(){}},E={
ll:function(){var u=new E.ar()
u.a=""
u.b=!0
u.seR(0,O.lj(E.ar))
u.y.aZ(u.giY(),u.gj0())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sad(0,null)
u.saX(null)
u.saV(null)
return u},
ow:function(a,b){var u=new E.il(a)
u.eO(a,b)
return u},
oC:function(a,b,c,d,e){var u,t,s=J.U(a)
if(!!s.$ic2)return E.mv(a,!0,!0,!0,!1)
u=W.li()
t=u.style
t.width="100%"
t.height="100%"
s.gc4(a).h(0,u)
return E.mv(u,!0,!0,!0,!1)},
mv:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.em(),j=H.h(C.i.cz(a,"webgl2",P.oc(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$icd")
if(j==null)H.A(P.C("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.ow(j,a)
u=new T.iU(j)
u.b=H.a1(j.getParameter(3379))
H.a1(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.et(a)
t=new X.ht()
t.shD(P.dY(P.m))
u.b=t
t=new X.i_(u)
t.f=0
t.r=V.bO()
t.x=V.bO()
t.ch=t.Q=1
u.c=t
t=new X.hB(u)
t.r=0
t.x=V.bO()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.j_(u)
t.f=V.bO()
t.r=V.bO()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfl(H.d([],[[P.d0,P.R]]))
t=u.z
s=document
r=W.ag
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ab(s,"contextmenu",H.n(u.gfX(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ab(a,"focus",H.n(u.gh2(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ab(a,"blur",H.n(u.gfQ(),o),!1,p))
t=u.z
n=W.b8
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ab(s,"keyup",H.n(u.gh6(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ab(s,"keydown",H.n(u.gh4(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ab(a,"mousedown",H.n(u.gha(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,"mouseup",H.n(u.ghe(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,l,H.n(u.ghc(),q),!1,r))
n=u.z
m=W.bi;(n&&C.a).h(n,W.ab(a,H.K(W.o0(a)),H.n(u.ghg(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ab(s,l,H.n(u.gfZ(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ab(s,"mouseup",H.n(u.gh0(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ab(s,"pointerlockchange",H.n(u.ghi(),o),!1,p))
p=u.z
o=W.b_
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ab(a,"touchstart",H.n(u.ghy(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchend",H.n(u.ghu(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchmove",H.n(u.ghw(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aA(Date.now(),!1)
k.cy=0
k.dg()
return k},
fK:function fK(){},
ar:function ar(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
il:function il(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
im:function im(a){this.a=a},
io:function io(a){this.a=a},
ip:function ip(a){this.a=a},
em:function em(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iW:function iW(a){this.a=a}},Z={
lD:function(a,b,c){var u
H.k(c,"$ib",[P.m],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cm(c)),35044)
a.bindBuffer(b,null)
return new Z.ew(b,u)},
aN:function(a){return new Z.bU(a)},
ew:function ew(a,b){this.a=a
this.b=b},
dE:function dE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ex:function ex(a){this.a=a},
cB:function cB(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bG:function bG(a,b,c){this.a=a
this.b=b
this.c=c},
bU:function bU(a){this.a=a}},D={
W:function(){var u=new D.c4()
u.saj(null)
u.saP(null)
u.c=null
u.d=0
return u},
fN:function fN(){},
c4:function c4(){var _=this
_.d=_.c=_.b=_.a=null},
h8:function h8(a){this.a=a},
h9:function h9(a){this.a=a},
D:function D(){this.b=null},
bH:function bH(a){this.b=null
this.$ti=a},
bI:function bI(a){this.b=null
this.$ti=a},
E:function E(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
dL:function dL(){},
ae:function ae(){},
dX:function dX(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
eb:function eb(){},
bQ:function bQ(){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},X={dF:function dF(a,b){this.a=a
this.b=b},dW:function dW(a,b){this.a=a
this.b=b},ht:function ht(){this.d=this.b=this.a=null},e_:function e_(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hB:function hB(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bK:function bK(a,b,c){this.a=a
this.b=b
this.c=c},bL:function bL(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},i_:function i_(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ig:function ig(){},eo:function eo(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},j_:function j_(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},et:function et(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
o2:function(a){var u=new X.hh(),t=new V.ap(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.lw()
u.r=t
return u},
mk:function(a,b){var u,t=new X.ea()
t.c=1.0471975511965976
t.d=0.1
t.e=2000
t.saV(b)
u=t.c
if(!(Math.abs(u-a)<$.L().a)){t.c=a
u=new D.E("fov",u,a,[P.p])
u.b=!0
t.a4(u)}u=t.d
if(!(Math.abs(u-0.1)<$.L().a)){t.d=0.1
u=new D.E("near",u,0.1,[P.p])
u.b=!0
t.a4(u)}u=t.e
if(!(Math.abs(u-2000)<$.L().a)){t.e=2000
u=new D.E("far",u,2000,[P.p])
u.b=!0
t.a4(u)}return t},
fH:function fH(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dG:function dG(){},
hh:function hh(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ea:function ea(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ek:function ek(){}},V={
qb:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.be(a-b,u)
return(a<0?a+u:a)+b},
T:function(a,b,c){if(a==null)return C.b.an("null",c)
return C.b.an(C.c.es(Math.abs(a-0)<$.L().a?0:a,b),c+b+1)},
cr:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.p],"$ab")
u=H.d([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.u)(a),++r){q=V.T(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.k(u,p,C.b.an(u[p],s))}return u},
dv:function(a){return C.c.jn(Math.pow(2,C.S.cg(Math.log(H.pH(a))/Math.log(2))))},
c8:function(){var u=$.mh
return u==null?$.mh=V.bb(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bb:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.as(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lu:function(a,b,c){return V.bb(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lt:function(a,b,c,d){return V.bb(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
mg:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bb(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
bO:function(){var u=$.mm
return u==null?$.mm=new V.a9(0,0):u},
mn:function(){var u=$.bP
return u==null?$.bP=new V.a4(0,0,0):u},
lw:function(){var u=$.mr
return u==null?$.mr=V.mq(0,0,1,1):u},
mq:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cX(a,b,c,d)},
da:function(){var u=$.mH
return u==null?$.mH=new V.M(0,0,0):u},
oM:function(){var u=$.jr
return u==null?$.jr=new V.M(-1,0,0):u},
mI:function(){var u=$.js
return u==null?$.js=new V.M(0,1,0):u},
mJ:function(){var u=$.jt
return u==null?$.jt=new V.M(0,0,1):u},
a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h7:function h7(a){this.a=a},
e4:function e4(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
as:function as(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cX:function cX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a5:function a5(a,b){this.a=a
this.b=b},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
bt:function bt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Z:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.C("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.D(a,0)
t=C.b.D(b,0)
s=new V.ik()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
v:function(a){var u=new V.iu()
u.eP(a)
return u},
iZ:function(){var u=new V.iY(),t=P.f
u.si_(new H.a3([t,V.d_]))
u.si2(new H.a3([t,V.d5]))
u.c=null
return u},
bl:function bl(){},
aB:function aB(){},
e0:function e0(){},
ax:function ax(){this.a=null},
ik:function ik(){this.b=this.a=null},
iu:function iu(){this.a=null},
d_:function d_(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
en:function en(a,b,c){this.a=a
this.b=b
this.c=c},
d5:function d5(a){this.b=a
this.c=null},
iY:function iY(){this.c=this.b=this.a=null},
d6:function d6(a){this.b=a
this.a=this.c=null},
q6:function(a){P.oD(C.P,new V.l8(a))},
oy:function(a){var u=new V.iy()
u.eQ(a,!0)
return u},
bB:function bB(){},
l8:function l8(a){this.a=a},
fX:function fX(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hi:function hi(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hk:function hk(a){var _=this
_.a=a
_.d=_.c=_.b=null},
id:function id(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ii:function ii(a){this.a=a
this.c=null},
ij:function ij(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iy:function iy(){this.b=this.a=null},
iA:function iA(a){this.a=a},
iz:function iz(a){this.a=a},
iB:function iB(a){this.a=a},
nf:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="testCanvas",a3=null,a4=V.oy("Test 045"),a5=W.li()
a5.className="pageLargeCanvas"
a5.id=a2
a4.a.appendChild(a5)
u=[P.f]
a4.du(H.d(["Test of the Material Lighting shader with a textured spot light. ","Use Ctrl plus the mouse to move the light."],u))
a4.ic(H.d(["shapes"],u))
a4.du(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a2)
if(t==null)H.A(P.C("Failed to find an element with the identifier, testCanvas."))
s=E.oC(t,!0,!0,!0,!1)
r=new X.fH()
r.d=r.c=r.b=r.a=512
r.e=!0
r.f=!1
r.x=r.r=1
r.ch=T.ly(a3)
r.cx=new V.ap(0,0,0,1)
r.cy=!0
r.db=2000
r.dx=!0
r.dy=V.lw()
r.saw(0,512)
r.sar(0,512)
q=new V.ap(0,0,0,1)
if(!r.cx.u(0,q)){p=r.cx
r.cx=q
o=new D.E("color",p,q,[V.ap])
o.b=!0
r.a4(o)}o=r.db
if(!(Math.abs(o-2000)<$.L().a)){r.db=2000
o=new D.E("depth",o,2000,[P.p])
o.b=!0
r.a4(o)}o=r.r
if(!(Math.abs(o-1)<$.L().a)){r.r=1
o=new D.E("autoResizeScalarX",o,1,[P.p])
o.b=!0
r.a4(o)}o=r.x
if(!(Math.abs(o-1)<$.L().a)){r.x=1
o=new D.E("autoResizeScalarY",o,1,[P.p])
o.b=!0
r.a4(o)}n=V.lw()
if(!J.P(r.dy,n)){p=r.dy
r.dy=n
o=new D.E("region",p,n,[V.cX])
o.b=!0
r.a4(o)}m=U.hj()
m.h(0,U.bC(V.lu(0,0,-4)))
m.h(0,U.mD(!0,s.r))
o=r.ch
l=s.f.iU("../resources/Test.png")
q=new V.a6(1,1,1)
k=new D.bQ()
k.r=new V.a6(1,1,1)
k.ch=1.0471975511965976
k.cx=1
k.dx=k.cy=1.5707963267948966
k.db=!0
k.dy=1
k.fx=k.fr=0
k.fy=!0
k.a=V.mn()
k.b=V.mJ()
k.c=V.mI()
k.d=V.oM()
p=k.f
k.f=m
m.gt().h(0,k.gb_())
j=new D.E("mover",p,k.f,[U.ad])
j.b=!0
k.X(j)
if(!k.r.u(0,q)){p=k.r
k.r=q
j=new D.E("color",p,q,[V.a6])
j.b=!0
k.X(j)}j=k.x
if(j!==l){if(j!=null)j.gt().L(0,k.gb_())
p=k.x
k.x=l
l.gt().h(0,k.gb_())
l=new D.E("texture",p,k.x,[T.d4])
l.b=!0
k.X(l)}l=k.y
if(l!==o){if(l!=null)l.gt().L(0,k.gb_())
p=k.y
k.y=o
o.gt().h(0,k.gb_())
o=new D.E("shadow",p,k.y,[T.d4])
o.b=!0
k.X(o)}o=k.ch
if(!(Math.abs(o-0.5)<$.L().a)){k.ch=0.5
l=1/(Math.sqrt(2)*Math.tan(k.ch))
k.z=l
k.Q=l*k.cx
o=new D.E("fov",o,k.ch,[P.p])
o.b=!0
k.X(o)}o=k.cx
if(!(Math.abs(o-1)<$.L().a)){k.cx=1
l=k.z
if(typeof l!=="number")return l.C()
k.Q=l
o=new D.E("ratio",o,1,[P.p])
o.b=!0
k.X(o)}o=k.cy
if(!(Math.abs(o-1.5707963267948966)<$.L().a)){k.cy=1.5707963267948966
o=new D.E("cutoff",o,1.5707963267948966,[P.p])
o.b=!0
k.X(o)}o=k.dx
if(!(Math.abs(o-1.5707963267948966)<$.L().a)){k.dx=1.5707963267948966
o=new D.E("coneAngle",o,1.5707963267948966,[P.p])
o.b=!0
k.X(o)}o=$.mK
if(o==null){o=new V.bt(1,0.00390625,0.0000152587890625,0)
$.mK=o
i=o}else i=o
if(!J.P(k.e,i)){p=k.e
k.e=i
o=new D.E("shadowAdjust",p,i,[V.bt])
o.b=!0
k.X(o)}o=k.dy
if(!(Math.abs(o-0)<$.L().a)){k.dy=0
o=new D.E("attenuation0",o,0,[P.p])
o.b=!0
k.X(o)}o=k.fr
if(!(Math.abs(o-0.1)<$.L().a)){k.fr=0.1
o=new D.E("attenuation1",o,0.1,[P.p])
o.b=!0
k.X(o)}o=k.fx
if(!(Math.abs(o-0)<$.L().a)){k.fx=0
o=new D.E("attenuation2",o,0,[P.p])
o.b=!0
k.X(o)}if(k.db){k.db=!1
o=new D.E("enableCutOff",!0,!1,[P.Q])
o.b=!0
k.X(o)}h=O.mf()
h.dx.h(0,k)
o=h.r
o.saU(0,new V.a6(0.1,0.1,0.1))
o=h.x
o.saU(0,new V.a6(0.7,0.7,0.7))
o=h.z
o.saU(0,new V.a6(0.3,0.3,0.3))
o=h.z
o.dj(new A.aq(!0,!1,!1))
o.dk(100)
g=E.ll()
g.sad(0,F.nm())
f=E.ll()
f.saV(U.bC(V.lt(5,5,5,1)))
o=F.lQ(1,a3,a3,1)
o.cf()
f.sad(0,o)
e=U.hj()
e.h(0,U.mD(!1,s.r))
e.h(0,U.bC(V.mg(3.141592653589793)))
e.h(0,U.bC(V.lu(0,0,5)))
d=E.ll()
o=U.hj()
o.h(0,U.bC(V.lt(0.1,0.1,0.1,1)))
o.h(0,m)
d.saV(o)
d.sad(0,F.kL(0,!1,!0,40,1))
o=O.mf()
l=o.f
l.saU(0,new V.a6(1,1,1))
d.saX(o)
c=M.mb()
c.saX(h)
c.e.h(0,g)
c.e.h(0,f)
c.e.h(0,d)
c.b.saV(e)
o=U.hj()
o.h(0,U.bC(V.lt(-1,1,-1,1)))
l=new U.cN()
l.c=V.c8()
l.d=0
l.a=m
m.gt().h(0,l.gaN())
j=new D.E("mover",a3,l.a,[U.ad])
j.b=!0
l.U(j)
o.h(0,l)
b=Math.cos(3.141592653589793)
a=Math.sin(3.141592653589793)
o.h(0,U.bC(V.bb(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1)))
o.h(0,U.bC(V.lu(0,0,2)))
a0=X.mk(0.5,o)
a1=M.mb()
a1.seo(0,r)
o=new O.fZ()
o.b=1
o.c=10
o.f=o.e=o.d=!1
if(!(Math.abs(0)<$.L().a)){l=new D.E("start",1,1,[P.p])
l.b=!0
o.a3(l)}l=o.c
if(!(Math.abs(l-20)<$.L().a)){o.c=20
l=new D.E("stop",l,20,[P.p])
l.b=!0
o.a3(l)}if(!o.f){o.f=!0
l=new D.E("focus",!1,!0,[P.Q])
l.b=!0
o.a3(l)}a1.saX(o)
a1.e.h(0,g)
a1.e.h(0,f)
a1.sdD(a0)
o=M.aI
l=H.d([a1,c],[o])
j=new M.dH()
j.bh(o)
j.e=!0
j.f=!1
j.r=null
j.aZ(j.ghq(),j.ghs())
j.ab(0,l)
o=s.d
if(o!==j){if(o!=null)o.gt().L(0,s.gcI())
s.d=j
j.gt().h(0,s.gcI())
s.cJ()}o=new V.ii("shapes")
u=u.getElementById("shapes")
o.c=u
if(u==null)H.A("Failed to find shapes for RadioGroup")
o.aS(0,"Cube",new V.kZ(g))
o.aS(0,"Cylinder",new V.l_(g))
o.aS(0,"Bar",new V.l0(g))
o.aS(0,"Cone",new V.l1(g))
o.aS(0,"Sphere",new V.l2(g))
o.ds(0,"Toroid",new V.l3(g),!0)
o.aS(0,"Knot",new V.l4(g))
u=s.z
if(u==null)u=s.z=D.W()
o={func:1,ret:-1,args:[D.D]}
l=H.n(new V.l5(a4,h),o)
if(u.b==null)u.saP(H.d([],[o]))
u=u.b;(u&&C.a).h(u,l)
V.q6(s)},
kZ:function kZ(a){this.a=a},
l_:function l_(a){this.a=a},
l0:function l0(a){this.a=a},
l1:function l1(a){this.a=a},
l2:function l2(a){this.a=a},
l3:function l3(a){this.a=a},
l4:function l4(a){this.a=a},
l5:function l5(a,b){this.a=a
this.b=b}},U={
m7:function(){var u=new U.fO()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
bC:function(a){var u=new U.dI()
u.a=a
return u},
hj:function(){var u=new U.cK()
u.bh(U.ad)
u.aZ(u.geX(),u.ghm())
u.e=null
u.f=V.c8()
u.r=0
return u},
mD:function(a,b){var u,t,s,r=new U.eu(),q=U.m7()
q.seB(0,!0)
q.se1(6.283185307179586)
q.se3(0)
q.sa5(0,0)
q.se2(100)
q.sZ(0)
q.sdF(0.5)
r.b=q
u=r.gaN()
q.gt().h(0,u)
q=U.m7()
q.seB(0,!0)
q.se1(6.283185307179586)
q.se3(0)
q.sa5(0,0)
q.se2(100)
q.sZ(0)
q.sdF(0.5)
r.c=q
q.gt().h(0,u)
r.d=null
r.r=r.f=r.e=!1
r.y=r.x=2.5
r.Q=4
r.ch=r.cx=!1
r.db=r.cy=0
r.dx=null
r.dy=0
r.fx=r.fr=null
t=new X.bK(a,!1,!1)
s=r.d
r.d=t
q=new D.E("modifiers",s,t,[X.bK])
q.b=!0
r.U(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.E("invertX",q,!1,[P.Q])
q.b=!0
r.U(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.E("invertY",q,!1,[P.Q])
q.b=!0
r.U(q)}r.io(b)
return r},
fO:function fO(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dI:function dI(){this.b=this.a=null},
cK:function cK(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
cN:function cN(){var _=this
_.d=_.c=_.b=_.a=null},
ad:function ad(){},
eu:function eu(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
mb:function(){var u,t=new M.dO()
t.a=!0
t.sfc(0,O.lj(E.ar))
t.e.aZ(t.gfT(),t.gfV())
t.y=t.x=t.r=t.f=null
u=X.o2(null)
t.sdD(null)
t.seo(0,u)
t.saX(null)
return t},
dH:function dH(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
dO:function dO(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aI:function aI(){}},A={
of:function(a,b){var u=a.b6,t=new A.e1(b,u)
t.cH(b,u)
t.eN(a,b)
return t},
og:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.k(a9,"$ib",[A.aE],"$ab")
H.k(b0,"$ib",[A.aH],"$ab")
H.k(b1,"$ib",[A.aJ],"$ab")
u="MaterialLight_"+a0.gav(a0)+a1.gav(a1)+a2.gav(a2)+a3.gav(a3)+a4.gav(a4)+a5.gav(a5)+a6.gav(a6)+a7.gav(a7)+a8.gav(a8)+"_"
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
f=$.b1()
if(j){t=$.bx()
f=new Z.bU(f.a|t.a)}if(i){t=$.bw()
f=new Z.bU(f.a|t.a)}if(h){t=$.bv()
f=new Z.bU(f.a|t.a)}return new A.hK(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,r,o,k,o,q,g,!0,!1,!1,n,q,l,j,i,!1,!1,h,!1,!1,c,!1,e,u.charCodeAt(0)==0?u:u,f)},
kF:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
kG:function(a,b,c){var u
A.kF(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.lb(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
ph:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.kF(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
pe:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.kG(b,t,"ambient")
b.a+="\n"},
pf:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.kG(b,t,"diffuse")
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
pi:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.kG(b,t,"invDiffuse")
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
po:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.kG(b,t,"specular")
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
pk:function(a,b){var u,t,s
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
pm:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.kF(b,t,"reflect")
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
pn:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.kF(b,t,"refract")
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
pg:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.j(u)
s=A.lb(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ap()
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
pl:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.j(u)
s=A.lb(t)
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
if(typeof u!=="number")return u.ap()
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
pp:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.j(u)
s=A.lb(t)
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
if(typeof u!=="number")return u.ap()
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
pj:function(a,b){var u,t
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
pq:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.ai("")
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
A.ph(a,j)
A.pe(a,j)
A.pf(a,j)
A.pi(a,j)
A.po(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.pm(a,j)
A.pn(a,j)}A.pk(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.pg(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.pl(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.pp(a,q[o],j)
A.pj(a,j)}q=j.a+="// === Main ===\n"
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
j.a+=m+(r[0].toUpperCase()+C.b.ae(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ae(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ae(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
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
pr:function(a,b){var u,t,s
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
pt:function(a,b){var u
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
ps:function(a,b){var u
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
pv:function(a,b){var u,t
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
pw:function(a,b){var u,t
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
pu:function(a,b){var u
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
px:function(a,b){var u
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
lb:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.ae(a,1)},
lA:function(a,b,c,d,e){var u=new A.j7(a,c,e)
u.f=d
u.sia(P.od(d,0,P.m))
return u},
dC:function dC(a,b,c){this.a=a
this.b=b
this.c=c},
fC:function fC(a){this.a=a},
aq:function aq(a,b,c){this.a=a
this.b=b
this.c=c},
dK:function dK(a,b){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
e1:function e1(a,b){var _=this
_.jD=_.jC=_.dK=_.dJ=_.b6=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jQ=_.jP=_.jO=_.ce=_.cd=_.cc=_.cb=_.ca=_.c9=_.jN=_.jM=_.dR=_.jL=_.jK=_.dQ=_.dP=_.jJ=_.jI=_.dO=_.dN=_.jH=_.jG=_.dM=_.jF=_.jE=_.dL=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aE:function aE(a,b){this.a=a
this.b=b},
aH:function aH(a,b){this.a=a
this.b=b},
aJ:function aJ(a,b){this.a=a
this.b=b},
hK:function hK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.b6=b3
_.dJ=b4},
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
cj:function cj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cZ:function cZ(){},
ep:function ep(){},
jc:function jc(a){this.a=a},
aM:function aM(a,b,c){this.a=a
this.c=b
this.d=c},
j9:function j9(a,b,c){this.a=a
this.c=b
this.d=c},
ja:function ja(a,b,c){this.a=a
this.c=b
this.d=c},
jb:function jb(a,b,c){this.a=a
this.c=b
this.d=c},
j7:function j7(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
aa:function aa(a,b,c){this.a=a
this.c=b
this.d=c},
j8:function j8(a,b,c){this.a=a
this.c=b
this.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
d7:function d7(a,b,c){this.a=a
this.c=b
this.d=c},
jd:function jd(a,b,c){this.a=a
this.c=b
this.d=c},
d8:function d8(a,b,c){this.a=a
this.c=b
this.d=c},
at:function at(a,b,c){this.a=a
this.c=b
this.d=c},
ch:function ch(a,b,c){this.a=a
this.c=b
this.d=c},
ci:function ci(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lQ:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.aj,P.p,P.p]})
u=F.lx()
F.dr(u,b,c,d,a,1,0,0,1)
F.dr(u,b,c,d,a,0,1,0,3)
F.dr(u,b,c,d,a,0,0,1,2)
F.dr(u,b,c,d,a,-1,0,0,0)
F.dr(u,b,c,d,a,0,-1,0,0)
F.dr(u,b,c,d,a,0,0,-1,3)
u.aA()
return u},
kA:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dr:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={}
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
e.d=u}h=F.kA(u)
g=F.kA(e.b)
f=F.lW(d,a0,new F.kz(e,F.kA(e.c),F.kA(e.d),g,h,c),b)
if(f!=null)a.b9(f)},
n7:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(d,{func:1,ret:P.p,args:[P.p]})
if(e<3)return
u=F.lx()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.aj])
q=u.a
p=new V.M(0,0,t)
p=p.v(0,Math.sqrt(p.E(p)))
C.a.h(r,q.ii(new V.bd(a,-1,-1,-1),new V.ap(1,1,1,1),new V.a4(0,0,c),new V.M(0,0,t),new V.a9(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.G(k)
j=new V.M(m,l,t).v(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.ev(new V.bd(a,-1,-1,-1),null,new V.ap(i,g,h,1),new V.a4(m*k,l*k,c),new V.M(0,0,t),new V.a9(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.ig(r)
return u},
kL:function(a,b,c,d,e){return F.pL(b,c,1,new F.kM(a,e),d)},
pL:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.p,args:[P.p,P.p]})
if(e<3)return
if(c<1)return
u=F.lW(c,e,new F.kO(d),null)
if(u==null)return
u.aA()
u.bZ()
if(b)u.b9(F.n7(3,!1,1,new F.kP(d),e))
if(a)u.b9(F.n7(1,!0,-1,new F.kQ(d),e))
return u},
q7:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.l9()
t=F.lQ(a,null,new F.la(s,1),b)
t.bZ()
return t},
nm:function(){return F.n6(15,30,0.5,1,new F.lc())},
q_:function(){return F.n6(12,120,0.3,1,new F.kX(3,2))},
n6:function(a,b,c,d,e){var u=F.lW(a,b,new F.kN(H.n(e,{func:1,ret:V.a4,args:[P.p]}),d,b,c),null)
if(u==null)return
u.aA()
u.bZ()
return u},
lW:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.aj,P.p,P.p]})
if(a<1)return
if(b<1)return
u=F.lx()
t=H.d([],[F.aj])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.ev(g,g,new V.ap(p,0,0,1),g,g,new V.a9(r,1),g,g,0)
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
o=F.ev(g,g,new V.ap(j,i,h,1),g,g,new V.a9(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.c6(d))}}u.d.ih(a+1,b+1,t)
return u},
cH:function(a,b,c){var u=new F.a8(),t=a.a
if(t==null)H.A(P.C("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.A(P.C("May not create a face with vertices attached to different shapes."))
u.bX(a)
u.bY(b)
u.hS(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a_()
return u},
o9:function(a,b){var u=new F.br(),t=a.a
if(t==null)H.A(P.C("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.A(P.C("May not create a line with vertices attached to different shapes."))
u.bX(a)
u.bY(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a_()
return u},
lx:function(){var u=new F.eg(),t=new F.ju(u)
t.b=!1
t.sib(H.d([],[F.aj]))
u.a=t
t=new F.ix(u)
t.sbQ(H.d([],[F.bN]))
u.b=t
t=new F.iw(u)
t.sft(H.d([],[F.br]))
u.c=t
t=new F.iv(u)
t.sfm(H.d([],[F.a8]))
u.d=t
u.e=null
return u},
ev:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aj(),r=new F.jC()
r.sbQ(H.d([],[F.bN]))
s.b=r
r=new F.jy()
u=[F.br]
r.sfu(H.d([],u))
r.sfv(H.d([],u))
s.c=r
r=new F.jv()
u=[F.a8]
r.sfn(H.d([],u))
r.sfo(H.d([],u))
r.sfp(H.d([],u))
s.d=r
h=$.nA()
s.e=0
r=$.b1()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bx().a)!==0?e:t
s.x=(u&$.bw().a)!==0?b:t
s.y=(u&$.bZ().a)!==0?f:t
s.z=(u&$.c_().a)!==0?g:t
s.Q=(u&$.nB().a)!==0?c:t
s.ch=(u&$.cx().a)!==0?i:0
s.cx=(u&$.bv().a)!==0?a:t
return s},
kz:function kz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kM:function kM(a,b){this.a=a
this.b=b},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
l9:function l9(){},
la:function la(a,b){this.a=a
this.b=b},
lc:function lc(){},
kX:function kX(a,b){this.a=a
this.b=b},
kN:function kN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ha:function ha(){},
iC:function iC(){},
br:function br(){this.b=this.a=null},
hv:function hv(){},
j6:function j6(){},
bN:function bN(){this.a=null},
eg:function eg(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iv:function iv(a){this.a=a
this.b=null},
iw:function iw(a){this.a=a
this.b=null},
ix:function ix(a){this.a=a
this.b=null},
aj:function aj(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jE:function jE(a){this.a=a},
jD:function jD(a){this.a=a},
ju:function ju(a){this.a=a
this.c=this.b=null},
jv:function jv(){this.d=this.c=this.b=null},
jw:function jw(a,b){this.a=a
this.b=b},
jx:function jx(a,b){this.a=a
this.b=b},
jy:function jy(){this.c=this.b=null},
jA:function jA(){},
jz:function jz(){},
jB:function jB(){},
i7:function i7(){},
jC:function jC(){this.b=null}},T={
ly:function(a){var u=new T.iT()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
d3:function d3(){},
d4:function d4(){},
iT:function iT(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iU:function iU(a){var _=this
_.a=a
_.e=_.d=_.b=null},
iV:function iV(a,b,c,d,e,f,g){var _=this
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
H.lp.prototype={}
J.a.prototype={
u:function(a,b){return a===b},
gI:function(a){return H.cW(a)},
i:function(a){return"Instance of '"+H.ca(a)+"'"}}
J.hq.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iQ:1}
J.dU.prototype={
u:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.dV.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.ic.prototype={}
J.bT.prototype={}
J.bq.prototype={
i:function(a){var u=a[$.no()]
if(u==null)return this.eJ(a)
return"JavaScript function for "+H.j(J.aw(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibF:1}
J.aS.prototype={
h:function(a,b){H.B(b,H.r(a,0))
if(!!a.fixed$length)H.A(P.I("add"))
a.push(b)},
ei:function(a,b){if(!!a.fixed$length)H.A(P.I("removeAt"))
if(b<0||b>=a.length)throw H.c(P.ed(b,null))
return a.splice(b,1)[0]},
L:function(a,b){var u
if(!!a.fixed$length)H.A(P.I("remove"))
for(u=0;u<a.length;++u)if(J.P(a[u],b)){a.splice(u,1)
return!0}return!1},
ab:function(a,b){var u,t
H.k(b,"$ii",[H.r(a,0)],"$ai")
if(!!a.fixed$length)H.A(P.I("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.u)(b),++t)a.push(b[t])},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bm(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.j(a[u]))
return t.join(b)},
iS:function(a){return this.m(a,"")},
iK:function(a,b,c,d){var u,t,s
H.B(b,d)
H.n(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bm(a))}return t},
iJ:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.Q,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.J(b.$1(s)))return s
if(a.length!==u)throw H.c(P.bm(a))}throw H.c(H.hp())},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
eG:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ah(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ah(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.r(a,0)])
return H.d(a.slice(b,c),[H.r(a,0)])},
giI:function(a){if(a.length>0)return a[0]
throw H.c(H.hp())},
gaB:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hp())},
bf:function(a,b,c,d){var u,t,s=H.r(a,0)
H.k(d,"$ii",[s],"$ai")
if(!!a.immutable$list)H.A(P.I("setRange"))
P.bs(b,c,a.length)
u=c-b
if(u===0)return
P.lv(0,"skipCount")
H.k(d,"$ib",[s],"$ab")
s=J.cs(d)
if(u>s.gn(d))throw H.c(H.o5())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
dw:function(a,b){var u,t
H.n(b,{func:1,ret:P.Q,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.J(b.$1(a[t])))return!0
if(a.length!==u)throw H.c(P.bm(a))}return!1},
bB:function(a,b){var u=H.r(a,0)
H.n(b,{func:1,ret:P.m,args:[u,u]})
if(!!a.immutable$list)H.A(P.I("sort"))
H.eh(a,0,a.length-1,b,u)},
R:function(a,b){var u
for(u=0;u<a.length;++u)if(J.P(a[u],b))return!0
return!1},
i:function(a){return P.lm(a,"[","]")},
gS:function(a){return new J.an(a,a.length,[H.r(a,0)])},
gI:function(a){return H.cW(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.A(P.I("set length"))
if(b<0)throw H.c(P.ah(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cq(a,b))
return a[b]},
k:function(a,b,c){H.B(c,H.r(a,0))
if(!!a.immutable$list)H.A(P.I("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cq(a,b))
a[b]=c},
p:function(a,b){var u,t=[H.r(a,0)]
H.k(b,"$ib",t,"$ab")
u=C.e.p(a.length,b.gn(b))
t=H.d([],t)
this.sn(t,u)
this.bf(t,0,a.length,a)
this.bf(t,a.length,u,b)
return t},
$ii:1,
$ib:1}
J.lo.prototype={}
J.an.prototype={
gJ:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.u(s))
u=t.c
if(u>=r){t.scL(null)
return!1}t.scL(s[u]);++t.c
return!0},
scL:function(a){this.d=H.B(a,H.r(this,0))},
$ib7:1}
J.bJ.prototype={
it:function(a,b){var u
H.ng(b)
if(typeof b!=="number")throw H.c(H.av(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbp(b)
if(this.gbp(a)===u)return 0
if(this.gbp(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbp:function(a){return a===0?1/a<0:a<0},
jn:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.I(""+a+".toInt()"))},
cg:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.I(""+a+".floor()"))},
a1:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.I(""+a+".round()"))},
es:function(a,b){var u
if(b>20)throw H.c(P.ah(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbp(a))return"-"+u
return u},
bc:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ah(b,2,36,"radix",null))
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
r-=s.length}return u+C.b.C("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
p:function(a,b){if(typeof b!=="number")throw H.c(H.av(b))
return a+b},
q:function(a,b){if(typeof b!=="number")throw H.c(H.av(b))
return a-b},
C:function(a,b){if(typeof b!=="number")throw H.c(H.av(b))
return a*b},
be:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eM:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dm(a,b)},
aa:function(a,b){return(a|0)===a?a/b|0:this.dm(a,b)},
dm:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.I("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
aR:function(a,b){var u
if(a>0)u=this.dl(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hX:function(a,b){if(b<0)throw H.c(H.av(b))
return this.dl(a,b)},
dl:function(a,b){return b>31?0:a>>>b},
ax:function(a,b){if(typeof b!=="number")throw H.c(H.av(b))
return a>b},
$ip:1,
$iac:1}
J.dT.prototype={$im:1}
J.dS.prototype={}
J.bp.prototype={
Y:function(a,b){if(b<0)throw H.c(H.cq(a,b))
if(b>=a.length)H.A(H.cq(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.c(H.cq(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.lg(b,null,null))
return a+b},
aW:function(a,b,c,d){var u,t
c=P.bs(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ah:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ah(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a6:function(a,b){return this.ah(a,b,0)},
B:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.A(H.av(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.c(P.ed(b,null))
if(b>c)throw H.c(P.ed(b,null))
if(c>a.length)throw H.c(P.ed(c,null))
return a.substring(b,c)},
ae:function(a,b){return this.B(a,b,null)},
jq:function(a){return a.toLowerCase()},
C:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
an:function(a,b){var u=b-a.length
if(u<=0)return a
return this.C(" ",u)+a},
dZ:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ah(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dY:function(a,b){return this.dZ(a,b,0)},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$imj:1,
$if:1}
H.t.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.b.Y(this.a,b)},
$ad9:function(){return[P.m]},
$ax:function(){return[P.m]},
$ai:function(){return[P.m]},
$ab:function(){return[P.m]}}
H.h4.prototype={}
H.c7.prototype={
gS:function(a){var u=this
return new H.cO(u,u.gn(u),[H.am(u,"c7",0)])},
by:function(a,b){return this.eI(0,H.n(b,{func:1,ret:P.Q,args:[H.am(this,"c7",0)]}))}}
H.cO.prototype={
gJ:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.cs(s),q=r.gn(s)
if(t.b!==q)throw H.c(P.bm(s))
u=t.c
if(u>=q){t.sb0(null)
return!1}t.sb0(r.K(s,u));++t.c
return!0},
sb0:function(a){this.d=H.B(a,H.r(this,0))},
$ib7:1}
H.hF.prototype={
gS:function(a){return new H.hG(J.by(this.a),this.b,this.$ti)},
gn:function(a){return J.aD(this.a)},
K:function(a,b){return this.b.$1(J.fy(this.a,b))},
$ai:function(a,b){return[b]}}
H.hG.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.sb0(u.c.$1(t.gJ(t)))
return!0}u.sb0(null)
return!1},
gJ:function(a){return this.a},
sb0:function(a){this.a=H.B(a,H.r(this,1))},
$ab7:function(a,b){return[b]}}
H.hH.prototype={
gn:function(a){return J.aD(this.a)},
K:function(a,b){return this.b.$1(J.fy(this.a,b))},
$ac7:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.db.prototype={
gS:function(a){return new H.jG(J.by(this.a),this.b,this.$ti)}}
H.jG.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(H.J(t.$1(u.gJ(u))))return!0
return!1},
gJ:function(a){var u=this.a
return u.gJ(u)}}
H.c5.prototype={}
H.d9.prototype={
k:function(a,b,c){H.B(c,H.am(this,"d9",0))
throw H.c(P.I("Cannot modify an unmodifiable list"))}}
H.er.prototype={}
H.fQ.prototype={
i:function(a){return P.ls(this)},
k:function(a,b,c){H.B(b,H.r(this,0))
H.B(c,H.r(this,1))
return H.nX()},
$iy:1}
H.fR.prototype={
gn:function(a){return this.a},
bn:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bn(0,b))return
return this.d0(b)},
d0:function(a){return this.b[H.K(a)]},
H:function(a,b){var u,t,s,r,q=this,p=H.r(q,1)
H.n(b,{func:1,ret:-1,args:[H.r(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.B(q.d0(r),p))}}}
H.j3.prototype={
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
H.i8.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hs.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.j(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.j(t.a)+")"
return s+r+"' on '"+u+"' ("+H.j(t.a)+")"}}
H.jg.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ld.prototype={
$1:function(a){if(!!J.U(a).$ibE)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:25}
H.f5.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iay:1}
H.cD.prototype={
i:function(a){return"Closure '"+H.ca(this).trim()+"'"},
$ibF:1,
gjv:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iQ.prototype={}
H.iG.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cw(u)+"'"}}
H.cz.prototype={
u:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cz))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.cW(this.a)
else u=typeof t!=="object"?J.dz(t):H.cW(t)
return(u^H.cW(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.ca(u)+"'")}}
H.j5.prototype={
i:function(a){return this.a}}
H.fM.prototype={
i:function(a){return this.a}}
H.is.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.jH.prototype={
i:function(a){return"Assertion failed: "+P.dP(this.a)}}
H.a3.prototype={
gn:function(a){return this.a},
giR:function(a){return this.a===0},
ga7:function(a){return new H.hx(this,[H.r(this,0)])},
bn:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cX(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cX(t,b)}else return s.iO(b)},
iO:function(a){var u=this,t=u.d
if(t==null)return!1
return u.ck(u.bK(t,u.cj(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bi(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bi(r,b)
s=t==null?null:t.b
return s}else return q.iP(b)},
iP:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bK(r,s.cj(a))
t=s.ck(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.B(b,H.r(s,0))
H.B(c,H.r(s,1))
if(typeof b==="string"){u=s.b
s.cN(u==null?s.b=s.bO():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cN(t==null?s.c=s.bO():t,b,c)}else s.iQ(b,c)},
iQ:function(a,b){var u,t,s,r,q=this
H.B(a,H.r(q,0))
H.B(b,H.r(q,1))
u=q.d
if(u==null)u=q.d=q.bO()
t=q.cj(a)
s=q.bK(u,t)
if(s==null)q.bV(u,t,[q.bP(a,b)])
else{r=q.ck(s,a)
if(r>=0)s[r].b=b
else s.push(q.bP(a,b))}},
H:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.r(s,0),H.r(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bm(s))
u=u.c}},
cN:function(a,b,c){var u,t=this
H.B(b,H.r(t,0))
H.B(c,H.r(t,1))
u=t.bi(a,b)
if(u==null)t.bV(a,b,t.bP(b,c))
else u.b=c},
fD:function(){this.r=this.r+1&67108863},
bP:function(a,b){var u,t=this,s=new H.hw(H.B(a,H.r(t,0)),H.B(b,H.r(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fD()
return s},
cj:function(a){return J.dz(a)&0x3ffffff},
ck:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.P(a[t].a,b))return t
return-1},
i:function(a){return P.ls(this)},
bi:function(a,b){return a[b]},
bK:function(a,b){return a[b]},
bV:function(a,b,c){a[b]=c},
fh:function(a,b){delete a[b]},
cX:function(a,b){return this.bi(a,b)!=null},
bO:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bV(t,u,t)
this.fh(t,u)
return t}}
H.hw.prototype={}
H.hx.prototype={
gn:function(a){return this.a.a},
gS:function(a){var u=this.a,t=new H.hy(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hy.prototype={
gJ:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bm(t))
else{t=u.c
if(t==null){u.scM(null)
return!1}else{u.scM(t.a)
u.c=u.c.c
return!0}}},
scM:function(a){this.d=H.B(a,H.r(this,0))},
$ib7:1}
H.kT.prototype={
$1:function(a){return this.a(a)},
$S:25}
H.kU.prototype={
$2:function(a,b){return this.a(a,b)},
$S:42}
H.kV.prototype={
$1:function(a){return this.a(H.K(a))},
$S:57}
H.hr.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$imj:1,
$iou:1}
H.cS.prototype={$icS:1}
H.bM.prototype={$ibM:1,$ioE:1}
H.e5.prototype={
gn:function(a){return a.length},
$iN:1,
$aN:function(){}}
H.cT.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]},
k:function(a,b,c){H.pN(c)
H.bk(b,a,a.length)
a[b]=c},
$ac5:function(){return[P.p]},
$ax:function(){return[P.p]},
$ii:1,
$ai:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.e6.prototype={
k:function(a,b,c){H.a1(c)
H.bk(b,a,a.length)
a[b]=c},
$ac5:function(){return[P.m]},
$ax:function(){return[P.m]},
$ii:1,
$ai:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]}}
H.i0.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.i1.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.i2.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.i3.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.i4.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.e7.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bk(b,a,a.length)
return a[b]},
$iqw:1}
H.cU.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bk(b,a,a.length)
return a[b]},
$icU:1,
$iS:1}
H.dg.prototype={}
H.dh.prototype={}
H.di.prototype={}
H.dj.prototype={}
P.jJ.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:31}
P.jI.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:35}
P.jK.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jL.prototype={
$0:function(){this.a.$0()},
$S:0}
P.fb.prototype={
f1:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cp(new P.kp(this,b),0),a)
else throw H.c(P.I("`setTimeout()` not found."))},
f2:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cp(new P.ko(this,a,Date.now(),b),0),a)
else throw H.c(P.I("Periodic timer."))},
$ibf:1}
P.kp.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.ko.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.eM(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bj.prototype={
iV:function(a){if(this.c!==6)return!0
return this.b.b.cv(H.n(this.d,{func:1,ret:P.Q,args:[P.R]}),a.a,P.Q,P.R)},
iM:function(a){var u=this.e,t=P.R,s={futureOr:1,type:H.r(this,1)},r=this.b.b
if(H.fu(u,{func:1,args:[P.R,P.ay]}))return H.lR(r.ji(u,a.a,a.b,null,t,P.ay),s)
else return H.lR(r.cv(H.n(u,{func:1,args:[P.R]}),a.a,null,t),s)}}
P.aO.prototype={
er:function(a,b,c){var u,t,s,r=H.r(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a0
if(u!==C.f){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.pz(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aO($.a0,[c])
s=b==null?1:3
this.cO(new P.bj(t,s,a,b,[r,c]))
return t},
jm:function(a,b){return this.er(a,null,b)},
cO:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.h(t.c,"$ibj")
t.c=a}else{if(s===2){u=H.h(t.c,"$iaO")
s=u.a
if(s<4){u.cO(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.kJ(null,null,s,H.n(new P.jU(t,a),{func:1,ret:-1}))}},
de:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.h(p.c,"$ibj")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.h(p.c,"$iaO")
u=q.a
if(u<4){q.de(a)
return}p.a=u
p.c=q.c}o.a=p.bk(a)
u=p.b
u.toString
P.kJ(null,null,u,H.n(new P.jY(o,p),{func:1,ret:-1}))}},
bS:function(){var u=H.h(this.c,"$ibj")
this.c=null
return this.bk(u)},
bk:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cT:function(a){var u,t,s=this,r=H.r(s,0)
H.lR(a,{futureOr:1,type:r})
u=s.$ti
if(H.lN(a,"$icJ",u,"$acJ"))if(H.lN(a,"$iaO",u,null))P.mL(a,s)
else P.oR(a,s)
else{t=s.bS()
H.B(a,r)
s.a=4
s.c=a
P.de(s,t)}},
cU:function(a,b){var u,t=this
H.h(b,"$iay")
u=t.bS()
t.a=8
t.c=new P.ao(a,b)
P.de(t,u)},
$icJ:1}
P.jU.prototype={
$0:function(){P.de(this.a,this.b)},
$S:0}
P.jY.prototype={
$0:function(){P.de(this.b,this.a.a)},
$S:0}
P.jV.prototype={
$1:function(a){var u=this.a
u.a=0
u.cT(a)},
$S:31}
P.jW.prototype={
$2:function(a,b){H.h(b,"$iay")
this.a.cU(a,b)},
$1:function(a){return this.$2(a,null)},
$S:54}
P.jX.prototype={
$0:function(){this.a.cU(this.b,this.c)},
$S:0}
P.k0.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.em(H.n(s.d,{func:1}),null)}catch(r){u=H.ak(r)
t=H.cu(r)
if(o.d){s=H.h(o.a.a.c,"$iao").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.h(o.a.a.c,"$iao")
else q.b=new P.ao(u,t)
q.a=!0
return}if(!!J.U(n).$icJ){if(n instanceof P.aO&&n.a>=4){if(n.a===8){s=o.b
s.b=H.h(n.c,"$iao")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jm(new P.k1(p),null)
s.a=!1}},
$S:3}
P.k1.prototype={
$1:function(a){return this.a},
$S:50}
P.k_.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.r(s,0)
q=H.B(n.c,r)
p=H.r(s,1)
n.a.b=s.b.b.cv(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ak(o)
t=H.cu(o)
s=n.a
s.b=new P.ao(u,t)
s.a=!0}},
$S:3}
P.jZ.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.h(m.a.a.c,"$iao")
r=m.c
if(H.J(r.iV(u))&&r.e!=null){q=m.b
q.b=r.iM(u)
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
P.ey.prototype={}
P.iJ.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aO($.a0,[P.m])
r.a=0
u=H.r(s,0)
t=H.n(new P.iL(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.iM(r,q),{func:1,ret:-1})
W.ab(s.a,s.b,t,!1,u)
return q}}
P.iL.prototype={
$1:function(a){H.B(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.O,args:[H.r(this.b,0)]}}}
P.iM.prototype={
$0:function(){this.b.cT(this.a.a)},
$S:0}
P.d0.prototype={}
P.iK.prototype={}
P.bf.prototype={}
P.ao.prototype={
i:function(a){return H.j(this.a)},
$ibE:1}
P.ky.prototype={$iqL:1}
P.kI.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e9():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:0}
P.k7.prototype={
jj:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.a0){a.$0()
return}P.mX(r,r,this,a,-1)}catch(s){u=H.ak(s)
t=H.cu(s)
P.kH(r,r,this,u,H.h(t,"$iay"))}},
jk:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.f===$.a0){a.$1(b)
return}P.mY(r,r,this,a,b,-1,c)}catch(s){u=H.ak(s)
t=H.cu(s)
P.kH(r,r,this,u,H.h(t,"$iay"))}},
iq:function(a,b){return new P.k9(this,H.n(a,{func:1,ret:b}),b)},
c_:function(a){return new P.k8(this,H.n(a,{func:1,ret:-1}))},
dA:function(a,b){return new P.ka(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
em:function(a,b){H.n(a,{func:1,ret:b})
if($.a0===C.f)return a.$0()
return P.mX(null,null,this,a,b)},
cv:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.a0===C.f)return a.$1(b)
return P.mY(null,null,this,a,b,c,d)},
ji:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.a0===C.f)return a.$2(b,c)
return P.pA(null,null,this,a,b,c,d,e,f)}}
P.k9.prototype={
$0:function(){return this.a.em(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.k8.prototype={
$0:function(){return this.a.jj(this.b)},
$S:3}
P.ka.prototype={
$1:function(a){var u=this.c
return this.a.jk(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.k5.prototype={
gS:function(a){var u=this,t=new P.eN(u,u.r,u.$ti)
t.c=u.e
return t},
gn:function(a){return this.a},
R:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.h(u[b],"$ick")!=null}else{t=this.fd(b)
return t}},
fd:function(a){var u=this.d
if(u==null)return!1
return this.bI(this.d1(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.B(b,H.r(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cQ(u==null?s.b=P.lF():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cQ(t==null?s.c=P.lF():t,b)}else return s.f3(0,b)},
f3:function(a,b){var u,t,s,r=this
H.B(b,H.r(r,0))
u=r.d
if(u==null)u=r.d=P.lF()
t=r.cV(b)
s=u[t]
if(s==null)u[t]=[r.bF(b)]
else{if(r.bI(s,b)>=0)return!1
s.push(r.bF(b))}return!0},
L:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hG(this.c,b)
else return this.hF(0,b)},
hF:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.d1(r,b)
t=s.bI(u,b)
if(t<0)return!1
s.dn(u.splice(t,1)[0])
return!0},
cQ:function(a,b){H.B(b,H.r(this,0))
if(H.h(a[b],"$ick")!=null)return!1
a[b]=this.bF(b)
return!0},
hG:function(a,b){var u
if(a==null)return!1
u=H.h(a[b],"$ick")
if(u==null)return!1
this.dn(u)
delete a[b]
return!0},
cS:function(){this.r=1073741823&this.r+1},
bF:function(a){var u,t=this,s=new P.ck(H.B(a,H.r(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cS()
return s},
dn:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cS()},
cV:function(a){return J.dz(a)&1073741823},
d1:function(a,b){return a[this.cV(b)]},
bI:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.P(a[t].a,b))return t
return-1}}
P.ck.prototype={}
P.eN.prototype={
gJ:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bm(t))
else{t=u.c
if(t==null){u.scR(null)
return!1}else{u.scR(H.B(t.a,H.r(u,0)))
u.c=u.c.b
return!0}}},
scR:function(a){this.d=H.B(a,H.r(this,0))},
$ib7:1}
P.hz.prototype={
$2:function(a,b){this.a.k(0,H.B(a,this.b),H.B(b,this.c))},
$S:6}
P.hA.prototype={$ii:1,$ib:1}
P.x.prototype={
gS:function(a){return new H.cO(a,this.gn(a),[H.bX(this,a,"x",0)])},
K:function(a,b){return this.j(a,b)},
jp:function(a,b){var u,t=this,s=H.d([],[H.bX(t,a,"x",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.k(s,u,t.j(a,u))
return s},
jo:function(a){return this.jp(a,!0)},
p:function(a,b){var u,t=this,s=[H.bX(t,a,"x",0)]
H.k(b,"$ib",s,"$ab")
u=H.d([],s)
C.a.sn(u,C.e.p(t.gn(a),b.gn(b)))
C.a.bf(u,0,t.gn(a),a)
C.a.bf(u,t.gn(a),u.length,b)
return u},
iG:function(a,b,c,d){var u
H.B(d,H.bX(this,a,"x",0))
P.bs(b,c,this.gn(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.lm(a,"[","]")}}
P.hC.prototype={}
P.hD.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.j(a)
t.a=u+": "
t.a+=H.j(b)},
$S:6}
P.af.prototype={
H:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bX(s,a,"af",0),H.bX(s,a,"af",1)]})
for(u=J.by(s.ga7(a));u.A();){t=u.gJ(u)
b.$2(t,s.j(a,t))}},
gn:function(a){return J.aD(this.ga7(a))},
i:function(a){return P.ls(a)},
$iy:1}
P.kq.prototype={
k:function(a,b,c){H.B(b,H.r(this,0))
H.B(c,H.r(this,1))
throw H.c(P.I("Cannot modify unmodifiable map"))}}
P.hE.prototype={
j:function(a,b){return J.dy(this.a,b)},
k:function(a,b,c){J.le(this.a,H.B(b,H.r(this,0)),H.B(c,H.r(this,1)))},
H:function(a,b){J.m_(this.a,H.n(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gn:function(a){return J.aD(this.a)},
i:function(a){return J.aw(this.a)},
$iy:1}
P.es.prototype={}
P.kc.prototype={
ab:function(a,b){var u
for(u=J.by(H.k(b,"$ii",this.$ti,"$ai"));u.A();)this.h(0,u.gJ(u))},
i:function(a){return P.lm(this,"{","}")},
K:function(a,b){var u,t,s,r=this
P.lv(b,"index")
for(u=P.oV(r,r.r,H.r(r,0)),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.c(P.Y(b,r,"index",null,t))},
$ii:1,
$ims:1}
P.eO.prototype={}
P.fh.prototype={}
P.fI.prototype={
iX:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bs(a0,a1,b.length)
u=$.nD()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.D(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kS(C.b.D(b,n))
j=H.kS(C.b.D(b,n+1))
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
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ai("")
g=r.a+=C.b.B(b,s,t)
r.a=g+H.cb(m)
s=n
continue}}throw H.c(P.a7("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.B(b,s,a1)
f=g.length
if(q>=0)P.m3(b,p,a1,q,o,f)
else{e=C.e.be(f-1,4)+1
if(e===1)throw H.c(P.a7(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aW(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.m3(b,p,a1,q,o,d)
else{e=C.e.be(d,4)
if(e===1)throw H.c(P.a7(c,b,a1))
if(e>1)b=C.b.aW(b,a1,a1,e===2?"==":"=")}return b},
$ac3:function(){return[[P.b,P.m],P.f]}}
P.fJ.prototype={
$abD:function(){return[[P.b,P.m],P.f]}}
P.c3.prototype={}
P.bD.prototype={}
P.h6.prototype={
$ac3:function(){return[P.f,[P.b,P.m]]}}
P.hn.prototype={
i:function(a){return this.a}}
P.hm.prototype={
fe:function(a,b,c){var u,t,s,r,q,p,o=null
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
if(r>b)q.a+=C.b.B(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nQ(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abD:function(){return[P.f,P.f]}}
P.jo.prototype={
giF:function(){return C.N}}
P.jq.prototype={
c5:function(a){var u,t,s=P.bs(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kw(u)
if(t.fq(a,0,s)!==s)t.dr(J.nM(a,s-1),0)
return new Uint8Array(u.subarray(0,H.pa(0,t.b,u.length)))},
$abD:function(){return[P.f,[P.b,P.m]]}}
P.kw.prototype={
dr:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fq:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.Y(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.D(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dr(r,C.b.D(a,p)))s=p}else if(r<=2047){q=n.b
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
P.jp.prototype={
c5:function(a){var u,t,s,r,q,p,o,n,m
H.k(a,"$ib",[P.m],"$ab")
u=P.oH(!1,a,0,null)
if(u!=null)return u
t=P.bs(0,null,J.aD(a))
s=P.n_(a,0,t)
if(s>0){r=P.d1(a,0,s)
if(s===t)return r
q=new P.ai(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ai("")
n=new P.kv(!1,q)
n.c=o
n.iu(a,p,t)
if(n.e>0){H.A(P.a7("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.cb(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abD:function(){return[[P.b,P.m],P.f]}}
P.kv.prototype={
iu:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.k(a,"$ib",[P.m],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.cs(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.ap()
if((o&192)!==128){n=P.a7(h+C.e.bc(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.e(C.w,n)
if(u<=C.w[n]){n=P.a7("Overlong encoding of 0x"+C.e.bc(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a7("Character outside valid Unicode range: 0x"+C.e.bc(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.cb(u)
i.c=!1}for(n=p<c;n;){m=P.n_(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.d1(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.P()
if(o<0){j=P.a7("Negative UTF-8 code unit: -0x"+C.e.bc(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a7(h+C.e.bc(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.Q.prototype={}
P.aA.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.aA&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.e.aR(u,30))&1073741823},
i:function(a){var u=this,t=P.nY(H.oq(u)),s=P.dJ(H.oo(u)),r=P.dJ(H.ok(u)),q=P.dJ(H.ol(u)),p=P.dJ(H.on(u)),o=P.dJ(H.op(u)),n=P.nZ(H.om(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.p.prototype={}
P.b6.prototype={
p:function(a,b){return new P.b6(C.e.p(this.a,b.gd_()))},
q:function(a,b){return new P.b6(C.e.q(this.a,b.gd_()))},
ax:function(a,b){return C.e.ax(this.a,b.gd_())},
u:function(a,b){if(b==null)return!1
return b instanceof P.b6&&this.a===b.a},
gI:function(a){return C.e.gI(this.a)},
i:function(a){var u,t,s,r=new P.h3(),q=this.a
if(q<0)return"-"+new P.b6(0-q).i(0)
u=r.$1(C.e.aa(q,6e7)%60)
t=r.$1(C.e.aa(q,1e6)%60)
s=new P.h2().$1(q%1e6)
return""+C.e.aa(q,36e8)+":"+H.j(u)+":"+H.j(t)+"."+H.j(s)}}
P.h2.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:17}
P.h3.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:17}
P.bE.prototype={}
P.fB.prototype={
i:function(a){return"Assertion failed"}}
P.e9.prototype={
i:function(a){return"Throw of null."}}
P.aQ.prototype={
gbH:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbG:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbH()+o+u
if(!q.a)return t
s=q.gbG()
r=P.dP(q.b)
return t+s+": "+r}}
P.cc.prototype={
gbH:function(){return"RangeError"},
gbG:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.j(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.j(s)
else if(t>s)u=": Not in range "+H.j(s)+".."+H.j(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.j(s)}return u}}
P.ho.prototype={
gbH:function(){return"RangeError"},
gbG:function(){var u,t=H.a1(this.b)
if(typeof t!=="number")return t.P()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.j(u)},
gn:function(a){return this.f}}
P.jh.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.je.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ce.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fP.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dP(u)+"."}}
P.ib.prototype={
i:function(a){return"Out of Memory"},
$ibE:1}
P.ei.prototype={
i:function(a){return"Stack Overflow"},
$ibE:1}
P.fW.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eG.prototype={
i:function(a){return"Exception: "+this.a}}
P.hg.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.B(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.D(f,q)
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
return h+l+j+k+"\n"+C.b.C(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.j(g)+")"):h}}
P.bF.prototype={}
P.m.prototype={}
P.i.prototype={
by:function(a,b){var u=H.am(this,"i",0)
return new H.db(this,H.n(b,{func:1,ret:P.Q,args:[u]}),[u])},
gn:function(a){var u,t=this.gS(this)
for(u=0;t.A();)++u
return u},
gaL:function(a){var u,t=this.gS(this)
if(!t.A())throw H.c(H.hp())
u=t.gJ(t)
if(t.A())throw H.c(H.o6())
return u},
K:function(a,b){var u,t,s
P.lv(b,"index")
for(u=this.gS(this),t=0;u.A();){s=u.gJ(u)
if(b===t)return s;++t}throw H.c(P.Y(b,this,"index",null,t))},
i:function(a){return P.o4(this,"(",")")}}
P.b7.prototype={}
P.b.prototype={$ii:1}
P.y.prototype={}
P.O.prototype={
gI:function(a){return P.R.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.ac.prototype={}
P.R.prototype={constructor:P.R,$iR:1,
u:function(a,b){return this===b},
gI:function(a){return H.cW(this)},
i:function(a){return"Instance of '"+H.ca(this)+"'"},
toString:function(){return this.i(this)}}
P.ay.prototype={}
P.f.prototype={$imj:1}
P.ai.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iqk:1}
P.jm.prototype={
$2:function(a,b){var u,t,s,r=P.f
H.k(a,"$iy",[r,r],"$ay")
H.K(b)
u=J.du(b).dY(b,"=")
if(u===-1){if(b!=="")J.le(a,P.lH(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.B(b,0,u)
s=C.b.ae(b,u+1)
r=this.a
J.le(a,P.lH(t,0,t.length,r,!0),P.lH(s,0,s.length,r,!0))}return a},
$S:48}
P.jj.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:47}
P.jk.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:46}
P.jl.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fx(C.b.B(this.b,a,b),null,16)
if(typeof u!=="number")return u.P()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:45}
P.cl.prototype={
gez:function(){return this.b},
gci:function(a){var u=this.c
if(u==null)return""
if(C.b.a6(u,"["))return C.b.B(u,1,u.length-1)
return u},
gbs:function(a){var u=this.d
if(u==null)return P.mP(this.a)
return u},
gcp:function(a){var u=this.f
return u==null?"":u},
gdT:function(){var u=this.r
return u==null?"":u},
ek:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.k(b,"$iy",[P.f,null],"$ay")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a6(p,"/"))p="/"+p
n=P.lG(null,0,0,b)
return new P.cl(u,s,q,r,p,n,m.r)},
gcq:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.f
s.shE(new P.es(P.mC(u==null?"":u),[t,t]))}return s.Q},
gdU:function(){return this.c!=null},
gdX:function(){return this.f!=null},
gdV:function(){return this.r!=null},
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
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.U(b).$ilB)if(s.a==b.gbA())if(s.c!=null===b.gdU())if(s.b==b.gez())if(s.gci(s)==b.gci(b))if(s.gbs(s)==b.gbs(b))if(s.e===b.gee(b)){u=s.f
t=u==null
if(!t===b.gdX()){if(t)u=""
if(u===b.gcp(b)){u=s.r
t=u==null
if(!t===b.gdV()){if(t)u=""
u=u===b.gdT()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
return u==null?this.z=C.b.gI(this.i(0)):u},
shE:function(a){var u=P.f
this.Q=H.k(a,"$iy",[u,u],"$ay")},
$ilB:1,
gbA:function(){return this.a},
gee:function(a){return this.e}}
P.kr.prototype={
$1:function(a){throw H.c(P.a7("Invalid port",this.a,this.b+1))},
$S:44}
P.ks.prototype={
$1:function(a){return P.fi(C.X,a,C.h,!1)},
$S:21}
P.ku.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.j(P.fi(C.n,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.j(P.fi(C.n,b,C.h,!0))}},
$S:22}
P.kt.prototype={
$2:function(a,b){var u,t
H.K(a)
if(b==null||typeof b==="string")this.a.$2(a,H.K(b))
else for(u=J.by(H.ne(b,"$ii")),t=this.a;u.A();)t.$2(a,H.K(u.gJ(u)))},
$S:43}
P.ji.prototype={
gey:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.e(o,0)
u=q.a
o=o[0]+1
t=C.b.dZ(u,"?",o)
s=u.length
if(t>=0){r=P.dq(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jP("data",p,p,p,P.dq(u,o,s,C.A,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.e(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kC.prototype={
$1:function(a){return new Uint8Array(96)},
$S:41}
P.kB.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.nN(u,0,96,b)
return u},
$S:58}
P.kD.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.D(b,s)^96
if(r>=t)return H.e(a,r)
a[r]=c}}}
P.kE.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.D(b,0),t=C.b.D(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.e(a,r)
a[r]=c}}}
P.kf.prototype={
gdU:function(){return this.c>0},
gdW:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.G(t)
t=u+1<t
u=t}else u=!1
return u},
gdX:function(){var u=this.f
if(typeof u!=="number")return u.P()
return u<this.r},
gdV:function(){return this.r<this.a.length},
gd3:function(){return this.b===4&&C.b.a6(this.a,"http")},
gd4:function(){return this.b===5&&C.b.a6(this.a,"https")},
gbA:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gd3())q=t.x="http"
else if(t.gd4()){t.x="https"
q="https"}else if(q===4&&C.b.a6(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a6(t.a,r)){t.x=r
q=r}else{q=C.b.B(t.a,0,q)
t.x=q}return q},
gez:function(){var u=this.c,t=this.b+3
return u>t?C.b.B(this.a,t,u-1):""},
gci:function(a){var u=this.c
return u>0?C.b.B(this.a,u,this.d):""},
gbs:function(a){var u,t=this
if(t.gdW()){u=t.d
if(typeof u!=="number")return u.p()
return P.fx(C.b.B(t.a,u+1,t.e),null,null)}if(t.gd3())return 80
if(t.gd4())return 443
return 0},
gee:function(a){return C.b.B(this.a,this.e,this.f)},
gcp:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.P()
return u<t?C.b.B(this.a,u+1,t):""},
gdT:function(){var u=this.r,t=this.a
return u<t.length?C.b.ae(t,u+1):""},
gcq:function(){var u=this,t=u.f
if(typeof t!=="number")return t.P()
if(t>=u.r)return C.Y
t=P.f
return new P.es(P.mC(u.gcp(u)),[t,t])},
ek:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.k(b,"$iy",[P.f,null],"$ay")
u=k.gbA()
t=u==="file"
s=k.c
r=s>0?C.b.B(k.a,k.b+3,s):""
q=k.gdW()?k.gbs(k):j
s=k.c
if(s>0)p=C.b.B(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.B(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a6(o,"/"))o="/"+o
m=P.lG(j,0,0,b)
n=k.r
l=n<s.length?C.b.ae(s,n+1):j
return new P.cl(u,r,p,q,o,m,l)},
gI:function(a){var u=this.y
return u==null?this.y=C.b.gI(this.a):u},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.U(b).$ilB&&this.a===b.i(0)},
i:function(a){return this.a},
$ilB:1}
P.jP.prototype={}
W.w.prototype={}
W.fz.prototype={
gn:function(a){return a.length}}
W.dA.prototype={
i:function(a){return String(a)},
$idA:1}
W.fA.prototype={
i:function(a){return String(a)}}
W.cy.prototype={$icy:1}
W.c1.prototype={$ic1:1}
W.bz.prototype={$ibz:1}
W.c2.prototype={
cz:function(a,b,c){if(c!=null)return a.getContext(b,P.pI(c))
return a.getContext(b)},
eD:function(a,b){return this.cz(a,b,null)},
$ic2:1}
W.cC.prototype={$icC:1}
W.bA.prototype={
gn:function(a){return a.length}}
W.cE.prototype={$icE:1}
W.fS.prototype={
gn:function(a){return a.length}}
W.X.prototype={$iX:1}
W.cF.prototype={
gn:function(a){return a.length}}
W.fT.prototype={}
W.b4.prototype={}
W.b5.prototype={}
W.fU.prototype={
gn:function(a){return a.length}}
W.fV.prototype={
gn:function(a){return a.length}}
W.fY.prototype={
gn:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.h_.prototype={
i:function(a){return String(a)}}
W.dM.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.k(c,"$ial",[P.ac],"$aal")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[[P.al,P.ac]]},
$ax:function(){return[[P.al,P.ac]]},
$ii:1,
$ai:function(){return[[P.al,P.ac]]},
$ib:1,
$ab:function(){return[[P.al,P.ac]]},
$aH:function(){return[[P.al,P.ac]]}}
W.dN.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gaw(a))+" x "+H.j(this.gar(a))},
u:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$ial)return!1
return a.left===u.gbq(b)&&a.top===u.gbu(b)&&this.gaw(a)===u.gaw(b)&&this.gar(a)===u.gar(b)},
gI:function(a){return W.mN(C.c.gI(a.left),C.c.gI(a.top),C.c.gI(this.gaw(a)),C.c.gI(this.gar(a)))},
gdB:function(a){return a.bottom},
gar:function(a){return a.height},
gbq:function(a){return a.left},
gcu:function(a){return a.right},
gbu:function(a){return a.top},
gaw:function(a){return a.width},
$ial:1,
$aal:function(){return[P.ac]}}
W.h0.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.K(c)
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[P.f]},
$ax:function(){return[P.f]},
$ii:1,
$ai:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aH:function(){return[P.f]}}
W.h1.prototype={
gn:function(a){return a.length}}
W.jN.prototype={
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
gS:function(a){var u=this.jo(this)
return new J.an(u,u.length,[H.r(u,0)])},
$ax:function(){return[W.V]},
$ai:function(){return[W.V]},
$ab:function(){return[W.V]}}
W.V.prototype={
gip:function(a){return new W.jQ(a)},
gc4:function(a){return new W.jN(a,a.children)},
gdE:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.P()
if(s<0)s=-s*0
if(typeof r!=="number")return r.P()
if(r<0)r=-r*0
return new P.al(u,t,s,r,[P.ac])},
i:function(a){return a.localName},
al:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.ma
if(u==null){u=H.d([],[W.aC])
t=new W.e8(u)
C.a.h(u,W.mM(null))
C.a.h(u,W.mO())
$.ma=t
d=t}else d=u
u=$.m9
if(u==null){u=new W.fj(d)
$.m9=u
c=u}else{u.a=d
c=u}}if($.bn==null){u=document
t=u.implementation.createHTMLDocument("")
$.bn=t
$.lk=t.createRange()
t=$.bn.createElement("base")
H.h(t,"$icy")
t.href=u.baseURI
$.bn.head.appendChild(t)}u=$.bn
if(u.body==null){t=u.createElement("body")
u.body=H.h(t,"$ibz")}u=$.bn
if(!!this.$ibz)s=u.body
else{s=u.createElement(a.tagName)
$.bn.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.R(C.V,a.tagName)){$.lk.selectNodeContents(s)
r=$.lk.createContextualFragment(b)}else{s.innerHTML=b
r=$.bn.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bn.body
if(s==null?u!=null:s!==u)J.m1(s)
c.cA(r)
document.adoptNode(r)
return r},
ix:function(a,b,c){return this.al(a,b,c,null)},
eF:function(a,b){a.textContent=null
a.appendChild(this.al(a,b,null,null))},
$iV:1,
gen:function(a){return a.tagName}}
W.h5.prototype={
$1:function(a){return!!J.U(H.h(a,"$iF")).$iV},
$S:26}
W.o.prototype={$io:1}
W.l.prototype={
ie:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.f4(a,b,c,!1)},
f4:function(a,b,c,d){return a.addEventListener(b,H.cp(H.n(c,{func:1,args:[W.o]}),1),!1)},
$il:1}
W.aG.prototype={$iaG:1}
W.cI.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaG")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aG]},
$ax:function(){return[W.aG]},
$ii:1,
$ai:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$icI:1,
$aH:function(){return[W.aG]}}
W.hb.prototype={
gn:function(a){return a.length}}
W.hf.prototype={
gn:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.hl.prototype={
gn:function(a){return a.length}}
W.c6.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iF")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.F]},
$ax:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$ic6:1,
$aH:function(){return[W.F]}}
W.bo.prototype={$ibo:1,
gdG:function(a){return a.data}}
W.cL.prototype={$icL:1}
W.cM.prototype={$icM:1}
W.b8.prototype={$ib8:1}
W.dZ.prototype={
i:function(a){return String(a)},
$idZ:1}
W.hU.prototype={
gn:function(a){return a.length}}
W.cQ.prototype={$icQ:1}
W.hV.prototype={
j:function(a,b){return P.bu(a.get(H.K(b)))},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bu(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.f])
this.H(a,new W.hW(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.I("Not supported"))},
$aaf:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
W.hW.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hX.prototype={
j:function(a,b){return P.bu(a.get(H.K(b)))},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bu(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.f])
this.H(a,new W.hY(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.I("Not supported"))},
$aaf:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
W.hY.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.aT.prototype={$iaT:1}
W.hZ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaT")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aT]},
$ax:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aH:function(){return[W.aT]}}
W.ag.prototype={$iag:1}
W.au.prototype={
gaL:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.mt("No elements"))
if(t>1)throw H.c(P.mt("More than one element"))
return u.firstChild},
ab:function(a,b){var u,t,s,r
H.k(b,"$ii",[W.F],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
k:function(a,b,c){var u,t
H.h(c,"$iF")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
u.replaceChild(c,t[b])},
gS:function(a){var u=this.a.childNodes
return new W.dQ(u,u.length,[H.bX(C.Z,u,"H",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$ax:function(){return[W.F]},
$ai:function(){return[W.F]},
$ab:function(){return[W.F]}}
W.F.prototype={
jd:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
jg:function(a,b){var u,t
try{u=a.parentNode
J.nK(u,b,a)}catch(t){H.ak(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eH(a):u},
il:function(a,b){return a.appendChild(H.h(b,"$iF"))},
hJ:function(a,b,c){return a.replaceChild(b,c)},
$iF:1}
W.cV.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iF")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.F]},
$ax:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$aH:function(){return[W.F]}}
W.aU.prototype={$iaU:1,
gn:function(a){return a.length}}
W.ie.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaU")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aU]},
$ax:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aH:function(){return[W.aU]}}
W.iq.prototype={
j:function(a,b){return P.bu(a.get(H.K(b)))},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bu(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.f])
this.H(a,new W.ir(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.I("Not supported"))},
$aaf:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
W.ir.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.it.prototype={
gn:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.iD.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaV")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aV]},
$ax:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aH:function(){return[W.aV]}}
W.aW.prototype={$iaW:1}
W.iE.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaW")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aW]},
$ax:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aH:function(){return[W.aW]}}
W.aX.prototype={$iaX:1,
gn:function(a){return a.length}}
W.iH.prototype={
j:function(a,b){return a.getItem(H.K(b))},
k:function(a,b,c){a.setItem(b,c)},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga7:function(a){var u=H.d([],[P.f])
this.H(a,new W.iI(u))
return u},
gn:function(a){return a.length},
$aaf:function(){return[P.f,P.f]},
$iy:1,
$ay:function(){return[P.f,P.f]}}
W.iI.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:22}
W.aK.prototype={$iaK:1}
W.be.prototype={$ibe:1}
W.ej.prototype={
al:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bC(a,b,c,d)
u=W.o_("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.au(t).ab(0,new W.au(u))
return t}}
W.iO.prototype={
al:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bC(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.al(u.createElement("table"),b,c,d)
u.toString
u=new W.au(u)
s=u.gaL(u)
s.toString
u=new W.au(s)
r=u.gaL(u)
t.toString
r.toString
new W.au(t).ab(0,new W.au(r))
return t}}
W.iP.prototype={
al:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bC(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.al(u.createElement("table"),b,c,d)
u.toString
u=new W.au(u)
s=u.gaL(u)
t.toString
s.toString
new W.au(t).ab(0,new W.au(s))
return t}}
W.d2.prototype={$id2:1}
W.aY.prototype={$iaY:1}
W.aL.prototype={$iaL:1}
W.iR.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaL")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aL]},
$ax:function(){return[W.aL]},
$ii:1,
$ai:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aH:function(){return[W.aL]}}
W.iS.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaY")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aY]},
$ax:function(){return[W.aY]},
$ii:1,
$ai:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aH:function(){return[W.aY]}}
W.iX.prototype={
gn:function(a){return a.length}}
W.aZ.prototype={$iaZ:1}
W.b_.prototype={$ib_:1}
W.j0.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaZ")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aZ]},
$ax:function(){return[W.aZ]},
$ii:1,
$ai:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aH:function(){return[W.aZ]}}
W.j1.prototype={
gn:function(a){return a.length}}
W.bS.prototype={}
W.jn.prototype={
i:function(a){return String(a)}}
W.jF.prototype={
gn:function(a){return a.length}}
W.bi.prototype={
giA:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.I("deltaY is not supported"))},
giz:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.I("deltaX is not supported"))},
$ibi:1}
W.dc.prototype={
hK:function(a,b){return a.requestAnimationFrame(H.cp(H.n(b,{func:1,ret:-1,args:[P.ac]}),1))},
fk:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.dd.prototype={$idd:1}
W.jO.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iX")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.X]},
$ax:function(){return[W.X]},
$ii:1,
$ai:function(){return[W.X]},
$ib:1,
$ab:function(){return[W.X]},
$aH:function(){return[W.X]}}
W.eB.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
u:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$ial)return!1
return a.left===u.gbq(b)&&a.top===u.gbu(b)&&a.width===u.gaw(b)&&a.height===u.gar(b)},
gI:function(a){return W.mN(C.c.gI(a.left),C.c.gI(a.top),C.c.gI(a.width),C.c.gI(a.height))},
gar:function(a){return a.height},
gaw:function(a){return a.width}}
W.k2.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaR")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aR]},
$ax:function(){return[W.aR]},
$ii:1,
$ai:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aH:function(){return[W.aR]}}
W.eT.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iF")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.F]},
$ax:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$aH:function(){return[W.F]}}
W.kg.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaX")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aX]},
$ax:function(){return[W.aX]},
$ii:1,
$ai:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aH:function(){return[W.aX]}}
W.kk.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaK")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aK]},
$ax:function(){return[W.aK]},
$ii:1,
$ai:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aH:function(){return[W.aK]}}
W.jM.prototype={
H:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.ga7(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga7:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.f])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.e(r,t)
s=H.h(r[t],"$idd")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aaf:function(){return[P.f,P.f]},
$ay:function(){return[P.f,P.f]}}
W.jQ.prototype={
j:function(a,b){return this.a.getAttribute(H.K(b))},
k:function(a,b,c){this.a.setAttribute(b,c)},
gn:function(a){return this.ga7(this).length}}
W.jR.prototype={}
W.lE.prototype={}
W.jS.prototype={}
W.jT.prototype={
$1:function(a){return this.a.$1(H.h(a,"$io"))},
$S:40}
W.bV.prototype={
eS:function(a){var u
if($.df.giR($.df)){for(u=0;u<262;++u)$.df.k(0,C.U[u],W.pT())
for(u=0;u<12;++u)$.df.k(0,C.q[u],W.pU())}},
aT:function(a){return $.nE().R(0,W.cG(a))},
az:function(a,b,c){var u=$.df.j(0,H.j(W.cG(a))+"::"+b)
if(u==null)u=$.df.j(0,"*::"+b)
if(u==null)return!1
return H.lM(u.$4(a,b,c,this))},
$iaC:1}
W.H.prototype={
gS:function(a){return new W.dQ(a,this.gn(a),[H.bX(this,a,"H",0)])}}
W.e8.prototype={
aT:function(a){return C.a.dw(this.a,new W.i6(a))},
az:function(a,b,c){return C.a.dw(this.a,new W.i5(a,b,c))},
$iaC:1}
W.i6.prototype={
$1:function(a){return H.h(a,"$iaC").aT(this.a)},
$S:27}
W.i5.prototype={
$1:function(a){return H.h(a,"$iaC").az(this.a,this.b,this.c)},
$S:27}
W.f0.prototype={
eZ:function(a,b,c,d){var u,t,s
this.a.ab(0,c)
u=b.by(0,new W.kd())
t=b.by(0,new W.ke())
this.b.ab(0,u)
s=this.c
s.ab(0,C.x)
s.ab(0,t)},
aT:function(a){return this.a.R(0,W.cG(a))},
az:function(a,b,c){var u=this,t=W.cG(a),s=u.c
if(s.R(0,H.j(t)+"::"+b))return u.d.ij(c)
else if(s.R(0,"*::"+b))return u.d.ij(c)
else{s=u.b
if(s.R(0,H.j(t)+"::"+b))return!0
else if(s.R(0,"*::"+b))return!0
else if(s.R(0,H.j(t)+"::*"))return!0
else if(s.R(0,"*::*"))return!0}return!1},
$iaC:1}
W.kd.prototype={
$1:function(a){return!C.a.R(C.q,H.K(a))},
$S:28}
W.ke.prototype={
$1:function(a){return C.a.R(C.q,H.K(a))},
$S:28}
W.km.prototype={
az:function(a,b,c){if(this.eL(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.R(0,b)
return!1}}
W.kn.prototype={
$1:function(a){return"TEMPLATE::"+H.j(H.K(a))},
$S:21}
W.kl.prototype={
aT:function(a){var u=J.U(a)
if(!!u.$icY)return!1
u=!!u.$iq
if(u&&W.cG(a)==="foreignObject")return!1
if(u)return!0
return!1},
az:function(a,b,c){if(b==="is"||C.b.a6(b,"on"))return!1
return this.aT(a)},
$iaC:1}
W.dQ.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sd2(J.dy(u.a,t))
u.c=t
return!0}u.sd2(null)
u.c=s
return!1},
gJ:function(a){return this.d},
sd2:function(a){this.d=H.B(a,H.r(this,0))},
$ib7:1}
W.aC.prototype={}
W.kb.prototype={$iqx:1}
W.fj.prototype={
cA:function(a){new W.kx(this).$2(a,null)},
b3:function(a,b){if(b==null)J.m1(a)
else b.removeChild(a)},
hP:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nO(a)
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
p=H.J(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ak(r)}t="element unprintable"
try{t=J.aw(a)}catch(r){H.ak(r)}try{s=W.cG(a)
this.hO(H.h(a,"$iV"),b,p,t,s,H.h(o,"$iy"),H.K(n))}catch(r){if(H.ak(r) instanceof P.aQ)throw r
else{this.b3(a,b)
window
q="Removing corrupted element "+H.j(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hO:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b3(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aT(a)){o.b3(a,b)
window
u="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.az(a,"is",g)){o.b3(a,b)
window
u="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga7(f)
t=H.d(u.slice(0),[H.r(u,0)])
for(s=f.ga7(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.e(t,s)
r=t[s]
q=o.a
p=J.nR(r)
H.K(r)
if(!q.az(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.j(e)+" "+r+'="'+H.j(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.U(a).$id2)o.cA(a.content)},
$iqi:1}
W.kx.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hP(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b3(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ak(s)
r=H.h(u,"$iF")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.h(t,"$iF")}},
$S:39}
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
W.dk.prototype={}
W.dl.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.f6.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.dm.prototype={}
W.dn.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
P.kh.prototype={
dS:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cw:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.U(a)
if(!!u.$iaA)return new Date(a.a)
if(!!u.$iou)throw H.c(P.jf("structured clone of RegExp"))
if(!!u.$iaG)return a
if(!!u.$ic1)return a
if(!!u.$icI)return a
if(!!u.$ibo)return a
if(!!u.$icS||!!u.$ibM||!!u.$icQ)return a
if(!!u.$iy){t=q.dS(a)
s=q.b
if(t>=s.length)return H.e(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.H(a,new P.kj(p,q))
return p.a}if(!!u.$ib){t=q.dS(a)
p=q.b
if(t>=p.length)return H.e(p,t)
r=p[t]
if(r!=null)return r
return q.iw(a,t)}throw H.c(P.jf("structured clone of other type"))},
iw:function(a,b){var u,t=J.cs(a),s=t.gn(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.cw(t.j(a,u)))
return r}}
P.kj.prototype={
$2:function(a,b){this.a.a[a]=this.b.cw(b)},
$S:6}
P.fg.prototype={$ibo:1,
gdG:function(a){return this.a}}
P.kK.prototype={
$2:function(a,b){this.a[a]=b},
$S:6}
P.ki.prototype={}
P.hc.prototype={
gbj:function(){var u=this.b,t=H.am(u,"x",0),s=W.V
return new H.hF(new H.db(u,H.n(new P.hd(),{func:1,ret:P.Q,args:[t]}),[t]),H.n(new P.he(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.h(c,"$iV")
u=this.gbj()
J.nP(u.b.$1(J.fy(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aD(this.gbj().a)},
j:function(a,b){var u=this.gbj()
return u.b.$1(J.fy(u.a,b))},
gS:function(a){var u=P.me(this.gbj(),!1,W.V)
return new J.an(u,u.length,[H.r(u,0)])},
$ax:function(){return[W.V]},
$ai:function(){return[W.V]},
$ab:function(){return[W.V]}}
P.hd.prototype={
$1:function(a){return!!J.U(H.h(a,"$iF")).$iV},
$S:26}
P.he.prototype={
$1:function(a){return H.z(H.h(a,"$iF"),"$iV")},
$S:38}
P.k6.prototype={
gcu:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.G(t)
return H.B(u+t,H.r(this,0))},
gdB:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.G(t)
return H.B(u+t,H.r(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.j(u.a)+", "+H.j(u.b)+") "+H.j(u.c)+" x "+H.j(u.d)},
u:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.U(b)
if(!!u.$ial){t=p.a
if(t==u.gbq(b)){s=p.b
if(s==u.gbu(b)){r=p.c
if(typeof t!=="number")return t.p()
if(typeof r!=="number")return H.G(r)
q=H.r(p,0)
if(H.B(t+r,q)===u.gcu(b)){t=p.d
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.G(t)
u=H.B(s+t,q)===u.gdB(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t=this,s=t.a,r=J.dz(s),q=t.b,p=J.dz(q),o=t.c
if(typeof s!=="number")return s.p()
if(typeof o!=="number")return H.G(o)
u=H.r(t,0)
o=C.e.gI(H.B(s+o,u))
s=t.d
if(typeof q!=="number")return q.p()
if(typeof s!=="number")return H.G(s)
u=C.e.gI(H.B(q+s,u))
return P.oU(P.k4(P.k4(P.k4(P.k4(0,r),p),o),u))}}
P.al.prototype={
gbq:function(a){return this.a},
gbu:function(a){return this.b},
gaw:function(a){return this.c},
gar:function(a){return this.d}}
P.b9.prototype={$ib9:1}
P.hu.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ib9")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ax:function(){return[P.b9]},
$ii:1,
$ai:function(){return[P.b9]},
$ib:1,
$ab:function(){return[P.b9]},
$aH:function(){return[P.b9]}}
P.bc.prototype={$ibc:1}
P.i9.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ibc")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ax:function(){return[P.bc]},
$ii:1,
$ai:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$aH:function(){return[P.bc]}}
P.ih.prototype={
gn:function(a){return a.length}}
P.cY.prototype={$icY:1}
P.iN.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.K(c)
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ax:function(){return[P.f]},
$ii:1,
$ai:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aH:function(){return[P.f]}}
P.q.prototype={
gc4:function(a){return new P.hc(a,new W.au(a))},
al:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aC])
C.a.h(p,W.mM(null))
C.a.h(p,W.mO())
C.a.h(p,new W.kl())
c=new W.fj(new W.e8(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).ix(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.au(s)
q=p.gaL(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$iq:1}
P.bg.prototype={$ibg:1}
P.j2.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ibg")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ax:function(){return[P.bg]},
$ii:1,
$ai:function(){return[P.bg]},
$ib:1,
$ab:function(){return[P.bg]},
$aH:function(){return[P.bg]}}
P.eL.prototype={}
P.eM.prototype={}
P.eW.prototype={}
P.eX.prototype={}
P.f7.prototype={}
P.f8.prototype={}
P.fe.prototype={}
P.ff.prototype={}
P.S.prototype={$ii:1,
$ai:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]},
$ioE:1}
P.fD.prototype={
gn:function(a){return a.length}}
P.fE.prototype={
j:function(a,b){return P.bu(a.get(H.K(b)))},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bu(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.f])
this.H(a,new P.fF(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.I("Not supported"))},
$aaf:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
P.fF.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
P.fG.prototype={
gn:function(a){return a.length}}
P.c0.prototype={}
P.ia.prototype={
gn:function(a){return a.length}}
P.ez.prototype={}
P.dD.prototype={$idD:1}
P.dR.prototype={$idR:1}
P.ec.prototype={$iec:1}
P.ee.prototype={$iee:1}
P.cd.prototype={
ep:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.U(g)
if(!!u.$ibo&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.pJ(g))
return}if(!!u.$icL&&h==null&&t&&!0){this.i1(a,b,c,d,e,f,g)
return}throw H.c(P.dB("Incorrect number or type of arguments"))},
jl:function(a,b,c,d,e,f,g){return this.ep(a,b,c,d,e,f,g,null,null,null)},
i1:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a2:function(a,b,c){return a.uniform1f(b,c)},
bx:function(a,b,c){return a.uniform1i(b,c)},
V:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ev:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
ew:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ex:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$icd:1}
P.ef.prototype={$ief:1}
P.el.prototype={$iel:1}
P.eq.prototype={$ieq:1}
P.iF.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return P.bu(a.item(b))},
k:function(a,b,c){H.h(c,"$iy")
throw H.c(P.I("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ax:function(){return[[P.y,,,]]},
$ii:1,
$ai:function(){return[[P.y,,,]]},
$ib:1,
$ab:function(){return[[P.y,,,]]},
$aH:function(){return[[P.y,,,]]}}
P.f3.prototype={}
P.f4.prototype={}
O.a2.prototype={
bh:function(a){var u=this
u.sfw(H.d([],[a]))
u.sdc(null)
u.sd6(null)
u.sdd(null)},
cB:function(a,b,c){var u=this,t=H.am(u,"a2",0)
H.n(b,{func:1,ret:P.Q,args:[[P.i,t]]})
t={func:1,ret:-1,args:[P.m,[P.i,t]]}
H.n(a,t)
H.n(c,t)
u.sdc(b)
u.sd6(a)
u.sdd(c)},
aZ:function(a,b){return this.cB(a,null,b)},
da:function(a){var u
H.k(a,"$ii",[H.am(this,"a2",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
d5:function(a,b){var u
H.k(b,"$ii",[H.am(this,"a2",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.an(u,u.length,[H.r(u,0)])},
K:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.am(s,"a2",0)
H.B(b,r)
r=[r]
if(H.J(s.da(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.d5(t,H.d([b],r))}},
ab:function(a,b){var u,t,s=this
H.k(b,"$ii",[H.am(s,"a2",0)],"$ai")
if(H.J(s.da(b))){u=s.a
t=u.length
C.a.ab(u,b)
s.d5(t,b)}},
sfw:function(a){this.a=H.k(a,"$ib",[H.am(this,"a2",0)],"$ab")},
sdc:function(a){this.b=H.n(a,{func:1,ret:P.Q,args:[[P.i,H.am(this,"a2",0)]]})},
sd6:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.m,[P.i,H.am(this,"a2",0)]]})},
sdd:function(a){H.n(a,{func:1,ret:-1,args:[P.m,[P.i,H.am(this,"a2",0)]]})},
$ii:1}
O.cP.prototype={
gn:function(a){return this.a.length},
gt:function(){var u=this.b
return u==null?this.b=D.W():u},
aM:function(){var u=this.b
if(u!=null)u.F(null)},
ga0:function(a){var u=this.a
if(u.length>0)return C.a.gaB(u)
else return V.c8()},
eg:function(a){var u=this.a
if(a==null)C.a.h(u,V.c8())
else C.a.h(u,a)
this.aM()},
co:function(){var u=this.a
if(u.length>0){u.pop()
this.aM()}},
sbM:function(a){this.a=H.k(a,"$ib",[V.as],"$ab")}}
E.fK.prototype={}
E.ar.prototype={
cP:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.an(u,u.length,[H.r(u,0)]);u.A();){t=u.d
if(t.f==null)t.cP()}},
sad:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().L(0,s.ge9())
u=s.c
if(u!=null)u.gt().h(0,s.ge9())
t=new D.E("shape",r,s.c,[F.eg])
t.b=!0
s.as(t)}},
saX:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gt().L(0,s.geb())
u=s.f
s.f=a
if(a!=null)a.gt().h(0,s.geb())
s.cP()
t=new D.E("technique",u,s.f,[O.bR])
t.b=!0
s.as(t)}},
saV:function(a){var u,t,s=this
if(!J.P(s.r,a)){u=s.r
if(u!=null)u.gt().L(0,s.ge7())
if(a!=null)a.gt().h(0,s.ge7())
s.r=a
t=new D.E("mover",u,a,[U.ad])
t.b=!0
s.as(t)}},
au:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aD(0,b,s):null
if(!J.P(q,s.x)){u=s.x
s.x=q
t=new D.E("matrix",u,q,[V.as])
t.b=!0
s.as(t)}r=s.f
if(r!=null)r.au(0,b)
for(r=s.y.a,r=new J.an(r,r.length,[H.r(r,0)]);r.A();)r.d.au(0,b)},
at:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga0(s))
else C.a.h(s.a,r.C(0,s.ga0(s)))
s.aM()
a.eh(t.f)
s=a.dy
u=(s&&C.a).gaB(s)
if(u!=null&&t.d!=null)u.ej(a,t)
for(s=t.y.a,s=new J.an(s,s.length,[H.r(s,0)]);s.A();)s.d.at(a)
a.ef()
a.dx.co()},
gt:function(){var u=this.z
return u==null?this.z=D.W():u},
as:function(a){var u=this.z
if(u!=null)u.F(a)},
a_:function(){return this.as(null)},
ea:function(a){H.h(a,"$iD")
this.e=null
this.as(a)},
j3:function(){return this.ea(null)},
ec:function(a){this.as(H.h(a,"$iD"))},
j4:function(){return this.ec(null)},
e8:function(a){this.as(H.h(a,"$iD"))},
j2:function(){return this.e8(null)},
e6:function(a){this.as(H.h(a,"$iD"))},
j_:function(){return this.e6(null)},
iZ:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ii",[E.ar],"$ai")
for(u=b.length,t=this.ge5(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c4()
o.saj(null)
o.saP(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a_()},
j1:function(a,b){var u,t
H.k(b,"$ii",[E.ar],"$ai")
for(u=b.gS(b),t=this.ge5();u.A();)u.gJ(u).gt().L(0,t)
this.a_()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seR:function(a,b){this.y=H.k(b,"$ia2",[E.ar],"$aa2")},
$icR:1}
E.il.prototype={
eO:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aA(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cP()
t=[V.as]
u.sbM(H.d([],t))
u.b=null
u.gt().h(0,new E.im(s))
s.cy=u
u=new O.cP()
u.sbM(H.d([],t))
u.b=null
u.gt().h(0,new E.io(s))
s.db=u
u=new O.cP()
u.sbM(H.d([],t))
u.b=null
u.gt().h(0,new E.ip(s))
s.dx=u
s.si0(H.d([],[O.bR]))
u=s.dy;(u&&C.a).h(u,null)
s.shW(new H.a3([P.f,A.cZ]))},
gjc:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga0(s)
u=t.db
u=t.z=s.C(0,u.ga0(u))
s=u}return s},
geA:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.ga0(s)
u=t.dx
u=t.cx=s.C(0,u.ga0(u))
s=u}return s},
eh:function(a){var u=this.dy,t=a==null?(u&&C.a).gaB(u):a;(u&&C.a).h(u,t)},
ef:function(){var u=this.dy
if(u.length>1)u.pop()},
dv:function(a){var u=a.b
if(u.length===0)throw H.c(P.C("May not cache a shader with no name."))
if(this.fr.bn(0,u))throw H.c(P.C('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)},
si0:function(a){this.dy=H.k(a,"$ib",[O.bR],"$ab")},
shW:function(a){this.fr=H.k(a,"$iy",[P.f,A.cZ],"$ay")}}
E.im.prototype={
$1:function(a){var u
H.h(a,"$iD")
u=this.a
u.ch=u.z=null},
$S:8}
E.io.prototype={
$1:function(a){var u
H.h(a,"$iD")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:8}
E.ip.prototype={
$1:function(a){var u
H.h(a,"$iD")
u=this.a
u.cx=u.ch=null},
$S:8}
E.em.prototype={
cK:function(a){H.h(a,"$iD")
this.el()},
cJ:function(){return this.cK(null)},
giL:function(){var u,t=this,s=Date.now(),r=C.e.aa(P.m8(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aA(s,!1)
return u/r},
dg:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.C()
if(typeof r!=="number")return H.G(r)
u=C.c.cg(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.C()
t=C.c.cg(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.mw(C.o,s.gjh())}},
el:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iW(this),{func:1,ret:-1,args:[P.ac]})
C.E.fk(u)
C.E.hK(u,W.n2(t,P.ac))}},
jf:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dg()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aA(r,!1)
s.y=P.m8(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aM()
r=s.db
C.a.sn(r.a,0)
r.aM()
r=s.dx
C.a.sn(r.a,0)
r.aM()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.at(p.e)}s=p.z
if(s!=null)s.F(null)}catch(q){u=H.ak(q)
t=H.cu(q)
P.lU("Error: "+H.j(u))
P.lU("Stack: "+H.j(t))
throw H.c(u)}}}
E.iW.prototype={
$1:function(a){var u
H.ng(a)
u=this.a
if(u.ch){u.ch=!1
u.jf()}},
$S:37}
Z.ew.prototype={$iqc:1}
Z.dE.prototype={
ak:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ak(s)
t=P.C('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.j(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.j(u.e)+"]"}}
Z.ex.prototype={$iqd:1}
Z.cB.prototype={
aI:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
ak:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].ak(a)},
bd:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
at:function(a){var u,t,s,r,q,p=this.b.length
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
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aw(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sfs:function(a){this.b=H.k(a,"$ib",[Z.bG],"$ab")},
$iql:1}
Z.bG.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.ca(this.c)+"'")+"]"}}
Z.bU.prototype={
gcD:function(a){var u=this.a,t=(u&$.b1().a)!==0?3:0
if((u&$.bx().a)!==0)t+=3
if((u&$.bw().a)!==0)t+=3
if((u&$.bZ().a)!==0)t+=2
if((u&$.c_().a)!==0)t+=3
if((u&$.dw().a)!==0)t+=3
if((u&$.dx().a)!==0)t+=4
if((u&$.cx().a)!==0)++t
return(u&$.bv().a)!==0?t+4:t},
im:function(a){var u,t=$.b1(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bx()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bZ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c_()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dx()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cx()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bv()
if((s&t.a)!==0)if(u===a)return t
return $.nC()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bU))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.f]),t=this.a
if((t&$.b1().a)!==0)C.a.h(u,"Pos")
if((t&$.bx().a)!==0)C.a.h(u,"Norm")
if((t&$.bw().a)!==0)C.a.h(u,"Binm")
if((t&$.bZ().a)!==0)C.a.h(u,"Txt2D")
if((t&$.c_().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dw().a)!==0)C.a.h(u,"Clr3")
if((t&$.dx().a)!==0)C.a.h(u,"Clr4")
if((t&$.cx().a)!==0)C.a.h(u,"Weight")
if((t&$.bv().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fN.prototype={}
D.c4.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.D]}
H.n(b,u)
if(this.a==null)this.saj(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
L:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.D]})
u=s.a
u=u==null?null:C.a.R(u,b)
if(u===!0){u=s.a
t=(u&&C.a).L(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.R(u,b)
if(u===!0){u=s.b
t=(u&&C.a).L(u,b)||t}return t},
F:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.H(P.me(u,!0,{func:1,ret:-1,args:[D.D]}),new D.h8(q))
u=r.b
if(u!=null){r.saP(H.d([],[{func:1,ret:-1,args:[D.D]}]))
C.a.H(u,new D.h9(q))}return!0},
dI:function(){return this.F(null)},
ao:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.F(u)}}},
saj:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.D]}],"$ab")},
saP:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.D]}],"$ab")}}
D.h8.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.D]})
u=this.a.a
u.b
a.$1(u)},
$S:33}
D.h9.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.D]})
u=this.a.a
u.b
a.$1(u)},
$S:33}
D.D.prototype={}
D.bH.prototype={}
D.bI.prototype={}
D.E.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.dF.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dF))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.dW.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dW))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.ht.prototype={
j9:function(a){this.d.h(0,a.a)
return!1},
j5:function(a){this.d.L(0,a.a)
return!1},
shD:function(a){this.d=H.k(a,"$ims",[P.m],"$ams")}}
X.e_.prototype={}
X.hB.prototype={
b1:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.C()
u=b.b
t=q.ch
if(typeof u!=="number")return u.C()
s=new V.a9(o.a+n*m,o.b+u*t)
t=q.a.gbm()
r=new X.bL(a,V.bO(),q.x,t,s)
r.b=!0
q.z=new P.aA(p,!1)
q.x=s
return r},
cn:function(a,b){this.r=a.a
return!1},
bb:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eE()
if(typeof u!=="number")return u.ap()
this.r=(u&~t)>>>0
return!1},
ba:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.b1(a,b))
return!0},
ja:function(a){return!1},
h9:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.e_(c,r.a.gbm(),b)
s.b=!0
t.F(s)
r.y=new P.aA(u,!1)
r.x=V.bO()}}
X.bK.prototype={
u:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bK))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.J(this.b)?"Alt+":""
return u+(H.J(this.c)?"Shift+":"")}}
X.bL.prototype={}
X.i_.prototype={
bJ:function(a,b,c){var u=this,t=new P.aA(Date.now(),!1),s=u.a.gbm(),r=new X.bL(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cn:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.F(this.bJ(a,b,!0))
return!0},
bb:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eE()
if(typeof t!=="number")return t.ap()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.F(u.bJ(a,b,!0))
return!0},
ba:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.bJ(a,b,!1))
return!0},
jb:function(a,b){return!1}}
X.ig.prototype={}
X.eo.prototype={}
X.j_.prototype={
b1:function(a,b){var u,t,s,r,q=this
H.k(a,"$ib",[V.a9],"$ab")
u=new P.aA(Date.now(),!1)
t=a.length>0?a[0]:V.bO()
s=q.a.gbm()
r=new X.eo(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
j8:function(a){var u
H.k(a,"$ib",[V.a9],"$ab")
u=this.b
if(u==null)return!1
u.F(this.b1(a,!0))
return!0},
j6:function(a){var u
H.k(a,"$ib",[V.a9],"$ab")
u=this.c
if(u==null)return!1
u.F(this.b1(a,!0))
return!0},
j7:function(a){var u
H.k(a,"$ib",[V.a9],"$ab")
u=this.d
if(u==null)return!1
u.F(this.b1(a,!1))
return!0}}
X.et.prototype={
gbm:function(){var u=this.a,t=C.i.gdE(u).c
t.toString
u=C.i.gdE(u).d
u.toString
return V.mq(0,0,t,u)},
cY:function(a){var u=a.keyCode,t=H.J(a.ctrlKey)||H.J(a.metaKey)
return new X.dW(u,new X.bK(t,a.altKey,a.shiftKey))},
aQ:function(a){if(!H.J(a.ctrlKey))H.J(a.metaKey)
a.shiftKey},
bW:function(a){if(!H.J(a.ctrlKey))H.J(a.metaKey)
a.shiftKey},
aG:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.q()
u=t.top
if(typeof r!=="number")return r.q()
return new V.a9(s-q,r-u)},
b2:function(a){return new V.a5(a.movementX,a.movementY)},
bR:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.a9])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=C.c.a1(r.pageX)
C.c.a1(r.pageY)
p=o.left
C.c.a1(r.pageX)
C.a.h(n,new V.a9(q-p,C.c.a1(r.pageY)-o.top))}return n},
aE:function(a){var u=a.buttons,t=H.J(a.ctrlKey)||H.J(a.metaKey)
return new X.dF(u,new X.bK(t,a.altKey,a.shiftKey))},
bN:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.q()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.q()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
h3:function(a){this.f=!0},
fR:function(a){this.f=!1},
fY:function(a){H.h(a,"$iag")
if(H.J(this.f)&&this.bN(a))a.preventDefault()},
h7:function(a){var u
H.h(a,"$ib8")
if(!H.J(this.f))return
u=this.cY(a)
this.b.j9(u)},
h5:function(a){var u
H.h(a,"$ib8")
if(!H.J(this.f))return
u=this.cY(a)
this.b.j5(u)},
hb:function(a){var u,t,s,r,q=this
H.h(a,"$iag")
u=q.a
u.focus()
q.f=!0
q.aQ(a)
if(H.J(q.x)){t=q.aE(a)
s=q.b2(a)
if(q.d.cn(t,s))a.preventDefault()
return}if(H.J(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aE(a)
r=q.aG(a)
if(q.c.cn(t,r))a.preventDefault()},
hf:function(a){var u,t,s,r=this
H.h(a,"$iag")
r.aQ(a)
u=r.aE(a)
if(H.J(r.x)){t=r.b2(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(H.J(r.r))return
s=r.aG(a)
if(r.c.bb(u,s))a.preventDefault()},
h1:function(a){var u,t,s,r=this
H.h(a,"$iag")
if(!r.bN(a)){r.aQ(a)
u=r.aE(a)
if(H.J(r.x)){t=r.b2(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(H.J(r.r))return
s=r.aG(a)
if(r.c.bb(u,s))a.preventDefault()}},
hd:function(a){var u,t,s,r=this
H.h(a,"$iag")
r.aQ(a)
u=r.aE(a)
if(H.J(r.x)){t=r.b2(a)
if(r.d.ba(u,t))a.preventDefault()
return}if(H.J(r.r))return
s=r.aG(a)
if(r.c.ba(u,s))a.preventDefault()},
h_:function(a){var u,t,s,r=this
H.h(a,"$iag")
if(!r.bN(a)){r.aQ(a)
u=r.aE(a)
if(H.J(r.x)){t=r.b2(a)
if(r.d.ba(u,t))a.preventDefault()
return}if(H.J(r.r))return
s=r.aG(a)
if(r.c.ba(u,s))a.preventDefault()}},
hh:function(a){var u,t,s=this
H.h(a,"$ibi")
s.aQ(a)
u=new V.a5((a&&C.D).giz(a),C.D.giA(a)).v(0,180)
if(H.J(s.x)){if(s.d.ja(u))a.preventDefault()
return}if(H.J(s.r))return
t=s.aG(a)
if(s.c.jb(u,t))a.preventDefault()},
hj:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aE(s.y)
t=s.aG(s.y)
s.d.h9(u,t,r)}},
hz:function(a){var u,t=this
H.h(a,"$ib_")
t.a.focus()
t.f=!0
t.bW(a)
u=t.bR(a)
if(t.e.j8(u))a.preventDefault()},
hv:function(a){var u
H.h(a,"$ib_")
this.bW(a)
u=this.bR(a)
if(this.e.j6(u))a.preventDefault()},
hx:function(a){var u
H.h(a,"$ib_")
this.bW(a)
u=this.bR(a)
if(this.e.j7(u))a.preventDefault()},
sfl:function(a){this.z=H.k(a,"$ib",[[P.d0,P.R]],"$ab")}}
D.dL.prototype={$iae:1,$icR:1}
D.ae.prototype={$icR:1}
D.dX.prototype={
gt:function(){var u=this.x
return u==null?this.x=D.W():u},
X:function(a){var u=this.x
if(u!=null)u.F(a)},
d9:function(a){var u
H.h(a,"$iD")
u=this.y
if(u!=null)u.F(a)},
h8:function(){return this.d9(null)},
hl:function(a){var u,t,s
H.k(a,"$ii",[D.ae],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(s==null||this.eT(s))return!1}return!0},
fL:function(a,b){var u,t,s,r,q,p,o,n=D.ae
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gd8(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=H.h(b[q],"$iae")
if(p instanceof D.bQ)C.a.h(this.r,p)
o=p.go
if(o==null){o=new D.c4()
o.saj(null)
o.saP(null)
o.c=null
o.d=0
p.go=o}H.n(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bH([n])
n.b=!0
this.X(n)},
hp:function(a,b){var u,t,s,r=D.ae
H.k(b,"$ii",[r],"$ai")
for(u=b.gS(b),t=this.gd8();u.A();){s=u.gJ(u)
C.a.L(this.e,s)
s.gt().L(0,t)}r=new D.bI([r])
r.b=!0
this.X(r)},
eT:function(a){var u=C.a.R(this.r,a)
return u},
seU:function(a){this.e=H.k(a,"$ib",[D.dL],"$ab")},
shA:function(a){this.f=H.k(a,"$ib",[D.eb],"$ab")},
seW:function(a){this.r=H.k(a,"$ib",[D.bQ],"$ab")},
$ai:function(){return[D.ae]},
$aa2:function(){return[D.ae]}}
D.eb.prototype={$iae:1,$icR:1}
D.bQ.prototype={
gt:function(){var u=this.go
return u==null?this.go=D.W():u},
X:function(a){var u
H.h(a,"$iD")
u=this.go
if(u!=null)u.F(a)},
eV:function(){return this.X(null)},
gaq:function(){var u=this.x!=null?1:0,t=this.y!=null?2:0,s=this.db?8:0
return u+t+4+s},
$iae:1,
$icR:1}
V.a6.prototype={
p:function(a,b){var u=C.c.p(this.a,b.gcr()),t=C.c.p(this.b,b.gbz()),s=C.c.p(this.c,b.gc0())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a6(u,t,s)},
q:function(a,b){var u=C.c.q(this.a,b.gcr()),t=C.c.q(this.b,b.gbz()),s=C.c.q(this.c,b.gc0())
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
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
V.ap.prototype={
p:function(a,b){var u=this,t=C.c.p(u.a,b.gcr()),s=C.c.p(u.b,b.gbz()),r=C.c.p(u.c,b.gc0()),q=C.c.p(u.d,b.gik(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.ap(t,s,r,q)},
q:function(a,b){var u=this,t=C.c.q(u.a,b.gcr()),s=C.c.q(u.b,b.gbz()),r=C.c.q(u.c,b.gc0()),q=C.c.q(u.d,b.gik(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.ap(t,s,r,q)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ap))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.T(u.a,3,0)+", "+V.T(u.b,3,0)+", "+V.T(u.c,3,0)+", "+V.T(u.d,3,0)+"]"}}
V.h7.prototype={}
V.e4.prototype={
ac:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.p])
return t},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e4))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.p],o=V.cr(H.d([q.a,q.d,q.r],p),3,0),n=V.cr(H.d([q.b,q.e,q.x],p),3,0),m=V.cr(H.d([q.c,q.f,q.y],p),3,0)
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
V.as.prototype={
ac:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.p])
return t},
cl:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.L().a)return V.c8()
u=1/b1
t=-n
s=-a0
return V.bb((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
C:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.bb(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bw:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.M(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bv:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a4(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.as))return!1
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
G:function(a){var u,t,s,r,q,p=this,o=[P.p],n=V.cr(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.cr(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.cr(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.cr(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
N:function(){return this.G("")}}
V.a9.prototype={
p:function(a,b){return new V.a9(this.a+b.a,this.b+b.b)},
q:function(a,b){return new V.a9(this.a-b.a,this.b-b.b)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+"]"}}
V.a4.prototype={
p:function(a,b){return new V.a4(this.a+b.a,this.b+b.b,this.c+b.c)},
q:function(a,b){return new V.a4(this.a-b.a,this.b-b.b,this.c-b.c)},
C:function(a,b){return new V.a4(this.a*b,this.b*b,this.c*b)},
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
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
V.bd.prototype={
p:function(a,b){var u=this
return new V.bd(C.c.p(u.a,b.gjs(b)),C.c.p(u.b,b.gjt(b)),C.c.p(u.c,b.gju(b)),C.c.p(u.d,b.gjr(b)))},
q:function(a,b){var u=this
return new V.bd(C.c.q(u.a,b.gjs(b)),C.c.q(u.b,b.gjt(b)),C.c.q(u.c,b.gju(b)),C.c.q(u.d,b.gjr(b)))},
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
return"["+V.T(u.a,3,0)+", "+V.T(u.b,3,0)+", "+V.T(u.c,3,0)+", "+V.T(u.d,3,0)+"]"}}
V.cX.prototype={
gaC:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cX))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.T(u.a,3,0)+", "+V.T(u.b,3,0)+", "+V.T(u.c,3,0)+", "+V.T(u.d,3,0)+"]"}}
V.a5.prototype={
b7:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.C()
if(typeof r!=="number")return H.G(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.G(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a,s=b.gc7(b)
if(typeof t!=="number")return t.p()
s=C.c.p(t,s)
t=this.b
u=b.gc8(b)
if(typeof t!=="number")return t.p()
return new V.a5(s,C.c.p(t,u))},
q:function(a,b){var u,t=this.a,s=b.gc7(b)
if(typeof t!=="number")return t.q()
s=C.c.q(t,s)
t=this.b
u=b.gc8(b)
if(typeof t!=="number")return t.q()
return new V.a5(s,C.c.q(t,u))},
C:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.C()
u=this.b
if(typeof u!=="number")return u.C()
return new V.a5(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.L().a){u=$.mE
return u==null?$.mE=new V.a5(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.a5(u/b,t/b)},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
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
V.M.prototype={
b7:function(a){return Math.sqrt(this.E(this))},
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cm:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.M(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aH:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.M(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.M(this.a+b.a,this.b+b.b,this.c+b.c)},
q:function(a,b){return new V.M(this.a-b.a,this.b-b.b,this.c-b.c)},
T:function(a){return new V.M(-this.a,-this.b,-this.c)},
C:function(a,b){return new V.M(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if(Math.abs(b-0)<$.L().a)return V.da()
return new V.M(this.a/b,this.b/b,this.c/b)},
e0:function(){var u=$.L().a
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
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
V.bt.prototype={
b7:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u=this
return new V.bt(C.e.p(u.a,b.gc7(b)),C.c.p(u.b,b.gc8(b)),C.c.p(u.c,b.giD()),C.e.p(u.d,b.giC()))},
q:function(a,b){var u=this
return new V.bt(C.e.q(u.a,b.gc7(b)),C.c.q(u.b,b.gc8(b)),C.c.q(u.c,b.giD()),C.e.q(u.d,b.giC()))},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bt))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.T(u.a,3,0)+", "+V.T(u.b,3,0)+", "+V.T(u.c,3,0)+", "+V.T(u.d,3,0)+"]"}}
U.fO.prototype={
bE:function(a){var u=V.qb(a,this.c,this.b)
return u},
gt:function(){var u=this.y
return u==null?this.y=D.W():u},
U:function(a){var u=this.y
if(u!=null)u.F(a)},
seB:function(a,b){},
se1:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.L().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bE(u)}s=new D.E("maximumLocation",s,t.b,[P.p])
s.b=!0
t.U(s)}},
se3:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.L().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bE(u)}s=new D.E("minimumLocation",s,t.c,[P.p])
s.b=!0
t.U(s)}},
sa5:function(a,b){var u,t=this
b=t.bE(b)
u=t.d
if(!(Math.abs(u-b)<$.L().a)){t.d=b
u=new D.E("location",u,b,[P.p])
u.b=!0
t.U(u)}},
se2:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.L().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.E("maximumVelocity",r,a,[P.p])
r.b=!0
s.U(r)}},
sZ:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.L().a)){u.f=a
t=new D.E("velocity",t,a,[P.p])
t.b=!0
u.U(t)}},
sdF:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.L().a)){this.x=a
u=new D.E("dampening",u,a,[P.p])
u.b=!0
this.U(u)}},
au:function(a,b){var u,t,s,r=this,q=r.f,p=$.L().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa5(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.L().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sZ(u)}}}
U.dI.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.W():u},
aD:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dI))return!1
return J.P(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cK.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.W():u},
U:function(a){var u
H.h(a,"$iD")
u=this.e
if(u!=null)u.F(a)},
ai:function(){return this.U(null)},
eY:function(a,b){var u,t,s,r,q,p,o,n=U.ad
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gaN(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gt()
o.toString
H.n(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bH([n])
n.b=!0
this.U(n)},
hn:function(a,b){var u,t,s=U.ad
H.k(b,"$ii",[s],"$ai")
for(u=b.gS(b),t=this.gaN();u.A();)u.gJ(u).gt().L(0,t)
s=new D.bI([s])
s.b=!0
this.U(s)},
aD:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.P()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.an(r,r.length,[H.r(r,0)]),u=null;r.A();){q=r.d
if(q!=null){t=q.aD(0,b,c)
if(t!=null)u=u==null?t:t.C(0,u)}}s.f=u==null?V.c8():u
r=s.e
if(r!=null)r.ao(0)}return s.f},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cK))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.P(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ad]},
$aa2:function(){return[U.ad]},
$iad:1}
U.cN.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.W():u},
U:function(a){var u
H.h(a,"$iD")
u=this.b
if(u!=null)u.F(a)},
ai:function(){return this.U(null)},
aD:function(a,b,c){var u,t=this,s=t.d,r=b.e
if(s<r){t.d=r
s=t.b
if(s!=null)++s.d
s=t.a
s=s==null?null:s.aD(0,b,c)
u=s==null?null:s.cl(0)
t.c=u==null?V.c8():u
s=t.b
if(s!=null)s.ao(0)}return t.c},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cN))return!1
if(!J.P(this.a,b.a))return!1
return!0},
i:function(a){return"Invert"},
$iad:1}
U.ad.prototype={}
U.eu.prototype={
gt:function(){var u=this.fx
return u==null?this.fx=D.W():u},
U:function(a){var u
H.h(a,"$iD")
u=this.fx
if(u!=null)u.F(a)},
ai:function(){return this.U(null)},
io:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.W():t
u.h(0,s.gfE())
u=s.a.c
t=u.d
u=t==null?u.d=D.W():t
u.h(0,s.gfG())
u=s.a.c
t=u.c
u=t==null?u.c=D.W():t
u.h(0,s.gfI())
u=s.a.d
t=u.f
u=t==null?u.f=D.W():t
u.h(0,s.gfz())
u=s.a.d
t=u.d
u=t==null?u.d=D.W():t
u.h(0,s.gfB())
u=s.a.e
t=u.b
u=t==null?u.b=D.W():t
u.h(0,s.gi7())
u=s.a.e
t=u.d
u=t==null?u.d=D.W():t
u.h(0,s.gi5())
u=s.a.e
t=u.c
u=t==null?u.c=D.W():t
u.h(0,s.gi3())
return!0},
ay:function(a){var u=a.a,t=a.b
if(H.J(this.f)){if(typeof u!=="number")return u.T()
u=-u}if(H.J(this.r)){if(typeof t!=="number")return t.T()
t=-t}return new V.a5(u,t)},
fF:function(a){var u=this
a=H.z(H.h(a,"$iD"),"$ibL")
if(!J.P(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fH:function(a){var u,t,s,r,q,p,o,n=this
a=H.z(H.h(a,"$iD"),"$ibL")
if(!H.J(n.cx))return
if(H.J(n.ch)){u=a.d.q(0,a.y)
u=new V.a5(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
n.ch=!1}if(H.J(n.e)){u=a.c
t=a.d.q(0,a.y)
u=n.ay(new V.a5(t.a,t.b).C(0,2).v(0,u.gaC()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.G(s)
t.sZ(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.G(t)
s.sZ(-u*10*t)}else{u=a.c
t=a.d
s=t.q(0,a.y)
r=n.ay(new V.a5(s.a,s.b).C(0,2).v(0,u.gaC()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.G(p)
o=n.cy
if(typeof o!=="number")return H.G(o)
s.sa5(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.G(q)
s=n.db
if(typeof s!=="number")return H.G(s)
o.sa5(0,-p*q+s)
n.b.sZ(0)
n.c.sZ(0)
t=t.q(0,a.z)
n.dx=n.ay(new V.a5(t.a,t.b).C(0,2).v(0,u.gaC()))}n.ai()},
fJ:function(a){var u,t,s,r=this
H.h(a,"$iD")
if(!H.J(r.cx))return
r.cx=!1
if(H.J(r.ch))return
u=r.dx
if(u.E(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.G(s)
u.sZ(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.G(u)
s.sZ(-t*10*u)
r.ai()}},
fA:function(a){var u=this
if(H.z(H.h(a,"$iD"),"$ie_").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fC:function(a){var u,t,s,r,q,p,o,n=this
a=H.z(H.h(a,"$iD"),"$ibL")
if(!J.P(n.d,a.x.b))return
u=a.c
t=a.d
s=t.q(0,a.y)
r=n.ay(new V.a5(s.a,s.b).C(0,2).v(0,u.gaC()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.G(p)
o=n.cy
if(typeof o!=="number")return H.G(o)
s.sa5(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.G(q)
s=n.db
if(typeof s!=="number")return H.G(s)
o.sa5(0,-p*q+s)
n.b.sZ(0)
n.c.sZ(0)
t=t.q(0,a.z)
n.dx=n.ay(new V.a5(t.a,t.b).C(0,2).v(0,u.gaC()))
n.ai()},
i8:function(a){var u=this
H.h(a,"$iD")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
i6:function(a){var u,t,s,r,q,p,o,n=this
a=H.z(H.h(a,"$iD"),"$ieo")
if(!H.J(n.cx))return
if(H.J(n.ch)){u=a.d.q(0,a.y)
u=new V.a5(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
n.ch=!1}if(H.J(n.e)){u=a.c
t=a.d.q(0,a.y)
u=n.ay(new V.a5(t.a,t.b).C(0,2).v(0,u.gaC()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.G(s)
t.sZ(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.G(t)
s.sZ(-u*10*t)}else{u=a.c
t=a.d
s=t.q(0,a.y)
r=n.ay(new V.a5(s.a,s.b).C(0,2).v(0,u.gaC()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.G(p)
o=n.cy
if(typeof o!=="number")return H.G(o)
s.sa5(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.G(q)
s=n.db
if(typeof s!=="number")return H.G(s)
o.sa5(0,-p*q+s)
n.b.sZ(0)
n.c.sZ(0)
t=t.q(0,a.z)
n.dx=n.ay(new V.a5(t.a,t.b).C(0,2).v(0,u.gaC()))}n.ai()},
i4:function(a){var u,t,s,r=this
H.h(a,"$iD")
if(!H.J(r.cx))return
r.cx=!1
if(H.J(r.ch))return
u=r.dx
if(u.E(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.G(s)
u.sZ(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.G(u)
s.sZ(-t*10*u)
r.ai()}},
aD:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.P()
if(q<p){r.dy=p
u=b.y
r.c.au(0,u)
r.b.au(0,u)
q=V.mg(r.b.d)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.C(0,V.bb(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iad:1}
M.dH.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.W():u},
a8:function(a){var u
H.h(a,"$iD")
u=this.r
if(u!=null)u.F(a)},
bD:function(){return this.a8(null)},
hr:function(a,b){var u,t,s,r,q,p,o,n=M.aI
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gaf(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gt()
o.toString
H.n(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bH([n])
n.b=!0
this.a8(n)},
ht:function(a,b){var u,t,s=M.aI
H.k(b,"$ii",[s],"$ai")
for(u=b.gS(b),t=this.gaf();u.A();)u.gJ(u).gt().L(0,t)
s=new D.bI([s])
s.b=!0
this.a8(s)},
at:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.an(u,u.length,[H.r(u,0)]);u.A();){t=u.d
if(t!=null)t.at(a)}s.f=!1},
$ai:function(){return[M.aI]},
$aa2:function(){return[M.aI]},
$iaI:1}
M.dO.prototype={
a8:function(a){var u
H.h(a,"$iD")
u=this.y
if(u!=null)u.F(a)},
bD:function(){return this.a8(null)},
fU:function(a,b){var u,t,s,r,q,p,o,n=E.ar
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gaf(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c4()
o.saj(null)
o.saP(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bH([n])
n.b=!0
this.a8(n)},
fW:function(a,b){var u,t,s=E.ar
H.k(b,"$ii",[s],"$ai")
for(u=b.gS(b),t=this.gaf();u.A();)u.gJ(u).gt().L(0,t)
s=new D.bI([s])
s.b=!0
this.a8(s)},
sdD:function(a){var u,t,s=this
if(a==null)a=X.mk(1.0471975511965976,null)
u=s.b
if(u!==a){if(u!=null)u.gt().L(0,s.gaf())
t=s.b
s.b=a
a.gt().h(0,s.gaf())
u=new D.E("camera",t,s.b,[X.dG])
u.b=!0
s.a8(u)}},
seo:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gt().L(0,t.gaf())
u=t.c
t.c=b
b.gt().h(0,t.gaf())
s=new D.E("target",u,t.c,[X.ek])
s.b=!0
t.a8(s)}},
saX:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gt().L(0,t.gaf())
u=t.d
t.d=a
if(a!=null)a.gt().h(0,t.gaf())
s=new D.E("technique",u,t.d,[O.bR])
s.b=!0
t.a8(s)}},
gt:function(){var u=this.y
return u==null?this.y=D.W():u},
at:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
a.eh(c.d)
c.c.ak(a)
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
a.cy.eg(m)
t=$.ml
if(t==null){t=V.mn()
s=V.mI()
r=$.mF
if(r==null)r=$.mF=new V.M(0,0,-1)
l=r.v(0,Math.sqrt(r.E(r)))
s=s.aH(l)
k=s.v(0,Math.sqrt(s.E(s)))
j=l.aH(k)
i=new V.M(t.a,t.b,t.c)
h=k.T(0).E(i)
g=j.T(0).E(i)
f=l.T(0).E(i)
t=V.bb(k.a,j.a,l.a,h,k.b,j.b,l.b,g,k.c,j.c,l.c,f,0,0,0,1)
$.ml=t
e=t}else e=t
t=u.b
if(t!=null){d=t.aD(0,a,u)
if(d!=null)e=d.C(0,e)}a.db.eg(e)
u=c.d
if(u!=null)u.au(0,a)
for(u=c.e.a,u=new J.an(u,u.length,[H.r(u,0)]);u.A();)u.d.au(0,a)
for(u=c.e.a,u=new J.an(u,u.length,[H.r(u,0)]);u.A();)u.d.at(a)
c.b.toString
a.cy.co()
a.db.co()
c.c.bd(a)
a.ef()},
sfc:function(a,b){this.e=H.k(b,"$ia2",[E.ar],"$aa2")},
$iaI:1}
M.aI.prototype={}
A.dC.prototype={}
A.fC.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iE:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dH:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.aq.prototype={
gav:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
u:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.aq))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.dK.prototype={}
A.e1.prototype={
eN:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
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
A.pr(c0,u)
A.pt(c0,u)
A.ps(c0,u)
A.pv(c0,u)
A.pw(c0,u)
A.pu(c0,u)
A.px(c0,u)
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
b5.e_(0,s.charCodeAt(0)==0?s:s,A.pq(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.z(b5.y.W(0,"invViewMat"),"$iat")
if(t)b5.dy=H.z(b5.y.W(0,"objMat"),"$iat")
if(r)b5.fr=H.z(b5.y.W(0,"viewObjMat"),"$iat")
b5.fy=H.z(b5.y.W(0,"projViewObjMat"),"$iat")
if(c0.ry)b5.k1=H.z(b5.y.W(0,"txt2DMat"),"$id8")
if(c0.x1)b5.k2=H.z(b5.y.W(0,"txtCubeMat"),"$iat")
if(c0.x2)b5.k3=H.z(b5.y.W(0,"colorMat"),"$iat")
b5.sf8(H.d([],[A.at]))
t=c0.y2
if(t>0){b5.k4=H.h(b5.y.W(0,"bendMatCount"),"$iaM")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.A(P.C(b7+q+b8));(s&&C.a).h(s,H.z(m,"$iat"))}}if(c0.a.a)b5.r2=H.z(b5.y.W(0,"emissionClr"),"$ia_")
if(c0.b.a)b5.x1=H.z(b5.y.W(0,"ambientClr"),"$ia_")
if(c0.c.a)b5.y2=H.z(b5.y.W(0,"diffuseClr"),"$ia_")
if(c0.d.a)b5.dK=H.z(b5.y.W(0,"invDiffuseClr"),"$ia_")
t=c0.e.a
if(!t)s=!1
else s=!0
if(s){b5.dM=H.z(b5.y.W(0,"shininess"),"$iaa")
if(t)b5.dL=H.z(b5.y.W(0,"specularClr"),"$ia_")}if(c0.cy){b5.dN=H.z(b5.y.W(0,"envSampler"),"$ici")
if(c0.r.a)b5.dO=H.z(b5.y.W(0,"reflectClr"),"$ia_")
t=c0.x.a
if(!t)s=!1
else s=!0
if(s){b5.dP=H.z(b5.y.W(0,"refraction"),"$iaa")
if(t)b5.dQ=H.z(b5.y.W(0,"refractClr"),"$ia_")}}if(c0.y.a)b5.dR=H.z(b5.y.W(0,"alpha"),"$iaa")
t=P.m
s=[t,A.aM]
b5.sfi(new H.a3(s))
b5.sfj(new H.a3([t,[P.b,A.cf]]))
b5.shB(new H.a3(s))
b5.shC(new H.a3([t,[P.b,A.cg]]))
b5.shY(new H.a3(s))
b5.shZ(new H.a3([t,[P.b,A.cj]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.cf],l=0;l<t.length;t.length===s||(0,H.u)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.j(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ap()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.A(P.C(b7+g+b8))
H.z(m,"$ia_")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.A(P.C(b7+g+b8))
H.z(f,"$ia_")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.A(P.C(b7+g+b8))
H.z(e,"$ia_")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.A(P.C(b7+g+b8))
H.z(m,"$ia_")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.A(P.C(b7+g+b8))
H.z(f,"$ia_")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.A(P.C(b7+o+b8))
H.z(e,"$ich")
a=e}else a=b6
C.a.h(h,new A.cf(b,c,d,m,f,a))}b5.ca.k(0,j,h)
q=b5.c9
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.A(P.C(b7+o+b8))
q.k(0,j,H.h(m,"$iaM"))}for(t=c0.Q,s=t.length,r=[A.cg],l=0;l<t.length;t.length===s||(0,H.u)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.j(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.A(P.C(b7+o+b8))
H.z(m,"$ia_")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.A(P.C(b7+o+b8))
H.z(f,"$ia_")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.A(P.C(b7+o+b8))
H.z(e,"$ia_")
if(typeof j!=="number")return j.ap()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.A(P.C(b7+o+b8))
H.z(a0,"$id8")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.A(P.C(b7+o+b8))
H.z(a0,"$ici")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.A(P.C(b7+o+b8))
H.z(a0,"$ici")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.A(P.C(b7+o+b8))
H.z(a2,"$id7")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.A(P.C(b7+o+b8))
H.z(a0,"$iaa")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.A(P.C(b7+o+b8))
H.z(a2,"$iaa")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.A(P.C(b7+o+b8))
H.z(a5,"$iaa")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.cg(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.cc.k(0,j,h)
q=b5.cb
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.A(P.C(b7+o+b8))
q.k(0,j,H.h(m,"$iaM"))}for(t=c0.ch,s=t.length,r=[A.cj],l=0;l<t.length;t.length===s||(0,H.u)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.j(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.A(P.C(b7+o+b8))
H.z(m,"$ia_")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.A(P.C(b7+o+b8))
H.z(f,"$ia_")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.A(P.C(b7+o+b8))
H.z(e,"$ia_")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.A(P.C(b7+o+b8))
H.z(a0,"$ia_")
if(typeof j!=="number")return j.ap()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.A(P.C(b7+o+b8))
H.z(a2,"$ia_")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.A(P.C(b7+o+b8))
H.z(a5,"$ia_")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.A(P.C(b7+o+b8))
H.z(a9,"$iaa")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.A(P.C(b7+o+b8))
H.z(b0,"$iaa")
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
if(a2==null)H.A(P.C(b7+g+b8))
H.z(a2,"$id7")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.A(P.C(b7+g+b8))
H.z(a2,"$iaa")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.A(P.C(b7+g+b8))
H.z(a5,"$iaa")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.A(P.C(b7+g+b8))
H.z(a2,"$iaa")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.A(P.C(b7+g+b8))
H.z(a5,"$iaa")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.A(P.C(b7+g+b8))
H.z(a9,"$iaa")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.A(P.C(b7+g+b8))
H.z(a2,"$ich")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.A(P.C(b7+o+b8))
H.z(a2,"$ich")
a3=a2}else a3=b6
C.a.h(h,new A.cj(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.ce.k(0,j,h)
q=b5.cd
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.A(P.C(b7+o+b8))
q.k(0,j,H.h(m,"$iaM"))}}},
hR:function(a,b){},
sf8:function(a){this.r1=H.k(a,"$ib",[A.at],"$ab")},
sfi:function(a){this.c9=H.k(a,"$iy",[P.m,A.aM],"$ay")},
sfj:function(a){this.ca=H.k(a,"$iy",[P.m,[P.b,A.cf]],"$ay")},
shB:function(a){this.cb=H.k(a,"$iy",[P.m,A.aM],"$ay")},
shC:function(a){this.cc=H.k(a,"$iy",[P.m,[P.b,A.cg]],"$ay")},
shY:function(a){this.cd=H.k(a,"$iy",[P.m,A.aM],"$ay")},
shZ:function(a){this.ce=H.k(a,"$iy",[P.m,[P.b,A.cj]],"$ay")}}
A.aE.prototype={
i:function(a){return"dirLight"+H.j(this.a)}}
A.aH.prototype={
i:function(a){return"pointLight"+H.j(this.a)}}
A.aJ.prototype={
i:function(a){return"spotLight"+H.j(this.a)}}
A.hK.prototype={
i:function(a){return this.b6}}
A.cf.prototype={}
A.cg.prototype={}
A.cj.prototype={}
A.cZ.prototype={
cH:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
e_:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cZ(b,35633)
r.f=r.cZ(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.J(H.lM(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.A(P.C("Failed to link shader: "+H.j(s)))}r.hT()
r.hV()},
ak:function(a){a.a.useProgram(this.r)
this.x.iE()},
cZ:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.J(H.lM(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.C("Error compiling shader '"+H.j(s)+"': "+H.j(u)))}return s},
hT:function(){var u,t,s,r=this,q=H.d([],[A.dC]),p=r.a,o=H.a1(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.G(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dC(p,t.name,s))}r.x=new A.fC(q)},
hV:function(){var u,t,s,r=this,q=H.d([],[A.ep]),p=r.a,o=H.a1(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.G(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.iy(t.type,t.size,t.name,s))}r.y=new A.jc(q)},
aO:function(a,b,c){var u=this.a
if(a===1)return new A.aM(u,b,c)
else return A.lA(u,this.r,b,a,c)},
ff:function(a,b,c){var u=this.a
if(a===1)return new A.ch(u,b,c)
else return A.lA(u,this.r,b,a,c)},
fg:function(a,b,c){var u=this.a
if(a===1)return new A.ci(u,b,c)
else return A.lA(u,this.r,b,a,c)},
bl:function(a,b){return new P.eG(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
iy:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aO(b,c,d)
case 5121:return u.aO(b,c,d)
case 5122:return u.aO(b,c,d)
case 5123:return u.aO(b,c,d)
case 5124:return u.aO(b,c,d)
case 5125:return u.aO(b,c,d)
case 5126:return new A.aa(u.a,c,d)
case 35664:return new A.j8(u.a,c,d)
case 35665:return new A.a_(u.a,c,d)
case 35666:return new A.d7(u.a,c,d)
case 35667:return new A.j9(u.a,c,d)
case 35668:return new A.ja(u.a,c,d)
case 35669:return new A.jb(u.a,c,d)
case 35674:return new A.jd(u.a,c,d)
case 35675:return new A.d8(u.a,c,d)
case 35676:return new A.at(u.a,c,d)
case 35678:return u.ff(b,c,d)
case 35680:return u.fg(b,c,d)
case 35670:throw H.c(u.bl("BOOL",c))
case 35671:throw H.c(u.bl("BOOL_VEC2",c))
case 35672:throw H.c(u.bl("BOOL_VEC3",c))
case 35673:throw H.c(u.bl("BOOL_VEC4",c))
default:throw H.c(P.C("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.ep.prototype={}
A.jc.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
W:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.C("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.N()},
N:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aM.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.j9.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.ja.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.jb.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.j7.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
sia:function(a){H.k(a,"$ib",[P.m],"$ab")}}
A.aa.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.j8.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.a_.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.d7.prototype={
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.jd.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.d8.prototype={
ag:function(a){var u=new Float32Array(H.cm(H.k(a,"$ib",[P.p],"$ab")))
C.d.ew(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.at.prototype={
ag:function(a){var u=new Float32Array(H.cm(H.k(a,"$ib",[P.p],"$ab")))
C.d.ex(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.ch.prototype={
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.ci.prototype={
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.kz.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cm(s.b,b).cm(s.d.cm(s.c,b),c)
a.sa5(0,new V.a4(r.a,r.b,r.c))
a.seq(r.v(0,Math.sqrt(r.E(r))))
s=1-b
u=1-c
a.sdz(new V.bd(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:10}
F.kM.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:20}
F.kO.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.G(p)
s=-s*p
u=r*p
a.sa5(0,new V.a4(s,u,q))
u=new V.M(s,u,q)
a.seq(u.v(0,Math.sqrt(u.E(u))))
a.sdz(new V.bd(1-c,2+c,-1,-1))},
$S:10}
F.kP.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:19}
F.kQ.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:19}
F.l9.prototype={
$2:function(a,b){return 0},
$S:20}
F.la.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.G(s)
u=a.f
t=new V.M(u.a,u.b,u.c)
s=t.v(0,Math.sqrt(t.E(t))).C(0,this.b+s)
a.sa5(0,new V.a4(s.a,s.b,s.c))},
$S:10}
F.lc.prototype={
$1:function(a){return new V.a4(Math.cos(a),Math.sin(a),0)},
$S:18}
F.kX.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.a4(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:18}
F.kN.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lZ(n.$1(o),m)
m=J.nI(J.lZ(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.M(m.a,m.b,m.c)
u=m.v(0,Math.sqrt(m.E(m)))
n=$.mG
if(n==null){n=new V.M(1,0,0)
$.mG=n
t=n}else t=n
n=u.aH(!J.P(u,t)?V.mJ():t)
s=n.v(0,Math.sqrt(n.E(n)))
n=s.aH(u)
t=n.v(0,Math.sqrt(n.E(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.C(0,n*m)
m=s.C(0,q*m)
a.sa5(0,J.nH(l,new V.a4(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:10}
F.a8.prototype={
b4:function(){var u=this
if(!u.gb5()){C.a.L(u.a.a.d.b,u)
u.a.a.a_()}u.bT()
u.bU()
u.hH()},
bX:function(a){this.a=a
C.a.h(a.d.b,this)},
bY:function(a){this.b=a
C.a.h(a.d.c,this)},
hS:function(a){this.c=a
C.a.h(a.d.d,this)},
bT:function(){var u=this.a
if(u!=null){C.a.L(u.d.b,this)
this.a=null}},
bU:function(){var u=this.b
if(u!=null){C.a.L(u.d.c,this)
this.b=null}},
hH:function(){var u=this.c
if(u!=null){C.a.L(u.d.d,this)
this.c=null}},
gb5:function(){return this.a==null||this.b==null||this.c==null},
f7:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.da()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.e0())return
return s.v(0,Math.sqrt(s.E(s)))},
fb:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.q(0,q)
r=new V.M(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.E(r)))
r=t.q(0,q)
r=new V.M(r.a,r.b,r.c)
r=s.aH(r.v(0,Math.sqrt(r.E(r))))
return r.v(0,Math.sqrt(r.E(r)))},
c3:function(){var u,t=this
if(t.d!=null)return!0
u=t.f7()
if(u==null){u=t.fb()
if(u==null)return!1}t.d=u
t.a.a.a_()
return!0},
f6:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.da()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.e0())return
return s.v(0,Math.sqrt(s.E(s)))},
fa:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.L().a){l=d.q(0,g)
l=new V.M(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.E(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.q(0,g).C(0,p).p(0,g).q(0,j)
l=new V.M(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.E(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.E(l)))
l=o.aH(q)
l=l.v(0,Math.sqrt(l.E(l))).aH(o)
q=l.v(0,Math.sqrt(l.E(l)))}return q},
c1:function(){var u,t=this
if(t.e!=null)return!0
u=t.f6()
if(u==null){u=t.fa()
if(u==null)return!1}t.e=u
t.a.a.a_()
return!0},
gis:function(a){var u=this
if(J.P(u.a,u.b))return!0
if(J.P(u.b,u.c))return!0
if(J.P(u.c,u.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
G:function(a){var u,t,s=this
if(s.gb5())return a+"disposed"
u=a+C.b.an(J.aw(s.a.e),0)+", "+C.b.an(J.aw(s.b.e),0)+", "+C.b.an(J.aw(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
N:function(){return this.G("")}}
F.ha.prototype={}
F.iC.prototype={
b8:function(a,b,c){var u,t=b.a
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.br.prototype={
b4:function(){var u=this
if(!u.gb5()){C.a.L(u.a.a.c.b,u)
u.a.a.a_()}u.bT()
u.bU()},
bX:function(a){this.a=a
C.a.h(a.c.b,this)},
bY:function(a){this.b=a
C.a.h(a.c.c,this)},
bT:function(){var u=this.a
if(u!=null){C.a.L(u.c.b,this)
this.a=null}},
bU:function(){var u=this.b
if(u!=null){C.a.L(u.c.c,this)
this.b=null}},
gb5:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
G:function(a){if(this.gb5())return a+"disposed"
return a+C.b.an(J.aw(this.a.e),0)+", "+C.b.an(J.aw(this.b.e),0)},
N:function(){return this.G("")}}
F.hv.prototype={}
F.j6.prototype={
b8:function(a,b,c){var u,t=b.a
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
return t==u.e}else{t=b.a
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
return t==u.e}else return!1}}}
F.bN.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.an(J.aw(u.e),0)},
N:function(){return this.G("")}}
F.eg.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.W():u},
b9:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.w()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){r=g[s]
h.a.h(0,r.iv())}h.a.w()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bN()
if(n.a==null)H.A(P.C("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.F(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.p()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.o9(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.p()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.w()
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
F.cH(l,k,i)}g=h.e
if(g!=null)g.ao(0)},
aA:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aA()||!1
if(!t.a.aA())u=!1
s=t.e
if(s!=null)s.ao(0)
return u},
iW:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.r(o,0)])
for(o=[F.aj];u.length!==0;){t=C.a.giI(u)
C.a.ei(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.e(u,r)
q=u[r]
if(q!=null&&a.b8(0,t,q)){C.a.h(s,q)
C.a.ei(u,r)}}if(s.length>1)b.b9(s)}}p.a.w()
p.c.cs()
p.d.cs()
p.b.je()
p.c.ct(new F.j6())
p.d.ct(new F.iC())
o=p.e
if(o!=null)o.ao(0)},
bZ:function(){this.iW(new F.jz(),new F.i7())},
cf:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.cf()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.e(o,u)
t=o[u]
o=t.r
if(o!=null)t.se4(new V.M(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.M(s,r,o).v(0,Math.sqrt(s*s+r*r+o*o))
if(!J.P(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.F(null)}}}}o=p.e
if(o!=null)o.ao(0)},
dC:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.b1()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bx().a)!==0)++s
if((t&$.bw().a)!==0)++s
if((t&$.bZ().a)!==0)++s
if((t&$.c_().a)!==0)++s
if((t&$.dw().a)!==0)++s
if((t&$.dx().a)!==0)++s
if((t&$.cx().a)!==0)++s
if((t&$.bv().a)!==0)++s
r=a3.gcD(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.p
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dE])
for(n=0,m=0;m<s;++m){l=a3.im(m)
k=l.gcD(l)
C.a.k(o,m,new Z.dE(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.e(u,j)
i=u[j].iT(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.k(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cm(p)),35044)
u.bindBuffer(a0,null)
e=new Z.cB(new Z.ew(a0,f),o,a3)
e.sfs(H.d([],[Z.bG]))
if(a.b.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.w()
C.a.h(d,c.e)}b=Z.lD(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bG(0,d.length,b))}if(a.c.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.w()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.w()
C.a.h(d,c.e)}b=Z.lD(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bG(1,d.length,b))}if(a.d.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.w()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.w()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].c
c.a.a.w()
C.a.h(d,c.e)}b=Z.lD(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bG(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.f])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.G(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.G(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.G(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.G(t))}return C.a.m(s,"\n")},
a_:function(){var u=this.e
if(u!=null)u.F(null)},
$iqj:1}
F.iv.prototype={
ig:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[F.aj],"$ab")
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
C.a.h(u,F.cH(s,p,o))}}return u},
ih:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,"$ib",[F.aj],"$ab")
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
C.a.h(u,F.cH(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cH(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cH(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cH(k,h,l))}o=!o}q=!q}return u},
gn:function(a){return this.b.length},
ct:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b8(0,p,n)){p.b4()
break}}}}},
cs:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.gis(s)
if(t)s.b4()}},
aA:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].c3())s=!1
return s},
c2:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].c1())s=!1
return s},
cf:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.M(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.M(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.F(null)}},
i:function(a){return this.N()},
G:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(a))
return C.a.m(r,"\n")},
N:function(){return this.G("")},
sfm:function(a){this.b=H.k(a,"$ib",[F.a8],"$ab")}}
F.iw.prototype={
gn:function(a){return this.b.length},
ct:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b8(0,p,n)){p.b4()
break}}}}},
cs:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.P(s.a,s.b)
if(t)s.b4()}},
i:function(a){return this.N()},
G:function(a){var u,t,s=H.d([],[P.f]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
C.a.h(s,t[u].G(a+(""+u+". ")))}return C.a.m(s,"\n")},
N:function(){return this.G("")},
sft:function(a){this.b=H.k(a,"$ib",[F.br],"$ab")}}
F.ix.prototype={
gn:function(a){return this.b.length},
je:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.L(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.F(null)}s=t.a
if(s!=null){C.a.L(s.b.b,t)
t.a=null}}}},
i:function(a){return this.N()},
G:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(a))
return C.a.m(r,"\n")},
N:function(){return this.G("")},
sbQ:function(a){this.b=H.k(a,"$ib",[F.bN],"$ab")}}
F.aj.prototype={
c6:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.ev(u.cx,r,o,t,s,q,p,a,n)},
iv:function(){return this.c6(null)},
sa5:function(a,b){var u
if(!J.P(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a_()}},
se4:function(a){var u
a=a==null?null:a.v(0,Math.sqrt(a.E(a)))
if(!J.P(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a_()}},
seq:function(a){var u
if(!J.P(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a_()}},
sdz:function(a){var u
if(!J.P(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a_()}},
iT:function(a){var u,t,s=this
if(a.u(0,$.b1())){u=s.f
t=[P.p]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.bx())){u=s.r
t=[P.p]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.bw())){u=s.x
t=[P.p]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.bZ())){u=s.y
t=[P.p]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.u(0,$.c_())){u=s.z
t=[P.p]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.dw())){u=s.Q
t=[P.p]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.dx())){u=s.Q
t=[P.p]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.u(0,$.cx()))return H.d([s.ch],[P.p])
else if(a.u(0,$.bv())){u=s.cx
t=[P.p]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.p])},
c3:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.da()
t.d.H(0,new F.jE(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.ao(0)}return!0},
c1:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.da()
t.d.H(0,new F.jD(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.ao(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
G:function(a){var u,t,s=this,r="-",q=H.d([],[P.f])
C.a.h(q,C.b.an(J.aw(s.e),0))
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
N:function(){return this.G("")}}
F.jE.prototype={
$1:function(a){var u,t
H.h(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:9}
F.jD.prototype={
$1:function(a){var u,t
H.h(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:9}
F.ju.prototype={
w:function(){var u,t,s,r
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
ii:function(a,b,c,d,e,f){var u=F.ev(a,null,b,c,d,e,f,null,0)
this.h(0,u)
return u},
gn:function(a){return this.c.length},
aA:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].c3()
return!0},
c2:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].c1()
return!0},
ir:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.P(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.F(null)}}}}return!0},
i:function(a){return this.N()},
G:function(a){var u,t,s,r
this.w()
u=H.d([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
N:function(){return this.G("")},
sib:function(a){this.c=H.k(a,"$ib",[F.aj],"$ab")}}
F.jv.prototype={
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
H:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a8]})
C.a.H(u.b,b)
C.a.H(u.c,new F.jw(u,b))
C.a.H(u.d,new F.jx(u,b))},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
return C.a.m(r,"\n")},
sfn:function(a){this.b=H.k(a,"$ib",[F.a8],"$ab")},
sfo:function(a){this.c=H.k(a,"$ib",[F.a8],"$ab")},
sfp:function(a){this.d=H.k(a,"$ib",[F.a8],"$ab")}}
F.jw.prototype={
$1:function(a){H.h(a,"$ia8")
if(!J.P(a.a,this.a))this.b.$1(a)},
$S:9}
F.jx.prototype={
$1:function(a){var u
H.h(a,"$ia8")
u=this.a
if(!J.P(a.a,u)&&!J.P(a.b,u))this.b.$1(a)},
$S:9}
F.jy.prototype={
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.e(t,u)
return t[u]}else{if(b<0)return H.e(t,b)
return t[b]}},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
return C.a.m(r,"\n")},
sfu:function(a){this.b=H.k(a,"$ib",[F.br],"$ab")},
sfv:function(a){this.c=H.k(a,"$ib",[F.br],"$ab")}}
F.jA.prototype={}
F.jz.prototype={
b8:function(a,b,c){return J.P(b.f,c.f)}}
F.jB.prototype={}
F.i7.prototype={
b9:function(a){var u,t,s,r
H.k(a,"$ib",[F.aj],"$ab")
u=V.da()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.M(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.v(0,Math.sqrt(u.E(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.u)(a),++s)a[s].se4(u)
return}}
F.jC.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
return C.a.m(r,"\n")},
sbQ:function(a){this.b=H.k(a,"$ib",[F.bN],"$ab")}}
O.fZ.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.W():u},
a3:function(a){var u=this.r
if(u!=null)u.F(a)},
au:function(a,b){},
ej:function(a,b){var u,t,s,r,q=this,p=q.a
if(p==null){p=q.f
u="Grey"+(p?"Point":"View")+"Depth"
t=H.h(a.fr.j(0,u),"$idK")
if(t==null){u=a.a
s="Grey"+(p?"Point":"View")+"Depth"
t=new A.dK(u,s)
t.cH(u,s)
p=p?"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = length(loc.xyz);\n":"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n"
p+="  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n}\n"
t.e_(0,"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n".charCodeAt(0)==0?"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n":"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n",p.charCodeAt(0)==0?p:p)
t.z=t.x.j(0,"posAttr")
t.Q=H.z(t.y.j(0,"width"),"$iaa")
t.ch=H.z(t.y.j(0,"stop"),"$iaa")
t.cx=H.z(t.y.j(0,"viewObjMat"),"$iat")
t.cy=H.z(t.y.j(0,"projMat"),"$iat")
a.dv(t)}q.a=t
p=t}u=b.e
if((!(u instanceof Z.cB)?b.e=null:u)==null){p=b.d.dC(new Z.ex(a.a),$.b1())
u=p.aI($.b1())
s=q.a
u.e=s.z.c
b.e=p
p=s}p.ak(a)
u=q.b
s=q.c
r=p.Q
C.d.a2(r.a,r.d,u-s)
s=q.c
u=p.ch
C.d.a2(u.a,u.d,s)
s=a.cy
s=s.ga0(s)
u=p.cy
u.toString
u.ag(s.ac(0,!0))
s=a.geA()
p=p.cx
p.toString
p.ag(s.ac(0,!0))
p=b.e
p.ak(a)
p.at(a)
p.bd(a)
p=q.a
p.toString
a.a.useProgram(null)
p.x.dH()}}
O.e2.prototype={
gt:function(){var u=this.fr
return u==null?this.fr=D.W():u},
a3:function(a){var u
H.h(a,"$iD")
u=this.fr
if(u!=null)u.F(a)},
f0:function(){return this.a3(null)},
df:function(a){H.h(a,"$iD")
this.a=null
this.a3(a)},
hM:function(){return this.df(null)},
fN:function(a,b){var u=V.as
H.k(b,"$ii",[u],"$ai")
u=new D.bH([u])
u.b=!0
this.a3(u)},
fP:function(a,b){var u=V.as
H.k(b,"$ii",[u],"$ai")
u=new D.bI([u])
u.b=!0
this.a3(u)},
cW:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.m,h=new H.a3([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.gaq()
p=h.j(0,r.gaq())
h.k(0,q,p==null?1:p)}o=H.d([],[A.aE])
h.H(0,new O.hO(j,o))
C.a.bB(o,new O.hP())
n=new H.a3([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.gaq()
p=n.j(0,r.gaq())
n.k(0,q,p==null?1:p)}m=H.d([],[A.aH])
n.H(0,new O.hQ(j,m))
C.a.bB(m,new O.hR())
l=new H.a3([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.u)(i),++s){r=i[s]
t=r.gaq()
q=l.j(0,r.gaq())
l.k(0,t,q==null?1:q)}k=H.d([],[A.aJ])
l.H(0,new O.hS(j,k))
C.a.bB(k,new O.hT())
i=C.e.aa(j.e.a.length+3,4)
j.dy.e
return A.og(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
f5:function(a,b){H.k(a,"$ib",[T.d3],"$ab")
if(b!=null)if(!C.a.R(a,b)){b.a=a.length
C.a.h(a,b)}},
au:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.an(u,u.length,[H.r(u,0)]);u.A();){t=u.d
t.toString
s=$.bP
t.a=s==null?$.bP=new V.a4(0,0,0):s
s=$.jt
t.b=s==null?$.jt=new V.M(0,0,1):s
s=$.js
t.c=s==null?$.js=new V.M(0,1,0):s
s=$.jr
t.d=s==null?$.jr=new V.M(-1,0,0):s
s=t.f
if(s!=null){r=s.aD(0,b,t)
if(r!=null){t.a=r.bv(t.a)
s=r.bw(t.b)
q=s.a
p=s.b
o=s.c
t.b=s.v(0,Math.sqrt(q*q+p*p+o*o))
o=r.bw(t.c)
p=o.a
q=o.b
s=o.c
t.c=o.v(0,Math.sqrt(p*p+q*q+s*s))
s=r.bw(t.d)
q=s.a
p=s.b
o=s.c
t.d=s.v(0,Math.sqrt(q*q+p*p+o*o))}}}},
ej:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cW()
u=H.h(b4.fr.j(0,b3.b6),"$ie1")
if(u==null){u=A.of(b3,b4.a)
b4.dv(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.dJ
b3=b5.e
if(!(b3 instanceof Z.cB))b3=b5.e=null
if(b3==null||!b3.d.u(0,s)){b3=t.k3
if(b3)b5.d.aA()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.c2()
q.a.c2()
q=q.e
if(q!=null)q.ao(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.ir()
p=p.e
if(p!=null)p.ao(0)}n=b5.d.dC(new Z.ex(b4.a),s)
n.aI($.b1()).e=b2.a.Q.c
if(b3)n.aI($.bx()).e=b2.a.cx.c
if(r)n.aI($.bw()).e=b2.a.ch.c
if(t.r1)n.aI($.bZ()).e=b2.a.cy.c
if(q)n.aI($.c_()).e=b2.a.db.c
if(t.rx)n.aI($.bv()).e=b2.a.dx.c
b5.e=n}b3=T.d3
m=H.d([],[b3])
b2.a.ak(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.ga0(q)
r=r.dy
r.toString
r.ag(q.ac(0,!0))}if(t.fr){r=b2.a
q=b4.geA()
r=r.fr
r.toString
r.ag(q.ac(0,!0))}r=b2.a
q=b4.ch
if(q==null){q=b4.gjc()
p=b4.dx
p=b4.ch=q.C(0,p.ga0(p))
q=p}r=r.fy
r.toString
r.ag(q.ac(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.ag(C.j.ac(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.ag(C.j.ac(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.ag(C.j.ac(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.d.bx(r.a,r.d,l)
for(r=[P.p],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.e(p,k)
p=p[k]
q.toString
H.h(p,"$ias")
q=q.r1
if(k>=q.length)return H.e(q,k)
q=q[k]
j=new Float32Array(H.cm(H.k(p.ac(0,!0),"$ib",r,"$ab")))
C.d.ex(q.a,q.d,!1,j)}}if(t.a.a){r=b2.a
q=b2.f.f
r=r.r2
C.d.V(r.a,r.d,q.a,q.b,q.c)}if(t.id){if(t.b.a){r=b2.a
q=b2.r.f
r=r.x1
C.d.V(r.a,r.d,q.a,q.b,q.c)}if(t.c.a){r=b2.a
q=b2.x.f
r=r.y2
C.d.V(r.a,r.d,q.a,q.b,q.c)}if(t.d.a){r=b2.a
q=b2.y.f
r=r.dK
C.d.V(r.a,r.d,q.a,q.b,q.c)}r=t.e.a
if(!r)q=!1
else q=!0
if(q){q=b2.a
p=b2.z.ch
q=q.dM
C.d.a2(q.a,q.d,p)}if(r){r=b2.a
q=b2.z.f
r=r.dL
C.d.V(r.a,r.d,q.a,q.b,q.c)}r=t.z
if(r.length>0){q=b4.db
i=q.ga0(q)
q=P.m
h=new H.a3([q,q])
for(q=b2.dx.e,p=q.length,o=[b3],g=0;g<q.length;q.length===p||(0,H.u)(q),++g){f=q[g]
e=f.gaq()
d=h.j(0,e)
if(d==null)d=0
h.k(0,e,d+1)
c=J.dy(b2.a.ca.j(0,e),d)
b=i.bw(f.giB(f))
a=b.a
a0=b.b
a1=b.c
a1=b.v(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=c.e
a=a1.a
b=a1.b
a1=a1.c
C.d.V(a0.a,a0.d,a,b,a1)
a1=f.gaU(f)
b=c.f
C.d.V(b.a,b.d,a1.a,a1.b,a1.c)
f.gaY()
b=f.giB(f)
a=c.d
C.d.V(a.a,a.d,b.a,b.b,b.c)
b=f.gjS()
a=c.b
C.d.V(a.a,a.d,b.a,b.b,b.c)
b=f.gcu(f)
a=c.c
C.d.V(a.a,a.d,b.a,b.b,b.c)
b=f.gaY()
H.k(m,"$ib",o,"$ab")
if(!C.a.R(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gaY()
a=b.gbr(b)
if(a){a=c.r
a.toString
a0=b.d
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.u)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.c9.j(0,p)
C.d.bx(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.ga0(q)
q=P.m
a2=new H.a3([q,q])
for(q=b2.dx.f,p=q.length,o=[b3],b=[P.p],g=0;g<q.length;q.length===p||(0,H.u)(q),++g){f=q[g]
e=f.gaq()
d=a2.j(0,e)
if(d==null)d=0
a2.k(0,e,d+1)
c=J.dy(b2.a.cc.j(0,e),d)
a3=i.C(0,f.ga0(f))
a=f.ga0(f)
a0=$.bP
a=a.bv(a0==null?$.bP=new V.a4(0,0,0):a0)
a0=c.b
C.d.V(a0.a,a0.d,a.a,a.b,a.c)
a=$.bP
a=a3.bv(a==null?$.bP=new V.a4(0,0,0):a)
a0=c.c
C.d.V(a0.a,a0.d,a.a,a.b,a.c)
a=f.gaU(f)
a0=c.e
C.d.V(a0.a,a0.d,a.a,a.b,a.c)
f.gaY()
a=a3.cl(0)
a0=a.a
a1=a.b
a4=a.c
a5=a.e
a6=a.f
a7=a.r
a8=a.y
a9=a.z
a=a.Q
b0=c.d
b0.toString
j=new Float32Array(H.cm(H.k(new V.e4(a0,a1,a4,a5,a6,a7,a8,a9,a).ac(0,!0),"$ib",b,"$ab")))
C.d.ew(b0.a,b0.d,!1,j)
f.gaY()
a=f.gaY()
H.k(m,"$ib",o,"$ab")
if(!C.a.R(m,a)){a.a=m.length
C.a.h(m,a)}a=f.gaY()
a0=a.gbr(a)
if(a0){a0=c.f
a0.toString
a1=a.gbr(a)
if(!a1)a0.a.uniform1i(a0.d,0)
else{a=a.giN(a)
a0.a.uniform1i(a0.d,a)}}f.gcC()
a=f.gjx()
a0=c.x
C.d.ev(a0.a,a0.d,a.a,a.b,a.c,a.d)
a=f.gcC()
if(!C.a.R(m,a)){a.a=m.length
C.a.h(m,a)}a=f.gcC()
a0=a.gbr(a)
if(a0){a0=c.r
a0.toString
a1=a.gbr(a)
if(!a1)a0.a.uniform1i(a0.d,0)
else{a=a.giN(a)
a0.a.uniform1i(a0.d,a)}}if(f.gjB()){a=f.gjy()
a0=c.y
C.d.a2(a0.a,a0.d,a)
a=f.gjz()
a0=c.z
C.d.a2(a0.a,a0.d,a)
a=f.gjA()
a0=c.Q
C.d.a2(a0.a,a0.d,a)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.u)(r),++g){p=r[g].a
l=a2.j(0,p)
if(l==null)l=0
p=b2.a.cb.j(0,p)
C.d.bx(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.ga0(q)
q=P.m
b1=new H.a3([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.u)(q),++g){f=q[g]
e=f.gaq()
d=b1.j(0,e)
if(d==null)d=0
b1.k(0,e,d+1)
c=J.dy(b2.a.ce.j(0,e),d)
o=f.a
b=c.b
a=o.a
a0=o.b
o=o.c
C.d.V(b.a,b.d,a,a0,o)
o=f.b
a0=o.a
a=o.b
b=o.c
b=o.v(0,Math.sqrt(a0*a0+a*a+b*b))
a=c.c
a0=b.a
o=b.b
b=b.c
C.d.V(a.a,a.d,a0,o,b)
b=i.bv(f.a)
o=c.d
C.d.V(o.a,o.d,b.a,b.b,b.c)
b=f.r
o=c.e
C.d.V(o.a,o.d,b.a,b.b,b.c)
if(f.x!=null||f.y!=null){o=f.c
b=c.f
b.toString
a=o.a
a0=o.b
o=o.c
C.d.V(b.a,b.d,a,a0,o)
o=f.d
a0=c.r
a0.toString
a=o.a
b=o.b
o=o.c
C.d.V(a0.a,a0.d,a,b,o)
o=f.z
b=c.x
C.d.a2(b.a,b.d,o)
o=f.Q
b=c.y
C.d.a2(b.a,b.d,o)}o=f.x
b=o!=null
if(b){H.k(m,"$ib",b3,"$ab")
if(b)if(!C.a.R(m,o)){o.a=m.length
C.a.h(m,o)}o=f.x
b=o!=null
if(b&&o.d){a=c.dx
a.toString
if(!b||!o.d)a.a.uniform1i(a.d,0)
else{o=o.a
a.a.uniform1i(a.d,o)}}}if(f.y!=null){o=f.e
b=c.z
b.toString
a=o.a
a0=o.b
a1=o.c
o=o.d
C.d.ev(b.a,b.d,a,a0,a1,o)
o=f.y
H.k(m,"$ib",b3,"$ab")
if(o!=null)if(!C.a.R(m,o)){o.a=m.length
C.a.h(m,o)}o=f.y
b=o!=null
if(b&&o.d){a=c.dy
a.toString
if(!b||!o.d)a.a.uniform1i(a.d,0)
else{o=o.a
a.a.uniform1i(a.d,o)}}}if(f.db){o=f.cy
b=c.Q
C.d.a2(b.a,b.d,o)
o=f.dx
b=c.ch
C.d.a2(b.a,b.d,o)}o=f.dy
b=c.cx
C.d.a2(b.a,b.d,o)
o=f.fr
b=c.cy
C.d.a2(b.a,b.d,o)
o=f.fx
b=c.db
C.d.a2(b.a,b.d,o)}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.u)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.cd.j(0,q)
C.d.bx(q.a,q.d,l)}}}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.ga0(r).cl(0)}b3=b3.id
b3.toString
b3.ag(r.ac(0,!0))}if(t.cy){b2.f5(m,b2.ch)
b3=b2.a
r=b2.ch
b3.hR(b3.dN,r)
if(t.r.a){b3=b2.a
r=b2.cx.f
b3=b3.dO
C.d.V(b3.a,b3.d,r.a,r.b,r.c)}b3=t.x.a
if(!b3)r=!1
else r=!0
if(r){r=b2.a
q=b2.cy.ch
r=r.dP
C.d.a2(r.a,r.d,q)}if(b3){b3=b2.a
r=b2.cy.f
b3=b3.dQ
C.d.V(b3.a,b3.d,r.a,r.b,r.c)}}b3=t.y.a
r=!b3
if(r)q=!1
else q=!0
if(q){if(b3){b3=b2.a
q=b2.db.f
b3=b3.dR
C.d.a2(b3.a,b3.d,q)}b3=b4.a
b3.enable(3042)
b3.blendFunc(770,771)}for(b3=b4.a,k=0;k<m.length;++k){q=m[k]
if(!q.c&&q.d){q.c=!0
b3.activeTexture(33984+q.a)
b3.bindTexture(3553,q.b)}}q=b5.e
q.ak(b4)
q.at(b4)
q.bd(b4)
if(r)r=!1
else r=!0
if(r)b3.disable(3042)
for(k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b3.activeTexture(33984+r.a)
b3.bindTexture(3553,null)}}r=b2.a
r.toString
b3.useProgram(null)
r.x.dH()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cW().b6},
sf9:function(a){this.e=H.k(a,"$ia2",[V.as],"$aa2")}}
O.hO.prototype={
$2:function(a,b){H.a1(a)
H.a1(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aE(a,C.e.aa(b+3,4)*4))},
$S:14}
O.hP.prototype={
$2:function(a,b){H.h(a,"$iaE")
H.h(b,"$iaE")
return J.lf(a.a,b.a)},
$S:51}
O.hQ.prototype={
$2:function(a,b){H.a1(a)
H.a1(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aH(a,C.e.aa(b+3,4)*4))},
$S:14}
O.hR.prototype={
$2:function(a,b){H.h(a,"$iaH")
H.h(b,"$iaH")
return J.lf(a.a,b.a)},
$S:52}
O.hS.prototype={
$2:function(a,b){H.a1(a)
H.a1(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aJ(a,C.e.aa(b+3,4)*4))},
$S:14}
O.hT.prototype={
$2:function(a,b){H.h(a,"$iaJ")
H.h(b,"$iaJ")
return J.lf(a.a,b.a)},
$S:53}
O.hI.prototype={
aF:function(){var u,t=this
t.cF()
u=t.f
if(!(Math.abs(u-1)<$.L().a)){t.f=1
u=new D.E(t.b,u,1,[P.p])
u.b=!0
t.a.a3(u)}}}
O.e3.prototype={
aF:function(){},
dj:function(a){var u,t,s=this
if(!s.c.u(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aF()
u=s.a
u.a=null
u.a3(null)}}}
O.hJ.prototype={}
O.ba.prototype={
dh:function(a){var u,t,s=this
if(!s.f.u(0,a)){u=s.f
s.f=a
t=new D.E(s.b+".color",u,a,[V.a6])
t.b=!0
s.a.a3(t)}},
aF:function(){this.cF()
this.dh(new V.a6(1,1,1))},
saU:function(a,b){this.dj(new A.aq(!0,!1,!1))
this.dh(b)}}
O.hL.prototype={}
O.hM.prototype={
aF:function(){var u,t=this
t.cG()
u=t.ch
if(!(Math.abs(u-1)<$.L().a)){t.ch=1
u=new D.E(t.b+".refraction",u,1,[P.p])
u.b=!0
t.a.a3(u)}}}
O.hN.prototype={
dk:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.L().a)){u.ch=a
t=new D.E(u.b+".shininess",t,a,[P.p])
t.b=!0
u.a.a3(t)}},
aF:function(){this.cG()
this.dk(100)}}
O.bR.prototype={}
T.d3.prototype={}
T.d4.prototype={}
T.iT.prototype={
di:function(){if(!this.d){this.d=!0
var u=this.y
if(u!=null)u.dI()}},
gt:function(){var u=this.y
return u==null?this.y=D.W():u}}
T.iU.prototype={
iU:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=T.ly(q)
r=W.o
W.ab(u,"load",H.n(new T.iV(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
hN:function(a,b,c){var u,t,s,r
b=V.dv(b)
u=V.dv(a.width)
t=V.dv(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.li()
s.width=u
s.height=t
r=H.h(C.i.eD(s,"2d"),"$icC")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.pK(r.getImageData(0,0,s.width,s.height))}}}
T.iV.prototype={
$1:function(a){var u,t,s=this,r=3553,q=s.b,p=s.c
q.e=p.width
q.f=p.height
u=s.a
t=u.hN(p,u.b,s.d)
q.r=p.width
q.x=p.height
p=u.a
p.bindTexture(r,s.e)
p.pixelStorei(37440,s.f?1:0)
C.d.jl(p,r,0,6408,6408,5121,t)
if(s.r)p.generateMipmap(r)
p.bindTexture(r,null)
q.di();++u.e},
$S:12}
V.bl.prototype={
aJ:function(a,b){return!0},
i:function(a){return"all"},
$iaB:1}
V.aB.prototype={}
V.e0.prototype={
aJ:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)if(u[s].aJ(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa9:function(a){this.a=H.k(a,"$ib",[V.aB],"$ab")},
$iaB:1}
V.ax.prototype={
aJ:function(a,b){return!this.eK(0,b)},
i:function(a){return"!["+this.cE(0)+"]"}}
V.ik.prototype={
aJ:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.cb(this.a),t=H.cb(this.b)
return u+".."+t},
$iaB:1}
V.iu.prototype={
eP:function(a){var u,t
if(a.a.length<=0)throw H.c(P.C("May not create a SetMatcher with zero characters."))
u=new H.a3([P.m,P.Q])
for(t=new H.cO(a,a.gn(a),[H.am(a,"x",0)]);t.A();)u.k(0,t.d,!0)
this.shQ(u)},
aJ:function(a,b){return this.a.bn(0,b)},
i:function(a){var u=this.a
return P.d1(u.ga7(u),0,null)},
shQ:function(a){this.a=H.k(a,"$iy",[P.m,P.Q],"$ay")},
$iaB:1}
V.d_.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d6(this.a.l(0,b))
r.sa9(H.d([],[V.aB]))
r.c=!1
C.a.h(this.c,r)
return r},
iH:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.aJ(0,a))return r}return},
i:function(a){return this.b},
si9:function(a){this.c=H.k(a,"$ib",[V.d6],"$ab")}}
V.en.prototype={
i:function(a){var u=H.lV(this.b,"\n","\\n"),t=H.lV(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d5.prototype={
aK:function(a,b,c){var u,t,s
H.k(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.u)(c),++t){s=c[t]
this.c.k(0,s,b)}},
i:function(a){return this.b},
shI:function(a){var u=P.f
this.c=H.k(a,"$iy",[u,u],"$ay")}}
V.iY.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.d_(this,b)
u.si9(H.d([],[V.d6]))
u.d=null
this.a.k(0,b,u)}return u},
O:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.d5(a)
u=P.f
t.shI(new H.a3([u,u]))
this.b.k(0,a,t)}return t},
eu:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.en]),k=this.c,j=[P.m],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.D(a,s)
q=k.iH(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.d1(i,0,m)
throw H.c(P.C("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.d1(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.en(n==null?o.b:n,p,s)}++s}}},
si_:function(a){this.a=H.k(a,"$iy",[P.f,V.d_],"$ay")},
si2:function(a){this.b=H.k(a,"$iy",[P.f,V.d5],"$ay")}}
V.d6.prototype={
i:function(a){return this.b.b+": "+this.cE(0)}}
X.fH.prototype={
gt:function(){var u=this.fr
return u==null?this.fr=D.W():u},
a4:function(a){var u=this.fr
if(u!=null)u.F(a)},
saw:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.E("width",u,b,[P.m])
u.b=!0
t.a4(u)}},
sar:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.E("height",u,b,[P.m])
u.b=!0
t.a4(u)}},
ak:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=3553,f=36161,e=36160
if(i.y==null){u=a.a
t=i.ch
s=i.a
r=i.b
q=H.a1(u.getParameter(3379))
p=V.dv(s)
o=V.dv(r)
q=V.dv(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(g,n)
u.texParameteri(g,10242,33071)
u.texParameteri(g,10243,33071)
u.texParameteri(g,10241,9729)
u.texParameteri(g,10240,9729)
C.d.ep(u,g,0,6408,p,o,0,6408,5121,h)
u.bindTexture(g,h)
m=T.ly(n)
m.e=s
m.f=r
m.r=p
m.x=o
m.di()
t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.dI()
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
a.c=C.c.a1(s*i.a)
r=t.d
a.d=C.c.a1(r*i.b)
l=t.a
k=i.c
if(typeof k!=="number")return H.G(k)
j=C.c.a1(l*k)
t=t.b
l=i.d
if(typeof l!=="number")return H.G(l)
u.viewport(j,C.c.a1(t*l),C.c.a1(s*k),C.c.a1(r*l))
u.clearDepth(i.db)
t=i.cx
u.clearColor(t.a,t.b,t.c,t.d)
u.clear(16640)},
bd:function(a){a.a.bindFramebuffer(36160,null)}}
X.dG.prototype={$icR:1}
X.hh.prototype={
gt:function(){var u=this.x
return u==null?this.x=D.W():u},
ak:function(a){var u,t,s,r,q,p,o=a.a
o.bindFramebuffer(36160,null)
o.enable(2884)
o.enable(2929)
o.depthFunc(513)
u=o.drawingBufferWidth
t=o.drawingBufferHeight
s=this.r
r=s.a
if(typeof u!=="number")return H.G(u)
q=C.c.a1(r*u)
r=s.b
if(typeof t!=="number")return H.G(t)
p=C.c.a1(r*t)
r=C.c.a1(s.c*u)
a.c=r
s=C.c.a1(s.d*t)
a.d=s
o.viewport(q,p,r,s)
o.clearDepth(this.c)
s=this.a
o.clearColor(s.a,s.b,s.c,s.d)
o.clear(16640)},
bd:function(a){}}
X.ea.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.W():u},
a4:function(a){var u
H.h(a,"$iD")
u=this.f
if(u!=null)u.F(a)},
fS:function(){return this.a4(null)},
saV:function(a){var u,t,s=this
if(!J.P(s.b,a)){u=s.b
if(u!=null)u.gt().L(0,s.gd7())
t=s.b
s.b=a
if(a!=null)a.gt().h(0,s.gd7())
u=new D.E("mover",t,s.b,[U.ad])
u.b=!0
s.a4(u)}},
$icR:1,
$idG:1}
X.ek.prototype={}
V.bB.prototype={
bg:function(a){this.b=new P.hm(C.Q)
this.c=null
this.sbL(H.d([],[[P.b,W.aF]]))},
M:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aF]))
u=a.split("\n")
for(l=u.length,t=[W.aF],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.K(q)
o=m.b.fe(q,0,q.length)
n=o==null?q:o
C.O.eF(p,H.lV(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaB(m.d),p)}},
ed:function(a,b){var u,t,s,r,q=this
H.k(b,"$ib",[P.f],"$ab")
q.sbL(H.d([],[[P.b,W.aF]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bo():t).eu(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)q.bt(t[r])},
sbL:function(a){this.d=H.k(a,"$ib",[[P.b,W.aF]],"$ab")}}
V.l8.prototype={
$1:function(a){var u
H.h(a,"$ibf")
u=C.c.es(this.a.giL(),2)
if(u!=="0.00")P.lU(u+" fps")},
$S:55}
V.fX.prototype={
bt:function(a){var u=this
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
bo:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iZ()
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
C.a.h(a1.l(0,k).m(0,k).a,new V.bl())
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
C.a.h(a1.l(0,h).m(0,h).a,new V.bl())
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
t=new V.ax()
s=[V.aB]
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
t=new V.ax()
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
u=[P.f]
t.aK(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aK(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aK(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.hi.prototype={
bt:function(a){var u=this
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
bo:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iZ()
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
C.a.h(e.l(0,k).m(0,m).a,new V.bl())
t=e.l(0,j).m(0,i)
u=V.v(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,j).m(0,j)
t=new V.ax()
s=[V.aB]
t.sa9(H.d([],s))
C.a.h(u.a,t)
u=V.v(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,h)
t=V.v(new H.t("#"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,h)
u=new V.ax()
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
t=[P.f]
u.aK(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aK(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aK(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.hk.prototype={
bt:function(a){var u=this,t="#111"
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
bo:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iZ()
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
C.a.h(l.l(0,o).m(0,o).a,new V.bl())
C.a.h(l.l(0,s).m(0,m).a,new V.bl())
u=l.l(0,m).m(0,m)
t=new V.ax()
t.sa9(H.d([],[V.aB]))
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
t.aK(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
t=l.l(0,q)
t.d=t.a.O(q)
t=l.l(0,m)
t.d=t.a.O(m)
return l}}
V.id.prototype={
ed:function(a,b){H.k(b,"$ib",[P.f],"$ab")
this.sbL(H.d([],[[P.b,W.aF]]))
this.M(C.a.m(b,"\n"),"#111")},
bt:function(a){},
bo:function(){return}}
V.ii.prototype={
ds:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.mA().gcq().j(0,H.j(u))
if(t==null)if(d){c.$0()
m.dq(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.m0(m.c).h(0,q)
o=W.o3("radio")
o.checked=s
o.name=u
u=W.o
W.ab(o,"change",H.n(new V.ij(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.m0(m.c).h(0,r.createElement("br"))},
aS:function(a,b,c){return this.ds(a,b,c,!1)},
dq:function(a){var u,t,s=P.mA(),r=P.f,q=P.ob(s.gcq(),r,r)
q.k(0,this.a,a)
u=s.ek(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.ki([],[]).cw(""),"",t)}}
V.ij.prototype={
$1:function(a){var u=this
if(H.J(u.b.checked)){u.c.$0()
u.a.dq(u.d)}},
$S:12}
V.iy.prototype={
eQ:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.ab(q,"scroll",H.n(new V.iA(o),{func:1,ret:-1,args:[r]}),!1,r)},
du:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.f],"$ab")
this.hU()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eu(C.a.iS(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
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
if(H.q8(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.K(m[1])
l.textContent=H.K(m[0])
t.appendChild(l)}else{k=P.fi(C.y,n,C.h,!1)
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
eC:function(a){var u,t,s,r=new V.fX("dart")
r.bg("dart")
u=new V.hi("glsl")
u.bg("glsl")
t=new V.hk("html")
t.bg("html")
s=C.a.iJ(H.d([r,u,t],[V.bB]),new V.iB(a))
if(s!=null)return s
r=new V.id("plain")
r.bg("plain")
return r},
dt:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.k(b0,"$ib",[P.f],"$ab")
u=H.d([],[P.m])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.du(r).a6(r,"+")){C.a.k(b0,s,C.b.ae(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a6(r,"-")){C.a.k(b0,s,C.b.ae(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eC(a8)
q.ed(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.fi(C.y,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.m2()
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.u)(r),++a0)C.a_.il(a,r[a0])
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
for(a3=C.a.gS(r);a3.A();)c.appendChild(a3.gJ(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
ic:function(a){var u,t,s,r,q,p,o,n="auto"
H.k(a,"$ib",[P.f],"$ab")
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
hU:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iZ()
u.c=u.l(0,q)
t=u.l(0,q).m(0,p)
s=V.v(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,p).m(0,p)
s=new V.ax()
r=[V.aB]
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
s=new V.ax()
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
s=new V.ax()
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
t=new V.ax()
t.sa9(H.d([],r))
C.a.h(s.a,t)
s=V.v(new H.t("|]"))
C.a.h(t.a,s)
s=u.l(0,k).m(0,j)
t=V.v(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,k).m(0,k)
t=new V.ax()
t.sa9(H.d([],r))
C.a.h(s.a,t)
s=V.v(new H.t("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,q).m(0,i).a,new V.bl())
s=u.l(0,i).m(0,i)
t=new V.ax()
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
V.iA.prototype={
$1:function(a){P.mw(C.o,new V.iz(this.a))},
$S:12}
V.iz.prototype={
$0:function(){var u=C.c.a1(document.documentElement.scrollTop),t=this.a.style,s=H.j(-0.01*u)+"px"
t.top=s},
$S:0}
V.iB.prototype={
$1:function(a){return H.h(a,"$ibB").a===this.a},
$S:56}
V.kZ.prototype={
$0:function(){this.a.sad(0,F.lQ(1,null,null,1))},
$S:0}
V.l_.prototype={
$0:function(){this.a.sad(0,F.kL(1,!0,!0,40,1))},
$S:0}
V.l0.prototype={
$0:function(){this.a.sad(0,F.kL(0.2,!0,!0,40,0.2))},
$S:0}
V.l1.prototype={
$0:function(){this.a.sad(0,F.kL(1,!0,!1,40,0))},
$S:0}
V.l2.prototype={
$0:function(){this.a.sad(0,F.q7(6,6))},
$S:0}
V.l3.prototype={
$0:function(){this.a.sad(0,F.nm())},
$S:0}
V.l4.prototype={
$0:function(){this.a.sad(0,F.q_())},
$S:0}
V.l5.prototype={
$1:function(a){var u,t,s,r
H.h(a,"$iD")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.dt("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dt("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:8};(function aliases(){var u=J.a.prototype
u.eH=u.i
u=J.dV.prototype
u.eJ=u.i
u=P.i.prototype
u.eI=u.by
u=W.V.prototype
u.bC=u.al
u=W.f0.prototype
u.eL=u.az
u=O.e3.prototype
u.cF=u.aF
u=O.ba.prototype
u.cG=u.aF
u=V.e0.prototype
u.eK=u.aJ
u.cE=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"pE","oO",11)
u(P,"pF","oP",11)
u(P,"pG","oQ",11)
t(P,"n5","pC",3)
s(W,"pT",4,null,["$4"],["oS"],30,0)
s(W,"pU",4,null,["$4"],["oT"],30,0)
var m
r(m=E.ar.prototype,"ge9",0,0,null,["$1","$0"],["ea","j3"],1,0)
r(m,"geb",0,0,null,["$1","$0"],["ec","j4"],1,0)
r(m,"ge7",0,0,null,["$1","$0"],["e8","j2"],1,0)
r(m,"ge5",0,0,null,["$1","$0"],["e6","j_"],1,0)
q(m,"giY","iZ",5)
q(m,"gj0","j1",5)
r(m=E.em.prototype,"gcI",0,0,null,["$1","$0"],["cK","cJ"],1,0)
p(m,"gjh","el",3)
o(m=X.et.prototype,"gh2","h3",16)
o(m,"gfQ","fR",16)
o(m,"gfX","fY",4)
o(m,"gh6","h7",34)
o(m,"gh4","h5",34)
o(m,"gha","hb",4)
o(m,"ghe","hf",4)
o(m,"gh0","h1",4)
o(m,"ghc","hd",4)
o(m,"gfZ","h_",4)
o(m,"ghg","hh",36)
o(m,"ghi","hj",16)
o(m,"ghy","hz",15)
o(m,"ghu","hv",15)
o(m,"ghw","hx",15)
r(m=D.dX.prototype,"gd8",0,0,null,["$1","$0"],["d9","h8"],1,0)
o(m,"ghk","hl",49)
q(m,"gfK","fL",29)
q(m,"gho","hp",29)
r(D.bQ.prototype,"gb_",0,0,null,["$1","$0"],["X","eV"],1,0)
n(V.a5.prototype,"gn","b7",13)
n(V.M.prototype,"gn","b7",13)
n(V.bt.prototype,"gn","b7",13)
r(m=U.cK.prototype,"gaN",0,0,null,["$1","$0"],["U","ai"],1,0)
q(m,"geX","eY",24)
q(m,"ghm","hn",24)
r(U.cN.prototype,"gaN",0,0,null,["$1","$0"],["U","ai"],1,0)
r(m=U.eu.prototype,"gaN",0,0,null,["$1","$0"],["U","ai"],1,0)
o(m,"gfE","fF",2)
o(m,"gfG","fH",2)
o(m,"gfI","fJ",2)
o(m,"gfz","fA",2)
o(m,"gfB","fC",2)
o(m,"gi7","i8",2)
o(m,"gi5","i6",2)
o(m,"gi3","i4",2)
r(m=M.dH.prototype,"gaf",0,0,null,["$1","$0"],["a8","bD"],1,0)
q(m,"ghq","hr",23)
q(m,"ghs","ht",23)
r(m=M.dO.prototype,"gaf",0,0,null,["$1","$0"],["a8","bD"],1,0)
q(m,"gfT","fU",5)
q(m,"gfV","fW",5)
r(m=O.e2.prototype,"gf_",0,0,null,["$1","$0"],["a3","f0"],1,0)
r(m,"ghL",0,0,null,["$1","$0"],["df","hM"],1,0)
q(m,"gfM","fN",32)
q(m,"gfO","fP",32)
r(X.ea.prototype,"gd7",0,0,null,["$1","$0"],["a4","fS"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.R,null)
s(P.R,[H.lp,J.a,J.an,P.eO,P.i,H.cO,P.b7,H.c5,H.d9,H.fQ,H.j3,P.bE,H.cD,H.f5,P.af,H.hw,H.hy,H.hr,P.fb,P.bj,P.aO,P.ey,P.iJ,P.d0,P.iK,P.bf,P.ao,P.ky,P.kc,P.ck,P.eN,P.x,P.kq,P.hE,P.c3,P.hn,P.kw,P.kv,P.Q,P.aA,P.ac,P.b6,P.ib,P.ei,P.eG,P.hg,P.bF,P.b,P.y,P.O,P.ay,P.f,P.ai,P.cl,P.ji,P.kf,W.fT,W.bV,W.H,W.e8,W.f0,W.kl,W.dQ,W.aC,W.kb,W.fj,P.kh,P.fg,P.k6,P.S,O.a2,O.cP,E.fK,E.ar,E.il,E.em,Z.ew,Z.ex,Z.cB,Z.bG,Z.bU,D.fN,D.c4,D.D,X.dF,X.dW,X.ht,X.hB,X.bK,X.i_,X.j_,X.et,D.dL,D.ae,D.eb,D.bQ,V.a6,V.ap,V.h7,V.e4,V.as,V.a9,V.a4,V.bd,V.cX,V.a5,V.M,V.bt,U.cN,U.eu,M.dO,M.aI,A.dC,A.fC,A.aq,A.aE,A.aH,A.aJ,A.hK,A.cf,A.cg,A.cj,A.ep,A.jc,F.a8,F.ha,F.br,F.hv,F.bN,F.eg,F.iv,F.iw,F.ix,F.aj,F.ju,F.jv,F.jy,F.jA,F.jB,F.jC,O.bR,O.e3,O.hL,T.iU,V.bl,V.aB,V.e0,V.ik,V.iu,V.d_,V.en,V.d5,V.iY,X.ek,X.dG,X.ea,V.bB,V.ii,V.iy])
s(J.a,[J.hq,J.dU,J.dV,J.aS,J.bJ,J.bp,H.cS,H.bM,W.l,W.fz,W.c1,W.cC,W.b4,W.b5,W.X,W.eA,W.fY,W.h_,W.eC,W.dN,W.eE,W.h1,W.o,W.eH,W.aR,W.hl,W.eJ,W.bo,W.dZ,W.hU,W.eP,W.eQ,W.aT,W.eR,W.eU,W.aU,W.eY,W.f_,W.aW,W.f1,W.aX,W.f6,W.aK,W.f9,W.iX,W.aZ,W.fc,W.j1,W.jn,W.fk,W.fm,W.fo,W.fq,W.fs,P.b9,P.eL,P.bc,P.eW,P.ih,P.f7,P.bg,P.fe,P.fD,P.ez,P.dD,P.dR,P.ec,P.ee,P.cd,P.ef,P.el,P.eq,P.f3])
s(J.dV,[J.ic,J.bT,J.bq])
t(J.lo,J.aS)
s(J.bJ,[J.dT,J.dS])
t(P.hA,P.eO)
s(P.hA,[H.er,W.jN,W.au,P.hc])
t(H.t,H.er)
s(P.i,[H.h4,H.hF,H.db])
s(H.h4,[H.c7,H.hx])
s(P.b7,[H.hG,H.jG])
t(H.hH,H.c7)
t(H.fR,H.fQ)
s(P.bE,[H.i8,H.hs,H.jg,H.j5,H.fM,H.is,P.fB,P.e9,P.aQ,P.jh,P.je,P.ce,P.fP,P.fW])
s(H.cD,[H.ld,H.iQ,H.kT,H.kU,H.kV,P.jJ,P.jI,P.jK,P.jL,P.kp,P.ko,P.jU,P.jY,P.jV,P.jW,P.jX,P.k0,P.k1,P.k_,P.jZ,P.iL,P.iM,P.kI,P.k9,P.k8,P.ka,P.hz,P.hD,P.h2,P.h3,P.jm,P.jj,P.jk,P.jl,P.kr,P.ks,P.ku,P.kt,P.kC,P.kB,P.kD,P.kE,W.h5,W.hW,W.hY,W.ir,W.iI,W.jT,W.i6,W.i5,W.kd,W.ke,W.kn,W.kx,P.kj,P.kK,P.hd,P.he,P.fF,E.im,E.io,E.ip,E.iW,D.h8,D.h9,F.kz,F.kM,F.kO,F.kP,F.kQ,F.l9,F.la,F.lc,F.kX,F.kN,F.jE,F.jD,F.jw,F.jx,O.hO,O.hP,O.hQ,O.hR,O.hS,O.hT,T.iV,V.l8,V.ij,V.iA,V.iz,V.iB,V.kZ,V.l_,V.l0,V.l1,V.l2,V.l3,V.l4,V.l5])
s(H.iQ,[H.iG,H.cz])
t(H.jH,P.fB)
t(P.hC,P.af)
s(P.hC,[H.a3,W.jM])
t(H.e5,H.bM)
s(H.e5,[H.dg,H.di])
t(H.dh,H.dg)
t(H.cT,H.dh)
t(H.dj,H.di)
t(H.e6,H.dj)
s(H.e6,[H.i0,H.i1,H.i2,H.i3,H.i4,H.e7,H.cU])
t(P.k7,P.ky)
t(P.k5,P.kc)
t(P.fh,P.hE)
t(P.es,P.fh)
s(P.c3,[P.fI,P.h6])
t(P.bD,P.iK)
s(P.bD,[P.fJ,P.hm,P.jq,P.jp])
t(P.jo,P.h6)
s(P.ac,[P.p,P.m])
s(P.aQ,[P.cc,P.ho])
t(P.jP,P.cl)
s(W.l,[W.F,W.hb,W.cQ,W.aV,W.dk,W.aY,W.aL,W.dm,W.jF,W.dc,P.fG,P.c0])
s(W.F,[W.V,W.bA,W.dd])
s(W.V,[W.w,P.q])
s(W.w,[W.dA,W.fA,W.cy,W.bz,W.c2,W.aF,W.hf,W.cL,W.cM,W.it,W.be,W.ej,W.iO,W.iP,W.d2])
s(W.b4,[W.cE,W.fU,W.fV])
t(W.fS,W.b5)
t(W.cF,W.eA)
t(W.eD,W.eC)
t(W.dM,W.eD)
t(W.eF,W.eE)
t(W.h0,W.eF)
t(W.aG,W.c1)
t(W.eI,W.eH)
t(W.cI,W.eI)
t(W.eK,W.eJ)
t(W.c6,W.eK)
t(W.bS,W.o)
s(W.bS,[W.b8,W.ag,W.b_])
t(W.hV,W.eP)
t(W.hX,W.eQ)
t(W.eS,W.eR)
t(W.hZ,W.eS)
t(W.eV,W.eU)
t(W.cV,W.eV)
t(W.eZ,W.eY)
t(W.ie,W.eZ)
t(W.iq,W.f_)
t(W.dl,W.dk)
t(W.iD,W.dl)
t(W.f2,W.f1)
t(W.iE,W.f2)
t(W.iH,W.f6)
t(W.fa,W.f9)
t(W.iR,W.fa)
t(W.dn,W.dm)
t(W.iS,W.dn)
t(W.fd,W.fc)
t(W.j0,W.fd)
t(W.bi,W.ag)
t(W.fl,W.fk)
t(W.jO,W.fl)
t(W.eB,W.dN)
t(W.fn,W.fm)
t(W.k2,W.fn)
t(W.fp,W.fo)
t(W.eT,W.fp)
t(W.fr,W.fq)
t(W.kg,W.fr)
t(W.ft,W.fs)
t(W.kk,W.ft)
t(W.jQ,W.jM)
t(W.jR,P.iJ)
t(W.lE,W.jR)
t(W.jS,P.d0)
t(W.km,W.f0)
t(P.ki,P.kh)
t(P.al,P.k6)
t(P.eM,P.eL)
t(P.hu,P.eM)
t(P.eX,P.eW)
t(P.i9,P.eX)
t(P.cY,P.q)
t(P.f8,P.f7)
t(P.iN,P.f8)
t(P.ff,P.fe)
t(P.j2,P.ff)
t(P.fE,P.ez)
t(P.ia,P.c0)
t(P.f4,P.f3)
t(P.iF,P.f4)
s(E.fK,[Z.dE,A.cZ,T.d3])
s(D.D,[D.bH,D.bI,D.E,X.ig])
s(X.ig,[X.e_,X.bL,X.eo])
s(O.a2,[D.dX,U.cK,M.dH])
s(D.fN,[U.fO,U.ad])
t(U.dI,U.ad)
s(A.cZ,[A.dK,A.e1])
s(A.ep,[A.aM,A.j9,A.ja,A.jb,A.j7,A.aa,A.j8,A.a_,A.d7,A.jd,A.d8,A.at,A.ch,A.ci])
t(F.iC,F.ha)
t(F.j6,F.hv)
t(F.jz,F.jA)
t(F.i7,F.jB)
s(O.bR,[O.fZ,O.e2])
s(O.e3,[O.hI,O.hJ,O.ba])
s(O.ba,[O.hM,O.hN])
t(T.d4,T.d3)
t(T.iT,T.d4)
s(V.e0,[V.ax,V.d6])
s(X.ek,[X.fH,X.hh])
s(V.bB,[V.fX,V.hi,V.hk,V.id])
u(H.er,H.d9)
u(H.dg,P.x)
u(H.dh,H.c5)
u(H.di,P.x)
u(H.dj,H.c5)
u(P.eO,P.x)
u(P.fh,P.kq)
u(W.eA,W.fT)
u(W.eC,P.x)
u(W.eD,W.H)
u(W.eE,P.x)
u(W.eF,W.H)
u(W.eH,P.x)
u(W.eI,W.H)
u(W.eJ,P.x)
u(W.eK,W.H)
u(W.eP,P.af)
u(W.eQ,P.af)
u(W.eR,P.x)
u(W.eS,W.H)
u(W.eU,P.x)
u(W.eV,W.H)
u(W.eY,P.x)
u(W.eZ,W.H)
u(W.f_,P.af)
u(W.dk,P.x)
u(W.dl,W.H)
u(W.f1,P.x)
u(W.f2,W.H)
u(W.f6,P.af)
u(W.f9,P.x)
u(W.fa,W.H)
u(W.dm,P.x)
u(W.dn,W.H)
u(W.fc,P.x)
u(W.fd,W.H)
u(W.fk,P.x)
u(W.fl,W.H)
u(W.fm,P.x)
u(W.fn,W.H)
u(W.fo,P.x)
u(W.fp,W.H)
u(W.fq,P.x)
u(W.fr,W.H)
u(W.fs,P.x)
u(W.ft,W.H)
u(P.eL,P.x)
u(P.eM,W.H)
u(P.eW,P.x)
u(P.eX,W.H)
u(P.f7,P.x)
u(P.f8,W.H)
u(P.fe,P.x)
u(P.ff,W.H)
u(P.ez,P.af)
u(P.f3,P.x)
u(P.f4,W.H)})();(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bz.prototype
C.i=W.c2.prototype
C.O=W.aF.prototype
C.R=J.a.prototype
C.a=J.aS.prototype
C.S=J.dS.prototype
C.e=J.dT.prototype
C.j=J.dU.prototype
C.c=J.bJ.prototype
C.b=J.bp.prototype
C.T=J.bq.prototype
C.Z=W.cV.prototype
C.B=J.ic.prototype
C.d=P.cd.prototype
C.a_=W.be.prototype
C.C=W.ej.prototype
C.r=J.bT.prototype
C.D=W.bi.prototype
C.E=W.dc.prototype
C.a0=new P.fJ()
C.F=new P.fI()
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

C.M=new P.ib()
C.h=new P.jo()
C.N=new P.jq()
C.f=new P.k7()
C.o=new P.b6(0)
C.P=new P.b6(5e6)
C.Q=new P.hn("element",!0,!1,!1,!1)
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
C.Y=new H.fR(0,{},C.x,[P.f,P.f])})()
var v={mangledGlobalNames:{m:"int",p:"double",ac:"num",f:"String",Q:"bool",O:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.O},{func:1,ret:-1,opt:[D.D]},{func:1,ret:-1,args:[D.D]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ag]},{func:1,ret:-1,args:[P.m,[P.i,E.ar]]},{func:1,ret:P.O,args:[,,]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:P.O,args:[D.D]},{func:1,ret:P.O,args:[F.a8]},{func:1,ret:P.O,args:[F.aj,P.p,P.p]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.O,args:[W.o]},{func:1,ret:P.p},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:-1,args:[W.b_]},{func:1,ret:-1,args:[W.o]},{func:1,ret:P.f,args:[P.m]},{func:1,ret:V.a4,args:[P.p]},{func:1,ret:P.p,args:[P.p]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:-1,args:[P.m,[P.i,M.aI]]},{func:1,ret:-1,args:[P.m,[P.i,U.ad]]},{func:1,args:[,]},{func:1,ret:P.Q,args:[W.F]},{func:1,ret:P.Q,args:[W.aC]},{func:1,ret:P.Q,args:[P.f]},{func:1,ret:-1,args:[P.m,[P.i,D.ae]]},{func:1,ret:P.Q,args:[W.V,P.f,P.f,W.bV]},{func:1,ret:P.O,args:[,]},{func:1,ret:-1,args:[P.m,[P.i,V.as]]},{func:1,ret:P.O,args:[{func:1,ret:-1,args:[D.D]}]},{func:1,ret:-1,args:[W.b8]},{func:1,ret:P.O,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bi]},{func:1,ret:P.O,args:[P.ac]},{func:1,ret:W.V,args:[W.F]},{func:1,ret:-1,args:[W.F,W.F]},{func:1,args:[W.o]},{func:1,ret:P.S,args:[P.m]},{func:1,args:[,P.f]},{func:1,ret:P.O,args:[P.f,,]},{func:1,ret:P.O,args:[P.f]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.m]},{func:1,ret:[P.y,P.f,P.f],args:[[P.y,P.f,P.f],P.f]},{func:1,ret:P.Q,args:[[P.i,D.ae]]},{func:1,ret:[P.aO,,],args:[,]},{func:1,ret:P.m,args:[A.aE,A.aE]},{func:1,ret:P.m,args:[A.aH,A.aH]},{func:1,ret:P.m,args:[A.aJ,A.aJ]},{func:1,ret:P.O,args:[,],opt:[P.ay]},{func:1,ret:P.O,args:[P.bf]},{func:1,ret:P.Q,args:[V.bB]},{func:1,args:[P.f]},{func:1,ret:P.S,args:[,,]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b3=0
$.cA=null
$.m4=null
$.lI=!1
$.nc=null
$.n3=null
$.nj=null
$.kR=null
$.kW=null
$.lS=null
$.cn=null
$.ds=null
$.dt=null
$.lJ=!1
$.a0=C.f
$.az=[]
$.bn=null
$.lk=null
$.ma=null
$.m9=null
$.df=P.lr(P.f,P.bF)
$.mh=null
$.mm=null
$.bP=null
$.mr=null
$.mE=null
$.mH=null
$.mG=null
$.jr=null
$.js=null
$.jt=null
$.mF=null
$.mK=null
$.ml=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"qg","no",function(){return H.nb("_$dart_dartClosure")})
u($,"qh","lX",function(){return H.nb("_$dart_js")})
u($,"qm","np",function(){return H.bh(H.j4({
toString:function(){return"$receiver$"}}))})
u($,"qn","nq",function(){return H.bh(H.j4({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"qo","nr",function(){return H.bh(H.j4(null))})
u($,"qp","ns",function(){return H.bh(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qs","nv",function(){return H.bh(H.j4(void 0))})
u($,"qt","nw",function(){return H.bh(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qr","nu",function(){return H.bh(H.my(null))})
u($,"qq","nt",function(){return H.bh(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"qv","ny",function(){return H.bh(H.my(void 0))})
u($,"qu","nx",function(){return H.bh(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qM","lY",function(){return P.oN()})
u($,"qy","nz",function(){return P.oJ()})
u($,"qN","nD",function(){return H.oh(H.cm(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))})
u($,"qP","nF",function(){return P.ov("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qQ","nG",function(){return P.pb()})
u($,"qO","nE",function(){return P.md(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"qF","nC",function(){return Z.aN(0)})
u($,"qz","nA",function(){return Z.aN(511)})
u($,"qH","b1",function(){return Z.aN(1)})
u($,"qG","bx",function(){return Z.aN(2)})
u($,"qB","bw",function(){return Z.aN(4)})
u($,"qI","bZ",function(){return Z.aN(8)})
u($,"qJ","c_",function(){return Z.aN(16)})
u($,"qC","dw",function(){return Z.aN(32)})
u($,"qD","dx",function(){return Z.aN(64)})
u($,"qE","nB",function(){return Z.aN(96)})
u($,"qK","cx",function(){return Z.aN(128)})
u($,"qA","bv",function(){return Z.aN(256)})
u($,"qf","nn",function(){return new V.h7(1e-9)})
u($,"qe","L",function(){return $.nn()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cS,DataView:H.bM,ArrayBufferView:H.bM,Float32Array:H.cT,Float64Array:H.cT,Int16Array:H.i0,Int32Array:H.i1,Int8Array:H.i2,Uint16Array:H.i3,Uint32Array:H.i4,Uint8ClampedArray:H.e7,CanvasPixelArray:H.e7,Uint8Array:H.cU,HTMLAudioElement:W.w,HTMLBRElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLLIElement:W.w,HTMLLabelElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMediaElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableColElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLVideoElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,AccessibleNodeList:W.fz,HTMLAnchorElement:W.dA,HTMLAreaElement:W.fA,HTMLBaseElement:W.cy,Blob:W.c1,HTMLBodyElement:W.bz,HTMLCanvasElement:W.c2,CanvasRenderingContext2D:W.cC,CDATASection:W.bA,CharacterData:W.bA,Comment:W.bA,ProcessingInstruction:W.bA,Text:W.bA,CSSNumericValue:W.cE,CSSUnitValue:W.cE,CSSPerspective:W.fS,CSSCharsetRule:W.X,CSSConditionRule:W.X,CSSFontFaceRule:W.X,CSSGroupingRule:W.X,CSSImportRule:W.X,CSSKeyframeRule:W.X,MozCSSKeyframeRule:W.X,WebKitCSSKeyframeRule:W.X,CSSKeyframesRule:W.X,MozCSSKeyframesRule:W.X,WebKitCSSKeyframesRule:W.X,CSSMediaRule:W.X,CSSNamespaceRule:W.X,CSSPageRule:W.X,CSSRule:W.X,CSSStyleRule:W.X,CSSSupportsRule:W.X,CSSViewportRule:W.X,CSSStyleDeclaration:W.cF,MSStyleCSSProperties:W.cF,CSS2Properties:W.cF,CSSImageValue:W.b4,CSSKeywordValue:W.b4,CSSPositionValue:W.b4,CSSResourceValue:W.b4,CSSURLImageValue:W.b4,CSSStyleValue:W.b4,CSSMatrixComponent:W.b5,CSSRotation:W.b5,CSSScale:W.b5,CSSSkew:W.b5,CSSTranslation:W.b5,CSSTransformComponent:W.b5,CSSTransformValue:W.fU,CSSUnparsedValue:W.fV,DataTransferItemList:W.fY,HTMLDivElement:W.aF,DOMException:W.h_,ClientRectList:W.dM,DOMRectList:W.dM,DOMRectReadOnly:W.dN,DOMStringList:W.h0,DOMTokenList:W.h1,Element:W.V,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.l,Accelerometer:W.l,AccessibleNode:W.l,AmbientLightSensor:W.l,Animation:W.l,ApplicationCache:W.l,DOMApplicationCache:W.l,OfflineResourceList:W.l,BackgroundFetchRegistration:W.l,BatteryManager:W.l,BroadcastChannel:W.l,CanvasCaptureMediaStreamTrack:W.l,DedicatedWorkerGlobalScope:W.l,EventSource:W.l,FileReader:W.l,FontFaceSet:W.l,Gyroscope:W.l,XMLHttpRequest:W.l,XMLHttpRequestEventTarget:W.l,XMLHttpRequestUpload:W.l,LinearAccelerationSensor:W.l,Magnetometer:W.l,MediaDevices:W.l,MediaKeySession:W.l,MediaQueryList:W.l,MediaRecorder:W.l,MediaSource:W.l,MediaStream:W.l,MediaStreamTrack:W.l,MIDIAccess:W.l,MIDIInput:W.l,MIDIOutput:W.l,MIDIPort:W.l,NetworkInformation:W.l,Notification:W.l,OffscreenCanvas:W.l,OrientationSensor:W.l,PaymentRequest:W.l,Performance:W.l,PermissionStatus:W.l,PresentationAvailability:W.l,PresentationConnection:W.l,PresentationConnectionList:W.l,PresentationRequest:W.l,RelativeOrientationSensor:W.l,RemotePlayback:W.l,RTCDataChannel:W.l,DataChannel:W.l,RTCDTMFSender:W.l,RTCPeerConnection:W.l,webkitRTCPeerConnection:W.l,mozRTCPeerConnection:W.l,ScreenOrientation:W.l,Sensor:W.l,ServiceWorker:W.l,ServiceWorkerContainer:W.l,ServiceWorkerGlobalScope:W.l,ServiceWorkerRegistration:W.l,SharedWorker:W.l,SharedWorkerGlobalScope:W.l,SpeechRecognition:W.l,SpeechSynthesis:W.l,SpeechSynthesisUtterance:W.l,VR:W.l,VRDevice:W.l,VRDisplay:W.l,VRSession:W.l,VisualViewport:W.l,WebSocket:W.l,Worker:W.l,WorkerGlobalScope:W.l,WorkerPerformance:W.l,BluetoothDevice:W.l,BluetoothRemoteGATTCharacteristic:W.l,Clipboard:W.l,MojoInterfaceInterceptor:W.l,USB:W.l,IDBDatabase:W.l,IDBOpenDBRequest:W.l,IDBVersionChangeRequest:W.l,IDBRequest:W.l,IDBTransaction:W.l,AnalyserNode:W.l,RealtimeAnalyserNode:W.l,AudioBufferSourceNode:W.l,AudioDestinationNode:W.l,AudioNode:W.l,AudioScheduledSourceNode:W.l,AudioWorkletNode:W.l,BiquadFilterNode:W.l,ChannelMergerNode:W.l,AudioChannelMerger:W.l,ChannelSplitterNode:W.l,AudioChannelSplitter:W.l,ConstantSourceNode:W.l,ConvolverNode:W.l,DelayNode:W.l,DynamicsCompressorNode:W.l,GainNode:W.l,AudioGainNode:W.l,IIRFilterNode:W.l,MediaElementAudioSourceNode:W.l,MediaStreamAudioDestinationNode:W.l,MediaStreamAudioSourceNode:W.l,OscillatorNode:W.l,Oscillator:W.l,PannerNode:W.l,AudioPannerNode:W.l,webkitAudioPannerNode:W.l,ScriptProcessorNode:W.l,JavaScriptAudioNode:W.l,StereoPannerNode:W.l,WaveShaperNode:W.l,EventTarget:W.l,File:W.aG,FileList:W.cI,FileWriter:W.hb,HTMLFormElement:W.hf,Gamepad:W.aR,History:W.hl,HTMLCollection:W.c6,HTMLFormControlsCollection:W.c6,HTMLOptionsCollection:W.c6,ImageData:W.bo,HTMLImageElement:W.cL,HTMLInputElement:W.cM,KeyboardEvent:W.b8,Location:W.dZ,MediaList:W.hU,MessagePort:W.cQ,MIDIInputMap:W.hV,MIDIOutputMap:W.hX,MimeType:W.aT,MimeTypeArray:W.hZ,PointerEvent:W.ag,MouseEvent:W.ag,DragEvent:W.ag,Document:W.F,DocumentFragment:W.F,HTMLDocument:W.F,ShadowRoot:W.F,XMLDocument:W.F,DocumentType:W.F,Node:W.F,NodeList:W.cV,RadioNodeList:W.cV,Plugin:W.aU,PluginArray:W.ie,RTCStatsReport:W.iq,HTMLSelectElement:W.it,SourceBuffer:W.aV,SourceBufferList:W.iD,SpeechGrammar:W.aW,SpeechGrammarList:W.iE,SpeechRecognitionResult:W.aX,Storage:W.iH,CSSStyleSheet:W.aK,StyleSheet:W.aK,HTMLTableCellElement:W.be,HTMLTableDataCellElement:W.be,HTMLTableHeaderCellElement:W.be,HTMLTableElement:W.ej,HTMLTableRowElement:W.iO,HTMLTableSectionElement:W.iP,HTMLTemplateElement:W.d2,TextTrack:W.aY,TextTrackCue:W.aL,VTTCue:W.aL,TextTrackCueList:W.iR,TextTrackList:W.iS,TimeRanges:W.iX,Touch:W.aZ,TouchEvent:W.b_,TouchList:W.j0,TrackDefaultList:W.j1,CompositionEvent:W.bS,FocusEvent:W.bS,TextEvent:W.bS,UIEvent:W.bS,URL:W.jn,VideoTrackList:W.jF,WheelEvent:W.bi,Window:W.dc,DOMWindow:W.dc,Attr:W.dd,CSSRuleList:W.jO,ClientRect:W.eB,DOMRect:W.eB,GamepadList:W.k2,NamedNodeMap:W.eT,MozNamedAttrMap:W.eT,SpeechRecognitionResultList:W.kg,StyleSheetList:W.kk,SVGLength:P.b9,SVGLengthList:P.hu,SVGNumber:P.bc,SVGNumberList:P.i9,SVGPointList:P.ih,SVGScriptElement:P.cY,SVGStringList:P.iN,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.bg,SVGTransformList:P.j2,AudioBuffer:P.fD,AudioParamMap:P.fE,AudioTrackList:P.fG,AudioContext:P.c0,webkitAudioContext:P.c0,BaseAudioContext:P.c0,OfflineAudioContext:P.ia,WebGLBuffer:P.dD,WebGLFramebuffer:P.dR,WebGLProgram:P.ec,WebGLRenderbuffer:P.ee,WebGL2RenderingContext:P.cd,WebGLShader:P.ef,WebGLTexture:P.el,WebGLUniformLocation:P.eq,SQLResultSetRowList:P.iF})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e5.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.cT.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
H.dj.$nativeSuperclassTag="ArrayBufferView"
H.e6.$nativeSuperclassTag="ArrayBufferView"
W.dk.$nativeSuperclassTag="EventTarget"
W.dl.$nativeSuperclassTag="EventTarget"
W.dm.$nativeSuperclassTag="EventTarget"
W.dn.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(V.nf,[])
else V.nf([])})})()
//# sourceMappingURL=test.dart.js.map
